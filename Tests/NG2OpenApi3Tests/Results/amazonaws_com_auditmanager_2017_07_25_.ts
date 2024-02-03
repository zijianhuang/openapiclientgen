import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface AssociateAssessmentReportEvidenceFolderResponse {
	}
	export interface AssociateAssessmentReportEvidenceFolderResponseFormProperties {
	}
	export function CreateAssociateAssessmentReportEvidenceFolderResponseFormGroup() {
		return new FormGroup<AssociateAssessmentReportEvidenceFolderResponseFormProperties>({
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

	export interface InternalServerException {
	}
	export interface InternalServerExceptionFormProperties {
	}
	export function CreateInternalServerExceptionFormGroup() {
		return new FormGroup<InternalServerExceptionFormProperties>({
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

	export interface BatchAssociateAssessmentReportEvidenceResponse {
		evidenceIds?: Array<string>;
		errors?: Array<AssessmentReportEvidenceError>;
	}
	export interface BatchAssociateAssessmentReportEvidenceResponseFormProperties {
	}
	export function CreateBatchAssociateAssessmentReportEvidenceResponseFormGroup() {
		return new FormGroup<BatchAssociateAssessmentReportEvidenceResponseFormProperties>({
		});

	}


	/**  An error entity for assessment report evidence errors. This is used to provide more meaningful errors than a simple string message.  */
	export interface AssessmentReportEvidenceError {
		evidenceId?: string;
		errorCode?: string;
		errorMessage?: string;
	}

	/**  An error entity for assessment report evidence errors. This is used to provide more meaningful errors than a simple string message.  */
	export interface AssessmentReportEvidenceErrorFormProperties {
		evidenceId: FormControl<string | null | undefined>,
		errorCode: FormControl<string | null | undefined>,
		errorMessage: FormControl<string | null | undefined>,
	}
	export function CreateAssessmentReportEvidenceErrorFormGroup() {
		return new FormGroup<AssessmentReportEvidenceErrorFormProperties>({
			evidenceId: new FormControl<string | null | undefined>(undefined),
			errorCode: new FormControl<string | null | undefined>(undefined),
			errorMessage: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BatchCreateDelegationByAssessmentResponse {
		delegations?: Array<Delegation>;
		errors?: Array<BatchCreateDelegationByAssessmentError>;
	}
	export interface BatchCreateDelegationByAssessmentResponseFormProperties {
	}
	export function CreateBatchCreateDelegationByAssessmentResponseFormGroup() {
		return new FormGroup<BatchCreateDelegationByAssessmentResponseFormProperties>({
		});

	}


	/**  The assignment of a control set to a delegate for review.  */
	export interface Delegation {
		id?: string;
		assessmentName?: string;
		assessmentId?: string;
		status?: DelegationStatus;
		roleArn?: string;
		roleType?: RoleType;
		creationTime?: Date;
		lastUpdated?: Date;
		controlSetId?: string;
		comment?: string;
		createdBy?: string;
	}

	/**  The assignment of a control set to a delegate for review.  */
	export interface DelegationFormProperties {
		id: FormControl<string | null | undefined>,
		assessmentName: FormControl<string | null | undefined>,
		assessmentId: FormControl<string | null | undefined>,
		status: FormControl<DelegationStatus | null | undefined>,
		roleArn: FormControl<string | null | undefined>,
		roleType: FormControl<RoleType | null | undefined>,
		creationTime: FormControl<Date | null | undefined>,
		lastUpdated: FormControl<Date | null | undefined>,
		controlSetId: FormControl<string | null | undefined>,
		comment: FormControl<string | null | undefined>,
		createdBy: FormControl<string | null | undefined>,
	}
	export function CreateDelegationFormGroup() {
		return new FormGroup<DelegationFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			assessmentName: new FormControl<string | null | undefined>(undefined),
			assessmentId: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<DelegationStatus | null | undefined>(undefined),
			roleArn: new FormControl<string | null | undefined>(undefined),
			roleType: new FormControl<RoleType | null | undefined>(undefined),
			creationTime: new FormControl<Date | null | undefined>(undefined),
			lastUpdated: new FormControl<Date | null | undefined>(undefined),
			controlSetId: new FormControl<string | null | undefined>(undefined),
			comment: new FormControl<string | null | undefined>(undefined),
			createdBy: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DelegationStatus { IN_PROGRESS = 'IN_PROGRESS', UNDER_REVIEW = 'UNDER_REVIEW', COMPLETE = 'COMPLETE' }

	export enum RoleType { PROCESS_OWNER = 'PROCESS_OWNER', RESOURCE_OWNER = 'RESOURCE_OWNER' }


	/**  An error entity for the <code>BatchCreateDelegationByAssessment</code> API. This is used to provide more meaningful errors than a simple string message.  */
	export interface BatchCreateDelegationByAssessmentError {
		createDelegationRequest?: CreateDelegationRequest;
		errorCode?: string;
		errorMessage?: string;
	}

	/**  An error entity for the <code>BatchCreateDelegationByAssessment</code> API. This is used to provide more meaningful errors than a simple string message.  */
	export interface BatchCreateDelegationByAssessmentErrorFormProperties {
		errorCode: FormControl<string | null | undefined>,
		errorMessage: FormControl<string | null | undefined>,
	}
	export function CreateBatchCreateDelegationByAssessmentErrorFormGroup() {
		return new FormGroup<BatchCreateDelegationByAssessmentErrorFormProperties>({
			errorCode: new FormControl<string | null | undefined>(undefined),
			errorMessage: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  A collection of attributes that's used to create a delegation for an assessment in Audit Manager.  */
	export interface CreateDelegationRequest {
		comment?: string;
		controlSetId?: string;
		roleArn?: string;
		roleType?: RoleType;
	}

	/**  A collection of attributes that's used to create a delegation for an assessment in Audit Manager.  */
	export interface CreateDelegationRequestFormProperties {
		comment: FormControl<string | null | undefined>,
		controlSetId: FormControl<string | null | undefined>,
		roleArn: FormControl<string | null | undefined>,
		roleType: FormControl<RoleType | null | undefined>,
	}
	export function CreateCreateDelegationRequestFormGroup() {
		return new FormGroup<CreateDelegationRequestFormProperties>({
			comment: new FormControl<string | null | undefined>(undefined),
			controlSetId: new FormControl<string | null | undefined>(undefined),
			roleArn: new FormControl<string | null | undefined>(undefined),
			roleType: new FormControl<RoleType | null | undefined>(undefined),
		});

	}

	export interface BatchDeleteDelegationByAssessmentResponse {
		errors?: Array<BatchDeleteDelegationByAssessmentError>;
	}
	export interface BatchDeleteDelegationByAssessmentResponseFormProperties {
	}
	export function CreateBatchDeleteDelegationByAssessmentResponseFormGroup() {
		return new FormGroup<BatchDeleteDelegationByAssessmentResponseFormProperties>({
		});

	}


	/**  An error entity for the <code>BatchDeleteDelegationByAssessment</code> API. This is used to provide more meaningful errors than a simple string message.  */
	export interface BatchDeleteDelegationByAssessmentError {
		delegationId?: string;
		errorCode?: string;
		errorMessage?: string;
	}

	/**  An error entity for the <code>BatchDeleteDelegationByAssessment</code> API. This is used to provide more meaningful errors than a simple string message.  */
	export interface BatchDeleteDelegationByAssessmentErrorFormProperties {
		delegationId: FormControl<string | null | undefined>,
		errorCode: FormControl<string | null | undefined>,
		errorMessage: FormControl<string | null | undefined>,
	}
	export function CreateBatchDeleteDelegationByAssessmentErrorFormGroup() {
		return new FormGroup<BatchDeleteDelegationByAssessmentErrorFormProperties>({
			delegationId: new FormControl<string | null | undefined>(undefined),
			errorCode: new FormControl<string | null | undefined>(undefined),
			errorMessage: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BatchDisassociateAssessmentReportEvidenceResponse {
		evidenceIds?: Array<string>;
		errors?: Array<AssessmentReportEvidenceError>;
	}
	export interface BatchDisassociateAssessmentReportEvidenceResponseFormProperties {
	}
	export function CreateBatchDisassociateAssessmentReportEvidenceResponseFormGroup() {
		return new FormGroup<BatchDisassociateAssessmentReportEvidenceResponseFormProperties>({
		});

	}

	export interface BatchImportEvidenceToAssessmentControlResponse {
		errors?: Array<BatchImportEvidenceToAssessmentControlError>;
	}
	export interface BatchImportEvidenceToAssessmentControlResponseFormProperties {
	}
	export function CreateBatchImportEvidenceToAssessmentControlResponseFormGroup() {
		return new FormGroup<BatchImportEvidenceToAssessmentControlResponseFormProperties>({
		});

	}


	/**  An error entity for the <code>BatchImportEvidenceToAssessmentControl</code> API. This is used to provide more meaningful errors than a simple string message.  */
	export interface BatchImportEvidenceToAssessmentControlError {
		manualEvidence?: ManualEvidence;
		errorCode?: string;
		errorMessage?: string;
	}

	/**  An error entity for the <code>BatchImportEvidenceToAssessmentControl</code> API. This is used to provide more meaningful errors than a simple string message.  */
	export interface BatchImportEvidenceToAssessmentControlErrorFormProperties {
		errorCode: FormControl<string | null | undefined>,
		errorMessage: FormControl<string | null | undefined>,
	}
	export function CreateBatchImportEvidenceToAssessmentControlErrorFormGroup() {
		return new FormGroup<BatchImportEvidenceToAssessmentControlErrorFormProperties>({
			errorCode: new FormControl<string | null | undefined>(undefined),
			errorMessage: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  Evidence that's manually added to a control in Audit Manager. <code>manualEvidence</code> can be one of the following: <code>evidenceFileName</code>, <code>s3ResourcePath</code>, or <code>textResponse</code>. */
	export interface ManualEvidence {
		s3ResourcePath?: string;
		textResponse?: string;
		evidenceFileName?: string;
	}

	/**  Evidence that's manually added to a control in Audit Manager. <code>manualEvidence</code> can be one of the following: <code>evidenceFileName</code>, <code>s3ResourcePath</code>, or <code>textResponse</code>. */
	export interface ManualEvidenceFormProperties {
		s3ResourcePath: FormControl<string | null | undefined>,
		textResponse: FormControl<string | null | undefined>,
		evidenceFileName: FormControl<string | null | undefined>,
	}
	export function CreateManualEvidenceFormGroup() {
		return new FormGroup<ManualEvidenceFormProperties>({
			s3ResourcePath: new FormControl<string | null | undefined>(undefined),
			textResponse: new FormControl<string | null | undefined>(undefined),
			evidenceFileName: new FormControl<string | null | undefined>(undefined),
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

	export interface CreateAssessmentResponse {

		/** An entity that defines the scope of audit evidence collected by Audit Manager. An Audit Manager assessment is an implementation of an Audit Manager framework. */
		assessment?: Assessment;
	}
	export interface CreateAssessmentResponseFormProperties {
	}
	export function CreateCreateAssessmentResponseFormGroup() {
		return new FormGroup<CreateAssessmentResponseFormProperties>({
		});

	}


	/**  An entity that defines the scope of audit evidence collected by Audit Manager. An Audit Manager assessment is an implementation of an Audit Manager framework.  */
	export interface Assessment {
		arn?: string;
		awsAccount?: AWSAccount;
		metadata?: AssessmentMetadata;
		framework?: AssessmentFramework;
		tags?: TagMap;
	}

	/**  An entity that defines the scope of audit evidence collected by Audit Manager. An Audit Manager assessment is an implementation of an Audit Manager framework.  */
	export interface AssessmentFormProperties {
		arn: FormControl<string | null | undefined>,
	}
	export function CreateAssessmentFormGroup() {
		return new FormGroup<AssessmentFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  The wrapper of Amazon Web Services account details, such as account ID or email address.  */
	export interface AWSAccount {
		id?: string;
		emailAddress?: string;
		name?: string;
	}

	/**  The wrapper of Amazon Web Services account details, such as account ID or email address.  */
	export interface AWSAccountFormProperties {
		id: FormControl<string | null | undefined>,
		emailAddress: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateAWSAccountFormGroup() {
		return new FormGroup<AWSAccountFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			emailAddress: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  The metadata that's associated with the specified assessment.  */
	export interface AssessmentMetadata {
		name?: string;
		id?: string;
		description?: string;
		complianceType?: string;
		status?: AssessmentStatus;
		assessmentReportsDestination?: AssessmentReportsDestination;
		scope?: Scope;
		roles?: Array<Role>;
		delegations?: Array<Delegation>;
		creationTime?: Date;
		lastUpdated?: Date;
	}

	/**  The metadata that's associated with the specified assessment.  */
	export interface AssessmentMetadataFormProperties {
		name: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		complianceType: FormControl<string | null | undefined>,
		status: FormControl<AssessmentStatus | null | undefined>,
		creationTime: FormControl<Date | null | undefined>,
		lastUpdated: FormControl<Date | null | undefined>,
	}
	export function CreateAssessmentMetadataFormGroup() {
		return new FormGroup<AssessmentMetadataFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			complianceType: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<AssessmentStatus | null | undefined>(undefined),
			creationTime: new FormControl<Date | null | undefined>(undefined),
			lastUpdated: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum AssessmentStatus { ACTIVE = 'ACTIVE', INACTIVE = 'INACTIVE' }


	/**  The location where Audit Manager saves assessment reports for the given assessment.  */
	export interface AssessmentReportsDestination {
		destinationType?: AssessmentReportDestinationType;
		destination?: string;
	}

	/**  The location where Audit Manager saves assessment reports for the given assessment.  */
	export interface AssessmentReportsDestinationFormProperties {
		destinationType: FormControl<AssessmentReportDestinationType | null | undefined>,
		destination: FormControl<string | null | undefined>,
	}
	export function CreateAssessmentReportsDestinationFormGroup() {
		return new FormGroup<AssessmentReportsDestinationFormProperties>({
			destinationType: new FormControl<AssessmentReportDestinationType | null | undefined>(undefined),
			destination: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AssessmentReportDestinationType { S3 = 'S3' }


	/**  The wrapper that contains the Amazon Web Services accounts and services that are in scope for the assessment.  */
	export interface Scope {
		awsAccounts?: Array<AWSAccount>;
		awsServices?: Array<AWSService>;
	}

	/**  The wrapper that contains the Amazon Web Services accounts and services that are in scope for the assessment.  */
	export interface ScopeFormProperties {
	}
	export function CreateScopeFormGroup() {
		return new FormGroup<ScopeFormProperties>({
		});

	}


	/** <p> An Amazon Web Service such as Amazon S3 or CloudTrail. </p> <p>For an example of how to find an Amazon Web Service name and how to define it in your assessment scope, see the following:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_GetServicesInScope.html#API_GetServicesInScope_Example_2">Finding an Amazon Web Service name to use in your assessment scope</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_GetServicesInScope.html#API_GetServicesInScope_Example_3">Defining an Amazon Web Service name in your assessment scope</a> </p> </li> </ul> */
	export interface AWSService {
		serviceName?: string;
	}

	/** <p> An Amazon Web Service such as Amazon S3 or CloudTrail. </p> <p>For an example of how to find an Amazon Web Service name and how to define it in your assessment scope, see the following:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_GetServicesInScope.html#API_GetServicesInScope_Example_2">Finding an Amazon Web Service name to use in your assessment scope</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_GetServicesInScope.html#API_GetServicesInScope_Example_3">Defining an Amazon Web Service name in your assessment scope</a> </p> </li> </ul> */
	export interface AWSServiceFormProperties {
		serviceName: FormControl<string | null | undefined>,
	}
	export function CreateAWSServiceFormGroup() {
		return new FormGroup<AWSServiceFormProperties>({
			serviceName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  The wrapper that contains the Audit Manager role information of the current user. This includes the role type and IAM Amazon Resource Name (ARN).  */
	export interface Role {

		/** Required */
		roleType: RoleType;

		/** Required */
		roleArn: string;
	}

	/**  The wrapper that contains the Audit Manager role information of the current user. This includes the role type and IAM Amazon Resource Name (ARN).  */
	export interface RoleFormProperties {

		/** Required */
		roleType: FormControl<RoleType | null | undefined>,

		/** Required */
		roleArn: FormControl<string | null | undefined>,
	}
	export function CreateRoleFormGroup() {
		return new FormGroup<RoleFormProperties>({
			roleType: new FormControl<RoleType | null | undefined>(undefined, [Validators.required]),
			roleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/**  The file used to structure and automate Audit Manager assessments for a given compliance standard.  */
	export interface AssessmentFramework {
		id?: string;
		arn?: string;

		/** The metadata of a framework, such as the name, ID, or description. */
		metadata?: FrameworkMetadata;
		controlSets?: Array<AssessmentControlSet>;
	}

	/**  The file used to structure and automate Audit Manager assessments for a given compliance standard.  */
	export interface AssessmentFrameworkFormProperties {
		id: FormControl<string | null | undefined>,
		arn: FormControl<string | null | undefined>,
	}
	export function CreateAssessmentFrameworkFormGroup() {
		return new FormGroup<AssessmentFrameworkFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			arn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  The metadata of a framework, such as the name, ID, or description.  */
	export interface FrameworkMetadata {
		name?: string;
		description?: string;
		logo?: string;
		complianceType?: string;
	}

	/**  The metadata of a framework, such as the name, ID, or description.  */
	export interface FrameworkMetadataFormProperties {
		name: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		logo: FormControl<string | null | undefined>,
		complianceType: FormControl<string | null | undefined>,
	}
	export function CreateFrameworkMetadataFormGroup() {
		return new FormGroup<FrameworkMetadataFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			logo: new FormControl<string | null | undefined>(undefined),
			complianceType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  Represents a set of controls in an Audit Manager assessment.  */
	export interface AssessmentControlSet {
		id?: string;
		description?: string;
		status?: ControlSetStatus;
		roles?: Array<Role>;
		controls?: Array<AssessmentControl>;
		delegations?: Array<Delegation>;
		systemEvidenceCount?: number | null;
		manualEvidenceCount?: number | null;
	}

	/**  Represents a set of controls in an Audit Manager assessment.  */
	export interface AssessmentControlSetFormProperties {
		id: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		status: FormControl<ControlSetStatus | null | undefined>,
		systemEvidenceCount: FormControl<number | null | undefined>,
		manualEvidenceCount: FormControl<number | null | undefined>,
	}
	export function CreateAssessmentControlSetFormGroup() {
		return new FormGroup<AssessmentControlSetFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<ControlSetStatus | null | undefined>(undefined),
			systemEvidenceCount: new FormControl<number | null | undefined>(undefined),
			manualEvidenceCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum ControlSetStatus { ACTIVE = 'ACTIVE', UNDER_REVIEW = 'UNDER_REVIEW', REVIEWED = 'REVIEWED' }


	/**  The control entity that represents a standard control or a custom control in an Audit Manager assessment.  */
	export interface AssessmentControl {
		id?: string;
		name?: string;
		description?: string;
		status?: ControlStatus;
		response?: ControlResponse;
		comments?: Array<ControlComment>;
		evidenceSources?: Array<string>;
		evidenceCount?: number | null;
		assessmentReportEvidenceCount?: number | null;
	}

	/**  The control entity that represents a standard control or a custom control in an Audit Manager assessment.  */
	export interface AssessmentControlFormProperties {
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		status: FormControl<ControlStatus | null | undefined>,
		response: FormControl<ControlResponse | null | undefined>,
		evidenceCount: FormControl<number | null | undefined>,
		assessmentReportEvidenceCount: FormControl<number | null | undefined>,
	}
	export function CreateAssessmentControlFormGroup() {
		return new FormGroup<AssessmentControlFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<ControlStatus | null | undefined>(undefined),
			response: new FormControl<ControlResponse | null | undefined>(undefined),
			evidenceCount: new FormControl<number | null | undefined>(undefined),
			assessmentReportEvidenceCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum ControlStatus { UNDER_REVIEW = 'UNDER_REVIEW', REVIEWED = 'REVIEWED', INACTIVE = 'INACTIVE' }

	export enum ControlResponse { MANUAL = 'MANUAL', AUTOMATE = 'AUTOMATE', DEFER = 'DEFER', IGNORE = 'IGNORE' }


	/**  A comment that's posted by a user on a control. This includes the author's name, the comment text, and a timestamp.  */
	export interface ControlComment {
		authorName?: string;
		commentBody?: string;
		postedDate?: Date;
	}

	/**  A comment that's posted by a user on a control. This includes the author's name, the comment text, and a timestamp.  */
	export interface ControlCommentFormProperties {
		authorName: FormControl<string | null | undefined>,
		commentBody: FormControl<string | null | undefined>,
		postedDate: FormControl<Date | null | undefined>,
	}
	export function CreateControlCommentFormGroup() {
		return new FormGroup<ControlCommentFormProperties>({
			authorName: new FormControl<string | null | undefined>(undefined),
			commentBody: new FormControl<string | null | undefined>(undefined),
			postedDate: new FormControl<Date | null | undefined>(undefined),
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

	export interface ServiceQuotaExceededException {
	}
	export interface ServiceQuotaExceededExceptionFormProperties {
	}
	export function CreateServiceQuotaExceededExceptionFormGroup() {
		return new FormGroup<ServiceQuotaExceededExceptionFormProperties>({
		});

	}

	export interface CreateAssessmentFrameworkResponse {
		framework?: Framework;
	}
	export interface CreateAssessmentFrameworkResponseFormProperties {
	}
	export function CreateCreateAssessmentFrameworkResponseFormGroup() {
		return new FormGroup<CreateAssessmentFrameworkResponseFormProperties>({
		});

	}


	/**  The file that's used to structure and automate Audit Manager assessments for a given compliance standard.  */
	export interface Framework {
		arn?: string;
		id?: string;
		name?: string;
		type?: FrameworkType;
		complianceType?: string;
		description?: string;
		logo?: string;
		controlSources?: string;
		controlSets?: Array<ControlSet>;
		createdAt?: Date;
		lastUpdatedAt?: Date;
		createdBy?: string;
		lastUpdatedBy?: string;
		tags?: TagMap;
	}

	/**  The file that's used to structure and automate Audit Manager assessments for a given compliance standard.  */
	export interface FrameworkFormProperties {
		arn: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		type: FormControl<FrameworkType | null | undefined>,
		complianceType: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		logo: FormControl<string | null | undefined>,
		controlSources: FormControl<string | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
		lastUpdatedAt: FormControl<Date | null | undefined>,
		createdBy: FormControl<string | null | undefined>,
		lastUpdatedBy: FormControl<string | null | undefined>,
	}
	export function CreateFrameworkFormGroup() {
		return new FormGroup<FrameworkFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<FrameworkType | null | undefined>(undefined),
			complianceType: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			logo: new FormControl<string | null | undefined>(undefined),
			controlSources: new FormControl<string | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
			lastUpdatedAt: new FormControl<Date | null | undefined>(undefined),
			createdBy: new FormControl<string | null | undefined>(undefined),
			lastUpdatedBy: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum FrameworkType { Standard = 'Standard', Custom = 'Custom' }


	/**  A set of controls in Audit Manager.  */
	export interface ControlSet {
		id?: string;
		name?: string;
		controls?: Array<Control>;
	}

	/**  A set of controls in Audit Manager.  */
	export interface ControlSetFormProperties {
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateControlSetFormGroup() {
		return new FormGroup<ControlSetFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  A control in Audit Manager.  */
	export interface Control {
		arn?: string;
		id?: string;
		type?: FrameworkType;
		name?: string;
		description?: string;
		testingInformation?: string;
		actionPlanTitle?: string;
		actionPlanInstructions?: string;
		controlSources?: string;
		controlMappingSources?: Array<ControlMappingSource>;
		createdAt?: Date;
		lastUpdatedAt?: Date;
		createdBy?: string;
		lastUpdatedBy?: string;
		tags?: TagMap;
	}

	/**  A control in Audit Manager.  */
	export interface ControlFormProperties {
		arn: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		type: FormControl<FrameworkType | null | undefined>,
		name: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		testingInformation: FormControl<string | null | undefined>,
		actionPlanTitle: FormControl<string | null | undefined>,
		actionPlanInstructions: FormControl<string | null | undefined>,
		controlSources: FormControl<string | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
		lastUpdatedAt: FormControl<Date | null | undefined>,
		createdBy: FormControl<string | null | undefined>,
		lastUpdatedBy: FormControl<string | null | undefined>,
	}
	export function CreateControlFormGroup() {
		return new FormGroup<ControlFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<FrameworkType | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			testingInformation: new FormControl<string | null | undefined>(undefined),
			actionPlanTitle: new FormControl<string | null | undefined>(undefined),
			actionPlanInstructions: new FormControl<string | null | undefined>(undefined),
			controlSources: new FormControl<string | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
			lastUpdatedAt: new FormControl<Date | null | undefined>(undefined),
			createdBy: new FormControl<string | null | undefined>(undefined),
			lastUpdatedBy: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  The data source that determines where Audit Manager collects evidence from for the control.  */
	export interface ControlMappingSource {
		sourceId?: string;
		sourceName?: string;
		sourceDescription?: string;
		sourceSetUpOption?: SourceSetUpOption;
		sourceType?: SourceType;

		/** <p>A keyword that relates to the control data source.</p> <p>For manual evidence, this keyword indicates if the manual evidence is a file or text.</p> <p>For automated evidence, this keyword identifies a specific CloudTrail event, Config rule, Security Hub control, or Amazon Web Services API name. </p> <p> To learn more about the supported keywords that you can use when mapping a control data source, see the following pages in the <i>Audit Manager User Guide</i>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/control-data-sources-config.html">Config rules supported by Audit Manager</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/control-data-sources-ash.html">Security Hub controls supported by Audit Manager</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/control-data-sources-api.html">API calls supported by Audit Manager</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/control-data-sources-cloudtrail.html">CloudTrail event names supported by Audit Manager</a> </p> </li> </ul> */
		sourceKeyword?: SourceKeyword;
		sourceFrequency?: SourceFrequency;
		troubleshootingText?: string;
	}

	/**  The data source that determines where Audit Manager collects evidence from for the control.  */
	export interface ControlMappingSourceFormProperties {
		sourceId: FormControl<string | null | undefined>,
		sourceName: FormControl<string | null | undefined>,
		sourceDescription: FormControl<string | null | undefined>,
		sourceSetUpOption: FormControl<SourceSetUpOption | null | undefined>,
		sourceType: FormControl<SourceType | null | undefined>,
		sourceFrequency: FormControl<SourceFrequency | null | undefined>,
		troubleshootingText: FormControl<string | null | undefined>,
	}
	export function CreateControlMappingSourceFormGroup() {
		return new FormGroup<ControlMappingSourceFormProperties>({
			sourceId: new FormControl<string | null | undefined>(undefined),
			sourceName: new FormControl<string | null | undefined>(undefined),
			sourceDescription: new FormControl<string | null | undefined>(undefined),
			sourceSetUpOption: new FormControl<SourceSetUpOption | null | undefined>(undefined),
			sourceType: new FormControl<SourceType | null | undefined>(undefined),
			sourceFrequency: new FormControl<SourceFrequency | null | undefined>(undefined),
			troubleshootingText: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum SourceSetUpOption { System_Controls_Mapping = 'System_Controls_Mapping', Procedural_Controls_Mapping = 'Procedural_Controls_Mapping' }

	export enum SourceType { AWS_Cloudtrail = 'AWS_Cloudtrail', AWS_Config = 'AWS_Config', AWS_Security_Hub = 'AWS_Security_Hub', AWS_API_Call = 'AWS_API_Call', MANUAL = 'MANUAL' }


	/** <p>A keyword that relates to the control data source.</p> <p>For manual evidence, this keyword indicates if the manual evidence is a file or text.</p> <p>For automated evidence, this keyword identifies a specific CloudTrail event, Config rule, Security Hub control, or Amazon Web Services API name. </p> <p> To learn more about the supported keywords that you can use when mapping a control data source, see the following pages in the <i>Audit Manager User Guide</i>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/control-data-sources-config.html">Config rules supported by Audit Manager</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/control-data-sources-ash.html">Security Hub controls supported by Audit Manager</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/control-data-sources-api.html">API calls supported by Audit Manager</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/control-data-sources-cloudtrail.html">CloudTrail event names supported by Audit Manager</a> </p> </li> </ul> */
	export interface SourceKeyword {
		keywordInputType?: KeywordInputType;
		keywordValue?: string;
	}

	/** <p>A keyword that relates to the control data source.</p> <p>For manual evidence, this keyword indicates if the manual evidence is a file or text.</p> <p>For automated evidence, this keyword identifies a specific CloudTrail event, Config rule, Security Hub control, or Amazon Web Services API name. </p> <p> To learn more about the supported keywords that you can use when mapping a control data source, see the following pages in the <i>Audit Manager User Guide</i>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/control-data-sources-config.html">Config rules supported by Audit Manager</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/control-data-sources-ash.html">Security Hub controls supported by Audit Manager</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/control-data-sources-api.html">API calls supported by Audit Manager</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/control-data-sources-cloudtrail.html">CloudTrail event names supported by Audit Manager</a> </p> </li> </ul> */
	export interface SourceKeywordFormProperties {
		keywordInputType: FormControl<KeywordInputType | null | undefined>,
		keywordValue: FormControl<string | null | undefined>,
	}
	export function CreateSourceKeywordFormGroup() {
		return new FormGroup<SourceKeywordFormProperties>({
			keywordInputType: new FormControl<KeywordInputType | null | undefined>(undefined),
			keywordValue: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum KeywordInputType { SELECT_FROM_LIST = 'SELECT_FROM_LIST', UPLOAD_FILE = 'UPLOAD_FILE', INPUT_TEXT = 'INPUT_TEXT' }

	export enum SourceFrequency { DAILY = 'DAILY', WEEKLY = 'WEEKLY', MONTHLY = 'MONTHLY' }


	/**  A <code>controlSet</code> entity that represents a collection of controls in Audit Manager. This doesn't contain the control set ID.  */
	export interface CreateAssessmentFrameworkControlSet {

		/** Required */
		name: string;
		controls?: Array<CreateAssessmentFrameworkControl>;
	}

	/**  A <code>controlSet</code> entity that represents a collection of controls in Audit Manager. This doesn't contain the control set ID.  */
	export interface CreateAssessmentFrameworkControlSetFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,
	}
	export function CreateCreateAssessmentFrameworkControlSetFormGroup() {
		return new FormGroup<CreateAssessmentFrameworkControlSetFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/**  The control entity attributes that uniquely identify an existing control to be added to a framework in Audit Manager.  */
	export interface CreateAssessmentFrameworkControl {

		/** Required */
		id: string;
	}

	/**  The control entity attributes that uniquely identify an existing control to be added to a framework in Audit Manager.  */
	export interface CreateAssessmentFrameworkControlFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,
	}
	export function CreateCreateAssessmentFrameworkControlFormGroup() {
		return new FormGroup<CreateAssessmentFrameworkControlFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateAssessmentReportResponse {
		assessmentReport?: AssessmentReport;
	}
	export interface CreateAssessmentReportResponseFormProperties {
	}
	export function CreateCreateAssessmentReportResponseFormGroup() {
		return new FormGroup<CreateAssessmentReportResponseFormProperties>({
		});

	}


	/**  A finalized document that's generated from an Audit Manager assessment. These reports summarize the relevant evidence that was collected for your audit, and link to the relevant evidence folders. These evidence folders are named and organized according to the controls that are specified in your assessment.  */
	export interface AssessmentReport {
		id?: string;
		name?: string;
		description?: string;
		awsAccountId?: string;
		assessmentId?: string;
		assessmentName?: string;
		author?: string;
		status?: AssessmentReportStatus;
		creationTime?: Date;
	}

	/**  A finalized document that's generated from an Audit Manager assessment. These reports summarize the relevant evidence that was collected for your audit, and link to the relevant evidence folders. These evidence folders are named and organized according to the controls that are specified in your assessment.  */
	export interface AssessmentReportFormProperties {
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		awsAccountId: FormControl<string | null | undefined>,
		assessmentId: FormControl<string | null | undefined>,
		assessmentName: FormControl<string | null | undefined>,
		author: FormControl<string | null | undefined>,
		status: FormControl<AssessmentReportStatus | null | undefined>,
		creationTime: FormControl<Date | null | undefined>,
	}
	export function CreateAssessmentReportFormGroup() {
		return new FormGroup<AssessmentReportFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			awsAccountId: new FormControl<string | null | undefined>(undefined),
			assessmentId: new FormControl<string | null | undefined>(undefined),
			assessmentName: new FormControl<string | null | undefined>(undefined),
			author: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<AssessmentReportStatus | null | undefined>(undefined),
			creationTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum AssessmentReportStatus { COMPLETE = 'COMPLETE', IN_PROGRESS = 'IN_PROGRESS', FAILED = 'FAILED' }

	export interface CreateControlResponse {
		control?: Control;
	}
	export interface CreateControlResponseFormProperties {
	}
	export function CreateCreateControlResponseFormGroup() {
		return new FormGroup<CreateControlResponseFormProperties>({
		});

	}


	/**  The control mapping fields that represent the source for evidence collection, along with related parameters and metadata. This doesn't contain <code>mappingID</code>.  */
	export interface CreateControlMappingSource {
		sourceName?: string;
		sourceDescription?: string;
		sourceSetUpOption?: SourceSetUpOption;
		sourceType?: SourceType;

		/** <p>A keyword that relates to the control data source.</p> <p>For manual evidence, this keyword indicates if the manual evidence is a file or text.</p> <p>For automated evidence, this keyword identifies a specific CloudTrail event, Config rule, Security Hub control, or Amazon Web Services API name. </p> <p> To learn more about the supported keywords that you can use when mapping a control data source, see the following pages in the <i>Audit Manager User Guide</i>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/control-data-sources-config.html">Config rules supported by Audit Manager</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/control-data-sources-ash.html">Security Hub controls supported by Audit Manager</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/control-data-sources-api.html">API calls supported by Audit Manager</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/control-data-sources-cloudtrail.html">CloudTrail event names supported by Audit Manager</a> </p> </li> </ul> */
		sourceKeyword?: SourceKeyword;
		sourceFrequency?: SourceFrequency;
		troubleshootingText?: string;
	}

	/**  The control mapping fields that represent the source for evidence collection, along with related parameters and metadata. This doesn't contain <code>mappingID</code>.  */
	export interface CreateControlMappingSourceFormProperties {
		sourceName: FormControl<string | null | undefined>,
		sourceDescription: FormControl<string | null | undefined>,
		sourceSetUpOption: FormControl<SourceSetUpOption | null | undefined>,
		sourceType: FormControl<SourceType | null | undefined>,
		sourceFrequency: FormControl<SourceFrequency | null | undefined>,
		troubleshootingText: FormControl<string | null | undefined>,
	}
	export function CreateCreateControlMappingSourceFormGroup() {
		return new FormGroup<CreateControlMappingSourceFormProperties>({
			sourceName: new FormControl<string | null | undefined>(undefined),
			sourceDescription: new FormControl<string | null | undefined>(undefined),
			sourceSetUpOption: new FormControl<SourceSetUpOption | null | undefined>(undefined),
			sourceType: new FormControl<SourceType | null | undefined>(undefined),
			sourceFrequency: new FormControl<SourceFrequency | null | undefined>(undefined),
			troubleshootingText: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteAssessmentResponse {
	}
	export interface DeleteAssessmentResponseFormProperties {
	}
	export function CreateDeleteAssessmentResponseFormGroup() {
		return new FormGroup<DeleteAssessmentResponseFormProperties>({
		});

	}

	export interface DeleteAssessmentFrameworkResponse {
	}
	export interface DeleteAssessmentFrameworkResponseFormProperties {
	}
	export function CreateDeleteAssessmentFrameworkResponseFormGroup() {
		return new FormGroup<DeleteAssessmentFrameworkResponseFormProperties>({
		});

	}

	export interface DeleteAssessmentFrameworkShareResponse {
	}
	export interface DeleteAssessmentFrameworkShareResponseFormProperties {
	}
	export function CreateDeleteAssessmentFrameworkShareResponseFormGroup() {
		return new FormGroup<DeleteAssessmentFrameworkShareResponseFormProperties>({
		});

	}

	export interface DeleteAssessmentReportResponse {
	}
	export interface DeleteAssessmentReportResponseFormProperties {
	}
	export function CreateDeleteAssessmentReportResponseFormGroup() {
		return new FormGroup<DeleteAssessmentReportResponseFormProperties>({
		});

	}

	export interface DeleteControlResponse {
	}
	export interface DeleteControlResponseFormProperties {
	}
	export function CreateDeleteControlResponseFormGroup() {
		return new FormGroup<DeleteControlResponseFormProperties>({
		});

	}

	export interface DeregisterAccountResponse {
		status?: AccountStatus;
	}
	export interface DeregisterAccountResponseFormProperties {
		status: FormControl<AccountStatus | null | undefined>,
	}
	export function CreateDeregisterAccountResponseFormGroup() {
		return new FormGroup<DeregisterAccountResponseFormProperties>({
			status: new FormControl<AccountStatus | null | undefined>(undefined),
		});

	}

	export enum AccountStatus { ACTIVE = 'ACTIVE', INACTIVE = 'INACTIVE', PENDING_ACTIVATION = 'PENDING_ACTIVATION' }

	export interface DeregisterOrganizationAdminAccountResponse {
	}
	export interface DeregisterOrganizationAdminAccountResponseFormProperties {
	}
	export function CreateDeregisterOrganizationAdminAccountResponseFormGroup() {
		return new FormGroup<DeregisterOrganizationAdminAccountResponseFormProperties>({
		});

	}

	export interface DisassociateAssessmentReportEvidenceFolderResponse {
	}
	export interface DisassociateAssessmentReportEvidenceFolderResponseFormProperties {
	}
	export function CreateDisassociateAssessmentReportEvidenceFolderResponseFormGroup() {
		return new FormGroup<DisassociateAssessmentReportEvidenceFolderResponseFormProperties>({
		});

	}

	export interface GetAccountStatusResponse {
		status?: AccountStatus;
	}
	export interface GetAccountStatusResponseFormProperties {
		status: FormControl<AccountStatus | null | undefined>,
	}
	export function CreateGetAccountStatusResponseFormGroup() {
		return new FormGroup<GetAccountStatusResponseFormProperties>({
			status: new FormControl<AccountStatus | null | undefined>(undefined),
		});

	}

	export interface GetAssessmentResponse {

		/** An entity that defines the scope of audit evidence collected by Audit Manager. An Audit Manager assessment is an implementation of an Audit Manager framework. */
		assessment?: Assessment;

		/** The wrapper that contains the Audit Manager role information of the current user. This includes the role type and IAM Amazon Resource Name (ARN). */
		userRole?: Role;
	}
	export interface GetAssessmentResponseFormProperties {
	}
	export function CreateGetAssessmentResponseFormGroup() {
		return new FormGroup<GetAssessmentResponseFormProperties>({
		});

	}

	export interface GetAssessmentFrameworkResponse {
		framework?: Framework;
	}
	export interface GetAssessmentFrameworkResponseFormProperties {
	}
	export function CreateGetAssessmentFrameworkResponseFormGroup() {
		return new FormGroup<GetAssessmentFrameworkResponseFormProperties>({
		});

	}

	export interface GetAssessmentReportUrlResponse {

		/** Short for uniform resource locator. A URL is used as a unique identifier to locate a resource on the internet. */
		preSignedUrl?: URL;
	}
	export interface GetAssessmentReportUrlResponseFormProperties {
	}
	export function CreateGetAssessmentReportUrlResponseFormGroup() {
		return new FormGroup<GetAssessmentReportUrlResponseFormProperties>({
		});

	}


	/**  Short for uniform resource locator. A URL is used as a unique identifier to locate a resource on the internet.  */
	export interface URL {
		hyperlinkName?: string;
		link?: string;
	}

	/**  Short for uniform resource locator. A URL is used as a unique identifier to locate a resource on the internet.  */
	export interface URLFormProperties {
		hyperlinkName: FormControl<string | null | undefined>,
		link: FormControl<string | null | undefined>,
	}
	export function CreateURLFormGroup() {
		return new FormGroup<URLFormProperties>({
			hyperlinkName: new FormControl<string | null | undefined>(undefined),
			link: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetChangeLogsResponse {
		changeLogs?: Array<ChangeLog>;
		nextToken?: string;
	}
	export interface GetChangeLogsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetChangeLogsResponseFormGroup() {
		return new FormGroup<GetChangeLogsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  The record of a change within Audit Manager. For example, this could be the status change of an assessment or the delegation of a control set.  */
	export interface ChangeLog {
		objectType?: ObjectTypeEnum;
		objectName?: string;
		action?: ActionEnum;
		createdAt?: Date;
		createdBy?: string;
	}

	/**  The record of a change within Audit Manager. For example, this could be the status change of an assessment or the delegation of a control set.  */
	export interface ChangeLogFormProperties {
		objectType: FormControl<ObjectTypeEnum | null | undefined>,
		objectName: FormControl<string | null | undefined>,
		action: FormControl<ActionEnum | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
		createdBy: FormControl<string | null | undefined>,
	}
	export function CreateChangeLogFormGroup() {
		return new FormGroup<ChangeLogFormProperties>({
			objectType: new FormControl<ObjectTypeEnum | null | undefined>(undefined),
			objectName: new FormControl<string | null | undefined>(undefined),
			action: new FormControl<ActionEnum | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
			createdBy: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ObjectTypeEnum { ASSESSMENT = 'ASSESSMENT', CONTROL_SET = 'CONTROL_SET', CONTROL = 'CONTROL', DELEGATION = 'DELEGATION', ASSESSMENT_REPORT = 'ASSESSMENT_REPORT' }

	export enum ActionEnum { CREATE = 'CREATE', UPDATE_METADATA = 'UPDATE_METADATA', ACTIVE = 'ACTIVE', INACTIVE = 'INACTIVE', DELETE = 'DELETE', UNDER_REVIEW = 'UNDER_REVIEW', REVIEWED = 'REVIEWED', IMPORT_EVIDENCE = 'IMPORT_EVIDENCE' }

	export interface GetControlResponse {
		control?: Control;
	}
	export interface GetControlResponseFormProperties {
	}
	export function CreateGetControlResponseFormGroup() {
		return new FormGroup<GetControlResponseFormProperties>({
		});

	}

	export interface GetDelegationsResponse {
		delegations?: Array<DelegationMetadata>;
		nextToken?: string;
	}
	export interface GetDelegationsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetDelegationsResponseFormGroup() {
		return new FormGroup<GetDelegationsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  The metadata that's associated with the delegation.  */
	export interface DelegationMetadata {
		id?: string;
		assessmentName?: string;
		assessmentId?: string;
		status?: DelegationStatus;
		roleArn?: string;
		creationTime?: Date;
		controlSetName?: string;
	}

	/**  The metadata that's associated with the delegation.  */
	export interface DelegationMetadataFormProperties {
		id: FormControl<string | null | undefined>,
		assessmentName: FormControl<string | null | undefined>,
		assessmentId: FormControl<string | null | undefined>,
		status: FormControl<DelegationStatus | null | undefined>,
		roleArn: FormControl<string | null | undefined>,
		creationTime: FormControl<Date | null | undefined>,
		controlSetName: FormControl<string | null | undefined>,
	}
	export function CreateDelegationMetadataFormGroup() {
		return new FormGroup<DelegationMetadataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			assessmentName: new FormControl<string | null | undefined>(undefined),
			assessmentId: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<DelegationStatus | null | undefined>(undefined),
			roleArn: new FormControl<string | null | undefined>(undefined),
			creationTime: new FormControl<Date | null | undefined>(undefined),
			controlSetName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetEvidenceResponse {
		evidence?: Evidence;
	}
	export interface GetEvidenceResponseFormProperties {
	}
	export function CreateGetEvidenceResponseFormGroup() {
		return new FormGroup<GetEvidenceResponseFormProperties>({
		});

	}


	/**  A record that contains the information needed to demonstrate compliance with the requirements specified by a control. Examples of evidence include change activity invoked by a user, or a system configuration snapshot.  */
	export interface Evidence {
		dataSource?: string;
		evidenceAwsAccountId?: string;
		time?: Date;
		eventSource?: string;
		eventName?: string;
		evidenceByType?: string;
		resourcesIncluded?: Array<Resource>;
		attributes?: EvidenceAttributes;
		iamId?: string;
		complianceCheck?: string;
		awsOrganization?: string;
		awsAccountId?: string;
		evidenceFolderId?: string;
		id?: string;
		assessmentReportSelection?: string;
	}

	/**  A record that contains the information needed to demonstrate compliance with the requirements specified by a control. Examples of evidence include change activity invoked by a user, or a system configuration snapshot.  */
	export interface EvidenceFormProperties {
		dataSource: FormControl<string | null | undefined>,
		evidenceAwsAccountId: FormControl<string | null | undefined>,
		time: FormControl<Date | null | undefined>,
		eventSource: FormControl<string | null | undefined>,
		eventName: FormControl<string | null | undefined>,
		evidenceByType: FormControl<string | null | undefined>,
		iamId: FormControl<string | null | undefined>,
		complianceCheck: FormControl<string | null | undefined>,
		awsOrganization: FormControl<string | null | undefined>,
		awsAccountId: FormControl<string | null | undefined>,
		evidenceFolderId: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		assessmentReportSelection: FormControl<string | null | undefined>,
	}
	export function CreateEvidenceFormGroup() {
		return new FormGroup<EvidenceFormProperties>({
			dataSource: new FormControl<string | null | undefined>(undefined),
			evidenceAwsAccountId: new FormControl<string | null | undefined>(undefined),
			time: new FormControl<Date | null | undefined>(undefined),
			eventSource: new FormControl<string | null | undefined>(undefined),
			eventName: new FormControl<string | null | undefined>(undefined),
			evidenceByType: new FormControl<string | null | undefined>(undefined),
			iamId: new FormControl<string | null | undefined>(undefined),
			complianceCheck: new FormControl<string | null | undefined>(undefined),
			awsOrganization: new FormControl<string | null | undefined>(undefined),
			awsAccountId: new FormControl<string | null | undefined>(undefined),
			evidenceFolderId: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			assessmentReportSelection: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  A system asset that's evaluated in an Audit Manager assessment.  */
	export interface Resource {
		arn?: string;
		value?: string;
		complianceCheck?: string;
	}

	/**  A system asset that's evaluated in an Audit Manager assessment.  */
	export interface ResourceFormProperties {
		arn: FormControl<string | null | undefined>,
		value: FormControl<string | null | undefined>,
		complianceCheck: FormControl<string | null | undefined>,
	}
	export function CreateResourceFormGroup() {
		return new FormGroup<ResourceFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
			complianceCheck: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface EvidenceAttributes {
	}
	export interface EvidenceAttributesFormProperties {
	}
	export function CreateEvidenceAttributesFormGroup() {
		return new FormGroup<EvidenceAttributesFormProperties>({
		});

	}

	export interface GetEvidenceByEvidenceFolderResponse {
		evidence?: Array<Evidence>;
		nextToken?: string;
	}
	export interface GetEvidenceByEvidenceFolderResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetEvidenceByEvidenceFolderResponseFormGroup() {
		return new FormGroup<GetEvidenceByEvidenceFolderResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetEvidenceFileUploadUrlResponse {
		evidenceFileName?: string;
		uploadUrl?: string;
	}
	export interface GetEvidenceFileUploadUrlResponseFormProperties {
		evidenceFileName: FormControl<string | null | undefined>,
		uploadUrl: FormControl<string | null | undefined>,
	}
	export function CreateGetEvidenceFileUploadUrlResponseFormGroup() {
		return new FormGroup<GetEvidenceFileUploadUrlResponseFormProperties>({
			evidenceFileName: new FormControl<string | null | undefined>(undefined),
			uploadUrl: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetEvidenceFolderResponse {
		evidenceFolder?: AssessmentEvidenceFolder;
	}
	export interface GetEvidenceFolderResponseFormProperties {
	}
	export function CreateGetEvidenceFolderResponseFormGroup() {
		return new FormGroup<GetEvidenceFolderResponseFormProperties>({
		});

	}


	/**  The folder where Audit Manager stores evidence for an assessment.  */
	export interface AssessmentEvidenceFolder {
		name?: string;
		date?: Date;
		assessmentId?: string;
		controlSetId?: string;
		controlId?: string;
		id?: string;
		dataSource?: string;
		author?: string;
		totalEvidence?: number | null;
		assessmentReportSelectionCount?: number | null;
		controlName?: string;
		evidenceResourcesIncludedCount?: number | null;
		evidenceByTypeConfigurationDataCount?: number | null;
		evidenceByTypeManualCount?: number | null;
		evidenceByTypeComplianceCheckCount?: number | null;
		evidenceByTypeComplianceCheckIssuesCount?: number | null;
		evidenceByTypeUserActivityCount?: number | null;
		evidenceAwsServiceSourceCount?: number | null;
	}

	/**  The folder where Audit Manager stores evidence for an assessment.  */
	export interface AssessmentEvidenceFolderFormProperties {
		name: FormControl<string | null | undefined>,
		date: FormControl<Date | null | undefined>,
		assessmentId: FormControl<string | null | undefined>,
		controlSetId: FormControl<string | null | undefined>,
		controlId: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		dataSource: FormControl<string | null | undefined>,
		author: FormControl<string | null | undefined>,
		totalEvidence: FormControl<number | null | undefined>,
		assessmentReportSelectionCount: FormControl<number | null | undefined>,
		controlName: FormControl<string | null | undefined>,
		evidenceResourcesIncludedCount: FormControl<number | null | undefined>,
		evidenceByTypeConfigurationDataCount: FormControl<number | null | undefined>,
		evidenceByTypeManualCount: FormControl<number | null | undefined>,
		evidenceByTypeComplianceCheckCount: FormControl<number | null | undefined>,
		evidenceByTypeComplianceCheckIssuesCount: FormControl<number | null | undefined>,
		evidenceByTypeUserActivityCount: FormControl<number | null | undefined>,
		evidenceAwsServiceSourceCount: FormControl<number | null | undefined>,
	}
	export function CreateAssessmentEvidenceFolderFormGroup() {
		return new FormGroup<AssessmentEvidenceFolderFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			date: new FormControl<Date | null | undefined>(undefined),
			assessmentId: new FormControl<string | null | undefined>(undefined),
			controlSetId: new FormControl<string | null | undefined>(undefined),
			controlId: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			dataSource: new FormControl<string | null | undefined>(undefined),
			author: new FormControl<string | null | undefined>(undefined),
			totalEvidence: new FormControl<number | null | undefined>(undefined),
			assessmentReportSelectionCount: new FormControl<number | null | undefined>(undefined),
			controlName: new FormControl<string | null | undefined>(undefined),
			evidenceResourcesIncludedCount: new FormControl<number | null | undefined>(undefined),
			evidenceByTypeConfigurationDataCount: new FormControl<number | null | undefined>(undefined),
			evidenceByTypeManualCount: new FormControl<number | null | undefined>(undefined),
			evidenceByTypeComplianceCheckCount: new FormControl<number | null | undefined>(undefined),
			evidenceByTypeComplianceCheckIssuesCount: new FormControl<number | null | undefined>(undefined),
			evidenceByTypeUserActivityCount: new FormControl<number | null | undefined>(undefined),
			evidenceAwsServiceSourceCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetEvidenceFoldersByAssessmentResponse {
		evidenceFolders?: Array<AssessmentEvidenceFolder>;
		nextToken?: string;
	}
	export interface GetEvidenceFoldersByAssessmentResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetEvidenceFoldersByAssessmentResponseFormGroup() {
		return new FormGroup<GetEvidenceFoldersByAssessmentResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetEvidenceFoldersByAssessmentControlResponse {
		evidenceFolders?: Array<AssessmentEvidenceFolder>;
		nextToken?: string;
	}
	export interface GetEvidenceFoldersByAssessmentControlResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetEvidenceFoldersByAssessmentControlResponseFormGroup() {
		return new FormGroup<GetEvidenceFoldersByAssessmentControlResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetInsightsResponse {
		insights?: Insights;
	}
	export interface GetInsightsResponseFormProperties {
	}
	export function CreateGetInsightsResponseFormGroup() {
		return new FormGroup<GetInsightsResponseFormProperties>({
		});

	}


	/** <p>A summary of the latest analytics data for all your active assessments. </p> <p>This summary is a snapshot of the data that your active assessments collected on the <code>lastUpdated</code> date. It’s important to understand that the following totals are daily counts based on this date — they aren’t a total sum to date. </p> <p>The <code>Insights</code> data is eventually consistent. This means that, when you read data from <code>Insights</code>, the response might not instantly reflect the results of a recently completed write or update operation. If you repeat your read request after a few hours, the response should return the latest data.</p> <note> <p>If you delete an assessment or change its status to inactive, <code>InsightsByAssessment</code> includes data for that assessment as follows.</p> <ul> <li> <p> <b>Inactive assessments</b> - If Audit Manager collected evidence for your assessment before you changed it inactive, that evidence is included in the <code>InsightsByAssessment</code> counts for that day.</p> </li> <li> <p> <b>Deleted assessments</b> - If Audit Manager collected evidence for your assessment before you deleted it, that evidence isn't included in the <code>InsightsByAssessment</code> counts for that day.</p> </li> </ul> </note> */
	export interface Insights {
		activeAssessmentsCount?: number | null;
		noncompliantEvidenceCount?: number | null;
		compliantEvidenceCount?: number | null;
		inconclusiveEvidenceCount?: number | null;
		assessmentControlsCountByNoncompliantEvidence?: number | null;
		totalAssessmentControlsCount?: number | null;
		lastUpdated?: Date;
	}

	/** <p>A summary of the latest analytics data for all your active assessments. </p> <p>This summary is a snapshot of the data that your active assessments collected on the <code>lastUpdated</code> date. It’s important to understand that the following totals are daily counts based on this date — they aren’t a total sum to date. </p> <p>The <code>Insights</code> data is eventually consistent. This means that, when you read data from <code>Insights</code>, the response might not instantly reflect the results of a recently completed write or update operation. If you repeat your read request after a few hours, the response should return the latest data.</p> <note> <p>If you delete an assessment or change its status to inactive, <code>InsightsByAssessment</code> includes data for that assessment as follows.</p> <ul> <li> <p> <b>Inactive assessments</b> - If Audit Manager collected evidence for your assessment before you changed it inactive, that evidence is included in the <code>InsightsByAssessment</code> counts for that day.</p> </li> <li> <p> <b>Deleted assessments</b> - If Audit Manager collected evidence for your assessment before you deleted it, that evidence isn't included in the <code>InsightsByAssessment</code> counts for that day.</p> </li> </ul> </note> */
	export interface InsightsFormProperties {
		activeAssessmentsCount: FormControl<number | null | undefined>,
		noncompliantEvidenceCount: FormControl<number | null | undefined>,
		compliantEvidenceCount: FormControl<number | null | undefined>,
		inconclusiveEvidenceCount: FormControl<number | null | undefined>,
		assessmentControlsCountByNoncompliantEvidence: FormControl<number | null | undefined>,
		totalAssessmentControlsCount: FormControl<number | null | undefined>,
		lastUpdated: FormControl<Date | null | undefined>,
	}
	export function CreateInsightsFormGroup() {
		return new FormGroup<InsightsFormProperties>({
			activeAssessmentsCount: new FormControl<number | null | undefined>(undefined),
			noncompliantEvidenceCount: new FormControl<number | null | undefined>(undefined),
			compliantEvidenceCount: new FormControl<number | null | undefined>(undefined),
			inconclusiveEvidenceCount: new FormControl<number | null | undefined>(undefined),
			assessmentControlsCountByNoncompliantEvidence: new FormControl<number | null | undefined>(undefined),
			totalAssessmentControlsCount: new FormControl<number | null | undefined>(undefined),
			lastUpdated: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface GetInsightsByAssessmentResponse {
		insights?: InsightsByAssessment;
	}
	export interface GetInsightsByAssessmentResponseFormProperties {
	}
	export function CreateGetInsightsByAssessmentResponseFormGroup() {
		return new FormGroup<GetInsightsByAssessmentResponseFormProperties>({
		});

	}


	/** <p>A summary of the latest analytics data for a specific active assessment.</p> <p>This summary is a snapshot of the data that was collected on the <code>lastUpdated</code> date. It’s important to understand that the totals in <code>InsightsByAssessment</code> are daily counts based on this date — they aren’t a total sum to date. </p> <p>The <code>InsightsByAssessment</code> data is eventually consistent. This means that when you read data from <code>InsightsByAssessment</code>, the response might not instantly reflect the results of a recently completed write or update operation. If you repeat your read request after a few hours, the response returns the latest data.</p> <note> <p>If you delete an assessment or change its status to inactive, <code>InsightsByAssessment</code> includes data for that assessment as follows.</p> <ul> <li> <p> <b>Inactive assessments</b> - If Audit Manager collected evidence for your assessment before you changed it inactive, that evidence is included in the <code>InsightsByAssessment</code> counts for that day.</p> </li> <li> <p> <b>Deleted assessments</b> - If Audit Manager collected evidence for your assessment before you deleted it, that evidence isn't included in the <code>InsightsByAssessment</code> counts for that day.</p> </li> </ul> </note> */
	export interface InsightsByAssessment {
		noncompliantEvidenceCount?: number | null;
		compliantEvidenceCount?: number | null;
		inconclusiveEvidenceCount?: number | null;
		assessmentControlsCountByNoncompliantEvidence?: number | null;
		totalAssessmentControlsCount?: number | null;
		lastUpdated?: Date;
	}

	/** <p>A summary of the latest analytics data for a specific active assessment.</p> <p>This summary is a snapshot of the data that was collected on the <code>lastUpdated</code> date. It’s important to understand that the totals in <code>InsightsByAssessment</code> are daily counts based on this date — they aren’t a total sum to date. </p> <p>The <code>InsightsByAssessment</code> data is eventually consistent. This means that when you read data from <code>InsightsByAssessment</code>, the response might not instantly reflect the results of a recently completed write or update operation. If you repeat your read request after a few hours, the response returns the latest data.</p> <note> <p>If you delete an assessment or change its status to inactive, <code>InsightsByAssessment</code> includes data for that assessment as follows.</p> <ul> <li> <p> <b>Inactive assessments</b> - If Audit Manager collected evidence for your assessment before you changed it inactive, that evidence is included in the <code>InsightsByAssessment</code> counts for that day.</p> </li> <li> <p> <b>Deleted assessments</b> - If Audit Manager collected evidence for your assessment before you deleted it, that evidence isn't included in the <code>InsightsByAssessment</code> counts for that day.</p> </li> </ul> </note> */
	export interface InsightsByAssessmentFormProperties {
		noncompliantEvidenceCount: FormControl<number | null | undefined>,
		compliantEvidenceCount: FormControl<number | null | undefined>,
		inconclusiveEvidenceCount: FormControl<number | null | undefined>,
		assessmentControlsCountByNoncompliantEvidence: FormControl<number | null | undefined>,
		totalAssessmentControlsCount: FormControl<number | null | undefined>,
		lastUpdated: FormControl<Date | null | undefined>,
	}
	export function CreateInsightsByAssessmentFormGroup() {
		return new FormGroup<InsightsByAssessmentFormProperties>({
			noncompliantEvidenceCount: new FormControl<number | null | undefined>(undefined),
			compliantEvidenceCount: new FormControl<number | null | undefined>(undefined),
			inconclusiveEvidenceCount: new FormControl<number | null | undefined>(undefined),
			assessmentControlsCountByNoncompliantEvidence: new FormControl<number | null | undefined>(undefined),
			totalAssessmentControlsCount: new FormControl<number | null | undefined>(undefined),
			lastUpdated: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface GetOrganizationAdminAccountResponse {
		adminAccountId?: string;
		organizationId?: string;
	}
	export interface GetOrganizationAdminAccountResponseFormProperties {
		adminAccountId: FormControl<string | null | undefined>,
		organizationId: FormControl<string | null | undefined>,
	}
	export function CreateGetOrganizationAdminAccountResponseFormGroup() {
		return new FormGroup<GetOrganizationAdminAccountResponseFormProperties>({
			adminAccountId: new FormControl<string | null | undefined>(undefined),
			organizationId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetServicesInScopeResponse {
		serviceMetadata?: Array<ServiceMetadata>;
	}
	export interface GetServicesInScopeResponseFormProperties {
	}
	export function CreateGetServicesInScopeResponseFormGroup() {
		return new FormGroup<GetServicesInScopeResponseFormProperties>({
		});

	}


	/**  The metadata that's associated with the Amazon Web Service.  */
	export interface ServiceMetadata {
		name?: string;
		displayName?: string;
		description?: string;
		category?: string;
	}

	/**  The metadata that's associated with the Amazon Web Service.  */
	export interface ServiceMetadataFormProperties {
		name: FormControl<string | null | undefined>,
		displayName: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		category: FormControl<string | null | undefined>,
	}
	export function CreateServiceMetadataFormGroup() {
		return new FormGroup<ServiceMetadataFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			category: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetSettingsResponse {
		settings?: Settings;
	}
	export interface GetSettingsResponseFormProperties {
	}
	export function CreateGetSettingsResponseFormGroup() {
		return new FormGroup<GetSettingsResponseFormProperties>({
		});

	}


	/**  The settings object that holds all supported Audit Manager settings.  */
	export interface Settings {
		isAwsOrgEnabled?: boolean | null;
		snsTopic?: string;
		defaultAssessmentReportsDestination?: AssessmentReportsDestination;
		defaultProcessOwners?: Array<Role>;
		kmsKey?: string;
		evidenceFinderEnablement?: EvidenceFinderEnablement;
		deregistrationPolicy?: DeregistrationPolicy;
		defaultExportDestination?: DefaultExportDestination;
	}

	/**  The settings object that holds all supported Audit Manager settings.  */
	export interface SettingsFormProperties {
		isAwsOrgEnabled: FormControl<boolean | null | undefined>,
		snsTopic: FormControl<string | null | undefined>,
		kmsKey: FormControl<string | null | undefined>,
	}
	export function CreateSettingsFormGroup() {
		return new FormGroup<SettingsFormProperties>({
			isAwsOrgEnabled: new FormControl<boolean | null | undefined>(undefined),
			snsTopic: new FormControl<string | null | undefined>(undefined),
			kmsKey: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The settings object that specifies whether evidence finder is enabled. This object also describes the related event data store, and the backfill status for populating the event data store with evidence data. */
	export interface EvidenceFinderEnablement {
		eventDataStoreArn?: string;
		enablementStatus?: EvidenceFinderEnablementStatus;
		backfillStatus?: EvidenceFinderBackfillStatus;
		error?: string;
	}

	/** The settings object that specifies whether evidence finder is enabled. This object also describes the related event data store, and the backfill status for populating the event data store with evidence data. */
	export interface EvidenceFinderEnablementFormProperties {
		eventDataStoreArn: FormControl<string | null | undefined>,
		enablementStatus: FormControl<EvidenceFinderEnablementStatus | null | undefined>,
		backfillStatus: FormControl<EvidenceFinderBackfillStatus | null | undefined>,
		error: FormControl<string | null | undefined>,
	}
	export function CreateEvidenceFinderEnablementFormGroup() {
		return new FormGroup<EvidenceFinderEnablementFormProperties>({
			eventDataStoreArn: new FormControl<string | null | undefined>(undefined),
			enablementStatus: new FormControl<EvidenceFinderEnablementStatus | null | undefined>(undefined),
			backfillStatus: new FormControl<EvidenceFinderBackfillStatus | null | undefined>(undefined),
			error: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum EvidenceFinderEnablementStatus { ENABLED = 'ENABLED', DISABLED = 'DISABLED', ENABLE_IN_PROGRESS = 'ENABLE_IN_PROGRESS', DISABLE_IN_PROGRESS = 'DISABLE_IN_PROGRESS' }

	export enum EvidenceFinderBackfillStatus { NOT_STARTED = 'NOT_STARTED', IN_PROGRESS = 'IN_PROGRESS', COMPLETED = 'COMPLETED' }


	/** <p>The deregistration policy for the data that's stored in Audit Manager. You can use this attribute to determine how your data is handled when you <a href="https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_DeregisterAccount.html">deregister Audit Manager</a>.</p> <p>By default, Audit Manager retains evidence data for two years from the time of its creation. Other Audit Manager resources (including assessments, custom controls, and custom frameworks) remain in Audit Manager indefinitely, and are available if you <a href="https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_RegisterAccount.html">re-register Audit Manager</a> in the future. For more information about data retention, see <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/data-protection.html">Data Protection</a> in the <i>Audit Manager User Guide</i>.</p> <important> <p>If you choose to delete all data, this action permanently deletes all evidence data in your account within seven days. It also deletes all of the Audit Manager resources that you created, including assessments, custom controls, and custom frameworks. Your data will not be available if you re-register Audit Manager in the future.</p> </important> */
	export interface DeregistrationPolicy {
		deleteResources?: DeleteResources;
	}

	/** <p>The deregistration policy for the data that's stored in Audit Manager. You can use this attribute to determine how your data is handled when you <a href="https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_DeregisterAccount.html">deregister Audit Manager</a>.</p> <p>By default, Audit Manager retains evidence data for two years from the time of its creation. Other Audit Manager resources (including assessments, custom controls, and custom frameworks) remain in Audit Manager indefinitely, and are available if you <a href="https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_RegisterAccount.html">re-register Audit Manager</a> in the future. For more information about data retention, see <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/data-protection.html">Data Protection</a> in the <i>Audit Manager User Guide</i>.</p> <important> <p>If you choose to delete all data, this action permanently deletes all evidence data in your account within seven days. It also deletes all of the Audit Manager resources that you created, including assessments, custom controls, and custom frameworks. Your data will not be available if you re-register Audit Manager in the future.</p> </important> */
	export interface DeregistrationPolicyFormProperties {
		deleteResources: FormControl<DeleteResources | null | undefined>,
	}
	export function CreateDeregistrationPolicyFormGroup() {
		return new FormGroup<DeregistrationPolicyFormProperties>({
			deleteResources: new FormControl<DeleteResources | null | undefined>(undefined),
		});

	}

	export enum DeleteResources { ALL = 'ALL', DEFAULT = 'DEFAULT' }


	/** The default s3 bucket where Audit Manager saves the files that you export from evidence finder. */
	export interface DefaultExportDestination {
		destinationType?: AssessmentReportDestinationType;
		destination?: string;
	}

	/** The default s3 bucket where Audit Manager saves the files that you export from evidence finder. */
	export interface DefaultExportDestinationFormProperties {
		destinationType: FormControl<AssessmentReportDestinationType | null | undefined>,
		destination: FormControl<string | null | undefined>,
	}
	export function CreateDefaultExportDestinationFormGroup() {
		return new FormGroup<DefaultExportDestinationFormProperties>({
			destinationType: new FormControl<AssessmentReportDestinationType | null | undefined>(undefined),
			destination: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListAssessmentControlInsightsByControlDomainResponse {
		controlInsightsByAssessment?: Array<ControlInsightsMetadataByAssessmentItem>;
		nextToken?: string;
	}
	export interface ListAssessmentControlInsightsByControlDomainResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListAssessmentControlInsightsByControlDomainResponseFormGroup() {
		return new FormGroup<ListAssessmentControlInsightsByControlDomainResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>A summary of the latest analytics data for a specific control in a specific active assessment.</p> <p>Control insights are grouped by control domain, and ranked by the highest total count of non-compliant evidence. </p> */
	export interface ControlInsightsMetadataByAssessmentItem {
		name?: string;
		id?: string;
		evidenceInsights?: EvidenceInsights;
		controlSetName?: string;
		lastUpdated?: Date;
	}

	/** <p>A summary of the latest analytics data for a specific control in a specific active assessment.</p> <p>Control insights are grouped by control domain, and ranked by the highest total count of non-compliant evidence. </p> */
	export interface ControlInsightsMetadataByAssessmentItemFormProperties {
		name: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		controlSetName: FormControl<string | null | undefined>,
		lastUpdated: FormControl<Date | null | undefined>,
	}
	export function CreateControlInsightsMetadataByAssessmentItemFormGroup() {
		return new FormGroup<ControlInsightsMetadataByAssessmentItemFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			controlSetName: new FormControl<string | null | undefined>(undefined),
			lastUpdated: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** A breakdown of the latest compliance check status for the evidence in your Audit Manager assessments.  */
	export interface EvidenceInsights {
		noncompliantEvidenceCount?: number | null;
		compliantEvidenceCount?: number | null;
		inconclusiveEvidenceCount?: number | null;
	}

	/** A breakdown of the latest compliance check status for the evidence in your Audit Manager assessments.  */
	export interface EvidenceInsightsFormProperties {
		noncompliantEvidenceCount: FormControl<number | null | undefined>,
		compliantEvidenceCount: FormControl<number | null | undefined>,
		inconclusiveEvidenceCount: FormControl<number | null | undefined>,
	}
	export function CreateEvidenceInsightsFormGroup() {
		return new FormGroup<EvidenceInsightsFormProperties>({
			noncompliantEvidenceCount: new FormControl<number | null | undefined>(undefined),
			compliantEvidenceCount: new FormControl<number | null | undefined>(undefined),
			inconclusiveEvidenceCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListAssessmentFrameworkShareRequestsResponse {
		assessmentFrameworkShareRequests?: Array<AssessmentFrameworkShareRequest>;
		nextToken?: string;
	}
	export interface ListAssessmentFrameworkShareRequestsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListAssessmentFrameworkShareRequestsResponseFormGroup() {
		return new FormGroup<ListAssessmentFrameworkShareRequestsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  Represents a share request for a custom framework in Audit Manager.  */
	export interface AssessmentFrameworkShareRequest {
		id?: string;
		frameworkId?: string;
		frameworkName?: string;
		frameworkDescription?: string;
		status?: ShareRequestStatus;
		sourceAccount?: string;
		destinationAccount?: string;
		destinationRegion?: string;
		expirationTime?: Date;
		creationTime?: Date;
		lastUpdated?: Date;
		comment?: string;
		standardControlsCount?: number | null;
		customControlsCount?: number | null;
		complianceType?: string;
	}

	/**  Represents a share request for a custom framework in Audit Manager.  */
	export interface AssessmentFrameworkShareRequestFormProperties {
		id: FormControl<string | null | undefined>,
		frameworkId: FormControl<string | null | undefined>,
		frameworkName: FormControl<string | null | undefined>,
		frameworkDescription: FormControl<string | null | undefined>,
		status: FormControl<ShareRequestStatus | null | undefined>,
		sourceAccount: FormControl<string | null | undefined>,
		destinationAccount: FormControl<string | null | undefined>,
		destinationRegion: FormControl<string | null | undefined>,
		expirationTime: FormControl<Date | null | undefined>,
		creationTime: FormControl<Date | null | undefined>,
		lastUpdated: FormControl<Date | null | undefined>,
		comment: FormControl<string | null | undefined>,
		standardControlsCount: FormControl<number | null | undefined>,
		customControlsCount: FormControl<number | null | undefined>,
		complianceType: FormControl<string | null | undefined>,
	}
	export function CreateAssessmentFrameworkShareRequestFormGroup() {
		return new FormGroup<AssessmentFrameworkShareRequestFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			frameworkId: new FormControl<string | null | undefined>(undefined),
			frameworkName: new FormControl<string | null | undefined>(undefined),
			frameworkDescription: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<ShareRequestStatus | null | undefined>(undefined),
			sourceAccount: new FormControl<string | null | undefined>(undefined),
			destinationAccount: new FormControl<string | null | undefined>(undefined),
			destinationRegion: new FormControl<string | null | undefined>(undefined),
			expirationTime: new FormControl<Date | null | undefined>(undefined),
			creationTime: new FormControl<Date | null | undefined>(undefined),
			lastUpdated: new FormControl<Date | null | undefined>(undefined),
			comment: new FormControl<string | null | undefined>(undefined),
			standardControlsCount: new FormControl<number | null | undefined>(undefined),
			customControlsCount: new FormControl<number | null | undefined>(undefined),
			complianceType: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ShareRequestStatus { ACTIVE = 'ACTIVE', REPLICATING = 'REPLICATING', SHARED = 'SHARED', EXPIRING = 'EXPIRING', FAILED = 'FAILED', EXPIRED = 'EXPIRED', DECLINED = 'DECLINED', REVOKED = 'REVOKED' }

	export interface ListAssessmentFrameworksResponse {
		frameworkMetadataList?: Array<AssessmentFrameworkMetadata>;
		nextToken?: string;
	}
	export interface ListAssessmentFrameworksResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListAssessmentFrameworksResponseFormGroup() {
		return new FormGroup<ListAssessmentFrameworksResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  The metadata that's associated with a standard framework or a custom framework.  */
	export interface AssessmentFrameworkMetadata {
		arn?: string;
		id?: string;
		type?: FrameworkType;
		name?: string;
		description?: string;
		logo?: string;
		complianceType?: string;
		controlsCount?: number | null;
		controlSetsCount?: number | null;
		createdAt?: Date;
		lastUpdatedAt?: Date;
	}

	/**  The metadata that's associated with a standard framework or a custom framework.  */
	export interface AssessmentFrameworkMetadataFormProperties {
		arn: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		type: FormControl<FrameworkType | null | undefined>,
		name: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		logo: FormControl<string | null | undefined>,
		complianceType: FormControl<string | null | undefined>,
		controlsCount: FormControl<number | null | undefined>,
		controlSetsCount: FormControl<number | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
		lastUpdatedAt: FormControl<Date | null | undefined>,
	}
	export function CreateAssessmentFrameworkMetadataFormGroup() {
		return new FormGroup<AssessmentFrameworkMetadataFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<FrameworkType | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			logo: new FormControl<string | null | undefined>(undefined),
			complianceType: new FormControl<string | null | undefined>(undefined),
			controlsCount: new FormControl<number | null | undefined>(undefined),
			controlSetsCount: new FormControl<number | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
			lastUpdatedAt: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListAssessmentReportsResponse {
		assessmentReports?: Array<AssessmentReportMetadata>;
		nextToken?: string;
	}
	export interface ListAssessmentReportsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListAssessmentReportsResponseFormGroup() {
		return new FormGroup<ListAssessmentReportsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  The metadata objects that are associated with the specified assessment report.  */
	export interface AssessmentReportMetadata {
		id?: string;
		name?: string;
		description?: string;
		assessmentId?: string;
		assessmentName?: string;
		author?: string;
		status?: AssessmentReportStatus;
		creationTime?: Date;
	}

	/**  The metadata objects that are associated with the specified assessment report.  */
	export interface AssessmentReportMetadataFormProperties {
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		assessmentId: FormControl<string | null | undefined>,
		assessmentName: FormControl<string | null | undefined>,
		author: FormControl<string | null | undefined>,
		status: FormControl<AssessmentReportStatus | null | undefined>,
		creationTime: FormControl<Date | null | undefined>,
	}
	export function CreateAssessmentReportMetadataFormGroup() {
		return new FormGroup<AssessmentReportMetadataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			assessmentId: new FormControl<string | null | undefined>(undefined),
			assessmentName: new FormControl<string | null | undefined>(undefined),
			author: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<AssessmentReportStatus | null | undefined>(undefined),
			creationTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListAssessmentsResponse {
		assessmentMetadata?: Array<AssessmentMetadataItem>;
		nextToken?: string;
	}
	export interface ListAssessmentsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListAssessmentsResponseFormGroup() {
		return new FormGroup<ListAssessmentsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  A metadata object that's associated with an assessment in Audit Manager.  */
	export interface AssessmentMetadataItem {
		name?: string;
		id?: string;
		complianceType?: string;
		status?: AssessmentStatus;
		roles?: Array<Role>;
		delegations?: Array<Delegation>;
		creationTime?: Date;
		lastUpdated?: Date;
	}

	/**  A metadata object that's associated with an assessment in Audit Manager.  */
	export interface AssessmentMetadataItemFormProperties {
		name: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		complianceType: FormControl<string | null | undefined>,
		status: FormControl<AssessmentStatus | null | undefined>,
		creationTime: FormControl<Date | null | undefined>,
		lastUpdated: FormControl<Date | null | undefined>,
	}
	export function CreateAssessmentMetadataItemFormGroup() {
		return new FormGroup<AssessmentMetadataItemFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			complianceType: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<AssessmentStatus | null | undefined>(undefined),
			creationTime: new FormControl<Date | null | undefined>(undefined),
			lastUpdated: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListControlDomainInsightsResponse {
		controlDomainInsights?: Array<ControlDomainInsights>;
		nextToken?: string;
	}
	export interface ListControlDomainInsightsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListControlDomainInsightsResponseFormGroup() {
		return new FormGroup<ListControlDomainInsightsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>A summary of the latest analytics data for a specific control domain.</p> <p>Control domain insights are grouped by control domain, and ranked by the highest total count of non-compliant evidence.</p> */
	export interface ControlDomainInsights {
		name?: string;
		id?: string;
		controlsCountByNoncompliantEvidence?: number | null;
		totalControlsCount?: number | null;
		evidenceInsights?: EvidenceInsights;
		lastUpdated?: Date;
	}

	/** <p>A summary of the latest analytics data for a specific control domain.</p> <p>Control domain insights are grouped by control domain, and ranked by the highest total count of non-compliant evidence.</p> */
	export interface ControlDomainInsightsFormProperties {
		name: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		controlsCountByNoncompliantEvidence: FormControl<number | null | undefined>,
		totalControlsCount: FormControl<number | null | undefined>,
		lastUpdated: FormControl<Date | null | undefined>,
	}
	export function CreateControlDomainInsightsFormGroup() {
		return new FormGroup<ControlDomainInsightsFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			controlsCountByNoncompliantEvidence: new FormControl<number | null | undefined>(undefined),
			totalControlsCount: new FormControl<number | null | undefined>(undefined),
			lastUpdated: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListControlDomainInsightsByAssessmentResponse {
		controlDomainInsights?: Array<ControlDomainInsights>;
		nextToken?: string;
	}
	export interface ListControlDomainInsightsByAssessmentResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListControlDomainInsightsByAssessmentResponseFormGroup() {
		return new FormGroup<ListControlDomainInsightsByAssessmentResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListControlInsightsByControlDomainResponse {
		controlInsightsMetadata?: Array<ControlInsightsMetadataItem>;
		nextToken?: string;
	}
	export interface ListControlInsightsByControlDomainResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListControlInsightsByControlDomainResponseFormGroup() {
		return new FormGroup<ListControlInsightsByControlDomainResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>A summary of the latest analytics data for a specific control. </p> <p>This data reflects the total counts for the specified control across all active assessments. Control insights are grouped by control domain, and ranked by the highest total count of non-compliant evidence.</p> */
	export interface ControlInsightsMetadataItem {
		name?: string;
		id?: string;
		evidenceInsights?: EvidenceInsights;
		lastUpdated?: Date;
	}

	/** <p>A summary of the latest analytics data for a specific control. </p> <p>This data reflects the total counts for the specified control across all active assessments. Control insights are grouped by control domain, and ranked by the highest total count of non-compliant evidence.</p> */
	export interface ControlInsightsMetadataItemFormProperties {
		name: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		lastUpdated: FormControl<Date | null | undefined>,
	}
	export function CreateControlInsightsMetadataItemFormGroup() {
		return new FormGroup<ControlInsightsMetadataItemFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			lastUpdated: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListControlsResponse {
		controlMetadataList?: Array<ControlMetadata>;
		nextToken?: string;
	}
	export interface ListControlsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListControlsResponseFormGroup() {
		return new FormGroup<ListControlsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  The metadata that's associated with the standard control or custom control.  */
	export interface ControlMetadata {
		arn?: string;
		id?: string;
		name?: string;
		controlSources?: string;
		createdAt?: Date;
		lastUpdatedAt?: Date;
	}

	/**  The metadata that's associated with the standard control or custom control.  */
	export interface ControlMetadataFormProperties {
		arn: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		controlSources: FormControl<string | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
		lastUpdatedAt: FormControl<Date | null | undefined>,
	}
	export function CreateControlMetadataFormGroup() {
		return new FormGroup<ControlMetadataFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			controlSources: new FormControl<string | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
			lastUpdatedAt: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListKeywordsForDataSourceResponse {
		keywords?: Array<string>;
		nextToken?: string;
	}
	export interface ListKeywordsForDataSourceResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListKeywordsForDataSourceResponseFormGroup() {
		return new FormGroup<ListKeywordsForDataSourceResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListNotificationsResponse {
		notifications?: Array<Notification>;
		nextToken?: string;
	}
	export interface ListNotificationsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListNotificationsResponseFormGroup() {
		return new FormGroup<ListNotificationsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  The notification that informs a user of an update in Audit Manager. For example, this includes the notification that's sent when a control set is delegated for review.  */
	export interface Notification {
		id?: string;
		assessmentId?: string;
		assessmentName?: string;
		controlSetId?: string;
		controlSetName?: string;
		description?: string;
		eventTime?: Date;
		source?: string;
	}

	/**  The notification that informs a user of an update in Audit Manager. For example, this includes the notification that's sent when a control set is delegated for review.  */
	export interface NotificationFormProperties {
		id: FormControl<string | null | undefined>,
		assessmentId: FormControl<string | null | undefined>,
		assessmentName: FormControl<string | null | undefined>,
		controlSetId: FormControl<string | null | undefined>,
		controlSetName: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		eventTime: FormControl<Date | null | undefined>,
		source: FormControl<string | null | undefined>,
	}
	export function CreateNotificationFormGroup() {
		return new FormGroup<NotificationFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			assessmentId: new FormControl<string | null | undefined>(undefined),
			assessmentName: new FormControl<string | null | undefined>(undefined),
			controlSetId: new FormControl<string | null | undefined>(undefined),
			controlSetName: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			eventTime: new FormControl<Date | null | undefined>(undefined),
			source: new FormControl<string | null | undefined>(undefined),
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

	export interface RegisterAccountResponse {
		status?: AccountStatus;
	}
	export interface RegisterAccountResponseFormProperties {
		status: FormControl<AccountStatus | null | undefined>,
	}
	export function CreateRegisterAccountResponseFormGroup() {
		return new FormGroup<RegisterAccountResponseFormProperties>({
			status: new FormControl<AccountStatus | null | undefined>(undefined),
		});

	}

	export interface RegisterOrganizationAdminAccountResponse {
		adminAccountId?: string;
		organizationId?: string;
	}
	export interface RegisterOrganizationAdminAccountResponseFormProperties {
		adminAccountId: FormControl<string | null | undefined>,
		organizationId: FormControl<string | null | undefined>,
	}
	export function CreateRegisterOrganizationAdminAccountResponseFormGroup() {
		return new FormGroup<RegisterOrganizationAdminAccountResponseFormProperties>({
			adminAccountId: new FormControl<string | null | undefined>(undefined),
			organizationId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StartAssessmentFrameworkShareResponse {
		assessmentFrameworkShareRequest?: AssessmentFrameworkShareRequest;
	}
	export interface StartAssessmentFrameworkShareResponseFormProperties {
	}
	export function CreateStartAssessmentFrameworkShareResponseFormGroup() {
		return new FormGroup<StartAssessmentFrameworkShareResponseFormProperties>({
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

	export interface UpdateAssessmentResponse {
		assessment?: Assessment;
	}
	export interface UpdateAssessmentResponseFormProperties {
	}
	export function CreateUpdateAssessmentResponseFormGroup() {
		return new FormGroup<UpdateAssessmentResponseFormProperties>({
		});

	}

	export interface UpdateAssessmentControlResponse {
		control?: AssessmentControl;
	}
	export interface UpdateAssessmentControlResponseFormProperties {
	}
	export function CreateUpdateAssessmentControlResponseFormGroup() {
		return new FormGroup<UpdateAssessmentControlResponseFormProperties>({
		});

	}

	export interface UpdateAssessmentControlSetStatusResponse {
		controlSet?: AssessmentControlSet;
	}
	export interface UpdateAssessmentControlSetStatusResponseFormProperties {
	}
	export function CreateUpdateAssessmentControlSetStatusResponseFormGroup() {
		return new FormGroup<UpdateAssessmentControlSetStatusResponseFormProperties>({
		});

	}

	export interface UpdateAssessmentFrameworkResponse {
		framework?: Framework;
	}
	export interface UpdateAssessmentFrameworkResponseFormProperties {
	}
	export function CreateUpdateAssessmentFrameworkResponseFormGroup() {
		return new FormGroup<UpdateAssessmentFrameworkResponseFormProperties>({
		});

	}


	/**  A <code>controlSet</code> entity that represents a collection of controls in Audit Manager. This doesn't contain the control set ID.  */
	export interface UpdateAssessmentFrameworkControlSet {
		id?: string;

		/** Required */
		name: string;

		/** Required */
		controls: Array<CreateAssessmentFrameworkControl>;
	}

	/**  A <code>controlSet</code> entity that represents a collection of controls in Audit Manager. This doesn't contain the control set ID.  */
	export interface UpdateAssessmentFrameworkControlSetFormProperties {
		id: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
	}
	export function CreateUpdateAssessmentFrameworkControlSetFormGroup() {
		return new FormGroup<UpdateAssessmentFrameworkControlSetFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateAssessmentFrameworkShareResponse {
		assessmentFrameworkShareRequest?: AssessmentFrameworkShareRequest;
	}
	export interface UpdateAssessmentFrameworkShareResponseFormProperties {
	}
	export function CreateUpdateAssessmentFrameworkShareResponseFormGroup() {
		return new FormGroup<UpdateAssessmentFrameworkShareResponseFormProperties>({
		});

	}

	export interface UpdateAssessmentStatusResponse {
		assessment?: Assessment;
	}
	export interface UpdateAssessmentStatusResponseFormProperties {
	}
	export function CreateUpdateAssessmentStatusResponseFormGroup() {
		return new FormGroup<UpdateAssessmentStatusResponseFormProperties>({
		});

	}

	export interface UpdateControlResponse {
		control?: Control;
	}
	export interface UpdateControlResponseFormProperties {
	}
	export function CreateUpdateControlResponseFormGroup() {
		return new FormGroup<UpdateControlResponseFormProperties>({
		});

	}

	export interface UpdateSettingsResponse {
		settings?: Settings;
	}
	export interface UpdateSettingsResponseFormProperties {
	}
	export function CreateUpdateSettingsResponseFormGroup() {
		return new FormGroup<UpdateSettingsResponseFormProperties>({
		});

	}

	export enum ExportDestinationType { S3 = 'S3' }

	export interface ValidateAssessmentReportIntegrityResponse {
		signatureValid?: boolean | null;
		signatureAlgorithm?: string;
		signatureDateTime?: string;
		signatureKeyId?: string;
		validationErrors?: Array<string>;
	}
	export interface ValidateAssessmentReportIntegrityResponseFormProperties {
		signatureValid: FormControl<boolean | null | undefined>,
		signatureAlgorithm: FormControl<string | null | undefined>,
		signatureDateTime: FormControl<string | null | undefined>,
		signatureKeyId: FormControl<string | null | undefined>,
	}
	export function CreateValidateAssessmentReportIntegrityResponseFormGroup() {
		return new FormGroup<ValidateAssessmentReportIntegrityResponseFormProperties>({
			signatureValid: new FormControl<boolean | null | undefined>(undefined),
			signatureAlgorithm: new FormControl<string | null | undefined>(undefined),
			signatureDateTime: new FormControl<string | null | undefined>(undefined),
			signatureKeyId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AssociateAssessmentReportEvidenceFolderRequest {

		/** Required */
		evidenceFolderId: string;
	}
	export interface AssociateAssessmentReportEvidenceFolderRequestFormProperties {

		/** Required */
		evidenceFolderId: FormControl<string | null | undefined>,
	}
	export function CreateAssociateAssessmentReportEvidenceFolderRequestFormGroup() {
		return new FormGroup<AssociateAssessmentReportEvidenceFolderRequestFormProperties>({
			evidenceFolderId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface BatchAssociateAssessmentReportEvidenceRequest {

		/** Required */
		evidenceFolderId: string;

		/** Required */
		evidenceIds: Array<string>;
	}
	export interface BatchAssociateAssessmentReportEvidenceRequestFormProperties {

		/** Required */
		evidenceFolderId: FormControl<string | null | undefined>,
	}
	export function CreateBatchAssociateAssessmentReportEvidenceRequestFormGroup() {
		return new FormGroup<BatchAssociateAssessmentReportEvidenceRequestFormProperties>({
			evidenceFolderId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface BatchCreateDelegationByAssessmentRequest {

		/** Required */
		createDelegationRequests: Array<CreateDelegationRequest>;
	}
	export interface BatchCreateDelegationByAssessmentRequestFormProperties {
	}
	export function CreateBatchCreateDelegationByAssessmentRequestFormGroup() {
		return new FormGroup<BatchCreateDelegationByAssessmentRequestFormProperties>({
		});

	}

	export interface BatchDeleteDelegationByAssessmentRequest {

		/** Required */
		delegationIds: Array<string>;
	}
	export interface BatchDeleteDelegationByAssessmentRequestFormProperties {
	}
	export function CreateBatchDeleteDelegationByAssessmentRequestFormGroup() {
		return new FormGroup<BatchDeleteDelegationByAssessmentRequestFormProperties>({
		});

	}

	export interface BatchDisassociateAssessmentReportEvidenceRequest {

		/** Required */
		evidenceFolderId: string;

		/** Required */
		evidenceIds: Array<string>;
	}
	export interface BatchDisassociateAssessmentReportEvidenceRequestFormProperties {

		/** Required */
		evidenceFolderId: FormControl<string | null | undefined>,
	}
	export function CreateBatchDisassociateAssessmentReportEvidenceRequestFormGroup() {
		return new FormGroup<BatchDisassociateAssessmentReportEvidenceRequestFormProperties>({
			evidenceFolderId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface BatchImportEvidenceToAssessmentControlRequest {

		/** Required */
		manualEvidence: Array<ManualEvidence>;
	}
	export interface BatchImportEvidenceToAssessmentControlRequestFormProperties {
	}
	export function CreateBatchImportEvidenceToAssessmentControlRequestFormGroup() {
		return new FormGroup<BatchImportEvidenceToAssessmentControlRequestFormProperties>({
		});

	}

	export enum ControlType { Standard = 'Standard', Custom = 'Custom' }

	export interface CreateAssessmentFrameworkRequest {

		/** Required */
		name: string;
		description?: string;
		complianceType?: string;

		/** Required */
		controlSets: Array<CreateAssessmentFrameworkControlSet>;
		tags?: TagMap;
	}
	export interface CreateAssessmentFrameworkRequestFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		complianceType: FormControl<string | null | undefined>,
	}
	export function CreateCreateAssessmentFrameworkRequestFormGroup() {
		return new FormGroup<CreateAssessmentFrameworkRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
			complianceType: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateAssessmentReportRequest {

		/** Required */
		name: string;
		description?: string;
		queryStatement?: string;
	}
	export interface CreateAssessmentReportRequestFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		queryStatement: FormControl<string | null | undefined>,
	}
	export function CreateCreateAssessmentReportRequestFormGroup() {
		return new FormGroup<CreateAssessmentReportRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
			queryStatement: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateAssessmentRequest {

		/** Required */
		name: string;
		description?: string;

		/** Required */
		assessmentReportsDestination: AssessmentReportsDestination;

		/**
		 * The wrapper that contains the Amazon Web Services accounts and services that are in scope for the assessment.
		 * Required
		 */
		scope: Scope;

		/** Required */
		roles: Array<Role>;

		/** Required */
		frameworkId: string;
		tags?: TagMap;
	}
	export interface CreateAssessmentRequestFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,

		/** Required */
		frameworkId: FormControl<string | null | undefined>,
	}
	export function CreateCreateAssessmentRequestFormGroup() {
		return new FormGroup<CreateAssessmentRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
			frameworkId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateControlRequest {

		/** Required */
		name: string;
		description?: string;
		testingInformation?: string;
		actionPlanTitle?: string;
		actionPlanInstructions?: string;

		/** Required */
		controlMappingSources: Array<CreateControlMappingSource>;
		tags?: TagMap;
	}
	export interface CreateControlRequestFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		testingInformation: FormControl<string | null | undefined>,
		actionPlanTitle: FormControl<string | null | undefined>,
		actionPlanInstructions: FormControl<string | null | undefined>,
	}
	export function CreateCreateControlRequestFormGroup() {
		return new FormGroup<CreateControlRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
			testingInformation: new FormControl<string | null | undefined>(undefined),
			actionPlanTitle: new FormControl<string | null | undefined>(undefined),
			actionPlanInstructions: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteAssessmentFrameworkRequest {
	}
	export interface DeleteAssessmentFrameworkRequestFormProperties {
	}
	export function CreateDeleteAssessmentFrameworkRequestFormGroup() {
		return new FormGroup<DeleteAssessmentFrameworkRequestFormProperties>({
		});

	}

	export enum ShareRequestType { SENT = 'SENT', RECEIVED = 'RECEIVED' }

	export interface DeleteAssessmentFrameworkShareRequest {
	}
	export interface DeleteAssessmentFrameworkShareRequestFormProperties {
	}
	export function CreateDeleteAssessmentFrameworkShareRequestFormGroup() {
		return new FormGroup<DeleteAssessmentFrameworkShareRequestFormProperties>({
		});

	}

	export interface DeleteAssessmentReportRequest {
	}
	export interface DeleteAssessmentReportRequestFormProperties {
	}
	export function CreateDeleteAssessmentReportRequestFormGroup() {
		return new FormGroup<DeleteAssessmentReportRequestFormProperties>({
		});

	}

	export interface DeleteAssessmentRequest {
	}
	export interface DeleteAssessmentRequestFormProperties {
	}
	export function CreateDeleteAssessmentRequestFormGroup() {
		return new FormGroup<DeleteAssessmentRequestFormProperties>({
		});

	}

	export interface DeleteControlRequest {
	}
	export interface DeleteControlRequestFormProperties {
	}
	export function CreateDeleteControlRequestFormGroup() {
		return new FormGroup<DeleteControlRequestFormProperties>({
		});

	}

	export interface DeregisterAccountRequest {
	}
	export interface DeregisterAccountRequestFormProperties {
	}
	export function CreateDeregisterAccountRequestFormGroup() {
		return new FormGroup<DeregisterAccountRequestFormProperties>({
		});

	}

	export interface DeregisterOrganizationAdminAccountRequest {
		adminAccountId?: string;
	}
	export interface DeregisterOrganizationAdminAccountRequestFormProperties {
		adminAccountId: FormControl<string | null | undefined>,
	}
	export function CreateDeregisterOrganizationAdminAccountRequestFormGroup() {
		return new FormGroup<DeregisterOrganizationAdminAccountRequestFormProperties>({
			adminAccountId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DisassociateAssessmentReportEvidenceFolderRequest {

		/** Required */
		evidenceFolderId: string;
	}
	export interface DisassociateAssessmentReportEvidenceFolderRequestFormProperties {

		/** Required */
		evidenceFolderId: FormControl<string | null | undefined>,
	}
	export function CreateDisassociateAssessmentReportEvidenceFolderRequestFormGroup() {
		return new FormGroup<DisassociateAssessmentReportEvidenceFolderRequestFormProperties>({
			evidenceFolderId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetAccountStatusRequest {
	}
	export interface GetAccountStatusRequestFormProperties {
	}
	export function CreateGetAccountStatusRequestFormGroup() {
		return new FormGroup<GetAccountStatusRequestFormProperties>({
		});

	}

	export interface GetAssessmentFrameworkRequest {
	}
	export interface GetAssessmentFrameworkRequestFormProperties {
	}
	export function CreateGetAssessmentFrameworkRequestFormGroup() {
		return new FormGroup<GetAssessmentFrameworkRequestFormProperties>({
		});

	}

	export interface GetAssessmentReportUrlRequest {
	}
	export interface GetAssessmentReportUrlRequestFormProperties {
	}
	export function CreateGetAssessmentReportUrlRequestFormGroup() {
		return new FormGroup<GetAssessmentReportUrlRequestFormProperties>({
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

	export interface GetChangeLogsRequest {
	}
	export interface GetChangeLogsRequestFormProperties {
	}
	export function CreateGetChangeLogsRequestFormGroup() {
		return new FormGroup<GetChangeLogsRequestFormProperties>({
		});

	}

	export interface GetControlRequest {
	}
	export interface GetControlRequestFormProperties {
	}
	export function CreateGetControlRequestFormGroup() {
		return new FormGroup<GetControlRequestFormProperties>({
		});

	}

	export interface GetDelegationsRequest {
	}
	export interface GetDelegationsRequestFormProperties {
	}
	export function CreateGetDelegationsRequestFormGroup() {
		return new FormGroup<GetDelegationsRequestFormProperties>({
		});

	}

	export interface GetEvidenceByEvidenceFolderRequest {
	}
	export interface GetEvidenceByEvidenceFolderRequestFormProperties {
	}
	export function CreateGetEvidenceByEvidenceFolderRequestFormGroup() {
		return new FormGroup<GetEvidenceByEvidenceFolderRequestFormProperties>({
		});

	}

	export interface GetEvidenceFileUploadUrlRequest {
	}
	export interface GetEvidenceFileUploadUrlRequestFormProperties {
	}
	export function CreateGetEvidenceFileUploadUrlRequestFormGroup() {
		return new FormGroup<GetEvidenceFileUploadUrlRequestFormProperties>({
		});

	}

	export interface GetEvidenceFolderRequest {
	}
	export interface GetEvidenceFolderRequestFormProperties {
	}
	export function CreateGetEvidenceFolderRequestFormGroup() {
		return new FormGroup<GetEvidenceFolderRequestFormProperties>({
		});

	}

	export interface GetEvidenceFoldersByAssessmentControlRequest {
	}
	export interface GetEvidenceFoldersByAssessmentControlRequestFormProperties {
	}
	export function CreateGetEvidenceFoldersByAssessmentControlRequestFormGroup() {
		return new FormGroup<GetEvidenceFoldersByAssessmentControlRequestFormProperties>({
		});

	}

	export interface GetEvidenceFoldersByAssessmentRequest {
	}
	export interface GetEvidenceFoldersByAssessmentRequestFormProperties {
	}
	export function CreateGetEvidenceFoldersByAssessmentRequestFormGroup() {
		return new FormGroup<GetEvidenceFoldersByAssessmentRequestFormProperties>({
		});

	}

	export interface GetEvidenceRequest {
	}
	export interface GetEvidenceRequestFormProperties {
	}
	export function CreateGetEvidenceRequestFormGroup() {
		return new FormGroup<GetEvidenceRequestFormProperties>({
		});

	}

	export interface GetInsightsByAssessmentRequest {
	}
	export interface GetInsightsByAssessmentRequestFormProperties {
	}
	export function CreateGetInsightsByAssessmentRequestFormGroup() {
		return new FormGroup<GetInsightsByAssessmentRequestFormProperties>({
		});

	}

	export interface GetInsightsRequest {
	}
	export interface GetInsightsRequestFormProperties {
	}
	export function CreateGetInsightsRequestFormGroup() {
		return new FormGroup<GetInsightsRequestFormProperties>({
		});

	}

	export interface GetOrganizationAdminAccountRequest {
	}
	export interface GetOrganizationAdminAccountRequestFormProperties {
	}
	export function CreateGetOrganizationAdminAccountRequestFormGroup() {
		return new FormGroup<GetOrganizationAdminAccountRequestFormProperties>({
		});

	}

	export interface GetServicesInScopeRequest {
	}
	export interface GetServicesInScopeRequestFormProperties {
	}
	export function CreateGetServicesInScopeRequestFormGroup() {
		return new FormGroup<GetServicesInScopeRequestFormProperties>({
		});

	}

	export enum SettingAttribute { ALL = 'ALL', IS_AWS_ORG_ENABLED = 'IS_AWS_ORG_ENABLED', SNS_TOPIC = 'SNS_TOPIC', DEFAULT_ASSESSMENT_REPORTS_DESTINATION = 'DEFAULT_ASSESSMENT_REPORTS_DESTINATION', DEFAULT_PROCESS_OWNERS = 'DEFAULT_PROCESS_OWNERS', EVIDENCE_FINDER_ENABLEMENT = 'EVIDENCE_FINDER_ENABLEMENT', DEREGISTRATION_POLICY = 'DEREGISTRATION_POLICY', DEFAULT_EXPORT_DESTINATION = 'DEFAULT_EXPORT_DESTINATION' }

	export interface GetSettingsRequest {
	}
	export interface GetSettingsRequestFormProperties {
	}
	export function CreateGetSettingsRequestFormGroup() {
		return new FormGroup<GetSettingsRequestFormProperties>({
		});

	}

	export interface ListAssessmentControlInsightsByControlDomainRequest {
	}
	export interface ListAssessmentControlInsightsByControlDomainRequestFormProperties {
	}
	export function CreateListAssessmentControlInsightsByControlDomainRequestFormGroup() {
		return new FormGroup<ListAssessmentControlInsightsByControlDomainRequestFormProperties>({
		});

	}

	export interface ListAssessmentFrameworkShareRequestsRequest {
	}
	export interface ListAssessmentFrameworkShareRequestsRequestFormProperties {
	}
	export function CreateListAssessmentFrameworkShareRequestsRequestFormGroup() {
		return new FormGroup<ListAssessmentFrameworkShareRequestsRequestFormProperties>({
		});

	}

	export interface ListAssessmentFrameworksRequest {
	}
	export interface ListAssessmentFrameworksRequestFormProperties {
	}
	export function CreateListAssessmentFrameworksRequestFormGroup() {
		return new FormGroup<ListAssessmentFrameworksRequestFormProperties>({
		});

	}

	export interface ListAssessmentReportsRequest {
	}
	export interface ListAssessmentReportsRequestFormProperties {
	}
	export function CreateListAssessmentReportsRequestFormGroup() {
		return new FormGroup<ListAssessmentReportsRequestFormProperties>({
		});

	}

	export interface ListAssessmentsRequest {
	}
	export interface ListAssessmentsRequestFormProperties {
	}
	export function CreateListAssessmentsRequestFormGroup() {
		return new FormGroup<ListAssessmentsRequestFormProperties>({
		});

	}

	export interface ListControlDomainInsightsByAssessmentRequest {
	}
	export interface ListControlDomainInsightsByAssessmentRequestFormProperties {
	}
	export function CreateListControlDomainInsightsByAssessmentRequestFormGroup() {
		return new FormGroup<ListControlDomainInsightsByAssessmentRequestFormProperties>({
		});

	}

	export interface ListControlDomainInsightsRequest {
	}
	export interface ListControlDomainInsightsRequestFormProperties {
	}
	export function CreateListControlDomainInsightsRequestFormGroup() {
		return new FormGroup<ListControlDomainInsightsRequestFormProperties>({
		});

	}

	export interface ListControlInsightsByControlDomainRequest {
	}
	export interface ListControlInsightsByControlDomainRequestFormProperties {
	}
	export function CreateListControlInsightsByControlDomainRequestFormGroup() {
		return new FormGroup<ListControlInsightsByControlDomainRequestFormProperties>({
		});

	}

	export interface ListControlsRequest {
	}
	export interface ListControlsRequestFormProperties {
	}
	export function CreateListControlsRequestFormGroup() {
		return new FormGroup<ListControlsRequestFormProperties>({
		});

	}

	export interface ListKeywordsForDataSourceRequest {
	}
	export interface ListKeywordsForDataSourceRequestFormProperties {
	}
	export function CreateListKeywordsForDataSourceRequestFormGroup() {
		return new FormGroup<ListKeywordsForDataSourceRequestFormProperties>({
		});

	}

	export interface ListNotificationsRequest {
	}
	export interface ListNotificationsRequestFormProperties {
	}
	export function CreateListNotificationsRequestFormGroup() {
		return new FormGroup<ListNotificationsRequestFormProperties>({
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

	export interface RegisterAccountRequest {
		kmsKey?: string;
		delegatedAdminAccount?: string;
	}
	export interface RegisterAccountRequestFormProperties {
		kmsKey: FormControl<string | null | undefined>,
		delegatedAdminAccount: FormControl<string | null | undefined>,
	}
	export function CreateRegisterAccountRequestFormGroup() {
		return new FormGroup<RegisterAccountRequestFormProperties>({
			kmsKey: new FormControl<string | null | undefined>(undefined),
			delegatedAdminAccount: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RegisterOrganizationAdminAccountRequest {

		/** Required */
		adminAccountId: string;
	}
	export interface RegisterOrganizationAdminAccountRequestFormProperties {

		/** Required */
		adminAccountId: FormControl<string | null | undefined>,
	}
	export function CreateRegisterOrganizationAdminAccountRequestFormGroup() {
		return new FormGroup<RegisterOrganizationAdminAccountRequestFormProperties>({
			adminAccountId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ShareRequestAction { ACCEPT = 'ACCEPT', DECLINE = 'DECLINE', REVOKE = 'REVOKE' }

	export interface StartAssessmentFrameworkShareRequest {

		/** Required */
		destinationAccount: string;

		/** Required */
		destinationRegion: string;
		comment?: string;
	}
	export interface StartAssessmentFrameworkShareRequestFormProperties {

		/** Required */
		destinationAccount: FormControl<string | null | undefined>,

		/** Required */
		destinationRegion: FormControl<string | null | undefined>,
		comment: FormControl<string | null | undefined>,
	}
	export function CreateStartAssessmentFrameworkShareRequestFormGroup() {
		return new FormGroup<StartAssessmentFrameworkShareRequestFormProperties>({
			destinationAccount: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			destinationRegion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			comment: new FormControl<string | null | undefined>(undefined),
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

	export interface UpdateAssessmentControlRequest {
		controlStatus?: ControlStatus;
		commentBody?: string;
	}
	export interface UpdateAssessmentControlRequestFormProperties {
		controlStatus: FormControl<ControlStatus | null | undefined>,
		commentBody: FormControl<string | null | undefined>,
	}
	export function CreateUpdateAssessmentControlRequestFormGroup() {
		return new FormGroup<UpdateAssessmentControlRequestFormProperties>({
			controlStatus: new FormControl<ControlStatus | null | undefined>(undefined),
			commentBody: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateAssessmentControlSetStatusRequest {

		/** Required */
		status: ControlSetStatus;

		/** Required */
		comment: string;
	}
	export interface UpdateAssessmentControlSetStatusRequestFormProperties {

		/** Required */
		status: FormControl<ControlSetStatus | null | undefined>,

		/** Required */
		comment: FormControl<string | null | undefined>,
	}
	export function CreateUpdateAssessmentControlSetStatusRequestFormGroup() {
		return new FormGroup<UpdateAssessmentControlSetStatusRequestFormProperties>({
			status: new FormControl<ControlSetStatus | null | undefined>(undefined, [Validators.required]),
			comment: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateAssessmentFrameworkRequest {

		/** Required */
		name: string;
		description?: string;
		complianceType?: string;

		/** Required */
		controlSets: Array<UpdateAssessmentFrameworkControlSet>;
	}
	export interface UpdateAssessmentFrameworkRequestFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		complianceType: FormControl<string | null | undefined>,
	}
	export function CreateUpdateAssessmentFrameworkRequestFormGroup() {
		return new FormGroup<UpdateAssessmentFrameworkRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
			complianceType: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateAssessmentFrameworkShareRequest {

		/** Required */
		requestType: ShareRequestType;

		/** Required */
		action: ShareRequestAction;
	}
	export interface UpdateAssessmentFrameworkShareRequestFormProperties {

		/** Required */
		requestType: FormControl<ShareRequestType | null | undefined>,

		/** Required */
		action: FormControl<ShareRequestAction | null | undefined>,
	}
	export function CreateUpdateAssessmentFrameworkShareRequestFormGroup() {
		return new FormGroup<UpdateAssessmentFrameworkShareRequestFormProperties>({
			requestType: new FormControl<ShareRequestType | null | undefined>(undefined, [Validators.required]),
			action: new FormControl<ShareRequestAction | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateAssessmentRequest {
		assessmentName?: string;
		assessmentDescription?: string;

		/** Required */
		scope: Scope;
		assessmentReportsDestination?: AssessmentReportsDestination;
		roles?: Array<Role>;
	}
	export interface UpdateAssessmentRequestFormProperties {
		assessmentName: FormControl<string | null | undefined>,
		assessmentDescription: FormControl<string | null | undefined>,
	}
	export function CreateUpdateAssessmentRequestFormGroup() {
		return new FormGroup<UpdateAssessmentRequestFormProperties>({
			assessmentName: new FormControl<string | null | undefined>(undefined),
			assessmentDescription: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateAssessmentStatusRequest {

		/** Required */
		status: AssessmentStatus;
	}
	export interface UpdateAssessmentStatusRequestFormProperties {

		/** Required */
		status: FormControl<AssessmentStatus | null | undefined>,
	}
	export function CreateUpdateAssessmentStatusRequestFormGroup() {
		return new FormGroup<UpdateAssessmentStatusRequestFormProperties>({
			status: new FormControl<AssessmentStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateControlRequest {

		/** Required */
		name: string;
		description?: string;
		testingInformation?: string;
		actionPlanTitle?: string;
		actionPlanInstructions?: string;

		/** Required */
		controlMappingSources: Array<ControlMappingSource>;
	}
	export interface UpdateControlRequestFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		testingInformation: FormControl<string | null | undefined>,
		actionPlanTitle: FormControl<string | null | undefined>,
		actionPlanInstructions: FormControl<string | null | undefined>,
	}
	export function CreateUpdateControlRequestFormGroup() {
		return new FormGroup<UpdateControlRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
			testingInformation: new FormControl<string | null | undefined>(undefined),
			actionPlanTitle: new FormControl<string | null | undefined>(undefined),
			actionPlanInstructions: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateSettingsRequest {
		snsTopic?: string;
		defaultAssessmentReportsDestination?: AssessmentReportsDestination;
		defaultProcessOwners?: Array<Role>;
		kmsKey?: string;
		evidenceFinderEnabled?: boolean | null;
		deregistrationPolicy?: DeregistrationPolicy;
		defaultExportDestination?: DefaultExportDestination;
	}
	export interface UpdateSettingsRequestFormProperties {
		snsTopic: FormControl<string | null | undefined>,
		kmsKey: FormControl<string | null | undefined>,
		evidenceFinderEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateSettingsRequestFormGroup() {
		return new FormGroup<UpdateSettingsRequestFormProperties>({
			snsTopic: new FormControl<string | null | undefined>(undefined),
			kmsKey: new FormControl<string | null | undefined>(undefined),
			evidenceFinderEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface ValidateAssessmentReportIntegrityRequest {

		/** Required */
		s3RelativePath: string;
	}
	export interface ValidateAssessmentReportIntegrityRequestFormProperties {

		/** Required */
		s3RelativePath: FormControl<string | null | undefined>,
	}
	export function CreateValidateAssessmentReportIntegrityRequestFormGroup() {
		return new FormGroup<ValidateAssessmentReportIntegrityRequestFormProperties>({
			s3RelativePath: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Associates an evidence folder to an assessment report in an Audit Manager assessment.
		 * Put assessments/{assessmentId}/associateToAssessmentReport
		 * @param {string} assessmentId  The identifier for the assessment. 
		 * @return {AssociateAssessmentReportEvidenceFolderResponse} Success
		 */
		AssociateAssessmentReportEvidenceFolder(assessmentId: string, requestBody: AssociateAssessmentReportEvidenceFolderPutBody): Observable<AssociateAssessmentReportEvidenceFolderResponse> {
			return this.http.put<AssociateAssessmentReportEvidenceFolderResponse>(this.baseUri + 'assessments/' + (assessmentId == null ? '' : encodeURIComponent(assessmentId)) + '/associateToAssessmentReport', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Associates a list of evidence to an assessment report in an Audit Manager assessment.
		 * Put assessments/{assessmentId}/batchAssociateToAssessmentReport
		 * @param {string} assessmentId  The identifier for the assessment. 
		 * @return {BatchAssociateAssessmentReportEvidenceResponse} Success
		 */
		BatchAssociateAssessmentReportEvidence(assessmentId: string, requestBody: BatchAssociateAssessmentReportEvidencePutBody): Observable<BatchAssociateAssessmentReportEvidenceResponse> {
			return this.http.put<BatchAssociateAssessmentReportEvidenceResponse>(this.baseUri + 'assessments/' + (assessmentId == null ? '' : encodeURIComponent(assessmentId)) + '/batchAssociateToAssessmentReport', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a batch of delegations for an assessment in Audit Manager.
		 * Post assessments/{assessmentId}/delegations
		 * @param {string} assessmentId  The identifier for the assessment. 
		 * @return {BatchCreateDelegationByAssessmentResponse} Success
		 */
		BatchCreateDelegationByAssessment(assessmentId: string, requestBody: BatchCreateDelegationByAssessmentPostBody): Observable<BatchCreateDelegationByAssessmentResponse> {
			return this.http.post<BatchCreateDelegationByAssessmentResponse>(this.baseUri + 'assessments/' + (assessmentId == null ? '' : encodeURIComponent(assessmentId)) + '/delegations', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a batch of delegations for an assessment in Audit Manager.
		 * Put assessments/{assessmentId}/delegations
		 * @param {string} assessmentId  The identifier for the assessment. 
		 * @return {BatchDeleteDelegationByAssessmentResponse} Success
		 */
		BatchDeleteDelegationByAssessment(assessmentId: string, requestBody: BatchDeleteDelegationByAssessmentPutBody): Observable<BatchDeleteDelegationByAssessmentResponse> {
			return this.http.put<BatchDeleteDelegationByAssessmentResponse>(this.baseUri + 'assessments/' + (assessmentId == null ? '' : encodeURIComponent(assessmentId)) + '/delegations', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Disassociates a list of evidence from an assessment report in Audit Manager.
		 * Put assessments/{assessmentId}/batchDisassociateFromAssessmentReport
		 * @param {string} assessmentId  The identifier for the assessment. 
		 * @return {BatchDisassociateAssessmentReportEvidenceResponse} Success
		 */
		BatchDisassociateAssessmentReportEvidence(assessmentId: string, requestBody: BatchDisassociateAssessmentReportEvidencePutBody): Observable<BatchDisassociateAssessmentReportEvidenceResponse> {
			return this.http.put<BatchDisassociateAssessmentReportEvidenceResponse>(this.baseUri + 'assessments/' + (assessmentId == null ? '' : encodeURIComponent(assessmentId)) + '/batchDisassociateFromAssessmentReport', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Adds one or more pieces of evidence to a control in an Audit Manager assessment. </p> <p>You can import manual evidence from any S3 bucket by specifying the S3 URI of the object. You can also upload a file from your browser, or enter plain text in response to a risk assessment question. </p> <p>The following restrictions apply to this action:</p> <ul> <li> <p> <code>manualEvidence</code> can be only one of the following: <code>evidenceFileName</code>, <code>s3ResourcePath</code>, or <code>textResponse</code> </p> </li> <li> <p>Maximum size of an individual evidence file: 100 MB</p> </li> <li> <p>Number of daily manual evidence uploads per control: 100</p> </li> <li> <p>Supported file formats: See <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/upload-evidence.html#supported-manual-evidence-files">Supported file types for manual evidence</a> in the <i>Audit Manager User Guide</i> </p> </li> </ul> <p>For more information about Audit Manager service restrictions, see <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/service-quotas.html">Quotas and restrictions for Audit Manager</a>.</p>
		 * Post assessments/{assessmentId}/controlSets/{controlSetId}/controls/{controlId}/evidence
		 * @param {string} assessmentId  The identifier for the assessment. 
		 * @param {string} controlSetId  The identifier for the control set. 
		 * @param {string} controlId  The identifier for the control. 
		 * @return {BatchImportEvidenceToAssessmentControlResponse} Success
		 */
		BatchImportEvidenceToAssessmentControl(assessmentId: string, controlSetId: string, controlId: string, requestBody: BatchImportEvidenceToAssessmentControlPostBody): Observable<BatchImportEvidenceToAssessmentControlResponse> {
			return this.http.post<BatchImportEvidenceToAssessmentControlResponse>(this.baseUri + 'assessments/' + (assessmentId == null ? '' : encodeURIComponent(assessmentId)) + '/controlSets/' + (controlSetId == null ? '' : encodeURIComponent(controlSetId)) + '/controls/' + (controlId == null ? '' : encodeURIComponent(controlId)) + '/evidence', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates an assessment in Audit Manager.
		 * Post assessments
		 * @return {CreateAssessmentResponse} Success
		 */
		CreateAssessment(requestBody: CreateAssessmentPostBody): Observable<CreateAssessmentResponse> {
			return this.http.post<CreateAssessmentResponse>(this.baseUri + 'assessments', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of current and past assessments from Audit Manager.
		 * Get assessments
		 * @param {AssessmentStatus} status  The current status of the assessment.
		 * @param {string} nextToken  The pagination token that's used to fetch the next set of results. 
		 * @param {number} maxResults  Represents the maximum number of results on a page or for an API request call. 
		 * @return {ListAssessmentsResponse} Success
		 */
		ListAssessments(status: AssessmentStatus | null | undefined, nextToken: string | null | undefined, maxResults: number | null | undefined): Observable<ListAssessmentsResponse> {
			return this.http.get<ListAssessmentsResponse>(this.baseUri + 'assessments?status=' + status + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, {});
		}

		/**
		 * Creates a custom framework in Audit Manager.
		 * Post assessmentFrameworks
		 * @return {CreateAssessmentFrameworkResponse} Success
		 */
		CreateAssessmentFramework(requestBody: CreateAssessmentFrameworkPostBody): Observable<CreateAssessmentFrameworkResponse> {
			return this.http.post<CreateAssessmentFrameworkResponse>(this.baseUri + 'assessmentFrameworks', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates an assessment report for the specified assessment.
		 * Post assessments/{assessmentId}/reports
		 * @param {string} assessmentId  The identifier for the assessment. 
		 * @return {CreateAssessmentReportResponse} Success
		 */
		CreateAssessmentReport(assessmentId: string, requestBody: CreateAssessmentReportPostBody): Observable<CreateAssessmentReportResponse> {
			return this.http.post<CreateAssessmentReportResponse>(this.baseUri + 'assessments/' + (assessmentId == null ? '' : encodeURIComponent(assessmentId)) + '/reports', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a new custom control in Audit Manager.
		 * Post controls
		 * @return {CreateControlResponse} Success
		 */
		CreateControl(requestBody: CreateControlPostBody): Observable<CreateControlResponse> {
			return this.http.post<CreateControlResponse>(this.baseUri + 'controls', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an assessment in Audit Manager.
		 * Delete assessments/{assessmentId}
		 * @param {string} assessmentId  The identifier for the assessment. 
		 * @return {DeleteAssessmentResponse} Success
		 */
		DeleteAssessment(assessmentId: string): Observable<DeleteAssessmentResponse> {
			return this.http.delete<DeleteAssessmentResponse>(this.baseUri + 'assessments/' + (assessmentId == null ? '' : encodeURIComponent(assessmentId)), {});
		}

		/**
		 * Gets information about a specified assessment.
		 * Get assessments/{assessmentId}
		 * @param {string} assessmentId The unique identifier for the assessment. 
		 * @return {GetAssessmentResponse} Success
		 */
		GetAssessment(assessmentId: string): Observable<GetAssessmentResponse> {
			return this.http.get<GetAssessmentResponse>(this.baseUri + 'assessments/' + (assessmentId == null ? '' : encodeURIComponent(assessmentId)), {});
		}

		/**
		 * Edits an Audit Manager assessment.
		 * Put assessments/{assessmentId}
		 * @param {string} assessmentId  The unique identifier for the assessment. 
		 * @return {UpdateAssessmentResponse} Success
		 */
		UpdateAssessment(assessmentId: string, requestBody: UpdateAssessmentPutBody): Observable<UpdateAssessmentResponse> {
			return this.http.put<UpdateAssessmentResponse>(this.baseUri + 'assessments/' + (assessmentId == null ? '' : encodeURIComponent(assessmentId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a custom framework in Audit Manager.
		 * Delete assessmentFrameworks/{frameworkId}
		 * @param {string} frameworkId  The identifier for the custom framework. 
		 * @return {DeleteAssessmentFrameworkResponse} Success
		 */
		DeleteAssessmentFramework(frameworkId: string): Observable<DeleteAssessmentFrameworkResponse> {
			return this.http.delete<DeleteAssessmentFrameworkResponse>(this.baseUri + 'assessmentFrameworks/' + (frameworkId == null ? '' : encodeURIComponent(frameworkId)), {});
		}

		/**
		 * Gets information about a specified framework.
		 * Get assessmentFrameworks/{frameworkId}
		 * @param {string} frameworkId  The identifier for the framework. 
		 * @return {GetAssessmentFrameworkResponse} Success
		 */
		GetAssessmentFramework(frameworkId: string): Observable<GetAssessmentFrameworkResponse> {
			return this.http.get<GetAssessmentFrameworkResponse>(this.baseUri + 'assessmentFrameworks/' + (frameworkId == null ? '' : encodeURIComponent(frameworkId)), {});
		}

		/**
		 * Updates a custom framework in Audit Manager.
		 * Put assessmentFrameworks/{frameworkId}
		 * @param {string} frameworkId  The unique identifier for the framework. 
		 * @return {UpdateAssessmentFrameworkResponse} Success
		 */
		UpdateAssessmentFramework(frameworkId: string, requestBody: UpdateAssessmentFrameworkPutBody): Observable<UpdateAssessmentFrameworkResponse> {
			return this.http.put<UpdateAssessmentFrameworkResponse>(this.baseUri + 'assessmentFrameworks/' + (frameworkId == null ? '' : encodeURIComponent(frameworkId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a share request for a custom framework in Audit Manager.
		 * Delete assessmentFrameworkShareRequests/{requestId}#requestType
		 * @param {string} requestId The unique identifier for the share request to be deleted.
		 * @param {ShareRequestType} requestType Specifies whether the share request is a sent request or a received request.
		 * @return {DeleteAssessmentFrameworkShareResponse} Success
		 */
		DeleteAssessmentFrameworkShare(requestId: string, requestType: ShareRequestType): Observable<DeleteAssessmentFrameworkShareResponse> {
			return this.http.delete<DeleteAssessmentFrameworkShareResponse>(this.baseUri + 'assessmentFrameworkShareRequests/' + (requestId == null ? '' : encodeURIComponent(requestId)) + '#requestType&requestType=' + requestType, {});
		}

		/**
		 * <p>Deletes an assessment report in Audit Manager. </p> <p>When you run the <code>DeleteAssessmentReport</code> operation, Audit Manager attempts to delete the following data:</p> <ol> <li> <p>The specified assessment report that’s stored in your S3 bucket</p> </li> <li> <p>The associated metadata that’s stored in Audit Manager</p> </li> </ol> <p>If Audit Manager can’t access the assessment report in your S3 bucket, the report isn’t deleted. In this event, the <code>DeleteAssessmentReport</code> operation doesn’t fail. Instead, it proceeds to delete the associated metadata only. You must then delete the assessment report from the S3 bucket yourself. </p> <p>This scenario happens when Audit Manager receives a <code>403 (Forbidden)</code> or <code>404 (Not Found)</code> error from Amazon S3. To avoid this, make sure that your S3 bucket is available, and that you configured the correct permissions for Audit Manager to delete resources in your S3 bucket. For an example permissions policy that you can use, see <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/security_iam_id-based-policy-examples.html#full-administrator-access-assessment-report-destination">Assessment report destination permissions</a> in the <i>Audit Manager User Guide</i>. For information about the issues that could cause a <code>403 (Forbidden)</code> or <code>404 (Not Found</code>) error from Amazon S3, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/ErrorResponses.html#ErrorCodeList">List of Error Codes</a> in the <i>Amazon Simple Storage Service API Reference</i>. </p>
		 * Delete assessments/{assessmentId}/reports/{assessmentReportId}
		 * @param {string} assessmentId  The unique identifier for the assessment. 
		 * @param {string} assessmentReportId  The unique identifier for the assessment report. 
		 * @return {DeleteAssessmentReportResponse} Success
		 */
		DeleteAssessmentReport(assessmentId: string, assessmentReportId: string): Observable<DeleteAssessmentReportResponse> {
			return this.http.delete<DeleteAssessmentReportResponse>(this.baseUri + 'assessments/' + (assessmentId == null ? '' : encodeURIComponent(assessmentId)) + '/reports/' + (assessmentReportId == null ? '' : encodeURIComponent(assessmentReportId)), {});
		}

		/**
		 * <p> Deletes a custom control in Audit Manager. </p> <important> <p>When you invoke this operation, the custom control is deleted from any frameworks or assessments that it’s currently part of. As a result, Audit Manager will stop collecting evidence for that custom control in all of your assessments. This includes assessments that you previously created before you deleted the custom control.</p> </important>
		 * Delete controls/{controlId}
		 * @param {string} controlId  The unique identifier for the control. 
		 * @return {DeleteControlResponse} Success
		 */
		DeleteControl(controlId: string): Observable<DeleteControlResponse> {
			return this.http.delete<DeleteControlResponse>(this.baseUri + 'controls/' + (controlId == null ? '' : encodeURIComponent(controlId)), {});
		}

		/**
		 * Gets information about a specified control.
		 * Get controls/{controlId}
		 * @param {string} controlId  The identifier for the control. 
		 * @return {GetControlResponse} Success
		 */
		GetControl(controlId: string): Observable<GetControlResponse> {
			return this.http.get<GetControlResponse>(this.baseUri + 'controls/' + (controlId == null ? '' : encodeURIComponent(controlId)), {});
		}

		/**
		 * Updates a custom control in Audit Manager.
		 * Put controls/{controlId}
		 * @param {string} controlId  The identifier for the control. 
		 * @return {UpdateControlResponse} Success
		 */
		UpdateControl(controlId: string, requestBody: UpdateControlPutBody): Observable<UpdateControlResponse> {
			return this.http.put<UpdateControlResponse>(this.baseUri + 'controls/' + (controlId == null ? '' : encodeURIComponent(controlId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p> Deregisters an account in Audit Manager. </p> <note> <p>Before you deregister, you can use the <a href="https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_UpdateSettings.html">UpdateSettings</a> API operation to set your preferred data retention policy. By default, Audit Manager retains your data. If you want to delete your data, you can use the <code>DeregistrationPolicy</code> attribute to request the deletion of your data. </p> <p>For more information about data retention, see <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/data-protection.html">Data Protection</a> in the <i>Audit Manager User Guide</i>. </p> </note>
		 * Post account/deregisterAccount
		 * @return {DeregisterAccountResponse} Success
		 */
		DeregisterAccount(): Observable<DeregisterAccountResponse> {
			return this.http.post<DeregisterAccountResponse>(this.baseUri + 'account/deregisterAccount', null, {});
		}

		/**
		 * <p>Removes the specified Amazon Web Services account as a delegated administrator for Audit Manager. </p> <p>When you remove a delegated administrator from your Audit Manager settings, you continue to have access to the evidence that you previously collected under that account. This is also the case when you deregister a delegated administrator from Organizations. However, Audit Manager stops collecting and attaching evidence to that delegated administrator account moving forward.</p> <important> <p>Keep in mind the following cleanup task if you use evidence finder:</p> <p>Before you use your management account to remove a delegated administrator, make sure that the current delegated administrator account signs in to Audit Manager and disables evidence finder first. Disabling evidence finder automatically deletes the event data store that was created in their account when they enabled evidence finder. If this task isn’t completed, the event data store remains in their account. In this case, we recommend that the original delegated administrator goes to CloudTrail Lake and manually <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/query-eds-disable-termination.html">deletes the event data store</a>.</p> <p>This cleanup task is necessary to ensure that you don't end up with multiple event data stores. Audit Manager ignores an unused event data store after you remove or change a delegated administrator account. However, the unused event data store continues to incur storage costs from CloudTrail Lake if you don't delete it.</p> </important> <p>When you deregister a delegated administrator account for Audit Manager, the data for that account isn’t deleted. If you want to delete resource data for a delegated administrator account, you must perform that task separately before you deregister the account. Either, you can do this in the Audit Manager console. Or, you can use one of the delete API operations that are provided by Audit Manager. </p> <p>To delete your Audit Manager resource data, see the following instructions: </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_DeleteAssessment.html">DeleteAssessment</a> (see also: <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/delete-assessment.html">Deleting an assessment</a> in the <i>Audit Manager User Guide</i>)</p> </li> <li> <p> <a href="https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_DeleteAssessmentFramework.html">DeleteAssessmentFramework</a> (see also: <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/delete-custom-framework.html">Deleting a custom framework</a> in the <i>Audit Manager User Guide</i>)</p> </li> <li> <p> <a href="https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_DeleteAssessmentFrameworkShare.html">DeleteAssessmentFrameworkShare</a> (see also: <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/deleting-shared-framework-requests.html">Deleting a share request</a> in the <i>Audit Manager User Guide</i>)</p> </li> <li> <p> <a href="https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_DeleteAssessmentReport.html">DeleteAssessmentReport</a> (see also: <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/generate-assessment-report.html#delete-assessment-report-steps">Deleting an assessment report</a> in the <i>Audit Manager User Guide</i>)</p> </li> <li> <p> <a href="https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_DeleteControl.html">DeleteControl</a> (see also: <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/delete-controls.html">Deleting a custom control</a> in the <i>Audit Manager User Guide</i>)</p> </li> </ul> <p>At this time, Audit Manager doesn't provide an option to delete evidence for a specific delegated administrator. Instead, when your management account deregisters Audit Manager, we perform a cleanup for the current delegated administrator account at the time of deregistration.</p>
		 * Post account/deregisterOrganizationAdminAccount
		 * @return {DeregisterOrganizationAdminAccountResponse} Success
		 */
		DeregisterOrganizationAdminAccount(requestBody: DeregisterOrganizationAdminAccountPostBody): Observable<DeregisterOrganizationAdminAccountResponse> {
			return this.http.post<DeregisterOrganizationAdminAccountResponse>(this.baseUri + 'account/deregisterOrganizationAdminAccount', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Disassociates an evidence folder from the specified assessment report in Audit Manager.
		 * Put assessments/{assessmentId}/disassociateFromAssessmentReport
		 * @param {string} assessmentId  The unique identifier for the assessment. 
		 * @return {DisassociateAssessmentReportEvidenceFolderResponse} Success
		 */
		DisassociateAssessmentReportEvidenceFolder(assessmentId: string, requestBody: DisassociateAssessmentReportEvidenceFolderPutBody): Observable<DisassociateAssessmentReportEvidenceFolderResponse> {
			return this.http.put<DisassociateAssessmentReportEvidenceFolderResponse>(this.baseUri + 'assessments/' + (assessmentId == null ? '' : encodeURIComponent(assessmentId)) + '/disassociateFromAssessmentReport', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the registration status of an account in Audit Manager.
		 * Get account/status
		 * @return {GetAccountStatusResponse} Success
		 */
		GetAccountStatus(): Observable<GetAccountStatusResponse> {
			return this.http.get<GetAccountStatusResponse>(this.baseUri + 'account/status', {});
		}

		/**
		 * Gets the URL of an assessment report in Audit Manager.
		 * Get assessments/{assessmentId}/reports/{assessmentReportId}/url
		 * @param {string} assessmentReportId  The unique identifier for the assessment report. 
		 * @param {string} assessmentId  The unique identifier for the assessment. 
		 * @return {GetAssessmentReportUrlResponse} Success
		 */
		GetAssessmentReportUrl(assessmentReportId: string, assessmentId: string): Observable<GetAssessmentReportUrlResponse> {
			return this.http.get<GetAssessmentReportUrlResponse>(this.baseUri + 'assessments/' + (assessmentId == null ? '' : encodeURIComponent(assessmentId)) + '/reports/' + (assessmentReportId == null ? '' : encodeURIComponent(assessmentReportId)) + '/url', {});
		}

		/**
		 * Gets a list of changelogs from Audit Manager.
		 * Get assessments/{assessmentId}/changelogs
		 * @param {string} assessmentId The unique identifier for the assessment. 
		 * @param {string} controlSetId  The unique identifier for the control set. 
		 * @param {string} controlId  The unique identifier for the control. 
		 * @param {string} nextToken  The pagination token that's used to fetch the next set of results. 
		 * @param {number} maxResults Represents the maximum number of results on a page or for an API request call. 
		 * @return {GetChangeLogsResponse} Success
		 */
		GetChangeLogs(assessmentId: string, controlSetId: string | null | undefined, controlId: string | null | undefined, nextToken: string | null | undefined, maxResults: number | null | undefined): Observable<GetChangeLogsResponse> {
			return this.http.get<GetChangeLogsResponse>(this.baseUri + 'assessments/' + (assessmentId == null ? '' : encodeURIComponent(assessmentId)) + '/changelogs&controlSetId=' + (controlSetId == null ? '' : encodeURIComponent(controlSetId)) + '&controlId=' + (controlId == null ? '' : encodeURIComponent(controlId)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, {});
		}

		/**
		 * Gets a list of delegations from an audit owner to a delegate.
		 * Get delegations
		 * @param {string} nextToken  The pagination token that's used to fetch the next set of results. 
		 * @param {number} maxResults  Represents the maximum number of results on a page or for an API request call. 
		 * @return {GetDelegationsResponse} Success
		 */
		GetDelegations(nextToken: string | null | undefined, maxResults: number | null | undefined): Observable<GetDelegationsResponse> {
			return this.http.get<GetDelegationsResponse>(this.baseUri + 'delegations?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, {});
		}

		/**
		 * Gets information about a specified evidence item.
		 * Get assessments/{assessmentId}/controlSets/{controlSetId}/evidenceFolders/{evidenceFolderId}/evidence/{evidenceId}
		 * @param {string} assessmentId  The unique identifier for the assessment. 
		 * @param {string} controlSetId  The unique identifier for the control set. 
		 * @param {string} evidenceFolderId  The unique identifier for the folder that the evidence is stored in. 
		 * @param {string} evidenceId  The unique identifier for the evidence. 
		 * @return {GetEvidenceResponse} Success
		 */
		GetEvidence(assessmentId: string, controlSetId: string, evidenceFolderId: string, evidenceId: string): Observable<GetEvidenceResponse> {
			return this.http.get<GetEvidenceResponse>(this.baseUri + 'assessments/' + (assessmentId == null ? '' : encodeURIComponent(assessmentId)) + '/controlSets/' + (controlSetId == null ? '' : encodeURIComponent(controlSetId)) + '/evidenceFolders/' + (evidenceFolderId == null ? '' : encodeURIComponent(evidenceFolderId)) + '/evidence/' + (evidenceId == null ? '' : encodeURIComponent(evidenceId)), {});
		}

		/**
		 * Gets all evidence from a specified evidence folder in Audit Manager.
		 * Get assessments/{assessmentId}/controlSets/{controlSetId}/evidenceFolders/{evidenceFolderId}/evidence
		 * @param {string} assessmentId  The identifier for the assessment. 
		 * @param {string} controlSetId  The identifier for the control set. 
		 * @param {string} evidenceFolderId  The unique identifier for the folder that the evidence is stored in. 
		 * @param {string} nextToken  The pagination token that's used to fetch the next set of results. 
		 * @param {number} maxResults  Represents the maximum number of results on a page or for an API request call. 
		 * @return {GetEvidenceByEvidenceFolderResponse} Success
		 */
		GetEvidenceByEvidenceFolder(assessmentId: string, controlSetId: string, evidenceFolderId: string, nextToken: string | null | undefined, maxResults: number | null | undefined): Observable<GetEvidenceByEvidenceFolderResponse> {
			return this.http.get<GetEvidenceByEvidenceFolderResponse>(this.baseUri + 'assessments/' + (assessmentId == null ? '' : encodeURIComponent(assessmentId)) + '/controlSets/' + (controlSetId == null ? '' : encodeURIComponent(controlSetId)) + '/evidenceFolders/' + (evidenceFolderId == null ? '' : encodeURIComponent(evidenceFolderId)) + '/evidence&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, {});
		}

		/**
		 * <p>Creates a presigned Amazon S3 URL that can be used to upload a file as manual evidence. For instructions on how to use this operation, see <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/upload-evidence.html#how-to-upload-manual-evidence-files">Upload a file from your browser </a> in the <i>Audit Manager User Guide</i>.</p> <p>The following restrictions apply to this operation:</p> <ul> <li> <p>Maximum size of an individual evidence file: 100 MB</p> </li> <li> <p>Number of daily manual evidence uploads per control: 100</p> </li> <li> <p>Supported file formats: See <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/upload-evidence.html#supported-manual-evidence-files">Supported file types for manual evidence</a> in the <i>Audit Manager User Guide</i> </p> </li> </ul> <p>For more information about Audit Manager service restrictions, see <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/service-quotas.html">Quotas and restrictions for Audit Manager</a>.</p>
		 * Get evidenceFileUploadUrl#fileName
		 * @param {string} fileName The file that you want to upload. For a list of supported file formats, see <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/upload-evidence.html#supported-manual-evidence-files">Supported file types for manual evidence</a> in the <i>Audit Manager User Guide</i>.
		 * @return {GetEvidenceFileUploadUrlResponse} Success
		 */
		GetEvidenceFileUploadUrl(fileName: string): Observable<GetEvidenceFileUploadUrlResponse> {
			return this.http.get<GetEvidenceFileUploadUrlResponse>(this.baseUri + 'evidenceFileUploadUrl#fileName?fileName=' + (fileName == null ? '' : encodeURIComponent(fileName)), {});
		}

		/**
		 * Gets an evidence folder from a specified assessment in Audit Manager.
		 * Get assessments/{assessmentId}/controlSets/{controlSetId}/evidenceFolders/{evidenceFolderId}
		 * @param {string} assessmentId  The unique identifier for the assessment. 
		 * @param {string} controlSetId  The unique identifier for the control set. 
		 * @param {string} evidenceFolderId  The unique identifier for the folder that the evidence is stored in. 
		 * @return {GetEvidenceFolderResponse} Success
		 */
		GetEvidenceFolder(assessmentId: string, controlSetId: string, evidenceFolderId: string): Observable<GetEvidenceFolderResponse> {
			return this.http.get<GetEvidenceFolderResponse>(this.baseUri + 'assessments/' + (assessmentId == null ? '' : encodeURIComponent(assessmentId)) + '/controlSets/' + (controlSetId == null ? '' : encodeURIComponent(controlSetId)) + '/evidenceFolders/' + (evidenceFolderId == null ? '' : encodeURIComponent(evidenceFolderId)), {});
		}

		/**
		 * Gets the evidence folders from a specified assessment in Audit Manager.
		 * Get assessments/{assessmentId}/evidenceFolders
		 * @param {string} assessmentId  The unique identifier for the assessment. 
		 * @param {string} nextToken  The pagination token that's used to fetch the next set of results. 
		 * @param {number} maxResults  Represents the maximum number of results on a page or for an API request call. 
		 * @return {GetEvidenceFoldersByAssessmentResponse} Success
		 */
		GetEvidenceFoldersByAssessment(assessmentId: string, nextToken: string | null | undefined, maxResults: number | null | undefined): Observable<GetEvidenceFoldersByAssessmentResponse> {
			return this.http.get<GetEvidenceFoldersByAssessmentResponse>(this.baseUri + 'assessments/' + (assessmentId == null ? '' : encodeURIComponent(assessmentId)) + '/evidenceFolders&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, {});
		}

		/**
		 * Gets a list of evidence folders that are associated with a specified control in an Audit Manager assessment.
		 * Get assessments/{assessmentId}/evidenceFolders-by-assessment-control/{controlSetId}/{controlId}
		 * @param {string} assessmentId  The identifier for the assessment. 
		 * @param {string} controlSetId  The identifier for the control set. 
		 * @param {string} controlId  The identifier for the control. 
		 * @param {string} nextToken  The pagination token that's used to fetch the next set of results. 
		 * @param {number} maxResults  Represents the maximum number of results on a page or for an API request call. 
		 * @return {GetEvidenceFoldersByAssessmentControlResponse} Success
		 */
		GetEvidenceFoldersByAssessmentControl(assessmentId: string, controlSetId: string, controlId: string, nextToken: string | null | undefined, maxResults: number | null | undefined): Observable<GetEvidenceFoldersByAssessmentControlResponse> {
			return this.http.get<GetEvidenceFoldersByAssessmentControlResponse>(this.baseUri + 'assessments/' + (assessmentId == null ? '' : encodeURIComponent(assessmentId)) + '/evidenceFolders-by-assessment-control/' + (controlSetId == null ? '' : encodeURIComponent(controlSetId)) + '/' + (controlId == null ? '' : encodeURIComponent(controlId)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, {});
		}

		/**
		 * Gets the latest analytics data for all your current active assessments.
		 * Get insights
		 * @return {GetInsightsResponse} Success
		 */
		GetInsights(): Observable<GetInsightsResponse> {
			return this.http.get<GetInsightsResponse>(this.baseUri + 'insights', {});
		}

		/**
		 * Gets the latest analytics data for a specific active assessment.
		 * Get insights/assessments/{assessmentId}
		 * @param {string} assessmentId The unique identifier for the assessment. 
		 * @return {GetInsightsByAssessmentResponse} Success
		 */
		GetInsightsByAssessment(assessmentId: string): Observable<GetInsightsByAssessmentResponse> {
			return this.http.get<GetInsightsByAssessmentResponse>(this.baseUri + 'insights/assessments/' + (assessmentId == null ? '' : encodeURIComponent(assessmentId)), {});
		}

		/**
		 * Gets the name of the delegated Amazon Web Services administrator account for a specified organization.
		 * Get account/organizationAdminAccount
		 * @return {GetOrganizationAdminAccountResponse} Success
		 */
		GetOrganizationAdminAccount(): Observable<GetOrganizationAdminAccountResponse> {
			return this.http.get<GetOrganizationAdminAccountResponse>(this.baseUri + 'account/organizationAdminAccount', {});
		}

		/**
		 * Gets a list of all of the Amazon Web Services that you can choose to include in your assessment. When you <a href="https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_CreateAssessment.html">create an assessment</a>, specify which of these services you want to include to narrow the assessment's <a href="https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_Scope.html">scope</a>.
		 * Get services
		 * @return {GetServicesInScopeResponse} Success
		 */
		GetServicesInScope(): Observable<GetServicesInScopeResponse> {
			return this.http.get<GetServicesInScopeResponse>(this.baseUri + 'services', {});
		}

		/**
		 * Gets the settings for a specified Amazon Web Services account.
		 * Get settings/{attribute}
		 * @param {SettingAttribute} attribute  The list of setting attribute enum values. 
		 * @return {GetSettingsResponse} Success
		 */
		GetSettings(attribute: SettingAttribute): Observable<GetSettingsResponse> {
			return this.http.get<GetSettingsResponse>(this.baseUri + 'settings/' + attribute, {});
		}

		/**
		 * <p>Lists the latest analytics data for controls within a specific control domain and a specific active assessment.</p> <note> <p>Control insights are listed only if the control belongs to the control domain and assessment that was specified. Moreover, the control must have collected evidence on the <code>lastUpdated</code> date of <code>controlInsightsByAssessment</code>. If neither of these conditions are met, no data is listed for that control. </p> </note>
		 * Get insights/controls-by-assessment#controlDomainId&assessmentId
		 * @param {string} controlDomainId The unique identifier for the control domain. 
		 * @param {string} assessmentId The unique identifier for the active assessment. 
		 * @param {string} nextToken The pagination token that's used to fetch the next set of results. 
		 * @param {number} maxResults Represents the maximum number of results on a page or for an API request call. 
		 * @return {ListAssessmentControlInsightsByControlDomainResponse} Success
		 */
		ListAssessmentControlInsightsByControlDomain(controlDomainId: string, assessmentId: string, nextToken: string | null | undefined, maxResults: number | null | undefined): Observable<ListAssessmentControlInsightsByControlDomainResponse> {
			return this.http.get<ListAssessmentControlInsightsByControlDomainResponse>(this.baseUri + 'insights/controls-by-assessment#controlDomainId&assessmentId?controlDomainId=' + (controlDomainId == null ? '' : encodeURIComponent(controlDomainId)) + '&assessmentId=' + (assessmentId == null ? '' : encodeURIComponent(assessmentId)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, {});
		}

		/**
		 * Returns a list of sent or received share requests for custom frameworks in Audit Manager.
		 * Get assessmentFrameworkShareRequests#requestType
		 * @param {ShareRequestType} requestType  Specifies whether the share request is a sent request or a received request.
		 * @param {string} nextToken  The pagination token that's used to fetch the next set of results. 
		 * @param {number} maxResults  Represents the maximum number of results on a page or for an API request call. 
		 * @return {ListAssessmentFrameworkShareRequestsResponse} Success
		 */
		ListAssessmentFrameworkShareRequests(requestType: ShareRequestType, nextToken: string | null | undefined, maxResults: number | null | undefined): Observable<ListAssessmentFrameworkShareRequestsResponse> {
			return this.http.get<ListAssessmentFrameworkShareRequestsResponse>(this.baseUri + 'assessmentFrameworkShareRequests#requestType?requestType=' + requestType + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, {});
		}

		/**
		 * Returns a list of the frameworks that are available in the Audit Manager framework library.
		 * Get assessmentFrameworks#frameworkType
		 * @param {FrameworkType} frameworkType  The type of framework, such as a standard framework or a custom framework. 
		 * @param {string} nextToken  The pagination token that's used to fetch the next set of results. 
		 * @param {number} maxResults  Represents the maximum number of results on a page or for an API request call. 
		 * @return {ListAssessmentFrameworksResponse} Success
		 */
		ListAssessmentFrameworks(frameworkType: FrameworkType, nextToken: string | null | undefined, maxResults: number | null | undefined): Observable<ListAssessmentFrameworksResponse> {
			return this.http.get<ListAssessmentFrameworksResponse>(this.baseUri + 'assessmentFrameworks#frameworkType?frameworkType=' + frameworkType + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, {});
		}

		/**
		 * Returns a list of assessment reports created in Audit Manager.
		 * Get assessmentReports
		 * @param {string} nextToken  The pagination token that's used to fetch the next set of results. 
		 * @param {number} maxResults  Represents the maximum number of results on a page or for an API request call. 
		 * @return {ListAssessmentReportsResponse} Success
		 */
		ListAssessmentReports(nextToken: string | null | undefined, maxResults: number | null | undefined): Observable<ListAssessmentReportsResponse> {
			return this.http.get<ListAssessmentReportsResponse>(this.baseUri + 'assessmentReports?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, {});
		}

		/**
		 * <p>Lists the latest analytics data for control domains across all of your active assessments. </p> <note> <p>A control domain is listed only if at least one of the controls within that domain collected evidence on the <code>lastUpdated</code> date of <code>controlDomainInsights</code>. If this condition isn’t met, no data is listed for that control domain.</p> </note>
		 * Get insights/control-domains
		 * @param {string} nextToken The pagination token that's used to fetch the next set of results. 
		 * @param {number} maxResults Represents the maximum number of results on a page or for an API request call. 
		 * @return {ListControlDomainInsightsResponse} Success
		 */
		ListControlDomainInsights(nextToken: string | null | undefined, maxResults: number | null | undefined): Observable<ListControlDomainInsightsResponse> {
			return this.http.get<ListControlDomainInsightsResponse>(this.baseUri + 'insights/control-domains?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, {});
		}

		/**
		 * <p>Lists analytics data for control domains within a specified active assessment.</p> <note> <p>A control domain is listed only if at least one of the controls within that domain collected evidence on the <code>lastUpdated</code> date of <code>controlDomainInsights</code>. If this condition isn’t met, no data is listed for that domain.</p> </note>
		 * Get insights/control-domains-by-assessment#assessmentId
		 * @param {string} assessmentId The unique identifier for the active assessment. 
		 * @param {string} nextToken The pagination token that's used to fetch the next set of results. 
		 * @param {number} maxResults Represents the maximum number of results on a page or for an API request call. 
		 * @return {ListControlDomainInsightsByAssessmentResponse} Success
		 */
		ListControlDomainInsightsByAssessment(assessmentId: string, nextToken: string | null | undefined, maxResults: number | null | undefined): Observable<ListControlDomainInsightsByAssessmentResponse> {
			return this.http.get<ListControlDomainInsightsByAssessmentResponse>(this.baseUri + 'insights/control-domains-by-assessment#assessmentId?assessmentId=' + (assessmentId == null ? '' : encodeURIComponent(assessmentId)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, {});
		}

		/**
		 * <p>Lists the latest analytics data for controls within a specific control domain across all active assessments.</p> <note> <p>Control insights are listed only if the control belongs to the control domain that was specified and the control collected evidence on the <code>lastUpdated</code> date of <code>controlInsightsMetadata</code>. If neither of these conditions are met, no data is listed for that control. </p> </note>
		 * Get insights/controls#controlDomainId
		 * @param {string} controlDomainId The unique identifier for the control domain. 
		 * @param {string} nextToken The pagination token that's used to fetch the next set of results. 
		 * @param {number} maxResults Represents the maximum number of results on a page or for an API request call. 
		 * @return {ListControlInsightsByControlDomainResponse} Success
		 */
		ListControlInsightsByControlDomain(controlDomainId: string, nextToken: string | null | undefined, maxResults: number | null | undefined): Observable<ListControlInsightsByControlDomainResponse> {
			return this.http.get<ListControlInsightsByControlDomainResponse>(this.baseUri + 'insights/controls#controlDomainId?controlDomainId=' + (controlDomainId == null ? '' : encodeURIComponent(controlDomainId)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, {});
		}

		/**
		 * Returns a list of controls from Audit Manager.
		 * Get controls#controlType
		 * @param {FrameworkType} controlType  The type of control, such as a standard control or a custom control. 
		 * @param {string} nextToken  The pagination token that's used to fetch the next set of results. 
		 * @param {number} maxResults  Represents the maximum number of results on a page or for an API request call. 
		 * @return {ListControlsResponse} Success
		 */
		ListControls(controlType: FrameworkType, nextToken: string | null | undefined, maxResults: number | null | undefined): Observable<ListControlsResponse> {
			return this.http.get<ListControlsResponse>(this.baseUri + 'controls#controlType?controlType=' + controlType + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, {});
		}

		/**
		 * Returns a list of keywords that are pre-mapped to the specified control data source.
		 * Get dataSourceKeywords#source
		 * @param {SourceType} source  The control mapping data source that the keywords apply to. 
		 * @param {string} nextToken  The pagination token that's used to fetch the next set of results. 
		 * @param {number} maxResults  Represents the maximum number of results on a page or for an API request call. 
		 * @return {ListKeywordsForDataSourceResponse} Success
		 */
		ListKeywordsForDataSource(source: SourceType, nextToken: string | null | undefined, maxResults: number | null | undefined): Observable<ListKeywordsForDataSourceResponse> {
			return this.http.get<ListKeywordsForDataSourceResponse>(this.baseUri + 'dataSourceKeywords#source?source=' + source + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, {});
		}

		/**
		 * Returns a list of all Audit Manager notifications.
		 * Get notifications
		 * @param {string} nextToken  The pagination token that's used to fetch the next set of results. 
		 * @param {number} maxResults  Represents the maximum number of results on a page or for an API request call. 
		 * @return {ListNotificationsResponse} Success
		 */
		ListNotifications(nextToken: string | null | undefined, maxResults: number | null | undefined): Observable<ListNotificationsResponse> {
			return this.http.get<ListNotificationsResponse>(this.baseUri + 'notifications?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, {});
		}

		/**
		 * Returns a list of tags for the specified resource in Audit Manager.
		 * Get tags/{resourceArn}
		 * @param {string} resourceArn  The Amazon Resource Name (ARN) of the resource. 
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(resourceArn: string): Observable<ListTagsForResourceResponse> {
			return this.http.get<ListTagsForResourceResponse>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), {});
		}

		/**
		 * Tags the specified resource in Audit Manager.
		 * Post tags/{resourceArn}
		 * @param {string} resourceArn  The Amazon Resource Name (ARN) of the resource. 
		 * @return {TagResourceResponse} Success
		 */
		TagResource(resourceArn: string, requestBody: TagResourcePostBody): Observable<TagResourceResponse> {
			return this.http.post<TagResourceResponse>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Enables Audit Manager for the specified Amazon Web Services account.
		 * Post account/registerAccount
		 * @return {RegisterAccountResponse} Success
		 */
		RegisterAccount(requestBody: RegisterAccountPostBody): Observable<RegisterAccountResponse> {
			return this.http.post<RegisterAccountResponse>(this.baseUri + 'account/registerAccount', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Enables an Amazon Web Services account within the organization as the delegated administrator for Audit Manager.
		 * Post account/registerOrganizationAdminAccount
		 * @return {RegisterOrganizationAdminAccountResponse} Success
		 */
		RegisterOrganizationAdminAccount(requestBody: RegisterOrganizationAdminAccountPostBody): Observable<RegisterOrganizationAdminAccountResponse> {
			return this.http.post<RegisterOrganizationAdminAccountResponse>(this.baseUri + 'account/registerOrganizationAdminAccount', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p> Creates a share request for a custom framework in Audit Manager. </p> <p>The share request specifies a recipient and notifies them that a custom framework is available. Recipients have 120 days to accept or decline the request. If no action is taken, the share request expires.</p> <p>When you create a share request, Audit Manager stores a snapshot of your custom framework in the US East (N. Virginia) Amazon Web Services Region. Audit Manager also stores a backup of the same snapshot in the US West (Oregon) Amazon Web Services Region.</p> <p>Audit Manager deletes the snapshot and the backup snapshot when one of the following events occurs:</p> <ul> <li> <p>The sender revokes the share request.</p> </li> <li> <p>The recipient declines the share request.</p> </li> <li> <p>The recipient encounters an error and doesn't successfully accept the share request.</p> </li> <li> <p>The share request expires before the recipient responds to the request.</p> </li> </ul> <p>When a sender <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/framework-sharing.html#framework-sharing-resend">resends a share request</a>, the snapshot is replaced with an updated version that corresponds with the latest version of the custom framework. </p> <p>When a recipient accepts a share request, the snapshot is replicated into their Amazon Web Services account under the Amazon Web Services Region that was specified in the share request. </p> <important> <p>When you invoke the <code>StartAssessmentFrameworkShare</code> API, you are about to share a custom framework with another Amazon Web Services account. You may not share a custom framework that is derived from a standard framework if the standard framework is designated as not eligible for sharing by Amazon Web Services, unless you have obtained permission to do so from the owner of the standard framework. To learn more about which standard frameworks are eligible for sharing, see <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/share-custom-framework-concepts-and-terminology.html#eligibility">Framework sharing eligibility</a> in the <i>Audit Manager User Guide</i>.</p> </important>
		 * Post assessmentFrameworks/{frameworkId}/shareRequests
		 * @param {string} frameworkId  The unique identifier for the custom framework to be shared. 
		 * @return {StartAssessmentFrameworkShareResponse} Success
		 */
		StartAssessmentFrameworkShare(frameworkId: string, requestBody: StartAssessmentFrameworkSharePostBody): Observable<StartAssessmentFrameworkShareResponse> {
			return this.http.post<StartAssessmentFrameworkShareResponse>(this.baseUri + 'assessmentFrameworks/' + (frameworkId == null ? '' : encodeURIComponent(frameworkId)) + '/shareRequests', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes a tag from a resource in Audit Manager.
		 * Delete tags/{resourceArn}#tagKeys
		 * @param {string} resourceArn  The Amazon Resource Name (ARN) of the specified resource. 
		 * @param {Array<string>} tagKeys  The name or key of the tag. 
		 * @return {UntagResourceResponse} Success
		 */
		UntagResource(resourceArn: string, tagKeys: Array<string>): Observable<UntagResourceResponse> {
			return this.http.delete<UntagResourceResponse>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)) + '#tagKeys&' + tagKeys.map(z => `tagKeys=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Updates a control within an assessment in Audit Manager.
		 * Put assessments/{assessmentId}/controlSets/{controlSetId}/controls/{controlId}
		 * @param {string} assessmentId  The unique identifier for the assessment. 
		 * @param {string} controlSetId  The unique identifier for the control set. 
		 * @param {string} controlId  The unique identifier for the control. 
		 * @return {UpdateAssessmentControlResponse} Success
		 */
		UpdateAssessmentControl(assessmentId: string, controlSetId: string, controlId: string, requestBody: UpdateAssessmentControlPutBody): Observable<UpdateAssessmentControlResponse> {
			return this.http.put<UpdateAssessmentControlResponse>(this.baseUri + 'assessments/' + (assessmentId == null ? '' : encodeURIComponent(assessmentId)) + '/controlSets/' + (controlSetId == null ? '' : encodeURIComponent(controlSetId)) + '/controls/' + (controlId == null ? '' : encodeURIComponent(controlId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates the status of a control set in an Audit Manager assessment.
		 * Put assessments/{assessmentId}/controlSets/{controlSetId}/status
		 * @param {string} assessmentId  The unique identifier for the assessment. 
		 * @param {string} controlSetId  The unique identifier for the control set. 
		 * @return {UpdateAssessmentControlSetStatusResponse} Success
		 */
		UpdateAssessmentControlSetStatus(assessmentId: string, controlSetId: string, requestBody: UpdateAssessmentControlSetStatusPutBody): Observable<UpdateAssessmentControlSetStatusResponse> {
			return this.http.put<UpdateAssessmentControlSetStatusResponse>(this.baseUri + 'assessments/' + (assessmentId == null ? '' : encodeURIComponent(assessmentId)) + '/controlSets/' + (controlSetId == null ? '' : encodeURIComponent(controlSetId)) + '/status', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates a share request for a custom framework in Audit Manager.
		 * Put assessmentFrameworkShareRequests/{requestId}
		 * @param {string} requestId  The unique identifier for the share request. 
		 * @return {UpdateAssessmentFrameworkShareResponse} Success
		 */
		UpdateAssessmentFrameworkShare(requestId: string, requestBody: UpdateAssessmentFrameworkSharePutBody): Observable<UpdateAssessmentFrameworkShareResponse> {
			return this.http.put<UpdateAssessmentFrameworkShareResponse>(this.baseUri + 'assessmentFrameworkShareRequests/' + (requestId == null ? '' : encodeURIComponent(requestId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates the status of an assessment in Audit Manager.
		 * Put assessments/{assessmentId}/status
		 * @param {string} assessmentId  The unique identifier for the assessment. 
		 * @return {UpdateAssessmentStatusResponse} Success
		 */
		UpdateAssessmentStatus(assessmentId: string, requestBody: UpdateAssessmentStatusPutBody): Observable<UpdateAssessmentStatusResponse> {
			return this.http.put<UpdateAssessmentStatusResponse>(this.baseUri + 'assessments/' + (assessmentId == null ? '' : encodeURIComponent(assessmentId)) + '/status', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates Audit Manager settings for the current account.
		 * Put settings
		 * @return {UpdateSettingsResponse} Success
		 */
		UpdateSettings(requestBody: UpdateSettingsPutBody): Observable<UpdateSettingsResponse> {
			return this.http.put<UpdateSettingsResponse>(this.baseUri + 'settings', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Validates the integrity of an assessment report in Audit Manager.
		 * Post assessmentReports/integrity
		 * @return {ValidateAssessmentReportIntegrityResponse} Success
		 */
		ValidateAssessmentReportIntegrity(requestBody: ValidateAssessmentReportIntegrityPostBody): Observable<ValidateAssessmentReportIntegrityResponse> {
			return this.http.post<ValidateAssessmentReportIntegrityResponse>(this.baseUri + 'assessmentReports/integrity', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export interface AssociateAssessmentReportEvidenceFolderPutBody {

		/**
		 * The identifier for the folder that the evidence is stored in.
		 * Required
		 * Max length: 36
		 * Min length: 36
		 */
		evidenceFolderId: string;
	}
	export interface AssociateAssessmentReportEvidenceFolderPutBodyFormProperties {

		/**
		 * The identifier for the folder that the evidence is stored in.
		 * Required
		 * Max length: 36
		 * Min length: 36
		 */
		evidenceFolderId: FormControl<string | null | undefined>,
	}
	export function CreateAssociateAssessmentReportEvidenceFolderPutBodyFormGroup() {
		return new FormGroup<AssociateAssessmentReportEvidenceFolderPutBodyFormProperties>({
			evidenceFolderId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(36), Validators.maxLength(36), Validators.pattern('^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$')]),
		});

	}

	export interface BatchAssociateAssessmentReportEvidencePutBody {

		/**
		 * The identifier for the folder that the evidence is stored in.
		 * Required
		 * Max length: 36
		 * Min length: 36
		 */
		evidenceFolderId: string;

		/**
		 * The list of evidence identifiers.
		 * Required
		 * Minimum items: 0
		 * Maximum items: 50
		 */
		evidenceIds: Array<string>;
	}
	export interface BatchAssociateAssessmentReportEvidencePutBodyFormProperties {

		/**
		 * The identifier for the folder that the evidence is stored in.
		 * Required
		 * Max length: 36
		 * Min length: 36
		 */
		evidenceFolderId: FormControl<string | null | undefined>,
	}
	export function CreateBatchAssociateAssessmentReportEvidencePutBodyFormGroup() {
		return new FormGroup<BatchAssociateAssessmentReportEvidencePutBodyFormProperties>({
			evidenceFolderId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(36), Validators.maxLength(36), Validators.pattern('^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$')]),
		});

	}

	export interface BatchCreateDelegationByAssessmentPostBody {

		/**
		 * The API request to batch create delegations in Audit Manager.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		createDelegationRequests: Array<CreateDelegationRequest>;
	}
	export interface BatchCreateDelegationByAssessmentPostBodyFormProperties {
	}
	export function CreateBatchCreateDelegationByAssessmentPostBodyFormGroup() {
		return new FormGroup<BatchCreateDelegationByAssessmentPostBodyFormProperties>({
		});

	}

	export interface BatchDeleteDelegationByAssessmentPutBody {

		/**
		 * The identifiers for the delegations.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		delegationIds: Array<string>;
	}
	export interface BatchDeleteDelegationByAssessmentPutBodyFormProperties {
	}
	export function CreateBatchDeleteDelegationByAssessmentPutBodyFormGroup() {
		return new FormGroup<BatchDeleteDelegationByAssessmentPutBodyFormProperties>({
		});

	}

	export interface BatchDisassociateAssessmentReportEvidencePutBody {

		/**
		 * The identifier for the folder that the evidence is stored in.
		 * Required
		 * Max length: 36
		 * Min length: 36
		 */
		evidenceFolderId: string;

		/**
		 * The list of evidence identifiers.
		 * Required
		 * Minimum items: 0
		 * Maximum items: 50
		 */
		evidenceIds: Array<string>;
	}
	export interface BatchDisassociateAssessmentReportEvidencePutBodyFormProperties {

		/**
		 * The identifier for the folder that the evidence is stored in.
		 * Required
		 * Max length: 36
		 * Min length: 36
		 */
		evidenceFolderId: FormControl<string | null | undefined>,
	}
	export function CreateBatchDisassociateAssessmentReportEvidencePutBodyFormGroup() {
		return new FormGroup<BatchDisassociateAssessmentReportEvidencePutBodyFormProperties>({
			evidenceFolderId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(36), Validators.maxLength(36), Validators.pattern('^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$')]),
		});

	}

	export interface BatchImportEvidenceToAssessmentControlPostBody {

		/**
		 * The list of manual evidence objects.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		manualEvidence: Array<ManualEvidence>;
	}
	export interface BatchImportEvidenceToAssessmentControlPostBodyFormProperties {
	}
	export function CreateBatchImportEvidenceToAssessmentControlPostBodyFormGroup() {
		return new FormGroup<BatchImportEvidenceToAssessmentControlPostBodyFormProperties>({
		});

	}

	export interface CreateAssessmentPostBody {

		/**
		 * The name of the assessment to be created.
		 * Required
		 * Max length: 300
		 * Min length: 1
		 */
		name: string;

		/**
		 * The optional description of the assessment to be created.
		 * Max length: 1000
		 */
		description?: string | null;

		/**
		 * The location where Audit Manager saves assessment reports for the given assessment.
		 * Required
		 */
		assessmentReportsDestination: CreateAssessmentPostBodyAssessmentReportsDestination;

		/**
		 * The wrapper that contains the Amazon Web Services accounts and services that are in scope for the assessment.
		 * Required
		 */
		scope: CreateAssessmentPostBodyScope;

		/**
		 * The list of roles for the assessment.
		 * Required
		 */
		roles: Array<Role>;

		/**
		 * The identifier for the framework that the assessment will be created from.
		 * Required
		 * Max length: 36
		 * Min length: 36
		 */
		frameworkId: string;

		/** The tags that are associated with the assessment. */
		tags?: {[id: string]: string };
	}
	export interface CreateAssessmentPostBodyFormProperties {

		/**
		 * The name of the assessment to be created.
		 * Required
		 * Max length: 300
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The optional description of the assessment to be created.
		 * Max length: 1000
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * The identifier for the framework that the assessment will be created from.
		 * Required
		 * Max length: 36
		 * Min length: 36
		 */
		frameworkId: FormControl<string | null | undefined>,

		/** The tags that are associated with the assessment. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateAssessmentPostBodyFormGroup() {
		return new FormGroup<CreateAssessmentPostBodyFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(300), Validators.pattern('^[^\\]*$')]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1000), Validators.pattern('^[\w\W\s\S]*$')]),
			frameworkId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(36), Validators.maxLength(36), Validators.pattern('^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$')]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateAssessmentPostBodyAssessmentReportsDestination {
		destinationType?: AssessmentReportDestinationType;
		destination?: string;
	}
	export interface CreateAssessmentPostBodyAssessmentReportsDestinationFormProperties {
		destinationType: FormControl<AssessmentReportDestinationType | null | undefined>,
		destination: FormControl<string | null | undefined>,
	}
	export function CreateCreateAssessmentPostBodyAssessmentReportsDestinationFormGroup() {
		return new FormGroup<CreateAssessmentPostBodyAssessmentReportsDestinationFormProperties>({
			destinationType: new FormControl<AssessmentReportDestinationType | null | undefined>(undefined),
			destination: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateAssessmentPostBodyScope {
		awsAccounts?: Array<AWSAccount>;
		awsServices?: Array<AWSService>;
	}
	export interface CreateAssessmentPostBodyScopeFormProperties {
	}
	export function CreateCreateAssessmentPostBodyScopeFormGroup() {
		return new FormGroup<CreateAssessmentPostBodyScopeFormProperties>({
		});

	}

	export interface CreateAssessmentFrameworkPostBody {

		/**
		 * The name of the new custom framework.
		 * Required
		 * Max length: 300
		 * Min length: 1
		 */
		name: string;

		/**
		 * An optional description for the new custom framework.
		 * Max length: 1000
		 * Min length: 1
		 */
		description?: string | null;

		/**
		 * The compliance type that the new custom framework supports, such as CIS or HIPAA.
		 * Max length: 100
		 */
		complianceType?: string | null;

		/**
		 * The control sets that are associated with the framework.
		 * Required
		 * Minimum items: 1
		 */
		controlSets: Array<CreateAssessmentFrameworkControlSet>;

		/** The tags that are associated with the framework. */
		tags?: {[id: string]: string };
	}
	export interface CreateAssessmentFrameworkPostBodyFormProperties {

		/**
		 * The name of the new custom framework.
		 * Required
		 * Max length: 300
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * An optional description for the new custom framework.
		 * Max length: 1000
		 * Min length: 1
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * The compliance type that the new custom framework supports, such as CIS or HIPAA.
		 * Max length: 100
		 */
		complianceType: FormControl<string | null | undefined>,

		/** The tags that are associated with the framework. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateAssessmentFrameworkPostBodyFormGroup() {
		return new FormGroup<CreateAssessmentFrameworkPostBodyFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(300), Validators.pattern('^[^\\]*$')]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1000), Validators.pattern('^[\w\W\s\S]*$')]),
			complianceType: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(100), Validators.pattern('^[\w\W\s\S]*$')]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateAssessmentReportPostBody {

		/**
		 * The name of the new assessment report.
		 * Required
		 * Max length: 300
		 * Min length: 1
		 */
		name: string;

		/**
		 * The description of the assessment report.
		 * Max length: 1000
		 */
		description?: string | null;

		/**
		 * <p>A SQL statement that represents an evidence finder query.</p> <p>Provide this parameter when you want to generate an assessment report from the results of an evidence finder search query. When you use this parameter, Audit Manager generates a one-time report using only the evidence from the query output. This report does not include any assessment evidence that was manually <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/generate-assessment-report.html#generate-assessment-report-include-evidence">added to a report using the console</a>, or <a href="https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_BatchAssociateAssessmentReportEvidence.html">associated with a report using the API</a>. </p> <p>To use this parameter, the <a href="https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_EvidenceFinderEnablement.html#auditmanager-Type-EvidenceFinderEnablement-enablementStatus">enablementStatus</a> of evidence finder must be <code>ENABLED</code>. </p> <p> For examples and help resolving <code>queryStatement</code> validation exceptions, see <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/evidence-finder-issues.html#querystatement-exceptions">Troubleshooting evidence finder issues</a> in the <i>Audit Manager User Guide.</i> </p>
		 * Max length: 10000
		 * Min length: 1
		 */
		queryStatement?: string | null;
	}
	export interface CreateAssessmentReportPostBodyFormProperties {

		/**
		 * The name of the new assessment report.
		 * Required
		 * Max length: 300
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The description of the assessment report.
		 * Max length: 1000
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * <p>A SQL statement that represents an evidence finder query.</p> <p>Provide this parameter when you want to generate an assessment report from the results of an evidence finder search query. When you use this parameter, Audit Manager generates a one-time report using only the evidence from the query output. This report does not include any assessment evidence that was manually <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/generate-assessment-report.html#generate-assessment-report-include-evidence">added to a report using the console</a>, or <a href="https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_BatchAssociateAssessmentReportEvidence.html">associated with a report using the API</a>. </p> <p>To use this parameter, the <a href="https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_EvidenceFinderEnablement.html#auditmanager-Type-EvidenceFinderEnablement-enablementStatus">enablementStatus</a> of evidence finder must be <code>ENABLED</code>. </p> <p> For examples and help resolving <code>queryStatement</code> validation exceptions, see <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/evidence-finder-issues.html#querystatement-exceptions">Troubleshooting evidence finder issues</a> in the <i>Audit Manager User Guide.</i> </p>
		 * Max length: 10000
		 * Min length: 1
		 */
		queryStatement: FormControl<string | null | undefined>,
	}
	export function CreateCreateAssessmentReportPostBodyFormGroup() {
		return new FormGroup<CreateAssessmentReportPostBodyFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(300), Validators.pattern('^[a-zA-Z0-9-_\.]+$')]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1000), Validators.pattern('^[\w\W\s\S]*$')]),
			queryStatement: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(10000), Validators.pattern('\(\?s\).*')]),
		});

	}

	export interface CreateControlPostBody {

		/**
		 * The name of the control.
		 * Required
		 * Max length: 300
		 * Min length: 1
		 */
		name: string;

		/**
		 * The description of the control.
		 * Max length: 1000
		 */
		description?: string | null;

		/**
		 * The steps to follow to determine if the control is satisfied.
		 * Max length: 1000
		 */
		testingInformation?: string | null;

		/**
		 * The title of the action plan for remediating the control.
		 * Max length: 300
		 */
		actionPlanTitle?: string | null;

		/**
		 * The recommended actions to carry out if the control isn't fulfilled.
		 * Max length: 1000
		 */
		actionPlanInstructions?: string | null;

		/**
		 * The data mapping sources for the control.
		 * Required
		 * Minimum items: 1
		 */
		controlMappingSources: Array<CreateControlMappingSource>;

		/** The tags that are associated with the control. */
		tags?: {[id: string]: string };
	}
	export interface CreateControlPostBodyFormProperties {

		/**
		 * The name of the control.
		 * Required
		 * Max length: 300
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The description of the control.
		 * Max length: 1000
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * The steps to follow to determine if the control is satisfied.
		 * Max length: 1000
		 */
		testingInformation: FormControl<string | null | undefined>,

		/**
		 * The title of the action plan for remediating the control.
		 * Max length: 300
		 */
		actionPlanTitle: FormControl<string | null | undefined>,

		/**
		 * The recommended actions to carry out if the control isn't fulfilled.
		 * Max length: 1000
		 */
		actionPlanInstructions: FormControl<string | null | undefined>,

		/** The tags that are associated with the control. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateControlPostBodyFormGroup() {
		return new FormGroup<CreateControlPostBodyFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(300), Validators.pattern('^[^\\]*$')]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1000), Validators.pattern('^[\w\W\s\S]*$')]),
			testingInformation: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1000), Validators.pattern('^[\w\W\s\S]*$')]),
			actionPlanTitle: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(300), Validators.pattern('^[\w\W\s\S]*$')]),
			actionPlanInstructions: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1000), Validators.pattern('^[\w\W\s\S]*$')]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface UpdateAssessmentPutBody {

		/**
		 * The name of the assessment to be updated.
		 * Max length: 300
		 * Min length: 1
		 */
		assessmentName?: string | null;

		/**
		 * The description of the assessment.
		 * Max length: 1000
		 */
		assessmentDescription?: string | null;

		/**
		 * The wrapper that contains the Amazon Web Services accounts and services that are in scope for the assessment.
		 * Required
		 */
		scope: UpdateAssessmentPutBodyScope;

		/** The location where Audit Manager saves assessment reports for the given assessment. */
		assessmentReportsDestination?: UpdateAssessmentPutBodyAssessmentReportsDestination;

		/** The list of roles for the assessment. */
		roles?: Array<Role>;
	}
	export interface UpdateAssessmentPutBodyFormProperties {

		/**
		 * The name of the assessment to be updated.
		 * Max length: 300
		 * Min length: 1
		 */
		assessmentName: FormControl<string | null | undefined>,

		/**
		 * The description of the assessment.
		 * Max length: 1000
		 */
		assessmentDescription: FormControl<string | null | undefined>,
	}
	export function CreateUpdateAssessmentPutBodyFormGroup() {
		return new FormGroup<UpdateAssessmentPutBodyFormProperties>({
			assessmentName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(300), Validators.pattern('^[^\\]*$')]),
			assessmentDescription: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1000), Validators.pattern('^[\w\W\s\S]*$')]),
		});

	}

	export interface UpdateAssessmentPutBodyScope {
		awsAccounts?: Array<AWSAccount>;
		awsServices?: Array<AWSService>;
	}
	export interface UpdateAssessmentPutBodyScopeFormProperties {
	}
	export function CreateUpdateAssessmentPutBodyScopeFormGroup() {
		return new FormGroup<UpdateAssessmentPutBodyScopeFormProperties>({
		});

	}

	export interface UpdateAssessmentPutBodyAssessmentReportsDestination {
		destinationType?: AssessmentReportDestinationType;
		destination?: string;
	}
	export interface UpdateAssessmentPutBodyAssessmentReportsDestinationFormProperties {
		destinationType: FormControl<AssessmentReportDestinationType | null | undefined>,
		destination: FormControl<string | null | undefined>,
	}
	export function CreateUpdateAssessmentPutBodyAssessmentReportsDestinationFormGroup() {
		return new FormGroup<UpdateAssessmentPutBodyAssessmentReportsDestinationFormProperties>({
			destinationType: new FormControl<AssessmentReportDestinationType | null | undefined>(undefined),
			destination: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateAssessmentFrameworkPutBody {

		/**
		 * The name of the framework to be updated.
		 * Required
		 * Max length: 300
		 * Min length: 1
		 */
		name: string;

		/**
		 * The description of the updated framework.
		 * Max length: 1000
		 * Min length: 1
		 */
		description?: string | null;

		/**
		 * The compliance type that the new custom framework supports, such as CIS or HIPAA.
		 * Max length: 100
		 */
		complianceType?: string | null;

		/**
		 * The control sets that are associated with the framework.
		 * Required
		 * Minimum items: 1
		 */
		controlSets: Array<UpdateAssessmentFrameworkControlSet>;
	}
	export interface UpdateAssessmentFrameworkPutBodyFormProperties {

		/**
		 * The name of the framework to be updated.
		 * Required
		 * Max length: 300
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The description of the updated framework.
		 * Max length: 1000
		 * Min length: 1
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * The compliance type that the new custom framework supports, such as CIS or HIPAA.
		 * Max length: 100
		 */
		complianceType: FormControl<string | null | undefined>,
	}
	export function CreateUpdateAssessmentFrameworkPutBodyFormGroup() {
		return new FormGroup<UpdateAssessmentFrameworkPutBodyFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(300), Validators.pattern('^[^\\]*$')]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1000), Validators.pattern('^[\w\W\s\S]*$')]),
			complianceType: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(100), Validators.pattern('^[\w\W\s\S]*$')]),
		});

	}

	export interface UpdateControlPutBody {

		/**
		 * The name of the updated control.
		 * Required
		 * Max length: 300
		 * Min length: 1
		 */
		name: string;

		/**
		 * The optional description of the control.
		 * Max length: 1000
		 */
		description?: string | null;

		/**
		 * The steps that you should follow to determine if the control is met.
		 * Max length: 1000
		 */
		testingInformation?: string | null;

		/**
		 * The title of the action plan for remediating the control.
		 * Max length: 300
		 */
		actionPlanTitle?: string | null;

		/**
		 * The recommended actions to carry out if the control isn't fulfilled.
		 * Max length: 1000
		 */
		actionPlanInstructions?: string | null;

		/**
		 * The data mapping sources for the control.
		 * Required
		 * Minimum items: 1
		 */
		controlMappingSources: Array<ControlMappingSource>;
	}
	export interface UpdateControlPutBodyFormProperties {

		/**
		 * The name of the updated control.
		 * Required
		 * Max length: 300
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The optional description of the control.
		 * Max length: 1000
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * The steps that you should follow to determine if the control is met.
		 * Max length: 1000
		 */
		testingInformation: FormControl<string | null | undefined>,

		/**
		 * The title of the action plan for remediating the control.
		 * Max length: 300
		 */
		actionPlanTitle: FormControl<string | null | undefined>,

		/**
		 * The recommended actions to carry out if the control isn't fulfilled.
		 * Max length: 1000
		 */
		actionPlanInstructions: FormControl<string | null | undefined>,
	}
	export function CreateUpdateControlPutBodyFormGroup() {
		return new FormGroup<UpdateControlPutBodyFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(300), Validators.pattern('^[^\\]*$')]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1000), Validators.pattern('^[\w\W\s\S]*$')]),
			testingInformation: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1000), Validators.pattern('^[\w\W\s\S]*$')]),
			actionPlanTitle: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(300), Validators.pattern('^[\w\W\s\S]*$')]),
			actionPlanInstructions: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1000), Validators.pattern('^[\w\W\s\S]*$')]),
		});

	}

	export interface DeregisterOrganizationAdminAccountPostBody {

		/**
		 * The identifier for the administrator account.
		 * Max length: 12
		 * Min length: 12
		 */
		adminAccountId?: string | null;
	}
	export interface DeregisterOrganizationAdminAccountPostBodyFormProperties {

		/**
		 * The identifier for the administrator account.
		 * Max length: 12
		 * Min length: 12
		 */
		adminAccountId: FormControl<string | null | undefined>,
	}
	export function CreateDeregisterOrganizationAdminAccountPostBodyFormGroup() {
		return new FormGroup<DeregisterOrganizationAdminAccountPostBodyFormProperties>({
			adminAccountId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(12), Validators.maxLength(12), Validators.pattern('^[0-9]{12}$')]),
		});

	}

	export interface DisassociateAssessmentReportEvidenceFolderPutBody {

		/**
		 * The unique identifier for the folder that the evidence is stored in.
		 * Required
		 * Max length: 36
		 * Min length: 36
		 */
		evidenceFolderId: string;
	}
	export interface DisassociateAssessmentReportEvidenceFolderPutBodyFormProperties {

		/**
		 * The unique identifier for the folder that the evidence is stored in.
		 * Required
		 * Max length: 36
		 * Min length: 36
		 */
		evidenceFolderId: FormControl<string | null | undefined>,
	}
	export function CreateDisassociateAssessmentReportEvidenceFolderPutBodyFormGroup() {
		return new FormGroup<DisassociateAssessmentReportEvidenceFolderPutBodyFormProperties>({
			evidenceFolderId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(36), Validators.maxLength(36), Validators.pattern('^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$')]),
		});

	}

	export interface TagResourcePostBody {

		/**
		 * The tags that are associated with the resource.
		 * Required
		 */
		tags: {[id: string]: string };
	}
	export interface TagResourcePostBodyFormProperties {

		/**
		 * The tags that are associated with the resource.
		 * Required
		 */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateTagResourcePostBodyFormGroup() {
		return new FormGroup<TagResourcePostBodyFormProperties>({
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface RegisterAccountPostBody {

		/**
		 * The KMS key details.
		 * Max length: 2048
		 * Min length: 7
		 */
		kmsKey?: string | null;

		/**
		 * The delegated administrator account for Audit Manager.
		 * Max length: 12
		 * Min length: 12
		 */
		delegatedAdminAccount?: string | null;
	}
	export interface RegisterAccountPostBodyFormProperties {

		/**
		 * The KMS key details.
		 * Max length: 2048
		 * Min length: 7
		 */
		kmsKey: FormControl<string | null | undefined>,

		/**
		 * The delegated administrator account for Audit Manager.
		 * Max length: 12
		 * Min length: 12
		 */
		delegatedAdminAccount: FormControl<string | null | undefined>,
	}
	export function CreateRegisterAccountPostBodyFormGroup() {
		return new FormGroup<RegisterAccountPostBodyFormProperties>({
			kmsKey: new FormControl<string | null | undefined>(undefined, [Validators.minLength(7), Validators.maxLength(2048), Validators.pattern('^arn:.*:kms:.*|DEFAULT')]),
			delegatedAdminAccount: new FormControl<string | null | undefined>(undefined, [Validators.minLength(12), Validators.maxLength(12), Validators.pattern('^[0-9]{12}$')]),
		});

	}

	export interface RegisterOrganizationAdminAccountPostBody {

		/**
		 * The identifier for the delegated administrator account.
		 * Required
		 * Max length: 12
		 * Min length: 12
		 */
		adminAccountId: string;
	}
	export interface RegisterOrganizationAdminAccountPostBodyFormProperties {

		/**
		 * The identifier for the delegated administrator account.
		 * Required
		 * Max length: 12
		 * Min length: 12
		 */
		adminAccountId: FormControl<string | null | undefined>,
	}
	export function CreateRegisterOrganizationAdminAccountPostBodyFormGroup() {
		return new FormGroup<RegisterOrganizationAdminAccountPostBodyFormProperties>({
			adminAccountId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(12), Validators.maxLength(12), Validators.pattern('^[0-9]{12}$')]),
		});

	}

	export interface StartAssessmentFrameworkSharePostBody {

		/**
		 * The Amazon Web Services account of the recipient.
		 * Required
		 * Max length: 12
		 * Min length: 12
		 */
		destinationAccount: string;

		/**
		 * The Amazon Web Services Region of the recipient.
		 * Required
		 */
		destinationRegion: string;

		/**
		 * An optional comment from the sender about the share request.
		 * Max length: 500
		 */
		comment?: string | null;
	}
	export interface StartAssessmentFrameworkSharePostBodyFormProperties {

		/**
		 * The Amazon Web Services account of the recipient.
		 * Required
		 * Max length: 12
		 * Min length: 12
		 */
		destinationAccount: FormControl<string | null | undefined>,

		/**
		 * The Amazon Web Services Region of the recipient.
		 * Required
		 */
		destinationRegion: FormControl<string | null | undefined>,

		/**
		 * An optional comment from the sender about the share request.
		 * Max length: 500
		 */
		comment: FormControl<string | null | undefined>,
	}
	export function CreateStartAssessmentFrameworkSharePostBodyFormGroup() {
		return new FormGroup<StartAssessmentFrameworkSharePostBodyFormProperties>({
			destinationAccount: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(12), Validators.maxLength(12), Validators.pattern('^[0-9]{12}$')]),
			destinationRegion: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[a-z]{2}-[a-z]+-[0-9]{1}$')]),
			comment: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(500), Validators.pattern('^[\w\W\s\S]*$')]),
		});

	}

	export interface UpdateAssessmentControlPutBody {

		/** The status of the control. */
		controlStatus?: ControlStatus | null;

		/**
		 * The comment body text for the control.
		 * Max length: 500
		 */
		commentBody?: string | null;
	}
	export interface UpdateAssessmentControlPutBodyFormProperties {

		/** The status of the control. */
		controlStatus: FormControl<ControlStatus | null | undefined>,

		/**
		 * The comment body text for the control.
		 * Max length: 500
		 */
		commentBody: FormControl<string | null | undefined>,
	}
	export function CreateUpdateAssessmentControlPutBodyFormGroup() {
		return new FormGroup<UpdateAssessmentControlPutBodyFormProperties>({
			controlStatus: new FormControl<ControlStatus | null | undefined>(undefined),
			commentBody: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(500), Validators.pattern('^[\w\W\s\S]*$')]),
		});

	}

	export interface UpdateAssessmentControlSetStatusPutBody {

		/**
		 * The status of the control set that's being updated.
		 * Required
		 */
		status: ControlSetStatus;

		/**
		 * The comment that's related to the status update.
		 * Required
		 * Max length: 350
		 */
		comment: string;
	}
	export interface UpdateAssessmentControlSetStatusPutBodyFormProperties {

		/**
		 * The status of the control set that's being updated.
		 * Required
		 */
		status: FormControl<ControlSetStatus | null | undefined>,

		/**
		 * The comment that's related to the status update.
		 * Required
		 * Max length: 350
		 */
		comment: FormControl<string | null | undefined>,
	}
	export function CreateUpdateAssessmentControlSetStatusPutBodyFormGroup() {
		return new FormGroup<UpdateAssessmentControlSetStatusPutBodyFormProperties>({
			status: new FormControl<ControlSetStatus | null | undefined>(undefined, [Validators.required]),
			comment: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(350), Validators.pattern('^[\w\W\s\S]*$')]),
		});

	}

	export interface UpdateAssessmentFrameworkSharePutBody {

		/**
		 * Specifies whether the share request is a sent request or a received request.
		 * Required
		 */
		requestType: ShareRequestType;

		/**
		 * Specifies the update action for the share request.
		 * Required
		 */
		action: ShareRequestAction;
	}
	export interface UpdateAssessmentFrameworkSharePutBodyFormProperties {

		/**
		 * Specifies whether the share request is a sent request or a received request.
		 * Required
		 */
		requestType: FormControl<ShareRequestType | null | undefined>,

		/**
		 * Specifies the update action for the share request.
		 * Required
		 */
		action: FormControl<ShareRequestAction | null | undefined>,
	}
	export function CreateUpdateAssessmentFrameworkSharePutBodyFormGroup() {
		return new FormGroup<UpdateAssessmentFrameworkSharePutBodyFormProperties>({
			requestType: new FormControl<ShareRequestType | null | undefined>(undefined, [Validators.required]),
			action: new FormControl<ShareRequestAction | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateAssessmentStatusPutBody {

		/**
		 * The current status of the assessment.
		 * Required
		 */
		status: AssessmentStatus;
	}
	export interface UpdateAssessmentStatusPutBodyFormProperties {

		/**
		 * The current status of the assessment.
		 * Required
		 */
		status: FormControl<AssessmentStatus | null | undefined>,
	}
	export function CreateUpdateAssessmentStatusPutBodyFormGroup() {
		return new FormGroup<UpdateAssessmentStatusPutBodyFormProperties>({
			status: new FormControl<AssessmentStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateSettingsPutBody {

		/**
		 * The Amazon Simple Notification Service (Amazon SNS) topic that Audit Manager sends notifications to.
		 * Max length: 2048
		 * Min length: 4
		 */
		snsTopic?: string | null;

		/** The location where Audit Manager saves assessment reports for the given assessment. */
		defaultAssessmentReportsDestination?: UpdateSettingsPutBodyDefaultAssessmentReportsDestination;

		/** A list of the default audit owners. */
		defaultProcessOwners?: Array<Role>;

		/**
		 * The KMS key details.
		 * Max length: 2048
		 * Min length: 7
		 */
		kmsKey?: string | null;

		/** <p>Specifies whether the evidence finder feature is enabled. Change this attribute to enable or disable evidence finder.</p> <important> <p>When you use this attribute to disable evidence finder, Audit Manager deletes the event data store that’s used to query your evidence data. As a result, you can’t re-enable evidence finder and use the feature again. Your only alternative is to <a href="https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_DeregisterAccount.html">deregister</a> and then <a href="https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_RegisterAccount.html">re-register</a> Audit Manager. </p> </important> */
		evidenceFinderEnabled?: boolean | null;

		/** <p>The deregistration policy for the data that's stored in Audit Manager. You can use this attribute to determine how your data is handled when you <a href="https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_DeregisterAccount.html">deregister Audit Manager</a>.</p> <p>By default, Audit Manager retains evidence data for two years from the time of its creation. Other Audit Manager resources (including assessments, custom controls, and custom frameworks) remain in Audit Manager indefinitely, and are available if you <a href="https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_RegisterAccount.html">re-register Audit Manager</a> in the future. For more information about data retention, see <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/data-protection.html">Data Protection</a> in the <i>Audit Manager User Guide</i>.</p> <important> <p>If you choose to delete all data, this action permanently deletes all evidence data in your account within seven days. It also deletes all of the Audit Manager resources that you created, including assessments, custom controls, and custom frameworks. Your data will not be available if you re-register Audit Manager in the future.</p> </important> */
		deregistrationPolicy?: UpdateSettingsPutBodyDeregistrationPolicy;

		/** The default s3 bucket where Audit Manager saves the files that you export from evidence finder. */
		defaultExportDestination?: UpdateSettingsPutBodyDefaultExportDestination;
	}
	export interface UpdateSettingsPutBodyFormProperties {

		/**
		 * The Amazon Simple Notification Service (Amazon SNS) topic that Audit Manager sends notifications to.
		 * Max length: 2048
		 * Min length: 4
		 */
		snsTopic: FormControl<string | null | undefined>,

		/**
		 * The KMS key details.
		 * Max length: 2048
		 * Min length: 7
		 */
		kmsKey: FormControl<string | null | undefined>,

		/** <p>Specifies whether the evidence finder feature is enabled. Change this attribute to enable or disable evidence finder.</p> <important> <p>When you use this attribute to disable evidence finder, Audit Manager deletes the event data store that’s used to query your evidence data. As a result, you can’t re-enable evidence finder and use the feature again. Your only alternative is to <a href="https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_DeregisterAccount.html">deregister</a> and then <a href="https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_RegisterAccount.html">re-register</a> Audit Manager. </p> </important> */
		evidenceFinderEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateSettingsPutBodyFormGroup() {
		return new FormGroup<UpdateSettingsPutBodyFormProperties>({
			snsTopic: new FormControl<string | null | undefined>(undefined, [Validators.minLength(4), Validators.maxLength(2048), Validators.pattern('^arn:.*:sns:.*|NONE')]),
			kmsKey: new FormControl<string | null | undefined>(undefined, [Validators.minLength(7), Validators.maxLength(2048), Validators.pattern('^arn:.*:kms:.*|DEFAULT')]),
			evidenceFinderEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UpdateSettingsPutBodyDefaultAssessmentReportsDestination {
		destinationType?: AssessmentReportDestinationType;
		destination?: string;
	}
	export interface UpdateSettingsPutBodyDefaultAssessmentReportsDestinationFormProperties {
		destinationType: FormControl<AssessmentReportDestinationType | null | undefined>,
		destination: FormControl<string | null | undefined>,
	}
	export function CreateUpdateSettingsPutBodyDefaultAssessmentReportsDestinationFormGroup() {
		return new FormGroup<UpdateSettingsPutBodyDefaultAssessmentReportsDestinationFormProperties>({
			destinationType: new FormControl<AssessmentReportDestinationType | null | undefined>(undefined),
			destination: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateSettingsPutBodyDeregistrationPolicy {
		deleteResources?: DeleteResources;
	}
	export interface UpdateSettingsPutBodyDeregistrationPolicyFormProperties {
		deleteResources: FormControl<DeleteResources | null | undefined>,
	}
	export function CreateUpdateSettingsPutBodyDeregistrationPolicyFormGroup() {
		return new FormGroup<UpdateSettingsPutBodyDeregistrationPolicyFormProperties>({
			deleteResources: new FormControl<DeleteResources | null | undefined>(undefined),
		});

	}

	export interface UpdateSettingsPutBodyDefaultExportDestination {
		destinationType?: AssessmentReportDestinationType;
		destination?: string;
	}
	export interface UpdateSettingsPutBodyDefaultExportDestinationFormProperties {
		destinationType: FormControl<AssessmentReportDestinationType | null | undefined>,
		destination: FormControl<string | null | undefined>,
	}
	export function CreateUpdateSettingsPutBodyDefaultExportDestinationFormGroup() {
		return new FormGroup<UpdateSettingsPutBodyDefaultExportDestinationFormProperties>({
			destinationType: new FormControl<AssessmentReportDestinationType | null | undefined>(undefined),
			destination: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ValidateAssessmentReportIntegrityPostBody {

		/**
		 * The relative path of the Amazon S3 bucket that the assessment report is stored in.
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		s3RelativePath: string;
	}
	export interface ValidateAssessmentReportIntegrityPostBodyFormProperties {

		/**
		 * The relative path of the Amazon S3 bucket that the assessment report is stored in.
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		s3RelativePath: FormControl<string | null | undefined>,
	}
	export function CreateValidateAssessmentReportIntegrityPostBodyFormGroup() {
		return new FormGroup<ValidateAssessmentReportIntegrityPostBodyFormProperties>({
			s3RelativePath: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1024), Validators.pattern('^(S|s)3:\/\/[a-zA-Z0-9\-\.\(\)\\\'\*\_\!\/]+$')]),
		});

	}

}

