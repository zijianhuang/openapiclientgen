import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface BatchGetFindingsResponse {

		/** Required */
		failedFindings: Array<BatchGetFindingsError>;

		/** Required */
		findings: Array<Finding>;
	}
	export interface BatchGetFindingsResponseFormProperties {
	}
	export function CreateBatchGetFindingsResponseFormGroup() {
		return new FormGroup<BatchGetFindingsResponseFormProperties>({
		});

	}


	/** Contains information about the error that caused a finding to fail to be retrieved. */
	export interface BatchGetFindingsError {

		/** Required */
		errorCode: ErrorCode;

		/** Required */
		findingId: string;

		/** Required */
		message: string;

		/** Required */
		scanName: string;
	}

	/** Contains information about the error that caused a finding to fail to be retrieved. */
	export interface BatchGetFindingsErrorFormProperties {

		/** Required */
		errorCode: FormControl<ErrorCode | null | undefined>,

		/** Required */
		findingId: FormControl<string | null | undefined>,

		/** Required */
		message: FormControl<string | null | undefined>,

		/** Required */
		scanName: FormControl<string | null | undefined>,
	}
	export function CreateBatchGetFindingsErrorFormGroup() {
		return new FormGroup<BatchGetFindingsErrorFormProperties>({
			errorCode: new FormControl<ErrorCode | null | undefined>(undefined, [Validators.required]),
			findingId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			message: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			scanName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ErrorCode { DUPLICATE_IDENTIFIER = 0, ITEM_DOES_NOT_EXIST = 1, INTERNAL_ERROR = 2, INVALID_FINDING_ID = 3, INVALID_SCAN_NAME = 4 }


	/** Information about a finding that was detected in your code. */
	export interface Finding {
		createdAt?: Date;
		description?: string;
		detectorId?: string;
		detectorName?: string;
		detectorTags?: Array<string>;
		generatorId?: string;
		id?: string;
		remediation?: Remediation;
		resource?: Resource;
		ruleId?: string;
		severity?: Severity;
		status?: Status;
		title?: string;
		type?: string;
		updatedAt?: Date;
		vulnerability?: Vulnerability;
	}

	/** Information about a finding that was detected in your code. */
	export interface FindingFormProperties {
		createdAt: FormControl<Date | null | undefined>,
		description: FormControl<string | null | undefined>,
		detectorId: FormControl<string | null | undefined>,
		detectorName: FormControl<string | null | undefined>,
		generatorId: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		ruleId: FormControl<string | null | undefined>,
		severity: FormControl<Severity | null | undefined>,
		status: FormControl<Status | null | undefined>,
		title: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
		updatedAt: FormControl<Date | null | undefined>,
	}
	export function CreateFindingFormGroup() {
		return new FormGroup<FindingFormProperties>({
			createdAt: new FormControl<Date | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			detectorId: new FormControl<string | null | undefined>(undefined),
			detectorName: new FormControl<string | null | undefined>(undefined),
			generatorId: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			ruleId: new FormControl<string | null | undefined>(undefined),
			severity: new FormControl<Severity | null | undefined>(undefined),
			status: new FormControl<Status | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			updatedAt: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Information about how to remediate a finding. */
	export interface Remediation {
		recommendation?: Recommendation;
		suggestedFixes?: Array<SuggestedFix>;
	}

	/** Information about how to remediate a finding. */
	export interface RemediationFormProperties {
	}
	export function CreateRemediationFormGroup() {
		return new FormGroup<RemediationFormProperties>({
		});

	}


	/** Information about the recommended course of action to remediate a finding. */
	export interface Recommendation {
		text?: string;
		url?: string;
	}

	/** Information about the recommended course of action to remediate a finding. */
	export interface RecommendationFormProperties {
		text: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateRecommendationFormGroup() {
		return new FormGroup<RecommendationFormProperties>({
			text: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about the suggested code fix to remediate a finding. */
	export interface SuggestedFix {
		code?: string;
		description?: string;
	}

	/** Information about the suggested code fix to remediate a finding. */
	export interface SuggestedFixFormProperties {
		code: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
	}
	export function CreateSuggestedFixFormGroup() {
		return new FormGroup<SuggestedFixFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about a resource, such as an Amazon S3 bucket or AWS Lambda function, that contains a finding. */
	export interface Resource {
		id?: string;
		subResourceId?: string;
	}

	/** Information about a resource, such as an Amazon S3 bucket or AWS Lambda function, that contains a finding. */
	export interface ResourceFormProperties {
		id: FormControl<string | null | undefined>,
		subResourceId: FormControl<string | null | undefined>,
	}
	export function CreateResourceFormGroup() {
		return new FormGroup<ResourceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			subResourceId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum Severity { Critical = 0, High = 1, Medium = 2, Low = 3, Info = 4 }

	export enum Status { Closed = 0, Open = 1, All = 2 }


	/** Information about a security vulnerability that Amazon CodeGuru Security detected. */
	export interface Vulnerability {
		filePath?: FilePath;
		id?: string;
		itemCount?: number | null;
		referenceUrls?: Array<string>;
		relatedVulnerabilities?: Array<string>;
	}

	/** Information about a security vulnerability that Amazon CodeGuru Security detected. */
	export interface VulnerabilityFormProperties {
		id: FormControl<string | null | undefined>,
		itemCount: FormControl<number | null | undefined>,
	}
	export function CreateVulnerabilityFormGroup() {
		return new FormGroup<VulnerabilityFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			itemCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Information about the location of security vulnerabilities that Amazon CodeGuru Security detected in your code. */
	export interface FilePath {
		codeSnippet?: Array<CodeLine>;
		endLine?: number | null;
		name?: string;
		path?: string;
		startLine?: number | null;
	}

	/** Information about the location of security vulnerabilities that Amazon CodeGuru Security detected in your code. */
	export interface FilePathFormProperties {
		endLine: FormControl<number | null | undefined>,
		name: FormControl<string | null | undefined>,
		path: FormControl<string | null | undefined>,
		startLine: FormControl<number | null | undefined>,
	}
	export function CreateFilePathFormGroup() {
		return new FormGroup<FilePathFormProperties>({
			endLine: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			path: new FormControl<string | null | undefined>(undefined),
			startLine: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The line of code where a finding was detected. */
	export interface CodeLine {
		content?: string;
		number?: number | null;
	}

	/** The line of code where a finding was detected. */
	export interface CodeLineFormProperties {
		content: FormControl<string | null | undefined>,
		number: FormControl<number | null | undefined>,
	}
	export function CreateCodeLineFormGroup() {
		return new FormGroup<CodeLineFormProperties>({
			content: new FormControl<string | null | undefined>(undefined),
			number: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** An object that contains information about a finding and the scan that generated it.  */
	export interface FindingIdentifier {

		/** Required */
		findingId: string;

		/** Required */
		scanName: string;
	}

	/** An object that contains information about a finding and the scan that generated it.  */
	export interface FindingIdentifierFormProperties {

		/** Required */
		findingId: FormControl<string | null | undefined>,

		/** Required */
		scanName: FormControl<string | null | undefined>,
	}
	export function CreateFindingIdentifierFormGroup() {
		return new FormGroup<FindingIdentifierFormProperties>({
			findingId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			scanName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

	export interface ThrottlingException {
	}
	export interface ThrottlingExceptionFormProperties {
	}
	export function CreateThrottlingExceptionFormGroup() {
		return new FormGroup<ThrottlingExceptionFormProperties>({
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

	export interface AccessDeniedException {
	}
	export interface AccessDeniedExceptionFormProperties {
	}
	export function CreateAccessDeniedExceptionFormGroup() {
		return new FormGroup<AccessDeniedExceptionFormProperties>({
		});

	}

	export interface CreateScanResponse {

		/** Required */
		resourceId: ResourceId;

		/** Required */
		runId: string;

		/** Required */
		scanName: string;
		scanNameArn?: string;

		/** Required */
		scanState: ScanState;
	}
	export interface CreateScanResponseFormProperties {

		/** Required */
		runId: FormControl<string | null | undefined>,

		/** Required */
		scanName: FormControl<string | null | undefined>,
		scanNameArn: FormControl<string | null | undefined>,

		/** Required */
		scanState: FormControl<ScanState | null | undefined>,
	}
	export function CreateCreateScanResponseFormGroup() {
		return new FormGroup<CreateScanResponseFormProperties>({
			runId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			scanName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			scanNameArn: new FormControl<string | null | undefined>(undefined),
			scanState: new FormControl<ScanState | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The identifier for a resource object that contains resources where a finding was detected. */
	export interface ResourceId {
		codeArtifactId?: string;
	}

	/** The identifier for a resource object that contains resources where a finding was detected. */
	export interface ResourceIdFormProperties {
		codeArtifactId: FormControl<string | null | undefined>,
	}
	export function CreateResourceIdFormGroup() {
		return new FormGroup<ResourceIdFormProperties>({
			codeArtifactId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ScanState { InProgress = 0, Successful = 1, Failed = 2 }

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

	export interface CreateUploadUrlResponse {

		/** Required */
		codeArtifactId: string;

		/** Required */
		requestHeaders: RequestHeaderMap;

		/** Required */
		s3Url: string;
	}
	export interface CreateUploadUrlResponseFormProperties {

		/** Required */
		codeArtifactId: FormControl<string | null | undefined>,

		/** Required */
		s3Url: FormControl<string | null | undefined>,
	}
	export function CreateCreateUploadUrlResponseFormGroup() {
		return new FormGroup<CreateUploadUrlResponseFormProperties>({
			codeArtifactId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			s3Url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface RequestHeaderMap {
	}
	export interface RequestHeaderMapFormProperties {
	}
	export function CreateRequestHeaderMapFormGroup() {
		return new FormGroup<RequestHeaderMapFormProperties>({
		});

	}

	export interface GetAccountConfigurationResponse {

		/** Required */
		encryptionConfig: EncryptionConfig;
	}
	export interface GetAccountConfigurationResponseFormProperties {
	}
	export function CreateGetAccountConfigurationResponseFormGroup() {
		return new FormGroup<GetAccountConfigurationResponseFormProperties>({
		});

	}


	/** Information about account-level configuration. */
	export interface EncryptionConfig {
		kmsKeyArn?: string;
	}

	/** Information about account-level configuration. */
	export interface EncryptionConfigFormProperties {
		kmsKeyArn: FormControl<string | null | undefined>,
	}
	export function CreateEncryptionConfigFormGroup() {
		return new FormGroup<EncryptionConfigFormProperties>({
			kmsKeyArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetFindingsResponse {
		findings?: Array<Finding>;
		nextToken?: string;
	}
	export interface GetFindingsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetFindingsResponseFormGroup() {
		return new FormGroup<GetFindingsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetMetricsSummaryResponse {
		metricsSummary?: MetricsSummary;
	}
	export interface GetMetricsSummaryResponseFormProperties {
	}
	export function CreateGetMetricsSummaryResponseFormGroup() {
		return new FormGroup<GetMetricsSummaryResponseFormProperties>({
		});

	}


	/** Information about summary metrics in an account. */
	export interface MetricsSummary {
		categoriesWithMostFindings?: Array<CategoryWithFindingNum>;
		date?: Date;
		openFindings?: FindingMetricsValuePerSeverity;
		scansWithMostOpenCriticalFindings?: Array<ScanNameWithFindingNum>;
		scansWithMostOpenFindings?: Array<ScanNameWithFindingNum>;
	}

	/** Information about summary metrics in an account. */
	export interface MetricsSummaryFormProperties {
		date: FormControl<Date | null | undefined>,
	}
	export function CreateMetricsSummaryFormGroup() {
		return new FormGroup<MetricsSummaryFormProperties>({
			date: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Information about a finding category with open findings. */
	export interface CategoryWithFindingNum {
		categoryName?: string;
		findingNumber?: number | null;
	}

	/** Information about a finding category with open findings. */
	export interface CategoryWithFindingNumFormProperties {
		categoryName: FormControl<string | null | undefined>,
		findingNumber: FormControl<number | null | undefined>,
	}
	export function CreateCategoryWithFindingNumFormGroup() {
		return new FormGroup<CategoryWithFindingNumFormProperties>({
			categoryName: new FormControl<string | null | undefined>(undefined),
			findingNumber: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The severity of the issue in the code that generated a finding. */
	export interface FindingMetricsValuePerSeverity {
		critical?: number | null;
		high?: number | null;
		info?: number | null;
		low?: number | null;
		medium?: number | null;
	}

	/** The severity of the issue in the code that generated a finding. */
	export interface FindingMetricsValuePerSeverityFormProperties {
		critical: FormControl<number | null | undefined>,
		high: FormControl<number | null | undefined>,
		info: FormControl<number | null | undefined>,
		low: FormControl<number | null | undefined>,
		medium: FormControl<number | null | undefined>,
	}
	export function CreateFindingMetricsValuePerSeverityFormGroup() {
		return new FormGroup<FindingMetricsValuePerSeverityFormProperties>({
			critical: new FormControl<number | null | undefined>(undefined),
			high: new FormControl<number | null | undefined>(undefined),
			info: new FormControl<number | null | undefined>(undefined),
			low: new FormControl<number | null | undefined>(undefined),
			medium: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Information about a scan with open findings. */
	export interface ScanNameWithFindingNum {
		findingNumber?: number | null;
		scanName?: string;
	}

	/** Information about a scan with open findings. */
	export interface ScanNameWithFindingNumFormProperties {
		findingNumber: FormControl<number | null | undefined>,
		scanName: FormControl<string | null | undefined>,
	}
	export function CreateScanNameWithFindingNumFormGroup() {
		return new FormGroup<ScanNameWithFindingNumFormProperties>({
			findingNumber: new FormControl<number | null | undefined>(undefined),
			scanName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetScanResponse {

		/** Required */
		analysisType: AnalysisType;

		/** Required */
		createdAt: Date;
		numberOfRevisions?: number | null;

		/** Required */
		runId: string;

		/** Required */
		scanName: string;
		scanNameArn?: string;

		/** Required */
		scanState: ScanState;
		updatedAt?: Date;
	}
	export interface GetScanResponseFormProperties {

		/** Required */
		analysisType: FormControl<AnalysisType | null | undefined>,

		/** Required */
		createdAt: FormControl<Date | null | undefined>,
		numberOfRevisions: FormControl<number | null | undefined>,

		/** Required */
		runId: FormControl<string | null | undefined>,

		/** Required */
		scanName: FormControl<string | null | undefined>,
		scanNameArn: FormControl<string | null | undefined>,

		/** Required */
		scanState: FormControl<ScanState | null | undefined>,
		updatedAt: FormControl<Date | null | undefined>,
	}
	export function CreateGetScanResponseFormGroup() {
		return new FormGroup<GetScanResponseFormProperties>({
			analysisType: new FormControl<AnalysisType | null | undefined>(undefined, [Validators.required]),
			createdAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			numberOfRevisions: new FormControl<number | null | undefined>(undefined),
			runId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			scanName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			scanNameArn: new FormControl<string | null | undefined>(undefined),
			scanState: new FormControl<ScanState | null | undefined>(undefined, [Validators.required]),
			updatedAt: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum AnalysisType { Security = 0, All = 1 }

	export interface ListFindingsMetricsResponse {
		findingsMetrics?: Array<AccountFindingsMetric>;
		nextToken?: string;
	}
	export interface ListFindingsMetricsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListFindingsMetricsResponseFormGroup() {
		return new FormGroup<ListFindingsMetricsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A summary of findings metrics in an account. */
	export interface AccountFindingsMetric {
		closedFindings?: FindingMetricsValuePerSeverity;
		date?: Date;
		meanTimeToClose?: FindingMetricsValuePerSeverity;
		newFindings?: FindingMetricsValuePerSeverity;
		openFindings?: FindingMetricsValuePerSeverity;
	}

	/** A summary of findings metrics in an account. */
	export interface AccountFindingsMetricFormProperties {
		date: FormControl<Date | null | undefined>,
	}
	export function CreateAccountFindingsMetricFormGroup() {
		return new FormGroup<AccountFindingsMetricFormProperties>({
			date: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListScansResponse {
		nextToken?: string;
		summaries?: Array<ScanSummary>;
	}
	export interface ListScansResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListScansResponseFormGroup() {
		return new FormGroup<ListScansResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about a scan.  */
	export interface ScanSummary {

		/** Required */
		createdAt: Date;

		/** Required */
		runId: string;

		/** Required */
		scanName: string;
		scanNameArn?: string;

		/** Required */
		scanState: ScanState;
		updatedAt?: Date;
	}

	/** Information about a scan.  */
	export interface ScanSummaryFormProperties {

		/** Required */
		createdAt: FormControl<Date | null | undefined>,

		/** Required */
		runId: FormControl<string | null | undefined>,

		/** Required */
		scanName: FormControl<string | null | undefined>,
		scanNameArn: FormControl<string | null | undefined>,

		/** Required */
		scanState: FormControl<ScanState | null | undefined>,
		updatedAt: FormControl<Date | null | undefined>,
	}
	export function CreateScanSummaryFormGroup() {
		return new FormGroup<ScanSummaryFormProperties>({
			createdAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			runId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			scanName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			scanNameArn: new FormControl<string | null | undefined>(undefined),
			scanState: new FormControl<ScanState | null | undefined>(undefined, [Validators.required]),
			updatedAt: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListTagsForResourceResponse {
		tags?: TagMap;
	}
	export interface ListTagsForResourceResponseFormProperties {
	}
	export function CreateListTagsForResourceResponseFormGroup() {
		return new FormGroup<ListTagsForResourceResponseFormProperties>({
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

	export interface UpdateAccountConfigurationResponse {

		/** Required */
		encryptionConfig: EncryptionConfig;
	}
	export interface UpdateAccountConfigurationResponseFormProperties {
	}
	export function CreateUpdateAccountConfigurationResponseFormGroup() {
		return new FormGroup<UpdateAccountConfigurationResponseFormProperties>({
		});

	}

	export interface BatchGetFindingsRequest {

		/** Required */
		findingIdentifiers: Array<FindingIdentifier>;
	}
	export interface BatchGetFindingsRequestFormProperties {
	}
	export function CreateBatchGetFindingsRequestFormGroup() {
		return new FormGroup<BatchGetFindingsRequestFormProperties>({
		});

	}

	export enum ScanType { Standard = 0, Express = 1 }

	export interface CreateScanRequest {
		analysisType?: AnalysisType;
		clientToken?: string;

		/** Required */
		resourceId: ResourceId;

		/** Required */
		scanName: string;
		scanType?: ScanType;
		tags?: TagMap;
	}
	export interface CreateScanRequestFormProperties {
		analysisType: FormControl<AnalysisType | null | undefined>,
		clientToken: FormControl<string | null | undefined>,

		/** Required */
		scanName: FormControl<string | null | undefined>,
		scanType: FormControl<ScanType | null | undefined>,
	}
	export function CreateCreateScanRequestFormGroup() {
		return new FormGroup<CreateScanRequestFormProperties>({
			analysisType: new FormControl<AnalysisType | null | undefined>(undefined),
			clientToken: new FormControl<string | null | undefined>(undefined),
			scanName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			scanType: new FormControl<ScanType | null | undefined>(undefined),
		});

	}

	export interface CreateUploadUrlRequest {

		/** Required */
		scanName: string;
	}
	export interface CreateUploadUrlRequestFormProperties {

		/** Required */
		scanName: FormControl<string | null | undefined>,
	}
	export function CreateCreateUploadUrlRequestFormGroup() {
		return new FormGroup<CreateUploadUrlRequestFormProperties>({
			scanName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetAccountConfigurationRequest {
	}
	export interface GetAccountConfigurationRequestFormProperties {
	}
	export function CreateGetAccountConfigurationRequestFormGroup() {
		return new FormGroup<GetAccountConfigurationRequestFormProperties>({
		});

	}

	export interface GetFindingsRequest {
	}
	export interface GetFindingsRequestFormProperties {
	}
	export function CreateGetFindingsRequestFormGroup() {
		return new FormGroup<GetFindingsRequestFormProperties>({
		});

	}

	export interface GetMetricsSummaryRequest {
	}
	export interface GetMetricsSummaryRequestFormProperties {
	}
	export function CreateGetMetricsSummaryRequestFormGroup() {
		return new FormGroup<GetMetricsSummaryRequestFormProperties>({
		});

	}

	export interface GetScanRequest {
	}
	export interface GetScanRequestFormProperties {
	}
	export function CreateGetScanRequestFormGroup() {
		return new FormGroup<GetScanRequestFormProperties>({
		});

	}

	export interface ListFindingsMetricsRequest {
	}
	export interface ListFindingsMetricsRequestFormProperties {
	}
	export function CreateListFindingsMetricsRequestFormGroup() {
		return new FormGroup<ListFindingsMetricsRequestFormProperties>({
		});

	}

	export interface ListScansRequest {
	}
	export interface ListScansRequestFormProperties {
	}
	export function CreateListScansRequestFormGroup() {
		return new FormGroup<ListScansRequestFormProperties>({
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

	export interface UpdateAccountConfigurationRequest {

		/** Required */
		encryptionConfig: EncryptionConfig;
	}
	export interface UpdateAccountConfigurationRequestFormProperties {
	}
	export function CreateUpdateAccountConfigurationRequestFormGroup() {
		return new FormGroup<UpdateAccountConfigurationRequestFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Returns a list of all requested findings.
		 * Post batchGetFindings
		 * @return {BatchGetFindingsResponse} Success
		 */
		BatchGetFindings(requestBody: BatchGetFindingsPostBody): Observable<BatchGetFindingsResponse> {
			return this.http.post<BatchGetFindingsResponse>(this.baseUri + 'batchGetFindings', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Use to create a scan using code uploaded to an S3 bucket.
		 * Post scans
		 * @return {CreateScanResponse} Success
		 */
		CreateScan(requestBody: CreateScanPostBody): Observable<CreateScanResponse> {
			return this.http.post<CreateScanResponse>(this.baseUri + 'scans', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of all the standard scans in an account. Does not return express scans.
		 * Get scans
		 * @param {number} maxResults The maximum number of results to return in the response. Use this parameter when paginating results. If additional results exist beyond the number you specify, the <code>nextToken</code> element is returned in the response. Use <code>nextToken</code> in a subsequent request to retrieve additional results.
		 * @param {string} nextToken A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request. For subsequent calls, use the <code>nextToken</code> value returned from the previous request to continue listing results after the first page.
		 * @return {ListScansResponse} Success
		 */
		ListScans(maxResults: number | null | undefined, nextToken: string | null | undefined): Observable<ListScansResponse> {
			return this.http.get<ListScansResponse>(this.baseUri + 'scans?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
		}

		/**
		 * <p>Generates a pre-signed URL and request headers used to upload a code resource.</p> <p>You can upload your code resource to the URL and add the request headers using any HTTP client.</p>
		 * Post uploadUrl
		 * @return {CreateUploadUrlResponse} Success
		 */
		CreateUploadUrl(requestBody: CreateUploadUrlPostBody): Observable<CreateUploadUrlResponse> {
			return this.http.post<CreateUploadUrlResponse>(this.baseUri + 'uploadUrl', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Use to get account level configuration.
		 * Get accountConfiguration/get
		 * @return {GetAccountConfigurationResponse} Success
		 */
		GetAccountConfiguration(): Observable<GetAccountConfigurationResponse> {
			return this.http.get<GetAccountConfigurationResponse>(this.baseUri + 'accountConfiguration/get', {});
		}

		/**
		 * Returns a list of all findings generated by a particular scan.
		 * Get findings/{scanName}
		 * @param {number} maxResults The maximum number of results to return in the response. Use this parameter when paginating results. If additional results exist beyond the number you specify, the <code>nextToken</code> element is returned in the response. Use <code>nextToken</code> in a subsequent request to retrieve additional results.
		 * @param {string} nextToken A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request. For subsequent calls, use the <code>nextToken</code> value returned from the previous request to continue listing results after the first page.
		 * @param {string} scanName The name of the scan you want to retrieve findings from.
		 * @param {Status} status The status of the findings you want to get. Pass either <code>Open</code>, <code>Closed</code>, or <code>All</code>.
		 * @return {GetFindingsResponse} Success
		 */
		GetFindings(maxResults: number | null | undefined, nextToken: string | null | undefined, scanName: string, status: Status | null | undefined): Observable<GetFindingsResponse> {
			return this.http.get<GetFindingsResponse>(this.baseUri + 'findings/' + (scanName == null ? '' : encodeURIComponent(scanName)) + '?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&status=' + status, {});
		}

		/**
		 * Returns top level metrics about an account from a specified date, including number of open findings, the categories with most findings, the scans with most open findings, and scans with most open critical findings.
		 * Get metrics/summary#date
		 * @param {Date} date The date you want to retrieve summary metrics from, rounded to the nearest day. The date must be within the past two years since metrics data is only stored for two years. If a date outside of this range is passed, the response will be empty.
		 * @return {GetMetricsSummaryResponse} Success
		 */
		GetMetricsSummary(date: Date): Observable<GetMetricsSummaryResponse> {
			return this.http.get<GetMetricsSummaryResponse>(this.baseUri + 'metrics/summary#date?date=' + date.toISOString(), {});
		}

		/**
		 * Returns details about a scan, including whether or not a scan has completed.
		 * Get scans/{scanName}
		 * @param {string} runId UUID that identifies the individual scan run you want to view details about. You retrieve this when you call the <code>CreateScan</code> operation. Defaults to the latest scan run if missing.
		 * @param {string} scanName The name of the scan you want to view details about.
		 * @return {GetScanResponse} Success
		 */
		GetScan(runId: string | null | undefined, scanName: string): Observable<GetScanResponse> {
			return this.http.get<GetScanResponse>(this.baseUri + 'scans/' + (scanName == null ? '' : encodeURIComponent(scanName)) + '?runId=' + (runId == null ? '' : encodeURIComponent(runId)), {});
		}

		/**
		 * Returns metrics about all findings in an account within a specified time range.
		 * Get metrics/findings#endDate&startDate
		 * @param {Date} endDate The end date of the interval which you want to retrieve metrics from.
		 * @param {number} maxResults The maximum number of results to return in the response. Use this parameter when paginating results. If additional results exist beyond the number you specify, the <code>nextToken</code> element is returned in the response. Use <code>nextToken</code> in a subsequent request to retrieve additional results.
		 * @param {string} nextToken A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request. For subsequent calls, use the <code>nextToken</code> value returned from the previous request to continue listing results after the first page.
		 * @param {Date} startDate The start date of the interval which you want to retrieve metrics from.
		 * @return {ListFindingsMetricsResponse} Success
		 */
		ListFindingsMetrics(endDate: Date, maxResults: number | null | undefined, nextToken: string | null | undefined, startDate: Date): Observable<ListFindingsMetricsResponse> {
			return this.http.get<ListFindingsMetricsResponse>(this.baseUri + 'metrics/findings#endDate&startDate?endDate=' + endDate.toISOString() + '&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&startDate=' + startDate.toISOString(), {});
		}

		/**
		 * Returns a list of all tags associated with a scan.
		 * Get tags/{resourceArn}
		 * @param {string} resourceArn The ARN of the <code>ScanName</code> object. You can retrieve this ARN by calling <code>ListScans</code> or <code>GetScan</code>.
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(resourceArn: string): Observable<ListTagsForResourceResponse> {
			return this.http.get<ListTagsForResourceResponse>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), {});
		}

		/**
		 * Use to add one or more tags to an existing scan.
		 * Post tags/{resourceArn}
		 * @param {string} resourceArn The ARN of the <code>ScanName</code> object. You can retrieve this ARN by calling <code>ListScans</code> or <code>GetScan</code>.
		 * @return {void} 
		 */
		TagResource(resourceArn: string, requestBody: TagResourcePostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Use to remove one or more tags from an existing scan.
		 * Delete tags/{resourceArn}#tagKeys
		 * @param {string} resourceArn The ARN of the <code>ScanName</code> object. You can retrieve this ARN by calling <code>ListScans</code> or <code>GetScan</code>.
		 * @param {Array<string>} tagKeys A list of keys for each tag you want to remove from a scan.
		 * @return {void} 
		 */
		UntagResource(resourceArn: string, tagKeys: Array<string>): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)) + '#tagKeys&' + tagKeys.map(z => `tagKeys=${encodeURIComponent(z)}`).join('&'), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Use to update account-level configuration with an encryption key.
		 * Put updateAccountConfiguration
		 * @return {UpdateAccountConfigurationResponse} Success
		 */
		UpdateAccountConfiguration(requestBody: UpdateAccountConfigurationPutBody): Observable<UpdateAccountConfigurationResponse> {
			return this.http.put<UpdateAccountConfigurationResponse>(this.baseUri + 'updateAccountConfiguration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export interface BatchGetFindingsPostBody {

		/**
		 * A list of finding identifiers. Each identifier consists of a <code>scanName</code> and a <code>findingId</code>. You retrieve the <code>findingId</code> when you call <code>GetFindings</code>.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 25
		 */
		findingIdentifiers: Array<FindingIdentifier>;
	}
	export interface BatchGetFindingsPostBodyFormProperties {
	}
	export function CreateBatchGetFindingsPostBodyFormGroup() {
		return new FormGroup<BatchGetFindingsPostBodyFormProperties>({
		});

	}

	export interface CreateScanPostBody {

		/** The type of analysis you want CodeGuru Security to perform in the scan, either <code>Security</code> or <code>All</code>. The <code>Security</code> type only generates findings related to security. The <code>All</code> type generates both security findings and quality findings. Defaults to <code>Security</code> type if missing. */
		analysisType?: AnalysisType | null;

		/**
		 * The idempotency token for the request. Amazon CodeGuru Security uses this value to prevent the accidental creation of duplicate scans if there are failures and retries.
		 * Max length: 64
		 * Min length: 1
		 */
		clientToken?: string | null;

		/**
		 * The identifier for a resource object that contains resources where a finding was detected.
		 * Required
		 */
		resourceId: CreateScanPostBodyResourceId;

		/**
		 * The unique name that CodeGuru Security uses to track revisions across multiple scans of the same resource. Only allowed for a <code>STANDARD</code> scan type. If not specified, it will be auto generated.
		 * Required
		 * Max length: 140
		 * Min length: 1
		 */
		scanName: string;

		/** <p>The type of scan, either <code>Standard</code> or <code>Express</code>. Defaults to <code>Standard</code> type if missing.</p> <p> <code>Express</code> scans run on limited resources and use a limited set of detectors to analyze your code in near-real time. <code>Standard</code> scans have standard resource limits and use the full set of detectors to analyze your code.</p> */
		scanType?: ScanType | null;

		/** <p>An array of key-value pairs used to tag a scan. A tag is a custom attribute label with two parts:</p> <ul> <li> <p>A tag key. For example, <code>CostCenter</code>, <code>Environment</code>, or <code>Secret</code>. Tag keys are case sensitive.</p> </li> <li> <p>An optional tag value field. For example, <code>111122223333</code>, <code>Production</code>, or a team name. Omitting the tag value is the same as using an empty string. Tag values are case sensitive.</p> </li> </ul> */
		tags?: {[id: string]: string };
	}
	export interface CreateScanPostBodyFormProperties {

		/** The type of analysis you want CodeGuru Security to perform in the scan, either <code>Security</code> or <code>All</code>. The <code>Security</code> type only generates findings related to security. The <code>All</code> type generates both security findings and quality findings. Defaults to <code>Security</code> type if missing. */
		analysisType: FormControl<AnalysisType | null | undefined>,

		/**
		 * The idempotency token for the request. Amazon CodeGuru Security uses this value to prevent the accidental creation of duplicate scans if there are failures and retries.
		 * Max length: 64
		 * Min length: 1
		 */
		clientToken: FormControl<string | null | undefined>,

		/**
		 * The unique name that CodeGuru Security uses to track revisions across multiple scans of the same resource. Only allowed for a <code>STANDARD</code> scan type. If not specified, it will be auto generated.
		 * Required
		 * Max length: 140
		 * Min length: 1
		 */
		scanName: FormControl<string | null | undefined>,

		/** <p>The type of scan, either <code>Standard</code> or <code>Express</code>. Defaults to <code>Standard</code> type if missing.</p> <p> <code>Express</code> scans run on limited resources and use a limited set of detectors to analyze your code in near-real time. <code>Standard</code> scans have standard resource limits and use the full set of detectors to analyze your code.</p> */
		scanType: FormControl<ScanType | null | undefined>,

		/** <p>An array of key-value pairs used to tag a scan. A tag is a custom attribute label with two parts:</p> <ul> <li> <p>A tag key. For example, <code>CostCenter</code>, <code>Environment</code>, or <code>Secret</code>. Tag keys are case sensitive.</p> </li> <li> <p>An optional tag value field. For example, <code>111122223333</code>, <code>Production</code>, or a team name. Omitting the tag value is the same as using an empty string. Tag values are case sensitive.</p> </li> </ul> */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateScanPostBodyFormGroup() {
		return new FormGroup<CreateScanPostBodyFormProperties>({
			analysisType: new FormControl<AnalysisType | null | undefined>(undefined),
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64), Validators.pattern('^[\S]+$')]),
			scanName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(140), Validators.pattern('^[a-zA-Z0-9-_$:.]*$')]),
			scanType: new FormControl<ScanType | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateScanPostBodyResourceId {
		codeArtifactId?: string;
	}
	export interface CreateScanPostBodyResourceIdFormProperties {
		codeArtifactId: FormControl<string | null | undefined>,
	}
	export function CreateCreateScanPostBodyResourceIdFormGroup() {
		return new FormGroup<CreateScanPostBodyResourceIdFormProperties>({
			codeArtifactId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateUploadUrlPostBody {

		/**
		 * The name of the scan that will use the uploaded resource. CodeGuru Security uses the unique scan name to track revisions across multiple scans of the same resource. Use this <code>scanName</code> when you call <code>CreateScan</code> on the code resource you upload to this URL.
		 * Required
		 * Max length: 140
		 * Min length: 1
		 */
		scanName: string;
	}
	export interface CreateUploadUrlPostBodyFormProperties {

		/**
		 * The name of the scan that will use the uploaded resource. CodeGuru Security uses the unique scan name to track revisions across multiple scans of the same resource. Use this <code>scanName</code> when you call <code>CreateScan</code> on the code resource you upload to this URL.
		 * Required
		 * Max length: 140
		 * Min length: 1
		 */
		scanName: FormControl<string | null | undefined>,
	}
	export function CreateCreateUploadUrlPostBodyFormGroup() {
		return new FormGroup<CreateUploadUrlPostBodyFormProperties>({
			scanName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(140), Validators.pattern('^[a-zA-Z0-9-_$:.]*$')]),
		});

	}

	export interface TagResourcePostBody {

		/**
		 * <p>An array of key-value pairs used to tag an existing scan. A tag is a custom attribute label with two parts:</p> <ul> <li> <p>A tag key. For example, <code>CostCenter</code>, <code>Environment</code>, or <code>Secret</code>. Tag keys are case sensitive.</p> </li> <li> <p>An optional tag value field. For example, <code>111122223333</code>, <code>Production</code>, or a team name. Omitting the tag value is the same as using an empty string. Tag values are case sensitive.</p> </li> </ul>
		 * Required
		 */
		tags: {[id: string]: string };
	}
	export interface TagResourcePostBodyFormProperties {

		/**
		 * <p>An array of key-value pairs used to tag an existing scan. A tag is a custom attribute label with two parts:</p> <ul> <li> <p>A tag key. For example, <code>CostCenter</code>, <code>Environment</code>, or <code>Secret</code>. Tag keys are case sensitive.</p> </li> <li> <p>An optional tag value field. For example, <code>111122223333</code>, <code>Production</code>, or a team name. Omitting the tag value is the same as using an empty string. Tag values are case sensitive.</p> </li> </ul>
		 * Required
		 */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateTagResourcePostBodyFormGroup() {
		return new FormGroup<TagResourcePostBodyFormProperties>({
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateAccountConfigurationPutBody {

		/**
		 * Information about account-level configuration.
		 * Required
		 */
		encryptionConfig: UpdateAccountConfigurationPutBodyEncryptionConfig;
	}
	export interface UpdateAccountConfigurationPutBodyFormProperties {
	}
	export function CreateUpdateAccountConfigurationPutBodyFormGroup() {
		return new FormGroup<UpdateAccountConfigurationPutBodyFormProperties>({
		});

	}

	export interface UpdateAccountConfigurationPutBodyEncryptionConfig {
		kmsKeyArn?: string;
	}
	export interface UpdateAccountConfigurationPutBodyEncryptionConfigFormProperties {
		kmsKeyArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateAccountConfigurationPutBodyEncryptionConfigFormGroup() {
		return new FormGroup<UpdateAccountConfigurationPutBodyEncryptionConfigFormProperties>({
			kmsKeyArn: new FormControl<string | null | undefined>(undefined),
		});

	}

}

