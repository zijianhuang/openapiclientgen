import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface Application {
		Id?: string;
		Name?: string;
		Description?: string;
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
		ApplicationId?: string;
		Id?: string;
		Name?: string;
		Description?: string;
		LocationUri?: string;
		RetrievalRoleArn?: string;
		Validators?: Array<Validator>;
		Type?: string;
	}
	export interface ConfigurationProfileFormProperties {
		ApplicationId: FormControl<string | null | undefined>,
		Id: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		LocationUri: FormControl<string | null | undefined>,
		RetrievalRoleArn: FormControl<string | null | undefined>,
		Type: FormControl<string | null | undefined>,
	}
	export function CreateConfigurationProfileFormGroup() {
		return new FormGroup<ConfigurationProfileFormProperties>({
			ApplicationId: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			LocationUri: new FormControl<string | null | undefined>(undefined),
			RetrievalRoleArn: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A validator provides a syntactic or semantic check to ensure the configuration that you want to deploy functions as intended. To validate your application configuration data, you provide a schema or an Amazon Web Services Lambda function that runs against the configuration. The configuration deployment or update can only proceed when the configuration data is valid. */
	export interface Validator {

		/** Required */
		Type: ValidatorType;

		/** Required */
		Content: string;
	}

	/** A validator provides a syntactic or semantic check to ensure the configuration that you want to deploy functions as intended. To validate your application configuration data, you provide a schema or an Amazon Web Services Lambda function that runs against the configuration. The configuration deployment or update can only proceed when the configuration data is valid. */
	export interface ValidatorFormProperties {

		/** Required */
		Type: FormControl<ValidatorType | null | undefined>,

		/** Required */
		Content: FormControl<string | null | undefined>,
	}
	export function CreateValidatorFormGroup() {
		return new FormGroup<ValidatorFormProperties>({
			Type: new FormControl<ValidatorType | null | undefined>(undefined, [Validators.required]),
			Content: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ValidatorType { JSON_SCHEMA = 'JSON_SCHEMA', LAMBDA = 'LAMBDA' }

	export interface ResourceNotFoundException {
	}
	export interface ResourceNotFoundExceptionFormProperties {
	}
	export function CreateResourceNotFoundExceptionFormGroup() {
		return new FormGroup<ResourceNotFoundExceptionFormProperties>({
		});

	}

	export interface DeploymentStrategy {
		Id?: string;
		Name?: string;
		Description?: string;
		DeploymentDurationInMinutes?: number | null;
		GrowthType?: GrowthType;
		GrowthFactor?: number;
		FinalBakeTimeInMinutes?: number | null;
		ReplicateTo?: ReplicateTo;
	}
	export interface DeploymentStrategyFormProperties {
		Id: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		DeploymentDurationInMinutes: FormControl<number | null | undefined>,
		GrowthType: FormControl<GrowthType | null | undefined>,
		GrowthFactor: FormControl<number | null | undefined>,
		FinalBakeTimeInMinutes: FormControl<number | null | undefined>,
		ReplicateTo: FormControl<ReplicateTo | null | undefined>,
	}
	export function CreateDeploymentStrategyFormGroup() {
		return new FormGroup<DeploymentStrategyFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			DeploymentDurationInMinutes: new FormControl<number | null | undefined>(undefined),
			GrowthType: new FormControl<GrowthType | null | undefined>(undefined),
			GrowthFactor: new FormControl<number | null | undefined>(undefined),
			FinalBakeTimeInMinutes: new FormControl<number | null | undefined>(undefined),
			ReplicateTo: new FormControl<ReplicateTo | null | undefined>(undefined),
		});

	}

	export enum GrowthType { LINEAR = 'LINEAR', EXPONENTIAL = 'EXPONENTIAL' }

	export enum ReplicateTo { NONE = 'NONE', SSM_DOCUMENT = 'SSM_DOCUMENT' }

	export interface Environment {
		ApplicationId?: string;
		Id?: string;
		Name?: string;
		Description?: string;
		State?: EnvironmentState;
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

	export enum EnvironmentState { READY_FOR_DEPLOYMENT = 'READY_FOR_DEPLOYMENT', DEPLOYING = 'DEPLOYING', ROLLING_BACK = 'ROLLING_BACK', ROLLED_BACK = 'ROLLED_BACK' }


	/** Amazon CloudWatch alarms to monitor during the deployment process. */
	export interface Monitor {

		/** Required */
		AlarmArn: string;
		AlarmRoleArn?: string;
	}

	/** Amazon CloudWatch alarms to monitor during the deployment process. */
	export interface MonitorFormProperties {

		/** Required */
		AlarmArn: FormControl<string | null | undefined>,
		AlarmRoleArn: FormControl<string | null | undefined>,
	}
	export function CreateMonitorFormGroup() {
		return new FormGroup<MonitorFormProperties>({
			AlarmArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			AlarmRoleArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Extension {
		Id?: string;
		Name?: string;
		VersionNumber?: number | null;
		Arn?: string;
		Description?: string;
		Actions?: ActionsMap;
		Parameters?: ParameterMap;
	}
	export interface ExtensionFormProperties {
		Id: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		VersionNumber: FormControl<number | null | undefined>,
		Arn: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
	}
	export function CreateExtensionFormGroup() {
		return new FormGroup<ExtensionFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			VersionNumber: new FormControl<number | null | undefined>(undefined),
			Arn: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ActionsMap {
	}
	export interface ActionsMapFormProperties {
	}
	export function CreateActionsMapFormGroup() {
		return new FormGroup<ActionsMapFormProperties>({
		});

	}

	export interface ParameterMap {
	}
	export interface ParameterMapFormProperties {
	}
	export function CreateParameterMapFormGroup() {
		return new FormGroup<ParameterMapFormProperties>({
		});

	}


	/** <p>An action defines the tasks that the extension performs during the AppConfig workflow. Each action includes an action point such as <code>ON_CREATE_HOSTED_CONFIGURATION</code>, <code>PRE_DEPLOYMENT</code>, or <code>ON_DEPLOYMENT</code>. Each action also includes a name, a URI to an Lambda function, and an Amazon Resource Name (ARN) for an Identity and Access Management assume role. You specify the name, URI, and ARN for each <i>action point</i> defined in the extension. You can specify the following actions for an extension:</p> <ul> <li> <p> <code>PRE_CREATE_HOSTED_CONFIGURATION_VERSION</code> </p> </li> <li> <p> <code>PRE_START_DEPLOYMENT</code> </p> </li> <li> <p> <code>ON_DEPLOYMENT_START</code> </p> </li> <li> <p> <code>ON_DEPLOYMENT_STEP</code> </p> </li> <li> <p> <code>ON_DEPLOYMENT_BAKING</code> </p> </li> <li> <p> <code>ON_DEPLOYMENT_COMPLETE</code> </p> </li> <li> <p> <code>ON_DEPLOYMENT_ROLLED_BACK</code> </p> </li> </ul> */
	export interface Action {
		Name?: string;
		Description?: string;
		Uri?: string;
		RoleArn?: string;
	}

	/** <p>An action defines the tasks that the extension performs during the AppConfig workflow. Each action includes an action point such as <code>ON_CREATE_HOSTED_CONFIGURATION</code>, <code>PRE_DEPLOYMENT</code>, or <code>ON_DEPLOYMENT</code>. Each action also includes a name, a URI to an Lambda function, and an Amazon Resource Name (ARN) for an Identity and Access Management assume role. You specify the name, URI, and ARN for each <i>action point</i> defined in the extension. You can specify the following actions for an extension:</p> <ul> <li> <p> <code>PRE_CREATE_HOSTED_CONFIGURATION_VERSION</code> </p> </li> <li> <p> <code>PRE_START_DEPLOYMENT</code> </p> </li> <li> <p> <code>ON_DEPLOYMENT_START</code> </p> </li> <li> <p> <code>ON_DEPLOYMENT_STEP</code> </p> </li> <li> <p> <code>ON_DEPLOYMENT_BAKING</code> </p> </li> <li> <p> <code>ON_DEPLOYMENT_COMPLETE</code> </p> </li> <li> <p> <code>ON_DEPLOYMENT_ROLLED_BACK</code> </p> </li> </ul> */
	export interface ActionFormProperties {
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		Uri: FormControl<string | null | undefined>,
		RoleArn: FormControl<string | null | undefined>,
	}
	export function CreateActionFormGroup() {
		return new FormGroup<ActionFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			Uri: new FormControl<string | null | undefined>(undefined),
			RoleArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A value such as an Amazon Resource Name (ARN) or an Amazon Simple Notification Service topic entered in an extension when invoked. Parameter values are specified in an extension association. For more information about extensions, see <a href="https://docs.aws.amazon.com/appconfig/latest/userguide/working-with-appconfig-extensions.html">Working with AppConfig extensions</a> in the <i>AppConfig User Guide</i>. */
	export interface Parameter {
		Description?: string;
		Required?: boolean | null;
	}

	/** A value such as an Amazon Resource Name (ARN) or an Amazon Simple Notification Service topic entered in an extension when invoked. Parameter values are specified in an extension association. For more information about extensions, see <a href="https://docs.aws.amazon.com/appconfig/latest/userguide/working-with-appconfig-extensions.html">Working with AppConfig extensions</a> in the <i>AppConfig User Guide</i>. */
	export interface ParameterFormProperties {
		Description: FormControl<string | null | undefined>,
		Required: FormControl<boolean | null | undefined>,
	}
	export function CreateParameterFormGroup() {
		return new FormGroup<ParameterFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined),
			Required: new FormControl<boolean | null | undefined>(undefined),
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

	export interface ServiceQuotaExceededException {
	}
	export interface ServiceQuotaExceededExceptionFormProperties {
	}
	export function CreateServiceQuotaExceededExceptionFormGroup() {
		return new FormGroup<ServiceQuotaExceededExceptionFormProperties>({
		});

	}

	export interface ExtensionAssociation {
		Id?: string;
		ExtensionArn?: string;
		ResourceArn?: string;
		Arn?: string;
		Parameters?: ParameterValueMap;
		ExtensionVersionNumber?: number | null;
	}
	export interface ExtensionAssociationFormProperties {
		Id: FormControl<string | null | undefined>,
		ExtensionArn: FormControl<string | null | undefined>,
		ResourceArn: FormControl<string | null | undefined>,
		Arn: FormControl<string | null | undefined>,
		ExtensionVersionNumber: FormControl<number | null | undefined>,
	}
	export function CreateExtensionAssociationFormGroup() {
		return new FormGroup<ExtensionAssociationFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			ExtensionArn: new FormControl<string | null | undefined>(undefined),
			ResourceArn: new FormControl<string | null | undefined>(undefined),
			Arn: new FormControl<string | null | undefined>(undefined),
			ExtensionVersionNumber: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ParameterValueMap {
	}
	export interface ParameterValueMapFormProperties {
	}
	export function CreateParameterValueMapFormGroup() {
		return new FormGroup<ParameterValueMapFormProperties>({
		});

	}

	export interface HostedConfigurationVersion {
		Content?: string;
	}
	export interface HostedConfigurationVersionFormProperties {
		Content: FormControl<string | null | undefined>,
	}
	export function CreateHostedConfigurationVersionFormGroup() {
		return new FormGroup<HostedConfigurationVersionFormProperties>({
			Content: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PayloadTooLargeException {
	}
	export interface PayloadTooLargeExceptionFormProperties {
	}
	export function CreatePayloadTooLargeExceptionFormGroup() {
		return new FormGroup<PayloadTooLargeExceptionFormProperties>({
		});

	}

	export interface Configuration {
		Content?: string;
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
		ApplicationId?: string;
		EnvironmentId?: string;
		DeploymentStrategyId?: string;
		ConfigurationProfileId?: string;
		DeploymentNumber?: number | null;
		ConfigurationName?: string;
		ConfigurationLocationUri?: string;
		ConfigurationVersion?: string;
		Description?: string;
		DeploymentDurationInMinutes?: number | null;
		GrowthType?: GrowthType;
		GrowthFactor?: number;
		FinalBakeTimeInMinutes?: number | null;
		State?: DeploymentState;
		EventLog?: Array<DeploymentEvent>;
		PercentageComplete?: number;
		StartedAt?: Date;
		CompletedAt?: Date;
		AppliedExtensions?: Array<AppliedExtension>;
		KmsKeyArn?: string;
		KmsKeyIdentifier?: string;
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
		GrowthType: FormControl<GrowthType | null | undefined>,
		GrowthFactor: FormControl<number | null | undefined>,
		FinalBakeTimeInMinutes: FormControl<number | null | undefined>,
		State: FormControl<DeploymentState | null | undefined>,
		PercentageComplete: FormControl<number | null | undefined>,
		StartedAt: FormControl<Date | null | undefined>,
		CompletedAt: FormControl<Date | null | undefined>,
		KmsKeyArn: FormControl<string | null | undefined>,
		KmsKeyIdentifier: FormControl<string | null | undefined>,
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
			GrowthType: new FormControl<GrowthType | null | undefined>(undefined),
			GrowthFactor: new FormControl<number | null | undefined>(undefined),
			FinalBakeTimeInMinutes: new FormControl<number | null | undefined>(undefined),
			State: new FormControl<DeploymentState | null | undefined>(undefined),
			PercentageComplete: new FormControl<number | null | undefined>(undefined),
			StartedAt: new FormControl<Date | null | undefined>(undefined),
			CompletedAt: new FormControl<Date | null | undefined>(undefined),
			KmsKeyArn: new FormControl<string | null | undefined>(undefined),
			KmsKeyIdentifier: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DeploymentState { BAKING = 'BAKING', VALIDATING = 'VALIDATING', DEPLOYING = 'DEPLOYING', COMPLETE = 'COMPLETE', ROLLING_BACK = 'ROLLING_BACK', ROLLED_BACK = 'ROLLED_BACK' }


	/** An object that describes a deployment event. */
	export interface DeploymentEvent {
		EventType?: DeploymentEventType;
		TriggeredBy?: TriggeredBy;
		Description?: string;
		ActionInvocations?: Array<ActionInvocation>;
		OccurredAt?: Date;
	}

	/** An object that describes a deployment event. */
	export interface DeploymentEventFormProperties {
		EventType: FormControl<DeploymentEventType | null | undefined>,
		TriggeredBy: FormControl<TriggeredBy | null | undefined>,
		Description: FormControl<string | null | undefined>,
		OccurredAt: FormControl<Date | null | undefined>,
	}
	export function CreateDeploymentEventFormGroup() {
		return new FormGroup<DeploymentEventFormProperties>({
			EventType: new FormControl<DeploymentEventType | null | undefined>(undefined),
			TriggeredBy: new FormControl<TriggeredBy | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			OccurredAt: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum DeploymentEventType { PERCENTAGE_UPDATED = 'PERCENTAGE_UPDATED', ROLLBACK_STARTED = 'ROLLBACK_STARTED', ROLLBACK_COMPLETED = 'ROLLBACK_COMPLETED', BAKE_TIME_STARTED = 'BAKE_TIME_STARTED', DEPLOYMENT_STARTED = 'DEPLOYMENT_STARTED', DEPLOYMENT_COMPLETED = 'DEPLOYMENT_COMPLETED' }

	export enum TriggeredBy { USER = 'USER', APPCONFIG = 'APPCONFIG', CLOUDWATCH_ALARM = 'CLOUDWATCH_ALARM', INTERNAL_ERROR = 'INTERNAL_ERROR' }


	/** An extension that was invoked as part of a deployment event. */
	export interface ActionInvocation {
		ExtensionIdentifier?: string;
		ActionName?: string;
		Uri?: string;
		RoleArn?: string;
		ErrorMessage?: string;
		ErrorCode?: string;
		InvocationId?: string;
	}

	/** An extension that was invoked as part of a deployment event. */
	export interface ActionInvocationFormProperties {
		ExtensionIdentifier: FormControl<string | null | undefined>,
		ActionName: FormControl<string | null | undefined>,
		Uri: FormControl<string | null | undefined>,
		RoleArn: FormControl<string | null | undefined>,
		ErrorMessage: FormControl<string | null | undefined>,
		ErrorCode: FormControl<string | null | undefined>,
		InvocationId: FormControl<string | null | undefined>,
	}
	export function CreateActionInvocationFormGroup() {
		return new FormGroup<ActionInvocationFormProperties>({
			ExtensionIdentifier: new FormControl<string | null | undefined>(undefined),
			ActionName: new FormControl<string | null | undefined>(undefined),
			Uri: new FormControl<string | null | undefined>(undefined),
			RoleArn: new FormControl<string | null | undefined>(undefined),
			ErrorMessage: new FormControl<string | null | undefined>(undefined),
			ErrorCode: new FormControl<string | null | undefined>(undefined),
			InvocationId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An extension that was invoked during a deployment. */
	export interface AppliedExtension {
		ExtensionId?: string;
		ExtensionAssociationId?: string;
		VersionNumber?: number | null;
		Parameters?: ParameterValueMap;
	}

	/** An extension that was invoked during a deployment. */
	export interface AppliedExtensionFormProperties {
		ExtensionId: FormControl<string | null | undefined>,
		ExtensionAssociationId: FormControl<string | null | undefined>,
		VersionNumber: FormControl<number | null | undefined>,
	}
	export function CreateAppliedExtensionFormGroup() {
		return new FormGroup<AppliedExtensionFormProperties>({
			ExtensionId: new FormControl<string | null | undefined>(undefined),
			ExtensionAssociationId: new FormControl<string | null | undefined>(undefined),
			VersionNumber: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Applications {
		Items?: Array<Application>;
		NextToken?: string;
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
		NextToken?: string;
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
		ApplicationId?: string;
		Id?: string;
		Name?: string;
		LocationUri?: string;
		ValidatorTypes?: Array<ValidatorType>;
		Type?: string;
	}

	/** A summary of a configuration profile. */
	export interface ConfigurationProfileSummaryFormProperties {
		ApplicationId: FormControl<string | null | undefined>,
		Id: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		LocationUri: FormControl<string | null | undefined>,
		Type: FormControl<string | null | undefined>,
	}
	export function CreateConfigurationProfileSummaryFormGroup() {
		return new FormGroup<ConfigurationProfileSummaryFormProperties>({
			ApplicationId: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			LocationUri: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeploymentStrategies {
		Items?: Array<DeploymentStrategy>;
		NextToken?: string;
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
		NextToken?: string;
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
		ConfigurationName?: string;
		ConfigurationVersion?: string;
		DeploymentDurationInMinutes?: number | null;
		GrowthType?: GrowthType;
		GrowthFactor?: number;
		FinalBakeTimeInMinutes?: number | null;
		State?: DeploymentState;
		PercentageComplete?: number;
		StartedAt?: Date;
		CompletedAt?: Date;
	}

	/** Information about the deployment. */
	export interface DeploymentSummaryFormProperties {
		DeploymentNumber: FormControl<number | null | undefined>,
		ConfigurationName: FormControl<string | null | undefined>,
		ConfigurationVersion: FormControl<string | null | undefined>,
		DeploymentDurationInMinutes: FormControl<number | null | undefined>,
		GrowthType: FormControl<GrowthType | null | undefined>,
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
			GrowthType: new FormControl<GrowthType | null | undefined>(undefined),
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
		NextToken?: string;
	}
	export interface EnvironmentsFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateEnvironmentsFormGroup() {
		return new FormGroup<EnvironmentsFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ExtensionAssociations {
		Items?: Array<ExtensionAssociationSummary>;
		NextToken?: string;
	}
	export interface ExtensionAssociationsFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateExtensionAssociationsFormGroup() {
		return new FormGroup<ExtensionAssociationsFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about an association between an extension and an AppConfig resource such as an application, environment, or configuration profile. Call <code>GetExtensionAssociation</code> to get more information about an association. */
	export interface ExtensionAssociationSummary {
		Id?: string;
		ExtensionArn?: string;
		ResourceArn?: string;
	}

	/** Information about an association between an extension and an AppConfig resource such as an application, environment, or configuration profile. Call <code>GetExtensionAssociation</code> to get more information about an association. */
	export interface ExtensionAssociationSummaryFormProperties {
		Id: FormControl<string | null | undefined>,
		ExtensionArn: FormControl<string | null | undefined>,
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateExtensionAssociationSummaryFormGroup() {
		return new FormGroup<ExtensionAssociationSummaryFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			ExtensionArn: new FormControl<string | null | undefined>(undefined),
			ResourceArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Extensions {
		Items?: Array<ExtensionSummary>;
		NextToken?: string;
	}
	export interface ExtensionsFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateExtensionsFormGroup() {
		return new FormGroup<ExtensionsFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about an extension. Call <code>GetExtension</code> to get more information about an extension. */
	export interface ExtensionSummary {
		Id?: string;
		Name?: string;
		VersionNumber?: number | null;
		Arn?: string;
		Description?: string;
	}

	/** Information about an extension. Call <code>GetExtension</code> to get more information about an extension. */
	export interface ExtensionSummaryFormProperties {
		Id: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		VersionNumber: FormControl<number | null | undefined>,
		Arn: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
	}
	export function CreateExtensionSummaryFormGroup() {
		return new FormGroup<ExtensionSummaryFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			VersionNumber: new FormControl<number | null | undefined>(undefined),
			Arn: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface HostedConfigurationVersions {
		Items?: Array<HostedConfigurationVersionSummary>;
		NextToken?: string;
	}
	export interface HostedConfigurationVersionsFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateHostedConfigurationVersionsFormGroup() {
		return new FormGroup<HostedConfigurationVersionsFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about the configuration. */
	export interface HostedConfigurationVersionSummary {
		ApplicationId?: string;
		ConfigurationProfileId?: string;
		VersionNumber?: number | null;
		Description?: string;
		ContentType?: string;
		VersionLabel?: string;
	}

	/** Information about the configuration. */
	export interface HostedConfigurationVersionSummaryFormProperties {
		ApplicationId: FormControl<string | null | undefined>,
		ConfigurationProfileId: FormControl<string | null | undefined>,
		VersionNumber: FormControl<number | null | undefined>,
		Description: FormControl<string | null | undefined>,
		ContentType: FormControl<string | null | undefined>,
		VersionLabel: FormControl<string | null | undefined>,
	}
	export function CreateHostedConfigurationVersionSummaryFormGroup() {
		return new FormGroup<HostedConfigurationVersionSummaryFormProperties>({
			ApplicationId: new FormControl<string | null | undefined>(undefined),
			ConfigurationProfileId: new FormControl<string | null | undefined>(undefined),
			VersionNumber: new FormControl<number | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			ContentType: new FormControl<string | null | undefined>(undefined),
			VersionLabel: new FormControl<string | null | undefined>(undefined),
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

	export enum ActionPoint { PRE_CREATE_HOSTED_CONFIGURATION_VERSION = 'PRE_CREATE_HOSTED_CONFIGURATION_VERSION', PRE_START_DEPLOYMENT = 'PRE_START_DEPLOYMENT', ON_DEPLOYMENT_START = 'ON_DEPLOYMENT_START', ON_DEPLOYMENT_STEP = 'ON_DEPLOYMENT_STEP', ON_DEPLOYMENT_BAKING = 'ON_DEPLOYMENT_BAKING', ON_DEPLOYMENT_COMPLETE = 'ON_DEPLOYMENT_COMPLETE', ON_DEPLOYMENT_ROLLED_BACK = 'ON_DEPLOYMENT_ROLLED_BACK' }

	export interface CreateApplicationRequest {

		/** Required */
		Name: string;
		Description?: string;
		Tags?: TagMap;
	}
	export interface CreateApplicationRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
	}
	export function CreateCreateApplicationRequestFormGroup() {
		return new FormGroup<CreateApplicationRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateConfigurationProfileRequest {

		/** Required */
		Name: string;
		Description?: string;

		/** Required */
		LocationUri: string;
		RetrievalRoleArn?: string;
		Validators?: Array<Validator>;
		Tags?: TagMap;
		Type?: string;
	}
	export interface CreateConfigurationProfileRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,

		/** Required */
		LocationUri: FormControl<string | null | undefined>,
		RetrievalRoleArn: FormControl<string | null | undefined>,
		Type: FormControl<string | null | undefined>,
	}
	export function CreateCreateConfigurationProfileRequestFormGroup() {
		return new FormGroup<CreateConfigurationProfileRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
			LocationUri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RetrievalRoleArn: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateDeploymentStrategyRequest {

		/** Required */
		Name: string;
		Description?: string;

		/** Required */
		DeploymentDurationInMinutes: number;
		FinalBakeTimeInMinutes?: number | null;

		/** Required */
		GrowthFactor: number;
		GrowthType?: GrowthType;
		ReplicateTo?: ReplicateTo;
		Tags?: TagMap;
	}
	export interface CreateDeploymentStrategyRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,

		/** Required */
		DeploymentDurationInMinutes: FormControl<number | null | undefined>,
		FinalBakeTimeInMinutes: FormControl<number | null | undefined>,

		/** Required */
		GrowthFactor: FormControl<number | null | undefined>,
		GrowthType: FormControl<GrowthType | null | undefined>,
		ReplicateTo: FormControl<ReplicateTo | null | undefined>,
	}
	export function CreateCreateDeploymentStrategyRequestFormGroup() {
		return new FormGroup<CreateDeploymentStrategyRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
			DeploymentDurationInMinutes: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			FinalBakeTimeInMinutes: new FormControl<number | null | undefined>(undefined),
			GrowthFactor: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			GrowthType: new FormControl<GrowthType | null | undefined>(undefined),
			ReplicateTo: new FormControl<ReplicateTo | null | undefined>(undefined),
		});

	}

	export interface CreateEnvironmentRequest {

		/** Required */
		Name: string;
		Description?: string;
		Monitors?: Array<Monitor>;
		Tags?: TagMap;
	}
	export interface CreateEnvironmentRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
	}
	export function CreateCreateEnvironmentRequestFormGroup() {
		return new FormGroup<CreateEnvironmentRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateExtensionAssociationRequest {

		/** Required */
		ExtensionIdentifier: string;
		ExtensionVersionNumber?: number | null;

		/** Required */
		ResourceIdentifier: string;
		Parameters?: ParameterValueMap;
		Tags?: TagMap;
	}
	export interface CreateExtensionAssociationRequestFormProperties {

		/** Required */
		ExtensionIdentifier: FormControl<string | null | undefined>,
		ExtensionVersionNumber: FormControl<number | null | undefined>,

		/** Required */
		ResourceIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateCreateExtensionAssociationRequestFormGroup() {
		return new FormGroup<CreateExtensionAssociationRequestFormProperties>({
			ExtensionIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ExtensionVersionNumber: new FormControl<number | null | undefined>(undefined),
			ResourceIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateExtensionRequest {

		/** Required */
		Name: string;
		Description?: string;

		/** Required */
		Actions: ActionsMap;
		Parameters?: ParameterMap;
		Tags?: TagMap;
	}
	export interface CreateExtensionRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
	}
	export function CreateCreateExtensionRequestFormGroup() {
		return new FormGroup<CreateExtensionRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateHostedConfigurationVersionRequest {

		/** Required */
		Content: string;
	}
	export interface CreateHostedConfigurationVersionRequestFormProperties {

		/** Required */
		Content: FormControl<string | null | undefined>,
	}
	export function CreateCreateHostedConfigurationVersionRequestFormGroup() {
		return new FormGroup<CreateHostedConfigurationVersionRequestFormProperties>({
			Content: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

	export interface DeleteExtensionAssociationRequest {
	}
	export interface DeleteExtensionAssociationRequestFormProperties {
	}
	export function CreateDeleteExtensionAssociationRequestFormGroup() {
		return new FormGroup<DeleteExtensionAssociationRequestFormProperties>({
		});

	}

	export interface DeleteExtensionRequest {
	}
	export interface DeleteExtensionRequestFormProperties {
	}
	export function CreateDeleteExtensionRequestFormGroup() {
		return new FormGroup<DeleteExtensionRequestFormProperties>({
		});

	}

	export interface DeleteHostedConfigurationVersionRequest {
	}
	export interface DeleteHostedConfigurationVersionRequestFormProperties {
	}
	export function CreateDeleteHostedConfigurationVersionRequestFormGroup() {
		return new FormGroup<DeleteHostedConfigurationVersionRequestFormProperties>({
		});

	}

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

	export interface GetExtensionAssociationRequest {
	}
	export interface GetExtensionAssociationRequestFormProperties {
	}
	export function CreateGetExtensionAssociationRequestFormGroup() {
		return new FormGroup<GetExtensionAssociationRequestFormProperties>({
		});

	}

	export interface GetExtensionRequest {
	}
	export interface GetExtensionRequestFormProperties {
	}
	export function CreateGetExtensionRequestFormGroup() {
		return new FormGroup<GetExtensionRequestFormProperties>({
		});

	}

	export interface GetHostedConfigurationVersionRequest {
	}
	export interface GetHostedConfigurationVersionRequestFormProperties {
	}
	export function CreateGetHostedConfigurationVersionRequestFormGroup() {
		return new FormGroup<GetHostedConfigurationVersionRequestFormProperties>({
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

	export interface ListExtensionAssociationsRequest {
	}
	export interface ListExtensionAssociationsRequestFormProperties {
	}
	export function CreateListExtensionAssociationsRequestFormGroup() {
		return new FormGroup<ListExtensionAssociationsRequestFormProperties>({
		});

	}

	export interface ListExtensionsRequest {
	}
	export interface ListExtensionsRequestFormProperties {
	}
	export function CreateListExtensionsRequestFormGroup() {
		return new FormGroup<ListExtensionsRequestFormProperties>({
		});

	}

	export interface ListHostedConfigurationVersionsRequest {
	}
	export interface ListHostedConfigurationVersionsRequestFormProperties {
	}
	export function CreateListHostedConfigurationVersionsRequestFormGroup() {
		return new FormGroup<ListHostedConfigurationVersionsRequestFormProperties>({
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

		/** Required */
		DeploymentStrategyId: string;

		/** Required */
		ConfigurationProfileId: string;

		/** Required */
		ConfigurationVersion: string;
		Description?: string;
		Tags?: TagMap;
		KmsKeyIdentifier?: string;
	}
	export interface StartDeploymentRequestFormProperties {

		/** Required */
		DeploymentStrategyId: FormControl<string | null | undefined>,

		/** Required */
		ConfigurationProfileId: FormControl<string | null | undefined>,

		/** Required */
		ConfigurationVersion: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		KmsKeyIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateStartDeploymentRequestFormGroup() {
		return new FormGroup<StartDeploymentRequestFormProperties>({
			DeploymentStrategyId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ConfigurationProfileId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ConfigurationVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
			KmsKeyIdentifier: new FormControl<string | null | undefined>(undefined),
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

	export interface UpdateApplicationRequest {
		Name?: string;
		Description?: string;
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
		Name?: string;
		Description?: string;
		RetrievalRoleArn?: string;
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
		Description?: string;
		DeploymentDurationInMinutes?: number | null;
		FinalBakeTimeInMinutes?: number | null;
		GrowthFactor?: number;
		GrowthType?: GrowthType;
	}
	export interface UpdateDeploymentStrategyRequestFormProperties {
		Description: FormControl<string | null | undefined>,
		DeploymentDurationInMinutes: FormControl<number | null | undefined>,
		FinalBakeTimeInMinutes: FormControl<number | null | undefined>,
		GrowthFactor: FormControl<number | null | undefined>,
		GrowthType: FormControl<GrowthType | null | undefined>,
	}
	export function CreateUpdateDeploymentStrategyRequestFormGroup() {
		return new FormGroup<UpdateDeploymentStrategyRequestFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined),
			DeploymentDurationInMinutes: new FormControl<number | null | undefined>(undefined),
			FinalBakeTimeInMinutes: new FormControl<number | null | undefined>(undefined),
			GrowthFactor: new FormControl<number | null | undefined>(undefined),
			GrowthType: new FormControl<GrowthType | null | undefined>(undefined),
		});

	}

	export interface UpdateEnvironmentRequest {
		Name?: string;
		Description?: string;
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

	export interface UpdateExtensionAssociationRequest {
		Parameters?: ParameterValueMap;
	}
	export interface UpdateExtensionAssociationRequestFormProperties {
	}
	export function CreateUpdateExtensionAssociationRequestFormGroup() {
		return new FormGroup<UpdateExtensionAssociationRequestFormProperties>({
		});

	}

	export interface UpdateExtensionRequest {
		Description?: string;
		Actions?: ActionsMap;
		Parameters?: ParameterMap;
		VersionNumber?: number | null;
	}
	export interface UpdateExtensionRequestFormProperties {
		Description: FormControl<string | null | undefined>,
		VersionNumber: FormControl<number | null | undefined>,
	}
	export function CreateUpdateExtensionRequestFormGroup() {
		return new FormGroup<UpdateExtensionRequestFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined),
			VersionNumber: new FormControl<number | null | undefined>(undefined),
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
		 * Creates an application. In AppConfig, an application is simply an organizational construct like a folder. This organizational construct has a relationship with some unit of executable code. For example, you could create an application called MyMobileApp to organize and manage configuration data for a mobile application installed by your users.
		 * Post applications
		 * @return {void} 
		 */
		CreateApplication(requestBody: CreateApplicationPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'applications', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists all applications in your Amazon Web Services account.
		 * Get applications
		 * @param {number} max_results The maximum number of items to return for this call. The call also returns a token that you can specify in a subsequent call to get the next set of results.
		 *     Minimum: 1    Maximum: 50
		 * @param {string} next_token A token to start the list. Next token is a pagination token generated by AppConfig to describe what page the previous List call ended on. For the first List request, the nextToken should not be set. On subsequent calls, the nextToken parameter should be set to the previous responses nextToken value. Use this token to get the next set of results. 
		 *     Min length: 1    Max length: 2048
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {Applications} Success
		 */
		ListApplications(max_results: number | null | undefined, next_token: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<Applications> {
			return this.http.get<Applications>(this.baseUri + 'applications?max_results=' + max_results + '&next_token=' + (next_token == null ? '' : encodeURIComponent(next_token)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * <p>Creates a configuration profile, which is information that enables AppConfig to access the configuration source. Valid configuration sources include the following:</p> <ul> <li> <p>Configuration data in YAML, JSON, and other formats stored in the AppConfig hosted configuration store</p> </li> <li> <p>Configuration data stored as objects in an Amazon Simple Storage Service (Amazon S3) bucket</p> </li> <li> <p>Pipelines stored in CodePipeline</p> </li> <li> <p>Secrets stored in Secrets Manager</p> </li> <li> <p>Standard and secure string parameters stored in Amazon Web Services Systems Manager Parameter Store</p> </li> <li> <p>Configuration data in SSM documents stored in the Systems Manager document store</p> </li> </ul> <p>A configuration profile includes the following information:</p> <ul> <li> <p>The URI location of the configuration data.</p> </li> <li> <p>The Identity and Access Management (IAM) role that provides access to the configuration data.</p> </li> <li> <p>A validator for the configuration data. Available validators include either a JSON Schema or an Amazon Web Services Lambda function.</p> </li> </ul> <p>For more information, see <a href="http://docs.aws.amazon.com/appconfig/latest/userguide/appconfig-creating-configuration-and-profile.html">Create a Configuration and a Configuration Profile</a> in the <i>AppConfig User Guide</i>.</p>
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
		 *     Minimum: 1    Maximum: 50
		 * @param {string} next_token A token to start the list. Use this token to get the next set of results.
		 *     Min length: 1    Max length: 2048
		 * @param {string} type A filter based on the type of configurations that the configuration profile contains. A configuration can be a feature flag or a freeform configuration.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ConfigurationProfiles} Success
		 */
		ListConfigurationProfiles(ApplicationId: string, max_results: number | null | undefined, next_token: string | null | undefined, type: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ConfigurationProfiles> {
			return this.http.get<ConfigurationProfiles>(this.baseUri + 'applications/' + (ApplicationId == null ? '' : encodeURIComponent(ApplicationId)) + '/configurationprofiles&max_results=' + max_results + '&next_token=' + (next_token == null ? '' : encodeURIComponent(next_token)) + '&type=' + (type == null ? '' : encodeURIComponent(type)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Creates a deployment strategy that defines important criteria for rolling out your configuration to the designated targets. A deployment strategy includes the overall duration required, a percentage of targets to receive the deployment during each interval, an algorithm that defines how percentage grows, and bake time.
		 * Post deploymentstrategies
		 * @return {void} 
		 */
		CreateDeploymentStrategy(requestBody: CreateDeploymentStrategyPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'deploymentstrategies', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists deployment strategies.
		 * Get deploymentstrategies
		 * @param {number} max_results The maximum number of items to return for this call. The call also returns a token that you can specify in a subsequent call to get the next set of results.
		 *     Minimum: 1    Maximum: 50
		 * @param {string} next_token A token to start the list. Use this token to get the next set of results.
		 *     Min length: 1    Max length: 2048
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DeploymentStrategies} Success
		 */
		ListDeploymentStrategies(max_results: number | null | undefined, next_token: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<DeploymentStrategies> {
			return this.http.get<DeploymentStrategies>(this.baseUri + 'deploymentstrategies?max_results=' + max_results + '&next_token=' + (next_token == null ? '' : encodeURIComponent(next_token)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Creates an environment. For each application, you define one or more environments. An environment is a deployment group of AppConfig targets, such as applications in a <code>Beta</code> or <code>Production</code> environment. You can also define environments for application subcomponents such as the <code>Web</code>, <code>Mobile</code> and <code>Back-end</code> components for your application. You can configure Amazon CloudWatch alarms for each environment. The system monitors alarms during a configuration deployment. If an alarm is triggered, the system rolls back the configuration.
		 * Post applications/{ApplicationId}/environments
		 * @param {string} ApplicationId The application ID.
		 * @return {void} 
		 */
		CreateEnvironment(ApplicationId: string, requestBody: CreateEnvironmentPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'applications/' + (ApplicationId == null ? '' : encodeURIComponent(ApplicationId)) + '/environments', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists the environments for an application.
		 * Get applications/{ApplicationId}/environments
		 * @param {string} ApplicationId The application ID.
		 * @param {number} max_results The maximum number of items to return for this call. The call also returns a token that you can specify in a subsequent call to get the next set of results.
		 *     Minimum: 1    Maximum: 50
		 * @param {string} next_token A token to start the list. Use this token to get the next set of results.
		 *     Min length: 1    Max length: 2048
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {Environments} Success
		 */
		ListEnvironments(ApplicationId: string, max_results: number | null | undefined, next_token: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<Environments> {
			return this.http.get<Environments>(this.baseUri + 'applications/' + (ApplicationId == null ? '' : encodeURIComponent(ApplicationId)) + '/environments&max_results=' + max_results + '&next_token=' + (next_token == null ? '' : encodeURIComponent(next_token)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * <p>Creates an AppConfig extension. An extension augments your ability to inject logic or behavior at different points during the AppConfig workflow of creating or deploying a configuration.</p> <p>You can create your own extensions or use the Amazon Web Services authored extensions provided by AppConfig. For most use cases, to create your own extension, you must create an Lambda function to perform any computation and processing defined in the extension. For more information about extensions, see <a href="https://docs.aws.amazon.com/appconfig/latest/userguide/working-with-appconfig-extensions.html">Working with AppConfig extensions</a> in the <i>AppConfig User Guide</i>.</p>
		 * Post extensions
		 * @return {void} 
		 */
		CreateExtension(requestBody: CreateExtensionPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'extensions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists all custom and Amazon Web Services authored AppConfig extensions in the account. For more information about extensions, see <a href="https://docs.aws.amazon.com/appconfig/latest/userguide/working-with-appconfig-extensions.html">Working with AppConfig extensions</a> in the <i>AppConfig User Guide</i>.
		 * Get extensions
		 * @param {number} max_results The maximum number of items to return for this call. The call also returns a token that you can specify in a subsequent call to get the next set of results.
		 *     Minimum: 1    Maximum: 50
		 * @param {string} next_token A token to start the list. Use this token to get the next set of results. 
		 *     Min length: 1    Max length: 2048
		 * @param {string} name The extension name.
		 *     Min length: 1    Max length: 64
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {Extensions} Success
		 */
		ListExtensions(max_results: number | null | undefined, next_token: string | null | undefined, name: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<Extensions> {
			return this.http.get<Extensions>(this.baseUri + 'extensions?max_results=' + max_results + '&next_token=' + (next_token == null ? '' : encodeURIComponent(next_token)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * When you create an extension or configure an Amazon Web Services authored extension, you associate the extension with an AppConfig application, environment, or configuration profile. For example, you can choose to run the <code>AppConfig deployment events to Amazon SNS</code> Amazon Web Services authored extension and receive notifications on an Amazon SNS topic anytime a configuration deployment is started for a specific application. Defining which extension to associate with an AppConfig resource is called an <i>extension association</i>. An extension association is a specified relationship between an extension and an AppConfig resource, such as an application or a configuration profile. For more information about extensions and associations, see <a href="https://docs.aws.amazon.com/appconfig/latest/userguide/working-with-appconfig-extensions.html">Working with AppConfig extensions</a> in the <i>AppConfig User Guide</i>.
		 * Post extensionassociations
		 * @return {void} 
		 */
		CreateExtensionAssociation(requestBody: CreateExtensionAssociationPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'extensionassociations', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists all AppConfig extension associations in the account. For more information about extensions and associations, see <a href="https://docs.aws.amazon.com/appconfig/latest/userguide/working-with-appconfig-extensions.html">Working with AppConfig extensions</a> in the <i>AppConfig User Guide</i>.
		 * Get extensionassociations
		 * @param {string} resource_identifier The ARN of an application, configuration profile, or environment.
		 *     Min length: 20    Max length: 2048
		 * @param {string} extension_identifier The name, the ID, or the Amazon Resource Name (ARN) of the extension.
		 *     Min length: 1    Max length: 2048
		 * @param {number} extension_version_number The version number for the extension defined in the association.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} max_results The maximum number of items to return for this call. The call also returns a token that you can specify in a subsequent call to get the next set of results.
		 *     Minimum: 1    Maximum: 50
		 * @param {string} next_token A token to start the list. Use this token to get the next set of results or pass null to get the first set of results. 
		 *     Min length: 1    Max length: 2048
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ExtensionAssociations} Success
		 */
		ListExtensionAssociations(resource_identifier: string | null | undefined, extension_identifier: string | null | undefined, extension_version_number: number | null | undefined, max_results: number | null | undefined, next_token: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ExtensionAssociations> {
			return this.http.get<ExtensionAssociations>(this.baseUri + 'extensionassociations?resource_identifier=' + (resource_identifier == null ? '' : encodeURIComponent(resource_identifier)) + '&extension_identifier=' + (extension_identifier == null ? '' : encodeURIComponent(extension_identifier)) + '&extension_version_number=' + extension_version_number + '&max_results=' + max_results + '&next_token=' + (next_token == null ? '' : encodeURIComponent(next_token)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Creates a new configuration in the AppConfig hosted configuration store.
		 * Post applications/{ApplicationId}/configurationprofiles/{ConfigurationProfileId}/hostedconfigurationversions#Content-Type
		 * @param {string} ApplicationId The application ID.
		 * @param {string} ConfigurationProfileId The configuration profile ID.
		 * @return {void} 
		 */
		CreateHostedConfigurationVersion(ApplicationId: string, ConfigurationProfileId: string, requestBody: CreateHostedConfigurationVersionPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'applications/' + (ApplicationId == null ? '' : encodeURIComponent(ApplicationId)) + '/configurationprofiles/' + (ConfigurationProfileId == null ? '' : encodeURIComponent(ConfigurationProfileId)) + '/hostedconfigurationversions#Content-Type', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes an application. Deleting an application does not delete a configuration from a host.
		 * Delete applications/{ApplicationId}
		 * @param {string} ApplicationId The ID of the application to delete.
		 * @return {void} 
		 */
		DeleteApplication(ApplicationId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'applications/' + (ApplicationId == null ? '' : encodeURIComponent(ApplicationId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves information about an application.
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
		 * Deletes a configuration profile. Deleting a configuration profile does not delete a configuration from a host.
		 * Delete applications/{ApplicationId}/configurationprofiles/{ConfigurationProfileId}
		 * @param {string} ApplicationId The application ID that includes the configuration profile you want to delete.
		 * @param {string} ConfigurationProfileId The ID of the configuration profile you want to delete.
		 * @return {void} 
		 */
		DeleteConfigurationProfile(ApplicationId: string, ConfigurationProfileId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'applications/' + (ApplicationId == null ? '' : encodeURIComponent(ApplicationId)) + '/configurationprofiles/' + (ConfigurationProfileId == null ? '' : encodeURIComponent(ConfigurationProfileId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves information about a configuration profile.
		 * Get applications/{ApplicationId}/configurationprofiles/{ConfigurationProfileId}
		 * @param {string} ApplicationId The ID of the application that includes the configuration profile you want to get.
		 * @param {string} ConfigurationProfileId The ID of the configuration profile that you want to get.
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
		 * Deletes a deployment strategy. Deleting a deployment strategy does not delete a configuration from a host.
		 * Delete deployementstrategies/{DeploymentStrategyId}
		 * @param {string} DeploymentStrategyId The ID of the deployment strategy you want to delete.
		 * @return {void} 
		 */
		DeleteDeploymentStrategy(DeploymentStrategyId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'deployementstrategies/' + (DeploymentStrategyId == null ? '' : encodeURIComponent(DeploymentStrategyId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes an environment. Deleting an environment does not delete a configuration from a host.
		 * Delete applications/{ApplicationId}/environments/{EnvironmentId}
		 * @param {string} ApplicationId The application ID that includes the environment that you want to delete.
		 * @param {string} EnvironmentId The ID of the environment that you want to delete.
		 * @return {void} 
		 */
		DeleteEnvironment(ApplicationId: string, EnvironmentId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'applications/' + (ApplicationId == null ? '' : encodeURIComponent(ApplicationId)) + '/environments/' + (EnvironmentId == null ? '' : encodeURIComponent(EnvironmentId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves information about an environment. An environment is a deployment group of AppConfig applications, such as applications in a <code>Production</code> environment or in an <code>EU_Region</code> environment. Each configuration deployment targets an environment. You can enable one or more Amazon CloudWatch alarms for an environment. If an alarm is triggered during a deployment, AppConfig roles back the configuration.
		 * Get applications/{ApplicationId}/environments/{EnvironmentId}
		 * @param {string} ApplicationId The ID of the application that includes the environment you want to get.
		 * @param {string} EnvironmentId The ID of the environment that you want to get.
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
		 * Deletes an AppConfig extension. You must delete all associations to an extension before you delete the extension.
		 * Delete extensions/{ExtensionIdentifier}
		 * @param {string} ExtensionIdentifier The name, ID, or Amazon Resource Name (ARN) of the extension you want to delete.
		 *     Min length: 1    Max length: 2048
		 * @param {number} version A specific version of an extension to delete. If omitted, the highest version is deleted.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {void} 
		 */
		DeleteExtension(ExtensionIdentifier: string, version: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'extensions/' + (ExtensionIdentifier == null ? '' : encodeURIComponent(ExtensionIdentifier)) + '&version=' + version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns information about an AppConfig extension.
		 * Get extensions/{ExtensionIdentifier}
		 * @param {string} ExtensionIdentifier The name, the ID, or the Amazon Resource Name (ARN) of the extension.
		 *     Min length: 1    Max length: 2048
		 * @param {number} version_number The extension version number. If no version number was defined, AppConfig uses the highest version.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {Extension} Success
		 */
		GetExtension(ExtensionIdentifier: string, version_number: number | null | undefined): Observable<Extension> {
			return this.http.get<Extension>(this.baseUri + 'extensions/' + (ExtensionIdentifier == null ? '' : encodeURIComponent(ExtensionIdentifier)) + '&version_number=' + version_number, {});
		}

		/**
		 * Updates an AppConfig extension. For more information about extensions, see <a href="https://docs.aws.amazon.com/appconfig/latest/userguide/working-with-appconfig-extensions.html">Working with AppConfig extensions</a> in the <i>AppConfig User Guide</i>.
		 * Patch extensions/{ExtensionIdentifier}
		 * @param {string} ExtensionIdentifier The name, the ID, or the Amazon Resource Name (ARN) of the extension.
		 *     Min length: 1    Max length: 2048
		 * @return {Extension} Success
		 */
		UpdateExtension(ExtensionIdentifier: string, requestBody: UpdateExtensionPatchBody): Observable<Extension> {
			return this.http.patch<Extension>(this.baseUri + 'extensions/' + (ExtensionIdentifier == null ? '' : encodeURIComponent(ExtensionIdentifier)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an extension association. This action doesn't delete extensions defined in the association.
		 * Delete extensionassociations/{ExtensionAssociationId}
		 * @param {string} ExtensionAssociationId The ID of the extension association to delete.
		 * @return {void} 
		 */
		DeleteExtensionAssociation(ExtensionAssociationId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'extensionassociations/' + (ExtensionAssociationId == null ? '' : encodeURIComponent(ExtensionAssociationId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns information about an AppConfig extension association. For more information about extensions and associations, see <a href="https://docs.aws.amazon.com/appconfig/latest/userguide/working-with-appconfig-extensions.html">Working with AppConfig extensions</a> in the <i>AppConfig User Guide</i>.
		 * Get extensionassociations/{ExtensionAssociationId}
		 * @param {string} ExtensionAssociationId The extension association ID to get.
		 * @return {ExtensionAssociation} Success
		 */
		GetExtensionAssociation(ExtensionAssociationId: string): Observable<ExtensionAssociation> {
			return this.http.get<ExtensionAssociation>(this.baseUri + 'extensionassociations/' + (ExtensionAssociationId == null ? '' : encodeURIComponent(ExtensionAssociationId)), {});
		}

		/**
		 * Updates an association. For more information about extensions and associations, see <a href="https://docs.aws.amazon.com/appconfig/latest/userguide/working-with-appconfig-extensions.html">Working with AppConfig extensions</a> in the <i>AppConfig User Guide</i>.
		 * Patch extensionassociations/{ExtensionAssociationId}
		 * @param {string} ExtensionAssociationId The system-generated ID for the association.
		 * @return {ExtensionAssociation} Success
		 */
		UpdateExtensionAssociation(ExtensionAssociationId: string, requestBody: UpdateExtensionAssociationPatchBody): Observable<ExtensionAssociation> {
			return this.http.patch<ExtensionAssociation>(this.baseUri + 'extensionassociations/' + (ExtensionAssociationId == null ? '' : encodeURIComponent(ExtensionAssociationId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a version of a configuration from the AppConfig hosted configuration store.
		 * Delete applications/{ApplicationId}/configurationprofiles/{ConfigurationProfileId}/hostedconfigurationversions/{VersionNumber}
		 * @param {string} ApplicationId The application ID.
		 * @param {string} ConfigurationProfileId The configuration profile ID.
		 * @param {number} VersionNumber The versions number to delete.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {void} 
		 */
		DeleteHostedConfigurationVersion(ApplicationId: string, ConfigurationProfileId: string, VersionNumber: number): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'applications/' + (ApplicationId == null ? '' : encodeURIComponent(ApplicationId)) + '/configurationprofiles/' + (ConfigurationProfileId == null ? '' : encodeURIComponent(ConfigurationProfileId)) + '/hostedconfigurationversions/' + VersionNumber, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves information about a specific configuration version.
		 * Get applications/{ApplicationId}/configurationprofiles/{ConfigurationProfileId}/hostedconfigurationversions/{VersionNumber}
		 * @param {string} ApplicationId The application ID.
		 * @param {string} ConfigurationProfileId The configuration profile ID.
		 * @param {number} VersionNumber The version.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {HostedConfigurationVersion} Success
		 */
		GetHostedConfigurationVersion(ApplicationId: string, ConfigurationProfileId: string, VersionNumber: number): Observable<HostedConfigurationVersion> {
			return this.http.get<HostedConfigurationVersion>(this.baseUri + 'applications/' + (ApplicationId == null ? '' : encodeURIComponent(ApplicationId)) + '/configurationprofiles/' + (ConfigurationProfileId == null ? '' : encodeURIComponent(ConfigurationProfileId)) + '/hostedconfigurationversions/' + VersionNumber, {});
		}

		/**
		 * <p>(Deprecated) Retrieves the latest deployed configuration.</p> <important> <p>Note the following important information.</p> <ul> <li> <p>This API action is deprecated. Calls to receive configuration data should use the <a href="https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_appconfigdata_StartConfigurationSession.html">StartConfigurationSession</a> and <a href="https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_appconfigdata_GetLatestConfiguration.html">GetLatestConfiguration</a> APIs instead. </p> </li> <li> <p> <code>GetConfiguration</code> is a priced call. For more information, see <a href="https://aws.amazon.com/systems-manager/pricing/">Pricing</a>.</p> </li> </ul> </important>
		 * Get applications/{Application}/environments/{Environment}/configurations/{Configuration}#client_id
		 * @param {string} Application The application to get. Specify either the application name or the application ID.
		 *     Min length: 1    Max length: 64
		 * @param {string} Environment The environment to get. Specify either the environment name or the environment ID.
		 *     Min length: 1    Max length: 64
		 * @param {string} Configuration The configuration to get. Specify either the configuration name or the configuration ID.
		 *     Min length: 1    Max length: 64
		 * @param {string} client_id The clientId parameter in the following command is a unique, user-specified ID to identify the client for the configuration. This ID enables AppConfig to deploy the configuration in intervals, as defined in the deployment strategy. 
		 *     Min length: 1    Max length: 64
		 * @param {string} client_configuration_version <p>The configuration version returned in the most recent <code>GetConfiguration</code> response.</p> <important> <p>AppConfig uses the value of the <code>ClientConfigurationVersion</code> parameter to identify the configuration version on your clients. If you don’t send <code>ClientConfigurationVersion</code> with each call to <code>GetConfiguration</code>, your clients receive the current configuration. You are charged each time your clients receive a configuration.</p> <p>To avoid excess charges, we recommend you use the <a href="https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/StartConfigurationSession.html">StartConfigurationSession</a> and <a href="https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/GetLatestConfiguration.html">GetLatestConfiguration</a> APIs, which track the client configuration version on your behalf. If you choose to continue using <code>GetConfiguration</code>, we recommend that you include the <code>ClientConfigurationVersion</code> value with every call to <code>GetConfiguration</code>. The value to use for <code>ClientConfigurationVersion</code> comes from the <code>ConfigurationVersion</code> attribute returned by <code>GetConfiguration</code> when there is new or updated data, and should be saved for subsequent calls to <code>GetConfiguration</code>.</p> </important> <p>For more information about working with configurations, see <a href="http://docs.aws.amazon.com/appconfig/latest/userguide/appconfig-retrieving-the-configuration.html">Retrieving the Configuration</a> in the <i>AppConfig User Guide</i>.</p>
		 *     Min length: 1    Max length: 1024
		 * @return {Configuration} Success
		 */
		GetConfiguration(Application: string, Environment: string, Configuration: string, client_id: string, client_configuration_version: string | null | undefined): Observable<Configuration> {
			return this.http.get<Configuration>(this.baseUri + 'applications/' + (Application == null ? '' : encodeURIComponent(Application)) + '/environments/' + (Environment == null ? '' : encodeURIComponent(Environment)) + '/configurations/' + (Configuration == null ? '' : encodeURIComponent(Configuration)) + '#client_id&client_id=' + (client_id == null ? '' : encodeURIComponent(client_id)) + '&client_configuration_version=' + (client_configuration_version == null ? '' : encodeURIComponent(client_configuration_version)), {});
		}

		/**
		 * Retrieves information about a configuration deployment.
		 * Get applications/{ApplicationId}/environments/{EnvironmentId}/deployments/{DeploymentNumber}
		 * @param {string} ApplicationId The ID of the application that includes the deployment you want to get. 
		 * @param {string} EnvironmentId The ID of the environment that includes the deployment you want to get. 
		 * @param {number} DeploymentNumber The sequence number of the deployment.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
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
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {void} 
		 */
		StopDeployment(ApplicationId: string, EnvironmentId: string, DeploymentNumber: number): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'applications/' + (ApplicationId == null ? '' : encodeURIComponent(ApplicationId)) + '/environments/' + (EnvironmentId == null ? '' : encodeURIComponent(EnvironmentId)) + '/deployments/' + DeploymentNumber, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves information about a deployment strategy. A deployment strategy defines important criteria for rolling out your configuration to the designated targets. A deployment strategy includes the overall duration required, a percentage of targets to receive the deployment during each interval, an algorithm that defines how percentage grows, and bake time.
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
		 * Lists the deployments for an environment in descending deployment number order.
		 * Get applications/{ApplicationId}/environments/{EnvironmentId}/deployments
		 * @param {string} ApplicationId The application ID.
		 * @param {string} EnvironmentId The environment ID.
		 * @param {number} max_results The maximum number of items that may be returned for this call. If there are items that have not yet been returned, the response will include a non-null <code>NextToken</code> that you can provide in a subsequent call to get the next set of results.
		 *     Minimum: 1    Maximum: 50
		 * @param {string} next_token The token returned by a prior call to this operation indicating the next set of results to be returned. If not specified, the operation will return the first set of results.
		 *     Min length: 1    Max length: 2048
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
		 * Lists configurations stored in the AppConfig hosted configuration store by version.
		 * Get applications/{ApplicationId}/configurationprofiles/{ConfigurationProfileId}/hostedconfigurationversions
		 * @param {string} ApplicationId The application ID.
		 * @param {string} ConfigurationProfileId The configuration profile ID.
		 * @param {number} max_results The maximum number of items to return for this call. The call also returns a token that you can specify in a subsequent call to get the next set of results.
		 *     Minimum: 1    Maximum: 50
		 * @param {string} next_token A token to start the list. Use this token to get the next set of results. 
		 *     Min length: 1    Max length: 2048
		 * @param {string} version_label An optional filter that can be used to specify the version label of an AppConfig hosted configuration version. This parameter supports filtering by prefix using a wildcard, for example "v2*". If you don't specify an asterisk at the end of the value, only an exact match is returned.
		 *     Min length: 1    Max length: 64
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {HostedConfigurationVersions} Success
		 */
		ListHostedConfigurationVersions(ApplicationId: string, ConfigurationProfileId: string, max_results: number | null | undefined, next_token: string | null | undefined, version_label: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<HostedConfigurationVersions> {
			return this.http.get<HostedConfigurationVersions>(this.baseUri + 'applications/' + (ApplicationId == null ? '' : encodeURIComponent(ApplicationId)) + '/configurationprofiles/' + (ConfigurationProfileId == null ? '' : encodeURIComponent(ConfigurationProfileId)) + '/hostedconfigurationversions&max_results=' + max_results + '&next_token=' + (next_token == null ? '' : encodeURIComponent(next_token)) + '&version_label=' + (version_label == null ? '' : encodeURIComponent(version_label)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Retrieves the list of key-value tags assigned to the resource.
		 * Get tags/{ResourceArn}
		 * @param {string} ResourceArn The resource ARN.
		 *     Min length: 20    Max length: 2048
		 * @return {ResourceTags} Success
		 */
		ListTagsForResource(ResourceArn: string): Observable<ResourceTags> {
			return this.http.get<ResourceTags>(this.baseUri + 'tags/' + (ResourceArn == null ? '' : encodeURIComponent(ResourceArn)), {});
		}

		/**
		 * Assigns metadata to an AppConfig resource. Tags help organize and categorize your AppConfig resources. Each tag consists of a key and an optional value, both of which you define. You can specify a maximum of 50 tags for a resource.
		 * Post tags/{ResourceArn}
		 * @param {string} ResourceArn The ARN of the resource for which to retrieve tags.
		 *     Min length: 20    Max length: 2048
		 * @return {void} 
		 */
		TagResource(ResourceArn: string, requestBody: TagResourcePostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'tags/' + (ResourceArn == null ? '' : encodeURIComponent(ResourceArn)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a tag key and value from an AppConfig resource.
		 * Delete tags/{ResourceArn}#tagKeys
		 * @param {string} ResourceArn The ARN of the resource for which to remove tags.
		 *     Min length: 20    Max length: 2048
		 * @param {Array<string>} tagKeys The tag keys to delete.
		 *     Minimum items: 0    Maximum items: 50
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
		 *     Min length: 1    Max length: 1024
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
		 * Min length: 1
		 * Max length: 64
		 */
		Name: string;

		/**
		 * A description of the application.
		 * Min length: 0
		 * Max length: 1024
		 */
		Description?: string | null;

		/** Metadata to assign to the application. Tags help organize and categorize your AppConfig resources. Each tag consists of a key and an optional value, both of which you define. */
		Tags?: {[id: string]: string };
	}
	export interface CreateApplicationPostBodyFormProperties {

		/**
		 * A name for the application.
		 * Required
		 * Min length: 1
		 * Max length: 64
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * A description of the application.
		 * Min length: 0
		 * Max length: 1024
		 */
		Description: FormControl<string | null | undefined>,

		/** Metadata to assign to the application. Tags help organize and categorize your AppConfig resources. Each tag consists of a key and an optional value, both of which you define. */
		Tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateApplicationPostBodyFormGroup() {
		return new FormGroup<CreateApplicationPostBodyFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(64)]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(1024)]),
			Tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateConfigurationProfilePostBody {

		/**
		 * A name for the configuration profile.
		 * Required
		 * Min length: 1
		 * Max length: 128
		 */
		Name: string;

		/**
		 * A description of the configuration profile.
		 * Min length: 0
		 * Max length: 1024
		 */
		Description?: string | null;

		/**
		 * <p>A URI to locate the configuration. You can specify the following:</p> <ul> <li> <p>For the AppConfig hosted configuration store and for feature flags, specify <code>hosted</code>.</p> </li> <li> <p>For an Amazon Web Services Systems Manager Parameter Store parameter, specify either the parameter name in the format <code>ssm-parameter://&lt;parameter name&gt;</code> or the ARN.</p> </li> <li> <p>For an Secrets Manager secret, specify the URI in the following format: <code>secrets-manager</code>://&lt;secret name&gt;.</p> </li> <li> <p>For an Amazon S3 object, specify the URI in the following format: <code>s3://&lt;bucket&gt;/&lt;objectKey&gt; </code>. Here is an example: <code>s3://my-bucket/my-app/us-east-1/my-config.json</code> </p> </li> <li> <p>For an SSM document, specify either the document name in the format <code>ssm-document://&lt;document name&gt;</code> or the Amazon Resource Name (ARN).</p> </li> </ul>
		 * Required
		 * Min length: 1
		 * Max length: 2048
		 */
		LocationUri: string;

		/**
		 * <p>The ARN of an IAM role with permission to access the configuration at the specified <code>LocationUri</code>.</p> <important> <p>A retrieval role ARN is not required for configurations stored in the AppConfig hosted configuration store. It is required for all other sources that store your configuration. </p> </important>
		 * Min length: 20
		 * Max length: 2048
		 */
		RetrievalRoleArn?: string | null;

		/**
		 * A list of methods for validating the configuration.
		 * Minimum items: 0
		 * Maximum items: 2
		 */
		Validators?: Array<Validator>;

		/** Metadata to assign to the configuration profile. Tags help organize and categorize your AppConfig resources. Each tag consists of a key and an optional value, both of which you define. */
		Tags?: {[id: string]: string };

		/** <p>The type of configurations contained in the profile. AppConfig supports <code>feature flags</code> and <code>freeform</code> configurations. We recommend you create feature flag configurations to enable or disable new features and freeform configurations to distribute configurations to an application. When calling this API, enter one of the following values for <code>Type</code>:</p> <p> <code>AWS.AppConfig.FeatureFlags</code> </p> <p> <code>AWS.Freeform</code> </p> */
		Type?: string | null;
	}
	export interface CreateConfigurationProfilePostBodyFormProperties {

		/**
		 * A name for the configuration profile.
		 * Required
		 * Min length: 1
		 * Max length: 128
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * A description of the configuration profile.
		 * Min length: 0
		 * Max length: 1024
		 */
		Description: FormControl<string | null | undefined>,

		/**
		 * <p>A URI to locate the configuration. You can specify the following:</p> <ul> <li> <p>For the AppConfig hosted configuration store and for feature flags, specify <code>hosted</code>.</p> </li> <li> <p>For an Amazon Web Services Systems Manager Parameter Store parameter, specify either the parameter name in the format <code>ssm-parameter://&lt;parameter name&gt;</code> or the ARN.</p> </li> <li> <p>For an Secrets Manager secret, specify the URI in the following format: <code>secrets-manager</code>://&lt;secret name&gt;.</p> </li> <li> <p>For an Amazon S3 object, specify the URI in the following format: <code>s3://&lt;bucket&gt;/&lt;objectKey&gt; </code>. Here is an example: <code>s3://my-bucket/my-app/us-east-1/my-config.json</code> </p> </li> <li> <p>For an SSM document, specify either the document name in the format <code>ssm-document://&lt;document name&gt;</code> or the Amazon Resource Name (ARN).</p> </li> </ul>
		 * Required
		 * Min length: 1
		 * Max length: 2048
		 */
		LocationUri: FormControl<string | null | undefined>,

		/**
		 * <p>The ARN of an IAM role with permission to access the configuration at the specified <code>LocationUri</code>.</p> <important> <p>A retrieval role ARN is not required for configurations stored in the AppConfig hosted configuration store. It is required for all other sources that store your configuration. </p> </important>
		 * Min length: 20
		 * Max length: 2048
		 */
		RetrievalRoleArn: FormControl<string | null | undefined>,

		/** Metadata to assign to the configuration profile. Tags help organize and categorize your AppConfig resources. Each tag consists of a key and an optional value, both of which you define. */
		Tags: FormControl<{[id: string]: string } | null | undefined>,

		/** <p>The type of configurations contained in the profile. AppConfig supports <code>feature flags</code> and <code>freeform</code> configurations. We recommend you create feature flag configurations to enable or disable new features and freeform configurations to distribute configurations to an application. When calling this API, enter one of the following values for <code>Type</code>:</p> <p> <code>AWS.AppConfig.FeatureFlags</code> </p> <p> <code>AWS.Freeform</code> </p> */
		Type: FormControl<string | null | undefined>,
	}
	export function CreateCreateConfigurationProfilePostBodyFormGroup() {
		return new FormGroup<CreateConfigurationProfilePostBodyFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128)]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(1024)]),
			LocationUri: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(2048)]),
			RetrievalRoleArn: new FormControl<string | null | undefined>(undefined, [Validators.minLength(20), Validators.maxLength(2048), Validators.pattern('^((arn):(aws|aws-cn|aws-iso|aws-iso-[a-z]{1}|aws-us-gov):(iam)::\d{12}:role[/].*)$')]),
			Tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			Type: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[a-zA-Z\.]+')]),
		});

	}

	export interface CreateDeploymentStrategyPostBody {

		/**
		 * A name for the deployment strategy.
		 * Required
		 * Min length: 1
		 * Max length: 64
		 */
		Name: string;

		/**
		 * A description of the deployment strategy.
		 * Min length: 0
		 * Max length: 1024
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
		 * Specifies the amount of time AppConfig monitors for Amazon CloudWatch alarms after the configuration has been deployed to 100% of its targets, before considering the deployment to be complete. If an alarm is triggered during this time, AppConfig rolls back the deployment. You must configure permissions for AppConfig to roll back based on CloudWatch alarms. For more information, see <a href="https://docs.aws.amazon.com/appconfig/latest/userguide/getting-started-with-appconfig-cloudwatch-alarms-permissions.html">Configuring permissions for rollback based on Amazon CloudWatch alarms</a> in the <i>AppConfig User Guide</i>.
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

		/** <p>The algorithm used to define how percentage grows over time. AppConfig supports the following growth types:</p> <p> <b>Linear</b>: For this type, AppConfig processes the deployment by dividing the total number of targets by the value specified for <code>Step percentage</code>. For example, a linear deployment that uses a <code>Step percentage</code> of 10 deploys the configuration to 10 percent of the hosts. After those deployments are complete, the system deploys the configuration to the next 10 percent. This continues until 100% of the targets have successfully received the configuration.</p> <p> <b>Exponential</b>: For this type, AppConfig processes the deployment exponentially using the following formula: <code>G*(2^N)</code>. In this formula, <code>G</code> is the growth factor specified by the user and <code>N</code> is the number of steps until the configuration is deployed to all targets. For example, if you specify a growth factor of 2, then the system rolls out the configuration as follows:</p> <p> <code>2*(2^0)</code> </p> <p> <code>2*(2^1)</code> </p> <p> <code>2*(2^2)</code> </p> <p>Expressed numerically, the deployment rolls out as follows: 2% of the targets, 4% of the targets, 8% of the targets, and continues until the configuration has been deployed to all targets.</p> */
		GrowthType?: GrowthType | null;

		/** Save the deployment strategy to a Systems Manager (SSM) document. */
		ReplicateTo?: ReplicateTo | null;

		/** Metadata to assign to the deployment strategy. Tags help organize and categorize your AppConfig resources. Each tag consists of a key and an optional value, both of which you define. */
		Tags?: {[id: string]: string };
	}
	export interface CreateDeploymentStrategyPostBodyFormProperties {

		/**
		 * A name for the deployment strategy.
		 * Required
		 * Min length: 1
		 * Max length: 64
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * A description of the deployment strategy.
		 * Min length: 0
		 * Max length: 1024
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
		 * Specifies the amount of time AppConfig monitors for Amazon CloudWatch alarms after the configuration has been deployed to 100% of its targets, before considering the deployment to be complete. If an alarm is triggered during this time, AppConfig rolls back the deployment. You must configure permissions for AppConfig to roll back based on CloudWatch alarms. For more information, see <a href="https://docs.aws.amazon.com/appconfig/latest/userguide/getting-started-with-appconfig-cloudwatch-alarms-permissions.html">Configuring permissions for rollback based on Amazon CloudWatch alarms</a> in the <i>AppConfig User Guide</i>.
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

		/** <p>The algorithm used to define how percentage grows over time. AppConfig supports the following growth types:</p> <p> <b>Linear</b>: For this type, AppConfig processes the deployment by dividing the total number of targets by the value specified for <code>Step percentage</code>. For example, a linear deployment that uses a <code>Step percentage</code> of 10 deploys the configuration to 10 percent of the hosts. After those deployments are complete, the system deploys the configuration to the next 10 percent. This continues until 100% of the targets have successfully received the configuration.</p> <p> <b>Exponential</b>: For this type, AppConfig processes the deployment exponentially using the following formula: <code>G*(2^N)</code>. In this formula, <code>G</code> is the growth factor specified by the user and <code>N</code> is the number of steps until the configuration is deployed to all targets. For example, if you specify a growth factor of 2, then the system rolls out the configuration as follows:</p> <p> <code>2*(2^0)</code> </p> <p> <code>2*(2^1)</code> </p> <p> <code>2*(2^2)</code> </p> <p>Expressed numerically, the deployment rolls out as follows: 2% of the targets, 4% of the targets, 8% of the targets, and continues until the configuration has been deployed to all targets.</p> */
		GrowthType: FormControl<GrowthType | null | undefined>,

		/** Save the deployment strategy to a Systems Manager (SSM) document. */
		ReplicateTo: FormControl<ReplicateTo | null | undefined>,

		/** Metadata to assign to the deployment strategy. Tags help organize and categorize your AppConfig resources. Each tag consists of a key and an optional value, both of which you define. */
		Tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateDeploymentStrategyPostBodyFormGroup() {
		return new FormGroup<CreateDeploymentStrategyPostBodyFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(64)]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(1024)]),
			DeploymentDurationInMinutes: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0), Validators.max(1440)]),
			FinalBakeTimeInMinutes: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(1440)]),
			GrowthFactor: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(1), Validators.max(100)]),
			GrowthType: new FormControl<GrowthType | null | undefined>(undefined),
			ReplicateTo: new FormControl<ReplicateTo | null | undefined>(undefined),
			Tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateEnvironmentPostBody {

		/**
		 * A name for the environment.
		 * Required
		 * Min length: 1
		 * Max length: 64
		 */
		Name: string;

		/**
		 * A description of the environment.
		 * Min length: 0
		 * Max length: 1024
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
		 * Min length: 1
		 * Max length: 64
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * A description of the environment.
		 * Min length: 0
		 * Max length: 1024
		 */
		Description: FormControl<string | null | undefined>,

		/** Metadata to assign to the environment. Tags help organize and categorize your AppConfig resources. Each tag consists of a key and an optional value, both of which you define. */
		Tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateEnvironmentPostBodyFormGroup() {
		return new FormGroup<CreateEnvironmentPostBodyFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(64)]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(1024)]),
			Tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateExtensionPostBody {

		/**
		 * A name for the extension. Each extension name in your account must be unique. Extension versions use the same name.
		 * Required
		 * Min length: 1
		 * Max length: 64
		 */
		Name: string;

		/**
		 * Information about the extension.
		 * Min length: 0
		 * Max length: 1024
		 */
		Description?: string | null;

		/**
		 * The actions defined in the extension.
		 * Required
		 */
		Actions: {[id: string]: Array<Action> };

		/** The parameters accepted by the extension. You specify parameter values when you associate the extension to an AppConfig resource by using the <code>CreateExtensionAssociation</code> API action. For Lambda extension actions, these parameters are included in the Lambda request object. */
		Parameters?: {[id: string]: Parameter };

		/** Adds one or more tags for the specified extension. Tags are metadata that help you categorize resources in different ways, for example, by purpose, owner, or environment. Each tag consists of a key and an optional value, both of which you define. */
		Tags?: {[id: string]: string };
	}
	export interface CreateExtensionPostBodyFormProperties {

		/**
		 * A name for the extension. Each extension name in your account must be unique. Extension versions use the same name.
		 * Required
		 * Min length: 1
		 * Max length: 64
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * Information about the extension.
		 * Min length: 0
		 * Max length: 1024
		 */
		Description: FormControl<string | null | undefined>,

		/**
		 * The actions defined in the extension.
		 * Required
		 */
		Actions: FormControl<{[id: string]: Array<Action> } | null | undefined>,

		/** The parameters accepted by the extension. You specify parameter values when you associate the extension to an AppConfig resource by using the <code>CreateExtensionAssociation</code> API action. For Lambda extension actions, these parameters are included in the Lambda request object. */
		Parameters: FormControl<{[id: string]: Parameter } | null | undefined>,

		/** Adds one or more tags for the specified extension. Tags are metadata that help you categorize resources in different ways, for example, by purpose, owner, or environment. Each tag consists of a key and an optional value, both of which you define. */
		Tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateExtensionPostBodyFormGroup() {
		return new FormGroup<CreateExtensionPostBodyFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(64)]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(1024)]),
			Actions: new FormControl<{[id: string]: Array<Action> } | null | undefined>(undefined, [Validators.required]),
			Parameters: new FormControl<{[id: string]: Parameter } | null | undefined>(undefined),
			Tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateExtensionAssociationPostBody {

		/**
		 * The name, the ID, or the Amazon Resource Name (ARN) of the extension.
		 * Required
		 * Min length: 1
		 * Max length: 2048
		 */
		ExtensionIdentifier: string;

		/**
		 * The version number of the extension. If not specified, AppConfig uses the maximum version of the extension.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		ExtensionVersionNumber?: number | null;

		/**
		 * The ARN of an application, configuration profile, or environment.
		 * Required
		 * Min length: 1
		 * Max length: 2048
		 */
		ResourceIdentifier: string;

		/** The parameter names and values defined in the extensions. Extension parameters marked <code>Required</code> must be entered for this field. */
		Parameters?: {[id: string]: string };

		/** Adds one or more tags for the specified extension association. Tags are metadata that help you categorize resources in different ways, for example, by purpose, owner, or environment. Each tag consists of a key and an optional value, both of which you define. */
		Tags?: {[id: string]: string };
	}
	export interface CreateExtensionAssociationPostBodyFormProperties {

		/**
		 * The name, the ID, or the Amazon Resource Name (ARN) of the extension.
		 * Required
		 * Min length: 1
		 * Max length: 2048
		 */
		ExtensionIdentifier: FormControl<string | null | undefined>,

		/**
		 * The version number of the extension. If not specified, AppConfig uses the maximum version of the extension.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		ExtensionVersionNumber: FormControl<number | null | undefined>,

		/**
		 * The ARN of an application, configuration profile, or environment.
		 * Required
		 * Min length: 1
		 * Max length: 2048
		 */
		ResourceIdentifier: FormControl<string | null | undefined>,

		/** The parameter names and values defined in the extensions. Extension parameters marked <code>Required</code> must be entered for this field. */
		Parameters: FormControl<{[id: string]: string } | null | undefined>,

		/** Adds one or more tags for the specified extension association. Tags are metadata that help you categorize resources in different ways, for example, by purpose, owner, or environment. Each tag consists of a key and an optional value, both of which you define. */
		Tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateExtensionAssociationPostBodyFormGroup() {
		return new FormGroup<CreateExtensionAssociationPostBodyFormProperties>({
			ExtensionIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(2048)]),
			ExtensionVersionNumber: new FormControl<number | null | undefined>(undefined),
			ResourceIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(2048)]),
			Parameters: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			Tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateHostedConfigurationVersionPostBody {

		/**
		 * The content of the configuration or the configuration data.
		 * Required
		 */
		Content: string;
	}
	export interface CreateHostedConfigurationVersionPostBodyFormProperties {

		/**
		 * The content of the configuration or the configuration data.
		 * Required
		 */
		Content: FormControl<string | null | undefined>,
	}
	export function CreateCreateHostedConfigurationVersionPostBodyFormGroup() {
		return new FormGroup<CreateHostedConfigurationVersionPostBodyFormProperties>({
			Content: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateApplicationPatchBody {

		/**
		 * The name of the application.
		 * Min length: 1
		 * Max length: 64
		 */
		Name?: string | null;

		/**
		 * A description of the application.
		 * Min length: 0
		 * Max length: 1024
		 */
		Description?: string | null;
	}
	export interface UpdateApplicationPatchBodyFormProperties {

		/**
		 * The name of the application.
		 * Min length: 1
		 * Max length: 64
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * A description of the application.
		 * Min length: 0
		 * Max length: 1024
		 */
		Description: FormControl<string | null | undefined>,
	}
	export function CreateUpdateApplicationPatchBodyFormGroup() {
		return new FormGroup<UpdateApplicationPatchBodyFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64)]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(1024)]),
		});

	}

	export interface UpdateConfigurationProfilePatchBody {

		/**
		 * The name of the configuration profile.
		 * Min length: 1
		 * Max length: 64
		 */
		Name?: string | null;

		/**
		 * A description of the configuration profile.
		 * Min length: 0
		 * Max length: 1024
		 */
		Description?: string | null;

		/**
		 * The ARN of an IAM role with permission to access the configuration at the specified <code>LocationUri</code>.
		 * Min length: 20
		 * Max length: 2048
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
		 * Min length: 1
		 * Max length: 64
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * A description of the configuration profile.
		 * Min length: 0
		 * Max length: 1024
		 */
		Description: FormControl<string | null | undefined>,

		/**
		 * The ARN of an IAM role with permission to access the configuration at the specified <code>LocationUri</code>.
		 * Min length: 20
		 * Max length: 2048
		 */
		RetrievalRoleArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateConfigurationProfilePatchBodyFormGroup() {
		return new FormGroup<UpdateConfigurationProfilePatchBodyFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64)]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(1024)]),
			RetrievalRoleArn: new FormControl<string | null | undefined>(undefined, [Validators.minLength(20), Validators.maxLength(2048), Validators.pattern('^((arn):(aws|aws-cn|aws-iso|aws-iso-[a-z]{1}|aws-us-gov):(iam)::\d{12}:role[/].*)$')]),
		});

	}

	export interface UpdateEnvironmentPatchBody {

		/**
		 * The name of the environment.
		 * Min length: 1
		 * Max length: 64
		 */
		Name?: string | null;

		/**
		 * A description of the environment.
		 * Min length: 0
		 * Max length: 1024
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
		 * Min length: 1
		 * Max length: 64
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * A description of the environment.
		 * Min length: 0
		 * Max length: 1024
		 */
		Description: FormControl<string | null | undefined>,
	}
	export function CreateUpdateEnvironmentPatchBodyFormGroup() {
		return new FormGroup<UpdateEnvironmentPatchBodyFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64)]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(1024)]),
		});

	}

	export interface UpdateExtensionPatchBody {

		/**
		 * Information about the extension.
		 * Min length: 0
		 * Max length: 1024
		 */
		Description?: string | null;

		/** The actions defined in the extension. */
		Actions?: {[id: string]: Array<Action> };

		/** One or more parameters for the actions called by the extension. */
		Parameters?: {[id: string]: Parameter };

		/**
		 * The extension version number.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		VersionNumber?: number | null;
	}
	export interface UpdateExtensionPatchBodyFormProperties {

		/**
		 * Information about the extension.
		 * Min length: 0
		 * Max length: 1024
		 */
		Description: FormControl<string | null | undefined>,

		/** The actions defined in the extension. */
		Actions: FormControl<{[id: string]: Array<Action> } | null | undefined>,

		/** One or more parameters for the actions called by the extension. */
		Parameters: FormControl<{[id: string]: Parameter } | null | undefined>,

		/**
		 * The extension version number.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		VersionNumber: FormControl<number | null | undefined>,
	}
	export function CreateUpdateExtensionPatchBodyFormGroup() {
		return new FormGroup<UpdateExtensionPatchBodyFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(1024)]),
			Actions: new FormControl<{[id: string]: Array<Action> } | null | undefined>(undefined),
			Parameters: new FormControl<{[id: string]: Parameter } | null | undefined>(undefined),
			VersionNumber: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface UpdateExtensionAssociationPatchBody {

		/** The parameter names and values defined in the extension. */
		Parameters?: {[id: string]: string };
	}
	export interface UpdateExtensionAssociationPatchBodyFormProperties {

		/** The parameter names and values defined in the extension. */
		Parameters: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateUpdateExtensionAssociationPatchBodyFormGroup() {
		return new FormGroup<UpdateExtensionAssociationPatchBodyFormProperties>({
			Parameters: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface UpdateDeploymentStrategyPatchBody {

		/**
		 * A description of the deployment strategy.
		 * Min length: 0
		 * Max length: 1024
		 */
		Description?: string | null;

		/**
		 * Total amount of time for a deployment to last.
		 * Minimum: 0
		 * Maximum: 1440
		 */
		DeploymentDurationInMinutes?: number | null;

		/**
		 * The amount of time that AppConfig monitors for alarms before considering the deployment to be complete and no longer eligible for automatic rollback.
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

		/** <p>The algorithm used to define how percentage grows over time. AppConfig supports the following growth types:</p> <p> <b>Linear</b>: For this type, AppConfig processes the deployment by increments of the growth factor evenly distributed over the deployment time. For example, a linear deployment that uses a growth factor of 20 initially makes the configuration available to 20 percent of the targets. After 1/5th of the deployment time has passed, the system updates the percentage to 40 percent. This continues until 100% of the targets are set to receive the deployed configuration.</p> <p> <b>Exponential</b>: For this type, AppConfig processes the deployment exponentially using the following formula: <code>G*(2^N)</code>. In this formula, <code>G</code> is the growth factor specified by the user and <code>N</code> is the number of steps until the configuration is deployed to all targets. For example, if you specify a growth factor of 2, then the system rolls out the configuration as follows:</p> <p> <code>2*(2^0)</code> </p> <p> <code>2*(2^1)</code> </p> <p> <code>2*(2^2)</code> </p> <p>Expressed numerically, the deployment rolls out as follows: 2% of the targets, 4% of the targets, 8% of the targets, and continues until the configuration has been deployed to all targets.</p> */
		GrowthType?: GrowthType | null;
	}
	export interface UpdateDeploymentStrategyPatchBodyFormProperties {

		/**
		 * A description of the deployment strategy.
		 * Min length: 0
		 * Max length: 1024
		 */
		Description: FormControl<string | null | undefined>,

		/**
		 * Total amount of time for a deployment to last.
		 * Minimum: 0
		 * Maximum: 1440
		 */
		DeploymentDurationInMinutes: FormControl<number | null | undefined>,

		/**
		 * The amount of time that AppConfig monitors for alarms before considering the deployment to be complete and no longer eligible for automatic rollback.
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

		/** <p>The algorithm used to define how percentage grows over time. AppConfig supports the following growth types:</p> <p> <b>Linear</b>: For this type, AppConfig processes the deployment by increments of the growth factor evenly distributed over the deployment time. For example, a linear deployment that uses a growth factor of 20 initially makes the configuration available to 20 percent of the targets. After 1/5th of the deployment time has passed, the system updates the percentage to 40 percent. This continues until 100% of the targets are set to receive the deployed configuration.</p> <p> <b>Exponential</b>: For this type, AppConfig processes the deployment exponentially using the following formula: <code>G*(2^N)</code>. In this formula, <code>G</code> is the growth factor specified by the user and <code>N</code> is the number of steps until the configuration is deployed to all targets. For example, if you specify a growth factor of 2, then the system rolls out the configuration as follows:</p> <p> <code>2*(2^0)</code> </p> <p> <code>2*(2^1)</code> </p> <p> <code>2*(2^2)</code> </p> <p>Expressed numerically, the deployment rolls out as follows: 2% of the targets, 4% of the targets, 8% of the targets, and continues until the configuration has been deployed to all targets.</p> */
		GrowthType: FormControl<GrowthType | null | undefined>,
	}
	export function CreateUpdateDeploymentStrategyPatchBodyFormGroup() {
		return new FormGroup<UpdateDeploymentStrategyPatchBodyFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(1024)]),
			DeploymentDurationInMinutes: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(1440)]),
			FinalBakeTimeInMinutes: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(1440)]),
			GrowthFactor: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
			GrowthType: new FormControl<GrowthType | null | undefined>(undefined),
		});

	}

	export interface StartDeploymentPostBody {

		/**
		 * The deployment strategy ID.
		 * Required
		 */
		DeploymentStrategyId: string;

		/**
		 * The configuration profile ID.
		 * Required
		 */
		ConfigurationProfileId: string;

		/**
		 * The configuration version to deploy. If deploying an AppConfig hosted configuration version, you can specify either the version number or version label.
		 * Required
		 * Min length: 1
		 * Max length: 1024
		 */
		ConfigurationVersion: string;

		/**
		 * A description of the deployment.
		 * Min length: 0
		 * Max length: 1024
		 */
		Description?: string | null;

		/** Metadata to assign to the deployment. Tags help organize and categorize your AppConfig resources. Each tag consists of a key and an optional value, both of which you define. */
		Tags?: {[id: string]: string };

		/**
		 * The KMS key identifier (key ID, key alias, or key ARN). AppConfig uses this ID to encrypt the configuration data using a customer managed key.
		 * Min length: 1
		 * Max length: 2048
		 */
		KmsKeyIdentifier?: string | null;
	}
	export interface StartDeploymentPostBodyFormProperties {

		/**
		 * The deployment strategy ID.
		 * Required
		 */
		DeploymentStrategyId: FormControl<string | null | undefined>,

		/**
		 * The configuration profile ID.
		 * Required
		 */
		ConfigurationProfileId: FormControl<string | null | undefined>,

		/**
		 * The configuration version to deploy. If deploying an AppConfig hosted configuration version, you can specify either the version number or version label.
		 * Required
		 * Min length: 1
		 * Max length: 1024
		 */
		ConfigurationVersion: FormControl<string | null | undefined>,

		/**
		 * A description of the deployment.
		 * Min length: 0
		 * Max length: 1024
		 */
		Description: FormControl<string | null | undefined>,

		/** Metadata to assign to the deployment. Tags help organize and categorize your AppConfig resources. Each tag consists of a key and an optional value, both of which you define. */
		Tags: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * The KMS key identifier (key ID, key alias, or key ARN). AppConfig uses this ID to encrypt the configuration data using a customer managed key.
		 * Min length: 1
		 * Max length: 2048
		 */
		KmsKeyIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateStartDeploymentPostBodyFormGroup() {
		return new FormGroup<StartDeploymentPostBodyFormProperties>({
			DeploymentStrategyId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('(^[a-z0-9]{4,7}$|^AppConfig\.[A-Za-z0-9]{9,40}$)')]),
			ConfigurationProfileId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('[a-z0-9]{4,7}')]),
			ConfigurationVersion: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1024)]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(1024)]),
			Tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			KmsKeyIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2048)]),
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
			Tags: new FormControl<{[id: string]: string } | null | undefined>(undefined, [Validators.required]),
		});

	}

}

