import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface AcceptAdministratorInvitationResponse {
	}
	export interface AcceptAdministratorInvitationResponseFormProperties {
	}
	export function CreateAcceptAdministratorInvitationResponseFormGroup() {
		return new FormGroup<AcceptAdministratorInvitationResponseFormProperties>({
		});

	}

	export interface InternalException {
	}
	export interface InternalExceptionFormProperties {
	}
	export function CreateInternalExceptionFormGroup() {
		return new FormGroup<InternalExceptionFormProperties>({
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

	export interface LimitExceededException {
	}
	export interface LimitExceededExceptionFormProperties {
	}
	export function CreateLimitExceededExceptionFormGroup() {
		return new FormGroup<LimitExceededExceptionFormProperties>({
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

	export interface InvalidAccessException {
	}
	export interface InvalidAccessExceptionFormProperties {
	}
	export function CreateInvalidAccessExceptionFormGroup() {
		return new FormGroup<InvalidAccessExceptionFormProperties>({
		});

	}

	export interface AcceptInvitationResponse {
	}
	export interface AcceptInvitationResponseFormProperties {
	}
	export function CreateAcceptInvitationResponseFormGroup() {
		return new FormGroup<AcceptInvitationResponseFormProperties>({
		});

	}

	export interface BatchDeleteAutomationRulesResponse {
		ProcessedAutomationRules?: Array<string>;
		UnprocessedAutomationRules?: Array<UnprocessedAutomationRule>;
	}
	export interface BatchDeleteAutomationRulesResponseFormProperties {
	}
	export function CreateBatchDeleteAutomationRulesResponseFormGroup() {
		return new FormGroup<BatchDeleteAutomationRulesResponseFormProperties>({
		});

	}


	/**  A list of objects containing <code>RuleArn</code>, <code>ErrorCode</code>, and <code>ErrorMessage</code>. This parameter tells you which automation rules the request didn't process and why.  */
	export interface UnprocessedAutomationRule {
		RuleArn?: string;
		ErrorCode?: number | null;
		ErrorMessage?: string;
	}

	/**  A list of objects containing <code>RuleArn</code>, <code>ErrorCode</code>, and <code>ErrorMessage</code>. This parameter tells you which automation rules the request didn't process and why.  */
	export interface UnprocessedAutomationRuleFormProperties {
		RuleArn: FormControl<string | null | undefined>,
		ErrorCode: FormControl<number | null | undefined>,
		ErrorMessage: FormControl<string | null | undefined>,
	}
	export function CreateUnprocessedAutomationRuleFormGroup() {
		return new FormGroup<UnprocessedAutomationRuleFormProperties>({
			RuleArn: new FormControl<string | null | undefined>(undefined),
			ErrorCode: new FormControl<number | null | undefined>(undefined),
			ErrorMessage: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BatchDisableStandardsResponse {
		StandardsSubscriptions?: Array<StandardsSubscription>;
	}
	export interface BatchDisableStandardsResponseFormProperties {
	}
	export function CreateBatchDisableStandardsResponseFormGroup() {
		return new FormGroup<BatchDisableStandardsResponseFormProperties>({
		});

	}


	/** A resource that represents your subscription to a supported standard. */
	export interface StandardsSubscription {

		/** Required */
		StandardsSubscriptionArn: string;

		/** Required */
		StandardsArn: string;

		/** Required */
		StandardsInput: StandardsInputParameterMap;

		/** Required */
		StandardsStatus: StandardsStatus;
		StandardsStatusReason?: StandardsStatusReason;
	}

	/** A resource that represents your subscription to a supported standard. */
	export interface StandardsSubscriptionFormProperties {

		/** Required */
		StandardsSubscriptionArn: FormControl<string | null | undefined>,

		/** Required */
		StandardsArn: FormControl<string | null | undefined>,

		/** Required */
		StandardsStatus: FormControl<StandardsStatus | null | undefined>,
	}
	export function CreateStandardsSubscriptionFormGroup() {
		return new FormGroup<StandardsSubscriptionFormProperties>({
			StandardsSubscriptionArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			StandardsArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			StandardsStatus: new FormControl<StandardsStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface StandardsInputParameterMap {
	}
	export interface StandardsInputParameterMapFormProperties {
	}
	export function CreateStandardsInputParameterMapFormGroup() {
		return new FormGroup<StandardsInputParameterMapFormProperties>({
		});

	}

	export enum StandardsStatus { PENDING = 'PENDING', READY = 'READY', FAILED = 'FAILED', DELETING = 'DELETING', INCOMPLETE = 'INCOMPLETE' }


	/** The reason for the current status of a standard subscription. */
	export interface StandardsStatusReason {

		/** Required */
		StatusReasonCode: StatusReasonCode;
	}

	/** The reason for the current status of a standard subscription. */
	export interface StandardsStatusReasonFormProperties {

		/** Required */
		StatusReasonCode: FormControl<StatusReasonCode | null | undefined>,
	}
	export function CreateStandardsStatusReasonFormGroup() {
		return new FormGroup<StandardsStatusReasonFormProperties>({
			StatusReasonCode: new FormControl<StatusReasonCode | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum StatusReasonCode { NO_AVAILABLE_CONFIGURATION_RECORDER = 'NO_AVAILABLE_CONFIGURATION_RECORDER', INTERNAL_ERROR = 'INTERNAL_ERROR' }

	export interface BatchEnableStandardsResponse {
		StandardsSubscriptions?: Array<StandardsSubscription>;
	}
	export interface BatchEnableStandardsResponseFormProperties {
	}
	export function CreateBatchEnableStandardsResponseFormGroup() {
		return new FormGroup<BatchEnableStandardsResponseFormProperties>({
		});

	}


	/** The standard that you want to enable. */
	export interface StandardsSubscriptionRequest {

		/** Required */
		StandardsArn: string;
		StandardsInput?: StandardsInputParameterMap;
	}

	/** The standard that you want to enable. */
	export interface StandardsSubscriptionRequestFormProperties {

		/** Required */
		StandardsArn: FormControl<string | null | undefined>,
	}
	export function CreateStandardsSubscriptionRequestFormGroup() {
		return new FormGroup<StandardsSubscriptionRequestFormProperties>({
			StandardsArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface BatchGetAutomationRulesResponse {
		Rules?: Array<AutomationRulesConfig>;
		UnprocessedAutomationRules?: Array<UnprocessedAutomationRule>;
	}
	export interface BatchGetAutomationRulesResponseFormProperties {
	}
	export function CreateBatchGetAutomationRulesResponseFormGroup() {
		return new FormGroup<BatchGetAutomationRulesResponseFormProperties>({
		});

	}


	/**  Defines the configuration of an automation rule.  */
	export interface AutomationRulesConfig {
		RuleArn?: string;
		RuleStatus?: RuleStatus;
		RuleOrder?: number | null;
		RuleName?: string;
		Description?: string;
		IsTerminal?: boolean | null;
		Criteria?: AutomationRulesFindingFilters;
		Actions?: Array<AutomationRulesAction>;
		CreatedAt?: Date;
		UpdatedAt?: Date;
		CreatedBy?: string;
	}

	/**  Defines the configuration of an automation rule.  */
	export interface AutomationRulesConfigFormProperties {
		RuleArn: FormControl<string | null | undefined>,
		RuleStatus: FormControl<RuleStatus | null | undefined>,
		RuleOrder: FormControl<number | null | undefined>,
		RuleName: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		IsTerminal: FormControl<boolean | null | undefined>,
		CreatedAt: FormControl<Date | null | undefined>,
		UpdatedAt: FormControl<Date | null | undefined>,
		CreatedBy: FormControl<string | null | undefined>,
	}
	export function CreateAutomationRulesConfigFormGroup() {
		return new FormGroup<AutomationRulesConfigFormProperties>({
			RuleArn: new FormControl<string | null | undefined>(undefined),
			RuleStatus: new FormControl<RuleStatus | null | undefined>(undefined),
			RuleOrder: new FormControl<number | null | undefined>(undefined),
			RuleName: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			IsTerminal: new FormControl<boolean | null | undefined>(undefined),
			CreatedAt: new FormControl<Date | null | undefined>(undefined),
			UpdatedAt: new FormControl<Date | null | undefined>(undefined),
			CreatedBy: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum RuleStatus { ENABLED = 'ENABLED', DISABLED = 'DISABLED' }


	/**  The criteria that determine which findings a rule applies to.  */
	export interface AutomationRulesFindingFilters {
		ProductArn?: Array<StringFilter>;
		AwsAccountId?: Array<StringFilter>;
		Id?: Array<StringFilter>;
		GeneratorId?: Array<StringFilter>;
		Type?: Array<StringFilter>;
		FirstObservedAt?: Array<DateFilter>;
		LastObservedAt?: Array<DateFilter>;
		CreatedAt?: Array<DateFilter>;
		UpdatedAt?: Array<DateFilter>;
		Confidence?: Array<NumberFilter>;
		Criticality?: Array<NumberFilter>;
		Title?: Array<StringFilter>;
		Description?: Array<StringFilter>;
		SourceUrl?: Array<StringFilter>;
		ProductName?: Array<StringFilter>;
		CompanyName?: Array<StringFilter>;
		SeverityLabel?: Array<StringFilter>;
		ResourceType?: Array<StringFilter>;
		ResourceId?: Array<StringFilter>;
		ResourcePartition?: Array<StringFilter>;
		ResourceRegion?: Array<StringFilter>;
		ResourceTags?: Array<MapFilter>;
		ResourceDetailsOther?: Array<MapFilter>;
		ComplianceStatus?: Array<StringFilter>;
		ComplianceSecurityControlId?: Array<StringFilter>;
		ComplianceAssociatedStandardsId?: Array<StringFilter>;
		VerificationState?: Array<StringFilter>;
		WorkflowStatus?: Array<StringFilter>;
		RecordState?: Array<StringFilter>;
		RelatedFindingsProductArn?: Array<StringFilter>;
		RelatedFindingsId?: Array<StringFilter>;
		NoteText?: Array<StringFilter>;
		NoteUpdatedAt?: Array<DateFilter>;
		NoteUpdatedBy?: Array<StringFilter>;
		UserDefinedFields?: Array<MapFilter>;
	}

	/**  The criteria that determine which findings a rule applies to.  */
	export interface AutomationRulesFindingFiltersFormProperties {
	}
	export function CreateAutomationRulesFindingFiltersFormGroup() {
		return new FormGroup<AutomationRulesFindingFiltersFormProperties>({
		});

	}


	/** A string filter for filtering Security Hub findings. */
	export interface StringFilter {
		Value?: string;
		Comparison?: StringFilterComparison;
	}

	/** A string filter for filtering Security Hub findings. */
	export interface StringFilterFormProperties {
		Value: FormControl<string | null | undefined>,
		Comparison: FormControl<StringFilterComparison | null | undefined>,
	}
	export function CreateStringFilterFormGroup() {
		return new FormGroup<StringFilterFormProperties>({
			Value: new FormControl<string | null | undefined>(undefined),
			Comparison: new FormControl<StringFilterComparison | null | undefined>(undefined),
		});

	}

	export enum StringFilterComparison { EQUALS = 'EQUALS', PREFIX = 'PREFIX', NOT_EQUALS = 'NOT_EQUALS', PREFIX_NOT_EQUALS = 'PREFIX_NOT_EQUALS', CONTAINS = 'CONTAINS', NOT_CONTAINS = 'NOT_CONTAINS' }


	/** A date filter for querying findings. */
	export interface DateFilter {
		Start?: string;
		End?: string;
		DateRange?: DateRange;
	}

	/** A date filter for querying findings. */
	export interface DateFilterFormProperties {
		Start: FormControl<string | null | undefined>,
		End: FormControl<string | null | undefined>,
	}
	export function CreateDateFilterFormGroup() {
		return new FormGroup<DateFilterFormProperties>({
			Start: new FormControl<string | null | undefined>(undefined),
			End: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A date range for the date filter. */
	export interface DateRange {
		Value?: number | null;
		Unit?: DateRangeUnit;
	}

	/** A date range for the date filter. */
	export interface DateRangeFormProperties {
		Value: FormControl<number | null | undefined>,
		Unit: FormControl<DateRangeUnit | null | undefined>,
	}
	export function CreateDateRangeFormGroup() {
		return new FormGroup<DateRangeFormProperties>({
			Value: new FormControl<number | null | undefined>(undefined),
			Unit: new FormControl<DateRangeUnit | null | undefined>(undefined),
		});

	}

	export enum DateRangeUnit { DAYS = 'DAYS' }


	/** A number filter for querying findings. */
	export interface NumberFilter {
		Gte?: number | null;
		Lte?: number | null;
		Eq?: number | null;
	}

	/** A number filter for querying findings. */
	export interface NumberFilterFormProperties {
		Gte: FormControl<number | null | undefined>,
		Lte: FormControl<number | null | undefined>,
		Eq: FormControl<number | null | undefined>,
	}
	export function CreateNumberFilterFormGroup() {
		return new FormGroup<NumberFilterFormProperties>({
			Gte: new FormControl<number | null | undefined>(undefined),
			Lte: new FormControl<number | null | undefined>(undefined),
			Eq: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A map filter for filtering Security Hub findings. Each map filter provides the field to check for, the value to check for, and the comparison operator. */
	export interface MapFilter {
		Key?: string;
		Value?: string;
		Comparison?: MapFilterComparison;
	}

	/** A map filter for filtering Security Hub findings. Each map filter provides the field to check for, the value to check for, and the comparison operator. */
	export interface MapFilterFormProperties {
		Key: FormControl<string | null | undefined>,
		Value: FormControl<string | null | undefined>,
		Comparison: FormControl<MapFilterComparison | null | undefined>,
	}
	export function CreateMapFilterFormGroup() {
		return new FormGroup<MapFilterFormProperties>({
			Key: new FormControl<string | null | undefined>(undefined),
			Value: new FormControl<string | null | undefined>(undefined),
			Comparison: new FormControl<MapFilterComparison | null | undefined>(undefined),
		});

	}

	export enum MapFilterComparison { EQUALS = 'EQUALS', NOT_EQUALS = 'NOT_EQUALS', CONTAINS = 'CONTAINS', NOT_CONTAINS = 'NOT_CONTAINS' }


	/**  One or more actions to update finding fields if a finding matches the defined criteria of the rule.  */
	export interface AutomationRulesAction {
		Type?: AutomationRulesActionType;
		FindingFieldsUpdate?: AutomationRulesFindingFieldsUpdate;
	}

	/**  One or more actions to update finding fields if a finding matches the defined criteria of the rule.  */
	export interface AutomationRulesActionFormProperties {
		Type: FormControl<AutomationRulesActionType | null | undefined>,
	}
	export function CreateAutomationRulesActionFormGroup() {
		return new FormGroup<AutomationRulesActionFormProperties>({
			Type: new FormControl<AutomationRulesActionType | null | undefined>(undefined),
		});

	}

	export enum AutomationRulesActionType { FINDING_FIELDS_UPDATE = 'FINDING_FIELDS_UPDATE' }


	/**  Identifies the finding fields that the automation rule action updates when a finding matches the defined criteria.  */
	export interface AutomationRulesFindingFieldsUpdate {

		/** The updated note. */
		Note?: NoteUpdate;

		/** Updates to the severity information for a finding. */
		Severity?: SeverityUpdate;
		VerificationState?: VerificationState;
		Confidence?: number | null;
		Criticality?: number | null;
		Types?: Array<string>;
		UserDefinedFields?: FieldMap;

		/** Used to update information about the investigation into the finding. */
		Workflow?: WorkflowUpdate;
		RelatedFindings?: Array<RelatedFinding>;
	}

	/**  Identifies the finding fields that the automation rule action updates when a finding matches the defined criteria.  */
	export interface AutomationRulesFindingFieldsUpdateFormProperties {
		VerificationState: FormControl<VerificationState | null | undefined>,
		Confidence: FormControl<number | null | undefined>,
		Criticality: FormControl<number | null | undefined>,
	}
	export function CreateAutomationRulesFindingFieldsUpdateFormGroup() {
		return new FormGroup<AutomationRulesFindingFieldsUpdateFormProperties>({
			VerificationState: new FormControl<VerificationState | null | undefined>(undefined),
			Confidence: new FormControl<number | null | undefined>(undefined),
			Criticality: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The updated note. */
	export interface NoteUpdate {

		/** Required */
		Text: string;

		/** Required */
		UpdatedBy: string;
	}

	/** The updated note. */
	export interface NoteUpdateFormProperties {

		/** Required */
		Text: FormControl<string | null | undefined>,

		/** Required */
		UpdatedBy: FormControl<string | null | undefined>,
	}
	export function CreateNoteUpdateFormGroup() {
		return new FormGroup<NoteUpdateFormProperties>({
			Text: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			UpdatedBy: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Updates to the severity information for a finding. */
	export interface SeverityUpdate {
		Normalized?: number | null;
		Product?: number | null;
		Label?: SeverityLabel;
	}

	/** Updates to the severity information for a finding. */
	export interface SeverityUpdateFormProperties {
		Normalized: FormControl<number | null | undefined>,
		Product: FormControl<number | null | undefined>,
		Label: FormControl<SeverityLabel | null | undefined>,
	}
	export function CreateSeverityUpdateFormGroup() {
		return new FormGroup<SeverityUpdateFormProperties>({
			Normalized: new FormControl<number | null | undefined>(undefined),
			Product: new FormControl<number | null | undefined>(undefined),
			Label: new FormControl<SeverityLabel | null | undefined>(undefined),
		});

	}

	export enum SeverityLabel { INFORMATIONAL = 'INFORMATIONAL', LOW = 'LOW', MEDIUM = 'MEDIUM', HIGH = 'HIGH', CRITICAL = 'CRITICAL' }

	export enum VerificationState { UNKNOWN = 'UNKNOWN', TRUE_POSITIVE = 'TRUE_POSITIVE', FALSE_POSITIVE = 'FALSE_POSITIVE', BENIGN_POSITIVE = 'BENIGN_POSITIVE' }

	export interface FieldMap {
	}
	export interface FieldMapFormProperties {
	}
	export function CreateFieldMapFormGroup() {
		return new FormGroup<FieldMapFormProperties>({
		});

	}


	/** Used to update information about the investigation into the finding. */
	export interface WorkflowUpdate {
		Status?: WorkflowStatus;
	}

	/** Used to update information about the investigation into the finding. */
	export interface WorkflowUpdateFormProperties {
		Status: FormControl<WorkflowStatus | null | undefined>,
	}
	export function CreateWorkflowUpdateFormGroup() {
		return new FormGroup<WorkflowUpdateFormProperties>({
			Status: new FormControl<WorkflowStatus | null | undefined>(undefined),
		});

	}

	export enum WorkflowStatus { NEW = 'NEW', NOTIFIED = 'NOTIFIED', RESOLVED = 'RESOLVED', SUPPRESSED = 'SUPPRESSED' }


	/** Details about a related finding. */
	export interface RelatedFinding {

		/** Required */
		ProductArn: string;

		/** Required */
		Id: string;
	}

	/** Details about a related finding. */
	export interface RelatedFindingFormProperties {

		/** Required */
		ProductArn: FormControl<string | null | undefined>,

		/** Required */
		Id: FormControl<string | null | undefined>,
	}
	export function CreateRelatedFindingFormGroup() {
		return new FormGroup<RelatedFindingFormProperties>({
			ProductArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

	export interface BatchGetSecurityControlsResponse {

		/** Required */
		SecurityControls: Array<SecurityControl>;
		UnprocessedIds?: Array<UnprocessedSecurityControl>;
	}
	export interface BatchGetSecurityControlsResponseFormProperties {
	}
	export function CreateBatchGetSecurityControlsResponseFormGroup() {
		return new FormGroup<BatchGetSecurityControlsResponseFormProperties>({
		});

	}


	/**  A security control in Security Hub describes a security best practice related to a specific resource.  */
	export interface SecurityControl {

		/** Required */
		SecurityControlId: string;

		/** Required */
		SecurityControlArn: string;

		/** Required */
		Title: string;

		/** Required */
		Description: string;

		/** Required */
		RemediationUrl: string;

		/** Required */
		SeverityRating: SeverityRating;

		/** Required */
		SecurityControlStatus: RuleStatus;
	}

	/**  A security control in Security Hub describes a security best practice related to a specific resource.  */
	export interface SecurityControlFormProperties {

		/** Required */
		SecurityControlId: FormControl<string | null | undefined>,

		/** Required */
		SecurityControlArn: FormControl<string | null | undefined>,

		/** Required */
		Title: FormControl<string | null | undefined>,

		/** Required */
		Description: FormControl<string | null | undefined>,

		/** Required */
		RemediationUrl: FormControl<string | null | undefined>,

		/** Required */
		SeverityRating: FormControl<SeverityRating | null | undefined>,

		/** Required */
		SecurityControlStatus: FormControl<RuleStatus | null | undefined>,
	}
	export function CreateSecurityControlFormGroup() {
		return new FormGroup<SecurityControlFormProperties>({
			SecurityControlId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SecurityControlArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Title: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RemediationUrl: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SeverityRating: new FormControl<SeverityRating | null | undefined>(undefined, [Validators.required]),
			SecurityControlStatus: new FormControl<RuleStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum SeverityRating { LOW = 'LOW', MEDIUM = 'MEDIUM', HIGH = 'HIGH', CRITICAL = 'CRITICAL' }


	/**  Provides details about a security control for which a response couldn't be returned.  */
	export interface UnprocessedSecurityControl {

		/** Required */
		SecurityControlId: string;

		/** Required */
		ErrorCode: UnprocessedErrorCode;
		ErrorReason?: string;
	}

	/**  Provides details about a security control for which a response couldn't be returned.  */
	export interface UnprocessedSecurityControlFormProperties {

		/** Required */
		SecurityControlId: FormControl<string | null | undefined>,

		/** Required */
		ErrorCode: FormControl<UnprocessedErrorCode | null | undefined>,
		ErrorReason: FormControl<string | null | undefined>,
	}
	export function CreateUnprocessedSecurityControlFormGroup() {
		return new FormGroup<UnprocessedSecurityControlFormProperties>({
			SecurityControlId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ErrorCode: new FormControl<UnprocessedErrorCode | null | undefined>(undefined, [Validators.required]),
			ErrorReason: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum UnprocessedErrorCode { INVALID_INPUT = 'INVALID_INPUT', ACCESS_DENIED = 'ACCESS_DENIED', NOT_FOUND = 'NOT_FOUND', LIMIT_EXCEEDED = 'LIMIT_EXCEEDED' }

	export interface BatchGetStandardsControlAssociationsResponse {

		/** Required */
		StandardsControlAssociationDetails: Array<StandardsControlAssociationDetail>;
		UnprocessedAssociations?: Array<UnprocessedStandardsControlAssociation>;
	}
	export interface BatchGetStandardsControlAssociationsResponseFormProperties {
	}
	export function CreateBatchGetStandardsControlAssociationsResponseFormGroup() {
		return new FormGroup<BatchGetStandardsControlAssociationsResponseFormProperties>({
		});

	}


	/**  Provides details about a control's enablement status in a specified standard.  */
	export interface StandardsControlAssociationDetail {

		/** Required */
		StandardsArn: string;

		/** Required */
		SecurityControlId: string;

		/** Required */
		SecurityControlArn: string;

		/** Required */
		AssociationStatus: RuleStatus;
		RelatedRequirements?: Array<string>;
		UpdatedAt?: Date;
		UpdatedReason?: string;
		StandardsControlTitle?: string;
		StandardsControlDescription?: string;
		StandardsControlArns?: Array<string>;
	}

	/**  Provides details about a control's enablement status in a specified standard.  */
	export interface StandardsControlAssociationDetailFormProperties {

		/** Required */
		StandardsArn: FormControl<string | null | undefined>,

		/** Required */
		SecurityControlId: FormControl<string | null | undefined>,

		/** Required */
		SecurityControlArn: FormControl<string | null | undefined>,

		/** Required */
		AssociationStatus: FormControl<RuleStatus | null | undefined>,
		UpdatedAt: FormControl<Date | null | undefined>,
		UpdatedReason: FormControl<string | null | undefined>,
		StandardsControlTitle: FormControl<string | null | undefined>,
		StandardsControlDescription: FormControl<string | null | undefined>,
	}
	export function CreateStandardsControlAssociationDetailFormGroup() {
		return new FormGroup<StandardsControlAssociationDetailFormProperties>({
			StandardsArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SecurityControlId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SecurityControlArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			AssociationStatus: new FormControl<RuleStatus | null | undefined>(undefined, [Validators.required]),
			UpdatedAt: new FormControl<Date | null | undefined>(undefined),
			UpdatedReason: new FormControl<string | null | undefined>(undefined),
			StandardsControlTitle: new FormControl<string | null | undefined>(undefined),
			StandardsControlDescription: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  Provides details about which control's enablement status couldn't be retrieved in a specified standard when calling <a href="https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_BatchUpdateStandardsControlAssociations.html">BatchUpdateStandardsControlAssociations</a>. This parameter also provides details about why the request was unprocessed.  */
	export interface UnprocessedStandardsControlAssociation {

		/** Required */
		StandardsControlAssociationId: StandardsControlAssociationId;

		/** Required */
		ErrorCode: UnprocessedErrorCode;
		ErrorReason?: string;
	}

	/**  Provides details about which control's enablement status couldn't be retrieved in a specified standard when calling <a href="https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_BatchUpdateStandardsControlAssociations.html">BatchUpdateStandardsControlAssociations</a>. This parameter also provides details about why the request was unprocessed.  */
	export interface UnprocessedStandardsControlAssociationFormProperties {

		/** Required */
		ErrorCode: FormControl<UnprocessedErrorCode | null | undefined>,
		ErrorReason: FormControl<string | null | undefined>,
	}
	export function CreateUnprocessedStandardsControlAssociationFormGroup() {
		return new FormGroup<UnprocessedStandardsControlAssociationFormProperties>({
			ErrorCode: new FormControl<UnprocessedErrorCode | null | undefined>(undefined, [Validators.required]),
			ErrorReason: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  An array with one or more objects that includes a security control (identified with <code>SecurityControlId</code>, <code>SecurityControlArn</code>, or a mix of both parameters) and the Amazon Resource Name (ARN) of a standard. The security control ID or ARN is the same across standards.  */
	export interface StandardsControlAssociationId {

		/** Required */
		SecurityControlId: string;

		/** Required */
		StandardsArn: string;
	}

	/**  An array with one or more objects that includes a security control (identified with <code>SecurityControlId</code>, <code>SecurityControlArn</code>, or a mix of both parameters) and the Amazon Resource Name (ARN) of a standard. The security control ID or ARN is the same across standards.  */
	export interface StandardsControlAssociationIdFormProperties {

		/** Required */
		SecurityControlId: FormControl<string | null | undefined>,

		/** Required */
		StandardsArn: FormControl<string | null | undefined>,
	}
	export function CreateStandardsControlAssociationIdFormGroup() {
		return new FormGroup<StandardsControlAssociationIdFormProperties>({
			SecurityControlId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			StandardsArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface BatchImportFindingsResponse {

		/** Required */
		FailedCount: number;

		/** Required */
		SuccessCount: number;
		FailedFindings?: Array<ImportFindingsError>;
	}
	export interface BatchImportFindingsResponseFormProperties {

		/** Required */
		FailedCount: FormControl<number | null | undefined>,

		/** Required */
		SuccessCount: FormControl<number | null | undefined>,
	}
	export function CreateBatchImportFindingsResponseFormGroup() {
		return new FormGroup<BatchImportFindingsResponseFormProperties>({
			FailedCount: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			SuccessCount: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The list of the findings that cannot be imported. For each finding, the list provides the error. */
	export interface ImportFindingsError {

		/** Required */
		Id: string;

		/** Required */
		ErrorCode: string;

		/** Required */
		ErrorMessage: string;
	}

	/** The list of the findings that cannot be imported. For each finding, the list provides the error. */
	export interface ImportFindingsErrorFormProperties {

		/** Required */
		Id: FormControl<string | null | undefined>,

		/** Required */
		ErrorCode: FormControl<string | null | undefined>,

		/** Required */
		ErrorMessage: FormControl<string | null | undefined>,
	}
	export function CreateImportFindingsErrorFormGroup() {
		return new FormGroup<ImportFindingsErrorFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ErrorCode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ErrorMessage: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p>Provides a consistent format for Security Hub findings. <code>AwsSecurityFinding</code> format allows you to share findings between Amazon Web Services security services and third-party solutions.</p> <note> <p>A finding is a potential security issue generated either by Amazon Web Services services or by the integrated third-party solutions and standards checks.</p> </note> */
	export interface AwsSecurityFinding {

		/** Required */
		SchemaVersion: string;

		/** Required */
		Id: string;

		/** Required */
		ProductArn: string;
		ProductName?: string;
		CompanyName?: string;
		Region?: string;

		/** Required */
		GeneratorId: string;

		/** Required */
		AwsAccountId: string;
		Types?: Array<string>;
		FirstObservedAt?: string;
		LastObservedAt?: string;

		/** Required */
		CreatedAt: string;

		/** Required */
		UpdatedAt: string;
		Severity?: Severity;
		Confidence?: number | null;
		Criticality?: number | null;

		/** Required */
		Title: string;

		/** Required */
		Description: string;
		Remediation?: Remediation;
		SourceUrl?: string;
		ProductFields?: FieldMap;
		UserDefinedFields?: FieldMap;
		Malware?: Array<Malware>;
		Network?: Network;
		NetworkPath?: Array<NetworkPathComponent>;
		Process?: ProcessDetails;
		Threats?: Array<Threat>;
		ThreatIntelIndicators?: Array<ThreatIntelIndicator>;

		/** Required */
		Resources: Array<Resource>;
		Compliance?: Compliance;
		VerificationState?: VerificationState;
		WorkflowState?: WorkflowState;
		Workflow?: Workflow;
		RecordState?: RecordState;
		RelatedFindings?: Array<RelatedFinding>;
		Note?: Note;
		Vulnerabilities?: Array<Vulnerability>;
		PatchSummary?: PatchSummary;
		Action?: Action;
		FindingProviderFields?: FindingProviderFields;
		Sample?: boolean | null;
	}

	/** <p>Provides a consistent format for Security Hub findings. <code>AwsSecurityFinding</code> format allows you to share findings between Amazon Web Services security services and third-party solutions.</p> <note> <p>A finding is a potential security issue generated either by Amazon Web Services services or by the integrated third-party solutions and standards checks.</p> </note> */
	export interface AwsSecurityFindingFormProperties {

		/** Required */
		SchemaVersion: FormControl<string | null | undefined>,

		/** Required */
		Id: FormControl<string | null | undefined>,

		/** Required */
		ProductArn: FormControl<string | null | undefined>,
		ProductName: FormControl<string | null | undefined>,
		CompanyName: FormControl<string | null | undefined>,
		Region: FormControl<string | null | undefined>,

		/** Required */
		GeneratorId: FormControl<string | null | undefined>,

		/** Required */
		AwsAccountId: FormControl<string | null | undefined>,
		FirstObservedAt: FormControl<string | null | undefined>,
		LastObservedAt: FormControl<string | null | undefined>,

		/** Required */
		CreatedAt: FormControl<string | null | undefined>,

		/** Required */
		UpdatedAt: FormControl<string | null | undefined>,
		Confidence: FormControl<number | null | undefined>,
		Criticality: FormControl<number | null | undefined>,

		/** Required */
		Title: FormControl<string | null | undefined>,

		/** Required */
		Description: FormControl<string | null | undefined>,
		SourceUrl: FormControl<string | null | undefined>,
		VerificationState: FormControl<VerificationState | null | undefined>,
		WorkflowState: FormControl<WorkflowState | null | undefined>,
		RecordState: FormControl<RecordState | null | undefined>,
		Sample: FormControl<boolean | null | undefined>,
	}
	export function CreateAwsSecurityFindingFormGroup() {
		return new FormGroup<AwsSecurityFindingFormProperties>({
			SchemaVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ProductArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ProductName: new FormControl<string | null | undefined>(undefined),
			CompanyName: new FormControl<string | null | undefined>(undefined),
			Region: new FormControl<string | null | undefined>(undefined),
			GeneratorId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			AwsAccountId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			FirstObservedAt: new FormControl<string | null | undefined>(undefined),
			LastObservedAt: new FormControl<string | null | undefined>(undefined),
			CreatedAt: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			UpdatedAt: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Confidence: new FormControl<number | null | undefined>(undefined),
			Criticality: new FormControl<number | null | undefined>(undefined),
			Title: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SourceUrl: new FormControl<string | null | undefined>(undefined),
			VerificationState: new FormControl<VerificationState | null | undefined>(undefined),
			WorkflowState: new FormControl<WorkflowState | null | undefined>(undefined),
			RecordState: new FormControl<RecordState | null | undefined>(undefined),
			Sample: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** <p>The severity of the finding.</p> <p>The finding provider can provide the initial severity. The finding provider can only update the severity if it hasn't been updated using <code>BatchUpdateFindings</code>.</p> <p>The finding must have either <code>Label</code> or <code>Normalized</code> populated. If only one of these attributes is populated, then Security Hub automatically populates the other one. If neither attribute is populated, then the finding is invalid. <code>Label</code> is the preferred attribute.</p> */
	export interface Severity {
		Product?: number | null;
		Label?: SeverityLabel;
		Normalized?: number | null;
		Original?: string;
	}

	/** <p>The severity of the finding.</p> <p>The finding provider can provide the initial severity. The finding provider can only update the severity if it hasn't been updated using <code>BatchUpdateFindings</code>.</p> <p>The finding must have either <code>Label</code> or <code>Normalized</code> populated. If only one of these attributes is populated, then Security Hub automatically populates the other one. If neither attribute is populated, then the finding is invalid. <code>Label</code> is the preferred attribute.</p> */
	export interface SeverityFormProperties {
		Product: FormControl<number | null | undefined>,
		Label: FormControl<SeverityLabel | null | undefined>,
		Normalized: FormControl<number | null | undefined>,
		Original: FormControl<string | null | undefined>,
	}
	export function CreateSeverityFormGroup() {
		return new FormGroup<SeverityFormProperties>({
			Product: new FormControl<number | null | undefined>(undefined),
			Label: new FormControl<SeverityLabel | null | undefined>(undefined),
			Normalized: new FormControl<number | null | undefined>(undefined),
			Original: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details about the remediation steps for a finding. */
	export interface Remediation {
		Recommendation?: Recommendation;
	}

	/** Details about the remediation steps for a finding. */
	export interface RemediationFormProperties {
	}
	export function CreateRemediationFormGroup() {
		return new FormGroup<RemediationFormProperties>({
		});

	}


	/** A recommendation on how to remediate the issue identified in a finding. */
	export interface Recommendation {
		Text?: string;
		Url?: string;
	}

	/** A recommendation on how to remediate the issue identified in a finding. */
	export interface RecommendationFormProperties {
		Text: FormControl<string | null | undefined>,
		Url: FormControl<string | null | undefined>,
	}
	export function CreateRecommendationFormGroup() {
		return new FormGroup<RecommendationFormProperties>({
			Text: new FormControl<string | null | undefined>(undefined),
			Url: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A list of malware related to a finding. */
	export interface Malware {

		/** Required */
		Name: string;
		Type?: MalwareType;
		Path?: string;
		State?: MalwareState;
	}

	/** A list of malware related to a finding. */
	export interface MalwareFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
		Type: FormControl<MalwareType | null | undefined>,
		Path: FormControl<string | null | undefined>,
		State: FormControl<MalwareState | null | undefined>,
	}
	export function CreateMalwareFormGroup() {
		return new FormGroup<MalwareFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Type: new FormControl<MalwareType | null | undefined>(undefined),
			Path: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<MalwareState | null | undefined>(undefined),
		});

	}

	export enum MalwareType { ADWARE = 'ADWARE', BLENDED_THREAT = 'BLENDED_THREAT', BOTNET_AGENT = 'BOTNET_AGENT', COIN_MINER = 'COIN_MINER', EXPLOIT_KIT = 'EXPLOIT_KIT', KEYLOGGER = 'KEYLOGGER', MACRO = 'MACRO', POTENTIALLY_UNWANTED = 'POTENTIALLY_UNWANTED', SPYWARE = 'SPYWARE', RANSOMWARE = 'RANSOMWARE', REMOTE_ACCESS = 'REMOTE_ACCESS', ROOTKIT = 'ROOTKIT', TROJAN = 'TROJAN', VIRUS = 'VIRUS', WORM = 'WORM' }

	export enum MalwareState { OBSERVED = 'OBSERVED', REMOVAL_FAILED = 'REMOVAL_FAILED', REMOVED = 'REMOVED' }


	/** The details of network-related information about a finding. */
	export interface Network {
		Direction?: NetworkDirection;
		Protocol?: string;
		OpenPortRange?: PortRange;
		SourceIpV4?: string;
		SourceIpV6?: string;
		SourcePort?: number | null;
		SourceDomain?: string;
		SourceMac?: string;
		DestinationIpV4?: string;
		DestinationIpV6?: string;
		DestinationPort?: number | null;
		DestinationDomain?: string;
	}

	/** The details of network-related information about a finding. */
	export interface NetworkFormProperties {
		Direction: FormControl<NetworkDirection | null | undefined>,
		Protocol: FormControl<string | null | undefined>,
		SourceIpV4: FormControl<string | null | undefined>,
		SourceIpV6: FormControl<string | null | undefined>,
		SourcePort: FormControl<number | null | undefined>,
		SourceDomain: FormControl<string | null | undefined>,
		SourceMac: FormControl<string | null | undefined>,
		DestinationIpV4: FormControl<string | null | undefined>,
		DestinationIpV6: FormControl<string | null | undefined>,
		DestinationPort: FormControl<number | null | undefined>,
		DestinationDomain: FormControl<string | null | undefined>,
	}
	export function CreateNetworkFormGroup() {
		return new FormGroup<NetworkFormProperties>({
			Direction: new FormControl<NetworkDirection | null | undefined>(undefined),
			Protocol: new FormControl<string | null | undefined>(undefined),
			SourceIpV4: new FormControl<string | null | undefined>(undefined),
			SourceIpV6: new FormControl<string | null | undefined>(undefined),
			SourcePort: new FormControl<number | null | undefined>(undefined),
			SourceDomain: new FormControl<string | null | undefined>(undefined),
			SourceMac: new FormControl<string | null | undefined>(undefined),
			DestinationIpV4: new FormControl<string | null | undefined>(undefined),
			DestinationIpV6: new FormControl<string | null | undefined>(undefined),
			DestinationPort: new FormControl<number | null | undefined>(undefined),
			DestinationDomain: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum NetworkDirection { IN = 'IN', OUT = 'OUT' }


	/** A range of ports. */
	export interface PortRange {
		Begin?: number | null;
		End?: number | null;
	}

	/** A range of ports. */
	export interface PortRangeFormProperties {
		Begin: FormControl<number | null | undefined>,
		End: FormControl<number | null | undefined>,
	}
	export function CreatePortRangeFormGroup() {
		return new FormGroup<PortRangeFormProperties>({
			Begin: new FormControl<number | null | undefined>(undefined),
			End: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Information about a network path component. */
	export interface NetworkPathComponent {
		ComponentId?: string;
		ComponentType?: string;
		Egress?: NetworkHeader;
		Ingress?: NetworkHeader;
	}

	/** Information about a network path component. */
	export interface NetworkPathComponentFormProperties {
		ComponentId: FormControl<string | null | undefined>,
		ComponentType: FormControl<string | null | undefined>,
	}
	export function CreateNetworkPathComponentFormGroup() {
		return new FormGroup<NetworkPathComponentFormProperties>({
			ComponentId: new FormControl<string | null | undefined>(undefined),
			ComponentType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details about a network path component that occurs before or after the current component. */
	export interface NetworkHeader {
		Protocol?: string;
		Destination?: NetworkPathComponentDetails;
		Source?: NetworkPathComponentDetails;
	}

	/** Details about a network path component that occurs before or after the current component. */
	export interface NetworkHeaderFormProperties {
		Protocol: FormControl<string | null | undefined>,
	}
	export function CreateNetworkHeaderFormGroup() {
		return new FormGroup<NetworkHeaderFormProperties>({
			Protocol: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about the destination of the next component in the network path. */
	export interface NetworkPathComponentDetails {
		Address?: Array<string>;
		PortRanges?: Array<PortRange>;
	}

	/** Information about the destination of the next component in the network path. */
	export interface NetworkPathComponentDetailsFormProperties {
	}
	export function CreateNetworkPathComponentDetailsFormGroup() {
		return new FormGroup<NetworkPathComponentDetailsFormProperties>({
		});

	}


	/** The details of process-related information about a finding. */
	export interface ProcessDetails {
		Name?: string;
		Path?: string;
		Pid?: number | null;
		ParentPid?: number | null;
		LaunchedAt?: string;
		TerminatedAt?: string;
	}

	/** The details of process-related information about a finding. */
	export interface ProcessDetailsFormProperties {
		Name: FormControl<string | null | undefined>,
		Path: FormControl<string | null | undefined>,
		Pid: FormControl<number | null | undefined>,
		ParentPid: FormControl<number | null | undefined>,
		LaunchedAt: FormControl<string | null | undefined>,
		TerminatedAt: FormControl<string | null | undefined>,
	}
	export function CreateProcessDetailsFormGroup() {
		return new FormGroup<ProcessDetailsFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Path: new FormControl<string | null | undefined>(undefined),
			Pid: new FormControl<number | null | undefined>(undefined),
			ParentPid: new FormControl<number | null | undefined>(undefined),
			LaunchedAt: new FormControl<string | null | undefined>(undefined),
			TerminatedAt: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides information about the threat detected in a security finding and the file paths that were affected by the threat.  */
	export interface Threat {
		Name?: string;
		Severity?: string;
		ItemCount?: number | null;
		FilePaths?: Array<FilePaths>;
	}

	/** Provides information about the threat detected in a security finding and the file paths that were affected by the threat.  */
	export interface ThreatFormProperties {
		Name: FormControl<string | null | undefined>,
		Severity: FormControl<string | null | undefined>,
		ItemCount: FormControl<number | null | undefined>,
	}
	export function CreateThreatFormGroup() {
		return new FormGroup<ThreatFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Severity: new FormControl<string | null | undefined>(undefined),
			ItemCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Provides information about the file paths that were affected by the threat.  */
	export interface FilePaths {
		FilePath?: string;
		FileName?: string;
		ResourceId?: string;
		Hash?: string;
	}

	/** Provides information about the file paths that were affected by the threat.  */
	export interface FilePathsFormProperties {
		FilePath: FormControl<string | null | undefined>,
		FileName: FormControl<string | null | undefined>,
		ResourceId: FormControl<string | null | undefined>,
		Hash: FormControl<string | null | undefined>,
	}
	export function CreateFilePathsFormGroup() {
		return new FormGroup<FilePathsFormProperties>({
			FilePath: new FormControl<string | null | undefined>(undefined),
			FileName: new FormControl<string | null | undefined>(undefined),
			ResourceId: new FormControl<string | null | undefined>(undefined),
			Hash: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details about the threat intelligence related to a finding. */
	export interface ThreatIntelIndicator {
		Type?: ThreatIntelIndicatorType;
		Value?: string;
		Category?: ThreatIntelIndicatorCategory;
		LastObservedAt?: string;
		Source?: string;
		SourceUrl?: string;
	}

	/** Details about the threat intelligence related to a finding. */
	export interface ThreatIntelIndicatorFormProperties {
		Type: FormControl<ThreatIntelIndicatorType | null | undefined>,
		Value: FormControl<string | null | undefined>,
		Category: FormControl<ThreatIntelIndicatorCategory | null | undefined>,
		LastObservedAt: FormControl<string | null | undefined>,
		Source: FormControl<string | null | undefined>,
		SourceUrl: FormControl<string | null | undefined>,
	}
	export function CreateThreatIntelIndicatorFormGroup() {
		return new FormGroup<ThreatIntelIndicatorFormProperties>({
			Type: new FormControl<ThreatIntelIndicatorType | null | undefined>(undefined),
			Value: new FormControl<string | null | undefined>(undefined),
			Category: new FormControl<ThreatIntelIndicatorCategory | null | undefined>(undefined),
			LastObservedAt: new FormControl<string | null | undefined>(undefined),
			Source: new FormControl<string | null | undefined>(undefined),
			SourceUrl: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ThreatIntelIndicatorType { DOMAIN = 'DOMAIN', EMAIL_ADDRESS = 'EMAIL_ADDRESS', HASH_MD5 = 'HASH_MD5', HASH_SHA1 = 'HASH_SHA1', HASH_SHA256 = 'HASH_SHA256', HASH_SHA512 = 'HASH_SHA512', IPV4_ADDRESS = 'IPV4_ADDRESS', IPV6_ADDRESS = 'IPV6_ADDRESS', MUTEX = 'MUTEX', PROCESS = 'PROCESS', URL = 'URL' }

	export enum ThreatIntelIndicatorCategory { BACKDOOR = 'BACKDOOR', CARD_STEALER = 'CARD_STEALER', COMMAND_AND_CONTROL = 'COMMAND_AND_CONTROL', DROP_SITE = 'DROP_SITE', EXPLOIT_SITE = 'EXPLOIT_SITE', KEYLOGGER = 'KEYLOGGER' }


	/** A resource related to a finding. */
	export interface Resource {

		/** Required */
		Type: string;

		/** Required */
		Id: string;
		Partition?: Partition;
		Region?: string;
		ResourceRole?: string;
		Tags?: FieldMap;
		DataClassification?: DataClassificationDetails;
		Details?: ResourceDetails;
	}

	/** A resource related to a finding. */
	export interface ResourceFormProperties {

		/** Required */
		Type: FormControl<string | null | undefined>,

		/** Required */
		Id: FormControl<string | null | undefined>,
		Partition: FormControl<Partition | null | undefined>,
		Region: FormControl<string | null | undefined>,
		ResourceRole: FormControl<string | null | undefined>,
	}
	export function CreateResourceFormGroup() {
		return new FormGroup<ResourceFormProperties>({
			Type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Partition: new FormControl<Partition | null | undefined>(undefined),
			Region: new FormControl<string | null | undefined>(undefined),
			ResourceRole: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum Partition { aws = 'aws', 'aws-cn' = 'aws-cn', 'aws-us-gov' = 'aws-us-gov' }


	/** Provides details about sensitive data that was detected on a resource. */
	export interface DataClassificationDetails {
		DetailedResultsLocation?: string;
		Result?: ClassificationResult;
	}

	/** Provides details about sensitive data that was detected on a resource. */
	export interface DataClassificationDetailsFormProperties {
		DetailedResultsLocation: FormControl<string | null | undefined>,
	}
	export function CreateDataClassificationDetailsFormGroup() {
		return new FormGroup<DataClassificationDetailsFormProperties>({
			DetailedResultsLocation: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details about the sensitive data that was detected on the resource. */
	export interface ClassificationResult {
		MimeType?: string;
		SizeClassified?: number | null;
		AdditionalOccurrences?: boolean | null;
		Status?: ClassificationStatus;
		SensitiveData?: Array<SensitiveDataResult>;
		CustomDataIdentifiers?: CustomDataIdentifiersResult;
	}

	/** Details about the sensitive data that was detected on the resource. */
	export interface ClassificationResultFormProperties {
		MimeType: FormControl<string | null | undefined>,
		SizeClassified: FormControl<number | null | undefined>,
		AdditionalOccurrences: FormControl<boolean | null | undefined>,
	}
	export function CreateClassificationResultFormGroup() {
		return new FormGroup<ClassificationResultFormProperties>({
			MimeType: new FormControl<string | null | undefined>(undefined),
			SizeClassified: new FormControl<number | null | undefined>(undefined),
			AdditionalOccurrences: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Provides details about the current status of the sensitive data detection. */
	export interface ClassificationStatus {
		Code?: string;
		Reason?: string;
	}

	/** Provides details about the current status of the sensitive data detection. */
	export interface ClassificationStatusFormProperties {
		Code: FormControl<string | null | undefined>,
		Reason: FormControl<string | null | undefined>,
	}
	export function CreateClassificationStatusFormGroup() {
		return new FormGroup<ClassificationStatusFormProperties>({
			Code: new FormControl<string | null | undefined>(undefined),
			Reason: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains a detected instance of sensitive data that are based on built-in identifiers. */
	export interface SensitiveDataResult {
		Category?: string;
		Detections?: Array<SensitiveDataDetections>;
		TotalCount?: number | null;
	}

	/** Contains a detected instance of sensitive data that are based on built-in identifiers. */
	export interface SensitiveDataResultFormProperties {
		Category: FormControl<string | null | undefined>,
		TotalCount: FormControl<number | null | undefined>,
	}
	export function CreateSensitiveDataResultFormGroup() {
		return new FormGroup<SensitiveDataResultFormProperties>({
			Category: new FormControl<string | null | undefined>(undefined),
			TotalCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The list of detected instances of sensitive data. */
	export interface SensitiveDataDetections {
		Count?: number | null;
		Type?: string;
		Occurrences?: Occurrences;
	}

	/** The list of detected instances of sensitive data. */
	export interface SensitiveDataDetectionsFormProperties {
		Count: FormControl<number | null | undefined>,
		Type: FormControl<string | null | undefined>,
	}
	export function CreateSensitiveDataDetectionsFormGroup() {
		return new FormGroup<SensitiveDataDetectionsFormProperties>({
			Count: new FormControl<number | null | undefined>(undefined),
			Type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The detected occurrences of sensitive data. */
	export interface Occurrences {
		LineRanges?: Array<Range>;
		OffsetRanges?: Array<Range>;
		Pages?: Array<Page>;
		Records?: Array<Record>;
		Cells?: Array<Cell>;
	}

	/** The detected occurrences of sensitive data. */
	export interface OccurrencesFormProperties {
	}
	export function CreateOccurrencesFormGroup() {
		return new FormGroup<OccurrencesFormProperties>({
		});

	}


	/** Identifies where the sensitive data begins and ends. */
	export interface Range {
		Start?: number | null;
		End?: number | null;
		StartColumn?: number | null;
	}

	/** Identifies where the sensitive data begins and ends. */
	export interface RangeFormProperties {
		Start: FormControl<number | null | undefined>,
		End: FormControl<number | null | undefined>,
		StartColumn: FormControl<number | null | undefined>,
	}
	export function CreateRangeFormGroup() {
		return new FormGroup<RangeFormProperties>({
			Start: new FormControl<number | null | undefined>(undefined),
			End: new FormControl<number | null | undefined>(undefined),
			StartColumn: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** An occurrence of sensitive data in an Adobe Portable Document Format (PDF) file. */
	export interface Page {
		PageNumber?: number | null;
		LineRange?: Range;
		OffsetRange?: Range;
	}

	/** An occurrence of sensitive data in an Adobe Portable Document Format (PDF) file. */
	export interface PageFormProperties {
		PageNumber: FormControl<number | null | undefined>,
	}
	export function CreatePageFormGroup() {
		return new FormGroup<PageFormProperties>({
			PageNumber: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** An occurrence of sensitive data in an Apache Avro object container or an Apache Parquet file. */
	export interface Record {
		JsonPath?: string;
		RecordIndex?: number | null;
	}

	/** An occurrence of sensitive data in an Apache Avro object container or an Apache Parquet file. */
	export interface RecordFormProperties {
		JsonPath: FormControl<string | null | undefined>,
		RecordIndex: FormControl<number | null | undefined>,
	}
	export function CreateRecordFormGroup() {
		return new FormGroup<RecordFormProperties>({
			JsonPath: new FormControl<string | null | undefined>(undefined),
			RecordIndex: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** An occurrence of sensitive data detected in a Microsoft Excel workbook, comma-separated value (CSV) file, or tab-separated value (TSV) file. */
	export interface Cell {
		Column?: number | null;
		Row?: number | null;
		ColumnName?: string;
		CellReference?: string;
	}

	/** An occurrence of sensitive data detected in a Microsoft Excel workbook, comma-separated value (CSV) file, or tab-separated value (TSV) file. */
	export interface CellFormProperties {
		Column: FormControl<number | null | undefined>,
		Row: FormControl<number | null | undefined>,
		ColumnName: FormControl<string | null | undefined>,
		CellReference: FormControl<string | null | undefined>,
	}
	export function CreateCellFormGroup() {
		return new FormGroup<CellFormProperties>({
			Column: new FormControl<number | null | undefined>(undefined),
			Row: new FormControl<number | null | undefined>(undefined),
			ColumnName: new FormControl<string | null | undefined>(undefined),
			CellReference: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains an instance of sensitive data that was detected by a customer-defined identifier. */
	export interface CustomDataIdentifiersResult {
		Detections?: Array<CustomDataIdentifiersDetections>;
		TotalCount?: number | null;
	}

	/** Contains an instance of sensitive data that was detected by a customer-defined identifier. */
	export interface CustomDataIdentifiersResultFormProperties {
		TotalCount: FormControl<number | null | undefined>,
	}
	export function CreateCustomDataIdentifiersResultFormGroup() {
		return new FormGroup<CustomDataIdentifiersResultFormProperties>({
			TotalCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The list of detected instances of sensitive data. */
	export interface CustomDataIdentifiersDetections {
		Count?: number | null;
		Arn?: string;
		Name?: string;
		Occurrences?: Occurrences;
	}

	/** The list of detected instances of sensitive data. */
	export interface CustomDataIdentifiersDetectionsFormProperties {
		Count: FormControl<number | null | undefined>,
		Arn: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
	}
	export function CreateCustomDataIdentifiersDetectionsFormGroup() {
		return new FormGroup<CustomDataIdentifiersDetectionsFormProperties>({
			Count: new FormControl<number | null | undefined>(undefined),
			Arn: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>Additional details about a resource related to a finding.</p> <p>To provide the details, use the object that corresponds to the resource type. For example, if the resource type is <code>AwsEc2Instance</code>, then you use the <code>AwsEc2Instance</code> object to provide the details.</p> <p>If the type-specific object does not contain all of the fields you want to populate, then you use the <code>Other</code> object to populate those additional fields.</p> <p>You also use the <code>Other</code> object to populate the details when the selected type does not have a corresponding object.</p> */
	export interface ResourceDetails {
		AwsAutoScalingAutoScalingGroup?: AwsAutoScalingAutoScalingGroupDetails;
		AwsCodeBuildProject?: AwsCodeBuildProjectDetails;
		AwsCloudFrontDistribution?: AwsCloudFrontDistributionDetails;
		AwsEc2Instance?: AwsEc2InstanceDetails;
		AwsEc2NetworkInterface?: AwsEc2NetworkInterfaceDetails;
		AwsEc2SecurityGroup?: AwsEc2SecurityGroupDetails;
		AwsEc2Volume?: AwsEc2VolumeDetails;
		AwsEc2Vpc?: AwsEc2VpcDetails;
		AwsEc2Eip?: AwsEc2EipDetails;
		AwsEc2Subnet?: AwsEc2SubnetDetails;
		AwsEc2NetworkAcl?: AwsEc2NetworkAclDetails;
		AwsElbv2LoadBalancer?: AwsElbv2LoadBalancerDetails;
		AwsElasticBeanstalkEnvironment?: AwsElasticBeanstalkEnvironmentDetails;
		AwsElasticsearchDomain?: AwsElasticsearchDomainDetails;
		AwsS3Bucket?: AwsS3BucketDetails;
		AwsS3AccountPublicAccessBlock?: AwsS3AccountPublicAccessBlockDetails;
		AwsS3Object?: AwsS3ObjectDetails;
		AwsSecretsManagerSecret?: AwsSecretsManagerSecretDetails;
		AwsIamAccessKey?: AwsIamAccessKeyDetails;
		AwsIamUser?: AwsIamUserDetails;
		AwsIamPolicy?: AwsIamPolicyDetails;
		AwsApiGatewayV2Stage?: AwsApiGatewayV2StageDetails;
		AwsApiGatewayV2Api?: AwsApiGatewayV2ApiDetails;
		AwsDynamoDbTable?: AwsDynamoDbTableDetails;
		AwsApiGatewayStage?: AwsApiGatewayStageDetails;
		AwsApiGatewayRestApi?: AwsApiGatewayRestApiDetails;
		AwsCloudTrailTrail?: AwsCloudTrailTrailDetails;
		AwsSsmPatchCompliance?: AwsSsmPatchComplianceDetails;
		AwsCertificateManagerCertificate?: AwsCertificateManagerCertificateDetails;
		AwsRedshiftCluster?: AwsRedshiftClusterDetails;
		AwsElbLoadBalancer?: AwsElbLoadBalancerDetails;
		AwsIamGroup?: AwsIamGroupDetails;
		AwsIamRole?: AwsIamRoleDetails;
		AwsKmsKey?: AwsKmsKeyDetails;
		AwsLambdaFunction?: AwsLambdaFunctionDetails;
		AwsLambdaLayerVersion?: AwsLambdaLayerVersionDetails;
		AwsRdsDbInstance?: AwsRdsDbInstanceDetails;
		AwsSnsTopic?: AwsSnsTopicDetails;
		AwsSqsQueue?: AwsSqsQueueDetails;
		AwsWafWebAcl?: AwsWafWebAclDetails;
		AwsRdsDbSnapshot?: AwsRdsDbSnapshotDetails;
		AwsRdsDbClusterSnapshot?: AwsRdsDbClusterSnapshotDetails;
		AwsRdsDbCluster?: AwsRdsDbClusterDetails;
		AwsEcsCluster?: AwsEcsClusterDetails;
		AwsEcsContainer?: AwsEcsContainerDetails;
		AwsEcsTaskDefinition?: AwsEcsTaskDefinitionDetails;
		Container?: ContainerDetails;
		Other?: FieldMap;
		AwsRdsEventSubscription?: AwsRdsEventSubscriptionDetails;
		AwsEcsService?: AwsEcsServiceDetails;
		AwsAutoScalingLaunchConfiguration?: AwsAutoScalingLaunchConfigurationDetails;
		AwsEc2VpnConnection?: AwsEc2VpnConnectionDetails;
		AwsEcrContainerImage?: AwsEcrContainerImageDetails;
		AwsOpenSearchServiceDomain?: AwsOpenSearchServiceDomainDetails;
		AwsEc2VpcEndpointService?: AwsEc2VpcEndpointServiceDetails;
		AwsXrayEncryptionConfig?: AwsXrayEncryptionConfigDetails;
		AwsWafRateBasedRule?: AwsWafRateBasedRuleDetails;
		AwsWafRegionalRateBasedRule?: AwsWafRegionalRateBasedRuleDetails;
		AwsEcrRepository?: AwsEcrRepositoryDetails;
		AwsEksCluster?: AwsEksClusterDetails;
		AwsNetworkFirewallFirewallPolicy?: AwsNetworkFirewallFirewallPolicyDetails;
		AwsNetworkFirewallFirewall?: AwsNetworkFirewallFirewallDetails;
		AwsNetworkFirewallRuleGroup?: AwsNetworkFirewallRuleGroupDetails;
		AwsRdsDbSecurityGroup?: AwsRdsDbSecurityGroupDetails;
		AwsKinesisStream?: AwsKinesisStreamDetails;
		AwsEc2TransitGateway?: AwsEc2TransitGatewayDetails;
		AwsEfsAccessPoint?: AwsEfsAccessPointDetails;
		AwsCloudFormationStack?: AwsCloudFormationStackDetails;
		AwsCloudWatchAlarm?: AwsCloudWatchAlarmDetails;
		AwsEc2VpcPeeringConnection?: AwsEc2VpcPeeringConnectionDetails;
		AwsWafRegionalRuleGroup?: AwsWafRegionalRuleGroupDetails;
		AwsWafRegionalRule?: AwsWafRegionalRuleDetails;
		AwsWafRegionalWebAcl?: AwsWafRegionalWebAclDetails;
		AwsWafRule?: AwsWafRuleDetails;
		AwsWafRuleGroup?: AwsWafRuleGroupDetails;
		AwsEcsTask?: AwsEcsTaskDetails;
		AwsBackupBackupVault?: AwsBackupBackupVaultDetails;
		AwsBackupBackupPlan?: AwsBackupBackupPlanDetails;
		AwsBackupRecoveryPoint?: AwsBackupRecoveryPointDetails;

		/** Specifies the properties for creating an Amazon Elastic Compute Cloud (Amazon EC2) launch template. */
		AwsEc2LaunchTemplate?: AwsEc2LaunchTemplateDetails;

		/** Provides details about an Amazon SageMaker notebook instance. */
		AwsSageMakerNotebookInstance?: AwsSageMakerNotebookInstanceDetails;

		/** Details about an WAFv2 web Access Control List (ACL). */
		AwsWafv2WebAcl?: AwsWafv2WebAclDetails;

		/** Details about an WAFv2 rule group. */
		AwsWafv2RuleGroup?: AwsWafv2RuleGroupDetails;
		AwsEc2RouteTable?: AwsEc2RouteTableDetails;
		AwsAmazonMqBroker?: AwsAmazonMqBrokerDetails;
		AwsAppSyncGraphQlApi?: AwsAppSyncGraphQlApiDetails;
		AwsEventSchemasRegistry?: AwsEventSchemasRegistryDetails;
		AwsGuardDutyDetector?: AwsGuardDutyDetectorDetails;
		AwsStepFunctionStateMachine?: AwsStepFunctionStateMachineDetails;
		AwsAthenaWorkGroup?: AwsAthenaWorkGroupDetails;
	}

	/** <p>Additional details about a resource related to a finding.</p> <p>To provide the details, use the object that corresponds to the resource type. For example, if the resource type is <code>AwsEc2Instance</code>, then you use the <code>AwsEc2Instance</code> object to provide the details.</p> <p>If the type-specific object does not contain all of the fields you want to populate, then you use the <code>Other</code> object to populate those additional fields.</p> <p>You also use the <code>Other</code> object to populate the details when the selected type does not have a corresponding object.</p> */
	export interface ResourceDetailsFormProperties {
	}
	export function CreateResourceDetailsFormGroup() {
		return new FormGroup<ResourceDetailsFormProperties>({
		});

	}


	/** Provides details about an auto scaling group. */
	export interface AwsAutoScalingAutoScalingGroupDetails {
		LaunchConfigurationName?: string;
		LoadBalancerNames?: Array<string>;
		HealthCheckType?: string;
		HealthCheckGracePeriod?: number | null;
		CreatedTime?: string;
		MixedInstancesPolicy?: AwsAutoScalingAutoScalingGroupMixedInstancesPolicyDetails;
		AvailabilityZones?: Array<AwsAutoScalingAutoScalingGroupAvailabilityZonesListDetails>;
		LaunchTemplate?: AwsAutoScalingAutoScalingGroupLaunchTemplateLaunchTemplateSpecification;
		CapacityRebalance?: boolean | null;
	}

	/** Provides details about an auto scaling group. */
	export interface AwsAutoScalingAutoScalingGroupDetailsFormProperties {
		LaunchConfigurationName: FormControl<string | null | undefined>,
		HealthCheckType: FormControl<string | null | undefined>,
		HealthCheckGracePeriod: FormControl<number | null | undefined>,
		CreatedTime: FormControl<string | null | undefined>,
		CapacityRebalance: FormControl<boolean | null | undefined>,
	}
	export function CreateAwsAutoScalingAutoScalingGroupDetailsFormGroup() {
		return new FormGroup<AwsAutoScalingAutoScalingGroupDetailsFormProperties>({
			LaunchConfigurationName: new FormControl<string | null | undefined>(undefined),
			HealthCheckType: new FormControl<string | null | undefined>(undefined),
			HealthCheckGracePeriod: new FormControl<number | null | undefined>(undefined),
			CreatedTime: new FormControl<string | null | undefined>(undefined),
			CapacityRebalance: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** The mixed instances policy for the automatic scaling group. */
	export interface AwsAutoScalingAutoScalingGroupMixedInstancesPolicyDetails {
		InstancesDistribution?: AwsAutoScalingAutoScalingGroupMixedInstancesPolicyInstancesDistributionDetails;
		LaunchTemplate?: AwsAutoScalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateDetails;
	}

	/** The mixed instances policy for the automatic scaling group. */
	export interface AwsAutoScalingAutoScalingGroupMixedInstancesPolicyDetailsFormProperties {
	}
	export function CreateAwsAutoScalingAutoScalingGroupMixedInstancesPolicyDetailsFormGroup() {
		return new FormGroup<AwsAutoScalingAutoScalingGroupMixedInstancesPolicyDetailsFormProperties>({
		});

	}


	/** Information about the instances distribution. */
	export interface AwsAutoScalingAutoScalingGroupMixedInstancesPolicyInstancesDistributionDetails {
		OnDemandAllocationStrategy?: string;
		OnDemandBaseCapacity?: number | null;
		OnDemandPercentageAboveBaseCapacity?: number | null;
		SpotAllocationStrategy?: string;
		SpotInstancePools?: number | null;
		SpotMaxPrice?: string;
	}

	/** Information about the instances distribution. */
	export interface AwsAutoScalingAutoScalingGroupMixedInstancesPolicyInstancesDistributionDetailsFormProperties {
		OnDemandAllocationStrategy: FormControl<string | null | undefined>,
		OnDemandBaseCapacity: FormControl<number | null | undefined>,
		OnDemandPercentageAboveBaseCapacity: FormControl<number | null | undefined>,
		SpotAllocationStrategy: FormControl<string | null | undefined>,
		SpotInstancePools: FormControl<number | null | undefined>,
		SpotMaxPrice: FormControl<string | null | undefined>,
	}
	export function CreateAwsAutoScalingAutoScalingGroupMixedInstancesPolicyInstancesDistributionDetailsFormGroup() {
		return new FormGroup<AwsAutoScalingAutoScalingGroupMixedInstancesPolicyInstancesDistributionDetailsFormProperties>({
			OnDemandAllocationStrategy: new FormControl<string | null | undefined>(undefined),
			OnDemandBaseCapacity: new FormControl<number | null | undefined>(undefined),
			OnDemandPercentageAboveBaseCapacity: new FormControl<number | null | undefined>(undefined),
			SpotAllocationStrategy: new FormControl<string | null | undefined>(undefined),
			SpotInstancePools: new FormControl<number | null | undefined>(undefined),
			SpotMaxPrice: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes a launch template and overrides for a mixed instances policy. */
	export interface AwsAutoScalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateDetails {
		LaunchTemplateSpecification?: AwsAutoScalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecification;
		Overrides?: Array<AwsAutoScalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesListDetails>;
	}

	/** Describes a launch template and overrides for a mixed instances policy. */
	export interface AwsAutoScalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateDetailsFormProperties {
	}
	export function CreateAwsAutoScalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateDetailsFormGroup() {
		return new FormGroup<AwsAutoScalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateDetailsFormProperties>({
		});

	}


	/** Details about the launch template to use for a mixed instances policy. */
	export interface AwsAutoScalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecification {
		LaunchTemplateId?: string;
		LaunchTemplateName?: string;
		Version?: string;
	}

	/** Details about the launch template to use for a mixed instances policy. */
	export interface AwsAutoScalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationFormProperties {
		LaunchTemplateId: FormControl<string | null | undefined>,
		LaunchTemplateName: FormControl<string | null | undefined>,
		Version: FormControl<string | null | undefined>,
	}
	export function CreateAwsAutoScalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationFormGroup() {
		return new FormGroup<AwsAutoScalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationFormProperties>({
			LaunchTemplateId: new FormControl<string | null | undefined>(undefined),
			LaunchTemplateName: new FormControl<string | null | undefined>(undefined),
			Version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Property values to use to override the values in the launch template. */
	export interface AwsAutoScalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesListDetails {
		InstanceType?: string;
		WeightedCapacity?: string;
	}

	/** Property values to use to override the values in the launch template. */
	export interface AwsAutoScalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesListDetailsFormProperties {
		InstanceType: FormControl<string | null | undefined>,
		WeightedCapacity: FormControl<string | null | undefined>,
	}
	export function CreateAwsAutoScalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesListDetailsFormGroup() {
		return new FormGroup<AwsAutoScalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesListDetailsFormProperties>({
			InstanceType: new FormControl<string | null | undefined>(undefined),
			WeightedCapacity: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An Availability Zone for the automatic scaling group. */
	export interface AwsAutoScalingAutoScalingGroupAvailabilityZonesListDetails {
		Value?: string;
	}

	/** An Availability Zone for the automatic scaling group. */
	export interface AwsAutoScalingAutoScalingGroupAvailabilityZonesListDetailsFormProperties {
		Value: FormControl<string | null | undefined>,
	}
	export function CreateAwsAutoScalingAutoScalingGroupAvailabilityZonesListDetailsFormGroup() {
		return new FormGroup<AwsAutoScalingAutoScalingGroupAvailabilityZonesListDetailsFormProperties>({
			Value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details about the launch template to use. */
	export interface AwsAutoScalingAutoScalingGroupLaunchTemplateLaunchTemplateSpecification {
		LaunchTemplateId?: string;
		LaunchTemplateName?: string;
		Version?: string;
	}

	/** Details about the launch template to use. */
	export interface AwsAutoScalingAutoScalingGroupLaunchTemplateLaunchTemplateSpecificationFormProperties {
		LaunchTemplateId: FormControl<string | null | undefined>,
		LaunchTemplateName: FormControl<string | null | undefined>,
		Version: FormControl<string | null | undefined>,
	}
	export function CreateAwsAutoScalingAutoScalingGroupLaunchTemplateLaunchTemplateSpecificationFormGroup() {
		return new FormGroup<AwsAutoScalingAutoScalingGroupLaunchTemplateLaunchTemplateSpecificationFormProperties>({
			LaunchTemplateId: new FormControl<string | null | undefined>(undefined),
			LaunchTemplateName: new FormControl<string | null | undefined>(undefined),
			Version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about an CodeBuild project. */
	export interface AwsCodeBuildProjectDetails {
		EncryptionKey?: string;
		Artifacts?: Array<AwsCodeBuildProjectArtifactsDetails>;
		Environment?: AwsCodeBuildProjectEnvironment;
		Name?: string;
		Source?: AwsCodeBuildProjectSource;
		ServiceRole?: string;
		LogsConfig?: AwsCodeBuildProjectLogsConfigDetails;
		VpcConfig?: AwsCodeBuildProjectVpcConfig;
		SecondaryArtifacts?: Array<AwsCodeBuildProjectArtifactsDetails>;
	}

	/** Information about an CodeBuild project. */
	export interface AwsCodeBuildProjectDetailsFormProperties {
		EncryptionKey: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		ServiceRole: FormControl<string | null | undefined>,
	}
	export function CreateAwsCodeBuildProjectDetailsFormGroup() {
		return new FormGroup<AwsCodeBuildProjectDetailsFormProperties>({
			EncryptionKey: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			ServiceRole: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about the build artifacts for the CodeBuild project. */
	export interface AwsCodeBuildProjectArtifactsDetails {
		ArtifactIdentifier?: string;
		EncryptionDisabled?: boolean | null;
		Location?: string;
		Name?: string;
		NamespaceType?: string;
		OverrideArtifactName?: boolean | null;
		Packaging?: string;
		Path?: string;
		Type?: string;
	}

	/** Information about the build artifacts for the CodeBuild project. */
	export interface AwsCodeBuildProjectArtifactsDetailsFormProperties {
		ArtifactIdentifier: FormControl<string | null | undefined>,
		EncryptionDisabled: FormControl<boolean | null | undefined>,
		Location: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		NamespaceType: FormControl<string | null | undefined>,
		OverrideArtifactName: FormControl<boolean | null | undefined>,
		Packaging: FormControl<string | null | undefined>,
		Path: FormControl<string | null | undefined>,
		Type: FormControl<string | null | undefined>,
	}
	export function CreateAwsCodeBuildProjectArtifactsDetailsFormGroup() {
		return new FormGroup<AwsCodeBuildProjectArtifactsDetailsFormProperties>({
			ArtifactIdentifier: new FormControl<string | null | undefined>(undefined),
			EncryptionDisabled: new FormControl<boolean | null | undefined>(undefined),
			Location: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			NamespaceType: new FormControl<string | null | undefined>(undefined),
			OverrideArtifactName: new FormControl<boolean | null | undefined>(undefined),
			Packaging: new FormControl<string | null | undefined>(undefined),
			Path: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about the build environment for this build project. */
	export interface AwsCodeBuildProjectEnvironment {
		Certificate?: string;
		EnvironmentVariables?: Array<AwsCodeBuildProjectEnvironmentEnvironmentVariablesDetails>;
		PrivilegedMode?: boolean | null;
		ImagePullCredentialsType?: string;
		RegistryCredential?: AwsCodeBuildProjectEnvironmentRegistryCredential;
		Type?: string;
	}

	/** Information about the build environment for this build project. */
	export interface AwsCodeBuildProjectEnvironmentFormProperties {
		Certificate: FormControl<string | null | undefined>,
		PrivilegedMode: FormControl<boolean | null | undefined>,
		ImagePullCredentialsType: FormControl<string | null | undefined>,
		Type: FormControl<string | null | undefined>,
	}
	export function CreateAwsCodeBuildProjectEnvironmentFormGroup() {
		return new FormGroup<AwsCodeBuildProjectEnvironmentFormProperties>({
			Certificate: new FormControl<string | null | undefined>(undefined),
			PrivilegedMode: new FormControl<boolean | null | undefined>(undefined),
			ImagePullCredentialsType: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about an environment variable that is available to builds for the build project. */
	export interface AwsCodeBuildProjectEnvironmentEnvironmentVariablesDetails {
		Name?: string;
		Type?: string;
		Value?: string;
	}

	/** Information about an environment variable that is available to builds for the build project. */
	export interface AwsCodeBuildProjectEnvironmentEnvironmentVariablesDetailsFormProperties {
		Name: FormControl<string | null | undefined>,
		Type: FormControl<string | null | undefined>,
		Value: FormControl<string | null | undefined>,
	}
	export function CreateAwsCodeBuildProjectEnvironmentEnvironmentVariablesDetailsFormGroup() {
		return new FormGroup<AwsCodeBuildProjectEnvironmentEnvironmentVariablesDetailsFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<string | null | undefined>(undefined),
			Value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The credentials for access to a private registry. */
	export interface AwsCodeBuildProjectEnvironmentRegistryCredential {
		Credential?: string;
		CredentialProvider?: string;
	}

	/** The credentials for access to a private registry. */
	export interface AwsCodeBuildProjectEnvironmentRegistryCredentialFormProperties {
		Credential: FormControl<string | null | undefined>,
		CredentialProvider: FormControl<string | null | undefined>,
	}
	export function CreateAwsCodeBuildProjectEnvironmentRegistryCredentialFormGroup() {
		return new FormGroup<AwsCodeBuildProjectEnvironmentRegistryCredentialFormProperties>({
			Credential: new FormControl<string | null | undefined>(undefined),
			CredentialProvider: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about the build input source code for this build project. */
	export interface AwsCodeBuildProjectSource {
		Type?: string;
		Location?: string;
		GitCloneDepth?: number | null;
		InsecureSsl?: boolean | null;
	}

	/** Information about the build input source code for this build project. */
	export interface AwsCodeBuildProjectSourceFormProperties {
		Type: FormControl<string | null | undefined>,
		Location: FormControl<string | null | undefined>,
		GitCloneDepth: FormControl<number | null | undefined>,
		InsecureSsl: FormControl<boolean | null | undefined>,
	}
	export function CreateAwsCodeBuildProjectSourceFormGroup() {
		return new FormGroup<AwsCodeBuildProjectSourceFormProperties>({
			Type: new FormControl<string | null | undefined>(undefined),
			Location: new FormControl<string | null | undefined>(undefined),
			GitCloneDepth: new FormControl<number | null | undefined>(undefined),
			InsecureSsl: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Information about logs for the build project. */
	export interface AwsCodeBuildProjectLogsConfigDetails {
		CloudWatchLogs?: AwsCodeBuildProjectLogsConfigCloudWatchLogsDetails;
		S3Logs?: AwsCodeBuildProjectLogsConfigS3LogsDetails;
	}

	/** Information about logs for the build project. */
	export interface AwsCodeBuildProjectLogsConfigDetailsFormProperties {
	}
	export function CreateAwsCodeBuildProjectLogsConfigDetailsFormGroup() {
		return new FormGroup<AwsCodeBuildProjectLogsConfigDetailsFormProperties>({
		});

	}


	/** Information about CloudWatch Logs for the build project. */
	export interface AwsCodeBuildProjectLogsConfigCloudWatchLogsDetails {
		GroupName?: string;
		Status?: string;
		StreamName?: string;
	}

	/** Information about CloudWatch Logs for the build project. */
	export interface AwsCodeBuildProjectLogsConfigCloudWatchLogsDetailsFormProperties {
		GroupName: FormControl<string | null | undefined>,
		Status: FormControl<string | null | undefined>,
		StreamName: FormControl<string | null | undefined>,
	}
	export function CreateAwsCodeBuildProjectLogsConfigCloudWatchLogsDetailsFormGroup() {
		return new FormGroup<AwsCodeBuildProjectLogsConfigCloudWatchLogsDetailsFormProperties>({
			GroupName: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
			StreamName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about logs built to an S3 bucket for a build project. */
	export interface AwsCodeBuildProjectLogsConfigS3LogsDetails {
		EncryptionDisabled?: boolean | null;
		Location?: string;
		Status?: string;
	}

	/** Information about logs built to an S3 bucket for a build project. */
	export interface AwsCodeBuildProjectLogsConfigS3LogsDetailsFormProperties {
		EncryptionDisabled: FormControl<boolean | null | undefined>,
		Location: FormControl<string | null | undefined>,
		Status: FormControl<string | null | undefined>,
	}
	export function CreateAwsCodeBuildProjectLogsConfigS3LogsDetailsFormGroup() {
		return new FormGroup<AwsCodeBuildProjectLogsConfigS3LogsDetailsFormProperties>({
			EncryptionDisabled: new FormControl<boolean | null | undefined>(undefined),
			Location: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about the VPC configuration that CodeBuild accesses. */
	export interface AwsCodeBuildProjectVpcConfig {
		VpcId?: string;
		Subnets?: Array<string>;
		SecurityGroupIds?: Array<string>;
	}

	/** Information about the VPC configuration that CodeBuild accesses. */
	export interface AwsCodeBuildProjectVpcConfigFormProperties {
		VpcId: FormControl<string | null | undefined>,
	}
	export function CreateAwsCodeBuildProjectVpcConfigFormGroup() {
		return new FormGroup<AwsCodeBuildProjectVpcConfigFormProperties>({
			VpcId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A CloudFront distribution configuration. */
	export interface AwsCloudFrontDistributionDetails {
		CacheBehaviors?: AwsCloudFrontDistributionCacheBehaviors;
		DefaultCacheBehavior?: AwsCloudFrontDistributionDefaultCacheBehavior;
		DefaultRootObject?: string;
		DomainName?: string;
		ETag?: string;
		LastModifiedTime?: string;
		Logging?: AwsCloudFrontDistributionLogging;
		Origins?: AwsCloudFrontDistributionOrigins;
		OriginGroups?: AwsCloudFrontDistributionOriginGroups;
		ViewerCertificate?: AwsCloudFrontDistributionViewerCertificate;
		Status?: string;
		WebAclId?: string;
	}

	/** A CloudFront distribution configuration. */
	export interface AwsCloudFrontDistributionDetailsFormProperties {
		DefaultRootObject: FormControl<string | null | undefined>,
		DomainName: FormControl<string | null | undefined>,
		ETag: FormControl<string | null | undefined>,
		LastModifiedTime: FormControl<string | null | undefined>,
		Status: FormControl<string | null | undefined>,
		WebAclId: FormControl<string | null | undefined>,
	}
	export function CreateAwsCloudFrontDistributionDetailsFormGroup() {
		return new FormGroup<AwsCloudFrontDistributionDetailsFormProperties>({
			DefaultRootObject: new FormControl<string | null | undefined>(undefined),
			DomainName: new FormControl<string | null | undefined>(undefined),
			ETag: new FormControl<string | null | undefined>(undefined),
			LastModifiedTime: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
			WebAclId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides information about caching for the CloudFront distribution. */
	export interface AwsCloudFrontDistributionCacheBehaviors {
		Items?: Array<AwsCloudFrontDistributionCacheBehavior>;
	}

	/** Provides information about caching for the CloudFront distribution. */
	export interface AwsCloudFrontDistributionCacheBehaviorsFormProperties {
	}
	export function CreateAwsCloudFrontDistributionCacheBehaviorsFormGroup() {
		return new FormGroup<AwsCloudFrontDistributionCacheBehaviorsFormProperties>({
		});

	}


	/** Information about a cache behavior for the distribution. */
	export interface AwsCloudFrontDistributionCacheBehavior {
		ViewerProtocolPolicy?: string;
	}

	/** Information about a cache behavior for the distribution. */
	export interface AwsCloudFrontDistributionCacheBehaviorFormProperties {
		ViewerProtocolPolicy: FormControl<string | null | undefined>,
	}
	export function CreateAwsCloudFrontDistributionCacheBehaviorFormGroup() {
		return new FormGroup<AwsCloudFrontDistributionCacheBehaviorFormProperties>({
			ViewerProtocolPolicy: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information about the default cache configuration for the CloudFront distribution. */
	export interface AwsCloudFrontDistributionDefaultCacheBehavior {
		ViewerProtocolPolicy?: string;
	}

	/** Contains information about the default cache configuration for the CloudFront distribution. */
	export interface AwsCloudFrontDistributionDefaultCacheBehaviorFormProperties {
		ViewerProtocolPolicy: FormControl<string | null | undefined>,
	}
	export function CreateAwsCloudFrontDistributionDefaultCacheBehaviorFormGroup() {
		return new FormGroup<AwsCloudFrontDistributionDefaultCacheBehaviorFormProperties>({
			ViewerProtocolPolicy: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A complex type that controls whether access logs are written for the CloudFront distribution. */
	export interface AwsCloudFrontDistributionLogging {
		Bucket?: string;
		Enabled?: boolean | null;
		IncludeCookies?: boolean | null;
		Prefix?: string;
	}

	/** A complex type that controls whether access logs are written for the CloudFront distribution. */
	export interface AwsCloudFrontDistributionLoggingFormProperties {
		Bucket: FormControl<string | null | undefined>,
		Enabled: FormControl<boolean | null | undefined>,
		IncludeCookies: FormControl<boolean | null | undefined>,
		Prefix: FormControl<string | null | undefined>,
	}
	export function CreateAwsCloudFrontDistributionLoggingFormGroup() {
		return new FormGroup<AwsCloudFrontDistributionLoggingFormProperties>({
			Bucket: new FormControl<string | null | undefined>(undefined),
			Enabled: new FormControl<boolean | null | undefined>(undefined),
			IncludeCookies: new FormControl<boolean | null | undefined>(undefined),
			Prefix: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A complex type that contains information about origins and origin groups for this CloudFront distribution. */
	export interface AwsCloudFrontDistributionOrigins {
		Items?: Array<AwsCloudFrontDistributionOriginItem>;
	}

	/** A complex type that contains information about origins and origin groups for this CloudFront distribution. */
	export interface AwsCloudFrontDistributionOriginsFormProperties {
	}
	export function CreateAwsCloudFrontDistributionOriginsFormGroup() {
		return new FormGroup<AwsCloudFrontDistributionOriginsFormProperties>({
		});

	}


	/** A complex type that describes the Amazon S3 bucket, HTTP server (for example, a web server), AWS Elemental MediaStore, or other server from which CloudFront gets your files. */
	export interface AwsCloudFrontDistributionOriginItem {
		DomainName?: string;
		Id?: string;
		OriginPath?: string;
		S3OriginConfig?: AwsCloudFrontDistributionOriginS3OriginConfig;
		CustomOriginConfig?: AwsCloudFrontDistributionOriginCustomOriginConfig;
	}

	/** A complex type that describes the Amazon S3 bucket, HTTP server (for example, a web server), AWS Elemental MediaStore, or other server from which CloudFront gets your files. */
	export interface AwsCloudFrontDistributionOriginItemFormProperties {
		DomainName: FormControl<string | null | undefined>,
		Id: FormControl<string | null | undefined>,
		OriginPath: FormControl<string | null | undefined>,
	}
	export function CreateAwsCloudFrontDistributionOriginItemFormGroup() {
		return new FormGroup<AwsCloudFrontDistributionOriginItemFormProperties>({
			DomainName: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			OriginPath: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about an origin that is an Amazon S3 bucket that is not configured with static website hosting. */
	export interface AwsCloudFrontDistributionOriginS3OriginConfig {
		OriginAccessIdentity?: string;
	}

	/** Information about an origin that is an Amazon S3 bucket that is not configured with static website hosting. */
	export interface AwsCloudFrontDistributionOriginS3OriginConfigFormProperties {
		OriginAccessIdentity: FormControl<string | null | undefined>,
	}
	export function CreateAwsCloudFrontDistributionOriginS3OriginConfigFormGroup() {
		return new FormGroup<AwsCloudFrontDistributionOriginS3OriginConfigFormProperties>({
			OriginAccessIdentity: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A custom origin. A custom origin is any origin that is not an Amazon S3 bucket, with one exception. An Amazon S3 bucket that is <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/WebsiteHosting.html">configured with static website hosting</a> is a custom origin.  */
	export interface AwsCloudFrontDistributionOriginCustomOriginConfig {
		HttpPort?: number | null;
		HttpsPort?: number | null;
		OriginKeepaliveTimeout?: number | null;
		OriginProtocolPolicy?: string;
		OriginReadTimeout?: number | null;
		OriginSslProtocols?: AwsCloudFrontDistributionOriginSslProtocols;
	}

	/** A custom origin. A custom origin is any origin that is not an Amazon S3 bucket, with one exception. An Amazon S3 bucket that is <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/WebsiteHosting.html">configured with static website hosting</a> is a custom origin.  */
	export interface AwsCloudFrontDistributionOriginCustomOriginConfigFormProperties {
		HttpPort: FormControl<number | null | undefined>,
		HttpsPort: FormControl<number | null | undefined>,
		OriginKeepaliveTimeout: FormControl<number | null | undefined>,
		OriginProtocolPolicy: FormControl<string | null | undefined>,
		OriginReadTimeout: FormControl<number | null | undefined>,
	}
	export function CreateAwsCloudFrontDistributionOriginCustomOriginConfigFormGroup() {
		return new FormGroup<AwsCloudFrontDistributionOriginCustomOriginConfigFormProperties>({
			HttpPort: new FormControl<number | null | undefined>(undefined),
			HttpsPort: new FormControl<number | null | undefined>(undefined),
			OriginKeepaliveTimeout: new FormControl<number | null | undefined>(undefined),
			OriginProtocolPolicy: new FormControl<string | null | undefined>(undefined),
			OriginReadTimeout: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A complex type that contains information about the SSL/TLS protocols that CloudFront can use when establishing an HTTPS connection with your origin.  */
	export interface AwsCloudFrontDistributionOriginSslProtocols {
		Items?: Array<string>;
		Quantity?: number | null;
	}

	/** A complex type that contains information about the SSL/TLS protocols that CloudFront can use when establishing an HTTPS connection with your origin.  */
	export interface AwsCloudFrontDistributionOriginSslProtocolsFormProperties {
		Quantity: FormControl<number | null | undefined>,
	}
	export function CreateAwsCloudFrontDistributionOriginSslProtocolsFormGroup() {
		return new FormGroup<AwsCloudFrontDistributionOriginSslProtocolsFormProperties>({
			Quantity: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Provides information about origin groups that are associated with the CloudFront distribution. */
	export interface AwsCloudFrontDistributionOriginGroups {
		Items?: Array<AwsCloudFrontDistributionOriginGroup>;
	}

	/** Provides information about origin groups that are associated with the CloudFront distribution. */
	export interface AwsCloudFrontDistributionOriginGroupsFormProperties {
	}
	export function CreateAwsCloudFrontDistributionOriginGroupsFormGroup() {
		return new FormGroup<AwsCloudFrontDistributionOriginGroupsFormProperties>({
		});

	}


	/** Information about an origin group for the CloudFront distribution. */
	export interface AwsCloudFrontDistributionOriginGroup {
		FailoverCriteria?: AwsCloudFrontDistributionOriginGroupFailover;
	}

	/** Information about an origin group for the CloudFront distribution. */
	export interface AwsCloudFrontDistributionOriginGroupFormProperties {
	}
	export function CreateAwsCloudFrontDistributionOriginGroupFormGroup() {
		return new FormGroup<AwsCloudFrontDistributionOriginGroupFormProperties>({
		});

	}


	/** Provides information about when an origin group fails over. */
	export interface AwsCloudFrontDistributionOriginGroupFailover {
		StatusCodes?: AwsCloudFrontDistributionOriginGroupFailoverStatusCodes;
	}

	/** Provides information about when an origin group fails over. */
	export interface AwsCloudFrontDistributionOriginGroupFailoverFormProperties {
	}
	export function CreateAwsCloudFrontDistributionOriginGroupFailoverFormGroup() {
		return new FormGroup<AwsCloudFrontDistributionOriginGroupFailoverFormProperties>({
		});

	}


	/** The status codes that cause an origin group to fail over. */
	export interface AwsCloudFrontDistributionOriginGroupFailoverStatusCodes {
		Items?: Array<number> | null;
		Quantity?: number | null;
	}

	/** The status codes that cause an origin group to fail over. */
	export interface AwsCloudFrontDistributionOriginGroupFailoverStatusCodesFormProperties {
		Quantity: FormControl<number | null | undefined>,
	}
	export function CreateAwsCloudFrontDistributionOriginGroupFailoverStatusCodesFormGroup() {
		return new FormGroup<AwsCloudFrontDistributionOriginGroupFailoverStatusCodesFormProperties>({
			Quantity: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Provides information about the TLS/SSL configuration that the CloudFront distribution uses to communicate with viewers. */
	export interface AwsCloudFrontDistributionViewerCertificate {
		AcmCertificateArn?: string;
		Certificate?: string;
		CertificateSource?: string;
		CloudFrontDefaultCertificate?: boolean | null;
		IamCertificateId?: string;
		MinimumProtocolVersion?: string;
		SslSupportMethod?: string;
	}

	/** Provides information about the TLS/SSL configuration that the CloudFront distribution uses to communicate with viewers. */
	export interface AwsCloudFrontDistributionViewerCertificateFormProperties {
		AcmCertificateArn: FormControl<string | null | undefined>,
		Certificate: FormControl<string | null | undefined>,
		CertificateSource: FormControl<string | null | undefined>,
		CloudFrontDefaultCertificate: FormControl<boolean | null | undefined>,
		IamCertificateId: FormControl<string | null | undefined>,
		MinimumProtocolVersion: FormControl<string | null | undefined>,
		SslSupportMethod: FormControl<string | null | undefined>,
	}
	export function CreateAwsCloudFrontDistributionViewerCertificateFormGroup() {
		return new FormGroup<AwsCloudFrontDistributionViewerCertificateFormProperties>({
			AcmCertificateArn: new FormControl<string | null | undefined>(undefined),
			Certificate: new FormControl<string | null | undefined>(undefined),
			CertificateSource: new FormControl<string | null | undefined>(undefined),
			CloudFrontDefaultCertificate: new FormControl<boolean | null | undefined>(undefined),
			IamCertificateId: new FormControl<string | null | undefined>(undefined),
			MinimumProtocolVersion: new FormControl<string | null | undefined>(undefined),
			SslSupportMethod: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The details of an Amazon EC2 instance. */
	export interface AwsEc2InstanceDetails {
		Type?: string;
		ImageId?: string;
		IpV4Addresses?: Array<string>;
		IpV6Addresses?: Array<string>;
		KeyName?: string;
		IamInstanceProfileArn?: string;
		VpcId?: string;
		SubnetId?: string;
		LaunchedAt?: string;
		NetworkInterfaces?: Array<AwsEc2InstanceNetworkInterfacesDetails>;
		VirtualizationType?: string;
		MetadataOptions?: AwsEc2InstanceMetadataOptions;
		Monitoring?: AwsEc2InstanceMonitoringDetails;
	}

	/** The details of an Amazon EC2 instance. */
	export interface AwsEc2InstanceDetailsFormProperties {
		Type: FormControl<string | null | undefined>,
		ImageId: FormControl<string | null | undefined>,
		KeyName: FormControl<string | null | undefined>,
		IamInstanceProfileArn: FormControl<string | null | undefined>,
		VpcId: FormControl<string | null | undefined>,
		SubnetId: FormControl<string | null | undefined>,
		LaunchedAt: FormControl<string | null | undefined>,
		VirtualizationType: FormControl<string | null | undefined>,
	}
	export function CreateAwsEc2InstanceDetailsFormGroup() {
		return new FormGroup<AwsEc2InstanceDetailsFormProperties>({
			Type: new FormControl<string | null | undefined>(undefined),
			ImageId: new FormControl<string | null | undefined>(undefined),
			KeyName: new FormControl<string | null | undefined>(undefined),
			IamInstanceProfileArn: new FormControl<string | null | undefined>(undefined),
			VpcId: new FormControl<string | null | undefined>(undefined),
			SubnetId: new FormControl<string | null | undefined>(undefined),
			LaunchedAt: new FormControl<string | null | undefined>(undefined),
			VirtualizationType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Identifies a network interface for the Amazon EC2 instance. */
	export interface AwsEc2InstanceNetworkInterfacesDetails {
		NetworkInterfaceId?: string;
	}

	/** Identifies a network interface for the Amazon EC2 instance. */
	export interface AwsEc2InstanceNetworkInterfacesDetailsFormProperties {
		NetworkInterfaceId: FormControl<string | null | undefined>,
	}
	export function CreateAwsEc2InstanceNetworkInterfacesDetailsFormGroup() {
		return new FormGroup<AwsEc2InstanceNetworkInterfacesDetailsFormProperties>({
			NetworkInterfaceId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata options that allow you to configure and secure the Amazon EC2 instance. */
	export interface AwsEc2InstanceMetadataOptions {
		HttpEndpoint?: string;
		HttpProtocolIpv6?: string;
		HttpPutResponseHopLimit?: number | null;
		HttpTokens?: string;
		InstanceMetadataTags?: string;
	}

	/** Metadata options that allow you to configure and secure the Amazon EC2 instance. */
	export interface AwsEc2InstanceMetadataOptionsFormProperties {
		HttpEndpoint: FormControl<string | null | undefined>,
		HttpProtocolIpv6: FormControl<string | null | undefined>,
		HttpPutResponseHopLimit: FormControl<number | null | undefined>,
		HttpTokens: FormControl<string | null | undefined>,
		InstanceMetadataTags: FormControl<string | null | undefined>,
	}
	export function CreateAwsEc2InstanceMetadataOptionsFormGroup() {
		return new FormGroup<AwsEc2InstanceMetadataOptionsFormProperties>({
			HttpEndpoint: new FormControl<string | null | undefined>(undefined),
			HttpProtocolIpv6: new FormControl<string | null | undefined>(undefined),
			HttpPutResponseHopLimit: new FormControl<number | null | undefined>(undefined),
			HttpTokens: new FormControl<string | null | undefined>(undefined),
			InstanceMetadataTags: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  The type of monitoring that’s turned on for an Amazon EC2 instance.  */
	export interface AwsEc2InstanceMonitoringDetails {
		State?: string;
	}

	/**  The type of monitoring that’s turned on for an Amazon EC2 instance.  */
	export interface AwsEc2InstanceMonitoringDetailsFormProperties {
		State: FormControl<string | null | undefined>,
	}
	export function CreateAwsEc2InstanceMonitoringDetailsFormGroup() {
		return new FormGroup<AwsEc2InstanceMonitoringDetailsFormProperties>({
			State: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details about the network interface */
	export interface AwsEc2NetworkInterfaceDetails {
		Attachment?: AwsEc2NetworkInterfaceAttachment;
		NetworkInterfaceId?: string;
		SecurityGroups?: Array<AwsEc2NetworkInterfaceSecurityGroup>;
		SourceDestCheck?: boolean | null;
		IpV6Addresses?: Array<AwsEc2NetworkInterfaceIpV6AddressDetail>;
		PrivateIpAddresses?: Array<AwsEc2NetworkInterfacePrivateIpAddressDetail>;
		PublicDnsName?: string;
		PublicIp?: string;
	}

	/** Details about the network interface */
	export interface AwsEc2NetworkInterfaceDetailsFormProperties {
		NetworkInterfaceId: FormControl<string | null | undefined>,
		SourceDestCheck: FormControl<boolean | null | undefined>,
		PublicDnsName: FormControl<string | null | undefined>,
		PublicIp: FormControl<string | null | undefined>,
	}
	export function CreateAwsEc2NetworkInterfaceDetailsFormGroup() {
		return new FormGroup<AwsEc2NetworkInterfaceDetailsFormProperties>({
			NetworkInterfaceId: new FormControl<string | null | undefined>(undefined),
			SourceDestCheck: new FormControl<boolean | null | undefined>(undefined),
			PublicDnsName: new FormControl<string | null | undefined>(undefined),
			PublicIp: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about the network interface attachment. */
	export interface AwsEc2NetworkInterfaceAttachment {
		AttachTime?: string;
		AttachmentId?: string;
		DeleteOnTermination?: boolean | null;
		DeviceIndex?: number | null;
		InstanceId?: string;
		InstanceOwnerId?: string;
		Status?: string;
	}

	/** Information about the network interface attachment. */
	export interface AwsEc2NetworkInterfaceAttachmentFormProperties {
		AttachTime: FormControl<string | null | undefined>,
		AttachmentId: FormControl<string | null | undefined>,
		DeleteOnTermination: FormControl<boolean | null | undefined>,
		DeviceIndex: FormControl<number | null | undefined>,
		InstanceId: FormControl<string | null | undefined>,
		InstanceOwnerId: FormControl<string | null | undefined>,
		Status: FormControl<string | null | undefined>,
	}
	export function CreateAwsEc2NetworkInterfaceAttachmentFormGroup() {
		return new FormGroup<AwsEc2NetworkInterfaceAttachmentFormProperties>({
			AttachTime: new FormControl<string | null | undefined>(undefined),
			AttachmentId: new FormControl<string | null | undefined>(undefined),
			DeleteOnTermination: new FormControl<boolean | null | undefined>(undefined),
			DeviceIndex: new FormControl<number | null | undefined>(undefined),
			InstanceId: new FormControl<string | null | undefined>(undefined),
			InstanceOwnerId: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A security group associated with the network interface. */
	export interface AwsEc2NetworkInterfaceSecurityGroup {
		GroupName?: string;
		GroupId?: string;
	}

	/** A security group associated with the network interface. */
	export interface AwsEc2NetworkInterfaceSecurityGroupFormProperties {
		GroupName: FormControl<string | null | undefined>,
		GroupId: FormControl<string | null | undefined>,
	}
	export function CreateAwsEc2NetworkInterfaceSecurityGroupFormGroup() {
		return new FormGroup<AwsEc2NetworkInterfaceSecurityGroupFormProperties>({
			GroupName: new FormControl<string | null | undefined>(undefined),
			GroupId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides information about an IPV6 address that is associated with the network interface. */
	export interface AwsEc2NetworkInterfaceIpV6AddressDetail {
		IpV6Address?: string;
	}

	/** Provides information about an IPV6 address that is associated with the network interface. */
	export interface AwsEc2NetworkInterfaceIpV6AddressDetailFormProperties {
		IpV6Address: FormControl<string | null | undefined>,
	}
	export function CreateAwsEc2NetworkInterfaceIpV6AddressDetailFormGroup() {
		return new FormGroup<AwsEc2NetworkInterfaceIpV6AddressDetailFormProperties>({
			IpV6Address: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides information about a private IPv4 address that is with the network interface. */
	export interface AwsEc2NetworkInterfacePrivateIpAddressDetail {
		PrivateIpAddress?: string;
		PrivateDnsName?: string;
	}

	/** Provides information about a private IPv4 address that is with the network interface. */
	export interface AwsEc2NetworkInterfacePrivateIpAddressDetailFormProperties {
		PrivateIpAddress: FormControl<string | null | undefined>,
		PrivateDnsName: FormControl<string | null | undefined>,
	}
	export function CreateAwsEc2NetworkInterfacePrivateIpAddressDetailFormGroup() {
		return new FormGroup<AwsEc2NetworkInterfacePrivateIpAddressDetailFormProperties>({
			PrivateIpAddress: new FormControl<string | null | undefined>(undefined),
			PrivateDnsName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details about an Amazon EC2 security group. */
	export interface AwsEc2SecurityGroupDetails {
		GroupName?: string;
		GroupId?: string;
		OwnerId?: string;
		VpcId?: string;
		IpPermissions?: Array<AwsEc2SecurityGroupIpPermission>;
		IpPermissionsEgress?: Array<AwsEc2SecurityGroupIpPermission>;
	}

	/** Details about an Amazon EC2 security group. */
	export interface AwsEc2SecurityGroupDetailsFormProperties {
		GroupName: FormControl<string | null | undefined>,
		GroupId: FormControl<string | null | undefined>,
		OwnerId: FormControl<string | null | undefined>,
		VpcId: FormControl<string | null | undefined>,
	}
	export function CreateAwsEc2SecurityGroupDetailsFormGroup() {
		return new FormGroup<AwsEc2SecurityGroupDetailsFormProperties>({
			GroupName: new FormControl<string | null | undefined>(undefined),
			GroupId: new FormControl<string | null | undefined>(undefined),
			OwnerId: new FormControl<string | null | undefined>(undefined),
			VpcId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An IP permission for an EC2 security group. */
	export interface AwsEc2SecurityGroupIpPermission {
		IpProtocol?: string;
		FromPort?: number | null;
		ToPort?: number | null;
		UserIdGroupPairs?: Array<AwsEc2SecurityGroupUserIdGroupPair>;
		IpRanges?: Array<AwsEc2SecurityGroupIpRange>;
		Ipv6Ranges?: Array<AwsEc2SecurityGroupIpv6Range>;
		PrefixListIds?: Array<AwsEc2SecurityGroupPrefixListId>;
	}

	/** An IP permission for an EC2 security group. */
	export interface AwsEc2SecurityGroupIpPermissionFormProperties {
		IpProtocol: FormControl<string | null | undefined>,
		FromPort: FormControl<number | null | undefined>,
		ToPort: FormControl<number | null | undefined>,
	}
	export function CreateAwsEc2SecurityGroupIpPermissionFormGroup() {
		return new FormGroup<AwsEc2SecurityGroupIpPermissionFormProperties>({
			IpProtocol: new FormControl<string | null | undefined>(undefined),
			FromPort: new FormControl<number | null | undefined>(undefined),
			ToPort: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A relationship between a security group and a user. */
	export interface AwsEc2SecurityGroupUserIdGroupPair {
		GroupId?: string;
		GroupName?: string;
		PeeringStatus?: string;
		UserId?: string;
		VpcId?: string;
		VpcPeeringConnectionId?: string;
	}

	/** A relationship between a security group and a user. */
	export interface AwsEc2SecurityGroupUserIdGroupPairFormProperties {
		GroupId: FormControl<string | null | undefined>,
		GroupName: FormControl<string | null | undefined>,
		PeeringStatus: FormControl<string | null | undefined>,
		UserId: FormControl<string | null | undefined>,
		VpcId: FormControl<string | null | undefined>,
		VpcPeeringConnectionId: FormControl<string | null | undefined>,
	}
	export function CreateAwsEc2SecurityGroupUserIdGroupPairFormGroup() {
		return new FormGroup<AwsEc2SecurityGroupUserIdGroupPairFormProperties>({
			GroupId: new FormControl<string | null | undefined>(undefined),
			GroupName: new FormControl<string | null | undefined>(undefined),
			PeeringStatus: new FormControl<string | null | undefined>(undefined),
			UserId: new FormControl<string | null | undefined>(undefined),
			VpcId: new FormControl<string | null | undefined>(undefined),
			VpcPeeringConnectionId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A range of IPv4 addresses. */
	export interface AwsEc2SecurityGroupIpRange {
		CidrIp?: string;
	}

	/** A range of IPv4 addresses. */
	export interface AwsEc2SecurityGroupIpRangeFormProperties {
		CidrIp: FormControl<string | null | undefined>,
	}
	export function CreateAwsEc2SecurityGroupIpRangeFormGroup() {
		return new FormGroup<AwsEc2SecurityGroupIpRangeFormProperties>({
			CidrIp: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A range of IPv6 addresses. */
	export interface AwsEc2SecurityGroupIpv6Range {
		CidrIpv6?: string;
	}

	/** A range of IPv6 addresses. */
	export interface AwsEc2SecurityGroupIpv6RangeFormProperties {
		CidrIpv6: FormControl<string | null | undefined>,
	}
	export function CreateAwsEc2SecurityGroupIpv6RangeFormGroup() {
		return new FormGroup<AwsEc2SecurityGroupIpv6RangeFormProperties>({
			CidrIpv6: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A prefix list ID. */
	export interface AwsEc2SecurityGroupPrefixListId {
		PrefixListId?: string;
	}

	/** A prefix list ID. */
	export interface AwsEc2SecurityGroupPrefixListIdFormProperties {
		PrefixListId: FormControl<string | null | undefined>,
	}
	export function CreateAwsEc2SecurityGroupPrefixListIdFormGroup() {
		return new FormGroup<AwsEc2SecurityGroupPrefixListIdFormProperties>({
			PrefixListId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details about an EC2 volume. */
	export interface AwsEc2VolumeDetails {
		CreateTime?: string;
		DeviceName?: string;
		Encrypted?: boolean | null;
		Size?: number | null;
		SnapshotId?: string;
		Status?: string;
		KmsKeyId?: string;
		Attachments?: Array<AwsEc2VolumeAttachment>;
		VolumeId?: string;
		VolumeType?: string;
		VolumeScanStatus?: string;
	}

	/** Details about an EC2 volume. */
	export interface AwsEc2VolumeDetailsFormProperties {
		CreateTime: FormControl<string | null | undefined>,
		DeviceName: FormControl<string | null | undefined>,
		Encrypted: FormControl<boolean | null | undefined>,
		Size: FormControl<number | null | undefined>,
		SnapshotId: FormControl<string | null | undefined>,
		Status: FormControl<string | null | undefined>,
		KmsKeyId: FormControl<string | null | undefined>,
		VolumeId: FormControl<string | null | undefined>,
		VolumeType: FormControl<string | null | undefined>,
		VolumeScanStatus: FormControl<string | null | undefined>,
	}
	export function CreateAwsEc2VolumeDetailsFormGroup() {
		return new FormGroup<AwsEc2VolumeDetailsFormProperties>({
			CreateTime: new FormControl<string | null | undefined>(undefined),
			DeviceName: new FormControl<string | null | undefined>(undefined),
			Encrypted: new FormControl<boolean | null | undefined>(undefined),
			Size: new FormControl<number | null | undefined>(undefined),
			SnapshotId: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
			KmsKeyId: new FormControl<string | null | undefined>(undefined),
			VolumeId: new FormControl<string | null | undefined>(undefined),
			VolumeType: new FormControl<string | null | undefined>(undefined),
			VolumeScanStatus: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An attachment to an Amazon EC2 volume. */
	export interface AwsEc2VolumeAttachment {
		AttachTime?: string;
		DeleteOnTermination?: boolean | null;
		InstanceId?: string;
		Status?: string;
	}

	/** An attachment to an Amazon EC2 volume. */
	export interface AwsEc2VolumeAttachmentFormProperties {
		AttachTime: FormControl<string | null | undefined>,
		DeleteOnTermination: FormControl<boolean | null | undefined>,
		InstanceId: FormControl<string | null | undefined>,
		Status: FormControl<string | null | undefined>,
	}
	export function CreateAwsEc2VolumeAttachmentFormGroup() {
		return new FormGroup<AwsEc2VolumeAttachmentFormProperties>({
			AttachTime: new FormControl<string | null | undefined>(undefined),
			DeleteOnTermination: new FormControl<boolean | null | undefined>(undefined),
			InstanceId: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details about an EC2 VPC. */
	export interface AwsEc2VpcDetails {
		CidrBlockAssociationSet?: Array<CidrBlockAssociation>;
		Ipv6CidrBlockAssociationSet?: Array<Ipv6CidrBlockAssociation>;
		DhcpOptionsId?: string;
		State?: string;
	}

	/** Details about an EC2 VPC. */
	export interface AwsEc2VpcDetailsFormProperties {
		DhcpOptionsId: FormControl<string | null | undefined>,
		State: FormControl<string | null | undefined>,
	}
	export function CreateAwsEc2VpcDetailsFormGroup() {
		return new FormGroup<AwsEc2VpcDetailsFormProperties>({
			DhcpOptionsId: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An IPv4 CIDR block association. */
	export interface CidrBlockAssociation {
		AssociationId?: string;
		CidrBlock?: string;
		CidrBlockState?: string;
	}

	/** An IPv4 CIDR block association. */
	export interface CidrBlockAssociationFormProperties {
		AssociationId: FormControl<string | null | undefined>,
		CidrBlock: FormControl<string | null | undefined>,
		CidrBlockState: FormControl<string | null | undefined>,
	}
	export function CreateCidrBlockAssociationFormGroup() {
		return new FormGroup<CidrBlockAssociationFormProperties>({
			AssociationId: new FormControl<string | null | undefined>(undefined),
			CidrBlock: new FormControl<string | null | undefined>(undefined),
			CidrBlockState: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An IPV6 CIDR block association. */
	export interface Ipv6CidrBlockAssociation {
		AssociationId?: string;
		Ipv6CidrBlock?: string;
		CidrBlockState?: string;
	}

	/** An IPV6 CIDR block association. */
	export interface Ipv6CidrBlockAssociationFormProperties {
		AssociationId: FormControl<string | null | undefined>,
		Ipv6CidrBlock: FormControl<string | null | undefined>,
		CidrBlockState: FormControl<string | null | undefined>,
	}
	export function CreateIpv6CidrBlockAssociationFormGroup() {
		return new FormGroup<Ipv6CidrBlockAssociationFormProperties>({
			AssociationId: new FormControl<string | null | undefined>(undefined),
			Ipv6CidrBlock: new FormControl<string | null | undefined>(undefined),
			CidrBlockState: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about an Elastic IP address. */
	export interface AwsEc2EipDetails {
		InstanceId?: string;
		PublicIp?: string;
		AllocationId?: string;
		AssociationId?: string;
		Domain?: string;
		PublicIpv4Pool?: string;
		NetworkBorderGroup?: string;
		NetworkInterfaceId?: string;
		NetworkInterfaceOwnerId?: string;
		PrivateIpAddress?: string;
	}

	/** Information about an Elastic IP address. */
	export interface AwsEc2EipDetailsFormProperties {
		InstanceId: FormControl<string | null | undefined>,
		PublicIp: FormControl<string | null | undefined>,
		AllocationId: FormControl<string | null | undefined>,
		AssociationId: FormControl<string | null | undefined>,
		Domain: FormControl<string | null | undefined>,
		PublicIpv4Pool: FormControl<string | null | undefined>,
		NetworkBorderGroup: FormControl<string | null | undefined>,
		NetworkInterfaceId: FormControl<string | null | undefined>,
		NetworkInterfaceOwnerId: FormControl<string | null | undefined>,
		PrivateIpAddress: FormControl<string | null | undefined>,
	}
	export function CreateAwsEc2EipDetailsFormGroup() {
		return new FormGroup<AwsEc2EipDetailsFormProperties>({
			InstanceId: new FormControl<string | null | undefined>(undefined),
			PublicIp: new FormControl<string | null | undefined>(undefined),
			AllocationId: new FormControl<string | null | undefined>(undefined),
			AssociationId: new FormControl<string | null | undefined>(undefined),
			Domain: new FormControl<string | null | undefined>(undefined),
			PublicIpv4Pool: new FormControl<string | null | undefined>(undefined),
			NetworkBorderGroup: new FormControl<string | null | undefined>(undefined),
			NetworkInterfaceId: new FormControl<string | null | undefined>(undefined),
			NetworkInterfaceOwnerId: new FormControl<string | null | undefined>(undefined),
			PrivateIpAddress: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information about a subnet in Amazon EC2. */
	export interface AwsEc2SubnetDetails {
		AssignIpv6AddressOnCreation?: boolean | null;
		AvailabilityZone?: string;
		AvailabilityZoneId?: string;
		AvailableIpAddressCount?: number | null;
		CidrBlock?: string;
		DefaultForAz?: boolean | null;
		MapPublicIpOnLaunch?: boolean | null;
		OwnerId?: string;
		State?: string;
		SubnetArn?: string;
		SubnetId?: string;
		VpcId?: string;
		Ipv6CidrBlockAssociationSet?: Array<Ipv6CidrBlockAssociation>;
	}

	/** Contains information about a subnet in Amazon EC2. */
	export interface AwsEc2SubnetDetailsFormProperties {
		AssignIpv6AddressOnCreation: FormControl<boolean | null | undefined>,
		AvailabilityZone: FormControl<string | null | undefined>,
		AvailabilityZoneId: FormControl<string | null | undefined>,
		AvailableIpAddressCount: FormControl<number | null | undefined>,
		CidrBlock: FormControl<string | null | undefined>,
		DefaultForAz: FormControl<boolean | null | undefined>,
		MapPublicIpOnLaunch: FormControl<boolean | null | undefined>,
		OwnerId: FormControl<string | null | undefined>,
		State: FormControl<string | null | undefined>,
		SubnetArn: FormControl<string | null | undefined>,
		SubnetId: FormControl<string | null | undefined>,
		VpcId: FormControl<string | null | undefined>,
	}
	export function CreateAwsEc2SubnetDetailsFormGroup() {
		return new FormGroup<AwsEc2SubnetDetailsFormProperties>({
			AssignIpv6AddressOnCreation: new FormControl<boolean | null | undefined>(undefined),
			AvailabilityZone: new FormControl<string | null | undefined>(undefined),
			AvailabilityZoneId: new FormControl<string | null | undefined>(undefined),
			AvailableIpAddressCount: new FormControl<number | null | undefined>(undefined),
			CidrBlock: new FormControl<string | null | undefined>(undefined),
			DefaultForAz: new FormControl<boolean | null | undefined>(undefined),
			MapPublicIpOnLaunch: new FormControl<boolean | null | undefined>(undefined),
			OwnerId: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<string | null | undefined>(undefined),
			SubnetArn: new FormControl<string | null | undefined>(undefined),
			SubnetId: new FormControl<string | null | undefined>(undefined),
			VpcId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains details about an Amazon EC2 network access control list (ACL). */
	export interface AwsEc2NetworkAclDetails {
		IsDefault?: boolean | null;
		NetworkAclId?: string;
		OwnerId?: string;
		VpcId?: string;
		Associations?: Array<AwsEc2NetworkAclAssociation>;
		Entries?: Array<AwsEc2NetworkAclEntry>;
	}

	/** Contains details about an Amazon EC2 network access control list (ACL). */
	export interface AwsEc2NetworkAclDetailsFormProperties {
		IsDefault: FormControl<boolean | null | undefined>,
		NetworkAclId: FormControl<string | null | undefined>,
		OwnerId: FormControl<string | null | undefined>,
		VpcId: FormControl<string | null | undefined>,
	}
	export function CreateAwsEc2NetworkAclDetailsFormGroup() {
		return new FormGroup<AwsEc2NetworkAclDetailsFormProperties>({
			IsDefault: new FormControl<boolean | null | undefined>(undefined),
			NetworkAclId: new FormControl<string | null | undefined>(undefined),
			OwnerId: new FormControl<string | null | undefined>(undefined),
			VpcId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An association between the network ACL and a subnet. */
	export interface AwsEc2NetworkAclAssociation {
		NetworkAclAssociationId?: string;
		NetworkAclId?: string;
		SubnetId?: string;
	}

	/** An association between the network ACL and a subnet. */
	export interface AwsEc2NetworkAclAssociationFormProperties {
		NetworkAclAssociationId: FormControl<string | null | undefined>,
		NetworkAclId: FormControl<string | null | undefined>,
		SubnetId: FormControl<string | null | undefined>,
	}
	export function CreateAwsEc2NetworkAclAssociationFormGroup() {
		return new FormGroup<AwsEc2NetworkAclAssociationFormProperties>({
			NetworkAclAssociationId: new FormControl<string | null | undefined>(undefined),
			NetworkAclId: new FormControl<string | null | undefined>(undefined),
			SubnetId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A rule for the network ACL. Each rule allows or denies access based on the IP address, traffic direction, port, and protocol. */
	export interface AwsEc2NetworkAclEntry {
		CidrBlock?: string;
		Egress?: boolean | null;
		IcmpTypeCode?: IcmpTypeCode;
		Ipv6CidrBlock?: string;
		PortRange?: PortRangeFromTo;
		Protocol?: string;
		RuleAction?: string;
		RuleNumber?: number | null;
	}

	/** A rule for the network ACL. Each rule allows or denies access based on the IP address, traffic direction, port, and protocol. */
	export interface AwsEc2NetworkAclEntryFormProperties {
		CidrBlock: FormControl<string | null | undefined>,
		Egress: FormControl<boolean | null | undefined>,
		Ipv6CidrBlock: FormControl<string | null | undefined>,
		Protocol: FormControl<string | null | undefined>,
		RuleAction: FormControl<string | null | undefined>,
		RuleNumber: FormControl<number | null | undefined>,
	}
	export function CreateAwsEc2NetworkAclEntryFormGroup() {
		return new FormGroup<AwsEc2NetworkAclEntryFormProperties>({
			CidrBlock: new FormControl<string | null | undefined>(undefined),
			Egress: new FormControl<boolean | null | undefined>(undefined),
			Ipv6CidrBlock: new FormControl<string | null | undefined>(undefined),
			Protocol: new FormControl<string | null | undefined>(undefined),
			RuleAction: new FormControl<string | null | undefined>(undefined),
			RuleNumber: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** An Internet Control Message Protocol (ICMP) type and code. */
	export interface IcmpTypeCode {
		Code?: number | null;
		Type?: number | null;
	}

	/** An Internet Control Message Protocol (ICMP) type and code. */
	export interface IcmpTypeCodeFormProperties {
		Code: FormControl<number | null | undefined>,
		Type: FormControl<number | null | undefined>,
	}
	export function CreateIcmpTypeCodeFormGroup() {
		return new FormGroup<IcmpTypeCodeFormProperties>({
			Code: new FormControl<number | null | undefined>(undefined),
			Type: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A range of ports. */
	export interface PortRangeFromTo {
		From?: number | null;
		To?: number | null;
	}

	/** A range of ports. */
	export interface PortRangeFromToFormProperties {
		From: FormControl<number | null | undefined>,
		To: FormControl<number | null | undefined>,
	}
	export function CreatePortRangeFromToFormGroup() {
		return new FormGroup<PortRangeFromToFormProperties>({
			From: new FormControl<number | null | undefined>(undefined),
			To: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Information about a load balancer. */
	export interface AwsElbv2LoadBalancerDetails {
		AvailabilityZones?: Array<AvailabilityZone>;
		CanonicalHostedZoneId?: string;
		CreatedTime?: string;
		DNSName?: string;
		IpAddressType?: string;
		Scheme?: string;
		SecurityGroups?: Array<string>;
		State?: LoadBalancerState;
		Type?: string;
		VpcId?: string;
		LoadBalancerAttributes?: Array<AwsElbv2LoadBalancerAttribute>;
	}

	/** Information about a load balancer. */
	export interface AwsElbv2LoadBalancerDetailsFormProperties {
		CanonicalHostedZoneId: FormControl<string | null | undefined>,
		CreatedTime: FormControl<string | null | undefined>,
		DNSName: FormControl<string | null | undefined>,
		IpAddressType: FormControl<string | null | undefined>,
		Scheme: FormControl<string | null | undefined>,
		Type: FormControl<string | null | undefined>,
		VpcId: FormControl<string | null | undefined>,
	}
	export function CreateAwsElbv2LoadBalancerDetailsFormGroup() {
		return new FormGroup<AwsElbv2LoadBalancerDetailsFormProperties>({
			CanonicalHostedZoneId: new FormControl<string | null | undefined>(undefined),
			CreatedTime: new FormControl<string | null | undefined>(undefined),
			DNSName: new FormControl<string | null | undefined>(undefined),
			IpAddressType: new FormControl<string | null | undefined>(undefined),
			Scheme: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<string | null | undefined>(undefined),
			VpcId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about an Availability Zone. */
	export interface AvailabilityZone {
		ZoneName?: string;
		SubnetId?: string;
	}

	/** Information about an Availability Zone. */
	export interface AvailabilityZoneFormProperties {
		ZoneName: FormControl<string | null | undefined>,
		SubnetId: FormControl<string | null | undefined>,
	}
	export function CreateAvailabilityZoneFormGroup() {
		return new FormGroup<AvailabilityZoneFormProperties>({
			ZoneName: new FormControl<string | null | undefined>(undefined),
			SubnetId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about the state of the load balancer. */
	export interface LoadBalancerState {
		Code?: string;
		Reason?: string;
	}

	/** Information about the state of the load balancer. */
	export interface LoadBalancerStateFormProperties {
		Code: FormControl<string | null | undefined>,
		Reason: FormControl<string | null | undefined>,
	}
	export function CreateLoadBalancerStateFormGroup() {
		return new FormGroup<LoadBalancerStateFormProperties>({
			Code: new FormControl<string | null | undefined>(undefined),
			Reason: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A load balancer attribute. */
	export interface AwsElbv2LoadBalancerAttribute {
		Key?: string;
		Value?: string;
	}

	/** A load balancer attribute. */
	export interface AwsElbv2LoadBalancerAttributeFormProperties {
		Key: FormControl<string | null | undefined>,
		Value: FormControl<string | null | undefined>,
	}
	export function CreateAwsElbv2LoadBalancerAttributeFormGroup() {
		return new FormGroup<AwsElbv2LoadBalancerAttributeFormProperties>({
			Key: new FormControl<string | null | undefined>(undefined),
			Value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains details about an Elastic Beanstalk environment. */
	export interface AwsElasticBeanstalkEnvironmentDetails {
		ApplicationName?: string;
		Cname?: string;
		DateCreated?: string;
		DateUpdated?: string;
		Description?: string;
		EndpointUrl?: string;
		EnvironmentArn?: string;
		EnvironmentId?: string;
		EnvironmentLinks?: Array<AwsElasticBeanstalkEnvironmentEnvironmentLink>;
		EnvironmentName?: string;
		OptionSettings?: Array<AwsElasticBeanstalkEnvironmentOptionSetting>;
		PlatformArn?: string;
		SolutionStackName?: string;
		Status?: string;
		Tier?: AwsElasticBeanstalkEnvironmentTier;
		VersionLabel?: string;
	}

	/** Contains details about an Elastic Beanstalk environment. */
	export interface AwsElasticBeanstalkEnvironmentDetailsFormProperties {
		ApplicationName: FormControl<string | null | undefined>,
		Cname: FormControl<string | null | undefined>,
		DateCreated: FormControl<string | null | undefined>,
		DateUpdated: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		EndpointUrl: FormControl<string | null | undefined>,
		EnvironmentArn: FormControl<string | null | undefined>,
		EnvironmentId: FormControl<string | null | undefined>,
		EnvironmentName: FormControl<string | null | undefined>,
		PlatformArn: FormControl<string | null | undefined>,
		SolutionStackName: FormControl<string | null | undefined>,
		Status: FormControl<string | null | undefined>,
		VersionLabel: FormControl<string | null | undefined>,
	}
	export function CreateAwsElasticBeanstalkEnvironmentDetailsFormGroup() {
		return new FormGroup<AwsElasticBeanstalkEnvironmentDetailsFormProperties>({
			ApplicationName: new FormControl<string | null | undefined>(undefined),
			Cname: new FormControl<string | null | undefined>(undefined),
			DateCreated: new FormControl<string | null | undefined>(undefined),
			DateUpdated: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			EndpointUrl: new FormControl<string | null | undefined>(undefined),
			EnvironmentArn: new FormControl<string | null | undefined>(undefined),
			EnvironmentId: new FormControl<string | null | undefined>(undefined),
			EnvironmentName: new FormControl<string | null | undefined>(undefined),
			PlatformArn: new FormControl<string | null | undefined>(undefined),
			SolutionStackName: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
			VersionLabel: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information about a link to another environment that is in the same group. */
	export interface AwsElasticBeanstalkEnvironmentEnvironmentLink {
		EnvironmentName?: string;
		LinkName?: string;
	}

	/** Contains information about a link to another environment that is in the same group. */
	export interface AwsElasticBeanstalkEnvironmentEnvironmentLinkFormProperties {
		EnvironmentName: FormControl<string | null | undefined>,
		LinkName: FormControl<string | null | undefined>,
	}
	export function CreateAwsElasticBeanstalkEnvironmentEnvironmentLinkFormGroup() {
		return new FormGroup<AwsElasticBeanstalkEnvironmentEnvironmentLinkFormProperties>({
			EnvironmentName: new FormControl<string | null | undefined>(undefined),
			LinkName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A configuration option setting for the environment. */
	export interface AwsElasticBeanstalkEnvironmentOptionSetting {
		Namespace?: string;
		OptionName?: string;
		ResourceName?: string;
		Value?: string;
	}

	/** A configuration option setting for the environment. */
	export interface AwsElasticBeanstalkEnvironmentOptionSettingFormProperties {
		Namespace: FormControl<string | null | undefined>,
		OptionName: FormControl<string | null | undefined>,
		ResourceName: FormControl<string | null | undefined>,
		Value: FormControl<string | null | undefined>,
	}
	export function CreateAwsElasticBeanstalkEnvironmentOptionSettingFormGroup() {
		return new FormGroup<AwsElasticBeanstalkEnvironmentOptionSettingFormProperties>({
			Namespace: new FormControl<string | null | undefined>(undefined),
			OptionName: new FormControl<string | null | undefined>(undefined),
			ResourceName: new FormControl<string | null | undefined>(undefined),
			Value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information about the tier of the environment. */
	export interface AwsElasticBeanstalkEnvironmentTier {
		Name?: string;
		Type?: string;
		Version?: string;
	}

	/** Contains information about the tier of the environment. */
	export interface AwsElasticBeanstalkEnvironmentTierFormProperties {
		Name: FormControl<string | null | undefined>,
		Type: FormControl<string | null | undefined>,
		Version: FormControl<string | null | undefined>,
	}
	export function CreateAwsElasticBeanstalkEnvironmentTierFormGroup() {
		return new FormGroup<AwsElasticBeanstalkEnvironmentTierFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<string | null | undefined>(undefined),
			Version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about an Elasticsearch domain. */
	export interface AwsElasticsearchDomainDetails {
		AccessPolicies?: string;
		DomainEndpointOptions?: AwsElasticsearchDomainDomainEndpointOptions;
		DomainId?: string;
		DomainName?: string;
		Endpoint?: string;
		Endpoints?: FieldMap;
		ElasticsearchVersion?: string;
		ElasticsearchClusterConfig?: AwsElasticsearchDomainElasticsearchClusterConfigDetails;
		EncryptionAtRestOptions?: AwsElasticsearchDomainEncryptionAtRestOptions;
		LogPublishingOptions?: AwsElasticsearchDomainLogPublishingOptions;
		NodeToNodeEncryptionOptions?: AwsElasticsearchDomainNodeToNodeEncryptionOptions;
		ServiceSoftwareOptions?: AwsElasticsearchDomainServiceSoftwareOptions;
		VPCOptions?: AwsElasticsearchDomainVPCOptions;
	}

	/** Information about an Elasticsearch domain. */
	export interface AwsElasticsearchDomainDetailsFormProperties {
		AccessPolicies: FormControl<string | null | undefined>,
		DomainId: FormControl<string | null | undefined>,
		DomainName: FormControl<string | null | undefined>,
		Endpoint: FormControl<string | null | undefined>,
		ElasticsearchVersion: FormControl<string | null | undefined>,
	}
	export function CreateAwsElasticsearchDomainDetailsFormGroup() {
		return new FormGroup<AwsElasticsearchDomainDetailsFormProperties>({
			AccessPolicies: new FormControl<string | null | undefined>(undefined),
			DomainId: new FormControl<string | null | undefined>(undefined),
			DomainName: new FormControl<string | null | undefined>(undefined),
			Endpoint: new FormControl<string | null | undefined>(undefined),
			ElasticsearchVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Additional options for the domain endpoint, such as whether to require HTTPS for all traffic. */
	export interface AwsElasticsearchDomainDomainEndpointOptions {
		EnforceHTTPS?: boolean | null;
		TLSSecurityPolicy?: string;
	}

	/** Additional options for the domain endpoint, such as whether to require HTTPS for all traffic. */
	export interface AwsElasticsearchDomainDomainEndpointOptionsFormProperties {
		EnforceHTTPS: FormControl<boolean | null | undefined>,
		TLSSecurityPolicy: FormControl<string | null | undefined>,
	}
	export function CreateAwsElasticsearchDomainDomainEndpointOptionsFormGroup() {
		return new FormGroup<AwsElasticsearchDomainDomainEndpointOptionsFormProperties>({
			EnforceHTTPS: new FormControl<boolean | null | undefined>(undefined),
			TLSSecurityPolicy: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** details about the configuration of an OpenSearch cluster. */
	export interface AwsElasticsearchDomainElasticsearchClusterConfigDetails {
		DedicatedMasterCount?: number | null;
		DedicatedMasterEnabled?: boolean | null;
		DedicatedMasterType?: string;
		InstanceCount?: number | null;
		InstanceType?: string;
		ZoneAwarenessConfig?: AwsElasticsearchDomainElasticsearchClusterConfigZoneAwarenessConfigDetails;
		ZoneAwarenessEnabled?: boolean | null;
	}

	/** details about the configuration of an OpenSearch cluster. */
	export interface AwsElasticsearchDomainElasticsearchClusterConfigDetailsFormProperties {
		DedicatedMasterCount: FormControl<number | null | undefined>,
		DedicatedMasterEnabled: FormControl<boolean | null | undefined>,
		DedicatedMasterType: FormControl<string | null | undefined>,
		InstanceCount: FormControl<number | null | undefined>,
		InstanceType: FormControl<string | null | undefined>,
		ZoneAwarenessEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateAwsElasticsearchDomainElasticsearchClusterConfigDetailsFormGroup() {
		return new FormGroup<AwsElasticsearchDomainElasticsearchClusterConfigDetailsFormProperties>({
			DedicatedMasterCount: new FormControl<number | null | undefined>(undefined),
			DedicatedMasterEnabled: new FormControl<boolean | null | undefined>(undefined),
			DedicatedMasterType: new FormControl<string | null | undefined>(undefined),
			InstanceCount: new FormControl<number | null | undefined>(undefined),
			InstanceType: new FormControl<string | null | undefined>(undefined),
			ZoneAwarenessEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Configuration options for zone awareness. */
	export interface AwsElasticsearchDomainElasticsearchClusterConfigZoneAwarenessConfigDetails {
		AvailabilityZoneCount?: number | null;
	}

	/** Configuration options for zone awareness. */
	export interface AwsElasticsearchDomainElasticsearchClusterConfigZoneAwarenessConfigDetailsFormProperties {
		AvailabilityZoneCount: FormControl<number | null | undefined>,
	}
	export function CreateAwsElasticsearchDomainElasticsearchClusterConfigZoneAwarenessConfigDetailsFormGroup() {
		return new FormGroup<AwsElasticsearchDomainElasticsearchClusterConfigZoneAwarenessConfigDetailsFormProperties>({
			AvailabilityZoneCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Details about the configuration for encryption at rest. */
	export interface AwsElasticsearchDomainEncryptionAtRestOptions {
		Enabled?: boolean | null;
		KmsKeyId?: string;
	}

	/** Details about the configuration for encryption at rest. */
	export interface AwsElasticsearchDomainEncryptionAtRestOptionsFormProperties {
		Enabled: FormControl<boolean | null | undefined>,
		KmsKeyId: FormControl<string | null | undefined>,
	}
	export function CreateAwsElasticsearchDomainEncryptionAtRestOptionsFormGroup() {
		return new FormGroup<AwsElasticsearchDomainEncryptionAtRestOptionsFormProperties>({
			Enabled: new FormControl<boolean | null | undefined>(undefined),
			KmsKeyId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** configures the CloudWatch Logs to publish for the Elasticsearch domain. */
	export interface AwsElasticsearchDomainLogPublishingOptions {
		IndexSlowLogs?: AwsElasticsearchDomainLogPublishingOptionsLogConfig;
		SearchSlowLogs?: AwsElasticsearchDomainLogPublishingOptionsLogConfig;

		/** The log configuration. */
		AuditLogs?: AwsElasticsearchDomainLogPublishingOptionsLogConfig;
	}

	/** configures the CloudWatch Logs to publish for the Elasticsearch domain. */
	export interface AwsElasticsearchDomainLogPublishingOptionsFormProperties {
	}
	export function CreateAwsElasticsearchDomainLogPublishingOptionsFormGroup() {
		return new FormGroup<AwsElasticsearchDomainLogPublishingOptionsFormProperties>({
		});

	}


	/** The log configuration. */
	export interface AwsElasticsearchDomainLogPublishingOptionsLogConfig {
		CloudWatchLogsLogGroupArn?: string;
		Enabled?: boolean | null;
	}

	/** The log configuration. */
	export interface AwsElasticsearchDomainLogPublishingOptionsLogConfigFormProperties {
		CloudWatchLogsLogGroupArn: FormControl<string | null | undefined>,
		Enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateAwsElasticsearchDomainLogPublishingOptionsLogConfigFormGroup() {
		return new FormGroup<AwsElasticsearchDomainLogPublishingOptionsLogConfigFormProperties>({
			CloudWatchLogsLogGroupArn: new FormControl<string | null | undefined>(undefined),
			Enabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Details about the configuration for node-to-node encryption. */
	export interface AwsElasticsearchDomainNodeToNodeEncryptionOptions {
		Enabled?: boolean | null;
	}

	/** Details about the configuration for node-to-node encryption. */
	export interface AwsElasticsearchDomainNodeToNodeEncryptionOptionsFormProperties {
		Enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateAwsElasticsearchDomainNodeToNodeEncryptionOptionsFormGroup() {
		return new FormGroup<AwsElasticsearchDomainNodeToNodeEncryptionOptionsFormProperties>({
			Enabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Information about the state of the domain relative to the latest service software. */
	export interface AwsElasticsearchDomainServiceSoftwareOptions {
		AutomatedUpdateDate?: string;
		Cancellable?: boolean | null;
		CurrentVersion?: string;
		Description?: string;
		NewVersion?: string;
		UpdateAvailable?: boolean | null;
		UpdateStatus?: string;
	}

	/** Information about the state of the domain relative to the latest service software. */
	export interface AwsElasticsearchDomainServiceSoftwareOptionsFormProperties {
		AutomatedUpdateDate: FormControl<string | null | undefined>,
		Cancellable: FormControl<boolean | null | undefined>,
		CurrentVersion: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		NewVersion: FormControl<string | null | undefined>,
		UpdateAvailable: FormControl<boolean | null | undefined>,
		UpdateStatus: FormControl<string | null | undefined>,
	}
	export function CreateAwsElasticsearchDomainServiceSoftwareOptionsFormGroup() {
		return new FormGroup<AwsElasticsearchDomainServiceSoftwareOptionsFormProperties>({
			AutomatedUpdateDate: new FormControl<string | null | undefined>(undefined),
			Cancellable: new FormControl<boolean | null | undefined>(undefined),
			CurrentVersion: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			NewVersion: new FormControl<string | null | undefined>(undefined),
			UpdateAvailable: new FormControl<boolean | null | undefined>(undefined),
			UpdateStatus: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information that OpenSearch derives based on <code>VPCOptions</code> for the domain. */
	export interface AwsElasticsearchDomainVPCOptions {
		AvailabilityZones?: Array<string>;
		SecurityGroupIds?: Array<string>;
		SubnetIds?: Array<string>;
		VPCId?: string;
	}

	/** Information that OpenSearch derives based on <code>VPCOptions</code> for the domain. */
	export interface AwsElasticsearchDomainVPCOptionsFormProperties {
		VPCId: FormControl<string | null | undefined>,
	}
	export function CreateAwsElasticsearchDomainVPCOptionsFormGroup() {
		return new FormGroup<AwsElasticsearchDomainVPCOptionsFormProperties>({
			VPCId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The details of an Amazon S3 bucket. */
	export interface AwsS3BucketDetails {
		OwnerId?: string;
		OwnerName?: string;
		OwnerAccountId?: string;
		CreatedAt?: string;
		ServerSideEncryptionConfiguration?: AwsS3BucketServerSideEncryptionConfiguration;
		BucketLifecycleConfiguration?: AwsS3BucketBucketLifecycleConfigurationDetails;
		PublicAccessBlockConfiguration?: AwsS3AccountPublicAccessBlockDetails;
		AccessControlList?: string;
		BucketLoggingConfiguration?: AwsS3BucketLoggingConfiguration;
		BucketWebsiteConfiguration?: AwsS3BucketWebsiteConfiguration;
		BucketNotificationConfiguration?: AwsS3BucketNotificationConfiguration;
		BucketVersioningConfiguration?: AwsS3BucketBucketVersioningConfiguration;
		ObjectLockConfiguration?: AwsS3BucketObjectLockConfiguration;
	}

	/** The details of an Amazon S3 bucket. */
	export interface AwsS3BucketDetailsFormProperties {
		OwnerId: FormControl<string | null | undefined>,
		OwnerName: FormControl<string | null | undefined>,
		OwnerAccountId: FormControl<string | null | undefined>,
		CreatedAt: FormControl<string | null | undefined>,
		AccessControlList: FormControl<string | null | undefined>,
	}
	export function CreateAwsS3BucketDetailsFormGroup() {
		return new FormGroup<AwsS3BucketDetailsFormProperties>({
			OwnerId: new FormControl<string | null | undefined>(undefined),
			OwnerName: new FormControl<string | null | undefined>(undefined),
			OwnerAccountId: new FormControl<string | null | undefined>(undefined),
			CreatedAt: new FormControl<string | null | undefined>(undefined),
			AccessControlList: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The encryption configuration for the S3 bucket. */
	export interface AwsS3BucketServerSideEncryptionConfiguration {
		Rules?: Array<AwsS3BucketServerSideEncryptionRule>;
	}

	/** The encryption configuration for the S3 bucket. */
	export interface AwsS3BucketServerSideEncryptionConfigurationFormProperties {
	}
	export function CreateAwsS3BucketServerSideEncryptionConfigurationFormGroup() {
		return new FormGroup<AwsS3BucketServerSideEncryptionConfigurationFormProperties>({
		});

	}


	/** An encryption rule to apply to the S3 bucket. */
	export interface AwsS3BucketServerSideEncryptionRule {
		ApplyServerSideEncryptionByDefault?: AwsS3BucketServerSideEncryptionByDefault;
	}

	/** An encryption rule to apply to the S3 bucket. */
	export interface AwsS3BucketServerSideEncryptionRuleFormProperties {
	}
	export function CreateAwsS3BucketServerSideEncryptionRuleFormGroup() {
		return new FormGroup<AwsS3BucketServerSideEncryptionRuleFormProperties>({
		});

	}


	/** Specifies the default server-side encryption to apply to new objects in the bucket. */
	export interface AwsS3BucketServerSideEncryptionByDefault {
		SSEAlgorithm?: string;
		KMSMasterKeyID?: string;
	}

	/** Specifies the default server-side encryption to apply to new objects in the bucket. */
	export interface AwsS3BucketServerSideEncryptionByDefaultFormProperties {
		SSEAlgorithm: FormControl<string | null | undefined>,
		KMSMasterKeyID: FormControl<string | null | undefined>,
	}
	export function CreateAwsS3BucketServerSideEncryptionByDefaultFormGroup() {
		return new FormGroup<AwsS3BucketServerSideEncryptionByDefaultFormProperties>({
			SSEAlgorithm: new FormControl<string | null | undefined>(undefined),
			KMSMasterKeyID: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The lifecycle configuration for the objects in the S3 bucket. */
	export interface AwsS3BucketBucketLifecycleConfigurationDetails {
		Rules?: Array<AwsS3BucketBucketLifecycleConfigurationRulesDetails>;
	}

	/** The lifecycle configuration for the objects in the S3 bucket. */
	export interface AwsS3BucketBucketLifecycleConfigurationDetailsFormProperties {
	}
	export function CreateAwsS3BucketBucketLifecycleConfigurationDetailsFormGroup() {
		return new FormGroup<AwsS3BucketBucketLifecycleConfigurationDetailsFormProperties>({
		});

	}


	/** Configuration for a lifecycle rule. */
	export interface AwsS3BucketBucketLifecycleConfigurationRulesDetails {
		AbortIncompleteMultipartUpload?: AwsS3BucketBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadDetails;
		ExpirationDate?: string;
		ExpirationInDays?: number | null;
		ExpiredObjectDeleteMarker?: boolean | null;
		Filter?: AwsS3BucketBucketLifecycleConfigurationRulesFilterDetails;
		ID?: string;
		NoncurrentVersionExpirationInDays?: number | null;
		NoncurrentVersionTransitions?: Array<AwsS3BucketBucketLifecycleConfigurationRulesNoncurrentVersionTransitionsDetails>;
		Prefix?: string;
		Status?: string;
		Transitions?: Array<AwsS3BucketBucketLifecycleConfigurationRulesTransitionsDetails>;
	}

	/** Configuration for a lifecycle rule. */
	export interface AwsS3BucketBucketLifecycleConfigurationRulesDetailsFormProperties {
		ExpirationDate: FormControl<string | null | undefined>,
		ExpirationInDays: FormControl<number | null | undefined>,
		ExpiredObjectDeleteMarker: FormControl<boolean | null | undefined>,
		ID: FormControl<string | null | undefined>,
		NoncurrentVersionExpirationInDays: FormControl<number | null | undefined>,
		Prefix: FormControl<string | null | undefined>,
		Status: FormControl<string | null | undefined>,
	}
	export function CreateAwsS3BucketBucketLifecycleConfigurationRulesDetailsFormGroup() {
		return new FormGroup<AwsS3BucketBucketLifecycleConfigurationRulesDetailsFormProperties>({
			ExpirationDate: new FormControl<string | null | undefined>(undefined),
			ExpirationInDays: new FormControl<number | null | undefined>(undefined),
			ExpiredObjectDeleteMarker: new FormControl<boolean | null | undefined>(undefined),
			ID: new FormControl<string | null | undefined>(undefined),
			NoncurrentVersionExpirationInDays: new FormControl<number | null | undefined>(undefined),
			Prefix: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about what Amazon S3 does when a multipart upload is incomplete. */
	export interface AwsS3BucketBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadDetails {
		DaysAfterInitiation?: number | null;
	}

	/** Information about what Amazon S3 does when a multipart upload is incomplete. */
	export interface AwsS3BucketBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadDetailsFormProperties {
		DaysAfterInitiation: FormControl<number | null | undefined>,
	}
	export function CreateAwsS3BucketBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadDetailsFormGroup() {
		return new FormGroup<AwsS3BucketBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadDetailsFormProperties>({
			DaysAfterInitiation: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Identifies the objects that a rule applies to. */
	export interface AwsS3BucketBucketLifecycleConfigurationRulesFilterDetails {
		Predicate?: AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateDetails;
	}

	/** Identifies the objects that a rule applies to. */
	export interface AwsS3BucketBucketLifecycleConfigurationRulesFilterDetailsFormProperties {
	}
	export function CreateAwsS3BucketBucketLifecycleConfigurationRulesFilterDetailsFormGroup() {
		return new FormGroup<AwsS3BucketBucketLifecycleConfigurationRulesFilterDetailsFormProperties>({
		});

	}


	/** The configuration for the filter. */
	export interface AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateDetails {
		Operands?: Array<AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsDetails>;
		Prefix?: string;
		Tag?: AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateTagDetails;
		Type?: string;
	}

	/** The configuration for the filter. */
	export interface AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateDetailsFormProperties {
		Prefix: FormControl<string | null | undefined>,
		Type: FormControl<string | null | undefined>,
	}
	export function CreateAwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateDetailsFormGroup() {
		return new FormGroup<AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateDetailsFormProperties>({
			Prefix: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A value to use for the filter. */
	export interface AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsDetails {
		Prefix?: string;
		Tag?: AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsTagDetails;
		Type?: string;
	}

	/** A value to use for the filter. */
	export interface AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsDetailsFormProperties {
		Prefix: FormControl<string | null | undefined>,
		Type: FormControl<string | null | undefined>,
	}
	export function CreateAwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsDetailsFormGroup() {
		return new FormGroup<AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsDetailsFormProperties>({
			Prefix: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A tag that is assigned to matching objects. */
	export interface AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsTagDetails {
		Key?: string;
		Value?: string;
	}

	/** A tag that is assigned to matching objects. */
	export interface AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsTagDetailsFormProperties {
		Key: FormControl<string | null | undefined>,
		Value: FormControl<string | null | undefined>,
	}
	export function CreateAwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsTagDetailsFormGroup() {
		return new FormGroup<AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsTagDetailsFormProperties>({
			Key: new FormControl<string | null | undefined>(undefined),
			Value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A tag filter. */
	export interface AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateTagDetails {
		Key?: string;
		Value?: string;
	}

	/** A tag filter. */
	export interface AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateTagDetailsFormProperties {
		Key: FormControl<string | null | undefined>,
		Value: FormControl<string | null | undefined>,
	}
	export function CreateAwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateTagDetailsFormGroup() {
		return new FormGroup<AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateTagDetailsFormProperties>({
			Key: new FormControl<string | null | undefined>(undefined),
			Value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A transition rule that describes when noncurrent objects transition to a specified storage class. */
	export interface AwsS3BucketBucketLifecycleConfigurationRulesNoncurrentVersionTransitionsDetails {
		Days?: number | null;
		StorageClass?: string;
	}

	/** A transition rule that describes when noncurrent objects transition to a specified storage class. */
	export interface AwsS3BucketBucketLifecycleConfigurationRulesNoncurrentVersionTransitionsDetailsFormProperties {
		Days: FormControl<number | null | undefined>,
		StorageClass: FormControl<string | null | undefined>,
	}
	export function CreateAwsS3BucketBucketLifecycleConfigurationRulesNoncurrentVersionTransitionsDetailsFormGroup() {
		return new FormGroup<AwsS3BucketBucketLifecycleConfigurationRulesNoncurrentVersionTransitionsDetailsFormProperties>({
			Days: new FormControl<number | null | undefined>(undefined),
			StorageClass: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A rule for when objects transition to specific storage classes. */
	export interface AwsS3BucketBucketLifecycleConfigurationRulesTransitionsDetails {
		Date?: string;
		Days?: number | null;
		StorageClass?: string;
	}

	/** A rule for when objects transition to specific storage classes. */
	export interface AwsS3BucketBucketLifecycleConfigurationRulesTransitionsDetailsFormProperties {
		Date: FormControl<string | null | undefined>,
		Days: FormControl<number | null | undefined>,
		StorageClass: FormControl<string | null | undefined>,
	}
	export function CreateAwsS3BucketBucketLifecycleConfigurationRulesTransitionsDetailsFormGroup() {
		return new FormGroup<AwsS3BucketBucketLifecycleConfigurationRulesTransitionsDetailsFormProperties>({
			Date: new FormControl<string | null | undefined>(undefined),
			Days: new FormControl<number | null | undefined>(undefined),
			StorageClass: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** provides information about the Amazon S3 Public Access Block configuration for accounts. */
	export interface AwsS3AccountPublicAccessBlockDetails {
		BlockPublicAcls?: boolean | null;
		BlockPublicPolicy?: boolean | null;
		IgnorePublicAcls?: boolean | null;
		RestrictPublicBuckets?: boolean | null;
	}

	/** provides information about the Amazon S3 Public Access Block configuration for accounts. */
	export interface AwsS3AccountPublicAccessBlockDetailsFormProperties {
		BlockPublicAcls: FormControl<boolean | null | undefined>,
		BlockPublicPolicy: FormControl<boolean | null | undefined>,
		IgnorePublicAcls: FormControl<boolean | null | undefined>,
		RestrictPublicBuckets: FormControl<boolean | null | undefined>,
	}
	export function CreateAwsS3AccountPublicAccessBlockDetailsFormGroup() {
		return new FormGroup<AwsS3AccountPublicAccessBlockDetailsFormProperties>({
			BlockPublicAcls: new FormControl<boolean | null | undefined>(undefined),
			BlockPublicPolicy: new FormControl<boolean | null | undefined>(undefined),
			IgnorePublicAcls: new FormControl<boolean | null | undefined>(undefined),
			RestrictPublicBuckets: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Information about logging for the S3 bucket */
	export interface AwsS3BucketLoggingConfiguration {
		DestinationBucketName?: string;
		LogFilePrefix?: string;
	}

	/** Information about logging for the S3 bucket */
	export interface AwsS3BucketLoggingConfigurationFormProperties {
		DestinationBucketName: FormControl<string | null | undefined>,
		LogFilePrefix: FormControl<string | null | undefined>,
	}
	export function CreateAwsS3BucketLoggingConfigurationFormGroup() {
		return new FormGroup<AwsS3BucketLoggingConfigurationFormProperties>({
			DestinationBucketName: new FormControl<string | null | undefined>(undefined),
			LogFilePrefix: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Website parameters for the S3 bucket. */
	export interface AwsS3BucketWebsiteConfiguration {
		ErrorDocument?: string;
		IndexDocumentSuffix?: string;
		RedirectAllRequestsTo?: AwsS3BucketWebsiteConfigurationRedirectTo;
		RoutingRules?: Array<AwsS3BucketWebsiteConfigurationRoutingRule>;
	}

	/** Website parameters for the S3 bucket. */
	export interface AwsS3BucketWebsiteConfigurationFormProperties {
		ErrorDocument: FormControl<string | null | undefined>,
		IndexDocumentSuffix: FormControl<string | null | undefined>,
	}
	export function CreateAwsS3BucketWebsiteConfigurationFormGroup() {
		return new FormGroup<AwsS3BucketWebsiteConfigurationFormProperties>({
			ErrorDocument: new FormControl<string | null | undefined>(undefined),
			IndexDocumentSuffix: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The redirect behavior for requests to the website. */
	export interface AwsS3BucketWebsiteConfigurationRedirectTo {
		Hostname?: string;
		Protocol?: string;
	}

	/** The redirect behavior for requests to the website. */
	export interface AwsS3BucketWebsiteConfigurationRedirectToFormProperties {
		Hostname: FormControl<string | null | undefined>,
		Protocol: FormControl<string | null | undefined>,
	}
	export function CreateAwsS3BucketWebsiteConfigurationRedirectToFormGroup() {
		return new FormGroup<AwsS3BucketWebsiteConfigurationRedirectToFormProperties>({
			Hostname: new FormControl<string | null | undefined>(undefined),
			Protocol: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A rule for redirecting requests to the website. */
	export interface AwsS3BucketWebsiteConfigurationRoutingRule {
		Condition?: AwsS3BucketWebsiteConfigurationRoutingRuleCondition;
		Redirect?: AwsS3BucketWebsiteConfigurationRoutingRuleRedirect;
	}

	/** A rule for redirecting requests to the website. */
	export interface AwsS3BucketWebsiteConfigurationRoutingRuleFormProperties {
	}
	export function CreateAwsS3BucketWebsiteConfigurationRoutingRuleFormGroup() {
		return new FormGroup<AwsS3BucketWebsiteConfigurationRoutingRuleFormProperties>({
		});

	}


	/** The condition that must be met in order to apply the routing rule. */
	export interface AwsS3BucketWebsiteConfigurationRoutingRuleCondition {
		HttpErrorCodeReturnedEquals?: string;
		KeyPrefixEquals?: string;
	}

	/** The condition that must be met in order to apply the routing rule. */
	export interface AwsS3BucketWebsiteConfigurationRoutingRuleConditionFormProperties {
		HttpErrorCodeReturnedEquals: FormControl<string | null | undefined>,
		KeyPrefixEquals: FormControl<string | null | undefined>,
	}
	export function CreateAwsS3BucketWebsiteConfigurationRoutingRuleConditionFormGroup() {
		return new FormGroup<AwsS3BucketWebsiteConfigurationRoutingRuleConditionFormProperties>({
			HttpErrorCodeReturnedEquals: new FormControl<string | null | undefined>(undefined),
			KeyPrefixEquals: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The rules to redirect the request if the condition in <code>Condition</code> is met. */
	export interface AwsS3BucketWebsiteConfigurationRoutingRuleRedirect {
		Hostname?: string;
		HttpRedirectCode?: string;
		Protocol?: string;
		ReplaceKeyPrefixWith?: string;
		ReplaceKeyWith?: string;
	}

	/** The rules to redirect the request if the condition in <code>Condition</code> is met. */
	export interface AwsS3BucketWebsiteConfigurationRoutingRuleRedirectFormProperties {
		Hostname: FormControl<string | null | undefined>,
		HttpRedirectCode: FormControl<string | null | undefined>,
		Protocol: FormControl<string | null | undefined>,
		ReplaceKeyPrefixWith: FormControl<string | null | undefined>,
		ReplaceKeyWith: FormControl<string | null | undefined>,
	}
	export function CreateAwsS3BucketWebsiteConfigurationRoutingRuleRedirectFormGroup() {
		return new FormGroup<AwsS3BucketWebsiteConfigurationRoutingRuleRedirectFormProperties>({
			Hostname: new FormControl<string | null | undefined>(undefined),
			HttpRedirectCode: new FormControl<string | null | undefined>(undefined),
			Protocol: new FormControl<string | null | undefined>(undefined),
			ReplaceKeyPrefixWith: new FormControl<string | null | undefined>(undefined),
			ReplaceKeyWith: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The notification configuration for the S3 bucket. */
	export interface AwsS3BucketNotificationConfiguration {
		Configurations?: Array<AwsS3BucketNotificationConfigurationDetail>;
	}

	/** The notification configuration for the S3 bucket. */
	export interface AwsS3BucketNotificationConfigurationFormProperties {
	}
	export function CreateAwsS3BucketNotificationConfigurationFormGroup() {
		return new FormGroup<AwsS3BucketNotificationConfigurationFormProperties>({
		});

	}


	/** Details for an S3 bucket notification configuration. */
	export interface AwsS3BucketNotificationConfigurationDetail {
		Events?: Array<string>;
		Filter?: AwsS3BucketNotificationConfigurationFilter;
		Destination?: string;
		Type?: string;
	}

	/** Details for an S3 bucket notification configuration. */
	export interface AwsS3BucketNotificationConfigurationDetailFormProperties {
		Destination: FormControl<string | null | undefined>,
		Type: FormControl<string | null | undefined>,
	}
	export function CreateAwsS3BucketNotificationConfigurationDetailFormGroup() {
		return new FormGroup<AwsS3BucketNotificationConfigurationDetailFormProperties>({
			Destination: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Filtering information for the notifications. The filtering is based on Amazon S3 key names. */
	export interface AwsS3BucketNotificationConfigurationFilter {
		S3KeyFilter?: AwsS3BucketNotificationConfigurationS3KeyFilter;
	}

	/** Filtering information for the notifications. The filtering is based on Amazon S3 key names. */
	export interface AwsS3BucketNotificationConfigurationFilterFormProperties {
	}
	export function CreateAwsS3BucketNotificationConfigurationFilterFormGroup() {
		return new FormGroup<AwsS3BucketNotificationConfigurationFilterFormProperties>({
		});

	}


	/** Details for an Amazon S3 filter. */
	export interface AwsS3BucketNotificationConfigurationS3KeyFilter {
		FilterRules?: Array<AwsS3BucketNotificationConfigurationS3KeyFilterRule>;
	}

	/** Details for an Amazon S3 filter. */
	export interface AwsS3BucketNotificationConfigurationS3KeyFilterFormProperties {
	}
	export function CreateAwsS3BucketNotificationConfigurationS3KeyFilterFormGroup() {
		return new FormGroup<AwsS3BucketNotificationConfigurationS3KeyFilterFormProperties>({
		});

	}


	/** Details for a filter rule. */
	export interface AwsS3BucketNotificationConfigurationS3KeyFilterRule {
		Name?: AwsS3BucketNotificationConfigurationS3KeyFilterRuleName;
		Value?: string;
	}

	/** Details for a filter rule. */
	export interface AwsS3BucketNotificationConfigurationS3KeyFilterRuleFormProperties {
		Name: FormControl<AwsS3BucketNotificationConfigurationS3KeyFilterRuleName | null | undefined>,
		Value: FormControl<string | null | undefined>,
	}
	export function CreateAwsS3BucketNotificationConfigurationS3KeyFilterRuleFormGroup() {
		return new FormGroup<AwsS3BucketNotificationConfigurationS3KeyFilterRuleFormProperties>({
			Name: new FormControl<AwsS3BucketNotificationConfigurationS3KeyFilterRuleName | null | undefined>(undefined),
			Value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AwsS3BucketNotificationConfigurationS3KeyFilterRuleName { Prefix = 'Prefix', Suffix = 'Suffix' }


	/** Describes the versioning state of an S3 bucket. */
	export interface AwsS3BucketBucketVersioningConfiguration {
		IsMfaDeleteEnabled?: boolean | null;
		Status?: string;
	}

	/** Describes the versioning state of an S3 bucket. */
	export interface AwsS3BucketBucketVersioningConfigurationFormProperties {
		IsMfaDeleteEnabled: FormControl<boolean | null | undefined>,
		Status: FormControl<string | null | undefined>,
	}
	export function CreateAwsS3BucketBucketVersioningConfigurationFormGroup() {
		return new FormGroup<AwsS3BucketBucketVersioningConfigurationFormProperties>({
			IsMfaDeleteEnabled: new FormControl<boolean | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  The container element for S3 Object Lock configuration parameters. In Amazon S3, Object Lock can help prevent objects from being deleted or overwritten for a fixed amount of time or indefinitely.  */
	export interface AwsS3BucketObjectLockConfiguration {
		ObjectLockEnabled?: string;
		Rule?: AwsS3BucketObjectLockConfigurationRuleDetails;
	}

	/**  The container element for S3 Object Lock configuration parameters. In Amazon S3, Object Lock can help prevent objects from being deleted or overwritten for a fixed amount of time or indefinitely.  */
	export interface AwsS3BucketObjectLockConfigurationFormProperties {
		ObjectLockEnabled: FormControl<string | null | undefined>,
	}
	export function CreateAwsS3BucketObjectLockConfigurationFormGroup() {
		return new FormGroup<AwsS3BucketObjectLockConfigurationFormProperties>({
			ObjectLockEnabled: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  Specifies the S3 Object Lock rule for the specified object. In Amazon S3, Object Lock can help prevent objects from being deleted or overwritten for a fixed amount of time or indefinitely.  */
	export interface AwsS3BucketObjectLockConfigurationRuleDetails {
		DefaultRetention?: AwsS3BucketObjectLockConfigurationRuleDefaultRetentionDetails;
	}

	/**  Specifies the S3 Object Lock rule for the specified object. In Amazon S3, Object Lock can help prevent objects from being deleted or overwritten for a fixed amount of time or indefinitely.  */
	export interface AwsS3BucketObjectLockConfigurationRuleDetailsFormProperties {
	}
	export function CreateAwsS3BucketObjectLockConfigurationRuleDetailsFormGroup() {
		return new FormGroup<AwsS3BucketObjectLockConfigurationRuleDetailsFormProperties>({
		});

	}


	/**  The default S3 Object Lock retention mode and period that you want to apply to new objects placed in the specified Amazon S3 bucket.  */
	export interface AwsS3BucketObjectLockConfigurationRuleDefaultRetentionDetails {
		Days?: number | null;
		Mode?: string;
		Years?: number | null;
	}

	/**  The default S3 Object Lock retention mode and period that you want to apply to new objects placed in the specified Amazon S3 bucket.  */
	export interface AwsS3BucketObjectLockConfigurationRuleDefaultRetentionDetailsFormProperties {
		Days: FormControl<number | null | undefined>,
		Mode: FormControl<string | null | undefined>,
		Years: FormControl<number | null | undefined>,
	}
	export function CreateAwsS3BucketObjectLockConfigurationRuleDefaultRetentionDetailsFormGroup() {
		return new FormGroup<AwsS3BucketObjectLockConfigurationRuleDefaultRetentionDetailsFormProperties>({
			Days: new FormControl<number | null | undefined>(undefined),
			Mode: new FormControl<string | null | undefined>(undefined),
			Years: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Details about an Amazon S3 object. */
	export interface AwsS3ObjectDetails {
		LastModified?: string;
		ETag?: string;
		VersionId?: string;
		ContentType?: string;
		ServerSideEncryption?: string;
		SSEKMSKeyId?: string;
	}

	/** Details about an Amazon S3 object. */
	export interface AwsS3ObjectDetailsFormProperties {
		LastModified: FormControl<string | null | undefined>,
		ETag: FormControl<string | null | undefined>,
		VersionId: FormControl<string | null | undefined>,
		ContentType: FormControl<string | null | undefined>,
		ServerSideEncryption: FormControl<string | null | undefined>,
		SSEKMSKeyId: FormControl<string | null | undefined>,
	}
	export function CreateAwsS3ObjectDetailsFormGroup() {
		return new FormGroup<AwsS3ObjectDetailsFormProperties>({
			LastModified: new FormControl<string | null | undefined>(undefined),
			ETag: new FormControl<string | null | undefined>(undefined),
			VersionId: new FormControl<string | null | undefined>(undefined),
			ContentType: new FormControl<string | null | undefined>(undefined),
			ServerSideEncryption: new FormControl<string | null | undefined>(undefined),
			SSEKMSKeyId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details about an Secrets Manager secret. */
	export interface AwsSecretsManagerSecretDetails {
		RotationRules?: AwsSecretsManagerSecretRotationRules;
		RotationOccurredWithinFrequency?: boolean | null;
		KmsKeyId?: string;
		RotationEnabled?: boolean | null;
		RotationLambdaArn?: string;
		Deleted?: boolean | null;
		Name?: string;
		Description?: string;
	}

	/** Details about an Secrets Manager secret. */
	export interface AwsSecretsManagerSecretDetailsFormProperties {
		RotationOccurredWithinFrequency: FormControl<boolean | null | undefined>,
		KmsKeyId: FormControl<string | null | undefined>,
		RotationEnabled: FormControl<boolean | null | undefined>,
		RotationLambdaArn: FormControl<string | null | undefined>,
		Deleted: FormControl<boolean | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
	}
	export function CreateAwsSecretsManagerSecretDetailsFormGroup() {
		return new FormGroup<AwsSecretsManagerSecretDetailsFormProperties>({
			RotationOccurredWithinFrequency: new FormControl<boolean | null | undefined>(undefined),
			KmsKeyId: new FormControl<string | null | undefined>(undefined),
			RotationEnabled: new FormControl<boolean | null | undefined>(undefined),
			RotationLambdaArn: new FormControl<string | null | undefined>(undefined),
			Deleted: new FormControl<boolean | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Defines the rotation schedule for the secret. */
	export interface AwsSecretsManagerSecretRotationRules {
		AutomaticallyAfterDays?: number | null;
	}

	/** Defines the rotation schedule for the secret. */
	export interface AwsSecretsManagerSecretRotationRulesFormProperties {
		AutomaticallyAfterDays: FormControl<number | null | undefined>,
	}
	export function CreateAwsSecretsManagerSecretRotationRulesFormGroup() {
		return new FormGroup<AwsSecretsManagerSecretRotationRulesFormProperties>({
			AutomaticallyAfterDays: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** IAM access key details related to a finding. */
	export interface AwsIamAccessKeyDetails {
		UserName?: string;
		Status?: AwsIamAccessKeyStatus;
		CreatedAt?: string;
		PrincipalId?: string;
		PrincipalType?: string;
		PrincipalName?: string;
		AccountId?: string;
		AccessKeyId?: string;
		SessionContext?: AwsIamAccessKeySessionContext;
	}

	/** IAM access key details related to a finding. */
	export interface AwsIamAccessKeyDetailsFormProperties {
		UserName: FormControl<string | null | undefined>,
		Status: FormControl<AwsIamAccessKeyStatus | null | undefined>,
		CreatedAt: FormControl<string | null | undefined>,
		PrincipalId: FormControl<string | null | undefined>,
		PrincipalType: FormControl<string | null | undefined>,
		PrincipalName: FormControl<string | null | undefined>,
		AccountId: FormControl<string | null | undefined>,
		AccessKeyId: FormControl<string | null | undefined>,
	}
	export function CreateAwsIamAccessKeyDetailsFormGroup() {
		return new FormGroup<AwsIamAccessKeyDetailsFormProperties>({
			UserName: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<AwsIamAccessKeyStatus | null | undefined>(undefined),
			CreatedAt: new FormControl<string | null | undefined>(undefined),
			PrincipalId: new FormControl<string | null | undefined>(undefined),
			PrincipalType: new FormControl<string | null | undefined>(undefined),
			PrincipalName: new FormControl<string | null | undefined>(undefined),
			AccountId: new FormControl<string | null | undefined>(undefined),
			AccessKeyId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AwsIamAccessKeyStatus { Active = 'Active', Inactive = 'Inactive' }


	/** Provides information about the session that the key was used for. */
	export interface AwsIamAccessKeySessionContext {
		Attributes?: AwsIamAccessKeySessionContextAttributes;
		SessionIssuer?: AwsIamAccessKeySessionContextSessionIssuer;
	}

	/** Provides information about the session that the key was used for. */
	export interface AwsIamAccessKeySessionContextFormProperties {
	}
	export function CreateAwsIamAccessKeySessionContextFormGroup() {
		return new FormGroup<AwsIamAccessKeySessionContextFormProperties>({
		});

	}


	/** Attributes of the session that the key was used for. */
	export interface AwsIamAccessKeySessionContextAttributes {
		MfaAuthenticated?: boolean | null;
		CreationDate?: string;
	}

	/** Attributes of the session that the key was used for. */
	export interface AwsIamAccessKeySessionContextAttributesFormProperties {
		MfaAuthenticated: FormControl<boolean | null | undefined>,
		CreationDate: FormControl<string | null | undefined>,
	}
	export function CreateAwsIamAccessKeySessionContextAttributesFormGroup() {
		return new FormGroup<AwsIamAccessKeySessionContextAttributesFormProperties>({
			MfaAuthenticated: new FormControl<boolean | null | undefined>(undefined),
			CreationDate: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about the entity that created the session. */
	export interface AwsIamAccessKeySessionContextSessionIssuer {
		Type?: string;
		PrincipalId?: string;
		Arn?: string;
		AccountId?: string;
		UserName?: string;
	}

	/** Information about the entity that created the session. */
	export interface AwsIamAccessKeySessionContextSessionIssuerFormProperties {
		Type: FormControl<string | null | undefined>,
		PrincipalId: FormControl<string | null | undefined>,
		Arn: FormControl<string | null | undefined>,
		AccountId: FormControl<string | null | undefined>,
		UserName: FormControl<string | null | undefined>,
	}
	export function CreateAwsIamAccessKeySessionContextSessionIssuerFormGroup() {
		return new FormGroup<AwsIamAccessKeySessionContextSessionIssuerFormProperties>({
			Type: new FormControl<string | null | undefined>(undefined),
			PrincipalId: new FormControl<string | null | undefined>(undefined),
			Arn: new FormControl<string | null | undefined>(undefined),
			AccountId: new FormControl<string | null | undefined>(undefined),
			UserName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about an IAM user. */
	export interface AwsIamUserDetails {
		AttachedManagedPolicies?: Array<AwsIamAttachedManagedPolicy>;
		CreateDate?: string;
		GroupList?: Array<string>;
		Path?: string;
		PermissionsBoundary?: AwsIamPermissionsBoundary;
		UserId?: string;
		UserName?: string;
		UserPolicyList?: Array<AwsIamUserPolicy>;
	}

	/** Information about an IAM user. */
	export interface AwsIamUserDetailsFormProperties {
		CreateDate: FormControl<string | null | undefined>,
		Path: FormControl<string | null | undefined>,
		UserId: FormControl<string | null | undefined>,
		UserName: FormControl<string | null | undefined>,
	}
	export function CreateAwsIamUserDetailsFormGroup() {
		return new FormGroup<AwsIamUserDetailsFormProperties>({
			CreateDate: new FormControl<string | null | undefined>(undefined),
			Path: new FormControl<string | null | undefined>(undefined),
			UserId: new FormControl<string | null | undefined>(undefined),
			UserName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A managed policy that is attached to an IAM principal. */
	export interface AwsIamAttachedManagedPolicy {
		PolicyName?: string;
		PolicyArn?: string;
	}

	/** A managed policy that is attached to an IAM principal. */
	export interface AwsIamAttachedManagedPolicyFormProperties {
		PolicyName: FormControl<string | null | undefined>,
		PolicyArn: FormControl<string | null | undefined>,
	}
	export function CreateAwsIamAttachedManagedPolicyFormGroup() {
		return new FormGroup<AwsIamAttachedManagedPolicyFormProperties>({
			PolicyName: new FormControl<string | null | undefined>(undefined),
			PolicyArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about the policy used to set the permissions boundary for an IAM principal. */
	export interface AwsIamPermissionsBoundary {
		PermissionsBoundaryArn?: string;
		PermissionsBoundaryType?: string;
	}

	/** Information about the policy used to set the permissions boundary for an IAM principal. */
	export interface AwsIamPermissionsBoundaryFormProperties {
		PermissionsBoundaryArn: FormControl<string | null | undefined>,
		PermissionsBoundaryType: FormControl<string | null | undefined>,
	}
	export function CreateAwsIamPermissionsBoundaryFormGroup() {
		return new FormGroup<AwsIamPermissionsBoundaryFormProperties>({
			PermissionsBoundaryArn: new FormControl<string | null | undefined>(undefined),
			PermissionsBoundaryType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about an inline policy that is embedded in the user. */
	export interface AwsIamUserPolicy {
		PolicyName?: string;
	}

	/** Information about an inline policy that is embedded in the user. */
	export interface AwsIamUserPolicyFormProperties {
		PolicyName: FormControl<string | null | undefined>,
	}
	export function CreateAwsIamUserPolicyFormGroup() {
		return new FormGroup<AwsIamUserPolicyFormProperties>({
			PolicyName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents an IAM permissions policy. */
	export interface AwsIamPolicyDetails {
		AttachmentCount?: number | null;
		CreateDate?: string;
		DefaultVersionId?: string;
		Description?: string;
		IsAttachable?: boolean | null;
		Path?: string;
		PermissionsBoundaryUsageCount?: number | null;
		PolicyId?: string;
		PolicyName?: string;
		PolicyVersionList?: Array<AwsIamPolicyVersion>;
		UpdateDate?: string;
	}

	/** Represents an IAM permissions policy. */
	export interface AwsIamPolicyDetailsFormProperties {
		AttachmentCount: FormControl<number | null | undefined>,
		CreateDate: FormControl<string | null | undefined>,
		DefaultVersionId: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		IsAttachable: FormControl<boolean | null | undefined>,
		Path: FormControl<string | null | undefined>,
		PermissionsBoundaryUsageCount: FormControl<number | null | undefined>,
		PolicyId: FormControl<string | null | undefined>,
		PolicyName: FormControl<string | null | undefined>,
		UpdateDate: FormControl<string | null | undefined>,
	}
	export function CreateAwsIamPolicyDetailsFormGroup() {
		return new FormGroup<AwsIamPolicyDetailsFormProperties>({
			AttachmentCount: new FormControl<number | null | undefined>(undefined),
			CreateDate: new FormControl<string | null | undefined>(undefined),
			DefaultVersionId: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			IsAttachable: new FormControl<boolean | null | undefined>(undefined),
			Path: new FormControl<string | null | undefined>(undefined),
			PermissionsBoundaryUsageCount: new FormControl<number | null | undefined>(undefined),
			PolicyId: new FormControl<string | null | undefined>(undefined),
			PolicyName: new FormControl<string | null | undefined>(undefined),
			UpdateDate: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A version of an IAM policy. */
	export interface AwsIamPolicyVersion {
		VersionId?: string;
		IsDefaultVersion?: boolean | null;
		CreateDate?: string;
	}

	/** A version of an IAM policy. */
	export interface AwsIamPolicyVersionFormProperties {
		VersionId: FormControl<string | null | undefined>,
		IsDefaultVersion: FormControl<boolean | null | undefined>,
		CreateDate: FormControl<string | null | undefined>,
	}
	export function CreateAwsIamPolicyVersionFormGroup() {
		return new FormGroup<AwsIamPolicyVersionFormProperties>({
			VersionId: new FormControl<string | null | undefined>(undefined),
			IsDefaultVersion: new FormControl<boolean | null | undefined>(undefined),
			CreateDate: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information about a version 2 stage for Amazon API Gateway. */
	export interface AwsApiGatewayV2StageDetails {
		ClientCertificateId?: string;
		CreatedDate?: string;
		Description?: string;
		DefaultRouteSettings?: AwsApiGatewayV2RouteSettings;
		DeploymentId?: string;
		LastUpdatedDate?: string;
		RouteSettings?: AwsApiGatewayV2RouteSettings;
		StageName?: string;
		StageVariables?: FieldMap;
		AccessLogSettings?: AwsApiGatewayAccessLogSettings;
		AutoDeploy?: boolean | null;
		LastDeploymentStatusMessage?: string;
		ApiGatewayManaged?: boolean | null;
	}

	/** Contains information about a version 2 stage for Amazon API Gateway. */
	export interface AwsApiGatewayV2StageDetailsFormProperties {
		ClientCertificateId: FormControl<string | null | undefined>,
		CreatedDate: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		DeploymentId: FormControl<string | null | undefined>,
		LastUpdatedDate: FormControl<string | null | undefined>,
		StageName: FormControl<string | null | undefined>,
		AutoDeploy: FormControl<boolean | null | undefined>,
		LastDeploymentStatusMessage: FormControl<string | null | undefined>,
		ApiGatewayManaged: FormControl<boolean | null | undefined>,
	}
	export function CreateAwsApiGatewayV2StageDetailsFormGroup() {
		return new FormGroup<AwsApiGatewayV2StageDetailsFormProperties>({
			ClientCertificateId: new FormControl<string | null | undefined>(undefined),
			CreatedDate: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			DeploymentId: new FormControl<string | null | undefined>(undefined),
			LastUpdatedDate: new FormControl<string | null | undefined>(undefined),
			StageName: new FormControl<string | null | undefined>(undefined),
			AutoDeploy: new FormControl<boolean | null | undefined>(undefined),
			LastDeploymentStatusMessage: new FormControl<string | null | undefined>(undefined),
			ApiGatewayManaged: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Contains route settings for a stage. */
	export interface AwsApiGatewayV2RouteSettings {
		DetailedMetricsEnabled?: boolean | null;
		LoggingLevel?: string;
		DataTraceEnabled?: boolean | null;
		ThrottlingBurstLimit?: number | null;
		ThrottlingRateLimit?: number | null;
	}

	/** Contains route settings for a stage. */
	export interface AwsApiGatewayV2RouteSettingsFormProperties {
		DetailedMetricsEnabled: FormControl<boolean | null | undefined>,
		LoggingLevel: FormControl<string | null | undefined>,
		DataTraceEnabled: FormControl<boolean | null | undefined>,
		ThrottlingBurstLimit: FormControl<number | null | undefined>,
		ThrottlingRateLimit: FormControl<number | null | undefined>,
	}
	export function CreateAwsApiGatewayV2RouteSettingsFormGroup() {
		return new FormGroup<AwsApiGatewayV2RouteSettingsFormProperties>({
			DetailedMetricsEnabled: new FormControl<boolean | null | undefined>(undefined),
			LoggingLevel: new FormControl<string | null | undefined>(undefined),
			DataTraceEnabled: new FormControl<boolean | null | undefined>(undefined),
			ThrottlingBurstLimit: new FormControl<number | null | undefined>(undefined),
			ThrottlingRateLimit: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Contains information about settings for logging access for the stage. */
	export interface AwsApiGatewayAccessLogSettings {
		Format?: string;
		DestinationArn?: string;
	}

	/** Contains information about settings for logging access for the stage. */
	export interface AwsApiGatewayAccessLogSettingsFormProperties {
		Format: FormControl<string | null | undefined>,
		DestinationArn: FormControl<string | null | undefined>,
	}
	export function CreateAwsApiGatewayAccessLogSettingsFormGroup() {
		return new FormGroup<AwsApiGatewayAccessLogSettingsFormProperties>({
			Format: new FormControl<string | null | undefined>(undefined),
			DestinationArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information about a version 2 API in Amazon API Gateway. */
	export interface AwsApiGatewayV2ApiDetails {
		ApiEndpoint?: string;
		ApiId?: string;
		ApiKeySelectionExpression?: string;
		CreatedDate?: string;
		Description?: string;
		Version?: string;
		Name?: string;
		ProtocolType?: string;
		RouteSelectionExpression?: string;
		CorsConfiguration?: AwsCorsConfiguration;
	}

	/** Contains information about a version 2 API in Amazon API Gateway. */
	export interface AwsApiGatewayV2ApiDetailsFormProperties {
		ApiEndpoint: FormControl<string | null | undefined>,
		ApiId: FormControl<string | null | undefined>,
		ApiKeySelectionExpression: FormControl<string | null | undefined>,
		CreatedDate: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		Version: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		ProtocolType: FormControl<string | null | undefined>,
		RouteSelectionExpression: FormControl<string | null | undefined>,
	}
	export function CreateAwsApiGatewayV2ApiDetailsFormGroup() {
		return new FormGroup<AwsApiGatewayV2ApiDetailsFormProperties>({
			ApiEndpoint: new FormControl<string | null | undefined>(undefined),
			ApiId: new FormControl<string | null | undefined>(undefined),
			ApiKeySelectionExpression: new FormControl<string | null | undefined>(undefined),
			CreatedDate: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			Version: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			ProtocolType: new FormControl<string | null | undefined>(undefined),
			RouteSelectionExpression: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains the cross-origin resource sharing (CORS) configuration for the API. CORS is only supported for HTTP APIs. */
	export interface AwsCorsConfiguration {
		AllowOrigins?: Array<string>;
		AllowCredentials?: boolean | null;
		ExposeHeaders?: Array<string>;
		MaxAge?: number | null;
		AllowMethods?: Array<string>;
		AllowHeaders?: Array<string>;
	}

	/** Contains the cross-origin resource sharing (CORS) configuration for the API. CORS is only supported for HTTP APIs. */
	export interface AwsCorsConfigurationFormProperties {
		AllowCredentials: FormControl<boolean | null | undefined>,
		MaxAge: FormControl<number | null | undefined>,
	}
	export function CreateAwsCorsConfigurationFormGroup() {
		return new FormGroup<AwsCorsConfigurationFormProperties>({
			AllowCredentials: new FormControl<boolean | null | undefined>(undefined),
			MaxAge: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Provides details about a DynamoDB table. */
	export interface AwsDynamoDbTableDetails {
		AttributeDefinitions?: Array<AwsDynamoDbTableAttributeDefinition>;
		BillingModeSummary?: AwsDynamoDbTableBillingModeSummary;
		CreationDateTime?: string;
		GlobalSecondaryIndexes?: Array<AwsDynamoDbTableGlobalSecondaryIndex>;
		GlobalTableVersion?: string;
		ItemCount?: number | null;
		KeySchema?: Array<AwsDynamoDbTableKeySchema>;
		LatestStreamArn?: string;
		LatestStreamLabel?: string;
		LocalSecondaryIndexes?: Array<AwsDynamoDbTableLocalSecondaryIndex>;
		ProvisionedThroughput?: AwsDynamoDbTableProvisionedThroughput;
		Replicas?: Array<AwsDynamoDbTableReplica>;
		RestoreSummary?: AwsDynamoDbTableRestoreSummary;
		SseDescription?: AwsDynamoDbTableSseDescription;
		StreamSpecification?: AwsDynamoDbTableStreamSpecification;
		TableId?: string;
		TableName?: string;
		TableSizeBytes?: number | null;
		TableStatus?: string;
	}

	/** Provides details about a DynamoDB table. */
	export interface AwsDynamoDbTableDetailsFormProperties {
		CreationDateTime: FormControl<string | null | undefined>,
		GlobalTableVersion: FormControl<string | null | undefined>,
		ItemCount: FormControl<number | null | undefined>,
		LatestStreamArn: FormControl<string | null | undefined>,
		LatestStreamLabel: FormControl<string | null | undefined>,
		TableId: FormControl<string | null | undefined>,
		TableName: FormControl<string | null | undefined>,
		TableSizeBytes: FormControl<number | null | undefined>,
		TableStatus: FormControl<string | null | undefined>,
	}
	export function CreateAwsDynamoDbTableDetailsFormGroup() {
		return new FormGroup<AwsDynamoDbTableDetailsFormProperties>({
			CreationDateTime: new FormControl<string | null | undefined>(undefined),
			GlobalTableVersion: new FormControl<string | null | undefined>(undefined),
			ItemCount: new FormControl<number | null | undefined>(undefined),
			LatestStreamArn: new FormControl<string | null | undefined>(undefined),
			LatestStreamLabel: new FormControl<string | null | undefined>(undefined),
			TableId: new FormControl<string | null | undefined>(undefined),
			TableName: new FormControl<string | null | undefined>(undefined),
			TableSizeBytes: new FormControl<number | null | undefined>(undefined),
			TableStatus: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains a definition of an attribute for the table. */
	export interface AwsDynamoDbTableAttributeDefinition {
		AttributeName?: string;
		AttributeType?: string;
	}

	/** Contains a definition of an attribute for the table. */
	export interface AwsDynamoDbTableAttributeDefinitionFormProperties {
		AttributeName: FormControl<string | null | undefined>,
		AttributeType: FormControl<string | null | undefined>,
	}
	export function CreateAwsDynamoDbTableAttributeDefinitionFormGroup() {
		return new FormGroup<AwsDynamoDbTableAttributeDefinitionFormProperties>({
			AttributeName: new FormControl<string | null | undefined>(undefined),
			AttributeType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides information about the billing for read/write capacity on the table. */
	export interface AwsDynamoDbTableBillingModeSummary {
		BillingMode?: string;
		LastUpdateToPayPerRequestDateTime?: string;
	}

	/** Provides information about the billing for read/write capacity on the table. */
	export interface AwsDynamoDbTableBillingModeSummaryFormProperties {
		BillingMode: FormControl<string | null | undefined>,
		LastUpdateToPayPerRequestDateTime: FormControl<string | null | undefined>,
	}
	export function CreateAwsDynamoDbTableBillingModeSummaryFormGroup() {
		return new FormGroup<AwsDynamoDbTableBillingModeSummaryFormProperties>({
			BillingMode: new FormControl<string | null | undefined>(undefined),
			LastUpdateToPayPerRequestDateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information abut a global secondary index for the table. */
	export interface AwsDynamoDbTableGlobalSecondaryIndex {
		Backfilling?: boolean | null;
		IndexArn?: string;
		IndexName?: string;
		IndexSizeBytes?: number | null;
		IndexStatus?: string;
		ItemCount?: number | null;
		KeySchema?: Array<AwsDynamoDbTableKeySchema>;
		Projection?: AwsDynamoDbTableProjection;
		ProvisionedThroughput?: AwsDynamoDbTableProvisionedThroughput;
	}

	/** Information abut a global secondary index for the table. */
	export interface AwsDynamoDbTableGlobalSecondaryIndexFormProperties {
		Backfilling: FormControl<boolean | null | undefined>,
		IndexArn: FormControl<string | null | undefined>,
		IndexName: FormControl<string | null | undefined>,
		IndexSizeBytes: FormControl<number | null | undefined>,
		IndexStatus: FormControl<string | null | undefined>,
		ItemCount: FormControl<number | null | undefined>,
	}
	export function CreateAwsDynamoDbTableGlobalSecondaryIndexFormGroup() {
		return new FormGroup<AwsDynamoDbTableGlobalSecondaryIndexFormProperties>({
			Backfilling: new FormControl<boolean | null | undefined>(undefined),
			IndexArn: new FormControl<string | null | undefined>(undefined),
			IndexName: new FormControl<string | null | undefined>(undefined),
			IndexSizeBytes: new FormControl<number | null | undefined>(undefined),
			IndexStatus: new FormControl<string | null | undefined>(undefined),
			ItemCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A component of the key schema for the DynamoDB table, a global secondary index, or a local secondary index. */
	export interface AwsDynamoDbTableKeySchema {
		AttributeName?: string;
		KeyType?: string;
	}

	/** A component of the key schema for the DynamoDB table, a global secondary index, or a local secondary index. */
	export interface AwsDynamoDbTableKeySchemaFormProperties {
		AttributeName: FormControl<string | null | undefined>,
		KeyType: FormControl<string | null | undefined>,
	}
	export function CreateAwsDynamoDbTableKeySchemaFormGroup() {
		return new FormGroup<AwsDynamoDbTableKeySchemaFormProperties>({
			AttributeName: new FormControl<string | null | undefined>(undefined),
			KeyType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** For global and local secondary indexes, identifies the attributes that are copied from the table into the index. */
	export interface AwsDynamoDbTableProjection {
		NonKeyAttributes?: Array<string>;
		ProjectionType?: string;
	}

	/** For global and local secondary indexes, identifies the attributes that are copied from the table into the index. */
	export interface AwsDynamoDbTableProjectionFormProperties {
		ProjectionType: FormControl<string | null | undefined>,
	}
	export function CreateAwsDynamoDbTableProjectionFormGroup() {
		return new FormGroup<AwsDynamoDbTableProjectionFormProperties>({
			ProjectionType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about the provisioned throughput for the table or for a global secondary index. */
	export interface AwsDynamoDbTableProvisionedThroughput {
		LastDecreaseDateTime?: string;
		LastIncreaseDateTime?: string;
		NumberOfDecreasesToday?: number | null;
		ReadCapacityUnits?: number | null;
		WriteCapacityUnits?: number | null;
	}

	/** Information about the provisioned throughput for the table or for a global secondary index. */
	export interface AwsDynamoDbTableProvisionedThroughputFormProperties {
		LastDecreaseDateTime: FormControl<string | null | undefined>,
		LastIncreaseDateTime: FormControl<string | null | undefined>,
		NumberOfDecreasesToday: FormControl<number | null | undefined>,
		ReadCapacityUnits: FormControl<number | null | undefined>,
		WriteCapacityUnits: FormControl<number | null | undefined>,
	}
	export function CreateAwsDynamoDbTableProvisionedThroughputFormGroup() {
		return new FormGroup<AwsDynamoDbTableProvisionedThroughputFormProperties>({
			LastDecreaseDateTime: new FormControl<string | null | undefined>(undefined),
			LastIncreaseDateTime: new FormControl<string | null | undefined>(undefined),
			NumberOfDecreasesToday: new FormControl<number | null | undefined>(undefined),
			ReadCapacityUnits: new FormControl<number | null | undefined>(undefined),
			WriteCapacityUnits: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Information about a local secondary index for a DynamoDB table. */
	export interface AwsDynamoDbTableLocalSecondaryIndex {
		IndexArn?: string;
		IndexName?: string;
		KeySchema?: Array<AwsDynamoDbTableKeySchema>;
		Projection?: AwsDynamoDbTableProjection;
	}

	/** Information about a local secondary index for a DynamoDB table. */
	export interface AwsDynamoDbTableLocalSecondaryIndexFormProperties {
		IndexArn: FormControl<string | null | undefined>,
		IndexName: FormControl<string | null | undefined>,
	}
	export function CreateAwsDynamoDbTableLocalSecondaryIndexFormGroup() {
		return new FormGroup<AwsDynamoDbTableLocalSecondaryIndexFormProperties>({
			IndexArn: new FormControl<string | null | undefined>(undefined),
			IndexName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about a replica of a DynamoDB table. */
	export interface AwsDynamoDbTableReplica {
		GlobalSecondaryIndexes?: Array<AwsDynamoDbTableReplicaGlobalSecondaryIndex>;
		KmsMasterKeyId?: string;
		ProvisionedThroughputOverride?: AwsDynamoDbTableProvisionedThroughputOverride;
		RegionName?: string;
		ReplicaStatus?: string;
		ReplicaStatusDescription?: string;
	}

	/** Information about a replica of a DynamoDB table. */
	export interface AwsDynamoDbTableReplicaFormProperties {
		KmsMasterKeyId: FormControl<string | null | undefined>,
		RegionName: FormControl<string | null | undefined>,
		ReplicaStatus: FormControl<string | null | undefined>,
		ReplicaStatusDescription: FormControl<string | null | undefined>,
	}
	export function CreateAwsDynamoDbTableReplicaFormGroup() {
		return new FormGroup<AwsDynamoDbTableReplicaFormProperties>({
			KmsMasterKeyId: new FormControl<string | null | undefined>(undefined),
			RegionName: new FormControl<string | null | undefined>(undefined),
			ReplicaStatus: new FormControl<string | null | undefined>(undefined),
			ReplicaStatusDescription: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about a global secondary index for a DynamoDB table replica. */
	export interface AwsDynamoDbTableReplicaGlobalSecondaryIndex {
		IndexName?: string;
		ProvisionedThroughputOverride?: AwsDynamoDbTableProvisionedThroughputOverride;
	}

	/** Information about a global secondary index for a DynamoDB table replica. */
	export interface AwsDynamoDbTableReplicaGlobalSecondaryIndexFormProperties {
		IndexName: FormControl<string | null | undefined>,
	}
	export function CreateAwsDynamoDbTableReplicaGlobalSecondaryIndexFormGroup() {
		return new FormGroup<AwsDynamoDbTableReplicaGlobalSecondaryIndexFormProperties>({
			IndexName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Replica-specific configuration for the provisioned throughput. */
	export interface AwsDynamoDbTableProvisionedThroughputOverride {
		ReadCapacityUnits?: number | null;
	}

	/** Replica-specific configuration for the provisioned throughput. */
	export interface AwsDynamoDbTableProvisionedThroughputOverrideFormProperties {
		ReadCapacityUnits: FormControl<number | null | undefined>,
	}
	export function CreateAwsDynamoDbTableProvisionedThroughputOverrideFormGroup() {
		return new FormGroup<AwsDynamoDbTableProvisionedThroughputOverrideFormProperties>({
			ReadCapacityUnits: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Information about the restore for the table. */
	export interface AwsDynamoDbTableRestoreSummary {
		SourceBackupArn?: string;
		SourceTableArn?: string;
		RestoreDateTime?: string;
		RestoreInProgress?: boolean | null;
	}

	/** Information about the restore for the table. */
	export interface AwsDynamoDbTableRestoreSummaryFormProperties {
		SourceBackupArn: FormControl<string | null | undefined>,
		SourceTableArn: FormControl<string | null | undefined>,
		RestoreDateTime: FormControl<string | null | undefined>,
		RestoreInProgress: FormControl<boolean | null | undefined>,
	}
	export function CreateAwsDynamoDbTableRestoreSummaryFormGroup() {
		return new FormGroup<AwsDynamoDbTableRestoreSummaryFormProperties>({
			SourceBackupArn: new FormControl<string | null | undefined>(undefined),
			SourceTableArn: new FormControl<string | null | undefined>(undefined),
			RestoreDateTime: new FormControl<string | null | undefined>(undefined),
			RestoreInProgress: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Information about the server-side encryption for the table. */
	export interface AwsDynamoDbTableSseDescription {
		InaccessibleEncryptionDateTime?: string;
		Status?: string;
		SseType?: string;
		KmsMasterKeyArn?: string;
	}

	/** Information about the server-side encryption for the table. */
	export interface AwsDynamoDbTableSseDescriptionFormProperties {
		InaccessibleEncryptionDateTime: FormControl<string | null | undefined>,
		Status: FormControl<string | null | undefined>,
		SseType: FormControl<string | null | undefined>,
		KmsMasterKeyArn: FormControl<string | null | undefined>,
	}
	export function CreateAwsDynamoDbTableSseDescriptionFormGroup() {
		return new FormGroup<AwsDynamoDbTableSseDescriptionFormProperties>({
			InaccessibleEncryptionDateTime: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
			SseType: new FormControl<string | null | undefined>(undefined),
			KmsMasterKeyArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The current DynamoDB Streams configuration for the table. */
	export interface AwsDynamoDbTableStreamSpecification {
		StreamEnabled?: boolean | null;
		StreamViewType?: string;
	}

	/** The current DynamoDB Streams configuration for the table. */
	export interface AwsDynamoDbTableStreamSpecificationFormProperties {
		StreamEnabled: FormControl<boolean | null | undefined>,
		StreamViewType: FormControl<string | null | undefined>,
	}
	export function CreateAwsDynamoDbTableStreamSpecificationFormGroup() {
		return new FormGroup<AwsDynamoDbTableStreamSpecificationFormProperties>({
			StreamEnabled: new FormControl<boolean | null | undefined>(undefined),
			StreamViewType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides information about a version 1 Amazon API Gateway stage. */
	export interface AwsApiGatewayStageDetails {
		DeploymentId?: string;
		ClientCertificateId?: string;
		StageName?: string;
		Description?: string;
		CacheClusterEnabled?: boolean | null;
		CacheClusterSize?: string;
		CacheClusterStatus?: string;
		MethodSettings?: Array<AwsApiGatewayMethodSettings>;
		Variables?: FieldMap;
		DocumentationVersion?: string;
		AccessLogSettings?: AwsApiGatewayAccessLogSettings;
		CanarySettings?: AwsApiGatewayCanarySettings;
		TracingEnabled?: boolean | null;
		CreatedDate?: string;
		LastUpdatedDate?: string;
		WebAclArn?: string;
	}

	/** Provides information about a version 1 Amazon API Gateway stage. */
	export interface AwsApiGatewayStageDetailsFormProperties {
		DeploymentId: FormControl<string | null | undefined>,
		ClientCertificateId: FormControl<string | null | undefined>,
		StageName: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		CacheClusterEnabled: FormControl<boolean | null | undefined>,
		CacheClusterSize: FormControl<string | null | undefined>,
		CacheClusterStatus: FormControl<string | null | undefined>,
		DocumentationVersion: FormControl<string | null | undefined>,
		TracingEnabled: FormControl<boolean | null | undefined>,
		CreatedDate: FormControl<string | null | undefined>,
		LastUpdatedDate: FormControl<string | null | undefined>,
		WebAclArn: FormControl<string | null | undefined>,
	}
	export function CreateAwsApiGatewayStageDetailsFormGroup() {
		return new FormGroup<AwsApiGatewayStageDetailsFormProperties>({
			DeploymentId: new FormControl<string | null | undefined>(undefined),
			ClientCertificateId: new FormControl<string | null | undefined>(undefined),
			StageName: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			CacheClusterEnabled: new FormControl<boolean | null | undefined>(undefined),
			CacheClusterSize: new FormControl<string | null | undefined>(undefined),
			CacheClusterStatus: new FormControl<string | null | undefined>(undefined),
			DocumentationVersion: new FormControl<string | null | undefined>(undefined),
			TracingEnabled: new FormControl<boolean | null | undefined>(undefined),
			CreatedDate: new FormControl<string | null | undefined>(undefined),
			LastUpdatedDate: new FormControl<string | null | undefined>(undefined),
			WebAclArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Defines settings for a method for the stage. */
	export interface AwsApiGatewayMethodSettings {
		MetricsEnabled?: boolean | null;
		LoggingLevel?: string;
		DataTraceEnabled?: boolean | null;
		ThrottlingBurstLimit?: number | null;
		ThrottlingRateLimit?: number | null;
		CachingEnabled?: boolean | null;
		CacheTtlInSeconds?: number | null;
		CacheDataEncrypted?: boolean | null;
		RequireAuthorizationForCacheControl?: boolean | null;
		UnauthorizedCacheControlHeaderStrategy?: string;
		HttpMethod?: string;
		ResourcePath?: string;
	}

	/** Defines settings for a method for the stage. */
	export interface AwsApiGatewayMethodSettingsFormProperties {
		MetricsEnabled: FormControl<boolean | null | undefined>,
		LoggingLevel: FormControl<string | null | undefined>,
		DataTraceEnabled: FormControl<boolean | null | undefined>,
		ThrottlingBurstLimit: FormControl<number | null | undefined>,
		ThrottlingRateLimit: FormControl<number | null | undefined>,
		CachingEnabled: FormControl<boolean | null | undefined>,
		CacheTtlInSeconds: FormControl<number | null | undefined>,
		CacheDataEncrypted: FormControl<boolean | null | undefined>,
		RequireAuthorizationForCacheControl: FormControl<boolean | null | undefined>,
		UnauthorizedCacheControlHeaderStrategy: FormControl<string | null | undefined>,
		HttpMethod: FormControl<string | null | undefined>,
		ResourcePath: FormControl<string | null | undefined>,
	}
	export function CreateAwsApiGatewayMethodSettingsFormGroup() {
		return new FormGroup<AwsApiGatewayMethodSettingsFormProperties>({
			MetricsEnabled: new FormControl<boolean | null | undefined>(undefined),
			LoggingLevel: new FormControl<string | null | undefined>(undefined),
			DataTraceEnabled: new FormControl<boolean | null | undefined>(undefined),
			ThrottlingBurstLimit: new FormControl<number | null | undefined>(undefined),
			ThrottlingRateLimit: new FormControl<number | null | undefined>(undefined),
			CachingEnabled: new FormControl<boolean | null | undefined>(undefined),
			CacheTtlInSeconds: new FormControl<number | null | undefined>(undefined),
			CacheDataEncrypted: new FormControl<boolean | null | undefined>(undefined),
			RequireAuthorizationForCacheControl: new FormControl<boolean | null | undefined>(undefined),
			UnauthorizedCacheControlHeaderStrategy: new FormControl<string | null | undefined>(undefined),
			HttpMethod: new FormControl<string | null | undefined>(undefined),
			ResourcePath: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information about settings for canary deployment in the stage. */
	export interface AwsApiGatewayCanarySettings {
		PercentTraffic?: number | null;
		DeploymentId?: string;
		StageVariableOverrides?: FieldMap;
		UseStageCache?: boolean | null;
	}

	/** Contains information about settings for canary deployment in the stage. */
	export interface AwsApiGatewayCanarySettingsFormProperties {
		PercentTraffic: FormControl<number | null | undefined>,
		DeploymentId: FormControl<string | null | undefined>,
		UseStageCache: FormControl<boolean | null | undefined>,
	}
	export function CreateAwsApiGatewayCanarySettingsFormGroup() {
		return new FormGroup<AwsApiGatewayCanarySettingsFormProperties>({
			PercentTraffic: new FormControl<number | null | undefined>(undefined),
			DeploymentId: new FormControl<string | null | undefined>(undefined),
			UseStageCache: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Contains information about a REST API in version 1 of Amazon API Gateway. */
	export interface AwsApiGatewayRestApiDetails {
		Id?: string;
		Name?: string;
		Description?: string;
		CreatedDate?: string;
		Version?: string;
		BinaryMediaTypes?: Array<string>;
		MinimumCompressionSize?: number | null;
		ApiKeySource?: string;
		EndpointConfiguration?: AwsApiGatewayEndpointConfiguration;
	}

	/** Contains information about a REST API in version 1 of Amazon API Gateway. */
	export interface AwsApiGatewayRestApiDetailsFormProperties {
		Id: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		CreatedDate: FormControl<string | null | undefined>,
		Version: FormControl<string | null | undefined>,
		MinimumCompressionSize: FormControl<number | null | undefined>,
		ApiKeySource: FormControl<string | null | undefined>,
	}
	export function CreateAwsApiGatewayRestApiDetailsFormGroup() {
		return new FormGroup<AwsApiGatewayRestApiDetailsFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			CreatedDate: new FormControl<string | null | undefined>(undefined),
			Version: new FormControl<string | null | undefined>(undefined),
			MinimumCompressionSize: new FormControl<number | null | undefined>(undefined),
			ApiKeySource: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information about the endpoints for the API. */
	export interface AwsApiGatewayEndpointConfiguration {
		Types?: Array<string>;
	}

	/** Contains information about the endpoints for the API. */
	export interface AwsApiGatewayEndpointConfigurationFormProperties {
	}
	export function CreateAwsApiGatewayEndpointConfigurationFormGroup() {
		return new FormGroup<AwsApiGatewayEndpointConfigurationFormProperties>({
		});

	}


	/** Provides details about a CloudTrail trail. */
	export interface AwsCloudTrailTrailDetails {
		CloudWatchLogsLogGroupArn?: string;
		CloudWatchLogsRoleArn?: string;
		HasCustomEventSelectors?: boolean | null;
		HomeRegion?: string;
		IncludeGlobalServiceEvents?: boolean | null;
		IsMultiRegionTrail?: boolean | null;
		IsOrganizationTrail?: boolean | null;
		KmsKeyId?: string;
		LogFileValidationEnabled?: boolean | null;
		Name?: string;
		S3BucketName?: string;
		S3KeyPrefix?: string;
		SnsTopicArn?: string;
		SnsTopicName?: string;
		TrailArn?: string;
	}

	/** Provides details about a CloudTrail trail. */
	export interface AwsCloudTrailTrailDetailsFormProperties {
		CloudWatchLogsLogGroupArn: FormControl<string | null | undefined>,
		CloudWatchLogsRoleArn: FormControl<string | null | undefined>,
		HasCustomEventSelectors: FormControl<boolean | null | undefined>,
		HomeRegion: FormControl<string | null | undefined>,
		IncludeGlobalServiceEvents: FormControl<boolean | null | undefined>,
		IsMultiRegionTrail: FormControl<boolean | null | undefined>,
		IsOrganizationTrail: FormControl<boolean | null | undefined>,
		KmsKeyId: FormControl<string | null | undefined>,
		LogFileValidationEnabled: FormControl<boolean | null | undefined>,
		Name: FormControl<string | null | undefined>,
		S3BucketName: FormControl<string | null | undefined>,
		S3KeyPrefix: FormControl<string | null | undefined>,
		SnsTopicArn: FormControl<string | null | undefined>,
		SnsTopicName: FormControl<string | null | undefined>,
		TrailArn: FormControl<string | null | undefined>,
	}
	export function CreateAwsCloudTrailTrailDetailsFormGroup() {
		return new FormGroup<AwsCloudTrailTrailDetailsFormProperties>({
			CloudWatchLogsLogGroupArn: new FormControl<string | null | undefined>(undefined),
			CloudWatchLogsRoleArn: new FormControl<string | null | undefined>(undefined),
			HasCustomEventSelectors: new FormControl<boolean | null | undefined>(undefined),
			HomeRegion: new FormControl<string | null | undefined>(undefined),
			IncludeGlobalServiceEvents: new FormControl<boolean | null | undefined>(undefined),
			IsMultiRegionTrail: new FormControl<boolean | null | undefined>(undefined),
			IsOrganizationTrail: new FormControl<boolean | null | undefined>(undefined),
			KmsKeyId: new FormControl<string | null | undefined>(undefined),
			LogFileValidationEnabled: new FormControl<boolean | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			S3BucketName: new FormControl<string | null | undefined>(undefined),
			S3KeyPrefix: new FormControl<string | null | undefined>(undefined),
			SnsTopicArn: new FormControl<string | null | undefined>(undefined),
			SnsTopicName: new FormControl<string | null | undefined>(undefined),
			TrailArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides information about the state of a patch on an instance based on the patch baseline that was used to patch the instance. */
	export interface AwsSsmPatchComplianceDetails {
		Patch?: AwsSsmPatch;
	}

	/** Provides information about the state of a patch on an instance based on the patch baseline that was used to patch the instance. */
	export interface AwsSsmPatchComplianceDetailsFormProperties {
	}
	export function CreateAwsSsmPatchComplianceDetailsFormGroup() {
		return new FormGroup<AwsSsmPatchComplianceDetailsFormProperties>({
		});

	}


	/** Provides details about the compliance for a patch. */
	export interface AwsSsmPatch {
		ComplianceSummary?: AwsSsmComplianceSummary;
	}

	/** Provides details about the compliance for a patch. */
	export interface AwsSsmPatchFormProperties {
	}
	export function CreateAwsSsmPatchFormGroup() {
		return new FormGroup<AwsSsmPatchFormProperties>({
		});

	}


	/** Provides the details about the compliance status for a patch. */
	export interface AwsSsmComplianceSummary {
		Status?: string;
		CompliantCriticalCount?: number | null;
		CompliantHighCount?: number | null;
		CompliantMediumCount?: number | null;
		ExecutionType?: string;
		NonCompliantCriticalCount?: number | null;
		CompliantInformationalCount?: number | null;
		NonCompliantInformationalCount?: number | null;
		CompliantUnspecifiedCount?: number | null;
		NonCompliantLowCount?: number | null;
		NonCompliantHighCount?: number | null;
		CompliantLowCount?: number | null;
		ComplianceType?: string;
		PatchBaselineId?: string;
		OverallSeverity?: string;
		NonCompliantMediumCount?: number | null;
		NonCompliantUnspecifiedCount?: number | null;
		PatchGroup?: string;
	}

	/** Provides the details about the compliance status for a patch. */
	export interface AwsSsmComplianceSummaryFormProperties {
		Status: FormControl<string | null | undefined>,
		CompliantCriticalCount: FormControl<number | null | undefined>,
		CompliantHighCount: FormControl<number | null | undefined>,
		CompliantMediumCount: FormControl<number | null | undefined>,
		ExecutionType: FormControl<string | null | undefined>,
		NonCompliantCriticalCount: FormControl<number | null | undefined>,
		CompliantInformationalCount: FormControl<number | null | undefined>,
		NonCompliantInformationalCount: FormControl<number | null | undefined>,
		CompliantUnspecifiedCount: FormControl<number | null | undefined>,
		NonCompliantLowCount: FormControl<number | null | undefined>,
		NonCompliantHighCount: FormControl<number | null | undefined>,
		CompliantLowCount: FormControl<number | null | undefined>,
		ComplianceType: FormControl<string | null | undefined>,
		PatchBaselineId: FormControl<string | null | undefined>,
		OverallSeverity: FormControl<string | null | undefined>,
		NonCompliantMediumCount: FormControl<number | null | undefined>,
		NonCompliantUnspecifiedCount: FormControl<number | null | undefined>,
		PatchGroup: FormControl<string | null | undefined>,
	}
	export function CreateAwsSsmComplianceSummaryFormGroup() {
		return new FormGroup<AwsSsmComplianceSummaryFormProperties>({
			Status: new FormControl<string | null | undefined>(undefined),
			CompliantCriticalCount: new FormControl<number | null | undefined>(undefined),
			CompliantHighCount: new FormControl<number | null | undefined>(undefined),
			CompliantMediumCount: new FormControl<number | null | undefined>(undefined),
			ExecutionType: new FormControl<string | null | undefined>(undefined),
			NonCompliantCriticalCount: new FormControl<number | null | undefined>(undefined),
			CompliantInformationalCount: new FormControl<number | null | undefined>(undefined),
			NonCompliantInformationalCount: new FormControl<number | null | undefined>(undefined),
			CompliantUnspecifiedCount: new FormControl<number | null | undefined>(undefined),
			NonCompliantLowCount: new FormControl<number | null | undefined>(undefined),
			NonCompliantHighCount: new FormControl<number | null | undefined>(undefined),
			CompliantLowCount: new FormControl<number | null | undefined>(undefined),
			ComplianceType: new FormControl<string | null | undefined>(undefined),
			PatchBaselineId: new FormControl<string | null | undefined>(undefined),
			OverallSeverity: new FormControl<string | null | undefined>(undefined),
			NonCompliantMediumCount: new FormControl<number | null | undefined>(undefined),
			NonCompliantUnspecifiedCount: new FormControl<number | null | undefined>(undefined),
			PatchGroup: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides details about an Certificate Manager certificate. */
	export interface AwsCertificateManagerCertificateDetails {
		CertificateAuthorityArn?: string;
		CreatedAt?: string;
		DomainName?: string;
		DomainValidationOptions?: Array<AwsCertificateManagerCertificateDomainValidationOption>;
		ExtendedKeyUsages?: Array<AwsCertificateManagerCertificateExtendedKeyUsage>;
		FailureReason?: string;
		ImportedAt?: string;
		InUseBy?: Array<string>;
		IssuedAt?: string;
		Issuer?: string;
		KeyAlgorithm?: string;
		KeyUsages?: Array<AwsCertificateManagerCertificateKeyUsage>;
		NotAfter?: string;
		NotBefore?: string;
		Options?: AwsCertificateManagerCertificateOptions;
		RenewalEligibility?: string;
		RenewalSummary?: AwsCertificateManagerCertificateRenewalSummary;
		Serial?: string;
		SignatureAlgorithm?: string;
		Status?: string;
		Subject?: string;
		SubjectAlternativeNames?: Array<string>;
		Type?: string;
	}

	/** Provides details about an Certificate Manager certificate. */
	export interface AwsCertificateManagerCertificateDetailsFormProperties {
		CertificateAuthorityArn: FormControl<string | null | undefined>,
		CreatedAt: FormControl<string | null | undefined>,
		DomainName: FormControl<string | null | undefined>,
		FailureReason: FormControl<string | null | undefined>,
		ImportedAt: FormControl<string | null | undefined>,
		IssuedAt: FormControl<string | null | undefined>,
		Issuer: FormControl<string | null | undefined>,
		KeyAlgorithm: FormControl<string | null | undefined>,
		NotAfter: FormControl<string | null | undefined>,
		NotBefore: FormControl<string | null | undefined>,
		RenewalEligibility: FormControl<string | null | undefined>,
		Serial: FormControl<string | null | undefined>,
		SignatureAlgorithm: FormControl<string | null | undefined>,
		Status: FormControl<string | null | undefined>,
		Subject: FormControl<string | null | undefined>,
		Type: FormControl<string | null | undefined>,
	}
	export function CreateAwsCertificateManagerCertificateDetailsFormGroup() {
		return new FormGroup<AwsCertificateManagerCertificateDetailsFormProperties>({
			CertificateAuthorityArn: new FormControl<string | null | undefined>(undefined),
			CreatedAt: new FormControl<string | null | undefined>(undefined),
			DomainName: new FormControl<string | null | undefined>(undefined),
			FailureReason: new FormControl<string | null | undefined>(undefined),
			ImportedAt: new FormControl<string | null | undefined>(undefined),
			IssuedAt: new FormControl<string | null | undefined>(undefined),
			Issuer: new FormControl<string | null | undefined>(undefined),
			KeyAlgorithm: new FormControl<string | null | undefined>(undefined),
			NotAfter: new FormControl<string | null | undefined>(undefined),
			NotBefore: new FormControl<string | null | undefined>(undefined),
			RenewalEligibility: new FormControl<string | null | undefined>(undefined),
			Serial: new FormControl<string | null | undefined>(undefined),
			SignatureAlgorithm: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
			Subject: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>Contains information about one of the following:</p> <ul> <li> <p>The initial validation of each domain name that occurs as a result of the <code>RequestCertificate</code> request</p> </li> <li> <p>The validation of each domain name in the certificate, as it pertains to Certificate Manager managed renewal</p> </li> </ul> */
	export interface AwsCertificateManagerCertificateDomainValidationOption {
		DomainName?: string;
		ResourceRecord?: AwsCertificateManagerCertificateResourceRecord;
		ValidationDomain?: string;
		ValidationEmails?: Array<string>;
		ValidationMethod?: string;
		ValidationStatus?: string;
	}

	/** <p>Contains information about one of the following:</p> <ul> <li> <p>The initial validation of each domain name that occurs as a result of the <code>RequestCertificate</code> request</p> </li> <li> <p>The validation of each domain name in the certificate, as it pertains to Certificate Manager managed renewal</p> </li> </ul> */
	export interface AwsCertificateManagerCertificateDomainValidationOptionFormProperties {
		DomainName: FormControl<string | null | undefined>,
		ValidationDomain: FormControl<string | null | undefined>,
		ValidationMethod: FormControl<string | null | undefined>,
		ValidationStatus: FormControl<string | null | undefined>,
	}
	export function CreateAwsCertificateManagerCertificateDomainValidationOptionFormGroup() {
		return new FormGroup<AwsCertificateManagerCertificateDomainValidationOptionFormProperties>({
			DomainName: new FormControl<string | null | undefined>(undefined),
			ValidationDomain: new FormControl<string | null | undefined>(undefined),
			ValidationMethod: new FormControl<string | null | undefined>(undefined),
			ValidationStatus: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides details about the CNAME record that is added to the DNS database for domain validation. */
	export interface AwsCertificateManagerCertificateResourceRecord {
		Name?: string;
		Type?: string;
		Value?: string;
	}

	/** Provides details about the CNAME record that is added to the DNS database for domain validation. */
	export interface AwsCertificateManagerCertificateResourceRecordFormProperties {
		Name: FormControl<string | null | undefined>,
		Type: FormControl<string | null | undefined>,
		Value: FormControl<string | null | undefined>,
	}
	export function CreateAwsCertificateManagerCertificateResourceRecordFormGroup() {
		return new FormGroup<AwsCertificateManagerCertificateResourceRecordFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<string | null | undefined>(undefined),
			Value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information about an extended key usage X.509 v3 extension object. */
	export interface AwsCertificateManagerCertificateExtendedKeyUsage {
		Name?: string;
		OId?: string;
	}

	/** Contains information about an extended key usage X.509 v3 extension object. */
	export interface AwsCertificateManagerCertificateExtendedKeyUsageFormProperties {
		Name: FormControl<string | null | undefined>,
		OId: FormControl<string | null | undefined>,
	}
	export function CreateAwsCertificateManagerCertificateExtendedKeyUsageFormGroup() {
		return new FormGroup<AwsCertificateManagerCertificateExtendedKeyUsageFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			OId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information about a key usage X.509 v3 extension object. */
	export interface AwsCertificateManagerCertificateKeyUsage {
		Name?: string;
	}

	/** Contains information about a key usage X.509 v3 extension object. */
	export interface AwsCertificateManagerCertificateKeyUsageFormProperties {
		Name: FormControl<string | null | undefined>,
	}
	export function CreateAwsCertificateManagerCertificateKeyUsageFormGroup() {
		return new FormGroup<AwsCertificateManagerCertificateKeyUsageFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains other options for the certificate. */
	export interface AwsCertificateManagerCertificateOptions {
		CertificateTransparencyLoggingPreference?: string;
	}

	/** Contains other options for the certificate. */
	export interface AwsCertificateManagerCertificateOptionsFormProperties {
		CertificateTransparencyLoggingPreference: FormControl<string | null | undefined>,
	}
	export function CreateAwsCertificateManagerCertificateOptionsFormGroup() {
		return new FormGroup<AwsCertificateManagerCertificateOptionsFormProperties>({
			CertificateTransparencyLoggingPreference: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information about the Certificate Manager managed renewal for an <code>AMAZON_ISSUED</code> certificate. */
	export interface AwsCertificateManagerCertificateRenewalSummary {
		DomainValidationOptions?: Array<AwsCertificateManagerCertificateDomainValidationOption>;
		RenewalStatus?: string;
		RenewalStatusReason?: string;
		UpdatedAt?: string;
	}

	/** Contains information about the Certificate Manager managed renewal for an <code>AMAZON_ISSUED</code> certificate. */
	export interface AwsCertificateManagerCertificateRenewalSummaryFormProperties {
		RenewalStatus: FormControl<string | null | undefined>,
		RenewalStatusReason: FormControl<string | null | undefined>,
		UpdatedAt: FormControl<string | null | undefined>,
	}
	export function CreateAwsCertificateManagerCertificateRenewalSummaryFormGroup() {
		return new FormGroup<AwsCertificateManagerCertificateRenewalSummaryFormProperties>({
			RenewalStatus: new FormControl<string | null | undefined>(undefined),
			RenewalStatusReason: new FormControl<string | null | undefined>(undefined),
			UpdatedAt: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details about an Amazon Redshift cluster. */
	export interface AwsRedshiftClusterDetails {
		AllowVersionUpgrade?: boolean | null;
		AutomatedSnapshotRetentionPeriod?: number | null;
		AvailabilityZone?: string;
		ClusterAvailabilityStatus?: string;
		ClusterCreateTime?: string;
		ClusterIdentifier?: string;
		ClusterNodes?: Array<AwsRedshiftClusterClusterNode>;
		ClusterParameterGroups?: Array<AwsRedshiftClusterClusterParameterGroup>;
		ClusterPublicKey?: string;
		ClusterRevisionNumber?: string;
		ClusterSecurityGroups?: Array<AwsRedshiftClusterClusterSecurityGroup>;
		ClusterSnapshotCopyStatus?: AwsRedshiftClusterClusterSnapshotCopyStatus;
		ClusterStatus?: string;
		ClusterSubnetGroupName?: string;
		ClusterVersion?: string;
		DBName?: string;
		DeferredMaintenanceWindows?: Array<AwsRedshiftClusterDeferredMaintenanceWindow>;
		ElasticIpStatus?: AwsRedshiftClusterElasticIpStatus;
		ElasticResizeNumberOfNodeOptions?: string;
		Encrypted?: boolean | null;
		Endpoint?: AwsRedshiftClusterEndpoint;
		EnhancedVpcRouting?: boolean | null;
		ExpectedNextSnapshotScheduleTime?: string;
		ExpectedNextSnapshotScheduleTimeStatus?: string;
		HsmStatus?: AwsRedshiftClusterHsmStatus;
		IamRoles?: Array<AwsRedshiftClusterIamRole>;
		KmsKeyId?: string;
		MaintenanceTrackName?: string;
		ManualSnapshotRetentionPeriod?: number | null;
		MasterUsername?: string;
		NextMaintenanceWindowStartTime?: string;
		NodeType?: string;
		NumberOfNodes?: number | null;
		PendingActions?: Array<string>;
		PendingModifiedValues?: AwsRedshiftClusterPendingModifiedValues;
		PreferredMaintenanceWindow?: string;
		PubliclyAccessible?: boolean | null;
		ResizeInfo?: AwsRedshiftClusterResizeInfo;
		RestoreStatus?: AwsRedshiftClusterRestoreStatus;
		SnapshotScheduleIdentifier?: string;
		SnapshotScheduleState?: string;
		VpcId?: string;
		VpcSecurityGroups?: Array<AwsRedshiftClusterVpcSecurityGroup>;
		LoggingStatus?: AwsRedshiftClusterLoggingStatus;
	}

	/** Details about an Amazon Redshift cluster. */
	export interface AwsRedshiftClusterDetailsFormProperties {
		AllowVersionUpgrade: FormControl<boolean | null | undefined>,
		AutomatedSnapshotRetentionPeriod: FormControl<number | null | undefined>,
		AvailabilityZone: FormControl<string | null | undefined>,
		ClusterAvailabilityStatus: FormControl<string | null | undefined>,
		ClusterCreateTime: FormControl<string | null | undefined>,
		ClusterIdentifier: FormControl<string | null | undefined>,
		ClusterPublicKey: FormControl<string | null | undefined>,
		ClusterRevisionNumber: FormControl<string | null | undefined>,
		ClusterStatus: FormControl<string | null | undefined>,
		ClusterSubnetGroupName: FormControl<string | null | undefined>,
		ClusterVersion: FormControl<string | null | undefined>,
		DBName: FormControl<string | null | undefined>,
		ElasticResizeNumberOfNodeOptions: FormControl<string | null | undefined>,
		Encrypted: FormControl<boolean | null | undefined>,
		EnhancedVpcRouting: FormControl<boolean | null | undefined>,
		ExpectedNextSnapshotScheduleTime: FormControl<string | null | undefined>,
		ExpectedNextSnapshotScheduleTimeStatus: FormControl<string | null | undefined>,
		KmsKeyId: FormControl<string | null | undefined>,
		MaintenanceTrackName: FormControl<string | null | undefined>,
		ManualSnapshotRetentionPeriod: FormControl<number | null | undefined>,
		MasterUsername: FormControl<string | null | undefined>,
		NextMaintenanceWindowStartTime: FormControl<string | null | undefined>,
		NodeType: FormControl<string | null | undefined>,
		NumberOfNodes: FormControl<number | null | undefined>,
		PreferredMaintenanceWindow: FormControl<string | null | undefined>,
		PubliclyAccessible: FormControl<boolean | null | undefined>,
		SnapshotScheduleIdentifier: FormControl<string | null | undefined>,
		SnapshotScheduleState: FormControl<string | null | undefined>,
		VpcId: FormControl<string | null | undefined>,
	}
	export function CreateAwsRedshiftClusterDetailsFormGroup() {
		return new FormGroup<AwsRedshiftClusterDetailsFormProperties>({
			AllowVersionUpgrade: new FormControl<boolean | null | undefined>(undefined),
			AutomatedSnapshotRetentionPeriod: new FormControl<number | null | undefined>(undefined),
			AvailabilityZone: new FormControl<string | null | undefined>(undefined),
			ClusterAvailabilityStatus: new FormControl<string | null | undefined>(undefined),
			ClusterCreateTime: new FormControl<string | null | undefined>(undefined),
			ClusterIdentifier: new FormControl<string | null | undefined>(undefined),
			ClusterPublicKey: new FormControl<string | null | undefined>(undefined),
			ClusterRevisionNumber: new FormControl<string | null | undefined>(undefined),
			ClusterStatus: new FormControl<string | null | undefined>(undefined),
			ClusterSubnetGroupName: new FormControl<string | null | undefined>(undefined),
			ClusterVersion: new FormControl<string | null | undefined>(undefined),
			DBName: new FormControl<string | null | undefined>(undefined),
			ElasticResizeNumberOfNodeOptions: new FormControl<string | null | undefined>(undefined),
			Encrypted: new FormControl<boolean | null | undefined>(undefined),
			EnhancedVpcRouting: new FormControl<boolean | null | undefined>(undefined),
			ExpectedNextSnapshotScheduleTime: new FormControl<string | null | undefined>(undefined),
			ExpectedNextSnapshotScheduleTimeStatus: new FormControl<string | null | undefined>(undefined),
			KmsKeyId: new FormControl<string | null | undefined>(undefined),
			MaintenanceTrackName: new FormControl<string | null | undefined>(undefined),
			ManualSnapshotRetentionPeriod: new FormControl<number | null | undefined>(undefined),
			MasterUsername: new FormControl<string | null | undefined>(undefined),
			NextMaintenanceWindowStartTime: new FormControl<string | null | undefined>(undefined),
			NodeType: new FormControl<string | null | undefined>(undefined),
			NumberOfNodes: new FormControl<number | null | undefined>(undefined),
			PreferredMaintenanceWindow: new FormControl<string | null | undefined>(undefined),
			PubliclyAccessible: new FormControl<boolean | null | undefined>(undefined),
			SnapshotScheduleIdentifier: new FormControl<string | null | undefined>(undefined),
			SnapshotScheduleState: new FormControl<string | null | undefined>(undefined),
			VpcId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A node in an Amazon Redshift cluster. */
	export interface AwsRedshiftClusterClusterNode {
		NodeRole?: string;
		PrivateIpAddress?: string;
		PublicIpAddress?: string;
	}

	/** A node in an Amazon Redshift cluster. */
	export interface AwsRedshiftClusterClusterNodeFormProperties {
		NodeRole: FormControl<string | null | undefined>,
		PrivateIpAddress: FormControl<string | null | undefined>,
		PublicIpAddress: FormControl<string | null | undefined>,
	}
	export function CreateAwsRedshiftClusterClusterNodeFormGroup() {
		return new FormGroup<AwsRedshiftClusterClusterNodeFormProperties>({
			NodeRole: new FormControl<string | null | undefined>(undefined),
			PrivateIpAddress: new FormControl<string | null | undefined>(undefined),
			PublicIpAddress: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A cluster parameter group that is associated with an Amazon Redshift cluster. */
	export interface AwsRedshiftClusterClusterParameterGroup {
		ClusterParameterStatusList?: Array<AwsRedshiftClusterClusterParameterStatus>;
		ParameterApplyStatus?: string;
		ParameterGroupName?: string;
	}

	/** A cluster parameter group that is associated with an Amazon Redshift cluster. */
	export interface AwsRedshiftClusterClusterParameterGroupFormProperties {
		ParameterApplyStatus: FormControl<string | null | undefined>,
		ParameterGroupName: FormControl<string | null | undefined>,
	}
	export function CreateAwsRedshiftClusterClusterParameterGroupFormGroup() {
		return new FormGroup<AwsRedshiftClusterClusterParameterGroupFormProperties>({
			ParameterApplyStatus: new FormControl<string | null | undefined>(undefined),
			ParameterGroupName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The status of a parameter in a cluster parameter group for an Amazon Redshift cluster. */
	export interface AwsRedshiftClusterClusterParameterStatus {
		ParameterName?: string;
		ParameterApplyStatus?: string;
		ParameterApplyErrorDescription?: string;
	}

	/** The status of a parameter in a cluster parameter group for an Amazon Redshift cluster. */
	export interface AwsRedshiftClusterClusterParameterStatusFormProperties {
		ParameterName: FormControl<string | null | undefined>,
		ParameterApplyStatus: FormControl<string | null | undefined>,
		ParameterApplyErrorDescription: FormControl<string | null | undefined>,
	}
	export function CreateAwsRedshiftClusterClusterParameterStatusFormGroup() {
		return new FormGroup<AwsRedshiftClusterClusterParameterStatusFormProperties>({
			ParameterName: new FormControl<string | null | undefined>(undefined),
			ParameterApplyStatus: new FormControl<string | null | undefined>(undefined),
			ParameterApplyErrorDescription: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A security group that is associated with the cluster. */
	export interface AwsRedshiftClusterClusterSecurityGroup {
		ClusterSecurityGroupName?: string;
		Status?: string;
	}

	/** A security group that is associated with the cluster. */
	export interface AwsRedshiftClusterClusterSecurityGroupFormProperties {
		ClusterSecurityGroupName: FormControl<string | null | undefined>,
		Status: FormControl<string | null | undefined>,
	}
	export function CreateAwsRedshiftClusterClusterSecurityGroupFormGroup() {
		return new FormGroup<AwsRedshiftClusterClusterSecurityGroupFormProperties>({
			ClusterSecurityGroupName: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** You can configure Amazon Redshift to copy snapshots for a cluster to another Amazon Web Services Region. This parameter provides information about a cross-Region snapshot copy. */
	export interface AwsRedshiftClusterClusterSnapshotCopyStatus {
		DestinationRegion?: string;
		ManualSnapshotRetentionPeriod?: number | null;
		RetentionPeriod?: number | null;
		SnapshotCopyGrantName?: string;
	}

	/** You can configure Amazon Redshift to copy snapshots for a cluster to another Amazon Web Services Region. This parameter provides information about a cross-Region snapshot copy. */
	export interface AwsRedshiftClusterClusterSnapshotCopyStatusFormProperties {
		DestinationRegion: FormControl<string | null | undefined>,
		ManualSnapshotRetentionPeriod: FormControl<number | null | undefined>,
		RetentionPeriod: FormControl<number | null | undefined>,
		SnapshotCopyGrantName: FormControl<string | null | undefined>,
	}
	export function CreateAwsRedshiftClusterClusterSnapshotCopyStatusFormGroup() {
		return new FormGroup<AwsRedshiftClusterClusterSnapshotCopyStatusFormProperties>({
			DestinationRegion: new FormControl<string | null | undefined>(undefined),
			ManualSnapshotRetentionPeriod: new FormControl<number | null | undefined>(undefined),
			RetentionPeriod: new FormControl<number | null | undefined>(undefined),
			SnapshotCopyGrantName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A time windows during which maintenance was deferred for an Amazon Redshift cluster. */
	export interface AwsRedshiftClusterDeferredMaintenanceWindow {
		DeferMaintenanceEndTime?: string;
		DeferMaintenanceIdentifier?: string;
		DeferMaintenanceStartTime?: string;
	}

	/** A time windows during which maintenance was deferred for an Amazon Redshift cluster. */
	export interface AwsRedshiftClusterDeferredMaintenanceWindowFormProperties {
		DeferMaintenanceEndTime: FormControl<string | null | undefined>,
		DeferMaintenanceIdentifier: FormControl<string | null | undefined>,
		DeferMaintenanceStartTime: FormControl<string | null | undefined>,
	}
	export function CreateAwsRedshiftClusterDeferredMaintenanceWindowFormGroup() {
		return new FormGroup<AwsRedshiftClusterDeferredMaintenanceWindowFormProperties>({
			DeferMaintenanceEndTime: new FormControl<string | null | undefined>(undefined),
			DeferMaintenanceIdentifier: new FormControl<string | null | undefined>(undefined),
			DeferMaintenanceStartTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The status of the elastic IP (EIP) address for an Amazon Redshift cluster. */
	export interface AwsRedshiftClusterElasticIpStatus {
		ElasticIp?: string;
		Status?: string;
	}

	/** The status of the elastic IP (EIP) address for an Amazon Redshift cluster. */
	export interface AwsRedshiftClusterElasticIpStatusFormProperties {
		ElasticIp: FormControl<string | null | undefined>,
		Status: FormControl<string | null | undefined>,
	}
	export function CreateAwsRedshiftClusterElasticIpStatusFormGroup() {
		return new FormGroup<AwsRedshiftClusterElasticIpStatusFormProperties>({
			ElasticIp: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The connection endpoint for an Amazon Redshift cluster. */
	export interface AwsRedshiftClusterEndpoint {
		Address?: string;
		Port?: number | null;
	}

	/** The connection endpoint for an Amazon Redshift cluster. */
	export interface AwsRedshiftClusterEndpointFormProperties {
		Address: FormControl<string | null | undefined>,
		Port: FormControl<number | null | undefined>,
	}
	export function CreateAwsRedshiftClusterEndpointFormGroup() {
		return new FormGroup<AwsRedshiftClusterEndpointFormProperties>({
			Address: new FormControl<string | null | undefined>(undefined),
			Port: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Information about whether an Amazon Redshift cluster finished applying any hardware changes to security module (HSM) settings that were specified in a modify cluster command. */
	export interface AwsRedshiftClusterHsmStatus {
		HsmClientCertificateIdentifier?: string;
		HsmConfigurationIdentifier?: string;
		Status?: string;
	}

	/** Information about whether an Amazon Redshift cluster finished applying any hardware changes to security module (HSM) settings that were specified in a modify cluster command. */
	export interface AwsRedshiftClusterHsmStatusFormProperties {
		HsmClientCertificateIdentifier: FormControl<string | null | undefined>,
		HsmConfigurationIdentifier: FormControl<string | null | undefined>,
		Status: FormControl<string | null | undefined>,
	}
	export function CreateAwsRedshiftClusterHsmStatusFormGroup() {
		return new FormGroup<AwsRedshiftClusterHsmStatusFormProperties>({
			HsmClientCertificateIdentifier: new FormControl<string | null | undefined>(undefined),
			HsmConfigurationIdentifier: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An IAM role that the cluster can use to access other Amazon Web Services services. */
	export interface AwsRedshiftClusterIamRole {
		ApplyStatus?: string;
		IamRoleArn?: string;
	}

	/** An IAM role that the cluster can use to access other Amazon Web Services services. */
	export interface AwsRedshiftClusterIamRoleFormProperties {
		ApplyStatus: FormControl<string | null | undefined>,
		IamRoleArn: FormControl<string | null | undefined>,
	}
	export function CreateAwsRedshiftClusterIamRoleFormGroup() {
		return new FormGroup<AwsRedshiftClusterIamRoleFormProperties>({
			ApplyStatus: new FormControl<string | null | undefined>(undefined),
			IamRoleArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Changes to the Amazon Redshift cluster that are currently pending. */
	export interface AwsRedshiftClusterPendingModifiedValues {
		AutomatedSnapshotRetentionPeriod?: number | null;
		ClusterIdentifier?: string;
		ClusterType?: string;
		ClusterVersion?: string;
		EncryptionType?: string;
		EnhancedVpcRouting?: boolean | null;
		MaintenanceTrackName?: string;
		MasterUserPassword?: string;
		NodeType?: string;
		NumberOfNodes?: number | null;
		PubliclyAccessible?: boolean | null;
	}

	/** Changes to the Amazon Redshift cluster that are currently pending. */
	export interface AwsRedshiftClusterPendingModifiedValuesFormProperties {
		AutomatedSnapshotRetentionPeriod: FormControl<number | null | undefined>,
		ClusterIdentifier: FormControl<string | null | undefined>,
		ClusterType: FormControl<string | null | undefined>,
		ClusterVersion: FormControl<string | null | undefined>,
		EncryptionType: FormControl<string | null | undefined>,
		EnhancedVpcRouting: FormControl<boolean | null | undefined>,
		MaintenanceTrackName: FormControl<string | null | undefined>,
		MasterUserPassword: FormControl<string | null | undefined>,
		NodeType: FormControl<string | null | undefined>,
		NumberOfNodes: FormControl<number | null | undefined>,
		PubliclyAccessible: FormControl<boolean | null | undefined>,
	}
	export function CreateAwsRedshiftClusterPendingModifiedValuesFormGroup() {
		return new FormGroup<AwsRedshiftClusterPendingModifiedValuesFormProperties>({
			AutomatedSnapshotRetentionPeriod: new FormControl<number | null | undefined>(undefined),
			ClusterIdentifier: new FormControl<string | null | undefined>(undefined),
			ClusterType: new FormControl<string | null | undefined>(undefined),
			ClusterVersion: new FormControl<string | null | undefined>(undefined),
			EncryptionType: new FormControl<string | null | undefined>(undefined),
			EnhancedVpcRouting: new FormControl<boolean | null | undefined>(undefined),
			MaintenanceTrackName: new FormControl<string | null | undefined>(undefined),
			MasterUserPassword: new FormControl<string | null | undefined>(undefined),
			NodeType: new FormControl<string | null | undefined>(undefined),
			NumberOfNodes: new FormControl<number | null | undefined>(undefined),
			PubliclyAccessible: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Information about the resize operation for the cluster. */
	export interface AwsRedshiftClusterResizeInfo {
		AllowCancelResize?: boolean | null;
		ResizeType?: string;
	}

	/** Information about the resize operation for the cluster. */
	export interface AwsRedshiftClusterResizeInfoFormProperties {
		AllowCancelResize: FormControl<boolean | null | undefined>,
		ResizeType: FormControl<string | null | undefined>,
	}
	export function CreateAwsRedshiftClusterResizeInfoFormGroup() {
		return new FormGroup<AwsRedshiftClusterResizeInfoFormProperties>({
			AllowCancelResize: new FormControl<boolean | null | undefined>(undefined),
			ResizeType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about the status of a cluster restore action. It only applies if the cluster was created by restoring a snapshot. */
	export interface AwsRedshiftClusterRestoreStatus {
		CurrentRestoreRateInMegaBytesPerSecond?: number | null;
		ElapsedTimeInSeconds?: number | null;
		EstimatedTimeToCompletionInSeconds?: number | null;
		ProgressInMegaBytes?: number | null;
		SnapshotSizeInMegaBytes?: number | null;
		Status?: string;
	}

	/** Information about the status of a cluster restore action. It only applies if the cluster was created by restoring a snapshot. */
	export interface AwsRedshiftClusterRestoreStatusFormProperties {
		CurrentRestoreRateInMegaBytesPerSecond: FormControl<number | null | undefined>,
		ElapsedTimeInSeconds: FormControl<number | null | undefined>,
		EstimatedTimeToCompletionInSeconds: FormControl<number | null | undefined>,
		ProgressInMegaBytes: FormControl<number | null | undefined>,
		SnapshotSizeInMegaBytes: FormControl<number | null | undefined>,
		Status: FormControl<string | null | undefined>,
	}
	export function CreateAwsRedshiftClusterRestoreStatusFormGroup() {
		return new FormGroup<AwsRedshiftClusterRestoreStatusFormProperties>({
			CurrentRestoreRateInMegaBytesPerSecond: new FormControl<number | null | undefined>(undefined),
			ElapsedTimeInSeconds: new FormControl<number | null | undefined>(undefined),
			EstimatedTimeToCompletionInSeconds: new FormControl<number | null | undefined>(undefined),
			ProgressInMegaBytes: new FormControl<number | null | undefined>(undefined),
			SnapshotSizeInMegaBytes: new FormControl<number | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A VPC security group that the cluster belongs to, if the cluster is in a VPC. */
	export interface AwsRedshiftClusterVpcSecurityGroup {
		Status?: string;
		VpcSecurityGroupId?: string;
	}

	/** A VPC security group that the cluster belongs to, if the cluster is in a VPC. */
	export interface AwsRedshiftClusterVpcSecurityGroupFormProperties {
		Status: FormControl<string | null | undefined>,
		VpcSecurityGroupId: FormControl<string | null | undefined>,
	}
	export function CreateAwsRedshiftClusterVpcSecurityGroupFormGroup() {
		return new FormGroup<AwsRedshiftClusterVpcSecurityGroupFormProperties>({
			Status: new FormControl<string | null | undefined>(undefined),
			VpcSecurityGroupId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides information about the logging status of the cluster. */
	export interface AwsRedshiftClusterLoggingStatus {
		BucketName?: string;
		LastFailureMessage?: string;
		LastFailureTime?: string;
		LastSuccessfulDeliveryTime?: string;
		LoggingEnabled?: boolean | null;
		S3KeyPrefix?: string;
	}

	/** Provides information about the logging status of the cluster. */
	export interface AwsRedshiftClusterLoggingStatusFormProperties {
		BucketName: FormControl<string | null | undefined>,
		LastFailureMessage: FormControl<string | null | undefined>,
		LastFailureTime: FormControl<string | null | undefined>,
		LastSuccessfulDeliveryTime: FormControl<string | null | undefined>,
		LoggingEnabled: FormControl<boolean | null | undefined>,
		S3KeyPrefix: FormControl<string | null | undefined>,
	}
	export function CreateAwsRedshiftClusterLoggingStatusFormGroup() {
		return new FormGroup<AwsRedshiftClusterLoggingStatusFormProperties>({
			BucketName: new FormControl<string | null | undefined>(undefined),
			LastFailureMessage: new FormControl<string | null | undefined>(undefined),
			LastFailureTime: new FormControl<string | null | undefined>(undefined),
			LastSuccessfulDeliveryTime: new FormControl<string | null | undefined>(undefined),
			LoggingEnabled: new FormControl<boolean | null | undefined>(undefined),
			S3KeyPrefix: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains details about a Classic Load Balancer. */
	export interface AwsElbLoadBalancerDetails {
		AvailabilityZones?: Array<string>;
		BackendServerDescriptions?: Array<AwsElbLoadBalancerBackendServerDescription>;
		CanonicalHostedZoneName?: string;
		CanonicalHostedZoneNameID?: string;
		CreatedTime?: string;
		DnsName?: string;
		HealthCheck?: AwsElbLoadBalancerHealthCheck;
		Instances?: Array<AwsElbLoadBalancerInstance>;
		ListenerDescriptions?: Array<AwsElbLoadBalancerListenerDescription>;
		LoadBalancerAttributes?: AwsElbLoadBalancerAttributes;
		LoadBalancerName?: string;
		Policies?: AwsElbLoadBalancerPolicies;
		Scheme?: string;
		SecurityGroups?: Array<string>;
		SourceSecurityGroup?: AwsElbLoadBalancerSourceSecurityGroup;
		Subnets?: Array<string>;
		VpcId?: string;
	}

	/** Contains details about a Classic Load Balancer. */
	export interface AwsElbLoadBalancerDetailsFormProperties {
		CanonicalHostedZoneName: FormControl<string | null | undefined>,
		CanonicalHostedZoneNameID: FormControl<string | null | undefined>,
		CreatedTime: FormControl<string | null | undefined>,
		DnsName: FormControl<string | null | undefined>,
		LoadBalancerName: FormControl<string | null | undefined>,
		Scheme: FormControl<string | null | undefined>,
		VpcId: FormControl<string | null | undefined>,
	}
	export function CreateAwsElbLoadBalancerDetailsFormGroup() {
		return new FormGroup<AwsElbLoadBalancerDetailsFormProperties>({
			CanonicalHostedZoneName: new FormControl<string | null | undefined>(undefined),
			CanonicalHostedZoneNameID: new FormControl<string | null | undefined>(undefined),
			CreatedTime: new FormControl<string | null | undefined>(undefined),
			DnsName: new FormControl<string | null | undefined>(undefined),
			LoadBalancerName: new FormControl<string | null | undefined>(undefined),
			Scheme: new FormControl<string | null | undefined>(undefined),
			VpcId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides information about the configuration of an EC2 instance for the load balancer. */
	export interface AwsElbLoadBalancerBackendServerDescription {
		InstancePort?: number | null;
		PolicyNames?: Array<string>;
	}

	/** Provides information about the configuration of an EC2 instance for the load balancer. */
	export interface AwsElbLoadBalancerBackendServerDescriptionFormProperties {
		InstancePort: FormControl<number | null | undefined>,
	}
	export function CreateAwsElbLoadBalancerBackendServerDescriptionFormGroup() {
		return new FormGroup<AwsElbLoadBalancerBackendServerDescriptionFormProperties>({
			InstancePort: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Contains information about the health checks that are conducted on the load balancer. */
	export interface AwsElbLoadBalancerHealthCheck {
		HealthyThreshold?: number | null;
		Interval?: number | null;
		Target?: string;
		Timeout?: number | null;
		UnhealthyThreshold?: number | null;
	}

	/** Contains information about the health checks that are conducted on the load balancer. */
	export interface AwsElbLoadBalancerHealthCheckFormProperties {
		HealthyThreshold: FormControl<number | null | undefined>,
		Interval: FormControl<number | null | undefined>,
		Target: FormControl<string | null | undefined>,
		Timeout: FormControl<number | null | undefined>,
		UnhealthyThreshold: FormControl<number | null | undefined>,
	}
	export function CreateAwsElbLoadBalancerHealthCheckFormGroup() {
		return new FormGroup<AwsElbLoadBalancerHealthCheckFormProperties>({
			HealthyThreshold: new FormControl<number | null | undefined>(undefined),
			Interval: new FormControl<number | null | undefined>(undefined),
			Target: new FormControl<string | null | undefined>(undefined),
			Timeout: new FormControl<number | null | undefined>(undefined),
			UnhealthyThreshold: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Provides information about an EC2 instance for a load balancer. */
	export interface AwsElbLoadBalancerInstance {
		InstanceId?: string;
	}

	/** Provides information about an EC2 instance for a load balancer. */
	export interface AwsElbLoadBalancerInstanceFormProperties {
		InstanceId: FormControl<string | null | undefined>,
	}
	export function CreateAwsElbLoadBalancerInstanceFormGroup() {
		return new FormGroup<AwsElbLoadBalancerInstanceFormProperties>({
			InstanceId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Lists the policies that are enabled for a load balancer listener. */
	export interface AwsElbLoadBalancerListenerDescription {
		Listener?: AwsElbLoadBalancerListener;
		PolicyNames?: Array<string>;
	}

	/** Lists the policies that are enabled for a load balancer listener. */
	export interface AwsElbLoadBalancerListenerDescriptionFormProperties {
	}
	export function CreateAwsElbLoadBalancerListenerDescriptionFormGroup() {
		return new FormGroup<AwsElbLoadBalancerListenerDescriptionFormProperties>({
		});

	}


	/** Information about a load balancer listener. */
	export interface AwsElbLoadBalancerListener {
		InstancePort?: number | null;
		InstanceProtocol?: string;
		LoadBalancerPort?: number | null;
		Protocol?: string;
		SslCertificateId?: string;
	}

	/** Information about a load balancer listener. */
	export interface AwsElbLoadBalancerListenerFormProperties {
		InstancePort: FormControl<number | null | undefined>,
		InstanceProtocol: FormControl<string | null | undefined>,
		LoadBalancerPort: FormControl<number | null | undefined>,
		Protocol: FormControl<string | null | undefined>,
		SslCertificateId: FormControl<string | null | undefined>,
	}
	export function CreateAwsElbLoadBalancerListenerFormGroup() {
		return new FormGroup<AwsElbLoadBalancerListenerFormProperties>({
			InstancePort: new FormControl<number | null | undefined>(undefined),
			InstanceProtocol: new FormControl<string | null | undefined>(undefined),
			LoadBalancerPort: new FormControl<number | null | undefined>(undefined),
			Protocol: new FormControl<string | null | undefined>(undefined),
			SslCertificateId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains attributes for the load balancer. */
	export interface AwsElbLoadBalancerAttributes {
		AccessLog?: AwsElbLoadBalancerAccessLog;
		ConnectionDraining?: AwsElbLoadBalancerConnectionDraining;
		ConnectionSettings?: AwsElbLoadBalancerConnectionSettings;
		CrossZoneLoadBalancing?: AwsElbLoadBalancerCrossZoneLoadBalancing;
		AdditionalAttributes?: Array<AwsElbLoadBalancerAdditionalAttribute>;
	}

	/** Contains attributes for the load balancer. */
	export interface AwsElbLoadBalancerAttributesFormProperties {
	}
	export function CreateAwsElbLoadBalancerAttributesFormGroup() {
		return new FormGroup<AwsElbLoadBalancerAttributesFormProperties>({
		});

	}


	/** Contains information about the access log configuration for the load balancer. */
	export interface AwsElbLoadBalancerAccessLog {
		EmitInterval?: number | null;
		Enabled?: boolean | null;
		S3BucketName?: string;
		S3BucketPrefix?: string;
	}

	/** Contains information about the access log configuration for the load balancer. */
	export interface AwsElbLoadBalancerAccessLogFormProperties {
		EmitInterval: FormControl<number | null | undefined>,
		Enabled: FormControl<boolean | null | undefined>,
		S3BucketName: FormControl<string | null | undefined>,
		S3BucketPrefix: FormControl<string | null | undefined>,
	}
	export function CreateAwsElbLoadBalancerAccessLogFormGroup() {
		return new FormGroup<AwsElbLoadBalancerAccessLogFormProperties>({
			EmitInterval: new FormControl<number | null | undefined>(undefined),
			Enabled: new FormControl<boolean | null | undefined>(undefined),
			S3BucketName: new FormControl<string | null | undefined>(undefined),
			S3BucketPrefix: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information about the connection draining configuration for the load balancer. */
	export interface AwsElbLoadBalancerConnectionDraining {
		Enabled?: boolean | null;
		Timeout?: number | null;
	}

	/** Contains information about the connection draining configuration for the load balancer. */
	export interface AwsElbLoadBalancerConnectionDrainingFormProperties {
		Enabled: FormControl<boolean | null | undefined>,
		Timeout: FormControl<number | null | undefined>,
	}
	export function CreateAwsElbLoadBalancerConnectionDrainingFormGroup() {
		return new FormGroup<AwsElbLoadBalancerConnectionDrainingFormProperties>({
			Enabled: new FormControl<boolean | null | undefined>(undefined),
			Timeout: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Contains connection settings for the load balancer. */
	export interface AwsElbLoadBalancerConnectionSettings {
		IdleTimeout?: number | null;
	}

	/** Contains connection settings for the load balancer. */
	export interface AwsElbLoadBalancerConnectionSettingsFormProperties {
		IdleTimeout: FormControl<number | null | undefined>,
	}
	export function CreateAwsElbLoadBalancerConnectionSettingsFormGroup() {
		return new FormGroup<AwsElbLoadBalancerConnectionSettingsFormProperties>({
			IdleTimeout: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Contains cross-zone load balancing settings for the load balancer. */
	export interface AwsElbLoadBalancerCrossZoneLoadBalancing {
		Enabled?: boolean | null;
	}

	/** Contains cross-zone load balancing settings for the load balancer. */
	export interface AwsElbLoadBalancerCrossZoneLoadBalancingFormProperties {
		Enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateAwsElbLoadBalancerCrossZoneLoadBalancingFormGroup() {
		return new FormGroup<AwsElbLoadBalancerCrossZoneLoadBalancingFormProperties>({
			Enabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Provides information about additional attributes for the load balancer. */
	export interface AwsElbLoadBalancerAdditionalAttribute {
		Key?: string;
		Value?: string;
	}

	/** Provides information about additional attributes for the load balancer. */
	export interface AwsElbLoadBalancerAdditionalAttributeFormProperties {
		Key: FormControl<string | null | undefined>,
		Value: FormControl<string | null | undefined>,
	}
	export function CreateAwsElbLoadBalancerAdditionalAttributeFormGroup() {
		return new FormGroup<AwsElbLoadBalancerAdditionalAttributeFormProperties>({
			Key: new FormControl<string | null | undefined>(undefined),
			Value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information about the policies for a load balancer. */
	export interface AwsElbLoadBalancerPolicies {
		AppCookieStickinessPolicies?: Array<AwsElbAppCookieStickinessPolicy>;
		LbCookieStickinessPolicies?: Array<AwsElbLbCookieStickinessPolicy>;
		OtherPolicies?: Array<string>;
	}

	/** Contains information about the policies for a load balancer. */
	export interface AwsElbLoadBalancerPoliciesFormProperties {
	}
	export function CreateAwsElbLoadBalancerPoliciesFormGroup() {
		return new FormGroup<AwsElbLoadBalancerPoliciesFormProperties>({
		});

	}


	/** Contains information about a stickiness policy that was created using <code>CreateAppCookieStickinessPolicy</code>. */
	export interface AwsElbAppCookieStickinessPolicy {
		CookieName?: string;
		PolicyName?: string;
	}

	/** Contains information about a stickiness policy that was created using <code>CreateAppCookieStickinessPolicy</code>. */
	export interface AwsElbAppCookieStickinessPolicyFormProperties {
		CookieName: FormControl<string | null | undefined>,
		PolicyName: FormControl<string | null | undefined>,
	}
	export function CreateAwsElbAppCookieStickinessPolicyFormGroup() {
		return new FormGroup<AwsElbAppCookieStickinessPolicyFormProperties>({
			CookieName: new FormControl<string | null | undefined>(undefined),
			PolicyName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information about a stickiness policy that was created using <code>CreateLBCookieStickinessPolicy</code>. */
	export interface AwsElbLbCookieStickinessPolicy {
		CookieExpirationPeriod?: number | null;
		PolicyName?: string;
	}

	/** Contains information about a stickiness policy that was created using <code>CreateLBCookieStickinessPolicy</code>. */
	export interface AwsElbLbCookieStickinessPolicyFormProperties {
		CookieExpirationPeriod: FormControl<number | null | undefined>,
		PolicyName: FormControl<string | null | undefined>,
	}
	export function CreateAwsElbLbCookieStickinessPolicyFormGroup() {
		return new FormGroup<AwsElbLbCookieStickinessPolicyFormProperties>({
			CookieExpirationPeriod: new FormControl<number | null | undefined>(undefined),
			PolicyName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information about the security group for the load balancer. */
	export interface AwsElbLoadBalancerSourceSecurityGroup {
		GroupName?: string;
		OwnerAlias?: string;
	}

	/** Contains information about the security group for the load balancer. */
	export interface AwsElbLoadBalancerSourceSecurityGroupFormProperties {
		GroupName: FormControl<string | null | undefined>,
		OwnerAlias: FormControl<string | null | undefined>,
	}
	export function CreateAwsElbLoadBalancerSourceSecurityGroupFormGroup() {
		return new FormGroup<AwsElbLoadBalancerSourceSecurityGroupFormProperties>({
			GroupName: new FormControl<string | null | undefined>(undefined),
			OwnerAlias: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains details about an IAM group. */
	export interface AwsIamGroupDetails {
		AttachedManagedPolicies?: Array<AwsIamAttachedManagedPolicy>;
		CreateDate?: string;
		GroupId?: string;
		GroupName?: string;
		GroupPolicyList?: Array<AwsIamGroupPolicy>;
		Path?: string;
	}

	/** Contains details about an IAM group. */
	export interface AwsIamGroupDetailsFormProperties {
		CreateDate: FormControl<string | null | undefined>,
		GroupId: FormControl<string | null | undefined>,
		GroupName: FormControl<string | null | undefined>,
		Path: FormControl<string | null | undefined>,
	}
	export function CreateAwsIamGroupDetailsFormGroup() {
		return new FormGroup<AwsIamGroupDetailsFormProperties>({
			CreateDate: new FormControl<string | null | undefined>(undefined),
			GroupId: new FormControl<string | null | undefined>(undefined),
			GroupName: new FormControl<string | null | undefined>(undefined),
			Path: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A managed policy that is attached to the IAM group. */
	export interface AwsIamGroupPolicy {
		PolicyName?: string;
	}

	/** A managed policy that is attached to the IAM group. */
	export interface AwsIamGroupPolicyFormProperties {
		PolicyName: FormControl<string | null | undefined>,
	}
	export function CreateAwsIamGroupPolicyFormGroup() {
		return new FormGroup<AwsIamGroupPolicyFormProperties>({
			PolicyName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information about an IAM role, including all of the role's policies. */
	export interface AwsIamRoleDetails {
		AssumeRolePolicyDocument?: string;
		AttachedManagedPolicies?: Array<AwsIamAttachedManagedPolicy>;
		CreateDate?: string;
		InstanceProfileList?: Array<AwsIamInstanceProfile>;

		/** Information about the policy used to set the permissions boundary for an IAM principal. */
		PermissionsBoundary?: AwsIamPermissionsBoundary;
		RoleId?: string;
		RoleName?: string;
		RolePolicyList?: Array<AwsIamRolePolicy>;
		MaxSessionDuration?: number | null;
		Path?: string;
	}

	/** Contains information about an IAM role, including all of the role's policies. */
	export interface AwsIamRoleDetailsFormProperties {
		AssumeRolePolicyDocument: FormControl<string | null | undefined>,
		CreateDate: FormControl<string | null | undefined>,
		RoleId: FormControl<string | null | undefined>,
		RoleName: FormControl<string | null | undefined>,
		MaxSessionDuration: FormControl<number | null | undefined>,
		Path: FormControl<string | null | undefined>,
	}
	export function CreateAwsIamRoleDetailsFormGroup() {
		return new FormGroup<AwsIamRoleDetailsFormProperties>({
			AssumeRolePolicyDocument: new FormControl<string | null | undefined>(undefined),
			CreateDate: new FormControl<string | null | undefined>(undefined),
			RoleId: new FormControl<string | null | undefined>(undefined),
			RoleName: new FormControl<string | null | undefined>(undefined),
			MaxSessionDuration: new FormControl<number | null | undefined>(undefined),
			Path: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about an instance profile. */
	export interface AwsIamInstanceProfile {
		Arn?: string;
		CreateDate?: string;
		InstanceProfileId?: string;
		InstanceProfileName?: string;
		Path?: string;
		Roles?: Array<AwsIamInstanceProfileRole>;
	}

	/** Information about an instance profile. */
	export interface AwsIamInstanceProfileFormProperties {
		Arn: FormControl<string | null | undefined>,
		CreateDate: FormControl<string | null | undefined>,
		InstanceProfileId: FormControl<string | null | undefined>,
		InstanceProfileName: FormControl<string | null | undefined>,
		Path: FormControl<string | null | undefined>,
	}
	export function CreateAwsIamInstanceProfileFormGroup() {
		return new FormGroup<AwsIamInstanceProfileFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			CreateDate: new FormControl<string | null | undefined>(undefined),
			InstanceProfileId: new FormControl<string | null | undefined>(undefined),
			InstanceProfileName: new FormControl<string | null | undefined>(undefined),
			Path: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about a role associated with an instance profile. */
	export interface AwsIamInstanceProfileRole {
		Arn?: string;
		AssumeRolePolicyDocument?: string;
		CreateDate?: string;
		Path?: string;
		RoleId?: string;
		RoleName?: string;
	}

	/** Information about a role associated with an instance profile. */
	export interface AwsIamInstanceProfileRoleFormProperties {
		Arn: FormControl<string | null | undefined>,
		AssumeRolePolicyDocument: FormControl<string | null | undefined>,
		CreateDate: FormControl<string | null | undefined>,
		Path: FormControl<string | null | undefined>,
		RoleId: FormControl<string | null | undefined>,
		RoleName: FormControl<string | null | undefined>,
	}
	export function CreateAwsIamInstanceProfileRoleFormGroup() {
		return new FormGroup<AwsIamInstanceProfileRoleFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			AssumeRolePolicyDocument: new FormControl<string | null | undefined>(undefined),
			CreateDate: new FormControl<string | null | undefined>(undefined),
			Path: new FormControl<string | null | undefined>(undefined),
			RoleId: new FormControl<string | null | undefined>(undefined),
			RoleName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An inline policy that is embedded in the role. */
	export interface AwsIamRolePolicy {
		PolicyName?: string;
	}

	/** An inline policy that is embedded in the role. */
	export interface AwsIamRolePolicyFormProperties {
		PolicyName: FormControl<string | null | undefined>,
	}
	export function CreateAwsIamRolePolicyFormGroup() {
		return new FormGroup<AwsIamRolePolicyFormProperties>({
			PolicyName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains metadata about an KMS key. */
	export interface AwsKmsKeyDetails {
		AWSAccountId?: string;
		CreationDate?: number | null;
		KeyId?: string;
		KeyManager?: string;
		KeyState?: string;
		Origin?: string;
		Description?: string;
		KeyRotationStatus?: boolean | null;
	}

	/** Contains metadata about an KMS key. */
	export interface AwsKmsKeyDetailsFormProperties {
		AWSAccountId: FormControl<string | null | undefined>,
		CreationDate: FormControl<number | null | undefined>,
		KeyId: FormControl<string | null | undefined>,
		KeyManager: FormControl<string | null | undefined>,
		KeyState: FormControl<string | null | undefined>,
		Origin: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		KeyRotationStatus: FormControl<boolean | null | undefined>,
	}
	export function CreateAwsKmsKeyDetailsFormGroup() {
		return new FormGroup<AwsKmsKeyDetailsFormProperties>({
			AWSAccountId: new FormControl<string | null | undefined>(undefined),
			CreationDate: new FormControl<number | null | undefined>(undefined),
			KeyId: new FormControl<string | null | undefined>(undefined),
			KeyManager: new FormControl<string | null | undefined>(undefined),
			KeyState: new FormControl<string | null | undefined>(undefined),
			Origin: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			KeyRotationStatus: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Details about an Lambda function's configuration. */
	export interface AwsLambdaFunctionDetails {
		Code?: AwsLambdaFunctionCode;
		CodeSha256?: string;
		DeadLetterConfig?: AwsLambdaFunctionDeadLetterConfig;
		Environment?: AwsLambdaFunctionEnvironment;
		FunctionName?: string;
		Handler?: string;
		KmsKeyArn?: string;
		LastModified?: string;
		Layers?: Array<AwsLambdaFunctionLayer>;
		MasterArn?: string;
		MemorySize?: number | null;
		RevisionId?: string;
		Role?: string;
		Runtime?: string;
		Timeout?: number | null;
		TracingConfig?: AwsLambdaFunctionTracingConfig;
		VpcConfig?: AwsLambdaFunctionVpcConfig;
		Version?: string;
		Architectures?: Array<string>;
		PackageType?: string;
	}

	/** Details about an Lambda function's configuration. */
	export interface AwsLambdaFunctionDetailsFormProperties {
		CodeSha256: FormControl<string | null | undefined>,
		FunctionName: FormControl<string | null | undefined>,
		Handler: FormControl<string | null | undefined>,
		KmsKeyArn: FormControl<string | null | undefined>,
		LastModified: FormControl<string | null | undefined>,
		MasterArn: FormControl<string | null | undefined>,
		MemorySize: FormControl<number | null | undefined>,
		RevisionId: FormControl<string | null | undefined>,
		Role: FormControl<string | null | undefined>,
		Runtime: FormControl<string | null | undefined>,
		Timeout: FormControl<number | null | undefined>,
		Version: FormControl<string | null | undefined>,
		PackageType: FormControl<string | null | undefined>,
	}
	export function CreateAwsLambdaFunctionDetailsFormGroup() {
		return new FormGroup<AwsLambdaFunctionDetailsFormProperties>({
			CodeSha256: new FormControl<string | null | undefined>(undefined),
			FunctionName: new FormControl<string | null | undefined>(undefined),
			Handler: new FormControl<string | null | undefined>(undefined),
			KmsKeyArn: new FormControl<string | null | undefined>(undefined),
			LastModified: new FormControl<string | null | undefined>(undefined),
			MasterArn: new FormControl<string | null | undefined>(undefined),
			MemorySize: new FormControl<number | null | undefined>(undefined),
			RevisionId: new FormControl<string | null | undefined>(undefined),
			Role: new FormControl<string | null | undefined>(undefined),
			Runtime: new FormControl<string | null | undefined>(undefined),
			Timeout: new FormControl<number | null | undefined>(undefined),
			Version: new FormControl<string | null | undefined>(undefined),
			PackageType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The code for the Lambda function. You can specify either an object in Amazon S3, or upload a deployment package directly. */
	export interface AwsLambdaFunctionCode {
		S3Bucket?: string;
		S3Key?: string;
		S3ObjectVersion?: string;
		ZipFile?: string;
	}

	/** The code for the Lambda function. You can specify either an object in Amazon S3, or upload a deployment package directly. */
	export interface AwsLambdaFunctionCodeFormProperties {
		S3Bucket: FormControl<string | null | undefined>,
		S3Key: FormControl<string | null | undefined>,
		S3ObjectVersion: FormControl<string | null | undefined>,
		ZipFile: FormControl<string | null | undefined>,
	}
	export function CreateAwsLambdaFunctionCodeFormGroup() {
		return new FormGroup<AwsLambdaFunctionCodeFormProperties>({
			S3Bucket: new FormControl<string | null | undefined>(undefined),
			S3Key: new FormControl<string | null | undefined>(undefined),
			S3ObjectVersion: new FormControl<string | null | undefined>(undefined),
			ZipFile: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The dead-letter queue for failed asynchronous invocations. */
	export interface AwsLambdaFunctionDeadLetterConfig {
		TargetArn?: string;
	}

	/** The dead-letter queue for failed asynchronous invocations. */
	export interface AwsLambdaFunctionDeadLetterConfigFormProperties {
		TargetArn: FormControl<string | null | undefined>,
	}
	export function CreateAwsLambdaFunctionDeadLetterConfigFormGroup() {
		return new FormGroup<AwsLambdaFunctionDeadLetterConfigFormProperties>({
			TargetArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A function's environment variable settings. */
	export interface AwsLambdaFunctionEnvironment {
		Variables?: FieldMap;
		Error?: AwsLambdaFunctionEnvironmentError;
	}

	/** A function's environment variable settings. */
	export interface AwsLambdaFunctionEnvironmentFormProperties {
	}
	export function CreateAwsLambdaFunctionEnvironmentFormGroup() {
		return new FormGroup<AwsLambdaFunctionEnvironmentFormProperties>({
		});

	}


	/** Error messages for environment variables that could not be applied. */
	export interface AwsLambdaFunctionEnvironmentError {
		ErrorCode?: string;
		Message?: string;
	}

	/** Error messages for environment variables that could not be applied. */
	export interface AwsLambdaFunctionEnvironmentErrorFormProperties {
		ErrorCode: FormControl<string | null | undefined>,
		Message: FormControl<string | null | undefined>,
	}
	export function CreateAwsLambdaFunctionEnvironmentErrorFormGroup() {
		return new FormGroup<AwsLambdaFunctionEnvironmentErrorFormProperties>({
			ErrorCode: new FormControl<string | null | undefined>(undefined),
			Message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An Lambda layer. */
	export interface AwsLambdaFunctionLayer {
		Arn?: string;
		CodeSize?: number | null;
	}

	/** An Lambda layer. */
	export interface AwsLambdaFunctionLayerFormProperties {
		Arn: FormControl<string | null | undefined>,
		CodeSize: FormControl<number | null | undefined>,
	}
	export function CreateAwsLambdaFunctionLayerFormGroup() {
		return new FormGroup<AwsLambdaFunctionLayerFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			CodeSize: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The function's X-Ray tracing configuration. */
	export interface AwsLambdaFunctionTracingConfig {
		Mode?: string;
	}

	/** The function's X-Ray tracing configuration. */
	export interface AwsLambdaFunctionTracingConfigFormProperties {
		Mode: FormControl<string | null | undefined>,
	}
	export function CreateAwsLambdaFunctionTracingConfigFormGroup() {
		return new FormGroup<AwsLambdaFunctionTracingConfigFormProperties>({
			Mode: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The VPC security groups and subnets that are attached to a Lambda function. */
	export interface AwsLambdaFunctionVpcConfig {
		SecurityGroupIds?: Array<string>;
		SubnetIds?: Array<string>;
		VpcId?: string;
	}

	/** The VPC security groups and subnets that are attached to a Lambda function. */
	export interface AwsLambdaFunctionVpcConfigFormProperties {
		VpcId: FormControl<string | null | undefined>,
	}
	export function CreateAwsLambdaFunctionVpcConfigFormGroup() {
		return new FormGroup<AwsLambdaFunctionVpcConfigFormProperties>({
			VpcId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details about a Lambda layer version. */
	export interface AwsLambdaLayerVersionDetails {
		Version?: number | null;
		CompatibleRuntimes?: Array<string>;
		CreatedDate?: string;
	}

	/** Details about a Lambda layer version. */
	export interface AwsLambdaLayerVersionDetailsFormProperties {
		Version: FormControl<number | null | undefined>,
		CreatedDate: FormControl<string | null | undefined>,
	}
	export function CreateAwsLambdaLayerVersionDetailsFormGroup() {
		return new FormGroup<AwsLambdaLayerVersionDetailsFormProperties>({
			Version: new FormControl<number | null | undefined>(undefined),
			CreatedDate: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains the details of an Amazon RDS DB instance. */
	export interface AwsRdsDbInstanceDetails {
		AssociatedRoles?: Array<AwsRdsDbInstanceAssociatedRole>;
		CACertificateIdentifier?: string;
		DBClusterIdentifier?: string;
		DBInstanceIdentifier?: string;
		DBInstanceClass?: string;
		DbInstancePort?: number | null;
		DbiResourceId?: string;
		DBName?: string;
		DeletionProtection?: boolean | null;
		Endpoint?: AwsRdsDbInstanceEndpoint;
		Engine?: string;
		EngineVersion?: string;
		IAMDatabaseAuthenticationEnabled?: boolean | null;
		InstanceCreateTime?: string;
		KmsKeyId?: string;
		PubliclyAccessible?: boolean | null;
		StorageEncrypted?: boolean | null;
		TdeCredentialArn?: string;
		VpcSecurityGroups?: Array<AwsRdsDbInstanceVpcSecurityGroup>;
		MultiAz?: boolean | null;
		EnhancedMonitoringResourceArn?: string;
		DbInstanceStatus?: string;
		MasterUsername?: string;
		AllocatedStorage?: number | null;
		PreferredBackupWindow?: string;
		BackupRetentionPeriod?: number | null;
		DbSecurityGroups?: Array<string>;
		DbParameterGroups?: Array<AwsRdsDbParameterGroup>;
		AvailabilityZone?: string;
		DbSubnetGroup?: AwsRdsDbSubnetGroup;
		PreferredMaintenanceWindow?: string;
		PendingModifiedValues?: AwsRdsDbPendingModifiedValues;
		LatestRestorableTime?: string;
		AutoMinorVersionUpgrade?: boolean | null;
		ReadReplicaSourceDBInstanceIdentifier?: string;
		ReadReplicaDBInstanceIdentifiers?: Array<string>;
		ReadReplicaDBClusterIdentifiers?: Array<string>;
		LicenseModel?: string;
		Iops?: number | null;
		OptionGroupMemberships?: Array<AwsRdsDbOptionGroupMembership>;
		CharacterSetName?: string;
		SecondaryAvailabilityZone?: string;
		StatusInfos?: Array<AwsRdsDbStatusInfo>;
		StorageType?: string;
		DomainMemberships?: Array<AwsRdsDbDomainMembership>;
		CopyTagsToSnapshot?: boolean | null;
		MonitoringInterval?: number | null;
		MonitoringRoleArn?: string;
		PromotionTier?: number | null;
		Timezone?: string;
		PerformanceInsightsEnabled?: boolean | null;
		PerformanceInsightsKmsKeyId?: string;
		PerformanceInsightsRetentionPeriod?: number | null;
		EnabledCloudWatchLogsExports?: Array<string>;
		ProcessorFeatures?: Array<AwsRdsDbProcessorFeature>;

		/** Specifies the connection endpoint. */
		ListenerEndpoint?: AwsRdsDbInstanceEndpoint;
		MaxAllocatedStorage?: number | null;
	}

	/** Contains the details of an Amazon RDS DB instance. */
	export interface AwsRdsDbInstanceDetailsFormProperties {
		CACertificateIdentifier: FormControl<string | null | undefined>,
		DBClusterIdentifier: FormControl<string | null | undefined>,
		DBInstanceIdentifier: FormControl<string | null | undefined>,
		DBInstanceClass: FormControl<string | null | undefined>,
		DbInstancePort: FormControl<number | null | undefined>,
		DbiResourceId: FormControl<string | null | undefined>,
		DBName: FormControl<string | null | undefined>,
		DeletionProtection: FormControl<boolean | null | undefined>,
		Engine: FormControl<string | null | undefined>,
		EngineVersion: FormControl<string | null | undefined>,
		IAMDatabaseAuthenticationEnabled: FormControl<boolean | null | undefined>,
		InstanceCreateTime: FormControl<string | null | undefined>,
		KmsKeyId: FormControl<string | null | undefined>,
		PubliclyAccessible: FormControl<boolean | null | undefined>,
		StorageEncrypted: FormControl<boolean | null | undefined>,
		TdeCredentialArn: FormControl<string | null | undefined>,
		MultiAz: FormControl<boolean | null | undefined>,
		EnhancedMonitoringResourceArn: FormControl<string | null | undefined>,
		DbInstanceStatus: FormControl<string | null | undefined>,
		MasterUsername: FormControl<string | null | undefined>,
		AllocatedStorage: FormControl<number | null | undefined>,
		PreferredBackupWindow: FormControl<string | null | undefined>,
		BackupRetentionPeriod: FormControl<number | null | undefined>,
		AvailabilityZone: FormControl<string | null | undefined>,
		PreferredMaintenanceWindow: FormControl<string | null | undefined>,
		LatestRestorableTime: FormControl<string | null | undefined>,
		AutoMinorVersionUpgrade: FormControl<boolean | null | undefined>,
		ReadReplicaSourceDBInstanceIdentifier: FormControl<string | null | undefined>,
		LicenseModel: FormControl<string | null | undefined>,
		Iops: FormControl<number | null | undefined>,
		CharacterSetName: FormControl<string | null | undefined>,
		SecondaryAvailabilityZone: FormControl<string | null | undefined>,
		StorageType: FormControl<string | null | undefined>,
		CopyTagsToSnapshot: FormControl<boolean | null | undefined>,
		MonitoringInterval: FormControl<number | null | undefined>,
		MonitoringRoleArn: FormControl<string | null | undefined>,
		PromotionTier: FormControl<number | null | undefined>,
		Timezone: FormControl<string | null | undefined>,
		PerformanceInsightsEnabled: FormControl<boolean | null | undefined>,
		PerformanceInsightsKmsKeyId: FormControl<string | null | undefined>,
		PerformanceInsightsRetentionPeriod: FormControl<number | null | undefined>,
		MaxAllocatedStorage: FormControl<number | null | undefined>,
	}
	export function CreateAwsRdsDbInstanceDetailsFormGroup() {
		return new FormGroup<AwsRdsDbInstanceDetailsFormProperties>({
			CACertificateIdentifier: new FormControl<string | null | undefined>(undefined),
			DBClusterIdentifier: new FormControl<string | null | undefined>(undefined),
			DBInstanceIdentifier: new FormControl<string | null | undefined>(undefined),
			DBInstanceClass: new FormControl<string | null | undefined>(undefined),
			DbInstancePort: new FormControl<number | null | undefined>(undefined),
			DbiResourceId: new FormControl<string | null | undefined>(undefined),
			DBName: new FormControl<string | null | undefined>(undefined),
			DeletionProtection: new FormControl<boolean | null | undefined>(undefined),
			Engine: new FormControl<string | null | undefined>(undefined),
			EngineVersion: new FormControl<string | null | undefined>(undefined),
			IAMDatabaseAuthenticationEnabled: new FormControl<boolean | null | undefined>(undefined),
			InstanceCreateTime: new FormControl<string | null | undefined>(undefined),
			KmsKeyId: new FormControl<string | null | undefined>(undefined),
			PubliclyAccessible: new FormControl<boolean | null | undefined>(undefined),
			StorageEncrypted: new FormControl<boolean | null | undefined>(undefined),
			TdeCredentialArn: new FormControl<string | null | undefined>(undefined),
			MultiAz: new FormControl<boolean | null | undefined>(undefined),
			EnhancedMonitoringResourceArn: new FormControl<string | null | undefined>(undefined),
			DbInstanceStatus: new FormControl<string | null | undefined>(undefined),
			MasterUsername: new FormControl<string | null | undefined>(undefined),
			AllocatedStorage: new FormControl<number | null | undefined>(undefined),
			PreferredBackupWindow: new FormControl<string | null | undefined>(undefined),
			BackupRetentionPeriod: new FormControl<number | null | undefined>(undefined),
			AvailabilityZone: new FormControl<string | null | undefined>(undefined),
			PreferredMaintenanceWindow: new FormControl<string | null | undefined>(undefined),
			LatestRestorableTime: new FormControl<string | null | undefined>(undefined),
			AutoMinorVersionUpgrade: new FormControl<boolean | null | undefined>(undefined),
			ReadReplicaSourceDBInstanceIdentifier: new FormControl<string | null | undefined>(undefined),
			LicenseModel: new FormControl<string | null | undefined>(undefined),
			Iops: new FormControl<number | null | undefined>(undefined),
			CharacterSetName: new FormControl<string | null | undefined>(undefined),
			SecondaryAvailabilityZone: new FormControl<string | null | undefined>(undefined),
			StorageType: new FormControl<string | null | undefined>(undefined),
			CopyTagsToSnapshot: new FormControl<boolean | null | undefined>(undefined),
			MonitoringInterval: new FormControl<number | null | undefined>(undefined),
			MonitoringRoleArn: new FormControl<string | null | undefined>(undefined),
			PromotionTier: new FormControl<number | null | undefined>(undefined),
			Timezone: new FormControl<string | null | undefined>(undefined),
			PerformanceInsightsEnabled: new FormControl<boolean | null | undefined>(undefined),
			PerformanceInsightsKmsKeyId: new FormControl<string | null | undefined>(undefined),
			PerformanceInsightsRetentionPeriod: new FormControl<number | null | undefined>(undefined),
			MaxAllocatedStorage: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** An IAM role associated with the DB instance. */
	export interface AwsRdsDbInstanceAssociatedRole {
		RoleArn?: string;
		FeatureName?: string;
		Status?: string;
	}

	/** An IAM role associated with the DB instance. */
	export interface AwsRdsDbInstanceAssociatedRoleFormProperties {
		RoleArn: FormControl<string | null | undefined>,
		FeatureName: FormControl<string | null | undefined>,
		Status: FormControl<string | null | undefined>,
	}
	export function CreateAwsRdsDbInstanceAssociatedRoleFormGroup() {
		return new FormGroup<AwsRdsDbInstanceAssociatedRoleFormProperties>({
			RoleArn: new FormControl<string | null | undefined>(undefined),
			FeatureName: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies the connection endpoint. */
	export interface AwsRdsDbInstanceEndpoint {
		Address?: string;
		Port?: number | null;
		HostedZoneId?: string;
	}

	/** Specifies the connection endpoint. */
	export interface AwsRdsDbInstanceEndpointFormProperties {
		Address: FormControl<string | null | undefined>,
		Port: FormControl<number | null | undefined>,
		HostedZoneId: FormControl<string | null | undefined>,
	}
	export function CreateAwsRdsDbInstanceEndpointFormGroup() {
		return new FormGroup<AwsRdsDbInstanceEndpointFormProperties>({
			Address: new FormControl<string | null | undefined>(undefined),
			Port: new FormControl<number | null | undefined>(undefined),
			HostedZoneId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A VPC security groups that the DB instance belongs to. */
	export interface AwsRdsDbInstanceVpcSecurityGroup {
		VpcSecurityGroupId?: string;
		Status?: string;
	}

	/** A VPC security groups that the DB instance belongs to. */
	export interface AwsRdsDbInstanceVpcSecurityGroupFormProperties {
		VpcSecurityGroupId: FormControl<string | null | undefined>,
		Status: FormControl<string | null | undefined>,
	}
	export function CreateAwsRdsDbInstanceVpcSecurityGroupFormGroup() {
		return new FormGroup<AwsRdsDbInstanceVpcSecurityGroupFormProperties>({
			VpcSecurityGroupId: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides information about a parameter group for a DB instance. */
	export interface AwsRdsDbParameterGroup {
		DbParameterGroupName?: string;
		ParameterApplyStatus?: string;
	}

	/** Provides information about a parameter group for a DB instance. */
	export interface AwsRdsDbParameterGroupFormProperties {
		DbParameterGroupName: FormControl<string | null | undefined>,
		ParameterApplyStatus: FormControl<string | null | undefined>,
	}
	export function CreateAwsRdsDbParameterGroupFormGroup() {
		return new FormGroup<AwsRdsDbParameterGroupFormProperties>({
			DbParameterGroupName: new FormControl<string | null | undefined>(undefined),
			ParameterApplyStatus: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about the subnet group for the database instance. */
	export interface AwsRdsDbSubnetGroup {
		DbSubnetGroupName?: string;
		DbSubnetGroupDescription?: string;
		VpcId?: string;
		SubnetGroupStatus?: string;
		Subnets?: Array<AwsRdsDbSubnetGroupSubnet>;
		DbSubnetGroupArn?: string;
	}

	/** Information about the subnet group for the database instance. */
	export interface AwsRdsDbSubnetGroupFormProperties {
		DbSubnetGroupName: FormControl<string | null | undefined>,
		DbSubnetGroupDescription: FormControl<string | null | undefined>,
		VpcId: FormControl<string | null | undefined>,
		SubnetGroupStatus: FormControl<string | null | undefined>,
		DbSubnetGroupArn: FormControl<string | null | undefined>,
	}
	export function CreateAwsRdsDbSubnetGroupFormGroup() {
		return new FormGroup<AwsRdsDbSubnetGroupFormProperties>({
			DbSubnetGroupName: new FormControl<string | null | undefined>(undefined),
			DbSubnetGroupDescription: new FormControl<string | null | undefined>(undefined),
			VpcId: new FormControl<string | null | undefined>(undefined),
			SubnetGroupStatus: new FormControl<string | null | undefined>(undefined),
			DbSubnetGroupArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about a subnet in a subnet group. */
	export interface AwsRdsDbSubnetGroupSubnet {
		SubnetIdentifier?: string;
		SubnetAvailabilityZone?: AwsRdsDbSubnetGroupSubnetAvailabilityZone;
		SubnetStatus?: string;
	}

	/** Information about a subnet in a subnet group. */
	export interface AwsRdsDbSubnetGroupSubnetFormProperties {
		SubnetIdentifier: FormControl<string | null | undefined>,
		SubnetStatus: FormControl<string | null | undefined>,
	}
	export function CreateAwsRdsDbSubnetGroupSubnetFormGroup() {
		return new FormGroup<AwsRdsDbSubnetGroupSubnetFormProperties>({
			SubnetIdentifier: new FormControl<string | null | undefined>(undefined),
			SubnetStatus: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An Availability Zone for a subnet in a subnet group. */
	export interface AwsRdsDbSubnetGroupSubnetAvailabilityZone {
		Name?: string;
	}

	/** An Availability Zone for a subnet in a subnet group. */
	export interface AwsRdsDbSubnetGroupSubnetAvailabilityZoneFormProperties {
		Name: FormControl<string | null | undefined>,
	}
	export function CreateAwsRdsDbSubnetGroupSubnetAvailabilityZoneFormGroup() {
		return new FormGroup<AwsRdsDbSubnetGroupSubnetAvailabilityZoneFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Changes to a DB instance that are currently pending. */
	export interface AwsRdsDbPendingModifiedValues {
		DbInstanceClass?: string;
		AllocatedStorage?: number | null;
		MasterUserPassword?: string;
		Port?: number | null;
		BackupRetentionPeriod?: number | null;
		MultiAZ?: boolean | null;
		EngineVersion?: string;
		LicenseModel?: string;
		Iops?: number | null;
		DbInstanceIdentifier?: string;
		StorageType?: string;
		CaCertificateIdentifier?: string;
		DbSubnetGroupName?: string;
		PendingCloudWatchLogsExports?: AwsRdsPendingCloudWatchLogsExports;
		ProcessorFeatures?: Array<AwsRdsDbProcessorFeature>;
	}

	/** Changes to a DB instance that are currently pending. */
	export interface AwsRdsDbPendingModifiedValuesFormProperties {
		DbInstanceClass: FormControl<string | null | undefined>,
		AllocatedStorage: FormControl<number | null | undefined>,
		MasterUserPassword: FormControl<string | null | undefined>,
		Port: FormControl<number | null | undefined>,
		BackupRetentionPeriod: FormControl<number | null | undefined>,
		MultiAZ: FormControl<boolean | null | undefined>,
		EngineVersion: FormControl<string | null | undefined>,
		LicenseModel: FormControl<string | null | undefined>,
		Iops: FormControl<number | null | undefined>,
		DbInstanceIdentifier: FormControl<string | null | undefined>,
		StorageType: FormControl<string | null | undefined>,
		CaCertificateIdentifier: FormControl<string | null | undefined>,
		DbSubnetGroupName: FormControl<string | null | undefined>,
	}
	export function CreateAwsRdsDbPendingModifiedValuesFormGroup() {
		return new FormGroup<AwsRdsDbPendingModifiedValuesFormProperties>({
			DbInstanceClass: new FormControl<string | null | undefined>(undefined),
			AllocatedStorage: new FormControl<number | null | undefined>(undefined),
			MasterUserPassword: new FormControl<string | null | undefined>(undefined),
			Port: new FormControl<number | null | undefined>(undefined),
			BackupRetentionPeriod: new FormControl<number | null | undefined>(undefined),
			MultiAZ: new FormControl<boolean | null | undefined>(undefined),
			EngineVersion: new FormControl<string | null | undefined>(undefined),
			LicenseModel: new FormControl<string | null | undefined>(undefined),
			Iops: new FormControl<number | null | undefined>(undefined),
			DbInstanceIdentifier: new FormControl<string | null | undefined>(undefined),
			StorageType: new FormControl<string | null | undefined>(undefined),
			CaCertificateIdentifier: new FormControl<string | null | undefined>(undefined),
			DbSubnetGroupName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Identifies the log types to enable and disable. */
	export interface AwsRdsPendingCloudWatchLogsExports {
		LogTypesToEnable?: Array<string>;
		LogTypesToDisable?: Array<string>;
	}

	/** Identifies the log types to enable and disable. */
	export interface AwsRdsPendingCloudWatchLogsExportsFormProperties {
	}
	export function CreateAwsRdsPendingCloudWatchLogsExportsFormGroup() {
		return new FormGroup<AwsRdsPendingCloudWatchLogsExportsFormProperties>({
		});

	}


	/** A processor feature. */
	export interface AwsRdsDbProcessorFeature {
		Name?: string;
		Value?: string;
	}

	/** A processor feature. */
	export interface AwsRdsDbProcessorFeatureFormProperties {
		Name: FormControl<string | null | undefined>,
		Value: FormControl<string | null | undefined>,
	}
	export function CreateAwsRdsDbProcessorFeatureFormGroup() {
		return new FormGroup<AwsRdsDbProcessorFeatureFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An option group membership. */
	export interface AwsRdsDbOptionGroupMembership {
		OptionGroupName?: string;
		Status?: string;
	}

	/** An option group membership. */
	export interface AwsRdsDbOptionGroupMembershipFormProperties {
		OptionGroupName: FormControl<string | null | undefined>,
		Status: FormControl<string | null | undefined>,
	}
	export function CreateAwsRdsDbOptionGroupMembershipFormGroup() {
		return new FormGroup<AwsRdsDbOptionGroupMembershipFormProperties>({
			OptionGroupName: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about the status of a read replica. */
	export interface AwsRdsDbStatusInfo {
		StatusType?: string;
		Normal?: boolean | null;
		Status?: string;
		Message?: string;
	}

	/** Information about the status of a read replica. */
	export interface AwsRdsDbStatusInfoFormProperties {
		StatusType: FormControl<string | null | undefined>,
		Normal: FormControl<boolean | null | undefined>,
		Status: FormControl<string | null | undefined>,
		Message: FormControl<string | null | undefined>,
	}
	export function CreateAwsRdsDbStatusInfoFormGroup() {
		return new FormGroup<AwsRdsDbStatusInfoFormProperties>({
			StatusType: new FormControl<string | null | undefined>(undefined),
			Normal: new FormControl<boolean | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
			Message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about an Active Directory domain membership record associated with the DB instance. */
	export interface AwsRdsDbDomainMembership {
		Domain?: string;
		Status?: string;
		Fqdn?: string;
		IamRoleName?: string;
	}

	/** Information about an Active Directory domain membership record associated with the DB instance. */
	export interface AwsRdsDbDomainMembershipFormProperties {
		Domain: FormControl<string | null | undefined>,
		Status: FormControl<string | null | undefined>,
		Fqdn: FormControl<string | null | undefined>,
		IamRoleName: FormControl<string | null | undefined>,
	}
	export function CreateAwsRdsDbDomainMembershipFormGroup() {
		return new FormGroup<AwsRdsDbDomainMembershipFormProperties>({
			Domain: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
			Fqdn: new FormControl<string | null | undefined>(undefined),
			IamRoleName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides information about an Amazon SNS topic to which notifications can be published. */
	export interface AwsSnsTopicDetails {
		KmsMasterKeyId?: string;
		Subscription?: Array<AwsSnsTopicSubscription>;
		TopicName?: string;
		Owner?: string;
		SqsSuccessFeedbackRoleArn?: string;
		SqsFailureFeedbackRoleArn?: string;
		ApplicationSuccessFeedbackRoleArn?: string;
		FirehoseSuccessFeedbackRoleArn?: string;
		FirehoseFailureFeedbackRoleArn?: string;
		HttpSuccessFeedbackRoleArn?: string;
		HttpFailureFeedbackRoleArn?: string;
	}

	/** Provides information about an Amazon SNS topic to which notifications can be published. */
	export interface AwsSnsTopicDetailsFormProperties {
		KmsMasterKeyId: FormControl<string | null | undefined>,
		TopicName: FormControl<string | null | undefined>,
		Owner: FormControl<string | null | undefined>,
		SqsSuccessFeedbackRoleArn: FormControl<string | null | undefined>,
		SqsFailureFeedbackRoleArn: FormControl<string | null | undefined>,
		ApplicationSuccessFeedbackRoleArn: FormControl<string | null | undefined>,
		FirehoseSuccessFeedbackRoleArn: FormControl<string | null | undefined>,
		FirehoseFailureFeedbackRoleArn: FormControl<string | null | undefined>,
		HttpSuccessFeedbackRoleArn: FormControl<string | null | undefined>,
		HttpFailureFeedbackRoleArn: FormControl<string | null | undefined>,
	}
	export function CreateAwsSnsTopicDetailsFormGroup() {
		return new FormGroup<AwsSnsTopicDetailsFormProperties>({
			KmsMasterKeyId: new FormControl<string | null | undefined>(undefined),
			TopicName: new FormControl<string | null | undefined>(undefined),
			Owner: new FormControl<string | null | undefined>(undefined),
			SqsSuccessFeedbackRoleArn: new FormControl<string | null | undefined>(undefined),
			SqsFailureFeedbackRoleArn: new FormControl<string | null | undefined>(undefined),
			ApplicationSuccessFeedbackRoleArn: new FormControl<string | null | undefined>(undefined),
			FirehoseSuccessFeedbackRoleArn: new FormControl<string | null | undefined>(undefined),
			FirehoseFailureFeedbackRoleArn: new FormControl<string | null | undefined>(undefined),
			HttpSuccessFeedbackRoleArn: new FormControl<string | null | undefined>(undefined),
			HttpFailureFeedbackRoleArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A wrapper type for the attributes of an Amazon SNS subscription. */
	export interface AwsSnsTopicSubscription {
		Endpoint?: string;
		Protocol?: string;
	}

	/** A wrapper type for the attributes of an Amazon SNS subscription. */
	export interface AwsSnsTopicSubscriptionFormProperties {
		Endpoint: FormControl<string | null | undefined>,
		Protocol: FormControl<string | null | undefined>,
	}
	export function CreateAwsSnsTopicSubscriptionFormGroup() {
		return new FormGroup<AwsSnsTopicSubscriptionFormProperties>({
			Endpoint: new FormControl<string | null | undefined>(undefined),
			Protocol: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Data about a queue. */
	export interface AwsSqsQueueDetails {
		KmsDataKeyReusePeriodSeconds?: number | null;
		KmsMasterKeyId?: string;
		QueueName?: string;
		DeadLetterTargetArn?: string;
	}

	/** Data about a queue. */
	export interface AwsSqsQueueDetailsFormProperties {
		KmsDataKeyReusePeriodSeconds: FormControl<number | null | undefined>,
		KmsMasterKeyId: FormControl<string | null | undefined>,
		QueueName: FormControl<string | null | undefined>,
		DeadLetterTargetArn: FormControl<string | null | undefined>,
	}
	export function CreateAwsSqsQueueDetailsFormGroup() {
		return new FormGroup<AwsSqsQueueDetailsFormProperties>({
			KmsDataKeyReusePeriodSeconds: new FormControl<number | null | undefined>(undefined),
			KmsMasterKeyId: new FormControl<string | null | undefined>(undefined),
			QueueName: new FormControl<string | null | undefined>(undefined),
			DeadLetterTargetArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides information about an WAF web access control list (web ACL). */
	export interface AwsWafWebAclDetails {
		Name?: string;
		DefaultAction?: string;
		Rules?: Array<AwsWafWebAclRule>;
		WebAclId?: string;
	}

	/** Provides information about an WAF web access control list (web ACL). */
	export interface AwsWafWebAclDetailsFormProperties {
		Name: FormControl<string | null | undefined>,
		DefaultAction: FormControl<string | null | undefined>,
		WebAclId: FormControl<string | null | undefined>,
	}
	export function CreateAwsWafWebAclDetailsFormGroup() {
		return new FormGroup<AwsWafWebAclDetailsFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			DefaultAction: new FormControl<string | null | undefined>(undefined),
			WebAclId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details for a rule in an WAF web ACL. */
	export interface AwsWafWebAclRule {
		Action?: WafAction;
		ExcludedRules?: Array<WafExcludedRule>;
		OverrideAction?: WafOverrideAction;
		Priority?: number | null;
		RuleId?: string;
		Type?: string;
	}

	/** Details for a rule in an WAF web ACL. */
	export interface AwsWafWebAclRuleFormProperties {
		Priority: FormControl<number | null | undefined>,
		RuleId: FormControl<string | null | undefined>,
		Type: FormControl<string | null | undefined>,
	}
	export function CreateAwsWafWebAclRuleFormGroup() {
		return new FormGroup<AwsWafWebAclRuleFormProperties>({
			Priority: new FormControl<number | null | undefined>(undefined),
			RuleId: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details about the action that CloudFront or WAF takes when a web request matches the conditions in the rule.  */
	export interface WafAction {
		Type?: string;
	}

	/** Details about the action that CloudFront or WAF takes when a web request matches the conditions in the rule.  */
	export interface WafActionFormProperties {
		Type: FormControl<string | null | undefined>,
	}
	export function CreateWafActionFormGroup() {
		return new FormGroup<WafActionFormProperties>({
			Type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details about a rule to exclude from a rule group. */
	export interface WafExcludedRule {
		RuleId?: string;
	}

	/** Details about a rule to exclude from a rule group. */
	export interface WafExcludedRuleFormProperties {
		RuleId: FormControl<string | null | undefined>,
	}
	export function CreateWafExcludedRuleFormGroup() {
		return new FormGroup<WafExcludedRuleFormProperties>({
			RuleId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details about an override action for a rule. */
	export interface WafOverrideAction {
		Type?: string;
	}

	/** Details about an override action for a rule. */
	export interface WafOverrideActionFormProperties {
		Type: FormControl<string | null | undefined>,
	}
	export function CreateWafOverrideActionFormGroup() {
		return new FormGroup<WafOverrideActionFormProperties>({
			Type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides details about an Amazon RDS DB cluster snapshot. */
	export interface AwsRdsDbSnapshotDetails {
		DbSnapshotIdentifier?: string;
		DbInstanceIdentifier?: string;
		SnapshotCreateTime?: string;
		Engine?: string;
		AllocatedStorage?: number | null;
		Status?: string;
		Port?: number | null;
		AvailabilityZone?: string;
		VpcId?: string;
		InstanceCreateTime?: string;
		MasterUsername?: string;
		EngineVersion?: string;
		LicenseModel?: string;
		SnapshotType?: string;
		Iops?: number | null;
		OptionGroupName?: string;
		PercentProgress?: number | null;
		SourceRegion?: string;
		SourceDbSnapshotIdentifier?: string;
		StorageType?: string;
		TdeCredentialArn?: string;
		Encrypted?: boolean | null;
		KmsKeyId?: string;
		Timezone?: string;
		IamDatabaseAuthenticationEnabled?: boolean | null;
		ProcessorFeatures?: Array<AwsRdsDbProcessorFeature>;
		DbiResourceId?: string;
	}

	/** Provides details about an Amazon RDS DB cluster snapshot. */
	export interface AwsRdsDbSnapshotDetailsFormProperties {
		DbSnapshotIdentifier: FormControl<string | null | undefined>,
		DbInstanceIdentifier: FormControl<string | null | undefined>,
		SnapshotCreateTime: FormControl<string | null | undefined>,
		Engine: FormControl<string | null | undefined>,
		AllocatedStorage: FormControl<number | null | undefined>,
		Status: FormControl<string | null | undefined>,
		Port: FormControl<number | null | undefined>,
		AvailabilityZone: FormControl<string | null | undefined>,
		VpcId: FormControl<string | null | undefined>,
		InstanceCreateTime: FormControl<string | null | undefined>,
		MasterUsername: FormControl<string | null | undefined>,
		EngineVersion: FormControl<string | null | undefined>,
		LicenseModel: FormControl<string | null | undefined>,
		SnapshotType: FormControl<string | null | undefined>,
		Iops: FormControl<number | null | undefined>,
		OptionGroupName: FormControl<string | null | undefined>,
		PercentProgress: FormControl<number | null | undefined>,
		SourceRegion: FormControl<string | null | undefined>,
		SourceDbSnapshotIdentifier: FormControl<string | null | undefined>,
		StorageType: FormControl<string | null | undefined>,
		TdeCredentialArn: FormControl<string | null | undefined>,
		Encrypted: FormControl<boolean | null | undefined>,
		KmsKeyId: FormControl<string | null | undefined>,
		Timezone: FormControl<string | null | undefined>,
		IamDatabaseAuthenticationEnabled: FormControl<boolean | null | undefined>,
		DbiResourceId: FormControl<string | null | undefined>,
	}
	export function CreateAwsRdsDbSnapshotDetailsFormGroup() {
		return new FormGroup<AwsRdsDbSnapshotDetailsFormProperties>({
			DbSnapshotIdentifier: new FormControl<string | null | undefined>(undefined),
			DbInstanceIdentifier: new FormControl<string | null | undefined>(undefined),
			SnapshotCreateTime: new FormControl<string | null | undefined>(undefined),
			Engine: new FormControl<string | null | undefined>(undefined),
			AllocatedStorage: new FormControl<number | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
			Port: new FormControl<number | null | undefined>(undefined),
			AvailabilityZone: new FormControl<string | null | undefined>(undefined),
			VpcId: new FormControl<string | null | undefined>(undefined),
			InstanceCreateTime: new FormControl<string | null | undefined>(undefined),
			MasterUsername: new FormControl<string | null | undefined>(undefined),
			EngineVersion: new FormControl<string | null | undefined>(undefined),
			LicenseModel: new FormControl<string | null | undefined>(undefined),
			SnapshotType: new FormControl<string | null | undefined>(undefined),
			Iops: new FormControl<number | null | undefined>(undefined),
			OptionGroupName: new FormControl<string | null | undefined>(undefined),
			PercentProgress: new FormControl<number | null | undefined>(undefined),
			SourceRegion: new FormControl<string | null | undefined>(undefined),
			SourceDbSnapshotIdentifier: new FormControl<string | null | undefined>(undefined),
			StorageType: new FormControl<string | null | undefined>(undefined),
			TdeCredentialArn: new FormControl<string | null | undefined>(undefined),
			Encrypted: new FormControl<boolean | null | undefined>(undefined),
			KmsKeyId: new FormControl<string | null | undefined>(undefined),
			Timezone: new FormControl<string | null | undefined>(undefined),
			IamDatabaseAuthenticationEnabled: new FormControl<boolean | null | undefined>(undefined),
			DbiResourceId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about an Amazon RDS DB cluster snapshot. */
	export interface AwsRdsDbClusterSnapshotDetails {
		AvailabilityZones?: Array<string>;
		SnapshotCreateTime?: string;
		Engine?: string;
		AllocatedStorage?: number | null;
		Status?: string;
		Port?: number | null;
		VpcId?: string;
		ClusterCreateTime?: string;
		MasterUsername?: string;
		EngineVersion?: string;
		LicenseModel?: string;
		SnapshotType?: string;
		PercentProgress?: number | null;
		StorageEncrypted?: boolean | null;
		KmsKeyId?: string;
		DbClusterIdentifier?: string;
		DbClusterSnapshotIdentifier?: string;
		IamDatabaseAuthenticationEnabled?: boolean | null;
		DbClusterSnapshotAttributes?: Array<AwsRdsDbClusterSnapshotDbClusterSnapshotAttribute>;
	}

	/** Information about an Amazon RDS DB cluster snapshot. */
	export interface AwsRdsDbClusterSnapshotDetailsFormProperties {
		SnapshotCreateTime: FormControl<string | null | undefined>,
		Engine: FormControl<string | null | undefined>,
		AllocatedStorage: FormControl<number | null | undefined>,
		Status: FormControl<string | null | undefined>,
		Port: FormControl<number | null | undefined>,
		VpcId: FormControl<string | null | undefined>,
		ClusterCreateTime: FormControl<string | null | undefined>,
		MasterUsername: FormControl<string | null | undefined>,
		EngineVersion: FormControl<string | null | undefined>,
		LicenseModel: FormControl<string | null | undefined>,
		SnapshotType: FormControl<string | null | undefined>,
		PercentProgress: FormControl<number | null | undefined>,
		StorageEncrypted: FormControl<boolean | null | undefined>,
		KmsKeyId: FormControl<string | null | undefined>,
		DbClusterIdentifier: FormControl<string | null | undefined>,
		DbClusterSnapshotIdentifier: FormControl<string | null | undefined>,
		IamDatabaseAuthenticationEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateAwsRdsDbClusterSnapshotDetailsFormGroup() {
		return new FormGroup<AwsRdsDbClusterSnapshotDetailsFormProperties>({
			SnapshotCreateTime: new FormControl<string | null | undefined>(undefined),
			Engine: new FormControl<string | null | undefined>(undefined),
			AllocatedStorage: new FormControl<number | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
			Port: new FormControl<number | null | undefined>(undefined),
			VpcId: new FormControl<string | null | undefined>(undefined),
			ClusterCreateTime: new FormControl<string | null | undefined>(undefined),
			MasterUsername: new FormControl<string | null | undefined>(undefined),
			EngineVersion: new FormControl<string | null | undefined>(undefined),
			LicenseModel: new FormControl<string | null | undefined>(undefined),
			SnapshotType: new FormControl<string | null | undefined>(undefined),
			PercentProgress: new FormControl<number | null | undefined>(undefined),
			StorageEncrypted: new FormControl<boolean | null | undefined>(undefined),
			KmsKeyId: new FormControl<string | null | undefined>(undefined),
			DbClusterIdentifier: new FormControl<string | null | undefined>(undefined),
			DbClusterSnapshotIdentifier: new FormControl<string | null | undefined>(undefined),
			IamDatabaseAuthenticationEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/**  Contains the name and values of a manual Amazon Relational Database Service (RDS) DB cluster snapshot attribute.  */
	export interface AwsRdsDbClusterSnapshotDbClusterSnapshotAttribute {
		AttributeName?: string;
		AttributeValues?: Array<string>;
	}

	/**  Contains the name and values of a manual Amazon Relational Database Service (RDS) DB cluster snapshot attribute.  */
	export interface AwsRdsDbClusterSnapshotDbClusterSnapshotAttributeFormProperties {
		AttributeName: FormControl<string | null | undefined>,
	}
	export function CreateAwsRdsDbClusterSnapshotDbClusterSnapshotAttributeFormGroup() {
		return new FormGroup<AwsRdsDbClusterSnapshotDbClusterSnapshotAttributeFormProperties>({
			AttributeName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about an Amazon RDS DB cluster. */
	export interface AwsRdsDbClusterDetails {
		AllocatedStorage?: number | null;
		AvailabilityZones?: Array<string>;
		BackupRetentionPeriod?: number | null;
		DatabaseName?: string;
		Status?: string;
		Endpoint?: string;
		ReaderEndpoint?: string;
		CustomEndpoints?: Array<string>;
		MultiAz?: boolean | null;
		Engine?: string;
		EngineVersion?: string;
		Port?: number | null;
		MasterUsername?: string;
		PreferredBackupWindow?: string;
		PreferredMaintenanceWindow?: string;
		ReadReplicaIdentifiers?: Array<string>;
		VpcSecurityGroups?: Array<AwsRdsDbInstanceVpcSecurityGroup>;
		HostedZoneId?: string;
		StorageEncrypted?: boolean | null;
		KmsKeyId?: string;
		DbClusterResourceId?: string;
		AssociatedRoles?: Array<AwsRdsDbClusterAssociatedRole>;
		ClusterCreateTime?: string;
		EnabledCloudWatchLogsExports?: Array<string>;
		EngineMode?: string;
		DeletionProtection?: boolean | null;
		HttpEndpointEnabled?: boolean | null;
		ActivityStreamStatus?: string;
		CopyTagsToSnapshot?: boolean | null;
		CrossAccountClone?: boolean | null;
		DomainMemberships?: Array<AwsRdsDbDomainMembership>;
		DbClusterParameterGroup?: string;
		DbSubnetGroup?: string;
		DbClusterOptionGroupMemberships?: Array<AwsRdsDbClusterOptionGroupMembership>;
		DbClusterIdentifier?: string;
		DbClusterMembers?: Array<AwsRdsDbClusterMember>;
		IamDatabaseAuthenticationEnabled?: boolean | null;
	}

	/** Information about an Amazon RDS DB cluster. */
	export interface AwsRdsDbClusterDetailsFormProperties {
		AllocatedStorage: FormControl<number | null | undefined>,
		BackupRetentionPeriod: FormControl<number | null | undefined>,
		DatabaseName: FormControl<string | null | undefined>,
		Status: FormControl<string | null | undefined>,
		Endpoint: FormControl<string | null | undefined>,
		ReaderEndpoint: FormControl<string | null | undefined>,
		MultiAz: FormControl<boolean | null | undefined>,
		Engine: FormControl<string | null | undefined>,
		EngineVersion: FormControl<string | null | undefined>,
		Port: FormControl<number | null | undefined>,
		MasterUsername: FormControl<string | null | undefined>,
		PreferredBackupWindow: FormControl<string | null | undefined>,
		PreferredMaintenanceWindow: FormControl<string | null | undefined>,
		HostedZoneId: FormControl<string | null | undefined>,
		StorageEncrypted: FormControl<boolean | null | undefined>,
		KmsKeyId: FormControl<string | null | undefined>,
		DbClusterResourceId: FormControl<string | null | undefined>,
		ClusterCreateTime: FormControl<string | null | undefined>,
		EngineMode: FormControl<string | null | undefined>,
		DeletionProtection: FormControl<boolean | null | undefined>,
		HttpEndpointEnabled: FormControl<boolean | null | undefined>,
		ActivityStreamStatus: FormControl<string | null | undefined>,
		CopyTagsToSnapshot: FormControl<boolean | null | undefined>,
		CrossAccountClone: FormControl<boolean | null | undefined>,
		DbClusterParameterGroup: FormControl<string | null | undefined>,
		DbSubnetGroup: FormControl<string | null | undefined>,
		DbClusterIdentifier: FormControl<string | null | undefined>,
		IamDatabaseAuthenticationEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateAwsRdsDbClusterDetailsFormGroup() {
		return new FormGroup<AwsRdsDbClusterDetailsFormProperties>({
			AllocatedStorage: new FormControl<number | null | undefined>(undefined),
			BackupRetentionPeriod: new FormControl<number | null | undefined>(undefined),
			DatabaseName: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
			Endpoint: new FormControl<string | null | undefined>(undefined),
			ReaderEndpoint: new FormControl<string | null | undefined>(undefined),
			MultiAz: new FormControl<boolean | null | undefined>(undefined),
			Engine: new FormControl<string | null | undefined>(undefined),
			EngineVersion: new FormControl<string | null | undefined>(undefined),
			Port: new FormControl<number | null | undefined>(undefined),
			MasterUsername: new FormControl<string | null | undefined>(undefined),
			PreferredBackupWindow: new FormControl<string | null | undefined>(undefined),
			PreferredMaintenanceWindow: new FormControl<string | null | undefined>(undefined),
			HostedZoneId: new FormControl<string | null | undefined>(undefined),
			StorageEncrypted: new FormControl<boolean | null | undefined>(undefined),
			KmsKeyId: new FormControl<string | null | undefined>(undefined),
			DbClusterResourceId: new FormControl<string | null | undefined>(undefined),
			ClusterCreateTime: new FormControl<string | null | undefined>(undefined),
			EngineMode: new FormControl<string | null | undefined>(undefined),
			DeletionProtection: new FormControl<boolean | null | undefined>(undefined),
			HttpEndpointEnabled: new FormControl<boolean | null | undefined>(undefined),
			ActivityStreamStatus: new FormControl<string | null | undefined>(undefined),
			CopyTagsToSnapshot: new FormControl<boolean | null | undefined>(undefined),
			CrossAccountClone: new FormControl<boolean | null | undefined>(undefined),
			DbClusterParameterGroup: new FormControl<string | null | undefined>(undefined),
			DbSubnetGroup: new FormControl<string | null | undefined>(undefined),
			DbClusterIdentifier: new FormControl<string | null | undefined>(undefined),
			IamDatabaseAuthenticationEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** An IAM role that is associated with the Amazon RDS DB cluster. */
	export interface AwsRdsDbClusterAssociatedRole {
		RoleArn?: string;
		Status?: string;
	}

	/** An IAM role that is associated with the Amazon RDS DB cluster. */
	export interface AwsRdsDbClusterAssociatedRoleFormProperties {
		RoleArn: FormControl<string | null | undefined>,
		Status: FormControl<string | null | undefined>,
	}
	export function CreateAwsRdsDbClusterAssociatedRoleFormGroup() {
		return new FormGroup<AwsRdsDbClusterAssociatedRoleFormProperties>({
			RoleArn: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about an option group membership for a DB cluster. */
	export interface AwsRdsDbClusterOptionGroupMembership {
		DbClusterOptionGroupName?: string;
		Status?: string;
	}

	/** Information about an option group membership for a DB cluster. */
	export interface AwsRdsDbClusterOptionGroupMembershipFormProperties {
		DbClusterOptionGroupName: FormControl<string | null | undefined>,
		Status: FormControl<string | null | undefined>,
	}
	export function CreateAwsRdsDbClusterOptionGroupMembershipFormGroup() {
		return new FormGroup<AwsRdsDbClusterOptionGroupMembershipFormProperties>({
			DbClusterOptionGroupName: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about an instance in the DB cluster. */
	export interface AwsRdsDbClusterMember {
		IsClusterWriter?: boolean | null;
		PromotionTier?: number | null;
		DbInstanceIdentifier?: string;
		DbClusterParameterGroupStatus?: string;
	}

	/** Information about an instance in the DB cluster. */
	export interface AwsRdsDbClusterMemberFormProperties {
		IsClusterWriter: FormControl<boolean | null | undefined>,
		PromotionTier: FormControl<number | null | undefined>,
		DbInstanceIdentifier: FormControl<string | null | undefined>,
		DbClusterParameterGroupStatus: FormControl<string | null | undefined>,
	}
	export function CreateAwsRdsDbClusterMemberFormGroup() {
		return new FormGroup<AwsRdsDbClusterMemberFormProperties>({
			IsClusterWriter: new FormControl<boolean | null | undefined>(undefined),
			PromotionTier: new FormControl<number | null | undefined>(undefined),
			DbInstanceIdentifier: new FormControl<string | null | undefined>(undefined),
			DbClusterParameterGroupStatus: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides details about an Amazon ECS cluster. */
	export interface AwsEcsClusterDetails {
		ClusterArn?: string;
		ActiveServicesCount?: number | null;
		CapacityProviders?: Array<string>;
		ClusterSettings?: Array<AwsEcsClusterClusterSettingsDetails>;
		Configuration?: AwsEcsClusterConfigurationDetails;
		DefaultCapacityProviderStrategy?: Array<AwsEcsClusterDefaultCapacityProviderStrategyDetails>;
		ClusterName?: string;
		RegisteredContainerInstancesCount?: number | null;
		RunningTasksCount?: number | null;
		Status?: string;
	}

	/** Provides details about an Amazon ECS cluster. */
	export interface AwsEcsClusterDetailsFormProperties {
		ClusterArn: FormControl<string | null | undefined>,
		ActiveServicesCount: FormControl<number | null | undefined>,
		ClusterName: FormControl<string | null | undefined>,
		RegisteredContainerInstancesCount: FormControl<number | null | undefined>,
		RunningTasksCount: FormControl<number | null | undefined>,
		Status: FormControl<string | null | undefined>,
	}
	export function CreateAwsEcsClusterDetailsFormGroup() {
		return new FormGroup<AwsEcsClusterDetailsFormProperties>({
			ClusterArn: new FormControl<string | null | undefined>(undefined),
			ActiveServicesCount: new FormControl<number | null | undefined>(undefined),
			ClusterName: new FormControl<string | null | undefined>(undefined),
			RegisteredContainerInstancesCount: new FormControl<number | null | undefined>(undefined),
			RunningTasksCount: new FormControl<number | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Indicates whether to enable CloudWatch Container Insights for the ECS cluster. */
	export interface AwsEcsClusterClusterSettingsDetails {
		Name?: string;
		Value?: string;
	}

	/** Indicates whether to enable CloudWatch Container Insights for the ECS cluster. */
	export interface AwsEcsClusterClusterSettingsDetailsFormProperties {
		Name: FormControl<string | null | undefined>,
		Value: FormControl<string | null | undefined>,
	}
	export function CreateAwsEcsClusterClusterSettingsDetailsFormGroup() {
		return new FormGroup<AwsEcsClusterClusterSettingsDetailsFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The run command configuration for the cluster. */
	export interface AwsEcsClusterConfigurationDetails {
		ExecuteCommandConfiguration?: AwsEcsClusterConfigurationExecuteCommandConfigurationDetails;
	}

	/** The run command configuration for the cluster. */
	export interface AwsEcsClusterConfigurationDetailsFormProperties {
	}
	export function CreateAwsEcsClusterConfigurationDetailsFormGroup() {
		return new FormGroup<AwsEcsClusterConfigurationDetailsFormProperties>({
		});

	}


	/** Contains the run command configuration for the cluster. */
	export interface AwsEcsClusterConfigurationExecuteCommandConfigurationDetails {
		KmsKeyId?: string;
		LogConfiguration?: AwsEcsClusterConfigurationExecuteCommandConfigurationLogConfigurationDetails;
		Logging?: string;
	}

	/** Contains the run command configuration for the cluster. */
	export interface AwsEcsClusterConfigurationExecuteCommandConfigurationDetailsFormProperties {
		KmsKeyId: FormControl<string | null | undefined>,
		Logging: FormControl<string | null | undefined>,
	}
	export function CreateAwsEcsClusterConfigurationExecuteCommandConfigurationDetailsFormGroup() {
		return new FormGroup<AwsEcsClusterConfigurationExecuteCommandConfigurationDetailsFormProperties>({
			KmsKeyId: new FormControl<string | null | undefined>(undefined),
			Logging: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The log configuration for the results of the run command actions. */
	export interface AwsEcsClusterConfigurationExecuteCommandConfigurationLogConfigurationDetails {
		CloudWatchEncryptionEnabled?: boolean | null;
		CloudWatchLogGroupName?: string;
		S3BucketName?: string;
		S3EncryptionEnabled?: boolean | null;
		S3KeyPrefix?: string;
	}

	/** The log configuration for the results of the run command actions. */
	export interface AwsEcsClusterConfigurationExecuteCommandConfigurationLogConfigurationDetailsFormProperties {
		CloudWatchEncryptionEnabled: FormControl<boolean | null | undefined>,
		CloudWatchLogGroupName: FormControl<string | null | undefined>,
		S3BucketName: FormControl<string | null | undefined>,
		S3EncryptionEnabled: FormControl<boolean | null | undefined>,
		S3KeyPrefix: FormControl<string | null | undefined>,
	}
	export function CreateAwsEcsClusterConfigurationExecuteCommandConfigurationLogConfigurationDetailsFormGroup() {
		return new FormGroup<AwsEcsClusterConfigurationExecuteCommandConfigurationLogConfigurationDetailsFormProperties>({
			CloudWatchEncryptionEnabled: new FormControl<boolean | null | undefined>(undefined),
			CloudWatchLogGroupName: new FormControl<string | null | undefined>(undefined),
			S3BucketName: new FormControl<string | null | undefined>(undefined),
			S3EncryptionEnabled: new FormControl<boolean | null | undefined>(undefined),
			S3KeyPrefix: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The default capacity provider strategy for the cluster. The default capacity provider strategy is used when services or tasks are run without a specified launch type or capacity provider strategy. */
	export interface AwsEcsClusterDefaultCapacityProviderStrategyDetails {
		Base?: number | null;
		CapacityProvider?: string;
		Weight?: number | null;
	}

	/** The default capacity provider strategy for the cluster. The default capacity provider strategy is used when services or tasks are run without a specified launch type or capacity provider strategy. */
	export interface AwsEcsClusterDefaultCapacityProviderStrategyDetailsFormProperties {
		Base: FormControl<number | null | undefined>,
		CapacityProvider: FormControl<string | null | undefined>,
		Weight: FormControl<number | null | undefined>,
	}
	export function CreateAwsEcsClusterDefaultCapacityProviderStrategyDetailsFormGroup() {
		return new FormGroup<AwsEcsClusterDefaultCapacityProviderStrategyDetailsFormProperties>({
			Base: new FormControl<number | null | undefined>(undefined),
			CapacityProvider: new FormControl<string | null | undefined>(undefined),
			Weight: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Provides information about an Amazon ECS container.  */
	export interface AwsEcsContainerDetails {
		Name?: string;
		Image?: string;
		MountPoints?: Array<AwsMountPoint>;
		Privileged?: boolean | null;
	}

	/** Provides information about an Amazon ECS container.  */
	export interface AwsEcsContainerDetailsFormProperties {
		Name: FormControl<string | null | undefined>,
		Image: FormControl<string | null | undefined>,
		Privileged: FormControl<boolean | null | undefined>,
	}
	export function CreateAwsEcsContainerDetailsFormGroup() {
		return new FormGroup<AwsEcsContainerDetailsFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Image: new FormControl<string | null | undefined>(undefined),
			Privileged: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Details for a volume mount point that's used in a container definition.  */
	export interface AwsMountPoint {
		SourceVolume?: string;
		ContainerPath?: string;
	}

	/** Details for a volume mount point that's used in a container definition.  */
	export interface AwsMountPointFormProperties {
		SourceVolume: FormControl<string | null | undefined>,
		ContainerPath: FormControl<string | null | undefined>,
	}
	export function CreateAwsMountPointFormGroup() {
		return new FormGroup<AwsMountPointFormProperties>({
			SourceVolume: new FormControl<string | null | undefined>(undefined),
			ContainerPath: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details about a task definition. A task definition describes the container and volume definitions of an Amazon Elastic Container Service task. */
	export interface AwsEcsTaskDefinitionDetails {
		ContainerDefinitions?: Array<AwsEcsTaskDefinitionContainerDefinitionsDetails>;
		Cpu?: string;
		ExecutionRoleArn?: string;
		Family?: string;
		InferenceAccelerators?: Array<AwsEcsTaskDefinitionInferenceAcceleratorsDetails>;
		IpcMode?: string;
		Memory?: string;
		NetworkMode?: string;
		PidMode?: string;
		PlacementConstraints?: Array<AwsEcsTaskDefinitionPlacementConstraintsDetails>;
		ProxyConfiguration?: AwsEcsTaskDefinitionProxyConfigurationDetails;
		RequiresCompatibilities?: Array<string>;
		TaskRoleArn?: string;
		Volumes?: Array<AwsEcsTaskDefinitionVolumesDetails>;
	}

	/** Details about a task definition. A task definition describes the container and volume definitions of an Amazon Elastic Container Service task. */
	export interface AwsEcsTaskDefinitionDetailsFormProperties {
		Cpu: FormControl<string | null | undefined>,
		ExecutionRoleArn: FormControl<string | null | undefined>,
		Family: FormControl<string | null | undefined>,
		IpcMode: FormControl<string | null | undefined>,
		Memory: FormControl<string | null | undefined>,
		NetworkMode: FormControl<string | null | undefined>,
		PidMode: FormControl<string | null | undefined>,
		TaskRoleArn: FormControl<string | null | undefined>,
	}
	export function CreateAwsEcsTaskDefinitionDetailsFormGroup() {
		return new FormGroup<AwsEcsTaskDefinitionDetailsFormProperties>({
			Cpu: new FormControl<string | null | undefined>(undefined),
			ExecutionRoleArn: new FormControl<string | null | undefined>(undefined),
			Family: new FormControl<string | null | undefined>(undefined),
			IpcMode: new FormControl<string | null | undefined>(undefined),
			Memory: new FormControl<string | null | undefined>(undefined),
			NetworkMode: new FormControl<string | null | undefined>(undefined),
			PidMode: new FormControl<string | null | undefined>(undefined),
			TaskRoleArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A container definition that describes a container in the task. */
	export interface AwsEcsTaskDefinitionContainerDefinitionsDetails {
		Command?: Array<string>;
		Cpu?: number | null;
		DependsOn?: Array<AwsEcsTaskDefinitionContainerDefinitionsDependsOnDetails>;
		DisableNetworking?: boolean | null;
		DnsSearchDomains?: Array<string>;
		DnsServers?: Array<string>;
		DockerLabels?: FieldMap;
		DockerSecurityOptions?: Array<string>;
		EntryPoint?: Array<string>;
		Environment?: Array<AwsEcsTaskDefinitionContainerDefinitionsEnvironmentDetails>;
		EnvironmentFiles?: Array<AwsEcsTaskDefinitionContainerDefinitionsEnvironmentFilesDetails>;
		Essential?: boolean | null;
		ExtraHosts?: Array<AwsEcsTaskDefinitionContainerDefinitionsExtraHostsDetails>;
		FirelensConfiguration?: AwsEcsTaskDefinitionContainerDefinitionsFirelensConfigurationDetails;
		HealthCheck?: AwsEcsTaskDefinitionContainerDefinitionsHealthCheckDetails;
		Hostname?: string;
		Image?: string;
		Interactive?: boolean | null;
		Links?: Array<string>;
		LinuxParameters?: AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDetails;
		LogConfiguration?: AwsEcsTaskDefinitionContainerDefinitionsLogConfigurationDetails;
		Memory?: number | null;
		MemoryReservation?: number | null;
		MountPoints?: Array<AwsEcsTaskDefinitionContainerDefinitionsMountPointsDetails>;
		Name?: string;
		PortMappings?: Array<AwsEcsTaskDefinitionContainerDefinitionsPortMappingsDetails>;
		Privileged?: boolean | null;
		PseudoTerminal?: boolean | null;
		ReadonlyRootFilesystem?: boolean | null;
		RepositoryCredentials?: AwsEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsDetails;
		ResourceRequirements?: Array<AwsEcsTaskDefinitionContainerDefinitionsResourceRequirementsDetails>;
		Secrets?: Array<AwsEcsTaskDefinitionContainerDefinitionsSecretsDetails>;
		StartTimeout?: number | null;
		StopTimeout?: number | null;
		SystemControls?: Array<AwsEcsTaskDefinitionContainerDefinitionsSystemControlsDetails>;
		Ulimits?: Array<AwsEcsTaskDefinitionContainerDefinitionsUlimitsDetails>;
		User?: string;
		VolumesFrom?: Array<AwsEcsTaskDefinitionContainerDefinitionsVolumesFromDetails>;
		WorkingDirectory?: string;
	}

	/** A container definition that describes a container in the task. */
	export interface AwsEcsTaskDefinitionContainerDefinitionsDetailsFormProperties {
		Cpu: FormControl<number | null | undefined>,
		DisableNetworking: FormControl<boolean | null | undefined>,
		Essential: FormControl<boolean | null | undefined>,
		Hostname: FormControl<string | null | undefined>,
		Image: FormControl<string | null | undefined>,
		Interactive: FormControl<boolean | null | undefined>,
		Memory: FormControl<number | null | undefined>,
		MemoryReservation: FormControl<number | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Privileged: FormControl<boolean | null | undefined>,
		PseudoTerminal: FormControl<boolean | null | undefined>,
		ReadonlyRootFilesystem: FormControl<boolean | null | undefined>,
		StartTimeout: FormControl<number | null | undefined>,
		StopTimeout: FormControl<number | null | undefined>,
		User: FormControl<string | null | undefined>,
		WorkingDirectory: FormControl<string | null | undefined>,
	}
	export function CreateAwsEcsTaskDefinitionContainerDefinitionsDetailsFormGroup() {
		return new FormGroup<AwsEcsTaskDefinitionContainerDefinitionsDetailsFormProperties>({
			Cpu: new FormControl<number | null | undefined>(undefined),
			DisableNetworking: new FormControl<boolean | null | undefined>(undefined),
			Essential: new FormControl<boolean | null | undefined>(undefined),
			Hostname: new FormControl<string | null | undefined>(undefined),
			Image: new FormControl<string | null | undefined>(undefined),
			Interactive: new FormControl<boolean | null | undefined>(undefined),
			Memory: new FormControl<number | null | undefined>(undefined),
			MemoryReservation: new FormControl<number | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Privileged: new FormControl<boolean | null | undefined>(undefined),
			PseudoTerminal: new FormControl<boolean | null | undefined>(undefined),
			ReadonlyRootFilesystem: new FormControl<boolean | null | undefined>(undefined),
			StartTimeout: new FormControl<number | null | undefined>(undefined),
			StopTimeout: new FormControl<number | null | undefined>(undefined),
			User: new FormControl<string | null | undefined>(undefined),
			WorkingDirectory: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A dependency that is defined for container startup and shutdown. */
	export interface AwsEcsTaskDefinitionContainerDefinitionsDependsOnDetails {
		Condition?: string;
		ContainerName?: string;
	}

	/** A dependency that is defined for container startup and shutdown. */
	export interface AwsEcsTaskDefinitionContainerDefinitionsDependsOnDetailsFormProperties {
		Condition: FormControl<string | null | undefined>,
		ContainerName: FormControl<string | null | undefined>,
	}
	export function CreateAwsEcsTaskDefinitionContainerDefinitionsDependsOnDetailsFormGroup() {
		return new FormGroup<AwsEcsTaskDefinitionContainerDefinitionsDependsOnDetailsFormProperties>({
			Condition: new FormControl<string | null | undefined>(undefined),
			ContainerName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An environment variable to pass to the container. */
	export interface AwsEcsTaskDefinitionContainerDefinitionsEnvironmentDetails {
		Name?: string;
		Value?: string;
	}

	/** An environment variable to pass to the container. */
	export interface AwsEcsTaskDefinitionContainerDefinitionsEnvironmentDetailsFormProperties {
		Name: FormControl<string | null | undefined>,
		Value: FormControl<string | null | undefined>,
	}
	export function CreateAwsEcsTaskDefinitionContainerDefinitionsEnvironmentDetailsFormGroup() {
		return new FormGroup<AwsEcsTaskDefinitionContainerDefinitionsEnvironmentDetailsFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A file that contain environment variables to pass to a container. */
	export interface AwsEcsTaskDefinitionContainerDefinitionsEnvironmentFilesDetails {
		Type?: string;
		Value?: string;
	}

	/** A file that contain environment variables to pass to a container. */
	export interface AwsEcsTaskDefinitionContainerDefinitionsEnvironmentFilesDetailsFormProperties {
		Type: FormControl<string | null | undefined>,
		Value: FormControl<string | null | undefined>,
	}
	export function CreateAwsEcsTaskDefinitionContainerDefinitionsEnvironmentFilesDetailsFormGroup() {
		return new FormGroup<AwsEcsTaskDefinitionContainerDefinitionsEnvironmentFilesDetailsFormProperties>({
			Type: new FormControl<string | null | undefined>(undefined),
			Value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A hostname and IP address mapping to append to the <b>/etc/hosts</b> file on the container. */
	export interface AwsEcsTaskDefinitionContainerDefinitionsExtraHostsDetails {
		Hostname?: string;
		IpAddress?: string;
	}

	/** A hostname and IP address mapping to append to the <b>/etc/hosts</b> file on the container. */
	export interface AwsEcsTaskDefinitionContainerDefinitionsExtraHostsDetailsFormProperties {
		Hostname: FormControl<string | null | undefined>,
		IpAddress: FormControl<string | null | undefined>,
	}
	export function CreateAwsEcsTaskDefinitionContainerDefinitionsExtraHostsDetailsFormGroup() {
		return new FormGroup<AwsEcsTaskDefinitionContainerDefinitionsExtraHostsDetailsFormProperties>({
			Hostname: new FormControl<string | null | undefined>(undefined),
			IpAddress: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The FireLens configuration for the container. The configuration specifies and configures a log router for container logs. */
	export interface AwsEcsTaskDefinitionContainerDefinitionsFirelensConfigurationDetails {
		Options?: FieldMap;
		Type?: string;
	}

	/** The FireLens configuration for the container. The configuration specifies and configures a log router for container logs. */
	export interface AwsEcsTaskDefinitionContainerDefinitionsFirelensConfigurationDetailsFormProperties {
		Type: FormControl<string | null | undefined>,
	}
	export function CreateAwsEcsTaskDefinitionContainerDefinitionsFirelensConfigurationDetailsFormGroup() {
		return new FormGroup<AwsEcsTaskDefinitionContainerDefinitionsFirelensConfigurationDetailsFormProperties>({
			Type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The container health check command and associated configuration parameters for the container. */
	export interface AwsEcsTaskDefinitionContainerDefinitionsHealthCheckDetails {
		Command?: Array<string>;
		Interval?: number | null;
		Retries?: number | null;
		StartPeriod?: number | null;
		Timeout?: number | null;
	}

	/** The container health check command and associated configuration parameters for the container. */
	export interface AwsEcsTaskDefinitionContainerDefinitionsHealthCheckDetailsFormProperties {
		Interval: FormControl<number | null | undefined>,
		Retries: FormControl<number | null | undefined>,
		StartPeriod: FormControl<number | null | undefined>,
		Timeout: FormControl<number | null | undefined>,
	}
	export function CreateAwsEcsTaskDefinitionContainerDefinitionsHealthCheckDetailsFormGroup() {
		return new FormGroup<AwsEcsTaskDefinitionContainerDefinitionsHealthCheckDetailsFormProperties>({
			Interval: new FormControl<number | null | undefined>(undefined),
			Retries: new FormControl<number | null | undefined>(undefined),
			StartPeriod: new FormControl<number | null | undefined>(undefined),
			Timeout: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** &gt;Linux-specific modifications that are applied to the container, such as Linux kernel capabilities. */
	export interface AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDetails {
		Capabilities?: AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesDetails;
		Devices?: Array<AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesDetails>;
		InitProcessEnabled?: boolean | null;
		MaxSwap?: number | null;
		SharedMemorySize?: number | null;
		Swappiness?: number | null;
		Tmpfs?: Array<AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsDetails>;
	}

	/** &gt;Linux-specific modifications that are applied to the container, such as Linux kernel capabilities. */
	export interface AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDetailsFormProperties {
		InitProcessEnabled: FormControl<boolean | null | undefined>,
		MaxSwap: FormControl<number | null | undefined>,
		SharedMemorySize: FormControl<number | null | undefined>,
		Swappiness: FormControl<number | null | undefined>,
	}
	export function CreateAwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDetailsFormGroup() {
		return new FormGroup<AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDetailsFormProperties>({
			InitProcessEnabled: new FormControl<boolean | null | undefined>(undefined),
			MaxSwap: new FormControl<number | null | undefined>(undefined),
			SharedMemorySize: new FormControl<number | null | undefined>(undefined),
			Swappiness: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The Linux capabilities for the container that are added to or dropped from the default configuration provided by Docker. */
	export interface AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesDetails {
		Add?: Array<string>;
		Drop?: Array<string>;
	}

	/** The Linux capabilities for the container that are added to or dropped from the default configuration provided by Docker. */
	export interface AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesDetailsFormProperties {
	}
	export function CreateAwsEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesDetailsFormGroup() {
		return new FormGroup<AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesDetailsFormProperties>({
		});

	}


	/** A host device to expose to the container. */
	export interface AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesDetails {
		ContainerPath?: string;
		HostPath?: string;
		Permissions?: Array<string>;
	}

	/** A host device to expose to the container. */
	export interface AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesDetailsFormProperties {
		ContainerPath: FormControl<string | null | undefined>,
		HostPath: FormControl<string | null | undefined>,
	}
	export function CreateAwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesDetailsFormGroup() {
		return new FormGroup<AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesDetailsFormProperties>({
			ContainerPath: new FormControl<string | null | undefined>(undefined),
			HostPath: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The container path, mount options, and size (in MiB) of a tmpfs mount. */
	export interface AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsDetails {
		ContainerPath?: string;
		MountOptions?: Array<string>;
		Size?: number | null;
	}

	/** The container path, mount options, and size (in MiB) of a tmpfs mount. */
	export interface AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsDetailsFormProperties {
		ContainerPath: FormControl<string | null | undefined>,
		Size: FormControl<number | null | undefined>,
	}
	export function CreateAwsEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsDetailsFormGroup() {
		return new FormGroup<AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsDetailsFormProperties>({
			ContainerPath: new FormControl<string | null | undefined>(undefined),
			Size: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The log configuration specification for the container. */
	export interface AwsEcsTaskDefinitionContainerDefinitionsLogConfigurationDetails {
		LogDriver?: string;
		Options?: FieldMap;
		SecretOptions?: Array<AwsEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsDetails>;
	}

	/** The log configuration specification for the container. */
	export interface AwsEcsTaskDefinitionContainerDefinitionsLogConfigurationDetailsFormProperties {
		LogDriver: FormControl<string | null | undefined>,
	}
	export function CreateAwsEcsTaskDefinitionContainerDefinitionsLogConfigurationDetailsFormGroup() {
		return new FormGroup<AwsEcsTaskDefinitionContainerDefinitionsLogConfigurationDetailsFormProperties>({
			LogDriver: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A secret to pass to the log configuration. */
	export interface AwsEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsDetails {
		Name?: string;
		ValueFrom?: string;
	}

	/** A secret to pass to the log configuration. */
	export interface AwsEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsDetailsFormProperties {
		Name: FormControl<string | null | undefined>,
		ValueFrom: FormControl<string | null | undefined>,
	}
	export function CreateAwsEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsDetailsFormGroup() {
		return new FormGroup<AwsEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsDetailsFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			ValueFrom: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A mount point for the data volumes in the container. */
	export interface AwsEcsTaskDefinitionContainerDefinitionsMountPointsDetails {
		ContainerPath?: string;
		ReadOnly?: boolean | null;
		SourceVolume?: string;
	}

	/** A mount point for the data volumes in the container. */
	export interface AwsEcsTaskDefinitionContainerDefinitionsMountPointsDetailsFormProperties {
		ContainerPath: FormControl<string | null | undefined>,
		ReadOnly: FormControl<boolean | null | undefined>,
		SourceVolume: FormControl<string | null | undefined>,
	}
	export function CreateAwsEcsTaskDefinitionContainerDefinitionsMountPointsDetailsFormGroup() {
		return new FormGroup<AwsEcsTaskDefinitionContainerDefinitionsMountPointsDetailsFormProperties>({
			ContainerPath: new FormControl<string | null | undefined>(undefined),
			ReadOnly: new FormControl<boolean | null | undefined>(undefined),
			SourceVolume: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A port mapping for the container. */
	export interface AwsEcsTaskDefinitionContainerDefinitionsPortMappingsDetails {
		ContainerPort?: number | null;
		HostPort?: number | null;
		Protocol?: string;
	}

	/** A port mapping for the container. */
	export interface AwsEcsTaskDefinitionContainerDefinitionsPortMappingsDetailsFormProperties {
		ContainerPort: FormControl<number | null | undefined>,
		HostPort: FormControl<number | null | undefined>,
		Protocol: FormControl<string | null | undefined>,
	}
	export function CreateAwsEcsTaskDefinitionContainerDefinitionsPortMappingsDetailsFormGroup() {
		return new FormGroup<AwsEcsTaskDefinitionContainerDefinitionsPortMappingsDetailsFormProperties>({
			ContainerPort: new FormControl<number | null | undefined>(undefined),
			HostPort: new FormControl<number | null | undefined>(undefined),
			Protocol: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The private repository authentication credentials to use. */
	export interface AwsEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsDetails {
		CredentialsParameter?: string;
	}

	/** The private repository authentication credentials to use. */
	export interface AwsEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsDetailsFormProperties {
		CredentialsParameter: FormControl<string | null | undefined>,
	}
	export function CreateAwsEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsDetailsFormGroup() {
		return new FormGroup<AwsEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsDetailsFormProperties>({
			CredentialsParameter: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A resource to assign to a container. */
	export interface AwsEcsTaskDefinitionContainerDefinitionsResourceRequirementsDetails {
		Type?: string;
		Value?: string;
	}

	/** A resource to assign to a container. */
	export interface AwsEcsTaskDefinitionContainerDefinitionsResourceRequirementsDetailsFormProperties {
		Type: FormControl<string | null | undefined>,
		Value: FormControl<string | null | undefined>,
	}
	export function CreateAwsEcsTaskDefinitionContainerDefinitionsResourceRequirementsDetailsFormGroup() {
		return new FormGroup<AwsEcsTaskDefinitionContainerDefinitionsResourceRequirementsDetailsFormProperties>({
			Type: new FormControl<string | null | undefined>(undefined),
			Value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A secret to pass to the container. */
	export interface AwsEcsTaskDefinitionContainerDefinitionsSecretsDetails {
		Name?: string;
		ValueFrom?: string;
	}

	/** A secret to pass to the container. */
	export interface AwsEcsTaskDefinitionContainerDefinitionsSecretsDetailsFormProperties {
		Name: FormControl<string | null | undefined>,
		ValueFrom: FormControl<string | null | undefined>,
	}
	export function CreateAwsEcsTaskDefinitionContainerDefinitionsSecretsDetailsFormGroup() {
		return new FormGroup<AwsEcsTaskDefinitionContainerDefinitionsSecretsDetailsFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			ValueFrom: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A namespaced kernel parameter to set in the container. */
	export interface AwsEcsTaskDefinitionContainerDefinitionsSystemControlsDetails {
		Namespace?: string;
		Value?: string;
	}

	/** A namespaced kernel parameter to set in the container. */
	export interface AwsEcsTaskDefinitionContainerDefinitionsSystemControlsDetailsFormProperties {
		Namespace: FormControl<string | null | undefined>,
		Value: FormControl<string | null | undefined>,
	}
	export function CreateAwsEcsTaskDefinitionContainerDefinitionsSystemControlsDetailsFormGroup() {
		return new FormGroup<AwsEcsTaskDefinitionContainerDefinitionsSystemControlsDetailsFormProperties>({
			Namespace: new FormControl<string | null | undefined>(undefined),
			Value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A ulimit to set in the container. */
	export interface AwsEcsTaskDefinitionContainerDefinitionsUlimitsDetails {
		HardLimit?: number | null;
		Name?: string;
		SoftLimit?: number | null;
	}

	/** A ulimit to set in the container. */
	export interface AwsEcsTaskDefinitionContainerDefinitionsUlimitsDetailsFormProperties {
		HardLimit: FormControl<number | null | undefined>,
		Name: FormControl<string | null | undefined>,
		SoftLimit: FormControl<number | null | undefined>,
	}
	export function CreateAwsEcsTaskDefinitionContainerDefinitionsUlimitsDetailsFormGroup() {
		return new FormGroup<AwsEcsTaskDefinitionContainerDefinitionsUlimitsDetailsFormProperties>({
			HardLimit: new FormControl<number | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			SoftLimit: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A data volume to mount from another container. */
	export interface AwsEcsTaskDefinitionContainerDefinitionsVolumesFromDetails {
		ReadOnly?: boolean | null;
		SourceContainer?: string;
	}

	/** A data volume to mount from another container. */
	export interface AwsEcsTaskDefinitionContainerDefinitionsVolumesFromDetailsFormProperties {
		ReadOnly: FormControl<boolean | null | undefined>,
		SourceContainer: FormControl<string | null | undefined>,
	}
	export function CreateAwsEcsTaskDefinitionContainerDefinitionsVolumesFromDetailsFormGroup() {
		return new FormGroup<AwsEcsTaskDefinitionContainerDefinitionsVolumesFromDetailsFormProperties>({
			ReadOnly: new FormControl<boolean | null | undefined>(undefined),
			SourceContainer: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An Elastic Inference accelerator to use for the containers in the task. */
	export interface AwsEcsTaskDefinitionInferenceAcceleratorsDetails {
		DeviceName?: string;
		DeviceType?: string;
	}

	/** An Elastic Inference accelerator to use for the containers in the task. */
	export interface AwsEcsTaskDefinitionInferenceAcceleratorsDetailsFormProperties {
		DeviceName: FormControl<string | null | undefined>,
		DeviceType: FormControl<string | null | undefined>,
	}
	export function CreateAwsEcsTaskDefinitionInferenceAcceleratorsDetailsFormGroup() {
		return new FormGroup<AwsEcsTaskDefinitionInferenceAcceleratorsDetailsFormProperties>({
			DeviceName: new FormControl<string | null | undefined>(undefined),
			DeviceType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A placement constraint object to use for tasks. */
	export interface AwsEcsTaskDefinitionPlacementConstraintsDetails {
		Expression?: string;
		Type?: string;
	}

	/** A placement constraint object to use for tasks. */
	export interface AwsEcsTaskDefinitionPlacementConstraintsDetailsFormProperties {
		Expression: FormControl<string | null | undefined>,
		Type: FormControl<string | null | undefined>,
	}
	export function CreateAwsEcsTaskDefinitionPlacementConstraintsDetailsFormGroup() {
		return new FormGroup<AwsEcsTaskDefinitionPlacementConstraintsDetailsFormProperties>({
			Expression: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The configuration details for the App Mesh proxy. */
	export interface AwsEcsTaskDefinitionProxyConfigurationDetails {
		ContainerName?: string;
		ProxyConfigurationProperties?: Array<AwsEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesDetails>;
		Type?: string;
	}

	/** The configuration details for the App Mesh proxy. */
	export interface AwsEcsTaskDefinitionProxyConfigurationDetailsFormProperties {
		ContainerName: FormControl<string | null | undefined>,
		Type: FormControl<string | null | undefined>,
	}
	export function CreateAwsEcsTaskDefinitionProxyConfigurationDetailsFormGroup() {
		return new FormGroup<AwsEcsTaskDefinitionProxyConfigurationDetailsFormProperties>({
			ContainerName: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A network configuration parameter to provide to the Container Network Interface (CNI) plugin. */
	export interface AwsEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesDetails {
		Name?: string;
		Value?: string;
	}

	/** A network configuration parameter to provide to the Container Network Interface (CNI) plugin. */
	export interface AwsEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesDetailsFormProperties {
		Name: FormControl<string | null | undefined>,
		Value: FormControl<string | null | undefined>,
	}
	export function CreateAwsEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesDetailsFormGroup() {
		return new FormGroup<AwsEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesDetailsFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A data volume to mount from another container. */
	export interface AwsEcsTaskDefinitionVolumesDetails {
		DockerVolumeConfiguration?: AwsEcsTaskDefinitionVolumesDockerVolumeConfigurationDetails;
		EfsVolumeConfiguration?: AwsEcsTaskDefinitionVolumesEfsVolumeConfigurationDetails;
		Host?: AwsEcsTaskDefinitionVolumesHostDetails;
		Name?: string;
	}

	/** A data volume to mount from another container. */
	export interface AwsEcsTaskDefinitionVolumesDetailsFormProperties {
		Name: FormControl<string | null | undefined>,
	}
	export function CreateAwsEcsTaskDefinitionVolumesDetailsFormGroup() {
		return new FormGroup<AwsEcsTaskDefinitionVolumesDetailsFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about a Docker volume. */
	export interface AwsEcsTaskDefinitionVolumesDockerVolumeConfigurationDetails {
		Autoprovision?: boolean | null;
		Driver?: string;
		DriverOpts?: FieldMap;
		Labels?: FieldMap;
		Scope?: string;
	}

	/** Information about a Docker volume. */
	export interface AwsEcsTaskDefinitionVolumesDockerVolumeConfigurationDetailsFormProperties {
		Autoprovision: FormControl<boolean | null | undefined>,
		Driver: FormControl<string | null | undefined>,
		Scope: FormControl<string | null | undefined>,
	}
	export function CreateAwsEcsTaskDefinitionVolumesDockerVolumeConfigurationDetailsFormGroup() {
		return new FormGroup<AwsEcsTaskDefinitionVolumesDockerVolumeConfigurationDetailsFormProperties>({
			Autoprovision: new FormControl<boolean | null | undefined>(undefined),
			Driver: new FormControl<string | null | undefined>(undefined),
			Scope: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about the Amazon Elastic File System file system that is used for task storage. */
	export interface AwsEcsTaskDefinitionVolumesEfsVolumeConfigurationDetails {
		AuthorizationConfig?: AwsEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigDetails;
		FilesystemId?: string;
		RootDirectory?: string;
		TransitEncryption?: string;
		TransitEncryptionPort?: number | null;
	}

	/** Information about the Amazon Elastic File System file system that is used for task storage. */
	export interface AwsEcsTaskDefinitionVolumesEfsVolumeConfigurationDetailsFormProperties {
		FilesystemId: FormControl<string | null | undefined>,
		RootDirectory: FormControl<string | null | undefined>,
		TransitEncryption: FormControl<string | null | undefined>,
		TransitEncryptionPort: FormControl<number | null | undefined>,
	}
	export function CreateAwsEcsTaskDefinitionVolumesEfsVolumeConfigurationDetailsFormGroup() {
		return new FormGroup<AwsEcsTaskDefinitionVolumesEfsVolumeConfigurationDetailsFormProperties>({
			FilesystemId: new FormControl<string | null | undefined>(undefined),
			RootDirectory: new FormControl<string | null | undefined>(undefined),
			TransitEncryption: new FormControl<string | null | undefined>(undefined),
			TransitEncryptionPort: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** <p/> */
	export interface AwsEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigDetails {
		AccessPointId?: string;
		Iam?: string;
	}

	/** <p/> */
	export interface AwsEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigDetailsFormProperties {
		AccessPointId: FormControl<string | null | undefined>,
		Iam: FormControl<string | null | undefined>,
	}
	export function CreateAwsEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigDetailsFormGroup() {
		return new FormGroup<AwsEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigDetailsFormProperties>({
			AccessPointId: new FormControl<string | null | undefined>(undefined),
			Iam: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about a bind mount host volume. */
	export interface AwsEcsTaskDefinitionVolumesHostDetails {
		SourcePath?: string;
	}

	/** Information about a bind mount host volume. */
	export interface AwsEcsTaskDefinitionVolumesHostDetailsFormProperties {
		SourcePath: FormControl<string | null | undefined>,
	}
	export function CreateAwsEcsTaskDefinitionVolumesHostDetailsFormGroup() {
		return new FormGroup<AwsEcsTaskDefinitionVolumesHostDetailsFormProperties>({
			SourcePath: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Container details related to a finding. */
	export interface ContainerDetails {
		ContainerRuntime?: string;
		Name?: string;
		ImageId?: string;
		ImageName?: string;
		LaunchedAt?: string;
		VolumeMounts?: Array<VolumeMount>;
		Privileged?: boolean | null;
	}

	/** Container details related to a finding. */
	export interface ContainerDetailsFormProperties {
		ContainerRuntime: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		ImageId: FormControl<string | null | undefined>,
		ImageName: FormControl<string | null | undefined>,
		LaunchedAt: FormControl<string | null | undefined>,
		Privileged: FormControl<boolean | null | undefined>,
	}
	export function CreateContainerDetailsFormGroup() {
		return new FormGroup<ContainerDetailsFormProperties>({
			ContainerRuntime: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			ImageId: new FormControl<string | null | undefined>(undefined),
			ImageName: new FormControl<string | null | undefined>(undefined),
			LaunchedAt: new FormControl<string | null | undefined>(undefined),
			Privileged: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Describes the mounting of a volume in a container.  */
	export interface VolumeMount {
		Name?: string;
		MountPath?: string;
	}

	/** Describes the mounting of a volume in a container.  */
	export interface VolumeMountFormProperties {
		Name: FormControl<string | null | undefined>,
		MountPath: FormControl<string | null | undefined>,
	}
	export function CreateVolumeMountFormGroup() {
		return new FormGroup<VolumeMountFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			MountPath: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details about an Amazon RDS event notification subscription. The subscription allows Amazon RDS to post events to an SNS topic. */
	export interface AwsRdsEventSubscriptionDetails {
		CustSubscriptionId?: string;
		CustomerAwsId?: string;
		Enabled?: boolean | null;
		EventCategoriesList?: Array<string>;
		EventSubscriptionArn?: string;
		SnsTopicArn?: string;
		SourceIdsList?: Array<string>;
		SourceType?: string;
		Status?: string;
		SubscriptionCreationTime?: string;
	}

	/** Details about an Amazon RDS event notification subscription. The subscription allows Amazon RDS to post events to an SNS topic. */
	export interface AwsRdsEventSubscriptionDetailsFormProperties {
		CustSubscriptionId: FormControl<string | null | undefined>,
		CustomerAwsId: FormControl<string | null | undefined>,
		Enabled: FormControl<boolean | null | undefined>,
		EventSubscriptionArn: FormControl<string | null | undefined>,
		SnsTopicArn: FormControl<string | null | undefined>,
		SourceType: FormControl<string | null | undefined>,
		Status: FormControl<string | null | undefined>,
		SubscriptionCreationTime: FormControl<string | null | undefined>,
	}
	export function CreateAwsRdsEventSubscriptionDetailsFormGroup() {
		return new FormGroup<AwsRdsEventSubscriptionDetailsFormProperties>({
			CustSubscriptionId: new FormControl<string | null | undefined>(undefined),
			CustomerAwsId: new FormControl<string | null | undefined>(undefined),
			Enabled: new FormControl<boolean | null | undefined>(undefined),
			EventSubscriptionArn: new FormControl<string | null | undefined>(undefined),
			SnsTopicArn: new FormControl<string | null | undefined>(undefined),
			SourceType: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
			SubscriptionCreationTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides details about a service within an ECS cluster. */
	export interface AwsEcsServiceDetails {
		CapacityProviderStrategy?: Array<AwsEcsServiceCapacityProviderStrategyDetails>;
		Cluster?: string;
		DeploymentConfiguration?: AwsEcsServiceDeploymentConfigurationDetails;
		DeploymentController?: AwsEcsServiceDeploymentControllerDetails;
		DesiredCount?: number | null;
		EnableEcsManagedTags?: boolean | null;
		EnableExecuteCommand?: boolean | null;
		HealthCheckGracePeriodSeconds?: number | null;
		LaunchType?: string;
		LoadBalancers?: Array<AwsEcsServiceLoadBalancersDetails>;
		Name?: string;
		NetworkConfiguration?: AwsEcsServiceNetworkConfigurationDetails;
		PlacementConstraints?: Array<AwsEcsServicePlacementConstraintsDetails>;
		PlacementStrategies?: Array<AwsEcsServicePlacementStrategiesDetails>;
		PlatformVersion?: string;
		PropagateTags?: string;
		Role?: string;
		SchedulingStrategy?: string;
		ServiceArn?: string;
		ServiceName?: string;
		ServiceRegistries?: Array<AwsEcsServiceServiceRegistriesDetails>;
		TaskDefinition?: string;
	}

	/** Provides details about a service within an ECS cluster. */
	export interface AwsEcsServiceDetailsFormProperties {
		Cluster: FormControl<string | null | undefined>,
		DesiredCount: FormControl<number | null | undefined>,
		EnableEcsManagedTags: FormControl<boolean | null | undefined>,
		EnableExecuteCommand: FormControl<boolean | null | undefined>,
		HealthCheckGracePeriodSeconds: FormControl<number | null | undefined>,
		LaunchType: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		PlatformVersion: FormControl<string | null | undefined>,
		PropagateTags: FormControl<string | null | undefined>,
		Role: FormControl<string | null | undefined>,
		SchedulingStrategy: FormControl<string | null | undefined>,
		ServiceArn: FormControl<string | null | undefined>,
		ServiceName: FormControl<string | null | undefined>,
		TaskDefinition: FormControl<string | null | undefined>,
	}
	export function CreateAwsEcsServiceDetailsFormGroup() {
		return new FormGroup<AwsEcsServiceDetailsFormProperties>({
			Cluster: new FormControl<string | null | undefined>(undefined),
			DesiredCount: new FormControl<number | null | undefined>(undefined),
			EnableEcsManagedTags: new FormControl<boolean | null | undefined>(undefined),
			EnableExecuteCommand: new FormControl<boolean | null | undefined>(undefined),
			HealthCheckGracePeriodSeconds: new FormControl<number | null | undefined>(undefined),
			LaunchType: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			PlatformVersion: new FormControl<string | null | undefined>(undefined),
			PropagateTags: new FormControl<string | null | undefined>(undefined),
			Role: new FormControl<string | null | undefined>(undefined),
			SchedulingStrategy: new FormControl<string | null | undefined>(undefined),
			ServiceArn: new FormControl<string | null | undefined>(undefined),
			ServiceName: new FormControl<string | null | undefined>(undefined),
			TaskDefinition: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Strategy item for the capacity provider strategy that the service uses. */
	export interface AwsEcsServiceCapacityProviderStrategyDetails {
		Base?: number | null;
		CapacityProvider?: string;
		Weight?: number | null;
	}

	/** Strategy item for the capacity provider strategy that the service uses. */
	export interface AwsEcsServiceCapacityProviderStrategyDetailsFormProperties {
		Base: FormControl<number | null | undefined>,
		CapacityProvider: FormControl<string | null | undefined>,
		Weight: FormControl<number | null | undefined>,
	}
	export function CreateAwsEcsServiceCapacityProviderStrategyDetailsFormGroup() {
		return new FormGroup<AwsEcsServiceCapacityProviderStrategyDetailsFormProperties>({
			Base: new FormControl<number | null | undefined>(undefined),
			CapacityProvider: new FormControl<string | null | undefined>(undefined),
			Weight: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Optional deployment parameters for the service. */
	export interface AwsEcsServiceDeploymentConfigurationDetails {
		DeploymentCircuitBreaker?: AwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerDetails;
		MaximumPercent?: number | null;
		MinimumHealthyPercent?: number | null;
	}

	/** Optional deployment parameters for the service. */
	export interface AwsEcsServiceDeploymentConfigurationDetailsFormProperties {
		MaximumPercent: FormControl<number | null | undefined>,
		MinimumHealthyPercent: FormControl<number | null | undefined>,
	}
	export function CreateAwsEcsServiceDeploymentConfigurationDetailsFormGroup() {
		return new FormGroup<AwsEcsServiceDeploymentConfigurationDetailsFormProperties>({
			MaximumPercent: new FormControl<number | null | undefined>(undefined),
			MinimumHealthyPercent: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Determines whether a service deployment fails if a service cannot reach a steady state. */
	export interface AwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerDetails {
		Enable?: boolean | null;
		Rollback?: boolean | null;
	}

	/** Determines whether a service deployment fails if a service cannot reach a steady state. */
	export interface AwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerDetailsFormProperties {
		Enable: FormControl<boolean | null | undefined>,
		Rollback: FormControl<boolean | null | undefined>,
	}
	export function CreateAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerDetailsFormGroup() {
		return new FormGroup<AwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerDetailsFormProperties>({
			Enable: new FormControl<boolean | null | undefined>(undefined),
			Rollback: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Information about the deployment controller type that the service uses. */
	export interface AwsEcsServiceDeploymentControllerDetails {
		Type?: string;
	}

	/** Information about the deployment controller type that the service uses. */
	export interface AwsEcsServiceDeploymentControllerDetailsFormProperties {
		Type: FormControl<string | null | undefined>,
	}
	export function CreateAwsEcsServiceDeploymentControllerDetailsFormGroup() {
		return new FormGroup<AwsEcsServiceDeploymentControllerDetailsFormProperties>({
			Type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about a load balancer that the service uses. */
	export interface AwsEcsServiceLoadBalancersDetails {
		ContainerName?: string;
		ContainerPort?: number | null;
		LoadBalancerName?: string;
		TargetGroupArn?: string;
	}

	/** Information about a load balancer that the service uses. */
	export interface AwsEcsServiceLoadBalancersDetailsFormProperties {
		ContainerName: FormControl<string | null | undefined>,
		ContainerPort: FormControl<number | null | undefined>,
		LoadBalancerName: FormControl<string | null | undefined>,
		TargetGroupArn: FormControl<string | null | undefined>,
	}
	export function CreateAwsEcsServiceLoadBalancersDetailsFormGroup() {
		return new FormGroup<AwsEcsServiceLoadBalancersDetailsFormProperties>({
			ContainerName: new FormControl<string | null | undefined>(undefined),
			ContainerPort: new FormControl<number | null | undefined>(undefined),
			LoadBalancerName: new FormControl<string | null | undefined>(undefined),
			TargetGroupArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** For tasks that use the <code>awsvpc</code> networking mode, the VPC subnet and security group configuration. */
	export interface AwsEcsServiceNetworkConfigurationDetails {
		AwsVpcConfiguration?: AwsEcsServiceNetworkConfigurationAwsVpcConfigurationDetails;
	}

	/** For tasks that use the <code>awsvpc</code> networking mode, the VPC subnet and security group configuration. */
	export interface AwsEcsServiceNetworkConfigurationDetailsFormProperties {
	}
	export function CreateAwsEcsServiceNetworkConfigurationDetailsFormGroup() {
		return new FormGroup<AwsEcsServiceNetworkConfigurationDetailsFormProperties>({
		});

	}


	/** For tasks that use the <code>awsvpc</code> networking mode, the VPC subnet and security group configuration. */
	export interface AwsEcsServiceNetworkConfigurationAwsVpcConfigurationDetails {
		AssignPublicIp?: string;
		SecurityGroups?: Array<string>;
		Subnets?: Array<string>;
	}

	/** For tasks that use the <code>awsvpc</code> networking mode, the VPC subnet and security group configuration. */
	export interface AwsEcsServiceNetworkConfigurationAwsVpcConfigurationDetailsFormProperties {
		AssignPublicIp: FormControl<string | null | undefined>,
	}
	export function CreateAwsEcsServiceNetworkConfigurationAwsVpcConfigurationDetailsFormGroup() {
		return new FormGroup<AwsEcsServiceNetworkConfigurationAwsVpcConfigurationDetailsFormProperties>({
			AssignPublicIp: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A placement constraint for the tasks in the service. */
	export interface AwsEcsServicePlacementConstraintsDetails {
		Expression?: string;
		Type?: string;
	}

	/** A placement constraint for the tasks in the service. */
	export interface AwsEcsServicePlacementConstraintsDetailsFormProperties {
		Expression: FormControl<string | null | undefined>,
		Type: FormControl<string | null | undefined>,
	}
	export function CreateAwsEcsServicePlacementConstraintsDetailsFormGroup() {
		return new FormGroup<AwsEcsServicePlacementConstraintsDetailsFormProperties>({
			Expression: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A placement strategy that determines how to place the tasks for the service. */
	export interface AwsEcsServicePlacementStrategiesDetails {
		Field?: string;
		Type?: string;
	}

	/** A placement strategy that determines how to place the tasks for the service. */
	export interface AwsEcsServicePlacementStrategiesDetailsFormProperties {
		Field: FormControl<string | null | undefined>,
		Type: FormControl<string | null | undefined>,
	}
	export function CreateAwsEcsServicePlacementStrategiesDetailsFormGroup() {
		return new FormGroup<AwsEcsServicePlacementStrategiesDetailsFormProperties>({
			Field: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about a service discovery registry to assign to the service. */
	export interface AwsEcsServiceServiceRegistriesDetails {
		ContainerName?: string;
		ContainerPort?: number | null;
		Port?: number | null;
		RegistryArn?: string;
	}

	/** Information about a service discovery registry to assign to the service. */
	export interface AwsEcsServiceServiceRegistriesDetailsFormProperties {
		ContainerName: FormControl<string | null | undefined>,
		ContainerPort: FormControl<number | null | undefined>,
		Port: FormControl<number | null | undefined>,
		RegistryArn: FormControl<string | null | undefined>,
	}
	export function CreateAwsEcsServiceServiceRegistriesDetailsFormGroup() {
		return new FormGroup<AwsEcsServiceServiceRegistriesDetailsFormProperties>({
			ContainerName: new FormControl<string | null | undefined>(undefined),
			ContainerPort: new FormControl<number | null | undefined>(undefined),
			Port: new FormControl<number | null | undefined>(undefined),
			RegistryArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details about a launch configuration. */
	export interface AwsAutoScalingLaunchConfigurationDetails {
		AssociatePublicIpAddress?: boolean | null;
		BlockDeviceMappings?: Array<AwsAutoScalingLaunchConfigurationBlockDeviceMappingsDetails>;
		ClassicLinkVpcId?: string;
		ClassicLinkVpcSecurityGroups?: Array<string>;
		CreatedTime?: string;
		EbsOptimized?: boolean | null;
		IamInstanceProfile?: string;
		ImageId?: string;
		InstanceMonitoring?: AwsAutoScalingLaunchConfigurationInstanceMonitoringDetails;
		InstanceType?: string;
		KernelId?: string;
		KeyName?: string;
		LaunchConfigurationName?: string;
		PlacementTenancy?: string;
		RamdiskId?: string;
		SecurityGroups?: Array<string>;
		SpotPrice?: string;
		UserData?: string;
		MetadataOptions?: AwsAutoScalingLaunchConfigurationMetadataOptions;
	}

	/** Details about a launch configuration. */
	export interface AwsAutoScalingLaunchConfigurationDetailsFormProperties {
		AssociatePublicIpAddress: FormControl<boolean | null | undefined>,
		ClassicLinkVpcId: FormControl<string | null | undefined>,
		CreatedTime: FormControl<string | null | undefined>,
		EbsOptimized: FormControl<boolean | null | undefined>,
		IamInstanceProfile: FormControl<string | null | undefined>,
		ImageId: FormControl<string | null | undefined>,
		InstanceType: FormControl<string | null | undefined>,
		KernelId: FormControl<string | null | undefined>,
		KeyName: FormControl<string | null | undefined>,
		LaunchConfigurationName: FormControl<string | null | undefined>,
		PlacementTenancy: FormControl<string | null | undefined>,
		RamdiskId: FormControl<string | null | undefined>,
		SpotPrice: FormControl<string | null | undefined>,
		UserData: FormControl<string | null | undefined>,
	}
	export function CreateAwsAutoScalingLaunchConfigurationDetailsFormGroup() {
		return new FormGroup<AwsAutoScalingLaunchConfigurationDetailsFormProperties>({
			AssociatePublicIpAddress: new FormControl<boolean | null | undefined>(undefined),
			ClassicLinkVpcId: new FormControl<string | null | undefined>(undefined),
			CreatedTime: new FormControl<string | null | undefined>(undefined),
			EbsOptimized: new FormControl<boolean | null | undefined>(undefined),
			IamInstanceProfile: new FormControl<string | null | undefined>(undefined),
			ImageId: new FormControl<string | null | undefined>(undefined),
			InstanceType: new FormControl<string | null | undefined>(undefined),
			KernelId: new FormControl<string | null | undefined>(undefined),
			KeyName: new FormControl<string | null | undefined>(undefined),
			LaunchConfigurationName: new FormControl<string | null | undefined>(undefined),
			PlacementTenancy: new FormControl<string | null | undefined>(undefined),
			RamdiskId: new FormControl<string | null | undefined>(undefined),
			SpotPrice: new FormControl<string | null | undefined>(undefined),
			UserData: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A block device for the instance. */
	export interface AwsAutoScalingLaunchConfigurationBlockDeviceMappingsDetails {
		DeviceName?: string;
		Ebs?: AwsAutoScalingLaunchConfigurationBlockDeviceMappingsEbsDetails;
		NoDevice?: boolean | null;
		VirtualName?: string;
	}

	/** A block device for the instance. */
	export interface AwsAutoScalingLaunchConfigurationBlockDeviceMappingsDetailsFormProperties {
		DeviceName: FormControl<string | null | undefined>,
		NoDevice: FormControl<boolean | null | undefined>,
		VirtualName: FormControl<string | null | undefined>,
	}
	export function CreateAwsAutoScalingLaunchConfigurationBlockDeviceMappingsDetailsFormGroup() {
		return new FormGroup<AwsAutoScalingLaunchConfigurationBlockDeviceMappingsDetailsFormProperties>({
			DeviceName: new FormControl<string | null | undefined>(undefined),
			NoDevice: new FormControl<boolean | null | undefined>(undefined),
			VirtualName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Parameters that are used to automatically set up EBS volumes when an instance is launched. */
	export interface AwsAutoScalingLaunchConfigurationBlockDeviceMappingsEbsDetails {
		DeleteOnTermination?: boolean | null;
		Encrypted?: boolean | null;
		Iops?: number | null;
		SnapshotId?: string;
		VolumeSize?: number | null;
		VolumeType?: string;
	}

	/** Parameters that are used to automatically set up EBS volumes when an instance is launched. */
	export interface AwsAutoScalingLaunchConfigurationBlockDeviceMappingsEbsDetailsFormProperties {
		DeleteOnTermination: FormControl<boolean | null | undefined>,
		Encrypted: FormControl<boolean | null | undefined>,
		Iops: FormControl<number | null | undefined>,
		SnapshotId: FormControl<string | null | undefined>,
		VolumeSize: FormControl<number | null | undefined>,
		VolumeType: FormControl<string | null | undefined>,
	}
	export function CreateAwsAutoScalingLaunchConfigurationBlockDeviceMappingsEbsDetailsFormGroup() {
		return new FormGroup<AwsAutoScalingLaunchConfigurationBlockDeviceMappingsEbsDetailsFormProperties>({
			DeleteOnTermination: new FormControl<boolean | null | undefined>(undefined),
			Encrypted: new FormControl<boolean | null | undefined>(undefined),
			Iops: new FormControl<number | null | undefined>(undefined),
			SnapshotId: new FormControl<string | null | undefined>(undefined),
			VolumeSize: new FormControl<number | null | undefined>(undefined),
			VolumeType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about the type of monitoring for instances in the group. */
	export interface AwsAutoScalingLaunchConfigurationInstanceMonitoringDetails {
		Enabled?: boolean | null;
	}

	/** Information about the type of monitoring for instances in the group. */
	export interface AwsAutoScalingLaunchConfigurationInstanceMonitoringDetailsFormProperties {
		Enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateAwsAutoScalingLaunchConfigurationInstanceMonitoringDetailsFormGroup() {
		return new FormGroup<AwsAutoScalingLaunchConfigurationInstanceMonitoringDetailsFormProperties>({
			Enabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** The metadata options for the instances. */
	export interface AwsAutoScalingLaunchConfigurationMetadataOptions {
		HttpEndpoint?: string;
		HttpPutResponseHopLimit?: number | null;
		HttpTokens?: string;
	}

	/** The metadata options for the instances. */
	export interface AwsAutoScalingLaunchConfigurationMetadataOptionsFormProperties {
		HttpEndpoint: FormControl<string | null | undefined>,
		HttpPutResponseHopLimit: FormControl<number | null | undefined>,
		HttpTokens: FormControl<string | null | undefined>,
	}
	export function CreateAwsAutoScalingLaunchConfigurationMetadataOptionsFormGroup() {
		return new FormGroup<AwsAutoScalingLaunchConfigurationMetadataOptionsFormProperties>({
			HttpEndpoint: new FormControl<string | null | undefined>(undefined),
			HttpPutResponseHopLimit: new FormControl<number | null | undefined>(undefined),
			HttpTokens: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details about an Amazon EC2 VPN connection. */
	export interface AwsEc2VpnConnectionDetails {
		VpnConnectionId?: string;
		State?: string;
		CustomerGatewayId?: string;
		CustomerGatewayConfiguration?: string;
		Type?: string;
		VpnGatewayId?: string;
		Category?: string;
		VgwTelemetry?: Array<AwsEc2VpnConnectionVgwTelemetryDetails>;
		Options?: AwsEc2VpnConnectionOptionsDetails;
		Routes?: Array<AwsEc2VpnConnectionRoutesDetails>;
		TransitGatewayId?: string;
	}

	/** Details about an Amazon EC2 VPN connection. */
	export interface AwsEc2VpnConnectionDetailsFormProperties {
		VpnConnectionId: FormControl<string | null | undefined>,
		State: FormControl<string | null | undefined>,
		CustomerGatewayId: FormControl<string | null | undefined>,
		CustomerGatewayConfiguration: FormControl<string | null | undefined>,
		Type: FormControl<string | null | undefined>,
		VpnGatewayId: FormControl<string | null | undefined>,
		Category: FormControl<string | null | undefined>,
		TransitGatewayId: FormControl<string | null | undefined>,
	}
	export function CreateAwsEc2VpnConnectionDetailsFormGroup() {
		return new FormGroup<AwsEc2VpnConnectionDetailsFormProperties>({
			VpnConnectionId: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<string | null | undefined>(undefined),
			CustomerGatewayId: new FormControl<string | null | undefined>(undefined),
			CustomerGatewayConfiguration: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<string | null | undefined>(undefined),
			VpnGatewayId: new FormControl<string | null | undefined>(undefined),
			Category: new FormControl<string | null | undefined>(undefined),
			TransitGatewayId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about the VPN tunnel. */
	export interface AwsEc2VpnConnectionVgwTelemetryDetails {
		AcceptedRouteCount?: number | null;
		CertificateArn?: string;
		LastStatusChange?: string;
		OutsideIpAddress?: string;
		Status?: string;
		StatusMessage?: string;
	}

	/** Information about the VPN tunnel. */
	export interface AwsEc2VpnConnectionVgwTelemetryDetailsFormProperties {
		AcceptedRouteCount: FormControl<number | null | undefined>,
		CertificateArn: FormControl<string | null | undefined>,
		LastStatusChange: FormControl<string | null | undefined>,
		OutsideIpAddress: FormControl<string | null | undefined>,
		Status: FormControl<string | null | undefined>,
		StatusMessage: FormControl<string | null | undefined>,
	}
	export function CreateAwsEc2VpnConnectionVgwTelemetryDetailsFormGroup() {
		return new FormGroup<AwsEc2VpnConnectionVgwTelemetryDetailsFormProperties>({
			AcceptedRouteCount: new FormControl<number | null | undefined>(undefined),
			CertificateArn: new FormControl<string | null | undefined>(undefined),
			LastStatusChange: new FormControl<string | null | undefined>(undefined),
			OutsideIpAddress: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
			StatusMessage: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** VPN connection options. */
	export interface AwsEc2VpnConnectionOptionsDetails {
		StaticRoutesOnly?: boolean | null;
		TunnelOptions?: Array<AwsEc2VpnConnectionOptionsTunnelOptionsDetails>;
	}

	/** VPN connection options. */
	export interface AwsEc2VpnConnectionOptionsDetailsFormProperties {
		StaticRoutesOnly: FormControl<boolean | null | undefined>,
	}
	export function CreateAwsEc2VpnConnectionOptionsDetailsFormGroup() {
		return new FormGroup<AwsEc2VpnConnectionOptionsDetailsFormProperties>({
			StaticRoutesOnly: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** The VPN tunnel options. */
	export interface AwsEc2VpnConnectionOptionsTunnelOptionsDetails {
		DpdTimeoutSeconds?: number | null;
		IkeVersions?: Array<string>;
		OutsideIpAddress?: string;
		Phase1DhGroupNumbers?: Array<number> | null;
		Phase1EncryptionAlgorithms?: Array<string>;
		Phase1IntegrityAlgorithms?: Array<string>;
		Phase1LifetimeSeconds?: number | null;
		Phase2DhGroupNumbers?: Array<number> | null;
		Phase2EncryptionAlgorithms?: Array<string>;
		Phase2IntegrityAlgorithms?: Array<string>;
		Phase2LifetimeSeconds?: number | null;
		PreSharedKey?: string;
		RekeyFuzzPercentage?: number | null;
		RekeyMarginTimeSeconds?: number | null;
		ReplayWindowSize?: number | null;
		TunnelInsideCidr?: string;
	}

	/** The VPN tunnel options. */
	export interface AwsEc2VpnConnectionOptionsTunnelOptionsDetailsFormProperties {
		DpdTimeoutSeconds: FormControl<number | null | undefined>,
		OutsideIpAddress: FormControl<string | null | undefined>,
		Phase1LifetimeSeconds: FormControl<number | null | undefined>,
		Phase2LifetimeSeconds: FormControl<number | null | undefined>,
		PreSharedKey: FormControl<string | null | undefined>,
		RekeyFuzzPercentage: FormControl<number | null | undefined>,
		RekeyMarginTimeSeconds: FormControl<number | null | undefined>,
		ReplayWindowSize: FormControl<number | null | undefined>,
		TunnelInsideCidr: FormControl<string | null | undefined>,
	}
	export function CreateAwsEc2VpnConnectionOptionsTunnelOptionsDetailsFormGroup() {
		return new FormGroup<AwsEc2VpnConnectionOptionsTunnelOptionsDetailsFormProperties>({
			DpdTimeoutSeconds: new FormControl<number | null | undefined>(undefined),
			OutsideIpAddress: new FormControl<string | null | undefined>(undefined),
			Phase1LifetimeSeconds: new FormControl<number | null | undefined>(undefined),
			Phase2LifetimeSeconds: new FormControl<number | null | undefined>(undefined),
			PreSharedKey: new FormControl<string | null | undefined>(undefined),
			RekeyFuzzPercentage: new FormControl<number | null | undefined>(undefined),
			RekeyMarginTimeSeconds: new FormControl<number | null | undefined>(undefined),
			ReplayWindowSize: new FormControl<number | null | undefined>(undefined),
			TunnelInsideCidr: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A static routes associated with the VPN connection. */
	export interface AwsEc2VpnConnectionRoutesDetails {
		DestinationCidrBlock?: string;
		State?: string;
	}

	/** A static routes associated with the VPN connection. */
	export interface AwsEc2VpnConnectionRoutesDetailsFormProperties {
		DestinationCidrBlock: FormControl<string | null | undefined>,
		State: FormControl<string | null | undefined>,
	}
	export function CreateAwsEc2VpnConnectionRoutesDetailsFormGroup() {
		return new FormGroup<AwsEc2VpnConnectionRoutesDetailsFormProperties>({
			DestinationCidrBlock: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about an Amazon ECR image. */
	export interface AwsEcrContainerImageDetails {
		RegistryId?: string;
		RepositoryName?: string;
		Architecture?: string;
		ImageDigest?: string;
		ImageTags?: Array<string>;
		ImagePublishedAt?: string;
	}

	/** Information about an Amazon ECR image. */
	export interface AwsEcrContainerImageDetailsFormProperties {
		RegistryId: FormControl<string | null | undefined>,
		RepositoryName: FormControl<string | null | undefined>,
		Architecture: FormControl<string | null | undefined>,
		ImageDigest: FormControl<string | null | undefined>,
		ImagePublishedAt: FormControl<string | null | undefined>,
	}
	export function CreateAwsEcrContainerImageDetailsFormGroup() {
		return new FormGroup<AwsEcrContainerImageDetailsFormProperties>({
			RegistryId: new FormControl<string | null | undefined>(undefined),
			RepositoryName: new FormControl<string | null | undefined>(undefined),
			Architecture: new FormControl<string | null | undefined>(undefined),
			ImageDigest: new FormControl<string | null | undefined>(undefined),
			ImagePublishedAt: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about an Amazon OpenSearch Service domain. */
	export interface AwsOpenSearchServiceDomainDetails {
		Arn?: string;
		AccessPolicies?: string;
		DomainName?: string;
		Id?: string;
		DomainEndpoint?: string;
		EngineVersion?: string;
		EncryptionAtRestOptions?: AwsOpenSearchServiceDomainEncryptionAtRestOptionsDetails;
		NodeToNodeEncryptionOptions?: AwsOpenSearchServiceDomainNodeToNodeEncryptionOptionsDetails;
		ServiceSoftwareOptions?: AwsOpenSearchServiceDomainServiceSoftwareOptionsDetails;
		ClusterConfig?: AwsOpenSearchServiceDomainClusterConfigDetails;
		DomainEndpointOptions?: AwsOpenSearchServiceDomainDomainEndpointOptionsDetails;
		VpcOptions?: AwsOpenSearchServiceDomainVpcOptionsDetails;
		LogPublishingOptions?: AwsOpenSearchServiceDomainLogPublishingOptionsDetails;
		DomainEndpoints?: FieldMap;
		AdvancedSecurityOptions?: AwsOpenSearchServiceDomainAdvancedSecurityOptionsDetails;
	}

	/** Information about an Amazon OpenSearch Service domain. */
	export interface AwsOpenSearchServiceDomainDetailsFormProperties {
		Arn: FormControl<string | null | undefined>,
		AccessPolicies: FormControl<string | null | undefined>,
		DomainName: FormControl<string | null | undefined>,
		Id: FormControl<string | null | undefined>,
		DomainEndpoint: FormControl<string | null | undefined>,
		EngineVersion: FormControl<string | null | undefined>,
	}
	export function CreateAwsOpenSearchServiceDomainDetailsFormGroup() {
		return new FormGroup<AwsOpenSearchServiceDomainDetailsFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			AccessPolicies: new FormControl<string | null | undefined>(undefined),
			DomainName: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			DomainEndpoint: new FormControl<string | null | undefined>(undefined),
			EngineVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details about the configuration for encryption at rest for the OpenSearch domain. */
	export interface AwsOpenSearchServiceDomainEncryptionAtRestOptionsDetails {
		Enabled?: boolean | null;
		KmsKeyId?: string;
	}

	/** Details about the configuration for encryption at rest for the OpenSearch domain. */
	export interface AwsOpenSearchServiceDomainEncryptionAtRestOptionsDetailsFormProperties {
		Enabled: FormControl<boolean | null | undefined>,
		KmsKeyId: FormControl<string | null | undefined>,
	}
	export function CreateAwsOpenSearchServiceDomainEncryptionAtRestOptionsDetailsFormGroup() {
		return new FormGroup<AwsOpenSearchServiceDomainEncryptionAtRestOptionsDetailsFormProperties>({
			Enabled: new FormControl<boolean | null | undefined>(undefined),
			KmsKeyId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides details about the configuration for node-to-node encryption. */
	export interface AwsOpenSearchServiceDomainNodeToNodeEncryptionOptionsDetails {
		Enabled?: boolean | null;
	}

	/** Provides details about the configuration for node-to-node encryption. */
	export interface AwsOpenSearchServiceDomainNodeToNodeEncryptionOptionsDetailsFormProperties {
		Enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateAwsOpenSearchServiceDomainNodeToNodeEncryptionOptionsDetailsFormGroup() {
		return new FormGroup<AwsOpenSearchServiceDomainNodeToNodeEncryptionOptionsDetailsFormProperties>({
			Enabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Provides information about the state of the domain relative to the latest service software. */
	export interface AwsOpenSearchServiceDomainServiceSoftwareOptionsDetails {
		AutomatedUpdateDate?: string;
		Cancellable?: boolean | null;
		CurrentVersion?: string;
		Description?: string;
		NewVersion?: string;
		UpdateAvailable?: boolean | null;
		UpdateStatus?: string;
		OptionalDeployment?: boolean | null;
	}

	/** Provides information about the state of the domain relative to the latest service software. */
	export interface AwsOpenSearchServiceDomainServiceSoftwareOptionsDetailsFormProperties {
		AutomatedUpdateDate: FormControl<string | null | undefined>,
		Cancellable: FormControl<boolean | null | undefined>,
		CurrentVersion: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		NewVersion: FormControl<string | null | undefined>,
		UpdateAvailable: FormControl<boolean | null | undefined>,
		UpdateStatus: FormControl<string | null | undefined>,
		OptionalDeployment: FormControl<boolean | null | undefined>,
	}
	export function CreateAwsOpenSearchServiceDomainServiceSoftwareOptionsDetailsFormGroup() {
		return new FormGroup<AwsOpenSearchServiceDomainServiceSoftwareOptionsDetailsFormProperties>({
			AutomatedUpdateDate: new FormControl<string | null | undefined>(undefined),
			Cancellable: new FormControl<boolean | null | undefined>(undefined),
			CurrentVersion: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			NewVersion: new FormControl<string | null | undefined>(undefined),
			UpdateAvailable: new FormControl<boolean | null | undefined>(undefined),
			UpdateStatus: new FormControl<string | null | undefined>(undefined),
			OptionalDeployment: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Details about the configuration of an OpenSearch cluster. */
	export interface AwsOpenSearchServiceDomainClusterConfigDetails {
		InstanceCount?: number | null;
		WarmEnabled?: boolean | null;
		WarmCount?: number | null;
		DedicatedMasterEnabled?: boolean | null;
		ZoneAwarenessConfig?: AwsOpenSearchServiceDomainClusterConfigZoneAwarenessConfigDetails;
		DedicatedMasterCount?: number | null;
		InstanceType?: string;
		WarmType?: string;
		ZoneAwarenessEnabled?: boolean | null;
		DedicatedMasterType?: string;
	}

	/** Details about the configuration of an OpenSearch cluster. */
	export interface AwsOpenSearchServiceDomainClusterConfigDetailsFormProperties {
		InstanceCount: FormControl<number | null | undefined>,
		WarmEnabled: FormControl<boolean | null | undefined>,
		WarmCount: FormControl<number | null | undefined>,
		DedicatedMasterEnabled: FormControl<boolean | null | undefined>,
		DedicatedMasterCount: FormControl<number | null | undefined>,
		InstanceType: FormControl<string | null | undefined>,
		WarmType: FormControl<string | null | undefined>,
		ZoneAwarenessEnabled: FormControl<boolean | null | undefined>,
		DedicatedMasterType: FormControl<string | null | undefined>,
	}
	export function CreateAwsOpenSearchServiceDomainClusterConfigDetailsFormGroup() {
		return new FormGroup<AwsOpenSearchServiceDomainClusterConfigDetailsFormProperties>({
			InstanceCount: new FormControl<number | null | undefined>(undefined),
			WarmEnabled: new FormControl<boolean | null | undefined>(undefined),
			WarmCount: new FormControl<number | null | undefined>(undefined),
			DedicatedMasterEnabled: new FormControl<boolean | null | undefined>(undefined),
			DedicatedMasterCount: new FormControl<number | null | undefined>(undefined),
			InstanceType: new FormControl<string | null | undefined>(undefined),
			WarmType: new FormControl<string | null | undefined>(undefined),
			ZoneAwarenessEnabled: new FormControl<boolean | null | undefined>(undefined),
			DedicatedMasterType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Configuration options for zone awareness. */
	export interface AwsOpenSearchServiceDomainClusterConfigZoneAwarenessConfigDetails {
		AvailabilityZoneCount?: number | null;
	}

	/** Configuration options for zone awareness. */
	export interface AwsOpenSearchServiceDomainClusterConfigZoneAwarenessConfigDetailsFormProperties {
		AvailabilityZoneCount: FormControl<number | null | undefined>,
	}
	export function CreateAwsOpenSearchServiceDomainClusterConfigZoneAwarenessConfigDetailsFormGroup() {
		return new FormGroup<AwsOpenSearchServiceDomainClusterConfigZoneAwarenessConfigDetailsFormProperties>({
			AvailabilityZoneCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Information about additional options for the domain endpoint. */
	export interface AwsOpenSearchServiceDomainDomainEndpointOptionsDetails {
		CustomEndpointCertificateArn?: string;
		CustomEndpointEnabled?: boolean | null;
		EnforceHTTPS?: boolean | null;
		CustomEndpoint?: string;
		TLSSecurityPolicy?: string;
	}

	/** Information about additional options for the domain endpoint. */
	export interface AwsOpenSearchServiceDomainDomainEndpointOptionsDetailsFormProperties {
		CustomEndpointCertificateArn: FormControl<string | null | undefined>,
		CustomEndpointEnabled: FormControl<boolean | null | undefined>,
		EnforceHTTPS: FormControl<boolean | null | undefined>,
		CustomEndpoint: FormControl<string | null | undefined>,
		TLSSecurityPolicy: FormControl<string | null | undefined>,
	}
	export function CreateAwsOpenSearchServiceDomainDomainEndpointOptionsDetailsFormGroup() {
		return new FormGroup<AwsOpenSearchServiceDomainDomainEndpointOptionsDetailsFormProperties>({
			CustomEndpointCertificateArn: new FormControl<string | null | undefined>(undefined),
			CustomEndpointEnabled: new FormControl<boolean | null | undefined>(undefined),
			EnforceHTTPS: new FormControl<boolean | null | undefined>(undefined),
			CustomEndpoint: new FormControl<string | null | undefined>(undefined),
			TLSSecurityPolicy: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information that OpenSearch Service derives based on the <code>VPCOptions</code> for the domain. */
	export interface AwsOpenSearchServiceDomainVpcOptionsDetails {
		SecurityGroupIds?: Array<string>;
		SubnetIds?: Array<string>;
	}

	/** Contains information that OpenSearch Service derives based on the <code>VPCOptions</code> for the domain. */
	export interface AwsOpenSearchServiceDomainVpcOptionsDetailsFormProperties {
	}
	export function CreateAwsOpenSearchServiceDomainVpcOptionsDetailsFormGroup() {
		return new FormGroup<AwsOpenSearchServiceDomainVpcOptionsDetailsFormProperties>({
		});

	}


	/** Configures the CloudWatch Logs to publish for the OpenSearch domain. */
	export interface AwsOpenSearchServiceDomainLogPublishingOptionsDetails {
		IndexSlowLogs?: AwsOpenSearchServiceDomainLogPublishingOption;
		SearchSlowLogs?: AwsOpenSearchServiceDomainLogPublishingOption;
		AuditLogs?: AwsOpenSearchServiceDomainLogPublishingOption;
	}

	/** Configures the CloudWatch Logs to publish for the OpenSearch domain. */
	export interface AwsOpenSearchServiceDomainLogPublishingOptionsDetailsFormProperties {
	}
	export function CreateAwsOpenSearchServiceDomainLogPublishingOptionsDetailsFormGroup() {
		return new FormGroup<AwsOpenSearchServiceDomainLogPublishingOptionsDetailsFormProperties>({
		});

	}


	/** Configuration details for a log publishing option. */
	export interface AwsOpenSearchServiceDomainLogPublishingOption {
		CloudWatchLogsLogGroupArn?: string;
		Enabled?: boolean | null;
	}

	/** Configuration details for a log publishing option. */
	export interface AwsOpenSearchServiceDomainLogPublishingOptionFormProperties {
		CloudWatchLogsLogGroupArn: FormControl<string | null | undefined>,
		Enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateAwsOpenSearchServiceDomainLogPublishingOptionFormGroup() {
		return new FormGroup<AwsOpenSearchServiceDomainLogPublishingOptionFormProperties>({
			CloudWatchLogsLogGroupArn: new FormControl<string | null | undefined>(undefined),
			Enabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Provides information about domain access control options.  */
	export interface AwsOpenSearchServiceDomainAdvancedSecurityOptionsDetails {
		Enabled?: boolean | null;
		InternalUserDatabaseEnabled?: boolean | null;
		MasterUserOptions?: AwsOpenSearchServiceDomainMasterUserOptionsDetails;
	}

	/** Provides information about domain access control options.  */
	export interface AwsOpenSearchServiceDomainAdvancedSecurityOptionsDetailsFormProperties {
		Enabled: FormControl<boolean | null | undefined>,
		InternalUserDatabaseEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateAwsOpenSearchServiceDomainAdvancedSecurityOptionsDetailsFormGroup() {
		return new FormGroup<AwsOpenSearchServiceDomainAdvancedSecurityOptionsDetailsFormProperties>({
			Enabled: new FormControl<boolean | null | undefined>(undefined),
			InternalUserDatabaseEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Specifies information about the master user of the domain.  */
	export interface AwsOpenSearchServiceDomainMasterUserOptionsDetails {
		MasterUserArn?: string;
		MasterUserName?: string;
		MasterUserPassword?: string;
	}

	/** Specifies information about the master user of the domain.  */
	export interface AwsOpenSearchServiceDomainMasterUserOptionsDetailsFormProperties {
		MasterUserArn: FormControl<string | null | undefined>,
		MasterUserName: FormControl<string | null | undefined>,
		MasterUserPassword: FormControl<string | null | undefined>,
	}
	export function CreateAwsOpenSearchServiceDomainMasterUserOptionsDetailsFormGroup() {
		return new FormGroup<AwsOpenSearchServiceDomainMasterUserOptionsDetailsFormProperties>({
			MasterUserArn: new FormControl<string | null | undefined>(undefined),
			MasterUserName: new FormControl<string | null | undefined>(undefined),
			MasterUserPassword: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains details about the service configuration for a VPC endpoint service. */
	export interface AwsEc2VpcEndpointServiceDetails {
		AcceptanceRequired?: boolean | null;
		AvailabilityZones?: Array<string>;
		BaseEndpointDnsNames?: Array<string>;
		ManagesVpcEndpoints?: boolean | null;
		GatewayLoadBalancerArns?: Array<string>;
		NetworkLoadBalancerArns?: Array<string>;
		PrivateDnsName?: string;
		ServiceId?: string;
		ServiceName?: string;
		ServiceState?: string;
		ServiceType?: Array<AwsEc2VpcEndpointServiceServiceTypeDetails>;
	}

	/** Contains details about the service configuration for a VPC endpoint service. */
	export interface AwsEc2VpcEndpointServiceDetailsFormProperties {
		AcceptanceRequired: FormControl<boolean | null | undefined>,
		ManagesVpcEndpoints: FormControl<boolean | null | undefined>,
		PrivateDnsName: FormControl<string | null | undefined>,
		ServiceId: FormControl<string | null | undefined>,
		ServiceName: FormControl<string | null | undefined>,
		ServiceState: FormControl<string | null | undefined>,
	}
	export function CreateAwsEc2VpcEndpointServiceDetailsFormGroup() {
		return new FormGroup<AwsEc2VpcEndpointServiceDetailsFormProperties>({
			AcceptanceRequired: new FormControl<boolean | null | undefined>(undefined),
			ManagesVpcEndpoints: new FormControl<boolean | null | undefined>(undefined),
			PrivateDnsName: new FormControl<string | null | undefined>(undefined),
			ServiceId: new FormControl<string | null | undefined>(undefined),
			ServiceName: new FormControl<string | null | undefined>(undefined),
			ServiceState: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The service type information for a VPC endpoint service. */
	export interface AwsEc2VpcEndpointServiceServiceTypeDetails {
		ServiceType?: string;
	}

	/** The service type information for a VPC endpoint service. */
	export interface AwsEc2VpcEndpointServiceServiceTypeDetailsFormProperties {
		ServiceType: FormControl<string | null | undefined>,
	}
	export function CreateAwsEc2VpcEndpointServiceServiceTypeDetailsFormGroup() {
		return new FormGroup<AwsEc2VpcEndpointServiceServiceTypeDetailsFormProperties>({
			ServiceType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about the encryption configuration for X-Ray. */
	export interface AwsXrayEncryptionConfigDetails {
		KeyId?: string;
		Status?: string;
		Type?: string;
	}

	/** Information about the encryption configuration for X-Ray. */
	export interface AwsXrayEncryptionConfigDetailsFormProperties {
		KeyId: FormControl<string | null | undefined>,
		Status: FormControl<string | null | undefined>,
		Type: FormControl<string | null | undefined>,
	}
	export function CreateAwsXrayEncryptionConfigDetailsFormGroup() {
		return new FormGroup<AwsXrayEncryptionConfigDetailsFormProperties>({
			KeyId: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details about a rate-based rule for global resources. A rate-based rule provides settings to indicate when to allow, block, or count a request. Rate-based rules include the number of requests that arrive over a specified period of time. */
	export interface AwsWafRateBasedRuleDetails {
		MetricName?: string;
		Name?: string;
		RateKey?: string;
		RateLimit?: number | null;
		RuleId?: string;
		MatchPredicates?: Array<AwsWafRateBasedRuleMatchPredicate>;
	}

	/** Details about a rate-based rule for global resources. A rate-based rule provides settings to indicate when to allow, block, or count a request. Rate-based rules include the number of requests that arrive over a specified period of time. */
	export interface AwsWafRateBasedRuleDetailsFormProperties {
		MetricName: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		RateKey: FormControl<string | null | undefined>,
		RateLimit: FormControl<number | null | undefined>,
		RuleId: FormControl<string | null | undefined>,
	}
	export function CreateAwsWafRateBasedRuleDetailsFormGroup() {
		return new FormGroup<AwsWafRateBasedRuleDetailsFormProperties>({
			MetricName: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			RateKey: new FormControl<string | null | undefined>(undefined),
			RateLimit: new FormControl<number | null | undefined>(undefined),
			RuleId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A match predicate. A predicate might look for characteristics such as specific IP addresses, geographic locations, or sizes. */
	export interface AwsWafRateBasedRuleMatchPredicate {
		DataId?: string;
		Negated?: boolean | null;
		Type?: string;
	}

	/** A match predicate. A predicate might look for characteristics such as specific IP addresses, geographic locations, or sizes. */
	export interface AwsWafRateBasedRuleMatchPredicateFormProperties {
		DataId: FormControl<string | null | undefined>,
		Negated: FormControl<boolean | null | undefined>,
		Type: FormControl<string | null | undefined>,
	}
	export function CreateAwsWafRateBasedRuleMatchPredicateFormGroup() {
		return new FormGroup<AwsWafRateBasedRuleMatchPredicateFormProperties>({
			DataId: new FormControl<string | null | undefined>(undefined),
			Negated: new FormControl<boolean | null | undefined>(undefined),
			Type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** contains details about a rate-based rule for Regional resources. A rate-based rule provides settings to indicate when to allow, block, or count a request. Rate-based rules include the number of requests that arrive over a specified period of time. */
	export interface AwsWafRegionalRateBasedRuleDetails {
		MetricName?: string;
		Name?: string;
		RateKey?: string;
		RateLimit?: number | null;
		RuleId?: string;
		MatchPredicates?: Array<AwsWafRegionalRateBasedRuleMatchPredicate>;
	}

	/** contains details about a rate-based rule for Regional resources. A rate-based rule provides settings to indicate when to allow, block, or count a request. Rate-based rules include the number of requests that arrive over a specified period of time. */
	export interface AwsWafRegionalRateBasedRuleDetailsFormProperties {
		MetricName: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		RateKey: FormControl<string | null | undefined>,
		RateLimit: FormControl<number | null | undefined>,
		RuleId: FormControl<string | null | undefined>,
	}
	export function CreateAwsWafRegionalRateBasedRuleDetailsFormGroup() {
		return new FormGroup<AwsWafRegionalRateBasedRuleDetailsFormProperties>({
			MetricName: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			RateKey: new FormControl<string | null | undefined>(undefined),
			RateLimit: new FormControl<number | null | undefined>(undefined),
			RuleId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details for a match predicate. A predicate might look for characteristics such as specific IP addresses, geographic locations, or sizes. */
	export interface AwsWafRegionalRateBasedRuleMatchPredicate {
		DataId?: string;
		Negated?: boolean | null;
		Type?: string;
	}

	/** Details for a match predicate. A predicate might look for characteristics such as specific IP addresses, geographic locations, or sizes. */
	export interface AwsWafRegionalRateBasedRuleMatchPredicateFormProperties {
		DataId: FormControl<string | null | undefined>,
		Negated: FormControl<boolean | null | undefined>,
		Type: FormControl<string | null | undefined>,
	}
	export function CreateAwsWafRegionalRateBasedRuleMatchPredicateFormGroup() {
		return new FormGroup<AwsWafRegionalRateBasedRuleMatchPredicateFormProperties>({
			DataId: new FormControl<string | null | undefined>(undefined),
			Negated: new FormControl<boolean | null | undefined>(undefined),
			Type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides information about an Amazon Elastic Container Registry repository. */
	export interface AwsEcrRepositoryDetails {
		Arn?: string;
		ImageScanningConfiguration?: AwsEcrRepositoryImageScanningConfigurationDetails;
		ImageTagMutability?: string;
		LifecyclePolicy?: AwsEcrRepositoryLifecyclePolicyDetails;
		RepositoryName?: string;
		RepositoryPolicyText?: string;
	}

	/** Provides information about an Amazon Elastic Container Registry repository. */
	export interface AwsEcrRepositoryDetailsFormProperties {
		Arn: FormControl<string | null | undefined>,
		ImageTagMutability: FormControl<string | null | undefined>,
		RepositoryName: FormControl<string | null | undefined>,
		RepositoryPolicyText: FormControl<string | null | undefined>,
	}
	export function CreateAwsEcrRepositoryDetailsFormGroup() {
		return new FormGroup<AwsEcrRepositoryDetailsFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			ImageTagMutability: new FormControl<string | null | undefined>(undefined),
			RepositoryName: new FormControl<string | null | undefined>(undefined),
			RepositoryPolicyText: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The image scanning configuration for a repository. */
	export interface AwsEcrRepositoryImageScanningConfigurationDetails {
		ScanOnPush?: boolean | null;
	}

	/** The image scanning configuration for a repository. */
	export interface AwsEcrRepositoryImageScanningConfigurationDetailsFormProperties {
		ScanOnPush: FormControl<boolean | null | undefined>,
	}
	export function CreateAwsEcrRepositoryImageScanningConfigurationDetailsFormGroup() {
		return new FormGroup<AwsEcrRepositoryImageScanningConfigurationDetailsFormProperties>({
			ScanOnPush: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Information about the lifecycle policy for the repository. */
	export interface AwsEcrRepositoryLifecyclePolicyDetails {
		LifecyclePolicyText?: string;
		RegistryId?: string;
	}

	/** Information about the lifecycle policy for the repository. */
	export interface AwsEcrRepositoryLifecyclePolicyDetailsFormProperties {
		LifecyclePolicyText: FormControl<string | null | undefined>,
		RegistryId: FormControl<string | null | undefined>,
	}
	export function CreateAwsEcrRepositoryLifecyclePolicyDetailsFormGroup() {
		return new FormGroup<AwsEcrRepositoryLifecyclePolicyDetailsFormProperties>({
			LifecyclePolicyText: new FormControl<string | null | undefined>(undefined),
			RegistryId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides details about an Amazon EKS cluster. */
	export interface AwsEksClusterDetails {
		Arn?: string;
		CertificateAuthorityData?: string;
		ClusterStatus?: string;
		Endpoint?: string;
		Name?: string;
		ResourcesVpcConfig?: AwsEksClusterResourcesVpcConfigDetails;
		RoleArn?: string;
		Version?: string;
		Logging?: AwsEksClusterLoggingDetails;
	}

	/** Provides details about an Amazon EKS cluster. */
	export interface AwsEksClusterDetailsFormProperties {
		Arn: FormControl<string | null | undefined>,
		CertificateAuthorityData: FormControl<string | null | undefined>,
		ClusterStatus: FormControl<string | null | undefined>,
		Endpoint: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		RoleArn: FormControl<string | null | undefined>,
		Version: FormControl<string | null | undefined>,
	}
	export function CreateAwsEksClusterDetailsFormGroup() {
		return new FormGroup<AwsEksClusterDetailsFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			CertificateAuthorityData: new FormControl<string | null | undefined>(undefined),
			ClusterStatus: new FormControl<string | null | undefined>(undefined),
			Endpoint: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			RoleArn: new FormControl<string | null | undefined>(undefined),
			Version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about the VPC configuration used by the cluster control plane. */
	export interface AwsEksClusterResourcesVpcConfigDetails {
		SecurityGroupIds?: Array<string>;
		SubnetIds?: Array<string>;
		EndpointPublicAccess?: boolean | null;
	}

	/** Information about the VPC configuration used by the cluster control plane. */
	export interface AwsEksClusterResourcesVpcConfigDetailsFormProperties {
		EndpointPublicAccess: FormControl<boolean | null | undefined>,
	}
	export function CreateAwsEksClusterResourcesVpcConfigDetailsFormGroup() {
		return new FormGroup<AwsEksClusterResourcesVpcConfigDetailsFormProperties>({
			EndpointPublicAccess: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** The logging configuration for an Amazon EKS cluster. */
	export interface AwsEksClusterLoggingDetails {
		ClusterLogging?: Array<AwsEksClusterLoggingClusterLoggingDetails>;
	}

	/** The logging configuration for an Amazon EKS cluster. */
	export interface AwsEksClusterLoggingDetailsFormProperties {
	}
	export function CreateAwsEksClusterLoggingDetailsFormGroup() {
		return new FormGroup<AwsEksClusterLoggingDetailsFormProperties>({
		});

	}


	/** Details for a cluster logging configuration. */
	export interface AwsEksClusterLoggingClusterLoggingDetails {
		Enabled?: boolean | null;
		Types?: Array<string>;
	}

	/** Details for a cluster logging configuration. */
	export interface AwsEksClusterLoggingClusterLoggingDetailsFormProperties {
		Enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateAwsEksClusterLoggingClusterLoggingDetailsFormGroup() {
		return new FormGroup<AwsEksClusterLoggingClusterLoggingDetailsFormProperties>({
			Enabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Details about a firewall policy. A firewall policy defines the behavior of a network firewall. */
	export interface AwsNetworkFirewallFirewallPolicyDetails {
		FirewallPolicy?: FirewallPolicyDetails;
		FirewallPolicyArn?: string;
		FirewallPolicyId?: string;
		FirewallPolicyName?: string;
		Description?: string;
	}

	/** Details about a firewall policy. A firewall policy defines the behavior of a network firewall. */
	export interface AwsNetworkFirewallFirewallPolicyDetailsFormProperties {
		FirewallPolicyArn: FormControl<string | null | undefined>,
		FirewallPolicyId: FormControl<string | null | undefined>,
		FirewallPolicyName: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
	}
	export function CreateAwsNetworkFirewallFirewallPolicyDetailsFormGroup() {
		return new FormGroup<AwsNetworkFirewallFirewallPolicyDetailsFormProperties>({
			FirewallPolicyArn: new FormControl<string | null | undefined>(undefined),
			FirewallPolicyId: new FormControl<string | null | undefined>(undefined),
			FirewallPolicyName: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Defines the behavior of the firewall. */
	export interface FirewallPolicyDetails {
		StatefulRuleGroupReferences?: Array<FirewallPolicyStatefulRuleGroupReferencesDetails>;
		StatelessCustomActions?: Array<FirewallPolicyStatelessCustomActionsDetails>;
		StatelessDefaultActions?: Array<string>;
		StatelessFragmentDefaultActions?: Array<string>;
		StatelessRuleGroupReferences?: Array<FirewallPolicyStatelessRuleGroupReferencesDetails>;
	}

	/** Defines the behavior of the firewall. */
	export interface FirewallPolicyDetailsFormProperties {
	}
	export function CreateFirewallPolicyDetailsFormGroup() {
		return new FormGroup<FirewallPolicyDetailsFormProperties>({
		});

	}


	/** A stateful rule group that is used by the firewall policy. */
	export interface FirewallPolicyStatefulRuleGroupReferencesDetails {
		ResourceArn?: string;
	}

	/** A stateful rule group that is used by the firewall policy. */
	export interface FirewallPolicyStatefulRuleGroupReferencesDetailsFormProperties {
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateFirewallPolicyStatefulRuleGroupReferencesDetailsFormGroup() {
		return new FormGroup<FirewallPolicyStatefulRuleGroupReferencesDetailsFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A custom action that can be used for stateless packet handling. */
	export interface FirewallPolicyStatelessCustomActionsDetails {
		ActionDefinition?: StatelessCustomActionDefinition;
		ActionName?: string;
	}

	/** A custom action that can be used for stateless packet handling. */
	export interface FirewallPolicyStatelessCustomActionsDetailsFormProperties {
		ActionName: FormControl<string | null | undefined>,
	}
	export function CreateFirewallPolicyStatelessCustomActionsDetailsFormGroup() {
		return new FormGroup<FirewallPolicyStatelessCustomActionsDetailsFormProperties>({
			ActionName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The definition of a custom action that can be used for stateless packet handling. */
	export interface StatelessCustomActionDefinition {
		PublishMetricAction?: StatelessCustomPublishMetricAction;
	}

	/** The definition of a custom action that can be used for stateless packet handling. */
	export interface StatelessCustomActionDefinitionFormProperties {
	}
	export function CreateStatelessCustomActionDefinitionFormGroup() {
		return new FormGroup<StatelessCustomActionDefinitionFormProperties>({
		});

	}


	/** Information about metrics to publish to CloudWatch. */
	export interface StatelessCustomPublishMetricAction {
		Dimensions?: Array<StatelessCustomPublishMetricActionDimension>;
	}

	/** Information about metrics to publish to CloudWatch. */
	export interface StatelessCustomPublishMetricActionFormProperties {
	}
	export function CreateStatelessCustomPublishMetricActionFormGroup() {
		return new FormGroup<StatelessCustomPublishMetricActionFormProperties>({
		});

	}


	/** Defines a CloudWatch dimension value to publish. */
	export interface StatelessCustomPublishMetricActionDimension {
		Value?: string;
	}

	/** Defines a CloudWatch dimension value to publish. */
	export interface StatelessCustomPublishMetricActionDimensionFormProperties {
		Value: FormControl<string | null | undefined>,
	}
	export function CreateStatelessCustomPublishMetricActionDimensionFormGroup() {
		return new FormGroup<StatelessCustomPublishMetricActionDimensionFormProperties>({
			Value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A stateless rule group that is used by the firewall policy. */
	export interface FirewallPolicyStatelessRuleGroupReferencesDetails {
		Priority?: number | null;
		ResourceArn?: string;
	}

	/** A stateless rule group that is used by the firewall policy. */
	export interface FirewallPolicyStatelessRuleGroupReferencesDetailsFormProperties {
		Priority: FormControl<number | null | undefined>,
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateFirewallPolicyStatelessRuleGroupReferencesDetailsFormGroup() {
		return new FormGroup<FirewallPolicyStatelessRuleGroupReferencesDetailsFormProperties>({
			Priority: new FormControl<number | null | undefined>(undefined),
			ResourceArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details about an Network Firewall firewall. */
	export interface AwsNetworkFirewallFirewallDetails {
		DeleteProtection?: boolean | null;
		Description?: string;
		FirewallArn?: string;
		FirewallId?: string;
		FirewallName?: string;
		FirewallPolicyArn?: string;
		FirewallPolicyChangeProtection?: boolean | null;
		SubnetChangeProtection?: boolean | null;
		SubnetMappings?: Array<AwsNetworkFirewallFirewallSubnetMappingsDetails>;
		VpcId?: string;
	}

	/** Details about an Network Firewall firewall. */
	export interface AwsNetworkFirewallFirewallDetailsFormProperties {
		DeleteProtection: FormControl<boolean | null | undefined>,
		Description: FormControl<string | null | undefined>,
		FirewallArn: FormControl<string | null | undefined>,
		FirewallId: FormControl<string | null | undefined>,
		FirewallName: FormControl<string | null | undefined>,
		FirewallPolicyArn: FormControl<string | null | undefined>,
		FirewallPolicyChangeProtection: FormControl<boolean | null | undefined>,
		SubnetChangeProtection: FormControl<boolean | null | undefined>,
		VpcId: FormControl<string | null | undefined>,
	}
	export function CreateAwsNetworkFirewallFirewallDetailsFormGroup() {
		return new FormGroup<AwsNetworkFirewallFirewallDetailsFormProperties>({
			DeleteProtection: new FormControl<boolean | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			FirewallArn: new FormControl<string | null | undefined>(undefined),
			FirewallId: new FormControl<string | null | undefined>(undefined),
			FirewallName: new FormControl<string | null | undefined>(undefined),
			FirewallPolicyArn: new FormControl<string | null | undefined>(undefined),
			FirewallPolicyChangeProtection: new FormControl<boolean | null | undefined>(undefined),
			SubnetChangeProtection: new FormControl<boolean | null | undefined>(undefined),
			VpcId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A public subnet that Network Firewall uses for the firewall. */
	export interface AwsNetworkFirewallFirewallSubnetMappingsDetails {
		SubnetId?: string;
	}

	/** A public subnet that Network Firewall uses for the firewall. */
	export interface AwsNetworkFirewallFirewallSubnetMappingsDetailsFormProperties {
		SubnetId: FormControl<string | null | undefined>,
	}
	export function CreateAwsNetworkFirewallFirewallSubnetMappingsDetailsFormGroup() {
		return new FormGroup<AwsNetworkFirewallFirewallSubnetMappingsDetailsFormProperties>({
			SubnetId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>Details about an Network Firewall rule group. Rule groups are used to inspect and control network traffic. Stateless rule groups apply to individual packets. Stateful rule groups apply to packets in the context of their traffic flow.</p> <p>Rule groups are referenced in firewall policies. </p> */
	export interface AwsNetworkFirewallRuleGroupDetails {
		Capacity?: number | null;
		Description?: string;
		RuleGroup?: RuleGroupDetails;
		RuleGroupArn?: string;
		RuleGroupId?: string;
		RuleGroupName?: string;
		Type?: string;
	}

	/** <p>Details about an Network Firewall rule group. Rule groups are used to inspect and control network traffic. Stateless rule groups apply to individual packets. Stateful rule groups apply to packets in the context of their traffic flow.</p> <p>Rule groups are referenced in firewall policies. </p> */
	export interface AwsNetworkFirewallRuleGroupDetailsFormProperties {
		Capacity: FormControl<number | null | undefined>,
		Description: FormControl<string | null | undefined>,
		RuleGroupArn: FormControl<string | null | undefined>,
		RuleGroupId: FormControl<string | null | undefined>,
		RuleGroupName: FormControl<string | null | undefined>,
		Type: FormControl<string | null | undefined>,
	}
	export function CreateAwsNetworkFirewallRuleGroupDetailsFormGroup() {
		return new FormGroup<AwsNetworkFirewallRuleGroupDetailsFormProperties>({
			Capacity: new FormControl<number | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			RuleGroupArn: new FormControl<string | null | undefined>(undefined),
			RuleGroupId: new FormControl<string | null | undefined>(undefined),
			RuleGroupName: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details about the rule group. */
	export interface RuleGroupDetails {
		RuleVariables?: RuleGroupVariables;
		RulesSource?: RuleGroupSource;
	}

	/** Details about the rule group. */
	export interface RuleGroupDetailsFormProperties {
	}
	export function CreateRuleGroupDetailsFormGroup() {
		return new FormGroup<RuleGroupDetailsFormProperties>({
		});

	}


	/** Additional settings to use in the specified rules. */
	export interface RuleGroupVariables {
		IpSets?: RuleGroupVariablesIpSetsDetails;
		PortSets?: RuleGroupVariablesPortSetsDetails;
	}

	/** Additional settings to use in the specified rules. */
	export interface RuleGroupVariablesFormProperties {
	}
	export function CreateRuleGroupVariablesFormGroup() {
		return new FormGroup<RuleGroupVariablesFormProperties>({
		});

	}


	/** A list of IP addresses and address ranges, in CIDR notation. */
	export interface RuleGroupVariablesIpSetsDetails {
		Definition?: Array<string>;
	}

	/** A list of IP addresses and address ranges, in CIDR notation. */
	export interface RuleGroupVariablesIpSetsDetailsFormProperties {
	}
	export function CreateRuleGroupVariablesIpSetsDetailsFormGroup() {
		return new FormGroup<RuleGroupVariablesIpSetsDetailsFormProperties>({
		});

	}


	/** A list of port ranges. */
	export interface RuleGroupVariablesPortSetsDetails {
		Definition?: Array<string>;
	}

	/** A list of port ranges. */
	export interface RuleGroupVariablesPortSetsDetailsFormProperties {
	}
	export function CreateRuleGroupVariablesPortSetsDetailsFormGroup() {
		return new FormGroup<RuleGroupVariablesPortSetsDetailsFormProperties>({
		});

	}


	/** The rules and actions for the rule group. */
	export interface RuleGroupSource {
		RulesSourceList?: RuleGroupSourceListDetails;
		RulesString?: string;
		StatefulRules?: Array<RuleGroupSourceStatefulRulesDetails>;
		StatelessRulesAndCustomActions?: RuleGroupSourceStatelessRulesAndCustomActionsDetails;
	}

	/** The rules and actions for the rule group. */
	export interface RuleGroupSourceFormProperties {
		RulesString: FormControl<string | null | undefined>,
	}
	export function CreateRuleGroupSourceFormGroup() {
		return new FormGroup<RuleGroupSourceFormProperties>({
			RulesString: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Stateful inspection criteria for a domain list rule group. */
	export interface RuleGroupSourceListDetails {
		GeneratedRulesType?: string;
		TargetTypes?: Array<string>;
		Targets?: Array<string>;
	}

	/** Stateful inspection criteria for a domain list rule group. */
	export interface RuleGroupSourceListDetailsFormProperties {
		GeneratedRulesType: FormControl<string | null | undefined>,
	}
	export function CreateRuleGroupSourceListDetailsFormGroup() {
		return new FormGroup<RuleGroupSourceListDetailsFormProperties>({
			GeneratedRulesType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A Suricata rule specification. */
	export interface RuleGroupSourceStatefulRulesDetails {
		Action?: string;
		Header?: RuleGroupSourceStatefulRulesHeaderDetails;
		RuleOptions?: Array<RuleGroupSourceStatefulRulesOptionsDetails>;
	}

	/** A Suricata rule specification. */
	export interface RuleGroupSourceStatefulRulesDetailsFormProperties {
		Action: FormControl<string | null | undefined>,
	}
	export function CreateRuleGroupSourceStatefulRulesDetailsFormGroup() {
		return new FormGroup<RuleGroupSourceStatefulRulesDetailsFormProperties>({
			Action: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The inspection criteria for a stateful rule. */
	export interface RuleGroupSourceStatefulRulesHeaderDetails {
		Destination?: string;
		DestinationPort?: string;
		Direction?: string;
		Protocol?: string;
		Source?: string;
		SourcePort?: string;
	}

	/** The inspection criteria for a stateful rule. */
	export interface RuleGroupSourceStatefulRulesHeaderDetailsFormProperties {
		Destination: FormControl<string | null | undefined>,
		DestinationPort: FormControl<string | null | undefined>,
		Direction: FormControl<string | null | undefined>,
		Protocol: FormControl<string | null | undefined>,
		Source: FormControl<string | null | undefined>,
		SourcePort: FormControl<string | null | undefined>,
	}
	export function CreateRuleGroupSourceStatefulRulesHeaderDetailsFormGroup() {
		return new FormGroup<RuleGroupSourceStatefulRulesHeaderDetailsFormProperties>({
			Destination: new FormControl<string | null | undefined>(undefined),
			DestinationPort: new FormControl<string | null | undefined>(undefined),
			Direction: new FormControl<string | null | undefined>(undefined),
			Protocol: new FormControl<string | null | undefined>(undefined),
			Source: new FormControl<string | null | undefined>(undefined),
			SourcePort: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A rule option for a stateful rule. */
	export interface RuleGroupSourceStatefulRulesOptionsDetails {
		Keyword?: string;
		Settings?: Array<string>;
	}

	/** A rule option for a stateful rule. */
	export interface RuleGroupSourceStatefulRulesOptionsDetailsFormProperties {
		Keyword: FormControl<string | null | undefined>,
	}
	export function CreateRuleGroupSourceStatefulRulesOptionsDetailsFormGroup() {
		return new FormGroup<RuleGroupSourceStatefulRulesOptionsDetailsFormProperties>({
			Keyword: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Stateless rules and custom actions for a stateless rule group. */
	export interface RuleGroupSourceStatelessRulesAndCustomActionsDetails {
		CustomActions?: Array<RuleGroupSourceCustomActionsDetails>;
		StatelessRules?: Array<RuleGroupSourceStatelessRulesDetails>;
	}

	/** Stateless rules and custom actions for a stateless rule group. */
	export interface RuleGroupSourceStatelessRulesAndCustomActionsDetailsFormProperties {
	}
	export function CreateRuleGroupSourceStatelessRulesAndCustomActionsDetailsFormGroup() {
		return new FormGroup<RuleGroupSourceStatelessRulesAndCustomActionsDetailsFormProperties>({
		});

	}


	/** A custom action definition. A custom action is an optional, non-standard action to use for stateless packet handling. */
	export interface RuleGroupSourceCustomActionsDetails {
		ActionDefinition?: StatelessCustomActionDefinition;
		ActionName?: string;
	}

	/** A custom action definition. A custom action is an optional, non-standard action to use for stateless packet handling. */
	export interface RuleGroupSourceCustomActionsDetailsFormProperties {
		ActionName: FormControl<string | null | undefined>,
	}
	export function CreateRuleGroupSourceCustomActionsDetailsFormGroup() {
		return new FormGroup<RuleGroupSourceCustomActionsDetailsFormProperties>({
			ActionName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A stateless rule in the rule group. */
	export interface RuleGroupSourceStatelessRulesDetails {
		Priority?: number | null;
		RuleDefinition?: RuleGroupSourceStatelessRuleDefinition;
	}

	/** A stateless rule in the rule group. */
	export interface RuleGroupSourceStatelessRulesDetailsFormProperties {
		Priority: FormControl<number | null | undefined>,
	}
	export function CreateRuleGroupSourceStatelessRulesDetailsFormGroup() {
		return new FormGroup<RuleGroupSourceStatelessRulesDetailsFormProperties>({
			Priority: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The definition of the stateless rule. */
	export interface RuleGroupSourceStatelessRuleDefinition {
		Actions?: Array<string>;
		MatchAttributes?: RuleGroupSourceStatelessRuleMatchAttributes;
	}

	/** The definition of the stateless rule. */
	export interface RuleGroupSourceStatelessRuleDefinitionFormProperties {
	}
	export function CreateRuleGroupSourceStatelessRuleDefinitionFormGroup() {
		return new FormGroup<RuleGroupSourceStatelessRuleDefinitionFormProperties>({
		});

	}


	/** Criteria for the stateless rule. */
	export interface RuleGroupSourceStatelessRuleMatchAttributes {
		DestinationPorts?: Array<RuleGroupSourceStatelessRuleMatchAttributesDestinationPorts>;
		Destinations?: Array<RuleGroupSourceStatelessRuleMatchAttributesDestinations>;
		Protocols?: Array<number> | null;
		SourcePorts?: Array<RuleGroupSourceStatelessRuleMatchAttributesSourcePorts>;
		Sources?: Array<RuleGroupSourceStatelessRuleMatchAttributesSources>;
		TcpFlags?: Array<RuleGroupSourceStatelessRuleMatchAttributesTcpFlags>;
	}

	/** Criteria for the stateless rule. */
	export interface RuleGroupSourceStatelessRuleMatchAttributesFormProperties {
	}
	export function CreateRuleGroupSourceStatelessRuleMatchAttributesFormGroup() {
		return new FormGroup<RuleGroupSourceStatelessRuleMatchAttributesFormProperties>({
		});

	}


	/** A port range to specify the destination ports to inspect for. */
	export interface RuleGroupSourceStatelessRuleMatchAttributesDestinationPorts {
		FromPort?: number | null;
		ToPort?: number | null;
	}

	/** A port range to specify the destination ports to inspect for. */
	export interface RuleGroupSourceStatelessRuleMatchAttributesDestinationPortsFormProperties {
		FromPort: FormControl<number | null | undefined>,
		ToPort: FormControl<number | null | undefined>,
	}
	export function CreateRuleGroupSourceStatelessRuleMatchAttributesDestinationPortsFormGroup() {
		return new FormGroup<RuleGroupSourceStatelessRuleMatchAttributesDestinationPortsFormProperties>({
			FromPort: new FormControl<number | null | undefined>(undefined),
			ToPort: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A destination IP address or range. */
	export interface RuleGroupSourceStatelessRuleMatchAttributesDestinations {
		AddressDefinition?: string;
	}

	/** A destination IP address or range. */
	export interface RuleGroupSourceStatelessRuleMatchAttributesDestinationsFormProperties {
		AddressDefinition: FormControl<string | null | undefined>,
	}
	export function CreateRuleGroupSourceStatelessRuleMatchAttributesDestinationsFormGroup() {
		return new FormGroup<RuleGroupSourceStatelessRuleMatchAttributesDestinationsFormProperties>({
			AddressDefinition: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A port range to specify the source ports to inspect for. */
	export interface RuleGroupSourceStatelessRuleMatchAttributesSourcePorts {
		FromPort?: number | null;
		ToPort?: number | null;
	}

	/** A port range to specify the source ports to inspect for. */
	export interface RuleGroupSourceStatelessRuleMatchAttributesSourcePortsFormProperties {
		FromPort: FormControl<number | null | undefined>,
		ToPort: FormControl<number | null | undefined>,
	}
	export function CreateRuleGroupSourceStatelessRuleMatchAttributesSourcePortsFormGroup() {
		return new FormGroup<RuleGroupSourceStatelessRuleMatchAttributesSourcePortsFormProperties>({
			FromPort: new FormControl<number | null | undefined>(undefined),
			ToPort: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A source IP addresses and address range to inspect for. */
	export interface RuleGroupSourceStatelessRuleMatchAttributesSources {
		AddressDefinition?: string;
	}

	/** A source IP addresses and address range to inspect for. */
	export interface RuleGroupSourceStatelessRuleMatchAttributesSourcesFormProperties {
		AddressDefinition: FormControl<string | null | undefined>,
	}
	export function CreateRuleGroupSourceStatelessRuleMatchAttributesSourcesFormGroup() {
		return new FormGroup<RuleGroupSourceStatelessRuleMatchAttributesSourcesFormProperties>({
			AddressDefinition: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A set of TCP flags and masks to inspect for. */
	export interface RuleGroupSourceStatelessRuleMatchAttributesTcpFlags {
		Flags?: Array<string>;
		Masks?: Array<string>;
	}

	/** A set of TCP flags and masks to inspect for. */
	export interface RuleGroupSourceStatelessRuleMatchAttributesTcpFlagsFormProperties {
	}
	export function CreateRuleGroupSourceStatelessRuleMatchAttributesTcpFlagsFormGroup() {
		return new FormGroup<RuleGroupSourceStatelessRuleMatchAttributesTcpFlagsFormProperties>({
		});

	}


	/** Provides information about an Amazon RDS DB security group. */
	export interface AwsRdsDbSecurityGroupDetails {
		DbSecurityGroupArn?: string;
		DbSecurityGroupDescription?: string;
		DbSecurityGroupName?: string;
		Ec2SecurityGroups?: Array<AwsRdsDbSecurityGroupEc2SecurityGroup>;
		IpRanges?: Array<AwsRdsDbSecurityGroupIpRange>;
		OwnerId?: string;
		VpcId?: string;
	}

	/** Provides information about an Amazon RDS DB security group. */
	export interface AwsRdsDbSecurityGroupDetailsFormProperties {
		DbSecurityGroupArn: FormControl<string | null | undefined>,
		DbSecurityGroupDescription: FormControl<string | null | undefined>,
		DbSecurityGroupName: FormControl<string | null | undefined>,
		OwnerId: FormControl<string | null | undefined>,
		VpcId: FormControl<string | null | undefined>,
	}
	export function CreateAwsRdsDbSecurityGroupDetailsFormGroup() {
		return new FormGroup<AwsRdsDbSecurityGroupDetailsFormProperties>({
			DbSecurityGroupArn: new FormControl<string | null | undefined>(undefined),
			DbSecurityGroupDescription: new FormControl<string | null | undefined>(undefined),
			DbSecurityGroupName: new FormControl<string | null | undefined>(undefined),
			OwnerId: new FormControl<string | null | undefined>(undefined),
			VpcId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** EC2 security group information for an RDS DB security group. */
	export interface AwsRdsDbSecurityGroupEc2SecurityGroup {
		Ec2SecurityGroupId?: string;
		Ec2SecurityGroupName?: string;
		Ec2SecurityGroupOwnerId?: string;
		Status?: string;
	}

	/** EC2 security group information for an RDS DB security group. */
	export interface AwsRdsDbSecurityGroupEc2SecurityGroupFormProperties {
		Ec2SecurityGroupId: FormControl<string | null | undefined>,
		Ec2SecurityGroupName: FormControl<string | null | undefined>,
		Ec2SecurityGroupOwnerId: FormControl<string | null | undefined>,
		Status: FormControl<string | null | undefined>,
	}
	export function CreateAwsRdsDbSecurityGroupEc2SecurityGroupFormGroup() {
		return new FormGroup<AwsRdsDbSecurityGroupEc2SecurityGroupFormProperties>({
			Ec2SecurityGroupId: new FormControl<string | null | undefined>(undefined),
			Ec2SecurityGroupName: new FormControl<string | null | undefined>(undefined),
			Ec2SecurityGroupOwnerId: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** IP range information for an RDS DB security group. */
	export interface AwsRdsDbSecurityGroupIpRange {
		CidrIp?: string;
		Status?: string;
	}

	/** IP range information for an RDS DB security group. */
	export interface AwsRdsDbSecurityGroupIpRangeFormProperties {
		CidrIp: FormControl<string | null | undefined>,
		Status: FormControl<string | null | undefined>,
	}
	export function CreateAwsRdsDbSecurityGroupIpRangeFormGroup() {
		return new FormGroup<AwsRdsDbSecurityGroupIpRangeFormProperties>({
			CidrIp: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides information about an Amazon Kinesis data stream.  */
	export interface AwsKinesisStreamDetails {
		Name?: string;
		Arn?: string;
		StreamEncryption?: AwsKinesisStreamStreamEncryptionDetails;
		ShardCount?: number | null;
		RetentionPeriodHours?: number | null;
	}

	/** Provides information about an Amazon Kinesis data stream.  */
	export interface AwsKinesisStreamDetailsFormProperties {
		Name: FormControl<string | null | undefined>,
		Arn: FormControl<string | null | undefined>,
		ShardCount: FormControl<number | null | undefined>,
		RetentionPeriodHours: FormControl<number | null | undefined>,
	}
	export function CreateAwsKinesisStreamDetailsFormGroup() {
		return new FormGroup<AwsKinesisStreamDetailsFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Arn: new FormControl<string | null | undefined>(undefined),
			ShardCount: new FormControl<number | null | undefined>(undefined),
			RetentionPeriodHours: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Provides information about stream encryption.  */
	export interface AwsKinesisStreamStreamEncryptionDetails {
		EncryptionType?: string;
		KeyId?: string;
	}

	/** Provides information about stream encryption.  */
	export interface AwsKinesisStreamStreamEncryptionDetailsFormProperties {
		EncryptionType: FormControl<string | null | undefined>,
		KeyId: FormControl<string | null | undefined>,
	}
	export function CreateAwsKinesisStreamStreamEncryptionDetailsFormGroup() {
		return new FormGroup<AwsKinesisStreamStreamEncryptionDetailsFormProperties>({
			EncryptionType: new FormControl<string | null | undefined>(undefined),
			KeyId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about an Amazon Web Services Amazon EC2 Transit Gateway that interconnects virtual private clouds (VPCs) and on-premises networks.  */
	export interface AwsEc2TransitGatewayDetails {
		Id?: string;
		Description?: string;
		DefaultRouteTablePropagation?: string;
		AutoAcceptSharedAttachments?: string;
		DefaultRouteTableAssociation?: string;
		TransitGatewayCidrBlocks?: Array<string>;
		AssociationDefaultRouteTableId?: string;
		PropagationDefaultRouteTableId?: string;
		VpnEcmpSupport?: string;
		DnsSupport?: string;
		MulticastSupport?: string;
		AmazonSideAsn?: number | null;
	}

	/** Information about an Amazon Web Services Amazon EC2 Transit Gateway that interconnects virtual private clouds (VPCs) and on-premises networks.  */
	export interface AwsEc2TransitGatewayDetailsFormProperties {
		Id: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		DefaultRouteTablePropagation: FormControl<string | null | undefined>,
		AutoAcceptSharedAttachments: FormControl<string | null | undefined>,
		DefaultRouteTableAssociation: FormControl<string | null | undefined>,
		AssociationDefaultRouteTableId: FormControl<string | null | undefined>,
		PropagationDefaultRouteTableId: FormControl<string | null | undefined>,
		VpnEcmpSupport: FormControl<string | null | undefined>,
		DnsSupport: FormControl<string | null | undefined>,
		MulticastSupport: FormControl<string | null | undefined>,
		AmazonSideAsn: FormControl<number | null | undefined>,
	}
	export function CreateAwsEc2TransitGatewayDetailsFormGroup() {
		return new FormGroup<AwsEc2TransitGatewayDetailsFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			DefaultRouteTablePropagation: new FormControl<string | null | undefined>(undefined),
			AutoAcceptSharedAttachments: new FormControl<string | null | undefined>(undefined),
			DefaultRouteTableAssociation: new FormControl<string | null | undefined>(undefined),
			AssociationDefaultRouteTableId: new FormControl<string | null | undefined>(undefined),
			PropagationDefaultRouteTableId: new FormControl<string | null | undefined>(undefined),
			VpnEcmpSupport: new FormControl<string | null | undefined>(undefined),
			DnsSupport: new FormControl<string | null | undefined>(undefined),
			MulticastSupport: new FormControl<string | null | undefined>(undefined),
			AmazonSideAsn: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Provides information about an Amazon EFS access point.  */
	export interface AwsEfsAccessPointDetails {
		AccessPointId?: string;
		Arn?: string;
		ClientToken?: string;
		FileSystemId?: string;
		PosixUser?: AwsEfsAccessPointPosixUserDetails;
		RootDirectory?: AwsEfsAccessPointRootDirectoryDetails;
	}

	/** Provides information about an Amazon EFS access point.  */
	export interface AwsEfsAccessPointDetailsFormProperties {
		AccessPointId: FormControl<string | null | undefined>,
		Arn: FormControl<string | null | undefined>,
		ClientToken: FormControl<string | null | undefined>,
		FileSystemId: FormControl<string | null | undefined>,
	}
	export function CreateAwsEfsAccessPointDetailsFormGroup() {
		return new FormGroup<AwsEfsAccessPointDetailsFormProperties>({
			AccessPointId: new FormControl<string | null | undefined>(undefined),
			Arn: new FormControl<string | null | undefined>(undefined),
			ClientToken: new FormControl<string | null | undefined>(undefined),
			FileSystemId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides details for all file system operations using this Amazon EFS access point.  */
	export interface AwsEfsAccessPointPosixUserDetails {
		Gid?: string;
		SecondaryGids?: Array<string>;
		Uid?: string;
	}

	/** Provides details for all file system operations using this Amazon EFS access point.  */
	export interface AwsEfsAccessPointPosixUserDetailsFormProperties {
		Gid: FormControl<string | null | undefined>,
		Uid: FormControl<string | null | undefined>,
	}
	export function CreateAwsEfsAccessPointPosixUserDetailsFormGroup() {
		return new FormGroup<AwsEfsAccessPointPosixUserDetailsFormProperties>({
			Gid: new FormControl<string | null | undefined>(undefined),
			Uid: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides information about the directory on the Amazon EFS file system that the access point exposes as the root directory to NFS clients using the access point.  */
	export interface AwsEfsAccessPointRootDirectoryDetails {
		CreationInfo?: AwsEfsAccessPointRootDirectoryCreationInfoDetails;
		Path?: string;
	}

	/** Provides information about the directory on the Amazon EFS file system that the access point exposes as the root directory to NFS clients using the access point.  */
	export interface AwsEfsAccessPointRootDirectoryDetailsFormProperties {
		Path: FormControl<string | null | undefined>,
	}
	export function CreateAwsEfsAccessPointRootDirectoryDetailsFormGroup() {
		return new FormGroup<AwsEfsAccessPointRootDirectoryDetailsFormProperties>({
			Path: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides information about the settings that Amazon EFS uses to create the root directory when a client connects to an access point.  */
	export interface AwsEfsAccessPointRootDirectoryCreationInfoDetails {
		OwnerGid?: string;
		OwnerUid?: string;
		Permissions?: string;
	}

	/** Provides information about the settings that Amazon EFS uses to create the root directory when a client connects to an access point.  */
	export interface AwsEfsAccessPointRootDirectoryCreationInfoDetailsFormProperties {
		OwnerGid: FormControl<string | null | undefined>,
		OwnerUid: FormControl<string | null | undefined>,
		Permissions: FormControl<string | null | undefined>,
	}
	export function CreateAwsEfsAccessPointRootDirectoryCreationInfoDetailsFormGroup() {
		return new FormGroup<AwsEfsAccessPointRootDirectoryCreationInfoDetailsFormProperties>({
			OwnerGid: new FormControl<string | null | undefined>(undefined),
			OwnerUid: new FormControl<string | null | undefined>(undefined),
			Permissions: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Nests a stack as a resource in a top-level template. Nested stacks are stacks created as resources for another stack. */
	export interface AwsCloudFormationStackDetails {
		Capabilities?: Array<string>;
		CreationTime?: string;
		Description?: string;
		DisableRollback?: boolean | null;
		DriftInformation?: AwsCloudFormationStackDriftInformationDetails;
		EnableTerminationProtection?: boolean | null;
		LastUpdatedTime?: string;
		NotificationArns?: Array<string>;
		Outputs?: Array<AwsCloudFormationStackOutputsDetails>;
		RoleArn?: string;
		StackId?: string;
		StackName?: string;
		StackStatus?: string;
		StackStatusReason?: string;
		TimeoutInMinutes?: number | null;
	}

	/** Nests a stack as a resource in a top-level template. Nested stacks are stacks created as resources for another stack. */
	export interface AwsCloudFormationStackDetailsFormProperties {
		CreationTime: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		DisableRollback: FormControl<boolean | null | undefined>,
		EnableTerminationProtection: FormControl<boolean | null | undefined>,
		LastUpdatedTime: FormControl<string | null | undefined>,
		RoleArn: FormControl<string | null | undefined>,
		StackId: FormControl<string | null | undefined>,
		StackName: FormControl<string | null | undefined>,
		StackStatus: FormControl<string | null | undefined>,
		StackStatusReason: FormControl<string | null | undefined>,
		TimeoutInMinutes: FormControl<number | null | undefined>,
	}
	export function CreateAwsCloudFormationStackDetailsFormGroup() {
		return new FormGroup<AwsCloudFormationStackDetailsFormProperties>({
			CreationTime: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			DisableRollback: new FormControl<boolean | null | undefined>(undefined),
			EnableTerminationProtection: new FormControl<boolean | null | undefined>(undefined),
			LastUpdatedTime: new FormControl<string | null | undefined>(undefined),
			RoleArn: new FormControl<string | null | undefined>(undefined),
			StackId: new FormControl<string | null | undefined>(undefined),
			StackName: new FormControl<string | null | undefined>(undefined),
			StackStatus: new FormControl<string | null | undefined>(undefined),
			StackStatusReason: new FormControl<string | null | undefined>(undefined),
			TimeoutInMinutes: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Provides information about the stack's conformity to its expected template configuration.  */
	export interface AwsCloudFormationStackDriftInformationDetails {
		StackDriftStatus?: string;
	}

	/** Provides information about the stack's conformity to its expected template configuration.  */
	export interface AwsCloudFormationStackDriftInformationDetailsFormProperties {
		StackDriftStatus: FormControl<string | null | undefined>,
	}
	export function CreateAwsCloudFormationStackDriftInformationDetailsFormGroup() {
		return new FormGroup<AwsCloudFormationStackDriftInformationDetailsFormProperties>({
			StackDriftStatus: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides information about the CloudFormation stack output.  */
	export interface AwsCloudFormationStackOutputsDetails {
		Description?: string;
		OutputKey?: string;
		OutputValue?: string;
	}

	/** Provides information about the CloudFormation stack output.  */
	export interface AwsCloudFormationStackOutputsDetailsFormProperties {
		Description: FormControl<string | null | undefined>,
		OutputKey: FormControl<string | null | undefined>,
		OutputValue: FormControl<string | null | undefined>,
	}
	export function CreateAwsCloudFormationStackOutputsDetailsFormGroup() {
		return new FormGroup<AwsCloudFormationStackOutputsDetailsFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined),
			OutputKey: new FormControl<string | null | undefined>(undefined),
			OutputValue: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies an alarm and associates it with the specified metric or metric math expression.  */
	export interface AwsCloudWatchAlarmDetails {
		ActionsEnabled?: boolean | null;
		AlarmActions?: Array<string>;
		AlarmArn?: string;
		AlarmConfigurationUpdatedTimestamp?: string;
		AlarmDescription?: string;
		AlarmName?: string;
		ComparisonOperator?: string;
		DatapointsToAlarm?: number | null;
		Dimensions?: Array<AwsCloudWatchAlarmDimensionsDetails>;
		EvaluateLowSampleCountPercentile?: string;
		EvaluationPeriods?: number | null;
		ExtendedStatistic?: string;
		InsufficientDataActions?: Array<string>;
		MetricName?: string;
		Namespace?: string;
		OkActions?: Array<string>;
		Period?: number | null;
		Statistic?: string;
		Threshold?: number | null;
		ThresholdMetricId?: string;
		TreatMissingData?: string;
		Unit?: string;
	}

	/** Specifies an alarm and associates it with the specified metric or metric math expression.  */
	export interface AwsCloudWatchAlarmDetailsFormProperties {
		ActionsEnabled: FormControl<boolean | null | undefined>,
		AlarmArn: FormControl<string | null | undefined>,
		AlarmConfigurationUpdatedTimestamp: FormControl<string | null | undefined>,
		AlarmDescription: FormControl<string | null | undefined>,
		AlarmName: FormControl<string | null | undefined>,
		ComparisonOperator: FormControl<string | null | undefined>,
		DatapointsToAlarm: FormControl<number | null | undefined>,
		EvaluateLowSampleCountPercentile: FormControl<string | null | undefined>,
		EvaluationPeriods: FormControl<number | null | undefined>,
		ExtendedStatistic: FormControl<string | null | undefined>,
		MetricName: FormControl<string | null | undefined>,
		Namespace: FormControl<string | null | undefined>,
		Period: FormControl<number | null | undefined>,
		Statistic: FormControl<string | null | undefined>,
		Threshold: FormControl<number | null | undefined>,
		ThresholdMetricId: FormControl<string | null | undefined>,
		TreatMissingData: FormControl<string | null | undefined>,
		Unit: FormControl<string | null | undefined>,
	}
	export function CreateAwsCloudWatchAlarmDetailsFormGroup() {
		return new FormGroup<AwsCloudWatchAlarmDetailsFormProperties>({
			ActionsEnabled: new FormControl<boolean | null | undefined>(undefined),
			AlarmArn: new FormControl<string | null | undefined>(undefined),
			AlarmConfigurationUpdatedTimestamp: new FormControl<string | null | undefined>(undefined),
			AlarmDescription: new FormControl<string | null | undefined>(undefined),
			AlarmName: new FormControl<string | null | undefined>(undefined),
			ComparisonOperator: new FormControl<string | null | undefined>(undefined),
			DatapointsToAlarm: new FormControl<number | null | undefined>(undefined),
			EvaluateLowSampleCountPercentile: new FormControl<string | null | undefined>(undefined),
			EvaluationPeriods: new FormControl<number | null | undefined>(undefined),
			ExtendedStatistic: new FormControl<string | null | undefined>(undefined),
			MetricName: new FormControl<string | null | undefined>(undefined),
			Namespace: new FormControl<string | null | undefined>(undefined),
			Period: new FormControl<number | null | undefined>(undefined),
			Statistic: new FormControl<string | null | undefined>(undefined),
			Threshold: new FormControl<number | null | undefined>(undefined),
			ThresholdMetricId: new FormControl<string | null | undefined>(undefined),
			TreatMissingData: new FormControl<string | null | undefined>(undefined),
			Unit: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details about the dimensions for the metric associated with the alarm.  */
	export interface AwsCloudWatchAlarmDimensionsDetails {
		Name?: string;
		Value?: string;
	}

	/** Details about the dimensions for the metric associated with the alarm.  */
	export interface AwsCloudWatchAlarmDimensionsDetailsFormProperties {
		Name: FormControl<string | null | undefined>,
		Value: FormControl<string | null | undefined>,
	}
	export function CreateAwsCloudWatchAlarmDimensionsDetailsFormGroup() {
		return new FormGroup<AwsCloudWatchAlarmDimensionsDetailsFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides information about a VPC peering connection between two VPCs: a requester VPC that you own and an accepter VPC with which to create the connection.  */
	export interface AwsEc2VpcPeeringConnectionDetails {
		AccepterVpcInfo?: AwsEc2VpcPeeringConnectionVpcInfoDetails;
		ExpirationTime?: string;
		RequesterVpcInfo?: AwsEc2VpcPeeringConnectionVpcInfoDetails;
		Status?: AwsEc2VpcPeeringConnectionStatusDetails;
		VpcPeeringConnectionId?: string;
	}

	/** Provides information about a VPC peering connection between two VPCs: a requester VPC that you own and an accepter VPC with which to create the connection.  */
	export interface AwsEc2VpcPeeringConnectionDetailsFormProperties {
		ExpirationTime: FormControl<string | null | undefined>,
		VpcPeeringConnectionId: FormControl<string | null | undefined>,
	}
	export function CreateAwsEc2VpcPeeringConnectionDetailsFormGroup() {
		return new FormGroup<AwsEc2VpcPeeringConnectionDetailsFormProperties>({
			ExpirationTime: new FormControl<string | null | undefined>(undefined),
			VpcPeeringConnectionId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes a VPC in a VPC peering connection.  */
	export interface AwsEc2VpcPeeringConnectionVpcInfoDetails {
		CidrBlock?: string;
		CidrBlockSet?: Array<VpcInfoCidrBlockSetDetails>;
		Ipv6CidrBlockSet?: Array<VpcInfoIpv6CidrBlockSetDetails>;
		OwnerId?: string;
		PeeringOptions?: VpcInfoPeeringOptionsDetails;
		Region?: string;
		VpcId?: string;
	}

	/** Describes a VPC in a VPC peering connection.  */
	export interface AwsEc2VpcPeeringConnectionVpcInfoDetailsFormProperties {
		CidrBlock: FormControl<string | null | undefined>,
		OwnerId: FormControl<string | null | undefined>,
		Region: FormControl<string | null | undefined>,
		VpcId: FormControl<string | null | undefined>,
	}
	export function CreateAwsEc2VpcPeeringConnectionVpcInfoDetailsFormGroup() {
		return new FormGroup<AwsEc2VpcPeeringConnectionVpcInfoDetailsFormProperties>({
			CidrBlock: new FormControl<string | null | undefined>(undefined),
			OwnerId: new FormControl<string | null | undefined>(undefined),
			Region: new FormControl<string | null | undefined>(undefined),
			VpcId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides details about the IPv4 CIDR blocks for the VPC.  */
	export interface VpcInfoCidrBlockSetDetails {
		CidrBlock?: string;
	}

	/** Provides details about the IPv4 CIDR blocks for the VPC.  */
	export interface VpcInfoCidrBlockSetDetailsFormProperties {
		CidrBlock: FormControl<string | null | undefined>,
	}
	export function CreateVpcInfoCidrBlockSetDetailsFormGroup() {
		return new FormGroup<VpcInfoCidrBlockSetDetailsFormProperties>({
			CidrBlock: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides details about the IPv6 CIDR blocks for the VPC.  */
	export interface VpcInfoIpv6CidrBlockSetDetails {
		Ipv6CidrBlock?: string;
	}

	/** Provides details about the IPv6 CIDR blocks for the VPC.  */
	export interface VpcInfoIpv6CidrBlockSetDetailsFormProperties {
		Ipv6CidrBlock: FormControl<string | null | undefined>,
	}
	export function CreateVpcInfoIpv6CidrBlockSetDetailsFormGroup() {
		return new FormGroup<VpcInfoIpv6CidrBlockSetDetailsFormProperties>({
			Ipv6CidrBlock: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides information about the VPC peering connection options for the accepter or requester VPC.  */
	export interface VpcInfoPeeringOptionsDetails {
		AllowDnsResolutionFromRemoteVpc?: boolean | null;
		AllowEgressFromLocalClassicLinkToRemoteVpc?: boolean | null;
		AllowEgressFromLocalVpcToRemoteClassicLink?: boolean | null;
	}

	/** Provides information about the VPC peering connection options for the accepter or requester VPC.  */
	export interface VpcInfoPeeringOptionsDetailsFormProperties {
		AllowDnsResolutionFromRemoteVpc: FormControl<boolean | null | undefined>,
		AllowEgressFromLocalClassicLinkToRemoteVpc: FormControl<boolean | null | undefined>,
		AllowEgressFromLocalVpcToRemoteClassicLink: FormControl<boolean | null | undefined>,
	}
	export function CreateVpcInfoPeeringOptionsDetailsFormGroup() {
		return new FormGroup<VpcInfoPeeringOptionsDetailsFormProperties>({
			AllowDnsResolutionFromRemoteVpc: new FormControl<boolean | null | undefined>(undefined),
			AllowEgressFromLocalClassicLinkToRemoteVpc: new FormControl<boolean | null | undefined>(undefined),
			AllowEgressFromLocalVpcToRemoteClassicLink: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Details about the status of the VPC peering connection.  */
	export interface AwsEc2VpcPeeringConnectionStatusDetails {
		Code?: string;
		Message?: string;
	}

	/** Details about the status of the VPC peering connection.  */
	export interface AwsEc2VpcPeeringConnectionStatusDetailsFormProperties {
		Code: FormControl<string | null | undefined>,
		Message: FormControl<string | null | undefined>,
	}
	export function CreateAwsEc2VpcPeeringConnectionStatusDetailsFormGroup() {
		return new FormGroup<AwsEc2VpcPeeringConnectionStatusDetailsFormProperties>({
			Code: new FormControl<string | null | undefined>(undefined),
			Message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides information about an WAF Regional rule group. The rule group is a collection of rules for inspecting and controlling web requests.  */
	export interface AwsWafRegionalRuleGroupDetails {
		MetricName?: string;
		Name?: string;
		RuleGroupId?: string;
		Rules?: Array<AwsWafRegionalRuleGroupRulesDetails>;
	}

	/** Provides information about an WAF Regional rule group. The rule group is a collection of rules for inspecting and controlling web requests.  */
	export interface AwsWafRegionalRuleGroupDetailsFormProperties {
		MetricName: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		RuleGroupId: FormControl<string | null | undefined>,
	}
	export function CreateAwsWafRegionalRuleGroupDetailsFormGroup() {
		return new FormGroup<AwsWafRegionalRuleGroupDetailsFormProperties>({
			MetricName: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			RuleGroupId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides information about the rules attached to a rule group  */
	export interface AwsWafRegionalRuleGroupRulesDetails {
		Action?: AwsWafRegionalRuleGroupRulesActionDetails;
		Priority?: number | null;
		RuleId?: string;
		Type?: string;
	}

	/** Provides information about the rules attached to a rule group  */
	export interface AwsWafRegionalRuleGroupRulesDetailsFormProperties {
		Priority: FormControl<number | null | undefined>,
		RuleId: FormControl<string | null | undefined>,
		Type: FormControl<string | null | undefined>,
	}
	export function CreateAwsWafRegionalRuleGroupRulesDetailsFormGroup() {
		return new FormGroup<AwsWafRegionalRuleGroupRulesDetailsFormProperties>({
			Priority: new FormControl<number | null | undefined>(undefined),
			RuleId: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes the action that WAF should take on a web request when it matches the criteria defined in the rule.  */
	export interface AwsWafRegionalRuleGroupRulesActionDetails {
		Type?: string;
	}

	/** Describes the action that WAF should take on a web request when it matches the criteria defined in the rule.  */
	export interface AwsWafRegionalRuleGroupRulesActionDetailsFormProperties {
		Type: FormControl<string | null | undefined>,
	}
	export function CreateAwsWafRegionalRuleGroupRulesActionDetailsFormGroup() {
		return new FormGroup<AwsWafRegionalRuleGroupRulesActionDetailsFormProperties>({
			Type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides information about an WAF Regional rule. This rule identifies the web requests that you want to allow, block, or count.  */
	export interface AwsWafRegionalRuleDetails {
		MetricName?: string;
		Name?: string;
		PredicateList?: Array<AwsWafRegionalRulePredicateListDetails>;
		RuleId?: string;
	}

	/** Provides information about an WAF Regional rule. This rule identifies the web requests that you want to allow, block, or count.  */
	export interface AwsWafRegionalRuleDetailsFormProperties {
		MetricName: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		RuleId: FormControl<string | null | undefined>,
	}
	export function CreateAwsWafRegionalRuleDetailsFormGroup() {
		return new FormGroup<AwsWafRegionalRuleDetailsFormProperties>({
			MetricName: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			RuleId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides details about the <code>ByteMatchSet</code>, <code>IPSet</code>, <code>SqlInjectionMatchSet</code>, <code>XssMatchSet</code>, <code>RegexMatchSet</code>, <code>GeoMatchSet</code>, and <code>SizeConstraintSet</code> objects that you want to add to a rule and, for each object, indicates whether you want to negate the settings.  */
	export interface AwsWafRegionalRulePredicateListDetails {
		DataId?: string;
		Negated?: boolean | null;
		Type?: string;
	}

	/** Provides details about the <code>ByteMatchSet</code>, <code>IPSet</code>, <code>SqlInjectionMatchSet</code>, <code>XssMatchSet</code>, <code>RegexMatchSet</code>, <code>GeoMatchSet</code>, and <code>SizeConstraintSet</code> objects that you want to add to a rule and, for each object, indicates whether you want to negate the settings.  */
	export interface AwsWafRegionalRulePredicateListDetailsFormProperties {
		DataId: FormControl<string | null | undefined>,
		Negated: FormControl<boolean | null | undefined>,
		Type: FormControl<string | null | undefined>,
	}
	export function CreateAwsWafRegionalRulePredicateListDetailsFormGroup() {
		return new FormGroup<AwsWafRegionalRulePredicateListDetailsFormProperties>({
			DataId: new FormControl<string | null | undefined>(undefined),
			Negated: new FormControl<boolean | null | undefined>(undefined),
			Type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides information about the web access control list (web ACL). The web ACL contains the rules that identify the requests that you want to allow, block, or count.  */
	export interface AwsWafRegionalWebAclDetails {
		DefaultAction?: string;
		MetricName?: string;
		Name?: string;
		RulesList?: Array<AwsWafRegionalWebAclRulesListDetails>;
		WebAclId?: string;
	}

	/** Provides information about the web access control list (web ACL). The web ACL contains the rules that identify the requests that you want to allow, block, or count.  */
	export interface AwsWafRegionalWebAclDetailsFormProperties {
		DefaultAction: FormControl<string | null | undefined>,
		MetricName: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		WebAclId: FormControl<string | null | undefined>,
	}
	export function CreateAwsWafRegionalWebAclDetailsFormGroup() {
		return new FormGroup<AwsWafRegionalWebAclDetailsFormProperties>({
			DefaultAction: new FormControl<string | null | undefined>(undefined),
			MetricName: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			WebAclId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A combination of <code>ByteMatchSet</code>, <code>IPSet</code>, and/or <code>SqlInjectionMatchSet</code> objects that identify the web requests that you want to allow, block, or count.  */
	export interface AwsWafRegionalWebAclRulesListDetails {
		Action?: AwsWafRegionalWebAclRulesListActionDetails;
		OverrideAction?: AwsWafRegionalWebAclRulesListOverrideActionDetails;
		Priority?: number | null;
		RuleId?: string;
		Type?: string;
	}

	/** A combination of <code>ByteMatchSet</code>, <code>IPSet</code>, and/or <code>SqlInjectionMatchSet</code> objects that identify the web requests that you want to allow, block, or count.  */
	export interface AwsWafRegionalWebAclRulesListDetailsFormProperties {
		Priority: FormControl<number | null | undefined>,
		RuleId: FormControl<string | null | undefined>,
		Type: FormControl<string | null | undefined>,
	}
	export function CreateAwsWafRegionalWebAclRulesListDetailsFormGroup() {
		return new FormGroup<AwsWafRegionalWebAclRulesListDetailsFormProperties>({
			Priority: new FormControl<number | null | undefined>(undefined),
			RuleId: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The action that WAF takes when a web request matches all conditions in the rule, such as allow, block, or count the request.  */
	export interface AwsWafRegionalWebAclRulesListActionDetails {
		Type?: string;
	}

	/** The action that WAF takes when a web request matches all conditions in the rule, such as allow, block, or count the request.  */
	export interface AwsWafRegionalWebAclRulesListActionDetailsFormProperties {
		Type: FormControl<string | null | undefined>,
	}
	export function CreateAwsWafRegionalWebAclRulesListActionDetailsFormGroup() {
		return new FormGroup<AwsWafRegionalWebAclRulesListActionDetailsFormProperties>({
			Type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides details about the action to use in the place of the action that results from the rule group evaluation.  */
	export interface AwsWafRegionalWebAclRulesListOverrideActionDetails {
		Type?: string;
	}

	/** Provides details about the action to use in the place of the action that results from the rule group evaluation.  */
	export interface AwsWafRegionalWebAclRulesListOverrideActionDetailsFormProperties {
		Type: FormControl<string | null | undefined>,
	}
	export function CreateAwsWafRegionalWebAclRulesListOverrideActionDetailsFormGroup() {
		return new FormGroup<AwsWafRegionalWebAclRulesListOverrideActionDetailsFormProperties>({
			Type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides information about a WAF rule. This rule specifies the web requests that you want to allow, block, or count.  */
	export interface AwsWafRuleDetails {
		MetricName?: string;
		Name?: string;
		PredicateList?: Array<AwsWafRulePredicateListDetails>;
		RuleId?: string;
	}

	/** Provides information about a WAF rule. This rule specifies the web requests that you want to allow, block, or count.  */
	export interface AwsWafRuleDetailsFormProperties {
		MetricName: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		RuleId: FormControl<string | null | undefined>,
	}
	export function CreateAwsWafRuleDetailsFormGroup() {
		return new FormGroup<AwsWafRuleDetailsFormProperties>({
			MetricName: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			RuleId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides details about the <code>ByteMatchSet</code>, <code>IPSet</code>, <code>SqlInjectionMatchSet</code>, <code>XssMatchSet</code>, <code>RegexMatchSet</code>, <code>GeoMatchSet</code>, and <code>SizeConstraintSet</code> objects that you want to add to a rule and, for each object, indicates whether you want to negate the settings.  */
	export interface AwsWafRulePredicateListDetails {
		DataId?: string;
		Negated?: boolean | null;
		Type?: string;
	}

	/** Provides details about the <code>ByteMatchSet</code>, <code>IPSet</code>, <code>SqlInjectionMatchSet</code>, <code>XssMatchSet</code>, <code>RegexMatchSet</code>, <code>GeoMatchSet</code>, and <code>SizeConstraintSet</code> objects that you want to add to a rule and, for each object, indicates whether you want to negate the settings.  */
	export interface AwsWafRulePredicateListDetailsFormProperties {
		DataId: FormControl<string | null | undefined>,
		Negated: FormControl<boolean | null | undefined>,
		Type: FormControl<string | null | undefined>,
	}
	export function CreateAwsWafRulePredicateListDetailsFormGroup() {
		return new FormGroup<AwsWafRulePredicateListDetailsFormProperties>({
			DataId: new FormControl<string | null | undefined>(undefined),
			Negated: new FormControl<boolean | null | undefined>(undefined),
			Type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides information about an WAF rule group. A rule group is a collection of rules for inspecting and controlling web requests.  */
	export interface AwsWafRuleGroupDetails {
		MetricName?: string;
		Name?: string;
		RuleGroupId?: string;
		Rules?: Array<AwsWafRuleGroupRulesDetails>;
	}

	/** Provides information about an WAF rule group. A rule group is a collection of rules for inspecting and controlling web requests.  */
	export interface AwsWafRuleGroupDetailsFormProperties {
		MetricName: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		RuleGroupId: FormControl<string | null | undefined>,
	}
	export function CreateAwsWafRuleGroupDetailsFormGroup() {
		return new FormGroup<AwsWafRuleGroupDetailsFormProperties>({
			MetricName: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			RuleGroupId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides information about the rules attached to the rule group. These rules identify the web requests that you want to allow, block, or count.  */
	export interface AwsWafRuleGroupRulesDetails {
		Action?: AwsWafRuleGroupRulesActionDetails;
		Priority?: number | null;
		RuleId?: string;
		Type?: string;
	}

	/** Provides information about the rules attached to the rule group. These rules identify the web requests that you want to allow, block, or count.  */
	export interface AwsWafRuleGroupRulesDetailsFormProperties {
		Priority: FormControl<number | null | undefined>,
		RuleId: FormControl<string | null | undefined>,
		Type: FormControl<string | null | undefined>,
	}
	export function CreateAwsWafRuleGroupRulesDetailsFormGroup() {
		return new FormGroup<AwsWafRuleGroupRulesDetailsFormProperties>({
			Priority: new FormControl<number | null | undefined>(undefined),
			RuleId: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides information about what action WAF should take on a web request when it matches the criteria defined in the rule.  */
	export interface AwsWafRuleGroupRulesActionDetails {
		Type?: string;
	}

	/** Provides information about what action WAF should take on a web request when it matches the criteria defined in the rule.  */
	export interface AwsWafRuleGroupRulesActionDetailsFormProperties {
		Type: FormControl<string | null | undefined>,
	}
	export function CreateAwsWafRuleGroupRulesActionDetailsFormGroup() {
		return new FormGroup<AwsWafRuleGroupRulesActionDetailsFormProperties>({
			Type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides details about a task in a cluster.  */
	export interface AwsEcsTaskDetails {
		ClusterArn?: string;
		TaskDefinitionArn?: string;
		Version?: string;
		CreatedAt?: string;
		StartedAt?: string;
		StartedBy?: string;
		Group?: string;
		Volumes?: Array<AwsEcsTaskVolumeDetails>;
		Containers?: Array<AwsEcsContainerDetails>;
	}

	/** Provides details about a task in a cluster.  */
	export interface AwsEcsTaskDetailsFormProperties {
		ClusterArn: FormControl<string | null | undefined>,
		TaskDefinitionArn: FormControl<string | null | undefined>,
		Version: FormControl<string | null | undefined>,
		CreatedAt: FormControl<string | null | undefined>,
		StartedAt: FormControl<string | null | undefined>,
		StartedBy: FormControl<string | null | undefined>,
		Group: FormControl<string | null | undefined>,
	}
	export function CreateAwsEcsTaskDetailsFormGroup() {
		return new FormGroup<AwsEcsTaskDetailsFormProperties>({
			ClusterArn: new FormControl<string | null | undefined>(undefined),
			TaskDefinitionArn: new FormControl<string | null | undefined>(undefined),
			Version: new FormControl<string | null | undefined>(undefined),
			CreatedAt: new FormControl<string | null | undefined>(undefined),
			StartedAt: new FormControl<string | null | undefined>(undefined),
			StartedBy: new FormControl<string | null | undefined>(undefined),
			Group: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides information about a data volume that's used in a task definition.  */
	export interface AwsEcsTaskVolumeDetails {
		Name?: string;
		Host?: AwsEcsTaskVolumeHostDetails;
	}

	/** Provides information about a data volume that's used in a task definition.  */
	export interface AwsEcsTaskVolumeDetailsFormProperties {
		Name: FormControl<string | null | undefined>,
	}
	export function CreateAwsEcsTaskVolumeDetailsFormGroup() {
		return new FormGroup<AwsEcsTaskVolumeDetailsFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides details on a container instance bind mount host volume.  */
	export interface AwsEcsTaskVolumeHostDetails {
		SourcePath?: string;
	}

	/** Provides details on a container instance bind mount host volume.  */
	export interface AwsEcsTaskVolumeHostDetailsFormProperties {
		SourcePath: FormControl<string | null | undefined>,
	}
	export function CreateAwsEcsTaskVolumeHostDetailsFormGroup() {
		return new FormGroup<AwsEcsTaskVolumeHostDetailsFormProperties>({
			SourcePath: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides details about an Backup backup vault. In Backup, a backup vault is a container that stores and organizes your backups.  */
	export interface AwsBackupBackupVaultDetails {
		BackupVaultArn?: string;
		BackupVaultName?: string;
		EncryptionKeyArn?: string;
		Notifications?: AwsBackupBackupVaultNotificationsDetails;
		AccessPolicy?: string;
	}

	/** Provides details about an Backup backup vault. In Backup, a backup vault is a container that stores and organizes your backups.  */
	export interface AwsBackupBackupVaultDetailsFormProperties {
		BackupVaultArn: FormControl<string | null | undefined>,
		BackupVaultName: FormControl<string | null | undefined>,
		EncryptionKeyArn: FormControl<string | null | undefined>,
		AccessPolicy: FormControl<string | null | undefined>,
	}
	export function CreateAwsBackupBackupVaultDetailsFormGroup() {
		return new FormGroup<AwsBackupBackupVaultDetailsFormProperties>({
			BackupVaultArn: new FormControl<string | null | undefined>(undefined),
			BackupVaultName: new FormControl<string | null | undefined>(undefined),
			EncryptionKeyArn: new FormControl<string | null | undefined>(undefined),
			AccessPolicy: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides details about the Amazon SNS event notifications for the specified backup vault.  */
	export interface AwsBackupBackupVaultNotificationsDetails {
		BackupVaultEvents?: Array<string>;
		SnsTopicArn?: string;
	}

	/** Provides details about the Amazon SNS event notifications for the specified backup vault.  */
	export interface AwsBackupBackupVaultNotificationsDetailsFormProperties {
		SnsTopicArn: FormControl<string | null | undefined>,
	}
	export function CreateAwsBackupBackupVaultNotificationsDetailsFormGroup() {
		return new FormGroup<AwsBackupBackupVaultNotificationsDetailsFormProperties>({
			SnsTopicArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides details about an Backup backup plan and an array of <code>BackupRule</code> objects, each of which specifies a backup rule.  */
	export interface AwsBackupBackupPlanDetails {
		BackupPlan?: AwsBackupBackupPlanBackupPlanDetails;
		BackupPlanArn?: string;
		BackupPlanId?: string;
		VersionId?: string;
	}

	/** Provides details about an Backup backup plan and an array of <code>BackupRule</code> objects, each of which specifies a backup rule.  */
	export interface AwsBackupBackupPlanDetailsFormProperties {
		BackupPlanArn: FormControl<string | null | undefined>,
		BackupPlanId: FormControl<string | null | undefined>,
		VersionId: FormControl<string | null | undefined>,
	}
	export function CreateAwsBackupBackupPlanDetailsFormGroup() {
		return new FormGroup<AwsBackupBackupPlanDetailsFormProperties>({
			BackupPlanArn: new FormControl<string | null | undefined>(undefined),
			BackupPlanId: new FormControl<string | null | undefined>(undefined),
			VersionId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides details about an Backup backup plan and an array of <code>BackupRule</code> objects, each of which specifies a backup rule.  */
	export interface AwsBackupBackupPlanBackupPlanDetails {
		BackupPlanName?: string;
		AdvancedBackupSettings?: Array<AwsBackupBackupPlanAdvancedBackupSettingsDetails>;
		BackupPlanRule?: Array<AwsBackupBackupPlanRuleDetails>;
	}

	/** Provides details about an Backup backup plan and an array of <code>BackupRule</code> objects, each of which specifies a backup rule.  */
	export interface AwsBackupBackupPlanBackupPlanDetailsFormProperties {
		BackupPlanName: FormControl<string | null | undefined>,
	}
	export function CreateAwsBackupBackupPlanBackupPlanDetailsFormGroup() {
		return new FormGroup<AwsBackupBackupPlanBackupPlanDetailsFormProperties>({
			BackupPlanName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides a list of backup options for each resource type.  */
	export interface AwsBackupBackupPlanAdvancedBackupSettingsDetails {
		BackupOptions?: FieldMap;
		ResourceType?: string;
	}

	/** Provides a list of backup options for each resource type.  */
	export interface AwsBackupBackupPlanAdvancedBackupSettingsDetailsFormProperties {
		ResourceType: FormControl<string | null | undefined>,
	}
	export function CreateAwsBackupBackupPlanAdvancedBackupSettingsDetailsFormGroup() {
		return new FormGroup<AwsBackupBackupPlanAdvancedBackupSettingsDetailsFormProperties>({
			ResourceType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides details about an array of <code>BackupRule</code> objects, each of which specifies a scheduled task that is used to back up a selection of resources.  */
	export interface AwsBackupBackupPlanRuleDetails {
		TargetBackupVault?: string;
		StartWindowMinutes?: number | null;
		ScheduleExpression?: string;
		RuleName?: string;
		RuleId?: string;
		EnableContinuousBackup?: boolean | null;
		CompletionWindowMinutes?: number | null;
		CopyActions?: Array<AwsBackupBackupPlanRuleCopyActionsDetails>;
		Lifecycle?: AwsBackupBackupPlanLifecycleDetails;
	}

	/** Provides details about an array of <code>BackupRule</code> objects, each of which specifies a scheduled task that is used to back up a selection of resources.  */
	export interface AwsBackupBackupPlanRuleDetailsFormProperties {
		TargetBackupVault: FormControl<string | null | undefined>,
		StartWindowMinutes: FormControl<number | null | undefined>,
		ScheduleExpression: FormControl<string | null | undefined>,
		RuleName: FormControl<string | null | undefined>,
		RuleId: FormControl<string | null | undefined>,
		EnableContinuousBackup: FormControl<boolean | null | undefined>,
		CompletionWindowMinutes: FormControl<number | null | undefined>,
	}
	export function CreateAwsBackupBackupPlanRuleDetailsFormGroup() {
		return new FormGroup<AwsBackupBackupPlanRuleDetailsFormProperties>({
			TargetBackupVault: new FormControl<string | null | undefined>(undefined),
			StartWindowMinutes: new FormControl<number | null | undefined>(undefined),
			ScheduleExpression: new FormControl<string | null | undefined>(undefined),
			RuleName: new FormControl<string | null | undefined>(undefined),
			RuleId: new FormControl<string | null | undefined>(undefined),
			EnableContinuousBackup: new FormControl<boolean | null | undefined>(undefined),
			CompletionWindowMinutes: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** An array of <code>CopyAction</code> objects, each of which contains details of the copy operation.  */
	export interface AwsBackupBackupPlanRuleCopyActionsDetails {
		DestinationBackupVaultArn?: string;
		Lifecycle?: AwsBackupBackupPlanLifecycleDetails;
	}

	/** An array of <code>CopyAction</code> objects, each of which contains details of the copy operation.  */
	export interface AwsBackupBackupPlanRuleCopyActionsDetailsFormProperties {
		DestinationBackupVaultArn: FormControl<string | null | undefined>,
	}
	export function CreateAwsBackupBackupPlanRuleCopyActionsDetailsFormGroup() {
		return new FormGroup<AwsBackupBackupPlanRuleCopyActionsDetailsFormProperties>({
			DestinationBackupVaultArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides lifecycle details for the backup plan. A lifecycle defines when a backup is transitioned to cold storage and when it expires.  */
	export interface AwsBackupBackupPlanLifecycleDetails {
		DeleteAfterDays?: number | null;
		MoveToColdStorageAfterDays?: number | null;
	}

	/** Provides lifecycle details for the backup plan. A lifecycle defines when a backup is transitioned to cold storage and when it expires.  */
	export interface AwsBackupBackupPlanLifecycleDetailsFormProperties {
		DeleteAfterDays: FormControl<number | null | undefined>,
		MoveToColdStorageAfterDays: FormControl<number | null | undefined>,
	}
	export function CreateAwsBackupBackupPlanLifecycleDetailsFormGroup() {
		return new FormGroup<AwsBackupBackupPlanLifecycleDetailsFormProperties>({
			DeleteAfterDays: new FormControl<number | null | undefined>(undefined),
			MoveToColdStorageAfterDays: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Contains detailed information about the recovery points stored in an Backup backup vault. A backup, or recovery point, represents the content of a resource at a specified time.  */
	export interface AwsBackupRecoveryPointDetails {
		BackupSizeInBytes?: number | null;
		BackupVaultArn?: string;
		BackupVaultName?: string;
		CalculatedLifecycle?: AwsBackupRecoveryPointCalculatedLifecycleDetails;
		CompletionDate?: string;
		CreatedBy?: AwsBackupRecoveryPointCreatedByDetails;
		CreationDate?: string;
		EncryptionKeyArn?: string;
		IamRoleArn?: string;
		IsEncrypted?: boolean | null;
		LastRestoreTime?: string;
		Lifecycle?: AwsBackupRecoveryPointLifecycleDetails;
		RecoveryPointArn?: string;
		ResourceArn?: string;
		ResourceType?: string;
		SourceBackupVaultArn?: string;
		Status?: string;
		StatusMessage?: string;
		StorageClass?: string;
	}

	/** Contains detailed information about the recovery points stored in an Backup backup vault. A backup, or recovery point, represents the content of a resource at a specified time.  */
	export interface AwsBackupRecoveryPointDetailsFormProperties {
		BackupSizeInBytes: FormControl<number | null | undefined>,
		BackupVaultArn: FormControl<string | null | undefined>,
		BackupVaultName: FormControl<string | null | undefined>,
		CompletionDate: FormControl<string | null | undefined>,
		CreationDate: FormControl<string | null | undefined>,
		EncryptionKeyArn: FormControl<string | null | undefined>,
		IamRoleArn: FormControl<string | null | undefined>,
		IsEncrypted: FormControl<boolean | null | undefined>,
		LastRestoreTime: FormControl<string | null | undefined>,
		RecoveryPointArn: FormControl<string | null | undefined>,
		ResourceArn: FormControl<string | null | undefined>,
		ResourceType: FormControl<string | null | undefined>,
		SourceBackupVaultArn: FormControl<string | null | undefined>,
		Status: FormControl<string | null | undefined>,
		StatusMessage: FormControl<string | null | undefined>,
		StorageClass: FormControl<string | null | undefined>,
	}
	export function CreateAwsBackupRecoveryPointDetailsFormGroup() {
		return new FormGroup<AwsBackupRecoveryPointDetailsFormProperties>({
			BackupSizeInBytes: new FormControl<number | null | undefined>(undefined),
			BackupVaultArn: new FormControl<string | null | undefined>(undefined),
			BackupVaultName: new FormControl<string | null | undefined>(undefined),
			CompletionDate: new FormControl<string | null | undefined>(undefined),
			CreationDate: new FormControl<string | null | undefined>(undefined),
			EncryptionKeyArn: new FormControl<string | null | undefined>(undefined),
			IamRoleArn: new FormControl<string | null | undefined>(undefined),
			IsEncrypted: new FormControl<boolean | null | undefined>(undefined),
			LastRestoreTime: new FormControl<string | null | undefined>(undefined),
			RecoveryPointArn: new FormControl<string | null | undefined>(undefined),
			ResourceArn: new FormControl<string | null | undefined>(undefined),
			ResourceType: new FormControl<string | null | undefined>(undefined),
			SourceBackupVaultArn: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
			StatusMessage: new FormControl<string | null | undefined>(undefined),
			StorageClass: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies how long in days before a recovery point transitions to cold storage or is deleted.  */
	export interface AwsBackupRecoveryPointCalculatedLifecycleDetails {
		DeleteAt?: string;
		MoveToColdStorageAt?: string;
	}

	/** Specifies how long in days before a recovery point transitions to cold storage or is deleted.  */
	export interface AwsBackupRecoveryPointCalculatedLifecycleDetailsFormProperties {
		DeleteAt: FormControl<string | null | undefined>,
		MoveToColdStorageAt: FormControl<string | null | undefined>,
	}
	export function CreateAwsBackupRecoveryPointCalculatedLifecycleDetailsFormGroup() {
		return new FormGroup<AwsBackupRecoveryPointCalculatedLifecycleDetailsFormProperties>({
			DeleteAt: new FormControl<string | null | undefined>(undefined),
			MoveToColdStorageAt: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information about the backup plan and rule that Backup used to initiate the recovery point backup.  */
	export interface AwsBackupRecoveryPointCreatedByDetails {
		BackupPlanArn?: string;
		BackupPlanId?: string;
		BackupPlanVersion?: string;
		BackupRuleId?: string;
	}

	/** Contains information about the backup plan and rule that Backup used to initiate the recovery point backup.  */
	export interface AwsBackupRecoveryPointCreatedByDetailsFormProperties {
		BackupPlanArn: FormControl<string | null | undefined>,
		BackupPlanId: FormControl<string | null | undefined>,
		BackupPlanVersion: FormControl<string | null | undefined>,
		BackupRuleId: FormControl<string | null | undefined>,
	}
	export function CreateAwsBackupRecoveryPointCreatedByDetailsFormGroup() {
		return new FormGroup<AwsBackupRecoveryPointCreatedByDetailsFormProperties>({
			BackupPlanArn: new FormControl<string | null | undefined>(undefined),
			BackupPlanId: new FormControl<string | null | undefined>(undefined),
			BackupPlanVersion: new FormControl<string | null | undefined>(undefined),
			BackupRuleId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains an array of Transition objects specifying how long in days before a recovery point transitions to cold storage or is deleted.  */
	export interface AwsBackupRecoveryPointLifecycleDetails {
		DeleteAfterDays?: number | null;
		MoveToColdStorageAfterDays?: number | null;
	}

	/** Contains an array of Transition objects specifying how long in days before a recovery point transitions to cold storage or is deleted.  */
	export interface AwsBackupRecoveryPointLifecycleDetailsFormProperties {
		DeleteAfterDays: FormControl<number | null | undefined>,
		MoveToColdStorageAfterDays: FormControl<number | null | undefined>,
	}
	export function CreateAwsBackupRecoveryPointLifecycleDetailsFormGroup() {
		return new FormGroup<AwsBackupRecoveryPointLifecycleDetailsFormProperties>({
			DeleteAfterDays: new FormControl<number | null | undefined>(undefined),
			MoveToColdStorageAfterDays: new FormControl<number | null | undefined>(undefined),
		});

	}


	/**  Specifies the properties for creating an Amazon Elastic Compute Cloud (Amazon EC2) launch template.  */
	export interface AwsEc2LaunchTemplateDetails {
		LaunchTemplateName?: string;
		Id?: string;
		LaunchTemplateData?: AwsEc2LaunchTemplateDataDetails;
		DefaultVersionNumber?: number | null;
		LatestVersionNumber?: number | null;
	}

	/**  Specifies the properties for creating an Amazon Elastic Compute Cloud (Amazon EC2) launch template.  */
	export interface AwsEc2LaunchTemplateDetailsFormProperties {
		LaunchTemplateName: FormControl<string | null | undefined>,
		Id: FormControl<string | null | undefined>,
		DefaultVersionNumber: FormControl<number | null | undefined>,
		LatestVersionNumber: FormControl<number | null | undefined>,
	}
	export function CreateAwsEc2LaunchTemplateDetailsFormGroup() {
		return new FormGroup<AwsEc2LaunchTemplateDetailsFormProperties>({
			LaunchTemplateName: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			DefaultVersionNumber: new FormControl<number | null | undefined>(undefined),
			LatestVersionNumber: new FormControl<number | null | undefined>(undefined),
		});

	}


	/**  The information to include in an Amazon Elastic Compute Cloud (Amazon EC2) launch template.  */
	export interface AwsEc2LaunchTemplateDataDetails {
		BlockDeviceMappingSet?: Array<AwsEc2LaunchTemplateDataBlockDeviceMappingSetDetails>;
		CapacityReservationSpecification?: AwsEc2LaunchTemplateDataCapacityReservationSpecificationDetails;
		CpuOptions?: AwsEc2LaunchTemplateDataCpuOptionsDetails;
		CreditSpecification?: AwsEc2LaunchTemplateDataCreditSpecificationDetails;
		DisableApiStop?: boolean | null;
		DisableApiTermination?: boolean | null;
		EbsOptimized?: boolean | null;
		ElasticGpuSpecificationSet?: Array<AwsEc2LaunchTemplateDataElasticGpuSpecificationSetDetails>;
		ElasticInferenceAcceleratorSet?: Array<AwsEc2LaunchTemplateDataElasticInferenceAcceleratorSetDetails>;
		EnclaveOptions?: AwsEc2LaunchTemplateDataEnclaveOptionsDetails;
		HibernationOptions?: AwsEc2LaunchTemplateDataHibernationOptionsDetails;
		IamInstanceProfile?: AwsEc2LaunchTemplateDataIamInstanceProfileDetails;
		ImageId?: string;
		InstanceInitiatedShutdownBehavior?: string;
		InstanceMarketOptions?: AwsEc2LaunchTemplateDataInstanceMarketOptionsDetails;
		InstanceRequirements?: AwsEc2LaunchTemplateDataInstanceRequirementsDetails;
		InstanceType?: string;
		KernelId?: string;
		KeyName?: string;
		LicenseSet?: Array<AwsEc2LaunchTemplateDataLicenseSetDetails>;
		MaintenanceOptions?: AwsEc2LaunchTemplateDataMaintenanceOptionsDetails;
		MetadataOptions?: AwsEc2LaunchTemplateDataMetadataOptionsDetails;
		Monitoring?: AwsEc2LaunchTemplateDataMonitoringDetails;
		NetworkInterfaceSet?: Array<AwsEc2LaunchTemplateDataNetworkInterfaceSetDetails>;
		Placement?: AwsEc2LaunchTemplateDataPlacementDetails;
		PrivateDnsNameOptions?: AwsEc2LaunchTemplateDataPrivateDnsNameOptionsDetails;
		RamDiskId?: string;
		SecurityGroupIdSet?: Array<string>;
		SecurityGroupSet?: Array<string>;
		UserData?: string;
	}

	/**  The information to include in an Amazon Elastic Compute Cloud (Amazon EC2) launch template.  */
	export interface AwsEc2LaunchTemplateDataDetailsFormProperties {
		DisableApiStop: FormControl<boolean | null | undefined>,
		DisableApiTermination: FormControl<boolean | null | undefined>,
		EbsOptimized: FormControl<boolean | null | undefined>,
		ImageId: FormControl<string | null | undefined>,
		InstanceInitiatedShutdownBehavior: FormControl<string | null | undefined>,
		InstanceType: FormControl<string | null | undefined>,
		KernelId: FormControl<string | null | undefined>,
		KeyName: FormControl<string | null | undefined>,
		RamDiskId: FormControl<string | null | undefined>,
		UserData: FormControl<string | null | undefined>,
	}
	export function CreateAwsEc2LaunchTemplateDataDetailsFormGroup() {
		return new FormGroup<AwsEc2LaunchTemplateDataDetailsFormProperties>({
			DisableApiStop: new FormControl<boolean | null | undefined>(undefined),
			DisableApiTermination: new FormControl<boolean | null | undefined>(undefined),
			EbsOptimized: new FormControl<boolean | null | undefined>(undefined),
			ImageId: new FormControl<string | null | undefined>(undefined),
			InstanceInitiatedShutdownBehavior: new FormControl<string | null | undefined>(undefined),
			InstanceType: new FormControl<string | null | undefined>(undefined),
			KernelId: new FormControl<string | null | undefined>(undefined),
			KeyName: new FormControl<string | null | undefined>(undefined),
			RamDiskId: new FormControl<string | null | undefined>(undefined),
			UserData: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  Information about a block device mapping for an Amazon Elastic Compute Cloud (Amazon EC2) launch template.  */
	export interface AwsEc2LaunchTemplateDataBlockDeviceMappingSetDetails {
		DeviceName?: string;
		Ebs?: AwsEc2LaunchTemplateDataBlockDeviceMappingSetEbsDetails;
		NoDevice?: string;
		VirtualName?: string;
	}

	/**  Information about a block device mapping for an Amazon Elastic Compute Cloud (Amazon EC2) launch template.  */
	export interface AwsEc2LaunchTemplateDataBlockDeviceMappingSetDetailsFormProperties {
		DeviceName: FormControl<string | null | undefined>,
		NoDevice: FormControl<string | null | undefined>,
		VirtualName: FormControl<string | null | undefined>,
	}
	export function CreateAwsEc2LaunchTemplateDataBlockDeviceMappingSetDetailsFormGroup() {
		return new FormGroup<AwsEc2LaunchTemplateDataBlockDeviceMappingSetDetailsFormProperties>({
			DeviceName: new FormControl<string | null | undefined>(undefined),
			NoDevice: new FormControl<string | null | undefined>(undefined),
			VirtualName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  Parameters for a block device for an Amazon Elastic Block Store (Amazon EBS) volume in an Amazon EC2 launch template.  */
	export interface AwsEc2LaunchTemplateDataBlockDeviceMappingSetEbsDetails {
		DeleteOnTermination?: boolean | null;
		Encrypted?: boolean | null;
		Iops?: number | null;
		KmsKeyId?: string;
		SnapshotId?: string;
		Throughput?: number | null;
		VolumeSize?: number | null;
		VolumeType?: string;
	}

	/**  Parameters for a block device for an Amazon Elastic Block Store (Amazon EBS) volume in an Amazon EC2 launch template.  */
	export interface AwsEc2LaunchTemplateDataBlockDeviceMappingSetEbsDetailsFormProperties {
		DeleteOnTermination: FormControl<boolean | null | undefined>,
		Encrypted: FormControl<boolean | null | undefined>,
		Iops: FormControl<number | null | undefined>,
		KmsKeyId: FormControl<string | null | undefined>,
		SnapshotId: FormControl<string | null | undefined>,
		Throughput: FormControl<number | null | undefined>,
		VolumeSize: FormControl<number | null | undefined>,
		VolumeType: FormControl<string | null | undefined>,
	}
	export function CreateAwsEc2LaunchTemplateDataBlockDeviceMappingSetEbsDetailsFormGroup() {
		return new FormGroup<AwsEc2LaunchTemplateDataBlockDeviceMappingSetEbsDetailsFormProperties>({
			DeleteOnTermination: new FormControl<boolean | null | undefined>(undefined),
			Encrypted: new FormControl<boolean | null | undefined>(undefined),
			Iops: new FormControl<number | null | undefined>(undefined),
			KmsKeyId: new FormControl<string | null | undefined>(undefined),
			SnapshotId: new FormControl<string | null | undefined>(undefined),
			Throughput: new FormControl<number | null | undefined>(undefined),
			VolumeSize: new FormControl<number | null | undefined>(undefined),
			VolumeType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  Specifies the Capacity Reservation targeting option of an Amazon EC2 instance.  */
	export interface AwsEc2LaunchTemplateDataCapacityReservationSpecificationDetails {
		CapacityReservationPreference?: string;
		CapacityReservationTarget?: AwsEc2LaunchTemplateDataCapacityReservationSpecificationCapacityReservationTargetDetails;
	}

	/**  Specifies the Capacity Reservation targeting option of an Amazon EC2 instance.  */
	export interface AwsEc2LaunchTemplateDataCapacityReservationSpecificationDetailsFormProperties {
		CapacityReservationPreference: FormControl<string | null | undefined>,
	}
	export function CreateAwsEc2LaunchTemplateDataCapacityReservationSpecificationDetailsFormGroup() {
		return new FormGroup<AwsEc2LaunchTemplateDataCapacityReservationSpecificationDetailsFormProperties>({
			CapacityReservationPreference: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  Information about the target Capacity Reservation or Capacity Reservation group in which to run an Amazon EC2 instance.  */
	export interface AwsEc2LaunchTemplateDataCapacityReservationSpecificationCapacityReservationTargetDetails {
		CapacityReservationId?: string;
		CapacityReservationResourceGroupArn?: string;
	}

	/**  Information about the target Capacity Reservation or Capacity Reservation group in which to run an Amazon EC2 instance.  */
	export interface AwsEc2LaunchTemplateDataCapacityReservationSpecificationCapacityReservationTargetDetailsFormProperties {
		CapacityReservationId: FormControl<string | null | undefined>,
		CapacityReservationResourceGroupArn: FormControl<string | null | undefined>,
	}
	export function CreateAwsEc2LaunchTemplateDataCapacityReservationSpecificationCapacityReservationTargetDetailsFormGroup() {
		return new FormGroup<AwsEc2LaunchTemplateDataCapacityReservationSpecificationCapacityReservationTargetDetailsFormProperties>({
			CapacityReservationId: new FormControl<string | null | undefined>(undefined),
			CapacityReservationResourceGroupArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  Specifies the CPU options for an Amazon EC2 instance. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-optimize-cpu.html">Optimize CPU options</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.  */
	export interface AwsEc2LaunchTemplateDataCpuOptionsDetails {
		CoreCount?: number | null;
		ThreadsPerCore?: number | null;
	}

	/**  Specifies the CPU options for an Amazon EC2 instance. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-optimize-cpu.html">Optimize CPU options</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.  */
	export interface AwsEc2LaunchTemplateDataCpuOptionsDetailsFormProperties {
		CoreCount: FormControl<number | null | undefined>,
		ThreadsPerCore: FormControl<number | null | undefined>,
	}
	export function CreateAwsEc2LaunchTemplateDataCpuOptionsDetailsFormGroup() {
		return new FormGroup<AwsEc2LaunchTemplateDataCpuOptionsDetailsFormProperties>({
			CoreCount: new FormControl<number | null | undefined>(undefined),
			ThreadsPerCore: new FormControl<number | null | undefined>(undefined),
		});

	}


	/**  Specifies the credit option for CPU usage of a T2, T3, or T3a Amazon EC2 instance.  */
	export interface AwsEc2LaunchTemplateDataCreditSpecificationDetails {
		CpuCredits?: string;
	}

	/**  Specifies the credit option for CPU usage of a T2, T3, or T3a Amazon EC2 instance.  */
	export interface AwsEc2LaunchTemplateDataCreditSpecificationDetailsFormProperties {
		CpuCredits: FormControl<string | null | undefined>,
	}
	export function CreateAwsEc2LaunchTemplateDataCreditSpecificationDetailsFormGroup() {
		return new FormGroup<AwsEc2LaunchTemplateDataCreditSpecificationDetailsFormProperties>({
			CpuCredits: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  Provides details about an Elastic Graphics specification for an Amazon EC2 launch template.  */
	export interface AwsEc2LaunchTemplateDataElasticGpuSpecificationSetDetails {
		Type?: string;
	}

	/**  Provides details about an Elastic Graphics specification for an Amazon EC2 launch template.  */
	export interface AwsEc2LaunchTemplateDataElasticGpuSpecificationSetDetailsFormProperties {
		Type: FormControl<string | null | undefined>,
	}
	export function CreateAwsEc2LaunchTemplateDataElasticGpuSpecificationSetDetailsFormGroup() {
		return new FormGroup<AwsEc2LaunchTemplateDataElasticGpuSpecificationSetDetailsFormProperties>({
			Type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  Provides details for an Amazon Elastic Inference accelerator.  */
	export interface AwsEc2LaunchTemplateDataElasticInferenceAcceleratorSetDetails {
		Count?: number | null;
		Type?: string;
	}

	/**  Provides details for an Amazon Elastic Inference accelerator.  */
	export interface AwsEc2LaunchTemplateDataElasticInferenceAcceleratorSetDetailsFormProperties {
		Count: FormControl<number | null | undefined>,
		Type: FormControl<string | null | undefined>,
	}
	export function CreateAwsEc2LaunchTemplateDataElasticInferenceAcceleratorSetDetailsFormGroup() {
		return new FormGroup<AwsEc2LaunchTemplateDataElasticInferenceAcceleratorSetDetailsFormProperties>({
			Count: new FormControl<number | null | undefined>(undefined),
			Type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  Indicates whether the instance is enabled for Amazon Web Services Nitro Enclaves.  */
	export interface AwsEc2LaunchTemplateDataEnclaveOptionsDetails {
		Enabled?: boolean | null;
	}

	/**  Indicates whether the instance is enabled for Amazon Web Services Nitro Enclaves.  */
	export interface AwsEc2LaunchTemplateDataEnclaveOptionsDetailsFormProperties {
		Enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateAwsEc2LaunchTemplateDataEnclaveOptionsDetailsFormGroup() {
		return new FormGroup<AwsEc2LaunchTemplateDataEnclaveOptionsDetailsFormProperties>({
			Enabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/**  Specifies whether your Amazon EC2 instance is configured for hibernation.  */
	export interface AwsEc2LaunchTemplateDataHibernationOptionsDetails {
		Configured?: boolean | null;
	}

	/**  Specifies whether your Amazon EC2 instance is configured for hibernation.  */
	export interface AwsEc2LaunchTemplateDataHibernationOptionsDetailsFormProperties {
		Configured: FormControl<boolean | null | undefined>,
	}
	export function CreateAwsEc2LaunchTemplateDataHibernationOptionsDetailsFormGroup() {
		return new FormGroup<AwsEc2LaunchTemplateDataHibernationOptionsDetailsFormProperties>({
			Configured: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/**  Provides details for an Identity and Access Management (IAM) instance profile, which is a container for an IAM role for your instance.  */
	export interface AwsEc2LaunchTemplateDataIamInstanceProfileDetails {
		Arn?: string;
		Name?: string;
	}

	/**  Provides details for an Identity and Access Management (IAM) instance profile, which is a container for an IAM role for your instance.  */
	export interface AwsEc2LaunchTemplateDataIamInstanceProfileDetailsFormProperties {
		Arn: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
	}
	export function CreateAwsEc2LaunchTemplateDataIamInstanceProfileDetailsFormGroup() {
		return new FormGroup<AwsEc2LaunchTemplateDataIamInstanceProfileDetailsFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  Provides details about the market (purchasing) option for an Amazon EC2 instance.  */
	export interface AwsEc2LaunchTemplateDataInstanceMarketOptionsDetails {
		MarketType?: string;
		SpotOptions?: AwsEc2LaunchTemplateDataInstanceMarketOptionsSpotOptionsDetails;
	}

	/**  Provides details about the market (purchasing) option for an Amazon EC2 instance.  */
	export interface AwsEc2LaunchTemplateDataInstanceMarketOptionsDetailsFormProperties {
		MarketType: FormControl<string | null | undefined>,
	}
	export function CreateAwsEc2LaunchTemplateDataInstanceMarketOptionsDetailsFormGroup() {
		return new FormGroup<AwsEc2LaunchTemplateDataInstanceMarketOptionsDetailsFormProperties>({
			MarketType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  Provides details about the market (purchasing) options for Spot Instances.  */
	export interface AwsEc2LaunchTemplateDataInstanceMarketOptionsSpotOptionsDetails {
		BlockDurationMinutes?: number | null;
		InstanceInterruptionBehavior?: string;
		MaxPrice?: string;
		SpotInstanceType?: string;
		ValidUntil?: string;
	}

	/**  Provides details about the market (purchasing) options for Spot Instances.  */
	export interface AwsEc2LaunchTemplateDataInstanceMarketOptionsSpotOptionsDetailsFormProperties {
		BlockDurationMinutes: FormControl<number | null | undefined>,
		InstanceInterruptionBehavior: FormControl<string | null | undefined>,
		MaxPrice: FormControl<string | null | undefined>,
		SpotInstanceType: FormControl<string | null | undefined>,
		ValidUntil: FormControl<string | null | undefined>,
	}
	export function CreateAwsEc2LaunchTemplateDataInstanceMarketOptionsSpotOptionsDetailsFormGroup() {
		return new FormGroup<AwsEc2LaunchTemplateDataInstanceMarketOptionsSpotOptionsDetailsFormProperties>({
			BlockDurationMinutes: new FormControl<number | null | undefined>(undefined),
			InstanceInterruptionBehavior: new FormControl<string | null | undefined>(undefined),
			MaxPrice: new FormControl<string | null | undefined>(undefined),
			SpotInstanceType: new FormControl<string | null | undefined>(undefined),
			ValidUntil: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  The attributes for the Amazon EC2 instance types.  */
	export interface AwsEc2LaunchTemplateDataInstanceRequirementsDetails {
		AcceleratorCount?: AwsEc2LaunchTemplateDataInstanceRequirementsAcceleratorCountDetails;
		AcceleratorManufacturers?: Array<string>;
		AcceleratorNames?: Array<string>;
		AcceleratorTotalMemoryMiB?: AwsEc2LaunchTemplateDataInstanceRequirementsAcceleratorTotalMemoryMiBDetails;
		AcceleratorTypes?: Array<string>;
		BareMetal?: string;
		BaselineEbsBandwidthMbps?: AwsEc2LaunchTemplateDataInstanceRequirementsBaselineEbsBandwidthMbpsDetails;
		BurstablePerformance?: string;
		CpuManufacturers?: Array<string>;
		ExcludedInstanceTypes?: Array<string>;
		InstanceGenerations?: Array<string>;
		LocalStorage?: string;
		LocalStorageTypes?: Array<string>;
		MemoryGiBPerVCpu?: AwsEc2LaunchTemplateDataInstanceRequirementsMemoryGiBPerVCpuDetails;
		MemoryMiB?: AwsEc2LaunchTemplateDataInstanceRequirementsMemoryMiBDetails;
		NetworkInterfaceCount?: AwsEc2LaunchTemplateDataInstanceRequirementsNetworkInterfaceCountDetails;
		OnDemandMaxPricePercentageOverLowestPrice?: number | null;
		RequireHibernateSupport?: boolean | null;
		SpotMaxPricePercentageOverLowestPrice?: number | null;
		TotalLocalStorageGB?: AwsEc2LaunchTemplateDataInstanceRequirementsTotalLocalStorageGBDetails;
		VCpuCount?: AwsEc2LaunchTemplateDataInstanceRequirementsVCpuCountDetails;
	}

	/**  The attributes for the Amazon EC2 instance types.  */
	export interface AwsEc2LaunchTemplateDataInstanceRequirementsDetailsFormProperties {
		BareMetal: FormControl<string | null | undefined>,
		BurstablePerformance: FormControl<string | null | undefined>,
		LocalStorage: FormControl<string | null | undefined>,
		OnDemandMaxPricePercentageOverLowestPrice: FormControl<number | null | undefined>,
		RequireHibernateSupport: FormControl<boolean | null | undefined>,
		SpotMaxPricePercentageOverLowestPrice: FormControl<number | null | undefined>,
	}
	export function CreateAwsEc2LaunchTemplateDataInstanceRequirementsDetailsFormGroup() {
		return new FormGroup<AwsEc2LaunchTemplateDataInstanceRequirementsDetailsFormProperties>({
			BareMetal: new FormControl<string | null | undefined>(undefined),
			BurstablePerformance: new FormControl<string | null | undefined>(undefined),
			LocalStorage: new FormControl<string | null | undefined>(undefined),
			OnDemandMaxPricePercentageOverLowestPrice: new FormControl<number | null | undefined>(undefined),
			RequireHibernateSupport: new FormControl<boolean | null | undefined>(undefined),
			SpotMaxPricePercentageOverLowestPrice: new FormControl<number | null | undefined>(undefined),
		});

	}


	/**  The minimum and maximum number of accelerators (GPUs, FPGAs, or Amazon Web Services Inferentia chips) on an Amazon EC2 instance.  */
	export interface AwsEc2LaunchTemplateDataInstanceRequirementsAcceleratorCountDetails {
		Max?: number | null;
		Min?: number | null;
	}

	/**  The minimum and maximum number of accelerators (GPUs, FPGAs, or Amazon Web Services Inferentia chips) on an Amazon EC2 instance.  */
	export interface AwsEc2LaunchTemplateDataInstanceRequirementsAcceleratorCountDetailsFormProperties {
		Max: FormControl<number | null | undefined>,
		Min: FormControl<number | null | undefined>,
	}
	export function CreateAwsEc2LaunchTemplateDataInstanceRequirementsAcceleratorCountDetailsFormGroup() {
		return new FormGroup<AwsEc2LaunchTemplateDataInstanceRequirementsAcceleratorCountDetailsFormProperties>({
			Max: new FormControl<number | null | undefined>(undefined),
			Min: new FormControl<number | null | undefined>(undefined),
		});

	}


	/**  The minimum and maximum amount of memory, in MiB, for the accelerators on an Amazon EC2 instance.  */
	export interface AwsEc2LaunchTemplateDataInstanceRequirementsAcceleratorTotalMemoryMiBDetails {
		Max?: number | null;
		Min?: number | null;
	}

	/**  The minimum and maximum amount of memory, in MiB, for the accelerators on an Amazon EC2 instance.  */
	export interface AwsEc2LaunchTemplateDataInstanceRequirementsAcceleratorTotalMemoryMiBDetailsFormProperties {
		Max: FormControl<number | null | undefined>,
		Min: FormControl<number | null | undefined>,
	}
	export function CreateAwsEc2LaunchTemplateDataInstanceRequirementsAcceleratorTotalMemoryMiBDetailsFormGroup() {
		return new FormGroup<AwsEc2LaunchTemplateDataInstanceRequirementsAcceleratorTotalMemoryMiBDetailsFormProperties>({
			Max: new FormControl<number | null | undefined>(undefined),
			Min: new FormControl<number | null | undefined>(undefined),
		});

	}


	/**  The minimum and maximum baseline bandwidth to Amazon Elastic Block Store (Amazon EBS), in Mbps. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-optimized.html">Amazon EBS–optimized instances </a> in the <i>Amazon EC2 User Guide</i>.  */
	export interface AwsEc2LaunchTemplateDataInstanceRequirementsBaselineEbsBandwidthMbpsDetails {
		Max?: number | null;
		Min?: number | null;
	}

	/**  The minimum and maximum baseline bandwidth to Amazon Elastic Block Store (Amazon EBS), in Mbps. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-optimized.html">Amazon EBS–optimized instances </a> in the <i>Amazon EC2 User Guide</i>.  */
	export interface AwsEc2LaunchTemplateDataInstanceRequirementsBaselineEbsBandwidthMbpsDetailsFormProperties {
		Max: FormControl<number | null | undefined>,
		Min: FormControl<number | null | undefined>,
	}
	export function CreateAwsEc2LaunchTemplateDataInstanceRequirementsBaselineEbsBandwidthMbpsDetailsFormGroup() {
		return new FormGroup<AwsEc2LaunchTemplateDataInstanceRequirementsBaselineEbsBandwidthMbpsDetailsFormProperties>({
			Max: new FormControl<number | null | undefined>(undefined),
			Min: new FormControl<number | null | undefined>(undefined),
		});

	}


	/**  The minimum and maximum amount of memory per vCPU, in GiB.  */
	export interface AwsEc2LaunchTemplateDataInstanceRequirementsMemoryGiBPerVCpuDetails {
		Max?: number | null;
		Min?: number | null;
	}

	/**  The minimum and maximum amount of memory per vCPU, in GiB.  */
	export interface AwsEc2LaunchTemplateDataInstanceRequirementsMemoryGiBPerVCpuDetailsFormProperties {
		Max: FormControl<number | null | undefined>,
		Min: FormControl<number | null | undefined>,
	}
	export function CreateAwsEc2LaunchTemplateDataInstanceRequirementsMemoryGiBPerVCpuDetailsFormGroup() {
		return new FormGroup<AwsEc2LaunchTemplateDataInstanceRequirementsMemoryGiBPerVCpuDetailsFormProperties>({
			Max: new FormControl<number | null | undefined>(undefined),
			Min: new FormControl<number | null | undefined>(undefined),
		});

	}


	/**  The minimum and maximum amount of memory, in MiB, for an Amazon EC2 instance.  */
	export interface AwsEc2LaunchTemplateDataInstanceRequirementsMemoryMiBDetails {
		Max?: number | null;
		Min?: number | null;
	}

	/**  The minimum and maximum amount of memory, in MiB, for an Amazon EC2 instance.  */
	export interface AwsEc2LaunchTemplateDataInstanceRequirementsMemoryMiBDetailsFormProperties {
		Max: FormControl<number | null | undefined>,
		Min: FormControl<number | null | undefined>,
	}
	export function CreateAwsEc2LaunchTemplateDataInstanceRequirementsMemoryMiBDetailsFormGroup() {
		return new FormGroup<AwsEc2LaunchTemplateDataInstanceRequirementsMemoryMiBDetailsFormProperties>({
			Max: new FormControl<number | null | undefined>(undefined),
			Min: new FormControl<number | null | undefined>(undefined),
		});

	}


	/**  The minimum and maximum number of network interfaces to be attached to an Amazon EC2 instance.  */
	export interface AwsEc2LaunchTemplateDataInstanceRequirementsNetworkInterfaceCountDetails {
		Max?: number | null;
		Min?: number | null;
	}

	/**  The minimum and maximum number of network interfaces to be attached to an Amazon EC2 instance.  */
	export interface AwsEc2LaunchTemplateDataInstanceRequirementsNetworkInterfaceCountDetailsFormProperties {
		Max: FormControl<number | null | undefined>,
		Min: FormControl<number | null | undefined>,
	}
	export function CreateAwsEc2LaunchTemplateDataInstanceRequirementsNetworkInterfaceCountDetailsFormGroup() {
		return new FormGroup<AwsEc2LaunchTemplateDataInstanceRequirementsNetworkInterfaceCountDetailsFormProperties>({
			Max: new FormControl<number | null | undefined>(undefined),
			Min: new FormControl<number | null | undefined>(undefined),
		});

	}


	/**  The minimum and maximum amount of total local storage, in GB, that an Amazon EC2 instance uses.  */
	export interface AwsEc2LaunchTemplateDataInstanceRequirementsTotalLocalStorageGBDetails {
		Max?: number | null;
		Min?: number | null;
	}

	/**  The minimum and maximum amount of total local storage, in GB, that an Amazon EC2 instance uses.  */
	export interface AwsEc2LaunchTemplateDataInstanceRequirementsTotalLocalStorageGBDetailsFormProperties {
		Max: FormControl<number | null | undefined>,
		Min: FormControl<number | null | undefined>,
	}
	export function CreateAwsEc2LaunchTemplateDataInstanceRequirementsTotalLocalStorageGBDetailsFormGroup() {
		return new FormGroup<AwsEc2LaunchTemplateDataInstanceRequirementsTotalLocalStorageGBDetailsFormProperties>({
			Max: new FormControl<number | null | undefined>(undefined),
			Min: new FormControl<number | null | undefined>(undefined),
		});

	}


	/**  The minimum and maximum number of vCPUs for an Amazon EC2 instance.  */
	export interface AwsEc2LaunchTemplateDataInstanceRequirementsVCpuCountDetails {
		Max?: number | null;
		Min?: number | null;
	}

	/**  The minimum and maximum number of vCPUs for an Amazon EC2 instance.  */
	export interface AwsEc2LaunchTemplateDataInstanceRequirementsVCpuCountDetailsFormProperties {
		Max: FormControl<number | null | undefined>,
		Min: FormControl<number | null | undefined>,
	}
	export function CreateAwsEc2LaunchTemplateDataInstanceRequirementsVCpuCountDetailsFormGroup() {
		return new FormGroup<AwsEc2LaunchTemplateDataInstanceRequirementsVCpuCountDetailsFormProperties>({
			Max: new FormControl<number | null | undefined>(undefined),
			Min: new FormControl<number | null | undefined>(undefined),
		});

	}


	/**  Provides details about the license configuration for an Amazon EC2 instance.  */
	export interface AwsEc2LaunchTemplateDataLicenseSetDetails {
		LicenseConfigurationArn?: string;
	}

	/**  Provides details about the license configuration for an Amazon EC2 instance.  */
	export interface AwsEc2LaunchTemplateDataLicenseSetDetailsFormProperties {
		LicenseConfigurationArn: FormControl<string | null | undefined>,
	}
	export function CreateAwsEc2LaunchTemplateDataLicenseSetDetailsFormGroup() {
		return new FormGroup<AwsEc2LaunchTemplateDataLicenseSetDetailsFormProperties>({
			LicenseConfigurationArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  The maintenance options of an Amazon EC2 instance.  */
	export interface AwsEc2LaunchTemplateDataMaintenanceOptionsDetails {
		AutoRecovery?: string;
	}

	/**  The maintenance options of an Amazon EC2 instance.  */
	export interface AwsEc2LaunchTemplateDataMaintenanceOptionsDetailsFormProperties {
		AutoRecovery: FormControl<string | null | undefined>,
	}
	export function CreateAwsEc2LaunchTemplateDataMaintenanceOptionsDetailsFormGroup() {
		return new FormGroup<AwsEc2LaunchTemplateDataMaintenanceOptionsDetailsFormProperties>({
			AutoRecovery: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  Specifies the metadata options for an Amazon EC2 instance.  */
	export interface AwsEc2LaunchTemplateDataMetadataOptionsDetails {
		HttpEndpoint?: string;
		HttpProtocolIpv6?: string;
		HttpTokens?: string;
		HttpPutResponseHopLimit?: number | null;
		InstanceMetadataTags?: string;
	}

	/**  Specifies the metadata options for an Amazon EC2 instance.  */
	export interface AwsEc2LaunchTemplateDataMetadataOptionsDetailsFormProperties {
		HttpEndpoint: FormControl<string | null | undefined>,
		HttpProtocolIpv6: FormControl<string | null | undefined>,
		HttpTokens: FormControl<string | null | undefined>,
		HttpPutResponseHopLimit: FormControl<number | null | undefined>,
		InstanceMetadataTags: FormControl<string | null | undefined>,
	}
	export function CreateAwsEc2LaunchTemplateDataMetadataOptionsDetailsFormGroup() {
		return new FormGroup<AwsEc2LaunchTemplateDataMetadataOptionsDetailsFormProperties>({
			HttpEndpoint: new FormControl<string | null | undefined>(undefined),
			HttpProtocolIpv6: new FormControl<string | null | undefined>(undefined),
			HttpTokens: new FormControl<string | null | undefined>(undefined),
			HttpPutResponseHopLimit: new FormControl<number | null | undefined>(undefined),
			InstanceMetadataTags: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  The monitoring for an Amazon EC2 instance.  */
	export interface AwsEc2LaunchTemplateDataMonitoringDetails {
		Enabled?: boolean | null;
	}

	/**  The monitoring for an Amazon EC2 instance.  */
	export interface AwsEc2LaunchTemplateDataMonitoringDetailsFormProperties {
		Enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateAwsEc2LaunchTemplateDataMonitoringDetailsFormGroup() {
		return new FormGroup<AwsEc2LaunchTemplateDataMonitoringDetailsFormProperties>({
			Enabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/**  One or more network interfaces to attach to an Amazon EC2 instance. If you specify a network interface, you must specify security groups and subnets as part of the network interface.  */
	export interface AwsEc2LaunchTemplateDataNetworkInterfaceSetDetails {
		AssociateCarrierIpAddress?: boolean | null;
		AssociatePublicIpAddress?: boolean | null;
		DeleteOnTermination?: boolean | null;
		Description?: string;
		DeviceIndex?: number | null;
		Groups?: Array<string>;
		InterfaceType?: string;
		Ipv4PrefixCount?: number | null;
		Ipv4Prefixes?: Array<AwsEc2LaunchTemplateDataNetworkInterfaceSetIpv4PrefixesDetails>;
		Ipv6AddressCount?: number | null;
		Ipv6Addresses?: Array<AwsEc2LaunchTemplateDataNetworkInterfaceSetIpv6AddressesDetails>;
		Ipv6PrefixCount?: number | null;
		Ipv6Prefixes?: Array<AwsEc2LaunchTemplateDataNetworkInterfaceSetIpv6PrefixesDetails>;
		NetworkCardIndex?: number | null;
		NetworkInterfaceId?: string;
		PrivateIpAddress?: string;
		PrivateIpAddresses?: Array<AwsEc2LaunchTemplateDataNetworkInterfaceSetPrivateIpAddressesDetails>;
		SecondaryPrivateIpAddressCount?: number | null;
		SubnetId?: string;
	}

	/**  One or more network interfaces to attach to an Amazon EC2 instance. If you specify a network interface, you must specify security groups and subnets as part of the network interface.  */
	export interface AwsEc2LaunchTemplateDataNetworkInterfaceSetDetailsFormProperties {
		AssociateCarrierIpAddress: FormControl<boolean | null | undefined>,
		AssociatePublicIpAddress: FormControl<boolean | null | undefined>,
		DeleteOnTermination: FormControl<boolean | null | undefined>,
		Description: FormControl<string | null | undefined>,
		DeviceIndex: FormControl<number | null | undefined>,
		InterfaceType: FormControl<string | null | undefined>,
		Ipv4PrefixCount: FormControl<number | null | undefined>,
		Ipv6AddressCount: FormControl<number | null | undefined>,
		Ipv6PrefixCount: FormControl<number | null | undefined>,
		NetworkCardIndex: FormControl<number | null | undefined>,
		NetworkInterfaceId: FormControl<string | null | undefined>,
		PrivateIpAddress: FormControl<string | null | undefined>,
		SecondaryPrivateIpAddressCount: FormControl<number | null | undefined>,
		SubnetId: FormControl<string | null | undefined>,
	}
	export function CreateAwsEc2LaunchTemplateDataNetworkInterfaceSetDetailsFormGroup() {
		return new FormGroup<AwsEc2LaunchTemplateDataNetworkInterfaceSetDetailsFormProperties>({
			AssociateCarrierIpAddress: new FormControl<boolean | null | undefined>(undefined),
			AssociatePublicIpAddress: new FormControl<boolean | null | undefined>(undefined),
			DeleteOnTermination: new FormControl<boolean | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			DeviceIndex: new FormControl<number | null | undefined>(undefined),
			InterfaceType: new FormControl<string | null | undefined>(undefined),
			Ipv4PrefixCount: new FormControl<number | null | undefined>(undefined),
			Ipv6AddressCount: new FormControl<number | null | undefined>(undefined),
			Ipv6PrefixCount: new FormControl<number | null | undefined>(undefined),
			NetworkCardIndex: new FormControl<number | null | undefined>(undefined),
			NetworkInterfaceId: new FormControl<string | null | undefined>(undefined),
			PrivateIpAddress: new FormControl<string | null | undefined>(undefined),
			SecondaryPrivateIpAddressCount: new FormControl<number | null | undefined>(undefined),
			SubnetId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  Provides details on one or more IPv4 prefixes for a network interface.  */
	export interface AwsEc2LaunchTemplateDataNetworkInterfaceSetIpv4PrefixesDetails {
		Ipv4Prefix?: string;
	}

	/**  Provides details on one or more IPv4 prefixes for a network interface.  */
	export interface AwsEc2LaunchTemplateDataNetworkInterfaceSetIpv4PrefixesDetailsFormProperties {
		Ipv4Prefix: FormControl<string | null | undefined>,
	}
	export function CreateAwsEc2LaunchTemplateDataNetworkInterfaceSetIpv4PrefixesDetailsFormGroup() {
		return new FormGroup<AwsEc2LaunchTemplateDataNetworkInterfaceSetIpv4PrefixesDetailsFormProperties>({
			Ipv4Prefix: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  Specifies an IPv6 address in an Amazon EC2 launch template.  */
	export interface AwsEc2LaunchTemplateDataNetworkInterfaceSetIpv6AddressesDetails {
		Ipv6Address?: string;
	}

	/**  Specifies an IPv6 address in an Amazon EC2 launch template.  */
	export interface AwsEc2LaunchTemplateDataNetworkInterfaceSetIpv6AddressesDetailsFormProperties {
		Ipv6Address: FormControl<string | null | undefined>,
	}
	export function CreateAwsEc2LaunchTemplateDataNetworkInterfaceSetIpv6AddressesDetailsFormGroup() {
		return new FormGroup<AwsEc2LaunchTemplateDataNetworkInterfaceSetIpv6AddressesDetailsFormProperties>({
			Ipv6Address: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  Provides details on one or more IPv6 prefixes to be assigned to the network interface.  */
	export interface AwsEc2LaunchTemplateDataNetworkInterfaceSetIpv6PrefixesDetails {
		Ipv6Prefix?: string;
	}

	/**  Provides details on one or more IPv6 prefixes to be assigned to the network interface.  */
	export interface AwsEc2LaunchTemplateDataNetworkInterfaceSetIpv6PrefixesDetailsFormProperties {
		Ipv6Prefix: FormControl<string | null | undefined>,
	}
	export function CreateAwsEc2LaunchTemplateDataNetworkInterfaceSetIpv6PrefixesDetailsFormGroup() {
		return new FormGroup<AwsEc2LaunchTemplateDataNetworkInterfaceSetIpv6PrefixesDetailsFormProperties>({
			Ipv6Prefix: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  One or more private IPv4 addresses.  */
	export interface AwsEc2LaunchTemplateDataNetworkInterfaceSetPrivateIpAddressesDetails {
		Primary?: boolean | null;
		PrivateIpAddress?: string;
	}

	/**  One or more private IPv4 addresses.  */
	export interface AwsEc2LaunchTemplateDataNetworkInterfaceSetPrivateIpAddressesDetailsFormProperties {
		Primary: FormControl<boolean | null | undefined>,
		PrivateIpAddress: FormControl<string | null | undefined>,
	}
	export function CreateAwsEc2LaunchTemplateDataNetworkInterfaceSetPrivateIpAddressesDetailsFormGroup() {
		return new FormGroup<AwsEc2LaunchTemplateDataNetworkInterfaceSetPrivateIpAddressesDetailsFormProperties>({
			Primary: new FormControl<boolean | null | undefined>(undefined),
			PrivateIpAddress: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  Provides details about the placement of an Amazon EC2 instance.  */
	export interface AwsEc2LaunchTemplateDataPlacementDetails {
		Affinity?: string;
		AvailabilityZone?: string;
		GroupName?: string;
		HostId?: string;
		HostResourceGroupArn?: string;
		PartitionNumber?: number | null;
		SpreadDomain?: string;
		Tenancy?: string;
	}

	/**  Provides details about the placement of an Amazon EC2 instance.  */
	export interface AwsEc2LaunchTemplateDataPlacementDetailsFormProperties {
		Affinity: FormControl<string | null | undefined>,
		AvailabilityZone: FormControl<string | null | undefined>,
		GroupName: FormControl<string | null | undefined>,
		HostId: FormControl<string | null | undefined>,
		HostResourceGroupArn: FormControl<string | null | undefined>,
		PartitionNumber: FormControl<number | null | undefined>,
		SpreadDomain: FormControl<string | null | undefined>,
		Tenancy: FormControl<string | null | undefined>,
	}
	export function CreateAwsEc2LaunchTemplateDataPlacementDetailsFormGroup() {
		return new FormGroup<AwsEc2LaunchTemplateDataPlacementDetailsFormProperties>({
			Affinity: new FormControl<string | null | undefined>(undefined),
			AvailabilityZone: new FormControl<string | null | undefined>(undefined),
			GroupName: new FormControl<string | null | undefined>(undefined),
			HostId: new FormControl<string | null | undefined>(undefined),
			HostResourceGroupArn: new FormControl<string | null | undefined>(undefined),
			PartitionNumber: new FormControl<number | null | undefined>(undefined),
			SpreadDomain: new FormControl<string | null | undefined>(undefined),
			Tenancy: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  Describes the options for Amazon EC2 instance hostnames.  */
	export interface AwsEc2LaunchTemplateDataPrivateDnsNameOptionsDetails {
		EnableResourceNameDnsAAAARecord?: boolean | null;
		EnableResourceNameDnsARecord?: boolean | null;
		HostnameType?: string;
	}

	/**  Describes the options for Amazon EC2 instance hostnames.  */
	export interface AwsEc2LaunchTemplateDataPrivateDnsNameOptionsDetailsFormProperties {
		EnableResourceNameDnsAAAARecord: FormControl<boolean | null | undefined>,
		EnableResourceNameDnsARecord: FormControl<boolean | null | undefined>,
		HostnameType: FormControl<string | null | undefined>,
	}
	export function CreateAwsEc2LaunchTemplateDataPrivateDnsNameOptionsDetailsFormGroup() {
		return new FormGroup<AwsEc2LaunchTemplateDataPrivateDnsNameOptionsDetailsFormProperties>({
			EnableResourceNameDnsAAAARecord: new FormControl<boolean | null | undefined>(undefined),
			EnableResourceNameDnsARecord: new FormControl<boolean | null | undefined>(undefined),
			HostnameType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  Provides details about an Amazon SageMaker notebook instance.  */
	export interface AwsSageMakerNotebookInstanceDetails {
		AcceleratorTypes?: Array<string>;
		AdditionalCodeRepositories?: Array<string>;
		DefaultCodeRepository?: string;
		DirectInternetAccess?: string;
		FailureReason?: string;
		InstanceMetadataServiceConfiguration?: AwsSageMakerNotebookInstanceMetadataServiceConfigurationDetails;
		InstanceType?: string;
		KmsKeyId?: string;
		NetworkInterfaceId?: string;
		NotebookInstanceArn?: string;
		NotebookInstanceLifecycleConfigName?: string;
		NotebookInstanceName?: string;
		NotebookInstanceStatus?: string;
		PlatformIdentifier?: string;
		RoleArn?: string;
		RootAccess?: string;
		SecurityGroups?: Array<string>;
		SubnetId?: string;
		Url?: string;
		VolumeSizeInGB?: number | null;
	}

	/**  Provides details about an Amazon SageMaker notebook instance.  */
	export interface AwsSageMakerNotebookInstanceDetailsFormProperties {
		DefaultCodeRepository: FormControl<string | null | undefined>,
		DirectInternetAccess: FormControl<string | null | undefined>,
		FailureReason: FormControl<string | null | undefined>,
		InstanceType: FormControl<string | null | undefined>,
		KmsKeyId: FormControl<string | null | undefined>,
		NetworkInterfaceId: FormControl<string | null | undefined>,
		NotebookInstanceArn: FormControl<string | null | undefined>,
		NotebookInstanceLifecycleConfigName: FormControl<string | null | undefined>,
		NotebookInstanceName: FormControl<string | null | undefined>,
		NotebookInstanceStatus: FormControl<string | null | undefined>,
		PlatformIdentifier: FormControl<string | null | undefined>,
		RoleArn: FormControl<string | null | undefined>,
		RootAccess: FormControl<string | null | undefined>,
		SubnetId: FormControl<string | null | undefined>,
		Url: FormControl<string | null | undefined>,
		VolumeSizeInGB: FormControl<number | null | undefined>,
	}
	export function CreateAwsSageMakerNotebookInstanceDetailsFormGroup() {
		return new FormGroup<AwsSageMakerNotebookInstanceDetailsFormProperties>({
			DefaultCodeRepository: new FormControl<string | null | undefined>(undefined),
			DirectInternetAccess: new FormControl<string | null | undefined>(undefined),
			FailureReason: new FormControl<string | null | undefined>(undefined),
			InstanceType: new FormControl<string | null | undefined>(undefined),
			KmsKeyId: new FormControl<string | null | undefined>(undefined),
			NetworkInterfaceId: new FormControl<string | null | undefined>(undefined),
			NotebookInstanceArn: new FormControl<string | null | undefined>(undefined),
			NotebookInstanceLifecycleConfigName: new FormControl<string | null | undefined>(undefined),
			NotebookInstanceName: new FormControl<string | null | undefined>(undefined),
			NotebookInstanceStatus: new FormControl<string | null | undefined>(undefined),
			PlatformIdentifier: new FormControl<string | null | undefined>(undefined),
			RoleArn: new FormControl<string | null | undefined>(undefined),
			RootAccess: new FormControl<string | null | undefined>(undefined),
			SubnetId: new FormControl<string | null | undefined>(undefined),
			Url: new FormControl<string | null | undefined>(undefined),
			VolumeSizeInGB: new FormControl<number | null | undefined>(undefined),
		});

	}


	/**  Information on the instance metadata service (IMDS) configuration of the notebook instance.  */
	export interface AwsSageMakerNotebookInstanceMetadataServiceConfigurationDetails {
		MinimumInstanceMetadataServiceVersion?: string;
	}

	/**  Information on the instance metadata service (IMDS) configuration of the notebook instance.  */
	export interface AwsSageMakerNotebookInstanceMetadataServiceConfigurationDetailsFormProperties {
		MinimumInstanceMetadataServiceVersion: FormControl<string | null | undefined>,
	}
	export function CreateAwsSageMakerNotebookInstanceMetadataServiceConfigurationDetailsFormGroup() {
		return new FormGroup<AwsSageMakerNotebookInstanceMetadataServiceConfigurationDetailsFormProperties>({
			MinimumInstanceMetadataServiceVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  Details about an WAFv2 web Access Control List (ACL).  */
	export interface AwsWafv2WebAclDetails {
		Name?: string;
		Arn?: string;
		ManagedbyFirewallManager?: boolean | null;
		Id?: string;
		Capacity?: number | null;
		CaptchaConfig?: AwsWafv2WebAclCaptchaConfigDetails;
		DefaultAction?: AwsWafv2WebAclActionDetails;
		Description?: string;
		Rules?: Array<AwsWafv2RulesDetails>;
		VisibilityConfig?: AwsWafv2VisibilityConfigDetails;
	}

	/**  Details about an WAFv2 web Access Control List (ACL).  */
	export interface AwsWafv2WebAclDetailsFormProperties {
		Name: FormControl<string | null | undefined>,
		Arn: FormControl<string | null | undefined>,
		ManagedbyFirewallManager: FormControl<boolean | null | undefined>,
		Id: FormControl<string | null | undefined>,
		Capacity: FormControl<number | null | undefined>,
		Description: FormControl<string | null | undefined>,
	}
	export function CreateAwsWafv2WebAclDetailsFormGroup() {
		return new FormGroup<AwsWafv2WebAclDetailsFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Arn: new FormControl<string | null | undefined>(undefined),
			ManagedbyFirewallManager: new FormControl<boolean | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			Capacity: new FormControl<number | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  Specifies how WAF should handle CAPTCHA evaluations for rules that don't have their own <code>CaptchaConfig</code> settings.  */
	export interface AwsWafv2WebAclCaptchaConfigDetails {
		ImmunityTimeProperty?: AwsWafv2WebAclCaptchaConfigImmunityTimePropertyDetails;
	}

	/**  Specifies how WAF should handle CAPTCHA evaluations for rules that don't have their own <code>CaptchaConfig</code> settings.  */
	export interface AwsWafv2WebAclCaptchaConfigDetailsFormProperties {
	}
	export function CreateAwsWafv2WebAclCaptchaConfigDetailsFormGroup() {
		return new FormGroup<AwsWafv2WebAclCaptchaConfigDetailsFormProperties>({
		});

	}


	/**  Used for CAPTCHA and challenge token settings. Determines how long a CAPTCHA or challenge timestamp remains valid after WAF updates it for a successful CAPTCHA or challenge response.  */
	export interface AwsWafv2WebAclCaptchaConfigImmunityTimePropertyDetails {
		ImmunityTime?: number | null;
	}

	/**  Used for CAPTCHA and challenge token settings. Determines how long a CAPTCHA or challenge timestamp remains valid after WAF updates it for a successful CAPTCHA or challenge response.  */
	export interface AwsWafv2WebAclCaptchaConfigImmunityTimePropertyDetailsFormProperties {
		ImmunityTime: FormControl<number | null | undefined>,
	}
	export function CreateAwsWafv2WebAclCaptchaConfigImmunityTimePropertyDetailsFormGroup() {
		return new FormGroup<AwsWafv2WebAclCaptchaConfigImmunityTimePropertyDetailsFormProperties>({
			ImmunityTime: new FormControl<number | null | undefined>(undefined),
		});

	}


	/**  Specifies the action that Amazon CloudFront or WAF takes when a web request matches the conditions in the rule.  */
	export interface AwsWafv2WebAclActionDetails {
		Allow?: AwsWafv2ActionAllowDetails;
		Block?: AwsWafv2ActionBlockDetails;
	}

	/**  Specifies the action that Amazon CloudFront or WAF takes when a web request matches the conditions in the rule.  */
	export interface AwsWafv2WebAclActionDetailsFormProperties {
	}
	export function CreateAwsWafv2WebAclActionDetailsFormGroup() {
		return new FormGroup<AwsWafv2WebAclActionDetailsFormProperties>({
		});

	}


	/**  Specifies that WAF should allow the request and optionally defines additional custom handling for the request.  */
	export interface AwsWafv2ActionAllowDetails {
		CustomRequestHandling?: AwsWafv2CustomRequestHandlingDetails;
	}

	/**  Specifies that WAF should allow the request and optionally defines additional custom handling for the request.  */
	export interface AwsWafv2ActionAllowDetailsFormProperties {
	}
	export function CreateAwsWafv2ActionAllowDetailsFormGroup() {
		return new FormGroup<AwsWafv2ActionAllowDetailsFormProperties>({
		});

	}


	/**  Custom request handling behavior that inserts custom headers into a web request. WAF uses custom request handling when the rule action doesn't block the request.  */
	export interface AwsWafv2CustomRequestHandlingDetails {
		InsertHeaders?: Array<AwsWafv2CustomHttpHeader>;
	}

	/**  Custom request handling behavior that inserts custom headers into a web request. WAF uses custom request handling when the rule action doesn't block the request.  */
	export interface AwsWafv2CustomRequestHandlingDetailsFormProperties {
	}
	export function CreateAwsWafv2CustomRequestHandlingDetailsFormGroup() {
		return new FormGroup<AwsWafv2CustomRequestHandlingDetailsFormProperties>({
		});

	}


	/**  A custom header for custom request and response handling.  */
	export interface AwsWafv2CustomHttpHeader {
		Name?: string;
		Value?: string;
	}

	/**  A custom header for custom request and response handling.  */
	export interface AwsWafv2CustomHttpHeaderFormProperties {
		Name: FormControl<string | null | undefined>,
		Value: FormControl<string | null | undefined>,
	}
	export function CreateAwsWafv2CustomHttpHeaderFormGroup() {
		return new FormGroup<AwsWafv2CustomHttpHeaderFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  Specifies that WAF should block the request and optionally defines additional custom handling for the response to the web request.  */
	export interface AwsWafv2ActionBlockDetails {
		CustomResponse?: AwsWafv2CustomResponseDetails;
	}

	/**  Specifies that WAF should block the request and optionally defines additional custom handling for the response to the web request.  */
	export interface AwsWafv2ActionBlockDetailsFormProperties {
	}
	export function CreateAwsWafv2ActionBlockDetailsFormGroup() {
		return new FormGroup<AwsWafv2ActionBlockDetailsFormProperties>({
		});

	}


	/**  A custom response to send to the client. You can define a custom response for rule actions and default web ACL actions that are set to block.  */
	export interface AwsWafv2CustomResponseDetails {
		CustomResponseBodyKey?: string;
		ResponseCode?: number | null;
		ResponseHeaders?: Array<AwsWafv2CustomHttpHeader>;
	}

	/**  A custom response to send to the client. You can define a custom response for rule actions and default web ACL actions that are set to block.  */
	export interface AwsWafv2CustomResponseDetailsFormProperties {
		CustomResponseBodyKey: FormControl<string | null | undefined>,
		ResponseCode: FormControl<number | null | undefined>,
	}
	export function CreateAwsWafv2CustomResponseDetailsFormGroup() {
		return new FormGroup<AwsWafv2CustomResponseDetailsFormProperties>({
			CustomResponseBodyKey: new FormControl<string | null | undefined>(undefined),
			ResponseCode: new FormControl<number | null | undefined>(undefined),
		});

	}


	/**  Provides details about rules in a rule group. A rule identifies web requests that you want to allow, block, or count. Each rule includes one top-level Statement that WAF uses to identify matching web requests, and parameters that govern how WAF handles them.  */
	export interface AwsWafv2RulesDetails {
		Action?: AwsWafv2RulesActionDetails;
		Name?: string;
		OverrideAction?: string;
		Priority?: number | null;
		VisibilityConfig?: AwsWafv2VisibilityConfigDetails;
	}

	/**  Provides details about rules in a rule group. A rule identifies web requests that you want to allow, block, or count. Each rule includes one top-level Statement that WAF uses to identify matching web requests, and parameters that govern how WAF handles them.  */
	export interface AwsWafv2RulesDetailsFormProperties {
		Name: FormControl<string | null | undefined>,
		OverrideAction: FormControl<string | null | undefined>,
		Priority: FormControl<number | null | undefined>,
	}
	export function CreateAwsWafv2RulesDetailsFormGroup() {
		return new FormGroup<AwsWafv2RulesDetailsFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			OverrideAction: new FormControl<string | null | undefined>(undefined),
			Priority: new FormControl<number | null | undefined>(undefined),
		});

	}


	/**  The action that WAF should take on a web request when it matches a rule's statement. Settings at the web ACL level can override the rule action setting.  */
	export interface AwsWafv2RulesActionDetails {
		Allow?: AwsWafv2ActionAllowDetails;
		Block?: AwsWafv2ActionBlockDetails;
		Captcha?: AwsWafv2RulesActionCaptchaDetails;
		Count?: AwsWafv2RulesActionCountDetails;
	}

	/**  The action that WAF should take on a web request when it matches a rule's statement. Settings at the web ACL level can override the rule action setting.  */
	export interface AwsWafv2RulesActionDetailsFormProperties {
	}
	export function CreateAwsWafv2RulesActionDetailsFormGroup() {
		return new FormGroup<AwsWafv2RulesActionDetailsFormProperties>({
		});

	}


	/**  Specifies that WAF should run a CAPTCHA check against the request.  */
	export interface AwsWafv2RulesActionCaptchaDetails {
		CustomRequestHandling?: AwsWafv2CustomRequestHandlingDetails;
	}

	/**  Specifies that WAF should run a CAPTCHA check against the request.  */
	export interface AwsWafv2RulesActionCaptchaDetailsFormProperties {
	}
	export function CreateAwsWafv2RulesActionCaptchaDetailsFormGroup() {
		return new FormGroup<AwsWafv2RulesActionCaptchaDetailsFormProperties>({
		});

	}


	/**  Specifies that WAF should count the request.  */
	export interface AwsWafv2RulesActionCountDetails {
		CustomRequestHandling?: AwsWafv2CustomRequestHandlingDetails;
	}

	/**  Specifies that WAF should count the request.  */
	export interface AwsWafv2RulesActionCountDetailsFormProperties {
	}
	export function CreateAwsWafv2RulesActionCountDetailsFormGroup() {
		return new FormGroup<AwsWafv2RulesActionCountDetailsFormProperties>({
		});

	}


	/**  Defines and enables Amazon CloudWatch metrics and web request sample collection.  */
	export interface AwsWafv2VisibilityConfigDetails {
		CloudWatchMetricsEnabled?: boolean | null;
		MetricName?: string;
		SampledRequestsEnabled?: boolean | null;
	}

	/**  Defines and enables Amazon CloudWatch metrics and web request sample collection.  */
	export interface AwsWafv2VisibilityConfigDetailsFormProperties {
		CloudWatchMetricsEnabled: FormControl<boolean | null | undefined>,
		MetricName: FormControl<string | null | undefined>,
		SampledRequestsEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateAwsWafv2VisibilityConfigDetailsFormGroup() {
		return new FormGroup<AwsWafv2VisibilityConfigDetailsFormProperties>({
			CloudWatchMetricsEnabled: new FormControl<boolean | null | undefined>(undefined),
			MetricName: new FormControl<string | null | undefined>(undefined),
			SampledRequestsEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/**  Details about an WAFv2 rule group.  */
	export interface AwsWafv2RuleGroupDetails {
		Capacity?: number | null;
		Description?: string;
		Id?: string;
		Name?: string;
		Arn?: string;
		Rules?: Array<AwsWafv2RulesDetails>;
		Scope?: string;
		VisibilityConfig?: AwsWafv2VisibilityConfigDetails;
	}

	/**  Details about an WAFv2 rule group.  */
	export interface AwsWafv2RuleGroupDetailsFormProperties {
		Capacity: FormControl<number | null | undefined>,
		Description: FormControl<string | null | undefined>,
		Id: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Arn: FormControl<string | null | undefined>,
		Scope: FormControl<string | null | undefined>,
	}
	export function CreateAwsWafv2RuleGroupDetailsFormGroup() {
		return new FormGroup<AwsWafv2RuleGroupDetailsFormProperties>({
			Capacity: new FormControl<number | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Arn: new FormControl<string | null | undefined>(undefined),
			Scope: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  Provides details about a route table for the specified VPC.  */
	export interface AwsEc2RouteTableDetails {
		AssociationSet?: Array<AssociationSetDetails>;
		OwnerId?: string;
		PropagatingVgwSet?: Array<PropagatingVgwSetDetails>;
		RouteTableId?: string;
		RouteSet?: Array<RouteSetDetails>;
		VpcId?: string;
	}

	/**  Provides details about a route table for the specified VPC.  */
	export interface AwsEc2RouteTableDetailsFormProperties {
		OwnerId: FormControl<string | null | undefined>,
		RouteTableId: FormControl<string | null | undefined>,
		VpcId: FormControl<string | null | undefined>,
	}
	export function CreateAwsEc2RouteTableDetailsFormGroup() {
		return new FormGroup<AwsEc2RouteTableDetailsFormProperties>({
			OwnerId: new FormControl<string | null | undefined>(undefined),
			RouteTableId: new FormControl<string | null | undefined>(undefined),
			VpcId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  The associations between a route table and one or more subnets or a gateway.  */
	export interface AssociationSetDetails {
		AssociationState?: AssociationStateDetails;
		GatewayId?: string;
		Main?: boolean | null;
		RouteTableAssociationId?: string;
		RouteTableId?: string;
		SubnetId?: string;
	}

	/**  The associations between a route table and one or more subnets or a gateway.  */
	export interface AssociationSetDetailsFormProperties {
		GatewayId: FormControl<string | null | undefined>,
		Main: FormControl<boolean | null | undefined>,
		RouteTableAssociationId: FormControl<string | null | undefined>,
		RouteTableId: FormControl<string | null | undefined>,
		SubnetId: FormControl<string | null | undefined>,
	}
	export function CreateAssociationSetDetailsFormGroup() {
		return new FormGroup<AssociationSetDetailsFormProperties>({
			GatewayId: new FormControl<string | null | undefined>(undefined),
			Main: new FormControl<boolean | null | undefined>(undefined),
			RouteTableAssociationId: new FormControl<string | null | undefined>(undefined),
			RouteTableId: new FormControl<string | null | undefined>(undefined),
			SubnetId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  Describes the state of an association between a route table and a subnet or gateway.  */
	export interface AssociationStateDetails {
		State?: string;
		StatusMessage?: string;
	}

	/**  Describes the state of an association between a route table and a subnet or gateway.  */
	export interface AssociationStateDetailsFormProperties {
		State: FormControl<string | null | undefined>,
		StatusMessage: FormControl<string | null | undefined>,
	}
	export function CreateAssociationStateDetailsFormGroup() {
		return new FormGroup<AssociationStateDetailsFormProperties>({
			State: new FormControl<string | null | undefined>(undefined),
			StatusMessage: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  Describes a virtual private gateway propagating route.  */
	export interface PropagatingVgwSetDetails {
		GatewayId?: string;
	}

	/**  Describes a virtual private gateway propagating route.  */
	export interface PropagatingVgwSetDetailsFormProperties {
		GatewayId: FormControl<string | null | undefined>,
	}
	export function CreatePropagatingVgwSetDetailsFormGroup() {
		return new FormGroup<PropagatingVgwSetDetailsFormProperties>({
			GatewayId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  Provides details about the routes in the route table.  */
	export interface RouteSetDetails {
		CarrierGatewayId?: string;
		CoreNetworkArn?: string;
		DestinationCidrBlock?: string;
		DestinationIpv6CidrBlock?: string;
		DestinationPrefixListId?: string;
		EgressOnlyInternetGatewayId?: string;
		GatewayId?: string;
		InstanceId?: string;
		InstanceOwnerId?: string;
		LocalGatewayId?: string;
		NatGatewayId?: string;
		NetworkInterfaceId?: string;
		Origin?: string;
		State?: string;
		TransitGatewayId?: string;
		VpcPeeringConnectionId?: string;
	}

	/**  Provides details about the routes in the route table.  */
	export interface RouteSetDetailsFormProperties {
		CarrierGatewayId: FormControl<string | null | undefined>,
		CoreNetworkArn: FormControl<string | null | undefined>,
		DestinationCidrBlock: FormControl<string | null | undefined>,
		DestinationIpv6CidrBlock: FormControl<string | null | undefined>,
		DestinationPrefixListId: FormControl<string | null | undefined>,
		EgressOnlyInternetGatewayId: FormControl<string | null | undefined>,
		GatewayId: FormControl<string | null | undefined>,
		InstanceId: FormControl<string | null | undefined>,
		InstanceOwnerId: FormControl<string | null | undefined>,
		LocalGatewayId: FormControl<string | null | undefined>,
		NatGatewayId: FormControl<string | null | undefined>,
		NetworkInterfaceId: FormControl<string | null | undefined>,
		Origin: FormControl<string | null | undefined>,
		State: FormControl<string | null | undefined>,
		TransitGatewayId: FormControl<string | null | undefined>,
		VpcPeeringConnectionId: FormControl<string | null | undefined>,
	}
	export function CreateRouteSetDetailsFormGroup() {
		return new FormGroup<RouteSetDetailsFormProperties>({
			CarrierGatewayId: new FormControl<string | null | undefined>(undefined),
			CoreNetworkArn: new FormControl<string | null | undefined>(undefined),
			DestinationCidrBlock: new FormControl<string | null | undefined>(undefined),
			DestinationIpv6CidrBlock: new FormControl<string | null | undefined>(undefined),
			DestinationPrefixListId: new FormControl<string | null | undefined>(undefined),
			EgressOnlyInternetGatewayId: new FormControl<string | null | undefined>(undefined),
			GatewayId: new FormControl<string | null | undefined>(undefined),
			InstanceId: new FormControl<string | null | undefined>(undefined),
			InstanceOwnerId: new FormControl<string | null | undefined>(undefined),
			LocalGatewayId: new FormControl<string | null | undefined>(undefined),
			NatGatewayId: new FormControl<string | null | undefined>(undefined),
			NetworkInterfaceId: new FormControl<string | null | undefined>(undefined),
			Origin: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<string | null | undefined>(undefined),
			TransitGatewayId: new FormControl<string | null | undefined>(undefined),
			VpcPeeringConnectionId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  Provides details about an Amazon MQ message broker. A message broker allows software applications and components to communicate using various programming languages, operating systems, and formal messaging protocols.  */
	export interface AwsAmazonMqBrokerDetails {
		AuthenticationStrategy?: string;
		AutoMinorVersionUpgrade?: boolean | null;
		BrokerArn?: string;
		BrokerName?: string;
		DeploymentMode?: string;
		EncryptionOptions?: AwsAmazonMqBrokerEncryptionOptionsDetails;
		EngineType?: string;
		EngineVersion?: string;
		HostInstanceType?: string;
		BrokerId?: string;
		LdapServerMetadata?: AwsAmazonMqBrokerLdapServerMetadataDetails;
		Logs?: AwsAmazonMqBrokerLogsDetails;
		MaintenanceWindowStartTime?: AwsAmazonMqBrokerMaintenanceWindowStartTimeDetails;
		PubliclyAccessible?: boolean | null;
		SecurityGroups?: Array<string>;
		StorageType?: string;
		SubnetIds?: Array<string>;
		Users?: Array<AwsAmazonMqBrokerUsersDetails>;
	}

	/**  Provides details about an Amazon MQ message broker. A message broker allows software applications and components to communicate using various programming languages, operating systems, and formal messaging protocols.  */
	export interface AwsAmazonMqBrokerDetailsFormProperties {
		AuthenticationStrategy: FormControl<string | null | undefined>,
		AutoMinorVersionUpgrade: FormControl<boolean | null | undefined>,
		BrokerArn: FormControl<string | null | undefined>,
		BrokerName: FormControl<string | null | undefined>,
		DeploymentMode: FormControl<string | null | undefined>,
		EngineType: FormControl<string | null | undefined>,
		EngineVersion: FormControl<string | null | undefined>,
		HostInstanceType: FormControl<string | null | undefined>,
		BrokerId: FormControl<string | null | undefined>,
		PubliclyAccessible: FormControl<boolean | null | undefined>,
		StorageType: FormControl<string | null | undefined>,
	}
	export function CreateAwsAmazonMqBrokerDetailsFormGroup() {
		return new FormGroup<AwsAmazonMqBrokerDetailsFormProperties>({
			AuthenticationStrategy: new FormControl<string | null | undefined>(undefined),
			AutoMinorVersionUpgrade: new FormControl<boolean | null | undefined>(undefined),
			BrokerArn: new FormControl<string | null | undefined>(undefined),
			BrokerName: new FormControl<string | null | undefined>(undefined),
			DeploymentMode: new FormControl<string | null | undefined>(undefined),
			EngineType: new FormControl<string | null | undefined>(undefined),
			EngineVersion: new FormControl<string | null | undefined>(undefined),
			HostInstanceType: new FormControl<string | null | undefined>(undefined),
			BrokerId: new FormControl<string | null | undefined>(undefined),
			PubliclyAccessible: new FormControl<boolean | null | undefined>(undefined),
			StorageType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  Provides details about broker encryption options.  */
	export interface AwsAmazonMqBrokerEncryptionOptionsDetails {
		KmsKeyId?: string;
		UseAwsOwnedKey?: boolean | null;
	}

	/**  Provides details about broker encryption options.  */
	export interface AwsAmazonMqBrokerEncryptionOptionsDetailsFormProperties {
		KmsKeyId: FormControl<string | null | undefined>,
		UseAwsOwnedKey: FormControl<boolean | null | undefined>,
	}
	export function CreateAwsAmazonMqBrokerEncryptionOptionsDetailsFormGroup() {
		return new FormGroup<AwsAmazonMqBrokerEncryptionOptionsDetailsFormProperties>({
			KmsKeyId: new FormControl<string | null | undefined>(undefined),
			UseAwsOwnedKey: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/**  The metadata of the Lightweight Directory Access Protocol (LDAP) server used to authenticate and authorize connections to the broker. This is an optional failover server.  */
	export interface AwsAmazonMqBrokerLdapServerMetadataDetails {
		Hosts?: Array<string>;
		RoleBase?: string;
		RoleName?: string;
		RoleSearchMatching?: string;
		RoleSearchSubtree?: boolean | null;
		ServiceAccountUsername?: string;
		UserBase?: string;
		UserRoleName?: string;
		UserSearchMatching?: string;
		UserSearchSubtree?: boolean | null;
	}

	/**  The metadata of the Lightweight Directory Access Protocol (LDAP) server used to authenticate and authorize connections to the broker. This is an optional failover server.  */
	export interface AwsAmazonMqBrokerLdapServerMetadataDetailsFormProperties {
		RoleBase: FormControl<string | null | undefined>,
		RoleName: FormControl<string | null | undefined>,
		RoleSearchMatching: FormControl<string | null | undefined>,
		RoleSearchSubtree: FormControl<boolean | null | undefined>,
		ServiceAccountUsername: FormControl<string | null | undefined>,
		UserBase: FormControl<string | null | undefined>,
		UserRoleName: FormControl<string | null | undefined>,
		UserSearchMatching: FormControl<string | null | undefined>,
		UserSearchSubtree: FormControl<boolean | null | undefined>,
	}
	export function CreateAwsAmazonMqBrokerLdapServerMetadataDetailsFormGroup() {
		return new FormGroup<AwsAmazonMqBrokerLdapServerMetadataDetailsFormProperties>({
			RoleBase: new FormControl<string | null | undefined>(undefined),
			RoleName: new FormControl<string | null | undefined>(undefined),
			RoleSearchMatching: new FormControl<string | null | undefined>(undefined),
			RoleSearchSubtree: new FormControl<boolean | null | undefined>(undefined),
			ServiceAccountUsername: new FormControl<string | null | undefined>(undefined),
			UserBase: new FormControl<string | null | undefined>(undefined),
			UserRoleName: new FormControl<string | null | undefined>(undefined),
			UserSearchMatching: new FormControl<string | null | undefined>(undefined),
			UserSearchSubtree: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/**  Provides information about logs to be activated for the specified broker.  */
	export interface AwsAmazonMqBrokerLogsDetails {
		Audit?: boolean | null;
		General?: boolean | null;
		AuditLogGroup?: string;
		GeneralLogGroup?: string;
		Pending?: AwsAmazonMqBrokerLogsPendingDetails;
	}

	/**  Provides information about logs to be activated for the specified broker.  */
	export interface AwsAmazonMqBrokerLogsDetailsFormProperties {
		Audit: FormControl<boolean | null | undefined>,
		General: FormControl<boolean | null | undefined>,
		AuditLogGroup: FormControl<string | null | undefined>,
		GeneralLogGroup: FormControl<string | null | undefined>,
	}
	export function CreateAwsAmazonMqBrokerLogsDetailsFormGroup() {
		return new FormGroup<AwsAmazonMqBrokerLogsDetailsFormProperties>({
			Audit: new FormControl<boolean | null | undefined>(undefined),
			General: new FormControl<boolean | null | undefined>(undefined),
			AuditLogGroup: new FormControl<string | null | undefined>(undefined),
			GeneralLogGroup: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  Provides information about logs to be activated for the specified broker.  */
	export interface AwsAmazonMqBrokerLogsPendingDetails {
		Audit?: boolean | null;
		General?: boolean | null;
	}

	/**  Provides information about logs to be activated for the specified broker.  */
	export interface AwsAmazonMqBrokerLogsPendingDetailsFormProperties {
		Audit: FormControl<boolean | null | undefined>,
		General: FormControl<boolean | null | undefined>,
	}
	export function CreateAwsAmazonMqBrokerLogsPendingDetailsFormGroup() {
		return new FormGroup<AwsAmazonMqBrokerLogsPendingDetailsFormProperties>({
			Audit: new FormControl<boolean | null | undefined>(undefined),
			General: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/**  The scheduled time period (UTC) during which Amazon MQ begins to apply pending updates or patches to the broker.  */
	export interface AwsAmazonMqBrokerMaintenanceWindowStartTimeDetails {
		DayOfWeek?: string;
		TimeOfDay?: string;
		TimeZone?: string;
	}

	/**  The scheduled time period (UTC) during which Amazon MQ begins to apply pending updates or patches to the broker.  */
	export interface AwsAmazonMqBrokerMaintenanceWindowStartTimeDetailsFormProperties {
		DayOfWeek: FormControl<string | null | undefined>,
		TimeOfDay: FormControl<string | null | undefined>,
		TimeZone: FormControl<string | null | undefined>,
	}
	export function CreateAwsAmazonMqBrokerMaintenanceWindowStartTimeDetailsFormGroup() {
		return new FormGroup<AwsAmazonMqBrokerMaintenanceWindowStartTimeDetailsFormProperties>({
			DayOfWeek: new FormControl<string | null | undefined>(undefined),
			TimeOfDay: new FormControl<string | null | undefined>(undefined),
			TimeZone: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  Provides details about the broker usernames for the specified broker. Doesn't apply to RabbitMQ brokers.  */
	export interface AwsAmazonMqBrokerUsersDetails {
		PendingChange?: string;
		Username?: string;
	}

	/**  Provides details about the broker usernames for the specified broker. Doesn't apply to RabbitMQ brokers.  */
	export interface AwsAmazonMqBrokerUsersDetailsFormProperties {
		PendingChange: FormControl<string | null | undefined>,
		Username: FormControl<string | null | undefined>,
	}
	export function CreateAwsAmazonMqBrokerUsersDetailsFormGroup() {
		return new FormGroup<AwsAmazonMqBrokerUsersDetailsFormProperties>({
			PendingChange: new FormControl<string | null | undefined>(undefined),
			Username: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  Provides details about an AppSync Graph QL API, which lets you query multiple databases, microservices, and APIs from a single GraphQL endpoint.  */
	export interface AwsAppSyncGraphQlApiDetails {
		ApiId?: string;
		Id?: string;
		OpenIdConnectConfig?: AwsAppSyncGraphQlApiOpenIdConnectConfigDetails;
		Name?: string;
		LambdaAuthorizerConfig?: AwsAppSyncGraphQlApiLambdaAuthorizerConfigDetails;
		XrayEnabled?: boolean | null;
		Arn?: string;
		UserPoolConfig?: AwsAppSyncGraphQlApiUserPoolConfigDetails;
		AuthenticationType?: string;
		LogConfig?: AwsAppSyncGraphQlApiLogConfigDetails;
		AdditionalAuthenticationProviders?: Array<AwsAppSyncGraphQlApiAdditionalAuthenticationProvidersDetails>;
		WafWebAclArn?: string;
	}

	/**  Provides details about an AppSync Graph QL API, which lets you query multiple databases, microservices, and APIs from a single GraphQL endpoint.  */
	export interface AwsAppSyncGraphQlApiDetailsFormProperties {
		ApiId: FormControl<string | null | undefined>,
		Id: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		XrayEnabled: FormControl<boolean | null | undefined>,
		Arn: FormControl<string | null | undefined>,
		AuthenticationType: FormControl<string | null | undefined>,
		WafWebAclArn: FormControl<string | null | undefined>,
	}
	export function CreateAwsAppSyncGraphQlApiDetailsFormGroup() {
		return new FormGroup<AwsAppSyncGraphQlApiDetailsFormProperties>({
			ApiId: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			XrayEnabled: new FormControl<boolean | null | undefined>(undefined),
			Arn: new FormControl<string | null | undefined>(undefined),
			AuthenticationType: new FormControl<string | null | undefined>(undefined),
			WafWebAclArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  Specifies the authorization configuration for using an OpenID Connect compliant service with your AppSync GraphQL API endpoint.  */
	export interface AwsAppSyncGraphQlApiOpenIdConnectConfigDetails {
		AuthTtL?: number | null;
		ClientId?: string;
		IatTtL?: number | null;
		Issuer?: string;
	}

	/**  Specifies the authorization configuration for using an OpenID Connect compliant service with your AppSync GraphQL API endpoint.  */
	export interface AwsAppSyncGraphQlApiOpenIdConnectConfigDetailsFormProperties {
		AuthTtL: FormControl<number | null | undefined>,
		ClientId: FormControl<string | null | undefined>,
		IatTtL: FormControl<number | null | undefined>,
		Issuer: FormControl<string | null | undefined>,
	}
	export function CreateAwsAppSyncGraphQlApiOpenIdConnectConfigDetailsFormGroup() {
		return new FormGroup<AwsAppSyncGraphQlApiOpenIdConnectConfigDetailsFormProperties>({
			AuthTtL: new FormControl<number | null | undefined>(undefined),
			ClientId: new FormControl<string | null | undefined>(undefined),
			IatTtL: new FormControl<number | null | undefined>(undefined),
			Issuer: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  Specifies the authorization configuration for using an Lambda function with your AppSync GraphQL API endpoint.  */
	export interface AwsAppSyncGraphQlApiLambdaAuthorizerConfigDetails {
		AuthorizerResultTtlInSeconds?: number | null;
		AuthorizerUri?: string;
		IdentityValidationExpression?: string;
	}

	/**  Specifies the authorization configuration for using an Lambda function with your AppSync GraphQL API endpoint.  */
	export interface AwsAppSyncGraphQlApiLambdaAuthorizerConfigDetailsFormProperties {
		AuthorizerResultTtlInSeconds: FormControl<number | null | undefined>,
		AuthorizerUri: FormControl<string | null | undefined>,
		IdentityValidationExpression: FormControl<string | null | undefined>,
	}
	export function CreateAwsAppSyncGraphQlApiLambdaAuthorizerConfigDetailsFormGroup() {
		return new FormGroup<AwsAppSyncGraphQlApiLambdaAuthorizerConfigDetailsFormProperties>({
			AuthorizerResultTtlInSeconds: new FormControl<number | null | undefined>(undefined),
			AuthorizerUri: new FormControl<string | null | undefined>(undefined),
			IdentityValidationExpression: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  Specifies the authorization configuration for using Amazon Cognito user pools with your AppSync GraphQL API endpoint.  */
	export interface AwsAppSyncGraphQlApiUserPoolConfigDetails {
		AppIdClientRegex?: string;
		AwsRegion?: string;
		DefaultAction?: string;
		UserPoolId?: string;
	}

	/**  Specifies the authorization configuration for using Amazon Cognito user pools with your AppSync GraphQL API endpoint.  */
	export interface AwsAppSyncGraphQlApiUserPoolConfigDetailsFormProperties {
		AppIdClientRegex: FormControl<string | null | undefined>,
		AwsRegion: FormControl<string | null | undefined>,
		DefaultAction: FormControl<string | null | undefined>,
		UserPoolId: FormControl<string | null | undefined>,
	}
	export function CreateAwsAppSyncGraphQlApiUserPoolConfigDetailsFormGroup() {
		return new FormGroup<AwsAppSyncGraphQlApiUserPoolConfigDetailsFormProperties>({
			AppIdClientRegex: new FormControl<string | null | undefined>(undefined),
			AwsRegion: new FormControl<string | null | undefined>(undefined),
			DefaultAction: new FormControl<string | null | undefined>(undefined),
			UserPoolId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  Specifies the logging configuration when writing GraphQL operations and tracing to Amazon CloudWatch for an AppSync GraphQL API.  */
	export interface AwsAppSyncGraphQlApiLogConfigDetails {
		CloudWatchLogsRoleArn?: string;
		ExcludeVerboseContent?: boolean | null;
		FieldLogLevel?: string;
	}

	/**  Specifies the logging configuration when writing GraphQL operations and tracing to Amazon CloudWatch for an AppSync GraphQL API.  */
	export interface AwsAppSyncGraphQlApiLogConfigDetailsFormProperties {
		CloudWatchLogsRoleArn: FormControl<string | null | undefined>,
		ExcludeVerboseContent: FormControl<boolean | null | undefined>,
		FieldLogLevel: FormControl<string | null | undefined>,
	}
	export function CreateAwsAppSyncGraphQlApiLogConfigDetailsFormGroup() {
		return new FormGroup<AwsAppSyncGraphQlApiLogConfigDetailsFormProperties>({
			CloudWatchLogsRoleArn: new FormControl<string | null | undefined>(undefined),
			ExcludeVerboseContent: new FormControl<boolean | null | undefined>(undefined),
			FieldLogLevel: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  A list of additional authentication providers for the GraphqlApi API.  */
	export interface AwsAppSyncGraphQlApiAdditionalAuthenticationProvidersDetails {
		AuthenticationType?: string;
		LambdaAuthorizerConfig?: AwsAppSyncGraphQlApiLambdaAuthorizerConfigDetails;
		OpenIdConnectConfig?: AwsAppSyncGraphQlApiOpenIdConnectConfigDetails;
		UserPoolConfig?: AwsAppSyncGraphQlApiUserPoolConfigDetails;
	}

	/**  A list of additional authentication providers for the GraphqlApi API.  */
	export interface AwsAppSyncGraphQlApiAdditionalAuthenticationProvidersDetailsFormProperties {
		AuthenticationType: FormControl<string | null | undefined>,
	}
	export function CreateAwsAppSyncGraphQlApiAdditionalAuthenticationProvidersDetailsFormGroup() {
		return new FormGroup<AwsAppSyncGraphQlApiAdditionalAuthenticationProvidersDetailsFormProperties>({
			AuthenticationType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  A schema defines the structure of events that are sent to Amazon EventBridge. Schema registries are containers for schemas. They collect and organize schemas so that your schemas are in logical groups.  */
	export interface AwsEventSchemasRegistryDetails {
		Description?: string;
		RegistryArn?: string;
		RegistryName?: string;
	}

	/**  A schema defines the structure of events that are sent to Amazon EventBridge. Schema registries are containers for schemas. They collect and organize schemas so that your schemas are in logical groups.  */
	export interface AwsEventSchemasRegistryDetailsFormProperties {
		Description: FormControl<string | null | undefined>,
		RegistryArn: FormControl<string | null | undefined>,
		RegistryName: FormControl<string | null | undefined>,
	}
	export function CreateAwsEventSchemasRegistryDetailsFormGroup() {
		return new FormGroup<AwsEventSchemasRegistryDetailsFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined),
			RegistryArn: new FormControl<string | null | undefined>(undefined),
			RegistryName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  Provides details about an Amazon GuardDuty detector. A detector is an object that represents the GuardDuty service. A detector is required for GuardDuty to become operational.  */
	export interface AwsGuardDutyDetectorDetails {
		DataSources?: AwsGuardDutyDetectorDataSourcesDetails;
		Features?: Array<AwsGuardDutyDetectorFeaturesDetails>;
		FindingPublishingFrequency?: string;
		ServiceRole?: string;
		Status?: string;
	}

	/**  Provides details about an Amazon GuardDuty detector. A detector is an object that represents the GuardDuty service. A detector is required for GuardDuty to become operational.  */
	export interface AwsGuardDutyDetectorDetailsFormProperties {
		FindingPublishingFrequency: FormControl<string | null | undefined>,
		ServiceRole: FormControl<string | null | undefined>,
		Status: FormControl<string | null | undefined>,
	}
	export function CreateAwsGuardDutyDetectorDetailsFormGroup() {
		return new FormGroup<AwsGuardDutyDetectorDetailsFormProperties>({
			FindingPublishingFrequency: new FormControl<string | null | undefined>(undefined),
			ServiceRole: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  Describes which data sources are activated for the detector.  */
	export interface AwsGuardDutyDetectorDataSourcesDetails {
		CloudTrail?: AwsGuardDutyDetectorDataSourcesCloudTrailDetails;
		DnsLogs?: AwsGuardDutyDetectorDataSourcesDnsLogsDetails;
		FlowLogs?: AwsGuardDutyDetectorDataSourcesFlowLogsDetails;
		Kubernetes?: AwsGuardDutyDetectorDataSourcesKubernetesDetails;
		MalwareProtection?: AwsGuardDutyDetectorDataSourcesMalwareProtectionDetails;
		S3Logs?: AwsGuardDutyDetectorDataSourcesS3LogsDetails;
	}

	/**  Describes which data sources are activated for the detector.  */
	export interface AwsGuardDutyDetectorDataSourcesDetailsFormProperties {
	}
	export function CreateAwsGuardDutyDetectorDataSourcesDetailsFormGroup() {
		return new FormGroup<AwsGuardDutyDetectorDataSourcesDetailsFormProperties>({
		});

	}


	/**  An object that contains information on the status of CloudTrail as a data source for the detector.  */
	export interface AwsGuardDutyDetectorDataSourcesCloudTrailDetails {
		Status?: string;
	}

	/**  An object that contains information on the status of CloudTrail as a data source for the detector.  */
	export interface AwsGuardDutyDetectorDataSourcesCloudTrailDetailsFormProperties {
		Status: FormControl<string | null | undefined>,
	}
	export function CreateAwsGuardDutyDetectorDataSourcesCloudTrailDetailsFormGroup() {
		return new FormGroup<AwsGuardDutyDetectorDataSourcesCloudTrailDetailsFormProperties>({
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  An object that contains information on the status of DNS logs as a data source for the detector.  */
	export interface AwsGuardDutyDetectorDataSourcesDnsLogsDetails {
		Status?: string;
	}

	/**  An object that contains information on the status of DNS logs as a data source for the detector.  */
	export interface AwsGuardDutyDetectorDataSourcesDnsLogsDetailsFormProperties {
		Status: FormControl<string | null | undefined>,
	}
	export function CreateAwsGuardDutyDetectorDataSourcesDnsLogsDetailsFormGroup() {
		return new FormGroup<AwsGuardDutyDetectorDataSourcesDnsLogsDetailsFormProperties>({
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  An object that contains information on the status of VPC Flow Logs as a data source for the detector.  */
	export interface AwsGuardDutyDetectorDataSourcesFlowLogsDetails {
		Status?: string;
	}

	/**  An object that contains information on the status of VPC Flow Logs as a data source for the detector.  */
	export interface AwsGuardDutyDetectorDataSourcesFlowLogsDetailsFormProperties {
		Status: FormControl<string | null | undefined>,
	}
	export function CreateAwsGuardDutyDetectorDataSourcesFlowLogsDetailsFormGroup() {
		return new FormGroup<AwsGuardDutyDetectorDataSourcesFlowLogsDetailsFormProperties>({
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  An object that contains information on the status of Kubernetes data sources for the detector.  */
	export interface AwsGuardDutyDetectorDataSourcesKubernetesDetails {
		AuditLogs?: AwsGuardDutyDetectorDataSourcesKubernetesAuditLogsDetails;
	}

	/**  An object that contains information on the status of Kubernetes data sources for the detector.  */
	export interface AwsGuardDutyDetectorDataSourcesKubernetesDetailsFormProperties {
	}
	export function CreateAwsGuardDutyDetectorDataSourcesKubernetesDetailsFormGroup() {
		return new FormGroup<AwsGuardDutyDetectorDataSourcesKubernetesDetailsFormProperties>({
		});

	}


	/**  An object that contains information on the status of Kubernetes audit logs as a data source for the detector.  */
	export interface AwsGuardDutyDetectorDataSourcesKubernetesAuditLogsDetails {
		Status?: string;
	}

	/**  An object that contains information on the status of Kubernetes audit logs as a data source for the detector.  */
	export interface AwsGuardDutyDetectorDataSourcesKubernetesAuditLogsDetailsFormProperties {
		Status: FormControl<string | null | undefined>,
	}
	export function CreateAwsGuardDutyDetectorDataSourcesKubernetesAuditLogsDetailsFormGroup() {
		return new FormGroup<AwsGuardDutyDetectorDataSourcesKubernetesAuditLogsDetailsFormProperties>({
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  An object that contains information on the status of Malware Protection as a data source for the detector.  */
	export interface AwsGuardDutyDetectorDataSourcesMalwareProtectionDetails {
		ScanEc2InstanceWithFindings?: AwsGuardDutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindingsDetails;
		ServiceRole?: string;
	}

	/**  An object that contains information on the status of Malware Protection as a data source for the detector.  */
	export interface AwsGuardDutyDetectorDataSourcesMalwareProtectionDetailsFormProperties {
		ServiceRole: FormControl<string | null | undefined>,
	}
	export function CreateAwsGuardDutyDetectorDataSourcesMalwareProtectionDetailsFormGroup() {
		return new FormGroup<AwsGuardDutyDetectorDataSourcesMalwareProtectionDetailsFormProperties>({
			ServiceRole: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  Describes the configuration of Malware Protection for EC2 instances with findings.  */
	export interface AwsGuardDutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindingsDetails {
		EbsVolumes?: AwsGuardDutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesDetails;
	}

	/**  Describes the configuration of Malware Protection for EC2 instances with findings.  */
	export interface AwsGuardDutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindingsDetailsFormProperties {
	}
	export function CreateAwsGuardDutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindingsDetailsFormGroup() {
		return new FormGroup<AwsGuardDutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindingsDetailsFormProperties>({
		});

	}


	/**  Describes the configuration of scanning EBS volumes (Malware Protection) as a data source.  */
	export interface AwsGuardDutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesDetails {
		Reason?: string;
		Status?: string;
	}

	/**  Describes the configuration of scanning EBS volumes (Malware Protection) as a data source.  */
	export interface AwsGuardDutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesDetailsFormProperties {
		Reason: FormControl<string | null | undefined>,
		Status: FormControl<string | null | undefined>,
	}
	export function CreateAwsGuardDutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesDetailsFormGroup() {
		return new FormGroup<AwsGuardDutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesDetailsFormProperties>({
			Reason: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  An object that contains information on the status of S3 data event logs as a data source for the detector.  */
	export interface AwsGuardDutyDetectorDataSourcesS3LogsDetails {
		Status?: string;
	}

	/**  An object that contains information on the status of S3 data event logs as a data source for the detector.  */
	export interface AwsGuardDutyDetectorDataSourcesS3LogsDetailsFormProperties {
		Status: FormControl<string | null | undefined>,
	}
	export function CreateAwsGuardDutyDetectorDataSourcesS3LogsDetailsFormGroup() {
		return new FormGroup<AwsGuardDutyDetectorDataSourcesS3LogsDetailsFormProperties>({
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  Describes which features are activated for the detector.  */
	export interface AwsGuardDutyDetectorFeaturesDetails {
		Name?: string;
		Status?: string;
	}

	/**  Describes which features are activated for the detector.  */
	export interface AwsGuardDutyDetectorFeaturesDetailsFormProperties {
		Name: FormControl<string | null | undefined>,
		Status: FormControl<string | null | undefined>,
	}
	export function CreateAwsGuardDutyDetectorFeaturesDetailsFormGroup() {
		return new FormGroup<AwsGuardDutyDetectorFeaturesDetailsFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  Provides details about an Step Functions state machine, which is a workflow consisting of a series of event- driven steps.  */
	export interface AwsStepFunctionStateMachineDetails {
		Label?: string;
		LoggingConfiguration?: AwsStepFunctionStateMachineLoggingConfigurationDetails;
		Name?: string;
		RoleArn?: string;
		StateMachineArn?: string;
		Status?: string;
		TracingConfiguration?: AwsStepFunctionStateMachineTracingConfigurationDetails;
		Type?: string;
	}

	/**  Provides details about an Step Functions state machine, which is a workflow consisting of a series of event- driven steps.  */
	export interface AwsStepFunctionStateMachineDetailsFormProperties {
		Label: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		RoleArn: FormControl<string | null | undefined>,
		StateMachineArn: FormControl<string | null | undefined>,
		Status: FormControl<string | null | undefined>,
		Type: FormControl<string | null | undefined>,
	}
	export function CreateAwsStepFunctionStateMachineDetailsFormGroup() {
		return new FormGroup<AwsStepFunctionStateMachineDetailsFormProperties>({
			Label: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			RoleArn: new FormControl<string | null | undefined>(undefined),
			StateMachineArn: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  The <code>LoggingConfiguration</code> data type is used to set CloudWatch Logs options.  */
	export interface AwsStepFunctionStateMachineLoggingConfigurationDetails {
		Destinations?: Array<AwsStepFunctionStateMachineLoggingConfigurationDestinationsDetails>;
		IncludeExecutionData?: boolean | null;
		Level?: string;
	}

	/**  The <code>LoggingConfiguration</code> data type is used to set CloudWatch Logs options.  */
	export interface AwsStepFunctionStateMachineLoggingConfigurationDetailsFormProperties {
		IncludeExecutionData: FormControl<boolean | null | undefined>,
		Level: FormControl<string | null | undefined>,
	}
	export function CreateAwsStepFunctionStateMachineLoggingConfigurationDetailsFormGroup() {
		return new FormGroup<AwsStepFunctionStateMachineLoggingConfigurationDetailsFormProperties>({
			IncludeExecutionData: new FormControl<boolean | null | undefined>(undefined),
			Level: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  An array of objects that describes where your execution history events will be logged.  */
	export interface AwsStepFunctionStateMachineLoggingConfigurationDestinationsDetails {
		CloudWatchLogsLogGroup?: AwsStepFunctionStateMachineLoggingConfigurationDestinationsCloudWatchLogsLogGroupDetails;
	}

	/**  An array of objects that describes where your execution history events will be logged.  */
	export interface AwsStepFunctionStateMachineLoggingConfigurationDestinationsDetailsFormProperties {
	}
	export function CreateAwsStepFunctionStateMachineLoggingConfigurationDestinationsDetailsFormGroup() {
		return new FormGroup<AwsStepFunctionStateMachineLoggingConfigurationDestinationsDetailsFormProperties>({
		});

	}


	/**  An object describing a CloudWatch log group. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-loggroup.html"> Amazon Web Services::Logs::LogGroup</a> in the <i>CloudFormation User Guide</i>.  */
	export interface AwsStepFunctionStateMachineLoggingConfigurationDestinationsCloudWatchLogsLogGroupDetails {
		LogGroupArn?: string;
	}

	/**  An object describing a CloudWatch log group. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-loggroup.html"> Amazon Web Services::Logs::LogGroup</a> in the <i>CloudFormation User Guide</i>.  */
	export interface AwsStepFunctionStateMachineLoggingConfigurationDestinationsCloudWatchLogsLogGroupDetailsFormProperties {
		LogGroupArn: FormControl<string | null | undefined>,
	}
	export function CreateAwsStepFunctionStateMachineLoggingConfigurationDestinationsCloudWatchLogsLogGroupDetailsFormGroup() {
		return new FormGroup<AwsStepFunctionStateMachineLoggingConfigurationDestinationsCloudWatchLogsLogGroupDetailsFormProperties>({
			LogGroupArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  Specifies whether X-Ray tracing is enabled.  */
	export interface AwsStepFunctionStateMachineTracingConfigurationDetails {
		Enabled?: boolean | null;
	}

	/**  Specifies whether X-Ray tracing is enabled.  */
	export interface AwsStepFunctionStateMachineTracingConfigurationDetailsFormProperties {
		Enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateAwsStepFunctionStateMachineTracingConfigurationDetailsFormGroup() {
		return new FormGroup<AwsStepFunctionStateMachineTracingConfigurationDetailsFormProperties>({
			Enabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/**  Provides information about an Amazon Athena workgroup.  */
	export interface AwsAthenaWorkGroupDetails {
		Name?: string;
		Description?: string;
		State?: string;
		Configuration?: AwsAthenaWorkGroupConfigurationDetails;
	}

	/**  Provides information about an Amazon Athena workgroup.  */
	export interface AwsAthenaWorkGroupDetailsFormProperties {
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		State: FormControl<string | null | undefined>,
	}
	export function CreateAwsAthenaWorkGroupDetailsFormGroup() {
		return new FormGroup<AwsAthenaWorkGroupDetailsFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  The configuration of the workgroup, which includes the location in Amazon Simple Storage Service (Amazon S3) where query results are stored, the encryption option, if any, used for query results, whether Amazon CloudWatch metrics are enabled for the workgroup, and the limit for the amount of bytes scanned (cutoff) per query, if it is specified.  */
	export interface AwsAthenaWorkGroupConfigurationDetails {
		ResultConfiguration?: AwsAthenaWorkGroupConfigurationResultConfigurationDetails;
	}

	/**  The configuration of the workgroup, which includes the location in Amazon Simple Storage Service (Amazon S3) where query results are stored, the encryption option, if any, used for query results, whether Amazon CloudWatch metrics are enabled for the workgroup, and the limit for the amount of bytes scanned (cutoff) per query, if it is specified.  */
	export interface AwsAthenaWorkGroupConfigurationDetailsFormProperties {
	}
	export function CreateAwsAthenaWorkGroupConfigurationDetailsFormGroup() {
		return new FormGroup<AwsAthenaWorkGroupConfigurationDetailsFormProperties>({
		});

	}


	/**  The location in Amazon Simple Storage Service (Amazon S3) where query and calculation results are stored and the encryption option, if any, used for query and calculation results. These are known as client-side settings. If workgroup settings override client-side settings, then the query uses the workgroup settings.  */
	export interface AwsAthenaWorkGroupConfigurationResultConfigurationDetails {
		EncryptionConfiguration?: AwsAthenaWorkGroupConfigurationResultConfigurationEncryptionConfigurationDetails;
	}

	/**  The location in Amazon Simple Storage Service (Amazon S3) where query and calculation results are stored and the encryption option, if any, used for query and calculation results. These are known as client-side settings. If workgroup settings override client-side settings, then the query uses the workgroup settings.  */
	export interface AwsAthenaWorkGroupConfigurationResultConfigurationDetailsFormProperties {
	}
	export function CreateAwsAthenaWorkGroupConfigurationResultConfigurationDetailsFormGroup() {
		return new FormGroup<AwsAthenaWorkGroupConfigurationResultConfigurationDetailsFormProperties>({
		});

	}


	/**  Specifies the method used to encrypt the user’s data stores in the Athena workgroup.  */
	export interface AwsAthenaWorkGroupConfigurationResultConfigurationEncryptionConfigurationDetails {
		EncryptionOption?: string;
		KmsKey?: string;
	}

	/**  Specifies the method used to encrypt the user’s data stores in the Athena workgroup.  */
	export interface AwsAthenaWorkGroupConfigurationResultConfigurationEncryptionConfigurationDetailsFormProperties {
		EncryptionOption: FormControl<string | null | undefined>,
		KmsKey: FormControl<string | null | undefined>,
	}
	export function CreateAwsAthenaWorkGroupConfigurationResultConfigurationEncryptionConfigurationDetailsFormGroup() {
		return new FormGroup<AwsAthenaWorkGroupConfigurationResultConfigurationEncryptionConfigurationDetailsFormProperties>({
			EncryptionOption: new FormControl<string | null | undefined>(undefined),
			KmsKey: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains finding details that are specific to control-based findings. Only returned for findings generated from controls. */
	export interface Compliance {
		Status?: ComplianceStatus;
		RelatedRequirements?: Array<string>;
		StatusReasons?: Array<StatusReason>;
		SecurityControlId?: string;
		AssociatedStandards?: Array<AssociatedStandard>;
	}

	/** Contains finding details that are specific to control-based findings. Only returned for findings generated from controls. */
	export interface ComplianceFormProperties {
		Status: FormControl<ComplianceStatus | null | undefined>,
		SecurityControlId: FormControl<string | null | undefined>,
	}
	export function CreateComplianceFormGroup() {
		return new FormGroup<ComplianceFormProperties>({
			Status: new FormControl<ComplianceStatus | null | undefined>(undefined),
			SecurityControlId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ComplianceStatus { PASSED = 'PASSED', WARNING = 'WARNING', FAILED = 'FAILED', NOT_AVAILABLE = 'NOT_AVAILABLE' }


	/** Provides additional context for the value of <code>Compliance.Status</code>. */
	export interface StatusReason {

		/** Required */
		ReasonCode: string;
		Description?: string;
	}

	/** Provides additional context for the value of <code>Compliance.Status</code>. */
	export interface StatusReasonFormProperties {

		/** Required */
		ReasonCode: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
	}
	export function CreateStatusReasonFormGroup() {
		return new FormGroup<StatusReasonFormProperties>({
			ReasonCode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  Information about an enabled security standard in which a security control is enabled.  */
	export interface AssociatedStandard {
		StandardsId?: string;
	}

	/**  Information about an enabled security standard in which a security control is enabled.  */
	export interface AssociatedStandardFormProperties {
		StandardsId: FormControl<string | null | undefined>,
	}
	export function CreateAssociatedStandardFormGroup() {
		return new FormGroup<AssociatedStandardFormProperties>({
			StandardsId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This filter is deprecated. Instead, use SeverityLabel or FindingProviderFieldsSeverityLabel. */
	export enum WorkflowState { NEW = 'NEW', ASSIGNED = 'ASSIGNED', IN_PROGRESS = 'IN_PROGRESS', DEFERRED = 'DEFERRED', RESOLVED = 'RESOLVED' }


	/** Provides information about the status of the investigation into a finding. */
	export interface Workflow {
		Status?: WorkflowStatus;
	}

	/** Provides information about the status of the investigation into a finding. */
	export interface WorkflowFormProperties {
		Status: FormControl<WorkflowStatus | null | undefined>,
	}
	export function CreateWorkflowFormGroup() {
		return new FormGroup<WorkflowFormProperties>({
			Status: new FormControl<WorkflowStatus | null | undefined>(undefined),
		});

	}

	export enum RecordState { ACTIVE = 'ACTIVE', ARCHIVED = 'ARCHIVED' }


	/** A user-defined note added to a finding. */
	export interface Note {

		/** Required */
		Text: string;

		/** Required */
		UpdatedBy: string;

		/** Required */
		UpdatedAt: string;
	}

	/** A user-defined note added to a finding. */
	export interface NoteFormProperties {

		/** Required */
		Text: FormControl<string | null | undefined>,

		/** Required */
		UpdatedBy: FormControl<string | null | undefined>,

		/** Required */
		UpdatedAt: FormControl<string | null | undefined>,
	}
	export function CreateNoteFormGroup() {
		return new FormGroup<NoteFormProperties>({
			Text: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			UpdatedBy: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			UpdatedAt: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A vulnerability associated with a finding. */
	export interface Vulnerability {

		/** Required */
		Id: string;
		VulnerablePackages?: Array<SoftwarePackage>;
		Cvss?: Array<Cvss>;
		RelatedVulnerabilities?: Array<string>;
		Vendor?: VulnerabilityVendor;
		ReferenceUrls?: Array<string>;
		FixAvailable?: VulnerabilityFixAvailable;
	}

	/** A vulnerability associated with a finding. */
	export interface VulnerabilityFormProperties {

		/** Required */
		Id: FormControl<string | null | undefined>,
		FixAvailable: FormControl<VulnerabilityFixAvailable | null | undefined>,
	}
	export function CreateVulnerabilityFormGroup() {
		return new FormGroup<VulnerabilityFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			FixAvailable: new FormControl<VulnerabilityFixAvailable | null | undefined>(undefined),
		});

	}


	/** Information about a software package. */
	export interface SoftwarePackage {
		Name?: string;
		Version?: string;
		Epoch?: string;
		Release?: string;
		Architecture?: string;
		PackageManager?: string;
		FilePath?: string;
		FixedInVersion?: string;
		Remediation?: string;
		SourceLayerHash?: string;
		SourceLayerArn?: string;
	}

	/** Information about a software package. */
	export interface SoftwarePackageFormProperties {
		Name: FormControl<string | null | undefined>,
		Version: FormControl<string | null | undefined>,
		Epoch: FormControl<string | null | undefined>,
		Release: FormControl<string | null | undefined>,
		Architecture: FormControl<string | null | undefined>,
		PackageManager: FormControl<string | null | undefined>,
		FilePath: FormControl<string | null | undefined>,
		FixedInVersion: FormControl<string | null | undefined>,
		Remediation: FormControl<string | null | undefined>,
		SourceLayerHash: FormControl<string | null | undefined>,
		SourceLayerArn: FormControl<string | null | undefined>,
	}
	export function CreateSoftwarePackageFormGroup() {
		return new FormGroup<SoftwarePackageFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Version: new FormControl<string | null | undefined>(undefined),
			Epoch: new FormControl<string | null | undefined>(undefined),
			Release: new FormControl<string | null | undefined>(undefined),
			Architecture: new FormControl<string | null | undefined>(undefined),
			PackageManager: new FormControl<string | null | undefined>(undefined),
			FilePath: new FormControl<string | null | undefined>(undefined),
			FixedInVersion: new FormControl<string | null | undefined>(undefined),
			Remediation: new FormControl<string | null | undefined>(undefined),
			SourceLayerHash: new FormControl<string | null | undefined>(undefined),
			SourceLayerArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** CVSS scores from the advisory related to the vulnerability. */
	export interface Cvss {
		Version?: string;
		BaseScore?: number | null;
		BaseVector?: string;
		Source?: string;
		Adjustments?: Array<Adjustment>;
	}

	/** CVSS scores from the advisory related to the vulnerability. */
	export interface CvssFormProperties {
		Version: FormControl<string | null | undefined>,
		BaseScore: FormControl<number | null | undefined>,
		BaseVector: FormControl<string | null | undefined>,
		Source: FormControl<string | null | undefined>,
	}
	export function CreateCvssFormGroup() {
		return new FormGroup<CvssFormProperties>({
			Version: new FormControl<string | null | undefined>(undefined),
			BaseScore: new FormControl<number | null | undefined>(undefined),
			BaseVector: new FormControl<string | null | undefined>(undefined),
			Source: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An adjustment to the CVSS metric. */
	export interface Adjustment {
		Metric?: string;
		Reason?: string;
	}

	/** An adjustment to the CVSS metric. */
	export interface AdjustmentFormProperties {
		Metric: FormControl<string | null | undefined>,
		Reason: FormControl<string | null | undefined>,
	}
	export function CreateAdjustmentFormGroup() {
		return new FormGroup<AdjustmentFormProperties>({
			Metric: new FormControl<string | null | undefined>(undefined),
			Reason: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A vendor that generates a vulnerability report. */
	export interface VulnerabilityVendor {

		/** Required */
		Name: string;
		Url?: string;
		VendorSeverity?: string;
		VendorCreatedAt?: string;
		VendorUpdatedAt?: string;
	}

	/** A vendor that generates a vulnerability report. */
	export interface VulnerabilityVendorFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
		Url: FormControl<string | null | undefined>,
		VendorSeverity: FormControl<string | null | undefined>,
		VendorCreatedAt: FormControl<string | null | undefined>,
		VendorUpdatedAt: FormControl<string | null | undefined>,
	}
	export function CreateVulnerabilityVendorFormGroup() {
		return new FormGroup<VulnerabilityVendorFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Url: new FormControl<string | null | undefined>(undefined),
			VendorSeverity: new FormControl<string | null | undefined>(undefined),
			VendorCreatedAt: new FormControl<string | null | undefined>(undefined),
			VendorUpdatedAt: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum VulnerabilityFixAvailable { YES = 'YES', NO = 'NO', PARTIAL = 'PARTIAL' }


	/** Provides an overview of the patch compliance status for an instance against a selected compliance standard. */
	export interface PatchSummary {

		/** Required */
		Id: string;
		InstalledCount?: number | null;
		MissingCount?: number | null;
		FailedCount?: number | null;
		InstalledOtherCount?: number | null;
		InstalledRejectedCount?: number | null;
		InstalledPendingReboot?: number | null;
		OperationStartTime?: string;
		OperationEndTime?: string;
		RebootOption?: string;
		Operation?: string;
	}

	/** Provides an overview of the patch compliance status for an instance against a selected compliance standard. */
	export interface PatchSummaryFormProperties {

		/** Required */
		Id: FormControl<string | null | undefined>,
		InstalledCount: FormControl<number | null | undefined>,
		MissingCount: FormControl<number | null | undefined>,
		FailedCount: FormControl<number | null | undefined>,
		InstalledOtherCount: FormControl<number | null | undefined>,
		InstalledRejectedCount: FormControl<number | null | undefined>,
		InstalledPendingReboot: FormControl<number | null | undefined>,
		OperationStartTime: FormControl<string | null | undefined>,
		OperationEndTime: FormControl<string | null | undefined>,
		RebootOption: FormControl<string | null | undefined>,
		Operation: FormControl<string | null | undefined>,
	}
	export function CreatePatchSummaryFormGroup() {
		return new FormGroup<PatchSummaryFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			InstalledCount: new FormControl<number | null | undefined>(undefined),
			MissingCount: new FormControl<number | null | undefined>(undefined),
			FailedCount: new FormControl<number | null | undefined>(undefined),
			InstalledOtherCount: new FormControl<number | null | undefined>(undefined),
			InstalledRejectedCount: new FormControl<number | null | undefined>(undefined),
			InstalledPendingReboot: new FormControl<number | null | undefined>(undefined),
			OperationStartTime: new FormControl<string | null | undefined>(undefined),
			OperationEndTime: new FormControl<string | null | undefined>(undefined),
			RebootOption: new FormControl<string | null | undefined>(undefined),
			Operation: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>Provides details about one of the following actions that affects or that was taken on a resource:</p> <ul> <li> <p>A remote IP address issued an Amazon Web Services API call</p> </li> <li> <p>A DNS request was received</p> </li> <li> <p>A remote IP address attempted to connect to an EC2 instance</p> </li> <li> <p>A remote IP address attempted a port probe on an EC2 instance</p> </li> </ul> */
	export interface Action {
		ActionType?: string;
		NetworkConnectionAction?: NetworkConnectionAction;
		AwsApiCallAction?: AwsApiCallAction;
		DnsRequestAction?: DnsRequestAction;
		PortProbeAction?: PortProbeAction;
	}

	/** <p>Provides details about one of the following actions that affects or that was taken on a resource:</p> <ul> <li> <p>A remote IP address issued an Amazon Web Services API call</p> </li> <li> <p>A DNS request was received</p> </li> <li> <p>A remote IP address attempted to connect to an EC2 instance</p> </li> <li> <p>A remote IP address attempted a port probe on an EC2 instance</p> </li> </ul> */
	export interface ActionFormProperties {
		ActionType: FormControl<string | null | undefined>,
	}
	export function CreateActionFormGroup() {
		return new FormGroup<ActionFormProperties>({
			ActionType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provided if <code>ActionType</code> is <code>NETWORK_CONNECTION</code>. It provides details about the attempted network connection that was detected. */
	export interface NetworkConnectionAction {
		ConnectionDirection?: string;
		RemoteIpDetails?: ActionRemoteIpDetails;
		RemotePortDetails?: ActionRemotePortDetails;
		LocalPortDetails?: ActionLocalPortDetails;
		Protocol?: string;
		Blocked?: boolean | null;
	}

	/** Provided if <code>ActionType</code> is <code>NETWORK_CONNECTION</code>. It provides details about the attempted network connection that was detected. */
	export interface NetworkConnectionActionFormProperties {
		ConnectionDirection: FormControl<string | null | undefined>,
		Protocol: FormControl<string | null | undefined>,
		Blocked: FormControl<boolean | null | undefined>,
	}
	export function CreateNetworkConnectionActionFormGroup() {
		return new FormGroup<NetworkConnectionActionFormProperties>({
			ConnectionDirection: new FormControl<string | null | undefined>(undefined),
			Protocol: new FormControl<string | null | undefined>(undefined),
			Blocked: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** For <code>AwsApiAction</code>, <code>NetworkConnectionAction</code>, and <code>PortProbeAction</code>, <code>RemoteIpDetails</code> provides information about the remote IP address that was involved in the action. */
	export interface ActionRemoteIpDetails {
		IpAddressV4?: string;
		Organization?: IpOrganizationDetails;
		Country?: Country;
		City?: City;
		GeoLocation?: GeoLocation;
	}

	/** For <code>AwsApiAction</code>, <code>NetworkConnectionAction</code>, and <code>PortProbeAction</code>, <code>RemoteIpDetails</code> provides information about the remote IP address that was involved in the action. */
	export interface ActionRemoteIpDetailsFormProperties {
		IpAddressV4: FormControl<string | null | undefined>,
	}
	export function CreateActionRemoteIpDetailsFormGroup() {
		return new FormGroup<ActionRemoteIpDetailsFormProperties>({
			IpAddressV4: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides information about an internet provider. */
	export interface IpOrganizationDetails {
		Asn?: number | null;
		AsnOrg?: string;
		Isp?: string;
		Org?: string;
	}

	/** Provides information about an internet provider. */
	export interface IpOrganizationDetailsFormProperties {
		Asn: FormControl<number | null | undefined>,
		AsnOrg: FormControl<string | null | undefined>,
		Isp: FormControl<string | null | undefined>,
		Org: FormControl<string | null | undefined>,
	}
	export function CreateIpOrganizationDetailsFormGroup() {
		return new FormGroup<IpOrganizationDetailsFormProperties>({
			Asn: new FormControl<number | null | undefined>(undefined),
			AsnOrg: new FormControl<string | null | undefined>(undefined),
			Isp: new FormControl<string | null | undefined>(undefined),
			Org: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about a country. */
	export interface Country {
		CountryCode?: string;
		CountryName?: string;
	}

	/** Information about a country. */
	export interface CountryFormProperties {
		CountryCode: FormControl<string | null | undefined>,
		CountryName: FormControl<string | null | undefined>,
	}
	export function CreateCountryFormGroup() {
		return new FormGroup<CountryFormProperties>({
			CountryCode: new FormControl<string | null | undefined>(undefined),
			CountryName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about a city. */
	export interface City {
		CityName?: string;
	}

	/** Information about a city. */
	export interface CityFormProperties {
		CityName: FormControl<string | null | undefined>,
	}
	export function CreateCityFormGroup() {
		return new FormGroup<CityFormProperties>({
			CityName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides the latitude and longitude coordinates of a location. */
	export interface GeoLocation {
		Lon?: number | null;
		Lat?: number | null;
	}

	/** Provides the latitude and longitude coordinates of a location. */
	export interface GeoLocationFormProperties {
		Lon: FormControl<number | null | undefined>,
		Lat: FormControl<number | null | undefined>,
	}
	export function CreateGeoLocationFormGroup() {
		return new FormGroup<GeoLocationFormProperties>({
			Lon: new FormControl<number | null | undefined>(undefined),
			Lat: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Provides information about the remote port that was involved in an attempted network connection. */
	export interface ActionRemotePortDetails {
		Port?: number | null;
		PortName?: string;
	}

	/** Provides information about the remote port that was involved in an attempted network connection. */
	export interface ActionRemotePortDetailsFormProperties {
		Port: FormControl<number | null | undefined>,
		PortName: FormControl<string | null | undefined>,
	}
	export function CreateActionRemotePortDetailsFormGroup() {
		return new FormGroup<ActionRemotePortDetailsFormProperties>({
			Port: new FormControl<number | null | undefined>(undefined),
			PortName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** For <code>NetworkConnectionAction</code> and <code>PortProbeDetails</code>, <code>LocalPortDetails</code> provides information about the local port that was involved in the action. */
	export interface ActionLocalPortDetails {
		Port?: number | null;
		PortName?: string;
	}

	/** For <code>NetworkConnectionAction</code> and <code>PortProbeDetails</code>, <code>LocalPortDetails</code> provides information about the local port that was involved in the action. */
	export interface ActionLocalPortDetailsFormProperties {
		Port: FormControl<number | null | undefined>,
		PortName: FormControl<string | null | undefined>,
	}
	export function CreateActionLocalPortDetailsFormGroup() {
		return new FormGroup<ActionLocalPortDetailsFormProperties>({
			Port: new FormControl<number | null | undefined>(undefined),
			PortName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provided if <code>ActionType</code> is <code>AWS_API_CALL</code>. It provides details about the API call that was detected. */
	export interface AwsApiCallAction {
		Api?: string;
		ServiceName?: string;
		CallerType?: string;
		RemoteIpDetails?: ActionRemoteIpDetails;
		DomainDetails?: AwsApiCallActionDomainDetails;
		AffectedResources?: FieldMap;
		FirstSeen?: string;
		LastSeen?: string;
	}

	/** Provided if <code>ActionType</code> is <code>AWS_API_CALL</code>. It provides details about the API call that was detected. */
	export interface AwsApiCallActionFormProperties {
		Api: FormControl<string | null | undefined>,
		ServiceName: FormControl<string | null | undefined>,
		CallerType: FormControl<string | null | undefined>,
		FirstSeen: FormControl<string | null | undefined>,
		LastSeen: FormControl<string | null | undefined>,
	}
	export function CreateAwsApiCallActionFormGroup() {
		return new FormGroup<AwsApiCallActionFormProperties>({
			Api: new FormControl<string | null | undefined>(undefined),
			ServiceName: new FormControl<string | null | undefined>(undefined),
			CallerType: new FormControl<string | null | undefined>(undefined),
			FirstSeen: new FormControl<string | null | undefined>(undefined),
			LastSeen: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provided if <code>CallerType</code> is <code>domain</code>. It provides information about the DNS domain that issued the API call. */
	export interface AwsApiCallActionDomainDetails {
		Domain?: string;
	}

	/** Provided if <code>CallerType</code> is <code>domain</code>. It provides information about the DNS domain that issued the API call. */
	export interface AwsApiCallActionDomainDetailsFormProperties {
		Domain: FormControl<string | null | undefined>,
	}
	export function CreateAwsApiCallActionDomainDetailsFormGroup() {
		return new FormGroup<AwsApiCallActionDomainDetailsFormProperties>({
			Domain: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provided if <code>ActionType</code> is <code>DNS_REQUEST</code>. It provides details about the DNS request that was detected. */
	export interface DnsRequestAction {
		Domain?: string;
		Protocol?: string;
		Blocked?: boolean | null;
	}

	/** Provided if <code>ActionType</code> is <code>DNS_REQUEST</code>. It provides details about the DNS request that was detected. */
	export interface DnsRequestActionFormProperties {
		Domain: FormControl<string | null | undefined>,
		Protocol: FormControl<string | null | undefined>,
		Blocked: FormControl<boolean | null | undefined>,
	}
	export function CreateDnsRequestActionFormGroup() {
		return new FormGroup<DnsRequestActionFormProperties>({
			Domain: new FormControl<string | null | undefined>(undefined),
			Protocol: new FormControl<string | null | undefined>(undefined),
			Blocked: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Provided if <code>ActionType</code> is <code>PORT_PROBE</code>. It provides details about the attempted port probe that was detected. */
	export interface PortProbeAction {
		PortProbeDetails?: Array<PortProbeDetail>;
		Blocked?: boolean | null;
	}

	/** Provided if <code>ActionType</code> is <code>PORT_PROBE</code>. It provides details about the attempted port probe that was detected. */
	export interface PortProbeActionFormProperties {
		Blocked: FormControl<boolean | null | undefined>,
	}
	export function CreatePortProbeActionFormGroup() {
		return new FormGroup<PortProbeActionFormProperties>({
			Blocked: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** A port scan that was part of the port probe. For each scan, PortProbeDetails provides information about the local IP address and port that were scanned, and the remote IP address that the scan originated from. */
	export interface PortProbeDetail {
		LocalPortDetails?: ActionLocalPortDetails;
		LocalIpDetails?: ActionLocalIpDetails;
		RemoteIpDetails?: ActionRemoteIpDetails;
	}

	/** A port scan that was part of the port probe. For each scan, PortProbeDetails provides information about the local IP address and port that were scanned, and the remote IP address that the scan originated from. */
	export interface PortProbeDetailFormProperties {
	}
	export function CreatePortProbeDetailFormGroup() {
		return new FormGroup<PortProbeDetailFormProperties>({
		});

	}


	/** Provides information about the IP address where the scanned port is located. */
	export interface ActionLocalIpDetails {
		IpAddressV4?: string;
	}

	/** Provides information about the IP address where the scanned port is located. */
	export interface ActionLocalIpDetailsFormProperties {
		IpAddressV4: FormControl<string | null | undefined>,
	}
	export function CreateActionLocalIpDetailsFormGroup() {
		return new FormGroup<ActionLocalIpDetailsFormProperties>({
			IpAddressV4: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** In a <code>BatchImportFindings</code> request, finding providers use <code>FindingProviderFields</code> to provide and update values for confidence, criticality, related findings, severity, and types. */
	export interface FindingProviderFields {
		Confidence?: number | null;
		Criticality?: number | null;
		RelatedFindings?: Array<RelatedFinding>;
		Severity?: FindingProviderSeverity;
		Types?: Array<string>;
	}

	/** In a <code>BatchImportFindings</code> request, finding providers use <code>FindingProviderFields</code> to provide and update values for confidence, criticality, related findings, severity, and types. */
	export interface FindingProviderFieldsFormProperties {
		Confidence: FormControl<number | null | undefined>,
		Criticality: FormControl<number | null | undefined>,
	}
	export function CreateFindingProviderFieldsFormGroup() {
		return new FormGroup<FindingProviderFieldsFormProperties>({
			Confidence: new FormControl<number | null | undefined>(undefined),
			Criticality: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The severity assigned to the finding by the finding provider. */
	export interface FindingProviderSeverity {
		Label?: SeverityLabel;
		Original?: string;
	}

	/** The severity assigned to the finding by the finding provider. */
	export interface FindingProviderSeverityFormProperties {
		Label: FormControl<SeverityLabel | null | undefined>,
		Original: FormControl<string | null | undefined>,
	}
	export function CreateFindingProviderSeverityFormGroup() {
		return new FormGroup<FindingProviderSeverityFormProperties>({
			Label: new FormControl<SeverityLabel | null | undefined>(undefined),
			Original: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BatchUpdateAutomationRulesResponse {
		ProcessedAutomationRules?: Array<string>;
		UnprocessedAutomationRules?: Array<UnprocessedAutomationRule>;
	}
	export interface BatchUpdateAutomationRulesResponseFormProperties {
	}
	export function CreateBatchUpdateAutomationRulesResponseFormGroup() {
		return new FormGroup<BatchUpdateAutomationRulesResponseFormProperties>({
		});

	}


	/**  Specifies the parameters to update in an existing automation rule.  */
	export interface UpdateAutomationRulesRequestItem {

		/** Required */
		RuleArn: string;
		RuleStatus?: RuleStatus;
		RuleOrder?: number | null;
		Description?: string;
		RuleName?: string;
		IsTerminal?: boolean | null;
		Criteria?: AutomationRulesFindingFilters;
		Actions?: Array<AutomationRulesAction>;
	}

	/**  Specifies the parameters to update in an existing automation rule.  */
	export interface UpdateAutomationRulesRequestItemFormProperties {

		/** Required */
		RuleArn: FormControl<string | null | undefined>,
		RuleStatus: FormControl<RuleStatus | null | undefined>,
		RuleOrder: FormControl<number | null | undefined>,
		Description: FormControl<string | null | undefined>,
		RuleName: FormControl<string | null | undefined>,
		IsTerminal: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateAutomationRulesRequestItemFormGroup() {
		return new FormGroup<UpdateAutomationRulesRequestItemFormProperties>({
			RuleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RuleStatus: new FormControl<RuleStatus | null | undefined>(undefined),
			RuleOrder: new FormControl<number | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			RuleName: new FormControl<string | null | undefined>(undefined),
			IsTerminal: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface BatchUpdateFindingsResponse {

		/** Required */
		ProcessedFindings: Array<AwsSecurityFindingIdentifier>;

		/** Required */
		UnprocessedFindings: Array<BatchUpdateFindingsUnprocessedFinding>;
	}
	export interface BatchUpdateFindingsResponseFormProperties {
	}
	export function CreateBatchUpdateFindingsResponseFormGroup() {
		return new FormGroup<BatchUpdateFindingsResponseFormProperties>({
		});

	}


	/** Identifies which finding to get the finding history for. */
	export interface AwsSecurityFindingIdentifier {

		/** Required */
		Id: string;

		/** Required */
		ProductArn: string;
	}

	/** Identifies which finding to get the finding history for. */
	export interface AwsSecurityFindingIdentifierFormProperties {

		/** Required */
		Id: FormControl<string | null | undefined>,

		/** Required */
		ProductArn: FormControl<string | null | undefined>,
	}
	export function CreateAwsSecurityFindingIdentifierFormGroup() {
		return new FormGroup<AwsSecurityFindingIdentifierFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ProductArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A finding from a <code>BatchUpdateFindings</code> request that Security Hub was unable to update. */
	export interface BatchUpdateFindingsUnprocessedFinding {

		/** Required */
		FindingIdentifier: AwsSecurityFindingIdentifier;

		/** Required */
		ErrorCode: string;

		/** Required */
		ErrorMessage: string;
	}

	/** A finding from a <code>BatchUpdateFindings</code> request that Security Hub was unable to update. */
	export interface BatchUpdateFindingsUnprocessedFindingFormProperties {

		/** Required */
		ErrorCode: FormControl<string | null | undefined>,

		/** Required */
		ErrorMessage: FormControl<string | null | undefined>,
	}
	export function CreateBatchUpdateFindingsUnprocessedFindingFormGroup() {
		return new FormGroup<BatchUpdateFindingsUnprocessedFindingFormProperties>({
			ErrorCode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ErrorMessage: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface BatchUpdateStandardsControlAssociationsResponse {
		UnprocessedAssociationUpdates?: Array<UnprocessedStandardsControlAssociationUpdate>;
	}
	export interface BatchUpdateStandardsControlAssociationsResponseFormProperties {
	}
	export function CreateBatchUpdateStandardsControlAssociationsResponseFormGroup() {
		return new FormGroup<BatchUpdateStandardsControlAssociationsResponseFormProperties>({
		});

	}


	/** Provides details about which control's enablement status could not be updated in a specified standard when calling the <a href="https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_BatchUpdateStandardsControlAssociations.html">BatchUpdateStandardsControlAssociations</a> API. This parameter also provides details about why the request was unprocessed.  */
	export interface UnprocessedStandardsControlAssociationUpdate {

		/** Required */
		StandardsControlAssociationUpdate: StandardsControlAssociationUpdate;

		/** Required */
		ErrorCode: UnprocessedErrorCode;
		ErrorReason?: string;
	}

	/** Provides details about which control's enablement status could not be updated in a specified standard when calling the <a href="https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_BatchUpdateStandardsControlAssociations.html">BatchUpdateStandardsControlAssociations</a> API. This parameter also provides details about why the request was unprocessed.  */
	export interface UnprocessedStandardsControlAssociationUpdateFormProperties {

		/** Required */
		ErrorCode: FormControl<UnprocessedErrorCode | null | undefined>,
		ErrorReason: FormControl<string | null | undefined>,
	}
	export function CreateUnprocessedStandardsControlAssociationUpdateFormGroup() {
		return new FormGroup<UnprocessedStandardsControlAssociationUpdateFormProperties>({
			ErrorCode: new FormControl<UnprocessedErrorCode | null | undefined>(undefined, [Validators.required]),
			ErrorReason: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An array of requested updates to the enablement status of controls in specified standards. The objects in the array include a security control ID, the Amazon Resource Name (ARN) of the standard, the requested enablement status, and the reason for updating the enablement status. */
	export interface StandardsControlAssociationUpdate {

		/** Required */
		StandardsArn: string;

		/** Required */
		SecurityControlId: string;

		/** Required */
		AssociationStatus: RuleStatus;
		UpdatedReason?: string;
	}

	/** An array of requested updates to the enablement status of controls in specified standards. The objects in the array include a security control ID, the Amazon Resource Name (ARN) of the standard, the requested enablement status, and the reason for updating the enablement status. */
	export interface StandardsControlAssociationUpdateFormProperties {

		/** Required */
		StandardsArn: FormControl<string | null | undefined>,

		/** Required */
		SecurityControlId: FormControl<string | null | undefined>,

		/** Required */
		AssociationStatus: FormControl<RuleStatus | null | undefined>,
		UpdatedReason: FormControl<string | null | undefined>,
	}
	export function CreateStandardsControlAssociationUpdateFormGroup() {
		return new FormGroup<StandardsControlAssociationUpdateFormProperties>({
			StandardsArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SecurityControlId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			AssociationStatus: new FormControl<RuleStatus | null | undefined>(undefined, [Validators.required]),
			UpdatedReason: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateActionTargetResponse {

		/** Required */
		ActionTargetArn: string;
	}
	export interface CreateActionTargetResponseFormProperties {

		/** Required */
		ActionTargetArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateActionTargetResponseFormGroup() {
		return new FormGroup<CreateActionTargetResponseFormProperties>({
			ActionTargetArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ResourceConflictException {
	}
	export interface ResourceConflictExceptionFormProperties {
	}
	export function CreateResourceConflictExceptionFormGroup() {
		return new FormGroup<ResourceConflictExceptionFormProperties>({
		});

	}

	export interface CreateAutomationRuleResponse {
		RuleArn?: string;
	}
	export interface CreateAutomationRuleResponseFormProperties {
		RuleArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateAutomationRuleResponseFormGroup() {
		return new FormGroup<CreateAutomationRuleResponseFormProperties>({
			RuleArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateFindingAggregatorResponse {
		FindingAggregatorArn?: string;
		FindingAggregationRegion?: string;
		RegionLinkingMode?: string;
		Regions?: Array<string>;
	}
	export interface CreateFindingAggregatorResponseFormProperties {
		FindingAggregatorArn: FormControl<string | null | undefined>,
		FindingAggregationRegion: FormControl<string | null | undefined>,
		RegionLinkingMode: FormControl<string | null | undefined>,
	}
	export function CreateCreateFindingAggregatorResponseFormGroup() {
		return new FormGroup<CreateFindingAggregatorResponseFormProperties>({
			FindingAggregatorArn: new FormControl<string | null | undefined>(undefined),
			FindingAggregationRegion: new FormControl<string | null | undefined>(undefined),
			RegionLinkingMode: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateInsightResponse {

		/** Required */
		InsightArn: string;
	}
	export interface CreateInsightResponseFormProperties {

		/** Required */
		InsightArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateInsightResponseFormGroup() {
		return new FormGroup<CreateInsightResponseFormProperties>({
			InsightArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The IP filter for querying findings. */
	export interface IpFilter {
		Cidr?: string;
	}

	/** The IP filter for querying findings. */
	export interface IpFilterFormProperties {
		Cidr: FormControl<string | null | undefined>,
	}
	export function CreateIpFilterFormGroup() {
		return new FormGroup<IpFilterFormProperties>({
			Cidr: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A keyword filter for querying findings. */
	export interface KeywordFilter {
		Value?: string;
	}

	/** A keyword filter for querying findings. */
	export interface KeywordFilterFormProperties {
		Value: FormControl<string | null | undefined>,
	}
	export function CreateKeywordFilterFormGroup() {
		return new FormGroup<KeywordFilterFormProperties>({
			Value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Boolean filter for querying findings. */
	export interface BooleanFilter {
		Value?: boolean | null;
	}

	/** Boolean filter for querying findings. */
	export interface BooleanFilterFormProperties {
		Value: FormControl<boolean | null | undefined>,
	}
	export function CreateBooleanFilterFormGroup() {
		return new FormGroup<BooleanFilterFormProperties>({
			Value: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface CreateMembersResponse {
		UnprocessedAccounts?: Array<Result>;
	}
	export interface CreateMembersResponseFormProperties {
	}
	export function CreateCreateMembersResponseFormGroup() {
		return new FormGroup<CreateMembersResponseFormProperties>({
		});

	}


	/** Details about the account that was not processed. */
	export interface Result {
		AccountId?: string;
		ProcessingResult?: string;
	}

	/** Details about the account that was not processed. */
	export interface ResultFormProperties {
		AccountId: FormControl<string | null | undefined>,
		ProcessingResult: FormControl<string | null | undefined>,
	}
	export function CreateResultFormGroup() {
		return new FormGroup<ResultFormProperties>({
			AccountId: new FormControl<string | null | undefined>(undefined),
			ProcessingResult: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The details of an Amazon Web Services account. */
	export interface AccountDetails {

		/** Required */
		AccountId: string;
		Email?: string;
	}

	/** The details of an Amazon Web Services account. */
	export interface AccountDetailsFormProperties {

		/** Required */
		AccountId: FormControl<string | null | undefined>,
		Email: FormControl<string | null | undefined>,
	}
	export function CreateAccountDetailsFormGroup() {
		return new FormGroup<AccountDetailsFormProperties>({
			AccountId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Email: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeclineInvitationsResponse {
		UnprocessedAccounts?: Array<Result>;
	}
	export interface DeclineInvitationsResponseFormProperties {
	}
	export function CreateDeclineInvitationsResponseFormGroup() {
		return new FormGroup<DeclineInvitationsResponseFormProperties>({
		});

	}

	export interface DeleteActionTargetResponse {

		/** Required */
		ActionTargetArn: string;
	}
	export interface DeleteActionTargetResponseFormProperties {

		/** Required */
		ActionTargetArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteActionTargetResponseFormGroup() {
		return new FormGroup<DeleteActionTargetResponseFormProperties>({
			ActionTargetArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteFindingAggregatorResponse {
	}
	export interface DeleteFindingAggregatorResponseFormProperties {
	}
	export function CreateDeleteFindingAggregatorResponseFormGroup() {
		return new FormGroup<DeleteFindingAggregatorResponseFormProperties>({
		});

	}

	export interface DeleteInsightResponse {

		/** Required */
		InsightArn: string;
	}
	export interface DeleteInsightResponseFormProperties {

		/** Required */
		InsightArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteInsightResponseFormGroup() {
		return new FormGroup<DeleteInsightResponseFormProperties>({
			InsightArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteInvitationsResponse {
		UnprocessedAccounts?: Array<Result>;
	}
	export interface DeleteInvitationsResponseFormProperties {
	}
	export function CreateDeleteInvitationsResponseFormGroup() {
		return new FormGroup<DeleteInvitationsResponseFormProperties>({
		});

	}

	export interface DeleteMembersResponse {
		UnprocessedAccounts?: Array<Result>;
	}
	export interface DeleteMembersResponseFormProperties {
	}
	export function CreateDeleteMembersResponseFormGroup() {
		return new FormGroup<DeleteMembersResponseFormProperties>({
		});

	}

	export interface DescribeActionTargetsResponse {

		/** Required */
		ActionTargets: Array<ActionTarget>;
		NextToken?: string;
	}
	export interface DescribeActionTargetsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeActionTargetsResponseFormGroup() {
		return new FormGroup<DescribeActionTargetsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An <code>ActionTarget</code> object. */
	export interface ActionTarget {

		/** Required */
		ActionTargetArn: string;

		/** Required */
		Name: string;

		/** Required */
		Description: string;
	}

	/** An <code>ActionTarget</code> object. */
	export interface ActionTargetFormProperties {

		/** Required */
		ActionTargetArn: FormControl<string | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		Description: FormControl<string | null | undefined>,
	}
	export function CreateActionTargetFormGroup() {
		return new FormGroup<ActionTargetFormProperties>({
			ActionTargetArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeHubResponse {
		HubArn?: string;
		SubscribedAt?: string;
		AutoEnableControls?: boolean | null;
		ControlFindingGenerator?: ControlFindingGenerator;
	}
	export interface DescribeHubResponseFormProperties {
		HubArn: FormControl<string | null | undefined>,
		SubscribedAt: FormControl<string | null | undefined>,
		AutoEnableControls: FormControl<boolean | null | undefined>,
		ControlFindingGenerator: FormControl<ControlFindingGenerator | null | undefined>,
	}
	export function CreateDescribeHubResponseFormGroup() {
		return new FormGroup<DescribeHubResponseFormProperties>({
			HubArn: new FormControl<string | null | undefined>(undefined),
			SubscribedAt: new FormControl<string | null | undefined>(undefined),
			AutoEnableControls: new FormControl<boolean | null | undefined>(undefined),
			ControlFindingGenerator: new FormControl<ControlFindingGenerator | null | undefined>(undefined),
		});

	}

	export enum ControlFindingGenerator { STANDARD_CONTROL = 'STANDARD_CONTROL', SECURITY_CONTROL = 'SECURITY_CONTROL' }

	export interface DescribeOrganizationConfigurationResponse {
		AutoEnable?: boolean | null;
		MemberAccountLimitReached?: boolean | null;
		AutoEnableStandards?: AutoEnableStandards;
	}
	export interface DescribeOrganizationConfigurationResponseFormProperties {
		AutoEnable: FormControl<boolean | null | undefined>,
		MemberAccountLimitReached: FormControl<boolean | null | undefined>,
		AutoEnableStandards: FormControl<AutoEnableStandards | null | undefined>,
	}
	export function CreateDescribeOrganizationConfigurationResponseFormGroup() {
		return new FormGroup<DescribeOrganizationConfigurationResponseFormProperties>({
			AutoEnable: new FormControl<boolean | null | undefined>(undefined),
			MemberAccountLimitReached: new FormControl<boolean | null | undefined>(undefined),
			AutoEnableStandards: new FormControl<AutoEnableStandards | null | undefined>(undefined),
		});

	}

	export enum AutoEnableStandards { NONE = 'NONE', DEFAULT = 'DEFAULT' }

	export interface DescribeProductsResponse {

		/** Required */
		Products: Array<Product>;
		NextToken?: string;
	}
	export interface DescribeProductsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeProductsResponseFormGroup() {
		return new FormGroup<DescribeProductsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains details about a product. */
	export interface Product {

		/** Required */
		ProductArn: string;
		ProductName?: string;
		CompanyName?: string;
		Description?: string;
		Categories?: Array<string>;
		IntegrationTypes?: Array<IntegrationType>;
		MarketplaceUrl?: string;
		ActivationUrl?: string;
		ProductSubscriptionResourcePolicy?: string;
	}

	/** Contains details about a product. */
	export interface ProductFormProperties {

		/** Required */
		ProductArn: FormControl<string | null | undefined>,
		ProductName: FormControl<string | null | undefined>,
		CompanyName: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		MarketplaceUrl: FormControl<string | null | undefined>,
		ActivationUrl: FormControl<string | null | undefined>,
		ProductSubscriptionResourcePolicy: FormControl<string | null | undefined>,
	}
	export function CreateProductFormGroup() {
		return new FormGroup<ProductFormProperties>({
			ProductArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ProductName: new FormControl<string | null | undefined>(undefined),
			CompanyName: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			MarketplaceUrl: new FormControl<string | null | undefined>(undefined),
			ActivationUrl: new FormControl<string | null | undefined>(undefined),
			ProductSubscriptionResourcePolicy: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum IntegrationType { SEND_FINDINGS_TO_SECURITY_HUB = 'SEND_FINDINGS_TO_SECURITY_HUB', RECEIVE_FINDINGS_FROM_SECURITY_HUB = 'RECEIVE_FINDINGS_FROM_SECURITY_HUB', UPDATE_FINDINGS_IN_SECURITY_HUB = 'UPDATE_FINDINGS_IN_SECURITY_HUB' }

	export interface DescribeStandardsResponse {
		Standards?: Array<Standard>;
		NextToken?: string;
	}
	export interface DescribeStandardsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeStandardsResponseFormGroup() {
		return new FormGroup<DescribeStandardsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides information about a specific security standard. */
	export interface Standard {
		StandardsArn?: string;
		Name?: string;
		Description?: string;
		EnabledByDefault?: boolean | null;
		StandardsManagedBy?: StandardsManagedBy;
	}

	/** Provides information about a specific security standard. */
	export interface StandardFormProperties {
		StandardsArn: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		EnabledByDefault: FormControl<boolean | null | undefined>,
	}
	export function CreateStandardFormGroup() {
		return new FormGroup<StandardFormProperties>({
			StandardsArn: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			EnabledByDefault: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Provides details about the management of a security standard. */
	export interface StandardsManagedBy {
		Company?: string;
		Product?: string;
	}

	/** Provides details about the management of a security standard. */
	export interface StandardsManagedByFormProperties {
		Company: FormControl<string | null | undefined>,
		Product: FormControl<string | null | undefined>,
	}
	export function CreateStandardsManagedByFormGroup() {
		return new FormGroup<StandardsManagedByFormProperties>({
			Company: new FormControl<string | null | undefined>(undefined),
			Product: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeStandardsControlsResponse {
		Controls?: Array<StandardsControl>;
		NextToken?: string;
	}
	export interface DescribeStandardsControlsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeStandardsControlsResponseFormGroup() {
		return new FormGroup<DescribeStandardsControlsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details for an individual security standard control. */
	export interface StandardsControl {
		StandardsControlArn?: string;
		ControlStatus?: RuleStatus;
		DisabledReason?: string;
		ControlStatusUpdatedAt?: Date;
		ControlId?: string;
		Title?: string;
		Description?: string;
		RemediationUrl?: string;
		SeverityRating?: SeverityRating;
		RelatedRequirements?: Array<string>;
	}

	/** Details for an individual security standard control. */
	export interface StandardsControlFormProperties {
		StandardsControlArn: FormControl<string | null | undefined>,
		ControlStatus: FormControl<RuleStatus | null | undefined>,
		DisabledReason: FormControl<string | null | undefined>,
		ControlStatusUpdatedAt: FormControl<Date | null | undefined>,
		ControlId: FormControl<string | null | undefined>,
		Title: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		RemediationUrl: FormControl<string | null | undefined>,
		SeverityRating: FormControl<SeverityRating | null | undefined>,
	}
	export function CreateStandardsControlFormGroup() {
		return new FormGroup<StandardsControlFormProperties>({
			StandardsControlArn: new FormControl<string | null | undefined>(undefined),
			ControlStatus: new FormControl<RuleStatus | null | undefined>(undefined),
			DisabledReason: new FormControl<string | null | undefined>(undefined),
			ControlStatusUpdatedAt: new FormControl<Date | null | undefined>(undefined),
			ControlId: new FormControl<string | null | undefined>(undefined),
			Title: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			RemediationUrl: new FormControl<string | null | undefined>(undefined),
			SeverityRating: new FormControl<SeverityRating | null | undefined>(undefined),
		});

	}

	export interface DisableImportFindingsForProductResponse {
	}
	export interface DisableImportFindingsForProductResponseFormProperties {
	}
	export function CreateDisableImportFindingsForProductResponseFormGroup() {
		return new FormGroup<DisableImportFindingsForProductResponseFormProperties>({
		});

	}

	export interface DisableOrganizationAdminAccountResponse {
	}
	export interface DisableOrganizationAdminAccountResponseFormProperties {
	}
	export function CreateDisableOrganizationAdminAccountResponseFormGroup() {
		return new FormGroup<DisableOrganizationAdminAccountResponseFormProperties>({
		});

	}

	export interface DisableSecurityHubResponse {
	}
	export interface DisableSecurityHubResponseFormProperties {
	}
	export function CreateDisableSecurityHubResponseFormGroup() {
		return new FormGroup<DisableSecurityHubResponseFormProperties>({
		});

	}

	export interface DisassociateFromAdministratorAccountResponse {
	}
	export interface DisassociateFromAdministratorAccountResponseFormProperties {
	}
	export function CreateDisassociateFromAdministratorAccountResponseFormGroup() {
		return new FormGroup<DisassociateFromAdministratorAccountResponseFormProperties>({
		});

	}

	export interface DisassociateFromMasterAccountResponse {
	}
	export interface DisassociateFromMasterAccountResponseFormProperties {
	}
	export function CreateDisassociateFromMasterAccountResponseFormGroup() {
		return new FormGroup<DisassociateFromMasterAccountResponseFormProperties>({
		});

	}

	export interface DisassociateMembersResponse {
	}
	export interface DisassociateMembersResponseFormProperties {
	}
	export function CreateDisassociateMembersResponseFormGroup() {
		return new FormGroup<DisassociateMembersResponseFormProperties>({
		});

	}

	export interface EnableImportFindingsForProductResponse {
		ProductSubscriptionArn?: string;
	}
	export interface EnableImportFindingsForProductResponseFormProperties {
		ProductSubscriptionArn: FormControl<string | null | undefined>,
	}
	export function CreateEnableImportFindingsForProductResponseFormGroup() {
		return new FormGroup<EnableImportFindingsForProductResponseFormProperties>({
			ProductSubscriptionArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface EnableOrganizationAdminAccountResponse {
	}
	export interface EnableOrganizationAdminAccountResponseFormProperties {
	}
	export function CreateEnableOrganizationAdminAccountResponseFormGroup() {
		return new FormGroup<EnableOrganizationAdminAccountResponseFormProperties>({
		});

	}

	export interface EnableSecurityHubResponse {
	}
	export interface EnableSecurityHubResponseFormProperties {
	}
	export function CreateEnableSecurityHubResponseFormGroup() {
		return new FormGroup<EnableSecurityHubResponseFormProperties>({
		});

	}

	export interface GetAdministratorAccountResponse {

		/** Details about an invitation. */
		Administrator?: Invitation;
	}
	export interface GetAdministratorAccountResponseFormProperties {
	}
	export function CreateGetAdministratorAccountResponseFormGroup() {
		return new FormGroup<GetAdministratorAccountResponseFormProperties>({
		});

	}


	/** Details about an invitation. */
	export interface Invitation {
		AccountId?: string;
		InvitationId?: string;
		InvitedAt?: Date;
		MemberStatus?: string;
	}

	/** Details about an invitation. */
	export interface InvitationFormProperties {
		AccountId: FormControl<string | null | undefined>,
		InvitationId: FormControl<string | null | undefined>,
		InvitedAt: FormControl<Date | null | undefined>,
		MemberStatus: FormControl<string | null | undefined>,
	}
	export function CreateInvitationFormGroup() {
		return new FormGroup<InvitationFormProperties>({
			AccountId: new FormControl<string | null | undefined>(undefined),
			InvitationId: new FormControl<string | null | undefined>(undefined),
			InvitedAt: new FormControl<Date | null | undefined>(undefined),
			MemberStatus: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetEnabledStandardsResponse {
		StandardsSubscriptions?: Array<StandardsSubscription>;
		NextToken?: string;
	}
	export interface GetEnabledStandardsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetEnabledStandardsResponseFormGroup() {
		return new FormGroup<GetEnabledStandardsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetFindingAggregatorResponse {
		FindingAggregatorArn?: string;
		FindingAggregationRegion?: string;
		RegionLinkingMode?: string;
		Regions?: Array<string>;
	}
	export interface GetFindingAggregatorResponseFormProperties {
		FindingAggregatorArn: FormControl<string | null | undefined>,
		FindingAggregationRegion: FormControl<string | null | undefined>,
		RegionLinkingMode: FormControl<string | null | undefined>,
	}
	export function CreateGetFindingAggregatorResponseFormGroup() {
		return new FormGroup<GetFindingAggregatorResponseFormProperties>({
			FindingAggregatorArn: new FormControl<string | null | undefined>(undefined),
			FindingAggregationRegion: new FormControl<string | null | undefined>(undefined),
			RegionLinkingMode: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetFindingHistoryResponse {
		Records?: Array<FindingHistoryRecord>;
		NextToken?: string;
	}
	export interface GetFindingHistoryResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetFindingHistoryResponseFormGroup() {
		return new FormGroup<GetFindingHistoryResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  A list of events that changed the specified finding during the specified time period. Each record represents a single finding change event.  */
	export interface FindingHistoryRecord {

		/** Identifies which finding to get the finding history for. */
		FindingIdentifier?: AwsSecurityFindingIdentifier;
		UpdateTime?: Date;
		FindingCreated?: boolean | null;
		UpdateSource?: FindingHistoryUpdateSource;
		Updates?: Array<FindingHistoryUpdate>;
		NextToken?: string;
	}

	/**  A list of events that changed the specified finding during the specified time period. Each record represents a single finding change event.  */
	export interface FindingHistoryRecordFormProperties {
		UpdateTime: FormControl<Date | null | undefined>,
		FindingCreated: FormControl<boolean | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateFindingHistoryRecordFormGroup() {
		return new FormGroup<FindingHistoryRecordFormProperties>({
			UpdateTime: new FormControl<Date | null | undefined>(undefined),
			FindingCreated: new FormControl<boolean | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  Identifies the source of the finding change event.  */
	export interface FindingHistoryUpdateSource {
		Type?: FindingHistoryUpdateSourceType;
		Identity?: string;
	}

	/**  Identifies the source of the finding change event.  */
	export interface FindingHistoryUpdateSourceFormProperties {
		Type: FormControl<FindingHistoryUpdateSourceType | null | undefined>,
		Identity: FormControl<string | null | undefined>,
	}
	export function CreateFindingHistoryUpdateSourceFormGroup() {
		return new FormGroup<FindingHistoryUpdateSourceFormProperties>({
			Type: new FormControl<FindingHistoryUpdateSourceType | null | undefined>(undefined),
			Identity: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum FindingHistoryUpdateSourceType { BATCH_UPDATE_FINDINGS = 'BATCH_UPDATE_FINDINGS', BATCH_IMPORT_FINDINGS = 'BATCH_IMPORT_FINDINGS' }


	/**  An array of objects that provides details about a change to a finding, including the Amazon Web Services Security Finding Format (ASFF) field that changed, the value of the field before the change, and the value of the field after the change.  */
	export interface FindingHistoryUpdate {
		UpdatedField?: string;
		OldValue?: string;
		NewValue?: string;
	}

	/**  An array of objects that provides details about a change to a finding, including the Amazon Web Services Security Finding Format (ASFF) field that changed, the value of the field before the change, and the value of the field after the change.  */
	export interface FindingHistoryUpdateFormProperties {
		UpdatedField: FormControl<string | null | undefined>,
		OldValue: FormControl<string | null | undefined>,
		NewValue: FormControl<string | null | undefined>,
	}
	export function CreateFindingHistoryUpdateFormGroup() {
		return new FormGroup<FindingHistoryUpdateFormProperties>({
			UpdatedField: new FormControl<string | null | undefined>(undefined),
			OldValue: new FormControl<string | null | undefined>(undefined),
			NewValue: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetFindingsResponse {

		/** Required */
		Findings: Array<AwsSecurityFinding>;
		NextToken?: string;
	}
	export interface GetFindingsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetFindingsResponseFormGroup() {
		return new FormGroup<GetFindingsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A collection of finding attributes used to sort findings. */
	export interface SortCriterion {
		Field?: string;
		SortOrder?: SortOrder;
	}

	/** A collection of finding attributes used to sort findings. */
	export interface SortCriterionFormProperties {
		Field: FormControl<string | null | undefined>,
		SortOrder: FormControl<SortOrder | null | undefined>,
	}
	export function CreateSortCriterionFormGroup() {
		return new FormGroup<SortCriterionFormProperties>({
			Field: new FormControl<string | null | undefined>(undefined),
			SortOrder: new FormControl<SortOrder | null | undefined>(undefined),
		});

	}

	export enum SortOrder { asc = 'asc', desc = 'desc' }

	export interface GetInsightResultsResponse {

		/** Required */
		InsightResults: InsightResults;
	}
	export interface GetInsightResultsResponseFormProperties {
	}
	export function CreateGetInsightResultsResponseFormGroup() {
		return new FormGroup<GetInsightResultsResponseFormProperties>({
		});

	}


	/** The insight results returned by the <code>GetInsightResults</code> operation. */
	export interface InsightResults {

		/** Required */
		InsightArn: string;

		/** Required */
		GroupByAttribute: string;

		/** Required */
		ResultValues: Array<InsightResultValue>;
	}

	/** The insight results returned by the <code>GetInsightResults</code> operation. */
	export interface InsightResultsFormProperties {

		/** Required */
		InsightArn: FormControl<string | null | undefined>,

		/** Required */
		GroupByAttribute: FormControl<string | null | undefined>,
	}
	export function CreateInsightResultsFormGroup() {
		return new FormGroup<InsightResultsFormProperties>({
			InsightArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			GroupByAttribute: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The insight result values returned by the <code>GetInsightResults</code> operation. */
	export interface InsightResultValue {

		/** Required */
		GroupByAttributeValue: string;

		/** Required */
		Count: number;
	}

	/** The insight result values returned by the <code>GetInsightResults</code> operation. */
	export interface InsightResultValueFormProperties {

		/** Required */
		GroupByAttributeValue: FormControl<string | null | undefined>,

		/** Required */
		Count: FormControl<number | null | undefined>,
	}
	export function CreateInsightResultValueFormGroup() {
		return new FormGroup<InsightResultValueFormProperties>({
			GroupByAttributeValue: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Count: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetInsightsResponse {

		/** Required */
		Insights: Array<Insight>;
		NextToken?: string;
	}
	export interface GetInsightsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetInsightsResponseFormGroup() {
		return new FormGroup<GetInsightsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information about a Security Hub insight. */
	export interface Insight {

		/** Required */
		InsightArn: string;

		/** Required */
		Name: string;

		/** Required */
		Filters: AwsSecurityFindingFilters;

		/** Required */
		GroupByAttribute: string;
	}

	/** Contains information about a Security Hub insight. */
	export interface InsightFormProperties {

		/** Required */
		InsightArn: FormControl<string | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		GroupByAttribute: FormControl<string | null | undefined>,
	}
	export function CreateInsightFormGroup() {
		return new FormGroup<InsightFormProperties>({
			InsightArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			GroupByAttribute: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p>A collection of attributes that are applied to all active Security Hub-aggregated findings and that result in a subset of findings that are included in this insight.</p> <p>You can filter by up to 10 finding attributes. For each attribute, you can provide up to 20 filter values.</p> */
	export interface AwsSecurityFindingFilters {
		ProductArn?: Array<StringFilter>;
		AwsAccountId?: Array<StringFilter>;
		Id?: Array<StringFilter>;
		GeneratorId?: Array<StringFilter>;
		Region?: Array<StringFilter>;
		Type?: Array<StringFilter>;
		FirstObservedAt?: Array<DateFilter>;
		LastObservedAt?: Array<DateFilter>;
		CreatedAt?: Array<DateFilter>;
		UpdatedAt?: Array<DateFilter>;
		SeverityProduct?: Array<NumberFilter>;
		SeverityNormalized?: Array<NumberFilter>;
		SeverityLabel?: Array<StringFilter>;
		Confidence?: Array<NumberFilter>;
		Criticality?: Array<NumberFilter>;
		Title?: Array<StringFilter>;
		Description?: Array<StringFilter>;
		RecommendationText?: Array<StringFilter>;
		SourceUrl?: Array<StringFilter>;
		ProductFields?: Array<MapFilter>;
		ProductName?: Array<StringFilter>;
		CompanyName?: Array<StringFilter>;
		UserDefinedFields?: Array<MapFilter>;
		MalwareName?: Array<StringFilter>;
		MalwareType?: Array<StringFilter>;
		MalwarePath?: Array<StringFilter>;
		MalwareState?: Array<StringFilter>;
		NetworkDirection?: Array<StringFilter>;
		NetworkProtocol?: Array<StringFilter>;
		NetworkSourceIpV4?: Array<IpFilter>;
		NetworkSourceIpV6?: Array<IpFilter>;
		NetworkSourcePort?: Array<NumberFilter>;
		NetworkSourceDomain?: Array<StringFilter>;
		NetworkSourceMac?: Array<StringFilter>;
		NetworkDestinationIpV4?: Array<IpFilter>;
		NetworkDestinationIpV6?: Array<IpFilter>;
		NetworkDestinationPort?: Array<NumberFilter>;
		NetworkDestinationDomain?: Array<StringFilter>;
		ProcessName?: Array<StringFilter>;
		ProcessPath?: Array<StringFilter>;
		ProcessPid?: Array<NumberFilter>;
		ProcessParentPid?: Array<NumberFilter>;
		ProcessLaunchedAt?: Array<DateFilter>;
		ProcessTerminatedAt?: Array<DateFilter>;
		ThreatIntelIndicatorType?: Array<StringFilter>;
		ThreatIntelIndicatorValue?: Array<StringFilter>;
		ThreatIntelIndicatorCategory?: Array<StringFilter>;
		ThreatIntelIndicatorLastObservedAt?: Array<DateFilter>;
		ThreatIntelIndicatorSource?: Array<StringFilter>;
		ThreatIntelIndicatorSourceUrl?: Array<StringFilter>;
		ResourceType?: Array<StringFilter>;
		ResourceId?: Array<StringFilter>;
		ResourcePartition?: Array<StringFilter>;
		ResourceRegion?: Array<StringFilter>;
		ResourceTags?: Array<MapFilter>;
		ResourceAwsEc2InstanceType?: Array<StringFilter>;
		ResourceAwsEc2InstanceImageId?: Array<StringFilter>;
		ResourceAwsEc2InstanceIpV4Addresses?: Array<IpFilter>;
		ResourceAwsEc2InstanceIpV6Addresses?: Array<IpFilter>;
		ResourceAwsEc2InstanceKeyName?: Array<StringFilter>;
		ResourceAwsEc2InstanceIamInstanceProfileArn?: Array<StringFilter>;
		ResourceAwsEc2InstanceVpcId?: Array<StringFilter>;
		ResourceAwsEc2InstanceSubnetId?: Array<StringFilter>;
		ResourceAwsEc2InstanceLaunchedAt?: Array<DateFilter>;
		ResourceAwsS3BucketOwnerId?: Array<StringFilter>;
		ResourceAwsS3BucketOwnerName?: Array<StringFilter>;
		ResourceAwsIamAccessKeyUserName?: Array<StringFilter>;
		ResourceAwsIamAccessKeyPrincipalName?: Array<StringFilter>;
		ResourceAwsIamAccessKeyStatus?: Array<StringFilter>;
		ResourceAwsIamAccessKeyCreatedAt?: Array<DateFilter>;
		ResourceAwsIamUserUserName?: Array<StringFilter>;
		ResourceContainerName?: Array<StringFilter>;
		ResourceContainerImageId?: Array<StringFilter>;
		ResourceContainerImageName?: Array<StringFilter>;
		ResourceContainerLaunchedAt?: Array<DateFilter>;
		ResourceDetailsOther?: Array<MapFilter>;
		ComplianceStatus?: Array<StringFilter>;
		VerificationState?: Array<StringFilter>;
		WorkflowState?: Array<StringFilter>;
		WorkflowStatus?: Array<StringFilter>;
		RecordState?: Array<StringFilter>;
		RelatedFindingsProductArn?: Array<StringFilter>;
		RelatedFindingsId?: Array<StringFilter>;
		NoteText?: Array<StringFilter>;
		NoteUpdatedAt?: Array<DateFilter>;
		NoteUpdatedBy?: Array<StringFilter>;
		Keyword?: Array<KeywordFilter>;
		FindingProviderFieldsConfidence?: Array<NumberFilter>;
		FindingProviderFieldsCriticality?: Array<NumberFilter>;
		FindingProviderFieldsRelatedFindingsId?: Array<StringFilter>;
		FindingProviderFieldsRelatedFindingsProductArn?: Array<StringFilter>;
		FindingProviderFieldsSeverityLabel?: Array<StringFilter>;
		FindingProviderFieldsSeverityOriginal?: Array<StringFilter>;
		FindingProviderFieldsTypes?: Array<StringFilter>;
		Sample?: Array<BooleanFilter>;
		ComplianceSecurityControlId?: Array<StringFilter>;
		ComplianceAssociatedStandardsId?: Array<StringFilter>;
	}

	/** <p>A collection of attributes that are applied to all active Security Hub-aggregated findings and that result in a subset of findings that are included in this insight.</p> <p>You can filter by up to 10 finding attributes. For each attribute, you can provide up to 20 filter values.</p> */
	export interface AwsSecurityFindingFiltersFormProperties {
	}
	export function CreateAwsSecurityFindingFiltersFormGroup() {
		return new FormGroup<AwsSecurityFindingFiltersFormProperties>({
		});

	}

	export interface GetInvitationsCountResponse {
		InvitationsCount?: number | null;
	}
	export interface GetInvitationsCountResponseFormProperties {
		InvitationsCount: FormControl<number | null | undefined>,
	}
	export function CreateGetInvitationsCountResponseFormGroup() {
		return new FormGroup<GetInvitationsCountResponseFormProperties>({
			InvitationsCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetMasterAccountResponse {
		Master?: Invitation;
	}
	export interface GetMasterAccountResponseFormProperties {
	}
	export function CreateGetMasterAccountResponseFormGroup() {
		return new FormGroup<GetMasterAccountResponseFormProperties>({
		});

	}

	export interface GetMembersResponse {
		Members?: Array<Member>;
		UnprocessedAccounts?: Array<Result>;
	}
	export interface GetMembersResponseFormProperties {
	}
	export function CreateGetMembersResponseFormGroup() {
		return new FormGroup<GetMembersResponseFormProperties>({
		});

	}


	/** The details about a member account. */
	export interface Member {
		AccountId?: string;
		Email?: string;
		MasterId?: string;
		AdministratorId?: string;
		MemberStatus?: string;
		InvitedAt?: Date;
		UpdatedAt?: Date;
	}

	/** The details about a member account. */
	export interface MemberFormProperties {
		AccountId: FormControl<string | null | undefined>,
		Email: FormControl<string | null | undefined>,
		MasterId: FormControl<string | null | undefined>,
		AdministratorId: FormControl<string | null | undefined>,
		MemberStatus: FormControl<string | null | undefined>,
		InvitedAt: FormControl<Date | null | undefined>,
		UpdatedAt: FormControl<Date | null | undefined>,
	}
	export function CreateMemberFormGroup() {
		return new FormGroup<MemberFormProperties>({
			AccountId: new FormControl<string | null | undefined>(undefined),
			Email: new FormControl<string | null | undefined>(undefined),
			MasterId: new FormControl<string | null | undefined>(undefined),
			AdministratorId: new FormControl<string | null | undefined>(undefined),
			MemberStatus: new FormControl<string | null | undefined>(undefined),
			InvitedAt: new FormControl<Date | null | undefined>(undefined),
			UpdatedAt: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface InviteMembersResponse {
		UnprocessedAccounts?: Array<Result>;
	}
	export interface InviteMembersResponseFormProperties {
	}
	export function CreateInviteMembersResponseFormGroup() {
		return new FormGroup<InviteMembersResponseFormProperties>({
		});

	}

	export interface ListAutomationRulesResponse {
		AutomationRulesMetadata?: Array<AutomationRulesMetadata>;
		NextToken?: string;
	}
	export interface ListAutomationRulesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListAutomationRulesResponseFormGroup() {
		return new FormGroup<ListAutomationRulesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  Metadata for automation rules in the calling account. The response includes rules with a <code>RuleStatus</code> of <code>ENABLED</code> and <code>DISABLED</code>.  */
	export interface AutomationRulesMetadata {
		RuleArn?: string;
		RuleStatus?: RuleStatus;
		RuleOrder?: number | null;
		RuleName?: string;
		Description?: string;
		IsTerminal?: boolean | null;
		CreatedAt?: Date;
		UpdatedAt?: Date;
		CreatedBy?: string;
	}

	/**  Metadata for automation rules in the calling account. The response includes rules with a <code>RuleStatus</code> of <code>ENABLED</code> and <code>DISABLED</code>.  */
	export interface AutomationRulesMetadataFormProperties {
		RuleArn: FormControl<string | null | undefined>,
		RuleStatus: FormControl<RuleStatus | null | undefined>,
		RuleOrder: FormControl<number | null | undefined>,
		RuleName: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		IsTerminal: FormControl<boolean | null | undefined>,
		CreatedAt: FormControl<Date | null | undefined>,
		UpdatedAt: FormControl<Date | null | undefined>,
		CreatedBy: FormControl<string | null | undefined>,
	}
	export function CreateAutomationRulesMetadataFormGroup() {
		return new FormGroup<AutomationRulesMetadataFormProperties>({
			RuleArn: new FormControl<string | null | undefined>(undefined),
			RuleStatus: new FormControl<RuleStatus | null | undefined>(undefined),
			RuleOrder: new FormControl<number | null | undefined>(undefined),
			RuleName: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			IsTerminal: new FormControl<boolean | null | undefined>(undefined),
			CreatedAt: new FormControl<Date | null | undefined>(undefined),
			UpdatedAt: new FormControl<Date | null | undefined>(undefined),
			CreatedBy: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListEnabledProductsForImportResponse {
		ProductSubscriptions?: Array<string>;
		NextToken?: string;
	}
	export interface ListEnabledProductsForImportResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListEnabledProductsForImportResponseFormGroup() {
		return new FormGroup<ListEnabledProductsForImportResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListFindingAggregatorsResponse {
		FindingAggregators?: Array<FindingAggregator>;
		NextToken?: string;
	}
	export interface ListFindingAggregatorsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListFindingAggregatorsResponseFormGroup() {
		return new FormGroup<ListFindingAggregatorsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A finding aggregator. A finding aggregator contains the configuration for finding aggregation. */
	export interface FindingAggregator {
		FindingAggregatorArn?: string;
	}

	/** A finding aggregator. A finding aggregator contains the configuration for finding aggregation. */
	export interface FindingAggregatorFormProperties {
		FindingAggregatorArn: FormControl<string | null | undefined>,
	}
	export function CreateFindingAggregatorFormGroup() {
		return new FormGroup<FindingAggregatorFormProperties>({
			FindingAggregatorArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListInvitationsResponse {
		Invitations?: Array<Invitation>;
		NextToken?: string;
	}
	export interface ListInvitationsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListInvitationsResponseFormGroup() {
		return new FormGroup<ListInvitationsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListMembersResponse {
		Members?: Array<Member>;
		NextToken?: string;
	}
	export interface ListMembersResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListMembersResponseFormGroup() {
		return new FormGroup<ListMembersResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListOrganizationAdminAccountsResponse {
		AdminAccounts?: Array<AdminAccount>;
		NextToken?: string;
	}
	export interface ListOrganizationAdminAccountsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListOrganizationAdminAccountsResponseFormGroup() {
		return new FormGroup<ListOrganizationAdminAccountsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a Security Hub administrator account designated by an organization management account. */
	export interface AdminAccount {
		AccountId?: string;
		Status?: AdminStatus;
	}

	/** Represents a Security Hub administrator account designated by an organization management account. */
	export interface AdminAccountFormProperties {
		AccountId: FormControl<string | null | undefined>,
		Status: FormControl<AdminStatus | null | undefined>,
	}
	export function CreateAdminAccountFormGroup() {
		return new FormGroup<AdminAccountFormProperties>({
			AccountId: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<AdminStatus | null | undefined>(undefined),
		});

	}

	export enum AdminStatus { ENABLED = 'ENABLED', DISABLE_IN_PROGRESS = 'DISABLE_IN_PROGRESS' }

	export interface ListSecurityControlDefinitionsResponse {

		/** Required */
		SecurityControlDefinitions: Array<SecurityControlDefinition>;
		NextToken?: string;
	}
	export interface ListSecurityControlDefinitionsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListSecurityControlDefinitionsResponseFormGroup() {
		return new FormGroup<ListSecurityControlDefinitionsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  Provides metadata for a security control, including its unique standard-agnostic identifier, title, description, severity, availability in Amazon Web Services Regions, and a link to remediation steps.  */
	export interface SecurityControlDefinition {

		/** Required */
		SecurityControlId: string;

		/** Required */
		Title: string;

		/** Required */
		Description: string;

		/** Required */
		RemediationUrl: string;

		/** Required */
		SeverityRating: SeverityRating;

		/** Required */
		CurrentRegionAvailability: RegionAvailabilityStatus;
	}

	/**  Provides metadata for a security control, including its unique standard-agnostic identifier, title, description, severity, availability in Amazon Web Services Regions, and a link to remediation steps.  */
	export interface SecurityControlDefinitionFormProperties {

		/** Required */
		SecurityControlId: FormControl<string | null | undefined>,

		/** Required */
		Title: FormControl<string | null | undefined>,

		/** Required */
		Description: FormControl<string | null | undefined>,

		/** Required */
		RemediationUrl: FormControl<string | null | undefined>,

		/** Required */
		SeverityRating: FormControl<SeverityRating | null | undefined>,

		/** Required */
		CurrentRegionAvailability: FormControl<RegionAvailabilityStatus | null | undefined>,
	}
	export function CreateSecurityControlDefinitionFormGroup() {
		return new FormGroup<SecurityControlDefinitionFormProperties>({
			SecurityControlId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Title: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RemediationUrl: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SeverityRating: new FormControl<SeverityRating | null | undefined>(undefined, [Validators.required]),
			CurrentRegionAvailability: new FormControl<RegionAvailabilityStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum RegionAvailabilityStatus { AVAILABLE = 'AVAILABLE', UNAVAILABLE = 'UNAVAILABLE' }

	export interface ListStandardsControlAssociationsResponse {

		/** Required */
		StandardsControlAssociationSummaries: Array<StandardsControlAssociationSummary>;
		NextToken?: string;
	}
	export interface ListStandardsControlAssociationsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListStandardsControlAssociationsResponseFormGroup() {
		return new FormGroup<ListStandardsControlAssociationsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  An array that provides the enablement status and other details for each control that applies to each enabled standard.  */
	export interface StandardsControlAssociationSummary {

		/** Required */
		StandardsArn: string;

		/** Required */
		SecurityControlId: string;

		/** Required */
		SecurityControlArn: string;

		/** Required */
		AssociationStatus: RuleStatus;
		RelatedRequirements?: Array<string>;
		UpdatedAt?: Date;
		UpdatedReason?: string;
		StandardsControlTitle?: string;
		StandardsControlDescription?: string;
	}

	/**  An array that provides the enablement status and other details for each control that applies to each enabled standard.  */
	export interface StandardsControlAssociationSummaryFormProperties {

		/** Required */
		StandardsArn: FormControl<string | null | undefined>,

		/** Required */
		SecurityControlId: FormControl<string | null | undefined>,

		/** Required */
		SecurityControlArn: FormControl<string | null | undefined>,

		/** Required */
		AssociationStatus: FormControl<RuleStatus | null | undefined>,
		UpdatedAt: FormControl<Date | null | undefined>,
		UpdatedReason: FormControl<string | null | undefined>,
		StandardsControlTitle: FormControl<string | null | undefined>,
		StandardsControlDescription: FormControl<string | null | undefined>,
	}
	export function CreateStandardsControlAssociationSummaryFormGroup() {
		return new FormGroup<StandardsControlAssociationSummaryFormProperties>({
			StandardsArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SecurityControlId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SecurityControlArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			AssociationStatus: new FormControl<RuleStatus | null | undefined>(undefined, [Validators.required]),
			UpdatedAt: new FormControl<Date | null | undefined>(undefined),
			UpdatedReason: new FormControl<string | null | undefined>(undefined),
			StandardsControlTitle: new FormControl<string | null | undefined>(undefined),
			StandardsControlDescription: new FormControl<string | null | undefined>(undefined),
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

	export interface UpdateActionTargetResponse {
	}
	export interface UpdateActionTargetResponseFormProperties {
	}
	export function CreateUpdateActionTargetResponseFormGroup() {
		return new FormGroup<UpdateActionTargetResponseFormProperties>({
		});

	}

	export interface UpdateFindingAggregatorResponse {
		FindingAggregatorArn?: string;
		FindingAggregationRegion?: string;
		RegionLinkingMode?: string;
		Regions?: Array<string>;
	}
	export interface UpdateFindingAggregatorResponseFormProperties {
		FindingAggregatorArn: FormControl<string | null | undefined>,
		FindingAggregationRegion: FormControl<string | null | undefined>,
		RegionLinkingMode: FormControl<string | null | undefined>,
	}
	export function CreateUpdateFindingAggregatorResponseFormGroup() {
		return new FormGroup<UpdateFindingAggregatorResponseFormProperties>({
			FindingAggregatorArn: new FormControl<string | null | undefined>(undefined),
			FindingAggregationRegion: new FormControl<string | null | undefined>(undefined),
			RegionLinkingMode: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateFindingsResponse {
	}
	export interface UpdateFindingsResponseFormProperties {
	}
	export function CreateUpdateFindingsResponseFormGroup() {
		return new FormGroup<UpdateFindingsResponseFormProperties>({
		});

	}

	export interface UpdateInsightResponse {
	}
	export interface UpdateInsightResponseFormProperties {
	}
	export function CreateUpdateInsightResponseFormGroup() {
		return new FormGroup<UpdateInsightResponseFormProperties>({
		});

	}

	export interface UpdateOrganizationConfigurationResponse {
	}
	export interface UpdateOrganizationConfigurationResponseFormProperties {
	}
	export function CreateUpdateOrganizationConfigurationResponseFormGroup() {
		return new FormGroup<UpdateOrganizationConfigurationResponseFormProperties>({
		});

	}

	export interface UpdateSecurityHubConfigurationResponse {
	}
	export interface UpdateSecurityHubConfigurationResponseFormProperties {
	}
	export function CreateUpdateSecurityHubConfigurationResponseFormGroup() {
		return new FormGroup<UpdateSecurityHubConfigurationResponseFormProperties>({
		});

	}

	export interface UpdateStandardsControlResponse {
	}
	export interface UpdateStandardsControlResponseFormProperties {
	}
	export function CreateUpdateStandardsControlResponseFormGroup() {
		return new FormGroup<UpdateStandardsControlResponseFormProperties>({
		});

	}

	export interface AcceptAdministratorInvitationRequest {

		/** Required */
		AdministratorId: string;

		/** Required */
		InvitationId: string;
	}
	export interface AcceptAdministratorInvitationRequestFormProperties {

		/** Required */
		AdministratorId: FormControl<string | null | undefined>,

		/** Required */
		InvitationId: FormControl<string | null | undefined>,
	}
	export function CreateAcceptAdministratorInvitationRequestFormGroup() {
		return new FormGroup<AcceptAdministratorInvitationRequestFormProperties>({
			AdministratorId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			InvitationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AcceptInvitationRequest {

		/** Required */
		MasterId: string;

		/** Required */
		InvitationId: string;
	}
	export interface AcceptInvitationRequestFormProperties {

		/** Required */
		MasterId: FormControl<string | null | undefined>,

		/** Required */
		InvitationId: FormControl<string | null | undefined>,
	}
	export function CreateAcceptInvitationRequestFormGroup() {
		return new FormGroup<AcceptInvitationRequestFormProperties>({
			MasterId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			InvitationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum AssociationStatus { ENABLED = 'ENABLED', DISABLED = 'DISABLED' }

	export interface BatchDeleteAutomationRulesRequest {

		/** Required */
		AutomationRulesArns: Array<string>;
	}
	export interface BatchDeleteAutomationRulesRequestFormProperties {
	}
	export function CreateBatchDeleteAutomationRulesRequestFormGroup() {
		return new FormGroup<BatchDeleteAutomationRulesRequestFormProperties>({
		});

	}

	export interface BatchDisableStandardsRequest {

		/** Required */
		StandardsSubscriptionArns: Array<string>;
	}
	export interface BatchDisableStandardsRequestFormProperties {
	}
	export function CreateBatchDisableStandardsRequestFormGroup() {
		return new FormGroup<BatchDisableStandardsRequestFormProperties>({
		});

	}

	export interface BatchEnableStandardsRequest {

		/** Required */
		StandardsSubscriptionRequests: Array<StandardsSubscriptionRequest>;
	}
	export interface BatchEnableStandardsRequestFormProperties {
	}
	export function CreateBatchEnableStandardsRequestFormGroup() {
		return new FormGroup<BatchEnableStandardsRequestFormProperties>({
		});

	}

	export interface BatchGetAutomationRulesRequest {

		/** Required */
		AutomationRulesArns: Array<string>;
	}
	export interface BatchGetAutomationRulesRequestFormProperties {
	}
	export function CreateBatchGetAutomationRulesRequestFormGroup() {
		return new FormGroup<BatchGetAutomationRulesRequestFormProperties>({
		});

	}

	export interface BatchGetSecurityControlsRequest {

		/** Required */
		SecurityControlIds: Array<string>;
	}
	export interface BatchGetSecurityControlsRequestFormProperties {
	}
	export function CreateBatchGetSecurityControlsRequestFormGroup() {
		return new FormGroup<BatchGetSecurityControlsRequestFormProperties>({
		});

	}

	export interface BatchGetStandardsControlAssociationsRequest {

		/** Required */
		StandardsControlAssociationIds: Array<StandardsControlAssociationId>;
	}
	export interface BatchGetStandardsControlAssociationsRequestFormProperties {
	}
	export function CreateBatchGetStandardsControlAssociationsRequestFormGroup() {
		return new FormGroup<BatchGetStandardsControlAssociationsRequestFormProperties>({
		});

	}

	export interface BatchImportFindingsRequest {

		/** Required */
		Findings: Array<AwsSecurityFinding>;
	}
	export interface BatchImportFindingsRequestFormProperties {
	}
	export function CreateBatchImportFindingsRequestFormGroup() {
		return new FormGroup<BatchImportFindingsRequestFormProperties>({
		});

	}

	export interface BatchUpdateAutomationRulesRequest {

		/** Required */
		UpdateAutomationRulesRequestItems: Array<UpdateAutomationRulesRequestItem>;
	}
	export interface BatchUpdateAutomationRulesRequestFormProperties {
	}
	export function CreateBatchUpdateAutomationRulesRequestFormGroup() {
		return new FormGroup<BatchUpdateAutomationRulesRequestFormProperties>({
		});

	}

	export interface BatchUpdateFindingsRequest {

		/** Required */
		FindingIdentifiers: Array<AwsSecurityFindingIdentifier>;

		/** The updated note. */
		Note?: NoteUpdate;
		Severity?: SeverityUpdate;
		VerificationState?: VerificationState;
		Confidence?: number | null;
		Criticality?: number | null;
		Types?: Array<string>;
		UserDefinedFields?: FieldMap;
		Workflow?: WorkflowUpdate;
		RelatedFindings?: Array<RelatedFinding>;
	}
	export interface BatchUpdateFindingsRequestFormProperties {
		VerificationState: FormControl<VerificationState | null | undefined>,
		Confidence: FormControl<number | null | undefined>,
		Criticality: FormControl<number | null | undefined>,
	}
	export function CreateBatchUpdateFindingsRequestFormGroup() {
		return new FormGroup<BatchUpdateFindingsRequestFormProperties>({
			VerificationState: new FormControl<VerificationState | null | undefined>(undefined),
			Confidence: new FormControl<number | null | undefined>(undefined),
			Criticality: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface BatchUpdateStandardsControlAssociationsRequest {

		/** Required */
		StandardsControlAssociationUpdates: Array<StandardsControlAssociationUpdate>;
	}
	export interface BatchUpdateStandardsControlAssociationsRequestFormProperties {
	}
	export function CreateBatchUpdateStandardsControlAssociationsRequestFormGroup() {
		return new FormGroup<BatchUpdateStandardsControlAssociationsRequestFormProperties>({
		});

	}

	export enum ControlStatus { ENABLED = 'ENABLED', DISABLED = 'DISABLED' }

	export interface CreateActionTargetRequest {

		/** Required */
		Name: string;

		/** Required */
		Description: string;

		/** Required */
		Id: string;
	}
	export interface CreateActionTargetRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		Description: FormControl<string | null | undefined>,

		/** Required */
		Id: FormControl<string | null | undefined>,
	}
	export function CreateCreateActionTargetRequestFormGroup() {
		return new FormGroup<CreateActionTargetRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateAutomationRuleRequest {
		Tags?: TagMap;
		RuleStatus?: RuleStatus;

		/** Required */
		RuleOrder: number;

		/** Required */
		RuleName: string;

		/** Required */
		Description: string;
		IsTerminal?: boolean | null;

		/** Required */
		Criteria: AutomationRulesFindingFilters;

		/** Required */
		Actions: Array<AutomationRulesAction>;
	}
	export interface CreateAutomationRuleRequestFormProperties {
		RuleStatus: FormControl<RuleStatus | null | undefined>,

		/** Required */
		RuleOrder: FormControl<number | null | undefined>,

		/** Required */
		RuleName: FormControl<string | null | undefined>,

		/** Required */
		Description: FormControl<string | null | undefined>,
		IsTerminal: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateAutomationRuleRequestFormGroup() {
		return new FormGroup<CreateAutomationRuleRequestFormProperties>({
			RuleStatus: new FormControl<RuleStatus | null | undefined>(undefined),
			RuleOrder: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			RuleName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			IsTerminal: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface CreateFindingAggregatorRequest {

		/** Required */
		RegionLinkingMode: string;
		Regions?: Array<string>;
	}
	export interface CreateFindingAggregatorRequestFormProperties {

		/** Required */
		RegionLinkingMode: FormControl<string | null | undefined>,
	}
	export function CreateCreateFindingAggregatorRequestFormGroup() {
		return new FormGroup<CreateFindingAggregatorRequestFormProperties>({
			RegionLinkingMode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateInsightRequest {

		/** Required */
		Name: string;

		/** Required */
		Filters: AwsSecurityFindingFilters;

		/** Required */
		GroupByAttribute: string;
	}
	export interface CreateInsightRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		GroupByAttribute: FormControl<string | null | undefined>,
	}
	export function CreateCreateInsightRequestFormGroup() {
		return new FormGroup<CreateInsightRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			GroupByAttribute: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateMembersRequest {

		/** Required */
		AccountDetails: Array<AccountDetails>;
	}
	export interface CreateMembersRequestFormProperties {
	}
	export function CreateCreateMembersRequestFormGroup() {
		return new FormGroup<CreateMembersRequestFormProperties>({
		});

	}

	export interface DeclineInvitationsRequest {

		/** Required */
		AccountIds: Array<string>;
	}
	export interface DeclineInvitationsRequestFormProperties {
	}
	export function CreateDeclineInvitationsRequestFormGroup() {
		return new FormGroup<DeclineInvitationsRequestFormProperties>({
		});

	}

	export interface DeleteActionTargetRequest {
	}
	export interface DeleteActionTargetRequestFormProperties {
	}
	export function CreateDeleteActionTargetRequestFormGroup() {
		return new FormGroup<DeleteActionTargetRequestFormProperties>({
		});

	}

	export interface DeleteFindingAggregatorRequest {
	}
	export interface DeleteFindingAggregatorRequestFormProperties {
	}
	export function CreateDeleteFindingAggregatorRequestFormGroup() {
		return new FormGroup<DeleteFindingAggregatorRequestFormProperties>({
		});

	}

	export interface DeleteInsightRequest {
	}
	export interface DeleteInsightRequestFormProperties {
	}
	export function CreateDeleteInsightRequestFormGroup() {
		return new FormGroup<DeleteInsightRequestFormProperties>({
		});

	}

	export interface DeleteInvitationsRequest {

		/** Required */
		AccountIds: Array<string>;
	}
	export interface DeleteInvitationsRequestFormProperties {
	}
	export function CreateDeleteInvitationsRequestFormGroup() {
		return new FormGroup<DeleteInvitationsRequestFormProperties>({
		});

	}

	export interface DeleteMembersRequest {

		/** Required */
		AccountIds: Array<string>;
	}
	export interface DeleteMembersRequestFormProperties {
	}
	export function CreateDeleteMembersRequestFormGroup() {
		return new FormGroup<DeleteMembersRequestFormProperties>({
		});

	}

	export interface DescribeActionTargetsRequest {
		ActionTargetArns?: Array<string>;
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface DescribeActionTargetsRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateDescribeActionTargetsRequestFormGroup() {
		return new FormGroup<DescribeActionTargetsRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DescribeHubRequest {
	}
	export interface DescribeHubRequestFormProperties {
	}
	export function CreateDescribeHubRequestFormGroup() {
		return new FormGroup<DescribeHubRequestFormProperties>({
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

	export interface DescribeProductsRequest {
	}
	export interface DescribeProductsRequestFormProperties {
	}
	export function CreateDescribeProductsRequestFormGroup() {
		return new FormGroup<DescribeProductsRequestFormProperties>({
		});

	}

	export interface DescribeStandardsControlsRequest {
	}
	export interface DescribeStandardsControlsRequestFormProperties {
	}
	export function CreateDescribeStandardsControlsRequestFormGroup() {
		return new FormGroup<DescribeStandardsControlsRequestFormProperties>({
		});

	}

	export interface DescribeStandardsRequest {
	}
	export interface DescribeStandardsRequestFormProperties {
	}
	export function CreateDescribeStandardsRequestFormGroup() {
		return new FormGroup<DescribeStandardsRequestFormProperties>({
		});

	}

	export interface DisableImportFindingsForProductRequest {
	}
	export interface DisableImportFindingsForProductRequestFormProperties {
	}
	export function CreateDisableImportFindingsForProductRequestFormGroup() {
		return new FormGroup<DisableImportFindingsForProductRequestFormProperties>({
		});

	}

	export interface DisableOrganizationAdminAccountRequest {

		/** Required */
		AdminAccountId: string;
	}
	export interface DisableOrganizationAdminAccountRequestFormProperties {

		/** Required */
		AdminAccountId: FormControl<string | null | undefined>,
	}
	export function CreateDisableOrganizationAdminAccountRequestFormGroup() {
		return new FormGroup<DisableOrganizationAdminAccountRequestFormProperties>({
			AdminAccountId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DisableSecurityHubRequest {
	}
	export interface DisableSecurityHubRequestFormProperties {
	}
	export function CreateDisableSecurityHubRequestFormGroup() {
		return new FormGroup<DisableSecurityHubRequestFormProperties>({
		});

	}

	export interface DisassociateFromAdministratorAccountRequest {
	}
	export interface DisassociateFromAdministratorAccountRequestFormProperties {
	}
	export function CreateDisassociateFromAdministratorAccountRequestFormGroup() {
		return new FormGroup<DisassociateFromAdministratorAccountRequestFormProperties>({
		});

	}

	export interface DisassociateFromMasterAccountRequest {
	}
	export interface DisassociateFromMasterAccountRequestFormProperties {
	}
	export function CreateDisassociateFromMasterAccountRequestFormGroup() {
		return new FormGroup<DisassociateFromMasterAccountRequestFormProperties>({
		});

	}

	export interface DisassociateMembersRequest {

		/** Required */
		AccountIds: Array<string>;
	}
	export interface DisassociateMembersRequestFormProperties {
	}
	export function CreateDisassociateMembersRequestFormGroup() {
		return new FormGroup<DisassociateMembersRequestFormProperties>({
		});

	}

	export interface EnableImportFindingsForProductRequest {

		/** Required */
		ProductArn: string;
	}
	export interface EnableImportFindingsForProductRequestFormProperties {

		/** Required */
		ProductArn: FormControl<string | null | undefined>,
	}
	export function CreateEnableImportFindingsForProductRequestFormGroup() {
		return new FormGroup<EnableImportFindingsForProductRequestFormProperties>({
			ProductArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface EnableOrganizationAdminAccountRequest {

		/** Required */
		AdminAccountId: string;
	}
	export interface EnableOrganizationAdminAccountRequestFormProperties {

		/** Required */
		AdminAccountId: FormControl<string | null | undefined>,
	}
	export function CreateEnableOrganizationAdminAccountRequestFormGroup() {
		return new FormGroup<EnableOrganizationAdminAccountRequestFormProperties>({
			AdminAccountId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface EnableSecurityHubRequest {
		Tags?: TagMap;
		EnableDefaultStandards?: boolean | null;
		ControlFindingGenerator?: ControlFindingGenerator;
	}
	export interface EnableSecurityHubRequestFormProperties {
		EnableDefaultStandards: FormControl<boolean | null | undefined>,
		ControlFindingGenerator: FormControl<ControlFindingGenerator | null | undefined>,
	}
	export function CreateEnableSecurityHubRequestFormGroup() {
		return new FormGroup<EnableSecurityHubRequestFormProperties>({
			EnableDefaultStandards: new FormControl<boolean | null | undefined>(undefined),
			ControlFindingGenerator: new FormControl<ControlFindingGenerator | null | undefined>(undefined),
		});

	}

	export interface GetAdministratorAccountRequest {
	}
	export interface GetAdministratorAccountRequestFormProperties {
	}
	export function CreateGetAdministratorAccountRequestFormGroup() {
		return new FormGroup<GetAdministratorAccountRequestFormProperties>({
		});

	}

	export interface GetEnabledStandardsRequest {
		StandardsSubscriptionArns?: Array<string>;
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface GetEnabledStandardsRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateGetEnabledStandardsRequestFormGroup() {
		return new FormGroup<GetEnabledStandardsRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetFindingAggregatorRequest {
	}
	export interface GetFindingAggregatorRequestFormProperties {
	}
	export function CreateGetFindingAggregatorRequestFormGroup() {
		return new FormGroup<GetFindingAggregatorRequestFormProperties>({
		});

	}

	export interface GetFindingHistoryRequest {

		/**
		 * Identifies which finding to get the finding history for.
		 * Required
		 */
		FindingIdentifier: AwsSecurityFindingIdentifier;
		StartTime?: Date;
		EndTime?: Date;
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface GetFindingHistoryRequestFormProperties {
		StartTime: FormControl<Date | null | undefined>,
		EndTime: FormControl<Date | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateGetFindingHistoryRequestFormGroup() {
		return new FormGroup<GetFindingHistoryRequestFormProperties>({
			StartTime: new FormControl<Date | null | undefined>(undefined),
			EndTime: new FormControl<Date | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetFindingsRequest {
		Filters?: AwsSecurityFindingFilters;
		SortCriteria?: Array<SortCriterion>;
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface GetFindingsRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateGetFindingsRequestFormGroup() {
		return new FormGroup<GetFindingsRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetInsightResultsRequest {
	}
	export interface GetInsightResultsRequestFormProperties {
	}
	export function CreateGetInsightResultsRequestFormGroup() {
		return new FormGroup<GetInsightResultsRequestFormProperties>({
		});

	}

	export interface GetInsightsRequest {
		InsightArns?: Array<string>;
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface GetInsightsRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateGetInsightsRequestFormGroup() {
		return new FormGroup<GetInsightsRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetInvitationsCountRequest {
	}
	export interface GetInvitationsCountRequestFormProperties {
	}
	export function CreateGetInvitationsCountRequestFormGroup() {
		return new FormGroup<GetInvitationsCountRequestFormProperties>({
		});

	}

	export interface GetMasterAccountRequest {
	}
	export interface GetMasterAccountRequestFormProperties {
	}
	export function CreateGetMasterAccountRequestFormGroup() {
		return new FormGroup<GetMasterAccountRequestFormProperties>({
		});

	}

	export interface GetMembersRequest {

		/** Required */
		AccountIds: Array<string>;
	}
	export interface GetMembersRequestFormProperties {
	}
	export function CreateGetMembersRequestFormGroup() {
		return new FormGroup<GetMembersRequestFormProperties>({
		});

	}

	export interface InviteMembersRequest {

		/** Required */
		AccountIds: Array<string>;
	}
	export interface InviteMembersRequestFormProperties {
	}
	export function CreateInviteMembersRequestFormGroup() {
		return new FormGroup<InviteMembersRequestFormProperties>({
		});

	}

	export interface ListAutomationRulesRequest {
	}
	export interface ListAutomationRulesRequestFormProperties {
	}
	export function CreateListAutomationRulesRequestFormGroup() {
		return new FormGroup<ListAutomationRulesRequestFormProperties>({
		});

	}

	export interface ListEnabledProductsForImportRequest {
	}
	export interface ListEnabledProductsForImportRequestFormProperties {
	}
	export function CreateListEnabledProductsForImportRequestFormGroup() {
		return new FormGroup<ListEnabledProductsForImportRequestFormProperties>({
		});

	}

	export interface ListFindingAggregatorsRequest {
	}
	export interface ListFindingAggregatorsRequestFormProperties {
	}
	export function CreateListFindingAggregatorsRequestFormGroup() {
		return new FormGroup<ListFindingAggregatorsRequestFormProperties>({
		});

	}

	export interface ListInvitationsRequest {
	}
	export interface ListInvitationsRequestFormProperties {
	}
	export function CreateListInvitationsRequestFormGroup() {
		return new FormGroup<ListInvitationsRequestFormProperties>({
		});

	}

	export interface ListMembersRequest {
	}
	export interface ListMembersRequestFormProperties {
	}
	export function CreateListMembersRequestFormGroup() {
		return new FormGroup<ListMembersRequestFormProperties>({
		});

	}

	export interface ListOrganizationAdminAccountsRequest {
	}
	export interface ListOrganizationAdminAccountsRequestFormProperties {
	}
	export function CreateListOrganizationAdminAccountsRequestFormGroup() {
		return new FormGroup<ListOrganizationAdminAccountsRequestFormProperties>({
		});

	}

	export interface ListSecurityControlDefinitionsRequest {
	}
	export interface ListSecurityControlDefinitionsRequestFormProperties {
	}
	export function CreateListSecurityControlDefinitionsRequestFormGroup() {
		return new FormGroup<ListSecurityControlDefinitionsRequestFormProperties>({
		});

	}

	export interface ListStandardsControlAssociationsRequest {
	}
	export interface ListStandardsControlAssociationsRequestFormProperties {
	}
	export function CreateListStandardsControlAssociationsRequestFormGroup() {
		return new FormGroup<ListStandardsControlAssociationsRequestFormProperties>({
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

	export interface UpdateActionTargetRequest {
		Name?: string;
		Description?: string;
	}
	export interface UpdateActionTargetRequestFormProperties {
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
	}
	export function CreateUpdateActionTargetRequestFormGroup() {
		return new FormGroup<UpdateActionTargetRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateFindingAggregatorRequest {

		/** Required */
		FindingAggregatorArn: string;

		/** Required */
		RegionLinkingMode: string;
		Regions?: Array<string>;
	}
	export interface UpdateFindingAggregatorRequestFormProperties {

		/** Required */
		FindingAggregatorArn: FormControl<string | null | undefined>,

		/** Required */
		RegionLinkingMode: FormControl<string | null | undefined>,
	}
	export function CreateUpdateFindingAggregatorRequestFormGroup() {
		return new FormGroup<UpdateFindingAggregatorRequestFormProperties>({
			FindingAggregatorArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RegionLinkingMode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateFindingsRequest {

		/** Required */
		Filters: AwsSecurityFindingFilters;
		Note?: NoteUpdate;
		RecordState?: RecordState;
	}
	export interface UpdateFindingsRequestFormProperties {
		RecordState: FormControl<RecordState | null | undefined>,
	}
	export function CreateUpdateFindingsRequestFormGroup() {
		return new FormGroup<UpdateFindingsRequestFormProperties>({
			RecordState: new FormControl<RecordState | null | undefined>(undefined),
		});

	}

	export interface UpdateInsightRequest {
		Name?: string;
		Filters?: AwsSecurityFindingFilters;
		GroupByAttribute?: string;
	}
	export interface UpdateInsightRequestFormProperties {
		Name: FormControl<string | null | undefined>,
		GroupByAttribute: FormControl<string | null | undefined>,
	}
	export function CreateUpdateInsightRequestFormGroup() {
		return new FormGroup<UpdateInsightRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			GroupByAttribute: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateOrganizationConfigurationRequest {

		/** Required */
		AutoEnable: boolean;
		AutoEnableStandards?: AutoEnableStandards;
	}
	export interface UpdateOrganizationConfigurationRequestFormProperties {

		/** Required */
		AutoEnable: FormControl<boolean | null | undefined>,
		AutoEnableStandards: FormControl<AutoEnableStandards | null | undefined>,
	}
	export function CreateUpdateOrganizationConfigurationRequestFormGroup() {
		return new FormGroup<UpdateOrganizationConfigurationRequestFormProperties>({
			AutoEnable: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			AutoEnableStandards: new FormControl<AutoEnableStandards | null | undefined>(undefined),
		});

	}

	export interface UpdateSecurityHubConfigurationRequest {
		AutoEnableControls?: boolean | null;
		ControlFindingGenerator?: ControlFindingGenerator;
	}
	export interface UpdateSecurityHubConfigurationRequestFormProperties {
		AutoEnableControls: FormControl<boolean | null | undefined>,
		ControlFindingGenerator: FormControl<ControlFindingGenerator | null | undefined>,
	}
	export function CreateUpdateSecurityHubConfigurationRequestFormGroup() {
		return new FormGroup<UpdateSecurityHubConfigurationRequestFormProperties>({
			AutoEnableControls: new FormControl<boolean | null | undefined>(undefined),
			ControlFindingGenerator: new FormControl<ControlFindingGenerator | null | undefined>(undefined),
		});

	}

	export interface UpdateStandardsControlRequest {
		ControlStatus?: RuleStatus;
		DisabledReason?: string;
	}
	export interface UpdateStandardsControlRequestFormProperties {
		ControlStatus: FormControl<RuleStatus | null | undefined>,
		DisabledReason: FormControl<string | null | undefined>,
	}
	export function CreateUpdateStandardsControlRequestFormGroup() {
		return new FormGroup<UpdateStandardsControlRequestFormProperties>({
			ControlStatus: new FormControl<RuleStatus | null | undefined>(undefined),
			DisabledReason: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p>Accepts the invitation to be a member account and be monitored by the Security Hub administrator account that the invitation was sent from.</p> <p>This operation is only used by member accounts that are not added through Organizations.</p> <p>When the member account accepts the invitation, permission is granted to the administrator account to view findings generated in the member account.</p>
		 * Post administrator
		 * @return {AcceptAdministratorInvitationResponse} Success
		 */
		AcceptAdministratorInvitation(requestBody: AcceptAdministratorInvitationPostBody): Observable<AcceptAdministratorInvitationResponse> {
			return this.http.post<AcceptAdministratorInvitationResponse>(this.baseUri + 'administrator', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Provides the details for the Security Hub administrator account for the current member account.</p> <p>Can be used by both member accounts that are managed using Organizations and accounts that were invited manually.</p>
		 * Get administrator
		 * @return {GetAdministratorAccountResponse} Success
		 */
		GetAdministratorAccount(): Observable<GetAdministratorAccountResponse> {
			return this.http.get<GetAdministratorAccountResponse>(this.baseUri + 'administrator', {});
		}

		/**
		 * <p>This method is deprecated. Instead, use <code>AcceptAdministratorInvitation</code>.</p> <p>The Security Hub console continues to use <code>AcceptInvitation</code>. It will eventually change to use <code>AcceptAdministratorInvitation</code>. Any IAM policies that specifically control access to this function must continue to use <code>AcceptInvitation</code>. You should also add <code>AcceptAdministratorInvitation</code> to your policies to ensure that the correct permissions are in place after the console begins to use <code>AcceptAdministratorInvitation</code>.</p> <p>Accepts the invitation to be a member account and be monitored by the Security Hub administrator account that the invitation was sent from.</p> <p>This operation is only used by member accounts that are not added through Organizations.</p> <p>When the member account accepts the invitation, permission is granted to the administrator account to view findings generated in the member account.</p>
		 * Post master
		 * @return {AcceptInvitationResponse} Success
		 */
		AcceptInvitation(requestBody: AcceptInvitationPostBody): Observable<AcceptInvitationResponse> {
			return this.http.post<AcceptInvitationResponse>(this.baseUri + 'master', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>This method is deprecated. Instead, use <code>GetAdministratorAccount</code>.</p> <p>The Security Hub console continues to use <code>GetMasterAccount</code>. It will eventually change to use <code>GetAdministratorAccount</code>. Any IAM policies that specifically control access to this function must continue to use <code>GetMasterAccount</code>. You should also add <code>GetAdministratorAccount</code> to your policies to ensure that the correct permissions are in place after the console begins to use <code>GetAdministratorAccount</code>.</p> <p>Provides the details for the Security Hub administrator account for the current member account.</p> <p>Can be used by both member accounts that are managed using Organizations and accounts that were invited manually.</p>
		 * Get master
		 * @return {GetMasterAccountResponse} Success
		 */
		GetMasterAccount(): Observable<GetMasterAccountResponse> {
			return this.http.get<GetMasterAccountResponse>(this.baseUri + 'master', {});
		}

		/**
		 * Deletes one or more automation rules.
		 * Post automationrules/delete
		 * @return {BatchDeleteAutomationRulesResponse} Success
		 */
		BatchDeleteAutomationRules(requestBody: BatchDeleteAutomationRulesPostBody): Observable<BatchDeleteAutomationRulesResponse> {
			return this.http.post<BatchDeleteAutomationRulesResponse>(this.baseUri + 'automationrules/delete', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Disables the standards specified by the provided <code>StandardsSubscriptionArns</code>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-standards.html">Security Standards</a> section of the <i>Security Hub User Guide</i>.</p>
		 * Post standards/deregister
		 * @return {BatchDisableStandardsResponse} Success
		 */
		BatchDisableStandards(requestBody: BatchDisableStandardsPostBody): Observable<BatchDisableStandardsResponse> {
			return this.http.post<BatchDisableStandardsResponse>(this.baseUri + 'standards/deregister', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Enables the standards specified by the provided <code>StandardsArn</code>. To obtain the ARN for a standard, use the <code>DescribeStandards</code> operation.</p> <p>For more information, see the <a href="https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-standards.html">Security Standards</a> section of the <i>Security Hub User Guide</i>.</p>
		 * Post standards/register
		 * @return {BatchEnableStandardsResponse} Success
		 */
		BatchEnableStandards(requestBody: BatchEnableStandardsPostBody): Observable<BatchEnableStandardsResponse> {
			return this.http.post<BatchEnableStandardsResponse>(this.baseUri + 'standards/register', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves a list of details for automation rules based on rule Amazon Resource Names (ARNs).
		 * Post automationrules/get
		 * @return {BatchGetAutomationRulesResponse} Success
		 */
		BatchGetAutomationRules(requestBody: BatchGetAutomationRulesPostBody): Observable<BatchGetAutomationRulesResponse> {
			return this.http.post<BatchGetAutomationRulesResponse>(this.baseUri + 'automationrules/get', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Provides details about a batch of security controls for the current Amazon Web Services account and Amazon Web Services Region.
		 * Post securityControls/batchGet
		 * @return {BatchGetSecurityControlsResponse} Success
		 */
		BatchGetSecurityControls(requestBody: BatchGetSecurityControlsPostBody): Observable<BatchGetSecurityControlsResponse> {
			return this.http.post<BatchGetSecurityControlsResponse>(this.baseUri + 'securityControls/batchGet', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * For a batch of security controls and standards, identifies whether each control is currently enabled or disabled in a standard.
		 * Post associations/batchGet
		 * @return {BatchGetStandardsControlAssociationsResponse} Success
		 */
		BatchGetStandardsControlAssociations(requestBody: BatchGetStandardsControlAssociationsPostBody): Observable<BatchGetStandardsControlAssociationsResponse> {
			return this.http.post<BatchGetStandardsControlAssociationsResponse>(this.baseUri + 'associations/batchGet', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Imports security findings generated by a finding provider into Security Hub. This action is requested by the finding provider to import its findings into Security Hub.</p> <p> <code>BatchImportFindings</code> must be called by one of the following:</p> <ul> <li> <p>The Amazon Web Services account that is associated with a finding if you are using the <a href="https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-custom-providers.html#securityhub-custom-providers-bfi-reqs">default product ARN</a> or are a partner sending findings from within a customer's Amazon Web Services account. In these cases, the identifier of the account that you are calling <code>BatchImportFindings</code> from needs to be the same as the <code>AwsAccountId</code> attribute for the finding.</p> </li> <li> <p>An Amazon Web Services account that Security Hub has allow-listed for an official partner integration. In this case, you can call <code>BatchImportFindings</code> from the allow-listed account and send findings from different customer accounts in the same batch.</p> </li> </ul> <p>The maximum allowed size for a finding is 240 Kb. An error is returned for any finding larger than 240 Kb.</p> <p>After a finding is created, <code>BatchImportFindings</code> cannot be used to update the following finding fields and objects, which Security Hub customers use to manage their investigation workflow.</p> <ul> <li> <p> <code>Note</code> </p> </li> <li> <p> <code>UserDefinedFields</code> </p> </li> <li> <p> <code>VerificationState</code> </p> </li> <li> <p> <code>Workflow</code> </p> </li> </ul> <p>Finding providers also should not use <code>BatchImportFindings</code> to update the following attributes.</p> <ul> <li> <p> <code>Confidence</code> </p> </li> <li> <p> <code>Criticality</code> </p> </li> <li> <p> <code>RelatedFindings</code> </p> </li> <li> <p> <code>Severity</code> </p> </li> <li> <p> <code>Types</code> </p> </li> </ul> <p>Instead, finding providers use <code>FindingProviderFields</code> to provide values for these attributes.</p>
		 * Post findings/import
		 * @return {BatchImportFindingsResponse} Success
		 */
		BatchImportFindings(requestBody: BatchImportFindingsPostBody): Observable<BatchImportFindingsResponse> {
			return this.http.post<BatchImportFindingsResponse>(this.baseUri + 'findings/import', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates one or more automation rules based on rule Amazon Resource Names (ARNs) and input parameters.
		 * Patch automationrules/update
		 * @return {BatchUpdateAutomationRulesResponse} Success
		 */
		BatchUpdateAutomationRules(requestBody: BatchUpdateAutomationRulesPatchBody): Observable<BatchUpdateAutomationRulesResponse> {
			return this.http.patch<BatchUpdateAutomationRulesResponse>(this.baseUri + 'automationrules/update', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Used by Security Hub customers to update information about their investigation into a finding. Requested by administrator accounts or member accounts. Administrator accounts can update findings for their account and their member accounts. Member accounts can update findings for their account.</p> <p>Updates from <code>BatchUpdateFindings</code> do not affect the value of <code>UpdatedAt</code> for a finding.</p> <p>Administrator and member accounts can use <code>BatchUpdateFindings</code> to update the following finding fields and objects.</p> <ul> <li> <p> <code>Confidence</code> </p> </li> <li> <p> <code>Criticality</code> </p> </li> <li> <p> <code>Note</code> </p> </li> <li> <p> <code>RelatedFindings</code> </p> </li> <li> <p> <code>Severity</code> </p> </li> <li> <p> <code>Types</code> </p> </li> <li> <p> <code>UserDefinedFields</code> </p> </li> <li> <p> <code>VerificationState</code> </p> </li> <li> <p> <code>Workflow</code> </p> </li> </ul> <p>You can configure IAM policies to restrict access to fields and field values. For example, you might not want member accounts to be able to suppress findings or change the finding severity. See <a href="https://docs.aws.amazon.com/securityhub/latest/userguide/finding-update-batchupdatefindings.html#batchupdatefindings-configure-access">Configuring access to BatchUpdateFindings</a> in the <i>Security Hub User Guide</i>.</p>
		 * Patch findings/batchupdate
		 * @return {BatchUpdateFindingsResponse} Success
		 */
		BatchUpdateFindings(requestBody: BatchUpdateFindingsPatchBody): Observable<BatchUpdateFindingsResponse> {
			return this.http.patch<BatchUpdateFindingsResponse>(this.baseUri + 'findings/batchupdate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * For a batch of security controls and standards, this operation updates the enablement status of a control in a standard.
		 * Patch associations
		 * @return {BatchUpdateStandardsControlAssociationsResponse} Success
		 */
		BatchUpdateStandardsControlAssociations(requestBody: BatchUpdateStandardsControlAssociationsPatchBody): Observable<BatchUpdateStandardsControlAssociationsResponse> {
			return this.http.patch<BatchUpdateStandardsControlAssociationsResponse>(this.baseUri + 'associations', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a custom action target in Security Hub.</p> <p>You can use custom actions on findings and insights in Security Hub to trigger target actions in Amazon CloudWatch Events.</p>
		 * Post actionTargets
		 * @return {CreateActionTargetResponse} Success
		 */
		CreateActionTarget(requestBody: CreateActionTargetPostBody): Observable<CreateActionTargetResponse> {
			return this.http.post<CreateActionTargetResponse>(this.baseUri + 'actionTargets', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates an automation rule based on input parameters.
		 * Post automationrules/create
		 * @return {CreateAutomationRuleResponse} Success
		 */
		CreateAutomationRule(requestBody: CreateAutomationRulePostBody): Observable<CreateAutomationRuleResponse> {
			return this.http.post<CreateAutomationRuleResponse>(this.baseUri + 'automationrules/create', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Used to enable finding aggregation. Must be called from the aggregation Region.</p> <p>For more details about cross-Region replication, see <a href="https://docs.aws.amazon.com/securityhub/latest/userguide/finding-aggregation.html">Configuring finding aggregation</a> in the <i>Security Hub User Guide</i>. </p>
		 * Post findingAggregator/create
		 * @return {CreateFindingAggregatorResponse} Success
		 */
		CreateFindingAggregator(requestBody: CreateFindingAggregatorPostBody): Observable<CreateFindingAggregatorResponse> {
			return this.http.post<CreateFindingAggregatorResponse>(this.baseUri + 'findingAggregator/create', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a custom insight in Security Hub. An insight is a consolidation of findings that relate to a security issue that requires attention or remediation.</p> <p>To group the related findings in the insight, use the <code>GroupByAttribute</code>.</p>
		 * Post insights
		 * @return {CreateInsightResponse} Success
		 */
		CreateInsight(requestBody: CreateInsightPostBody): Observable<CreateInsightResponse> {
			return this.http.post<CreateInsightResponse>(this.baseUri + 'insights', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a member association in Security Hub between the specified accounts and the account used to make the request, which is the administrator account. If you are integrated with Organizations, then the administrator account is designated by the organization management account.</p> <p> <code>CreateMembers</code> is always used to add accounts that are not organization members.</p> <p>For accounts that are managed using Organizations, <code>CreateMembers</code> is only used in the following cases:</p> <ul> <li> <p>Security Hub is not configured to automatically add new organization accounts.</p> </li> <li> <p>The account was disassociated or deleted in Security Hub.</p> </li> </ul> <p>This action can only be used by an account that has Security Hub enabled. To enable Security Hub, you can use the <code>EnableSecurityHub</code> operation.</p> <p>For accounts that are not organization members, you create the account association and then send an invitation to the member account. To send the invitation, you use the <code>InviteMembers</code> operation. If the account owner accepts the invitation, the account becomes a member account in Security Hub.</p> <p>Accounts that are managed using Organizations do not receive an invitation. They automatically become a member account in Security Hub.</p> <ul> <li> <p>If the organization account does not have Security Hub enabled, then Security Hub and the default standards are automatically enabled. Note that Security Hub cannot be enabled automatically for the organization management account. The organization management account must enable Security Hub before the administrator account enables it as a member account.</p> </li> <li> <p>For organization accounts that already have Security Hub enabled, Security Hub does not make any other changes to those accounts. It does not change their enabled standards or controls.</p> </li> </ul> <p>A permissions policy is added that permits the administrator account to view the findings generated in the member account.</p> <p>To remove the association between the administrator and member accounts, use the <code>DisassociateFromMasterAccount</code> or <code>DisassociateMembers</code> operation.</p>
		 * Post members
		 * @return {CreateMembersResponse} Success
		 */
		CreateMembers(requestBody: CreateMembersPostBody): Observable<CreateMembersResponse> {
			return this.http.post<CreateMembersResponse>(this.baseUri + 'members', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Lists details about all member accounts for the current Security Hub administrator account.</p> <p>The results include both member accounts that belong to an organization and member accounts that were invited manually.</p>
		 * Get members
		 * @param {boolean} OnlyAssociated <p>Specifies which member accounts to include in the response based on their relationship status with the administrator account. The default value is <code>TRUE</code>.</p> <p>If <code>OnlyAssociated</code> is set to <code>TRUE</code>, the response includes member accounts whose relationship status with the administrator account is set to <code>ENABLED</code>.</p> <p>If <code>OnlyAssociated</code> is set to <code>FALSE</code>, the response includes all existing member accounts. </p>
		 * @param {number} MaxResults The maximum number of items to return in the response. 
		 * @param {string} NextToken <p>The token that is required for pagination. On your first call to the <code>ListMembers</code> operation, set the value of this parameter to <code>NULL</code>.</p> <p>For subsequent calls to the operation, to continue listing data, set the value of this parameter to the value returned from the previous response.</p>
		 * @return {ListMembersResponse} Success
		 */
		ListMembers(OnlyAssociated: boolean | null | undefined, MaxResults: number | null | undefined, NextToken: string | null | undefined): Observable<ListMembersResponse> {
			return this.http.get<ListMembersResponse>(this.baseUri + 'members?OnlyAssociated=' + OnlyAssociated + '&MaxResults=' + MaxResults + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * <p>Declines invitations to become a member account.</p> <p>A prospective member account uses this operation to decline an invitation to become a member.</p> <p>This operation is only called by member accounts that aren't part of an organization. Organization accounts don't receive invitations.</p>
		 * Post invitations/decline
		 * @return {DeclineInvitationsResponse} Success
		 */
		DeclineInvitations(requestBody: DeclineInvitationsPostBody): Observable<DeclineInvitationsResponse> {
			return this.http.post<DeclineInvitationsResponse>(this.baseUri + 'invitations/decline', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes a custom action target from Security Hub.</p> <p>Deleting a custom action target does not affect any findings or insights that were already sent to Amazon CloudWatch Events using the custom action.</p>
		 * Delete actionTargets/{ActionTargetArn}
		 * @param {string} ActionTargetArn The Amazon Resource Name (ARN) of the custom action target to delete.
		 * @return {DeleteActionTargetResponse} Success
		 */
		DeleteActionTarget(ActionTargetArn: string): Observable<DeleteActionTargetResponse> {
			return this.http.delete<DeleteActionTargetResponse>(this.baseUri + 'actionTargets/' + (ActionTargetArn == null ? '' : encodeURIComponent(ActionTargetArn)), {});
		}

		/**
		 * Updates the name and description of a custom action target in Security Hub.
		 * Patch actionTargets/{ActionTargetArn}
		 * @param {string} ActionTargetArn The ARN of the custom action target to update.
		 * @return {UpdateActionTargetResponse} Success
		 */
		UpdateActionTarget(ActionTargetArn: string, requestBody: UpdateActionTargetPatchBody): Observable<UpdateActionTargetResponse> {
			return this.http.patch<UpdateActionTargetResponse>(this.baseUri + 'actionTargets/' + (ActionTargetArn == null ? '' : encodeURIComponent(ActionTargetArn)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes a finding aggregator. When you delete the finding aggregator, you stop finding aggregation.</p> <p>When you stop finding aggregation, findings that were already aggregated to the aggregation Region are still visible from the aggregation Region. New findings and finding updates are not aggregated. </p>
		 * Delete findingAggregator/delete/{FindingAggregatorArn}
		 * @param {string} FindingAggregatorArn The ARN of the finding aggregator to delete. To obtain the ARN, use <code>ListFindingAggregators</code>.
		 * @return {DeleteFindingAggregatorResponse} Success
		 */
		DeleteFindingAggregator(FindingAggregatorArn: string): Observable<DeleteFindingAggregatorResponse> {
			return this.http.delete<DeleteFindingAggregatorResponse>(this.baseUri + 'findingAggregator/delete/' + (FindingAggregatorArn == null ? '' : encodeURIComponent(FindingAggregatorArn)), {});
		}

		/**
		 * Deletes the insight specified by the <code>InsightArn</code>.
		 * Delete insights/{InsightArn}
		 * @param {string} InsightArn The ARN of the insight to delete.
		 * @return {DeleteInsightResponse} Success
		 */
		DeleteInsight(InsightArn: string): Observable<DeleteInsightResponse> {
			return this.http.delete<DeleteInsightResponse>(this.baseUri + 'insights/' + (InsightArn == null ? '' : encodeURIComponent(InsightArn)), {});
		}

		/**
		 * Updates the Security Hub insight identified by the specified insight ARN.
		 * Patch insights/{InsightArn}
		 * @param {string} InsightArn The ARN of the insight that you want to update.
		 * @return {UpdateInsightResponse} Success
		 */
		UpdateInsight(InsightArn: string, requestBody: UpdateInsightPatchBody): Observable<UpdateInsightResponse> {
			return this.http.patch<UpdateInsightResponse>(this.baseUri + 'insights/' + (InsightArn == null ? '' : encodeURIComponent(InsightArn)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes invitations received by the Amazon Web Services account to become a member account.</p> <p>A Security Hub administrator account can use this operation to delete invitations sent to one or more member accounts.</p> <p>This operation is only used to delete invitations that are sent to member accounts that aren't part of an organization. Organization accounts don't receive invitations.</p>
		 * Post invitations/delete
		 * @return {DeleteInvitationsResponse} Success
		 */
		DeleteInvitations(requestBody: DeleteInvitationsPostBody): Observable<DeleteInvitationsResponse> {
			return this.http.post<DeleteInvitationsResponse>(this.baseUri + 'invitations/delete', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes the specified member accounts from Security Hub.</p> <p>Can be used to delete member accounts that belong to an organization as well as member accounts that were invited manually.</p>
		 * Post members/delete
		 * @return {DeleteMembersResponse} Success
		 */
		DeleteMembers(requestBody: DeleteMembersPostBody): Observable<DeleteMembersResponse> {
			return this.http.post<DeleteMembersResponse>(this.baseUri + 'members/delete', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of the custom action targets in Security Hub in your account.
		 * Post actionTargets/get
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeActionTargetsResponse} Success
		 */
		DescribeActionTargets(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: DescribeActionTargetsPostBody): Observable<DescribeActionTargetsResponse> {
			return this.http.post<DescribeActionTargetsResponse>(this.baseUri + 'actionTargets/get?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns details about the Hub resource in your account, including the <code>HubArn</code> and the time when you enabled Security Hub.
		 * Get accounts
		 * @param {string} HubArn The ARN of the Hub resource to retrieve.
		 * @return {DescribeHubResponse} Success
		 */
		DescribeHub(HubArn: string | null | undefined): Observable<DescribeHubResponse> {
			return this.http.get<DescribeHubResponse>(this.baseUri + 'accounts?HubArn=' + (HubArn == null ? '' : encodeURIComponent(HubArn)), {});
		}

		/**
		 * <p>Disables Security Hub in your account only in the current Region. To disable Security Hub in all Regions, you must submit one request per Region where you have enabled Security Hub.</p> <p>When you disable Security Hub for an administrator account, it doesn't disable Security Hub for any associated member accounts.</p> <p>When you disable Security Hub, your existing findings and insights and any Security Hub configuration settings are deleted after 90 days and cannot be recovered. Any standards that were enabled are disabled, and your administrator and member account associations are removed.</p> <p>If you want to save your existing findings, you must export them before you disable Security Hub.</p>
		 * Delete accounts
		 * @return {DisableSecurityHubResponse} Success
		 */
		DisableSecurityHub(): Observable<DisableSecurityHubResponse> {
			return this.http.delete<DisableSecurityHubResponse>(this.baseUri + 'accounts', {});
		}

		/**
		 * <p>Enables Security Hub for your account in the current Region or the Region you specify in the request.</p> <p>When you enable Security Hub, you grant to Security Hub the permissions necessary to gather findings from other services that are integrated with Security Hub.</p> <p>When you use the <code>EnableSecurityHub</code> operation to enable Security Hub, you also automatically enable the following standards:</p> <ul> <li> <p>Center for Internet Security (CIS) Amazon Web Services Foundations Benchmark v1.2.0</p> </li> <li> <p>Amazon Web Services Foundational Security Best Practices</p> </li> </ul> <p>Other standards are not automatically enabled. </p> <p>To opt out of automatically enabled standards, set <code>EnableDefaultStandards</code> to <code>false</code>.</p> <p>After you enable Security Hub, to enable a standard, use the <code>BatchEnableStandards</code> operation. To disable a standard, use the <code>BatchDisableStandards</code> operation.</p> <p>To learn more, see the <a href="https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-settingup.html">setup information</a> in the <i>Security Hub User Guide</i>.</p>
		 * Post accounts
		 * @return {EnableSecurityHubResponse} Success
		 */
		EnableSecurityHub(requestBody: EnableSecurityHubPostBody): Observable<EnableSecurityHubResponse> {
			return this.http.post<EnableSecurityHubResponse>(this.baseUri + 'accounts', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates configuration options for Security Hub.
		 * Patch accounts
		 * @return {UpdateSecurityHubConfigurationResponse} Success
		 */
		UpdateSecurityHubConfiguration(requestBody: UpdateSecurityHubConfigurationPatchBody): Observable<UpdateSecurityHubConfigurationResponse> {
			return this.http.patch<UpdateSecurityHubConfigurationResponse>(this.baseUri + 'accounts', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns information about the Organizations configuration for Security Hub. Can only be called from a Security Hub administrator account.
		 * Get organization/configuration
		 * @return {DescribeOrganizationConfigurationResponse} Success
		 */
		DescribeOrganizationConfiguration(): Observable<DescribeOrganizationConfigurationResponse> {
			return this.http.get<DescribeOrganizationConfigurationResponse>(this.baseUri + 'organization/configuration', {});
		}

		/**
		 * Used to update the configuration related to Organizations. Can only be called from a Security Hub administrator account.
		 * Post organization/configuration
		 * @return {UpdateOrganizationConfigurationResponse} Success
		 */
		UpdateOrganizationConfiguration(requestBody: UpdateOrganizationConfigurationPostBody): Observable<UpdateOrganizationConfigurationResponse> {
			return this.http.post<UpdateOrganizationConfigurationResponse>(this.baseUri + 'organization/configuration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns information about product integrations in Security Hub.</p> <p>You can optionally provide an integration ARN. If you provide an integration ARN, then the results only include that integration.</p> <p>If you do not provide an integration ARN, then the results include all of the available product integrations. </p>
		 * Get products
		 * @param {string} NextToken <p>The token that is required for pagination. On your first call to the <code>DescribeProducts</code> operation, set the value of this parameter to <code>NULL</code>.</p> <p>For subsequent calls to the operation, to continue listing data, set the value of this parameter to the value returned from the previous response.</p>
		 * @param {number} MaxResults The maximum number of results to return.
		 * @param {string} ProductArn The ARN of the integration to return.
		 * @return {DescribeProductsResponse} Success
		 */
		DescribeProducts(NextToken: string | null | undefined, MaxResults: number | null | undefined, ProductArn: string | null | undefined): Observable<DescribeProductsResponse> {
			return this.http.get<DescribeProductsResponse>(this.baseUri + 'products?NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&MaxResults=' + MaxResults + '&ProductArn=' + (ProductArn == null ? '' : encodeURIComponent(ProductArn)), {});
		}

		/**
		 * <p>Returns a list of the available standards in Security Hub.</p> <p>For each standard, the results include the standard ARN, the name, and a description. </p>
		 * Get standards
		 * @param {string} NextToken <p>The token that is required for pagination. On your first call to the <code>DescribeStandards</code> operation, set the value of this parameter to <code>NULL</code>.</p> <p>For subsequent calls to the operation, to continue listing data, set the value of this parameter to the value returned from the previous response.</p>
		 * @param {number} MaxResults The maximum number of standards to return.
		 * @return {DescribeStandardsResponse} Success
		 */
		DescribeStandards(NextToken: string | null | undefined, MaxResults: number | null | undefined): Observable<DescribeStandardsResponse> {
			return this.http.get<DescribeStandardsResponse>(this.baseUri + 'standards?NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&MaxResults=' + MaxResults, {});
		}

		/**
		 * <p>Returns a list of security standards controls.</p> <p>For each control, the results include information about whether it is currently enabled, the severity, and a link to remediation information.</p>
		 * Get standards/controls/{StandardsSubscriptionArn}
		 * @param {string} StandardsSubscriptionArn The ARN of a resource that represents your subscription to a supported standard. To get the subscription ARNs of the standards you have enabled, use the <code>GetEnabledStandards</code> operation.
		 * @param {string} NextToken <p>The token that is required for pagination. On your first call to the <code>DescribeStandardsControls</code> operation, set the value of this parameter to <code>NULL</code>.</p> <p>For subsequent calls to the operation, to continue listing data, set the value of this parameter to the value returned from the previous response.</p>
		 * @param {number} MaxResults The maximum number of security standard controls to return.
		 * @return {DescribeStandardsControlsResponse} Success
		 */
		DescribeStandardsControls(StandardsSubscriptionArn: string, NextToken: string | null | undefined, MaxResults: number | null | undefined): Observable<DescribeStandardsControlsResponse> {
			return this.http.get<DescribeStandardsControlsResponse>(this.baseUri + 'standards/controls/' + (StandardsSubscriptionArn == null ? '' : encodeURIComponent(StandardsSubscriptionArn)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&MaxResults=' + MaxResults, {});
		}

		/**
		 * Disables the integration of the specified product with Security Hub. After the integration is disabled, findings from that product are no longer sent to Security Hub.
		 * Delete productSubscriptions/{ProductSubscriptionArn}
		 * @param {string} ProductSubscriptionArn The ARN of the integrated product to disable the integration for.
		 * @return {DisableImportFindingsForProductResponse} Success
		 */
		DisableImportFindingsForProduct(ProductSubscriptionArn: string): Observable<DisableImportFindingsForProductResponse> {
			return this.http.delete<DisableImportFindingsForProductResponse>(this.baseUri + 'productSubscriptions/' + (ProductSubscriptionArn == null ? '' : encodeURIComponent(ProductSubscriptionArn)), {});
		}

		/**
		 * Disables a Security Hub administrator account. Can only be called by the organization management account.
		 * Post organization/admin/disable
		 * @return {DisableOrganizationAdminAccountResponse} Success
		 */
		DisableOrganizationAdminAccount(requestBody: DisableOrganizationAdminAccountPostBody): Observable<DisableOrganizationAdminAccountResponse> {
			return this.http.post<DisableOrganizationAdminAccountResponse>(this.baseUri + 'organization/admin/disable', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Disassociates the current Security Hub member account from the associated administrator account.</p> <p>This operation is only used by accounts that are not part of an organization. For organization accounts, only the administrator account can disassociate a member account.</p>
		 * Post administrator/disassociate
		 * @return {DisassociateFromAdministratorAccountResponse} Success
		 */
		DisassociateFromAdministratorAccount(): Observable<DisassociateFromAdministratorAccountResponse> {
			return this.http.post<DisassociateFromAdministratorAccountResponse>(this.baseUri + 'administrator/disassociate', null, {});
		}

		/**
		 * <p>This method is deprecated. Instead, use <code>DisassociateFromAdministratorAccount</code>.</p> <p>The Security Hub console continues to use <code>DisassociateFromMasterAccount</code>. It will eventually change to use <code>DisassociateFromAdministratorAccount</code>. Any IAM policies that specifically control access to this function must continue to use <code>DisassociateFromMasterAccount</code>. You should also add <code>DisassociateFromAdministratorAccount</code> to your policies to ensure that the correct permissions are in place after the console begins to use <code>DisassociateFromAdministratorAccount</code>.</p> <p>Disassociates the current Security Hub member account from the associated administrator account.</p> <p>This operation is only used by accounts that are not part of an organization. For organization accounts, only the administrator account can disassociate a member account.</p>
		 * Post master/disassociate
		 * @return {DisassociateFromMasterAccountResponse} Success
		 */
		DisassociateFromMasterAccount(): Observable<DisassociateFromMasterAccountResponse> {
			return this.http.post<DisassociateFromMasterAccountResponse>(this.baseUri + 'master/disassociate', null, {});
		}

		/**
		 * <p>Disassociates the specified member accounts from the associated administrator account.</p> <p>Can be used to disassociate both accounts that are managed using Organizations and accounts that were invited manually.</p>
		 * Post members/disassociate
		 * @return {DisassociateMembersResponse} Success
		 */
		DisassociateMembers(requestBody: DisassociateMembersPostBody): Observable<DisassociateMembersResponse> {
			return this.http.post<DisassociateMembersResponse>(this.baseUri + 'members/disassociate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Enables the integration of a partner product with Security Hub. Integrated products send findings to Security Hub.</p> <p>When you enable a product integration, a permissions policy that grants permission for the product to send findings to Security Hub is applied.</p>
		 * Post productSubscriptions
		 * @return {EnableImportFindingsForProductResponse} Success
		 */
		EnableImportFindingsForProduct(requestBody: EnableImportFindingsForProductPostBody): Observable<EnableImportFindingsForProductResponse> {
			return this.http.post<EnableImportFindingsForProductResponse>(this.baseUri + 'productSubscriptions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all findings-generating solutions (products) that you are subscribed to receive findings from in Security Hub.
		 * Get productSubscriptions
		 * @param {string} NextToken <p>The token that is required for pagination. On your first call to the <code>ListEnabledProductsForImport</code> operation, set the value of this parameter to <code>NULL</code>.</p> <p>For subsequent calls to the operation, to continue listing data, set the value of this parameter to the value returned from the previous response.</p>
		 * @param {number} MaxResults The maximum number of items to return in the response.
		 * @return {ListEnabledProductsForImportResponse} Success
		 */
		ListEnabledProductsForImport(NextToken: string | null | undefined, MaxResults: number | null | undefined): Observable<ListEnabledProductsForImportResponse> {
			return this.http.get<ListEnabledProductsForImportResponse>(this.baseUri + 'productSubscriptions?NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&MaxResults=' + MaxResults, {});
		}

		/**
		 * Designates the Security Hub administrator account for an organization. Can only be called by the organization management account.
		 * Post organization/admin/enable
		 * @return {EnableOrganizationAdminAccountResponse} Success
		 */
		EnableOrganizationAdminAccount(requestBody: EnableOrganizationAdminAccountPostBody): Observable<EnableOrganizationAdminAccountResponse> {
			return this.http.post<EnableOrganizationAdminAccountResponse>(this.baseUri + 'organization/admin/enable', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of the standards that are currently enabled.
		 * Post standards/get
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {GetEnabledStandardsResponse} Success
		 */
		GetEnabledStandards(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: GetEnabledStandardsPostBody): Observable<GetEnabledStandardsResponse> {
			return this.http.post<GetEnabledStandardsResponse>(this.baseUri + 'standards/get?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the current finding aggregation configuration.
		 * Get findingAggregator/get/{FindingAggregatorArn}
		 * @param {string} FindingAggregatorArn The ARN of the finding aggregator to return details for. To obtain the ARN, use <code>ListFindingAggregators</code>.
		 * @return {GetFindingAggregatorResponse} Success
		 */
		GetFindingAggregator(FindingAggregatorArn: string): Observable<GetFindingAggregatorResponse> {
			return this.http.get<GetFindingAggregatorResponse>(this.baseUri + 'findingAggregator/get/' + (FindingAggregatorArn == null ? '' : encodeURIComponent(FindingAggregatorArn)), {});
		}

		/**
		 * Returns history for a Security Hub finding in the last 90 days. The history includes changes made to any fields in the Amazon Web Services Security Finding Format (ASFF).
		 * Post findingHistory/get
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {GetFindingHistoryResponse} Success
		 */
		GetFindingHistory(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: GetFindingHistoryPostBody): Observable<GetFindingHistoryResponse> {
			return this.http.post<GetFindingHistoryResponse>(this.baseUri + 'findingHistory/get?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns a list of findings that match the specified criteria.</p> <p>If finding aggregation is enabled, then when you call <code>GetFindings</code> from the aggregation Region, the results include all of the matching findings from both the aggregation Region and the linked Regions.</p>
		 * Post findings
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {GetFindingsResponse} Success
		 */
		GetFindings(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: GetFindingsPostBody): Observable<GetFindingsResponse> {
			return this.http.post<GetFindingsResponse>(this.baseUri + 'findings?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p> <code>UpdateFindings</code> is deprecated. Instead of <code>UpdateFindings</code>, use <code>BatchUpdateFindings</code>.</p> <p>Updates the <code>Note</code> and <code>RecordState</code> of the Security Hub-aggregated findings that the filter attributes specify. Any member account that can view the finding also sees the update to the finding.</p>
		 * Patch findings
		 * @return {UpdateFindingsResponse} Success
		 */
		UpdateFindings(requestBody: UpdateFindingsPatchBody): Observable<UpdateFindingsResponse> {
			return this.http.patch<UpdateFindingsResponse>(this.baseUri + 'findings', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the results of the Security Hub insight specified by the insight ARN.
		 * Get insights/results/{InsightArn}
		 * @param {string} InsightArn The ARN of the insight for which to return results.
		 * @return {GetInsightResultsResponse} Success
		 */
		GetInsightResults(InsightArn: string): Observable<GetInsightResultsResponse> {
			return this.http.get<GetInsightResultsResponse>(this.baseUri + 'insights/results/' + (InsightArn == null ? '' : encodeURIComponent(InsightArn)), {});
		}

		/**
		 * Lists and describes insights for the specified insight ARNs.
		 * Post insights/get
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {GetInsightsResponse} Success
		 */
		GetInsights(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: GetInsightsPostBody): Observable<GetInsightsResponse> {
			return this.http.post<GetInsightsResponse>(this.baseUri + 'insights/get?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the count of all Security Hub membership invitations that were sent to the current member account, not including the currently accepted invitation.
		 * Get invitations/count
		 * @return {GetInvitationsCountResponse} Success
		 */
		GetInvitationsCount(): Observable<GetInvitationsCountResponse> {
			return this.http.get<GetInvitationsCountResponse>(this.baseUri + 'invitations/count', {});
		}

		/**
		 * <p>Returns the details for the Security Hub member accounts for the specified account IDs.</p> <p>An administrator account can be either the delegated Security Hub administrator account for an organization or an administrator account that enabled Security Hub manually.</p> <p>The results include both member accounts that are managed using Organizations and accounts that were invited manually.</p>
		 * Post members/get
		 * @return {GetMembersResponse} Success
		 */
		GetMembers(requestBody: GetMembersPostBody): Observable<GetMembersResponse> {
			return this.http.post<GetMembersResponse>(this.baseUri + 'members/get', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Invites other Amazon Web Services accounts to become member accounts for the Security Hub administrator account that the invitation is sent from.</p> <p>This operation is only used to invite accounts that do not belong to an organization. Organization accounts do not receive invitations.</p> <p>Before you can use this action to invite a member, you must first use the <code>CreateMembers</code> action to create the member account in Security Hub.</p> <p>When the account owner enables Security Hub and accepts the invitation to become a member account, the administrator account can view the findings generated from the member account.</p>
		 * Post members/invite
		 * @return {InviteMembersResponse} Success
		 */
		InviteMembers(requestBody: InviteMembersPostBody): Observable<InviteMembersResponse> {
			return this.http.post<InviteMembersResponse>(this.baseUri + 'members/invite', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * A list of automation rules and their metadata for the calling account.
		 * Get automationrules/list
		 * @param {string} NextToken  A token to specify where to start paginating the response. This is the <code>NextToken</code> from a previously truncated response. On your first call to the <code>ListAutomationRules</code> API, set the value of this parameter to <code>NULL</code>. 
		 * @param {number} MaxResults  The maximum number of rules to return in the response. This currently ranges from 1 to 100. 
		 * @return {ListAutomationRulesResponse} Success
		 */
		ListAutomationRules(NextToken: string | null | undefined, MaxResults: number | null | undefined): Observable<ListAutomationRulesResponse> {
			return this.http.get<ListAutomationRulesResponse>(this.baseUri + 'automationrules/list?NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&MaxResults=' + MaxResults, {});
		}

		/**
		 * If finding aggregation is enabled, then <code>ListFindingAggregators</code> returns the ARN of the finding aggregator. You can run this operation from any Region.
		 * Get findingAggregator/list
		 * @param {string} NextToken The token returned with the previous set of results. Identifies the next set of results to return.
		 * @param {number} MaxResults The maximum number of results to return. This operation currently only returns a single result.
		 * @return {ListFindingAggregatorsResponse} Success
		 */
		ListFindingAggregators(NextToken: string | null | undefined, MaxResults: number | null | undefined): Observable<ListFindingAggregatorsResponse> {
			return this.http.get<ListFindingAggregatorsResponse>(this.baseUri + 'findingAggregator/list?NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&MaxResults=' + MaxResults, {});
		}

		/**
		 * <p>Lists all Security Hub membership invitations that were sent to the current Amazon Web Services account.</p> <p>This operation is only used by accounts that are managed by invitation. Accounts that are managed using the integration with Organizations do not receive invitations.</p>
		 * Get invitations
		 * @param {number} MaxResults The maximum number of items to return in the response. 
		 * @param {string} NextToken <p>The token that is required for pagination. On your first call to the <code>ListInvitations</code> operation, set the value of this parameter to <code>NULL</code>.</p> <p>For subsequent calls to the operation, to continue listing data, set the value of this parameter to the value returned from the previous response.</p>
		 * @return {ListInvitationsResponse} Success
		 */
		ListInvitations(MaxResults: number | null | undefined, NextToken: string | null | undefined): Observable<ListInvitationsResponse> {
			return this.http.get<ListInvitationsResponse>(this.baseUri + 'invitations?MaxResults=' + MaxResults + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Lists the Security Hub administrator accounts. Can only be called by the organization management account.
		 * Get organization/admin
		 * @param {number} MaxResults The maximum number of items to return in the response.
		 * @param {string} NextToken The token that is required for pagination. On your first call to the <code>ListOrganizationAdminAccounts</code> operation, set the value of this parameter to <code>NULL</code>. For subsequent calls to the operation, to continue listing data, set the value of this parameter to the value returned from the previous response. 
		 * @return {ListOrganizationAdminAccountsResponse} Success
		 */
		ListOrganizationAdminAccounts(MaxResults: number | null | undefined, NextToken: string | null | undefined): Observable<ListOrganizationAdminAccountsResponse> {
			return this.http.get<ListOrganizationAdminAccountsResponse>(this.baseUri + 'organization/admin?MaxResults=' + MaxResults + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Lists all of the security controls that apply to a specified standard.
		 * Get securityControls/definitions
		 * @param {string} StandardsArn  The Amazon Resource Name (ARN) of the standard that you want to view controls for. 
		 * @param {string} NextToken  Optional pagination parameter. 
		 * @param {number} MaxResults  An optional parameter that limits the total results of the API response to the specified number. If this parameter isn't provided in the request, the results include the first 25 security controls that apply to the specified standard. The results also include a <code>NextToken</code> parameter that you can use in a subsequent API call to get the next 25 controls. This repeats until all controls for the standard are returned. 
		 * @return {ListSecurityControlDefinitionsResponse} Success
		 */
		ListSecurityControlDefinitions(StandardsArn: string | null | undefined, NextToken: string | null | undefined, MaxResults: number | null | undefined): Observable<ListSecurityControlDefinitionsResponse> {
			return this.http.get<ListSecurityControlDefinitionsResponse>(this.baseUri + 'securityControls/definitions?StandardsArn=' + (StandardsArn == null ? '' : encodeURIComponent(StandardsArn)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&MaxResults=' + MaxResults, {});
		}

		/**
		 * Specifies whether a control is currently enabled or disabled in each enabled standard in the calling account.
		 * Get associations#SecurityControlId
		 * @param {string} SecurityControlId  The identifier of the control (identified with <code>SecurityControlId</code>, <code>SecurityControlArn</code>, or a mix of both parameters) that you want to determine the enablement status of in each enabled standard. 
		 * @param {string} NextToken  Optional pagination parameter. 
		 * @param {number} MaxResults  An optional parameter that limits the total results of the API response to the specified number. If this parameter isn't provided in the request, the results include the first 25 standard and control associations. The results also include a <code>NextToken</code> parameter that you can use in a subsequent API call to get the next 25 associations. This repeats until all associations for the specified control are returned. The number of results is limited by the number of supported Security Hub standards that you've enabled in the calling account. 
		 * @return {ListStandardsControlAssociationsResponse} Success
		 */
		ListStandardsControlAssociations(SecurityControlId: string, NextToken: string | null | undefined, MaxResults: number | null | undefined): Observable<ListStandardsControlAssociationsResponse> {
			return this.http.get<ListStandardsControlAssociationsResponse>(this.baseUri + 'associations#SecurityControlId?SecurityControlId=' + (SecurityControlId == null ? '' : encodeURIComponent(SecurityControlId)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&MaxResults=' + MaxResults, {});
		}

		/**
		 * Returns a list of tags associated with a resource.
		 * Get tags/{ResourceArn}
		 * @param {string} ResourceArn The ARN of the resource to retrieve tags for.
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(ResourceArn: string): Observable<ListTagsForResourceResponse> {
			return this.http.get<ListTagsForResourceResponse>(this.baseUri + 'tags/' + (ResourceArn == null ? '' : encodeURIComponent(ResourceArn)), {});
		}

		/**
		 * Adds one or more tags to a resource.
		 * Post tags/{ResourceArn}
		 * @param {string} ResourceArn The ARN of the resource to apply the tags to.
		 * @return {TagResourceResponse} Success
		 */
		TagResource(ResourceArn: string, requestBody: TagResourcePostBody): Observable<TagResourceResponse> {
			return this.http.post<TagResourceResponse>(this.baseUri + 'tags/' + (ResourceArn == null ? '' : encodeURIComponent(ResourceArn)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes one or more tags from a resource.
		 * Delete tags/{ResourceArn}#tagKeys
		 * @param {string} ResourceArn The ARN of the resource to remove the tags from.
		 * @param {Array<string>} tagKeys The tag keys associated with the tags to remove from the resource. You can remove up to 50 tags at a time.
		 * @return {UntagResourceResponse} Success
		 */
		UntagResource(ResourceArn: string, tagKeys: Array<string>): Observable<UntagResourceResponse> {
			return this.http.delete<UntagResourceResponse>(this.baseUri + 'tags/' + (ResourceArn == null ? '' : encodeURIComponent(ResourceArn)) + '#tagKeys&' + tagKeys.map(z => `tagKeys=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * <p>Updates the finding aggregation configuration. Used to update the Region linking mode and the list of included or excluded Regions. You cannot use <code>UpdateFindingAggregator</code> to change the aggregation Region.</p> <p>You must run <code>UpdateFindingAggregator</code> from the current aggregation Region. </p>
		 * Patch findingAggregator/update
		 * @return {UpdateFindingAggregatorResponse} Success
		 */
		UpdateFindingAggregator(requestBody: UpdateFindingAggregatorPatchBody): Observable<UpdateFindingAggregatorResponse> {
			return this.http.patch<UpdateFindingAggregatorResponse>(this.baseUri + 'findingAggregator/update', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Used to control whether an individual security standard control is enabled or disabled.
		 * Patch standards/control/{StandardsControlArn}
		 * @param {string} StandardsControlArn The ARN of the security standard control to enable or disable.
		 * @return {UpdateStandardsControlResponse} Success
		 */
		UpdateStandardsControl(StandardsControlArn: string, requestBody: UpdateStandardsControlPatchBody): Observable<UpdateStandardsControlResponse> {
			return this.http.patch<UpdateStandardsControlResponse>(this.baseUri + 'standards/control/' + (StandardsControlArn == null ? '' : encodeURIComponent(StandardsControlArn)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export interface AcceptAdministratorInvitationPostBody {

		/**
		 * The account ID of the Security Hub administrator account that sent the invitation.
		 * Required
		 */
		AdministratorId: string;

		/**
		 * The identifier of the invitation sent from the Security Hub administrator account.
		 * Required
		 */
		InvitationId: string;
	}
	export interface AcceptAdministratorInvitationPostBodyFormProperties {

		/**
		 * The account ID of the Security Hub administrator account that sent the invitation.
		 * Required
		 */
		AdministratorId: FormControl<string | null | undefined>,

		/**
		 * The identifier of the invitation sent from the Security Hub administrator account.
		 * Required
		 */
		InvitationId: FormControl<string | null | undefined>,
	}
	export function CreateAcceptAdministratorInvitationPostBodyFormGroup() {
		return new FormGroup<AcceptAdministratorInvitationPostBodyFormProperties>({
			AdministratorId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('.*\S.*')]),
			InvitationId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('.*\S.*')]),
		});

	}

	export interface AcceptInvitationPostBody {

		/**
		 * The account ID of the Security Hub administrator account that sent the invitation.
		 * Required
		 */
		MasterId: string;

		/**
		 * The identifier of the invitation sent from the Security Hub administrator account.
		 * Required
		 */
		InvitationId: string;
	}
	export interface AcceptInvitationPostBodyFormProperties {

		/**
		 * The account ID of the Security Hub administrator account that sent the invitation.
		 * Required
		 */
		MasterId: FormControl<string | null | undefined>,

		/**
		 * The identifier of the invitation sent from the Security Hub administrator account.
		 * Required
		 */
		InvitationId: FormControl<string | null | undefined>,
	}
	export function CreateAcceptInvitationPostBodyFormGroup() {
		return new FormGroup<AcceptInvitationPostBodyFormProperties>({
			MasterId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('.*\S.*')]),
			InvitationId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('.*\S.*')]),
		});

	}

	export interface BatchDeleteAutomationRulesPostBody {

		/**
		 * A list of Amazon Resource Names (ARNs) for the rules that are to be deleted.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 100
		 */
		AutomationRulesArns: Array<string>;
	}
	export interface BatchDeleteAutomationRulesPostBodyFormProperties {
	}
	export function CreateBatchDeleteAutomationRulesPostBodyFormGroup() {
		return new FormGroup<BatchDeleteAutomationRulesPostBodyFormProperties>({
		});

	}

	export interface BatchDisableStandardsPostBody {

		/**
		 * The ARNs of the standards subscriptions to disable.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 25
		 */
		StandardsSubscriptionArns: Array<string>;
	}
	export interface BatchDisableStandardsPostBodyFormProperties {
	}
	export function CreateBatchDisableStandardsPostBodyFormGroup() {
		return new FormGroup<BatchDisableStandardsPostBodyFormProperties>({
		});

	}

	export interface BatchEnableStandardsPostBody {

		/**
		 * The list of standards checks to enable.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 25
		 */
		StandardsSubscriptionRequests: Array<StandardsSubscriptionRequest>;
	}
	export interface BatchEnableStandardsPostBodyFormProperties {
	}
	export function CreateBatchEnableStandardsPostBodyFormGroup() {
		return new FormGroup<BatchEnableStandardsPostBodyFormProperties>({
		});

	}

	export interface BatchGetAutomationRulesPostBody {

		/**
		 * A list of rule ARNs to get details for.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 100
		 */
		AutomationRulesArns: Array<string>;
	}
	export interface BatchGetAutomationRulesPostBodyFormProperties {
	}
	export function CreateBatchGetAutomationRulesPostBodyFormGroup() {
		return new FormGroup<BatchGetAutomationRulesPostBodyFormProperties>({
		});

	}

	export interface BatchGetSecurityControlsPostBody {

		/**
		 * A list of security controls (identified with <code>SecurityControlId</code>, <code>SecurityControlArn</code>, or a mix of both parameters). The security control ID or Amazon Resource Name (ARN) is the same across standards.
		 * Required
		 */
		SecurityControlIds: Array<string>;
	}
	export interface BatchGetSecurityControlsPostBodyFormProperties {
	}
	export function CreateBatchGetSecurityControlsPostBodyFormGroup() {
		return new FormGroup<BatchGetSecurityControlsPostBodyFormProperties>({
		});

	}

	export interface BatchGetStandardsControlAssociationsPostBody {

		/**
		 * An array with one or more objects that includes a security control (identified with <code>SecurityControlId</code>, <code>SecurityControlArn</code>, or a mix of both parameters) and the Amazon Resource Name (ARN) of a standard. This field is used to query the enablement status of a control in a specified standard. The security control ID or ARN is the same across standards.
		 * Required
		 */
		StandardsControlAssociationIds: Array<StandardsControlAssociationId>;
	}
	export interface BatchGetStandardsControlAssociationsPostBodyFormProperties {
	}
	export function CreateBatchGetStandardsControlAssociationsPostBodyFormGroup() {
		return new FormGroup<BatchGetStandardsControlAssociationsPostBodyFormProperties>({
		});

	}

	export interface BatchImportFindingsPostBody {

		/**
		 * A list of findings to import. To successfully import a finding, it must follow the <a href="https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-findings-format.html">Amazon Web Services Security Finding Format</a>. Maximum of 100 findings per request.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 100
		 */
		Findings: Array<AwsSecurityFinding>;
	}
	export interface BatchImportFindingsPostBodyFormProperties {
	}
	export function CreateBatchImportFindingsPostBodyFormGroup() {
		return new FormGroup<BatchImportFindingsPostBodyFormProperties>({
		});

	}

	export interface BatchUpdateAutomationRulesPatchBody {

		/**
		 * An array of ARNs for the rules that are to be updated. Optionally, you can also include <code>RuleStatus</code> and <code>RuleOrder</code>.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 100
		 */
		UpdateAutomationRulesRequestItems: Array<UpdateAutomationRulesRequestItem>;
	}
	export interface BatchUpdateAutomationRulesPatchBodyFormProperties {
	}
	export function CreateBatchUpdateAutomationRulesPatchBodyFormGroup() {
		return new FormGroup<BatchUpdateAutomationRulesPatchBodyFormProperties>({
		});

	}

	export interface BatchUpdateFindingsPatchBody {

		/**
		 * <p>The list of findings to update. <code>BatchUpdateFindings</code> can be used to update up to 100 findings at a time.</p> <p>For each finding, the list provides the finding identifier and the ARN of the finding provider.</p>
		 * Required
		 */
		FindingIdentifiers: Array<AwsSecurityFindingIdentifier>;

		/** The updated note. */
		Note?: BatchUpdateFindingsPatchBodyNote;

		/** Updates to the severity information for a finding. */
		Severity?: BatchUpdateFindingsPatchBodySeverity;

		/** <p>Indicates the veracity of a finding.</p> <p>The available values for <code>VerificationState</code> are as follows.</p> <ul> <li> <p> <code>UNKNOWN</code> – The default disposition of a security finding</p> </li> <li> <p> <code>TRUE_POSITIVE</code> – The security finding is confirmed</p> </li> <li> <p> <code>FALSE_POSITIVE</code> – The security finding was determined to be a false alarm</p> </li> <li> <p> <code>BENIGN_POSITIVE</code> – A special case of <code>TRUE_POSITIVE</code> where the finding doesn't pose any threat, is expected, or both</p> </li> </ul> */
		VerificationState?: VerificationState | null;

		/**
		 * <p>The updated value for the finding confidence. Confidence is defined as the likelihood that a finding accurately identifies the behavior or issue that it was intended to identify.</p> <p>Confidence is scored on a 0-100 basis using a ratio scale, where 0 means zero percent confidence and 100 means 100 percent confidence.</p>
		 * Minimum: 0
		 * Maximum: 100
		 */
		Confidence?: number | null;

		/**
		 * <p>The updated value for the level of importance assigned to the resources associated with the findings.</p> <p>A score of 0 means that the underlying resources have no criticality, and a score of 100 is reserved for the most critical resources. </p>
		 * Minimum: 0
		 * Maximum: 100
		 */
		Criticality?: number | null;

		/** <p>One or more finding types in the format of namespace/category/classifier that classify a finding.</p> <p>Valid namespace values are as follows.</p> <ul> <li> <p>Software and Configuration Checks</p> </li> <li> <p>TTPs</p> </li> <li> <p>Effects</p> </li> <li> <p>Unusual Behaviors</p> </li> <li> <p>Sensitive Data Identifications </p> </li> </ul> */
		Types?: Array<string>;

		/** A list of name/value string pairs associated with the finding. These are custom, user-defined fields added to a finding. */
		UserDefinedFields?: {[id: string]: string };

		/** Used to update information about the investigation into the finding. */
		Workflow?: BatchUpdateFindingsPatchBodyWorkflow;

		/** A list of findings that are related to the updated findings. */
		RelatedFindings?: Array<RelatedFinding>;
	}
	export interface BatchUpdateFindingsPatchBodyFormProperties {

		/** <p>Indicates the veracity of a finding.</p> <p>The available values for <code>VerificationState</code> are as follows.</p> <ul> <li> <p> <code>UNKNOWN</code> – The default disposition of a security finding</p> </li> <li> <p> <code>TRUE_POSITIVE</code> – The security finding is confirmed</p> </li> <li> <p> <code>FALSE_POSITIVE</code> – The security finding was determined to be a false alarm</p> </li> <li> <p> <code>BENIGN_POSITIVE</code> – A special case of <code>TRUE_POSITIVE</code> where the finding doesn't pose any threat, is expected, or both</p> </li> </ul> */
		VerificationState: FormControl<VerificationState | null | undefined>,

		/**
		 * <p>The updated value for the finding confidence. Confidence is defined as the likelihood that a finding accurately identifies the behavior or issue that it was intended to identify.</p> <p>Confidence is scored on a 0-100 basis using a ratio scale, where 0 means zero percent confidence and 100 means 100 percent confidence.</p>
		 * Minimum: 0
		 * Maximum: 100
		 */
		Confidence: FormControl<number | null | undefined>,

		/**
		 * <p>The updated value for the level of importance assigned to the resources associated with the findings.</p> <p>A score of 0 means that the underlying resources have no criticality, and a score of 100 is reserved for the most critical resources. </p>
		 * Minimum: 0
		 * Maximum: 100
		 */
		Criticality: FormControl<number | null | undefined>,

		/** A list of name/value string pairs associated with the finding. These are custom, user-defined fields added to a finding. */
		UserDefinedFields: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateBatchUpdateFindingsPatchBodyFormGroup() {
		return new FormGroup<BatchUpdateFindingsPatchBodyFormProperties>({
			VerificationState: new FormControl<VerificationState | null | undefined>(undefined),
			Confidence: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(100)]),
			Criticality: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(100)]),
			UserDefinedFields: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface BatchUpdateFindingsPatchBodyNote {
		Text?: string;
		UpdatedBy?: string;
	}
	export interface BatchUpdateFindingsPatchBodyNoteFormProperties {
		Text: FormControl<string | null | undefined>,
		UpdatedBy: FormControl<string | null | undefined>,
	}
	export function CreateBatchUpdateFindingsPatchBodyNoteFormGroup() {
		return new FormGroup<BatchUpdateFindingsPatchBodyNoteFormProperties>({
			Text: new FormControl<string | null | undefined>(undefined),
			UpdatedBy: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BatchUpdateFindingsPatchBodySeverity {
		Normalized?: number | null;
		Product?: number | null;
		Label?: SeverityLabel;
	}
	export interface BatchUpdateFindingsPatchBodySeverityFormProperties {
		Normalized: FormControl<number | null | undefined>,
		Product: FormControl<number | null | undefined>,
		Label: FormControl<SeverityLabel | null | undefined>,
	}
	export function CreateBatchUpdateFindingsPatchBodySeverityFormGroup() {
		return new FormGroup<BatchUpdateFindingsPatchBodySeverityFormProperties>({
			Normalized: new FormControl<number | null | undefined>(undefined),
			Product: new FormControl<number | null | undefined>(undefined),
			Label: new FormControl<SeverityLabel | null | undefined>(undefined),
		});

	}

	export interface BatchUpdateFindingsPatchBodyWorkflow {
		Status?: WorkflowStatus;
	}
	export interface BatchUpdateFindingsPatchBodyWorkflowFormProperties {
		Status: FormControl<WorkflowStatus | null | undefined>,
	}
	export function CreateBatchUpdateFindingsPatchBodyWorkflowFormGroup() {
		return new FormGroup<BatchUpdateFindingsPatchBodyWorkflowFormProperties>({
			Status: new FormControl<WorkflowStatus | null | undefined>(undefined),
		});

	}

	export interface BatchUpdateStandardsControlAssociationsPatchBody {

		/**
		 * Updates the enablement status of a security control in a specified standard.
		 * Required
		 */
		StandardsControlAssociationUpdates: Array<StandardsControlAssociationUpdate>;
	}
	export interface BatchUpdateStandardsControlAssociationsPatchBodyFormProperties {
	}
	export function CreateBatchUpdateStandardsControlAssociationsPatchBodyFormGroup() {
		return new FormGroup<BatchUpdateStandardsControlAssociationsPatchBodyFormProperties>({
		});

	}

	export interface CreateActionTargetPostBody {

		/**
		 * The name of the custom action target. Can contain up to 20 characters.
		 * Required
		 */
		Name: string;

		/**
		 * The description for the custom action target.
		 * Required
		 */
		Description: string;

		/**
		 * The ID for the custom action target. Can contain up to 20 alphanumeric characters.
		 * Required
		 */
		Id: string;
	}
	export interface CreateActionTargetPostBodyFormProperties {

		/**
		 * The name of the custom action target. Can contain up to 20 characters.
		 * Required
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * The description for the custom action target.
		 * Required
		 */
		Description: FormControl<string | null | undefined>,

		/**
		 * The ID for the custom action target. Can contain up to 20 alphanumeric characters.
		 * Required
		 */
		Id: FormControl<string | null | undefined>,
	}
	export function CreateCreateActionTargetPostBodyFormGroup() {
		return new FormGroup<CreateActionTargetPostBodyFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('.*\S.*')]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('.*\S.*')]),
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('.*\S.*')]),
		});

	}

	export interface CreateAutomationRulePostBody {

		/** User-defined tags that help you label the purpose of a rule. */
		Tags?: {[id: string]: string };

		/** Whether the rule is active after it is created. If this parameter is equal to <code>ENABLED</code>, Security Hub starts applying the rule to findings and finding updates after the rule is created. To change the value of this parameter after creating a rule, use <a href="https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_BatchUpdateAutomationRules.html"> <code>BatchUpdateAutomationRules</code> </a>. */
		RuleStatus?: RuleStatus | null;

		/**
		 * An integer ranging from 1 to 1000 that represents the order in which the rule action is applied to findings. Security Hub applies rules with lower values for this parameter first.
		 * Required
		 * Minimum: 1
		 * Maximum: 1000
		 */
		RuleOrder: number;

		/**
		 * The name of the rule.
		 * Required
		 */
		RuleName: string;

		/**
		 * A description of the rule.
		 * Required
		 */
		Description: string;

		/** Specifies whether a rule is the last to be applied with respect to a finding that matches the rule criteria. This is useful when a finding matches the criteria for multiple rules, and each rule has different actions. If a rule is terminal, Security Hub applies the rule action to a finding that matches the rule criteria and doesn't evaluate other rules for the finding. By default, a rule isn't terminal. */
		IsTerminal?: boolean | null;

		/**
		 * The criteria that determine which findings a rule applies to.
		 * Required
		 */
		Criteria: CreateAutomationRulePostBodyCriteria;

		/**
		 * One or more actions to update finding fields if a finding matches the conditions specified in <code>Criteria</code>.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 1
		 */
		Actions: Array<AutomationRulesAction>;
	}
	export interface CreateAutomationRulePostBodyFormProperties {

		/** User-defined tags that help you label the purpose of a rule. */
		Tags: FormControl<{[id: string]: string } | null | undefined>,

		/** Whether the rule is active after it is created. If this parameter is equal to <code>ENABLED</code>, Security Hub starts applying the rule to findings and finding updates after the rule is created. To change the value of this parameter after creating a rule, use <a href="https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_BatchUpdateAutomationRules.html"> <code>BatchUpdateAutomationRules</code> </a>. */
		RuleStatus: FormControl<RuleStatus | null | undefined>,

		/**
		 * An integer ranging from 1 to 1000 that represents the order in which the rule action is applied to findings. Security Hub applies rules with lower values for this parameter first.
		 * Required
		 * Minimum: 1
		 * Maximum: 1000
		 */
		RuleOrder: FormControl<number | null | undefined>,

		/**
		 * The name of the rule.
		 * Required
		 */
		RuleName: FormControl<string | null | undefined>,

		/**
		 * A description of the rule.
		 * Required
		 */
		Description: FormControl<string | null | undefined>,

		/** Specifies whether a rule is the last to be applied with respect to a finding that matches the rule criteria. This is useful when a finding matches the criteria for multiple rules, and each rule has different actions. If a rule is terminal, Security Hub applies the rule action to a finding that matches the rule criteria and doesn't evaluate other rules for the finding. By default, a rule isn't terminal. */
		IsTerminal: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateAutomationRulePostBodyFormGroup() {
		return new FormGroup<CreateAutomationRulePostBodyFormProperties>({
			Tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			RuleStatus: new FormControl<RuleStatus | null | undefined>(undefined),
			RuleOrder: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(1), Validators.max(1000)]),
			RuleName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('.*\S.*')]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('.*\S.*')]),
			IsTerminal: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface CreateAutomationRulePostBodyCriteria {
		ProductArn?: Array<StringFilter>;
		AwsAccountId?: Array<StringFilter>;
		Id?: Array<StringFilter>;
		GeneratorId?: Array<StringFilter>;
		Type?: Array<StringFilter>;
		FirstObservedAt?: Array<DateFilter>;
		LastObservedAt?: Array<DateFilter>;
		CreatedAt?: Array<DateFilter>;
		UpdatedAt?: Array<DateFilter>;
		Confidence?: Array<NumberFilter>;
		Criticality?: Array<NumberFilter>;
		Title?: Array<StringFilter>;
		Description?: Array<StringFilter>;
		SourceUrl?: Array<StringFilter>;
		ProductName?: Array<StringFilter>;
		CompanyName?: Array<StringFilter>;
		SeverityLabel?: Array<StringFilter>;
		ResourceType?: Array<StringFilter>;
		ResourceId?: Array<StringFilter>;
		ResourcePartition?: Array<StringFilter>;
		ResourceRegion?: Array<StringFilter>;
		ResourceTags?: Array<MapFilter>;
		ResourceDetailsOther?: Array<MapFilter>;
		ComplianceStatus?: Array<StringFilter>;
		ComplianceSecurityControlId?: Array<StringFilter>;
		ComplianceAssociatedStandardsId?: Array<StringFilter>;
		VerificationState?: Array<StringFilter>;
		WorkflowStatus?: Array<StringFilter>;
		RecordState?: Array<StringFilter>;
		RelatedFindingsProductArn?: Array<StringFilter>;
		RelatedFindingsId?: Array<StringFilter>;
		NoteText?: Array<StringFilter>;
		NoteUpdatedAt?: Array<DateFilter>;
		NoteUpdatedBy?: Array<StringFilter>;
		UserDefinedFields?: Array<MapFilter>;
	}
	export interface CreateAutomationRulePostBodyCriteriaFormProperties {
	}
	export function CreateCreateAutomationRulePostBodyCriteriaFormGroup() {
		return new FormGroup<CreateAutomationRulePostBodyCriteriaFormProperties>({
		});

	}

	export interface CreateFindingAggregatorPostBody {

		/**
		 * <p>Indicates whether to aggregate findings from all of the available Regions in the current partition. Also determines whether to automatically aggregate findings from new Regions as Security Hub supports them and you opt into them.</p> <p>The selected option also determines how to use the Regions provided in the Regions list.</p> <p>The options are as follows:</p> <ul> <li> <p> <code>ALL_REGIONS</code> - Indicates to aggregate findings from all of the Regions where Security Hub is enabled. When you choose this option, Security Hub also automatically aggregates findings from new Regions as Security Hub supports them and you opt into them. </p> </li> <li> <p> <code>ALL_REGIONS_EXCEPT_SPECIFIED</code> - Indicates to aggregate findings from all of the Regions where Security Hub is enabled, except for the Regions listed in the <code>Regions</code> parameter. When you choose this option, Security Hub also automatically aggregates findings from new Regions as Security Hub supports them and you opt into them. </p> </li> <li> <p> <code>SPECIFIED_REGIONS</code> - Indicates to aggregate findings only from the Regions listed in the <code>Regions</code> parameter. Security Hub does not automatically aggregate findings from new Regions. </p> </li> </ul>
		 * Required
		 */
		RegionLinkingMode: string;

		/** <p>If <code>RegionLinkingMode</code> is <code>ALL_REGIONS_EXCEPT_SPECIFIED</code>, then this is a space-separated list of Regions that do not aggregate findings to the aggregation Region.</p> <p>If <code>RegionLinkingMode</code> is <code>SPECIFIED_REGIONS</code>, then this is a space-separated list of Regions that do aggregate findings to the aggregation Region. </p> */
		Regions?: Array<string>;
	}
	export interface CreateFindingAggregatorPostBodyFormProperties {

		/**
		 * <p>Indicates whether to aggregate findings from all of the available Regions in the current partition. Also determines whether to automatically aggregate findings from new Regions as Security Hub supports them and you opt into them.</p> <p>The selected option also determines how to use the Regions provided in the Regions list.</p> <p>The options are as follows:</p> <ul> <li> <p> <code>ALL_REGIONS</code> - Indicates to aggregate findings from all of the Regions where Security Hub is enabled. When you choose this option, Security Hub also automatically aggregates findings from new Regions as Security Hub supports them and you opt into them. </p> </li> <li> <p> <code>ALL_REGIONS_EXCEPT_SPECIFIED</code> - Indicates to aggregate findings from all of the Regions where Security Hub is enabled, except for the Regions listed in the <code>Regions</code> parameter. When you choose this option, Security Hub also automatically aggregates findings from new Regions as Security Hub supports them and you opt into them. </p> </li> <li> <p> <code>SPECIFIED_REGIONS</code> - Indicates to aggregate findings only from the Regions listed in the <code>Regions</code> parameter. Security Hub does not automatically aggregate findings from new Regions. </p> </li> </ul>
		 * Required
		 */
		RegionLinkingMode: FormControl<string | null | undefined>,
	}
	export function CreateCreateFindingAggregatorPostBodyFormGroup() {
		return new FormGroup<CreateFindingAggregatorPostBodyFormProperties>({
			RegionLinkingMode: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('.*\S.*')]),
		});

	}

	export interface CreateInsightPostBody {

		/**
		 * The name of the custom insight to create.
		 * Required
		 */
		Name: string;

		/**
		 * <p>A collection of attributes that are applied to all active Security Hub-aggregated findings and that result in a subset of findings that are included in this insight.</p> <p>You can filter by up to 10 finding attributes. For each attribute, you can provide up to 20 filter values.</p>
		 * Required
		 */
		Filters: CreateInsightPostBodyFilters;

		/**
		 * The attribute used to group the findings for the insight. The grouping attribute identifies the type of item that the insight applies to. For example, if an insight is grouped by resource identifier, then the insight produces a list of resource identifiers.
		 * Required
		 */
		GroupByAttribute: string;
	}
	export interface CreateInsightPostBodyFormProperties {

		/**
		 * The name of the custom insight to create.
		 * Required
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * The attribute used to group the findings for the insight. The grouping attribute identifies the type of item that the insight applies to. For example, if an insight is grouped by resource identifier, then the insight produces a list of resource identifiers.
		 * Required
		 */
		GroupByAttribute: FormControl<string | null | undefined>,
	}
	export function CreateCreateInsightPostBodyFormGroup() {
		return new FormGroup<CreateInsightPostBodyFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('.*\S.*')]),
			GroupByAttribute: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('.*\S.*')]),
		});

	}

	export interface CreateInsightPostBodyFilters {
		ProductArn?: Array<StringFilter>;
		AwsAccountId?: Array<StringFilter>;
		Id?: Array<StringFilter>;
		GeneratorId?: Array<StringFilter>;
		Region?: Array<StringFilter>;
		Type?: Array<StringFilter>;
		FirstObservedAt?: Array<DateFilter>;
		LastObservedAt?: Array<DateFilter>;
		CreatedAt?: Array<DateFilter>;
		UpdatedAt?: Array<DateFilter>;
		SeverityProduct?: Array<NumberFilter>;
		SeverityNormalized?: Array<NumberFilter>;
		SeverityLabel?: Array<StringFilter>;
		Confidence?: Array<NumberFilter>;
		Criticality?: Array<NumberFilter>;
		Title?: Array<StringFilter>;
		Description?: Array<StringFilter>;
		RecommendationText?: Array<StringFilter>;
		SourceUrl?: Array<StringFilter>;
		ProductFields?: Array<MapFilter>;
		ProductName?: Array<StringFilter>;
		CompanyName?: Array<StringFilter>;
		UserDefinedFields?: Array<MapFilter>;
		MalwareName?: Array<StringFilter>;
		MalwareType?: Array<StringFilter>;
		MalwarePath?: Array<StringFilter>;
		MalwareState?: Array<StringFilter>;
		NetworkDirection?: Array<StringFilter>;
		NetworkProtocol?: Array<StringFilter>;
		NetworkSourceIpV4?: Array<IpFilter>;
		NetworkSourceIpV6?: Array<IpFilter>;
		NetworkSourcePort?: Array<NumberFilter>;
		NetworkSourceDomain?: Array<StringFilter>;
		NetworkSourceMac?: Array<StringFilter>;
		NetworkDestinationIpV4?: Array<IpFilter>;
		NetworkDestinationIpV6?: Array<IpFilter>;
		NetworkDestinationPort?: Array<NumberFilter>;
		NetworkDestinationDomain?: Array<StringFilter>;
		ProcessName?: Array<StringFilter>;
		ProcessPath?: Array<StringFilter>;
		ProcessPid?: Array<NumberFilter>;
		ProcessParentPid?: Array<NumberFilter>;
		ProcessLaunchedAt?: Array<DateFilter>;
		ProcessTerminatedAt?: Array<DateFilter>;
		ThreatIntelIndicatorType?: Array<StringFilter>;
		ThreatIntelIndicatorValue?: Array<StringFilter>;
		ThreatIntelIndicatorCategory?: Array<StringFilter>;
		ThreatIntelIndicatorLastObservedAt?: Array<DateFilter>;
		ThreatIntelIndicatorSource?: Array<StringFilter>;
		ThreatIntelIndicatorSourceUrl?: Array<StringFilter>;
		ResourceType?: Array<StringFilter>;
		ResourceId?: Array<StringFilter>;
		ResourcePartition?: Array<StringFilter>;
		ResourceRegion?: Array<StringFilter>;
		ResourceTags?: Array<MapFilter>;
		ResourceAwsEc2InstanceType?: Array<StringFilter>;
		ResourceAwsEc2InstanceImageId?: Array<StringFilter>;
		ResourceAwsEc2InstanceIpV4Addresses?: Array<IpFilter>;
		ResourceAwsEc2InstanceIpV6Addresses?: Array<IpFilter>;
		ResourceAwsEc2InstanceKeyName?: Array<StringFilter>;
		ResourceAwsEc2InstanceIamInstanceProfileArn?: Array<StringFilter>;
		ResourceAwsEc2InstanceVpcId?: Array<StringFilter>;
		ResourceAwsEc2InstanceSubnetId?: Array<StringFilter>;
		ResourceAwsEc2InstanceLaunchedAt?: Array<DateFilter>;
		ResourceAwsS3BucketOwnerId?: Array<StringFilter>;
		ResourceAwsS3BucketOwnerName?: Array<StringFilter>;
		ResourceAwsIamAccessKeyUserName?: Array<StringFilter>;
		ResourceAwsIamAccessKeyPrincipalName?: Array<StringFilter>;
		ResourceAwsIamAccessKeyStatus?: Array<StringFilter>;
		ResourceAwsIamAccessKeyCreatedAt?: Array<DateFilter>;
		ResourceAwsIamUserUserName?: Array<StringFilter>;
		ResourceContainerName?: Array<StringFilter>;
		ResourceContainerImageId?: Array<StringFilter>;
		ResourceContainerImageName?: Array<StringFilter>;
		ResourceContainerLaunchedAt?: Array<DateFilter>;
		ResourceDetailsOther?: Array<MapFilter>;
		ComplianceStatus?: Array<StringFilter>;
		VerificationState?: Array<StringFilter>;
		WorkflowState?: Array<StringFilter>;
		WorkflowStatus?: Array<StringFilter>;
		RecordState?: Array<StringFilter>;
		RelatedFindingsProductArn?: Array<StringFilter>;
		RelatedFindingsId?: Array<StringFilter>;
		NoteText?: Array<StringFilter>;
		NoteUpdatedAt?: Array<DateFilter>;
		NoteUpdatedBy?: Array<StringFilter>;
		Keyword?: Array<KeywordFilter>;
		FindingProviderFieldsConfidence?: Array<NumberFilter>;
		FindingProviderFieldsCriticality?: Array<NumberFilter>;
		FindingProviderFieldsRelatedFindingsId?: Array<StringFilter>;
		FindingProviderFieldsRelatedFindingsProductArn?: Array<StringFilter>;
		FindingProviderFieldsSeverityLabel?: Array<StringFilter>;
		FindingProviderFieldsSeverityOriginal?: Array<StringFilter>;
		FindingProviderFieldsTypes?: Array<StringFilter>;
		Sample?: Array<BooleanFilter>;
		ComplianceSecurityControlId?: Array<StringFilter>;
		ComplianceAssociatedStandardsId?: Array<StringFilter>;
	}
	export interface CreateInsightPostBodyFiltersFormProperties {
	}
	export function CreateCreateInsightPostBodyFiltersFormGroup() {
		return new FormGroup<CreateInsightPostBodyFiltersFormProperties>({
		});

	}

	export interface CreateMembersPostBody {

		/**
		 * The list of accounts to associate with the Security Hub administrator account. For each account, the list includes the account ID and optionally the email address.
		 * Required
		 */
		AccountDetails: Array<AccountDetails>;
	}
	export interface CreateMembersPostBodyFormProperties {
	}
	export function CreateCreateMembersPostBodyFormGroup() {
		return new FormGroup<CreateMembersPostBodyFormProperties>({
		});

	}

	export interface DeclineInvitationsPostBody {

		/**
		 * The list of prospective member account IDs for which to decline an invitation.
		 * Required
		 */
		AccountIds: Array<string>;
	}
	export interface DeclineInvitationsPostBodyFormProperties {
	}
	export function CreateDeclineInvitationsPostBodyFormGroup() {
		return new FormGroup<DeclineInvitationsPostBodyFormProperties>({
		});

	}

	export interface UpdateActionTargetPatchBody {

		/** The updated name of the custom action target. */
		Name?: string | null;

		/** The updated description for the custom action target. */
		Description?: string | null;
	}
	export interface UpdateActionTargetPatchBodyFormProperties {

		/** The updated name of the custom action target. */
		Name: FormControl<string | null | undefined>,

		/** The updated description for the custom action target. */
		Description: FormControl<string | null | undefined>,
	}
	export function CreateUpdateActionTargetPatchBodyFormGroup() {
		return new FormGroup<UpdateActionTargetPatchBodyFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
		});

	}

	export interface UpdateInsightPatchBody {

		/** The updated name for the insight. */
		Name?: string | null;

		/** <p>A collection of attributes that are applied to all active Security Hub-aggregated findings and that result in a subset of findings that are included in this insight.</p> <p>You can filter by up to 10 finding attributes. For each attribute, you can provide up to 20 filter values.</p> */
		Filters?: UpdateInsightPatchBodyFilters;

		/** The updated <code>GroupBy</code> attribute that defines this insight. */
		GroupByAttribute?: string | null;
	}
	export interface UpdateInsightPatchBodyFormProperties {

		/** The updated name for the insight. */
		Name: FormControl<string | null | undefined>,

		/** The updated <code>GroupBy</code> attribute that defines this insight. */
		GroupByAttribute: FormControl<string | null | undefined>,
	}
	export function CreateUpdateInsightPatchBodyFormGroup() {
		return new FormGroup<UpdateInsightPatchBodyFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
			GroupByAttribute: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
		});

	}

	export interface UpdateInsightPatchBodyFilters {
		ProductArn?: Array<StringFilter>;
		AwsAccountId?: Array<StringFilter>;
		Id?: Array<StringFilter>;
		GeneratorId?: Array<StringFilter>;
		Region?: Array<StringFilter>;
		Type?: Array<StringFilter>;
		FirstObservedAt?: Array<DateFilter>;
		LastObservedAt?: Array<DateFilter>;
		CreatedAt?: Array<DateFilter>;
		UpdatedAt?: Array<DateFilter>;
		SeverityProduct?: Array<NumberFilter>;
		SeverityNormalized?: Array<NumberFilter>;
		SeverityLabel?: Array<StringFilter>;
		Confidence?: Array<NumberFilter>;
		Criticality?: Array<NumberFilter>;
		Title?: Array<StringFilter>;
		Description?: Array<StringFilter>;
		RecommendationText?: Array<StringFilter>;
		SourceUrl?: Array<StringFilter>;
		ProductFields?: Array<MapFilter>;
		ProductName?: Array<StringFilter>;
		CompanyName?: Array<StringFilter>;
		UserDefinedFields?: Array<MapFilter>;
		MalwareName?: Array<StringFilter>;
		MalwareType?: Array<StringFilter>;
		MalwarePath?: Array<StringFilter>;
		MalwareState?: Array<StringFilter>;
		NetworkDirection?: Array<StringFilter>;
		NetworkProtocol?: Array<StringFilter>;
		NetworkSourceIpV4?: Array<IpFilter>;
		NetworkSourceIpV6?: Array<IpFilter>;
		NetworkSourcePort?: Array<NumberFilter>;
		NetworkSourceDomain?: Array<StringFilter>;
		NetworkSourceMac?: Array<StringFilter>;
		NetworkDestinationIpV4?: Array<IpFilter>;
		NetworkDestinationIpV6?: Array<IpFilter>;
		NetworkDestinationPort?: Array<NumberFilter>;
		NetworkDestinationDomain?: Array<StringFilter>;
		ProcessName?: Array<StringFilter>;
		ProcessPath?: Array<StringFilter>;
		ProcessPid?: Array<NumberFilter>;
		ProcessParentPid?: Array<NumberFilter>;
		ProcessLaunchedAt?: Array<DateFilter>;
		ProcessTerminatedAt?: Array<DateFilter>;
		ThreatIntelIndicatorType?: Array<StringFilter>;
		ThreatIntelIndicatorValue?: Array<StringFilter>;
		ThreatIntelIndicatorCategory?: Array<StringFilter>;
		ThreatIntelIndicatorLastObservedAt?: Array<DateFilter>;
		ThreatIntelIndicatorSource?: Array<StringFilter>;
		ThreatIntelIndicatorSourceUrl?: Array<StringFilter>;
		ResourceType?: Array<StringFilter>;
		ResourceId?: Array<StringFilter>;
		ResourcePartition?: Array<StringFilter>;
		ResourceRegion?: Array<StringFilter>;
		ResourceTags?: Array<MapFilter>;
		ResourceAwsEc2InstanceType?: Array<StringFilter>;
		ResourceAwsEc2InstanceImageId?: Array<StringFilter>;
		ResourceAwsEc2InstanceIpV4Addresses?: Array<IpFilter>;
		ResourceAwsEc2InstanceIpV6Addresses?: Array<IpFilter>;
		ResourceAwsEc2InstanceKeyName?: Array<StringFilter>;
		ResourceAwsEc2InstanceIamInstanceProfileArn?: Array<StringFilter>;
		ResourceAwsEc2InstanceVpcId?: Array<StringFilter>;
		ResourceAwsEc2InstanceSubnetId?: Array<StringFilter>;
		ResourceAwsEc2InstanceLaunchedAt?: Array<DateFilter>;
		ResourceAwsS3BucketOwnerId?: Array<StringFilter>;
		ResourceAwsS3BucketOwnerName?: Array<StringFilter>;
		ResourceAwsIamAccessKeyUserName?: Array<StringFilter>;
		ResourceAwsIamAccessKeyPrincipalName?: Array<StringFilter>;
		ResourceAwsIamAccessKeyStatus?: Array<StringFilter>;
		ResourceAwsIamAccessKeyCreatedAt?: Array<DateFilter>;
		ResourceAwsIamUserUserName?: Array<StringFilter>;
		ResourceContainerName?: Array<StringFilter>;
		ResourceContainerImageId?: Array<StringFilter>;
		ResourceContainerImageName?: Array<StringFilter>;
		ResourceContainerLaunchedAt?: Array<DateFilter>;
		ResourceDetailsOther?: Array<MapFilter>;
		ComplianceStatus?: Array<StringFilter>;
		VerificationState?: Array<StringFilter>;
		WorkflowState?: Array<StringFilter>;
		WorkflowStatus?: Array<StringFilter>;
		RecordState?: Array<StringFilter>;
		RelatedFindingsProductArn?: Array<StringFilter>;
		RelatedFindingsId?: Array<StringFilter>;
		NoteText?: Array<StringFilter>;
		NoteUpdatedAt?: Array<DateFilter>;
		NoteUpdatedBy?: Array<StringFilter>;
		Keyword?: Array<KeywordFilter>;
		FindingProviderFieldsConfidence?: Array<NumberFilter>;
		FindingProviderFieldsCriticality?: Array<NumberFilter>;
		FindingProviderFieldsRelatedFindingsId?: Array<StringFilter>;
		FindingProviderFieldsRelatedFindingsProductArn?: Array<StringFilter>;
		FindingProviderFieldsSeverityLabel?: Array<StringFilter>;
		FindingProviderFieldsSeverityOriginal?: Array<StringFilter>;
		FindingProviderFieldsTypes?: Array<StringFilter>;
		Sample?: Array<BooleanFilter>;
		ComplianceSecurityControlId?: Array<StringFilter>;
		ComplianceAssociatedStandardsId?: Array<StringFilter>;
	}
	export interface UpdateInsightPatchBodyFiltersFormProperties {
	}
	export function CreateUpdateInsightPatchBodyFiltersFormGroup() {
		return new FormGroup<UpdateInsightPatchBodyFiltersFormProperties>({
		});

	}

	export interface DeleteInvitationsPostBody {

		/**
		 * The list of member account IDs that received the invitations you want to delete.
		 * Required
		 */
		AccountIds: Array<string>;
	}
	export interface DeleteInvitationsPostBodyFormProperties {
	}
	export function CreateDeleteInvitationsPostBodyFormGroup() {
		return new FormGroup<DeleteInvitationsPostBodyFormProperties>({
		});

	}

	export interface DeleteMembersPostBody {

		/**
		 * The list of account IDs for the member accounts to delete.
		 * Required
		 */
		AccountIds: Array<string>;
	}
	export interface DeleteMembersPostBodyFormProperties {
	}
	export function CreateDeleteMembersPostBodyFormGroup() {
		return new FormGroup<DeleteMembersPostBodyFormProperties>({
		});

	}

	export interface DescribeActionTargetsPostBody {

		/** A list of custom action target ARNs for the custom action targets to retrieve. */
		ActionTargetArns?: Array<string>;

		/** <p>The token that is required for pagination. On your first call to the <code>DescribeActionTargets</code> operation, set the value of this parameter to <code>NULL</code>.</p> <p>For subsequent calls to the operation, to continue listing data, set the value of this parameter to the value returned from the previous response.</p> */
		NextToken?: string | null;

		/**
		 * The maximum number of results to return.
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults?: number | null;
	}
	export interface DescribeActionTargetsPostBodyFormProperties {

		/** <p>The token that is required for pagination. On your first call to the <code>DescribeActionTargets</code> operation, set the value of this parameter to <code>NULL</code>.</p> <p>For subsequent calls to the operation, to continue listing data, set the value of this parameter to the value returned from the previous response.</p> */
		NextToken: FormControl<string | null | undefined>,

		/**
		 * The maximum number of results to return.
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateDescribeActionTargetsPostBodyFormGroup() {
		return new FormGroup<DescribeActionTargetsPostBodyFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
		});

	}

	export interface EnableSecurityHubPostBody {

		/** The tags to add to the hub resource when you enable Security Hub. */
		Tags?: {[id: string]: string };

		/** Whether to enable the security standards that Security Hub has designated as automatically enabled. If you do not provide a value for <code>EnableDefaultStandards</code>, it is set to <code>true</code>. To not enable the automatically enabled standards, set <code>EnableDefaultStandards</code> to <code>false</code>. */
		EnableDefaultStandards?: boolean | null;

		/** <p>This field, used when enabling Security Hub, specifies whether the calling account has consolidated control findings turned on. If the value for this field is set to <code>SECURITY_CONTROL</code>, Security Hub generates a single finding for a control check even when the check applies to multiple enabled standards.</p> <p>If the value for this field is set to <code>STANDARD_CONTROL</code>, Security Hub generates separate findings for a control check when the check applies to multiple enabled standards.</p> <p>The value for this field in a member account matches the value in the administrator account. For accounts that aren't part of an organization, the default value of this field is <code>SECURITY_CONTROL</code> if you enabled Security Hub on or after February 23, 2023.</p> */
		ControlFindingGenerator?: ControlFindingGenerator | null;
	}
	export interface EnableSecurityHubPostBodyFormProperties {

		/** The tags to add to the hub resource when you enable Security Hub. */
		Tags: FormControl<{[id: string]: string } | null | undefined>,

		/** Whether to enable the security standards that Security Hub has designated as automatically enabled. If you do not provide a value for <code>EnableDefaultStandards</code>, it is set to <code>true</code>. To not enable the automatically enabled standards, set <code>EnableDefaultStandards</code> to <code>false</code>. */
		EnableDefaultStandards: FormControl<boolean | null | undefined>,

		/** <p>This field, used when enabling Security Hub, specifies whether the calling account has consolidated control findings turned on. If the value for this field is set to <code>SECURITY_CONTROL</code>, Security Hub generates a single finding for a control check even when the check applies to multiple enabled standards.</p> <p>If the value for this field is set to <code>STANDARD_CONTROL</code>, Security Hub generates separate findings for a control check when the check applies to multiple enabled standards.</p> <p>The value for this field in a member account matches the value in the administrator account. For accounts that aren't part of an organization, the default value of this field is <code>SECURITY_CONTROL</code> if you enabled Security Hub on or after February 23, 2023.</p> */
		ControlFindingGenerator: FormControl<ControlFindingGenerator | null | undefined>,
	}
	export function CreateEnableSecurityHubPostBodyFormGroup() {
		return new FormGroup<EnableSecurityHubPostBodyFormProperties>({
			Tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			EnableDefaultStandards: new FormControl<boolean | null | undefined>(undefined),
			ControlFindingGenerator: new FormControl<ControlFindingGenerator | null | undefined>(undefined),
		});

	}

	export interface UpdateSecurityHubConfigurationPatchBody {

		/** <p>Whether to automatically enable new controls when they are added to standards that are enabled.</p> <p>By default, this is set to <code>true</code>, and new controls are enabled automatically. To not automatically enable new controls, set this to <code>false</code>. </p> */
		AutoEnableControls?: boolean | null;

		/** <p>Updates whether the calling account has consolidated control findings turned on. If the value for this field is set to <code>SECURITY_CONTROL</code>, Security Hub generates a single finding for a control check even when the check applies to multiple enabled standards.</p> <p>If the value for this field is set to <code>STANDARD_CONTROL</code>, Security Hub generates separate findings for a control check when the check applies to multiple enabled standards.</p> <p>For accounts that are part of an organization, this value can only be updated in the administrator account.</p> */
		ControlFindingGenerator?: ControlFindingGenerator | null;
	}
	export interface UpdateSecurityHubConfigurationPatchBodyFormProperties {

		/** <p>Whether to automatically enable new controls when they are added to standards that are enabled.</p> <p>By default, this is set to <code>true</code>, and new controls are enabled automatically. To not automatically enable new controls, set this to <code>false</code>. </p> */
		AutoEnableControls: FormControl<boolean | null | undefined>,

		/** <p>Updates whether the calling account has consolidated control findings turned on. If the value for this field is set to <code>SECURITY_CONTROL</code>, Security Hub generates a single finding for a control check even when the check applies to multiple enabled standards.</p> <p>If the value for this field is set to <code>STANDARD_CONTROL</code>, Security Hub generates separate findings for a control check when the check applies to multiple enabled standards.</p> <p>For accounts that are part of an organization, this value can only be updated in the administrator account.</p> */
		ControlFindingGenerator: FormControl<ControlFindingGenerator | null | undefined>,
	}
	export function CreateUpdateSecurityHubConfigurationPatchBodyFormGroup() {
		return new FormGroup<UpdateSecurityHubConfigurationPatchBodyFormProperties>({
			AutoEnableControls: new FormControl<boolean | null | undefined>(undefined),
			ControlFindingGenerator: new FormControl<ControlFindingGenerator | null | undefined>(undefined),
		});

	}

	export interface UpdateOrganizationConfigurationPostBody {

		/**
		 * <p>Whether to automatically enable Security Hub for new accounts in the organization.</p> <p>By default, this is <code>false</code>, and new accounts are not added automatically.</p> <p>To automatically enable Security Hub for new accounts, set this to <code>true</code>.</p>
		 * Required
		 */
		AutoEnable: boolean;

		/** <p>Whether to automatically enable Security Hub <a href="https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-standards-enable-disable.html">default standards</a> for new member accounts in the organization.</p> <p>By default, this parameter is equal to <code>DEFAULT</code>, and new member accounts are automatically enabled with default Security Hub standards.</p> <p>To opt out of enabling default standards for new member accounts, set this parameter equal to <code>NONE</code>.</p> */
		AutoEnableStandards?: AutoEnableStandards | null;
	}
	export interface UpdateOrganizationConfigurationPostBodyFormProperties {

		/**
		 * <p>Whether to automatically enable Security Hub for new accounts in the organization.</p> <p>By default, this is <code>false</code>, and new accounts are not added automatically.</p> <p>To automatically enable Security Hub for new accounts, set this to <code>true</code>.</p>
		 * Required
		 */
		AutoEnable: FormControl<boolean | null | undefined>,

		/** <p>Whether to automatically enable Security Hub <a href="https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-standards-enable-disable.html">default standards</a> for new member accounts in the organization.</p> <p>By default, this parameter is equal to <code>DEFAULT</code>, and new member accounts are automatically enabled with default Security Hub standards.</p> <p>To opt out of enabling default standards for new member accounts, set this parameter equal to <code>NONE</code>.</p> */
		AutoEnableStandards: FormControl<AutoEnableStandards | null | undefined>,
	}
	export function CreateUpdateOrganizationConfigurationPostBodyFormGroup() {
		return new FormGroup<UpdateOrganizationConfigurationPostBodyFormProperties>({
			AutoEnable: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			AutoEnableStandards: new FormControl<AutoEnableStandards | null | undefined>(undefined),
		});

	}

	export interface DisableOrganizationAdminAccountPostBody {

		/**
		 * The Amazon Web Services account identifier of the Security Hub administrator account.
		 * Required
		 */
		AdminAccountId: string;
	}
	export interface DisableOrganizationAdminAccountPostBodyFormProperties {

		/**
		 * The Amazon Web Services account identifier of the Security Hub administrator account.
		 * Required
		 */
		AdminAccountId: FormControl<string | null | undefined>,
	}
	export function CreateDisableOrganizationAdminAccountPostBodyFormGroup() {
		return new FormGroup<DisableOrganizationAdminAccountPostBodyFormProperties>({
			AdminAccountId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('.*\S.*')]),
		});

	}

	export interface DisassociateMembersPostBody {

		/**
		 * The account IDs of the member accounts to disassociate from the administrator account.
		 * Required
		 */
		AccountIds: Array<string>;
	}
	export interface DisassociateMembersPostBodyFormProperties {
	}
	export function CreateDisassociateMembersPostBodyFormGroup() {
		return new FormGroup<DisassociateMembersPostBodyFormProperties>({
		});

	}

	export interface EnableImportFindingsForProductPostBody {

		/**
		 * The ARN of the product to enable the integration for.
		 * Required
		 */
		ProductArn: string;
	}
	export interface EnableImportFindingsForProductPostBodyFormProperties {

		/**
		 * The ARN of the product to enable the integration for.
		 * Required
		 */
		ProductArn: FormControl<string | null | undefined>,
	}
	export function CreateEnableImportFindingsForProductPostBodyFormGroup() {
		return new FormGroup<EnableImportFindingsForProductPostBodyFormProperties>({
			ProductArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('.*\S.*')]),
		});

	}

	export interface EnableOrganizationAdminAccountPostBody {

		/**
		 * The Amazon Web Services account identifier of the account to designate as the Security Hub administrator account.
		 * Required
		 */
		AdminAccountId: string;
	}
	export interface EnableOrganizationAdminAccountPostBodyFormProperties {

		/**
		 * The Amazon Web Services account identifier of the account to designate as the Security Hub administrator account.
		 * Required
		 */
		AdminAccountId: FormControl<string | null | undefined>,
	}
	export function CreateEnableOrganizationAdminAccountPostBodyFormGroup() {
		return new FormGroup<EnableOrganizationAdminAccountPostBodyFormProperties>({
			AdminAccountId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('.*\S.*')]),
		});

	}

	export interface GetEnabledStandardsPostBody {

		/**
		 * The list of the standards subscription ARNs for the standards to retrieve.
		 * Minimum items: 1
		 * Maximum items: 25
		 */
		StandardsSubscriptionArns?: Array<string>;

		/** <p>The token that is required for pagination. On your first call to the <code>GetEnabledStandards</code> operation, set the value of this parameter to <code>NULL</code>.</p> <p>For subsequent calls to the operation, to continue listing data, set the value of this parameter to the value returned from the previous response.</p> */
		NextToken?: string | null;

		/**
		 * The maximum number of results to return in the response.
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults?: number | null;
	}
	export interface GetEnabledStandardsPostBodyFormProperties {

		/** <p>The token that is required for pagination. On your first call to the <code>GetEnabledStandards</code> operation, set the value of this parameter to <code>NULL</code>.</p> <p>For subsequent calls to the operation, to continue listing data, set the value of this parameter to the value returned from the previous response.</p> */
		NextToken: FormControl<string | null | undefined>,

		/**
		 * The maximum number of results to return in the response.
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateGetEnabledStandardsPostBodyFormGroup() {
		return new FormGroup<GetEnabledStandardsPostBodyFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
		});

	}

	export interface GetFindingHistoryPostBody {

		/**
		 * Identifies which finding to get the finding history for.
		 * Required
		 */
		FindingIdentifier: GetFindingHistoryPostBodyFindingIdentifier;

		/** <p> An ISO 8601-formatted timestamp that indicates the start time of the requested finding history. A correctly formatted example is <code>2020-05-21T20:16:34.724Z</code>. The value cannot contain spaces, and date and time should be separated by <code>T</code>. For more information, see <a href="https://www.rfc-editor.org/rfc/rfc3339#section-5.6">RFC 3339 section 5.6, Internet Date/Time Format</a>.</p> <p>If you provide values for both <code>StartTime</code> and <code>EndTime</code>, Security Hub returns finding history for the specified time period. If you provide a value for <code>StartTime</code> but not for <code>EndTime</code>, Security Hub returns finding history from the <code>StartTime</code> to the time at which the API is called. If you provide a value for <code>EndTime</code> but not for <code>StartTime</code>, Security Hub returns finding history from the <a href="https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_AwsSecurityFindingFilters.html#securityhub-Type-AwsSecurityFindingFilters-CreatedAt">CreatedAt</a> timestamp of the finding to the <code>EndTime</code>. If you provide neither <code>StartTime</code> nor <code>EndTime</code>, Security Hub returns finding history from the CreatedAt timestamp of the finding to the time at which the API is called. In all of these scenarios, the response is limited to 100 results, and the maximum time period is limited to 90 days. </p> */
		StartTime?: Date | null;

		/** <p> An ISO 8601-formatted timestamp that indicates the end time of the requested finding history. A correctly formatted example is <code>2020-05-21T20:16:34.724Z</code>. The value cannot contain spaces, and date and time should be separated by <code>T</code>. For more information, see <a href="https://www.rfc-editor.org/rfc/rfc3339#section-5.6">RFC 3339 section 5.6, Internet Date/Time Format</a>.</p> <p>If you provide values for both <code>StartTime</code> and <code>EndTime</code>, Security Hub returns finding history for the specified time period. If you provide a value for <code>StartTime</code> but not for <code>EndTime</code>, Security Hub returns finding history from the <code>StartTime</code> to the time at which the API is called. If you provide a value for <code>EndTime</code> but not for <code>StartTime</code>, Security Hub returns finding history from the <a href="https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_AwsSecurityFindingFilters.html#securityhub-Type-AwsSecurityFindingFilters-CreatedAt">CreatedAt</a> timestamp of the finding to the <code>EndTime</code>. If you provide neither <code>StartTime</code> nor <code>EndTime</code>, Security Hub returns finding history from the CreatedAt timestamp of the finding to the time at which the API is called. In all of these scenarios, the response is limited to 100 results, and the maximum time period is limited to 90 days.</p> */
		EndTime?: Date | null;

		/** A token for pagination purposes. Provide <code>NULL</code> as the initial value. In subsequent requests, provide the token included in the response to get up to an additional 100 results of finding history. If you don’t provide <code>NextToken</code>, Security Hub returns up to 100 results of finding history for each request. */
		NextToken?: string | null;

		/**
		 * The maximum number of results to be returned. If you don’t provide it, Security Hub returns up to 100 results of finding history.
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults?: number | null;
	}
	export interface GetFindingHistoryPostBodyFormProperties {

		/** <p> An ISO 8601-formatted timestamp that indicates the start time of the requested finding history. A correctly formatted example is <code>2020-05-21T20:16:34.724Z</code>. The value cannot contain spaces, and date and time should be separated by <code>T</code>. For more information, see <a href="https://www.rfc-editor.org/rfc/rfc3339#section-5.6">RFC 3339 section 5.6, Internet Date/Time Format</a>.</p> <p>If you provide values for both <code>StartTime</code> and <code>EndTime</code>, Security Hub returns finding history for the specified time period. If you provide a value for <code>StartTime</code> but not for <code>EndTime</code>, Security Hub returns finding history from the <code>StartTime</code> to the time at which the API is called. If you provide a value for <code>EndTime</code> but not for <code>StartTime</code>, Security Hub returns finding history from the <a href="https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_AwsSecurityFindingFilters.html#securityhub-Type-AwsSecurityFindingFilters-CreatedAt">CreatedAt</a> timestamp of the finding to the <code>EndTime</code>. If you provide neither <code>StartTime</code> nor <code>EndTime</code>, Security Hub returns finding history from the CreatedAt timestamp of the finding to the time at which the API is called. In all of these scenarios, the response is limited to 100 results, and the maximum time period is limited to 90 days. </p> */
		StartTime: FormControl<Date | null | undefined>,

		/** <p> An ISO 8601-formatted timestamp that indicates the end time of the requested finding history. A correctly formatted example is <code>2020-05-21T20:16:34.724Z</code>. The value cannot contain spaces, and date and time should be separated by <code>T</code>. For more information, see <a href="https://www.rfc-editor.org/rfc/rfc3339#section-5.6">RFC 3339 section 5.6, Internet Date/Time Format</a>.</p> <p>If you provide values for both <code>StartTime</code> and <code>EndTime</code>, Security Hub returns finding history for the specified time period. If you provide a value for <code>StartTime</code> but not for <code>EndTime</code>, Security Hub returns finding history from the <code>StartTime</code> to the time at which the API is called. If you provide a value for <code>EndTime</code> but not for <code>StartTime</code>, Security Hub returns finding history from the <a href="https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_AwsSecurityFindingFilters.html#securityhub-Type-AwsSecurityFindingFilters-CreatedAt">CreatedAt</a> timestamp of the finding to the <code>EndTime</code>. If you provide neither <code>StartTime</code> nor <code>EndTime</code>, Security Hub returns finding history from the CreatedAt timestamp of the finding to the time at which the API is called. In all of these scenarios, the response is limited to 100 results, and the maximum time period is limited to 90 days.</p> */
		EndTime: FormControl<Date | null | undefined>,

		/** A token for pagination purposes. Provide <code>NULL</code> as the initial value. In subsequent requests, provide the token included in the response to get up to an additional 100 results of finding history. If you don’t provide <code>NextToken</code>, Security Hub returns up to 100 results of finding history for each request. */
		NextToken: FormControl<string | null | undefined>,

		/**
		 * The maximum number of results to be returned. If you don’t provide it, Security Hub returns up to 100 results of finding history.
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateGetFindingHistoryPostBodyFormGroup() {
		return new FormGroup<GetFindingHistoryPostBodyFormProperties>({
			StartTime: new FormControl<Date | null | undefined>(undefined),
			EndTime: new FormControl<Date | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
		});

	}

	export interface GetFindingHistoryPostBodyFindingIdentifier {
		Id?: string;
		ProductArn?: string;
	}
	export interface GetFindingHistoryPostBodyFindingIdentifierFormProperties {
		Id: FormControl<string | null | undefined>,
		ProductArn: FormControl<string | null | undefined>,
	}
	export function CreateGetFindingHistoryPostBodyFindingIdentifierFormGroup() {
		return new FormGroup<GetFindingHistoryPostBodyFindingIdentifierFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			ProductArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetFindingsPostBody {

		/** <p>A collection of attributes that are applied to all active Security Hub-aggregated findings and that result in a subset of findings that are included in this insight.</p> <p>You can filter by up to 10 finding attributes. For each attribute, you can provide up to 20 filter values.</p> */
		Filters?: GetFindingsPostBodyFilters;

		/** The finding attributes used to sort the list of returned findings. */
		SortCriteria?: Array<SortCriterion>;

		/** <p>The token that is required for pagination. On your first call to the <code>GetFindings</code> operation, set the value of this parameter to <code>NULL</code>.</p> <p>For subsequent calls to the operation, to continue listing data, set the value of this parameter to the value returned from the previous response.</p> */
		NextToken?: string | null;

		/**
		 * The maximum number of findings to return.
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults?: number | null;
	}
	export interface GetFindingsPostBodyFormProperties {

		/** <p>The token that is required for pagination. On your first call to the <code>GetFindings</code> operation, set the value of this parameter to <code>NULL</code>.</p> <p>For subsequent calls to the operation, to continue listing data, set the value of this parameter to the value returned from the previous response.</p> */
		NextToken: FormControl<string | null | undefined>,

		/**
		 * The maximum number of findings to return.
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateGetFindingsPostBodyFormGroup() {
		return new FormGroup<GetFindingsPostBodyFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
		});

	}

	export interface GetFindingsPostBodyFilters {
		ProductArn?: Array<StringFilter>;
		AwsAccountId?: Array<StringFilter>;
		Id?: Array<StringFilter>;
		GeneratorId?: Array<StringFilter>;
		Region?: Array<StringFilter>;
		Type?: Array<StringFilter>;
		FirstObservedAt?: Array<DateFilter>;
		LastObservedAt?: Array<DateFilter>;
		CreatedAt?: Array<DateFilter>;
		UpdatedAt?: Array<DateFilter>;
		SeverityProduct?: Array<NumberFilter>;
		SeverityNormalized?: Array<NumberFilter>;
		SeverityLabel?: Array<StringFilter>;
		Confidence?: Array<NumberFilter>;
		Criticality?: Array<NumberFilter>;
		Title?: Array<StringFilter>;
		Description?: Array<StringFilter>;
		RecommendationText?: Array<StringFilter>;
		SourceUrl?: Array<StringFilter>;
		ProductFields?: Array<MapFilter>;
		ProductName?: Array<StringFilter>;
		CompanyName?: Array<StringFilter>;
		UserDefinedFields?: Array<MapFilter>;
		MalwareName?: Array<StringFilter>;
		MalwareType?: Array<StringFilter>;
		MalwarePath?: Array<StringFilter>;
		MalwareState?: Array<StringFilter>;
		NetworkDirection?: Array<StringFilter>;
		NetworkProtocol?: Array<StringFilter>;
		NetworkSourceIpV4?: Array<IpFilter>;
		NetworkSourceIpV6?: Array<IpFilter>;
		NetworkSourcePort?: Array<NumberFilter>;
		NetworkSourceDomain?: Array<StringFilter>;
		NetworkSourceMac?: Array<StringFilter>;
		NetworkDestinationIpV4?: Array<IpFilter>;
		NetworkDestinationIpV6?: Array<IpFilter>;
		NetworkDestinationPort?: Array<NumberFilter>;
		NetworkDestinationDomain?: Array<StringFilter>;
		ProcessName?: Array<StringFilter>;
		ProcessPath?: Array<StringFilter>;
		ProcessPid?: Array<NumberFilter>;
		ProcessParentPid?: Array<NumberFilter>;
		ProcessLaunchedAt?: Array<DateFilter>;
		ProcessTerminatedAt?: Array<DateFilter>;
		ThreatIntelIndicatorType?: Array<StringFilter>;
		ThreatIntelIndicatorValue?: Array<StringFilter>;
		ThreatIntelIndicatorCategory?: Array<StringFilter>;
		ThreatIntelIndicatorLastObservedAt?: Array<DateFilter>;
		ThreatIntelIndicatorSource?: Array<StringFilter>;
		ThreatIntelIndicatorSourceUrl?: Array<StringFilter>;
		ResourceType?: Array<StringFilter>;
		ResourceId?: Array<StringFilter>;
		ResourcePartition?: Array<StringFilter>;
		ResourceRegion?: Array<StringFilter>;
		ResourceTags?: Array<MapFilter>;
		ResourceAwsEc2InstanceType?: Array<StringFilter>;
		ResourceAwsEc2InstanceImageId?: Array<StringFilter>;
		ResourceAwsEc2InstanceIpV4Addresses?: Array<IpFilter>;
		ResourceAwsEc2InstanceIpV6Addresses?: Array<IpFilter>;
		ResourceAwsEc2InstanceKeyName?: Array<StringFilter>;
		ResourceAwsEc2InstanceIamInstanceProfileArn?: Array<StringFilter>;
		ResourceAwsEc2InstanceVpcId?: Array<StringFilter>;
		ResourceAwsEc2InstanceSubnetId?: Array<StringFilter>;
		ResourceAwsEc2InstanceLaunchedAt?: Array<DateFilter>;
		ResourceAwsS3BucketOwnerId?: Array<StringFilter>;
		ResourceAwsS3BucketOwnerName?: Array<StringFilter>;
		ResourceAwsIamAccessKeyUserName?: Array<StringFilter>;
		ResourceAwsIamAccessKeyPrincipalName?: Array<StringFilter>;
		ResourceAwsIamAccessKeyStatus?: Array<StringFilter>;
		ResourceAwsIamAccessKeyCreatedAt?: Array<DateFilter>;
		ResourceAwsIamUserUserName?: Array<StringFilter>;
		ResourceContainerName?: Array<StringFilter>;
		ResourceContainerImageId?: Array<StringFilter>;
		ResourceContainerImageName?: Array<StringFilter>;
		ResourceContainerLaunchedAt?: Array<DateFilter>;
		ResourceDetailsOther?: Array<MapFilter>;
		ComplianceStatus?: Array<StringFilter>;
		VerificationState?: Array<StringFilter>;
		WorkflowState?: Array<StringFilter>;
		WorkflowStatus?: Array<StringFilter>;
		RecordState?: Array<StringFilter>;
		RelatedFindingsProductArn?: Array<StringFilter>;
		RelatedFindingsId?: Array<StringFilter>;
		NoteText?: Array<StringFilter>;
		NoteUpdatedAt?: Array<DateFilter>;
		NoteUpdatedBy?: Array<StringFilter>;
		Keyword?: Array<KeywordFilter>;
		FindingProviderFieldsConfidence?: Array<NumberFilter>;
		FindingProviderFieldsCriticality?: Array<NumberFilter>;
		FindingProviderFieldsRelatedFindingsId?: Array<StringFilter>;
		FindingProviderFieldsRelatedFindingsProductArn?: Array<StringFilter>;
		FindingProviderFieldsSeverityLabel?: Array<StringFilter>;
		FindingProviderFieldsSeverityOriginal?: Array<StringFilter>;
		FindingProviderFieldsTypes?: Array<StringFilter>;
		Sample?: Array<BooleanFilter>;
		ComplianceSecurityControlId?: Array<StringFilter>;
		ComplianceAssociatedStandardsId?: Array<StringFilter>;
	}
	export interface GetFindingsPostBodyFiltersFormProperties {
	}
	export function CreateGetFindingsPostBodyFiltersFormGroup() {
		return new FormGroup<GetFindingsPostBodyFiltersFormProperties>({
		});

	}

	export interface UpdateFindingsPatchBody {

		/**
		 * <p>A collection of attributes that are applied to all active Security Hub-aggregated findings and that result in a subset of findings that are included in this insight.</p> <p>You can filter by up to 10 finding attributes. For each attribute, you can provide up to 20 filter values.</p>
		 * Required
		 */
		Filters: UpdateFindingsPatchBodyFilters;

		/** The updated note. */
		Note?: UpdateFindingsPatchBodyNote;

		/** The updated record state for the finding. */
		RecordState?: RecordState | null;
	}
	export interface UpdateFindingsPatchBodyFormProperties {

		/** The updated record state for the finding. */
		RecordState: FormControl<RecordState | null | undefined>,
	}
	export function CreateUpdateFindingsPatchBodyFormGroup() {
		return new FormGroup<UpdateFindingsPatchBodyFormProperties>({
			RecordState: new FormControl<RecordState | null | undefined>(undefined),
		});

	}

	export interface UpdateFindingsPatchBodyFilters {
		ProductArn?: Array<StringFilter>;
		AwsAccountId?: Array<StringFilter>;
		Id?: Array<StringFilter>;
		GeneratorId?: Array<StringFilter>;
		Region?: Array<StringFilter>;
		Type?: Array<StringFilter>;
		FirstObservedAt?: Array<DateFilter>;
		LastObservedAt?: Array<DateFilter>;
		CreatedAt?: Array<DateFilter>;
		UpdatedAt?: Array<DateFilter>;
		SeverityProduct?: Array<NumberFilter>;
		SeverityNormalized?: Array<NumberFilter>;
		SeverityLabel?: Array<StringFilter>;
		Confidence?: Array<NumberFilter>;
		Criticality?: Array<NumberFilter>;
		Title?: Array<StringFilter>;
		Description?: Array<StringFilter>;
		RecommendationText?: Array<StringFilter>;
		SourceUrl?: Array<StringFilter>;
		ProductFields?: Array<MapFilter>;
		ProductName?: Array<StringFilter>;
		CompanyName?: Array<StringFilter>;
		UserDefinedFields?: Array<MapFilter>;
		MalwareName?: Array<StringFilter>;
		MalwareType?: Array<StringFilter>;
		MalwarePath?: Array<StringFilter>;
		MalwareState?: Array<StringFilter>;
		NetworkDirection?: Array<StringFilter>;
		NetworkProtocol?: Array<StringFilter>;
		NetworkSourceIpV4?: Array<IpFilter>;
		NetworkSourceIpV6?: Array<IpFilter>;
		NetworkSourcePort?: Array<NumberFilter>;
		NetworkSourceDomain?: Array<StringFilter>;
		NetworkSourceMac?: Array<StringFilter>;
		NetworkDestinationIpV4?: Array<IpFilter>;
		NetworkDestinationIpV6?: Array<IpFilter>;
		NetworkDestinationPort?: Array<NumberFilter>;
		NetworkDestinationDomain?: Array<StringFilter>;
		ProcessName?: Array<StringFilter>;
		ProcessPath?: Array<StringFilter>;
		ProcessPid?: Array<NumberFilter>;
		ProcessParentPid?: Array<NumberFilter>;
		ProcessLaunchedAt?: Array<DateFilter>;
		ProcessTerminatedAt?: Array<DateFilter>;
		ThreatIntelIndicatorType?: Array<StringFilter>;
		ThreatIntelIndicatorValue?: Array<StringFilter>;
		ThreatIntelIndicatorCategory?: Array<StringFilter>;
		ThreatIntelIndicatorLastObservedAt?: Array<DateFilter>;
		ThreatIntelIndicatorSource?: Array<StringFilter>;
		ThreatIntelIndicatorSourceUrl?: Array<StringFilter>;
		ResourceType?: Array<StringFilter>;
		ResourceId?: Array<StringFilter>;
		ResourcePartition?: Array<StringFilter>;
		ResourceRegion?: Array<StringFilter>;
		ResourceTags?: Array<MapFilter>;
		ResourceAwsEc2InstanceType?: Array<StringFilter>;
		ResourceAwsEc2InstanceImageId?: Array<StringFilter>;
		ResourceAwsEc2InstanceIpV4Addresses?: Array<IpFilter>;
		ResourceAwsEc2InstanceIpV6Addresses?: Array<IpFilter>;
		ResourceAwsEc2InstanceKeyName?: Array<StringFilter>;
		ResourceAwsEc2InstanceIamInstanceProfileArn?: Array<StringFilter>;
		ResourceAwsEc2InstanceVpcId?: Array<StringFilter>;
		ResourceAwsEc2InstanceSubnetId?: Array<StringFilter>;
		ResourceAwsEc2InstanceLaunchedAt?: Array<DateFilter>;
		ResourceAwsS3BucketOwnerId?: Array<StringFilter>;
		ResourceAwsS3BucketOwnerName?: Array<StringFilter>;
		ResourceAwsIamAccessKeyUserName?: Array<StringFilter>;
		ResourceAwsIamAccessKeyPrincipalName?: Array<StringFilter>;
		ResourceAwsIamAccessKeyStatus?: Array<StringFilter>;
		ResourceAwsIamAccessKeyCreatedAt?: Array<DateFilter>;
		ResourceAwsIamUserUserName?: Array<StringFilter>;
		ResourceContainerName?: Array<StringFilter>;
		ResourceContainerImageId?: Array<StringFilter>;
		ResourceContainerImageName?: Array<StringFilter>;
		ResourceContainerLaunchedAt?: Array<DateFilter>;
		ResourceDetailsOther?: Array<MapFilter>;
		ComplianceStatus?: Array<StringFilter>;
		VerificationState?: Array<StringFilter>;
		WorkflowState?: Array<StringFilter>;
		WorkflowStatus?: Array<StringFilter>;
		RecordState?: Array<StringFilter>;
		RelatedFindingsProductArn?: Array<StringFilter>;
		RelatedFindingsId?: Array<StringFilter>;
		NoteText?: Array<StringFilter>;
		NoteUpdatedAt?: Array<DateFilter>;
		NoteUpdatedBy?: Array<StringFilter>;
		Keyword?: Array<KeywordFilter>;
		FindingProviderFieldsConfidence?: Array<NumberFilter>;
		FindingProviderFieldsCriticality?: Array<NumberFilter>;
		FindingProviderFieldsRelatedFindingsId?: Array<StringFilter>;
		FindingProviderFieldsRelatedFindingsProductArn?: Array<StringFilter>;
		FindingProviderFieldsSeverityLabel?: Array<StringFilter>;
		FindingProviderFieldsSeverityOriginal?: Array<StringFilter>;
		FindingProviderFieldsTypes?: Array<StringFilter>;
		Sample?: Array<BooleanFilter>;
		ComplianceSecurityControlId?: Array<StringFilter>;
		ComplianceAssociatedStandardsId?: Array<StringFilter>;
	}
	export interface UpdateFindingsPatchBodyFiltersFormProperties {
	}
	export function CreateUpdateFindingsPatchBodyFiltersFormGroup() {
		return new FormGroup<UpdateFindingsPatchBodyFiltersFormProperties>({
		});

	}

	export interface UpdateFindingsPatchBodyNote {
		Text?: string;
		UpdatedBy?: string;
	}
	export interface UpdateFindingsPatchBodyNoteFormProperties {
		Text: FormControl<string | null | undefined>,
		UpdatedBy: FormControl<string | null | undefined>,
	}
	export function CreateUpdateFindingsPatchBodyNoteFormGroup() {
		return new FormGroup<UpdateFindingsPatchBodyNoteFormProperties>({
			Text: new FormControl<string | null | undefined>(undefined),
			UpdatedBy: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetInsightsPostBody {

		/** The ARNs of the insights to describe. If you do not provide any insight ARNs, then <code>GetInsights</code> returns all of your custom insights. It does not return any managed insights. */
		InsightArns?: Array<string>;

		/** <p>The token that is required for pagination. On your first call to the <code>GetInsights</code> operation, set the value of this parameter to <code>NULL</code>.</p> <p>For subsequent calls to the operation, to continue listing data, set the value of this parameter to the value returned from the previous response.</p> */
		NextToken?: string | null;

		/**
		 * The maximum number of items to return in the response.
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults?: number | null;
	}
	export interface GetInsightsPostBodyFormProperties {

		/** <p>The token that is required for pagination. On your first call to the <code>GetInsights</code> operation, set the value of this parameter to <code>NULL</code>.</p> <p>For subsequent calls to the operation, to continue listing data, set the value of this parameter to the value returned from the previous response.</p> */
		NextToken: FormControl<string | null | undefined>,

		/**
		 * The maximum number of items to return in the response.
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateGetInsightsPostBodyFormGroup() {
		return new FormGroup<GetInsightsPostBodyFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
		});

	}

	export interface GetMembersPostBody {

		/**
		 * The list of account IDs for the Security Hub member accounts to return the details for.
		 * Required
		 */
		AccountIds: Array<string>;
	}
	export interface GetMembersPostBodyFormProperties {
	}
	export function CreateGetMembersPostBodyFormGroup() {
		return new FormGroup<GetMembersPostBodyFormProperties>({
		});

	}

	export interface InviteMembersPostBody {

		/**
		 * The list of account IDs of the Amazon Web Services accounts to invite to Security Hub as members.
		 * Required
		 */
		AccountIds: Array<string>;
	}
	export interface InviteMembersPostBodyFormProperties {
	}
	export function CreateInviteMembersPostBodyFormGroup() {
		return new FormGroup<InviteMembersPostBodyFormProperties>({
		});

	}

	export interface TagResourcePostBody {

		/**
		 * The tags to add to the resource. You can add up to 50 tags at a time. The tag keys can be no longer than 128 characters. The tag values can be no longer than 256 characters.
		 * Required
		 */
		Tags: {[id: string]: string };
	}
	export interface TagResourcePostBodyFormProperties {

		/**
		 * The tags to add to the resource. You can add up to 50 tags at a time. The tag keys can be no longer than 128 characters. The tag values can be no longer than 256 characters.
		 * Required
		 */
		Tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateTagResourcePostBodyFormGroup() {
		return new FormGroup<TagResourcePostBodyFormProperties>({
			Tags: new FormControl<{[id: string]: string } | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateFindingAggregatorPatchBody {

		/**
		 * The ARN of the finding aggregator. To obtain the ARN, use <code>ListFindingAggregators</code>.
		 * Required
		 */
		FindingAggregatorArn: string;

		/**
		 * <p>Indicates whether to aggregate findings from all of the available Regions in the current partition. Also determines whether to automatically aggregate findings from new Regions as Security Hub supports them and you opt into them.</p> <p>The selected option also determines how to use the Regions provided in the Regions list.</p> <p>The options are as follows:</p> <ul> <li> <p> <code>ALL_REGIONS</code> - Indicates to aggregate findings from all of the Regions where Security Hub is enabled. When you choose this option, Security Hub also automatically aggregates findings from new Regions as Security Hub supports them and you opt into them. </p> </li> <li> <p> <code>ALL_REGIONS_EXCEPT_SPECIFIED</code> - Indicates to aggregate findings from all of the Regions where Security Hub is enabled, except for the Regions listed in the <code>Regions</code> parameter. When you choose this option, Security Hub also automatically aggregates findings from new Regions as Security Hub supports them and you opt into them. </p> </li> <li> <p> <code>SPECIFIED_REGIONS</code> - Indicates to aggregate findings only from the Regions listed in the <code>Regions</code> parameter. Security Hub does not automatically aggregate findings from new Regions. </p> </li> </ul>
		 * Required
		 */
		RegionLinkingMode: string;

		/** <p>If <code>RegionLinkingMode</code> is <code>ALL_REGIONS_EXCEPT_SPECIFIED</code>, then this is a space-separated list of Regions that do not aggregate findings to the aggregation Region.</p> <p>If <code>RegionLinkingMode</code> is <code>SPECIFIED_REGIONS</code>, then this is a space-separated list of Regions that do aggregate findings to the aggregation Region.</p> */
		Regions?: Array<string>;
	}
	export interface UpdateFindingAggregatorPatchBodyFormProperties {

		/**
		 * The ARN of the finding aggregator. To obtain the ARN, use <code>ListFindingAggregators</code>.
		 * Required
		 */
		FindingAggregatorArn: FormControl<string | null | undefined>,

		/**
		 * <p>Indicates whether to aggregate findings from all of the available Regions in the current partition. Also determines whether to automatically aggregate findings from new Regions as Security Hub supports them and you opt into them.</p> <p>The selected option also determines how to use the Regions provided in the Regions list.</p> <p>The options are as follows:</p> <ul> <li> <p> <code>ALL_REGIONS</code> - Indicates to aggregate findings from all of the Regions where Security Hub is enabled. When you choose this option, Security Hub also automatically aggregates findings from new Regions as Security Hub supports them and you opt into them. </p> </li> <li> <p> <code>ALL_REGIONS_EXCEPT_SPECIFIED</code> - Indicates to aggregate findings from all of the Regions where Security Hub is enabled, except for the Regions listed in the <code>Regions</code> parameter. When you choose this option, Security Hub also automatically aggregates findings from new Regions as Security Hub supports them and you opt into them. </p> </li> <li> <p> <code>SPECIFIED_REGIONS</code> - Indicates to aggregate findings only from the Regions listed in the <code>Regions</code> parameter. Security Hub does not automatically aggregate findings from new Regions. </p> </li> </ul>
		 * Required
		 */
		RegionLinkingMode: FormControl<string | null | undefined>,
	}
	export function CreateUpdateFindingAggregatorPatchBodyFormGroup() {
		return new FormGroup<UpdateFindingAggregatorPatchBodyFormProperties>({
			FindingAggregatorArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('.*\S.*')]),
			RegionLinkingMode: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('.*\S.*')]),
		});

	}

	export interface UpdateStandardsControlPatchBody {

		/** The updated status of the security standard control. */
		ControlStatus?: RuleStatus | null;

		/** A description of the reason why you are disabling a security standard control. If you are disabling a control, then this is required. */
		DisabledReason?: string | null;
	}
	export interface UpdateStandardsControlPatchBodyFormProperties {

		/** The updated status of the security standard control. */
		ControlStatus: FormControl<RuleStatus | null | undefined>,

		/** A description of the reason why you are disabling a security standard control. If you are disabling a control, then this is required. */
		DisabledReason: FormControl<string | null | undefined>,
	}
	export function CreateUpdateStandardsControlPatchBodyFormGroup() {
		return new FormGroup<UpdateStandardsControlPatchBodyFormProperties>({
			ControlStatus: new FormControl<RuleStatus | null | undefined>(undefined),
			DisabledReason: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
		});

	}

}

