import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface AddProfileKeyResponse {
		KeyName?: string;
		Values?: Array<string>;
	}
	export interface AddProfileKeyResponseFormProperties {
		KeyName: FormControl<string | null | undefined>,
	}
	export function CreateAddProfileKeyResponseFormGroup() {
		return new FormGroup<AddProfileKeyResponseFormProperties>({
			KeyName: new FormControl<string | null | undefined>(undefined),
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

	export interface AccessDeniedException {
	}
	export interface AccessDeniedExceptionFormProperties {
	}
	export function CreateAccessDeniedExceptionFormGroup() {
		return new FormGroup<AccessDeniedExceptionFormProperties>({
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

	export interface CreateCalculatedAttributeDefinitionResponse {
		CalculatedAttributeName?: string;
		DisplayName?: string;
		Description?: string;
		AttributeDetails?: AttributeDetails;
		Conditions?: Conditions;
		Statistic?: Statistic;
		CreatedAt?: Date;
		LastUpdatedAt?: Date;
		Tags?: TagMap;
	}
	export interface CreateCalculatedAttributeDefinitionResponseFormProperties {
		CalculatedAttributeName: FormControl<string | null | undefined>,
		DisplayName: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		Statistic: FormControl<Statistic | null | undefined>,
		CreatedAt: FormControl<Date | null | undefined>,
		LastUpdatedAt: FormControl<Date | null | undefined>,
	}
	export function CreateCreateCalculatedAttributeDefinitionResponseFormGroup() {
		return new FormGroup<CreateCalculatedAttributeDefinitionResponseFormProperties>({
			CalculatedAttributeName: new FormControl<string | null | undefined>(undefined),
			DisplayName: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			Statistic: new FormControl<Statistic | null | undefined>(undefined),
			CreatedAt: new FormControl<Date | null | undefined>(undefined),
			LastUpdatedAt: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Mathematical expression and a list of attribute items specified in that expression. */
	export interface AttributeDetails {

		/** Required */
		Attributes: Array<AttributeItem>;

		/** Required */
		Expression: string;
	}

	/** Mathematical expression and a list of attribute items specified in that expression. */
	export interface AttributeDetailsFormProperties {

		/** Required */
		Expression: FormControl<string | null | undefined>,
	}
	export function CreateAttributeDetailsFormGroup() {
		return new FormGroup<AttributeDetailsFormProperties>({
			Expression: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The details of a single attribute item specified in the mathematical expression. */
	export interface AttributeItem {

		/** Required */
		Name: string;
	}

	/** The details of a single attribute item specified in the mathematical expression. */
	export interface AttributeItemFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateAttributeItemFormGroup() {
		return new FormGroup<AttributeItemFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The conditions including range, object count, and threshold for the calculated attribute. */
	export interface Conditions {
		Range?: Range;
		ObjectCount?: number | null;
		Threshold?: Threshold;
	}

	/** The conditions including range, object count, and threshold for the calculated attribute. */
	export interface ConditionsFormProperties {
		ObjectCount: FormControl<number | null | undefined>,
	}
	export function CreateConditionsFormGroup() {
		return new FormGroup<ConditionsFormProperties>({
			ObjectCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The relative time period over which data is included in the aggregation. */
	export interface Range {

		/** Required */
		Value: number;

		/** Required */
		Unit: Unit;
	}

	/** The relative time period over which data is included in the aggregation. */
	export interface RangeFormProperties {

		/** Required */
		Value: FormControl<number | null | undefined>,

		/** Required */
		Unit: FormControl<Unit | null | undefined>,
	}
	export function CreateRangeFormGroup() {
		return new FormGroup<RangeFormProperties>({
			Value: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Unit: new FormControl<Unit | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum Unit { DAYS = 0 }


	/** The threshold for the calculated attribute. */
	export interface Threshold {

		/** Required */
		Value: string;

		/** Required */
		Operator: Operator;
	}

	/** The threshold for the calculated attribute. */
	export interface ThresholdFormProperties {

		/** Required */
		Value: FormControl<string | null | undefined>,

		/** Required */
		Operator: FormControl<Operator | null | undefined>,
	}
	export function CreateThresholdFormGroup() {
		return new FormGroup<ThresholdFormProperties>({
			Value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Operator: new FormControl<Operator | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum Operator { EQUAL_TO = 0, GREATER_THAN = 1, LESS_THAN = 2, NOT_EQUAL_TO = 3 }

	export enum Statistic { FIRST_OCCURRENCE = 0, LAST_OCCURRENCE = 1, COUNT = 2, SUM = 3, MINIMUM = 4, MAXIMUM = 5, AVERAGE = 6, MAX_OCCURRENCE = 7 }

	export interface TagMap {
	}
	export interface TagMapFormProperties {
	}
	export function CreateTagMapFormGroup() {
		return new FormGroup<TagMapFormProperties>({
		});

	}

	export interface CreateDomainResponse {

		/** Required */
		DomainName: string;

		/** Required */
		DefaultExpirationDays: number;
		DefaultEncryptionKey?: string;
		DeadLetterQueueUrl?: string;
		Matching?: MatchingResponse;
		RuleBasedMatching?: RuleBasedMatchingResponse;

		/** Required */
		CreatedAt: Date;

		/** Required */
		LastUpdatedAt: Date;
		Tags?: TagMap;
	}
	export interface CreateDomainResponseFormProperties {

		/** Required */
		DomainName: FormControl<string | null | undefined>,

		/** Required */
		DefaultExpirationDays: FormControl<number | null | undefined>,
		DefaultEncryptionKey: FormControl<string | null | undefined>,
		DeadLetterQueueUrl: FormControl<string | null | undefined>,

		/** Required */
		CreatedAt: FormControl<Date | null | undefined>,

		/** Required */
		LastUpdatedAt: FormControl<Date | null | undefined>,
	}
	export function CreateCreateDomainResponseFormGroup() {
		return new FormGroup<CreateDomainResponseFormProperties>({
			DomainName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DefaultExpirationDays: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			DefaultEncryptionKey: new FormControl<string | null | undefined>(undefined),
			DeadLetterQueueUrl: new FormControl<string | null | undefined>(undefined),
			CreatedAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			LastUpdatedAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The flag that enables the matching process of duplicate profiles. */
	export interface MatchingResponse {
		Enabled?: boolean | null;
		JobSchedule?: JobSchedule;
		AutoMerging?: AutoMerging;
		ExportingConfig?: ExportingConfig;
	}

	/** The flag that enables the matching process of duplicate profiles. */
	export interface MatchingResponseFormProperties {
		Enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateMatchingResponseFormGroup() {
		return new FormGroup<MatchingResponseFormProperties>({
			Enabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** The day and time when do you want to start the Identity Resolution Job every week. */
	export interface JobSchedule {

		/** Required */
		DayOfTheWeek: JobScheduleDayOfTheWeek;

		/** Required */
		Time: string;
	}

	/** The day and time when do you want to start the Identity Resolution Job every week. */
	export interface JobScheduleFormProperties {

		/** Required */
		DayOfTheWeek: FormControl<JobScheduleDayOfTheWeek | null | undefined>,

		/** Required */
		Time: FormControl<string | null | undefined>,
	}
	export function CreateJobScheduleFormGroup() {
		return new FormGroup<JobScheduleFormProperties>({
			DayOfTheWeek: new FormControl<JobScheduleDayOfTheWeek | null | undefined>(undefined, [Validators.required]),
			Time: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum JobScheduleDayOfTheWeek { SUNDAY = 0, MONDAY = 1, TUESDAY = 2, WEDNESDAY = 3, THURSDAY = 4, FRIDAY = 5, SATURDAY = 6 }


	/** Configuration settings for how to perform the auto-merging of profiles. */
	export interface AutoMerging {

		/** Required */
		Enabled: boolean;
		Consolidation?: Consolidation;
		ConflictResolution?: ConflictResolution;
		MinAllowedConfidenceScoreForMerging?: number | null;
	}

	/** Configuration settings for how to perform the auto-merging of profiles. */
	export interface AutoMergingFormProperties {

		/** Required */
		Enabled: FormControl<boolean | null | undefined>,
		MinAllowedConfidenceScoreForMerging: FormControl<number | null | undefined>,
	}
	export function CreateAutoMergingFormGroup() {
		return new FormGroup<AutoMergingFormProperties>({
			Enabled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			MinAllowedConfidenceScoreForMerging: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The matching criteria to be used during the auto-merging process.  */
	export interface Consolidation {

		/** Required */
		MatchingAttributesList: Array<Array<string>>;
	}

	/** The matching criteria to be used during the auto-merging process.  */
	export interface ConsolidationFormProperties {
	}
	export function CreateConsolidationFormGroup() {
		return new FormGroup<ConsolidationFormProperties>({
		});

	}


	/** How the auto-merging process should resolve conflicts between different profiles. */
	export interface ConflictResolution {

		/** Required */
		ConflictResolvingModel: ConflictResolvingModel;
		SourceName?: string;
	}

	/** How the auto-merging process should resolve conflicts between different profiles. */
	export interface ConflictResolutionFormProperties {

		/** Required */
		ConflictResolvingModel: FormControl<ConflictResolvingModel | null | undefined>,
		SourceName: FormControl<string | null | undefined>,
	}
	export function CreateConflictResolutionFormGroup() {
		return new FormGroup<ConflictResolutionFormProperties>({
			ConflictResolvingModel: new FormControl<ConflictResolvingModel | null | undefined>(undefined, [Validators.required]),
			SourceName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ConflictResolvingModel { RECENCY = 0, SOURCE = 1 }


	/** <p>Configuration information about the S3 bucket where Identity Resolution Jobs writes result files. </p> <note> <p>You need to give Customer Profiles service principal write permission to your S3 bucket. Otherwise, you'll get an exception in the API response. For an example policy, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/cross-service-confused-deputy-prevention.html#customer-profiles-cross-service">Amazon Connect Customer Profiles cross-service confused deputy prevention</a>. </p> </note> */
	export interface ExportingConfig {
		S3Exporting?: S3ExportingConfig;
	}

	/** <p>Configuration information about the S3 bucket where Identity Resolution Jobs writes result files. </p> <note> <p>You need to give Customer Profiles service principal write permission to your S3 bucket. Otherwise, you'll get an exception in the API response. For an example policy, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/cross-service-confused-deputy-prevention.html#customer-profiles-cross-service">Amazon Connect Customer Profiles cross-service confused deputy prevention</a>. </p> </note> */
	export interface ExportingConfigFormProperties {
	}
	export function CreateExportingConfigFormGroup() {
		return new FormGroup<ExportingConfigFormProperties>({
		});

	}


	/** Configuration information about the S3 bucket where Identity Resolution Jobs write result files. */
	export interface S3ExportingConfig {

		/** Required */
		S3BucketName: string;
		S3KeyName?: string;
	}

	/** Configuration information about the S3 bucket where Identity Resolution Jobs write result files. */
	export interface S3ExportingConfigFormProperties {

		/** Required */
		S3BucketName: FormControl<string | null | undefined>,
		S3KeyName: FormControl<string | null | undefined>,
	}
	export function CreateS3ExportingConfigFormGroup() {
		return new FormGroup<S3ExportingConfigFormProperties>({
			S3BucketName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			S3KeyName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response of the Rule-based matching request. */
	export interface RuleBasedMatchingResponse {
		Enabled?: boolean | null;
		MatchingRules?: Array<MatchingRule>;
		Status?: RuleBasedMatchingStatus;
		MaxAllowedRuleLevelForMerging?: number | null;
		MaxAllowedRuleLevelForMatching?: number | null;
		AttributeTypesSelector?: AttributeTypesSelector;

		/** How the auto-merging process should resolve conflicts between different profiles. */
		ConflictResolution?: ConflictResolution;

		/** <p>Configuration information about the S3 bucket where Identity Resolution Jobs writes result files. </p> <note> <p>You need to give Customer Profiles service principal write permission to your S3 bucket. Otherwise, you'll get an exception in the API response. For an example policy, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/cross-service-confused-deputy-prevention.html#customer-profiles-cross-service">Amazon Connect Customer Profiles cross-service confused deputy prevention</a>. </p> </note> */
		ExportingConfig?: ExportingConfig;
	}

	/** The response of the Rule-based matching request. */
	export interface RuleBasedMatchingResponseFormProperties {
		Enabled: FormControl<boolean | null | undefined>,
		Status: FormControl<RuleBasedMatchingStatus | null | undefined>,
		MaxAllowedRuleLevelForMerging: FormControl<number | null | undefined>,
		MaxAllowedRuleLevelForMatching: FormControl<number | null | undefined>,
	}
	export function CreateRuleBasedMatchingResponseFormGroup() {
		return new FormGroup<RuleBasedMatchingResponseFormProperties>({
			Enabled: new FormControl<boolean | null | undefined>(undefined),
			Status: new FormControl<RuleBasedMatchingStatus | null | undefined>(undefined),
			MaxAllowedRuleLevelForMerging: new FormControl<number | null | undefined>(undefined),
			MaxAllowedRuleLevelForMatching: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** <p>Specifies how does the rule-based matching process should match profiles. You can choose from the following attributes to build the matching Rule:</p> <ul> <li> <p>AccountNumber</p> </li> <li> <p>Address.Address</p> </li> <li> <p>Address.City</p> </li> <li> <p>Address.Country</p> </li> <li> <p>Address.County</p> </li> <li> <p>Address.PostalCode</p> </li> <li> <p>Address.State</p> </li> <li> <p>Address.Province</p> </li> <li> <p>BirthDate</p> </li> <li> <p>BusinessName</p> </li> <li> <p>EmailAddress</p> </li> <li> <p>FirstName</p> </li> <li> <p>Gender</p> </li> <li> <p>LastName</p> </li> <li> <p>MiddleName</p> </li> <li> <p>PhoneNumber</p> </li> <li> <p>Any customized profile attributes that start with the <code>Attributes</code> </p> </li> </ul> */
	export interface MatchingRule {

		/** Required */
		Rule: Array<string>;
	}

	/** <p>Specifies how does the rule-based matching process should match profiles. You can choose from the following attributes to build the matching Rule:</p> <ul> <li> <p>AccountNumber</p> </li> <li> <p>Address.Address</p> </li> <li> <p>Address.City</p> </li> <li> <p>Address.Country</p> </li> <li> <p>Address.County</p> </li> <li> <p>Address.PostalCode</p> </li> <li> <p>Address.State</p> </li> <li> <p>Address.Province</p> </li> <li> <p>BirthDate</p> </li> <li> <p>BusinessName</p> </li> <li> <p>EmailAddress</p> </li> <li> <p>FirstName</p> </li> <li> <p>Gender</p> </li> <li> <p>LastName</p> </li> <li> <p>MiddleName</p> </li> <li> <p>PhoneNumber</p> </li> <li> <p>Any customized profile attributes that start with the <code>Attributes</code> </p> </li> </ul> */
	export interface MatchingRuleFormProperties {
	}
	export function CreateMatchingRuleFormGroup() {
		return new FormGroup<MatchingRuleFormProperties>({
		});

	}

	export enum RuleBasedMatchingStatus { PENDING = 0, IN_PROGRESS = 1, ACTIVE = 2 }


	/** <p>Configuration information about the <code>AttributeTypesSelector </code>where the rule-based identity resolution uses to match profiles. You can choose how profiles are compared across attribute types and which attribute to use for matching from each type. There are three attribute types you can configure:</p> <ul> <li> <p>Email type</p> <ul> <li> <p>You can choose from <code>Email</code>, <code>BusinessEmail</code>, and <code>PersonalEmail</code> </p> </li> </ul> </li> <li> <p>Phone number type</p> <ul> <li> <p>You can choose from <code>Phone</code>, <code>HomePhone</code>, and <code>MobilePhone</code> </p> </li> </ul> </li> <li> <p>Address type</p> <ul> <li> <p>You can choose from <code>Address</code>, <code>BusinessAddress</code>, <code>MaillingAddress</code>, and <code>ShippingAddress</code> </p> </li> </ul> </li> </ul> <p>You can either choose <code>ONE_TO_ONE</code> or <code>MANY_TO_MANY</code> as the <code>AttributeMatchingModel</code>. When choosing <code>MANY_TO_MANY</code>, the system can match attribute across the sub-types of an attribute type. For example, if the value of the <code>Email</code> field of Profile A and the value of <code>BusinessEmail</code> field of Profile B matches, the two profiles are matched on the Email type. When choosing <code>ONE_TO_ONE</code> the system can only match if the sub-types are exact matches. For example, only when the value of the <code>Email</code> field of Profile A and the value of the <code>Email</code> field of Profile B matches, the two profiles are matched on the Email type.</p> */
	export interface AttributeTypesSelector {

		/** Required */
		AttributeMatchingModel: AttributeMatchingModel;
		Address?: Array<string>;
		PhoneNumber?: Array<string>;
		EmailAddress?: Array<string>;
	}

	/** <p>Configuration information about the <code>AttributeTypesSelector </code>where the rule-based identity resolution uses to match profiles. You can choose how profiles are compared across attribute types and which attribute to use for matching from each type. There are three attribute types you can configure:</p> <ul> <li> <p>Email type</p> <ul> <li> <p>You can choose from <code>Email</code>, <code>BusinessEmail</code>, and <code>PersonalEmail</code> </p> </li> </ul> </li> <li> <p>Phone number type</p> <ul> <li> <p>You can choose from <code>Phone</code>, <code>HomePhone</code>, and <code>MobilePhone</code> </p> </li> </ul> </li> <li> <p>Address type</p> <ul> <li> <p>You can choose from <code>Address</code>, <code>BusinessAddress</code>, <code>MaillingAddress</code>, and <code>ShippingAddress</code> </p> </li> </ul> </li> </ul> <p>You can either choose <code>ONE_TO_ONE</code> or <code>MANY_TO_MANY</code> as the <code>AttributeMatchingModel</code>. When choosing <code>MANY_TO_MANY</code>, the system can match attribute across the sub-types of an attribute type. For example, if the value of the <code>Email</code> field of Profile A and the value of <code>BusinessEmail</code> field of Profile B matches, the two profiles are matched on the Email type. When choosing <code>ONE_TO_ONE</code> the system can only match if the sub-types are exact matches. For example, only when the value of the <code>Email</code> field of Profile A and the value of the <code>Email</code> field of Profile B matches, the two profiles are matched on the Email type.</p> */
	export interface AttributeTypesSelectorFormProperties {

		/** Required */
		AttributeMatchingModel: FormControl<AttributeMatchingModel | null | undefined>,
	}
	export function CreateAttributeTypesSelectorFormGroup() {
		return new FormGroup<AttributeTypesSelectorFormProperties>({
			AttributeMatchingModel: new FormControl<AttributeMatchingModel | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum AttributeMatchingModel { ONE_TO_ONE = 0, MANY_TO_MANY = 1 }

	export interface CreateEventStreamResponse {

		/** Required */
		EventStreamArn: string;
		Tags?: TagMap;
	}
	export interface CreateEventStreamResponseFormProperties {

		/** Required */
		EventStreamArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateEventStreamResponseFormGroup() {
		return new FormGroup<CreateEventStreamResponseFormProperties>({
			EventStreamArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateIntegrationWorkflowResponse {

		/** Required */
		WorkflowId: string;

		/** Required */
		Message: string;
	}
	export interface CreateIntegrationWorkflowResponseFormProperties {

		/** Required */
		WorkflowId: FormControl<string | null | undefined>,

		/** Required */
		Message: FormControl<string | null | undefined>,
	}
	export function CreateCreateIntegrationWorkflowResponseFormGroup() {
		return new FormGroup<CreateIntegrationWorkflowResponseFormProperties>({
			WorkflowId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Message: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Details for workflow of type <code>APPFLOW_INTEGRATION</code>. */
	export interface AppflowIntegration {

		/**
		 * The configurations that control how Customer Profiles retrieves data from the source, Amazon AppFlow. Customer Profiles uses this information to create an AppFlow flow on behalf of customers.
		 * Required
		 */
		FlowDefinition: FlowDefinition;
		Batches?: Array<Batch>;
	}

	/** Details for workflow of type <code>APPFLOW_INTEGRATION</code>. */
	export interface AppflowIntegrationFormProperties {
	}
	export function CreateAppflowIntegrationFormGroup() {
		return new FormGroup<AppflowIntegrationFormProperties>({
		});

	}


	/** The configurations that control how Customer Profiles retrieves data from the source, Amazon AppFlow. Customer Profiles uses this information to create an AppFlow flow on behalf of customers. */
	export interface FlowDefinition {
		Description?: string;

		/** Required */
		FlowName: string;

		/** Required */
		KmsArn: string;

		/** Required */
		SourceFlowConfig: SourceFlowConfig;

		/** Required */
		Tasks: Array<Task_>;

		/** Required */
		TriggerConfig: TriggerConfig;
	}

	/** The configurations that control how Customer Profiles retrieves data from the source, Amazon AppFlow. Customer Profiles uses this information to create an AppFlow flow on behalf of customers. */
	export interface FlowDefinitionFormProperties {
		Description: FormControl<string | null | undefined>,

		/** Required */
		FlowName: FormControl<string | null | undefined>,

		/** Required */
		KmsArn: FormControl<string | null | undefined>,
	}
	export function CreateFlowDefinitionFormGroup() {
		return new FormGroup<FlowDefinitionFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined),
			FlowName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			KmsArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Contains information about the configuration of the source connector used in the flow. */
	export interface SourceFlowConfig {
		ConnectorProfileName?: string;

		/** Required */
		ConnectorType: SourceConnectorType;
		IncrementalPullConfig?: IncrementalPullConfig;

		/** Required */
		SourceConnectorProperties: SourceConnectorProperties;
	}

	/** Contains information about the configuration of the source connector used in the flow. */
	export interface SourceFlowConfigFormProperties {
		ConnectorProfileName: FormControl<string | null | undefined>,

		/** Required */
		ConnectorType: FormControl<SourceConnectorType | null | undefined>,
	}
	export function CreateSourceFlowConfigFormGroup() {
		return new FormGroup<SourceFlowConfigFormProperties>({
			ConnectorProfileName: new FormControl<string | null | undefined>(undefined),
			ConnectorType: new FormControl<SourceConnectorType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum SourceConnectorType { Salesforce = 0, Marketo = 1, Zendesk = 2, Servicenow = 3, S3 = 4 }


	/** Specifies the configuration used when importing incremental records from the source. */
	export interface IncrementalPullConfig {
		DatetimeTypeFieldName?: string;
	}

	/** Specifies the configuration used when importing incremental records from the source. */
	export interface IncrementalPullConfigFormProperties {
		DatetimeTypeFieldName: FormControl<string | null | undefined>,
	}
	export function CreateIncrementalPullConfigFormGroup() {
		return new FormGroup<IncrementalPullConfigFormProperties>({
			DatetimeTypeFieldName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies the information that is required to query a particular Amazon AppFlow connector. Customer Profiles supports Salesforce, Zendesk, Marketo, ServiceNow and Amazon S3. */
	export interface SourceConnectorProperties {
		Marketo?: MarketoSourceProperties;
		S3?: S3SourceProperties;
		Salesforce?: SalesforceSourceProperties;
		ServiceNow?: ServiceNowSourceProperties;
		Zendesk?: ZendeskSourceProperties;
	}

	/** Specifies the information that is required to query a particular Amazon AppFlow connector. Customer Profiles supports Salesforce, Zendesk, Marketo, ServiceNow and Amazon S3. */
	export interface SourceConnectorPropertiesFormProperties {
	}
	export function CreateSourceConnectorPropertiesFormGroup() {
		return new FormGroup<SourceConnectorPropertiesFormProperties>({
		});

	}


	/** The properties that are applied when Marketo is being used as a source. */
	export interface MarketoSourceProperties {

		/** Required */
		Object: string;
	}

	/** The properties that are applied when Marketo is being used as a source. */
	export interface MarketoSourcePropertiesFormProperties {

		/** Required */
		Object: FormControl<string | null | undefined>,
	}
	export function CreateMarketoSourcePropertiesFormGroup() {
		return new FormGroup<MarketoSourcePropertiesFormProperties>({
			Object: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The properties that are applied when Amazon S3 is being used as the flow source. */
	export interface S3SourceProperties {

		/** Required */
		BucketName: string;
		BucketPrefix?: string;
	}

	/** The properties that are applied when Amazon S3 is being used as the flow source. */
	export interface S3SourcePropertiesFormProperties {

		/** Required */
		BucketName: FormControl<string | null | undefined>,
		BucketPrefix: FormControl<string | null | undefined>,
	}
	export function CreateS3SourcePropertiesFormGroup() {
		return new FormGroup<S3SourcePropertiesFormProperties>({
			BucketName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			BucketPrefix: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The properties that are applied when Salesforce is being used as a source. */
	export interface SalesforceSourceProperties {

		/** Required */
		Object: string;
		EnableDynamicFieldUpdate?: boolean | null;
		IncludeDeletedRecords?: boolean | null;
	}

	/** The properties that are applied when Salesforce is being used as a source. */
	export interface SalesforceSourcePropertiesFormProperties {

		/** Required */
		Object: FormControl<string | null | undefined>,
		EnableDynamicFieldUpdate: FormControl<boolean | null | undefined>,
		IncludeDeletedRecords: FormControl<boolean | null | undefined>,
	}
	export function CreateSalesforceSourcePropertiesFormGroup() {
		return new FormGroup<SalesforceSourcePropertiesFormProperties>({
			Object: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			EnableDynamicFieldUpdate: new FormControl<boolean | null | undefined>(undefined),
			IncludeDeletedRecords: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** The properties that are applied when ServiceNow is being used as a source. */
	export interface ServiceNowSourceProperties {

		/** Required */
		Object: string;
	}

	/** The properties that are applied when ServiceNow is being used as a source. */
	export interface ServiceNowSourcePropertiesFormProperties {

		/** Required */
		Object: FormControl<string | null | undefined>,
	}
	export function CreateServiceNowSourcePropertiesFormGroup() {
		return new FormGroup<ServiceNowSourcePropertiesFormProperties>({
			Object: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The properties that are applied when using Zendesk as a flow source. */
	export interface ZendeskSourceProperties {

		/** Required */
		Object: string;
	}

	/** The properties that are applied when using Zendesk as a flow source. */
	export interface ZendeskSourcePropertiesFormProperties {

		/** Required */
		Object: FormControl<string | null | undefined>,
	}
	export function CreateZendeskSourcePropertiesFormGroup() {
		return new FormGroup<ZendeskSourcePropertiesFormProperties>({
			Object: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A class for modeling different type of tasks. Task implementation varies based on the TaskType. */
	export interface Task_ {
		ConnectorOperator?: ConnectorOperator;
		DestinationField?: string;

		/** Required */
		SourceFields: Array<string>;
		TaskProperties?: TaskPropertiesMap;

		/** Required */
		TaskType: TaskType;
	}

	/** A class for modeling different type of tasks. Task implementation varies based on the TaskType. */
	export interface Task_FormProperties {
		DestinationField: FormControl<string | null | undefined>,

		/** Required */
		TaskType: FormControl<TaskType | null | undefined>,
	}
	export function CreateTask_FormGroup() {
		return new FormGroup<Task_FormProperties>({
			DestinationField: new FormControl<string | null | undefined>(undefined),
			TaskType: new FormControl<TaskType | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The operation to be performed on the provided source fields. */
	export interface ConnectorOperator {
		Marketo?: MarketoConnectorOperator;
		S3?: S3ConnectorOperator;
		Salesforce?: SalesforceConnectorOperator;
		ServiceNow?: ServiceNowConnectorOperator;
		Zendesk?: ZendeskConnectorOperator;
	}

	/** The operation to be performed on the provided source fields. */
	export interface ConnectorOperatorFormProperties {
		Marketo: FormControl<MarketoConnectorOperator | null | undefined>,
		S3: FormControl<S3ConnectorOperator | null | undefined>,
		Salesforce: FormControl<SalesforceConnectorOperator | null | undefined>,
		ServiceNow: FormControl<ServiceNowConnectorOperator | null | undefined>,
		Zendesk: FormControl<ZendeskConnectorOperator | null | undefined>,
	}
	export function CreateConnectorOperatorFormGroup() {
		return new FormGroup<ConnectorOperatorFormProperties>({
			Marketo: new FormControl<MarketoConnectorOperator | null | undefined>(undefined),
			S3: new FormControl<S3ConnectorOperator | null | undefined>(undefined),
			Salesforce: new FormControl<SalesforceConnectorOperator | null | undefined>(undefined),
			ServiceNow: new FormControl<ServiceNowConnectorOperator | null | undefined>(undefined),
			Zendesk: new FormControl<ZendeskConnectorOperator | null | undefined>(undefined),
		});

	}

	export enum MarketoConnectorOperator { PROJECTION = 0, LESS_THAN = 1, GREATER_THAN = 2, BETWEEN = 3, ADDITION = 4, MULTIPLICATION = 5, DIVISION = 6, SUBTRACTION = 7, MASK_ALL = 8, MASK_FIRST_N = 9, MASK_LAST_N = 10, VALIDATE_NON_NULL = 11, VALIDATE_NON_ZERO = 12, VALIDATE_NON_NEGATIVE = 13, VALIDATE_NUMERIC = 14, NO_OP = 15 }

	export enum S3ConnectorOperator { PROJECTION = 0, LESS_THAN = 1, GREATER_THAN = 2, BETWEEN = 3, LESS_THAN_OR_EQUAL_TO = 4, GREATER_THAN_OR_EQUAL_TO = 5, EQUAL_TO = 6, NOT_EQUAL_TO = 7, ADDITION = 8, MULTIPLICATION = 9, DIVISION = 10, SUBTRACTION = 11, MASK_ALL = 12, MASK_FIRST_N = 13, MASK_LAST_N = 14, VALIDATE_NON_NULL = 15, VALIDATE_NON_ZERO = 16, VALIDATE_NON_NEGATIVE = 17, VALIDATE_NUMERIC = 18, NO_OP = 19 }

	export enum SalesforceConnectorOperator { PROJECTION = 0, LESS_THAN = 1, CONTAINS = 2, GREATER_THAN = 3, BETWEEN = 4, LESS_THAN_OR_EQUAL_TO = 5, GREATER_THAN_OR_EQUAL_TO = 6, EQUAL_TO = 7, NOT_EQUAL_TO = 8, ADDITION = 9, MULTIPLICATION = 10, DIVISION = 11, SUBTRACTION = 12, MASK_ALL = 13, MASK_FIRST_N = 14, MASK_LAST_N = 15, VALIDATE_NON_NULL = 16, VALIDATE_NON_ZERO = 17, VALIDATE_NON_NEGATIVE = 18, VALIDATE_NUMERIC = 19, NO_OP = 20 }

	export enum ServiceNowConnectorOperator { PROJECTION = 0, CONTAINS = 1, LESS_THAN = 2, GREATER_THAN = 3, BETWEEN = 4, LESS_THAN_OR_EQUAL_TO = 5, GREATER_THAN_OR_EQUAL_TO = 6, EQUAL_TO = 7, NOT_EQUAL_TO = 8, ADDITION = 9, MULTIPLICATION = 10, DIVISION = 11, SUBTRACTION = 12, MASK_ALL = 13, MASK_FIRST_N = 14, MASK_LAST_N = 15, VALIDATE_NON_NULL = 16, VALIDATE_NON_ZERO = 17, VALIDATE_NON_NEGATIVE = 18, VALIDATE_NUMERIC = 19, NO_OP = 20 }

	export enum ZendeskConnectorOperator { PROJECTION = 0, GREATER_THAN = 1, ADDITION = 2, MULTIPLICATION = 3, DIVISION = 4, SUBTRACTION = 5, MASK_ALL = 6, MASK_FIRST_N = 7, MASK_LAST_N = 8, VALIDATE_NON_NULL = 9, VALIDATE_NON_ZERO = 10, VALIDATE_NON_NEGATIVE = 11, VALIDATE_NUMERIC = 12, NO_OP = 13 }

	export interface TaskPropertiesMap {
	}
	export interface TaskPropertiesMapFormProperties {
	}
	export function CreateTaskPropertiesMapFormGroup() {
		return new FormGroup<TaskPropertiesMapFormProperties>({
		});

	}

	export enum TaskType { Arithmetic = 0, Filter = 1, Map = 2, Mask = 3, Merge = 4, Truncate = 5, Validate = 6 }


	/** The trigger settings that determine how and when Amazon AppFlow runs the specified flow. */
	export interface TriggerConfig {

		/** Required */
		TriggerType: TriggerType;
		TriggerProperties?: TriggerProperties;
	}

	/** The trigger settings that determine how and when Amazon AppFlow runs the specified flow. */
	export interface TriggerConfigFormProperties {

		/** Required */
		TriggerType: FormControl<TriggerType | null | undefined>,
	}
	export function CreateTriggerConfigFormGroup() {
		return new FormGroup<TriggerConfigFormProperties>({
			TriggerType: new FormControl<TriggerType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum TriggerType { Scheduled = 0, Event = 1, OnDemand = 2 }


	/** Specifies the configuration details that control the trigger for a flow. Currently, these settings only apply to the Scheduled trigger type. */
	export interface TriggerProperties {
		Scheduled?: ScheduledTriggerProperties;
	}

	/** Specifies the configuration details that control the trigger for a flow. Currently, these settings only apply to the Scheduled trigger type. */
	export interface TriggerPropertiesFormProperties {
	}
	export function CreateTriggerPropertiesFormGroup() {
		return new FormGroup<TriggerPropertiesFormProperties>({
		});

	}


	/** Specifies the configuration details of a scheduled-trigger flow that you define. Currently, these settings only apply to the scheduled-trigger type. */
	export interface ScheduledTriggerProperties {

		/** Required */
		ScheduleExpression: string;
		DataPullMode?: DataPullMode;
		ScheduleStartTime?: Date;
		ScheduleEndTime?: Date;
		Timezone?: string;
		ScheduleOffset?: number | null;
		FirstExecutionFrom?: Date;
	}

	/** Specifies the configuration details of a scheduled-trigger flow that you define. Currently, these settings only apply to the scheduled-trigger type. */
	export interface ScheduledTriggerPropertiesFormProperties {

		/** Required */
		ScheduleExpression: FormControl<string | null | undefined>,
		DataPullMode: FormControl<DataPullMode | null | undefined>,
		ScheduleStartTime: FormControl<Date | null | undefined>,
		ScheduleEndTime: FormControl<Date | null | undefined>,
		Timezone: FormControl<string | null | undefined>,
		ScheduleOffset: FormControl<number | null | undefined>,
		FirstExecutionFrom: FormControl<Date | null | undefined>,
	}
	export function CreateScheduledTriggerPropertiesFormGroup() {
		return new FormGroup<ScheduledTriggerPropertiesFormProperties>({
			ScheduleExpression: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DataPullMode: new FormControl<DataPullMode | null | undefined>(undefined),
			ScheduleStartTime: new FormControl<Date | null | undefined>(undefined),
			ScheduleEndTime: new FormControl<Date | null | undefined>(undefined),
			Timezone: new FormControl<string | null | undefined>(undefined),
			ScheduleOffset: new FormControl<number | null | undefined>(undefined),
			FirstExecutionFrom: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum DataPullMode { Incremental = 0, Complete = 1 }


	/** Batch defines the boundaries for ingestion for each step in <code>APPFLOW_INTEGRATION</code> workflow. <code>APPFLOW_INTEGRATION</code> workflow splits ingestion based on these boundaries. */
	export interface Batch {

		/** Required */
		StartTime: Date;

		/** Required */
		EndTime: Date;
	}

	/** Batch defines the boundaries for ingestion for each step in <code>APPFLOW_INTEGRATION</code> workflow. <code>APPFLOW_INTEGRATION</code> workflow splits ingestion based on these boundaries. */
	export interface BatchFormProperties {

		/** Required */
		StartTime: FormControl<Date | null | undefined>,

		/** Required */
		EndTime: FormControl<Date | null | undefined>,
	}
	export function CreateBatchFormGroup() {
		return new FormGroup<BatchFormProperties>({
			StartTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			EndTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateProfileResponse {

		/** Required */
		ProfileId: string;
	}
	export interface CreateProfileResponseFormProperties {

		/** Required */
		ProfileId: FormControl<string | null | undefined>,
	}
	export function CreateCreateProfileResponseFormGroup() {
		return new FormGroup<CreateProfileResponseFormProperties>({
			ProfileId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteCalculatedAttributeDefinitionResponse {
	}
	export interface DeleteCalculatedAttributeDefinitionResponseFormProperties {
	}
	export function CreateDeleteCalculatedAttributeDefinitionResponseFormGroup() {
		return new FormGroup<DeleteCalculatedAttributeDefinitionResponseFormProperties>({
		});

	}

	export interface DeleteDomainResponse {

		/** Required */
		Message: string;
	}
	export interface DeleteDomainResponseFormProperties {

		/** Required */
		Message: FormControl<string | null | undefined>,
	}
	export function CreateDeleteDomainResponseFormGroup() {
		return new FormGroup<DeleteDomainResponseFormProperties>({
			Message: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteEventStreamResponse {
	}
	export interface DeleteEventStreamResponseFormProperties {
	}
	export function CreateDeleteEventStreamResponseFormGroup() {
		return new FormGroup<DeleteEventStreamResponseFormProperties>({
		});

	}

	export interface DeleteIntegrationResponse {

		/** Required */
		Message: string;
	}
	export interface DeleteIntegrationResponseFormProperties {

		/** Required */
		Message: FormControl<string | null | undefined>,
	}
	export function CreateDeleteIntegrationResponseFormGroup() {
		return new FormGroup<DeleteIntegrationResponseFormProperties>({
			Message: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteProfileResponse {
		Message?: string;
	}
	export interface DeleteProfileResponseFormProperties {
		Message: FormControl<string | null | undefined>,
	}
	export function CreateDeleteProfileResponseFormGroup() {
		return new FormGroup<DeleteProfileResponseFormProperties>({
			Message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteProfileKeyResponse {
		Message?: string;
	}
	export interface DeleteProfileKeyResponseFormProperties {
		Message: FormControl<string | null | undefined>,
	}
	export function CreateDeleteProfileKeyResponseFormGroup() {
		return new FormGroup<DeleteProfileKeyResponseFormProperties>({
			Message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteProfileObjectResponse {
		Message?: string;
	}
	export interface DeleteProfileObjectResponseFormProperties {
		Message: FormControl<string | null | undefined>,
	}
	export function CreateDeleteProfileObjectResponseFormGroup() {
		return new FormGroup<DeleteProfileObjectResponseFormProperties>({
			Message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteProfileObjectTypeResponse {

		/** Required */
		Message: string;
	}
	export interface DeleteProfileObjectTypeResponseFormProperties {

		/** Required */
		Message: FormControl<string | null | undefined>,
	}
	export function CreateDeleteProfileObjectTypeResponseFormGroup() {
		return new FormGroup<DeleteProfileObjectTypeResponseFormProperties>({
			Message: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteWorkflowResponse {
	}
	export interface DeleteWorkflowResponseFormProperties {
	}
	export function CreateDeleteWorkflowResponseFormGroup() {
		return new FormGroup<DeleteWorkflowResponseFormProperties>({
		});

	}

	export interface GetAutoMergingPreviewResponse {

		/** Required */
		DomainName: string;
		NumberOfMatchesInSample?: number | null;
		NumberOfProfilesInSample?: number | null;
		NumberOfProfilesWillBeMerged?: number | null;
	}
	export interface GetAutoMergingPreviewResponseFormProperties {

		/** Required */
		DomainName: FormControl<string | null | undefined>,
		NumberOfMatchesInSample: FormControl<number | null | undefined>,
		NumberOfProfilesInSample: FormControl<number | null | undefined>,
		NumberOfProfilesWillBeMerged: FormControl<number | null | undefined>,
	}
	export function CreateGetAutoMergingPreviewResponseFormGroup() {
		return new FormGroup<GetAutoMergingPreviewResponseFormProperties>({
			DomainName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NumberOfMatchesInSample: new FormControl<number | null | undefined>(undefined),
			NumberOfProfilesInSample: new FormControl<number | null | undefined>(undefined),
			NumberOfProfilesWillBeMerged: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetCalculatedAttributeDefinitionResponse {
		CalculatedAttributeName?: string;
		DisplayName?: string;
		Description?: string;
		CreatedAt?: Date;
		LastUpdatedAt?: Date;
		Statistic?: Statistic;
		Conditions?: Conditions;
		AttributeDetails?: AttributeDetails;
		Tags?: TagMap;
	}
	export interface GetCalculatedAttributeDefinitionResponseFormProperties {
		CalculatedAttributeName: FormControl<string | null | undefined>,
		DisplayName: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		CreatedAt: FormControl<Date | null | undefined>,
		LastUpdatedAt: FormControl<Date | null | undefined>,
		Statistic: FormControl<Statistic | null | undefined>,
	}
	export function CreateGetCalculatedAttributeDefinitionResponseFormGroup() {
		return new FormGroup<GetCalculatedAttributeDefinitionResponseFormProperties>({
			CalculatedAttributeName: new FormControl<string | null | undefined>(undefined),
			DisplayName: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			CreatedAt: new FormControl<Date | null | undefined>(undefined),
			LastUpdatedAt: new FormControl<Date | null | undefined>(undefined),
			Statistic: new FormControl<Statistic | null | undefined>(undefined),
		});

	}

	export interface GetCalculatedAttributeForProfileResponse {
		CalculatedAttributeName?: string;
		DisplayName?: string;
		IsDataPartial?: string;
		Value?: string;
	}
	export interface GetCalculatedAttributeForProfileResponseFormProperties {
		CalculatedAttributeName: FormControl<string | null | undefined>,
		DisplayName: FormControl<string | null | undefined>,
		IsDataPartial: FormControl<string | null | undefined>,
		Value: FormControl<string | null | undefined>,
	}
	export function CreateGetCalculatedAttributeForProfileResponseFormGroup() {
		return new FormGroup<GetCalculatedAttributeForProfileResponseFormProperties>({
			CalculatedAttributeName: new FormControl<string | null | undefined>(undefined),
			DisplayName: new FormControl<string | null | undefined>(undefined),
			IsDataPartial: new FormControl<string | null | undefined>(undefined),
			Value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetDomainResponse {

		/** Required */
		DomainName: string;
		DefaultExpirationDays?: number | null;
		DefaultEncryptionKey?: string;
		DeadLetterQueueUrl?: string;
		Stats?: DomainStats;
		Matching?: MatchingResponse;
		RuleBasedMatching?: RuleBasedMatchingResponse;

		/** Required */
		CreatedAt: Date;

		/** Required */
		LastUpdatedAt: Date;
		Tags?: TagMap;
	}
	export interface GetDomainResponseFormProperties {

		/** Required */
		DomainName: FormControl<string | null | undefined>,
		DefaultExpirationDays: FormControl<number | null | undefined>,
		DefaultEncryptionKey: FormControl<string | null | undefined>,
		DeadLetterQueueUrl: FormControl<string | null | undefined>,

		/** Required */
		CreatedAt: FormControl<Date | null | undefined>,

		/** Required */
		LastUpdatedAt: FormControl<Date | null | undefined>,
	}
	export function CreateGetDomainResponseFormGroup() {
		return new FormGroup<GetDomainResponseFormProperties>({
			DomainName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DefaultExpirationDays: new FormControl<number | null | undefined>(undefined),
			DefaultEncryptionKey: new FormControl<string | null | undefined>(undefined),
			DeadLetterQueueUrl: new FormControl<string | null | undefined>(undefined),
			CreatedAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			LastUpdatedAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Usage-specific statistics about the domain. */
	export interface DomainStats {
		ProfileCount?: number | null;
		MeteringProfileCount?: number | null;
		ObjectCount?: number | null;
		TotalSize?: number | null;
	}

	/** Usage-specific statistics about the domain. */
	export interface DomainStatsFormProperties {
		ProfileCount: FormControl<number | null | undefined>,
		MeteringProfileCount: FormControl<number | null | undefined>,
		ObjectCount: FormControl<number | null | undefined>,
		TotalSize: FormControl<number | null | undefined>,
	}
	export function CreateDomainStatsFormGroup() {
		return new FormGroup<DomainStatsFormProperties>({
			ProfileCount: new FormControl<number | null | undefined>(undefined),
			MeteringProfileCount: new FormControl<number | null | undefined>(undefined),
			ObjectCount: new FormControl<number | null | undefined>(undefined),
			TotalSize: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetEventStreamResponse {

		/** Required */
		DomainName: string;

		/** Required */
		EventStreamArn: string;

		/** Required */
		CreatedAt: Date;

		/** Required */
		State: EventStreamState;
		StoppedSince?: Date;

		/** Required */
		DestinationDetails: EventStreamDestinationDetails;
		Tags?: TagMap;
	}
	export interface GetEventStreamResponseFormProperties {

		/** Required */
		DomainName: FormControl<string | null | undefined>,

		/** Required */
		EventStreamArn: FormControl<string | null | undefined>,

		/** Required */
		CreatedAt: FormControl<Date | null | undefined>,

		/** Required */
		State: FormControl<EventStreamState | null | undefined>,
		StoppedSince: FormControl<Date | null | undefined>,
	}
	export function CreateGetEventStreamResponseFormGroup() {
		return new FormGroup<GetEventStreamResponseFormProperties>({
			DomainName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			EventStreamArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			CreatedAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			State: new FormControl<EventStreamState | null | undefined>(undefined, [Validators.required]),
			StoppedSince: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum EventStreamState { RUNNING = 0, STOPPED = 1 }


	/** Details of the destination being used for the EventStream. */
	export interface EventStreamDestinationDetails {

		/** Required */
		Uri: string;

		/** Required */
		Status: EventStreamDestinationStatus;
		UnhealthySince?: Date;
		Message?: string;
	}

	/** Details of the destination being used for the EventStream. */
	export interface EventStreamDestinationDetailsFormProperties {

		/** Required */
		Uri: FormControl<string | null | undefined>,

		/** Required */
		Status: FormControl<EventStreamDestinationStatus | null | undefined>,
		UnhealthySince: FormControl<Date | null | undefined>,
		Message: FormControl<string | null | undefined>,
	}
	export function CreateEventStreamDestinationDetailsFormGroup() {
		return new FormGroup<EventStreamDestinationDetailsFormProperties>({
			Uri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Status: new FormControl<EventStreamDestinationStatus | null | undefined>(undefined, [Validators.required]),
			UnhealthySince: new FormControl<Date | null | undefined>(undefined),
			Message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum EventStreamDestinationStatus { HEALTHY = 0, UNHEALTHY = 1 }

	export interface GetIdentityResolutionJobResponse {
		DomainName?: string;
		JobId?: string;
		Status?: IdentityResolutionJobStatus;
		Message?: string;
		JobStartTime?: Date;
		JobEndTime?: Date;
		LastUpdatedAt?: Date;
		JobExpirationTime?: Date;
		AutoMerging?: AutoMerging;
		ExportingLocation?: ExportingLocation;
		JobStats?: JobStats;
	}
	export interface GetIdentityResolutionJobResponseFormProperties {
		DomainName: FormControl<string | null | undefined>,
		JobId: FormControl<string | null | undefined>,
		Status: FormControl<IdentityResolutionJobStatus | null | undefined>,
		Message: FormControl<string | null | undefined>,
		JobStartTime: FormControl<Date | null | undefined>,
		JobEndTime: FormControl<Date | null | undefined>,
		LastUpdatedAt: FormControl<Date | null | undefined>,
		JobExpirationTime: FormControl<Date | null | undefined>,
	}
	export function CreateGetIdentityResolutionJobResponseFormGroup() {
		return new FormGroup<GetIdentityResolutionJobResponseFormProperties>({
			DomainName: new FormControl<string | null | undefined>(undefined),
			JobId: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<IdentityResolutionJobStatus | null | undefined>(undefined),
			Message: new FormControl<string | null | undefined>(undefined),
			JobStartTime: new FormControl<Date | null | undefined>(undefined),
			JobEndTime: new FormControl<Date | null | undefined>(undefined),
			LastUpdatedAt: new FormControl<Date | null | undefined>(undefined),
			JobExpirationTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum IdentityResolutionJobStatus { PENDING = 0, PREPROCESSING = 1, FIND_MATCHING = 2, MERGING = 3, COMPLETED = 4, PARTIAL_SUCCESS = 5, FAILED = 6 }


	/** The S3 location where Identity Resolution Jobs write result files. */
	export interface ExportingLocation {
		S3Exporting?: S3ExportingLocation;
	}

	/** The S3 location where Identity Resolution Jobs write result files. */
	export interface ExportingLocationFormProperties {
	}
	export function CreateExportingLocationFormGroup() {
		return new FormGroup<ExportingLocationFormProperties>({
		});

	}


	/** The S3 location where Identity Resolution Jobs write result files. */
	export interface S3ExportingLocation {
		S3BucketName?: string;
		S3KeyName?: string;
	}

	/** The S3 location where Identity Resolution Jobs write result files. */
	export interface S3ExportingLocationFormProperties {
		S3BucketName: FormControl<string | null | undefined>,
		S3KeyName: FormControl<string | null | undefined>,
	}
	export function CreateS3ExportingLocationFormGroup() {
		return new FormGroup<S3ExportingLocationFormProperties>({
			S3BucketName: new FormControl<string | null | undefined>(undefined),
			S3KeyName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Statistics about the Identity Resolution Job. */
	export interface JobStats {
		NumberOfProfilesReviewed?: number | null;
		NumberOfMatchesFound?: number | null;
		NumberOfMergesDone?: number | null;
	}

	/** Statistics about the Identity Resolution Job. */
	export interface JobStatsFormProperties {
		NumberOfProfilesReviewed: FormControl<number | null | undefined>,
		NumberOfMatchesFound: FormControl<number | null | undefined>,
		NumberOfMergesDone: FormControl<number | null | undefined>,
	}
	export function CreateJobStatsFormGroup() {
		return new FormGroup<JobStatsFormProperties>({
			NumberOfProfilesReviewed: new FormControl<number | null | undefined>(undefined),
			NumberOfMatchesFound: new FormControl<number | null | undefined>(undefined),
			NumberOfMergesDone: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetIntegrationResponse {

		/** Required */
		DomainName: string;

		/** Required */
		Uri: string;
		ObjectTypeName?: string;

		/** Required */
		CreatedAt: Date;

		/** Required */
		LastUpdatedAt: Date;
		Tags?: TagMap;
		ObjectTypeNames?: ObjectTypeNames;
		WorkflowId?: string;
		IsUnstructured?: boolean | null;
	}
	export interface GetIntegrationResponseFormProperties {

		/** Required */
		DomainName: FormControl<string | null | undefined>,

		/** Required */
		Uri: FormControl<string | null | undefined>,
		ObjectTypeName: FormControl<string | null | undefined>,

		/** Required */
		CreatedAt: FormControl<Date | null | undefined>,

		/** Required */
		LastUpdatedAt: FormControl<Date | null | undefined>,
		WorkflowId: FormControl<string | null | undefined>,
		IsUnstructured: FormControl<boolean | null | undefined>,
	}
	export function CreateGetIntegrationResponseFormGroup() {
		return new FormGroup<GetIntegrationResponseFormProperties>({
			DomainName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Uri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ObjectTypeName: new FormControl<string | null | undefined>(undefined),
			CreatedAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			LastUpdatedAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			WorkflowId: new FormControl<string | null | undefined>(undefined),
			IsUnstructured: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface ObjectTypeNames {
	}
	export interface ObjectTypeNamesFormProperties {
	}
	export function CreateObjectTypeNamesFormGroup() {
		return new FormGroup<ObjectTypeNamesFormProperties>({
		});

	}

	export interface GetMatchesResponse {
		NextToken?: string;
		MatchGenerationDate?: Date;
		PotentialMatches?: number | null;
		Matches?: Array<MatchItem>;
	}
	export interface GetMatchesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
		MatchGenerationDate: FormControl<Date | null | undefined>,
		PotentialMatches: FormControl<number | null | undefined>,
	}
	export function CreateGetMatchesResponseFormGroup() {
		return new FormGroup<GetMatchesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MatchGenerationDate: new FormControl<Date | null | undefined>(undefined),
			PotentialMatches: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The Match group object. */
	export interface MatchItem {
		MatchId?: string;
		ProfileIds?: Array<string>;
		ConfidenceScore?: number | null;
	}

	/** The Match group object. */
	export interface MatchItemFormProperties {
		MatchId: FormControl<string | null | undefined>,
		ConfidenceScore: FormControl<number | null | undefined>,
	}
	export function CreateMatchItemFormGroup() {
		return new FormGroup<MatchItemFormProperties>({
			MatchId: new FormControl<string | null | undefined>(undefined),
			ConfidenceScore: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetProfileObjectTypeResponse {

		/** Required */
		ObjectTypeName: string;

		/** Required */
		Description: string;
		TemplateId?: string;
		ExpirationDays?: number | null;
		EncryptionKey?: string;
		AllowProfileCreation?: boolean | null;
		SourceLastUpdatedTimestampFormat?: string;
		Fields?: FieldMap;
		Keys?: KeyMap;
		CreatedAt?: Date;
		LastUpdatedAt?: Date;
		Tags?: TagMap;
	}
	export interface GetProfileObjectTypeResponseFormProperties {

		/** Required */
		ObjectTypeName: FormControl<string | null | undefined>,

		/** Required */
		Description: FormControl<string | null | undefined>,
		TemplateId: FormControl<string | null | undefined>,
		ExpirationDays: FormControl<number | null | undefined>,
		EncryptionKey: FormControl<string | null | undefined>,
		AllowProfileCreation: FormControl<boolean | null | undefined>,
		SourceLastUpdatedTimestampFormat: FormControl<string | null | undefined>,
		CreatedAt: FormControl<Date | null | undefined>,
		LastUpdatedAt: FormControl<Date | null | undefined>,
	}
	export function CreateGetProfileObjectTypeResponseFormGroup() {
		return new FormGroup<GetProfileObjectTypeResponseFormProperties>({
			ObjectTypeName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TemplateId: new FormControl<string | null | undefined>(undefined),
			ExpirationDays: new FormControl<number | null | undefined>(undefined),
			EncryptionKey: new FormControl<string | null | undefined>(undefined),
			AllowProfileCreation: new FormControl<boolean | null | undefined>(undefined),
			SourceLastUpdatedTimestampFormat: new FormControl<string | null | undefined>(undefined),
			CreatedAt: new FormControl<Date | null | undefined>(undefined),
			LastUpdatedAt: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface FieldMap {
	}
	export interface FieldMapFormProperties {
	}
	export function CreateFieldMapFormGroup() {
		return new FormGroup<FieldMapFormProperties>({
		});

	}

	export interface KeyMap {
	}
	export interface KeyMapFormProperties {
	}
	export function CreateKeyMapFormGroup() {
		return new FormGroup<KeyMapFormProperties>({
		});

	}

	export interface GetProfileObjectTypeTemplateResponse {
		TemplateId?: string;
		SourceName?: string;
		SourceObject?: string;
		AllowProfileCreation?: boolean | null;
		SourceLastUpdatedTimestampFormat?: string;
		Fields?: FieldMap;
		Keys?: KeyMap;
	}
	export interface GetProfileObjectTypeTemplateResponseFormProperties {
		TemplateId: FormControl<string | null | undefined>,
		SourceName: FormControl<string | null | undefined>,
		SourceObject: FormControl<string | null | undefined>,
		AllowProfileCreation: FormControl<boolean | null | undefined>,
		SourceLastUpdatedTimestampFormat: FormControl<string | null | undefined>,
	}
	export function CreateGetProfileObjectTypeTemplateResponseFormGroup() {
		return new FormGroup<GetProfileObjectTypeTemplateResponseFormProperties>({
			TemplateId: new FormControl<string | null | undefined>(undefined),
			SourceName: new FormControl<string | null | undefined>(undefined),
			SourceObject: new FormControl<string | null | undefined>(undefined),
			AllowProfileCreation: new FormControl<boolean | null | undefined>(undefined),
			SourceLastUpdatedTimestampFormat: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetSimilarProfilesResponse {
		ProfileIds?: Array<string>;
		MatchId?: string;
		MatchType?: MatchType;
		RuleLevel?: number | null;
		ConfidenceScore?: number | null;
		NextToken?: string;
	}
	export interface GetSimilarProfilesResponseFormProperties {
		MatchId: FormControl<string | null | undefined>,
		MatchType: FormControl<MatchType | null | undefined>,
		RuleLevel: FormControl<number | null | undefined>,
		ConfidenceScore: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetSimilarProfilesResponseFormGroup() {
		return new FormGroup<GetSimilarProfilesResponseFormProperties>({
			MatchId: new FormControl<string | null | undefined>(undefined),
			MatchType: new FormControl<MatchType | null | undefined>(undefined),
			RuleLevel: new FormControl<number | null | undefined>(undefined),
			ConfidenceScore: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum MatchType { RULE_BASED_MATCHING = 0, ML_BASED_MATCHING = 1 }

	export interface GetWorkflowResponse {
		WorkflowId?: string;
		WorkflowType?: WorkflowType;
		Status?: Status;
		ErrorDescription?: string;
		StartDate?: Date;
		LastUpdatedAt?: Date;
		Attributes?: WorkflowAttributes;
		Metrics?: WorkflowMetrics;
	}
	export interface GetWorkflowResponseFormProperties {
		WorkflowId: FormControl<string | null | undefined>,
		WorkflowType: FormControl<WorkflowType | null | undefined>,
		Status: FormControl<Status | null | undefined>,
		ErrorDescription: FormControl<string | null | undefined>,
		StartDate: FormControl<Date | null | undefined>,
		LastUpdatedAt: FormControl<Date | null | undefined>,
	}
	export function CreateGetWorkflowResponseFormGroup() {
		return new FormGroup<GetWorkflowResponseFormProperties>({
			WorkflowId: new FormControl<string | null | undefined>(undefined),
			WorkflowType: new FormControl<WorkflowType | null | undefined>(undefined),
			Status: new FormControl<Status | null | undefined>(undefined),
			ErrorDescription: new FormControl<string | null | undefined>(undefined),
			StartDate: new FormControl<Date | null | undefined>(undefined),
			LastUpdatedAt: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum WorkflowType { APPFLOW_INTEGRATION = 0 }

	export enum Status { NOT_STARTED = 0, IN_PROGRESS = 1, COMPLETE = 2, FAILED = 3, SPLIT = 4, RETRY = 5, CANCELLED = 6 }


	/** Structure to hold workflow attributes. */
	export interface WorkflowAttributes {
		AppflowIntegration?: AppflowIntegrationWorkflowAttributes;
	}

	/** Structure to hold workflow attributes. */
	export interface WorkflowAttributesFormProperties {
	}
	export function CreateWorkflowAttributesFormGroup() {
		return new FormGroup<WorkflowAttributesFormProperties>({
		});

	}


	/** Structure holding all <code>APPFLOW_INTEGRATION</code> specific workflow attributes. */
	export interface AppflowIntegrationWorkflowAttributes {

		/** Required */
		SourceConnectorType: SourceConnectorType;

		/** Required */
		ConnectorProfileName: string;
		RoleArn?: string;
	}

	/** Structure holding all <code>APPFLOW_INTEGRATION</code> specific workflow attributes. */
	export interface AppflowIntegrationWorkflowAttributesFormProperties {

		/** Required */
		SourceConnectorType: FormControl<SourceConnectorType | null | undefined>,

		/** Required */
		ConnectorProfileName: FormControl<string | null | undefined>,
		RoleArn: FormControl<string | null | undefined>,
	}
	export function CreateAppflowIntegrationWorkflowAttributesFormGroup() {
		return new FormGroup<AppflowIntegrationWorkflowAttributesFormProperties>({
			SourceConnectorType: new FormControl<SourceConnectorType | null | undefined>(undefined, [Validators.required]),
			ConnectorProfileName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RoleArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Generic object containing workflow execution metrics. */
	export interface WorkflowMetrics {
		AppflowIntegration?: AppflowIntegrationWorkflowMetrics;
	}

	/** Generic object containing workflow execution metrics. */
	export interface WorkflowMetricsFormProperties {
	}
	export function CreateWorkflowMetricsFormGroup() {
		return new FormGroup<WorkflowMetricsFormProperties>({
		});

	}


	/** Workflow specific execution metrics for <code>APPFLOW_INTEGRATION</code> workflow. */
	export interface AppflowIntegrationWorkflowMetrics {

		/** Required */
		RecordsProcessed: number;

		/** Required */
		StepsCompleted: number;

		/** Required */
		TotalSteps: number;
	}

	/** Workflow specific execution metrics for <code>APPFLOW_INTEGRATION</code> workflow. */
	export interface AppflowIntegrationWorkflowMetricsFormProperties {

		/** Required */
		RecordsProcessed: FormControl<number | null | undefined>,

		/** Required */
		StepsCompleted: FormControl<number | null | undefined>,

		/** Required */
		TotalSteps: FormControl<number | null | undefined>,
	}
	export function CreateAppflowIntegrationWorkflowMetricsFormGroup() {
		return new FormGroup<AppflowIntegrationWorkflowMetricsFormProperties>({
			RecordsProcessed: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			StepsCompleted: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			TotalSteps: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetWorkflowStepsResponse {
		WorkflowId?: string;
		WorkflowType?: WorkflowType;
		Items?: Array<WorkflowStepItem>;
		NextToken?: string;
	}
	export interface GetWorkflowStepsResponseFormProperties {
		WorkflowId: FormControl<string | null | undefined>,
		WorkflowType: FormControl<WorkflowType | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetWorkflowStepsResponseFormGroup() {
		return new FormGroup<GetWorkflowStepsResponseFormProperties>({
			WorkflowId: new FormControl<string | null | undefined>(undefined),
			WorkflowType: new FormControl<WorkflowType | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** List containing steps in workflow. */
	export interface WorkflowStepItem {
		AppflowIntegration?: AppflowIntegrationWorkflowStep;
	}

	/** List containing steps in workflow. */
	export interface WorkflowStepItemFormProperties {
	}
	export function CreateWorkflowStepItemFormGroup() {
		return new FormGroup<WorkflowStepItemFormProperties>({
		});

	}


	/** Workflow step details for <code>APPFLOW_INTEGRATION</code> workflow. */
	export interface AppflowIntegrationWorkflowStep {

		/** Required */
		FlowName: string;

		/** Required */
		Status: Status;

		/** Required */
		ExecutionMessage: string;

		/** Required */
		RecordsProcessed: number;

		/** Required */
		BatchRecordsStartTime: string;

		/** Required */
		BatchRecordsEndTime: string;

		/** Required */
		CreatedAt: Date;

		/** Required */
		LastUpdatedAt: Date;
	}

	/** Workflow step details for <code>APPFLOW_INTEGRATION</code> workflow. */
	export interface AppflowIntegrationWorkflowStepFormProperties {

		/** Required */
		FlowName: FormControl<string | null | undefined>,

		/** Required */
		Status: FormControl<Status | null | undefined>,

		/** Required */
		ExecutionMessage: FormControl<string | null | undefined>,

		/** Required */
		RecordsProcessed: FormControl<number | null | undefined>,

		/** Required */
		BatchRecordsStartTime: FormControl<string | null | undefined>,

		/** Required */
		BatchRecordsEndTime: FormControl<string | null | undefined>,

		/** Required */
		CreatedAt: FormControl<Date | null | undefined>,

		/** Required */
		LastUpdatedAt: FormControl<Date | null | undefined>,
	}
	export function CreateAppflowIntegrationWorkflowStepFormGroup() {
		return new FormGroup<AppflowIntegrationWorkflowStepFormProperties>({
			FlowName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Status: new FormControl<Status | null | undefined>(undefined, [Validators.required]),
			ExecutionMessage: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RecordsProcessed: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			BatchRecordsStartTime: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			BatchRecordsEndTime: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			CreatedAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			LastUpdatedAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListAccountIntegrationsResponse {
		Items?: Array<ListIntegrationItem>;
		NextToken?: string;
	}
	export interface ListAccountIntegrationsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListAccountIntegrationsResponseFormGroup() {
		return new FormGroup<ListAccountIntegrationsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An integration in list of integrations. */
	export interface ListIntegrationItem {

		/** Required */
		DomainName: string;

		/** Required */
		Uri: string;
		ObjectTypeName?: string;

		/** Required */
		CreatedAt: Date;

		/** Required */
		LastUpdatedAt: Date;
		Tags?: TagMap;
		ObjectTypeNames?: ObjectTypeNames;
		WorkflowId?: string;
		IsUnstructured?: boolean | null;
	}

	/** An integration in list of integrations. */
	export interface ListIntegrationItemFormProperties {

		/** Required */
		DomainName: FormControl<string | null | undefined>,

		/** Required */
		Uri: FormControl<string | null | undefined>,
		ObjectTypeName: FormControl<string | null | undefined>,

		/** Required */
		CreatedAt: FormControl<Date | null | undefined>,

		/** Required */
		LastUpdatedAt: FormControl<Date | null | undefined>,
		WorkflowId: FormControl<string | null | undefined>,
		IsUnstructured: FormControl<boolean | null | undefined>,
	}
	export function CreateListIntegrationItemFormGroup() {
		return new FormGroup<ListIntegrationItemFormProperties>({
			DomainName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Uri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ObjectTypeName: new FormControl<string | null | undefined>(undefined),
			CreatedAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			LastUpdatedAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			WorkflowId: new FormControl<string | null | undefined>(undefined),
			IsUnstructured: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface ListCalculatedAttributeDefinitionsResponse {
		Items?: Array<ListCalculatedAttributeDefinitionItem>;
		NextToken?: string;
	}
	export interface ListCalculatedAttributeDefinitionsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListCalculatedAttributeDefinitionsResponseFormGroup() {
		return new FormGroup<ListCalculatedAttributeDefinitionsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The details of a single calculated attribute definition. */
	export interface ListCalculatedAttributeDefinitionItem {
		CalculatedAttributeName?: string;
		DisplayName?: string;
		Description?: string;
		CreatedAt?: Date;
		LastUpdatedAt?: Date;
		Tags?: TagMap;
	}

	/** The details of a single calculated attribute definition. */
	export interface ListCalculatedAttributeDefinitionItemFormProperties {
		CalculatedAttributeName: FormControl<string | null | undefined>,
		DisplayName: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		CreatedAt: FormControl<Date | null | undefined>,
		LastUpdatedAt: FormControl<Date | null | undefined>,
	}
	export function CreateListCalculatedAttributeDefinitionItemFormGroup() {
		return new FormGroup<ListCalculatedAttributeDefinitionItemFormProperties>({
			CalculatedAttributeName: new FormControl<string | null | undefined>(undefined),
			DisplayName: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			CreatedAt: new FormControl<Date | null | undefined>(undefined),
			LastUpdatedAt: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListCalculatedAttributesForProfileResponse {
		Items?: Array<ListCalculatedAttributeForProfileItem>;
		NextToken?: string;
	}
	export interface ListCalculatedAttributesForProfileResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListCalculatedAttributesForProfileResponseFormGroup() {
		return new FormGroup<ListCalculatedAttributesForProfileResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The details of a single calculated attribute for a profile. */
	export interface ListCalculatedAttributeForProfileItem {
		CalculatedAttributeName?: string;
		DisplayName?: string;
		IsDataPartial?: string;
		Value?: string;
	}

	/** The details of a single calculated attribute for a profile. */
	export interface ListCalculatedAttributeForProfileItemFormProperties {
		CalculatedAttributeName: FormControl<string | null | undefined>,
		DisplayName: FormControl<string | null | undefined>,
		IsDataPartial: FormControl<string | null | undefined>,
		Value: FormControl<string | null | undefined>,
	}
	export function CreateListCalculatedAttributeForProfileItemFormGroup() {
		return new FormGroup<ListCalculatedAttributeForProfileItemFormProperties>({
			CalculatedAttributeName: new FormControl<string | null | undefined>(undefined),
			DisplayName: new FormControl<string | null | undefined>(undefined),
			IsDataPartial: new FormControl<string | null | undefined>(undefined),
			Value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListDomainsResponse {
		Items?: Array<ListDomainItem>;
		NextToken?: string;
	}
	export interface ListDomainsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListDomainsResponseFormGroup() {
		return new FormGroup<ListDomainsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An object in a list that represents a domain. */
	export interface ListDomainItem {

		/** Required */
		DomainName: string;

		/** Required */
		CreatedAt: Date;

		/** Required */
		LastUpdatedAt: Date;
		Tags?: TagMap;
	}

	/** An object in a list that represents a domain. */
	export interface ListDomainItemFormProperties {

		/** Required */
		DomainName: FormControl<string | null | undefined>,

		/** Required */
		CreatedAt: FormControl<Date | null | undefined>,

		/** Required */
		LastUpdatedAt: FormControl<Date | null | undefined>,
	}
	export function CreateListDomainItemFormGroup() {
		return new FormGroup<ListDomainItemFormProperties>({
			DomainName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			CreatedAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			LastUpdatedAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListEventStreamsResponse {
		Items?: Array<EventStreamSummary>;
		NextToken?: string;
	}
	export interface ListEventStreamsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListEventStreamsResponseFormGroup() {
		return new FormGroup<ListEventStreamsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An instance of EventStream in a list of EventStreams. */
	export interface EventStreamSummary {

		/** Required */
		DomainName: string;

		/** Required */
		EventStreamName: string;

		/** Required */
		EventStreamArn: string;

		/** Required */
		State: EventStreamState;
		StoppedSince?: Date;
		DestinationSummary?: DestinationSummary;
		Tags?: TagMap;
	}

	/** An instance of EventStream in a list of EventStreams. */
	export interface EventStreamSummaryFormProperties {

		/** Required */
		DomainName: FormControl<string | null | undefined>,

		/** Required */
		EventStreamName: FormControl<string | null | undefined>,

		/** Required */
		EventStreamArn: FormControl<string | null | undefined>,

		/** Required */
		State: FormControl<EventStreamState | null | undefined>,
		StoppedSince: FormControl<Date | null | undefined>,
	}
	export function CreateEventStreamSummaryFormGroup() {
		return new FormGroup<EventStreamSummaryFormProperties>({
			DomainName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			EventStreamName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			EventStreamArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			State: new FormControl<EventStreamState | null | undefined>(undefined, [Validators.required]),
			StoppedSince: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Summary information about the Kinesis data stream */
	export interface DestinationSummary {

		/** Required */
		Uri: string;

		/** Required */
		Status: EventStreamDestinationStatus;
		UnhealthySince?: Date;
	}

	/** Summary information about the Kinesis data stream */
	export interface DestinationSummaryFormProperties {

		/** Required */
		Uri: FormControl<string | null | undefined>,

		/** Required */
		Status: FormControl<EventStreamDestinationStatus | null | undefined>,
		UnhealthySince: FormControl<Date | null | undefined>,
	}
	export function CreateDestinationSummaryFormGroup() {
		return new FormGroup<DestinationSummaryFormProperties>({
			Uri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Status: new FormControl<EventStreamDestinationStatus | null | undefined>(undefined, [Validators.required]),
			UnhealthySince: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListIdentityResolutionJobsResponse {
		IdentityResolutionJobsList?: Array<IdentityResolutionJob>;
		NextToken?: string;
	}
	export interface ListIdentityResolutionJobsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListIdentityResolutionJobsResponseFormGroup() {
		return new FormGroup<ListIdentityResolutionJobsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about the Identity Resolution Job. */
	export interface IdentityResolutionJob {
		DomainName?: string;
		JobId?: string;
		Status?: IdentityResolutionJobStatus;
		JobStartTime?: Date;
		JobEndTime?: Date;
		JobStats?: JobStats;
		ExportingLocation?: ExportingLocation;
		Message?: string;
	}

	/** Information about the Identity Resolution Job. */
	export interface IdentityResolutionJobFormProperties {
		DomainName: FormControl<string | null | undefined>,
		JobId: FormControl<string | null | undefined>,
		Status: FormControl<IdentityResolutionJobStatus | null | undefined>,
		JobStartTime: FormControl<Date | null | undefined>,
		JobEndTime: FormControl<Date | null | undefined>,
		Message: FormControl<string | null | undefined>,
	}
	export function CreateIdentityResolutionJobFormGroup() {
		return new FormGroup<IdentityResolutionJobFormProperties>({
			DomainName: new FormControl<string | null | undefined>(undefined),
			JobId: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<IdentityResolutionJobStatus | null | undefined>(undefined),
			JobStartTime: new FormControl<Date | null | undefined>(undefined),
			JobEndTime: new FormControl<Date | null | undefined>(undefined),
			Message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListIntegrationsResponse {
		Items?: Array<ListIntegrationItem>;
		NextToken?: string;
	}
	export interface ListIntegrationsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListIntegrationsResponseFormGroup() {
		return new FormGroup<ListIntegrationsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListProfileObjectTypeTemplatesResponse {
		Items?: Array<ListProfileObjectTypeTemplateItem>;
		NextToken?: string;
	}
	export interface ListProfileObjectTypeTemplatesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListProfileObjectTypeTemplatesResponseFormGroup() {
		return new FormGroup<ListProfileObjectTypeTemplatesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A ProfileObjectTypeTemplate in a list of ProfileObjectTypeTemplates. */
	export interface ListProfileObjectTypeTemplateItem {
		TemplateId?: string;
		SourceName?: string;
		SourceObject?: string;
	}

	/** A ProfileObjectTypeTemplate in a list of ProfileObjectTypeTemplates. */
	export interface ListProfileObjectTypeTemplateItemFormProperties {
		TemplateId: FormControl<string | null | undefined>,
		SourceName: FormControl<string | null | undefined>,
		SourceObject: FormControl<string | null | undefined>,
	}
	export function CreateListProfileObjectTypeTemplateItemFormGroup() {
		return new FormGroup<ListProfileObjectTypeTemplateItemFormProperties>({
			TemplateId: new FormControl<string | null | undefined>(undefined),
			SourceName: new FormControl<string | null | undefined>(undefined),
			SourceObject: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListProfileObjectTypesResponse {
		Items?: Array<ListProfileObjectTypeItem>;
		NextToken?: string;
	}
	export interface ListProfileObjectTypesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListProfileObjectTypesResponseFormGroup() {
		return new FormGroup<ListProfileObjectTypesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A ProfileObjectType instance. */
	export interface ListProfileObjectTypeItem {

		/** Required */
		ObjectTypeName: string;

		/** Required */
		Description: string;
		CreatedAt?: Date;
		LastUpdatedAt?: Date;
		Tags?: TagMap;
	}

	/** A ProfileObjectType instance. */
	export interface ListProfileObjectTypeItemFormProperties {

		/** Required */
		ObjectTypeName: FormControl<string | null | undefined>,

		/** Required */
		Description: FormControl<string | null | undefined>,
		CreatedAt: FormControl<Date | null | undefined>,
		LastUpdatedAt: FormControl<Date | null | undefined>,
	}
	export function CreateListProfileObjectTypeItemFormGroup() {
		return new FormGroup<ListProfileObjectTypeItemFormProperties>({
			ObjectTypeName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			CreatedAt: new FormControl<Date | null | undefined>(undefined),
			LastUpdatedAt: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListProfileObjectsResponse {
		Items?: Array<ListProfileObjectsItem>;
		NextToken?: string;
	}
	export interface ListProfileObjectsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListProfileObjectsResponseFormGroup() {
		return new FormGroup<ListProfileObjectsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A ProfileObject in a list of ProfileObjects. */
	export interface ListProfileObjectsItem {
		ObjectTypeName?: string;
		ProfileObjectUniqueKey?: string;
		Object?: string;
	}

	/** A ProfileObject in a list of ProfileObjects. */
	export interface ListProfileObjectsItemFormProperties {
		ObjectTypeName: FormControl<string | null | undefined>,
		ProfileObjectUniqueKey: FormControl<string | null | undefined>,
		Object: FormControl<string | null | undefined>,
	}
	export function CreateListProfileObjectsItemFormGroup() {
		return new FormGroup<ListProfileObjectsItemFormProperties>({
			ObjectTypeName: new FormControl<string | null | undefined>(undefined),
			ProfileObjectUniqueKey: new FormControl<string | null | undefined>(undefined),
			Object: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListRuleBasedMatchesResponse {
		MatchIds?: Array<string>;
		NextToken?: string;
	}
	export interface ListRuleBasedMatchesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListRuleBasedMatchesResponseFormGroup() {
		return new FormGroup<ListRuleBasedMatchesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
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

	export interface ListWorkflowsResponse {
		Items?: Array<ListWorkflowsItem>;
		NextToken?: string;
	}
	export interface ListWorkflowsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListWorkflowsResponseFormGroup() {
		return new FormGroup<ListWorkflowsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A workflow in list of workflows. */
	export interface ListWorkflowsItem {

		/** Required */
		WorkflowType: WorkflowType;

		/** Required */
		WorkflowId: string;

		/** Required */
		Status: Status;

		/** Required */
		StatusDescription: string;

		/** Required */
		CreatedAt: Date;

		/** Required */
		LastUpdatedAt: Date;
	}

	/** A workflow in list of workflows. */
	export interface ListWorkflowsItemFormProperties {

		/** Required */
		WorkflowType: FormControl<WorkflowType | null | undefined>,

		/** Required */
		WorkflowId: FormControl<string | null | undefined>,

		/** Required */
		Status: FormControl<Status | null | undefined>,

		/** Required */
		StatusDescription: FormControl<string | null | undefined>,

		/** Required */
		CreatedAt: FormControl<Date | null | undefined>,

		/** Required */
		LastUpdatedAt: FormControl<Date | null | undefined>,
	}
	export function CreateListWorkflowsItemFormGroup() {
		return new FormGroup<ListWorkflowsItemFormProperties>({
			WorkflowType: new FormControl<WorkflowType | null | undefined>(undefined, [Validators.required]),
			WorkflowId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Status: new FormControl<Status | null | undefined>(undefined, [Validators.required]),
			StatusDescription: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			CreatedAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			LastUpdatedAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface MergeProfilesResponse {
		Message?: string;
	}
	export interface MergeProfilesResponseFormProperties {
		Message: FormControl<string | null | undefined>,
	}
	export function CreateMergeProfilesResponseFormGroup() {
		return new FormGroup<MergeProfilesResponseFormProperties>({
			Message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AttributeSourceIdMap {
	}
	export interface AttributeSourceIdMapFormProperties {
	}
	export function CreateAttributeSourceIdMapFormGroup() {
		return new FormGroup<AttributeSourceIdMapFormProperties>({
		});

	}

	export interface PutIntegrationResponse {

		/** Required */
		DomainName: string;

		/** Required */
		Uri: string;
		ObjectTypeName?: string;

		/** Required */
		CreatedAt: Date;

		/** Required */
		LastUpdatedAt: Date;
		Tags?: TagMap;
		ObjectTypeNames?: ObjectTypeNames;
		WorkflowId?: string;
		IsUnstructured?: boolean | null;
	}
	export interface PutIntegrationResponseFormProperties {

		/** Required */
		DomainName: FormControl<string | null | undefined>,

		/** Required */
		Uri: FormControl<string | null | undefined>,
		ObjectTypeName: FormControl<string | null | undefined>,

		/** Required */
		CreatedAt: FormControl<Date | null | undefined>,

		/** Required */
		LastUpdatedAt: FormControl<Date | null | undefined>,
		WorkflowId: FormControl<string | null | undefined>,
		IsUnstructured: FormControl<boolean | null | undefined>,
	}
	export function CreatePutIntegrationResponseFormGroup() {
		return new FormGroup<PutIntegrationResponseFormProperties>({
			DomainName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Uri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ObjectTypeName: new FormControl<string | null | undefined>(undefined),
			CreatedAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			LastUpdatedAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			WorkflowId: new FormControl<string | null | undefined>(undefined),
			IsUnstructured: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface PutProfileObjectResponse {
		ProfileObjectUniqueKey?: string;
	}
	export interface PutProfileObjectResponseFormProperties {
		ProfileObjectUniqueKey: FormControl<string | null | undefined>,
	}
	export function CreatePutProfileObjectResponseFormGroup() {
		return new FormGroup<PutProfileObjectResponseFormProperties>({
			ProfileObjectUniqueKey: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PutProfileObjectTypeResponse {

		/** Required */
		ObjectTypeName: string;

		/** Required */
		Description: string;
		TemplateId?: string;
		ExpirationDays?: number | null;
		EncryptionKey?: string;
		AllowProfileCreation?: boolean | null;
		SourceLastUpdatedTimestampFormat?: string;
		Fields?: FieldMap;
		Keys?: KeyMap;
		CreatedAt?: Date;
		LastUpdatedAt?: Date;
		Tags?: TagMap;
	}
	export interface PutProfileObjectTypeResponseFormProperties {

		/** Required */
		ObjectTypeName: FormControl<string | null | undefined>,

		/** Required */
		Description: FormControl<string | null | undefined>,
		TemplateId: FormControl<string | null | undefined>,
		ExpirationDays: FormControl<number | null | undefined>,
		EncryptionKey: FormControl<string | null | undefined>,
		AllowProfileCreation: FormControl<boolean | null | undefined>,
		SourceLastUpdatedTimestampFormat: FormControl<string | null | undefined>,
		CreatedAt: FormControl<Date | null | undefined>,
		LastUpdatedAt: FormControl<Date | null | undefined>,
	}
	export function CreatePutProfileObjectTypeResponseFormGroup() {
		return new FormGroup<PutProfileObjectTypeResponseFormProperties>({
			ObjectTypeName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TemplateId: new FormControl<string | null | undefined>(undefined),
			ExpirationDays: new FormControl<number | null | undefined>(undefined),
			EncryptionKey: new FormControl<string | null | undefined>(undefined),
			AllowProfileCreation: new FormControl<boolean | null | undefined>(undefined),
			SourceLastUpdatedTimestampFormat: new FormControl<string | null | undefined>(undefined),
			CreatedAt: new FormControl<Date | null | undefined>(undefined),
			LastUpdatedAt: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Represents a field in a ProfileObjectType. */
	export interface ObjectTypeField {
		Source?: string;
		Target?: string;
		ContentType?: FieldContentType;
	}

	/** Represents a field in a ProfileObjectType. */
	export interface ObjectTypeFieldFormProperties {
		Source: FormControl<string | null | undefined>,
		Target: FormControl<string | null | undefined>,
		ContentType: FormControl<FieldContentType | null | undefined>,
	}
	export function CreateObjectTypeFieldFormGroup() {
		return new FormGroup<ObjectTypeFieldFormProperties>({
			Source: new FormControl<string | null | undefined>(undefined),
			Target: new FormControl<string | null | undefined>(undefined),
			ContentType: new FormControl<FieldContentType | null | undefined>(undefined),
		});

	}

	export enum FieldContentType { STRING = 0, NUMBER = 1, PHONE_NUMBER = 2, EMAIL_ADDRESS = 3, NAME = 4 }


	/** An object that defines the Key element of a ProfileObject. A Key is a special element that can be used to search for a customer profile. */
	export interface ObjectTypeKey {
		StandardIdentifiers?: Array<StandardIdentifier>;
		FieldNames?: Array<string>;
	}

	/** An object that defines the Key element of a ProfileObject. A Key is a special element that can be used to search for a customer profile. */
	export interface ObjectTypeKeyFormProperties {
	}
	export function CreateObjectTypeKeyFormGroup() {
		return new FormGroup<ObjectTypeKeyFormProperties>({
		});

	}

	export enum StandardIdentifier { PROFILE = 0, ASSET = 1, CASE = 2, UNIQUE = 3, SECONDARY = 4, LOOKUP_ONLY = 5, NEW_ONLY = 6, ORDER = 7 }

	export interface SearchProfilesResponse {
		Items?: Array<Profile>;
		NextToken?: string;
	}
	export interface SearchProfilesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateSearchProfilesResponseFormGroup() {
		return new FormGroup<SearchProfilesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The standard profile of a customer. */
	export interface Profile {
		ProfileId?: string;
		AccountNumber?: string;
		AdditionalInformation?: string;
		PartyType?: PartyType;
		BusinessName?: string;
		FirstName?: string;
		MiddleName?: string;
		LastName?: string;
		BirthDate?: string;
		Gender?: Gender;
		PhoneNumber?: string;
		MobilePhoneNumber?: string;
		HomePhoneNumber?: string;
		BusinessPhoneNumber?: string;
		EmailAddress?: string;
		PersonalEmailAddress?: string;
		BusinessEmailAddress?: string;
		Address?: Address;
		ShippingAddress?: Address;
		MailingAddress?: Address;
		BillingAddress?: Address;
		Attributes?: Attributes;
		FoundByItems?: Array<FoundByKeyValue>;
		PartyTypeString?: string;
		GenderString?: string;
	}

	/** The standard profile of a customer. */
	export interface ProfileFormProperties {
		ProfileId: FormControl<string | null | undefined>,
		AccountNumber: FormControl<string | null | undefined>,
		AdditionalInformation: FormControl<string | null | undefined>,
		PartyType: FormControl<PartyType | null | undefined>,
		BusinessName: FormControl<string | null | undefined>,
		FirstName: FormControl<string | null | undefined>,
		MiddleName: FormControl<string | null | undefined>,
		LastName: FormControl<string | null | undefined>,
		BirthDate: FormControl<string | null | undefined>,
		Gender: FormControl<Gender | null | undefined>,
		PhoneNumber: FormControl<string | null | undefined>,
		MobilePhoneNumber: FormControl<string | null | undefined>,
		HomePhoneNumber: FormControl<string | null | undefined>,
		BusinessPhoneNumber: FormControl<string | null | undefined>,
		EmailAddress: FormControl<string | null | undefined>,
		PersonalEmailAddress: FormControl<string | null | undefined>,
		BusinessEmailAddress: FormControl<string | null | undefined>,
		PartyTypeString: FormControl<string | null | undefined>,
		GenderString: FormControl<string | null | undefined>,
	}
	export function CreateProfileFormGroup() {
		return new FormGroup<ProfileFormProperties>({
			ProfileId: new FormControl<string | null | undefined>(undefined),
			AccountNumber: new FormControl<string | null | undefined>(undefined),
			AdditionalInformation: new FormControl<string | null | undefined>(undefined),
			PartyType: new FormControl<PartyType | null | undefined>(undefined),
			BusinessName: new FormControl<string | null | undefined>(undefined),
			FirstName: new FormControl<string | null | undefined>(undefined),
			MiddleName: new FormControl<string | null | undefined>(undefined),
			LastName: new FormControl<string | null | undefined>(undefined),
			BirthDate: new FormControl<string | null | undefined>(undefined),
			Gender: new FormControl<Gender | null | undefined>(undefined),
			PhoneNumber: new FormControl<string | null | undefined>(undefined),
			MobilePhoneNumber: new FormControl<string | null | undefined>(undefined),
			HomePhoneNumber: new FormControl<string | null | undefined>(undefined),
			BusinessPhoneNumber: new FormControl<string | null | undefined>(undefined),
			EmailAddress: new FormControl<string | null | undefined>(undefined),
			PersonalEmailAddress: new FormControl<string | null | undefined>(undefined),
			BusinessEmailAddress: new FormControl<string | null | undefined>(undefined),
			PartyTypeString: new FormControl<string | null | undefined>(undefined),
			GenderString: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum PartyType { INDIVIDUAL = 0, BUSINESS = 1, OTHER = 2 }

	export enum Gender { MALE = 0, FEMALE = 1, UNSPECIFIED = 2 }


	/** A generic address associated with the customer that is not mailing, shipping, or billing. */
	export interface Address {
		Address1?: string;
		Address2?: string;
		Address3?: string;
		Address4?: string;
		City?: string;
		County?: string;
		State?: string;
		Province?: string;
		Country?: string;
		PostalCode?: string;
	}

	/** A generic address associated with the customer that is not mailing, shipping, or billing. */
	export interface AddressFormProperties {
		Address1: FormControl<string | null | undefined>,
		Address2: FormControl<string | null | undefined>,
		Address3: FormControl<string | null | undefined>,
		Address4: FormControl<string | null | undefined>,
		City: FormControl<string | null | undefined>,
		County: FormControl<string | null | undefined>,
		State: FormControl<string | null | undefined>,
		Province: FormControl<string | null | undefined>,
		Country: FormControl<string | null | undefined>,
		PostalCode: FormControl<string | null | undefined>,
	}
	export function CreateAddressFormGroup() {
		return new FormGroup<AddressFormProperties>({
			Address1: new FormControl<string | null | undefined>(undefined),
			Address2: new FormControl<string | null | undefined>(undefined),
			Address3: new FormControl<string | null | undefined>(undefined),
			Address4: new FormControl<string | null | undefined>(undefined),
			City: new FormControl<string | null | undefined>(undefined),
			County: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<string | null | undefined>(undefined),
			Province: new FormControl<string | null | undefined>(undefined),
			Country: new FormControl<string | null | undefined>(undefined),
			PostalCode: new FormControl<string | null | undefined>(undefined),
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


	/** A data type pair that consists of a <code>KeyName</code> and <code>Values</code> list that were used to find a profile returned in response to a <a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_SearchProfiles.html">SearchProfiles</a> request.  */
	export interface FoundByKeyValue {
		KeyName?: string;
		Values?: Array<string>;
	}

	/** A data type pair that consists of a <code>KeyName</code> and <code>Values</code> list that were used to find a profile returned in response to a <a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_SearchProfiles.html">SearchProfiles</a> request.  */
	export interface FoundByKeyValueFormProperties {
		KeyName: FormControl<string | null | undefined>,
	}
	export function CreateFoundByKeyValueFormGroup() {
		return new FormGroup<FoundByKeyValueFormProperties>({
			KeyName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A data type pair that consists of a <code>KeyName</code> and <code>Values</code> list that is used in conjunction with the <a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_SearchProfiles.html#customerprofiles-SearchProfiles-request-KeyName">KeyName</a> and <a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_SearchProfiles.html#customerprofiles-SearchProfiles-request-Values">Values</a> parameters to search for profiles using the <a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_SearchProfiles.html">SearchProfiles</a> API. */
	export interface AdditionalSearchKey {

		/** Required */
		KeyName: string;

		/** Required */
		Values: Array<string>;
	}

	/** A data type pair that consists of a <code>KeyName</code> and <code>Values</code> list that is used in conjunction with the <a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_SearchProfiles.html#customerprofiles-SearchProfiles-request-KeyName">KeyName</a> and <a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_SearchProfiles.html#customerprofiles-SearchProfiles-request-Values">Values</a> parameters to search for profiles using the <a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_SearchProfiles.html">SearchProfiles</a> API. */
	export interface AdditionalSearchKeyFormProperties {

		/** Required */
		KeyName: FormControl<string | null | undefined>,
	}
	export function CreateAdditionalSearchKeyFormGroup() {
		return new FormGroup<AdditionalSearchKeyFormProperties>({
			KeyName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

	export interface UpdateCalculatedAttributeDefinitionResponse {
		CalculatedAttributeName?: string;
		DisplayName?: string;
		Description?: string;
		CreatedAt?: Date;
		LastUpdatedAt?: Date;
		Statistic?: Statistic;
		Conditions?: Conditions;
		AttributeDetails?: AttributeDetails;
		Tags?: TagMap;
	}
	export interface UpdateCalculatedAttributeDefinitionResponseFormProperties {
		CalculatedAttributeName: FormControl<string | null | undefined>,
		DisplayName: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		CreatedAt: FormControl<Date | null | undefined>,
		LastUpdatedAt: FormControl<Date | null | undefined>,
		Statistic: FormControl<Statistic | null | undefined>,
	}
	export function CreateUpdateCalculatedAttributeDefinitionResponseFormGroup() {
		return new FormGroup<UpdateCalculatedAttributeDefinitionResponseFormProperties>({
			CalculatedAttributeName: new FormControl<string | null | undefined>(undefined),
			DisplayName: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			CreatedAt: new FormControl<Date | null | undefined>(undefined),
			LastUpdatedAt: new FormControl<Date | null | undefined>(undefined),
			Statistic: new FormControl<Statistic | null | undefined>(undefined),
		});

	}

	export interface UpdateDomainResponse {

		/** Required */
		DomainName: string;
		DefaultExpirationDays?: number | null;
		DefaultEncryptionKey?: string;
		DeadLetterQueueUrl?: string;
		Matching?: MatchingResponse;
		RuleBasedMatching?: RuleBasedMatchingResponse;

		/** Required */
		CreatedAt: Date;

		/** Required */
		LastUpdatedAt: Date;
		Tags?: TagMap;
	}
	export interface UpdateDomainResponseFormProperties {

		/** Required */
		DomainName: FormControl<string | null | undefined>,
		DefaultExpirationDays: FormControl<number | null | undefined>,
		DefaultEncryptionKey: FormControl<string | null | undefined>,
		DeadLetterQueueUrl: FormControl<string | null | undefined>,

		/** Required */
		CreatedAt: FormControl<Date | null | undefined>,

		/** Required */
		LastUpdatedAt: FormControl<Date | null | undefined>,
	}
	export function CreateUpdateDomainResponseFormGroup() {
		return new FormGroup<UpdateDomainResponseFormProperties>({
			DomainName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DefaultExpirationDays: new FormControl<number | null | undefined>(undefined),
			DefaultEncryptionKey: new FormControl<string | null | undefined>(undefined),
			DeadLetterQueueUrl: new FormControl<string | null | undefined>(undefined),
			CreatedAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			LastUpdatedAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateProfileResponse {

		/** Required */
		ProfileId: string;
	}
	export interface UpdateProfileResponseFormProperties {

		/** Required */
		ProfileId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateProfileResponseFormGroup() {
		return new FormGroup<UpdateProfileResponseFormProperties>({
			ProfileId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AddProfileKeyRequest {

		/** Required */
		ProfileId: string;

		/** Required */
		KeyName: string;

		/** Required */
		Values: Array<string>;
	}
	export interface AddProfileKeyRequestFormProperties {

		/** Required */
		ProfileId: FormControl<string | null | undefined>,

		/** Required */
		KeyName: FormControl<string | null | undefined>,
	}
	export function CreateAddProfileKeyRequestFormGroup() {
		return new FormGroup<AddProfileKeyRequestFormProperties>({
			ProfileId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			KeyName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateCalculatedAttributeDefinitionRequest {
		DisplayName?: string;
		Description?: string;

		/** Required */
		AttributeDetails: AttributeDetails;
		Conditions?: Conditions;

		/** Required */
		Statistic: Statistic;
		Tags?: TagMap;
	}
	export interface CreateCalculatedAttributeDefinitionRequestFormProperties {
		DisplayName: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,

		/** Required */
		Statistic: FormControl<Statistic | null | undefined>,
	}
	export function CreateCreateCalculatedAttributeDefinitionRequestFormGroup() {
		return new FormGroup<CreateCalculatedAttributeDefinitionRequestFormProperties>({
			DisplayName: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			Statistic: new FormControl<Statistic | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The flag that enables the matching process of duplicate profiles. */
	export interface MatchingRequest {

		/** Required */
		Enabled: boolean;
		JobSchedule?: JobSchedule;
		AutoMerging?: AutoMerging;
		ExportingConfig?: ExportingConfig;
	}

	/** The flag that enables the matching process of duplicate profiles. */
	export interface MatchingRequestFormProperties {

		/** Required */
		Enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateMatchingRequestFormGroup() {
		return new FormGroup<MatchingRequestFormProperties>({
			Enabled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The request to enable the rule-based matching. */
	export interface RuleBasedMatchingRequest {

		/** Required */
		Enabled: boolean;
		MatchingRules?: Array<MatchingRule>;
		MaxAllowedRuleLevelForMerging?: number | null;
		MaxAllowedRuleLevelForMatching?: number | null;
		AttributeTypesSelector?: AttributeTypesSelector;

		/** How the auto-merging process should resolve conflicts between different profiles. */
		ConflictResolution?: ConflictResolution;

		/** <p>Configuration information about the S3 bucket where Identity Resolution Jobs writes result files. </p> <note> <p>You need to give Customer Profiles service principal write permission to your S3 bucket. Otherwise, you'll get an exception in the API response. For an example policy, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/cross-service-confused-deputy-prevention.html#customer-profiles-cross-service">Amazon Connect Customer Profiles cross-service confused deputy prevention</a>. </p> </note> */
		ExportingConfig?: ExportingConfig;
	}

	/** The request to enable the rule-based matching. */
	export interface RuleBasedMatchingRequestFormProperties {

		/** Required */
		Enabled: FormControl<boolean | null | undefined>,
		MaxAllowedRuleLevelForMerging: FormControl<number | null | undefined>,
		MaxAllowedRuleLevelForMatching: FormControl<number | null | undefined>,
	}
	export function CreateRuleBasedMatchingRequestFormGroup() {
		return new FormGroup<RuleBasedMatchingRequestFormProperties>({
			Enabled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			MaxAllowedRuleLevelForMerging: new FormControl<number | null | undefined>(undefined),
			MaxAllowedRuleLevelForMatching: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CreateDomainRequest {

		/** Required */
		DefaultExpirationDays: number;
		DefaultEncryptionKey?: string;
		DeadLetterQueueUrl?: string;
		Matching?: MatchingRequest;
		RuleBasedMatching?: RuleBasedMatchingRequest;
		Tags?: TagMap;
	}
	export interface CreateDomainRequestFormProperties {

		/** Required */
		DefaultExpirationDays: FormControl<number | null | undefined>,
		DefaultEncryptionKey: FormControl<string | null | undefined>,
		DeadLetterQueueUrl: FormControl<string | null | undefined>,
	}
	export function CreateCreateDomainRequestFormGroup() {
		return new FormGroup<CreateDomainRequestFormProperties>({
			DefaultExpirationDays: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			DefaultEncryptionKey: new FormControl<string | null | undefined>(undefined),
			DeadLetterQueueUrl: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateEventStreamRequest {

		/** Required */
		Uri: string;
		Tags?: TagMap;
	}
	export interface CreateEventStreamRequestFormProperties {

		/** Required */
		Uri: FormControl<string | null | undefined>,
	}
	export function CreateCreateEventStreamRequestFormGroup() {
		return new FormGroup<CreateEventStreamRequestFormProperties>({
			Uri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Configuration data for integration workflow. */
	export interface IntegrationConfig {
		AppflowIntegration?: AppflowIntegration;
	}

	/** Configuration data for integration workflow. */
	export interface IntegrationConfigFormProperties {
	}
	export function CreateIntegrationConfigFormGroup() {
		return new FormGroup<IntegrationConfigFormProperties>({
		});

	}

	export interface CreateIntegrationWorkflowRequest {

		/** Required */
		WorkflowType: WorkflowType;

		/** Required */
		IntegrationConfig: IntegrationConfig;

		/** Required */
		ObjectTypeName: string;

		/** Required */
		RoleArn: string;
		Tags?: TagMap;
	}
	export interface CreateIntegrationWorkflowRequestFormProperties {

		/** Required */
		WorkflowType: FormControl<WorkflowType | null | undefined>,

		/** Required */
		ObjectTypeName: FormControl<string | null | undefined>,

		/** Required */
		RoleArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateIntegrationWorkflowRequestFormGroup() {
		return new FormGroup<CreateIntegrationWorkflowRequestFormProperties>({
			WorkflowType: new FormControl<WorkflowType | null | undefined>(undefined, [Validators.required]),
			ObjectTypeName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateProfileRequest {
		AccountNumber?: string;
		AdditionalInformation?: string;
		PartyType?: PartyType;
		BusinessName?: string;
		FirstName?: string;
		MiddleName?: string;
		LastName?: string;
		BirthDate?: string;
		Gender?: Gender;
		PhoneNumber?: string;
		MobilePhoneNumber?: string;
		HomePhoneNumber?: string;
		BusinessPhoneNumber?: string;
		EmailAddress?: string;
		PersonalEmailAddress?: string;
		BusinessEmailAddress?: string;
		Address?: Address;
		ShippingAddress?: Address;
		MailingAddress?: Address;
		BillingAddress?: Address;
		Attributes?: Attributes;
		PartyTypeString?: string;
		GenderString?: string;
	}
	export interface CreateProfileRequestFormProperties {
		AccountNumber: FormControl<string | null | undefined>,
		AdditionalInformation: FormControl<string | null | undefined>,
		PartyType: FormControl<PartyType | null | undefined>,
		BusinessName: FormControl<string | null | undefined>,
		FirstName: FormControl<string | null | undefined>,
		MiddleName: FormControl<string | null | undefined>,
		LastName: FormControl<string | null | undefined>,
		BirthDate: FormControl<string | null | undefined>,
		Gender: FormControl<Gender | null | undefined>,
		PhoneNumber: FormControl<string | null | undefined>,
		MobilePhoneNumber: FormControl<string | null | undefined>,
		HomePhoneNumber: FormControl<string | null | undefined>,
		BusinessPhoneNumber: FormControl<string | null | undefined>,
		EmailAddress: FormControl<string | null | undefined>,
		PersonalEmailAddress: FormControl<string | null | undefined>,
		BusinessEmailAddress: FormControl<string | null | undefined>,
		PartyTypeString: FormControl<string | null | undefined>,
		GenderString: FormControl<string | null | undefined>,
	}
	export function CreateCreateProfileRequestFormGroup() {
		return new FormGroup<CreateProfileRequestFormProperties>({
			AccountNumber: new FormControl<string | null | undefined>(undefined),
			AdditionalInformation: new FormControl<string | null | undefined>(undefined),
			PartyType: new FormControl<PartyType | null | undefined>(undefined),
			BusinessName: new FormControl<string | null | undefined>(undefined),
			FirstName: new FormControl<string | null | undefined>(undefined),
			MiddleName: new FormControl<string | null | undefined>(undefined),
			LastName: new FormControl<string | null | undefined>(undefined),
			BirthDate: new FormControl<string | null | undefined>(undefined),
			Gender: new FormControl<Gender | null | undefined>(undefined),
			PhoneNumber: new FormControl<string | null | undefined>(undefined),
			MobilePhoneNumber: new FormControl<string | null | undefined>(undefined),
			HomePhoneNumber: new FormControl<string | null | undefined>(undefined),
			BusinessPhoneNumber: new FormControl<string | null | undefined>(undefined),
			EmailAddress: new FormControl<string | null | undefined>(undefined),
			PersonalEmailAddress: new FormControl<string | null | undefined>(undefined),
			BusinessEmailAddress: new FormControl<string | null | undefined>(undefined),
			PartyTypeString: new FormControl<string | null | undefined>(undefined),
			GenderString: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteCalculatedAttributeDefinitionRequest {
	}
	export interface DeleteCalculatedAttributeDefinitionRequestFormProperties {
	}
	export function CreateDeleteCalculatedAttributeDefinitionRequestFormGroup() {
		return new FormGroup<DeleteCalculatedAttributeDefinitionRequestFormProperties>({
		});

	}

	export interface DeleteDomainRequest {
	}
	export interface DeleteDomainRequestFormProperties {
	}
	export function CreateDeleteDomainRequestFormGroup() {
		return new FormGroup<DeleteDomainRequestFormProperties>({
		});

	}

	export interface DeleteEventStreamRequest {
	}
	export interface DeleteEventStreamRequestFormProperties {
	}
	export function CreateDeleteEventStreamRequestFormGroup() {
		return new FormGroup<DeleteEventStreamRequestFormProperties>({
		});

	}

	export interface DeleteIntegrationRequest {

		/** Required */
		Uri: string;
	}
	export interface DeleteIntegrationRequestFormProperties {

		/** Required */
		Uri: FormControl<string | null | undefined>,
	}
	export function CreateDeleteIntegrationRequestFormGroup() {
		return new FormGroup<DeleteIntegrationRequestFormProperties>({
			Uri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteProfileKeyRequest {

		/** Required */
		ProfileId: string;

		/** Required */
		KeyName: string;

		/** Required */
		Values: Array<string>;
	}
	export interface DeleteProfileKeyRequestFormProperties {

		/** Required */
		ProfileId: FormControl<string | null | undefined>,

		/** Required */
		KeyName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteProfileKeyRequestFormGroup() {
		return new FormGroup<DeleteProfileKeyRequestFormProperties>({
			ProfileId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			KeyName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteProfileObjectRequest {

		/** Required */
		ProfileId: string;

		/** Required */
		ProfileObjectUniqueKey: string;

		/** Required */
		ObjectTypeName: string;
	}
	export interface DeleteProfileObjectRequestFormProperties {

		/** Required */
		ProfileId: FormControl<string | null | undefined>,

		/** Required */
		ProfileObjectUniqueKey: FormControl<string | null | undefined>,

		/** Required */
		ObjectTypeName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteProfileObjectRequestFormGroup() {
		return new FormGroup<DeleteProfileObjectRequestFormProperties>({
			ProfileId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ProfileObjectUniqueKey: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ObjectTypeName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteProfileObjectTypeRequest {
	}
	export interface DeleteProfileObjectTypeRequestFormProperties {
	}
	export function CreateDeleteProfileObjectTypeRequestFormGroup() {
		return new FormGroup<DeleteProfileObjectTypeRequestFormProperties>({
		});

	}

	export interface DeleteProfileRequest {

		/** Required */
		ProfileId: string;
	}
	export interface DeleteProfileRequestFormProperties {

		/** Required */
		ProfileId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteProfileRequestFormGroup() {
		return new FormGroup<DeleteProfileRequestFormProperties>({
			ProfileId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteWorkflowRequest {
	}
	export interface DeleteWorkflowRequestFormProperties {
	}
	export function CreateDeleteWorkflowRequestFormGroup() {
		return new FormGroup<DeleteWorkflowRequestFormProperties>({
		});

	}


	/** A duplicate customer profile that is to be merged into a main profile.  */
	export interface FieldSourceProfileIds {
		AccountNumber?: string;
		AdditionalInformation?: string;
		PartyType?: string;
		BusinessName?: string;
		FirstName?: string;
		MiddleName?: string;
		LastName?: string;
		BirthDate?: string;
		Gender?: string;
		PhoneNumber?: string;
		MobilePhoneNumber?: string;
		HomePhoneNumber?: string;
		BusinessPhoneNumber?: string;
		EmailAddress?: string;
		PersonalEmailAddress?: string;
		BusinessEmailAddress?: string;
		Address?: string;
		ShippingAddress?: string;
		MailingAddress?: string;
		BillingAddress?: string;
		Attributes?: AttributeSourceIdMap;
	}

	/** A duplicate customer profile that is to be merged into a main profile.  */
	export interface FieldSourceProfileIdsFormProperties {
		AccountNumber: FormControl<string | null | undefined>,
		AdditionalInformation: FormControl<string | null | undefined>,
		PartyType: FormControl<string | null | undefined>,
		BusinessName: FormControl<string | null | undefined>,
		FirstName: FormControl<string | null | undefined>,
		MiddleName: FormControl<string | null | undefined>,
		LastName: FormControl<string | null | undefined>,
		BirthDate: FormControl<string | null | undefined>,
		Gender: FormControl<string | null | undefined>,
		PhoneNumber: FormControl<string | null | undefined>,
		MobilePhoneNumber: FormControl<string | null | undefined>,
		HomePhoneNumber: FormControl<string | null | undefined>,
		BusinessPhoneNumber: FormControl<string | null | undefined>,
		EmailAddress: FormControl<string | null | undefined>,
		PersonalEmailAddress: FormControl<string | null | undefined>,
		BusinessEmailAddress: FormControl<string | null | undefined>,
		Address: FormControl<string | null | undefined>,
		ShippingAddress: FormControl<string | null | undefined>,
		MailingAddress: FormControl<string | null | undefined>,
		BillingAddress: FormControl<string | null | undefined>,
	}
	export function CreateFieldSourceProfileIdsFormGroup() {
		return new FormGroup<FieldSourceProfileIdsFormProperties>({
			AccountNumber: new FormControl<string | null | undefined>(undefined),
			AdditionalInformation: new FormControl<string | null | undefined>(undefined),
			PartyType: new FormControl<string | null | undefined>(undefined),
			BusinessName: new FormControl<string | null | undefined>(undefined),
			FirstName: new FormControl<string | null | undefined>(undefined),
			MiddleName: new FormControl<string | null | undefined>(undefined),
			LastName: new FormControl<string | null | undefined>(undefined),
			BirthDate: new FormControl<string | null | undefined>(undefined),
			Gender: new FormControl<string | null | undefined>(undefined),
			PhoneNumber: new FormControl<string | null | undefined>(undefined),
			MobilePhoneNumber: new FormControl<string | null | undefined>(undefined),
			HomePhoneNumber: new FormControl<string | null | undefined>(undefined),
			BusinessPhoneNumber: new FormControl<string | null | undefined>(undefined),
			EmailAddress: new FormControl<string | null | undefined>(undefined),
			PersonalEmailAddress: new FormControl<string | null | undefined>(undefined),
			BusinessEmailAddress: new FormControl<string | null | undefined>(undefined),
			Address: new FormControl<string | null | undefined>(undefined),
			ShippingAddress: new FormControl<string | null | undefined>(undefined),
			MailingAddress: new FormControl<string | null | undefined>(undefined),
			BillingAddress: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetAutoMergingPreviewRequest {

		/** Required */
		Consolidation: Consolidation;

		/** Required */
		ConflictResolution: ConflictResolution;
		MinAllowedConfidenceScoreForMerging?: number | null;
	}
	export interface GetAutoMergingPreviewRequestFormProperties {
		MinAllowedConfidenceScoreForMerging: FormControl<number | null | undefined>,
	}
	export function CreateGetAutoMergingPreviewRequestFormGroup() {
		return new FormGroup<GetAutoMergingPreviewRequestFormProperties>({
			MinAllowedConfidenceScoreForMerging: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetCalculatedAttributeDefinitionRequest {
	}
	export interface GetCalculatedAttributeDefinitionRequestFormProperties {
	}
	export function CreateGetCalculatedAttributeDefinitionRequestFormGroup() {
		return new FormGroup<GetCalculatedAttributeDefinitionRequestFormProperties>({
		});

	}

	export interface GetCalculatedAttributeForProfileRequest {
	}
	export interface GetCalculatedAttributeForProfileRequestFormProperties {
	}
	export function CreateGetCalculatedAttributeForProfileRequestFormGroup() {
		return new FormGroup<GetCalculatedAttributeForProfileRequestFormProperties>({
		});

	}

	export interface GetDomainRequest {
	}
	export interface GetDomainRequestFormProperties {
	}
	export function CreateGetDomainRequestFormGroup() {
		return new FormGroup<GetDomainRequestFormProperties>({
		});

	}

	export interface GetEventStreamRequest {
	}
	export interface GetEventStreamRequestFormProperties {
	}
	export function CreateGetEventStreamRequestFormGroup() {
		return new FormGroup<GetEventStreamRequestFormProperties>({
		});

	}

	export interface GetIdentityResolutionJobRequest {
	}
	export interface GetIdentityResolutionJobRequestFormProperties {
	}
	export function CreateGetIdentityResolutionJobRequestFormGroup() {
		return new FormGroup<GetIdentityResolutionJobRequestFormProperties>({
		});

	}

	export interface GetIntegrationRequest {

		/** Required */
		Uri: string;
	}
	export interface GetIntegrationRequestFormProperties {

		/** Required */
		Uri: FormControl<string | null | undefined>,
	}
	export function CreateGetIntegrationRequestFormGroup() {
		return new FormGroup<GetIntegrationRequestFormProperties>({
			Uri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetMatchesRequest {
	}
	export interface GetMatchesRequestFormProperties {
	}
	export function CreateGetMatchesRequestFormGroup() {
		return new FormGroup<GetMatchesRequestFormProperties>({
		});

	}

	export interface GetProfileObjectTypeRequest {
	}
	export interface GetProfileObjectTypeRequestFormProperties {
	}
	export function CreateGetProfileObjectTypeRequestFormGroup() {
		return new FormGroup<GetProfileObjectTypeRequestFormProperties>({
		});

	}

	export interface GetProfileObjectTypeTemplateRequest {
	}
	export interface GetProfileObjectTypeTemplateRequestFormProperties {
	}
	export function CreateGetProfileObjectTypeTemplateRequestFormGroup() {
		return new FormGroup<GetProfileObjectTypeTemplateRequestFormProperties>({
		});

	}

	export interface GetSimilarProfilesRequest {

		/** Required */
		MatchType: MatchType;

		/** Required */
		SearchKey: string;

		/** Required */
		SearchValue: string;
	}
	export interface GetSimilarProfilesRequestFormProperties {

		/** Required */
		MatchType: FormControl<MatchType | null | undefined>,

		/** Required */
		SearchKey: FormControl<string | null | undefined>,

		/** Required */
		SearchValue: FormControl<string | null | undefined>,
	}
	export function CreateGetSimilarProfilesRequestFormGroup() {
		return new FormGroup<GetSimilarProfilesRequestFormProperties>({
			MatchType: new FormControl<MatchType | null | undefined>(undefined, [Validators.required]),
			SearchKey: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SearchValue: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetWorkflowRequest {
	}
	export interface GetWorkflowRequestFormProperties {
	}
	export function CreateGetWorkflowRequestFormGroup() {
		return new FormGroup<GetWorkflowRequestFormProperties>({
		});

	}

	export interface GetWorkflowStepsRequest {
	}
	export interface GetWorkflowStepsRequestFormProperties {
	}
	export function CreateGetWorkflowStepsRequestFormGroup() {
		return new FormGroup<GetWorkflowStepsRequestFormProperties>({
		});

	}

	export interface ListAccountIntegrationsRequest {

		/** Required */
		Uri: string;
	}
	export interface ListAccountIntegrationsRequestFormProperties {

		/** Required */
		Uri: FormControl<string | null | undefined>,
	}
	export function CreateListAccountIntegrationsRequestFormGroup() {
		return new FormGroup<ListAccountIntegrationsRequestFormProperties>({
			Uri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListCalculatedAttributeDefinitionsRequest {
	}
	export interface ListCalculatedAttributeDefinitionsRequestFormProperties {
	}
	export function CreateListCalculatedAttributeDefinitionsRequestFormGroup() {
		return new FormGroup<ListCalculatedAttributeDefinitionsRequestFormProperties>({
		});

	}

	export interface ListCalculatedAttributesForProfileRequest {
	}
	export interface ListCalculatedAttributesForProfileRequestFormProperties {
	}
	export function CreateListCalculatedAttributesForProfileRequestFormGroup() {
		return new FormGroup<ListCalculatedAttributesForProfileRequestFormProperties>({
		});

	}

	export interface ListDomainsRequest {
	}
	export interface ListDomainsRequestFormProperties {
	}
	export function CreateListDomainsRequestFormGroup() {
		return new FormGroup<ListDomainsRequestFormProperties>({
		});

	}

	export interface ListEventStreamsRequest {
	}
	export interface ListEventStreamsRequestFormProperties {
	}
	export function CreateListEventStreamsRequestFormGroup() {
		return new FormGroup<ListEventStreamsRequestFormProperties>({
		});

	}

	export interface ListIdentityResolutionJobsRequest {
	}
	export interface ListIdentityResolutionJobsRequestFormProperties {
	}
	export function CreateListIdentityResolutionJobsRequestFormGroup() {
		return new FormGroup<ListIdentityResolutionJobsRequestFormProperties>({
		});

	}

	export interface ListIntegrationsRequest {
	}
	export interface ListIntegrationsRequestFormProperties {
	}
	export function CreateListIntegrationsRequestFormGroup() {
		return new FormGroup<ListIntegrationsRequestFormProperties>({
		});

	}

	export interface ListProfileObjectTypeTemplatesRequest {
	}
	export interface ListProfileObjectTypeTemplatesRequestFormProperties {
	}
	export function CreateListProfileObjectTypeTemplatesRequestFormGroup() {
		return new FormGroup<ListProfileObjectTypeTemplatesRequestFormProperties>({
		});

	}

	export interface ListProfileObjectTypesRequest {
	}
	export interface ListProfileObjectTypesRequestFormProperties {
	}
	export function CreateListProfileObjectTypesRequestFormGroup() {
		return new FormGroup<ListProfileObjectTypesRequestFormProperties>({
		});

	}


	/** The filter applied to <code>ListProfileObjects</code> response to include profile objects with the specified index values. */
	export interface ObjectFilter {

		/** Required */
		KeyName: string;

		/** Required */
		Values: Array<string>;
	}

	/** The filter applied to <code>ListProfileObjects</code> response to include profile objects with the specified index values. */
	export interface ObjectFilterFormProperties {

		/** Required */
		KeyName: FormControl<string | null | undefined>,
	}
	export function CreateObjectFilterFormGroup() {
		return new FormGroup<ObjectFilterFormProperties>({
			KeyName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListProfileObjectsRequest {

		/** Required */
		ObjectTypeName: string;

		/** Required */
		ProfileId: string;
		ObjectFilter?: ObjectFilter;
	}
	export interface ListProfileObjectsRequestFormProperties {

		/** Required */
		ObjectTypeName: FormControl<string | null | undefined>,

		/** Required */
		ProfileId: FormControl<string | null | undefined>,
	}
	export function CreateListProfileObjectsRequestFormGroup() {
		return new FormGroup<ListProfileObjectsRequestFormProperties>({
			ObjectTypeName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ProfileId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListRuleBasedMatchesRequest {
	}
	export interface ListRuleBasedMatchesRequestFormProperties {
	}
	export function CreateListRuleBasedMatchesRequestFormGroup() {
		return new FormGroup<ListRuleBasedMatchesRequestFormProperties>({
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

	export interface ListWorkflowsRequest {
		WorkflowType?: WorkflowType;
		Status?: Status;
		QueryStartDate?: Date;
		QueryEndDate?: Date;
	}
	export interface ListWorkflowsRequestFormProperties {
		WorkflowType: FormControl<WorkflowType | null | undefined>,
		Status: FormControl<Status | null | undefined>,
		QueryStartDate: FormControl<Date | null | undefined>,
		QueryEndDate: FormControl<Date | null | undefined>,
	}
	export function CreateListWorkflowsRequestFormGroup() {
		return new FormGroup<ListWorkflowsRequestFormProperties>({
			WorkflowType: new FormControl<WorkflowType | null | undefined>(undefined),
			Status: new FormControl<Status | null | undefined>(undefined),
			QueryStartDate: new FormControl<Date | null | undefined>(undefined),
			QueryEndDate: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface MergeProfilesRequest {

		/** Required */
		MainProfileId: string;

		/** Required */
		ProfileIdsToBeMerged: Array<string>;
		FieldSourceProfileIds?: FieldSourceProfileIds;
	}
	export interface MergeProfilesRequestFormProperties {

		/** Required */
		MainProfileId: FormControl<string | null | undefined>,
	}
	export function CreateMergeProfilesRequestFormGroup() {
		return new FormGroup<MergeProfilesRequestFormProperties>({
			MainProfileId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum OperatorPropertiesKeys { VALUE = 0, VALUES = 1, DATA_TYPE = 2, UPPER_BOUND = 3, LOWER_BOUND = 4, SOURCE_DATA_TYPE = 5, DESTINATION_DATA_TYPE = 6, VALIDATION_ACTION = 7, MASK_VALUE = 8, MASK_LENGTH = 9, TRUNCATE_LENGTH = 10, MATH_OPERATION_FIELDS_ORDER = 11, CONCAT_FORMAT = 12, SUBFIELD_CATEGORY_MAP = 13 }

	export interface PutIntegrationRequest {
		Uri?: string;
		ObjectTypeName?: string;
		Tags?: TagMap;
		FlowDefinition?: FlowDefinition;
		ObjectTypeNames?: ObjectTypeNames;
	}
	export interface PutIntegrationRequestFormProperties {
		Uri: FormControl<string | null | undefined>,
		ObjectTypeName: FormControl<string | null | undefined>,
	}
	export function CreatePutIntegrationRequestFormGroup() {
		return new FormGroup<PutIntegrationRequestFormProperties>({
			Uri: new FormControl<string | null | undefined>(undefined),
			ObjectTypeName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PutProfileObjectRequest {

		/** Required */
		ObjectTypeName: string;

		/** Required */
		Object: string;
	}
	export interface PutProfileObjectRequestFormProperties {

		/** Required */
		ObjectTypeName: FormControl<string | null | undefined>,

		/** Required */
		Object: FormControl<string | null | undefined>,
	}
	export function CreatePutProfileObjectRequestFormGroup() {
		return new FormGroup<PutProfileObjectRequestFormProperties>({
			ObjectTypeName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Object: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PutProfileObjectTypeRequest {

		/** Required */
		Description: string;
		TemplateId?: string;
		ExpirationDays?: number | null;
		EncryptionKey?: string;
		AllowProfileCreation?: boolean | null;
		SourceLastUpdatedTimestampFormat?: string;
		Fields?: FieldMap;
		Keys?: KeyMap;
		Tags?: TagMap;
	}
	export interface PutProfileObjectTypeRequestFormProperties {

		/** Required */
		Description: FormControl<string | null | undefined>,
		TemplateId: FormControl<string | null | undefined>,
		ExpirationDays: FormControl<number | null | undefined>,
		EncryptionKey: FormControl<string | null | undefined>,
		AllowProfileCreation: FormControl<boolean | null | undefined>,
		SourceLastUpdatedTimestampFormat: FormControl<string | null | undefined>,
	}
	export function CreatePutProfileObjectTypeRequestFormGroup() {
		return new FormGroup<PutProfileObjectTypeRequestFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TemplateId: new FormControl<string | null | undefined>(undefined),
			ExpirationDays: new FormControl<number | null | undefined>(undefined),
			EncryptionKey: new FormControl<string | null | undefined>(undefined),
			AllowProfileCreation: new FormControl<boolean | null | undefined>(undefined),
			SourceLastUpdatedTimestampFormat: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum LogicalOperator { AND = 0, OR = 1 }

	export interface SearchProfilesRequest {

		/** Required */
		KeyName: string;

		/** Required */
		Values: Array<string>;
		AdditionalSearchKeys?: Array<AdditionalSearchKey>;
		LogicalOperator?: LogicalOperator;
	}
	export interface SearchProfilesRequestFormProperties {

		/** Required */
		KeyName: FormControl<string | null | undefined>,
		LogicalOperator: FormControl<LogicalOperator | null | undefined>,
	}
	export function CreateSearchProfilesRequestFormGroup() {
		return new FormGroup<SearchProfilesRequestFormProperties>({
			KeyName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			LogicalOperator: new FormControl<LogicalOperator | null | undefined>(undefined),
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


	/** Updates associated with the address properties of a customer profile. */
	export interface UpdateAddress {
		Address1?: string;
		Address2?: string;
		Address3?: string;
		Address4?: string;
		City?: string;
		County?: string;
		State?: string;
		Province?: string;
		Country?: string;
		PostalCode?: string;
	}

	/** Updates associated with the address properties of a customer profile. */
	export interface UpdateAddressFormProperties {
		Address1: FormControl<string | null | undefined>,
		Address2: FormControl<string | null | undefined>,
		Address3: FormControl<string | null | undefined>,
		Address4: FormControl<string | null | undefined>,
		City: FormControl<string | null | undefined>,
		County: FormControl<string | null | undefined>,
		State: FormControl<string | null | undefined>,
		Province: FormControl<string | null | undefined>,
		Country: FormControl<string | null | undefined>,
		PostalCode: FormControl<string | null | undefined>,
	}
	export function CreateUpdateAddressFormGroup() {
		return new FormGroup<UpdateAddressFormProperties>({
			Address1: new FormControl<string | null | undefined>(undefined),
			Address2: new FormControl<string | null | undefined>(undefined),
			Address3: new FormControl<string | null | undefined>(undefined),
			Address4: new FormControl<string | null | undefined>(undefined),
			City: new FormControl<string | null | undefined>(undefined),
			County: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<string | null | undefined>(undefined),
			Province: new FormControl<string | null | undefined>(undefined),
			Country: new FormControl<string | null | undefined>(undefined),
			PostalCode: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateAttributes {
	}
	export interface UpdateAttributesFormProperties {
	}
	export function CreateUpdateAttributesFormGroup() {
		return new FormGroup<UpdateAttributesFormProperties>({
		});

	}

	export interface UpdateCalculatedAttributeDefinitionRequest {
		DisplayName?: string;
		Description?: string;
		Conditions?: Conditions;
	}
	export interface UpdateCalculatedAttributeDefinitionRequestFormProperties {
		DisplayName: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
	}
	export function CreateUpdateCalculatedAttributeDefinitionRequestFormGroup() {
		return new FormGroup<UpdateCalculatedAttributeDefinitionRequestFormProperties>({
			DisplayName: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateDomainRequest {
		DefaultExpirationDays?: number | null;
		DefaultEncryptionKey?: string;
		DeadLetterQueueUrl?: string;
		Matching?: MatchingRequest;
		RuleBasedMatching?: RuleBasedMatchingRequest;
		Tags?: TagMap;
	}
	export interface UpdateDomainRequestFormProperties {
		DefaultExpirationDays: FormControl<number | null | undefined>,
		DefaultEncryptionKey: FormControl<string | null | undefined>,
		DeadLetterQueueUrl: FormControl<string | null | undefined>,
	}
	export function CreateUpdateDomainRequestFormGroup() {
		return new FormGroup<UpdateDomainRequestFormProperties>({
			DefaultExpirationDays: new FormControl<number | null | undefined>(undefined),
			DefaultEncryptionKey: new FormControl<string | null | undefined>(undefined),
			DeadLetterQueueUrl: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateProfileRequest {

		/** Required */
		ProfileId: string;
		AdditionalInformation?: string;
		AccountNumber?: string;
		PartyType?: PartyType;
		BusinessName?: string;
		FirstName?: string;
		MiddleName?: string;
		LastName?: string;
		BirthDate?: string;
		Gender?: Gender;
		PhoneNumber?: string;
		MobilePhoneNumber?: string;
		HomePhoneNumber?: string;
		BusinessPhoneNumber?: string;
		EmailAddress?: string;
		PersonalEmailAddress?: string;
		BusinessEmailAddress?: string;
		Address?: UpdateAddress;
		ShippingAddress?: UpdateAddress;
		MailingAddress?: UpdateAddress;
		BillingAddress?: UpdateAddress;
		Attributes?: UpdateAttributes;
		PartyTypeString?: string;
		GenderString?: string;
	}
	export interface UpdateProfileRequestFormProperties {

		/** Required */
		ProfileId: FormControl<string | null | undefined>,
		AdditionalInformation: FormControl<string | null | undefined>,
		AccountNumber: FormControl<string | null | undefined>,
		PartyType: FormControl<PartyType | null | undefined>,
		BusinessName: FormControl<string | null | undefined>,
		FirstName: FormControl<string | null | undefined>,
		MiddleName: FormControl<string | null | undefined>,
		LastName: FormControl<string | null | undefined>,
		BirthDate: FormControl<string | null | undefined>,
		Gender: FormControl<Gender | null | undefined>,
		PhoneNumber: FormControl<string | null | undefined>,
		MobilePhoneNumber: FormControl<string | null | undefined>,
		HomePhoneNumber: FormControl<string | null | undefined>,
		BusinessPhoneNumber: FormControl<string | null | undefined>,
		EmailAddress: FormControl<string | null | undefined>,
		PersonalEmailAddress: FormControl<string | null | undefined>,
		BusinessEmailAddress: FormControl<string | null | undefined>,
		PartyTypeString: FormControl<string | null | undefined>,
		GenderString: FormControl<string | null | undefined>,
	}
	export function CreateUpdateProfileRequestFormGroup() {
		return new FormGroup<UpdateProfileRequestFormProperties>({
			ProfileId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			AdditionalInformation: new FormControl<string | null | undefined>(undefined),
			AccountNumber: new FormControl<string | null | undefined>(undefined),
			PartyType: new FormControl<PartyType | null | undefined>(undefined),
			BusinessName: new FormControl<string | null | undefined>(undefined),
			FirstName: new FormControl<string | null | undefined>(undefined),
			MiddleName: new FormControl<string | null | undefined>(undefined),
			LastName: new FormControl<string | null | undefined>(undefined),
			BirthDate: new FormControl<string | null | undefined>(undefined),
			Gender: new FormControl<Gender | null | undefined>(undefined),
			PhoneNumber: new FormControl<string | null | undefined>(undefined),
			MobilePhoneNumber: new FormControl<string | null | undefined>(undefined),
			HomePhoneNumber: new FormControl<string | null | undefined>(undefined),
			BusinessPhoneNumber: new FormControl<string | null | undefined>(undefined),
			EmailAddress: new FormControl<string | null | undefined>(undefined),
			PersonalEmailAddress: new FormControl<string | null | undefined>(undefined),
			BusinessEmailAddress: new FormControl<string | null | undefined>(undefined),
			PartyTypeString: new FormControl<string | null | undefined>(undefined),
			GenderString: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p>Associates a new key value with a specific profile, such as a Contact Record ContactId.</p> <p>A profile object can have a single unique key and any number of additional keys that can be used to identify the profile that it belongs to.</p>
		 * Post domains/{DomainName}/profiles/keys
		 * @param {string} DomainName The unique name of the domain.
		 * @return {AddProfileKeyResponse} Success
		 */
		AddProfileKey(DomainName: string, requestBody: AddProfileKeyPostBody): Observable<AddProfileKeyResponse> {
			return this.http.post<AddProfileKeyResponse>(this.baseUri + 'domains/' + (DomainName == null ? '' : encodeURIComponent(DomainName)) + '/profiles/keys', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a new calculated attribute definition. After creation, new object data ingested into Customer Profiles will be included in the calculated attribute, which can be retrieved for a profile using the <a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_GetCalculatedAttributeForProfile.html">GetCalculatedAttributeForProfile</a> API. Defining a calculated attribute makes it available for all profiles within a domain. Each calculated attribute can only reference one <code>ObjectType</code> and at most, two fields from that <code>ObjectType</code>.
		 * Post domains/{DomainName}/calculated-attributes/{CalculatedAttributeName}
		 * @param {string} DomainName The unique name of the domain.
		 * @param {string} CalculatedAttributeName The unique name of the calculated attribute.
		 * @return {CreateCalculatedAttributeDefinitionResponse} Success
		 */
		CreateCalculatedAttributeDefinition(DomainName: string, CalculatedAttributeName: string, requestBody: CreateCalculatedAttributeDefinitionPostBody): Observable<CreateCalculatedAttributeDefinitionResponse> {
			return this.http.post<CreateCalculatedAttributeDefinitionResponse>(this.baseUri + 'domains/' + (DomainName == null ? '' : encodeURIComponent(DomainName)) + '/calculated-attributes/' + (CalculatedAttributeName == null ? '' : encodeURIComponent(CalculatedAttributeName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an existing calculated attribute definition. Note that deleting a default calculated attribute is possible, however once deleted, you will be unable to undo that action and will need to recreate it on your own using the CreateCalculatedAttributeDefinition API if you want it back.
		 * Delete domains/{DomainName}/calculated-attributes/{CalculatedAttributeName}
		 * @param {string} DomainName The unique name of the domain.
		 * @param {string} CalculatedAttributeName The unique name of the calculated attribute.
		 * @return {DeleteCalculatedAttributeDefinitionResponse} Success
		 */
		DeleteCalculatedAttributeDefinition(DomainName: string, CalculatedAttributeName: string): Observable<DeleteCalculatedAttributeDefinitionResponse> {
			return this.http.delete<DeleteCalculatedAttributeDefinitionResponse>(this.baseUri + 'domains/' + (DomainName == null ? '' : encodeURIComponent(DomainName)) + '/calculated-attributes/' + (CalculatedAttributeName == null ? '' : encodeURIComponent(CalculatedAttributeName)), {});
		}

		/**
		 * Provides more information on a calculated attribute definition for Customer Profiles.
		 * Get domains/{DomainName}/calculated-attributes/{CalculatedAttributeName}
		 * @param {string} DomainName The unique name of the domain.
		 * @param {string} CalculatedAttributeName The unique name of the calculated attribute.
		 * @return {GetCalculatedAttributeDefinitionResponse} Success
		 */
		GetCalculatedAttributeDefinition(DomainName: string, CalculatedAttributeName: string): Observable<GetCalculatedAttributeDefinitionResponse> {
			return this.http.get<GetCalculatedAttributeDefinitionResponse>(this.baseUri + 'domains/' + (DomainName == null ? '' : encodeURIComponent(DomainName)) + '/calculated-attributes/' + (CalculatedAttributeName == null ? '' : encodeURIComponent(CalculatedAttributeName)), {});
		}

		/**
		 * Updates an existing calculated attribute definition. When updating the Conditions, note that increasing the date range of a calculated attribute will not trigger inclusion of historical data greater than the current date range.
		 * Put domains/{DomainName}/calculated-attributes/{CalculatedAttributeName}
		 * @param {string} DomainName The unique name of the domain.
		 * @param {string} CalculatedAttributeName The unique name of the calculated attribute.
		 * @return {UpdateCalculatedAttributeDefinitionResponse} Success
		 */
		UpdateCalculatedAttributeDefinition(DomainName: string, CalculatedAttributeName: string, requestBody: UpdateCalculatedAttributeDefinitionPutBody): Observable<UpdateCalculatedAttributeDefinitionResponse> {
			return this.http.put<UpdateCalculatedAttributeDefinitionResponse>(this.baseUri + 'domains/' + (DomainName == null ? '' : encodeURIComponent(DomainName)) + '/calculated-attributes/' + (CalculatedAttributeName == null ? '' : encodeURIComponent(CalculatedAttributeName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a domain, which is a container for all customer data, such as customer profile attributes, object types, profile keys, and encryption keys. You can create multiple domains, and each domain can have multiple third-party integrations.</p> <p>Each Amazon Connect instance can be associated with only one domain. Multiple Amazon Connect instances can be associated with one domain.</p> <p>Use this API or <a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_UpdateDomain.html">UpdateDomain</a> to enable <a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_GetMatches.html">identity resolution</a>: set <code>Matching</code> to true.</p> <p>To prevent cross-service impersonation when you call this API, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/cross-service-confused-deputy-prevention.html">Cross-service confused deputy prevention</a> for sample policies that you should apply. </p>
		 * Post domains/{DomainName}
		 * @param {string} DomainName The unique name of the domain.
		 * @return {CreateDomainResponse} Success
		 */
		CreateDomain(DomainName: string, requestBody: CreateDomainPostBody): Observable<CreateDomainResponse> {
			return this.http.post<CreateDomainResponse>(this.baseUri + 'domains/' + (DomainName == null ? '' : encodeURIComponent(DomainName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a specific domain and all of its customer data, such as customer profile attributes and their related objects.
		 * Delete domains/{DomainName}
		 * @param {string} DomainName The unique name of the domain.
		 * @return {DeleteDomainResponse} Success
		 */
		DeleteDomain(DomainName: string): Observable<DeleteDomainResponse> {
			return this.http.delete<DeleteDomainResponse>(this.baseUri + 'domains/' + (DomainName == null ? '' : encodeURIComponent(DomainName)), {});
		}

		/**
		 * Returns information about a specific domain.
		 * Get domains/{DomainName}
		 * @param {string} DomainName The unique name of the domain.
		 * @return {GetDomainResponse} Success
		 */
		GetDomain(DomainName: string): Observable<GetDomainResponse> {
			return this.http.get<GetDomainResponse>(this.baseUri + 'domains/' + (DomainName == null ? '' : encodeURIComponent(DomainName)), {});
		}

		/**
		 * <p>Updates the properties of a domain, including creating or selecting a dead letter queue or an encryption key.</p> <p>After a domain is created, the name can’t be changed.</p> <p>Use this API or <a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_CreateDomain.html">CreateDomain</a> to enable <a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_GetMatches.html">identity resolution</a>: set <code>Matching</code> to true.</p> <p>To prevent cross-service impersonation when you call this API, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/cross-service-confused-deputy-prevention.html">Cross-service confused deputy prevention</a> for sample policies that you should apply. </p> <p>To add or remove tags on an existing Domain, see <a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_TagResource.html">TagResource</a>/<a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_UntagResource.html">UntagResource</a>.</p>
		 * Put domains/{DomainName}
		 * @param {string} DomainName The unique name of the domain.
		 * @return {UpdateDomainResponse} Success
		 */
		UpdateDomain(DomainName: string, requestBody: UpdateDomainPutBody): Observable<UpdateDomainResponse> {
			return this.http.put<UpdateDomainResponse>(this.baseUri + 'domains/' + (DomainName == null ? '' : encodeURIComponent(DomainName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates an event stream, which is a subscription to real-time events, such as when profiles are created and updated through Amazon Connect Customer Profiles.</p> <p>Each event stream can be associated with only one Kinesis Data Stream destination in the same region and Amazon Web Services account as the customer profiles domain</p>
		 * Post domains/{DomainName}/event-streams/{EventStreamName}
		 * @param {string} DomainName The unique name of the domain.
		 * @param {string} EventStreamName The name of the event stream.
		 * @return {CreateEventStreamResponse} Success
		 */
		CreateEventStream(DomainName: string, EventStreamName: string, requestBody: CreateEventStreamPostBody): Observable<CreateEventStreamResponse> {
			return this.http.post<CreateEventStreamResponse>(this.baseUri + 'domains/' + (DomainName == null ? '' : encodeURIComponent(DomainName)) + '/event-streams/' + (EventStreamName == null ? '' : encodeURIComponent(EventStreamName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Disables and deletes the specified event stream.
		 * Delete domains/{DomainName}/event-streams/{EventStreamName}
		 * @param {string} DomainName The unique name of the domain.
		 * @param {string} EventStreamName The name of the event stream
		 * @return {DeleteEventStreamResponse} Success
		 */
		DeleteEventStream(DomainName: string, EventStreamName: string): Observable<DeleteEventStreamResponse> {
			return this.http.delete<DeleteEventStreamResponse>(this.baseUri + 'domains/' + (DomainName == null ? '' : encodeURIComponent(DomainName)) + '/event-streams/' + (EventStreamName == null ? '' : encodeURIComponent(EventStreamName)), {});
		}

		/**
		 * Returns information about the specified event stream in a specific domain.
		 * Get domains/{DomainName}/event-streams/{EventStreamName}
		 * @param {string} DomainName The unique name of the domain.
		 * @param {string} EventStreamName The name of the event stream provided during create operations.
		 * @return {GetEventStreamResponse} Success
		 */
		GetEventStream(DomainName: string, EventStreamName: string): Observable<GetEventStreamResponse> {
			return this.http.get<GetEventStreamResponse>(this.baseUri + 'domains/' + (DomainName == null ? '' : encodeURIComponent(DomainName)) + '/event-streams/' + (EventStreamName == null ? '' : encodeURIComponent(EventStreamName)), {});
		}

		/**
		 * Creates an integration workflow. An integration workflow is an async process which ingests historic data and sets up an integration for ongoing updates. The supported Amazon AppFlow sources are Salesforce, ServiceNow, and Marketo.
		 * Post domains/{DomainName}/workflows/integrations
		 * @param {string} DomainName The unique name of the domain.
		 * @return {CreateIntegrationWorkflowResponse} Success
		 */
		CreateIntegrationWorkflow(DomainName: string, requestBody: CreateIntegrationWorkflowPostBody): Observable<CreateIntegrationWorkflowResponse> {
			return this.http.post<CreateIntegrationWorkflowResponse>(this.baseUri + 'domains/' + (DomainName == null ? '' : encodeURIComponent(DomainName)) + '/workflows/integrations', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a standard profile.</p> <p>A standard profile represents the following attributes for a customer profile in a domain.</p>
		 * Post domains/{DomainName}/profiles
		 * @param {string} DomainName The unique name of the domain.
		 * @return {CreateProfileResponse} Success
		 */
		CreateProfile(DomainName: string, requestBody: CreateProfilePostBody): Observable<CreateProfileResponse> {
			return this.http.post<CreateProfileResponse>(this.baseUri + 'domains/' + (DomainName == null ? '' : encodeURIComponent(DomainName)) + '/profiles', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Updates the properties of a profile. The ProfileId is required for updating a customer profile.</p> <p>When calling the UpdateProfile API, specifying an empty string value means that any existing value will be removed. Not specifying a string value means that any value already there will be kept.</p>
		 * Put domains/{DomainName}/profiles
		 * @param {string} DomainName The unique name of the domain.
		 * @return {UpdateProfileResponse} Success
		 */
		UpdateProfile(DomainName: string, requestBody: UpdateProfilePutBody): Observable<UpdateProfileResponse> {
			return this.http.put<UpdateProfileResponse>(this.baseUri + 'domains/' + (DomainName == null ? '' : encodeURIComponent(DomainName)) + '/profiles', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes an integration from a specific domain.
		 * Post domains/{DomainName}/integrations/delete
		 * @param {string} DomainName The unique name of the domain.
		 * @return {DeleteIntegrationResponse} Success
		 */
		DeleteIntegration(DomainName: string, requestBody: DeleteIntegrationPostBody): Observable<DeleteIntegrationResponse> {
			return this.http.post<DeleteIntegrationResponse>(this.baseUri + 'domains/' + (DomainName == null ? '' : encodeURIComponent(DomainName)) + '/integrations/delete', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the standard customer profile and all data pertaining to the profile.
		 * Post domains/{DomainName}/profiles/delete
		 * @param {string} DomainName The unique name of the domain.
		 * @return {DeleteProfileResponse} Success
		 */
		DeleteProfile(DomainName: string, requestBody: DeleteProfilePostBody): Observable<DeleteProfileResponse> {
			return this.http.post<DeleteProfileResponse>(this.baseUri + 'domains/' + (DomainName == null ? '' : encodeURIComponent(DomainName)) + '/profiles/delete', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes a searchable key from a customer profile.
		 * Post domains/{DomainName}/profiles/keys/delete
		 * @param {string} DomainName The unique name of the domain.
		 * @return {DeleteProfileKeyResponse} Success
		 */
		DeleteProfileKey(DomainName: string, requestBody: DeleteProfileKeyPostBody): Observable<DeleteProfileKeyResponse> {
			return this.http.post<DeleteProfileKeyResponse>(this.baseUri + 'domains/' + (DomainName == null ? '' : encodeURIComponent(DomainName)) + '/profiles/keys/delete', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes an object associated with a profile of a given ProfileObjectType.
		 * Post domains/{DomainName}/profiles/objects/delete
		 * @param {string} DomainName The unique name of the domain.
		 * @return {DeleteProfileObjectResponse} Success
		 */
		DeleteProfileObject(DomainName: string, requestBody: DeleteProfileObjectPostBody): Observable<DeleteProfileObjectResponse> {
			return this.http.post<DeleteProfileObjectResponse>(this.baseUri + 'domains/' + (DomainName == null ? '' : encodeURIComponent(DomainName)) + '/profiles/objects/delete', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes a ProfileObjectType from a specific domain as well as removes all the ProfileObjects of that type. It also disables integrations from this specific ProfileObjectType. In addition, it scrubs all of the fields of the standard profile that were populated from this ProfileObjectType.
		 * Delete domains/{DomainName}/object-types/{ObjectTypeName}
		 * @param {string} DomainName The unique name of the domain.
		 * @param {string} ObjectTypeName The name of the profile object type.
		 * @return {DeleteProfileObjectTypeResponse} Success
		 */
		DeleteProfileObjectType(DomainName: string, ObjectTypeName: string): Observable<DeleteProfileObjectTypeResponse> {
			return this.http.delete<DeleteProfileObjectTypeResponse>(this.baseUri + 'domains/' + (DomainName == null ? '' : encodeURIComponent(DomainName)) + '/object-types/' + (ObjectTypeName == null ? '' : encodeURIComponent(ObjectTypeName)), {});
		}

		/**
		 * Returns the object types for a specific domain.
		 * Get domains/{DomainName}/object-types/{ObjectTypeName}
		 * @param {string} DomainName The unique name of the domain.
		 * @param {string} ObjectTypeName The name of the profile object type.
		 * @return {GetProfileObjectTypeResponse} Success
		 */
		GetProfileObjectType(DomainName: string, ObjectTypeName: string): Observable<GetProfileObjectTypeResponse> {
			return this.http.get<GetProfileObjectTypeResponse>(this.baseUri + 'domains/' + (DomainName == null ? '' : encodeURIComponent(DomainName)) + '/object-types/' + (ObjectTypeName == null ? '' : encodeURIComponent(ObjectTypeName)), {});
		}

		/**
		 * <p>Defines a ProfileObjectType.</p> <p>To add or remove tags on an existing ObjectType, see <a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_TagResource.html"> TagResource</a>/<a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_UntagResource.html">UntagResource</a>.</p>
		 * Put domains/{DomainName}/object-types/{ObjectTypeName}
		 * @param {string} DomainName The unique name of the domain.
		 * @param {string} ObjectTypeName The name of the profile object type.
		 * @return {PutProfileObjectTypeResponse} Success
		 */
		PutProfileObjectType(DomainName: string, ObjectTypeName: string, requestBody: PutProfileObjectTypePutBody): Observable<PutProfileObjectTypeResponse> {
			return this.http.put<PutProfileObjectTypeResponse>(this.baseUri + 'domains/' + (DomainName == null ? '' : encodeURIComponent(DomainName)) + '/object-types/' + (ObjectTypeName == null ? '' : encodeURIComponent(ObjectTypeName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the specified workflow and all its corresponding resources. This is an async process.
		 * Delete domains/{DomainName}/workflows/{WorkflowId}
		 * @param {string} DomainName The unique name of the domain.
		 * @param {string} WorkflowId Unique identifier for the workflow.
		 * @return {DeleteWorkflowResponse} Success
		 */
		DeleteWorkflow(DomainName: string, WorkflowId: string): Observable<DeleteWorkflowResponse> {
			return this.http.delete<DeleteWorkflowResponse>(this.baseUri + 'domains/' + (DomainName == null ? '' : encodeURIComponent(DomainName)) + '/workflows/' + (WorkflowId == null ? '' : encodeURIComponent(WorkflowId)), {});
		}

		/**
		 * Get details of specified workflow.
		 * Get domains/{DomainName}/workflows/{WorkflowId}
		 * @param {string} DomainName The unique name of the domain.
		 * @param {string} WorkflowId Unique identifier for the workflow.
		 * @return {GetWorkflowResponse} Success
		 */
		GetWorkflow(DomainName: string, WorkflowId: string): Observable<GetWorkflowResponse> {
			return this.http.get<GetWorkflowResponse>(this.baseUri + 'domains/' + (DomainName == null ? '' : encodeURIComponent(DomainName)) + '/workflows/' + (WorkflowId == null ? '' : encodeURIComponent(WorkflowId)), {});
		}

		/**
		 * <p>Tests the auto-merging settings of your Identity Resolution Job without merging your data. It randomly selects a sample of matching groups from the existing matching results, and applies the automerging settings that you provided. You can then view the number of profiles in the sample, the number of matches, and the number of profiles identified to be merged. This enables you to evaluate the accuracy of the attributes in your matching list. </p> <p>You can't view which profiles are matched and would be merged.</p> <important> <p>We strongly recommend you use this API to do a dry run of the automerging process before running the Identity Resolution Job. Include <b>at least</b> two matching attributes. If your matching list includes too few attributes (such as only <code>FirstName</code> or only <code>LastName</code>), there may be a large number of matches. This increases the chances of erroneous merges.</p> </important>
		 * Post domains/{DomainName}/identity-resolution-jobs/auto-merging-preview
		 * @param {string} DomainName The unique name of the domain.
		 * @return {GetAutoMergingPreviewResponse} Success
		 */
		GetAutoMergingPreview(DomainName: string, requestBody: GetAutoMergingPreviewPostBody): Observable<GetAutoMergingPreviewResponse> {
			return this.http.post<GetAutoMergingPreviewResponse>(this.baseUri + 'domains/' + (DomainName == null ? '' : encodeURIComponent(DomainName)) + '/identity-resolution-jobs/auto-merging-preview', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieve a calculated attribute for a customer profile.
		 * Get domains/{DomainName}/profile/{ProfileId}/calculated-attributes/{CalculatedAttributeName}
		 * @param {string} DomainName The unique name of the domain.
		 * @param {string} ProfileId The unique identifier of a customer profile.
		 * @param {string} CalculatedAttributeName The unique name of the calculated attribute.
		 * @return {GetCalculatedAttributeForProfileResponse} Success
		 */
		GetCalculatedAttributeForProfile(DomainName: string, ProfileId: string, CalculatedAttributeName: string): Observable<GetCalculatedAttributeForProfileResponse> {
			return this.http.get<GetCalculatedAttributeForProfileResponse>(this.baseUri + 'domains/' + (DomainName == null ? '' : encodeURIComponent(DomainName)) + '/profile/' + (ProfileId == null ? '' : encodeURIComponent(ProfileId)) + '/calculated-attributes/' + (CalculatedAttributeName == null ? '' : encodeURIComponent(CalculatedAttributeName)), {});
		}

		/**
		 * <p>Returns information about an Identity Resolution Job in a specific domain. </p> <p>Identity Resolution Jobs are set up using the Amazon Connect admin console. For more information, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/use-identity-resolution.html">Use Identity Resolution to consolidate similar profiles</a>.</p>
		 * Get domains/{DomainName}/identity-resolution-jobs/{JobId}
		 * @param {string} DomainName The unique name of the domain.
		 * @param {string} JobId The unique identifier of the Identity Resolution Job.
		 * @return {GetIdentityResolutionJobResponse} Success
		 */
		GetIdentityResolutionJob(DomainName: string, JobId: string): Observable<GetIdentityResolutionJobResponse> {
			return this.http.get<GetIdentityResolutionJobResponse>(this.baseUri + 'domains/' + (DomainName == null ? '' : encodeURIComponent(DomainName)) + '/identity-resolution-jobs/' + (JobId == null ? '' : encodeURIComponent(JobId)), {});
		}

		/**
		 * Returns an integration for a domain.
		 * Post domains/{DomainName}/integrations
		 * @param {string} DomainName The unique name of the domain.
		 * @return {GetIntegrationResponse} Success
		 */
		GetIntegration(DomainName: string, requestBody: GetIntegrationPostBody): Observable<GetIntegrationResponse> {
			return this.http.post<GetIntegrationResponse>(this.baseUri + 'domains/' + (DomainName == null ? '' : encodeURIComponent(DomainName)) + '/integrations', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all of the integrations in your domain.
		 * Get domains/{DomainName}/integrations
		 * @param {string} DomainName The unique name of the domain.
		 * @param {string} next_token The pagination token from the previous ListIntegrations API call.
		 * @param {number} max_results The maximum number of objects returned per page.
		 * @param {boolean} include_hidden Boolean to indicate if hidden integration should be returned. Defaults to <code>False</code>.
		 * @return {ListIntegrationsResponse} Success
		 */
		ListIntegrations(DomainName: string, next_token: string | null | undefined, max_results: number | null | undefined, include_hidden: boolean | null | undefined): Observable<ListIntegrationsResponse> {
			return this.http.get<ListIntegrationsResponse>(this.baseUri + 'domains/' + (DomainName == null ? '' : encodeURIComponent(DomainName)) + '/integrations&next_token=' + (next_token == null ? '' : encodeURIComponent(next_token)) + '&max_results=' + max_results + '&include_hidden=' + include_hidden, {});
		}

		/**
		 * <p>Adds an integration between the service and a third-party service, which includes Amazon AppFlow and Amazon Connect.</p> <p>An integration can belong to only one domain.</p> <p>To add or remove tags on an existing Integration, see <a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_TagResource.html"> TagResource </a>/<a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_UntagResource.html"> UntagResource</a>.</p>
		 * Put domains/{DomainName}/integrations
		 * @param {string} DomainName The unique name of the domain.
		 * @return {PutIntegrationResponse} Success
		 */
		PutIntegration(DomainName: string, requestBody: PutIntegrationPutBody): Observable<PutIntegrationResponse> {
			return this.http.put<PutIntegrationResponse>(this.baseUri + 'domains/' + (DomainName == null ? '' : encodeURIComponent(DomainName)) + '/integrations', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Before calling this API, use <a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_CreateDomain.html">CreateDomain</a> or <a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_UpdateDomain.html">UpdateDomain</a> to enable identity resolution: set <code>Matching</code> to true.</p> <p>GetMatches returns potentially matching profiles, based on the results of the latest run of a machine learning process. </p> <important> <p>The process of matching duplicate profiles. If <code>Matching</code> = <code>true</code>, Amazon Connect Customer Profiles starts a weekly batch process called Identity Resolution Job. If you do not specify a date and time for Identity Resolution Job to run, by default it runs every Saturday at 12AM UTC to detect duplicate profiles in your domains. </p> <p>After the Identity Resolution Job completes, use the <a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_GetMatches.html">GetMatches</a> API to return and review the results. Or, if you have configured <code>ExportingConfig</code> in the <code>MatchingRequest</code>, you can download the results from S3.</p> </important> <p>Amazon Connect uses the following profile attributes to identify matches:</p> <ul> <li> <p>PhoneNumber</p> </li> <li> <p>HomePhoneNumber</p> </li> <li> <p>BusinessPhoneNumber</p> </li> <li> <p>MobilePhoneNumber</p> </li> <li> <p>EmailAddress</p> </li> <li> <p>PersonalEmailAddress</p> </li> <li> <p>BusinessEmailAddress</p> </li> <li> <p>FullName</p> </li> </ul> <p>For example, two or more profiles—with spelling mistakes such as <b>John Doe</b> and <b>Jhn Doe</b>, or different casing email addresses such as <b>JOHN_DOE@ANYCOMPANY.COM</b> and <b>johndoe@anycompany.com</b>, or different phone number formats such as <b>555-010-0000</b> and <b>+1-555-010-0000</b>—can be detected as belonging to the same customer <b>John Doe</b> and merged into a unified profile.</p>
		 * Get domains/{DomainName}/matches
		 * @param {string} next_token The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
		 * @param {number} max_results The maximum number of results to return per page.
		 * @param {string} DomainName The unique name of the domain.
		 * @return {GetMatchesResponse} Success
		 */
		GetMatches(next_token: string | null | undefined, max_results: number | null | undefined, DomainName: string): Observable<GetMatchesResponse> {
			return this.http.get<GetMatchesResponse>(this.baseUri + 'domains/' + (DomainName == null ? '' : encodeURIComponent(DomainName)) + '/matches?next_token=' + (next_token == null ? '' : encodeURIComponent(next_token)) + '&max_results=' + max_results, {});
		}

		/**
		 * Returns a set of profiles that belong to the same matching group using the <code>matchId</code> or <code>profileId</code>. You can also specify the type of matching that you want for finding similar profiles using either <code>RULE_BASED_MATCHING</code> or <code>ML_BASED_MATCHING</code>.
		 * Post domains/{DomainName}/matches
		 * @param {string} next_token The pagination token from the previous <code>GetSimilarProfiles</code> API call.
		 * @param {number} max_results The maximum number of objects returned per page.
		 * @param {string} DomainName The unique name of the domain.
		 * @return {GetSimilarProfilesResponse} Success
		 */
		GetSimilarProfiles(next_token: string | null | undefined, max_results: number | null | undefined, DomainName: string, requestBody: GetSimilarProfilesPostBody): Observable<GetSimilarProfilesResponse> {
			return this.http.post<GetSimilarProfilesResponse>(this.baseUri + 'domains/' + (DomainName == null ? '' : encodeURIComponent(DomainName)) + '/matches?next_token=' + (next_token == null ? '' : encodeURIComponent(next_token)) + '&max_results=' + max_results, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns the template information for a specific object type.</p> <p>A template is a predefined ProfileObjectType, such as “Salesforce-Account” or “Salesforce-Contact.” When a user sends a ProfileObject, using the PutProfileObject API, with an ObjectTypeName that matches one of the TemplateIds, it uses the mappings from the template.</p>
		 * Get templates/{TemplateId}
		 * @param {string} TemplateId A unique identifier for the object template.
		 * @return {GetProfileObjectTypeTemplateResponse} Success
		 */
		GetProfileObjectTypeTemplate(TemplateId: string): Observable<GetProfileObjectTypeTemplateResponse> {
			return this.http.get<GetProfileObjectTypeTemplateResponse>(this.baseUri + 'templates/' + (TemplateId == null ? '' : encodeURIComponent(TemplateId)), {});
		}

		/**
		 * Get granular list of steps in workflow.
		 * Get domains/{DomainName}/workflows/{WorkflowId}/steps
		 * @param {string} DomainName The unique name of the domain.
		 * @param {string} WorkflowId Unique identifier for the workflow.
		 * @param {string} next_token The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
		 * @param {number} max_results The maximum number of results to return per page.
		 * @return {GetWorkflowStepsResponse} Success
		 */
		GetWorkflowSteps(DomainName: string, WorkflowId: string, next_token: string | null | undefined, max_results: number | null | undefined): Observable<GetWorkflowStepsResponse> {
			return this.http.get<GetWorkflowStepsResponse>(this.baseUri + 'domains/' + (DomainName == null ? '' : encodeURIComponent(DomainName)) + '/workflows/' + (WorkflowId == null ? '' : encodeURIComponent(WorkflowId)) + '/steps&next_token=' + (next_token == null ? '' : encodeURIComponent(next_token)) + '&max_results=' + max_results, {});
		}

		/**
		 * Lists all of the integrations associated to a specific URI in the AWS account.
		 * Post integrations
		 * @param {string} next_token The pagination token from the previous ListAccountIntegrations API call.
		 * @param {number} max_results The maximum number of objects returned per page.
		 * @param {boolean} include_hidden Boolean to indicate if hidden integration should be returned. Defaults to <code>False</code>.
		 * @return {ListAccountIntegrationsResponse} Success
		 */
		ListAccountIntegrations(next_token: string | null | undefined, max_results: number | null | undefined, include_hidden: boolean | null | undefined, requestBody: ListAccountIntegrationsPostBody): Observable<ListAccountIntegrationsResponse> {
			return this.http.post<ListAccountIntegrationsResponse>(this.baseUri + 'integrations?next_token=' + (next_token == null ? '' : encodeURIComponent(next_token)) + '&max_results=' + max_results + '&include_hidden=' + include_hidden, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists calculated attribute definitions for Customer Profiles
		 * Get domains/{DomainName}/calculated-attributes
		 * @param {string} DomainName The unique name of the domain.
		 * @param {string} next_token The pagination token from the previous call to ListCalculatedAttributeDefinitions.
		 * @param {number} max_results The maximum number of calculated attribute definitions returned per page.
		 * @return {ListCalculatedAttributeDefinitionsResponse} Success
		 */
		ListCalculatedAttributeDefinitions(DomainName: string, next_token: string | null | undefined, max_results: number | null | undefined): Observable<ListCalculatedAttributeDefinitionsResponse> {
			return this.http.get<ListCalculatedAttributeDefinitionsResponse>(this.baseUri + 'domains/' + (DomainName == null ? '' : encodeURIComponent(DomainName)) + '/calculated-attributes&next_token=' + (next_token == null ? '' : encodeURIComponent(next_token)) + '&max_results=' + max_results, {});
		}

		/**
		 * Retrieve a list of calculated attributes for a customer profile.
		 * Get domains/{DomainName}/profile/{ProfileId}/calculated-attributes
		 * @param {string} next_token The pagination token from the previous call to ListCalculatedAttributesForProfile.
		 * @param {number} max_results The maximum number of calculated attributes returned per page.
		 * @param {string} DomainName The unique name of the domain.
		 * @param {string} ProfileId The unique identifier of a customer profile.
		 * @return {ListCalculatedAttributesForProfileResponse} Success
		 */
		ListCalculatedAttributesForProfile(next_token: string | null | undefined, max_results: number | null | undefined, DomainName: string, ProfileId: string): Observable<ListCalculatedAttributesForProfileResponse> {
			return this.http.get<ListCalculatedAttributesForProfileResponse>(this.baseUri + 'domains/' + (DomainName == null ? '' : encodeURIComponent(DomainName)) + '/profile/' + (ProfileId == null ? '' : encodeURIComponent(ProfileId)) + '/calculated-attributes?next_token=' + (next_token == null ? '' : encodeURIComponent(next_token)) + '&max_results=' + max_results, {});
		}

		/**
		 * Returns a list of all the domains for an AWS account that have been created.
		 * Get domains
		 * @param {string} next_token The pagination token from the previous ListDomain API call.
		 * @param {number} max_results The maximum number of objects returned per page.
		 * @return {ListDomainsResponse} Success
		 */
		ListDomains(next_token: string | null | undefined, max_results: number | null | undefined): Observable<ListDomainsResponse> {
			return this.http.get<ListDomainsResponse>(this.baseUri + 'domains?next_token=' + (next_token == null ? '' : encodeURIComponent(next_token)) + '&max_results=' + max_results, {});
		}

		/**
		 * Returns a list of all the event streams in a specific domain.
		 * Get domains/{DomainName}/event-streams
		 * @param {string} DomainName The unique name of the domain.
		 * @param {string} next_token Identifies the next page of results to return.
		 * @param {number} max_results The maximum number of objects returned per page.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListEventStreamsResponse} Success
		 */
		ListEventStreams(DomainName: string, next_token: string | null | undefined, max_results: number | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListEventStreamsResponse> {
			return this.http.get<ListEventStreamsResponse>(this.baseUri + 'domains/' + (DomainName == null ? '' : encodeURIComponent(DomainName)) + '/event-streams&next_token=' + (next_token == null ? '' : encodeURIComponent(next_token)) + '&max_results=' + max_results + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Lists all of the Identity Resolution Jobs in your domain. The response sorts the list by <code>JobStartTime</code>.
		 * Get domains/{DomainName}/identity-resolution-jobs
		 * @param {string} DomainName The unique name of the domain.
		 * @param {string} next_token The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
		 * @param {number} max_results The maximum number of results to return per page.
		 * @return {ListIdentityResolutionJobsResponse} Success
		 */
		ListIdentityResolutionJobs(DomainName: string, next_token: string | null | undefined, max_results: number | null | undefined): Observable<ListIdentityResolutionJobsResponse> {
			return this.http.get<ListIdentityResolutionJobsResponse>(this.baseUri + 'domains/' + (DomainName == null ? '' : encodeURIComponent(DomainName)) + '/identity-resolution-jobs&next_token=' + (next_token == null ? '' : encodeURIComponent(next_token)) + '&max_results=' + max_results, {});
		}

		/**
		 * Lists all of the template information for object types.
		 * Get templates
		 * @param {string} next_token The pagination token from the previous ListObjectTypeTemplates API call.
		 * @param {number} max_results The maximum number of objects returned per page.
		 * @return {ListProfileObjectTypeTemplatesResponse} Success
		 */
		ListProfileObjectTypeTemplates(next_token: string | null | undefined, max_results: number | null | undefined): Observable<ListProfileObjectTypeTemplatesResponse> {
			return this.http.get<ListProfileObjectTypeTemplatesResponse>(this.baseUri + 'templates?next_token=' + (next_token == null ? '' : encodeURIComponent(next_token)) + '&max_results=' + max_results, {});
		}

		/**
		 * Lists all of the templates available within the service.
		 * Get domains/{DomainName}/object-types
		 * @param {string} DomainName The unique name of the domain.
		 * @param {string} next_token Identifies the next page of results to return.
		 * @param {number} max_results The maximum number of objects returned per page.
		 * @return {ListProfileObjectTypesResponse} Success
		 */
		ListProfileObjectTypes(DomainName: string, next_token: string | null | undefined, max_results: number | null | undefined): Observable<ListProfileObjectTypesResponse> {
			return this.http.get<ListProfileObjectTypesResponse>(this.baseUri + 'domains/' + (DomainName == null ? '' : encodeURIComponent(DomainName)) + '/object-types&next_token=' + (next_token == null ? '' : encodeURIComponent(next_token)) + '&max_results=' + max_results, {});
		}

		/**
		 * Returns a list of objects associated with a profile of a given ProfileObjectType.
		 * Post domains/{DomainName}/profiles/objects
		 * @param {string} next_token The pagination token from the previous call to ListProfileObjects.
		 * @param {number} max_results The maximum number of objects returned per page.
		 * @param {string} DomainName The unique name of the domain.
		 * @return {ListProfileObjectsResponse} Success
		 */
		ListProfileObjects(next_token: string | null | undefined, max_results: number | null | undefined, DomainName: string, requestBody: ListProfileObjectsPostBody): Observable<ListProfileObjectsResponse> {
			return this.http.post<ListProfileObjectsResponse>(this.baseUri + 'domains/' + (DomainName == null ? '' : encodeURIComponent(DomainName)) + '/profiles/objects?next_token=' + (next_token == null ? '' : encodeURIComponent(next_token)) + '&max_results=' + max_results, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Adds additional objects to customer profiles of a given ObjectType.</p> <p>When adding a specific profile object, like a Contact Record, an inferred profile can get created if it is not mapped to an existing profile. The resulting profile will only have a phone number populated in the standard ProfileObject. Any additional Contact Records with the same phone number will be mapped to the same inferred profile.</p> <p>When a ProfileObject is created and if a ProfileObjectType already exists for the ProfileObject, it will provide data to a standard profile depending on the ProfileObjectType definition.</p> <p>PutProfileObject needs an ObjectType, which can be created using PutProfileObjectType.</p>
		 * Put domains/{DomainName}/profiles/objects
		 * @param {string} DomainName The unique name of the domain.
		 * @return {PutProfileObjectResponse} Success
		 */
		PutProfileObject(DomainName: string, requestBody: PutProfileObjectPutBody): Observable<PutProfileObjectResponse> {
			return this.http.put<PutProfileObjectResponse>(this.baseUri + 'domains/' + (DomainName == null ? '' : encodeURIComponent(DomainName)) + '/profiles/objects', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a set of <code>MatchIds</code> that belong to the given domain.
		 * Get domains/{DomainName}/profiles/ruleBasedMatches
		 * @param {string} next_token The pagination token from the previous <code>ListRuleBasedMatches</code> API call.
		 * @param {number} max_results The maximum number of <code>MatchIds</code> returned per page.
		 * @param {string} DomainName The unique name of the domain.
		 * @return {ListRuleBasedMatchesResponse} Success
		 */
		ListRuleBasedMatches(next_token: string | null | undefined, max_results: number | null | undefined, DomainName: string): Observable<ListRuleBasedMatchesResponse> {
			return this.http.get<ListRuleBasedMatchesResponse>(this.baseUri + 'domains/' + (DomainName == null ? '' : encodeURIComponent(DomainName)) + '/profiles/ruleBasedMatches?next_token=' + (next_token == null ? '' : encodeURIComponent(next_token)) + '&max_results=' + max_results, {});
		}

		/**
		 * Displays the tags associated with an Amazon Connect Customer Profiles resource. In Connect Customer Profiles, domains, profile object types, and integrations can be tagged.
		 * Get tags/{resourceArn}
		 * @param {string} resourceArn The ARN of the resource for which you want to view tags.
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(resourceArn: string): Observable<ListTagsForResourceResponse> {
			return this.http.get<ListTagsForResourceResponse>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), {});
		}

		/**
		 * <p>Assigns one or more tags (key-value pairs) to the specified Amazon Connect Customer Profiles resource. Tags can help you organize and categorize your resources. You can also use them to scope user permissions by granting a user permission to access or change only resources with certain tag values. In Connect Customer Profiles, domains, profile object types, and integrations can be tagged.</p> <p>Tags don't have any semantic meaning to AWS and are interpreted strictly as strings of characters.</p> <p>You can use the TagResource action with a resource that already has tags. If you specify a new tag key, this tag is appended to the list of tags associated with the resource. If you specify a tag key that is already associated with the resource, the new tag value that you specify replaces the previous value for that tag.</p> <p>You can associate as many as 50 tags with a resource.</p>
		 * Post tags/{resourceArn}
		 * @param {string} resourceArn The ARN of the resource that you're adding tags to.
		 * @return {TagResourceResponse} Success
		 */
		TagResource(resourceArn: string, requestBody: TagResourcePostBody): Observable<TagResourceResponse> {
			return this.http.post<TagResourceResponse>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Query to list all workflows.
		 * Post domains/{DomainName}/workflows
		 * @param {string} DomainName The unique name of the domain.
		 * @param {string} next_token The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
		 * @param {number} max_results The maximum number of results to return per page.
		 * @return {ListWorkflowsResponse} Success
		 */
		ListWorkflows(DomainName: string, next_token: string | null | undefined, max_results: number | null | undefined, requestBody: ListWorkflowsPostBody): Observable<ListWorkflowsResponse> {
			return this.http.post<ListWorkflowsResponse>(this.baseUri + 'domains/' + (DomainName == null ? '' : encodeURIComponent(DomainName)) + '/workflows&next_token=' + (next_token == null ? '' : encodeURIComponent(next_token)) + '&max_results=' + max_results, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Runs an AWS Lambda job that does the following:</p> <ol> <li> <p>All the profileKeys in the <code>ProfileToBeMerged</code> will be moved to the main profile.</p> </li> <li> <p>All the objects in the <code>ProfileToBeMerged</code> will be moved to the main profile.</p> </li> <li> <p>All the <code>ProfileToBeMerged</code> will be deleted at the end.</p> </li> <li> <p>All the profileKeys in the <code>ProfileIdsToBeMerged</code> will be moved to the main profile.</p> </li> <li> <p>Standard fields are merged as follows:</p> <ol> <li> <p>Fields are always "union"-ed if there are no conflicts in standard fields or attributeKeys.</p> </li> <li> <p>When there are conflicting fields:</p> <ol> <li> <p>If no <code>SourceProfileIds</code> entry is specified, the main Profile value is always taken. </p> </li> <li> <p>If a <code>SourceProfileIds</code> entry is specified, the specified profileId is always taken, even if it is a NULL value.</p> </li> </ol> </li> </ol> </li> </ol> <p>You can use MergeProfiles together with <a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_GetMatches.html">GetMatches</a>, which returns potentially matching profiles, or use it with the results of another matching system. After profiles have been merged, they cannot be separated (unmerged).</p>
		 * Post domains/{DomainName}/profiles/objects/merge
		 * @param {string} DomainName The unique name of the domain.
		 * @return {MergeProfilesResponse} Success
		 */
		MergeProfiles(DomainName: string, requestBody: MergeProfilesPostBody): Observable<MergeProfilesResponse> {
			return this.http.post<MergeProfilesResponse>(this.baseUri + 'domains/' + (DomainName == null ? '' : encodeURIComponent(DomainName)) + '/profiles/objects/merge', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Searches for profiles within a specific domain using one or more predefined search keys (e.g., _fullName, _phone, _email, _account, etc.) and/or custom-defined search keys. A search key is a data type pair that consists of a <code>KeyName</code> and <code>Values</code> list.</p> <p>This operation supports searching for profiles with a minimum of 1 key-value(s) pair and up to 5 key-value(s) pairs using either <code>AND</code> or <code>OR</code> logic.</p>
		 * Post domains/{DomainName}/profiles/search
		 * @param {string} next_token The pagination token from the previous SearchProfiles API call.
		 * @param {number} max_results <p>The maximum number of objects returned per page.</p> <p>The default is 20 if this parameter is not included in the request.</p>
		 * @param {string} DomainName The unique name of the domain.
		 * @return {SearchProfilesResponse} Success
		 */
		SearchProfiles(next_token: string | null | undefined, max_results: number | null | undefined, DomainName: string, requestBody: SearchProfilesPostBody): Observable<SearchProfilesResponse> {
			return this.http.post<SearchProfilesResponse>(this.baseUri + 'domains/' + (DomainName == null ? '' : encodeURIComponent(DomainName)) + '/profiles/search?next_token=' + (next_token == null ? '' : encodeURIComponent(next_token)) + '&max_results=' + max_results, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes one or more tags from the specified Amazon Connect Customer Profiles resource. In Connect Customer Profiles, domains, profile object types, and integrations can be tagged.
		 * Delete tags/{resourceArn}#tagKeys
		 * @param {string} resourceArn The ARN of the resource from which you are removing tags.
		 * @param {Array<string>} tagKeys The list of tag keys to remove from the resource.
		 * @return {UntagResourceResponse} Success
		 */
		UntagResource(resourceArn: string, tagKeys: Array<string>): Observable<UntagResourceResponse> {
			return this.http.delete<UntagResourceResponse>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)) + '#tagKeys&' + tagKeys.map(z => `tagKeys=${encodeURIComponent(z)}`).join('&'), {});
		}
	}

	export interface AddProfileKeyPostBody {

		/**
		 * The unique identifier of a customer profile.
		 * Required
		 */
		ProfileId: string;

		/**
		 * A searchable identifier of a customer profile. The predefined keys you can use include: _account, _profileId, _assetId, _caseId, _orderId, _fullName, _phone, _email, _ctrContactId, _marketoLeadId, _salesforceAccountId, _salesforceContactId, _salesforceAssetId, _zendeskUserId, _zendeskExternalId, _zendeskTicketId, _serviceNowSystemId, _serviceNowIncidentId, _segmentUserId, _shopifyCustomerId, _shopifyOrderId.
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		KeyName: string;

		/**
		 * A list of key values.
		 * Required
		 */
		Values: Array<string>;
	}
	export interface AddProfileKeyPostBodyFormProperties {

		/**
		 * The unique identifier of a customer profile.
		 * Required
		 */
		ProfileId: FormControl<string | null | undefined>,

		/**
		 * A searchable identifier of a customer profile. The predefined keys you can use include: _account, _profileId, _assetId, _caseId, _orderId, _fullName, _phone, _email, _ctrContactId, _marketoLeadId, _salesforceAccountId, _salesforceContactId, _salesforceAssetId, _zendeskUserId, _zendeskExternalId, _zendeskTicketId, _serviceNowSystemId, _serviceNowIncidentId, _segmentUserId, _shopifyCustomerId, _shopifyOrderId.
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		KeyName: FormControl<string | null | undefined>,
	}
	export function CreateAddProfileKeyPostBodyFormGroup() {
		return new FormGroup<AddProfileKeyPostBodyFormProperties>({
			ProfileId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('[a-f0-9]{32}')]),
			KeyName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(64), Validators.pattern('^[a-zA-Z0-9_-]+$')]),
		});

	}

	export interface CreateCalculatedAttributeDefinitionPostBody {

		/**
		 * The display name of the calculated attribute.
		 * Max length: 255
		 * Min length: 1
		 */
		DisplayName?: string | null;

		/**
		 * The description of the calculated attribute.
		 * Max length: 1000
		 * Min length: 1
		 */
		Description?: string | null;

		/**
		 * Mathematical expression and a list of attribute items specified in that expression.
		 * Required
		 */
		AttributeDetails: CreateCalculatedAttributeDefinitionPostBodyAttributeDetails;

		/** The conditions including range, object count, and threshold for the calculated attribute. */
		Conditions?: CreateCalculatedAttributeDefinitionPostBodyConditions;

		/**
		 * The aggregation operation to perform for the calculated attribute.
		 * Required
		 */
		Statistic: Statistic;

		/** The tags used to organize, track, or control access for this resource. */
		Tags?: {[id: string]: string };
	}
	export interface CreateCalculatedAttributeDefinitionPostBodyFormProperties {

		/**
		 * The display name of the calculated attribute.
		 * Max length: 255
		 * Min length: 1
		 */
		DisplayName: FormControl<string | null | undefined>,

		/**
		 * The description of the calculated attribute.
		 * Max length: 1000
		 * Min length: 1
		 */
		Description: FormControl<string | null | undefined>,

		/**
		 * The aggregation operation to perform for the calculated attribute.
		 * Required
		 */
		Statistic: FormControl<Statistic | null | undefined>,

		/** The tags used to organize, track, or control access for this resource. */
		Tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateCalculatedAttributeDefinitionPostBodyFormGroup() {
		return new FormGroup<CreateCalculatedAttributeDefinitionPostBodyFormProperties>({
			DisplayName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255), Validators.pattern('^[a-zA-Z_][a-zA-Z_0-9-\s]*$')]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1000)]),
			Statistic: new FormControl<Statistic | null | undefined>(undefined, [Validators.required]),
			Tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateCalculatedAttributeDefinitionPostBodyAttributeDetails {
		Attributes?: Array<AttributeItem>;
		Expression?: string;
	}
	export interface CreateCalculatedAttributeDefinitionPostBodyAttributeDetailsFormProperties {
		Expression: FormControl<string | null | undefined>,
	}
	export function CreateCreateCalculatedAttributeDefinitionPostBodyAttributeDetailsFormGroup() {
		return new FormGroup<CreateCalculatedAttributeDefinitionPostBodyAttributeDetailsFormProperties>({
			Expression: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateCalculatedAttributeDefinitionPostBodyConditions {
		Range?: Range;
		ObjectCount?: number | null;
		Threshold?: Threshold;
	}
	export interface CreateCalculatedAttributeDefinitionPostBodyConditionsFormProperties {
		ObjectCount: FormControl<number | null | undefined>,
	}
	export function CreateCreateCalculatedAttributeDefinitionPostBodyConditionsFormGroup() {
		return new FormGroup<CreateCalculatedAttributeDefinitionPostBodyConditionsFormProperties>({
			ObjectCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface UpdateCalculatedAttributeDefinitionPutBody {

		/**
		 * The display name of the calculated attribute.
		 * Max length: 255
		 * Min length: 1
		 */
		DisplayName?: string | null;

		/**
		 * The description of the calculated attribute.
		 * Max length: 1000
		 * Min length: 1
		 */
		Description?: string | null;

		/** The conditions including range, object count, and threshold for the calculated attribute. */
		Conditions?: UpdateCalculatedAttributeDefinitionPutBodyConditions;
	}
	export interface UpdateCalculatedAttributeDefinitionPutBodyFormProperties {

		/**
		 * The display name of the calculated attribute.
		 * Max length: 255
		 * Min length: 1
		 */
		DisplayName: FormControl<string | null | undefined>,

		/**
		 * The description of the calculated attribute.
		 * Max length: 1000
		 * Min length: 1
		 */
		Description: FormControl<string | null | undefined>,
	}
	export function CreateUpdateCalculatedAttributeDefinitionPutBodyFormGroup() {
		return new FormGroup<UpdateCalculatedAttributeDefinitionPutBodyFormProperties>({
			DisplayName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255), Validators.pattern('^[a-zA-Z_][a-zA-Z_0-9-\s]*$')]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1000)]),
		});

	}

	export interface UpdateCalculatedAttributeDefinitionPutBodyConditions {
		Range?: Range;
		ObjectCount?: number | null;
		Threshold?: Threshold;
	}
	export interface UpdateCalculatedAttributeDefinitionPutBodyConditionsFormProperties {
		ObjectCount: FormControl<number | null | undefined>,
	}
	export function CreateUpdateCalculatedAttributeDefinitionPutBodyConditionsFormGroup() {
		return new FormGroup<UpdateCalculatedAttributeDefinitionPutBodyConditionsFormProperties>({
			ObjectCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CreateDomainPostBody {

		/**
		 * The default number of days until the data within the domain expires.
		 * Required
		 * Minimum: 1
		 * Maximum: 1098
		 */
		DefaultExpirationDays: number;

		/**
		 * The default encryption key, which is an AWS managed key, is used when no specific type of encryption key is specified. It is used to encrypt all data before it is placed in permanent or semi-permanent storage.
		 * Max length: 255
		 * Min length: 0
		 */
		DefaultEncryptionKey?: string | null;

		/**
		 * The URL of the SQS dead letter queue, which is used for reporting errors associated with ingesting data from third party applications. You must set up a policy on the DeadLetterQueue for the SendMessage operation to enable Amazon Connect Customer Profiles to send messages to the DeadLetterQueue.
		 * Max length: 255
		 * Min length: 0
		 */
		DeadLetterQueueUrl?: string | null;

		/** The flag that enables the matching process of duplicate profiles. */
		Matching?: CreateDomainPostBodyMatching;

		/** The request to enable the rule-based matching. */
		RuleBasedMatching?: CreateDomainPostBodyRuleBasedMatching;

		/** The tags used to organize, track, or control access for this resource. */
		Tags?: {[id: string]: string };
	}
	export interface CreateDomainPostBodyFormProperties {

		/**
		 * The default number of days until the data within the domain expires.
		 * Required
		 * Minimum: 1
		 * Maximum: 1098
		 */
		DefaultExpirationDays: FormControl<number | null | undefined>,

		/**
		 * The default encryption key, which is an AWS managed key, is used when no specific type of encryption key is specified. It is used to encrypt all data before it is placed in permanent or semi-permanent storage.
		 * Max length: 255
		 * Min length: 0
		 */
		DefaultEncryptionKey: FormControl<string | null | undefined>,

		/**
		 * The URL of the SQS dead letter queue, which is used for reporting errors associated with ingesting data from third party applications. You must set up a policy on the DeadLetterQueue for the SendMessage operation to enable Amazon Connect Customer Profiles to send messages to the DeadLetterQueue.
		 * Max length: 255
		 * Min length: 0
		 */
		DeadLetterQueueUrl: FormControl<string | null | undefined>,

		/** The tags used to organize, track, or control access for this resource. */
		Tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateDomainPostBodyFormGroup() {
		return new FormGroup<CreateDomainPostBodyFormProperties>({
			DefaultExpirationDays: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(1), Validators.max(1098)]),
			DefaultEncryptionKey: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(255)]),
			DeadLetterQueueUrl: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(255)]),
			Tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateDomainPostBodyMatching {
		Enabled?: boolean | null;
		JobSchedule?: JobSchedule;
		AutoMerging?: AutoMerging;
		ExportingConfig?: ExportingConfig;
	}
	export interface CreateDomainPostBodyMatchingFormProperties {
		Enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateDomainPostBodyMatchingFormGroup() {
		return new FormGroup<CreateDomainPostBodyMatchingFormProperties>({
			Enabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface CreateDomainPostBodyRuleBasedMatching {
		Enabled?: boolean | null;
		MatchingRules?: Array<MatchingRule>;
		MaxAllowedRuleLevelForMerging?: number | null;
		MaxAllowedRuleLevelForMatching?: number | null;
		AttributeTypesSelector?: AttributeTypesSelector;

		/** How the auto-merging process should resolve conflicts between different profiles. */
		ConflictResolution?: ConflictResolution;

		/** <p>Configuration information about the S3 bucket where Identity Resolution Jobs writes result files. </p> <note> <p>You need to give Customer Profiles service principal write permission to your S3 bucket. Otherwise, you'll get an exception in the API response. For an example policy, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/cross-service-confused-deputy-prevention.html#customer-profiles-cross-service">Amazon Connect Customer Profiles cross-service confused deputy prevention</a>. </p> </note> */
		ExportingConfig?: ExportingConfig;
	}
	export interface CreateDomainPostBodyRuleBasedMatchingFormProperties {
		Enabled: FormControl<boolean | null | undefined>,
		MaxAllowedRuleLevelForMerging: FormControl<number | null | undefined>,
		MaxAllowedRuleLevelForMatching: FormControl<number | null | undefined>,
	}
	export function CreateCreateDomainPostBodyRuleBasedMatchingFormGroup() {
		return new FormGroup<CreateDomainPostBodyRuleBasedMatchingFormProperties>({
			Enabled: new FormControl<boolean | null | undefined>(undefined),
			MaxAllowedRuleLevelForMerging: new FormControl<number | null | undefined>(undefined),
			MaxAllowedRuleLevelForMatching: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface UpdateDomainPutBody {

		/**
		 * The default number of days until the data within the domain expires.
		 * Minimum: 1
		 * Maximum: 1098
		 */
		DefaultExpirationDays?: number | null;

		/**
		 * The default encryption key, which is an AWS managed key, is used when no specific type of encryption key is specified. It is used to encrypt all data before it is placed in permanent or semi-permanent storage. If specified as an empty string, it will clear any existing value.
		 * Max length: 255
		 * Min length: 0
		 */
		DefaultEncryptionKey?: string | null;

		/**
		 * The URL of the SQS dead letter queue, which is used for reporting errors associated with ingesting data from third party applications. If specified as an empty string, it will clear any existing value. You must set up a policy on the DeadLetterQueue for the SendMessage operation to enable Amazon Connect Customer Profiles to send messages to the DeadLetterQueue.
		 * Max length: 255
		 * Min length: 0
		 */
		DeadLetterQueueUrl?: string | null;

		/** The flag that enables the matching process of duplicate profiles. */
		Matching?: UpdateDomainPutBodyMatching;

		/** The request to enable the rule-based matching. */
		RuleBasedMatching?: UpdateDomainPutBodyRuleBasedMatching;

		/** The tags used to organize, track, or control access for this resource. */
		Tags?: {[id: string]: string };
	}
	export interface UpdateDomainPutBodyFormProperties {

		/**
		 * The default number of days until the data within the domain expires.
		 * Minimum: 1
		 * Maximum: 1098
		 */
		DefaultExpirationDays: FormControl<number | null | undefined>,

		/**
		 * The default encryption key, which is an AWS managed key, is used when no specific type of encryption key is specified. It is used to encrypt all data before it is placed in permanent or semi-permanent storage. If specified as an empty string, it will clear any existing value.
		 * Max length: 255
		 * Min length: 0
		 */
		DefaultEncryptionKey: FormControl<string | null | undefined>,

		/**
		 * The URL of the SQS dead letter queue, which is used for reporting errors associated with ingesting data from third party applications. If specified as an empty string, it will clear any existing value. You must set up a policy on the DeadLetterQueue for the SendMessage operation to enable Amazon Connect Customer Profiles to send messages to the DeadLetterQueue.
		 * Max length: 255
		 * Min length: 0
		 */
		DeadLetterQueueUrl: FormControl<string | null | undefined>,

		/** The tags used to organize, track, or control access for this resource. */
		Tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateUpdateDomainPutBodyFormGroup() {
		return new FormGroup<UpdateDomainPutBodyFormProperties>({
			DefaultExpirationDays: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(1098)]),
			DefaultEncryptionKey: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(255)]),
			DeadLetterQueueUrl: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(255)]),
			Tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface UpdateDomainPutBodyMatching {
		Enabled?: boolean | null;
		JobSchedule?: JobSchedule;
		AutoMerging?: AutoMerging;
		ExportingConfig?: ExportingConfig;
	}
	export interface UpdateDomainPutBodyMatchingFormProperties {
		Enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateDomainPutBodyMatchingFormGroup() {
		return new FormGroup<UpdateDomainPutBodyMatchingFormProperties>({
			Enabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UpdateDomainPutBodyRuleBasedMatching {
		Enabled?: boolean | null;
		MatchingRules?: Array<MatchingRule>;
		MaxAllowedRuleLevelForMerging?: number | null;
		MaxAllowedRuleLevelForMatching?: number | null;
		AttributeTypesSelector?: AttributeTypesSelector;

		/** How the auto-merging process should resolve conflicts between different profiles. */
		ConflictResolution?: ConflictResolution;

		/** <p>Configuration information about the S3 bucket where Identity Resolution Jobs writes result files. </p> <note> <p>You need to give Customer Profiles service principal write permission to your S3 bucket. Otherwise, you'll get an exception in the API response. For an example policy, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/cross-service-confused-deputy-prevention.html#customer-profiles-cross-service">Amazon Connect Customer Profiles cross-service confused deputy prevention</a>. </p> </note> */
		ExportingConfig?: ExportingConfig;
	}
	export interface UpdateDomainPutBodyRuleBasedMatchingFormProperties {
		Enabled: FormControl<boolean | null | undefined>,
		MaxAllowedRuleLevelForMerging: FormControl<number | null | undefined>,
		MaxAllowedRuleLevelForMatching: FormControl<number | null | undefined>,
	}
	export function CreateUpdateDomainPutBodyRuleBasedMatchingFormGroup() {
		return new FormGroup<UpdateDomainPutBodyRuleBasedMatchingFormProperties>({
			Enabled: new FormControl<boolean | null | undefined>(undefined),
			MaxAllowedRuleLevelForMerging: new FormControl<number | null | undefined>(undefined),
			MaxAllowedRuleLevelForMatching: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CreateEventStreamPostBody {

		/**
		 * The StreamARN of the destination to deliver profile events to. For example, arn:aws:kinesis:region:account-id:stream/stream-name
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		Uri: string;

		/** The tags used to organize, track, or control access for this resource. */
		Tags?: {[id: string]: string };
	}
	export interface CreateEventStreamPostBodyFormProperties {

		/**
		 * The StreamARN of the destination to deliver profile events to. For example, arn:aws:kinesis:region:account-id:stream/stream-name
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		Uri: FormControl<string | null | undefined>,

		/** The tags used to organize, track, or control access for this resource. */
		Tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateEventStreamPostBodyFormGroup() {
		return new FormGroup<CreateEventStreamPostBodyFormProperties>({
			Uri: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
			Tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateIntegrationWorkflowPostBody {

		/**
		 * The type of workflow. The only supported value is APPFLOW_INTEGRATION.
		 * Required
		 */
		WorkflowType: WorkflowType;

		/**
		 * Configuration data for integration workflow.
		 * Required
		 */
		IntegrationConfig: CreateIntegrationWorkflowPostBodyIntegrationConfig;

		/**
		 * The name of the profile object type.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		ObjectTypeName: string;

		/**
		 * The Amazon Resource Name (ARN) of the IAM role. Customer Profiles assumes this role to create resources on your behalf as part of workflow execution.
		 * Required
		 * Max length: 512
		 */
		RoleArn: string;

		/** The tags used to organize, track, or control access for this resource. */
		Tags?: {[id: string]: string };
	}
	export interface CreateIntegrationWorkflowPostBodyFormProperties {

		/**
		 * The type of workflow. The only supported value is APPFLOW_INTEGRATION.
		 * Required
		 */
		WorkflowType: FormControl<WorkflowType | null | undefined>,

		/**
		 * The name of the profile object type.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		ObjectTypeName: FormControl<string | null | undefined>,

		/**
		 * The Amazon Resource Name (ARN) of the IAM role. Customer Profiles assumes this role to create resources on your behalf as part of workflow execution.
		 * Required
		 * Max length: 512
		 */
		RoleArn: FormControl<string | null | undefined>,

		/** The tags used to organize, track, or control access for this resource. */
		Tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateIntegrationWorkflowPostBodyFormGroup() {
		return new FormGroup<CreateIntegrationWorkflowPostBodyFormProperties>({
			WorkflowType: new FormControl<WorkflowType | null | undefined>(undefined, [Validators.required]),
			ObjectTypeName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255), Validators.pattern('^[a-zA-Z_][a-zA-Z_0-9-]*$')]),
			RoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(512), Validators.pattern('arn:aws:iam:.*:[0-9]+:.*')]),
			Tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateIntegrationWorkflowPostBodyIntegrationConfig {
		AppflowIntegration?: AppflowIntegration;
	}
	export interface CreateIntegrationWorkflowPostBodyIntegrationConfigFormProperties {
	}
	export function CreateCreateIntegrationWorkflowPostBodyIntegrationConfigFormGroup() {
		return new FormGroup<CreateIntegrationWorkflowPostBodyIntegrationConfigFormProperties>({
		});

	}

	export interface CreateProfilePostBody {

		/**
		 * A unique account number that you have given to the customer.
		 * Max length: 255
		 * Min length: 1
		 */
		AccountNumber?: string | null;

		/**
		 * Any additional information relevant to the customer’s profile.
		 * Max length: 1000
		 * Min length: 1
		 */
		AdditionalInformation?: string | null;

		/** The type of profile used to describe the customer. */
		PartyType?: PartyType | null;

		/**
		 * The name of the customer’s business.
		 * Max length: 255
		 * Min length: 1
		 */
		BusinessName?: string | null;

		/**
		 * The customer’s first name.
		 * Max length: 255
		 * Min length: 1
		 */
		FirstName?: string | null;

		/**
		 * The customer’s middle name.
		 * Max length: 255
		 * Min length: 1
		 */
		MiddleName?: string | null;

		/**
		 * The customer’s last name.
		 * Max length: 255
		 * Min length: 1
		 */
		LastName?: string | null;

		/**
		 * The customer’s birth date.
		 * Max length: 255
		 * Min length: 1
		 */
		BirthDate?: string | null;

		/** The gender with which the customer identifies. */
		Gender?: Gender | null;

		/**
		 * The customer’s phone number, which has not been specified as a mobile, home, or business number.
		 * Max length: 255
		 * Min length: 1
		 */
		PhoneNumber?: string | null;

		/**
		 * The customer’s mobile phone number.
		 * Max length: 255
		 * Min length: 1
		 */
		MobilePhoneNumber?: string | null;

		/**
		 * The customer’s home phone number.
		 * Max length: 255
		 * Min length: 1
		 */
		HomePhoneNumber?: string | null;

		/**
		 * The customer’s business phone number.
		 * Max length: 255
		 * Min length: 1
		 */
		BusinessPhoneNumber?: string | null;

		/**
		 * The customer’s email address, which has not been specified as a personal or business address.
		 * Max length: 255
		 * Min length: 1
		 */
		EmailAddress?: string | null;

		/**
		 * The customer’s personal email address.
		 * Max length: 255
		 * Min length: 1
		 */
		PersonalEmailAddress?: string | null;

		/**
		 * The customer’s business email address.
		 * Max length: 255
		 * Min length: 1
		 */
		BusinessEmailAddress?: string | null;

		/** A generic address associated with the customer that is not mailing, shipping, or billing. */
		Address?: CreateProfilePostBodyAddress;

		/** A generic address associated with the customer that is not mailing, shipping, or billing. */
		ShippingAddress?: CreateProfilePostBodyShippingAddress;

		/** A generic address associated with the customer that is not mailing, shipping, or billing. */
		MailingAddress?: CreateProfilePostBodyMailingAddress;

		/** A generic address associated with the customer that is not mailing, shipping, or billing. */
		BillingAddress?: CreateProfilePostBodyBillingAddress;

		/** A key value pair of attributes of a customer profile. */
		Attributes?: {[id: string]: string };

		/**
		 * An alternative to <code>PartyType</code> which accepts any string as input.
		 * Max length: 255
		 * Min length: 1
		 */
		PartyTypeString?: string | null;

		/**
		 * An alternative to <code>Gender</code> which accepts any string as input.
		 * Max length: 255
		 * Min length: 1
		 */
		GenderString?: string | null;
	}
	export interface CreateProfilePostBodyFormProperties {

		/**
		 * A unique account number that you have given to the customer.
		 * Max length: 255
		 * Min length: 1
		 */
		AccountNumber: FormControl<string | null | undefined>,

		/**
		 * Any additional information relevant to the customer’s profile.
		 * Max length: 1000
		 * Min length: 1
		 */
		AdditionalInformation: FormControl<string | null | undefined>,

		/** The type of profile used to describe the customer. */
		PartyType: FormControl<PartyType | null | undefined>,

		/**
		 * The name of the customer’s business.
		 * Max length: 255
		 * Min length: 1
		 */
		BusinessName: FormControl<string | null | undefined>,

		/**
		 * The customer’s first name.
		 * Max length: 255
		 * Min length: 1
		 */
		FirstName: FormControl<string | null | undefined>,

		/**
		 * The customer’s middle name.
		 * Max length: 255
		 * Min length: 1
		 */
		MiddleName: FormControl<string | null | undefined>,

		/**
		 * The customer’s last name.
		 * Max length: 255
		 * Min length: 1
		 */
		LastName: FormControl<string | null | undefined>,

		/**
		 * The customer’s birth date.
		 * Max length: 255
		 * Min length: 1
		 */
		BirthDate: FormControl<string | null | undefined>,

		/** The gender with which the customer identifies. */
		Gender: FormControl<Gender | null | undefined>,

		/**
		 * The customer’s phone number, which has not been specified as a mobile, home, or business number.
		 * Max length: 255
		 * Min length: 1
		 */
		PhoneNumber: FormControl<string | null | undefined>,

		/**
		 * The customer’s mobile phone number.
		 * Max length: 255
		 * Min length: 1
		 */
		MobilePhoneNumber: FormControl<string | null | undefined>,

		/**
		 * The customer’s home phone number.
		 * Max length: 255
		 * Min length: 1
		 */
		HomePhoneNumber: FormControl<string | null | undefined>,

		/**
		 * The customer’s business phone number.
		 * Max length: 255
		 * Min length: 1
		 */
		BusinessPhoneNumber: FormControl<string | null | undefined>,

		/**
		 * The customer’s email address, which has not been specified as a personal or business address.
		 * Max length: 255
		 * Min length: 1
		 */
		EmailAddress: FormControl<string | null | undefined>,

		/**
		 * The customer’s personal email address.
		 * Max length: 255
		 * Min length: 1
		 */
		PersonalEmailAddress: FormControl<string | null | undefined>,

		/**
		 * The customer’s business email address.
		 * Max length: 255
		 * Min length: 1
		 */
		BusinessEmailAddress: FormControl<string | null | undefined>,

		/** A key value pair of attributes of a customer profile. */
		Attributes: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * An alternative to <code>PartyType</code> which accepts any string as input.
		 * Max length: 255
		 * Min length: 1
		 */
		PartyTypeString: FormControl<string | null | undefined>,

		/**
		 * An alternative to <code>Gender</code> which accepts any string as input.
		 * Max length: 255
		 * Min length: 1
		 */
		GenderString: FormControl<string | null | undefined>,
	}
	export function CreateCreateProfilePostBodyFormGroup() {
		return new FormGroup<CreateProfilePostBodyFormProperties>({
			AccountNumber: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			AdditionalInformation: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1000)]),
			PartyType: new FormControl<PartyType | null | undefined>(undefined),
			BusinessName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			FirstName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			MiddleName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			LastName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			BirthDate: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			Gender: new FormControl<Gender | null | undefined>(undefined),
			PhoneNumber: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			MobilePhoneNumber: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			HomePhoneNumber: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			BusinessPhoneNumber: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			EmailAddress: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			PersonalEmailAddress: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			BusinessEmailAddress: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			Attributes: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			PartyTypeString: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			GenderString: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
		});

	}

	export interface CreateProfilePostBodyAddress {
		Address1?: string;
		Address2?: string;
		Address3?: string;
		Address4?: string;
		City?: string;
		County?: string;
		State?: string;
		Province?: string;
		Country?: string;
		PostalCode?: string;
	}
	export interface CreateProfilePostBodyAddressFormProperties {
		Address1: FormControl<string | null | undefined>,
		Address2: FormControl<string | null | undefined>,
		Address3: FormControl<string | null | undefined>,
		Address4: FormControl<string | null | undefined>,
		City: FormControl<string | null | undefined>,
		County: FormControl<string | null | undefined>,
		State: FormControl<string | null | undefined>,
		Province: FormControl<string | null | undefined>,
		Country: FormControl<string | null | undefined>,
		PostalCode: FormControl<string | null | undefined>,
	}
	export function CreateCreateProfilePostBodyAddressFormGroup() {
		return new FormGroup<CreateProfilePostBodyAddressFormProperties>({
			Address1: new FormControl<string | null | undefined>(undefined),
			Address2: new FormControl<string | null | undefined>(undefined),
			Address3: new FormControl<string | null | undefined>(undefined),
			Address4: new FormControl<string | null | undefined>(undefined),
			City: new FormControl<string | null | undefined>(undefined),
			County: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<string | null | undefined>(undefined),
			Province: new FormControl<string | null | undefined>(undefined),
			Country: new FormControl<string | null | undefined>(undefined),
			PostalCode: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateProfilePostBodyShippingAddress {
		Address1?: string;
		Address2?: string;
		Address3?: string;
		Address4?: string;
		City?: string;
		County?: string;
		State?: string;
		Province?: string;
		Country?: string;
		PostalCode?: string;
	}
	export interface CreateProfilePostBodyShippingAddressFormProperties {
		Address1: FormControl<string | null | undefined>,
		Address2: FormControl<string | null | undefined>,
		Address3: FormControl<string | null | undefined>,
		Address4: FormControl<string | null | undefined>,
		City: FormControl<string | null | undefined>,
		County: FormControl<string | null | undefined>,
		State: FormControl<string | null | undefined>,
		Province: FormControl<string | null | undefined>,
		Country: FormControl<string | null | undefined>,
		PostalCode: FormControl<string | null | undefined>,
	}
	export function CreateCreateProfilePostBodyShippingAddressFormGroup() {
		return new FormGroup<CreateProfilePostBodyShippingAddressFormProperties>({
			Address1: new FormControl<string | null | undefined>(undefined),
			Address2: new FormControl<string | null | undefined>(undefined),
			Address3: new FormControl<string | null | undefined>(undefined),
			Address4: new FormControl<string | null | undefined>(undefined),
			City: new FormControl<string | null | undefined>(undefined),
			County: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<string | null | undefined>(undefined),
			Province: new FormControl<string | null | undefined>(undefined),
			Country: new FormControl<string | null | undefined>(undefined),
			PostalCode: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateProfilePostBodyMailingAddress {
		Address1?: string;
		Address2?: string;
		Address3?: string;
		Address4?: string;
		City?: string;
		County?: string;
		State?: string;
		Province?: string;
		Country?: string;
		PostalCode?: string;
	}
	export interface CreateProfilePostBodyMailingAddressFormProperties {
		Address1: FormControl<string | null | undefined>,
		Address2: FormControl<string | null | undefined>,
		Address3: FormControl<string | null | undefined>,
		Address4: FormControl<string | null | undefined>,
		City: FormControl<string | null | undefined>,
		County: FormControl<string | null | undefined>,
		State: FormControl<string | null | undefined>,
		Province: FormControl<string | null | undefined>,
		Country: FormControl<string | null | undefined>,
		PostalCode: FormControl<string | null | undefined>,
	}
	export function CreateCreateProfilePostBodyMailingAddressFormGroup() {
		return new FormGroup<CreateProfilePostBodyMailingAddressFormProperties>({
			Address1: new FormControl<string | null | undefined>(undefined),
			Address2: new FormControl<string | null | undefined>(undefined),
			Address3: new FormControl<string | null | undefined>(undefined),
			Address4: new FormControl<string | null | undefined>(undefined),
			City: new FormControl<string | null | undefined>(undefined),
			County: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<string | null | undefined>(undefined),
			Province: new FormControl<string | null | undefined>(undefined),
			Country: new FormControl<string | null | undefined>(undefined),
			PostalCode: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateProfilePostBodyBillingAddress {
		Address1?: string;
		Address2?: string;
		Address3?: string;
		Address4?: string;
		City?: string;
		County?: string;
		State?: string;
		Province?: string;
		Country?: string;
		PostalCode?: string;
	}
	export interface CreateProfilePostBodyBillingAddressFormProperties {
		Address1: FormControl<string | null | undefined>,
		Address2: FormControl<string | null | undefined>,
		Address3: FormControl<string | null | undefined>,
		Address4: FormControl<string | null | undefined>,
		City: FormControl<string | null | undefined>,
		County: FormControl<string | null | undefined>,
		State: FormControl<string | null | undefined>,
		Province: FormControl<string | null | undefined>,
		Country: FormControl<string | null | undefined>,
		PostalCode: FormControl<string | null | undefined>,
	}
	export function CreateCreateProfilePostBodyBillingAddressFormGroup() {
		return new FormGroup<CreateProfilePostBodyBillingAddressFormProperties>({
			Address1: new FormControl<string | null | undefined>(undefined),
			Address2: new FormControl<string | null | undefined>(undefined),
			Address3: new FormControl<string | null | undefined>(undefined),
			Address4: new FormControl<string | null | undefined>(undefined),
			City: new FormControl<string | null | undefined>(undefined),
			County: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<string | null | undefined>(undefined),
			Province: new FormControl<string | null | undefined>(undefined),
			Country: new FormControl<string | null | undefined>(undefined),
			PostalCode: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateProfilePutBody {

		/**
		 * The unique identifier of a customer profile.
		 * Required
		 */
		ProfileId: string;

		/**
		 * Any additional information relevant to the customer’s profile.
		 * Max length: 1000
		 * Min length: 0
		 */
		AdditionalInformation?: string | null;

		/**
		 * A unique account number that you have given to the customer.
		 * Max length: 255
		 * Min length: 0
		 */
		AccountNumber?: string | null;

		/** The type of profile used to describe the customer. */
		PartyType?: PartyType | null;

		/**
		 * The name of the customer’s business.
		 * Max length: 255
		 * Min length: 0
		 */
		BusinessName?: string | null;

		/**
		 * The customer’s first name.
		 * Max length: 255
		 * Min length: 0
		 */
		FirstName?: string | null;

		/**
		 * The customer’s middle name.
		 * Max length: 255
		 * Min length: 0
		 */
		MiddleName?: string | null;

		/**
		 * The customer’s last name.
		 * Max length: 255
		 * Min length: 0
		 */
		LastName?: string | null;

		/**
		 * The customer’s birth date.
		 * Max length: 255
		 * Min length: 0
		 */
		BirthDate?: string | null;

		/** The gender with which the customer identifies. */
		Gender?: Gender | null;

		/**
		 * The customer’s phone number, which has not been specified as a mobile, home, or business number.
		 * Max length: 255
		 * Min length: 0
		 */
		PhoneNumber?: string | null;

		/**
		 * The customer’s mobile phone number.
		 * Max length: 255
		 * Min length: 0
		 */
		MobilePhoneNumber?: string | null;

		/**
		 * The customer’s home phone number.
		 * Max length: 255
		 * Min length: 0
		 */
		HomePhoneNumber?: string | null;

		/**
		 * The customer’s business phone number.
		 * Max length: 255
		 * Min length: 0
		 */
		BusinessPhoneNumber?: string | null;

		/**
		 * The customer’s email address, which has not been specified as a personal or business address.
		 * Max length: 255
		 * Min length: 0
		 */
		EmailAddress?: string | null;

		/**
		 * The customer’s personal email address.
		 * Max length: 255
		 * Min length: 0
		 */
		PersonalEmailAddress?: string | null;

		/**
		 * The customer’s business email address.
		 * Max length: 255
		 * Min length: 0
		 */
		BusinessEmailAddress?: string | null;

		/** Updates associated with the address properties of a customer profile. */
		Address?: UpdateProfilePutBodyAddress;

		/** Updates associated with the address properties of a customer profile. */
		ShippingAddress?: UpdateProfilePutBodyShippingAddress;

		/** Updates associated with the address properties of a customer profile. */
		MailingAddress?: UpdateProfilePutBodyMailingAddress;

		/** Updates associated with the address properties of a customer profile. */
		BillingAddress?: UpdateProfilePutBodyBillingAddress;

		/** A key value pair of attributes of a customer profile. */
		Attributes?: {[id: string]: string };

		/**
		 * An alternative to <code>PartyType</code> which accepts any string as input.
		 * Max length: 255
		 * Min length: 0
		 */
		PartyTypeString?: string | null;

		/**
		 * An alternative to <code>Gender</code> which accepts any string as input.
		 * Max length: 255
		 * Min length: 0
		 */
		GenderString?: string | null;
	}
	export interface UpdateProfilePutBodyFormProperties {

		/**
		 * The unique identifier of a customer profile.
		 * Required
		 */
		ProfileId: FormControl<string | null | undefined>,

		/**
		 * Any additional information relevant to the customer’s profile.
		 * Max length: 1000
		 * Min length: 0
		 */
		AdditionalInformation: FormControl<string | null | undefined>,

		/**
		 * A unique account number that you have given to the customer.
		 * Max length: 255
		 * Min length: 0
		 */
		AccountNumber: FormControl<string | null | undefined>,

		/** The type of profile used to describe the customer. */
		PartyType: FormControl<PartyType | null | undefined>,

		/**
		 * The name of the customer’s business.
		 * Max length: 255
		 * Min length: 0
		 */
		BusinessName: FormControl<string | null | undefined>,

		/**
		 * The customer’s first name.
		 * Max length: 255
		 * Min length: 0
		 */
		FirstName: FormControl<string | null | undefined>,

		/**
		 * The customer’s middle name.
		 * Max length: 255
		 * Min length: 0
		 */
		MiddleName: FormControl<string | null | undefined>,

		/**
		 * The customer’s last name.
		 * Max length: 255
		 * Min length: 0
		 */
		LastName: FormControl<string | null | undefined>,

		/**
		 * The customer’s birth date.
		 * Max length: 255
		 * Min length: 0
		 */
		BirthDate: FormControl<string | null | undefined>,

		/** The gender with which the customer identifies. */
		Gender: FormControl<Gender | null | undefined>,

		/**
		 * The customer’s phone number, which has not been specified as a mobile, home, or business number.
		 * Max length: 255
		 * Min length: 0
		 */
		PhoneNumber: FormControl<string | null | undefined>,

		/**
		 * The customer’s mobile phone number.
		 * Max length: 255
		 * Min length: 0
		 */
		MobilePhoneNumber: FormControl<string | null | undefined>,

		/**
		 * The customer’s home phone number.
		 * Max length: 255
		 * Min length: 0
		 */
		HomePhoneNumber: FormControl<string | null | undefined>,

		/**
		 * The customer’s business phone number.
		 * Max length: 255
		 * Min length: 0
		 */
		BusinessPhoneNumber: FormControl<string | null | undefined>,

		/**
		 * The customer’s email address, which has not been specified as a personal or business address.
		 * Max length: 255
		 * Min length: 0
		 */
		EmailAddress: FormControl<string | null | undefined>,

		/**
		 * The customer’s personal email address.
		 * Max length: 255
		 * Min length: 0
		 */
		PersonalEmailAddress: FormControl<string | null | undefined>,

		/**
		 * The customer’s business email address.
		 * Max length: 255
		 * Min length: 0
		 */
		BusinessEmailAddress: FormControl<string | null | undefined>,

		/** A key value pair of attributes of a customer profile. */
		Attributes: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * An alternative to <code>PartyType</code> which accepts any string as input.
		 * Max length: 255
		 * Min length: 0
		 */
		PartyTypeString: FormControl<string | null | undefined>,

		/**
		 * An alternative to <code>Gender</code> which accepts any string as input.
		 * Max length: 255
		 * Min length: 0
		 */
		GenderString: FormControl<string | null | undefined>,
	}
	export function CreateUpdateProfilePutBodyFormGroup() {
		return new FormGroup<UpdateProfilePutBodyFormProperties>({
			ProfileId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('[a-f0-9]{32}')]),
			AdditionalInformation: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(1000)]),
			AccountNumber: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(255)]),
			PartyType: new FormControl<PartyType | null | undefined>(undefined),
			BusinessName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(255)]),
			FirstName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(255)]),
			MiddleName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(255)]),
			LastName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(255)]),
			BirthDate: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(255)]),
			Gender: new FormControl<Gender | null | undefined>(undefined),
			PhoneNumber: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(255)]),
			MobilePhoneNumber: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(255)]),
			HomePhoneNumber: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(255)]),
			BusinessPhoneNumber: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(255)]),
			EmailAddress: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(255)]),
			PersonalEmailAddress: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(255)]),
			BusinessEmailAddress: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(255)]),
			Attributes: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			PartyTypeString: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(255)]),
			GenderString: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(255)]),
		});

	}

	export interface UpdateProfilePutBodyAddress {
		Address1?: string;
		Address2?: string;
		Address3?: string;
		Address4?: string;
		City?: string;
		County?: string;
		State?: string;
		Province?: string;
		Country?: string;
		PostalCode?: string;
	}
	export interface UpdateProfilePutBodyAddressFormProperties {
		Address1: FormControl<string | null | undefined>,
		Address2: FormControl<string | null | undefined>,
		Address3: FormControl<string | null | undefined>,
		Address4: FormControl<string | null | undefined>,
		City: FormControl<string | null | undefined>,
		County: FormControl<string | null | undefined>,
		State: FormControl<string | null | undefined>,
		Province: FormControl<string | null | undefined>,
		Country: FormControl<string | null | undefined>,
		PostalCode: FormControl<string | null | undefined>,
	}
	export function CreateUpdateProfilePutBodyAddressFormGroup() {
		return new FormGroup<UpdateProfilePutBodyAddressFormProperties>({
			Address1: new FormControl<string | null | undefined>(undefined),
			Address2: new FormControl<string | null | undefined>(undefined),
			Address3: new FormControl<string | null | undefined>(undefined),
			Address4: new FormControl<string | null | undefined>(undefined),
			City: new FormControl<string | null | undefined>(undefined),
			County: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<string | null | undefined>(undefined),
			Province: new FormControl<string | null | undefined>(undefined),
			Country: new FormControl<string | null | undefined>(undefined),
			PostalCode: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateProfilePutBodyShippingAddress {
		Address1?: string;
		Address2?: string;
		Address3?: string;
		Address4?: string;
		City?: string;
		County?: string;
		State?: string;
		Province?: string;
		Country?: string;
		PostalCode?: string;
	}
	export interface UpdateProfilePutBodyShippingAddressFormProperties {
		Address1: FormControl<string | null | undefined>,
		Address2: FormControl<string | null | undefined>,
		Address3: FormControl<string | null | undefined>,
		Address4: FormControl<string | null | undefined>,
		City: FormControl<string | null | undefined>,
		County: FormControl<string | null | undefined>,
		State: FormControl<string | null | undefined>,
		Province: FormControl<string | null | undefined>,
		Country: FormControl<string | null | undefined>,
		PostalCode: FormControl<string | null | undefined>,
	}
	export function CreateUpdateProfilePutBodyShippingAddressFormGroup() {
		return new FormGroup<UpdateProfilePutBodyShippingAddressFormProperties>({
			Address1: new FormControl<string | null | undefined>(undefined),
			Address2: new FormControl<string | null | undefined>(undefined),
			Address3: new FormControl<string | null | undefined>(undefined),
			Address4: new FormControl<string | null | undefined>(undefined),
			City: new FormControl<string | null | undefined>(undefined),
			County: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<string | null | undefined>(undefined),
			Province: new FormControl<string | null | undefined>(undefined),
			Country: new FormControl<string | null | undefined>(undefined),
			PostalCode: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateProfilePutBodyMailingAddress {
		Address1?: string;
		Address2?: string;
		Address3?: string;
		Address4?: string;
		City?: string;
		County?: string;
		State?: string;
		Province?: string;
		Country?: string;
		PostalCode?: string;
	}
	export interface UpdateProfilePutBodyMailingAddressFormProperties {
		Address1: FormControl<string | null | undefined>,
		Address2: FormControl<string | null | undefined>,
		Address3: FormControl<string | null | undefined>,
		Address4: FormControl<string | null | undefined>,
		City: FormControl<string | null | undefined>,
		County: FormControl<string | null | undefined>,
		State: FormControl<string | null | undefined>,
		Province: FormControl<string | null | undefined>,
		Country: FormControl<string | null | undefined>,
		PostalCode: FormControl<string | null | undefined>,
	}
	export function CreateUpdateProfilePutBodyMailingAddressFormGroup() {
		return new FormGroup<UpdateProfilePutBodyMailingAddressFormProperties>({
			Address1: new FormControl<string | null | undefined>(undefined),
			Address2: new FormControl<string | null | undefined>(undefined),
			Address3: new FormControl<string | null | undefined>(undefined),
			Address4: new FormControl<string | null | undefined>(undefined),
			City: new FormControl<string | null | undefined>(undefined),
			County: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<string | null | undefined>(undefined),
			Province: new FormControl<string | null | undefined>(undefined),
			Country: new FormControl<string | null | undefined>(undefined),
			PostalCode: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateProfilePutBodyBillingAddress {
		Address1?: string;
		Address2?: string;
		Address3?: string;
		Address4?: string;
		City?: string;
		County?: string;
		State?: string;
		Province?: string;
		Country?: string;
		PostalCode?: string;
	}
	export interface UpdateProfilePutBodyBillingAddressFormProperties {
		Address1: FormControl<string | null | undefined>,
		Address2: FormControl<string | null | undefined>,
		Address3: FormControl<string | null | undefined>,
		Address4: FormControl<string | null | undefined>,
		City: FormControl<string | null | undefined>,
		County: FormControl<string | null | undefined>,
		State: FormControl<string | null | undefined>,
		Province: FormControl<string | null | undefined>,
		Country: FormControl<string | null | undefined>,
		PostalCode: FormControl<string | null | undefined>,
	}
	export function CreateUpdateProfilePutBodyBillingAddressFormGroup() {
		return new FormGroup<UpdateProfilePutBodyBillingAddressFormProperties>({
			Address1: new FormControl<string | null | undefined>(undefined),
			Address2: new FormControl<string | null | undefined>(undefined),
			Address3: new FormControl<string | null | undefined>(undefined),
			Address4: new FormControl<string | null | undefined>(undefined),
			City: new FormControl<string | null | undefined>(undefined),
			County: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<string | null | undefined>(undefined),
			Province: new FormControl<string | null | undefined>(undefined),
			Country: new FormControl<string | null | undefined>(undefined),
			PostalCode: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteIntegrationPostBody {

		/**
		 * The URI of the S3 bucket or any other type of data source.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		Uri: string;
	}
	export interface DeleteIntegrationPostBodyFormProperties {

		/**
		 * The URI of the S3 bucket or any other type of data source.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		Uri: FormControl<string | null | undefined>,
	}
	export function CreateDeleteIntegrationPostBodyFormGroup() {
		return new FormGroup<DeleteIntegrationPostBodyFormProperties>({
			Uri: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
		});

	}

	export interface DeleteProfilePostBody {

		/**
		 * The unique identifier of a customer profile.
		 * Required
		 */
		ProfileId: string;
	}
	export interface DeleteProfilePostBodyFormProperties {

		/**
		 * The unique identifier of a customer profile.
		 * Required
		 */
		ProfileId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteProfilePostBodyFormGroup() {
		return new FormGroup<DeleteProfilePostBodyFormProperties>({
			ProfileId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('[a-f0-9]{32}')]),
		});

	}

	export interface DeleteProfileKeyPostBody {

		/**
		 * The unique identifier of a customer profile.
		 * Required
		 */
		ProfileId: string;

		/**
		 * A searchable identifier of a customer profile.
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		KeyName: string;

		/**
		 * A list of key values.
		 * Required
		 */
		Values: Array<string>;
	}
	export interface DeleteProfileKeyPostBodyFormProperties {

		/**
		 * The unique identifier of a customer profile.
		 * Required
		 */
		ProfileId: FormControl<string | null | undefined>,

		/**
		 * A searchable identifier of a customer profile.
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		KeyName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteProfileKeyPostBodyFormGroup() {
		return new FormGroup<DeleteProfileKeyPostBodyFormProperties>({
			ProfileId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('[a-f0-9]{32}')]),
			KeyName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(64), Validators.pattern('^[a-zA-Z0-9_-]+$')]),
		});

	}

	export interface DeleteProfileObjectPostBody {

		/**
		 * The unique identifier of a customer profile.
		 * Required
		 */
		ProfileId: string;

		/**
		 * The unique identifier of the profile object generated by the service.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		ProfileObjectUniqueKey: string;

		/**
		 * The name of the profile object type.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		ObjectTypeName: string;
	}
	export interface DeleteProfileObjectPostBodyFormProperties {

		/**
		 * The unique identifier of a customer profile.
		 * Required
		 */
		ProfileId: FormControl<string | null | undefined>,

		/**
		 * The unique identifier of the profile object generated by the service.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		ProfileObjectUniqueKey: FormControl<string | null | undefined>,

		/**
		 * The name of the profile object type.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		ObjectTypeName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteProfileObjectPostBodyFormGroup() {
		return new FormGroup<DeleteProfileObjectPostBodyFormProperties>({
			ProfileId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('[a-f0-9]{32}')]),
			ProfileObjectUniqueKey: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
			ObjectTypeName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255), Validators.pattern('^[a-zA-Z_][a-zA-Z_0-9-]*$')]),
		});

	}

	export interface PutProfileObjectTypePutBody {

		/**
		 * Description of the profile object type.
		 * Required
		 * Max length: 1000
		 * Min length: 1
		 */
		Description: string;

		/**
		 * A unique identifier for the object template. For some attributes in the request, the service will use the default value from the object template when TemplateId is present. If these attributes are present in the request, the service may return a <code>BadRequestException</code>. These attributes include: AllowProfileCreation, SourceLastUpdatedTimestampFormat, Fields, and Keys. For example, if AllowProfileCreation is set to true when TemplateId is set, the service may return a <code>BadRequestException</code>.
		 * Max length: 64
		 * Min length: 1
		 */
		TemplateId?: string | null;

		/**
		 * The number of days until the data in the object expires.
		 * Minimum: 1
		 * Maximum: 1098
		 */
		ExpirationDays?: number | null;

		/**
		 * The customer-provided key to encrypt the profile object that will be created in this profile object type.
		 * Max length: 255
		 * Min length: 0
		 */
		EncryptionKey?: string | null;

		/** Indicates whether a profile should be created when data is received if one doesn’t exist for an object of this type. The default is <code>FALSE</code>. If the AllowProfileCreation flag is set to <code>FALSE</code>, then the service tries to fetch a standard profile and associate this object with the profile. If it is set to <code>TRUE</code>, and if no match is found, then the service creates a new standard profile. */
		AllowProfileCreation?: boolean | null;

		/**
		 * The format of your <code>sourceLastUpdatedTimestamp</code> that was previously set up.
		 * Max length: 255
		 * Min length: 1
		 */
		SourceLastUpdatedTimestampFormat?: string | null;

		/** A map of the name and ObjectType field. */
		Fields?: {[id: string]: ObjectTypeField };

		/** A list of unique keys that can be used to map data to the profile. */
		Keys?: {[id: string]: Array<ObjectTypeKey> };

		/** The tags used to organize, track, or control access for this resource. */
		Tags?: {[id: string]: string };
	}
	export interface PutProfileObjectTypePutBodyFormProperties {

		/**
		 * Description of the profile object type.
		 * Required
		 * Max length: 1000
		 * Min length: 1
		 */
		Description: FormControl<string | null | undefined>,

		/**
		 * A unique identifier for the object template. For some attributes in the request, the service will use the default value from the object template when TemplateId is present. If these attributes are present in the request, the service may return a <code>BadRequestException</code>. These attributes include: AllowProfileCreation, SourceLastUpdatedTimestampFormat, Fields, and Keys. For example, if AllowProfileCreation is set to true when TemplateId is set, the service may return a <code>BadRequestException</code>.
		 * Max length: 64
		 * Min length: 1
		 */
		TemplateId: FormControl<string | null | undefined>,

		/**
		 * The number of days until the data in the object expires.
		 * Minimum: 1
		 * Maximum: 1098
		 */
		ExpirationDays: FormControl<number | null | undefined>,

		/**
		 * The customer-provided key to encrypt the profile object that will be created in this profile object type.
		 * Max length: 255
		 * Min length: 0
		 */
		EncryptionKey: FormControl<string | null | undefined>,

		/** Indicates whether a profile should be created when data is received if one doesn’t exist for an object of this type. The default is <code>FALSE</code>. If the AllowProfileCreation flag is set to <code>FALSE</code>, then the service tries to fetch a standard profile and associate this object with the profile. If it is set to <code>TRUE</code>, and if no match is found, then the service creates a new standard profile. */
		AllowProfileCreation: FormControl<boolean | null | undefined>,

		/**
		 * The format of your <code>sourceLastUpdatedTimestamp</code> that was previously set up.
		 * Max length: 255
		 * Min length: 1
		 */
		SourceLastUpdatedTimestampFormat: FormControl<string | null | undefined>,

		/** A map of the name and ObjectType field. */
		Fields: FormControl<{[id: string]: ObjectTypeField } | null | undefined>,

		/** A list of unique keys that can be used to map data to the profile. */
		Keys: FormControl<{[id: string]: Array<ObjectTypeKey> } | null | undefined>,

		/** The tags used to organize, track, or control access for this resource. */
		Tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreatePutProfileObjectTypePutBodyFormGroup() {
		return new FormGroup<PutProfileObjectTypePutBodyFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1000)]),
			TemplateId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64), Validators.pattern('^[a-zA-Z0-9_-]+$')]),
			ExpirationDays: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(1098)]),
			EncryptionKey: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(255)]),
			AllowProfileCreation: new FormControl<boolean | null | undefined>(undefined),
			SourceLastUpdatedTimestampFormat: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			Fields: new FormControl<{[id: string]: ObjectTypeField } | null | undefined>(undefined),
			Keys: new FormControl<{[id: string]: Array<ObjectTypeKey> } | null | undefined>(undefined),
			Tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface GetAutoMergingPreviewPostBody {

		/**
		 * The matching criteria to be used during the auto-merging process.
		 * Required
		 */
		Consolidation: GetAutoMergingPreviewPostBodyConsolidation;

		/**
		 * How the auto-merging process should resolve conflicts between different profiles.
		 * Required
		 */
		ConflictResolution: GetAutoMergingPreviewPostBodyConflictResolution;

		/**
		 * Minimum confidence score required for profiles within a matching group to be merged during the auto-merge process.
		 * Minimum: 0
		 * Maximum: 1
		 */
		MinAllowedConfidenceScoreForMerging?: number | null;
	}
	export interface GetAutoMergingPreviewPostBodyFormProperties {

		/**
		 * Minimum confidence score required for profiles within a matching group to be merged during the auto-merge process.
		 * Minimum: 0
		 * Maximum: 1
		 */
		MinAllowedConfidenceScoreForMerging: FormControl<number | null | undefined>,
	}
	export function CreateGetAutoMergingPreviewPostBodyFormGroup() {
		return new FormGroup<GetAutoMergingPreviewPostBodyFormProperties>({
			MinAllowedConfidenceScoreForMerging: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(1)]),
		});

	}

	export interface GetAutoMergingPreviewPostBodyConsolidation {
		MatchingAttributesList?: Array<Array<string>>;
	}
	export interface GetAutoMergingPreviewPostBodyConsolidationFormProperties {
	}
	export function CreateGetAutoMergingPreviewPostBodyConsolidationFormGroup() {
		return new FormGroup<GetAutoMergingPreviewPostBodyConsolidationFormProperties>({
		});

	}

	export interface GetAutoMergingPreviewPostBodyConflictResolution {
		ConflictResolvingModel?: ConflictResolvingModel;
		SourceName?: string;
	}
	export interface GetAutoMergingPreviewPostBodyConflictResolutionFormProperties {
		ConflictResolvingModel: FormControl<ConflictResolvingModel | null | undefined>,
		SourceName: FormControl<string | null | undefined>,
	}
	export function CreateGetAutoMergingPreviewPostBodyConflictResolutionFormGroup() {
		return new FormGroup<GetAutoMergingPreviewPostBodyConflictResolutionFormProperties>({
			ConflictResolvingModel: new FormControl<ConflictResolvingModel | null | undefined>(undefined),
			SourceName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetIntegrationPostBody {

		/**
		 * The URI of the S3 bucket or any other type of data source.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		Uri: string;
	}
	export interface GetIntegrationPostBodyFormProperties {

		/**
		 * The URI of the S3 bucket or any other type of data source.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		Uri: FormControl<string | null | undefined>,
	}
	export function CreateGetIntegrationPostBodyFormGroup() {
		return new FormGroup<GetIntegrationPostBodyFormProperties>({
			Uri: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
		});

	}

	export interface PutIntegrationPutBody {

		/**
		 * The URI of the S3 bucket or any other type of data source.
		 * Max length: 255
		 * Min length: 1
		 */
		Uri?: string | null;

		/**
		 * The name of the profile object type.
		 * Max length: 255
		 * Min length: 1
		 */
		ObjectTypeName?: string | null;

		/** The tags used to organize, track, or control access for this resource. */
		Tags?: {[id: string]: string };

		/** The configurations that control how Customer Profiles retrieves data from the source, Amazon AppFlow. Customer Profiles uses this information to create an AppFlow flow on behalf of customers. */
		FlowDefinition?: PutIntegrationPutBodyFlowDefinition;

		/** A map in which each key is an event type from an external application such as Segment or Shopify, and each value is an <code>ObjectTypeName</code> (template) used to ingest the event. It supports the following event types: <code>SegmentIdentify</code>, <code>ShopifyCreateCustomers</code>, <code>ShopifyUpdateCustomers</code>, <code>ShopifyCreateDraftOrders</code>, <code>ShopifyUpdateDraftOrders</code>, <code>ShopifyCreateOrders</code>, and <code>ShopifyUpdatedOrders</code>. */
		ObjectTypeNames?: {[id: string]: string };
	}
	export interface PutIntegrationPutBodyFormProperties {

		/**
		 * The URI of the S3 bucket or any other type of data source.
		 * Max length: 255
		 * Min length: 1
		 */
		Uri: FormControl<string | null | undefined>,

		/**
		 * The name of the profile object type.
		 * Max length: 255
		 * Min length: 1
		 */
		ObjectTypeName: FormControl<string | null | undefined>,

		/** The tags used to organize, track, or control access for this resource. */
		Tags: FormControl<{[id: string]: string } | null | undefined>,

		/** A map in which each key is an event type from an external application such as Segment or Shopify, and each value is an <code>ObjectTypeName</code> (template) used to ingest the event. It supports the following event types: <code>SegmentIdentify</code>, <code>ShopifyCreateCustomers</code>, <code>ShopifyUpdateCustomers</code>, <code>ShopifyCreateDraftOrders</code>, <code>ShopifyUpdateDraftOrders</code>, <code>ShopifyCreateOrders</code>, and <code>ShopifyUpdatedOrders</code>. */
		ObjectTypeNames: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreatePutIntegrationPutBodyFormGroup() {
		return new FormGroup<PutIntegrationPutBodyFormProperties>({
			Uri: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			ObjectTypeName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255), Validators.pattern('^[a-zA-Z_][a-zA-Z_0-9-]*$')]),
			Tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			ObjectTypeNames: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface PutIntegrationPutBodyFlowDefinition {
		Description?: string;
		FlowName?: string;
		KmsArn?: string;
		SourceFlowConfig?: SourceFlowConfig;
		Tasks?: Array<Task_>;
		TriggerConfig?: TriggerConfig;
	}
	export interface PutIntegrationPutBodyFlowDefinitionFormProperties {
		Description: FormControl<string | null | undefined>,
		FlowName: FormControl<string | null | undefined>,
		KmsArn: FormControl<string | null | undefined>,
	}
	export function CreatePutIntegrationPutBodyFlowDefinitionFormGroup() {
		return new FormGroup<PutIntegrationPutBodyFlowDefinitionFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined),
			FlowName: new FormControl<string | null | undefined>(undefined),
			KmsArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetSimilarProfilesPostBody {

		/**
		 * Specify the type of matching to get similar profiles for.
		 * Required
		 */
		MatchType: MatchType;

		/**
		 * The string indicating the search key to be used.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		SearchKey: string;

		/**
		 * The string based on <code>SearchKey</code> to be searched for similar profiles.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		SearchValue: string;
	}
	export interface GetSimilarProfilesPostBodyFormProperties {

		/**
		 * Specify the type of matching to get similar profiles for.
		 * Required
		 */
		MatchType: FormControl<MatchType | null | undefined>,

		/**
		 * The string indicating the search key to be used.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		SearchKey: FormControl<string | null | undefined>,

		/**
		 * The string based on <code>SearchKey</code> to be searched for similar profiles.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		SearchValue: FormControl<string | null | undefined>,
	}
	export function CreateGetSimilarProfilesPostBodyFormGroup() {
		return new FormGroup<GetSimilarProfilesPostBodyFormProperties>({
			MatchType: new FormControl<MatchType | null | undefined>(undefined, [Validators.required]),
			SearchKey: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
			SearchValue: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
		});

	}

	export interface ListAccountIntegrationsPostBody {

		/**
		 * The URI of the S3 bucket or any other type of data source.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		Uri: string;
	}
	export interface ListAccountIntegrationsPostBodyFormProperties {

		/**
		 * The URI of the S3 bucket or any other type of data source.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		Uri: FormControl<string | null | undefined>,
	}
	export function CreateListAccountIntegrationsPostBodyFormGroup() {
		return new FormGroup<ListAccountIntegrationsPostBodyFormProperties>({
			Uri: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
		});

	}

	export interface ListProfileObjectsPostBody {

		/**
		 * The name of the profile object type.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		ObjectTypeName: string;

		/**
		 * The unique identifier of a customer profile.
		 * Required
		 */
		ProfileId: string;

		/** The filter applied to <code>ListProfileObjects</code> response to include profile objects with the specified index values. */
		ObjectFilter?: ListProfileObjectsPostBodyObjectFilter;
	}
	export interface ListProfileObjectsPostBodyFormProperties {

		/**
		 * The name of the profile object type.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		ObjectTypeName: FormControl<string | null | undefined>,

		/**
		 * The unique identifier of a customer profile.
		 * Required
		 */
		ProfileId: FormControl<string | null | undefined>,
	}
	export function CreateListProfileObjectsPostBodyFormGroup() {
		return new FormGroup<ListProfileObjectsPostBodyFormProperties>({
			ObjectTypeName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255), Validators.pattern('^[a-zA-Z_][a-zA-Z_0-9-]*$')]),
			ProfileId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('[a-f0-9]{32}')]),
		});

	}

	export interface ListProfileObjectsPostBodyObjectFilter {
		KeyName?: string;
		Values?: Array<string>;
	}
	export interface ListProfileObjectsPostBodyObjectFilterFormProperties {
		KeyName: FormControl<string | null | undefined>,
	}
	export function CreateListProfileObjectsPostBodyObjectFilterFormGroup() {
		return new FormGroup<ListProfileObjectsPostBodyObjectFilterFormProperties>({
			KeyName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PutProfileObjectPutBody {

		/**
		 * The name of the profile object type.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		ObjectTypeName: string;

		/**
		 * A string that is serialized from a JSON object.
		 * Required
		 * Max length: 256000
		 * Min length: 1
		 */
		Object: string;
	}
	export interface PutProfileObjectPutBodyFormProperties {

		/**
		 * The name of the profile object type.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		ObjectTypeName: FormControl<string | null | undefined>,

		/**
		 * A string that is serialized from a JSON object.
		 * Required
		 * Max length: 256000
		 * Min length: 1
		 */
		Object: FormControl<string | null | undefined>,
	}
	export function CreatePutProfileObjectPutBodyFormGroup() {
		return new FormGroup<PutProfileObjectPutBodyFormProperties>({
			ObjectTypeName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255), Validators.pattern('^[a-zA-Z_][a-zA-Z_0-9-]*$')]),
			Object: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256000)]),
		});

	}

	export interface TagResourcePostBody {

		/**
		 * The tags used to organize, track, or control access for this resource.
		 * Required
		 */
		tags: {[id: string]: string };
	}
	export interface TagResourcePostBodyFormProperties {

		/**
		 * The tags used to organize, track, or control access for this resource.
		 * Required
		 */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateTagResourcePostBodyFormGroup() {
		return new FormGroup<TagResourcePostBodyFormProperties>({
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListWorkflowsPostBody {

		/** The type of workflow. The only supported value is APPFLOW_INTEGRATION. */
		WorkflowType?: WorkflowType | null;

		/** Status of workflow execution. */
		Status?: Status | null;

		/** Retrieve workflows started after timestamp. */
		QueryStartDate?: Date | null;

		/** Retrieve workflows ended after timestamp. */
		QueryEndDate?: Date | null;
	}
	export interface ListWorkflowsPostBodyFormProperties {

		/** The type of workflow. The only supported value is APPFLOW_INTEGRATION. */
		WorkflowType: FormControl<WorkflowType | null | undefined>,

		/** Status of workflow execution. */
		Status: FormControl<Status | null | undefined>,

		/** Retrieve workflows started after timestamp. */
		QueryStartDate: FormControl<Date | null | undefined>,

		/** Retrieve workflows ended after timestamp. */
		QueryEndDate: FormControl<Date | null | undefined>,
	}
	export function CreateListWorkflowsPostBodyFormGroup() {
		return new FormGroup<ListWorkflowsPostBodyFormProperties>({
			WorkflowType: new FormControl<WorkflowType | null | undefined>(undefined),
			Status: new FormControl<Status | null | undefined>(undefined),
			QueryStartDate: new FormControl<Date | null | undefined>(undefined),
			QueryEndDate: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface MergeProfilesPostBody {

		/**
		 * The identifier of the profile to be taken.
		 * Required
		 */
		MainProfileId: string;

		/**
		 * The identifier of the profile to be merged into MainProfileId.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 20
		 */
		ProfileIdsToBeMerged: Array<string>;

		/** A duplicate customer profile that is to be merged into a main profile. */
		FieldSourceProfileIds?: MergeProfilesPostBodyFieldSourceProfileIds;
	}
	export interface MergeProfilesPostBodyFormProperties {

		/**
		 * The identifier of the profile to be taken.
		 * Required
		 */
		MainProfileId: FormControl<string | null | undefined>,
	}
	export function CreateMergeProfilesPostBodyFormGroup() {
		return new FormGroup<MergeProfilesPostBodyFormProperties>({
			MainProfileId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('[a-f0-9]{32}')]),
		});

	}

	export interface MergeProfilesPostBodyFieldSourceProfileIds {
		AccountNumber?: string;
		AdditionalInformation?: string;
		PartyType?: string;
		BusinessName?: string;
		FirstName?: string;
		MiddleName?: string;
		LastName?: string;
		BirthDate?: string;
		Gender?: string;
		PhoneNumber?: string;
		MobilePhoneNumber?: string;
		HomePhoneNumber?: string;
		BusinessPhoneNumber?: string;
		EmailAddress?: string;
		PersonalEmailAddress?: string;
		BusinessEmailAddress?: string;
		Address?: string;
		ShippingAddress?: string;
		MailingAddress?: string;
		BillingAddress?: string;
		Attributes?: AttributeSourceIdMap;
	}
	export interface MergeProfilesPostBodyFieldSourceProfileIdsFormProperties {
		AccountNumber: FormControl<string | null | undefined>,
		AdditionalInformation: FormControl<string | null | undefined>,
		PartyType: FormControl<string | null | undefined>,
		BusinessName: FormControl<string | null | undefined>,
		FirstName: FormControl<string | null | undefined>,
		MiddleName: FormControl<string | null | undefined>,
		LastName: FormControl<string | null | undefined>,
		BirthDate: FormControl<string | null | undefined>,
		Gender: FormControl<string | null | undefined>,
		PhoneNumber: FormControl<string | null | undefined>,
		MobilePhoneNumber: FormControl<string | null | undefined>,
		HomePhoneNumber: FormControl<string | null | undefined>,
		BusinessPhoneNumber: FormControl<string | null | undefined>,
		EmailAddress: FormControl<string | null | undefined>,
		PersonalEmailAddress: FormControl<string | null | undefined>,
		BusinessEmailAddress: FormControl<string | null | undefined>,
		Address: FormControl<string | null | undefined>,
		ShippingAddress: FormControl<string | null | undefined>,
		MailingAddress: FormControl<string | null | undefined>,
		BillingAddress: FormControl<string | null | undefined>,
	}
	export function CreateMergeProfilesPostBodyFieldSourceProfileIdsFormGroup() {
		return new FormGroup<MergeProfilesPostBodyFieldSourceProfileIdsFormProperties>({
			AccountNumber: new FormControl<string | null | undefined>(undefined),
			AdditionalInformation: new FormControl<string | null | undefined>(undefined),
			PartyType: new FormControl<string | null | undefined>(undefined),
			BusinessName: new FormControl<string | null | undefined>(undefined),
			FirstName: new FormControl<string | null | undefined>(undefined),
			MiddleName: new FormControl<string | null | undefined>(undefined),
			LastName: new FormControl<string | null | undefined>(undefined),
			BirthDate: new FormControl<string | null | undefined>(undefined),
			Gender: new FormControl<string | null | undefined>(undefined),
			PhoneNumber: new FormControl<string | null | undefined>(undefined),
			MobilePhoneNumber: new FormControl<string | null | undefined>(undefined),
			HomePhoneNumber: new FormControl<string | null | undefined>(undefined),
			BusinessPhoneNumber: new FormControl<string | null | undefined>(undefined),
			EmailAddress: new FormControl<string | null | undefined>(undefined),
			PersonalEmailAddress: new FormControl<string | null | undefined>(undefined),
			BusinessEmailAddress: new FormControl<string | null | undefined>(undefined),
			Address: new FormControl<string | null | undefined>(undefined),
			ShippingAddress: new FormControl<string | null | undefined>(undefined),
			MailingAddress: new FormControl<string | null | undefined>(undefined),
			BillingAddress: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SearchProfilesPostBody {

		/**
		 * A searchable identifier of a customer profile. The predefined keys you can use to search include: _account, _profileId, _assetId, _caseId, _orderId, _fullName, _phone, _email, _ctrContactId, _marketoLeadId, _salesforceAccountId, _salesforceContactId, _salesforceAssetId, _zendeskUserId, _zendeskExternalId, _zendeskTicketId, _serviceNowSystemId, _serviceNowIncidentId, _segmentUserId, _shopifyCustomerId, _shopifyOrderId.
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		KeyName: string;

		/**
		 * A list of key values.
		 * Required
		 */
		Values: Array<string>;

		/**
		 * A list of <code>AdditionalSearchKey</code> objects that are each searchable identifiers of a profile. Each <code>AdditionalSearchKey</code> object contains a <code>KeyName</code> and a list of <code>Values</code> associated with that specific key (i.e., a key-value(s) pair). These additional search keys will be used in conjunction with the <code>LogicalOperator</code> and the required <code>KeyName</code> and <code>Values</code> parameters to search for profiles that satisfy the search criteria.
		 * Minimum items: 1
		 * Maximum items: 4
		 */
		AdditionalSearchKeys?: Array<AdditionalSearchKey>;

		/** <p>Relationship between all specified search keys that will be used to search for profiles. This includes the required <code>KeyName</code> and <code>Values</code> parameters as well as any key-value(s) pairs specified in the <code>AdditionalSearchKeys</code> list.</p> <p>This parameter influences which profiles will be returned in the response in the following manner:</p> <ul> <li> <p> <code>AND</code> - The response only includes profiles that match all of the search keys.</p> </li> <li> <p> <code>OR</code> - The response includes profiles that match at least one of the search keys.</p> </li> </ul> <p>The <code>OR</code> relationship is the default behavior if this parameter is not included in the request.</p> */
		LogicalOperator?: LogicalOperator | null;
	}
	export interface SearchProfilesPostBodyFormProperties {

		/**
		 * A searchable identifier of a customer profile. The predefined keys you can use to search include: _account, _profileId, _assetId, _caseId, _orderId, _fullName, _phone, _email, _ctrContactId, _marketoLeadId, _salesforceAccountId, _salesforceContactId, _salesforceAssetId, _zendeskUserId, _zendeskExternalId, _zendeskTicketId, _serviceNowSystemId, _serviceNowIncidentId, _segmentUserId, _shopifyCustomerId, _shopifyOrderId.
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		KeyName: FormControl<string | null | undefined>,

		/** <p>Relationship between all specified search keys that will be used to search for profiles. This includes the required <code>KeyName</code> and <code>Values</code> parameters as well as any key-value(s) pairs specified in the <code>AdditionalSearchKeys</code> list.</p> <p>This parameter influences which profiles will be returned in the response in the following manner:</p> <ul> <li> <p> <code>AND</code> - The response only includes profiles that match all of the search keys.</p> </li> <li> <p> <code>OR</code> - The response includes profiles that match at least one of the search keys.</p> </li> </ul> <p>The <code>OR</code> relationship is the default behavior if this parameter is not included in the request.</p> */
		LogicalOperator: FormControl<LogicalOperator | null | undefined>,
	}
	export function CreateSearchProfilesPostBodyFormGroup() {
		return new FormGroup<SearchProfilesPostBodyFormProperties>({
			KeyName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(64), Validators.pattern('^[a-zA-Z0-9_-]+$')]),
			LogicalOperator: new FormControl<LogicalOperator | null | undefined>(undefined),
		});

	}

}

