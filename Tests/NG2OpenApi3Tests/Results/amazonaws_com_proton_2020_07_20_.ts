import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface AcceptEnvironmentAccountConnectionOutput {

		/** Required */
		environmentAccountConnection: EnvironmentAccountConnection;
	}
	export interface AcceptEnvironmentAccountConnectionOutputFormProperties {
	}
	export function CreateAcceptEnvironmentAccountConnectionOutputFormGroup() {
		return new FormGroup<AcceptEnvironmentAccountConnectionOutputFormProperties>({
		});

	}


	/** Detailed data of an Proton environment account connection resource. */
	export interface EnvironmentAccountConnection {

		/** Required */
		arn: string;
		codebuildRoleArn?: string;
		componentRoleArn?: string;

		/** Required */
		environmentAccountId: string;

		/** Required */
		environmentName: string;

		/** Required */
		id: string;

		/** Required */
		lastModifiedAt: Date;

		/** Required */
		managementAccountId: string;

		/** Required */
		requestedAt: Date;

		/** Required */
		roleArn: string;

		/** Required */
		status: EnvironmentAccountConnectionStatus;
	}

	/** Detailed data of an Proton environment account connection resource. */
	export interface EnvironmentAccountConnectionFormProperties {

		/** Required */
		arn: FormControl<string | null | undefined>,
		codebuildRoleArn: FormControl<string | null | undefined>,
		componentRoleArn: FormControl<string | null | undefined>,

		/** Required */
		environmentAccountId: FormControl<string | null | undefined>,

		/** Required */
		environmentName: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		lastModifiedAt: FormControl<Date | null | undefined>,

		/** Required */
		managementAccountId: FormControl<string | null | undefined>,

		/** Required */
		requestedAt: FormControl<Date | null | undefined>,

		/** Required */
		roleArn: FormControl<string | null | undefined>,

		/** Required */
		status: FormControl<EnvironmentAccountConnectionStatus | null | undefined>,
	}
	export function CreateEnvironmentAccountConnectionFormGroup() {
		return new FormGroup<EnvironmentAccountConnectionFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			codebuildRoleArn: new FormControl<string | null | undefined>(undefined),
			componentRoleArn: new FormControl<string | null | undefined>(undefined),
			environmentAccountId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			environmentName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			lastModifiedAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			managementAccountId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			requestedAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			roleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<EnvironmentAccountConnectionStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum EnvironmentAccountConnectionStatus { PENDING = 0, CONNECTED = 1, REJECTED = 2 }

	export interface AcceptEnvironmentAccountConnectionInput {

		/** Required */
		id: string;
	}
	export interface AcceptEnvironmentAccountConnectionInputFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,
	}
	export function CreateAcceptEnvironmentAccountConnectionInputFormGroup() {
		return new FormGroup<AcceptEnvironmentAccountConnectionInputFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

	export interface InternalServerException {
	}
	export interface InternalServerExceptionFormProperties {
	}
	export function CreateInternalServerExceptionFormGroup() {
		return new FormGroup<InternalServerExceptionFormProperties>({
		});

	}

	export interface CancelComponentDeploymentOutput {

		/** Required */
		component: Component;
	}
	export interface CancelComponentDeploymentOutputFormProperties {
	}
	export function CreateCancelComponentDeploymentOutputFormGroup() {
		return new FormGroup<CancelComponentDeploymentOutputFormProperties>({
		});

	}


	/** <p>Detailed data of an Proton component resource.</p> <p>For more information about components, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-components.html">Proton components</a> in the <i>Proton User Guide</i>.</p> */
	export interface Component {

		/** Required */
		arn: string;

		/** Required */
		createdAt: Date;

		/** Required */
		deploymentStatus: DeploymentStatus;
		deploymentStatusMessage?: string;
		description?: string;

		/** Required */
		environmentName: string;
		lastAttemptedDeploymentId?: string;
		lastClientRequestToken?: string;
		lastDeploymentAttemptedAt?: Date;
		lastDeploymentSucceededAt?: Date;

		/** Required */
		lastModifiedAt: Date;
		lastSucceededDeploymentId?: string;

		/** Required */
		name: string;
		serviceInstanceName?: string;
		serviceName?: string;
		serviceSpec?: string;
	}

	/** <p>Detailed data of an Proton component resource.</p> <p>For more information about components, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-components.html">Proton components</a> in the <i>Proton User Guide</i>.</p> */
	export interface ComponentFormProperties {

		/** Required */
		arn: FormControl<string | null | undefined>,

		/** Required */
		createdAt: FormControl<Date | null | undefined>,

		/** Required */
		deploymentStatus: FormControl<DeploymentStatus | null | undefined>,
		deploymentStatusMessage: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,

		/** Required */
		environmentName: FormControl<string | null | undefined>,
		lastAttemptedDeploymentId: FormControl<string | null | undefined>,
		lastClientRequestToken: FormControl<string | null | undefined>,
		lastDeploymentAttemptedAt: FormControl<Date | null | undefined>,
		lastDeploymentSucceededAt: FormControl<Date | null | undefined>,

		/** Required */
		lastModifiedAt: FormControl<Date | null | undefined>,
		lastSucceededDeploymentId: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
		serviceInstanceName: FormControl<string | null | undefined>,
		serviceName: FormControl<string | null | undefined>,
		serviceSpec: FormControl<string | null | undefined>,
	}
	export function CreateComponentFormGroup() {
		return new FormGroup<ComponentFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			createdAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			deploymentStatus: new FormControl<DeploymentStatus | null | undefined>(undefined, [Validators.required]),
			deploymentStatusMessage: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			environmentName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			lastAttemptedDeploymentId: new FormControl<string | null | undefined>(undefined),
			lastClientRequestToken: new FormControl<string | null | undefined>(undefined),
			lastDeploymentAttemptedAt: new FormControl<Date | null | undefined>(undefined),
			lastDeploymentSucceededAt: new FormControl<Date | null | undefined>(undefined),
			lastModifiedAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			lastSucceededDeploymentId: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			serviceInstanceName: new FormControl<string | null | undefined>(undefined),
			serviceName: new FormControl<string | null | undefined>(undefined),
			serviceSpec: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DeploymentStatus { IN_PROGRESS = 0, FAILED = 1, SUCCEEDED = 2, DELETE_IN_PROGRESS = 3, DELETE_FAILED = 4, DELETE_COMPLETE = 5, CANCELLING = 6, CANCELLED = 7 }

	export interface CancelComponentDeploymentInput {

		/** Required */
		componentName: string;
	}
	export interface CancelComponentDeploymentInputFormProperties {

		/** Required */
		componentName: FormControl<string | null | undefined>,
	}
	export function CreateCancelComponentDeploymentInputFormGroup() {
		return new FormGroup<CancelComponentDeploymentInputFormProperties>({
			componentName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CancelEnvironmentDeploymentOutput {

		/** Required */
		environment: Environment;
	}
	export interface CancelEnvironmentDeploymentOutputFormProperties {
	}
	export function CreateCancelEnvironmentDeploymentOutputFormGroup() {
		return new FormGroup<CancelEnvironmentDeploymentOutputFormProperties>({
		});

	}


	/** Detailed data of an Proton environment resource. An Proton environment is a set of resources shared across Proton services. */
	export interface Environment {

		/** Required */
		arn: string;
		codebuildRoleArn?: string;
		componentRoleArn?: string;

		/** Required */
		createdAt: Date;

		/** Required */
		deploymentStatus: DeploymentStatus;
		deploymentStatusMessage?: string;
		description?: string;
		environmentAccountConnectionId?: string;
		environmentAccountId?: string;
		lastAttemptedDeploymentId?: string;

		/** Required */
		lastDeploymentAttemptedAt: Date;

		/** Required */
		lastDeploymentSucceededAt: Date;
		lastSucceededDeploymentId?: string;

		/** Required */
		name: string;
		protonServiceRoleArn?: string;
		provisioning?: Provisioning;
		provisioningRepository?: RepositoryBranch;
		spec?: string;

		/** Required */
		templateMajorVersion: string;

		/** Required */
		templateMinorVersion: string;

		/** Required */
		templateName: string;
	}

	/** Detailed data of an Proton environment resource. An Proton environment is a set of resources shared across Proton services. */
	export interface EnvironmentFormProperties {

		/** Required */
		arn: FormControl<string | null | undefined>,
		codebuildRoleArn: FormControl<string | null | undefined>,
		componentRoleArn: FormControl<string | null | undefined>,

		/** Required */
		createdAt: FormControl<Date | null | undefined>,

		/** Required */
		deploymentStatus: FormControl<DeploymentStatus | null | undefined>,
		deploymentStatusMessage: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		environmentAccountConnectionId: FormControl<string | null | undefined>,
		environmentAccountId: FormControl<string | null | undefined>,
		lastAttemptedDeploymentId: FormControl<string | null | undefined>,

		/** Required */
		lastDeploymentAttemptedAt: FormControl<Date | null | undefined>,

		/** Required */
		lastDeploymentSucceededAt: FormControl<Date | null | undefined>,
		lastSucceededDeploymentId: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
		protonServiceRoleArn: FormControl<string | null | undefined>,
		provisioning: FormControl<Provisioning | null | undefined>,
		spec: FormControl<string | null | undefined>,

		/** Required */
		templateMajorVersion: FormControl<string | null | undefined>,

		/** Required */
		templateMinorVersion: FormControl<string | null | undefined>,

		/** Required */
		templateName: FormControl<string | null | undefined>,
	}
	export function CreateEnvironmentFormGroup() {
		return new FormGroup<EnvironmentFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			codebuildRoleArn: new FormControl<string | null | undefined>(undefined),
			componentRoleArn: new FormControl<string | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			deploymentStatus: new FormControl<DeploymentStatus | null | undefined>(undefined, [Validators.required]),
			deploymentStatusMessage: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			environmentAccountConnectionId: new FormControl<string | null | undefined>(undefined),
			environmentAccountId: new FormControl<string | null | undefined>(undefined),
			lastAttemptedDeploymentId: new FormControl<string | null | undefined>(undefined),
			lastDeploymentAttemptedAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			lastDeploymentSucceededAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			lastSucceededDeploymentId: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			protonServiceRoleArn: new FormControl<string | null | undefined>(undefined),
			provisioning: new FormControl<Provisioning | null | undefined>(undefined),
			spec: new FormControl<string | null | undefined>(undefined),
			templateMajorVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			templateMinorVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			templateName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum Provisioning { CUSTOMER_MANAGED = 0 }


	/** Detail data for a linked repository branch. */
	export interface RepositoryBranch {

		/** Required */
		arn: string;

		/** Required */
		branch: string;

		/** Required */
		name: string;

		/** Required */
		provider: RepositoryProvider;
	}

	/** Detail data for a linked repository branch. */
	export interface RepositoryBranchFormProperties {

		/** Required */
		arn: FormControl<string | null | undefined>,

		/** Required */
		branch: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		provider: FormControl<RepositoryProvider | null | undefined>,
	}
	export function CreateRepositoryBranchFormGroup() {
		return new FormGroup<RepositoryBranchFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			branch: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			provider: new FormControl<RepositoryProvider | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum RepositoryProvider { GITHUB = 0, GITHUB_ENTERPRISE = 1, BITBUCKET = 2 }

	export interface CancelEnvironmentDeploymentInput {

		/** Required */
		environmentName: string;
	}
	export interface CancelEnvironmentDeploymentInputFormProperties {

		/** Required */
		environmentName: FormControl<string | null | undefined>,
	}
	export function CreateCancelEnvironmentDeploymentInputFormGroup() {
		return new FormGroup<CancelEnvironmentDeploymentInputFormProperties>({
			environmentName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CancelServiceInstanceDeploymentOutput {

		/** Required */
		serviceInstance: ServiceInstance;
	}
	export interface CancelServiceInstanceDeploymentOutputFormProperties {
	}
	export function CreateCancelServiceInstanceDeploymentOutputFormGroup() {
		return new FormGroup<CancelServiceInstanceDeploymentOutputFormProperties>({
		});

	}


	/** Detailed data of an Proton service instance resource. */
	export interface ServiceInstance {

		/** Required */
		arn: string;

		/** Required */
		createdAt: Date;

		/** Required */
		deploymentStatus: DeploymentStatus;
		deploymentStatusMessage?: string;

		/** Required */
		environmentName: string;
		lastAttemptedDeploymentId?: string;
		lastClientRequestToken?: string;

		/** Required */
		lastDeploymentAttemptedAt: Date;

		/** Required */
		lastDeploymentSucceededAt: Date;
		lastSucceededDeploymentId?: string;

		/** Required */
		name: string;

		/** Required */
		serviceName: string;
		spec?: string;

		/** Required */
		templateMajorVersion: string;

		/** Required */
		templateMinorVersion: string;

		/** Required */
		templateName: string;
	}

	/** Detailed data of an Proton service instance resource. */
	export interface ServiceInstanceFormProperties {

		/** Required */
		arn: FormControl<string | null | undefined>,

		/** Required */
		createdAt: FormControl<Date | null | undefined>,

		/** Required */
		deploymentStatus: FormControl<DeploymentStatus | null | undefined>,
		deploymentStatusMessage: FormControl<string | null | undefined>,

		/** Required */
		environmentName: FormControl<string | null | undefined>,
		lastAttemptedDeploymentId: FormControl<string | null | undefined>,
		lastClientRequestToken: FormControl<string | null | undefined>,

		/** Required */
		lastDeploymentAttemptedAt: FormControl<Date | null | undefined>,

		/** Required */
		lastDeploymentSucceededAt: FormControl<Date | null | undefined>,
		lastSucceededDeploymentId: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		serviceName: FormControl<string | null | undefined>,
		spec: FormControl<string | null | undefined>,

		/** Required */
		templateMajorVersion: FormControl<string | null | undefined>,

		/** Required */
		templateMinorVersion: FormControl<string | null | undefined>,

		/** Required */
		templateName: FormControl<string | null | undefined>,
	}
	export function CreateServiceInstanceFormGroup() {
		return new FormGroup<ServiceInstanceFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			createdAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			deploymentStatus: new FormControl<DeploymentStatus | null | undefined>(undefined, [Validators.required]),
			deploymentStatusMessage: new FormControl<string | null | undefined>(undefined),
			environmentName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			lastAttemptedDeploymentId: new FormControl<string | null | undefined>(undefined),
			lastClientRequestToken: new FormControl<string | null | undefined>(undefined),
			lastDeploymentAttemptedAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			lastDeploymentSucceededAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			lastSucceededDeploymentId: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			serviceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			spec: new FormControl<string | null | undefined>(undefined),
			templateMajorVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			templateMinorVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			templateName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CancelServiceInstanceDeploymentInput {

		/** Required */
		serviceInstanceName: string;

		/** Required */
		serviceName: string;
	}
	export interface CancelServiceInstanceDeploymentInputFormProperties {

		/** Required */
		serviceInstanceName: FormControl<string | null | undefined>,

		/** Required */
		serviceName: FormControl<string | null | undefined>,
	}
	export function CreateCancelServiceInstanceDeploymentInputFormGroup() {
		return new FormGroup<CancelServiceInstanceDeploymentInputFormProperties>({
			serviceInstanceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			serviceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CancelServicePipelineDeploymentOutput {

		/** Required */
		pipeline: ServicePipeline;
	}
	export interface CancelServicePipelineDeploymentOutputFormProperties {
	}
	export function CreateCancelServicePipelineDeploymentOutputFormGroup() {
		return new FormGroup<CancelServicePipelineDeploymentOutputFormProperties>({
		});

	}


	/** Detailed data of an Proton service instance pipeline resource. */
	export interface ServicePipeline {

		/** Required */
		arn: string;

		/** Required */
		createdAt: Date;

		/** Required */
		deploymentStatus: DeploymentStatus;
		deploymentStatusMessage?: string;
		lastAttemptedDeploymentId?: string;

		/** Required */
		lastDeploymentAttemptedAt: Date;

		/** Required */
		lastDeploymentSucceededAt: Date;
		lastSucceededDeploymentId?: string;
		spec?: string;

		/** Required */
		templateMajorVersion: string;

		/** Required */
		templateMinorVersion: string;

		/** Required */
		templateName: string;
	}

	/** Detailed data of an Proton service instance pipeline resource. */
	export interface ServicePipelineFormProperties {

		/** Required */
		arn: FormControl<string | null | undefined>,

		/** Required */
		createdAt: FormControl<Date | null | undefined>,

		/** Required */
		deploymentStatus: FormControl<DeploymentStatus | null | undefined>,
		deploymentStatusMessage: FormControl<string | null | undefined>,
		lastAttemptedDeploymentId: FormControl<string | null | undefined>,

		/** Required */
		lastDeploymentAttemptedAt: FormControl<Date | null | undefined>,

		/** Required */
		lastDeploymentSucceededAt: FormControl<Date | null | undefined>,
		lastSucceededDeploymentId: FormControl<string | null | undefined>,
		spec: FormControl<string | null | undefined>,

		/** Required */
		templateMajorVersion: FormControl<string | null | undefined>,

		/** Required */
		templateMinorVersion: FormControl<string | null | undefined>,

		/** Required */
		templateName: FormControl<string | null | undefined>,
	}
	export function CreateServicePipelineFormGroup() {
		return new FormGroup<ServicePipelineFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			createdAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			deploymentStatus: new FormControl<DeploymentStatus | null | undefined>(undefined, [Validators.required]),
			deploymentStatusMessage: new FormControl<string | null | undefined>(undefined),
			lastAttemptedDeploymentId: new FormControl<string | null | undefined>(undefined),
			lastDeploymentAttemptedAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			lastDeploymentSucceededAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			lastSucceededDeploymentId: new FormControl<string | null | undefined>(undefined),
			spec: new FormControl<string | null | undefined>(undefined),
			templateMajorVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			templateMinorVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			templateName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CancelServicePipelineDeploymentInput {

		/** Required */
		serviceName: string;
	}
	export interface CancelServicePipelineDeploymentInputFormProperties {

		/** Required */
		serviceName: FormControl<string | null | undefined>,
	}
	export function CreateCancelServicePipelineDeploymentInputFormGroup() {
		return new FormGroup<CancelServicePipelineDeploymentInputFormProperties>({
			serviceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateComponentOutput {

		/** Required */
		component: Component;
	}
	export interface CreateComponentOutputFormProperties {
	}
	export function CreateCreateComponentOutputFormGroup() {
		return new FormGroup<CreateComponentOutputFormProperties>({
		});

	}

	export interface CreateComponentInput {
		clientToken?: string;
		description?: string;
		environmentName?: string;

		/** Required */
		manifest: string;

		/** Required */
		name: string;
		serviceInstanceName?: string;
		serviceName?: string;
		serviceSpec?: string;
		tags?: Array<Tag>;

		/** Required */
		templateFile: string;
	}
	export interface CreateComponentInputFormProperties {
		clientToken: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		environmentName: FormControl<string | null | undefined>,

		/** Required */
		manifest: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
		serviceInstanceName: FormControl<string | null | undefined>,
		serviceName: FormControl<string | null | undefined>,
		serviceSpec: FormControl<string | null | undefined>,

		/** Required */
		templateFile: FormControl<string | null | undefined>,
	}
	export function CreateCreateComponentInputFormGroup() {
		return new FormGroup<CreateComponentInputFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			environmentName: new FormControl<string | null | undefined>(undefined),
			manifest: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			serviceInstanceName: new FormControl<string | null | undefined>(undefined),
			serviceName: new FormControl<string | null | undefined>(undefined),
			serviceSpec: new FormControl<string | null | undefined>(undefined),
			templateFile: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A description of a resource tag. */
	export interface Tag {

		/** Required */
		key: string;

		/** Required */
		value: string;
	}

	/** A description of a resource tag. */
	export interface TagFormProperties {

		/** Required */
		key: FormControl<string | null | undefined>,

		/** Required */
		value: FormControl<string | null | undefined>,
	}
	export function CreateTagFormGroup() {
		return new FormGroup<TagFormProperties>({
			key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

	export interface CreateEnvironmentOutput {

		/** Required */
		environment: Environment;
	}
	export interface CreateEnvironmentOutputFormProperties {
	}
	export function CreateCreateEnvironmentOutputFormGroup() {
		return new FormGroup<CreateEnvironmentOutputFormProperties>({
		});

	}

	export interface CreateEnvironmentInput {
		codebuildRoleArn?: string;
		componentRoleArn?: string;
		description?: string;
		environmentAccountConnectionId?: string;

		/** Required */
		name: string;
		protonServiceRoleArn?: string;
		provisioningRepository?: RepositoryBranchInput;

		/** Required */
		spec: string;
		tags?: Array<Tag>;

		/** Required */
		templateMajorVersion: string;
		templateMinorVersion?: string;

		/** Required */
		templateName: string;
	}
	export interface CreateEnvironmentInputFormProperties {
		codebuildRoleArn: FormControl<string | null | undefined>,
		componentRoleArn: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		environmentAccountConnectionId: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
		protonServiceRoleArn: FormControl<string | null | undefined>,

		/** Required */
		spec: FormControl<string | null | undefined>,

		/** Required */
		templateMajorVersion: FormControl<string | null | undefined>,
		templateMinorVersion: FormControl<string | null | undefined>,

		/** Required */
		templateName: FormControl<string | null | undefined>,
	}
	export function CreateCreateEnvironmentInputFormGroup() {
		return new FormGroup<CreateEnvironmentInputFormProperties>({
			codebuildRoleArn: new FormControl<string | null | undefined>(undefined),
			componentRoleArn: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			environmentAccountConnectionId: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			protonServiceRoleArn: new FormControl<string | null | undefined>(undefined),
			spec: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			templateMajorVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			templateMinorVersion: new FormControl<string | null | undefined>(undefined),
			templateName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Detail input data for a linked repository branch. */
	export interface RepositoryBranchInput {

		/** Required */
		branch: string;

		/** Required */
		name: string;

		/** Required */
		provider: RepositoryProvider;
	}

	/** Detail input data for a linked repository branch. */
	export interface RepositoryBranchInputFormProperties {

		/** Required */
		branch: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		provider: FormControl<RepositoryProvider | null | undefined>,
	}
	export function CreateRepositoryBranchInputFormGroup() {
		return new FormGroup<RepositoryBranchInputFormProperties>({
			branch: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			provider: new FormControl<RepositoryProvider | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateEnvironmentAccountConnectionOutput {

		/** Required */
		environmentAccountConnection: EnvironmentAccountConnection;
	}
	export interface CreateEnvironmentAccountConnectionOutputFormProperties {
	}
	export function CreateCreateEnvironmentAccountConnectionOutputFormGroup() {
		return new FormGroup<CreateEnvironmentAccountConnectionOutputFormProperties>({
		});

	}

	export interface CreateEnvironmentAccountConnectionInput {
		clientToken?: string;
		codebuildRoleArn?: string;
		componentRoleArn?: string;

		/** Required */
		environmentName: string;

		/** Required */
		managementAccountId: string;
		roleArn?: string;
		tags?: Array<Tag>;
	}
	export interface CreateEnvironmentAccountConnectionInputFormProperties {
		clientToken: FormControl<string | null | undefined>,
		codebuildRoleArn: FormControl<string | null | undefined>,
		componentRoleArn: FormControl<string | null | undefined>,

		/** Required */
		environmentName: FormControl<string | null | undefined>,

		/** Required */
		managementAccountId: FormControl<string | null | undefined>,
		roleArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateEnvironmentAccountConnectionInputFormGroup() {
		return new FormGroup<CreateEnvironmentAccountConnectionInputFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined),
			codebuildRoleArn: new FormControl<string | null | undefined>(undefined),
			componentRoleArn: new FormControl<string | null | undefined>(undefined),
			environmentName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			managementAccountId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			roleArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateEnvironmentTemplateOutput {

		/** Required */
		environmentTemplate: EnvironmentTemplate;
	}
	export interface CreateEnvironmentTemplateOutputFormProperties {
	}
	export function CreateCreateEnvironmentTemplateOutputFormGroup() {
		return new FormGroup<CreateEnvironmentTemplateOutputFormProperties>({
		});

	}


	/** The environment template data. */
	export interface EnvironmentTemplate {

		/** Required */
		arn: string;

		/** Required */
		createdAt: Date;
		description?: string;
		displayName?: string;
		encryptionKey?: string;

		/** Required */
		lastModifiedAt: Date;

		/** Required */
		name: string;
		provisioning?: Provisioning;
		recommendedVersion?: string;
	}

	/** The environment template data. */
	export interface EnvironmentTemplateFormProperties {

		/** Required */
		arn: FormControl<string | null | undefined>,

		/** Required */
		createdAt: FormControl<Date | null | undefined>,
		description: FormControl<string | null | undefined>,
		displayName: FormControl<string | null | undefined>,
		encryptionKey: FormControl<string | null | undefined>,

		/** Required */
		lastModifiedAt: FormControl<Date | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
		provisioning: FormControl<Provisioning | null | undefined>,
		recommendedVersion: FormControl<string | null | undefined>,
	}
	export function CreateEnvironmentTemplateFormGroup() {
		return new FormGroup<EnvironmentTemplateFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			createdAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			encryptionKey: new FormControl<string | null | undefined>(undefined),
			lastModifiedAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			provisioning: new FormControl<Provisioning | null | undefined>(undefined),
			recommendedVersion: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateEnvironmentTemplateInput {
		description?: string;
		displayName?: string;
		encryptionKey?: string;

		/** Required */
		name: string;
		provisioning?: Provisioning;
		tags?: Array<Tag>;
	}
	export interface CreateEnvironmentTemplateInputFormProperties {
		description: FormControl<string | null | undefined>,
		displayName: FormControl<string | null | undefined>,
		encryptionKey: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
		provisioning: FormControl<Provisioning | null | undefined>,
	}
	export function CreateCreateEnvironmentTemplateInputFormGroup() {
		return new FormGroup<CreateEnvironmentTemplateInputFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			encryptionKey: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			provisioning: new FormControl<Provisioning | null | undefined>(undefined),
		});

	}

	export interface CreateEnvironmentTemplateVersionOutput {

		/** Required */
		environmentTemplateVersion: EnvironmentTemplateVersion;
	}
	export interface CreateEnvironmentTemplateVersionOutputFormProperties {
	}
	export function CreateCreateEnvironmentTemplateVersionOutputFormGroup() {
		return new FormGroup<CreateEnvironmentTemplateVersionOutputFormProperties>({
		});

	}


	/** The environment template version data. */
	export interface EnvironmentTemplateVersion {

		/** Required */
		arn: string;

		/** Required */
		createdAt: Date;
		description?: string;

		/** Required */
		lastModifiedAt: Date;

		/** Required */
		majorVersion: string;

		/** Required */
		minorVersion: string;
		recommendedMinorVersion?: string;
		schema?: string;

		/** Required */
		status: TemplateVersionStatus;
		statusMessage?: string;

		/** Required */
		templateName: string;
	}

	/** The environment template version data. */
	export interface EnvironmentTemplateVersionFormProperties {

		/** Required */
		arn: FormControl<string | null | undefined>,

		/** Required */
		createdAt: FormControl<Date | null | undefined>,
		description: FormControl<string | null | undefined>,

		/** Required */
		lastModifiedAt: FormControl<Date | null | undefined>,

		/** Required */
		majorVersion: FormControl<string | null | undefined>,

		/** Required */
		minorVersion: FormControl<string | null | undefined>,
		recommendedMinorVersion: FormControl<string | null | undefined>,
		schema: FormControl<string | null | undefined>,

		/** Required */
		status: FormControl<TemplateVersionStatus | null | undefined>,
		statusMessage: FormControl<string | null | undefined>,

		/** Required */
		templateName: FormControl<string | null | undefined>,
	}
	export function CreateEnvironmentTemplateVersionFormGroup() {
		return new FormGroup<EnvironmentTemplateVersionFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			createdAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
			lastModifiedAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			majorVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			minorVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			recommendedMinorVersion: new FormControl<string | null | undefined>(undefined),
			schema: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<TemplateVersionStatus | null | undefined>(undefined, [Validators.required]),
			statusMessage: new FormControl<string | null | undefined>(undefined),
			templateName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum TemplateVersionStatus { REGISTRATION_IN_PROGRESS = 0, REGISTRATION_FAILED = 1, DRAFT = 2, PUBLISHED = 3 }

	export interface CreateEnvironmentTemplateVersionInput {
		clientToken?: string;
		description?: string;
		majorVersion?: string;

		/** Required */
		source: TemplateVersionSourceInput;
		tags?: Array<Tag>;

		/** Required */
		templateName: string;
	}
	export interface CreateEnvironmentTemplateVersionInputFormProperties {
		clientToken: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		majorVersion: FormControl<string | null | undefined>,

		/** Required */
		templateName: FormControl<string | null | undefined>,
	}
	export function CreateCreateEnvironmentTemplateVersionInputFormGroup() {
		return new FormGroup<CreateEnvironmentTemplateVersionInputFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			majorVersion: new FormControl<string | null | undefined>(undefined),
			templateName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Template version source data. */
	export interface TemplateVersionSourceInput {
		s3?: S3ObjectSource;
	}

	/** Template version source data. */
	export interface TemplateVersionSourceInputFormProperties {
	}
	export function CreateTemplateVersionSourceInputFormGroup() {
		return new FormGroup<TemplateVersionSourceInputFormProperties>({
		});

	}


	/** Template bundle S3 bucket data. */
	export interface S3ObjectSource {

		/** Required */
		bucket: string;

		/** Required */
		key: string;
	}

	/** Template bundle S3 bucket data. */
	export interface S3ObjectSourceFormProperties {

		/** Required */
		bucket: FormControl<string | null | undefined>,

		/** Required */
		key: FormControl<string | null | undefined>,
	}
	export function CreateS3ObjectSourceFormGroup() {
		return new FormGroup<S3ObjectSourceFormProperties>({
			bucket: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateRepositoryOutput {

		/** Required */
		repository: Repository;
	}
	export interface CreateRepositoryOutputFormProperties {
	}
	export function CreateCreateRepositoryOutputFormGroup() {
		return new FormGroup<CreateRepositoryOutputFormProperties>({
		});

	}


	/** Detailed data of a linked repository—a repository that has been registered with Proton. */
	export interface Repository {

		/** Required */
		arn: string;

		/** Required */
		connectionArn: string;
		encryptionKey?: string;

		/** Required */
		name: string;

		/** Required */
		provider: RepositoryProvider;
	}

	/** Detailed data of a linked repository—a repository that has been registered with Proton. */
	export interface RepositoryFormProperties {

		/** Required */
		arn: FormControl<string | null | undefined>,

		/** Required */
		connectionArn: FormControl<string | null | undefined>,
		encryptionKey: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		provider: FormControl<RepositoryProvider | null | undefined>,
	}
	export function CreateRepositoryFormGroup() {
		return new FormGroup<RepositoryFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			connectionArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			encryptionKey: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			provider: new FormControl<RepositoryProvider | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateRepositoryInput {

		/** Required */
		connectionArn: string;
		encryptionKey?: string;

		/** Required */
		name: string;

		/** Required */
		provider: RepositoryProvider;
		tags?: Array<Tag>;
	}
	export interface CreateRepositoryInputFormProperties {

		/** Required */
		connectionArn: FormControl<string | null | undefined>,
		encryptionKey: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		provider: FormControl<RepositoryProvider | null | undefined>,
	}
	export function CreateCreateRepositoryInputFormGroup() {
		return new FormGroup<CreateRepositoryInputFormProperties>({
			connectionArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			encryptionKey: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			provider: new FormControl<RepositoryProvider | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateServiceOutput {

		/** Required */
		service: Service;
	}
	export interface CreateServiceOutputFormProperties {
	}
	export function CreateCreateServiceOutputFormGroup() {
		return new FormGroup<CreateServiceOutputFormProperties>({
		});

	}


	/** Detailed data of an Proton service resource. */
	export interface Service {

		/** Required */
		arn: string;
		branchName?: string;

		/** Required */
		createdAt: Date;
		description?: string;

		/** Required */
		lastModifiedAt: Date;

		/** Required */
		name: string;
		pipeline?: ServicePipeline;
		repositoryConnectionArn?: string;
		repositoryId?: string;

		/** Required */
		spec: string;

		/** Required */
		status: ServiceStatus;
		statusMessage?: string;

		/** Required */
		templateName: string;
	}

	/** Detailed data of an Proton service resource. */
	export interface ServiceFormProperties {

		/** Required */
		arn: FormControl<string | null | undefined>,
		branchName: FormControl<string | null | undefined>,

		/** Required */
		createdAt: FormControl<Date | null | undefined>,
		description: FormControl<string | null | undefined>,

		/** Required */
		lastModifiedAt: FormControl<Date | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
		repositoryConnectionArn: FormControl<string | null | undefined>,
		repositoryId: FormControl<string | null | undefined>,

		/** Required */
		spec: FormControl<string | null | undefined>,

		/** Required */
		status: FormControl<ServiceStatus | null | undefined>,
		statusMessage: FormControl<string | null | undefined>,

		/** Required */
		templateName: FormControl<string | null | undefined>,
	}
	export function CreateServiceFormGroup() {
		return new FormGroup<ServiceFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			branchName: new FormControl<string | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
			lastModifiedAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			repositoryConnectionArn: new FormControl<string | null | undefined>(undefined),
			repositoryId: new FormControl<string | null | undefined>(undefined),
			spec: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<ServiceStatus | null | undefined>(undefined, [Validators.required]),
			statusMessage: new FormControl<string | null | undefined>(undefined),
			templateName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ServiceStatus { CREATE_IN_PROGRESS = 0, CREATE_FAILED_CLEANUP_IN_PROGRESS = 1, CREATE_FAILED_CLEANUP_COMPLETE = 2, CREATE_FAILED_CLEANUP_FAILED = 3, CREATE_FAILED = 4, ACTIVE = 5, DELETE_IN_PROGRESS = 6, DELETE_FAILED = 7, UPDATE_IN_PROGRESS = 8, UPDATE_FAILED_CLEANUP_IN_PROGRESS = 9, UPDATE_FAILED_CLEANUP_COMPLETE = 10, UPDATE_FAILED_CLEANUP_FAILED = 11, UPDATE_FAILED = 12, UPDATE_COMPLETE_CLEANUP_FAILED = 13 }

	export interface CreateServiceInput {
		branchName?: string;
		description?: string;

		/** Required */
		name: string;
		repositoryConnectionArn?: string;
		repositoryId?: string;

		/** Required */
		spec: string;
		tags?: Array<Tag>;

		/** Required */
		templateMajorVersion: string;
		templateMinorVersion?: string;

		/** Required */
		templateName: string;
	}
	export interface CreateServiceInputFormProperties {
		branchName: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
		repositoryConnectionArn: FormControl<string | null | undefined>,
		repositoryId: FormControl<string | null | undefined>,

		/** Required */
		spec: FormControl<string | null | undefined>,

		/** Required */
		templateMajorVersion: FormControl<string | null | undefined>,
		templateMinorVersion: FormControl<string | null | undefined>,

		/** Required */
		templateName: FormControl<string | null | undefined>,
	}
	export function CreateCreateServiceInputFormGroup() {
		return new FormGroup<CreateServiceInputFormProperties>({
			branchName: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			repositoryConnectionArn: new FormControl<string | null | undefined>(undefined),
			repositoryId: new FormControl<string | null | undefined>(undefined),
			spec: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			templateMajorVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			templateMinorVersion: new FormControl<string | null | undefined>(undefined),
			templateName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateServiceInstanceOutput {

		/** Required */
		serviceInstance: ServiceInstance;
	}
	export interface CreateServiceInstanceOutputFormProperties {
	}
	export function CreateCreateServiceInstanceOutputFormGroup() {
		return new FormGroup<CreateServiceInstanceOutputFormProperties>({
		});

	}

	export interface CreateServiceInstanceInput {
		clientToken?: string;

		/** Required */
		name: string;

		/** Required */
		serviceName: string;

		/** Required */
		spec: string;
		tags?: Array<Tag>;
		templateMajorVersion?: string;
		templateMinorVersion?: string;
	}
	export interface CreateServiceInstanceInputFormProperties {
		clientToken: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		serviceName: FormControl<string | null | undefined>,

		/** Required */
		spec: FormControl<string | null | undefined>,
		templateMajorVersion: FormControl<string | null | undefined>,
		templateMinorVersion: FormControl<string | null | undefined>,
	}
	export function CreateCreateServiceInstanceInputFormGroup() {
		return new FormGroup<CreateServiceInstanceInputFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			serviceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			spec: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			templateMajorVersion: new FormControl<string | null | undefined>(undefined),
			templateMinorVersion: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateServiceSyncConfigOutput {
		serviceSyncConfig?: ServiceSyncConfig;
	}
	export interface CreateServiceSyncConfigOutputFormProperties {
	}
	export function CreateCreateServiceSyncConfigOutputFormGroup() {
		return new FormGroup<CreateServiceSyncConfigOutputFormProperties>({
		});

	}


	/** Detailed data of the service sync configuration. */
	export interface ServiceSyncConfig {

		/** Required */
		branch: string;

		/** Required */
		filePath: string;

		/** Required */
		repositoryName: string;

		/** Required */
		repositoryProvider: RepositoryProvider;

		/** Required */
		serviceName: string;
	}

	/** Detailed data of the service sync configuration. */
	export interface ServiceSyncConfigFormProperties {

		/** Required */
		branch: FormControl<string | null | undefined>,

		/** Required */
		filePath: FormControl<string | null | undefined>,

		/** Required */
		repositoryName: FormControl<string | null | undefined>,

		/** Required */
		repositoryProvider: FormControl<RepositoryProvider | null | undefined>,

		/** Required */
		serviceName: FormControl<string | null | undefined>,
	}
	export function CreateServiceSyncConfigFormGroup() {
		return new FormGroup<ServiceSyncConfigFormProperties>({
			branch: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			filePath: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			repositoryName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			repositoryProvider: new FormControl<RepositoryProvider | null | undefined>(undefined, [Validators.required]),
			serviceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateServiceSyncConfigInput {

		/** Required */
		branch: string;

		/** Required */
		filePath: string;

		/** Required */
		repositoryName: string;

		/** Required */
		repositoryProvider: RepositoryProvider;

		/** Required */
		serviceName: string;
	}
	export interface CreateServiceSyncConfigInputFormProperties {

		/** Required */
		branch: FormControl<string | null | undefined>,

		/** Required */
		filePath: FormControl<string | null | undefined>,

		/** Required */
		repositoryName: FormControl<string | null | undefined>,

		/** Required */
		repositoryProvider: FormControl<RepositoryProvider | null | undefined>,

		/** Required */
		serviceName: FormControl<string | null | undefined>,
	}
	export function CreateCreateServiceSyncConfigInputFormGroup() {
		return new FormGroup<CreateServiceSyncConfigInputFormProperties>({
			branch: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			filePath: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			repositoryName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			repositoryProvider: new FormControl<RepositoryProvider | null | undefined>(undefined, [Validators.required]),
			serviceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateServiceTemplateOutput {

		/** Required */
		serviceTemplate: ServiceTemplate;
	}
	export interface CreateServiceTemplateOutputFormProperties {
	}
	export function CreateCreateServiceTemplateOutputFormGroup() {
		return new FormGroup<CreateServiceTemplateOutputFormProperties>({
		});

	}


	/** Detailed data of an Proton service template resource. */
	export interface ServiceTemplate {

		/** Required */
		arn: string;

		/** Required */
		createdAt: Date;
		description?: string;
		displayName?: string;
		encryptionKey?: string;

		/** Required */
		lastModifiedAt: Date;

		/** Required */
		name: string;
		pipelineProvisioning?: Provisioning;
		recommendedVersion?: string;
	}

	/** Detailed data of an Proton service template resource. */
	export interface ServiceTemplateFormProperties {

		/** Required */
		arn: FormControl<string | null | undefined>,

		/** Required */
		createdAt: FormControl<Date | null | undefined>,
		description: FormControl<string | null | undefined>,
		displayName: FormControl<string | null | undefined>,
		encryptionKey: FormControl<string | null | undefined>,

		/** Required */
		lastModifiedAt: FormControl<Date | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
		pipelineProvisioning: FormControl<Provisioning | null | undefined>,
		recommendedVersion: FormControl<string | null | undefined>,
	}
	export function CreateServiceTemplateFormGroup() {
		return new FormGroup<ServiceTemplateFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			createdAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			encryptionKey: new FormControl<string | null | undefined>(undefined),
			lastModifiedAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			pipelineProvisioning: new FormControl<Provisioning | null | undefined>(undefined),
			recommendedVersion: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateServiceTemplateInput {
		description?: string;
		displayName?: string;
		encryptionKey?: string;

		/** Required */
		name: string;
		pipelineProvisioning?: Provisioning;
		tags?: Array<Tag>;
	}
	export interface CreateServiceTemplateInputFormProperties {
		description: FormControl<string | null | undefined>,
		displayName: FormControl<string | null | undefined>,
		encryptionKey: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
		pipelineProvisioning: FormControl<Provisioning | null | undefined>,
	}
	export function CreateCreateServiceTemplateInputFormGroup() {
		return new FormGroup<CreateServiceTemplateInputFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			encryptionKey: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			pipelineProvisioning: new FormControl<Provisioning | null | undefined>(undefined),
		});

	}

	export interface CreateServiceTemplateVersionOutput {

		/** Required */
		serviceTemplateVersion: ServiceTemplateVersion;
	}
	export interface CreateServiceTemplateVersionOutputFormProperties {
	}
	export function CreateCreateServiceTemplateVersionOutputFormGroup() {
		return new FormGroup<CreateServiceTemplateVersionOutputFormProperties>({
		});

	}


	/** Detailed data of an Proton service template version resource. */
	export interface ServiceTemplateVersion {

		/** Required */
		arn: string;

		/** Required */
		compatibleEnvironmentTemplates: Array<CompatibleEnvironmentTemplate>;

		/** Required */
		createdAt: Date;
		description?: string;

		/** Required */
		lastModifiedAt: Date;

		/** Required */
		majorVersion: string;

		/** Required */
		minorVersion: string;
		recommendedMinorVersion?: string;
		schema?: string;

		/** Required */
		status: TemplateVersionStatus;
		statusMessage?: string;
		supportedComponentSources?: Array<ServiceTemplateSupportedComponentSourceType>;

		/** Required */
		templateName: string;
	}

	/** Detailed data of an Proton service template version resource. */
	export interface ServiceTemplateVersionFormProperties {

		/** Required */
		arn: FormControl<string | null | undefined>,

		/** Required */
		createdAt: FormControl<Date | null | undefined>,
		description: FormControl<string | null | undefined>,

		/** Required */
		lastModifiedAt: FormControl<Date | null | undefined>,

		/** Required */
		majorVersion: FormControl<string | null | undefined>,

		/** Required */
		minorVersion: FormControl<string | null | undefined>,
		recommendedMinorVersion: FormControl<string | null | undefined>,
		schema: FormControl<string | null | undefined>,

		/** Required */
		status: FormControl<TemplateVersionStatus | null | undefined>,
		statusMessage: FormControl<string | null | undefined>,

		/** Required */
		templateName: FormControl<string | null | undefined>,
	}
	export function CreateServiceTemplateVersionFormGroup() {
		return new FormGroup<ServiceTemplateVersionFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			createdAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
			lastModifiedAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			majorVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			minorVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			recommendedMinorVersion: new FormControl<string | null | undefined>(undefined),
			schema: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<TemplateVersionStatus | null | undefined>(undefined, [Validators.required]),
			statusMessage: new FormControl<string | null | undefined>(undefined),
			templateName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Compatible environment template data. */
	export interface CompatibleEnvironmentTemplate {

		/** Required */
		majorVersion: string;

		/** Required */
		templateName: string;
	}

	/** Compatible environment template data. */
	export interface CompatibleEnvironmentTemplateFormProperties {

		/** Required */
		majorVersion: FormControl<string | null | undefined>,

		/** Required */
		templateName: FormControl<string | null | undefined>,
	}
	export function CreateCompatibleEnvironmentTemplateFormGroup() {
		return new FormGroup<CompatibleEnvironmentTemplateFormProperties>({
			majorVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			templateName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ServiceTemplateSupportedComponentSourceType { DIRECTLY_DEFINED = 0 }

	export interface CreateServiceTemplateVersionInput {
		clientToken?: string;

		/** Required */
		compatibleEnvironmentTemplates: Array<CompatibleEnvironmentTemplateInput>;
		description?: string;
		majorVersion?: string;

		/** Required */
		source: TemplateVersionSourceInput;
		supportedComponentSources?: Array<ServiceTemplateSupportedComponentSourceType>;
		tags?: Array<Tag>;

		/** Required */
		templateName: string;
	}
	export interface CreateServiceTemplateVersionInputFormProperties {
		clientToken: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		majorVersion: FormControl<string | null | undefined>,

		/** Required */
		templateName: FormControl<string | null | undefined>,
	}
	export function CreateCreateServiceTemplateVersionInputFormGroup() {
		return new FormGroup<CreateServiceTemplateVersionInputFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			majorVersion: new FormControl<string | null | undefined>(undefined),
			templateName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Compatible environment template data. */
	export interface CompatibleEnvironmentTemplateInput {

		/** Required */
		majorVersion: string;

		/** Required */
		templateName: string;
	}

	/** Compatible environment template data. */
	export interface CompatibleEnvironmentTemplateInputFormProperties {

		/** Required */
		majorVersion: FormControl<string | null | undefined>,

		/** Required */
		templateName: FormControl<string | null | undefined>,
	}
	export function CreateCompatibleEnvironmentTemplateInputFormGroup() {
		return new FormGroup<CompatibleEnvironmentTemplateInputFormProperties>({
			majorVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			templateName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateTemplateSyncConfigOutput {
		templateSyncConfig?: TemplateSyncConfig;
	}
	export interface CreateTemplateSyncConfigOutputFormProperties {
	}
	export function CreateCreateTemplateSyncConfigOutputFormGroup() {
		return new FormGroup<CreateTemplateSyncConfigOutputFormProperties>({
		});

	}


	/** The detail data for a template sync configuration. */
	export interface TemplateSyncConfig {

		/** Required */
		branch: string;

		/** Required */
		repositoryName: string;

		/** Required */
		repositoryProvider: RepositoryProvider;
		subdirectory?: string;

		/** Required */
		templateName: string;

		/** Required */
		templateType: TemplateType;
	}

	/** The detail data for a template sync configuration. */
	export interface TemplateSyncConfigFormProperties {

		/** Required */
		branch: FormControl<string | null | undefined>,

		/** Required */
		repositoryName: FormControl<string | null | undefined>,

		/** Required */
		repositoryProvider: FormControl<RepositoryProvider | null | undefined>,
		subdirectory: FormControl<string | null | undefined>,

		/** Required */
		templateName: FormControl<string | null | undefined>,

		/** Required */
		templateType: FormControl<TemplateType | null | undefined>,
	}
	export function CreateTemplateSyncConfigFormGroup() {
		return new FormGroup<TemplateSyncConfigFormProperties>({
			branch: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			repositoryName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			repositoryProvider: new FormControl<RepositoryProvider | null | undefined>(undefined, [Validators.required]),
			subdirectory: new FormControl<string | null | undefined>(undefined),
			templateName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			templateType: new FormControl<TemplateType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum TemplateType { ENVIRONMENT = 0, SERVICE = 1 }

	export interface CreateTemplateSyncConfigInput {

		/** Required */
		branch: string;

		/** Required */
		repositoryName: string;

		/** Required */
		repositoryProvider: RepositoryProvider;
		subdirectory?: string;

		/** Required */
		templateName: string;

		/** Required */
		templateType: TemplateType;
	}
	export interface CreateTemplateSyncConfigInputFormProperties {

		/** Required */
		branch: FormControl<string | null | undefined>,

		/** Required */
		repositoryName: FormControl<string | null | undefined>,

		/** Required */
		repositoryProvider: FormControl<RepositoryProvider | null | undefined>,
		subdirectory: FormControl<string | null | undefined>,

		/** Required */
		templateName: FormControl<string | null | undefined>,

		/** Required */
		templateType: FormControl<TemplateType | null | undefined>,
	}
	export function CreateCreateTemplateSyncConfigInputFormGroup() {
		return new FormGroup<CreateTemplateSyncConfigInputFormProperties>({
			branch: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			repositoryName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			repositoryProvider: new FormControl<RepositoryProvider | null | undefined>(undefined, [Validators.required]),
			subdirectory: new FormControl<string | null | undefined>(undefined),
			templateName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			templateType: new FormControl<TemplateType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteComponentOutput {
		component?: Component;
	}
	export interface DeleteComponentOutputFormProperties {
	}
	export function CreateDeleteComponentOutputFormGroup() {
		return new FormGroup<DeleteComponentOutputFormProperties>({
		});

	}

	export interface DeleteComponentInput {

		/** Required */
		name: string;
	}
	export interface DeleteComponentInputFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,
	}
	export function CreateDeleteComponentInputFormGroup() {
		return new FormGroup<DeleteComponentInputFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteDeploymentOutput {
		deployment?: Deployment;
	}
	export interface DeleteDeploymentOutputFormProperties {
	}
	export function CreateDeleteDeploymentOutputFormGroup() {
		return new FormGroup<DeleteDeploymentOutputFormProperties>({
		});

	}


	/** The detailed information about a deployment. */
	export interface Deployment {

		/** Required */
		arn: string;
		completedAt?: Date;
		componentName?: string;

		/** Required */
		createdAt: Date;

		/** Required */
		deploymentStatus: DeploymentStatus;
		deploymentStatusMessage?: string;

		/** Required */
		environmentName: string;

		/** Required */
		id: string;
		initialState?: DeploymentState;
		lastAttemptedDeploymentId?: string;

		/** Required */
		lastModifiedAt: Date;
		lastSucceededDeploymentId?: string;
		serviceInstanceName?: string;
		serviceName?: string;

		/** Required */
		targetArn: string;

		/** Required */
		targetResourceCreatedAt: Date;

		/** Required */
		targetResourceType: DeploymentTargetResourceType;
		targetState?: DeploymentState;
	}

	/** The detailed information about a deployment. */
	export interface DeploymentFormProperties {

		/** Required */
		arn: FormControl<string | null | undefined>,
		completedAt: FormControl<Date | null | undefined>,
		componentName: FormControl<string | null | undefined>,

		/** Required */
		createdAt: FormControl<Date | null | undefined>,

		/** Required */
		deploymentStatus: FormControl<DeploymentStatus | null | undefined>,
		deploymentStatusMessage: FormControl<string | null | undefined>,

		/** Required */
		environmentName: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,
		lastAttemptedDeploymentId: FormControl<string | null | undefined>,

		/** Required */
		lastModifiedAt: FormControl<Date | null | undefined>,
		lastSucceededDeploymentId: FormControl<string | null | undefined>,
		serviceInstanceName: FormControl<string | null | undefined>,
		serviceName: FormControl<string | null | undefined>,

		/** Required */
		targetArn: FormControl<string | null | undefined>,

		/** Required */
		targetResourceCreatedAt: FormControl<Date | null | undefined>,

		/** Required */
		targetResourceType: FormControl<DeploymentTargetResourceType | null | undefined>,
	}
	export function CreateDeploymentFormGroup() {
		return new FormGroup<DeploymentFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			completedAt: new FormControl<Date | null | undefined>(undefined),
			componentName: new FormControl<string | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			deploymentStatus: new FormControl<DeploymentStatus | null | undefined>(undefined, [Validators.required]),
			deploymentStatusMessage: new FormControl<string | null | undefined>(undefined),
			environmentName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			lastAttemptedDeploymentId: new FormControl<string | null | undefined>(undefined),
			lastModifiedAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			lastSucceededDeploymentId: new FormControl<string | null | undefined>(undefined),
			serviceInstanceName: new FormControl<string | null | undefined>(undefined),
			serviceName: new FormControl<string | null | undefined>(undefined),
			targetArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			targetResourceCreatedAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			targetResourceType: new FormControl<DeploymentTargetResourceType | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The detailed data about the current state of the deployment. */
	export interface DeploymentState {
		component?: ComponentState;
		environment?: EnvironmentState;
		serviceInstance?: ServiceInstanceState;
		servicePipeline?: ServicePipelineState;
	}

	/** The detailed data about the current state of the deployment. */
	export interface DeploymentStateFormProperties {
	}
	export function CreateDeploymentStateFormGroup() {
		return new FormGroup<DeploymentStateFormProperties>({
		});

	}


	/** The detailed data about the current state of the component. */
	export interface ComponentState {
		serviceInstanceName?: string;
		serviceName?: string;
		serviceSpec?: string;
		templateFile?: string;
	}

	/** The detailed data about the current state of the component. */
	export interface ComponentStateFormProperties {
		serviceInstanceName: FormControl<string | null | undefined>,
		serviceName: FormControl<string | null | undefined>,
		serviceSpec: FormControl<string | null | undefined>,
		templateFile: FormControl<string | null | undefined>,
	}
	export function CreateComponentStateFormGroup() {
		return new FormGroup<ComponentStateFormProperties>({
			serviceInstanceName: new FormControl<string | null | undefined>(undefined),
			serviceName: new FormControl<string | null | undefined>(undefined),
			serviceSpec: new FormControl<string | null | undefined>(undefined),
			templateFile: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The detailed data about the current state of the environment. */
	export interface EnvironmentState {
		spec?: string;

		/** Required */
		templateMajorVersion: string;

		/** Required */
		templateMinorVersion: string;

		/** Required */
		templateName: string;
	}

	/** The detailed data about the current state of the environment. */
	export interface EnvironmentStateFormProperties {
		spec: FormControl<string | null | undefined>,

		/** Required */
		templateMajorVersion: FormControl<string | null | undefined>,

		/** Required */
		templateMinorVersion: FormControl<string | null | undefined>,

		/** Required */
		templateName: FormControl<string | null | undefined>,
	}
	export function CreateEnvironmentStateFormGroup() {
		return new FormGroup<EnvironmentStateFormProperties>({
			spec: new FormControl<string | null | undefined>(undefined),
			templateMajorVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			templateMinorVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			templateName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The detailed data about the current state of this service instance. */
	export interface ServiceInstanceState {
		lastSuccessfulComponentDeploymentIds?: Array<string>;
		lastSuccessfulEnvironmentDeploymentId?: string;
		lastSuccessfulServicePipelineDeploymentId?: string;

		/** Required */
		spec: string;

		/** Required */
		templateMajorVersion: string;

		/** Required */
		templateMinorVersion: string;

		/** Required */
		templateName: string;
	}

	/** The detailed data about the current state of this service instance. */
	export interface ServiceInstanceStateFormProperties {
		lastSuccessfulEnvironmentDeploymentId: FormControl<string | null | undefined>,
		lastSuccessfulServicePipelineDeploymentId: FormControl<string | null | undefined>,

		/** Required */
		spec: FormControl<string | null | undefined>,

		/** Required */
		templateMajorVersion: FormControl<string | null | undefined>,

		/** Required */
		templateMinorVersion: FormControl<string | null | undefined>,

		/** Required */
		templateName: FormControl<string | null | undefined>,
	}
	export function CreateServiceInstanceStateFormGroup() {
		return new FormGroup<ServiceInstanceStateFormProperties>({
			lastSuccessfulEnvironmentDeploymentId: new FormControl<string | null | undefined>(undefined),
			lastSuccessfulServicePipelineDeploymentId: new FormControl<string | null | undefined>(undefined),
			spec: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			templateMajorVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			templateMinorVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			templateName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The detailed data about the current state of the service pipeline. */
	export interface ServicePipelineState {
		spec?: string;

		/** Required */
		templateMajorVersion: string;

		/** Required */
		templateMinorVersion: string;

		/** Required */
		templateName: string;
	}

	/** The detailed data about the current state of the service pipeline. */
	export interface ServicePipelineStateFormProperties {
		spec: FormControl<string | null | undefined>,

		/** Required */
		templateMajorVersion: FormControl<string | null | undefined>,

		/** Required */
		templateMinorVersion: FormControl<string | null | undefined>,

		/** Required */
		templateName: FormControl<string | null | undefined>,
	}
	export function CreateServicePipelineStateFormGroup() {
		return new FormGroup<ServicePipelineStateFormProperties>({
			spec: new FormControl<string | null | undefined>(undefined),
			templateMajorVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			templateMinorVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			templateName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum DeploymentTargetResourceType { ENVIRONMENT = 0, SERVICE_PIPELINE = 1, SERVICE_INSTANCE = 2, COMPONENT = 3 }

	export interface DeleteDeploymentInput {

		/** Required */
		id: string;
	}
	export interface DeleteDeploymentInputFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,
	}
	export function CreateDeleteDeploymentInputFormGroup() {
		return new FormGroup<DeleteDeploymentInputFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteEnvironmentOutput {
		environment?: Environment;
	}
	export interface DeleteEnvironmentOutputFormProperties {
	}
	export function CreateDeleteEnvironmentOutputFormGroup() {
		return new FormGroup<DeleteEnvironmentOutputFormProperties>({
		});

	}

	export interface DeleteEnvironmentInput {

		/** Required */
		name: string;
	}
	export interface DeleteEnvironmentInputFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,
	}
	export function CreateDeleteEnvironmentInputFormGroup() {
		return new FormGroup<DeleteEnvironmentInputFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteEnvironmentAccountConnectionOutput {
		environmentAccountConnection?: EnvironmentAccountConnection;
	}
	export interface DeleteEnvironmentAccountConnectionOutputFormProperties {
	}
	export function CreateDeleteEnvironmentAccountConnectionOutputFormGroup() {
		return new FormGroup<DeleteEnvironmentAccountConnectionOutputFormProperties>({
		});

	}

	export interface DeleteEnvironmentAccountConnectionInput {

		/** Required */
		id: string;
	}
	export interface DeleteEnvironmentAccountConnectionInputFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,
	}
	export function CreateDeleteEnvironmentAccountConnectionInputFormGroup() {
		return new FormGroup<DeleteEnvironmentAccountConnectionInputFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteEnvironmentTemplateOutput {
		environmentTemplate?: EnvironmentTemplate;
	}
	export interface DeleteEnvironmentTemplateOutputFormProperties {
	}
	export function CreateDeleteEnvironmentTemplateOutputFormGroup() {
		return new FormGroup<DeleteEnvironmentTemplateOutputFormProperties>({
		});

	}

	export interface DeleteEnvironmentTemplateInput {

		/** Required */
		name: string;
	}
	export interface DeleteEnvironmentTemplateInputFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,
	}
	export function CreateDeleteEnvironmentTemplateInputFormGroup() {
		return new FormGroup<DeleteEnvironmentTemplateInputFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteEnvironmentTemplateVersionOutput {
		environmentTemplateVersion?: EnvironmentTemplateVersion;
	}
	export interface DeleteEnvironmentTemplateVersionOutputFormProperties {
	}
	export function CreateDeleteEnvironmentTemplateVersionOutputFormGroup() {
		return new FormGroup<DeleteEnvironmentTemplateVersionOutputFormProperties>({
		});

	}

	export interface DeleteEnvironmentTemplateVersionInput {

		/** Required */
		majorVersion: string;

		/** Required */
		minorVersion: string;

		/** Required */
		templateName: string;
	}
	export interface DeleteEnvironmentTemplateVersionInputFormProperties {

		/** Required */
		majorVersion: FormControl<string | null | undefined>,

		/** Required */
		minorVersion: FormControl<string | null | undefined>,

		/** Required */
		templateName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteEnvironmentTemplateVersionInputFormGroup() {
		return new FormGroup<DeleteEnvironmentTemplateVersionInputFormProperties>({
			majorVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			minorVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			templateName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteRepositoryOutput {
		repository?: Repository;
	}
	export interface DeleteRepositoryOutputFormProperties {
	}
	export function CreateDeleteRepositoryOutputFormGroup() {
		return new FormGroup<DeleteRepositoryOutputFormProperties>({
		});

	}

	export interface DeleteRepositoryInput {

		/** Required */
		name: string;

		/** Required */
		provider: RepositoryProvider;
	}
	export interface DeleteRepositoryInputFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		provider: FormControl<RepositoryProvider | null | undefined>,
	}
	export function CreateDeleteRepositoryInputFormGroup() {
		return new FormGroup<DeleteRepositoryInputFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			provider: new FormControl<RepositoryProvider | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteServiceOutput {
		service?: Service;
	}
	export interface DeleteServiceOutputFormProperties {
	}
	export function CreateDeleteServiceOutputFormGroup() {
		return new FormGroup<DeleteServiceOutputFormProperties>({
		});

	}

	export interface DeleteServiceInput {

		/** Required */
		name: string;
	}
	export interface DeleteServiceInputFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,
	}
	export function CreateDeleteServiceInputFormGroup() {
		return new FormGroup<DeleteServiceInputFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteServiceSyncConfigOutput {
		serviceSyncConfig?: ServiceSyncConfig;
	}
	export interface DeleteServiceSyncConfigOutputFormProperties {
	}
	export function CreateDeleteServiceSyncConfigOutputFormGroup() {
		return new FormGroup<DeleteServiceSyncConfigOutputFormProperties>({
		});

	}

	export interface DeleteServiceSyncConfigInput {

		/** Required */
		serviceName: string;
	}
	export interface DeleteServiceSyncConfigInputFormProperties {

		/** Required */
		serviceName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteServiceSyncConfigInputFormGroup() {
		return new FormGroup<DeleteServiceSyncConfigInputFormProperties>({
			serviceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteServiceTemplateOutput {
		serviceTemplate?: ServiceTemplate;
	}
	export interface DeleteServiceTemplateOutputFormProperties {
	}
	export function CreateDeleteServiceTemplateOutputFormGroup() {
		return new FormGroup<DeleteServiceTemplateOutputFormProperties>({
		});

	}

	export interface DeleteServiceTemplateInput {

		/** Required */
		name: string;
	}
	export interface DeleteServiceTemplateInputFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,
	}
	export function CreateDeleteServiceTemplateInputFormGroup() {
		return new FormGroup<DeleteServiceTemplateInputFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteServiceTemplateVersionOutput {
		serviceTemplateVersion?: ServiceTemplateVersion;
	}
	export interface DeleteServiceTemplateVersionOutputFormProperties {
	}
	export function CreateDeleteServiceTemplateVersionOutputFormGroup() {
		return new FormGroup<DeleteServiceTemplateVersionOutputFormProperties>({
		});

	}

	export interface DeleteServiceTemplateVersionInput {

		/** Required */
		majorVersion: string;

		/** Required */
		minorVersion: string;

		/** Required */
		templateName: string;
	}
	export interface DeleteServiceTemplateVersionInputFormProperties {

		/** Required */
		majorVersion: FormControl<string | null | undefined>,

		/** Required */
		minorVersion: FormControl<string | null | undefined>,

		/** Required */
		templateName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteServiceTemplateVersionInputFormGroup() {
		return new FormGroup<DeleteServiceTemplateVersionInputFormProperties>({
			majorVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			minorVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			templateName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteTemplateSyncConfigOutput {
		templateSyncConfig?: TemplateSyncConfig;
	}
	export interface DeleteTemplateSyncConfigOutputFormProperties {
	}
	export function CreateDeleteTemplateSyncConfigOutputFormGroup() {
		return new FormGroup<DeleteTemplateSyncConfigOutputFormProperties>({
		});

	}

	export interface DeleteTemplateSyncConfigInput {

		/** Required */
		templateName: string;

		/** Required */
		templateType: TemplateType;
	}
	export interface DeleteTemplateSyncConfigInputFormProperties {

		/** Required */
		templateName: FormControl<string | null | undefined>,

		/** Required */
		templateType: FormControl<TemplateType | null | undefined>,
	}
	export function CreateDeleteTemplateSyncConfigInputFormGroup() {
		return new FormGroup<DeleteTemplateSyncConfigInputFormProperties>({
			templateName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			templateType: new FormControl<TemplateType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetAccountSettingsOutput {
		accountSettings?: AccountSettings;
	}
	export interface GetAccountSettingsOutputFormProperties {
	}
	export function CreateGetAccountSettingsOutputFormGroup() {
		return new FormGroup<GetAccountSettingsOutputFormProperties>({
		});

	}


	/** Proton settings that are used for multiple services in the Amazon Web Services account. */
	export interface AccountSettings {
		pipelineCodebuildRoleArn?: string;
		pipelineProvisioningRepository?: RepositoryBranch;
		pipelineServiceRoleArn?: string;
	}

	/** Proton settings that are used for multiple services in the Amazon Web Services account. */
	export interface AccountSettingsFormProperties {
		pipelineCodebuildRoleArn: FormControl<string | null | undefined>,
		pipelineServiceRoleArn: FormControl<string | null | undefined>,
	}
	export function CreateAccountSettingsFormGroup() {
		return new FormGroup<AccountSettingsFormProperties>({
			pipelineCodebuildRoleArn: new FormControl<string | null | undefined>(undefined),
			pipelineServiceRoleArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetAccountSettingsInput {
	}
	export interface GetAccountSettingsInputFormProperties {
	}
	export function CreateGetAccountSettingsInputFormGroup() {
		return new FormGroup<GetAccountSettingsInputFormProperties>({
		});

	}

	export interface GetComponentOutput {
		component?: Component;
	}
	export interface GetComponentOutputFormProperties {
	}
	export function CreateGetComponentOutputFormGroup() {
		return new FormGroup<GetComponentOutputFormProperties>({
		});

	}

	export interface GetComponentInput {

		/** Required */
		name: string;
	}
	export interface GetComponentInputFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGetComponentInputFormGroup() {
		return new FormGroup<GetComponentInputFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetDeploymentOutput {
		deployment?: Deployment;
	}
	export interface GetDeploymentOutputFormProperties {
	}
	export function CreateGetDeploymentOutputFormGroup() {
		return new FormGroup<GetDeploymentOutputFormProperties>({
		});

	}

	export interface GetDeploymentInput {
		componentName?: string;
		environmentName?: string;

		/** Required */
		id: string;
		serviceInstanceName?: string;
		serviceName?: string;
	}
	export interface GetDeploymentInputFormProperties {
		componentName: FormControl<string | null | undefined>,
		environmentName: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,
		serviceInstanceName: FormControl<string | null | undefined>,
		serviceName: FormControl<string | null | undefined>,
	}
	export function CreateGetDeploymentInputFormGroup() {
		return new FormGroup<GetDeploymentInputFormProperties>({
			componentName: new FormControl<string | null | undefined>(undefined),
			environmentName: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			serviceInstanceName: new FormControl<string | null | undefined>(undefined),
			serviceName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetEnvironmentOutput {

		/** Required */
		environment: Environment;
	}
	export interface GetEnvironmentOutputFormProperties {
	}
	export function CreateGetEnvironmentOutputFormGroup() {
		return new FormGroup<GetEnvironmentOutputFormProperties>({
		});

	}

	export interface GetEnvironmentInput {

		/** Required */
		name: string;
	}
	export interface GetEnvironmentInputFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGetEnvironmentInputFormGroup() {
		return new FormGroup<GetEnvironmentInputFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetEnvironmentAccountConnectionOutput {

		/** Required */
		environmentAccountConnection: EnvironmentAccountConnection;
	}
	export interface GetEnvironmentAccountConnectionOutputFormProperties {
	}
	export function CreateGetEnvironmentAccountConnectionOutputFormGroup() {
		return new FormGroup<GetEnvironmentAccountConnectionOutputFormProperties>({
		});

	}

	export interface GetEnvironmentAccountConnectionInput {

		/** Required */
		id: string;
	}
	export interface GetEnvironmentAccountConnectionInputFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,
	}
	export function CreateGetEnvironmentAccountConnectionInputFormGroup() {
		return new FormGroup<GetEnvironmentAccountConnectionInputFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetEnvironmentTemplateOutput {

		/** Required */
		environmentTemplate: EnvironmentTemplate;
	}
	export interface GetEnvironmentTemplateOutputFormProperties {
	}
	export function CreateGetEnvironmentTemplateOutputFormGroup() {
		return new FormGroup<GetEnvironmentTemplateOutputFormProperties>({
		});

	}

	export interface GetEnvironmentTemplateInput {

		/** Required */
		name: string;
	}
	export interface GetEnvironmentTemplateInputFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGetEnvironmentTemplateInputFormGroup() {
		return new FormGroup<GetEnvironmentTemplateInputFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetEnvironmentTemplateVersionOutput {

		/** Required */
		environmentTemplateVersion: EnvironmentTemplateVersion;
	}
	export interface GetEnvironmentTemplateVersionOutputFormProperties {
	}
	export function CreateGetEnvironmentTemplateVersionOutputFormGroup() {
		return new FormGroup<GetEnvironmentTemplateVersionOutputFormProperties>({
		});

	}

	export interface GetEnvironmentTemplateVersionInput {

		/** Required */
		majorVersion: string;

		/** Required */
		minorVersion: string;

		/** Required */
		templateName: string;
	}
	export interface GetEnvironmentTemplateVersionInputFormProperties {

		/** Required */
		majorVersion: FormControl<string | null | undefined>,

		/** Required */
		minorVersion: FormControl<string | null | undefined>,

		/** Required */
		templateName: FormControl<string | null | undefined>,
	}
	export function CreateGetEnvironmentTemplateVersionInputFormGroup() {
		return new FormGroup<GetEnvironmentTemplateVersionInputFormProperties>({
			majorVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			minorVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			templateName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetRepositoryOutput {

		/** Required */
		repository: Repository;
	}
	export interface GetRepositoryOutputFormProperties {
	}
	export function CreateGetRepositoryOutputFormGroup() {
		return new FormGroup<GetRepositoryOutputFormProperties>({
		});

	}

	export interface GetRepositoryInput {

		/** Required */
		name: string;

		/** Required */
		provider: RepositoryProvider;
	}
	export interface GetRepositoryInputFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		provider: FormControl<RepositoryProvider | null | undefined>,
	}
	export function CreateGetRepositoryInputFormGroup() {
		return new FormGroup<GetRepositoryInputFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			provider: new FormControl<RepositoryProvider | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetRepositorySyncStatusOutput {
		latestSync?: RepositorySyncAttempt;
	}
	export interface GetRepositorySyncStatusOutputFormProperties {
	}
	export function CreateGetRepositorySyncStatusOutputFormGroup() {
		return new FormGroup<GetRepositorySyncStatusOutputFormProperties>({
		});

	}


	/** Detail data for a repository sync attempt activated by a push to a repository. */
	export interface RepositorySyncAttempt {

		/** Required */
		events: Array<RepositorySyncEvent>;

		/** Required */
		startedAt: Date;

		/** Required */
		status: RepositorySyncStatus;
	}

	/** Detail data for a repository sync attempt activated by a push to a repository. */
	export interface RepositorySyncAttemptFormProperties {

		/** Required */
		startedAt: FormControl<Date | null | undefined>,

		/** Required */
		status: FormControl<RepositorySyncStatus | null | undefined>,
	}
	export function CreateRepositorySyncAttemptFormGroup() {
		return new FormGroup<RepositorySyncAttemptFormProperties>({
			startedAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<RepositorySyncStatus | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Repository sync event detail data for a sync attempt. */
	export interface RepositorySyncEvent {

		/** Required */
		event: string;
		externalId?: string;

		/** Required */
		time: Date;

		/** Required */
		type: string;
	}

	/** Repository sync event detail data for a sync attempt. */
	export interface RepositorySyncEventFormProperties {

		/** Required */
		event: FormControl<string | null | undefined>,
		externalId: FormControl<string | null | undefined>,

		/** Required */
		time: FormControl<Date | null | undefined>,

		/** Required */
		type: FormControl<string | null | undefined>,
	}
	export function CreateRepositorySyncEventFormGroup() {
		return new FormGroup<RepositorySyncEventFormProperties>({
			event: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			externalId: new FormControl<string | null | undefined>(undefined),
			time: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum RepositorySyncStatus { INITIATED = 0, IN_PROGRESS = 1, SUCCEEDED = 2, FAILED = 3, QUEUED = 4 }

	export interface GetRepositorySyncStatusInput {

		/** Required */
		branch: string;

		/** Required */
		repositoryName: string;

		/** Required */
		repositoryProvider: RepositoryProvider;

		/** Required */
		syncType: SyncType;
	}
	export interface GetRepositorySyncStatusInputFormProperties {

		/** Required */
		branch: FormControl<string | null | undefined>,

		/** Required */
		repositoryName: FormControl<string | null | undefined>,

		/** Required */
		repositoryProvider: FormControl<RepositoryProvider | null | undefined>,

		/** Required */
		syncType: FormControl<SyncType | null | undefined>,
	}
	export function CreateGetRepositorySyncStatusInputFormGroup() {
		return new FormGroup<GetRepositorySyncStatusInputFormProperties>({
			branch: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			repositoryName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			repositoryProvider: new FormControl<RepositoryProvider | null | undefined>(undefined, [Validators.required]),
			syncType: new FormControl<SyncType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum SyncType { TEMPLATE_SYNC = 0, SERVICE_SYNC = 1 }

	export interface GetResourcesSummaryOutput {

		/** Required */
		counts: CountsSummary;
	}
	export interface GetResourcesSummaryOutputFormProperties {
	}
	export function CreateGetResourcesSummaryOutputFormGroup() {
		return new FormGroup<GetResourcesSummaryOutputFormProperties>({
		});

	}


	/** Summary counts of each Proton resource type. */
	export interface CountsSummary {
		components?: ResourceCountsSummary;
		environmentTemplates?: ResourceCountsSummary;
		environments?: ResourceCountsSummary;
		pipelines?: ResourceCountsSummary;
		serviceInstances?: ResourceCountsSummary;
		serviceTemplates?: ResourceCountsSummary;
		services?: ResourceCountsSummary;
	}

	/** Summary counts of each Proton resource type. */
	export interface CountsSummaryFormProperties {
	}
	export function CreateCountsSummaryFormGroup() {
		return new FormGroup<CountsSummaryFormProperties>({
		});

	}


	/** Summary counts of each Proton resource types. */
	export interface ResourceCountsSummary {
		behindMajor?: number | null;
		behindMinor?: number | null;
		failed?: number | null;

		/** Required */
		total: number;
		upToDate?: number | null;
	}

	/** Summary counts of each Proton resource types. */
	export interface ResourceCountsSummaryFormProperties {
		behindMajor: FormControl<number | null | undefined>,
		behindMinor: FormControl<number | null | undefined>,
		failed: FormControl<number | null | undefined>,

		/** Required */
		total: FormControl<number | null | undefined>,
		upToDate: FormControl<number | null | undefined>,
	}
	export function CreateResourceCountsSummaryFormGroup() {
		return new FormGroup<ResourceCountsSummaryFormProperties>({
			behindMajor: new FormControl<number | null | undefined>(undefined),
			behindMinor: new FormControl<number | null | undefined>(undefined),
			failed: new FormControl<number | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			upToDate: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetResourcesSummaryInput {
	}
	export interface GetResourcesSummaryInputFormProperties {
	}
	export function CreateGetResourcesSummaryInputFormGroup() {
		return new FormGroup<GetResourcesSummaryInputFormProperties>({
		});

	}

	export interface GetServiceOutput {
		service?: Service;
	}
	export interface GetServiceOutputFormProperties {
	}
	export function CreateGetServiceOutputFormGroup() {
		return new FormGroup<GetServiceOutputFormProperties>({
		});

	}

	export interface GetServiceInput {

		/** Required */
		name: string;
	}
	export interface GetServiceInputFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGetServiceInputFormGroup() {
		return new FormGroup<GetServiceInputFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetServiceInstanceOutput {

		/** Required */
		serviceInstance: ServiceInstance;
	}
	export interface GetServiceInstanceOutputFormProperties {
	}
	export function CreateGetServiceInstanceOutputFormGroup() {
		return new FormGroup<GetServiceInstanceOutputFormProperties>({
		});

	}

	export interface GetServiceInstanceInput {

		/** Required */
		name: string;

		/** Required */
		serviceName: string;
	}
	export interface GetServiceInstanceInputFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		serviceName: FormControl<string | null | undefined>,
	}
	export function CreateGetServiceInstanceInputFormGroup() {
		return new FormGroup<GetServiceInstanceInputFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			serviceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetServiceInstanceSyncStatusOutput {
		desiredState?: Revision;
		latestSuccessfulSync?: ResourceSyncAttempt;
		latestSync?: ResourceSyncAttempt;
	}
	export interface GetServiceInstanceSyncStatusOutputFormProperties {
	}
	export function CreateGetServiceInstanceSyncStatusOutputFormGroup() {
		return new FormGroup<GetServiceInstanceSyncStatusOutputFormProperties>({
		});

	}


	/** Revision detail data for a commit and push that activates a sync attempt */
	export interface Revision {

		/** Required */
		branch: string;

		/** Required */
		directory: string;

		/** Required */
		repositoryName: string;

		/** Required */
		repositoryProvider: RepositoryProvider;

		/** Required */
		sha: string;
	}

	/** Revision detail data for a commit and push that activates a sync attempt */
	export interface RevisionFormProperties {

		/** Required */
		branch: FormControl<string | null | undefined>,

		/** Required */
		directory: FormControl<string | null | undefined>,

		/** Required */
		repositoryName: FormControl<string | null | undefined>,

		/** Required */
		repositoryProvider: FormControl<RepositoryProvider | null | undefined>,

		/** Required */
		sha: FormControl<string | null | undefined>,
	}
	export function CreateRevisionFormGroup() {
		return new FormGroup<RevisionFormProperties>({
			branch: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			directory: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			repositoryName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			repositoryProvider: new FormControl<RepositoryProvider | null | undefined>(undefined, [Validators.required]),
			sha: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Detail data for a resource sync attempt activated by a push to a repository. */
	export interface ResourceSyncAttempt {

		/** Required */
		events: Array<ResourceSyncEvent>;

		/** Required */
		initialRevision: Revision;

		/** Required */
		startedAt: Date;

		/** Required */
		status: ResourceSyncStatus;

		/** Required */
		target: string;

		/** Required */
		targetRevision: Revision;
	}

	/** Detail data for a resource sync attempt activated by a push to a repository. */
	export interface ResourceSyncAttemptFormProperties {

		/** Required */
		startedAt: FormControl<Date | null | undefined>,

		/** Required */
		status: FormControl<ResourceSyncStatus | null | undefined>,

		/** Required */
		target: FormControl<string | null | undefined>,
	}
	export function CreateResourceSyncAttemptFormGroup() {
		return new FormGroup<ResourceSyncAttemptFormProperties>({
			startedAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<ResourceSyncStatus | null | undefined>(undefined, [Validators.required]),
			target: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Detail data for a resource sync event. */
	export interface ResourceSyncEvent {

		/** Required */
		event: string;
		externalId?: string;

		/** Required */
		time: Date;

		/** Required */
		type: string;
	}

	/** Detail data for a resource sync event. */
	export interface ResourceSyncEventFormProperties {

		/** Required */
		event: FormControl<string | null | undefined>,
		externalId: FormControl<string | null | undefined>,

		/** Required */
		time: FormControl<Date | null | undefined>,

		/** Required */
		type: FormControl<string | null | undefined>,
	}
	export function CreateResourceSyncEventFormGroup() {
		return new FormGroup<ResourceSyncEventFormProperties>({
			event: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			externalId: new FormControl<string | null | undefined>(undefined),
			time: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ResourceSyncStatus { INITIATED = 0, IN_PROGRESS = 1, SUCCEEDED = 2, FAILED = 3 }

	export interface GetServiceInstanceSyncStatusInput {

		/** Required */
		serviceInstanceName: string;

		/** Required */
		serviceName: string;
	}
	export interface GetServiceInstanceSyncStatusInputFormProperties {

		/** Required */
		serviceInstanceName: FormControl<string | null | undefined>,

		/** Required */
		serviceName: FormControl<string | null | undefined>,
	}
	export function CreateGetServiceInstanceSyncStatusInputFormGroup() {
		return new FormGroup<GetServiceInstanceSyncStatusInputFormProperties>({
			serviceInstanceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			serviceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetServiceSyncBlockerSummaryOutput {
		serviceSyncBlockerSummary?: ServiceSyncBlockerSummary;
	}
	export interface GetServiceSyncBlockerSummaryOutputFormProperties {
	}
	export function CreateGetServiceSyncBlockerSummaryOutputFormGroup() {
		return new FormGroup<GetServiceSyncBlockerSummaryOutputFormProperties>({
		});

	}


	/** <p>If a service instance is manually updated, Proton wants to prevent accidentally overriding a manual change.</p> <p>A blocker is created because of the manual update or deletion of a service instance. The summary describes the blocker as being active or resolved.</p> */
	export interface ServiceSyncBlockerSummary {
		latestBlockers?: Array<SyncBlocker>;
		serviceInstanceName?: string;

		/** Required */
		serviceName: string;
	}

	/** <p>If a service instance is manually updated, Proton wants to prevent accidentally overriding a manual change.</p> <p>A blocker is created because of the manual update or deletion of a service instance. The summary describes the blocker as being active or resolved.</p> */
	export interface ServiceSyncBlockerSummaryFormProperties {
		serviceInstanceName: FormControl<string | null | undefined>,

		/** Required */
		serviceName: FormControl<string | null | undefined>,
	}
	export function CreateServiceSyncBlockerSummaryFormGroup() {
		return new FormGroup<ServiceSyncBlockerSummaryFormProperties>({
			serviceInstanceName: new FormControl<string | null | undefined>(undefined),
			serviceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Detailed data of the sync blocker. */
	export interface SyncBlocker {
		contexts?: Array<SyncBlockerContext>;

		/** Required */
		createdAt: Date;

		/** Required */
		createdReason: string;

		/** Required */
		id: string;
		resolvedAt?: Date;
		resolvedReason?: string;

		/** Required */
		status: BlockerStatus;

		/** Required */
		type: BlockerType;
	}

	/** Detailed data of the sync blocker. */
	export interface SyncBlockerFormProperties {

		/** Required */
		createdAt: FormControl<Date | null | undefined>,

		/** Required */
		createdReason: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,
		resolvedAt: FormControl<Date | null | undefined>,
		resolvedReason: FormControl<string | null | undefined>,

		/** Required */
		status: FormControl<BlockerStatus | null | undefined>,

		/** Required */
		type: FormControl<BlockerType | null | undefined>,
	}
	export function CreateSyncBlockerFormGroup() {
		return new FormGroup<SyncBlockerFormProperties>({
			createdAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			createdReason: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resolvedAt: new FormControl<Date | null | undefined>(undefined),
			resolvedReason: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<BlockerStatus | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<BlockerType | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Detailed data of the context of the sync blocker. */
	export interface SyncBlockerContext {

		/** Required */
		key: string;

		/** Required */
		value: string;
	}

	/** Detailed data of the context of the sync blocker. */
	export interface SyncBlockerContextFormProperties {

		/** Required */
		key: FormControl<string | null | undefined>,

		/** Required */
		value: FormControl<string | null | undefined>,
	}
	export function CreateSyncBlockerContextFormGroup() {
		return new FormGroup<SyncBlockerContextFormProperties>({
			key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum BlockerStatus { ACTIVE = 0, RESOLVED = 1 }

	export enum BlockerType { AUTOMATED = 0 }

	export interface GetServiceSyncBlockerSummaryInput {
		serviceInstanceName?: string;

		/** Required */
		serviceName: string;
	}
	export interface GetServiceSyncBlockerSummaryInputFormProperties {
		serviceInstanceName: FormControl<string | null | undefined>,

		/** Required */
		serviceName: FormControl<string | null | undefined>,
	}
	export function CreateGetServiceSyncBlockerSummaryInputFormGroup() {
		return new FormGroup<GetServiceSyncBlockerSummaryInputFormProperties>({
			serviceInstanceName: new FormControl<string | null | undefined>(undefined),
			serviceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetServiceSyncConfigOutput {
		serviceSyncConfig?: ServiceSyncConfig;
	}
	export interface GetServiceSyncConfigOutputFormProperties {
	}
	export function CreateGetServiceSyncConfigOutputFormGroup() {
		return new FormGroup<GetServiceSyncConfigOutputFormProperties>({
		});

	}

	export interface GetServiceSyncConfigInput {

		/** Required */
		serviceName: string;
	}
	export interface GetServiceSyncConfigInputFormProperties {

		/** Required */
		serviceName: FormControl<string | null | undefined>,
	}
	export function CreateGetServiceSyncConfigInputFormGroup() {
		return new FormGroup<GetServiceSyncConfigInputFormProperties>({
			serviceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetServiceTemplateOutput {

		/** Required */
		serviceTemplate: ServiceTemplate;
	}
	export interface GetServiceTemplateOutputFormProperties {
	}
	export function CreateGetServiceTemplateOutputFormGroup() {
		return new FormGroup<GetServiceTemplateOutputFormProperties>({
		});

	}

	export interface GetServiceTemplateInput {

		/** Required */
		name: string;
	}
	export interface GetServiceTemplateInputFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGetServiceTemplateInputFormGroup() {
		return new FormGroup<GetServiceTemplateInputFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetServiceTemplateVersionOutput {

		/** Required */
		serviceTemplateVersion: ServiceTemplateVersion;
	}
	export interface GetServiceTemplateVersionOutputFormProperties {
	}
	export function CreateGetServiceTemplateVersionOutputFormGroup() {
		return new FormGroup<GetServiceTemplateVersionOutputFormProperties>({
		});

	}

	export interface GetServiceTemplateVersionInput {

		/** Required */
		majorVersion: string;

		/** Required */
		minorVersion: string;

		/** Required */
		templateName: string;
	}
	export interface GetServiceTemplateVersionInputFormProperties {

		/** Required */
		majorVersion: FormControl<string | null | undefined>,

		/** Required */
		minorVersion: FormControl<string | null | undefined>,

		/** Required */
		templateName: FormControl<string | null | undefined>,
	}
	export function CreateGetServiceTemplateVersionInputFormGroup() {
		return new FormGroup<GetServiceTemplateVersionInputFormProperties>({
			majorVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			minorVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			templateName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetTemplateSyncConfigOutput {
		templateSyncConfig?: TemplateSyncConfig;
	}
	export interface GetTemplateSyncConfigOutputFormProperties {
	}
	export function CreateGetTemplateSyncConfigOutputFormGroup() {
		return new FormGroup<GetTemplateSyncConfigOutputFormProperties>({
		});

	}

	export interface GetTemplateSyncConfigInput {

		/** Required */
		templateName: string;

		/** Required */
		templateType: TemplateType;
	}
	export interface GetTemplateSyncConfigInputFormProperties {

		/** Required */
		templateName: FormControl<string | null | undefined>,

		/** Required */
		templateType: FormControl<TemplateType | null | undefined>,
	}
	export function CreateGetTemplateSyncConfigInputFormGroup() {
		return new FormGroup<GetTemplateSyncConfigInputFormProperties>({
			templateName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			templateType: new FormControl<TemplateType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetTemplateSyncStatusOutput {
		desiredState?: Revision;
		latestSuccessfulSync?: ResourceSyncAttempt;
		latestSync?: ResourceSyncAttempt;
	}
	export interface GetTemplateSyncStatusOutputFormProperties {
	}
	export function CreateGetTemplateSyncStatusOutputFormGroup() {
		return new FormGroup<GetTemplateSyncStatusOutputFormProperties>({
		});

	}

	export interface GetTemplateSyncStatusInput {

		/** Required */
		templateName: string;

		/** Required */
		templateType: TemplateType;

		/** Required */
		templateVersion: string;
	}
	export interface GetTemplateSyncStatusInputFormProperties {

		/** Required */
		templateName: FormControl<string | null | undefined>,

		/** Required */
		templateType: FormControl<TemplateType | null | undefined>,

		/** Required */
		templateVersion: FormControl<string | null | undefined>,
	}
	export function CreateGetTemplateSyncStatusInputFormGroup() {
		return new FormGroup<GetTemplateSyncStatusInputFormProperties>({
			templateName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			templateType: new FormControl<TemplateType | null | undefined>(undefined, [Validators.required]),
			templateVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListComponentOutputsOutput {
		nextToken?: string;

		/** Required */
		outputs: Array<Output>;
	}
	export interface ListComponentOutputsOutputFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListComponentOutputsOutputFormGroup() {
		return new FormGroup<ListComponentOutputsOutputFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An infrastructure as code defined resource output. */
	export interface Output {
		key?: string;
		valueString?: string;
	}

	/** An infrastructure as code defined resource output. */
	export interface OutputFormProperties {
		key: FormControl<string | null | undefined>,
		valueString: FormControl<string | null | undefined>,
	}
	export function CreateOutputFormGroup() {
		return new FormGroup<OutputFormProperties>({
			key: new FormControl<string | null | undefined>(undefined),
			valueString: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListComponentOutputsInput {

		/** Required */
		componentName: string;
		deploymentId?: string;
		nextToken?: string;
	}
	export interface ListComponentOutputsInputFormProperties {

		/** Required */
		componentName: FormControl<string | null | undefined>,
		deploymentId: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListComponentOutputsInputFormGroup() {
		return new FormGroup<ListComponentOutputsInputFormProperties>({
			componentName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			deploymentId: new FormControl<string | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListComponentProvisionedResourcesOutput {
		nextToken?: string;

		/** Required */
		provisionedResources: Array<ProvisionedResource>;
	}
	export interface ListComponentProvisionedResourcesOutputFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListComponentProvisionedResourcesOutputFormGroup() {
		return new FormGroup<ListComponentProvisionedResourcesOutputFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Detail data for a provisioned resource. */
	export interface ProvisionedResource {
		identifier?: string;
		name?: string;
		provisioningEngine?: ProvisionedResourceEngine;
	}

	/** Detail data for a provisioned resource. */
	export interface ProvisionedResourceFormProperties {
		identifier: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		provisioningEngine: FormControl<ProvisionedResourceEngine | null | undefined>,
	}
	export function CreateProvisionedResourceFormGroup() {
		return new FormGroup<ProvisionedResourceFormProperties>({
			identifier: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			provisioningEngine: new FormControl<ProvisionedResourceEngine | null | undefined>(undefined),
		});

	}


	/** List of provisioning engines */
	export enum ProvisionedResourceEngine { CLOUDFORMATION = 0, TERRAFORM = 1 }

	export interface ListComponentProvisionedResourcesInput {

		/** Required */
		componentName: string;
		nextToken?: string;
	}
	export interface ListComponentProvisionedResourcesInputFormProperties {

		/** Required */
		componentName: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListComponentProvisionedResourcesInputFormGroup() {
		return new FormGroup<ListComponentProvisionedResourcesInputFormProperties>({
			componentName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListComponentsOutput {

		/** Required */
		components: Array<ComponentSummary>;
		nextToken?: string;
	}
	export interface ListComponentsOutputFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListComponentsOutputFormGroup() {
		return new FormGroup<ListComponentsOutputFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>Summary data of an Proton component resource.</p> <p>For more information about components, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-components.html">Proton components</a> in the <i>Proton User Guide</i>.</p> */
	export interface ComponentSummary {

		/** Required */
		arn: string;

		/** Required */
		createdAt: Date;

		/** Required */
		deploymentStatus: DeploymentStatus;
		deploymentStatusMessage?: string;

		/** Required */
		environmentName: string;
		lastAttemptedDeploymentId?: string;
		lastDeploymentAttemptedAt?: Date;
		lastDeploymentSucceededAt?: Date;

		/** Required */
		lastModifiedAt: Date;
		lastSucceededDeploymentId?: string;

		/** Required */
		name: string;
		serviceInstanceName?: string;
		serviceName?: string;
	}

	/** <p>Summary data of an Proton component resource.</p> <p>For more information about components, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-components.html">Proton components</a> in the <i>Proton User Guide</i>.</p> */
	export interface ComponentSummaryFormProperties {

		/** Required */
		arn: FormControl<string | null | undefined>,

		/** Required */
		createdAt: FormControl<Date | null | undefined>,

		/** Required */
		deploymentStatus: FormControl<DeploymentStatus | null | undefined>,
		deploymentStatusMessage: FormControl<string | null | undefined>,

		/** Required */
		environmentName: FormControl<string | null | undefined>,
		lastAttemptedDeploymentId: FormControl<string | null | undefined>,
		lastDeploymentAttemptedAt: FormControl<Date | null | undefined>,
		lastDeploymentSucceededAt: FormControl<Date | null | undefined>,

		/** Required */
		lastModifiedAt: FormControl<Date | null | undefined>,
		lastSucceededDeploymentId: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
		serviceInstanceName: FormControl<string | null | undefined>,
		serviceName: FormControl<string | null | undefined>,
	}
	export function CreateComponentSummaryFormGroup() {
		return new FormGroup<ComponentSummaryFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			createdAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			deploymentStatus: new FormControl<DeploymentStatus | null | undefined>(undefined, [Validators.required]),
			deploymentStatusMessage: new FormControl<string | null | undefined>(undefined),
			environmentName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			lastAttemptedDeploymentId: new FormControl<string | null | undefined>(undefined),
			lastDeploymentAttemptedAt: new FormControl<Date | null | undefined>(undefined),
			lastDeploymentSucceededAt: new FormControl<Date | null | undefined>(undefined),
			lastModifiedAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			lastSucceededDeploymentId: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			serviceInstanceName: new FormControl<string | null | undefined>(undefined),
			serviceName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListComponentsInput {
		environmentName?: string;
		maxResults?: number | null;
		nextToken?: string;
		serviceInstanceName?: string;
		serviceName?: string;
	}
	export interface ListComponentsInputFormProperties {
		environmentName: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
		serviceInstanceName: FormControl<string | null | undefined>,
		serviceName: FormControl<string | null | undefined>,
	}
	export function CreateListComponentsInputFormGroup() {
		return new FormGroup<ListComponentsInputFormProperties>({
			environmentName: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
			serviceInstanceName: new FormControl<string | null | undefined>(undefined),
			serviceName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListDeploymentsOutput {

		/** Required */
		deployments: Array<DeploymentSummary>;
		nextToken?: string;
	}
	export interface ListDeploymentsOutputFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListDeploymentsOutputFormGroup() {
		return new FormGroup<ListDeploymentsOutputFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Summary data of the deployment. */
	export interface DeploymentSummary {

		/** Required */
		arn: string;
		completedAt?: Date;
		componentName?: string;

		/** Required */
		createdAt: Date;

		/** Required */
		deploymentStatus: DeploymentStatus;

		/** Required */
		environmentName: string;

		/** Required */
		id: string;
		lastAttemptedDeploymentId?: string;

		/** Required */
		lastModifiedAt: Date;
		lastSucceededDeploymentId?: string;
		serviceInstanceName?: string;
		serviceName?: string;

		/** Required */
		targetArn: string;

		/** Required */
		targetResourceCreatedAt: Date;

		/** Required */
		targetResourceType: DeploymentTargetResourceType;
	}

	/** Summary data of the deployment. */
	export interface DeploymentSummaryFormProperties {

		/** Required */
		arn: FormControl<string | null | undefined>,
		completedAt: FormControl<Date | null | undefined>,
		componentName: FormControl<string | null | undefined>,

		/** Required */
		createdAt: FormControl<Date | null | undefined>,

		/** Required */
		deploymentStatus: FormControl<DeploymentStatus | null | undefined>,

		/** Required */
		environmentName: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,
		lastAttemptedDeploymentId: FormControl<string | null | undefined>,

		/** Required */
		lastModifiedAt: FormControl<Date | null | undefined>,
		lastSucceededDeploymentId: FormControl<string | null | undefined>,
		serviceInstanceName: FormControl<string | null | undefined>,
		serviceName: FormControl<string | null | undefined>,

		/** Required */
		targetArn: FormControl<string | null | undefined>,

		/** Required */
		targetResourceCreatedAt: FormControl<Date | null | undefined>,

		/** Required */
		targetResourceType: FormControl<DeploymentTargetResourceType | null | undefined>,
	}
	export function CreateDeploymentSummaryFormGroup() {
		return new FormGroup<DeploymentSummaryFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			completedAt: new FormControl<Date | null | undefined>(undefined),
			componentName: new FormControl<string | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			deploymentStatus: new FormControl<DeploymentStatus | null | undefined>(undefined, [Validators.required]),
			environmentName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			lastAttemptedDeploymentId: new FormControl<string | null | undefined>(undefined),
			lastModifiedAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			lastSucceededDeploymentId: new FormControl<string | null | undefined>(undefined),
			serviceInstanceName: new FormControl<string | null | undefined>(undefined),
			serviceName: new FormControl<string | null | undefined>(undefined),
			targetArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			targetResourceCreatedAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			targetResourceType: new FormControl<DeploymentTargetResourceType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListDeploymentsInput {
		componentName?: string;
		environmentName?: string;
		maxResults?: number | null;
		nextToken?: string;
		serviceInstanceName?: string;
		serviceName?: string;
	}
	export interface ListDeploymentsInputFormProperties {
		componentName: FormControl<string | null | undefined>,
		environmentName: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
		serviceInstanceName: FormControl<string | null | undefined>,
		serviceName: FormControl<string | null | undefined>,
	}
	export function CreateListDeploymentsInputFormGroup() {
		return new FormGroup<ListDeploymentsInputFormProperties>({
			componentName: new FormControl<string | null | undefined>(undefined),
			environmentName: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
			serviceInstanceName: new FormControl<string | null | undefined>(undefined),
			serviceName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListEnvironmentAccountConnectionsOutput {

		/** Required */
		environmentAccountConnections: Array<EnvironmentAccountConnectionSummary>;
		nextToken?: string;
	}
	export interface ListEnvironmentAccountConnectionsOutputFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListEnvironmentAccountConnectionsOutputFormGroup() {
		return new FormGroup<ListEnvironmentAccountConnectionsOutputFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Summary data of an Proton environment account connection resource. */
	export interface EnvironmentAccountConnectionSummary {

		/** Required */
		arn: string;
		componentRoleArn?: string;

		/** Required */
		environmentAccountId: string;

		/** Required */
		environmentName: string;

		/** Required */
		id: string;

		/** Required */
		lastModifiedAt: Date;

		/** Required */
		managementAccountId: string;

		/** Required */
		requestedAt: Date;

		/** Required */
		roleArn: string;

		/** Required */
		status: EnvironmentAccountConnectionStatus;
	}

	/** Summary data of an Proton environment account connection resource. */
	export interface EnvironmentAccountConnectionSummaryFormProperties {

		/** Required */
		arn: FormControl<string | null | undefined>,
		componentRoleArn: FormControl<string | null | undefined>,

		/** Required */
		environmentAccountId: FormControl<string | null | undefined>,

		/** Required */
		environmentName: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		lastModifiedAt: FormControl<Date | null | undefined>,

		/** Required */
		managementAccountId: FormControl<string | null | undefined>,

		/** Required */
		requestedAt: FormControl<Date | null | undefined>,

		/** Required */
		roleArn: FormControl<string | null | undefined>,

		/** Required */
		status: FormControl<EnvironmentAccountConnectionStatus | null | undefined>,
	}
	export function CreateEnvironmentAccountConnectionSummaryFormGroup() {
		return new FormGroup<EnvironmentAccountConnectionSummaryFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			componentRoleArn: new FormControl<string | null | undefined>(undefined),
			environmentAccountId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			environmentName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			lastModifiedAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			managementAccountId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			requestedAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			roleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<EnvironmentAccountConnectionStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListEnvironmentAccountConnectionsInput {
		environmentName?: string;
		maxResults?: number | null;
		nextToken?: string;

		/** Required */
		requestedBy: EnvironmentAccountConnectionRequesterAccountType;
		statuses?: Array<EnvironmentAccountConnectionStatus>;
	}
	export interface ListEnvironmentAccountConnectionsInputFormProperties {
		environmentName: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,

		/** Required */
		requestedBy: FormControl<EnvironmentAccountConnectionRequesterAccountType | null | undefined>,
	}
	export function CreateListEnvironmentAccountConnectionsInputFormGroup() {
		return new FormGroup<ListEnvironmentAccountConnectionsInputFormProperties>({
			environmentName: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
			requestedBy: new FormControl<EnvironmentAccountConnectionRequesterAccountType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum EnvironmentAccountConnectionRequesterAccountType { MANAGEMENT_ACCOUNT = 0, ENVIRONMENT_ACCOUNT = 1 }

	export interface ListEnvironmentOutputsOutput {
		nextToken?: string;

		/** Required */
		outputs: Array<Output>;
	}
	export interface ListEnvironmentOutputsOutputFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListEnvironmentOutputsOutputFormGroup() {
		return new FormGroup<ListEnvironmentOutputsOutputFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListEnvironmentOutputsInput {
		deploymentId?: string;

		/** Required */
		environmentName: string;
		nextToken?: string;
	}
	export interface ListEnvironmentOutputsInputFormProperties {
		deploymentId: FormControl<string | null | undefined>,

		/** Required */
		environmentName: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListEnvironmentOutputsInputFormGroup() {
		return new FormGroup<ListEnvironmentOutputsInputFormProperties>({
			deploymentId: new FormControl<string | null | undefined>(undefined),
			environmentName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListEnvironmentProvisionedResourcesOutput {
		nextToken?: string;

		/** Required */
		provisionedResources: Array<ProvisionedResource>;
	}
	export interface ListEnvironmentProvisionedResourcesOutputFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListEnvironmentProvisionedResourcesOutputFormGroup() {
		return new FormGroup<ListEnvironmentProvisionedResourcesOutputFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListEnvironmentProvisionedResourcesInput {

		/** Required */
		environmentName: string;
		nextToken?: string;
	}
	export interface ListEnvironmentProvisionedResourcesInputFormProperties {

		/** Required */
		environmentName: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListEnvironmentProvisionedResourcesInputFormGroup() {
		return new FormGroup<ListEnvironmentProvisionedResourcesInputFormProperties>({
			environmentName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListEnvironmentTemplateVersionsOutput {
		nextToken?: string;

		/** Required */
		templateVersions: Array<EnvironmentTemplateVersionSummary>;
	}
	export interface ListEnvironmentTemplateVersionsOutputFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListEnvironmentTemplateVersionsOutputFormGroup() {
		return new FormGroup<ListEnvironmentTemplateVersionsOutputFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A summary of the version of an environment template detail data. */
	export interface EnvironmentTemplateVersionSummary {

		/** Required */
		arn: string;

		/** Required */
		createdAt: Date;
		description?: string;

		/** Required */
		lastModifiedAt: Date;

		/** Required */
		majorVersion: string;

		/** Required */
		minorVersion: string;
		recommendedMinorVersion?: string;

		/** Required */
		status: TemplateVersionStatus;
		statusMessage?: string;

		/** Required */
		templateName: string;
	}

	/** A summary of the version of an environment template detail data. */
	export interface EnvironmentTemplateVersionSummaryFormProperties {

		/** Required */
		arn: FormControl<string | null | undefined>,

		/** Required */
		createdAt: FormControl<Date | null | undefined>,
		description: FormControl<string | null | undefined>,

		/** Required */
		lastModifiedAt: FormControl<Date | null | undefined>,

		/** Required */
		majorVersion: FormControl<string | null | undefined>,

		/** Required */
		minorVersion: FormControl<string | null | undefined>,
		recommendedMinorVersion: FormControl<string | null | undefined>,

		/** Required */
		status: FormControl<TemplateVersionStatus | null | undefined>,
		statusMessage: FormControl<string | null | undefined>,

		/** Required */
		templateName: FormControl<string | null | undefined>,
	}
	export function CreateEnvironmentTemplateVersionSummaryFormGroup() {
		return new FormGroup<EnvironmentTemplateVersionSummaryFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			createdAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
			lastModifiedAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			majorVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			minorVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			recommendedMinorVersion: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<TemplateVersionStatus | null | undefined>(undefined, [Validators.required]),
			statusMessage: new FormControl<string | null | undefined>(undefined),
			templateName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListEnvironmentTemplateVersionsInput {
		majorVersion?: string;
		maxResults?: number | null;
		nextToken?: string;

		/** Required */
		templateName: string;
	}
	export interface ListEnvironmentTemplateVersionsInputFormProperties {
		majorVersion: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,

		/** Required */
		templateName: FormControl<string | null | undefined>,
	}
	export function CreateListEnvironmentTemplateVersionsInputFormGroup() {
		return new FormGroup<ListEnvironmentTemplateVersionsInputFormProperties>({
			majorVersion: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
			templateName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListEnvironmentTemplatesOutput {
		nextToken?: string;

		/** Required */
		templates: Array<EnvironmentTemplateSummary>;
	}
	export interface ListEnvironmentTemplatesOutputFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListEnvironmentTemplatesOutputFormGroup() {
		return new FormGroup<ListEnvironmentTemplatesOutputFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The environment template data. */
	export interface EnvironmentTemplateSummary {

		/** Required */
		arn: string;

		/** Required */
		createdAt: Date;
		description?: string;
		displayName?: string;

		/** Required */
		lastModifiedAt: Date;

		/** Required */
		name: string;
		provisioning?: Provisioning;
		recommendedVersion?: string;
	}

	/** The environment template data. */
	export interface EnvironmentTemplateSummaryFormProperties {

		/** Required */
		arn: FormControl<string | null | undefined>,

		/** Required */
		createdAt: FormControl<Date | null | undefined>,
		description: FormControl<string | null | undefined>,
		displayName: FormControl<string | null | undefined>,

		/** Required */
		lastModifiedAt: FormControl<Date | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
		provisioning: FormControl<Provisioning | null | undefined>,
		recommendedVersion: FormControl<string | null | undefined>,
	}
	export function CreateEnvironmentTemplateSummaryFormGroup() {
		return new FormGroup<EnvironmentTemplateSummaryFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			createdAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			lastModifiedAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			provisioning: new FormControl<Provisioning | null | undefined>(undefined),
			recommendedVersion: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListEnvironmentTemplatesInput {
		maxResults?: number | null;
		nextToken?: string;
	}
	export interface ListEnvironmentTemplatesInputFormProperties {
		maxResults: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListEnvironmentTemplatesInputFormGroup() {
		return new FormGroup<ListEnvironmentTemplatesInputFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListEnvironmentsOutput {

		/** Required */
		environments: Array<EnvironmentSummary>;
		nextToken?: string;
	}
	export interface ListEnvironmentsOutputFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListEnvironmentsOutputFormGroup() {
		return new FormGroup<ListEnvironmentsOutputFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Summary data of an Proton environment resource. An Proton environment is a set of resources shared across Proton services. */
	export interface EnvironmentSummary {

		/** Required */
		arn: string;
		componentRoleArn?: string;

		/** Required */
		createdAt: Date;

		/** Required */
		deploymentStatus: DeploymentStatus;
		deploymentStatusMessage?: string;
		description?: string;
		environmentAccountConnectionId?: string;
		environmentAccountId?: string;
		lastAttemptedDeploymentId?: string;

		/** Required */
		lastDeploymentAttemptedAt: Date;

		/** Required */
		lastDeploymentSucceededAt: Date;
		lastSucceededDeploymentId?: string;

		/** Required */
		name: string;
		protonServiceRoleArn?: string;
		provisioning?: Provisioning;

		/** Required */
		templateMajorVersion: string;

		/** Required */
		templateMinorVersion: string;

		/** Required */
		templateName: string;
	}

	/** Summary data of an Proton environment resource. An Proton environment is a set of resources shared across Proton services. */
	export interface EnvironmentSummaryFormProperties {

		/** Required */
		arn: FormControl<string | null | undefined>,
		componentRoleArn: FormControl<string | null | undefined>,

		/** Required */
		createdAt: FormControl<Date | null | undefined>,

		/** Required */
		deploymentStatus: FormControl<DeploymentStatus | null | undefined>,
		deploymentStatusMessage: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		environmentAccountConnectionId: FormControl<string | null | undefined>,
		environmentAccountId: FormControl<string | null | undefined>,
		lastAttemptedDeploymentId: FormControl<string | null | undefined>,

		/** Required */
		lastDeploymentAttemptedAt: FormControl<Date | null | undefined>,

		/** Required */
		lastDeploymentSucceededAt: FormControl<Date | null | undefined>,
		lastSucceededDeploymentId: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
		protonServiceRoleArn: FormControl<string | null | undefined>,
		provisioning: FormControl<Provisioning | null | undefined>,

		/** Required */
		templateMajorVersion: FormControl<string | null | undefined>,

		/** Required */
		templateMinorVersion: FormControl<string | null | undefined>,

		/** Required */
		templateName: FormControl<string | null | undefined>,
	}
	export function CreateEnvironmentSummaryFormGroup() {
		return new FormGroup<EnvironmentSummaryFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			componentRoleArn: new FormControl<string | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			deploymentStatus: new FormControl<DeploymentStatus | null | undefined>(undefined, [Validators.required]),
			deploymentStatusMessage: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			environmentAccountConnectionId: new FormControl<string | null | undefined>(undefined),
			environmentAccountId: new FormControl<string | null | undefined>(undefined),
			lastAttemptedDeploymentId: new FormControl<string | null | undefined>(undefined),
			lastDeploymentAttemptedAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			lastDeploymentSucceededAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			lastSucceededDeploymentId: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			protonServiceRoleArn: new FormControl<string | null | undefined>(undefined),
			provisioning: new FormControl<Provisioning | null | undefined>(undefined),
			templateMajorVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			templateMinorVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			templateName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListEnvironmentsInput {
		environmentTemplates?: Array<EnvironmentTemplateFilter>;
		maxResults?: number | null;
		nextToken?: string;
	}
	export interface ListEnvironmentsInputFormProperties {
		maxResults: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListEnvironmentsInputFormGroup() {
		return new FormGroup<ListEnvironmentsInputFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A search filter for environment templates. */
	export interface EnvironmentTemplateFilter {

		/** Required */
		majorVersion: string;

		/** Required */
		templateName: string;
	}

	/** A search filter for environment templates. */
	export interface EnvironmentTemplateFilterFormProperties {

		/** Required */
		majorVersion: FormControl<string | null | undefined>,

		/** Required */
		templateName: FormControl<string | null | undefined>,
	}
	export function CreateEnvironmentTemplateFilterFormGroup() {
		return new FormGroup<EnvironmentTemplateFilterFormProperties>({
			majorVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			templateName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListRepositoriesOutput {
		nextToken?: string;

		/** Required */
		repositories: Array<RepositorySummary>;
	}
	export interface ListRepositoriesOutputFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListRepositoriesOutputFormGroup() {
		return new FormGroup<ListRepositoriesOutputFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Summary data of a linked repository—a repository that has been registered with Proton. */
	export interface RepositorySummary {

		/** Required */
		arn: string;

		/** Required */
		connectionArn: string;

		/** Required */
		name: string;

		/** Required */
		provider: RepositoryProvider;
	}

	/** Summary data of a linked repository—a repository that has been registered with Proton. */
	export interface RepositorySummaryFormProperties {

		/** Required */
		arn: FormControl<string | null | undefined>,

		/** Required */
		connectionArn: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		provider: FormControl<RepositoryProvider | null | undefined>,
	}
	export function CreateRepositorySummaryFormGroup() {
		return new FormGroup<RepositorySummaryFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			connectionArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			provider: new FormControl<RepositoryProvider | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListRepositoriesInput {
		maxResults?: number | null;
		nextToken?: string;
	}
	export interface ListRepositoriesInputFormProperties {
		maxResults: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListRepositoriesInputFormGroup() {
		return new FormGroup<ListRepositoriesInputFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListRepositorySyncDefinitionsOutput {
		nextToken?: string;

		/** Required */
		syncDefinitions: Array<RepositorySyncDefinition>;
	}
	export interface ListRepositorySyncDefinitionsOutputFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListRepositorySyncDefinitionsOutputFormGroup() {
		return new FormGroup<ListRepositorySyncDefinitionsOutputFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A repository sync definition. */
	export interface RepositorySyncDefinition {

		/** Required */
		branch: string;

		/** Required */
		directory: string;

		/** Required */
		parent: string;

		/** Required */
		target: string;
	}

	/** A repository sync definition. */
	export interface RepositorySyncDefinitionFormProperties {

		/** Required */
		branch: FormControl<string | null | undefined>,

		/** Required */
		directory: FormControl<string | null | undefined>,

		/** Required */
		parent: FormControl<string | null | undefined>,

		/** Required */
		target: FormControl<string | null | undefined>,
	}
	export function CreateRepositorySyncDefinitionFormGroup() {
		return new FormGroup<RepositorySyncDefinitionFormProperties>({
			branch: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			directory: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			parent: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			target: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListRepositorySyncDefinitionsInput {
		nextToken?: string;

		/** Required */
		repositoryName: string;

		/** Required */
		repositoryProvider: RepositoryProvider;

		/** Required */
		syncType: SyncType;
	}
	export interface ListRepositorySyncDefinitionsInputFormProperties {
		nextToken: FormControl<string | null | undefined>,

		/** Required */
		repositoryName: FormControl<string | null | undefined>,

		/** Required */
		repositoryProvider: FormControl<RepositoryProvider | null | undefined>,

		/** Required */
		syncType: FormControl<SyncType | null | undefined>,
	}
	export function CreateListRepositorySyncDefinitionsInputFormGroup() {
		return new FormGroup<ListRepositorySyncDefinitionsInputFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
			repositoryName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			repositoryProvider: new FormControl<RepositoryProvider | null | undefined>(undefined, [Validators.required]),
			syncType: new FormControl<SyncType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListServiceInstanceOutputsOutput {
		nextToken?: string;

		/** Required */
		outputs: Array<Output>;
	}
	export interface ListServiceInstanceOutputsOutputFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListServiceInstanceOutputsOutputFormGroup() {
		return new FormGroup<ListServiceInstanceOutputsOutputFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListServiceInstanceOutputsInput {
		deploymentId?: string;
		nextToken?: string;

		/** Required */
		serviceInstanceName: string;

		/** Required */
		serviceName: string;
	}
	export interface ListServiceInstanceOutputsInputFormProperties {
		deploymentId: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,

		/** Required */
		serviceInstanceName: FormControl<string | null | undefined>,

		/** Required */
		serviceName: FormControl<string | null | undefined>,
	}
	export function CreateListServiceInstanceOutputsInputFormGroup() {
		return new FormGroup<ListServiceInstanceOutputsInputFormProperties>({
			deploymentId: new FormControl<string | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
			serviceInstanceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			serviceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListServiceInstanceProvisionedResourcesOutput {
		nextToken?: string;

		/** Required */
		provisionedResources: Array<ProvisionedResource>;
	}
	export interface ListServiceInstanceProvisionedResourcesOutputFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListServiceInstanceProvisionedResourcesOutputFormGroup() {
		return new FormGroup<ListServiceInstanceProvisionedResourcesOutputFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListServiceInstanceProvisionedResourcesInput {
		nextToken?: string;

		/** Required */
		serviceInstanceName: string;

		/** Required */
		serviceName: string;
	}
	export interface ListServiceInstanceProvisionedResourcesInputFormProperties {
		nextToken: FormControl<string | null | undefined>,

		/** Required */
		serviceInstanceName: FormControl<string | null | undefined>,

		/** Required */
		serviceName: FormControl<string | null | undefined>,
	}
	export function CreateListServiceInstanceProvisionedResourcesInputFormGroup() {
		return new FormGroup<ListServiceInstanceProvisionedResourcesInputFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
			serviceInstanceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			serviceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListServiceInstancesOutput {
		nextToken?: string;

		/** Required */
		serviceInstances: Array<ServiceInstanceSummary>;
	}
	export interface ListServiceInstancesOutputFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListServiceInstancesOutputFormGroup() {
		return new FormGroup<ListServiceInstancesOutputFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Summary data of an Proton service instance resource. */
	export interface ServiceInstanceSummary {

		/** Required */
		arn: string;

		/** Required */
		createdAt: Date;

		/** Required */
		deploymentStatus: DeploymentStatus;
		deploymentStatusMessage?: string;

		/** Required */
		environmentName: string;
		lastAttemptedDeploymentId?: string;

		/** Required */
		lastDeploymentAttemptedAt: Date;

		/** Required */
		lastDeploymentSucceededAt: Date;
		lastSucceededDeploymentId?: string;

		/** Required */
		name: string;

		/** Required */
		serviceName: string;

		/** Required */
		templateMajorVersion: string;

		/** Required */
		templateMinorVersion: string;

		/** Required */
		templateName: string;
	}

	/** Summary data of an Proton service instance resource. */
	export interface ServiceInstanceSummaryFormProperties {

		/** Required */
		arn: FormControl<string | null | undefined>,

		/** Required */
		createdAt: FormControl<Date | null | undefined>,

		/** Required */
		deploymentStatus: FormControl<DeploymentStatus | null | undefined>,
		deploymentStatusMessage: FormControl<string | null | undefined>,

		/** Required */
		environmentName: FormControl<string | null | undefined>,
		lastAttemptedDeploymentId: FormControl<string | null | undefined>,

		/** Required */
		lastDeploymentAttemptedAt: FormControl<Date | null | undefined>,

		/** Required */
		lastDeploymentSucceededAt: FormControl<Date | null | undefined>,
		lastSucceededDeploymentId: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		serviceName: FormControl<string | null | undefined>,

		/** Required */
		templateMajorVersion: FormControl<string | null | undefined>,

		/** Required */
		templateMinorVersion: FormControl<string | null | undefined>,

		/** Required */
		templateName: FormControl<string | null | undefined>,
	}
	export function CreateServiceInstanceSummaryFormGroup() {
		return new FormGroup<ServiceInstanceSummaryFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			createdAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			deploymentStatus: new FormControl<DeploymentStatus | null | undefined>(undefined, [Validators.required]),
			deploymentStatusMessage: new FormControl<string | null | undefined>(undefined),
			environmentName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			lastAttemptedDeploymentId: new FormControl<string | null | undefined>(undefined),
			lastDeploymentAttemptedAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			lastDeploymentSucceededAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			lastSucceededDeploymentId: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			serviceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			templateMajorVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			templateMinorVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			templateName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListServiceInstancesInput {
		filters?: Array<ListServiceInstancesFilter>;
		maxResults?: number | null;
		nextToken?: string;
		serviceName?: string;
		sortBy?: ListServiceInstancesSortBy;
		sortOrder?: SortOrder;
	}
	export interface ListServiceInstancesInputFormProperties {
		maxResults: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
		serviceName: FormControl<string | null | undefined>,
		sortBy: FormControl<ListServiceInstancesSortBy | null | undefined>,
		sortOrder: FormControl<SortOrder | null | undefined>,
	}
	export function CreateListServiceInstancesInputFormGroup() {
		return new FormGroup<ListServiceInstancesInputFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
			serviceName: new FormControl<string | null | undefined>(undefined),
			sortBy: new FormControl<ListServiceInstancesSortBy | null | undefined>(undefined),
			sortOrder: new FormControl<SortOrder | null | undefined>(undefined),
		});

	}


	/** A filtering criterion to scope down the result list of the <a>ListServiceInstances</a> action. */
	export interface ListServiceInstancesFilter {
		key?: ListServiceInstancesFilterBy;
		value?: string;
	}

	/** A filtering criterion to scope down the result list of the <a>ListServiceInstances</a> action. */
	export interface ListServiceInstancesFilterFormProperties {
		key: FormControl<ListServiceInstancesFilterBy | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreateListServiceInstancesFilterFormGroup() {
		return new FormGroup<ListServiceInstancesFilterFormProperties>({
			key: new FormControl<ListServiceInstancesFilterBy | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ListServiceInstancesFilterBy { name = 0, deploymentStatus = 1, templateName = 2, serviceName = 3, deployedTemplateVersionStatus = 4, environmentName = 5, lastDeploymentAttemptedAtBefore = 6, lastDeploymentAttemptedAtAfter = 7, createdAtBefore = 8, createdAtAfter = 9 }

	export enum ListServiceInstancesSortBy { name = 0, deploymentStatus = 1, templateName = 2, serviceName = 3, environmentName = 4, lastDeploymentAttemptedAt = 5, createdAt = 6 }

	export enum SortOrder { ASCENDING = 0, DESCENDING = 1 }

	export interface ListServicePipelineOutputsOutput {
		nextToken?: string;

		/** Required */
		outputs: Array<Output>;
	}
	export interface ListServicePipelineOutputsOutputFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListServicePipelineOutputsOutputFormGroup() {
		return new FormGroup<ListServicePipelineOutputsOutputFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListServicePipelineOutputsInput {
		deploymentId?: string;
		nextToken?: string;

		/** Required */
		serviceName: string;
	}
	export interface ListServicePipelineOutputsInputFormProperties {
		deploymentId: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,

		/** Required */
		serviceName: FormControl<string | null | undefined>,
	}
	export function CreateListServicePipelineOutputsInputFormGroup() {
		return new FormGroup<ListServicePipelineOutputsInputFormProperties>({
			deploymentId: new FormControl<string | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
			serviceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListServicePipelineProvisionedResourcesOutput {
		nextToken?: string;

		/** Required */
		provisionedResources: Array<ProvisionedResource>;
	}
	export interface ListServicePipelineProvisionedResourcesOutputFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListServicePipelineProvisionedResourcesOutputFormGroup() {
		return new FormGroup<ListServicePipelineProvisionedResourcesOutputFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListServicePipelineProvisionedResourcesInput {
		nextToken?: string;

		/** Required */
		serviceName: string;
	}
	export interface ListServicePipelineProvisionedResourcesInputFormProperties {
		nextToken: FormControl<string | null | undefined>,

		/** Required */
		serviceName: FormControl<string | null | undefined>,
	}
	export function CreateListServicePipelineProvisionedResourcesInputFormGroup() {
		return new FormGroup<ListServicePipelineProvisionedResourcesInputFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
			serviceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListServiceTemplateVersionsOutput {
		nextToken?: string;

		/** Required */
		templateVersions: Array<ServiceTemplateVersionSummary>;
	}
	export interface ListServiceTemplateVersionsOutputFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListServiceTemplateVersionsOutputFormGroup() {
		return new FormGroup<ListServiceTemplateVersionsOutputFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Summary data of an Proton service template version resource. */
	export interface ServiceTemplateVersionSummary {

		/** Required */
		arn: string;

		/** Required */
		createdAt: Date;
		description?: string;

		/** Required */
		lastModifiedAt: Date;

		/** Required */
		majorVersion: string;

		/** Required */
		minorVersion: string;
		recommendedMinorVersion?: string;

		/** Required */
		status: TemplateVersionStatus;
		statusMessage?: string;

		/** Required */
		templateName: string;
	}

	/** Summary data of an Proton service template version resource. */
	export interface ServiceTemplateVersionSummaryFormProperties {

		/** Required */
		arn: FormControl<string | null | undefined>,

		/** Required */
		createdAt: FormControl<Date | null | undefined>,
		description: FormControl<string | null | undefined>,

		/** Required */
		lastModifiedAt: FormControl<Date | null | undefined>,

		/** Required */
		majorVersion: FormControl<string | null | undefined>,

		/** Required */
		minorVersion: FormControl<string | null | undefined>,
		recommendedMinorVersion: FormControl<string | null | undefined>,

		/** Required */
		status: FormControl<TemplateVersionStatus | null | undefined>,
		statusMessage: FormControl<string | null | undefined>,

		/** Required */
		templateName: FormControl<string | null | undefined>,
	}
	export function CreateServiceTemplateVersionSummaryFormGroup() {
		return new FormGroup<ServiceTemplateVersionSummaryFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			createdAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
			lastModifiedAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			majorVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			minorVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			recommendedMinorVersion: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<TemplateVersionStatus | null | undefined>(undefined, [Validators.required]),
			statusMessage: new FormControl<string | null | undefined>(undefined),
			templateName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListServiceTemplateVersionsInput {
		majorVersion?: string;
		maxResults?: number | null;
		nextToken?: string;

		/** Required */
		templateName: string;
	}
	export interface ListServiceTemplateVersionsInputFormProperties {
		majorVersion: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,

		/** Required */
		templateName: FormControl<string | null | undefined>,
	}
	export function CreateListServiceTemplateVersionsInputFormGroup() {
		return new FormGroup<ListServiceTemplateVersionsInputFormProperties>({
			majorVersion: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
			templateName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListServiceTemplatesOutput {
		nextToken?: string;

		/** Required */
		templates: Array<ServiceTemplateSummary>;
	}
	export interface ListServiceTemplatesOutputFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListServiceTemplatesOutputFormGroup() {
		return new FormGroup<ListServiceTemplatesOutputFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Summary data of an Proton service template resource. */
	export interface ServiceTemplateSummary {

		/** Required */
		arn: string;

		/** Required */
		createdAt: Date;
		description?: string;
		displayName?: string;

		/** Required */
		lastModifiedAt: Date;

		/** Required */
		name: string;
		pipelineProvisioning?: Provisioning;
		recommendedVersion?: string;
	}

	/** Summary data of an Proton service template resource. */
	export interface ServiceTemplateSummaryFormProperties {

		/** Required */
		arn: FormControl<string | null | undefined>,

		/** Required */
		createdAt: FormControl<Date | null | undefined>,
		description: FormControl<string | null | undefined>,
		displayName: FormControl<string | null | undefined>,

		/** Required */
		lastModifiedAt: FormControl<Date | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
		pipelineProvisioning: FormControl<Provisioning | null | undefined>,
		recommendedVersion: FormControl<string | null | undefined>,
	}
	export function CreateServiceTemplateSummaryFormGroup() {
		return new FormGroup<ServiceTemplateSummaryFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			createdAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			lastModifiedAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			pipelineProvisioning: new FormControl<Provisioning | null | undefined>(undefined),
			recommendedVersion: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListServiceTemplatesInput {
		maxResults?: number | null;
		nextToken?: string;
	}
	export interface ListServiceTemplatesInputFormProperties {
		maxResults: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListServiceTemplatesInputFormGroup() {
		return new FormGroup<ListServiceTemplatesInputFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListServicesOutput {
		nextToken?: string;

		/** Required */
		services: Array<ServiceSummary>;
	}
	export interface ListServicesOutputFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListServicesOutputFormGroup() {
		return new FormGroup<ListServicesOutputFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Summary data of an Proton service resource. */
	export interface ServiceSummary {

		/** Required */
		arn: string;

		/** Required */
		createdAt: Date;
		description?: string;

		/** Required */
		lastModifiedAt: Date;

		/** Required */
		name: string;

		/** Required */
		status: ServiceStatus;
		statusMessage?: string;

		/** Required */
		templateName: string;
	}

	/** Summary data of an Proton service resource. */
	export interface ServiceSummaryFormProperties {

		/** Required */
		arn: FormControl<string | null | undefined>,

		/** Required */
		createdAt: FormControl<Date | null | undefined>,
		description: FormControl<string | null | undefined>,

		/** Required */
		lastModifiedAt: FormControl<Date | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		status: FormControl<ServiceStatus | null | undefined>,
		statusMessage: FormControl<string | null | undefined>,

		/** Required */
		templateName: FormControl<string | null | undefined>,
	}
	export function CreateServiceSummaryFormGroup() {
		return new FormGroup<ServiceSummaryFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			createdAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
			lastModifiedAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<ServiceStatus | null | undefined>(undefined, [Validators.required]),
			statusMessage: new FormControl<string | null | undefined>(undefined),
			templateName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListServicesInput {
		maxResults?: number | null;
		nextToken?: string;
	}
	export interface ListServicesInputFormProperties {
		maxResults: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListServicesInputFormGroup() {
		return new FormGroup<ListServicesInputFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListTagsForResourceOutput {
		nextToken?: string;

		/** Required */
		tags: Array<Tag>;
	}
	export interface ListTagsForResourceOutputFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTagsForResourceOutputFormGroup() {
		return new FormGroup<ListTagsForResourceOutputFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListTagsForResourceInput {
		maxResults?: number | null;
		nextToken?: string;

		/** Required */
		resourceArn: string;
	}
	export interface ListTagsForResourceInputFormProperties {
		maxResults: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,

		/** Required */
		resourceArn: FormControl<string | null | undefined>,
	}
	export function CreateListTagsForResourceInputFormGroup() {
		return new FormGroup<ListTagsForResourceInputFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
			resourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface NotifyResourceDeploymentStatusChangeOutput {
	}
	export interface NotifyResourceDeploymentStatusChangeOutputFormProperties {
	}
	export function CreateNotifyResourceDeploymentStatusChangeOutputFormGroup() {
		return new FormGroup<NotifyResourceDeploymentStatusChangeOutputFormProperties>({
		});

	}

	export interface NotifyResourceDeploymentStatusChangeInput {
		deploymentId?: string;
		outputs?: Array<Output>;

		/** Required */
		resourceArn: string;
		status?: ResourceDeploymentStatus;
		statusMessage?: string;
	}
	export interface NotifyResourceDeploymentStatusChangeInputFormProperties {
		deploymentId: FormControl<string | null | undefined>,

		/** Required */
		resourceArn: FormControl<string | null | undefined>,
		status: FormControl<ResourceDeploymentStatus | null | undefined>,
		statusMessage: FormControl<string | null | undefined>,
	}
	export function CreateNotifyResourceDeploymentStatusChangeInputFormGroup() {
		return new FormGroup<NotifyResourceDeploymentStatusChangeInputFormProperties>({
			deploymentId: new FormControl<string | null | undefined>(undefined),
			resourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<ResourceDeploymentStatus | null | undefined>(undefined),
			statusMessage: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The state that a PR-based deployment can be updated to. */
	export enum ResourceDeploymentStatus { IN_PROGRESS = 0, FAILED = 1, SUCCEEDED = 2 }

	export interface RejectEnvironmentAccountConnectionOutput {

		/** Required */
		environmentAccountConnection: EnvironmentAccountConnection;
	}
	export interface RejectEnvironmentAccountConnectionOutputFormProperties {
	}
	export function CreateRejectEnvironmentAccountConnectionOutputFormGroup() {
		return new FormGroup<RejectEnvironmentAccountConnectionOutputFormProperties>({
		});

	}

	export interface RejectEnvironmentAccountConnectionInput {

		/** Required */
		id: string;
	}
	export interface RejectEnvironmentAccountConnectionInputFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,
	}
	export function CreateRejectEnvironmentAccountConnectionInputFormGroup() {
		return new FormGroup<RejectEnvironmentAccountConnectionInputFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface TagResourceOutput {
	}
	export interface TagResourceOutputFormProperties {
	}
	export function CreateTagResourceOutputFormGroup() {
		return new FormGroup<TagResourceOutputFormProperties>({
		});

	}

	export interface TagResourceInput {

		/** Required */
		resourceArn: string;

		/** Required */
		tags: Array<Tag>;
	}
	export interface TagResourceInputFormProperties {

		/** Required */
		resourceArn: FormControl<string | null | undefined>,
	}
	export function CreateTagResourceInputFormGroup() {
		return new FormGroup<TagResourceInputFormProperties>({
			resourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UntagResourceOutput {
	}
	export interface UntagResourceOutputFormProperties {
	}
	export function CreateUntagResourceOutputFormGroup() {
		return new FormGroup<UntagResourceOutputFormProperties>({
		});

	}

	export interface UntagResourceInput {

		/** Required */
		resourceArn: string;

		/** Required */
		tagKeys: Array<string>;
	}
	export interface UntagResourceInputFormProperties {

		/** Required */
		resourceArn: FormControl<string | null | undefined>,
	}
	export function CreateUntagResourceInputFormGroup() {
		return new FormGroup<UntagResourceInputFormProperties>({
			resourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateAccountSettingsOutput {

		/** Required */
		accountSettings: AccountSettings;
	}
	export interface UpdateAccountSettingsOutputFormProperties {
	}
	export function CreateUpdateAccountSettingsOutputFormGroup() {
		return new FormGroup<UpdateAccountSettingsOutputFormProperties>({
		});

	}

	export interface UpdateAccountSettingsInput {
		deletePipelineProvisioningRepository?: boolean | null;
		pipelineCodebuildRoleArn?: string;
		pipelineProvisioningRepository?: RepositoryBranchInput;
		pipelineServiceRoleArn?: string;
	}
	export interface UpdateAccountSettingsInputFormProperties {
		deletePipelineProvisioningRepository: FormControl<boolean | null | undefined>,
		pipelineCodebuildRoleArn: FormControl<string | null | undefined>,
		pipelineServiceRoleArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateAccountSettingsInputFormGroup() {
		return new FormGroup<UpdateAccountSettingsInputFormProperties>({
			deletePipelineProvisioningRepository: new FormControl<boolean | null | undefined>(undefined),
			pipelineCodebuildRoleArn: new FormControl<string | null | undefined>(undefined),
			pipelineServiceRoleArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateComponentOutput {

		/** Required */
		component: Component;
	}
	export interface UpdateComponentOutputFormProperties {
	}
	export function CreateUpdateComponentOutputFormGroup() {
		return new FormGroup<UpdateComponentOutputFormProperties>({
		});

	}

	export interface UpdateComponentInput {
		clientToken?: string;

		/** Required */
		deploymentType: ComponentDeploymentUpdateType;
		description?: string;

		/** Required */
		name: string;
		serviceInstanceName?: string;
		serviceName?: string;
		serviceSpec?: string;
		templateFile?: string;
	}
	export interface UpdateComponentInputFormProperties {
		clientToken: FormControl<string | null | undefined>,

		/** Required */
		deploymentType: FormControl<ComponentDeploymentUpdateType | null | undefined>,
		description: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
		serviceInstanceName: FormControl<string | null | undefined>,
		serviceName: FormControl<string | null | undefined>,
		serviceSpec: FormControl<string | null | undefined>,
		templateFile: FormControl<string | null | undefined>,
	}
	export function CreateUpdateComponentInputFormGroup() {
		return new FormGroup<UpdateComponentInputFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined),
			deploymentType: new FormControl<ComponentDeploymentUpdateType | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			serviceInstanceName: new FormControl<string | null | undefined>(undefined),
			serviceName: new FormControl<string | null | undefined>(undefined),
			serviceSpec: new FormControl<string | null | undefined>(undefined),
			templateFile: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ComponentDeploymentUpdateType { NONE = 0, CURRENT_VERSION = 1 }

	export interface UpdateEnvironmentOutput {

		/** Required */
		environment: Environment;
	}
	export interface UpdateEnvironmentOutputFormProperties {
	}
	export function CreateUpdateEnvironmentOutputFormGroup() {
		return new FormGroup<UpdateEnvironmentOutputFormProperties>({
		});

	}

	export interface UpdateEnvironmentInput {
		codebuildRoleArn?: string;
		componentRoleArn?: string;

		/** Required */
		deploymentType: DeploymentUpdateType;
		description?: string;
		environmentAccountConnectionId?: string;

		/** Required */
		name: string;
		protonServiceRoleArn?: string;
		provisioningRepository?: RepositoryBranchInput;
		spec?: string;
		templateMajorVersion?: string;
		templateMinorVersion?: string;
	}
	export interface UpdateEnvironmentInputFormProperties {
		codebuildRoleArn: FormControl<string | null | undefined>,
		componentRoleArn: FormControl<string | null | undefined>,

		/** Required */
		deploymentType: FormControl<DeploymentUpdateType | null | undefined>,
		description: FormControl<string | null | undefined>,
		environmentAccountConnectionId: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
		protonServiceRoleArn: FormControl<string | null | undefined>,
		spec: FormControl<string | null | undefined>,
		templateMajorVersion: FormControl<string | null | undefined>,
		templateMinorVersion: FormControl<string | null | undefined>,
	}
	export function CreateUpdateEnvironmentInputFormGroup() {
		return new FormGroup<UpdateEnvironmentInputFormProperties>({
			codebuildRoleArn: new FormControl<string | null | undefined>(undefined),
			componentRoleArn: new FormControl<string | null | undefined>(undefined),
			deploymentType: new FormControl<DeploymentUpdateType | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
			environmentAccountConnectionId: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			protonServiceRoleArn: new FormControl<string | null | undefined>(undefined),
			spec: new FormControl<string | null | undefined>(undefined),
			templateMajorVersion: new FormControl<string | null | undefined>(undefined),
			templateMinorVersion: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DeploymentUpdateType { NONE = 0, CURRENT_VERSION = 1, MINOR_VERSION = 2, MAJOR_VERSION = 3 }

	export interface UpdateEnvironmentAccountConnectionOutput {

		/** Required */
		environmentAccountConnection: EnvironmentAccountConnection;
	}
	export interface UpdateEnvironmentAccountConnectionOutputFormProperties {
	}
	export function CreateUpdateEnvironmentAccountConnectionOutputFormGroup() {
		return new FormGroup<UpdateEnvironmentAccountConnectionOutputFormProperties>({
		});

	}

	export interface UpdateEnvironmentAccountConnectionInput {
		codebuildRoleArn?: string;
		componentRoleArn?: string;

		/** Required */
		id: string;
		roleArn?: string;
	}
	export interface UpdateEnvironmentAccountConnectionInputFormProperties {
		codebuildRoleArn: FormControl<string | null | undefined>,
		componentRoleArn: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,
		roleArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateEnvironmentAccountConnectionInputFormGroup() {
		return new FormGroup<UpdateEnvironmentAccountConnectionInputFormProperties>({
			codebuildRoleArn: new FormControl<string | null | undefined>(undefined),
			componentRoleArn: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			roleArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateEnvironmentTemplateOutput {

		/** Required */
		environmentTemplate: EnvironmentTemplate;
	}
	export interface UpdateEnvironmentTemplateOutputFormProperties {
	}
	export function CreateUpdateEnvironmentTemplateOutputFormGroup() {
		return new FormGroup<UpdateEnvironmentTemplateOutputFormProperties>({
		});

	}

	export interface UpdateEnvironmentTemplateInput {
		description?: string;
		displayName?: string;

		/** Required */
		name: string;
	}
	export interface UpdateEnvironmentTemplateInputFormProperties {
		description: FormControl<string | null | undefined>,
		displayName: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
	}
	export function CreateUpdateEnvironmentTemplateInputFormGroup() {
		return new FormGroup<UpdateEnvironmentTemplateInputFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateEnvironmentTemplateVersionOutput {

		/** Required */
		environmentTemplateVersion: EnvironmentTemplateVersion;
	}
	export interface UpdateEnvironmentTemplateVersionOutputFormProperties {
	}
	export function CreateUpdateEnvironmentTemplateVersionOutputFormGroup() {
		return new FormGroup<UpdateEnvironmentTemplateVersionOutputFormProperties>({
		});

	}

	export interface UpdateEnvironmentTemplateVersionInput {
		description?: string;

		/** Required */
		majorVersion: string;

		/** Required */
		minorVersion: string;
		status?: TemplateVersionStatus;

		/** Required */
		templateName: string;
	}
	export interface UpdateEnvironmentTemplateVersionInputFormProperties {
		description: FormControl<string | null | undefined>,

		/** Required */
		majorVersion: FormControl<string | null | undefined>,

		/** Required */
		minorVersion: FormControl<string | null | undefined>,
		status: FormControl<TemplateVersionStatus | null | undefined>,

		/** Required */
		templateName: FormControl<string | null | undefined>,
	}
	export function CreateUpdateEnvironmentTemplateVersionInputFormGroup() {
		return new FormGroup<UpdateEnvironmentTemplateVersionInputFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			majorVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			minorVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<TemplateVersionStatus | null | undefined>(undefined),
			templateName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateServiceOutput {

		/** Required */
		service: Service;
	}
	export interface UpdateServiceOutputFormProperties {
	}
	export function CreateUpdateServiceOutputFormGroup() {
		return new FormGroup<UpdateServiceOutputFormProperties>({
		});

	}

	export interface UpdateServiceInput {
		description?: string;

		/** Required */
		name: string;
		spec?: string;
	}
	export interface UpdateServiceInputFormProperties {
		description: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
		spec: FormControl<string | null | undefined>,
	}
	export function CreateUpdateServiceInputFormGroup() {
		return new FormGroup<UpdateServiceInputFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			spec: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateServiceInstanceOutput {

		/** Required */
		serviceInstance: ServiceInstance;
	}
	export interface UpdateServiceInstanceOutputFormProperties {
	}
	export function CreateUpdateServiceInstanceOutputFormGroup() {
		return new FormGroup<UpdateServiceInstanceOutputFormProperties>({
		});

	}

	export interface UpdateServiceInstanceInput {
		clientToken?: string;

		/** Required */
		deploymentType: DeploymentUpdateType;

		/** Required */
		name: string;

		/** Required */
		serviceName: string;
		spec?: string;
		templateMajorVersion?: string;
		templateMinorVersion?: string;
	}
	export interface UpdateServiceInstanceInputFormProperties {
		clientToken: FormControl<string | null | undefined>,

		/** Required */
		deploymentType: FormControl<DeploymentUpdateType | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		serviceName: FormControl<string | null | undefined>,
		spec: FormControl<string | null | undefined>,
		templateMajorVersion: FormControl<string | null | undefined>,
		templateMinorVersion: FormControl<string | null | undefined>,
	}
	export function CreateUpdateServiceInstanceInputFormGroup() {
		return new FormGroup<UpdateServiceInstanceInputFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined),
			deploymentType: new FormControl<DeploymentUpdateType | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			serviceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			spec: new FormControl<string | null | undefined>(undefined),
			templateMajorVersion: new FormControl<string | null | undefined>(undefined),
			templateMinorVersion: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateServicePipelineOutput {

		/** Required */
		pipeline: ServicePipeline;
	}
	export interface UpdateServicePipelineOutputFormProperties {
	}
	export function CreateUpdateServicePipelineOutputFormGroup() {
		return new FormGroup<UpdateServicePipelineOutputFormProperties>({
		});

	}

	export interface UpdateServicePipelineInput {

		/** Required */
		deploymentType: DeploymentUpdateType;

		/** Required */
		serviceName: string;

		/** Required */
		spec: string;
		templateMajorVersion?: string;
		templateMinorVersion?: string;
	}
	export interface UpdateServicePipelineInputFormProperties {

		/** Required */
		deploymentType: FormControl<DeploymentUpdateType | null | undefined>,

		/** Required */
		serviceName: FormControl<string | null | undefined>,

		/** Required */
		spec: FormControl<string | null | undefined>,
		templateMajorVersion: FormControl<string | null | undefined>,
		templateMinorVersion: FormControl<string | null | undefined>,
	}
	export function CreateUpdateServicePipelineInputFormGroup() {
		return new FormGroup<UpdateServicePipelineInputFormProperties>({
			deploymentType: new FormControl<DeploymentUpdateType | null | undefined>(undefined, [Validators.required]),
			serviceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			spec: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			templateMajorVersion: new FormControl<string | null | undefined>(undefined),
			templateMinorVersion: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateServiceSyncBlockerOutput {
		serviceInstanceName?: string;

		/** Required */
		serviceName: string;

		/** Required */
		serviceSyncBlocker: SyncBlocker;
	}
	export interface UpdateServiceSyncBlockerOutputFormProperties {
		serviceInstanceName: FormControl<string | null | undefined>,

		/** Required */
		serviceName: FormControl<string | null | undefined>,
	}
	export function CreateUpdateServiceSyncBlockerOutputFormGroup() {
		return new FormGroup<UpdateServiceSyncBlockerOutputFormProperties>({
			serviceInstanceName: new FormControl<string | null | undefined>(undefined),
			serviceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateServiceSyncBlockerInput {

		/** Required */
		id: string;

		/** Required */
		resolvedReason: string;
	}
	export interface UpdateServiceSyncBlockerInputFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		resolvedReason: FormControl<string | null | undefined>,
	}
	export function CreateUpdateServiceSyncBlockerInputFormGroup() {
		return new FormGroup<UpdateServiceSyncBlockerInputFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resolvedReason: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateServiceSyncConfigOutput {
		serviceSyncConfig?: ServiceSyncConfig;
	}
	export interface UpdateServiceSyncConfigOutputFormProperties {
	}
	export function CreateUpdateServiceSyncConfigOutputFormGroup() {
		return new FormGroup<UpdateServiceSyncConfigOutputFormProperties>({
		});

	}

	export interface UpdateServiceSyncConfigInput {

		/** Required */
		branch: string;

		/** Required */
		filePath: string;

		/** Required */
		repositoryName: string;

		/** Required */
		repositoryProvider: RepositoryProvider;

		/** Required */
		serviceName: string;
	}
	export interface UpdateServiceSyncConfigInputFormProperties {

		/** Required */
		branch: FormControl<string | null | undefined>,

		/** Required */
		filePath: FormControl<string | null | undefined>,

		/** Required */
		repositoryName: FormControl<string | null | undefined>,

		/** Required */
		repositoryProvider: FormControl<RepositoryProvider | null | undefined>,

		/** Required */
		serviceName: FormControl<string | null | undefined>,
	}
	export function CreateUpdateServiceSyncConfigInputFormGroup() {
		return new FormGroup<UpdateServiceSyncConfigInputFormProperties>({
			branch: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			filePath: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			repositoryName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			repositoryProvider: new FormControl<RepositoryProvider | null | undefined>(undefined, [Validators.required]),
			serviceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateServiceTemplateOutput {

		/** Required */
		serviceTemplate: ServiceTemplate;
	}
	export interface UpdateServiceTemplateOutputFormProperties {
	}
	export function CreateUpdateServiceTemplateOutputFormGroup() {
		return new FormGroup<UpdateServiceTemplateOutputFormProperties>({
		});

	}

	export interface UpdateServiceTemplateInput {
		description?: string;
		displayName?: string;

		/** Required */
		name: string;
	}
	export interface UpdateServiceTemplateInputFormProperties {
		description: FormControl<string | null | undefined>,
		displayName: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
	}
	export function CreateUpdateServiceTemplateInputFormGroup() {
		return new FormGroup<UpdateServiceTemplateInputFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateServiceTemplateVersionOutput {

		/** Required */
		serviceTemplateVersion: ServiceTemplateVersion;
	}
	export interface UpdateServiceTemplateVersionOutputFormProperties {
	}
	export function CreateUpdateServiceTemplateVersionOutputFormGroup() {
		return new FormGroup<UpdateServiceTemplateVersionOutputFormProperties>({
		});

	}

	export interface UpdateServiceTemplateVersionInput {
		compatibleEnvironmentTemplates?: Array<CompatibleEnvironmentTemplateInput>;
		description?: string;

		/** Required */
		majorVersion: string;

		/** Required */
		minorVersion: string;
		status?: TemplateVersionStatus;
		supportedComponentSources?: Array<ServiceTemplateSupportedComponentSourceType>;

		/** Required */
		templateName: string;
	}
	export interface UpdateServiceTemplateVersionInputFormProperties {
		description: FormControl<string | null | undefined>,

		/** Required */
		majorVersion: FormControl<string | null | undefined>,

		/** Required */
		minorVersion: FormControl<string | null | undefined>,
		status: FormControl<TemplateVersionStatus | null | undefined>,

		/** Required */
		templateName: FormControl<string | null | undefined>,
	}
	export function CreateUpdateServiceTemplateVersionInputFormGroup() {
		return new FormGroup<UpdateServiceTemplateVersionInputFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			majorVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			minorVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<TemplateVersionStatus | null | undefined>(undefined),
			templateName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateTemplateSyncConfigOutput {
		templateSyncConfig?: TemplateSyncConfig;
	}
	export interface UpdateTemplateSyncConfigOutputFormProperties {
	}
	export function CreateUpdateTemplateSyncConfigOutputFormGroup() {
		return new FormGroup<UpdateTemplateSyncConfigOutputFormProperties>({
		});

	}

	export interface UpdateTemplateSyncConfigInput {

		/** Required */
		branch: string;

		/** Required */
		repositoryName: string;

		/** Required */
		repositoryProvider: RepositoryProvider;
		subdirectory?: string;

		/** Required */
		templateName: string;

		/** Required */
		templateType: TemplateType;
	}
	export interface UpdateTemplateSyncConfigInputFormProperties {

		/** Required */
		branch: FormControl<string | null | undefined>,

		/** Required */
		repositoryName: FormControl<string | null | undefined>,

		/** Required */
		repositoryProvider: FormControl<RepositoryProvider | null | undefined>,
		subdirectory: FormControl<string | null | undefined>,

		/** Required */
		templateName: FormControl<string | null | undefined>,

		/** Required */
		templateType: FormControl<TemplateType | null | undefined>,
	}
	export function CreateUpdateTemplateSyncConfigInputFormGroup() {
		return new FormGroup<UpdateTemplateSyncConfigInputFormProperties>({
			branch: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			repositoryName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			repositoryProvider: new FormControl<RepositoryProvider | null | undefined>(undefined, [Validators.required]),
			subdirectory: new FormControl<string | null | undefined>(undefined),
			templateName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			templateType: new FormControl<TemplateType | null | undefined>(undefined, [Validators.required]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p>In a management account, an environment account connection request is accepted. When the environment account connection request is accepted, Proton can use the associated IAM role to provision environment infrastructure resources in the associated environment account.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-env-account-connections.html">Environment account connections</a> in the <i>Proton User guide</i>.</p>
		 * Post #X-Amz-Target=AwsProton20200720.AcceptEnvironmentAccountConnection
		 * @return {AcceptEnvironmentAccountConnectionOutput} Success
		 */
		AcceptEnvironmentAccountConnection(requestBody: AcceptEnvironmentAccountConnectionInput): Observable<AcceptEnvironmentAccountConnectionOutput> {
			return this.http.post<AcceptEnvironmentAccountConnectionOutput>(this.baseUri + '#X-Amz-Target=AwsProton20200720.AcceptEnvironmentAccountConnection', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Attempts to cancel a component deployment (for a component that is in the <code>IN_PROGRESS</code> deployment status).</p> <p>For more information about components, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-components.html">Proton components</a> in the <i>Proton User Guide</i>.</p>
		 * Post #X-Amz-Target=AwsProton20200720.CancelComponentDeployment
		 * @return {CancelComponentDeploymentOutput} Success
		 */
		CancelComponentDeployment(requestBody: CancelComponentDeploymentInput): Observable<CancelComponentDeploymentOutput> {
			return this.http.post<CancelComponentDeploymentOutput>(this.baseUri + '#X-Amz-Target=AwsProton20200720.CancelComponentDeployment', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Attempts to cancel an environment deployment on an <a>UpdateEnvironment</a> action, if the deployment is <code>IN_PROGRESS</code>. For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-env-update.html">Update an environment</a> in the <i>Proton User guide</i>.</p> <p>The following list includes potential cancellation scenarios.</p> <ul> <li> <p>If the cancellation attempt succeeds, the resulting deployment state is <code>CANCELLED</code>.</p> </li> <li> <p>If the cancellation attempt fails, the resulting deployment state is <code>FAILED</code>.</p> </li> <li> <p>If the current <a>UpdateEnvironment</a> action succeeds before the cancellation attempt starts, the resulting deployment state is <code>SUCCEEDED</code> and the cancellation attempt has no effect.</p> </li> </ul>
		 * Post #X-Amz-Target=AwsProton20200720.CancelEnvironmentDeployment
		 * @return {CancelEnvironmentDeploymentOutput} Success
		 */
		CancelEnvironmentDeployment(requestBody: CancelEnvironmentDeploymentInput): Observable<CancelEnvironmentDeploymentOutput> {
			return this.http.post<CancelEnvironmentDeploymentOutput>(this.baseUri + '#X-Amz-Target=AwsProton20200720.CancelEnvironmentDeployment', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Attempts to cancel a service instance deployment on an <a>UpdateServiceInstance</a> action, if the deployment is <code>IN_PROGRESS</code>. For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-svc-instance-update.html">Update a service instance</a> in the <i>Proton User guide</i>.</p> <p>The following list includes potential cancellation scenarios.</p> <ul> <li> <p>If the cancellation attempt succeeds, the resulting deployment state is <code>CANCELLED</code>.</p> </li> <li> <p>If the cancellation attempt fails, the resulting deployment state is <code>FAILED</code>.</p> </li> <li> <p>If the current <a>UpdateServiceInstance</a> action succeeds before the cancellation attempt starts, the resulting deployment state is <code>SUCCEEDED</code> and the cancellation attempt has no effect.</p> </li> </ul>
		 * Post #X-Amz-Target=AwsProton20200720.CancelServiceInstanceDeployment
		 * @return {CancelServiceInstanceDeploymentOutput} Success
		 */
		CancelServiceInstanceDeployment(requestBody: CancelServiceInstanceDeploymentInput): Observable<CancelServiceInstanceDeploymentOutput> {
			return this.http.post<CancelServiceInstanceDeploymentOutput>(this.baseUri + '#X-Amz-Target=AwsProton20200720.CancelServiceInstanceDeployment', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Attempts to cancel a service pipeline deployment on an <a>UpdateServicePipeline</a> action, if the deployment is <code>IN_PROGRESS</code>. For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-svc-pipeline-update.html">Update a service pipeline</a> in the <i>Proton User guide</i>.</p> <p>The following list includes potential cancellation scenarios.</p> <ul> <li> <p>If the cancellation attempt succeeds, the resulting deployment state is <code>CANCELLED</code>.</p> </li> <li> <p>If the cancellation attempt fails, the resulting deployment state is <code>FAILED</code>.</p> </li> <li> <p>If the current <a>UpdateServicePipeline</a> action succeeds before the cancellation attempt starts, the resulting deployment state is <code>SUCCEEDED</code> and the cancellation attempt has no effect.</p> </li> </ul>
		 * Post #X-Amz-Target=AwsProton20200720.CancelServicePipelineDeployment
		 * @return {CancelServicePipelineDeploymentOutput} Success
		 */
		CancelServicePipelineDeployment(requestBody: CancelServicePipelineDeploymentInput): Observable<CancelServicePipelineDeploymentOutput> {
			return this.http.post<CancelServicePipelineDeploymentOutput>(this.baseUri + '#X-Amz-Target=AwsProton20200720.CancelServicePipelineDeployment', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Create an Proton component. A component is an infrastructure extension for a service instance.</p> <p>For more information about components, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-components.html">Proton components</a> in the <i>Proton User Guide</i>.</p>
		 * Post #X-Amz-Target=AwsProton20200720.CreateComponent
		 * @return {CreateComponentOutput} Success
		 */
		CreateComponent(requestBody: CreateComponentInput): Observable<CreateComponentOutput> {
			return this.http.post<CreateComponentOutput>(this.baseUri + '#X-Amz-Target=AwsProton20200720.CreateComponent', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deploy a new environment. An Proton environment is created from an environment template that defines infrastructure and resources that can be shared across services.</p> <p class="title"> <b>You can provision environments using the following methods:</b> </p> <ul> <li> <p>Amazon Web Services-managed provisioning: Proton makes direct calls to provision your resources.</p> </li> <li> <p>Self-managed provisioning: Proton makes pull requests on your repository to provide compiled infrastructure as code (IaC) files that your IaC engine uses to provision resources.</p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-environments.html">Environments</a> and <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-works-prov-methods.html">Provisioning methods</a> in the <i>Proton User Guide</i>.</p>
		 * Post #X-Amz-Target=AwsProton20200720.CreateEnvironment
		 * @return {CreateEnvironmentOutput} Success
		 */
		CreateEnvironment(requestBody: CreateEnvironmentInput): Observable<CreateEnvironmentOutput> {
			return this.http.post<CreateEnvironmentOutput>(this.baseUri + '#X-Amz-Target=AwsProton20200720.CreateEnvironment', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Create an environment account connection in an environment account so that environment infrastructure resources can be provisioned in the environment account from a management account.</p> <p>An environment account connection is a secure bi-directional connection between a <i>management account</i> and an <i>environment account</i> that maintains authorization and permissions. For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-env-account-connections.html">Environment account connections</a> in the <i>Proton User guide</i>.</p>
		 * Post #X-Amz-Target=AwsProton20200720.CreateEnvironmentAccountConnection
		 * @return {CreateEnvironmentAccountConnectionOutput} Success
		 */
		CreateEnvironmentAccountConnection(requestBody: CreateEnvironmentAccountConnectionInput): Observable<CreateEnvironmentAccountConnectionOutput> {
			return this.http.post<CreateEnvironmentAccountConnectionOutput>(this.baseUri + '#X-Amz-Target=AwsProton20200720.CreateEnvironmentAccountConnection', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Create an environment template for Proton. For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-templates.html">Environment Templates</a> in the <i>Proton User Guide</i>.</p> <p>You can create an environment template in one of the two following ways:</p> <ul> <li> <p>Register and publish a <i>standard</i> environment template that instructs Proton to deploy and manage environment infrastructure.</p> </li> <li> <p>Register and publish a <i>customer managed</i> environment template that connects Proton to your existing provisioned infrastructure that you manage. Proton <i>doesn't</i> manage your existing provisioned infrastructure. To create an environment template for customer provisioned and managed infrastructure, include the <code>provisioning</code> parameter and set the value to <code>CUSTOMER_MANAGED</code>. For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/template-create.html">Register and publish an environment template</a> in the <i>Proton User Guide</i>.</p> </li> </ul>
		 * Post #X-Amz-Target=AwsProton20200720.CreateEnvironmentTemplate
		 * @return {CreateEnvironmentTemplateOutput} Success
		 */
		CreateEnvironmentTemplate(requestBody: CreateEnvironmentTemplateInput): Observable<CreateEnvironmentTemplateOutput> {
			return this.http.post<CreateEnvironmentTemplateOutput>(this.baseUri + '#X-Amz-Target=AwsProton20200720.CreateEnvironmentTemplate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Create a new major or minor version of an environment template. A major version of an environment template is a version that <i>isn't</i> backwards compatible. A minor version of an environment template is a version that's backwards compatible within its major version.
		 * Post #X-Amz-Target=AwsProton20200720.CreateEnvironmentTemplateVersion
		 * @return {CreateEnvironmentTemplateVersionOutput} Success
		 */
		CreateEnvironmentTemplateVersion(requestBody: CreateEnvironmentTemplateVersionInput): Observable<CreateEnvironmentTemplateVersionOutput> {
			return this.http.post<CreateEnvironmentTemplateVersionOutput>(this.baseUri + '#X-Amz-Target=AwsProton20200720.CreateEnvironmentTemplateVersion', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Create and register a link to a repository. Proton uses the link to repeatedly access the repository, to either push to it (self-managed provisioning) or pull from it (template sync). You can share a linked repository across multiple resources (like environments using self-managed provisioning, or synced templates). When you create a repository link, Proton creates a <a href="https://docs.aws.amazon.com/proton/latest/userguide/using-service-linked-roles.html">service-linked role</a> for you.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-works-prov-methods.html#ag-works-prov-methods-self">Self-managed provisioning</a>, <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-template-authoring.html#ag-template-bundles">Template bundles</a>, and <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-template-sync-configs.html">Template sync configurations</a> in the <i>Proton User Guide</i>.</p>
		 * Post #X-Amz-Target=AwsProton20200720.CreateRepository
		 * @return {CreateRepositoryOutput} Success
		 */
		CreateRepository(requestBody: CreateRepositoryInput): Observable<CreateRepositoryOutput> {
			return this.http.post<CreateRepositoryOutput>(this.baseUri + '#X-Amz-Target=AwsProton20200720.CreateRepository', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Create an Proton service. An Proton service is an instantiation of a service template and often includes several service instances and pipeline. For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-services.html">Services</a> in the <i>Proton User Guide</i>.
		 * Post #X-Amz-Target=AwsProton20200720.CreateService
		 * @return {CreateServiceOutput} Success
		 */
		CreateService(requestBody: CreateServiceInput): Observable<CreateServiceOutput> {
			return this.http.post<CreateServiceOutput>(this.baseUri + '#X-Amz-Target=AwsProton20200720.CreateService', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Create a service instance.
		 * Post #X-Amz-Target=AwsProton20200720.CreateServiceInstance
		 * @return {CreateServiceInstanceOutput} Success
		 */
		CreateServiceInstance(requestBody: CreateServiceInstanceInput): Observable<CreateServiceInstanceOutput> {
			return this.http.post<CreateServiceInstanceOutput>(this.baseUri + '#X-Amz-Target=AwsProton20200720.CreateServiceInstance', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Create the Proton Ops configuration file.
		 * Post #X-Amz-Target=AwsProton20200720.CreateServiceSyncConfig
		 * @return {CreateServiceSyncConfigOutput} Success
		 */
		CreateServiceSyncConfig(requestBody: CreateServiceSyncConfigInput): Observable<CreateServiceSyncConfigOutput> {
			return this.http.post<CreateServiceSyncConfigOutput>(this.baseUri + '#X-Amz-Target=AwsProton20200720.CreateServiceSyncConfig', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Create a service template. The administrator creates a service template to define standardized infrastructure and an optional CI/CD service pipeline. Developers, in turn, select the service template from Proton. If the selected service template includes a service pipeline definition, they provide a link to their source code repository. Proton then deploys and manages the infrastructure defined by the selected service template. For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-templates.html">Proton templates</a> in the <i>Proton User Guide</i>.
		 * Post #X-Amz-Target=AwsProton20200720.CreateServiceTemplate
		 * @return {CreateServiceTemplateOutput} Success
		 */
		CreateServiceTemplate(requestBody: CreateServiceTemplateInput): Observable<CreateServiceTemplateOutput> {
			return this.http.post<CreateServiceTemplateOutput>(this.baseUri + '#X-Amz-Target=AwsProton20200720.CreateServiceTemplate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Create a new major or minor version of a service template. A major version of a service template is a version that <i>isn't</i> backward compatible. A minor version of a service template is a version that's backward compatible within its major version.
		 * Post #X-Amz-Target=AwsProton20200720.CreateServiceTemplateVersion
		 * @return {CreateServiceTemplateVersionOutput} Success
		 */
		CreateServiceTemplateVersion(requestBody: CreateServiceTemplateVersionInput): Observable<CreateServiceTemplateVersionOutput> {
			return this.http.post<CreateServiceTemplateVersionOutput>(this.baseUri + '#X-Amz-Target=AwsProton20200720.CreateServiceTemplateVersion', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Set up a template to create new template versions automatically by tracking a linked repository. A linked repository is a repository that has been registered with Proton. For more information, see <a>CreateRepository</a>.</p> <p>When a commit is pushed to your linked repository, Proton checks for changes to your repository template bundles. If it detects a template bundle change, a new major or minor version of its template is created, if the version doesn’t already exist. For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-template-sync-configs.html">Template sync configurations</a> in the <i>Proton User Guide</i>.</p>
		 * Post #X-Amz-Target=AwsProton20200720.CreateTemplateSyncConfig
		 * @return {CreateTemplateSyncConfigOutput} Success
		 */
		CreateTemplateSyncConfig(requestBody: CreateTemplateSyncConfigInput): Observable<CreateTemplateSyncConfigOutput> {
			return this.http.post<CreateTemplateSyncConfigOutput>(this.baseUri + '#X-Amz-Target=AwsProton20200720.CreateTemplateSyncConfig', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Delete an Proton component resource.</p> <p>For more information about components, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-components.html">Proton components</a> in the <i>Proton User Guide</i>.</p>
		 * Post #X-Amz-Target=AwsProton20200720.DeleteComponent
		 * @return {DeleteComponentOutput} Success
		 */
		DeleteComponent(requestBody: DeleteComponentInput): Observable<DeleteComponentOutput> {
			return this.http.post<DeleteComponentOutput>(this.baseUri + '#X-Amz-Target=AwsProton20200720.DeleteComponent', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete the deployment.
		 * Post #X-Amz-Target=AwsProton20200720.DeleteDeployment
		 * @return {DeleteDeploymentOutput} Success
		 */
		DeleteDeployment(requestBody: DeleteDeploymentInput): Observable<DeleteDeploymentOutput> {
			return this.http.post<DeleteDeploymentOutput>(this.baseUri + '#X-Amz-Target=AwsProton20200720.DeleteDeployment', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete an environment.
		 * Post #X-Amz-Target=AwsProton20200720.DeleteEnvironment
		 * @return {DeleteEnvironmentOutput} Success
		 */
		DeleteEnvironment(requestBody: DeleteEnvironmentInput): Observable<DeleteEnvironmentOutput> {
			return this.http.post<DeleteEnvironmentOutput>(this.baseUri + '#X-Amz-Target=AwsProton20200720.DeleteEnvironment', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>In an environment account, delete an environment account connection.</p> <p>After you delete an environment account connection that’s in use by an Proton environment, Proton <i>can’t</i> manage the environment infrastructure resources until a new environment account connection is accepted for the environment account and associated environment. You're responsible for cleaning up provisioned resources that remain without an environment connection.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-env-account-connections.html">Environment account connections</a> in the <i>Proton User guide</i>.</p>
		 * Post #X-Amz-Target=AwsProton20200720.DeleteEnvironmentAccountConnection
		 * @return {DeleteEnvironmentAccountConnectionOutput} Success
		 */
		DeleteEnvironmentAccountConnection(requestBody: DeleteEnvironmentAccountConnectionInput): Observable<DeleteEnvironmentAccountConnectionOutput> {
			return this.http.post<DeleteEnvironmentAccountConnectionOutput>(this.baseUri + '#X-Amz-Target=AwsProton20200720.DeleteEnvironmentAccountConnection', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * If no other major or minor versions of an environment template exist, delete the environment template.
		 * Post #X-Amz-Target=AwsProton20200720.DeleteEnvironmentTemplate
		 * @return {DeleteEnvironmentTemplateOutput} Success
		 */
		DeleteEnvironmentTemplate(requestBody: DeleteEnvironmentTemplateInput): Observable<DeleteEnvironmentTemplateOutput> {
			return this.http.post<DeleteEnvironmentTemplateOutput>(this.baseUri + '#X-Amz-Target=AwsProton20200720.DeleteEnvironmentTemplate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>If no other minor versions of an environment template exist, delete a major version of the environment template if it's not the <code>Recommended</code> version. Delete the <code>Recommended</code> version of the environment template if no other major versions or minor versions of the environment template exist. A major version of an environment template is a version that's not backward compatible.</p> <p>Delete a minor version of an environment template if it <i>isn't</i> the <code>Recommended</code> version. Delete a <code>Recommended</code> minor version of the environment template if no other minor versions of the environment template exist. A minor version of an environment template is a version that's backward compatible.</p>
		 * Post #X-Amz-Target=AwsProton20200720.DeleteEnvironmentTemplateVersion
		 * @return {DeleteEnvironmentTemplateVersionOutput} Success
		 */
		DeleteEnvironmentTemplateVersion(requestBody: DeleteEnvironmentTemplateVersionInput): Observable<DeleteEnvironmentTemplateVersionOutput> {
			return this.http.post<DeleteEnvironmentTemplateVersionOutput>(this.baseUri + '#X-Amz-Target=AwsProton20200720.DeleteEnvironmentTemplateVersion', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * De-register and unlink your repository.
		 * Post #X-Amz-Target=AwsProton20200720.DeleteRepository
		 * @return {DeleteRepositoryOutput} Success
		 */
		DeleteRepository(requestBody: DeleteRepositoryInput): Observable<DeleteRepositoryOutput> {
			return this.http.post<DeleteRepositoryOutput>(this.baseUri + '#X-Amz-Target=AwsProton20200720.DeleteRepository', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Delete a service, with its instances and pipeline.</p> <note> <p>You can't delete a service if it has any service instances that have components attached to them.</p> <p>For more information about components, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-components.html">Proton components</a> in the <i>Proton User Guide</i>.</p> </note>
		 * Post #X-Amz-Target=AwsProton20200720.DeleteService
		 * @return {DeleteServiceOutput} Success
		 */
		DeleteService(requestBody: DeleteServiceInput): Observable<DeleteServiceOutput> {
			return this.http.post<DeleteServiceOutput>(this.baseUri + '#X-Amz-Target=AwsProton20200720.DeleteService', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete the Proton Ops file.
		 * Post #X-Amz-Target=AwsProton20200720.DeleteServiceSyncConfig
		 * @return {DeleteServiceSyncConfigOutput} Success
		 */
		DeleteServiceSyncConfig(requestBody: DeleteServiceSyncConfigInput): Observable<DeleteServiceSyncConfigOutput> {
			return this.http.post<DeleteServiceSyncConfigOutput>(this.baseUri + '#X-Amz-Target=AwsProton20200720.DeleteServiceSyncConfig', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * If no other major or minor versions of the service template exist, delete the service template.
		 * Post #X-Amz-Target=AwsProton20200720.DeleteServiceTemplate
		 * @return {DeleteServiceTemplateOutput} Success
		 */
		DeleteServiceTemplate(requestBody: DeleteServiceTemplateInput): Observable<DeleteServiceTemplateOutput> {
			return this.http.post<DeleteServiceTemplateOutput>(this.baseUri + '#X-Amz-Target=AwsProton20200720.DeleteServiceTemplate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>If no other minor versions of a service template exist, delete a major version of the service template if it's not the <code>Recommended</code> version. Delete the <code>Recommended</code> version of the service template if no other major versions or minor versions of the service template exist. A major version of a service template is a version that <i>isn't</i> backwards compatible.</p> <p>Delete a minor version of a service template if it's not the <code>Recommended</code> version. Delete a <code>Recommended</code> minor version of the service template if no other minor versions of the service template exist. A minor version of a service template is a version that's backwards compatible.</p>
		 * Post #X-Amz-Target=AwsProton20200720.DeleteServiceTemplateVersion
		 * @return {DeleteServiceTemplateVersionOutput} Success
		 */
		DeleteServiceTemplateVersion(requestBody: DeleteServiceTemplateVersionInput): Observable<DeleteServiceTemplateVersionOutput> {
			return this.http.post<DeleteServiceTemplateVersionOutput>(this.baseUri + '#X-Amz-Target=AwsProton20200720.DeleteServiceTemplateVersion', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete a template sync configuration.
		 * Post #X-Amz-Target=AwsProton20200720.DeleteTemplateSyncConfig
		 * @return {DeleteTemplateSyncConfigOutput} Success
		 */
		DeleteTemplateSyncConfig(requestBody: DeleteTemplateSyncConfigInput): Observable<DeleteTemplateSyncConfigOutput> {
			return this.http.post<DeleteTemplateSyncConfigOutput>(this.baseUri + '#X-Amz-Target=AwsProton20200720.DeleteTemplateSyncConfig', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get detail data for Proton account-wide settings.
		 * Post #X-Amz-Target=AwsProton20200720.GetAccountSettings
		 * @return {GetAccountSettingsOutput} Success
		 */
		GetAccountSettings(requestBody: GetAccountSettingsInput): Observable<GetAccountSettingsOutput> {
			return this.http.post<GetAccountSettingsOutput>(this.baseUri + '#X-Amz-Target=AwsProton20200720.GetAccountSettings', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Get detailed data for a component.</p> <p>For more information about components, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-components.html">Proton components</a> in the <i>Proton User Guide</i>.</p>
		 * Post #X-Amz-Target=AwsProton20200720.GetComponent
		 * @return {GetComponentOutput} Success
		 */
		GetComponent(requestBody: GetComponentInput): Observable<GetComponentOutput> {
			return this.http.post<GetComponentOutput>(this.baseUri + '#X-Amz-Target=AwsProton20200720.GetComponent', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get detailed data for a deployment.
		 * Post #X-Amz-Target=AwsProton20200720.GetDeployment
		 * @return {GetDeploymentOutput} Success
		 */
		GetDeployment(requestBody: GetDeploymentInput): Observable<GetDeploymentOutput> {
			return this.http.post<GetDeploymentOutput>(this.baseUri + '#X-Amz-Target=AwsProton20200720.GetDeployment', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get detailed data for an environment.
		 * Post #X-Amz-Target=AwsProton20200720.GetEnvironment
		 * @return {GetEnvironmentOutput} Success
		 */
		GetEnvironment(requestBody: GetEnvironmentInput): Observable<GetEnvironmentOutput> {
			return this.http.post<GetEnvironmentOutput>(this.baseUri + '#X-Amz-Target=AwsProton20200720.GetEnvironment', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>In an environment account, get the detailed data for an environment account connection.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-env-account-connections.html">Environment account connections</a> in the <i>Proton User guide</i>.</p>
		 * Post #X-Amz-Target=AwsProton20200720.GetEnvironmentAccountConnection
		 * @return {GetEnvironmentAccountConnectionOutput} Success
		 */
		GetEnvironmentAccountConnection(requestBody: GetEnvironmentAccountConnectionInput): Observable<GetEnvironmentAccountConnectionOutput> {
			return this.http.post<GetEnvironmentAccountConnectionOutput>(this.baseUri + '#X-Amz-Target=AwsProton20200720.GetEnvironmentAccountConnection', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get detailed data for an environment template.
		 * Post #X-Amz-Target=AwsProton20200720.GetEnvironmentTemplate
		 * @return {GetEnvironmentTemplateOutput} Success
		 */
		GetEnvironmentTemplate(requestBody: GetEnvironmentTemplateInput): Observable<GetEnvironmentTemplateOutput> {
			return this.http.post<GetEnvironmentTemplateOutput>(this.baseUri + '#X-Amz-Target=AwsProton20200720.GetEnvironmentTemplate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get detailed data for a major or minor version of an environment template.
		 * Post #X-Amz-Target=AwsProton20200720.GetEnvironmentTemplateVersion
		 * @return {GetEnvironmentTemplateVersionOutput} Success
		 */
		GetEnvironmentTemplateVersion(requestBody: GetEnvironmentTemplateVersionInput): Observable<GetEnvironmentTemplateVersionOutput> {
			return this.http.post<GetEnvironmentTemplateVersionOutput>(this.baseUri + '#X-Amz-Target=AwsProton20200720.GetEnvironmentTemplateVersion', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get detail data for a linked repository.
		 * Post #X-Amz-Target=AwsProton20200720.GetRepository
		 * @return {GetRepositoryOutput} Success
		 */
		GetRepository(requestBody: GetRepositoryInput): Observable<GetRepositoryOutput> {
			return this.http.post<GetRepositoryOutput>(this.baseUri + '#X-Amz-Target=AwsProton20200720.GetRepository', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Get the sync status of a repository used for Proton template sync. For more information about template sync, see .</p> <note> <p>A repository sync status isn't tied to the Proton Repository resource (or any other Proton resource). Therefore, tags on an Proton Repository resource have no effect on this action. Specifically, you can't use these tags to control access to this action using Attribute-based access control (ABAC).</p> <p>For more information about ABAC, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-tags">ABAC</a> in the <i>Proton User Guide</i>.</p> </note>
		 * Post #X-Amz-Target=AwsProton20200720.GetRepositorySyncStatus
		 * @return {GetRepositorySyncStatusOutput} Success
		 */
		GetRepositorySyncStatus(requestBody: GetRepositorySyncStatusInput): Observable<GetRepositorySyncStatusOutput> {
			return this.http.post<GetRepositorySyncStatusOutput>(this.baseUri + '#X-Amz-Target=AwsProton20200720.GetRepositorySyncStatus', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Get counts of Proton resources.</p> <p>For infrastructure-provisioning resources (environments, services, service instances, pipelines), the action returns staleness counts. A resource is stale when it's behind the recommended version of the Proton template that it uses and it needs an update to become current.</p> <p>The action returns staleness counts (counts of resources that are up-to-date, behind a template major version, or behind a template minor version), the total number of resources, and the number of resources that are in a failed state, grouped by resource type. Components, environments, and service templates return less information - see the <code>components</code>, <code>environments</code>, and <code>serviceTemplates</code> field descriptions.</p> <p>For context, the action also returns the total number of each type of Proton template in the Amazon Web Services account.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/monitoring-dashboard.html">Proton dashboard</a> in the <i>Proton User Guide</i>.</p>
		 * Post #X-Amz-Target=AwsProton20200720.GetResourcesSummary
		 * @return {GetResourcesSummaryOutput} Success
		 */
		GetResourcesSummary(requestBody: GetResourcesSummaryInput): Observable<GetResourcesSummaryOutput> {
			return this.http.post<GetResourcesSummaryOutput>(this.baseUri + '#X-Amz-Target=AwsProton20200720.GetResourcesSummary', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get detailed data for a service.
		 * Post #X-Amz-Target=AwsProton20200720.GetService
		 * @return {GetServiceOutput} Success
		 */
		GetService(requestBody: GetServiceInput): Observable<GetServiceOutput> {
			return this.http.post<GetServiceOutput>(this.baseUri + '#X-Amz-Target=AwsProton20200720.GetService', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get detailed data for a service instance. A service instance is an instantiation of service template and it runs in a specific environment.
		 * Post #X-Amz-Target=AwsProton20200720.GetServiceInstance
		 * @return {GetServiceInstanceOutput} Success
		 */
		GetServiceInstance(requestBody: GetServiceInstanceInput): Observable<GetServiceInstanceOutput> {
			return this.http.post<GetServiceInstanceOutput>(this.baseUri + '#X-Amz-Target=AwsProton20200720.GetServiceInstance', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get the status of the synced service instance.
		 * Post #X-Amz-Target=AwsProton20200720.GetServiceInstanceSyncStatus
		 * @return {GetServiceInstanceSyncStatusOutput} Success
		 */
		GetServiceInstanceSyncStatus(requestBody: GetServiceInstanceSyncStatusInput): Observable<GetServiceInstanceSyncStatusOutput> {
			return this.http.post<GetServiceInstanceSyncStatusOutput>(this.baseUri + '#X-Amz-Target=AwsProton20200720.GetServiceInstanceSyncStatus', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get detailed data for the service sync blocker summary.
		 * Post #X-Amz-Target=AwsProton20200720.GetServiceSyncBlockerSummary
		 * @return {GetServiceSyncBlockerSummaryOutput} Success
		 */
		GetServiceSyncBlockerSummary(requestBody: GetServiceSyncBlockerSummaryInput): Observable<GetServiceSyncBlockerSummaryOutput> {
			return this.http.post<GetServiceSyncBlockerSummaryOutput>(this.baseUri + '#X-Amz-Target=AwsProton20200720.GetServiceSyncBlockerSummary', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get detailed information for the service sync configuration.
		 * Post #X-Amz-Target=AwsProton20200720.GetServiceSyncConfig
		 * @return {GetServiceSyncConfigOutput} Success
		 */
		GetServiceSyncConfig(requestBody: GetServiceSyncConfigInput): Observable<GetServiceSyncConfigOutput> {
			return this.http.post<GetServiceSyncConfigOutput>(this.baseUri + '#X-Amz-Target=AwsProton20200720.GetServiceSyncConfig', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get detailed data for a service template.
		 * Post #X-Amz-Target=AwsProton20200720.GetServiceTemplate
		 * @return {GetServiceTemplateOutput} Success
		 */
		GetServiceTemplate(requestBody: GetServiceTemplateInput): Observable<GetServiceTemplateOutput> {
			return this.http.post<GetServiceTemplateOutput>(this.baseUri + '#X-Amz-Target=AwsProton20200720.GetServiceTemplate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get detailed data for a major or minor version of a service template.
		 * Post #X-Amz-Target=AwsProton20200720.GetServiceTemplateVersion
		 * @return {GetServiceTemplateVersionOutput} Success
		 */
		GetServiceTemplateVersion(requestBody: GetServiceTemplateVersionInput): Observable<GetServiceTemplateVersionOutput> {
			return this.http.post<GetServiceTemplateVersionOutput>(this.baseUri + '#X-Amz-Target=AwsProton20200720.GetServiceTemplateVersion', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get detail data for a template sync configuration.
		 * Post #X-Amz-Target=AwsProton20200720.GetTemplateSyncConfig
		 * @return {GetTemplateSyncConfigOutput} Success
		 */
		GetTemplateSyncConfig(requestBody: GetTemplateSyncConfigInput): Observable<GetTemplateSyncConfigOutput> {
			return this.http.post<GetTemplateSyncConfigOutput>(this.baseUri + '#X-Amz-Target=AwsProton20200720.GetTemplateSyncConfig', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get the status of a template sync.
		 * Post #X-Amz-Target=AwsProton20200720.GetTemplateSyncStatus
		 * @return {GetTemplateSyncStatusOutput} Success
		 */
		GetTemplateSyncStatus(requestBody: GetTemplateSyncStatusInput): Observable<GetTemplateSyncStatusOutput> {
			return this.http.post<GetTemplateSyncStatusOutput>(this.baseUri + '#X-Amz-Target=AwsProton20200720.GetTemplateSyncStatus', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Get a list of component Infrastructure as Code (IaC) outputs.</p> <p>For more information about components, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-components.html">Proton components</a> in the <i>Proton User Guide</i>.</p>
		 * Post #X-Amz-Target=AwsProton20200720.ListComponentOutputs
		 * @param {string} nextToken Pagination token
		 * @return {ListComponentOutputsOutput} Success
		 */
		ListComponentOutputs(nextToken: string | null | undefined, requestBody: ListComponentOutputsInput): Observable<ListComponentOutputsOutput> {
			return this.http.post<ListComponentOutputsOutput>(this.baseUri + '#X-Amz-Target=AwsProton20200720.ListComponentOutputs?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>List provisioned resources for a component with details.</p> <p>For more information about components, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-components.html">Proton components</a> in the <i>Proton User Guide</i>.</p>
		 * Post #X-Amz-Target=AwsProton20200720.ListComponentProvisionedResources
		 * @param {string} nextToken Pagination token
		 * @return {ListComponentProvisionedResourcesOutput} Success
		 */
		ListComponentProvisionedResources(nextToken: string | null | undefined, requestBody: ListComponentProvisionedResourcesInput): Observable<ListComponentProvisionedResourcesOutput> {
			return this.http.post<ListComponentProvisionedResourcesOutput>(this.baseUri + '#X-Amz-Target=AwsProton20200720.ListComponentProvisionedResources?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>List components with summary data. You can filter the result list by environment, service, or a single service instance.</p> <p>For more information about components, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-components.html">Proton components</a> in the <i>Proton User Guide</i>.</p>
		 * Post #X-Amz-Target=AwsProton20200720.ListComponents
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListComponentsOutput} Success
		 */
		ListComponents(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListComponentsInput): Observable<ListComponentsOutput> {
			return this.http.post<ListComponentsOutput>(this.baseUri + '#X-Amz-Target=AwsProton20200720.ListComponents?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List deployments. You can filter the result list by environment, service, or a single service instance.
		 * Post #X-Amz-Target=AwsProton20200720.ListDeployments
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListDeploymentsOutput} Success
		 */
		ListDeployments(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListDeploymentsInput): Observable<ListDeploymentsOutput> {
			return this.http.post<ListDeploymentsOutput>(this.baseUri + '#X-Amz-Target=AwsProton20200720.ListDeployments?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>View a list of environment account connections.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-env-account-connections.html">Environment account connections</a> in the <i>Proton User guide</i>.</p>
		 * Post #X-Amz-Target=AwsProton20200720.ListEnvironmentAccountConnections
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListEnvironmentAccountConnectionsOutput} Success
		 */
		ListEnvironmentAccountConnections(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListEnvironmentAccountConnectionsInput): Observable<ListEnvironmentAccountConnectionsOutput> {
			return this.http.post<ListEnvironmentAccountConnectionsOutput>(this.baseUri + '#X-Amz-Target=AwsProton20200720.ListEnvironmentAccountConnections?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List the infrastructure as code outputs for your environment.
		 * Post #X-Amz-Target=AwsProton20200720.ListEnvironmentOutputs
		 * @param {string} nextToken Pagination token
		 * @return {ListEnvironmentOutputsOutput} Success
		 */
		ListEnvironmentOutputs(nextToken: string | null | undefined, requestBody: ListEnvironmentOutputsInput): Observable<ListEnvironmentOutputsOutput> {
			return this.http.post<ListEnvironmentOutputsOutput>(this.baseUri + '#X-Amz-Target=AwsProton20200720.ListEnvironmentOutputs?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List the provisioned resources for your environment.
		 * Post #X-Amz-Target=AwsProton20200720.ListEnvironmentProvisionedResources
		 * @param {string} nextToken Pagination token
		 * @return {ListEnvironmentProvisionedResourcesOutput} Success
		 */
		ListEnvironmentProvisionedResources(nextToken: string | null | undefined, requestBody: ListEnvironmentProvisionedResourcesInput): Observable<ListEnvironmentProvisionedResourcesOutput> {
			return this.http.post<ListEnvironmentProvisionedResourcesOutput>(this.baseUri + '#X-Amz-Target=AwsProton20200720.ListEnvironmentProvisionedResources?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List major or minor versions of an environment template with detail data.
		 * Post #X-Amz-Target=AwsProton20200720.ListEnvironmentTemplateVersions
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListEnvironmentTemplateVersionsOutput} Success
		 */
		ListEnvironmentTemplateVersions(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListEnvironmentTemplateVersionsInput): Observable<ListEnvironmentTemplateVersionsOutput> {
			return this.http.post<ListEnvironmentTemplateVersionsOutput>(this.baseUri + '#X-Amz-Target=AwsProton20200720.ListEnvironmentTemplateVersions?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List environment templates.
		 * Post #X-Amz-Target=AwsProton20200720.ListEnvironmentTemplates
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListEnvironmentTemplatesOutput} Success
		 */
		ListEnvironmentTemplates(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListEnvironmentTemplatesInput): Observable<ListEnvironmentTemplatesOutput> {
			return this.http.post<ListEnvironmentTemplatesOutput>(this.baseUri + '#X-Amz-Target=AwsProton20200720.ListEnvironmentTemplates?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List environments with detail data summaries.
		 * Post #X-Amz-Target=AwsProton20200720.ListEnvironments
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListEnvironmentsOutput} Success
		 */
		ListEnvironments(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListEnvironmentsInput): Observable<ListEnvironmentsOutput> {
			return this.http.post<ListEnvironmentsOutput>(this.baseUri + '#X-Amz-Target=AwsProton20200720.ListEnvironments?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List linked repositories with detail data.
		 * Post #X-Amz-Target=AwsProton20200720.ListRepositories
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListRepositoriesOutput} Success
		 */
		ListRepositories(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListRepositoriesInput): Observable<ListRepositoriesOutput> {
			return this.http.post<ListRepositoriesOutput>(this.baseUri + '#X-Amz-Target=AwsProton20200720.ListRepositories?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List repository sync definitions with detail data.
		 * Post #X-Amz-Target=AwsProton20200720.ListRepositorySyncDefinitions
		 * @param {string} nextToken Pagination token
		 * @return {ListRepositorySyncDefinitionsOutput} Success
		 */
		ListRepositorySyncDefinitions(nextToken: string | null | undefined, requestBody: ListRepositorySyncDefinitionsInput): Observable<ListRepositorySyncDefinitionsOutput> {
			return this.http.post<ListRepositorySyncDefinitionsOutput>(this.baseUri + '#X-Amz-Target=AwsProton20200720.ListRepositorySyncDefinitions?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get a list service of instance Infrastructure as Code (IaC) outputs.
		 * Post #X-Amz-Target=AwsProton20200720.ListServiceInstanceOutputs
		 * @param {string} nextToken Pagination token
		 * @return {ListServiceInstanceOutputsOutput} Success
		 */
		ListServiceInstanceOutputs(nextToken: string | null | undefined, requestBody: ListServiceInstanceOutputsInput): Observable<ListServiceInstanceOutputsOutput> {
			return this.http.post<ListServiceInstanceOutputsOutput>(this.baseUri + '#X-Amz-Target=AwsProton20200720.ListServiceInstanceOutputs?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List provisioned resources for a service instance with details.
		 * Post #X-Amz-Target=AwsProton20200720.ListServiceInstanceProvisionedResources
		 * @param {string} nextToken Pagination token
		 * @return {ListServiceInstanceProvisionedResourcesOutput} Success
		 */
		ListServiceInstanceProvisionedResources(nextToken: string | null | undefined, requestBody: ListServiceInstanceProvisionedResourcesInput): Observable<ListServiceInstanceProvisionedResourcesOutput> {
			return this.http.post<ListServiceInstanceProvisionedResourcesOutput>(this.baseUri + '#X-Amz-Target=AwsProton20200720.ListServiceInstanceProvisionedResources?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List service instances with summary data. This action lists service instances of all services in the Amazon Web Services account.
		 * Post #X-Amz-Target=AwsProton20200720.ListServiceInstances
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListServiceInstancesOutput} Success
		 */
		ListServiceInstances(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListServiceInstancesInput): Observable<ListServiceInstancesOutput> {
			return this.http.post<ListServiceInstancesOutput>(this.baseUri + '#X-Amz-Target=AwsProton20200720.ListServiceInstances?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get a list of service pipeline Infrastructure as Code (IaC) outputs.
		 * Post #X-Amz-Target=AwsProton20200720.ListServicePipelineOutputs
		 * @param {string} nextToken Pagination token
		 * @return {ListServicePipelineOutputsOutput} Success
		 */
		ListServicePipelineOutputs(nextToken: string | null | undefined, requestBody: ListServicePipelineOutputsInput): Observable<ListServicePipelineOutputsOutput> {
			return this.http.post<ListServicePipelineOutputsOutput>(this.baseUri + '#X-Amz-Target=AwsProton20200720.ListServicePipelineOutputs?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List provisioned resources for a service and pipeline with details.
		 * Post #X-Amz-Target=AwsProton20200720.ListServicePipelineProvisionedResources
		 * @param {string} nextToken Pagination token
		 * @return {ListServicePipelineProvisionedResourcesOutput} Success
		 */
		ListServicePipelineProvisionedResources(nextToken: string | null | undefined, requestBody: ListServicePipelineProvisionedResourcesInput): Observable<ListServicePipelineProvisionedResourcesOutput> {
			return this.http.post<ListServicePipelineProvisionedResourcesOutput>(this.baseUri + '#X-Amz-Target=AwsProton20200720.ListServicePipelineProvisionedResources?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List major or minor versions of a service template with detail data.
		 * Post #X-Amz-Target=AwsProton20200720.ListServiceTemplateVersions
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListServiceTemplateVersionsOutput} Success
		 */
		ListServiceTemplateVersions(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListServiceTemplateVersionsInput): Observable<ListServiceTemplateVersionsOutput> {
			return this.http.post<ListServiceTemplateVersionsOutput>(this.baseUri + '#X-Amz-Target=AwsProton20200720.ListServiceTemplateVersions?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List service templates with detail data.
		 * Post #X-Amz-Target=AwsProton20200720.ListServiceTemplates
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListServiceTemplatesOutput} Success
		 */
		ListServiceTemplates(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListServiceTemplatesInput): Observable<ListServiceTemplatesOutput> {
			return this.http.post<ListServiceTemplatesOutput>(this.baseUri + '#X-Amz-Target=AwsProton20200720.ListServiceTemplates?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List services with summaries of detail data.
		 * Post #X-Amz-Target=AwsProton20200720.ListServices
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListServicesOutput} Success
		 */
		ListServices(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListServicesInput): Observable<ListServicesOutput> {
			return this.http.post<ListServicesOutput>(this.baseUri + '#X-Amz-Target=AwsProton20200720.ListServices?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List tags for a resource. For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/resources.html">Proton resources and tagging</a> in the <i>Proton User Guide</i>.
		 * Post #X-Amz-Target=AwsProton20200720.ListTagsForResource
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListTagsForResourceOutput} Success
		 */
		ListTagsForResource(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListTagsForResourceInput): Observable<ListTagsForResourceOutput> {
			return this.http.post<ListTagsForResourceOutput>(this.baseUri + '#X-Amz-Target=AwsProton20200720.ListTagsForResource?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Notify Proton of status changes to a provisioned resource when you use self-managed provisioning.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-works-prov-methods.html#ag-works-prov-methods-self">Self-managed provisioning</a> in the <i>Proton User Guide</i>.</p>
		 * Post #X-Amz-Target=AwsProton20200720.NotifyResourceDeploymentStatusChange
		 * @return {NotifyResourceDeploymentStatusChangeOutput} Success
		 */
		NotifyResourceDeploymentStatusChange(requestBody: NotifyResourceDeploymentStatusChangeInput): Observable<NotifyResourceDeploymentStatusChangeOutput> {
			return this.http.post<NotifyResourceDeploymentStatusChangeOutput>(this.baseUri + '#X-Amz-Target=AwsProton20200720.NotifyResourceDeploymentStatusChange', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>In a management account, reject an environment account connection from another environment account.</p> <p>After you reject an environment account connection request, you <i>can't</i> accept or use the rejected environment account connection.</p> <p>You <i>can’t</i> reject an environment account connection that's connected to an environment.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-env-account-connections.html">Environment account connections</a> in the <i>Proton User guide</i>.</p>
		 * Post #X-Amz-Target=AwsProton20200720.RejectEnvironmentAccountConnection
		 * @return {RejectEnvironmentAccountConnectionOutput} Success
		 */
		RejectEnvironmentAccountConnection(requestBody: RejectEnvironmentAccountConnectionInput): Observable<RejectEnvironmentAccountConnectionOutput> {
			return this.http.post<RejectEnvironmentAccountConnectionOutput>(this.baseUri + '#X-Amz-Target=AwsProton20200720.RejectEnvironmentAccountConnection', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Tag a resource. A tag is a key-value pair of metadata that you associate with an Proton resource.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/resources.html">Proton resources and tagging</a> in the <i>Proton User Guide</i>.</p>
		 * Post #X-Amz-Target=AwsProton20200720.TagResource
		 * @return {TagResourceOutput} Success
		 */
		TagResource(requestBody: TagResourceInput): Observable<TagResourceOutput> {
			return this.http.post<TagResourceOutput>(this.baseUri + '#X-Amz-Target=AwsProton20200720.TagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Remove a customer tag from a resource. A tag is a key-value pair of metadata associated with an Proton resource.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/resources.html">Proton resources and tagging</a> in the <i>Proton User Guide</i>.</p>
		 * Post #X-Amz-Target=AwsProton20200720.UntagResource
		 * @return {UntagResourceOutput} Success
		 */
		UntagResource(requestBody: UntagResourceInput): Observable<UntagResourceOutput> {
			return this.http.post<UntagResourceOutput>(this.baseUri + '#X-Amz-Target=AwsProton20200720.UntagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Update Proton settings that are used for multiple services in the Amazon Web Services account.
		 * Post #X-Amz-Target=AwsProton20200720.UpdateAccountSettings
		 * @return {UpdateAccountSettingsOutput} Success
		 */
		UpdateAccountSettings(requestBody: UpdateAccountSettingsInput): Observable<UpdateAccountSettingsOutput> {
			return this.http.post<UpdateAccountSettingsOutput>(this.baseUri + '#X-Amz-Target=AwsProton20200720.UpdateAccountSettings', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Update a component.</p> <p>There are a few modes for updating a component. The <code>deploymentType</code> field defines the mode.</p> <note> <p>You can't update a component while its deployment status, or the deployment status of a service instance attached to it, is <code>IN_PROGRESS</code>.</p> </note> <p>For more information about components, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-components.html">Proton components</a> in the <i>Proton User Guide</i>.</p>
		 * Post #X-Amz-Target=AwsProton20200720.UpdateComponent
		 * @return {UpdateComponentOutput} Success
		 */
		UpdateComponent(requestBody: UpdateComponentInput): Observable<UpdateComponentOutput> {
			return this.http.post<UpdateComponentOutput>(this.baseUri + '#X-Amz-Target=AwsProton20200720.UpdateComponent', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Update an environment.</p> <p>If the environment is associated with an environment account connection, <i>don't</i> update or include the <code>protonServiceRoleArn</code> and <code>provisioningRepository</code> parameter to update or connect to an environment account connection.</p> <p>You can only update to a new environment account connection if that connection was created in the same environment account that the current environment account connection was created in. The account connection must also be associated with the current environment.</p> <p>If the environment <i>isn't</i> associated with an environment account connection, <i>don't</i> update or include the <code>environmentAccountConnectionId</code> parameter. You <i>can't</i> update or connect the environment to an environment account connection if it <i>isn't</i> already associated with an environment connection.</p> <p>You can update either the <code>environmentAccountConnectionId</code> or <code>protonServiceRoleArn</code> parameter and value. You can’t update both.</p> <p>If the environment was configured for Amazon Web Services-managed provisioning, omit the <code>provisioningRepository</code> parameter.</p> <p>If the environment was configured for self-managed provisioning, specify the <code>provisioningRepository</code> parameter and omit the <code>protonServiceRoleArn</code> and <code>environmentAccountConnectionId</code> parameters.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-environments.html">Environments</a> and <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-works-prov-methods.html">Provisioning methods</a> in the <i>Proton User Guide</i>.</p> <p>There are four modes for updating an environment. The <code>deploymentType</code> field defines the mode.</p> <dl> <dt/> <dd> <p> <code>NONE</code> </p> <p>In this mode, a deployment <i>doesn't</i> occur. Only the requested metadata parameters are updated.</p> </dd> <dt/> <dd> <p> <code>CURRENT_VERSION</code> </p> <p>In this mode, the environment is deployed and updated with the new spec that you provide. Only requested parameters are updated. <i>Don’t</i> include minor or major version parameters when you use this <code>deployment-type</code>.</p> </dd> <dt/> <dd> <p> <code>MINOR_VERSION</code> </p> <p>In this mode, the environment is deployed and updated with the published, recommended (latest) minor version of the current major version in use, by default. You can also specify a different minor version of the current major version in use.</p> </dd> <dt/> <dd> <p> <code>MAJOR_VERSION</code> </p> <p>In this mode, the environment is deployed and updated with the published, recommended (latest) major and minor version of the current template, by default. You can also specify a different major version that's higher than the major version in use and a minor version.</p> </dd> </dl>
		 * Post #X-Amz-Target=AwsProton20200720.UpdateEnvironment
		 * @return {UpdateEnvironmentOutput} Success
		 */
		UpdateEnvironment(requestBody: UpdateEnvironmentInput): Observable<UpdateEnvironmentOutput> {
			return this.http.post<UpdateEnvironmentOutput>(this.baseUri + '#X-Amz-Target=AwsProton20200720.UpdateEnvironment', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>In an environment account, update an environment account connection to use a new IAM role.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-env-account-connections.html">Environment account connections</a> in the <i>Proton User guide</i>.</p>
		 * Post #X-Amz-Target=AwsProton20200720.UpdateEnvironmentAccountConnection
		 * @return {UpdateEnvironmentAccountConnectionOutput} Success
		 */
		UpdateEnvironmentAccountConnection(requestBody: UpdateEnvironmentAccountConnectionInput): Observable<UpdateEnvironmentAccountConnectionOutput> {
			return this.http.post<UpdateEnvironmentAccountConnectionOutput>(this.baseUri + '#X-Amz-Target=AwsProton20200720.UpdateEnvironmentAccountConnection', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Update an environment template.
		 * Post #X-Amz-Target=AwsProton20200720.UpdateEnvironmentTemplate
		 * @return {UpdateEnvironmentTemplateOutput} Success
		 */
		UpdateEnvironmentTemplate(requestBody: UpdateEnvironmentTemplateInput): Observable<UpdateEnvironmentTemplateOutput> {
			return this.http.post<UpdateEnvironmentTemplateOutput>(this.baseUri + '#X-Amz-Target=AwsProton20200720.UpdateEnvironmentTemplate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Update a major or minor version of an environment template.
		 * Post #X-Amz-Target=AwsProton20200720.UpdateEnvironmentTemplateVersion
		 * @return {UpdateEnvironmentTemplateVersionOutput} Success
		 */
		UpdateEnvironmentTemplateVersion(requestBody: UpdateEnvironmentTemplateVersionInput): Observable<UpdateEnvironmentTemplateVersionOutput> {
			return this.http.post<UpdateEnvironmentTemplateVersionOutput>(this.baseUri + '#X-Amz-Target=AwsProton20200720.UpdateEnvironmentTemplateVersion', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Edit a service description or use a spec to add and delete service instances.</p> <note> <p>Existing service instances and the service pipeline <i>can't</i> be edited using this API. They can only be deleted.</p> </note> <p>Use the <code>description</code> parameter to modify the description.</p> <p>Edit the <code>spec</code> parameter to add or delete instances.</p> <note> <p>You can't delete a service instance (remove it from the spec) if it has an attached component.</p> <p>For more information about components, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-components.html">Proton components</a> in the <i>Proton User Guide</i>.</p> </note>
		 * Post #X-Amz-Target=AwsProton20200720.UpdateService
		 * @return {UpdateServiceOutput} Success
		 */
		UpdateService(requestBody: UpdateServiceInput): Observable<UpdateServiceOutput> {
			return this.http.post<UpdateServiceOutput>(this.baseUri + '#X-Amz-Target=AwsProton20200720.UpdateService', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Update a service instance.</p> <p>There are a few modes for updating a service instance. The <code>deploymentType</code> field defines the mode.</p> <note> <p>You can't update a service instance while its deployment status, or the deployment status of a component attached to it, is <code>IN_PROGRESS</code>.</p> <p>For more information about components, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-components.html">Proton components</a> in the <i>Proton User Guide</i>.</p> </note>
		 * Post #X-Amz-Target=AwsProton20200720.UpdateServiceInstance
		 * @return {UpdateServiceInstanceOutput} Success
		 */
		UpdateServiceInstance(requestBody: UpdateServiceInstanceInput): Observable<UpdateServiceInstanceOutput> {
			return this.http.post<UpdateServiceInstanceOutput>(this.baseUri + '#X-Amz-Target=AwsProton20200720.UpdateServiceInstance', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Update the service pipeline.</p> <p>There are four modes for updating a service pipeline. The <code>deploymentType</code> field defines the mode.</p> <dl> <dt/> <dd> <p> <code>NONE</code> </p> <p>In this mode, a deployment <i>doesn't</i> occur. Only the requested metadata parameters are updated.</p> </dd> <dt/> <dd> <p> <code>CURRENT_VERSION</code> </p> <p>In this mode, the service pipeline is deployed and updated with the new spec that you provide. Only requested parameters are updated. <i>Don’t</i> include major or minor version parameters when you use this <code>deployment-type</code>.</p> </dd> <dt/> <dd> <p> <code>MINOR_VERSION</code> </p> <p>In this mode, the service pipeline is deployed and updated with the published, recommended (latest) minor version of the current major version in use, by default. You can specify a different minor version of the current major version in use.</p> </dd> <dt/> <dd> <p> <code>MAJOR_VERSION</code> </p> <p>In this mode, the service pipeline is deployed and updated with the published, recommended (latest) major and minor version of the current template by default. You can specify a different major version that's higher than the major version in use and a minor version.</p> </dd> </dl>
		 * Post #X-Amz-Target=AwsProton20200720.UpdateServicePipeline
		 * @return {UpdateServicePipelineOutput} Success
		 */
		UpdateServicePipeline(requestBody: UpdateServicePipelineInput): Observable<UpdateServicePipelineOutput> {
			return this.http.post<UpdateServicePipelineOutput>(this.baseUri + '#X-Amz-Target=AwsProton20200720.UpdateServicePipeline', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Update the service sync blocker by resolving it.
		 * Post #X-Amz-Target=AwsProton20200720.UpdateServiceSyncBlocker
		 * @return {UpdateServiceSyncBlockerOutput} Success
		 */
		UpdateServiceSyncBlocker(requestBody: UpdateServiceSyncBlockerInput): Observable<UpdateServiceSyncBlockerOutput> {
			return this.http.post<UpdateServiceSyncBlockerOutput>(this.baseUri + '#X-Amz-Target=AwsProton20200720.UpdateServiceSyncBlocker', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Update the Proton Ops config file.
		 * Post #X-Amz-Target=AwsProton20200720.UpdateServiceSyncConfig
		 * @return {UpdateServiceSyncConfigOutput} Success
		 */
		UpdateServiceSyncConfig(requestBody: UpdateServiceSyncConfigInput): Observable<UpdateServiceSyncConfigOutput> {
			return this.http.post<UpdateServiceSyncConfigOutput>(this.baseUri + '#X-Amz-Target=AwsProton20200720.UpdateServiceSyncConfig', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Update a service template.
		 * Post #X-Amz-Target=AwsProton20200720.UpdateServiceTemplate
		 * @return {UpdateServiceTemplateOutput} Success
		 */
		UpdateServiceTemplate(requestBody: UpdateServiceTemplateInput): Observable<UpdateServiceTemplateOutput> {
			return this.http.post<UpdateServiceTemplateOutput>(this.baseUri + '#X-Amz-Target=AwsProton20200720.UpdateServiceTemplate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Update a major or minor version of a service template.
		 * Post #X-Amz-Target=AwsProton20200720.UpdateServiceTemplateVersion
		 * @return {UpdateServiceTemplateVersionOutput} Success
		 */
		UpdateServiceTemplateVersion(requestBody: UpdateServiceTemplateVersionInput): Observable<UpdateServiceTemplateVersionOutput> {
			return this.http.post<UpdateServiceTemplateVersionOutput>(this.baseUri + '#X-Amz-Target=AwsProton20200720.UpdateServiceTemplateVersion', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Update template sync configuration parameters, except for the <code>templateName</code> and <code>templateType</code>. Repository details (branch, name, and provider) should be of a linked repository. A linked repository is a repository that has been registered with Proton. For more information, see <a>CreateRepository</a>.
		 * Post #X-Amz-Target=AwsProton20200720.UpdateTemplateSyncConfig
		 * @return {UpdateTemplateSyncConfigOutput} Success
		 */
		UpdateTemplateSyncConfig(requestBody: UpdateTemplateSyncConfigInput): Observable<UpdateTemplateSyncConfigOutput> {
			return this.http.post<UpdateTemplateSyncConfigOutput>(this.baseUri + '#X-Amz-Target=AwsProton20200720.UpdateTemplateSyncConfig', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum AcceptEnvironmentAccountConnectionX_Amz_Target { 'AwsProton20200720.AcceptEnvironmentAccountConnection' = 0 }

	export enum CancelComponentDeploymentX_Amz_Target { 'AwsProton20200720.CancelComponentDeployment' = 0 }

	export enum CancelEnvironmentDeploymentX_Amz_Target { 'AwsProton20200720.CancelEnvironmentDeployment' = 0 }

	export enum CancelServiceInstanceDeploymentX_Amz_Target { 'AwsProton20200720.CancelServiceInstanceDeployment' = 0 }

	export enum CancelServicePipelineDeploymentX_Amz_Target { 'AwsProton20200720.CancelServicePipelineDeployment' = 0 }

	export enum CreateComponentX_Amz_Target { 'AwsProton20200720.CreateComponent' = 0 }

	export enum CreateEnvironmentX_Amz_Target { 'AwsProton20200720.CreateEnvironment' = 0 }

	export enum CreateEnvironmentAccountConnectionX_Amz_Target { 'AwsProton20200720.CreateEnvironmentAccountConnection' = 0 }

	export enum CreateEnvironmentTemplateX_Amz_Target { 'AwsProton20200720.CreateEnvironmentTemplate' = 0 }

	export enum CreateEnvironmentTemplateVersionX_Amz_Target { 'AwsProton20200720.CreateEnvironmentTemplateVersion' = 0 }

	export enum CreateRepositoryX_Amz_Target { 'AwsProton20200720.CreateRepository' = 0 }

	export enum CreateServiceX_Amz_Target { 'AwsProton20200720.CreateService' = 0 }

	export enum CreateServiceInstanceX_Amz_Target { 'AwsProton20200720.CreateServiceInstance' = 0 }

	export enum CreateServiceSyncConfigX_Amz_Target { 'AwsProton20200720.CreateServiceSyncConfig' = 0 }

	export enum CreateServiceTemplateX_Amz_Target { 'AwsProton20200720.CreateServiceTemplate' = 0 }

	export enum CreateServiceTemplateVersionX_Amz_Target { 'AwsProton20200720.CreateServiceTemplateVersion' = 0 }

	export enum CreateTemplateSyncConfigX_Amz_Target { 'AwsProton20200720.CreateTemplateSyncConfig' = 0 }

	export enum DeleteComponentX_Amz_Target { 'AwsProton20200720.DeleteComponent' = 0 }

	export enum DeleteDeploymentX_Amz_Target { 'AwsProton20200720.DeleteDeployment' = 0 }

	export enum DeleteEnvironmentX_Amz_Target { 'AwsProton20200720.DeleteEnvironment' = 0 }

	export enum DeleteEnvironmentAccountConnectionX_Amz_Target { 'AwsProton20200720.DeleteEnvironmentAccountConnection' = 0 }

	export enum DeleteEnvironmentTemplateX_Amz_Target { 'AwsProton20200720.DeleteEnvironmentTemplate' = 0 }

	export enum DeleteEnvironmentTemplateVersionX_Amz_Target { 'AwsProton20200720.DeleteEnvironmentTemplateVersion' = 0 }

	export enum DeleteRepositoryX_Amz_Target { 'AwsProton20200720.DeleteRepository' = 0 }

	export enum DeleteServiceX_Amz_Target { 'AwsProton20200720.DeleteService' = 0 }

	export enum DeleteServiceSyncConfigX_Amz_Target { 'AwsProton20200720.DeleteServiceSyncConfig' = 0 }

	export enum DeleteServiceTemplateX_Amz_Target { 'AwsProton20200720.DeleteServiceTemplate' = 0 }

	export enum DeleteServiceTemplateVersionX_Amz_Target { 'AwsProton20200720.DeleteServiceTemplateVersion' = 0 }

	export enum DeleteTemplateSyncConfigX_Amz_Target { 'AwsProton20200720.DeleteTemplateSyncConfig' = 0 }

	export enum GetAccountSettingsX_Amz_Target { 'AwsProton20200720.GetAccountSettings' = 0 }

	export enum GetComponentX_Amz_Target { 'AwsProton20200720.GetComponent' = 0 }

	export enum GetDeploymentX_Amz_Target { 'AwsProton20200720.GetDeployment' = 0 }

	export enum GetEnvironmentX_Amz_Target { 'AwsProton20200720.GetEnvironment' = 0 }

	export enum GetEnvironmentAccountConnectionX_Amz_Target { 'AwsProton20200720.GetEnvironmentAccountConnection' = 0 }

	export enum GetEnvironmentTemplateX_Amz_Target { 'AwsProton20200720.GetEnvironmentTemplate' = 0 }

	export enum GetEnvironmentTemplateVersionX_Amz_Target { 'AwsProton20200720.GetEnvironmentTemplateVersion' = 0 }

	export enum GetRepositoryX_Amz_Target { 'AwsProton20200720.GetRepository' = 0 }

	export enum GetRepositorySyncStatusX_Amz_Target { 'AwsProton20200720.GetRepositorySyncStatus' = 0 }

	export enum GetResourcesSummaryX_Amz_Target { 'AwsProton20200720.GetResourcesSummary' = 0 }

	export enum GetServiceX_Amz_Target { 'AwsProton20200720.GetService' = 0 }

	export enum GetServiceInstanceX_Amz_Target { 'AwsProton20200720.GetServiceInstance' = 0 }

	export enum GetServiceInstanceSyncStatusX_Amz_Target { 'AwsProton20200720.GetServiceInstanceSyncStatus' = 0 }

	export enum GetServiceSyncBlockerSummaryX_Amz_Target { 'AwsProton20200720.GetServiceSyncBlockerSummary' = 0 }

	export enum GetServiceSyncConfigX_Amz_Target { 'AwsProton20200720.GetServiceSyncConfig' = 0 }

	export enum GetServiceTemplateX_Amz_Target { 'AwsProton20200720.GetServiceTemplate' = 0 }

	export enum GetServiceTemplateVersionX_Amz_Target { 'AwsProton20200720.GetServiceTemplateVersion' = 0 }

	export enum GetTemplateSyncConfigX_Amz_Target { 'AwsProton20200720.GetTemplateSyncConfig' = 0 }

	export enum GetTemplateSyncStatusX_Amz_Target { 'AwsProton20200720.GetTemplateSyncStatus' = 0 }

	export enum ListComponentOutputsX_Amz_Target { 'AwsProton20200720.ListComponentOutputs' = 0 }

	export enum ListComponentProvisionedResourcesX_Amz_Target { 'AwsProton20200720.ListComponentProvisionedResources' = 0 }

	export enum ListComponentsX_Amz_Target { 'AwsProton20200720.ListComponents' = 0 }

	export enum ListDeploymentsX_Amz_Target { 'AwsProton20200720.ListDeployments' = 0 }

	export enum ListEnvironmentAccountConnectionsX_Amz_Target { 'AwsProton20200720.ListEnvironmentAccountConnections' = 0 }

	export enum ListEnvironmentOutputsX_Amz_Target { 'AwsProton20200720.ListEnvironmentOutputs' = 0 }

	export enum ListEnvironmentProvisionedResourcesX_Amz_Target { 'AwsProton20200720.ListEnvironmentProvisionedResources' = 0 }

	export enum ListEnvironmentTemplateVersionsX_Amz_Target { 'AwsProton20200720.ListEnvironmentTemplateVersions' = 0 }

	export enum ListEnvironmentTemplatesX_Amz_Target { 'AwsProton20200720.ListEnvironmentTemplates' = 0 }

	export enum ListEnvironmentsX_Amz_Target { 'AwsProton20200720.ListEnvironments' = 0 }

	export enum ListRepositoriesX_Amz_Target { 'AwsProton20200720.ListRepositories' = 0 }

	export enum ListRepositorySyncDefinitionsX_Amz_Target { 'AwsProton20200720.ListRepositorySyncDefinitions' = 0 }

	export enum ListServiceInstanceOutputsX_Amz_Target { 'AwsProton20200720.ListServiceInstanceOutputs' = 0 }

	export enum ListServiceInstanceProvisionedResourcesX_Amz_Target { 'AwsProton20200720.ListServiceInstanceProvisionedResources' = 0 }

	export enum ListServiceInstancesX_Amz_Target { 'AwsProton20200720.ListServiceInstances' = 0 }

	export enum ListServicePipelineOutputsX_Amz_Target { 'AwsProton20200720.ListServicePipelineOutputs' = 0 }

	export enum ListServicePipelineProvisionedResourcesX_Amz_Target { 'AwsProton20200720.ListServicePipelineProvisionedResources' = 0 }

	export enum ListServiceTemplateVersionsX_Amz_Target { 'AwsProton20200720.ListServiceTemplateVersions' = 0 }

	export enum ListServiceTemplatesX_Amz_Target { 'AwsProton20200720.ListServiceTemplates' = 0 }

	export enum ListServicesX_Amz_Target { 'AwsProton20200720.ListServices' = 0 }

	export enum ListTagsForResourceX_Amz_Target { 'AwsProton20200720.ListTagsForResource' = 0 }

	export enum NotifyResourceDeploymentStatusChangeX_Amz_Target { 'AwsProton20200720.NotifyResourceDeploymentStatusChange' = 0 }

	export enum RejectEnvironmentAccountConnectionX_Amz_Target { 'AwsProton20200720.RejectEnvironmentAccountConnection' = 0 }

	export enum TagResourceX_Amz_Target { 'AwsProton20200720.TagResource' = 0 }

	export enum UntagResourceX_Amz_Target { 'AwsProton20200720.UntagResource' = 0 }

	export enum UpdateAccountSettingsX_Amz_Target { 'AwsProton20200720.UpdateAccountSettings' = 0 }

	export enum UpdateComponentX_Amz_Target { 'AwsProton20200720.UpdateComponent' = 0 }

	export enum UpdateEnvironmentX_Amz_Target { 'AwsProton20200720.UpdateEnvironment' = 0 }

	export enum UpdateEnvironmentAccountConnectionX_Amz_Target { 'AwsProton20200720.UpdateEnvironmentAccountConnection' = 0 }

	export enum UpdateEnvironmentTemplateX_Amz_Target { 'AwsProton20200720.UpdateEnvironmentTemplate' = 0 }

	export enum UpdateEnvironmentTemplateVersionX_Amz_Target { 'AwsProton20200720.UpdateEnvironmentTemplateVersion' = 0 }

	export enum UpdateServiceX_Amz_Target { 'AwsProton20200720.UpdateService' = 0 }

	export enum UpdateServiceInstanceX_Amz_Target { 'AwsProton20200720.UpdateServiceInstance' = 0 }

	export enum UpdateServicePipelineX_Amz_Target { 'AwsProton20200720.UpdateServicePipeline' = 0 }

	export enum UpdateServiceSyncBlockerX_Amz_Target { 'AwsProton20200720.UpdateServiceSyncBlocker' = 0 }

	export enum UpdateServiceSyncConfigX_Amz_Target { 'AwsProton20200720.UpdateServiceSyncConfig' = 0 }

	export enum UpdateServiceTemplateX_Amz_Target { 'AwsProton20200720.UpdateServiceTemplate' = 0 }

	export enum UpdateServiceTemplateVersionX_Amz_Target { 'AwsProton20200720.UpdateServiceTemplateVersion' = 0 }

	export enum UpdateTemplateSyncConfigX_Amz_Target { 'AwsProton20200720.UpdateTemplateSyncConfig' = 0 }

}

