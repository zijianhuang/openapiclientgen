import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** ApiKey authentication gives a name and a value that can be included in either the request header or query parameters. */
	export interface ApiKeyAuthentication {

		/**
		 * The location of the authentication key/value pair in the request.
		 * Required
		 */
		in: ApiKeyAuthenticationIn;

		/**
		 * The key name of the authentication key/value pair.
		 * Required
		 */
		name: string;

		/**
		 * The value of the authentication key/value pair.
		 * Required
		 */
		value: string;
	}

	/** ApiKey authentication gives a name and a value that can be included in either the request header or query parameters. */
	export interface ApiKeyAuthenticationFormProperties {

		/**
		 * The location of the authentication key/value pair in the request.
		 * Required
		 */
		in: FormControl<ApiKeyAuthenticationIn | null | undefined>,

		/**
		 * The key name of the authentication key/value pair.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The value of the authentication key/value pair.
		 * Required
		 */
		value: FormControl<string | null | undefined>,
	}
	export function CreateApiKeyAuthenticationFormGroup() {
		return new FormGroup<ApiKeyAuthenticationFormProperties>({
			in: new FormControl<ApiKeyAuthenticationIn | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ApiKeyAuthenticationIn { Query = 'Query', Header = 'Header' }

	export interface ArtifactSource {
	}
	export interface ArtifactSourceFormProperties {
	}
	export function CreateArtifactSourceFormGroup() {
		return new FormGroup<ArtifactSourceFormProperties>({
		});

	}


	/** The properties that define the source location where the artifacts are located. */
	export interface ArtifactSourceProperties {

		/** The path from the location that the 'authentication' property [say, a SAS URI to the blob container] refers to, to the location of the artifacts. This can be used to differentiate different versions of the artifacts. Or, different types of artifacts like binaries or templates. The location referenced by the authentication property concatenated with this optional artifactRoot path forms the artifact source location where the artifacts are expected to be found. */
		artifactRoot?: string | null;

		/**
		 * Defines the authentication method and properties to access the artifacts.
		 * Required
		 */
		authentication: Authentication;

		/**
		 * The type of artifact source used.
		 * Required
		 */
		sourceType: string;
	}

	/** The properties that define the source location where the artifacts are located. */
	export interface ArtifactSourcePropertiesFormProperties {

		/** The path from the location that the 'authentication' property [say, a SAS URI to the blob container] refers to, to the location of the artifacts. This can be used to differentiate different versions of the artifacts. Or, different types of artifacts like binaries or templates. The location referenced by the authentication property concatenated with this optional artifactRoot path forms the artifact source location where the artifacts are expected to be found. */
		artifactRoot: FormControl<string | null | undefined>,

		/**
		 * The type of artifact source used.
		 * Required
		 */
		sourceType: FormControl<string | null | undefined>,
	}
	export function CreateArtifactSourcePropertiesFormGroup() {
		return new FormGroup<ArtifactSourcePropertiesFormProperties>({
			artifactRoot: new FormControl<string | null | undefined>(undefined),
			sourceType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Defines the authentication method and properties to access the artifacts. */
	export interface Authentication {

		/**
		 * The authentication type
		 * Required
		 */
		type: string;
	}

	/** Defines the authentication method and properties to access the artifacts. */
	export interface AuthenticationFormProperties {

		/**
		 * The authentication type
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateAuthenticationFormGroup() {
		return new FormGroup<AuthenticationFormProperties>({
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The error information object. */
	export interface CloudError {

		/** Detailed error information of any failure. */
		error?: CloudErrorBody;
	}

	/** The error information object. */
	export interface CloudErrorFormProperties {
	}
	export function CreateCloudErrorFormGroup() {
		return new FormGroup<CloudErrorFormProperties>({
		});

	}


	/** Detailed error information of any failure. */
	export interface CloudErrorBody {

		/** Error code string. */
		code?: string | null;

		/** More detailed error information. */
		details?: Array<CloudErrorBody>;

		/** Descriptive error information. */
		message?: string | null;

		/** Error target */
		target?: string | null;
	}

	/** Detailed error information of any failure. */
	export interface CloudErrorBodyFormProperties {

		/** Error code string. */
		code: FormControl<string | null | undefined>,

		/** Descriptive error information. */
		message: FormControl<string | null | undefined>,

		/** Error target */
		target: FormControl<string | null | undefined>,
	}
	export function CreateCloudErrorBodyFormGroup() {
		return new FormGroup<CloudErrorBodyFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			target: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The attributes for the health check step. */
	export interface HealthCheckStepAttributes {

		/**
		 * The duration in ISO 8601 format for which the resource is expected to be continuously healthy. If maxElasticDuration is specified, healthy state duration is enforced after the detection of first healthy signal.
		 * Required
		 */
		healthyStateDuration: string;

		/** The duration in ISO 8601 format for which the health check waits for the resource to become healthy. Health check fails if it doesn't. Health check starts to enforce healthyStateDuration once resource becomes healthy. */
		maxElasticDuration?: string | null;

		/**
		 * The type of health check.
		 * Required
		 */
		type: string;

		/** The duration in ISO 8601 format for which health check waits idly without any checks. */
		waitDuration?: string | null;
	}

	/** The attributes for the health check step. */
	export interface HealthCheckStepAttributesFormProperties {

		/**
		 * The duration in ISO 8601 format for which the resource is expected to be continuously healthy. If maxElasticDuration is specified, healthy state duration is enforced after the detection of first healthy signal.
		 * Required
		 */
		healthyStateDuration: FormControl<string | null | undefined>,

		/** The duration in ISO 8601 format for which the health check waits for the resource to become healthy. Health check fails if it doesn't. Health check starts to enforce healthyStateDuration once resource becomes healthy. */
		maxElasticDuration: FormControl<string | null | undefined>,

		/**
		 * The type of health check.
		 * Required
		 */
		type: FormControl<string | null | undefined>,

		/** The duration in ISO 8601 format for which health check waits idly without any checks. */
		waitDuration: FormControl<string | null | undefined>,
	}
	export function CreateHealthCheckStepAttributesFormGroup() {
		return new FormGroup<HealthCheckStepAttributesFormProperties>({
			healthyStateDuration: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			maxElasticDuration: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			waitDuration: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Defines the properties of a health check step. */
	export interface HealthCheckStepProperties {

		/**
		 * The attributes for the health check step.
		 * Required
		 */
		attributes: HealthCheckStepAttributes;
	}

	/** Defines the properties of a health check step. */
	export interface HealthCheckStepPropertiesFormProperties {
	}
	export function CreateHealthCheckStepPropertiesFormGroup() {
		return new FormGroup<HealthCheckStepPropertiesFormProperties>({
		});

	}


	/** Identity for the resource. */
	export interface Identity {

		/**
		 * The list of identities.
		 * Required
		 */
		identityIds: Array<string>;

		/**
		 * The identity type.
		 * Required
		 */
		type: string;
	}

	/** Identity for the resource. */
	export interface IdentityFormProperties {

		/**
		 * The identity type.
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateIdentityFormGroup() {
		return new FormGroup<IdentityFormProperties>({
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Supplementary contextual messages during a rollout. */
	export interface Message {

		/** The actual message text. */
		message?: string | null;

		/** Time in UTC this message was provided. */
		timeStamp?: Date | null;
	}

	/** Supplementary contextual messages during a rollout. */
	export interface MessageFormProperties {

		/** The actual message text. */
		message: FormControl<string | null | undefined>,

		/** Time in UTC this message was provided. */
		timeStamp: FormControl<Date | null | undefined>,
	}
	export function CreateMessageFormGroup() {
		return new FormGroup<MessageFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			timeStamp: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Represents an operation that can be performed on the service. */
	export interface Operation {

		/** The detail about an operation. */
		display?: OperationDetail;

		/** The name of the operation. */
		name?: string | null;

		/** The origin of the operation. */
		origin?: string | null;

		/** The properties of the operation. */
		properties?: string | null;
	}

	/** Represents an operation that can be performed on the service. */
	export interface OperationFormProperties {

		/** The name of the operation. */
		name: FormControl<string | null | undefined>,

		/** The origin of the operation. */
		origin: FormControl<string | null | undefined>,

		/** The properties of the operation. */
		properties: FormControl<string | null | undefined>,
	}
	export function CreateOperationFormGroup() {
		return new FormGroup<OperationFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			origin: new FormControl<string | null | undefined>(undefined),
			properties: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The detail about an operation. */
	export interface OperationDetail {

		/** The description of the operation. */
		description?: string | null;

		/** The name of the operation. */
		operation?: string | null;

		/** The name of the provider that supports the operation. */
		provider?: string | null;

		/** The resource type on which this operation can be performed. */
		resource?: string | null;
	}

	/** The detail about an operation. */
	export interface OperationDetailFormProperties {

		/** The description of the operation. */
		description: FormControl<string | null | undefined>,

		/** The name of the operation. */
		operation: FormControl<string | null | undefined>,

		/** The name of the provider that supports the operation. */
		provider: FormControl<string | null | undefined>,

		/** The resource type on which this operation can be performed. */
		resource: FormControl<string | null | undefined>,
	}
	export function CreateOperationDetailFormGroup() {
		return new FormGroup<OperationDetailFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			operation: new FormControl<string | null | undefined>(undefined),
			provider: new FormControl<string | null | undefined>(undefined),
			resource: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The operations response. */
	export interface OperationsList {

		/** Represents an operation that can be performed on the service. */
		value?: Operation;
	}

	/** The operations response. */
	export interface OperationsListFormProperties {
	}
	export function CreateOperationsListFormGroup() {
		return new FormGroup<OperationsListFormProperties>({
		});

	}


	/** The properties that define a step. */
	export interface PrePostStep {

		/**
		 * The resource Id of the step to be run.
		 * Required
		 */
		stepId: string;
	}

	/** The properties that define a step. */
	export interface PrePostStepFormProperties {

		/**
		 * The resource Id of the step to be run.
		 * Required
		 */
		stepId: FormControl<string | null | undefined>,
	}
	export function CreatePrePostStepFormGroup() {
		return new FormGroup<PrePostStepFormProperties>({
			stepId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Individual resource operation information. */
	export interface ResourceOperation {

		/** Unique identifier of the operation. For ARM resources, this is the operationId obtained from ARM service. */
		operationId?: string | null;

		/** State of the resource deployment. For ARM resources, this is the current provisioning state of the resource. */
		provisioningState?: string | null;

		/** Name of the resource as specified in the artifacts. For ARM resources, this is the name of the resource specified in the template. */
		resourceName?: string | null;

		/** Type of the resource as specified in the artifacts. For ARM resources, this is the type of the resource specified in the template. */
		resourceType?: string | null;

		/** Http status code of the operation. */
		statusCode?: string | null;

		/** Descriptive information of the resource operation. */
		statusMessage?: string | null;
	}

	/** Individual resource operation information. */
	export interface ResourceOperationFormProperties {

		/** Unique identifier of the operation. For ARM resources, this is the operationId obtained from ARM service. */
		operationId: FormControl<string | null | undefined>,

		/** State of the resource deployment. For ARM resources, this is the current provisioning state of the resource. */
		provisioningState: FormControl<string | null | undefined>,

		/** Name of the resource as specified in the artifacts. For ARM resources, this is the name of the resource specified in the template. */
		resourceName: FormControl<string | null | undefined>,

		/** Type of the resource as specified in the artifacts. For ARM resources, this is the type of the resource specified in the template. */
		resourceType: FormControl<string | null | undefined>,

		/** Http status code of the operation. */
		statusCode: FormControl<string | null | undefined>,

		/** Descriptive information of the resource operation. */
		statusMessage: FormControl<string | null | undefined>,
	}
	export function CreateResourceOperationFormGroup() {
		return new FormGroup<ResourceOperationFormProperties>({
			operationId: new FormControl<string | null | undefined>(undefined),
			provisioningState: new FormControl<string | null | undefined>(undefined),
			resourceName: new FormControl<string | null | undefined>(undefined),
			resourceType: new FormControl<string | null | undefined>(undefined),
			statusCode: new FormControl<string | null | undefined>(undefined),
			statusMessage: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A REST based health check */
	export interface RestHealthCheck {

		/**
		 * A unique name for this check.
		 * Required
		 */
		name: string;

		/**
		 * The properties that make up a REST request
		 * Required
		 */
		request: RestRequest;

		/** The properties that make up the expected REST response */
		response?: RestResponse;
	}

	/** A REST based health check */
	export interface RestHealthCheckFormProperties {

		/**
		 * A unique name for this check.
		 * Required
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateRestHealthCheckFormGroup() {
		return new FormGroup<RestHealthCheckFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The properties that make up a REST request */
	export interface RestRequest {

		/**
		 * The authentication information required in the REST health check request to the health provider.
		 * Required
		 */
		authentication: RestRequestAuthentication;

		/**
		 * The HTTP method to use for the request.
		 * Required
		 */
		method: RestRequestMethod;

		/**
		 * The HTTP URI to use for the request.
		 * Required
		 */
		uri: string;
	}

	/** The properties that make up a REST request */
	export interface RestRequestFormProperties {

		/**
		 * The HTTP method to use for the request.
		 * Required
		 */
		method: FormControl<RestRequestMethod | null | undefined>,

		/**
		 * The HTTP URI to use for the request.
		 * Required
		 */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateRestRequestFormGroup() {
		return new FormGroup<RestRequestFormProperties>({
			method: new FormControl<RestRequestMethod | null | undefined>(undefined, [Validators.required]),
			uri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The authentication information required in the REST health check request to the health provider. */
	export interface RestRequestAuthentication {

		/**
		 * The authentication type.
		 * Required
		 */
		type: RestRequestAuthenticationType;
	}

	/** The authentication information required in the REST health check request to the health provider. */
	export interface RestRequestAuthenticationFormProperties {

		/**
		 * The authentication type.
		 * Required
		 */
		type: FormControl<RestRequestAuthenticationType | null | undefined>,
	}
	export function CreateRestRequestAuthenticationFormGroup() {
		return new FormGroup<RestRequestAuthenticationFormProperties>({
			type: new FormControl<RestRequestAuthenticationType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum RestRequestAuthenticationType { ApiKey = 'ApiKey', RolloutIdentity = 'RolloutIdentity' }

	export enum RestRequestMethod { GET = 'GET', POST = 'POST' }


	/** The properties that make up the expected REST response */
	export interface RestResponse {

		/** The regular expressions to match the response content with. */
		regex?: RestResponseRegex;

		/** The HTTP status codes expected in a successful health check response. The response is expected to match one of the given status codes. If no expected status codes are provided, default expected status code is 200 OK. */
		successStatusCodes?: Array<string>;
	}

	/** The properties that make up the expected REST response */
	export interface RestResponseFormProperties {
	}
	export function CreateRestResponseFormGroup() {
		return new FormGroup<RestResponseFormProperties>({
		});

	}

	export interface RestResponseRegex {

		/** Indicates whether any or all of the expressions should match with the response content. */
		matchQuantifier?: RestResponseRegexMatchQuantifier | null;

		/** The list of regular expressions. */
		matches?: Array<string>;
	}
	export interface RestResponseRegexFormProperties {

		/** Indicates whether any or all of the expressions should match with the response content. */
		matchQuantifier: FormControl<RestResponseRegexMatchQuantifier | null | undefined>,
	}
	export function CreateRestResponseRegexFormGroup() {
		return new FormGroup<RestResponseRegexFormProperties>({
			matchQuantifier: new FormControl<RestResponseRegexMatchQuantifier | null | undefined>(undefined),
		});

	}

	export enum RestResponseRegexMatchQuantifier { All = 'All', Any = 'Any' }


	/** Defines the REST health check step properties. */
	export interface RestHealthCheckStepAttributes {

		/** The parameters for the REST health check. */
		properties?: RestParameters;
	}

	/** Defines the REST health check step properties. */
	export interface RestHealthCheckStepAttributesFormProperties {
	}
	export function CreateRestHealthCheckStepAttributesFormGroup() {
		return new FormGroup<RestHealthCheckStepAttributesFormProperties>({
		});

	}


	/** The parameters for the REST health check. */
	export interface RestParameters {

		/**
		 * The list of checks that form the health check step.
		 * Required
		 */
		healthChecks: Array<RestHealthCheck>;
	}

	/** The parameters for the REST health check. */
	export interface RestParametersFormProperties {
	}
	export function CreateRestParametersFormGroup() {
		return new FormGroup<RestParametersFormProperties>({
		});

	}

	export interface Rollout {
	}
	export interface RolloutFormProperties {
	}
	export function CreateRolloutFormGroup() {
		return new FormGroup<RolloutFormProperties>({
		});

	}


	/** RolloutIdentity uses the user-assigned managed identity authentication context specified in the Identity property during rollout creation. */
	export interface RolloutIdentityAuthentication {
	}

	/** RolloutIdentity uses the user-assigned managed identity authentication context specified in the Identity property during rollout creation. */
	export interface RolloutIdentityAuthenticationFormProperties {
	}
	export function CreateRolloutIdentityAuthenticationFormGroup() {
		return new FormGroup<RolloutIdentityAuthenticationFormProperties>({
		});

	}


	/** Detailed runtime information of the rollout. */
	export interface RolloutOperationInfo {

		/** The start time of the rollout in UTC. This property will not be set if the rollout has not completed yet. */
		endTime?: Date | null;

		/** Detailed error information of any failure. */
		error?: CloudErrorBody;

		/**
		 * The ordinal count of the number of retry attempts on a rollout. 0 if no retries of the rollout have been performed. If the rollout is updated with a PUT, this count is reset to 0.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		retryAttempt?: number | null;

		/** True, if all steps that succeeded on the previous run/attempt were chosen to be skipped in this retry attempt. False, otherwise. */
		skipSucceededOnRetry?: boolean | null;

		/** The start time of the rollout in UTC. */
		startTime?: Date | null;
	}

	/** Detailed runtime information of the rollout. */
	export interface RolloutOperationInfoFormProperties {

		/** The start time of the rollout in UTC. This property will not be set if the rollout has not completed yet. */
		endTime: FormControl<Date | null | undefined>,

		/**
		 * The ordinal count of the number of retry attempts on a rollout. 0 if no retries of the rollout have been performed. If the rollout is updated with a PUT, this count is reset to 0.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		retryAttempt: FormControl<number | null | undefined>,

		/** True, if all steps that succeeded on the previous run/attempt were chosen to be skipped in this retry attempt. False, otherwise. */
		skipSucceededOnRetry: FormControl<boolean | null | undefined>,

		/** The start time of the rollout in UTC. */
		startTime: FormControl<Date | null | undefined>,
	}
	export function CreateRolloutOperationInfoFormGroup() {
		return new FormGroup<RolloutOperationInfoFormProperties>({
			endTime: new FormControl<Date | null | undefined>(undefined),
			retryAttempt: new FormControl<number | null | undefined>(undefined),
			skipSucceededOnRetry: new FormControl<boolean | null | undefined>(undefined),
			startTime: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Defines the properties of a rollout. */
	export interface RolloutProperties {

		/** Detailed runtime information of the rollout. */
		operationInfo?: RolloutOperationInfo;

		/** The detailed information on the services being deployed. */
		services?: Array<Service>;

		/** The current status of the rollout. */
		status?: string | null;

		/**
		 * The cardinal count of total number of retries performed on the rollout at a given time.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		totalRetryAttempts?: number | null;
	}

	/** Defines the properties of a rollout. */
	export interface RolloutPropertiesFormProperties {

		/** The current status of the rollout. */
		status: FormControl<string | null | undefined>,

		/**
		 * The cardinal count of total number of retries performed on the rollout at a given time.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		totalRetryAttempts: FormControl<number | null | undefined>,
	}
	export function CreateRolloutPropertiesFormGroup() {
		return new FormGroup<RolloutPropertiesFormProperties>({
			status: new FormControl<string | null | undefined>(undefined),
			totalRetryAttempts: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Defines a service. */
	export interface Service extends ServiceProperties {

		/** Name of the service. */
		name?: string | null;

		/** The detailed information about the units that make up the service. */
		serviceUnits?: Array<ServiceUnit>;
	}

	/** Defines a service. */
	export interface ServiceFormProperties extends ServicePropertiesFormProperties {

		/** Name of the service. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateServiceFormGroup() {
		return new FormGroup<ServiceFormProperties>({
			targetLocation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			targetSubscriptionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Defines a service unit. */
	export interface ServiceUnit extends ServiceUnitProperties {

		/** Name of the service unit. */
		name?: string | null;

		/** Detailed step information, if present. */
		steps?: Array<RolloutStep>;
	}

	/** Defines a service unit. */
	export interface ServiceUnitFormProperties extends ServiceUnitPropertiesFormProperties {

		/** Name of the service unit. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateServiceUnitFormGroup() {
		return new FormGroup<ServiceUnitFormProperties>({
			deploymentMode: new FormControl<ServiceUnitPropertiesDeploymentMode | null | undefined>(undefined, [Validators.required]),
			targetResourceGroup: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Defines a specific step on a target service unit. */
	export interface RolloutStep {

		/** Supplementary informative messages during rollout. */
		messages?: Array<Message>;

		/**
		 * Name of the step.
		 * Required
		 */
		name: string;

		/** Detailed information of a specific step run. */
		operationInfo?: StepOperationInfo;

		/** Set of resource operations that were performed, if any, on an Azure resource. */
		resourceOperations?: Array<ResourceOperation>;

		/** Current state of the step. */
		status?: string | null;

		/** The step group the current step is part of. */
		stepGroup?: string | null;
	}

	/** Defines a specific step on a target service unit. */
	export interface RolloutStepFormProperties {

		/**
		 * Name of the step.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/** Current state of the step. */
		status: FormControl<string | null | undefined>,

		/** The step group the current step is part of. */
		stepGroup: FormControl<string | null | undefined>,
	}
	export function CreateRolloutStepFormGroup() {
		return new FormGroup<RolloutStepFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined),
			stepGroup: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RolloutRequest {
	}
	export interface RolloutRequestFormProperties {
	}
	export function CreateRolloutRequestFormGroup() {
		return new FormGroup<RolloutRequestFormProperties>({
		});

	}


	/** The properties for defining a rollout. */
	export interface RolloutRequestProperties {

		/** The reference to the artifact source resource Id where the payload is located. */
		artifactSourceId?: string | null;

		/**
		 * The version of the build being deployed.
		 * Required
		 */
		buildVersion: string;

		/**
		 * The list of step groups that define the orchestration.
		 * Required
		 */
		stepGroups: Array<StepGroup>;

		/**
		 * The resource Id of the service topology from which service units are being referenced in step groups to be deployed.
		 * Required
		 */
		targetServiceTopologyId: string;
	}

	/** The properties for defining a rollout. */
	export interface RolloutRequestPropertiesFormProperties {

		/** The reference to the artifact source resource Id where the payload is located. */
		artifactSourceId: FormControl<string | null | undefined>,

		/**
		 * The version of the build being deployed.
		 * Required
		 */
		buildVersion: FormControl<string | null | undefined>,

		/**
		 * The resource Id of the service topology from which service units are being referenced in step groups to be deployed.
		 * Required
		 */
		targetServiceTopologyId: FormControl<string | null | undefined>,
	}
	export function CreateRolloutRequestPropertiesFormGroup() {
		return new FormGroup<RolloutRequestPropertiesFormProperties>({
			artifactSourceId: new FormControl<string | null | undefined>(undefined),
			buildVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			targetServiceTopologyId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The properties that define a Step group in a rollout. */
	export interface StepGroup {

		/** The list of step group names on which this step group depends on. */
		dependsOnStepGroups?: Array<string>;

		/**
		 * The resource Id of service unit to be deployed. The service unit should be from the service topology referenced in targetServiceTopologyId
		 * Required
		 */
		deploymentTargetId: string;

		/**
		 * The name of the step group.
		 * Required
		 */
		name: string;

		/** The list of steps to be run after deploying the target. */
		postDeploymentSteps?: Array<PrePostStep>;

		/** The list of steps to be run before deploying the target. */
		preDeploymentSteps?: Array<PrePostStep>;
	}

	/** The properties that define a Step group in a rollout. */
	export interface StepGroupFormProperties {

		/**
		 * The resource Id of service unit to be deployed. The service unit should be from the service topology referenced in targetServiceTopologyId
		 * Required
		 */
		deploymentTargetId: FormControl<string | null | undefined>,

		/**
		 * The name of the step group.
		 * Required
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateStepGroupFormGroup() {
		return new FormGroup<StepGroupFormProperties>({
			deploymentTargetId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Defines the properties to access the artifacts using an Azure Storage SAS URI. */
	export interface SasAuthentication {

		/** The properties that define SAS authentication. */
		properties?: SasProperties;
	}

	/** Defines the properties to access the artifacts using an Azure Storage SAS URI. */
	export interface SasAuthenticationFormProperties {
	}
	export function CreateSasAuthenticationFormGroup() {
		return new FormGroup<SasAuthenticationFormProperties>({
		});

	}


	/** The properties that define SAS authentication. */
	export interface SasProperties {

		/**
		 * The SAS URI to the Azure Storage blob container. Any offset from the root of the container to where the artifacts are located can be defined in the artifactRoot.
		 * Required
		 */
		sasUri: string;
	}

	/** The properties that define SAS authentication. */
	export interface SasPropertiesFormProperties {

		/**
		 * The SAS URI to the Azure Storage blob container. Any offset from the root of the container to where the artifacts are located can be defined in the artifactRoot.
		 * Required
		 */
		sasUri: FormControl<string | null | undefined>,
	}
	export function CreateSasPropertiesFormGroup() {
		return new FormGroup<SasPropertiesFormProperties>({
			sasUri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ServiceResource {
	}
	export interface ServiceResourceFormProperties {
	}
	export function CreateServiceResourceFormGroup() {
		return new FormGroup<ServiceResourceFormProperties>({
		});

	}


	/** The properties of a service. */
	export interface ServiceProperties {

		/**
		 * The Azure location to which the resources in the service belong to or should be deployed to.
		 * Required
		 */
		targetLocation: string;

		/**
		 * The subscription to which the resources in the service belong to or should be deployed to.
		 * Required
		 */
		targetSubscriptionId: string;
	}

	/** The properties of a service. */
	export interface ServicePropertiesFormProperties {

		/**
		 * The Azure location to which the resources in the service belong to or should be deployed to.
		 * Required
		 */
		targetLocation: FormControl<string | null | undefined>,

		/**
		 * The subscription to which the resources in the service belong to or should be deployed to.
		 * Required
		 */
		targetSubscriptionId: FormControl<string | null | undefined>,
	}
	export function CreateServicePropertiesFormGroup() {
		return new FormGroup<ServicePropertiesFormProperties>({
			targetLocation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			targetSubscriptionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ServiceTopologyResource {
	}
	export interface ServiceTopologyResourceFormProperties {
	}
	export function CreateServiceTopologyResourceFormGroup() {
		return new FormGroup<ServiceTopologyResourceFormProperties>({
		});

	}


	/** The properties of a service topology. */
	export interface ServiceTopologyProperties {

		/** The resource Id of the artifact source that contains the artifacts that can be referenced in the service units. */
		artifactSourceId?: string | null;
	}

	/** The properties of a service topology. */
	export interface ServiceTopologyPropertiesFormProperties {

		/** The resource Id of the artifact source that contains the artifacts that can be referenced in the service units. */
		artifactSourceId: FormControl<string | null | undefined>,
	}
	export function CreateServiceTopologyPropertiesFormGroup() {
		return new FormGroup<ServiceTopologyPropertiesFormProperties>({
			artifactSourceId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Defines the artifacts of a service unit. */
	export interface ServiceUnitArtifacts {

		/** The path to the ARM parameters file relative to the artifact source. */
		parametersArtifactSourceRelativePath?: string | null;

		/** The full URI of the ARM parameters file with the SAS token. */
		parametersUri?: string | null;

		/** The path to the ARM template file relative to the artifact source. */
		templateArtifactSourceRelativePath?: string | null;

		/** The full URI of the ARM template file with the SAS token. */
		templateUri?: string | null;
	}

	/** Defines the artifacts of a service unit. */
	export interface ServiceUnitArtifactsFormProperties {

		/** The path to the ARM parameters file relative to the artifact source. */
		parametersArtifactSourceRelativePath: FormControl<string | null | undefined>,

		/** The full URI of the ARM parameters file with the SAS token. */
		parametersUri: FormControl<string | null | undefined>,

		/** The path to the ARM template file relative to the artifact source. */
		templateArtifactSourceRelativePath: FormControl<string | null | undefined>,

		/** The full URI of the ARM template file with the SAS token. */
		templateUri: FormControl<string | null | undefined>,
	}
	export function CreateServiceUnitArtifactsFormGroup() {
		return new FormGroup<ServiceUnitArtifactsFormProperties>({
			parametersArtifactSourceRelativePath: new FormControl<string | null | undefined>(undefined),
			parametersUri: new FormControl<string | null | undefined>(undefined),
			templateArtifactSourceRelativePath: new FormControl<string | null | undefined>(undefined),
			templateUri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ServiceUnitResource {
	}
	export interface ServiceUnitResourceFormProperties {
	}
	export function CreateServiceUnitResourceFormGroup() {
		return new FormGroup<ServiceUnitResourceFormProperties>({
		});

	}


	/** Defines the properties of a service unit. */
	export interface ServiceUnitProperties {

		/** Defines the artifacts of a service unit. */
		artifacts?: ServiceUnitArtifacts;

		/**
		 * Describes the type of ARM deployment to be performed on the resource.
		 * Required
		 */
		deploymentMode: ServiceUnitPropertiesDeploymentMode;

		/**
		 * The Azure Resource Group to which the resources in the service unit belong to or should be deployed to.
		 * Required
		 */
		targetResourceGroup: string;
	}

	/** Defines the properties of a service unit. */
	export interface ServiceUnitPropertiesFormProperties {

		/**
		 * Describes the type of ARM deployment to be performed on the resource.
		 * Required
		 */
		deploymentMode: FormControl<ServiceUnitPropertiesDeploymentMode | null | undefined>,

		/**
		 * The Azure Resource Group to which the resources in the service unit belong to or should be deployed to.
		 * Required
		 */
		targetResourceGroup: FormControl<string | null | undefined>,
	}
	export function CreateServiceUnitPropertiesFormGroup() {
		return new FormGroup<ServiceUnitPropertiesFormProperties>({
			deploymentMode: new FormControl<ServiceUnitPropertiesDeploymentMode | null | undefined>(undefined, [Validators.required]),
			targetResourceGroup: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ServiceUnitPropertiesDeploymentMode { Incremental = 'Incremental', Complete = 'Complete' }


	/** Detailed information of a specific step run. */
	export interface StepOperationInfo {

		/** Unique identifier to track the request for ARM-based resources. */
		correlationId?: string | null;

		/** The name of the ARM deployment initiated as part of the step. */
		deploymentName?: string | null;

		/** End time of the action in UTC. */
		endTime?: Date | null;

		/** Detailed error information of any failure. */
		error?: CloudErrorBody;

		/** Last time in UTC this operation was updated. */
		lastUpdatedTime?: Date | null;

		/** Start time of the action in UTC. */
		startTime?: Date | null;
	}

	/** Detailed information of a specific step run. */
	export interface StepOperationInfoFormProperties {

		/** Unique identifier to track the request for ARM-based resources. */
		correlationId: FormControl<string | null | undefined>,

		/** The name of the ARM deployment initiated as part of the step. */
		deploymentName: FormControl<string | null | undefined>,

		/** End time of the action in UTC. */
		endTime: FormControl<Date | null | undefined>,

		/** Last time in UTC this operation was updated. */
		lastUpdatedTime: FormControl<Date | null | undefined>,

		/** Start time of the action in UTC. */
		startTime: FormControl<Date | null | undefined>,
	}
	export function CreateStepOperationInfoFormGroup() {
		return new FormGroup<StepOperationInfoFormProperties>({
			correlationId: new FormControl<string | null | undefined>(undefined),
			deploymentName: new FormControl<string | null | undefined>(undefined),
			endTime: new FormControl<Date | null | undefined>(undefined),
			lastUpdatedTime: new FormControl<Date | null | undefined>(undefined),
			startTime: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** The properties of a step resource. */
	export interface StepProperties {

		/**
		 * The type of step.
		 * Required
		 */
		stepType: StepPropertiesStepType;
	}

	/** The properties of a step resource. */
	export interface StepPropertiesFormProperties {

		/**
		 * The type of step.
		 * Required
		 */
		stepType: FormControl<StepPropertiesStepType | null | undefined>,
	}
	export function CreateStepPropertiesFormGroup() {
		return new FormGroup<StepPropertiesFormProperties>({
			stepType: new FormControl<StepPropertiesStepType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum StepPropertiesStepType { Wait = 'Wait', HealthCheck = 'HealthCheck' }

	export interface StepResource {
	}
	export interface StepResourceFormProperties {
	}
	export function CreateStepResourceFormGroup() {
		return new FormGroup<StepResourceFormProperties>({
		});

	}


	/** The parameters for the wait step. */
	export interface WaitStepAttributes {

		/**
		 * The duration in ISO 8601 format of how long the wait should be.
		 * Required
		 */
		duration: string;
	}

	/** The parameters for the wait step. */
	export interface WaitStepAttributesFormProperties {

		/**
		 * The duration in ISO 8601 format of how long the wait should be.
		 * Required
		 */
		duration: FormControl<string | null | undefined>,
	}
	export function CreateWaitStepAttributesFormGroup() {
		return new FormGroup<WaitStepAttributesFormProperties>({
			duration: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Defines the properties of a Wait step. */
	export interface WaitStepProperties {

		/**
		 * The parameters for the wait step.
		 * Required
		 */
		attributes: WaitStepAttributes;
	}

	/** Defines the properties of a Wait step. */
	export interface WaitStepPropertiesFormProperties {
	}
	export function CreateWaitStepPropertiesFormGroup() {
		return new FormGroup<WaitStepPropertiesFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Lists the supported operations.
		 * Get providers/Microsoft.DeploymentManager/operations
		 * @param {string} api_version The API version to use for this operation.
		 * @return {OperationsList} The operations are successfully returned. The response code does not determine if the request which this operation corresponds to is successful. Check the response content for the status and any error information on failures.
		 */
		Operations_List(api_version: string): Observable<OperationsList> {
			return this.http.get<OperationsList>(this.baseUri + 'providers/Microsoft.DeploymentManager/operations?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Lists the artifact sources in a resource group.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DeploymentManager/artifactSources
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group. The name is case insensitive.
		 *     Min length: 1    Max length: 90
		 * @param {string} api_version The API version to use for this operation.
		 * @return {Array<ArtifactSource>} OK
		 */
		ArtifactSources_List(subscriptionId: string, resourceGroupName: string, api_version: string): Observable<Array<ArtifactSource>> {
			return this.http.get<Array<ArtifactSource>>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DeploymentManager/artifactSources&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets an artifact source.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DeploymentManager/artifactSources/{artifactSourceName}
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group. The name is case insensitive.
		 *     Min length: 1    Max length: 90
		 * @param {string} artifactSourceName The name of the artifact source.
		 * @param {string} api_version The API version to use for this operation.
		 * @return {ArtifactSource} OK
		 */
		ArtifactSources_Get(subscriptionId: string, resourceGroupName: string, artifactSourceName: string, api_version: string): Observable<ArtifactSource> {
			return this.http.get<ArtifactSource>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DeploymentManager/artifactSources/' + (artifactSourceName == null ? '' : encodeURIComponent(artifactSourceName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates or updates an artifact source.
		 * Synchronously creates a new artifact source or updates an existing artifact source.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DeploymentManager/artifactSources/{artifactSourceName}
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group. The name is case insensitive.
		 *     Min length: 1    Max length: 90
		 * @param {string} artifactSourceName The name of the artifact source.
		 * @param {string} api_version The API version to use for this operation.
		 * @param {ArtifactSource} requestBody Source object that defines the resource.
		 * @return {void} 
		 */
		ArtifactSources_CreateOrUpdate(subscriptionId: string, resourceGroupName: string, artifactSourceName: string, api_version: string, requestBody: ArtifactSource): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DeploymentManager/artifactSources/' + (artifactSourceName == null ? '' : encodeURIComponent(artifactSourceName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes an artifact source.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DeploymentManager/artifactSources/{artifactSourceName}
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group. The name is case insensitive.
		 *     Min length: 1    Max length: 90
		 * @param {string} artifactSourceName The name of the artifact source.
		 * @param {string} api_version The API version to use for this operation.
		 * @return {void} The artifact source was successfully deleted.
		 */
		ArtifactSources_Delete(subscriptionId: string, resourceGroupName: string, artifactSourceName: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DeploymentManager/artifactSources/' + (artifactSourceName == null ? '' : encodeURIComponent(artifactSourceName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists the rollouts in a resource group.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DeploymentManager/rollouts
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group. The name is case insensitive.
		 *     Min length: 1    Max length: 90
		 * @param {string} api_version The API version to use for this operation.
		 * @return {Array<Rollout>} OK
		 */
		Rollouts_List(subscriptionId: string, resourceGroupName: string, api_version: string): Observable<Array<Rollout>> {
			return this.http.get<Array<Rollout>>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DeploymentManager/rollouts&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets detailed information of a rollout.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DeploymentManager/rollouts/{rolloutName}
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group. The name is case insensitive.
		 *     Min length: 1    Max length: 90
		 * @param {string} rolloutName The rollout name.
		 * @param {string} api_version The API version to use for this operation.
		 * @param {number} retryAttempt Rollout retry attempt ordinal to get the result of. If not specified, result of the latest attempt will be returned.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {Rollout} OK
		 */
		Rollouts_Get(subscriptionId: string, resourceGroupName: string, rolloutName: string, api_version: string, retryAttempt: number | null | undefined): Observable<Rollout> {
			return this.http.get<Rollout>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DeploymentManager/rollouts/' + (rolloutName == null ? '' : encodeURIComponent(rolloutName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&retryAttempt=' + retryAttempt, {});
		}

		/**
		 * Creates or updates a rollout.
		 * This is an asynchronous operation and can be polled to completion using the location header returned by this operation.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DeploymentManager/rollouts/{rolloutName}
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group. The name is case insensitive.
		 *     Min length: 1    Max length: 90
		 * @param {string} rolloutName The rollout name.
		 * @param {string} api_version The API version to use for this operation.
		 * @param {RolloutRequest} requestBody Source rollout request object that defines the rollout.
		 * @return {void} 
		 */
		Rollouts_CreateOrUpdate(subscriptionId: string, resourceGroupName: string, rolloutName: string, api_version: string, requestBody: RolloutRequest): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DeploymentManager/rollouts/' + (rolloutName == null ? '' : encodeURIComponent(rolloutName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a rollout resource.
		 * Only rollouts in terminal state can be deleted.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DeploymentManager/rollouts/{rolloutName}
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group. The name is case insensitive.
		 *     Min length: 1    Max length: 90
		 * @param {string} rolloutName The rollout name.
		 * @param {string} api_version The API version to use for this operation.
		 * @return {void} The rollout was successfully deleted.
		 */
		Rollouts_Delete(subscriptionId: string, resourceGroupName: string, rolloutName: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DeploymentManager/rollouts/' + (rolloutName == null ? '' : encodeURIComponent(rolloutName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Stops a running rollout.
		 * Only running rollouts can be canceled.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DeploymentManager/rollouts/{rolloutName}/cancel
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group. The name is case insensitive.
		 *     Min length: 1    Max length: 90
		 * @param {string} rolloutName The rollout name.
		 * @param {string} api_version The API version to use for this operation.
		 * @return {Rollout} OK
		 */
		Rollouts_Cancel(subscriptionId: string, resourceGroupName: string, rolloutName: string, api_version: string): Observable<Rollout> {
			return this.http.post<Rollout>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DeploymentManager/rollouts/' + (rolloutName == null ? '' : encodeURIComponent(rolloutName)) + '/cancel&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, {});
		}

		/**
		 * Restarts a failed rollout and optionally skips all succeeded steps.
		 * Only failed rollouts can be restarted.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DeploymentManager/rollouts/{rolloutName}/restart
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group. The name is case insensitive.
		 *     Min length: 1    Max length: 90
		 * @param {string} rolloutName The rollout name.
		 * @param {boolean} skipSucceeded If true, will skip all succeeded steps so far in the rollout. If false, will execute the entire rollout again regardless of the current state of individual resources. Defaults to false if not specified.
		 * @param {string} api_version The API version to use for this operation.
		 * @return {Rollout} OK
		 */
		Rollouts_Restart(subscriptionId: string, resourceGroupName: string, rolloutName: string, skipSucceeded: boolean | null | undefined, api_version: string): Observable<Rollout> {
			return this.http.post<Rollout>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DeploymentManager/rollouts/' + (rolloutName == null ? '' : encodeURIComponent(rolloutName)) + '/restart&skipSucceeded=' + skipSucceeded + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, {});
		}

		/**
		 * Lists the service topologies in the resource group.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DeploymentManager/serviceTopologies
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group. The name is case insensitive.
		 *     Min length: 1    Max length: 90
		 * @param {string} api_version The API version to use for this operation.
		 * @return {Array<ServiceTopologyResource>} OK
		 */
		ServiceTopologies_List(subscriptionId: string, resourceGroupName: string, api_version: string): Observable<Array<ServiceTopologyResource>> {
			return this.http.get<Array<ServiceTopologyResource>>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DeploymentManager/serviceTopologies&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets the service topology.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DeploymentManager/serviceTopologies/{serviceTopologyName}
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group. The name is case insensitive.
		 *     Min length: 1    Max length: 90
		 * @param {string} serviceTopologyName The name of the service topology .
		 * @param {string} api_version The API version to use for this operation.
		 * @return {ServiceTopologyResource} OK
		 */
		ServiceTopologies_Get(subscriptionId: string, resourceGroupName: string, serviceTopologyName: string, api_version: string): Observable<ServiceTopologyResource> {
			return this.http.get<ServiceTopologyResource>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DeploymentManager/serviceTopologies/' + (serviceTopologyName == null ? '' : encodeURIComponent(serviceTopologyName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates or updates a service topology.
		 * Synchronously creates a new service topology or updates an existing service topology.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DeploymentManager/serviceTopologies/{serviceTopologyName}
		 * @param {ServiceTopologyResource} requestBody Source topology object defines the resource.
		 * @return {void} 
		 */
		ServiceTopologies_CreateOrUpdate(requestBody: ServiceTopologyResource): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DeploymentManager/serviceTopologies/{serviceTopologyName}', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes the service topology.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DeploymentManager/serviceTopologies/{serviceTopologyName}
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group. The name is case insensitive.
		 *     Min length: 1    Max length: 90
		 * @param {string} serviceTopologyName The name of the service topology .
		 * @param {string} api_version The API version to use for this operation.
		 * @return {void} The topology was successfully deleted.
		 */
		ServiceTopologies_Delete(subscriptionId: string, resourceGroupName: string, serviceTopologyName: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DeploymentManager/serviceTopologies/' + (serviceTopologyName == null ? '' : encodeURIComponent(serviceTopologyName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists the services in the service topology.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DeploymentManager/serviceTopologies/{serviceTopologyName}/services
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group. The name is case insensitive.
		 *     Min length: 1    Max length: 90
		 * @param {string} serviceTopologyName The name of the service topology .
		 * @param {string} api_version The API version to use for this operation.
		 * @return {Array<ServiceResource>} OK
		 */
		Services_List(subscriptionId: string, resourceGroupName: string, serviceTopologyName: string, api_version: string): Observable<Array<ServiceResource>> {
			return this.http.get<Array<ServiceResource>>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DeploymentManager/serviceTopologies/' + (serviceTopologyName == null ? '' : encodeURIComponent(serviceTopologyName)) + '/services&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets the service.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DeploymentManager/serviceTopologies/{serviceTopologyName}/services/{serviceName}
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group. The name is case insensitive.
		 *     Min length: 1    Max length: 90
		 * @param {string} serviceTopologyName The name of the service topology .
		 * @param {string} serviceName The name of the service resource.
		 * @param {string} api_version The API version to use for this operation.
		 * @return {ServiceResource} OK
		 */
		Services_Get(subscriptionId: string, resourceGroupName: string, serviceTopologyName: string, serviceName: string, api_version: string): Observable<ServiceResource> {
			return this.http.get<ServiceResource>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DeploymentManager/serviceTopologies/' + (serviceTopologyName == null ? '' : encodeURIComponent(serviceTopologyName)) + '/services/' + (serviceName == null ? '' : encodeURIComponent(serviceName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates or updates a service in the service topology.
		 * Synchronously creates a new service or updates an existing service.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DeploymentManager/serviceTopologies/{serviceTopologyName}/services/{serviceName}
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group. The name is case insensitive.
		 *     Min length: 1    Max length: 90
		 * @param {string} serviceTopologyName The name of the service topology .
		 * @param {string} serviceName The name of the service resource.
		 * @param {string} api_version The API version to use for this operation.
		 * @param {ServiceResource} requestBody The service object
		 * @return {void} 
		 */
		Services_CreateOrUpdate(subscriptionId: string, resourceGroupName: string, serviceTopologyName: string, serviceName: string, api_version: string, requestBody: ServiceResource): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DeploymentManager/serviceTopologies/' + (serviceTopologyName == null ? '' : encodeURIComponent(serviceTopologyName)) + '/services/' + (serviceName == null ? '' : encodeURIComponent(serviceName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes the service.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DeploymentManager/serviceTopologies/{serviceTopologyName}/services/{serviceName}
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group. The name is case insensitive.
		 *     Min length: 1    Max length: 90
		 * @param {string} serviceTopologyName The name of the service topology .
		 * @param {string} serviceName The name of the service resource.
		 * @param {string} api_version The API version to use for this operation.
		 * @return {void} The service was successfully deleted.
		 */
		Services_Delete(subscriptionId: string, resourceGroupName: string, serviceTopologyName: string, serviceName: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DeploymentManager/serviceTopologies/' + (serviceTopologyName == null ? '' : encodeURIComponent(serviceTopologyName)) + '/services/' + (serviceName == null ? '' : encodeURIComponent(serviceName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists the service units under a service in the service topology.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DeploymentManager/serviceTopologies/{serviceTopologyName}/services/{serviceName}/serviceUnits
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group. The name is case insensitive.
		 *     Min length: 1    Max length: 90
		 * @param {string} serviceTopologyName The name of the service topology .
		 * @param {string} serviceName The name of the service resource.
		 * @param {string} api_version The API version to use for this operation.
		 * @return {Array<ServiceUnitResource>} OK
		 */
		ServiceUnits_List(subscriptionId: string, resourceGroupName: string, serviceTopologyName: string, serviceName: string, api_version: string): Observable<Array<ServiceUnitResource>> {
			return this.http.get<Array<ServiceUnitResource>>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DeploymentManager/serviceTopologies/' + (serviceTopologyName == null ? '' : encodeURIComponent(serviceTopologyName)) + '/services/' + (serviceName == null ? '' : encodeURIComponent(serviceName)) + '/serviceUnits&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets the service unit.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DeploymentManager/serviceTopologies/{serviceTopologyName}/services/{serviceName}/serviceUnits/{serviceUnitName}
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group. The name is case insensitive.
		 *     Min length: 1    Max length: 90
		 * @param {string} serviceTopologyName The name of the service topology .
		 * @param {string} serviceName The name of the service resource.
		 * @param {string} serviceUnitName The name of the service unit resource.
		 * @param {string} api_version The API version to use for this operation.
		 * @return {ServiceUnitResource} OK
		 */
		ServiceUnits_Get(subscriptionId: string, resourceGroupName: string, serviceTopologyName: string, serviceName: string, serviceUnitName: string, api_version: string): Observable<ServiceUnitResource> {
			return this.http.get<ServiceUnitResource>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DeploymentManager/serviceTopologies/' + (serviceTopologyName == null ? '' : encodeURIComponent(serviceTopologyName)) + '/services/' + (serviceName == null ? '' : encodeURIComponent(serviceName)) + '/serviceUnits/' + (serviceUnitName == null ? '' : encodeURIComponent(serviceUnitName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates or updates a service unit under the service in the service topology.
		 * This is an asynchronous operation and can be polled to completion using the operation resource returned by this operation.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DeploymentManager/serviceTopologies/{serviceTopologyName}/services/{serviceName}/serviceUnits/{serviceUnitName}
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group. The name is case insensitive.
		 *     Min length: 1    Max length: 90
		 * @param {string} serviceTopologyName The name of the service topology .
		 * @param {string} serviceName The name of the service resource.
		 * @param {string} serviceUnitName The name of the service unit resource.
		 * @param {string} api_version The API version to use for this operation.
		 * @param {ServiceUnitResource} requestBody The service unit resource object.
		 * @return {void} 
		 */
		ServiceUnits_CreateOrUpdate(subscriptionId: string, resourceGroupName: string, serviceTopologyName: string, serviceName: string, serviceUnitName: string, api_version: string, requestBody: ServiceUnitResource): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DeploymentManager/serviceTopologies/' + (serviceTopologyName == null ? '' : encodeURIComponent(serviceTopologyName)) + '/services/' + (serviceName == null ? '' : encodeURIComponent(serviceName)) + '/serviceUnits/' + (serviceUnitName == null ? '' : encodeURIComponent(serviceUnitName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes the service unit.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DeploymentManager/serviceTopologies/{serviceTopologyName}/services/{serviceName}/serviceUnits/{serviceUnitName}
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group. The name is case insensitive.
		 *     Min length: 1    Max length: 90
		 * @param {string} serviceTopologyName The name of the service topology .
		 * @param {string} serviceName The name of the service resource.
		 * @param {string} serviceUnitName The name of the service unit resource.
		 * @param {string} api_version The API version to use for this operation.
		 * @return {void} The service unit was successfully deleted.
		 */
		ServiceUnits_Delete(subscriptionId: string, resourceGroupName: string, serviceTopologyName: string, serviceName: string, serviceUnitName: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DeploymentManager/serviceTopologies/' + (serviceTopologyName == null ? '' : encodeURIComponent(serviceTopologyName)) + '/services/' + (serviceName == null ? '' : encodeURIComponent(serviceName)) + '/serviceUnits/' + (serviceUnitName == null ? '' : encodeURIComponent(serviceUnitName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists the steps in a resource group.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DeploymentManager/steps
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group. The name is case insensitive.
		 *     Min length: 1    Max length: 90
		 * @param {string} api_version The API version to use for this operation.
		 * @return {Array<StepResource>} OK
		 */
		Steps_List(subscriptionId: string, resourceGroupName: string, api_version: string): Observable<Array<StepResource>> {
			return this.http.get<Array<StepResource>>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DeploymentManager/steps&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets the step.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DeploymentManager/steps/{stepName}
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group. The name is case insensitive.
		 *     Min length: 1    Max length: 90
		 * @param {string} stepName The name of the deployment step.
		 * @param {string} api_version The API version to use for this operation.
		 * @return {StepResource} OK
		 */
		Steps_Get(subscriptionId: string, resourceGroupName: string, stepName: string, api_version: string): Observable<StepResource> {
			return this.http.get<StepResource>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DeploymentManager/steps/' + (stepName == null ? '' : encodeURIComponent(stepName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates or updates a rollout step with the given step properties.
		 * Synchronously creates a new step or updates an existing step.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DeploymentManager/steps/{stepName}
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group. The name is case insensitive.
		 *     Min length: 1    Max length: 90
		 * @param {string} stepName The name of the deployment step.
		 * @param {string} api_version The API version to use for this operation.
		 * @param {StepResource} requestBody The step object.
		 * @return {void} 
		 */
		Steps_CreateOrUpdate(subscriptionId: string, resourceGroupName: string, stepName: string, api_version: string, requestBody: StepResource): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DeploymentManager/steps/' + (stepName == null ? '' : encodeURIComponent(stepName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes the step.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DeploymentManager/steps/{stepName}
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group. The name is case insensitive.
		 *     Min length: 1    Max length: 90
		 * @param {string} stepName The name of the deployment step.
		 * @param {string} api_version The API version to use for this operation.
		 * @return {void} The step was successfully deleted.
		 */
		Steps_Delete(subscriptionId: string, resourceGroupName: string, stepName: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DeploymentManager/steps/' + (stepName == null ? '' : encodeURIComponent(stepName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}
	}

}

