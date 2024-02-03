import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface AddDraftAppVersionResourceMappingsResponse {

		/** Required */
		appArn: string;

		/** Required */
		appVersion: string;

		/** Required */
		resourceMappings: Array<ResourceMapping>;
	}
	export interface AddDraftAppVersionResourceMappingsResponseFormProperties {

		/** Required */
		appArn: FormControl<string | null | undefined>,

		/** Required */
		appVersion: FormControl<string | null | undefined>,
	}
	export function CreateAddDraftAppVersionResourceMappingsResponseFormGroup() {
		return new FormGroup<AddDraftAppVersionResourceMappingsResponseFormProperties>({
			appArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			appVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Defines a resource mapping. */
	export interface ResourceMapping {
		appRegistryAppName?: string;
		eksSourceName?: string;
		logicalStackName?: string;

		/** Required */
		mappingType: ResourceMappingType;

		/** Required */
		physicalResourceId: PhysicalResourceId;
		resourceGroupName?: string;
		resourceName?: string;
		terraformSourceName?: string;
	}

	/** Defines a resource mapping. */
	export interface ResourceMappingFormProperties {
		appRegistryAppName: FormControl<string | null | undefined>,
		eksSourceName: FormControl<string | null | undefined>,
		logicalStackName: FormControl<string | null | undefined>,

		/** Required */
		mappingType: FormControl<ResourceMappingType | null | undefined>,
		resourceGroupName: FormControl<string | null | undefined>,
		resourceName: FormControl<string | null | undefined>,
		terraformSourceName: FormControl<string | null | undefined>,
	}
	export function CreateResourceMappingFormGroup() {
		return new FormGroup<ResourceMappingFormProperties>({
			appRegistryAppName: new FormControl<string | null | undefined>(undefined),
			eksSourceName: new FormControl<string | null | undefined>(undefined),
			logicalStackName: new FormControl<string | null | undefined>(undefined),
			mappingType: new FormControl<ResourceMappingType | null | undefined>(undefined, [Validators.required]),
			resourceGroupName: new FormControl<string | null | undefined>(undefined),
			resourceName: new FormControl<string | null | undefined>(undefined),
			terraformSourceName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ResourceMappingType { CfnStack = 'CfnStack', Resource = 'Resource', AppRegistryApp = 'AppRegistryApp', ResourceGroup = 'ResourceGroup', Terraform = 'Terraform', EKS = 'EKS' }


	/** Defines a physical resource identifier. */
	export interface PhysicalResourceId {
		awsAccountId?: string;
		awsRegion?: string;

		/** Required */
		identifier: string;

		/** Required */
		type: PhysicalIdentifierType;
	}

	/** Defines a physical resource identifier. */
	export interface PhysicalResourceIdFormProperties {
		awsAccountId: FormControl<string | null | undefined>,
		awsRegion: FormControl<string | null | undefined>,

		/** Required */
		identifier: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<PhysicalIdentifierType | null | undefined>,
	}
	export function CreatePhysicalResourceIdFormGroup() {
		return new FormGroup<PhysicalResourceIdFormProperties>({
			awsAccountId: new FormControl<string | null | undefined>(undefined),
			awsRegion: new FormControl<string | null | undefined>(undefined),
			identifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<PhysicalIdentifierType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum PhysicalIdentifierType { Arn = 'Arn', Native = 'Native' }

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

	export interface ConflictException {
	}
	export interface ConflictExceptionFormProperties {
	}
	export function CreateConflictExceptionFormGroup() {
		return new FormGroup<ConflictExceptionFormProperties>({
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

	export interface BatchUpdateRecommendationStatusResponse {

		/** Required */
		appArn: string;

		/** Required */
		failedEntries: Array<BatchUpdateRecommendationStatusFailedEntry>;

		/** Required */
		successfulEntries: Array<BatchUpdateRecommendationStatusSuccessfulEntry>;
	}
	export interface BatchUpdateRecommendationStatusResponseFormProperties {

		/** Required */
		appArn: FormControl<string | null | undefined>,
	}
	export function CreateBatchUpdateRecommendationStatusResponseFormGroup() {
		return new FormGroup<BatchUpdateRecommendationStatusResponseFormProperties>({
			appArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** List of operational recommendations that did not get included or excluded. */
	export interface BatchUpdateRecommendationStatusFailedEntry {

		/** Required */
		entryId: string;

		/** Required */
		errorMessage: string;
	}

	/** List of operational recommendations that did not get included or excluded. */
	export interface BatchUpdateRecommendationStatusFailedEntryFormProperties {

		/** Required */
		entryId: FormControl<string | null | undefined>,

		/** Required */
		errorMessage: FormControl<string | null | undefined>,
	}
	export function CreateBatchUpdateRecommendationStatusFailedEntryFormGroup() {
		return new FormGroup<BatchUpdateRecommendationStatusFailedEntryFormProperties>({
			entryId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			errorMessage: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** List of operational recommendations that were successfully included or excluded. */
	export interface BatchUpdateRecommendationStatusSuccessfulEntry {

		/** Required */
		entryId: string;
		excludeReason?: ExcludeRecommendationReason;

		/** Required */
		excluded: boolean;

		/** Required */
		item: UpdateRecommendationStatusItem;

		/** Required */
		referenceId: string;
	}

	/** List of operational recommendations that were successfully included or excluded. */
	export interface BatchUpdateRecommendationStatusSuccessfulEntryFormProperties {

		/** Required */
		entryId: FormControl<string | null | undefined>,
		excludeReason: FormControl<ExcludeRecommendationReason | null | undefined>,

		/** Required */
		excluded: FormControl<boolean | null | undefined>,

		/** Required */
		referenceId: FormControl<string | null | undefined>,
	}
	export function CreateBatchUpdateRecommendationStatusSuccessfulEntryFormGroup() {
		return new FormGroup<BatchUpdateRecommendationStatusSuccessfulEntryFormProperties>({
			entryId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			excludeReason: new FormControl<ExcludeRecommendationReason | null | undefined>(undefined),
			excluded: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			referenceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ExcludeRecommendationReason { AlreadyImplemented = 'AlreadyImplemented', NotRelevant = 'NotRelevant', ComplexityOfImplementation = 'ComplexityOfImplementation' }


	/** Defines the operational recommendation item that needs a status update. */
	export interface UpdateRecommendationStatusItem {
		resourceId?: string;
		targetAccountId?: string;
		targetRegion?: string;
	}

	/** Defines the operational recommendation item that needs a status update. */
	export interface UpdateRecommendationStatusItemFormProperties {
		resourceId: FormControl<string | null | undefined>,
		targetAccountId: FormControl<string | null | undefined>,
		targetRegion: FormControl<string | null | undefined>,
	}
	export function CreateUpdateRecommendationStatusItemFormGroup() {
		return new FormGroup<UpdateRecommendationStatusItemFormProperties>({
			resourceId: new FormControl<string | null | undefined>(undefined),
			targetAccountId: new FormControl<string | null | undefined>(undefined),
			targetRegion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Defines the operational recommendation item that is to be included or excluded. */
	export interface UpdateRecommendationStatusRequestEntry {

		/** Required */
		entryId: string;
		excludeReason?: ExcludeRecommendationReason;

		/** Required */
		excluded: boolean;

		/** Required */
		item: UpdateRecommendationStatusItem;

		/** Required */
		referenceId: string;
	}

	/** Defines the operational recommendation item that is to be included or excluded. */
	export interface UpdateRecommendationStatusRequestEntryFormProperties {

		/** Required */
		entryId: FormControl<string | null | undefined>,
		excludeReason: FormControl<ExcludeRecommendationReason | null | undefined>,

		/** Required */
		excluded: FormControl<boolean | null | undefined>,

		/** Required */
		referenceId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateRecommendationStatusRequestEntryFormGroup() {
		return new FormGroup<UpdateRecommendationStatusRequestEntryFormProperties>({
			entryId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			excludeReason: new FormControl<ExcludeRecommendationReason | null | undefined>(undefined),
			excluded: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			referenceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateAppResponse {

		/** Required */
		app: App;
	}
	export interface CreateAppResponseFormProperties {
	}
	export function CreateCreateAppResponseFormGroup() {
		return new FormGroup<CreateAppResponseFormProperties>({
		});

	}


	/** Defines an Resilience Hub application. */
	export interface App {

		/** Required */
		appArn: string;
		assessmentSchedule?: AppAssessmentScheduleType;
		complianceStatus?: AppComplianceStatusType;

		/** Required */
		creationTime: Date;
		description?: string;
		driftStatus?: AppDriftStatusType;
		eventSubscriptions?: Array<EventSubscription>;
		lastAppComplianceEvaluationTime?: Date;
		lastDriftEvaluationTime?: Date;
		lastResiliencyScoreEvaluationTime?: Date;

		/** Required */
		name: string;
		permissionModel?: PermissionModel;
		policyArn?: string;
		resiliencyScore?: number | null;
		status?: AppStatusType;
		tags?: TagMap;
	}

	/** Defines an Resilience Hub application. */
	export interface AppFormProperties {

		/** Required */
		appArn: FormControl<string | null | undefined>,
		assessmentSchedule: FormControl<AppAssessmentScheduleType | null | undefined>,
		complianceStatus: FormControl<AppComplianceStatusType | null | undefined>,

		/** Required */
		creationTime: FormControl<Date | null | undefined>,
		description: FormControl<string | null | undefined>,
		driftStatus: FormControl<AppDriftStatusType | null | undefined>,
		lastAppComplianceEvaluationTime: FormControl<Date | null | undefined>,
		lastDriftEvaluationTime: FormControl<Date | null | undefined>,
		lastResiliencyScoreEvaluationTime: FormControl<Date | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
		policyArn: FormControl<string | null | undefined>,
		resiliencyScore: FormControl<number | null | undefined>,
		status: FormControl<AppStatusType | null | undefined>,
	}
	export function CreateAppFormGroup() {
		return new FormGroup<AppFormProperties>({
			appArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			assessmentSchedule: new FormControl<AppAssessmentScheduleType | null | undefined>(undefined),
			complianceStatus: new FormControl<AppComplianceStatusType | null | undefined>(undefined),
			creationTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
			driftStatus: new FormControl<AppDriftStatusType | null | undefined>(undefined),
			lastAppComplianceEvaluationTime: new FormControl<Date | null | undefined>(undefined),
			lastDriftEvaluationTime: new FormControl<Date | null | undefined>(undefined),
			lastResiliencyScoreEvaluationTime: new FormControl<Date | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			policyArn: new FormControl<string | null | undefined>(undefined),
			resiliencyScore: new FormControl<number | null | undefined>(undefined),
			status: new FormControl<AppStatusType | null | undefined>(undefined),
		});

	}

	export enum AppAssessmentScheduleType { Disabled = 'Disabled', Daily = 'Daily' }

	export enum AppComplianceStatusType { PolicyBreached = 'PolicyBreached', PolicyMet = 'PolicyMet', NotAssessed = 'NotAssessed', ChangesDetected = 'ChangesDetected' }

	export enum AppDriftStatusType { NotChecked = 'NotChecked', NotDetected = 'NotDetected', Detected = 'Detected' }


	/** Indicates an event you would like to subscribe and get notification for. Currently, Resilience Hub supports notifications only for <b>Drift detected</b> and <b>Scheduled assessment failure</b> events. */
	export interface EventSubscription {

		/** Required */
		eventType: EventType;

		/** Required */
		name: string;
		snsTopicArn?: string;
	}

	/** Indicates an event you would like to subscribe and get notification for. Currently, Resilience Hub supports notifications only for <b>Drift detected</b> and <b>Scheduled assessment failure</b> events. */
	export interface EventSubscriptionFormProperties {

		/** Required */
		eventType: FormControl<EventType | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
		snsTopicArn: FormControl<string | null | undefined>,
	}
	export function CreateEventSubscriptionFormGroup() {
		return new FormGroup<EventSubscriptionFormProperties>({
			eventType: new FormControl<EventType | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			snsTopicArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum EventType { ScheduledAssessmentFailure = 'ScheduledAssessmentFailure', DriftDetected = 'DriftDetected' }


	/** Defines the roles and credentials that Resilience Hub would use while creating the application, importing its resources, and running an assessment. */
	export interface PermissionModel {
		crossAccountRoleArns?: Array<string>;
		invokerRoleName?: string;

		/** Required */
		type: PermissionModelType;
	}

	/** Defines the roles and credentials that Resilience Hub would use while creating the application, importing its resources, and running an assessment. */
	export interface PermissionModelFormProperties {
		invokerRoleName: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<PermissionModelType | null | undefined>,
	}
	export function CreatePermissionModelFormGroup() {
		return new FormGroup<PermissionModelFormProperties>({
			invokerRoleName: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<PermissionModelType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum PermissionModelType { LegacyIAMUser = 'LegacyIAMUser', RoleBased = 'RoleBased' }

	export enum AppStatusType { Active = 'Active', Deleting = 'Deleting' }

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

	export interface CreateAppVersionAppComponentResponse {

		/** Required */
		appArn: string;
		appComponent?: AppComponent;

		/** Required */
		appVersion: string;
	}
	export interface CreateAppVersionAppComponentResponseFormProperties {

		/** Required */
		appArn: FormControl<string | null | undefined>,

		/** Required */
		appVersion: FormControl<string | null | undefined>,
	}
	export function CreateCreateAppVersionAppComponentResponseFormGroup() {
		return new FormGroup<CreateAppVersionAppComponentResponseFormProperties>({
			appArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			appVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Defines an Application Component. */
	export interface AppComponent {
		additionalInfo?: AdditionalInfoMap;
		id?: string;

		/** Required */
		name: string;

		/** Required */
		type: string;
	}

	/** Defines an Application Component. */
	export interface AppComponentFormProperties {
		id: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<string | null | undefined>,
	}
	export function CreateAppComponentFormGroup() {
		return new FormGroup<AppComponentFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AdditionalInfoMap {
	}
	export interface AdditionalInfoMapFormProperties {
	}
	export function CreateAdditionalInfoMapFormGroup() {
		return new FormGroup<AdditionalInfoMapFormProperties>({
		});

	}

	export interface CreateAppVersionResourceResponse {

		/** Required */
		appArn: string;

		/** Required */
		appVersion: string;
		physicalResource?: PhysicalResource;
	}
	export interface CreateAppVersionResourceResponseFormProperties {

		/** Required */
		appArn: FormControl<string | null | undefined>,

		/** Required */
		appVersion: FormControl<string | null | undefined>,
	}
	export function CreateCreateAppVersionResourceResponseFormGroup() {
		return new FormGroup<CreateAppVersionResourceResponseFormProperties>({
			appArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			appVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Defines a physical resource. A physical resource is a resource that exists in your account. It can be identified using an Amazon Resource Name (ARN) or an Resilience Hub-native identifier.  */
	export interface PhysicalResource {
		additionalInfo?: AdditionalInfoMap;
		appComponents?: Array<AppComponent>;
		excluded?: boolean | null;

		/** Required */
		logicalResourceId: LogicalResourceId;
		parentResourceName?: string;

		/** Required */
		physicalResourceId: PhysicalResourceId;
		resourceName?: string;

		/** Required */
		resourceType: string;
		sourceType?: ResourceSourceType;
	}

	/** Defines a physical resource. A physical resource is a resource that exists in your account. It can be identified using an Amazon Resource Name (ARN) or an Resilience Hub-native identifier.  */
	export interface PhysicalResourceFormProperties {
		excluded: FormControl<boolean | null | undefined>,
		parentResourceName: FormControl<string | null | undefined>,
		resourceName: FormControl<string | null | undefined>,

		/** Required */
		resourceType: FormControl<string | null | undefined>,
		sourceType: FormControl<ResourceSourceType | null | undefined>,
	}
	export function CreatePhysicalResourceFormGroup() {
		return new FormGroup<PhysicalResourceFormProperties>({
			excluded: new FormControl<boolean | null | undefined>(undefined),
			parentResourceName: new FormControl<string | null | undefined>(undefined),
			resourceName: new FormControl<string | null | undefined>(undefined),
			resourceType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sourceType: new FormControl<ResourceSourceType | null | undefined>(undefined),
		});

	}


	/** Defines a logical resource identifier. */
	export interface LogicalResourceId {
		eksSourceName?: string;

		/** Required */
		identifier: string;
		logicalStackName?: string;
		resourceGroupName?: string;
		terraformSourceName?: string;
	}

	/** Defines a logical resource identifier. */
	export interface LogicalResourceIdFormProperties {
		eksSourceName: FormControl<string | null | undefined>,

		/** Required */
		identifier: FormControl<string | null | undefined>,
		logicalStackName: FormControl<string | null | undefined>,
		resourceGroupName: FormControl<string | null | undefined>,
		terraformSourceName: FormControl<string | null | undefined>,
	}
	export function CreateLogicalResourceIdFormGroup() {
		return new FormGroup<LogicalResourceIdFormProperties>({
			eksSourceName: new FormControl<string | null | undefined>(undefined),
			identifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			logicalStackName: new FormControl<string | null | undefined>(undefined),
			resourceGroupName: new FormControl<string | null | undefined>(undefined),
			terraformSourceName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ResourceSourceType { AppTemplate = 'AppTemplate', Discovered = 'Discovered' }

	export interface CreateRecommendationTemplateResponse {
		recommendationTemplate?: RecommendationTemplate;
	}
	export interface CreateRecommendationTemplateResponseFormProperties {
	}
	export function CreateCreateRecommendationTemplateResponseFormGroup() {
		return new FormGroup<CreateRecommendationTemplateResponseFormProperties>({
		});

	}


	/** Defines a recommendation template created with the <a>CreateRecommendationTemplate</a> action. */
	export interface RecommendationTemplate {
		appArn?: string;

		/** Required */
		assessmentArn: string;
		endTime?: Date;

		/** Required */
		format: TemplateFormat;
		message?: string;

		/** Required */
		name: string;
		needsReplacements?: boolean | null;
		recommendationIds?: Array<string>;

		/** Required */
		recommendationTemplateArn: string;

		/** Required */
		recommendationTypes: Array<RenderRecommendationType>;
		startTime?: Date;

		/** Required */
		status: RecommendationTemplateStatus;
		tags?: TagMap;
		templatesLocation?: S3Location;
	}

	/** Defines a recommendation template created with the <a>CreateRecommendationTemplate</a> action. */
	export interface RecommendationTemplateFormProperties {
		appArn: FormControl<string | null | undefined>,

		/** Required */
		assessmentArn: FormControl<string | null | undefined>,
		endTime: FormControl<Date | null | undefined>,

		/** Required */
		format: FormControl<TemplateFormat | null | undefined>,
		message: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
		needsReplacements: FormControl<boolean | null | undefined>,

		/** Required */
		recommendationTemplateArn: FormControl<string | null | undefined>,
		startTime: FormControl<Date | null | undefined>,

		/** Required */
		status: FormControl<RecommendationTemplateStatus | null | undefined>,
	}
	export function CreateRecommendationTemplateFormGroup() {
		return new FormGroup<RecommendationTemplateFormProperties>({
			appArn: new FormControl<string | null | undefined>(undefined),
			assessmentArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			endTime: new FormControl<Date | null | undefined>(undefined),
			format: new FormControl<TemplateFormat | null | undefined>(undefined, [Validators.required]),
			message: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			needsReplacements: new FormControl<boolean | null | undefined>(undefined),
			recommendationTemplateArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			startTime: new FormControl<Date | null | undefined>(undefined),
			status: new FormControl<RecommendationTemplateStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum TemplateFormat { CfnYaml = 'CfnYaml', CfnJson = 'CfnJson' }

	export enum RenderRecommendationType { Alarm = 'Alarm', Sop = 'Sop', Test = 'Test' }

	export enum RecommendationTemplateStatus { Pending = 'Pending', InProgress = 'InProgress', Failed = 'Failed', Success = 'Success' }


	/** The location of the Amazon S3 bucket. */
	export interface S3Location {
		bucket?: string;
		prefix?: string;
	}

	/** The location of the Amazon S3 bucket. */
	export interface S3LocationFormProperties {
		bucket: FormControl<string | null | undefined>,
		prefix: FormControl<string | null | undefined>,
	}
	export function CreateS3LocationFormGroup() {
		return new FormGroup<S3LocationFormProperties>({
			bucket: new FormControl<string | null | undefined>(undefined),
			prefix: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateResiliencyPolicyResponse {

		/** Required */
		policy: ResiliencyPolicy;
	}
	export interface CreateResiliencyPolicyResponseFormProperties {
	}
	export function CreateCreateResiliencyPolicyResponseFormGroup() {
		return new FormGroup<CreateResiliencyPolicyResponseFormProperties>({
		});

	}


	/** Defines a resiliency policy. */
	export interface ResiliencyPolicy {
		creationTime?: Date;
		dataLocationConstraint?: DataLocationConstraint;
		estimatedCostTier?: EstimatedCostTier;
		policy?: DisruptionPolicy;
		policyArn?: string;
		policyDescription?: string;
		policyName?: string;
		tags?: TagMap;
		tier?: ResiliencyPolicyTier;
	}

	/** Defines a resiliency policy. */
	export interface ResiliencyPolicyFormProperties {
		creationTime: FormControl<Date | null | undefined>,
		dataLocationConstraint: FormControl<DataLocationConstraint | null | undefined>,
		estimatedCostTier: FormControl<EstimatedCostTier | null | undefined>,
		policyArn: FormControl<string | null | undefined>,
		policyDescription: FormControl<string | null | undefined>,
		policyName: FormControl<string | null | undefined>,
		tier: FormControl<ResiliencyPolicyTier | null | undefined>,
	}
	export function CreateResiliencyPolicyFormGroup() {
		return new FormGroup<ResiliencyPolicyFormProperties>({
			creationTime: new FormControl<Date | null | undefined>(undefined),
			dataLocationConstraint: new FormControl<DataLocationConstraint | null | undefined>(undefined),
			estimatedCostTier: new FormControl<EstimatedCostTier | null | undefined>(undefined),
			policyArn: new FormControl<string | null | undefined>(undefined),
			policyDescription: new FormControl<string | null | undefined>(undefined),
			policyName: new FormControl<string | null | undefined>(undefined),
			tier: new FormControl<ResiliencyPolicyTier | null | undefined>(undefined),
		});

	}

	export enum DataLocationConstraint { AnyLocation = 'AnyLocation', SameContinent = 'SameContinent', SameCountry = 'SameCountry' }

	export enum EstimatedCostTier { L1 = 'L1', L2 = 'L2', L3 = 'L3', L4 = 'L4' }

	export interface DisruptionPolicy {
	}
	export interface DisruptionPolicyFormProperties {
	}
	export function CreateDisruptionPolicyFormGroup() {
		return new FormGroup<DisruptionPolicyFormProperties>({
		});

	}

	export enum ResiliencyPolicyTier { MissionCritical = 'MissionCritical', Critical = 'Critical', Important = 'Important', CoreServices = 'CoreServices', NonCritical = 'NonCritical', NotApplicable = 'NotApplicable' }


	/** Defines a failure policy. */
	export interface FailurePolicy {

		/** Required */
		rpoInSecs: number;

		/** Required */
		rtoInSecs: number;
	}

	/** Defines a failure policy. */
	export interface FailurePolicyFormProperties {

		/** Required */
		rpoInSecs: FormControl<number | null | undefined>,

		/** Required */
		rtoInSecs: FormControl<number | null | undefined>,
	}
	export function CreateFailurePolicyFormGroup() {
		return new FormGroup<FailurePolicyFormProperties>({
			rpoInSecs: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			rtoInSecs: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteAppResponse {

		/** Required */
		appArn: string;
	}
	export interface DeleteAppResponseFormProperties {

		/** Required */
		appArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteAppResponseFormGroup() {
		return new FormGroup<DeleteAppResponseFormProperties>({
			appArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteAppAssessmentResponse {

		/** Required */
		assessmentArn: string;

		/** Required */
		assessmentStatus: RecommendationTemplateStatus;
	}
	export interface DeleteAppAssessmentResponseFormProperties {

		/** Required */
		assessmentArn: FormControl<string | null | undefined>,

		/** Required */
		assessmentStatus: FormControl<RecommendationTemplateStatus | null | undefined>,
	}
	export function CreateDeleteAppAssessmentResponseFormGroup() {
		return new FormGroup<DeleteAppAssessmentResponseFormProperties>({
			assessmentArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			assessmentStatus: new FormControl<RecommendationTemplateStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteAppInputSourceResponse {
		appArn?: string;
		appInputSource?: AppInputSource;
	}
	export interface DeleteAppInputSourceResponseFormProperties {
		appArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteAppInputSourceResponseFormGroup() {
		return new FormGroup<DeleteAppInputSourceResponseFormProperties>({
			appArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The list of Resilience Hub application input sources. */
	export interface AppInputSource {
		eksSourceClusterNamespace?: EksSourceClusterNamespace;

		/** Required */
		importType: ResourceMappingType;
		resourceCount?: number | null;
		sourceArn?: string;
		sourceName?: string;
		terraformSource?: TerraformSource;
	}

	/** The list of Resilience Hub application input sources. */
	export interface AppInputSourceFormProperties {

		/** Required */
		importType: FormControl<ResourceMappingType | null | undefined>,
		resourceCount: FormControl<number | null | undefined>,
		sourceArn: FormControl<string | null | undefined>,
		sourceName: FormControl<string | null | undefined>,
	}
	export function CreateAppInputSourceFormGroup() {
		return new FormGroup<AppInputSourceFormProperties>({
			importType: new FormControl<ResourceMappingType | null | undefined>(undefined, [Validators.required]),
			resourceCount: new FormControl<number | null | undefined>(undefined),
			sourceArn: new FormControl<string | null | undefined>(undefined),
			sourceName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The input source of the namespace that is located on your Amazon Elastic Kubernetes Service cluster. */
	export interface EksSourceClusterNamespace {

		/** Required */
		eksClusterArn: string;

		/** Required */
		namespace: string;
	}

	/** The input source of the namespace that is located on your Amazon Elastic Kubernetes Service cluster. */
	export interface EksSourceClusterNamespaceFormProperties {

		/** Required */
		eksClusterArn: FormControl<string | null | undefined>,

		/** Required */
		namespace: FormControl<string | null | undefined>,
	}
	export function CreateEksSourceClusterNamespaceFormGroup() {
		return new FormGroup<EksSourceClusterNamespaceFormProperties>({
			eksClusterArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			namespace: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/**  The Terraform s3 state file you need to import.  */
	export interface TerraformSource {

		/** Required */
		s3StateFileUrl: string;
	}

	/**  The Terraform s3 state file you need to import.  */
	export interface TerraformSourceFormProperties {

		/** Required */
		s3StateFileUrl: FormControl<string | null | undefined>,
	}
	export function CreateTerraformSourceFormGroup() {
		return new FormGroup<TerraformSourceFormProperties>({
			s3StateFileUrl: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteAppVersionAppComponentResponse {

		/** Required */
		appArn: string;
		appComponent?: AppComponent;

		/** Required */
		appVersion: string;
	}
	export interface DeleteAppVersionAppComponentResponseFormProperties {

		/** Required */
		appArn: FormControl<string | null | undefined>,

		/** Required */
		appVersion: FormControl<string | null | undefined>,
	}
	export function CreateDeleteAppVersionAppComponentResponseFormGroup() {
		return new FormGroup<DeleteAppVersionAppComponentResponseFormProperties>({
			appArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			appVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteAppVersionResourceResponse {

		/** Required */
		appArn: string;

		/** Required */
		appVersion: string;
		physicalResource?: PhysicalResource;
	}
	export interface DeleteAppVersionResourceResponseFormProperties {

		/** Required */
		appArn: FormControl<string | null | undefined>,

		/** Required */
		appVersion: FormControl<string | null | undefined>,
	}
	export function CreateDeleteAppVersionResourceResponseFormGroup() {
		return new FormGroup<DeleteAppVersionResourceResponseFormProperties>({
			appArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			appVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteRecommendationTemplateResponse {

		/** Required */
		recommendationTemplateArn: string;

		/** Required */
		status: RecommendationTemplateStatus;
	}
	export interface DeleteRecommendationTemplateResponseFormProperties {

		/** Required */
		recommendationTemplateArn: FormControl<string | null | undefined>,

		/** Required */
		status: FormControl<RecommendationTemplateStatus | null | undefined>,
	}
	export function CreateDeleteRecommendationTemplateResponseFormGroup() {
		return new FormGroup<DeleteRecommendationTemplateResponseFormProperties>({
			recommendationTemplateArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<RecommendationTemplateStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteResiliencyPolicyResponse {

		/** Required */
		policyArn: string;
	}
	export interface DeleteResiliencyPolicyResponseFormProperties {

		/** Required */
		policyArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteResiliencyPolicyResponseFormGroup() {
		return new FormGroup<DeleteResiliencyPolicyResponseFormProperties>({
			policyArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeAppResponse {

		/** Required */
		app: App;
	}
	export interface DescribeAppResponseFormProperties {
	}
	export function CreateDescribeAppResponseFormGroup() {
		return new FormGroup<DescribeAppResponseFormProperties>({
		});

	}

	export interface DescribeAppAssessmentResponse {

		/** Required */
		assessment: AppAssessment;
	}
	export interface DescribeAppAssessmentResponseFormProperties {
	}
	export function CreateDescribeAppAssessmentResponseFormGroup() {
		return new FormGroup<DescribeAppAssessmentResponseFormProperties>({
		});

	}


	/** Defines an application assessment. */
	export interface AppAssessment {
		appArn?: string;
		appVersion?: string;

		/** Required */
		assessmentArn: string;
		assessmentName?: string;

		/** Required */
		assessmentStatus: RecommendationTemplateStatus;
		compliance?: AssessmentCompliance;
		complianceStatus?: ComplianceStatus;
		cost?: Cost;
		driftStatus?: AppDriftStatusType;
		endTime?: Date;

		/** Required */
		invoker: AssessmentInvoker;
		message?: string;
		policy?: ResiliencyPolicy;
		resiliencyScore?: ResiliencyScore;
		resourceErrorsDetails?: ResourceErrorsDetails;
		startTime?: Date;
		tags?: TagMap;
		versionName?: string;
	}

	/** Defines an application assessment. */
	export interface AppAssessmentFormProperties {
		appArn: FormControl<string | null | undefined>,
		appVersion: FormControl<string | null | undefined>,

		/** Required */
		assessmentArn: FormControl<string | null | undefined>,
		assessmentName: FormControl<string | null | undefined>,

		/** Required */
		assessmentStatus: FormControl<RecommendationTemplateStatus | null | undefined>,
		complianceStatus: FormControl<ComplianceStatus | null | undefined>,
		driftStatus: FormControl<AppDriftStatusType | null | undefined>,
		endTime: FormControl<Date | null | undefined>,

		/** Required */
		invoker: FormControl<AssessmentInvoker | null | undefined>,
		message: FormControl<string | null | undefined>,
		startTime: FormControl<Date | null | undefined>,
		versionName: FormControl<string | null | undefined>,
	}
	export function CreateAppAssessmentFormGroup() {
		return new FormGroup<AppAssessmentFormProperties>({
			appArn: new FormControl<string | null | undefined>(undefined),
			appVersion: new FormControl<string | null | undefined>(undefined),
			assessmentArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			assessmentName: new FormControl<string | null | undefined>(undefined),
			assessmentStatus: new FormControl<RecommendationTemplateStatus | null | undefined>(undefined, [Validators.required]),
			complianceStatus: new FormControl<ComplianceStatus | null | undefined>(undefined),
			driftStatus: new FormControl<AppDriftStatusType | null | undefined>(undefined),
			endTime: new FormControl<Date | null | undefined>(undefined),
			invoker: new FormControl<AssessmentInvoker | null | undefined>(undefined, [Validators.required]),
			message: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<Date | null | undefined>(undefined),
			versionName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AssessmentCompliance {
	}
	export interface AssessmentComplianceFormProperties {
	}
	export function CreateAssessmentComplianceFormGroup() {
		return new FormGroup<AssessmentComplianceFormProperties>({
		});

	}

	export enum ComplianceStatus { PolicyBreached = 'PolicyBreached', PolicyMet = 'PolicyMet' }


	/** Defines a cost object. */
	export interface Cost {

		/** Required */
		amount: number;

		/** Required */
		currency: string;

		/** Required */
		frequency: CostFrequency;
	}

	/** Defines a cost object. */
	export interface CostFormProperties {

		/** Required */
		amount: FormControl<number | null | undefined>,

		/** Required */
		currency: FormControl<string | null | undefined>,

		/** Required */
		frequency: FormControl<CostFrequency | null | undefined>,
	}
	export function CreateCostFormGroup() {
		return new FormGroup<CostFormProperties>({
			amount: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			currency: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			frequency: new FormControl<CostFrequency | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum CostFrequency { Hourly = 'Hourly', Daily = 'Daily', Monthly = 'Monthly', Yearly = 'Yearly' }

	export enum AssessmentInvoker { User = 'User', System = 'System' }


	/** The overall resiliency score, returned as an object that includes the disruption score and outage score. */
	export interface ResiliencyScore {

		/** Required */
		disruptionScore: DisruptionResiliencyScore;

		/** Required */
		score: number;
	}

	/** The overall resiliency score, returned as an object that includes the disruption score and outage score. */
	export interface ResiliencyScoreFormProperties {

		/** Required */
		score: FormControl<number | null | undefined>,
	}
	export function CreateResiliencyScoreFormGroup() {
		return new FormGroup<ResiliencyScoreFormProperties>({
			score: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DisruptionResiliencyScore {
	}
	export interface DisruptionResiliencyScoreFormProperties {
	}
	export function CreateDisruptionResiliencyScoreFormGroup() {
		return new FormGroup<DisruptionResiliencyScoreFormProperties>({
		});

	}


	/**  A list of errors retrieving an application's resources.  */
	export interface ResourceErrorsDetails {
		hasMoreErrors?: boolean | null;
		resourceErrors?: Array<ResourceError>;
	}

	/**  A list of errors retrieving an application's resources.  */
	export interface ResourceErrorsDetailsFormProperties {
		hasMoreErrors: FormControl<boolean | null | undefined>,
	}
	export function CreateResourceErrorsDetailsFormGroup() {
		return new FormGroup<ResourceErrorsDetailsFormProperties>({
			hasMoreErrors: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/**  Defines application resource errors.  */
	export interface ResourceError {
		logicalResourceId?: string;
		physicalResourceId?: string;
		reason?: string;
	}

	/**  Defines application resource errors.  */
	export interface ResourceErrorFormProperties {
		logicalResourceId: FormControl<string | null | undefined>,
		physicalResourceId: FormControl<string | null | undefined>,
		reason: FormControl<string | null | undefined>,
	}
	export function CreateResourceErrorFormGroup() {
		return new FormGroup<ResourceErrorFormProperties>({
			logicalResourceId: new FormControl<string | null | undefined>(undefined),
			physicalResourceId: new FormControl<string | null | undefined>(undefined),
			reason: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeAppVersionResponse {
		additionalInfo?: AdditionalInfoMap;

		/** Required */
		appArn: string;

		/** Required */
		appVersion: string;
	}
	export interface DescribeAppVersionResponseFormProperties {

		/** Required */
		appArn: FormControl<string | null | undefined>,

		/** Required */
		appVersion: FormControl<string | null | undefined>,
	}
	export function CreateDescribeAppVersionResponseFormGroup() {
		return new FormGroup<DescribeAppVersionResponseFormProperties>({
			appArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			appVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeAppVersionAppComponentResponse {

		/** Required */
		appArn: string;
		appComponent?: AppComponent;

		/** Required */
		appVersion: string;
	}
	export interface DescribeAppVersionAppComponentResponseFormProperties {

		/** Required */
		appArn: FormControl<string | null | undefined>,

		/** Required */
		appVersion: FormControl<string | null | undefined>,
	}
	export function CreateDescribeAppVersionAppComponentResponseFormGroup() {
		return new FormGroup<DescribeAppVersionAppComponentResponseFormProperties>({
			appArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			appVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeAppVersionResourceResponse {

		/** Required */
		appArn: string;

		/** Required */
		appVersion: string;
		physicalResource?: PhysicalResource;
	}
	export interface DescribeAppVersionResourceResponseFormProperties {

		/** Required */
		appArn: FormControl<string | null | undefined>,

		/** Required */
		appVersion: FormControl<string | null | undefined>,
	}
	export function CreateDescribeAppVersionResourceResponseFormGroup() {
		return new FormGroup<DescribeAppVersionResourceResponseFormProperties>({
			appArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			appVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeAppVersionResourcesResolutionStatusResponse {

		/** Required */
		appArn: string;

		/** Required */
		appVersion: string;
		errorMessage?: string;

		/** Required */
		resolutionId: string;

		/** Required */
		status: RecommendationTemplateStatus;
	}
	export interface DescribeAppVersionResourcesResolutionStatusResponseFormProperties {

		/** Required */
		appArn: FormControl<string | null | undefined>,

		/** Required */
		appVersion: FormControl<string | null | undefined>,
		errorMessage: FormControl<string | null | undefined>,

		/** Required */
		resolutionId: FormControl<string | null | undefined>,

		/** Required */
		status: FormControl<RecommendationTemplateStatus | null | undefined>,
	}
	export function CreateDescribeAppVersionResourcesResolutionStatusResponseFormGroup() {
		return new FormGroup<DescribeAppVersionResourcesResolutionStatusResponseFormProperties>({
			appArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			appVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			errorMessage: new FormControl<string | null | undefined>(undefined),
			resolutionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<RecommendationTemplateStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeAppVersionTemplateResponse {

		/** Required */
		appArn: string;

		/** Required */
		appTemplateBody: string;

		/** Required */
		appVersion: string;
	}
	export interface DescribeAppVersionTemplateResponseFormProperties {

		/** Required */
		appArn: FormControl<string | null | undefined>,

		/** Required */
		appTemplateBody: FormControl<string | null | undefined>,

		/** Required */
		appVersion: FormControl<string | null | undefined>,
	}
	export function CreateDescribeAppVersionTemplateResponseFormGroup() {
		return new FormGroup<DescribeAppVersionTemplateResponseFormProperties>({
			appArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			appTemplateBody: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			appVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeDraftAppVersionResourcesImportStatusResponse {

		/** Required */
		appArn: string;

		/** Required */
		appVersion: string;
		errorMessage?: string;

		/** Required */
		status: RecommendationTemplateStatus;

		/** Required */
		statusChangeTime: Date;
	}
	export interface DescribeDraftAppVersionResourcesImportStatusResponseFormProperties {

		/** Required */
		appArn: FormControl<string | null | undefined>,

		/** Required */
		appVersion: FormControl<string | null | undefined>,
		errorMessage: FormControl<string | null | undefined>,

		/** Required */
		status: FormControl<RecommendationTemplateStatus | null | undefined>,

		/** Required */
		statusChangeTime: FormControl<Date | null | undefined>,
	}
	export function CreateDescribeDraftAppVersionResourcesImportStatusResponseFormGroup() {
		return new FormGroup<DescribeDraftAppVersionResourcesImportStatusResponseFormProperties>({
			appArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			appVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			errorMessage: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<RecommendationTemplateStatus | null | undefined>(undefined, [Validators.required]),
			statusChangeTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeResiliencyPolicyResponse {

		/** Required */
		policy: ResiliencyPolicy;
	}
	export interface DescribeResiliencyPolicyResponseFormProperties {
	}
	export function CreateDescribeResiliencyPolicyResponseFormGroup() {
		return new FormGroup<DescribeResiliencyPolicyResponseFormProperties>({
		});

	}

	export interface ImportResourcesToDraftAppVersionResponse {

		/** Required */
		appArn: string;

		/** Required */
		appVersion: string;
		eksSources?: Array<EksSource>;
		sourceArns?: Array<string>;

		/** Required */
		status: RecommendationTemplateStatus;
		terraformSources?: Array<TerraformSource>;
	}
	export interface ImportResourcesToDraftAppVersionResponseFormProperties {

		/** Required */
		appArn: FormControl<string | null | undefined>,

		/** Required */
		appVersion: FormControl<string | null | undefined>,

		/** Required */
		status: FormControl<RecommendationTemplateStatus | null | undefined>,
	}
	export function CreateImportResourcesToDraftAppVersionResponseFormGroup() {
		return new FormGroup<ImportResourcesToDraftAppVersionResponseFormProperties>({
			appArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			appVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<RecommendationTemplateStatus | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The input source of the Amazon Elastic Kubernetes Service cluster. */
	export interface EksSource {

		/** Required */
		eksClusterArn: string;

		/** Required */
		namespaces: Array<string>;
	}

	/** The input source of the Amazon Elastic Kubernetes Service cluster. */
	export interface EksSourceFormProperties {

		/** Required */
		eksClusterArn: FormControl<string | null | undefined>,
	}
	export function CreateEksSourceFormGroup() {
		return new FormGroup<EksSourceFormProperties>({
			eksClusterArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListAlarmRecommendationsResponse {

		/** Required */
		alarmRecommendations: Array<AlarmRecommendation>;
		nextToken?: string;
	}
	export interface ListAlarmRecommendationsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListAlarmRecommendationsResponseFormGroup() {
		return new FormGroup<ListAlarmRecommendationsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Defines a recommendation for a CloudWatch alarm. */
	export interface AlarmRecommendation {
		appComponentName?: string;
		appComponentNames?: Array<string>;
		description?: string;
		items?: Array<RecommendationItem>;

		/** Required */
		name: string;
		prerequisite?: string;

		/** Required */
		recommendationId: string;

		/** Required */
		referenceId: string;

		/** Required */
		type: AlarmType;
	}

	/** Defines a recommendation for a CloudWatch alarm. */
	export interface AlarmRecommendationFormProperties {
		appComponentName: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
		prerequisite: FormControl<string | null | undefined>,

		/** Required */
		recommendationId: FormControl<string | null | undefined>,

		/** Required */
		referenceId: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AlarmType | null | undefined>,
	}
	export function CreateAlarmRecommendationFormGroup() {
		return new FormGroup<AlarmRecommendationFormProperties>({
			appComponentName: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			prerequisite: new FormControl<string | null | undefined>(undefined),
			recommendationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			referenceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AlarmType | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Defines a recommendation. */
	export interface RecommendationItem {
		alreadyImplemented?: boolean | null;
		excludeReason?: ExcludeRecommendationReason;
		excluded?: boolean | null;
		resourceId?: string;
		targetAccountId?: string;
		targetRegion?: string;
	}

	/** Defines a recommendation. */
	export interface RecommendationItemFormProperties {
		alreadyImplemented: FormControl<boolean | null | undefined>,
		excludeReason: FormControl<ExcludeRecommendationReason | null | undefined>,
		excluded: FormControl<boolean | null | undefined>,
		resourceId: FormControl<string | null | undefined>,
		targetAccountId: FormControl<string | null | undefined>,
		targetRegion: FormControl<string | null | undefined>,
	}
	export function CreateRecommendationItemFormGroup() {
		return new FormGroup<RecommendationItemFormProperties>({
			alreadyImplemented: new FormControl<boolean | null | undefined>(undefined),
			excludeReason: new FormControl<ExcludeRecommendationReason | null | undefined>(undefined),
			excluded: new FormControl<boolean | null | undefined>(undefined),
			resourceId: new FormControl<string | null | undefined>(undefined),
			targetAccountId: new FormControl<string | null | undefined>(undefined),
			targetRegion: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AlarmType { Metric = 'Metric', Composite = 'Composite', Canary = 'Canary', Logs = 'Logs', Event = 'Event' }

	export interface ListAppAssessmentComplianceDriftsResponse {

		/** Required */
		complianceDrifts: Array<ComplianceDrift>;
		nextToken?: string;
	}
	export interface ListAppAssessmentComplianceDriftsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListAppAssessmentComplianceDriftsResponseFormGroup() {
		return new FormGroup<ListAppAssessmentComplianceDriftsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Indicates the compliance drifts (recovery time objective (RTO) and recovery point objective (RPO)) that were detected for an assessed entity. */
	export interface ComplianceDrift {
		actualReferenceId?: string;
		actualValue?: AssessmentCompliance;
		appId?: string;
		appVersion?: string;
		diffType?: DifferenceType;
		driftType?: DriftType;
		entityId?: string;
		entityType?: string;
		expectedReferenceId?: string;
		expectedValue?: AssessmentCompliance;
	}

	/** Indicates the compliance drifts (recovery time objective (RTO) and recovery point objective (RPO)) that were detected for an assessed entity. */
	export interface ComplianceDriftFormProperties {
		actualReferenceId: FormControl<string | null | undefined>,
		appId: FormControl<string | null | undefined>,
		appVersion: FormControl<string | null | undefined>,
		diffType: FormControl<DifferenceType | null | undefined>,
		driftType: FormControl<DriftType | null | undefined>,
		entityId: FormControl<string | null | undefined>,
		entityType: FormControl<string | null | undefined>,
		expectedReferenceId: FormControl<string | null | undefined>,
	}
	export function CreateComplianceDriftFormGroup() {
		return new FormGroup<ComplianceDriftFormProperties>({
			actualReferenceId: new FormControl<string | null | undefined>(undefined),
			appId: new FormControl<string | null | undefined>(undefined),
			appVersion: new FormControl<string | null | undefined>(undefined),
			diffType: new FormControl<DifferenceType | null | undefined>(undefined),
			driftType: new FormControl<DriftType | null | undefined>(undefined),
			entityId: new FormControl<string | null | undefined>(undefined),
			entityType: new FormControl<string | null | undefined>(undefined),
			expectedReferenceId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DifferenceType { NotEqual = 'NotEqual' }

	export enum DriftType { ApplicationCompliance = 'ApplicationCompliance' }

	export interface ListAppAssessmentsResponse {

		/** Required */
		assessmentSummaries: Array<AppAssessmentSummary>;
		nextToken?: string;
	}
	export interface ListAppAssessmentsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListAppAssessmentsResponseFormGroup() {
		return new FormGroup<ListAppAssessmentsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Defines an application assessment summary. */
	export interface AppAssessmentSummary {
		appArn?: string;
		appVersion?: string;

		/** Required */
		assessmentArn: string;
		assessmentName?: string;

		/** Required */
		assessmentStatus: RecommendationTemplateStatus;
		complianceStatus?: ComplianceStatus;
		cost?: Cost;
		driftStatus?: AppDriftStatusType;
		endTime?: Date;
		invoker?: AssessmentInvoker;
		message?: string;
		resiliencyScore?: number | null;
		startTime?: Date;
		versionName?: string;
	}

	/** Defines an application assessment summary. */
	export interface AppAssessmentSummaryFormProperties {
		appArn: FormControl<string | null | undefined>,
		appVersion: FormControl<string | null | undefined>,

		/** Required */
		assessmentArn: FormControl<string | null | undefined>,
		assessmentName: FormControl<string | null | undefined>,

		/** Required */
		assessmentStatus: FormControl<RecommendationTemplateStatus | null | undefined>,
		complianceStatus: FormControl<ComplianceStatus | null | undefined>,
		driftStatus: FormControl<AppDriftStatusType | null | undefined>,
		endTime: FormControl<Date | null | undefined>,
		invoker: FormControl<AssessmentInvoker | null | undefined>,
		message: FormControl<string | null | undefined>,
		resiliencyScore: FormControl<number | null | undefined>,
		startTime: FormControl<Date | null | undefined>,
		versionName: FormControl<string | null | undefined>,
	}
	export function CreateAppAssessmentSummaryFormGroup() {
		return new FormGroup<AppAssessmentSummaryFormProperties>({
			appArn: new FormControl<string | null | undefined>(undefined),
			appVersion: new FormControl<string | null | undefined>(undefined),
			assessmentArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			assessmentName: new FormControl<string | null | undefined>(undefined),
			assessmentStatus: new FormControl<RecommendationTemplateStatus | null | undefined>(undefined, [Validators.required]),
			complianceStatus: new FormControl<ComplianceStatus | null | undefined>(undefined),
			driftStatus: new FormControl<AppDriftStatusType | null | undefined>(undefined),
			endTime: new FormControl<Date | null | undefined>(undefined),
			invoker: new FormControl<AssessmentInvoker | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			resiliencyScore: new FormControl<number | null | undefined>(undefined),
			startTime: new FormControl<Date | null | undefined>(undefined),
			versionName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AssessmentStatus { Pending = 'Pending', InProgress = 'InProgress', Failed = 'Failed', Success = 'Success' }

	export interface ListAppComponentCompliancesResponse {

		/** Required */
		componentCompliances: Array<AppComponentCompliance>;
		nextToken?: string;
	}
	export interface ListAppComponentCompliancesResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListAppComponentCompliancesResponseFormGroup() {
		return new FormGroup<ListAppComponentCompliancesResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Defines the compliance of an Application Component against the resiliency policy. */
	export interface AppComponentCompliance {
		appComponentName?: string;
		compliance?: AssessmentCompliance;
		cost?: Cost;
		message?: string;
		resiliencyScore?: ResiliencyScore;
		status?: ComplianceStatus;
	}

	/** Defines the compliance of an Application Component against the resiliency policy. */
	export interface AppComponentComplianceFormProperties {
		appComponentName: FormControl<string | null | undefined>,
		message: FormControl<string | null | undefined>,
		status: FormControl<ComplianceStatus | null | undefined>,
	}
	export function CreateAppComponentComplianceFormGroup() {
		return new FormGroup<AppComponentComplianceFormProperties>({
			appComponentName: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<ComplianceStatus | null | undefined>(undefined),
		});

	}

	export interface ListAppComponentRecommendationsResponse {

		/** Required */
		componentRecommendations: Array<ComponentRecommendation>;
		nextToken?: string;
	}
	export interface ListAppComponentRecommendationsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListAppComponentRecommendationsResponseFormGroup() {
		return new FormGroup<ListAppComponentRecommendationsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Defines recommendations for an Resilience Hub Application Component, returned as an object. This object contains component names, configuration recommendations, and recommendation statuses. */
	export interface ComponentRecommendation {

		/** Required */
		appComponentName: string;

		/** Required */
		configRecommendations: Array<ConfigRecommendation>;

		/** Required */
		recommendationStatus: RecommendationComplianceStatus;
	}

	/** Defines recommendations for an Resilience Hub Application Component, returned as an object. This object contains component names, configuration recommendations, and recommendation statuses. */
	export interface ComponentRecommendationFormProperties {

		/** Required */
		appComponentName: FormControl<string | null | undefined>,

		/** Required */
		recommendationStatus: FormControl<RecommendationComplianceStatus | null | undefined>,
	}
	export function CreateComponentRecommendationFormGroup() {
		return new FormGroup<ComponentRecommendationFormProperties>({
			appComponentName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			recommendationStatus: new FormControl<RecommendationComplianceStatus | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Defines a recommendation configuration. */
	export interface ConfigRecommendation {
		appComponentName?: string;
		compliance?: AssessmentCompliance;
		cost?: Cost;
		description?: string;
		haArchitecture?: HaArchitecture;

		/** Required */
		name: string;

		/** Required */
		optimizationType: ConfigRecommendationOptimizationType;
		recommendationCompliance?: RecommendationCompliance;

		/** Required */
		referenceId: string;
		suggestedChanges?: Array<string>;
	}

	/** Defines a recommendation configuration. */
	export interface ConfigRecommendationFormProperties {
		appComponentName: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		haArchitecture: FormControl<HaArchitecture | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		optimizationType: FormControl<ConfigRecommendationOptimizationType | null | undefined>,

		/** Required */
		referenceId: FormControl<string | null | undefined>,
	}
	export function CreateConfigRecommendationFormGroup() {
		return new FormGroup<ConfigRecommendationFormProperties>({
			appComponentName: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			haArchitecture: new FormControl<HaArchitecture | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			optimizationType: new FormControl<ConfigRecommendationOptimizationType | null | undefined>(undefined, [Validators.required]),
			referenceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum HaArchitecture { MultiSite = 'MultiSite', WarmStandby = 'WarmStandby', PilotLight = 'PilotLight', BackupAndRestore = 'BackupAndRestore', NoRecoveryPlan = 'NoRecoveryPlan' }

	export enum ConfigRecommendationOptimizationType { LeastCost = 'LeastCost', LeastChange = 'LeastChange', BestAZRecovery = 'BestAZRecovery', LeastErrors = 'LeastErrors', BestAttainable = 'BestAttainable', BestRegionRecovery = 'BestRegionRecovery' }

	export interface RecommendationCompliance {
	}
	export interface RecommendationComplianceFormProperties {
	}
	export function CreateRecommendationComplianceFormGroup() {
		return new FormGroup<RecommendationComplianceFormProperties>({
		});

	}

	export enum RecommendationComplianceStatus { BreachedUnattainable = 'BreachedUnattainable', BreachedCanMeet = 'BreachedCanMeet', MetCanImprove = 'MetCanImprove' }

	export interface ListAppInputSourcesResponse {

		/** Required */
		appInputSources: Array<AppInputSource>;
		nextToken?: string;
	}
	export interface ListAppInputSourcesResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListAppInputSourcesResponseFormGroup() {
		return new FormGroup<ListAppInputSourcesResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListAppVersionAppComponentsResponse {

		/** Required */
		appArn: string;
		appComponents?: Array<AppComponent>;

		/** Required */
		appVersion: string;
		nextToken?: string;
	}
	export interface ListAppVersionAppComponentsResponseFormProperties {

		/** Required */
		appArn: FormControl<string | null | undefined>,

		/** Required */
		appVersion: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListAppVersionAppComponentsResponseFormGroup() {
		return new FormGroup<ListAppVersionAppComponentsResponseFormProperties>({
			appArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			appVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListAppVersionResourceMappingsResponse {
		nextToken?: string;

		/** Required */
		resourceMappings: Array<ResourceMapping>;
	}
	export interface ListAppVersionResourceMappingsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListAppVersionResourceMappingsResponseFormGroup() {
		return new FormGroup<ListAppVersionResourceMappingsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListAppVersionResourcesResponse {
		nextToken?: string;

		/** Required */
		physicalResources: Array<PhysicalResource>;

		/** Required */
		resolutionId: string;
	}
	export interface ListAppVersionResourcesResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,

		/** Required */
		resolutionId: FormControl<string | null | undefined>,
	}
	export function CreateListAppVersionResourcesResponseFormGroup() {
		return new FormGroup<ListAppVersionResourcesResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
			resolutionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListAppVersionsResponse {

		/** Required */
		appVersions: Array<AppVersionSummary>;
		nextToken?: string;
	}
	export interface ListAppVersionsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListAppVersionsResponseFormGroup() {
		return new FormGroup<ListAppVersionsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Version of an application. */
	export interface AppVersionSummary {

		/** Required */
		appVersion: string;
		creationTime?: Date;
		identifier?: number | null;
		versionName?: string;
	}

	/** Version of an application. */
	export interface AppVersionSummaryFormProperties {

		/** Required */
		appVersion: FormControl<string | null | undefined>,
		creationTime: FormControl<Date | null | undefined>,
		identifier: FormControl<number | null | undefined>,
		versionName: FormControl<string | null | undefined>,
	}
	export function CreateAppVersionSummaryFormGroup() {
		return new FormGroup<AppVersionSummaryFormProperties>({
			appVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			creationTime: new FormControl<Date | null | undefined>(undefined),
			identifier: new FormControl<number | null | undefined>(undefined),
			versionName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListAppsResponse {

		/** Required */
		appSummaries: Array<AppSummary>;
		nextToken?: string;
	}
	export interface ListAppsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListAppsResponseFormGroup() {
		return new FormGroup<ListAppsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Defines an application summary. */
	export interface AppSummary {

		/** Required */
		appArn: string;
		assessmentSchedule?: AppAssessmentScheduleType;
		complianceStatus?: AppComplianceStatusType;

		/** Required */
		creationTime: Date;
		description?: string;
		driftStatus?: AppDriftStatusType;

		/** Required */
		name: string;
		resiliencyScore?: number | null;
		status?: AppStatusType;
	}

	/** Defines an application summary. */
	export interface AppSummaryFormProperties {

		/** Required */
		appArn: FormControl<string | null | undefined>,
		assessmentSchedule: FormControl<AppAssessmentScheduleType | null | undefined>,
		complianceStatus: FormControl<AppComplianceStatusType | null | undefined>,

		/** Required */
		creationTime: FormControl<Date | null | undefined>,
		description: FormControl<string | null | undefined>,
		driftStatus: FormControl<AppDriftStatusType | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
		resiliencyScore: FormControl<number | null | undefined>,
		status: FormControl<AppStatusType | null | undefined>,
	}
	export function CreateAppSummaryFormGroup() {
		return new FormGroup<AppSummaryFormProperties>({
			appArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			assessmentSchedule: new FormControl<AppAssessmentScheduleType | null | undefined>(undefined),
			complianceStatus: new FormControl<AppComplianceStatusType | null | undefined>(undefined),
			creationTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
			driftStatus: new FormControl<AppDriftStatusType | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resiliencyScore: new FormControl<number | null | undefined>(undefined),
			status: new FormControl<AppStatusType | null | undefined>(undefined),
		});

	}

	export interface ListRecommendationTemplatesResponse {
		nextToken?: string;
		recommendationTemplates?: Array<RecommendationTemplate>;
	}
	export interface ListRecommendationTemplatesResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListRecommendationTemplatesResponseFormGroup() {
		return new FormGroup<ListRecommendationTemplatesResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListResiliencyPoliciesResponse {
		nextToken?: string;

		/** Required */
		resiliencyPolicies: Array<ResiliencyPolicy>;
	}
	export interface ListResiliencyPoliciesResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListResiliencyPoliciesResponseFormGroup() {
		return new FormGroup<ListResiliencyPoliciesResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListSopRecommendationsResponse {
		nextToken?: string;

		/** Required */
		sopRecommendations: Array<SopRecommendation>;
	}
	export interface ListSopRecommendationsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListSopRecommendationsResponseFormGroup() {
		return new FormGroup<ListSopRecommendationsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Defines a standard operating procedure (SOP) recommendation. */
	export interface SopRecommendation {
		appComponentName?: string;
		description?: string;
		items?: Array<RecommendationItem>;
		name?: string;
		prerequisite?: string;

		/** Required */
		recommendationId: string;

		/** Required */
		referenceId: string;

		/** Required */
		serviceType: SopServiceType;
	}

	/** Defines a standard operating procedure (SOP) recommendation. */
	export interface SopRecommendationFormProperties {
		appComponentName: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		prerequisite: FormControl<string | null | undefined>,

		/** Required */
		recommendationId: FormControl<string | null | undefined>,

		/** Required */
		referenceId: FormControl<string | null | undefined>,

		/** Required */
		serviceType: FormControl<SopServiceType | null | undefined>,
	}
	export function CreateSopRecommendationFormGroup() {
		return new FormGroup<SopRecommendationFormProperties>({
			appComponentName: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			prerequisite: new FormControl<string | null | undefined>(undefined),
			recommendationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			referenceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			serviceType: new FormControl<SopServiceType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum SopServiceType { SSM = 'SSM' }

	export interface ListSuggestedResiliencyPoliciesResponse {
		nextToken?: string;

		/** Required */
		resiliencyPolicies: Array<ResiliencyPolicy>;
	}
	export interface ListSuggestedResiliencyPoliciesResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListSuggestedResiliencyPoliciesResponseFormGroup() {
		return new FormGroup<ListSuggestedResiliencyPoliciesResponseFormProperties>({
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

	export interface ListTestRecommendationsResponse {
		nextToken?: string;

		/** Required */
		testRecommendations: Array<TestRecommendation>;
	}
	export interface ListTestRecommendationsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTestRecommendationsResponseFormGroup() {
		return new FormGroup<ListTestRecommendationsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Defines a test recommendation. */
	export interface TestRecommendation {
		appComponentName?: string;
		dependsOnAlarms?: Array<string>;
		description?: string;
		intent?: string;
		items?: Array<RecommendationItem>;
		name?: string;
		prerequisite?: string;
		recommendationId?: string;

		/** Required */
		referenceId: string;
		risk?: TestRisk;
		type?: TestType;
	}

	/** Defines a test recommendation. */
	export interface TestRecommendationFormProperties {
		appComponentName: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		intent: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		prerequisite: FormControl<string | null | undefined>,
		recommendationId: FormControl<string | null | undefined>,

		/** Required */
		referenceId: FormControl<string | null | undefined>,
		risk: FormControl<TestRisk | null | undefined>,
		type: FormControl<TestType | null | undefined>,
	}
	export function CreateTestRecommendationFormGroup() {
		return new FormGroup<TestRecommendationFormProperties>({
			appComponentName: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			intent: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			prerequisite: new FormControl<string | null | undefined>(undefined),
			recommendationId: new FormControl<string | null | undefined>(undefined),
			referenceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			risk: new FormControl<TestRisk | null | undefined>(undefined),
			type: new FormControl<TestType | null | undefined>(undefined),
		});

	}

	export enum TestRisk { Small = 'Small', Medium = 'Medium', High = 'High' }

	export enum TestType { Software = 'Software', Hardware = 'Hardware', AZ = 'AZ', Region = 'Region' }

	export interface ListUnsupportedAppVersionResourcesResponse {
		nextToken?: string;

		/** Required */
		resolutionId: string;

		/** Required */
		unsupportedResources: Array<UnsupportedResource>;
	}
	export interface ListUnsupportedAppVersionResourcesResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,

		/** Required */
		resolutionId: FormControl<string | null | undefined>,
	}
	export function CreateListUnsupportedAppVersionResourcesResponseFormGroup() {
		return new FormGroup<ListUnsupportedAppVersionResourcesResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
			resolutionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Defines a resource that is not supported by Resilience Hub. */
	export interface UnsupportedResource {

		/** Required */
		logicalResourceId: LogicalResourceId;

		/** Required */
		physicalResourceId: PhysicalResourceId;

		/** Required */
		resourceType: string;
		unsupportedResourceStatus?: string;
	}

	/** Defines a resource that is not supported by Resilience Hub. */
	export interface UnsupportedResourceFormProperties {

		/** Required */
		resourceType: FormControl<string | null | undefined>,
		unsupportedResourceStatus: FormControl<string | null | undefined>,
	}
	export function CreateUnsupportedResourceFormGroup() {
		return new FormGroup<UnsupportedResourceFormProperties>({
			resourceType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			unsupportedResourceStatus: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PublishAppVersionResponse {

		/** Required */
		appArn: string;
		appVersion?: string;
		identifier?: number | null;
		versionName?: string;
	}
	export interface PublishAppVersionResponseFormProperties {

		/** Required */
		appArn: FormControl<string | null | undefined>,
		appVersion: FormControl<string | null | undefined>,
		identifier: FormControl<number | null | undefined>,
		versionName: FormControl<string | null | undefined>,
	}
	export function CreatePublishAppVersionResponseFormGroup() {
		return new FormGroup<PublishAppVersionResponseFormProperties>({
			appArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			appVersion: new FormControl<string | null | undefined>(undefined),
			identifier: new FormControl<number | null | undefined>(undefined),
			versionName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PutDraftAppVersionTemplateResponse {
		appArn?: string;
		appVersion?: string;
	}
	export interface PutDraftAppVersionTemplateResponseFormProperties {
		appArn: FormControl<string | null | undefined>,
		appVersion: FormControl<string | null | undefined>,
	}
	export function CreatePutDraftAppVersionTemplateResponseFormGroup() {
		return new FormGroup<PutDraftAppVersionTemplateResponseFormProperties>({
			appArn: new FormControl<string | null | undefined>(undefined),
			appVersion: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RemoveDraftAppVersionResourceMappingsResponse {
		appArn?: string;
		appVersion?: string;
	}
	export interface RemoveDraftAppVersionResourceMappingsResponseFormProperties {
		appArn: FormControl<string | null | undefined>,
		appVersion: FormControl<string | null | undefined>,
	}
	export function CreateRemoveDraftAppVersionResourceMappingsResponseFormGroup() {
		return new FormGroup<RemoveDraftAppVersionResourceMappingsResponseFormProperties>({
			appArn: new FormControl<string | null | undefined>(undefined),
			appVersion: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ResolveAppVersionResourcesResponse {

		/** Required */
		appArn: string;

		/** Required */
		appVersion: string;

		/** Required */
		resolutionId: string;

		/** Required */
		status: RecommendationTemplateStatus;
	}
	export interface ResolveAppVersionResourcesResponseFormProperties {

		/** Required */
		appArn: FormControl<string | null | undefined>,

		/** Required */
		appVersion: FormControl<string | null | undefined>,

		/** Required */
		resolutionId: FormControl<string | null | undefined>,

		/** Required */
		status: FormControl<RecommendationTemplateStatus | null | undefined>,
	}
	export function CreateResolveAppVersionResourcesResponseFormGroup() {
		return new FormGroup<ResolveAppVersionResourcesResponseFormProperties>({
			appArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			appVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resolutionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<RecommendationTemplateStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface StartAppAssessmentResponse {

		/** Required */
		assessment: AppAssessment;
	}
	export interface StartAppAssessmentResponseFormProperties {
	}
	export function CreateStartAppAssessmentResponseFormGroup() {
		return new FormGroup<StartAppAssessmentResponseFormProperties>({
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

	export interface UpdateAppResponse {

		/** Required */
		app: App;
	}
	export interface UpdateAppResponseFormProperties {
	}
	export function CreateUpdateAppResponseFormGroup() {
		return new FormGroup<UpdateAppResponseFormProperties>({
		});

	}

	export interface UpdateAppVersionResponse {
		additionalInfo?: AdditionalInfoMap;

		/** Required */
		appArn: string;

		/** Required */
		appVersion: string;
	}
	export interface UpdateAppVersionResponseFormProperties {

		/** Required */
		appArn: FormControl<string | null | undefined>,

		/** Required */
		appVersion: FormControl<string | null | undefined>,
	}
	export function CreateUpdateAppVersionResponseFormGroup() {
		return new FormGroup<UpdateAppVersionResponseFormProperties>({
			appArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			appVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateAppVersionAppComponentResponse {

		/** Required */
		appArn: string;
		appComponent?: AppComponent;

		/** Required */
		appVersion: string;
	}
	export interface UpdateAppVersionAppComponentResponseFormProperties {

		/** Required */
		appArn: FormControl<string | null | undefined>,

		/** Required */
		appVersion: FormControl<string | null | undefined>,
	}
	export function CreateUpdateAppVersionAppComponentResponseFormGroup() {
		return new FormGroup<UpdateAppVersionAppComponentResponseFormProperties>({
			appArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			appVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateAppVersionResourceResponse {

		/** Required */
		appArn: string;

		/** Required */
		appVersion: string;
		physicalResource?: PhysicalResource;
	}
	export interface UpdateAppVersionResourceResponseFormProperties {

		/** Required */
		appArn: FormControl<string | null | undefined>,

		/** Required */
		appVersion: FormControl<string | null | undefined>,
	}
	export function CreateUpdateAppVersionResourceResponseFormGroup() {
		return new FormGroup<UpdateAppVersionResourceResponseFormProperties>({
			appArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			appVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateResiliencyPolicyResponse {

		/** Required */
		policy: ResiliencyPolicy;
	}
	export interface UpdateResiliencyPolicyResponseFormProperties {
	}
	export function CreateUpdateResiliencyPolicyResponseFormGroup() {
		return new FormGroup<UpdateResiliencyPolicyResponseFormProperties>({
		});

	}

	export interface AddDraftAppVersionResourceMappingsRequest {

		/** Required */
		appArn: string;

		/** Required */
		resourceMappings: Array<ResourceMapping>;
	}
	export interface AddDraftAppVersionResourceMappingsRequestFormProperties {

		/** Required */
		appArn: FormControl<string | null | undefined>,
	}
	export function CreateAddDraftAppVersionResourceMappingsRequestFormGroup() {
		return new FormGroup<AddDraftAppVersionResourceMappingsRequestFormProperties>({
			appArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum DriftStatus { NotChecked = 'NotChecked', NotDetected = 'NotDetected', Detected = 'Detected' }


	/** Defines the compliance against the resiliency policy for a disruption. */
	export interface DisruptionCompliance {
		achievableRpoInSecs?: number | null;
		achievableRtoInSecs?: number | null;

		/** Required */
		complianceStatus: ComplianceStatus;
		currentRpoInSecs?: number | null;
		currentRtoInSecs?: number | null;
		message?: string;
		rpoDescription?: string;
		rpoReferenceId?: string;
		rtoDescription?: string;
		rtoReferenceId?: string;
	}

	/** Defines the compliance against the resiliency policy for a disruption. */
	export interface DisruptionComplianceFormProperties {
		achievableRpoInSecs: FormControl<number | null | undefined>,
		achievableRtoInSecs: FormControl<number | null | undefined>,

		/** Required */
		complianceStatus: FormControl<ComplianceStatus | null | undefined>,
		currentRpoInSecs: FormControl<number | null | undefined>,
		currentRtoInSecs: FormControl<number | null | undefined>,
		message: FormControl<string | null | undefined>,
		rpoDescription: FormControl<string | null | undefined>,
		rpoReferenceId: FormControl<string | null | undefined>,
		rtoDescription: FormControl<string | null | undefined>,
		rtoReferenceId: FormControl<string | null | undefined>,
	}
	export function CreateDisruptionComplianceFormGroup() {
		return new FormGroup<DisruptionComplianceFormProperties>({
			achievableRpoInSecs: new FormControl<number | null | undefined>(undefined),
			achievableRtoInSecs: new FormControl<number | null | undefined>(undefined),
			complianceStatus: new FormControl<ComplianceStatus | null | undefined>(undefined, [Validators.required]),
			currentRpoInSecs: new FormControl<number | null | undefined>(undefined),
			currentRtoInSecs: new FormControl<number | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			rpoDescription: new FormControl<string | null | undefined>(undefined),
			rpoReferenceId: new FormControl<string | null | undefined>(undefined),
			rtoDescription: new FormControl<string | null | undefined>(undefined),
			rtoReferenceId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BatchUpdateRecommendationStatusRequest {

		/** Required */
		appArn: string;

		/** Required */
		requestEntries: Array<UpdateRecommendationStatusRequestEntry>;
	}
	export interface BatchUpdateRecommendationStatusRequestFormProperties {

		/** Required */
		appArn: FormControl<string | null | undefined>,
	}
	export function CreateBatchUpdateRecommendationStatusRequestFormGroup() {
		return new FormGroup<BatchUpdateRecommendationStatusRequestFormProperties>({
			appArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateAppRequest {
		assessmentSchedule?: AppAssessmentScheduleType;
		clientToken?: string;
		description?: string;
		eventSubscriptions?: Array<EventSubscription>;

		/** Required */
		name: string;
		permissionModel?: PermissionModel;
		policyArn?: string;
		tags?: TagMap;
	}
	export interface CreateAppRequestFormProperties {
		assessmentSchedule: FormControl<AppAssessmentScheduleType | null | undefined>,
		clientToken: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
		policyArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateAppRequestFormGroup() {
		return new FormGroup<CreateAppRequestFormProperties>({
			assessmentSchedule: new FormControl<AppAssessmentScheduleType | null | undefined>(undefined),
			clientToken: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			policyArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateAppVersionAppComponentRequest {
		additionalInfo?: AdditionalInfoMap;

		/** Required */
		appArn: string;
		clientToken?: string;
		id?: string;

		/** Required */
		name: string;

		/** Required */
		type: string;
	}
	export interface CreateAppVersionAppComponentRequestFormProperties {

		/** Required */
		appArn: FormControl<string | null | undefined>,
		clientToken: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<string | null | undefined>,
	}
	export function CreateCreateAppVersionAppComponentRequestFormGroup() {
		return new FormGroup<CreateAppVersionAppComponentRequestFormProperties>({
			appArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			clientToken: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateAppVersionResourceRequest {
		additionalInfo?: AdditionalInfoMap;

		/** Required */
		appArn: string;

		/** Required */
		appComponents: Array<string>;
		awsAccountId?: string;
		awsRegion?: string;
		clientToken?: string;

		/** Required */
		logicalResourceId: LogicalResourceId;

		/** Required */
		physicalResourceId: string;
		resourceName?: string;

		/** Required */
		resourceType: string;
	}
	export interface CreateAppVersionResourceRequestFormProperties {

		/** Required */
		appArn: FormControl<string | null | undefined>,
		awsAccountId: FormControl<string | null | undefined>,
		awsRegion: FormControl<string | null | undefined>,
		clientToken: FormControl<string | null | undefined>,

		/** Required */
		physicalResourceId: FormControl<string | null | undefined>,
		resourceName: FormControl<string | null | undefined>,

		/** Required */
		resourceType: FormControl<string | null | undefined>,
	}
	export function CreateCreateAppVersionResourceRequestFormGroup() {
		return new FormGroup<CreateAppVersionResourceRequestFormProperties>({
			appArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			awsAccountId: new FormControl<string | null | undefined>(undefined),
			awsRegion: new FormControl<string | null | undefined>(undefined),
			clientToken: new FormControl<string | null | undefined>(undefined),
			physicalResourceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resourceName: new FormControl<string | null | undefined>(undefined),
			resourceType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateRecommendationTemplateRequest {

		/** Required */
		assessmentArn: string;
		bucketName?: string;
		clientToken?: string;
		format?: TemplateFormat;

		/** Required */
		name: string;
		recommendationIds?: Array<string>;
		recommendationTypes?: Array<RenderRecommendationType>;
		tags?: TagMap;
	}
	export interface CreateRecommendationTemplateRequestFormProperties {

		/** Required */
		assessmentArn: FormControl<string | null | undefined>,
		bucketName: FormControl<string | null | undefined>,
		clientToken: FormControl<string | null | undefined>,
		format: FormControl<TemplateFormat | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
	}
	export function CreateCreateRecommendationTemplateRequestFormGroup() {
		return new FormGroup<CreateRecommendationTemplateRequestFormProperties>({
			assessmentArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			bucketName: new FormControl<string | null | undefined>(undefined),
			clientToken: new FormControl<string | null | undefined>(undefined),
			format: new FormControl<TemplateFormat | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateResiliencyPolicyRequest {
		clientToken?: string;
		dataLocationConstraint?: DataLocationConstraint;

		/** Required */
		policy: DisruptionPolicy;
		policyDescription?: string;

		/** Required */
		policyName: string;
		tags?: TagMap;

		/** Required */
		tier: ResiliencyPolicyTier;
	}
	export interface CreateResiliencyPolicyRequestFormProperties {
		clientToken: FormControl<string | null | undefined>,
		dataLocationConstraint: FormControl<DataLocationConstraint | null | undefined>,
		policyDescription: FormControl<string | null | undefined>,

		/** Required */
		policyName: FormControl<string | null | undefined>,

		/** Required */
		tier: FormControl<ResiliencyPolicyTier | null | undefined>,
	}
	export function CreateCreateResiliencyPolicyRequestFormGroup() {
		return new FormGroup<CreateResiliencyPolicyRequestFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined),
			dataLocationConstraint: new FormControl<DataLocationConstraint | null | undefined>(undefined),
			policyDescription: new FormControl<string | null | undefined>(undefined),
			policyName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			tier: new FormControl<ResiliencyPolicyTier | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteAppAssessmentRequest {

		/** Required */
		assessmentArn: string;
		clientToken?: string;
	}
	export interface DeleteAppAssessmentRequestFormProperties {

		/** Required */
		assessmentArn: FormControl<string | null | undefined>,
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateDeleteAppAssessmentRequestFormGroup() {
		return new FormGroup<DeleteAppAssessmentRequestFormProperties>({
			assessmentArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			clientToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteAppInputSourceRequest {

		/** Required */
		appArn: string;
		clientToken?: string;
		eksSourceClusterNamespace?: EksSourceClusterNamespace;
		sourceArn?: string;
		terraformSource?: TerraformSource;
	}
	export interface DeleteAppInputSourceRequestFormProperties {

		/** Required */
		appArn: FormControl<string | null | undefined>,
		clientToken: FormControl<string | null | undefined>,
		sourceArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteAppInputSourceRequestFormGroup() {
		return new FormGroup<DeleteAppInputSourceRequestFormProperties>({
			appArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			clientToken: new FormControl<string | null | undefined>(undefined),
			sourceArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteAppRequest {

		/** Required */
		appArn: string;
		clientToken?: string;
		forceDelete?: boolean | null;
	}
	export interface DeleteAppRequestFormProperties {

		/** Required */
		appArn: FormControl<string | null | undefined>,
		clientToken: FormControl<string | null | undefined>,
		forceDelete: FormControl<boolean | null | undefined>,
	}
	export function CreateDeleteAppRequestFormGroup() {
		return new FormGroup<DeleteAppRequestFormProperties>({
			appArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			clientToken: new FormControl<string | null | undefined>(undefined),
			forceDelete: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface DeleteAppVersionAppComponentRequest {

		/** Required */
		appArn: string;
		clientToken?: string;

		/** Required */
		id: string;
	}
	export interface DeleteAppVersionAppComponentRequestFormProperties {

		/** Required */
		appArn: FormControl<string | null | undefined>,
		clientToken: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,
	}
	export function CreateDeleteAppVersionAppComponentRequestFormGroup() {
		return new FormGroup<DeleteAppVersionAppComponentRequestFormProperties>({
			appArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			clientToken: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteAppVersionResourceRequest {

		/** Required */
		appArn: string;
		awsAccountId?: string;
		awsRegion?: string;
		clientToken?: string;
		logicalResourceId?: LogicalResourceId;
		physicalResourceId?: string;
		resourceName?: string;
	}
	export interface DeleteAppVersionResourceRequestFormProperties {

		/** Required */
		appArn: FormControl<string | null | undefined>,
		awsAccountId: FormControl<string | null | undefined>,
		awsRegion: FormControl<string | null | undefined>,
		clientToken: FormControl<string | null | undefined>,
		physicalResourceId: FormControl<string | null | undefined>,
		resourceName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteAppVersionResourceRequestFormGroup() {
		return new FormGroup<DeleteAppVersionResourceRequestFormProperties>({
			appArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			awsAccountId: new FormControl<string | null | undefined>(undefined),
			awsRegion: new FormControl<string | null | undefined>(undefined),
			clientToken: new FormControl<string | null | undefined>(undefined),
			physicalResourceId: new FormControl<string | null | undefined>(undefined),
			resourceName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteRecommendationTemplateRequest {
		clientToken?: string;

		/** Required */
		recommendationTemplateArn: string;
	}
	export interface DeleteRecommendationTemplateRequestFormProperties {
		clientToken: FormControl<string | null | undefined>,

		/** Required */
		recommendationTemplateArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteRecommendationTemplateRequestFormGroup() {
		return new FormGroup<DeleteRecommendationTemplateRequestFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined),
			recommendationTemplateArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteResiliencyPolicyRequest {
		clientToken?: string;

		/** Required */
		policyArn: string;
	}
	export interface DeleteResiliencyPolicyRequestFormProperties {
		clientToken: FormControl<string | null | undefined>,

		/** Required */
		policyArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteResiliencyPolicyRequestFormGroup() {
		return new FormGroup<DeleteResiliencyPolicyRequestFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined),
			policyArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeAppAssessmentRequest {

		/** Required */
		assessmentArn: string;
	}
	export interface DescribeAppAssessmentRequestFormProperties {

		/** Required */
		assessmentArn: FormControl<string | null | undefined>,
	}
	export function CreateDescribeAppAssessmentRequestFormGroup() {
		return new FormGroup<DescribeAppAssessmentRequestFormProperties>({
			assessmentArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeAppRequest {

		/** Required */
		appArn: string;
	}
	export interface DescribeAppRequestFormProperties {

		/** Required */
		appArn: FormControl<string | null | undefined>,
	}
	export function CreateDescribeAppRequestFormGroup() {
		return new FormGroup<DescribeAppRequestFormProperties>({
			appArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeAppVersionAppComponentRequest {

		/** Required */
		appArn: string;

		/** Required */
		appVersion: string;

		/** Required */
		id: string;
	}
	export interface DescribeAppVersionAppComponentRequestFormProperties {

		/** Required */
		appArn: FormControl<string | null | undefined>,

		/** Required */
		appVersion: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,
	}
	export function CreateDescribeAppVersionAppComponentRequestFormGroup() {
		return new FormGroup<DescribeAppVersionAppComponentRequestFormProperties>({
			appArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			appVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeAppVersionRequest {

		/** Required */
		appArn: string;

		/** Required */
		appVersion: string;
	}
	export interface DescribeAppVersionRequestFormProperties {

		/** Required */
		appArn: FormControl<string | null | undefined>,

		/** Required */
		appVersion: FormControl<string | null | undefined>,
	}
	export function CreateDescribeAppVersionRequestFormGroup() {
		return new FormGroup<DescribeAppVersionRequestFormProperties>({
			appArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			appVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeAppVersionResourceRequest {

		/** Required */
		appArn: string;

		/** Required */
		appVersion: string;
		awsAccountId?: string;
		awsRegion?: string;
		logicalResourceId?: LogicalResourceId;
		physicalResourceId?: string;
		resourceName?: string;
	}
	export interface DescribeAppVersionResourceRequestFormProperties {

		/** Required */
		appArn: FormControl<string | null | undefined>,

		/** Required */
		appVersion: FormControl<string | null | undefined>,
		awsAccountId: FormControl<string | null | undefined>,
		awsRegion: FormControl<string | null | undefined>,
		physicalResourceId: FormControl<string | null | undefined>,
		resourceName: FormControl<string | null | undefined>,
	}
	export function CreateDescribeAppVersionResourceRequestFormGroup() {
		return new FormGroup<DescribeAppVersionResourceRequestFormProperties>({
			appArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			appVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			awsAccountId: new FormControl<string | null | undefined>(undefined),
			awsRegion: new FormControl<string | null | undefined>(undefined),
			physicalResourceId: new FormControl<string | null | undefined>(undefined),
			resourceName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeAppVersionResourcesResolutionStatusRequest {

		/** Required */
		appArn: string;

		/** Required */
		appVersion: string;
		resolutionId?: string;
	}
	export interface DescribeAppVersionResourcesResolutionStatusRequestFormProperties {

		/** Required */
		appArn: FormControl<string | null | undefined>,

		/** Required */
		appVersion: FormControl<string | null | undefined>,
		resolutionId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeAppVersionResourcesResolutionStatusRequestFormGroup() {
		return new FormGroup<DescribeAppVersionResourcesResolutionStatusRequestFormProperties>({
			appArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			appVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resolutionId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ResourceResolutionStatusType { Pending = 'Pending', InProgress = 'InProgress', Failed = 'Failed', Success = 'Success' }

	export interface DescribeAppVersionTemplateRequest {

		/** Required */
		appArn: string;

		/** Required */
		appVersion: string;
	}
	export interface DescribeAppVersionTemplateRequestFormProperties {

		/** Required */
		appArn: FormControl<string | null | undefined>,

		/** Required */
		appVersion: FormControl<string | null | undefined>,
	}
	export function CreateDescribeAppVersionTemplateRequestFormGroup() {
		return new FormGroup<DescribeAppVersionTemplateRequestFormProperties>({
			appArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			appVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeDraftAppVersionResourcesImportStatusRequest {

		/** Required */
		appArn: string;
	}
	export interface DescribeDraftAppVersionResourcesImportStatusRequestFormProperties {

		/** Required */
		appArn: FormControl<string | null | undefined>,
	}
	export function CreateDescribeDraftAppVersionResourcesImportStatusRequestFormGroup() {
		return new FormGroup<DescribeDraftAppVersionResourcesImportStatusRequestFormProperties>({
			appArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ResourceImportStatusType { Pending = 'Pending', InProgress = 'InProgress', Failed = 'Failed', Success = 'Success' }

	export interface DescribeResiliencyPolicyRequest {

		/** Required */
		policyArn: string;
	}
	export interface DescribeResiliencyPolicyRequestFormProperties {

		/** Required */
		policyArn: FormControl<string | null | undefined>,
	}
	export function CreateDescribeResiliencyPolicyRequestFormGroup() {
		return new FormGroup<DescribeResiliencyPolicyRequestFormProperties>({
			policyArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum DisruptionType { Software = 'Software', Hardware = 'Hardware', AZ = 'AZ', Region = 'Region' }

	export enum ResourceImportStrategyType { AddOnly = 'AddOnly', ReplaceAll = 'ReplaceAll' }

	export interface ImportResourcesToDraftAppVersionRequest {

		/** Required */
		appArn: string;
		eksSources?: Array<EksSource>;
		importStrategy?: ResourceImportStrategyType;
		sourceArns?: Array<string>;
		terraformSources?: Array<TerraformSource>;
	}
	export interface ImportResourcesToDraftAppVersionRequestFormProperties {

		/** Required */
		appArn: FormControl<string | null | undefined>,
		importStrategy: FormControl<ResourceImportStrategyType | null | undefined>,
	}
	export function CreateImportResourcesToDraftAppVersionRequestFormGroup() {
		return new FormGroup<ImportResourcesToDraftAppVersionRequestFormProperties>({
			appArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			importStrategy: new FormControl<ResourceImportStrategyType | null | undefined>(undefined),
		});

	}

	export interface ListAlarmRecommendationsRequest {

		/** Required */
		assessmentArn: string;
		maxResults?: number | null;
		nextToken?: string;
	}
	export interface ListAlarmRecommendationsRequestFormProperties {

		/** Required */
		assessmentArn: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListAlarmRecommendationsRequestFormGroup() {
		return new FormGroup<ListAlarmRecommendationsRequestFormProperties>({
			assessmentArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListAppAssessmentComplianceDriftsRequest {

		/** Required */
		assessmentArn: string;
		maxResults?: number | null;
		nextToken?: string;
	}
	export interface ListAppAssessmentComplianceDriftsRequestFormProperties {

		/** Required */
		assessmentArn: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListAppAssessmentComplianceDriftsRequestFormGroup() {
		return new FormGroup<ListAppAssessmentComplianceDriftsRequestFormProperties>({
			assessmentArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListAppAssessmentsRequest {
	}
	export interface ListAppAssessmentsRequestFormProperties {
	}
	export function CreateListAppAssessmentsRequestFormGroup() {
		return new FormGroup<ListAppAssessmentsRequestFormProperties>({
		});

	}

	export interface ListAppComponentCompliancesRequest {

		/** Required */
		assessmentArn: string;
		maxResults?: number | null;
		nextToken?: string;
	}
	export interface ListAppComponentCompliancesRequestFormProperties {

		/** Required */
		assessmentArn: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListAppComponentCompliancesRequestFormGroup() {
		return new FormGroup<ListAppComponentCompliancesRequestFormProperties>({
			assessmentArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListAppComponentRecommendationsRequest {

		/** Required */
		assessmentArn: string;
		maxResults?: number | null;
		nextToken?: string;
	}
	export interface ListAppComponentRecommendationsRequestFormProperties {

		/** Required */
		assessmentArn: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListAppComponentRecommendationsRequestFormGroup() {
		return new FormGroup<ListAppComponentRecommendationsRequestFormProperties>({
			assessmentArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListAppInputSourcesRequest {

		/** Required */
		appArn: string;

		/** Required */
		appVersion: string;
		maxResults?: number | null;
		nextToken?: string;
	}
	export interface ListAppInputSourcesRequestFormProperties {

		/** Required */
		appArn: FormControl<string | null | undefined>,

		/** Required */
		appVersion: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListAppInputSourcesRequestFormGroup() {
		return new FormGroup<ListAppInputSourcesRequestFormProperties>({
			appArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			appVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListAppVersionAppComponentsRequest {

		/** Required */
		appArn: string;

		/** Required */
		appVersion: string;
		maxResults?: number | null;
		nextToken?: string;
	}
	export interface ListAppVersionAppComponentsRequestFormProperties {

		/** Required */
		appArn: FormControl<string | null | undefined>,

		/** Required */
		appVersion: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListAppVersionAppComponentsRequestFormGroup() {
		return new FormGroup<ListAppVersionAppComponentsRequestFormProperties>({
			appArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			appVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListAppVersionResourceMappingsRequest {

		/** Required */
		appArn: string;

		/** Required */
		appVersion: string;
		maxResults?: number | null;
		nextToken?: string;
	}
	export interface ListAppVersionResourceMappingsRequestFormProperties {

		/** Required */
		appArn: FormControl<string | null | undefined>,

		/** Required */
		appVersion: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListAppVersionResourceMappingsRequestFormGroup() {
		return new FormGroup<ListAppVersionResourceMappingsRequestFormProperties>({
			appArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			appVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListAppVersionResourcesRequest {

		/** Required */
		appArn: string;

		/** Required */
		appVersion: string;
		maxResults?: number | null;
		nextToken?: string;
		resolutionId?: string;
	}
	export interface ListAppVersionResourcesRequestFormProperties {

		/** Required */
		appArn: FormControl<string | null | undefined>,

		/** Required */
		appVersion: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
		resolutionId: FormControl<string | null | undefined>,
	}
	export function CreateListAppVersionResourcesRequestFormGroup() {
		return new FormGroup<ListAppVersionResourcesRequestFormProperties>({
			appArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			appVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
			resolutionId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListAppVersionsRequest {

		/** Required */
		appArn: string;
		endTime?: Date;
		maxResults?: number | null;
		nextToken?: string;
		startTime?: Date;
	}
	export interface ListAppVersionsRequestFormProperties {

		/** Required */
		appArn: FormControl<string | null | undefined>,
		endTime: FormControl<Date | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
		startTime: FormControl<Date | null | undefined>,
	}
	export function CreateListAppVersionsRequestFormGroup() {
		return new FormGroup<ListAppVersionsRequestFormProperties>({
			appArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			endTime: new FormControl<Date | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListAppsRequest {
	}
	export interface ListAppsRequestFormProperties {
	}
	export function CreateListAppsRequestFormGroup() {
		return new FormGroup<ListAppsRequestFormProperties>({
		});

	}

	export interface ListRecommendationTemplatesRequest {
	}
	export interface ListRecommendationTemplatesRequestFormProperties {
	}
	export function CreateListRecommendationTemplatesRequestFormGroup() {
		return new FormGroup<ListRecommendationTemplatesRequestFormProperties>({
		});

	}

	export interface ListResiliencyPoliciesRequest {
	}
	export interface ListResiliencyPoliciesRequestFormProperties {
	}
	export function CreateListResiliencyPoliciesRequestFormGroup() {
		return new FormGroup<ListResiliencyPoliciesRequestFormProperties>({
		});

	}

	export interface ListSopRecommendationsRequest {

		/** Required */
		assessmentArn: string;
		maxResults?: number | null;
		nextToken?: string;
	}
	export interface ListSopRecommendationsRequestFormProperties {

		/** Required */
		assessmentArn: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListSopRecommendationsRequestFormGroup() {
		return new FormGroup<ListSopRecommendationsRequestFormProperties>({
			assessmentArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListSuggestedResiliencyPoliciesRequest {
	}
	export interface ListSuggestedResiliencyPoliciesRequestFormProperties {
	}
	export function CreateListSuggestedResiliencyPoliciesRequestFormGroup() {
		return new FormGroup<ListSuggestedResiliencyPoliciesRequestFormProperties>({
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

	export interface ListTestRecommendationsRequest {

		/** Required */
		assessmentArn: string;
		maxResults?: number | null;
		nextToken?: string;
	}
	export interface ListTestRecommendationsRequestFormProperties {

		/** Required */
		assessmentArn: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTestRecommendationsRequestFormGroup() {
		return new FormGroup<ListTestRecommendationsRequestFormProperties>({
			assessmentArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListUnsupportedAppVersionResourcesRequest {

		/** Required */
		appArn: string;

		/** Required */
		appVersion: string;
		maxResults?: number | null;
		nextToken?: string;
		resolutionId?: string;
	}
	export interface ListUnsupportedAppVersionResourcesRequestFormProperties {

		/** Required */
		appArn: FormControl<string | null | undefined>,

		/** Required */
		appVersion: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
		resolutionId: FormControl<string | null | undefined>,
	}
	export function CreateListUnsupportedAppVersionResourcesRequestFormGroup() {
		return new FormGroup<ListUnsupportedAppVersionResourcesRequestFormProperties>({
			appArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			appVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
			resolutionId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PublishAppVersionRequest {

		/** Required */
		appArn: string;
		versionName?: string;
	}
	export interface PublishAppVersionRequestFormProperties {

		/** Required */
		appArn: FormControl<string | null | undefined>,
		versionName: FormControl<string | null | undefined>,
	}
	export function CreatePublishAppVersionRequestFormGroup() {
		return new FormGroup<PublishAppVersionRequestFormProperties>({
			appArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			versionName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PutDraftAppVersionTemplateRequest {

		/** Required */
		appArn: string;

		/** Required */
		appTemplateBody: string;
	}
	export interface PutDraftAppVersionTemplateRequestFormProperties {

		/** Required */
		appArn: FormControl<string | null | undefined>,

		/** Required */
		appTemplateBody: FormControl<string | null | undefined>,
	}
	export function CreatePutDraftAppVersionTemplateRequestFormGroup() {
		return new FormGroup<PutDraftAppVersionTemplateRequestFormProperties>({
			appArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			appTemplateBody: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Defines a disruption compliance recommendation. */
	export interface RecommendationDisruptionCompliance {

		/** Required */
		expectedComplianceStatus: ComplianceStatus;
		expectedRpoDescription?: string;
		expectedRpoInSecs?: number | null;
		expectedRtoDescription?: string;
		expectedRtoInSecs?: number | null;
	}

	/** Defines a disruption compliance recommendation. */
	export interface RecommendationDisruptionComplianceFormProperties {

		/** Required */
		expectedComplianceStatus: FormControl<ComplianceStatus | null | undefined>,
		expectedRpoDescription: FormControl<string | null | undefined>,
		expectedRpoInSecs: FormControl<number | null | undefined>,
		expectedRtoDescription: FormControl<string | null | undefined>,
		expectedRtoInSecs: FormControl<number | null | undefined>,
	}
	export function CreateRecommendationDisruptionComplianceFormGroup() {
		return new FormGroup<RecommendationDisruptionComplianceFormProperties>({
			expectedComplianceStatus: new FormControl<ComplianceStatus | null | undefined>(undefined, [Validators.required]),
			expectedRpoDescription: new FormControl<string | null | undefined>(undefined),
			expectedRpoInSecs: new FormControl<number | null | undefined>(undefined),
			expectedRtoDescription: new FormControl<string | null | undefined>(undefined),
			expectedRtoInSecs: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface RemoveDraftAppVersionResourceMappingsRequest {

		/** Required */
		appArn: string;
		appRegistryAppNames?: Array<string>;
		eksSourceNames?: Array<string>;
		logicalStackNames?: Array<string>;
		resourceGroupNames?: Array<string>;
		resourceNames?: Array<string>;
		terraformSourceNames?: Array<string>;
	}
	export interface RemoveDraftAppVersionResourceMappingsRequestFormProperties {

		/** Required */
		appArn: FormControl<string | null | undefined>,
	}
	export function CreateRemoveDraftAppVersionResourceMappingsRequestFormGroup() {
		return new FormGroup<RemoveDraftAppVersionResourceMappingsRequestFormProperties>({
			appArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ResolveAppVersionResourcesRequest {

		/** Required */
		appArn: string;

		/** Required */
		appVersion: string;
	}
	export interface ResolveAppVersionResourcesRequestFormProperties {

		/** Required */
		appArn: FormControl<string | null | undefined>,

		/** Required */
		appVersion: FormControl<string | null | undefined>,
	}
	export function CreateResolveAppVersionResourcesRequestFormGroup() {
		return new FormGroup<ResolveAppVersionResourcesRequestFormProperties>({
			appArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			appVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface StartAppAssessmentRequest {

		/** Required */
		appArn: string;

		/** Required */
		appVersion: string;

		/** Required */
		assessmentName: string;
		clientToken?: string;
		tags?: TagMap;
	}
	export interface StartAppAssessmentRequestFormProperties {

		/** Required */
		appArn: FormControl<string | null | undefined>,

		/** Required */
		appVersion: FormControl<string | null | undefined>,

		/** Required */
		assessmentName: FormControl<string | null | undefined>,
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateStartAppAssessmentRequestFormGroup() {
		return new FormGroup<StartAppAssessmentRequestFormProperties>({
			appArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			appVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			assessmentName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			clientToken: new FormControl<string | null | undefined>(undefined),
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

	export interface UpdateAppRequest {

		/** Required */
		appArn: string;
		assessmentSchedule?: AppAssessmentScheduleType;
		clearResiliencyPolicyArn?: boolean | null;
		description?: string;
		eventSubscriptions?: Array<EventSubscription>;
		permissionModel?: PermissionModel;
		policyArn?: string;
	}
	export interface UpdateAppRequestFormProperties {

		/** Required */
		appArn: FormControl<string | null | undefined>,
		assessmentSchedule: FormControl<AppAssessmentScheduleType | null | undefined>,
		clearResiliencyPolicyArn: FormControl<boolean | null | undefined>,
		description: FormControl<string | null | undefined>,
		policyArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateAppRequestFormGroup() {
		return new FormGroup<UpdateAppRequestFormProperties>({
			appArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			assessmentSchedule: new FormControl<AppAssessmentScheduleType | null | undefined>(undefined),
			clearResiliencyPolicyArn: new FormControl<boolean | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			policyArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateAppVersionAppComponentRequest {
		additionalInfo?: AdditionalInfoMap;

		/** Required */
		appArn: string;

		/** Required */
		id: string;
		name?: string;
		type?: string;
	}
	export interface UpdateAppVersionAppComponentRequestFormProperties {

		/** Required */
		appArn: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateUpdateAppVersionAppComponentRequestFormGroup() {
		return new FormGroup<UpdateAppVersionAppComponentRequestFormProperties>({
			appArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateAppVersionRequest {
		additionalInfo?: AdditionalInfoMap;

		/** Required */
		appArn: string;
	}
	export interface UpdateAppVersionRequestFormProperties {

		/** Required */
		appArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateAppVersionRequestFormGroup() {
		return new FormGroup<UpdateAppVersionRequestFormProperties>({
			appArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateAppVersionResourceRequest {
		additionalInfo?: AdditionalInfoMap;

		/** Required */
		appArn: string;
		appComponents?: Array<string>;
		awsAccountId?: string;
		awsRegion?: string;
		excluded?: boolean | null;
		logicalResourceId?: LogicalResourceId;
		physicalResourceId?: string;
		resourceName?: string;
		resourceType?: string;
	}
	export interface UpdateAppVersionResourceRequestFormProperties {

		/** Required */
		appArn: FormControl<string | null | undefined>,
		awsAccountId: FormControl<string | null | undefined>,
		awsRegion: FormControl<string | null | undefined>,
		excluded: FormControl<boolean | null | undefined>,
		physicalResourceId: FormControl<string | null | undefined>,
		resourceName: FormControl<string | null | undefined>,
		resourceType: FormControl<string | null | undefined>,
	}
	export function CreateUpdateAppVersionResourceRequestFormGroup() {
		return new FormGroup<UpdateAppVersionResourceRequestFormProperties>({
			appArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			awsAccountId: new FormControl<string | null | undefined>(undefined),
			awsRegion: new FormControl<string | null | undefined>(undefined),
			excluded: new FormControl<boolean | null | undefined>(undefined),
			physicalResourceId: new FormControl<string | null | undefined>(undefined),
			resourceName: new FormControl<string | null | undefined>(undefined),
			resourceType: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateResiliencyPolicyRequest {
		dataLocationConstraint?: DataLocationConstraint;
		policy?: DisruptionPolicy;

		/** Required */
		policyArn: string;
		policyDescription?: string;
		policyName?: string;
		tier?: ResiliencyPolicyTier;
	}
	export interface UpdateResiliencyPolicyRequestFormProperties {
		dataLocationConstraint: FormControl<DataLocationConstraint | null | undefined>,

		/** Required */
		policyArn: FormControl<string | null | undefined>,
		policyDescription: FormControl<string | null | undefined>,
		policyName: FormControl<string | null | undefined>,
		tier: FormControl<ResiliencyPolicyTier | null | undefined>,
	}
	export function CreateUpdateResiliencyPolicyRequestFormGroup() {
		return new FormGroup<UpdateResiliencyPolicyRequestFormProperties>({
			dataLocationConstraint: new FormControl<DataLocationConstraint | null | undefined>(undefined),
			policyArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			policyDescription: new FormControl<string | null | undefined>(undefined),
			policyName: new FormControl<string | null | undefined>(undefined),
			tier: new FormControl<ResiliencyPolicyTier | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Adds the resource mapping for the draft application version. You can also update an existing resource mapping to a new physical resource.
		 * Post add-draft-app-version-resource-mappings
		 * @return {AddDraftAppVersionResourceMappingsResponse} Success
		 */
		AddDraftAppVersionResourceMappings(requestBody: AddDraftAppVersionResourceMappingsPostBody): Observable<AddDraftAppVersionResourceMappingsResponse> {
			return this.http.post<AddDraftAppVersionResourceMappingsResponse>(this.baseUri + 'add-draft-app-version-resource-mappings', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Enables you to include or exclude one or more operational recommendations.
		 * Post batch-update-recommendation-status
		 * @return {BatchUpdateRecommendationStatusResponse} Success
		 */
		BatchUpdateRecommendationStatus(requestBody: BatchUpdateRecommendationStatusPostBody): Observable<BatchUpdateRecommendationStatusResponse> {
			return this.http.post<BatchUpdateRecommendationStatusResponse>(this.baseUri + 'batch-update-recommendation-status', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates an Resilience Hub application. An Resilience Hub application is a collection of Amazon Web Services resources structured to prevent and recover Amazon Web Services application disruptions. To describe a Resilience Hub application, you provide an application name, resources from one or more CloudFormation stacks, Resource Groups, Terraform state files, AppRegistry applications, and an appropriate resiliency policy. In addition, you can also add resources that are located on Amazon Elastic Kubernetes Service (Amazon EKS) clusters as optional resources. For more information about the number of resources supported per application, see <a href="https://docs.aws.amazon.com/general/latest/gr/resiliencehub.html#limits_resiliencehub">Service quotas</a>.</p> <p>After you create an Resilience Hub application, you publish it so that you can run a resiliency assessment on it. You can then use recommendations from the assessment to improve resiliency by running another assessment, comparing results, and then iterating the process until you achieve your goals for recovery time objective (RTO) and recovery point objective (RPO).</p>
		 * Post create-app
		 * @return {CreateAppResponse} Success
		 */
		CreateApp(requestBody: CreateAppPostBody): Observable<CreateAppResponse> {
			return this.http.post<CreateAppResponse>(this.baseUri + 'create-app', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a new Application Component in the Resilience Hub application.</p> <note> <p>This API updates the Resilience Hub application draft version. To use this Application Component for running assessments, you must publish the Resilience Hub application using the <code>PublishAppVersion</code> API.</p> </note>
		 * Post create-app-version-app-component
		 * @return {CreateAppVersionAppComponentResponse} Success
		 */
		CreateAppVersionAppComponent(requestBody: CreateAppVersionAppComponentPostBody): Observable<CreateAppVersionAppComponentResponse> {
			return this.http.post<CreateAppVersionAppComponentResponse>(this.baseUri + 'create-app-version-app-component', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Adds a resource to the Resilience Hub application and assigns it to the specified Application Components. If you specify a new Application Component, Resilience Hub will automatically create the Application Component.</p> <note> <ul> <li> <p>This action has no effect outside Resilience Hub.</p> </li> <li> <p>This API updates the Resilience Hub application draft version. To use this resource for running resiliency assessments, you must publish the Resilience Hub application using the <code>PublishAppVersion</code> API.</p> </li> <li> <p>To update application version with new <code>physicalResourceID</code>, you must call <code>ResolveAppVersionResources</code> API.</p> </li> </ul> </note>
		 * Post create-app-version-resource
		 * @return {CreateAppVersionResourceResponse} Success
		 */
		CreateAppVersionResource(requestBody: CreateAppVersionResourcePostBody): Observable<CreateAppVersionResourceResponse> {
			return this.http.post<CreateAppVersionResourceResponse>(this.baseUri + 'create-app-version-resource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a new recommendation template for the Resilience Hub application.
		 * Post create-recommendation-template
		 * @return {CreateRecommendationTemplateResponse} Success
		 */
		CreateRecommendationTemplate(requestBody: CreateRecommendationTemplatePostBody): Observable<CreateRecommendationTemplateResponse> {
			return this.http.post<CreateRecommendationTemplateResponse>(this.baseUri + 'create-recommendation-template', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a resiliency policy for an application.
		 * Post create-resiliency-policy
		 * @return {CreateResiliencyPolicyResponse} Success
		 */
		CreateResiliencyPolicy(requestBody: CreateResiliencyPolicyPostBody): Observable<CreateResiliencyPolicyResponse> {
			return this.http.post<CreateResiliencyPolicyResponse>(this.baseUri + 'create-resiliency-policy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an Resilience Hub application. This is a destructive action that can't be undone.
		 * Post delete-app
		 * @return {DeleteAppResponse} Success
		 */
		DeleteApp(requestBody: DeleteAppPostBody): Observable<DeleteAppResponse> {
			return this.http.post<DeleteAppResponse>(this.baseUri + 'delete-app', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an Resilience Hub application assessment. This is a destructive action that can't be undone.
		 * Post delete-app-assessment
		 * @return {DeleteAppAssessmentResponse} Success
		 */
		DeleteAppAssessment(requestBody: DeleteAppAssessmentPostBody): Observable<DeleteAppAssessmentResponse> {
			return this.http.post<DeleteAppAssessmentResponse>(this.baseUri + 'delete-app-assessment', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the input source and all of its imported resources from the Resilience Hub application.
		 * Post delete-app-input-source
		 * @return {DeleteAppInputSourceResponse} Success
		 */
		DeleteAppInputSource(requestBody: DeleteAppInputSourcePostBody): Observable<DeleteAppInputSourceResponse> {
			return this.http.post<DeleteAppInputSourceResponse>(this.baseUri + 'delete-app-input-source', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes an Application Component from the Resilience Hub application.</p> <note> <ul> <li> <p>This API updates the Resilience Hub application draft version. To use this Application Component for running assessments, you must publish the Resilience Hub application using the <code>PublishAppVersion</code> API.</p> </li> <li> <p>You will not be able to delete an Application Component if it has resources associated with it.</p> </li> </ul> </note>
		 * Post delete-app-version-app-component
		 * @return {DeleteAppVersionAppComponentResponse} Success
		 */
		DeleteAppVersionAppComponent(requestBody: DeleteAppVersionAppComponentPostBody): Observable<DeleteAppVersionAppComponentResponse> {
			return this.http.post<DeleteAppVersionAppComponentResponse>(this.baseUri + 'delete-app-version-app-component', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes a resource from the Resilience Hub application.</p> <note> <ul> <li> <p>You can only delete a manually added resource. To exclude non-manually added resources, use the <code>UpdateAppVersionResource</code> API.</p> </li> <li> <p>This action has no effect outside Resilience Hub.</p> </li> <li> <p>This API updates the Resilience Hub application draft version. To use this resource for running resiliency assessments, you must publish the Resilience Hub application using the <code>PublishAppVersion</code> API.</p> </li> </ul> </note>
		 * Post delete-app-version-resource
		 * @return {DeleteAppVersionResourceResponse} Success
		 */
		DeleteAppVersionResource(requestBody: DeleteAppVersionResourcePostBody): Observable<DeleteAppVersionResourceResponse> {
			return this.http.post<DeleteAppVersionResourceResponse>(this.baseUri + 'delete-app-version-resource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a recommendation template. This is a destructive action that can't be undone.
		 * Post delete-recommendation-template
		 * @return {DeleteRecommendationTemplateResponse} Success
		 */
		DeleteRecommendationTemplate(requestBody: DeleteRecommendationTemplatePostBody): Observable<DeleteRecommendationTemplateResponse> {
			return this.http.post<DeleteRecommendationTemplateResponse>(this.baseUri + 'delete-recommendation-template', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a resiliency policy. This is a destructive action that can't be undone.
		 * Post delete-resiliency-policy
		 * @return {DeleteResiliencyPolicyResponse} Success
		 */
		DeleteResiliencyPolicy(requestBody: DeleteResiliencyPolicyPostBody): Observable<DeleteResiliencyPolicyResponse> {
			return this.http.post<DeleteResiliencyPolicyResponse>(this.baseUri + 'delete-resiliency-policy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describes an Resilience Hub application.
		 * Post describe-app
		 * @return {DescribeAppResponse} Success
		 */
		DescribeApp(requestBody: DescribeAppPostBody): Observable<DescribeAppResponse> {
			return this.http.post<DescribeAppResponse>(this.baseUri + 'describe-app', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describes an assessment for an Resilience Hub application.
		 * Post describe-app-assessment
		 * @return {DescribeAppAssessmentResponse} Success
		 */
		DescribeAppAssessment(requestBody: DescribeAppAssessmentPostBody): Observable<DescribeAppAssessmentResponse> {
			return this.http.post<DescribeAppAssessmentResponse>(this.baseUri + 'describe-app-assessment', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describes the Resilience Hub application version.
		 * Post describe-app-version
		 * @return {DescribeAppVersionResponse} Success
		 */
		DescribeAppVersion(requestBody: DescribeAppVersionPostBody): Observable<DescribeAppVersionResponse> {
			return this.http.post<DescribeAppVersionResponse>(this.baseUri + 'describe-app-version', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describes an Application Component in the Resilience Hub application.
		 * Post describe-app-version-app-component
		 * @return {DescribeAppVersionAppComponentResponse} Success
		 */
		DescribeAppVersionAppComponent(requestBody: DescribeAppVersionAppComponentPostBody): Observable<DescribeAppVersionAppComponentResponse> {
			return this.http.post<DescribeAppVersionAppComponentResponse>(this.baseUri + 'describe-app-version-app-component', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Describes a resource of the Resilience Hub application.</p> <note> <p>This API accepts only one of the following parameters to descibe the resource:</p> <ul> <li> <p> <code>resourceName</code> </p> </li> <li> <p> <code>logicalResourceId</code> </p> </li> <li> <p> <code>physicalResourceId</code> (Along with <code>physicalResourceId</code>, you can also provide <code>awsAccountId</code>, and <code>awsRegion</code>)</p> </li> </ul> </note>
		 * Post describe-app-version-resource
		 * @return {DescribeAppVersionResourceResponse} Success
		 */
		DescribeAppVersionResource(requestBody: DescribeAppVersionResourcePostBody): Observable<DescribeAppVersionResourceResponse> {
			return this.http.post<DescribeAppVersionResourceResponse>(this.baseUri + 'describe-app-version-resource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the resolution status for the specified resolution identifier for an application version. If <code>resolutionId</code> is not specified, the current resolution status is returned.
		 * Post describe-app-version-resources-resolution-status
		 * @return {DescribeAppVersionResourcesResolutionStatusResponse} Success
		 */
		DescribeAppVersionResourcesResolutionStatus(requestBody: DescribeAppVersionResourcesResolutionStatusPostBody): Observable<DescribeAppVersionResourcesResolutionStatusResponse> {
			return this.http.post<DescribeAppVersionResourcesResolutionStatusResponse>(this.baseUri + 'describe-app-version-resources-resolution-status', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describes details about an Resilience Hub application.
		 * Post describe-app-version-template
		 * @return {DescribeAppVersionTemplateResponse} Success
		 */
		DescribeAppVersionTemplate(requestBody: DescribeAppVersionTemplatePostBody): Observable<DescribeAppVersionTemplateResponse> {
			return this.http.post<DescribeAppVersionTemplateResponse>(this.baseUri + 'describe-app-version-template', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Describes the status of importing resources to an application version.</p> <note> <p>If you get a 404 error with <code>ResourceImportStatusNotFoundAppMetadataException</code>, you must call <code>importResourcesToDraftAppVersion</code> after creating the application and before calling <code>describeDraftAppVersionResourcesImportStatus</code> to obtain the status.</p> </note>
		 * Post describe-draft-app-version-resources-import-status
		 * @return {DescribeDraftAppVersionResourcesImportStatusResponse} Success
		 */
		DescribeDraftAppVersionResourcesImportStatus(requestBody: DescribeDraftAppVersionResourcesImportStatusPostBody): Observable<DescribeDraftAppVersionResourcesImportStatusResponse> {
			return this.http.post<DescribeDraftAppVersionResourcesImportStatusResponse>(this.baseUri + 'describe-draft-app-version-resources-import-status', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describes a specified resiliency policy for an Resilience Hub application. The returned policy object includes creation time, data location constraints, the Amazon Resource Name (ARN) for the policy, tags, tier, and more.
		 * Post describe-resiliency-policy
		 * @return {DescribeResiliencyPolicyResponse} Success
		 */
		DescribeResiliencyPolicy(requestBody: DescribeResiliencyPolicyPostBody): Observable<DescribeResiliencyPolicyResponse> {
			return this.http.post<DescribeResiliencyPolicyResponse>(this.baseUri + 'describe-resiliency-policy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Imports resources to Resilience Hub application draft version from different input sources. For more information about the input sources supported by Resilience Hub, see <a href="https://docs.aws.amazon.com/resilience-hub/latest/userguide/discover-structure.html">Discover the structure and describe your Resilience Hub application</a>.
		 * Post import-resources-to-draft-app-version
		 * @return {ImportResourcesToDraftAppVersionResponse} Success
		 */
		ImportResourcesToDraftAppVersion(requestBody: ImportResourcesToDraftAppVersionPostBody): Observable<ImportResourcesToDraftAppVersionResponse> {
			return this.http.post<ImportResourcesToDraftAppVersionResponse>(this.baseUri + 'import-resources-to-draft-app-version', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the alarm recommendations for an Resilience Hub application.
		 * Post list-alarm-recommendations
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListAlarmRecommendationsResponse} Success
		 */
		ListAlarmRecommendations(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListAlarmRecommendationsPostBody): Observable<ListAlarmRecommendationsResponse> {
			return this.http.post<ListAlarmRecommendationsResponse>(this.baseUri + 'list-alarm-recommendations?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List of compliance drifts that were detected while running an assessment.
		 * Post list-app-assessment-compliance-drifts
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListAppAssessmentComplianceDriftsResponse} Success
		 */
		ListAppAssessmentComplianceDrifts(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListAppAssessmentComplianceDriftsPostBody): Observable<ListAppAssessmentComplianceDriftsResponse> {
			return this.http.post<ListAppAssessmentComplianceDriftsResponse>(this.baseUri + 'list-app-assessment-compliance-drifts?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the assessments for an Resilience Hub application. You can use request parameters to refine the results for the response object.
		 * Get list-app-assessments
		 * @param {string} appArn Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is: arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html"> Amazon Resource Names (ARNs)</a> in the <i>AWS General Reference</i> guide.
		 * @param {string} assessmentName The name for the assessment.
		 * @param {Array<AssessmentStatus>} assessmentStatus The current status of the assessment for the resiliency policy.
		 * @param {ComplianceStatus} complianceStatus The current status of compliance for the resiliency policy.
		 * @param {AssessmentInvoker} invoker Specifies the entity that invoked a specific assessment, either a <code>User</code> or the <code>System</code>.
		 * @param {number} maxResults Maximum number of results to include in the response. If more results exist than the specified <code>MaxResults</code> value, a token is included in the response so that the remaining results can be retrieved.
		 * @param {string} nextToken Null, or the token from a previous call to get the next set of results.
		 * @param {boolean} reverseOrder The default is to sort by ascending <b>startTime</b>. To sort by descending <b>startTime</b>, set reverseOrder to <code>true</code>.
		 * @return {ListAppAssessmentsResponse} Success
		 */
		ListAppAssessments(appArn: string | null | undefined, assessmentName: string | null | undefined, assessmentStatus: Array<AssessmentStatus> | null | undefined, complianceStatus: ComplianceStatus | null | undefined, invoker: AssessmentInvoker | null | undefined, maxResults: number | null | undefined, nextToken: string | null | undefined, reverseOrder: boolean | null | undefined): Observable<ListAppAssessmentsResponse> {
			return this.http.get<ListAppAssessmentsResponse>(this.baseUri + 'list-app-assessments?appArn=' + (appArn == null ? '' : encodeURIComponent(appArn)) + '&assessmentName=' + (assessmentName == null ? '' : encodeURIComponent(assessmentName)) + '&' + assessmentStatus?.map(z => `assessmentStatus=${z}`).join('&') + '&complianceStatus=' + complianceStatus + '&invoker=' + invoker + '&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&reverseOrder=' + reverseOrder, {});
		}

		/**
		 * Lists the compliances for an Resilience Hub Application Component.
		 * Post list-app-component-compliances
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListAppComponentCompliancesResponse} Success
		 */
		ListAppComponentCompliances(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListAppComponentCompliancesPostBody): Observable<ListAppComponentCompliancesResponse> {
			return this.http.post<ListAppComponentCompliancesResponse>(this.baseUri + 'list-app-component-compliances?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the recommendations for an Resilience Hub Application Component.
		 * Post list-app-component-recommendations
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListAppComponentRecommendationsResponse} Success
		 */
		ListAppComponentRecommendations(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListAppComponentRecommendationsPostBody): Observable<ListAppComponentRecommendationsResponse> {
			return this.http.post<ListAppComponentRecommendationsResponse>(this.baseUri + 'list-app-component-recommendations?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all the input sources of the Resilience Hub application. For more information about the input sources supported by Resilience Hub, see <a href="https://docs.aws.amazon.com/resilience-hub/latest/userguide/discover-structure.html">Discover the structure and describe your Resilience Hub application</a>.
		 * Post list-app-input-sources
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListAppInputSourcesResponse} Success
		 */
		ListAppInputSources(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListAppInputSourcesPostBody): Observable<ListAppInputSourcesResponse> {
			return this.http.post<ListAppInputSourcesResponse>(this.baseUri + 'list-app-input-sources?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all the Application Components in the Resilience Hub application.
		 * Post list-app-version-app-components
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListAppVersionAppComponentsResponse} Success
		 */
		ListAppVersionAppComponents(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListAppVersionAppComponentsPostBody): Observable<ListAppVersionAppComponentsResponse> {
			return this.http.post<ListAppVersionAppComponentsResponse>(this.baseUri + 'list-app-version-app-components?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists how the resources in an application version are mapped/sourced from. Mappings can be physical resource identifiers, CloudFormation stacks, resource-groups, or an application registry app.
		 * Post list-app-version-resource-mappings
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListAppVersionResourceMappingsResponse} Success
		 */
		ListAppVersionResourceMappings(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListAppVersionResourceMappingsPostBody): Observable<ListAppVersionResourceMappingsResponse> {
			return this.http.post<ListAppVersionResourceMappingsResponse>(this.baseUri + 'list-app-version-resource-mappings?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all the resources in an Resilience Hub application.
		 * Post list-app-version-resources
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListAppVersionResourcesResponse} Success
		 */
		ListAppVersionResources(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListAppVersionResourcesPostBody): Observable<ListAppVersionResourcesResponse> {
			return this.http.post<ListAppVersionResourcesResponse>(this.baseUri + 'list-app-version-resources?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the different versions for the Resilience Hub applications.
		 * Post list-app-versions
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListAppVersionsResponse} Success
		 */
		ListAppVersions(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListAppVersionsPostBody): Observable<ListAppVersionsResponse> {
			return this.http.post<ListAppVersionsResponse>(this.baseUri + 'list-app-versions?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Lists your Resilience Hub applications.</p> <note> <p>You can filter applications using only one filter at a time or without using any filter. If you try to filter applications using multiple filters, you will get the following error:</p> <p> <code>An error occurred (ValidationException) when calling the ListApps operation: Only one filter is supported for this operation.</code> </p> </note>
		 * Get list-apps
		 * @param {string} appArn Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is: arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html"> Amazon Resource Names (ARNs)</a> in the <i>AWS General Reference</i> guide.
		 * @param {number} maxResults Maximum number of results to include in the response. If more results exist than the specified <code>MaxResults</code> value, a token is included in the response so that the remaining results can be retrieved.
		 * @param {string} name The name for the one of the listed applications.
		 * @param {string} nextToken Null, or the token from a previous call to get the next set of results.
		 * @return {ListAppsResponse} Success
		 */
		ListApps(appArn: string | null | undefined, maxResults: number | null | undefined, name: string | null | undefined, nextToken: string | null | undefined): Observable<ListAppsResponse> {
			return this.http.get<ListAppsResponse>(this.baseUri + 'list-apps?appArn=' + (appArn == null ? '' : encodeURIComponent(appArn)) + '&maxResults=' + maxResults + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
		}

		/**
		 * Lists the recommendation templates for the Resilience Hub applications.
		 * Get list-recommendation-templates#assessmentArn
		 * @param {string} assessmentArn Amazon Resource Name (ARN) of the assessment. The format for this ARN is: arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app-assessment/<code>app-id</code>. For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html"> Amazon Resource Names (ARNs)</a> in the <i>AWS General Reference</i> guide.
		 * @param {number} maxResults Maximum number of results to include in the response. If more results exist than the specified <code>MaxResults</code> value, a token is included in the response so that the remaining results can be retrieved.
		 * @param {string} name The name for one of the listed recommendation templates.
		 * @param {string} nextToken Null, or the token from a previous call to get the next set of results.
		 * @param {string} recommendationTemplateArn The Amazon Resource Name (ARN) for a recommendation template.
		 * @param {boolean} reverseOrder The default is to sort by ascending <b>startTime</b>. To sort by descending <b>startTime</b>, set reverseOrder to <code>true</code>.
		 * @param {Array<RecommendationTemplateStatus>} status Status of the action.
		 * @return {ListRecommendationTemplatesResponse} Success
		 */
		ListRecommendationTemplates(assessmentArn: string, maxResults: number | null | undefined, name: string | null | undefined, nextToken: string | null | undefined, recommendationTemplateArn: string | null | undefined, reverseOrder: boolean | null | undefined, status: Array<RecommendationTemplateStatus> | null | undefined): Observable<ListRecommendationTemplatesResponse> {
			return this.http.get<ListRecommendationTemplatesResponse>(this.baseUri + 'list-recommendation-templates#assessmentArn?assessmentArn=' + (assessmentArn == null ? '' : encodeURIComponent(assessmentArn)) + '&maxResults=' + maxResults + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&recommendationTemplateArn=' + (recommendationTemplateArn == null ? '' : encodeURIComponent(recommendationTemplateArn)) + '&reverseOrder=' + reverseOrder + '&' + status?.map(z => `status=${z}`).join('&'), {});
		}

		/**
		 * Lists the resiliency policies for the Resilience Hub applications.
		 * Get list-resiliency-policies
		 * @param {number} maxResults Maximum number of results to include in the response. If more results exist than the specified <code>MaxResults</code> value, a token is included in the response so that the remaining results can be retrieved.
		 * @param {string} nextToken Null, or the token from a previous call to get the next set of results.
		 * @param {string} policyName The name of the policy
		 * @return {ListResiliencyPoliciesResponse} Success
		 */
		ListResiliencyPolicies(maxResults: number | null | undefined, nextToken: string | null | undefined, policyName: string | null | undefined): Observable<ListResiliencyPoliciesResponse> {
			return this.http.get<ListResiliencyPoliciesResponse>(this.baseUri + 'list-resiliency-policies?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&policyName=' + (policyName == null ? '' : encodeURIComponent(policyName)), {});
		}

		/**
		 * Lists the standard operating procedure (SOP) recommendations for the Resilience Hub applications.
		 * Post list-sop-recommendations
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListSopRecommendationsResponse} Success
		 */
		ListSopRecommendations(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListSopRecommendationsPostBody): Observable<ListSopRecommendationsResponse> {
			return this.http.post<ListSopRecommendationsResponse>(this.baseUri + 'list-sop-recommendations?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the suggested resiliency policies for the Resilience Hub applications.
		 * Get list-suggested-resiliency-policies
		 * @param {number} maxResults Maximum number of results to include in the response. If more results exist than the specified <code>MaxResults</code> value, a token is included in the response so that the remaining results can be retrieved.
		 * @param {string} nextToken Null, or the token from a previous call to get the next set of results.
		 * @return {ListSuggestedResiliencyPoliciesResponse} Success
		 */
		ListSuggestedResiliencyPolicies(maxResults: number | null | undefined, nextToken: string | null | undefined): Observable<ListSuggestedResiliencyPoliciesResponse> {
			return this.http.get<ListSuggestedResiliencyPoliciesResponse>(this.baseUri + 'list-suggested-resiliency-policies?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
		}

		/**
		 * Lists the tags for your resources in your Resilience Hub applications.
		 * Get tags/{resourceArn}
		 * @param {string} resourceArn The Amazon Resource Name (ARN) for a specific resource in your Resilience Hub application.
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(resourceArn: string): Observable<ListTagsForResourceResponse> {
			return this.http.get<ListTagsForResourceResponse>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), {});
		}

		/**
		 * Applies one or more tags to a resource.
		 * Post tags/{resourceArn}
		 * @param {string} resourceArn Amazon Resource Name (ARN) of the resource. 
		 * @return {TagResourceResponse} Success
		 */
		TagResource(resourceArn: string, requestBody: TagResourcePostBody): Observable<TagResourceResponse> {
			return this.http.post<TagResourceResponse>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the test recommendations for the Resilience Hub application.
		 * Post list-test-recommendations
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListTestRecommendationsResponse} Success
		 */
		ListTestRecommendations(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListTestRecommendationsPostBody): Observable<ListTestRecommendationsResponse> {
			return this.http.post<ListTestRecommendationsResponse>(this.baseUri + 'list-test-recommendations?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the resources that are not currently supported in Resilience Hub. An unsupported resource is a resource that exists in the object that was used to create an app, but is not supported by Resilience Hub.
		 * Post list-unsupported-app-version-resources
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListUnsupportedAppVersionResourcesResponse} Success
		 */
		ListUnsupportedAppVersionResources(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListUnsupportedAppVersionResourcesPostBody): Observable<ListUnsupportedAppVersionResourcesResponse> {
			return this.http.post<ListUnsupportedAppVersionResourcesResponse>(this.baseUri + 'list-unsupported-app-version-resources?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Publishes a new version of a specific Resilience Hub application.
		 * Post publish-app-version
		 * @return {PublishAppVersionResponse} Success
		 */
		PublishAppVersion(requestBody: PublishAppVersionPostBody): Observable<PublishAppVersionResponse> {
			return this.http.post<PublishAppVersionResponse>(this.baseUri + 'publish-app-version', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Adds or updates the app template for an Resilience Hub application draft version.
		 * Post put-draft-app-version-template
		 * @return {PutDraftAppVersionTemplateResponse} Success
		 */
		PutDraftAppVersionTemplate(requestBody: PutDraftAppVersionTemplatePostBody): Observable<PutDraftAppVersionTemplateResponse> {
			return this.http.post<PutDraftAppVersionTemplateResponse>(this.baseUri + 'put-draft-app-version-template', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes resource mappings from a draft application version.
		 * Post remove-draft-app-version-resource-mappings
		 * @return {RemoveDraftAppVersionResourceMappingsResponse} Success
		 */
		RemoveDraftAppVersionResourceMappings(requestBody: RemoveDraftAppVersionResourceMappingsPostBody): Observable<RemoveDraftAppVersionResourceMappingsResponse> {
			return this.http.post<RemoveDraftAppVersionResourceMappingsResponse>(this.baseUri + 'remove-draft-app-version-resource-mappings', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Resolves the resources for an application version.
		 * Post resolve-app-version-resources
		 * @return {ResolveAppVersionResourcesResponse} Success
		 */
		ResolveAppVersionResources(requestBody: ResolveAppVersionResourcesPostBody): Observable<ResolveAppVersionResourcesResponse> {
			return this.http.post<ResolveAppVersionResourcesResponse>(this.baseUri + 'resolve-app-version-resources', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a new application assessment for an application.
		 * Post start-app-assessment
		 * @return {StartAppAssessmentResponse} Success
		 */
		StartAppAssessment(requestBody: StartAppAssessmentPostBody): Observable<StartAppAssessmentResponse> {
			return this.http.post<StartAppAssessmentResponse>(this.baseUri + 'start-app-assessment', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes one or more tags from a resource.
		 * Delete tags/{resourceArn}#tagKeys
		 * @param {string} resourceArn Amazon Resource Name (ARN) of the resource. 
		 * @param {Array<string>} tagKeys The keys of the tags you want to remove.
		 * @return {UntagResourceResponse} Success
		 */
		UntagResource(resourceArn: string, tagKeys: Array<string>): Observable<UntagResourceResponse> {
			return this.http.delete<UntagResourceResponse>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)) + '#tagKeys&' + tagKeys.map(z => `tagKeys=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Updates an application.
		 * Post update-app
		 * @return {UpdateAppResponse} Success
		 */
		UpdateApp(requestBody: UpdateAppPostBody): Observable<UpdateAppResponse> {
			return this.http.post<UpdateAppResponse>(this.baseUri + 'update-app', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Updates the Resilience Hub application version.</p> <note> <p>This API updates the Resilience Hub application draft version. To use this information for running resiliency assessments, you must publish the Resilience Hub application using the <code>PublishAppVersion</code> API.</p> </note>
		 * Post update-app-version
		 * @return {UpdateAppVersionResponse} Success
		 */
		UpdateAppVersion(requestBody: UpdateAppVersionPostBody): Observable<UpdateAppVersionResponse> {
			return this.http.post<UpdateAppVersionResponse>(this.baseUri + 'update-app-version', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Updates an existing Application Component in the Resilience Hub application.</p> <note> <p>This API updates the Resilience Hub application draft version. To use this Application Component for running assessments, you must publish the Resilience Hub application using the <code>PublishAppVersion</code> API.</p> </note>
		 * Post update-app-version-app-component
		 * @return {UpdateAppVersionAppComponentResponse} Success
		 */
		UpdateAppVersionAppComponent(requestBody: UpdateAppVersionAppComponentPostBody): Observable<UpdateAppVersionAppComponentResponse> {
			return this.http.post<UpdateAppVersionAppComponentResponse>(this.baseUri + 'update-app-version-app-component', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Updates the resource details in the Resilience Hub application.</p> <note> <ul> <li> <p>This action has no effect outside Resilience Hub.</p> </li> <li> <p>This API updates the Resilience Hub application draft version. To use this resource for running resiliency assessments, you must publish the Resilience Hub application using the <code>PublishAppVersion</code> API.</p> </li> <li> <p>To update application version with new <code>physicalResourceID</code>, you must call <code>ResolveAppVersionResources</code> API.</p> </li> </ul> </note>
		 * Post update-app-version-resource
		 * @return {UpdateAppVersionResourceResponse} Success
		 */
		UpdateAppVersionResource(requestBody: UpdateAppVersionResourcePostBody): Observable<UpdateAppVersionResourceResponse> {
			return this.http.post<UpdateAppVersionResourceResponse>(this.baseUri + 'update-app-version-resource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates a resiliency policy.
		 * Post update-resiliency-policy
		 * @return {UpdateResiliencyPolicyResponse} Success
		 */
		UpdateResiliencyPolicy(requestBody: UpdateResiliencyPolicyPostBody): Observable<UpdateResiliencyPolicyResponse> {
			return this.http.post<UpdateResiliencyPolicyResponse>(this.baseUri + 'update-resiliency-policy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export interface AddDraftAppVersionResourceMappingsPostBody {

		/**
		 * Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is: arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html"> Amazon Resource Names (ARNs)</a> in the <i>AWS General Reference</i> guide.
		 * Required
		 */
		appArn: string;

		/**
		 * Mappings used to map logical resources from the template to physical resources. You can use the mapping type <code>CFN_STACK</code> if the application template uses a logical stack name. Or you can map individual resources by using the mapping type <code>RESOURCE</code>. We recommend using the mapping type <code>CFN_STACK</code> if the application is backed by a CloudFormation stack.
		 * Required
		 */
		resourceMappings: Array<ResourceMapping>;
	}
	export interface AddDraftAppVersionResourceMappingsPostBodyFormProperties {

		/**
		 * Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is: arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html"> Amazon Resource Names (ARNs)</a> in the <i>AWS General Reference</i> guide.
		 * Required
		 */
		appArn: FormControl<string | null | undefined>,
	}
	export function CreateAddDraftAppVersionResourceMappingsPostBodyFormGroup() {
		return new FormGroup<AddDraftAppVersionResourceMappingsPostBodyFormProperties>({
			appArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^arn:(aws|aws-cn|aws-iso|aws-iso-[a-z]{1}|aws-us-gov):[A-Za-z0-9][A-Za-z0-9_/.-]{0,62}:([a-z]{2}-((iso[a-z]{0,1}-)|(gov-)){0,1}[a-z]+-[0-9]):[0-9]{12}:[A-Za-z0-9/][A-Za-z0-9:_/+.-]{0,1023}$')]),
		});

	}

	export interface BatchUpdateRecommendationStatusPostBody {

		/**
		 * Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is: arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html"> Amazon Resource Names (ARNs)</a> in the <i>AWS General Reference</i> guide.
		 * Required
		 */
		appArn: string;

		/**
		 * Defines the list of operational recommendations that need to be included or excluded.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		requestEntries: Array<UpdateRecommendationStatusRequestEntry>;
	}
	export interface BatchUpdateRecommendationStatusPostBodyFormProperties {

		/**
		 * Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is: arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html"> Amazon Resource Names (ARNs)</a> in the <i>AWS General Reference</i> guide.
		 * Required
		 */
		appArn: FormControl<string | null | undefined>,
	}
	export function CreateBatchUpdateRecommendationStatusPostBodyFormGroup() {
		return new FormGroup<BatchUpdateRecommendationStatusPostBodyFormProperties>({
			appArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^arn:(aws|aws-cn|aws-iso|aws-iso-[a-z]{1}|aws-us-gov):[A-Za-z0-9][A-Za-z0-9_/.-]{0,62}:([a-z]{2}-((iso[a-z]{0,1}-)|(gov-)){0,1}[a-z]+-[0-9]):[0-9]{12}:[A-Za-z0-9/][A-Za-z0-9:_/+.-]{0,1023}$')]),
		});

	}

	export interface CreateAppPostBody {

		/** Assessment execution schedule with 'Daily' or 'Disabled' values. */
		assessmentSchedule?: AppAssessmentScheduleType | null;

		/**
		 * Used for an idempotency token. A client token is a unique, case-sensitive string of up to 64 ASCII characters. You should not reuse the same client token for other API requests.
		 * Max length: 63
		 * Min length: 1
		 */
		clientToken?: string | null;

		/**
		 * The optional description for an app.
		 * Max length: 500
		 * Min length: 0
		 */
		description?: string | null;

		/**
		 * The list of events you would like to subscribe and get notification for. Currently, Resilience Hub supports only <b>Drift detected</b> and <b>Scheduled assessment failure</b> events notification.
		 * Minimum items: 0
		 * Maximum items: 10
		 */
		eventSubscriptions?: Array<EventSubscription>;

		/**
		 * Name of the application.
		 * Required
		 */
		name: string;

		/** Defines the roles and credentials that Resilience Hub would use while creating the application, importing its resources, and running an assessment. */
		permissionModel?: CreateAppPostBodyPermissionModel;

		/** Amazon Resource Name (ARN) of the resiliency policy. The format for this ARN is: arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:resiliency-policy/<code>policy-id</code>. For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html"> Amazon Resource Names (ARNs)</a> in the <i>AWS General Reference</i> guide. */
		policyArn?: string | null;

		/** Tags assigned to the resource. A tag is a label that you assign to an Amazon Web Services resource. Each tag consists of a key/value pair. */
		tags?: {[id: string]: string };
	}
	export interface CreateAppPostBodyFormProperties {

		/** Assessment execution schedule with 'Daily' or 'Disabled' values. */
		assessmentSchedule: FormControl<AppAssessmentScheduleType | null | undefined>,

		/**
		 * Used for an idempotency token. A client token is a unique, case-sensitive string of up to 64 ASCII characters. You should not reuse the same client token for other API requests.
		 * Max length: 63
		 * Min length: 1
		 */
		clientToken: FormControl<string | null | undefined>,

		/**
		 * The optional description for an app.
		 * Max length: 500
		 * Min length: 0
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * Name of the application.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/** Amazon Resource Name (ARN) of the resiliency policy. The format for this ARN is: arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:resiliency-policy/<code>policy-id</code>. For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html"> Amazon Resource Names (ARNs)</a> in the <i>AWS General Reference</i> guide. */
		policyArn: FormControl<string | null | undefined>,

		/** Tags assigned to the resource. A tag is a label that you assign to an Amazon Web Services resource. Each tag consists of a key/value pair. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateAppPostBodyFormGroup() {
		return new FormGroup<CreateAppPostBodyFormProperties>({
			assessmentSchedule: new FormControl<AppAssessmentScheduleType | null | undefined>(undefined),
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(63), Validators.pattern('^[A-za-z0-9_.-]{0,63}$')]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(500)]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[A-Za-z0-9][A-Za-z0-9_\-]{1,59}$')]),
			policyArn: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^arn:(aws|aws-cn|aws-iso|aws-iso-[a-z]{1}|aws-us-gov):[A-Za-z0-9][A-Za-z0-9_/.-]{0,62}:([a-z]{2}-((iso[a-z]{0,1}-)|(gov-)){0,1}[a-z]+-[0-9]):[0-9]{12}:[A-Za-z0-9/][A-Za-z0-9:_/+.-]{0,1023}$')]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateAppPostBodyPermissionModel {
		crossAccountRoleArns?: Array<string>;
		invokerRoleName?: string;
		type?: PermissionModelType;
	}
	export interface CreateAppPostBodyPermissionModelFormProperties {
		invokerRoleName: FormControl<string | null | undefined>,
		type: FormControl<PermissionModelType | null | undefined>,
	}
	export function CreateCreateAppPostBodyPermissionModelFormGroup() {
		return new FormGroup<CreateAppPostBodyPermissionModelFormProperties>({
			invokerRoleName: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<PermissionModelType | null | undefined>(undefined),
		});

	}

	export interface CreateAppVersionAppComponentPostBody {

		/** Currently, there is no supported additional information for Application Components. */
		additionalInfo?: {[id: string]: Array<string> };

		/**
		 * Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is: arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html"> Amazon Resource Names (ARNs)</a> in the <i>AWS General Reference</i> guide.
		 * Required
		 */
		appArn: string;

		/**
		 * Used for an idempotency token. A client token is a unique, case-sensitive string of up to 64 ASCII characters. You should not reuse the same client token for other API requests.
		 * Max length: 63
		 * Min length: 1
		 */
		clientToken?: string | null;

		/**
		 * Identifier of the Application Component.
		 * Max length: 255
		 * Min length: 1
		 */
		id?: string | null;

		/**
		 * Name of the Application Component.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		name: string;

		/**
		 * Type of Application Component. For more information about the types of Application Component, see <a href="https://docs.aws.amazon.com/resilience-hub/latest/userguide/AppComponent.grouping.html">Grouping resources in an AppComponent</a>.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		type: string;
	}
	export interface CreateAppVersionAppComponentPostBodyFormProperties {

		/** Currently, there is no supported additional information for Application Components. */
		additionalInfo: FormControl<{[id: string]: Array<string> } | null | undefined>,

		/**
		 * Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is: arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html"> Amazon Resource Names (ARNs)</a> in the <i>AWS General Reference</i> guide.
		 * Required
		 */
		appArn: FormControl<string | null | undefined>,

		/**
		 * Used for an idempotency token. A client token is a unique, case-sensitive string of up to 64 ASCII characters. You should not reuse the same client token for other API requests.
		 * Max length: 63
		 * Min length: 1
		 */
		clientToken: FormControl<string | null | undefined>,

		/**
		 * Identifier of the Application Component.
		 * Max length: 255
		 * Min length: 1
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * Name of the Application Component.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Type of Application Component. For more information about the types of Application Component, see <a href="https://docs.aws.amazon.com/resilience-hub/latest/userguide/AppComponent.grouping.html">Grouping resources in an AppComponent</a>.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateCreateAppVersionAppComponentPostBodyFormGroup() {
		return new FormGroup<CreateAppVersionAppComponentPostBodyFormProperties>({
			additionalInfo: new FormControl<{[id: string]: Array<string> } | null | undefined>(undefined),
			appArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^arn:(aws|aws-cn|aws-iso|aws-iso-[a-z]{1}|aws-us-gov):[A-Za-z0-9][A-Za-z0-9_/.-]{0,62}:([a-z]{2}-((iso[a-z]{0,1}-)|(gov-)){0,1}[a-z]+-[0-9]):[0-9]{12}:[A-Za-z0-9/][A-Za-z0-9:_/+.-]{0,1023}$')]),
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(63), Validators.pattern('^[A-za-z0-9_.-]{0,63}$')]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
		});

	}

	export interface CreateAppVersionResourcePostBody {

		/** Currently, there is no supported additional information for resources. */
		additionalInfo?: {[id: string]: Array<string> };

		/**
		 * Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is: arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html"> Amazon Resource Names (ARNs)</a> in the <i>AWS General Reference</i> guide.
		 * Required
		 */
		appArn: string;

		/**
		 * List of Application Components that this resource belongs to. If an Application Component is not part of the Resilience Hub application, it will be added.
		 * Required
		 */
		appComponents: Array<string>;

		/** Amazon Web Services account that owns the physical resource. */
		awsAccountId?: string | null;

		/** Amazon Web Services region that owns the physical resource. */
		awsRegion?: string | null;

		/**
		 * Used for an idempotency token. A client token is a unique, case-sensitive string of up to 64 ASCII characters. You should not reuse the same client token for other API requests.
		 * Max length: 63
		 * Min length: 1
		 */
		clientToken?: string | null;

		/**
		 * Defines a logical resource identifier.
		 * Required
		 */
		logicalResourceId: CreateAppVersionResourcePostBodyLogicalResourceId;

		/**
		 * Physical identifier of the resource.
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 */
		physicalResourceId: string;

		/** Name of the resource. */
		resourceName?: string | null;

		/**
		 * Type of resource.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		resourceType: string;
	}
	export interface CreateAppVersionResourcePostBodyFormProperties {

		/** Currently, there is no supported additional information for resources. */
		additionalInfo: FormControl<{[id: string]: Array<string> } | null | undefined>,

		/**
		 * Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is: arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html"> Amazon Resource Names (ARNs)</a> in the <i>AWS General Reference</i> guide.
		 * Required
		 */
		appArn: FormControl<string | null | undefined>,

		/** Amazon Web Services account that owns the physical resource. */
		awsAccountId: FormControl<string | null | undefined>,

		/** Amazon Web Services region that owns the physical resource. */
		awsRegion: FormControl<string | null | undefined>,

		/**
		 * Used for an idempotency token. A client token is a unique, case-sensitive string of up to 64 ASCII characters. You should not reuse the same client token for other API requests.
		 * Max length: 63
		 * Min length: 1
		 */
		clientToken: FormControl<string | null | undefined>,

		/**
		 * Physical identifier of the resource.
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 */
		physicalResourceId: FormControl<string | null | undefined>,

		/** Name of the resource. */
		resourceName: FormControl<string | null | undefined>,

		/**
		 * Type of resource.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		resourceType: FormControl<string | null | undefined>,
	}
	export function CreateCreateAppVersionResourcePostBodyFormGroup() {
		return new FormGroup<CreateAppVersionResourcePostBodyFormProperties>({
			additionalInfo: new FormControl<{[id: string]: Array<string> } | null | undefined>(undefined),
			appArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^arn:(aws|aws-cn|aws-iso|aws-iso-[a-z]{1}|aws-us-gov):[A-Za-z0-9][A-Za-z0-9_/.-]{0,62}:([a-z]{2}-((iso[a-z]{0,1}-)|(gov-)){0,1}[a-z]+-[0-9]):[0-9]{12}:[A-Za-z0-9/][A-Za-z0-9:_/+.-]{0,1023}$')]),
			awsAccountId: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[0-9]{12}$')]),
			awsRegion: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[a-z]{2}-((iso[a-z]{0,1}-)|(gov-)){0,1}[a-z]+-[0-9]$')]),
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(63), Validators.pattern('^[A-za-z0-9_.-]{0,63}$')]),
			physicalResourceId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(2048)]),
			resourceName: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[A-Za-z0-9][A-Za-z0-9_\-]{1,59}$')]),
			resourceType: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
		});

	}

	export interface CreateAppVersionResourcePostBodyLogicalResourceId {
		eksSourceName?: string;
		identifier?: string;
		logicalStackName?: string;
		resourceGroupName?: string;
		terraformSourceName?: string;
	}
	export interface CreateAppVersionResourcePostBodyLogicalResourceIdFormProperties {
		eksSourceName: FormControl<string | null | undefined>,
		identifier: FormControl<string | null | undefined>,
		logicalStackName: FormControl<string | null | undefined>,
		resourceGroupName: FormControl<string | null | undefined>,
		terraformSourceName: FormControl<string | null | undefined>,
	}
	export function CreateCreateAppVersionResourcePostBodyLogicalResourceIdFormGroup() {
		return new FormGroup<CreateAppVersionResourcePostBodyLogicalResourceIdFormProperties>({
			eksSourceName: new FormControl<string | null | undefined>(undefined),
			identifier: new FormControl<string | null | undefined>(undefined),
			logicalStackName: new FormControl<string | null | undefined>(undefined),
			resourceGroupName: new FormControl<string | null | undefined>(undefined),
			terraformSourceName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateRecommendationTemplatePostBody {

		/**
		 * Amazon Resource Name (ARN) of the assessment. The format for this ARN is: arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app-assessment/<code>app-id</code>. For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html"> Amazon Resource Names (ARNs)</a> in the <i>AWS General Reference</i> guide.
		 * Required
		 */
		assessmentArn: string;

		/** The name of the Amazon S3 bucket that will contain the recommendation template. */
		bucketName?: string | null;

		/**
		 * Used for an idempotency token. A client token is a unique, case-sensitive string of up to 64 ASCII characters. You should not reuse the same client token for other API requests.
		 * Max length: 63
		 * Min length: 1
		 */
		clientToken?: string | null;

		/** <p>The format for the recommendation template.</p> <dl> <dt>CfnJson</dt> <dd> <p>The template is CloudFormation JSON.</p> </dd> <dt>CfnYaml</dt> <dd> <p>The template is CloudFormation YAML.</p> </dd> </dl> */
		format?: TemplateFormat | null;

		/**
		 * The name for the recommendation template.
		 * Required
		 */
		name: string;

		/**
		 * Identifiers for the recommendations used to create a recommendation template.
		 * Minimum items: 1
		 * Maximum items: 200
		 */
		recommendationIds?: Array<string>;

		/**
		 * <p>An array of strings that specify the recommendation template type or types.</p> <dl> <dt>Alarm</dt> <dd> <p>The template is an <a>AlarmRecommendation</a> template.</p> </dd> <dt>Sop</dt> <dd> <p>The template is a <a>SopRecommendation</a> template.</p> </dd> <dt>Test</dt> <dd> <p>The template is a <a>TestRecommendation</a> template.</p> </dd> </dl>
		 * Minimum items: 1
		 * Maximum items: 4
		 */
		recommendationTypes?: Array<RenderRecommendationType>;

		/** Tags assigned to the resource. A tag is a label that you assign to an Amazon Web Services resource. Each tag consists of a key/value pair. */
		tags?: {[id: string]: string };
	}
	export interface CreateRecommendationTemplatePostBodyFormProperties {

		/**
		 * Amazon Resource Name (ARN) of the assessment. The format for this ARN is: arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app-assessment/<code>app-id</code>. For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html"> Amazon Resource Names (ARNs)</a> in the <i>AWS General Reference</i> guide.
		 * Required
		 */
		assessmentArn: FormControl<string | null | undefined>,

		/** The name of the Amazon S3 bucket that will contain the recommendation template. */
		bucketName: FormControl<string | null | undefined>,

		/**
		 * Used for an idempotency token. A client token is a unique, case-sensitive string of up to 64 ASCII characters. You should not reuse the same client token for other API requests.
		 * Max length: 63
		 * Min length: 1
		 */
		clientToken: FormControl<string | null | undefined>,

		/** <p>The format for the recommendation template.</p> <dl> <dt>CfnJson</dt> <dd> <p>The template is CloudFormation JSON.</p> </dd> <dt>CfnYaml</dt> <dd> <p>The template is CloudFormation YAML.</p> </dd> </dl> */
		format: FormControl<TemplateFormat | null | undefined>,

		/**
		 * The name for the recommendation template.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/** Tags assigned to the resource. A tag is a label that you assign to an Amazon Web Services resource. Each tag consists of a key/value pair. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateRecommendationTemplatePostBodyFormGroup() {
		return new FormGroup<CreateRecommendationTemplatePostBodyFormProperties>({
			assessmentArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^arn:(aws|aws-cn|aws-iso|aws-iso-[a-z]{1}|aws-us-gov):[A-Za-z0-9][A-Za-z0-9_/.-]{0,62}:([a-z]{2}-((iso[a-z]{0,1}-)|(gov-)){0,1}[a-z]+-[0-9]):[0-9]{12}:[A-Za-z0-9/][A-Za-z0-9:_/+.-]{0,1023}$')]),
			bucketName: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[A-Za-z0-9][A-Za-z0-9_\-]{1,59}$')]),
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(63), Validators.pattern('^[A-za-z0-9_.-]{0,63}$')]),
			format: new FormControl<TemplateFormat | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[A-Za-z0-9][A-Za-z0-9_\-]{1,59}$')]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateResiliencyPolicyPostBody {

		/**
		 * Used for an idempotency token. A client token is a unique, case-sensitive string of up to 64 ASCII characters. You should not reuse the same client token for other API requests.
		 * Max length: 63
		 * Min length: 1
		 */
		clientToken?: string | null;

		/** Specifies a high-level geographical location constraint for where your resilience policy data can be stored. */
		dataLocationConstraint?: DataLocationConstraint | null;

		/**
		 * The type of resiliency policy to be created, including the recovery time objective (RTO) and recovery point objective (RPO) in seconds.
		 * Required
		 */
		policy: {[id: string]: FailurePolicy };

		/**
		 * The description for the policy.
		 * Max length: 500
		 * Min length: 0
		 */
		policyDescription?: string | null;

		/**
		 * The name of the policy
		 * Required
		 */
		policyName: string;

		/** Tags assigned to the resource. A tag is a label that you assign to an Amazon Web Services resource. Each tag consists of a key/value pair. */
		tags?: {[id: string]: string };

		/**
		 * The tier for this resiliency policy, ranging from the highest severity (<code>MissionCritical</code>) to lowest (<code>NonCritical</code>).
		 * Required
		 */
		tier: ResiliencyPolicyTier;
	}
	export interface CreateResiliencyPolicyPostBodyFormProperties {

		/**
		 * Used for an idempotency token. A client token is a unique, case-sensitive string of up to 64 ASCII characters. You should not reuse the same client token for other API requests.
		 * Max length: 63
		 * Min length: 1
		 */
		clientToken: FormControl<string | null | undefined>,

		/** Specifies a high-level geographical location constraint for where your resilience policy data can be stored. */
		dataLocationConstraint: FormControl<DataLocationConstraint | null | undefined>,

		/**
		 * The type of resiliency policy to be created, including the recovery time objective (RTO) and recovery point objective (RPO) in seconds.
		 * Required
		 */
		policy: FormControl<{[id: string]: FailurePolicy } | null | undefined>,

		/**
		 * The description for the policy.
		 * Max length: 500
		 * Min length: 0
		 */
		policyDescription: FormControl<string | null | undefined>,

		/**
		 * The name of the policy
		 * Required
		 */
		policyName: FormControl<string | null | undefined>,

		/** Tags assigned to the resource. A tag is a label that you assign to an Amazon Web Services resource. Each tag consists of a key/value pair. */
		tags: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * The tier for this resiliency policy, ranging from the highest severity (<code>MissionCritical</code>) to lowest (<code>NonCritical</code>).
		 * Required
		 */
		tier: FormControl<ResiliencyPolicyTier | null | undefined>,
	}
	export function CreateCreateResiliencyPolicyPostBodyFormGroup() {
		return new FormGroup<CreateResiliencyPolicyPostBodyFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(63), Validators.pattern('^[A-za-z0-9_.-]{0,63}$')]),
			dataLocationConstraint: new FormControl<DataLocationConstraint | null | undefined>(undefined),
			policy: new FormControl<{[id: string]: FailurePolicy } | null | undefined>(undefined, [Validators.required]),
			policyDescription: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(500)]),
			policyName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[A-Za-z0-9][A-Za-z0-9_\-]{1,59}$')]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			tier: new FormControl<ResiliencyPolicyTier | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteAppPostBody {

		/**
		 * Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is: arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html"> Amazon Resource Names (ARNs)</a> in the <i>AWS General Reference</i> guide.
		 * Required
		 */
		appArn: string;

		/**
		 * Used for an idempotency token. A client token is a unique, case-sensitive string of up to 64 ASCII characters. You should not reuse the same client token for other API requests.
		 * Max length: 63
		 * Min length: 1
		 */
		clientToken?: string | null;

		/** A boolean option to force the deletion of an Resilience Hub application. */
		forceDelete?: boolean | null;
	}
	export interface DeleteAppPostBodyFormProperties {

		/**
		 * Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is: arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html"> Amazon Resource Names (ARNs)</a> in the <i>AWS General Reference</i> guide.
		 * Required
		 */
		appArn: FormControl<string | null | undefined>,

		/**
		 * Used for an idempotency token. A client token is a unique, case-sensitive string of up to 64 ASCII characters. You should not reuse the same client token for other API requests.
		 * Max length: 63
		 * Min length: 1
		 */
		clientToken: FormControl<string | null | undefined>,

		/** A boolean option to force the deletion of an Resilience Hub application. */
		forceDelete: FormControl<boolean | null | undefined>,
	}
	export function CreateDeleteAppPostBodyFormGroup() {
		return new FormGroup<DeleteAppPostBodyFormProperties>({
			appArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^arn:(aws|aws-cn|aws-iso|aws-iso-[a-z]{1}|aws-us-gov):[A-Za-z0-9][A-Za-z0-9_/.-]{0,62}:([a-z]{2}-((iso[a-z]{0,1}-)|(gov-)){0,1}[a-z]+-[0-9]):[0-9]{12}:[A-Za-z0-9/][A-Za-z0-9:_/+.-]{0,1023}$')]),
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(63), Validators.pattern('^[A-za-z0-9_.-]{0,63}$')]),
			forceDelete: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface DeleteAppAssessmentPostBody {

		/**
		 * Amazon Resource Name (ARN) of the assessment. The format for this ARN is: arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app-assessment/<code>app-id</code>. For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html"> Amazon Resource Names (ARNs)</a> in the <i>AWS General Reference</i> guide.
		 * Required
		 */
		assessmentArn: string;

		/**
		 * Used for an idempotency token. A client token is a unique, case-sensitive string of up to 64 ASCII characters. You should not reuse the same client token for other API requests.
		 * Max length: 63
		 * Min length: 1
		 */
		clientToken?: string | null;
	}
	export interface DeleteAppAssessmentPostBodyFormProperties {

		/**
		 * Amazon Resource Name (ARN) of the assessment. The format for this ARN is: arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app-assessment/<code>app-id</code>. For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html"> Amazon Resource Names (ARNs)</a> in the <i>AWS General Reference</i> guide.
		 * Required
		 */
		assessmentArn: FormControl<string | null | undefined>,

		/**
		 * Used for an idempotency token. A client token is a unique, case-sensitive string of up to 64 ASCII characters. You should not reuse the same client token for other API requests.
		 * Max length: 63
		 * Min length: 1
		 */
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateDeleteAppAssessmentPostBodyFormGroup() {
		return new FormGroup<DeleteAppAssessmentPostBodyFormProperties>({
			assessmentArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^arn:(aws|aws-cn|aws-iso|aws-iso-[a-z]{1}|aws-us-gov):[A-Za-z0-9][A-Za-z0-9_/.-]{0,62}:([a-z]{2}-((iso[a-z]{0,1}-)|(gov-)){0,1}[a-z]+-[0-9]):[0-9]{12}:[A-Za-z0-9/][A-Za-z0-9:_/+.-]{0,1023}$')]),
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(63), Validators.pattern('^[A-za-z0-9_.-]{0,63}$')]),
		});

	}

	export interface DeleteAppInputSourcePostBody {

		/**
		 * Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is: arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html"> Amazon Resource Names (ARNs)</a> in the <i>AWS General Reference</i> guide.
		 * Required
		 */
		appArn: string;

		/**
		 * Used for an idempotency token. A client token is a unique, case-sensitive string of up to 64 ASCII characters. You should not reuse the same client token for other API requests.
		 * Max length: 63
		 * Min length: 1
		 */
		clientToken?: string | null;

		/** The input source of the namespace that is located on your Amazon Elastic Kubernetes Service cluster. */
		eksSourceClusterNamespace?: DeleteAppInputSourcePostBodyEksSourceClusterNamespace;

		/** The Amazon Resource Name (ARN) of the imported resource you want to remove from the Resilience Hub application. For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html"> Amazon Resource Names (ARNs)</a> in the <i>AWS General Reference</i> guide. */
		sourceArn?: string | null;

		/** The Terraform s3 state file you need to import. */
		terraformSource?: DeleteAppInputSourcePostBodyTerraformSource;
	}
	export interface DeleteAppInputSourcePostBodyFormProperties {

		/**
		 * Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is: arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html"> Amazon Resource Names (ARNs)</a> in the <i>AWS General Reference</i> guide.
		 * Required
		 */
		appArn: FormControl<string | null | undefined>,

		/**
		 * Used for an idempotency token. A client token is a unique, case-sensitive string of up to 64 ASCII characters. You should not reuse the same client token for other API requests.
		 * Max length: 63
		 * Min length: 1
		 */
		clientToken: FormControl<string | null | undefined>,

		/** The Amazon Resource Name (ARN) of the imported resource you want to remove from the Resilience Hub application. For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html"> Amazon Resource Names (ARNs)</a> in the <i>AWS General Reference</i> guide. */
		sourceArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteAppInputSourcePostBodyFormGroup() {
		return new FormGroup<DeleteAppInputSourcePostBodyFormProperties>({
			appArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^arn:(aws|aws-cn|aws-iso|aws-iso-[a-z]{1}|aws-us-gov):[A-Za-z0-9][A-Za-z0-9_/.-]{0,62}:([a-z]{2}-((iso[a-z]{0,1}-)|(gov-)){0,1}[a-z]+-[0-9]):[0-9]{12}:[A-Za-z0-9/][A-Za-z0-9:_/+.-]{0,1023}$')]),
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(63), Validators.pattern('^[A-za-z0-9_.-]{0,63}$')]),
			sourceArn: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^arn:(aws|aws-cn|aws-iso|aws-iso-[a-z]{1}|aws-us-gov):[A-Za-z0-9][A-Za-z0-9_/.-]{0,62}:([a-z]{2}-((iso[a-z]{0,1}-)|(gov-)){0,1}[a-z]+-[0-9]):[0-9]{12}:[A-Za-z0-9/][A-Za-z0-9:_/+.-]{0,1023}$')]),
		});

	}

	export interface DeleteAppInputSourcePostBodyEksSourceClusterNamespace {
		eksClusterArn?: string;
		namespace?: string;
	}
	export interface DeleteAppInputSourcePostBodyEksSourceClusterNamespaceFormProperties {
		eksClusterArn: FormControl<string | null | undefined>,
		namespace: FormControl<string | null | undefined>,
	}
	export function CreateDeleteAppInputSourcePostBodyEksSourceClusterNamespaceFormGroup() {
		return new FormGroup<DeleteAppInputSourcePostBodyEksSourceClusterNamespaceFormProperties>({
			eksClusterArn: new FormControl<string | null | undefined>(undefined),
			namespace: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteAppInputSourcePostBodyTerraformSource {
		s3StateFileUrl?: string;
	}
	export interface DeleteAppInputSourcePostBodyTerraformSourceFormProperties {
		s3StateFileUrl: FormControl<string | null | undefined>,
	}
	export function CreateDeleteAppInputSourcePostBodyTerraformSourceFormGroup() {
		return new FormGroup<DeleteAppInputSourcePostBodyTerraformSourceFormProperties>({
			s3StateFileUrl: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteAppVersionAppComponentPostBody {

		/**
		 * Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is: arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html"> Amazon Resource Names (ARNs)</a> in the <i>AWS General Reference</i> guide.
		 * Required
		 */
		appArn: string;

		/**
		 * Used for an idempotency token. A client token is a unique, case-sensitive string of up to 64 ASCII characters. You should not reuse the same client token for other API requests.
		 * Max length: 63
		 * Min length: 1
		 */
		clientToken?: string | null;

		/**
		 * Identifier of the Application Component.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		id: string;
	}
	export interface DeleteAppVersionAppComponentPostBodyFormProperties {

		/**
		 * Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is: arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html"> Amazon Resource Names (ARNs)</a> in the <i>AWS General Reference</i> guide.
		 * Required
		 */
		appArn: FormControl<string | null | undefined>,

		/**
		 * Used for an idempotency token. A client token is a unique, case-sensitive string of up to 64 ASCII characters. You should not reuse the same client token for other API requests.
		 * Max length: 63
		 * Min length: 1
		 */
		clientToken: FormControl<string | null | undefined>,

		/**
		 * Identifier of the Application Component.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		id: FormControl<string | null | undefined>,
	}
	export function CreateDeleteAppVersionAppComponentPostBodyFormGroup() {
		return new FormGroup<DeleteAppVersionAppComponentPostBodyFormProperties>({
			appArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^arn:(aws|aws-cn|aws-iso|aws-iso-[a-z]{1}|aws-us-gov):[A-Za-z0-9][A-Za-z0-9_/.-]{0,62}:([a-z]{2}-((iso[a-z]{0,1}-)|(gov-)){0,1}[a-z]+-[0-9]):[0-9]{12}:[A-Za-z0-9/][A-Za-z0-9:_/+.-]{0,1023}$')]),
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(63), Validators.pattern('^[A-za-z0-9_.-]{0,63}$')]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
		});

	}

	export interface DeleteAppVersionResourcePostBody {

		/**
		 * Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is: arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html"> Amazon Resource Names (ARNs)</a> in the <i>AWS General Reference</i> guide.
		 * Required
		 */
		appArn: string;

		/** Amazon Web Services account that owns the physical resource. */
		awsAccountId?: string | null;

		/** Amazon Web Services region that owns the physical resource. */
		awsRegion?: string | null;

		/**
		 * Used for an idempotency token. A client token is a unique, case-sensitive string of up to 64 ASCII characters. You should not reuse the same client token for other API requests.
		 * Max length: 63
		 * Min length: 1
		 */
		clientToken?: string | null;

		/** Defines a logical resource identifier. */
		logicalResourceId?: DeleteAppVersionResourcePostBodyLogicalResourceId;

		/**
		 * Physical identifier of the resource.
		 * Max length: 2048
		 * Min length: 1
		 */
		physicalResourceId?: string | null;

		/** Name of the resource. */
		resourceName?: string | null;
	}
	export interface DeleteAppVersionResourcePostBodyFormProperties {

		/**
		 * Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is: arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html"> Amazon Resource Names (ARNs)</a> in the <i>AWS General Reference</i> guide.
		 * Required
		 */
		appArn: FormControl<string | null | undefined>,

		/** Amazon Web Services account that owns the physical resource. */
		awsAccountId: FormControl<string | null | undefined>,

		/** Amazon Web Services region that owns the physical resource. */
		awsRegion: FormControl<string | null | undefined>,

		/**
		 * Used for an idempotency token. A client token is a unique, case-sensitive string of up to 64 ASCII characters. You should not reuse the same client token for other API requests.
		 * Max length: 63
		 * Min length: 1
		 */
		clientToken: FormControl<string | null | undefined>,

		/**
		 * Physical identifier of the resource.
		 * Max length: 2048
		 * Min length: 1
		 */
		physicalResourceId: FormControl<string | null | undefined>,

		/** Name of the resource. */
		resourceName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteAppVersionResourcePostBodyFormGroup() {
		return new FormGroup<DeleteAppVersionResourcePostBodyFormProperties>({
			appArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^arn:(aws|aws-cn|aws-iso|aws-iso-[a-z]{1}|aws-us-gov):[A-Za-z0-9][A-Za-z0-9_/.-]{0,62}:([a-z]{2}-((iso[a-z]{0,1}-)|(gov-)){0,1}[a-z]+-[0-9]):[0-9]{12}:[A-Za-z0-9/][A-Za-z0-9:_/+.-]{0,1023}$')]),
			awsAccountId: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[0-9]{12}$')]),
			awsRegion: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[a-z]{2}-((iso[a-z]{0,1}-)|(gov-)){0,1}[a-z]+-[0-9]$')]),
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(63), Validators.pattern('^[A-za-z0-9_.-]{0,63}$')]),
			physicalResourceId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2048)]),
			resourceName: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[A-Za-z0-9][A-Za-z0-9_\-]{1,59}$')]),
		});

	}

	export interface DeleteAppVersionResourcePostBodyLogicalResourceId {
		eksSourceName?: string;
		identifier?: string;
		logicalStackName?: string;
		resourceGroupName?: string;
		terraformSourceName?: string;
	}
	export interface DeleteAppVersionResourcePostBodyLogicalResourceIdFormProperties {
		eksSourceName: FormControl<string | null | undefined>,
		identifier: FormControl<string | null | undefined>,
		logicalStackName: FormControl<string | null | undefined>,
		resourceGroupName: FormControl<string | null | undefined>,
		terraformSourceName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteAppVersionResourcePostBodyLogicalResourceIdFormGroup() {
		return new FormGroup<DeleteAppVersionResourcePostBodyLogicalResourceIdFormProperties>({
			eksSourceName: new FormControl<string | null | undefined>(undefined),
			identifier: new FormControl<string | null | undefined>(undefined),
			logicalStackName: new FormControl<string | null | undefined>(undefined),
			resourceGroupName: new FormControl<string | null | undefined>(undefined),
			terraformSourceName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteRecommendationTemplatePostBody {

		/**
		 * Used for an idempotency token. A client token is a unique, case-sensitive string of up to 64 ASCII characters. You should not reuse the same client token for other API requests.
		 * Max length: 63
		 * Min length: 1
		 */
		clientToken?: string | null;

		/**
		 * The Amazon Resource Name (ARN) for a recommendation template.
		 * Required
		 */
		recommendationTemplateArn: string;
	}
	export interface DeleteRecommendationTemplatePostBodyFormProperties {

		/**
		 * Used for an idempotency token. A client token is a unique, case-sensitive string of up to 64 ASCII characters. You should not reuse the same client token for other API requests.
		 * Max length: 63
		 * Min length: 1
		 */
		clientToken: FormControl<string | null | undefined>,

		/**
		 * The Amazon Resource Name (ARN) for a recommendation template.
		 * Required
		 */
		recommendationTemplateArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteRecommendationTemplatePostBodyFormGroup() {
		return new FormGroup<DeleteRecommendationTemplatePostBodyFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(63), Validators.pattern('^[A-za-z0-9_.-]{0,63}$')]),
			recommendationTemplateArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^arn:(aws|aws-cn|aws-iso|aws-iso-[a-z]{1}|aws-us-gov):[A-Za-z0-9][A-Za-z0-9_/.-]{0,62}:([a-z]{2}-((iso[a-z]{0,1}-)|(gov-)){0,1}[a-z]+-[0-9]):[0-9]{12}:[A-Za-z0-9/][A-Za-z0-9:_/+.-]{0,1023}$')]),
		});

	}

	export interface DeleteResiliencyPolicyPostBody {

		/**
		 * Used for an idempotency token. A client token is a unique, case-sensitive string of up to 64 ASCII characters. You should not reuse the same client token for other API requests.
		 * Max length: 63
		 * Min length: 1
		 */
		clientToken?: string | null;

		/**
		 * Amazon Resource Name (ARN) of the resiliency policy. The format for this ARN is: arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:resiliency-policy/<code>policy-id</code>. For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html"> Amazon Resource Names (ARNs)</a> in the <i>AWS General Reference</i> guide.
		 * Required
		 */
		policyArn: string;
	}
	export interface DeleteResiliencyPolicyPostBodyFormProperties {

		/**
		 * Used for an idempotency token. A client token is a unique, case-sensitive string of up to 64 ASCII characters. You should not reuse the same client token for other API requests.
		 * Max length: 63
		 * Min length: 1
		 */
		clientToken: FormControl<string | null | undefined>,

		/**
		 * Amazon Resource Name (ARN) of the resiliency policy. The format for this ARN is: arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:resiliency-policy/<code>policy-id</code>. For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html"> Amazon Resource Names (ARNs)</a> in the <i>AWS General Reference</i> guide.
		 * Required
		 */
		policyArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteResiliencyPolicyPostBodyFormGroup() {
		return new FormGroup<DeleteResiliencyPolicyPostBodyFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(63), Validators.pattern('^[A-za-z0-9_.-]{0,63}$')]),
			policyArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^arn:(aws|aws-cn|aws-iso|aws-iso-[a-z]{1}|aws-us-gov):[A-Za-z0-9][A-Za-z0-9_/.-]{0,62}:([a-z]{2}-((iso[a-z]{0,1}-)|(gov-)){0,1}[a-z]+-[0-9]):[0-9]{12}:[A-Za-z0-9/][A-Za-z0-9:_/+.-]{0,1023}$')]),
		});

	}

	export interface DescribeAppPostBody {

		/**
		 * Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is: arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html"> Amazon Resource Names (ARNs)</a> in the <i>AWS General Reference</i> guide.
		 * Required
		 */
		appArn: string;
	}
	export interface DescribeAppPostBodyFormProperties {

		/**
		 * Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is: arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html"> Amazon Resource Names (ARNs)</a> in the <i>AWS General Reference</i> guide.
		 * Required
		 */
		appArn: FormControl<string | null | undefined>,
	}
	export function CreateDescribeAppPostBodyFormGroup() {
		return new FormGroup<DescribeAppPostBodyFormProperties>({
			appArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^arn:(aws|aws-cn|aws-iso|aws-iso-[a-z]{1}|aws-us-gov):[A-Za-z0-9][A-Za-z0-9_/.-]{0,62}:([a-z]{2}-((iso[a-z]{0,1}-)|(gov-)){0,1}[a-z]+-[0-9]):[0-9]{12}:[A-Za-z0-9/][A-Za-z0-9:_/+.-]{0,1023}$')]),
		});

	}

	export interface DescribeAppAssessmentPostBody {

		/**
		 * Amazon Resource Name (ARN) of the assessment. The format for this ARN is: arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app-assessment/<code>app-id</code>. For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html"> Amazon Resource Names (ARNs)</a> in the <i>AWS General Reference</i> guide.
		 * Required
		 */
		assessmentArn: string;
	}
	export interface DescribeAppAssessmentPostBodyFormProperties {

		/**
		 * Amazon Resource Name (ARN) of the assessment. The format for this ARN is: arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app-assessment/<code>app-id</code>. For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html"> Amazon Resource Names (ARNs)</a> in the <i>AWS General Reference</i> guide.
		 * Required
		 */
		assessmentArn: FormControl<string | null | undefined>,
	}
	export function CreateDescribeAppAssessmentPostBodyFormGroup() {
		return new FormGroup<DescribeAppAssessmentPostBodyFormProperties>({
			assessmentArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^arn:(aws|aws-cn|aws-iso|aws-iso-[a-z]{1}|aws-us-gov):[A-Za-z0-9][A-Za-z0-9_/.-]{0,62}:([a-z]{2}-((iso[a-z]{0,1}-)|(gov-)){0,1}[a-z]+-[0-9]):[0-9]{12}:[A-Za-z0-9/][A-Za-z0-9:_/+.-]{0,1023}$')]),
		});

	}

	export interface DescribeAppVersionPostBody {

		/**
		 * Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is: arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html"> Amazon Resource Names (ARNs)</a> in the <i>AWS General Reference</i> guide.
		 * Required
		 */
		appArn: string;

		/**
		 * Resilience Hub application version.
		 * Required
		 */
		appVersion: string;
	}
	export interface DescribeAppVersionPostBodyFormProperties {

		/**
		 * Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is: arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html"> Amazon Resource Names (ARNs)</a> in the <i>AWS General Reference</i> guide.
		 * Required
		 */
		appArn: FormControl<string | null | undefined>,

		/**
		 * Resilience Hub application version.
		 * Required
		 */
		appVersion: FormControl<string | null | undefined>,
	}
	export function CreateDescribeAppVersionPostBodyFormGroup() {
		return new FormGroup<DescribeAppVersionPostBodyFormProperties>({
			appArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^arn:(aws|aws-cn|aws-iso|aws-iso-[a-z]{1}|aws-us-gov):[A-Za-z0-9][A-Za-z0-9_/.-]{0,62}:([a-z]{2}-((iso[a-z]{0,1}-)|(gov-)){0,1}[a-z]+-[0-9]):[0-9]{12}:[A-Za-z0-9/][A-Za-z0-9:_/+.-]{0,1023}$')]),
			appVersion: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^\S{1,50}$')]),
		});

	}

	export interface DescribeAppVersionAppComponentPostBody {

		/**
		 * Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is: arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html"> Amazon Resource Names (ARNs)</a> in the <i>AWS General Reference</i> guide.
		 * Required
		 */
		appArn: string;

		/**
		 * Resilience Hub application version.
		 * Required
		 */
		appVersion: string;

		/**
		 * Identifier of the Application Component.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		id: string;
	}
	export interface DescribeAppVersionAppComponentPostBodyFormProperties {

		/**
		 * Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is: arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html"> Amazon Resource Names (ARNs)</a> in the <i>AWS General Reference</i> guide.
		 * Required
		 */
		appArn: FormControl<string | null | undefined>,

		/**
		 * Resilience Hub application version.
		 * Required
		 */
		appVersion: FormControl<string | null | undefined>,

		/**
		 * Identifier of the Application Component.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		id: FormControl<string | null | undefined>,
	}
	export function CreateDescribeAppVersionAppComponentPostBodyFormGroup() {
		return new FormGroup<DescribeAppVersionAppComponentPostBodyFormProperties>({
			appArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^arn:(aws|aws-cn|aws-iso|aws-iso-[a-z]{1}|aws-us-gov):[A-Za-z0-9][A-Za-z0-9_/.-]{0,62}:([a-z]{2}-((iso[a-z]{0,1}-)|(gov-)){0,1}[a-z]+-[0-9]):[0-9]{12}:[A-Za-z0-9/][A-Za-z0-9:_/+.-]{0,1023}$')]),
			appVersion: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^\S{1,50}$')]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
		});

	}

	export interface DescribeAppVersionResourcePostBody {

		/**
		 * Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is: arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html"> Amazon Resource Names (ARNs)</a> in the <i>AWS General Reference</i> guide.
		 * Required
		 */
		appArn: string;

		/**
		 * Resilience Hub application version.
		 * Required
		 */
		appVersion: string;

		/** Amazon Web Services account that owns the physical resource. */
		awsAccountId?: string | null;

		/** Amazon Web Services region that owns the physical resource. */
		awsRegion?: string | null;

		/** Defines a logical resource identifier. */
		logicalResourceId?: DescribeAppVersionResourcePostBodyLogicalResourceId;

		/**
		 * Physical identifier of the resource.
		 * Max length: 2048
		 * Min length: 1
		 */
		physicalResourceId?: string | null;

		/** Name of the resource. */
		resourceName?: string | null;
	}
	export interface DescribeAppVersionResourcePostBodyFormProperties {

		/**
		 * Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is: arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html"> Amazon Resource Names (ARNs)</a> in the <i>AWS General Reference</i> guide.
		 * Required
		 */
		appArn: FormControl<string | null | undefined>,

		/**
		 * Resilience Hub application version.
		 * Required
		 */
		appVersion: FormControl<string | null | undefined>,

		/** Amazon Web Services account that owns the physical resource. */
		awsAccountId: FormControl<string | null | undefined>,

		/** Amazon Web Services region that owns the physical resource. */
		awsRegion: FormControl<string | null | undefined>,

		/**
		 * Physical identifier of the resource.
		 * Max length: 2048
		 * Min length: 1
		 */
		physicalResourceId: FormControl<string | null | undefined>,

		/** Name of the resource. */
		resourceName: FormControl<string | null | undefined>,
	}
	export function CreateDescribeAppVersionResourcePostBodyFormGroup() {
		return new FormGroup<DescribeAppVersionResourcePostBodyFormProperties>({
			appArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^arn:(aws|aws-cn|aws-iso|aws-iso-[a-z]{1}|aws-us-gov):[A-Za-z0-9][A-Za-z0-9_/.-]{0,62}:([a-z]{2}-((iso[a-z]{0,1}-)|(gov-)){0,1}[a-z]+-[0-9]):[0-9]{12}:[A-Za-z0-9/][A-Za-z0-9:_/+.-]{0,1023}$')]),
			appVersion: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^\S{1,50}$')]),
			awsAccountId: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[0-9]{12}$')]),
			awsRegion: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[a-z]{2}-((iso[a-z]{0,1}-)|(gov-)){0,1}[a-z]+-[0-9]$')]),
			physicalResourceId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2048)]),
			resourceName: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[A-Za-z0-9][A-Za-z0-9_\-]{1,59}$')]),
		});

	}

	export interface DescribeAppVersionResourcePostBodyLogicalResourceId {
		eksSourceName?: string;
		identifier?: string;
		logicalStackName?: string;
		resourceGroupName?: string;
		terraformSourceName?: string;
	}
	export interface DescribeAppVersionResourcePostBodyLogicalResourceIdFormProperties {
		eksSourceName: FormControl<string | null | undefined>,
		identifier: FormControl<string | null | undefined>,
		logicalStackName: FormControl<string | null | undefined>,
		resourceGroupName: FormControl<string | null | undefined>,
		terraformSourceName: FormControl<string | null | undefined>,
	}
	export function CreateDescribeAppVersionResourcePostBodyLogicalResourceIdFormGroup() {
		return new FormGroup<DescribeAppVersionResourcePostBodyLogicalResourceIdFormProperties>({
			eksSourceName: new FormControl<string | null | undefined>(undefined),
			identifier: new FormControl<string | null | undefined>(undefined),
			logicalStackName: new FormControl<string | null | undefined>(undefined),
			resourceGroupName: new FormControl<string | null | undefined>(undefined),
			terraformSourceName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeAppVersionResourcesResolutionStatusPostBody {

		/**
		 * Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is: arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html"> Amazon Resource Names (ARNs)</a> in the <i>AWS General Reference</i> guide.
		 * Required
		 */
		appArn: string;

		/**
		 * The version of the application.
		 * Required
		 */
		appVersion: string;

		/**
		 * The identifier for a specific resolution.
		 * Max length: 255
		 * Min length: 1
		 */
		resolutionId?: string | null;
	}
	export interface DescribeAppVersionResourcesResolutionStatusPostBodyFormProperties {

		/**
		 * Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is: arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html"> Amazon Resource Names (ARNs)</a> in the <i>AWS General Reference</i> guide.
		 * Required
		 */
		appArn: FormControl<string | null | undefined>,

		/**
		 * The version of the application.
		 * Required
		 */
		appVersion: FormControl<string | null | undefined>,

		/**
		 * The identifier for a specific resolution.
		 * Max length: 255
		 * Min length: 1
		 */
		resolutionId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeAppVersionResourcesResolutionStatusPostBodyFormGroup() {
		return new FormGroup<DescribeAppVersionResourcesResolutionStatusPostBodyFormProperties>({
			appArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^arn:(aws|aws-cn|aws-iso|aws-iso-[a-z]{1}|aws-us-gov):[A-Za-z0-9][A-Za-z0-9_/.-]{0,62}:([a-z]{2}-((iso[a-z]{0,1}-)|(gov-)){0,1}[a-z]+-[0-9]):[0-9]{12}:[A-Za-z0-9/][A-Za-z0-9:_/+.-]{0,1023}$')]),
			appVersion: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^\S{1,50}$')]),
			resolutionId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
		});

	}

	export interface DescribeAppVersionTemplatePostBody {

		/**
		 * Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is: arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html"> Amazon Resource Names (ARNs)</a> in the <i>AWS General Reference</i> guide.
		 * Required
		 */
		appArn: string;

		/**
		 * The version of the application.
		 * Required
		 */
		appVersion: string;
	}
	export interface DescribeAppVersionTemplatePostBodyFormProperties {

		/**
		 * Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is: arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html"> Amazon Resource Names (ARNs)</a> in the <i>AWS General Reference</i> guide.
		 * Required
		 */
		appArn: FormControl<string | null | undefined>,

		/**
		 * The version of the application.
		 * Required
		 */
		appVersion: FormControl<string | null | undefined>,
	}
	export function CreateDescribeAppVersionTemplatePostBodyFormGroup() {
		return new FormGroup<DescribeAppVersionTemplatePostBodyFormProperties>({
			appArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^arn:(aws|aws-cn|aws-iso|aws-iso-[a-z]{1}|aws-us-gov):[A-Za-z0-9][A-Za-z0-9_/.-]{0,62}:([a-z]{2}-((iso[a-z]{0,1}-)|(gov-)){0,1}[a-z]+-[0-9]):[0-9]{12}:[A-Za-z0-9/][A-Za-z0-9:_/+.-]{0,1023}$')]),
			appVersion: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^\S{1,50}$')]),
		});

	}

	export interface DescribeDraftAppVersionResourcesImportStatusPostBody {

		/**
		 * Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is: arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html"> Amazon Resource Names (ARNs)</a> in the <i>AWS General Reference</i> guide.
		 * Required
		 */
		appArn: string;
	}
	export interface DescribeDraftAppVersionResourcesImportStatusPostBodyFormProperties {

		/**
		 * Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is: arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html"> Amazon Resource Names (ARNs)</a> in the <i>AWS General Reference</i> guide.
		 * Required
		 */
		appArn: FormControl<string | null | undefined>,
	}
	export function CreateDescribeDraftAppVersionResourcesImportStatusPostBodyFormGroup() {
		return new FormGroup<DescribeDraftAppVersionResourcesImportStatusPostBodyFormProperties>({
			appArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^arn:(aws|aws-cn|aws-iso|aws-iso-[a-z]{1}|aws-us-gov):[A-Za-z0-9][A-Za-z0-9_/.-]{0,62}:([a-z]{2}-((iso[a-z]{0,1}-)|(gov-)){0,1}[a-z]+-[0-9]):[0-9]{12}:[A-Za-z0-9/][A-Za-z0-9:_/+.-]{0,1023}$')]),
		});

	}

	export interface DescribeResiliencyPolicyPostBody {

		/**
		 * Amazon Resource Name (ARN) of the resiliency policy. The format for this ARN is: arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:resiliency-policy/<code>policy-id</code>. For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html"> Amazon Resource Names (ARNs)</a> in the <i>AWS General Reference</i> guide.
		 * Required
		 */
		policyArn: string;
	}
	export interface DescribeResiliencyPolicyPostBodyFormProperties {

		/**
		 * Amazon Resource Name (ARN) of the resiliency policy. The format for this ARN is: arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:resiliency-policy/<code>policy-id</code>. For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html"> Amazon Resource Names (ARNs)</a> in the <i>AWS General Reference</i> guide.
		 * Required
		 */
		policyArn: FormControl<string | null | undefined>,
	}
	export function CreateDescribeResiliencyPolicyPostBodyFormGroup() {
		return new FormGroup<DescribeResiliencyPolicyPostBodyFormProperties>({
			policyArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^arn:(aws|aws-cn|aws-iso|aws-iso-[a-z]{1}|aws-us-gov):[A-Za-z0-9][A-Za-z0-9_/.-]{0,62}:([a-z]{2}-((iso[a-z]{0,1}-)|(gov-)){0,1}[a-z]+-[0-9]):[0-9]{12}:[A-Za-z0-9/][A-Za-z0-9:_/+.-]{0,1023}$')]),
		});

	}

	export interface ImportResourcesToDraftAppVersionPostBody {

		/**
		 * Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is: arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html"> Amazon Resource Names (ARNs)</a> in the <i>AWS General Reference</i> guide.
		 * Required
		 */
		appArn: string;

		/** The input sources of the Amazon Elastic Kubernetes Service resources you need to import. */
		eksSources?: Array<EksSource>;

		/** The import strategy you would like to set to import resources into Resilience Hub application. */
		importStrategy?: ResourceImportStrategyType | null;

		/** The Amazon Resource Names (ARNs) for the resources. */
		sourceArns?: Array<string>;

		/** A list of terraform file s3 URLs you need to import. */
		terraformSources?: Array<TerraformSource>;
	}
	export interface ImportResourcesToDraftAppVersionPostBodyFormProperties {

		/**
		 * Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is: arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html"> Amazon Resource Names (ARNs)</a> in the <i>AWS General Reference</i> guide.
		 * Required
		 */
		appArn: FormControl<string | null | undefined>,

		/** The import strategy you would like to set to import resources into Resilience Hub application. */
		importStrategy: FormControl<ResourceImportStrategyType | null | undefined>,
	}
	export function CreateImportResourcesToDraftAppVersionPostBodyFormGroup() {
		return new FormGroup<ImportResourcesToDraftAppVersionPostBodyFormProperties>({
			appArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^arn:(aws|aws-cn|aws-iso|aws-iso-[a-z]{1}|aws-us-gov):[A-Za-z0-9][A-Za-z0-9_/.-]{0,62}:([a-z]{2}-((iso[a-z]{0,1}-)|(gov-)){0,1}[a-z]+-[0-9]):[0-9]{12}:[A-Za-z0-9/][A-Za-z0-9:_/+.-]{0,1023}$')]),
			importStrategy: new FormControl<ResourceImportStrategyType | null | undefined>(undefined),
		});

	}

	export interface ListAlarmRecommendationsPostBody {

		/**
		 * Amazon Resource Name (ARN) of the assessment. The format for this ARN is: arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app-assessment/<code>app-id</code>. For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html"> Amazon Resource Names (ARNs)</a> in the <i>AWS General Reference</i> guide.
		 * Required
		 */
		assessmentArn: string;

		/**
		 * Maximum number of results to include in the response. If more results exist than the specified <code>MaxResults</code> value, a token is included in the response so that the remaining results can be retrieved.
		 * Minimum: 1
		 * Maximum: 100
		 */
		maxResults?: number | null;

		/** Null, or the token from a previous call to get the next set of results. */
		nextToken?: string | null;
	}
	export interface ListAlarmRecommendationsPostBodyFormProperties {

		/**
		 * Amazon Resource Name (ARN) of the assessment. The format for this ARN is: arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app-assessment/<code>app-id</code>. For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html"> Amazon Resource Names (ARNs)</a> in the <i>AWS General Reference</i> guide.
		 * Required
		 */
		assessmentArn: FormControl<string | null | undefined>,

		/**
		 * Maximum number of results to include in the response. If more results exist than the specified <code>MaxResults</code> value, a token is included in the response so that the remaining results can be retrieved.
		 * Minimum: 1
		 * Maximum: 100
		 */
		maxResults: FormControl<number | null | undefined>,

		/** Null, or the token from a previous call to get the next set of results. */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListAlarmRecommendationsPostBodyFormGroup() {
		return new FormGroup<ListAlarmRecommendationsPostBodyFormProperties>({
			assessmentArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^arn:(aws|aws-cn|aws-iso|aws-iso-[a-z]{1}|aws-us-gov):[A-Za-z0-9][A-Za-z0-9_/.-]{0,62}:([a-z]{2}-((iso[a-z]{0,1}-)|(gov-)){0,1}[a-z]+-[0-9]):[0-9]{12}:[A-Za-z0-9/][A-Za-z0-9:_/+.-]{0,1023}$')]),
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^\S{1,2000}$')]),
		});

	}

	export interface ListAppAssessmentComplianceDriftsPostBody {

		/**
		 * Amazon Resource Name (ARN) of the assessment. The format for this ARN is: arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app-assessment/<code>app-id</code>. For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html"> Amazon Resource Names (ARNs)</a> in the <i>AWS General Reference</i> guide.
		 * Required
		 */
		assessmentArn: string;

		/**
		 * Indicates the maximum number of applications requested.
		 * Minimum: 1
		 * Maximum: 100
		 */
		maxResults?: number | null;

		/** Indicates the unique token number of the next application to be checked for compliance and regulatory requirements from the list of applications. */
		nextToken?: string | null;
	}
	export interface ListAppAssessmentComplianceDriftsPostBodyFormProperties {

		/**
		 * Amazon Resource Name (ARN) of the assessment. The format for this ARN is: arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app-assessment/<code>app-id</code>. For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html"> Amazon Resource Names (ARNs)</a> in the <i>AWS General Reference</i> guide.
		 * Required
		 */
		assessmentArn: FormControl<string | null | undefined>,

		/**
		 * Indicates the maximum number of applications requested.
		 * Minimum: 1
		 * Maximum: 100
		 */
		maxResults: FormControl<number | null | undefined>,

		/** Indicates the unique token number of the next application to be checked for compliance and regulatory requirements from the list of applications. */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListAppAssessmentComplianceDriftsPostBodyFormGroup() {
		return new FormGroup<ListAppAssessmentComplianceDriftsPostBodyFormProperties>({
			assessmentArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^arn:(aws|aws-cn|aws-iso|aws-iso-[a-z]{1}|aws-us-gov):[A-Za-z0-9][A-Za-z0-9_/.-]{0,62}:([a-z]{2}-((iso[a-z]{0,1}-)|(gov-)){0,1}[a-z]+-[0-9]):[0-9]{12}:[A-Za-z0-9/][A-Za-z0-9:_/+.-]{0,1023}$')]),
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^\S{1,2000}$')]),
		});

	}

	export interface ListAppComponentCompliancesPostBody {

		/**
		 * Amazon Resource Name (ARN) of the assessment. The format for this ARN is: arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app-assessment/<code>app-id</code>. For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html"> Amazon Resource Names (ARNs)</a> in the <i>AWS General Reference</i> guide.
		 * Required
		 */
		assessmentArn: string;

		/**
		 * Maximum number of results to include in the response. If more results exist than the specified <code>MaxResults</code> value, a token is included in the response so that the remaining results can be retrieved.
		 * Minimum: 1
		 * Maximum: 100
		 */
		maxResults?: number | null;

		/** Null, or the token from a previous call to get the next set of results. */
		nextToken?: string | null;
	}
	export interface ListAppComponentCompliancesPostBodyFormProperties {

		/**
		 * Amazon Resource Name (ARN) of the assessment. The format for this ARN is: arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app-assessment/<code>app-id</code>. For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html"> Amazon Resource Names (ARNs)</a> in the <i>AWS General Reference</i> guide.
		 * Required
		 */
		assessmentArn: FormControl<string | null | undefined>,

		/**
		 * Maximum number of results to include in the response. If more results exist than the specified <code>MaxResults</code> value, a token is included in the response so that the remaining results can be retrieved.
		 * Minimum: 1
		 * Maximum: 100
		 */
		maxResults: FormControl<number | null | undefined>,

		/** Null, or the token from a previous call to get the next set of results. */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListAppComponentCompliancesPostBodyFormGroup() {
		return new FormGroup<ListAppComponentCompliancesPostBodyFormProperties>({
			assessmentArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^arn:(aws|aws-cn|aws-iso|aws-iso-[a-z]{1}|aws-us-gov):[A-Za-z0-9][A-Za-z0-9_/.-]{0,62}:([a-z]{2}-((iso[a-z]{0,1}-)|(gov-)){0,1}[a-z]+-[0-9]):[0-9]{12}:[A-Za-z0-9/][A-Za-z0-9:_/+.-]{0,1023}$')]),
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^\S{1,2000}$')]),
		});

	}

	export interface ListAppComponentRecommendationsPostBody {

		/**
		 * Amazon Resource Name (ARN) of the assessment. The format for this ARN is: arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app-assessment/<code>app-id</code>. For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html"> Amazon Resource Names (ARNs)</a> in the <i>AWS General Reference</i> guide.
		 * Required
		 */
		assessmentArn: string;

		/**
		 * Maximum number of results to include in the response. If more results exist than the specified <code>MaxResults</code> value, a token is included in the response so that the remaining results can be retrieved.
		 * Minimum: 1
		 * Maximum: 100
		 */
		maxResults?: number | null;

		/** Null, or the token from a previous call to get the next set of results. */
		nextToken?: string | null;
	}
	export interface ListAppComponentRecommendationsPostBodyFormProperties {

		/**
		 * Amazon Resource Name (ARN) of the assessment. The format for this ARN is: arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app-assessment/<code>app-id</code>. For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html"> Amazon Resource Names (ARNs)</a> in the <i>AWS General Reference</i> guide.
		 * Required
		 */
		assessmentArn: FormControl<string | null | undefined>,

		/**
		 * Maximum number of results to include in the response. If more results exist than the specified <code>MaxResults</code> value, a token is included in the response so that the remaining results can be retrieved.
		 * Minimum: 1
		 * Maximum: 100
		 */
		maxResults: FormControl<number | null | undefined>,

		/** Null, or the token from a previous call to get the next set of results. */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListAppComponentRecommendationsPostBodyFormGroup() {
		return new FormGroup<ListAppComponentRecommendationsPostBodyFormProperties>({
			assessmentArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^arn:(aws|aws-cn|aws-iso|aws-iso-[a-z]{1}|aws-us-gov):[A-Za-z0-9][A-Za-z0-9_/.-]{0,62}:([a-z]{2}-((iso[a-z]{0,1}-)|(gov-)){0,1}[a-z]+-[0-9]):[0-9]{12}:[A-Za-z0-9/][A-Za-z0-9:_/+.-]{0,1023}$')]),
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^\S{1,2000}$')]),
		});

	}

	export interface ListAppInputSourcesPostBody {

		/**
		 * Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is: arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html"> Amazon Resource Names (ARNs)</a> in the <i>AWS General Reference</i> guide.
		 * Required
		 */
		appArn: string;

		/**
		 * Resilience Hub application version.
		 * Required
		 */
		appVersion: string;

		/**
		 * Maximum number of input sources to be displayed per Resilience Hub application.
		 * Minimum: 1
		 * Maximum: 100
		 */
		maxResults?: number | null;

		/** Null, or the token from a previous call to get the next set of results. */
		nextToken?: string | null;
	}
	export interface ListAppInputSourcesPostBodyFormProperties {

		/**
		 * Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is: arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html"> Amazon Resource Names (ARNs)</a> in the <i>AWS General Reference</i> guide.
		 * Required
		 */
		appArn: FormControl<string | null | undefined>,

		/**
		 * Resilience Hub application version.
		 * Required
		 */
		appVersion: FormControl<string | null | undefined>,

		/**
		 * Maximum number of input sources to be displayed per Resilience Hub application.
		 * Minimum: 1
		 * Maximum: 100
		 */
		maxResults: FormControl<number | null | undefined>,

		/** Null, or the token from a previous call to get the next set of results. */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListAppInputSourcesPostBodyFormGroup() {
		return new FormGroup<ListAppInputSourcesPostBodyFormProperties>({
			appArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^arn:(aws|aws-cn|aws-iso|aws-iso-[a-z]{1}|aws-us-gov):[A-Za-z0-9][A-Za-z0-9_/.-]{0,62}:([a-z]{2}-((iso[a-z]{0,1}-)|(gov-)){0,1}[a-z]+-[0-9]):[0-9]{12}:[A-Za-z0-9/][A-Za-z0-9:_/+.-]{0,1023}$')]),
			appVersion: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^\S{1,50}$')]),
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^\S{1,2000}$')]),
		});

	}

	export interface ListAppVersionAppComponentsPostBody {

		/**
		 * Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is: arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html"> Amazon Resource Names (ARNs)</a> in the <i>AWS General Reference</i> guide.
		 * Required
		 */
		appArn: string;

		/**
		 * Version of the Application Component.
		 * Required
		 */
		appVersion: string;

		/**
		 * Maximum number of Application Components to be displayed per Resilience Hub application version.
		 * Minimum: 1
		 * Maximum: 100
		 */
		maxResults?: number | null;

		/** Null, or the token from a previous call to get the next set of results. */
		nextToken?: string | null;
	}
	export interface ListAppVersionAppComponentsPostBodyFormProperties {

		/**
		 * Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is: arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html"> Amazon Resource Names (ARNs)</a> in the <i>AWS General Reference</i> guide.
		 * Required
		 */
		appArn: FormControl<string | null | undefined>,

		/**
		 * Version of the Application Component.
		 * Required
		 */
		appVersion: FormControl<string | null | undefined>,

		/**
		 * Maximum number of Application Components to be displayed per Resilience Hub application version.
		 * Minimum: 1
		 * Maximum: 100
		 */
		maxResults: FormControl<number | null | undefined>,

		/** Null, or the token from a previous call to get the next set of results. */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListAppVersionAppComponentsPostBodyFormGroup() {
		return new FormGroup<ListAppVersionAppComponentsPostBodyFormProperties>({
			appArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^arn:(aws|aws-cn|aws-iso|aws-iso-[a-z]{1}|aws-us-gov):[A-Za-z0-9][A-Za-z0-9_/.-]{0,62}:([a-z]{2}-((iso[a-z]{0,1}-)|(gov-)){0,1}[a-z]+-[0-9]):[0-9]{12}:[A-Za-z0-9/][A-Za-z0-9:_/+.-]{0,1023}$')]),
			appVersion: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^\S{1,50}$')]),
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^\S{1,2000}$')]),
		});

	}

	export interface ListAppVersionResourceMappingsPostBody {

		/**
		 * Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is: arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html"> Amazon Resource Names (ARNs)</a> in the <i>AWS General Reference</i> guide.
		 * Required
		 */
		appArn: string;

		/**
		 * The version of the application.
		 * Required
		 */
		appVersion: string;

		/**
		 * Maximum number of results to include in the response. If more results exist than the specified <code>MaxResults</code> value, a token is included in the response so that the remaining results can be retrieved.
		 * Minimum: 1
		 * Maximum: 100
		 */
		maxResults?: number | null;

		/** Null, or the token from a previous call to get the next set of results. */
		nextToken?: string | null;
	}
	export interface ListAppVersionResourceMappingsPostBodyFormProperties {

		/**
		 * Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is: arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html"> Amazon Resource Names (ARNs)</a> in the <i>AWS General Reference</i> guide.
		 * Required
		 */
		appArn: FormControl<string | null | undefined>,

		/**
		 * The version of the application.
		 * Required
		 */
		appVersion: FormControl<string | null | undefined>,

		/**
		 * Maximum number of results to include in the response. If more results exist than the specified <code>MaxResults</code> value, a token is included in the response so that the remaining results can be retrieved.
		 * Minimum: 1
		 * Maximum: 100
		 */
		maxResults: FormControl<number | null | undefined>,

		/** Null, or the token from a previous call to get the next set of results. */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListAppVersionResourceMappingsPostBodyFormGroup() {
		return new FormGroup<ListAppVersionResourceMappingsPostBodyFormProperties>({
			appArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^arn:(aws|aws-cn|aws-iso|aws-iso-[a-z]{1}|aws-us-gov):[A-Za-z0-9][A-Za-z0-9_/.-]{0,62}:([a-z]{2}-((iso[a-z]{0,1}-)|(gov-)){0,1}[a-z]+-[0-9]):[0-9]{12}:[A-Za-z0-9/][A-Za-z0-9:_/+.-]{0,1023}$')]),
			appVersion: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^\S{1,50}$')]),
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^\S{1,2000}$')]),
		});

	}

	export interface ListAppVersionResourcesPostBody {

		/**
		 * Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is: arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html"> Amazon Resource Names (ARNs)</a> in the <i>AWS General Reference</i> guide.
		 * Required
		 */
		appArn: string;

		/**
		 * The version of the application.
		 * Required
		 */
		appVersion: string;

		/**
		 * Maximum number of results to include in the response. If more results exist than the specified <code>MaxResults</code> value, a token is included in the response so that the remaining results can be retrieved.
		 * Minimum: 1
		 * Maximum: 100
		 */
		maxResults?: number | null;

		/** Null, or the token from a previous call to get the next set of results. */
		nextToken?: string | null;

		/**
		 * The identifier for a specific resolution.
		 * Max length: 255
		 * Min length: 1
		 */
		resolutionId?: string | null;
	}
	export interface ListAppVersionResourcesPostBodyFormProperties {

		/**
		 * Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is: arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html"> Amazon Resource Names (ARNs)</a> in the <i>AWS General Reference</i> guide.
		 * Required
		 */
		appArn: FormControl<string | null | undefined>,

		/**
		 * The version of the application.
		 * Required
		 */
		appVersion: FormControl<string | null | undefined>,

		/**
		 * Maximum number of results to include in the response. If more results exist than the specified <code>MaxResults</code> value, a token is included in the response so that the remaining results can be retrieved.
		 * Minimum: 1
		 * Maximum: 100
		 */
		maxResults: FormControl<number | null | undefined>,

		/** Null, or the token from a previous call to get the next set of results. */
		nextToken: FormControl<string | null | undefined>,

		/**
		 * The identifier for a specific resolution.
		 * Max length: 255
		 * Min length: 1
		 */
		resolutionId: FormControl<string | null | undefined>,
	}
	export function CreateListAppVersionResourcesPostBodyFormGroup() {
		return new FormGroup<ListAppVersionResourcesPostBodyFormProperties>({
			appArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^arn:(aws|aws-cn|aws-iso|aws-iso-[a-z]{1}|aws-us-gov):[A-Za-z0-9][A-Za-z0-9_/.-]{0,62}:([a-z]{2}-((iso[a-z]{0,1}-)|(gov-)){0,1}[a-z]+-[0-9]):[0-9]{12}:[A-Za-z0-9/][A-Za-z0-9:_/+.-]{0,1023}$')]),
			appVersion: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^\S{1,50}$')]),
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^\S{1,2000}$')]),
			resolutionId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
		});

	}

	export interface ListAppVersionsPostBody {

		/**
		 * Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is: arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html"> Amazon Resource Names (ARNs)</a> in the <i>AWS General Reference</i> guide.
		 * Required
		 */
		appArn: string;

		/** Upper limit of the time range to filter the application versions. */
		endTime?: Date | null;

		/**
		 * Maximum number of results to include in the response. If more results exist than the specified <code>MaxResults</code> value, a token is included in the response so that the remaining results can be retrieved.
		 * Minimum: 1
		 * Maximum: 100
		 */
		maxResults?: number | null;

		/** Null, or the token from a previous call to get the next set of results. */
		nextToken?: string | null;

		/** Lower limit of the time range to filter the application versions. */
		startTime?: Date | null;
	}
	export interface ListAppVersionsPostBodyFormProperties {

		/**
		 * Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is: arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html"> Amazon Resource Names (ARNs)</a> in the <i>AWS General Reference</i> guide.
		 * Required
		 */
		appArn: FormControl<string | null | undefined>,

		/** Upper limit of the time range to filter the application versions. */
		endTime: FormControl<Date | null | undefined>,

		/**
		 * Maximum number of results to include in the response. If more results exist than the specified <code>MaxResults</code> value, a token is included in the response so that the remaining results can be retrieved.
		 * Minimum: 1
		 * Maximum: 100
		 */
		maxResults: FormControl<number | null | undefined>,

		/** Null, or the token from a previous call to get the next set of results. */
		nextToken: FormControl<string | null | undefined>,

		/** Lower limit of the time range to filter the application versions. */
		startTime: FormControl<Date | null | undefined>,
	}
	export function CreateListAppVersionsPostBodyFormGroup() {
		return new FormGroup<ListAppVersionsPostBodyFormProperties>({
			appArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^arn:(aws|aws-cn|aws-iso|aws-iso-[a-z]{1}|aws-us-gov):[A-Za-z0-9][A-Za-z0-9_/.-]{0,62}:([a-z]{2}-((iso[a-z]{0,1}-)|(gov-)){0,1}[a-z]+-[0-9]):[0-9]{12}:[A-Za-z0-9/][A-Za-z0-9:_/+.-]{0,1023}$')]),
			endTime: new FormControl<Date | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^\S{1,2000}$')]),
			startTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListSopRecommendationsPostBody {

		/**
		 * Amazon Resource Name (ARN) of the assessment. The format for this ARN is: arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app-assessment/<code>app-id</code>. For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html"> Amazon Resource Names (ARNs)</a> in the <i>AWS General Reference</i> guide.
		 * Required
		 */
		assessmentArn: string;

		/**
		 * Maximum number of results to include in the response. If more results exist than the specified <code>MaxResults</code> value, a token is included in the response so that the remaining results can be retrieved.
		 * Minimum: 1
		 * Maximum: 100
		 */
		maxResults?: number | null;

		/** Null, or the token from a previous call to get the next set of results. */
		nextToken?: string | null;
	}
	export interface ListSopRecommendationsPostBodyFormProperties {

		/**
		 * Amazon Resource Name (ARN) of the assessment. The format for this ARN is: arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app-assessment/<code>app-id</code>. For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html"> Amazon Resource Names (ARNs)</a> in the <i>AWS General Reference</i> guide.
		 * Required
		 */
		assessmentArn: FormControl<string | null | undefined>,

		/**
		 * Maximum number of results to include in the response. If more results exist than the specified <code>MaxResults</code> value, a token is included in the response so that the remaining results can be retrieved.
		 * Minimum: 1
		 * Maximum: 100
		 */
		maxResults: FormControl<number | null | undefined>,

		/** Null, or the token from a previous call to get the next set of results. */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListSopRecommendationsPostBodyFormGroup() {
		return new FormGroup<ListSopRecommendationsPostBodyFormProperties>({
			assessmentArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^arn:(aws|aws-cn|aws-iso|aws-iso-[a-z]{1}|aws-us-gov):[A-Za-z0-9][A-Za-z0-9_/.-]{0,62}:([a-z]{2}-((iso[a-z]{0,1}-)|(gov-)){0,1}[a-z]+-[0-9]):[0-9]{12}:[A-Za-z0-9/][A-Za-z0-9:_/+.-]{0,1023}$')]),
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^\S{1,2000}$')]),
		});

	}

	export interface TagResourcePostBody {

		/**
		 * The tags to assign to the resource. Each tag consists of a key/value pair.
		 * Required
		 */
		tags: {[id: string]: string };
	}
	export interface TagResourcePostBodyFormProperties {

		/**
		 * The tags to assign to the resource. Each tag consists of a key/value pair.
		 * Required
		 */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateTagResourcePostBodyFormGroup() {
		return new FormGroup<TagResourcePostBodyFormProperties>({
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListTestRecommendationsPostBody {

		/**
		 * Amazon Resource Name (ARN) of the assessment. The format for this ARN is: arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app-assessment/<code>app-id</code>. For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html"> Amazon Resource Names (ARNs)</a> in the <i>AWS General Reference</i> guide.
		 * Required
		 */
		assessmentArn: string;

		/**
		 * Maximum number of results to include in the response. If more results exist than the specified <code>MaxResults</code> value, a token is included in the response so that the remaining results can be retrieved.
		 * Minimum: 1
		 * Maximum: 100
		 */
		maxResults?: number | null;

		/** Null, or the token from a previous call to get the next set of results. */
		nextToken?: string | null;
	}
	export interface ListTestRecommendationsPostBodyFormProperties {

		/**
		 * Amazon Resource Name (ARN) of the assessment. The format for this ARN is: arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app-assessment/<code>app-id</code>. For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html"> Amazon Resource Names (ARNs)</a> in the <i>AWS General Reference</i> guide.
		 * Required
		 */
		assessmentArn: FormControl<string | null | undefined>,

		/**
		 * Maximum number of results to include in the response. If more results exist than the specified <code>MaxResults</code> value, a token is included in the response so that the remaining results can be retrieved.
		 * Minimum: 1
		 * Maximum: 100
		 */
		maxResults: FormControl<number | null | undefined>,

		/** Null, or the token from a previous call to get the next set of results. */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTestRecommendationsPostBodyFormGroup() {
		return new FormGroup<ListTestRecommendationsPostBodyFormProperties>({
			assessmentArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^arn:(aws|aws-cn|aws-iso|aws-iso-[a-z]{1}|aws-us-gov):[A-Za-z0-9][A-Za-z0-9_/.-]{0,62}:([a-z]{2}-((iso[a-z]{0,1}-)|(gov-)){0,1}[a-z]+-[0-9]):[0-9]{12}:[A-Za-z0-9/][A-Za-z0-9:_/+.-]{0,1023}$')]),
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^\S{1,2000}$')]),
		});

	}

	export interface ListUnsupportedAppVersionResourcesPostBody {

		/**
		 * Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is: arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html"> Amazon Resource Names (ARNs)</a> in the <i>AWS General Reference</i> guide.
		 * Required
		 */
		appArn: string;

		/**
		 * The version of the application.
		 * Required
		 */
		appVersion: string;

		/**
		 * Maximum number of results to include in the response. If more results exist than the specified <code>MaxResults</code> value, a token is included in the response so that the remaining results can be retrieved.
		 * Minimum: 1
		 * Maximum: 100
		 */
		maxResults?: number | null;

		/** Null, or the token from a previous call to get the next set of results. */
		nextToken?: string | null;

		/**
		 * The identifier for a specific resolution.
		 * Max length: 255
		 * Min length: 1
		 */
		resolutionId?: string | null;
	}
	export interface ListUnsupportedAppVersionResourcesPostBodyFormProperties {

		/**
		 * Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is: arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html"> Amazon Resource Names (ARNs)</a> in the <i>AWS General Reference</i> guide.
		 * Required
		 */
		appArn: FormControl<string | null | undefined>,

		/**
		 * The version of the application.
		 * Required
		 */
		appVersion: FormControl<string | null | undefined>,

		/**
		 * Maximum number of results to include in the response. If more results exist than the specified <code>MaxResults</code> value, a token is included in the response so that the remaining results can be retrieved.
		 * Minimum: 1
		 * Maximum: 100
		 */
		maxResults: FormControl<number | null | undefined>,

		/** Null, or the token from a previous call to get the next set of results. */
		nextToken: FormControl<string | null | undefined>,

		/**
		 * The identifier for a specific resolution.
		 * Max length: 255
		 * Min length: 1
		 */
		resolutionId: FormControl<string | null | undefined>,
	}
	export function CreateListUnsupportedAppVersionResourcesPostBodyFormGroup() {
		return new FormGroup<ListUnsupportedAppVersionResourcesPostBodyFormProperties>({
			appArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^arn:(aws|aws-cn|aws-iso|aws-iso-[a-z]{1}|aws-us-gov):[A-Za-z0-9][A-Za-z0-9_/.-]{0,62}:([a-z]{2}-((iso[a-z]{0,1}-)|(gov-)){0,1}[a-z]+-[0-9]):[0-9]{12}:[A-Za-z0-9/][A-Za-z0-9:_/+.-]{0,1023}$')]),
			appVersion: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^\S{1,50}$')]),
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^\S{1,2000}$')]),
			resolutionId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
		});

	}

	export interface PublishAppVersionPostBody {

		/**
		 * Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is: arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html"> Amazon Resource Names (ARNs)</a> in the <i>AWS General Reference</i> guide.
		 * Required
		 */
		appArn: string;

		/** Name of the application version. */
		versionName?: string | null;
	}
	export interface PublishAppVersionPostBodyFormProperties {

		/**
		 * Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is: arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html"> Amazon Resource Names (ARNs)</a> in the <i>AWS General Reference</i> guide.
		 * Required
		 */
		appArn: FormControl<string | null | undefined>,

		/** Name of the application version. */
		versionName: FormControl<string | null | undefined>,
	}
	export function CreatePublishAppVersionPostBodyFormGroup() {
		return new FormGroup<PublishAppVersionPostBodyFormProperties>({
			appArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^arn:(aws|aws-cn|aws-iso|aws-iso-[a-z]{1}|aws-us-gov):[A-Za-z0-9][A-Za-z0-9_/.-]{0,62}:([a-z]{2}-((iso[a-z]{0,1}-)|(gov-)){0,1}[a-z]+-[0-9]):[0-9]{12}:[A-Za-z0-9/][A-Za-z0-9:_/+.-]{0,1023}$')]),
			versionName: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^\S{1,50}$')]),
		});

	}

	export interface PutDraftAppVersionTemplatePostBody {

		/**
		 * Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is: arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html"> Amazon Resource Names (ARNs)</a> in the <i>AWS General Reference</i> guide.
		 * Required
		 */
		appArn: string;

		/**
		 * <p>A JSON string that provides information about your application structure. To learn more about the <code>appTemplateBody</code> template, see the sample template provided in the <i>Examples</i> section.</p> <p>The <code>appTemplateBody</code> JSON string has the following structure:</p> <ul> <li> <p> <b> <code>resources</code> </b> </p> <p>The list of logical resources that must be included in the Resilience Hub application.</p> <p>Type: Array</p> <note> <p>Don't add the resources that you want to exclude.</p> </note> <p>Each <code>resources</code> array item includes the following fields:</p> <ul> <li> <p> <i> <code>logicalResourceId</code> </i> </p> <p>Logical identifier of the resource.</p> <p>Type: Object</p> <p>Each <code>logicalResourceId</code> object includes the following fields:</p> <ul> <li> <p> <code>identifier</code> </p> <p>Identifier of the resource.</p> <p>Type: String</p> </li> <li> <p> <code>logicalStackName</code> </p> <p>The name of the CloudFormation stack this resource belongs to.</p> <p>Type: String</p> </li> <li> <p> <code>resourceGroupName</code> </p> <p>The name of the resource group this resource belongs to.</p> <p>Type: String</p> </li> <li> <p> <code>terraformSourceName</code> </p> <p>The name of the Terraform S3 state file this resource belongs to.</p> <p>Type: String</p> </li> <li> <p> <code>eksSourceName</code> </p> <p>Name of the Amazon Elastic Kubernetes Service cluster and namespace this resource belongs to.</p> <note> <p>This parameter accepts values in "eks-cluster/namespace" format.</p> </note> <p>Type: String</p> </li> </ul> </li> <li> <p> <i> <code>type</code> </i> </p> <p>The type of resource.</p> <p>Type: string</p> </li> <li> <p> <i> <code>name</code> </i> </p> <p>The name of the resource.</p> <p>Type: String</p> </li> <li> <p> <code>additionalInfo</code> </p> <p>Additional configuration parameters for an Resilience Hub application. If you want to implement <code>additionalInfo</code> through the Resilience Hub console rather than using an API call, see <a href="https://docs.aws.amazon.com/resilience-hub/latest/userguide/app-config-param.html">Configure the application configuration parameters</a>.</p> <note> <p>Currently, this parameter accepts a key-value mapping (in a string format) of only one failover region and one associated account.</p> <p>Key: <code>"failover-regions"</code> </p> <p>Value: <code>"[{"region":"&lt;REGION&gt;", "accounts":[{"id":"&lt;ACCOUNT_ID&gt;"}]}]"</code> </p> </note> </li> </ul> </li> <li> <p> <b> <code>appComponents</code> </b> </p> <p>List of Application Components that this resource belongs to. If an Application Component is not part of the Resilience Hub application, it will be added.</p> <p>Type: Array</p> <p>Each <code>appComponents</code> array item includes the following fields:</p> <ul> <li> <p> <code>name</code> </p> <p>Name of the Application Component.</p> <p>Type: String</p> </li> <li> <p> <code>type</code> </p> <p>Type of Application Component. For more information about the types of Application Component, see <a href="https://docs.aws.amazon.com/resilience-hub/latest/userguide/AppComponent.grouping.html">Grouping resources in an AppComponent</a>.</p> <p>Type: String</p> </li> <li> <p> <code>resourceNames</code> </p> <p>The list of included resources that are assigned to the Application Component.</p> <p>Type: Array of strings</p> </li> <li> <p> <code>additionalInfo</code> </p> <p>Additional configuration parameters for an Resilience Hub application. If you want to implement <code>additionalInfo</code> through the Resilience Hub console rather than using an API call, see <a href="https://docs.aws.amazon.com/resilience-hub/latest/userguide/app-config-param.html">Configure the application configuration parameters</a>.</p> <note> <p>Currently, this parameter accepts a key-value mapping (in a string format) of only one failover region and one associated account.</p> <p>Key: <code>"failover-regions"</code> </p> <p>Value: <code>"[{"region":"&lt;REGION&gt;", "accounts":[{"id":"&lt;ACCOUNT_ID&gt;"}]}]"</code> </p> </note> </li> </ul> </li> <li> <p> <b> <code>excludedResources</code> </b> </p> <p>The list of logical resource identifiers to be excluded from the application.</p> <p>Type: Array</p> <note> <p>Don't add the resources that you want to include.</p> </note> <p>Each <code>excludedResources</code> array item includes the following fields:</p> <ul> <li> <p> <i> <code>logicalResourceIds</code> </i> </p> <p>Logical identifier of the resource.</p> <p>Type: Object</p> <note> <p>You can configure only one of the following fields:</p> <ul> <li> <p> <code>logicalStackName</code> </p> </li> <li> <p> <code>resourceGroupName</code> </p> </li> <li> <p> <code>terraformSourceName</code> </p> </li> <li> <p> <code>eksSourceName</code> </p> </li> </ul> </note> <p>Each <code>logicalResourceIds</code> object includes the following fields:</p> <ul> <li> <p> <code>identifier</code> </p> <p>Identifier of the resource.</p> <p>Type: String</p> </li> <li> <p> <code>logicalStackName</code> </p> <p>The name of the CloudFormation stack this resource belongs to.</p> <p>Type: String</p> </li> <li> <p> <code>resourceGroupName</code> </p> <p>The name of the resource group this resource belongs to.</p> <p>Type: String</p> </li> <li> <p> <code>terraformSourceName</code> </p> <p>The name of the Terraform S3 state file this resource belongs to.</p> <p>Type: String</p> </li> <li> <p> <code>eksSourceName</code> </p> <p>Name of the Amazon Elastic Kubernetes Service cluster and namespace this resource belongs to.</p> <note> <p>This parameter accepts values in "eks-cluster/namespace" format.</p> </note> <p>Type: String</p> </li> </ul> </li> </ul> </li> <li> <p> <b> <code>version</code> </b> </p> <p>Resilience Hub application version.</p> </li> <li> <p> <code>additionalInfo</code> </p> <p>Additional configuration parameters for an Resilience Hub application. If you want to implement <code>additionalInfo</code> through the Resilience Hub console rather than using an API call, see <a href="https://docs.aws.amazon.com/resilience-hub/latest/userguide/app-config-param.html">Configure the application configuration parameters</a>.</p> <note> <p>Currently, this parameter accepts a key-value mapping (in a string format) of only one failover region and one associated account.</p> <p>Key: <code>"failover-regions"</code> </p> <p>Value: <code>"[{"region":"&lt;REGION&gt;", "accounts":[{"id":"&lt;ACCOUNT_ID&gt;"}]}]"</code> </p> </note> </li> </ul>
		 * Required
		 * Max length: 409600
		 * Min length: 0
		 */
		appTemplateBody: string;
	}
	export interface PutDraftAppVersionTemplatePostBodyFormProperties {

		/**
		 * Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is: arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html"> Amazon Resource Names (ARNs)</a> in the <i>AWS General Reference</i> guide.
		 * Required
		 */
		appArn: FormControl<string | null | undefined>,

		/**
		 * <p>A JSON string that provides information about your application structure. To learn more about the <code>appTemplateBody</code> template, see the sample template provided in the <i>Examples</i> section.</p> <p>The <code>appTemplateBody</code> JSON string has the following structure:</p> <ul> <li> <p> <b> <code>resources</code> </b> </p> <p>The list of logical resources that must be included in the Resilience Hub application.</p> <p>Type: Array</p> <note> <p>Don't add the resources that you want to exclude.</p> </note> <p>Each <code>resources</code> array item includes the following fields:</p> <ul> <li> <p> <i> <code>logicalResourceId</code> </i> </p> <p>Logical identifier of the resource.</p> <p>Type: Object</p> <p>Each <code>logicalResourceId</code> object includes the following fields:</p> <ul> <li> <p> <code>identifier</code> </p> <p>Identifier of the resource.</p> <p>Type: String</p> </li> <li> <p> <code>logicalStackName</code> </p> <p>The name of the CloudFormation stack this resource belongs to.</p> <p>Type: String</p> </li> <li> <p> <code>resourceGroupName</code> </p> <p>The name of the resource group this resource belongs to.</p> <p>Type: String</p> </li> <li> <p> <code>terraformSourceName</code> </p> <p>The name of the Terraform S3 state file this resource belongs to.</p> <p>Type: String</p> </li> <li> <p> <code>eksSourceName</code> </p> <p>Name of the Amazon Elastic Kubernetes Service cluster and namespace this resource belongs to.</p> <note> <p>This parameter accepts values in "eks-cluster/namespace" format.</p> </note> <p>Type: String</p> </li> </ul> </li> <li> <p> <i> <code>type</code> </i> </p> <p>The type of resource.</p> <p>Type: string</p> </li> <li> <p> <i> <code>name</code> </i> </p> <p>The name of the resource.</p> <p>Type: String</p> </li> <li> <p> <code>additionalInfo</code> </p> <p>Additional configuration parameters for an Resilience Hub application. If you want to implement <code>additionalInfo</code> through the Resilience Hub console rather than using an API call, see <a href="https://docs.aws.amazon.com/resilience-hub/latest/userguide/app-config-param.html">Configure the application configuration parameters</a>.</p> <note> <p>Currently, this parameter accepts a key-value mapping (in a string format) of only one failover region and one associated account.</p> <p>Key: <code>"failover-regions"</code> </p> <p>Value: <code>"[{"region":"&lt;REGION&gt;", "accounts":[{"id":"&lt;ACCOUNT_ID&gt;"}]}]"</code> </p> </note> </li> </ul> </li> <li> <p> <b> <code>appComponents</code> </b> </p> <p>List of Application Components that this resource belongs to. If an Application Component is not part of the Resilience Hub application, it will be added.</p> <p>Type: Array</p> <p>Each <code>appComponents</code> array item includes the following fields:</p> <ul> <li> <p> <code>name</code> </p> <p>Name of the Application Component.</p> <p>Type: String</p> </li> <li> <p> <code>type</code> </p> <p>Type of Application Component. For more information about the types of Application Component, see <a href="https://docs.aws.amazon.com/resilience-hub/latest/userguide/AppComponent.grouping.html">Grouping resources in an AppComponent</a>.</p> <p>Type: String</p> </li> <li> <p> <code>resourceNames</code> </p> <p>The list of included resources that are assigned to the Application Component.</p> <p>Type: Array of strings</p> </li> <li> <p> <code>additionalInfo</code> </p> <p>Additional configuration parameters for an Resilience Hub application. If you want to implement <code>additionalInfo</code> through the Resilience Hub console rather than using an API call, see <a href="https://docs.aws.amazon.com/resilience-hub/latest/userguide/app-config-param.html">Configure the application configuration parameters</a>.</p> <note> <p>Currently, this parameter accepts a key-value mapping (in a string format) of only one failover region and one associated account.</p> <p>Key: <code>"failover-regions"</code> </p> <p>Value: <code>"[{"region":"&lt;REGION&gt;", "accounts":[{"id":"&lt;ACCOUNT_ID&gt;"}]}]"</code> </p> </note> </li> </ul> </li> <li> <p> <b> <code>excludedResources</code> </b> </p> <p>The list of logical resource identifiers to be excluded from the application.</p> <p>Type: Array</p> <note> <p>Don't add the resources that you want to include.</p> </note> <p>Each <code>excludedResources</code> array item includes the following fields:</p> <ul> <li> <p> <i> <code>logicalResourceIds</code> </i> </p> <p>Logical identifier of the resource.</p> <p>Type: Object</p> <note> <p>You can configure only one of the following fields:</p> <ul> <li> <p> <code>logicalStackName</code> </p> </li> <li> <p> <code>resourceGroupName</code> </p> </li> <li> <p> <code>terraformSourceName</code> </p> </li> <li> <p> <code>eksSourceName</code> </p> </li> </ul> </note> <p>Each <code>logicalResourceIds</code> object includes the following fields:</p> <ul> <li> <p> <code>identifier</code> </p> <p>Identifier of the resource.</p> <p>Type: String</p> </li> <li> <p> <code>logicalStackName</code> </p> <p>The name of the CloudFormation stack this resource belongs to.</p> <p>Type: String</p> </li> <li> <p> <code>resourceGroupName</code> </p> <p>The name of the resource group this resource belongs to.</p> <p>Type: String</p> </li> <li> <p> <code>terraformSourceName</code> </p> <p>The name of the Terraform S3 state file this resource belongs to.</p> <p>Type: String</p> </li> <li> <p> <code>eksSourceName</code> </p> <p>Name of the Amazon Elastic Kubernetes Service cluster and namespace this resource belongs to.</p> <note> <p>This parameter accepts values in "eks-cluster/namespace" format.</p> </note> <p>Type: String</p> </li> </ul> </li> </ul> </li> <li> <p> <b> <code>version</code> </b> </p> <p>Resilience Hub application version.</p> </li> <li> <p> <code>additionalInfo</code> </p> <p>Additional configuration parameters for an Resilience Hub application. If you want to implement <code>additionalInfo</code> through the Resilience Hub console rather than using an API call, see <a href="https://docs.aws.amazon.com/resilience-hub/latest/userguide/app-config-param.html">Configure the application configuration parameters</a>.</p> <note> <p>Currently, this parameter accepts a key-value mapping (in a string format) of only one failover region and one associated account.</p> <p>Key: <code>"failover-regions"</code> </p> <p>Value: <code>"[{"region":"&lt;REGION&gt;", "accounts":[{"id":"&lt;ACCOUNT_ID&gt;"}]}]"</code> </p> </note> </li> </ul>
		 * Required
		 * Max length: 409600
		 * Min length: 0
		 */
		appTemplateBody: FormControl<string | null | undefined>,
	}
	export function CreatePutDraftAppVersionTemplatePostBodyFormGroup() {
		return new FormGroup<PutDraftAppVersionTemplatePostBodyFormProperties>({
			appArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^arn:(aws|aws-cn|aws-iso|aws-iso-[a-z]{1}|aws-us-gov):[A-Za-z0-9][A-Za-z0-9_/.-]{0,62}:([a-z]{2}-((iso[a-z]{0,1}-)|(gov-)){0,1}[a-z]+-[0-9]):[0-9]{12}:[A-Za-z0-9/][A-Za-z0-9:_/+.-]{0,1023}$')]),
			appTemplateBody: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(409600), Validators.pattern('^[\w\s:,-\.\'\/{}\[\]:"\\]+$')]),
		});

	}

	export interface RemoveDraftAppVersionResourceMappingsPostBody {

		/**
		 * Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is: arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html"> Amazon Resource Names (ARNs)</a> in the <i>AWS General Reference</i> guide.
		 * Required
		 */
		appArn: string;

		/** The names of the registered applications you want to remove from the resource mappings. */
		appRegistryAppNames?: Array<string>;

		/** <p>The names of the Amazon Elastic Kubernetes Service clusters and namespaces you want to remove from the resource mappings.</p> <note> <p>This parameter accepts values in "eks-cluster/namespace" format.</p> </note> */
		eksSourceNames?: Array<string>;

		/** The names of the CloudFormation stacks you want to remove from the resource mappings. */
		logicalStackNames?: Array<string>;

		/** The names of the resource groups you want to remove from the resource mappings. */
		resourceGroupNames?: Array<string>;

		/** The names of the resources you want to remove from the resource mappings. */
		resourceNames?: Array<string>;

		/** The names of the Terraform sources you want to remove from the resource mappings. */
		terraformSourceNames?: Array<string>;
	}
	export interface RemoveDraftAppVersionResourceMappingsPostBodyFormProperties {

		/**
		 * Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is: arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html"> Amazon Resource Names (ARNs)</a> in the <i>AWS General Reference</i> guide.
		 * Required
		 */
		appArn: FormControl<string | null | undefined>,
	}
	export function CreateRemoveDraftAppVersionResourceMappingsPostBodyFormGroup() {
		return new FormGroup<RemoveDraftAppVersionResourceMappingsPostBodyFormProperties>({
			appArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^arn:(aws|aws-cn|aws-iso|aws-iso-[a-z]{1}|aws-us-gov):[A-Za-z0-9][A-Za-z0-9_/.-]{0,62}:([a-z]{2}-((iso[a-z]{0,1}-)|(gov-)){0,1}[a-z]+-[0-9]):[0-9]{12}:[A-Za-z0-9/][A-Za-z0-9:_/+.-]{0,1023}$')]),
		});

	}

	export interface ResolveAppVersionResourcesPostBody {

		/**
		 * Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is: arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html"> Amazon Resource Names (ARNs)</a> in the <i>AWS General Reference</i> guide.
		 * Required
		 */
		appArn: string;

		/**
		 * The version of the application.
		 * Required
		 */
		appVersion: string;
	}
	export interface ResolveAppVersionResourcesPostBodyFormProperties {

		/**
		 * Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is: arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html"> Amazon Resource Names (ARNs)</a> in the <i>AWS General Reference</i> guide.
		 * Required
		 */
		appArn: FormControl<string | null | undefined>,

		/**
		 * The version of the application.
		 * Required
		 */
		appVersion: FormControl<string | null | undefined>,
	}
	export function CreateResolveAppVersionResourcesPostBodyFormGroup() {
		return new FormGroup<ResolveAppVersionResourcesPostBodyFormProperties>({
			appArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^arn:(aws|aws-cn|aws-iso|aws-iso-[a-z]{1}|aws-us-gov):[A-Za-z0-9][A-Za-z0-9_/.-]{0,62}:([a-z]{2}-((iso[a-z]{0,1}-)|(gov-)){0,1}[a-z]+-[0-9]):[0-9]{12}:[A-Za-z0-9/][A-Za-z0-9:_/+.-]{0,1023}$')]),
			appVersion: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^\S{1,50}$')]),
		});

	}

	export interface StartAppAssessmentPostBody {

		/**
		 * Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is: arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html"> Amazon Resource Names (ARNs)</a> in the <i>AWS General Reference</i> guide.
		 * Required
		 */
		appArn: string;

		/**
		 * The version of the application.
		 * Required
		 */
		appVersion: string;

		/**
		 * The name for the assessment.
		 * Required
		 */
		assessmentName: string;

		/**
		 * Used for an idempotency token. A client token is a unique, case-sensitive string of up to 64 ASCII characters. You should not reuse the same client token for other API requests.
		 * Max length: 63
		 * Min length: 1
		 */
		clientToken?: string | null;

		/** Tags assigned to the resource. A tag is a label that you assign to an Amazon Web Services resource. Each tag consists of a key/value pair. */
		tags?: {[id: string]: string };
	}
	export interface StartAppAssessmentPostBodyFormProperties {

		/**
		 * Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is: arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html"> Amazon Resource Names (ARNs)</a> in the <i>AWS General Reference</i> guide.
		 * Required
		 */
		appArn: FormControl<string | null | undefined>,

		/**
		 * The version of the application.
		 * Required
		 */
		appVersion: FormControl<string | null | undefined>,

		/**
		 * The name for the assessment.
		 * Required
		 */
		assessmentName: FormControl<string | null | undefined>,

		/**
		 * Used for an idempotency token. A client token is a unique, case-sensitive string of up to 64 ASCII characters. You should not reuse the same client token for other API requests.
		 * Max length: 63
		 * Min length: 1
		 */
		clientToken: FormControl<string | null | undefined>,

		/** Tags assigned to the resource. A tag is a label that you assign to an Amazon Web Services resource. Each tag consists of a key/value pair. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateStartAppAssessmentPostBodyFormGroup() {
		return new FormGroup<StartAppAssessmentPostBodyFormProperties>({
			appArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^arn:(aws|aws-cn|aws-iso|aws-iso-[a-z]{1}|aws-us-gov):[A-Za-z0-9][A-Za-z0-9_/.-]{0,62}:([a-z]{2}-((iso[a-z]{0,1}-)|(gov-)){0,1}[a-z]+-[0-9]):[0-9]{12}:[A-Za-z0-9/][A-Za-z0-9:_/+.-]{0,1023}$')]),
			appVersion: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^\S{1,50}$')]),
			assessmentName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[A-Za-z0-9][A-Za-z0-9_\-]{1,59}$')]),
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(63), Validators.pattern('^[A-za-z0-9_.-]{0,63}$')]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface UpdateAppPostBody {

		/**
		 * Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is: arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html"> Amazon Resource Names (ARNs)</a> in the <i>AWS General Reference</i> guide.
		 * Required
		 */
		appArn: string;

		/** Assessment execution schedule with 'Daily' or 'Disabled' values. */
		assessmentSchedule?: AppAssessmentScheduleType | null;

		/** Specifies if the resiliency policy ARN should be cleared. */
		clearResiliencyPolicyArn?: boolean | null;

		/**
		 * The optional description for an app.
		 * Max length: 500
		 * Min length: 0
		 */
		description?: string | null;

		/**
		 * The list of events you would like to subscribe and get notification for. Currently, Resilience Hub supports notifications only for <b>Drift detected</b> and <b>Scheduled assessment failure</b> events.
		 * Minimum items: 0
		 * Maximum items: 10
		 */
		eventSubscriptions?: Array<EventSubscription>;

		/** Defines the roles and credentials that Resilience Hub would use while creating the application, importing its resources, and running an assessment. */
		permissionModel?: UpdateAppPostBodyPermissionModel;

		/** Amazon Resource Name (ARN) of the resiliency policy. The format for this ARN is: arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:resiliency-policy/<code>policy-id</code>. For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html"> Amazon Resource Names (ARNs)</a> in the <i>AWS General Reference</i> guide. */
		policyArn?: string | null;
	}
	export interface UpdateAppPostBodyFormProperties {

		/**
		 * Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is: arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html"> Amazon Resource Names (ARNs)</a> in the <i>AWS General Reference</i> guide.
		 * Required
		 */
		appArn: FormControl<string | null | undefined>,

		/** Assessment execution schedule with 'Daily' or 'Disabled' values. */
		assessmentSchedule: FormControl<AppAssessmentScheduleType | null | undefined>,

		/** Specifies if the resiliency policy ARN should be cleared. */
		clearResiliencyPolicyArn: FormControl<boolean | null | undefined>,

		/**
		 * The optional description for an app.
		 * Max length: 500
		 * Min length: 0
		 */
		description: FormControl<string | null | undefined>,

		/** Amazon Resource Name (ARN) of the resiliency policy. The format for this ARN is: arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:resiliency-policy/<code>policy-id</code>. For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html"> Amazon Resource Names (ARNs)</a> in the <i>AWS General Reference</i> guide. */
		policyArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateAppPostBodyFormGroup() {
		return new FormGroup<UpdateAppPostBodyFormProperties>({
			appArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^arn:(aws|aws-cn|aws-iso|aws-iso-[a-z]{1}|aws-us-gov):[A-Za-z0-9][A-Za-z0-9_/.-]{0,62}:([a-z]{2}-((iso[a-z]{0,1}-)|(gov-)){0,1}[a-z]+-[0-9]):[0-9]{12}:[A-Za-z0-9/][A-Za-z0-9:_/+.-]{0,1023}$')]),
			assessmentSchedule: new FormControl<AppAssessmentScheduleType | null | undefined>(undefined),
			clearResiliencyPolicyArn: new FormControl<boolean | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(500)]),
			policyArn: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^arn:(aws|aws-cn|aws-iso|aws-iso-[a-z]{1}|aws-us-gov):[A-Za-z0-9][A-Za-z0-9_/.-]{0,62}:([a-z]{2}-((iso[a-z]{0,1}-)|(gov-)){0,1}[a-z]+-[0-9]):[0-9]{12}:[A-Za-z0-9/][A-Za-z0-9:_/+.-]{0,1023}$')]),
		});

	}

	export interface UpdateAppPostBodyPermissionModel {
		crossAccountRoleArns?: Array<string>;
		invokerRoleName?: string;
		type?: PermissionModelType;
	}
	export interface UpdateAppPostBodyPermissionModelFormProperties {
		invokerRoleName: FormControl<string | null | undefined>,
		type: FormControl<PermissionModelType | null | undefined>,
	}
	export function CreateUpdateAppPostBodyPermissionModelFormGroup() {
		return new FormGroup<UpdateAppPostBodyPermissionModelFormProperties>({
			invokerRoleName: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<PermissionModelType | null | undefined>(undefined),
		});

	}

	export interface UpdateAppVersionPostBody {

		/** <p>Additional configuration parameters for an Resilience Hub application. If you want to implement <code>additionalInfo</code> through the Resilience Hub console rather than using an API call, see <a href="https://docs.aws.amazon.com/resilience-hub/latest/userguide/app-config-param.html">Configure the application configuration parameters</a>.</p> <note> <p>Currently, this parameter accepts a key-value mapping (in a string format) of only one failover region and one associated account.</p> <p>Key: <code>"failover-regions"</code> </p> <p>Value: <code>"[{"region":"&lt;REGION&gt;", "accounts":[{"id":"&lt;ACCOUNT_ID&gt;"}]}]"</code> </p> </note> */
		additionalInfo?: {[id: string]: Array<string> };

		/**
		 * Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is: arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html"> Amazon Resource Names (ARNs)</a> in the <i>AWS General Reference</i> guide.
		 * Required
		 */
		appArn: string;
	}
	export interface UpdateAppVersionPostBodyFormProperties {

		/** <p>Additional configuration parameters for an Resilience Hub application. If you want to implement <code>additionalInfo</code> through the Resilience Hub console rather than using an API call, see <a href="https://docs.aws.amazon.com/resilience-hub/latest/userguide/app-config-param.html">Configure the application configuration parameters</a>.</p> <note> <p>Currently, this parameter accepts a key-value mapping (in a string format) of only one failover region and one associated account.</p> <p>Key: <code>"failover-regions"</code> </p> <p>Value: <code>"[{"region":"&lt;REGION&gt;", "accounts":[{"id":"&lt;ACCOUNT_ID&gt;"}]}]"</code> </p> </note> */
		additionalInfo: FormControl<{[id: string]: Array<string> } | null | undefined>,

		/**
		 * Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is: arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html"> Amazon Resource Names (ARNs)</a> in the <i>AWS General Reference</i> guide.
		 * Required
		 */
		appArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateAppVersionPostBodyFormGroup() {
		return new FormGroup<UpdateAppVersionPostBodyFormProperties>({
			additionalInfo: new FormControl<{[id: string]: Array<string> } | null | undefined>(undefined),
			appArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^arn:(aws|aws-cn|aws-iso|aws-iso-[a-z]{1}|aws-us-gov):[A-Za-z0-9][A-Za-z0-9_/.-]{0,62}:([a-z]{2}-((iso[a-z]{0,1}-)|(gov-)){0,1}[a-z]+-[0-9]):[0-9]{12}:[A-Za-z0-9/][A-Za-z0-9:_/+.-]{0,1023}$')]),
		});

	}

	export interface UpdateAppVersionAppComponentPostBody {

		/** Currently, there is no supported additional information for Application Components. */
		additionalInfo?: {[id: string]: Array<string> };

		/**
		 * Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is: arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html"> Amazon Resource Names (ARNs)</a> in the <i>AWS General Reference</i> guide.
		 * Required
		 */
		appArn: string;

		/**
		 * Identifier of the Application Component.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		id: string;

		/**
		 * Name of the Application Component.
		 * Max length: 255
		 * Min length: 1
		 */
		name?: string | null;

		/**
		 * Type of Application Component. For more information about the types of Application Component, see <a href="https://docs.aws.amazon.com/resilience-hub/latest/userguide/AppComponent.grouping.html">Grouping resources in an AppComponent</a>.
		 * Max length: 255
		 * Min length: 1
		 */
		type?: string | null;
	}
	export interface UpdateAppVersionAppComponentPostBodyFormProperties {

		/** Currently, there is no supported additional information for Application Components. */
		additionalInfo: FormControl<{[id: string]: Array<string> } | null | undefined>,

		/**
		 * Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is: arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html"> Amazon Resource Names (ARNs)</a> in the <i>AWS General Reference</i> guide.
		 * Required
		 */
		appArn: FormControl<string | null | undefined>,

		/**
		 * Identifier of the Application Component.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * Name of the Application Component.
		 * Max length: 255
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Type of Application Component. For more information about the types of Application Component, see <a href="https://docs.aws.amazon.com/resilience-hub/latest/userguide/AppComponent.grouping.html">Grouping resources in an AppComponent</a>.
		 * Max length: 255
		 * Min length: 1
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateUpdateAppVersionAppComponentPostBodyFormGroup() {
		return new FormGroup<UpdateAppVersionAppComponentPostBodyFormProperties>({
			additionalInfo: new FormControl<{[id: string]: Array<string> } | null | undefined>(undefined),
			appArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^arn:(aws|aws-cn|aws-iso|aws-iso-[a-z]{1}|aws-us-gov):[A-Za-z0-9][A-Za-z0-9_/.-]{0,62}:([a-z]{2}-((iso[a-z]{0,1}-)|(gov-)){0,1}[a-z]+-[0-9]):[0-9]{12}:[A-Za-z0-9/][A-Za-z0-9:_/+.-]{0,1023}$')]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
		});

	}

	export interface UpdateAppVersionResourcePostBody {

		/** Currently, there is no supported additional information for resources. */
		additionalInfo?: {[id: string]: Array<string> };

		/**
		 * Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is: arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html"> Amazon Resource Names (ARNs)</a> in the <i>AWS General Reference</i> guide.
		 * Required
		 */
		appArn: string;

		/** List of Application Components that this resource belongs to. If an Application Component is not part of the Resilience Hub application, it will be added. */
		appComponents?: Array<string>;

		/** Amazon Web Services account that owns the physical resource. */
		awsAccountId?: string | null;

		/** Amazon Web Services region that owns the physical resource. */
		awsRegion?: string | null;

		/** <p>Indicates if a resource is excluded from an Resilience Hub application.</p> <note> <p>You can exclude only imported resources from an Resilience Hub application.</p> </note> */
		excluded?: boolean | null;

		/** Defines a logical resource identifier. */
		logicalResourceId?: UpdateAppVersionResourcePostBodyLogicalResourceId;

		/**
		 * Physical identifier of the resource.
		 * Max length: 2048
		 * Min length: 1
		 */
		physicalResourceId?: string | null;

		/** Name of the resource. */
		resourceName?: string | null;

		/**
		 * Type of resource.
		 * Max length: 255
		 * Min length: 1
		 */
		resourceType?: string | null;
	}
	export interface UpdateAppVersionResourcePostBodyFormProperties {

		/** Currently, there is no supported additional information for resources. */
		additionalInfo: FormControl<{[id: string]: Array<string> } | null | undefined>,

		/**
		 * Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is: arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html"> Amazon Resource Names (ARNs)</a> in the <i>AWS General Reference</i> guide.
		 * Required
		 */
		appArn: FormControl<string | null | undefined>,

		/** Amazon Web Services account that owns the physical resource. */
		awsAccountId: FormControl<string | null | undefined>,

		/** Amazon Web Services region that owns the physical resource. */
		awsRegion: FormControl<string | null | undefined>,

		/** <p>Indicates if a resource is excluded from an Resilience Hub application.</p> <note> <p>You can exclude only imported resources from an Resilience Hub application.</p> </note> */
		excluded: FormControl<boolean | null | undefined>,

		/**
		 * Physical identifier of the resource.
		 * Max length: 2048
		 * Min length: 1
		 */
		physicalResourceId: FormControl<string | null | undefined>,

		/** Name of the resource. */
		resourceName: FormControl<string | null | undefined>,

		/**
		 * Type of resource.
		 * Max length: 255
		 * Min length: 1
		 */
		resourceType: FormControl<string | null | undefined>,
	}
	export function CreateUpdateAppVersionResourcePostBodyFormGroup() {
		return new FormGroup<UpdateAppVersionResourcePostBodyFormProperties>({
			additionalInfo: new FormControl<{[id: string]: Array<string> } | null | undefined>(undefined),
			appArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^arn:(aws|aws-cn|aws-iso|aws-iso-[a-z]{1}|aws-us-gov):[A-Za-z0-9][A-Za-z0-9_/.-]{0,62}:([a-z]{2}-((iso[a-z]{0,1}-)|(gov-)){0,1}[a-z]+-[0-9]):[0-9]{12}:[A-Za-z0-9/][A-Za-z0-9:_/+.-]{0,1023}$')]),
			awsAccountId: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[0-9]{12}$')]),
			awsRegion: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[a-z]{2}-((iso[a-z]{0,1}-)|(gov-)){0,1}[a-z]+-[0-9]$')]),
			excluded: new FormControl<boolean | null | undefined>(undefined),
			physicalResourceId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2048)]),
			resourceName: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[A-Za-z0-9][A-Za-z0-9_\-]{1,59}$')]),
			resourceType: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
		});

	}

	export interface UpdateAppVersionResourcePostBodyLogicalResourceId {
		eksSourceName?: string;
		identifier?: string;
		logicalStackName?: string;
		resourceGroupName?: string;
		terraformSourceName?: string;
	}
	export interface UpdateAppVersionResourcePostBodyLogicalResourceIdFormProperties {
		eksSourceName: FormControl<string | null | undefined>,
		identifier: FormControl<string | null | undefined>,
		logicalStackName: FormControl<string | null | undefined>,
		resourceGroupName: FormControl<string | null | undefined>,
		terraformSourceName: FormControl<string | null | undefined>,
	}
	export function CreateUpdateAppVersionResourcePostBodyLogicalResourceIdFormGroup() {
		return new FormGroup<UpdateAppVersionResourcePostBodyLogicalResourceIdFormProperties>({
			eksSourceName: new FormControl<string | null | undefined>(undefined),
			identifier: new FormControl<string | null | undefined>(undefined),
			logicalStackName: new FormControl<string | null | undefined>(undefined),
			resourceGroupName: new FormControl<string | null | undefined>(undefined),
			terraformSourceName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateResiliencyPolicyPostBody {

		/** Specifies a high-level geographical location constraint for where your resilience policy data can be stored. */
		dataLocationConstraint?: DataLocationConstraint | null;

		/** The type of resiliency policy to be created, including the recovery time objective (RTO) and recovery point objective (RPO) in seconds. */
		policy?: {[id: string]: FailurePolicy };

		/**
		 * Amazon Resource Name (ARN) of the resiliency policy. The format for this ARN is: arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:resiliency-policy/<code>policy-id</code>. For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html"> Amazon Resource Names (ARNs)</a> in the <i>AWS General Reference</i> guide.
		 * Required
		 */
		policyArn: string;

		/**
		 * The description for the policy.
		 * Max length: 500
		 * Min length: 0
		 */
		policyDescription?: string | null;

		/** The name of the policy */
		policyName?: string | null;

		/** The tier for this resiliency policy, ranging from the highest severity (<code>MissionCritical</code>) to lowest (<code>NonCritical</code>). */
		tier?: ResiliencyPolicyTier | null;
	}
	export interface UpdateResiliencyPolicyPostBodyFormProperties {

		/** Specifies a high-level geographical location constraint for where your resilience policy data can be stored. */
		dataLocationConstraint: FormControl<DataLocationConstraint | null | undefined>,

		/** The type of resiliency policy to be created, including the recovery time objective (RTO) and recovery point objective (RPO) in seconds. */
		policy: FormControl<{[id: string]: FailurePolicy } | null | undefined>,

		/**
		 * Amazon Resource Name (ARN) of the resiliency policy. The format for this ARN is: arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:resiliency-policy/<code>policy-id</code>. For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html"> Amazon Resource Names (ARNs)</a> in the <i>AWS General Reference</i> guide.
		 * Required
		 */
		policyArn: FormControl<string | null | undefined>,

		/**
		 * The description for the policy.
		 * Max length: 500
		 * Min length: 0
		 */
		policyDescription: FormControl<string | null | undefined>,

		/** The name of the policy */
		policyName: FormControl<string | null | undefined>,

		/** The tier for this resiliency policy, ranging from the highest severity (<code>MissionCritical</code>) to lowest (<code>NonCritical</code>). */
		tier: FormControl<ResiliencyPolicyTier | null | undefined>,
	}
	export function CreateUpdateResiliencyPolicyPostBodyFormGroup() {
		return new FormGroup<UpdateResiliencyPolicyPostBodyFormProperties>({
			dataLocationConstraint: new FormControl<DataLocationConstraint | null | undefined>(undefined),
			policy: new FormControl<{[id: string]: FailurePolicy } | null | undefined>(undefined),
			policyArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^arn:(aws|aws-cn|aws-iso|aws-iso-[a-z]{1}|aws-us-gov):[A-Za-z0-9][A-Za-z0-9_/.-]{0,62}:([a-z]{2}-((iso[a-z]{0,1}-)|(gov-)){0,1}[a-z]+-[0-9]):[0-9]{12}:[A-Za-z0-9/][A-Za-z0-9:_/+.-]{0,1023}$')]),
			policyDescription: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(500)]),
			policyName: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[A-Za-z0-9][A-Za-z0-9_\-]{1,59}$')]),
			tier: new FormControl<ResiliencyPolicyTier | null | undefined>(undefined),
		});

	}

}

