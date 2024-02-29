import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface AssociateMemberResponse {

		/** Required */
		accountId: string;
	}
	export interface AssociateMemberResponseFormProperties {

		/** Required */
		accountId: FormControl<string | null | undefined>,
	}
	export function CreateAssociateMemberResponseFormGroup() {
		return new FormGroup<AssociateMemberResponseFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

	export interface BatchGetAccountStatusResponse {

		/** Required */
		accounts: Array<AccountState>;
		failedAccounts?: Array<FailedAccount>;
	}
	export interface BatchGetAccountStatusResponseFormProperties {
	}
	export function CreateBatchGetAccountStatusResponseFormGroup() {
		return new FormGroup<BatchGetAccountStatusResponseFormProperties>({
		});

	}


	/** An object with details the status of an Amazon Web Services account within your Amazon Inspector environment. */
	export interface AccountState {

		/** Required */
		accountId: string;

		/** Required */
		resourceState: ResourceState;

		/** Required */
		state: State;
	}

	/** An object with details the status of an Amazon Web Services account within your Amazon Inspector environment. */
	export interface AccountStateFormProperties {

		/** Required */
		accountId: FormControl<string | null | undefined>,
	}
	export function CreateAccountStateFormGroup() {
		return new FormGroup<AccountStateFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Details the state of Amazon Inspector for each resource type Amazon Inspector scans. */
	export interface ResourceState {

		/** Required */
		ec2: State;

		/** Required */
		ecr: State;

		/** An object that described the state of Amazon Inspector scans for an account. */
		lambda?: State;

		/** An object that described the state of Amazon Inspector scans for an account. */
		lambdaCode?: State;
	}

	/** Details the state of Amazon Inspector for each resource type Amazon Inspector scans. */
	export interface ResourceStateFormProperties {
	}
	export function CreateResourceStateFormGroup() {
		return new FormGroup<ResourceStateFormProperties>({
		});

	}


	/** An object that described the state of Amazon Inspector scans for an account. */
	export interface State {

		/** Required */
		errorCode: ErrorCode;

		/** Required */
		errorMessage: string;

		/** Required */
		status: Status;
	}

	/** An object that described the state of Amazon Inspector scans for an account. */
	export interface StateFormProperties {

		/** Required */
		errorCode: FormControl<ErrorCode | null | undefined>,

		/** Required */
		errorMessage: FormControl<string | null | undefined>,

		/** Required */
		status: FormControl<Status | null | undefined>,
	}
	export function CreateStateFormGroup() {
		return new FormGroup<StateFormProperties>({
			errorCode: new FormControl<ErrorCode | null | undefined>(undefined, [Validators.required]),
			errorMessage: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<Status | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ErrorCode { ALREADY_ENABLED = 'ALREADY_ENABLED', ENABLE_IN_PROGRESS = 'ENABLE_IN_PROGRESS', DISABLE_IN_PROGRESS = 'DISABLE_IN_PROGRESS', SUSPEND_IN_PROGRESS = 'SUSPEND_IN_PROGRESS', RESOURCE_NOT_FOUND = 'RESOURCE_NOT_FOUND', ACCESS_DENIED = 'ACCESS_DENIED', INTERNAL_ERROR = 'INTERNAL_ERROR', SSM_UNAVAILABLE = 'SSM_UNAVAILABLE', SSM_THROTTLED = 'SSM_THROTTLED', EVENTBRIDGE_UNAVAILABLE = 'EVENTBRIDGE_UNAVAILABLE', EVENTBRIDGE_THROTTLED = 'EVENTBRIDGE_THROTTLED', RESOURCE_SCAN_NOT_DISABLED = 'RESOURCE_SCAN_NOT_DISABLED', DISASSOCIATE_ALL_MEMBERS = 'DISASSOCIATE_ALL_MEMBERS', ACCOUNT_IS_ISOLATED = 'ACCOUNT_IS_ISOLATED' }

	export enum Status { ENABLING = 'ENABLING', ENABLED = 'ENABLED', DISABLING = 'DISABLING', DISABLED = 'DISABLED', SUSPENDING = 'SUSPENDING', SUSPENDED = 'SUSPENDED' }


	/** An object with details on why an account failed to enable Amazon Inspector. */
	export interface FailedAccount {

		/** Required */
		accountId: string;

		/** Required */
		errorCode: ErrorCode;

		/** Required */
		errorMessage: string;
		resourceStatus?: ResourceStatus;
		status?: Status;
	}

	/** An object with details on why an account failed to enable Amazon Inspector. */
	export interface FailedAccountFormProperties {

		/** Required */
		accountId: FormControl<string | null | undefined>,

		/** Required */
		errorCode: FormControl<ErrorCode | null | undefined>,

		/** Required */
		errorMessage: FormControl<string | null | undefined>,
		status: FormControl<Status | null | undefined>,
	}
	export function CreateFailedAccountFormGroup() {
		return new FormGroup<FailedAccountFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			errorCode: new FormControl<ErrorCode | null | undefined>(undefined, [Validators.required]),
			errorMessage: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<Status | null | undefined>(undefined),
		});

	}


	/** Details the status of Amazon Inspector for each resource type Amazon Inspector scans. */
	export interface ResourceStatus {

		/** Required */
		ec2: Status;

		/** Required */
		ecr: Status;
		lambda?: Status;
		lambdaCode?: Status;
	}

	/** Details the status of Amazon Inspector for each resource type Amazon Inspector scans. */
	export interface ResourceStatusFormProperties {

		/** Required */
		ec2: FormControl<Status | null | undefined>,

		/** Required */
		ecr: FormControl<Status | null | undefined>,
		lambda: FormControl<Status | null | undefined>,
		lambdaCode: FormControl<Status | null | undefined>,
	}
	export function CreateResourceStatusFormGroup() {
		return new FormGroup<ResourceStatusFormProperties>({
			ec2: new FormControl<Status | null | undefined>(undefined, [Validators.required]),
			ecr: new FormControl<Status | null | undefined>(undefined, [Validators.required]),
			lambda: new FormControl<Status | null | undefined>(undefined),
			lambdaCode: new FormControl<Status | null | undefined>(undefined),
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

	export interface BatchGetCodeSnippetResponse {
		codeSnippetResults?: Array<CodeSnippetResult>;
		errors?: Array<CodeSnippetError>;
	}
	export interface BatchGetCodeSnippetResponseFormProperties {
	}
	export function CreateBatchGetCodeSnippetResponseFormGroup() {
		return new FormGroup<BatchGetCodeSnippetResponseFormProperties>({
		});

	}


	/** Contains information on a code snippet retrieved by Amazon Inspector from a code vulnerability finding. */
	export interface CodeSnippetResult {
		codeSnippet?: Array<CodeLine>;
		endLine?: number | null;
		findingArn?: string;
		startLine?: number | null;
		suggestedFixes?: Array<SuggestedFix>;
	}

	/** Contains information on a code snippet retrieved by Amazon Inspector from a code vulnerability finding. */
	export interface CodeSnippetResultFormProperties {
		endLine: FormControl<number | null | undefined>,
		findingArn: FormControl<string | null | undefined>,
		startLine: FormControl<number | null | undefined>,
	}
	export function CreateCodeSnippetResultFormGroup() {
		return new FormGroup<CodeSnippetResultFormProperties>({
			endLine: new FormControl<number | null | undefined>(undefined),
			findingArn: new FormControl<string | null | undefined>(undefined),
			startLine: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Contains information on the lines of code associated with a code snippet. */
	export interface CodeLine {

		/** Required */
		content: string;

		/** Required */
		lineNumber: number;
	}

	/** Contains information on the lines of code associated with a code snippet. */
	export interface CodeLineFormProperties {

		/** Required */
		content: FormControl<string | null | undefined>,

		/** Required */
		lineNumber: FormControl<number | null | undefined>,
	}
	export function CreateCodeLineFormGroup() {
		return new FormGroup<CodeLineFormProperties>({
			content: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			lineNumber: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A suggested fix for a vulnerability in your Lambda function code. */
	export interface SuggestedFix {
		code?: string;
		description?: string;
	}

	/** A suggested fix for a vulnerability in your Lambda function code. */
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


	/** Contains information about any errors encountered while trying to retrieve a code snippet. */
	export interface CodeSnippetError {

		/** Required */
		errorCode: CodeSnippetErrorCode;

		/** Required */
		errorMessage: string;

		/** Required */
		findingArn: string;
	}

	/** Contains information about any errors encountered while trying to retrieve a code snippet. */
	export interface CodeSnippetErrorFormProperties {

		/** Required */
		errorCode: FormControl<CodeSnippetErrorCode | null | undefined>,

		/** Required */
		errorMessage: FormControl<string | null | undefined>,

		/** Required */
		findingArn: FormControl<string | null | undefined>,
	}
	export function CreateCodeSnippetErrorFormGroup() {
		return new FormGroup<CodeSnippetErrorFormProperties>({
			errorCode: new FormControl<CodeSnippetErrorCode | null | undefined>(undefined, [Validators.required]),
			errorMessage: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			findingArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum CodeSnippetErrorCode { INTERNAL_ERROR = 'INTERNAL_ERROR', ACCESS_DENIED = 'ACCESS_DENIED', CODE_SNIPPET_NOT_FOUND = 'CODE_SNIPPET_NOT_FOUND', INVALID_INPUT = 'INVALID_INPUT' }

	export interface BatchGetFindingDetailsResponse {
		errors?: Array<FindingDetailsError>;
		findingDetails?: Array<FindingDetail>;
	}
	export interface BatchGetFindingDetailsResponseFormProperties {
	}
	export function CreateBatchGetFindingDetailsResponseFormGroup() {
		return new FormGroup<BatchGetFindingDetailsResponseFormProperties>({
		});

	}


	/** Details about an error encountered when trying to return vulnerability data for a finding. */
	export interface FindingDetailsError {

		/** Required */
		errorCode: FindingDetailsErrorCode;

		/** Required */
		errorMessage: string;

		/** Required */
		findingArn: string;
	}

	/** Details about an error encountered when trying to return vulnerability data for a finding. */
	export interface FindingDetailsErrorFormProperties {

		/** Required */
		errorCode: FormControl<FindingDetailsErrorCode | null | undefined>,

		/** Required */
		errorMessage: FormControl<string | null | undefined>,

		/** Required */
		findingArn: FormControl<string | null | undefined>,
	}
	export function CreateFindingDetailsErrorFormGroup() {
		return new FormGroup<FindingDetailsErrorFormProperties>({
			errorCode: new FormControl<FindingDetailsErrorCode | null | undefined>(undefined, [Validators.required]),
			errorMessage: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			findingArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum FindingDetailsErrorCode { INTERNAL_ERROR = 'INTERNAL_ERROR', ACCESS_DENIED = 'ACCESS_DENIED', FINDING_DETAILS_NOT_FOUND = 'FINDING_DETAILS_NOT_FOUND', INVALID_INPUT = 'INVALID_INPUT' }


	/** Details of the vulnerability identified in a finding. */
	export interface FindingDetail {

		/** The Cybersecurity and Infrastructure Security Agency (CISA) details for a specific vulnerability. */
		cisaData?: CisaData;
		cwes?: Array<string>;
		epssScore?: number | null;
		evidences?: Array<Evidence>;

		/** Contains information on when this exploit was observed. */
		exploitObserved?: ExploitObserved;
		findingArn?: string;
		referenceUrls?: Array<string>;
		riskScore?: number | null;
		tools?: Array<string>;
		ttps?: Array<string>;
	}

	/** Details of the vulnerability identified in a finding. */
	export interface FindingDetailFormProperties {
		epssScore: FormControl<number | null | undefined>,
		findingArn: FormControl<string | null | undefined>,
		riskScore: FormControl<number | null | undefined>,
	}
	export function CreateFindingDetailFormGroup() {
		return new FormGroup<FindingDetailFormProperties>({
			epssScore: new FormControl<number | null | undefined>(undefined),
			findingArn: new FormControl<string | null | undefined>(undefined),
			riskScore: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The Cybersecurity and Infrastructure Security Agency (CISA) details for a specific vulnerability. */
	export interface CisaData {
		action?: string;
		dateAdded?: Date;
		dateDue?: Date;
	}

	/** The Cybersecurity and Infrastructure Security Agency (CISA) details for a specific vulnerability. */
	export interface CisaDataFormProperties {
		action: FormControl<string | null | undefined>,
		dateAdded: FormControl<Date | null | undefined>,
		dateDue: FormControl<Date | null | undefined>,
	}
	export function CreateCisaDataFormGroup() {
		return new FormGroup<CisaDataFormProperties>({
			action: new FormControl<string | null | undefined>(undefined),
			dateAdded: new FormControl<Date | null | undefined>(undefined),
			dateDue: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Details of the evidence for a vulnerability identified in a finding. */
	export interface Evidence {
		evidenceDetail?: string;
		evidenceRule?: string;
		severity?: string;
	}

	/** Details of the evidence for a vulnerability identified in a finding. */
	export interface EvidenceFormProperties {
		evidenceDetail: FormControl<string | null | undefined>,
		evidenceRule: FormControl<string | null | undefined>,
		severity: FormControl<string | null | undefined>,
	}
	export function CreateEvidenceFormGroup() {
		return new FormGroup<EvidenceFormProperties>({
			evidenceDetail: new FormControl<string | null | undefined>(undefined),
			evidenceRule: new FormControl<string | null | undefined>(undefined),
			severity: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information on when this exploit was observed. */
	export interface ExploitObserved {
		firstSeen?: Date;
		lastSeen?: Date;
	}

	/** Contains information on when this exploit was observed. */
	export interface ExploitObservedFormProperties {
		firstSeen: FormControl<Date | null | undefined>,
		lastSeen: FormControl<Date | null | undefined>,
	}
	export function CreateExploitObservedFormGroup() {
		return new FormGroup<ExploitObservedFormProperties>({
			firstSeen: new FormControl<Date | null | undefined>(undefined),
			lastSeen: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface BatchGetFreeTrialInfoResponse {

		/** Required */
		accounts: Array<FreeTrialAccountInfo>;

		/** Required */
		failedAccounts: Array<FreeTrialInfoError>;
	}
	export interface BatchGetFreeTrialInfoResponseFormProperties {
	}
	export function CreateBatchGetFreeTrialInfoResponseFormGroup() {
		return new FormGroup<BatchGetFreeTrialInfoResponseFormProperties>({
		});

	}


	/** Information about the Amazon Inspector free trial for an account. */
	export interface FreeTrialAccountInfo {

		/** Required */
		accountId: string;

		/** Required */
		freeTrialInfo: Array<FreeTrialInfo>;
	}

	/** Information about the Amazon Inspector free trial for an account. */
	export interface FreeTrialAccountInfoFormProperties {

		/** Required */
		accountId: FormControl<string | null | undefined>,
	}
	export function CreateFreeTrialAccountInfoFormGroup() {
		return new FormGroup<FreeTrialAccountInfoFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** An object that contains information about the Amazon Inspector free trial for an account. */
	export interface FreeTrialInfo {

		/** Required */
		end: Date;

		/** Required */
		start: Date;

		/** Required */
		status: FreeTrialStatus;

		/** Required */
		type: FreeTrialType;
	}

	/** An object that contains information about the Amazon Inspector free trial for an account. */
	export interface FreeTrialInfoFormProperties {

		/** Required */
		end: FormControl<Date | null | undefined>,

		/** Required */
		start: FormControl<Date | null | undefined>,

		/** Required */
		status: FormControl<FreeTrialStatus | null | undefined>,

		/** Required */
		type: FormControl<FreeTrialType | null | undefined>,
	}
	export function CreateFreeTrialInfoFormGroup() {
		return new FormGroup<FreeTrialInfoFormProperties>({
			end: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			start: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<FreeTrialStatus | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<FreeTrialType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum FreeTrialStatus { ACTIVE = 'ACTIVE', INACTIVE = 'INACTIVE' }

	export enum FreeTrialType { EC2 = 'EC2', ECR = 'ECR', LAMBDA = 'LAMBDA', LAMBDA_CODE = 'LAMBDA_CODE' }


	/** Information about an error received while accessing free trail data for an account. */
	export interface FreeTrialInfoError {

		/** Required */
		accountId: string;

		/** Required */
		code: FreeTrialInfoErrorCode;

		/** Required */
		message: string;
	}

	/** Information about an error received while accessing free trail data for an account. */
	export interface FreeTrialInfoErrorFormProperties {

		/** Required */
		accountId: FormControl<string | null | undefined>,

		/** Required */
		code: FormControl<FreeTrialInfoErrorCode | null | undefined>,

		/** Required */
		message: FormControl<string | null | undefined>,
	}
	export function CreateFreeTrialInfoErrorFormGroup() {
		return new FormGroup<FreeTrialInfoErrorFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			code: new FormControl<FreeTrialInfoErrorCode | null | undefined>(undefined, [Validators.required]),
			message: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum FreeTrialInfoErrorCode { ACCESS_DENIED = 'ACCESS_DENIED', INTERNAL_ERROR = 'INTERNAL_ERROR' }

	export interface BatchGetMemberEc2DeepInspectionStatusResponse {
		accountIds?: Array<MemberAccountEc2DeepInspectionStatusState>;
		failedAccountIds?: Array<FailedMemberAccountEc2DeepInspectionStatusState>;
	}
	export interface BatchGetMemberEc2DeepInspectionStatusResponseFormProperties {
	}
	export function CreateBatchGetMemberEc2DeepInspectionStatusResponseFormGroup() {
		return new FormGroup<BatchGetMemberEc2DeepInspectionStatusResponseFormProperties>({
		});

	}


	/** An object that contains details about the state of Amazon Inspector deep inspection for a member account. */
	export interface MemberAccountEc2DeepInspectionStatusState {

		/** Required */
		accountId: string;
		errorMessage?: string;
		status?: Ec2DeepInspectionStatus;
	}

	/** An object that contains details about the state of Amazon Inspector deep inspection for a member account. */
	export interface MemberAccountEc2DeepInspectionStatusStateFormProperties {

		/** Required */
		accountId: FormControl<string | null | undefined>,
		errorMessage: FormControl<string | null | undefined>,
		status: FormControl<Ec2DeepInspectionStatus | null | undefined>,
	}
	export function CreateMemberAccountEc2DeepInspectionStatusStateFormGroup() {
		return new FormGroup<MemberAccountEc2DeepInspectionStatusStateFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			errorMessage: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<Ec2DeepInspectionStatus | null | undefined>(undefined),
		});

	}

	export enum Ec2DeepInspectionStatus { ACTIVATED = 'ACTIVATED', DEACTIVATED = 'DEACTIVATED', PENDING = 'PENDING', FAILED = 'FAILED' }


	/** An object that contains details about a member account in your organization that failed to activate Amazon Inspector deep inspection. */
	export interface FailedMemberAccountEc2DeepInspectionStatusState {

		/** Required */
		accountId: string;
		ec2ScanStatus?: Status;
		errorMessage?: string;
	}

	/** An object that contains details about a member account in your organization that failed to activate Amazon Inspector deep inspection. */
	export interface FailedMemberAccountEc2DeepInspectionStatusStateFormProperties {

		/** Required */
		accountId: FormControl<string | null | undefined>,
		ec2ScanStatus: FormControl<Status | null | undefined>,
		errorMessage: FormControl<string | null | undefined>,
	}
	export function CreateFailedMemberAccountEc2DeepInspectionStatusStateFormGroup() {
		return new FormGroup<FailedMemberAccountEc2DeepInspectionStatusStateFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ec2ScanStatus: new FormControl<Status | null | undefined>(undefined),
			errorMessage: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BatchUpdateMemberEc2DeepInspectionStatusResponse {
		accountIds?: Array<MemberAccountEc2DeepInspectionStatusState>;
		failedAccountIds?: Array<FailedMemberAccountEc2DeepInspectionStatusState>;
	}
	export interface BatchUpdateMemberEc2DeepInspectionStatusResponseFormProperties {
	}
	export function CreateBatchUpdateMemberEc2DeepInspectionStatusResponseFormGroup() {
		return new FormGroup<BatchUpdateMemberEc2DeepInspectionStatusResponseFormProperties>({
		});

	}


	/** An object that contains details about the status of Amazon Inspector deep inspection for a member account in your organization. */
	export interface MemberAccountEc2DeepInspectionStatus {

		/** Required */
		accountId: string;

		/** Required */
		activateDeepInspection: boolean;
	}

	/** An object that contains details about the status of Amazon Inspector deep inspection for a member account in your organization. */
	export interface MemberAccountEc2DeepInspectionStatusFormProperties {

		/** Required */
		accountId: FormControl<string | null | undefined>,

		/** Required */
		activateDeepInspection: FormControl<boolean | null | undefined>,
	}
	export function CreateMemberAccountEc2DeepInspectionStatusFormGroup() {
		return new FormGroup<MemberAccountEc2DeepInspectionStatusFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			activateDeepInspection: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CancelFindingsReportResponse {

		/** Required */
		reportId: string;
	}
	export interface CancelFindingsReportResponseFormProperties {

		/** Required */
		reportId: FormControl<string | null | undefined>,
	}
	export function CreateCancelFindingsReportResponseFormGroup() {
		return new FormGroup<CancelFindingsReportResponseFormProperties>({
			reportId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CancelSbomExportResponse {
		reportId?: string;
	}
	export interface CancelSbomExportResponseFormProperties {
		reportId: FormControl<string | null | undefined>,
	}
	export function CreateCancelSbomExportResponseFormGroup() {
		return new FormGroup<CancelSbomExportResponseFormProperties>({
			reportId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateFilterResponse {

		/** Required */
		arn: string;
	}
	export interface CreateFilterResponseFormProperties {

		/** Required */
		arn: FormControl<string | null | undefined>,
	}
	export function CreateCreateFilterResponseFormGroup() {
		return new FormGroup<CreateFilterResponseFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** An object that describes the details of a string filter. */
	export interface StringFilter {

		/** Required */
		comparison: StringComparison;

		/** Required */
		value: string;
	}

	/** An object that describes the details of a string filter. */
	export interface StringFilterFormProperties {

		/** Required */
		comparison: FormControl<StringComparison | null | undefined>,

		/** Required */
		value: FormControl<string | null | undefined>,
	}
	export function CreateStringFilterFormGroup() {
		return new FormGroup<StringFilterFormProperties>({
			comparison: new FormControl<StringComparison | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum StringComparison { EQUALS = 'EQUALS', PREFIX = 'PREFIX', NOT_EQUALS = 'NOT_EQUALS' }


	/** Contains details on the time range used to filter findings. */
	export interface DateFilter {
		endInclusive?: Date;
		startInclusive?: Date;
	}

	/** Contains details on the time range used to filter findings. */
	export interface DateFilterFormProperties {
		endInclusive: FormControl<Date | null | undefined>,
		startInclusive: FormControl<Date | null | undefined>,
	}
	export function CreateDateFilterFormGroup() {
		return new FormGroup<DateFilterFormProperties>({
			endInclusive: new FormControl<Date | null | undefined>(undefined),
			startInclusive: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** An object that describes the details of a number filter. */
	export interface NumberFilter {
		lowerInclusive?: number | null;
		upperInclusive?: number | null;
	}

	/** An object that describes the details of a number filter. */
	export interface NumberFilterFormProperties {
		lowerInclusive: FormControl<number | null | undefined>,
		upperInclusive: FormControl<number | null | undefined>,
	}
	export function CreateNumberFilterFormGroup() {
		return new FormGroup<NumberFilterFormProperties>({
			lowerInclusive: new FormControl<number | null | undefined>(undefined),
			upperInclusive: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** An object that describes the details of a port range filter. */
	export interface PortRangeFilter {
		beginInclusive?: number | null;
		endInclusive?: number | null;
	}

	/** An object that describes the details of a port range filter. */
	export interface PortRangeFilterFormProperties {
		beginInclusive: FormControl<number | null | undefined>,
		endInclusive: FormControl<number | null | undefined>,
	}
	export function CreatePortRangeFilterFormGroup() {
		return new FormGroup<PortRangeFilterFormProperties>({
			beginInclusive: new FormControl<number | null | undefined>(undefined),
			endInclusive: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** An object that describes details of a map filter. */
	export interface MapFilter {

		/** Required */
		comparison: MapComparison;

		/** Required */
		key: string;
		value?: string;
	}

	/** An object that describes details of a map filter. */
	export interface MapFilterFormProperties {

		/** Required */
		comparison: FormControl<MapComparison | null | undefined>,

		/** Required */
		key: FormControl<string | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreateMapFilterFormGroup() {
		return new FormGroup<MapFilterFormProperties>({
			comparison: new FormControl<MapComparison | null | undefined>(undefined, [Validators.required]),
			key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum MapComparison { EQUALS = 'EQUALS' }


	/** Contains information on the details of a package filter. */
	export interface PackageFilter {
		architecture?: StringFilter;
		epoch?: NumberFilter;
		name?: StringFilter;
		release?: StringFilter;

		/** An object that describes the details of a string filter. */
		sourceLambdaLayerArn?: StringFilter;
		sourceLayerHash?: StringFilter;
		version?: StringFilter;
	}

	/** Contains information on the details of a package filter. */
	export interface PackageFilterFormProperties {
	}
	export function CreatePackageFilterFormGroup() {
		return new FormGroup<PackageFilterFormProperties>({
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

	export interface BadRequestException {
	}
	export interface BadRequestExceptionFormProperties {
	}
	export function CreateBadRequestExceptionFormGroup() {
		return new FormGroup<BadRequestExceptionFormProperties>({
		});

	}

	export interface CreateFindingsReportResponse {
		reportId?: string;
	}
	export interface CreateFindingsReportResponseFormProperties {
		reportId: FormControl<string | null | undefined>,
	}
	export function CreateCreateFindingsReportResponseFormGroup() {
		return new FormGroup<CreateFindingsReportResponseFormProperties>({
			reportId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateSbomExportResponse {
		reportId?: string;
	}
	export interface CreateSbomExportResponseFormProperties {
		reportId: FormControl<string | null | undefined>,
	}
	export function CreateCreateSbomExportResponseFormGroup() {
		return new FormGroup<CreateSbomExportResponseFormProperties>({
			reportId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A resource string filter for a software bill of materials report. */
	export interface ResourceStringFilter {

		/** Required */
		comparison: ResourceStringComparison;

		/** Required */
		value: string;
	}

	/** A resource string filter for a software bill of materials report. */
	export interface ResourceStringFilterFormProperties {

		/** Required */
		comparison: FormControl<ResourceStringComparison | null | undefined>,

		/** Required */
		value: FormControl<string | null | undefined>,
	}
	export function CreateResourceStringFilterFormGroup() {
		return new FormGroup<ResourceStringFilterFormProperties>({
			comparison: new FormControl<ResourceStringComparison | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ResourceStringComparison { EQUALS = 'EQUALS', NOT_EQUALS = 'NOT_EQUALS' }


	/** A resource map filter for a software bill of material report. */
	export interface ResourceMapFilter {

		/** Required */
		comparison: MapComparison;

		/** Required */
		key: string;
		value?: string;
	}

	/** A resource map filter for a software bill of material report. */
	export interface ResourceMapFilterFormProperties {

		/** Required */
		comparison: FormControl<MapComparison | null | undefined>,

		/** Required */
		key: FormControl<string | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreateResourceMapFilterFormGroup() {
		return new FormGroup<ResourceMapFilterFormProperties>({
			comparison: new FormControl<MapComparison | null | undefined>(undefined, [Validators.required]),
			key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteFilterResponse {

		/** Required */
		arn: string;
	}
	export interface DeleteFilterResponseFormProperties {

		/** Required */
		arn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteFilterResponseFormGroup() {
		return new FormGroup<DeleteFilterResponseFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeOrganizationConfigurationResponse {
		autoEnable?: AutoEnable;
		maxAccountLimitReached?: boolean | null;
	}
	export interface DescribeOrganizationConfigurationResponseFormProperties {
		maxAccountLimitReached: FormControl<boolean | null | undefined>,
	}
	export function CreateDescribeOrganizationConfigurationResponseFormGroup() {
		return new FormGroup<DescribeOrganizationConfigurationResponseFormProperties>({
			maxAccountLimitReached: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Represents which scan types are automatically enabled for new members of your Amazon Inspector organization. */
	export interface AutoEnable {

		/** Required */
		ec2: boolean;

		/** Required */
		ecr: boolean;
		lambda?: boolean | null;
		lambdaCode?: boolean | null;
	}

	/** Represents which scan types are automatically enabled for new members of your Amazon Inspector organization. */
	export interface AutoEnableFormProperties {

		/** Required */
		ec2: FormControl<boolean | null | undefined>,

		/** Required */
		ecr: FormControl<boolean | null | undefined>,
		lambda: FormControl<boolean | null | undefined>,
		lambdaCode: FormControl<boolean | null | undefined>,
	}
	export function CreateAutoEnableFormGroup() {
		return new FormGroup<AutoEnableFormProperties>({
			ec2: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			ecr: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			lambda: new FormControl<boolean | null | undefined>(undefined),
			lambdaCode: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface DisableResponse {

		/** Required */
		accounts: Array<Account>;
		failedAccounts?: Array<FailedAccount>;
	}
	export interface DisableResponseFormProperties {
	}
	export function CreateDisableResponseFormGroup() {
		return new FormGroup<DisableResponseFormProperties>({
		});

	}


	/** An Amazon Web Services account within your environment that Amazon Inspector has been enabled for. */
	export interface Account {

		/** Required */
		accountId: string;

		/** Required */
		resourceStatus: ResourceStatus;

		/** Required */
		status: Status;
	}

	/** An Amazon Web Services account within your environment that Amazon Inspector has been enabled for. */
	export interface AccountFormProperties {

		/** Required */
		accountId: FormControl<string | null | undefined>,

		/** Required */
		status: FormControl<Status | null | undefined>,
	}
	export function CreateAccountFormGroup() {
		return new FormGroup<AccountFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<Status | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ResourceScanType { EC2 = 'EC2', ECR = 'ECR', LAMBDA = 'LAMBDA', LAMBDA_CODE = 'LAMBDA_CODE' }

	export interface DisableDelegatedAdminAccountResponse {

		/** Required */
		delegatedAdminAccountId: string;
	}
	export interface DisableDelegatedAdminAccountResponseFormProperties {

		/** Required */
		delegatedAdminAccountId: FormControl<string | null | undefined>,
	}
	export function CreateDisableDelegatedAdminAccountResponseFormGroup() {
		return new FormGroup<DisableDelegatedAdminAccountResponseFormProperties>({
			delegatedAdminAccountId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

	export interface DisassociateMemberResponse {

		/** Required */
		accountId: string;
	}
	export interface DisassociateMemberResponseFormProperties {

		/** Required */
		accountId: FormControl<string | null | undefined>,
	}
	export function CreateDisassociateMemberResponseFormGroup() {
		return new FormGroup<DisassociateMemberResponseFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface EnableResponse {

		/** Required */
		accounts: Array<Account>;
		failedAccounts?: Array<FailedAccount>;
	}
	export interface EnableResponseFormProperties {
	}
	export function CreateEnableResponseFormGroup() {
		return new FormGroup<EnableResponseFormProperties>({
		});

	}

	export interface EnableDelegatedAdminAccountResponse {

		/** Required */
		delegatedAdminAccountId: string;
	}
	export interface EnableDelegatedAdminAccountResponseFormProperties {

		/** Required */
		delegatedAdminAccountId: FormControl<string | null | undefined>,
	}
	export function CreateEnableDelegatedAdminAccountResponseFormGroup() {
		return new FormGroup<EnableDelegatedAdminAccountResponseFormProperties>({
			delegatedAdminAccountId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetConfigurationResponse {
		ecrConfiguration?: EcrConfigurationState;
	}
	export interface GetConfigurationResponseFormProperties {
	}
	export function CreateGetConfigurationResponseFormGroup() {
		return new FormGroup<GetConfigurationResponseFormProperties>({
		});

	}


	/** Details about the state of the ECR scans for your environment. */
	export interface EcrConfigurationState {
		rescanDurationState?: EcrRescanDurationState;
	}

	/** Details about the state of the ECR scans for your environment. */
	export interface EcrConfigurationStateFormProperties {
	}
	export function CreateEcrConfigurationStateFormGroup() {
		return new FormGroup<EcrConfigurationStateFormProperties>({
		});

	}


	/** Details about the state of any changes to the ECR automated re-scan duration setting. */
	export interface EcrRescanDurationState {
		rescanDuration?: EcrRescanDuration;
		status?: EcrRescanDurationStatus;
		updatedAt?: Date;
	}

	/** Details about the state of any changes to the ECR automated re-scan duration setting. */
	export interface EcrRescanDurationStateFormProperties {
		rescanDuration: FormControl<EcrRescanDuration | null | undefined>,
		status: FormControl<EcrRescanDurationStatus | null | undefined>,
		updatedAt: FormControl<Date | null | undefined>,
	}
	export function CreateEcrRescanDurationStateFormGroup() {
		return new FormGroup<EcrRescanDurationStateFormProperties>({
			rescanDuration: new FormControl<EcrRescanDuration | null | undefined>(undefined),
			status: new FormControl<EcrRescanDurationStatus | null | undefined>(undefined),
			updatedAt: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum EcrRescanDuration { LIFETIME = 'LIFETIME', DAYS_30 = 'DAYS_30', DAYS_180 = 'DAYS_180' }

	export enum EcrRescanDurationStatus { SUCCESS = 'SUCCESS', PENDING = 'PENDING', FAILED = 'FAILED' }

	export interface GetDelegatedAdminAccountResponse {
		delegatedAdmin?: DelegatedAdmin;
	}
	export interface GetDelegatedAdminAccountResponseFormProperties {
	}
	export function CreateGetDelegatedAdminAccountResponseFormGroup() {
		return new FormGroup<GetDelegatedAdminAccountResponseFormProperties>({
		});

	}


	/** Details of the Amazon Inspector delegated administrator for your organization. */
	export interface DelegatedAdmin {
		accountId?: string;
		relationshipStatus?: RelationshipStatus;
	}

	/** Details of the Amazon Inspector delegated administrator for your organization. */
	export interface DelegatedAdminFormProperties {
		accountId: FormControl<string | null | undefined>,
		relationshipStatus: FormControl<RelationshipStatus | null | undefined>,
	}
	export function CreateDelegatedAdminFormGroup() {
		return new FormGroup<DelegatedAdminFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
			relationshipStatus: new FormControl<RelationshipStatus | null | undefined>(undefined),
		});

	}

	export enum RelationshipStatus { CREATED = 'CREATED', INVITED = 'INVITED', DISABLED = 'DISABLED', ENABLED = 'ENABLED', REMOVED = 'REMOVED', RESIGNED = 'RESIGNED', DELETED = 'DELETED', EMAIL_VERIFICATION_IN_PROGRESS = 'EMAIL_VERIFICATION_IN_PROGRESS', EMAIL_VERIFICATION_FAILED = 'EMAIL_VERIFICATION_FAILED', REGION_DISABLED = 'REGION_DISABLED', ACCOUNT_SUSPENDED = 'ACCOUNT_SUSPENDED', CANNOT_CREATE_DETECTOR_IN_ORG_MASTER = 'CANNOT_CREATE_DETECTOR_IN_ORG_MASTER' }

	export interface GetEc2DeepInspectionConfigurationResponse {
		errorMessage?: string;
		orgPackagePaths?: Array<string>;
		packagePaths?: Array<string>;
		status?: Ec2DeepInspectionStatus;
	}
	export interface GetEc2DeepInspectionConfigurationResponseFormProperties {
		errorMessage: FormControl<string | null | undefined>,
		status: FormControl<Ec2DeepInspectionStatus | null | undefined>,
	}
	export function CreateGetEc2DeepInspectionConfigurationResponseFormGroup() {
		return new FormGroup<GetEc2DeepInspectionConfigurationResponseFormProperties>({
			errorMessage: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<Ec2DeepInspectionStatus | null | undefined>(undefined),
		});

	}

	export interface GetEncryptionKeyResponse {

		/** Required */
		kmsKeyId: string;
	}
	export interface GetEncryptionKeyResponseFormProperties {

		/** Required */
		kmsKeyId: FormControl<string | null | undefined>,
	}
	export function CreateGetEncryptionKeyResponseFormGroup() {
		return new FormGroup<GetEncryptionKeyResponseFormProperties>({
			kmsKeyId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetFindingsReportStatusResponse {
		destination?: Destination;
		errorCode?: ReportingErrorCode;
		errorMessage?: string;
		filterCriteria?: FilterCriteria;
		reportId?: string;
		status?: ExternalReportStatus;
	}
	export interface GetFindingsReportStatusResponseFormProperties {
		errorCode: FormControl<ReportingErrorCode | null | undefined>,
		errorMessage: FormControl<string | null | undefined>,
		reportId: FormControl<string | null | undefined>,
		status: FormControl<ExternalReportStatus | null | undefined>,
	}
	export function CreateGetFindingsReportStatusResponseFormGroup() {
		return new FormGroup<GetFindingsReportStatusResponseFormProperties>({
			errorCode: new FormControl<ReportingErrorCode | null | undefined>(undefined),
			errorMessage: new FormControl<string | null | undefined>(undefined),
			reportId: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<ExternalReportStatus | null | undefined>(undefined),
		});

	}


	/** Contains details of the Amazon S3 bucket and KMS key used to export findings. */
	export interface Destination {

		/** Required */
		bucketName: string;
		keyPrefix?: string;

		/** Required */
		kmsKeyArn: string;
	}

	/** Contains details of the Amazon S3 bucket and KMS key used to export findings. */
	export interface DestinationFormProperties {

		/** Required */
		bucketName: FormControl<string | null | undefined>,
		keyPrefix: FormControl<string | null | undefined>,

		/** Required */
		kmsKeyArn: FormControl<string | null | undefined>,
	}
	export function CreateDestinationFormGroup() {
		return new FormGroup<DestinationFormProperties>({
			bucketName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			keyPrefix: new FormControl<string | null | undefined>(undefined),
			kmsKeyArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ReportingErrorCode { INTERNAL_ERROR = 'INTERNAL_ERROR', INVALID_PERMISSIONS = 'INVALID_PERMISSIONS', NO_FINDINGS_FOUND = 'NO_FINDINGS_FOUND', BUCKET_NOT_FOUND = 'BUCKET_NOT_FOUND', INCOMPATIBLE_BUCKET_REGION = 'INCOMPATIBLE_BUCKET_REGION', MALFORMED_KMS_KEY = 'MALFORMED_KMS_KEY' }


	/** Details on the criteria used to define the filter. */
	export interface FilterCriteria {
		awsAccountId?: Array<StringFilter>;
		codeVulnerabilityDetectorName?: Array<StringFilter>;
		codeVulnerabilityDetectorTags?: Array<StringFilter>;
		codeVulnerabilityFilePath?: Array<StringFilter>;
		componentId?: Array<StringFilter>;
		componentType?: Array<StringFilter>;
		ec2InstanceImageId?: Array<StringFilter>;
		ec2InstanceSubnetId?: Array<StringFilter>;
		ec2InstanceVpcId?: Array<StringFilter>;
		ecrImageArchitecture?: Array<StringFilter>;
		ecrImageHash?: Array<StringFilter>;
		ecrImagePushedAt?: Array<DateFilter>;
		ecrImageRegistry?: Array<StringFilter>;
		ecrImageRepositoryName?: Array<StringFilter>;
		ecrImageTags?: Array<StringFilter>;
		epssScore?: Array<NumberFilter>;
		exploitAvailable?: Array<StringFilter>;
		findingArn?: Array<StringFilter>;
		findingStatus?: Array<StringFilter>;
		findingType?: Array<StringFilter>;
		firstObservedAt?: Array<DateFilter>;
		fixAvailable?: Array<StringFilter>;
		inspectorScore?: Array<NumberFilter>;
		lambdaFunctionExecutionRoleArn?: Array<StringFilter>;
		lambdaFunctionLastModifiedAt?: Array<DateFilter>;
		lambdaFunctionLayers?: Array<StringFilter>;
		lambdaFunctionName?: Array<StringFilter>;
		lambdaFunctionRuntime?: Array<StringFilter>;
		lastObservedAt?: Array<DateFilter>;
		networkProtocol?: Array<StringFilter>;
		portRange?: Array<PortRangeFilter>;
		relatedVulnerabilities?: Array<StringFilter>;
		resourceId?: Array<StringFilter>;
		resourceTags?: Array<MapFilter>;
		resourceType?: Array<StringFilter>;
		severity?: Array<StringFilter>;
		title?: Array<StringFilter>;
		updatedAt?: Array<DateFilter>;
		vendorSeverity?: Array<StringFilter>;
		vulnerabilityId?: Array<StringFilter>;
		vulnerabilitySource?: Array<StringFilter>;
		vulnerablePackages?: Array<PackageFilter>;
	}

	/** Details on the criteria used to define the filter. */
	export interface FilterCriteriaFormProperties {
	}
	export function CreateFilterCriteriaFormGroup() {
		return new FormGroup<FilterCriteriaFormProperties>({
		});

	}

	export enum ExternalReportStatus { SUCCEEDED = 'SUCCEEDED', IN_PROGRESS = 'IN_PROGRESS', CANCELLED = 'CANCELLED', FAILED = 'FAILED' }

	export interface GetMemberResponse {
		member?: Member;
	}
	export interface GetMemberResponseFormProperties {
	}
	export function CreateGetMemberResponseFormGroup() {
		return new FormGroup<GetMemberResponseFormProperties>({
		});

	}


	/** Details on a member account in your organization. */
	export interface Member {
		accountId?: string;
		delegatedAdminAccountId?: string;
		relationshipStatus?: RelationshipStatus;
		updatedAt?: Date;
	}

	/** Details on a member account in your organization. */
	export interface MemberFormProperties {
		accountId: FormControl<string | null | undefined>,
		delegatedAdminAccountId: FormControl<string | null | undefined>,
		relationshipStatus: FormControl<RelationshipStatus | null | undefined>,
		updatedAt: FormControl<Date | null | undefined>,
	}
	export function CreateMemberFormGroup() {
		return new FormGroup<MemberFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
			delegatedAdminAccountId: new FormControl<string | null | undefined>(undefined),
			relationshipStatus: new FormControl<RelationshipStatus | null | undefined>(undefined),
			updatedAt: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface GetSbomExportResponse {
		errorCode?: ReportingErrorCode;
		errorMessage?: string;
		filterCriteria?: ResourceFilterCriteria;
		format?: SbomReportFormat;
		reportId?: string;

		/** Contains details of the Amazon S3 bucket and KMS key used to export findings. */
		s3Destination?: Destination;
		status?: ExternalReportStatus;
	}
	export interface GetSbomExportResponseFormProperties {
		errorCode: FormControl<ReportingErrorCode | null | undefined>,
		errorMessage: FormControl<string | null | undefined>,
		format: FormControl<SbomReportFormat | null | undefined>,
		reportId: FormControl<string | null | undefined>,
		status: FormControl<ExternalReportStatus | null | undefined>,
	}
	export function CreateGetSbomExportResponseFormGroup() {
		return new FormGroup<GetSbomExportResponseFormProperties>({
			errorCode: new FormControl<ReportingErrorCode | null | undefined>(undefined),
			errorMessage: new FormControl<string | null | undefined>(undefined),
			format: new FormControl<SbomReportFormat | null | undefined>(undefined),
			reportId: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<ExternalReportStatus | null | undefined>(undefined),
		});

	}


	/** The resource filter criteria for a Software bill of materials (SBOM) report. */
	export interface ResourceFilterCriteria {
		accountId?: Array<ResourceStringFilter>;
		ec2InstanceTags?: Array<ResourceMapFilter>;
		ecrImageTags?: Array<ResourceStringFilter>;
		ecrRepositoryName?: Array<ResourceStringFilter>;
		lambdaFunctionName?: Array<ResourceStringFilter>;
		lambdaFunctionTags?: Array<ResourceMapFilter>;
		resourceId?: Array<ResourceStringFilter>;
		resourceType?: Array<ResourceStringFilter>;
	}

	/** The resource filter criteria for a Software bill of materials (SBOM) report. */
	export interface ResourceFilterCriteriaFormProperties {
	}
	export function CreateResourceFilterCriteriaFormGroup() {
		return new FormGroup<ResourceFilterCriteriaFormProperties>({
		});

	}

	export enum SbomReportFormat { CYCLONEDX_1_4 = 'CYCLONEDX_1_4', SPDX_2_3 = 'SPDX_2_3' }

	export interface ListAccountPermissionsResponse {
		nextToken?: string;

		/** Required */
		permissions: Array<Permission>;
	}
	export interface ListAccountPermissionsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListAccountPermissionsResponseFormGroup() {
		return new FormGroup<ListAccountPermissionsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information on the permissions an account has within Amazon Inspector. */
	export interface Permission {

		/** Required */
		operation: Operation;

		/** Required */
		service: Service;
	}

	/** Contains information on the permissions an account has within Amazon Inspector. */
	export interface PermissionFormProperties {

		/** Required */
		operation: FormControl<Operation | null | undefined>,

		/** Required */
		service: FormControl<Service | null | undefined>,
	}
	export function CreatePermissionFormGroup() {
		return new FormGroup<PermissionFormProperties>({
			operation: new FormControl<Operation | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<Service | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum Operation { ENABLE_SCANNING = 'ENABLE_SCANNING', DISABLE_SCANNING = 'DISABLE_SCANNING', ENABLE_REPOSITORY = 'ENABLE_REPOSITORY', DISABLE_REPOSITORY = 'DISABLE_REPOSITORY' }

	export enum Service { EC2 = 'EC2', ECR = 'ECR', LAMBDA = 'LAMBDA' }

	export interface ListCoverageResponse {
		coveredResources?: Array<CoveredResource>;
		nextToken?: string;
	}
	export interface ListCoverageResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListCoverageResponseFormGroup() {
		return new FormGroup<ListCoverageResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An object that contains details about a resource covered by Amazon Inspector. */
	export interface CoveredResource {

		/** Required */
		accountId: string;
		lastScannedAt?: Date;

		/** Required */
		resourceId: string;
		resourceMetadata?: ResourceScanMetadata;

		/** Required */
		resourceType: CoverageResourceType;
		scanStatus?: ScanStatus;

		/** Required */
		scanType: ScanType;
	}

	/** An object that contains details about a resource covered by Amazon Inspector. */
	export interface CoveredResourceFormProperties {

		/** Required */
		accountId: FormControl<string | null | undefined>,
		lastScannedAt: FormControl<Date | null | undefined>,

		/** Required */
		resourceId: FormControl<string | null | undefined>,

		/** Required */
		resourceType: FormControl<CoverageResourceType | null | undefined>,

		/** Required */
		scanType: FormControl<ScanType | null | undefined>,
	}
	export function CreateCoveredResourceFormGroup() {
		return new FormGroup<CoveredResourceFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			lastScannedAt: new FormControl<Date | null | undefined>(undefined),
			resourceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resourceType: new FormControl<CoverageResourceType | null | undefined>(undefined, [Validators.required]),
			scanType: new FormControl<ScanType | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** An object that contains details about the metadata for an Amazon ECR resource. */
	export interface ResourceScanMetadata {
		ec2?: Ec2Metadata;
		ecrImage?: EcrContainerImageMetadata;
		ecrRepository?: EcrRepositoryMetadata;
		lambdaFunction?: LambdaFunctionMetadata;
	}

	/** An object that contains details about the metadata for an Amazon ECR resource. */
	export interface ResourceScanMetadataFormProperties {
	}
	export function CreateResourceScanMetadataFormGroup() {
		return new FormGroup<ResourceScanMetadataFormProperties>({
		});

	}


	/** Meta data details of an Amazon EC2 instance. */
	export interface Ec2Metadata {
		amiId?: string;
		platform?: Ec2Platform;
		tags?: TagMap;
	}

	/** Meta data details of an Amazon EC2 instance. */
	export interface Ec2MetadataFormProperties {
		amiId: FormControl<string | null | undefined>,
		platform: FormControl<Ec2Platform | null | undefined>,
	}
	export function CreateEc2MetadataFormGroup() {
		return new FormGroup<Ec2MetadataFormProperties>({
			amiId: new FormControl<string | null | undefined>(undefined),
			platform: new FormControl<Ec2Platform | null | undefined>(undefined),
		});

	}

	export enum Ec2Platform { WINDOWS = 'WINDOWS', LINUX = 'LINUX', UNKNOWN = 'UNKNOWN' }

	export interface TagMap {
	}
	export interface TagMapFormProperties {
	}
	export function CreateTagMapFormGroup() {
		return new FormGroup<TagMapFormProperties>({
		});

	}


	/** Information on the Amazon ECR image metadata associated with a finding. */
	export interface EcrContainerImageMetadata {
		tags?: Array<string>;
	}

	/** Information on the Amazon ECR image metadata associated with a finding. */
	export interface EcrContainerImageMetadataFormProperties {
	}
	export function CreateEcrContainerImageMetadataFormGroup() {
		return new FormGroup<EcrContainerImageMetadataFormProperties>({
		});

	}


	/** Information on the Amazon ECR repository metadata associated with a finding. */
	export interface EcrRepositoryMetadata {
		name?: string;
		scanFrequency?: EcrScanFrequency;
	}

	/** Information on the Amazon ECR repository metadata associated with a finding. */
	export interface EcrRepositoryMetadataFormProperties {
		name: FormControl<string | null | undefined>,
		scanFrequency: FormControl<EcrScanFrequency | null | undefined>,
	}
	export function CreateEcrRepositoryMetadataFormGroup() {
		return new FormGroup<EcrRepositoryMetadataFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			scanFrequency: new FormControl<EcrScanFrequency | null | undefined>(undefined),
		});

	}

	export enum EcrScanFrequency { MANUAL = 'MANUAL', SCAN_ON_PUSH = 'SCAN_ON_PUSH', CONTINUOUS_SCAN = 'CONTINUOUS_SCAN' }


	/** The AWS Lambda function metadata. */
	export interface LambdaFunctionMetadata {
		functionName?: string;
		functionTags?: TagMap;
		layers?: Array<string>;
		runtime?: Runtime;
	}

	/** The AWS Lambda function metadata. */
	export interface LambdaFunctionMetadataFormProperties {
		functionName: FormControl<string | null | undefined>,
		runtime: FormControl<Runtime | null | undefined>,
	}
	export function CreateLambdaFunctionMetadataFormGroup() {
		return new FormGroup<LambdaFunctionMetadataFormProperties>({
			functionName: new FormControl<string | null | undefined>(undefined),
			runtime: new FormControl<Runtime | null | undefined>(undefined),
		});

	}

	export enum Runtime { NODEJS = 'NODEJS', NODEJS_12_X = 'NODEJS_12_X', NODEJS_14_X = 'NODEJS_14_X', NODEJS_16_X = 'NODEJS_16_X', JAVA_8 = 'JAVA_8', JAVA_8_AL2 = 'JAVA_8_AL2', JAVA_11 = 'JAVA_11', PYTHON_3_7 = 'PYTHON_3_7', PYTHON_3_8 = 'PYTHON_3_8', PYTHON_3_9 = 'PYTHON_3_9', UNSUPPORTED = 'UNSUPPORTED', NODEJS_18_X = 'NODEJS_18_X', GO_1_X = 'GO_1_X', JAVA_17 = 'JAVA_17', PYTHON_3_10 = 'PYTHON_3_10' }

	export enum CoverageResourceType { AWS_EC2_INSTANCE = 'AWS_EC2_INSTANCE', AWS_ECR_CONTAINER_IMAGE = 'AWS_ECR_CONTAINER_IMAGE', AWS_ECR_REPOSITORY = 'AWS_ECR_REPOSITORY', AWS_LAMBDA_FUNCTION = 'AWS_LAMBDA_FUNCTION' }


	/** The status of the scan. */
	export interface ScanStatus {

		/** Required */
		reason: ScanStatusReason;

		/** Required */
		statusCode: FreeTrialStatus;
	}

	/** The status of the scan. */
	export interface ScanStatusFormProperties {

		/** Required */
		reason: FormControl<ScanStatusReason | null | undefined>,

		/** Required */
		statusCode: FormControl<FreeTrialStatus | null | undefined>,
	}
	export function CreateScanStatusFormGroup() {
		return new FormGroup<ScanStatusFormProperties>({
			reason: new FormControl<ScanStatusReason | null | undefined>(undefined, [Validators.required]),
			statusCode: new FormControl<FreeTrialStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ScanStatusReason { PENDING_INITIAL_SCAN = 'PENDING_INITIAL_SCAN', ACCESS_DENIED = 'ACCESS_DENIED', INTERNAL_ERROR = 'INTERNAL_ERROR', UNMANAGED_EC2_INSTANCE = 'UNMANAGED_EC2_INSTANCE', UNSUPPORTED_OS = 'UNSUPPORTED_OS', SCAN_ELIGIBILITY_EXPIRED = 'SCAN_ELIGIBILITY_EXPIRED', RESOURCE_TERMINATED = 'RESOURCE_TERMINATED', SUCCESSFUL = 'SUCCESSFUL', NO_RESOURCES_FOUND = 'NO_RESOURCES_FOUND', IMAGE_SIZE_EXCEEDED = 'IMAGE_SIZE_EXCEEDED', SCAN_FREQUENCY_MANUAL = 'SCAN_FREQUENCY_MANUAL', SCAN_FREQUENCY_SCAN_ON_PUSH = 'SCAN_FREQUENCY_SCAN_ON_PUSH', EC2_INSTANCE_STOPPED = 'EC2_INSTANCE_STOPPED', PENDING_DISABLE = 'PENDING_DISABLE', NO_INVENTORY = 'NO_INVENTORY', STALE_INVENTORY = 'STALE_INVENTORY', EXCLUDED_BY_TAG = 'EXCLUDED_BY_TAG', UNSUPPORTED_RUNTIME = 'UNSUPPORTED_RUNTIME', UNSUPPORTED_MEDIA_TYPE = 'UNSUPPORTED_MEDIA_TYPE', UNSUPPORTED_CONFIG_FILE = 'UNSUPPORTED_CONFIG_FILE', DEEP_INSPECTION_PACKAGE_COLLECTION_LIMIT_EXCEEDED = 'DEEP_INSPECTION_PACKAGE_COLLECTION_LIMIT_EXCEEDED', DEEP_INSPECTION_DAILY_SSM_INVENTORY_LIMIT_EXCEEDED = 'DEEP_INSPECTION_DAILY_SSM_INVENTORY_LIMIT_EXCEEDED', DEEP_INSPECTION_COLLECTION_TIME_LIMIT_EXCEEDED = 'DEEP_INSPECTION_COLLECTION_TIME_LIMIT_EXCEEDED', DEEP_INSPECTION_NO_INVENTORY = 'DEEP_INSPECTION_NO_INVENTORY' }

	export enum ScanType { NETWORK = 'NETWORK', PACKAGE = 'PACKAGE', CODE = 'CODE' }


	/** Contains details of a coverage string filter. */
	export interface CoverageStringFilter {

		/** Required */
		comparison: ResourceStringComparison;

		/** Required */
		value: string;
	}

	/** Contains details of a coverage string filter. */
	export interface CoverageStringFilterFormProperties {

		/** Required */
		comparison: FormControl<ResourceStringComparison | null | undefined>,

		/** Required */
		value: FormControl<string | null | undefined>,
	}
	export function CreateCoverageStringFilterFormGroup() {
		return new FormGroup<CoverageStringFilterFormProperties>({
			comparison: new FormControl<ResourceStringComparison | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Contains details of a coverage map filter. */
	export interface CoverageMapFilter {

		/** Required */
		comparison: MapComparison;

		/** Required */
		key: string;
		value?: string;
	}

	/** Contains details of a coverage map filter. */
	export interface CoverageMapFilterFormProperties {

		/** Required */
		comparison: FormControl<MapComparison | null | undefined>,

		/** Required */
		key: FormControl<string | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreateCoverageMapFilterFormGroup() {
		return new FormGroup<CoverageMapFilterFormProperties>({
			comparison: new FormControl<MapComparison | null | undefined>(undefined, [Validators.required]),
			key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains details of a coverage date filter. */
	export interface CoverageDateFilter {
		endInclusive?: Date;
		startInclusive?: Date;
	}

	/** Contains details of a coverage date filter. */
	export interface CoverageDateFilterFormProperties {
		endInclusive: FormControl<Date | null | undefined>,
		startInclusive: FormControl<Date | null | undefined>,
	}
	export function CreateCoverageDateFilterFormGroup() {
		return new FormGroup<CoverageDateFilterFormProperties>({
			endInclusive: new FormControl<Date | null | undefined>(undefined),
			startInclusive: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListCoverageStatisticsResponse {
		countsByGroup?: Array<Counts>;
		nextToken?: string;

		/** Required */
		totalCounts: number;
	}
	export interface ListCoverageStatisticsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,

		/** Required */
		totalCounts: FormControl<number | null | undefined>,
	}
	export function CreateListCoverageStatisticsResponseFormGroup() {
		return new FormGroup<ListCoverageStatisticsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
			totalCounts: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** a structure that contains information on the count of resources within a group. */
	export interface Counts {
		count?: number | null;
		groupKey?: GroupKey;
	}

	/** a structure that contains information on the count of resources within a group. */
	export interface CountsFormProperties {
		count: FormControl<number | null | undefined>,
		groupKey: FormControl<GroupKey | null | undefined>,
	}
	export function CreateCountsFormGroup() {
		return new FormGroup<CountsFormProperties>({
			count: new FormControl<number | null | undefined>(undefined),
			groupKey: new FormControl<GroupKey | null | undefined>(undefined),
		});

	}

	export enum GroupKey { SCAN_STATUS_CODE = 'SCAN_STATUS_CODE', SCAN_STATUS_REASON = 'SCAN_STATUS_REASON', ACCOUNT_ID = 'ACCOUNT_ID', RESOURCE_TYPE = 'RESOURCE_TYPE', ECR_REPOSITORY_NAME = 'ECR_REPOSITORY_NAME' }

	export interface ListDelegatedAdminAccountsResponse {
		delegatedAdminAccounts?: Array<DelegatedAdminAccount>;
		nextToken?: string;
	}
	export interface ListDelegatedAdminAccountsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListDelegatedAdminAccountsResponseFormGroup() {
		return new FormGroup<ListDelegatedAdminAccountsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details of the Amazon Inspector delegated administrator for your organization. */
	export interface DelegatedAdminAccount {
		accountId?: string;
		status?: DelegatedAdminStatus;
	}

	/** Details of the Amazon Inspector delegated administrator for your organization. */
	export interface DelegatedAdminAccountFormProperties {
		accountId: FormControl<string | null | undefined>,
		status: FormControl<DelegatedAdminStatus | null | undefined>,
	}
	export function CreateDelegatedAdminAccountFormGroup() {
		return new FormGroup<DelegatedAdminAccountFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<DelegatedAdminStatus | null | undefined>(undefined),
		});

	}

	export enum DelegatedAdminStatus { ENABLED = 'ENABLED', DISABLE_IN_PROGRESS = 'DISABLE_IN_PROGRESS' }

	export interface ListFiltersResponse {

		/** Required */
		filters: Array<Filter>;
		nextToken?: string;
	}
	export interface ListFiltersResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListFiltersResponseFormGroup() {
		return new FormGroup<ListFiltersResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details about a filter. */
	export interface Filter {

		/** Required */
		action: FilterAction;

		/** Required */
		arn: string;

		/** Required */
		createdAt: Date;

		/** Required */
		criteria: FilterCriteria;
		description?: string;

		/** Required */
		name: string;

		/** Required */
		ownerId: string;
		reason?: string;
		tags?: TagMap;

		/** Required */
		updatedAt: Date;
	}

	/** Details about a filter. */
	export interface FilterFormProperties {

		/** Required */
		action: FormControl<FilterAction | null | undefined>,

		/** Required */
		arn: FormControl<string | null | undefined>,

		/** Required */
		createdAt: FormControl<Date | null | undefined>,
		description: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		ownerId: FormControl<string | null | undefined>,
		reason: FormControl<string | null | undefined>,

		/** Required */
		updatedAt: FormControl<Date | null | undefined>,
	}
	export function CreateFilterFormGroup() {
		return new FormGroup<FilterFormProperties>({
			action: new FormControl<FilterAction | null | undefined>(undefined, [Validators.required]),
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			createdAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ownerId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			reason: new FormControl<string | null | undefined>(undefined),
			updatedAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum FilterAction { NONE = 'NONE', SUPPRESS = 'SUPPRESS' }

	export interface ListFindingAggregationsResponse {

		/** Required */
		aggregationType: AggregationType;
		nextToken?: string;
		responses?: Array<AggregationResponse>;
	}
	export interface ListFindingAggregationsResponseFormProperties {

		/** Required */
		aggregationType: FormControl<AggregationType | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListFindingAggregationsResponseFormGroup() {
		return new FormGroup<ListFindingAggregationsResponseFormProperties>({
			aggregationType: new FormControl<AggregationType | null | undefined>(undefined, [Validators.required]),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AggregationType { FINDING_TYPE = 'FINDING_TYPE', PACKAGE = 'PACKAGE', TITLE = 'TITLE', REPOSITORY = 'REPOSITORY', AMI = 'AMI', AWS_EC2_INSTANCE = 'AWS_EC2_INSTANCE', AWS_ECR_CONTAINER = 'AWS_ECR_CONTAINER', IMAGE_LAYER = 'IMAGE_LAYER', ACCOUNT = 'ACCOUNT', AWS_LAMBDA_FUNCTION = 'AWS_LAMBDA_FUNCTION', LAMBDA_LAYER = 'LAMBDA_LAYER' }


	/** A structure that contains details about the results of an aggregation type. */
	export interface AggregationResponse {
		accountAggregation?: AccountAggregationResponse;
		amiAggregation?: AmiAggregationResponse;
		awsEcrContainerAggregation?: AwsEcrContainerAggregationResponse;
		ec2InstanceAggregation?: Ec2InstanceAggregationResponse;
		findingTypeAggregation?: FindingTypeAggregationResponse;
		imageLayerAggregation?: ImageLayerAggregationResponse;
		lambdaFunctionAggregation?: LambdaFunctionAggregationResponse;
		lambdaLayerAggregation?: LambdaLayerAggregationResponse;
		packageAggregation?: PackageAggregationResponse;
		repositoryAggregation?: RepositoryAggregationResponse;
		titleAggregation?: TitleAggregationResponse;
	}

	/** A structure that contains details about the results of an aggregation type. */
	export interface AggregationResponseFormProperties {
	}
	export function CreateAggregationResponseFormGroup() {
		return new FormGroup<AggregationResponseFormProperties>({
		});

	}


	/** An aggregation of findings by Amazon Web Services account ID. */
	export interface AccountAggregationResponse {
		accountId?: string;
		severityCounts?: SeverityCounts;
	}

	/** An aggregation of findings by Amazon Web Services account ID. */
	export interface AccountAggregationResponseFormProperties {
		accountId: FormControl<string | null | undefined>,
	}
	export function CreateAccountAggregationResponseFormGroup() {
		return new FormGroup<AccountAggregationResponseFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An object that contains the counts of aggregated finding per severity. */
	export interface SeverityCounts {
		all?: number | null;
		critical?: number | null;
		high?: number | null;
		medium?: number | null;
	}

	/** An object that contains the counts of aggregated finding per severity. */
	export interface SeverityCountsFormProperties {
		all: FormControl<number | null | undefined>,
		critical: FormControl<number | null | undefined>,
		high: FormControl<number | null | undefined>,
		medium: FormControl<number | null | undefined>,
	}
	export function CreateSeverityCountsFormGroup() {
		return new FormGroup<SeverityCountsFormProperties>({
			all: new FormControl<number | null | undefined>(undefined),
			critical: new FormControl<number | null | undefined>(undefined),
			high: new FormControl<number | null | undefined>(undefined),
			medium: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A response that contains the results of a finding aggregation by AMI. */
	export interface AmiAggregationResponse {
		accountId?: string;
		affectedInstances?: number | null;

		/** Required */
		ami: string;
		severityCounts?: SeverityCounts;
	}

	/** A response that contains the results of a finding aggregation by AMI. */
	export interface AmiAggregationResponseFormProperties {
		accountId: FormControl<string | null | undefined>,
		affectedInstances: FormControl<number | null | undefined>,

		/** Required */
		ami: FormControl<string | null | undefined>,
	}
	export function CreateAmiAggregationResponseFormGroup() {
		return new FormGroup<AmiAggregationResponseFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
			affectedInstances: new FormControl<number | null | undefined>(undefined),
			ami: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** An aggregation of information about Amazon ECR containers. */
	export interface AwsEcrContainerAggregationResponse {
		accountId?: string;
		architecture?: string;
		imageSha?: string;
		imageTags?: Array<string>;
		repository?: string;

		/** Required */
		resourceId: string;
		severityCounts?: SeverityCounts;
	}

	/** An aggregation of information about Amazon ECR containers. */
	export interface AwsEcrContainerAggregationResponseFormProperties {
		accountId: FormControl<string | null | undefined>,
		architecture: FormControl<string | null | undefined>,
		imageSha: FormControl<string | null | undefined>,
		repository: FormControl<string | null | undefined>,

		/** Required */
		resourceId: FormControl<string | null | undefined>,
	}
	export function CreateAwsEcrContainerAggregationResponseFormGroup() {
		return new FormGroup<AwsEcrContainerAggregationResponseFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
			architecture: new FormControl<string | null | undefined>(undefined),
			imageSha: new FormControl<string | null | undefined>(undefined),
			repository: new FormControl<string | null | undefined>(undefined),
			resourceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A response that contains the results of a finding aggregation by Amazon EC2 instance. */
	export interface Ec2InstanceAggregationResponse {
		accountId?: string;
		ami?: string;

		/** Required */
		instanceId: string;
		instanceTags?: TagMap;
		networkFindings?: number | null;
		operatingSystem?: string;
		severityCounts?: SeverityCounts;
	}

	/** A response that contains the results of a finding aggregation by Amazon EC2 instance. */
	export interface Ec2InstanceAggregationResponseFormProperties {
		accountId: FormControl<string | null | undefined>,
		ami: FormControl<string | null | undefined>,

		/** Required */
		instanceId: FormControl<string | null | undefined>,
		networkFindings: FormControl<number | null | undefined>,
		operatingSystem: FormControl<string | null | undefined>,
	}
	export function CreateEc2InstanceAggregationResponseFormGroup() {
		return new FormGroup<Ec2InstanceAggregationResponseFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
			ami: new FormControl<string | null | undefined>(undefined),
			instanceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			networkFindings: new FormControl<number | null | undefined>(undefined),
			operatingSystem: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A response that contains the results of a finding type aggregation. */
	export interface FindingTypeAggregationResponse {
		accountId?: string;
		severityCounts?: SeverityCounts;
	}

	/** A response that contains the results of a finding type aggregation. */
	export interface FindingTypeAggregationResponseFormProperties {
		accountId: FormControl<string | null | undefined>,
	}
	export function CreateFindingTypeAggregationResponseFormGroup() {
		return new FormGroup<FindingTypeAggregationResponseFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A response that contains the results of a finding aggregation by image layer. */
	export interface ImageLayerAggregationResponse {

		/** Required */
		accountId: string;

		/** Required */
		layerHash: string;

		/** Required */
		repository: string;

		/** Required */
		resourceId: string;
		severityCounts?: SeverityCounts;
	}

	/** A response that contains the results of a finding aggregation by image layer. */
	export interface ImageLayerAggregationResponseFormProperties {

		/** Required */
		accountId: FormControl<string | null | undefined>,

		/** Required */
		layerHash: FormControl<string | null | undefined>,

		/** Required */
		repository: FormControl<string | null | undefined>,

		/** Required */
		resourceId: FormControl<string | null | undefined>,
	}
	export function CreateImageLayerAggregationResponseFormGroup() {
		return new FormGroup<ImageLayerAggregationResponseFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			layerHash: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			repository: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resourceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A response that contains the results of an AWS Lambda function finding aggregation. */
	export interface LambdaFunctionAggregationResponse {
		accountId?: string;
		functionName?: string;
		lambdaTags?: TagMap;
		lastModifiedAt?: Date;

		/** Required */
		resourceId: string;
		runtime?: string;

		/** An object that contains the counts of aggregated finding per severity. */
		severityCounts?: SeverityCounts;
	}

	/** A response that contains the results of an AWS Lambda function finding aggregation. */
	export interface LambdaFunctionAggregationResponseFormProperties {
		accountId: FormControl<string | null | undefined>,
		functionName: FormControl<string | null | undefined>,
		lastModifiedAt: FormControl<Date | null | undefined>,

		/** Required */
		resourceId: FormControl<string | null | undefined>,
		runtime: FormControl<string | null | undefined>,
	}
	export function CreateLambdaFunctionAggregationResponseFormGroup() {
		return new FormGroup<LambdaFunctionAggregationResponseFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
			functionName: new FormControl<string | null | undefined>(undefined),
			lastModifiedAt: new FormControl<Date | null | undefined>(undefined),
			resourceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			runtime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A response that contains the results of an AWS Lambda function layer finding aggregation. */
	export interface LambdaLayerAggregationResponse {

		/** Required */
		accountId: string;

		/** Required */
		functionName: string;

		/** Required */
		layerArn: string;

		/** Required */
		resourceId: string;

		/** An object that contains the counts of aggregated finding per severity. */
		severityCounts?: SeverityCounts;
	}

	/** A response that contains the results of an AWS Lambda function layer finding aggregation. */
	export interface LambdaLayerAggregationResponseFormProperties {

		/** Required */
		accountId: FormControl<string | null | undefined>,

		/** Required */
		functionName: FormControl<string | null | undefined>,

		/** Required */
		layerArn: FormControl<string | null | undefined>,

		/** Required */
		resourceId: FormControl<string | null | undefined>,
	}
	export function CreateLambdaLayerAggregationResponseFormGroup() {
		return new FormGroup<LambdaLayerAggregationResponseFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			functionName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			layerArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resourceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A response that contains the results of a finding aggregation by image layer. */
	export interface PackageAggregationResponse {
		accountId?: string;

		/** Required */
		packageName: string;
		severityCounts?: SeverityCounts;
	}

	/** A response that contains the results of a finding aggregation by image layer. */
	export interface PackageAggregationResponseFormProperties {
		accountId: FormControl<string | null | undefined>,

		/** Required */
		packageName: FormControl<string | null | undefined>,
	}
	export function CreatePackageAggregationResponseFormGroup() {
		return new FormGroup<PackageAggregationResponseFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
			packageName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A response that contains details on the results of a finding aggregation by repository. */
	export interface RepositoryAggregationResponse {
		accountId?: string;
		affectedImages?: number | null;

		/** Required */
		repository: string;
		severityCounts?: SeverityCounts;
	}

	/** A response that contains details on the results of a finding aggregation by repository. */
	export interface RepositoryAggregationResponseFormProperties {
		accountId: FormControl<string | null | undefined>,
		affectedImages: FormControl<number | null | undefined>,

		/** Required */
		repository: FormControl<string | null | undefined>,
	}
	export function CreateRepositoryAggregationResponseFormGroup() {
		return new FormGroup<RepositoryAggregationResponseFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
			affectedImages: new FormControl<number | null | undefined>(undefined),
			repository: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A response that contains details on the results of a finding aggregation by title. */
	export interface TitleAggregationResponse {
		accountId?: string;
		severityCounts?: SeverityCounts;

		/** Required */
		title: string;
		vulnerabilityId?: string;
	}

	/** A response that contains details on the results of a finding aggregation by title. */
	export interface TitleAggregationResponseFormProperties {
		accountId: FormControl<string | null | undefined>,

		/** Required */
		title: FormControl<string | null | undefined>,
		vulnerabilityId: FormControl<string | null | undefined>,
	}
	export function CreateTitleAggregationResponseFormGroup() {
		return new FormGroup<TitleAggregationResponseFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			vulnerabilityId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An object that contains details about an aggregation response based on Amazon Web Services accounts. */
	export interface AccountAggregation {
		findingType?: AggregationFindingType;
		resourceType?: AggregationResourceType;
		sortBy?: AccountSortBy;
		sortOrder?: SortOrder;
	}

	/** An object that contains details about an aggregation response based on Amazon Web Services accounts. */
	export interface AccountAggregationFormProperties {
		findingType: FormControl<AggregationFindingType | null | undefined>,
		resourceType: FormControl<AggregationResourceType | null | undefined>,
		sortBy: FormControl<AccountSortBy | null | undefined>,
		sortOrder: FormControl<SortOrder | null | undefined>,
	}
	export function CreateAccountAggregationFormGroup() {
		return new FormGroup<AccountAggregationFormProperties>({
			findingType: new FormControl<AggregationFindingType | null | undefined>(undefined),
			resourceType: new FormControl<AggregationResourceType | null | undefined>(undefined),
			sortBy: new FormControl<AccountSortBy | null | undefined>(undefined),
			sortOrder: new FormControl<SortOrder | null | undefined>(undefined),
		});

	}

	export enum AggregationFindingType { NETWORK_REACHABILITY = 'NETWORK_REACHABILITY', PACKAGE_VULNERABILITY = 'PACKAGE_VULNERABILITY', CODE_VULNERABILITY = 'CODE_VULNERABILITY' }

	export enum AggregationResourceType { AWS_EC2_INSTANCE = 'AWS_EC2_INSTANCE', AWS_ECR_CONTAINER_IMAGE = 'AWS_ECR_CONTAINER_IMAGE', AWS_LAMBDA_FUNCTION = 'AWS_LAMBDA_FUNCTION' }

	export enum AccountSortBy { CRITICAL = 'CRITICAL', HIGH = 'HIGH', ALL = 'ALL' }

	export enum SortOrder { ASC = 'ASC', DESC = 'DESC' }


	/** The details that define an aggregation based on Amazon machine images (AMIs). */
	export interface AmiAggregation {
		amis?: Array<StringFilter>;
		sortBy?: AmiSortBy;
		sortOrder?: SortOrder;
	}

	/** The details that define an aggregation based on Amazon machine images (AMIs). */
	export interface AmiAggregationFormProperties {
		sortBy: FormControl<AmiSortBy | null | undefined>,
		sortOrder: FormControl<SortOrder | null | undefined>,
	}
	export function CreateAmiAggregationFormGroup() {
		return new FormGroup<AmiAggregationFormProperties>({
			sortBy: new FormControl<AmiSortBy | null | undefined>(undefined),
			sortOrder: new FormControl<SortOrder | null | undefined>(undefined),
		});

	}

	export enum AmiSortBy { CRITICAL = 'CRITICAL', HIGH = 'HIGH', ALL = 'ALL', AFFECTED_INSTANCES = 'AFFECTED_INSTANCES' }


	/** An aggregation of information about Amazon ECR containers. */
	export interface AwsEcrContainerAggregation {
		architectures?: Array<StringFilter>;
		imageShas?: Array<StringFilter>;
		imageTags?: Array<StringFilter>;
		repositories?: Array<StringFilter>;
		resourceIds?: Array<StringFilter>;
		sortBy?: AccountSortBy;
		sortOrder?: SortOrder;
	}

	/** An aggregation of information about Amazon ECR containers. */
	export interface AwsEcrContainerAggregationFormProperties {
		sortBy: FormControl<AccountSortBy | null | undefined>,
		sortOrder: FormControl<SortOrder | null | undefined>,
	}
	export function CreateAwsEcrContainerAggregationFormGroup() {
		return new FormGroup<AwsEcrContainerAggregationFormProperties>({
			sortBy: new FormControl<AccountSortBy | null | undefined>(undefined),
			sortOrder: new FormControl<SortOrder | null | undefined>(undefined),
		});

	}


	/** The details that define an aggregation based on Amazon EC2 instances. */
	export interface Ec2InstanceAggregation {
		amis?: Array<StringFilter>;
		instanceIds?: Array<StringFilter>;
		instanceTags?: Array<MapFilter>;
		operatingSystems?: Array<StringFilter>;
		sortBy?: Ec2InstanceSortBy;
		sortOrder?: SortOrder;
	}

	/** The details that define an aggregation based on Amazon EC2 instances. */
	export interface Ec2InstanceAggregationFormProperties {
		sortBy: FormControl<Ec2InstanceSortBy | null | undefined>,
		sortOrder: FormControl<SortOrder | null | undefined>,
	}
	export function CreateEc2InstanceAggregationFormGroup() {
		return new FormGroup<Ec2InstanceAggregationFormProperties>({
			sortBy: new FormControl<Ec2InstanceSortBy | null | undefined>(undefined),
			sortOrder: new FormControl<SortOrder | null | undefined>(undefined),
		});

	}

	export enum Ec2InstanceSortBy { NETWORK_FINDINGS = 'NETWORK_FINDINGS', CRITICAL = 'CRITICAL', HIGH = 'HIGH', ALL = 'ALL' }


	/** The details that define an aggregation based on finding type. */
	export interface FindingTypeAggregation {
		findingType?: AggregationFindingType;
		resourceType?: AggregationResourceType;
		sortBy?: AccountSortBy;
		sortOrder?: SortOrder;
	}

	/** The details that define an aggregation based on finding type. */
	export interface FindingTypeAggregationFormProperties {
		findingType: FormControl<AggregationFindingType | null | undefined>,
		resourceType: FormControl<AggregationResourceType | null | undefined>,
		sortBy: FormControl<AccountSortBy | null | undefined>,
		sortOrder: FormControl<SortOrder | null | undefined>,
	}
	export function CreateFindingTypeAggregationFormGroup() {
		return new FormGroup<FindingTypeAggregationFormProperties>({
			findingType: new FormControl<AggregationFindingType | null | undefined>(undefined),
			resourceType: new FormControl<AggregationResourceType | null | undefined>(undefined),
			sortBy: new FormControl<AccountSortBy | null | undefined>(undefined),
			sortOrder: new FormControl<SortOrder | null | undefined>(undefined),
		});

	}


	/** The details that define an aggregation based on container image layers. */
	export interface ImageLayerAggregation {
		layerHashes?: Array<StringFilter>;
		repositories?: Array<StringFilter>;
		resourceIds?: Array<StringFilter>;
		sortBy?: AccountSortBy;
		sortOrder?: SortOrder;
	}

	/** The details that define an aggregation based on container image layers. */
	export interface ImageLayerAggregationFormProperties {
		sortBy: FormControl<AccountSortBy | null | undefined>,
		sortOrder: FormControl<SortOrder | null | undefined>,
	}
	export function CreateImageLayerAggregationFormGroup() {
		return new FormGroup<ImageLayerAggregationFormProperties>({
			sortBy: new FormControl<AccountSortBy | null | undefined>(undefined),
			sortOrder: new FormControl<SortOrder | null | undefined>(undefined),
		});

	}


	/** The details that define a findings aggregation based on AWS Lambda functions. */
	export interface LambdaFunctionAggregation {
		functionNames?: Array<StringFilter>;
		functionTags?: Array<MapFilter>;
		resourceIds?: Array<StringFilter>;
		runtimes?: Array<StringFilter>;
		sortBy?: AccountSortBy;
		sortOrder?: SortOrder;
	}

	/** The details that define a findings aggregation based on AWS Lambda functions. */
	export interface LambdaFunctionAggregationFormProperties {
		sortBy: FormControl<AccountSortBy | null | undefined>,
		sortOrder: FormControl<SortOrder | null | undefined>,
	}
	export function CreateLambdaFunctionAggregationFormGroup() {
		return new FormGroup<LambdaFunctionAggregationFormProperties>({
			sortBy: new FormControl<AccountSortBy | null | undefined>(undefined),
			sortOrder: new FormControl<SortOrder | null | undefined>(undefined),
		});

	}


	/** The details that define a findings aggregation based on an AWS Lambda function's layers. */
	export interface LambdaLayerAggregation {
		functionNames?: Array<StringFilter>;
		layerArns?: Array<StringFilter>;
		resourceIds?: Array<StringFilter>;
		sortBy?: AccountSortBy;
		sortOrder?: SortOrder;
	}

	/** The details that define a findings aggregation based on an AWS Lambda function's layers. */
	export interface LambdaLayerAggregationFormProperties {
		sortBy: FormControl<AccountSortBy | null | undefined>,
		sortOrder: FormControl<SortOrder | null | undefined>,
	}
	export function CreateLambdaLayerAggregationFormGroup() {
		return new FormGroup<LambdaLayerAggregationFormProperties>({
			sortBy: new FormControl<AccountSortBy | null | undefined>(undefined),
			sortOrder: new FormControl<SortOrder | null | undefined>(undefined),
		});

	}


	/** The details that define an aggregation based on operating system package type. */
	export interface PackageAggregation {
		packageNames?: Array<StringFilter>;
		sortBy?: AccountSortBy;
		sortOrder?: SortOrder;
	}

	/** The details that define an aggregation based on operating system package type. */
	export interface PackageAggregationFormProperties {
		sortBy: FormControl<AccountSortBy | null | undefined>,
		sortOrder: FormControl<SortOrder | null | undefined>,
	}
	export function CreatePackageAggregationFormGroup() {
		return new FormGroup<PackageAggregationFormProperties>({
			sortBy: new FormControl<AccountSortBy | null | undefined>(undefined),
			sortOrder: new FormControl<SortOrder | null | undefined>(undefined),
		});

	}


	/** The details that define an aggregation based on repository. */
	export interface RepositoryAggregation {
		repositories?: Array<StringFilter>;
		sortBy?: RepositorySortBy;
		sortOrder?: SortOrder;
	}

	/** The details that define an aggregation based on repository. */
	export interface RepositoryAggregationFormProperties {
		sortBy: FormControl<RepositorySortBy | null | undefined>,
		sortOrder: FormControl<SortOrder | null | undefined>,
	}
	export function CreateRepositoryAggregationFormGroup() {
		return new FormGroup<RepositoryAggregationFormProperties>({
			sortBy: new FormControl<RepositorySortBy | null | undefined>(undefined),
			sortOrder: new FormControl<SortOrder | null | undefined>(undefined),
		});

	}

	export enum RepositorySortBy { CRITICAL = 'CRITICAL', HIGH = 'HIGH', ALL = 'ALL', AFFECTED_IMAGES = 'AFFECTED_IMAGES' }


	/** The details that define an aggregation based on finding title. */
	export interface TitleAggregation {
		findingType?: AggregationFindingType;
		resourceType?: AggregationResourceType;
		sortBy?: AccountSortBy;
		sortOrder?: SortOrder;
		titles?: Array<StringFilter>;
		vulnerabilityIds?: Array<StringFilter>;
	}

	/** The details that define an aggregation based on finding title. */
	export interface TitleAggregationFormProperties {
		findingType: FormControl<AggregationFindingType | null | undefined>,
		resourceType: FormControl<AggregationResourceType | null | undefined>,
		sortBy: FormControl<AccountSortBy | null | undefined>,
		sortOrder: FormControl<SortOrder | null | undefined>,
	}
	export function CreateTitleAggregationFormGroup() {
		return new FormGroup<TitleAggregationFormProperties>({
			findingType: new FormControl<AggregationFindingType | null | undefined>(undefined),
			resourceType: new FormControl<AggregationResourceType | null | undefined>(undefined),
			sortBy: new FormControl<AccountSortBy | null | undefined>(undefined),
			sortOrder: new FormControl<SortOrder | null | undefined>(undefined),
		});

	}

	export interface ListFindingsResponse {
		findings?: Array<Finding>;
		nextToken?: string;
	}
	export interface ListFindingsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListFindingsResponseFormGroup() {
		return new FormGroup<ListFindingsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details about an Amazon Inspector finding. */
	export interface Finding {

		/** Required */
		awsAccountId: string;
		codeVulnerabilityDetails?: CodeVulnerabilityDetails;

		/** Required */
		description: string;
		epss?: EpssDetails;
		exploitAvailable?: ExploitAvailable;
		exploitabilityDetails?: ExploitabilityDetails;

		/** Required */
		findingArn: string;

		/** Required */
		firstObservedAt: Date;
		fixAvailable?: FixAvailable;
		inspectorScore?: number | null;
		inspectorScoreDetails?: InspectorScoreDetails;

		/** Required */
		lastObservedAt: Date;
		networkReachabilityDetails?: NetworkReachabilityDetails;
		packageVulnerabilityDetails?: PackageVulnerabilityDetails;

		/** Required */
		remediation: Remediation;

		/** Required */
		resources: Array<Resource>;

		/** Required */
		severity: Severity;

		/** Required */
		status: FindingStatus;
		title?: string;

		/** Required */
		type: AggregationFindingType;
		updatedAt?: Date;
	}

	/** Details about an Amazon Inspector finding. */
	export interface FindingFormProperties {

		/** Required */
		awsAccountId: FormControl<string | null | undefined>,

		/** Required */
		description: FormControl<string | null | undefined>,
		exploitAvailable: FormControl<ExploitAvailable | null | undefined>,

		/** Required */
		findingArn: FormControl<string | null | undefined>,

		/** Required */
		firstObservedAt: FormControl<Date | null | undefined>,
		fixAvailable: FormControl<FixAvailable | null | undefined>,
		inspectorScore: FormControl<number | null | undefined>,

		/** Required */
		lastObservedAt: FormControl<Date | null | undefined>,

		/** Required */
		severity: FormControl<Severity | null | undefined>,

		/** Required */
		status: FormControl<FindingStatus | null | undefined>,
		title: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AggregationFindingType | null | undefined>,
		updatedAt: FormControl<Date | null | undefined>,
	}
	export function CreateFindingFormGroup() {
		return new FormGroup<FindingFormProperties>({
			awsAccountId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			exploitAvailable: new FormControl<ExploitAvailable | null | undefined>(undefined),
			findingArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			firstObservedAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			fixAvailable: new FormControl<FixAvailable | null | undefined>(undefined),
			inspectorScore: new FormControl<number | null | undefined>(undefined),
			lastObservedAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			severity: new FormControl<Severity | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<FindingStatus | null | undefined>(undefined, [Validators.required]),
			title: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<AggregationFindingType | null | undefined>(undefined, [Validators.required]),
			updatedAt: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Contains information on the code vulnerability identified in your Lambda function. */
	export interface CodeVulnerabilityDetails {

		/** Required */
		cwes: Array<string>;

		/** Required */
		detectorId: string;

		/** Required */
		detectorName: string;
		detectorTags?: Array<string>;

		/** Required */
		filePath: CodeFilePath;
		referenceUrls?: Array<string>;
		ruleId?: string;
		sourceLambdaLayerArn?: string;
	}

	/** Contains information on the code vulnerability identified in your Lambda function. */
	export interface CodeVulnerabilityDetailsFormProperties {

		/** Required */
		detectorId: FormControl<string | null | undefined>,

		/** Required */
		detectorName: FormControl<string | null | undefined>,
		ruleId: FormControl<string | null | undefined>,
		sourceLambdaLayerArn: FormControl<string | null | undefined>,
	}
	export function CreateCodeVulnerabilityDetailsFormGroup() {
		return new FormGroup<CodeVulnerabilityDetailsFormProperties>({
			detectorId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			detectorName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ruleId: new FormControl<string | null | undefined>(undefined),
			sourceLambdaLayerArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information on where a code vulnerability is located in your Lambda function. */
	export interface CodeFilePath {

		/** Required */
		endLine: number;

		/** Required */
		fileName: string;

		/** Required */
		filePath: string;

		/** Required */
		startLine: number;
	}

	/** Contains information on where a code vulnerability is located in your Lambda function. */
	export interface CodeFilePathFormProperties {

		/** Required */
		endLine: FormControl<number | null | undefined>,

		/** Required */
		fileName: FormControl<string | null | undefined>,

		/** Required */
		filePath: FormControl<string | null | undefined>,

		/** Required */
		startLine: FormControl<number | null | undefined>,
	}
	export function CreateCodeFilePathFormGroup() {
		return new FormGroup<CodeFilePathFormProperties>({
			endLine: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			fileName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			filePath: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			startLine: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Details about the Exploit Prediction Scoring System (EPSS) score for a finding. */
	export interface EpssDetails {
		score?: number | null;
	}

	/** Details about the Exploit Prediction Scoring System (EPSS) score for a finding. */
	export interface EpssDetailsFormProperties {
		score: FormControl<number | null | undefined>,
	}
	export function CreateEpssDetailsFormGroup() {
		return new FormGroup<EpssDetailsFormProperties>({
			score: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum ExploitAvailable { YES = 'YES', NO = 'NO' }


	/** The details of an exploit available for a finding discovered in your environment. */
	export interface ExploitabilityDetails {
		lastKnownExploitAt?: Date;
	}

	/** The details of an exploit available for a finding discovered in your environment. */
	export interface ExploitabilityDetailsFormProperties {
		lastKnownExploitAt: FormControl<Date | null | undefined>,
	}
	export function CreateExploitabilityDetailsFormGroup() {
		return new FormGroup<ExploitabilityDetailsFormProperties>({
			lastKnownExploitAt: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum FixAvailable { YES = 'YES', NO = 'NO', PARTIAL = 'PARTIAL' }


	/** Information about the Amazon Inspector score given to a finding. */
	export interface InspectorScoreDetails {
		adjustedCvss?: CvssScoreDetails;
	}

	/** Information about the Amazon Inspector score given to a finding. */
	export interface InspectorScoreDetailsFormProperties {
	}
	export function CreateInspectorScoreDetailsFormGroup() {
		return new FormGroup<InspectorScoreDetailsFormProperties>({
		});

	}


	/** Information about the CVSS score. */
	export interface CvssScoreDetails {
		adjustments?: Array<CvssScoreAdjustment>;
		cvssSource?: string;

		/** Required */
		score: number;

		/** Required */
		scoreSource: string;

		/** Required */
		scoringVector: string;

		/** Required */
		version: string;
	}

	/** Information about the CVSS score. */
	export interface CvssScoreDetailsFormProperties {
		cvssSource: FormControl<string | null | undefined>,

		/** Required */
		score: FormControl<number | null | undefined>,

		/** Required */
		scoreSource: FormControl<string | null | undefined>,

		/** Required */
		scoringVector: FormControl<string | null | undefined>,

		/** Required */
		version: FormControl<string | null | undefined>,
	}
	export function CreateCvssScoreDetailsFormGroup() {
		return new FormGroup<CvssScoreDetailsFormProperties>({
			cvssSource: new FormControl<string | null | undefined>(undefined),
			score: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			scoreSource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			scoringVector: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			version: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Details on adjustments Amazon Inspector made to the CVSS score for a finding. */
	export interface CvssScoreAdjustment {

		/** Required */
		metric: string;

		/** Required */
		reason: string;
	}

	/** Details on adjustments Amazon Inspector made to the CVSS score for a finding. */
	export interface CvssScoreAdjustmentFormProperties {

		/** Required */
		metric: FormControl<string | null | undefined>,

		/** Required */
		reason: FormControl<string | null | undefined>,
	}
	export function CreateCvssScoreAdjustmentFormGroup() {
		return new FormGroup<CvssScoreAdjustmentFormProperties>({
			metric: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			reason: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Contains the details of a network reachability finding. */
	export interface NetworkReachabilityDetails {

		/** Required */
		networkPath: NetworkPath;

		/** Required */
		openPortRange: PortRange;

		/** Required */
		protocol: NetworkProtocol;
	}

	/** Contains the details of a network reachability finding. */
	export interface NetworkReachabilityDetailsFormProperties {

		/** Required */
		protocol: FormControl<NetworkProtocol | null | undefined>,
	}
	export function CreateNetworkReachabilityDetailsFormGroup() {
		return new FormGroup<NetworkReachabilityDetailsFormProperties>({
			protocol: new FormControl<NetworkProtocol | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Information on the network path associated with a finding. */
	export interface NetworkPath {
		steps?: Array<Step>;
	}

	/** Information on the network path associated with a finding. */
	export interface NetworkPathFormProperties {
	}
	export function CreateNetworkPathFormGroup() {
		return new FormGroup<NetworkPathFormProperties>({
		});

	}


	/** Details about the step associated with a finding. */
	export interface Step {

		/** Required */
		componentId: string;

		/** Required */
		componentType: string;
	}

	/** Details about the step associated with a finding. */
	export interface StepFormProperties {

		/** Required */
		componentId: FormControl<string | null | undefined>,

		/** Required */
		componentType: FormControl<string | null | undefined>,
	}
	export function CreateStepFormGroup() {
		return new FormGroup<StepFormProperties>({
			componentId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			componentType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Details about the port range associated with a finding. */
	export interface PortRange {

		/** Required */
		begin: number;

		/** Required */
		end: number;
	}

	/** Details about the port range associated with a finding. */
	export interface PortRangeFormProperties {

		/** Required */
		begin: FormControl<number | null | undefined>,

		/** Required */
		end: FormControl<number | null | undefined>,
	}
	export function CreatePortRangeFormGroup() {
		return new FormGroup<PortRangeFormProperties>({
			begin: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			end: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum NetworkProtocol { TCP = 'TCP', UDP = 'UDP' }


	/** Information about a package vulnerability finding. */
	export interface PackageVulnerabilityDetails {
		cvss?: Array<CvssScore>;
		referenceUrls?: Array<string>;
		relatedVulnerabilities?: Array<string>;

		/** Required */
		source: string;
		sourceUrl?: string;
		vendorCreatedAt?: Date;
		vendorSeverity?: string;
		vendorUpdatedAt?: Date;

		/** Required */
		vulnerabilityId: string;
		vulnerablePackages?: Array<VulnerablePackage>;
	}

	/** Information about a package vulnerability finding. */
	export interface PackageVulnerabilityDetailsFormProperties {

		/** Required */
		source: FormControl<string | null | undefined>,
		sourceUrl: FormControl<string | null | undefined>,
		vendorCreatedAt: FormControl<Date | null | undefined>,
		vendorSeverity: FormControl<string | null | undefined>,
		vendorUpdatedAt: FormControl<Date | null | undefined>,

		/** Required */
		vulnerabilityId: FormControl<string | null | undefined>,
	}
	export function CreatePackageVulnerabilityDetailsFormGroup() {
		return new FormGroup<PackageVulnerabilityDetailsFormProperties>({
			source: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sourceUrl: new FormControl<string | null | undefined>(undefined),
			vendorCreatedAt: new FormControl<Date | null | undefined>(undefined),
			vendorSeverity: new FormControl<string | null | undefined>(undefined),
			vendorUpdatedAt: new FormControl<Date | null | undefined>(undefined),
			vulnerabilityId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The CVSS score for a finding. */
	export interface CvssScore {

		/** Required */
		baseScore: number;

		/** Required */
		scoringVector: string;

		/** Required */
		source: string;

		/** Required */
		version: string;
	}

	/** The CVSS score for a finding. */
	export interface CvssScoreFormProperties {

		/** Required */
		baseScore: FormControl<number | null | undefined>,

		/** Required */
		scoringVector: FormControl<string | null | undefined>,

		/** Required */
		source: FormControl<string | null | undefined>,

		/** Required */
		version: FormControl<string | null | undefined>,
	}
	export function CreateCvssScoreFormGroup() {
		return new FormGroup<CvssScoreFormProperties>({
			baseScore: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			scoringVector: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			source: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			version: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Information on the vulnerable package identified by a finding. */
	export interface VulnerablePackage {
		arch?: string;
		epoch?: number | null;
		filePath?: string;
		fixedInVersion?: string;

		/** Required */
		name: string;
		packageManager?: PackageManager;
		release?: string;
		remediation?: string;
		sourceLambdaLayerArn?: string;
		sourceLayerHash?: string;

		/** Required */
		version: string;
	}

	/** Information on the vulnerable package identified by a finding. */
	export interface VulnerablePackageFormProperties {
		arch: FormControl<string | null | undefined>,
		epoch: FormControl<number | null | undefined>,
		filePath: FormControl<string | null | undefined>,
		fixedInVersion: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
		packageManager: FormControl<PackageManager | null | undefined>,
		release: FormControl<string | null | undefined>,
		remediation: FormControl<string | null | undefined>,
		sourceLambdaLayerArn: FormControl<string | null | undefined>,
		sourceLayerHash: FormControl<string | null | undefined>,

		/** Required */
		version: FormControl<string | null | undefined>,
	}
	export function CreateVulnerablePackageFormGroup() {
		return new FormGroup<VulnerablePackageFormProperties>({
			arch: new FormControl<string | null | undefined>(undefined),
			epoch: new FormControl<number | null | undefined>(undefined),
			filePath: new FormControl<string | null | undefined>(undefined),
			fixedInVersion: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			packageManager: new FormControl<PackageManager | null | undefined>(undefined),
			release: new FormControl<string | null | undefined>(undefined),
			remediation: new FormControl<string | null | undefined>(undefined),
			sourceLambdaLayerArn: new FormControl<string | null | undefined>(undefined),
			sourceLayerHash: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum PackageManager { BUNDLER = 'BUNDLER', CARGO = 'CARGO', COMPOSER = 'COMPOSER', NPM = 'NPM', NUGET = 'NUGET', PIPENV = 'PIPENV', POETRY = 'POETRY', YARN = 'YARN', GOBINARY = 'GOBINARY', GOMOD = 'GOMOD', JAR = 'JAR', OS = 'OS', PIP = 'PIP', PYTHONPKG = 'PYTHONPKG', NODEPKG = 'NODEPKG', POM = 'POM', GEMSPEC = 'GEMSPEC' }


	/** Information on how to remediate a finding. */
	export interface Remediation {
		recommendation?: Recommendation;
	}

	/** Information on how to remediate a finding. */
	export interface RemediationFormProperties {
	}
	export function CreateRemediationFormGroup() {
		return new FormGroup<RemediationFormProperties>({
		});

	}


	/** Details about the recommended course of action to remediate the finding. */
	export interface Recommendation {
		Url?: string;
		text?: string;
	}

	/** Details about the recommended course of action to remediate the finding. */
	export interface RecommendationFormProperties {
		Url: FormControl<string | null | undefined>,
		text: FormControl<string | null | undefined>,
	}
	export function CreateRecommendationFormGroup() {
		return new FormGroup<RecommendationFormProperties>({
			Url: new FormControl<string | null | undefined>(undefined),
			text: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details about the resource involved in a finding. */
	export interface Resource {
		details?: ResourceDetails;

		/** Required */
		id: string;
		partition?: string;
		region?: string;
		tags?: TagMap;

		/** Required */
		type: CoverageResourceType;
	}

	/** Details about the resource involved in a finding. */
	export interface ResourceFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,
		partition: FormControl<string | null | undefined>,
		region: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<CoverageResourceType | null | undefined>,
	}
	export function CreateResourceFormGroup() {
		return new FormGroup<ResourceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			partition: new FormControl<string | null | undefined>(undefined),
			region: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<CoverageResourceType | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Contains details about the resource involved in the finding. */
	export interface ResourceDetails {
		awsEc2Instance?: AwsEc2InstanceDetails;
		awsEcrContainerImage?: AwsEcrContainerImageDetails;
		awsLambdaFunction?: AwsLambdaFunctionDetails;
	}

	/** Contains details about the resource involved in the finding. */
	export interface ResourceDetailsFormProperties {
	}
	export function CreateResourceDetailsFormGroup() {
		return new FormGroup<ResourceDetailsFormProperties>({
		});

	}


	/** Details of the Amazon EC2 instance involved in a finding. */
	export interface AwsEc2InstanceDetails {
		iamInstanceProfileArn?: string;
		imageId?: string;
		ipV4Addresses?: Array<string>;
		ipV6Addresses?: Array<string>;
		keyName?: string;
		launchedAt?: Date;
		platform?: string;
		subnetId?: string;
		type?: string;
		vpcId?: string;
	}

	/** Details of the Amazon EC2 instance involved in a finding. */
	export interface AwsEc2InstanceDetailsFormProperties {
		iamInstanceProfileArn: FormControl<string | null | undefined>,
		imageId: FormControl<string | null | undefined>,
		keyName: FormControl<string | null | undefined>,
		launchedAt: FormControl<Date | null | undefined>,
		platform: FormControl<string | null | undefined>,
		subnetId: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
		vpcId: FormControl<string | null | undefined>,
	}
	export function CreateAwsEc2InstanceDetailsFormGroup() {
		return new FormGroup<AwsEc2InstanceDetailsFormProperties>({
			iamInstanceProfileArn: new FormControl<string | null | undefined>(undefined),
			imageId: new FormControl<string | null | undefined>(undefined),
			keyName: new FormControl<string | null | undefined>(undefined),
			launchedAt: new FormControl<Date | null | undefined>(undefined),
			platform: new FormControl<string | null | undefined>(undefined),
			subnetId: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			vpcId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The image details of the Amazon ECR container image. */
	export interface AwsEcrContainerImageDetails {
		architecture?: string;
		author?: string;

		/** Required */
		imageHash: string;
		imageTags?: Array<string>;
		platform?: string;
		pushedAt?: Date;

		/** Required */
		registry: string;

		/** Required */
		repositoryName: string;
	}

	/** The image details of the Amazon ECR container image. */
	export interface AwsEcrContainerImageDetailsFormProperties {
		architecture: FormControl<string | null | undefined>,
		author: FormControl<string | null | undefined>,

		/** Required */
		imageHash: FormControl<string | null | undefined>,
		platform: FormControl<string | null | undefined>,
		pushedAt: FormControl<Date | null | undefined>,

		/** Required */
		registry: FormControl<string | null | undefined>,

		/** Required */
		repositoryName: FormControl<string | null | undefined>,
	}
	export function CreateAwsEcrContainerImageDetailsFormGroup() {
		return new FormGroup<AwsEcrContainerImageDetailsFormProperties>({
			architecture: new FormControl<string | null | undefined>(undefined),
			author: new FormControl<string | null | undefined>(undefined),
			imageHash: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			platform: new FormControl<string | null | undefined>(undefined),
			pushedAt: new FormControl<Date | null | undefined>(undefined),
			registry: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			repositoryName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/**  A summary of information about the AWS Lambda function. */
	export interface AwsLambdaFunctionDetails {
		architectures?: Array<Architecture>;

		/** Required */
		codeSha256: string;

		/** Required */
		executionRoleArn: string;

		/** Required */
		functionName: string;
		lastModifiedAt?: Date;
		layers?: Array<string>;
		packageType?: PackageType;

		/** Required */
		runtime: Runtime;

		/** Required */
		version: string;
		vpcConfig?: LambdaVpcConfig;
	}

	/**  A summary of information about the AWS Lambda function. */
	export interface AwsLambdaFunctionDetailsFormProperties {

		/** Required */
		codeSha256: FormControl<string | null | undefined>,

		/** Required */
		executionRoleArn: FormControl<string | null | undefined>,

		/** Required */
		functionName: FormControl<string | null | undefined>,
		lastModifiedAt: FormControl<Date | null | undefined>,
		packageType: FormControl<PackageType | null | undefined>,

		/** Required */
		runtime: FormControl<Runtime | null | undefined>,

		/** Required */
		version: FormControl<string | null | undefined>,
	}
	export function CreateAwsLambdaFunctionDetailsFormGroup() {
		return new FormGroup<AwsLambdaFunctionDetailsFormProperties>({
			codeSha256: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			executionRoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			functionName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			lastModifiedAt: new FormControl<Date | null | undefined>(undefined),
			packageType: new FormControl<PackageType | null | undefined>(undefined),
			runtime: new FormControl<Runtime | null | undefined>(undefined, [Validators.required]),
			version: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum Architecture { X86_64 = 'X86_64', ARM64 = 'ARM64' }

	export enum PackageType { IMAGE = 'IMAGE', ZIP = 'ZIP' }


	/** The VPC security groups and subnets that are attached to an AWS Lambda function. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-vpc.html">VPC Settings</a>. */
	export interface LambdaVpcConfig {
		securityGroupIds?: Array<string>;
		subnetIds?: Array<string>;
		vpcId?: string;
	}

	/** The VPC security groups and subnets that are attached to an AWS Lambda function. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-vpc.html">VPC Settings</a>. */
	export interface LambdaVpcConfigFormProperties {
		vpcId: FormControl<string | null | undefined>,
	}
	export function CreateLambdaVpcConfigFormGroup() {
		return new FormGroup<LambdaVpcConfigFormProperties>({
			vpcId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum Severity { INFORMATIONAL = 'INFORMATIONAL', LOW = 'LOW', MEDIUM = 'MEDIUM', HIGH = 'HIGH', CRITICAL = 'CRITICAL', UNTRIAGED = 'UNTRIAGED' }

	export enum FindingStatus { ACTIVE = 'ACTIVE', SUPPRESSED = 'SUPPRESSED', CLOSED = 'CLOSED' }

	export enum SortField { AWS_ACCOUNT_ID = 'AWS_ACCOUNT_ID', FINDING_TYPE = 'FINDING_TYPE', SEVERITY = 'SEVERITY', FIRST_OBSERVED_AT = 'FIRST_OBSERVED_AT', LAST_OBSERVED_AT = 'LAST_OBSERVED_AT', FINDING_STATUS = 'FINDING_STATUS', RESOURCE_TYPE = 'RESOURCE_TYPE', ECR_IMAGE_PUSHED_AT = 'ECR_IMAGE_PUSHED_AT', ECR_IMAGE_REPOSITORY_NAME = 'ECR_IMAGE_REPOSITORY_NAME', ECR_IMAGE_REGISTRY = 'ECR_IMAGE_REGISTRY', NETWORK_PROTOCOL = 'NETWORK_PROTOCOL', COMPONENT_TYPE = 'COMPONENT_TYPE', VULNERABILITY_ID = 'VULNERABILITY_ID', VULNERABILITY_SOURCE = 'VULNERABILITY_SOURCE', INSPECTOR_SCORE = 'INSPECTOR_SCORE', VENDOR_SEVERITY = 'VENDOR_SEVERITY', EPSS_SCORE = 'EPSS_SCORE' }

	export interface ListMembersResponse {
		members?: Array<Member>;
		nextToken?: string;
	}
	export interface ListMembersResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListMembersResponseFormGroup() {
		return new FormGroup<ListMembersResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
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

	export interface ListUsageTotalsResponse {
		nextToken?: string;
		totals?: Array<UsageTotal>;
	}
	export interface ListUsageTotalsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListUsageTotalsResponseFormGroup() {
		return new FormGroup<ListUsageTotalsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The total of usage for an account ID. */
	export interface UsageTotal {
		accountId?: string;
		usage?: Array<Usage>;
	}

	/** The total of usage for an account ID. */
	export interface UsageTotalFormProperties {
		accountId: FormControl<string | null | undefined>,
	}
	export function CreateUsageTotalFormGroup() {
		return new FormGroup<UsageTotalFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains usage information about the cost of Amazon Inspector operation. */
	export interface Usage {
		currency?: Currency;
		estimatedMonthlyCost?: number | null;
		total?: number | null;
		type?: UsageType;
	}

	/** Contains usage information about the cost of Amazon Inspector operation. */
	export interface UsageFormProperties {
		currency: FormControl<Currency | null | undefined>,
		estimatedMonthlyCost: FormControl<number | null | undefined>,
		total: FormControl<number | null | undefined>,
		type: FormControl<UsageType | null | undefined>,
	}
	export function CreateUsageFormGroup() {
		return new FormGroup<UsageFormProperties>({
			currency: new FormControl<Currency | null | undefined>(undefined),
			estimatedMonthlyCost: new FormControl<number | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
			type: new FormControl<UsageType | null | undefined>(undefined),
		});

	}

	export enum Currency { USD = 'USD' }

	export enum UsageType { EC2_INSTANCE_HOURS = 'EC2_INSTANCE_HOURS', ECR_INITIAL_SCAN = 'ECR_INITIAL_SCAN', ECR_RESCAN = 'ECR_RESCAN', LAMBDA_FUNCTION_HOURS = 'LAMBDA_FUNCTION_HOURS', LAMBDA_FUNCTION_CODE_HOURS = 'LAMBDA_FUNCTION_CODE_HOURS' }

	export interface ResetEncryptionKeyResponse {
	}
	export interface ResetEncryptionKeyResponseFormProperties {
	}
	export function CreateResetEncryptionKeyResponseFormGroup() {
		return new FormGroup<ResetEncryptionKeyResponseFormProperties>({
		});

	}

	export interface SearchVulnerabilitiesResponse {
		nextToken?: string;

		/** Required */
		vulnerabilities: Array<Vulnerability>;
	}
	export interface SearchVulnerabilitiesResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateSearchVulnerabilitiesResponseFormGroup() {
		return new FormGroup<SearchVulnerabilitiesResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains details about a specific vulnerability Amazon Inspector can detect. */
	export interface Vulnerability {
		atigData?: AtigData;
		cisaData?: CisaData;
		cvss2?: Cvss2;
		cvss3?: Cvss3;
		cwes?: Array<string>;
		description?: string;
		detectionPlatforms?: Array<string>;
		epss?: Epss;
		exploitObserved?: ExploitObserved;

		/** Required */
		id: string;
		referenceUrls?: Array<string>;
		relatedVulnerabilities?: Array<string>;
		source?: VulnerabilitySource;
		sourceUrl?: string;
		vendorCreatedAt?: Date;
		vendorSeverity?: string;
		vendorUpdatedAt?: Date;
	}

	/** Contains details about a specific vulnerability Amazon Inspector can detect. */
	export interface VulnerabilityFormProperties {
		description: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,
		source: FormControl<VulnerabilitySource | null | undefined>,
		sourceUrl: FormControl<string | null | undefined>,
		vendorCreatedAt: FormControl<Date | null | undefined>,
		vendorSeverity: FormControl<string | null | undefined>,
		vendorUpdatedAt: FormControl<Date | null | undefined>,
	}
	export function CreateVulnerabilityFormGroup() {
		return new FormGroup<VulnerabilityFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			source: new FormControl<VulnerabilitySource | null | undefined>(undefined),
			sourceUrl: new FormControl<string | null | undefined>(undefined),
			vendorCreatedAt: new FormControl<Date | null | undefined>(undefined),
			vendorSeverity: new FormControl<string | null | undefined>(undefined),
			vendorUpdatedAt: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** The Amazon Web Services Threat Intel Group (ATIG) details for a specific vulnerability. */
	export interface AtigData {
		firstSeen?: Date;
		lastSeen?: Date;
		targets?: Array<string>;
		ttps?: Array<string>;
	}

	/** The Amazon Web Services Threat Intel Group (ATIG) details for a specific vulnerability. */
	export interface AtigDataFormProperties {
		firstSeen: FormControl<Date | null | undefined>,
		lastSeen: FormControl<Date | null | undefined>,
	}
	export function CreateAtigDataFormGroup() {
		return new FormGroup<AtigDataFormProperties>({
			firstSeen: new FormControl<Date | null | undefined>(undefined),
			lastSeen: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** The Common Vulnerability Scoring System (CVSS) version 2 details for the vulnerability. */
	export interface Cvss2 {
		baseScore?: number | null;
		scoringVector?: string;
	}

	/** The Common Vulnerability Scoring System (CVSS) version 2 details for the vulnerability. */
	export interface Cvss2FormProperties {
		baseScore: FormControl<number | null | undefined>,
		scoringVector: FormControl<string | null | undefined>,
	}
	export function CreateCvss2FormGroup() {
		return new FormGroup<Cvss2FormProperties>({
			baseScore: new FormControl<number | null | undefined>(undefined),
			scoringVector: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The Common Vulnerability Scoring System (CVSS) version 3 details for the vulnerability. */
	export interface Cvss3 {
		baseScore?: number | null;
		scoringVector?: string;
	}

	/** The Common Vulnerability Scoring System (CVSS) version 3 details for the vulnerability. */
	export interface Cvss3FormProperties {
		baseScore: FormControl<number | null | undefined>,
		scoringVector: FormControl<string | null | undefined>,
	}
	export function CreateCvss3FormGroup() {
		return new FormGroup<Cvss3FormProperties>({
			baseScore: new FormControl<number | null | undefined>(undefined),
			scoringVector: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details about the Exploit Prediction Scoring System (EPSS) score. */
	export interface Epss {
		score?: number | null;
	}

	/** Details about the Exploit Prediction Scoring System (EPSS) score. */
	export interface EpssFormProperties {
		score: FormControl<number | null | undefined>,
	}
	export function CreateEpssFormGroup() {
		return new FormGroup<EpssFormProperties>({
			score: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum VulnerabilitySource { NVD = 'NVD' }

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

	export interface UpdateConfigurationResponse {
	}
	export interface UpdateConfigurationResponseFormProperties {
	}
	export function CreateUpdateConfigurationResponseFormGroup() {
		return new FormGroup<UpdateConfigurationResponseFormProperties>({
		});

	}

	export interface UpdateEc2DeepInspectionConfigurationResponse {
		errorMessage?: string;
		orgPackagePaths?: Array<string>;
		packagePaths?: Array<string>;
		status?: Ec2DeepInspectionStatus;
	}
	export interface UpdateEc2DeepInspectionConfigurationResponseFormProperties {
		errorMessage: FormControl<string | null | undefined>,
		status: FormControl<Ec2DeepInspectionStatus | null | undefined>,
	}
	export function CreateUpdateEc2DeepInspectionConfigurationResponseFormGroup() {
		return new FormGroup<UpdateEc2DeepInspectionConfigurationResponseFormProperties>({
			errorMessage: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<Ec2DeepInspectionStatus | null | undefined>(undefined),
		});

	}

	export interface UpdateEncryptionKeyResponse {
	}
	export interface UpdateEncryptionKeyResponseFormProperties {
	}
	export function CreateUpdateEncryptionKeyResponseFormGroup() {
		return new FormGroup<UpdateEncryptionKeyResponseFormProperties>({
		});

	}

	export interface UpdateFilterResponse {

		/** Required */
		arn: string;
	}
	export interface UpdateFilterResponseFormProperties {

		/** Required */
		arn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateFilterResponseFormGroup() {
		return new FormGroup<UpdateFilterResponseFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateOrgEc2DeepInspectionConfigurationResponse {
	}
	export interface UpdateOrgEc2DeepInspectionConfigurationResponseFormProperties {
	}
	export function CreateUpdateOrgEc2DeepInspectionConfigurationResponseFormGroup() {
		return new FormGroup<UpdateOrgEc2DeepInspectionConfigurationResponseFormProperties>({
		});

	}

	export interface UpdateOrganizationConfigurationResponse {

		/** Required */
		autoEnable: AutoEnable;
	}
	export interface UpdateOrganizationConfigurationResponseFormProperties {
	}
	export function CreateUpdateOrganizationConfigurationResponseFormGroup() {
		return new FormGroup<UpdateOrganizationConfigurationResponseFormProperties>({
		});

	}


	/** Contains details about an aggregation request. */
	export interface AggregationRequest {
		accountAggregation?: AccountAggregation;
		amiAggregation?: AmiAggregation;
		awsEcrContainerAggregation?: AwsEcrContainerAggregation;
		ec2InstanceAggregation?: Ec2InstanceAggregation;
		findingTypeAggregation?: FindingTypeAggregation;
		imageLayerAggregation?: ImageLayerAggregation;
		lambdaFunctionAggregation?: LambdaFunctionAggregation;
		lambdaLayerAggregation?: LambdaLayerAggregation;
		packageAggregation?: PackageAggregation;
		repositoryAggregation?: RepositoryAggregation;
		titleAggregation?: TitleAggregation;
	}

	/** Contains details about an aggregation request. */
	export interface AggregationRequestFormProperties {
	}
	export function CreateAggregationRequestFormGroup() {
		return new FormGroup<AggregationRequestFormProperties>({
		});

	}

	export interface AssociateMemberRequest {

		/** Required */
		accountId: string;
	}
	export interface AssociateMemberRequestFormProperties {

		/** Required */
		accountId: FormControl<string | null | undefined>,
	}
	export function CreateAssociateMemberRequestFormGroup() {
		return new FormGroup<AssociateMemberRequestFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum AwsEcrContainerSortBy { CRITICAL = 'CRITICAL', HIGH = 'HIGH', ALL = 'ALL' }

	export interface BatchGetAccountStatusRequest {
		accountIds?: Array<string>;
	}
	export interface BatchGetAccountStatusRequestFormProperties {
	}
	export function CreateBatchGetAccountStatusRequestFormGroup() {
		return new FormGroup<BatchGetAccountStatusRequestFormProperties>({
		});

	}

	export interface BatchGetCodeSnippetRequest {

		/** Required */
		findingArns: Array<string>;
	}
	export interface BatchGetCodeSnippetRequestFormProperties {
	}
	export function CreateBatchGetCodeSnippetRequestFormGroup() {
		return new FormGroup<BatchGetCodeSnippetRequestFormProperties>({
		});

	}

	export interface BatchGetFindingDetailsRequest {

		/** Required */
		findingArns: Array<string>;
	}
	export interface BatchGetFindingDetailsRequestFormProperties {
	}
	export function CreateBatchGetFindingDetailsRequestFormGroup() {
		return new FormGroup<BatchGetFindingDetailsRequestFormProperties>({
		});

	}

	export interface BatchGetFreeTrialInfoRequest {

		/** Required */
		accountIds: Array<string>;
	}
	export interface BatchGetFreeTrialInfoRequestFormProperties {
	}
	export function CreateBatchGetFreeTrialInfoRequestFormGroup() {
		return new FormGroup<BatchGetFreeTrialInfoRequestFormProperties>({
		});

	}

	export interface BatchGetMemberEc2DeepInspectionStatusRequest {
		accountIds?: Array<string>;
	}
	export interface BatchGetMemberEc2DeepInspectionStatusRequestFormProperties {
	}
	export function CreateBatchGetMemberEc2DeepInspectionStatusRequestFormGroup() {
		return new FormGroup<BatchGetMemberEc2DeepInspectionStatusRequestFormProperties>({
		});

	}

	export interface BatchUpdateMemberEc2DeepInspectionStatusRequest {

		/** Required */
		accountIds: Array<MemberAccountEc2DeepInspectionStatus>;
	}
	export interface BatchUpdateMemberEc2DeepInspectionStatusRequestFormProperties {
	}
	export function CreateBatchUpdateMemberEc2DeepInspectionStatusRequestFormGroup() {
		return new FormGroup<BatchUpdateMemberEc2DeepInspectionStatusRequestFormProperties>({
		});

	}

	export interface CancelFindingsReportRequest {

		/** Required */
		reportId: string;
	}
	export interface CancelFindingsReportRequestFormProperties {

		/** Required */
		reportId: FormControl<string | null | undefined>,
	}
	export function CreateCancelFindingsReportRequestFormGroup() {
		return new FormGroup<CancelFindingsReportRequestFormProperties>({
			reportId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CancelSbomExportRequest {

		/** Required */
		reportId: string;
	}
	export interface CancelSbomExportRequestFormProperties {

		/** Required */
		reportId: FormControl<string | null | undefined>,
	}
	export function CreateCancelSbomExportRequestFormGroup() {
		return new FormGroup<CancelSbomExportRequestFormProperties>({
			reportId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A structure that identifies filter criteria for <code>GetCoverageStatistics</code>. */
	export interface CoverageFilterCriteria {
		accountId?: Array<CoverageStringFilter>;
		ec2InstanceTags?: Array<CoverageMapFilter>;
		ecrImageTags?: Array<CoverageStringFilter>;
		ecrRepositoryName?: Array<CoverageStringFilter>;
		lambdaFunctionName?: Array<CoverageStringFilter>;
		lambdaFunctionRuntime?: Array<CoverageStringFilter>;
		lambdaFunctionTags?: Array<CoverageMapFilter>;
		lastScannedAt?: Array<CoverageDateFilter>;
		resourceId?: Array<CoverageStringFilter>;
		resourceType?: Array<CoverageStringFilter>;
		scanStatusCode?: Array<CoverageStringFilter>;
		scanStatusReason?: Array<CoverageStringFilter>;
		scanType?: Array<CoverageStringFilter>;
	}

	/** A structure that identifies filter criteria for <code>GetCoverageStatistics</code>. */
	export interface CoverageFilterCriteriaFormProperties {
	}
	export function CreateCoverageFilterCriteriaFormGroup() {
		return new FormGroup<CoverageFilterCriteriaFormProperties>({
		});

	}

	export enum CoverageMapComparison { EQUALS = 'EQUALS' }

	export enum CoverageStringComparison { EQUALS = 'EQUALS', NOT_EQUALS = 'NOT_EQUALS' }

	export interface CreateFilterRequest {

		/** Required */
		action: FilterAction;
		description?: string;

		/** Required */
		filterCriteria: FilterCriteria;

		/** Required */
		name: string;
		reason?: string;
		tags?: TagMap;
	}
	export interface CreateFilterRequestFormProperties {

		/** Required */
		action: FormControl<FilterAction | null | undefined>,
		description: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
		reason: FormControl<string | null | undefined>,
	}
	export function CreateCreateFilterRequestFormGroup() {
		return new FormGroup<CreateFilterRequestFormProperties>({
			action: new FormControl<FilterAction | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			reason: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ReportFormat { CSV = 'CSV', JSON = 'JSON' }

	export interface CreateFindingsReportRequest {
		filterCriteria?: FilterCriteria;

		/** Required */
		reportFormat: ReportFormat;

		/** Required */
		s3Destination: Destination;
	}
	export interface CreateFindingsReportRequestFormProperties {

		/** Required */
		reportFormat: FormControl<ReportFormat | null | undefined>,
	}
	export function CreateCreateFindingsReportRequestFormGroup() {
		return new FormGroup<CreateFindingsReportRequestFormProperties>({
			reportFormat: new FormControl<ReportFormat | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateSbomExportRequest {

		/** Required */
		reportFormat: SbomReportFormat;
		resourceFilterCriteria?: ResourceFilterCriteria;

		/**
		 * Contains details of the Amazon S3 bucket and KMS key used to export findings.
		 * Required
		 */
		s3Destination: Destination;
	}
	export interface CreateSbomExportRequestFormProperties {

		/** Required */
		reportFormat: FormControl<SbomReportFormat | null | undefined>,
	}
	export function CreateCreateSbomExportRequestFormGroup() {
		return new FormGroup<CreateSbomExportRequestFormProperties>({
			reportFormat: new FormControl<SbomReportFormat | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteFilterRequest {

		/** Required */
		arn: string;
	}
	export interface DeleteFilterRequestFormProperties {

		/** Required */
		arn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteFilterRequestFormGroup() {
		return new FormGroup<DeleteFilterRequestFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeOrganizationConfigurationRequest {
	}
	export interface DescribeOrganizationConfigurationRequestFormProperties {
	}
	export function CreateDescribeOrganizationConfigurationRequestFormGroup() {
		return new FormGroup<DescribeOrganizationConfigurationRequestFormProperties>({
		});

	}

	export interface DisableDelegatedAdminAccountRequest {

		/** Required */
		delegatedAdminAccountId: string;
	}
	export interface DisableDelegatedAdminAccountRequestFormProperties {

		/** Required */
		delegatedAdminAccountId: FormControl<string | null | undefined>,
	}
	export function CreateDisableDelegatedAdminAccountRequestFormGroup() {
		return new FormGroup<DisableDelegatedAdminAccountRequestFormProperties>({
			delegatedAdminAccountId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DisableRequest {
		accountIds?: Array<string>;
		resourceTypes?: Array<ResourceScanType>;
	}
	export interface DisableRequestFormProperties {
	}
	export function CreateDisableRequestFormGroup() {
		return new FormGroup<DisableRequestFormProperties>({
		});

	}

	export interface DisassociateMemberRequest {

		/** Required */
		accountId: string;
	}
	export interface DisassociateMemberRequestFormProperties {

		/** Required */
		accountId: FormControl<string | null | undefined>,
	}
	export function CreateDisassociateMemberRequestFormGroup() {
		return new FormGroup<DisassociateMemberRequestFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Details about the ECR automated re-scan duration setting for your environment. */
	export interface EcrConfiguration {

		/** Required */
		rescanDuration: EcrRescanDuration;
	}

	/** Details about the ECR automated re-scan duration setting for your environment. */
	export interface EcrConfigurationFormProperties {

		/** Required */
		rescanDuration: FormControl<EcrRescanDuration | null | undefined>,
	}
	export function CreateEcrConfigurationFormGroup() {
		return new FormGroup<EcrConfigurationFormProperties>({
			rescanDuration: new FormControl<EcrRescanDuration | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface EnableDelegatedAdminAccountRequest {
		clientToken?: string;

		/** Required */
		delegatedAdminAccountId: string;
	}
	export interface EnableDelegatedAdminAccountRequestFormProperties {
		clientToken: FormControl<string | null | undefined>,

		/** Required */
		delegatedAdminAccountId: FormControl<string | null | undefined>,
	}
	export function CreateEnableDelegatedAdminAccountRequestFormGroup() {
		return new FormGroup<EnableDelegatedAdminAccountRequestFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined),
			delegatedAdminAccountId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface EnableRequest {
		accountIds?: Array<string>;
		clientToken?: string;

		/** Required */
		resourceTypes: Array<ResourceScanType>;
	}
	export interface EnableRequestFormProperties {
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateEnableRequestFormGroup() {
		return new FormGroup<EnableRequestFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum FindingType { NETWORK_REACHABILITY = 'NETWORK_REACHABILITY', PACKAGE_VULNERABILITY = 'PACKAGE_VULNERABILITY', CODE_VULNERABILITY = 'CODE_VULNERABILITY' }

	export enum FindingTypeSortBy { CRITICAL = 'CRITICAL', HIGH = 'HIGH', ALL = 'ALL' }

	export interface GetConfigurationRequest {
	}
	export interface GetConfigurationRequestFormProperties {
	}
	export function CreateGetConfigurationRequestFormGroup() {
		return new FormGroup<GetConfigurationRequestFormProperties>({
		});

	}

	export interface GetDelegatedAdminAccountRequest {
	}
	export interface GetDelegatedAdminAccountRequestFormProperties {
	}
	export function CreateGetDelegatedAdminAccountRequestFormGroup() {
		return new FormGroup<GetDelegatedAdminAccountRequestFormProperties>({
		});

	}

	export interface GetEc2DeepInspectionConfigurationRequest {
	}
	export interface GetEc2DeepInspectionConfigurationRequestFormProperties {
	}
	export function CreateGetEc2DeepInspectionConfigurationRequestFormGroup() {
		return new FormGroup<GetEc2DeepInspectionConfigurationRequestFormProperties>({
		});

	}

	export enum ResourceType { AWS_EC2_INSTANCE = 'AWS_EC2_INSTANCE', AWS_ECR_CONTAINER_IMAGE = 'AWS_ECR_CONTAINER_IMAGE', AWS_ECR_REPOSITORY = 'AWS_ECR_REPOSITORY', AWS_LAMBDA_FUNCTION = 'AWS_LAMBDA_FUNCTION' }

	export interface GetEncryptionKeyRequest {
	}
	export interface GetEncryptionKeyRequestFormProperties {
	}
	export function CreateGetEncryptionKeyRequestFormGroup() {
		return new FormGroup<GetEncryptionKeyRequestFormProperties>({
		});

	}

	export interface GetFindingsReportStatusRequest {
		reportId?: string;
	}
	export interface GetFindingsReportStatusRequestFormProperties {
		reportId: FormControl<string | null | undefined>,
	}
	export function CreateGetFindingsReportStatusRequestFormGroup() {
		return new FormGroup<GetFindingsReportStatusRequestFormProperties>({
			reportId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetMemberRequest {

		/** Required */
		accountId: string;
	}
	export interface GetMemberRequestFormProperties {

		/** Required */
		accountId: FormControl<string | null | undefined>,
	}
	export function CreateGetMemberRequestFormGroup() {
		return new FormGroup<GetMemberRequestFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetSbomExportRequest {

		/** Required */
		reportId: string;
	}
	export interface GetSbomExportRequestFormProperties {

		/** Required */
		reportId: FormControl<string | null | undefined>,
	}
	export function CreateGetSbomExportRequestFormGroup() {
		return new FormGroup<GetSbomExportRequestFormProperties>({
			reportId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ImageLayerSortBy { CRITICAL = 'CRITICAL', HIGH = 'HIGH', ALL = 'ALL' }

	export enum LambdaFunctionSortBy { CRITICAL = 'CRITICAL', HIGH = 'HIGH', ALL = 'ALL' }

	export enum LambdaLayerSortBy { CRITICAL = 'CRITICAL', HIGH = 'HIGH', ALL = 'ALL' }

	export interface ListAccountPermissionsRequest {
		maxResults?: number | null;
		nextToken?: string;
		service?: Service;
	}
	export interface ListAccountPermissionsRequestFormProperties {
		maxResults: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
		service: FormControl<Service | null | undefined>,
	}
	export function CreateListAccountPermissionsRequestFormGroup() {
		return new FormGroup<ListAccountPermissionsRequestFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
			service: new FormControl<Service | null | undefined>(undefined),
		});

	}

	export interface ListCoverageRequest {
		filterCriteria?: CoverageFilterCriteria;
		maxResults?: number | null;
		nextToken?: string;
	}
	export interface ListCoverageRequestFormProperties {
		maxResults: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListCoverageRequestFormGroup() {
		return new FormGroup<ListCoverageRequestFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListCoverageStatisticsRequest {
		filterCriteria?: CoverageFilterCriteria;
		groupBy?: GroupKey;
		nextToken?: string;
	}
	export interface ListCoverageStatisticsRequestFormProperties {
		groupBy: FormControl<GroupKey | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListCoverageStatisticsRequestFormGroup() {
		return new FormGroup<ListCoverageStatisticsRequestFormProperties>({
			groupBy: new FormControl<GroupKey | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListDelegatedAdminAccountsRequest {
		maxResults?: number | null;
		nextToken?: string;
	}
	export interface ListDelegatedAdminAccountsRequestFormProperties {
		maxResults: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListDelegatedAdminAccountsRequestFormGroup() {
		return new FormGroup<ListDelegatedAdminAccountsRequestFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListFiltersRequest {
		action?: FilterAction;
		arns?: Array<string>;
		maxResults?: number | null;
		nextToken?: string;
	}
	export interface ListFiltersRequestFormProperties {
		action: FormControl<FilterAction | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListFiltersRequestFormGroup() {
		return new FormGroup<ListFiltersRequestFormProperties>({
			action: new FormControl<FilterAction | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListFindingAggregationsRequest {
		accountIds?: Array<StringFilter>;
		aggregationRequest?: AggregationRequest;

		/** Required */
		aggregationType: AggregationType;
		maxResults?: number | null;
		nextToken?: string;
	}
	export interface ListFindingAggregationsRequestFormProperties {

		/** Required */
		aggregationType: FormControl<AggregationType | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListFindingAggregationsRequestFormGroup() {
		return new FormGroup<ListFindingAggregationsRequestFormProperties>({
			aggregationType: new FormControl<AggregationType | null | undefined>(undefined, [Validators.required]),
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details about the criteria used to sort finding results. */
	export interface SortCriteria {

		/** Required */
		field: SortField;

		/** Required */
		sortOrder: SortOrder;
	}

	/** Details about the criteria used to sort finding results. */
	export interface SortCriteriaFormProperties {

		/** Required */
		field: FormControl<SortField | null | undefined>,

		/** Required */
		sortOrder: FormControl<SortOrder | null | undefined>,
	}
	export function CreateSortCriteriaFormGroup() {
		return new FormGroup<SortCriteriaFormProperties>({
			field: new FormControl<SortField | null | undefined>(undefined, [Validators.required]),
			sortOrder: new FormControl<SortOrder | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListFindingsRequest {
		filterCriteria?: FilterCriteria;
		maxResults?: number | null;
		nextToken?: string;
		sortCriteria?: SortCriteria;
	}
	export interface ListFindingsRequestFormProperties {
		maxResults: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListFindingsRequestFormGroup() {
		return new FormGroup<ListFindingsRequestFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListMembersRequest {
		maxResults?: number | null;
		nextToken?: string;
		onlyAssociated?: boolean | null;
	}
	export interface ListMembersRequestFormProperties {
		maxResults: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
		onlyAssociated: FormControl<boolean | null | undefined>,
	}
	export function CreateListMembersRequestFormGroup() {
		return new FormGroup<ListMembersRequestFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
			onlyAssociated: new FormControl<boolean | null | undefined>(undefined),
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

	export interface ListUsageTotalsRequest {
		accountIds?: Array<string>;
		maxResults?: number | null;
		nextToken?: string;
	}
	export interface ListUsageTotalsRequestFormProperties {
		maxResults: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListUsageTotalsRequestFormGroup() {
		return new FormGroup<ListUsageTotalsRequestFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum PackageSortBy { CRITICAL = 'CRITICAL', HIGH = 'HIGH', ALL = 'ALL' }

	export interface ResetEncryptionKeyRequest {

		/** Required */
		resourceType: CoverageResourceType;

		/** Required */
		scanType: ScanType;
	}
	export interface ResetEncryptionKeyRequestFormProperties {

		/** Required */
		resourceType: FormControl<CoverageResourceType | null | undefined>,

		/** Required */
		scanType: FormControl<ScanType | null | undefined>,
	}
	export function CreateResetEncryptionKeyRequestFormGroup() {
		return new FormGroup<ResetEncryptionKeyRequestFormProperties>({
			resourceType: new FormControl<CoverageResourceType | null | undefined>(undefined, [Validators.required]),
			scanType: new FormControl<ScanType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ResourceMapComparison { EQUALS = 'EQUALS' }

	export enum ScanStatusCode { ACTIVE = 'ACTIVE', INACTIVE = 'INACTIVE' }


	/** Details on the criteria used to define the filter for a vulnerability search.  */
	export interface SearchVulnerabilitiesFilterCriteria {

		/** Required */
		vulnerabilityIds: Array<string>;
	}

	/** Details on the criteria used to define the filter for a vulnerability search.  */
	export interface SearchVulnerabilitiesFilterCriteriaFormProperties {
	}
	export function CreateSearchVulnerabilitiesFilterCriteriaFormGroup() {
		return new FormGroup<SearchVulnerabilitiesFilterCriteriaFormProperties>({
		});

	}

	export interface SearchVulnerabilitiesRequest {

		/** Required */
		filterCriteria: SearchVulnerabilitiesFilterCriteria;
		nextToken?: string;
	}
	export interface SearchVulnerabilitiesRequestFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateSearchVulnerabilitiesRequestFormGroup() {
		return new FormGroup<SearchVulnerabilitiesRequestFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
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

	export enum TitleSortBy { CRITICAL = 'CRITICAL', HIGH = 'HIGH', ALL = 'ALL' }

	export interface UntagResourceRequest {
	}
	export interface UntagResourceRequestFormProperties {
	}
	export function CreateUntagResourceRequestFormGroup() {
		return new FormGroup<UntagResourceRequestFormProperties>({
		});

	}

	export interface UpdateConfigurationRequest {

		/** Required */
		ecrConfiguration: EcrConfiguration;
	}
	export interface UpdateConfigurationRequestFormProperties {
	}
	export function CreateUpdateConfigurationRequestFormGroup() {
		return new FormGroup<UpdateConfigurationRequestFormProperties>({
		});

	}

	export interface UpdateEc2DeepInspectionConfigurationRequest {
		activateDeepInspection?: boolean | null;
		packagePaths?: Array<string>;
	}
	export interface UpdateEc2DeepInspectionConfigurationRequestFormProperties {
		activateDeepInspection: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateEc2DeepInspectionConfigurationRequestFormGroup() {
		return new FormGroup<UpdateEc2DeepInspectionConfigurationRequestFormProperties>({
			activateDeepInspection: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UpdateEncryptionKeyRequest {

		/** Required */
		kmsKeyId: string;

		/** Required */
		resourceType: CoverageResourceType;

		/** Required */
		scanType: ScanType;
	}
	export interface UpdateEncryptionKeyRequestFormProperties {

		/** Required */
		kmsKeyId: FormControl<string | null | undefined>,

		/** Required */
		resourceType: FormControl<CoverageResourceType | null | undefined>,

		/** Required */
		scanType: FormControl<ScanType | null | undefined>,
	}
	export function CreateUpdateEncryptionKeyRequestFormGroup() {
		return new FormGroup<UpdateEncryptionKeyRequestFormProperties>({
			kmsKeyId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resourceType: new FormControl<CoverageResourceType | null | undefined>(undefined, [Validators.required]),
			scanType: new FormControl<ScanType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateFilterRequest {
		action?: FilterAction;
		description?: string;

		/** Required */
		filterArn: string;
		filterCriteria?: FilterCriteria;
		name?: string;
		reason?: string;
	}
	export interface UpdateFilterRequestFormProperties {
		action: FormControl<FilterAction | null | undefined>,
		description: FormControl<string | null | undefined>,

		/** Required */
		filterArn: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		reason: FormControl<string | null | undefined>,
	}
	export function CreateUpdateFilterRequestFormGroup() {
		return new FormGroup<UpdateFilterRequestFormProperties>({
			action: new FormControl<FilterAction | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			filterArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined),
			reason: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateOrgEc2DeepInspectionConfigurationRequest {

		/** Required */
		orgPackagePaths: Array<string>;
	}
	export interface UpdateOrgEc2DeepInspectionConfigurationRequestFormProperties {
	}
	export function CreateUpdateOrgEc2DeepInspectionConfigurationRequestFormGroup() {
		return new FormGroup<UpdateOrgEc2DeepInspectionConfigurationRequestFormProperties>({
		});

	}

	export interface UpdateOrganizationConfigurationRequest {

		/** Required */
		autoEnable: AutoEnable;
	}
	export interface UpdateOrganizationConfigurationRequestFormProperties {
	}
	export function CreateUpdateOrganizationConfigurationRequestFormGroup() {
		return new FormGroup<UpdateOrganizationConfigurationRequestFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Associates an Amazon Web Services account with an Amazon Inspector delegated administrator. An HTTP 200 response indicates the association was successfully started, but doesn’t indicate whether it was completed. You can check if the association completed by using <a href="https://docs.aws.amazon.com/inspector/v2/APIReference/API_ListMembers.html">ListMembers</a> for multiple accounts or <a href="https://docs.aws.amazon.com/inspector/v2/APIReference/API_GetMember.html">GetMembers</a> for a single account.
		 * Post members/associate
		 * @return {AssociateMemberResponse} Success
		 */
		AssociateMember(requestBody: AssociateMemberPostBody): Observable<AssociateMemberResponse> {
			return this.http.post<AssociateMemberResponse>(this.baseUri + 'members/associate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves the Amazon Inspector status of multiple Amazon Web Services accounts within your environment.
		 * Post status/batch/get
		 * @return {BatchGetAccountStatusResponse} Success
		 */
		BatchGetAccountStatus(requestBody: BatchGetAccountStatusPostBody): Observable<BatchGetAccountStatusResponse> {
			return this.http.post<BatchGetAccountStatusResponse>(this.baseUri + 'status/batch/get', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves code snippets from findings that Amazon Inspector detected code vulnerabilities in.
		 * Post codesnippet/batchget
		 * @return {BatchGetCodeSnippetResponse} Success
		 */
		BatchGetCodeSnippet(requestBody: BatchGetCodeSnippetPostBody): Observable<BatchGetCodeSnippetResponse> {
			return this.http.post<BatchGetCodeSnippetResponse>(this.baseUri + 'codesnippet/batchget', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets vulnerability details for findings.
		 * Post findings/details/batch/get
		 * @return {BatchGetFindingDetailsResponse} Success
		 */
		BatchGetFindingDetails(requestBody: BatchGetFindingDetailsPostBody): Observable<BatchGetFindingDetailsResponse> {
			return this.http.post<BatchGetFindingDetailsResponse>(this.baseUri + 'findings/details/batch/get', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets free trial status for multiple Amazon Web Services accounts.
		 * Post freetrialinfo/batchget
		 * @return {BatchGetFreeTrialInfoResponse} Success
		 */
		BatchGetFreeTrialInfo(requestBody: BatchGetFreeTrialInfoPostBody): Observable<BatchGetFreeTrialInfoResponse> {
			return this.http.post<BatchGetFreeTrialInfoResponse>(this.baseUri + 'freetrialinfo/batchget', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves Amazon Inspector deep inspection activation status of multiple member accounts within your organization. You must be the delegated administrator of an organization in Amazon Inspector to use this API.
		 * Post ec2deepinspectionstatus/member/batch/get
		 * @return {BatchGetMemberEc2DeepInspectionStatusResponse} Success
		 */
		BatchGetMemberEc2DeepInspectionStatus(requestBody: BatchGetMemberEc2DeepInspectionStatusPostBody): Observable<BatchGetMemberEc2DeepInspectionStatusResponse> {
			return this.http.post<BatchGetMemberEc2DeepInspectionStatusResponse>(this.baseUri + 'ec2deepinspectionstatus/member/batch/get', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Activates or deactivates Amazon Inspector deep inspection for the provided member accounts in your organization. You must be the delegated administrator of an organization in Amazon Inspector to use this API.
		 * Post ec2deepinspectionstatus/member/batch/update
		 * @return {BatchUpdateMemberEc2DeepInspectionStatusResponse} Success
		 */
		BatchUpdateMemberEc2DeepInspectionStatus(requestBody: BatchUpdateMemberEc2DeepInspectionStatusPostBody): Observable<BatchUpdateMemberEc2DeepInspectionStatusResponse> {
			return this.http.post<BatchUpdateMemberEc2DeepInspectionStatusResponse>(this.baseUri + 'ec2deepinspectionstatus/member/batch/update', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Cancels the given findings report.
		 * Post reporting/cancel
		 * @return {CancelFindingsReportResponse} Success
		 */
		CancelFindingsReport(requestBody: CancelFindingsReportPostBody): Observable<CancelFindingsReportResponse> {
			return this.http.post<CancelFindingsReportResponse>(this.baseUri + 'reporting/cancel', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Cancels a software bill of materials (SBOM) report.
		 * Post sbomexport/cancel
		 * @return {CancelSbomExportResponse} Success
		 */
		CancelSbomExport(requestBody: CancelSbomExportPostBody): Observable<CancelSbomExportResponse> {
			return this.http.post<CancelSbomExportResponse>(this.baseUri + 'sbomexport/cancel', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a filter resource using specified filter criteria.
		 * Post filters/create
		 * @return {CreateFilterResponse} Success
		 */
		CreateFilter(requestBody: CreateFilterPostBody): Observable<CreateFilterResponse> {
			return this.http.post<CreateFilterResponse>(this.baseUri + 'filters/create', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a finding report. By default only <code>ACTIVE</code> findings are returned in the report. To see <code>SUPRESSED</code> or <code>CLOSED</code> findings you must specify a value for the <code>findingStatus</code> filter criteria.
		 * Post reporting/create
		 * @return {CreateFindingsReportResponse} Success
		 */
		CreateFindingsReport(requestBody: CreateFindingsReportPostBody): Observable<CreateFindingsReportResponse> {
			return this.http.post<CreateFindingsReportResponse>(this.baseUri + 'reporting/create', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a software bill of materials (SBOM) report.
		 * Post sbomexport/create
		 * @return {CreateSbomExportResponse} Success
		 */
		CreateSbomExport(requestBody: CreateSbomExportPostBody): Observable<CreateSbomExportResponse> {
			return this.http.post<CreateSbomExportResponse>(this.baseUri + 'sbomexport/create', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a filter resource.
		 * Post filters/delete
		 * @return {DeleteFilterResponse} Success
		 */
		DeleteFilter(requestBody: DeleteFilterPostBody): Observable<DeleteFilterResponse> {
			return this.http.post<DeleteFilterResponse>(this.baseUri + 'filters/delete', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describe Amazon Inspector configuration settings for an Amazon Web Services organization.
		 * Post organizationconfiguration/describe
		 * @return {DescribeOrganizationConfigurationResponse} Success
		 */
		DescribeOrganizationConfiguration(): Observable<DescribeOrganizationConfigurationResponse> {
			return this.http.post<DescribeOrganizationConfigurationResponse>(this.baseUri + 'organizationconfiguration/describe', null, {});
		}

		/**
		 * Disables Amazon Inspector scans for one or more Amazon Web Services accounts. Disabling all scan types in an account disables the Amazon Inspector service.
		 * Post disable
		 * @return {DisableResponse} Success
		 */
		Disable(requestBody: DisablePostBody): Observable<DisableResponse> {
			return this.http.post<DisableResponse>(this.baseUri + 'disable', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Disables the Amazon Inspector delegated administrator for your organization.
		 * Post delegatedadminaccounts/disable
		 * @return {DisableDelegatedAdminAccountResponse} Success
		 */
		DisableDelegatedAdminAccount(requestBody: DisableDelegatedAdminAccountPostBody): Observable<DisableDelegatedAdminAccountResponse> {
			return this.http.post<DisableDelegatedAdminAccountResponse>(this.baseUri + 'delegatedadminaccounts/disable', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Disassociates a member account from an Amazon Inspector delegated administrator.
		 * Post members/disassociate
		 * @return {DisassociateMemberResponse} Success
		 */
		DisassociateMember(requestBody: DisassociateMemberPostBody): Observable<DisassociateMemberResponse> {
			return this.http.post<DisassociateMemberResponse>(this.baseUri + 'members/disassociate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Enables Amazon Inspector scans for one or more Amazon Web Services accounts.
		 * Post enable
		 * @return {EnableResponse} Success
		 */
		Enable(requestBody: EnablePostBody): Observable<EnableResponse> {
			return this.http.post<EnableResponse>(this.baseUri + 'enable', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Enables the Amazon Inspector delegated administrator for your Organizations organization.
		 * Post delegatedadminaccounts/enable
		 * @return {EnableDelegatedAdminAccountResponse} Success
		 */
		EnableDelegatedAdminAccount(requestBody: EnableDelegatedAdminAccountPostBody): Observable<EnableDelegatedAdminAccountResponse> {
			return this.http.post<EnableDelegatedAdminAccountResponse>(this.baseUri + 'delegatedadminaccounts/enable', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves setting configurations for Inspector scans.
		 * Post configuration/get
		 * @return {GetConfigurationResponse} Success
		 */
		GetConfiguration(): Observable<GetConfigurationResponse> {
			return this.http.post<GetConfigurationResponse>(this.baseUri + 'configuration/get', null, {});
		}

		/**
		 * Retrieves information about the Amazon Inspector delegated administrator for your organization.
		 * Post delegatedadminaccounts/get
		 * @return {GetDelegatedAdminAccountResponse} Success
		 */
		GetDelegatedAdminAccount(): Observable<GetDelegatedAdminAccountResponse> {
			return this.http.post<GetDelegatedAdminAccountResponse>(this.baseUri + 'delegatedadminaccounts/get', null, {});
		}

		/**
		 * Retrieves the activation status of Amazon Inspector deep inspection and custom paths associated with your account.
		 * Post ec2deepinspectionconfiguration/get
		 * @return {GetEc2DeepInspectionConfigurationResponse} Success
		 */
		GetEc2DeepInspectionConfiguration(): Observable<GetEc2DeepInspectionConfigurationResponse> {
			return this.http.post<GetEc2DeepInspectionConfigurationResponse>(this.baseUri + 'ec2deepinspectionconfiguration/get', null, {});
		}

		/**
		 * Gets an encryption key.
		 * Get encryptionkey/get#resourceType&scanType
		 * @param {CoverageResourceType} resourceType The resource type the key encrypts.
		 * @param {ScanType} scanType The scan type the key encrypts.
		 * @return {GetEncryptionKeyResponse} Success
		 */
		GetEncryptionKey(resourceType: CoverageResourceType, scanType: ScanType): Observable<GetEncryptionKeyResponse> {
			return this.http.get<GetEncryptionKeyResponse>(this.baseUri + 'encryptionkey/get#resourceType&scanType?resourceType=' + resourceType + '&scanType=' + scanType, {});
		}

		/**
		 * Gets the status of a findings report.
		 * Post reporting/status/get
		 * @return {GetFindingsReportStatusResponse} Success
		 */
		GetFindingsReportStatus(requestBody: GetFindingsReportStatusPostBody): Observable<GetFindingsReportStatusResponse> {
			return this.http.post<GetFindingsReportStatusResponse>(this.baseUri + 'reporting/status/get', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets member information for your organization.
		 * Post members/get
		 * @return {GetMemberResponse} Success
		 */
		GetMember(requestBody: GetMemberPostBody): Observable<GetMemberResponse> {
			return this.http.post<GetMemberResponse>(this.baseUri + 'members/get', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets details of a software bill of materials (SBOM) report.
		 * Post sbomexport/get
		 * @return {GetSbomExportResponse} Success
		 */
		GetSbomExport(requestBody: GetSbomExportPostBody): Observable<GetSbomExportResponse> {
			return this.http.post<GetSbomExportResponse>(this.baseUri + 'sbomexport/get', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the permissions an account has to configure Amazon Inspector.
		 * Post accountpermissions/list
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListAccountPermissionsResponse} Success
		 */
		ListAccountPermissions(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListAccountPermissionsPostBody): Observable<ListAccountPermissionsResponse> {
			return this.http.post<ListAccountPermissionsResponse>(this.baseUri + 'accountpermissions/list?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists coverage details for you environment.
		 * Post coverage/list
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListCoverageResponse} Success
		 */
		ListCoverage(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListCoveragePostBody): Observable<ListCoverageResponse> {
			return this.http.post<ListCoverageResponse>(this.baseUri + 'coverage/list?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists Amazon Inspector coverage statistics for your environment.
		 * Post coverage/statistics/list
		 * @param {string} nextToken Pagination token
		 * @return {ListCoverageStatisticsResponse} Success
		 */
		ListCoverageStatistics(nextToken: string | null | undefined, requestBody: ListCoverageStatisticsPostBody): Observable<ListCoverageStatisticsResponse> {
			return this.http.post<ListCoverageStatisticsResponse>(this.baseUri + 'coverage/statistics/list?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists information about the Amazon Inspector delegated administrator of your organization.
		 * Post delegatedadminaccounts/list
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListDelegatedAdminAccountsResponse} Success
		 */
		ListDelegatedAdminAccounts(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListDelegatedAdminAccountsPostBody): Observable<ListDelegatedAdminAccountsResponse> {
			return this.http.post<ListDelegatedAdminAccountsResponse>(this.baseUri + 'delegatedadminaccounts/list?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the filters associated with your account.
		 * Post filters/list
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListFiltersResponse} Success
		 */
		ListFilters(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListFiltersPostBody): Observable<ListFiltersResponse> {
			return this.http.post<ListFiltersResponse>(this.baseUri + 'filters/list?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists aggregated finding data for your environment based on specific criteria.
		 * Post findings/aggregation/list
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListFindingAggregationsResponse} Success
		 */
		ListFindingAggregations(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListFindingAggregationsPostBody): Observable<ListFindingAggregationsResponse> {
			return this.http.post<ListFindingAggregationsResponse>(this.baseUri + 'findings/aggregation/list?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists findings for your environment.
		 * Post findings/list
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListFindingsResponse} Success
		 */
		ListFindings(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListFindingsPostBody): Observable<ListFindingsResponse> {
			return this.http.post<ListFindingsResponse>(this.baseUri + 'findings/list?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List members associated with the Amazon Inspector delegated administrator for your organization.
		 * Post members/list
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListMembersResponse} Success
		 */
		ListMembers(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListMembersPostBody): Observable<ListMembersResponse> {
			return this.http.post<ListMembersResponse>(this.baseUri + 'members/list?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all tags attached to a given resource.
		 * Get tags/{resourceArn}
		 * @param {string} resourceArn The Amazon resource number (ARN) of the resource to list tags of.
		 *     Min length: 1    Max length: 1011
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(resourceArn: string): Observable<ListTagsForResourceResponse> {
			return this.http.get<ListTagsForResourceResponse>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), {});
		}

		/**
		 * Adds tags to a resource.
		 * Post tags/{resourceArn}
		 * @param {string} resourceArn The Amazon Resource Name (ARN) of the resource to apply a tag to.
		 *     Min length: 1    Max length: 1011
		 * @return {TagResourceResponse} Success
		 */
		TagResource(resourceArn: string, requestBody: TagResourcePostBody): Observable<TagResourceResponse> {
			return this.http.post<TagResourceResponse>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the Amazon Inspector usage totals over the last 30 days.
		 * Post usage/list
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListUsageTotalsResponse} Success
		 */
		ListUsageTotals(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListUsageTotalsPostBody): Observable<ListUsageTotalsResponse> {
			return this.http.post<ListUsageTotalsResponse>(this.baseUri + 'usage/list?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Resets an encryption key. After the key is reset your resources will be encrypted by an Amazon Web Services owned key.
		 * Put encryptionkey/reset
		 * @return {ResetEncryptionKeyResponse} Success
		 */
		ResetEncryptionKey(requestBody: ResetEncryptionKeyPutBody): Observable<ResetEncryptionKeyResponse> {
			return this.http.put<ResetEncryptionKeyResponse>(this.baseUri + 'encryptionkey/reset', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists Amazon Inspector coverage details for a specific vulnerability.
		 * Post vulnerabilities/search
		 * @param {string} nextToken Pagination token
		 * @return {SearchVulnerabilitiesResponse} Success
		 */
		SearchVulnerabilities(nextToken: string | null | undefined, requestBody: SearchVulnerabilitiesPostBody): Observable<SearchVulnerabilitiesResponse> {
			return this.http.post<SearchVulnerabilitiesResponse>(this.baseUri + 'vulnerabilities/search?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes tags from a resource.
		 * Delete tags/{resourceArn}#tagKeys
		 * @param {string} resourceArn The Amazon Resource Name (ARN) for the resource to remove tags from.
		 *     Min length: 1    Max length: 1011
		 * @param {Array<string>} tagKeys The tag keys to remove from the resource.
		 *     Minimum items: 0    Maximum items: 50
		 * @return {UntagResourceResponse} Success
		 */
		UntagResource(resourceArn: string, tagKeys: Array<string>): Observable<UntagResourceResponse> {
			return this.http.delete<UntagResourceResponse>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)) + '#tagKeys&' + tagKeys.map(z => `tagKeys=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Updates setting configurations for your Amazon Inspector account. When you use this API as an Amazon Inspector delegated administrator this updates the setting for all accounts you manage. Member accounts in an organization cannot update this setting.
		 * Post configuration/update
		 * @return {UpdateConfigurationResponse} Success
		 */
		UpdateConfiguration(requestBody: UpdateConfigurationPostBody): Observable<UpdateConfigurationResponse> {
			return this.http.post<UpdateConfigurationResponse>(this.baseUri + 'configuration/update', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Activates, deactivates Amazon Inspector deep inspection, or updates custom paths for your account.
		 * Post ec2deepinspectionconfiguration/update
		 * @return {UpdateEc2DeepInspectionConfigurationResponse} Success
		 */
		UpdateEc2DeepInspectionConfiguration(requestBody: UpdateEc2DeepInspectionConfigurationPostBody): Observable<UpdateEc2DeepInspectionConfigurationResponse> {
			return this.http.post<UpdateEc2DeepInspectionConfigurationResponse>(this.baseUri + 'ec2deepinspectionconfiguration/update', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates an encryption key. A <code>ResourceNotFoundException</code> means that an AWS owned key is being used for encryption.
		 * Put encryptionkey/update
		 * @return {UpdateEncryptionKeyResponse} Success
		 */
		UpdateEncryptionKey(requestBody: UpdateEncryptionKeyPutBody): Observable<UpdateEncryptionKeyResponse> {
			return this.http.put<UpdateEncryptionKeyResponse>(this.baseUri + 'encryptionkey/update', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Specifies the action that is to be applied to the findings that match the filter.
		 * Post filters/update
		 * @return {UpdateFilterResponse} Success
		 */
		UpdateFilter(requestBody: UpdateFilterPostBody): Observable<UpdateFilterResponse> {
			return this.http.post<UpdateFilterResponse>(this.baseUri + 'filters/update', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates the Amazon Inspector deep inspection custom paths for your organization. You must be an Amazon Inspector delegated administrator to use this API.
		 * Post ec2deepinspectionconfiguration/org/update
		 * @return {UpdateOrgEc2DeepInspectionConfigurationResponse} Success
		 */
		UpdateOrgEc2DeepInspectionConfiguration(requestBody: UpdateOrgEc2DeepInspectionConfigurationPostBody): Observable<UpdateOrgEc2DeepInspectionConfigurationResponse> {
			return this.http.post<UpdateOrgEc2DeepInspectionConfigurationResponse>(this.baseUri + 'ec2deepinspectionconfiguration/org/update', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates the configurations for your Amazon Inspector organization.
		 * Post organizationconfiguration/update
		 * @return {UpdateOrganizationConfigurationResponse} Success
		 */
		UpdateOrganizationConfiguration(requestBody: UpdateOrganizationConfigurationPostBody): Observable<UpdateOrganizationConfigurationResponse> {
			return this.http.post<UpdateOrganizationConfigurationResponse>(this.baseUri + 'organizationconfiguration/update', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export interface AssociateMemberPostBody {

		/**
		 * The Amazon Web Services account ID of the member account to be associated.
		 * Required
		 * Min length: 12
		 * Max length: 12
		 */
		accountId: string;
	}
	export interface AssociateMemberPostBodyFormProperties {

		/**
		 * The Amazon Web Services account ID of the member account to be associated.
		 * Required
		 * Min length: 12
		 * Max length: 12
		 */
		accountId: FormControl<string | null | undefined>,
	}
	export function CreateAssociateMemberPostBodyFormGroup() {
		return new FormGroup<AssociateMemberPostBodyFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(12), Validators.maxLength(12), Validators.pattern('^\d{12}$')]),
		});

	}

	export interface BatchGetAccountStatusPostBody {

		/**
		 * The 12-digit Amazon Web Services account IDs of the accounts to retrieve Amazon Inspector status for.
		 * Minimum items: 0
		 * Maximum items: 100
		 */
		accountIds?: Array<string>;
	}
	export interface BatchGetAccountStatusPostBodyFormProperties {
	}
	export function CreateBatchGetAccountStatusPostBodyFormGroup() {
		return new FormGroup<BatchGetAccountStatusPostBodyFormProperties>({
		});

	}

	export interface BatchGetCodeSnippetPostBody {

		/**
		 * An array of finding ARNs for the findings you want to retrieve code snippets from.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 10
		 */
		findingArns: Array<string>;
	}
	export interface BatchGetCodeSnippetPostBodyFormProperties {
	}
	export function CreateBatchGetCodeSnippetPostBodyFormGroup() {
		return new FormGroup<BatchGetCodeSnippetPostBodyFormProperties>({
		});

	}

	export interface BatchGetFindingDetailsPostBody {

		/**
		 * A list of finding ARNs.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 10
		 */
		findingArns: Array<string>;
	}
	export interface BatchGetFindingDetailsPostBodyFormProperties {
	}
	export function CreateBatchGetFindingDetailsPostBodyFormGroup() {
		return new FormGroup<BatchGetFindingDetailsPostBodyFormProperties>({
		});

	}

	export interface BatchGetFreeTrialInfoPostBody {

		/**
		 * The account IDs to get free trial status for.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 100
		 */
		accountIds: Array<string>;
	}
	export interface BatchGetFreeTrialInfoPostBodyFormProperties {
	}
	export function CreateBatchGetFreeTrialInfoPostBodyFormGroup() {
		return new FormGroup<BatchGetFreeTrialInfoPostBodyFormProperties>({
		});

	}

	export interface BatchGetMemberEc2DeepInspectionStatusPostBody {

		/**
		 * The unique identifiers for the Amazon Web Services accounts to retrieve Amazon Inspector deep inspection activation status for. <pre><code> &lt;/p&gt; </code></pre>
		 * Minimum items: 0
		 * Maximum items: 100
		 */
		accountIds?: Array<string>;
	}
	export interface BatchGetMemberEc2DeepInspectionStatusPostBodyFormProperties {
	}
	export function CreateBatchGetMemberEc2DeepInspectionStatusPostBodyFormGroup() {
		return new FormGroup<BatchGetMemberEc2DeepInspectionStatusPostBodyFormProperties>({
		});

	}

	export interface BatchUpdateMemberEc2DeepInspectionStatusPostBody {

		/**
		 * The unique identifiers for the Amazon Web Services accounts to change Amazon Inspector deep inspection status for.
		 * Required
		 * Minimum items: 0
		 * Maximum items: 100
		 */
		accountIds: Array<MemberAccountEc2DeepInspectionStatus>;
	}
	export interface BatchUpdateMemberEc2DeepInspectionStatusPostBodyFormProperties {
	}
	export function CreateBatchUpdateMemberEc2DeepInspectionStatusPostBodyFormGroup() {
		return new FormGroup<BatchUpdateMemberEc2DeepInspectionStatusPostBodyFormProperties>({
		});

	}

	export interface CancelFindingsReportPostBody {

		/**
		 * The ID of the report to be canceled.
		 * Required
		 */
		reportId: string;
	}
	export interface CancelFindingsReportPostBodyFormProperties {

		/**
		 * The ID of the report to be canceled.
		 * Required
		 */
		reportId: FormControl<string | null | undefined>,
	}
	export function CreateCancelFindingsReportPostBodyFormGroup() {
		return new FormGroup<CancelFindingsReportPostBodyFormProperties>({
			reportId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('\b[a-f0-9]{8}\b-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-\b[a-f0-9]{12}\b')]),
		});

	}

	export interface CancelSbomExportPostBody {

		/**
		 * The report ID of the SBOM export to cancel.
		 * Required
		 */
		reportId: string;
	}
	export interface CancelSbomExportPostBodyFormProperties {

		/**
		 * The report ID of the SBOM export to cancel.
		 * Required
		 */
		reportId: FormControl<string | null | undefined>,
	}
	export function CreateCancelSbomExportPostBodyFormGroup() {
		return new FormGroup<CancelSbomExportPostBodyFormProperties>({
			reportId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('\b[a-f0-9]{8}\b-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-\b[a-f0-9]{12}\b')]),
		});

	}

	export interface CreateFilterPostBody {

		/**
		 * Defines the action that is to be applied to the findings that match the filter.
		 * Required
		 */
		action: FilterAction;

		/**
		 * A description of the filter.
		 * Min length: 1
		 * Max length: 512
		 */
		description?: string | null;

		/**
		 * Details on the criteria used to define the filter.
		 * Required
		 */
		filterCriteria: CreateFilterPostBodyFilterCriteria;

		/**
		 * The name of the filter. Minimum length of 3. Maximum length of 64. Valid characters include alphanumeric characters, dot (.), underscore (_), and dash (-). Spaces are not allowed.
		 * Required
		 * Min length: 1
		 * Max length: 128
		 */
		name: string;

		/**
		 * The reason for creating the filter.
		 * Min length: 1
		 * Max length: 512
		 */
		reason?: string | null;

		/** A list of tags for the filter. */
		tags?: {[id: string]: string };
	}
	export interface CreateFilterPostBodyFormProperties {

		/**
		 * Defines the action that is to be applied to the findings that match the filter.
		 * Required
		 */
		action: FormControl<FilterAction | null | undefined>,

		/**
		 * A description of the filter.
		 * Min length: 1
		 * Max length: 512
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * The name of the filter. Minimum length of 3. Maximum length of 64. Valid characters include alphanumeric characters, dot (.), underscore (_), and dash (-). Spaces are not allowed.
		 * Required
		 * Min length: 1
		 * Max length: 128
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The reason for creating the filter.
		 * Min length: 1
		 * Max length: 512
		 */
		reason: FormControl<string | null | undefined>,

		/** A list of tags for the filter. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateFilterPostBodyFormGroup() {
		return new FormGroup<CreateFilterPostBodyFormProperties>({
			action: new FormControl<FilterAction | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(512)]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128)]),
			reason: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(512)]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateFilterPostBodyFilterCriteria {
		awsAccountId?: Array<StringFilter>;
		codeVulnerabilityDetectorName?: Array<StringFilter>;
		codeVulnerabilityDetectorTags?: Array<StringFilter>;
		codeVulnerabilityFilePath?: Array<StringFilter>;
		componentId?: Array<StringFilter>;
		componentType?: Array<StringFilter>;
		ec2InstanceImageId?: Array<StringFilter>;
		ec2InstanceSubnetId?: Array<StringFilter>;
		ec2InstanceVpcId?: Array<StringFilter>;
		ecrImageArchitecture?: Array<StringFilter>;
		ecrImageHash?: Array<StringFilter>;
		ecrImagePushedAt?: Array<DateFilter>;
		ecrImageRegistry?: Array<StringFilter>;
		ecrImageRepositoryName?: Array<StringFilter>;
		ecrImageTags?: Array<StringFilter>;
		epssScore?: Array<NumberFilter>;
		exploitAvailable?: Array<StringFilter>;
		findingArn?: Array<StringFilter>;
		findingStatus?: Array<StringFilter>;
		findingType?: Array<StringFilter>;
		firstObservedAt?: Array<DateFilter>;
		fixAvailable?: Array<StringFilter>;
		inspectorScore?: Array<NumberFilter>;
		lambdaFunctionExecutionRoleArn?: Array<StringFilter>;
		lambdaFunctionLastModifiedAt?: Array<DateFilter>;
		lambdaFunctionLayers?: Array<StringFilter>;
		lambdaFunctionName?: Array<StringFilter>;
		lambdaFunctionRuntime?: Array<StringFilter>;
		lastObservedAt?: Array<DateFilter>;
		networkProtocol?: Array<StringFilter>;
		portRange?: Array<PortRangeFilter>;
		relatedVulnerabilities?: Array<StringFilter>;
		resourceId?: Array<StringFilter>;
		resourceTags?: Array<MapFilter>;
		resourceType?: Array<StringFilter>;
		severity?: Array<StringFilter>;
		title?: Array<StringFilter>;
		updatedAt?: Array<DateFilter>;
		vendorSeverity?: Array<StringFilter>;
		vulnerabilityId?: Array<StringFilter>;
		vulnerabilitySource?: Array<StringFilter>;
		vulnerablePackages?: Array<PackageFilter>;
	}
	export interface CreateFilterPostBodyFilterCriteriaFormProperties {
	}
	export function CreateCreateFilterPostBodyFilterCriteriaFormGroup() {
		return new FormGroup<CreateFilterPostBodyFilterCriteriaFormProperties>({
		});

	}

	export interface CreateFindingsReportPostBody {

		/** Details on the criteria used to define the filter. */
		filterCriteria?: CreateFindingsReportPostBodyFilterCriteria;

		/**
		 * The format to generate the report in.
		 * Required
		 */
		reportFormat: ReportFormat;

		/**
		 * Contains details of the Amazon S3 bucket and KMS key used to export findings.
		 * Required
		 */
		s3Destination: CreateFindingsReportPostBodyS3Destination;
	}
	export interface CreateFindingsReportPostBodyFormProperties {

		/**
		 * The format to generate the report in.
		 * Required
		 */
		reportFormat: FormControl<ReportFormat | null | undefined>,
	}
	export function CreateCreateFindingsReportPostBodyFormGroup() {
		return new FormGroup<CreateFindingsReportPostBodyFormProperties>({
			reportFormat: new FormControl<ReportFormat | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateFindingsReportPostBodyFilterCriteria {
		awsAccountId?: Array<StringFilter>;
		codeVulnerabilityDetectorName?: Array<StringFilter>;
		codeVulnerabilityDetectorTags?: Array<StringFilter>;
		codeVulnerabilityFilePath?: Array<StringFilter>;
		componentId?: Array<StringFilter>;
		componentType?: Array<StringFilter>;
		ec2InstanceImageId?: Array<StringFilter>;
		ec2InstanceSubnetId?: Array<StringFilter>;
		ec2InstanceVpcId?: Array<StringFilter>;
		ecrImageArchitecture?: Array<StringFilter>;
		ecrImageHash?: Array<StringFilter>;
		ecrImagePushedAt?: Array<DateFilter>;
		ecrImageRegistry?: Array<StringFilter>;
		ecrImageRepositoryName?: Array<StringFilter>;
		ecrImageTags?: Array<StringFilter>;
		epssScore?: Array<NumberFilter>;
		exploitAvailable?: Array<StringFilter>;
		findingArn?: Array<StringFilter>;
		findingStatus?: Array<StringFilter>;
		findingType?: Array<StringFilter>;
		firstObservedAt?: Array<DateFilter>;
		fixAvailable?: Array<StringFilter>;
		inspectorScore?: Array<NumberFilter>;
		lambdaFunctionExecutionRoleArn?: Array<StringFilter>;
		lambdaFunctionLastModifiedAt?: Array<DateFilter>;
		lambdaFunctionLayers?: Array<StringFilter>;
		lambdaFunctionName?: Array<StringFilter>;
		lambdaFunctionRuntime?: Array<StringFilter>;
		lastObservedAt?: Array<DateFilter>;
		networkProtocol?: Array<StringFilter>;
		portRange?: Array<PortRangeFilter>;
		relatedVulnerabilities?: Array<StringFilter>;
		resourceId?: Array<StringFilter>;
		resourceTags?: Array<MapFilter>;
		resourceType?: Array<StringFilter>;
		severity?: Array<StringFilter>;
		title?: Array<StringFilter>;
		updatedAt?: Array<DateFilter>;
		vendorSeverity?: Array<StringFilter>;
		vulnerabilityId?: Array<StringFilter>;
		vulnerabilitySource?: Array<StringFilter>;
		vulnerablePackages?: Array<PackageFilter>;
	}
	export interface CreateFindingsReportPostBodyFilterCriteriaFormProperties {
	}
	export function CreateCreateFindingsReportPostBodyFilterCriteriaFormGroup() {
		return new FormGroup<CreateFindingsReportPostBodyFilterCriteriaFormProperties>({
		});

	}

	export interface CreateFindingsReportPostBodyS3Destination {
		bucketName?: string;
		keyPrefix?: string;
		kmsKeyArn?: string;
	}
	export interface CreateFindingsReportPostBodyS3DestinationFormProperties {
		bucketName: FormControl<string | null | undefined>,
		keyPrefix: FormControl<string | null | undefined>,
		kmsKeyArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateFindingsReportPostBodyS3DestinationFormGroup() {
		return new FormGroup<CreateFindingsReportPostBodyS3DestinationFormProperties>({
			bucketName: new FormControl<string | null | undefined>(undefined),
			keyPrefix: new FormControl<string | null | undefined>(undefined),
			kmsKeyArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateSbomExportPostBody {

		/**
		 * The output format for the software bill of materials (SBOM) report.
		 * Required
		 */
		reportFormat: SbomReportFormat;

		/** The resource filter criteria for a Software bill of materials (SBOM) report. */
		resourceFilterCriteria?: CreateSbomExportPostBodyResourceFilterCriteria;

		/**
		 * Contains details of the Amazon S3 bucket and KMS key used to export findings.
		 * Required
		 */
		s3Destination: CreateSbomExportPostBodyS3Destination;
	}
	export interface CreateSbomExportPostBodyFormProperties {

		/**
		 * The output format for the software bill of materials (SBOM) report.
		 * Required
		 */
		reportFormat: FormControl<SbomReportFormat | null | undefined>,
	}
	export function CreateCreateSbomExportPostBodyFormGroup() {
		return new FormGroup<CreateSbomExportPostBodyFormProperties>({
			reportFormat: new FormControl<SbomReportFormat | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateSbomExportPostBodyResourceFilterCriteria {
		accountId?: Array<ResourceStringFilter>;
		ec2InstanceTags?: Array<ResourceMapFilter>;
		ecrImageTags?: Array<ResourceStringFilter>;
		ecrRepositoryName?: Array<ResourceStringFilter>;
		lambdaFunctionName?: Array<ResourceStringFilter>;
		lambdaFunctionTags?: Array<ResourceMapFilter>;
		resourceId?: Array<ResourceStringFilter>;
		resourceType?: Array<ResourceStringFilter>;
	}
	export interface CreateSbomExportPostBodyResourceFilterCriteriaFormProperties {
	}
	export function CreateCreateSbomExportPostBodyResourceFilterCriteriaFormGroup() {
		return new FormGroup<CreateSbomExportPostBodyResourceFilterCriteriaFormProperties>({
		});

	}

	export interface CreateSbomExportPostBodyS3Destination {
		bucketName?: string;
		keyPrefix?: string;
		kmsKeyArn?: string;
	}
	export interface CreateSbomExportPostBodyS3DestinationFormProperties {
		bucketName: FormControl<string | null | undefined>,
		keyPrefix: FormControl<string | null | undefined>,
		kmsKeyArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateSbomExportPostBodyS3DestinationFormGroup() {
		return new FormGroup<CreateSbomExportPostBodyS3DestinationFormProperties>({
			bucketName: new FormControl<string | null | undefined>(undefined),
			keyPrefix: new FormControl<string | null | undefined>(undefined),
			kmsKeyArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteFilterPostBody {

		/**
		 * The Amazon Resource Number (ARN) of the filter to be deleted.
		 * Required
		 * Min length: 1
		 * Max length: 128
		 */
		arn: string;
	}
	export interface DeleteFilterPostBodyFormProperties {

		/**
		 * The Amazon Resource Number (ARN) of the filter to be deleted.
		 * Required
		 * Min length: 1
		 * Max length: 128
		 */
		arn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteFilterPostBodyFormGroup() {
		return new FormGroup<DeleteFilterPostBodyFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128)]),
		});

	}

	export interface DisablePostBody {

		/**
		 * An array of account IDs you want to disable Amazon Inspector scans for.
		 * Minimum items: 0
		 * Maximum items: 100
		 */
		accountIds?: Array<string>;

		/**
		 * The resource scan types you want to disable.
		 * Minimum items: 0
		 * Maximum items: 3
		 */
		resourceTypes?: Array<ResourceScanType>;
	}
	export interface DisablePostBodyFormProperties {
	}
	export function CreateDisablePostBodyFormGroup() {
		return new FormGroup<DisablePostBodyFormProperties>({
		});

	}

	export interface DisableDelegatedAdminAccountPostBody {

		/**
		 * The Amazon Web Services account ID of the current Amazon Inspector delegated administrator.
		 * Required
		 * Min length: 12
		 * Max length: 12
		 */
		delegatedAdminAccountId: string;
	}
	export interface DisableDelegatedAdminAccountPostBodyFormProperties {

		/**
		 * The Amazon Web Services account ID of the current Amazon Inspector delegated administrator.
		 * Required
		 * Min length: 12
		 * Max length: 12
		 */
		delegatedAdminAccountId: FormControl<string | null | undefined>,
	}
	export function CreateDisableDelegatedAdminAccountPostBodyFormGroup() {
		return new FormGroup<DisableDelegatedAdminAccountPostBodyFormProperties>({
			delegatedAdminAccountId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(12), Validators.maxLength(12), Validators.pattern('^\d{12}$')]),
		});

	}

	export interface DisassociateMemberPostBody {

		/**
		 * The Amazon Web Services account ID of the member account to disassociate.
		 * Required
		 * Min length: 12
		 * Max length: 12
		 */
		accountId: string;
	}
	export interface DisassociateMemberPostBodyFormProperties {

		/**
		 * The Amazon Web Services account ID of the member account to disassociate.
		 * Required
		 * Min length: 12
		 * Max length: 12
		 */
		accountId: FormControl<string | null | undefined>,
	}
	export function CreateDisassociateMemberPostBodyFormGroup() {
		return new FormGroup<DisassociateMemberPostBodyFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(12), Validators.maxLength(12), Validators.pattern('^\d{12}$')]),
		});

	}

	export interface EnablePostBody {

		/**
		 * A list of account IDs you want to enable Amazon Inspector scans for.
		 * Minimum items: 0
		 * Maximum items: 100
		 */
		accountIds?: Array<string>;

		/**
		 * The idempotency token for the request.
		 * Min length: 1
		 * Max length: 64
		 */
		clientToken?: string | null;

		/**
		 * The resource scan types you want to enable.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 3
		 */
		resourceTypes: Array<ResourceScanType>;
	}
	export interface EnablePostBodyFormProperties {

		/**
		 * The idempotency token for the request.
		 * Min length: 1
		 * Max length: 64
		 */
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateEnablePostBodyFormGroup() {
		return new FormGroup<EnablePostBodyFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64)]),
		});

	}

	export interface EnableDelegatedAdminAccountPostBody {

		/**
		 * The idempotency token for the request.
		 * Min length: 1
		 * Max length: 64
		 */
		clientToken?: string | null;

		/**
		 * The Amazon Web Services account ID of the Amazon Inspector delegated administrator.
		 * Required
		 * Min length: 12
		 * Max length: 12
		 */
		delegatedAdminAccountId: string;
	}
	export interface EnableDelegatedAdminAccountPostBodyFormProperties {

		/**
		 * The idempotency token for the request.
		 * Min length: 1
		 * Max length: 64
		 */
		clientToken: FormControl<string | null | undefined>,

		/**
		 * The Amazon Web Services account ID of the Amazon Inspector delegated administrator.
		 * Required
		 * Min length: 12
		 * Max length: 12
		 */
		delegatedAdminAccountId: FormControl<string | null | undefined>,
	}
	export function CreateEnableDelegatedAdminAccountPostBodyFormGroup() {
		return new FormGroup<EnableDelegatedAdminAccountPostBodyFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64)]),
			delegatedAdminAccountId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(12), Validators.maxLength(12), Validators.pattern('^\d{12}$')]),
		});

	}

	export interface GetFindingsReportStatusPostBody {

		/** The ID of the report to retrieve the status of. */
		reportId?: string | null;
	}
	export interface GetFindingsReportStatusPostBodyFormProperties {

		/** The ID of the report to retrieve the status of. */
		reportId: FormControl<string | null | undefined>,
	}
	export function CreateGetFindingsReportStatusPostBodyFormGroup() {
		return new FormGroup<GetFindingsReportStatusPostBodyFormProperties>({
			reportId: new FormControl<string | null | undefined>(undefined, [Validators.pattern('\b[a-f0-9]{8}\b-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-\b[a-f0-9]{12}\b')]),
		});

	}

	export interface GetMemberPostBody {

		/**
		 * The Amazon Web Services account ID of the member account to retrieve information on.
		 * Required
		 * Min length: 12
		 * Max length: 12
		 */
		accountId: string;
	}
	export interface GetMemberPostBodyFormProperties {

		/**
		 * The Amazon Web Services account ID of the member account to retrieve information on.
		 * Required
		 * Min length: 12
		 * Max length: 12
		 */
		accountId: FormControl<string | null | undefined>,
	}
	export function CreateGetMemberPostBodyFormGroup() {
		return new FormGroup<GetMemberPostBodyFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(12), Validators.maxLength(12), Validators.pattern('^\d{12}$')]),
		});

	}

	export interface GetSbomExportPostBody {

		/**
		 * The report ID of the SBOM export to get details for.
		 * Required
		 */
		reportId: string;
	}
	export interface GetSbomExportPostBodyFormProperties {

		/**
		 * The report ID of the SBOM export to get details for.
		 * Required
		 */
		reportId: FormControl<string | null | undefined>,
	}
	export function CreateGetSbomExportPostBodyFormGroup() {
		return new FormGroup<GetSbomExportPostBodyFormProperties>({
			reportId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('\b[a-f0-9]{8}\b-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-\b[a-f0-9]{12}\b')]),
		});

	}

	export interface ListAccountPermissionsPostBody {

		/**
		 * The maximum number of results to return in the response.
		 * Minimum: 1
		 * Maximum: 1024
		 */
		maxResults?: number | null;

		/**
		 * A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request to a list action. For subsequent calls, use the <code>NextToken</code> value returned from the previous request to continue listing results after the first page.
		 * Min length: 0
		 * Max length: 1000000
		 */
		nextToken?: string | null;

		/** The service scan type to check permissions for. */
		service?: Service | null;
	}
	export interface ListAccountPermissionsPostBodyFormProperties {

		/**
		 * The maximum number of results to return in the response.
		 * Minimum: 1
		 * Maximum: 1024
		 */
		maxResults: FormControl<number | null | undefined>,

		/**
		 * A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request to a list action. For subsequent calls, use the <code>NextToken</code> value returned from the previous request to continue listing results after the first page.
		 * Min length: 0
		 * Max length: 1000000
		 */
		nextToken: FormControl<string | null | undefined>,

		/** The service scan type to check permissions for. */
		service: FormControl<Service | null | undefined>,
	}
	export function CreateListAccountPermissionsPostBodyFormGroup() {
		return new FormGroup<ListAccountPermissionsPostBodyFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(1024)]),
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(1000000)]),
			service: new FormControl<Service | null | undefined>(undefined),
		});

	}

	export interface ListCoveragePostBody {

		/** A structure that identifies filter criteria for <code>GetCoverageStatistics</code>. */
		filterCriteria?: ListCoveragePostBodyFilterCriteria;

		/**
		 * The maximum number of results to return in the response.
		 * Minimum: 1
		 * Maximum: 200
		 */
		maxResults?: number | null;

		/**
		 * A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request to a list action. For subsequent calls, use the <code>NextToken</code> value returned from the previous request to continue listing results after the first page.
		 * Min length: 0
		 * Max length: 1000000
		 */
		nextToken?: string | null;
	}
	export interface ListCoveragePostBodyFormProperties {

		/**
		 * The maximum number of results to return in the response.
		 * Minimum: 1
		 * Maximum: 200
		 */
		maxResults: FormControl<number | null | undefined>,

		/**
		 * A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request to a list action. For subsequent calls, use the <code>NextToken</code> value returned from the previous request to continue listing results after the first page.
		 * Min length: 0
		 * Max length: 1000000
		 */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListCoveragePostBodyFormGroup() {
		return new FormGroup<ListCoveragePostBodyFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(200)]),
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(1000000)]),
		});

	}

	export interface ListCoveragePostBodyFilterCriteria {
		accountId?: Array<CoverageStringFilter>;
		ec2InstanceTags?: Array<CoverageMapFilter>;
		ecrImageTags?: Array<CoverageStringFilter>;
		ecrRepositoryName?: Array<CoverageStringFilter>;
		lambdaFunctionName?: Array<CoverageStringFilter>;
		lambdaFunctionRuntime?: Array<CoverageStringFilter>;
		lambdaFunctionTags?: Array<CoverageMapFilter>;
		lastScannedAt?: Array<CoverageDateFilter>;
		resourceId?: Array<CoverageStringFilter>;
		resourceType?: Array<CoverageStringFilter>;
		scanStatusCode?: Array<CoverageStringFilter>;
		scanStatusReason?: Array<CoverageStringFilter>;
		scanType?: Array<CoverageStringFilter>;
	}
	export interface ListCoveragePostBodyFilterCriteriaFormProperties {
	}
	export function CreateListCoveragePostBodyFilterCriteriaFormGroup() {
		return new FormGroup<ListCoveragePostBodyFilterCriteriaFormProperties>({
		});

	}

	export interface ListCoverageStatisticsPostBody {

		/** A structure that identifies filter criteria for <code>GetCoverageStatistics</code>. */
		filterCriteria?: ListCoverageStatisticsPostBodyFilterCriteria;

		/** The value to group the results by. */
		groupBy?: GroupKey | null;

		/**
		 * A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request to a list action. For subsequent calls, use the <code>NextToken</code> value returned from the previous request to continue listing results after the first page.
		 * Min length: 0
		 * Max length: 1000000
		 */
		nextToken?: string | null;
	}
	export interface ListCoverageStatisticsPostBodyFormProperties {

		/** The value to group the results by. */
		groupBy: FormControl<GroupKey | null | undefined>,

		/**
		 * A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request to a list action. For subsequent calls, use the <code>NextToken</code> value returned from the previous request to continue listing results after the first page.
		 * Min length: 0
		 * Max length: 1000000
		 */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListCoverageStatisticsPostBodyFormGroup() {
		return new FormGroup<ListCoverageStatisticsPostBodyFormProperties>({
			groupBy: new FormControl<GroupKey | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(1000000)]),
		});

	}

	export interface ListCoverageStatisticsPostBodyFilterCriteria {
		accountId?: Array<CoverageStringFilter>;
		ec2InstanceTags?: Array<CoverageMapFilter>;
		ecrImageTags?: Array<CoverageStringFilter>;
		ecrRepositoryName?: Array<CoverageStringFilter>;
		lambdaFunctionName?: Array<CoverageStringFilter>;
		lambdaFunctionRuntime?: Array<CoverageStringFilter>;
		lambdaFunctionTags?: Array<CoverageMapFilter>;
		lastScannedAt?: Array<CoverageDateFilter>;
		resourceId?: Array<CoverageStringFilter>;
		resourceType?: Array<CoverageStringFilter>;
		scanStatusCode?: Array<CoverageStringFilter>;
		scanStatusReason?: Array<CoverageStringFilter>;
		scanType?: Array<CoverageStringFilter>;
	}
	export interface ListCoverageStatisticsPostBodyFilterCriteriaFormProperties {
	}
	export function CreateListCoverageStatisticsPostBodyFilterCriteriaFormGroup() {
		return new FormGroup<ListCoverageStatisticsPostBodyFilterCriteriaFormProperties>({
		});

	}

	export interface ListDelegatedAdminAccountsPostBody {

		/**
		 * The maximum number of results to return in the response.
		 * Minimum: 1
		 * Maximum: 5
		 */
		maxResults?: number | null;

		/**
		 * A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request to a list action. For subsequent calls, use the <code>NextToken</code> value returned from the previous request to continue listing results after the first page.
		 * Min length: 0
		 * Max length: 1000000
		 */
		nextToken?: string | null;
	}
	export interface ListDelegatedAdminAccountsPostBodyFormProperties {

		/**
		 * The maximum number of results to return in the response.
		 * Minimum: 1
		 * Maximum: 5
		 */
		maxResults: FormControl<number | null | undefined>,

		/**
		 * A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request to a list action. For subsequent calls, use the <code>NextToken</code> value returned from the previous request to continue listing results after the first page.
		 * Min length: 0
		 * Max length: 1000000
		 */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListDelegatedAdminAccountsPostBodyFormGroup() {
		return new FormGroup<ListDelegatedAdminAccountsPostBodyFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(5)]),
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(1000000)]),
		});

	}

	export interface ListFiltersPostBody {

		/** The action the filter applies to matched findings. */
		action?: FilterAction | null;

		/** The Amazon resource number (ARN) of the filter. */
		arns?: Array<string>;

		/**
		 * The maximum number of results to return in the response.
		 * Minimum: 1
		 * Maximum: 100
		 */
		maxResults?: number | null;

		/**
		 * A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request to a list action. For subsequent calls, use the <code>NextToken</code> value returned from the previous request to continue listing results after the first page.
		 * Min length: 0
		 * Max length: 1000000
		 */
		nextToken?: string | null;
	}
	export interface ListFiltersPostBodyFormProperties {

		/** The action the filter applies to matched findings. */
		action: FormControl<FilterAction | null | undefined>,

		/**
		 * The maximum number of results to return in the response.
		 * Minimum: 1
		 * Maximum: 100
		 */
		maxResults: FormControl<number | null | undefined>,

		/**
		 * A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request to a list action. For subsequent calls, use the <code>NextToken</code> value returned from the previous request to continue listing results after the first page.
		 * Min length: 0
		 * Max length: 1000000
		 */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListFiltersPostBodyFormGroup() {
		return new FormGroup<ListFiltersPostBodyFormProperties>({
			action: new FormControl<FilterAction | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(1000000)]),
		});

	}

	export interface ListFindingAggregationsPostBody {

		/**
		 * The Amazon Web Services account IDs to retrieve finding aggregation data for.
		 * Minimum items: 1
		 * Maximum items: 10
		 */
		accountIds?: Array<StringFilter>;

		/** Contains details about an aggregation request. */
		aggregationRequest?: ListFindingAggregationsPostBodyAggregationRequest;

		/**
		 * The type of the aggregation request.
		 * Required
		 */
		aggregationType: AggregationType;

		/**
		 * The maximum number of results to return in the response.
		 * Minimum: 1
		 * Maximum: 100
		 */
		maxResults?: number | null;

		/**
		 * A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request to a list action. For subsequent calls, use the <code>NextToken</code> value returned from the previous request to continue listing results after the first page.
		 * Min length: 0
		 * Max length: 1000000
		 */
		nextToken?: string | null;
	}
	export interface ListFindingAggregationsPostBodyFormProperties {

		/**
		 * The type of the aggregation request.
		 * Required
		 */
		aggregationType: FormControl<AggregationType | null | undefined>,

		/**
		 * The maximum number of results to return in the response.
		 * Minimum: 1
		 * Maximum: 100
		 */
		maxResults: FormControl<number | null | undefined>,

		/**
		 * A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request to a list action. For subsequent calls, use the <code>NextToken</code> value returned from the previous request to continue listing results after the first page.
		 * Min length: 0
		 * Max length: 1000000
		 */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListFindingAggregationsPostBodyFormGroup() {
		return new FormGroup<ListFindingAggregationsPostBodyFormProperties>({
			aggregationType: new FormControl<AggregationType | null | undefined>(undefined, [Validators.required]),
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(1000000)]),
		});

	}

	export interface ListFindingAggregationsPostBodyAggregationRequest {
		accountAggregation?: AccountAggregation;
		amiAggregation?: AmiAggregation;
		awsEcrContainerAggregation?: AwsEcrContainerAggregation;
		ec2InstanceAggregation?: Ec2InstanceAggregation;
		findingTypeAggregation?: FindingTypeAggregation;
		imageLayerAggregation?: ImageLayerAggregation;
		lambdaFunctionAggregation?: LambdaFunctionAggregation;
		lambdaLayerAggregation?: LambdaLayerAggregation;
		packageAggregation?: PackageAggregation;
		repositoryAggregation?: RepositoryAggregation;
		titleAggregation?: TitleAggregation;
	}
	export interface ListFindingAggregationsPostBodyAggregationRequestFormProperties {
	}
	export function CreateListFindingAggregationsPostBodyAggregationRequestFormGroup() {
		return new FormGroup<ListFindingAggregationsPostBodyAggregationRequestFormProperties>({
		});

	}

	export interface ListFindingsPostBody {

		/** Details on the criteria used to define the filter. */
		filterCriteria?: ListFindingsPostBodyFilterCriteria;

		/**
		 * The maximum number of results to return in the response.
		 * Minimum: 1
		 * Maximum: 100
		 */
		maxResults?: number | null;

		/**
		 * A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request to a list action. For subsequent calls, use the <code>NextToken</code> value returned from the previous request to continue listing results after the first page.
		 * Min length: 0
		 * Max length: 1000000
		 */
		nextToken?: string | null;

		/** Details about the criteria used to sort finding results. */
		sortCriteria?: ListFindingsPostBodySortCriteria;
	}
	export interface ListFindingsPostBodyFormProperties {

		/**
		 * The maximum number of results to return in the response.
		 * Minimum: 1
		 * Maximum: 100
		 */
		maxResults: FormControl<number | null | undefined>,

		/**
		 * A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request to a list action. For subsequent calls, use the <code>NextToken</code> value returned from the previous request to continue listing results after the first page.
		 * Min length: 0
		 * Max length: 1000000
		 */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListFindingsPostBodyFormGroup() {
		return new FormGroup<ListFindingsPostBodyFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(1000000)]),
		});

	}

	export interface ListFindingsPostBodyFilterCriteria {
		awsAccountId?: Array<StringFilter>;
		codeVulnerabilityDetectorName?: Array<StringFilter>;
		codeVulnerabilityDetectorTags?: Array<StringFilter>;
		codeVulnerabilityFilePath?: Array<StringFilter>;
		componentId?: Array<StringFilter>;
		componentType?: Array<StringFilter>;
		ec2InstanceImageId?: Array<StringFilter>;
		ec2InstanceSubnetId?: Array<StringFilter>;
		ec2InstanceVpcId?: Array<StringFilter>;
		ecrImageArchitecture?: Array<StringFilter>;
		ecrImageHash?: Array<StringFilter>;
		ecrImagePushedAt?: Array<DateFilter>;
		ecrImageRegistry?: Array<StringFilter>;
		ecrImageRepositoryName?: Array<StringFilter>;
		ecrImageTags?: Array<StringFilter>;
		epssScore?: Array<NumberFilter>;
		exploitAvailable?: Array<StringFilter>;
		findingArn?: Array<StringFilter>;
		findingStatus?: Array<StringFilter>;
		findingType?: Array<StringFilter>;
		firstObservedAt?: Array<DateFilter>;
		fixAvailable?: Array<StringFilter>;
		inspectorScore?: Array<NumberFilter>;
		lambdaFunctionExecutionRoleArn?: Array<StringFilter>;
		lambdaFunctionLastModifiedAt?: Array<DateFilter>;
		lambdaFunctionLayers?: Array<StringFilter>;
		lambdaFunctionName?: Array<StringFilter>;
		lambdaFunctionRuntime?: Array<StringFilter>;
		lastObservedAt?: Array<DateFilter>;
		networkProtocol?: Array<StringFilter>;
		portRange?: Array<PortRangeFilter>;
		relatedVulnerabilities?: Array<StringFilter>;
		resourceId?: Array<StringFilter>;
		resourceTags?: Array<MapFilter>;
		resourceType?: Array<StringFilter>;
		severity?: Array<StringFilter>;
		title?: Array<StringFilter>;
		updatedAt?: Array<DateFilter>;
		vendorSeverity?: Array<StringFilter>;
		vulnerabilityId?: Array<StringFilter>;
		vulnerabilitySource?: Array<StringFilter>;
		vulnerablePackages?: Array<PackageFilter>;
	}
	export interface ListFindingsPostBodyFilterCriteriaFormProperties {
	}
	export function CreateListFindingsPostBodyFilterCriteriaFormGroup() {
		return new FormGroup<ListFindingsPostBodyFilterCriteriaFormProperties>({
		});

	}

	export interface ListFindingsPostBodySortCriteria {
		field?: SortField;
		sortOrder?: SortOrder;
	}
	export interface ListFindingsPostBodySortCriteriaFormProperties {
		field: FormControl<SortField | null | undefined>,
		sortOrder: FormControl<SortOrder | null | undefined>,
	}
	export function CreateListFindingsPostBodySortCriteriaFormGroup() {
		return new FormGroup<ListFindingsPostBodySortCriteriaFormProperties>({
			field: new FormControl<SortField | null | undefined>(undefined),
			sortOrder: new FormControl<SortOrder | null | undefined>(undefined),
		});

	}

	export interface ListMembersPostBody {

		/**
		 * The maximum number of results to return in the response.
		 * Minimum: 1
		 * Maximum: 50
		 */
		maxResults?: number | null;

		/**
		 * A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request to a list action. For subsequent calls, use the <code>NextToken</code> value returned from the previous request to continue listing results after the first page.
		 * Min length: 0
		 * Max length: 1000000
		 */
		nextToken?: string | null;

		/** Specifies whether to list only currently associated members if <code>True</code> or to list all members within the organization if <code>False</code>. */
		onlyAssociated?: boolean | null;
	}
	export interface ListMembersPostBodyFormProperties {

		/**
		 * The maximum number of results to return in the response.
		 * Minimum: 1
		 * Maximum: 50
		 */
		maxResults: FormControl<number | null | undefined>,

		/**
		 * A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request to a list action. For subsequent calls, use the <code>NextToken</code> value returned from the previous request to continue listing results after the first page.
		 * Min length: 0
		 * Max length: 1000000
		 */
		nextToken: FormControl<string | null | undefined>,

		/** Specifies whether to list only currently associated members if <code>True</code> or to list all members within the organization if <code>False</code>. */
		onlyAssociated: FormControl<boolean | null | undefined>,
	}
	export function CreateListMembersPostBodyFormGroup() {
		return new FormGroup<ListMembersPostBodyFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(50)]),
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(1000000)]),
			onlyAssociated: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface TagResourcePostBody {

		/**
		 * The tags to be added to a resource.
		 * Required
		 */
		tags: {[id: string]: string };
	}
	export interface TagResourcePostBodyFormProperties {

		/**
		 * The tags to be added to a resource.
		 * Required
		 */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateTagResourcePostBodyFormGroup() {
		return new FormGroup<TagResourcePostBodyFormProperties>({
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListUsageTotalsPostBody {

		/**
		 * The Amazon Web Services account IDs to retrieve usage totals for.
		 * Minimum items: 1
		 * Maximum items: 7000
		 */
		accountIds?: Array<string>;

		/**
		 * The maximum number of results to return in the response.
		 * Minimum: 1
		 * Maximum: 500
		 */
		maxResults?: number | null;

		/**
		 * A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request to a list action. For subsequent calls, use the <code>NextToken</code> value returned from the previous request to continue listing results after the first page.
		 * Min length: 1
		 */
		nextToken?: string | null;
	}
	export interface ListUsageTotalsPostBodyFormProperties {

		/**
		 * The maximum number of results to return in the response.
		 * Minimum: 1
		 * Maximum: 500
		 */
		maxResults: FormControl<number | null | undefined>,

		/**
		 * A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request to a list action. For subsequent calls, use the <code>NextToken</code> value returned from the previous request to continue listing results after the first page.
		 * Min length: 1
		 */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListUsageTotalsPostBodyFormGroup() {
		return new FormGroup<ListUsageTotalsPostBodyFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(500)]),
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
		});

	}

	export interface ResetEncryptionKeyPutBody {

		/**
		 * The resource type the key encrypts.
		 * Required
		 */
		resourceType: CoverageResourceType;

		/**
		 * The scan type the key encrypts.
		 * Required
		 */
		scanType: ScanType;
	}
	export interface ResetEncryptionKeyPutBodyFormProperties {

		/**
		 * The resource type the key encrypts.
		 * Required
		 */
		resourceType: FormControl<CoverageResourceType | null | undefined>,

		/**
		 * The scan type the key encrypts.
		 * Required
		 */
		scanType: FormControl<ScanType | null | undefined>,
	}
	export function CreateResetEncryptionKeyPutBodyFormGroup() {
		return new FormGroup<ResetEncryptionKeyPutBodyFormProperties>({
			resourceType: new FormControl<CoverageResourceType | null | undefined>(undefined, [Validators.required]),
			scanType: new FormControl<ScanType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SearchVulnerabilitiesPostBody {

		/**
		 * Details on the criteria used to define the filter for a vulnerability search.
		 * Required
		 */
		filterCriteria: SearchVulnerabilitiesPostBodyFilterCriteria;

		/**
		 * A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request to a list action. For subsequent calls, use the <code>NextToken</code> value returned from the previous request to continue listing results after the first page.
		 * Min length: 0
		 * Max length: 1000000
		 */
		nextToken?: string | null;
	}
	export interface SearchVulnerabilitiesPostBodyFormProperties {

		/**
		 * A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request to a list action. For subsequent calls, use the <code>NextToken</code> value returned from the previous request to continue listing results after the first page.
		 * Min length: 0
		 * Max length: 1000000
		 */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateSearchVulnerabilitiesPostBodyFormGroup() {
		return new FormGroup<SearchVulnerabilitiesPostBodyFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(1000000)]),
		});

	}

	export interface SearchVulnerabilitiesPostBodyFilterCriteria {
		vulnerabilityIds?: Array<string>;
	}
	export interface SearchVulnerabilitiesPostBodyFilterCriteriaFormProperties {
	}
	export function CreateSearchVulnerabilitiesPostBodyFilterCriteriaFormGroup() {
		return new FormGroup<SearchVulnerabilitiesPostBodyFilterCriteriaFormProperties>({
		});

	}

	export interface UpdateConfigurationPostBody {

		/**
		 * Details about the ECR automated re-scan duration setting for your environment.
		 * Required
		 */
		ecrConfiguration: UpdateConfigurationPostBodyEcrConfiguration;
	}
	export interface UpdateConfigurationPostBodyFormProperties {
	}
	export function CreateUpdateConfigurationPostBodyFormGroup() {
		return new FormGroup<UpdateConfigurationPostBodyFormProperties>({
		});

	}

	export interface UpdateConfigurationPostBodyEcrConfiguration {
		rescanDuration?: EcrRescanDuration;
	}
	export interface UpdateConfigurationPostBodyEcrConfigurationFormProperties {
		rescanDuration: FormControl<EcrRescanDuration | null | undefined>,
	}
	export function CreateUpdateConfigurationPostBodyEcrConfigurationFormGroup() {
		return new FormGroup<UpdateConfigurationPostBodyEcrConfigurationFormProperties>({
			rescanDuration: new FormControl<EcrRescanDuration | null | undefined>(undefined),
		});

	}

	export interface UpdateEc2DeepInspectionConfigurationPostBody {

		/** Specify <code>TRUE</code> to activate Amazon Inspector deep inspection in your account, or <code>FALSE</code> to deactivate. Member accounts in an organization cannot deactivate deep inspection, instead the delegated administrator for the organization can deactivate a member account using <a href="https://docs.aws.amazon.com/inspector/v2/APIReference/API_BatchUpdateMemberEc2DeepInspectionStatus.html">BatchUpdateMemberEc2DeepInspectionStatus</a>. */
		activateDeepInspection?: boolean | null;

		/**
		 * The Amazon Inspector deep inspection custom paths you are adding for your account.
		 * Minimum items: 0
		 * Maximum items: 5
		 */
		packagePaths?: Array<string>;
	}
	export interface UpdateEc2DeepInspectionConfigurationPostBodyFormProperties {

		/** Specify <code>TRUE</code> to activate Amazon Inspector deep inspection in your account, or <code>FALSE</code> to deactivate. Member accounts in an organization cannot deactivate deep inspection, instead the delegated administrator for the organization can deactivate a member account using <a href="https://docs.aws.amazon.com/inspector/v2/APIReference/API_BatchUpdateMemberEc2DeepInspectionStatus.html">BatchUpdateMemberEc2DeepInspectionStatus</a>. */
		activateDeepInspection: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateEc2DeepInspectionConfigurationPostBodyFormGroup() {
		return new FormGroup<UpdateEc2DeepInspectionConfigurationPostBodyFormProperties>({
			activateDeepInspection: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UpdateEncryptionKeyPutBody {

		/**
		 * A KMS key ID for the encryption key.
		 * Required
		 */
		kmsKeyId: string;

		/**
		 * The resource type for the encryption key.
		 * Required
		 */
		resourceType: CoverageResourceType;

		/**
		 * The scan type for the encryption key.
		 * Required
		 */
		scanType: ScanType;
	}
	export interface UpdateEncryptionKeyPutBodyFormProperties {

		/**
		 * A KMS key ID for the encryption key.
		 * Required
		 */
		kmsKeyId: FormControl<string | null | undefined>,

		/**
		 * The resource type for the encryption key.
		 * Required
		 */
		resourceType: FormControl<CoverageResourceType | null | undefined>,

		/**
		 * The scan type for the encryption key.
		 * Required
		 */
		scanType: FormControl<ScanType | null | undefined>,
	}
	export function CreateUpdateEncryptionKeyPutBodyFormGroup() {
		return new FormGroup<UpdateEncryptionKeyPutBodyFormProperties>({
			kmsKeyId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^arn:aws(-(us-gov|cn))?:kms:([a-z0-9][-.a-z0-9]{0,62})?:[0-9]{12}?:key/(([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})|(mrk-[0-9a-zA-Z]{32}))$')]),
			resourceType: new FormControl<CoverageResourceType | null | undefined>(undefined, [Validators.required]),
			scanType: new FormControl<ScanType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateFilterPostBody {

		/** Specifies the action that is to be applied to the findings that match the filter. */
		action?: FilterAction | null;

		/**
		 * A description of the filter.
		 * Min length: 1
		 * Max length: 512
		 */
		description?: string | null;

		/**
		 * The Amazon Resource Number (ARN) of the filter to update.
		 * Required
		 * Min length: 1
		 * Max length: 128
		 */
		filterArn: string;

		/** Details on the criteria used to define the filter. */
		filterCriteria?: UpdateFilterPostBodyFilterCriteria;

		/**
		 * The name of the filter.
		 * Min length: 1
		 * Max length: 128
		 */
		name?: string | null;

		/**
		 * The reason the filter was updated.
		 * Min length: 1
		 * Max length: 512
		 */
		reason?: string | null;
	}
	export interface UpdateFilterPostBodyFormProperties {

		/** Specifies the action that is to be applied to the findings that match the filter. */
		action: FormControl<FilterAction | null | undefined>,

		/**
		 * A description of the filter.
		 * Min length: 1
		 * Max length: 512
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * The Amazon Resource Number (ARN) of the filter to update.
		 * Required
		 * Min length: 1
		 * Max length: 128
		 */
		filterArn: FormControl<string | null | undefined>,

		/**
		 * The name of the filter.
		 * Min length: 1
		 * Max length: 128
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The reason the filter was updated.
		 * Min length: 1
		 * Max length: 512
		 */
		reason: FormControl<string | null | undefined>,
	}
	export function CreateUpdateFilterPostBodyFormGroup() {
		return new FormGroup<UpdateFilterPostBodyFormProperties>({
			action: new FormControl<FilterAction | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(512)]),
			filterArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128)]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128)]),
			reason: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(512)]),
		});

	}

	export interface UpdateFilterPostBodyFilterCriteria {
		awsAccountId?: Array<StringFilter>;
		codeVulnerabilityDetectorName?: Array<StringFilter>;
		codeVulnerabilityDetectorTags?: Array<StringFilter>;
		codeVulnerabilityFilePath?: Array<StringFilter>;
		componentId?: Array<StringFilter>;
		componentType?: Array<StringFilter>;
		ec2InstanceImageId?: Array<StringFilter>;
		ec2InstanceSubnetId?: Array<StringFilter>;
		ec2InstanceVpcId?: Array<StringFilter>;
		ecrImageArchitecture?: Array<StringFilter>;
		ecrImageHash?: Array<StringFilter>;
		ecrImagePushedAt?: Array<DateFilter>;
		ecrImageRegistry?: Array<StringFilter>;
		ecrImageRepositoryName?: Array<StringFilter>;
		ecrImageTags?: Array<StringFilter>;
		epssScore?: Array<NumberFilter>;
		exploitAvailable?: Array<StringFilter>;
		findingArn?: Array<StringFilter>;
		findingStatus?: Array<StringFilter>;
		findingType?: Array<StringFilter>;
		firstObservedAt?: Array<DateFilter>;
		fixAvailable?: Array<StringFilter>;
		inspectorScore?: Array<NumberFilter>;
		lambdaFunctionExecutionRoleArn?: Array<StringFilter>;
		lambdaFunctionLastModifiedAt?: Array<DateFilter>;
		lambdaFunctionLayers?: Array<StringFilter>;
		lambdaFunctionName?: Array<StringFilter>;
		lambdaFunctionRuntime?: Array<StringFilter>;
		lastObservedAt?: Array<DateFilter>;
		networkProtocol?: Array<StringFilter>;
		portRange?: Array<PortRangeFilter>;
		relatedVulnerabilities?: Array<StringFilter>;
		resourceId?: Array<StringFilter>;
		resourceTags?: Array<MapFilter>;
		resourceType?: Array<StringFilter>;
		severity?: Array<StringFilter>;
		title?: Array<StringFilter>;
		updatedAt?: Array<DateFilter>;
		vendorSeverity?: Array<StringFilter>;
		vulnerabilityId?: Array<StringFilter>;
		vulnerabilitySource?: Array<StringFilter>;
		vulnerablePackages?: Array<PackageFilter>;
	}
	export interface UpdateFilterPostBodyFilterCriteriaFormProperties {
	}
	export function CreateUpdateFilterPostBodyFilterCriteriaFormGroup() {
		return new FormGroup<UpdateFilterPostBodyFilterCriteriaFormProperties>({
		});

	}

	export interface UpdateOrgEc2DeepInspectionConfigurationPostBody {

		/**
		 * The Amazon Inspector deep inspection custom paths you are adding for your organization.
		 * Required
		 * Minimum items: 0
		 * Maximum items: 5
		 */
		orgPackagePaths: Array<string>;
	}
	export interface UpdateOrgEc2DeepInspectionConfigurationPostBodyFormProperties {
	}
	export function CreateUpdateOrgEc2DeepInspectionConfigurationPostBodyFormGroup() {
		return new FormGroup<UpdateOrgEc2DeepInspectionConfigurationPostBodyFormProperties>({
		});

	}

	export interface UpdateOrganizationConfigurationPostBody {

		/**
		 * Represents which scan types are automatically enabled for new members of your Amazon Inspector organization.
		 * Required
		 */
		autoEnable: UpdateOrganizationConfigurationPostBodyAutoEnable;
	}
	export interface UpdateOrganizationConfigurationPostBodyFormProperties {
	}
	export function CreateUpdateOrganizationConfigurationPostBodyFormGroup() {
		return new FormGroup<UpdateOrganizationConfigurationPostBodyFormProperties>({
		});

	}

	export interface UpdateOrganizationConfigurationPostBodyAutoEnable {
		ec2?: boolean | null;
		ecr?: boolean | null;
		lambda?: boolean | null;
		lambdaCode?: boolean | null;
	}
	export interface UpdateOrganizationConfigurationPostBodyAutoEnableFormProperties {
		ec2: FormControl<boolean | null | undefined>,
		ecr: FormControl<boolean | null | undefined>,
		lambda: FormControl<boolean | null | undefined>,
		lambdaCode: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateOrganizationConfigurationPostBodyAutoEnableFormGroup() {
		return new FormGroup<UpdateOrganizationConfigurationPostBodyAutoEnableFormProperties>({
			ec2: new FormControl<boolean | null | undefined>(undefined),
			ecr: new FormControl<boolean | null | undefined>(undefined),
			lambda: new FormControl<boolean | null | undefined>(undefined),
			lambdaCode: new FormControl<boolean | null | undefined>(undefined),
		});

	}

}

