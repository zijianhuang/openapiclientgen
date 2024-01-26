import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface ActivateEvaluationFormResponse {

		/** Required */
		EvaluationFormId: string;

		/** Required */
		EvaluationFormArn: string;

		/** Required */
		EvaluationFormVersion: number;
	}
	export interface ActivateEvaluationFormResponseFormProperties {

		/** Required */
		EvaluationFormId: FormControl<string | null | undefined>,

		/** Required */
		EvaluationFormArn: FormControl<string | null | undefined>,

		/** Required */
		EvaluationFormVersion: FormControl<number | null | undefined>,
	}
	export function CreateActivateEvaluationFormResponseFormGroup() {
		return new FormGroup<ActivateEvaluationFormResponseFormProperties>({
			EvaluationFormId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			EvaluationFormArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			EvaluationFormVersion: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface InvalidParameterException {
	}
	export interface InvalidParameterExceptionFormProperties {
	}
	export function CreateInvalidParameterExceptionFormGroup() {
		return new FormGroup<InvalidParameterExceptionFormProperties>({
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

	export interface InternalServiceException {
	}
	export interface InternalServiceExceptionFormProperties {
	}
	export function CreateInternalServiceExceptionFormGroup() {
		return new FormGroup<InternalServiceExceptionFormProperties>({
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

	export interface InvalidRequestException {
	}
	export interface InvalidRequestExceptionFormProperties {
	}
	export function CreateInvalidRequestExceptionFormGroup() {
		return new FormGroup<InvalidRequestExceptionFormProperties>({
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

	export interface LimitExceededException {
	}
	export interface LimitExceededExceptionFormProperties {
	}
	export function CreateLimitExceededExceptionFormGroup() {
		return new FormGroup<LimitExceededExceptionFormProperties>({
		});

	}

	export interface AssociateDefaultVocabularyResponse {
	}
	export interface AssociateDefaultVocabularyResponseFormProperties {
	}
	export function CreateAssociateDefaultVocabularyResponseFormGroup() {
		return new FormGroup<AssociateDefaultVocabularyResponseFormProperties>({
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

	export interface AssociateInstanceStorageConfigResponse {
		AssociationId?: string;
	}
	export interface AssociateInstanceStorageConfigResponseFormProperties {
		AssociationId: FormControl<string | null | undefined>,
	}
	export function CreateAssociateInstanceStorageConfigResponseFormGroup() {
		return new FormGroup<AssociateInstanceStorageConfigResponseFormProperties>({
			AssociationId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum StorageType { S3 = 0, KINESIS_VIDEO_STREAM = 1, KINESIS_STREAM = 2, KINESIS_FIREHOSE = 3 }


	/** Information about the Amazon Simple Storage Service (Amazon S3) storage type. */
	export interface S3Config {

		/** Required */
		BucketName: string;

		/** Required */
		BucketPrefix: string;
		EncryptionConfig?: EncryptionConfig;
	}

	/** Information about the Amazon Simple Storage Service (Amazon S3) storage type. */
	export interface S3ConfigFormProperties {

		/** Required */
		BucketName: FormControl<string | null | undefined>,

		/** Required */
		BucketPrefix: FormControl<string | null | undefined>,
	}
	export function CreateS3ConfigFormGroup() {
		return new FormGroup<S3ConfigFormProperties>({
			BucketName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			BucketPrefix: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The encryption configuration. */
	export interface EncryptionConfig {

		/** Required */
		EncryptionType: EncryptionType;

		/** Required */
		KeyId: string;
	}

	/** The encryption configuration. */
	export interface EncryptionConfigFormProperties {

		/** Required */
		EncryptionType: FormControl<EncryptionType | null | undefined>,

		/** Required */
		KeyId: FormControl<string | null | undefined>,
	}
	export function CreateEncryptionConfigFormGroup() {
		return new FormGroup<EncryptionConfigFormProperties>({
			EncryptionType: new FormControl<EncryptionType | null | undefined>(undefined, [Validators.required]),
			KeyId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum EncryptionType { KMS = 0 }


	/** Configuration information of a Kinesis video stream. */
	export interface KinesisVideoStreamConfig {

		/** Required */
		Prefix: string;

		/** Required */
		RetentionPeriodHours: number;

		/** Required */
		EncryptionConfig: EncryptionConfig;
	}

	/** Configuration information of a Kinesis video stream. */
	export interface KinesisVideoStreamConfigFormProperties {

		/** Required */
		Prefix: FormControl<string | null | undefined>,

		/** Required */
		RetentionPeriodHours: FormControl<number | null | undefined>,
	}
	export function CreateKinesisVideoStreamConfigFormGroup() {
		return new FormGroup<KinesisVideoStreamConfigFormProperties>({
			Prefix: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RetentionPeriodHours: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Configuration information of a Kinesis data stream. */
	export interface KinesisStreamConfig {

		/** Required */
		StreamArn: string;
	}

	/** Configuration information of a Kinesis data stream. */
	export interface KinesisStreamConfigFormProperties {

		/** Required */
		StreamArn: FormControl<string | null | undefined>,
	}
	export function CreateKinesisStreamConfigFormGroup() {
		return new FormGroup<KinesisStreamConfigFormProperties>({
			StreamArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Configuration information of a Kinesis Data Firehose delivery stream. */
	export interface KinesisFirehoseConfig {

		/** Required */
		FirehoseArn: string;
	}

	/** Configuration information of a Kinesis Data Firehose delivery stream. */
	export interface KinesisFirehoseConfigFormProperties {

		/** Required */
		FirehoseArn: FormControl<string | null | undefined>,
	}
	export function CreateKinesisFirehoseConfigFormGroup() {
		return new FormGroup<KinesisFirehoseConfigFormProperties>({
			FirehoseArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Contains information about the queue and channel for which priority and delay can be set. */
	export interface RoutingProfileQueueConfig {

		/** Required */
		QueueReference: RoutingProfileQueueReference;

		/** Required */
		Priority: number;

		/** Required */
		Delay: number;
	}

	/** Contains information about the queue and channel for which priority and delay can be set. */
	export interface RoutingProfileQueueConfigFormProperties {

		/** Required */
		Priority: FormControl<number | null | undefined>,

		/** Required */
		Delay: FormControl<number | null | undefined>,
	}
	export function CreateRoutingProfileQueueConfigFormGroup() {
		return new FormGroup<RoutingProfileQueueConfigFormProperties>({
			Priority: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Delay: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Contains the channel and queue identifier for a routing profile. */
	export interface RoutingProfileQueueReference {

		/** Required */
		QueueId: string;

		/** Required */
		Channel: Channel;
	}

	/** Contains the channel and queue identifier for a routing profile. */
	export interface RoutingProfileQueueReferenceFormProperties {

		/** Required */
		QueueId: FormControl<string | null | undefined>,

		/** Required */
		Channel: FormControl<Channel | null | undefined>,
	}
	export function CreateRoutingProfileQueueReferenceFormGroup() {
		return new FormGroup<RoutingProfileQueueReferenceFormProperties>({
			QueueId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Channel: new FormControl<Channel | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum Channel { VOICE = 0, CHAT = 1, TASK = 2 }

	export interface AssociateSecurityKeyResponse {
		AssociationId?: string;
	}
	export interface AssociateSecurityKeyResponseFormProperties {
		AssociationId: FormControl<string | null | undefined>,
	}
	export function CreateAssociateSecurityKeyResponseFormGroup() {
		return new FormGroup<AssociateSecurityKeyResponseFormProperties>({
			AssociationId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ClaimPhoneNumberResponse {
		PhoneNumberId?: string;
		PhoneNumberArn?: string;
	}
	export interface ClaimPhoneNumberResponseFormProperties {
		PhoneNumberId: FormControl<string | null | undefined>,
		PhoneNumberArn: FormControl<string | null | undefined>,
	}
	export function CreateClaimPhoneNumberResponseFormGroup() {
		return new FormGroup<ClaimPhoneNumberResponseFormProperties>({
			PhoneNumberId: new FormControl<string | null | undefined>(undefined),
			PhoneNumberArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface IdempotencyException {
	}
	export interface IdempotencyExceptionFormProperties {
	}
	export function CreateIdempotencyExceptionFormGroup() {
		return new FormGroup<IdempotencyExceptionFormProperties>({
		});

	}

	export interface CreateAgentStatusResponse {
		AgentStatusARN?: string;
		AgentStatusId?: string;
	}
	export interface CreateAgentStatusResponseFormProperties {
		AgentStatusARN: FormControl<string | null | undefined>,
		AgentStatusId: FormControl<string | null | undefined>,
	}
	export function CreateCreateAgentStatusResponseFormGroup() {
		return new FormGroup<CreateAgentStatusResponseFormProperties>({
			AgentStatusARN: new FormControl<string | null | undefined>(undefined),
			AgentStatusId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DuplicateResourceException {
	}
	export interface DuplicateResourceExceptionFormProperties {
	}
	export function CreateDuplicateResourceExceptionFormGroup() {
		return new FormGroup<DuplicateResourceExceptionFormProperties>({
		});

	}

	export interface CreateContactFlowResponse {
		ContactFlowId?: string;
		ContactFlowArn?: string;
	}
	export interface CreateContactFlowResponseFormProperties {
		ContactFlowId: FormControl<string | null | undefined>,
		ContactFlowArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateContactFlowResponseFormGroup() {
		return new FormGroup<CreateContactFlowResponseFormProperties>({
			ContactFlowId: new FormControl<string | null | undefined>(undefined),
			ContactFlowArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface InvalidContactFlowException {
	}
	export interface InvalidContactFlowExceptionFormProperties {
	}
	export function CreateInvalidContactFlowExceptionFormGroup() {
		return new FormGroup<InvalidContactFlowExceptionFormProperties>({
		});

	}

	export interface CreateContactFlowModuleResponse {
		Id?: string;
		Arn?: string;
	}
	export interface CreateContactFlowModuleResponseFormProperties {
		Id: FormControl<string | null | undefined>,
		Arn: FormControl<string | null | undefined>,
	}
	export function CreateCreateContactFlowModuleResponseFormGroup() {
		return new FormGroup<CreateContactFlowModuleResponseFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			Arn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface InvalidContactFlowModuleException {
	}
	export interface InvalidContactFlowModuleExceptionFormProperties {
	}
	export function CreateInvalidContactFlowModuleExceptionFormGroup() {
		return new FormGroup<InvalidContactFlowModuleExceptionFormProperties>({
		});

	}

	export interface CreateEvaluationFormResponse {

		/** Required */
		EvaluationFormId: string;

		/** Required */
		EvaluationFormArn: string;
	}
	export interface CreateEvaluationFormResponseFormProperties {

		/** Required */
		EvaluationFormId: FormControl<string | null | undefined>,

		/** Required */
		EvaluationFormArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateEvaluationFormResponseFormGroup() {
		return new FormGroup<CreateEvaluationFormResponseFormProperties>({
			EvaluationFormId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			EvaluationFormArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Information about an item from an evaluation form. The item must be either a section or a question. */
	export interface EvaluationFormItem {
		Section?: EvaluationFormSection;
		Question?: EvaluationFormQuestion;
	}

	/** Information about an item from an evaluation form. The item must be either a section or a question. */
	export interface EvaluationFormItemFormProperties {
	}
	export function CreateEvaluationFormItemFormGroup() {
		return new FormGroup<EvaluationFormItemFormProperties>({
		});

	}


	/** Information about a section from an evaluation form. A section can contain sections and/or questions. Evaluation forms can only contain sections and subsections (two level nesting). */
	export interface EvaluationFormSection {

		/** Required */
		Title: string;

		/** Required */
		RefId: string;
		Instructions?: string;

		/** Required */
		Items: Array<EvaluationFormItem>;
		Weight?: number | null;
	}

	/** Information about a section from an evaluation form. A section can contain sections and/or questions. Evaluation forms can only contain sections and subsections (two level nesting). */
	export interface EvaluationFormSectionFormProperties {

		/** Required */
		Title: FormControl<string | null | undefined>,

		/** Required */
		RefId: FormControl<string | null | undefined>,
		Instructions: FormControl<string | null | undefined>,
		Weight: FormControl<number | null | undefined>,
	}
	export function CreateEvaluationFormSectionFormGroup() {
		return new FormGroup<EvaluationFormSectionFormProperties>({
			Title: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RefId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Instructions: new FormControl<string | null | undefined>(undefined),
			Weight: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Information about a question from an evaluation form. */
	export interface EvaluationFormQuestion {

		/** Required */
		Title: string;
		Instructions?: string;

		/** Required */
		RefId: string;
		NotApplicableEnabled?: boolean | null;

		/** Required */
		QuestionType: EvaluationFormQuestionType;
		QuestionTypeProperties?: EvaluationFormQuestionTypeProperties;
		Weight?: number | null;
	}

	/** Information about a question from an evaluation form. */
	export interface EvaluationFormQuestionFormProperties {

		/** Required */
		Title: FormControl<string | null | undefined>,
		Instructions: FormControl<string | null | undefined>,

		/** Required */
		RefId: FormControl<string | null | undefined>,
		NotApplicableEnabled: FormControl<boolean | null | undefined>,

		/** Required */
		QuestionType: FormControl<EvaluationFormQuestionType | null | undefined>,
		Weight: FormControl<number | null | undefined>,
	}
	export function CreateEvaluationFormQuestionFormGroup() {
		return new FormGroup<EvaluationFormQuestionFormProperties>({
			Title: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Instructions: new FormControl<string | null | undefined>(undefined),
			RefId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NotApplicableEnabled: new FormControl<boolean | null | undefined>(undefined),
			QuestionType: new FormControl<EvaluationFormQuestionType | null | undefined>(undefined, [Validators.required]),
			Weight: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum EvaluationFormQuestionType { TEXT = 0, SINGLESELECT = 1, NUMERIC = 2 }


	/** Information about properties for a question in an evaluation form. The question type properties must be either for a numeric question or a single select question. */
	export interface EvaluationFormQuestionTypeProperties {
		Numeric?: EvaluationFormNumericQuestionProperties;
		SingleSelect?: EvaluationFormSingleSelectQuestionProperties;
	}

	/** Information about properties for a question in an evaluation form. The question type properties must be either for a numeric question or a single select question. */
	export interface EvaluationFormQuestionTypePropertiesFormProperties {
	}
	export function CreateEvaluationFormQuestionTypePropertiesFormGroup() {
		return new FormGroup<EvaluationFormQuestionTypePropertiesFormProperties>({
		});

	}


	/** Information about properties for a numeric question in an evaluation form. */
	export interface EvaluationFormNumericQuestionProperties {

		/** Required */
		MinValue: number;

		/** Required */
		MaxValue: number;
		Options?: Array<EvaluationFormNumericQuestionOption>;
		Automation?: EvaluationFormNumericQuestionAutomation;
	}

	/** Information about properties for a numeric question in an evaluation form. */
	export interface EvaluationFormNumericQuestionPropertiesFormProperties {

		/** Required */
		MinValue: FormControl<number | null | undefined>,

		/** Required */
		MaxValue: FormControl<number | null | undefined>,
	}
	export function CreateEvaluationFormNumericQuestionPropertiesFormGroup() {
		return new FormGroup<EvaluationFormNumericQuestionPropertiesFormProperties>({
			MinValue: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			MaxValue: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Information about the option range used for scoring in numeric questions. */
	export interface EvaluationFormNumericQuestionOption {

		/** Required */
		MinValue: number;

		/** Required */
		MaxValue: number;
		Score?: number | null;
		AutomaticFail?: boolean | null;
	}

	/** Information about the option range used for scoring in numeric questions. */
	export interface EvaluationFormNumericQuestionOptionFormProperties {

		/** Required */
		MinValue: FormControl<number | null | undefined>,

		/** Required */
		MaxValue: FormControl<number | null | undefined>,
		Score: FormControl<number | null | undefined>,
		AutomaticFail: FormControl<boolean | null | undefined>,
	}
	export function CreateEvaluationFormNumericQuestionOptionFormGroup() {
		return new FormGroup<EvaluationFormNumericQuestionOptionFormProperties>({
			MinValue: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			MaxValue: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Score: new FormControl<number | null | undefined>(undefined),
			AutomaticFail: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Information about the automation configuration in numeric questions. */
	export interface EvaluationFormNumericQuestionAutomation {
		PropertyValue?: NumericQuestionPropertyValueAutomation;
	}

	/** Information about the automation configuration in numeric questions. */
	export interface EvaluationFormNumericQuestionAutomationFormProperties {
	}
	export function CreateEvaluationFormNumericQuestionAutomationFormGroup() {
		return new FormGroup<EvaluationFormNumericQuestionAutomationFormProperties>({
		});

	}


	/** <p>Information about the property value used in automation of a numeric questions. Label values are associated with minimum and maximum values for the numeric question.</p> <ul> <li> <p>Sentiment scores have a minimum value of -5 and maximum value of 5.</p> </li> <li> <p> Duration labels, such as <code>NON_TALK_TIME</code>, <code>CONTACT_DURATION</code>, <code>AGENT_INTERACTION_DURATION</code>, <code>CUSTOMER_HOLD_TIME</code> have a minimum value of 0 and maximum value of 28800.</p> </li> <li> <p>Percentages have a minimum value of 0 and maximum value of 100. </p> </li> <li> <p> <code>NUMBER_OF_INTERRUPTIONS</code> has a minimum value of 0 and maximum value of 1000.</p> </li> </ul> */
	export interface NumericQuestionPropertyValueAutomation {

		/** Required */
		Label: NumericQuestionPropertyAutomationLabel;
	}

	/** <p>Information about the property value used in automation of a numeric questions. Label values are associated with minimum and maximum values for the numeric question.</p> <ul> <li> <p>Sentiment scores have a minimum value of -5 and maximum value of 5.</p> </li> <li> <p> Duration labels, such as <code>NON_TALK_TIME</code>, <code>CONTACT_DURATION</code>, <code>AGENT_INTERACTION_DURATION</code>, <code>CUSTOMER_HOLD_TIME</code> have a minimum value of 0 and maximum value of 28800.</p> </li> <li> <p>Percentages have a minimum value of 0 and maximum value of 100. </p> </li> <li> <p> <code>NUMBER_OF_INTERRUPTIONS</code> has a minimum value of 0 and maximum value of 1000.</p> </li> </ul> */
	export interface NumericQuestionPropertyValueAutomationFormProperties {

		/** Required */
		Label: FormControl<NumericQuestionPropertyAutomationLabel | null | undefined>,
	}
	export function CreateNumericQuestionPropertyValueAutomationFormGroup() {
		return new FormGroup<NumericQuestionPropertyValueAutomationFormProperties>({
			Label: new FormControl<NumericQuestionPropertyAutomationLabel | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum NumericQuestionPropertyAutomationLabel { OVERALL_CUSTOMER_SENTIMENT_SCORE = 0, OVERALL_AGENT_SENTIMENT_SCORE = 1, NON_TALK_TIME = 2, NON_TALK_TIME_PERCENTAGE = 3, NUMBER_OF_INTERRUPTIONS = 4, CONTACT_DURATION = 5, AGENT_INTERACTION_DURATION = 6, CUSTOMER_HOLD_TIME = 7 }


	/** Information about the options in single select questions. */
	export interface EvaluationFormSingleSelectQuestionProperties {

		/** Required */
		Options: Array<EvaluationFormSingleSelectQuestionOption>;
		DisplayAs?: EvaluationFormSingleSelectQuestionDisplayMode;
		Automation?: EvaluationFormSingleSelectQuestionAutomation;
	}

	/** Information about the options in single select questions. */
	export interface EvaluationFormSingleSelectQuestionPropertiesFormProperties {
		DisplayAs: FormControl<EvaluationFormSingleSelectQuestionDisplayMode | null | undefined>,
	}
	export function CreateEvaluationFormSingleSelectQuestionPropertiesFormGroup() {
		return new FormGroup<EvaluationFormSingleSelectQuestionPropertiesFormProperties>({
			DisplayAs: new FormControl<EvaluationFormSingleSelectQuestionDisplayMode | null | undefined>(undefined),
		});

	}


	/** Information about the automation configuration in single select questions. */
	export interface EvaluationFormSingleSelectQuestionOption {

		/** Required */
		RefId: string;

		/** Required */
		Text: string;
		Score?: number | null;
		AutomaticFail?: boolean | null;
	}

	/** Information about the automation configuration in single select questions. */
	export interface EvaluationFormSingleSelectQuestionOptionFormProperties {

		/** Required */
		RefId: FormControl<string | null | undefined>,

		/** Required */
		Text: FormControl<string | null | undefined>,
		Score: FormControl<number | null | undefined>,
		AutomaticFail: FormControl<boolean | null | undefined>,
	}
	export function CreateEvaluationFormSingleSelectQuestionOptionFormGroup() {
		return new FormGroup<EvaluationFormSingleSelectQuestionOptionFormProperties>({
			RefId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Text: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Score: new FormControl<number | null | undefined>(undefined),
			AutomaticFail: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum EvaluationFormSingleSelectQuestionDisplayMode { DROPDOWN = 0, RADIO = 1 }


	/** Information about the automation configuration in single select questions. Automation options are evaluated in order, and the first matched option is applied. If no automation option matches, and there is a default option, then the default option is applied. */
	export interface EvaluationFormSingleSelectQuestionAutomation {

		/** Required */
		Options: Array<EvaluationFormSingleSelectQuestionAutomationOption>;
		DefaultOptionRefId?: string;
	}

	/** Information about the automation configuration in single select questions. Automation options are evaluated in order, and the first matched option is applied. If no automation option matches, and there is a default option, then the default option is applied. */
	export interface EvaluationFormSingleSelectQuestionAutomationFormProperties {
		DefaultOptionRefId: FormControl<string | null | undefined>,
	}
	export function CreateEvaluationFormSingleSelectQuestionAutomationFormGroup() {
		return new FormGroup<EvaluationFormSingleSelectQuestionAutomationFormProperties>({
			DefaultOptionRefId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about the automation option of a single select question. */
	export interface EvaluationFormSingleSelectQuestionAutomationOption {
		RuleCategory?: SingleSelectQuestionRuleCategoryAutomation;
	}

	/** Information about the automation option of a single select question. */
	export interface EvaluationFormSingleSelectQuestionAutomationOptionFormProperties {
	}
	export function CreateEvaluationFormSingleSelectQuestionAutomationOptionFormGroup() {
		return new FormGroup<EvaluationFormSingleSelectQuestionAutomationOptionFormProperties>({
		});

	}


	/** Information about the automation option based on a rule category for a single select question. */
	export interface SingleSelectQuestionRuleCategoryAutomation {

		/** Required */
		Category: string;

		/** Required */
		Condition: SingleSelectQuestionRuleCategoryAutomationCondition;

		/** Required */
		OptionRefId: string;
	}

	/** Information about the automation option based on a rule category for a single select question. */
	export interface SingleSelectQuestionRuleCategoryAutomationFormProperties {

		/** Required */
		Category: FormControl<string | null | undefined>,

		/** Required */
		Condition: FormControl<SingleSelectQuestionRuleCategoryAutomationCondition | null | undefined>,

		/** Required */
		OptionRefId: FormControl<string | null | undefined>,
	}
	export function CreateSingleSelectQuestionRuleCategoryAutomationFormGroup() {
		return new FormGroup<SingleSelectQuestionRuleCategoryAutomationFormProperties>({
			Category: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Condition: new FormControl<SingleSelectQuestionRuleCategoryAutomationCondition | null | undefined>(undefined, [Validators.required]),
			OptionRefId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum SingleSelectQuestionRuleCategoryAutomationCondition { PRESENT = 0, NOT_PRESENT = 1 }

	export enum EvaluationFormScoringMode { QUESTION_ONLY = 0, SECTION_ONLY = 1 }

	export enum EvaluationFormScoringStatus { ENABLED = 0, DISABLED = 1 }

	export interface CreateHoursOfOperationResponse {
		HoursOfOperationId?: string;
		HoursOfOperationArn?: string;
	}
	export interface CreateHoursOfOperationResponseFormProperties {
		HoursOfOperationId: FormControl<string | null | undefined>,
		HoursOfOperationArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateHoursOfOperationResponseFormGroup() {
		return new FormGroup<CreateHoursOfOperationResponseFormProperties>({
			HoursOfOperationId: new FormControl<string | null | undefined>(undefined),
			HoursOfOperationArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information about the hours of operation. */
	export interface HoursOfOperationConfig {

		/** Required */
		Day: HoursOfOperationDays;

		/** Required */
		StartTime: HoursOfOperationTimeSlice;

		/** Required */
		EndTime: HoursOfOperationTimeSlice;
	}

	/** Contains information about the hours of operation. */
	export interface HoursOfOperationConfigFormProperties {

		/** Required */
		Day: FormControl<HoursOfOperationDays | null | undefined>,
	}
	export function CreateHoursOfOperationConfigFormGroup() {
		return new FormGroup<HoursOfOperationConfigFormProperties>({
			Day: new FormControl<HoursOfOperationDays | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum HoursOfOperationDays { SUNDAY = 0, MONDAY = 1, TUESDAY = 2, WEDNESDAY = 3, THURSDAY = 4, FRIDAY = 5, SATURDAY = 6 }


	/** The start time or end time for an hours of operation. */
	export interface HoursOfOperationTimeSlice {

		/** Required */
		Hours: number;

		/** Required */
		Minutes: number;
	}

	/** The start time or end time for an hours of operation. */
	export interface HoursOfOperationTimeSliceFormProperties {

		/** Required */
		Hours: FormControl<number | null | undefined>,

		/** Required */
		Minutes: FormControl<number | null | undefined>,
	}
	export function CreateHoursOfOperationTimeSliceFormGroup() {
		return new FormGroup<HoursOfOperationTimeSliceFormProperties>({
			Hours: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Minutes: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateInstanceResponse {
		Id?: string;
		Arn?: string;
	}
	export interface CreateInstanceResponseFormProperties {
		Id: FormControl<string | null | undefined>,
		Arn: FormControl<string | null | undefined>,
	}
	export function CreateCreateInstanceResponseFormGroup() {
		return new FormGroup<CreateInstanceResponseFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			Arn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateIntegrationAssociationResponse {
		IntegrationAssociationId?: string;
		IntegrationAssociationArn?: string;
	}
	export interface CreateIntegrationAssociationResponseFormProperties {
		IntegrationAssociationId: FormControl<string | null | undefined>,
		IntegrationAssociationArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateIntegrationAssociationResponseFormGroup() {
		return new FormGroup<CreateIntegrationAssociationResponseFormProperties>({
			IntegrationAssociationId: new FormControl<string | null | undefined>(undefined),
			IntegrationAssociationArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateParticipantResponse {
		ParticipantCredentials?: ParticipantTokenCredentials;
		ParticipantId?: string;
	}
	export interface CreateParticipantResponseFormProperties {
		ParticipantId: FormControl<string | null | undefined>,
	}
	export function CreateCreateParticipantResponseFormGroup() {
		return new FormGroup<CreateParticipantResponseFormProperties>({
			ParticipantId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The credentials used by the participant. */
	export interface ParticipantTokenCredentials {
		ParticipantToken?: string;
		Expiry?: string;
	}

	/** The credentials used by the participant. */
	export interface ParticipantTokenCredentialsFormProperties {
		ParticipantToken: FormControl<string | null | undefined>,
		Expiry: FormControl<string | null | undefined>,
	}
	export function CreateParticipantTokenCredentialsFormGroup() {
		return new FormGroup<ParticipantTokenCredentialsFormProperties>({
			ParticipantToken: new FormControl<string | null | undefined>(undefined),
			Expiry: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ParticipantRole { AGENT = 0, CUSTOMER = 1, SYSTEM = 2, CUSTOM_BOT = 3 }

	export interface CreatePromptResponse {
		PromptARN?: string;
		PromptId?: string;
	}
	export interface CreatePromptResponseFormProperties {
		PromptARN: FormControl<string | null | undefined>,
		PromptId: FormControl<string | null | undefined>,
	}
	export function CreateCreatePromptResponseFormGroup() {
		return new FormGroup<CreatePromptResponseFormProperties>({
			PromptARN: new FormControl<string | null | undefined>(undefined),
			PromptId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateQueueResponse {
		QueueArn?: string;
		QueueId?: string;
	}
	export interface CreateQueueResponseFormProperties {
		QueueArn: FormControl<string | null | undefined>,
		QueueId: FormControl<string | null | undefined>,
	}
	export function CreateCreateQueueResponseFormGroup() {
		return new FormGroup<CreateQueueResponseFormProperties>({
			QueueArn: new FormControl<string | null | undefined>(undefined),
			QueueId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateQuickConnectResponse {
		QuickConnectARN?: string;
		QuickConnectId?: string;
	}
	export interface CreateQuickConnectResponseFormProperties {
		QuickConnectARN: FormControl<string | null | undefined>,
		QuickConnectId: FormControl<string | null | undefined>,
	}
	export function CreateCreateQuickConnectResponseFormGroup() {
		return new FormGroup<CreateQuickConnectResponseFormProperties>({
			QuickConnectARN: new FormControl<string | null | undefined>(undefined),
			QuickConnectId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum QuickConnectType { USER = 0, QUEUE = 1, PHONE_NUMBER = 2 }


	/** Contains information about the quick connect configuration settings for a user. The contact flow must be of type Transfer to Agent. */
	export interface UserQuickConnectConfig {

		/** Required */
		UserId: string;

		/** Required */
		ContactFlowId: string;
	}

	/** Contains information about the quick connect configuration settings for a user. The contact flow must be of type Transfer to Agent. */
	export interface UserQuickConnectConfigFormProperties {

		/** Required */
		UserId: FormControl<string | null | undefined>,

		/** Required */
		ContactFlowId: FormControl<string | null | undefined>,
	}
	export function CreateUserQuickConnectConfigFormGroup() {
		return new FormGroup<UserQuickConnectConfigFormProperties>({
			UserId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ContactFlowId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Contains information about a queue for a quick connect. The flow must be of type Transfer to Queue. */
	export interface QueueQuickConnectConfig {

		/** Required */
		QueueId: string;

		/** Required */
		ContactFlowId: string;
	}

	/** Contains information about a queue for a quick connect. The flow must be of type Transfer to Queue. */
	export interface QueueQuickConnectConfigFormProperties {

		/** Required */
		QueueId: FormControl<string | null | undefined>,

		/** Required */
		ContactFlowId: FormControl<string | null | undefined>,
	}
	export function CreateQueueQuickConnectConfigFormGroup() {
		return new FormGroup<QueueQuickConnectConfigFormProperties>({
			QueueId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ContactFlowId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Contains information about a phone number for a quick connect. */
	export interface PhoneNumberQuickConnectConfig {

		/** Required */
		PhoneNumber: string;
	}

	/** Contains information about a phone number for a quick connect. */
	export interface PhoneNumberQuickConnectConfigFormProperties {

		/** Required */
		PhoneNumber: FormControl<string | null | undefined>,
	}
	export function CreatePhoneNumberQuickConnectConfigFormGroup() {
		return new FormGroup<PhoneNumberQuickConnectConfigFormProperties>({
			PhoneNumber: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateRoutingProfileResponse {
		RoutingProfileArn?: string;
		RoutingProfileId?: string;
	}
	export interface CreateRoutingProfileResponseFormProperties {
		RoutingProfileArn: FormControl<string | null | undefined>,
		RoutingProfileId: FormControl<string | null | undefined>,
	}
	export function CreateCreateRoutingProfileResponseFormGroup() {
		return new FormGroup<CreateRoutingProfileResponseFormProperties>({
			RoutingProfileArn: new FormControl<string | null | undefined>(undefined),
			RoutingProfileId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information about which channels are supported, and how many contacts an agent can have on a channel simultaneously. */
	export interface MediaConcurrency {

		/** Required */
		Channel: Channel;

		/** Required */
		Concurrency: number;
		CrossChannelBehavior?: CrossChannelBehavior;
	}

	/** Contains information about which channels are supported, and how many contacts an agent can have on a channel simultaneously. */
	export interface MediaConcurrencyFormProperties {

		/** Required */
		Channel: FormControl<Channel | null | undefined>,

		/** Required */
		Concurrency: FormControl<number | null | undefined>,
	}
	export function CreateMediaConcurrencyFormGroup() {
		return new FormGroup<MediaConcurrencyFormProperties>({
			Channel: new FormControl<Channel | null | undefined>(undefined, [Validators.required]),
			Concurrency: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Defines the cross-channel routing behavior that allows an agent working on a contact in one channel to be offered a contact from a different channel. */
	export interface CrossChannelBehavior {

		/** Required */
		BehaviorType: BehaviorType;
	}

	/** Defines the cross-channel routing behavior that allows an agent working on a contact in one channel to be offered a contact from a different channel. */
	export interface CrossChannelBehaviorFormProperties {

		/** Required */
		BehaviorType: FormControl<BehaviorType | null | undefined>,
	}
	export function CreateCrossChannelBehaviorFormGroup() {
		return new FormGroup<CrossChannelBehaviorFormProperties>({
			BehaviorType: new FormControl<BehaviorType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum BehaviorType { ROUTE_CURRENT_CHANNEL_ONLY = 0, ROUTE_ANY_CHANNEL = 1 }

	export interface CreateRuleResponse {

		/** Required */
		RuleArn: string;

		/** Required */
		RuleId: string;
	}
	export interface CreateRuleResponseFormProperties {

		/** Required */
		RuleArn: FormControl<string | null | undefined>,

		/** Required */
		RuleId: FormControl<string | null | undefined>,
	}
	export function CreateCreateRuleResponseFormGroup() {
		return new FormGroup<CreateRuleResponseFormProperties>({
			RuleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RuleId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum EventSourceName { OnPostCallAnalysisAvailable = 0, OnRealTimeCallAnalysisAvailable = 1, OnPostChatAnalysisAvailable = 2, OnZendeskTicketCreate = 3, OnZendeskTicketStatusUpdate = 4, OnSalesforceCaseCreate = 5, OnContactEvaluationSubmit = 6 }


	/** Information about the action to be performed when a rule is triggered. */
	export interface RuleAction {

		/** Required */
		ActionType: ActionType;
		TaskAction?: TaskActionDefinition;
		EventBridgeAction?: EventBridgeActionDefinition;
		AssignContactCategoryAction?: AssignContactCategoryActionDefinition;
		SendNotificationAction?: SendNotificationActionDefinition;
	}

	/** Information about the action to be performed when a rule is triggered. */
	export interface RuleActionFormProperties {

		/** Required */
		ActionType: FormControl<ActionType | null | undefined>,
	}
	export function CreateRuleActionFormGroup() {
		return new FormGroup<RuleActionFormProperties>({
			ActionType: new FormControl<ActionType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ActionType { CREATE_TASK = 0, ASSIGN_CONTACT_CATEGORY = 1, GENERATE_EVENTBRIDGE_EVENT = 2, SEND_NOTIFICATION = 3 }


	/** Information about the task action. */
	export interface TaskActionDefinition {

		/** Required */
		Name: string;
		Description?: string;

		/** Required */
		ContactFlowId: string;
		References?: ContactReferences;
	}

	/** Information about the task action. */
	export interface TaskActionDefinitionFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,

		/** Required */
		ContactFlowId: FormControl<string | null | undefined>,
	}
	export function CreateTaskActionDefinitionFormGroup() {
		return new FormGroup<TaskActionDefinitionFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
			ContactFlowId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ContactReferences {
	}
	export interface ContactReferencesFormProperties {
	}
	export function CreateContactReferencesFormGroup() {
		return new FormGroup<ContactReferencesFormProperties>({
		});

	}


	/** The EventBridge action definition. */
	export interface EventBridgeActionDefinition {

		/** Required */
		Name: string;
	}

	/** The EventBridge action definition. */
	export interface EventBridgeActionDefinitionFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateEventBridgeActionDefinitionFormGroup() {
		return new FormGroup<EventBridgeActionDefinitionFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p>This action must be set if <code>TriggerEventSource</code> is one of the following values: <code>OnPostCallAnalysisAvailable</code> | <code>OnRealTimeCallAnalysisAvailable</code> | <code>OnPostChatAnalysisAvailable</code>. Contact is categorized using the rule name.</p> <p> <code>RuleName</code> is used as <code>ContactCategory</code>.</p> */
	export interface AssignContactCategoryActionDefinition {
	}

	/** <p>This action must be set if <code>TriggerEventSource</code> is one of the following values: <code>OnPostCallAnalysisAvailable</code> | <code>OnRealTimeCallAnalysisAvailable</code> | <code>OnPostChatAnalysisAvailable</code>. Contact is categorized using the rule name.</p> <p> <code>RuleName</code> is used as <code>ContactCategory</code>.</p> */
	export interface AssignContactCategoryActionDefinitionFormProperties {
	}
	export function CreateAssignContactCategoryActionDefinitionFormGroup() {
		return new FormGroup<AssignContactCategoryActionDefinitionFormProperties>({
		});

	}


	/** Information about the send notification action. */
	export interface SendNotificationActionDefinition {

		/** Required */
		DeliveryMethod: NotificationDeliveryType;
		Subject?: string;

		/** Required */
		Content: string;

		/** Required */
		ContentType: NotificationContentType;

		/** Required */
		Recipient: NotificationRecipientType;
	}

	/** Information about the send notification action. */
	export interface SendNotificationActionDefinitionFormProperties {

		/** Required */
		DeliveryMethod: FormControl<NotificationDeliveryType | null | undefined>,
		Subject: FormControl<string | null | undefined>,

		/** Required */
		Content: FormControl<string | null | undefined>,

		/** Required */
		ContentType: FormControl<NotificationContentType | null | undefined>,
	}
	export function CreateSendNotificationActionDefinitionFormGroup() {
		return new FormGroup<SendNotificationActionDefinitionFormProperties>({
			DeliveryMethod: new FormControl<NotificationDeliveryType | null | undefined>(undefined, [Validators.required]),
			Subject: new FormControl<string | null | undefined>(undefined),
			Content: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ContentType: new FormControl<NotificationContentType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum NotificationDeliveryType { EMAIL = 0 }

	export enum NotificationContentType { PLAIN_TEXT = 0 }


	/** The type of notification recipient. */
	export interface NotificationRecipientType {
		UserTags?: UserTagMap;
		UserIds?: Array<string>;
	}

	/** The type of notification recipient. */
	export interface NotificationRecipientTypeFormProperties {
	}
	export function CreateNotificationRecipientTypeFormGroup() {
		return new FormGroup<NotificationRecipientTypeFormProperties>({
		});

	}

	export interface UserTagMap {
	}
	export interface UserTagMapFormProperties {
	}
	export function CreateUserTagMapFormGroup() {
		return new FormGroup<UserTagMapFormProperties>({
		});

	}

	export interface CreateSecurityProfileResponse {
		SecurityProfileId?: string;
		SecurityProfileArn?: string;
	}
	export interface CreateSecurityProfileResponseFormProperties {
		SecurityProfileId: FormControl<string | null | undefined>,
		SecurityProfileArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateSecurityProfileResponseFormGroup() {
		return new FormGroup<CreateSecurityProfileResponseFormProperties>({
			SecurityProfileId: new FormControl<string | null | undefined>(undefined),
			SecurityProfileArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateTaskTemplateResponse {

		/** Required */
		Id: string;

		/** Required */
		Arn: string;
	}
	export interface CreateTaskTemplateResponseFormProperties {

		/** Required */
		Id: FormControl<string | null | undefined>,

		/** Required */
		Arn: FormControl<string | null | undefined>,
	}
	export function CreateCreateTaskTemplateResponseFormGroup() {
		return new FormGroup<CreateTaskTemplateResponseFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Information about a required field. */
	export interface RequiredFieldInfo {
		Id?: TaskTemplateFieldIdentifier;
	}

	/** Information about a required field. */
	export interface RequiredFieldInfoFormProperties {
	}
	export function CreateRequiredFieldInfoFormGroup() {
		return new FormGroup<RequiredFieldInfoFormProperties>({
		});

	}


	/** The identifier of the task template field. */
	export interface TaskTemplateFieldIdentifier {
		Name?: string;
	}

	/** The identifier of the task template field. */
	export interface TaskTemplateFieldIdentifierFormProperties {
		Name: FormControl<string | null | undefined>,
	}
	export function CreateTaskTemplateFieldIdentifierFormGroup() {
		return new FormGroup<TaskTemplateFieldIdentifierFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Indicates a field that is read-only to an agent. */
	export interface ReadOnlyFieldInfo {
		Id?: TaskTemplateFieldIdentifier;
	}

	/** Indicates a field that is read-only to an agent. */
	export interface ReadOnlyFieldInfoFormProperties {
	}
	export function CreateReadOnlyFieldInfoFormGroup() {
		return new FormGroup<ReadOnlyFieldInfoFormProperties>({
		});

	}


	/** A field that is invisible to an agent. */
	export interface InvisibleFieldInfo {
		Id?: TaskTemplateFieldIdentifier;
	}

	/** A field that is invisible to an agent. */
	export interface InvisibleFieldInfoFormProperties {
	}
	export function CreateInvisibleFieldInfoFormGroup() {
		return new FormGroup<InvisibleFieldInfoFormProperties>({
		});

	}


	/** Describes a default field and its corresponding value. */
	export interface TaskTemplateDefaultFieldValue {
		Id?: TaskTemplateFieldIdentifier;
		DefaultValue?: string;
	}

	/** Describes a default field and its corresponding value. */
	export interface TaskTemplateDefaultFieldValueFormProperties {
		DefaultValue: FormControl<string | null | undefined>,
	}
	export function CreateTaskTemplateDefaultFieldValueFormGroup() {
		return new FormGroup<TaskTemplateDefaultFieldValueFormProperties>({
			DefaultValue: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes a single task template field. */
	export interface TaskTemplateField {

		/** Required */
		Id: TaskTemplateFieldIdentifier;
		Description?: string;
		Type?: TaskTemplateFieldType;
		SingleSelectOptions?: Array<string>;
	}

	/** Describes a single task template field. */
	export interface TaskTemplateFieldFormProperties {
		Description: FormControl<string | null | undefined>,
		Type: FormControl<TaskTemplateFieldType | null | undefined>,
	}
	export function CreateTaskTemplateFieldFormGroup() {
		return new FormGroup<TaskTemplateFieldFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<TaskTemplateFieldType | null | undefined>(undefined),
		});

	}

	export enum TaskTemplateFieldType { NAME = 0, DESCRIPTION = 1, SCHEDULED_TIME = 2, QUICK_CONNECT = 3, URL = 4, NUMBER = 5, TEXT = 6, TEXT_AREA = 7, DATE_TIME = 8, BOOLEAN = 9, SINGLE_SELECT = 10, EMAIL = 11 }

	export interface PropertyValidationException {
	}
	export interface PropertyValidationExceptionFormProperties {
	}
	export function CreatePropertyValidationExceptionFormGroup() {
		return new FormGroup<PropertyValidationExceptionFormProperties>({
		});

	}

	export interface CreateTrafficDistributionGroupResponse {
		Id?: string;
		Arn?: string;
	}
	export interface CreateTrafficDistributionGroupResponseFormProperties {
		Id: FormControl<string | null | undefined>,
		Arn: FormControl<string | null | undefined>,
	}
	export function CreateCreateTrafficDistributionGroupResponseFormGroup() {
		return new FormGroup<CreateTrafficDistributionGroupResponseFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			Arn: new FormControl<string | null | undefined>(undefined),
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

	export interface CreateUseCaseResponse {
		UseCaseId?: string;
		UseCaseArn?: string;
	}
	export interface CreateUseCaseResponseFormProperties {
		UseCaseId: FormControl<string | null | undefined>,
		UseCaseArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateUseCaseResponseFormGroup() {
		return new FormGroup<CreateUseCaseResponseFormProperties>({
			UseCaseId: new FormControl<string | null | undefined>(undefined),
			UseCaseArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateUserResponse {
		UserId?: string;
		UserArn?: string;
	}
	export interface CreateUserResponseFormProperties {
		UserId: FormControl<string | null | undefined>,
		UserArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateUserResponseFormGroup() {
		return new FormGroup<CreateUserResponseFormProperties>({
			UserId: new FormControl<string | null | undefined>(undefined),
			UserArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum PhoneType { SOFT_PHONE = 0, DESK_PHONE = 1 }

	export interface CreateUserHierarchyGroupResponse {
		HierarchyGroupId?: string;
		HierarchyGroupArn?: string;
	}
	export interface CreateUserHierarchyGroupResponseFormProperties {
		HierarchyGroupId: FormControl<string | null | undefined>,
		HierarchyGroupArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateUserHierarchyGroupResponseFormGroup() {
		return new FormGroup<CreateUserHierarchyGroupResponseFormProperties>({
			HierarchyGroupId: new FormControl<string | null | undefined>(undefined),
			HierarchyGroupArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateVocabularyResponse {

		/** Required */
		VocabularyArn: string;

		/** Required */
		VocabularyId: string;

		/** Required */
		State: VocabularyState;
	}
	export interface CreateVocabularyResponseFormProperties {

		/** Required */
		VocabularyArn: FormControl<string | null | undefined>,

		/** Required */
		VocabularyId: FormControl<string | null | undefined>,

		/** Required */
		State: FormControl<VocabularyState | null | undefined>,
	}
	export function CreateCreateVocabularyResponseFormGroup() {
		return new FormGroup<CreateVocabularyResponseFormProperties>({
			VocabularyArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			VocabularyId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			State: new FormControl<VocabularyState | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum VocabularyState { CREATION_IN_PROGRESS = 0, ACTIVE = 1, CREATION_FAILED = 2, DELETE_IN_PROGRESS = 3 }

	export interface DeactivateEvaluationFormResponse {

		/** Required */
		EvaluationFormId: string;

		/** Required */
		EvaluationFormArn: string;

		/** Required */
		EvaluationFormVersion: number;
	}
	export interface DeactivateEvaluationFormResponseFormProperties {

		/** Required */
		EvaluationFormId: FormControl<string | null | undefined>,

		/** Required */
		EvaluationFormArn: FormControl<string | null | undefined>,

		/** Required */
		EvaluationFormVersion: FormControl<number | null | undefined>,
	}
	export function CreateDeactivateEvaluationFormResponseFormGroup() {
		return new FormGroup<DeactivateEvaluationFormResponseFormProperties>({
			EvaluationFormId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			EvaluationFormArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			EvaluationFormVersion: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteContactFlowResponse {
	}
	export interface DeleteContactFlowResponseFormProperties {
	}
	export function CreateDeleteContactFlowResponseFormGroup() {
		return new FormGroup<DeleteContactFlowResponseFormProperties>({
		});

	}

	export interface DeleteContactFlowModuleResponse {
	}
	export interface DeleteContactFlowModuleResponseFormProperties {
	}
	export function CreateDeleteContactFlowModuleResponseFormGroup() {
		return new FormGroup<DeleteContactFlowModuleResponseFormProperties>({
		});

	}

	export interface ResourceInUseException {
	}
	export interface ResourceInUseExceptionFormProperties {
	}
	export function CreateResourceInUseExceptionFormGroup() {
		return new FormGroup<ResourceInUseExceptionFormProperties>({
		});

	}

	export interface DeleteTaskTemplateResponse {
	}
	export interface DeleteTaskTemplateResponseFormProperties {
	}
	export function CreateDeleteTaskTemplateResponseFormGroup() {
		return new FormGroup<DeleteTaskTemplateResponseFormProperties>({
		});

	}

	export interface DeleteTrafficDistributionGroupResponse {
	}
	export interface DeleteTrafficDistributionGroupResponseFormProperties {
	}
	export function CreateDeleteTrafficDistributionGroupResponseFormGroup() {
		return new FormGroup<DeleteTrafficDistributionGroupResponseFormProperties>({
		});

	}

	export interface DeleteVocabularyResponse {

		/** Required */
		VocabularyArn: string;

		/** Required */
		VocabularyId: string;

		/** Required */
		State: VocabularyState;
	}
	export interface DeleteVocabularyResponseFormProperties {

		/** Required */
		VocabularyArn: FormControl<string | null | undefined>,

		/** Required */
		VocabularyId: FormControl<string | null | undefined>,

		/** Required */
		State: FormControl<VocabularyState | null | undefined>,
	}
	export function CreateDeleteVocabularyResponseFormGroup() {
		return new FormGroup<DeleteVocabularyResponseFormProperties>({
			VocabularyArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			VocabularyId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			State: new FormControl<VocabularyState | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeAgentStatusResponse {
		AgentStatus?: AgentStatus;
	}
	export interface DescribeAgentStatusResponseFormProperties {
	}
	export function CreateDescribeAgentStatusResponseFormGroup() {
		return new FormGroup<DescribeAgentStatusResponseFormProperties>({
		});

	}


	/** Contains information about an agent status. */
	export interface AgentStatus {
		AgentStatusARN?: string;
		AgentStatusId?: string;
		Name?: string;
		Description?: string;
		Type?: AgentStatusType;
		DisplayOrder?: number | null;
		State?: EvaluationFormScoringStatus;
		Tags?: TagMap;
	}

	/** Contains information about an agent status. */
	export interface AgentStatusFormProperties {
		AgentStatusARN: FormControl<string | null | undefined>,
		AgentStatusId: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		Type: FormControl<AgentStatusType | null | undefined>,
		DisplayOrder: FormControl<number | null | undefined>,
		State: FormControl<EvaluationFormScoringStatus | null | undefined>,
	}
	export function CreateAgentStatusFormGroup() {
		return new FormGroup<AgentStatusFormProperties>({
			AgentStatusARN: new FormControl<string | null | undefined>(undefined),
			AgentStatusId: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<AgentStatusType | null | undefined>(undefined),
			DisplayOrder: new FormControl<number | null | undefined>(undefined),
			State: new FormControl<EvaluationFormScoringStatus | null | undefined>(undefined),
		});

	}

	export enum AgentStatusType { ROUTABLE = 0, CUSTOM = 1, OFFLINE = 2 }

	export interface TagMap {
	}
	export interface TagMapFormProperties {
	}
	export function CreateTagMapFormGroup() {
		return new FormGroup<TagMapFormProperties>({
		});

	}

	export interface DescribeContactResponse {
		Contact?: Contact;
	}
	export interface DescribeContactResponseFormProperties {
	}
	export function CreateDescribeContactResponseFormGroup() {
		return new FormGroup<DescribeContactResponseFormProperties>({
		});

	}


	/** Contains information about a contact. */
	export interface Contact {
		Arn?: string;
		Id?: string;
		InitialContactId?: string;
		PreviousContactId?: string;
		InitiationMethod?: ContactInitiationMethod;
		Name?: string;
		Description?: string;
		Channel?: Channel;
		QueueInfo?: QueueInfo;
		AgentInfo?: AgentInfo;
		InitiationTimestamp?: Date;
		DisconnectTimestamp?: Date;
		LastUpdateTimestamp?: Date;
		ScheduledTimestamp?: Date;
		RelatedContactId?: string;
		WisdomInfo?: WisdomInfo;
	}

	/** Contains information about a contact. */
	export interface ContactFormProperties {
		Arn: FormControl<string | null | undefined>,
		Id: FormControl<string | null | undefined>,
		InitialContactId: FormControl<string | null | undefined>,
		PreviousContactId: FormControl<string | null | undefined>,
		InitiationMethod: FormControl<ContactInitiationMethod | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		Channel: FormControl<Channel | null | undefined>,
		InitiationTimestamp: FormControl<Date | null | undefined>,
		DisconnectTimestamp: FormControl<Date | null | undefined>,
		LastUpdateTimestamp: FormControl<Date | null | undefined>,
		ScheduledTimestamp: FormControl<Date | null | undefined>,
		RelatedContactId: FormControl<string | null | undefined>,
	}
	export function CreateContactFormGroup() {
		return new FormGroup<ContactFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			InitialContactId: new FormControl<string | null | undefined>(undefined),
			PreviousContactId: new FormControl<string | null | undefined>(undefined),
			InitiationMethod: new FormControl<ContactInitiationMethod | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			Channel: new FormControl<Channel | null | undefined>(undefined),
			InitiationTimestamp: new FormControl<Date | null | undefined>(undefined),
			DisconnectTimestamp: new FormControl<Date | null | undefined>(undefined),
			LastUpdateTimestamp: new FormControl<Date | null | undefined>(undefined),
			ScheduledTimestamp: new FormControl<Date | null | undefined>(undefined),
			RelatedContactId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ContactInitiationMethod { INBOUND = 0, OUTBOUND = 1, TRANSFER = 2, QUEUE_TRANSFER = 3, CALLBACK = 4, API = 5, DISCONNECT = 6, MONITOR = 7, EXTERNAL_OUTBOUND = 8 }


	/** If this contact was queued, this contains information about the queue.  */
	export interface QueueInfo {
		Id?: string;
		EnqueueTimestamp?: Date;
	}

	/** If this contact was queued, this contains information about the queue.  */
	export interface QueueInfoFormProperties {
		Id: FormControl<string | null | undefined>,
		EnqueueTimestamp: FormControl<Date | null | undefined>,
	}
	export function CreateQueueInfoFormGroup() {
		return new FormGroup<QueueInfoFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			EnqueueTimestamp: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Information about the agent who accepted the contact. */
	export interface AgentInfo {
		Id?: string;
		ConnectedToAgentTimestamp?: Date;
	}

	/** Information about the agent who accepted the contact. */
	export interface AgentInfoFormProperties {
		Id: FormControl<string | null | undefined>,
		ConnectedToAgentTimestamp: FormControl<Date | null | undefined>,
	}
	export function CreateAgentInfoFormGroup() {
		return new FormGroup<AgentInfoFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			ConnectedToAgentTimestamp: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Information about Amazon Connect Wisdom. */
	export interface WisdomInfo {
		SessionArn?: string;
	}

	/** Information about Amazon Connect Wisdom. */
	export interface WisdomInfoFormProperties {
		SessionArn: FormControl<string | null | undefined>,
	}
	export function CreateWisdomInfoFormGroup() {
		return new FormGroup<WisdomInfoFormProperties>({
			SessionArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeContactEvaluationResponse {

		/** Required */
		Evaluation: Evaluation;

		/** Required */
		EvaluationForm: EvaluationFormContent;
	}
	export interface DescribeContactEvaluationResponseFormProperties {
	}
	export function CreateDescribeContactEvaluationResponseFormGroup() {
		return new FormGroup<DescribeContactEvaluationResponseFormProperties>({
		});

	}


	/** Information about a contact evaluation. */
	export interface Evaluation {

		/** Required */
		EvaluationId: string;

		/** Required */
		EvaluationArn: string;

		/** Required */
		Metadata: EvaluationMetadata;

		/** Required */
		Answers: EvaluationAnswersOutputMap;

		/** Required */
		Notes: EvaluationNotesMap;

		/** Required */
		Status: EvaluationStatus;
		Scores?: EvaluationScoresMap;

		/** Required */
		CreatedTime: Date;

		/** Required */
		LastModifiedTime: Date;
		Tags?: TagMap;
	}

	/** Information about a contact evaluation. */
	export interface EvaluationFormProperties {

		/** Required */
		EvaluationId: FormControl<string | null | undefined>,

		/** Required */
		EvaluationArn: FormControl<string | null | undefined>,

		/** Required */
		Status: FormControl<EvaluationStatus | null | undefined>,

		/** Required */
		CreatedTime: FormControl<Date | null | undefined>,

		/** Required */
		LastModifiedTime: FormControl<Date | null | undefined>,
	}
	export function CreateEvaluationFormGroup() {
		return new FormGroup<EvaluationFormProperties>({
			EvaluationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			EvaluationArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Status: new FormControl<EvaluationStatus | null | undefined>(undefined, [Validators.required]),
			CreatedTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			LastModifiedTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Metadata information about a contact evaluation. */
	export interface EvaluationMetadata {

		/** Required */
		ContactId: string;

		/** Required */
		EvaluatorArn: string;
		ContactAgentId?: string;
		Score?: EvaluationScore;
	}

	/** Metadata information about a contact evaluation. */
	export interface EvaluationMetadataFormProperties {

		/** Required */
		ContactId: FormControl<string | null | undefined>,

		/** Required */
		EvaluatorArn: FormControl<string | null | undefined>,
		ContactAgentId: FormControl<string | null | undefined>,
	}
	export function CreateEvaluationMetadataFormGroup() {
		return new FormGroup<EvaluationMetadataFormProperties>({
			ContactId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			EvaluatorArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ContactAgentId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about scores of a contact evaluation item (section or question). */
	export interface EvaluationScore {
		Percentage?: number | null;
		NotApplicable?: boolean | null;
		AutomaticFail?: boolean | null;
	}

	/** Information about scores of a contact evaluation item (section or question). */
	export interface EvaluationScoreFormProperties {
		Percentage: FormControl<number | null | undefined>,
		NotApplicable: FormControl<boolean | null | undefined>,
		AutomaticFail: FormControl<boolean | null | undefined>,
	}
	export function CreateEvaluationScoreFormGroup() {
		return new FormGroup<EvaluationScoreFormProperties>({
			Percentage: new FormControl<number | null | undefined>(undefined),
			NotApplicable: new FormControl<boolean | null | undefined>(undefined),
			AutomaticFail: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface EvaluationAnswersOutputMap {
	}
	export interface EvaluationAnswersOutputMapFormProperties {
	}
	export function CreateEvaluationAnswersOutputMapFormGroup() {
		return new FormGroup<EvaluationAnswersOutputMapFormProperties>({
		});

	}

	export interface EvaluationNotesMap {
	}
	export interface EvaluationNotesMapFormProperties {
	}
	export function CreateEvaluationNotesMapFormGroup() {
		return new FormGroup<EvaluationNotesMapFormProperties>({
		});

	}

	export enum EvaluationStatus { DRAFT = 0, SUBMITTED = 1 }

	export interface EvaluationScoresMap {
	}
	export interface EvaluationScoresMapFormProperties {
	}
	export function CreateEvaluationScoresMapFormGroup() {
		return new FormGroup<EvaluationScoresMapFormProperties>({
		});

	}


	/** Information about an evaluation form used in a contact evaluation. */
	export interface EvaluationFormContent {

		/** Required */
		EvaluationFormVersion: number;

		/** Required */
		EvaluationFormId: string;

		/** Required */
		EvaluationFormArn: string;

		/** Required */
		Title: string;
		Description?: string;

		/** Required */
		Items: Array<EvaluationFormItem>;
		ScoringStrategy?: EvaluationFormScoringStrategy;
	}

	/** Information about an evaluation form used in a contact evaluation. */
	export interface EvaluationFormContentFormProperties {

		/** Required */
		EvaluationFormVersion: FormControl<number | null | undefined>,

		/** Required */
		EvaluationFormId: FormControl<string | null | undefined>,

		/** Required */
		EvaluationFormArn: FormControl<string | null | undefined>,

		/** Required */
		Title: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
	}
	export function CreateEvaluationFormContentFormGroup() {
		return new FormGroup<EvaluationFormContentFormProperties>({
			EvaluationFormVersion: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			EvaluationFormId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			EvaluationFormArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Title: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about scoring strategy for an evaluation form. */
	export interface EvaluationFormScoringStrategy {

		/** Required */
		Mode: EvaluationFormScoringMode;

		/** Required */
		Status: EvaluationFormScoringStatus;
	}

	/** Information about scoring strategy for an evaluation form. */
	export interface EvaluationFormScoringStrategyFormProperties {

		/** Required */
		Mode: FormControl<EvaluationFormScoringMode | null | undefined>,

		/** Required */
		Status: FormControl<EvaluationFormScoringStatus | null | undefined>,
	}
	export function CreateEvaluationFormScoringStrategyFormGroup() {
		return new FormGroup<EvaluationFormScoringStrategyFormProperties>({
			Mode: new FormControl<EvaluationFormScoringMode | null | undefined>(undefined, [Validators.required]),
			Status: new FormControl<EvaluationFormScoringStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeContactFlowResponse {
		ContactFlow?: ContactFlow;
	}
	export interface DescribeContactFlowResponseFormProperties {
	}
	export function CreateDescribeContactFlowResponseFormGroup() {
		return new FormGroup<DescribeContactFlowResponseFormProperties>({
		});

	}


	/** Contains information about a flow. */
	export interface ContactFlow {
		Arn?: string;
		Id?: string;
		Name?: string;
		Type?: ContactFlowType;
		State?: ContactFlowState;
		Description?: string;
		Content?: string;
		Tags?: TagMap;
	}

	/** Contains information about a flow. */
	export interface ContactFlowFormProperties {
		Arn: FormControl<string | null | undefined>,
		Id: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Type: FormControl<ContactFlowType | null | undefined>,
		State: FormControl<ContactFlowState | null | undefined>,
		Description: FormControl<string | null | undefined>,
		Content: FormControl<string | null | undefined>,
	}
	export function CreateContactFlowFormGroup() {
		return new FormGroup<ContactFlowFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<ContactFlowType | null | undefined>(undefined),
			State: new FormControl<ContactFlowState | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			Content: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ContactFlowType { CONTACT_FLOW = 0, CUSTOMER_QUEUE = 1, CUSTOMER_HOLD = 2, CUSTOMER_WHISPER = 3, AGENT_HOLD = 4, AGENT_WHISPER = 5, OUTBOUND_WHISPER = 6, AGENT_TRANSFER = 7, QUEUE_TRANSFER = 8 }

	export enum ContactFlowState { ACTIVE = 0, ARCHIVED = 1 }

	export interface ContactFlowNotPublishedException {
	}
	export interface ContactFlowNotPublishedExceptionFormProperties {
	}
	export function CreateContactFlowNotPublishedExceptionFormGroup() {
		return new FormGroup<ContactFlowNotPublishedExceptionFormProperties>({
		});

	}

	export interface DescribeContactFlowModuleResponse {
		ContactFlowModule?: ContactFlowModule;
	}
	export interface DescribeContactFlowModuleResponseFormProperties {
	}
	export function CreateDescribeContactFlowModuleResponseFormGroup() {
		return new FormGroup<DescribeContactFlowModuleResponseFormProperties>({
		});

	}


	/** Contains information about a flow module. */
	export interface ContactFlowModule {
		Arn?: string;
		Id?: string;
		Name?: string;
		Content?: string;
		Description?: string;
		State?: ContactFlowState;
		Status?: ContactFlowModuleStatus;
		Tags?: TagMap;
	}

	/** Contains information about a flow module. */
	export interface ContactFlowModuleFormProperties {
		Arn: FormControl<string | null | undefined>,
		Id: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Content: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		State: FormControl<ContactFlowState | null | undefined>,
		Status: FormControl<ContactFlowModuleStatus | null | undefined>,
	}
	export function CreateContactFlowModuleFormGroup() {
		return new FormGroup<ContactFlowModuleFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Content: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<ContactFlowState | null | undefined>(undefined),
			Status: new FormControl<ContactFlowModuleStatus | null | undefined>(undefined),
		});

	}

	export enum ContactFlowModuleStatus { PUBLISHED = 0, SAVED = 1 }

	export interface DescribeEvaluationFormResponse {

		/** Required */
		EvaluationForm: EvaluationForm;
	}
	export interface DescribeEvaluationFormResponseFormProperties {
	}
	export function CreateDescribeEvaluationFormResponseFormGroup() {
		return new FormGroup<DescribeEvaluationFormResponseFormProperties>({
		});

	}


	/** Information about the evaluation form. */
	export interface EvaluationForm {

		/** Required */
		EvaluationFormId: string;

		/** Required */
		EvaluationFormVersion: number;

		/** Required */
		Locked: boolean;

		/** Required */
		EvaluationFormArn: string;

		/** Required */
		Title: string;
		Description?: string;

		/** Required */
		Status: EvaluationFormVersionStatus;

		/** Required */
		Items: Array<EvaluationFormItem>;
		ScoringStrategy?: EvaluationFormScoringStrategy;

		/** Required */
		CreatedTime: Date;

		/** Required */
		CreatedBy: string;

		/** Required */
		LastModifiedTime: Date;

		/** Required */
		LastModifiedBy: string;
		Tags?: TagMap;
	}

	/** Information about the evaluation form. */
	export interface EvaluationFormFormProperties {

		/** Required */
		EvaluationFormId: FormControl<string | null | undefined>,

		/** Required */
		EvaluationFormVersion: FormControl<number | null | undefined>,

		/** Required */
		Locked: FormControl<boolean | null | undefined>,

		/** Required */
		EvaluationFormArn: FormControl<string | null | undefined>,

		/** Required */
		Title: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,

		/** Required */
		Status: FormControl<EvaluationFormVersionStatus | null | undefined>,

		/** Required */
		CreatedTime: FormControl<Date | null | undefined>,

		/** Required */
		CreatedBy: FormControl<string | null | undefined>,

		/** Required */
		LastModifiedTime: FormControl<Date | null | undefined>,

		/** Required */
		LastModifiedBy: FormControl<string | null | undefined>,
	}
	export function CreateEvaluationFormFormGroup() {
		return new FormGroup<EvaluationFormFormProperties>({
			EvaluationFormId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			EvaluationFormVersion: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Locked: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			EvaluationFormArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Title: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<EvaluationFormVersionStatus | null | undefined>(undefined, [Validators.required]),
			CreatedTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			CreatedBy: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			LastModifiedTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			LastModifiedBy: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum EvaluationFormVersionStatus { DRAFT = 0, ACTIVE = 1 }

	export interface DescribeHoursOfOperationResponse {
		HoursOfOperation?: HoursOfOperation;
	}
	export interface DescribeHoursOfOperationResponseFormProperties {
	}
	export function CreateDescribeHoursOfOperationResponseFormGroup() {
		return new FormGroup<DescribeHoursOfOperationResponseFormProperties>({
		});

	}


	/** Information about of the hours of operation. */
	export interface HoursOfOperation {
		HoursOfOperationId?: string;
		HoursOfOperationArn?: string;
		Name?: string;
		Description?: string;
		TimeZone?: string;
		Config?: Array<HoursOfOperationConfig>;
		Tags?: TagMap;
	}

	/** Information about of the hours of operation. */
	export interface HoursOfOperationFormProperties {
		HoursOfOperationId: FormControl<string | null | undefined>,
		HoursOfOperationArn: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		TimeZone: FormControl<string | null | undefined>,
	}
	export function CreateHoursOfOperationFormGroup() {
		return new FormGroup<HoursOfOperationFormProperties>({
			HoursOfOperationId: new FormControl<string | null | undefined>(undefined),
			HoursOfOperationArn: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			TimeZone: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeInstanceResponse {
		Instance?: Instance;
	}
	export interface DescribeInstanceResponseFormProperties {
	}
	export function CreateDescribeInstanceResponseFormGroup() {
		return new FormGroup<DescribeInstanceResponseFormProperties>({
		});

	}


	/** The Amazon Connect instance. */
	export interface Instance {
		Id?: string;
		Arn?: string;
		IdentityManagementType?: DirectoryType;
		InstanceAlias?: string;
		CreatedTime?: Date;
		ServiceRole?: string;
		InstanceStatus?: InstanceStatus;
		StatusReason?: InstanceStatusReason;
		InboundCallsEnabled?: boolean | null;
		OutboundCallsEnabled?: boolean | null;
		InstanceAccessUrl?: string;
	}

	/** The Amazon Connect instance. */
	export interface InstanceFormProperties {
		Id: FormControl<string | null | undefined>,
		Arn: FormControl<string | null | undefined>,
		IdentityManagementType: FormControl<DirectoryType | null | undefined>,
		InstanceAlias: FormControl<string | null | undefined>,
		CreatedTime: FormControl<Date | null | undefined>,
		ServiceRole: FormControl<string | null | undefined>,
		InstanceStatus: FormControl<InstanceStatus | null | undefined>,
		InboundCallsEnabled: FormControl<boolean | null | undefined>,
		OutboundCallsEnabled: FormControl<boolean | null | undefined>,
		InstanceAccessUrl: FormControl<string | null | undefined>,
	}
	export function CreateInstanceFormGroup() {
		return new FormGroup<InstanceFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			Arn: new FormControl<string | null | undefined>(undefined),
			IdentityManagementType: new FormControl<DirectoryType | null | undefined>(undefined),
			InstanceAlias: new FormControl<string | null | undefined>(undefined),
			CreatedTime: new FormControl<Date | null | undefined>(undefined),
			ServiceRole: new FormControl<string | null | undefined>(undefined),
			InstanceStatus: new FormControl<InstanceStatus | null | undefined>(undefined),
			InboundCallsEnabled: new FormControl<boolean | null | undefined>(undefined),
			OutboundCallsEnabled: new FormControl<boolean | null | undefined>(undefined),
			InstanceAccessUrl: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DirectoryType { SAML = 0, CONNECT_MANAGED = 1, EXISTING_DIRECTORY = 2 }

	export enum InstanceStatus { CREATION_IN_PROGRESS = 0, ACTIVE = 1, CREATION_FAILED = 2 }


	/** Relevant details why the instance was not successfully created. */
	export interface InstanceStatusReason {
		Message?: string;
	}

	/** Relevant details why the instance was not successfully created. */
	export interface InstanceStatusReasonFormProperties {
		Message: FormControl<string | null | undefined>,
	}
	export function CreateInstanceStatusReasonFormGroup() {
		return new FormGroup<InstanceStatusReasonFormProperties>({
			Message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeInstanceAttributeResponse {
		Attribute?: Attribute;
	}
	export interface DescribeInstanceAttributeResponseFormProperties {
	}
	export function CreateDescribeInstanceAttributeResponseFormGroup() {
		return new FormGroup<DescribeInstanceAttributeResponseFormProperties>({
		});

	}


	/** A toggle for an individual feature at the instance level. */
	export interface Attribute {
		AttributeType?: InstanceAttributeType;
		Value?: string;
	}

	/** A toggle for an individual feature at the instance level. */
	export interface AttributeFormProperties {
		AttributeType: FormControl<InstanceAttributeType | null | undefined>,
		Value: FormControl<string | null | undefined>,
	}
	export function CreateAttributeFormGroup() {
		return new FormGroup<AttributeFormProperties>({
			AttributeType: new FormControl<InstanceAttributeType | null | undefined>(undefined),
			Value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum InstanceAttributeType { INBOUND_CALLS = 0, OUTBOUND_CALLS = 1, CONTACTFLOW_LOGS = 2, CONTACT_LENS = 3, AUTO_RESOLVE_BEST_VOICES = 4, USE_CUSTOM_TTS_VOICES = 5, EARLY_MEDIA = 6, MULTI_PARTY_CONFERENCE = 7, HIGH_VOLUME_OUTBOUND = 8, ENHANCED_CONTACT_MONITORING = 9 }

	export interface DescribeInstanceStorageConfigResponse {
		StorageConfig?: InstanceStorageConfig;
	}
	export interface DescribeInstanceStorageConfigResponseFormProperties {
	}
	export function CreateDescribeInstanceStorageConfigResponseFormGroup() {
		return new FormGroup<DescribeInstanceStorageConfigResponseFormProperties>({
		});

	}


	/** The storage configuration for the instance. */
	export interface InstanceStorageConfig {
		AssociationId?: string;

		/** Required */
		StorageType: StorageType;
		S3Config?: S3Config;
		KinesisVideoStreamConfig?: KinesisVideoStreamConfig;
		KinesisStreamConfig?: KinesisStreamConfig;
		KinesisFirehoseConfig?: KinesisFirehoseConfig;
	}

	/** The storage configuration for the instance. */
	export interface InstanceStorageConfigFormProperties {
		AssociationId: FormControl<string | null | undefined>,

		/** Required */
		StorageType: FormControl<StorageType | null | undefined>,
	}
	export function CreateInstanceStorageConfigFormGroup() {
		return new FormGroup<InstanceStorageConfigFormProperties>({
			AssociationId: new FormControl<string | null | undefined>(undefined),
			StorageType: new FormControl<StorageType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribePhoneNumberResponse {
		ClaimedPhoneNumberSummary?: ClaimedPhoneNumberSummary;
	}
	export interface DescribePhoneNumberResponseFormProperties {
	}
	export function CreateDescribePhoneNumberResponseFormGroup() {
		return new FormGroup<DescribePhoneNumberResponseFormProperties>({
		});

	}


	/** Information about a phone number that has been claimed to your Amazon Connect instance or traffic distribution group. */
	export interface ClaimedPhoneNumberSummary {
		PhoneNumberId?: string;
		PhoneNumberArn?: string;
		PhoneNumber?: string;
		PhoneNumberCountryCode?: PhoneNumberCountryCode;
		PhoneNumberType?: PhoneNumberType;
		PhoneNumberDescription?: string;
		TargetArn?: string;
		Tags?: TagMap;
		PhoneNumberStatus?: PhoneNumberStatus;
	}

	/** Information about a phone number that has been claimed to your Amazon Connect instance or traffic distribution group. */
	export interface ClaimedPhoneNumberSummaryFormProperties {
		PhoneNumberId: FormControl<string | null | undefined>,
		PhoneNumberArn: FormControl<string | null | undefined>,
		PhoneNumber: FormControl<string | null | undefined>,
		PhoneNumberCountryCode: FormControl<PhoneNumberCountryCode | null | undefined>,
		PhoneNumberType: FormControl<PhoneNumberType | null | undefined>,
		PhoneNumberDescription: FormControl<string | null | undefined>,
		TargetArn: FormControl<string | null | undefined>,
	}
	export function CreateClaimedPhoneNumberSummaryFormGroup() {
		return new FormGroup<ClaimedPhoneNumberSummaryFormProperties>({
			PhoneNumberId: new FormControl<string | null | undefined>(undefined),
			PhoneNumberArn: new FormControl<string | null | undefined>(undefined),
			PhoneNumber: new FormControl<string | null | undefined>(undefined),
			PhoneNumberCountryCode: new FormControl<PhoneNumberCountryCode | null | undefined>(undefined),
			PhoneNumberType: new FormControl<PhoneNumberType | null | undefined>(undefined),
			PhoneNumberDescription: new FormControl<string | null | undefined>(undefined),
			TargetArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum PhoneNumberCountryCode { AF = 0, AL = 1, DZ = 2, AS = 3, AD = 4, AO = 5, AI = 6, AQ = 7, AG = 8, AR = 9, AM = 10, AW = 11, AU = 12, AT = 13, AZ = 14, BS = 15, BH = 16, BD = 17, BB = 18, BY = 19, BE = 20, BZ = 21, BJ = 22, BM = 23, BT = 24, BO = 25, BA = 26, BW = 27, BR = 28, IO = 29, VG = 30, BN = 31, BG = 32, BF = 33, BI = 34, KH = 35, CM = 36, CA = 37, CV = 38, KY = 39, CF = 40, TD = 41, CL = 42, CN = 43, CX = 44, CC = 45, CO = 46, KM = 47, CK = 48, CR = 49, HR = 50, CU = 51, CW = 52, CY = 53, CZ = 54, CD = 55, DK = 56, DJ = 57, DM = 58, DO = 59, TL = 60, EC = 61, EG = 62, SV = 63, GQ = 64, ER = 65, EE = 66, ET = 67, FK = 68, FO = 69, FJ = 70, FI = 71, FR = 72, PF = 73, GA = 74, GM = 75, GE = 76, DE = 77, GH = 78, GI = 79, GR = 80, GL = 81, GD = 82, GU = 83, GT = 84, GG = 85, GN = 86, GW = 87, GY = 88, HT = 89, HN = 90, HK = 91, HU = 92, IS = 93, IN = 94, ID = 95, IR = 96, IQ = 97, IE = 98, IM = 99, IL = 100, IT = 101, CI = 102, JM = 103, JP = 104, JE = 105, JO = 106, KZ = 107, KE = 108, KI = 109, KW = 110, KG = 111, LA = 112, LV = 113, LB = 114, LS = 115, LR = 116, LY = 117, LI = 118, LT = 119, LU = 120, MO = 121, MK = 122, MG = 123, MW = 124, MY = 125, MV = 126, ML = 127, MT = 128, MH = 129, MR = 130, MU = 131, YT = 132, MX = 133, FM = 134, MD = 135, MC = 136, MN = 137, ME = 138, MS = 139, MA = 140, MZ = 141, MM = 142, NA = 143, NR = 144, NP = 145, NL = 146, AN = 147, NC = 148, NZ = 149, NI = 150, NE = 151, NG = 152, NU = 153, KP = 154, MP = 155, NO = 156, OM = 157, PK = 158, PW = 159, PA = 160, PG = 161, PY = 162, PE = 163, PH = 164, PN = 165, PL = 166, PT = 167, PR = 168, QA = 169, CG = 170, RE = 171, RO = 172, RU = 173, RW = 174, BL = 175, SH = 176, KN = 177, LC = 178, MF = 179, PM = 180, VC = 181, WS = 182, SM = 183, ST = 184, SA = 185, SN = 186, RS = 187, SC = 188, SL = 189, SG = 190, SX = 191, SK = 192, SI = 193, SB = 194, SO = 195, ZA = 196, KR = 197, ES = 198, LK = 199, SD = 200, SR = 201, SJ = 202, SZ = 203, SE = 204, CH = 205, SY = 206, TW = 207, TJ = 208, TZ = 209, TH = 210, TG = 211, TK = 212, TO = 213, TT = 214, TN = 215, TR = 216, TM = 217, TC = 218, TV = 219, VI = 220, UG = 221, UA = 222, AE = 223, GB = 224, US = 225, UY = 226, UZ = 227, VU = 228, VA = 229, VE = 230, VN = 231, WF = 232, EH = 233, YE = 234, ZM = 235, ZW = 236 }

	export enum PhoneNumberType { TOLL_FREE = 0, DID = 1, UIFN = 2, SHARED = 3, THIRD_PARTY_TF = 4, THIRD_PARTY_DID = 5 }


	/** <p>The status of the phone number.</p> <ul> <li> <p> <code>CLAIMED</code> means the previous <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_ClaimedPhoneNumber.html">ClaimedPhoneNumber</a> or <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_UpdatePhoneNumber.html">UpdatePhoneNumber</a> operation succeeded.</p> </li> <li> <p> <code>IN_PROGRESS</code> means a <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_ClaimedPhoneNumber.html">ClaimedPhoneNumber</a> or <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_UpdatePhoneNumber.html">UpdatePhoneNumber</a> operation is still in progress and has not yet completed. You can call <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_DescribePhoneNumber.html">DescribePhoneNumber</a> at a later time to verify if the previous operation has completed.</p> </li> <li> <p> <code>FAILED</code> indicates that the previous <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_ClaimedPhoneNumber.html">ClaimedPhoneNumber</a> or <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_UpdatePhoneNumber.html">UpdatePhoneNumber</a> operation has failed. It will include a message indicating the failure reason. A common reason for a failure may be that the <code>TargetArn</code> value you are claiming or updating a phone number to has reached its limit of total claimed numbers. If you received a <code>FAILED</code> status from a <code>ClaimPhoneNumber</code> API call, you have one day to retry claiming the phone number before the number is released back to the inventory for other customers to claim.</p> </li> </ul> */
	export interface PhoneNumberStatus {
		Status?: PhoneNumberWorkflowStatus;
		Message?: string;
	}

	/** <p>The status of the phone number.</p> <ul> <li> <p> <code>CLAIMED</code> means the previous <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_ClaimedPhoneNumber.html">ClaimedPhoneNumber</a> or <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_UpdatePhoneNumber.html">UpdatePhoneNumber</a> operation succeeded.</p> </li> <li> <p> <code>IN_PROGRESS</code> means a <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_ClaimedPhoneNumber.html">ClaimedPhoneNumber</a> or <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_UpdatePhoneNumber.html">UpdatePhoneNumber</a> operation is still in progress and has not yet completed. You can call <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_DescribePhoneNumber.html">DescribePhoneNumber</a> at a later time to verify if the previous operation has completed.</p> </li> <li> <p> <code>FAILED</code> indicates that the previous <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_ClaimedPhoneNumber.html">ClaimedPhoneNumber</a> or <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_UpdatePhoneNumber.html">UpdatePhoneNumber</a> operation has failed. It will include a message indicating the failure reason. A common reason for a failure may be that the <code>TargetArn</code> value you are claiming or updating a phone number to has reached its limit of total claimed numbers. If you received a <code>FAILED</code> status from a <code>ClaimPhoneNumber</code> API call, you have one day to retry claiming the phone number before the number is released back to the inventory for other customers to claim.</p> </li> </ul> */
	export interface PhoneNumberStatusFormProperties {
		Status: FormControl<PhoneNumberWorkflowStatus | null | undefined>,
		Message: FormControl<string | null | undefined>,
	}
	export function CreatePhoneNumberStatusFormGroup() {
		return new FormGroup<PhoneNumberStatusFormProperties>({
			Status: new FormControl<PhoneNumberWorkflowStatus | null | undefined>(undefined),
			Message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum PhoneNumberWorkflowStatus { CLAIMED = 0, IN_PROGRESS = 1, FAILED = 2 }

	export interface DescribePromptResponse {
		Prompt?: Prompt;
	}
	export interface DescribePromptResponseFormProperties {
	}
	export function CreateDescribePromptResponseFormGroup() {
		return new FormGroup<DescribePromptResponseFormProperties>({
		});

	}


	/** Information about a prompt. */
	export interface Prompt {
		PromptARN?: string;
		PromptId?: string;
		Name?: string;
		Description?: string;
		Tags?: TagMap;
	}

	/** Information about a prompt. */
	export interface PromptFormProperties {
		PromptARN: FormControl<string | null | undefined>,
		PromptId: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
	}
	export function CreatePromptFormGroup() {
		return new FormGroup<PromptFormProperties>({
			PromptARN: new FormControl<string | null | undefined>(undefined),
			PromptId: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeQueueResponse {
		Queue?: Queue;
	}
	export interface DescribeQueueResponseFormProperties {
	}
	export function CreateDescribeQueueResponseFormGroup() {
		return new FormGroup<DescribeQueueResponseFormProperties>({
		});

	}


	/** Contains information about a queue. */
	export interface Queue {
		Name?: string;
		QueueArn?: string;
		QueueId?: string;
		Description?: string;
		OutboundCallerConfig?: OutboundCallerConfig;
		HoursOfOperationId?: string;
		MaxContacts?: number | null;
		Status?: EvaluationFormScoringStatus;
		Tags?: TagMap;
	}

	/** Contains information about a queue. */
	export interface QueueFormProperties {
		Name: FormControl<string | null | undefined>,
		QueueArn: FormControl<string | null | undefined>,
		QueueId: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		HoursOfOperationId: FormControl<string | null | undefined>,
		MaxContacts: FormControl<number | null | undefined>,
		Status: FormControl<EvaluationFormScoringStatus | null | undefined>,
	}
	export function CreateQueueFormGroup() {
		return new FormGroup<QueueFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			QueueArn: new FormControl<string | null | undefined>(undefined),
			QueueId: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			HoursOfOperationId: new FormControl<string | null | undefined>(undefined),
			MaxContacts: new FormControl<number | null | undefined>(undefined),
			Status: new FormControl<EvaluationFormScoringStatus | null | undefined>(undefined),
		});

	}


	/** The outbound caller ID name, number, and outbound whisper flow. */
	export interface OutboundCallerConfig {
		OutboundCallerIdName?: string;
		OutboundCallerIdNumberId?: string;
		OutboundFlowId?: string;
	}

	/** The outbound caller ID name, number, and outbound whisper flow. */
	export interface OutboundCallerConfigFormProperties {
		OutboundCallerIdName: FormControl<string | null | undefined>,
		OutboundCallerIdNumberId: FormControl<string | null | undefined>,
		OutboundFlowId: FormControl<string | null | undefined>,
	}
	export function CreateOutboundCallerConfigFormGroup() {
		return new FormGroup<OutboundCallerConfigFormProperties>({
			OutboundCallerIdName: new FormControl<string | null | undefined>(undefined),
			OutboundCallerIdNumberId: new FormControl<string | null | undefined>(undefined),
			OutboundFlowId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeQuickConnectResponse {
		QuickConnect?: QuickConnect;
	}
	export interface DescribeQuickConnectResponseFormProperties {
	}
	export function CreateDescribeQuickConnectResponseFormGroup() {
		return new FormGroup<DescribeQuickConnectResponseFormProperties>({
		});

	}


	/** Contains information about a quick connect. */
	export interface QuickConnect {
		QuickConnectARN?: string;
		QuickConnectId?: string;
		Name?: string;
		Description?: string;
		QuickConnectConfig?: QuickConnectConfig;
		Tags?: TagMap;
	}

	/** Contains information about a quick connect. */
	export interface QuickConnectFormProperties {
		QuickConnectARN: FormControl<string | null | undefined>,
		QuickConnectId: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
	}
	export function CreateQuickConnectFormGroup() {
		return new FormGroup<QuickConnectFormProperties>({
			QuickConnectARN: new FormControl<string | null | undefined>(undefined),
			QuickConnectId: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains configuration settings for a quick connect. */
	export interface QuickConnectConfig {

		/** Required */
		QuickConnectType: QuickConnectType;
		UserConfig?: UserQuickConnectConfig;
		QueueConfig?: QueueQuickConnectConfig;
		PhoneConfig?: PhoneNumberQuickConnectConfig;
	}

	/** Contains configuration settings for a quick connect. */
	export interface QuickConnectConfigFormProperties {

		/** Required */
		QuickConnectType: FormControl<QuickConnectType | null | undefined>,
	}
	export function CreateQuickConnectConfigFormGroup() {
		return new FormGroup<QuickConnectConfigFormProperties>({
			QuickConnectType: new FormControl<QuickConnectType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeRoutingProfileResponse {
		RoutingProfile?: RoutingProfile;
	}
	export interface DescribeRoutingProfileResponseFormProperties {
	}
	export function CreateDescribeRoutingProfileResponseFormGroup() {
		return new FormGroup<DescribeRoutingProfileResponseFormProperties>({
		});

	}


	/** Contains information about a routing profile. */
	export interface RoutingProfile {
		InstanceId?: string;
		Name?: string;
		RoutingProfileArn?: string;
		RoutingProfileId?: string;
		Description?: string;
		MediaConcurrencies?: Array<MediaConcurrency>;
		DefaultOutboundQueueId?: string;
		Tags?: TagMap;
		NumberOfAssociatedQueues?: number | null;
		NumberOfAssociatedUsers?: number | null;
		AgentAvailabilityTimer?: AgentAvailabilityTimer;
	}

	/** Contains information about a routing profile. */
	export interface RoutingProfileFormProperties {
		InstanceId: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		RoutingProfileArn: FormControl<string | null | undefined>,
		RoutingProfileId: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		DefaultOutboundQueueId: FormControl<string | null | undefined>,
		NumberOfAssociatedQueues: FormControl<number | null | undefined>,
		NumberOfAssociatedUsers: FormControl<number | null | undefined>,
		AgentAvailabilityTimer: FormControl<AgentAvailabilityTimer | null | undefined>,
	}
	export function CreateRoutingProfileFormGroup() {
		return new FormGroup<RoutingProfileFormProperties>({
			InstanceId: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			RoutingProfileArn: new FormControl<string | null | undefined>(undefined),
			RoutingProfileId: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			DefaultOutboundQueueId: new FormControl<string | null | undefined>(undefined),
			NumberOfAssociatedQueues: new FormControl<number | null | undefined>(undefined),
			NumberOfAssociatedUsers: new FormControl<number | null | undefined>(undefined),
			AgentAvailabilityTimer: new FormControl<AgentAvailabilityTimer | null | undefined>(undefined),
		});

	}

	export enum AgentAvailabilityTimer { TIME_SINCE_LAST_ACTIVITY = 0, TIME_SINCE_LAST_INBOUND = 1 }

	export interface DescribeRuleResponse {

		/** Required */
		Rule: Rule;
	}
	export interface DescribeRuleResponseFormProperties {
	}
	export function CreateDescribeRuleResponseFormGroup() {
		return new FormGroup<DescribeRuleResponseFormProperties>({
		});

	}


	/** Information about a rule. */
	export interface Rule {

		/** Required */
		Name: string;

		/** Required */
		RuleId: string;

		/** Required */
		RuleArn: string;

		/** Required */
		TriggerEventSource: RuleTriggerEventSource;

		/** Required */
		Function: string;

		/** Required */
		Actions: Array<RuleAction>;

		/** Required */
		PublishStatus: RulePublishStatus;

		/** Required */
		CreatedTime: Date;

		/** Required */
		LastUpdatedTime: Date;

		/** Required */
		LastUpdatedBy: string;
		Tags?: TagMap;
	}

	/** Information about a rule. */
	export interface RuleFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		RuleId: FormControl<string | null | undefined>,

		/** Required */
		RuleArn: FormControl<string | null | undefined>,

		/** Required */
		Function: FormControl<string | null | undefined>,

		/** Required */
		PublishStatus: FormControl<RulePublishStatus | null | undefined>,

		/** Required */
		CreatedTime: FormControl<Date | null | undefined>,

		/** Required */
		LastUpdatedTime: FormControl<Date | null | undefined>,

		/** Required */
		LastUpdatedBy: FormControl<string | null | undefined>,
	}
	export function CreateRuleFormGroup() {
		return new FormGroup<RuleFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RuleId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RuleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Function: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PublishStatus: new FormControl<RulePublishStatus | null | undefined>(undefined, [Validators.required]),
			CreatedTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			LastUpdatedTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			LastUpdatedBy: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The name of the event source. This field is required if <code>TriggerEventSource</code> is one of the following values: <code>OnZendeskTicketCreate</code> | <code>OnZendeskTicketStatusUpdate</code> | <code>OnSalesforceCaseCreate</code>  */
	export interface RuleTriggerEventSource {

		/** Required */
		EventSourceName: EventSourceName;
		IntegrationAssociationId?: string;
	}

	/** The name of the event source. This field is required if <code>TriggerEventSource</code> is one of the following values: <code>OnZendeskTicketCreate</code> | <code>OnZendeskTicketStatusUpdate</code> | <code>OnSalesforceCaseCreate</code>  */
	export interface RuleTriggerEventSourceFormProperties {

		/** Required */
		EventSourceName: FormControl<EventSourceName | null | undefined>,
		IntegrationAssociationId: FormControl<string | null | undefined>,
	}
	export function CreateRuleTriggerEventSourceFormGroup() {
		return new FormGroup<RuleTriggerEventSourceFormProperties>({
			EventSourceName: new FormControl<EventSourceName | null | undefined>(undefined, [Validators.required]),
			IntegrationAssociationId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum RulePublishStatus { DRAFT = 0, PUBLISHED = 1 }

	export interface DescribeSecurityProfileResponse {
		SecurityProfile?: SecurityProfile;
	}
	export interface DescribeSecurityProfileResponseFormProperties {
	}
	export function CreateDescribeSecurityProfileResponseFormGroup() {
		return new FormGroup<DescribeSecurityProfileResponseFormProperties>({
		});

	}


	/** Contains information about a security profile. */
	export interface SecurityProfile {
		Id?: string;
		OrganizationResourceId?: string;
		Arn?: string;
		SecurityProfileName?: string;
		Description?: string;
		Tags?: TagMap;
		AllowedAccessControlTags?: AllowedAccessControlTags;
		TagRestrictedResources?: Array<string>;
	}

	/** Contains information about a security profile. */
	export interface SecurityProfileFormProperties {
		Id: FormControl<string | null | undefined>,
		OrganizationResourceId: FormControl<string | null | undefined>,
		Arn: FormControl<string | null | undefined>,
		SecurityProfileName: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
	}
	export function CreateSecurityProfileFormGroup() {
		return new FormGroup<SecurityProfileFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			OrganizationResourceId: new FormControl<string | null | undefined>(undefined),
			Arn: new FormControl<string | null | undefined>(undefined),
			SecurityProfileName: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AllowedAccessControlTags {
	}
	export interface AllowedAccessControlTagsFormProperties {
	}
	export function CreateAllowedAccessControlTagsFormGroup() {
		return new FormGroup<AllowedAccessControlTagsFormProperties>({
		});

	}

	export interface DescribeTrafficDistributionGroupResponse {
		TrafficDistributionGroup?: TrafficDistributionGroup;
	}
	export interface DescribeTrafficDistributionGroupResponseFormProperties {
	}
	export function CreateDescribeTrafficDistributionGroupResponseFormGroup() {
		return new FormGroup<DescribeTrafficDistributionGroupResponseFormProperties>({
		});

	}


	/** Information about a traffic distribution group. */
	export interface TrafficDistributionGroup {
		Id?: string;
		Arn?: string;
		Name?: string;
		Description?: string;
		InstanceArn?: string;
		Status?: TrafficDistributionGroupStatus;
		Tags?: TagMap;
	}

	/** Information about a traffic distribution group. */
	export interface TrafficDistributionGroupFormProperties {
		Id: FormControl<string | null | undefined>,
		Arn: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		InstanceArn: FormControl<string | null | undefined>,
		Status: FormControl<TrafficDistributionGroupStatus | null | undefined>,
	}
	export function CreateTrafficDistributionGroupFormGroup() {
		return new FormGroup<TrafficDistributionGroupFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			Arn: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			InstanceArn: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<TrafficDistributionGroupStatus | null | undefined>(undefined),
		});

	}

	export enum TrafficDistributionGroupStatus { CREATION_IN_PROGRESS = 0, ACTIVE = 1, CREATION_FAILED = 2, PENDING_DELETION = 3, DELETION_FAILED = 4, UPDATE_IN_PROGRESS = 5 }

	export interface DescribeUserResponse {
		User?: User;
	}
	export interface DescribeUserResponseFormProperties {
	}
	export function CreateDescribeUserResponseFormGroup() {
		return new FormGroup<DescribeUserResponseFormProperties>({
		});

	}


	/** Contains information about a user account for an Amazon Connect instance. */
	export interface User {
		Id?: string;
		Arn?: string;
		Username?: string;
		IdentityInfo?: UserIdentityInfo;
		PhoneConfig?: UserPhoneConfig;
		DirectoryUserId?: string;
		SecurityProfileIds?: Array<string>;
		RoutingProfileId?: string;
		HierarchyGroupId?: string;
		Tags?: TagMap;
	}

	/** Contains information about a user account for an Amazon Connect instance. */
	export interface UserFormProperties {
		Id: FormControl<string | null | undefined>,
		Arn: FormControl<string | null | undefined>,
		Username: FormControl<string | null | undefined>,
		DirectoryUserId: FormControl<string | null | undefined>,
		RoutingProfileId: FormControl<string | null | undefined>,
		HierarchyGroupId: FormControl<string | null | undefined>,
	}
	export function CreateUserFormGroup() {
		return new FormGroup<UserFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			Arn: new FormControl<string | null | undefined>(undefined),
			Username: new FormControl<string | null | undefined>(undefined),
			DirectoryUserId: new FormControl<string | null | undefined>(undefined),
			RoutingProfileId: new FormControl<string | null | undefined>(undefined),
			HierarchyGroupId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information about the identity of a user. */
	export interface UserIdentityInfo {
		FirstName?: string;
		LastName?: string;
		Email?: string;
		SecondaryEmail?: string;
		Mobile?: string;
	}

	/** Contains information about the identity of a user. */
	export interface UserIdentityInfoFormProperties {
		FirstName: FormControl<string | null | undefined>,
		LastName: FormControl<string | null | undefined>,
		Email: FormControl<string | null | undefined>,
		SecondaryEmail: FormControl<string | null | undefined>,
		Mobile: FormControl<string | null | undefined>,
	}
	export function CreateUserIdentityInfoFormGroup() {
		return new FormGroup<UserIdentityInfoFormProperties>({
			FirstName: new FormControl<string | null | undefined>(undefined),
			LastName: new FormControl<string | null | undefined>(undefined),
			Email: new FormControl<string | null | undefined>(undefined),
			SecondaryEmail: new FormControl<string | null | undefined>(undefined),
			Mobile: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information about the phone configuration settings for a user. */
	export interface UserPhoneConfig {

		/** Required */
		PhoneType: PhoneType;
		AutoAccept?: boolean | null;
		AfterContactWorkTimeLimit?: number | null;
		DeskPhoneNumber?: string;
	}

	/** Contains information about the phone configuration settings for a user. */
	export interface UserPhoneConfigFormProperties {

		/** Required */
		PhoneType: FormControl<PhoneType | null | undefined>,
		AutoAccept: FormControl<boolean | null | undefined>,
		AfterContactWorkTimeLimit: FormControl<number | null | undefined>,
		DeskPhoneNumber: FormControl<string | null | undefined>,
	}
	export function CreateUserPhoneConfigFormGroup() {
		return new FormGroup<UserPhoneConfigFormProperties>({
			PhoneType: new FormControl<PhoneType | null | undefined>(undefined, [Validators.required]),
			AutoAccept: new FormControl<boolean | null | undefined>(undefined),
			AfterContactWorkTimeLimit: new FormControl<number | null | undefined>(undefined),
			DeskPhoneNumber: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeUserHierarchyGroupResponse {
		HierarchyGroup?: HierarchyGroup;
	}
	export interface DescribeUserHierarchyGroupResponseFormProperties {
	}
	export function CreateDescribeUserHierarchyGroupResponseFormGroup() {
		return new FormGroup<DescribeUserHierarchyGroupResponseFormProperties>({
		});

	}


	/** Contains information about a hierarchy group. */
	export interface HierarchyGroup {
		Id?: string;
		Arn?: string;
		Name?: string;
		LevelId?: string;
		HierarchyPath?: HierarchyPath;
		Tags?: TagMap;
	}

	/** Contains information about a hierarchy group. */
	export interface HierarchyGroupFormProperties {
		Id: FormControl<string | null | undefined>,
		Arn: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		LevelId: FormControl<string | null | undefined>,
	}
	export function CreateHierarchyGroupFormGroup() {
		return new FormGroup<HierarchyGroupFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			Arn: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			LevelId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information about the levels of a hierarchy group. */
	export interface HierarchyPath {
		LevelOne?: HierarchyGroupSummary;
		LevelTwo?: HierarchyGroupSummary;
		LevelThree?: HierarchyGroupSummary;
		LevelFour?: HierarchyGroupSummary;
		LevelFive?: HierarchyGroupSummary;
	}

	/** Contains information about the levels of a hierarchy group. */
	export interface HierarchyPathFormProperties {
	}
	export function CreateHierarchyPathFormGroup() {
		return new FormGroup<HierarchyPathFormProperties>({
		});

	}


	/** Contains summary information about a hierarchy group. */
	export interface HierarchyGroupSummary {
		Id?: string;
		Arn?: string;
		Name?: string;
	}

	/** Contains summary information about a hierarchy group. */
	export interface HierarchyGroupSummaryFormProperties {
		Id: FormControl<string | null | undefined>,
		Arn: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
	}
	export function CreateHierarchyGroupSummaryFormGroup() {
		return new FormGroup<HierarchyGroupSummaryFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			Arn: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeUserHierarchyStructureResponse {
		HierarchyStructure?: HierarchyStructure;
	}
	export interface DescribeUserHierarchyStructureResponseFormProperties {
	}
	export function CreateDescribeUserHierarchyStructureResponseFormGroup() {
		return new FormGroup<DescribeUserHierarchyStructureResponseFormProperties>({
		});

	}


	/** Contains information about a hierarchy structure. */
	export interface HierarchyStructure {
		LevelOne?: HierarchyLevel;
		LevelTwo?: HierarchyLevel;
		LevelThree?: HierarchyLevel;
		LevelFour?: HierarchyLevel;
		LevelFive?: HierarchyLevel;
	}

	/** Contains information about a hierarchy structure. */
	export interface HierarchyStructureFormProperties {
	}
	export function CreateHierarchyStructureFormGroup() {
		return new FormGroup<HierarchyStructureFormProperties>({
		});

	}


	/** Contains information about a hierarchy level. */
	export interface HierarchyLevel {
		Id?: string;
		Arn?: string;
		Name?: string;
	}

	/** Contains information about a hierarchy level. */
	export interface HierarchyLevelFormProperties {
		Id: FormControl<string | null | undefined>,
		Arn: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
	}
	export function CreateHierarchyLevelFormGroup() {
		return new FormGroup<HierarchyLevelFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			Arn: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeVocabularyResponse {

		/** Required */
		Vocabulary: Vocabulary;
	}
	export interface DescribeVocabularyResponseFormProperties {
	}
	export function CreateDescribeVocabularyResponseFormGroup() {
		return new FormGroup<DescribeVocabularyResponseFormProperties>({
		});

	}


	/** Contains information about a custom vocabulary. */
	export interface Vocabulary {

		/** Required */
		Name: string;

		/** Required */
		Id: string;

		/** Required */
		Arn: string;

		/** Required */
		LanguageCode: VocabularyLanguageCode;

		/** Required */
		State: VocabularyState;

		/** Required */
		LastModifiedTime: Date;
		FailureReason?: string;
		Content?: string;
		Tags?: TagMap;
	}

	/** Contains information about a custom vocabulary. */
	export interface VocabularyFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		Id: FormControl<string | null | undefined>,

		/** Required */
		Arn: FormControl<string | null | undefined>,

		/** Required */
		LanguageCode: FormControl<VocabularyLanguageCode | null | undefined>,

		/** Required */
		State: FormControl<VocabularyState | null | undefined>,

		/** Required */
		LastModifiedTime: FormControl<Date | null | undefined>,
		FailureReason: FormControl<string | null | undefined>,
		Content: FormControl<string | null | undefined>,
	}
	export function CreateVocabularyFormGroup() {
		return new FormGroup<VocabularyFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			LanguageCode: new FormControl<VocabularyLanguageCode | null | undefined>(undefined, [Validators.required]),
			State: new FormControl<VocabularyState | null | undefined>(undefined, [Validators.required]),
			LastModifiedTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			FailureReason: new FormControl<string | null | undefined>(undefined),
			Content: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum VocabularyLanguageCode { 'ar-AE' = 0, 'de-CH' = 1, 'de-DE' = 2, 'en-AB' = 3, 'en-AU' = 4, 'en-GB' = 5, 'en-IE' = 6, 'en-IN' = 7, 'en-US' = 8, 'en-WL' = 9, 'es-ES' = 10, 'es-US' = 11, 'fr-CA' = 12, 'fr-FR' = 13, 'hi-IN' = 14, 'it-IT' = 15, 'ja-JP' = 16, 'ko-KR' = 17, 'pt-BR' = 18, 'pt-PT' = 19, 'zh-CN' = 20, 'en-NZ' = 21, 'en-ZA' = 22 }

	export interface DismissUserContactResponse {
	}
	export interface DismissUserContactResponseFormProperties {
	}
	export function CreateDismissUserContactResponseFormGroup() {
		return new FormGroup<DismissUserContactResponseFormProperties>({
		});

	}

	export interface GetContactAttributesResponse {
		Attributes?: Attributes;
	}
	export interface GetContactAttributesResponseFormProperties {
	}
	export function CreateGetContactAttributesResponseFormGroup() {
		return new FormGroup<GetContactAttributesResponseFormProperties>({
		});

	}

	export interface Attributes {
	}
	export interface AttributesFormProperties {
	}
	export function CreateAttributesFormGroup() {
		return new FormGroup<AttributesFormProperties>({
		});

	}

	export interface GetCurrentMetricDataResponse {
		NextToken?: string;
		MetricResults?: Array<CurrentMetricResult>;
		DataSnapshotTime?: Date;
		ApproximateTotalCount?: number | null;
	}
	export interface GetCurrentMetricDataResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
		DataSnapshotTime: FormControl<Date | null | undefined>,
		ApproximateTotalCount: FormControl<number | null | undefined>,
	}
	export function CreateGetCurrentMetricDataResponseFormGroup() {
		return new FormGroup<GetCurrentMetricDataResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			DataSnapshotTime: new FormControl<Date | null | undefined>(undefined),
			ApproximateTotalCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Contains information about a set of real-time metrics. */
	export interface CurrentMetricResult {
		Dimensions?: Dimensions;
		Collections?: Array<CurrentMetricData>;
	}

	/** Contains information about a set of real-time metrics. */
	export interface CurrentMetricResultFormProperties {
	}
	export function CreateCurrentMetricResultFormGroup() {
		return new FormGroup<CurrentMetricResultFormProperties>({
		});

	}


	/** Contains information about the dimensions for a set of metrics. */
	export interface Dimensions {
		Queue?: QueueReference;
		Channel?: Channel;

		/** Information about the routing profile assigned to the user. */
		RoutingProfile?: RoutingProfileReference;
	}

	/** Contains information about the dimensions for a set of metrics. */
	export interface DimensionsFormProperties {
		Channel: FormControl<Channel | null | undefined>,
	}
	export function CreateDimensionsFormGroup() {
		return new FormGroup<DimensionsFormProperties>({
			Channel: new FormControl<Channel | null | undefined>(undefined),
		});

	}


	/** Contains information about a queue resource for which metrics are returned. */
	export interface QueueReference {
		Id?: string;
		Arn?: string;
	}

	/** Contains information about a queue resource for which metrics are returned. */
	export interface QueueReferenceFormProperties {
		Id: FormControl<string | null | undefined>,
		Arn: FormControl<string | null | undefined>,
	}
	export function CreateQueueReferenceFormGroup() {
		return new FormGroup<QueueReferenceFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			Arn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about the routing profile assigned to the user. */
	export interface RoutingProfileReference {
		Id?: string;
		Arn?: string;
	}

	/** Information about the routing profile assigned to the user. */
	export interface RoutingProfileReferenceFormProperties {
		Id: FormControl<string | null | undefined>,
		Arn: FormControl<string | null | undefined>,
	}
	export function CreateRoutingProfileReferenceFormGroup() {
		return new FormGroup<RoutingProfileReferenceFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			Arn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains the data for a real-time metric. */
	export interface CurrentMetricData {
		Metric?: CurrentMetric;
		Value?: number | null;
	}

	/** Contains the data for a real-time metric. */
	export interface CurrentMetricDataFormProperties {
		Value: FormControl<number | null | undefined>,
	}
	export function CreateCurrentMetricDataFormGroup() {
		return new FormGroup<CurrentMetricDataFormProperties>({
			Value: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Contains information about a real-time metric. For a description of each metric, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/real-time-metrics-definitions.html">Real-time Metrics Definitions</a> in the <i>Amazon Connect Administrator Guide</i>. */
	export interface CurrentMetric {
		Name?: CurrentMetricName;
		Unit?: Unit;
	}

	/** Contains information about a real-time metric. For a description of each metric, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/real-time-metrics-definitions.html">Real-time Metrics Definitions</a> in the <i>Amazon Connect Administrator Guide</i>. */
	export interface CurrentMetricFormProperties {
		Name: FormControl<CurrentMetricName | null | undefined>,
		Unit: FormControl<Unit | null | undefined>,
	}
	export function CreateCurrentMetricFormGroup() {
		return new FormGroup<CurrentMetricFormProperties>({
			Name: new FormControl<CurrentMetricName | null | undefined>(undefined),
			Unit: new FormControl<Unit | null | undefined>(undefined),
		});

	}


	/** The current metric names. */
	export enum CurrentMetricName { AGENTS_ONLINE = 0, AGENTS_AVAILABLE = 1, AGENTS_ON_CALL = 2, AGENTS_NON_PRODUCTIVE = 3, AGENTS_AFTER_CONTACT_WORK = 4, AGENTS_ERROR = 5, AGENTS_STAFFED = 6, CONTACTS_IN_QUEUE = 7, OLDEST_CONTACT_AGE = 8, CONTACTS_SCHEDULED = 9, AGENTS_ON_CONTACT = 10, SLOTS_ACTIVE = 11, SLOTS_AVAILABLE = 12 }

	export enum Unit { SECONDS = 0, COUNT = 1, PERCENT = 2 }

	export enum Grouping { QUEUE = 0, CHANNEL = 1, ROUTING_PROFILE = 2 }


	/** The way to sort the resulting response based on metrics. By default resources are sorted based on <code>AGENTS_ONLINE</code>, <code>DESCENDING</code>. The metric collection is sorted based on the input metrics. */
	export interface CurrentMetricSortCriteria {

		/** The current metric names. */
		SortByMetric?: CurrentMetricName | null;
		SortOrder?: SortOrder;
	}

	/** The way to sort the resulting response based on metrics. By default resources are sorted based on <code>AGENTS_ONLINE</code>, <code>DESCENDING</code>. The metric collection is sorted based on the input metrics. */
	export interface CurrentMetricSortCriteriaFormProperties {

		/** The current metric names. */
		SortByMetric: FormControl<CurrentMetricName | null | undefined>,
		SortOrder: FormControl<SortOrder | null | undefined>,
	}
	export function CreateCurrentMetricSortCriteriaFormGroup() {
		return new FormGroup<CurrentMetricSortCriteriaFormProperties>({
			SortByMetric: new FormControl<CurrentMetricName | null | undefined>(undefined),
			SortOrder: new FormControl<SortOrder | null | undefined>(undefined),
		});

	}

	export enum SortOrder { ASCENDING = 0, DESCENDING = 1 }

	export interface GetCurrentUserDataResponse {
		NextToken?: string;
		UserDataList?: Array<UserData>;
		ApproximateTotalCount?: number | null;
	}
	export interface GetCurrentUserDataResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
		ApproximateTotalCount: FormControl<number | null | undefined>,
	}
	export function CreateGetCurrentUserDataResponseFormGroup() {
		return new FormGroup<GetCurrentUserDataResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			ApproximateTotalCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Data for a user. */
	export interface UserData {
		User?: UserReference;
		RoutingProfile?: RoutingProfileReference;
		HierarchyPath?: HierarchyPathReference;
		Status?: AgentStatusReference;
		AvailableSlotsByChannel?: ChannelToCountMap;
		MaxSlotsByChannel?: ChannelToCountMap;
		ActiveSlotsByChannel?: ChannelToCountMap;
		Contacts?: Array<AgentContactReference>;
		NextStatus?: string;
	}

	/** Data for a user. */
	export interface UserDataFormProperties {
		NextStatus: FormControl<string | null | undefined>,
	}
	export function CreateUserDataFormGroup() {
		return new FormGroup<UserDataFormProperties>({
			NextStatus: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about the user. */
	export interface UserReference {
		Id?: string;
		Arn?: string;
	}

	/** Information about the user. */
	export interface UserReferenceFormProperties {
		Id: FormControl<string | null | undefined>,
		Arn: FormControl<string | null | undefined>,
	}
	export function CreateUserReferenceFormGroup() {
		return new FormGroup<UserReferenceFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			Arn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about the levels in the hierarchy group. */
	export interface HierarchyPathReference {
		LevelOne?: HierarchyGroupSummaryReference;
		LevelTwo?: HierarchyGroupSummaryReference;
		LevelThree?: HierarchyGroupSummaryReference;
		LevelFour?: HierarchyGroupSummaryReference;
		LevelFive?: HierarchyGroupSummaryReference;
	}

	/** Information about the levels in the hierarchy group. */
	export interface HierarchyPathReferenceFormProperties {
	}
	export function CreateHierarchyPathReferenceFormGroup() {
		return new FormGroup<HierarchyPathReferenceFormProperties>({
		});

	}


	/** Information about the hierarchy group. */
	export interface HierarchyGroupSummaryReference {
		Id?: string;
		Arn?: string;
	}

	/** Information about the hierarchy group. */
	export interface HierarchyGroupSummaryReferenceFormProperties {
		Id: FormControl<string | null | undefined>,
		Arn: FormControl<string | null | undefined>,
	}
	export function CreateHierarchyGroupSummaryReferenceFormGroup() {
		return new FormGroup<HierarchyGroupSummaryReferenceFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			Arn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about the agent's status. */
	export interface AgentStatusReference {
		StatusStartTimestamp?: Date;
		StatusArn?: string;
		StatusName?: string;
	}

	/** Information about the agent's status. */
	export interface AgentStatusReferenceFormProperties {
		StatusStartTimestamp: FormControl<Date | null | undefined>,
		StatusArn: FormControl<string | null | undefined>,
		StatusName: FormControl<string | null | undefined>,
	}
	export function CreateAgentStatusReferenceFormGroup() {
		return new FormGroup<AgentStatusReferenceFormProperties>({
			StatusStartTimestamp: new FormControl<Date | null | undefined>(undefined),
			StatusArn: new FormControl<string | null | undefined>(undefined),
			StatusName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ChannelToCountMap {
	}
	export interface ChannelToCountMapFormProperties {
	}
	export function CreateChannelToCountMapFormGroup() {
		return new FormGroup<ChannelToCountMapFormProperties>({
		});

	}


	/** Information about the <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_Contact.html">contact</a> associated to the user. */
	export interface AgentContactReference {
		ContactId?: string;
		Channel?: Channel;
		InitiationMethod?: ContactInitiationMethod;
		AgentContactState?: ContactState;
		StateStartTimestamp?: Date;
		ConnectedToAgentTimestamp?: Date;

		/** Contains information about a queue resource for which metrics are returned. */
		Queue?: QueueReference;
	}

	/** Information about the <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_Contact.html">contact</a> associated to the user. */
	export interface AgentContactReferenceFormProperties {
		ContactId: FormControl<string | null | undefined>,
		Channel: FormControl<Channel | null | undefined>,
		InitiationMethod: FormControl<ContactInitiationMethod | null | undefined>,
		AgentContactState: FormControl<ContactState | null | undefined>,
		StateStartTimestamp: FormControl<Date | null | undefined>,
		ConnectedToAgentTimestamp: FormControl<Date | null | undefined>,
	}
	export function CreateAgentContactReferenceFormGroup() {
		return new FormGroup<AgentContactReferenceFormProperties>({
			ContactId: new FormControl<string | null | undefined>(undefined),
			Channel: new FormControl<Channel | null | undefined>(undefined),
			InitiationMethod: new FormControl<ContactInitiationMethod | null | undefined>(undefined),
			AgentContactState: new FormControl<ContactState | null | undefined>(undefined),
			StateStartTimestamp: new FormControl<Date | null | undefined>(undefined),
			ConnectedToAgentTimestamp: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum ContactState { INCOMING = 0, PENDING = 1, CONNECTING = 2, CONNECTED = 3, CONNECTED_ONHOLD = 4, MISSED = 5, ERROR = 6, ENDED = 7, REJECTED = 8 }


	/** Filters user data based on the contact information that is associated to the users. It contains a list of <a href="https://docs.aws.amazon.com/connect/latest/adminguide/about-contact-states.html">contact states</a>. */
	export interface ContactFilter {
		ContactStates?: Array<ContactState>;
	}

	/** Filters user data based on the contact information that is associated to the users. It contains a list of <a href="https://docs.aws.amazon.com/connect/latest/adminguide/about-contact-states.html">contact states</a>. */
	export interface ContactFilterFormProperties {
	}
	export function CreateContactFilterFormGroup() {
		return new FormGroup<ContactFilterFormProperties>({
		});

	}

	export interface GetFederationTokenResponse {
		Credentials?: Credentials;
		SignInUrl?: string;
		UserArn?: string;
		UserId?: string;
	}
	export interface GetFederationTokenResponseFormProperties {
		SignInUrl: FormControl<string | null | undefined>,
		UserArn: FormControl<string | null | undefined>,
		UserId: FormControl<string | null | undefined>,
	}
	export function CreateGetFederationTokenResponseFormGroup() {
		return new FormGroup<GetFederationTokenResponseFormProperties>({
			SignInUrl: new FormControl<string | null | undefined>(undefined),
			UserArn: new FormControl<string | null | undefined>(undefined),
			UserId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains credentials to use for federation. */
	export interface Credentials {
		AccessToken?: string;
		AccessTokenExpiration?: Date;
		RefreshToken?: string;
		RefreshTokenExpiration?: Date;
	}

	/** Contains credentials to use for federation. */
	export interface CredentialsFormProperties {
		AccessToken: FormControl<string | null | undefined>,
		AccessTokenExpiration: FormControl<Date | null | undefined>,
		RefreshToken: FormControl<string | null | undefined>,
		RefreshTokenExpiration: FormControl<Date | null | undefined>,
	}
	export function CreateCredentialsFormGroup() {
		return new FormGroup<CredentialsFormProperties>({
			AccessToken: new FormControl<string | null | undefined>(undefined),
			AccessTokenExpiration: new FormControl<Date | null | undefined>(undefined),
			RefreshToken: new FormControl<string | null | undefined>(undefined),
			RefreshTokenExpiration: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface UserNotFoundException {
	}
	export interface UserNotFoundExceptionFormProperties {
	}
	export function CreateUserNotFoundExceptionFormGroup() {
		return new FormGroup<UserNotFoundExceptionFormProperties>({
		});

	}

	export interface GetMetricDataResponse {
		NextToken?: string;
		MetricResults?: Array<HistoricalMetricResult>;
	}
	export interface GetMetricDataResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetMetricDataResponseFormGroup() {
		return new FormGroup<GetMetricDataResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information about the historical metrics retrieved. */
	export interface HistoricalMetricResult {
		Dimensions?: Dimensions;
		Collections?: Array<HistoricalMetricData>;
	}

	/** Contains information about the historical metrics retrieved. */
	export interface HistoricalMetricResultFormProperties {
	}
	export function CreateHistoricalMetricResultFormGroup() {
		return new FormGroup<HistoricalMetricResultFormProperties>({
		});

	}


	/** Contains the data for a historical metric. */
	export interface HistoricalMetricData {
		Metric?: HistoricalMetric;
		Value?: number | null;
	}

	/** Contains the data for a historical metric. */
	export interface HistoricalMetricDataFormProperties {
		Value: FormControl<number | null | undefined>,
	}
	export function CreateHistoricalMetricDataFormGroup() {
		return new FormGroup<HistoricalMetricDataFormProperties>({
			Value: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Contains information about a historical metric. For a description of each metric, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/historical-metrics-definitions.html">Historical Metrics Definitions</a> in the <i>Amazon Connect Administrator Guide</i>. */
	export interface HistoricalMetric {
		Name?: HistoricalMetricName;
		Threshold?: Threshold;
		Statistic?: Statistic;
		Unit?: Unit;
	}

	/** Contains information about a historical metric. For a description of each metric, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/historical-metrics-definitions.html">Historical Metrics Definitions</a> in the <i>Amazon Connect Administrator Guide</i>. */
	export interface HistoricalMetricFormProperties {
		Name: FormControl<HistoricalMetricName | null | undefined>,
		Statistic: FormControl<Statistic | null | undefined>,
		Unit: FormControl<Unit | null | undefined>,
	}
	export function CreateHistoricalMetricFormGroup() {
		return new FormGroup<HistoricalMetricFormProperties>({
			Name: new FormControl<HistoricalMetricName | null | undefined>(undefined),
			Statistic: new FormControl<Statistic | null | undefined>(undefined),
			Unit: new FormControl<Unit | null | undefined>(undefined),
		});

	}


	/** The historical metric names. */
	export enum HistoricalMetricName { CONTACTS_QUEUED = 0, CONTACTS_HANDLED = 1, CONTACTS_ABANDONED = 2, CONTACTS_CONSULTED = 3, CONTACTS_AGENT_HUNG_UP_FIRST = 4, CONTACTS_HANDLED_INCOMING = 5, CONTACTS_HANDLED_OUTBOUND = 6, CONTACTS_HOLD_ABANDONS = 7, CONTACTS_TRANSFERRED_IN = 8, CONTACTS_TRANSFERRED_OUT = 9, CONTACTS_TRANSFERRED_IN_FROM_QUEUE = 10, CONTACTS_TRANSFERRED_OUT_FROM_QUEUE = 11, CONTACTS_MISSED = 12, CALLBACK_CONTACTS_HANDLED = 13, API_CONTACTS_HANDLED = 14, OCCUPANCY = 15, HANDLE_TIME = 16, AFTER_CONTACT_WORK_TIME = 17, QUEUED_TIME = 18, ABANDON_TIME = 19, QUEUE_ANSWER_TIME = 20, HOLD_TIME = 21, INTERACTION_TIME = 22, INTERACTION_AND_HOLD_TIME = 23, SERVICE_LEVEL = 24 }


	/** Contains information about the threshold for service level metrics. */
	export interface Threshold {
		Comparison?: Comparison;
		ThresholdValue?: number | null;
	}

	/** Contains information about the threshold for service level metrics. */
	export interface ThresholdFormProperties {
		Comparison: FormControl<Comparison | null | undefined>,
		ThresholdValue: FormControl<number | null | undefined>,
	}
	export function CreateThresholdFormGroup() {
		return new FormGroup<ThresholdFormProperties>({
			Comparison: new FormControl<Comparison | null | undefined>(undefined),
			ThresholdValue: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum Comparison { LT = 0 }

	export enum Statistic { SUM = 0, MAX = 1, AVG = 2 }

	export interface GetMetricDataV2Response {
		NextToken?: string;
		MetricResults?: Array<MetricResultV2>;
	}
	export interface GetMetricDataV2ResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetMetricDataV2ResponseFormGroup() {
		return new FormGroup<GetMetricDataV2ResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information about the metric results. */
	export interface MetricResultV2 {
		Dimensions?: DimensionsV2Map;
		Collections?: Array<MetricDataV2>;
	}

	/** Contains information about the metric results. */
	export interface MetricResultV2FormProperties {
	}
	export function CreateMetricResultV2FormGroup() {
		return new FormGroup<MetricResultV2FormProperties>({
		});

	}

	export interface DimensionsV2Map {
	}
	export interface DimensionsV2MapFormProperties {
	}
	export function CreateDimensionsV2MapFormGroup() {
		return new FormGroup<DimensionsV2MapFormProperties>({
		});

	}


	/** Contains the name, thresholds, and metric filters. */
	export interface MetricDataV2 {
		Metric?: MetricV2;
		Value?: number | null;
	}

	/** Contains the name, thresholds, and metric filters. */
	export interface MetricDataV2FormProperties {
		Value: FormControl<number | null | undefined>,
	}
	export function CreateMetricDataV2FormGroup() {
		return new FormGroup<MetricDataV2FormProperties>({
			Value: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Contains information about the metric. */
	export interface MetricV2 {
		Name?: string;
		Threshold?: Array<ThresholdV2>;
		MetricFilters?: Array<MetricFilterV2>;
	}

	/** Contains information about the metric. */
	export interface MetricV2FormProperties {
		Name: FormControl<string | null | undefined>,
	}
	export function CreateMetricV2FormGroup() {
		return new FormGroup<MetricV2FormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information about the threshold for service level metrics. */
	export interface ThresholdV2 {
		Comparison?: string;
		ThresholdValue?: number | null;
	}

	/** Contains information about the threshold for service level metrics. */
	export interface ThresholdV2FormProperties {
		Comparison: FormControl<string | null | undefined>,
		ThresholdValue: FormControl<number | null | undefined>,
	}
	export function CreateThresholdV2FormGroup() {
		return new FormGroup<ThresholdV2FormProperties>({
			Comparison: new FormControl<string | null | undefined>(undefined),
			ThresholdValue: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Contains information about the filter used when retrieving metrics. <code>MetricFiltersV2</code> can be used on the following metrics: <code>AVG_AGENT_CONNECTING_TIME</code>, <code>CONTACTS_CREATED</code>, <code>CONTACTS_HANDLED</code>, <code>SUM_CONTACTS_DISCONNECTED</code>. */
	export interface MetricFilterV2 {
		MetricFilterKey?: string;
		MetricFilterValues?: Array<string>;
	}

	/** Contains information about the filter used when retrieving metrics. <code>MetricFiltersV2</code> can be used on the following metrics: <code>AVG_AGENT_CONNECTING_TIME</code>, <code>CONTACTS_CREATED</code>, <code>CONTACTS_HANDLED</code>, <code>SUM_CONTACTS_DISCONNECTED</code>. */
	export interface MetricFilterV2FormProperties {
		MetricFilterKey: FormControl<string | null | undefined>,
	}
	export function CreateMetricFilterV2FormGroup() {
		return new FormGroup<MetricFilterV2FormProperties>({
			MetricFilterKey: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains the filter to apply when retrieving metrics with the <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_GetMetricDataV2.html">GetMetricDataV2</a> API. */
	export interface FilterV2 {
		FilterKey?: string;
		FilterValues?: Array<string>;
	}

	/** Contains the filter to apply when retrieving metrics with the <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_GetMetricDataV2.html">GetMetricDataV2</a> API. */
	export interface FilterV2FormProperties {
		FilterKey: FormControl<string | null | undefined>,
	}
	export function CreateFilterV2FormGroup() {
		return new FormGroup<FilterV2FormProperties>({
			FilterKey: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetPromptFileResponse {
		PromptPresignedUrl?: string;
	}
	export interface GetPromptFileResponseFormProperties {
		PromptPresignedUrl: FormControl<string | null | undefined>,
	}
	export function CreateGetPromptFileResponseFormGroup() {
		return new FormGroup<GetPromptFileResponseFormProperties>({
			PromptPresignedUrl: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetTaskTemplateResponse {
		InstanceId?: string;

		/** Required */
		Id: string;

		/** Required */
		Arn: string;

		/** Required */
		Name: string;
		Description?: string;
		ContactFlowId?: string;
		Constraints?: TaskTemplateConstraints;
		Defaults?: TaskTemplateDefaults;
		Fields?: Array<TaskTemplateField>;
		Status?: TaskTemplateStatus;
		LastModifiedTime?: Date;
		CreatedTime?: Date;
		Tags?: TagMap;
	}
	export interface GetTaskTemplateResponseFormProperties {
		InstanceId: FormControl<string | null | undefined>,

		/** Required */
		Id: FormControl<string | null | undefined>,

		/** Required */
		Arn: FormControl<string | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		ContactFlowId: FormControl<string | null | undefined>,
		Status: FormControl<TaskTemplateStatus | null | undefined>,
		LastModifiedTime: FormControl<Date | null | undefined>,
		CreatedTime: FormControl<Date | null | undefined>,
	}
	export function CreateGetTaskTemplateResponseFormGroup() {
		return new FormGroup<GetTaskTemplateResponseFormProperties>({
			InstanceId: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
			ContactFlowId: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<TaskTemplateStatus | null | undefined>(undefined),
			LastModifiedTime: new FormControl<Date | null | undefined>(undefined),
			CreatedTime: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Describes constraints that apply to the template fields. */
	export interface TaskTemplateConstraints {
		RequiredFields?: Array<RequiredFieldInfo>;
		ReadOnlyFields?: Array<ReadOnlyFieldInfo>;
		InvisibleFields?: Array<InvisibleFieldInfo>;
	}

	/** Describes constraints that apply to the template fields. */
	export interface TaskTemplateConstraintsFormProperties {
	}
	export function CreateTaskTemplateConstraintsFormGroup() {
		return new FormGroup<TaskTemplateConstraintsFormProperties>({
		});

	}


	/** Describes default values for fields on a template. */
	export interface TaskTemplateDefaults {
		DefaultFieldValues?: Array<TaskTemplateDefaultFieldValue>;
	}

	/** Describes default values for fields on a template. */
	export interface TaskTemplateDefaultsFormProperties {
	}
	export function CreateTaskTemplateDefaultsFormGroup() {
		return new FormGroup<TaskTemplateDefaultsFormProperties>({
		});

	}

	export enum TaskTemplateStatus { ACTIVE = 0, INACTIVE = 1 }

	export interface GetTrafficDistributionResponse {
		TelephonyConfig?: TelephonyConfig;
		Id?: string;
		Arn?: string;
	}
	export interface GetTrafficDistributionResponseFormProperties {
		Id: FormControl<string | null | undefined>,
		Arn: FormControl<string | null | undefined>,
	}
	export function CreateGetTrafficDistributionResponseFormGroup() {
		return new FormGroup<GetTrafficDistributionResponseFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			Arn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The distribution of traffic between the instance and its replicas. */
	export interface TelephonyConfig {

		/** Required */
		Distributions: Array<Distribution>;
	}

	/** The distribution of traffic between the instance and its replicas. */
	export interface TelephonyConfigFormProperties {
	}
	export function CreateTelephonyConfigFormGroup() {
		return new FormGroup<TelephonyConfigFormProperties>({
		});

	}


	/** Information about a traffic distribution. */
	export interface Distribution {

		/** Required */
		Region: string;

		/** Required */
		Percentage: number;
	}

	/** Information about a traffic distribution. */
	export interface DistributionFormProperties {

		/** Required */
		Region: FormControl<string | null | undefined>,

		/** Required */
		Percentage: FormControl<number | null | undefined>,
	}
	export function CreateDistributionFormGroup() {
		return new FormGroup<DistributionFormProperties>({
			Region: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Percentage: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListAgentStatusResponse {
		NextToken?: string;
		AgentStatusSummaryList?: Array<AgentStatusSummary>;
	}
	export interface ListAgentStatusResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListAgentStatusResponseFormGroup() {
		return new FormGroup<ListAgentStatusResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Summary information for an agent status. */
	export interface AgentStatusSummary {
		Id?: string;
		Arn?: string;
		Name?: string;
		Type?: AgentStatusType;
	}

	/** Summary information for an agent status. */
	export interface AgentStatusSummaryFormProperties {
		Id: FormControl<string | null | undefined>,
		Arn: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Type: FormControl<AgentStatusType | null | undefined>,
	}
	export function CreateAgentStatusSummaryFormGroup() {
		return new FormGroup<AgentStatusSummaryFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			Arn: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<AgentStatusType | null | undefined>(undefined),
		});

	}

	export interface ListApprovedOriginsResponse {
		Origins?: Array<string>;
		NextToken?: string;
	}
	export interface ListApprovedOriginsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListApprovedOriginsResponseFormGroup() {
		return new FormGroup<ListApprovedOriginsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListBotsResponse {
		LexBots?: Array<LexBotConfig>;
		NextToken?: string;
	}
	export interface ListBotsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListBotsResponseFormGroup() {
		return new FormGroup<ListBotsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Configuration information of an Amazon Lex or Amazon Lex V2 bot. */
	export interface LexBotConfig {

		/** Configuration information of an Amazon Lex bot. */
		LexBot?: LexBot;
		LexV2Bot?: LexV2Bot;
	}

	/** Configuration information of an Amazon Lex or Amazon Lex V2 bot. */
	export interface LexBotConfigFormProperties {
	}
	export function CreateLexBotConfigFormGroup() {
		return new FormGroup<LexBotConfigFormProperties>({
		});

	}


	/** Configuration information of an Amazon Lex bot. */
	export interface LexBot {

		/** Required */
		Name: string;

		/** Required */
		LexRegion: string;
	}

	/** Configuration information of an Amazon Lex bot. */
	export interface LexBotFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		LexRegion: FormControl<string | null | undefined>,
	}
	export function CreateLexBotFormGroup() {
		return new FormGroup<LexBotFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			LexRegion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Configuration information of an Amazon Lex V2 bot. */
	export interface LexV2Bot {
		AliasArn?: string;
	}

	/** Configuration information of an Amazon Lex V2 bot. */
	export interface LexV2BotFormProperties {
		AliasArn: FormControl<string | null | undefined>,
	}
	export function CreateLexV2BotFormGroup() {
		return new FormGroup<LexV2BotFormProperties>({
			AliasArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListContactEvaluationsResponse {

		/** Required */
		EvaluationSummaryList: Array<EvaluationSummary>;
		NextToken?: string;
	}
	export interface ListContactEvaluationsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListContactEvaluationsResponseFormGroup() {
		return new FormGroup<ListContactEvaluationsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Summary information about a contact evaluation. */
	export interface EvaluationSummary {

		/** Required */
		EvaluationId: string;

		/** Required */
		EvaluationArn: string;

		/** Required */
		EvaluationFormTitle: string;

		/** Required */
		EvaluationFormId: string;

		/** Required */
		Status: EvaluationStatus;

		/** Required */
		EvaluatorArn: string;
		Score?: EvaluationScore;

		/** Required */
		CreatedTime: Date;

		/** Required */
		LastModifiedTime: Date;
	}

	/** Summary information about a contact evaluation. */
	export interface EvaluationSummaryFormProperties {

		/** Required */
		EvaluationId: FormControl<string | null | undefined>,

		/** Required */
		EvaluationArn: FormControl<string | null | undefined>,

		/** Required */
		EvaluationFormTitle: FormControl<string | null | undefined>,

		/** Required */
		EvaluationFormId: FormControl<string | null | undefined>,

		/** Required */
		Status: FormControl<EvaluationStatus | null | undefined>,

		/** Required */
		EvaluatorArn: FormControl<string | null | undefined>,

		/** Required */
		CreatedTime: FormControl<Date | null | undefined>,

		/** Required */
		LastModifiedTime: FormControl<Date | null | undefined>,
	}
	export function CreateEvaluationSummaryFormGroup() {
		return new FormGroup<EvaluationSummaryFormProperties>({
			EvaluationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			EvaluationArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			EvaluationFormTitle: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			EvaluationFormId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Status: new FormControl<EvaluationStatus | null | undefined>(undefined, [Validators.required]),
			EvaluatorArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			CreatedTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			LastModifiedTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListContactFlowModulesResponse {
		ContactFlowModulesSummaryList?: Array<ContactFlowModuleSummary>;
		NextToken?: string;
	}
	export interface ListContactFlowModulesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListContactFlowModulesResponseFormGroup() {
		return new FormGroup<ListContactFlowModulesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains summary information about a flow. */
	export interface ContactFlowModuleSummary {
		Id?: string;
		Arn?: string;
		Name?: string;
		State?: ContactFlowState;
	}

	/** Contains summary information about a flow. */
	export interface ContactFlowModuleSummaryFormProperties {
		Id: FormControl<string | null | undefined>,
		Arn: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		State: FormControl<ContactFlowState | null | undefined>,
	}
	export function CreateContactFlowModuleSummaryFormGroup() {
		return new FormGroup<ContactFlowModuleSummaryFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			Arn: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<ContactFlowState | null | undefined>(undefined),
		});

	}

	export interface ListContactFlowsResponse {
		ContactFlowSummaryList?: Array<ContactFlowSummary>;
		NextToken?: string;
	}
	export interface ListContactFlowsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListContactFlowsResponseFormGroup() {
		return new FormGroup<ListContactFlowsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>Contains summary information about a flow.</p> <p>You can also create and update flows using the <a href="https://docs.aws.amazon.com/connect/latest/APIReference/flow-language.html">Amazon Connect Flow language</a>.</p> */
	export interface ContactFlowSummary {
		Id?: string;
		Arn?: string;
		Name?: string;
		ContactFlowType?: ContactFlowType;
		ContactFlowState?: ContactFlowState;
	}

	/** <p>Contains summary information about a flow.</p> <p>You can also create and update flows using the <a href="https://docs.aws.amazon.com/connect/latest/APIReference/flow-language.html">Amazon Connect Flow language</a>.</p> */
	export interface ContactFlowSummaryFormProperties {
		Id: FormControl<string | null | undefined>,
		Arn: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		ContactFlowType: FormControl<ContactFlowType | null | undefined>,
		ContactFlowState: FormControl<ContactFlowState | null | undefined>,
	}
	export function CreateContactFlowSummaryFormGroup() {
		return new FormGroup<ContactFlowSummaryFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			Arn: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			ContactFlowType: new FormControl<ContactFlowType | null | undefined>(undefined),
			ContactFlowState: new FormControl<ContactFlowState | null | undefined>(undefined),
		});

	}

	export interface ListContactReferencesResponse {
		ReferenceSummaryList?: Array<ReferenceSummary>;
		NextToken?: string;
	}
	export interface ListContactReferencesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListContactReferencesResponseFormGroup() {
		return new FormGroup<ListContactReferencesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains summary information about a reference. <code>ReferenceSummary</code> contains only one non null field between the URL and attachment based on the reference type. */
	export interface ReferenceSummary {
		Url?: UrlReference;
		Attachment?: AttachmentReference;
		String?: StringReference;
		Number?: NumberReference;
		Date?: DateReference;
		Email?: EmailReference;
	}

	/** Contains summary information about a reference. <code>ReferenceSummary</code> contains only one non null field between the URL and attachment based on the reference type. */
	export interface ReferenceSummaryFormProperties {
	}
	export function CreateReferenceSummaryFormGroup() {
		return new FormGroup<ReferenceSummaryFormProperties>({
		});

	}


	/** The URL reference. */
	export interface UrlReference {
		Name?: string;
		Value?: string;
	}

	/** The URL reference. */
	export interface UrlReferenceFormProperties {
		Name: FormControl<string | null | undefined>,
		Value: FormControl<string | null | undefined>,
	}
	export function CreateUrlReferenceFormGroup() {
		return new FormGroup<UrlReferenceFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about a reference when the <code>referenceType</code> is <code>ATTACHMENT</code>. Otherwise, null. */
	export interface AttachmentReference {
		Name?: string;
		Value?: string;
		Status?: ReferenceStatus;
	}

	/** Information about a reference when the <code>referenceType</code> is <code>ATTACHMENT</code>. Otherwise, null. */
	export interface AttachmentReferenceFormProperties {
		Name: FormControl<string | null | undefined>,
		Value: FormControl<string | null | undefined>,
		Status: FormControl<ReferenceStatus | null | undefined>,
	}
	export function CreateAttachmentReferenceFormGroup() {
		return new FormGroup<AttachmentReferenceFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Value: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<ReferenceStatus | null | undefined>(undefined),
		});

	}

	export enum ReferenceStatus { APPROVED = 0, REJECTED = 1 }


	/** Information about a reference when the <code>referenceType</code> is <code>STRING</code>. Otherwise, null. */
	export interface StringReference {
		Name?: string;
		Value?: string;
	}

	/** Information about a reference when the <code>referenceType</code> is <code>STRING</code>. Otherwise, null. */
	export interface StringReferenceFormProperties {
		Name: FormControl<string | null | undefined>,
		Value: FormControl<string | null | undefined>,
	}
	export function CreateStringReferenceFormGroup() {
		return new FormGroup<StringReferenceFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about a reference when the <code>referenceType</code> is <code>NUMBER</code>. Otherwise, null. */
	export interface NumberReference {
		Name?: string;
		Value?: string;
	}

	/** Information about a reference when the <code>referenceType</code> is <code>NUMBER</code>. Otherwise, null. */
	export interface NumberReferenceFormProperties {
		Name: FormControl<string | null | undefined>,
		Value: FormControl<string | null | undefined>,
	}
	export function CreateNumberReferenceFormGroup() {
		return new FormGroup<NumberReferenceFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about a reference when the <code>referenceType</code> is <code>DATE</code>. Otherwise, null. */
	export interface DateReference {
		Name?: string;
		Value?: string;
	}

	/** Information about a reference when the <code>referenceType</code> is <code>DATE</code>. Otherwise, null. */
	export interface DateReferenceFormProperties {
		Name: FormControl<string | null | undefined>,
		Value: FormControl<string | null | undefined>,
	}
	export function CreateDateReferenceFormGroup() {
		return new FormGroup<DateReferenceFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about a reference when the <code>referenceType</code> is <code>EMAIL</code>. Otherwise, null. */
	export interface EmailReference {
		Name?: string;
		Value?: string;
	}

	/** Information about a reference when the <code>referenceType</code> is <code>EMAIL</code>. Otherwise, null. */
	export interface EmailReferenceFormProperties {
		Name: FormControl<string | null | undefined>,
		Value: FormControl<string | null | undefined>,
	}
	export function CreateEmailReferenceFormGroup() {
		return new FormGroup<EmailReferenceFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ReferenceType { URL = 0, ATTACHMENT = 1, NUMBER = 2, STRING = 3, DATE = 4, EMAIL = 5 }

	export interface ListDefaultVocabulariesResponse {

		/** Required */
		DefaultVocabularyList: Array<DefaultVocabulary>;
		NextToken?: string;
	}
	export interface ListDefaultVocabulariesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListDefaultVocabulariesResponseFormGroup() {
		return new FormGroup<ListDefaultVocabulariesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information about a default vocabulary. */
	export interface DefaultVocabulary {

		/** Required */
		InstanceId: string;

		/** Required */
		LanguageCode: VocabularyLanguageCode;

		/** Required */
		VocabularyId: string;

		/** Required */
		VocabularyName: string;
	}

	/** Contains information about a default vocabulary. */
	export interface DefaultVocabularyFormProperties {

		/** Required */
		InstanceId: FormControl<string | null | undefined>,

		/** Required */
		LanguageCode: FormControl<VocabularyLanguageCode | null | undefined>,

		/** Required */
		VocabularyId: FormControl<string | null | undefined>,

		/** Required */
		VocabularyName: FormControl<string | null | undefined>,
	}
	export function CreateDefaultVocabularyFormGroup() {
		return new FormGroup<DefaultVocabularyFormProperties>({
			InstanceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			LanguageCode: new FormControl<VocabularyLanguageCode | null | undefined>(undefined, [Validators.required]),
			VocabularyId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			VocabularyName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListEvaluationFormVersionsResponse {

		/** Required */
		EvaluationFormVersionSummaryList: Array<EvaluationFormVersionSummary>;
		NextToken?: string;
	}
	export interface ListEvaluationFormVersionsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListEvaluationFormVersionsResponseFormGroup() {
		return new FormGroup<ListEvaluationFormVersionsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Summary information about an evaluation form. */
	export interface EvaluationFormVersionSummary {

		/** Required */
		EvaluationFormArn: string;

		/** Required */
		EvaluationFormId: string;

		/** Required */
		EvaluationFormVersion: number;

		/** Required */
		Locked: boolean;

		/** Required */
		Status: EvaluationFormVersionStatus;

		/** Required */
		CreatedTime: Date;

		/** Required */
		CreatedBy: string;

		/** Required */
		LastModifiedTime: Date;

		/** Required */
		LastModifiedBy: string;
	}

	/** Summary information about an evaluation form. */
	export interface EvaluationFormVersionSummaryFormProperties {

		/** Required */
		EvaluationFormArn: FormControl<string | null | undefined>,

		/** Required */
		EvaluationFormId: FormControl<string | null | undefined>,

		/** Required */
		EvaluationFormVersion: FormControl<number | null | undefined>,

		/** Required */
		Locked: FormControl<boolean | null | undefined>,

		/** Required */
		Status: FormControl<EvaluationFormVersionStatus | null | undefined>,

		/** Required */
		CreatedTime: FormControl<Date | null | undefined>,

		/** Required */
		CreatedBy: FormControl<string | null | undefined>,

		/** Required */
		LastModifiedTime: FormControl<Date | null | undefined>,

		/** Required */
		LastModifiedBy: FormControl<string | null | undefined>,
	}
	export function CreateEvaluationFormVersionSummaryFormGroup() {
		return new FormGroup<EvaluationFormVersionSummaryFormProperties>({
			EvaluationFormArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			EvaluationFormId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			EvaluationFormVersion: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Locked: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			Status: new FormControl<EvaluationFormVersionStatus | null | undefined>(undefined, [Validators.required]),
			CreatedTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			CreatedBy: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			LastModifiedTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			LastModifiedBy: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListEvaluationFormsResponse {

		/** Required */
		EvaluationFormSummaryList: Array<EvaluationFormSummary>;
		NextToken?: string;
	}
	export interface ListEvaluationFormsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListEvaluationFormsResponseFormGroup() {
		return new FormGroup<ListEvaluationFormsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Summary information about an evaluation form. */
	export interface EvaluationFormSummary {

		/** Required */
		EvaluationFormId: string;

		/** Required */
		EvaluationFormArn: string;

		/** Required */
		Title: string;

		/** Required */
		CreatedTime: Date;

		/** Required */
		CreatedBy: string;

		/** Required */
		LastModifiedTime: Date;

		/** Required */
		LastModifiedBy: string;
		LastActivatedTime?: Date;
		LastActivatedBy?: string;

		/** Required */
		LatestVersion: number;
		ActiveVersion?: number | null;
	}

	/** Summary information about an evaluation form. */
	export interface EvaluationFormSummaryFormProperties {

		/** Required */
		EvaluationFormId: FormControl<string | null | undefined>,

		/** Required */
		EvaluationFormArn: FormControl<string | null | undefined>,

		/** Required */
		Title: FormControl<string | null | undefined>,

		/** Required */
		CreatedTime: FormControl<Date | null | undefined>,

		/** Required */
		CreatedBy: FormControl<string | null | undefined>,

		/** Required */
		LastModifiedTime: FormControl<Date | null | undefined>,

		/** Required */
		LastModifiedBy: FormControl<string | null | undefined>,
		LastActivatedTime: FormControl<Date | null | undefined>,
		LastActivatedBy: FormControl<string | null | undefined>,

		/** Required */
		LatestVersion: FormControl<number | null | undefined>,
		ActiveVersion: FormControl<number | null | undefined>,
	}
	export function CreateEvaluationFormSummaryFormGroup() {
		return new FormGroup<EvaluationFormSummaryFormProperties>({
			EvaluationFormId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			EvaluationFormArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Title: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			CreatedTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			CreatedBy: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			LastModifiedTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			LastModifiedBy: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			LastActivatedTime: new FormControl<Date | null | undefined>(undefined),
			LastActivatedBy: new FormControl<string | null | undefined>(undefined),
			LatestVersion: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			ActiveVersion: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListHoursOfOperationsResponse {
		HoursOfOperationSummaryList?: Array<HoursOfOperationSummary>;
		NextToken?: string;
	}
	export interface ListHoursOfOperationsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListHoursOfOperationsResponseFormGroup() {
		return new FormGroup<ListHoursOfOperationsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains summary information about hours of operation for a contact center. */
	export interface HoursOfOperationSummary {
		Id?: string;
		Arn?: string;
		Name?: string;
	}

	/** Contains summary information about hours of operation for a contact center. */
	export interface HoursOfOperationSummaryFormProperties {
		Id: FormControl<string | null | undefined>,
		Arn: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
	}
	export function CreateHoursOfOperationSummaryFormGroup() {
		return new FormGroup<HoursOfOperationSummaryFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			Arn: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListInstanceAttributesResponse {
		Attributes?: Array<Attribute>;
		NextToken?: string;
	}
	export interface ListInstanceAttributesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListInstanceAttributesResponseFormGroup() {
		return new FormGroup<ListInstanceAttributesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListInstanceStorageConfigsResponse {
		StorageConfigs?: Array<InstanceStorageConfig>;
		NextToken?: string;
	}
	export interface ListInstanceStorageConfigsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListInstanceStorageConfigsResponseFormGroup() {
		return new FormGroup<ListInstanceStorageConfigsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListInstancesResponse {
		InstanceSummaryList?: Array<InstanceSummary>;
		NextToken?: string;
	}
	export interface ListInstancesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListInstancesResponseFormGroup() {
		return new FormGroup<ListInstancesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about the instance. */
	export interface InstanceSummary {
		Id?: string;
		Arn?: string;
		IdentityManagementType?: DirectoryType;
		InstanceAlias?: string;
		CreatedTime?: Date;
		ServiceRole?: string;
		InstanceStatus?: InstanceStatus;
		InboundCallsEnabled?: boolean | null;
		OutboundCallsEnabled?: boolean | null;
		InstanceAccessUrl?: string;
	}

	/** Information about the instance. */
	export interface InstanceSummaryFormProperties {
		Id: FormControl<string | null | undefined>,
		Arn: FormControl<string | null | undefined>,
		IdentityManagementType: FormControl<DirectoryType | null | undefined>,
		InstanceAlias: FormControl<string | null | undefined>,
		CreatedTime: FormControl<Date | null | undefined>,
		ServiceRole: FormControl<string | null | undefined>,
		InstanceStatus: FormControl<InstanceStatus | null | undefined>,
		InboundCallsEnabled: FormControl<boolean | null | undefined>,
		OutboundCallsEnabled: FormControl<boolean | null | undefined>,
		InstanceAccessUrl: FormControl<string | null | undefined>,
	}
	export function CreateInstanceSummaryFormGroup() {
		return new FormGroup<InstanceSummaryFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			Arn: new FormControl<string | null | undefined>(undefined),
			IdentityManagementType: new FormControl<DirectoryType | null | undefined>(undefined),
			InstanceAlias: new FormControl<string | null | undefined>(undefined),
			CreatedTime: new FormControl<Date | null | undefined>(undefined),
			ServiceRole: new FormControl<string | null | undefined>(undefined),
			InstanceStatus: new FormControl<InstanceStatus | null | undefined>(undefined),
			InboundCallsEnabled: new FormControl<boolean | null | undefined>(undefined),
			OutboundCallsEnabled: new FormControl<boolean | null | undefined>(undefined),
			InstanceAccessUrl: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListIntegrationAssociationsResponse {
		IntegrationAssociationSummaryList?: Array<IntegrationAssociationSummary>;
		NextToken?: string;
	}
	export interface ListIntegrationAssociationsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListIntegrationAssociationsResponseFormGroup() {
		return new FormGroup<ListIntegrationAssociationsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains summary information about the associated AppIntegrations. */
	export interface IntegrationAssociationSummary {
		IntegrationAssociationId?: string;
		IntegrationAssociationArn?: string;
		InstanceId?: string;
		IntegrationType?: IntegrationType;
		IntegrationArn?: string;
		SourceApplicationUrl?: string;
		SourceApplicationName?: string;
		SourceType?: SourceType;
	}

	/** Contains summary information about the associated AppIntegrations. */
	export interface IntegrationAssociationSummaryFormProperties {
		IntegrationAssociationId: FormControl<string | null | undefined>,
		IntegrationAssociationArn: FormControl<string | null | undefined>,
		InstanceId: FormControl<string | null | undefined>,
		IntegrationType: FormControl<IntegrationType | null | undefined>,
		IntegrationArn: FormControl<string | null | undefined>,
		SourceApplicationUrl: FormControl<string | null | undefined>,
		SourceApplicationName: FormControl<string | null | undefined>,
		SourceType: FormControl<SourceType | null | undefined>,
	}
	export function CreateIntegrationAssociationSummaryFormGroup() {
		return new FormGroup<IntegrationAssociationSummaryFormProperties>({
			IntegrationAssociationId: new FormControl<string | null | undefined>(undefined),
			IntegrationAssociationArn: new FormControl<string | null | undefined>(undefined),
			InstanceId: new FormControl<string | null | undefined>(undefined),
			IntegrationType: new FormControl<IntegrationType | null | undefined>(undefined),
			IntegrationArn: new FormControl<string | null | undefined>(undefined),
			SourceApplicationUrl: new FormControl<string | null | undefined>(undefined),
			SourceApplicationName: new FormControl<string | null | undefined>(undefined),
			SourceType: new FormControl<SourceType | null | undefined>(undefined),
		});

	}

	export enum IntegrationType { EVENT = 0, VOICE_ID = 1, PINPOINT_APP = 2, WISDOM_ASSISTANT = 3, WISDOM_KNOWLEDGE_BASE = 4, CASES_DOMAIN = 5 }

	export enum SourceType { SALESFORCE = 0, ZENDESK = 1 }

	export interface ListLambdaFunctionsResponse {
		LambdaFunctions?: Array<string>;
		NextToken?: string;
	}
	export interface ListLambdaFunctionsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListLambdaFunctionsResponseFormGroup() {
		return new FormGroup<ListLambdaFunctionsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListLexBotsResponse {
		LexBots?: Array<LexBot>;
		NextToken?: string;
	}
	export interface ListLexBotsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListLexBotsResponseFormGroup() {
		return new FormGroup<ListLexBotsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListPhoneNumbersResponse {
		PhoneNumberSummaryList?: Array<PhoneNumberSummary>;
		NextToken?: string;
	}
	export interface ListPhoneNumbersResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListPhoneNumbersResponseFormGroup() {
		return new FormGroup<ListPhoneNumbersResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains summary information about a phone number for a contact center. */
	export interface PhoneNumberSummary {
		Id?: string;
		Arn?: string;
		PhoneNumber?: string;
		PhoneNumberType?: PhoneNumberType;
		PhoneNumberCountryCode?: PhoneNumberCountryCode;
	}

	/** Contains summary information about a phone number for a contact center. */
	export interface PhoneNumberSummaryFormProperties {
		Id: FormControl<string | null | undefined>,
		Arn: FormControl<string | null | undefined>,
		PhoneNumber: FormControl<string | null | undefined>,
		PhoneNumberType: FormControl<PhoneNumberType | null | undefined>,
		PhoneNumberCountryCode: FormControl<PhoneNumberCountryCode | null | undefined>,
	}
	export function CreatePhoneNumberSummaryFormGroup() {
		return new FormGroup<PhoneNumberSummaryFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			Arn: new FormControl<string | null | undefined>(undefined),
			PhoneNumber: new FormControl<string | null | undefined>(undefined),
			PhoneNumberType: new FormControl<PhoneNumberType | null | undefined>(undefined),
			PhoneNumberCountryCode: new FormControl<PhoneNumberCountryCode | null | undefined>(undefined),
		});

	}

	export interface ListPhoneNumbersV2Response {
		NextToken?: string;
		ListPhoneNumbersSummaryList?: Array<ListPhoneNumbersSummary>;
	}
	export interface ListPhoneNumbersV2ResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListPhoneNumbersV2ResponseFormGroup() {
		return new FormGroup<ListPhoneNumbersV2ResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about phone numbers that have been claimed to your Amazon Connect instance or traffic distribution group. */
	export interface ListPhoneNumbersSummary {
		PhoneNumberId?: string;
		PhoneNumberArn?: string;
		PhoneNumber?: string;
		PhoneNumberCountryCode?: PhoneNumberCountryCode;
		PhoneNumberType?: PhoneNumberType;
		TargetArn?: string;
	}

	/** Information about phone numbers that have been claimed to your Amazon Connect instance or traffic distribution group. */
	export interface ListPhoneNumbersSummaryFormProperties {
		PhoneNumberId: FormControl<string | null | undefined>,
		PhoneNumberArn: FormControl<string | null | undefined>,
		PhoneNumber: FormControl<string | null | undefined>,
		PhoneNumberCountryCode: FormControl<PhoneNumberCountryCode | null | undefined>,
		PhoneNumberType: FormControl<PhoneNumberType | null | undefined>,
		TargetArn: FormControl<string | null | undefined>,
	}
	export function CreateListPhoneNumbersSummaryFormGroup() {
		return new FormGroup<ListPhoneNumbersSummaryFormProperties>({
			PhoneNumberId: new FormControl<string | null | undefined>(undefined),
			PhoneNumberArn: new FormControl<string | null | undefined>(undefined),
			PhoneNumber: new FormControl<string | null | undefined>(undefined),
			PhoneNumberCountryCode: new FormControl<PhoneNumberCountryCode | null | undefined>(undefined),
			PhoneNumberType: new FormControl<PhoneNumberType | null | undefined>(undefined),
			TargetArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListPromptsResponse {
		PromptSummaryList?: Array<PromptSummary>;
		NextToken?: string;
	}
	export interface ListPromptsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListPromptsResponseFormGroup() {
		return new FormGroup<ListPromptsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information about the prompt. */
	export interface PromptSummary {
		Id?: string;
		Arn?: string;
		Name?: string;
	}

	/** Contains information about the prompt. */
	export interface PromptSummaryFormProperties {
		Id: FormControl<string | null | undefined>,
		Arn: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
	}
	export function CreatePromptSummaryFormGroup() {
		return new FormGroup<PromptSummaryFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			Arn: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListQueueQuickConnectsResponse {
		NextToken?: string;
		QuickConnectSummaryList?: Array<QuickConnectSummary>;
	}
	export interface ListQueueQuickConnectsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListQueueQuickConnectsResponseFormGroup() {
		return new FormGroup<ListQueueQuickConnectsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains summary information about a quick connect. */
	export interface QuickConnectSummary {
		Id?: string;
		Arn?: string;
		Name?: string;
		QuickConnectType?: QuickConnectType;
	}

	/** Contains summary information about a quick connect. */
	export interface QuickConnectSummaryFormProperties {
		Id: FormControl<string | null | undefined>,
		Arn: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		QuickConnectType: FormControl<QuickConnectType | null | undefined>,
	}
	export function CreateQuickConnectSummaryFormGroup() {
		return new FormGroup<QuickConnectSummaryFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			Arn: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			QuickConnectType: new FormControl<QuickConnectType | null | undefined>(undefined),
		});

	}

	export interface ListQueuesResponse {
		QueueSummaryList?: Array<QueueSummary>;
		NextToken?: string;
	}
	export interface ListQueuesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListQueuesResponseFormGroup() {
		return new FormGroup<ListQueuesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains summary information about a queue. */
	export interface QueueSummary {
		Id?: string;
		Arn?: string;
		Name?: string;
		QueueType?: QueueType;
	}

	/** Contains summary information about a queue. */
	export interface QueueSummaryFormProperties {
		Id: FormControl<string | null | undefined>,
		Arn: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		QueueType: FormControl<QueueType | null | undefined>,
	}
	export function CreateQueueSummaryFormGroup() {
		return new FormGroup<QueueSummaryFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			Arn: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			QueueType: new FormControl<QueueType | null | undefined>(undefined),
		});

	}

	export enum QueueType { STANDARD = 0, AGENT = 1 }

	export interface ListQuickConnectsResponse {
		QuickConnectSummaryList?: Array<QuickConnectSummary>;
		NextToken?: string;
	}
	export interface ListQuickConnectsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListQuickConnectsResponseFormGroup() {
		return new FormGroup<ListQuickConnectsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListRoutingProfileQueuesResponse {
		NextToken?: string;
		RoutingProfileQueueConfigSummaryList?: Array<RoutingProfileQueueConfigSummary>;
	}
	export interface ListRoutingProfileQueuesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListRoutingProfileQueuesResponseFormGroup() {
		return new FormGroup<ListRoutingProfileQueuesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains summary information about a routing profile queue. */
	export interface RoutingProfileQueueConfigSummary {

		/** Required */
		QueueId: string;

		/** Required */
		QueueArn: string;

		/** Required */
		QueueName: string;

		/** Required */
		Priority: number;

		/** Required */
		Delay: number;

		/** Required */
		Channel: Channel;
	}

	/** Contains summary information about a routing profile queue. */
	export interface RoutingProfileQueueConfigSummaryFormProperties {

		/** Required */
		QueueId: FormControl<string | null | undefined>,

		/** Required */
		QueueArn: FormControl<string | null | undefined>,

		/** Required */
		QueueName: FormControl<string | null | undefined>,

		/** Required */
		Priority: FormControl<number | null | undefined>,

		/** Required */
		Delay: FormControl<number | null | undefined>,

		/** Required */
		Channel: FormControl<Channel | null | undefined>,
	}
	export function CreateRoutingProfileQueueConfigSummaryFormGroup() {
		return new FormGroup<RoutingProfileQueueConfigSummaryFormProperties>({
			QueueId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			QueueArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			QueueName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Priority: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Delay: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Channel: new FormControl<Channel | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListRoutingProfilesResponse {
		RoutingProfileSummaryList?: Array<RoutingProfileSummary>;
		NextToken?: string;
	}
	export interface ListRoutingProfilesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListRoutingProfilesResponseFormGroup() {
		return new FormGroup<ListRoutingProfilesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains summary information about a routing profile. */
	export interface RoutingProfileSummary {
		Id?: string;
		Arn?: string;
		Name?: string;
	}

	/** Contains summary information about a routing profile. */
	export interface RoutingProfileSummaryFormProperties {
		Id: FormControl<string | null | undefined>,
		Arn: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
	}
	export function CreateRoutingProfileSummaryFormGroup() {
		return new FormGroup<RoutingProfileSummaryFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			Arn: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListRulesResponse {

		/** Required */
		RuleSummaryList: Array<RuleSummary>;
		NextToken?: string;
	}
	export interface ListRulesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListRulesResponseFormGroup() {
		return new FormGroup<ListRulesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A list of <code>ActionTypes</code> associated with a rule.  */
	export interface RuleSummary {

		/** Required */
		Name: string;

		/** Required */
		RuleId: string;

		/** Required */
		RuleArn: string;

		/** Required */
		EventSourceName: EventSourceName;

		/** Required */
		PublishStatus: RulePublishStatus;

		/** Required */
		ActionSummaries: Array<ActionSummary>;

		/** Required */
		CreatedTime: Date;

		/** Required */
		LastUpdatedTime: Date;
	}

	/** A list of <code>ActionTypes</code> associated with a rule.  */
	export interface RuleSummaryFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		RuleId: FormControl<string | null | undefined>,

		/** Required */
		RuleArn: FormControl<string | null | undefined>,

		/** Required */
		EventSourceName: FormControl<EventSourceName | null | undefined>,

		/** Required */
		PublishStatus: FormControl<RulePublishStatus | null | undefined>,

		/** Required */
		CreatedTime: FormControl<Date | null | undefined>,

		/** Required */
		LastUpdatedTime: FormControl<Date | null | undefined>,
	}
	export function CreateRuleSummaryFormGroup() {
		return new FormGroup<RuleSummaryFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RuleId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RuleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			EventSourceName: new FormControl<EventSourceName | null | undefined>(undefined, [Validators.required]),
			PublishStatus: new FormControl<RulePublishStatus | null | undefined>(undefined, [Validators.required]),
			CreatedTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			LastUpdatedTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Information about an action. */
	export interface ActionSummary {

		/** Required */
		ActionType: ActionType;
	}

	/** Information about an action. */
	export interface ActionSummaryFormProperties {

		/** Required */
		ActionType: FormControl<ActionType | null | undefined>,
	}
	export function CreateActionSummaryFormGroup() {
		return new FormGroup<ActionSummaryFormProperties>({
			ActionType: new FormControl<ActionType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListSecurityKeysResponse {
		SecurityKeys?: Array<SecurityKey>;
		NextToken?: string;
	}
	export interface ListSecurityKeysResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListSecurityKeysResponseFormGroup() {
		return new FormGroup<ListSecurityKeysResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Configuration information of the security key. */
	export interface SecurityKey {
		AssociationId?: string;
		Key?: string;
		CreationTime?: Date;
	}

	/** Configuration information of the security key. */
	export interface SecurityKeyFormProperties {
		AssociationId: FormControl<string | null | undefined>,
		Key: FormControl<string | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
	}
	export function CreateSecurityKeyFormGroup() {
		return new FormGroup<SecurityKeyFormProperties>({
			AssociationId: new FormControl<string | null | undefined>(undefined),
			Key: new FormControl<string | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListSecurityProfilePermissionsResponse {
		Permissions?: Array<string>;
		NextToken?: string;
	}
	export interface ListSecurityProfilePermissionsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListSecurityProfilePermissionsResponseFormGroup() {
		return new FormGroup<ListSecurityProfilePermissionsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListSecurityProfilesResponse {
		SecurityProfileSummaryList?: Array<SecurityProfileSummary>;
		NextToken?: string;
	}
	export interface ListSecurityProfilesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListSecurityProfilesResponseFormGroup() {
		return new FormGroup<ListSecurityProfilesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information about a security profile. */
	export interface SecurityProfileSummary {
		Id?: string;
		Arn?: string;
		Name?: string;
	}

	/** Contains information about a security profile. */
	export interface SecurityProfileSummaryFormProperties {
		Id: FormControl<string | null | undefined>,
		Arn: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
	}
	export function CreateSecurityProfileSummaryFormGroup() {
		return new FormGroup<SecurityProfileSummaryFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			Arn: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
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

	export interface ListTaskTemplatesResponse {
		TaskTemplates?: Array<TaskTemplateMetadata>;
		NextToken?: string;
	}
	export interface ListTaskTemplatesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTaskTemplatesResponseFormGroup() {
		return new FormGroup<ListTaskTemplatesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains summary information about the task template. */
	export interface TaskTemplateMetadata {
		Id?: string;
		Arn?: string;
		Name?: string;
		Description?: string;
		Status?: TaskTemplateStatus;
		LastModifiedTime?: Date;
		CreatedTime?: Date;
	}

	/** Contains summary information about the task template. */
	export interface TaskTemplateMetadataFormProperties {
		Id: FormControl<string | null | undefined>,
		Arn: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		Status: FormControl<TaskTemplateStatus | null | undefined>,
		LastModifiedTime: FormControl<Date | null | undefined>,
		CreatedTime: FormControl<Date | null | undefined>,
	}
	export function CreateTaskTemplateMetadataFormGroup() {
		return new FormGroup<TaskTemplateMetadataFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			Arn: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<TaskTemplateStatus | null | undefined>(undefined),
			LastModifiedTime: new FormControl<Date | null | undefined>(undefined),
			CreatedTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListTrafficDistributionGroupsResponse {
		NextToken?: string;
		TrafficDistributionGroupSummaryList?: Array<TrafficDistributionGroupSummary>;
	}
	export interface ListTrafficDistributionGroupsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTrafficDistributionGroupsResponseFormGroup() {
		return new FormGroup<ListTrafficDistributionGroupsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about traffic distribution groups. */
	export interface TrafficDistributionGroupSummary {
		Id?: string;
		Arn?: string;
		Name?: string;
		InstanceArn?: string;
		Status?: TrafficDistributionGroupStatus;
	}

	/** Information about traffic distribution groups. */
	export interface TrafficDistributionGroupSummaryFormProperties {
		Id: FormControl<string | null | undefined>,
		Arn: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		InstanceArn: FormControl<string | null | undefined>,
		Status: FormControl<TrafficDistributionGroupStatus | null | undefined>,
	}
	export function CreateTrafficDistributionGroupSummaryFormGroup() {
		return new FormGroup<TrafficDistributionGroupSummaryFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			Arn: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			InstanceArn: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<TrafficDistributionGroupStatus | null | undefined>(undefined),
		});

	}

	export interface ListUseCasesResponse {
		UseCaseSummaryList?: Array<UseCase>;
		NextToken?: string;
	}
	export interface ListUseCasesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListUseCasesResponseFormGroup() {
		return new FormGroup<ListUseCasesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains the use case. */
	export interface UseCase {
		UseCaseId?: string;
		UseCaseArn?: string;
		UseCaseType?: UseCaseType;
	}

	/** Contains the use case. */
	export interface UseCaseFormProperties {
		UseCaseId: FormControl<string | null | undefined>,
		UseCaseArn: FormControl<string | null | undefined>,
		UseCaseType: FormControl<UseCaseType | null | undefined>,
	}
	export function CreateUseCaseFormGroup() {
		return new FormGroup<UseCaseFormProperties>({
			UseCaseId: new FormControl<string | null | undefined>(undefined),
			UseCaseArn: new FormControl<string | null | undefined>(undefined),
			UseCaseType: new FormControl<UseCaseType | null | undefined>(undefined),
		});

	}

	export enum UseCaseType { RULES_EVALUATION = 0, CONNECT_CAMPAIGNS = 1 }

	export interface ListUserHierarchyGroupsResponse {
		UserHierarchyGroupSummaryList?: Array<HierarchyGroupSummary>;
		NextToken?: string;
	}
	export interface ListUserHierarchyGroupsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListUserHierarchyGroupsResponseFormGroup() {
		return new FormGroup<ListUserHierarchyGroupsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListUsersResponse {
		UserSummaryList?: Array<UserSummary>;
		NextToken?: string;
	}
	export interface ListUsersResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListUsersResponseFormGroup() {
		return new FormGroup<ListUsersResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains summary information about a user. */
	export interface UserSummary {
		Id?: string;
		Arn?: string;
		Username?: string;
	}

	/** Contains summary information about a user. */
	export interface UserSummaryFormProperties {
		Id: FormControl<string | null | undefined>,
		Arn: FormControl<string | null | undefined>,
		Username: FormControl<string | null | undefined>,
	}
	export function CreateUserSummaryFormGroup() {
		return new FormGroup<UserSummaryFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			Arn: new FormControl<string | null | undefined>(undefined),
			Username: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface MonitorContactResponse {
		ContactId?: string;
		ContactArn?: string;
	}
	export interface MonitorContactResponseFormProperties {
		ContactId: FormControl<string | null | undefined>,
		ContactArn: FormControl<string | null | undefined>,
	}
	export function CreateMonitorContactResponseFormGroup() {
		return new FormGroup<MonitorContactResponseFormProperties>({
			ContactId: new FormControl<string | null | undefined>(undefined),
			ContactArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum MonitorCapability { SILENT_MONITOR = 0, BARGE = 1 }

	export interface PutUserStatusResponse {
	}
	export interface PutUserStatusResponseFormProperties {
	}
	export function CreatePutUserStatusResponseFormGroup() {
		return new FormGroup<PutUserStatusResponseFormProperties>({
		});

	}

	export interface ReplicateInstanceResponse {
		Id?: string;
		Arn?: string;
	}
	export interface ReplicateInstanceResponseFormProperties {
		Id: FormControl<string | null | undefined>,
		Arn: FormControl<string | null | undefined>,
	}
	export function CreateReplicateInstanceResponseFormGroup() {
		return new FormGroup<ReplicateInstanceResponseFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			Arn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ResumeContactRecordingResponse {
	}
	export interface ResumeContactRecordingResponseFormProperties {
	}
	export function CreateResumeContactRecordingResponseFormGroup() {
		return new FormGroup<ResumeContactRecordingResponseFormProperties>({
		});

	}

	export interface SearchAvailablePhoneNumbersResponse {
		NextToken?: string;
		AvailableNumbersList?: Array<AvailableNumberSummary>;
	}
	export interface SearchAvailablePhoneNumbersResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateSearchAvailablePhoneNumbersResponseFormGroup() {
		return new FormGroup<SearchAvailablePhoneNumbersResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about available phone numbers. */
	export interface AvailableNumberSummary {
		PhoneNumber?: string;
		PhoneNumberCountryCode?: PhoneNumberCountryCode;
		PhoneNumberType?: PhoneNumberType;
	}

	/** Information about available phone numbers. */
	export interface AvailableNumberSummaryFormProperties {
		PhoneNumber: FormControl<string | null | undefined>,
		PhoneNumberCountryCode: FormControl<PhoneNumberCountryCode | null | undefined>,
		PhoneNumberType: FormControl<PhoneNumberType | null | undefined>,
	}
	export function CreateAvailableNumberSummaryFormGroup() {
		return new FormGroup<AvailableNumberSummaryFormProperties>({
			PhoneNumber: new FormControl<string | null | undefined>(undefined),
			PhoneNumberCountryCode: new FormControl<PhoneNumberCountryCode | null | undefined>(undefined),
			PhoneNumberType: new FormControl<PhoneNumberType | null | undefined>(undefined),
		});

	}

	export interface SearchHoursOfOperationsResponse {
		HoursOfOperations?: Array<HoursOfOperation>;
		NextToken?: string;
		ApproximateTotalCount?: number | null;
	}
	export interface SearchHoursOfOperationsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
		ApproximateTotalCount: FormControl<number | null | undefined>,
	}
	export function CreateSearchHoursOfOperationsResponseFormGroup() {
		return new FormGroup<SearchHoursOfOperationsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			ApproximateTotalCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** <p>An object that can be used to specify Tag conditions inside the <code>SearchFilter</code>. This accepts an <code>OR</code> of <code>AND</code> (List of List) input where: </p> <ul> <li> <p>Top level list specifies conditions that need to be applied with <code>OR</code> operator</p> </li> <li> <p>Inner list specifies conditions that need to be applied with <code>AND</code> operator.</p> </li> </ul> */
	export interface ControlPlaneTagFilter {
		OrConditions?: Array<Array<TagCondition>>;
		AndConditions?: Array<TagCondition>;
		TagCondition?: TagCondition;
	}

	/** <p>An object that can be used to specify Tag conditions inside the <code>SearchFilter</code>. This accepts an <code>OR</code> of <code>AND</code> (List of List) input where: </p> <ul> <li> <p>Top level list specifies conditions that need to be applied with <code>OR</code> operator</p> </li> <li> <p>Inner list specifies conditions that need to be applied with <code>AND</code> operator.</p> </li> </ul> */
	export interface ControlPlaneTagFilterFormProperties {
	}
	export function CreateControlPlaneTagFilterFormGroup() {
		return new FormGroup<ControlPlaneTagFilterFormProperties>({
		});

	}


	/** A leaf node condition which can be used to specify a tag condition, for example, <code>HAVE BPO = 123</code>.  */
	export interface TagCondition {
		TagKey?: string;
		TagValue?: string;
	}

	/** A leaf node condition which can be used to specify a tag condition, for example, <code>HAVE BPO = 123</code>.  */
	export interface TagConditionFormProperties {
		TagKey: FormControl<string | null | undefined>,
		TagValue: FormControl<string | null | undefined>,
	}
	export function CreateTagConditionFormGroup() {
		return new FormGroup<TagConditionFormProperties>({
			TagKey: new FormControl<string | null | undefined>(undefined),
			TagValue: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The search criteria to be used to return hours of operations. */
	export interface HoursOfOperationSearchCriteria {
		OrConditions?: Array<HoursOfOperationSearchCriteria>;
		AndConditions?: Array<HoursOfOperationSearchCriteria>;
		StringCondition?: StringCondition;
	}

	/** The search criteria to be used to return hours of operations. */
	export interface HoursOfOperationSearchCriteriaFormProperties {
	}
	export function CreateHoursOfOperationSearchCriteriaFormGroup() {
		return new FormGroup<HoursOfOperationSearchCriteriaFormProperties>({
		});

	}


	/** A leaf node condition which can be used to specify a string condition.  */
	export interface StringCondition {
		FieldName?: string;
		Value?: string;
		ComparisonType?: StringComparisonType;
	}

	/** A leaf node condition which can be used to specify a string condition.  */
	export interface StringConditionFormProperties {
		FieldName: FormControl<string | null | undefined>,
		Value: FormControl<string | null | undefined>,
		ComparisonType: FormControl<StringComparisonType | null | undefined>,
	}
	export function CreateStringConditionFormGroup() {
		return new FormGroup<StringConditionFormProperties>({
			FieldName: new FormControl<string | null | undefined>(undefined),
			Value: new FormControl<string | null | undefined>(undefined),
			ComparisonType: new FormControl<StringComparisonType | null | undefined>(undefined),
		});

	}

	export enum StringComparisonType { STARTS_WITH = 0, CONTAINS = 1, EXACT = 2 }

	export interface SearchPromptsResponse {
		Prompts?: Array<Prompt>;
		NextToken?: string;
		ApproximateTotalCount?: number | null;
	}
	export interface SearchPromptsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
		ApproximateTotalCount: FormControl<number | null | undefined>,
	}
	export function CreateSearchPromptsResponseFormGroup() {
		return new FormGroup<SearchPromptsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			ApproximateTotalCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The search criteria to be used to return prompts. */
	export interface PromptSearchCriteria {
		OrConditions?: Array<PromptSearchCriteria>;
		AndConditions?: Array<PromptSearchCriteria>;
		StringCondition?: StringCondition;
	}

	/** The search criteria to be used to return prompts. */
	export interface PromptSearchCriteriaFormProperties {
	}
	export function CreatePromptSearchCriteriaFormGroup() {
		return new FormGroup<PromptSearchCriteriaFormProperties>({
		});

	}

	export interface SearchQueuesResponse {
		Queues?: Array<Queue>;
		NextToken?: string;
		ApproximateTotalCount?: number | null;
	}
	export interface SearchQueuesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
		ApproximateTotalCount: FormControl<number | null | undefined>,
	}
	export function CreateSearchQueuesResponseFormGroup() {
		return new FormGroup<SearchQueuesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			ApproximateTotalCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** <p>The search criteria to be used to return queues.</p> <note> <p>The <code>name</code> and <code>description</code> fields support "contains" queries with a minimum of 2 characters and a maximum of 25 characters. Any queries with character lengths outside of this range will throw invalid results. </p> </note> */
	export interface QueueSearchCriteria {
		OrConditions?: Array<QueueSearchCriteria>;
		AndConditions?: Array<QueueSearchCriteria>;
		StringCondition?: StringCondition;
		QueueTypeCondition?: SearchableQueueType;
	}

	/** <p>The search criteria to be used to return queues.</p> <note> <p>The <code>name</code> and <code>description</code> fields support "contains" queries with a minimum of 2 characters and a maximum of 25 characters. Any queries with character lengths outside of this range will throw invalid results. </p> </note> */
	export interface QueueSearchCriteriaFormProperties {
		QueueTypeCondition: FormControl<SearchableQueueType | null | undefined>,
	}
	export function CreateQueueSearchCriteriaFormGroup() {
		return new FormGroup<QueueSearchCriteriaFormProperties>({
			QueueTypeCondition: new FormControl<SearchableQueueType | null | undefined>(undefined),
		});

	}

	export enum SearchableQueueType { STANDARD = 0 }

	export interface SearchQuickConnectsResponse {
		QuickConnects?: Array<QuickConnect>;
		NextToken?: string;
		ApproximateTotalCount?: number | null;
	}
	export interface SearchQuickConnectsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
		ApproximateTotalCount: FormControl<number | null | undefined>,
	}
	export function CreateSearchQuickConnectsResponseFormGroup() {
		return new FormGroup<SearchQuickConnectsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			ApproximateTotalCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The search criteria to be used to return quick connects. */
	export interface QuickConnectSearchCriteria {
		OrConditions?: Array<QuickConnectSearchCriteria>;
		AndConditions?: Array<QuickConnectSearchCriteria>;
		StringCondition?: StringCondition;
	}

	/** The search criteria to be used to return quick connects. */
	export interface QuickConnectSearchCriteriaFormProperties {
	}
	export function CreateQuickConnectSearchCriteriaFormGroup() {
		return new FormGroup<QuickConnectSearchCriteriaFormProperties>({
		});

	}

	export interface SearchResourceTagsResponse {
		Tags?: Array<TagSet>;
		NextToken?: string;
	}
	export interface SearchResourceTagsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateSearchResourceTagsResponseFormGroup() {
		return new FormGroup<SearchResourceTagsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A tag set contains tag key and tag value. */
	export interface TagSet {
		key?: string;
		value?: string;
	}

	/** A tag set contains tag key and tag value. */
	export interface TagSetFormProperties {
		key: FormControl<string | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreateTagSetFormGroup() {
		return new FormGroup<TagSetFormProperties>({
			key: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The search criteria to be used to return tags. */
	export interface TagSearchCondition {
		tagKey?: string;
		tagValue?: string;
		tagKeyComparisonType?: StringComparisonType;
		tagValueComparisonType?: StringComparisonType;
	}

	/** The search criteria to be used to return tags. */
	export interface TagSearchConditionFormProperties {
		tagKey: FormControl<string | null | undefined>,
		tagValue: FormControl<string | null | undefined>,
		tagKeyComparisonType: FormControl<StringComparisonType | null | undefined>,
		tagValueComparisonType: FormControl<StringComparisonType | null | undefined>,
	}
	export function CreateTagSearchConditionFormGroup() {
		return new FormGroup<TagSearchConditionFormProperties>({
			tagKey: new FormControl<string | null | undefined>(undefined),
			tagValue: new FormControl<string | null | undefined>(undefined),
			tagKeyComparisonType: new FormControl<StringComparisonType | null | undefined>(undefined),
			tagValueComparisonType: new FormControl<StringComparisonType | null | undefined>(undefined),
		});

	}

	export interface MaximumResultReturnedException {
	}
	export interface MaximumResultReturnedExceptionFormProperties {
	}
	export function CreateMaximumResultReturnedExceptionFormGroup() {
		return new FormGroup<MaximumResultReturnedExceptionFormProperties>({
		});

	}

	export interface SearchRoutingProfilesResponse {
		RoutingProfiles?: Array<RoutingProfile>;
		NextToken?: string;
		ApproximateTotalCount?: number | null;
	}
	export interface SearchRoutingProfilesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
		ApproximateTotalCount: FormControl<number | null | undefined>,
	}
	export function CreateSearchRoutingProfilesResponseFormGroup() {
		return new FormGroup<SearchRoutingProfilesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			ApproximateTotalCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** <p>The search criteria to be used to return routing profiles.</p> <note> <p>The <code>name</code> and <code>description</code> fields support "contains" queries with a minimum of 2 characters and a maximum of 25 characters. Any queries with character lengths outside of this range will throw invalid results. </p> </note> */
	export interface RoutingProfileSearchCriteria {
		OrConditions?: Array<RoutingProfileSearchCriteria>;
		AndConditions?: Array<RoutingProfileSearchCriteria>;
		StringCondition?: StringCondition;
	}

	/** <p>The search criteria to be used to return routing profiles.</p> <note> <p>The <code>name</code> and <code>description</code> fields support "contains" queries with a minimum of 2 characters and a maximum of 25 characters. Any queries with character lengths outside of this range will throw invalid results. </p> </note> */
	export interface RoutingProfileSearchCriteriaFormProperties {
	}
	export function CreateRoutingProfileSearchCriteriaFormGroup() {
		return new FormGroup<RoutingProfileSearchCriteriaFormProperties>({
		});

	}

	export interface SearchSecurityProfilesResponse {
		SecurityProfiles?: Array<SecurityProfileSearchSummary>;
		NextToken?: string;
		ApproximateTotalCount?: number | null;
	}
	export interface SearchSecurityProfilesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
		ApproximateTotalCount: FormControl<number | null | undefined>,
	}
	export function CreateSearchSecurityProfilesResponseFormGroup() {
		return new FormGroup<SearchSecurityProfilesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			ApproximateTotalCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Information about the returned security profiles. */
	export interface SecurityProfileSearchSummary {
		Id?: string;
		OrganizationResourceId?: string;
		Arn?: string;
		SecurityProfileName?: string;
		Description?: string;
		Tags?: TagMap;
	}

	/** Information about the returned security profiles. */
	export interface SecurityProfileSearchSummaryFormProperties {
		Id: FormControl<string | null | undefined>,
		OrganizationResourceId: FormControl<string | null | undefined>,
		Arn: FormControl<string | null | undefined>,
		SecurityProfileName: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
	}
	export function CreateSecurityProfileSearchSummaryFormGroup() {
		return new FormGroup<SecurityProfileSearchSummaryFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			OrganizationResourceId: new FormControl<string | null | undefined>(undefined),
			Arn: new FormControl<string | null | undefined>(undefined),
			SecurityProfileName: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>The search criteria to be used to return security profiles.</p> <note> <p>The <code>name</code> field support "contains" queries with a minimum of 2 characters and maximum of 25 characters. Any queries with character lengths outside of this range will throw invalid results.</p> </note> */
	export interface SecurityProfileSearchCriteria {
		OrConditions?: Array<SecurityProfileSearchCriteria>;
		AndConditions?: Array<SecurityProfileSearchCriteria>;

		/** A leaf node condition which can be used to specify a string condition. */
		StringCondition?: StringCondition;
	}

	/** <p>The search criteria to be used to return security profiles.</p> <note> <p>The <code>name</code> field support "contains" queries with a minimum of 2 characters and maximum of 25 characters. Any queries with character lengths outside of this range will throw invalid results.</p> </note> */
	export interface SecurityProfileSearchCriteriaFormProperties {
	}
	export function CreateSecurityProfileSearchCriteriaFormGroup() {
		return new FormGroup<SecurityProfileSearchCriteriaFormProperties>({
		});

	}

	export interface SearchUsersResponse {
		Users?: Array<UserSearchSummary>;
		NextToken?: string;
		ApproximateTotalCount?: number | null;
	}
	export interface SearchUsersResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
		ApproximateTotalCount: FormControl<number | null | undefined>,
	}
	export function CreateSearchUsersResponseFormGroup() {
		return new FormGroup<SearchUsersResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			ApproximateTotalCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Information about the returned users. */
	export interface UserSearchSummary {
		Arn?: string;
		DirectoryUserId?: string;
		HierarchyGroupId?: string;
		Id?: string;
		IdentityInfo?: UserIdentityInfoLite;

		/** Contains information about the phone configuration settings for a user. */
		PhoneConfig?: UserPhoneConfig;
		RoutingProfileId?: string;
		SecurityProfileIds?: Array<string>;
		Tags?: TagMap;
		Username?: string;
	}

	/** Information about the returned users. */
	export interface UserSearchSummaryFormProperties {
		Arn: FormControl<string | null | undefined>,
		DirectoryUserId: FormControl<string | null | undefined>,
		HierarchyGroupId: FormControl<string | null | undefined>,
		Id: FormControl<string | null | undefined>,
		RoutingProfileId: FormControl<string | null | undefined>,
		Username: FormControl<string | null | undefined>,
	}
	export function CreateUserSearchSummaryFormGroup() {
		return new FormGroup<UserSearchSummaryFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			DirectoryUserId: new FormControl<string | null | undefined>(undefined),
			HierarchyGroupId: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			RoutingProfileId: new FormControl<string | null | undefined>(undefined),
			Username: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The user's first name and last name. */
	export interface UserIdentityInfoLite {
		FirstName?: string;
		LastName?: string;
	}

	/** The user's first name and last name. */
	export interface UserIdentityInfoLiteFormProperties {
		FirstName: FormControl<string | null | undefined>,
		LastName: FormControl<string | null | undefined>,
	}
	export function CreateUserIdentityInfoLiteFormGroup() {
		return new FormGroup<UserIdentityInfoLiteFormProperties>({
			FirstName: new FormControl<string | null | undefined>(undefined),
			LastName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>The search criteria to be used to return users.</p> <note> <p>The <code>name</code> and <code>description</code> fields support "contains" queries with a minimum of 2 characters and a maximum of 25 characters. Any queries with character lengths outside of this range will throw invalid results. </p> </note> */
	export interface UserSearchCriteria {
		OrConditions?: Array<UserSearchCriteria>;
		AndConditions?: Array<UserSearchCriteria>;
		StringCondition?: StringCondition;
		HierarchyGroupCondition?: HierarchyGroupCondition;
	}

	/** <p>The search criteria to be used to return users.</p> <note> <p>The <code>name</code> and <code>description</code> fields support "contains" queries with a minimum of 2 characters and a maximum of 25 characters. Any queries with character lengths outside of this range will throw invalid results. </p> </note> */
	export interface UserSearchCriteriaFormProperties {
	}
	export function CreateUserSearchCriteriaFormGroup() {
		return new FormGroup<UserSearchCriteriaFormProperties>({
		});

	}


	/** A leaf node condition which can be used to specify a hierarchy group condition. */
	export interface HierarchyGroupCondition {
		Value?: string;
		HierarchyGroupMatchType?: HierarchyGroupMatchType;
	}

	/** A leaf node condition which can be used to specify a hierarchy group condition. */
	export interface HierarchyGroupConditionFormProperties {
		Value: FormControl<string | null | undefined>,
		HierarchyGroupMatchType: FormControl<HierarchyGroupMatchType | null | undefined>,
	}
	export function CreateHierarchyGroupConditionFormGroup() {
		return new FormGroup<HierarchyGroupConditionFormProperties>({
			Value: new FormControl<string | null | undefined>(undefined),
			HierarchyGroupMatchType: new FormControl<HierarchyGroupMatchType | null | undefined>(undefined),
		});

	}

	export enum HierarchyGroupMatchType { EXACT = 0, WITH_CHILD_GROUPS = 1 }

	export interface SearchVocabulariesResponse {
		VocabularySummaryList?: Array<VocabularySummary>;
		NextToken?: string;
	}
	export interface SearchVocabulariesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateSearchVocabulariesResponseFormGroup() {
		return new FormGroup<SearchVocabulariesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains summary information about the custom vocabulary. */
	export interface VocabularySummary {

		/** Required */
		Name: string;

		/** Required */
		Id: string;

		/** Required */
		Arn: string;

		/** Required */
		LanguageCode: VocabularyLanguageCode;

		/** Required */
		State: VocabularyState;

		/** Required */
		LastModifiedTime: Date;
		FailureReason?: string;
	}

	/** Contains summary information about the custom vocabulary. */
	export interface VocabularySummaryFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		Id: FormControl<string | null | undefined>,

		/** Required */
		Arn: FormControl<string | null | undefined>,

		/** Required */
		LanguageCode: FormControl<VocabularyLanguageCode | null | undefined>,

		/** Required */
		State: FormControl<VocabularyState | null | undefined>,

		/** Required */
		LastModifiedTime: FormControl<Date | null | undefined>,
		FailureReason: FormControl<string | null | undefined>,
	}
	export function CreateVocabularySummaryFormGroup() {
		return new FormGroup<VocabularySummaryFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			LanguageCode: new FormControl<VocabularyLanguageCode | null | undefined>(undefined, [Validators.required]),
			State: new FormControl<VocabularyState | null | undefined>(undefined, [Validators.required]),
			LastModifiedTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			FailureReason: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StartChatContactResponse {
		ContactId?: string;
		ParticipantId?: string;
		ParticipantToken?: string;
		ContinuedFromContactId?: string;
	}
	export interface StartChatContactResponseFormProperties {
		ContactId: FormControl<string | null | undefined>,
		ParticipantId: FormControl<string | null | undefined>,
		ParticipantToken: FormControl<string | null | undefined>,
		ContinuedFromContactId: FormControl<string | null | undefined>,
	}
	export function CreateStartChatContactResponseFormGroup() {
		return new FormGroup<StartChatContactResponseFormProperties>({
			ContactId: new FormControl<string | null | undefined>(undefined),
			ParticipantId: new FormControl<string | null | undefined>(undefined),
			ParticipantToken: new FormControl<string | null | undefined>(undefined),
			ContinuedFromContactId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum RehydrationType { ENTIRE_PAST_SESSION = 0, FROM_SEGMENT = 1 }

	export interface StartContactEvaluationResponse {

		/** Required */
		EvaluationId: string;

		/** Required */
		EvaluationArn: string;
	}
	export interface StartContactEvaluationResponseFormProperties {

		/** Required */
		EvaluationId: FormControl<string | null | undefined>,

		/** Required */
		EvaluationArn: FormControl<string | null | undefined>,
	}
	export function CreateStartContactEvaluationResponseFormGroup() {
		return new FormGroup<StartContactEvaluationResponseFormProperties>({
			EvaluationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			EvaluationArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface StartContactRecordingResponse {
	}
	export interface StartContactRecordingResponseFormProperties {
	}
	export function CreateStartContactRecordingResponseFormGroup() {
		return new FormGroup<StartContactRecordingResponseFormProperties>({
		});

	}

	export enum VoiceRecordingTrack { FROM_AGENT = 0, TO_AGENT = 1, ALL = 2 }

	export interface StartContactStreamingResponse {

		/** Required */
		StreamingId: string;
	}
	export interface StartContactStreamingResponseFormProperties {

		/** Required */
		StreamingId: FormControl<string | null | undefined>,
	}
	export function CreateStartContactStreamingResponseFormGroup() {
		return new FormGroup<StartContactStreamingResponseFormProperties>({
			StreamingId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface StartOutboundVoiceContactResponse {
		ContactId?: string;
	}
	export interface StartOutboundVoiceContactResponseFormProperties {
		ContactId: FormControl<string | null | undefined>,
	}
	export function CreateStartOutboundVoiceContactResponseFormGroup() {
		return new FormGroup<StartOutboundVoiceContactResponseFormProperties>({
			ContactId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DestinationNotAllowedException {
	}
	export interface DestinationNotAllowedExceptionFormProperties {
	}
	export function CreateDestinationNotAllowedExceptionFormGroup() {
		return new FormGroup<DestinationNotAllowedExceptionFormProperties>({
		});

	}

	export interface OutboundContactNotPermittedException {
	}
	export interface OutboundContactNotPermittedExceptionFormProperties {
	}
	export function CreateOutboundContactNotPermittedExceptionFormGroup() {
		return new FormGroup<OutboundContactNotPermittedExceptionFormProperties>({
		});

	}

	export interface StartTaskContactResponse {
		ContactId?: string;
	}
	export interface StartTaskContactResponseFormProperties {
		ContactId: FormControl<string | null | undefined>,
	}
	export function CreateStartTaskContactResponseFormGroup() {
		return new FormGroup<StartTaskContactResponseFormProperties>({
			ContactId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Well-formed data on a contact, used by agents to complete a contact request. You can have up to 4,096 UTF-8 bytes across all references for a contact. */
	export interface Reference {

		/** Required */
		Value: string;

		/** Required */
		Type: ReferenceType;
	}

	/** Well-formed data on a contact, used by agents to complete a contact request. You can have up to 4,096 UTF-8 bytes across all references for a contact. */
	export interface ReferenceFormProperties {

		/** Required */
		Value: FormControl<string | null | undefined>,

		/** Required */
		Type: FormControl<ReferenceType | null | undefined>,
	}
	export function CreateReferenceFormGroup() {
		return new FormGroup<ReferenceFormProperties>({
			Value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Type: new FormControl<ReferenceType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface StopContactResponse {
	}
	export interface StopContactResponseFormProperties {
	}
	export function CreateStopContactResponseFormGroup() {
		return new FormGroup<StopContactResponseFormProperties>({
		});

	}

	export interface ContactNotFoundException {
	}
	export interface ContactNotFoundExceptionFormProperties {
	}
	export function CreateContactNotFoundExceptionFormGroup() {
		return new FormGroup<ContactNotFoundExceptionFormProperties>({
		});

	}

	export interface StopContactRecordingResponse {
	}
	export interface StopContactRecordingResponseFormProperties {
	}
	export function CreateStopContactRecordingResponseFormGroup() {
		return new FormGroup<StopContactRecordingResponseFormProperties>({
		});

	}

	export interface StopContactStreamingResponse {
	}
	export interface StopContactStreamingResponseFormProperties {
	}
	export function CreateStopContactStreamingResponseFormGroup() {
		return new FormGroup<StopContactStreamingResponseFormProperties>({
		});

	}

	export interface SubmitContactEvaluationResponse {

		/** Required */
		EvaluationId: string;

		/** Required */
		EvaluationArn: string;
	}
	export interface SubmitContactEvaluationResponseFormProperties {

		/** Required */
		EvaluationId: FormControl<string | null | undefined>,

		/** Required */
		EvaluationArn: FormControl<string | null | undefined>,
	}
	export function CreateSubmitContactEvaluationResponseFormGroup() {
		return new FormGroup<SubmitContactEvaluationResponseFormProperties>({
			EvaluationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			EvaluationArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Information about input answers for a contact evaluation. */
	export interface EvaluationAnswerInput {
		Value?: EvaluationAnswerData;
	}

	/** Information about input answers for a contact evaluation. */
	export interface EvaluationAnswerInputFormProperties {
	}
	export function CreateEvaluationAnswerInputFormGroup() {
		return new FormGroup<EvaluationAnswerInputFormProperties>({
		});

	}


	/** Information about answer data for a contact evaluation. Answer data must be either string, numeric, or not applicable. */
	export interface EvaluationAnswerData {
		StringValue?: string;
		NumericValue?: number | null;
		NotApplicable?: boolean | null;
	}

	/** Information about answer data for a contact evaluation. Answer data must be either string, numeric, or not applicable. */
	export interface EvaluationAnswerDataFormProperties {
		StringValue: FormControl<string | null | undefined>,
		NumericValue: FormControl<number | null | undefined>,
		NotApplicable: FormControl<boolean | null | undefined>,
	}
	export function CreateEvaluationAnswerDataFormGroup() {
		return new FormGroup<EvaluationAnswerDataFormProperties>({
			StringValue: new FormControl<string | null | undefined>(undefined),
			NumericValue: new FormControl<number | null | undefined>(undefined),
			NotApplicable: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Information about notes for a contact evaluation. */
	export interface EvaluationNote {
		Value?: string;
	}

	/** Information about notes for a contact evaluation. */
	export interface EvaluationNoteFormProperties {
		Value: FormControl<string | null | undefined>,
	}
	export function CreateEvaluationNoteFormGroup() {
		return new FormGroup<EvaluationNoteFormProperties>({
			Value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SuspendContactRecordingResponse {
	}
	export interface SuspendContactRecordingResponseFormProperties {
	}
	export function CreateSuspendContactRecordingResponseFormGroup() {
		return new FormGroup<SuspendContactRecordingResponseFormProperties>({
		});

	}

	export interface TransferContactResponse {
		ContactId?: string;
		ContactArn?: string;
	}
	export interface TransferContactResponseFormProperties {
		ContactId: FormControl<string | null | undefined>,
		ContactArn: FormControl<string | null | undefined>,
	}
	export function CreateTransferContactResponseFormGroup() {
		return new FormGroup<TransferContactResponseFormProperties>({
			ContactId: new FormControl<string | null | undefined>(undefined),
			ContactArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateContactResponse {
	}
	export interface UpdateContactResponseFormProperties {
	}
	export function CreateUpdateContactResponseFormGroup() {
		return new FormGroup<UpdateContactResponseFormProperties>({
		});

	}

	export interface UpdateContactAttributesResponse {
	}
	export interface UpdateContactAttributesResponseFormProperties {
	}
	export function CreateUpdateContactAttributesResponseFormGroup() {
		return new FormGroup<UpdateContactAttributesResponseFormProperties>({
		});

	}

	export interface UpdateContactEvaluationResponse {

		/** Required */
		EvaluationId: string;

		/** Required */
		EvaluationArn: string;
	}
	export interface UpdateContactEvaluationResponseFormProperties {

		/** Required */
		EvaluationId: FormControl<string | null | undefined>,

		/** Required */
		EvaluationArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateContactEvaluationResponseFormGroup() {
		return new FormGroup<UpdateContactEvaluationResponseFormProperties>({
			EvaluationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			EvaluationArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateContactFlowContentResponse {
	}
	export interface UpdateContactFlowContentResponseFormProperties {
	}
	export function CreateUpdateContactFlowContentResponseFormGroup() {
		return new FormGroup<UpdateContactFlowContentResponseFormProperties>({
		});

	}

	export interface UpdateContactFlowMetadataResponse {
	}
	export interface UpdateContactFlowMetadataResponseFormProperties {
	}
	export function CreateUpdateContactFlowMetadataResponseFormGroup() {
		return new FormGroup<UpdateContactFlowMetadataResponseFormProperties>({
		});

	}

	export interface UpdateContactFlowModuleContentResponse {
	}
	export interface UpdateContactFlowModuleContentResponseFormProperties {
	}
	export function CreateUpdateContactFlowModuleContentResponseFormGroup() {
		return new FormGroup<UpdateContactFlowModuleContentResponseFormProperties>({
		});

	}

	export interface UpdateContactFlowModuleMetadataResponse {
	}
	export interface UpdateContactFlowModuleMetadataResponseFormProperties {
	}
	export function CreateUpdateContactFlowModuleMetadataResponseFormGroup() {
		return new FormGroup<UpdateContactFlowModuleMetadataResponseFormProperties>({
		});

	}

	export interface UpdateContactFlowNameResponse {
	}
	export interface UpdateContactFlowNameResponseFormProperties {
	}
	export function CreateUpdateContactFlowNameResponseFormGroup() {
		return new FormGroup<UpdateContactFlowNameResponseFormProperties>({
		});

	}

	export interface UpdateContactScheduleResponse {
	}
	export interface UpdateContactScheduleResponseFormProperties {
	}
	export function CreateUpdateContactScheduleResponseFormGroup() {
		return new FormGroup<UpdateContactScheduleResponseFormProperties>({
		});

	}

	export interface UpdateEvaluationFormResponse {

		/** Required */
		EvaluationFormId: string;

		/** Required */
		EvaluationFormArn: string;

		/** Required */
		EvaluationFormVersion: number;
	}
	export interface UpdateEvaluationFormResponseFormProperties {

		/** Required */
		EvaluationFormId: FormControl<string | null | undefined>,

		/** Required */
		EvaluationFormArn: FormControl<string | null | undefined>,

		/** Required */
		EvaluationFormVersion: FormControl<number | null | undefined>,
	}
	export function CreateUpdateEvaluationFormResponseFormGroup() {
		return new FormGroup<UpdateEvaluationFormResponseFormProperties>({
			EvaluationFormId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			EvaluationFormArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			EvaluationFormVersion: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateParticipantRoleConfigResponse {
	}
	export interface UpdateParticipantRoleConfigResponseFormProperties {
	}
	export function CreateUpdateParticipantRoleConfigResponseFormGroup() {
		return new FormGroup<UpdateParticipantRoleConfigResponseFormProperties>({
		});

	}


	/** Configuration information for the chat participant role. */
	export interface ChatParticipantRoleConfig {

		/** Required */
		ParticipantTimerConfigList: Array<ParticipantTimerConfiguration>;
	}

	/** Configuration information for the chat participant role. */
	export interface ChatParticipantRoleConfigFormProperties {
	}
	export function CreateChatParticipantRoleConfigFormGroup() {
		return new FormGroup<ChatParticipantRoleConfigFormProperties>({
		});

	}


	/** <p>Configuration information for the timer. After the timer configuration is set, it persists for the duration of the chat. It persists across new contacts in the chain, for example, transfer contacts.</p> <p>For more information about how chat timeouts work, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/setup-chat-timeouts.html">Set up chat timeouts for human participants</a>. </p> */
	export interface ParticipantTimerConfiguration {

		/** Required */
		ParticipantRole: TimerEligibleParticipantRoles;

		/** Required */
		TimerType: ParticipantTimerType;

		/** Required */
		TimerValue: ParticipantTimerValue;
	}

	/** <p>Configuration information for the timer. After the timer configuration is set, it persists for the duration of the chat. It persists across new contacts in the chain, for example, transfer contacts.</p> <p>For more information about how chat timeouts work, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/setup-chat-timeouts.html">Set up chat timeouts for human participants</a>. </p> */
	export interface ParticipantTimerConfigurationFormProperties {

		/** Required */
		ParticipantRole: FormControl<TimerEligibleParticipantRoles | null | undefined>,

		/** Required */
		TimerType: FormControl<ParticipantTimerType | null | undefined>,
	}
	export function CreateParticipantTimerConfigurationFormGroup() {
		return new FormGroup<ParticipantTimerConfigurationFormProperties>({
			ParticipantRole: new FormControl<TimerEligibleParticipantRoles | null | undefined>(undefined, [Validators.required]),
			TimerType: new FormControl<ParticipantTimerType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum TimerEligibleParticipantRoles { CUSTOMER = 0, AGENT = 1 }

	export enum ParticipantTimerType { IDLE = 0, DISCONNECT_NONCUSTOMER = 1 }


	/** <p>The value of the timer. Either the timer action (<code>Unset</code> to delete the timer), or the duration of the timer in minutes. Only one value can be set.</p> <p>For more information about how chat timeouts work, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/setup-chat-timeouts.html">Set up chat timeouts for human participants</a>. </p> */
	export interface ParticipantTimerValue {
		ParticipantTimerAction?: ParticipantTimerAction;
		ParticipantTimerDurationInMinutes?: number | null;
	}

	/** <p>The value of the timer. Either the timer action (<code>Unset</code> to delete the timer), or the duration of the timer in minutes. Only one value can be set.</p> <p>For more information about how chat timeouts work, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/setup-chat-timeouts.html">Set up chat timeouts for human participants</a>. </p> */
	export interface ParticipantTimerValueFormProperties {
		ParticipantTimerAction: FormControl<ParticipantTimerAction | null | undefined>,
		ParticipantTimerDurationInMinutes: FormControl<number | null | undefined>,
	}
	export function CreateParticipantTimerValueFormGroup() {
		return new FormGroup<ParticipantTimerValueFormProperties>({
			ParticipantTimerAction: new FormControl<ParticipantTimerAction | null | undefined>(undefined),
			ParticipantTimerDurationInMinutes: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum ParticipantTimerAction { Unset = 0 }

	export interface UpdatePhoneNumberResponse {
		PhoneNumberId?: string;
		PhoneNumberArn?: string;
	}
	export interface UpdatePhoneNumberResponseFormProperties {
		PhoneNumberId: FormControl<string | null | undefined>,
		PhoneNumberArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdatePhoneNumberResponseFormGroup() {
		return new FormGroup<UpdatePhoneNumberResponseFormProperties>({
			PhoneNumberId: new FormControl<string | null | undefined>(undefined),
			PhoneNumberArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdatePromptResponse {
		PromptARN?: string;
		PromptId?: string;
	}
	export interface UpdatePromptResponseFormProperties {
		PromptARN: FormControl<string | null | undefined>,
		PromptId: FormControl<string | null | undefined>,
	}
	export function CreateUpdatePromptResponseFormGroup() {
		return new FormGroup<UpdatePromptResponseFormProperties>({
			PromptARN: new FormControl<string | null | undefined>(undefined),
			PromptId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateTaskTemplateResponse {
		InstanceId?: string;
		Id?: string;
		Arn?: string;
		Name?: string;
		Description?: string;
		ContactFlowId?: string;
		Constraints?: TaskTemplateConstraints;
		Defaults?: TaskTemplateDefaults;
		Fields?: Array<TaskTemplateField>;
		Status?: TaskTemplateStatus;
		LastModifiedTime?: Date;
		CreatedTime?: Date;
	}
	export interface UpdateTaskTemplateResponseFormProperties {
		InstanceId: FormControl<string | null | undefined>,
		Id: FormControl<string | null | undefined>,
		Arn: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		ContactFlowId: FormControl<string | null | undefined>,
		Status: FormControl<TaskTemplateStatus | null | undefined>,
		LastModifiedTime: FormControl<Date | null | undefined>,
		CreatedTime: FormControl<Date | null | undefined>,
	}
	export function CreateUpdateTaskTemplateResponseFormGroup() {
		return new FormGroup<UpdateTaskTemplateResponseFormProperties>({
			InstanceId: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			Arn: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			ContactFlowId: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<TaskTemplateStatus | null | undefined>(undefined),
			LastModifiedTime: new FormControl<Date | null | undefined>(undefined),
			CreatedTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface UpdateTrafficDistributionResponse {
	}
	export interface UpdateTrafficDistributionResponseFormProperties {
	}
	export function CreateUpdateTrafficDistributionResponseFormGroup() {
		return new FormGroup<UpdateTrafficDistributionResponseFormProperties>({
		});

	}


	/** Contains information about the hierarchy level to update. */
	export interface HierarchyLevelUpdate {

		/** Required */
		Name: string;
	}

	/** Contains information about the hierarchy level to update. */
	export interface HierarchyLevelUpdateFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateHierarchyLevelUpdateFormGroup() {
		return new FormGroup<HierarchyLevelUpdateFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ActivateEvaluationFormRequest {

		/** Required */
		EvaluationFormVersion: number;
	}
	export interface ActivateEvaluationFormRequestFormProperties {

		/** Required */
		EvaluationFormVersion: FormControl<number | null | undefined>,
	}
	export function CreateActivateEvaluationFormRequestFormGroup() {
		return new FormGroup<ActivateEvaluationFormRequestFormProperties>({
			EvaluationFormVersion: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum AgentStatusState { ENABLED = 0, DISABLED = 1 }


	/** Configuration of the answering machine detection. */
	export interface AnswerMachineDetectionConfig {
		EnableAnswerMachineDetection?: boolean | null;
		AwaitAnswerMachinePrompt?: boolean | null;
	}

	/** Configuration of the answering machine detection. */
	export interface AnswerMachineDetectionConfigFormProperties {
		EnableAnswerMachineDetection: FormControl<boolean | null | undefined>,
		AwaitAnswerMachinePrompt: FormControl<boolean | null | undefined>,
	}
	export function CreateAnswerMachineDetectionConfigFormGroup() {
		return new FormGroup<AnswerMachineDetectionConfigFormProperties>({
			EnableAnswerMachineDetection: new FormControl<boolean | null | undefined>(undefined),
			AwaitAnswerMachinePrompt: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface AssociateApprovedOriginRequest {

		/** Required */
		Origin: string;
	}
	export interface AssociateApprovedOriginRequestFormProperties {

		/** Required */
		Origin: FormControl<string | null | undefined>,
	}
	export function CreateAssociateApprovedOriginRequestFormGroup() {
		return new FormGroup<AssociateApprovedOriginRequestFormProperties>({
			Origin: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AssociateBotRequest {

		/** Configuration information of an Amazon Lex bot. */
		LexBot?: LexBot;
		LexV2Bot?: LexV2Bot;
	}
	export interface AssociateBotRequestFormProperties {
	}
	export function CreateAssociateBotRequestFormGroup() {
		return new FormGroup<AssociateBotRequestFormProperties>({
		});

	}

	export interface AssociateDefaultVocabularyRequest {
		VocabularyId?: string;
	}
	export interface AssociateDefaultVocabularyRequestFormProperties {
		VocabularyId: FormControl<string | null | undefined>,
	}
	export function CreateAssociateDefaultVocabularyRequestFormGroup() {
		return new FormGroup<AssociateDefaultVocabularyRequestFormProperties>({
			VocabularyId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum InstanceStorageResourceType { CHAT_TRANSCRIPTS = 0, CALL_RECORDINGS = 1, SCHEDULED_REPORTS = 2, MEDIA_STREAMS = 3, CONTACT_TRACE_RECORDS = 4, AGENT_EVENTS = 5, REAL_TIME_CONTACT_ANALYSIS_SEGMENTS = 6, ATTACHMENTS = 7, CONTACT_EVALUATIONS = 8, SCREEN_RECORDINGS = 9 }

	export interface AssociateInstanceStorageConfigRequest {

		/** Required */
		ResourceType: InstanceStorageResourceType;

		/** Required */
		StorageConfig: InstanceStorageConfig;
	}
	export interface AssociateInstanceStorageConfigRequestFormProperties {

		/** Required */
		ResourceType: FormControl<InstanceStorageResourceType | null | undefined>,
	}
	export function CreateAssociateInstanceStorageConfigRequestFormGroup() {
		return new FormGroup<AssociateInstanceStorageConfigRequestFormProperties>({
			ResourceType: new FormControl<InstanceStorageResourceType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AssociateLambdaFunctionRequest {

		/** Required */
		FunctionArn: string;
	}
	export interface AssociateLambdaFunctionRequestFormProperties {

		/** Required */
		FunctionArn: FormControl<string | null | undefined>,
	}
	export function CreateAssociateLambdaFunctionRequestFormGroup() {
		return new FormGroup<AssociateLambdaFunctionRequestFormProperties>({
			FunctionArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AssociateLexBotRequest {

		/** Required */
		LexBot: LexBot;
	}
	export interface AssociateLexBotRequestFormProperties {
	}
	export function CreateAssociateLexBotRequestFormGroup() {
		return new FormGroup<AssociateLexBotRequestFormProperties>({
		});

	}

	export interface AssociatePhoneNumberContactFlowRequest {

		/** Required */
		InstanceId: string;

		/** Required */
		ContactFlowId: string;
	}
	export interface AssociatePhoneNumberContactFlowRequestFormProperties {

		/** Required */
		InstanceId: FormControl<string | null | undefined>,

		/** Required */
		ContactFlowId: FormControl<string | null | undefined>,
	}
	export function CreateAssociatePhoneNumberContactFlowRequestFormGroup() {
		return new FormGroup<AssociatePhoneNumberContactFlowRequestFormProperties>({
			InstanceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ContactFlowId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AssociateQueueQuickConnectsRequest {

		/** Required */
		QuickConnectIds: Array<string>;
	}
	export interface AssociateQueueQuickConnectsRequestFormProperties {
	}
	export function CreateAssociateQueueQuickConnectsRequestFormGroup() {
		return new FormGroup<AssociateQueueQuickConnectsRequestFormProperties>({
		});

	}

	export interface AssociateRoutingProfileQueuesRequest {

		/** Required */
		QueueConfigs: Array<RoutingProfileQueueConfig>;
	}
	export interface AssociateRoutingProfileQueuesRequestFormProperties {
	}
	export function CreateAssociateRoutingProfileQueuesRequestFormGroup() {
		return new FormGroup<AssociateRoutingProfileQueuesRequestFormProperties>({
		});

	}

	export interface AssociateSecurityKeyRequest {

		/** Required */
		Key: string;
	}
	export interface AssociateSecurityKeyRequestFormProperties {

		/** Required */
		Key: FormControl<string | null | undefined>,
	}
	export function CreateAssociateSecurityKeyRequestFormGroup() {
		return new FormGroup<AssociateSecurityKeyRequestFormProperties>({
			Key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A chat message. */
	export interface ChatMessage {

		/** Required */
		ContentType: string;

		/** Required */
		Content: string;
	}

	/** A chat message. */
	export interface ChatMessageFormProperties {

		/** Required */
		ContentType: FormControl<string | null | undefined>,

		/** Required */
		Content: FormControl<string | null | undefined>,
	}
	export function CreateChatMessageFormGroup() {
		return new FormGroup<ChatMessageFormProperties>({
			ContentType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Content: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The streaming configuration, such as the Amazon SNS streaming endpoint. */
	export interface ChatStreamingConfiguration {

		/** Required */
		StreamingEndpointArn: string;
	}

	/** The streaming configuration, such as the Amazon SNS streaming endpoint. */
	export interface ChatStreamingConfigurationFormProperties {

		/** Required */
		StreamingEndpointArn: FormControl<string | null | undefined>,
	}
	export function CreateChatStreamingConfigurationFormGroup() {
		return new FormGroup<ChatStreamingConfigurationFormProperties>({
			StreamingEndpointArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ClaimPhoneNumberRequest {

		/** Required */
		TargetArn: string;

		/** Required */
		PhoneNumber: string;
		PhoneNumberDescription?: string;
		Tags?: TagMap;
		ClientToken?: string;
	}
	export interface ClaimPhoneNumberRequestFormProperties {

		/** Required */
		TargetArn: FormControl<string | null | undefined>,

		/** Required */
		PhoneNumber: FormControl<string | null | undefined>,
		PhoneNumberDescription: FormControl<string | null | undefined>,
		ClientToken: FormControl<string | null | undefined>,
	}
	export function CreateClaimPhoneNumberRequestFormGroup() {
		return new FormGroup<ClaimPhoneNumberRequestFormProperties>({
			TargetArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PhoneNumber: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PhoneNumberDescription: new FormControl<string | null | undefined>(undefined),
			ClientToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ContactFlowModuleState { ACTIVE = 0, ARCHIVED = 1 }

	export interface CreateAgentStatusRequest {

		/** Required */
		Name: string;
		Description?: string;

		/** Required */
		State: EvaluationFormScoringStatus;
		DisplayOrder?: number | null;
		Tags?: TagMap;
	}
	export interface CreateAgentStatusRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,

		/** Required */
		State: FormControl<EvaluationFormScoringStatus | null | undefined>,
		DisplayOrder: FormControl<number | null | undefined>,
	}
	export function CreateCreateAgentStatusRequestFormGroup() {
		return new FormGroup<CreateAgentStatusRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<EvaluationFormScoringStatus | null | undefined>(undefined, [Validators.required]),
			DisplayOrder: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CreateContactFlowModuleRequest {

		/** Required */
		Name: string;
		Description?: string;

		/** Required */
		Content: string;
		Tags?: TagMap;
		ClientToken?: string;
	}
	export interface CreateContactFlowModuleRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,

		/** Required */
		Content: FormControl<string | null | undefined>,
		ClientToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateContactFlowModuleRequestFormGroup() {
		return new FormGroup<CreateContactFlowModuleRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
			Content: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ClientToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateContactFlowRequest {

		/** Required */
		Name: string;

		/** Required */
		Type: ContactFlowType;
		Description?: string;

		/** Required */
		Content: string;
		Tags?: TagMap;
	}
	export interface CreateContactFlowRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		Type: FormControl<ContactFlowType | null | undefined>,
		Description: FormControl<string | null | undefined>,

		/** Required */
		Content: FormControl<string | null | undefined>,
	}
	export function CreateCreateContactFlowRequestFormGroup() {
		return new FormGroup<CreateContactFlowRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Type: new FormControl<ContactFlowType | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
			Content: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateEvaluationFormRequest {

		/** Required */
		Title: string;
		Description?: string;

		/** Required */
		Items: Array<EvaluationFormItem>;
		ScoringStrategy?: EvaluationFormScoringStrategy;
		ClientToken?: string;
	}
	export interface CreateEvaluationFormRequestFormProperties {

		/** Required */
		Title: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		ClientToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateEvaluationFormRequestFormGroup() {
		return new FormGroup<CreateEvaluationFormRequestFormProperties>({
			Title: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
			ClientToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateHoursOfOperationRequest {

		/** Required */
		Name: string;
		Description?: string;

		/** Required */
		TimeZone: string;

		/** Required */
		Config: Array<HoursOfOperationConfig>;
		Tags?: TagMap;
	}
	export interface CreateHoursOfOperationRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,

		/** Required */
		TimeZone: FormControl<string | null | undefined>,
	}
	export function CreateCreateHoursOfOperationRequestFormGroup() {
		return new FormGroup<CreateHoursOfOperationRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
			TimeZone: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateInstanceRequest {
		ClientToken?: string;

		/** Required */
		IdentityManagementType: DirectoryType;
		InstanceAlias?: string;
		DirectoryId?: string;

		/** Required */
		InboundCallsEnabled: boolean;

		/** Required */
		OutboundCallsEnabled: boolean;
	}
	export interface CreateInstanceRequestFormProperties {
		ClientToken: FormControl<string | null | undefined>,

		/** Required */
		IdentityManagementType: FormControl<DirectoryType | null | undefined>,
		InstanceAlias: FormControl<string | null | undefined>,
		DirectoryId: FormControl<string | null | undefined>,

		/** Required */
		InboundCallsEnabled: FormControl<boolean | null | undefined>,

		/** Required */
		OutboundCallsEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateInstanceRequestFormGroup() {
		return new FormGroup<CreateInstanceRequestFormProperties>({
			ClientToken: new FormControl<string | null | undefined>(undefined),
			IdentityManagementType: new FormControl<DirectoryType | null | undefined>(undefined, [Validators.required]),
			InstanceAlias: new FormControl<string | null | undefined>(undefined),
			DirectoryId: new FormControl<string | null | undefined>(undefined),
			InboundCallsEnabled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			OutboundCallsEnabled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateIntegrationAssociationRequest {

		/** Required */
		IntegrationType: IntegrationType;

		/** Required */
		IntegrationArn: string;
		SourceApplicationUrl?: string;
		SourceApplicationName?: string;
		SourceType?: SourceType;
		Tags?: TagMap;
	}
	export interface CreateIntegrationAssociationRequestFormProperties {

		/** Required */
		IntegrationType: FormControl<IntegrationType | null | undefined>,

		/** Required */
		IntegrationArn: FormControl<string | null | undefined>,
		SourceApplicationUrl: FormControl<string | null | undefined>,
		SourceApplicationName: FormControl<string | null | undefined>,
		SourceType: FormControl<SourceType | null | undefined>,
	}
	export function CreateCreateIntegrationAssociationRequestFormGroup() {
		return new FormGroup<CreateIntegrationAssociationRequestFormProperties>({
			IntegrationType: new FormControl<IntegrationType | null | undefined>(undefined, [Validators.required]),
			IntegrationArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SourceApplicationUrl: new FormControl<string | null | undefined>(undefined),
			SourceApplicationName: new FormControl<string | null | undefined>(undefined),
			SourceType: new FormControl<SourceType | null | undefined>(undefined),
		});

	}


	/** The details to add for the participant. */
	export interface ParticipantDetailsToAdd {
		ParticipantRole?: ParticipantRole;
		DisplayName?: string;
	}

	/** The details to add for the participant. */
	export interface ParticipantDetailsToAddFormProperties {
		ParticipantRole: FormControl<ParticipantRole | null | undefined>,
		DisplayName: FormControl<string | null | undefined>,
	}
	export function CreateParticipantDetailsToAddFormGroup() {
		return new FormGroup<ParticipantDetailsToAddFormProperties>({
			ParticipantRole: new FormControl<ParticipantRole | null | undefined>(undefined),
			DisplayName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateParticipantRequest {

		/** Required */
		InstanceId: string;

		/** Required */
		ContactId: string;
		ClientToken?: string;

		/** Required */
		ParticipantDetails: ParticipantDetailsToAdd;
	}
	export interface CreateParticipantRequestFormProperties {

		/** Required */
		InstanceId: FormControl<string | null | undefined>,

		/** Required */
		ContactId: FormControl<string | null | undefined>,
		ClientToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateParticipantRequestFormGroup() {
		return new FormGroup<CreateParticipantRequestFormProperties>({
			InstanceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ContactId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ClientToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreatePromptRequest {

		/** Required */
		Name: string;
		Description?: string;

		/** Required */
		S3Uri: string;
		Tags?: TagMap;
	}
	export interface CreatePromptRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,

		/** Required */
		S3Uri: FormControl<string | null | undefined>,
	}
	export function CreateCreatePromptRequestFormGroup() {
		return new FormGroup<CreatePromptRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
			S3Uri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateQueueRequest {

		/** Required */
		Name: string;
		Description?: string;
		OutboundCallerConfig?: OutboundCallerConfig;

		/** Required */
		HoursOfOperationId: string;
		MaxContacts?: number | null;
		QuickConnectIds?: Array<string>;
		Tags?: TagMap;
	}
	export interface CreateQueueRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,

		/** Required */
		HoursOfOperationId: FormControl<string | null | undefined>,
		MaxContacts: FormControl<number | null | undefined>,
	}
	export function CreateCreateQueueRequestFormGroup() {
		return new FormGroup<CreateQueueRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
			HoursOfOperationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MaxContacts: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CreateQuickConnectRequest {

		/** Required */
		Name: string;
		Description?: string;

		/** Required */
		QuickConnectConfig: QuickConnectConfig;
		Tags?: TagMap;
	}
	export interface CreateQuickConnectRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
	}
	export function CreateCreateQuickConnectRequestFormGroup() {
		return new FormGroup<CreateQuickConnectRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateRoutingProfileRequest {

		/** Required */
		Name: string;

		/** Required */
		Description: string;

		/** Required */
		DefaultOutboundQueueId: string;
		QueueConfigs?: Array<RoutingProfileQueueConfig>;

		/** Required */
		MediaConcurrencies: Array<MediaConcurrency>;
		Tags?: TagMap;
		AgentAvailabilityTimer?: AgentAvailabilityTimer;
	}
	export interface CreateRoutingProfileRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		Description: FormControl<string | null | undefined>,

		/** Required */
		DefaultOutboundQueueId: FormControl<string | null | undefined>,
		AgentAvailabilityTimer: FormControl<AgentAvailabilityTimer | null | undefined>,
	}
	export function CreateCreateRoutingProfileRequestFormGroup() {
		return new FormGroup<CreateRoutingProfileRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DefaultOutboundQueueId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			AgentAvailabilityTimer: new FormControl<AgentAvailabilityTimer | null | undefined>(undefined),
		});

	}

	export interface CreateRuleRequest {

		/** Required */
		Name: string;

		/** Required */
		TriggerEventSource: RuleTriggerEventSource;

		/** Required */
		Function: string;

		/** Required */
		Actions: Array<RuleAction>;

		/** Required */
		PublishStatus: RulePublishStatus;
		ClientToken?: string;
	}
	export interface CreateRuleRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		Function: FormControl<string | null | undefined>,

		/** Required */
		PublishStatus: FormControl<RulePublishStatus | null | undefined>,
		ClientToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateRuleRequestFormGroup() {
		return new FormGroup<CreateRuleRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Function: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PublishStatus: new FormControl<RulePublishStatus | null | undefined>(undefined, [Validators.required]),
			ClientToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateSecurityProfileRequest {

		/** Required */
		SecurityProfileName: string;
		Description?: string;
		Permissions?: Array<string>;
		Tags?: TagMap;
		AllowedAccessControlTags?: AllowedAccessControlTags;
		TagRestrictedResources?: Array<string>;
	}
	export interface CreateSecurityProfileRequestFormProperties {

		/** Required */
		SecurityProfileName: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
	}
	export function CreateCreateSecurityProfileRequestFormGroup() {
		return new FormGroup<CreateSecurityProfileRequestFormProperties>({
			SecurityProfileName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateTaskTemplateRequest {

		/** Required */
		Name: string;
		Description?: string;
		ContactFlowId?: string;
		Constraints?: TaskTemplateConstraints;
		Defaults?: TaskTemplateDefaults;
		Status?: TaskTemplateStatus;

		/** Required */
		Fields: Array<TaskTemplateField>;
		ClientToken?: string;
	}
	export interface CreateTaskTemplateRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		ContactFlowId: FormControl<string | null | undefined>,
		Status: FormControl<TaskTemplateStatus | null | undefined>,
		ClientToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateTaskTemplateRequestFormGroup() {
		return new FormGroup<CreateTaskTemplateRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
			ContactFlowId: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<TaskTemplateStatus | null | undefined>(undefined),
			ClientToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateTrafficDistributionGroupRequest {

		/** Required */
		Name: string;
		Description?: string;

		/** Required */
		InstanceId: string;
		ClientToken?: string;
		Tags?: TagMap;
	}
	export interface CreateTrafficDistributionGroupRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,

		/** Required */
		InstanceId: FormControl<string | null | undefined>,
		ClientToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateTrafficDistributionGroupRequestFormGroup() {
		return new FormGroup<CreateTrafficDistributionGroupRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
			InstanceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ClientToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateUseCaseRequest {

		/** Required */
		UseCaseType: UseCaseType;
		Tags?: TagMap;
	}
	export interface CreateUseCaseRequestFormProperties {

		/** Required */
		UseCaseType: FormControl<UseCaseType | null | undefined>,
	}
	export function CreateCreateUseCaseRequestFormGroup() {
		return new FormGroup<CreateUseCaseRequestFormProperties>({
			UseCaseType: new FormControl<UseCaseType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateUserHierarchyGroupRequest {

		/** Required */
		Name: string;
		ParentGroupId?: string;
		Tags?: TagMap;
	}
	export interface CreateUserHierarchyGroupRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
		ParentGroupId: FormControl<string | null | undefined>,
	}
	export function CreateCreateUserHierarchyGroupRequestFormGroup() {
		return new FormGroup<CreateUserHierarchyGroupRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ParentGroupId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateUserRequest {

		/** Required */
		Username: string;
		Password?: string;
		IdentityInfo?: UserIdentityInfo;

		/** Required */
		PhoneConfig: UserPhoneConfig;
		DirectoryUserId?: string;

		/** Required */
		SecurityProfileIds: Array<string>;

		/** Required */
		RoutingProfileId: string;
		HierarchyGroupId?: string;
		Tags?: TagMap;
	}
	export interface CreateUserRequestFormProperties {

		/** Required */
		Username: FormControl<string | null | undefined>,
		Password: FormControl<string | null | undefined>,
		DirectoryUserId: FormControl<string | null | undefined>,

		/** Required */
		RoutingProfileId: FormControl<string | null | undefined>,
		HierarchyGroupId: FormControl<string | null | undefined>,
	}
	export function CreateCreateUserRequestFormGroup() {
		return new FormGroup<CreateUserRequestFormProperties>({
			Username: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Password: new FormControl<string | null | undefined>(undefined),
			DirectoryUserId: new FormControl<string | null | undefined>(undefined),
			RoutingProfileId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			HierarchyGroupId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateVocabularyRequest {
		ClientToken?: string;

		/** Required */
		VocabularyName: string;

		/** Required */
		LanguageCode: VocabularyLanguageCode;

		/** Required */
		Content: string;
		Tags?: TagMap;
	}
	export interface CreateVocabularyRequestFormProperties {
		ClientToken: FormControl<string | null | undefined>,

		/** Required */
		VocabularyName: FormControl<string | null | undefined>,

		/** Required */
		LanguageCode: FormControl<VocabularyLanguageCode | null | undefined>,

		/** Required */
		Content: FormControl<string | null | undefined>,
	}
	export function CreateCreateVocabularyRequestFormGroup() {
		return new FormGroup<CreateVocabularyRequestFormProperties>({
			ClientToken: new FormControl<string | null | undefined>(undefined),
			VocabularyName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			LanguageCode: new FormControl<VocabularyLanguageCode | null | undefined>(undefined, [Validators.required]),
			Content: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeactivateEvaluationFormRequest {

		/** Required */
		EvaluationFormVersion: number;
	}
	export interface DeactivateEvaluationFormRequestFormProperties {

		/** Required */
		EvaluationFormVersion: FormControl<number | null | undefined>,
	}
	export function CreateDeactivateEvaluationFormRequestFormGroup() {
		return new FormGroup<DeactivateEvaluationFormRequestFormProperties>({
			EvaluationFormVersion: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteContactEvaluationRequest {
	}
	export interface DeleteContactEvaluationRequestFormProperties {
	}
	export function CreateDeleteContactEvaluationRequestFormGroup() {
		return new FormGroup<DeleteContactEvaluationRequestFormProperties>({
		});

	}

	export interface DeleteContactFlowModuleRequest {
	}
	export interface DeleteContactFlowModuleRequestFormProperties {
	}
	export function CreateDeleteContactFlowModuleRequestFormGroup() {
		return new FormGroup<DeleteContactFlowModuleRequestFormProperties>({
		});

	}

	export interface DeleteContactFlowRequest {
	}
	export interface DeleteContactFlowRequestFormProperties {
	}
	export function CreateDeleteContactFlowRequestFormGroup() {
		return new FormGroup<DeleteContactFlowRequestFormProperties>({
		});

	}

	export interface DeleteEvaluationFormRequest {
	}
	export interface DeleteEvaluationFormRequestFormProperties {
	}
	export function CreateDeleteEvaluationFormRequestFormGroup() {
		return new FormGroup<DeleteEvaluationFormRequestFormProperties>({
		});

	}

	export interface DeleteHoursOfOperationRequest {
	}
	export interface DeleteHoursOfOperationRequestFormProperties {
	}
	export function CreateDeleteHoursOfOperationRequestFormGroup() {
		return new FormGroup<DeleteHoursOfOperationRequestFormProperties>({
		});

	}

	export interface DeleteInstanceRequest {
	}
	export interface DeleteInstanceRequestFormProperties {
	}
	export function CreateDeleteInstanceRequestFormGroup() {
		return new FormGroup<DeleteInstanceRequestFormProperties>({
		});

	}

	export interface DeleteIntegrationAssociationRequest {
	}
	export interface DeleteIntegrationAssociationRequestFormProperties {
	}
	export function CreateDeleteIntegrationAssociationRequestFormGroup() {
		return new FormGroup<DeleteIntegrationAssociationRequestFormProperties>({
		});

	}

	export interface DeletePromptRequest {
	}
	export interface DeletePromptRequestFormProperties {
	}
	export function CreateDeletePromptRequestFormGroup() {
		return new FormGroup<DeletePromptRequestFormProperties>({
		});

	}

	export interface DeleteQueueRequest {
	}
	export interface DeleteQueueRequestFormProperties {
	}
	export function CreateDeleteQueueRequestFormGroup() {
		return new FormGroup<DeleteQueueRequestFormProperties>({
		});

	}

	export interface DeleteQuickConnectRequest {
	}
	export interface DeleteQuickConnectRequestFormProperties {
	}
	export function CreateDeleteQuickConnectRequestFormGroup() {
		return new FormGroup<DeleteQuickConnectRequestFormProperties>({
		});

	}

	export interface DeleteRoutingProfileRequest {
	}
	export interface DeleteRoutingProfileRequestFormProperties {
	}
	export function CreateDeleteRoutingProfileRequestFormGroup() {
		return new FormGroup<DeleteRoutingProfileRequestFormProperties>({
		});

	}

	export interface DeleteRuleRequest {
	}
	export interface DeleteRuleRequestFormProperties {
	}
	export function CreateDeleteRuleRequestFormGroup() {
		return new FormGroup<DeleteRuleRequestFormProperties>({
		});

	}

	export interface DeleteSecurityProfileRequest {
	}
	export interface DeleteSecurityProfileRequestFormProperties {
	}
	export function CreateDeleteSecurityProfileRequestFormGroup() {
		return new FormGroup<DeleteSecurityProfileRequestFormProperties>({
		});

	}

	export interface DeleteTaskTemplateRequest {
	}
	export interface DeleteTaskTemplateRequestFormProperties {
	}
	export function CreateDeleteTaskTemplateRequestFormGroup() {
		return new FormGroup<DeleteTaskTemplateRequestFormProperties>({
		});

	}

	export interface DeleteTrafficDistributionGroupRequest {
	}
	export interface DeleteTrafficDistributionGroupRequestFormProperties {
	}
	export function CreateDeleteTrafficDistributionGroupRequestFormGroup() {
		return new FormGroup<DeleteTrafficDistributionGroupRequestFormProperties>({
		});

	}

	export interface DeleteUseCaseRequest {
	}
	export interface DeleteUseCaseRequestFormProperties {
	}
	export function CreateDeleteUseCaseRequestFormGroup() {
		return new FormGroup<DeleteUseCaseRequestFormProperties>({
		});

	}

	export interface DeleteUserHierarchyGroupRequest {
	}
	export interface DeleteUserHierarchyGroupRequestFormProperties {
	}
	export function CreateDeleteUserHierarchyGroupRequestFormGroup() {
		return new FormGroup<DeleteUserHierarchyGroupRequestFormProperties>({
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

	export interface DeleteVocabularyRequest {
	}
	export interface DeleteVocabularyRequestFormProperties {
	}
	export function CreateDeleteVocabularyRequestFormGroup() {
		return new FormGroup<DeleteVocabularyRequestFormProperties>({
		});

	}

	export interface DescribeAgentStatusRequest {
	}
	export interface DescribeAgentStatusRequestFormProperties {
	}
	export function CreateDescribeAgentStatusRequestFormGroup() {
		return new FormGroup<DescribeAgentStatusRequestFormProperties>({
		});

	}

	export interface DescribeContactEvaluationRequest {
	}
	export interface DescribeContactEvaluationRequestFormProperties {
	}
	export function CreateDescribeContactEvaluationRequestFormGroup() {
		return new FormGroup<DescribeContactEvaluationRequestFormProperties>({
		});

	}

	export interface DescribeContactFlowModuleRequest {
	}
	export interface DescribeContactFlowModuleRequestFormProperties {
	}
	export function CreateDescribeContactFlowModuleRequestFormGroup() {
		return new FormGroup<DescribeContactFlowModuleRequestFormProperties>({
		});

	}

	export interface DescribeContactFlowRequest {
	}
	export interface DescribeContactFlowRequestFormProperties {
	}
	export function CreateDescribeContactFlowRequestFormGroup() {
		return new FormGroup<DescribeContactFlowRequestFormProperties>({
		});

	}

	export interface DescribeContactRequest {
	}
	export interface DescribeContactRequestFormProperties {
	}
	export function CreateDescribeContactRequestFormGroup() {
		return new FormGroup<DescribeContactRequestFormProperties>({
		});

	}

	export interface DescribeEvaluationFormRequest {
	}
	export interface DescribeEvaluationFormRequestFormProperties {
	}
	export function CreateDescribeEvaluationFormRequestFormGroup() {
		return new FormGroup<DescribeEvaluationFormRequestFormProperties>({
		});

	}

	export interface DescribeHoursOfOperationRequest {
	}
	export interface DescribeHoursOfOperationRequestFormProperties {
	}
	export function CreateDescribeHoursOfOperationRequestFormGroup() {
		return new FormGroup<DescribeHoursOfOperationRequestFormProperties>({
		});

	}

	export interface DescribeInstanceAttributeRequest {
	}
	export interface DescribeInstanceAttributeRequestFormProperties {
	}
	export function CreateDescribeInstanceAttributeRequestFormGroup() {
		return new FormGroup<DescribeInstanceAttributeRequestFormProperties>({
		});

	}

	export interface DescribeInstanceRequest {
	}
	export interface DescribeInstanceRequestFormProperties {
	}
	export function CreateDescribeInstanceRequestFormGroup() {
		return new FormGroup<DescribeInstanceRequestFormProperties>({
		});

	}

	export interface DescribeInstanceStorageConfigRequest {
	}
	export interface DescribeInstanceStorageConfigRequestFormProperties {
	}
	export function CreateDescribeInstanceStorageConfigRequestFormGroup() {
		return new FormGroup<DescribeInstanceStorageConfigRequestFormProperties>({
		});

	}

	export interface DescribePhoneNumberRequest {
	}
	export interface DescribePhoneNumberRequestFormProperties {
	}
	export function CreateDescribePhoneNumberRequestFormGroup() {
		return new FormGroup<DescribePhoneNumberRequestFormProperties>({
		});

	}

	export interface DescribePromptRequest {
	}
	export interface DescribePromptRequestFormProperties {
	}
	export function CreateDescribePromptRequestFormGroup() {
		return new FormGroup<DescribePromptRequestFormProperties>({
		});

	}

	export interface DescribeQueueRequest {
	}
	export interface DescribeQueueRequestFormProperties {
	}
	export function CreateDescribeQueueRequestFormGroup() {
		return new FormGroup<DescribeQueueRequestFormProperties>({
		});

	}

	export interface DescribeQuickConnectRequest {
	}
	export interface DescribeQuickConnectRequestFormProperties {
	}
	export function CreateDescribeQuickConnectRequestFormGroup() {
		return new FormGroup<DescribeQuickConnectRequestFormProperties>({
		});

	}

	export interface DescribeRoutingProfileRequest {
	}
	export interface DescribeRoutingProfileRequestFormProperties {
	}
	export function CreateDescribeRoutingProfileRequestFormGroup() {
		return new FormGroup<DescribeRoutingProfileRequestFormProperties>({
		});

	}

	export interface DescribeRuleRequest {
	}
	export interface DescribeRuleRequestFormProperties {
	}
	export function CreateDescribeRuleRequestFormGroup() {
		return new FormGroup<DescribeRuleRequestFormProperties>({
		});

	}

	export interface DescribeSecurityProfileRequest {
	}
	export interface DescribeSecurityProfileRequestFormProperties {
	}
	export function CreateDescribeSecurityProfileRequestFormGroup() {
		return new FormGroup<DescribeSecurityProfileRequestFormProperties>({
		});

	}

	export interface DescribeTrafficDistributionGroupRequest {
	}
	export interface DescribeTrafficDistributionGroupRequestFormProperties {
	}
	export function CreateDescribeTrafficDistributionGroupRequestFormGroup() {
		return new FormGroup<DescribeTrafficDistributionGroupRequestFormProperties>({
		});

	}

	export interface DescribeUserHierarchyGroupRequest {
	}
	export interface DescribeUserHierarchyGroupRequestFormProperties {
	}
	export function CreateDescribeUserHierarchyGroupRequestFormGroup() {
		return new FormGroup<DescribeUserHierarchyGroupRequestFormProperties>({
		});

	}

	export interface DescribeUserHierarchyStructureRequest {
	}
	export interface DescribeUserHierarchyStructureRequestFormProperties {
	}
	export function CreateDescribeUserHierarchyStructureRequestFormGroup() {
		return new FormGroup<DescribeUserHierarchyStructureRequestFormProperties>({
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

	export interface DescribeVocabularyRequest {
	}
	export interface DescribeVocabularyRequestFormProperties {
	}
	export function CreateDescribeVocabularyRequestFormGroup() {
		return new FormGroup<DescribeVocabularyRequestFormProperties>({
		});

	}

	export interface DisassociateApprovedOriginRequest {
	}
	export interface DisassociateApprovedOriginRequestFormProperties {
	}
	export function CreateDisassociateApprovedOriginRequestFormGroup() {
		return new FormGroup<DisassociateApprovedOriginRequestFormProperties>({
		});

	}

	export interface DisassociateBotRequest {

		/** Configuration information of an Amazon Lex bot. */
		LexBot?: LexBot;
		LexV2Bot?: LexV2Bot;
	}
	export interface DisassociateBotRequestFormProperties {
	}
	export function CreateDisassociateBotRequestFormGroup() {
		return new FormGroup<DisassociateBotRequestFormProperties>({
		});

	}

	export interface DisassociateInstanceStorageConfigRequest {
	}
	export interface DisassociateInstanceStorageConfigRequestFormProperties {
	}
	export function CreateDisassociateInstanceStorageConfigRequestFormGroup() {
		return new FormGroup<DisassociateInstanceStorageConfigRequestFormProperties>({
		});

	}

	export interface DisassociateLambdaFunctionRequest {
	}
	export interface DisassociateLambdaFunctionRequestFormProperties {
	}
	export function CreateDisassociateLambdaFunctionRequestFormGroup() {
		return new FormGroup<DisassociateLambdaFunctionRequestFormProperties>({
		});

	}

	export interface DisassociateLexBotRequest {
	}
	export interface DisassociateLexBotRequestFormProperties {
	}
	export function CreateDisassociateLexBotRequestFormGroup() {
		return new FormGroup<DisassociateLexBotRequestFormProperties>({
		});

	}

	export interface DisassociatePhoneNumberContactFlowRequest {
	}
	export interface DisassociatePhoneNumberContactFlowRequestFormProperties {
	}
	export function CreateDisassociatePhoneNumberContactFlowRequestFormGroup() {
		return new FormGroup<DisassociatePhoneNumberContactFlowRequestFormProperties>({
		});

	}

	export interface DisassociateQueueQuickConnectsRequest {

		/** Required */
		QuickConnectIds: Array<string>;
	}
	export interface DisassociateQueueQuickConnectsRequestFormProperties {
	}
	export function CreateDisassociateQueueQuickConnectsRequestFormGroup() {
		return new FormGroup<DisassociateQueueQuickConnectsRequestFormProperties>({
		});

	}

	export interface DisassociateRoutingProfileQueuesRequest {

		/** Required */
		QueueReferences: Array<RoutingProfileQueueReference>;
	}
	export interface DisassociateRoutingProfileQueuesRequestFormProperties {
	}
	export function CreateDisassociateRoutingProfileQueuesRequestFormGroup() {
		return new FormGroup<DisassociateRoutingProfileQueuesRequestFormProperties>({
		});

	}

	export interface DisassociateSecurityKeyRequest {
	}
	export interface DisassociateSecurityKeyRequestFormProperties {
	}
	export function CreateDisassociateSecurityKeyRequestFormGroup() {
		return new FormGroup<DisassociateSecurityKeyRequestFormProperties>({
		});

	}

	export interface DismissUserContactRequest {

		/** Required */
		ContactId: string;
	}
	export interface DismissUserContactRequestFormProperties {

		/** Required */
		ContactId: FormControl<string | null | undefined>,
	}
	export function CreateDismissUserContactRequestFormGroup() {
		return new FormGroup<DismissUserContactRequestFormProperties>({
			ContactId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Information about output answers for a contact evaluation. */
	export interface EvaluationAnswerOutput {
		Value?: EvaluationAnswerData;
		SystemSuggestedValue?: EvaluationAnswerData;
	}

	/** Information about output answers for a contact evaluation. */
	export interface EvaluationAnswerOutputFormProperties {
	}
	export function CreateEvaluationAnswerOutputFormGroup() {
		return new FormGroup<EvaluationAnswerOutputFormProperties>({
		});

	}

	export interface EvaluationAnswersInputMap {
	}
	export interface EvaluationAnswersInputMapFormProperties {
	}
	export function CreateEvaluationAnswersInputMapFormGroup() {
		return new FormGroup<EvaluationAnswersInputMapFormProperties>({
		});

	}


	/** Contains the filter to apply when retrieving metrics. */
	export interface Filters {
		Queues?: Array<string>;
		Channels?: Array<Channel>;
		RoutingProfiles?: Array<string>;
	}

	/** Contains the filter to apply when retrieving metrics. */
	export interface FiltersFormProperties {
	}
	export function CreateFiltersFormGroup() {
		return new FormGroup<FiltersFormProperties>({
		});

	}

	export interface GetContactAttributesRequest {
	}
	export interface GetContactAttributesRequestFormProperties {
	}
	export function CreateGetContactAttributesRequestFormGroup() {
		return new FormGroup<GetContactAttributesRequestFormProperties>({
		});

	}

	export interface GetCurrentMetricDataRequest {

		/** Required */
		Filters: Filters;
		Groupings?: Array<Grouping>;

		/** Required */
		CurrentMetrics: Array<CurrentMetric>;
		NextToken?: string;
		MaxResults?: number | null;
		SortCriteria?: Array<CurrentMetricSortCriteria>;
	}
	export interface GetCurrentMetricDataRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateGetCurrentMetricDataRequestFormGroup() {
		return new FormGroup<GetCurrentMetricDataRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A filter for the user data. */
	export interface UserDataFilters {
		Queues?: Array<string>;
		ContactFilter?: ContactFilter;
		RoutingProfiles?: Array<string>;
		Agents?: Array<string>;
		UserHierarchyGroups?: Array<string>;
	}

	/** A filter for the user data. */
	export interface UserDataFiltersFormProperties {
	}
	export function CreateUserDataFiltersFormGroup() {
		return new FormGroup<UserDataFiltersFormProperties>({
		});

	}

	export interface GetCurrentUserDataRequest {

		/** Required */
		Filters: UserDataFilters;
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface GetCurrentUserDataRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateGetCurrentUserDataRequestFormGroup() {
		return new FormGroup<GetCurrentUserDataRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetFederationTokenRequest {
	}
	export interface GetFederationTokenRequestFormProperties {
	}
	export function CreateGetFederationTokenRequestFormGroup() {
		return new FormGroup<GetFederationTokenRequestFormProperties>({
		});

	}

	export interface GetMetricDataRequest {

		/** Required */
		StartTime: Date;

		/** Required */
		EndTime: Date;

		/** Required */
		Filters: Filters;
		Groupings?: Array<Grouping>;

		/** Required */
		HistoricalMetrics: Array<HistoricalMetric>;
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface GetMetricDataRequestFormProperties {

		/** Required */
		StartTime: FormControl<Date | null | undefined>,

		/** Required */
		EndTime: FormControl<Date | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateGetMetricDataRequestFormGroup() {
		return new FormGroup<GetMetricDataRequestFormProperties>({
			StartTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			EndTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetMetricDataV2Request {

		/** Required */
		ResourceArn: string;

		/** Required */
		StartTime: Date;

		/** Required */
		EndTime: Date;

		/** Required */
		Filters: Array<FilterV2>;
		Groupings?: Array<string>;

		/** Required */
		Metrics: Array<MetricV2>;
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface GetMetricDataV2RequestFormProperties {

		/** Required */
		ResourceArn: FormControl<string | null | undefined>,

		/** Required */
		StartTime: FormControl<Date | null | undefined>,

		/** Required */
		EndTime: FormControl<Date | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateGetMetricDataV2RequestFormGroup() {
		return new FormGroup<GetMetricDataV2RequestFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			StartTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			EndTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetPromptFileRequest {
	}
	export interface GetPromptFileRequestFormProperties {
	}
	export function CreateGetPromptFileRequestFormGroup() {
		return new FormGroup<GetPromptFileRequestFormProperties>({
		});

	}

	export interface GetTaskTemplateRequest {
	}
	export interface GetTaskTemplateRequestFormProperties {
	}
	export function CreateGetTaskTemplateRequestFormGroup() {
		return new FormGroup<GetTaskTemplateRequestFormProperties>({
		});

	}

	export interface GetTrafficDistributionRequest {
	}
	export interface GetTrafficDistributionRequestFormProperties {
	}
	export function CreateGetTrafficDistributionRequestFormGroup() {
		return new FormGroup<GetTrafficDistributionRequestFormProperties>({
		});

	}


	/** Contains information about the level hierarchy to update. */
	export interface HierarchyStructureUpdate {
		LevelOne?: HierarchyLevelUpdate;
		LevelTwo?: HierarchyLevelUpdate;
		LevelThree?: HierarchyLevelUpdate;
		LevelFour?: HierarchyLevelUpdate;
		LevelFive?: HierarchyLevelUpdate;
	}

	/** Contains information about the level hierarchy to update. */
	export interface HierarchyStructureUpdateFormProperties {
	}
	export function CreateHierarchyStructureUpdateFormGroup() {
		return new FormGroup<HierarchyStructureUpdateFormProperties>({
		});

	}


	/** Filters to be applied to search results. */
	export interface HoursOfOperationSearchFilter {

		/** <p>An object that can be used to specify Tag conditions inside the <code>SearchFilter</code>. This accepts an <code>OR</code> of <code>AND</code> (List of List) input where: </p> <ul> <li> <p>Top level list specifies conditions that need to be applied with <code>OR</code> operator</p> </li> <li> <p>Inner list specifies conditions that need to be applied with <code>AND</code> operator.</p> </li> </ul> */
		TagFilter?: ControlPlaneTagFilter;
	}

	/** Filters to be applied to search results. */
	export interface HoursOfOperationSearchFilterFormProperties {
	}
	export function CreateHoursOfOperationSearchFilterFormGroup() {
		return new FormGroup<HoursOfOperationSearchFilterFormProperties>({
		});

	}

	export enum LexVersion { V1 = 0, V2 = 1 }

	export interface ListAgentStatusRequest {
	}
	export interface ListAgentStatusRequestFormProperties {
	}
	export function CreateListAgentStatusRequestFormGroup() {
		return new FormGroup<ListAgentStatusRequestFormProperties>({
		});

	}

	export interface ListApprovedOriginsRequest {
	}
	export interface ListApprovedOriginsRequestFormProperties {
	}
	export function CreateListApprovedOriginsRequestFormGroup() {
		return new FormGroup<ListApprovedOriginsRequestFormProperties>({
		});

	}

	export interface ListBotsRequest {
	}
	export interface ListBotsRequestFormProperties {
	}
	export function CreateListBotsRequestFormGroup() {
		return new FormGroup<ListBotsRequestFormProperties>({
		});

	}

	export interface ListContactEvaluationsRequest {
	}
	export interface ListContactEvaluationsRequestFormProperties {
	}
	export function CreateListContactEvaluationsRequestFormGroup() {
		return new FormGroup<ListContactEvaluationsRequestFormProperties>({
		});

	}

	export interface ListContactFlowModulesRequest {
	}
	export interface ListContactFlowModulesRequestFormProperties {
	}
	export function CreateListContactFlowModulesRequestFormGroup() {
		return new FormGroup<ListContactFlowModulesRequestFormProperties>({
		});

	}

	export interface ListContactFlowsRequest {
	}
	export interface ListContactFlowsRequestFormProperties {
	}
	export function CreateListContactFlowsRequestFormGroup() {
		return new FormGroup<ListContactFlowsRequestFormProperties>({
		});

	}

	export interface ListContactReferencesRequest {
	}
	export interface ListContactReferencesRequestFormProperties {
	}
	export function CreateListContactReferencesRequestFormGroup() {
		return new FormGroup<ListContactReferencesRequestFormProperties>({
		});

	}

	export interface ListDefaultVocabulariesRequest {
		LanguageCode?: VocabularyLanguageCode;
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface ListDefaultVocabulariesRequestFormProperties {
		LanguageCode: FormControl<VocabularyLanguageCode | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListDefaultVocabulariesRequestFormGroup() {
		return new FormGroup<ListDefaultVocabulariesRequestFormProperties>({
			LanguageCode: new FormControl<VocabularyLanguageCode | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListEvaluationFormVersionsRequest {
	}
	export interface ListEvaluationFormVersionsRequestFormProperties {
	}
	export function CreateListEvaluationFormVersionsRequestFormGroup() {
		return new FormGroup<ListEvaluationFormVersionsRequestFormProperties>({
		});

	}

	export interface ListEvaluationFormsRequest {
	}
	export interface ListEvaluationFormsRequestFormProperties {
	}
	export function CreateListEvaluationFormsRequestFormGroup() {
		return new FormGroup<ListEvaluationFormsRequestFormProperties>({
		});

	}

	export interface ListHoursOfOperationsRequest {
	}
	export interface ListHoursOfOperationsRequestFormProperties {
	}
	export function CreateListHoursOfOperationsRequestFormGroup() {
		return new FormGroup<ListHoursOfOperationsRequestFormProperties>({
		});

	}

	export interface ListInstanceAttributesRequest {
	}
	export interface ListInstanceAttributesRequestFormProperties {
	}
	export function CreateListInstanceAttributesRequestFormGroup() {
		return new FormGroup<ListInstanceAttributesRequestFormProperties>({
		});

	}

	export interface ListInstanceStorageConfigsRequest {
	}
	export interface ListInstanceStorageConfigsRequestFormProperties {
	}
	export function CreateListInstanceStorageConfigsRequestFormGroup() {
		return new FormGroup<ListInstanceStorageConfigsRequestFormProperties>({
		});

	}

	export interface ListInstancesRequest {
	}
	export interface ListInstancesRequestFormProperties {
	}
	export function CreateListInstancesRequestFormGroup() {
		return new FormGroup<ListInstancesRequestFormProperties>({
		});

	}

	export interface ListIntegrationAssociationsRequest {
	}
	export interface ListIntegrationAssociationsRequestFormProperties {
	}
	export function CreateListIntegrationAssociationsRequestFormGroup() {
		return new FormGroup<ListIntegrationAssociationsRequestFormProperties>({
		});

	}

	export interface ListLambdaFunctionsRequest {
	}
	export interface ListLambdaFunctionsRequestFormProperties {
	}
	export function CreateListLambdaFunctionsRequestFormGroup() {
		return new FormGroup<ListLambdaFunctionsRequestFormProperties>({
		});

	}

	export interface ListLexBotsRequest {
	}
	export interface ListLexBotsRequestFormProperties {
	}
	export function CreateListLexBotsRequestFormGroup() {
		return new FormGroup<ListLexBotsRequestFormProperties>({
		});

	}

	export interface ListPhoneNumbersRequest {
	}
	export interface ListPhoneNumbersRequestFormProperties {
	}
	export function CreateListPhoneNumbersRequestFormGroup() {
		return new FormGroup<ListPhoneNumbersRequestFormProperties>({
		});

	}

	export interface ListPhoneNumbersV2Request {
		TargetArn?: string;
		MaxResults?: number | null;
		NextToken?: string;
		PhoneNumberCountryCodes?: Array<PhoneNumberCountryCode>;
		PhoneNumberTypes?: Array<PhoneNumberType>;
		PhoneNumberPrefix?: string;
	}
	export interface ListPhoneNumbersV2RequestFormProperties {
		TargetArn: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		PhoneNumberPrefix: FormControl<string | null | undefined>,
	}
	export function CreateListPhoneNumbersV2RequestFormGroup() {
		return new FormGroup<ListPhoneNumbersV2RequestFormProperties>({
			TargetArn: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			PhoneNumberPrefix: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListPromptsRequest {
	}
	export interface ListPromptsRequestFormProperties {
	}
	export function CreateListPromptsRequestFormGroup() {
		return new FormGroup<ListPromptsRequestFormProperties>({
		});

	}

	export interface ListQueueQuickConnectsRequest {
	}
	export interface ListQueueQuickConnectsRequestFormProperties {
	}
	export function CreateListQueueQuickConnectsRequestFormGroup() {
		return new FormGroup<ListQueueQuickConnectsRequestFormProperties>({
		});

	}

	export interface ListQueuesRequest {
	}
	export interface ListQueuesRequestFormProperties {
	}
	export function CreateListQueuesRequestFormGroup() {
		return new FormGroup<ListQueuesRequestFormProperties>({
		});

	}

	export interface ListQuickConnectsRequest {
	}
	export interface ListQuickConnectsRequestFormProperties {
	}
	export function CreateListQuickConnectsRequestFormGroup() {
		return new FormGroup<ListQuickConnectsRequestFormProperties>({
		});

	}

	export interface ListRoutingProfileQueuesRequest {
	}
	export interface ListRoutingProfileQueuesRequestFormProperties {
	}
	export function CreateListRoutingProfileQueuesRequestFormGroup() {
		return new FormGroup<ListRoutingProfileQueuesRequestFormProperties>({
		});

	}

	export interface ListRoutingProfilesRequest {
	}
	export interface ListRoutingProfilesRequestFormProperties {
	}
	export function CreateListRoutingProfilesRequestFormGroup() {
		return new FormGroup<ListRoutingProfilesRequestFormProperties>({
		});

	}

	export interface ListRulesRequest {
	}
	export interface ListRulesRequestFormProperties {
	}
	export function CreateListRulesRequestFormGroup() {
		return new FormGroup<ListRulesRequestFormProperties>({
		});

	}

	export interface ListSecurityKeysRequest {
	}
	export interface ListSecurityKeysRequestFormProperties {
	}
	export function CreateListSecurityKeysRequestFormGroup() {
		return new FormGroup<ListSecurityKeysRequestFormProperties>({
		});

	}

	export interface ListSecurityProfilePermissionsRequest {
	}
	export interface ListSecurityProfilePermissionsRequestFormProperties {
	}
	export function CreateListSecurityProfilePermissionsRequestFormGroup() {
		return new FormGroup<ListSecurityProfilePermissionsRequestFormProperties>({
		});

	}

	export interface ListSecurityProfilesRequest {
	}
	export interface ListSecurityProfilesRequestFormProperties {
	}
	export function CreateListSecurityProfilesRequestFormGroup() {
		return new FormGroup<ListSecurityProfilesRequestFormProperties>({
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

	export interface ListTaskTemplatesRequest {
	}
	export interface ListTaskTemplatesRequestFormProperties {
	}
	export function CreateListTaskTemplatesRequestFormGroup() {
		return new FormGroup<ListTaskTemplatesRequestFormProperties>({
		});

	}

	export interface ListTrafficDistributionGroupsRequest {
	}
	export interface ListTrafficDistributionGroupsRequestFormProperties {
	}
	export function CreateListTrafficDistributionGroupsRequestFormGroup() {
		return new FormGroup<ListTrafficDistributionGroupsRequestFormProperties>({
		});

	}


	/** Provides summary information about the use cases for the specified integration association. */
	export interface ListUseCasesRequest {
	}

	/** Provides summary information about the use cases for the specified integration association. */
	export interface ListUseCasesRequestFormProperties {
	}
	export function CreateListUseCasesRequestFormGroup() {
		return new FormGroup<ListUseCasesRequestFormProperties>({
		});

	}

	export interface ListUserHierarchyGroupsRequest {
	}
	export interface ListUserHierarchyGroupsRequestFormProperties {
	}
	export function CreateListUserHierarchyGroupsRequestFormGroup() {
		return new FormGroup<ListUserHierarchyGroupsRequestFormProperties>({
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

	export interface MonitorContactRequest {

		/** Required */
		InstanceId: string;

		/** Required */
		ContactId: string;

		/** Required */
		UserId: string;
		AllowedMonitorCapabilities?: Array<MonitorCapability>;
		ClientToken?: string;
	}
	export interface MonitorContactRequestFormProperties {

		/** Required */
		InstanceId: FormControl<string | null | undefined>,

		/** Required */
		ContactId: FormControl<string | null | undefined>,

		/** Required */
		UserId: FormControl<string | null | undefined>,
		ClientToken: FormControl<string | null | undefined>,
	}
	export function CreateMonitorContactRequestFormGroup() {
		return new FormGroup<MonitorContactRequestFormProperties>({
			InstanceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ContactId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			UserId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ClientToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The customer's details. */
	export interface ParticipantDetails {

		/** Required */
		DisplayName: string;
	}

	/** The customer's details. */
	export interface ParticipantDetailsFormProperties {

		/** Required */
		DisplayName: FormControl<string | null | undefined>,
	}
	export function CreateParticipantDetailsFormGroup() {
		return new FormGroup<ParticipantDetailsFormProperties>({
			DisplayName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Enable persistent chats. For more information about enabling persistent chat, and for example use cases and how to configure for them, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/chat-persistence.html">Enable persistent chat</a>. */
	export interface PersistentChat {
		RehydrationType?: RehydrationType;
		SourceContactId?: string;
	}

	/** Enable persistent chats. For more information about enabling persistent chat, and for example use cases and how to configure for them, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/chat-persistence.html">Enable persistent chat</a>. */
	export interface PersistentChatFormProperties {
		RehydrationType: FormControl<RehydrationType | null | undefined>,
		SourceContactId: FormControl<string | null | undefined>,
	}
	export function CreatePersistentChatFormGroup() {
		return new FormGroup<PersistentChatFormProperties>({
			RehydrationType: new FormControl<RehydrationType | null | undefined>(undefined),
			SourceContactId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Filters to be applied to search results. */
	export interface PromptSearchFilter {

		/** <p>An object that can be used to specify Tag conditions inside the <code>SearchFilter</code>. This accepts an <code>OR</code> of <code>AND</code> (List of List) input where: </p> <ul> <li> <p>Top level list specifies conditions that need to be applied with <code>OR</code> operator</p> </li> <li> <p>Inner list specifies conditions that need to be applied with <code>AND</code> operator.</p> </li> </ul> */
		TagFilter?: ControlPlaneTagFilter;
	}

	/** Filters to be applied to search results. */
	export interface PromptSearchFilterFormProperties {
	}
	export function CreatePromptSearchFilterFormGroup() {
		return new FormGroup<PromptSearchFilterFormProperties>({
		});

	}

	export interface PutUserStatusRequest {

		/** Required */
		AgentStatusId: string;
	}
	export interface PutUserStatusRequestFormProperties {

		/** Required */
		AgentStatusId: FormControl<string | null | undefined>,
	}
	export function CreatePutUserStatusRequestFormGroup() {
		return new FormGroup<PutUserStatusRequestFormProperties>({
			AgentStatusId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum QueueStatus { ENABLED = 0, DISABLED = 1 }


	/** Filters to be applied to search results. */
	export interface QueueSearchFilter {

		/** <p>An object that can be used to specify Tag conditions inside the <code>SearchFilter</code>. This accepts an <code>OR</code> of <code>AND</code> (List of List) input where: </p> <ul> <li> <p>Top level list specifies conditions that need to be applied with <code>OR</code> operator</p> </li> <li> <p>Inner list specifies conditions that need to be applied with <code>AND</code> operator.</p> </li> </ul> */
		TagFilter?: ControlPlaneTagFilter;
	}

	/** Filters to be applied to search results. */
	export interface QueueSearchFilterFormProperties {
	}
	export function CreateQueueSearchFilterFormGroup() {
		return new FormGroup<QueueSearchFilterFormProperties>({
		});

	}


	/** Filters to be applied to search results. */
	export interface QuickConnectSearchFilter {

		/** <p>An object that can be used to specify Tag conditions inside the <code>SearchFilter</code>. This accepts an <code>OR</code> of <code>AND</code> (List of List) input where: </p> <ul> <li> <p>Top level list specifies conditions that need to be applied with <code>OR</code> operator</p> </li> <li> <p>Inner list specifies conditions that need to be applied with <code>AND</code> operator.</p> </li> </ul> */
		TagFilter?: ControlPlaneTagFilter;
	}

	/** Filters to be applied to search results. */
	export interface QuickConnectSearchFilterFormProperties {
	}
	export function CreateQuickConnectSearchFilterFormGroup() {
		return new FormGroup<QuickConnectSearchFilterFormProperties>({
		});

	}

	export interface ReleasePhoneNumberRequest {
	}
	export interface ReleasePhoneNumberRequestFormProperties {
	}
	export function CreateReleasePhoneNumberRequestFormGroup() {
		return new FormGroup<ReleasePhoneNumberRequestFormProperties>({
		});

	}

	export interface ReplicateInstanceRequest {

		/** Required */
		ReplicaRegion: string;
		ClientToken?: string;

		/** Required */
		ReplicaAlias: string;
	}
	export interface ReplicateInstanceRequestFormProperties {

		/** Required */
		ReplicaRegion: FormControl<string | null | undefined>,
		ClientToken: FormControl<string | null | undefined>,

		/** Required */
		ReplicaAlias: FormControl<string | null | undefined>,
	}
	export function CreateReplicateInstanceRequestFormGroup() {
		return new FormGroup<ReplicateInstanceRequestFormProperties>({
			ReplicaRegion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ClientToken: new FormControl<string | null | undefined>(undefined),
			ReplicaAlias: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The search criteria to be used to search tags. */
	export interface ResourceTagsSearchCriteria {
		TagSearchCondition?: TagSearchCondition;
	}

	/** The search criteria to be used to search tags. */
	export interface ResourceTagsSearchCriteriaFormProperties {
	}
	export function CreateResourceTagsSearchCriteriaFormGroup() {
		return new FormGroup<ResourceTagsSearchCriteriaFormProperties>({
		});

	}

	export interface ResumeContactRecordingRequest {

		/** Required */
		InstanceId: string;

		/** Required */
		ContactId: string;

		/** Required */
		InitialContactId: string;
	}
	export interface ResumeContactRecordingRequestFormProperties {

		/** Required */
		InstanceId: FormControl<string | null | undefined>,

		/** Required */
		ContactId: FormControl<string | null | undefined>,

		/** Required */
		InitialContactId: FormControl<string | null | undefined>,
	}
	export function CreateResumeContactRecordingRequestFormGroup() {
		return new FormGroup<ResumeContactRecordingRequestFormProperties>({
			InstanceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ContactId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			InitialContactId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Filters to be applied to search results. */
	export interface RoutingProfileSearchFilter {

		/** <p>An object that can be used to specify Tag conditions inside the <code>SearchFilter</code>. This accepts an <code>OR</code> of <code>AND</code> (List of List) input where: </p> <ul> <li> <p>Top level list specifies conditions that need to be applied with <code>OR</code> operator</p> </li> <li> <p>Inner list specifies conditions that need to be applied with <code>AND</code> operator.</p> </li> </ul> */
		TagFilter?: ControlPlaneTagFilter;
	}

	/** Filters to be applied to search results. */
	export interface RoutingProfileSearchFilterFormProperties {
	}
	export function CreateRoutingProfileSearchFilterFormGroup() {
		return new FormGroup<RoutingProfileSearchFilterFormProperties>({
		});

	}

	export interface SearchAvailablePhoneNumbersRequest {

		/** Required */
		TargetArn: string;

		/** Required */
		PhoneNumberCountryCode: PhoneNumberCountryCode;

		/** Required */
		PhoneNumberType: PhoneNumberType;
		PhoneNumberPrefix?: string;
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface SearchAvailablePhoneNumbersRequestFormProperties {

		/** Required */
		TargetArn: FormControl<string | null | undefined>,

		/** Required */
		PhoneNumberCountryCode: FormControl<PhoneNumberCountryCode | null | undefined>,

		/** Required */
		PhoneNumberType: FormControl<PhoneNumberType | null | undefined>,
		PhoneNumberPrefix: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateSearchAvailablePhoneNumbersRequestFormGroup() {
		return new FormGroup<SearchAvailablePhoneNumbersRequestFormProperties>({
			TargetArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PhoneNumberCountryCode: new FormControl<PhoneNumberCountryCode | null | undefined>(undefined, [Validators.required]),
			PhoneNumberType: new FormControl<PhoneNumberType | null | undefined>(undefined, [Validators.required]),
			PhoneNumberPrefix: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SearchHoursOfOperationsRequest {

		/** Required */
		InstanceId: string;
		NextToken?: string;
		MaxResults?: number | null;
		SearchFilter?: HoursOfOperationSearchFilter;
		SearchCriteria?: HoursOfOperationSearchCriteria;
	}
	export interface SearchHoursOfOperationsRequestFormProperties {

		/** Required */
		InstanceId: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateSearchHoursOfOperationsRequestFormGroup() {
		return new FormGroup<SearchHoursOfOperationsRequestFormProperties>({
			InstanceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface SearchPromptsRequest {

		/** Required */
		InstanceId: string;
		NextToken?: string;
		MaxResults?: number | null;
		SearchFilter?: PromptSearchFilter;
		SearchCriteria?: PromptSearchCriteria;
	}
	export interface SearchPromptsRequestFormProperties {

		/** Required */
		InstanceId: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateSearchPromptsRequestFormGroup() {
		return new FormGroup<SearchPromptsRequestFormProperties>({
			InstanceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface SearchQueuesRequest {

		/** Required */
		InstanceId: string;
		NextToken?: string;
		MaxResults?: number | null;
		SearchFilter?: QueueSearchFilter;
		SearchCriteria?: QueueSearchCriteria;
	}
	export interface SearchQueuesRequestFormProperties {

		/** Required */
		InstanceId: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateSearchQueuesRequestFormGroup() {
		return new FormGroup<SearchQueuesRequestFormProperties>({
			InstanceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface SearchQuickConnectsRequest {

		/** Required */
		InstanceId: string;
		NextToken?: string;
		MaxResults?: number | null;
		SearchFilter?: QuickConnectSearchFilter;
		SearchCriteria?: QuickConnectSearchCriteria;
	}
	export interface SearchQuickConnectsRequestFormProperties {

		/** Required */
		InstanceId: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateSearchQuickConnectsRequestFormGroup() {
		return new FormGroup<SearchQuickConnectsRequestFormProperties>({
			InstanceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface SearchResourceTagsRequest {

		/** Required */
		InstanceId: string;
		ResourceTypes?: Array<string>;
		NextToken?: string;
		MaxResults?: number | null;
		SearchCriteria?: ResourceTagsSearchCriteria;
	}
	export interface SearchResourceTagsRequestFormProperties {

		/** Required */
		InstanceId: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateSearchResourceTagsRequestFormGroup() {
		return new FormGroup<SearchResourceTagsRequestFormProperties>({
			InstanceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface SearchRoutingProfilesRequest {

		/** Required */
		InstanceId: string;
		NextToken?: string;
		MaxResults?: number | null;
		SearchFilter?: RoutingProfileSearchFilter;
		SearchCriteria?: RoutingProfileSearchCriteria;
	}
	export interface SearchRoutingProfilesRequestFormProperties {

		/** Required */
		InstanceId: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateSearchRoutingProfilesRequestFormGroup() {
		return new FormGroup<SearchRoutingProfilesRequestFormProperties>({
			InstanceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Filters to be applied to search results. */
	export interface SecurityProfilesSearchFilter {

		/** <p>An object that can be used to specify Tag conditions inside the <code>SearchFilter</code>. This accepts an <code>OR</code> of <code>AND</code> (List of List) input where: </p> <ul> <li> <p>Top level list specifies conditions that need to be applied with <code>OR</code> operator</p> </li> <li> <p>Inner list specifies conditions that need to be applied with <code>AND</code> operator.</p> </li> </ul> */
		TagFilter?: ControlPlaneTagFilter;
	}

	/** Filters to be applied to search results. */
	export interface SecurityProfilesSearchFilterFormProperties {
	}
	export function CreateSecurityProfilesSearchFilterFormGroup() {
		return new FormGroup<SecurityProfilesSearchFilterFormProperties>({
		});

	}

	export interface SearchSecurityProfilesRequest {

		/** Required */
		InstanceId: string;
		NextToken?: string;
		MaxResults?: number | null;
		SearchCriteria?: SecurityProfileSearchCriteria;
		SearchFilter?: SecurityProfilesSearchFilter;
	}
	export interface SearchSecurityProfilesRequestFormProperties {

		/** Required */
		InstanceId: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateSearchSecurityProfilesRequestFormGroup() {
		return new FormGroup<SearchSecurityProfilesRequestFormProperties>({
			InstanceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Filters to be applied to search results. */
	export interface UserSearchFilter {

		/** <p>An object that can be used to specify Tag conditions inside the <code>SearchFilter</code>. This accepts an <code>OR</code> of <code>AND</code> (List of List) input where: </p> <ul> <li> <p>Top level list specifies conditions that need to be applied with <code>OR</code> operator</p> </li> <li> <p>Inner list specifies conditions that need to be applied with <code>AND</code> operator.</p> </li> </ul> */
		TagFilter?: ControlPlaneTagFilter;
	}

	/** Filters to be applied to search results. */
	export interface UserSearchFilterFormProperties {
	}
	export function CreateUserSearchFilterFormGroup() {
		return new FormGroup<UserSearchFilterFormProperties>({
		});

	}

	export interface SearchUsersRequest {
		InstanceId?: string;
		NextToken?: string;
		MaxResults?: number | null;
		SearchFilter?: UserSearchFilter;

		/** <p>The search criteria to be used to return users.</p> <note> <p>The <code>name</code> and <code>description</code> fields support "contains" queries with a minimum of 2 characters and a maximum of 25 characters. Any queries with character lengths outside of this range will throw invalid results. </p> </note> */
		SearchCriteria?: UserSearchCriteria;
	}
	export interface SearchUsersRequestFormProperties {
		InstanceId: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateSearchUsersRequestFormGroup() {
		return new FormGroup<SearchUsersRequestFormProperties>({
			InstanceId: new FormControl<string | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface SearchVocabulariesRequest {
		MaxResults?: number | null;
		NextToken?: string;
		State?: VocabularyState;
		NameStartsWith?: string;
		LanguageCode?: VocabularyLanguageCode;
	}
	export interface SearchVocabulariesRequestFormProperties {
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		State: FormControl<VocabularyState | null | undefined>,
		NameStartsWith: FormControl<string | null | undefined>,
		LanguageCode: FormControl<VocabularyLanguageCode | null | undefined>,
	}
	export function CreateSearchVocabulariesRequestFormGroup() {
		return new FormGroup<SearchVocabulariesRequestFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<VocabularyState | null | undefined>(undefined),
			NameStartsWith: new FormControl<string | null | undefined>(undefined),
			LanguageCode: new FormControl<VocabularyLanguageCode | null | undefined>(undefined),
		});

	}

	export interface StartChatContactRequest {

		/** Required */
		InstanceId: string;

		/** Required */
		ContactFlowId: string;
		Attributes?: Attributes;

		/** Required */
		ParticipantDetails: ParticipantDetails;
		InitialMessage?: ChatMessage;
		ClientToken?: string;
		ChatDurationInMinutes?: number | null;
		SupportedMessagingContentTypes?: Array<string>;
		PersistentChat?: PersistentChat;
		RelatedContactId?: string;
	}
	export interface StartChatContactRequestFormProperties {

		/** Required */
		InstanceId: FormControl<string | null | undefined>,

		/** Required */
		ContactFlowId: FormControl<string | null | undefined>,
		ClientToken: FormControl<string | null | undefined>,
		ChatDurationInMinutes: FormControl<number | null | undefined>,
		RelatedContactId: FormControl<string | null | undefined>,
	}
	export function CreateStartChatContactRequestFormGroup() {
		return new FormGroup<StartChatContactRequestFormProperties>({
			InstanceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ContactFlowId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ClientToken: new FormControl<string | null | undefined>(undefined),
			ChatDurationInMinutes: new FormControl<number | null | undefined>(undefined),
			RelatedContactId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StartContactEvaluationRequest {

		/** Required */
		ContactId: string;

		/** Required */
		EvaluationFormId: string;
		ClientToken?: string;
	}
	export interface StartContactEvaluationRequestFormProperties {

		/** Required */
		ContactId: FormControl<string | null | undefined>,

		/** Required */
		EvaluationFormId: FormControl<string | null | undefined>,
		ClientToken: FormControl<string | null | undefined>,
	}
	export function CreateStartContactEvaluationRequestFormGroup() {
		return new FormGroup<StartContactEvaluationRequestFormProperties>({
			ContactId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			EvaluationFormId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ClientToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information about the recording configuration settings. */
	export interface VoiceRecordingConfiguration {
		VoiceRecordingTrack?: VoiceRecordingTrack;
	}

	/** Contains information about the recording configuration settings. */
	export interface VoiceRecordingConfigurationFormProperties {
		VoiceRecordingTrack: FormControl<VoiceRecordingTrack | null | undefined>,
	}
	export function CreateVoiceRecordingConfigurationFormGroup() {
		return new FormGroup<VoiceRecordingConfigurationFormProperties>({
			VoiceRecordingTrack: new FormControl<VoiceRecordingTrack | null | undefined>(undefined),
		});

	}

	export interface StartContactRecordingRequest {

		/** Required */
		InstanceId: string;

		/** Required */
		ContactId: string;

		/** Required */
		InitialContactId: string;

		/** Required */
		VoiceRecordingConfiguration: VoiceRecordingConfiguration;
	}
	export interface StartContactRecordingRequestFormProperties {

		/** Required */
		InstanceId: FormControl<string | null | undefined>,

		/** Required */
		ContactId: FormControl<string | null | undefined>,

		/** Required */
		InitialContactId: FormControl<string | null | undefined>,
	}
	export function CreateStartContactRecordingRequestFormGroup() {
		return new FormGroup<StartContactRecordingRequestFormProperties>({
			InstanceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ContactId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			InitialContactId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface StartContactStreamingRequest {

		/** Required */
		InstanceId: string;

		/** Required */
		ContactId: string;

		/** Required */
		ChatStreamingConfiguration: ChatStreamingConfiguration;

		/** Required */
		ClientToken: string;
	}
	export interface StartContactStreamingRequestFormProperties {

		/** Required */
		InstanceId: FormControl<string | null | undefined>,

		/** Required */
		ContactId: FormControl<string | null | undefined>,

		/** Required */
		ClientToken: FormControl<string | null | undefined>,
	}
	export function CreateStartContactStreamingRequestFormGroup() {
		return new FormGroup<StartContactStreamingRequestFormProperties>({
			InstanceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ContactId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ClientToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum TrafficType { GENERAL = 0, CAMPAIGN = 1 }

	export interface StartOutboundVoiceContactRequest {

		/** Required */
		DestinationPhoneNumber: string;

		/** Required */
		ContactFlowId: string;

		/** Required */
		InstanceId: string;
		ClientToken?: string;
		SourcePhoneNumber?: string;
		QueueId?: string;
		Attributes?: Attributes;
		AnswerMachineDetectionConfig?: AnswerMachineDetectionConfig;
		CampaignId?: string;
		TrafficType?: TrafficType;
	}
	export interface StartOutboundVoiceContactRequestFormProperties {

		/** Required */
		DestinationPhoneNumber: FormControl<string | null | undefined>,

		/** Required */
		ContactFlowId: FormControl<string | null | undefined>,

		/** Required */
		InstanceId: FormControl<string | null | undefined>,
		ClientToken: FormControl<string | null | undefined>,
		SourcePhoneNumber: FormControl<string | null | undefined>,
		QueueId: FormControl<string | null | undefined>,
		CampaignId: FormControl<string | null | undefined>,
		TrafficType: FormControl<TrafficType | null | undefined>,
	}
	export function CreateStartOutboundVoiceContactRequestFormGroup() {
		return new FormGroup<StartOutboundVoiceContactRequestFormProperties>({
			DestinationPhoneNumber: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ContactFlowId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			InstanceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ClientToken: new FormControl<string | null | undefined>(undefined),
			SourcePhoneNumber: new FormControl<string | null | undefined>(undefined),
			QueueId: new FormControl<string | null | undefined>(undefined),
			CampaignId: new FormControl<string | null | undefined>(undefined),
			TrafficType: new FormControl<TrafficType | null | undefined>(undefined),
		});

	}

	export interface StartTaskContactRequest {

		/** Required */
		InstanceId: string;
		PreviousContactId?: string;
		ContactFlowId?: string;
		Attributes?: Attributes;

		/** Required */
		Name: string;
		References?: ContactReferences;
		Description?: string;
		ClientToken?: string;
		ScheduledTime?: Date;
		TaskTemplateId?: string;
		QuickConnectId?: string;
		RelatedContactId?: string;
	}
	export interface StartTaskContactRequestFormProperties {

		/** Required */
		InstanceId: FormControl<string | null | undefined>,
		PreviousContactId: FormControl<string | null | undefined>,
		ContactFlowId: FormControl<string | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		ClientToken: FormControl<string | null | undefined>,
		ScheduledTime: FormControl<Date | null | undefined>,
		TaskTemplateId: FormControl<string | null | undefined>,
		QuickConnectId: FormControl<string | null | undefined>,
		RelatedContactId: FormControl<string | null | undefined>,
	}
	export function CreateStartTaskContactRequestFormGroup() {
		return new FormGroup<StartTaskContactRequestFormProperties>({
			InstanceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PreviousContactId: new FormControl<string | null | undefined>(undefined),
			ContactFlowId: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
			ClientToken: new FormControl<string | null | undefined>(undefined),
			ScheduledTime: new FormControl<Date | null | undefined>(undefined),
			TaskTemplateId: new FormControl<string | null | undefined>(undefined),
			QuickConnectId: new FormControl<string | null | undefined>(undefined),
			RelatedContactId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StopContactRecordingRequest {

		/** Required */
		InstanceId: string;

		/** Required */
		ContactId: string;

		/** Required */
		InitialContactId: string;
	}
	export interface StopContactRecordingRequestFormProperties {

		/** Required */
		InstanceId: FormControl<string | null | undefined>,

		/** Required */
		ContactId: FormControl<string | null | undefined>,

		/** Required */
		InitialContactId: FormControl<string | null | undefined>,
	}
	export function CreateStopContactRecordingRequestFormGroup() {
		return new FormGroup<StopContactRecordingRequestFormProperties>({
			InstanceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ContactId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			InitialContactId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface StopContactRequest {

		/** Required */
		ContactId: string;

		/** Required */
		InstanceId: string;
	}
	export interface StopContactRequestFormProperties {

		/** Required */
		ContactId: FormControl<string | null | undefined>,

		/** Required */
		InstanceId: FormControl<string | null | undefined>,
	}
	export function CreateStopContactRequestFormGroup() {
		return new FormGroup<StopContactRequestFormProperties>({
			ContactId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			InstanceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface StopContactStreamingRequest {

		/** Required */
		InstanceId: string;

		/** Required */
		ContactId: string;

		/** Required */
		StreamingId: string;
	}
	export interface StopContactStreamingRequestFormProperties {

		/** Required */
		InstanceId: FormControl<string | null | undefined>,

		/** Required */
		ContactId: FormControl<string | null | undefined>,

		/** Required */
		StreamingId: FormControl<string | null | undefined>,
	}
	export function CreateStopContactStreamingRequestFormGroup() {
		return new FormGroup<StopContactStreamingRequestFormProperties>({
			InstanceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ContactId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			StreamingId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SubmitContactEvaluationRequest {
		Answers?: EvaluationAnswersInputMap;
		Notes?: EvaluationNotesMap;
	}
	export interface SubmitContactEvaluationRequestFormProperties {
	}
	export function CreateSubmitContactEvaluationRequestFormGroup() {
		return new FormGroup<SubmitContactEvaluationRequestFormProperties>({
		});

	}

	export interface SuspendContactRecordingRequest {

		/** Required */
		InstanceId: string;

		/** Required */
		ContactId: string;

		/** Required */
		InitialContactId: string;
	}
	export interface SuspendContactRecordingRequestFormProperties {

		/** Required */
		InstanceId: FormControl<string | null | undefined>,

		/** Required */
		ContactId: FormControl<string | null | undefined>,

		/** Required */
		InitialContactId: FormControl<string | null | undefined>,
	}
	export function CreateSuspendContactRecordingRequestFormGroup() {
		return new FormGroup<SuspendContactRecordingRequestFormProperties>({
			InstanceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ContactId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			InitialContactId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

	export interface TransferContactRequest {

		/** Required */
		InstanceId: string;

		/** Required */
		ContactId: string;
		QueueId?: string;
		UserId?: string;

		/** Required */
		ContactFlowId: string;
		ClientToken?: string;
	}
	export interface TransferContactRequestFormProperties {

		/** Required */
		InstanceId: FormControl<string | null | undefined>,

		/** Required */
		ContactId: FormControl<string | null | undefined>,
		QueueId: FormControl<string | null | undefined>,
		UserId: FormControl<string | null | undefined>,

		/** Required */
		ContactFlowId: FormControl<string | null | undefined>,
		ClientToken: FormControl<string | null | undefined>,
	}
	export function CreateTransferContactRequestFormGroup() {
		return new FormGroup<TransferContactRequestFormProperties>({
			InstanceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ContactId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			QueueId: new FormControl<string | null | undefined>(undefined),
			UserId: new FormControl<string | null | undefined>(undefined),
			ContactFlowId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ClientToken: new FormControl<string | null | undefined>(undefined),
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

	export interface UpdateAgentStatusRequest {
		Name?: string;
		Description?: string;
		State?: EvaluationFormScoringStatus;
		DisplayOrder?: number | null;
		ResetOrderNumber?: boolean | null;
	}
	export interface UpdateAgentStatusRequestFormProperties {
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		State: FormControl<EvaluationFormScoringStatus | null | undefined>,
		DisplayOrder: FormControl<number | null | undefined>,
		ResetOrderNumber: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateAgentStatusRequestFormGroup() {
		return new FormGroup<UpdateAgentStatusRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<EvaluationFormScoringStatus | null | undefined>(undefined),
			DisplayOrder: new FormControl<number | null | undefined>(undefined),
			ResetOrderNumber: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UpdateContactAttributesRequest {

		/** Required */
		InitialContactId: string;

		/** Required */
		InstanceId: string;

		/** Required */
		Attributes: Attributes;
	}
	export interface UpdateContactAttributesRequestFormProperties {

		/** Required */
		InitialContactId: FormControl<string | null | undefined>,

		/** Required */
		InstanceId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateContactAttributesRequestFormGroup() {
		return new FormGroup<UpdateContactAttributesRequestFormProperties>({
			InitialContactId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			InstanceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateContactEvaluationRequest {
		Answers?: EvaluationAnswersInputMap;
		Notes?: EvaluationNotesMap;
	}
	export interface UpdateContactEvaluationRequestFormProperties {
	}
	export function CreateUpdateContactEvaluationRequestFormGroup() {
		return new FormGroup<UpdateContactEvaluationRequestFormProperties>({
		});

	}

	export interface UpdateContactFlowContentRequest {

		/** Required */
		Content: string;
	}
	export interface UpdateContactFlowContentRequestFormProperties {

		/** Required */
		Content: FormControl<string | null | undefined>,
	}
	export function CreateUpdateContactFlowContentRequestFormGroup() {
		return new FormGroup<UpdateContactFlowContentRequestFormProperties>({
			Content: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateContactFlowMetadataRequest {
		Name?: string;
		Description?: string;
		ContactFlowState?: ContactFlowState;
	}
	export interface UpdateContactFlowMetadataRequestFormProperties {
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		ContactFlowState: FormControl<ContactFlowState | null | undefined>,
	}
	export function CreateUpdateContactFlowMetadataRequestFormGroup() {
		return new FormGroup<UpdateContactFlowMetadataRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			ContactFlowState: new FormControl<ContactFlowState | null | undefined>(undefined),
		});

	}

	export interface UpdateContactFlowModuleContentRequest {

		/** Required */
		Content: string;
	}
	export interface UpdateContactFlowModuleContentRequestFormProperties {

		/** Required */
		Content: FormControl<string | null | undefined>,
	}
	export function CreateUpdateContactFlowModuleContentRequestFormGroup() {
		return new FormGroup<UpdateContactFlowModuleContentRequestFormProperties>({
			Content: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateContactFlowModuleMetadataRequest {
		Name?: string;
		Description?: string;
		State?: ContactFlowState;
	}
	export interface UpdateContactFlowModuleMetadataRequestFormProperties {
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		State: FormControl<ContactFlowState | null | undefined>,
	}
	export function CreateUpdateContactFlowModuleMetadataRequestFormGroup() {
		return new FormGroup<UpdateContactFlowModuleMetadataRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<ContactFlowState | null | undefined>(undefined),
		});

	}

	export interface UpdateContactFlowNameRequest {
		Name?: string;
		Description?: string;
	}
	export interface UpdateContactFlowNameRequestFormProperties {
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
	}
	export function CreateUpdateContactFlowNameRequestFormGroup() {
		return new FormGroup<UpdateContactFlowNameRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateContactRequest {
		Name?: string;
		Description?: string;
		References?: ContactReferences;
	}
	export interface UpdateContactRequestFormProperties {
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
	}
	export function CreateUpdateContactRequestFormGroup() {
		return new FormGroup<UpdateContactRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateContactScheduleRequest {

		/** Required */
		InstanceId: string;

		/** Required */
		ContactId: string;

		/** Required */
		ScheduledTime: Date;
	}
	export interface UpdateContactScheduleRequestFormProperties {

		/** Required */
		InstanceId: FormControl<string | null | undefined>,

		/** Required */
		ContactId: FormControl<string | null | undefined>,

		/** Required */
		ScheduledTime: FormControl<Date | null | undefined>,
	}
	export function CreateUpdateContactScheduleRequestFormGroup() {
		return new FormGroup<UpdateContactScheduleRequestFormProperties>({
			InstanceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ContactId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ScheduledTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateEvaluationFormRequest {

		/** Required */
		EvaluationFormVersion: number;
		CreateNewVersion?: boolean | null;

		/** Required */
		Title: string;
		Description?: string;

		/** Required */
		Items: Array<EvaluationFormItem>;
		ScoringStrategy?: EvaluationFormScoringStrategy;
		ClientToken?: string;
	}
	export interface UpdateEvaluationFormRequestFormProperties {

		/** Required */
		EvaluationFormVersion: FormControl<number | null | undefined>,
		CreateNewVersion: FormControl<boolean | null | undefined>,

		/** Required */
		Title: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		ClientToken: FormControl<string | null | undefined>,
	}
	export function CreateUpdateEvaluationFormRequestFormGroup() {
		return new FormGroup<UpdateEvaluationFormRequestFormProperties>({
			EvaluationFormVersion: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			CreateNewVersion: new FormControl<boolean | null | undefined>(undefined),
			Title: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
			ClientToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateHoursOfOperationRequest {
		Name?: string;
		Description?: string;
		TimeZone?: string;
		Config?: Array<HoursOfOperationConfig>;
	}
	export interface UpdateHoursOfOperationRequestFormProperties {
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		TimeZone: FormControl<string | null | undefined>,
	}
	export function CreateUpdateHoursOfOperationRequestFormGroup() {
		return new FormGroup<UpdateHoursOfOperationRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			TimeZone: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateInstanceAttributeRequest {

		/** Required */
		Value: string;
	}
	export interface UpdateInstanceAttributeRequestFormProperties {

		/** Required */
		Value: FormControl<string | null | undefined>,
	}
	export function CreateUpdateInstanceAttributeRequestFormGroup() {
		return new FormGroup<UpdateInstanceAttributeRequestFormProperties>({
			Value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateInstanceStorageConfigRequest {

		/**
		 * The storage configuration for the instance.
		 * Required
		 */
		StorageConfig: InstanceStorageConfig;
	}
	export interface UpdateInstanceStorageConfigRequestFormProperties {
	}
	export function CreateUpdateInstanceStorageConfigRequestFormGroup() {
		return new FormGroup<UpdateInstanceStorageConfigRequestFormProperties>({
		});

	}


	/** Configuration information for the chat participant role. */
	export interface UpdateParticipantRoleConfigChannelInfo {
		Chat?: ChatParticipantRoleConfig;
	}

	/** Configuration information for the chat participant role. */
	export interface UpdateParticipantRoleConfigChannelInfoFormProperties {
	}
	export function CreateUpdateParticipantRoleConfigChannelInfoFormGroup() {
		return new FormGroup<UpdateParticipantRoleConfigChannelInfoFormProperties>({
		});

	}

	export interface UpdateParticipantRoleConfigRequest {

		/** Required */
		ChannelConfiguration: UpdateParticipantRoleConfigChannelInfo;
	}
	export interface UpdateParticipantRoleConfigRequestFormProperties {
	}
	export function CreateUpdateParticipantRoleConfigRequestFormGroup() {
		return new FormGroup<UpdateParticipantRoleConfigRequestFormProperties>({
		});

	}

	export interface UpdatePhoneNumberRequest {

		/** Required */
		TargetArn: string;
		ClientToken?: string;
	}
	export interface UpdatePhoneNumberRequestFormProperties {

		/** Required */
		TargetArn: FormControl<string | null | undefined>,
		ClientToken: FormControl<string | null | undefined>,
	}
	export function CreateUpdatePhoneNumberRequestFormGroup() {
		return new FormGroup<UpdatePhoneNumberRequestFormProperties>({
			TargetArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ClientToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdatePromptRequest {
		Name?: string;
		Description?: string;
		S3Uri?: string;
	}
	export interface UpdatePromptRequestFormProperties {
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		S3Uri: FormControl<string | null | undefined>,
	}
	export function CreateUpdatePromptRequestFormGroup() {
		return new FormGroup<UpdatePromptRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			S3Uri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateQueueHoursOfOperationRequest {

		/** Required */
		HoursOfOperationId: string;
	}
	export interface UpdateQueueHoursOfOperationRequestFormProperties {

		/** Required */
		HoursOfOperationId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateQueueHoursOfOperationRequestFormGroup() {
		return new FormGroup<UpdateQueueHoursOfOperationRequestFormProperties>({
			HoursOfOperationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateQueueMaxContactsRequest {
		MaxContacts?: number | null;
	}
	export interface UpdateQueueMaxContactsRequestFormProperties {
		MaxContacts: FormControl<number | null | undefined>,
	}
	export function CreateUpdateQueueMaxContactsRequestFormGroup() {
		return new FormGroup<UpdateQueueMaxContactsRequestFormProperties>({
			MaxContacts: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface UpdateQueueNameRequest {
		Name?: string;
		Description?: string;
	}
	export interface UpdateQueueNameRequestFormProperties {
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
	}
	export function CreateUpdateQueueNameRequestFormGroup() {
		return new FormGroup<UpdateQueueNameRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateQueueOutboundCallerConfigRequest {

		/** Required */
		OutboundCallerConfig: OutboundCallerConfig;
	}
	export interface UpdateQueueOutboundCallerConfigRequestFormProperties {
	}
	export function CreateUpdateQueueOutboundCallerConfigRequestFormGroup() {
		return new FormGroup<UpdateQueueOutboundCallerConfigRequestFormProperties>({
		});

	}

	export interface UpdateQueueStatusRequest {

		/** Required */
		Status: EvaluationFormScoringStatus;
	}
	export interface UpdateQueueStatusRequestFormProperties {

		/** Required */
		Status: FormControl<EvaluationFormScoringStatus | null | undefined>,
	}
	export function CreateUpdateQueueStatusRequestFormGroup() {
		return new FormGroup<UpdateQueueStatusRequestFormProperties>({
			Status: new FormControl<EvaluationFormScoringStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateQuickConnectConfigRequest {

		/** Required */
		QuickConnectConfig: QuickConnectConfig;
	}
	export interface UpdateQuickConnectConfigRequestFormProperties {
	}
	export function CreateUpdateQuickConnectConfigRequestFormGroup() {
		return new FormGroup<UpdateQuickConnectConfigRequestFormProperties>({
		});

	}

	export interface UpdateQuickConnectNameRequest {
		Name?: string;
		Description?: string;
	}
	export interface UpdateQuickConnectNameRequestFormProperties {
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
	}
	export function CreateUpdateQuickConnectNameRequestFormGroup() {
		return new FormGroup<UpdateQuickConnectNameRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateRoutingProfileAgentAvailabilityTimerRequest {

		/** Required */
		AgentAvailabilityTimer: AgentAvailabilityTimer;
	}
	export interface UpdateRoutingProfileAgentAvailabilityTimerRequestFormProperties {

		/** Required */
		AgentAvailabilityTimer: FormControl<AgentAvailabilityTimer | null | undefined>,
	}
	export function CreateUpdateRoutingProfileAgentAvailabilityTimerRequestFormGroup() {
		return new FormGroup<UpdateRoutingProfileAgentAvailabilityTimerRequestFormProperties>({
			AgentAvailabilityTimer: new FormControl<AgentAvailabilityTimer | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateRoutingProfileConcurrencyRequest {

		/** Required */
		MediaConcurrencies: Array<MediaConcurrency>;
	}
	export interface UpdateRoutingProfileConcurrencyRequestFormProperties {
	}
	export function CreateUpdateRoutingProfileConcurrencyRequestFormGroup() {
		return new FormGroup<UpdateRoutingProfileConcurrencyRequestFormProperties>({
		});

	}

	export interface UpdateRoutingProfileDefaultOutboundQueueRequest {

		/** Required */
		DefaultOutboundQueueId: string;
	}
	export interface UpdateRoutingProfileDefaultOutboundQueueRequestFormProperties {

		/** Required */
		DefaultOutboundQueueId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateRoutingProfileDefaultOutboundQueueRequestFormGroup() {
		return new FormGroup<UpdateRoutingProfileDefaultOutboundQueueRequestFormProperties>({
			DefaultOutboundQueueId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateRoutingProfileNameRequest {
		Name?: string;
		Description?: string;
	}
	export interface UpdateRoutingProfileNameRequestFormProperties {
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
	}
	export function CreateUpdateRoutingProfileNameRequestFormGroup() {
		return new FormGroup<UpdateRoutingProfileNameRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateRoutingProfileQueuesRequest {

		/** Required */
		QueueConfigs: Array<RoutingProfileQueueConfig>;
	}
	export interface UpdateRoutingProfileQueuesRequestFormProperties {
	}
	export function CreateUpdateRoutingProfileQueuesRequestFormGroup() {
		return new FormGroup<UpdateRoutingProfileQueuesRequestFormProperties>({
		});

	}

	export interface UpdateRuleRequest {

		/** Required */
		Name: string;

		/** Required */
		Function: string;

		/** Required */
		Actions: Array<RuleAction>;

		/** Required */
		PublishStatus: RulePublishStatus;
	}
	export interface UpdateRuleRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		Function: FormControl<string | null | undefined>,

		/** Required */
		PublishStatus: FormControl<RulePublishStatus | null | undefined>,
	}
	export function CreateUpdateRuleRequestFormGroup() {
		return new FormGroup<UpdateRuleRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Function: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PublishStatus: new FormControl<RulePublishStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateSecurityProfileRequest {
		Description?: string;
		Permissions?: Array<string>;
		AllowedAccessControlTags?: AllowedAccessControlTags;
		TagRestrictedResources?: Array<string>;
	}
	export interface UpdateSecurityProfileRequestFormProperties {
		Description: FormControl<string | null | undefined>,
	}
	export function CreateUpdateSecurityProfileRequestFormGroup() {
		return new FormGroup<UpdateSecurityProfileRequestFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateTaskTemplateRequest {
		Name?: string;
		Description?: string;
		ContactFlowId?: string;
		Constraints?: TaskTemplateConstraints;
		Defaults?: TaskTemplateDefaults;
		Status?: TaskTemplateStatus;
		Fields?: Array<TaskTemplateField>;
	}
	export interface UpdateTaskTemplateRequestFormProperties {
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		ContactFlowId: FormControl<string | null | undefined>,
		Status: FormControl<TaskTemplateStatus | null | undefined>,
	}
	export function CreateUpdateTaskTemplateRequestFormGroup() {
		return new FormGroup<UpdateTaskTemplateRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			ContactFlowId: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<TaskTemplateStatus | null | undefined>(undefined),
		});

	}

	export interface UpdateTrafficDistributionRequest {
		TelephonyConfig?: TelephonyConfig;
	}
	export interface UpdateTrafficDistributionRequestFormProperties {
	}
	export function CreateUpdateTrafficDistributionRequestFormGroup() {
		return new FormGroup<UpdateTrafficDistributionRequestFormProperties>({
		});

	}

	export interface UpdateUserHierarchyGroupNameRequest {

		/** Required */
		Name: string;
	}
	export interface UpdateUserHierarchyGroupNameRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateUpdateUserHierarchyGroupNameRequestFormGroup() {
		return new FormGroup<UpdateUserHierarchyGroupNameRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateUserHierarchyRequest {
		HierarchyGroupId?: string;
	}
	export interface UpdateUserHierarchyRequestFormProperties {
		HierarchyGroupId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateUserHierarchyRequestFormGroup() {
		return new FormGroup<UpdateUserHierarchyRequestFormProperties>({
			HierarchyGroupId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateUserHierarchyStructureRequest {

		/** Required */
		HierarchyStructure: HierarchyStructureUpdate;
	}
	export interface UpdateUserHierarchyStructureRequestFormProperties {
	}
	export function CreateUpdateUserHierarchyStructureRequestFormGroup() {
		return new FormGroup<UpdateUserHierarchyStructureRequestFormProperties>({
		});

	}

	export interface UpdateUserIdentityInfoRequest {

		/** Required */
		IdentityInfo: UserIdentityInfo;
	}
	export interface UpdateUserIdentityInfoRequestFormProperties {
	}
	export function CreateUpdateUserIdentityInfoRequestFormGroup() {
		return new FormGroup<UpdateUserIdentityInfoRequestFormProperties>({
		});

	}

	export interface UpdateUserPhoneConfigRequest {

		/** Required */
		PhoneConfig: UserPhoneConfig;
	}
	export interface UpdateUserPhoneConfigRequestFormProperties {
	}
	export function CreateUpdateUserPhoneConfigRequestFormGroup() {
		return new FormGroup<UpdateUserPhoneConfigRequestFormProperties>({
		});

	}

	export interface UpdateUserRoutingProfileRequest {

		/** Required */
		RoutingProfileId: string;
	}
	export interface UpdateUserRoutingProfileRequestFormProperties {

		/** Required */
		RoutingProfileId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateUserRoutingProfileRequestFormGroup() {
		return new FormGroup<UpdateUserRoutingProfileRequestFormProperties>({
			RoutingProfileId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateUserSecurityProfilesRequest {

		/** Required */
		SecurityProfileIds: Array<string>;
	}
	export interface UpdateUserSecurityProfilesRequestFormProperties {
	}
	export function CreateUpdateUserSecurityProfilesRequestFormGroup() {
		return new FormGroup<UpdateUserSecurityProfilesRequestFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Activates an evaluation form in the specified Amazon Connect instance. After the evaluation form is activated, it is available to start new evaluations based on the form.
		 * Post evaluation-forms/{InstanceId}/{EvaluationFormId}/activate
		 * @param {string} InstanceId The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.
		 * @param {string} EvaluationFormId The unique identifier for the evaluation form.
		 * @return {ActivateEvaluationFormResponse} Success
		 */
		ActivateEvaluationForm(InstanceId: string, EvaluationFormId: string, requestBody: ActivateEvaluationFormPostBody): Observable<ActivateEvaluationFormResponse> {
			return this.http.post<ActivateEvaluationFormResponse>(this.baseUri + 'evaluation-forms/' + (InstanceId == null ? '' : encodeURIComponent(InstanceId)) + '/' + (EvaluationFormId == null ? '' : encodeURIComponent(EvaluationFormId)) + '/activate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>This API is in preview release for Amazon Connect and is subject to change.</p> <p>Associates an approved origin to an Amazon Connect instance.</p>
		 * Put instance/{InstanceId}/approved-origin
		 * @param {string} InstanceId The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.
		 * @return {void} Success
		 */
		AssociateApprovedOrigin(InstanceId: string, requestBody: AssociateApprovedOriginPutBody): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'instance/' + (InstanceId == null ? '' : encodeURIComponent(InstanceId)) + '/approved-origin', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>This API is in preview release for Amazon Connect and is subject to change.</p> <p>Allows the specified Amazon Connect instance to access the specified Amazon Lex or Amazon Lex V2 bot.</p>
		 * Put instance/{InstanceId}/bot
		 * @param {string} InstanceId The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.
		 * @return {void} Success
		 */
		AssociateBot(InstanceId: string, requestBody: AssociateBotPutBody): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'instance/' + (InstanceId == null ? '' : encodeURIComponent(InstanceId)) + '/bot', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>This API is in preview release for Amazon Connect and is subject to change.</p> <p>Revokes authorization from the specified instance to access the specified Amazon Lex or Amazon Lex V2 bot. </p>
		 * Post instance/{InstanceId}/bot
		 * @param {string} InstanceId The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.
		 * @return {void} Success
		 */
		DisassociateBot(InstanceId: string, requestBody: DisassociateBotPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'instance/' + (InstanceId == null ? '' : encodeURIComponent(InstanceId)) + '/bot', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Associates an existing vocabulary as the default. Contact Lens for Amazon Connect uses the vocabulary in post-call and real-time analysis sessions for the given language.
		 * Put default-vocabulary/{InstanceId}/{LanguageCode}
		 * @param {string} InstanceId The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.
		 * @param {VocabularyLanguageCode} LanguageCode The language code of the vocabulary entries. For a list of languages and their corresponding language codes, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/transcribe-whatis.html">What is Amazon Transcribe?</a> 
		 * @return {AssociateDefaultVocabularyResponse} Success
		 */
		AssociateDefaultVocabulary(InstanceId: string, LanguageCode: VocabularyLanguageCode, requestBody: AssociateDefaultVocabularyPutBody): Observable<AssociateDefaultVocabularyResponse> {
			return this.http.put<AssociateDefaultVocabularyResponse>(this.baseUri + 'default-vocabulary/' + (InstanceId == null ? '' : encodeURIComponent(InstanceId)) + '/' + LanguageCode, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>This API is in preview release for Amazon Connect and is subject to change.</p> <p>Associates a storage resource type for the first time. You can only associate one type of storage configuration in a single call. This means, for example, that you can't define an instance with multiple S3 buckets for storing chat transcripts.</p> <p>This API does not create a resource that doesn't exist. It only associates it to the instance. Ensure that the resource being specified in the storage configuration, like an S3 bucket, exists when being used for association.</p>
		 * Put instance/{InstanceId}/storage-config
		 * @param {string} InstanceId The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.
		 * @return {AssociateInstanceStorageConfigResponse} Success
		 */
		AssociateInstanceStorageConfig(InstanceId: string, requestBody: AssociateInstanceStorageConfigPutBody): Observable<AssociateInstanceStorageConfigResponse> {
			return this.http.put<AssociateInstanceStorageConfigResponse>(this.baseUri + 'instance/' + (InstanceId == null ? '' : encodeURIComponent(InstanceId)) + '/storage-config', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>This API is in preview release for Amazon Connect and is subject to change.</p> <p>Allows the specified Amazon Connect instance to access the specified Lambda function.</p>
		 * Put instance/{InstanceId}/lambda-function
		 * @param {string} InstanceId The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.
		 * @return {void} Success
		 */
		AssociateLambdaFunction(InstanceId: string, requestBody: AssociateLambdaFunctionPutBody): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'instance/' + (InstanceId == null ? '' : encodeURIComponent(InstanceId)) + '/lambda-function', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>This API is in preview release for Amazon Connect and is subject to change.</p> <p>Allows the specified Amazon Connect instance to access the specified Amazon Lex V1 bot. This API only supports the association of Amazon Lex V1 bots.</p>
		 * Put instance/{InstanceId}/lex-bot
		 * @param {string} InstanceId The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.
		 * @return {void} Success
		 */
		AssociateLexBot(InstanceId: string, requestBody: AssociateLexBotPutBody): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'instance/' + (InstanceId == null ? '' : encodeURIComponent(InstanceId)) + '/lex-bot', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Associates a flow with a phone number claimed to your Amazon Connect instance.</p> <important> <p>If the number is claimed to a traffic distribution group, and you are calling this API using an instance in the Amazon Web Services Region where the traffic distribution group was created, you can use either a full phone number ARN or UUID value for the <code>PhoneNumberId</code> URI request parameter. However, if the number is claimed to a traffic distribution group and you are calling this API using an instance in the alternate Amazon Web Services Region associated with the traffic distribution group, you must provide a full phone number ARN. If a UUID is provided in this scenario, you will receive a <code>ResourceNotFoundException</code>.</p> </important>
		 * Put phone-number/{PhoneNumberId}/contact-flow
		 * @param {string} PhoneNumberId A unique identifier for the phone number.
		 * @return {void} Success
		 */
		AssociatePhoneNumberContactFlow(PhoneNumberId: string, requestBody: AssociatePhoneNumberContactFlowPutBody): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'phone-number/' + (PhoneNumberId == null ? '' : encodeURIComponent(PhoneNumberId)) + '/contact-flow', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>This API is in preview release for Amazon Connect and is subject to change.</p> <p>Associates a set of quick connects with a queue.</p>
		 * Post queues/{InstanceId}/{QueueId}/associate-quick-connects
		 * @param {string} InstanceId The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.
		 * @param {string} QueueId The identifier for the queue.
		 * @return {void} Success
		 */
		AssociateQueueQuickConnects(InstanceId: string, QueueId: string, requestBody: AssociateQueueQuickConnectsPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'queues/' + (InstanceId == null ? '' : encodeURIComponent(InstanceId)) + '/' + (QueueId == null ? '' : encodeURIComponent(QueueId)) + '/associate-quick-connects', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Associates a set of queues with a routing profile.
		 * Post routing-profiles/{InstanceId}/{RoutingProfileId}/associate-queues
		 * @param {string} InstanceId The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.
		 * @param {string} RoutingProfileId The identifier of the routing profile.
		 * @return {void} Success
		 */
		AssociateRoutingProfileQueues(InstanceId: string, RoutingProfileId: string, requestBody: AssociateRoutingProfileQueuesPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'routing-profiles/' + (InstanceId == null ? '' : encodeURIComponent(InstanceId)) + '/' + (RoutingProfileId == null ? '' : encodeURIComponent(RoutingProfileId)) + '/associate-queues', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>This API is in preview release for Amazon Connect and is subject to change.</p> <p>Associates a security key to the instance.</p>
		 * Put instance/{InstanceId}/security-key
		 * @param {string} InstanceId The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.
		 * @return {AssociateSecurityKeyResponse} Success
		 */
		AssociateSecurityKey(InstanceId: string, requestBody: AssociateSecurityKeyPutBody): Observable<AssociateSecurityKeyResponse> {
			return this.http.put<AssociateSecurityKeyResponse>(this.baseUri + 'instance/' + (InstanceId == null ? '' : encodeURIComponent(InstanceId)) + '/security-key', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Claims an available phone number to your Amazon Connect instance or traffic distribution group. You can call this API only in the same Amazon Web Services Region where the Amazon Connect instance or traffic distribution group was created.</p> <p>For more information about how to use this operation, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/claim-phone-number.html">Claim a phone number in your country</a> and <a href="https://docs.aws.amazon.com/connect/latest/adminguide/claim-phone-numbers-traffic-distribution-groups.html">Claim phone numbers to traffic distribution groups</a> in the <i>Amazon Connect Administrator Guide</i>. </p> <important> <p>You can call the <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_SearchAvailablePhoneNumbers.html">SearchAvailablePhoneNumbers</a> API for available phone numbers that you can claim. Call the <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_DescribePhoneNumber.html">DescribePhoneNumber</a> API to verify the status of a previous <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_ClaimPhoneNumber.html">ClaimPhoneNumber</a> operation.</p> </important> <p>If you plan to claim and release numbers frequently during a 30 day period, contact us for a service quota exception. Otherwise, it is possible you will be blocked from claiming and releasing any more numbers until 30 days past the oldest number released has expired.</p> <p>By default you can claim and release up to 200% of your maximum number of active phone numbers during any 30 day period. If you claim and release phone numbers using the UI or API during a rolling 30 day cycle that exceeds 200% of your phone number service level quota, you will be blocked from claiming any more numbers until 30 days past the oldest number released has expired. </p> <p>For example, if you already have 99 claimed numbers and a service level quota of 99 phone numbers, and in any 30 day period you release 99, claim 99, and then release 99, you will have exceeded the 200% limit. At that point you are blocked from claiming any more numbers until you open an Amazon Web Services support ticket.</p>
		 * Post phone-number/claim
		 * @return {ClaimPhoneNumberResponse} Success
		 */
		ClaimPhoneNumber(requestBody: ClaimPhoneNumberPostBody): Observable<ClaimPhoneNumberResponse> {
			return this.http.post<ClaimPhoneNumberResponse>(this.baseUri + 'phone-number/claim', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>This API is in preview release for Amazon Connect and is subject to change.</p> <p>Creates an agent status for the specified Amazon Connect instance.</p>
		 * Put agent-status/{InstanceId}
		 * @param {string} InstanceId The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.
		 * @return {CreateAgentStatusResponse} Success
		 */
		CreateAgentStatus(InstanceId: string, requestBody: CreateAgentStatusPutBody): Observable<CreateAgentStatusResponse> {
			return this.http.put<CreateAgentStatusResponse>(this.baseUri + 'agent-status/' + (InstanceId == null ? '' : encodeURIComponent(InstanceId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>This API is in preview release for Amazon Connect and is subject to change.</p> <p>Lists agent statuses.</p>
		 * Get agent-status/{InstanceId}
		 * @param {string} InstanceId The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.
		 * @param {string} nextToken The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
		 * @param {number} maxResults The maximum number of results to return per page.
		 * @param {Array<AgentStatusType>} AgentStatusTypes Available agent status types.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListAgentStatusResponse} Success
		 */
		ListAgentStatuses(InstanceId: string, nextToken: string | null | undefined, maxResults: number | null | undefined, AgentStatusTypes: Array<AgentStatusType> | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListAgentStatusResponse> {
			return this.http.get<ListAgentStatusResponse>(this.baseUri + 'agent-status/' + (InstanceId == null ? '' : encodeURIComponent(InstanceId)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults + '&' + AgentStatusTypes?.map(z => `AgentStatusTypes=${z}`).join('&') + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * <p>Creates a flow for the specified Amazon Connect instance.</p> <p>You can also create and update flows using the <a href="https://docs.aws.amazon.com/connect/latest/APIReference/flow-language.html">Amazon Connect Flow language</a>.</p>
		 * Put contact-flows/{InstanceId}
		 * @param {string} InstanceId The identifier of the Amazon Connect instance.
		 * @return {CreateContactFlowResponse} Success
		 */
		CreateContactFlow(InstanceId: string, requestBody: CreateContactFlowPutBody): Observable<CreateContactFlowResponse> {
			return this.http.put<CreateContactFlowResponse>(this.baseUri + 'contact-flows/' + (InstanceId == null ? '' : encodeURIComponent(InstanceId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a flow module for the specified Amazon Connect instance.
		 * Put contact-flow-modules/{InstanceId}
		 * @param {string} InstanceId The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.
		 * @return {CreateContactFlowModuleResponse} Success
		 */
		CreateContactFlowModule(InstanceId: string, requestBody: CreateContactFlowModulePutBody): Observable<CreateContactFlowModuleResponse> {
			return this.http.put<CreateContactFlowModuleResponse>(this.baseUri + 'contact-flow-modules/' + (InstanceId == null ? '' : encodeURIComponent(InstanceId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates an evaluation form in the specified Amazon Connect instance. The form can be used to define questions related to agent performance, and create sections to organize such questions. Question and section identifiers cannot be duplicated within the same evaluation form.
		 * Put evaluation-forms/{InstanceId}
		 * @param {string} InstanceId The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.
		 * @return {CreateEvaluationFormResponse} Success
		 */
		CreateEvaluationForm(InstanceId: string, requestBody: CreateEvaluationFormPutBody): Observable<CreateEvaluationFormResponse> {
			return this.http.put<CreateEvaluationFormResponse>(this.baseUri + 'evaluation-forms/' + (InstanceId == null ? '' : encodeURIComponent(InstanceId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists evaluation forms in the specified Amazon Connect instance.
		 * Get evaluation-forms/{InstanceId}
		 * @param {string} InstanceId The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.
		 * @param {number} maxResults The maximum number of results to return per page.
		 * @param {string} nextToken The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListEvaluationFormsResponse} Success
		 */
		ListEvaluationForms(InstanceId: string, maxResults: number | null | undefined, nextToken: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListEvaluationFormsResponse> {
			return this.http.get<ListEvaluationFormsResponse>(this.baseUri + 'evaluation-forms/' + (InstanceId == null ? '' : encodeURIComponent(InstanceId)) + '&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * <p>This API is in preview release for Amazon Connect and is subject to change.</p> <p>Creates hours of operation. </p>
		 * Put hours-of-operations/{InstanceId}
		 * @param {string} InstanceId The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.
		 * @return {CreateHoursOfOperationResponse} Success
		 */
		CreateHoursOfOperation(InstanceId: string, requestBody: CreateHoursOfOperationPutBody): Observable<CreateHoursOfOperationResponse> {
			return this.http.put<CreateHoursOfOperationResponse>(this.baseUri + 'hours-of-operations/' + (InstanceId == null ? '' : encodeURIComponent(InstanceId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>This API is in preview release for Amazon Connect and is subject to change.</p> <p>Initiates an Amazon Connect instance with all the supported channels enabled. It does not attach any storage, such as Amazon Simple Storage Service (Amazon S3) or Amazon Kinesis. It also does not allow for any configurations on features, such as Contact Lens for Amazon Connect. </p> <p>Amazon Connect enforces a limit on the total number of instances that you can create or delete in 30 days. If you exceed this limit, you will get an error message indicating there has been an excessive number of attempts at creating or deleting instances. You must wait 30 days before you can restart creating and deleting instances in your account.</p>
		 * Put instance
		 * @return {CreateInstanceResponse} Success
		 */
		CreateInstance(requestBody: CreateInstancePutBody): Observable<CreateInstanceResponse> {
			return this.http.put<CreateInstanceResponse>(this.baseUri + 'instance', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>This API is in preview release for Amazon Connect and is subject to change.</p> <p>Return a list of instances which are in active state, creation-in-progress state, and failed state. Instances that aren't successfully created (they are in a failed state) are returned only for 24 hours after the CreateInstance API was invoked.</p>
		 * Get instance
		 * @param {string} nextToken The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
		 * @param {number} maxResults The maximum number of results to return per page.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListInstancesResponse} Success
		 */
		ListInstances(nextToken: string | null | undefined, maxResults: number | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListInstancesResponse> {
			return this.http.get<ListInstancesResponse>(this.baseUri + 'instance?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Creates an Amazon Web Services resource association with an Amazon Connect instance.
		 * Put instance/{InstanceId}/integration-associations
		 * @param {string} InstanceId The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.
		 * @return {CreateIntegrationAssociationResponse} Success
		 */
		CreateIntegrationAssociation(InstanceId: string, requestBody: CreateIntegrationAssociationPutBody): Observable<CreateIntegrationAssociationResponse> {
			return this.http.put<CreateIntegrationAssociationResponse>(this.baseUri + 'instance/' + (InstanceId == null ? '' : encodeURIComponent(InstanceId)) + '/integration-associations', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Provides summary information about the Amazon Web Services resource associations for the specified Amazon Connect instance.
		 * Get instance/{InstanceId}/integration-associations
		 * @param {string} InstanceId The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.
		 * @param {IntegrationType} integrationType The integration type.
		 * @param {string} nextToken The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
		 * @param {number} maxResults The maximum number of results to return per page.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListIntegrationAssociationsResponse} Success
		 */
		ListIntegrationAssociations(InstanceId: string, integrationType: IntegrationType | null | undefined, nextToken: string | null | undefined, maxResults: number | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListIntegrationAssociationsResponse> {
			return this.http.get<ListIntegrationAssociationsResponse>(this.baseUri + 'instance/' + (InstanceId == null ? '' : encodeURIComponent(InstanceId)) + '/integration-associations&integrationType=' + integrationType + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Adds a new participant into an on-going chat contact. For more information, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/chat-customize-flow.html">Customize chat flow experiences by integrating custom participants</a>.
		 * Post contact/create-participant
		 * @return {CreateParticipantResponse} Success
		 */
		CreateParticipant(requestBody: CreateParticipantPostBody): Observable<CreateParticipantResponse> {
			return this.http.post<CreateParticipantResponse>(this.baseUri + 'contact/create-participant', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a prompt. For more information about prompts, such as supported file types and maximum length, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/prompts.html">Create prompts</a> in the <i>Amazon Connect Administrator's Guide</i>.
		 * Put prompts/{InstanceId}
		 * @param {string} InstanceId The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.
		 * @return {CreatePromptResponse} Success
		 */
		CreatePrompt(InstanceId: string, requestBody: CreatePromptPutBody): Observable<CreatePromptResponse> {
			return this.http.put<CreatePromptResponse>(this.baseUri + 'prompts/' + (InstanceId == null ? '' : encodeURIComponent(InstanceId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>This API is in preview release for Amazon Connect and is subject to change.</p> <p>Creates a new queue for the specified Amazon Connect instance.</p> <important> <p>If the number being used in the input is claimed to a traffic distribution group, and you are calling this API using an instance in the Amazon Web Services Region where the traffic distribution group was created, you can use either a full phone number ARN or UUID value for the <code>OutboundCallerIdNumberId</code> value of the <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_OutboundCallerConfig">OutboundCallerConfig</a> request body parameter. However, if the number is claimed to a traffic distribution group and you are calling this API using an instance in the alternate Amazon Web Services Region associated with the traffic distribution group, you must provide a full phone number ARN. If a UUID is provided in this scenario, you will receive a <code>ResourceNotFoundException</code>.</p> <p>Only use the phone number ARN format that doesn't contain <code>instance</code> in the path, for example, <code>arn:aws:connect:us-east-1:1234567890:phone-number/uuid</code>. This is the same ARN format that is returned when you call the <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_ListPhoneNumbersV2.html">ListPhoneNumbersV2</a> API.</p> </important>
		 * Put queues/{InstanceId}
		 * @param {string} InstanceId The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.
		 * @return {CreateQueueResponse} Success
		 */
		CreateQueue(InstanceId: string, requestBody: CreateQueuePutBody): Observable<CreateQueueResponse> {
			return this.http.put<CreateQueueResponse>(this.baseUri + 'queues/' + (InstanceId == null ? '' : encodeURIComponent(InstanceId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a quick connect for the specified Amazon Connect instance.
		 * Put quick-connects/{InstanceId}
		 * @param {string} InstanceId The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.
		 * @return {CreateQuickConnectResponse} Success
		 */
		CreateQuickConnect(InstanceId: string, requestBody: CreateQuickConnectPutBody): Observable<CreateQuickConnectResponse> {
			return this.http.put<CreateQuickConnectResponse>(this.baseUri + 'quick-connects/' + (InstanceId == null ? '' : encodeURIComponent(InstanceId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Provides information about the quick connects for the specified Amazon Connect instance.
		 * Get quick-connects/{InstanceId}
		 * @param {string} InstanceId The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.
		 * @param {string} nextToken The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
		 * @param {number} maxResults The maximum number of results to return per page. The default MaxResult size is 100.
		 * @param {Array<QuickConnectType>} QuickConnectTypes The type of quick connect. In the Amazon Connect console, when you create a quick connect, you are prompted to assign one of the following types: Agent (USER), External (PHONE_NUMBER), or Queue (QUEUE).
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListQuickConnectsResponse} Success
		 */
		ListQuickConnects(InstanceId: string, nextToken: string | null | undefined, maxResults: number | null | undefined, QuickConnectTypes: Array<QuickConnectType> | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListQuickConnectsResponse> {
			return this.http.get<ListQuickConnectsResponse>(this.baseUri + 'quick-connects/' + (InstanceId == null ? '' : encodeURIComponent(InstanceId)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults + '&' + QuickConnectTypes?.map(z => `QuickConnectTypes=${z}`).join('&') + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Creates a new routing profile.
		 * Put routing-profiles/{InstanceId}
		 * @param {string} InstanceId The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.
		 * @return {CreateRoutingProfileResponse} Success
		 */
		CreateRoutingProfile(InstanceId: string, requestBody: CreateRoutingProfilePutBody): Observable<CreateRoutingProfileResponse> {
			return this.http.put<CreateRoutingProfileResponse>(this.baseUri + 'routing-profiles/' + (InstanceId == null ? '' : encodeURIComponent(InstanceId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a rule for the specified Amazon Connect instance.</p> <p>Use the <a href="https://docs.aws.amazon.com/connect/latest/APIReference/connect-rules-language.html">Rules Function language</a> to code conditions for the rule. </p>
		 * Post rules/{InstanceId}
		 * @param {string} InstanceId The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.
		 * @return {CreateRuleResponse} Success
		 */
		CreateRule(InstanceId: string, requestBody: CreateRulePostBody): Observable<CreateRuleResponse> {
			return this.http.post<CreateRuleResponse>(this.baseUri + 'rules/' + (InstanceId == null ? '' : encodeURIComponent(InstanceId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List all rules for the specified Amazon Connect instance.
		 * Get rules/{InstanceId}
		 * @param {string} InstanceId The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.
		 * @param {RulePublishStatus} publishStatus The publish status of the rule.
		 * @param {EventSourceName} eventSourceName The name of the event source.
		 * @param {number} maxResults The maximum number of results to return per page.
		 * @param {string} nextToken The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListRulesResponse} Success
		 */
		ListRules(InstanceId: string, publishStatus: RulePublishStatus | null | undefined, eventSourceName: EventSourceName | null | undefined, maxResults: number | null | undefined, nextToken: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListRulesResponse> {
			return this.http.get<ListRulesResponse>(this.baseUri + 'rules/' + (InstanceId == null ? '' : encodeURIComponent(InstanceId)) + '&publishStatus=' + publishStatus + '&eventSourceName=' + eventSourceName + '&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * <p>This API is in preview release for Amazon Connect and is subject to change.</p> <p>Creates a security profile.</p>
		 * Put security-profiles/{InstanceId}
		 * @param {string} InstanceId The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.
		 * @return {CreateSecurityProfileResponse} Success
		 */
		CreateSecurityProfile(InstanceId: string, requestBody: CreateSecurityProfilePutBody): Observable<CreateSecurityProfileResponse> {
			return this.http.put<CreateSecurityProfileResponse>(this.baseUri + 'security-profiles/' + (InstanceId == null ? '' : encodeURIComponent(InstanceId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a new task template in the specified Amazon Connect instance.
		 * Put instance/{InstanceId}/task/template
		 * @param {string} InstanceId The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.
		 * @return {CreateTaskTemplateResponse} Success
		 */
		CreateTaskTemplate(InstanceId: string, requestBody: CreateTaskTemplatePutBody): Observable<CreateTaskTemplateResponse> {
			return this.http.put<CreateTaskTemplateResponse>(this.baseUri + 'instance/' + (InstanceId == null ? '' : encodeURIComponent(InstanceId)) + '/task/template', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists task templates for the specified Amazon Connect instance.
		 * Get instance/{InstanceId}/task/template
		 * @param {string} InstanceId The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.
		 * @param {string} nextToken <p>The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.</p> <important> <p>It is not expected that you set this because the value returned in the previous response is always null.</p> </important>
		 * @param {number} maxResults <p>The maximum number of results to return per page.</p> <important> <p>It is not expected that you set this.</p> </important>
		 * @param {TaskTemplateStatus} status Marks a template as <code>ACTIVE</code> or <code>INACTIVE</code> for a task to refer to it. Tasks can only be created from <code>ACTIVE</code> templates. If a template is marked as <code>INACTIVE</code>, then a task that refers to this template cannot be created.
		 * @param {string} name The name of the task template.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListTaskTemplatesResponse} Success
		 */
		ListTaskTemplates(InstanceId: string, nextToken: string | null | undefined, maxResults: number | null | undefined, status: TaskTemplateStatus | null | undefined, name: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListTaskTemplatesResponse> {
			return this.http.get<ListTaskTemplatesResponse>(this.baseUri + 'instance/' + (InstanceId == null ? '' : encodeURIComponent(InstanceId)) + '/task/template&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults + '&status=' + status + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * <p>Creates a traffic distribution group given an Amazon Connect instance that has been replicated. </p> <p>For more information about creating traffic distribution groups, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/setup-traffic-distribution-groups.html">Set up traffic distribution groups</a> in the <i>Amazon Connect Administrator Guide</i>. </p>
		 * Put traffic-distribution-group
		 * @return {CreateTrafficDistributionGroupResponse} Success
		 */
		CreateTrafficDistributionGroup(requestBody: CreateTrafficDistributionGroupPutBody): Observable<CreateTrafficDistributionGroupResponse> {
			return this.http.put<CreateTrafficDistributionGroupResponse>(this.baseUri + 'traffic-distribution-group', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a use case for an integration association.
		 * Put instance/{InstanceId}/integration-associations/{IntegrationAssociationId}/use-cases
		 * @param {string} InstanceId The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.
		 * @param {string} IntegrationAssociationId The identifier for the integration association.
		 * @return {CreateUseCaseResponse} Success
		 */
		CreateUseCase(InstanceId: string, IntegrationAssociationId: string, requestBody: CreateUseCasePutBody): Observable<CreateUseCaseResponse> {
			return this.http.put<CreateUseCaseResponse>(this.baseUri + 'instance/' + (InstanceId == null ? '' : encodeURIComponent(InstanceId)) + '/integration-associations/' + (IntegrationAssociationId == null ? '' : encodeURIComponent(IntegrationAssociationId)) + '/use-cases', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the use cases for the integration association.
		 * Get instance/{InstanceId}/integration-associations/{IntegrationAssociationId}/use-cases
		 * @param {string} InstanceId The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.
		 * @param {string} IntegrationAssociationId The identifier for the integration association.
		 * @param {string} nextToken The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
		 * @param {number} maxResults The maximum number of results to return per page.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListUseCasesResponse} Success
		 */
		ListUseCases(InstanceId: string, IntegrationAssociationId: string, nextToken: string | null | undefined, maxResults: number | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListUseCasesResponse> {
			return this.http.get<ListUseCasesResponse>(this.baseUri + 'instance/' + (InstanceId == null ? '' : encodeURIComponent(InstanceId)) + '/integration-associations/' + (IntegrationAssociationId == null ? '' : encodeURIComponent(IntegrationAssociationId)) + '/use-cases&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * <p>Creates a user account for the specified Amazon Connect instance.</p> <p>For information about how to create user accounts using the Amazon Connect console, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/user-management.html">Add Users</a> in the <i>Amazon Connect Administrator Guide</i>.</p>
		 * Put users/{InstanceId}
		 * @param {string} InstanceId The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.
		 * @return {CreateUserResponse} Success
		 */
		CreateUser(InstanceId: string, requestBody: CreateUserPutBody): Observable<CreateUserResponse> {
			return this.http.put<CreateUserResponse>(this.baseUri + 'users/' + (InstanceId == null ? '' : encodeURIComponent(InstanceId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a new user hierarchy group.
		 * Put user-hierarchy-groups/{InstanceId}
		 * @param {string} InstanceId The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.
		 * @return {CreateUserHierarchyGroupResponse} Success
		 */
		CreateUserHierarchyGroup(InstanceId: string, requestBody: CreateUserHierarchyGroupPutBody): Observable<CreateUserHierarchyGroupResponse> {
			return this.http.put<CreateUserHierarchyGroupResponse>(this.baseUri + 'user-hierarchy-groups/' + (InstanceId == null ? '' : encodeURIComponent(InstanceId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a custom vocabulary associated with your Amazon Connect instance. You can set a custom vocabulary to be your default vocabulary for a given language. Contact Lens for Amazon Connect uses the default vocabulary in post-call and real-time contact analysis sessions for that language.
		 * Post vocabulary/{InstanceId}
		 * @param {string} InstanceId The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.
		 * @return {CreateVocabularyResponse} Success
		 */
		CreateVocabulary(InstanceId: string, requestBody: CreateVocabularyPostBody): Observable<CreateVocabularyResponse> {
			return this.http.post<CreateVocabularyResponse>(this.baseUri + 'vocabulary/' + (InstanceId == null ? '' : encodeURIComponent(InstanceId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deactivates an evaluation form in the specified Amazon Connect instance. After a form is deactivated, it is no longer available for users to start new evaluations based on the form.
		 * Post evaluation-forms/{InstanceId}/{EvaluationFormId}/deactivate
		 * @param {string} InstanceId The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.
		 * @param {string} EvaluationFormId The unique identifier for the evaluation form.
		 * @return {DeactivateEvaluationFormResponse} Success
		 */
		DeactivateEvaluationForm(InstanceId: string, EvaluationFormId: string, requestBody: DeactivateEvaluationFormPostBody): Observable<DeactivateEvaluationFormResponse> {
			return this.http.post<DeactivateEvaluationFormResponse>(this.baseUri + 'evaluation-forms/' + (InstanceId == null ? '' : encodeURIComponent(InstanceId)) + '/' + (EvaluationFormId == null ? '' : encodeURIComponent(EvaluationFormId)) + '/deactivate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a contact evaluation in the specified Amazon Connect instance.
		 * Delete contact-evaluations/{InstanceId}/{EvaluationId}
		 * @param {string} InstanceId The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.
		 * @param {string} EvaluationId A unique identifier for the contact evaluation.
		 * @return {void} Success
		 */
		DeleteContactEvaluation(InstanceId: string, EvaluationId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'contact-evaluations/' + (InstanceId == null ? '' : encodeURIComponent(InstanceId)) + '/' + (EvaluationId == null ? '' : encodeURIComponent(EvaluationId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Describes a contact evaluation in the specified Amazon Connect instance.
		 * Get contact-evaluations/{InstanceId}/{EvaluationId}
		 * @param {string} InstanceId The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.
		 * @param {string} EvaluationId A unique identifier for the contact evaluation.
		 * @return {DescribeContactEvaluationResponse} Success
		 */
		DescribeContactEvaluation(InstanceId: string, EvaluationId: string): Observable<DescribeContactEvaluationResponse> {
			return this.http.get<DescribeContactEvaluationResponse>(this.baseUri + 'contact-evaluations/' + (InstanceId == null ? '' : encodeURIComponent(InstanceId)) + '/' + (EvaluationId == null ? '' : encodeURIComponent(EvaluationId)), {});
		}

		/**
		 * Updates details about a contact evaluation in the specified Amazon Connect instance. A contact evaluation must be in draft state. Answers included in the request are merged with existing answers for the given evaluation. An answer or note can be deleted by passing an empty object (<code>{}</code>) to the question identifier.
		 * Post contact-evaluations/{InstanceId}/{EvaluationId}
		 * @param {string} InstanceId The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.
		 * @param {string} EvaluationId A unique identifier for the contact evaluation.
		 * @return {UpdateContactEvaluationResponse} Success
		 */
		UpdateContactEvaluation(InstanceId: string, EvaluationId: string, requestBody: UpdateContactEvaluationPostBody): Observable<UpdateContactEvaluationResponse> {
			return this.http.post<UpdateContactEvaluationResponse>(this.baseUri + 'contact-evaluations/' + (InstanceId == null ? '' : encodeURIComponent(InstanceId)) + '/' + (EvaluationId == null ? '' : encodeURIComponent(EvaluationId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a flow for the specified Amazon Connect instance.
		 * Delete contact-flows/{InstanceId}/{ContactFlowId}
		 * @param {string} InstanceId The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.
		 * @param {string} ContactFlowId The identifier of the flow.
		 * @return {DeleteContactFlowResponse} Success
		 */
		DeleteContactFlow(InstanceId: string, ContactFlowId: string): Observable<DeleteContactFlowResponse> {
			return this.http.delete<DeleteContactFlowResponse>(this.baseUri + 'contact-flows/' + (InstanceId == null ? '' : encodeURIComponent(InstanceId)) + '/' + (ContactFlowId == null ? '' : encodeURIComponent(ContactFlowId)), {});
		}

		/**
		 * <p>Describes the specified flow.</p> <p>You can also create and update flows using the <a href="https://docs.aws.amazon.com/connect/latest/APIReference/flow-language.html">Amazon Connect Flow language</a>.</p>
		 * Get contact-flows/{InstanceId}/{ContactFlowId}
		 * @param {string} InstanceId The identifier of the Amazon Connect instance.
		 * @param {string} ContactFlowId The identifier of the flow.
		 * @return {DescribeContactFlowResponse} Success
		 */
		DescribeContactFlow(InstanceId: string, ContactFlowId: string): Observable<DescribeContactFlowResponse> {
			return this.http.get<DescribeContactFlowResponse>(this.baseUri + 'contact-flows/' + (InstanceId == null ? '' : encodeURIComponent(InstanceId)) + '/' + (ContactFlowId == null ? '' : encodeURIComponent(ContactFlowId)), {});
		}

		/**
		 * Deletes the specified flow module.
		 * Delete contact-flow-modules/{InstanceId}/{ContactFlowModuleId}
		 * @param {string} InstanceId The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.
		 * @param {string} ContactFlowModuleId The identifier of the flow module.
		 * @return {DeleteContactFlowModuleResponse} Success
		 */
		DeleteContactFlowModule(InstanceId: string, ContactFlowModuleId: string): Observable<DeleteContactFlowModuleResponse> {
			return this.http.delete<DeleteContactFlowModuleResponse>(this.baseUri + 'contact-flow-modules/' + (InstanceId == null ? '' : encodeURIComponent(InstanceId)) + '/' + (ContactFlowModuleId == null ? '' : encodeURIComponent(ContactFlowModuleId)), {});
		}

		/**
		 * Describes the specified flow module.
		 * Get contact-flow-modules/{InstanceId}/{ContactFlowModuleId}
		 * @param {string} InstanceId The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.
		 * @param {string} ContactFlowModuleId The identifier of the flow module.
		 * @return {DescribeContactFlowModuleResponse} Success
		 */
		DescribeContactFlowModule(InstanceId: string, ContactFlowModuleId: string): Observable<DescribeContactFlowModuleResponse> {
			return this.http.get<DescribeContactFlowModuleResponse>(this.baseUri + 'contact-flow-modules/' + (InstanceId == null ? '' : encodeURIComponent(InstanceId)) + '/' + (ContactFlowModuleId == null ? '' : encodeURIComponent(ContactFlowModuleId)), {});
		}

		/**
		 * <p>Deletes an evaluation form in the specified Amazon Connect instance. </p> <ul> <li> <p>If the version property is provided, only the specified version of the evaluation form is deleted.</p> </li> <li> <p>If no version is provided, then the full form (all versions) is deleted.</p> </li> </ul>
		 * Delete evaluation-forms/{InstanceId}/{EvaluationFormId}
		 * @param {string} InstanceId The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.
		 * @param {string} EvaluationFormId The unique identifier for the evaluation form.
		 * @param {number} version The unique identifier for the evaluation form.
		 * @return {void} Success
		 */
		DeleteEvaluationForm(InstanceId: string, EvaluationFormId: string, version: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'evaluation-forms/' + (InstanceId == null ? '' : encodeURIComponent(InstanceId)) + '/' + (EvaluationFormId == null ? '' : encodeURIComponent(EvaluationFormId)) + '&version=' + version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Describes an evaluation form in the specified Amazon Connect instance. If the version property is not provided, the latest version of the evaluation form is described.
		 * Get evaluation-forms/{InstanceId}/{EvaluationFormId}
		 * @param {string} InstanceId The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.
		 * @param {string} EvaluationFormId A unique identifier for the contact evaluation.
		 * @param {number} version A version of the evaluation form.
		 * @return {DescribeEvaluationFormResponse} Success
		 */
		DescribeEvaluationForm(InstanceId: string, EvaluationFormId: string, version: number | null | undefined): Observable<DescribeEvaluationFormResponse> {
			return this.http.get<DescribeEvaluationFormResponse>(this.baseUri + 'evaluation-forms/' + (InstanceId == null ? '' : encodeURIComponent(InstanceId)) + '/' + (EvaluationFormId == null ? '' : encodeURIComponent(EvaluationFormId)) + '&version=' + version, {});
		}

		/**
		 * <p>Updates details about a specific evaluation form version in the specified Amazon Connect instance. Question and section identifiers cannot be duplicated within the same evaluation form.</p> <p>This operation does not support partial updates. Instead it does a full update of evaluation form content.</p>
		 * Put evaluation-forms/{InstanceId}/{EvaluationFormId}
		 * @param {string} InstanceId The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.
		 * @param {string} EvaluationFormId The unique identifier for the evaluation form.
		 * @return {UpdateEvaluationFormResponse} Success
		 */
		UpdateEvaluationForm(InstanceId: string, EvaluationFormId: string, requestBody: UpdateEvaluationFormPutBody): Observable<UpdateEvaluationFormResponse> {
			return this.http.put<UpdateEvaluationFormResponse>(this.baseUri + 'evaluation-forms/' + (InstanceId == null ? '' : encodeURIComponent(InstanceId)) + '/' + (EvaluationFormId == null ? '' : encodeURIComponent(EvaluationFormId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>This API is in preview release for Amazon Connect and is subject to change.</p> <p>Deletes an hours of operation.</p>
		 * Delete hours-of-operations/{InstanceId}/{HoursOfOperationId}
		 * @param {string} InstanceId The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.
		 * @param {string} HoursOfOperationId The identifier for the hours of operation.
		 * @return {void} Success
		 */
		DeleteHoursOfOperation(InstanceId: string, HoursOfOperationId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'hours-of-operations/' + (InstanceId == null ? '' : encodeURIComponent(InstanceId)) + '/' + (HoursOfOperationId == null ? '' : encodeURIComponent(HoursOfOperationId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>This API is in preview release for Amazon Connect and is subject to change.</p> <p>Describes the hours of operation.</p>
		 * Get hours-of-operations/{InstanceId}/{HoursOfOperationId}
		 * @param {string} InstanceId The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.
		 * @param {string} HoursOfOperationId The identifier for the hours of operation.
		 * @return {DescribeHoursOfOperationResponse} Success
		 */
		DescribeHoursOfOperation(InstanceId: string, HoursOfOperationId: string): Observable<DescribeHoursOfOperationResponse> {
			return this.http.get<DescribeHoursOfOperationResponse>(this.baseUri + 'hours-of-operations/' + (InstanceId == null ? '' : encodeURIComponent(InstanceId)) + '/' + (HoursOfOperationId == null ? '' : encodeURIComponent(HoursOfOperationId)), {});
		}

		/**
		 * <p>This API is in preview release for Amazon Connect and is subject to change.</p> <p>Updates the hours of operation.</p>
		 * Post hours-of-operations/{InstanceId}/{HoursOfOperationId}
		 * @param {string} InstanceId The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.
		 * @param {string} HoursOfOperationId The identifier of the hours of operation.
		 * @return {void} Success
		 */
		UpdateHoursOfOperation(InstanceId: string, HoursOfOperationId: string, requestBody: UpdateHoursOfOperationPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'hours-of-operations/' + (InstanceId == null ? '' : encodeURIComponent(InstanceId)) + '/' + (HoursOfOperationId == null ? '' : encodeURIComponent(HoursOfOperationId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>This API is in preview release for Amazon Connect and is subject to change.</p> <p>Deletes the Amazon Connect instance.</p> <p>Amazon Connect enforces a limit on the total number of instances that you can create or delete in 30 days. If you exceed this limit, you will get an error message indicating there has been an excessive number of attempts at creating or deleting instances. You must wait 30 days before you can restart creating and deleting instances in your account.</p>
		 * Delete instance/{InstanceId}
		 * @param {string} InstanceId The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.
		 * @return {void} Success
		 */
		DeleteInstance(InstanceId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'instance/' + (InstanceId == null ? '' : encodeURIComponent(InstanceId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>This API is in preview release for Amazon Connect and is subject to change.</p> <p>Returns the current state of the specified instance identifier. It tracks the instance while it is being created and returns an error status, if applicable. </p> <p>If an instance is not created successfully, the instance status reason field returns details relevant to the reason. The instance in a failed state is returned only for 24 hours after the CreateInstance API was invoked.</p>
		 * Get instance/{InstanceId}
		 * @param {string} InstanceId The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.
		 * @return {DescribeInstanceResponse} Success
		 */
		DescribeInstance(InstanceId: string): Observable<DescribeInstanceResponse> {
			return this.http.get<DescribeInstanceResponse>(this.baseUri + 'instance/' + (InstanceId == null ? '' : encodeURIComponent(InstanceId)), {});
		}

		/**
		 * Deletes an Amazon Web Services resource association from an Amazon Connect instance. The association must not have any use cases associated with it.
		 * Delete instance/{InstanceId}/integration-associations/{IntegrationAssociationId}
		 * @param {string} InstanceId The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.
		 * @param {string} IntegrationAssociationId The identifier for the integration association.
		 * @return {void} Success
		 */
		DeleteIntegrationAssociation(InstanceId: string, IntegrationAssociationId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'instance/' + (InstanceId == null ? '' : encodeURIComponent(InstanceId)) + '/integration-associations/' + (IntegrationAssociationId == null ? '' : encodeURIComponent(IntegrationAssociationId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a prompt.
		 * Delete prompts/{InstanceId}/{PromptId}
		 * @param {string} InstanceId The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.
		 * @param {string} PromptId A unique identifier for the prompt.
		 * @return {void} Success
		 */
		DeletePrompt(InstanceId: string, PromptId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'prompts/' + (InstanceId == null ? '' : encodeURIComponent(InstanceId)) + '/' + (PromptId == null ? '' : encodeURIComponent(PromptId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Describes the prompt.
		 * Get prompts/{InstanceId}/{PromptId}
		 * @param {string} InstanceId The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.
		 * @param {string} PromptId A unique identifier for the prompt.
		 * @return {DescribePromptResponse} Success
		 */
		DescribePrompt(InstanceId: string, PromptId: string): Observable<DescribePromptResponse> {
			return this.http.get<DescribePromptResponse>(this.baseUri + 'prompts/' + (InstanceId == null ? '' : encodeURIComponent(InstanceId)) + '/' + (PromptId == null ? '' : encodeURIComponent(PromptId)), {});
		}

		/**
		 * Updates a prompt.
		 * Post prompts/{InstanceId}/{PromptId}
		 * @param {string} InstanceId The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.
		 * @param {string} PromptId A unique identifier for the prompt.
		 * @return {UpdatePromptResponse} Success
		 */
		UpdatePrompt(InstanceId: string, PromptId: string, requestBody: UpdatePromptPostBody): Observable<UpdatePromptResponse> {
			return this.http.post<UpdatePromptResponse>(this.baseUri + 'prompts/' + (InstanceId == null ? '' : encodeURIComponent(InstanceId)) + '/' + (PromptId == null ? '' : encodeURIComponent(PromptId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a queue.
		 * Delete queues/{InstanceId}/{QueueId}
		 * @param {string} InstanceId The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.
		 * @param {string} QueueId The identifier for the queue.
		 * @return {void} Success
		 */
		DeleteQueue(InstanceId: string, QueueId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'queues/' + (InstanceId == null ? '' : encodeURIComponent(InstanceId)) + '/' + (QueueId == null ? '' : encodeURIComponent(QueueId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>This API is in preview release for Amazon Connect and is subject to change.</p> <p>Describes the specified queue.</p>
		 * Get queues/{InstanceId}/{QueueId}
		 * @param {string} InstanceId The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.
		 * @param {string} QueueId The identifier for the queue.
		 * @return {DescribeQueueResponse} Success
		 */
		DescribeQueue(InstanceId: string, QueueId: string): Observable<DescribeQueueResponse> {
			return this.http.get<DescribeQueueResponse>(this.baseUri + 'queues/' + (InstanceId == null ? '' : encodeURIComponent(InstanceId)) + '/' + (QueueId == null ? '' : encodeURIComponent(QueueId)), {});
		}

		/**
		 * Deletes a quick connect.
		 * Delete quick-connects/{InstanceId}/{QuickConnectId}
		 * @param {string} InstanceId The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.
		 * @param {string} QuickConnectId The identifier for the quick connect.
		 * @return {void} Success
		 */
		DeleteQuickConnect(InstanceId: string, QuickConnectId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'quick-connects/' + (InstanceId == null ? '' : encodeURIComponent(InstanceId)) + '/' + (QuickConnectId == null ? '' : encodeURIComponent(QuickConnectId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Describes the quick connect.
		 * Get quick-connects/{InstanceId}/{QuickConnectId}
		 * @param {string} InstanceId The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.
		 * @param {string} QuickConnectId The identifier for the quick connect.
		 * @return {DescribeQuickConnectResponse} Success
		 */
		DescribeQuickConnect(InstanceId: string, QuickConnectId: string): Observable<DescribeQuickConnectResponse> {
			return this.http.get<DescribeQuickConnectResponse>(this.baseUri + 'quick-connects/' + (InstanceId == null ? '' : encodeURIComponent(InstanceId)) + '/' + (QuickConnectId == null ? '' : encodeURIComponent(QuickConnectId)), {});
		}

		/**
		 * Deletes a routing profile.
		 * Delete routing-profiles/{InstanceId}/{RoutingProfileId}
		 * @param {string} InstanceId The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.
		 * @param {string} RoutingProfileId The identifier of the routing profile.
		 * @return {void} Success
		 */
		DeleteRoutingProfile(InstanceId: string, RoutingProfileId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'routing-profiles/' + (InstanceId == null ? '' : encodeURIComponent(InstanceId)) + '/' + (RoutingProfileId == null ? '' : encodeURIComponent(RoutingProfileId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Describes the specified routing profile.
		 * Get routing-profiles/{InstanceId}/{RoutingProfileId}
		 * @param {string} InstanceId The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.
		 * @param {string} RoutingProfileId The identifier of the routing profile.
		 * @return {DescribeRoutingProfileResponse} Success
		 */
		DescribeRoutingProfile(InstanceId: string, RoutingProfileId: string): Observable<DescribeRoutingProfileResponse> {
			return this.http.get<DescribeRoutingProfileResponse>(this.baseUri + 'routing-profiles/' + (InstanceId == null ? '' : encodeURIComponent(InstanceId)) + '/' + (RoutingProfileId == null ? '' : encodeURIComponent(RoutingProfileId)), {});
		}

		/**
		 * Deletes a rule for the specified Amazon Connect instance.
		 * Delete rules/{InstanceId}/{RuleId}
		 * @param {string} InstanceId The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.
		 * @param {string} RuleId A unique identifier for the rule.
		 * @return {void} Success
		 */
		DeleteRule(InstanceId: string, RuleId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'rules/' + (InstanceId == null ? '' : encodeURIComponent(InstanceId)) + '/' + (RuleId == null ? '' : encodeURIComponent(RuleId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Describes a rule for the specified Amazon Connect instance.
		 * Get rules/{InstanceId}/{RuleId}
		 * @param {string} InstanceId The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.
		 * @param {string} RuleId A unique identifier for the rule.
		 * @return {DescribeRuleResponse} Success
		 */
		DescribeRule(InstanceId: string, RuleId: string): Observable<DescribeRuleResponse> {
			return this.http.get<DescribeRuleResponse>(this.baseUri + 'rules/' + (InstanceId == null ? '' : encodeURIComponent(InstanceId)) + '/' + (RuleId == null ? '' : encodeURIComponent(RuleId)), {});
		}

		/**
		 * <p>Updates a rule for the specified Amazon Connect instance.</p> <p>Use the <a href="https://docs.aws.amazon.com/connect/latest/APIReference/connect-rules-language.html">Rules Function language</a> to code conditions for the rule. </p>
		 * Put rules/{InstanceId}/{RuleId}
		 * @param {string} RuleId A unique identifier for the rule.
		 * @param {string} InstanceId The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.
		 * @return {void} Success
		 */
		UpdateRule(RuleId: string, InstanceId: string, requestBody: UpdateRulePutBody): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'rules/' + (InstanceId == null ? '' : encodeURIComponent(InstanceId)) + '/' + (RuleId == null ? '' : encodeURIComponent(RuleId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>This API is in preview release for Amazon Connect and is subject to change.</p> <p>Deletes a security profile.</p>
		 * Delete security-profiles/{InstanceId}/{SecurityProfileId}
		 * @param {string} InstanceId The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.
		 * @param {string} SecurityProfileId The identifier for the security profle.
		 * @return {void} Success
		 */
		DeleteSecurityProfile(InstanceId: string, SecurityProfileId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'security-profiles/' + (InstanceId == null ? '' : encodeURIComponent(InstanceId)) + '/' + (SecurityProfileId == null ? '' : encodeURIComponent(SecurityProfileId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>This API is in preview release for Amazon Connect and is subject to change.</p> <p>Gets basic information about the security profle.</p>
		 * Get security-profiles/{InstanceId}/{SecurityProfileId}
		 * @param {string} SecurityProfileId The identifier for the security profle.
		 * @param {string} InstanceId The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.
		 * @return {DescribeSecurityProfileResponse} Success
		 */
		DescribeSecurityProfile(SecurityProfileId: string, InstanceId: string): Observable<DescribeSecurityProfileResponse> {
			return this.http.get<DescribeSecurityProfileResponse>(this.baseUri + 'security-profiles/' + (InstanceId == null ? '' : encodeURIComponent(InstanceId)) + '/' + (SecurityProfileId == null ? '' : encodeURIComponent(SecurityProfileId)), {});
		}

		/**
		 * <p>This API is in preview release for Amazon Connect and is subject to change.</p> <p>Updates a security profile.</p>
		 * Post security-profiles/{InstanceId}/{SecurityProfileId}
		 * @param {string} SecurityProfileId The identifier for the security profle.
		 * @param {string} InstanceId The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.
		 * @return {void} Success
		 */
		UpdateSecurityProfile(SecurityProfileId: string, InstanceId: string, requestBody: UpdateSecurityProfilePostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'security-profiles/' + (InstanceId == null ? '' : encodeURIComponent(InstanceId)) + '/' + (SecurityProfileId == null ? '' : encodeURIComponent(SecurityProfileId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes the task template.
		 * Delete instance/{InstanceId}/task/template/{TaskTemplateId}
		 * @param {string} InstanceId The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.
		 * @param {string} TaskTemplateId A unique identifier for the task template.
		 * @return {DeleteTaskTemplateResponse} Success
		 */
		DeleteTaskTemplate(InstanceId: string, TaskTemplateId: string): Observable<DeleteTaskTemplateResponse> {
			return this.http.delete<DeleteTaskTemplateResponse>(this.baseUri + 'instance/' + (InstanceId == null ? '' : encodeURIComponent(InstanceId)) + '/task/template/' + (TaskTemplateId == null ? '' : encodeURIComponent(TaskTemplateId)), {});
		}

		/**
		 * Gets details about a specific task template in the specified Amazon Connect instance.
		 * Get instance/{InstanceId}/task/template/{TaskTemplateId}
		 * @param {string} InstanceId The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.
		 * @param {string} TaskTemplateId A unique identifier for the task template.
		 * @param {string} snapshotVersion The system generated version of a task template that is associated with a task, when the task is created.
		 * @return {GetTaskTemplateResponse} Success
		 */
		GetTaskTemplate(InstanceId: string, TaskTemplateId: string, snapshotVersion: string | null | undefined): Observable<GetTaskTemplateResponse> {
			return this.http.get<GetTaskTemplateResponse>(this.baseUri + 'instance/' + (InstanceId == null ? '' : encodeURIComponent(InstanceId)) + '/task/template/' + (TaskTemplateId == null ? '' : encodeURIComponent(TaskTemplateId)) + '&snapshotVersion=' + (snapshotVersion == null ? '' : encodeURIComponent(snapshotVersion)), {});
		}

		/**
		 * Updates details about a specific task template in the specified Amazon Connect instance. This operation does not support partial updates. Instead it does a full update of template content.
		 * Post instance/{InstanceId}/task/template/{TaskTemplateId}
		 * @param {string} TaskTemplateId A unique identifier for the task template.
		 * @param {string} InstanceId The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.
		 * @return {UpdateTaskTemplateResponse} Success
		 */
		UpdateTaskTemplate(TaskTemplateId: string, InstanceId: string, requestBody: UpdateTaskTemplatePostBody): Observable<UpdateTaskTemplateResponse> {
			return this.http.post<UpdateTaskTemplateResponse>(this.baseUri + 'instance/' + (InstanceId == null ? '' : encodeURIComponent(InstanceId)) + '/task/template/' + (TaskTemplateId == null ? '' : encodeURIComponent(TaskTemplateId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes a traffic distribution group. This API can be called only in the Region where the traffic distribution group is created.</p> <p>For more information about deleting traffic distribution groups, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/delete-traffic-distribution-groups.html">Delete traffic distribution groups</a> in the <i>Amazon Connect Administrator Guide</i>.</p>
		 * Delete traffic-distribution-group/{TrafficDistributionGroupId}
		 * @param {string} TrafficDistributionGroupId The identifier of the traffic distribution group. This can be the ID or the ARN if the API is being called in the Region where the traffic distribution group was created. The ARN must be provided if the call is from the replicated Region.
		 * @return {DeleteTrafficDistributionGroupResponse} Success
		 */
		DeleteTrafficDistributionGroup(TrafficDistributionGroupId: string): Observable<DeleteTrafficDistributionGroupResponse> {
			return this.http.delete<DeleteTrafficDistributionGroupResponse>(this.baseUri + 'traffic-distribution-group/' + (TrafficDistributionGroupId == null ? '' : encodeURIComponent(TrafficDistributionGroupId)), {});
		}

		/**
		 * Gets details and status of a traffic distribution group.
		 * Get traffic-distribution-group/{TrafficDistributionGroupId}
		 * @param {string} TrafficDistributionGroupId The identifier of the traffic distribution group. This can be the ID or the ARN if the API is being called in the Region where the traffic distribution group was created. The ARN must be provided if the call is from the replicated Region.
		 * @return {DescribeTrafficDistributionGroupResponse} Success
		 */
		DescribeTrafficDistributionGroup(TrafficDistributionGroupId: string): Observable<DescribeTrafficDistributionGroupResponse> {
			return this.http.get<DescribeTrafficDistributionGroupResponse>(this.baseUri + 'traffic-distribution-group/' + (TrafficDistributionGroupId == null ? '' : encodeURIComponent(TrafficDistributionGroupId)), {});
		}

		/**
		 * Deletes a use case from an integration association.
		 * Delete instance/{InstanceId}/integration-associations/{IntegrationAssociationId}/use-cases/{UseCaseId}
		 * @param {string} InstanceId The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.
		 * @param {string} IntegrationAssociationId The identifier for the integration association.
		 * @param {string} UseCaseId The identifier for the use case.
		 * @return {void} Success
		 */
		DeleteUseCase(InstanceId: string, IntegrationAssociationId: string, UseCaseId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'instance/' + (InstanceId == null ? '' : encodeURIComponent(InstanceId)) + '/integration-associations/' + (IntegrationAssociationId == null ? '' : encodeURIComponent(IntegrationAssociationId)) + '/use-cases/' + (UseCaseId == null ? '' : encodeURIComponent(UseCaseId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Deletes a user account from the specified Amazon Connect instance.</p> <p>For information about what happens to a user's data when their account is deleted, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/delete-users.html">Delete Users from Your Amazon Connect Instance</a> in the <i>Amazon Connect Administrator Guide</i>.</p>
		 * Delete users/{InstanceId}/{UserId}
		 * @param {string} InstanceId The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.
		 * @param {string} UserId The identifier of the user.
		 * @return {void} Success
		 */
		DeleteUser(InstanceId: string, UserId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'users/' + (InstanceId == null ? '' : encodeURIComponent(InstanceId)) + '/' + (UserId == null ? '' : encodeURIComponent(UserId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Describes the specified user account. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID in the Amazon Connect console</a> (it’s the final part of the ARN). The console does not display the user IDs. Instead, list the users and note the IDs provided in the output.
		 * Get users/{InstanceId}/{UserId}
		 * @param {string} UserId The identifier of the user account.
		 * @param {string} InstanceId The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.
		 * @return {DescribeUserResponse} Success
		 */
		DescribeUser(UserId: string, InstanceId: string): Observable<DescribeUserResponse> {
			return this.http.get<DescribeUserResponse>(this.baseUri + 'users/' + (InstanceId == null ? '' : encodeURIComponent(InstanceId)) + '/' + (UserId == null ? '' : encodeURIComponent(UserId)), {});
		}

		/**
		 * Deletes an existing user hierarchy group. It must not be associated with any agents or have any active child groups.
		 * Delete user-hierarchy-groups/{InstanceId}/{HierarchyGroupId}
		 * @param {string} HierarchyGroupId The identifier of the hierarchy group.
		 * @param {string} InstanceId The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.
		 * @return {void} Success
		 */
		DeleteUserHierarchyGroup(HierarchyGroupId: string, InstanceId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'user-hierarchy-groups/' + (InstanceId == null ? '' : encodeURIComponent(InstanceId)) + '/' + (HierarchyGroupId == null ? '' : encodeURIComponent(HierarchyGroupId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Describes the specified hierarchy group.
		 * Get user-hierarchy-groups/{InstanceId}/{HierarchyGroupId}
		 * @param {string} HierarchyGroupId The identifier of the hierarchy group.
		 * @param {string} InstanceId The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.
		 * @return {DescribeUserHierarchyGroupResponse} Success
		 */
		DescribeUserHierarchyGroup(HierarchyGroupId: string, InstanceId: string): Observable<DescribeUserHierarchyGroupResponse> {
			return this.http.get<DescribeUserHierarchyGroupResponse>(this.baseUri + 'user-hierarchy-groups/' + (InstanceId == null ? '' : encodeURIComponent(InstanceId)) + '/' + (HierarchyGroupId == null ? '' : encodeURIComponent(HierarchyGroupId)), {});
		}

		/**
		 * Deletes the vocabulary that has the given identifier.
		 * Post vocabulary-remove/{InstanceId}/{VocabularyId}
		 * @param {string} InstanceId The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.
		 * @param {string} VocabularyId The identifier of the custom vocabulary.
		 * @return {DeleteVocabularyResponse} Success
		 */
		DeleteVocabulary(InstanceId: string, VocabularyId: string): Observable<DeleteVocabularyResponse> {
			return this.http.post<DeleteVocabularyResponse>(this.baseUri + 'vocabulary-remove/' + (InstanceId == null ? '' : encodeURIComponent(InstanceId)) + '/' + (VocabularyId == null ? '' : encodeURIComponent(VocabularyId)), null, {});
		}

		/**
		 * <p>This API is in preview release for Amazon Connect and is subject to change.</p> <p>Describes an agent status.</p>
		 * Get agent-status/{InstanceId}/{AgentStatusId}
		 * @param {string} InstanceId The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.
		 * @param {string} AgentStatusId The identifier for the agent status.
		 * @return {DescribeAgentStatusResponse} Success
		 */
		DescribeAgentStatus(InstanceId: string, AgentStatusId: string): Observable<DescribeAgentStatusResponse> {
			return this.http.get<DescribeAgentStatusResponse>(this.baseUri + 'agent-status/' + (InstanceId == null ? '' : encodeURIComponent(InstanceId)) + '/' + (AgentStatusId == null ? '' : encodeURIComponent(AgentStatusId)), {});
		}

		/**
		 * <p>This API is in preview release for Amazon Connect and is subject to change.</p> <p>Updates agent status.</p>
		 * Post agent-status/{InstanceId}/{AgentStatusId}
		 * @param {string} InstanceId The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.
		 * @param {string} AgentStatusId The identifier of the agent status.
		 * @return {void} Success
		 */
		UpdateAgentStatus(InstanceId: string, AgentStatusId: string, requestBody: UpdateAgentStatusPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'agent-status/' + (InstanceId == null ? '' : encodeURIComponent(InstanceId)) + '/' + (AgentStatusId == null ? '' : encodeURIComponent(AgentStatusId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>This API is in preview release for Amazon Connect and is subject to change.</p> <p>Describes the specified contact. </p> <important> <p>Contact information remains available in Amazon Connect for 24 months, and then it is deleted.</p> <p>Only data from November 12, 2021, and later is returned by this API.</p> </important>
		 * Get contacts/{InstanceId}/{ContactId}
		 * @param {string} InstanceId The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.
		 * @param {string} ContactId The identifier of the contact.
		 * @return {DescribeContactResponse} Success
		 */
		DescribeContact(InstanceId: string, ContactId: string): Observable<DescribeContactResponse> {
			return this.http.get<DescribeContactResponse>(this.baseUri + 'contacts/' + (InstanceId == null ? '' : encodeURIComponent(InstanceId)) + '/' + (ContactId == null ? '' : encodeURIComponent(ContactId)), {});
		}

		/**
		 * <p>This API is in preview release for Amazon Connect and is subject to change.</p> <p>Adds or updates user-defined contact information associated with the specified contact. At least one field to be updated must be present in the request.</p> <important> <p>You can add or update user-defined contact information for both ongoing and completed contacts.</p> </important>
		 * Post contacts/{InstanceId}/{ContactId}
		 * @param {string} InstanceId The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.
		 * @param {string} ContactId The identifier of the contact. This is the identifier of the contact associated with the first interaction with your contact center.
		 * @return {UpdateContactResponse} Success
		 */
		UpdateContact(InstanceId: string, ContactId: string, requestBody: UpdateContactPostBody): Observable<UpdateContactResponse> {
			return this.http.post<UpdateContactResponse>(this.baseUri + 'contacts/' + (InstanceId == null ? '' : encodeURIComponent(InstanceId)) + '/' + (ContactId == null ? '' : encodeURIComponent(ContactId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>This API is in preview release for Amazon Connect and is subject to change.</p> <p>Describes the specified instance attribute.</p>
		 * Get instance/{InstanceId}/attribute/{AttributeType}
		 * @param {string} InstanceId The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.
		 * @param {InstanceAttributeType} AttributeType The type of attribute.
		 * @return {DescribeInstanceAttributeResponse} Success
		 */
		DescribeInstanceAttribute(InstanceId: string, AttributeType: InstanceAttributeType): Observable<DescribeInstanceAttributeResponse> {
			return this.http.get<DescribeInstanceAttributeResponse>(this.baseUri + 'instance/' + (InstanceId == null ? '' : encodeURIComponent(InstanceId)) + '/attribute/' + AttributeType, {});
		}

		/**
		 * <p>This API is in preview release for Amazon Connect and is subject to change.</p> <p>Updates the value for the specified attribute type.</p>
		 * Post instance/{InstanceId}/attribute/{AttributeType}
		 * @param {string} InstanceId The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.
		 * @param {InstanceAttributeType} AttributeType <p>The type of attribute.</p> <note> <p>Only allowlisted customers can consume USE_CUSTOM_TTS_VOICES. To access this feature, contact Amazon Web Services Support for allowlisting.</p> </note>
		 * @return {void} Success
		 */
		UpdateInstanceAttribute(InstanceId: string, AttributeType: InstanceAttributeType, requestBody: UpdateInstanceAttributePostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'instance/' + (InstanceId == null ? '' : encodeURIComponent(InstanceId)) + '/attribute/' + AttributeType, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>This API is in preview release for Amazon Connect and is subject to change.</p> <p>Retrieves the current storage configurations for the specified resource type, association ID, and instance ID.</p>
		 * Get instance/{InstanceId}/storage-config/{AssociationId}#resourceType
		 * @param {string} InstanceId The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.
		 * @param {string} AssociationId The existing association identifier that uniquely identifies the resource type and storage config for the given instance ID.
		 * @param {InstanceStorageResourceType} resourceType A valid resource type.
		 * @return {DescribeInstanceStorageConfigResponse} Success
		 */
		DescribeInstanceStorageConfig(InstanceId: string, AssociationId: string, resourceType: InstanceStorageResourceType): Observable<DescribeInstanceStorageConfigResponse> {
			return this.http.get<DescribeInstanceStorageConfigResponse>(this.baseUri + 'instance/' + (InstanceId == null ? '' : encodeURIComponent(InstanceId)) + '/storage-config/' + (AssociationId == null ? '' : encodeURIComponent(AssociationId)) + '#resourceType&resourceType=' + resourceType, {});
		}

		/**
		 * <p>This API is in preview release for Amazon Connect and is subject to change.</p> <p>Removes the storage type configurations for the specified resource type and association ID.</p>
		 * Delete instance/{InstanceId}/storage-config/{AssociationId}#resourceType
		 * @param {string} InstanceId The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.
		 * @param {string} AssociationId The existing association identifier that uniquely identifies the resource type and storage config for the given instance ID.
		 * @param {InstanceStorageResourceType} resourceType A valid resource type.
		 * @return {void} Success
		 */
		DisassociateInstanceStorageConfig(InstanceId: string, AssociationId: string, resourceType: InstanceStorageResourceType): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'instance/' + (InstanceId == null ? '' : encodeURIComponent(InstanceId)) + '/storage-config/' + (AssociationId == null ? '' : encodeURIComponent(AssociationId)) + '#resourceType&resourceType=' + resourceType, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>This API is in preview release for Amazon Connect and is subject to change.</p> <p>Updates an existing configuration for a resource type. This API is idempotent.</p>
		 * Post instance/{InstanceId}/storage-config/{AssociationId}#resourceType
		 * @param {string} InstanceId The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.
		 * @param {string} AssociationId The existing association identifier that uniquely identifies the resource type and storage config for the given instance ID.
		 * @param {InstanceStorageResourceType} resourceType A valid resource type.
		 * @return {void} Success
		 */
		UpdateInstanceStorageConfig(InstanceId: string, AssociationId: string, resourceType: InstanceStorageResourceType, requestBody: UpdateInstanceStorageConfigPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'instance/' + (InstanceId == null ? '' : encodeURIComponent(InstanceId)) + '/storage-config/' + (AssociationId == null ? '' : encodeURIComponent(AssociationId)) + '#resourceType&resourceType=' + resourceType, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Gets details and status of a phone number that’s claimed to your Amazon Connect instance or traffic distribution group.</p> <important> <p>If the number is claimed to a traffic distribution group, and you are calling in the Amazon Web Services Region where the traffic distribution group was created, you can use either a phone number ARN or UUID value for the <code>PhoneNumberId</code> URI request parameter. However, if the number is claimed to a traffic distribution group and you are calling this API in the alternate Amazon Web Services Region associated with the traffic distribution group, you must provide a full phone number ARN. If a UUID is provided in this scenario, you will receive a <code>ResourceNotFoundException</code>.</p> </important>
		 * Get phone-number/{PhoneNumberId}
		 * @param {string} PhoneNumberId A unique identifier for the phone number.
		 * @return {DescribePhoneNumberResponse} Success
		 */
		DescribePhoneNumber(PhoneNumberId: string): Observable<DescribePhoneNumberResponse> {
			return this.http.get<DescribePhoneNumberResponse>(this.baseUri + 'phone-number/' + (PhoneNumberId == null ? '' : encodeURIComponent(PhoneNumberId)), {});
		}

		/**
		 * <p>Releases a phone number previously claimed to an Amazon Connect instance or traffic distribution group. You can call this API only in the Amazon Web Services Region where the number was claimed.</p> <important> <p>To release phone numbers from a traffic distribution group, use the <code>ReleasePhoneNumber</code> API, not the Amazon Connect console.</p> <p>After releasing a phone number, the phone number enters into a cooldown period of 30 days. It cannot be searched for or claimed again until the period has ended. If you accidentally release a phone number, contact Amazon Web Services Support.</p> </important> <p>If you plan to claim and release numbers frequently during a 30 day period, contact us for a service quota exception. Otherwise, it is possible you will be blocked from claiming and releasing any more numbers until 30 days past the oldest number released has expired.</p> <p>By default you can claim and release up to 200% of your maximum number of active phone numbers during any 30 day period. If you claim and release phone numbers using the UI or API during a rolling 30 day cycle that exceeds 200% of your phone number service level quota, you will be blocked from claiming any more numbers until 30 days past the oldest number released has expired. </p> <p>For example, if you already have 99 claimed numbers and a service level quota of 99 phone numbers, and in any 30 day period you release 99, claim 99, and then release 99, you will have exceeded the 200% limit. At that point you are blocked from claiming any more numbers until you open an Amazon Web Services support ticket.</p>
		 * Delete phone-number/{PhoneNumberId}
		 * @param {string} PhoneNumberId A unique identifier for the phone number.
		 * @param {string} clientToken A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.
		 * @return {void} Success
		 */
		ReleasePhoneNumber(PhoneNumberId: string, clientToken: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'phone-number/' + (PhoneNumberId == null ? '' : encodeURIComponent(PhoneNumberId)) + '&clientToken=' + (clientToken == null ? '' : encodeURIComponent(clientToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Updates your claimed phone number from its current Amazon Connect instance or traffic distribution group to another Amazon Connect instance or traffic distribution group in the same Amazon Web Services Region.</p> <important> <p>After using this API, you must verify that the phone number is attached to the correct flow in the target instance or traffic distribution group. You need to do this because the API switches only the phone number to a new instance or traffic distribution group. It doesn't migrate the flow configuration of the phone number, too.</p> <p>You can call <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_DescribePhoneNumber.html">DescribePhoneNumber</a> API to verify the status of a previous <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_UpdatePhoneNumber.html">UpdatePhoneNumber</a> operation.</p> </important>
		 * Put phone-number/{PhoneNumberId}
		 * @param {string} PhoneNumberId A unique identifier for the phone number.
		 * @return {UpdatePhoneNumberResponse} Success
		 */
		UpdatePhoneNumber(PhoneNumberId: string, requestBody: UpdatePhoneNumberPutBody): Observable<UpdatePhoneNumberResponse> {
			return this.http.put<UpdatePhoneNumberResponse>(this.baseUri + 'phone-number/' + (PhoneNumberId == null ? '' : encodeURIComponent(PhoneNumberId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describes the hierarchy structure of the specified Amazon Connect instance.
		 * Get user-hierarchy-structure/{InstanceId}
		 * @param {string} InstanceId The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.
		 * @return {DescribeUserHierarchyStructureResponse} Success
		 */
		DescribeUserHierarchyStructure(InstanceId: string): Observable<DescribeUserHierarchyStructureResponse> {
			return this.http.get<DescribeUserHierarchyStructureResponse>(this.baseUri + 'user-hierarchy-structure/' + (InstanceId == null ? '' : encodeURIComponent(InstanceId)), {});
		}

		/**
		 * Updates the user hierarchy structure: add, remove, and rename user hierarchy levels.
		 * Post user-hierarchy-structure/{InstanceId}
		 * @param {string} InstanceId The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.
		 * @return {void} Success
		 */
		UpdateUserHierarchyStructure(InstanceId: string, requestBody: UpdateUserHierarchyStructurePostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'user-hierarchy-structure/' + (InstanceId == null ? '' : encodeURIComponent(InstanceId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Describes the specified vocabulary.
		 * Get vocabulary/{InstanceId}/{VocabularyId}
		 * @param {string} InstanceId The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.
		 * @param {string} VocabularyId The identifier of the custom vocabulary.
		 * @return {DescribeVocabularyResponse} Success
		 */
		DescribeVocabulary(InstanceId: string, VocabularyId: string): Observable<DescribeVocabularyResponse> {
			return this.http.get<DescribeVocabularyResponse>(this.baseUri + 'vocabulary/' + (InstanceId == null ? '' : encodeURIComponent(InstanceId)) + '/' + (VocabularyId == null ? '' : encodeURIComponent(VocabularyId)), {});
		}

		/**
		 * <p>This API is in preview release for Amazon Connect and is subject to change.</p> <p>Revokes access to integrated applications from Amazon Connect.</p>
		 * Delete instance/{InstanceId}/approved-origin#origin
		 * @param {string} InstanceId The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.
		 * @param {string} origin The domain URL of the integrated application.
		 * @return {void} Success
		 */
		DisassociateApprovedOrigin(InstanceId: string, origin: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'instance/' + (InstanceId == null ? '' : encodeURIComponent(InstanceId)) + '/approved-origin#origin&origin=' + (origin == null ? '' : encodeURIComponent(origin)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>This API is in preview release for Amazon Connect and is subject to change.</p> <p>Remove the Lambda function from the dropdown options available in the relevant flow blocks.</p>
		 * Delete instance/{InstanceId}/lambda-function#functionArn
		 * @param {string} InstanceId The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance..
		 * @param {string} functionArn The Amazon Resource Name (ARN) of the Lambda function being disassociated.
		 * @return {void} Success
		 */
		DisassociateLambdaFunction(InstanceId: string, functionArn: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'instance/' + (InstanceId == null ? '' : encodeURIComponent(InstanceId)) + '/lambda-function#functionArn&functionArn=' + (functionArn == null ? '' : encodeURIComponent(functionArn)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>This API is in preview release for Amazon Connect and is subject to change.</p> <p>Revokes authorization from the specified instance to access the specified Amazon Lex bot.</p>
		 * Delete instance/{InstanceId}/lex-bot#botName&lexRegion
		 * @param {string} InstanceId The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.
		 * @param {string} botName The name of the Amazon Lex bot. Maximum character limit of 50.
		 * @param {string} lexRegion The Amazon Web Services Region in which the Amazon Lex bot has been created.
		 * @return {void} Success
		 */
		DisassociateLexBot(InstanceId: string, botName: string, lexRegion: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'instance/' + (InstanceId == null ? '' : encodeURIComponent(InstanceId)) + '/lex-bot#botName&lexRegion&botName=' + (botName == null ? '' : encodeURIComponent(botName)) + '&lexRegion=' + (lexRegion == null ? '' : encodeURIComponent(lexRegion)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Removes the flow association from a phone number claimed to your Amazon Connect instance.</p> <important> <p>If the number is claimed to a traffic distribution group, and you are calling this API using an instance in the Amazon Web Services Region where the traffic distribution group was created, you can use either a full phone number ARN or UUID value for the <code>PhoneNumberId</code> URI request parameter. However, if the number is claimed to a traffic distribution group and you are calling this API using an instance in the alternate Amazon Web Services Region associated with the traffic distribution group, you must provide a full phone number ARN. If a UUID is provided in this scenario, you will receive a <code>ResourceNotFoundException</code>.</p> </important>
		 * Delete phone-number/{PhoneNumberId}/contact-flow#instanceId
		 * @param {string} PhoneNumberId A unique identifier for the phone number.
		 * @param {string} instanceId The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.
		 * @return {void} Success
		 */
		DisassociatePhoneNumberContactFlow(PhoneNumberId: string, instanceId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'phone-number/' + (PhoneNumberId == null ? '' : encodeURIComponent(PhoneNumberId)) + '/contact-flow#instanceId&instanceId=' + (instanceId == null ? '' : encodeURIComponent(instanceId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>This API is in preview release for Amazon Connect and is subject to change.</p> <p>Disassociates a set of quick connects from a queue.</p>
		 * Post queues/{InstanceId}/{QueueId}/disassociate-quick-connects
		 * @param {string} InstanceId The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.
		 * @param {string} QueueId The identifier for the queue.
		 * @return {void} Success
		 */
		DisassociateQueueQuickConnects(InstanceId: string, QueueId: string, requestBody: DisassociateQueueQuickConnectsPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'queues/' + (InstanceId == null ? '' : encodeURIComponent(InstanceId)) + '/' + (QueueId == null ? '' : encodeURIComponent(QueueId)) + '/disassociate-quick-connects', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Disassociates a set of queues from a routing profile.
		 * Post routing-profiles/{InstanceId}/{RoutingProfileId}/disassociate-queues
		 * @param {string} InstanceId The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.
		 * @param {string} RoutingProfileId The identifier of the routing profile.
		 * @return {void} Success
		 */
		DisassociateRoutingProfileQueues(InstanceId: string, RoutingProfileId: string, requestBody: DisassociateRoutingProfileQueuesPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'routing-profiles/' + (InstanceId == null ? '' : encodeURIComponent(InstanceId)) + '/' + (RoutingProfileId == null ? '' : encodeURIComponent(RoutingProfileId)) + '/disassociate-queues', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>This API is in preview release for Amazon Connect and is subject to change.</p> <p>Deletes the specified security key.</p>
		 * Delete instance/{InstanceId}/security-key/{AssociationId}
		 * @param {string} InstanceId The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.
		 * @param {string} AssociationId The existing association identifier that uniquely identifies the resource type and storage config for the given instance ID.
		 * @return {void} Success
		 */
		DisassociateSecurityKey(InstanceId: string, AssociationId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'instance/' + (InstanceId == null ? '' : encodeURIComponent(InstanceId)) + '/security-key/' + (AssociationId == null ? '' : encodeURIComponent(AssociationId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Dismisses contacts from an agent’s CCP and returns the agent to an available state, which allows the agent to receive a new routed contact. Contacts can only be dismissed if they are in a <code>MISSED</code>, <code>ERROR</code>, <code>ENDED</code>, or <code>REJECTED</code> state in the <a href="https://docs.aws.amazon.com/connect/latest/adminguide/about-contact-states.html">Agent Event Stream</a>.
		 * Post users/{InstanceId}/{UserId}/contact
		 * @param {string} UserId The identifier of the user account.
		 * @param {string} InstanceId The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.
		 * @return {DismissUserContactResponse} Success
		 */
		DismissUserContact(UserId: string, InstanceId: string, requestBody: DismissUserContactPostBody): Observable<DismissUserContactResponse> {
			return this.http.post<DismissUserContactResponse>(this.baseUri + 'users/' + (InstanceId == null ? '' : encodeURIComponent(InstanceId)) + '/' + (UserId == null ? '' : encodeURIComponent(UserId)) + '/contact', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves the contact attributes for the specified contact.
		 * Get contact/attributes/{InstanceId}/{InitialContactId}
		 * @param {string} InstanceId The identifier of the Amazon Connect instance.
		 * @param {string} InitialContactId The identifier of the initial contact.
		 * @return {GetContactAttributesResponse} Success
		 */
		GetContactAttributes(InstanceId: string, InitialContactId: string): Observable<GetContactAttributesResponse> {
			return this.http.get<GetContactAttributesResponse>(this.baseUri + 'contact/attributes/' + (InstanceId == null ? '' : encodeURIComponent(InstanceId)) + '/' + (InitialContactId == null ? '' : encodeURIComponent(InitialContactId)), {});
		}

		/**
		 * <p>Gets the real-time metric data from the specified Amazon Connect instance.</p> <p>For a description of each metric, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/real-time-metrics-definitions.html">Real-time Metrics Definitions</a> in the <i>Amazon Connect Administrator Guide</i>.</p>
		 * Post metrics/current/{InstanceId}
		 * @param {string} InstanceId The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {GetCurrentMetricDataResponse} Success
		 */
		GetCurrentMetricData(InstanceId: string, MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: GetCurrentMetricDataPostBody): Observable<GetCurrentMetricDataResponse> {
			return this.http.post<GetCurrentMetricDataResponse>(this.baseUri + 'metrics/current/' + (InstanceId == null ? '' : encodeURIComponent(InstanceId)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the real-time active user data from the specified Amazon Connect instance.
		 * Post metrics/userdata/{InstanceId}
		 * @param {string} InstanceId The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {GetCurrentUserDataResponse} Success
		 */
		GetCurrentUserData(InstanceId: string, MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: GetCurrentUserDataPostBody): Observable<GetCurrentUserDataResponse> {
			return this.http.post<GetCurrentUserDataResponse>(this.baseUri + 'metrics/userdata/' + (InstanceId == null ? '' : encodeURIComponent(InstanceId)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Retrieves a token for federation.</p> <note> <p>This API doesn't support root users. If you try to invoke GetFederationToken with root credentials, an error message similar to the following one appears: </p> <p> <code>Provided identity: Principal: .... User: .... cannot be used for federation with Amazon Connect</code> </p> </note>
		 * Get user/federate/{InstanceId}
		 * @param {string} InstanceId The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.
		 * @return {GetFederationTokenResponse} Success
		 */
		GetFederationToken(InstanceId: string): Observable<GetFederationTokenResponse> {
			return this.http.get<GetFederationTokenResponse>(this.baseUri + 'user/federate/' + (InstanceId == null ? '' : encodeURIComponent(InstanceId)), {});
		}

		/**
		 * <p>Gets historical metric data from the specified Amazon Connect instance.</p> <p>For a description of each historical metric, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/historical-metrics-definitions.html">Historical Metrics Definitions</a> in the <i>Amazon Connect Administrator Guide</i>.</p>
		 * Post metrics/historical/{InstanceId}
		 * @param {string} InstanceId The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {GetMetricDataResponse} Success
		 */
		GetMetricData(InstanceId: string, MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: GetMetricDataPostBody): Observable<GetMetricDataResponse> {
			return this.http.post<GetMetricDataResponse>(this.baseUri + 'metrics/historical/' + (InstanceId == null ? '' : encodeURIComponent(InstanceId)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Gets metric data from the specified Amazon Connect instance. </p> <p> <code>GetMetricDataV2</code> offers more features than <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_GetMetricData.html">GetMetricData</a>, the previous version of this API. It has new metrics, offers filtering at a metric level, and offers the ability to filter and group data by channels, queues, routing profiles, agents, and agent hierarchy levels. It can retrieve historical data for the last 35 days, in 24-hour intervals.</p> <p>For a description of the historical metrics that are supported by <code>GetMetricDataV2</code> and <code>GetMetricData</code>, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/historical-metrics-definitions.html">Historical metrics definitions</a> in the <i>Amazon Connect Administrator's Guide</i>.</p>
		 * Post metrics/data
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {GetMetricDataV2Response} Success
		 */
		GetMetricDataV2(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: GetMetricDataV2PostBody): Observable<GetMetricDataV2Response> {
			return this.http.post<GetMetricDataV2Response>(this.baseUri + 'metrics/data?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the prompt file.
		 * Get prompts/{InstanceId}/{PromptId}/file
		 * @param {string} InstanceId The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.
		 * @param {string} PromptId A unique identifier for the prompt.
		 * @return {GetPromptFileResponse} Success
		 */
		GetPromptFile(InstanceId: string, PromptId: string): Observable<GetPromptFileResponse> {
			return this.http.get<GetPromptFileResponse>(this.baseUri + 'prompts/' + (InstanceId == null ? '' : encodeURIComponent(InstanceId)) + '/' + (PromptId == null ? '' : encodeURIComponent(PromptId)) + '/file', {});
		}

		/**
		 * Retrieves the current traffic distribution for a given traffic distribution group.
		 * Get traffic-distribution/{Id}
		 * @param {string} Id The identifier of the traffic distribution group.
		 * @return {GetTrafficDistributionResponse} Success
		 */
		GetTrafficDistribution(Id: string): Observable<GetTrafficDistributionResponse> {
			return this.http.get<GetTrafficDistributionResponse>(this.baseUri + 'traffic-distribution/' + (Id == null ? '' : encodeURIComponent(Id)), {});
		}

		/**
		 * <p>Updates the traffic distribution for a given traffic distribution group. </p> <p>For more information about updating a traffic distribution group, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/update-telephony-traffic-distribution.html">Update telephony traffic distribution across Amazon Web Services Regions </a> in the <i>Amazon Connect Administrator Guide</i>. </p>
		 * Put traffic-distribution/{Id}
		 * @param {string} Id The identifier of the traffic distribution group. This can be the ID or the ARN if the API is being called in the Region where the traffic distribution group was created. The ARN must be provided if the call is from the replicated Region.
		 * @return {UpdateTrafficDistributionResponse} Success
		 */
		UpdateTrafficDistribution(Id: string, requestBody: UpdateTrafficDistributionPutBody): Observable<UpdateTrafficDistributionResponse> {
			return this.http.put<UpdateTrafficDistributionResponse>(this.baseUri + 'traffic-distribution/' + (Id == null ? '' : encodeURIComponent(Id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>This API is in preview release for Amazon Connect and is subject to change.</p> <p>Returns a paginated list of all approved origins associated with the instance.</p>
		 * Get instance/{InstanceId}/approved-origins
		 * @param {string} InstanceId The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.
		 * @param {string} nextToken The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
		 * @param {number} maxResults The maximum number of results to return per page.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListApprovedOriginsResponse} Success
		 */
		ListApprovedOrigins(InstanceId: string, nextToken: string | null | undefined, maxResults: number | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListApprovedOriginsResponse> {
			return this.http.get<ListApprovedOriginsResponse>(this.baseUri + 'instance/' + (InstanceId == null ? '' : encodeURIComponent(InstanceId)) + '/approved-origins&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * <p>This API is in preview release for Amazon Connect and is subject to change.</p> <p>For the specified version of Amazon Lex, returns a paginated list of all the Amazon Lex bots currently associated with the instance. Use this API to returns both Amazon Lex V1 and V2 bots.</p>
		 * Get instance/{InstanceId}/bots#lexVersion
		 * @param {string} InstanceId The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.
		 * @param {string} nextToken The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
		 * @param {number} maxResults The maximum number of results to return per page.
		 * @param {LexVersion} lexVersion The version of Amazon Lex or Amazon Lex V2.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListBotsResponse} Success
		 */
		ListBots(InstanceId: string, nextToken: string | null | undefined, maxResults: number | null | undefined, lexVersion: LexVersion, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListBotsResponse> {
			return this.http.get<ListBotsResponse>(this.baseUri + 'instance/' + (InstanceId == null ? '' : encodeURIComponent(InstanceId)) + '/bots#lexVersion&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults + '&lexVersion=' + lexVersion + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Lists contact evaluations in the specified Amazon Connect instance.
		 * Get contact-evaluations/{InstanceId}#contactId
		 * @param {string} InstanceId The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.
		 * @param {string} contactId The identifier of the contact in this instance of Amazon Connect. 
		 * @param {string} nextToken <p>The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.</p> <important> <p>This is not expected to be set because the value returned in the previous response is always null.</p> </important>
		 * @param {string} NextToken Pagination token
		 * @return {ListContactEvaluationsResponse} Success
		 */
		ListContactEvaluations(InstanceId: string, contactId: string, nextToken: string | null | undefined, NextToken: string | null | undefined): Observable<ListContactEvaluationsResponse> {
			return this.http.get<ListContactEvaluationsResponse>(this.baseUri + 'contact-evaluations/' + (InstanceId == null ? '' : encodeURIComponent(InstanceId)) + '#contactId&contactId=' + (contactId == null ? '' : encodeURIComponent(contactId)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Provides information about the flow modules for the specified Amazon Connect instance.
		 * Get contact-flow-modules-summary/{InstanceId}
		 * @param {string} InstanceId The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.
		 * @param {string} nextToken The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
		 * @param {number} maxResults The maximum number of results to return per page.
		 * @param {ContactFlowState} state The state of the flow module.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListContactFlowModulesResponse} Success
		 */
		ListContactFlowModules(InstanceId: string, nextToken: string | null | undefined, maxResults: number | null | undefined, state: ContactFlowState | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListContactFlowModulesResponse> {
			return this.http.get<ListContactFlowModulesResponse>(this.baseUri + 'contact-flow-modules-summary/' + (InstanceId == null ? '' : encodeURIComponent(InstanceId)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults + '&state=' + state + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * <p>Provides information about the flows for the specified Amazon Connect instance.</p> <p>You can also create and update flows using the <a href="https://docs.aws.amazon.com/connect/latest/APIReference/flow-language.html">Amazon Connect Flow language</a>.</p> <p>For more information about flows, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/concepts-contact-flows.html">Flows</a> in the <i>Amazon Connect Administrator Guide</i>.</p>
		 * Get contact-flows-summary/{InstanceId}
		 * @param {string} InstanceId The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.
		 * @param {Array<ContactFlowType>} contactFlowTypes The type of flow.
		 * @param {string} nextToken The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
		 * @param {number} maxResults The maximum number of results to return per page. The default MaxResult size is 100.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListContactFlowsResponse} Success
		 */
		ListContactFlows(InstanceId: string, contactFlowTypes: Array<ContactFlowType> | null | undefined, nextToken: string | null | undefined, maxResults: number | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListContactFlowsResponse> {
			return this.http.get<ListContactFlowsResponse>(this.baseUri + 'contact-flows-summary/' + (InstanceId == null ? '' : encodeURIComponent(InstanceId)) + '&' + contactFlowTypes?.map(z => `contactFlowTypes=${z}`).join('&') + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * <p>This API is in preview release for Amazon Connect and is subject to change.</p> <p>For the specified <code>referenceTypes</code>, returns a list of references associated with the contact. </p>
		 * Get contact/references/{InstanceId}/{ContactId}#referenceTypes
		 * @param {string} InstanceId The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.
		 * @param {string} ContactId The identifier of the initial contact.
		 * @param {Array<ReferenceType>} referenceTypes The type of reference.
		 * @param {string} nextToken <p>The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.</p> <important> <p>This is not expected to be set, because the value returned in the previous response is always null.</p> </important>
		 * @param {string} NextToken Pagination token
		 * @return {ListContactReferencesResponse} Success
		 */
		ListContactReferences(InstanceId: string, ContactId: string, referenceTypes: Array<ReferenceType>, nextToken: string | null | undefined, NextToken: string | null | undefined): Observable<ListContactReferencesResponse> {
			return this.http.get<ListContactReferencesResponse>(this.baseUri + 'contact/references/' + (InstanceId == null ? '' : encodeURIComponent(InstanceId)) + '/' + (ContactId == null ? '' : encodeURIComponent(ContactId)) + '#referenceTypes&' + referenceTypes.map(z => `referenceTypes=${z}`).join('&') + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Lists the default vocabularies for the specified Amazon Connect instance.
		 * Post default-vocabulary-summary/{InstanceId}
		 * @param {string} InstanceId The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListDefaultVocabulariesResponse} Success
		 */
		ListDefaultVocabularies(InstanceId: string, MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListDefaultVocabulariesPostBody): Observable<ListDefaultVocabulariesResponse> {
			return this.http.post<ListDefaultVocabulariesResponse>(this.baseUri + 'default-vocabulary-summary/' + (InstanceId == null ? '' : encodeURIComponent(InstanceId)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists versions of an evaluation form in the specified Amazon Connect instance.
		 * Get evaluation-forms/{InstanceId}/{EvaluationFormId}/versions
		 * @param {string} InstanceId The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.
		 * @param {string} EvaluationFormId The unique identifier for the evaluation form.
		 * @param {number} maxResults The maximum number of results to return per page.
		 * @param {string} nextToken The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListEvaluationFormVersionsResponse} Success
		 */
		ListEvaluationFormVersions(InstanceId: string, EvaluationFormId: string, maxResults: number | null | undefined, nextToken: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListEvaluationFormVersionsResponse> {
			return this.http.get<ListEvaluationFormVersionsResponse>(this.baseUri + 'evaluation-forms/' + (InstanceId == null ? '' : encodeURIComponent(InstanceId)) + '/' + (EvaluationFormId == null ? '' : encodeURIComponent(EvaluationFormId)) + '/versions&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * <p>Provides information about the hours of operation for the specified Amazon Connect instance.</p> <p>For more information about hours of operation, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/set-hours-operation.html">Set the Hours of Operation for a Queue</a> in the <i>Amazon Connect Administrator Guide</i>.</p>
		 * Get hours-of-operations-summary/{InstanceId}
		 * @param {string} InstanceId The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.
		 * @param {string} nextToken The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
		 * @param {number} maxResults The maximum number of results to return per page. The default MaxResult size is 100.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListHoursOfOperationsResponse} Success
		 */
		ListHoursOfOperations(InstanceId: string, nextToken: string | null | undefined, maxResults: number | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListHoursOfOperationsResponse> {
			return this.http.get<ListHoursOfOperationsResponse>(this.baseUri + 'hours-of-operations-summary/' + (InstanceId == null ? '' : encodeURIComponent(InstanceId)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * <p>This API is in preview release for Amazon Connect and is subject to change.</p> <p>Returns a paginated list of all attribute types for the given instance.</p>
		 * Get instance/{InstanceId}/attributes
		 * @param {string} InstanceId The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.
		 * @param {string} nextToken The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
		 * @param {number} maxResults The maximum number of results to return per page.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListInstanceAttributesResponse} Success
		 */
		ListInstanceAttributes(InstanceId: string, nextToken: string | null | undefined, maxResults: number | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListInstanceAttributesResponse> {
			return this.http.get<ListInstanceAttributesResponse>(this.baseUri + 'instance/' + (InstanceId == null ? '' : encodeURIComponent(InstanceId)) + '/attributes&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * <p>This API is in preview release for Amazon Connect and is subject to change.</p> <p>Returns a paginated list of storage configs for the identified instance and resource type.</p>
		 * Get instance/{InstanceId}/storage-configs#resourceType
		 * @param {string} InstanceId The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.
		 * @param {InstanceStorageResourceType} resourceType A valid resource type.
		 * @param {string} nextToken The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
		 * @param {number} maxResults The maximum number of results to return per page.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListInstanceStorageConfigsResponse} Success
		 */
		ListInstanceStorageConfigs(InstanceId: string, resourceType: InstanceStorageResourceType, nextToken: string | null | undefined, maxResults: number | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListInstanceStorageConfigsResponse> {
			return this.http.get<ListInstanceStorageConfigsResponse>(this.baseUri + 'instance/' + (InstanceId == null ? '' : encodeURIComponent(InstanceId)) + '/storage-configs#resourceType&resourceType=' + resourceType + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * <p>This API is in preview release for Amazon Connect and is subject to change.</p> <p>Returns a paginated list of all Lambda functions that display in the dropdown options in the relevant flow blocks.</p>
		 * Get instance/{InstanceId}/lambda-functions
		 * @param {string} InstanceId The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.
		 * @param {string} nextToken The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
		 * @param {number} maxResults The maximum number of results to return per page.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListLambdaFunctionsResponse} Success
		 */
		ListLambdaFunctions(InstanceId: string, nextToken: string | null | undefined, maxResults: number | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListLambdaFunctionsResponse> {
			return this.http.get<ListLambdaFunctionsResponse>(this.baseUri + 'instance/' + (InstanceId == null ? '' : encodeURIComponent(InstanceId)) + '/lambda-functions&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * <p>This API is in preview release for Amazon Connect and is subject to change.</p> <p>Returns a paginated list of all the Amazon Lex V1 bots currently associated with the instance. To return both Amazon Lex V1 and V2 bots, use the <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_ListBots.html">ListBots</a> API. </p>
		 * Get instance/{InstanceId}/lex-bots
		 * @param {string} InstanceId The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.
		 * @param {string} nextToken The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
		 * @param {number} maxResults The maximum number of results to return per page. If no value is specified, the default is 10. 
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListLexBotsResponse} Success
		 */
		ListLexBots(InstanceId: string, nextToken: string | null | undefined, maxResults: number | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListLexBotsResponse> {
			return this.http.get<ListLexBotsResponse>(this.baseUri + 'instance/' + (InstanceId == null ? '' : encodeURIComponent(InstanceId)) + '/lex-bots&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * <p>Provides information about the phone numbers for the specified Amazon Connect instance. </p> <p>For more information about phone numbers, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/contact-center-phone-number.html">Set Up Phone Numbers for Your Contact Center</a> in the <i>Amazon Connect Administrator Guide</i>.</p> <important> <p>The phone number <code>Arn</code> value that is returned from each of the items in the <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_ListPhoneNumbers.html#connect-ListPhoneNumbers-response-PhoneNumberSummaryList">PhoneNumberSummaryList</a> cannot be used to tag phone number resources. It will fail with a <code>ResourceNotFoundException</code>. Instead, use the <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_ListPhoneNumbersV2.html">ListPhoneNumbersV2</a> API. It returns the new phone number ARN that can be used to tag phone number resources.</p> </important>
		 * Get phone-numbers-summary/{InstanceId}
		 * @param {string} InstanceId The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.
		 * @param {Array<PhoneNumberType>} phoneNumberTypes The type of phone number.
		 * @param {Array<PhoneNumberCountryCode>} phoneNumberCountryCodes The ISO country code.
		 * @param {string} nextToken The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
		 * @param {number} maxResults The maximum number of results to return per page. The default MaxResult size is 100.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListPhoneNumbersResponse} Success
		 */
		ListPhoneNumbers(InstanceId: string, phoneNumberTypes: Array<PhoneNumberType> | null | undefined, phoneNumberCountryCodes: Array<PhoneNumberCountryCode> | null | undefined, nextToken: string | null | undefined, maxResults: number | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListPhoneNumbersResponse> {
			return this.http.get<ListPhoneNumbersResponse>(this.baseUri + 'phone-numbers-summary/' + (InstanceId == null ? '' : encodeURIComponent(InstanceId)) + '&' + phoneNumberTypes?.map(z => `phoneNumberTypes=${z}`).join('&') + '&' + phoneNumberCountryCodes?.map(z => `phoneNumberCountryCodes=${z}`).join('&') + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * <p>Lists phone numbers claimed to your Amazon Connect instance or traffic distribution group. If the provided <code>TargetArn</code> is a traffic distribution group, you can call this API in both Amazon Web Services Regions associated with traffic distribution group.</p> <p>For more information about phone numbers, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/contact-center-phone-number.html">Set Up Phone Numbers for Your Contact Center</a> in the <i>Amazon Connect Administrator Guide</i>.</p>
		 * Post phone-number/list
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListPhoneNumbersV2Response} Success
		 */
		ListPhoneNumbersV2(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListPhoneNumbersV2PostBody): Observable<ListPhoneNumbersV2Response> {
			return this.http.post<ListPhoneNumbersV2Response>(this.baseUri + 'phone-number/list?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Provides information about the prompts for the specified Amazon Connect instance.
		 * Get prompts-summary/{InstanceId}
		 * @param {string} InstanceId The identifier of the Amazon Connect instance.
		 * @param {string} nextToken The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
		 * @param {number} maxResults The maximum number of results to return per page. The default MaxResult size is 100.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListPromptsResponse} Success
		 */
		ListPrompts(InstanceId: string, nextToken: string | null | undefined, maxResults: number | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListPromptsResponse> {
			return this.http.get<ListPromptsResponse>(this.baseUri + 'prompts-summary/' + (InstanceId == null ? '' : encodeURIComponent(InstanceId)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * <p>This API is in preview release for Amazon Connect and is subject to change.</p> <p>Lists the quick connects associated with a queue.</p>
		 * Get queues/{InstanceId}/{QueueId}/quick-connects
		 * @param {string} InstanceId The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.
		 * @param {string} QueueId The identifier for the queue.
		 * @param {string} nextToken The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
		 * @param {number} maxResults The maximum number of results to return per page. The default MaxResult size is 100.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListQueueQuickConnectsResponse} Success
		 */
		ListQueueQuickConnects(InstanceId: string, QueueId: string, nextToken: string | null | undefined, maxResults: number | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListQueueQuickConnectsResponse> {
			return this.http.get<ListQueueQuickConnectsResponse>(this.baseUri + 'queues/' + (InstanceId == null ? '' : encodeURIComponent(InstanceId)) + '/' + (QueueId == null ? '' : encodeURIComponent(QueueId)) + '/quick-connects&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * <p>Provides information about the queues for the specified Amazon Connect instance.</p> <p>If you do not specify a <code>QueueTypes</code> parameter, both standard and agent queues are returned. This might cause an unexpected truncation of results if you have more than 1000 agents and you limit the number of results of the API call in code.</p> <p>For more information about queues, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/concepts-queues-standard-and-agent.html">Queues: Standard and Agent</a> in the <i>Amazon Connect Administrator Guide</i>.</p>
		 * Get queues-summary/{InstanceId}
		 * @param {string} InstanceId The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.
		 * @param {Array<QueueType>} queueTypes The type of queue.
		 * @param {string} nextToken The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
		 * @param {number} maxResults The maximum number of results to return per page. The default MaxResult size is 100.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListQueuesResponse} Success
		 */
		ListQueues(InstanceId: string, queueTypes: Array<QueueType> | null | undefined, nextToken: string | null | undefined, maxResults: number | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListQueuesResponse> {
			return this.http.get<ListQueuesResponse>(this.baseUri + 'queues-summary/' + (InstanceId == null ? '' : encodeURIComponent(InstanceId)) + '&' + queueTypes?.map(z => `queueTypes=${z}`).join('&') + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Lists the queues associated with a routing profile.
		 * Get routing-profiles/{InstanceId}/{RoutingProfileId}/queues
		 * @param {string} InstanceId The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.
		 * @param {string} RoutingProfileId The identifier of the routing profile.
		 * @param {string} nextToken The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
		 * @param {number} maxResults The maximum number of results to return per page. The default MaxResult size is 100.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListRoutingProfileQueuesResponse} Success
		 */
		ListRoutingProfileQueues(InstanceId: string, RoutingProfileId: string, nextToken: string | null | undefined, maxResults: number | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListRoutingProfileQueuesResponse> {
			return this.http.get<ListRoutingProfileQueuesResponse>(this.baseUri + 'routing-profiles/' + (InstanceId == null ? '' : encodeURIComponent(InstanceId)) + '/' + (RoutingProfileId == null ? '' : encodeURIComponent(RoutingProfileId)) + '/queues&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Updates the properties associated with a set of queues for a routing profile.
		 * Post routing-profiles/{InstanceId}/{RoutingProfileId}/queues
		 * @param {string} InstanceId The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.
		 * @param {string} RoutingProfileId The identifier of the routing profile.
		 * @return {void} Success
		 */
		UpdateRoutingProfileQueues(InstanceId: string, RoutingProfileId: string, requestBody: UpdateRoutingProfileQueuesPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'routing-profiles/' + (InstanceId == null ? '' : encodeURIComponent(InstanceId)) + '/' + (RoutingProfileId == null ? '' : encodeURIComponent(RoutingProfileId)) + '/queues', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Provides summary information about the routing profiles for the specified Amazon Connect instance.</p> <p>For more information about routing profiles, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/concepts-routing.html">Routing Profiles</a> and <a href="https://docs.aws.amazon.com/connect/latest/adminguide/routing-profiles.html">Create a Routing Profile</a> in the <i>Amazon Connect Administrator Guide</i>.</p>
		 * Get routing-profiles-summary/{InstanceId}
		 * @param {string} InstanceId The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.
		 * @param {string} nextToken The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
		 * @param {number} maxResults The maximum number of results to return per page. The default MaxResult size is 100.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListRoutingProfilesResponse} Success
		 */
		ListRoutingProfiles(InstanceId: string, nextToken: string | null | undefined, maxResults: number | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListRoutingProfilesResponse> {
			return this.http.get<ListRoutingProfilesResponse>(this.baseUri + 'routing-profiles-summary/' + (InstanceId == null ? '' : encodeURIComponent(InstanceId)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * <p>This API is in preview release for Amazon Connect and is subject to change.</p> <p>Returns a paginated list of all security keys associated with the instance.</p>
		 * Get instance/{InstanceId}/security-keys
		 * @param {string} InstanceId The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.
		 * @param {string} nextToken The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
		 * @param {number} maxResults The maximum number of results to return per page.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListSecurityKeysResponse} Success
		 */
		ListSecurityKeys(InstanceId: string, nextToken: string | null | undefined, maxResults: number | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListSecurityKeysResponse> {
			return this.http.get<ListSecurityKeysResponse>(this.baseUri + 'instance/' + (InstanceId == null ? '' : encodeURIComponent(InstanceId)) + '/security-keys&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * <p>This API is in preview release for Amazon Connect and is subject to change.</p> <p>Lists the permissions granted to a security profile.</p>
		 * Get security-profiles-permissions/{InstanceId}/{SecurityProfileId}
		 * @param {string} SecurityProfileId The identifier for the security profle.
		 * @param {string} InstanceId The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.
		 * @param {string} nextToken The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
		 * @param {number} maxResults The maximum number of results to return per page.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListSecurityProfilePermissionsResponse} Success
		 */
		ListSecurityProfilePermissions(SecurityProfileId: string, InstanceId: string, nextToken: string | null | undefined, maxResults: number | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListSecurityProfilePermissionsResponse> {
			return this.http.get<ListSecurityProfilePermissionsResponse>(this.baseUri + 'security-profiles-permissions/' + (InstanceId == null ? '' : encodeURIComponent(InstanceId)) + '/' + (SecurityProfileId == null ? '' : encodeURIComponent(SecurityProfileId)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * <p>Provides summary information about the security profiles for the specified Amazon Connect instance.</p> <p>For more information about security profiles, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/connect-security-profiles.html">Security Profiles</a> in the <i>Amazon Connect Administrator Guide</i>.</p>
		 * Get security-profiles-summary/{InstanceId}
		 * @param {string} InstanceId The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.
		 * @param {string} nextToken The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
		 * @param {number} maxResults The maximum number of results to return per page. The default MaxResult size is 100.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListSecurityProfilesResponse} Success
		 */
		ListSecurityProfiles(InstanceId: string, nextToken: string | null | undefined, maxResults: number | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListSecurityProfilesResponse> {
			return this.http.get<ListSecurityProfilesResponse>(this.baseUri + 'security-profiles-summary/' + (InstanceId == null ? '' : encodeURIComponent(InstanceId)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * <p>Lists the tags for the specified resource.</p> <p>For sample policies that use tags, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/security_iam_id-based-policy-examples.html">Amazon Connect Identity-Based Policy Examples</a> in the <i>Amazon Connect Administrator Guide</i>.</p>
		 * Get tags/{resourceArn}
		 * @param {string} resourceArn The Amazon Resource Name (ARN) of the resource. All Amazon Connect resources (instances, queues, flows, routing profiles, etc) have an ARN. To locate the ARN for an instance, for example, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">Find your Amazon Connect instance ID/ARN</a>. 
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(resourceArn: string): Observable<ListTagsForResourceResponse> {
			return this.http.get<ListTagsForResourceResponse>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), {});
		}

		/**
		 * <p>Adds the specified tags to the specified resource.</p> <p>Some of the supported resource types are agents, routing profiles, queues, quick connects, contact flows, agent statuses, hours of operation, phone numbers, security profiles, and task templates. For a complete list, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/tagging.html">Tagging resources in Amazon Connect</a>.</p> <p>For sample policies that use tags, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/security_iam_id-based-policy-examples.html">Amazon Connect Identity-Based Policy Examples</a> in the <i>Amazon Connect Administrator Guide</i>.</p>
		 * Post tags/{resourceArn}
		 * @param {string} resourceArn The Amazon Resource Name (ARN) of the resource.
		 * @return {void} Success
		 */
		TagResource(resourceArn: string, requestBody: TagResourcePostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists traffic distribution groups.
		 * Get traffic-distribution-groups
		 * @param {number} maxResults The maximum number of results to return per page.
		 * @param {string} nextToken The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
		 * @param {string} instanceId The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListTrafficDistributionGroupsResponse} Success
		 */
		ListTrafficDistributionGroups(maxResults: number | null | undefined, nextToken: string | null | undefined, instanceId: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListTrafficDistributionGroupsResponse> {
			return this.http.get<ListTrafficDistributionGroupsResponse>(this.baseUri + 'traffic-distribution-groups?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&instanceId=' + (instanceId == null ? '' : encodeURIComponent(instanceId)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * <p>Provides summary information about the hierarchy groups for the specified Amazon Connect instance.</p> <p>For more information about agent hierarchies, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/agent-hierarchy.html">Set Up Agent Hierarchies</a> in the <i>Amazon Connect Administrator Guide</i>.</p>
		 * Get user-hierarchy-groups-summary/{InstanceId}
		 * @param {string} InstanceId The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.
		 * @param {string} nextToken The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
		 * @param {number} maxResults The maximum number of results to return per page. The default MaxResult size is 100.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListUserHierarchyGroupsResponse} Success
		 */
		ListUserHierarchyGroups(InstanceId: string, nextToken: string | null | undefined, maxResults: number | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListUserHierarchyGroupsResponse> {
			return this.http.get<ListUserHierarchyGroupsResponse>(this.baseUri + 'user-hierarchy-groups-summary/' + (InstanceId == null ? '' : encodeURIComponent(InstanceId)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Provides summary information about the users for the specified Amazon Connect instance.
		 * Get users-summary/{InstanceId}
		 * @param {string} InstanceId The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.
		 * @param {string} nextToken The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
		 * @param {number} maxResults The maximum number of results to return per page. The default MaxResult size is 100.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListUsersResponse} Success
		 */
		ListUsers(InstanceId: string, nextToken: string | null | undefined, maxResults: number | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListUsersResponse> {
			return this.http.get<ListUsersResponse>(this.baseUri + 'users-summary/' + (InstanceId == null ? '' : encodeURIComponent(InstanceId)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Initiates silent monitoring of a contact. The Contact Control Panel (CCP) of the user specified by <i>userId</i> will be set to silent monitoring mode on the contact.
		 * Post contact/monitor
		 * @return {MonitorContactResponse} Success
		 */
		MonitorContact(requestBody: MonitorContactPostBody): Observable<MonitorContactResponse> {
			return this.http.post<MonitorContactResponse>(this.baseUri + 'contact/monitor', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Changes the current status of a user or agent in Amazon Connect. If the agent is currently handling a contact, this sets the agent's next status.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-agent-status.html">Agent status</a> and <a href="https://docs.aws.amazon.com/connect/latest/adminguide/set-next-status.html">Set your next status</a> in the <i>Amazon Connect Administrator Guide</i>.</p>
		 * Put users/{InstanceId}/{UserId}/status
		 * @param {string} UserId The identifier of the user.
		 * @param {string} InstanceId The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.
		 * @return {PutUserStatusResponse} Success
		 */
		PutUserStatus(UserId: string, InstanceId: string, requestBody: PutUserStatusPutBody): Observable<PutUserStatusResponse> {
			return this.http.put<PutUserStatusResponse>(this.baseUri + 'users/' + (InstanceId == null ? '' : encodeURIComponent(InstanceId)) + '/' + (UserId == null ? '' : encodeURIComponent(UserId)) + '/status', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Replicates an Amazon Connect instance in the specified Amazon Web Services Region.</p> <p>For more information about replicating an Amazon Connect instance, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/create-replica-connect-instance.html">Create a replica of your existing Amazon Connect instance</a> in the <i>Amazon Connect Administrator Guide</i>.</p>
		 * Post instance/{InstanceId}/replicate
		 * @param {string} InstanceId The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance. You can provide the <code>InstanceId</code>, or the entire ARN.
		 * @return {ReplicateInstanceResponse} Success
		 */
		ReplicateInstance(InstanceId: string, requestBody: ReplicateInstancePostBody): Observable<ReplicateInstanceResponse> {
			return this.http.post<ReplicateInstanceResponse>(this.baseUri + 'instance/' + (InstanceId == null ? '' : encodeURIComponent(InstanceId)) + '/replicate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>When a contact is being recorded, and the recording has been suspended using SuspendContactRecording, this API resumes recording the call or screen.</p> <p>Voice and screen recordings are supported.</p>
		 * Post contact/resume-recording
		 * @return {ResumeContactRecordingResponse} Success
		 */
		ResumeContactRecording(requestBody: ResumeContactRecordingPostBody): Observable<ResumeContactRecordingResponse> {
			return this.http.post<ResumeContactRecordingResponse>(this.baseUri + 'contact/resume-recording', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Searches for available phone numbers that you can claim to your Amazon Connect instance or traffic distribution group. If the provided <code>TargetArn</code> is a traffic distribution group, you can call this API in both Amazon Web Services Regions associated with the traffic distribution group.
		 * Post phone-number/search-available
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {SearchAvailablePhoneNumbersResponse} Success
		 */
		SearchAvailablePhoneNumbers(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: SearchAvailablePhoneNumbersPostBody): Observable<SearchAvailablePhoneNumbersResponse> {
			return this.http.post<SearchAvailablePhoneNumbersResponse>(this.baseUri + 'phone-number/search-available?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Searches the hours of operation in an Amazon Connect instance, with optional filtering.
		 * Post search-hours-of-operations
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {SearchHoursOfOperationsResponse} Success
		 */
		SearchHoursOfOperations(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: SearchHoursOfOperationsPostBody): Observable<SearchHoursOfOperationsResponse> {
			return this.http.post<SearchHoursOfOperationsResponse>(this.baseUri + 'search-hours-of-operations?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Searches prompts in an Amazon Connect instance, with optional filtering.
		 * Post search-prompts
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {SearchPromptsResponse} Success
		 */
		SearchPrompts(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: SearchPromptsPostBody): Observable<SearchPromptsResponse> {
			return this.http.post<SearchPromptsResponse>(this.baseUri + 'search-prompts?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Searches queues in an Amazon Connect instance, with optional filtering.
		 * Post search-queues
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {SearchQueuesResponse} Success
		 */
		SearchQueues(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: SearchQueuesPostBody): Observable<SearchQueuesResponse> {
			return this.http.post<SearchQueuesResponse>(this.baseUri + 'search-queues?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Searches quick connects in an Amazon Connect instance, with optional filtering.
		 * Post search-quick-connects
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {SearchQuickConnectsResponse} Success
		 */
		SearchQuickConnects(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: SearchQuickConnectsPostBody): Observable<SearchQuickConnectsResponse> {
			return this.http.post<SearchQuickConnectsResponse>(this.baseUri + 'search-quick-connects?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Searches tags used in an Amazon Connect instance using optional search criteria.
		 * Post search-resource-tags
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {SearchResourceTagsResponse} Success
		 */
		SearchResourceTags(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: SearchResourceTagsPostBody): Observable<SearchResourceTagsResponse> {
			return this.http.post<SearchResourceTagsResponse>(this.baseUri + 'search-resource-tags?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Searches routing profiles in an Amazon Connect instance, with optional filtering.
		 * Post search-routing-profiles
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {SearchRoutingProfilesResponse} Success
		 */
		SearchRoutingProfiles(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: SearchRoutingProfilesPostBody): Observable<SearchRoutingProfilesResponse> {
			return this.http.post<SearchRoutingProfilesResponse>(this.baseUri + 'search-routing-profiles?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Searches security profiles in an Amazon Connect instance, with optional filtering.
		 * Post search-security-profiles
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {SearchSecurityProfilesResponse} Success
		 */
		SearchSecurityProfiles(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: SearchSecurityProfilesPostBody): Observable<SearchSecurityProfilesResponse> {
			return this.http.post<SearchSecurityProfilesResponse>(this.baseUri + 'search-security-profiles?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Searches users in an Amazon Connect instance, with optional filtering.</p> <note> <p> <code>AfterContactWorkTimeLimit</code> is returned in milliseconds. </p> </note>
		 * Post search-users
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {SearchUsersResponse} Success
		 */
		SearchUsers(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: SearchUsersPostBody): Observable<SearchUsersResponse> {
			return this.http.post<SearchUsersResponse>(this.baseUri + 'search-users?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Searches for vocabularies within a specific Amazon Connect instance using <code>State</code>, <code>NameStartsWith</code>, and <code>LanguageCode</code>.
		 * Post vocabulary-summary/{InstanceId}
		 * @param {string} InstanceId The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {SearchVocabulariesResponse} Success
		 */
		SearchVocabularies(InstanceId: string, MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: SearchVocabulariesPostBody): Observable<SearchVocabulariesResponse> {
			return this.http.post<SearchVocabulariesResponse>(this.baseUri + 'vocabulary-summary/' + (InstanceId == null ? '' : encodeURIComponent(InstanceId)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Initiates a flow to start a new chat for the customer. Response of this API provides a token required to obtain credentials from the <a href="https://docs.aws.amazon.com/connect-participant/latest/APIReference/API_CreateParticipantConnection.html">CreateParticipantConnection</a> API in the Amazon Connect Participant Service.</p> <p>When a new chat contact is successfully created, clients must subscribe to the participant’s connection for the created chat within 5 minutes. This is achieved by invoking <a href="https://docs.aws.amazon.com/connect-participant/latest/APIReference/API_CreateParticipantConnection.html">CreateParticipantConnection</a> with WEBSOCKET and CONNECTION_CREDENTIALS. </p> <p>A 429 error occurs in the following situations:</p> <ul> <li> <p>API rate limit is exceeded. API TPS throttling returns a <code>TooManyRequests</code> exception.</p> </li> <li> <p>The <a href="https://docs.aws.amazon.com/connect/latest/adminguide/amazon-connect-service-limits.html">quota for concurrent active chats</a> is exceeded. Active chat throttling returns a <code>LimitExceededException</code>.</p> </li> </ul> <p>If you use the <code>ChatDurationInMinutes</code> parameter and receive a 400 error, your account may not support the ability to configure custom chat durations. For more information, contact Amazon Web Services Support. </p> <p>For more information about chat, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/chat.html">Chat</a> in the <i>Amazon Connect Administrator Guide</i>.</p>
		 * Put contact/chat
		 * @return {StartChatContactResponse} Success
		 */
		StartChatContact(requestBody: StartChatContactPutBody): Observable<StartChatContactResponse> {
			return this.http.put<StartChatContactResponse>(this.baseUri + 'contact/chat', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Starts an empty evaluation in the specified Amazon Connect instance, using the given evaluation form for the particular contact. The evaluation form version used for the contact evaluation corresponds to the currently activated version. If no version is activated for the evaluation form, the contact evaluation cannot be started. </p> <note> <p>Evaluations created through the public API do not contain answer values suggested from automation.</p> </note>
		 * Put contact-evaluations/{InstanceId}
		 * @param {string} InstanceId The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.
		 * @return {StartContactEvaluationResponse} Success
		 */
		StartContactEvaluation(InstanceId: string, requestBody: StartContactEvaluationPutBody): Observable<StartContactEvaluationResponse> {
			return this.http.put<StartContactEvaluationResponse>(this.baseUri + 'contact-evaluations/' + (InstanceId == null ? '' : encodeURIComponent(InstanceId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Starts recording the contact: </p> <ul> <li> <p>If the API is called <i>before</i> the agent joins the call, recording starts when the agent joins the call.</p> </li> <li> <p>If the API is called <i>after</i> the agent joins the call, recording starts at the time of the API call.</p> </li> </ul> <p>StartContactRecording is a one-time action. For example, if you use StopContactRecording to stop recording an ongoing call, you can't use StartContactRecording to restart it. For scenarios where the recording has started and you want to suspend and resume it, such as when collecting sensitive information (for example, a credit card number), use SuspendContactRecording and ResumeContactRecording.</p> <p>You can use this API to override the recording behavior configured in the <a href="https://docs.aws.amazon.com/connect/latest/adminguide/set-recording-behavior.html">Set recording behavior</a> block.</p> <p>Only voice recordings are supported at this time.</p>
		 * Post contact/start-recording
		 * @return {StartContactRecordingResponse} Success
		 */
		StartContactRecording(requestBody: StartContactRecordingPostBody): Observable<StartContactRecordingResponse> {
			return this.http.post<StartContactRecordingResponse>(this.baseUri + 'contact/start-recording', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p> Initiates real-time message streaming for a new chat contact.</p> <p> For more information about message streaming, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/chat-message-streaming.html">Enable real-time chat message streaming</a> in the <i>Amazon Connect Administrator Guide</i>.</p>
		 * Post contact/start-streaming
		 * @return {StartContactStreamingResponse} Success
		 */
		StartContactStreaming(requestBody: StartContactStreamingPostBody): Observable<StartContactStreamingResponse> {
			return this.http.post<StartContactStreamingResponse>(this.baseUri + 'contact/start-streaming', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Places an outbound call to a contact, and then initiates the flow. It performs the actions in the flow that's specified (in <code>ContactFlowId</code>).</p> <p>Agents do not initiate the outbound API, which means that they do not dial the contact. If the flow places an outbound call to a contact, and then puts the contact in queue, the call is then routed to the agent, like any other inbound case.</p> <p>There is a 60-second dialing timeout for this operation. If the call is not connected after 60 seconds, it fails.</p> <note> <p>UK numbers with a 447 prefix are not allowed by default. Before you can dial these UK mobile numbers, you must submit a service quota increase request. For more information, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/amazon-connect-service-limits.html">Amazon Connect Service Quotas</a> in the <i>Amazon Connect Administrator Guide</i>. </p> </note> <note> <p>Campaign calls are not allowed by default. Before you can make a call with <code>TrafficType</code> = <code>CAMPAIGN</code>, you must submit a service quota increase request to the quota <a href="https://docs.aws.amazon.com/connect/latest/adminguide/amazon-connect-service-limits.html#outbound-communications-quotas">Amazon Connect campaigns</a>. </p> </note>
		 * Put contact/outbound-voice
		 * @return {StartOutboundVoiceContactResponse} Success
		 */
		StartOutboundVoiceContact(requestBody: StartOutboundVoiceContactPutBody): Observable<StartOutboundVoiceContactResponse> {
			return this.http.put<StartOutboundVoiceContactResponse>(this.baseUri + 'contact/outbound-voice', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Initiates a flow to start a new task.
		 * Put contact/task
		 * @return {StartTaskContactResponse} Success
		 */
		StartTaskContact(requestBody: StartTaskContactPutBody): Observable<StartTaskContactResponse> {
			return this.http.put<StartTaskContactResponse>(this.baseUri + 'contact/task', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Ends the specified contact. This call does not work for the following initiation methods:</p> <ul> <li> <p>DISCONNECT</p> </li> <li> <p>TRANSFER</p> </li> <li> <p>QUEUE_TRANSFER</p> </li> </ul>
		 * Post contact/stop
		 * @return {StopContactResponse} Success
		 */
		StopContact(requestBody: StopContactPostBody): Observable<StopContactResponse> {
			return this.http.post<StopContactResponse>(this.baseUri + 'contact/stop', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Stops recording a call when a contact is being recorded. StopContactRecording is a one-time action. If you use StopContactRecording to stop recording an ongoing call, you can't use StartContactRecording to restart it. For scenarios where the recording has started and you want to suspend it for sensitive information (for example, to collect a credit card number), and then restart it, use SuspendContactRecording and ResumeContactRecording.</p> <p>Only voice recordings are supported at this time.</p>
		 * Post contact/stop-recording
		 * @return {StopContactRecordingResponse} Success
		 */
		StopContactRecording(requestBody: StopContactRecordingPostBody): Observable<StopContactRecordingResponse> {
			return this.http.post<StopContactRecordingResponse>(this.baseUri + 'contact/stop-recording', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Ends message streaming on a specified contact. To restart message streaming on that contact, call the <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_StartContactStreaming.html">StartContactStreaming</a> API.
		 * Post contact/stop-streaming
		 * @return {StopContactStreamingResponse} Success
		 */
		StopContactStreaming(requestBody: StopContactStreamingPostBody): Observable<StopContactStreamingResponse> {
			return this.http.post<StopContactStreamingResponse>(this.baseUri + 'contact/stop-streaming', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Submits a contact evaluation in the specified Amazon Connect instance. Answers included in the request are merged with existing answers for the given evaluation. If no answers or notes are passed, the evaluation is submitted with the existing answers and notes. You can delete an answer or note by passing an empty object (<code>{}</code>) to the question identifier. </p> <p>If a contact evaluation is already in submitted state, this operation will trigger a resubmission.</p>
		 * Post contact-evaluations/{InstanceId}/{EvaluationId}/submit
		 * @param {string} InstanceId The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.
		 * @param {string} EvaluationId A unique identifier for the contact evaluation.
		 * @return {SubmitContactEvaluationResponse} Success
		 */
		SubmitContactEvaluation(InstanceId: string, EvaluationId: string, requestBody: SubmitContactEvaluationPostBody): Observable<SubmitContactEvaluationResponse> {
			return this.http.post<SubmitContactEvaluationResponse>(this.baseUri + 'contact-evaluations/' + (InstanceId == null ? '' : encodeURIComponent(InstanceId)) + '/' + (EvaluationId == null ? '' : encodeURIComponent(EvaluationId)) + '/submit', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>When a contact is being recorded, this API suspends recording the call or screen. For example, you might suspend the call or screen recording while collecting sensitive information, such as a credit card number. Then use ResumeContactRecording to restart recording.</p> <p>The period of time that the recording is suspended is filled with silence in the final recording.</p> <p>Voice and screen recordings are supported.</p>
		 * Post contact/suspend-recording
		 * @return {SuspendContactRecordingResponse} Success
		 */
		SuspendContactRecording(requestBody: SuspendContactRecordingPostBody): Observable<SuspendContactRecordingResponse> {
			return this.http.post<SuspendContactRecordingResponse>(this.baseUri + 'contact/suspend-recording', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Transfers contacts from one agent or queue to another agent or queue at any point after a contact is created. You can transfer a contact to another queue by providing the flow which orchestrates the contact to the destination queue. This gives you more control over contact handling and helps you adhere to the service level agreement (SLA) guaranteed to your customers.</p> <p>Note the following requirements:</p> <ul> <li> <p>Transfer is supported for only <code>TASK</code> contacts.</p> </li> <li> <p>Do not use both <code>QueueId</code> and <code>UserId</code> in the same call.</p> </li> <li> <p>The following flow types are supported: Inbound flow, Transfer to agent flow, and Transfer to queue flow.</p> </li> <li> <p>The <code>TransferContact</code> API can be called only on active contacts.</p> </li> <li> <p>A contact cannot be transferred more than 11 times.</p> </li> </ul>
		 * Post contact/transfer
		 * @return {TransferContactResponse} Success
		 */
		TransferContact(requestBody: TransferContactPostBody): Observable<TransferContactResponse> {
			return this.http.post<TransferContactResponse>(this.baseUri + 'contact/transfer', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes the specified tags from the specified resource.
		 * Delete tags/{resourceArn}#tagKeys
		 * @param {string} resourceArn The Amazon Resource Name (ARN) of the resource.
		 * @param {Array<string>} tagKeys The tag keys.
		 * @return {void} Success
		 */
		UntagResource(resourceArn: string, tagKeys: Array<string>): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)) + '#tagKeys&' + tagKeys.map(z => `tagKeys=${encodeURIComponent(z)}`).join('&'), { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Creates or updates user-defined contact attributes associated with the specified contact.</p> <p>You can create or update user-defined attributes for both ongoing and completed contacts. For example, while the call is active, you can update the customer's name or the reason the customer called. You can add notes about steps that the agent took during the call that display to the next agent that takes the call. You can also update attributes for a contact using data from your CRM application and save the data with the contact in Amazon Connect. You could also flag calls for additional analysis, such as legal review or to identify abusive callers.</p> <p>Contact attributes are available in Amazon Connect for 24 months, and are then deleted. For information about contact record retention and the maximum size of the contact record attributes section, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/amazon-connect-service-limits.html#feature-limits">Feature specifications</a> in the <i>Amazon Connect Administrator Guide</i>. </p>
		 * Post contact/attributes
		 * @return {UpdateContactAttributesResponse} Success
		 */
		UpdateContactAttributes(requestBody: UpdateContactAttributesPostBody): Observable<UpdateContactAttributesResponse> {
			return this.http.post<UpdateContactAttributesResponse>(this.baseUri + 'contact/attributes', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Updates the specified flow.</p> <p>You can also create and update flows using the <a href="https://docs.aws.amazon.com/connect/latest/APIReference/flow-language.html">Amazon Connect Flow language</a>.</p>
		 * Post contact-flows/{InstanceId}/{ContactFlowId}/content
		 * @param {string} InstanceId The identifier of the Amazon Connect instance.
		 * @param {string} ContactFlowId The identifier of the flow.
		 * @return {UpdateContactFlowContentResponse} Success
		 */
		UpdateContactFlowContent(InstanceId: string, ContactFlowId: string, requestBody: UpdateContactFlowContentPostBody): Observable<UpdateContactFlowContentResponse> {
			return this.http.post<UpdateContactFlowContentResponse>(this.baseUri + 'contact-flows/' + (InstanceId == null ? '' : encodeURIComponent(InstanceId)) + '/' + (ContactFlowId == null ? '' : encodeURIComponent(ContactFlowId)) + '/content', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates metadata about specified flow.
		 * Post contact-flows/{InstanceId}/{ContactFlowId}/metadata
		 * @param {string} InstanceId The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.
		 * @param {string} ContactFlowId The identifier of the flow.
		 * @return {UpdateContactFlowMetadataResponse} Success
		 */
		UpdateContactFlowMetadata(InstanceId: string, ContactFlowId: string, requestBody: UpdateContactFlowMetadataPostBody): Observable<UpdateContactFlowMetadataResponse> {
			return this.http.post<UpdateContactFlowMetadataResponse>(this.baseUri + 'contact-flows/' + (InstanceId == null ? '' : encodeURIComponent(InstanceId)) + '/' + (ContactFlowId == null ? '' : encodeURIComponent(ContactFlowId)) + '/metadata', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates specified flow module for the specified Amazon Connect instance.
		 * Post contact-flow-modules/{InstanceId}/{ContactFlowModuleId}/content
		 * @param {string} InstanceId The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.
		 * @param {string} ContactFlowModuleId The identifier of the flow module.
		 * @return {UpdateContactFlowModuleContentResponse} Success
		 */
		UpdateContactFlowModuleContent(InstanceId: string, ContactFlowModuleId: string, requestBody: UpdateContactFlowModuleContentPostBody): Observable<UpdateContactFlowModuleContentResponse> {
			return this.http.post<UpdateContactFlowModuleContentResponse>(this.baseUri + 'contact-flow-modules/' + (InstanceId == null ? '' : encodeURIComponent(InstanceId)) + '/' + (ContactFlowModuleId == null ? '' : encodeURIComponent(ContactFlowModuleId)) + '/content', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates metadata about specified flow module.
		 * Post contact-flow-modules/{InstanceId}/{ContactFlowModuleId}/metadata
		 * @param {string} InstanceId The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.
		 * @param {string} ContactFlowModuleId The identifier of the flow module.
		 * @return {UpdateContactFlowModuleMetadataResponse} Success
		 */
		UpdateContactFlowModuleMetadata(InstanceId: string, ContactFlowModuleId: string, requestBody: UpdateContactFlowModuleMetadataPostBody): Observable<UpdateContactFlowModuleMetadataResponse> {
			return this.http.post<UpdateContactFlowModuleMetadataResponse>(this.baseUri + 'contact-flow-modules/' + (InstanceId == null ? '' : encodeURIComponent(InstanceId)) + '/' + (ContactFlowModuleId == null ? '' : encodeURIComponent(ContactFlowModuleId)) + '/metadata', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>The name of the flow.</p> <p>You can also create and update flows using the <a href="https://docs.aws.amazon.com/connect/latest/APIReference/flow-language.html">Amazon Connect Flow language</a>.</p>
		 * Post contact-flows/{InstanceId}/{ContactFlowId}/name
		 * @param {string} InstanceId The identifier of the Amazon Connect instance.
		 * @param {string} ContactFlowId The identifier of the flow.
		 * @return {UpdateContactFlowNameResponse} Success
		 */
		UpdateContactFlowName(InstanceId: string, ContactFlowId: string, requestBody: UpdateContactFlowNamePostBody): Observable<UpdateContactFlowNameResponse> {
			return this.http.post<UpdateContactFlowNameResponse>(this.baseUri + 'contact-flows/' + (InstanceId == null ? '' : encodeURIComponent(InstanceId)) + '/' + (ContactFlowId == null ? '' : encodeURIComponent(ContactFlowId)) + '/name', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates the scheduled time of a task contact that is already scheduled.
		 * Post contact/schedule
		 * @return {UpdateContactScheduleResponse} Success
		 */
		UpdateContactSchedule(requestBody: UpdateContactSchedulePostBody): Observable<UpdateContactScheduleResponse> {
			return this.http.post<UpdateContactScheduleResponse>(this.baseUri + 'contact/schedule', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Updates timeouts for when human chat participants are to be considered idle, and when agents are automatically disconnected from a chat due to idleness. You can set four timers:</p> <ul> <li> <p>Customer idle timeout</p> </li> <li> <p>Customer auto-disconnect timeout</p> </li> <li> <p>Agent idle timeout</p> </li> <li> <p>Agent auto-disconnect timeout</p> </li> </ul> <p>For more information about how chat timeouts work, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/setup-chat-timeouts.html">Set up chat timeouts for human participants</a>. </p>
		 * Put contact/participant-role-config/{InstanceId}/{ContactId}
		 * @param {string} InstanceId The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.
		 * @param {string} ContactId The identifier of the contact in this instance of Amazon Connect. 
		 * @return {UpdateParticipantRoleConfigResponse} Success
		 */
		UpdateParticipantRoleConfig(InstanceId: string, ContactId: string, requestBody: UpdateParticipantRoleConfigPutBody): Observable<UpdateParticipantRoleConfigResponse> {
			return this.http.put<UpdateParticipantRoleConfigResponse>(this.baseUri + 'contact/participant-role-config/' + (InstanceId == null ? '' : encodeURIComponent(InstanceId)) + '/' + (ContactId == null ? '' : encodeURIComponent(ContactId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>This API is in preview release for Amazon Connect and is subject to change.</p> <p>Updates the hours of operation for the specified queue.</p>
		 * Post queues/{InstanceId}/{QueueId}/hours-of-operation
		 * @param {string} InstanceId The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.
		 * @param {string} QueueId The identifier for the queue.
		 * @return {void} Success
		 */
		UpdateQueueHoursOfOperation(InstanceId: string, QueueId: string, requestBody: UpdateQueueHoursOfOperationPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'queues/' + (InstanceId == null ? '' : encodeURIComponent(InstanceId)) + '/' + (QueueId == null ? '' : encodeURIComponent(QueueId)) + '/hours-of-operation', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>This API is in preview release for Amazon Connect and is subject to change.</p> <p>Updates the maximum number of contacts allowed in a queue before it is considered full.</p>
		 * Post queues/{InstanceId}/{QueueId}/max-contacts
		 * @param {string} InstanceId The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.
		 * @param {string} QueueId The identifier for the queue.
		 * @return {void} Success
		 */
		UpdateQueueMaxContacts(InstanceId: string, QueueId: string, requestBody: UpdateQueueMaxContactsPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'queues/' + (InstanceId == null ? '' : encodeURIComponent(InstanceId)) + '/' + (QueueId == null ? '' : encodeURIComponent(QueueId)) + '/max-contacts', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>This API is in preview release for Amazon Connect and is subject to change.</p> <p>Updates the name and description of a queue. At least <code>Name</code> or <code>Description</code> must be provided.</p>
		 * Post queues/{InstanceId}/{QueueId}/name
		 * @param {string} InstanceId The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.
		 * @param {string} QueueId The identifier for the queue.
		 * @return {void} Success
		 */
		UpdateQueueName(InstanceId: string, QueueId: string, requestBody: UpdateQueueNamePostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'queues/' + (InstanceId == null ? '' : encodeURIComponent(InstanceId)) + '/' + (QueueId == null ? '' : encodeURIComponent(QueueId)) + '/name', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>This API is in preview release for Amazon Connect and is subject to change.</p> <p>Updates the outbound caller ID name, number, and outbound whisper flow for a specified queue.</p> <important> <p>If the number being used in the input is claimed to a traffic distribution group, and you are calling this API using an instance in the Amazon Web Services Region where the traffic distribution group was created, you can use either a full phone number ARN or UUID value for the <code>OutboundCallerIdNumberId</code> value of the <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_OutboundCallerConfig">OutboundCallerConfig</a> request body parameter. However, if the number is claimed to a traffic distribution group and you are calling this API using an instance in the alternate Amazon Web Services Region associated with the traffic distribution group, you must provide a full phone number ARN. If a UUID is provided in this scenario, you will receive a <code>ResourceNotFoundException</code>.</p> <p>Only use the phone number ARN format that doesn't contain <code>instance</code> in the path, for example, <code>arn:aws:connect:us-east-1:1234567890:phone-number/uuid</code>. This is the same ARN format that is returned when you call the <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_ListPhoneNumbersV2.html">ListPhoneNumbersV2</a> API.</p> </important>
		 * Post queues/{InstanceId}/{QueueId}/outbound-caller-config
		 * @param {string} InstanceId The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.
		 * @param {string} QueueId The identifier for the queue.
		 * @return {void} Success
		 */
		UpdateQueueOutboundCallerConfig(InstanceId: string, QueueId: string, requestBody: UpdateQueueOutboundCallerConfigPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'queues/' + (InstanceId == null ? '' : encodeURIComponent(InstanceId)) + '/' + (QueueId == null ? '' : encodeURIComponent(QueueId)) + '/outbound-caller-config', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>This API is in preview release for Amazon Connect and is subject to change.</p> <p>Updates the status of the queue.</p>
		 * Post queues/{InstanceId}/{QueueId}/status
		 * @param {string} InstanceId The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.
		 * @param {string} QueueId The identifier for the queue.
		 * @return {void} Success
		 */
		UpdateQueueStatus(InstanceId: string, QueueId: string, requestBody: UpdateQueueStatusPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'queues/' + (InstanceId == null ? '' : encodeURIComponent(InstanceId)) + '/' + (QueueId == null ? '' : encodeURIComponent(QueueId)) + '/status', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates the configuration settings for the specified quick connect.
		 * Post quick-connects/{InstanceId}/{QuickConnectId}/config
		 * @param {string} InstanceId The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.
		 * @param {string} QuickConnectId The identifier for the quick connect.
		 * @return {void} Success
		 */
		UpdateQuickConnectConfig(InstanceId: string, QuickConnectId: string, requestBody: UpdateQuickConnectConfigPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'quick-connects/' + (InstanceId == null ? '' : encodeURIComponent(InstanceId)) + '/' + (QuickConnectId == null ? '' : encodeURIComponent(QuickConnectId)) + '/config', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates the name and description of a quick connect. The request accepts the following data in JSON format. At least <code>Name</code> or <code>Description</code> must be provided.
		 * Post quick-connects/{InstanceId}/{QuickConnectId}/name
		 * @param {string} InstanceId The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.
		 * @param {string} QuickConnectId The identifier for the quick connect.
		 * @return {void} Success
		 */
		UpdateQuickConnectName(InstanceId: string, QuickConnectId: string, requestBody: UpdateQuickConnectNamePostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'quick-connects/' + (InstanceId == null ? '' : encodeURIComponent(InstanceId)) + '/' + (QuickConnectId == null ? '' : encodeURIComponent(QuickConnectId)) + '/name', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Whether agents with this routing profile will have their routing order calculated based on <i>time since their last inbound contact</i> or <i>longest idle time</i>.
		 * Post routing-profiles/{InstanceId}/{RoutingProfileId}/agent-availability-timer
		 * @param {string} InstanceId The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.
		 * @param {string} RoutingProfileId The identifier of the routing profile.
		 * @return {void} Success
		 */
		UpdateRoutingProfileAgentAvailabilityTimer(InstanceId: string, RoutingProfileId: string, requestBody: UpdateRoutingProfileAgentAvailabilityTimerPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'routing-profiles/' + (InstanceId == null ? '' : encodeURIComponent(InstanceId)) + '/' + (RoutingProfileId == null ? '' : encodeURIComponent(RoutingProfileId)) + '/agent-availability-timer', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates the channels that agents can handle in the Contact Control Panel (CCP) for a routing profile.
		 * Post routing-profiles/{InstanceId}/{RoutingProfileId}/concurrency
		 * @param {string} InstanceId The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.
		 * @param {string} RoutingProfileId The identifier of the routing profile.
		 * @return {void} Success
		 */
		UpdateRoutingProfileConcurrency(InstanceId: string, RoutingProfileId: string, requestBody: UpdateRoutingProfileConcurrencyPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'routing-profiles/' + (InstanceId == null ? '' : encodeURIComponent(InstanceId)) + '/' + (RoutingProfileId == null ? '' : encodeURIComponent(RoutingProfileId)) + '/concurrency', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates the default outbound queue of a routing profile.
		 * Post routing-profiles/{InstanceId}/{RoutingProfileId}/default-outbound-queue
		 * @param {string} InstanceId The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.
		 * @param {string} RoutingProfileId The identifier of the routing profile.
		 * @return {void} Success
		 */
		UpdateRoutingProfileDefaultOutboundQueue(InstanceId: string, RoutingProfileId: string, requestBody: UpdateRoutingProfileDefaultOutboundQueuePostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'routing-profiles/' + (InstanceId == null ? '' : encodeURIComponent(InstanceId)) + '/' + (RoutingProfileId == null ? '' : encodeURIComponent(RoutingProfileId)) + '/default-outbound-queue', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates the name and description of a routing profile. The request accepts the following data in JSON format. At least <code>Name</code> or <code>Description</code> must be provided.
		 * Post routing-profiles/{InstanceId}/{RoutingProfileId}/name
		 * @param {string} InstanceId The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.
		 * @param {string} RoutingProfileId The identifier of the routing profile.
		 * @return {void} Success
		 */
		UpdateRoutingProfileName(InstanceId: string, RoutingProfileId: string, requestBody: UpdateRoutingProfileNamePostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'routing-profiles/' + (InstanceId == null ? '' : encodeURIComponent(InstanceId)) + '/' + (RoutingProfileId == null ? '' : encodeURIComponent(RoutingProfileId)) + '/name', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Assigns the specified hierarchy group to the specified user.
		 * Post users/{InstanceId}/{UserId}/hierarchy
		 * @param {string} UserId The identifier of the user account.
		 * @param {string} InstanceId The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.
		 * @return {void} Success
		 */
		UpdateUserHierarchy(UserId: string, InstanceId: string, requestBody: UpdateUserHierarchyPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'users/' + (InstanceId == null ? '' : encodeURIComponent(InstanceId)) + '/' + (UserId == null ? '' : encodeURIComponent(UserId)) + '/hierarchy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates the name of the user hierarchy group.
		 * Post user-hierarchy-groups/{InstanceId}/{HierarchyGroupId}/name
		 * @param {string} HierarchyGroupId The identifier of the hierarchy group.
		 * @param {string} InstanceId The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.
		 * @return {void} Success
		 */
		UpdateUserHierarchyGroupName(HierarchyGroupId: string, InstanceId: string, requestBody: UpdateUserHierarchyGroupNamePostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'user-hierarchy-groups/' + (InstanceId == null ? '' : encodeURIComponent(InstanceId)) + '/' + (HierarchyGroupId == null ? '' : encodeURIComponent(HierarchyGroupId)) + '/name', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Updates the identity information for the specified user.</p> <important> <p>We strongly recommend limiting who has the ability to invoke <code>UpdateUserIdentityInfo</code>. Someone with that ability can change the login credentials of other users by changing their email address. This poses a security risk to your organization. They can change the email address of a user to the attacker's email address, and then reset the password through email. For more information, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/security-profile-best-practices.html">Best Practices for Security Profiles</a> in the <i>Amazon Connect Administrator Guide</i>.</p> </important>
		 * Post users/{InstanceId}/{UserId}/identity-info
		 * @param {string} UserId The identifier of the user account.
		 * @param {string} InstanceId The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.
		 * @return {void} Success
		 */
		UpdateUserIdentityInfo(UserId: string, InstanceId: string, requestBody: UpdateUserIdentityInfoPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'users/' + (InstanceId == null ? '' : encodeURIComponent(InstanceId)) + '/' + (UserId == null ? '' : encodeURIComponent(UserId)) + '/identity-info', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates the phone configuration settings for the specified user.
		 * Post users/{InstanceId}/{UserId}/phone-config
		 * @param {string} UserId The identifier of the user account.
		 * @param {string} InstanceId The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.
		 * @return {void} Success
		 */
		UpdateUserPhoneConfig(UserId: string, InstanceId: string, requestBody: UpdateUserPhoneConfigPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'users/' + (InstanceId == null ? '' : encodeURIComponent(InstanceId)) + '/' + (UserId == null ? '' : encodeURIComponent(UserId)) + '/phone-config', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Assigns the specified routing profile to the specified user.
		 * Post users/{InstanceId}/{UserId}/routing-profile
		 * @param {string} UserId The identifier of the user account.
		 * @param {string} InstanceId The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.
		 * @return {void} Success
		 */
		UpdateUserRoutingProfile(UserId: string, InstanceId: string, requestBody: UpdateUserRoutingProfilePostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'users/' + (InstanceId == null ? '' : encodeURIComponent(InstanceId)) + '/' + (UserId == null ? '' : encodeURIComponent(UserId)) + '/routing-profile', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Assigns the specified security profiles to the specified user.
		 * Post users/{InstanceId}/{UserId}/security-profiles
		 * @param {string} UserId The identifier of the user account.
		 * @param {string} InstanceId The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.
		 * @return {void} Success
		 */
		UpdateUserSecurityProfiles(UserId: string, InstanceId: string, requestBody: UpdateUserSecurityProfilesPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'users/' + (InstanceId == null ? '' : encodeURIComponent(InstanceId)) + '/' + (UserId == null ? '' : encodeURIComponent(UserId)) + '/security-profiles', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

	export interface ActivateEvaluationFormPostBody {

		/**
		 * The version of the evaluation form to activate. If the version property is not provided, the latest version of the evaluation form is activated.
		 * Required
		 * Minimum: 1
		 */
		EvaluationFormVersion: number;
	}
	export interface ActivateEvaluationFormPostBodyFormProperties {

		/**
		 * The version of the evaluation form to activate. If the version property is not provided, the latest version of the evaluation form is activated.
		 * Required
		 * Minimum: 1
		 */
		EvaluationFormVersion: FormControl<number | null | undefined>,
	}
	export function CreateActivateEvaluationFormPostBodyFormGroup() {
		return new FormGroup<ActivateEvaluationFormPostBodyFormProperties>({
			EvaluationFormVersion: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(1)]),
		});

	}

	export interface AssociateApprovedOriginPutBody {

		/**
		 * The domain to add to your allow list.
		 * Required
		 * Max length: 267
		 */
		Origin: string;
	}
	export interface AssociateApprovedOriginPutBodyFormProperties {

		/**
		 * The domain to add to your allow list.
		 * Required
		 * Max length: 267
		 */
		Origin: FormControl<string | null | undefined>,
	}
	export function CreateAssociateApprovedOriginPutBodyFormGroup() {
		return new FormGroup<AssociateApprovedOriginPutBodyFormProperties>({
			Origin: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(267)]),
		});

	}

	export interface AssociateBotPutBody {

		/** Configuration information of an Amazon Lex bot. */
		LexBot?: AssociateBotPutBodyLexBot;

		/** Configuration information of an Amazon Lex V2 bot. */
		LexV2Bot?: AssociateBotPutBodyLexV2Bot;
	}
	export interface AssociateBotPutBodyFormProperties {
	}
	export function CreateAssociateBotPutBodyFormGroup() {
		return new FormGroup<AssociateBotPutBodyFormProperties>({
		});

	}

	export interface AssociateBotPutBodyLexBot {
		Name?: string;
		LexRegion?: string;
	}
	export interface AssociateBotPutBodyLexBotFormProperties {
		Name: FormControl<string | null | undefined>,
		LexRegion: FormControl<string | null | undefined>,
	}
	export function CreateAssociateBotPutBodyLexBotFormGroup() {
		return new FormGroup<AssociateBotPutBodyLexBotFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			LexRegion: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AssociateBotPutBodyLexV2Bot {
		AliasArn?: string;
	}
	export interface AssociateBotPutBodyLexV2BotFormProperties {
		AliasArn: FormControl<string | null | undefined>,
	}
	export function CreateAssociateBotPutBodyLexV2BotFormGroup() {
		return new FormGroup<AssociateBotPutBodyLexV2BotFormProperties>({
			AliasArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DisassociateBotPostBody {

		/** Configuration information of an Amazon Lex bot. */
		LexBot?: DisassociateBotPostBodyLexBot;

		/** Configuration information of an Amazon Lex V2 bot. */
		LexV2Bot?: DisassociateBotPostBodyLexV2Bot;
	}
	export interface DisassociateBotPostBodyFormProperties {
	}
	export function CreateDisassociateBotPostBodyFormGroup() {
		return new FormGroup<DisassociateBotPostBodyFormProperties>({
		});

	}

	export interface DisassociateBotPostBodyLexBot {
		Name?: string;
		LexRegion?: string;
	}
	export interface DisassociateBotPostBodyLexBotFormProperties {
		Name: FormControl<string | null | undefined>,
		LexRegion: FormControl<string | null | undefined>,
	}
	export function CreateDisassociateBotPostBodyLexBotFormGroup() {
		return new FormGroup<DisassociateBotPostBodyLexBotFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			LexRegion: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DisassociateBotPostBodyLexV2Bot {
		AliasArn?: string;
	}
	export interface DisassociateBotPostBodyLexV2BotFormProperties {
		AliasArn: FormControl<string | null | undefined>,
	}
	export function CreateDisassociateBotPostBodyLexV2BotFormGroup() {
		return new FormGroup<DisassociateBotPostBodyLexV2BotFormProperties>({
			AliasArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AssociateDefaultVocabularyPutBody {

		/**
		 * The identifier of the custom vocabulary. If this is empty, the default is set to none.
		 * Max length: 500
		 * Min length: 1
		 */
		VocabularyId?: string | null;
	}
	export interface AssociateDefaultVocabularyPutBodyFormProperties {

		/**
		 * The identifier of the custom vocabulary. If this is empty, the default is set to none.
		 * Max length: 500
		 * Min length: 1
		 */
		VocabularyId: FormControl<string | null | undefined>,
	}
	export function CreateAssociateDefaultVocabularyPutBodyFormGroup() {
		return new FormGroup<AssociateDefaultVocabularyPutBodyFormProperties>({
			VocabularyId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(500)]),
		});

	}

	export interface AssociateInstanceStorageConfigPutBody {

		/**
		 * A valid resource type.
		 * Required
		 */
		ResourceType: InstanceStorageResourceType;

		/**
		 * The storage configuration for the instance.
		 * Required
		 */
		StorageConfig: AssociateInstanceStorageConfigPutBodyStorageConfig;
	}
	export interface AssociateInstanceStorageConfigPutBodyFormProperties {

		/**
		 * A valid resource type.
		 * Required
		 */
		ResourceType: FormControl<InstanceStorageResourceType | null | undefined>,
	}
	export function CreateAssociateInstanceStorageConfigPutBodyFormGroup() {
		return new FormGroup<AssociateInstanceStorageConfigPutBodyFormProperties>({
			ResourceType: new FormControl<InstanceStorageResourceType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AssociateInstanceStorageConfigPutBodyStorageConfig {
		AssociationId?: string;
		StorageType?: StorageType;
		S3Config?: S3Config;
		KinesisVideoStreamConfig?: KinesisVideoStreamConfig;
		KinesisStreamConfig?: KinesisStreamConfig;
		KinesisFirehoseConfig?: KinesisFirehoseConfig;
	}
	export interface AssociateInstanceStorageConfigPutBodyStorageConfigFormProperties {
		AssociationId: FormControl<string | null | undefined>,
		StorageType: FormControl<StorageType | null | undefined>,
	}
	export function CreateAssociateInstanceStorageConfigPutBodyStorageConfigFormGroup() {
		return new FormGroup<AssociateInstanceStorageConfigPutBodyStorageConfigFormProperties>({
			AssociationId: new FormControl<string | null | undefined>(undefined),
			StorageType: new FormControl<StorageType | null | undefined>(undefined),
		});

	}

	export interface AssociateLambdaFunctionPutBody {

		/**
		 * The Amazon Resource Name (ARN) for the Lambda function being associated. Maximum number of characters allowed is 140.
		 * Required
		 * Max length: 140
		 * Min length: 1
		 */
		FunctionArn: string;
	}
	export interface AssociateLambdaFunctionPutBodyFormProperties {

		/**
		 * The Amazon Resource Name (ARN) for the Lambda function being associated. Maximum number of characters allowed is 140.
		 * Required
		 * Max length: 140
		 * Min length: 1
		 */
		FunctionArn: FormControl<string | null | undefined>,
	}
	export function CreateAssociateLambdaFunctionPutBodyFormGroup() {
		return new FormGroup<AssociateLambdaFunctionPutBodyFormProperties>({
			FunctionArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(140)]),
		});

	}

	export interface AssociateLexBotPutBody {

		/**
		 * Configuration information of an Amazon Lex bot.
		 * Required
		 */
		LexBot: AssociateLexBotPutBodyLexBot;
	}
	export interface AssociateLexBotPutBodyFormProperties {
	}
	export function CreateAssociateLexBotPutBodyFormGroup() {
		return new FormGroup<AssociateLexBotPutBodyFormProperties>({
		});

	}

	export interface AssociateLexBotPutBodyLexBot {
		Name?: string;
		LexRegion?: string;
	}
	export interface AssociateLexBotPutBodyLexBotFormProperties {
		Name: FormControl<string | null | undefined>,
		LexRegion: FormControl<string | null | undefined>,
	}
	export function CreateAssociateLexBotPutBodyLexBotFormGroup() {
		return new FormGroup<AssociateLexBotPutBodyLexBotFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			LexRegion: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AssociatePhoneNumberContactFlowPutBody {

		/**
		 * The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		InstanceId: string;

		/**
		 * The identifier of the flow.
		 * Required
		 * Max length: 500
		 */
		ContactFlowId: string;
	}
	export interface AssociatePhoneNumberContactFlowPutBodyFormProperties {

		/**
		 * The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		InstanceId: FormControl<string | null | undefined>,

		/**
		 * The identifier of the flow.
		 * Required
		 * Max length: 500
		 */
		ContactFlowId: FormControl<string | null | undefined>,
	}
	export function CreateAssociatePhoneNumberContactFlowPutBodyFormGroup() {
		return new FormGroup<AssociatePhoneNumberContactFlowPutBodyFormProperties>({
			InstanceId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100)]),
			ContactFlowId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(500)]),
		});

	}

	export interface AssociateQueueQuickConnectsPostBody {

		/**
		 * The quick connects to associate with this queue.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		QuickConnectIds: Array<string>;
	}
	export interface AssociateQueueQuickConnectsPostBodyFormProperties {
	}
	export function CreateAssociateQueueQuickConnectsPostBodyFormGroup() {
		return new FormGroup<AssociateQueueQuickConnectsPostBodyFormProperties>({
		});

	}

	export interface AssociateRoutingProfileQueuesPostBody {

		/**
		 * The queues to associate with this routing profile.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 10
		 */
		QueueConfigs: Array<RoutingProfileQueueConfig>;
	}
	export interface AssociateRoutingProfileQueuesPostBodyFormProperties {
	}
	export function CreateAssociateRoutingProfileQueuesPostBodyFormGroup() {
		return new FormGroup<AssociateRoutingProfileQueuesPostBodyFormProperties>({
		});

	}

	export interface AssociateSecurityKeyPutBody {

		/**
		 * A valid security key in PEM format.
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		Key: string;
	}
	export interface AssociateSecurityKeyPutBodyFormProperties {

		/**
		 * A valid security key in PEM format.
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		Key: FormControl<string | null | undefined>,
	}
	export function CreateAssociateSecurityKeyPutBodyFormGroup() {
		return new FormGroup<AssociateSecurityKeyPutBodyFormProperties>({
			Key: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1024)]),
		});

	}

	export interface ClaimPhoneNumberPostBody {

		/**
		 * The Amazon Resource Name (ARN) for Amazon Connect instances or traffic distribution groups that phone numbers are claimed to.
		 * Required
		 */
		TargetArn: string;

		/**
		 * The phone number you want to claim. Phone numbers are formatted <code>[+] [country code] [subscriber number including area code]</code>.
		 * Required
		 */
		PhoneNumber: string;

		/**
		 * The description of the phone number.
		 * Max length: 500
		 * Min length: 0
		 */
		PhoneNumberDescription?: string | null;

		/** The tags used to organize, track, or control access for this resource. For example, { "tags": {"key1":"value1", "key2":"value2"} }. */
		Tags?: {[id: string]: string };

		/**
		 * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.</p> <p>Pattern: <code>^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$</code> </p>
		 * Max length: 500
		 */
		ClientToken?: string | null;
	}
	export interface ClaimPhoneNumberPostBodyFormProperties {

		/**
		 * The Amazon Resource Name (ARN) for Amazon Connect instances or traffic distribution groups that phone numbers are claimed to.
		 * Required
		 */
		TargetArn: FormControl<string | null | undefined>,

		/**
		 * The phone number you want to claim. Phone numbers are formatted <code>[+] [country code] [subscriber number including area code]</code>.
		 * Required
		 */
		PhoneNumber: FormControl<string | null | undefined>,

		/**
		 * The description of the phone number.
		 * Max length: 500
		 * Min length: 0
		 */
		PhoneNumberDescription: FormControl<string | null | undefined>,

		/** The tags used to organize, track, or control access for this resource. For example, { "tags": {"key1":"value1", "key2":"value2"} }. */
		Tags: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.</p> <p>Pattern: <code>^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$</code> </p>
		 * Max length: 500
		 */
		ClientToken: FormControl<string | null | undefined>,
	}
	export function CreateClaimPhoneNumberPostBodyFormGroup() {
		return new FormGroup<ClaimPhoneNumberPostBodyFormProperties>({
			TargetArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PhoneNumber: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('\\+[1-9]\\d{1,14}$')]),
			PhoneNumberDescription: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(500), Validators.pattern('^[\W\S_]*')]),
			Tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			ClientToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(500)]),
		});

	}

	export interface CreateAgentStatusPutBody {

		/**
		 * The name of the status.
		 * Required
		 * Max length: 127
		 * Min length: 1
		 */
		Name: string;

		/**
		 * The description of the status.
		 * Max length: 250
		 * Min length: 1
		 */
		Description?: string | null;

		/**
		 * The state of the status.
		 * Required
		 */
		State: EvaluationFormScoringStatus;

		/**
		 * The display order of the status.
		 * Minimum: 1
		 * Maximum: 50
		 */
		DisplayOrder?: number | null;

		/** The tags used to organize, track, or control access for this resource. For example, { "tags": {"key1":"value1", "key2":"value2"} }. */
		Tags?: {[id: string]: string };
	}
	export interface CreateAgentStatusPutBodyFormProperties {

		/**
		 * The name of the status.
		 * Required
		 * Max length: 127
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * The description of the status.
		 * Max length: 250
		 * Min length: 1
		 */
		Description: FormControl<string | null | undefined>,

		/**
		 * The state of the status.
		 * Required
		 */
		State: FormControl<EvaluationFormScoringStatus | null | undefined>,

		/**
		 * The display order of the status.
		 * Minimum: 1
		 * Maximum: 50
		 */
		DisplayOrder: FormControl<number | null | undefined>,

		/** The tags used to organize, track, or control access for this resource. For example, { "tags": {"key1":"value1", "key2":"value2"} }. */
		Tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateAgentStatusPutBodyFormGroup() {
		return new FormGroup<CreateAgentStatusPutBodyFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(127)]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(250)]),
			State: new FormControl<EvaluationFormScoringStatus | null | undefined>(undefined, [Validators.required]),
			DisplayOrder: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(50)]),
			Tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateContactFlowPutBody {

		/**
		 * The name of the flow.
		 * Required
		 * Min length: 1
		 */
		Name: string;

		/**
		 * The type of the flow. For descriptions of the available types, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/create-contact-flow.html#contact-flow-types">Choose a flow type</a> in the <i>Amazon Connect Administrator Guide</i>.
		 * Required
		 */
		Type: ContactFlowType;

		/** The description of the flow. */
		Description?: string | null;

		/**
		 * The content of the flow.
		 * Required
		 */
		Content: string;

		/** The tags used to organize, track, or control access for this resource. For example, { "tags": {"key1":"value1", "key2":"value2"} }. */
		Tags?: {[id: string]: string };
	}
	export interface CreateContactFlowPutBodyFormProperties {

		/**
		 * The name of the flow.
		 * Required
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * The type of the flow. For descriptions of the available types, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/create-contact-flow.html#contact-flow-types">Choose a flow type</a> in the <i>Amazon Connect Administrator Guide</i>.
		 * Required
		 */
		Type: FormControl<ContactFlowType | null | undefined>,

		/** The description of the flow. */
		Description: FormControl<string | null | undefined>,

		/**
		 * The content of the flow.
		 * Required
		 */
		Content: FormControl<string | null | undefined>,

		/** The tags used to organize, track, or control access for this resource. For example, { "tags": {"key1":"value1", "key2":"value2"} }. */
		Tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateContactFlowPutBodyFormGroup() {
		return new FormGroup<CreateContactFlowPutBodyFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			Type: new FormControl<ContactFlowType | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
			Content: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateContactFlowModulePutBody {

		/**
		 * The name of the flow module.
		 * Required
		 * Max length: 127
		 * Min length: 1
		 */
		Name: string;

		/**
		 * The description of the flow module.
		 * Max length: 500
		 * Min length: 0
		 */
		Description?: string | null;

		/**
		 * The content of the flow module.
		 * Required
		 * Max length: 256000
		 * Min length: 1
		 */
		Content: string;

		/** The tags used to organize, track, or control access for this resource. For example, { "tags": {"key1":"value1", "key2":"value2"} }. */
		Tags?: {[id: string]: string };

		/**
		 * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.
		 * Max length: 500
		 */
		ClientToken?: string | null;
	}
	export interface CreateContactFlowModulePutBodyFormProperties {

		/**
		 * The name of the flow module.
		 * Required
		 * Max length: 127
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * The description of the flow module.
		 * Max length: 500
		 * Min length: 0
		 */
		Description: FormControl<string | null | undefined>,

		/**
		 * The content of the flow module.
		 * Required
		 * Max length: 256000
		 * Min length: 1
		 */
		Content: FormControl<string | null | undefined>,

		/** The tags used to organize, track, or control access for this resource. For example, { "tags": {"key1":"value1", "key2":"value2"} }. */
		Tags: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.
		 * Max length: 500
		 */
		ClientToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateContactFlowModulePutBodyFormGroup() {
		return new FormGroup<CreateContactFlowModulePutBodyFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(127), Validators.pattern('.*\S.*')]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(500), Validators.pattern('.*\S.*')]),
			Content: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256000)]),
			Tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			ClientToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(500)]),
		});

	}

	export interface CreateEvaluationFormPutBody {

		/**
		 * A title of the evaluation form.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Title: string;

		/**
		 * The description of the evaluation form.
		 * Max length: 1024
		 * Min length: 0
		 */
		Description?: string | null;

		/**
		 * Items that are part of the evaluation form. The total number of sections and questions must not exceed 100 each. Questions must be contained in a section.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 100
		 */
		Items: Array<EvaluationFormItem>;

		/** Information about scoring strategy for an evaluation form. */
		ScoringStrategy?: CreateEvaluationFormPutBodyScoringStrategy;

		/**
		 * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.
		 * Max length: 500
		 */
		ClientToken?: string | null;
	}
	export interface CreateEvaluationFormPutBodyFormProperties {

		/**
		 * A title of the evaluation form.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Title: FormControl<string | null | undefined>,

		/**
		 * The description of the evaluation form.
		 * Max length: 1024
		 * Min length: 0
		 */
		Description: FormControl<string | null | undefined>,

		/**
		 * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.
		 * Max length: 500
		 */
		ClientToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateEvaluationFormPutBodyFormGroup() {
		return new FormGroup<CreateEvaluationFormPutBodyFormProperties>({
			Title: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128)]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(1024)]),
			ClientToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(500)]),
		});

	}

	export interface CreateEvaluationFormPutBodyScoringStrategy {
		Mode?: EvaluationFormScoringMode;
		Status?: EvaluationFormScoringStatus;
	}
	export interface CreateEvaluationFormPutBodyScoringStrategyFormProperties {
		Mode: FormControl<EvaluationFormScoringMode | null | undefined>,
		Status: FormControl<EvaluationFormScoringStatus | null | undefined>,
	}
	export function CreateCreateEvaluationFormPutBodyScoringStrategyFormGroup() {
		return new FormGroup<CreateEvaluationFormPutBodyScoringStrategyFormProperties>({
			Mode: new FormControl<EvaluationFormScoringMode | null | undefined>(undefined),
			Status: new FormControl<EvaluationFormScoringStatus | null | undefined>(undefined),
		});

	}

	export interface CreateHoursOfOperationPutBody {

		/**
		 * The name of the hours of operation.
		 * Required
		 * Max length: 127
		 * Min length: 1
		 */
		Name: string;

		/**
		 * The description of the hours of operation.
		 * Max length: 250
		 * Min length: 1
		 */
		Description?: string | null;

		/**
		 * The time zone of the hours of operation.
		 * Required
		 */
		TimeZone: string;

		/**
		 * Configuration information for the hours of operation: day, start time, and end time.
		 * Required
		 * Minimum items: 0
		 * Maximum items: 100
		 */
		Config: Array<HoursOfOperationConfig>;

		/** The tags used to organize, track, or control access for this resource. For example, { "tags": {"key1":"value1", "key2":"value2"} }. */
		Tags?: {[id: string]: string };
	}
	export interface CreateHoursOfOperationPutBodyFormProperties {

		/**
		 * The name of the hours of operation.
		 * Required
		 * Max length: 127
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * The description of the hours of operation.
		 * Max length: 250
		 * Min length: 1
		 */
		Description: FormControl<string | null | undefined>,

		/**
		 * The time zone of the hours of operation.
		 * Required
		 */
		TimeZone: FormControl<string | null | undefined>,

		/** The tags used to organize, track, or control access for this resource. For example, { "tags": {"key1":"value1", "key2":"value2"} }. */
		Tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateHoursOfOperationPutBodyFormGroup() {
		return new FormGroup<CreateHoursOfOperationPutBodyFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(127)]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(250)]),
			TimeZone: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateInstancePutBody {

		/**
		 * The idempotency token.
		 * Max length: 500
		 */
		ClientToken?: string | null;

		/**
		 * The type of identity management for your Amazon Connect users.
		 * Required
		 */
		IdentityManagementType: DirectoryType;

		/**
		 * The name for your instance.
		 * Max length: 45
		 * Min length: 1
		 */
		InstanceAlias?: string | null;

		/**
		 * The identifier for the directory.
		 * Max length: 12
		 * Min length: 12
		 */
		DirectoryId?: string | null;

		/**
		 * Your contact center handles incoming contacts.
		 * Required
		 */
		InboundCallsEnabled: boolean;

		/**
		 * Your contact center allows outbound calls.
		 * Required
		 */
		OutboundCallsEnabled: boolean;
	}
	export interface CreateInstancePutBodyFormProperties {

		/**
		 * The idempotency token.
		 * Max length: 500
		 */
		ClientToken: FormControl<string | null | undefined>,

		/**
		 * The type of identity management for your Amazon Connect users.
		 * Required
		 */
		IdentityManagementType: FormControl<DirectoryType | null | undefined>,

		/**
		 * The name for your instance.
		 * Max length: 45
		 * Min length: 1
		 */
		InstanceAlias: FormControl<string | null | undefined>,

		/**
		 * The identifier for the directory.
		 * Max length: 12
		 * Min length: 12
		 */
		DirectoryId: FormControl<string | null | undefined>,

		/**
		 * Your contact center handles incoming contacts.
		 * Required
		 */
		InboundCallsEnabled: FormControl<boolean | null | undefined>,

		/**
		 * Your contact center allows outbound calls.
		 * Required
		 */
		OutboundCallsEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateInstancePutBodyFormGroup() {
		return new FormGroup<CreateInstancePutBodyFormProperties>({
			ClientToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(500)]),
			IdentityManagementType: new FormControl<DirectoryType | null | undefined>(undefined, [Validators.required]),
			InstanceAlias: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(45), Validators.pattern('^(?!d-)([\da-zA-Z]+)([-]*[\da-zA-Z])*$')]),
			DirectoryId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(12), Validators.maxLength(12), Validators.pattern('^d-[0-9a-f]{10}$')]),
			InboundCallsEnabled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			OutboundCallsEnabled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateIntegrationAssociationPutBody {

		/**
		 * The type of information to be ingested.
		 * Required
		 */
		IntegrationType: IntegrationType;

		/**
		 * <p>The Amazon Resource Name (ARN) of the integration.</p> <note> <p>When integrating with Amazon Pinpoint, the Amazon Connect and Amazon Pinpoint instances must be in the same account.</p> </note>
		 * Required
		 */
		IntegrationArn: string;

		/**
		 * The URL for the external application. This field is only required for the EVENT integration type.
		 * Max length: 2000
		 * Min length: 1
		 */
		SourceApplicationUrl?: string | null;

		/**
		 * The name of the external application. This field is only required for the EVENT integration type.
		 * Max length: 100
		 * Min length: 1
		 */
		SourceApplicationName?: string | null;

		/** The type of the data source. This field is only required for the EVENT integration type. */
		SourceType?: SourceType | null;

		/** The tags used to organize, track, or control access for this resource. For example, { "tags": {"key1":"value1", "key2":"value2"} }. */
		Tags?: {[id: string]: string };
	}
	export interface CreateIntegrationAssociationPutBodyFormProperties {

		/**
		 * The type of information to be ingested.
		 * Required
		 */
		IntegrationType: FormControl<IntegrationType | null | undefined>,

		/**
		 * <p>The Amazon Resource Name (ARN) of the integration.</p> <note> <p>When integrating with Amazon Pinpoint, the Amazon Connect and Amazon Pinpoint instances must be in the same account.</p> </note>
		 * Required
		 */
		IntegrationArn: FormControl<string | null | undefined>,

		/**
		 * The URL for the external application. This field is only required for the EVENT integration type.
		 * Max length: 2000
		 * Min length: 1
		 */
		SourceApplicationUrl: FormControl<string | null | undefined>,

		/**
		 * The name of the external application. This field is only required for the EVENT integration type.
		 * Max length: 100
		 * Min length: 1
		 */
		SourceApplicationName: FormControl<string | null | undefined>,

		/** The type of the data source. This field is only required for the EVENT integration type. */
		SourceType: FormControl<SourceType | null | undefined>,

		/** The tags used to organize, track, or control access for this resource. For example, { "tags": {"key1":"value1", "key2":"value2"} }. */
		Tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateIntegrationAssociationPutBodyFormGroup() {
		return new FormGroup<CreateIntegrationAssociationPutBodyFormProperties>({
			IntegrationType: new FormControl<IntegrationType | null | undefined>(undefined, [Validators.required]),
			IntegrationArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SourceApplicationUrl: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2000)]),
			SourceApplicationName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^[a-zA-Z0-9_ -]+$')]),
			SourceType: new FormControl<SourceType | null | undefined>(undefined),
			Tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateParticipantPostBody {

		/**
		 * The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		InstanceId: string;

		/**
		 * The identifier of the contact in this instance of Amazon Connect. Only contacts in the CHAT channel are supported.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		ContactId: string;

		/**
		 * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.
		 * Max length: 500
		 */
		ClientToken?: string | null;

		/**
		 * The details to add for the participant.
		 * Required
		 */
		ParticipantDetails: CreateParticipantPostBodyParticipantDetails;
	}
	export interface CreateParticipantPostBodyFormProperties {

		/**
		 * The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		InstanceId: FormControl<string | null | undefined>,

		/**
		 * The identifier of the contact in this instance of Amazon Connect. Only contacts in the CHAT channel are supported.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		ContactId: FormControl<string | null | undefined>,

		/**
		 * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.
		 * Max length: 500
		 */
		ClientToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateParticipantPostBodyFormGroup() {
		return new FormGroup<CreateParticipantPostBodyFormProperties>({
			InstanceId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100)]),
			ContactId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256)]),
			ClientToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(500)]),
		});

	}

	export interface CreateParticipantPostBodyParticipantDetails {
		ParticipantRole?: ParticipantRole;
		DisplayName?: string;
	}
	export interface CreateParticipantPostBodyParticipantDetailsFormProperties {
		ParticipantRole: FormControl<ParticipantRole | null | undefined>,
		DisplayName: FormControl<string | null | undefined>,
	}
	export function CreateCreateParticipantPostBodyParticipantDetailsFormGroup() {
		return new FormGroup<CreateParticipantPostBodyParticipantDetailsFormProperties>({
			ParticipantRole: new FormControl<ParticipantRole | null | undefined>(undefined),
			DisplayName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreatePromptPutBody {

		/**
		 * The name of the prompt.
		 * Required
		 * Max length: 127
		 * Min length: 1
		 */
		Name: string;

		/**
		 * The description of the prompt.
		 * Max length: 250
		 * Min length: 1
		 */
		Description?: string | null;

		/**
		 * The URI for the S3 bucket where the prompt is stored.
		 * Required
		 * Max length: 512
		 * Min length: 1
		 */
		S3Uri: string;

		/** The tags used to organize, track, or control access for this resource. For example, { "tags": {"key1":"value1", "key2":"value2"} }. */
		Tags?: {[id: string]: string };
	}
	export interface CreatePromptPutBodyFormProperties {

		/**
		 * The name of the prompt.
		 * Required
		 * Max length: 127
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * The description of the prompt.
		 * Max length: 250
		 * Min length: 1
		 */
		Description: FormControl<string | null | undefined>,

		/**
		 * The URI for the S3 bucket where the prompt is stored.
		 * Required
		 * Max length: 512
		 * Min length: 1
		 */
		S3Uri: FormControl<string | null | undefined>,

		/** The tags used to organize, track, or control access for this resource. For example, { "tags": {"key1":"value1", "key2":"value2"} }. */
		Tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreatePromptPutBodyFormGroup() {
		return new FormGroup<CreatePromptPutBodyFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(127)]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(250)]),
			S3Uri: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(512), Validators.pattern('s3://\S+/.+')]),
			Tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateQueuePutBody {

		/**
		 * The name of the queue.
		 * Required
		 * Max length: 127
		 * Min length: 1
		 */
		Name: string;

		/**
		 * The description of the queue.
		 * Max length: 250
		 * Min length: 1
		 */
		Description?: string | null;

		/** The outbound caller ID name, number, and outbound whisper flow. */
		OutboundCallerConfig?: CreateQueuePutBodyOutboundCallerConfig;

		/**
		 * The identifier for the hours of operation.
		 * Required
		 */
		HoursOfOperationId: string;

		/**
		 * The maximum number of contacts that can be in the queue before it is considered full.
		 * Minimum: 0
		 */
		MaxContacts?: number | null;

		/**
		 * The quick connects available to agents who are working the queue.
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		QuickConnectIds?: Array<string>;

		/** The tags used to organize, track, or control access for this resource. For example, { "tags": {"key1":"value1", "key2":"value2"} }. */
		Tags?: {[id: string]: string };
	}
	export interface CreateQueuePutBodyFormProperties {

		/**
		 * The name of the queue.
		 * Required
		 * Max length: 127
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * The description of the queue.
		 * Max length: 250
		 * Min length: 1
		 */
		Description: FormControl<string | null | undefined>,

		/**
		 * The identifier for the hours of operation.
		 * Required
		 */
		HoursOfOperationId: FormControl<string | null | undefined>,

		/**
		 * The maximum number of contacts that can be in the queue before it is considered full.
		 * Minimum: 0
		 */
		MaxContacts: FormControl<number | null | undefined>,

		/** The tags used to organize, track, or control access for this resource. For example, { "tags": {"key1":"value1", "key2":"value2"} }. */
		Tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateQueuePutBodyFormGroup() {
		return new FormGroup<CreateQueuePutBodyFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(127)]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(250)]),
			HoursOfOperationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MaxContacts: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			Tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateQueuePutBodyOutboundCallerConfig {
		OutboundCallerIdName?: string;
		OutboundCallerIdNumberId?: string;
		OutboundFlowId?: string;
	}
	export interface CreateQueuePutBodyOutboundCallerConfigFormProperties {
		OutboundCallerIdName: FormControl<string | null | undefined>,
		OutboundCallerIdNumberId: FormControl<string | null | undefined>,
		OutboundFlowId: FormControl<string | null | undefined>,
	}
	export function CreateCreateQueuePutBodyOutboundCallerConfigFormGroup() {
		return new FormGroup<CreateQueuePutBodyOutboundCallerConfigFormProperties>({
			OutboundCallerIdName: new FormControl<string | null | undefined>(undefined),
			OutboundCallerIdNumberId: new FormControl<string | null | undefined>(undefined),
			OutboundFlowId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateQuickConnectPutBody {

		/**
		 * The name of the quick connect.
		 * Required
		 * Max length: 127
		 * Min length: 1
		 */
		Name: string;

		/**
		 * The description of the quick connect.
		 * Max length: 250
		 * Min length: 1
		 */
		Description?: string | null;

		/**
		 * Contains configuration settings for a quick connect.
		 * Required
		 */
		QuickConnectConfig: CreateQuickConnectPutBodyQuickConnectConfig;

		/** The tags used to organize, track, or control access for this resource. For example, { "tags": {"key1":"value1", "key2":"value2"} }. */
		Tags?: {[id: string]: string };
	}
	export interface CreateQuickConnectPutBodyFormProperties {

		/**
		 * The name of the quick connect.
		 * Required
		 * Max length: 127
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * The description of the quick connect.
		 * Max length: 250
		 * Min length: 1
		 */
		Description: FormControl<string | null | undefined>,

		/** The tags used to organize, track, or control access for this resource. For example, { "tags": {"key1":"value1", "key2":"value2"} }. */
		Tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateQuickConnectPutBodyFormGroup() {
		return new FormGroup<CreateQuickConnectPutBodyFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(127)]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(250)]),
			Tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateQuickConnectPutBodyQuickConnectConfig {
		QuickConnectType?: QuickConnectType;
		UserConfig?: UserQuickConnectConfig;
		QueueConfig?: QueueQuickConnectConfig;
		PhoneConfig?: PhoneNumberQuickConnectConfig;
	}
	export interface CreateQuickConnectPutBodyQuickConnectConfigFormProperties {
		QuickConnectType: FormControl<QuickConnectType | null | undefined>,
	}
	export function CreateCreateQuickConnectPutBodyQuickConnectConfigFormGroup() {
		return new FormGroup<CreateQuickConnectPutBodyQuickConnectConfigFormProperties>({
			QuickConnectType: new FormControl<QuickConnectType | null | undefined>(undefined),
		});

	}

	export interface CreateRoutingProfilePutBody {

		/**
		 * The name of the routing profile. Must not be more than 127 characters.
		 * Required
		 * Max length: 127
		 * Min length: 1
		 */
		Name: string;

		/**
		 * Description of the routing profile. Must not be more than 250 characters.
		 * Required
		 * Max length: 250
		 * Min length: 1
		 */
		Description: string;

		/**
		 * The default outbound queue for the routing profile.
		 * Required
		 */
		DefaultOutboundQueueId: string;

		/**
		 * <p>The inbound queues associated with the routing profile. If no queue is added, the agent can make only outbound calls.</p> <p>The limit of 10 array members applies to the maximum number of <code>RoutingProfileQueueConfig</code> objects that can be passed during a CreateRoutingProfile API request. It is different from the quota of 50 queues per routing profile per instance that is listed in <a href="https://docs.aws.amazon.com/connect/latest/adminguide/amazon-connect-service-limits.html">Amazon Connect service quotas</a>. </p>
		 * Minimum items: 1
		 * Maximum items: 10
		 */
		QueueConfigs?: Array<RoutingProfileQueueConfig>;

		/**
		 * The channels that agents can handle in the Contact Control Panel (CCP) for this routing profile.
		 * Required
		 */
		MediaConcurrencies: Array<MediaConcurrency>;

		/** The tags used to organize, track, or control access for this resource. For example, { "tags": {"key1":"value1", "key2":"value2"} }. */
		Tags?: {[id: string]: string };

		/** Whether agents with this routing profile will have their routing order calculated based on <i>time since their last inbound contact</i> or <i>longest idle time</i>. */
		AgentAvailabilityTimer?: AgentAvailabilityTimer | null;
	}
	export interface CreateRoutingProfilePutBodyFormProperties {

		/**
		 * The name of the routing profile. Must not be more than 127 characters.
		 * Required
		 * Max length: 127
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * Description of the routing profile. Must not be more than 250 characters.
		 * Required
		 * Max length: 250
		 * Min length: 1
		 */
		Description: FormControl<string | null | undefined>,

		/**
		 * The default outbound queue for the routing profile.
		 * Required
		 */
		DefaultOutboundQueueId: FormControl<string | null | undefined>,

		/** The tags used to organize, track, or control access for this resource. For example, { "tags": {"key1":"value1", "key2":"value2"} }. */
		Tags: FormControl<{[id: string]: string } | null | undefined>,

		/** Whether agents with this routing profile will have their routing order calculated based on <i>time since their last inbound contact</i> or <i>longest idle time</i>. */
		AgentAvailabilityTimer: FormControl<AgentAvailabilityTimer | null | undefined>,
	}
	export function CreateCreateRoutingProfilePutBodyFormGroup() {
		return new FormGroup<CreateRoutingProfilePutBodyFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(127)]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(250)]),
			DefaultOutboundQueueId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			AgentAvailabilityTimer: new FormControl<AgentAvailabilityTimer | null | undefined>(undefined),
		});

	}

	export interface CreateRulePostBody {

		/**
		 * A unique name for the rule.
		 * Required
		 * Max length: 200
		 * Min length: 1
		 */
		Name: string;

		/**
		 * The name of the event source. This field is required if <code>TriggerEventSource</code> is one of the following values: <code>OnZendeskTicketCreate</code> | <code>OnZendeskTicketStatusUpdate</code> | <code>OnSalesforceCaseCreate</code>
		 * Required
		 */
		TriggerEventSource: CreateRulePostBodyTriggerEventSource;

		/**
		 * The conditions of the rule.
		 * Required
		 */
		Function: string;

		/**
		 * A list of actions to be run when the rule is triggered.
		 * Required
		 */
		Actions: Array<RuleAction>;

		/**
		 * The publish status of the rule.
		 * Required
		 */
		PublishStatus: RulePublishStatus;

		/**
		 * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.
		 * Max length: 500
		 */
		ClientToken?: string | null;
	}
	export interface CreateRulePostBodyFormProperties {

		/**
		 * A unique name for the rule.
		 * Required
		 * Max length: 200
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * The conditions of the rule.
		 * Required
		 */
		Function: FormControl<string | null | undefined>,

		/**
		 * The publish status of the rule.
		 * Required
		 */
		PublishStatus: FormControl<RulePublishStatus | null | undefined>,

		/**
		 * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.
		 * Max length: 500
		 */
		ClientToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateRulePostBodyFormGroup() {
		return new FormGroup<CreateRulePostBodyFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(200), Validators.pattern('^[0-9a-zA-Z._-]+')]),
			Function: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PublishStatus: new FormControl<RulePublishStatus | null | undefined>(undefined, [Validators.required]),
			ClientToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(500)]),
		});

	}

	export interface CreateRulePostBodyTriggerEventSource {
		EventSourceName?: EventSourceName;
		IntegrationAssociationId?: string;
	}
	export interface CreateRulePostBodyTriggerEventSourceFormProperties {
		EventSourceName: FormControl<EventSourceName | null | undefined>,
		IntegrationAssociationId: FormControl<string | null | undefined>,
	}
	export function CreateCreateRulePostBodyTriggerEventSourceFormGroup() {
		return new FormGroup<CreateRulePostBodyTriggerEventSourceFormProperties>({
			EventSourceName: new FormControl<EventSourceName | null | undefined>(undefined),
			IntegrationAssociationId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateSecurityProfilePutBody {

		/**
		 * The name of the security profile.
		 * Required
		 * Max length: 127
		 * Min length: 1
		 */
		SecurityProfileName: string;

		/**
		 * The description of the security profile.
		 * Max length: 250
		 */
		Description?: string | null;

		/**
		 * Permissions assigned to the security profile. For a list of valid permissions, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/security-profile-list.html">List of security profile permissions</a>.
		 * Maximum items: 500
		 */
		Permissions?: Array<string>;

		/** The tags used to organize, track, or control access for this resource. For example, { "tags": {"key1":"value1", "key2":"value2"} }. */
		Tags?: {[id: string]: string };

		/** The list of tags that a security profile uses to restrict access to resources in Amazon Connect. */
		AllowedAccessControlTags?: {[id: string]: string };

		/**
		 * The list of resources that a security profile applies tag restrictions to in Amazon Connect. Following are acceptable ResourceNames: <code>User</code> | <code>SecurityProfile</code> | <code>Queue</code> | <code>RoutingProfile</code>
		 * Maximum items: 10
		 */
		TagRestrictedResources?: Array<string>;
	}
	export interface CreateSecurityProfilePutBodyFormProperties {

		/**
		 * The name of the security profile.
		 * Required
		 * Max length: 127
		 * Min length: 1
		 */
		SecurityProfileName: FormControl<string | null | undefined>,

		/**
		 * The description of the security profile.
		 * Max length: 250
		 */
		Description: FormControl<string | null | undefined>,

		/** The tags used to organize, track, or control access for this resource. For example, { "tags": {"key1":"value1", "key2":"value2"} }. */
		Tags: FormControl<{[id: string]: string } | null | undefined>,

		/** The list of tags that a security profile uses to restrict access to resources in Amazon Connect. */
		AllowedAccessControlTags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateSecurityProfilePutBodyFormGroup() {
		return new FormGroup<CreateSecurityProfilePutBodyFormProperties>({
			SecurityProfileName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(127), Validators.pattern('^[ a-zA-Z0-9_@-]+$')]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(250)]),
			Tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			AllowedAccessControlTags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateTaskTemplatePutBody {

		/**
		 * The name of the task template.
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		Name: string;

		/**
		 * The description of the task template.
		 * Max length: 255
		 * Min length: 1
		 */
		Description?: string | null;

		/**
		 * The identifier of the flow that runs by default when a task is created by referencing this template.
		 * Max length: 500
		 */
		ContactFlowId?: string | null;

		/** Describes constraints that apply to the template fields. */
		Constraints?: CreateTaskTemplatePutBodyConstraints;

		/** Describes default values for fields on a template. */
		Defaults?: CreateTaskTemplatePutBodyDefaults;

		/** Marks a template as <code>ACTIVE</code> or <code>INACTIVE</code> for a task to refer to it. Tasks can only be created from <code>ACTIVE</code> templates. If a template is marked as <code>INACTIVE</code>, then a task that refers to this template cannot be created. */
		Status?: TaskTemplateStatus | null;

		/**
		 * Fields that are part of the template.
		 * Required
		 */
		Fields: Array<TaskTemplateField>;

		/**
		 * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.
		 * Max length: 500
		 */
		ClientToken?: string | null;
	}
	export interface CreateTaskTemplatePutBodyFormProperties {

		/**
		 * The name of the task template.
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * The description of the task template.
		 * Max length: 255
		 * Min length: 1
		 */
		Description: FormControl<string | null | undefined>,

		/**
		 * The identifier of the flow that runs by default when a task is created by referencing this template.
		 * Max length: 500
		 */
		ContactFlowId: FormControl<string | null | undefined>,

		/** Marks a template as <code>ACTIVE</code> or <code>INACTIVE</code> for a task to refer to it. Tasks can only be created from <code>ACTIVE</code> templates. If a template is marked as <code>INACTIVE</code>, then a task that refers to this template cannot be created. */
		Status: FormControl<TaskTemplateStatus | null | undefined>,

		/**
		 * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.
		 * Max length: 500
		 */
		ClientToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateTaskTemplatePutBodyFormGroup() {
		return new FormGroup<CreateTaskTemplatePutBodyFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100)]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			ContactFlowId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(500)]),
			Status: new FormControl<TaskTemplateStatus | null | undefined>(undefined),
			ClientToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(500)]),
		});

	}

	export interface CreateTaskTemplatePutBodyConstraints {
		RequiredFields?: Array<RequiredFieldInfo>;
		ReadOnlyFields?: Array<ReadOnlyFieldInfo>;
		InvisibleFields?: Array<InvisibleFieldInfo>;
	}
	export interface CreateTaskTemplatePutBodyConstraintsFormProperties {
	}
	export function CreateCreateTaskTemplatePutBodyConstraintsFormGroup() {
		return new FormGroup<CreateTaskTemplatePutBodyConstraintsFormProperties>({
		});

	}

	export interface CreateTaskTemplatePutBodyDefaults {
		DefaultFieldValues?: Array<TaskTemplateDefaultFieldValue>;
	}
	export interface CreateTaskTemplatePutBodyDefaultsFormProperties {
	}
	export function CreateCreateTaskTemplatePutBodyDefaultsFormGroup() {
		return new FormGroup<CreateTaskTemplatePutBodyDefaultsFormProperties>({
		});

	}

	export interface CreateTrafficDistributionGroupPutBody {

		/**
		 * The name for the traffic distribution group.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Name: string;

		/**
		 * A description for the traffic distribution group.
		 * Max length: 250
		 * Min length: 1
		 */
		Description?: string | null;

		/**
		 * The identifier of the Amazon Connect instance that has been replicated. You can find the <code>instanceId</code> in the ARN of the instance.
		 * Required
		 * Max length: 250
		 * Min length: 1
		 */
		InstanceId: string;

		/**
		 * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.
		 * Max length: 500
		 */
		ClientToken?: string | null;

		/** The tags used to organize, track, or control access for this resource. For example, { "tags": {"key1":"value1", "key2":"value2"} }. */
		Tags?: {[id: string]: string };
	}
	export interface CreateTrafficDistributionGroupPutBodyFormProperties {

		/**
		 * The name for the traffic distribution group.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * A description for the traffic distribution group.
		 * Max length: 250
		 * Min length: 1
		 */
		Description: FormControl<string | null | undefined>,

		/**
		 * The identifier of the Amazon Connect instance that has been replicated. You can find the <code>instanceId</code> in the ARN of the instance.
		 * Required
		 * Max length: 250
		 * Min length: 1
		 */
		InstanceId: FormControl<string | null | undefined>,

		/**
		 * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.
		 * Max length: 500
		 */
		ClientToken: FormControl<string | null | undefined>,

		/** The tags used to organize, track, or control access for this resource. For example, { "tags": {"key1":"value1", "key2":"value2"} }. */
		Tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateTrafficDistributionGroupPutBodyFormGroup() {
		return new FormGroup<CreateTrafficDistributionGroupPutBodyFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128), Validators.pattern('(^[\S].*[\S]$)|(^[\S]$)')]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(250), Validators.pattern('(^[\S].*[\S]$)|(^[\S]$)')]),
			InstanceId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(250), Validators.pattern('^(arn:(aws|aws-us-gov):connect:[a-z]{2}-[a-z]+-[0-9]{1}:[0-9]{1,20}:instance/)?[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$')]),
			ClientToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(500)]),
			Tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateUseCasePutBody {

		/**
		 * The type of use case to associate to the integration association. Each integration association can have only one of each use case type.
		 * Required
		 */
		UseCaseType: UseCaseType;

		/** The tags used to organize, track, or control access for this resource. For example, { "tags": {"key1":"value1", "key2":"value2"} }. */
		Tags?: {[id: string]: string };
	}
	export interface CreateUseCasePutBodyFormProperties {

		/**
		 * The type of use case to associate to the integration association. Each integration association can have only one of each use case type.
		 * Required
		 */
		UseCaseType: FormControl<UseCaseType | null | undefined>,

		/** The tags used to organize, track, or control access for this resource. For example, { "tags": {"key1":"value1", "key2":"value2"} }. */
		Tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateUseCasePutBodyFormGroup() {
		return new FormGroup<CreateUseCasePutBodyFormProperties>({
			UseCaseType: new FormControl<UseCaseType | null | undefined>(undefined, [Validators.required]),
			Tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateUserPutBody {

		/**
		 * The user name for the account. For instances not using SAML for identity management, the user name can include up to 20 characters. If you are using SAML for identity management, the user name can include up to 64 characters from [a-zA-Z0-9_-.\@]+.
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		Username: string;

		/** The password for the user account. A password is required if you are using Amazon Connect for identity management. Otherwise, it is an error to include a password. */
		Password?: string | null;

		/** Contains information about the identity of a user. */
		IdentityInfo?: CreateUserPutBodyIdentityInfo;

		/**
		 * Contains information about the phone configuration settings for a user.
		 * Required
		 */
		PhoneConfig: CreateUserPutBodyPhoneConfig;

		/** <p>The identifier of the user account in the directory used for identity management. If Amazon Connect cannot access the directory, you can specify this identifier to authenticate users. If you include the identifier, we assume that Amazon Connect cannot access the directory. Otherwise, the identity information is used to authenticate users from your directory.</p> <p>This parameter is required if you are using an existing directory for identity management in Amazon Connect when Amazon Connect cannot access your directory to authenticate users. If you are using SAML for identity management and include this parameter, an error is returned.</p> */
		DirectoryUserId?: string | null;

		/**
		 * The identifier of the security profile for the user.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 10
		 */
		SecurityProfileIds: Array<string>;

		/**
		 * The identifier of the routing profile for the user.
		 * Required
		 */
		RoutingProfileId: string;

		/** The identifier of the hierarchy group for the user. */
		HierarchyGroupId?: string | null;

		/** The tags used to organize, track, or control access for this resource. For example, { "tags": {"key1":"value1", "key2":"value2"} }. */
		Tags?: {[id: string]: string };
	}
	export interface CreateUserPutBodyFormProperties {

		/**
		 * The user name for the account. For instances not using SAML for identity management, the user name can include up to 20 characters. If you are using SAML for identity management, the user name can include up to 64 characters from [a-zA-Z0-9_-.\@]+.
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		Username: FormControl<string | null | undefined>,

		/** The password for the user account. A password is required if you are using Amazon Connect for identity management. Otherwise, it is an error to include a password. */
		Password: FormControl<string | null | undefined>,

		/** <p>The identifier of the user account in the directory used for identity management. If Amazon Connect cannot access the directory, you can specify this identifier to authenticate users. If you include the identifier, we assume that Amazon Connect cannot access the directory. Otherwise, the identity information is used to authenticate users from your directory.</p> <p>This parameter is required if you are using an existing directory for identity management in Amazon Connect when Amazon Connect cannot access your directory to authenticate users. If you are using SAML for identity management and include this parameter, an error is returned.</p> */
		DirectoryUserId: FormControl<string | null | undefined>,

		/**
		 * The identifier of the routing profile for the user.
		 * Required
		 */
		RoutingProfileId: FormControl<string | null | undefined>,

		/** The identifier of the hierarchy group for the user. */
		HierarchyGroupId: FormControl<string | null | undefined>,

		/** The tags used to organize, track, or control access for this resource. For example, { "tags": {"key1":"value1", "key2":"value2"} }. */
		Tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateUserPutBodyFormGroup() {
		return new FormGroup<CreateUserPutBodyFormProperties>({
			Username: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100)]),
			Password: new FormControl<string | null | undefined>(undefined, [Validators.pattern('/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d\S]{8,64}$/')]),
			DirectoryUserId: new FormControl<string | null | undefined>(undefined),
			RoutingProfileId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			HierarchyGroupId: new FormControl<string | null | undefined>(undefined),
			Tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateUserPutBodyIdentityInfo {
		FirstName?: string;
		LastName?: string;
		Email?: string;
		SecondaryEmail?: string;
		Mobile?: string;
	}
	export interface CreateUserPutBodyIdentityInfoFormProperties {
		FirstName: FormControl<string | null | undefined>,
		LastName: FormControl<string | null | undefined>,
		Email: FormControl<string | null | undefined>,
		SecondaryEmail: FormControl<string | null | undefined>,
		Mobile: FormControl<string | null | undefined>,
	}
	export function CreateCreateUserPutBodyIdentityInfoFormGroup() {
		return new FormGroup<CreateUserPutBodyIdentityInfoFormProperties>({
			FirstName: new FormControl<string | null | undefined>(undefined),
			LastName: new FormControl<string | null | undefined>(undefined),
			Email: new FormControl<string | null | undefined>(undefined),
			SecondaryEmail: new FormControl<string | null | undefined>(undefined),
			Mobile: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateUserPutBodyPhoneConfig {
		PhoneType?: PhoneType;
		AutoAccept?: boolean | null;
		AfterContactWorkTimeLimit?: number | null;
		DeskPhoneNumber?: string;
	}
	export interface CreateUserPutBodyPhoneConfigFormProperties {
		PhoneType: FormControl<PhoneType | null | undefined>,
		AutoAccept: FormControl<boolean | null | undefined>,
		AfterContactWorkTimeLimit: FormControl<number | null | undefined>,
		DeskPhoneNumber: FormControl<string | null | undefined>,
	}
	export function CreateCreateUserPutBodyPhoneConfigFormGroup() {
		return new FormGroup<CreateUserPutBodyPhoneConfigFormProperties>({
			PhoneType: new FormControl<PhoneType | null | undefined>(undefined),
			AutoAccept: new FormControl<boolean | null | undefined>(undefined),
			AfterContactWorkTimeLimit: new FormControl<number | null | undefined>(undefined),
			DeskPhoneNumber: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateUserHierarchyGroupPutBody {

		/**
		 * The name of the user hierarchy group. Must not be more than 100 characters.
		 * Required
		 */
		Name: string;

		/** The identifier for the parent hierarchy group. The user hierarchy is created at level one if the parent group ID is null. */
		ParentGroupId?: string | null;

		/** The tags used to organize, track, or control access for this resource. For example, { "tags": {"key1":"value1", "key2":"value2"} }. */
		Tags?: {[id: string]: string };
	}
	export interface CreateUserHierarchyGroupPutBodyFormProperties {

		/**
		 * The name of the user hierarchy group. Must not be more than 100 characters.
		 * Required
		 */
		Name: FormControl<string | null | undefined>,

		/** The identifier for the parent hierarchy group. The user hierarchy is created at level one if the parent group ID is null. */
		ParentGroupId: FormControl<string | null | undefined>,

		/** The tags used to organize, track, or control access for this resource. For example, { "tags": {"key1":"value1", "key2":"value2"} }. */
		Tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateUserHierarchyGroupPutBodyFormGroup() {
		return new FormGroup<CreateUserHierarchyGroupPutBodyFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ParentGroupId: new FormControl<string | null | undefined>(undefined),
			Tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateVocabularyPostBody {

		/**
		 * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>. If a create request is received more than once with same client token, subsequent requests return the previous response without creating a vocabulary again.
		 * Max length: 500
		 */
		ClientToken?: string | null;

		/**
		 * A unique name of the custom vocabulary.
		 * Required
		 * Max length: 140
		 * Min length: 1
		 */
		VocabularyName: string;

		/**
		 * The language code of the vocabulary entries. For a list of languages and their corresponding language codes, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/transcribe-whatis.html">What is Amazon Transcribe?</a>
		 * Required
		 */
		LanguageCode: VocabularyLanguageCode;

		/**
		 * The content of the custom vocabulary in plain-text format with a table of values. Each row in the table represents a word or a phrase, described with <code>Phrase</code>, <code>IPA</code>, <code>SoundsLike</code>, and <code>DisplayAs</code> fields. Separate the fields with TAB characters. The size limit is 50KB. For more information, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/custom-vocabulary.html#create-vocabulary-table">Create a custom vocabulary using a table</a>.
		 * Required
		 * Max length: 60000
		 * Min length: 1
		 */
		Content: string;

		/** The tags used to organize, track, or control access for this resource. For example, { "tags": {"key1":"value1", "key2":"value2"} }. */
		Tags?: {[id: string]: string };
	}
	export interface CreateVocabularyPostBodyFormProperties {

		/**
		 * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>. If a create request is received more than once with same client token, subsequent requests return the previous response without creating a vocabulary again.
		 * Max length: 500
		 */
		ClientToken: FormControl<string | null | undefined>,

		/**
		 * A unique name of the custom vocabulary.
		 * Required
		 * Max length: 140
		 * Min length: 1
		 */
		VocabularyName: FormControl<string | null | undefined>,

		/**
		 * The language code of the vocabulary entries. For a list of languages and their corresponding language codes, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/transcribe-whatis.html">What is Amazon Transcribe?</a>
		 * Required
		 */
		LanguageCode: FormControl<VocabularyLanguageCode | null | undefined>,

		/**
		 * The content of the custom vocabulary in plain-text format with a table of values. Each row in the table represents a word or a phrase, described with <code>Phrase</code>, <code>IPA</code>, <code>SoundsLike</code>, and <code>DisplayAs</code> fields. Separate the fields with TAB characters. The size limit is 50KB. For more information, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/custom-vocabulary.html#create-vocabulary-table">Create a custom vocabulary using a table</a>.
		 * Required
		 * Max length: 60000
		 * Min length: 1
		 */
		Content: FormControl<string | null | undefined>,

		/** The tags used to organize, track, or control access for this resource. For example, { "tags": {"key1":"value1", "key2":"value2"} }. */
		Tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateVocabularyPostBodyFormGroup() {
		return new FormGroup<CreateVocabularyPostBodyFormProperties>({
			ClientToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(500)]),
			VocabularyName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(140), Validators.pattern('^[0-9a-zA-Z._-]+')]),
			LanguageCode: new FormControl<VocabularyLanguageCode | null | undefined>(undefined, [Validators.required]),
			Content: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(60000)]),
			Tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface DeactivateEvaluationFormPostBody {

		/**
		 * A version of the evaluation form. If the version property is not provided, the latest version of the evaluation form is deactivated.
		 * Required
		 * Minimum: 1
		 */
		EvaluationFormVersion: number;
	}
	export interface DeactivateEvaluationFormPostBodyFormProperties {

		/**
		 * A version of the evaluation form. If the version property is not provided, the latest version of the evaluation form is deactivated.
		 * Required
		 * Minimum: 1
		 */
		EvaluationFormVersion: FormControl<number | null | undefined>,
	}
	export function CreateDeactivateEvaluationFormPostBodyFormGroup() {
		return new FormGroup<DeactivateEvaluationFormPostBodyFormProperties>({
			EvaluationFormVersion: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(1)]),
		});

	}

	export interface UpdateContactEvaluationPostBody {

		/** A map of question identifiers to answer value. */
		Answers?: {[id: string]: EvaluationAnswerInput };

		/** A map of question identifiers to note value. */
		Notes?: {[id: string]: EvaluationNote };
	}
	export interface UpdateContactEvaluationPostBodyFormProperties {

		/** A map of question identifiers to answer value. */
		Answers: FormControl<{[id: string]: EvaluationAnswerInput } | null | undefined>,

		/** A map of question identifiers to note value. */
		Notes: FormControl<{[id: string]: EvaluationNote } | null | undefined>,
	}
	export function CreateUpdateContactEvaluationPostBodyFormGroup() {
		return new FormGroup<UpdateContactEvaluationPostBodyFormProperties>({
			Answers: new FormControl<{[id: string]: EvaluationAnswerInput } | null | undefined>(undefined),
			Notes: new FormControl<{[id: string]: EvaluationNote } | null | undefined>(undefined),
		});

	}

	export interface UpdateEvaluationFormPutBody {

		/**
		 * A version of the evaluation form to update.
		 * Required
		 * Minimum: 1
		 */
		EvaluationFormVersion: number;

		/** A flag indicating whether the operation must create a new version. */
		CreateNewVersion?: boolean | null;

		/**
		 * A title of the evaluation form.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Title: string;

		/**
		 * The description of the evaluation form.
		 * Max length: 1024
		 * Min length: 0
		 */
		Description?: string | null;

		/**
		 * Items that are part of the evaluation form. The total number of sections and questions must not exceed 100 each. Questions must be contained in a section.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 100
		 */
		Items: Array<EvaluationFormItem>;

		/** Information about scoring strategy for an evaluation form. */
		ScoringStrategy?: UpdateEvaluationFormPutBodyScoringStrategy;

		/**
		 * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.
		 * Max length: 500
		 */
		ClientToken?: string | null;
	}
	export interface UpdateEvaluationFormPutBodyFormProperties {

		/**
		 * A version of the evaluation form to update.
		 * Required
		 * Minimum: 1
		 */
		EvaluationFormVersion: FormControl<number | null | undefined>,

		/** A flag indicating whether the operation must create a new version. */
		CreateNewVersion: FormControl<boolean | null | undefined>,

		/**
		 * A title of the evaluation form.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Title: FormControl<string | null | undefined>,

		/**
		 * The description of the evaluation form.
		 * Max length: 1024
		 * Min length: 0
		 */
		Description: FormControl<string | null | undefined>,

		/**
		 * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.
		 * Max length: 500
		 */
		ClientToken: FormControl<string | null | undefined>,
	}
	export function CreateUpdateEvaluationFormPutBodyFormGroup() {
		return new FormGroup<UpdateEvaluationFormPutBodyFormProperties>({
			EvaluationFormVersion: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(1)]),
			CreateNewVersion: new FormControl<boolean | null | undefined>(undefined),
			Title: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128)]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(1024)]),
			ClientToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(500)]),
		});

	}

	export interface UpdateEvaluationFormPutBodyScoringStrategy {
		Mode?: EvaluationFormScoringMode;
		Status?: EvaluationFormScoringStatus;
	}
	export interface UpdateEvaluationFormPutBodyScoringStrategyFormProperties {
		Mode: FormControl<EvaluationFormScoringMode | null | undefined>,
		Status: FormControl<EvaluationFormScoringStatus | null | undefined>,
	}
	export function CreateUpdateEvaluationFormPutBodyScoringStrategyFormGroup() {
		return new FormGroup<UpdateEvaluationFormPutBodyScoringStrategyFormProperties>({
			Mode: new FormControl<EvaluationFormScoringMode | null | undefined>(undefined),
			Status: new FormControl<EvaluationFormScoringStatus | null | undefined>(undefined),
		});

	}

	export interface UpdateHoursOfOperationPostBody {

		/**
		 * The name of the hours of operation.
		 * Max length: 127
		 * Min length: 1
		 */
		Name?: string | null;

		/**
		 * The description of the hours of operation.
		 * Max length: 250
		 * Min length: 0
		 */
		Description?: string | null;

		/** The time zone of the hours of operation. */
		TimeZone?: string | null;

		/**
		 * Configuration information of the hours of operation.
		 * Minimum items: 0
		 * Maximum items: 100
		 */
		Config?: Array<HoursOfOperationConfig>;
	}
	export interface UpdateHoursOfOperationPostBodyFormProperties {

		/**
		 * The name of the hours of operation.
		 * Max length: 127
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * The description of the hours of operation.
		 * Max length: 250
		 * Min length: 0
		 */
		Description: FormControl<string | null | undefined>,

		/** The time zone of the hours of operation. */
		TimeZone: FormControl<string | null | undefined>,
	}
	export function CreateUpdateHoursOfOperationPostBodyFormGroup() {
		return new FormGroup<UpdateHoursOfOperationPostBodyFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(127)]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(250)]),
			TimeZone: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdatePromptPostBody {

		/**
		 * The name of the prompt.
		 * Max length: 127
		 * Min length: 1
		 */
		Name?: string | null;

		/**
		 * A description of the prompt.
		 * Max length: 250
		 * Min length: 1
		 */
		Description?: string | null;

		/**
		 * The URI for the S3 bucket where the prompt is stored.
		 * Max length: 512
		 * Min length: 1
		 */
		S3Uri?: string | null;
	}
	export interface UpdatePromptPostBodyFormProperties {

		/**
		 * The name of the prompt.
		 * Max length: 127
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * A description of the prompt.
		 * Max length: 250
		 * Min length: 1
		 */
		Description: FormControl<string | null | undefined>,

		/**
		 * The URI for the S3 bucket where the prompt is stored.
		 * Max length: 512
		 * Min length: 1
		 */
		S3Uri: FormControl<string | null | undefined>,
	}
	export function CreateUpdatePromptPostBodyFormGroup() {
		return new FormGroup<UpdatePromptPostBodyFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(127)]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(250)]),
			S3Uri: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(512), Validators.pattern('s3://\S+/.+')]),
		});

	}

	export interface UpdateRulePutBody {

		/**
		 * The name of the rule. You can change the name only if <code>TriggerEventSource</code> is one of the following values: <code>OnZendeskTicketCreate</code> | <code>OnZendeskTicketStatusUpdate</code> | <code>OnSalesforceCaseCreate</code>
		 * Required
		 * Max length: 200
		 * Min length: 1
		 */
		Name: string;

		/**
		 * The conditions of the rule.
		 * Required
		 */
		Function: string;

		/**
		 * A list of actions to be run when the rule is triggered.
		 * Required
		 */
		Actions: Array<RuleAction>;

		/**
		 * The publish status of the rule.
		 * Required
		 */
		PublishStatus: RulePublishStatus;
	}
	export interface UpdateRulePutBodyFormProperties {

		/**
		 * The name of the rule. You can change the name only if <code>TriggerEventSource</code> is one of the following values: <code>OnZendeskTicketCreate</code> | <code>OnZendeskTicketStatusUpdate</code> | <code>OnSalesforceCaseCreate</code>
		 * Required
		 * Max length: 200
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * The conditions of the rule.
		 * Required
		 */
		Function: FormControl<string | null | undefined>,

		/**
		 * The publish status of the rule.
		 * Required
		 */
		PublishStatus: FormControl<RulePublishStatus | null | undefined>,
	}
	export function CreateUpdateRulePutBodyFormGroup() {
		return new FormGroup<UpdateRulePutBodyFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(200), Validators.pattern('^[0-9a-zA-Z._-]+')]),
			Function: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PublishStatus: new FormControl<RulePublishStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateSecurityProfilePostBody {

		/**
		 * The description of the security profile.
		 * Max length: 250
		 */
		Description?: string | null;

		/**
		 * The permissions granted to a security profile. For a list of valid permissions, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/security-profile-list.html">List of security profile permissions</a>.
		 * Maximum items: 500
		 */
		Permissions?: Array<string>;

		/** The list of tags that a security profile uses to restrict access to resources in Amazon Connect. */
		AllowedAccessControlTags?: {[id: string]: string };

		/**
		 * The list of resources that a security profile applies tag restrictions to in Amazon Connect.
		 * Maximum items: 10
		 */
		TagRestrictedResources?: Array<string>;
	}
	export interface UpdateSecurityProfilePostBodyFormProperties {

		/**
		 * The description of the security profile.
		 * Max length: 250
		 */
		Description: FormControl<string | null | undefined>,

		/** The list of tags that a security profile uses to restrict access to resources in Amazon Connect. */
		AllowedAccessControlTags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateUpdateSecurityProfilePostBodyFormGroup() {
		return new FormGroup<UpdateSecurityProfilePostBodyFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(250)]),
			AllowedAccessControlTags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface UpdateTaskTemplatePostBody {

		/**
		 * The name of the task template.
		 * Max length: 100
		 * Min length: 1
		 */
		Name?: string | null;

		/**
		 * The description of the task template.
		 * Max length: 255
		 * Min length: 1
		 */
		Description?: string | null;

		/**
		 * The identifier of the flow that runs by default when a task is created by referencing this template.
		 * Max length: 500
		 */
		ContactFlowId?: string | null;

		/** Describes constraints that apply to the template fields. */
		Constraints?: UpdateTaskTemplatePostBodyConstraints;

		/** Describes default values for fields on a template. */
		Defaults?: UpdateTaskTemplatePostBodyDefaults;

		/** Marks a template as <code>ACTIVE</code> or <code>INACTIVE</code> for a task to refer to it. Tasks can only be created from <code>ACTIVE</code> templates. If a template is marked as <code>INACTIVE</code>, then a task that refers to this template cannot be created. */
		Status?: TaskTemplateStatus | null;

		/** Fields that are part of the template. */
		Fields?: Array<TaskTemplateField>;
	}
	export interface UpdateTaskTemplatePostBodyFormProperties {

		/**
		 * The name of the task template.
		 * Max length: 100
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * The description of the task template.
		 * Max length: 255
		 * Min length: 1
		 */
		Description: FormControl<string | null | undefined>,

		/**
		 * The identifier of the flow that runs by default when a task is created by referencing this template.
		 * Max length: 500
		 */
		ContactFlowId: FormControl<string | null | undefined>,

		/** Marks a template as <code>ACTIVE</code> or <code>INACTIVE</code> for a task to refer to it. Tasks can only be created from <code>ACTIVE</code> templates. If a template is marked as <code>INACTIVE</code>, then a task that refers to this template cannot be created. */
		Status: FormControl<TaskTemplateStatus | null | undefined>,
	}
	export function CreateUpdateTaskTemplatePostBodyFormGroup() {
		return new FormGroup<UpdateTaskTemplatePostBodyFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(100)]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			ContactFlowId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(500)]),
			Status: new FormControl<TaskTemplateStatus | null | undefined>(undefined),
		});

	}

	export interface UpdateTaskTemplatePostBodyConstraints {
		RequiredFields?: Array<RequiredFieldInfo>;
		ReadOnlyFields?: Array<ReadOnlyFieldInfo>;
		InvisibleFields?: Array<InvisibleFieldInfo>;
	}
	export interface UpdateTaskTemplatePostBodyConstraintsFormProperties {
	}
	export function CreateUpdateTaskTemplatePostBodyConstraintsFormGroup() {
		return new FormGroup<UpdateTaskTemplatePostBodyConstraintsFormProperties>({
		});

	}

	export interface UpdateTaskTemplatePostBodyDefaults {
		DefaultFieldValues?: Array<TaskTemplateDefaultFieldValue>;
	}
	export interface UpdateTaskTemplatePostBodyDefaultsFormProperties {
	}
	export function CreateUpdateTaskTemplatePostBodyDefaultsFormGroup() {
		return new FormGroup<UpdateTaskTemplatePostBodyDefaultsFormProperties>({
		});

	}

	export interface UpdateAgentStatusPostBody {

		/**
		 * The name of the agent status.
		 * Max length: 127
		 * Min length: 1
		 */
		Name?: string | null;

		/**
		 * The description of the agent status.
		 * Max length: 250
		 * Min length: 0
		 */
		Description?: string | null;

		/** The state of the agent status. */
		State?: EvaluationFormScoringStatus | null;

		/**
		 * The display order of the agent status.
		 * Minimum: 1
		 * Maximum: 50
		 */
		DisplayOrder?: number | null;

		/** A number indicating the reset order of the agent status. */
		ResetOrderNumber?: boolean | null;
	}
	export interface UpdateAgentStatusPostBodyFormProperties {

		/**
		 * The name of the agent status.
		 * Max length: 127
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * The description of the agent status.
		 * Max length: 250
		 * Min length: 0
		 */
		Description: FormControl<string | null | undefined>,

		/** The state of the agent status. */
		State: FormControl<EvaluationFormScoringStatus | null | undefined>,

		/**
		 * The display order of the agent status.
		 * Minimum: 1
		 * Maximum: 50
		 */
		DisplayOrder: FormControl<number | null | undefined>,

		/** A number indicating the reset order of the agent status. */
		ResetOrderNumber: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateAgentStatusPostBodyFormGroup() {
		return new FormGroup<UpdateAgentStatusPostBodyFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(127)]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(250)]),
			State: new FormControl<EvaluationFormScoringStatus | null | undefined>(undefined),
			DisplayOrder: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(50)]),
			ResetOrderNumber: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UpdateContactPostBody {

		/**
		 * The name of the contact.
		 * Max length: 512
		 * Min length: 0
		 */
		Name?: string | null;

		/**
		 * The description of the contact.
		 * Max length: 4096
		 * Min length: 0
		 */
		Description?: string | null;

		/** Well-formed data on contact, shown to agents on Contact Control Panel (CCP). */
		References?: {[id: string]: Reference };
	}
	export interface UpdateContactPostBodyFormProperties {

		/**
		 * The name of the contact.
		 * Max length: 512
		 * Min length: 0
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * The description of the contact.
		 * Max length: 4096
		 * Min length: 0
		 */
		Description: FormControl<string | null | undefined>,

		/** Well-formed data on contact, shown to agents on Contact Control Panel (CCP). */
		References: FormControl<{[id: string]: Reference } | null | undefined>,
	}
	export function CreateUpdateContactPostBodyFormGroup() {
		return new FormGroup<UpdateContactPostBodyFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(512)]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(4096)]),
			References: new FormControl<{[id: string]: Reference } | null | undefined>(undefined),
		});

	}

	export interface UpdateInstanceAttributePostBody {

		/**
		 * The value for the attribute. Maximum character limit is 100.
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		Value: string;
	}
	export interface UpdateInstanceAttributePostBodyFormProperties {

		/**
		 * The value for the attribute. Maximum character limit is 100.
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		Value: FormControl<string | null | undefined>,
	}
	export function CreateUpdateInstanceAttributePostBodyFormGroup() {
		return new FormGroup<UpdateInstanceAttributePostBodyFormProperties>({
			Value: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100)]),
		});

	}

	export interface UpdateInstanceStorageConfigPostBody {

		/**
		 * The storage configuration for the instance.
		 * Required
		 */
		StorageConfig: UpdateInstanceStorageConfigPostBodyStorageConfig;
	}
	export interface UpdateInstanceStorageConfigPostBodyFormProperties {
	}
	export function CreateUpdateInstanceStorageConfigPostBodyFormGroup() {
		return new FormGroup<UpdateInstanceStorageConfigPostBodyFormProperties>({
		});

	}

	export interface UpdateInstanceStorageConfigPostBodyStorageConfig {
		AssociationId?: string;
		StorageType?: StorageType;
		S3Config?: S3Config;
		KinesisVideoStreamConfig?: KinesisVideoStreamConfig;
		KinesisStreamConfig?: KinesisStreamConfig;
		KinesisFirehoseConfig?: KinesisFirehoseConfig;
	}
	export interface UpdateInstanceStorageConfigPostBodyStorageConfigFormProperties {
		AssociationId: FormControl<string | null | undefined>,
		StorageType: FormControl<StorageType | null | undefined>,
	}
	export function CreateUpdateInstanceStorageConfigPostBodyStorageConfigFormGroup() {
		return new FormGroup<UpdateInstanceStorageConfigPostBodyStorageConfigFormProperties>({
			AssociationId: new FormControl<string | null | undefined>(undefined),
			StorageType: new FormControl<StorageType | null | undefined>(undefined),
		});

	}

	export interface UpdatePhoneNumberPutBody {

		/**
		 * The Amazon Resource Name (ARN) for Amazon Connect instances or traffic distribution groups that phone numbers are claimed to.
		 * Required
		 */
		TargetArn: string;

		/**
		 * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.
		 * Max length: 500
		 */
		ClientToken?: string | null;
	}
	export interface UpdatePhoneNumberPutBodyFormProperties {

		/**
		 * The Amazon Resource Name (ARN) for Amazon Connect instances or traffic distribution groups that phone numbers are claimed to.
		 * Required
		 */
		TargetArn: FormControl<string | null | undefined>,

		/**
		 * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.
		 * Max length: 500
		 */
		ClientToken: FormControl<string | null | undefined>,
	}
	export function CreateUpdatePhoneNumberPutBodyFormGroup() {
		return new FormGroup<UpdatePhoneNumberPutBodyFormProperties>({
			TargetArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ClientToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(500)]),
		});

	}

	export interface UpdateUserHierarchyStructurePostBody {

		/**
		 * Contains information about the level hierarchy to update.
		 * Required
		 */
		HierarchyStructure: UpdateUserHierarchyStructurePostBodyHierarchyStructure;
	}
	export interface UpdateUserHierarchyStructurePostBodyFormProperties {
	}
	export function CreateUpdateUserHierarchyStructurePostBodyFormGroup() {
		return new FormGroup<UpdateUserHierarchyStructurePostBodyFormProperties>({
		});

	}

	export interface UpdateUserHierarchyStructurePostBodyHierarchyStructure {
		LevelOne?: HierarchyLevelUpdate;
		LevelTwo?: HierarchyLevelUpdate;
		LevelThree?: HierarchyLevelUpdate;
		LevelFour?: HierarchyLevelUpdate;
		LevelFive?: HierarchyLevelUpdate;
	}
	export interface UpdateUserHierarchyStructurePostBodyHierarchyStructureFormProperties {
	}
	export function CreateUpdateUserHierarchyStructurePostBodyHierarchyStructureFormGroup() {
		return new FormGroup<UpdateUserHierarchyStructurePostBodyHierarchyStructureFormProperties>({
		});

	}

	export interface DisassociateQueueQuickConnectsPostBody {

		/**
		 * The quick connects to disassociate from the queue.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		QuickConnectIds: Array<string>;
	}
	export interface DisassociateQueueQuickConnectsPostBodyFormProperties {
	}
	export function CreateDisassociateQueueQuickConnectsPostBodyFormGroup() {
		return new FormGroup<DisassociateQueueQuickConnectsPostBodyFormProperties>({
		});

	}

	export interface DisassociateRoutingProfileQueuesPostBody {

		/**
		 * The queues to disassociate from this routing profile.
		 * Required
		 */
		QueueReferences: Array<RoutingProfileQueueReference>;
	}
	export interface DisassociateRoutingProfileQueuesPostBodyFormProperties {
	}
	export function CreateDisassociateRoutingProfileQueuesPostBodyFormGroup() {
		return new FormGroup<DisassociateRoutingProfileQueuesPostBodyFormProperties>({
		});

	}

	export interface DismissUserContactPostBody {

		/**
		 * The identifier of the contact.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		ContactId: string;
	}
	export interface DismissUserContactPostBodyFormProperties {

		/**
		 * The identifier of the contact.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		ContactId: FormControl<string | null | undefined>,
	}
	export function CreateDismissUserContactPostBodyFormGroup() {
		return new FormGroup<DismissUserContactPostBodyFormProperties>({
			ContactId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256)]),
		});

	}

	export interface GetCurrentMetricDataPostBody {

		/**
		 * Contains the filter to apply when retrieving metrics.
		 * Required
		 */
		Filters: GetCurrentMetricDataPostBodyFilters;

		/**
		 * <p>The grouping applied to the metrics returned. For example, when grouped by <code>QUEUE</code>, the metrics returned apply to each queue rather than aggregated for all queues. </p> <ul> <li> <p>If you group by <code>CHANNEL</code>, you should include a Channels filter. VOICE, CHAT, and TASK channels are supported.</p> </li> <li> <p>If you group by <code>ROUTING_PROFILE</code>, you must include either a queue or routing profile filter. In addition, a routing profile filter is required for metrics <code>CONTACTS_SCHEDULED</code>, <code>CONTACTS_IN_QUEUE</code>, and <code> OLDEST_CONTACT_AGE</code>.</p> </li> <li> <p>If no <code>Grouping</code> is included in the request, a summary of metrics is returned.</p> </li> </ul>
		 * Maximum items: 2
		 */
		Groupings?: Array<Grouping>;

		/**
		 * <p>The metrics to retrieve. Specify the name and unit for each metric. The following metrics are available. For a description of all the metrics, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/real-time-metrics-definitions.html">Real-time Metrics Definitions</a> in the <i>Amazon Connect Administrator Guide</i>.</p> <dl> <dt>AGENTS_AFTER_CONTACT_WORK</dt> <dd> <p>Unit: COUNT</p> <p>Name in real-time metrics report: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/real-time-metrics-definitions.html#aftercallwork-real-time">ACW</a> </p> </dd> <dt>AGENTS_AVAILABLE</dt> <dd> <p>Unit: COUNT</p> <p>Name in real-time metrics report: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/real-time-metrics-definitions.html#available-real-time">Available</a> </p> </dd> <dt>AGENTS_ERROR</dt> <dd> <p>Unit: COUNT</p> <p>Name in real-time metrics report: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/real-time-metrics-definitions.html#error-real-time">Error</a> </p> </dd> <dt>AGENTS_NON_PRODUCTIVE</dt> <dd> <p>Unit: COUNT</p> <p>Name in real-time metrics report: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/real-time-metrics-definitions.html#non-productive-time-real-time">NPT (Non-Productive Time)</a> </p> </dd> <dt>AGENTS_ON_CALL</dt> <dd> <p>Unit: COUNT</p> <p>Name in real-time metrics report: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/real-time-metrics-definitions.html#on-call-real-time">On contact</a> </p> </dd> <dt>AGENTS_ON_CONTACT</dt> <dd> <p>Unit: COUNT</p> <p>Name in real-time metrics report: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/real-time-metrics-definitions.html#on-call-real-time">On contact</a> </p> </dd> <dt>AGENTS_ONLINE</dt> <dd> <p>Unit: COUNT</p> <p>Name in real-time metrics report: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/real-time-metrics-definitions.html#online-real-time">Online</a> </p> </dd> <dt>AGENTS_STAFFED</dt> <dd> <p>Unit: COUNT</p> <p>Name in real-time metrics report: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/real-time-metrics-definitions.html#staffed-real-time">Staffed</a> </p> </dd> <dt>CONTACTS_IN_QUEUE</dt> <dd> <p>Unit: COUNT</p> <p>Name in real-time metrics report: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/real-time-metrics-definitions.html#in-queue-real-time">In queue</a> </p> </dd> <dt>CONTACTS_SCHEDULED</dt> <dd> <p>Unit: COUNT</p> <p>Name in real-time metrics report: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/real-time-metrics-definitions.html#scheduled-real-time">Scheduled</a> </p> </dd> <dt>OLDEST_CONTACT_AGE</dt> <dd> <p>Unit: SECONDS</p> <p>When you use groupings, Unit says SECONDS and the Value is returned in SECONDS. </p> <p>When you do not use groupings, Unit says SECONDS but the Value is returned in MILLISECONDS. For example, if you get a response like this:</p> <p> <code>{ "Metric": { "Name": "OLDEST_CONTACT_AGE", "Unit": "SECONDS" }, "Value": 24113.0 </code>}</p> <p>The actual OLDEST_CONTACT_AGE is 24 seconds.</p> <p>Name in real-time metrics report: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/real-time-metrics-definitions.html#oldest-real-time">Oldest</a> </p> </dd> <dt>SLOTS_ACTIVE</dt> <dd> <p>Unit: COUNT</p> <p>Name in real-time metrics report: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/real-time-metrics-definitions.html#active-real-time">Active</a> </p> </dd> <dt>SLOTS_AVAILABLE</dt> <dd> <p>Unit: COUNT</p> <p>Name in real-time metrics report: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/real-time-metrics-definitions.html#availability-real-time">Availability</a> </p> </dd> </dl>
		 * Required
		 */
		CurrentMetrics: Array<CurrentMetric>;

		/** <p>The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.</p> <p>The token expires after 5 minutes from the time it is created. Subsequent requests that use the token must use the same request parameters as the request that generated the token.</p> */
		NextToken?: string | null;

		/**
		 * The maximum number of results to return per page.
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults?: number | null;

		/**
		 * <p>The way to sort the resulting response based on metrics. You can enter one sort criteria. By default resources are sorted based on <code>AGENTS_ONLINE</code>, <code>DESCENDING</code>. The metric collection is sorted based on the input metrics.</p> <p>Note the following:</p> <ul> <li> <p>Sorting on <code>SLOTS_ACTIVE</code> and <code>SLOTS_AVAILABLE</code> is not supported.</p> </li> </ul>
		 * Minimum items: 0
		 * Maximum items: 1
		 */
		SortCriteria?: Array<CurrentMetricSortCriteria>;
	}
	export interface GetCurrentMetricDataPostBodyFormProperties {

		/** <p>The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.</p> <p>The token expires after 5 minutes from the time it is created. Subsequent requests that use the token must use the same request parameters as the request that generated the token.</p> */
		NextToken: FormControl<string | null | undefined>,

		/**
		 * The maximum number of results to return per page.
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateGetCurrentMetricDataPostBodyFormGroup() {
		return new FormGroup<GetCurrentMetricDataPostBodyFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
		});

	}

	export interface GetCurrentMetricDataPostBodyFilters {
		Queues?: Array<string>;
		Channels?: Array<Channel>;
		RoutingProfiles?: Array<string>;
	}
	export interface GetCurrentMetricDataPostBodyFiltersFormProperties {
	}
	export function CreateGetCurrentMetricDataPostBodyFiltersFormGroup() {
		return new FormGroup<GetCurrentMetricDataPostBodyFiltersFormProperties>({
		});

	}

	export interface GetCurrentUserDataPostBody {

		/**
		 * A filter for the user data.
		 * Required
		 */
		Filters: GetCurrentUserDataPostBodyFilters;

		/** The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results. */
		NextToken?: string | null;

		/**
		 * The maximum number of results to return per page.
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults?: number | null;
	}
	export interface GetCurrentUserDataPostBodyFormProperties {

		/** The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results. */
		NextToken: FormControl<string | null | undefined>,

		/**
		 * The maximum number of results to return per page.
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateGetCurrentUserDataPostBodyFormGroup() {
		return new FormGroup<GetCurrentUserDataPostBodyFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
		});

	}

	export interface GetCurrentUserDataPostBodyFilters {
		Queues?: Array<string>;
		ContactFilter?: ContactFilter;
		RoutingProfiles?: Array<string>;
		Agents?: Array<string>;
		UserHierarchyGroups?: Array<string>;
	}
	export interface GetCurrentUserDataPostBodyFiltersFormProperties {
	}
	export function CreateGetCurrentUserDataPostBodyFiltersFormGroup() {
		return new FormGroup<GetCurrentUserDataPostBodyFiltersFormProperties>({
		});

	}

	export interface GetMetricDataPostBody {

		/**
		 * <p>The timestamp, in UNIX Epoch time format, at which to start the reporting interval for the retrieval of historical metrics data. The time must be specified using a multiple of 5 minutes, such as 10:05, 10:10, 10:15.</p> <p>The start time cannot be earlier than 24 hours before the time of the request. Historical metrics are available only for 24 hours.</p>
		 * Required
		 */
		StartTime: Date;

		/**
		 * <p>The timestamp, in UNIX Epoch time format, at which to end the reporting interval for the retrieval of historical metrics data. The time must be specified using an interval of 5 minutes, such as 11:00, 11:05, 11:10, and must be later than the start time timestamp.</p> <p>The time range between the start and end time must be less than 24 hours.</p>
		 * Required
		 */
		EndTime: Date;

		/**
		 * Contains the filter to apply when retrieving metrics.
		 * Required
		 */
		Filters: GetMetricDataPostBodyFilters;

		/**
		 * <p>The grouping applied to the metrics returned. For example, when results are grouped by queue, the metrics returned are grouped by queue. The values returned apply to the metrics for each queue rather than aggregated for all queues.</p> <p>If no grouping is specified, a summary of metrics for all queues is returned.</p>
		 * Maximum items: 2
		 */
		Groupings?: Array<Grouping>;

		/**
		 * <p>The metrics to retrieve. Specify the name, unit, and statistic for each metric. The following historical metrics are available. For a description of each metric, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/historical-metrics-definitions.html">Historical Metrics Definitions</a> in the <i>Amazon Connect Administrator Guide</i>.</p> <note> <p>This API does not support a contacts incoming metric (there's no CONTACTS_INCOMING metric missing from the documented list). </p> </note> <dl> <dt>ABANDON_TIME</dt> <dd> <p>Unit: SECONDS</p> <p>Statistic: AVG</p> </dd> <dt>AFTER_CONTACT_WORK_TIME</dt> <dd> <p>Unit: SECONDS</p> <p>Statistic: AVG</p> </dd> <dt>API_CONTACTS_HANDLED</dt> <dd> <p>Unit: COUNT</p> <p>Statistic: SUM</p> </dd> <dt>CALLBACK_CONTACTS_HANDLED</dt> <dd> <p>Unit: COUNT</p> <p>Statistic: SUM</p> </dd> <dt>CONTACTS_ABANDONED</dt> <dd> <p>Unit: COUNT</p> <p>Statistic: SUM</p> </dd> <dt>CONTACTS_AGENT_HUNG_UP_FIRST</dt> <dd> <p>Unit: COUNT</p> <p>Statistic: SUM</p> </dd> <dt>CONTACTS_CONSULTED</dt> <dd> <p>Unit: COUNT</p> <p>Statistic: SUM</p> </dd> <dt>CONTACTS_HANDLED</dt> <dd> <p>Unit: COUNT</p> <p>Statistic: SUM</p> </dd> <dt>CONTACTS_HANDLED_INCOMING</dt> <dd> <p>Unit: COUNT</p> <p>Statistic: SUM</p> </dd> <dt>CONTACTS_HANDLED_OUTBOUND</dt> <dd> <p>Unit: COUNT</p> <p>Statistic: SUM</p> </dd> <dt>CONTACTS_HOLD_ABANDONS</dt> <dd> <p>Unit: COUNT</p> <p>Statistic: SUM</p> </dd> <dt>CONTACTS_MISSED</dt> <dd> <p>Unit: COUNT</p> <p>Statistic: SUM</p> </dd> <dt>CONTACTS_QUEUED</dt> <dd> <p>Unit: COUNT</p> <p>Statistic: SUM</p> </dd> <dt>CONTACTS_TRANSFERRED_IN</dt> <dd> <p>Unit: COUNT</p> <p>Statistic: SUM</p> </dd> <dt>CONTACTS_TRANSFERRED_IN_FROM_QUEUE</dt> <dd> <p>Unit: COUNT</p> <p>Statistic: SUM</p> </dd> <dt>CONTACTS_TRANSFERRED_OUT</dt> <dd> <p>Unit: COUNT</p> <p>Statistic: SUM</p> </dd> <dt>CONTACTS_TRANSFERRED_OUT_FROM_QUEUE</dt> <dd> <p>Unit: COUNT</p> <p>Statistic: SUM</p> </dd> <dt>HANDLE_TIME</dt> <dd> <p>Unit: SECONDS</p> <p>Statistic: AVG</p> </dd> <dt>HOLD_TIME</dt> <dd> <p>Unit: SECONDS</p> <p>Statistic: AVG</p> </dd> <dt>INTERACTION_AND_HOLD_TIME</dt> <dd> <p>Unit: SECONDS</p> <p>Statistic: AVG</p> </dd> <dt>INTERACTION_TIME</dt> <dd> <p>Unit: SECONDS</p> <p>Statistic: AVG</p> </dd> <dt>OCCUPANCY</dt> <dd> <p>Unit: PERCENT</p> <p>Statistic: AVG</p> </dd> <dt>QUEUE_ANSWER_TIME</dt> <dd> <p>Unit: SECONDS</p> <p>Statistic: AVG</p> </dd> <dt>QUEUED_TIME</dt> <dd> <p>Unit: SECONDS</p> <p>Statistic: MAX</p> </dd> <dt>SERVICE_LEVEL</dt> <dd> <p>You can include up to 20 SERVICE_LEVEL metrics in a request.</p> <p>Unit: PERCENT</p> <p>Statistic: AVG</p> <p>Threshold: For <code>ThresholdValue</code>, enter any whole number from 1 to 604800 (inclusive), in seconds. For <code>Comparison</code>, you must enter <code>LT</code> (for "Less than"). </p> </dd> </dl>
		 * Required
		 */
		HistoricalMetrics: Array<HistoricalMetric>;

		/** The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results. */
		NextToken?: string | null;

		/**
		 * The maximum number of results to return per page.
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults?: number | null;
	}
	export interface GetMetricDataPostBodyFormProperties {

		/**
		 * <p>The timestamp, in UNIX Epoch time format, at which to start the reporting interval for the retrieval of historical metrics data. The time must be specified using a multiple of 5 minutes, such as 10:05, 10:10, 10:15.</p> <p>The start time cannot be earlier than 24 hours before the time of the request. Historical metrics are available only for 24 hours.</p>
		 * Required
		 */
		StartTime: FormControl<Date | null | undefined>,

		/**
		 * <p>The timestamp, in UNIX Epoch time format, at which to end the reporting interval for the retrieval of historical metrics data. The time must be specified using an interval of 5 minutes, such as 11:00, 11:05, 11:10, and must be later than the start time timestamp.</p> <p>The time range between the start and end time must be less than 24 hours.</p>
		 * Required
		 */
		EndTime: FormControl<Date | null | undefined>,

		/** The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results. */
		NextToken: FormControl<string | null | undefined>,

		/**
		 * The maximum number of results to return per page.
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateGetMetricDataPostBodyFormGroup() {
		return new FormGroup<GetMetricDataPostBodyFormProperties>({
			StartTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			EndTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
		});

	}

	export interface GetMetricDataPostBodyFilters {
		Queues?: Array<string>;
		Channels?: Array<Channel>;
		RoutingProfiles?: Array<string>;
	}
	export interface GetMetricDataPostBodyFiltersFormProperties {
	}
	export function CreateGetMetricDataPostBodyFiltersFormGroup() {
		return new FormGroup<GetMetricDataPostBodyFiltersFormProperties>({
		});

	}

	export interface GetMetricDataV2PostBody {

		/**
		 * The Amazon Resource Name (ARN) of the resource. This includes the <code>instanceId</code> an Amazon Connect instance.
		 * Required
		 */
		ResourceArn: string;

		/**
		 * The timestamp, in UNIX Epoch time format, at which to start the reporting interval for the retrieval of historical metrics data. The time must be before the end time timestamp. The time range between the start and end time must be less than 24 hours. The start time cannot be earlier than 35 days before the time of the request. Historical metrics are available for 35 days.
		 * Required
		 */
		StartTime: Date;

		/**
		 * <p>The timestamp, in UNIX Epoch time format, at which to end the reporting interval for the retrieval of historical metrics data. The time must be later than the start time timestamp. It cannot be later than the current timestamp.</p> <p>The time range between the start and end time must be less than 24 hours.</p>
		 * Required
		 */
		EndTime: Date;

		/**
		 * <p>The filters to apply to returned metrics. You can filter on the following resources:</p> <ul> <li> <p>Queues</p> </li> <li> <p>Routing profiles</p> </li> <li> <p>Agents</p> </li> <li> <p>Channels</p> </li> <li> <p>User hierarchy groups</p> </li> <li> <p>Feature</p> </li> </ul> <p>At least one filter must be passed from queues, routing profiles, agents, or user hierarchy groups.</p> <p>To filter by phone number, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/create-historical-metrics-report.html">Create a historical metrics report</a> in the <i>Amazon Connect Administrator's Guide</i>.</p> <p>Note the following limits:</p> <ul> <li> <p> <b>Filter keys</b>: A maximum of 5 filter keys are supported in a single request. Valid filter keys: <code>QUEUE</code> | <code>ROUTING_PROFILE</code> | <code>AGENT</code> | <code>CHANNEL</code> | <code>AGENT_HIERARCHY_LEVEL_ONE</code> | <code>AGENT_HIERARCHY_LEVEL_TWO</code> | <code>AGENT_HIERARCHY_LEVEL_THREE</code> | <code>AGENT_HIERARCHY_LEVEL_FOUR</code> | <code>AGENT_HIERARCHY_LEVEL_FIVE</code> | <code>FEATURE</code> </p> </li> <li> <p> <b>Filter values</b>: A maximum of 100 filter values are supported in a single request. VOICE, CHAT, and TASK are valid <code>filterValue</code> for the CHANNEL filter key. They do not count towards limitation of 100 filter values. For example, a GetMetricDataV2 request can filter by 50 queues, 35 agents, and 15 routing profiles for a total of 100 filter values, along with 3 channel filters. </p> <p> <code>contact_lens_conversational_analytics</code> is a valid filterValue for the <code>FEATURE</code> filter key. It is available only to contacts analyzed by Contact Lens conversational analytics.</p> </li> </ul>
		 * Required
		 * Minimum items: 1
		 * Maximum items: 5
		 */
		Filters: Array<FilterV2>;

		/**
		 * <p>The grouping applied to the metrics that are returned. For example, when results are grouped by queue, the metrics returned are grouped by queue. The values that are returned apply to the metrics for each queue. They are not aggregated for all queues.</p> <p>If no grouping is specified, a summary of all metrics is returned.</p> <p>Valid grouping keys: <code>QUEUE</code> | <code>ROUTING_PROFILE</code> | <code>AGENT</code> | <code>CHANNEL</code> | <code>AGENT_HIERARCHY_LEVEL_ONE</code> | <code>AGENT_HIERARCHY_LEVEL_TWO</code> | <code>AGENT_HIERARCHY_LEVEL_THREE</code> | <code>AGENT_HIERARCHY_LEVEL_FOUR</code> | <code>AGENT_HIERARCHY_LEVEL_FIVE</code> </p>
		 * Maximum items: 2
		 */
		Groupings?: Array<string>;

		/**
		 * <p>The metrics to retrieve. Specify the name, groupings, and filters for each metric. The following historical metrics are available. For a description of each metric, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/historical-metrics-definitions.html">Historical metrics definitions</a> in the <i>Amazon Connect Administrator's Guide</i>.</p> <dl> <dt>AGENT_ADHERENT_TIME</dt> <dd> <p>This metric is available only in Amazon Web Services Regions where <a href="https://docs.aws.amazon.com/connect/latest/adminguide/regions.html#optimization_region">Forecasting, capacity planning, and scheduling</a> is available.</p> <p>Unit: Seconds</p> <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy </p> </dd> <dt>AGENT_NON_RESPONSE</dt> <dd> <p>Unit: Count</p> <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy </p> </dd> <dt>AGENT_OCCUPANCY</dt> <dd> <p>Unit: Percentage</p> <p>Valid groupings and filters: Routing Profile, Agent, Agent Hierarchy </p> </dd> <dt>AGENT_SCHEDULE_ADHERENCE</dt> <dd> <p>This metric is available only in Amazon Web Services Regions where <a href="https://docs.aws.amazon.com/connect/latest/adminguide/regions.html#optimization_region">Forecasting, capacity planning, and scheduling</a> is available.</p> <p>Unit: Percent</p> <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy</p> </dd> <dt>AGENT_SCHEDULED_TIME</dt> <dd> <p>This metric is available only in Amazon Web Services Regions where <a href="https://docs.aws.amazon.com/connect/latest/adminguide/regions.html#optimization_region">Forecasting, capacity planning, and scheduling</a> is available.</p> <p>Unit: Seconds</p> <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy</p> </dd> <dt>AVG_ABANDON_TIME</dt> <dd> <p>Unit: Seconds</p> <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy</p> </dd> <dt>AVG_AFTER_CONTACT_WORK_TIME</dt> <dd> <p>Unit: Seconds</p> <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy, Feature</p> <note> <p>Feature is a valid filter but not a valid grouping.</p> </note> </dd> <dt>AVG_AGENT_CONNECTING_TIME</dt> <dd> <p>Unit: Seconds</p> <p>Valid metric filter key: <code>INITIATION_METHOD</code>. For now, this metric only supports the following as <code>INITIATION_METHOD</code>: <code>INBOUND</code> | <code>OUTBOUND</code> | <code>CALLBACK</code> | <code>API</code> </p> <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy</p> </dd> <dt>AVG_AGENT_CONNECTING_TIME</dt> <dd> <p>Unit: Seconds</p> <p>Valid metric filter key: <code>INITIATION_METHOD</code>. For now, this metric only supports the following as <code>INITIATION_METHOD</code>: <code>INBOUND</code> | <code>OUTBOUND</code> | <code>CALLBACK</code> | <code>API</code> </p> <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy</p> </dd> <dt>AVG_CONTACT_DURATION</dt> <dd> <p>Unit: Seconds</p> <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy, Feature</p> <note> <p>Feature is a valid filter but not a valid grouping.</p> </note> </dd> <dt>AVG_CONVERSATION_DURATION</dt> <dd> <p>Unit: Seconds</p> <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy</p> </dd> <dt>AVG_GREETING_TIME_AGENT</dt> <dd> <p>This metric is available only for contacts analyzed by Contact Lens conversational analytics.</p> <p>Unit: Seconds</p> <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy</p> </dd> <dt>AVG_HANDLE_TIME</dt> <dd> <p>Unit: Seconds</p> <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy, Feature</p> <note> <p>Feature is a valid filter but not a valid grouping.</p> </note> </dd> <dt>AVG_HOLD_TIME</dt> <dd> <p>Unit: Seconds</p> <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy, Feature</p> <note> <p>Feature is a valid filter but not a valid grouping.</p> </note> </dd> <dt>AVG_HOLDS</dt> <dd> <p>Unit: Count</p> <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy, Feature</p> <note> <p>Feature is a valid filter but not a valid grouping.</p> </note> </dd> <dt>AVG_INTERACTION_AND_HOLD_TIME</dt> <dd> <p>Unit: Seconds</p> <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy</p> </dd> <dt>AVG_INTERACTION_TIME</dt> <dd> <p>Unit: Seconds</p> <p>Valid groupings and filters: Queue, Channel, Routing Profile, Feature</p> <note> <p>Feature is a valid filter but not a valid grouping.</p> </note> </dd> <dt>AVG_INTERRUPTIONS_AGENT</dt> <dd> <p>This metric is available only for contacts analyzed by Contact Lens conversational analytics.</p> <p>Unit: Count</p> <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy</p> </dd> <dt>AVG_INTERRUPTION_TIME_AGENT</dt> <dd> <p>This metric is available only for contacts analyzed by Contact Lens conversational analytics.</p> <p>Unit: Seconds</p> <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy</p> </dd> <dt>AVG_NON_TALK_TIME</dt> <dd> <p>This metric is available only for contacts analyzed by Contact Lens conversational analytics.</p> <p>Unit: Seconds</p> <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy</p> </dd> <dt>AVG_QUEUE_ANSWER_TIME</dt> <dd> <p>Unit: Seconds</p> <p>Valid groupings and filters: Queue, Channel, Routing Profile, Feature</p> <note> <p>Feature is a valid filter but not a valid grouping.</p> </note> </dd> <dt>AVG_TALK_TIME</dt> <dd> <p>This metric is available only for contacts analyzed by Contact Lens conversational analytics.</p> <p>Unit: Seconds</p> <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy</p> </dd> <dt>AVG_TALK_TIME_AGENT</dt> <dd> <p>This metric is available only for contacts analyzed by Contact Lens conversational analytics.</p> <p>Unit: Seconds</p> <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy</p> </dd> <dt>AVG_TALK_TIME_CUSTOMER</dt> <dd> <p>This metric is available only for contacts analyzed by Contact Lens conversational analytics.</p> <p>Unit: Seconds</p> <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy</p> </dd> <dt>CONTACTS_ABANDONED</dt> <dd> <p>Unit: Count</p> <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy</p> </dd> <dt>CONTACTS_CREATED</dt> <dd> <p>Unit: Count</p> <p>Valid metric filter key: <code>INITIATION_METHOD</code> </p> <p>Valid groupings and filters: Queue, Channel, Routing Profile, Feature</p> <note> <p>Feature is a valid filter but not a valid grouping.</p> </note> </dd> <dt>CONTACTS_HANDLED</dt> <dd> <p>Unit: Count</p> <p>Valid metric filter key: <code>INITIATION_METHOD</code>, <code>DISCONNECT_REASON</code> </p> <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy, Feature</p> <note> <p>Feature is a valid filter but not a valid grouping.</p> </note> </dd> <dt>CONTACTS_HOLD_ABANDONS</dt> <dd> <p>Unit: Count</p> <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy</p> </dd> <dt>CONTACTS_QUEUED</dt> <dd> <p>Unit: Count</p> <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy</p> </dd> <dt>CONTACTS_TRANSFERRED_OUT</dt> <dd> <p>Unit: Count</p> <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy, Feature</p> <note> <p>Feature is a valid filter but not a valid grouping.</p> </note> </dd> <dt>CONTACTS_TRANSFERRED_OUT_BY_AGENT</dt> <dd> <p>Unit: Count</p> <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy</p> </dd> <dt>CONTACTS_TRANSFERRED_OUT_FROM_QUEUE</dt> <dd> <p>Unit: Count</p> <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy</p> </dd> <dt>MAX_QUEUED_TIME</dt> <dd> <p>Unit: Seconds</p> <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy</p> </dd> <dt>SERVICE_LEVEL</dt> <dd> <p>You can include up to 20 SERVICE_LEVEL metrics in a request.</p> <p>Unit: Percent</p> <p>Valid groupings and filters: Queue, Channel, Routing Profile</p> <p>Threshold: For <code>ThresholdValue</code>, enter any whole number from 1 to 604800 (inclusive), in seconds. For <code>Comparison</code>, you must enter <code>LT</code> (for "Less than"). </p> </dd> <dt>SUM_CONTACTS_ANSWERED_IN_X</dt> <dd> <p>Unit: Count</p> <p>Valid groupings and filters: Queue, Channel, Routing Profile</p> <p>Threshold: For <code>ThresholdValue</code>, enter any whole number from 1 to 604800 (inclusive), in seconds. For <code>Comparison</code>, you must enter <code>LT</code> (for "Less than"). </p> </dd> <dt>SUM_CONTACTS_ABANDONED_IN_X</dt> <dd> <p>Unit: Count</p> <p>Valid groupings and filters: Queue, Channel, Routing Profile</p> <p>Threshold: For <code>ThresholdValue</code>, enter any whole number from 1 to 604800 (inclusive), in seconds. For <code>Comparison</code>, you must enter <code>LT</code> (for "Less than"). </p> </dd> <dt>SUM_CONTACTS_DISCONNECTED </dt> <dd> <p>Valid metric filter key: <code>DISCONNECT_REASON</code> </p> <p>Unit: Count</p> <p>Valid groupings and filters: Queue, Channel, Routing Profile</p> </dd> <dt>SUM_RETRY_CALLBACK_ATTEMPTS</dt> <dd> <p>Unit: Count</p> <p>Valid groupings and filters: Queue, Channel, Routing Profile</p> </dd> </dl>
		 * Required
		 */
		Metrics: Array<MetricV2>;

		/**
		 * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
		 * Max length: 2500
		 * Min length: 1
		 */
		NextToken?: string | null;

		/**
		 * The maximum number of results to return per page.
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults?: number | null;
	}
	export interface GetMetricDataV2PostBodyFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the resource. This includes the <code>instanceId</code> an Amazon Connect instance.
		 * Required
		 */
		ResourceArn: FormControl<string | null | undefined>,

		/**
		 * The timestamp, in UNIX Epoch time format, at which to start the reporting interval for the retrieval of historical metrics data. The time must be before the end time timestamp. The time range between the start and end time must be less than 24 hours. The start time cannot be earlier than 35 days before the time of the request. Historical metrics are available for 35 days.
		 * Required
		 */
		StartTime: FormControl<Date | null | undefined>,

		/**
		 * <p>The timestamp, in UNIX Epoch time format, at which to end the reporting interval for the retrieval of historical metrics data. The time must be later than the start time timestamp. It cannot be later than the current timestamp.</p> <p>The time range between the start and end time must be less than 24 hours.</p>
		 * Required
		 */
		EndTime: FormControl<Date | null | undefined>,

		/**
		 * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
		 * Max length: 2500
		 * Min length: 1
		 */
		NextToken: FormControl<string | null | undefined>,

		/**
		 * The maximum number of results to return per page.
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateGetMetricDataV2PostBodyFormGroup() {
		return new FormGroup<GetMetricDataV2PostBodyFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			StartTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			EndTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2500)]),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
		});

	}

	export interface UpdateTrafficDistributionPutBody {

		/** The distribution of traffic between the instance and its replicas. */
		TelephonyConfig?: UpdateTrafficDistributionPutBodyTelephonyConfig;
	}
	export interface UpdateTrafficDistributionPutBodyFormProperties {
	}
	export function CreateUpdateTrafficDistributionPutBodyFormGroup() {
		return new FormGroup<UpdateTrafficDistributionPutBodyFormProperties>({
		});

	}

	export interface UpdateTrafficDistributionPutBodyTelephonyConfig {
		Distributions?: Array<Distribution>;
	}
	export interface UpdateTrafficDistributionPutBodyTelephonyConfigFormProperties {
	}
	export function CreateUpdateTrafficDistributionPutBodyTelephonyConfigFormGroup() {
		return new FormGroup<UpdateTrafficDistributionPutBodyTelephonyConfigFormProperties>({
		});

	}

	export interface ListDefaultVocabulariesPostBody {

		/** The language code of the vocabulary entries. For a list of languages and their corresponding language codes, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/transcribe-whatis.html">What is Amazon Transcribe?</a> */
		LanguageCode?: VocabularyLanguageCode | null;

		/**
		 * The maximum number of results to return per page.
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults?: number | null;

		/**
		 * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
		 * Max length: 131070
		 * Min length: 1
		 */
		NextToken?: string | null;
	}
	export interface ListDefaultVocabulariesPostBodyFormProperties {

		/** The language code of the vocabulary entries. For a list of languages and their corresponding language codes, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/transcribe-whatis.html">What is Amazon Transcribe?</a> */
		LanguageCode: FormControl<VocabularyLanguageCode | null | undefined>,

		/**
		 * The maximum number of results to return per page.
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults: FormControl<number | null | undefined>,

		/**
		 * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
		 * Max length: 131070
		 * Min length: 1
		 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListDefaultVocabulariesPostBodyFormGroup() {
		return new FormGroup<ListDefaultVocabulariesPostBodyFormProperties>({
			LanguageCode: new FormControl<VocabularyLanguageCode | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(131070), Validators.pattern('.*\S.*')]),
		});

	}

	export interface ListPhoneNumbersV2PostBody {

		/** The Amazon Resource Name (ARN) for Amazon Connect instances or traffic distribution groups that phone numbers are claimed to. If <code>TargetArn</code> input is not provided, this API lists numbers claimed to all the Amazon Connect instances belonging to your account in the same Amazon Web Services Region as the request. */
		TargetArn?: string | null;

		/**
		 * The maximum number of results to return per page.
		 * Minimum: 1
		 * Maximum: 1000
		 */
		MaxResults?: number | null;

		/**
		 * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
		 * Max length: 100000
		 * Min length: 1
		 */
		NextToken?: string | null;

		/**
		 * The ISO country code.
		 * Maximum items: 10
		 */
		PhoneNumberCountryCodes?: Array<PhoneNumberCountryCode>;

		/**
		 * The type of phone number.
		 * Maximum items: 6
		 */
		PhoneNumberTypes?: Array<PhoneNumberType>;

		/** The prefix of the phone number. If provided, it must contain <code>+</code> as part of the country code. */
		PhoneNumberPrefix?: string | null;
	}
	export interface ListPhoneNumbersV2PostBodyFormProperties {

		/** The Amazon Resource Name (ARN) for Amazon Connect instances or traffic distribution groups that phone numbers are claimed to. If <code>TargetArn</code> input is not provided, this API lists numbers claimed to all the Amazon Connect instances belonging to your account in the same Amazon Web Services Region as the request. */
		TargetArn: FormControl<string | null | undefined>,

		/**
		 * The maximum number of results to return per page.
		 * Minimum: 1
		 * Maximum: 1000
		 */
		MaxResults: FormControl<number | null | undefined>,

		/**
		 * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
		 * Max length: 100000
		 * Min length: 1
		 */
		NextToken: FormControl<string | null | undefined>,

		/** The prefix of the phone number. If provided, it must contain <code>+</code> as part of the country code. */
		PhoneNumberPrefix: FormControl<string | null | undefined>,
	}
	export function CreateListPhoneNumbersV2PostBodyFormGroup() {
		return new FormGroup<ListPhoneNumbersV2PostBodyFormProperties>({
			TargetArn: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(1000)]),
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(100000)]),
			PhoneNumberPrefix: new FormControl<string | null | undefined>(undefined, [Validators.pattern('\\+?[0-9]{1,11}')]),
		});

	}

	export interface UpdateRoutingProfileQueuesPostBody {

		/**
		 * The queues to be updated for this routing profile. Queues must first be associated to the routing profile. You can do this using AssociateRoutingProfileQueues.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 10
		 */
		QueueConfigs: Array<RoutingProfileQueueConfig>;
	}
	export interface UpdateRoutingProfileQueuesPostBodyFormProperties {
	}
	export function CreateUpdateRoutingProfileQueuesPostBodyFormGroup() {
		return new FormGroup<UpdateRoutingProfileQueuesPostBodyFormProperties>({
		});

	}

	export interface TagResourcePostBody {

		/**
		 * The tags used to organize, track, or control access for this resource. For example, { "tags": {"key1":"value1", "key2":"value2"} }.
		 * Required
		 */
		tags: {[id: string]: string };
	}
	export interface TagResourcePostBodyFormProperties {

		/**
		 * The tags used to organize, track, or control access for this resource. For example, { "tags": {"key1":"value1", "key2":"value2"} }.
		 * Required
		 */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateTagResourcePostBodyFormGroup() {
		return new FormGroup<TagResourcePostBodyFormProperties>({
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface MonitorContactPostBody {

		/**
		 * The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		InstanceId: string;

		/**
		 * The identifier of the contact.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		ContactId: string;

		/**
		 * The identifier of the user account.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		UserId: string;

		/**
		 * Specify which monitoring actions the user is allowed to take. For example, whether the user is allowed to escalate from silent monitoring to barge.
		 * Maximum items: 2
		 */
		AllowedMonitorCapabilities?: Array<MonitorCapability>;

		/**
		 * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.
		 * Max length: 500
		 */
		ClientToken?: string | null;
	}
	export interface MonitorContactPostBodyFormProperties {

		/**
		 * The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		InstanceId: FormControl<string | null | undefined>,

		/**
		 * The identifier of the contact.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		ContactId: FormControl<string | null | undefined>,

		/**
		 * The identifier of the user account.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		UserId: FormControl<string | null | undefined>,

		/**
		 * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.
		 * Max length: 500
		 */
		ClientToken: FormControl<string | null | undefined>,
	}
	export function CreateMonitorContactPostBodyFormGroup() {
		return new FormGroup<MonitorContactPostBodyFormProperties>({
			InstanceId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100)]),
			ContactId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256)]),
			UserId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256)]),
			ClientToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(500)]),
		});

	}

	export interface PutUserStatusPutBody {

		/**
		 * The identifier of the agent status.
		 * Required
		 */
		AgentStatusId: string;
	}
	export interface PutUserStatusPutBodyFormProperties {

		/**
		 * The identifier of the agent status.
		 * Required
		 */
		AgentStatusId: FormControl<string | null | undefined>,
	}
	export function CreatePutUserStatusPutBodyFormGroup() {
		return new FormGroup<PutUserStatusPutBodyFormProperties>({
			AgentStatusId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ReplicateInstancePostBody {

		/**
		 * The Amazon Web Services Region where to replicate the Amazon Connect instance.
		 * Required
		 * Max length: 31
		 * Min length: 8
		 */
		ReplicaRegion: string;

		/**
		 * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.
		 * Max length: 500
		 */
		ClientToken?: string | null;

		/**
		 * The alias for the replicated instance. The <code>ReplicaAlias</code> must be unique.
		 * Required
		 * Max length: 45
		 * Min length: 1
		 */
		ReplicaAlias: string;
	}
	export interface ReplicateInstancePostBodyFormProperties {

		/**
		 * The Amazon Web Services Region where to replicate the Amazon Connect instance.
		 * Required
		 * Max length: 31
		 * Min length: 8
		 */
		ReplicaRegion: FormControl<string | null | undefined>,

		/**
		 * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.
		 * Max length: 500
		 */
		ClientToken: FormControl<string | null | undefined>,

		/**
		 * The alias for the replicated instance. The <code>ReplicaAlias</code> must be unique.
		 * Required
		 * Max length: 45
		 * Min length: 1
		 */
		ReplicaAlias: FormControl<string | null | undefined>,
	}
	export function CreateReplicateInstancePostBodyFormGroup() {
		return new FormGroup<ReplicateInstancePostBodyFormProperties>({
			ReplicaRegion: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(8), Validators.maxLength(31), Validators.pattern('[a-z]{2}(-[a-z]+){1,2}(-[0-9])?')]),
			ClientToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(500)]),
			ReplicaAlias: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(45), Validators.pattern('^(?!d-)([\da-zA-Z]+)([-]*[\da-zA-Z])*$')]),
		});

	}

	export interface ResumeContactRecordingPostBody {

		/**
		 * The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		InstanceId: string;

		/**
		 * The identifier of the contact.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		ContactId: string;

		/**
		 * The identifier of the contact. This is the identifier of the contact associated with the first interaction with the contact center.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		InitialContactId: string;
	}
	export interface ResumeContactRecordingPostBodyFormProperties {

		/**
		 * The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		InstanceId: FormControl<string | null | undefined>,

		/**
		 * The identifier of the contact.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		ContactId: FormControl<string | null | undefined>,

		/**
		 * The identifier of the contact. This is the identifier of the contact associated with the first interaction with the contact center.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		InitialContactId: FormControl<string | null | undefined>,
	}
	export function CreateResumeContactRecordingPostBodyFormGroup() {
		return new FormGroup<ResumeContactRecordingPostBodyFormProperties>({
			InstanceId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100)]),
			ContactId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256)]),
			InitialContactId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256)]),
		});

	}

	export interface SearchAvailablePhoneNumbersPostBody {

		/**
		 * The Amazon Resource Name (ARN) for Amazon Connect instances or traffic distribution groups that phone numbers are claimed to.
		 * Required
		 */
		TargetArn: string;

		/**
		 * The ISO country code.
		 * Required
		 */
		PhoneNumberCountryCode: PhoneNumberCountryCode;

		/**
		 * The type of phone number.
		 * Required
		 */
		PhoneNumberType: PhoneNumberType;

		/** The prefix of the phone number. If provided, it must contain <code>+</code> as part of the country code. */
		PhoneNumberPrefix?: string | null;

		/**
		 * The maximum number of results to return per page.
		 * Minimum: 1
		 * Maximum: 10
		 */
		MaxResults?: number | null;

		/**
		 * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
		 * Max length: 100000
		 * Min length: 1
		 */
		NextToken?: string | null;
	}
	export interface SearchAvailablePhoneNumbersPostBodyFormProperties {

		/**
		 * The Amazon Resource Name (ARN) for Amazon Connect instances or traffic distribution groups that phone numbers are claimed to.
		 * Required
		 */
		TargetArn: FormControl<string | null | undefined>,

		/**
		 * The ISO country code.
		 * Required
		 */
		PhoneNumberCountryCode: FormControl<PhoneNumberCountryCode | null | undefined>,

		/**
		 * The type of phone number.
		 * Required
		 */
		PhoneNumberType: FormControl<PhoneNumberType | null | undefined>,

		/** The prefix of the phone number. If provided, it must contain <code>+</code> as part of the country code. */
		PhoneNumberPrefix: FormControl<string | null | undefined>,

		/**
		 * The maximum number of results to return per page.
		 * Minimum: 1
		 * Maximum: 10
		 */
		MaxResults: FormControl<number | null | undefined>,

		/**
		 * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
		 * Max length: 100000
		 * Min length: 1
		 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateSearchAvailablePhoneNumbersPostBodyFormGroup() {
		return new FormGroup<SearchAvailablePhoneNumbersPostBodyFormProperties>({
			TargetArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PhoneNumberCountryCode: new FormControl<PhoneNumberCountryCode | null | undefined>(undefined, [Validators.required]),
			PhoneNumberType: new FormControl<PhoneNumberType | null | undefined>(undefined, [Validators.required]),
			PhoneNumberPrefix: new FormControl<string | null | undefined>(undefined, [Validators.pattern('\\+?[0-9]{1,11}')]),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(10)]),
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(100000)]),
		});

	}

	export interface SearchHoursOfOperationsPostBody {

		/**
		 * The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		InstanceId: string;

		/**
		 * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
		 * Max length: 2500
		 * Min length: 1
		 */
		NextToken?: string | null;

		/**
		 * The maximum number of results to return per page.
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults?: number | null;

		/** Filters to be applied to search results. */
		SearchFilter?: SearchHoursOfOperationsPostBodySearchFilter;

		/** The search criteria to be used to return hours of operations. */
		SearchCriteria?: SearchHoursOfOperationsPostBodySearchCriteria;
	}
	export interface SearchHoursOfOperationsPostBodyFormProperties {

		/**
		 * The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		InstanceId: FormControl<string | null | undefined>,

		/**
		 * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
		 * Max length: 2500
		 * Min length: 1
		 */
		NextToken: FormControl<string | null | undefined>,

		/**
		 * The maximum number of results to return per page.
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateSearchHoursOfOperationsPostBodyFormGroup() {
		return new FormGroup<SearchHoursOfOperationsPostBodyFormProperties>({
			InstanceId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100)]),
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2500)]),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
		});

	}

	export interface SearchHoursOfOperationsPostBodySearchFilter {

		/** <p>An object that can be used to specify Tag conditions inside the <code>SearchFilter</code>. This accepts an <code>OR</code> of <code>AND</code> (List of List) input where: </p> <ul> <li> <p>Top level list specifies conditions that need to be applied with <code>OR</code> operator</p> </li> <li> <p>Inner list specifies conditions that need to be applied with <code>AND</code> operator.</p> </li> </ul> */
		TagFilter?: ControlPlaneTagFilter;
	}
	export interface SearchHoursOfOperationsPostBodySearchFilterFormProperties {
	}
	export function CreateSearchHoursOfOperationsPostBodySearchFilterFormGroup() {
		return new FormGroup<SearchHoursOfOperationsPostBodySearchFilterFormProperties>({
		});

	}

	export interface SearchHoursOfOperationsPostBodySearchCriteria {
		OrConditions?: Array<HoursOfOperationSearchCriteria>;
		AndConditions?: Array<HoursOfOperationSearchCriteria>;
		StringCondition?: StringCondition;
	}
	export interface SearchHoursOfOperationsPostBodySearchCriteriaFormProperties {
	}
	export function CreateSearchHoursOfOperationsPostBodySearchCriteriaFormGroup() {
		return new FormGroup<SearchHoursOfOperationsPostBodySearchCriteriaFormProperties>({
		});

	}

	export interface SearchPromptsPostBody {

		/**
		 * The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		InstanceId: string;

		/**
		 * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
		 * Max length: 2500
		 * Min length: 1
		 */
		NextToken?: string | null;

		/**
		 * The maximum number of results to return per page.
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults?: number | null;

		/** Filters to be applied to search results. */
		SearchFilter?: SearchPromptsPostBodySearchFilter;

		/** The search criteria to be used to return prompts. */
		SearchCriteria?: SearchPromptsPostBodySearchCriteria;
	}
	export interface SearchPromptsPostBodyFormProperties {

		/**
		 * The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		InstanceId: FormControl<string | null | undefined>,

		/**
		 * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
		 * Max length: 2500
		 * Min length: 1
		 */
		NextToken: FormControl<string | null | undefined>,

		/**
		 * The maximum number of results to return per page.
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateSearchPromptsPostBodyFormGroup() {
		return new FormGroup<SearchPromptsPostBodyFormProperties>({
			InstanceId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100)]),
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2500)]),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
		});

	}

	export interface SearchPromptsPostBodySearchFilter {

		/** <p>An object that can be used to specify Tag conditions inside the <code>SearchFilter</code>. This accepts an <code>OR</code> of <code>AND</code> (List of List) input where: </p> <ul> <li> <p>Top level list specifies conditions that need to be applied with <code>OR</code> operator</p> </li> <li> <p>Inner list specifies conditions that need to be applied with <code>AND</code> operator.</p> </li> </ul> */
		TagFilter?: ControlPlaneTagFilter;
	}
	export interface SearchPromptsPostBodySearchFilterFormProperties {
	}
	export function CreateSearchPromptsPostBodySearchFilterFormGroup() {
		return new FormGroup<SearchPromptsPostBodySearchFilterFormProperties>({
		});

	}

	export interface SearchPromptsPostBodySearchCriteria {
		OrConditions?: Array<PromptSearchCriteria>;
		AndConditions?: Array<PromptSearchCriteria>;
		StringCondition?: StringCondition;
	}
	export interface SearchPromptsPostBodySearchCriteriaFormProperties {
	}
	export function CreateSearchPromptsPostBodySearchCriteriaFormGroup() {
		return new FormGroup<SearchPromptsPostBodySearchCriteriaFormProperties>({
		});

	}

	export interface SearchQueuesPostBody {

		/**
		 * The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		InstanceId: string;

		/**
		 * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
		 * Max length: 2500
		 * Min length: 1
		 */
		NextToken?: string | null;

		/**
		 * The maximum number of results to return per page.
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults?: number | null;

		/** Filters to be applied to search results. */
		SearchFilter?: SearchQueuesPostBodySearchFilter;

		/** <p>The search criteria to be used to return queues.</p> <note> <p>The <code>name</code> and <code>description</code> fields support "contains" queries with a minimum of 2 characters and a maximum of 25 characters. Any queries with character lengths outside of this range will throw invalid results. </p> </note> */
		SearchCriteria?: SearchQueuesPostBodySearchCriteria;
	}
	export interface SearchQueuesPostBodyFormProperties {

		/**
		 * The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		InstanceId: FormControl<string | null | undefined>,

		/**
		 * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
		 * Max length: 2500
		 * Min length: 1
		 */
		NextToken: FormControl<string | null | undefined>,

		/**
		 * The maximum number of results to return per page.
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateSearchQueuesPostBodyFormGroup() {
		return new FormGroup<SearchQueuesPostBodyFormProperties>({
			InstanceId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100)]),
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2500)]),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
		});

	}

	export interface SearchQueuesPostBodySearchFilter {

		/** <p>An object that can be used to specify Tag conditions inside the <code>SearchFilter</code>. This accepts an <code>OR</code> of <code>AND</code> (List of List) input where: </p> <ul> <li> <p>Top level list specifies conditions that need to be applied with <code>OR</code> operator</p> </li> <li> <p>Inner list specifies conditions that need to be applied with <code>AND</code> operator.</p> </li> </ul> */
		TagFilter?: ControlPlaneTagFilter;
	}
	export interface SearchQueuesPostBodySearchFilterFormProperties {
	}
	export function CreateSearchQueuesPostBodySearchFilterFormGroup() {
		return new FormGroup<SearchQueuesPostBodySearchFilterFormProperties>({
		});

	}

	export interface SearchQueuesPostBodySearchCriteria {
		OrConditions?: Array<QueueSearchCriteria>;
		AndConditions?: Array<QueueSearchCriteria>;
		StringCondition?: StringCondition;
		QueueTypeCondition?: SearchableQueueType;
	}
	export interface SearchQueuesPostBodySearchCriteriaFormProperties {
		QueueTypeCondition: FormControl<SearchableQueueType | null | undefined>,
	}
	export function CreateSearchQueuesPostBodySearchCriteriaFormGroup() {
		return new FormGroup<SearchQueuesPostBodySearchCriteriaFormProperties>({
			QueueTypeCondition: new FormControl<SearchableQueueType | null | undefined>(undefined),
		});

	}

	export interface SearchQuickConnectsPostBody {

		/**
		 * The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		InstanceId: string;

		/**
		 * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
		 * Max length: 2500
		 * Min length: 1
		 */
		NextToken?: string | null;

		/**
		 * The maximum number of results to return per page.
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults?: number | null;

		/** Filters to be applied to search results. */
		SearchFilter?: SearchQuickConnectsPostBodySearchFilter;

		/** The search criteria to be used to return quick connects. */
		SearchCriteria?: SearchQuickConnectsPostBodySearchCriteria;
	}
	export interface SearchQuickConnectsPostBodyFormProperties {

		/**
		 * The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		InstanceId: FormControl<string | null | undefined>,

		/**
		 * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
		 * Max length: 2500
		 * Min length: 1
		 */
		NextToken: FormControl<string | null | undefined>,

		/**
		 * The maximum number of results to return per page.
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateSearchQuickConnectsPostBodyFormGroup() {
		return new FormGroup<SearchQuickConnectsPostBodyFormProperties>({
			InstanceId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100)]),
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2500)]),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
		});

	}

	export interface SearchQuickConnectsPostBodySearchFilter {

		/** <p>An object that can be used to specify Tag conditions inside the <code>SearchFilter</code>. This accepts an <code>OR</code> of <code>AND</code> (List of List) input where: </p> <ul> <li> <p>Top level list specifies conditions that need to be applied with <code>OR</code> operator</p> </li> <li> <p>Inner list specifies conditions that need to be applied with <code>AND</code> operator.</p> </li> </ul> */
		TagFilter?: ControlPlaneTagFilter;
	}
	export interface SearchQuickConnectsPostBodySearchFilterFormProperties {
	}
	export function CreateSearchQuickConnectsPostBodySearchFilterFormGroup() {
		return new FormGroup<SearchQuickConnectsPostBodySearchFilterFormProperties>({
		});

	}

	export interface SearchQuickConnectsPostBodySearchCriteria {
		OrConditions?: Array<QuickConnectSearchCriteria>;
		AndConditions?: Array<QuickConnectSearchCriteria>;
		StringCondition?: StringCondition;
	}
	export interface SearchQuickConnectsPostBodySearchCriteriaFormProperties {
	}
	export function CreateSearchQuickConnectsPostBodySearchCriteriaFormGroup() {
		return new FormGroup<SearchQuickConnectsPostBodySearchCriteriaFormProperties>({
		});

	}

	export interface SearchResourceTagsPostBody {

		/**
		 * The identifier of the Amazon Connect instance. You can find the instanceId in the Amazon Resource Name (ARN) of the instance.
		 * Required
		 * Max length: 250
		 * Min length: 1
		 */
		InstanceId: string;

		/** The list of resource types to be used to search tags from. If not provided or if any empty list is provided, this API will search from all supported resource types. */
		ResourceTypes?: Array<string>;

		/**
		 * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
		 * Max length: 2500
		 * Min length: 1
		 */
		NextToken?: string | null;

		/**
		 * The maximum number of results to return per page.
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults?: number | null;

		/** The search criteria to be used to search tags. */
		SearchCriteria?: SearchResourceTagsPostBodySearchCriteria;
	}
	export interface SearchResourceTagsPostBodyFormProperties {

		/**
		 * The identifier of the Amazon Connect instance. You can find the instanceId in the Amazon Resource Name (ARN) of the instance.
		 * Required
		 * Max length: 250
		 * Min length: 1
		 */
		InstanceId: FormControl<string | null | undefined>,

		/**
		 * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
		 * Max length: 2500
		 * Min length: 1
		 */
		NextToken: FormControl<string | null | undefined>,

		/**
		 * The maximum number of results to return per page.
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateSearchResourceTagsPostBodyFormGroup() {
		return new FormGroup<SearchResourceTagsPostBodyFormProperties>({
			InstanceId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(250), Validators.pattern('^(arn:(aws|aws-us-gov):connect:[a-z]{2}-[a-z]+-[0-9]{1}:[0-9]{1,20}:instance/)?[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$')]),
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2500)]),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
		});

	}

	export interface SearchResourceTagsPostBodySearchCriteria {
		TagSearchCondition?: TagSearchCondition;
	}
	export interface SearchResourceTagsPostBodySearchCriteriaFormProperties {
	}
	export function CreateSearchResourceTagsPostBodySearchCriteriaFormGroup() {
		return new FormGroup<SearchResourceTagsPostBodySearchCriteriaFormProperties>({
		});

	}

	export interface SearchRoutingProfilesPostBody {

		/**
		 * The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		InstanceId: string;

		/**
		 * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
		 * Max length: 2500
		 * Min length: 1
		 */
		NextToken?: string | null;

		/**
		 * The maximum number of results to return per page.
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults?: number | null;

		/** Filters to be applied to search results. */
		SearchFilter?: SearchRoutingProfilesPostBodySearchFilter;

		/** <p>The search criteria to be used to return routing profiles.</p> <note> <p>The <code>name</code> and <code>description</code> fields support "contains" queries with a minimum of 2 characters and a maximum of 25 characters. Any queries with character lengths outside of this range will throw invalid results. </p> </note> */
		SearchCriteria?: SearchRoutingProfilesPostBodySearchCriteria;
	}
	export interface SearchRoutingProfilesPostBodyFormProperties {

		/**
		 * The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		InstanceId: FormControl<string | null | undefined>,

		/**
		 * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
		 * Max length: 2500
		 * Min length: 1
		 */
		NextToken: FormControl<string | null | undefined>,

		/**
		 * The maximum number of results to return per page.
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateSearchRoutingProfilesPostBodyFormGroup() {
		return new FormGroup<SearchRoutingProfilesPostBodyFormProperties>({
			InstanceId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100)]),
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2500)]),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
		});

	}

	export interface SearchRoutingProfilesPostBodySearchFilter {

		/** <p>An object that can be used to specify Tag conditions inside the <code>SearchFilter</code>. This accepts an <code>OR</code> of <code>AND</code> (List of List) input where: </p> <ul> <li> <p>Top level list specifies conditions that need to be applied with <code>OR</code> operator</p> </li> <li> <p>Inner list specifies conditions that need to be applied with <code>AND</code> operator.</p> </li> </ul> */
		TagFilter?: ControlPlaneTagFilter;
	}
	export interface SearchRoutingProfilesPostBodySearchFilterFormProperties {
	}
	export function CreateSearchRoutingProfilesPostBodySearchFilterFormGroup() {
		return new FormGroup<SearchRoutingProfilesPostBodySearchFilterFormProperties>({
		});

	}

	export interface SearchRoutingProfilesPostBodySearchCriteria {
		OrConditions?: Array<RoutingProfileSearchCriteria>;
		AndConditions?: Array<RoutingProfileSearchCriteria>;
		StringCondition?: StringCondition;
	}
	export interface SearchRoutingProfilesPostBodySearchCriteriaFormProperties {
	}
	export function CreateSearchRoutingProfilesPostBodySearchCriteriaFormGroup() {
		return new FormGroup<SearchRoutingProfilesPostBodySearchCriteriaFormProperties>({
		});

	}

	export interface SearchSecurityProfilesPostBody {

		/**
		 * The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		InstanceId: string;

		/**
		 * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
		 * Max length: 2500
		 * Min length: 1
		 */
		NextToken?: string | null;

		/**
		 * The maximum number of results to return per page.
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults?: number | null;

		/** <p>The search criteria to be used to return security profiles.</p> <note> <p>The <code>name</code> field support "contains" queries with a minimum of 2 characters and maximum of 25 characters. Any queries with character lengths outside of this range will throw invalid results.</p> </note> */
		SearchCriteria?: SearchSecurityProfilesPostBodySearchCriteria;

		/** Filters to be applied to search results. */
		SearchFilter?: SearchSecurityProfilesPostBodySearchFilter;
	}
	export interface SearchSecurityProfilesPostBodyFormProperties {

		/**
		 * The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		InstanceId: FormControl<string | null | undefined>,

		/**
		 * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
		 * Max length: 2500
		 * Min length: 1
		 */
		NextToken: FormControl<string | null | undefined>,

		/**
		 * The maximum number of results to return per page.
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateSearchSecurityProfilesPostBodyFormGroup() {
		return new FormGroup<SearchSecurityProfilesPostBodyFormProperties>({
			InstanceId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100)]),
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2500)]),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
		});

	}

	export interface SearchSecurityProfilesPostBodySearchCriteria {
		OrConditions?: Array<SecurityProfileSearchCriteria>;
		AndConditions?: Array<SecurityProfileSearchCriteria>;

		/** A leaf node condition which can be used to specify a string condition. */
		StringCondition?: StringCondition;
	}
	export interface SearchSecurityProfilesPostBodySearchCriteriaFormProperties {
	}
	export function CreateSearchSecurityProfilesPostBodySearchCriteriaFormGroup() {
		return new FormGroup<SearchSecurityProfilesPostBodySearchCriteriaFormProperties>({
		});

	}

	export interface SearchSecurityProfilesPostBodySearchFilter {

		/** <p>An object that can be used to specify Tag conditions inside the <code>SearchFilter</code>. This accepts an <code>OR</code> of <code>AND</code> (List of List) input where: </p> <ul> <li> <p>Top level list specifies conditions that need to be applied with <code>OR</code> operator</p> </li> <li> <p>Inner list specifies conditions that need to be applied with <code>AND</code> operator.</p> </li> </ul> */
		TagFilter?: ControlPlaneTagFilter;
	}
	export interface SearchSecurityProfilesPostBodySearchFilterFormProperties {
	}
	export function CreateSearchSecurityProfilesPostBodySearchFilterFormGroup() {
		return new FormGroup<SearchSecurityProfilesPostBodySearchFilterFormProperties>({
		});

	}

	export interface SearchUsersPostBody {

		/**
		 * The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.
		 * Max length: 100
		 * Min length: 1
		 */
		InstanceId?: string | null;

		/**
		 * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
		 * Max length: 2500
		 * Min length: 1
		 */
		NextToken?: string | null;

		/**
		 * The maximum number of results to return per page.
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults?: number | null;

		/** Filters to be applied to search results. */
		SearchFilter?: SearchUsersPostBodySearchFilter;

		/** <p>The search criteria to be used to return users.</p> <note> <p>The <code>name</code> and <code>description</code> fields support "contains" queries with a minimum of 2 characters and a maximum of 25 characters. Any queries with character lengths outside of this range will throw invalid results. </p> </note> */
		SearchCriteria?: SearchUsersPostBodySearchCriteria;
	}
	export interface SearchUsersPostBodyFormProperties {

		/**
		 * The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.
		 * Max length: 100
		 * Min length: 1
		 */
		InstanceId: FormControl<string | null | undefined>,

		/**
		 * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
		 * Max length: 2500
		 * Min length: 1
		 */
		NextToken: FormControl<string | null | undefined>,

		/**
		 * The maximum number of results to return per page.
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateSearchUsersPostBodyFormGroup() {
		return new FormGroup<SearchUsersPostBodyFormProperties>({
			InstanceId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(100)]),
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2500)]),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
		});

	}

	export interface SearchUsersPostBodySearchFilter {

		/** <p>An object that can be used to specify Tag conditions inside the <code>SearchFilter</code>. This accepts an <code>OR</code> of <code>AND</code> (List of List) input where: </p> <ul> <li> <p>Top level list specifies conditions that need to be applied with <code>OR</code> operator</p> </li> <li> <p>Inner list specifies conditions that need to be applied with <code>AND</code> operator.</p> </li> </ul> */
		TagFilter?: ControlPlaneTagFilter;
	}
	export interface SearchUsersPostBodySearchFilterFormProperties {
	}
	export function CreateSearchUsersPostBodySearchFilterFormGroup() {
		return new FormGroup<SearchUsersPostBodySearchFilterFormProperties>({
		});

	}

	export interface SearchUsersPostBodySearchCriteria {
		OrConditions?: Array<UserSearchCriteria>;
		AndConditions?: Array<UserSearchCriteria>;
		StringCondition?: StringCondition;
		HierarchyGroupCondition?: HierarchyGroupCondition;
	}
	export interface SearchUsersPostBodySearchCriteriaFormProperties {
	}
	export function CreateSearchUsersPostBodySearchCriteriaFormGroup() {
		return new FormGroup<SearchUsersPostBodySearchCriteriaFormProperties>({
		});

	}

	export interface SearchVocabulariesPostBody {

		/**
		 * The maximum number of results to return per page.
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults?: number | null;

		/**
		 * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
		 * Max length: 131070
		 * Min length: 1
		 */
		NextToken?: string | null;

		/** The current state of the custom vocabulary. */
		State?: VocabularyState | null;

		/**
		 * The starting pattern of the name of the vocabulary.
		 * Max length: 140
		 * Min length: 1
		 */
		NameStartsWith?: string | null;

		/** The language code of the vocabulary entries. For a list of languages and their corresponding language codes, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/transcribe-whatis.html">What is Amazon Transcribe?</a> */
		LanguageCode?: VocabularyLanguageCode | null;
	}
	export interface SearchVocabulariesPostBodyFormProperties {

		/**
		 * The maximum number of results to return per page.
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults: FormControl<number | null | undefined>,

		/**
		 * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
		 * Max length: 131070
		 * Min length: 1
		 */
		NextToken: FormControl<string | null | undefined>,

		/** The current state of the custom vocabulary. */
		State: FormControl<VocabularyState | null | undefined>,

		/**
		 * The starting pattern of the name of the vocabulary.
		 * Max length: 140
		 * Min length: 1
		 */
		NameStartsWith: FormControl<string | null | undefined>,

		/** The language code of the vocabulary entries. For a list of languages and their corresponding language codes, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/transcribe-whatis.html">What is Amazon Transcribe?</a> */
		LanguageCode: FormControl<VocabularyLanguageCode | null | undefined>,
	}
	export function CreateSearchVocabulariesPostBodyFormGroup() {
		return new FormGroup<SearchVocabulariesPostBodyFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(131070), Validators.pattern('.*\S.*')]),
			State: new FormControl<VocabularyState | null | undefined>(undefined),
			NameStartsWith: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(140), Validators.pattern('^[0-9a-zA-Z._-]+')]),
			LanguageCode: new FormControl<VocabularyLanguageCode | null | undefined>(undefined),
		});

	}

	export interface StartChatContactPutBody {

		/**
		 * The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		InstanceId: string;

		/**
		 * <p>The identifier of the flow for initiating the chat. To see the ContactFlowId in the Amazon Connect console user interface, on the navigation menu go to <b>Routing</b>, <b>Contact Flows</b>. Choose the flow. On the flow page, under the name of the flow, choose <b>Show additional flow information</b>. The ContactFlowId is the last part of the ARN, shown here in bold: </p> <p>arn:aws:connect:us-west-2:xxxxxxxxxxxx:instance/xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx/contact-flow/<b>846ec553-a005-41c0-8341-xxxxxxxxxxxx</b> </p>
		 * Required
		 * Max length: 500
		 */
		ContactFlowId: string;

		/** <p>A custom key-value pair using an attribute map. The attributes are standard Amazon Connect attributes. They can be accessed in flows just like any other contact attributes. </p> <p>There can be up to 32,768 UTF-8 bytes across all key-value pairs per contact. Attribute keys can include only alphanumeric, dash, and underscore characters.</p> */
		Attributes?: {[id: string]: string };

		/**
		 * The customer's details.
		 * Required
		 */
		ParticipantDetails: StartChatContactPutBodyParticipantDetails;

		/** A chat message. */
		InitialMessage?: StartChatContactPutBodyInitialMessage;

		/**
		 * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.
		 * Max length: 500
		 */
		ClientToken?: string | null;

		/**
		 * The total duration of the newly started chat session. If not specified, the chat session duration defaults to 25 hour. The minimum configurable time is 60 minutes. The maximum configurable time is 10,080 minutes (7 days).
		 * Minimum: 60
		 * Maximum: 10080
		 */
		ChatDurationInMinutes?: number | null;

		/** <p>The supported chat message content types. Supported types are <code>text/plain</code>, <code>text/markdown</code>, <code>application/json</code>, <code>application/vnd.amazonaws.connect.message.interactive</code>, and <code>application/vnd.amazonaws.connect.message.interactive.response</code>. </p> <p>Content types must always contain <code>text/plain</code>. You can then put any other supported type in the list. For example, all the following lists are valid because they contain <code>text/plain</code>: <code>[text/plain, text/markdown, application/json]</code>, <code>[text/markdown, text/plain]</code>, <code>[text/plain, application/json, application/vnd.amazonaws.connect.message.interactive.response]</code>. </p> <note> <p>The type <code>application/vnd.amazonaws.connect.message.interactive</code> is required to use the <a href="https://docs.aws.amazon.com/connect/latest/adminguide/show-view-block.html">Show view</a> flow block.</p> </note> */
		SupportedMessagingContentTypes?: Array<string>;

		/** Enable persistent chats. For more information about enabling persistent chat, and for example use cases and how to configure for them, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/chat-persistence.html">Enable persistent chat</a>. */
		PersistentChat?: StartChatContactPutBodyPersistentChat;

		/**
		 * <p>The unique identifier for an Amazon Connect contact. This identifier is related to the chat starting.</p> <note> <p>You cannot provide data for both RelatedContactId and PersistentChat. </p> </note>
		 * Max length: 256
		 * Min length: 1
		 */
		RelatedContactId?: string | null;
	}
	export interface StartChatContactPutBodyFormProperties {

		/**
		 * The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		InstanceId: FormControl<string | null | undefined>,

		/**
		 * <p>The identifier of the flow for initiating the chat. To see the ContactFlowId in the Amazon Connect console user interface, on the navigation menu go to <b>Routing</b>, <b>Contact Flows</b>. Choose the flow. On the flow page, under the name of the flow, choose <b>Show additional flow information</b>. The ContactFlowId is the last part of the ARN, shown here in bold: </p> <p>arn:aws:connect:us-west-2:xxxxxxxxxxxx:instance/xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx/contact-flow/<b>846ec553-a005-41c0-8341-xxxxxxxxxxxx</b> </p>
		 * Required
		 * Max length: 500
		 */
		ContactFlowId: FormControl<string | null | undefined>,

		/** <p>A custom key-value pair using an attribute map. The attributes are standard Amazon Connect attributes. They can be accessed in flows just like any other contact attributes. </p> <p>There can be up to 32,768 UTF-8 bytes across all key-value pairs per contact. Attribute keys can include only alphanumeric, dash, and underscore characters.</p> */
		Attributes: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.
		 * Max length: 500
		 */
		ClientToken: FormControl<string | null | undefined>,

		/**
		 * The total duration of the newly started chat session. If not specified, the chat session duration defaults to 25 hour. The minimum configurable time is 60 minutes. The maximum configurable time is 10,080 minutes (7 days).
		 * Minimum: 60
		 * Maximum: 10080
		 */
		ChatDurationInMinutes: FormControl<number | null | undefined>,

		/**
		 * <p>The unique identifier for an Amazon Connect contact. This identifier is related to the chat starting.</p> <note> <p>You cannot provide data for both RelatedContactId and PersistentChat. </p> </note>
		 * Max length: 256
		 * Min length: 1
		 */
		RelatedContactId: FormControl<string | null | undefined>,
	}
	export function CreateStartChatContactPutBodyFormGroup() {
		return new FormGroup<StartChatContactPutBodyFormProperties>({
			InstanceId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100)]),
			ContactFlowId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(500)]),
			Attributes: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			ClientToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(500)]),
			ChatDurationInMinutes: new FormControl<number | null | undefined>(undefined, [Validators.min(60), Validators.max(10080)]),
			RelatedContactId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256)]),
		});

	}

	export interface StartChatContactPutBodyParticipantDetails {
		DisplayName?: string;
	}
	export interface StartChatContactPutBodyParticipantDetailsFormProperties {
		DisplayName: FormControl<string | null | undefined>,
	}
	export function CreateStartChatContactPutBodyParticipantDetailsFormGroup() {
		return new FormGroup<StartChatContactPutBodyParticipantDetailsFormProperties>({
			DisplayName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StartChatContactPutBodyInitialMessage {
		ContentType?: string;
		Content?: string;
	}
	export interface StartChatContactPutBodyInitialMessageFormProperties {
		ContentType: FormControl<string | null | undefined>,
		Content: FormControl<string | null | undefined>,
	}
	export function CreateStartChatContactPutBodyInitialMessageFormGroup() {
		return new FormGroup<StartChatContactPutBodyInitialMessageFormProperties>({
			ContentType: new FormControl<string | null | undefined>(undefined),
			Content: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StartChatContactPutBodyPersistentChat {
		RehydrationType?: RehydrationType;
		SourceContactId?: string;
	}
	export interface StartChatContactPutBodyPersistentChatFormProperties {
		RehydrationType: FormControl<RehydrationType | null | undefined>,
		SourceContactId: FormControl<string | null | undefined>,
	}
	export function CreateStartChatContactPutBodyPersistentChatFormGroup() {
		return new FormGroup<StartChatContactPutBodyPersistentChatFormProperties>({
			RehydrationType: new FormControl<RehydrationType | null | undefined>(undefined),
			SourceContactId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StartContactEvaluationPutBody {

		/**
		 * The identifier of the contact in this instance of Amazon Connect.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		ContactId: string;

		/**
		 * The unique identifier for the evaluation form.
		 * Required
		 * Max length: 500
		 * Min length: 1
		 */
		EvaluationFormId: string;

		/**
		 * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.
		 * Max length: 500
		 */
		ClientToken?: string | null;
	}
	export interface StartContactEvaluationPutBodyFormProperties {

		/**
		 * The identifier of the contact in this instance of Amazon Connect.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		ContactId: FormControl<string | null | undefined>,

		/**
		 * The unique identifier for the evaluation form.
		 * Required
		 * Max length: 500
		 * Min length: 1
		 */
		EvaluationFormId: FormControl<string | null | undefined>,

		/**
		 * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.
		 * Max length: 500
		 */
		ClientToken: FormControl<string | null | undefined>,
	}
	export function CreateStartContactEvaluationPutBodyFormGroup() {
		return new FormGroup<StartContactEvaluationPutBodyFormProperties>({
			ContactId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256)]),
			EvaluationFormId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(500)]),
			ClientToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(500)]),
		});

	}

	export interface StartContactRecordingPostBody {

		/**
		 * The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		InstanceId: string;

		/**
		 * The identifier of the contact.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		ContactId: string;

		/**
		 * The identifier of the contact. This is the identifier of the contact associated with the first interaction with the contact center.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		InitialContactId: string;

		/**
		 * Contains information about the recording configuration settings.
		 * Required
		 */
		VoiceRecordingConfiguration: StartContactRecordingPostBodyVoiceRecordingConfiguration;
	}
	export interface StartContactRecordingPostBodyFormProperties {

		/**
		 * The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		InstanceId: FormControl<string | null | undefined>,

		/**
		 * The identifier of the contact.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		ContactId: FormControl<string | null | undefined>,

		/**
		 * The identifier of the contact. This is the identifier of the contact associated with the first interaction with the contact center.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		InitialContactId: FormControl<string | null | undefined>,
	}
	export function CreateStartContactRecordingPostBodyFormGroup() {
		return new FormGroup<StartContactRecordingPostBodyFormProperties>({
			InstanceId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100)]),
			ContactId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256)]),
			InitialContactId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256)]),
		});

	}

	export interface StartContactRecordingPostBodyVoiceRecordingConfiguration {
		VoiceRecordingTrack?: VoiceRecordingTrack;
	}
	export interface StartContactRecordingPostBodyVoiceRecordingConfigurationFormProperties {
		VoiceRecordingTrack: FormControl<VoiceRecordingTrack | null | undefined>,
	}
	export function CreateStartContactRecordingPostBodyVoiceRecordingConfigurationFormGroup() {
		return new FormGroup<StartContactRecordingPostBodyVoiceRecordingConfigurationFormProperties>({
			VoiceRecordingTrack: new FormControl<VoiceRecordingTrack | null | undefined>(undefined),
		});

	}

	export interface StartContactStreamingPostBody {

		/**
		 * The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		InstanceId: string;

		/**
		 * The identifier of the contact. This is the identifier of the contact associated with the first interaction with the contact center.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		ContactId: string;

		/**
		 * The streaming configuration, such as the Amazon SNS streaming endpoint.
		 * Required
		 */
		ChatStreamingConfiguration: StartContactStreamingPostBodyChatStreamingConfiguration;

		/**
		 * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.
		 * Required
		 * Max length: 500
		 */
		ClientToken: string;
	}
	export interface StartContactStreamingPostBodyFormProperties {

		/**
		 * The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		InstanceId: FormControl<string | null | undefined>,

		/**
		 * The identifier of the contact. This is the identifier of the contact associated with the first interaction with the contact center.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		ContactId: FormControl<string | null | undefined>,

		/**
		 * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.
		 * Required
		 * Max length: 500
		 */
		ClientToken: FormControl<string | null | undefined>,
	}
	export function CreateStartContactStreamingPostBodyFormGroup() {
		return new FormGroup<StartContactStreamingPostBodyFormProperties>({
			InstanceId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100)]),
			ContactId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256)]),
			ClientToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(500)]),
		});

	}

	export interface StartContactStreamingPostBodyChatStreamingConfiguration {
		StreamingEndpointArn?: string;
	}
	export interface StartContactStreamingPostBodyChatStreamingConfigurationFormProperties {
		StreamingEndpointArn: FormControl<string | null | undefined>,
	}
	export function CreateStartContactStreamingPostBodyChatStreamingConfigurationFormGroup() {
		return new FormGroup<StartContactStreamingPostBodyChatStreamingConfigurationFormProperties>({
			StreamingEndpointArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StartOutboundVoiceContactPutBody {

		/**
		 * The phone number of the customer, in E.164 format.
		 * Required
		 */
		DestinationPhoneNumber: string;

		/**
		 * <p>The identifier of the flow for the outbound call. To see the ContactFlowId in the Amazon Connect console user interface, on the navigation menu go to <b>Routing</b>, <b>Contact Flows</b>. Choose the flow. On the flow page, under the name of the flow, choose <b>Show additional flow information</b>. The ContactFlowId is the last part of the ARN, shown here in bold: </p> <p>arn:aws:connect:us-west-2:xxxxxxxxxxxx:instance/xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx/contact-flow/<b>846ec553-a005-41c0-8341-xxxxxxxxxxxx</b> </p>
		 * Required
		 * Max length: 500
		 */
		ContactFlowId: string;

		/**
		 * The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		InstanceId: string;

		/**
		 * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>. The token is valid for 7 days after creation. If a contact is already started, the contact ID is returned.
		 * Max length: 500
		 */
		ClientToken?: string | null;

		/** The phone number associated with the Amazon Connect instance, in E.164 format. If you do not specify a source phone number, you must specify a queue. */
		SourcePhoneNumber?: string | null;

		/** The queue for the call. If you specify a queue, the phone displayed for caller ID is the phone number specified in the queue. If you do not specify a queue, the queue defined in the flow is used. If you do not specify a queue, you must specify a source phone number. */
		QueueId?: string | null;

		/** <p>A custom key-value pair using an attribute map. The attributes are standard Amazon Connect attributes, and can be accessed in flows just like any other contact attributes.</p> <p>There can be up to 32,768 UTF-8 bytes across all key-value pairs per contact. Attribute keys can include only alphanumeric, dash, and underscore characters.</p> */
		Attributes?: {[id: string]: string };

		/** Configuration of the answering machine detection. */
		AnswerMachineDetectionConfig?: StartOutboundVoiceContactPutBodyAnswerMachineDetectionConfig;

		/**
		 * The campaign identifier of the outbound communication.
		 * Max length: 100
		 * Min length: 1
		 */
		CampaignId?: string | null;

		/** Denotes the class of traffic. Calls with different traffic types are handled differently by Amazon Connect. The default value is <code>GENERAL</code>. Use <code>CAMPAIGN</code> if <code>EnableAnswerMachineDetection</code> is set to <code>true</code>. For all other cases, use <code>GENERAL</code>. */
		TrafficType?: TrafficType | null;
	}
	export interface StartOutboundVoiceContactPutBodyFormProperties {

		/**
		 * The phone number of the customer, in E.164 format.
		 * Required
		 */
		DestinationPhoneNumber: FormControl<string | null | undefined>,

		/**
		 * <p>The identifier of the flow for the outbound call. To see the ContactFlowId in the Amazon Connect console user interface, on the navigation menu go to <b>Routing</b>, <b>Contact Flows</b>. Choose the flow. On the flow page, under the name of the flow, choose <b>Show additional flow information</b>. The ContactFlowId is the last part of the ARN, shown here in bold: </p> <p>arn:aws:connect:us-west-2:xxxxxxxxxxxx:instance/xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx/contact-flow/<b>846ec553-a005-41c0-8341-xxxxxxxxxxxx</b> </p>
		 * Required
		 * Max length: 500
		 */
		ContactFlowId: FormControl<string | null | undefined>,

		/**
		 * The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		InstanceId: FormControl<string | null | undefined>,

		/**
		 * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>. The token is valid for 7 days after creation. If a contact is already started, the contact ID is returned.
		 * Max length: 500
		 */
		ClientToken: FormControl<string | null | undefined>,

		/** The phone number associated with the Amazon Connect instance, in E.164 format. If you do not specify a source phone number, you must specify a queue. */
		SourcePhoneNumber: FormControl<string | null | undefined>,

		/** The queue for the call. If you specify a queue, the phone displayed for caller ID is the phone number specified in the queue. If you do not specify a queue, the queue defined in the flow is used. If you do not specify a queue, you must specify a source phone number. */
		QueueId: FormControl<string | null | undefined>,

		/** <p>A custom key-value pair using an attribute map. The attributes are standard Amazon Connect attributes, and can be accessed in flows just like any other contact attributes.</p> <p>There can be up to 32,768 UTF-8 bytes across all key-value pairs per contact. Attribute keys can include only alphanumeric, dash, and underscore characters.</p> */
		Attributes: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * The campaign identifier of the outbound communication.
		 * Max length: 100
		 * Min length: 1
		 */
		CampaignId: FormControl<string | null | undefined>,

		/** Denotes the class of traffic. Calls with different traffic types are handled differently by Amazon Connect. The default value is <code>GENERAL</code>. Use <code>CAMPAIGN</code> if <code>EnableAnswerMachineDetection</code> is set to <code>true</code>. For all other cases, use <code>GENERAL</code>. */
		TrafficType: FormControl<TrafficType | null | undefined>,
	}
	export function CreateStartOutboundVoiceContactPutBodyFormGroup() {
		return new FormGroup<StartOutboundVoiceContactPutBodyFormProperties>({
			DestinationPhoneNumber: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('\\+[1-9]\\d{1,14}$')]),
			ContactFlowId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(500)]),
			InstanceId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100)]),
			ClientToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(500)]),
			SourcePhoneNumber: new FormControl<string | null | undefined>(undefined, [Validators.pattern('\\+[1-9]\\d{1,14}$')]),
			QueueId: new FormControl<string | null | undefined>(undefined),
			Attributes: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			CampaignId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(100)]),
			TrafficType: new FormControl<TrafficType | null | undefined>(undefined),
		});

	}

	export interface StartOutboundVoiceContactPutBodyAnswerMachineDetectionConfig {
		EnableAnswerMachineDetection?: boolean | null;
		AwaitAnswerMachinePrompt?: boolean | null;
	}
	export interface StartOutboundVoiceContactPutBodyAnswerMachineDetectionConfigFormProperties {
		EnableAnswerMachineDetection: FormControl<boolean | null | undefined>,
		AwaitAnswerMachinePrompt: FormControl<boolean | null | undefined>,
	}
	export function CreateStartOutboundVoiceContactPutBodyAnswerMachineDetectionConfigFormGroup() {
		return new FormGroup<StartOutboundVoiceContactPutBodyAnswerMachineDetectionConfigFormProperties>({
			EnableAnswerMachineDetection: new FormControl<boolean | null | undefined>(undefined),
			AwaitAnswerMachinePrompt: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface StartTaskContactPutBody {

		/**
		 * The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		InstanceId: string;

		/**
		 * The identifier of the previous chat, voice, or task contact.
		 * Max length: 256
		 * Min length: 1
		 */
		PreviousContactId?: string | null;

		/**
		 * <p>The identifier of the flow for initiating the tasks. To see the ContactFlowId in the Amazon Connect console user interface, on the navigation menu go to <b>Routing</b>, <b>Contact Flows</b>. Choose the flow. On the flow page, under the name of the flow, choose <b>Show additional flow information</b>. The ContactFlowId is the last part of the ARN, shown here in bold: </p> <p>arn:aws:connect:us-west-2:xxxxxxxxxxxx:instance/xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx/contact-flow/<b>846ec553-a005-41c0-8341-xxxxxxxxxxxx</b> </p>
		 * Max length: 500
		 */
		ContactFlowId?: string | null;

		/** <p>A custom key-value pair using an attribute map. The attributes are standard Amazon Connect attributes, and can be accessed in flows just like any other contact attributes.</p> <p>There can be up to 32,768 UTF-8 bytes across all key-value pairs per contact. Attribute keys can include only alphanumeric, dash, and underscore characters.</p> */
		Attributes?: {[id: string]: string };

		/**
		 * The name of a task that is shown to an agent in the Contact Control Panel (CCP).
		 * Required
		 * Max length: 512
		 * Min length: 0
		 */
		Name: string;

		/** A formatted URL that is shown to an agent in the Contact Control Panel (CCP). */
		References?: {[id: string]: Reference };

		/**
		 * A description of the task that is shown to an agent in the Contact Control Panel (CCP).
		 * Max length: 4096
		 * Min length: 0
		 */
		Description?: string | null;

		/**
		 * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.
		 * Max length: 500
		 */
		ClientToken?: string | null;

		/** The timestamp, in Unix Epoch seconds format, at which to start running the inbound flow. The scheduled time cannot be in the past. It must be within up to 6 days in future. */
		ScheduledTime?: Date | null;

		/**
		 * A unique identifier for the task template.
		 * Max length: 500
		 * Min length: 1
		 */
		TaskTemplateId?: string | null;

		/** The identifier for the quick connect. */
		QuickConnectId?: string | null;

		/**
		 * The contactId that is <a href="https://docs.aws.amazon.com/connect/latest/adminguide/tasks.html#linked-tasks">related</a> to this contact.
		 * Max length: 256
		 * Min length: 1
		 */
		RelatedContactId?: string | null;
	}
	export interface StartTaskContactPutBodyFormProperties {

		/**
		 * The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		InstanceId: FormControl<string | null | undefined>,

		/**
		 * The identifier of the previous chat, voice, or task contact.
		 * Max length: 256
		 * Min length: 1
		 */
		PreviousContactId: FormControl<string | null | undefined>,

		/**
		 * <p>The identifier of the flow for initiating the tasks. To see the ContactFlowId in the Amazon Connect console user interface, on the navigation menu go to <b>Routing</b>, <b>Contact Flows</b>. Choose the flow. On the flow page, under the name of the flow, choose <b>Show additional flow information</b>. The ContactFlowId is the last part of the ARN, shown here in bold: </p> <p>arn:aws:connect:us-west-2:xxxxxxxxxxxx:instance/xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx/contact-flow/<b>846ec553-a005-41c0-8341-xxxxxxxxxxxx</b> </p>
		 * Max length: 500
		 */
		ContactFlowId: FormControl<string | null | undefined>,

		/** <p>A custom key-value pair using an attribute map. The attributes are standard Amazon Connect attributes, and can be accessed in flows just like any other contact attributes.</p> <p>There can be up to 32,768 UTF-8 bytes across all key-value pairs per contact. Attribute keys can include only alphanumeric, dash, and underscore characters.</p> */
		Attributes: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * The name of a task that is shown to an agent in the Contact Control Panel (CCP).
		 * Required
		 * Max length: 512
		 * Min length: 0
		 */
		Name: FormControl<string | null | undefined>,

		/** A formatted URL that is shown to an agent in the Contact Control Panel (CCP). */
		References: FormControl<{[id: string]: Reference } | null | undefined>,

		/**
		 * A description of the task that is shown to an agent in the Contact Control Panel (CCP).
		 * Max length: 4096
		 * Min length: 0
		 */
		Description: FormControl<string | null | undefined>,

		/**
		 * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.
		 * Max length: 500
		 */
		ClientToken: FormControl<string | null | undefined>,

		/** The timestamp, in Unix Epoch seconds format, at which to start running the inbound flow. The scheduled time cannot be in the past. It must be within up to 6 days in future. */
		ScheduledTime: FormControl<Date | null | undefined>,

		/**
		 * A unique identifier for the task template.
		 * Max length: 500
		 * Min length: 1
		 */
		TaskTemplateId: FormControl<string | null | undefined>,

		/** The identifier for the quick connect. */
		QuickConnectId: FormControl<string | null | undefined>,

		/**
		 * The contactId that is <a href="https://docs.aws.amazon.com/connect/latest/adminguide/tasks.html#linked-tasks">related</a> to this contact.
		 * Max length: 256
		 * Min length: 1
		 */
		RelatedContactId: FormControl<string | null | undefined>,
	}
	export function CreateStartTaskContactPutBodyFormGroup() {
		return new FormGroup<StartTaskContactPutBodyFormProperties>({
			InstanceId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100)]),
			PreviousContactId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256)]),
			ContactFlowId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(500)]),
			Attributes: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(512)]),
			References: new FormControl<{[id: string]: Reference } | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(4096)]),
			ClientToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(500)]),
			ScheduledTime: new FormControl<Date | null | undefined>(undefined),
			TaskTemplateId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(500)]),
			QuickConnectId: new FormControl<string | null | undefined>(undefined),
			RelatedContactId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256)]),
		});

	}

	export interface StopContactPostBody {

		/**
		 * The ID of the contact.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		ContactId: string;

		/**
		 * The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		InstanceId: string;
	}
	export interface StopContactPostBodyFormProperties {

		/**
		 * The ID of the contact.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		ContactId: FormControl<string | null | undefined>,

		/**
		 * The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		InstanceId: FormControl<string | null | undefined>,
	}
	export function CreateStopContactPostBodyFormGroup() {
		return new FormGroup<StopContactPostBodyFormProperties>({
			ContactId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256)]),
			InstanceId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100)]),
		});

	}

	export interface StopContactRecordingPostBody {

		/**
		 * The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		InstanceId: string;

		/**
		 * The identifier of the contact.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		ContactId: string;

		/**
		 * The identifier of the contact. This is the identifier of the contact associated with the first interaction with the contact center.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		InitialContactId: string;
	}
	export interface StopContactRecordingPostBodyFormProperties {

		/**
		 * The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		InstanceId: FormControl<string | null | undefined>,

		/**
		 * The identifier of the contact.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		ContactId: FormControl<string | null | undefined>,

		/**
		 * The identifier of the contact. This is the identifier of the contact associated with the first interaction with the contact center.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		InitialContactId: FormControl<string | null | undefined>,
	}
	export function CreateStopContactRecordingPostBodyFormGroup() {
		return new FormGroup<StopContactRecordingPostBodyFormProperties>({
			InstanceId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100)]),
			ContactId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256)]),
			InitialContactId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256)]),
		});

	}

	export interface StopContactStreamingPostBody {

		/**
		 * The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		InstanceId: string;

		/**
		 * The identifier of the contact. This is the identifier of the contact that is associated with the first interaction with the contact center.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		ContactId: string;

		/**
		 * The identifier of the streaming configuration enabled.
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		StreamingId: string;
	}
	export interface StopContactStreamingPostBodyFormProperties {

		/**
		 * The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		InstanceId: FormControl<string | null | undefined>,

		/**
		 * The identifier of the contact. This is the identifier of the contact that is associated with the first interaction with the contact center.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		ContactId: FormControl<string | null | undefined>,

		/**
		 * The identifier of the streaming configuration enabled.
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		StreamingId: FormControl<string | null | undefined>,
	}
	export function CreateStopContactStreamingPostBodyFormGroup() {
		return new FormGroup<StopContactStreamingPostBodyFormProperties>({
			InstanceId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100)]),
			ContactId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256)]),
			StreamingId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100)]),
		});

	}

	export interface SubmitContactEvaluationPostBody {

		/** A map of question identifiers to answer value. */
		Answers?: {[id: string]: EvaluationAnswerInput };

		/** A map of question identifiers to note value. */
		Notes?: {[id: string]: EvaluationNote };
	}
	export interface SubmitContactEvaluationPostBodyFormProperties {

		/** A map of question identifiers to answer value. */
		Answers: FormControl<{[id: string]: EvaluationAnswerInput } | null | undefined>,

		/** A map of question identifiers to note value. */
		Notes: FormControl<{[id: string]: EvaluationNote } | null | undefined>,
	}
	export function CreateSubmitContactEvaluationPostBodyFormGroup() {
		return new FormGroup<SubmitContactEvaluationPostBodyFormProperties>({
			Answers: new FormControl<{[id: string]: EvaluationAnswerInput } | null | undefined>(undefined),
			Notes: new FormControl<{[id: string]: EvaluationNote } | null | undefined>(undefined),
		});

	}

	export interface SuspendContactRecordingPostBody {

		/**
		 * The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		InstanceId: string;

		/**
		 * The identifier of the contact.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		ContactId: string;

		/**
		 * The identifier of the contact. This is the identifier of the contact associated with the first interaction with the contact center.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		InitialContactId: string;
	}
	export interface SuspendContactRecordingPostBodyFormProperties {

		/**
		 * The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		InstanceId: FormControl<string | null | undefined>,

		/**
		 * The identifier of the contact.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		ContactId: FormControl<string | null | undefined>,

		/**
		 * The identifier of the contact. This is the identifier of the contact associated with the first interaction with the contact center.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		InitialContactId: FormControl<string | null | undefined>,
	}
	export function CreateSuspendContactRecordingPostBodyFormGroup() {
		return new FormGroup<SuspendContactRecordingPostBodyFormProperties>({
			InstanceId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100)]),
			ContactId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256)]),
			InitialContactId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256)]),
		});

	}

	export interface TransferContactPostBody {

		/**
		 * The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		InstanceId: string;

		/**
		 * The identifier of the contact in this instance of Amazon Connect.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		ContactId: string;

		/** The identifier for the queue. */
		QueueId?: string | null;

		/**
		 * The identifier for the user.
		 * Max length: 256
		 * Min length: 1
		 */
		UserId?: string | null;

		/**
		 * The identifier of the flow.
		 * Required
		 * Max length: 500
		 */
		ContactFlowId: string;

		/**
		 * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.
		 * Max length: 500
		 */
		ClientToken?: string | null;
	}
	export interface TransferContactPostBodyFormProperties {

		/**
		 * The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		InstanceId: FormControl<string | null | undefined>,

		/**
		 * The identifier of the contact in this instance of Amazon Connect.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		ContactId: FormControl<string | null | undefined>,

		/** The identifier for the queue. */
		QueueId: FormControl<string | null | undefined>,

		/**
		 * The identifier for the user.
		 * Max length: 256
		 * Min length: 1
		 */
		UserId: FormControl<string | null | undefined>,

		/**
		 * The identifier of the flow.
		 * Required
		 * Max length: 500
		 */
		ContactFlowId: FormControl<string | null | undefined>,

		/**
		 * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.
		 * Max length: 500
		 */
		ClientToken: FormControl<string | null | undefined>,
	}
	export function CreateTransferContactPostBodyFormGroup() {
		return new FormGroup<TransferContactPostBodyFormProperties>({
			InstanceId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100)]),
			ContactId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256)]),
			QueueId: new FormControl<string | null | undefined>(undefined),
			UserId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256)]),
			ContactFlowId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(500)]),
			ClientToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(500)]),
		});

	}

	export interface UpdateContactAttributesPostBody {

		/**
		 * The identifier of the contact. This is the identifier of the contact associated with the first interaction with the contact center.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		InitialContactId: string;

		/**
		 * The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		InstanceId: string;

		/**
		 * <p>The Amazon Connect attributes. These attributes can be accessed in flows just like any other contact attributes.</p> <p>You can have up to 32,768 UTF-8 bytes across all attributes for a contact. Attribute keys can include only alphanumeric, dash, and underscore characters.</p>
		 * Required
		 */
		Attributes: {[id: string]: string };
	}
	export interface UpdateContactAttributesPostBodyFormProperties {

		/**
		 * The identifier of the contact. This is the identifier of the contact associated with the first interaction with the contact center.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		InitialContactId: FormControl<string | null | undefined>,

		/**
		 * The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		InstanceId: FormControl<string | null | undefined>,

		/**
		 * <p>The Amazon Connect attributes. These attributes can be accessed in flows just like any other contact attributes.</p> <p>You can have up to 32,768 UTF-8 bytes across all attributes for a contact. Attribute keys can include only alphanumeric, dash, and underscore characters.</p>
		 * Required
		 */
		Attributes: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateUpdateContactAttributesPostBodyFormGroup() {
		return new FormGroup<UpdateContactAttributesPostBodyFormProperties>({
			InitialContactId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256)]),
			InstanceId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100)]),
			Attributes: new FormControl<{[id: string]: string } | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateContactFlowContentPostBody {

		/**
		 * The JSON string that represents flow's content. For an example, see <a href="https://docs.aws.amazon.com/connect/latest/APIReference/flow-language-example.html">Example contact flow in Amazon Connect Flow language</a>.
		 * Required
		 */
		Content: string;
	}
	export interface UpdateContactFlowContentPostBodyFormProperties {

		/**
		 * The JSON string that represents flow's content. For an example, see <a href="https://docs.aws.amazon.com/connect/latest/APIReference/flow-language-example.html">Example contact flow in Amazon Connect Flow language</a>.
		 * Required
		 */
		Content: FormControl<string | null | undefined>,
	}
	export function CreateUpdateContactFlowContentPostBodyFormGroup() {
		return new FormGroup<UpdateContactFlowContentPostBodyFormProperties>({
			Content: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateContactFlowMetadataPostBody {

		/**
		 * The name of the flow.
		 * Min length: 1
		 */
		Name?: string | null;

		/** The description of the flow. */
		Description?: string | null;

		/** The state of flow. */
		ContactFlowState?: ContactFlowState | null;
	}
	export interface UpdateContactFlowMetadataPostBodyFormProperties {

		/**
		 * The name of the flow.
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/** The description of the flow. */
		Description: FormControl<string | null | undefined>,

		/** The state of flow. */
		ContactFlowState: FormControl<ContactFlowState | null | undefined>,
	}
	export function CreateUpdateContactFlowMetadataPostBodyFormGroup() {
		return new FormGroup<UpdateContactFlowMetadataPostBodyFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			Description: new FormControl<string | null | undefined>(undefined),
			ContactFlowState: new FormControl<ContactFlowState | null | undefined>(undefined),
		});

	}

	export interface UpdateContactFlowModuleContentPostBody {

		/**
		 * The content of the flow module.
		 * Required
		 * Max length: 256000
		 * Min length: 1
		 */
		Content: string;
	}
	export interface UpdateContactFlowModuleContentPostBodyFormProperties {

		/**
		 * The content of the flow module.
		 * Required
		 * Max length: 256000
		 * Min length: 1
		 */
		Content: FormControl<string | null | undefined>,
	}
	export function CreateUpdateContactFlowModuleContentPostBodyFormGroup() {
		return new FormGroup<UpdateContactFlowModuleContentPostBodyFormProperties>({
			Content: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256000)]),
		});

	}

	export interface UpdateContactFlowModuleMetadataPostBody {

		/**
		 * The name of the flow module.
		 * Max length: 127
		 * Min length: 1
		 */
		Name?: string | null;

		/**
		 * The description of the flow module.
		 * Max length: 500
		 * Min length: 0
		 */
		Description?: string | null;

		/** The state of flow module. */
		State?: ContactFlowState | null;
	}
	export interface UpdateContactFlowModuleMetadataPostBodyFormProperties {

		/**
		 * The name of the flow module.
		 * Max length: 127
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * The description of the flow module.
		 * Max length: 500
		 * Min length: 0
		 */
		Description: FormControl<string | null | undefined>,

		/** The state of flow module. */
		State: FormControl<ContactFlowState | null | undefined>,
	}
	export function CreateUpdateContactFlowModuleMetadataPostBodyFormGroup() {
		return new FormGroup<UpdateContactFlowModuleMetadataPostBodyFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(127), Validators.pattern('.*\S.*')]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(500), Validators.pattern('.*\S.*')]),
			State: new FormControl<ContactFlowState | null | undefined>(undefined),
		});

	}

	export interface UpdateContactFlowNamePostBody {

		/**
		 * The name of the flow.
		 * Min length: 1
		 */
		Name?: string | null;

		/** The description of the flow. */
		Description?: string | null;
	}
	export interface UpdateContactFlowNamePostBodyFormProperties {

		/**
		 * The name of the flow.
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/** The description of the flow. */
		Description: FormControl<string | null | undefined>,
	}
	export function CreateUpdateContactFlowNamePostBodyFormGroup() {
		return new FormGroup<UpdateContactFlowNamePostBodyFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateContactSchedulePostBody {

		/**
		 * The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		InstanceId: string;

		/**
		 * The identifier of the contact.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		ContactId: string;

		/**
		 * The timestamp, in Unix Epoch seconds format, at which to start running the inbound flow. The scheduled time cannot be in the past. It must be within up to 6 days in future.
		 * Required
		 */
		ScheduledTime: Date;
	}
	export interface UpdateContactSchedulePostBodyFormProperties {

		/**
		 * The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		InstanceId: FormControl<string | null | undefined>,

		/**
		 * The identifier of the contact.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		ContactId: FormControl<string | null | undefined>,

		/**
		 * The timestamp, in Unix Epoch seconds format, at which to start running the inbound flow. The scheduled time cannot be in the past. It must be within up to 6 days in future.
		 * Required
		 */
		ScheduledTime: FormControl<Date | null | undefined>,
	}
	export function CreateUpdateContactSchedulePostBodyFormGroup() {
		return new FormGroup<UpdateContactSchedulePostBodyFormProperties>({
			InstanceId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100)]),
			ContactId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256)]),
			ScheduledTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateParticipantRoleConfigPutBody {

		/**
		 * Configuration information for the chat participant role.
		 * Required
		 */
		ChannelConfiguration: UpdateParticipantRoleConfigPutBodyChannelConfiguration;
	}
	export interface UpdateParticipantRoleConfigPutBodyFormProperties {
	}
	export function CreateUpdateParticipantRoleConfigPutBodyFormGroup() {
		return new FormGroup<UpdateParticipantRoleConfigPutBodyFormProperties>({
		});

	}

	export interface UpdateParticipantRoleConfigPutBodyChannelConfiguration {
		Chat?: ChatParticipantRoleConfig;
	}
	export interface UpdateParticipantRoleConfigPutBodyChannelConfigurationFormProperties {
	}
	export function CreateUpdateParticipantRoleConfigPutBodyChannelConfigurationFormGroup() {
		return new FormGroup<UpdateParticipantRoleConfigPutBodyChannelConfigurationFormProperties>({
		});

	}

	export interface UpdateQueueHoursOfOperationPostBody {

		/**
		 * The identifier for the hours of operation.
		 * Required
		 */
		HoursOfOperationId: string;
	}
	export interface UpdateQueueHoursOfOperationPostBodyFormProperties {

		/**
		 * The identifier for the hours of operation.
		 * Required
		 */
		HoursOfOperationId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateQueueHoursOfOperationPostBodyFormGroup() {
		return new FormGroup<UpdateQueueHoursOfOperationPostBodyFormProperties>({
			HoursOfOperationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateQueueMaxContactsPostBody {

		/**
		 * The maximum number of contacts that can be in the queue before it is considered full.
		 * Minimum: 0
		 */
		MaxContacts?: number | null;
	}
	export interface UpdateQueueMaxContactsPostBodyFormProperties {

		/**
		 * The maximum number of contacts that can be in the queue before it is considered full.
		 * Minimum: 0
		 */
		MaxContacts: FormControl<number | null | undefined>,
	}
	export function CreateUpdateQueueMaxContactsPostBodyFormGroup() {
		return new FormGroup<UpdateQueueMaxContactsPostBodyFormProperties>({
			MaxContacts: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
		});

	}

	export interface UpdateQueueNamePostBody {

		/**
		 * The name of the queue.
		 * Max length: 127
		 * Min length: 1
		 */
		Name?: string | null;

		/**
		 * The description of the queue.
		 * Max length: 250
		 * Min length: 1
		 */
		Description?: string | null;
	}
	export interface UpdateQueueNamePostBodyFormProperties {

		/**
		 * The name of the queue.
		 * Max length: 127
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * The description of the queue.
		 * Max length: 250
		 * Min length: 1
		 */
		Description: FormControl<string | null | undefined>,
	}
	export function CreateUpdateQueueNamePostBodyFormGroup() {
		return new FormGroup<UpdateQueueNamePostBodyFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(127)]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(250)]),
		});

	}

	export interface UpdateQueueOutboundCallerConfigPostBody {

		/**
		 * The outbound caller ID name, number, and outbound whisper flow.
		 * Required
		 */
		OutboundCallerConfig: UpdateQueueOutboundCallerConfigPostBodyOutboundCallerConfig;
	}
	export interface UpdateQueueOutboundCallerConfigPostBodyFormProperties {
	}
	export function CreateUpdateQueueOutboundCallerConfigPostBodyFormGroup() {
		return new FormGroup<UpdateQueueOutboundCallerConfigPostBodyFormProperties>({
		});

	}

	export interface UpdateQueueOutboundCallerConfigPostBodyOutboundCallerConfig {
		OutboundCallerIdName?: string;
		OutboundCallerIdNumberId?: string;
		OutboundFlowId?: string;
	}
	export interface UpdateQueueOutboundCallerConfigPostBodyOutboundCallerConfigFormProperties {
		OutboundCallerIdName: FormControl<string | null | undefined>,
		OutboundCallerIdNumberId: FormControl<string | null | undefined>,
		OutboundFlowId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateQueueOutboundCallerConfigPostBodyOutboundCallerConfigFormGroup() {
		return new FormGroup<UpdateQueueOutboundCallerConfigPostBodyOutboundCallerConfigFormProperties>({
			OutboundCallerIdName: new FormControl<string | null | undefined>(undefined),
			OutboundCallerIdNumberId: new FormControl<string | null | undefined>(undefined),
			OutboundFlowId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateQueueStatusPostBody {

		/**
		 * The status of the queue.
		 * Required
		 */
		Status: EvaluationFormScoringStatus;
	}
	export interface UpdateQueueStatusPostBodyFormProperties {

		/**
		 * The status of the queue.
		 * Required
		 */
		Status: FormControl<EvaluationFormScoringStatus | null | undefined>,
	}
	export function CreateUpdateQueueStatusPostBodyFormGroup() {
		return new FormGroup<UpdateQueueStatusPostBodyFormProperties>({
			Status: new FormControl<EvaluationFormScoringStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateQuickConnectConfigPostBody {

		/**
		 * Contains configuration settings for a quick connect.
		 * Required
		 */
		QuickConnectConfig: UpdateQuickConnectConfigPostBodyQuickConnectConfig;
	}
	export interface UpdateQuickConnectConfigPostBodyFormProperties {
	}
	export function CreateUpdateQuickConnectConfigPostBodyFormGroup() {
		return new FormGroup<UpdateQuickConnectConfigPostBodyFormProperties>({
		});

	}

	export interface UpdateQuickConnectConfigPostBodyQuickConnectConfig {
		QuickConnectType?: QuickConnectType;
		UserConfig?: UserQuickConnectConfig;
		QueueConfig?: QueueQuickConnectConfig;
		PhoneConfig?: PhoneNumberQuickConnectConfig;
	}
	export interface UpdateQuickConnectConfigPostBodyQuickConnectConfigFormProperties {
		QuickConnectType: FormControl<QuickConnectType | null | undefined>,
	}
	export function CreateUpdateQuickConnectConfigPostBodyQuickConnectConfigFormGroup() {
		return new FormGroup<UpdateQuickConnectConfigPostBodyQuickConnectConfigFormProperties>({
			QuickConnectType: new FormControl<QuickConnectType | null | undefined>(undefined),
		});

	}

	export interface UpdateQuickConnectNamePostBody {

		/**
		 * The name of the quick connect.
		 * Max length: 127
		 * Min length: 1
		 */
		Name?: string | null;

		/**
		 * The description of the quick connect.
		 * Max length: 250
		 * Min length: 0
		 */
		Description?: string | null;
	}
	export interface UpdateQuickConnectNamePostBodyFormProperties {

		/**
		 * The name of the quick connect.
		 * Max length: 127
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * The description of the quick connect.
		 * Max length: 250
		 * Min length: 0
		 */
		Description: FormControl<string | null | undefined>,
	}
	export function CreateUpdateQuickConnectNamePostBodyFormGroup() {
		return new FormGroup<UpdateQuickConnectNamePostBodyFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(127)]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(250)]),
		});

	}

	export interface UpdateRoutingProfileAgentAvailabilityTimerPostBody {

		/**
		 * Whether agents with this routing profile will have their routing order calculated based on <i>time since their last inbound contact</i> or <i>longest idle time</i>.
		 * Required
		 */
		AgentAvailabilityTimer: AgentAvailabilityTimer;
	}
	export interface UpdateRoutingProfileAgentAvailabilityTimerPostBodyFormProperties {

		/**
		 * Whether agents with this routing profile will have their routing order calculated based on <i>time since their last inbound contact</i> or <i>longest idle time</i>.
		 * Required
		 */
		AgentAvailabilityTimer: FormControl<AgentAvailabilityTimer | null | undefined>,
	}
	export function CreateUpdateRoutingProfileAgentAvailabilityTimerPostBodyFormGroup() {
		return new FormGroup<UpdateRoutingProfileAgentAvailabilityTimerPostBodyFormProperties>({
			AgentAvailabilityTimer: new FormControl<AgentAvailabilityTimer | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateRoutingProfileConcurrencyPostBody {

		/**
		 * The channels that agents can handle in the Contact Control Panel (CCP).
		 * Required
		 */
		MediaConcurrencies: Array<MediaConcurrency>;
	}
	export interface UpdateRoutingProfileConcurrencyPostBodyFormProperties {
	}
	export function CreateUpdateRoutingProfileConcurrencyPostBodyFormGroup() {
		return new FormGroup<UpdateRoutingProfileConcurrencyPostBodyFormProperties>({
		});

	}

	export interface UpdateRoutingProfileDefaultOutboundQueuePostBody {

		/**
		 * The identifier for the default outbound queue.
		 * Required
		 */
		DefaultOutboundQueueId: string;
	}
	export interface UpdateRoutingProfileDefaultOutboundQueuePostBodyFormProperties {

		/**
		 * The identifier for the default outbound queue.
		 * Required
		 */
		DefaultOutboundQueueId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateRoutingProfileDefaultOutboundQueuePostBodyFormGroup() {
		return new FormGroup<UpdateRoutingProfileDefaultOutboundQueuePostBodyFormProperties>({
			DefaultOutboundQueueId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateRoutingProfileNamePostBody {

		/**
		 * The name of the routing profile. Must not be more than 127 characters.
		 * Max length: 127
		 * Min length: 1
		 */
		Name?: string | null;

		/**
		 * The description of the routing profile. Must not be more than 250 characters.
		 * Max length: 250
		 * Min length: 1
		 */
		Description?: string | null;
	}
	export interface UpdateRoutingProfileNamePostBodyFormProperties {

		/**
		 * The name of the routing profile. Must not be more than 127 characters.
		 * Max length: 127
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * The description of the routing profile. Must not be more than 250 characters.
		 * Max length: 250
		 * Min length: 1
		 */
		Description: FormControl<string | null | undefined>,
	}
	export function CreateUpdateRoutingProfileNamePostBodyFormGroup() {
		return new FormGroup<UpdateRoutingProfileNamePostBodyFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(127)]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(250)]),
		});

	}

	export interface UpdateUserHierarchyPostBody {

		/** The identifier of the hierarchy group. */
		HierarchyGroupId?: string | null;
	}
	export interface UpdateUserHierarchyPostBodyFormProperties {

		/** The identifier of the hierarchy group. */
		HierarchyGroupId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateUserHierarchyPostBodyFormGroup() {
		return new FormGroup<UpdateUserHierarchyPostBodyFormProperties>({
			HierarchyGroupId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateUserHierarchyGroupNamePostBody {

		/**
		 * The name of the hierarchy group. Must not be more than 100 characters.
		 * Required
		 */
		Name: string;
	}
	export interface UpdateUserHierarchyGroupNamePostBodyFormProperties {

		/**
		 * The name of the hierarchy group. Must not be more than 100 characters.
		 * Required
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateUpdateUserHierarchyGroupNamePostBodyFormGroup() {
		return new FormGroup<UpdateUserHierarchyGroupNamePostBodyFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateUserIdentityInfoPostBody {

		/**
		 * Contains information about the identity of a user.
		 * Required
		 */
		IdentityInfo: UpdateUserIdentityInfoPostBodyIdentityInfo;
	}
	export interface UpdateUserIdentityInfoPostBodyFormProperties {
	}
	export function CreateUpdateUserIdentityInfoPostBodyFormGroup() {
		return new FormGroup<UpdateUserIdentityInfoPostBodyFormProperties>({
		});

	}

	export interface UpdateUserIdentityInfoPostBodyIdentityInfo {
		FirstName?: string;
		LastName?: string;
		Email?: string;
		SecondaryEmail?: string;
		Mobile?: string;
	}
	export interface UpdateUserIdentityInfoPostBodyIdentityInfoFormProperties {
		FirstName: FormControl<string | null | undefined>,
		LastName: FormControl<string | null | undefined>,
		Email: FormControl<string | null | undefined>,
		SecondaryEmail: FormControl<string | null | undefined>,
		Mobile: FormControl<string | null | undefined>,
	}
	export function CreateUpdateUserIdentityInfoPostBodyIdentityInfoFormGroup() {
		return new FormGroup<UpdateUserIdentityInfoPostBodyIdentityInfoFormProperties>({
			FirstName: new FormControl<string | null | undefined>(undefined),
			LastName: new FormControl<string | null | undefined>(undefined),
			Email: new FormControl<string | null | undefined>(undefined),
			SecondaryEmail: new FormControl<string | null | undefined>(undefined),
			Mobile: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateUserPhoneConfigPostBody {

		/**
		 * Contains information about the phone configuration settings for a user.
		 * Required
		 */
		PhoneConfig: UpdateUserPhoneConfigPostBodyPhoneConfig;
	}
	export interface UpdateUserPhoneConfigPostBodyFormProperties {
	}
	export function CreateUpdateUserPhoneConfigPostBodyFormGroup() {
		return new FormGroup<UpdateUserPhoneConfigPostBodyFormProperties>({
		});

	}

	export interface UpdateUserPhoneConfigPostBodyPhoneConfig {
		PhoneType?: PhoneType;
		AutoAccept?: boolean | null;
		AfterContactWorkTimeLimit?: number | null;
		DeskPhoneNumber?: string;
	}
	export interface UpdateUserPhoneConfigPostBodyPhoneConfigFormProperties {
		PhoneType: FormControl<PhoneType | null | undefined>,
		AutoAccept: FormControl<boolean | null | undefined>,
		AfterContactWorkTimeLimit: FormControl<number | null | undefined>,
		DeskPhoneNumber: FormControl<string | null | undefined>,
	}
	export function CreateUpdateUserPhoneConfigPostBodyPhoneConfigFormGroup() {
		return new FormGroup<UpdateUserPhoneConfigPostBodyPhoneConfigFormProperties>({
			PhoneType: new FormControl<PhoneType | null | undefined>(undefined),
			AutoAccept: new FormControl<boolean | null | undefined>(undefined),
			AfterContactWorkTimeLimit: new FormControl<number | null | undefined>(undefined),
			DeskPhoneNumber: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateUserRoutingProfilePostBody {

		/**
		 * The identifier of the routing profile for the user.
		 * Required
		 */
		RoutingProfileId: string;
	}
	export interface UpdateUserRoutingProfilePostBodyFormProperties {

		/**
		 * The identifier of the routing profile for the user.
		 * Required
		 */
		RoutingProfileId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateUserRoutingProfilePostBodyFormGroup() {
		return new FormGroup<UpdateUserRoutingProfilePostBodyFormProperties>({
			RoutingProfileId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateUserSecurityProfilesPostBody {

		/**
		 * The identifiers of the security profiles for the user.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 10
		 */
		SecurityProfileIds: Array<string>;
	}
	export interface UpdateUserSecurityProfilesPostBodyFormProperties {
	}
	export function CreateUpdateUserSecurityProfilesPostBodyFormGroup() {
		return new FormGroup<UpdateUserSecurityProfilesPostBodyFormProperties>({
		});

	}

}

