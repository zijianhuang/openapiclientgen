import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface Application {
		Id?: string | null;
		Name?: string | null;
		Description?: string | null;
	}
	export interface ApplicationFormProperties {
		Id: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
	}
	export function CreateApplicationFormGroup() {
		return new FormGroup<ApplicationFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
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

	export interface InternalServerException {
	}
	export interface InternalServerExceptionFormProperties {
	}
	export function CreateInternalServerExceptionFormGroup() {
		return new FormGroup<InternalServerExceptionFormProperties>({
		});

	}

	export interface ConfigurationProfile {
		ApplicationId?: string | null;
		Id?: string | null;
		Name?: string | null;
		Description?: string | null;
		LocationUri?: string | null;
		RetrievalRoleArn?: string | null;
		Validators?: Array<Validator>;
	}
	export interface ConfigurationProfileFormProperties {
		ApplicationId: FormControl<string | null | undefined>,
		Id: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		LocationUri: FormControl<string | null | undefined>,
		RetrievalRoleArn: FormControl<string | null | undefined>,
	}
	export function CreateConfigurationProfileFormGroup() {
		return new FormGroup<ConfigurationProfileFormProperties>({
			ApplicationId: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			LocationUri: new FormControl<string | null | undefined>(undefined),
			RetrievalRoleArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A validator provides a syntactic or semantic check to ensure the configuration you want to deploy functions as intended. To validate your application configuration data, you provide a schema or a Lambda function that runs against the configuration. The configuration deployment or update can only proceed when the configuration data is valid. */
	export interface Validator {
		Type: ValidatorType;
		Content: string;
	}

	/** A validator provides a syntactic or semantic check to ensure the configuration you want to deploy functions as intended. To validate your application configuration data, you provide a schema or a Lambda function that runs against the configuration. The configuration deployment or update can only proceed when the configuration data is valid. */
	export interface ValidatorFormProperties {
		Type: FormControl<ValidatorType | null | undefined>,
		Content: FormControl<string | null | undefined>,
	}
	export function CreateValidatorFormGroup() {
		return new FormGroup<ValidatorFormProperties>({
			Type: new FormControl<ValidatorType | null | undefined>(undefined),
			Content: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ValidatorType { JSON_SCHEMA = 0, LAMBDA = 1 }

	export interface ResourceNotFoundException {
	}
	export interface ResourceNotFoundExceptionFormProperties {
	}
	export function CreateResourceNotFoundExceptionFormGroup() {
		return new FormGroup<ResourceNotFoundExceptionFormProperties>({
		});

	}

	export interface DeploymentStrategy {
		Id?: string | null;
		Name?: string | null;
		Description?: string | null;
		DeploymentDurationInMinutes?: number | null;
		GrowthType?: DeploymentStrategyGrowthType | null;
		GrowthFactor?: number | null;
		FinalBakeTimeInMinutes?: number | null;
		ReplicateTo?: DeploymentStrategyReplicateTo | null;
	}
	export interface DeploymentStrategyFormProperties {
		Id: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		DeploymentDurationInMinutes: FormControl<number | null | undefined>,
		GrowthType: FormControl<DeploymentStrategyGrowthType | null | undefined>,
		GrowthFactor: FormControl<number | null | undefined>,
		FinalBakeTimeInMinutes: FormControl<number | null | undefined>,
		ReplicateTo: FormControl<DeploymentStrategyReplicateTo | null | undefined>,
	}
	export function CreateDeploymentStrategyFormGroup() {
		return new FormGroup<DeploymentStrategyFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			DeploymentDurationInMinutes: new FormControl<number | null | undefined>(undefined),
			GrowthType: new FormControl<DeploymentStrategyGrowthType | null | undefined>(undefined),
			GrowthFactor: new FormControl<number | null | undefined>(undefined),
			FinalBakeTimeInMinutes: new FormControl<number | null | undefined>(undefined),
			ReplicateTo: new FormControl<DeploymentStrategyReplicateTo | null | undefined>(undefined),
		});

	}

	export enum DeploymentStrategyGrowthType { LINEAR = 0, EXPONENTIAL = 1 }

	export enum DeploymentStrategyReplicateTo { NONE = 0, SSM_DOCUMENT = 1 }

	export interface Environment {
		ApplicationId?: string | null;
		Id?: string | null;
		Name?: string | null;
		Description?: string | null;
		State?: EnvironmentState | null;
		Monitors?: Array<Monitor>;
	}
	export interface EnvironmentFormProperties {
		ApplicationId: FormControl<string | null | undefined>,
		Id: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		State: FormControl<EnvironmentState | null | undefined>,
	}
	export function CreateEnvironmentFormGroup() {
		return new FormGroup<EnvironmentFormProperties>({
			ApplicationId: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<EnvironmentState | null | undefined>(undefined),
		});

	}

	export enum EnvironmentState { READY_FOR_DEPLOYMENT = 0, DEPLOYING = 1, ROLLING_BACK = 2, ROLLED_BACK = 3 }


	/** Amazon CloudWatch alarms to monitor during the deployment process. */
	export interface Monitor {
		AlarmArn?: string | null;
		AlarmRoleArn?: string | null;
	}

	/** Amazon CloudWatch alarms to monitor during the deployment process. */
	export interface MonitorFormProperties {
		AlarmArn: FormControl<string | null | undefined>,
		AlarmRoleArn: FormControl<string | null | undefined>,
	}
	export function CreateMonitorFormGroup() {
		return new FormGroup<MonitorFormProperties>({
			AlarmArn: new FormControl<string | null | undefined>(undefined),
			AlarmRoleArn: new FormControl<string | null | undefined>(undefined),
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

	export interface Configuration {
		Content?: string | null;
	}
	export interface ConfigurationFormProperties {
		Content: FormControl<string | null | undefined>,
	}
	export function CreateConfigurationFormGroup() {
		return new FormGroup<ConfigurationFormProperties>({
			Content: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Deployment {
		ApplicationId?: string | null;
		EnvironmentId?: string | null;
		DeploymentStrategyId?: string | null;
		ConfigurationProfileId?: string | null;
		DeploymentNumber?: number | null;
		ConfigurationName?: string | null;
		ConfigurationLocationUri?: string | null;
		ConfigurationVersion?: string | null;
		Description?: string | null;
		DeploymentDurationInMinutes?: number | null;
		GrowthType?: DeploymentStrategyGrowthType | null;
		GrowthFactor?: number | null;
		FinalBakeTimeInMinutes?: number | null;
		State?: DeploymentState | null;
		EventLog?: Array<DeploymentEvent>;
		PercentageComplete?: number | null;
		StartedAt?: Date | null;
		CompletedAt?: Date | null;
	}
	export interface DeploymentFormProperties {
		ApplicationId: FormControl<string | null | undefined>,
		EnvironmentId: FormControl<string | null | undefined>,
		DeploymentStrategyId: FormControl<string | null | undefined>,
		ConfigurationProfileId: FormControl<string | null | undefined>,
		DeploymentNumber: FormControl<number | null | undefined>,
		ConfigurationName: FormControl<string | null | undefined>,
		ConfigurationLocationUri: FormControl<string | null | undefined>,
		ConfigurationVersion: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		DeploymentDurationInMinutes: FormControl<number | null | undefined>,
		GrowthType: FormControl<DeploymentStrategyGrowthType | null | undefined>,
		GrowthFactor: FormControl<number | null | undefined>,
		FinalBakeTimeInMinutes: FormControl<number | null | undefined>,
		State: FormControl<DeploymentState | null | undefined>,
		PercentageComplete: FormControl<number | null | undefined>,
		StartedAt: FormControl<Date | null | undefined>,
		CompletedAt: FormControl<Date | null | undefined>,
	}
	export function CreateDeploymentFormGroup() {
		return new FormGroup<DeploymentFormProperties>({
			ApplicationId: new FormControl<string | null | undefined>(undefined),
			EnvironmentId: new FormControl<string | null | undefined>(undefined),
			DeploymentStrategyId: new FormControl<string | null | undefined>(undefined),
			ConfigurationProfileId: new FormControl<string | null | undefined>(undefined),
			DeploymentNumber: new FormControl<number | null | undefined>(undefined),
			ConfigurationName: new FormControl<string | null | undefined>(undefined),
			ConfigurationLocationUri: new FormControl<string | null | undefined>(undefined),
			ConfigurationVersion: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			DeploymentDurationInMinutes: new FormControl<number | null | undefined>(undefined),
			GrowthType: new FormControl<DeploymentStrategyGrowthType | null | undefined>(undefined),
			GrowthFactor: new FormControl<number | null | undefined>(undefined),
			FinalBakeTimeInMinutes: new FormControl<number | null | undefined>(undefined),
			State: new FormControl<DeploymentState | null | undefined>(undefined),
			PercentageComplete: new FormControl<number | null | undefined>(undefined),
			StartedAt: new FormControl<Date | null | undefined>(undefined),
			CompletedAt: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum DeploymentState { BAKING = 0, VALIDATING = 1, DEPLOYING = 2, COMPLETE = 3, ROLLING_BACK = 4, ROLLED_BACK = 5 }


	/** An object that describes a deployment event. */
	export interface DeploymentEvent {
		EventType?: DeploymentEventEventType | null;
		TriggeredBy?: DeploymentEventTriggeredBy | null;
		Description?: string | null;
		OccurredAt?: Date | null;
	}

	/** An object that describes a deployment event. */
	export interface DeploymentEventFormProperties {
		EventType: FormControl<DeploymentEventEventType | null | undefined>,
		TriggeredBy: FormControl<DeploymentEventTriggeredBy | null | undefined>,
		Description: FormControl<string | null | undefined>,
		OccurredAt: FormControl<Date | null | undefined>,
	}
	export function CreateDeploymentEventFormGroup() {
		return new FormGroup<DeploymentEventFormProperties>({
			EventType: new FormControl<DeploymentEventEventType | null | undefined>(undefined),
			TriggeredBy: new FormControl<DeploymentEventTriggeredBy | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			OccurredAt: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum DeploymentEventEventType { PERCENTAGE_UPDATED = 0, ROLLBACK_STARTED = 1, ROLLBACK_COMPLETED = 2, BAKE_TIME_STARTED = 3, DEPLOYMENT_STARTED = 4, DEPLOYMENT_COMPLETED = 5 }

	export enum DeploymentEventTriggeredBy { USER = 0, APPCONFIG = 1, CLOUDWATCH_ALARM = 2, INTERNAL_ERROR = 3 }

	export interface Applications {
		Items?: Array<Application>;
		NextToken?: string | null;
	}
	export interface ApplicationsFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateApplicationsFormGroup() {
		return new FormGroup<ApplicationsFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ConfigurationProfiles {
		Items?: Array<ConfigurationProfileSummary>;
		NextToken?: string | null;
	}
	export interface ConfigurationProfilesFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateConfigurationProfilesFormGroup() {
		return new FormGroup<ConfigurationProfilesFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A summary of a configuration profile. */
	export interface ConfigurationProfileSummary {
		ApplicationId?: string | null;
		Id?: string | null;
		Name?: string | null;
		LocationUri?: string | null;
		ValidatorTypes?: Array<ValidatorType>;
	}

	/** A summary of a configuration profile. */
	export interface ConfigurationProfileSummaryFormProperties {
		ApplicationId: FormControl<string | null | undefined>,
		Id: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		LocationUri: FormControl<string | null | undefined>,
	}
	export function CreateConfigurationProfileSummaryFormGroup() {
		return new FormGroup<ConfigurationProfileSummaryFormProperties>({
			ApplicationId: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			LocationUri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeploymentStrategies {
		Items?: Array<DeploymentStrategy>;
		NextToken?: string | null;
	}
	export interface DeploymentStrategiesFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDeploymentStrategiesFormGroup() {
		return new FormGroup<DeploymentStrategiesFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Deployments {
		Items?: Array<DeploymentSummary>;
		NextToken?: string | null;
	}
	export interface DeploymentsFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDeploymentsFormGroup() {
		return new FormGroup<DeploymentsFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about the deployment. */
	export interface DeploymentSummary {
		DeploymentNumber?: number | null;
		ConfigurationName?: string | null;
		ConfigurationVersion?: string | null;
		DeploymentDurationInMinutes?: number | null;
		GrowthType?: DeploymentStrategyGrowthType | null;
		GrowthFactor?: number | null;
		FinalBakeTimeInMinutes?: number | null;
		State?: DeploymentState | null;
		PercentageComplete?: number | null;
		StartedAt?: Date | null;
		CompletedAt?: Date | null;
	}

	/** Information about the deployment. */
	export interface DeploymentSummaryFormProperties {
		DeploymentNumber: FormControl<number | null | undefined>,
		ConfigurationName: FormControl<string | null | undefined>,
		ConfigurationVersion: FormControl<string | null | undefined>,
		DeploymentDurationInMinutes: FormControl<number | null | undefined>,
		GrowthType: FormControl<DeploymentStrategyGrowthType | null | undefined>,
		GrowthFactor: FormControl<number | null | undefined>,
		FinalBakeTimeInMinutes: FormControl<number | null | undefined>,
		State: FormControl<DeploymentState | null | undefined>,
		PercentageComplete: FormControl<number | null | undefined>,
		StartedAt: FormControl<Date | null | undefined>,
		CompletedAt: FormControl<Date | null | undefined>,
	}
	export function CreateDeploymentSummaryFormGroup() {
		return new FormGroup<DeploymentSummaryFormProperties>({
			DeploymentNumber: new FormControl<number | null | undefined>(undefined),
			ConfigurationName: new FormControl<string | null | undefined>(undefined),
			ConfigurationVersion: new FormControl<string | null | undefined>(undefined),
			DeploymentDurationInMinutes: new FormControl<number | null | undefined>(undefined),
			GrowthType: new FormControl<DeploymentStrategyGrowthType | null | undefined>(undefined),
			GrowthFactor: new FormControl<number | null | undefined>(undefined),
			FinalBakeTimeInMinutes: new FormControl<number | null | undefined>(undefined),
			State: new FormControl<DeploymentState | null | undefined>(undefined),
			PercentageComplete: new FormControl<number | null | undefined>(undefined),
			StartedAt: new FormControl<Date | null | undefined>(undefined),
			CompletedAt: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface Environments {
		Items?: Array<Environment>;
		NextToken?: string | null;
	}
	export interface EnvironmentsFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateEnvironmentsFormGroup() {
		return new FormGroup<EnvironmentsFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ResourceTags {
		Tags?: TagMap;
	}
	export interface ResourceTagsFormProperties {
	}
	export function CreateResourceTagsFormGroup() {
		return new FormGroup<ResourceTagsFormProperties>({
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

	export interface CreateApplicationRequest {
		Name: string;
		Description?: string | null;
		Tags?: TagMap;
	}
	export interface CreateApplicationRequestFormProperties {
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
	}
	export function CreateCreateApplicationRequestFormGroup() {
		return new FormGroup<CreateApplicationRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateConfigurationProfileRequest {
		Name: string;
		Description?: string | null;
		LocationUri: string;
		RetrievalRoleArn: string;
		Validators?: Array<Validator>;
		Tags?: TagMap;
	}
	export interface CreateConfigurationProfileRequestFormProperties {
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		LocationUri: FormControl<string | null | undefined>,
		RetrievalRoleArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateConfigurationProfileRequestFormGroup() {
		return new FormGroup<CreateConfigurationProfileRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			LocationUri: new FormControl<string | null | undefined>(undefined),
			RetrievalRoleArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GrowthType { LINEAR = 0, EXPONENTIAL = 1 }

	export enum ReplicateTo { NONE = 0, SSM_DOCUMENT = 1 }

	export interface CreateDeploymentStrategyRequest {
		Name: string;
		Description?: string | null;
		DeploymentDurationInMinutes: number;
		FinalBakeTimeInMinutes?: number | null;
		GrowthFactor: number;
		GrowthType?: DeploymentStrategyGrowthType | null;
		ReplicateTo: DeploymentStrategyReplicateTo;
		Tags?: TagMap;
	}
	export interface CreateDeploymentStrategyRequestFormProperties {
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		DeploymentDurationInMinutes: FormControl<number | null | undefined>,
		FinalBakeTimeInMinutes: FormControl<number | null | undefined>,
		GrowthFactor: FormControl<number | null | undefined>,
		GrowthType: FormControl<DeploymentStrategyGrowthType | null | undefined>,
		ReplicateTo: FormControl<DeploymentStrategyReplicateTo | null | undefined>,
	}
	export function CreateCreateDeploymentStrategyRequestFormGroup() {
		return new FormGroup<CreateDeploymentStrategyRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			DeploymentDurationInMinutes: new FormControl<number | null | undefined>(undefined),
			FinalBakeTimeInMinutes: new FormControl<number | null | undefined>(undefined),
			GrowthFactor: new FormControl<number | null | undefined>(undefined),
			GrowthType: new FormControl<DeploymentStrategyGrowthType | null | undefined>(undefined),
			ReplicateTo: new FormControl<DeploymentStrategyReplicateTo | null | undefined>(undefined),
		});

	}

	export interface CreateEnvironmentRequest {
		Name: string;
		Description?: string | null;
		Monitors?: Array<Monitor>;
		Tags?: TagMap;
	}
	export interface CreateEnvironmentRequestFormProperties {
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
	}
	export function CreateCreateEnvironmentRequestFormGroup() {
		return new FormGroup<CreateEnvironmentRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteApplicationRequest {
	}
	export interface DeleteApplicationRequestFormProperties {
	}
	export function CreateDeleteApplicationRequestFormGroup() {
		return new FormGroup<DeleteApplicationRequestFormProperties>({
		});

	}

	export interface DeleteConfigurationProfileRequest {
	}
	export interface DeleteConfigurationProfileRequestFormProperties {
	}
	export function CreateDeleteConfigurationProfileRequestFormGroup() {
		return new FormGroup<DeleteConfigurationProfileRequestFormProperties>({
		});

	}

	export interface DeleteDeploymentStrategyRequest {
	}
	export interface DeleteDeploymentStrategyRequestFormProperties {
	}
	export function CreateDeleteDeploymentStrategyRequestFormGroup() {
		return new FormGroup<DeleteDeploymentStrategyRequestFormProperties>({
		});

	}

	export interface DeleteEnvironmentRequest {
	}
	export interface DeleteEnvironmentRequestFormProperties {
	}
	export function CreateDeleteEnvironmentRequestFormGroup() {
		return new FormGroup<DeleteEnvironmentRequestFormProperties>({
		});

	}

	export enum DeploymentEventType { PERCENTAGE_UPDATED = 0, ROLLBACK_STARTED = 1, ROLLBACK_COMPLETED = 2, BAKE_TIME_STARTED = 3, DEPLOYMENT_STARTED = 4, DEPLOYMENT_COMPLETED = 5 }

	export enum TriggeredBy { USER = 0, APPCONFIG = 1, CLOUDWATCH_ALARM = 2, INTERNAL_ERROR = 3 }

	export interface GetApplicationRequest {
	}
	export interface GetApplicationRequestFormProperties {
	}
	export function CreateGetApplicationRequestFormGroup() {
		return new FormGroup<GetApplicationRequestFormProperties>({
		});

	}

	export interface GetConfigurationProfileRequest {
	}
	export interface GetConfigurationProfileRequestFormProperties {
	}
	export function CreateGetConfigurationProfileRequestFormGroup() {
		return new FormGroup<GetConfigurationProfileRequestFormProperties>({
		});

	}

	export interface GetConfigurationRequest {
	}
	export interface GetConfigurationRequestFormProperties {
	}
	export function CreateGetConfigurationRequestFormGroup() {
		return new FormGroup<GetConfigurationRequestFormProperties>({
		});

	}

	export interface GetDeploymentRequest {
	}
	export interface GetDeploymentRequestFormProperties {
	}
	export function CreateGetDeploymentRequestFormGroup() {
		return new FormGroup<GetDeploymentRequestFormProperties>({
		});

	}

	export interface GetDeploymentStrategyRequest {
	}
	export interface GetDeploymentStrategyRequestFormProperties {
	}
	export function CreateGetDeploymentStrategyRequestFormGroup() {
		return new FormGroup<GetDeploymentStrategyRequestFormProperties>({
		});

	}

	export interface GetEnvironmentRequest {
	}
	export interface GetEnvironmentRequestFormProperties {
	}
	export function CreateGetEnvironmentRequestFormGroup() {
		return new FormGroup<GetEnvironmentRequestFormProperties>({
		});

	}

	export interface ListApplicationsRequest {
	}
	export interface ListApplicationsRequestFormProperties {
	}
	export function CreateListApplicationsRequestFormGroup() {
		return new FormGroup<ListApplicationsRequestFormProperties>({
		});

	}

	export interface ListConfigurationProfilesRequest {
	}
	export interface ListConfigurationProfilesRequestFormProperties {
	}
	export function CreateListConfigurationProfilesRequestFormGroup() {
		return new FormGroup<ListConfigurationProfilesRequestFormProperties>({
		});

	}

	export interface ListDeploymentStrategiesRequest {
	}
	export interface ListDeploymentStrategiesRequestFormProperties {
	}
	export function CreateListDeploymentStrategiesRequestFormGroup() {
		return new FormGroup<ListDeploymentStrategiesRequestFormProperties>({
		});

	}

	export interface ListDeploymentsRequest {
	}
	export interface ListDeploymentsRequestFormProperties {
	}
	export function CreateListDeploymentsRequestFormGroup() {
		return new FormGroup<ListDeploymentsRequestFormProperties>({
		});

	}

	export interface ListEnvironmentsRequest {
	}
	export interface ListEnvironmentsRequestFormProperties {
	}
	export function CreateListEnvironmentsRequestFormGroup() {
		return new FormGroup<ListEnvironmentsRequestFormProperties>({
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

	export interface StartDeploymentRequest {
		DeploymentStrategyId: string;
		ConfigurationProfileId: string;
		ConfigurationVersion: string;
		Description?: string | null;
		Tags?: TagMap;
	}
	export interface StartDeploymentRequestFormProperties {
		DeploymentStrategyId: FormControl<string | null | undefined>,
		ConfigurationProfileId: FormControl<string | null | undefined>,
		ConfigurationVersion: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
	}
	export function CreateStartDeploymentRequestFormGroup() {
		return new FormGroup<StartDeploymentRequestFormProperties>({
			DeploymentStrategyId: new FormControl<string | null | undefined>(undefined),
			ConfigurationProfileId: new FormControl<string | null | undefined>(undefined),
			ConfigurationVersion: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StopDeploymentRequest {
	}
	export interface StopDeploymentRequestFormProperties {
	}
	export function CreateStopDeploymentRequestFormGroup() {
		return new FormGroup<StopDeploymentRequestFormProperties>({
		});

	}

	export interface TagResourceRequest {
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

	export interface UpdateApplicationRequest {
		Name?: string | null;
		Description?: string | null;
	}
	export interface UpdateApplicationRequestFormProperties {
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
	}
	export function CreateUpdateApplicationRequestFormGroup() {
		return new FormGroup<UpdateApplicationRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateConfigurationProfileRequest {
		Name?: string | null;
		Description?: string | null;
		RetrievalRoleArn?: string | null;
		Validators?: Array<Validator>;
	}
	export interface UpdateConfigurationProfileRequestFormProperties {
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		RetrievalRoleArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateConfigurationProfileRequestFormGroup() {
		return new FormGroup<UpdateConfigurationProfileRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			RetrievalRoleArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateDeploymentStrategyRequest {
		Description?: string | null;
		DeploymentDurationInMinutes?: number | null;
		FinalBakeTimeInMinutes?: number | null;
		GrowthFactor?: number | null;
		GrowthType?: DeploymentStrategyGrowthType | null;
	}
	export interface UpdateDeploymentStrategyRequestFormProperties {
		Description: FormControl<string | null | undefined>,
		DeploymentDurationInMinutes: FormControl<number | null | undefined>,
		FinalBakeTimeInMinutes: FormControl<number | null | undefined>,
		GrowthFactor: FormControl<number | null | undefined>,
		GrowthType: FormControl<DeploymentStrategyGrowthType | null | undefined>,
	}
	export function CreateUpdateDeploymentStrategyRequestFormGroup() {
		return new FormGroup<UpdateDeploymentStrategyRequestFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined),
			DeploymentDurationInMinutes: new FormControl<number | null | undefined>(undefined),
			FinalBakeTimeInMinutes: new FormControl<number | null | undefined>(undefined),
			GrowthFactor: new FormControl<number | null | undefined>(undefined),
			GrowthType: new FormControl<DeploymentStrategyGrowthType | null | undefined>(undefined),
		});

	}

	export interface UpdateEnvironmentRequest {
		Name?: string | null;
		Description?: string | null;
		Monitors?: Array<Monitor>;
	}
	export interface UpdateEnvironmentRequestFormProperties {
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
	}
	export function CreateUpdateEnvironmentRequestFormGroup() {
		return new FormGroup<UpdateEnvironmentRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ValidateConfigurationRequest {
	}
	export interface ValidateConfigurationRequestFormProperties {
	}
	export function CreateValidateConfigurationRequestFormGroup() {
		return new FormGroup<ValidateConfigurationRequestFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * An application in AppConfig is a logical unit of code that provides capabilities for your customers. For example, an application can be a microservice that runs on Amazon EC2 instances, a mobile application installed by your users, a serverless application using Amazon API Gateway and AWS Lambda, or any system you run on behalf of others.
		 * Post applications
		 * @return {void} 
		 */
		CreateApplication(requestBody: CreateApplicationPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'applications', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * List all applications in your AWS account.
		 * Get applications
		 * @param {number} max_results The maximum number of items to return for this call. The call also returns a token that you can specify in a subsequent call to get the next set of results.
		 * @param {string} next_token A token to start the list. Use this token to get the next set of results.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {Applications} Success
		 */
		ListApplications(max_results: number | null | undefined, next_token: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<Applications> {
			return this.http.get<Applications>(this.baseUri + 'applications?max_results=' + max_results + '&next_token=' + (next_token == null ? '' : encodeURIComponent(next_token)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * <p>Information that enables AppConfig to access the configuration source. Valid configuration sources include Systems Manager (SSM) documents, SSM Parameter Store parameters, and Amazon S3 objects. A configuration profile includes the following information.</p> <ul> <li> <p>The Uri location of the configuration data.</p> </li> <li> <p>The AWS Identity and Access Management (IAM) role that provides access to the configuration data.</p> </li> <li> <p>A validator for the configuration data. Available validators include either a JSON Schema or an AWS Lambda function.</p> </li> </ul> <p>For more information, see <a href="http://docs.aws.amazon.com/systems-manager/latest/userguide/appconfig-creating-configuration-and-profile.html">Create a Configuration and a Configuration Profile</a> in the <i>AWS AppConfig User Guide</i>.</p>
		 * Post applications/{ApplicationId}/configurationprofiles
		 * @param {string} ApplicationId The application ID.
		 * @return {void} 
		 */
		CreateConfigurationProfile(ApplicationId: string, requestBody: CreateConfigurationProfilePostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'applications/' + (ApplicationId == null ? '' : encodeURIComponent(ApplicationId)) + '/configurationprofiles', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists the configuration profiles for an application.
		 * Get applications/{ApplicationId}/configurationprofiles
		 * @param {string} ApplicationId The application ID.
		 * @param {number} max_results The maximum number of items to return for this call. The call also returns a token that you can specify in a subsequent call to get the next set of results.
		 * @param {string} next_token A token to start the list. Use this token to get the next set of results.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ConfigurationProfiles} Success
		 */
		ListConfigurationProfiles(ApplicationId: string, max_results: number | null | undefined, next_token: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ConfigurationProfiles> {
			return this.http.get<ConfigurationProfiles>(this.baseUri + 'applications/' + (ApplicationId == null ? '' : encodeURIComponent(ApplicationId)) + '/configurationprofiles&max_results=' + max_results + '&next_token=' + (next_token == null ? '' : encodeURIComponent(next_token)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * A deployment strategy defines important criteria for rolling out your configuration to the designated targets. A deployment strategy includes: the overall duration required, a percentage of targets to receive the deployment during each interval, an algorithm that defines how percentage grows, and bake time.
		 * Post deploymentstrategies
		 * @return {void} 
		 */
		CreateDeploymentStrategy(requestBody: CreateDeploymentStrategyPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'deploymentstrategies', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * List deployment strategies.
		 * Get deploymentstrategies
		 * @param {number} max_results The maximum number of items to return for this call. The call also returns a token that you can specify in a subsequent call to get the next set of results.
		 * @param {string} next_token A token to start the list. Use this token to get the next set of results.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DeploymentStrategies} Success
		 */
		ListDeploymentStrategies(max_results: number | null | undefined, next_token: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<DeploymentStrategies> {
			return this.http.get<DeploymentStrategies>(this.baseUri + 'deploymentstrategies?max_results=' + max_results + '&next_token=' + (next_token == null ? '' : encodeURIComponent(next_token)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * For each application, you define one or more environments. An environment is a logical deployment group of AppConfig targets, such as applications in a <code>Beta</code> or <code>Production</code> environment. You can also define environments for application subcomponents such as the <code>Web</code>, <code>Mobile</code> and <code>Back-end</code> components for your application. You can configure Amazon CloudWatch alarms for each environment. The system monitors alarms during a configuration deployment. If an alarm is triggered, the system rolls back the configuration.
		 * Post applications/{ApplicationId}/environments
		 * @param {string} ApplicationId The application ID.
		 * @return {void} 
		 */
		CreateEnvironment(ApplicationId: string, requestBody: CreateEnvironmentPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'applications/' + (ApplicationId == null ? '' : encodeURIComponent(ApplicationId)) + '/environments', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * List the environments for an application.
		 * Get applications/{ApplicationId}/environments
		 * @param {string} ApplicationId The application ID.
		 * @param {number} max_results The maximum number of items to return for this call. The call also returns a token that you can specify in a subsequent call to get the next set of results.
		 * @param {string} next_token A token to start the list. Use this token to get the next set of results.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {Environments} Success
		 */
		ListEnvironments(ApplicationId: string, max_results: number | null | undefined, next_token: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<Environments> {
			return this.http.get<Environments>(this.baseUri + 'applications/' + (ApplicationId == null ? '' : encodeURIComponent(ApplicationId)) + '/environments&max_results=' + max_results + '&next_token=' + (next_token == null ? '' : encodeURIComponent(next_token)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Delete an application. Deleting an application does not delete a configuration from a host.
		 * Delete applications/{ApplicationId}
		 * @param {string} ApplicationId The ID of the application to delete.
		 * @return {void} 
		 */
		DeleteApplication(ApplicationId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'applications/' + (ApplicationId == null ? '' : encodeURIComponent(ApplicationId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieve information about an application.
		 * Get applications/{ApplicationId}
		 * @param {string} ApplicationId The ID of the application you want to get.
		 * @return {Application} Success
		 */
		GetApplication(ApplicationId: string): Observable<Application> {
			return this.http.get<Application>(this.baseUri + 'applications/' + (ApplicationId == null ? '' : encodeURIComponent(ApplicationId)), {});
		}

		/**
		 * Updates an application.
		 * Patch applications/{ApplicationId}
		 * @param {string} ApplicationId The application ID.
		 * @return {Application} Success
		 */
		UpdateApplication(ApplicationId: string, requestBody: UpdateApplicationPatchBody): Observable<Application> {
			return this.http.patch<Application>(this.baseUri + 'applications/' + (ApplicationId == null ? '' : encodeURIComponent(ApplicationId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete a configuration profile. Deleting a configuration profile does not delete a configuration from a host.
		 * Delete applications/{ApplicationId}/configurationprofiles/{ConfigurationProfileId}
		 * @param {string} ApplicationId The application ID that includes the configuration profile you want to delete.
		 * @param {string} ConfigurationProfileId The ID of the configuration profile you want to delete.
		 * @return {void} 
		 */
		DeleteConfigurationProfile(ApplicationId: string, ConfigurationProfileId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'applications/' + (ApplicationId == null ? '' : encodeURIComponent(ApplicationId)) + '/configurationprofiles/' + (ConfigurationProfileId == null ? '' : encodeURIComponent(ConfigurationProfileId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieve information about a configuration profile.
		 * Get applications/{ApplicationId}/configurationprofiles/{ConfigurationProfileId}
		 * @param {string} ApplicationId The ID of the application that includes the configuration profile you want to get.
		 * @param {string} ConfigurationProfileId The ID of the configuration profile you want to get.
		 * @return {ConfigurationProfile} Success
		 */
		GetConfigurationProfile(ApplicationId: string, ConfigurationProfileId: string): Observable<ConfigurationProfile> {
			return this.http.get<ConfigurationProfile>(this.baseUri + 'applications/' + (ApplicationId == null ? '' : encodeURIComponent(ApplicationId)) + '/configurationprofiles/' + (ConfigurationProfileId == null ? '' : encodeURIComponent(ConfigurationProfileId)), {});
		}

		/**
		 * Updates a configuration profile.
		 * Patch applications/{ApplicationId}/configurationprofiles/{ConfigurationProfileId}
		 * @param {string} ApplicationId The application ID.
		 * @param {string} ConfigurationProfileId The ID of the configuration profile.
		 * @return {ConfigurationProfile} Success
		 */
		UpdateConfigurationProfile(ApplicationId: string, ConfigurationProfileId: string, requestBody: UpdateConfigurationProfilePatchBody): Observable<ConfigurationProfile> {
			return this.http.patch<ConfigurationProfile>(this.baseUri + 'applications/' + (ApplicationId == null ? '' : encodeURIComponent(ApplicationId)) + '/configurationprofiles/' + (ConfigurationProfileId == null ? '' : encodeURIComponent(ConfigurationProfileId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete a deployment strategy. Deleting a deployment strategy does not delete a configuration from a host.
		 * Delete deployementstrategies/{DeploymentStrategyId}
		 * @param {string} DeploymentStrategyId The ID of the deployment strategy you want to delete.
		 * @return {void} 
		 */
		DeleteDeploymentStrategy(DeploymentStrategyId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'deployementstrategies/' + (DeploymentStrategyId == null ? '' : encodeURIComponent(DeploymentStrategyId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete an environment. Deleting an environment does not delete a configuration from a host.
		 * Delete applications/{ApplicationId}/environments/{EnvironmentId}
		 * @param {string} ApplicationId The application ID that includes the environment you want to delete.
		 * @param {string} EnvironmentId The ID of the environment you want to delete.
		 * @return {void} 
		 */
		DeleteEnvironment(ApplicationId: string, EnvironmentId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'applications/' + (ApplicationId == null ? '' : encodeURIComponent(ApplicationId)) + '/environments/' + (EnvironmentId == null ? '' : encodeURIComponent(EnvironmentId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieve information about an environment. An environment is a logical deployment group of AppConfig applications, such as applications in a <code>Production</code> environment or in an <code>EU_Region</code> environment. Each configuration deployment targets an environment. You can enable one or more Amazon CloudWatch alarms for an environment. If an alarm is triggered during a deployment, AppConfig roles back the configuration.
		 * Get applications/{ApplicationId}/environments/{EnvironmentId}
		 * @param {string} ApplicationId The ID of the application that includes the environment you want to get.
		 * @param {string} EnvironmentId The ID of the environment you wnat to get.
		 * @return {Environment} Success
		 */
		GetEnvironment(ApplicationId: string, EnvironmentId: string): Observable<Environment> {
			return this.http.get<Environment>(this.baseUri + 'applications/' + (ApplicationId == null ? '' : encodeURIComponent(ApplicationId)) + '/environments/' + (EnvironmentId == null ? '' : encodeURIComponent(EnvironmentId)), {});
		}

		/**
		 * Updates an environment.
		 * Patch applications/{ApplicationId}/environments/{EnvironmentId}
		 * @param {string} ApplicationId The application ID.
		 * @param {string} EnvironmentId The environment ID.
		 * @return {Environment} Success
		 */
		UpdateEnvironment(ApplicationId: string, EnvironmentId: string, requestBody: UpdateEnvironmentPatchBody): Observable<Environment> {
			return this.http.patch<Environment>(this.baseUri + 'applications/' + (ApplicationId == null ? '' : encodeURIComponent(ApplicationId)) + '/environments/' + (EnvironmentId == null ? '' : encodeURIComponent(EnvironmentId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Receive information about a configuration.</p> <important> <p>AWS AppConfig uses the value of the <code>ClientConfigurationVersion</code> parameter to identify the configuration version on your clients. If you don’t send <code>ClientConfigurationVersion</code> with each call to <code>GetConfiguration</code>, your clients receive the current configuration. You are charged each time your clients receive a configuration.</p> <p>To avoid excess charges, we recommend that you include the <code>ClientConfigurationVersion</code> value with every call to <code>GetConfiguration</code>. This value must be saved on your client. Subsequent calls to <code>GetConfiguration</code> must pass this value by using the <code>ClientConfigurationVersion</code> parameter. </p> </important>
		 * Get applications/{Application}/environments/{Environment}/configurations/{Configuration}#client_id
		 * @param {string} Application The application to get. Specify either the application name or the application ID.
		 * @param {string} Environment The environment to get. Specify either the environment name or the environment ID.
		 * @param {string} Configuration The configuration to get. Specify either the configuration name or the configuration ID.
		 * @param {string} client_id A unique ID to identify the client for the configuration. This ID enables AppConfig to deploy the configuration in intervals, as defined in the deployment strategy.
		 * @param {string} client_configuration_version <p>The configuration version returned in the most recent <code>GetConfiguration</code> response.</p> <important> <p>AWS AppConfig uses the value of the <code>ClientConfigurationVersion</code> parameter to identify the configuration version on your clients. If you don’t send <code>ClientConfigurationVersion</code> with each call to <code>GetConfiguration</code>, your clients receive the current configuration. You are charged each time your clients receive a configuration.</p> <p>To avoid excess charges, we recommend that you include the <code>ClientConfigurationVersion</code> value with every call to <code>GetConfiguration</code>. This value must be saved on your client. Subsequent calls to <code>GetConfiguration</code> must pass this value by using the <code>ClientConfigurationVersion</code> parameter. </p> </important> <p>For more information about working with configurations, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/appconfig-retrieving-the-configuration.html">Retrieving the Configuration</a> in the <i>AWS AppConfig User Guide</i>.</p>
		 * @return {Configuration} Success
		 */
		GetConfiguration(Application: string, Environment: string, Configuration: string, client_id: string, client_configuration_version: string | null | undefined): Observable<Configuration> {
			return this.http.get<Configuration>(this.baseUri + 'applications/' + (Application == null ? '' : encodeURIComponent(Application)) + '/environments/' + (Environment == null ? '' : encodeURIComponent(Environment)) + '/configurations/' + (Configuration == null ? '' : encodeURIComponent(Configuration)) + '#client_id&client_id=' + (client_id == null ? '' : encodeURIComponent(client_id)) + '&client_configuration_version=' + (client_configuration_version == null ? '' : encodeURIComponent(client_configuration_version)), {});
		}

		/**
		 * Retrieve information about a configuration deployment.
		 * Get applications/{ApplicationId}/environments/{EnvironmentId}/deployments/{DeploymentNumber}
		 * @param {string} ApplicationId The ID of the application that includes the deployment you want to get. 
		 * @param {string} EnvironmentId The ID of the environment that includes the deployment you want to get. 
		 * @param {number} DeploymentNumber The sequence number of the deployment.
		 * @return {Deployment} Success
		 */
		GetDeployment(ApplicationId: string, EnvironmentId: string, DeploymentNumber: number): Observable<Deployment> {
			return this.http.get<Deployment>(this.baseUri + 'applications/' + (ApplicationId == null ? '' : encodeURIComponent(ApplicationId)) + '/environments/' + (EnvironmentId == null ? '' : encodeURIComponent(EnvironmentId)) + '/deployments/' + DeploymentNumber, {});
		}

		/**
		 * Stops a deployment. This API action works only on deployments that have a status of <code>DEPLOYING</code>. This action moves the deployment to a status of <code>ROLLED_BACK</code>.
		 * Delete applications/{ApplicationId}/environments/{EnvironmentId}/deployments/{DeploymentNumber}
		 * @param {string} ApplicationId The application ID.
		 * @param {string} EnvironmentId The environment ID.
		 * @param {number} DeploymentNumber The sequence number of the deployment.
		 * @return {void} 
		 */
		StopDeployment(ApplicationId: string, EnvironmentId: string, DeploymentNumber: number): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'applications/' + (ApplicationId == null ? '' : encodeURIComponent(ApplicationId)) + '/environments/' + (EnvironmentId == null ? '' : encodeURIComponent(EnvironmentId)) + '/deployments/' + DeploymentNumber, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieve information about a deployment strategy. A deployment strategy defines important criteria for rolling out your configuration to the designated targets. A deployment strategy includes: the overall duration required, a percentage of targets to receive the deployment during each interval, an algorithm that defines how percentage grows, and bake time.
		 * Get deploymentstrategies/{DeploymentStrategyId}
		 * @param {string} DeploymentStrategyId The ID of the deployment strategy to get.
		 * @return {DeploymentStrategy} Success
		 */
		GetDeploymentStrategy(DeploymentStrategyId: string): Observable<DeploymentStrategy> {
			return this.http.get<DeploymentStrategy>(this.baseUri + 'deploymentstrategies/' + (DeploymentStrategyId == null ? '' : encodeURIComponent(DeploymentStrategyId)), {});
		}

		/**
		 * Updates a deployment strategy.
		 * Patch deploymentstrategies/{DeploymentStrategyId}
		 * @param {string} DeploymentStrategyId The deployment strategy ID.
		 * @return {DeploymentStrategy} Success
		 */
		UpdateDeploymentStrategy(DeploymentStrategyId: string, requestBody: UpdateDeploymentStrategyPatchBody): Observable<DeploymentStrategy> {
			return this.http.patch<DeploymentStrategy>(this.baseUri + 'deploymentstrategies/' + (DeploymentStrategyId == null ? '' : encodeURIComponent(DeploymentStrategyId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the deployments for an environment.
		 * Get applications/{ApplicationId}/environments/{EnvironmentId}/deployments
		 * @param {string} ApplicationId The application ID.
		 * @param {string} EnvironmentId The environment ID.
		 * @param {number} max_results The maximum number of items to return for this call. The call also returns a token that you can specify in a subsequent call to get the next set of results.
		 * @param {string} next_token A token to start the list. Use this token to get the next set of results.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {Deployments} Success
		 */
		ListDeployments(ApplicationId: string, EnvironmentId: string, max_results: number | null | undefined, next_token: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<Deployments> {
			return this.http.get<Deployments>(this.baseUri + 'applications/' + (ApplicationId == null ? '' : encodeURIComponent(ApplicationId)) + '/environments/' + (EnvironmentId == null ? '' : encodeURIComponent(EnvironmentId)) + '/deployments&max_results=' + max_results + '&next_token=' + (next_token == null ? '' : encodeURIComponent(next_token)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Starts a deployment.
		 * Post applications/{ApplicationId}/environments/{EnvironmentId}/deployments
		 * @param {string} ApplicationId The application ID.
		 * @param {string} EnvironmentId The environment ID.
		 * @return {void} 
		 */
		StartDeployment(ApplicationId: string, EnvironmentId: string, requestBody: StartDeploymentPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'applications/' + (ApplicationId == null ? '' : encodeURIComponent(ApplicationId)) + '/environments/' + (EnvironmentId == null ? '' : encodeURIComponent(EnvironmentId)) + '/deployments', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves the list of key-value tags assigned to the resource.
		 * Get tags/{ResourceArn}
		 * @param {string} ResourceArn The resource ARN.
		 * @return {ResourceTags} Success
		 */
		ListTagsForResource(ResourceArn: string): Observable<ResourceTags> {
			return this.http.get<ResourceTags>(this.baseUri + 'tags/' + (ResourceArn == null ? '' : encodeURIComponent(ResourceArn)), {});
		}

		/**
		 * Metadata to assign to an AppConfig resource. Tags help organize and categorize your AppConfig resources. Each tag consists of a key and an optional value, both of which you define. You can specify a maximum of 50 tags for a resource.
		 * Post tags/{ResourceArn}
		 * @param {string} ResourceArn The ARN of the resource for which to retrieve tags.
		 * @return {void} 
		 */
		TagResource(ResourceArn: string, requestBody: TagResourcePostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'tags/' + (ResourceArn == null ? '' : encodeURIComponent(ResourceArn)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a tag key and value from an AppConfig resource.
		 * Delete tags/{ResourceArn}#tagKeys
		 * @param {string} ResourceArn The ARN of the resource for which to remove tags.
		 * @param {Array<string>} tagKeys The tag keys to delete.
		 * @return {void} 
		 */
		UntagResource(ResourceArn: string, tagKeys: Array<string>): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'tags/' + (ResourceArn == null ? '' : encodeURIComponent(ResourceArn)) + '#tagKeys&' + tagKeys.map(z => `tagKeys=${encodeURIComponent(z)}`).join('&'), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Uses the validators in a configuration profile to validate a configuration.
		 * Post applications/{ApplicationId}/configurationprofiles/{ConfigurationProfileId}/validators#configuration_version
		 * @param {string} ApplicationId The application ID.
		 * @param {string} ConfigurationProfileId The configuration profile ID.
		 * @param {string} configuration_version The version of the configuration to validate.
		 * @return {void} 
		 */
		ValidateConfiguration(ApplicationId: string, ConfigurationProfileId: string, configuration_version: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'applications/' + (ApplicationId == null ? '' : encodeURIComponent(ApplicationId)) + '/configurationprofiles/' + (ConfigurationProfileId == null ? '' : encodeURIComponent(ConfigurationProfileId)) + '/validators#configuration_version&configuration_version=' + (configuration_version == null ? '' : encodeURIComponent(configuration_version)), null, { observe: 'response', responseType: 'text' });
		}
	}

	export interface CreateApplicationPostBody {

		/**
		 * A name for the application.
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		Name: string;

		/**
		 * A description of the application.
		 * Max length: 1024
		 * Min length: 0
		 */
		Description?: string | null;

		/** Metadata to assign to the application. Tags help organize and categorize your AppConfig resources. Each tag consists of a key and an optional value, both of which you define. */
		Tags?: {[id: string]: string };
	}
	export interface CreateApplicationPostBodyFormProperties {

		/**
		 * A name for the application.
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * A description of the application.
		 * Max length: 1024
		 * Min length: 0
		 */
		Description: FormControl<string | null | undefined>,

		/** Metadata to assign to the application. Tags help organize and categorize your AppConfig resources. Each tag consists of a key and an optional value, both of which you define. */
		Tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateApplicationPostBodyFormGroup() {
		return new FormGroup<CreateApplicationPostBodyFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			Tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateConfigurationProfilePostBody {

		/**
		 * A name for the configuration profile.
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		Name: string;

		/**
		 * A description of the configuration profile.
		 * Max length: 1024
		 * Min length: 0
		 */
		Description?: string | null;

		/**
		 * A URI to locate the configuration. You can specify a Systems Manager (SSM) document, an SSM Parameter Store parameter, or an Amazon S3 object. For an SSM document, specify either the document name in the format <code>ssm-document://&lt;Document_name&gt;</code> or the Amazon Resource Name (ARN). For a parameter, specify either the parameter name in the format <code>ssm-parameter://&lt;Parameter_name&gt;</code> or the ARN. For an Amazon S3 object, specify the URI in the following format: <code>s3://&lt;bucket&gt;/&lt;objectKey&gt; </code>. Here is an example: s3://my-bucket/my-app/us-east-1/my-config.json
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 */
		LocationUri: string;

		/**
		 * The ARN of an IAM role with permission to access the configuration at the specified LocationUri.
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 * Pattern: arn:(aws[a-zA-Z-]*)?:[a-z]+:([a-z]{2}((-gov)|(-iso(b?)))?-[a-z]+-\d{1})?:(\d{12})?:[a-zA-Z0-9-_/:.]+
		 */
		RetrievalRoleArn: string;

		/**
		 * A list of methods for validating the configuration.
		 * Minimum items: 0
		 * Maximum items: 2
		 */
		Validators?: Array<Validator>;

		/** Metadata to assign to the configuration profile. Tags help organize and categorize your AppConfig resources. Each tag consists of a key and an optional value, both of which you define. */
		Tags?: {[id: string]: string };
	}
	export interface CreateConfigurationProfilePostBodyFormProperties {

		/**
		 * A name for the configuration profile.
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * A description of the configuration profile.
		 * Max length: 1024
		 * Min length: 0
		 */
		Description: FormControl<string | null | undefined>,

		/**
		 * A URI to locate the configuration. You can specify a Systems Manager (SSM) document, an SSM Parameter Store parameter, or an Amazon S3 object. For an SSM document, specify either the document name in the format <code>ssm-document://&lt;Document_name&gt;</code> or the Amazon Resource Name (ARN). For a parameter, specify either the parameter name in the format <code>ssm-parameter://&lt;Parameter_name&gt;</code> or the ARN. For an Amazon S3 object, specify the URI in the following format: <code>s3://&lt;bucket&gt;/&lt;objectKey&gt; </code>. Here is an example: s3://my-bucket/my-app/us-east-1/my-config.json
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 */
		LocationUri: FormControl<string | null | undefined>,

		/**
		 * The ARN of an IAM role with permission to access the configuration at the specified LocationUri.
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 * Pattern: arn:(aws[a-zA-Z-]*)?:[a-z]+:([a-z]{2}((-gov)|(-iso(b?)))?-[a-z]+-\d{1})?:(\d{12})?:[a-zA-Z0-9-_/:.]+
		 */
		RetrievalRoleArn: FormControl<string | null | undefined>,

		/** Metadata to assign to the configuration profile. Tags help organize and categorize your AppConfig resources. Each tag consists of a key and an optional value, both of which you define. */
		Tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateConfigurationProfilePostBodyFormGroup() {
		return new FormGroup<CreateConfigurationProfilePostBodyFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			LocationUri: new FormControl<string | null | undefined>(undefined),
			RetrievalRoleArn: new FormControl<string | null | undefined>(undefined),
			Tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateDeploymentStrategyPostBody {

		/**
		 * A name for the deployment strategy.
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		Name: string;

		/**
		 * A description of the deployment strategy.
		 * Max length: 1024
		 * Min length: 0
		 */
		Description?: string | null;

		/**
		 * Total amount of time for a deployment to last.
		 * Required
		 * Minimum: 0
		 * Maximum: 1440
		 */
		DeploymentDurationInMinutes: number;

		/**
		 * The amount of time AppConfig monitors for alarms before considering the deployment to be complete and no longer eligible for automatic roll back.
		 * Minimum: 0
		 * Maximum: 1440
		 */
		FinalBakeTimeInMinutes?: number | null;

		/**
		 * The percentage of targets to receive a deployed configuration during each interval.
		 * Required
		 * Minimum: 1
		 * Maximum: 100
		 */
		GrowthFactor: number;

		/** <p>The algorithm used to define how percentage grows over time. AWS AppConfig supports the following growth types:</p> <p> <b>Linear</b>: For this type, AppConfig processes the deployment by dividing the total number of targets by the value specified for <code>Step percentage</code>. For example, a linear deployment that uses a <code>Step percentage</code> of 10 deploys the configuration to 10 percent of the hosts. After those deployments are complete, the system deploys the configuration to the next 10 percent. This continues until 100% of the targets have successfully received the configuration.</p> <p> <b>Exponential</b>: For this type, AppConfig processes the deployment exponentially using the following formula: <code>G*(2^N)</code>. In this formula, <code>G</code> is the growth factor specified by the user and <code>N</code> is the number of steps until the configuration is deployed to all targets. For example, if you specify a growth factor of 2, then the system rolls out the configuration as follows:</p> <p> <code>2*(2^0)</code> </p> <p> <code>2*(2^1)</code> </p> <p> <code>2*(2^2)</code> </p> <p>Expressed numerically, the deployment rolls out as follows: 2% of the targets, 4% of the targets, 8% of the targets, and continues until the configuration has been deployed to all targets.</p> */
		GrowthType?: DeploymentStrategyGrowthType | null;

		/**
		 * Save the deployment strategy to a Systems Manager (SSM) document.
		 * Required
		 */
		ReplicateTo: DeploymentStrategyReplicateTo;

		/** Metadata to assign to the deployment strategy. Tags help organize and categorize your AppConfig resources. Each tag consists of a key and an optional value, both of which you define. */
		Tags?: {[id: string]: string };
	}
	export interface CreateDeploymentStrategyPostBodyFormProperties {

		/**
		 * A name for the deployment strategy.
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * A description of the deployment strategy.
		 * Max length: 1024
		 * Min length: 0
		 */
		Description: FormControl<string | null | undefined>,

		/**
		 * Total amount of time for a deployment to last.
		 * Required
		 * Minimum: 0
		 * Maximum: 1440
		 */
		DeploymentDurationInMinutes: FormControl<number | null | undefined>,

		/**
		 * The amount of time AppConfig monitors for alarms before considering the deployment to be complete and no longer eligible for automatic roll back.
		 * Minimum: 0
		 * Maximum: 1440
		 */
		FinalBakeTimeInMinutes: FormControl<number | null | undefined>,

		/**
		 * The percentage of targets to receive a deployed configuration during each interval.
		 * Required
		 * Minimum: 1
		 * Maximum: 100
		 */
		GrowthFactor: FormControl<number | null | undefined>,

		/** <p>The algorithm used to define how percentage grows over time. AWS AppConfig supports the following growth types:</p> <p> <b>Linear</b>: For this type, AppConfig processes the deployment by dividing the total number of targets by the value specified for <code>Step percentage</code>. For example, a linear deployment that uses a <code>Step percentage</code> of 10 deploys the configuration to 10 percent of the hosts. After those deployments are complete, the system deploys the configuration to the next 10 percent. This continues until 100% of the targets have successfully received the configuration.</p> <p> <b>Exponential</b>: For this type, AppConfig processes the deployment exponentially using the following formula: <code>G*(2^N)</code>. In this formula, <code>G</code> is the growth factor specified by the user and <code>N</code> is the number of steps until the configuration is deployed to all targets. For example, if you specify a growth factor of 2, then the system rolls out the configuration as follows:</p> <p> <code>2*(2^0)</code> </p> <p> <code>2*(2^1)</code> </p> <p> <code>2*(2^2)</code> </p> <p>Expressed numerically, the deployment rolls out as follows: 2% of the targets, 4% of the targets, 8% of the targets, and continues until the configuration has been deployed to all targets.</p> */
		GrowthType: FormControl<DeploymentStrategyGrowthType | null | undefined>,

		/**
		 * Save the deployment strategy to a Systems Manager (SSM) document.
		 * Required
		 */
		ReplicateTo: FormControl<DeploymentStrategyReplicateTo | null | undefined>,

		/** Metadata to assign to the deployment strategy. Tags help organize and categorize your AppConfig resources. Each tag consists of a key and an optional value, both of which you define. */
		Tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateDeploymentStrategyPostBodyFormGroup() {
		return new FormGroup<CreateDeploymentStrategyPostBodyFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			DeploymentDurationInMinutes: new FormControl<number | null | undefined>(undefined),
			FinalBakeTimeInMinutes: new FormControl<number | null | undefined>(undefined),
			GrowthFactor: new FormControl<number | null | undefined>(undefined),
			GrowthType: new FormControl<DeploymentStrategyGrowthType | null | undefined>(undefined),
			ReplicateTo: new FormControl<DeploymentStrategyReplicateTo | null | undefined>(undefined),
			Tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateEnvironmentPostBody {

		/**
		 * A name for the environment.
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		Name: string;

		/**
		 * A description of the environment.
		 * Max length: 1024
		 * Min length: 0
		 */
		Description?: string | null;

		/**
		 * Amazon CloudWatch alarms to monitor during the deployment process.
		 * Minimum items: 0
		 * Maximum items: 5
		 */
		Monitors?: Array<Monitor>;

		/** Metadata to assign to the environment. Tags help organize and categorize your AppConfig resources. Each tag consists of a key and an optional value, both of which you define. */
		Tags?: {[id: string]: string };
	}
	export interface CreateEnvironmentPostBodyFormProperties {

		/**
		 * A name for the environment.
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * A description of the environment.
		 * Max length: 1024
		 * Min length: 0
		 */
		Description: FormControl<string | null | undefined>,

		/** Metadata to assign to the environment. Tags help organize and categorize your AppConfig resources. Each tag consists of a key and an optional value, both of which you define. */
		Tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateEnvironmentPostBodyFormGroup() {
		return new FormGroup<CreateEnvironmentPostBodyFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			Tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface UpdateApplicationPatchBody {

		/**
		 * The name of the application.
		 * Max length: 64
		 * Min length: 1
		 */
		Name?: string | null;

		/**
		 * A description of the application.
		 * Max length: 1024
		 * Min length: 0
		 */
		Description?: string | null;
	}
	export interface UpdateApplicationPatchBodyFormProperties {

		/**
		 * The name of the application.
		 * Max length: 64
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * A description of the application.
		 * Max length: 1024
		 * Min length: 0
		 */
		Description: FormControl<string | null | undefined>,
	}
	export function CreateUpdateApplicationPatchBodyFormGroup() {
		return new FormGroup<UpdateApplicationPatchBodyFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateConfigurationProfilePatchBody {

		/**
		 * The name of the configuration profile.
		 * Max length: 64
		 * Min length: 1
		 */
		Name?: string | null;

		/**
		 * A description of the configuration profile.
		 * Max length: 1024
		 * Min length: 0
		 */
		Description?: string | null;

		/**
		 * The ARN of an IAM role with permission to access the configuration at the specified LocationUri.
		 * Max length: 2048
		 * Min length: 20
		 * Pattern: arn:(aws[a-zA-Z-]*)?:[a-z]+:([a-z]{2}((-gov)|(-iso(b?)))?-[a-z]+-\d{1})?:(\d{12})?:[a-zA-Z0-9-_/:.]+
		 */
		RetrievalRoleArn?: string | null;

		/**
		 * A list of methods for validating the configuration.
		 * Minimum items: 0
		 * Maximum items: 2
		 */
		Validators?: Array<Validator>;
	}
	export interface UpdateConfigurationProfilePatchBodyFormProperties {

		/**
		 * The name of the configuration profile.
		 * Max length: 64
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * A description of the configuration profile.
		 * Max length: 1024
		 * Min length: 0
		 */
		Description: FormControl<string | null | undefined>,

		/**
		 * The ARN of an IAM role with permission to access the configuration at the specified LocationUri.
		 * Max length: 2048
		 * Min length: 20
		 * Pattern: arn:(aws[a-zA-Z-]*)?:[a-z]+:([a-z]{2}((-gov)|(-iso(b?)))?-[a-z]+-\d{1})?:(\d{12})?:[a-zA-Z0-9-_/:.]+
		 */
		RetrievalRoleArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateConfigurationProfilePatchBodyFormGroup() {
		return new FormGroup<UpdateConfigurationProfilePatchBodyFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			RetrievalRoleArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateEnvironmentPatchBody {

		/**
		 * The name of the environment.
		 * Max length: 64
		 * Min length: 1
		 */
		Name?: string | null;

		/**
		 * A description of the environment.
		 * Max length: 1024
		 * Min length: 0
		 */
		Description?: string | null;

		/**
		 * Amazon CloudWatch alarms to monitor during the deployment process.
		 * Minimum items: 0
		 * Maximum items: 5
		 */
		Monitors?: Array<Monitor>;
	}
	export interface UpdateEnvironmentPatchBodyFormProperties {

		/**
		 * The name of the environment.
		 * Max length: 64
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * A description of the environment.
		 * Max length: 1024
		 * Min length: 0
		 */
		Description: FormControl<string | null | undefined>,
	}
	export function CreateUpdateEnvironmentPatchBodyFormGroup() {
		return new FormGroup<UpdateEnvironmentPatchBodyFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateDeploymentStrategyPatchBody {

		/**
		 * A description of the deployment strategy.
		 * Max length: 1024
		 * Min length: 0
		 */
		Description?: string | null;

		/**
		 * Total amount of time for a deployment to last.
		 * Minimum: 0
		 * Maximum: 1440
		 */
		DeploymentDurationInMinutes?: number | null;

		/**
		 * The amount of time AppConfig monitors for alarms before considering the deployment to be complete and no longer eligible for automatic roll back.
		 * Minimum: 0
		 * Maximum: 1440
		 */
		FinalBakeTimeInMinutes?: number | null;

		/**
		 * The percentage of targets to receive a deployed configuration during each interval.
		 * Minimum: 1
		 * Maximum: 100
		 */
		GrowthFactor?: number | null;

		/** <p>The algorithm used to define how percentage grows over time. AWS AppConfig supports the following growth types:</p> <p> <b>Linear</b>: For this type, AppConfig processes the deployment by increments of the growth factor evenly distributed over the deployment time. For example, a linear deployment that uses a growth factor of 20 initially makes the configuration available to 20 percent of the targets. After 1/5th of the deployment time has passed, the system updates the percentage to 40 percent. This continues until 100% of the targets are set to receive the deployed configuration.</p> <p> <b>Exponential</b>: For this type, AppConfig processes the deployment exponentially using the following formula: <code>G*(2^N)</code>. In this formula, <code>G</code> is the growth factor specified by the user and <code>N</code> is the number of steps until the configuration is deployed to all targets. For example, if you specify a growth factor of 2, then the system rolls out the configuration as follows:</p> <p> <code>2*(2^0)</code> </p> <p> <code>2*(2^1)</code> </p> <p> <code>2*(2^2)</code> </p> <p>Expressed numerically, the deployment rolls out as follows: 2% of the targets, 4% of the targets, 8% of the targets, and continues until the configuration has been deployed to all targets.</p> */
		GrowthType?: DeploymentStrategyGrowthType | null;
	}
	export interface UpdateDeploymentStrategyPatchBodyFormProperties {

		/**
		 * A description of the deployment strategy.
		 * Max length: 1024
		 * Min length: 0
		 */
		Description: FormControl<string | null | undefined>,

		/**
		 * Total amount of time for a deployment to last.
		 * Minimum: 0
		 * Maximum: 1440
		 */
		DeploymentDurationInMinutes: FormControl<number | null | undefined>,

		/**
		 * The amount of time AppConfig monitors for alarms before considering the deployment to be complete and no longer eligible for automatic roll back.
		 * Minimum: 0
		 * Maximum: 1440
		 */
		FinalBakeTimeInMinutes: FormControl<number | null | undefined>,

		/**
		 * The percentage of targets to receive a deployed configuration during each interval.
		 * Minimum: 1
		 * Maximum: 100
		 */
		GrowthFactor: FormControl<number | null | undefined>,

		/** <p>The algorithm used to define how percentage grows over time. AWS AppConfig supports the following growth types:</p> <p> <b>Linear</b>: For this type, AppConfig processes the deployment by increments of the growth factor evenly distributed over the deployment time. For example, a linear deployment that uses a growth factor of 20 initially makes the configuration available to 20 percent of the targets. After 1/5th of the deployment time has passed, the system updates the percentage to 40 percent. This continues until 100% of the targets are set to receive the deployed configuration.</p> <p> <b>Exponential</b>: For this type, AppConfig processes the deployment exponentially using the following formula: <code>G*(2^N)</code>. In this formula, <code>G</code> is the growth factor specified by the user and <code>N</code> is the number of steps until the configuration is deployed to all targets. For example, if you specify a growth factor of 2, then the system rolls out the configuration as follows:</p> <p> <code>2*(2^0)</code> </p> <p> <code>2*(2^1)</code> </p> <p> <code>2*(2^2)</code> </p> <p>Expressed numerically, the deployment rolls out as follows: 2% of the targets, 4% of the targets, 8% of the targets, and continues until the configuration has been deployed to all targets.</p> */
		GrowthType: FormControl<DeploymentStrategyGrowthType | null | undefined>,
	}
	export function CreateUpdateDeploymentStrategyPatchBodyFormGroup() {
		return new FormGroup<UpdateDeploymentStrategyPatchBodyFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined),
			DeploymentDurationInMinutes: new FormControl<number | null | undefined>(undefined),
			FinalBakeTimeInMinutes: new FormControl<number | null | undefined>(undefined),
			GrowthFactor: new FormControl<number | null | undefined>(undefined),
			GrowthType: new FormControl<DeploymentStrategyGrowthType | null | undefined>(undefined),
		});

	}

	export interface StartDeploymentPostBody {

		/**
		 * The deployment strategy ID.
		 * Required
		 * Pattern: ([a-z0-9]{4,7}|arn:aws.*)
		 */
		DeploymentStrategyId: string;

		/**
		 * The configuration profile ID.
		 * Required
		 * Pattern: [a-z0-9]{4,7}
		 */
		ConfigurationProfileId: string;

		/**
		 * The configuration version to deploy.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		ConfigurationVersion: string;

		/**
		 * A description of the deployment.
		 * Max length: 1024
		 * Min length: 0
		 */
		Description?: string | null;

		/** Metadata to assign to the deployment. Tags help organize and categorize your AppConfig resources. Each tag consists of a key and an optional value, both of which you define. */
		Tags?: {[id: string]: string };
	}
	export interface StartDeploymentPostBodyFormProperties {

		/**
		 * The deployment strategy ID.
		 * Required
		 * Pattern: ([a-z0-9]{4,7}|arn:aws.*)
		 */
		DeploymentStrategyId: FormControl<string | null | undefined>,

		/**
		 * The configuration profile ID.
		 * Required
		 * Pattern: [a-z0-9]{4,7}
		 */
		ConfigurationProfileId: FormControl<string | null | undefined>,

		/**
		 * The configuration version to deploy.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		ConfigurationVersion: FormControl<string | null | undefined>,

		/**
		 * A description of the deployment.
		 * Max length: 1024
		 * Min length: 0
		 */
		Description: FormControl<string | null | undefined>,

		/** Metadata to assign to the deployment. Tags help organize and categorize your AppConfig resources. Each tag consists of a key and an optional value, both of which you define. */
		Tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateStartDeploymentPostBodyFormGroup() {
		return new FormGroup<StartDeploymentPostBodyFormProperties>({
			DeploymentStrategyId: new FormControl<string | null | undefined>(undefined),
			ConfigurationProfileId: new FormControl<string | null | undefined>(undefined),
			ConfigurationVersion: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			Tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface TagResourcePostBody {

		/**
		 * The key-value string map. The valid character set is [a-zA-Z+-=._:/]. The tag key can be up to 128 characters and must not start with <code>aws:</code>. The tag value can be up to 256 characters.
		 * Required
		 */
		Tags: {[id: string]: string };
	}
	export interface TagResourcePostBodyFormProperties {

		/**
		 * The key-value string map. The valid character set is [a-zA-Z+-=._:/]. The tag key can be up to 128 characters and must not start with <code>aws:</code>. The tag value can be up to 256 characters.
		 * Required
		 */
		Tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateTagResourcePostBodyFormGroup() {
		return new FormGroup<TagResourcePostBodyFormProperties>({
			Tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

}

