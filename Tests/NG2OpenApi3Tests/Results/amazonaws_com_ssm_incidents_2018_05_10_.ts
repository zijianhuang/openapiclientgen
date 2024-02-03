import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface CreateReplicationSetOutput {

		/** Required */
		arn: string;
	}
	export interface CreateReplicationSetOutputFormProperties {

		/** Required */
		arn: FormControl<string | null | undefined>,
	}
	export function CreateCreateReplicationSetOutputFormGroup() {
		return new FormGroup<CreateReplicationSetOutputFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The mapping between a Amazon Web Services Region and the key that's used to encrypt the data. */
	export interface RegionMapInputValue {
		sseKmsKeyId?: string;
	}

	/** The mapping between a Amazon Web Services Region and the key that's used to encrypt the data. */
	export interface RegionMapInputValueFormProperties {
		sseKmsKeyId: FormControl<string | null | undefined>,
	}
	export function CreateRegionMapInputValueFormGroup() {
		return new FormGroup<RegionMapInputValueFormProperties>({
			sseKmsKeyId: new FormControl<string | null | undefined>(undefined),
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

	export interface ThrottlingException {
	}
	export interface ThrottlingExceptionFormProperties {
	}
	export function CreateThrottlingExceptionFormGroup() {
		return new FormGroup<ThrottlingExceptionFormProperties>({
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

	export interface ValidationException {
	}
	export interface ValidationExceptionFormProperties {
	}
	export function CreateValidationExceptionFormGroup() {
		return new FormGroup<ValidationExceptionFormProperties>({
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

	export interface InternalServerException {
	}
	export interface InternalServerExceptionFormProperties {
	}
	export function CreateInternalServerExceptionFormGroup() {
		return new FormGroup<InternalServerExceptionFormProperties>({
		});

	}

	export interface CreateResponsePlanOutput {

		/** Required */
		arn: string;
	}
	export interface CreateResponsePlanOutputFormProperties {

		/** Required */
		arn: FormControl<string | null | undefined>,
	}
	export function CreateCreateResponsePlanOutputFormGroup() {
		return new FormGroup<CreateResponsePlanOutputFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The action that starts at the beginning of an incident. The response plan defines the action. */
	export interface Action {
		ssmAutomation?: SsmAutomation;
	}

	/** The action that starts at the beginning of an incident. The response plan defines the action. */
	export interface ActionFormProperties {
	}
	export function CreateActionFormGroup() {
		return new FormGroup<ActionFormProperties>({
		});

	}


	/** Details about the Systems Manager automation document that will be used as a runbook during an incident. */
	export interface SsmAutomation {

		/** Required */
		documentName: string;
		documentVersion?: string;
		dynamicParameters?: DynamicSsmParameters;
		parameters?: SsmParameters;

		/** Required */
		roleArn: string;
		targetAccount?: SsmTargetAccount;
	}

	/** Details about the Systems Manager automation document that will be used as a runbook during an incident. */
	export interface SsmAutomationFormProperties {

		/** Required */
		documentName: FormControl<string | null | undefined>,
		documentVersion: FormControl<string | null | undefined>,

		/** Required */
		roleArn: FormControl<string | null | undefined>,
		targetAccount: FormControl<SsmTargetAccount | null | undefined>,
	}
	export function CreateSsmAutomationFormGroup() {
		return new FormGroup<SsmAutomationFormProperties>({
			documentName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			documentVersion: new FormControl<string | null | undefined>(undefined),
			roleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			targetAccount: new FormControl<SsmTargetAccount | null | undefined>(undefined),
		});

	}

	export interface DynamicSsmParameters {
	}
	export interface DynamicSsmParametersFormProperties {
	}
	export function CreateDynamicSsmParametersFormGroup() {
		return new FormGroup<DynamicSsmParametersFormProperties>({
		});

	}

	export interface SsmParameters {
	}
	export interface SsmParametersFormProperties {
	}
	export function CreateSsmParametersFormGroup() {
		return new FormGroup<SsmParametersFormProperties>({
		});

	}

	export enum SsmTargetAccount { RESPONSE_PLAN_OWNER_ACCOUNT = 'RESPONSE_PLAN_OWNER_ACCOUNT', IMPACTED_ACCOUNT = 'IMPACTED_ACCOUNT' }


	/** Used to remove the chat channel from an incident record or response plan. */
	export interface EmptyChatChannel {
	}

	/** Used to remove the chat channel from an incident record or response plan. */
	export interface EmptyChatChannelFormProperties {
	}
	export function CreateEmptyChatChannelFormGroup() {
		return new FormGroup<EmptyChatChannelFormProperties>({
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


	/** The SNS targets that are notified when updates are made to an incident. */
	export interface NotificationTargetItem {
		snsTopicArn?: string;
	}

	/** The SNS targets that are notified when updates are made to an incident. */
	export interface NotificationTargetItemFormProperties {
		snsTopicArn: FormControl<string | null | undefined>,
	}
	export function CreateNotificationTargetItemFormGroup() {
		return new FormGroup<NotificationTargetItemFormProperties>({
			snsTopicArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about third-party services integrated into a response plan. */
	export interface Integration {
		pagerDutyConfiguration?: PagerDutyConfiguration;
	}

	/** Information about third-party services integrated into a response plan. */
	export interface IntegrationFormProperties {
	}
	export function CreateIntegrationFormGroup() {
		return new FormGroup<IntegrationFormProperties>({
		});

	}


	/** Details about the PagerDuty configuration for a response plan. */
	export interface PagerDutyConfiguration {

		/** Required */
		name: string;

		/** Required */
		pagerDutyIncidentConfiguration: PagerDutyIncidentConfiguration;

		/** Required */
		secretId: string;
	}

	/** Details about the PagerDuty configuration for a response plan. */
	export interface PagerDutyConfigurationFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		secretId: FormControl<string | null | undefined>,
	}
	export function CreatePagerDutyConfigurationFormGroup() {
		return new FormGroup<PagerDutyConfigurationFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			secretId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Details about the PagerDuty service where the response plan creates an incident. */
	export interface PagerDutyIncidentConfiguration {

		/** Required */
		serviceId: string;
	}

	/** Details about the PagerDuty service where the response plan creates an incident. */
	export interface PagerDutyIncidentConfigurationFormProperties {

		/** Required */
		serviceId: FormControl<string | null | undefined>,
	}
	export function CreatePagerDutyIncidentConfigurationFormGroup() {
		return new FormGroup<PagerDutyIncidentConfigurationFormProperties>({
			serviceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

	export interface CreateTimelineEventOutput {

		/** Required */
		eventId: string;

		/** Required */
		incidentRecordArn: string;
	}
	export interface CreateTimelineEventOutputFormProperties {

		/** Required */
		eventId: FormControl<string | null | undefined>,

		/** Required */
		incidentRecordArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateTimelineEventOutputFormGroup() {
		return new FormGroup<CreateTimelineEventOutputFormProperties>({
			eventId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			incidentRecordArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** An item referenced in a <code>TimelineEvent</code> that is involved in or somehow associated with an incident. You can specify an Amazon Resource Name (ARN) for an Amazon Web Services resource or a <code>RelatedItem</code> ID. */
	export interface EventReference {
		relatedItemId?: string;
		resource?: string;
	}

	/** An item referenced in a <code>TimelineEvent</code> that is involved in or somehow associated with an incident. You can specify an Amazon Resource Name (ARN) for an Amazon Web Services resource or a <code>RelatedItem</code> ID. */
	export interface EventReferenceFormProperties {
		relatedItemId: FormControl<string | null | undefined>,
		resource: FormControl<string | null | undefined>,
	}
	export function CreateEventReferenceFormGroup() {
		return new FormGroup<EventReferenceFormProperties>({
			relatedItemId: new FormControl<string | null | undefined>(undefined),
			resource: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteIncidentRecordOutput {
	}
	export interface DeleteIncidentRecordOutputFormProperties {
	}
	export function CreateDeleteIncidentRecordOutputFormGroup() {
		return new FormGroup<DeleteIncidentRecordOutputFormProperties>({
		});

	}

	export interface DeleteReplicationSetOutput {
	}
	export interface DeleteReplicationSetOutputFormProperties {
	}
	export function CreateDeleteReplicationSetOutputFormGroup() {
		return new FormGroup<DeleteReplicationSetOutputFormProperties>({
		});

	}

	export interface DeleteResourcePolicyOutput {
	}
	export interface DeleteResourcePolicyOutputFormProperties {
	}
	export function CreateDeleteResourcePolicyOutputFormGroup() {
		return new FormGroup<DeleteResourcePolicyOutputFormProperties>({
		});

	}

	export interface DeleteResponsePlanOutput {
	}
	export interface DeleteResponsePlanOutputFormProperties {
	}
	export function CreateDeleteResponsePlanOutputFormGroup() {
		return new FormGroup<DeleteResponsePlanOutputFormProperties>({
		});

	}

	export interface DeleteTimelineEventOutput {
	}
	export interface DeleteTimelineEventOutputFormProperties {
	}
	export function CreateDeleteTimelineEventOutputFormGroup() {
		return new FormGroup<DeleteTimelineEventOutputFormProperties>({
		});

	}

	export interface GetIncidentRecordOutput {

		/** Required */
		incidentRecord: IncidentRecord;
	}
	export interface GetIncidentRecordOutputFormProperties {
	}
	export function CreateGetIncidentRecordOutputFormGroup() {
		return new FormGroup<GetIncidentRecordOutputFormProperties>({
		});

	}


	/** The record of the incident that's created when an incident occurs. */
	export interface IncidentRecord {

		/** Required */
		arn: string;
		automationExecutions?: Array<AutomationExecution>;
		chatChannel?: ChatChannel;

		/** Required */
		creationTime: Date;

		/** Required */
		dedupeString: string;

		/** Required */
		impact: number;

		/** Required */
		incidentRecordSource: IncidentRecordSource;

		/** Required */
		lastModifiedBy: string;

		/** Required */
		lastModifiedTime: Date;
		notificationTargets?: Array<NotificationTargetItem>;
		resolvedTime?: Date;

		/** Required */
		status: IncidentRecordStatus;
		summary?: string;

		/** Required */
		title: string;
	}

	/** The record of the incident that's created when an incident occurs. */
	export interface IncidentRecordFormProperties {

		/** Required */
		arn: FormControl<string | null | undefined>,

		/** Required */
		creationTime: FormControl<Date | null | undefined>,

		/** Required */
		dedupeString: FormControl<string | null | undefined>,

		/** Required */
		impact: FormControl<number | null | undefined>,

		/** Required */
		lastModifiedBy: FormControl<string | null | undefined>,

		/** Required */
		lastModifiedTime: FormControl<Date | null | undefined>,
		resolvedTime: FormControl<Date | null | undefined>,

		/** Required */
		status: FormControl<IncidentRecordStatus | null | undefined>,
		summary: FormControl<string | null | undefined>,

		/** Required */
		title: FormControl<string | null | undefined>,
	}
	export function CreateIncidentRecordFormGroup() {
		return new FormGroup<IncidentRecordFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			creationTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			dedupeString: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			impact: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			lastModifiedBy: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			lastModifiedTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			resolvedTime: new FormControl<Date | null | undefined>(undefined),
			status: new FormControl<IncidentRecordStatus | null | undefined>(undefined, [Validators.required]),
			summary: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The Systems Manager automation document process to start as the runbook at the beginning of the incident. */
	export interface AutomationExecution {
		ssmExecutionArn?: string;
	}

	/** The Systems Manager automation document process to start as the runbook at the beginning of the incident. */
	export interface AutomationExecutionFormProperties {
		ssmExecutionArn: FormControl<string | null | undefined>,
	}
	export function CreateAutomationExecutionFormGroup() {
		return new FormGroup<AutomationExecutionFormProperties>({
			ssmExecutionArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The Chatbot chat channel used for collaboration during an incident. */
	export interface ChatChannel {
		chatbotSns?: Array<string>;
		empty?: EmptyChatChannel;
	}

	/** The Chatbot chat channel used for collaboration during an incident. */
	export interface ChatChannelFormProperties {
	}
	export function CreateChatChannelFormGroup() {
		return new FormGroup<ChatChannelFormProperties>({
		});

	}


	/** Details about what created the incident record and when it was created. */
	export interface IncidentRecordSource {

		/** Required */
		createdBy: string;
		invokedBy?: string;
		resourceArn?: string;

		/** Required */
		source: string;
	}

	/** Details about what created the incident record and when it was created. */
	export interface IncidentRecordSourceFormProperties {

		/** Required */
		createdBy: FormControl<string | null | undefined>,
		invokedBy: FormControl<string | null | undefined>,
		resourceArn: FormControl<string | null | undefined>,

		/** Required */
		source: FormControl<string | null | undefined>,
	}
	export function CreateIncidentRecordSourceFormGroup() {
		return new FormGroup<IncidentRecordSourceFormProperties>({
			createdBy: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			invokedBy: new FormControl<string | null | undefined>(undefined),
			resourceArn: new FormControl<string | null | undefined>(undefined),
			source: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum IncidentRecordStatus { OPEN = 'OPEN', RESOLVED = 'RESOLVED' }

	export interface GetReplicationSetOutput {

		/** Required */
		replicationSet: ReplicationSet;
	}
	export interface GetReplicationSetOutputFormProperties {
	}
	export function CreateGetReplicationSetOutputFormGroup() {
		return new FormGroup<GetReplicationSetOutputFormProperties>({
		});

	}


	/** The set of Amazon Web Services Region that your Incident Manager data will be replicated to and the KMS key used to encrypt the data.  */
	export interface ReplicationSet {
		arn?: string;

		/** Required */
		createdBy: string;

		/** Required */
		createdTime: Date;

		/** Required */
		deletionProtected: boolean;

		/** Required */
		lastModifiedBy: string;

		/** Required */
		lastModifiedTime: Date;

		/** Required */
		regionMap: RegionInfoMap;

		/** Required */
		status: ReplicationSetStatus;
	}

	/** The set of Amazon Web Services Region that your Incident Manager data will be replicated to and the KMS key used to encrypt the data.  */
	export interface ReplicationSetFormProperties {
		arn: FormControl<string | null | undefined>,

		/** Required */
		createdBy: FormControl<string | null | undefined>,

		/** Required */
		createdTime: FormControl<Date | null | undefined>,

		/** Required */
		deletionProtected: FormControl<boolean | null | undefined>,

		/** Required */
		lastModifiedBy: FormControl<string | null | undefined>,

		/** Required */
		lastModifiedTime: FormControl<Date | null | undefined>,

		/** Required */
		status: FormControl<ReplicationSetStatus | null | undefined>,
	}
	export function CreateReplicationSetFormGroup() {
		return new FormGroup<ReplicationSetFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			createdBy: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			createdTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			deletionProtected: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			lastModifiedBy: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			lastModifiedTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<ReplicationSetStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface RegionInfoMap {
	}
	export interface RegionInfoMapFormProperties {
	}
	export function CreateRegionInfoMapFormGroup() {
		return new FormGroup<RegionInfoMapFormProperties>({
		});

	}

	export enum ReplicationSetStatus { ACTIVE = 'ACTIVE', CREATING = 'CREATING', UPDATING = 'UPDATING', DELETING = 'DELETING', FAILED = 'FAILED' }

	export interface GetResourcePoliciesOutput {
		nextToken?: string;

		/** Required */
		resourcePolicies: Array<ResourcePolicy>;
	}
	export interface GetResourcePoliciesOutputFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetResourcePoliciesOutputFormGroup() {
		return new FormGroup<GetResourcePoliciesOutputFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The resource policy that allows Incident Manager to perform actions on resources on your behalf. */
	export interface ResourcePolicy {

		/** Required */
		policyDocument: string;

		/** Required */
		policyId: string;

		/** Required */
		ramResourceShareRegion: string;
	}

	/** The resource policy that allows Incident Manager to perform actions on resources on your behalf. */
	export interface ResourcePolicyFormProperties {

		/** Required */
		policyDocument: FormControl<string | null | undefined>,

		/** Required */
		policyId: FormControl<string | null | undefined>,

		/** Required */
		ramResourceShareRegion: FormControl<string | null | undefined>,
	}
	export function CreateResourcePolicyFormGroup() {
		return new FormGroup<ResourcePolicyFormProperties>({
			policyDocument: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			policyId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ramResourceShareRegion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetResponsePlanOutput {
		actions?: Array<Action>;

		/** Required */
		arn: string;
		chatChannel?: ChatChannel;
		displayName?: string;
		engagements?: Array<string>;

		/** Required */
		incidentTemplate: IncidentTemplate;
		integrations?: Array<Integration>;

		/** Required */
		name: string;
	}
	export interface GetResponsePlanOutputFormProperties {

		/** Required */
		arn: FormControl<string | null | undefined>,
		displayName: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGetResponsePlanOutputFormGroup() {
		return new FormGroup<GetResponsePlanOutputFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			displayName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Basic details used in creating a response plan. The response plan is then used to create an incident record. */
	export interface IncidentTemplate {
		dedupeString?: string;

		/** Required */
		impact: number;
		incidentTags?: TagMap;
		notificationTargets?: Array<NotificationTargetItem>;
		summary?: string;

		/** Required */
		title: string;
	}

	/** Basic details used in creating a response plan. The response plan is then used to create an incident record. */
	export interface IncidentTemplateFormProperties {
		dedupeString: FormControl<string | null | undefined>,

		/** Required */
		impact: FormControl<number | null | undefined>,
		summary: FormControl<string | null | undefined>,

		/** Required */
		title: FormControl<string | null | undefined>,
	}
	export function CreateIncidentTemplateFormGroup() {
		return new FormGroup<IncidentTemplateFormProperties>({
			dedupeString: new FormControl<string | null | undefined>(undefined),
			impact: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			summary: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetTimelineEventOutput {

		/** Required */
		event: TimelineEvent;
	}
	export interface GetTimelineEventOutputFormProperties {
	}
	export function CreateGetTimelineEventOutputFormGroup() {
		return new FormGroup<GetTimelineEventOutputFormProperties>({
		});

	}


	/** A significant event that happened during the incident.  */
	export interface TimelineEvent {

		/** Required */
		eventData: string;

		/** Required */
		eventId: string;
		eventReferences?: Array<EventReference>;

		/** Required */
		eventTime: Date;

		/** Required */
		eventType: string;

		/** Required */
		eventUpdatedTime: Date;

		/** Required */
		incidentRecordArn: string;
	}

	/** A significant event that happened during the incident.  */
	export interface TimelineEventFormProperties {

		/** Required */
		eventData: FormControl<string | null | undefined>,

		/** Required */
		eventId: FormControl<string | null | undefined>,

		/** Required */
		eventTime: FormControl<Date | null | undefined>,

		/** Required */
		eventType: FormControl<string | null | undefined>,

		/** Required */
		eventUpdatedTime: FormControl<Date | null | undefined>,

		/** Required */
		incidentRecordArn: FormControl<string | null | undefined>,
	}
	export function CreateTimelineEventFormGroup() {
		return new FormGroup<TimelineEventFormProperties>({
			eventData: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			eventId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			eventTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			eventType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			eventUpdatedTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			incidentRecordArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListIncidentRecordsOutput {

		/** Required */
		incidentRecordSummaries: Array<IncidentRecordSummary>;
		nextToken?: string;
	}
	export interface ListIncidentRecordsOutputFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListIncidentRecordsOutputFormGroup() {
		return new FormGroup<ListIncidentRecordsOutputFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details describing an incident record. */
	export interface IncidentRecordSummary {

		/** Required */
		arn: string;

		/** Required */
		creationTime: Date;

		/** Required */
		impact: number;

		/** Required */
		incidentRecordSource: IncidentRecordSource;
		resolvedTime?: Date;

		/** Required */
		status: IncidentRecordStatus;

		/** Required */
		title: string;
	}

	/** Details describing an incident record. */
	export interface IncidentRecordSummaryFormProperties {

		/** Required */
		arn: FormControl<string | null | undefined>,

		/** Required */
		creationTime: FormControl<Date | null | undefined>,

		/** Required */
		impact: FormControl<number | null | undefined>,
		resolvedTime: FormControl<Date | null | undefined>,

		/** Required */
		status: FormControl<IncidentRecordStatus | null | undefined>,

		/** Required */
		title: FormControl<string | null | undefined>,
	}
	export function CreateIncidentRecordSummaryFormGroup() {
		return new FormGroup<IncidentRecordSummaryFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			creationTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			impact: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			resolvedTime: new FormControl<Date | null | undefined>(undefined),
			status: new FormControl<IncidentRecordStatus | null | undefined>(undefined, [Validators.required]),
			title: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Filter the selection by using a condition. */
	export interface Filter {

		/** Required */
		condition: Condition;

		/** Required */
		key: string;
	}

	/** Filter the selection by using a condition. */
	export interface FilterFormProperties {

		/** Required */
		key: FormControl<string | null | undefined>,
	}
	export function CreateFilterFormGroup() {
		return new FormGroup<FilterFormProperties>({
			key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A conditional statement with which to compare a value, after a timestamp, before a timestamp, or equal to a string or integer. If multiple conditions are specified, the conditionals become an <code>AND</code>ed statement. If multiple values are specified for a conditional, the values are <code>OR</code>d. */
	export interface Condition {
		after?: Date;
		before?: Date;
		equals?: AttributeValueList;
	}

	/** A conditional statement with which to compare a value, after a timestamp, before a timestamp, or equal to a string or integer. If multiple conditions are specified, the conditionals become an <code>AND</code>ed statement. If multiple values are specified for a conditional, the values are <code>OR</code>d. */
	export interface ConditionFormProperties {
		after: FormControl<Date | null | undefined>,
		before: FormControl<Date | null | undefined>,
	}
	export function CreateConditionFormGroup() {
		return new FormGroup<ConditionFormProperties>({
			after: new FormControl<Date | null | undefined>(undefined),
			before: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Use the AttributeValueList to filter by string or integer values. */
	export interface AttributeValueList {
		integerValues?: Array<number> | null;
		stringValues?: Array<string>;
	}

	/** Use the AttributeValueList to filter by string or integer values. */
	export interface AttributeValueListFormProperties {
	}
	export function CreateAttributeValueListFormGroup() {
		return new FormGroup<AttributeValueListFormProperties>({
		});

	}

	export interface ListRelatedItemsOutput {
		nextToken?: string;

		/** Required */
		relatedItems: Array<RelatedItem>;
	}
	export interface ListRelatedItemsOutputFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListRelatedItemsOutputFormGroup() {
		return new FormGroup<ListRelatedItemsOutputFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Resources that responders use to triage and mitigate the incident. */
	export interface RelatedItem {
		generatedId?: string;

		/** Required */
		identifier: ItemIdentifier;
		title?: string;
	}

	/** Resources that responders use to triage and mitigate the incident. */
	export interface RelatedItemFormProperties {
		generatedId: FormControl<string | null | undefined>,
		title: FormControl<string | null | undefined>,
	}
	export function CreateRelatedItemFormGroup() {
		return new FormGroup<RelatedItemFormProperties>({
			generatedId: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details and type of a related item. */
	export interface ItemIdentifier {

		/** Required */
		type: ItemType;

		/** Required */
		value: ItemValue;
	}

	/** Details and type of a related item. */
	export interface ItemIdentifierFormProperties {

		/** Required */
		type: FormControl<ItemType | null | undefined>,
	}
	export function CreateItemIdentifierFormGroup() {
		return new FormGroup<ItemIdentifierFormProperties>({
			type: new FormControl<ItemType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ItemType { ANALYSIS = 'ANALYSIS', INCIDENT = 'INCIDENT', METRIC = 'METRIC', PARENT = 'PARENT', ATTACHMENT = 'ATTACHMENT', OTHER = 'OTHER', AUTOMATION = 'AUTOMATION', INVOLVED_RESOURCE = 'INVOLVED_RESOURCE', TASK = 'TASK' }


	/** Describes a related item. */
	export interface ItemValue {
		arn?: string;
		metricDefinition?: string;
		pagerDutyIncidentDetail?: PagerDutyIncidentDetail;
		url?: string;
	}

	/** Describes a related item. */
	export interface ItemValueFormProperties {
		arn: FormControl<string | null | undefined>,
		metricDefinition: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateItemValueFormGroup() {
		return new FormGroup<ItemValueFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			metricDefinition: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details about the PagerDuty incident associated with an incident created by an Incident Manager response plan. */
	export interface PagerDutyIncidentDetail {
		autoResolve?: boolean | null;

		/** Required */
		id: string;
		secretId?: string;
	}

	/** Details about the PagerDuty incident associated with an incident created by an Incident Manager response plan. */
	export interface PagerDutyIncidentDetailFormProperties {
		autoResolve: FormControl<boolean | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,
		secretId: FormControl<string | null | undefined>,
	}
	export function CreatePagerDutyIncidentDetailFormGroup() {
		return new FormGroup<PagerDutyIncidentDetailFormProperties>({
			autoResolve: new FormControl<boolean | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			secretId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListReplicationSetsOutput {
		nextToken?: string;

		/** Required */
		replicationSetArns: Array<string>;
	}
	export interface ListReplicationSetsOutputFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListReplicationSetsOutputFormGroup() {
		return new FormGroup<ListReplicationSetsOutputFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListResponsePlansOutput {
		nextToken?: string;

		/** Required */
		responsePlanSummaries: Array<ResponsePlanSummary>;
	}
	export interface ListResponsePlansOutputFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListResponsePlansOutputFormGroup() {
		return new FormGroup<ListResponsePlansOutputFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details of the response plan that are used when creating an incident. */
	export interface ResponsePlanSummary {

		/** Required */
		arn: string;
		displayName?: string;

		/** Required */
		name: string;
	}

	/** Details of the response plan that are used when creating an incident. */
	export interface ResponsePlanSummaryFormProperties {

		/** Required */
		arn: FormControl<string | null | undefined>,
		displayName: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
	}
	export function CreateResponsePlanSummaryFormGroup() {
		return new FormGroup<ResponsePlanSummaryFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			displayName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListTagsForResourceResponse {

		/** Required */
		tags: TagMap;
	}
	export interface ListTagsForResourceResponseFormProperties {
	}
	export function CreateListTagsForResourceResponseFormGroup() {
		return new FormGroup<ListTagsForResourceResponseFormProperties>({
		});

	}

	export interface ListTimelineEventsOutput {

		/** Required */
		eventSummaries: Array<EventSummary>;
		nextToken?: string;
	}
	export interface ListTimelineEventsOutputFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTimelineEventsOutputFormGroup() {
		return new FormGroup<ListTimelineEventsOutputFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details about a timeline event during an incident. */
	export interface EventSummary {

		/** Required */
		eventId: string;
		eventReferences?: Array<EventReference>;

		/** Required */
		eventTime: Date;

		/** Required */
		eventType: string;

		/** Required */
		eventUpdatedTime: Date;

		/** Required */
		incidentRecordArn: string;
	}

	/** Details about a timeline event during an incident. */
	export interface EventSummaryFormProperties {

		/** Required */
		eventId: FormControl<string | null | undefined>,

		/** Required */
		eventTime: FormControl<Date | null | undefined>,

		/** Required */
		eventType: FormControl<string | null | undefined>,

		/** Required */
		eventUpdatedTime: FormControl<Date | null | undefined>,

		/** Required */
		incidentRecordArn: FormControl<string | null | undefined>,
	}
	export function CreateEventSummaryFormGroup() {
		return new FormGroup<EventSummaryFormProperties>({
			eventId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			eventTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			eventType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			eventUpdatedTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			incidentRecordArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PutResourcePolicyOutput {

		/** Required */
		policyId: string;
	}
	export interface PutResourcePolicyOutputFormProperties {

		/** Required */
		policyId: FormControl<string | null | undefined>,
	}
	export function CreatePutResourcePolicyOutputFormGroup() {
		return new FormGroup<PutResourcePolicyOutputFormProperties>({
			policyId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface StartIncidentOutput {

		/** Required */
		incidentRecordArn: string;
	}
	export interface StartIncidentOutputFormProperties {

		/** Required */
		incidentRecordArn: FormControl<string | null | undefined>,
	}
	export function CreateStartIncidentOutputFormGroup() {
		return new FormGroup<StartIncidentOutputFormProperties>({
			incidentRecordArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

	export interface UpdateDeletionProtectionOutput {
	}
	export interface UpdateDeletionProtectionOutputFormProperties {
	}
	export function CreateUpdateDeletionProtectionOutputFormGroup() {
		return new FormGroup<UpdateDeletionProtectionOutputFormProperties>({
		});

	}

	export interface UpdateIncidentRecordOutput {
	}
	export interface UpdateIncidentRecordOutputFormProperties {
	}
	export function CreateUpdateIncidentRecordOutputFormGroup() {
		return new FormGroup<UpdateIncidentRecordOutputFormProperties>({
		});

	}

	export interface UpdateRelatedItemsOutput {
	}
	export interface UpdateRelatedItemsOutputFormProperties {
	}
	export function CreateUpdateRelatedItemsOutputFormGroup() {
		return new FormGroup<UpdateRelatedItemsOutputFormProperties>({
		});

	}

	export interface UpdateReplicationSetOutput {
	}
	export interface UpdateReplicationSetOutputFormProperties {
	}
	export function CreateUpdateReplicationSetOutputFormGroup() {
		return new FormGroup<UpdateReplicationSetOutputFormProperties>({
		});

	}


	/** Details used when updating the replication set. */
	export interface UpdateReplicationSetAction {
		addRegionAction?: AddRegionAction;
		deleteRegionAction?: DeleteRegionAction;
	}

	/** Details used when updating the replication set. */
	export interface UpdateReplicationSetActionFormProperties {
	}
	export function CreateUpdateReplicationSetActionFormGroup() {
		return new FormGroup<UpdateReplicationSetActionFormProperties>({
		});

	}


	/** Defines the Amazon Web Services Region and KMS key to add to the replication set.  */
	export interface AddRegionAction {

		/** Required */
		regionName: string;
		sseKmsKeyId?: string;
	}

	/** Defines the Amazon Web Services Region and KMS key to add to the replication set.  */
	export interface AddRegionActionFormProperties {

		/** Required */
		regionName: FormControl<string | null | undefined>,
		sseKmsKeyId: FormControl<string | null | undefined>,
	}
	export function CreateAddRegionActionFormGroup() {
		return new FormGroup<AddRegionActionFormProperties>({
			regionName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sseKmsKeyId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Defines the information about the Amazon Web Services Region you're deleting from your replication set. */
	export interface DeleteRegionAction {

		/** Required */
		regionName: string;
	}

	/** Defines the information about the Amazon Web Services Region you're deleting from your replication set. */
	export interface DeleteRegionActionFormProperties {

		/** Required */
		regionName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteRegionActionFormGroup() {
		return new FormGroup<DeleteRegionActionFormProperties>({
			regionName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateResponsePlanOutput {
	}
	export interface UpdateResponsePlanOutputFormProperties {
	}
	export function CreateUpdateResponsePlanOutputFormGroup() {
		return new FormGroup<UpdateResponsePlanOutputFormProperties>({
		});

	}

	export interface UpdateTimelineEventOutput {
	}
	export interface UpdateTimelineEventOutputFormProperties {
	}
	export function CreateUpdateTimelineEventOutputFormGroup() {
		return new FormGroup<UpdateTimelineEventOutputFormProperties>({
		});

	}

	export interface RegionMapInput {
	}
	export interface RegionMapInputFormProperties {
	}
	export function CreateRegionMapInputFormGroup() {
		return new FormGroup<RegionMapInputFormProperties>({
		});

	}

	export interface CreateReplicationSetInput {
		clientToken?: string;

		/** Required */
		regions: RegionMapInput;
		tags?: TagMap;
	}
	export interface CreateReplicationSetInputFormProperties {
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateReplicationSetInputFormGroup() {
		return new FormGroup<CreateReplicationSetInputFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateResponsePlanInput {
		actions?: Array<Action>;
		chatChannel?: ChatChannel;
		clientToken?: string;
		displayName?: string;
		engagements?: Array<string>;

		/** Required */
		incidentTemplate: IncidentTemplate;
		integrations?: Array<Integration>;

		/** Required */
		name: string;
		tags?: TagMap;
	}
	export interface CreateResponsePlanInputFormProperties {
		clientToken: FormControl<string | null | undefined>,
		displayName: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
	}
	export function CreateCreateResponsePlanInputFormGroup() {
		return new FormGroup<CreateResponsePlanInputFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateTimelineEventInput {
		clientToken?: string;

		/** Required */
		eventData: string;
		eventReferences?: Array<EventReference>;

		/** Required */
		eventTime: Date;

		/** Required */
		eventType: string;

		/** Required */
		incidentRecordArn: string;
	}
	export interface CreateTimelineEventInputFormProperties {
		clientToken: FormControl<string | null | undefined>,

		/** Required */
		eventData: FormControl<string | null | undefined>,

		/** Required */
		eventTime: FormControl<Date | null | undefined>,

		/** Required */
		eventType: FormControl<string | null | undefined>,

		/** Required */
		incidentRecordArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateTimelineEventInputFormGroup() {
		return new FormGroup<CreateTimelineEventInputFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined),
			eventData: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			eventTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			eventType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			incidentRecordArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteIncidentRecordInput {

		/** Required */
		arn: string;
	}
	export interface DeleteIncidentRecordInputFormProperties {

		/** Required */
		arn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteIncidentRecordInputFormGroup() {
		return new FormGroup<DeleteIncidentRecordInputFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteReplicationSetInput {
	}
	export interface DeleteReplicationSetInputFormProperties {
	}
	export function CreateDeleteReplicationSetInputFormGroup() {
		return new FormGroup<DeleteReplicationSetInputFormProperties>({
		});

	}

	export interface DeleteResourcePolicyInput {

		/** Required */
		policyId: string;

		/** Required */
		resourceArn: string;
	}
	export interface DeleteResourcePolicyInputFormProperties {

		/** Required */
		policyId: FormControl<string | null | undefined>,

		/** Required */
		resourceArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteResourcePolicyInputFormGroup() {
		return new FormGroup<DeleteResourcePolicyInputFormProperties>({
			policyId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteResponsePlanInput {

		/** Required */
		arn: string;
	}
	export interface DeleteResponsePlanInputFormProperties {

		/** Required */
		arn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteResponsePlanInputFormGroup() {
		return new FormGroup<DeleteResponsePlanInputFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteTimelineEventInput {

		/** Required */
		eventId: string;

		/** Required */
		incidentRecordArn: string;
	}
	export interface DeleteTimelineEventInputFormProperties {

		/** Required */
		eventId: FormControl<string | null | undefined>,

		/** Required */
		incidentRecordArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteTimelineEventInputFormGroup() {
		return new FormGroup<DeleteTimelineEventInputFormProperties>({
			eventId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			incidentRecordArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum VariableType { INCIDENT_RECORD_ARN = 'INCIDENT_RECORD_ARN', INVOLVED_RESOURCES = 'INVOLVED_RESOURCES' }


	/** The dynamic SSM parameter value. */
	export interface DynamicSsmParameterValue {
		variable?: VariableType;
	}

	/** The dynamic SSM parameter value. */
	export interface DynamicSsmParameterValueFormProperties {
		variable: FormControl<VariableType | null | undefined>,
	}
	export function CreateDynamicSsmParameterValueFormGroup() {
		return new FormGroup<DynamicSsmParameterValueFormProperties>({
			variable: new FormControl<VariableType | null | undefined>(undefined),
		});

	}

	export interface GetIncidentRecordInput {
	}
	export interface GetIncidentRecordInputFormProperties {
	}
	export function CreateGetIncidentRecordInputFormGroup() {
		return new FormGroup<GetIncidentRecordInputFormProperties>({
		});

	}

	export interface GetReplicationSetInput {
	}
	export interface GetReplicationSetInputFormProperties {
	}
	export function CreateGetReplicationSetInputFormGroup() {
		return new FormGroup<GetReplicationSetInputFormProperties>({
		});

	}

	export interface GetResourcePoliciesInput {
		maxResults?: number | null;
		nextToken?: string;
	}
	export interface GetResourcePoliciesInputFormProperties {
		maxResults: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetResourcePoliciesInputFormGroup() {
		return new FormGroup<GetResourcePoliciesInputFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetResponsePlanInput {
	}
	export interface GetResponsePlanInputFormProperties {
	}
	export function CreateGetResponsePlanInputFormGroup() {
		return new FormGroup<GetResponsePlanInputFormProperties>({
		});

	}

	export interface GetTimelineEventInput {
	}
	export interface GetTimelineEventInputFormProperties {
	}
	export function CreateGetTimelineEventInputFormGroup() {
		return new FormGroup<GetTimelineEventInputFormProperties>({
		});

	}

	export interface ListIncidentRecordsInput {
		filters?: Array<Filter>;
		maxResults?: number | null;
		nextToken?: string;
	}
	export interface ListIncidentRecordsInputFormProperties {
		maxResults: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListIncidentRecordsInputFormGroup() {
		return new FormGroup<ListIncidentRecordsInputFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListRelatedItemsInput {

		/** Required */
		incidentRecordArn: string;
		maxResults?: number | null;
		nextToken?: string;
	}
	export interface ListRelatedItemsInputFormProperties {

		/** Required */
		incidentRecordArn: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListRelatedItemsInputFormGroup() {
		return new FormGroup<ListRelatedItemsInputFormProperties>({
			incidentRecordArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListReplicationSetsInput {
		maxResults?: number | null;
		nextToken?: string;
	}
	export interface ListReplicationSetsInputFormProperties {
		maxResults: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListReplicationSetsInputFormGroup() {
		return new FormGroup<ListReplicationSetsInputFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListResponsePlansInput {
		maxResults?: number | null;
		nextToken?: string;
	}
	export interface ListResponsePlansInputFormProperties {
		maxResults: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListResponsePlansInputFormGroup() {
		return new FormGroup<ListResponsePlansInputFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
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

	export enum TimelineEventSort { EVENT_TIME = 'EVENT_TIME' }

	export enum SortOrder { ASCENDING = 'ASCENDING', DESCENDING = 'DESCENDING' }

	export interface ListTimelineEventsInput {
		filters?: Array<Filter>;

		/** Required */
		incidentRecordArn: string;
		maxResults?: number | null;
		nextToken?: string;
		sortBy?: TimelineEventSort;
		sortOrder?: SortOrder;
	}
	export interface ListTimelineEventsInputFormProperties {

		/** Required */
		incidentRecordArn: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
		sortBy: FormControl<TimelineEventSort | null | undefined>,
		sortOrder: FormControl<SortOrder | null | undefined>,
	}
	export function CreateListTimelineEventsInputFormGroup() {
		return new FormGroup<ListTimelineEventsInputFormProperties>({
			incidentRecordArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
			sortBy: new FormControl<TimelineEventSort | null | undefined>(undefined),
			sortOrder: new FormControl<SortOrder | null | undefined>(undefined),
		});

	}

	export interface PutResourcePolicyInput {

		/** Required */
		policy: string;

		/** Required */
		resourceArn: string;
	}
	export interface PutResourcePolicyInputFormProperties {

		/** Required */
		policy: FormControl<string | null | undefined>,

		/** Required */
		resourceArn: FormControl<string | null | undefined>,
	}
	export function CreatePutResourcePolicyInputFormGroup() {
		return new FormGroup<PutResourcePolicyInputFormProperties>({
			policy: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum RegionStatus { ACTIVE = 'ACTIVE', CREATING = 'CREATING', DELETING = 'DELETING', FAILED = 'FAILED' }


	/** Information about a Amazon Web Services Region in your replication set. */
	export interface RegionInfo {
		sseKmsKeyId?: string;

		/** Required */
		status: RegionStatus;
		statusMessage?: string;

		/** Required */
		statusUpdateDateTime: Date;
	}

	/** Information about a Amazon Web Services Region in your replication set. */
	export interface RegionInfoFormProperties {
		sseKmsKeyId: FormControl<string | null | undefined>,

		/** Required */
		status: FormControl<RegionStatus | null | undefined>,
		statusMessage: FormControl<string | null | undefined>,

		/** Required */
		statusUpdateDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateRegionInfoFormGroup() {
		return new FormGroup<RegionInfoFormProperties>({
			sseKmsKeyId: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<RegionStatus | null | undefined>(undefined, [Validators.required]),
			statusMessage: new FormControl<string | null | undefined>(undefined),
			statusUpdateDateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Details about the related item you're adding. */
	export interface RelatedItemsUpdate {
		itemToAdd?: RelatedItem;
		itemToRemove?: ItemIdentifier;
	}

	/** Details about the related item you're adding. */
	export interface RelatedItemsUpdateFormProperties {
	}
	export function CreateRelatedItemsUpdateFormGroup() {
		return new FormGroup<RelatedItemsUpdateFormProperties>({
		});

	}


	/** Details about what caused the incident to be created in Incident Manager. */
	export interface TriggerDetails {
		rawData?: string;

		/** Required */
		source: string;

		/** Required */
		timestamp: Date;
		triggerArn?: string;
	}

	/** Details about what caused the incident to be created in Incident Manager. */
	export interface TriggerDetailsFormProperties {
		rawData: FormControl<string | null | undefined>,

		/** Required */
		source: FormControl<string | null | undefined>,

		/** Required */
		timestamp: FormControl<Date | null | undefined>,
		triggerArn: FormControl<string | null | undefined>,
	}
	export function CreateTriggerDetailsFormGroup() {
		return new FormGroup<TriggerDetailsFormProperties>({
			rawData: new FormControl<string | null | undefined>(undefined),
			source: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			timestamp: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			triggerArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StartIncidentInput {
		clientToken?: string;
		impact?: number | null;
		relatedItems?: Array<RelatedItem>;

		/** Required */
		responsePlanArn: string;
		title?: string;
		triggerDetails?: TriggerDetails;
	}
	export interface StartIncidentInputFormProperties {
		clientToken: FormControl<string | null | undefined>,
		impact: FormControl<number | null | undefined>,

		/** Required */
		responsePlanArn: FormControl<string | null | undefined>,
		title: FormControl<string | null | undefined>,
	}
	export function CreateStartIncidentInputFormGroup() {
		return new FormGroup<StartIncidentInputFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined),
			impact: new FormControl<number | null | undefined>(undefined),
			responsePlanArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TagMapUpdate {
	}
	export interface TagMapUpdateFormProperties {
	}
	export function CreateTagMapUpdateFormGroup() {
		return new FormGroup<TagMapUpdateFormProperties>({
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

	export interface UpdateDeletionProtectionInput {

		/** Required */
		arn: string;
		clientToken?: string;

		/** Required */
		deletionProtected: boolean;
	}
	export interface UpdateDeletionProtectionInputFormProperties {

		/** Required */
		arn: FormControl<string | null | undefined>,
		clientToken: FormControl<string | null | undefined>,

		/** Required */
		deletionProtected: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateDeletionProtectionInputFormGroup() {
		return new FormGroup<UpdateDeletionProtectionInputFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			clientToken: new FormControl<string | null | undefined>(undefined),
			deletionProtected: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateIncidentRecordInput {

		/** Required */
		arn: string;
		chatChannel?: ChatChannel;
		clientToken?: string;
		impact?: number | null;
		notificationTargets?: Array<NotificationTargetItem>;
		status?: IncidentRecordStatus;
		summary?: string;
		title?: string;
	}
	export interface UpdateIncidentRecordInputFormProperties {

		/** Required */
		arn: FormControl<string | null | undefined>,
		clientToken: FormControl<string | null | undefined>,
		impact: FormControl<number | null | undefined>,
		status: FormControl<IncidentRecordStatus | null | undefined>,
		summary: FormControl<string | null | undefined>,
		title: FormControl<string | null | undefined>,
	}
	export function CreateUpdateIncidentRecordInputFormGroup() {
		return new FormGroup<UpdateIncidentRecordInputFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			clientToken: new FormControl<string | null | undefined>(undefined),
			impact: new FormControl<number | null | undefined>(undefined),
			status: new FormControl<IncidentRecordStatus | null | undefined>(undefined),
			summary: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateRelatedItemsInput {
		clientToken?: string;

		/** Required */
		incidentRecordArn: string;

		/** Required */
		relatedItemsUpdate: RelatedItemsUpdate;
	}
	export interface UpdateRelatedItemsInputFormProperties {
		clientToken: FormControl<string | null | undefined>,

		/** Required */
		incidentRecordArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateRelatedItemsInputFormGroup() {
		return new FormGroup<UpdateRelatedItemsInputFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined),
			incidentRecordArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateReplicationSetInput {

		/** Required */
		actions: Array<UpdateReplicationSetAction>;

		/** Required */
		arn: string;
		clientToken?: string;
	}
	export interface UpdateReplicationSetInputFormProperties {

		/** Required */
		arn: FormControl<string | null | undefined>,
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateUpdateReplicationSetInputFormGroup() {
		return new FormGroup<UpdateReplicationSetInputFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			clientToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateResponsePlanInput {
		actions?: Array<Action>;

		/** Required */
		arn: string;
		chatChannel?: ChatChannel;
		clientToken?: string;
		displayName?: string;
		engagements?: Array<string>;
		incidentTemplateDedupeString?: string;
		incidentTemplateImpact?: number | null;
		incidentTemplateNotificationTargets?: Array<NotificationTargetItem>;
		incidentTemplateSummary?: string;
		incidentTemplateTags?: TagMapUpdate;
		incidentTemplateTitle?: string;
		integrations?: Array<Integration>;
	}
	export interface UpdateResponsePlanInputFormProperties {

		/** Required */
		arn: FormControl<string | null | undefined>,
		clientToken: FormControl<string | null | undefined>,
		displayName: FormControl<string | null | undefined>,
		incidentTemplateDedupeString: FormControl<string | null | undefined>,
		incidentTemplateImpact: FormControl<number | null | undefined>,
		incidentTemplateSummary: FormControl<string | null | undefined>,
		incidentTemplateTitle: FormControl<string | null | undefined>,
	}
	export function CreateUpdateResponsePlanInputFormGroup() {
		return new FormGroup<UpdateResponsePlanInputFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			clientToken: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			incidentTemplateDedupeString: new FormControl<string | null | undefined>(undefined),
			incidentTemplateImpact: new FormControl<number | null | undefined>(undefined),
			incidentTemplateSummary: new FormControl<string | null | undefined>(undefined),
			incidentTemplateTitle: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateTimelineEventInput {
		clientToken?: string;
		eventData?: string;

		/** Required */
		eventId: string;
		eventReferences?: Array<EventReference>;
		eventTime?: Date;
		eventType?: string;

		/** Required */
		incidentRecordArn: string;
	}
	export interface UpdateTimelineEventInputFormProperties {
		clientToken: FormControl<string | null | undefined>,
		eventData: FormControl<string | null | undefined>,

		/** Required */
		eventId: FormControl<string | null | undefined>,
		eventTime: FormControl<Date | null | undefined>,
		eventType: FormControl<string | null | undefined>,

		/** Required */
		incidentRecordArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateTimelineEventInputFormGroup() {
		return new FormGroup<UpdateTimelineEventInputFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined),
			eventData: new FormControl<string | null | undefined>(undefined),
			eventId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			eventTime: new FormControl<Date | null | undefined>(undefined),
			eventType: new FormControl<string | null | undefined>(undefined),
			incidentRecordArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * A replication set replicates and encrypts your data to the provided Regions with the provided KMS key.
		 * Post createReplicationSet
		 * @return {void} 
		 */
		CreateReplicationSet(requestBody: CreateReplicationSetPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'createReplicationSet', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a response plan that automates the initial response to incidents. A response plan engages contacts, starts chat channel collaboration, and initiates runbooks at the beginning of an incident.
		 * Post createResponsePlan
		 * @return {void} 
		 */
		CreateResponsePlan(requestBody: CreateResponsePlanPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'createResponsePlan', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a custom timeline event on the incident details page of an incident record. Incident Manager automatically creates timeline events that mark key moments during an incident. You can create custom timeline events to mark important events that Incident Manager can detect automatically.
		 * Post createTimelineEvent
		 * @return {void} 
		 */
		CreateTimelineEvent(requestBody: CreateTimelineEventPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'createTimelineEvent', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete an incident record from Incident Manager.
		 * Post deleteIncidentRecord
		 * @return {void} 
		 */
		DeleteIncidentRecord(requestBody: DeleteIncidentRecordPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'deleteIncidentRecord', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes all Regions in your replication set. Deleting the replication set deletes all Incident Manager data.
		 * Post deleteReplicationSet#arn
		 * @param {string} arn The Amazon Resource Name (ARN) of the replication set you're deleting.
		 * @return {void} 
		 */
		DeleteReplicationSet(arn: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'deleteReplicationSet#arn?arn=' + (arn == null ? '' : encodeURIComponent(arn)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes the resource policy that Resource Access Manager uses to share your Incident Manager resource.
		 * Post deleteResourcePolicy
		 * @return {DeleteResourcePolicyOutput} Success
		 */
		DeleteResourcePolicy(requestBody: DeleteResourcePolicyPostBody): Observable<DeleteResourcePolicyOutput> {
			return this.http.post<DeleteResourcePolicyOutput>(this.baseUri + 'deleteResourcePolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the specified response plan. Deleting a response plan stops all linked CloudWatch alarms and EventBridge events from creating an incident with this response plan.
		 * Post deleteResponsePlan
		 * @return {void} 
		 */
		DeleteResponsePlan(requestBody: DeleteResponsePlanPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'deleteResponsePlan', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a timeline event from an incident.
		 * Post deleteTimelineEvent
		 * @return {void} 
		 */
		DeleteTimelineEvent(requestBody: DeleteTimelineEventPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'deleteTimelineEvent', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns the details for the specified incident record.
		 * Get getIncidentRecord#arn
		 * @param {string} arn The Amazon Resource Name (ARN) of the incident record.
		 * @return {GetIncidentRecordOutput} Success
		 */
		GetIncidentRecord(arn: string): Observable<GetIncidentRecordOutput> {
			return this.http.get<GetIncidentRecordOutput>(this.baseUri + 'getIncidentRecord#arn?arn=' + (arn == null ? '' : encodeURIComponent(arn)), {});
		}

		/**
		 * Retrieve your Incident Manager replication set.
		 * Get getReplicationSet#arn
		 * @param {string} arn The Amazon Resource Name (ARN) of the replication set you want to retrieve.
		 * @return {GetReplicationSetOutput} Success
		 */
		GetReplicationSet(arn: string): Observable<GetReplicationSetOutput> {
			return this.http.get<GetReplicationSetOutput>(this.baseUri + 'getReplicationSet#arn?arn=' + (arn == null ? '' : encodeURIComponent(arn)), {});
		}

		/**
		 * Retrieves the resource policies attached to the specified response plan.
		 * Post getResourcePolicies#resourceArn
		 * @param {string} resourceArn The Amazon Resource Name (ARN) of the response plan with the attached resource policy. 
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {GetResourcePoliciesOutput} Success
		 */
		GetResourcePolicies(resourceArn: string, maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: GetResourcePoliciesPostBody): Observable<GetResourcePoliciesOutput> {
			return this.http.post<GetResourcePoliciesOutput>(this.baseUri + 'getResourcePolicies#resourceArn?resourceArn=' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)) + '&maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves the details of the specified response plan.
		 * Get getResponsePlan#arn
		 * @param {string} arn The Amazon Resource Name (ARN) of the response plan.
		 * @return {GetResponsePlanOutput} Success
		 */
		GetResponsePlan(arn: string): Observable<GetResponsePlanOutput> {
			return this.http.get<GetResponsePlanOutput>(this.baseUri + 'getResponsePlan#arn?arn=' + (arn == null ? '' : encodeURIComponent(arn)), {});
		}

		/**
		 * Retrieves a timeline event based on its ID and incident record.
		 * Get getTimelineEvent#eventId&incidentRecordArn
		 * @param {string} eventId The ID of the event. You can get an event's ID when you create it, or by using <code>ListTimelineEvents</code>.
		 * @param {string} incidentRecordArn The Amazon Resource Name (ARN) of the incident that includes the timeline event.
		 * @return {GetTimelineEventOutput} Success
		 */
		GetTimelineEvent(eventId: string, incidentRecordArn: string): Observable<GetTimelineEventOutput> {
			return this.http.get<GetTimelineEventOutput>(this.baseUri + 'getTimelineEvent#eventId&incidentRecordArn?eventId=' + (eventId == null ? '' : encodeURIComponent(eventId)) + '&incidentRecordArn=' + (incidentRecordArn == null ? '' : encodeURIComponent(incidentRecordArn)), {});
		}

		/**
		 * Lists all incident records in your account. Use this command to retrieve the Amazon Resource Name (ARN) of the incident record you want to update.
		 * Post listIncidentRecords
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListIncidentRecordsOutput} Success
		 */
		ListIncidentRecords(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListIncidentRecordsPostBody): Observable<ListIncidentRecordsOutput> {
			return this.http.post<ListIncidentRecordsOutput>(this.baseUri + 'listIncidentRecords?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List all related items for an incident record.
		 * Post listRelatedItems
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListRelatedItemsOutput} Success
		 */
		ListRelatedItems(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListRelatedItemsPostBody): Observable<ListRelatedItemsOutput> {
			return this.http.post<ListRelatedItemsOutput>(this.baseUri + 'listRelatedItems?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists details about the replication set configured in your account.
		 * Post listReplicationSets
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListReplicationSetsOutput} Success
		 */
		ListReplicationSets(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListReplicationSetsPostBody): Observable<ListReplicationSetsOutput> {
			return this.http.post<ListReplicationSetsOutput>(this.baseUri + 'listReplicationSets?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all response plans in your account.
		 * Post listResponsePlans
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListResponsePlansOutput} Success
		 */
		ListResponsePlans(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListResponsePlansPostBody): Observable<ListResponsePlansOutput> {
			return this.http.post<ListResponsePlansOutput>(this.baseUri + 'listResponsePlans?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the tags that are attached to the specified response plan.
		 * Get tags/{resourceArn}
		 * @param {string} resourceArn The Amazon Resource Name (ARN) of the response plan.
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(resourceArn: string): Observable<ListTagsForResourceResponse> {
			return this.http.get<ListTagsForResourceResponse>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), {});
		}

		/**
		 * Adds a tag to a response plan.
		 * Post tags/{resourceArn}
		 * @param {string} resourceArn The Amazon Resource Name (ARN) of the response plan you're adding the tags to.
		 * @return {void} 
		 */
		TagResource(resourceArn: string, requestBody: TagResourcePostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists timeline events for the specified incident record.
		 * Post listTimelineEvents
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListTimelineEventsOutput} Success
		 */
		ListTimelineEvents(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListTimelineEventsPostBody): Observable<ListTimelineEventsOutput> {
			return this.http.post<ListTimelineEventsOutput>(this.baseUri + 'listTimelineEvents?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Adds a resource policy to the specified response plan. The resource policy is used to share the response plan using Resource Access Manager (RAM). For more information about cross-account sharing, see <a href="https://docs.aws.amazon.com/incident-manager/latest/userguide/incident-manager-cross-account-cross-region.html">Cross-Region and cross-account incident management</a>.
		 * Post putResourcePolicy
		 * @return {PutResourcePolicyOutput} Success
		 */
		PutResourcePolicy(requestBody: PutResourcePolicyPostBody): Observable<PutResourcePolicyOutput> {
			return this.http.post<PutResourcePolicyOutput>(this.baseUri + 'putResourcePolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Used to start an incident from CloudWatch alarms, EventBridge events, or manually.
		 * Post startIncident
		 * @return {StartIncidentOutput} Success
		 */
		StartIncident(requestBody: StartIncidentPostBody): Observable<StartIncidentOutput> {
			return this.http.post<StartIncidentOutput>(this.baseUri + 'startIncident', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes a tag from a resource.
		 * Delete tags/{resourceArn}#tagKeys
		 * @param {string} resourceArn The Amazon Resource Name (ARN) of the response plan you're removing a tag from.
		 * @param {Array<string>} tagKeys The name of the tag to remove from the response plan.
		 * @return {void} 
		 */
		UntagResource(resourceArn: string, tagKeys: Array<string>): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)) + '#tagKeys&' + tagKeys.map(z => `tagKeys=${encodeURIComponent(z)}`).join('&'), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Update deletion protection to either allow or deny deletion of the final Region in a replication set.
		 * Post updateDeletionProtection
		 * @return {void} 
		 */
		UpdateDeletionProtection(requestBody: UpdateDeletionProtectionPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'updateDeletionProtection', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Update the details of an incident record. You can use this operation to update an incident record from the defined chat channel. For more information about using actions in chat channels, see <a href="https://docs.aws.amazon.com/incident-manager/latest/userguide/chat.html#chat-interact">Interacting through chat</a>.
		 * Post updateIncidentRecord
		 * @return {void} 
		 */
		UpdateIncidentRecord(requestBody: UpdateIncidentRecordPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'updateIncidentRecord', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Add or remove related items from the related items tab of an incident record.
		 * Post updateRelatedItems
		 * @return {void} 
		 */
		UpdateRelatedItems(requestBody: UpdateRelatedItemsPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'updateRelatedItems', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Add or delete Regions from your replication set.
		 * Post updateReplicationSet
		 * @return {void} 
		 */
		UpdateReplicationSet(requestBody: UpdateReplicationSetPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'updateReplicationSet', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates the specified response plan.
		 * Post updateResponsePlan
		 * @return {void} 
		 */
		UpdateResponsePlan(requestBody: UpdateResponsePlanPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'updateResponsePlan', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates a timeline event. You can update events of type <code>Custom Event</code>.
		 * Post updateTimelineEvent
		 * @return {void} 
		 */
		UpdateTimelineEvent(requestBody: UpdateTimelineEventPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'updateTimelineEvent', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

	export interface CreateReplicationSetPostBody {

		/**
		 * A token that ensures that the operation is called only once with the specified details.
		 * Max length: 128
		 * Min length: 0
		 */
		clientToken?: string | null;

		/**
		 * The Regions that Incident Manager replicates your data to. You can have up to three Regions in your replication set.
		 * Required
		 */
		regions: {[id: string]: RegionMapInputValue };

		/** A list of tags to add to the replication set. */
		tags?: {[id: string]: string };
	}
	export interface CreateReplicationSetPostBodyFormProperties {

		/**
		 * A token that ensures that the operation is called only once with the specified details.
		 * Max length: 128
		 * Min length: 0
		 */
		clientToken: FormControl<string | null | undefined>,

		/**
		 * The Regions that Incident Manager replicates your data to. You can have up to three Regions in your replication set.
		 * Required
		 */
		regions: FormControl<{[id: string]: RegionMapInputValue } | null | undefined>,

		/** A list of tags to add to the replication set. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateReplicationSetPostBodyFormGroup() {
		return new FormGroup<CreateReplicationSetPostBodyFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(128)]),
			regions: new FormControl<{[id: string]: RegionMapInputValue } | null | undefined>(undefined, [Validators.required]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateResponsePlanPostBody {

		/**
		 * The actions that the response plan starts at the beginning of an incident.
		 * Minimum items: 0
		 * Maximum items: 1
		 */
		actions?: Array<Action>;

		/** The Chatbot chat channel used for collaboration during an incident. */
		chatChannel?: CreateResponsePlanPostBodyChatChannel;

		/**
		 * A token ensuring that the operation is called only once with the specified details.
		 * Max length: 128
		 * Min length: 0
		 */
		clientToken?: string | null;

		/**
		 * The long format of the response plan name. This field can contain spaces.
		 * Max length: 200
		 * Min length: 0
		 */
		displayName?: string | null;

		/**
		 * The Amazon Resource Name (ARN) for the contacts and escalation plans that the response plan engages during an incident.
		 * Minimum items: 0
		 * Maximum items: 5
		 */
		engagements?: Array<string>;

		/**
		 * Basic details used in creating a response plan. The response plan is then used to create an incident record.
		 * Required
		 */
		incidentTemplate: CreateResponsePlanPostBodyIncidentTemplate;

		/**
		 * Information about third-party services integrated into the response plan.
		 * Minimum items: 0
		 * Maximum items: 1
		 */
		integrations?: Array<Integration>;

		/**
		 * The short format name of the response plan. Can't include spaces.
		 * Required
		 * Max length: 200
		 * Min length: 1
		 */
		name: string;

		/** A list of tags that you are adding to the response plan. */
		tags?: {[id: string]: string };
	}
	export interface CreateResponsePlanPostBodyFormProperties {

		/**
		 * A token ensuring that the operation is called only once with the specified details.
		 * Max length: 128
		 * Min length: 0
		 */
		clientToken: FormControl<string | null | undefined>,

		/**
		 * The long format of the response plan name. This field can contain spaces.
		 * Max length: 200
		 * Min length: 0
		 */
		displayName: FormControl<string | null | undefined>,

		/**
		 * The short format name of the response plan. Can't include spaces.
		 * Required
		 * Max length: 200
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/** A list of tags that you are adding to the response plan. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateResponsePlanPostBodyFormGroup() {
		return new FormGroup<CreateResponsePlanPostBodyFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(128)]),
			displayName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(200)]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(200), Validators.pattern('^[a-zA-Z0-9-_]*$')]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateResponsePlanPostBodyChatChannel {
		chatbotSns?: Array<string>;
		empty?: EmptyChatChannel;
	}
	export interface CreateResponsePlanPostBodyChatChannelFormProperties {
	}
	export function CreateCreateResponsePlanPostBodyChatChannelFormGroup() {
		return new FormGroup<CreateResponsePlanPostBodyChatChannelFormProperties>({
		});

	}

	export interface CreateResponsePlanPostBodyIncidentTemplate {
		dedupeString?: string;
		impact?: number | null;
		incidentTags?: TagMap;
		notificationTargets?: Array<NotificationTargetItem>;
		summary?: string;
		title?: string;
	}
	export interface CreateResponsePlanPostBodyIncidentTemplateFormProperties {
		dedupeString: FormControl<string | null | undefined>,
		impact: FormControl<number | null | undefined>,
		summary: FormControl<string | null | undefined>,
		title: FormControl<string | null | undefined>,
	}
	export function CreateCreateResponsePlanPostBodyIncidentTemplateFormGroup() {
		return new FormGroup<CreateResponsePlanPostBodyIncidentTemplateFormProperties>({
			dedupeString: new FormControl<string | null | undefined>(undefined),
			impact: new FormControl<number | null | undefined>(undefined),
			summary: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateTimelineEventPostBody {

		/**
		 * A token that ensures that a client calls the action only once with the specified details.
		 * Max length: 128
		 * Min length: 0
		 */
		clientToken?: string | null;

		/**
		 * A short description of the event.
		 * Required
		 * Max length: 12000
		 * Min length: 0
		 */
		eventData: string;

		/**
		 * Adds one or more references to the <code>TimelineEvent</code>. A reference is an Amazon Web Services resource involved or associated with the incident. To specify a reference, enter its Amazon Resource Name (ARN). You can also specify a related item associated with a resource. For example, to specify an Amazon DynamoDB (DynamoDB) table as a resource, use the table's ARN. You can also specify an Amazon CloudWatch metric associated with the DynamoDB table as a related item.
		 * Minimum items: 0
		 * Maximum items: 10
		 */
		eventReferences?: Array<EventReference>;

		/**
		 * The time that the event occurred.
		 * Required
		 */
		eventTime: Date;

		/**
		 * The type of event. You can create timeline events of type <code>Custom Event</code>.
		 * Required
		 * Max length: 100
		 * Min length: 0
		 */
		eventType: string;

		/**
		 * The Amazon Resource Name (ARN) of the incident record that the action adds the incident to.
		 * Required
		 * Max length: 1000
		 * Min length: 0
		 */
		incidentRecordArn: string;
	}
	export interface CreateTimelineEventPostBodyFormProperties {

		/**
		 * A token that ensures that a client calls the action only once with the specified details.
		 * Max length: 128
		 * Min length: 0
		 */
		clientToken: FormControl<string | null | undefined>,

		/**
		 * A short description of the event.
		 * Required
		 * Max length: 12000
		 * Min length: 0
		 */
		eventData: FormControl<string | null | undefined>,

		/**
		 * The time that the event occurred.
		 * Required
		 */
		eventTime: FormControl<Date | null | undefined>,

		/**
		 * The type of event. You can create timeline events of type <code>Custom Event</code>.
		 * Required
		 * Max length: 100
		 * Min length: 0
		 */
		eventType: FormControl<string | null | undefined>,

		/**
		 * The Amazon Resource Name (ARN) of the incident record that the action adds the incident to.
		 * Required
		 * Max length: 1000
		 * Min length: 0
		 */
		incidentRecordArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateTimelineEventPostBodyFormGroup() {
		return new FormGroup<CreateTimelineEventPostBodyFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(128)]),
			eventData: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(12000)]),
			eventTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			eventType: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(100)]),
			incidentRecordArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(1000), Validators.pattern('^arn:aws(-cn|-us-gov)?:[a-z0-9-]*:[a-z0-9-]*:([0-9]{12})?:.+$')]),
		});

	}

	export interface DeleteIncidentRecordPostBody {

		/**
		 * The Amazon Resource Name (ARN) of the incident record you are deleting.
		 * Required
		 * Max length: 1000
		 * Min length: 0
		 */
		arn: string;
	}
	export interface DeleteIncidentRecordPostBodyFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the incident record you are deleting.
		 * Required
		 * Max length: 1000
		 * Min length: 0
		 */
		arn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteIncidentRecordPostBodyFormGroup() {
		return new FormGroup<DeleteIncidentRecordPostBodyFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(1000), Validators.pattern('^arn:aws(-cn|-us-gov)?:[a-z0-9-]*:[a-z0-9-]*:([0-9]{12})?:.+$')]),
		});

	}

	export interface DeleteResourcePolicyPostBody {

		/**
		 * The ID of the resource policy you're deleting.
		 * Required
		 * Max length: 256
		 * Min length: 0
		 */
		policyId: string;

		/**
		 * The Amazon Resource Name (ARN) of the resource you're deleting the policy from.
		 * Required
		 * Max length: 1000
		 * Min length: 0
		 */
		resourceArn: string;
	}
	export interface DeleteResourcePolicyPostBodyFormProperties {

		/**
		 * The ID of the resource policy you're deleting.
		 * Required
		 * Max length: 256
		 * Min length: 0
		 */
		policyId: FormControl<string | null | undefined>,

		/**
		 * The Amazon Resource Name (ARN) of the resource you're deleting the policy from.
		 * Required
		 * Max length: 1000
		 * Min length: 0
		 */
		resourceArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteResourcePolicyPostBodyFormGroup() {
		return new FormGroup<DeleteResourcePolicyPostBodyFormProperties>({
			policyId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(256)]),
			resourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(1000), Validators.pattern('^arn:aws(-cn|-us-gov)?:[a-z0-9-]*:[a-z0-9-]*:([0-9]{12})?:.+$')]),
		});

	}

	export interface DeleteResponsePlanPostBody {

		/**
		 * The Amazon Resource Name (ARN) of the response plan.
		 * Required
		 * Max length: 1000
		 * Min length: 0
		 */
		arn: string;
	}
	export interface DeleteResponsePlanPostBodyFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the response plan.
		 * Required
		 * Max length: 1000
		 * Min length: 0
		 */
		arn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteResponsePlanPostBodyFormGroup() {
		return new FormGroup<DeleteResponsePlanPostBodyFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(1000), Validators.pattern('^arn:aws(-cn|-us-gov)?:[a-z0-9-]*:[a-z0-9-]*:([0-9]{12})?:.+$')]),
		});

	}

	export interface DeleteTimelineEventPostBody {

		/**
		 * The ID of the event to update. You can use <code>ListTimelineEvents</code> to find an event's ID.
		 * Required
		 * Max length: 50
		 * Min length: 0
		 */
		eventId: string;

		/**
		 * The Amazon Resource Name (ARN) of the incident that includes the timeline event.
		 * Required
		 * Max length: 1000
		 * Min length: 0
		 */
		incidentRecordArn: string;
	}
	export interface DeleteTimelineEventPostBodyFormProperties {

		/**
		 * The ID of the event to update. You can use <code>ListTimelineEvents</code> to find an event's ID.
		 * Required
		 * Max length: 50
		 * Min length: 0
		 */
		eventId: FormControl<string | null | undefined>,

		/**
		 * The Amazon Resource Name (ARN) of the incident that includes the timeline event.
		 * Required
		 * Max length: 1000
		 * Min length: 0
		 */
		incidentRecordArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteTimelineEventPostBodyFormGroup() {
		return new FormGroup<DeleteTimelineEventPostBodyFormProperties>({
			eventId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(50)]),
			incidentRecordArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(1000), Validators.pattern('^arn:aws(-cn|-us-gov)?:[a-z0-9-]*:[a-z0-9-]*:([0-9]{12})?:.+$')]),
		});

	}

	export interface GetResourcePoliciesPostBody {

		/**
		 * The maximum number of resource policies to display for each page of results.
		 * Minimum: 1
		 * Maximum: 100
		 */
		maxResults?: number | null;

		/**
		 * The pagination token to continue to the next page of results.
		 * Max length: 2000
		 * Min length: 0
		 */
		nextToken?: string | null;
	}
	export interface GetResourcePoliciesPostBodyFormProperties {

		/**
		 * The maximum number of resource policies to display for each page of results.
		 * Minimum: 1
		 * Maximum: 100
		 */
		maxResults: FormControl<number | null | undefined>,

		/**
		 * The pagination token to continue to the next page of results.
		 * Max length: 2000
		 * Min length: 0
		 */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetResourcePoliciesPostBodyFormGroup() {
		return new FormGroup<GetResourcePoliciesPostBodyFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(2000)]),
		});

	}

	export interface ListIncidentRecordsPostBody {

		/**
		 * <p>Filters the list of incident records you want to search through. You can filter on the following keys:</p> <ul> <li> <p> <code>creationTime</code> </p> </li> <li> <p> <code>impact</code> </p> </li> <li> <p> <code>status</code> </p> </li> <li> <p> <code>createdBy</code> </p> </li> </ul> <p>Note the following when when you use Filters:</p> <ul> <li> <p>If you don't specify a Filter, the response includes all incident records.</p> </li> <li> <p>If you specify more than one filter in a single request, the response returns incident records that match all filters.</p> </li> <li> <p>If you specify a filter with more than one value, the response returns incident records that match any of the values provided.</p> </li> </ul>
		 * Minimum items: 0
		 * Maximum items: 5
		 */
		filters?: Array<Filter>;

		/**
		 * The maximum number of results per page.
		 * Minimum: 1
		 * Maximum: 100
		 */
		maxResults?: number | null;

		/**
		 * The pagination token to continue to the next page of results.
		 * Max length: 2000
		 * Min length: 0
		 */
		nextToken?: string | null;
	}
	export interface ListIncidentRecordsPostBodyFormProperties {

		/**
		 * The maximum number of results per page.
		 * Minimum: 1
		 * Maximum: 100
		 */
		maxResults: FormControl<number | null | undefined>,

		/**
		 * The pagination token to continue to the next page of results.
		 * Max length: 2000
		 * Min length: 0
		 */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListIncidentRecordsPostBodyFormGroup() {
		return new FormGroup<ListIncidentRecordsPostBodyFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(2000)]),
		});

	}

	export interface ListRelatedItemsPostBody {

		/**
		 * The Amazon Resource Name (ARN) of the incident record containing the listed related items.
		 * Required
		 * Max length: 1000
		 * Min length: 0
		 */
		incidentRecordArn: string;

		/**
		 * The maximum number of related items per page.
		 * Minimum: 1
		 * Maximum: 100
		 */
		maxResults?: number | null;

		/**
		 * The pagination token to continue to the next page of results.
		 * Max length: 2000
		 * Min length: 0
		 */
		nextToken?: string | null;
	}
	export interface ListRelatedItemsPostBodyFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the incident record containing the listed related items.
		 * Required
		 * Max length: 1000
		 * Min length: 0
		 */
		incidentRecordArn: FormControl<string | null | undefined>,

		/**
		 * The maximum number of related items per page.
		 * Minimum: 1
		 * Maximum: 100
		 */
		maxResults: FormControl<number | null | undefined>,

		/**
		 * The pagination token to continue to the next page of results.
		 * Max length: 2000
		 * Min length: 0
		 */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListRelatedItemsPostBodyFormGroup() {
		return new FormGroup<ListRelatedItemsPostBodyFormProperties>({
			incidentRecordArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(1000), Validators.pattern('^arn:aws(-cn|-us-gov)?:[a-z0-9-]*:[a-z0-9-]*:([0-9]{12})?:.+$')]),
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(2000)]),
		});

	}

	export interface ListReplicationSetsPostBody {

		/**
		 * The maximum number of results per page.
		 * Minimum: 1
		 * Maximum: 100
		 */
		maxResults?: number | null;

		/**
		 * The pagination token to continue to the next page of results.
		 * Max length: 2000
		 * Min length: 0
		 */
		nextToken?: string | null;
	}
	export interface ListReplicationSetsPostBodyFormProperties {

		/**
		 * The maximum number of results per page.
		 * Minimum: 1
		 * Maximum: 100
		 */
		maxResults: FormControl<number | null | undefined>,

		/**
		 * The pagination token to continue to the next page of results.
		 * Max length: 2000
		 * Min length: 0
		 */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListReplicationSetsPostBodyFormGroup() {
		return new FormGroup<ListReplicationSetsPostBodyFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(2000)]),
		});

	}

	export interface ListResponsePlansPostBody {

		/**
		 * The maximum number of response plans per page.
		 * Minimum: 1
		 * Maximum: 100
		 */
		maxResults?: number | null;

		/**
		 * The pagination token to continue to the next page of results.
		 * Max length: 2000
		 * Min length: 0
		 */
		nextToken?: string | null;
	}
	export interface ListResponsePlansPostBodyFormProperties {

		/**
		 * The maximum number of response plans per page.
		 * Minimum: 1
		 * Maximum: 100
		 */
		maxResults: FormControl<number | null | undefined>,

		/**
		 * The pagination token to continue to the next page of results.
		 * Max length: 2000
		 * Min length: 0
		 */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListResponsePlansPostBodyFormGroup() {
		return new FormGroup<ListResponsePlansPostBodyFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(2000)]),
		});

	}

	export interface TagResourcePostBody {

		/**
		 * A list of tags to add to the response plan.
		 * Required
		 */
		tags: {[id: string]: string };
	}
	export interface TagResourcePostBodyFormProperties {

		/**
		 * A list of tags to add to the response plan.
		 * Required
		 */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateTagResourcePostBodyFormGroup() {
		return new FormGroup<TagResourcePostBodyFormProperties>({
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListTimelineEventsPostBody {

		/**
		 * <p>Filters the timeline events based on the provided conditional values. You can filter timeline events with the following keys:</p> <ul> <li> <p> <code>eventTime</code> </p> </li> <li> <p> <code>eventType</code> </p> </li> </ul> <p>Note the following when deciding how to use Filters:</p> <ul> <li> <p>If you don't specify a Filter, the response includes all timeline events.</p> </li> <li> <p>If you specify more than one filter in a single request, the response returns timeline events that match all filters.</p> </li> <li> <p>If you specify a filter with more than one value, the response returns timeline events that match any of the values provided.</p> </li> </ul>
		 * Minimum items: 0
		 * Maximum items: 5
		 */
		filters?: Array<Filter>;

		/**
		 * The Amazon Resource Name (ARN) of the incident that includes the timeline event.
		 * Required
		 * Max length: 1000
		 * Min length: 0
		 */
		incidentRecordArn: string;

		/**
		 * The maximum number of results per page.
		 * Minimum: 1
		 * Maximum: 100
		 */
		maxResults?: number | null;

		/**
		 * The pagination token to continue to the next page of results.
		 * Max length: 2000
		 * Min length: 0
		 */
		nextToken?: string | null;

		/** Sort timeline events by the specified key value pair. */
		sortBy?: TimelineEventSort | null;

		/** Sorts the order of timeline events by the value specified in the <code>sortBy</code> field. */
		sortOrder?: SortOrder | null;
	}
	export interface ListTimelineEventsPostBodyFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the incident that includes the timeline event.
		 * Required
		 * Max length: 1000
		 * Min length: 0
		 */
		incidentRecordArn: FormControl<string | null | undefined>,

		/**
		 * The maximum number of results per page.
		 * Minimum: 1
		 * Maximum: 100
		 */
		maxResults: FormControl<number | null | undefined>,

		/**
		 * The pagination token to continue to the next page of results.
		 * Max length: 2000
		 * Min length: 0
		 */
		nextToken: FormControl<string | null | undefined>,

		/** Sort timeline events by the specified key value pair. */
		sortBy: FormControl<TimelineEventSort | null | undefined>,

		/** Sorts the order of timeline events by the value specified in the <code>sortBy</code> field. */
		sortOrder: FormControl<SortOrder | null | undefined>,
	}
	export function CreateListTimelineEventsPostBodyFormGroup() {
		return new FormGroup<ListTimelineEventsPostBodyFormProperties>({
			incidentRecordArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(1000), Validators.pattern('^arn:aws(-cn|-us-gov)?:[a-z0-9-]*:[a-z0-9-]*:([0-9]{12})?:.+$')]),
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(2000)]),
			sortBy: new FormControl<TimelineEventSort | null | undefined>(undefined),
			sortOrder: new FormControl<SortOrder | null | undefined>(undefined),
		});

	}

	export interface PutResourcePolicyPostBody {

		/**
		 * Details of the resource policy.
		 * Required
		 * Max length: 4000
		 * Min length: 0
		 */
		policy: string;

		/**
		 * The Amazon Resource Name (ARN) of the response plan to add the resource policy to.
		 * Required
		 * Max length: 1000
		 * Min length: 0
		 */
		resourceArn: string;
	}
	export interface PutResourcePolicyPostBodyFormProperties {

		/**
		 * Details of the resource policy.
		 * Required
		 * Max length: 4000
		 * Min length: 0
		 */
		policy: FormControl<string | null | undefined>,

		/**
		 * The Amazon Resource Name (ARN) of the response plan to add the resource policy to.
		 * Required
		 * Max length: 1000
		 * Min length: 0
		 */
		resourceArn: FormControl<string | null | undefined>,
	}
	export function CreatePutResourcePolicyPostBodyFormGroup() {
		return new FormGroup<PutResourcePolicyPostBodyFormProperties>({
			policy: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(4000)]),
			resourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(1000), Validators.pattern('^arn:aws(-cn|-us-gov)?:[a-z0-9-]*:[a-z0-9-]*:([0-9]{12})?:.+$')]),
		});

	}

	export interface StartIncidentPostBody {

		/**
		 * A token ensuring that the operation is called only once with the specified details.
		 * Max length: 128
		 * Min length: 0
		 */
		clientToken?: string | null;

		/**
		 * <p>Defines the impact to the customers. Providing an impact overwrites the impact provided by a response plan.</p> <p class="title"> <b>Possible impacts:</b> </p> <ul> <li> <p> <code>1</code> - Critical impact, this typically relates to full application failure that impacts many to all customers. </p> </li> <li> <p> <code>2</code> - High impact, partial application failure with impact to many customers.</p> </li> <li> <p> <code>3</code> - Medium impact, the application is providing reduced service to customers.</p> </li> <li> <p> <code>4</code> - Low impact, customer might aren't impacted by the problem yet.</p> </li> <li> <p> <code>5</code> - No impact, customers aren't currently impacted but urgent action is needed to avoid impact.</p> </li> </ul>
		 * Minimum: 1
		 * Maximum: 5
		 */
		impact?: number | null;

		/**
		 * Add related items to the incident for other responders to use. Related items are Amazon Web Services resources, external links, or files uploaded to an Amazon S3 bucket.
		 * Minimum items: 0
		 * Maximum items: 100
		 */
		relatedItems?: Array<RelatedItem>;

		/**
		 * The Amazon Resource Name (ARN) of the response plan that pre-defines summary, chat channels, Amazon SNS topics, runbooks, title, and impact of the incident.
		 * Required
		 * Max length: 1000
		 * Min length: 0
		 */
		responsePlanArn: string;

		/**
		 * Provide a title for the incident. Providing a title overwrites the title provided by the response plan.
		 * Max length: 200
		 * Min length: 0
		 */
		title?: string | null;

		/** Details about what caused the incident to be created in Incident Manager. */
		triggerDetails?: StartIncidentPostBodyTriggerDetails;
	}
	export interface StartIncidentPostBodyFormProperties {

		/**
		 * A token ensuring that the operation is called only once with the specified details.
		 * Max length: 128
		 * Min length: 0
		 */
		clientToken: FormControl<string | null | undefined>,

		/**
		 * <p>Defines the impact to the customers. Providing an impact overwrites the impact provided by a response plan.</p> <p class="title"> <b>Possible impacts:</b> </p> <ul> <li> <p> <code>1</code> - Critical impact, this typically relates to full application failure that impacts many to all customers. </p> </li> <li> <p> <code>2</code> - High impact, partial application failure with impact to many customers.</p> </li> <li> <p> <code>3</code> - Medium impact, the application is providing reduced service to customers.</p> </li> <li> <p> <code>4</code> - Low impact, customer might aren't impacted by the problem yet.</p> </li> <li> <p> <code>5</code> - No impact, customers aren't currently impacted but urgent action is needed to avoid impact.</p> </li> </ul>
		 * Minimum: 1
		 * Maximum: 5
		 */
		impact: FormControl<number | null | undefined>,

		/**
		 * The Amazon Resource Name (ARN) of the response plan that pre-defines summary, chat channels, Amazon SNS topics, runbooks, title, and impact of the incident.
		 * Required
		 * Max length: 1000
		 * Min length: 0
		 */
		responsePlanArn: FormControl<string | null | undefined>,

		/**
		 * Provide a title for the incident. Providing a title overwrites the title provided by the response plan.
		 * Max length: 200
		 * Min length: 0
		 */
		title: FormControl<string | null | undefined>,
	}
	export function CreateStartIncidentPostBodyFormGroup() {
		return new FormGroup<StartIncidentPostBodyFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(128)]),
			impact: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(5)]),
			responsePlanArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(1000), Validators.pattern('^arn:aws(-cn|-us-gov)?:[a-z0-9-]*:[a-z0-9-]*:([0-9]{12})?:.+$')]),
			title: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(200)]),
		});

	}

	export interface StartIncidentPostBodyTriggerDetails {
		rawData?: string;
		source?: string;
		timestamp?: Date;
		triggerArn?: string;
	}
	export interface StartIncidentPostBodyTriggerDetailsFormProperties {
		rawData: FormControl<string | null | undefined>,
		source: FormControl<string | null | undefined>,
		timestamp: FormControl<Date | null | undefined>,
		triggerArn: FormControl<string | null | undefined>,
	}
	export function CreateStartIncidentPostBodyTriggerDetailsFormGroup() {
		return new FormGroup<StartIncidentPostBodyTriggerDetailsFormProperties>({
			rawData: new FormControl<string | null | undefined>(undefined),
			source: new FormControl<string | null | undefined>(undefined),
			timestamp: new FormControl<Date | null | undefined>(undefined),
			triggerArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateDeletionProtectionPostBody {

		/**
		 * The Amazon Resource Name (ARN) of the replication set to update.
		 * Required
		 * Max length: 1000
		 * Min length: 0
		 */
		arn: string;

		/**
		 * A token that ensures that the operation is called only once with the specified details.
		 * Max length: 128
		 * Min length: 0
		 */
		clientToken?: string | null;

		/**
		 * Specifies if deletion protection is turned on or off in your account.
		 * Required
		 */
		deletionProtected: boolean;
	}
	export interface UpdateDeletionProtectionPostBodyFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the replication set to update.
		 * Required
		 * Max length: 1000
		 * Min length: 0
		 */
		arn: FormControl<string | null | undefined>,

		/**
		 * A token that ensures that the operation is called only once with the specified details.
		 * Max length: 128
		 * Min length: 0
		 */
		clientToken: FormControl<string | null | undefined>,

		/**
		 * Specifies if deletion protection is turned on or off in your account.
		 * Required
		 */
		deletionProtected: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateDeletionProtectionPostBodyFormGroup() {
		return new FormGroup<UpdateDeletionProtectionPostBodyFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(1000), Validators.pattern('^arn:aws(-cn|-us-gov)?:[a-z0-9-]*:[a-z0-9-]*:([0-9]{12})?:.+$')]),
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(128)]),
			deletionProtected: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateIncidentRecordPostBody {

		/**
		 * The Amazon Resource Name (ARN) of the incident record you are updating.
		 * Required
		 * Max length: 1000
		 * Min length: 0
		 */
		arn: string;

		/** The Chatbot chat channel used for collaboration during an incident. */
		chatChannel?: UpdateIncidentRecordPostBodyChatChannel;

		/**
		 * A token that ensures that a client calls the operation only once with the specified details.
		 * Max length: 128
		 * Min length: 0
		 */
		clientToken?: string | null;

		/**
		 * <p>Defines the impact of the incident to customers and applications. If you provide an impact for an incident, it overwrites the impact provided by the response plan.</p> <p class="title"> <b>Possible impacts:</b> </p> <ul> <li> <p> <code>1</code> - Critical impact, full application failure that impacts many to all customers. </p> </li> <li> <p> <code>2</code> - High impact, partial application failure with impact to many customers.</p> </li> <li> <p> <code>3</code> - Medium impact, the application is providing reduced service to customers.</p> </li> <li> <p> <code>4</code> - Low impact, customer aren't impacted by the problem yet.</p> </li> <li> <p> <code>5</code> - No impact, customers aren't currently impacted but urgent action is needed to avoid impact.</p> </li> </ul>
		 * Minimum: 1
		 * Maximum: 5
		 */
		impact?: number | null;

		/**
		 * <p>The Amazon SNS targets that Incident Manager notifies when a client updates an incident.</p> <p>Using multiple SNS topics creates redundancy in the event that a Region is down during the incident.</p>
		 * Minimum items: 0
		 * Maximum items: 10
		 */
		notificationTargets?: Array<NotificationTargetItem>;

		/** The status of the incident. Possible statuses are <code>Open</code> or <code>Resolved</code>. */
		status?: IncidentRecordStatus | null;

		/**
		 * A longer description of what occurred during the incident.
		 * Max length: 8000
		 * Min length: 0
		 */
		summary?: string | null;

		/**
		 * A brief description of the incident.
		 * Max length: 200
		 * Min length: 0
		 */
		title?: string | null;
	}
	export interface UpdateIncidentRecordPostBodyFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the incident record you are updating.
		 * Required
		 * Max length: 1000
		 * Min length: 0
		 */
		arn: FormControl<string | null | undefined>,

		/**
		 * A token that ensures that a client calls the operation only once with the specified details.
		 * Max length: 128
		 * Min length: 0
		 */
		clientToken: FormControl<string | null | undefined>,

		/**
		 * <p>Defines the impact of the incident to customers and applications. If you provide an impact for an incident, it overwrites the impact provided by the response plan.</p> <p class="title"> <b>Possible impacts:</b> </p> <ul> <li> <p> <code>1</code> - Critical impact, full application failure that impacts many to all customers. </p> </li> <li> <p> <code>2</code> - High impact, partial application failure with impact to many customers.</p> </li> <li> <p> <code>3</code> - Medium impact, the application is providing reduced service to customers.</p> </li> <li> <p> <code>4</code> - Low impact, customer aren't impacted by the problem yet.</p> </li> <li> <p> <code>5</code> - No impact, customers aren't currently impacted but urgent action is needed to avoid impact.</p> </li> </ul>
		 * Minimum: 1
		 * Maximum: 5
		 */
		impact: FormControl<number | null | undefined>,

		/** The status of the incident. Possible statuses are <code>Open</code> or <code>Resolved</code>. */
		status: FormControl<IncidentRecordStatus | null | undefined>,

		/**
		 * A longer description of what occurred during the incident.
		 * Max length: 8000
		 * Min length: 0
		 */
		summary: FormControl<string | null | undefined>,

		/**
		 * A brief description of the incident.
		 * Max length: 200
		 * Min length: 0
		 */
		title: FormControl<string | null | undefined>,
	}
	export function CreateUpdateIncidentRecordPostBodyFormGroup() {
		return new FormGroup<UpdateIncidentRecordPostBodyFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(1000), Validators.pattern('^arn:aws(-cn|-us-gov)?:[a-z0-9-]*:[a-z0-9-]*:([0-9]{12})?:.+$')]),
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(128)]),
			impact: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(5)]),
			status: new FormControl<IncidentRecordStatus | null | undefined>(undefined),
			summary: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(8000)]),
			title: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(200)]),
		});

	}

	export interface UpdateIncidentRecordPostBodyChatChannel {
		chatbotSns?: Array<string>;
		empty?: EmptyChatChannel;
	}
	export interface UpdateIncidentRecordPostBodyChatChannelFormProperties {
	}
	export function CreateUpdateIncidentRecordPostBodyChatChannelFormGroup() {
		return new FormGroup<UpdateIncidentRecordPostBodyChatChannelFormProperties>({
		});

	}

	export interface UpdateRelatedItemsPostBody {

		/**
		 * A token that ensures that a client calls the operation only once with the specified details.
		 * Max length: 128
		 * Min length: 0
		 */
		clientToken?: string | null;

		/**
		 * The Amazon Resource Name (ARN) of the incident record that contains the related items that you update.
		 * Required
		 * Max length: 1000
		 * Min length: 0
		 */
		incidentRecordArn: string;

		/**
		 * Details about the related item you're adding.
		 * Required
		 */
		relatedItemsUpdate: UpdateRelatedItemsPostBodyRelatedItemsUpdate;
	}
	export interface UpdateRelatedItemsPostBodyFormProperties {

		/**
		 * A token that ensures that a client calls the operation only once with the specified details.
		 * Max length: 128
		 * Min length: 0
		 */
		clientToken: FormControl<string | null | undefined>,

		/**
		 * The Amazon Resource Name (ARN) of the incident record that contains the related items that you update.
		 * Required
		 * Max length: 1000
		 * Min length: 0
		 */
		incidentRecordArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateRelatedItemsPostBodyFormGroup() {
		return new FormGroup<UpdateRelatedItemsPostBodyFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(128)]),
			incidentRecordArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(1000), Validators.pattern('^arn:aws(-cn|-us-gov)?:[a-z0-9-]*:[a-z0-9-]*:([0-9]{12})?:.+$')]),
		});

	}

	export interface UpdateRelatedItemsPostBodyRelatedItemsUpdate {
		itemToAdd?: RelatedItem;
		itemToRemove?: ItemIdentifier;
	}
	export interface UpdateRelatedItemsPostBodyRelatedItemsUpdateFormProperties {
	}
	export function CreateUpdateRelatedItemsPostBodyRelatedItemsUpdateFormGroup() {
		return new FormGroup<UpdateRelatedItemsPostBodyRelatedItemsUpdateFormProperties>({
		});

	}

	export interface UpdateReplicationSetPostBody {

		/**
		 * An action to add or delete a Region.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 1
		 */
		actions: Array<UpdateReplicationSetAction>;

		/**
		 * The Amazon Resource Name (ARN) of the replication set you're updating.
		 * Required
		 * Max length: 1000
		 * Min length: 0
		 */
		arn: string;

		/**
		 * A token that ensures that the operation is called only once with the specified details.
		 * Max length: 128
		 * Min length: 0
		 */
		clientToken?: string | null;
	}
	export interface UpdateReplicationSetPostBodyFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the replication set you're updating.
		 * Required
		 * Max length: 1000
		 * Min length: 0
		 */
		arn: FormControl<string | null | undefined>,

		/**
		 * A token that ensures that the operation is called only once with the specified details.
		 * Max length: 128
		 * Min length: 0
		 */
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateUpdateReplicationSetPostBodyFormGroup() {
		return new FormGroup<UpdateReplicationSetPostBodyFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(1000), Validators.pattern('^arn:aws(-cn|-us-gov)?:[a-z0-9-]*:[a-z0-9-]*:([0-9]{12})?:.+$')]),
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(128)]),
		});

	}

	export interface UpdateResponsePlanPostBody {

		/**
		 * The actions that this response plan takes at the beginning of an incident.
		 * Minimum items: 0
		 * Maximum items: 1
		 */
		actions?: Array<Action>;

		/**
		 * The Amazon Resource Name (ARN) of the response plan.
		 * Required
		 * Max length: 1000
		 * Min length: 0
		 */
		arn: string;

		/** The Chatbot chat channel used for collaboration during an incident. */
		chatChannel?: UpdateResponsePlanPostBodyChatChannel;

		/**
		 * A token ensuring that the operation is called only once with the specified details.
		 * Max length: 128
		 * Min length: 0
		 */
		clientToken?: string | null;

		/**
		 * The long format name of the response plan. The display name can't contain spaces.
		 * Max length: 200
		 * Min length: 0
		 */
		displayName?: string | null;

		/**
		 * The Amazon Resource Name (ARN) for the contacts and escalation plans that the response plan engages during an incident.
		 * Minimum items: 0
		 * Maximum items: 5
		 */
		engagements?: Array<string>;

		/**
		 * The string Incident Manager uses to prevent duplicate incidents from being created by the same incident in the same account.
		 * Max length: 1000
		 * Min length: 0
		 */
		incidentTemplateDedupeString?: string | null;

		/**
		 * <p>Defines the impact to the customers. Providing an impact overwrites the impact provided by a response plan.</p> <p class="title"> <b>Possible impacts:</b> </p> <ul> <li> <p> <code>5</code> - Severe impact</p> </li> <li> <p> <code>4</code> - High impact</p> </li> <li> <p> <code>3</code> - Medium impact</p> </li> <li> <p> <code>2</code> - Low impact</p> </li> <li> <p> <code>1</code> - No impact</p> </li> </ul>
		 * Minimum: 1
		 * Maximum: 5
		 */
		incidentTemplateImpact?: number | null;

		/**
		 * The Amazon SNS targets that are notified when updates are made to an incident.
		 * Minimum items: 0
		 * Maximum items: 10
		 */
		incidentTemplateNotificationTargets?: Array<NotificationTargetItem>;

		/**
		 * A brief summary of the incident. This typically contains what has happened, what's currently happening, and next steps.
		 * Max length: 8000
		 * Min length: 0
		 */
		incidentTemplateSummary?: string | null;

		/** Tags to assign to the template. When the <code>StartIncident</code> API action is called, Incident Manager assigns the tags specified in the template to the incident. To call this action, you must also have permission to call the <code>TagResource</code> API action for the incident record resource. */
		incidentTemplateTags?: {[id: string]: string };

		/**
		 * The short format name of the incident. The title can't contain spaces.
		 * Max length: 200
		 * Min length: 0
		 */
		incidentTemplateTitle?: string | null;

		/**
		 * Information about third-party services integrated into the response plan.
		 * Minimum items: 0
		 * Maximum items: 1
		 */
		integrations?: Array<Integration>;
	}
	export interface UpdateResponsePlanPostBodyFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the response plan.
		 * Required
		 * Max length: 1000
		 * Min length: 0
		 */
		arn: FormControl<string | null | undefined>,

		/**
		 * A token ensuring that the operation is called only once with the specified details.
		 * Max length: 128
		 * Min length: 0
		 */
		clientToken: FormControl<string | null | undefined>,

		/**
		 * The long format name of the response plan. The display name can't contain spaces.
		 * Max length: 200
		 * Min length: 0
		 */
		displayName: FormControl<string | null | undefined>,

		/**
		 * The string Incident Manager uses to prevent duplicate incidents from being created by the same incident in the same account.
		 * Max length: 1000
		 * Min length: 0
		 */
		incidentTemplateDedupeString: FormControl<string | null | undefined>,

		/**
		 * <p>Defines the impact to the customers. Providing an impact overwrites the impact provided by a response plan.</p> <p class="title"> <b>Possible impacts:</b> </p> <ul> <li> <p> <code>5</code> - Severe impact</p> </li> <li> <p> <code>4</code> - High impact</p> </li> <li> <p> <code>3</code> - Medium impact</p> </li> <li> <p> <code>2</code> - Low impact</p> </li> <li> <p> <code>1</code> - No impact</p> </li> </ul>
		 * Minimum: 1
		 * Maximum: 5
		 */
		incidentTemplateImpact: FormControl<number | null | undefined>,

		/**
		 * A brief summary of the incident. This typically contains what has happened, what's currently happening, and next steps.
		 * Max length: 8000
		 * Min length: 0
		 */
		incidentTemplateSummary: FormControl<string | null | undefined>,

		/** Tags to assign to the template. When the <code>StartIncident</code> API action is called, Incident Manager assigns the tags specified in the template to the incident. To call this action, you must also have permission to call the <code>TagResource</code> API action for the incident record resource. */
		incidentTemplateTags: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * The short format name of the incident. The title can't contain spaces.
		 * Max length: 200
		 * Min length: 0
		 */
		incidentTemplateTitle: FormControl<string | null | undefined>,
	}
	export function CreateUpdateResponsePlanPostBodyFormGroup() {
		return new FormGroup<UpdateResponsePlanPostBodyFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(1000), Validators.pattern('^arn:aws(-cn|-us-gov)?:[a-z0-9-]*:[a-z0-9-]*:([0-9]{12})?:.+$')]),
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(128)]),
			displayName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(200)]),
			incidentTemplateDedupeString: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(1000)]),
			incidentTemplateImpact: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(5)]),
			incidentTemplateSummary: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(8000)]),
			incidentTemplateTags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			incidentTemplateTitle: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(200)]),
		});

	}

	export interface UpdateResponsePlanPostBodyChatChannel {
		chatbotSns?: Array<string>;
		empty?: EmptyChatChannel;
	}
	export interface UpdateResponsePlanPostBodyChatChannelFormProperties {
	}
	export function CreateUpdateResponsePlanPostBodyChatChannelFormGroup() {
		return new FormGroup<UpdateResponsePlanPostBodyChatChannelFormProperties>({
		});

	}

	export interface UpdateTimelineEventPostBody {

		/**
		 * A token that ensures that a client calls the operation only once with the specified details.
		 * Max length: 128
		 * Min length: 0
		 */
		clientToken?: string | null;

		/**
		 * A short description of the event.
		 * Max length: 12000
		 * Min length: 0
		 */
		eventData?: string | null;

		/**
		 * The ID of the event to update. You can use <code>ListTimelineEvents</code> to find an event's ID.
		 * Required
		 * Max length: 50
		 * Min length: 0
		 */
		eventId: string;

		/**
		 * <p>Updates all existing references in a <code>TimelineEvent</code>. A reference is an Amazon Web Services resource involved or associated with the incident. To specify a reference, enter its Amazon Resource Name (ARN). You can also specify a related item associated with that resource. For example, to specify an Amazon DynamoDB (DynamoDB) table as a resource, use its ARN. You can also specify an Amazon CloudWatch metric associated with the DynamoDB table as a related item.</p> <important> <p>This update action overrides all existing references. If you want to keep existing references, you must specify them in the call. If you don't, this action removes any existing references and enters only new references.</p> </important>
		 * Minimum items: 0
		 * Maximum items: 10
		 */
		eventReferences?: Array<EventReference>;

		/** The time that the event occurred. */
		eventTime?: Date | null;

		/**
		 * The type of event. You can update events of type <code>Custom Event</code>.
		 * Max length: 100
		 * Min length: 0
		 */
		eventType?: string | null;

		/**
		 * The Amazon Resource Name (ARN) of the incident that includes the timeline event.
		 * Required
		 * Max length: 1000
		 * Min length: 0
		 */
		incidentRecordArn: string;
	}
	export interface UpdateTimelineEventPostBodyFormProperties {

		/**
		 * A token that ensures that a client calls the operation only once with the specified details.
		 * Max length: 128
		 * Min length: 0
		 */
		clientToken: FormControl<string | null | undefined>,

		/**
		 * A short description of the event.
		 * Max length: 12000
		 * Min length: 0
		 */
		eventData: FormControl<string | null | undefined>,

		/**
		 * The ID of the event to update. You can use <code>ListTimelineEvents</code> to find an event's ID.
		 * Required
		 * Max length: 50
		 * Min length: 0
		 */
		eventId: FormControl<string | null | undefined>,

		/** The time that the event occurred. */
		eventTime: FormControl<Date | null | undefined>,

		/**
		 * The type of event. You can update events of type <code>Custom Event</code>.
		 * Max length: 100
		 * Min length: 0
		 */
		eventType: FormControl<string | null | undefined>,

		/**
		 * The Amazon Resource Name (ARN) of the incident that includes the timeline event.
		 * Required
		 * Max length: 1000
		 * Min length: 0
		 */
		incidentRecordArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateTimelineEventPostBodyFormGroup() {
		return new FormGroup<UpdateTimelineEventPostBodyFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(128)]),
			eventData: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(12000)]),
			eventId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(50)]),
			eventTime: new FormControl<Date | null | undefined>(undefined),
			eventType: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(100)]),
			incidentRecordArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(1000), Validators.pattern('^arn:aws(-cn|-us-gov)?:[a-z0-9-]*:[a-z0-9-]*:([0-9]{12})?:.+$')]),
		});

	}

}

