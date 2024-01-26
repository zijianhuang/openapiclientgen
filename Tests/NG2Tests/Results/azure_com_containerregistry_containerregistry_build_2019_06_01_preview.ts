import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** The properties that determine the run agent configuration. */
	export interface AgentProperties {

		/** The CPU configuration in terms of number of cores required for the run. */
		cpu?: number | null;
	}

	/** The properties that determine the run agent configuration. */
	export interface AgentPropertiesFormProperties {

		/** The CPU configuration in terms of number of cores required for the run. */
		cpu: FormControl<number | null | undefined>,
	}
	export function CreateAgentPropertiesFormGroup() {
		return new FormGroup<AgentPropertiesFormProperties>({
			cpu: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The properties of a run argument. */
	export interface Argument {

		/** Flag to indicate whether the argument represents a secret and want to be removed from build logs. */
		isSecret?: boolean | null;

		/**
		 * The name of the argument.
		 * Required
		 */
		name: string;

		/**
		 * The value of the argument.
		 * Required
		 */
		value: string;
	}

	/** The properties of a run argument. */
	export interface ArgumentFormProperties {

		/** Flag to indicate whether the argument represents a secret and want to be removed from build logs. */
		isSecret: FormControl<boolean | null | undefined>,

		/**
		 * The name of the argument.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The value of the argument.
		 * Required
		 */
		value: FormControl<string | null | undefined>,
	}
	export function CreateArgumentFormGroup() {
		return new FormGroup<ArgumentFormProperties>({
			isSecret: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The authorization properties for accessing the source code repository. */
	export interface AuthInfo {

		/** Time in seconds that the token remains valid */
		expiresIn?: number | null;

		/** The refresh token used to refresh the access token. */
		refreshToken?: string | null;

		/** The scope of the access token. */
		scope?: string | null;

		/**
		 * The access token used to access the source control provider.
		 * Required
		 */
		token: string;

		/**
		 * The type of Auth token.
		 * Required
		 */
		tokenType: AuthInfoTokenType;
	}

	/** The authorization properties for accessing the source code repository. */
	export interface AuthInfoFormProperties {

		/** Time in seconds that the token remains valid */
		expiresIn: FormControl<number | null | undefined>,

		/** The refresh token used to refresh the access token. */
		refreshToken: FormControl<string | null | undefined>,

		/** The scope of the access token. */
		scope: FormControl<string | null | undefined>,

		/**
		 * The access token used to access the source control provider.
		 * Required
		 */
		token: FormControl<string | null | undefined>,

		/**
		 * The type of Auth token.
		 * Required
		 */
		tokenType: FormControl<AuthInfoTokenType | null | undefined>,
	}
	export function CreateAuthInfoFormGroup() {
		return new FormGroup<AuthInfoFormProperties>({
			expiresIn: new FormControl<number | null | undefined>(undefined),
			refreshToken: new FormControl<string | null | undefined>(undefined),
			scope: new FormControl<string | null | undefined>(undefined),
			token: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			tokenType: new FormControl<AuthInfoTokenType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum AuthInfoTokenType { PAT = 0, OAuth = 1 }


	/** The authorization properties for accessing the source code repository. */
	export interface AuthInfoUpdateParameters {

		/** Time in seconds that the token remains valid */
		expiresIn?: number | null;

		/** The refresh token used to refresh the access token. */
		refreshToken?: string | null;

		/** The scope of the access token. */
		scope?: string | null;

		/** The access token used to access the source control provider. */
		token?: string | null;

		/** The type of Auth token. */
		tokenType?: AuthInfoTokenType | null;
	}

	/** The authorization properties for accessing the source code repository. */
	export interface AuthInfoUpdateParametersFormProperties {

		/** Time in seconds that the token remains valid */
		expiresIn: FormControl<number | null | undefined>,

		/** The refresh token used to refresh the access token. */
		refreshToken: FormControl<string | null | undefined>,

		/** The scope of the access token. */
		scope: FormControl<string | null | undefined>,

		/** The access token used to access the source control provider. */
		token: FormControl<string | null | undefined>,

		/** The type of Auth token. */
		tokenType: FormControl<AuthInfoTokenType | null | undefined>,
	}
	export function CreateAuthInfoUpdateParametersFormGroup() {
		return new FormGroup<AuthInfoUpdateParametersFormProperties>({
			expiresIn: new FormControl<number | null | undefined>(undefined),
			refreshToken: new FormControl<string | null | undefined>(undefined),
			scope: new FormControl<string | null | undefined>(undefined),
			token: new FormControl<string | null | undefined>(undefined),
			tokenType: new FormControl<AuthInfoTokenType | null | undefined>(undefined),
		});

	}


	/** Properties that describe a base image dependency. */
	export interface BaseImageDependency {

		/** The sha256-based digest of the image manifest. */
		digest?: string | null;

		/** The registry login server. */
		registry?: string | null;

		/** The repository name. */
		repository?: string | null;

		/** The tag name. */
		tag?: string | null;

		/** The type of the base image dependency. */
		type?: BaseImageDependencyType | null;
	}

	/** Properties that describe a base image dependency. */
	export interface BaseImageDependencyFormProperties {

		/** The sha256-based digest of the image manifest. */
		digest: FormControl<string | null | undefined>,

		/** The registry login server. */
		registry: FormControl<string | null | undefined>,

		/** The repository name. */
		repository: FormControl<string | null | undefined>,

		/** The tag name. */
		tag: FormControl<string | null | undefined>,

		/** The type of the base image dependency. */
		type: FormControl<BaseImageDependencyType | null | undefined>,
	}
	export function CreateBaseImageDependencyFormGroup() {
		return new FormGroup<BaseImageDependencyFormProperties>({
			digest: new FormControl<string | null | undefined>(undefined),
			registry: new FormControl<string | null | undefined>(undefined),
			repository: new FormControl<string | null | undefined>(undefined),
			tag: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<BaseImageDependencyType | null | undefined>(undefined),
		});

	}

	export enum BaseImageDependencyType { BuildTime = 0, RunTime = 1 }


	/** The trigger based on base image dependency. */
	export interface BaseImageTrigger {

		/**
		 * The type of the auto trigger for base image dependency updates.
		 * Required
		 */
		baseImageTriggerType: BaseImageTriggerBaseImageTriggerType;

		/**
		 * The name of the trigger.
		 * Required
		 */
		name: string;

		/** The current status of trigger. */
		status?: BaseImageTriggerStatus | null;

		/** The endpoint URL for receiving update triggers. */
		updateTriggerEndpoint?: string | null;

		/** Type of Payload body for Base image update triggers. */
		updateTriggerPayloadType?: BaseImageTriggerUpdateTriggerPayloadType | null;
	}

	/** The trigger based on base image dependency. */
	export interface BaseImageTriggerFormProperties {

		/**
		 * The type of the auto trigger for base image dependency updates.
		 * Required
		 */
		baseImageTriggerType: FormControl<BaseImageTriggerBaseImageTriggerType | null | undefined>,

		/**
		 * The name of the trigger.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/** The current status of trigger. */
		status: FormControl<BaseImageTriggerStatus | null | undefined>,

		/** The endpoint URL for receiving update triggers. */
		updateTriggerEndpoint: FormControl<string | null | undefined>,

		/** Type of Payload body for Base image update triggers. */
		updateTriggerPayloadType: FormControl<BaseImageTriggerUpdateTriggerPayloadType | null | undefined>,
	}
	export function CreateBaseImageTriggerFormGroup() {
		return new FormGroup<BaseImageTriggerFormProperties>({
			baseImageTriggerType: new FormControl<BaseImageTriggerBaseImageTriggerType | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<BaseImageTriggerStatus | null | undefined>(undefined),
			updateTriggerEndpoint: new FormControl<string | null | undefined>(undefined),
			updateTriggerPayloadType: new FormControl<BaseImageTriggerUpdateTriggerPayloadType | null | undefined>(undefined),
		});

	}

	export enum BaseImageTriggerBaseImageTriggerType { All = 0, Runtime = 1 }

	export enum BaseImageTriggerStatus { Disabled = 0, Enabled = 1 }

	export enum BaseImageTriggerUpdateTriggerPayloadType { Default = 0, Token = 1 }


	/** The properties for updating base image dependency trigger. */
	export interface BaseImageTriggerUpdateParameters {

		/** The type of the auto trigger for base image dependency updates. */
		baseImageTriggerType?: BaseImageTriggerBaseImageTriggerType | null;

		/**
		 * The name of the trigger.
		 * Required
		 */
		name: string;

		/** The current status of trigger. */
		status?: BaseImageTriggerStatus | null;

		/** The endpoint URL for receiving update triggers. */
		updateTriggerEndpoint?: string | null;

		/** Type of Payload body for Base image update triggers. */
		updateTriggerPayloadType?: BaseImageTriggerUpdateTriggerPayloadType | null;
	}

	/** The properties for updating base image dependency trigger. */
	export interface BaseImageTriggerUpdateParametersFormProperties {

		/** The type of the auto trigger for base image dependency updates. */
		baseImageTriggerType: FormControl<BaseImageTriggerBaseImageTriggerType | null | undefined>,

		/**
		 * The name of the trigger.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/** The current status of trigger. */
		status: FormControl<BaseImageTriggerStatus | null | undefined>,

		/** The endpoint URL for receiving update triggers. */
		updateTriggerEndpoint: FormControl<string | null | undefined>,

		/** Type of Payload body for Base image update triggers. */
		updateTriggerPayloadType: FormControl<BaseImageTriggerUpdateTriggerPayloadType | null | undefined>,
	}
	export function CreateBaseImageTriggerUpdateParametersFormGroup() {
		return new FormGroup<BaseImageTriggerUpdateParametersFormProperties>({
			baseImageTriggerType: new FormControl<BaseImageTriggerBaseImageTriggerType | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<BaseImageTriggerStatus | null | undefined>(undefined),
			updateTriggerEndpoint: new FormControl<string | null | undefined>(undefined),
			updateTriggerPayloadType: new FormControl<BaseImageTriggerUpdateTriggerPayloadType | null | undefined>(undefined),
		});

	}


	/** The parameters that describes a set of credentials that will be used when a run is invoked. */
	export interface Credentials {

		/**
		 * Describes the credential parameters for accessing other custom registries. The key
		 * for the dictionary item will be the registry login server (myregistry.azurecr.io) and
		 * the value of the item will be the registry credentials for accessing the registry.
		 */
		customRegistries?: {[id: string]: CustomRegistryCredentials };

		/** Describes the credential parameters for accessing the source registry. */
		sourceRegistry?: SourceRegistryCredentials;
	}

	/** The parameters that describes a set of credentials that will be used when a run is invoked. */
	export interface CredentialsFormProperties {

		/**
		 * Describes the credential parameters for accessing other custom registries. The key
		 * for the dictionary item will be the registry login server (myregistry.azurecr.io) and
		 * the value of the item will be the registry credentials for accessing the registry.
		 */
		customRegistries: FormControl<{[id: string]: CustomRegistryCredentials } | null | undefined>,
	}
	export function CreateCredentialsFormGroup() {
		return new FormGroup<CredentialsFormProperties>({
			customRegistries: new FormControl<{[id: string]: CustomRegistryCredentials } | null | undefined>(undefined),
		});

	}


	/** Describes the credentials that will be used to access a custom registry during a run. */
	export interface CustomRegistryCredentials {

		/**
		 * Indicates the managed identity assigned to the custom credential. If a user-assigned identity
		 * this value is the Client ID. If a system-assigned identity, the value will be `system`. In
		 * the case of a system-assigned identity, the Client ID will be determined by the runner. This
		 * identity may be used to authenticate to key vault to retrieve credentials or it may be the only
		 * source of authentication used for accessing the registry.
		 */
		identity?: string | null;

		/** Describes the properties of a secret object value. */
		password?: SecretObject;

		/** Describes the properties of a secret object value. */
		userName?: SecretObject;
	}

	/** Describes the credentials that will be used to access a custom registry during a run. */
	export interface CustomRegistryCredentialsFormProperties {

		/**
		 * Indicates the managed identity assigned to the custom credential. If a user-assigned identity
		 * this value is the Client ID. If a system-assigned identity, the value will be `system`. In
		 * the case of a system-assigned identity, the Client ID will be determined by the runner. This
		 * identity may be used to authenticate to key vault to retrieve credentials or it may be the only
		 * source of authentication used for accessing the registry.
		 */
		identity: FormControl<string | null | undefined>,
	}
	export function CreateCustomRegistryCredentialsFormGroup() {
		return new FormGroup<CustomRegistryCredentialsFormProperties>({
			identity: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes the properties of a secret object value. */
	export interface SecretObject {

		/**
		 * The type of the secret object which determines how the value of the secret object has to be
		 * interpreted.
		 */
		type?: SecretObjectType | null;

		/**
		 * The value of the secret. The format of this value will be determined
		 * based on the type of the secret object. If the type is Opaque, the value will be
		 * used as is without any modification.
		 */
		value?: string | null;
	}

	/** Describes the properties of a secret object value. */
	export interface SecretObjectFormProperties {

		/**
		 * The type of the secret object which determines how the value of the secret object has to be
		 * interpreted.
		 */
		type: FormControl<SecretObjectType | null | undefined>,

		/**
		 * The value of the secret. The format of this value will be determined
		 * based on the type of the secret object. If the type is Opaque, the value will be
		 * used as is without any modification.
		 */
		value: FormControl<string | null | undefined>,
	}
	export function CreateSecretObjectFormGroup() {
		return new FormGroup<SecretObjectFormProperties>({
			type: new FormControl<SecretObjectType | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum SecretObjectType { Opaque = 0, Vaultsecret = 1 }


	/** Describes the credential parameters for accessing the source registry. */
	export interface SourceRegistryCredentials {

		/**
		 * The authentication mode which determines the source registry login scope. The credentials for the source registry
		 * will be generated using the given scope. These credentials will be used to login to
		 * the source registry during the run.
		 */
		loginMode?: SourceRegistryCredentialsLoginMode | null;
	}

	/** Describes the credential parameters for accessing the source registry. */
	export interface SourceRegistryCredentialsFormProperties {

		/**
		 * The authentication mode which determines the source registry login scope. The credentials for the source registry
		 * will be generated using the given scope. These credentials will be used to login to
		 * the source registry during the run.
		 */
		loginMode: FormControl<SourceRegistryCredentialsLoginMode | null | undefined>,
	}
	export function CreateSourceRegistryCredentialsFormGroup() {
		return new FormGroup<SourceRegistryCredentialsFormProperties>({
			loginMode: new FormControl<SourceRegistryCredentialsLoginMode | null | undefined>(undefined),
		});

	}

	export enum SourceRegistryCredentialsLoginMode { None = 0, Default = 1 }


	/** The parameters for a docker quick build. */
	export interface DockerBuildRequest {

		/** The properties that determine the run agent configuration. */
		agentConfiguration?: AgentProperties;

		/** The collection of override arguments to be used when executing the run. */
		arguments?: Array<Argument>;

		/** The parameters that describes a set of credentials that will be used when a run is invoked. */
		credentials?: Credentials;

		/**
		 * The Docker file path relative to the source location.
		 * Required
		 */
		dockerFilePath: string;

		/** The fully qualified image names including the repository and tag. */
		imageNames?: Array<string>;

		/** The value of this property indicates whether the image built should be pushed to the registry or not. */
		isPushEnabled?: boolean | null;

		/** The value of this property indicates whether the image cache is enabled or not. */
		noCache?: boolean | null;

		/**
		 * The platform properties against which the run has to happen.
		 * Required
		 */
		platform: PlatformProperties;

		/**
		 * The URL(absolute or relative) of the source context. It can be an URL to a tar or git repository.
		 * If it is relative URL, the relative path should be obtained from calling listBuildSourceUploadUrl API.
		 */
		sourceLocation?: string | null;

		/** The name of the target build stage for the docker build. */
		target?: string | null;

		/**
		 * Run timeout in seconds.
		 * Minimum: 300
		 * Maximum: 28800
		 */
		timeout?: number | null;
	}

	/** The parameters for a docker quick build. */
	export interface DockerBuildRequestFormProperties {

		/**
		 * The Docker file path relative to the source location.
		 * Required
		 */
		dockerFilePath: FormControl<string | null | undefined>,

		/** The value of this property indicates whether the image built should be pushed to the registry or not. */
		isPushEnabled: FormControl<boolean | null | undefined>,

		/** The value of this property indicates whether the image cache is enabled or not. */
		noCache: FormControl<boolean | null | undefined>,

		/**
		 * The URL(absolute or relative) of the source context. It can be an URL to a tar or git repository.
		 * If it is relative URL, the relative path should be obtained from calling listBuildSourceUploadUrl API.
		 */
		sourceLocation: FormControl<string | null | undefined>,

		/** The name of the target build stage for the docker build. */
		target: FormControl<string | null | undefined>,

		/**
		 * Run timeout in seconds.
		 * Minimum: 300
		 * Maximum: 28800
		 */
		timeout: FormControl<number | null | undefined>,
	}
	export function CreateDockerBuildRequestFormGroup() {
		return new FormGroup<DockerBuildRequestFormProperties>({
			dockerFilePath: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			isPushEnabled: new FormControl<boolean | null | undefined>(undefined),
			noCache: new FormControl<boolean | null | undefined>(undefined),
			sourceLocation: new FormControl<string | null | undefined>(undefined),
			target: new FormControl<string | null | undefined>(undefined),
			timeout: new FormControl<number | null | undefined>(undefined, [Validators.min(300), Validators.max(28800)]),
		});

	}


	/** The platform properties against which the run has to happen. */
	export interface PlatformProperties {

		/** The OS architecture. */
		architecture?: PlatformPropertiesArchitecture | null;

		/**
		 * The operating system type required for the run.
		 * Required
		 */
		os: PlatformPropertiesOs;

		/** Variant of the CPU. */
		variant?: PlatformPropertiesVariant | null;
	}

	/** The platform properties against which the run has to happen. */
	export interface PlatformPropertiesFormProperties {

		/** The OS architecture. */
		architecture: FormControl<PlatformPropertiesArchitecture | null | undefined>,

		/**
		 * The operating system type required for the run.
		 * Required
		 */
		os: FormControl<PlatformPropertiesOs | null | undefined>,

		/** Variant of the CPU. */
		variant: FormControl<PlatformPropertiesVariant | null | undefined>,
	}
	export function CreatePlatformPropertiesFormGroup() {
		return new FormGroup<PlatformPropertiesFormProperties>({
			architecture: new FormControl<PlatformPropertiesArchitecture | null | undefined>(undefined),
			os: new FormControl<PlatformPropertiesOs | null | undefined>(undefined, [Validators.required]),
			variant: new FormControl<PlatformPropertiesVariant | null | undefined>(undefined),
		});

	}

	export enum PlatformPropertiesArchitecture { amd64 = 0, x86 = 1, _386 = 2, arm = 3, arm64 = 4 }

	export enum PlatformPropertiesOs { Windows = 0, Linux = 1 }

	export enum PlatformPropertiesVariant { v6 = 0, v7 = 1, v8 = 2 }


	/** The Docker build step. */
	export interface DockerBuildStep {

		/** The collection of override arguments to be used when executing this build step. */
		arguments?: Array<Argument>;

		/**
		 * The Docker file path relative to the source context.
		 * Required
		 */
		dockerFilePath: string;

		/** The fully qualified image names including the repository and tag. */
		imageNames?: Array<string>;

		/** The value of this property indicates whether the image built should be pushed to the registry or not. */
		isPushEnabled?: boolean | null;

		/** The value of this property indicates whether the image cache is enabled or not. */
		noCache?: boolean | null;

		/** The name of the target build stage for the docker build. */
		target?: string | null;
	}

	/** The Docker build step. */
	export interface DockerBuildStepFormProperties {

		/**
		 * The Docker file path relative to the source context.
		 * Required
		 */
		dockerFilePath: FormControl<string | null | undefined>,

		/** The value of this property indicates whether the image built should be pushed to the registry or not. */
		isPushEnabled: FormControl<boolean | null | undefined>,

		/** The value of this property indicates whether the image cache is enabled or not. */
		noCache: FormControl<boolean | null | undefined>,

		/** The name of the target build stage for the docker build. */
		target: FormControl<string | null | undefined>,
	}
	export function CreateDockerBuildStepFormGroup() {
		return new FormGroup<DockerBuildStepFormProperties>({
			dockerFilePath: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			isPushEnabled: new FormControl<boolean | null | undefined>(undefined),
			noCache: new FormControl<boolean | null | undefined>(undefined),
			target: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The properties for updating a docker build step. */
	export interface DockerBuildStepUpdateParameters {

		/** The collection of override arguments to be used when executing this build step. */
		arguments?: Array<Argument>;

		/** The Docker file path relative to the source context. */
		dockerFilePath?: string | null;

		/** The fully qualified image names including the repository and tag. */
		imageNames?: Array<string>;

		/** The value of this property indicates whether the image built should be pushed to the registry or not. */
		isPushEnabled?: boolean | null;

		/** The value of this property indicates whether the image cache is enabled or not. */
		noCache?: boolean | null;

		/** The name of the target build stage for the docker build. */
		target?: string | null;
	}

	/** The properties for updating a docker build step. */
	export interface DockerBuildStepUpdateParametersFormProperties {

		/** The Docker file path relative to the source context. */
		dockerFilePath: FormControl<string | null | undefined>,

		/** The value of this property indicates whether the image built should be pushed to the registry or not. */
		isPushEnabled: FormControl<boolean | null | undefined>,

		/** The value of this property indicates whether the image cache is enabled or not. */
		noCache: FormControl<boolean | null | undefined>,

		/** The name of the target build stage for the docker build. */
		target: FormControl<string | null | undefined>,
	}
	export function CreateDockerBuildStepUpdateParametersFormGroup() {
		return new FormGroup<DockerBuildStepUpdateParametersFormProperties>({
			dockerFilePath: new FormControl<string | null | undefined>(undefined),
			isPushEnabled: new FormControl<boolean | null | undefined>(undefined),
			noCache: new FormControl<boolean | null | undefined>(undefined),
			target: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The parameters for a quick task run request. */
	export interface EncodedTaskRunRequest {

		/** The properties that determine the run agent configuration. */
		agentConfiguration?: AgentProperties;

		/** The parameters that describes a set of credentials that will be used when a run is invoked. */
		credentials?: Credentials;

		/**
		 * Base64 encoded value of the template/definition file content.
		 * Required
		 */
		encodedTaskContent: string;

		/** Base64 encoded value of the parameters/values file content. */
		encodedValuesContent?: string | null;

		/**
		 * The platform properties against which the run has to happen.
		 * Required
		 */
		platform: PlatformProperties;

		/**
		 * The URL(absolute or relative) of the source context. It can be an URL to a tar or git repository.
		 * If it is relative URL, the relative path should be obtained from calling listBuildSourceUploadUrl API.
		 */
		sourceLocation?: string | null;

		/**
		 * Run timeout in seconds.
		 * Minimum: 300
		 * Maximum: 28800
		 */
		timeout?: number | null;

		/** The collection of overridable values that can be passed when running a task. */
		values?: Array<SetValue>;
	}

	/** The parameters for a quick task run request. */
	export interface EncodedTaskRunRequestFormProperties {

		/**
		 * Base64 encoded value of the template/definition file content.
		 * Required
		 */
		encodedTaskContent: FormControl<string | null | undefined>,

		/** Base64 encoded value of the parameters/values file content. */
		encodedValuesContent: FormControl<string | null | undefined>,

		/**
		 * The URL(absolute or relative) of the source context. It can be an URL to a tar or git repository.
		 * If it is relative URL, the relative path should be obtained from calling listBuildSourceUploadUrl API.
		 */
		sourceLocation: FormControl<string | null | undefined>,

		/**
		 * Run timeout in seconds.
		 * Minimum: 300
		 * Maximum: 28800
		 */
		timeout: FormControl<number | null | undefined>,
	}
	export function CreateEncodedTaskRunRequestFormGroup() {
		return new FormGroup<EncodedTaskRunRequestFormProperties>({
			encodedTaskContent: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			encodedValuesContent: new FormControl<string | null | undefined>(undefined),
			sourceLocation: new FormControl<string | null | undefined>(undefined),
			timeout: new FormControl<number | null | undefined>(undefined, [Validators.min(300), Validators.max(28800)]),
		});

	}


	/** The properties of a overridable value that can be passed to a task template. */
	export interface SetValue {

		/** Flag to indicate whether the value represents a secret or not. */
		isSecret?: boolean | null;

		/**
		 * The name of the overridable value.
		 * Required
		 */
		name: string;

		/**
		 * The overridable value.
		 * Required
		 */
		value: string;
	}

	/** The properties of a overridable value that can be passed to a task template. */
	export interface SetValueFormProperties {

		/** Flag to indicate whether the value represents a secret or not. */
		isSecret: FormControl<boolean | null | undefined>,

		/**
		 * The name of the overridable value.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The overridable value.
		 * Required
		 */
		value: FormControl<string | null | undefined>,
	}
	export function CreateSetValueFormGroup() {
		return new FormGroup<SetValueFormProperties>({
			isSecret: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The properties of a encoded task step. */
	export interface EncodedTaskStep {

		/**
		 * Base64 encoded value of the template/definition file content.
		 * Required
		 */
		encodedTaskContent: string;

		/** Base64 encoded value of the parameters/values file content. */
		encodedValuesContent?: string | null;

		/** The collection of overridable values that can be passed when running a task. */
		values?: Array<SetValue>;
	}

	/** The properties of a encoded task step. */
	export interface EncodedTaskStepFormProperties {

		/**
		 * Base64 encoded value of the template/definition file content.
		 * Required
		 */
		encodedTaskContent: FormControl<string | null | undefined>,

		/** Base64 encoded value of the parameters/values file content. */
		encodedValuesContent: FormControl<string | null | undefined>,
	}
	export function CreateEncodedTaskStepFormGroup() {
		return new FormGroup<EncodedTaskStepFormProperties>({
			encodedTaskContent: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			encodedValuesContent: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The properties for updating encoded task step. */
	export interface EncodedTaskStepUpdateParameters {

		/** Base64 encoded value of the template/definition file content. */
		encodedTaskContent?: string | null;

		/** Base64 encoded value of the parameters/values file content. */
		encodedValuesContent?: string | null;

		/** The collection of overridable values that can be passed when running a task. */
		values?: Array<SetValue>;
	}

	/** The properties for updating encoded task step. */
	export interface EncodedTaskStepUpdateParametersFormProperties {

		/** Base64 encoded value of the template/definition file content. */
		encodedTaskContent: FormControl<string | null | undefined>,

		/** Base64 encoded value of the parameters/values file content. */
		encodedValuesContent: FormControl<string | null | undefined>,
	}
	export function CreateEncodedTaskStepUpdateParametersFormGroup() {
		return new FormGroup<EncodedTaskStepUpdateParametersFormProperties>({
			encodedTaskContent: new FormControl<string | null | undefined>(undefined),
			encodedValuesContent: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An error response from the Azure Container Registry service. */
	export interface Error {

		/**
		 * error code.
		 * Required
		 */
		code: string;

		/**
		 * error message.
		 * Required
		 */
		message: string;
	}

	/** An error response from the Azure Container Registry service. */
	export interface ErrorFormProperties {

		/**
		 * error code.
		 * Required
		 */
		code: FormControl<string | null | undefined>,

		/**
		 * error message.
		 * Required
		 */
		message: FormControl<string | null | undefined>,
	}
	export function CreateErrorFormGroup() {
		return new FormGroup<ErrorFormProperties>({
			code: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			message: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** An error response from the Azure Container Registry service. */
	export interface ErrorSchema {

		/** An error response from the Azure Container Registry service. */
		error?: Error;
	}

	/** An error response from the Azure Container Registry service. */
	export interface ErrorSchemaFormProperties {
	}
	export function CreateErrorSchemaFormGroup() {
		return new FormGroup<ErrorSchemaFormProperties>({
		});

	}


	/** The request parameters for a scheduling run against a task file. */
	export interface FileTaskRunRequest {

		/** The properties that determine the run agent configuration. */
		agentConfiguration?: AgentProperties;

		/** The parameters that describes a set of credentials that will be used when a run is invoked. */
		credentials?: Credentials;

		/**
		 * The platform properties against which the run has to happen.
		 * Required
		 */
		platform: PlatformProperties;

		/**
		 * The URL(absolute or relative) of the source context. It can be an URL to a tar or git repository.
		 * If it is relative URL, the relative path should be obtained from calling listBuildSourceUploadUrl API.
		 */
		sourceLocation?: string | null;

		/**
		 * The template/definition file path relative to the source.
		 * Required
		 */
		taskFilePath: string;

		/**
		 * Run timeout in seconds.
		 * Minimum: 300
		 * Maximum: 28800
		 */
		timeout?: number | null;

		/** The collection of overridable values that can be passed when running a task. */
		values?: Array<SetValue>;

		/** The values/parameters file path relative to the source. */
		valuesFilePath?: string | null;
	}

	/** The request parameters for a scheduling run against a task file. */
	export interface FileTaskRunRequestFormProperties {

		/**
		 * The URL(absolute or relative) of the source context. It can be an URL to a tar or git repository.
		 * If it is relative URL, the relative path should be obtained from calling listBuildSourceUploadUrl API.
		 */
		sourceLocation: FormControl<string | null | undefined>,

		/**
		 * The template/definition file path relative to the source.
		 * Required
		 */
		taskFilePath: FormControl<string | null | undefined>,

		/**
		 * Run timeout in seconds.
		 * Minimum: 300
		 * Maximum: 28800
		 */
		timeout: FormControl<number | null | undefined>,

		/** The values/parameters file path relative to the source. */
		valuesFilePath: FormControl<string | null | undefined>,
	}
	export function CreateFileTaskRunRequestFormGroup() {
		return new FormGroup<FileTaskRunRequestFormProperties>({
			sourceLocation: new FormControl<string | null | undefined>(undefined),
			taskFilePath: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			timeout: new FormControl<number | null | undefined>(undefined, [Validators.min(300), Validators.max(28800)]),
			valuesFilePath: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The properties of a task step. */
	export interface FileTaskStep {

		/**
		 * The task template/definition file path relative to the source context.
		 * Required
		 */
		taskFilePath: string;

		/** The collection of overridable values that can be passed when running a task. */
		values?: Array<SetValue>;

		/** The task values/parameters file path relative to the source context. */
		valuesFilePath?: string | null;
	}

	/** The properties of a task step. */
	export interface FileTaskStepFormProperties {

		/**
		 * The task template/definition file path relative to the source context.
		 * Required
		 */
		taskFilePath: FormControl<string | null | undefined>,

		/** The task values/parameters file path relative to the source context. */
		valuesFilePath: FormControl<string | null | undefined>,
	}
	export function CreateFileTaskStepFormGroup() {
		return new FormGroup<FileTaskStepFormProperties>({
			taskFilePath: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			valuesFilePath: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The properties of updating a task step. */
	export interface FileTaskStepUpdateParameters {

		/** The task template/definition file path relative to the source context. */
		taskFilePath?: string | null;

		/** The collection of overridable values that can be passed when running a task. */
		values?: Array<SetValue>;

		/** The values/parameters file path relative to the source context. */
		valuesFilePath?: string | null;
	}

	/** The properties of updating a task step. */
	export interface FileTaskStepUpdateParametersFormProperties {

		/** The task template/definition file path relative to the source context. */
		taskFilePath: FormControl<string | null | undefined>,

		/** The values/parameters file path relative to the source context. */
		valuesFilePath: FormControl<string | null | undefined>,
	}
	export function CreateFileTaskStepUpdateParametersFormGroup() {
		return new FormGroup<FileTaskStepUpdateParametersFormProperties>({
			taskFilePath: new FormControl<string | null | undefined>(undefined),
			valuesFilePath: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Managed identity for the resource. */
	export interface IdentityProperties {

		/** The principal ID of resource identity. */
		principalId?: string | null;

		/** The tenant ID of resource. */
		tenantId?: string | null;

		/** The identity type. */
		type?: IdentityPropertiesType | null;

		/**
		 * The list of user identities associated with the resource. The user identity
		 * dictionary key references will be ARM resource ids in the form:
		 * '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/
		 * providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.
		 */
		userAssignedIdentities?: {[id: string]: UserIdentityProperties };
	}

	/** Managed identity for the resource. */
	export interface IdentityPropertiesFormProperties {

		/** The principal ID of resource identity. */
		principalId: FormControl<string | null | undefined>,

		/** The tenant ID of resource. */
		tenantId: FormControl<string | null | undefined>,

		/** The identity type. */
		type: FormControl<IdentityPropertiesType | null | undefined>,

		/**
		 * The list of user identities associated with the resource. The user identity
		 * dictionary key references will be ARM resource ids in the form:
		 * '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/
		 * providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.
		 */
		userAssignedIdentities: FormControl<{[id: string]: UserIdentityProperties } | null | undefined>,
	}
	export function CreateIdentityPropertiesFormGroup() {
		return new FormGroup<IdentityPropertiesFormProperties>({
			principalId: new FormControl<string | null | undefined>(undefined),
			tenantId: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<IdentityPropertiesType | null | undefined>(undefined),
			userAssignedIdentities: new FormControl<{[id: string]: UserIdentityProperties } | null | undefined>(undefined),
		});

	}

	export enum IdentityPropertiesType { SystemAssigned = 0, UserAssigned = 1, 'SystemAssigned, UserAssigned' = 2, None = 3 }

	export interface UserIdentityProperties {

		/** The client id of user assigned identity. */
		clientId?: string | null;

		/** The principal id of user assigned identity. */
		principalId?: string | null;
	}
	export interface UserIdentityPropertiesFormProperties {

		/** The client id of user assigned identity. */
		clientId: FormControl<string | null | undefined>,

		/** The principal id of user assigned identity. */
		principalId: FormControl<string | null | undefined>,
	}
	export function CreateUserIdentityPropertiesFormGroup() {
		return new FormGroup<UserIdentityPropertiesFormProperties>({
			clientId: new FormControl<string | null | undefined>(undefined),
			principalId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Properties for a registry image. */
	export interface ImageDescriptor {

		/** The sha256-based digest of the image manifest. */
		digest?: string | null;

		/** The registry login server. */
		registry?: string | null;

		/** The repository name. */
		repository?: string | null;

		/** The tag name. */
		tag?: string | null;
	}

	/** Properties for a registry image. */
	export interface ImageDescriptorFormProperties {

		/** The sha256-based digest of the image manifest. */
		digest: FormControl<string | null | undefined>,

		/** The registry login server. */
		registry: FormControl<string | null | undefined>,

		/** The repository name. */
		repository: FormControl<string | null | undefined>,

		/** The tag name. */
		tag: FormControl<string | null | undefined>,
	}
	export function CreateImageDescriptorFormGroup() {
		return new FormGroup<ImageDescriptorFormProperties>({
			digest: new FormControl<string | null | undefined>(undefined),
			registry: new FormControl<string | null | undefined>(undefined),
			repository: new FormControl<string | null | undefined>(undefined),
			tag: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The image update trigger that caused a build. */
	export interface ImageUpdateTrigger {

		/** The unique ID of the trigger. */
		id?: string | null;

		/** The list of image updates that caused the build. */
		images?: Array<ImageDescriptor>;

		/** The timestamp when the image update happened. */
		timestamp?: Date | null;
	}

	/** The image update trigger that caused a build. */
	export interface ImageUpdateTriggerFormProperties {

		/** The unique ID of the trigger. */
		id: FormControl<string | null | undefined>,

		/** The timestamp when the image update happened. */
		timestamp: FormControl<Date | null | undefined>,
	}
	export function CreateImageUpdateTriggerFormGroup() {
		return new FormGroup<ImageUpdateTriggerFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			timestamp: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface OverrideTaskStepProperties {

		/**
		 * Gets or sets the collection of override arguments to be used when
		 * executing a build step.
		 */
		arguments?: Array<Argument>;

		/** The source context against which run has to be queued. */
		contextPath?: string | null;

		/** The file against which run has to be queued. */
		file?: string | null;

		/** The name of the target build stage for the docker build. */
		target?: string | null;

		/** Base64 encoded update trigger token that will be attached with the base image trigger webhook. */
		updateTriggerToken?: string | null;

		/** The collection of overridable values that can be passed when running a Task. */
		values?: Array<SetValue>;
	}
	export interface OverrideTaskStepPropertiesFormProperties {

		/** The source context against which run has to be queued. */
		contextPath: FormControl<string | null | undefined>,

		/** The file against which run has to be queued. */
		file: FormControl<string | null | undefined>,

		/** The name of the target build stage for the docker build. */
		target: FormControl<string | null | undefined>,

		/** Base64 encoded update trigger token that will be attached with the base image trigger webhook. */
		updateTriggerToken: FormControl<string | null | undefined>,
	}
	export function CreateOverrideTaskStepPropertiesFormGroup() {
		return new FormGroup<OverrideTaskStepPropertiesFormProperties>({
			contextPath: new FormControl<string | null | undefined>(undefined),
			file: new FormControl<string | null | undefined>(undefined),
			target: new FormControl<string | null | undefined>(undefined),
			updateTriggerToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The properties for updating the platform configuration. */
	export interface PlatformUpdateParameters {

		/** The OS architecture. */
		architecture?: PlatformPropertiesArchitecture | null;

		/** The operating system type required for the run. */
		os?: PlatformPropertiesOs | null;

		/** Variant of the CPU. */
		variant?: PlatformPropertiesVariant | null;
	}

	/** The properties for updating the platform configuration. */
	export interface PlatformUpdateParametersFormProperties {

		/** The OS architecture. */
		architecture: FormControl<PlatformPropertiesArchitecture | null | undefined>,

		/** The operating system type required for the run. */
		os: FormControl<PlatformPropertiesOs | null | undefined>,

		/** Variant of the CPU. */
		variant: FormControl<PlatformPropertiesVariant | null | undefined>,
	}
	export function CreatePlatformUpdateParametersFormGroup() {
		return new FormGroup<PlatformUpdateParametersFormProperties>({
			architecture: new FormControl<PlatformPropertiesArchitecture | null | undefined>(undefined),
			os: new FormControl<PlatformPropertiesOs | null | undefined>(undefined),
			variant: new FormControl<PlatformPropertiesVariant | null | undefined>(undefined),
		});

	}


	/** The resource model definition for a ARM proxy resource. It will have everything other than required location and tags. */
	export interface ProxyResource {

		/** The resource ID. */
		id?: string | null;

		/** The name of the resource. */
		name?: string | null;

		/** The type of the resource. */
		type?: string | null;
	}

	/** The resource model definition for a ARM proxy resource. It will have everything other than required location and tags. */
	export interface ProxyResourceFormProperties {

		/** The resource ID. */
		id: FormControl<string | null | undefined>,

		/** The name of the resource. */
		name: FormControl<string | null | undefined>,

		/** The type of the resource. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateProxyResourceFormGroup() {
		return new FormGroup<ProxyResourceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An Azure resource. */
	export interface Resource {

		/** The resource ID. */
		id?: string | null;

		/**
		 * The location of the resource. This cannot be changed after the resource is created.
		 * Required
		 */
		location: string;

		/** The name of the resource. */
		name?: string | null;

		/** The tags of the resource. */
		tags?: {[id: string]: string };

		/** The type of the resource. */
		type?: string | null;
	}

	/** An Azure resource. */
	export interface ResourceFormProperties {

		/** The resource ID. */
		id: FormControl<string | null | undefined>,

		/**
		 * The location of the resource. This cannot be changed after the resource is created.
		 * Required
		 */
		location: FormControl<string | null | undefined>,

		/** The name of the resource. */
		name: FormControl<string | null | undefined>,

		/** The tags of the resource. */
		tags: FormControl<{[id: string]: string } | null | undefined>,

		/** The type of the resource. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateResourceFormGroup() {
		return new FormGroup<ResourceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Run resource properties */
	export interface Run {

		/** The properties for a run. */
		properties?: RunProperties;
	}

	/** Run resource properties */
	export interface RunFormProperties {
	}
	export function CreateRunFormGroup() {
		return new FormGroup<RunFormProperties>({
		});

	}


	/** The properties for a run. */
	export interface RunProperties {

		/** The properties that determine the run agent configuration. */
		agentConfiguration?: AgentProperties;

		/** The time the run was scheduled. */
		createTime?: Date | null;

		/** The list of custom registries that were logged in during this run. */
		customRegistries?: Array<string>;

		/** The time the run finished. */
		finishTime?: Date | null;

		/** The image update trigger that caused a build. */
		imageUpdateTrigger?: ImageUpdateTrigger;

		/** The value that indicates whether archiving is enabled or not. */
		isArchiveEnabled?: boolean | null;

		/** The last updated time for the run. */
		lastUpdatedTime?: Date | null;

		/** The list of all images that were generated from the run. This is applicable if the run generates base image dependencies. */
		outputImages?: Array<ImageDescriptor>;

		/** The platform properties against which the run has to happen. */
		platform?: PlatformProperties;

		/** The provisioning state of a run. */
		provisioningState?: RunPropertiesProvisioningState | null;

		/** The error message received from backend systems after the run is scheduled. */
		runErrorMessage?: string | null;

		/** The unique identifier for the run. */
		runId?: string | null;

		/** The type of run. */
		runType?: RunPropertiesRunType | null;

		/** The scope of the credentials that were used to login to the source registry during this run. */
		sourceRegistryAuth?: string | null;

		/** The source trigger that caused a run. */
		sourceTrigger?: SourceTriggerDescriptor;

		/** The time the run started. */
		startTime?: Date | null;

		/** The current status of the run. */
		status?: RunPropertiesStatus | null;

		/** The task against which run was scheduled. */
		task?: string | null;
		timerTrigger?: TimerTriggerDescriptor;

		/** The update trigger token passed for the Run. */
		updateTriggerToken?: string | null;
	}

	/** The properties for a run. */
	export interface RunPropertiesFormProperties {

		/** The time the run was scheduled. */
		createTime: FormControl<Date | null | undefined>,

		/** The time the run finished. */
		finishTime: FormControl<Date | null | undefined>,

		/** The value that indicates whether archiving is enabled or not. */
		isArchiveEnabled: FormControl<boolean | null | undefined>,

		/** The last updated time for the run. */
		lastUpdatedTime: FormControl<Date | null | undefined>,

		/** The provisioning state of a run. */
		provisioningState: FormControl<RunPropertiesProvisioningState | null | undefined>,

		/** The error message received from backend systems after the run is scheduled. */
		runErrorMessage: FormControl<string | null | undefined>,

		/** The unique identifier for the run. */
		runId: FormControl<string | null | undefined>,

		/** The type of run. */
		runType: FormControl<RunPropertiesRunType | null | undefined>,

		/** The scope of the credentials that were used to login to the source registry during this run. */
		sourceRegistryAuth: FormControl<string | null | undefined>,

		/** The time the run started. */
		startTime: FormControl<Date | null | undefined>,

		/** The current status of the run. */
		status: FormControl<RunPropertiesStatus | null | undefined>,

		/** The task against which run was scheduled. */
		task: FormControl<string | null | undefined>,

		/** The update trigger token passed for the Run. */
		updateTriggerToken: FormControl<string | null | undefined>,
	}
	export function CreateRunPropertiesFormGroup() {
		return new FormGroup<RunPropertiesFormProperties>({
			createTime: new FormControl<Date | null | undefined>(undefined),
			finishTime: new FormControl<Date | null | undefined>(undefined),
			isArchiveEnabled: new FormControl<boolean | null | undefined>(undefined),
			lastUpdatedTime: new FormControl<Date | null | undefined>(undefined),
			provisioningState: new FormControl<RunPropertiesProvisioningState | null | undefined>(undefined),
			runErrorMessage: new FormControl<string | null | undefined>(undefined),
			runId: new FormControl<string | null | undefined>(undefined),
			runType: new FormControl<RunPropertiesRunType | null | undefined>(undefined),
			sourceRegistryAuth: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<Date | null | undefined>(undefined),
			status: new FormControl<RunPropertiesStatus | null | undefined>(undefined),
			task: new FormControl<string | null | undefined>(undefined),
			updateTriggerToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum RunPropertiesProvisioningState { Creating = 0, Updating = 1, Deleting = 2, Succeeded = 3, Failed = 4, Canceled = 5 }

	export enum RunPropertiesRunType { QuickBuild = 0, QuickRun = 1, AutoBuild = 2, AutoRun = 3 }


	/** The source trigger that caused a run. */
	export interface SourceTriggerDescriptor {

		/** The branch name in the repository. */
		branchName?: string | null;

		/** The unique ID that identifies a commit. */
		commitId?: string | null;

		/** The event type of the trigger. */
		eventType?: string | null;

		/** The unique ID of the trigger. */
		id?: string | null;

		/** The source control provider type. */
		providerType?: string | null;

		/** The unique ID that identifies pull request. */
		pullRequestId?: string | null;

		/** The repository URL. */
		repositoryUrl?: string | null;
	}

	/** The source trigger that caused a run. */
	export interface SourceTriggerDescriptorFormProperties {

		/** The branch name in the repository. */
		branchName: FormControl<string | null | undefined>,

		/** The unique ID that identifies a commit. */
		commitId: FormControl<string | null | undefined>,

		/** The event type of the trigger. */
		eventType: FormControl<string | null | undefined>,

		/** The unique ID of the trigger. */
		id: FormControl<string | null | undefined>,

		/** The source control provider type. */
		providerType: FormControl<string | null | undefined>,

		/** The unique ID that identifies pull request. */
		pullRequestId: FormControl<string | null | undefined>,

		/** The repository URL. */
		repositoryUrl: FormControl<string | null | undefined>,
	}
	export function CreateSourceTriggerDescriptorFormGroup() {
		return new FormGroup<SourceTriggerDescriptorFormProperties>({
			branchName: new FormControl<string | null | undefined>(undefined),
			commitId: new FormControl<string | null | undefined>(undefined),
			eventType: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			providerType: new FormControl<string | null | undefined>(undefined),
			pullRequestId: new FormControl<string | null | undefined>(undefined),
			repositoryUrl: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum RunPropertiesStatus { Queued = 0, Started = 1, Running = 2, Succeeded = 3, Failed = 4, Canceled = 5, Error = 6, Timeout = 7 }

	export interface TimerTriggerDescriptor {

		/** The occurrence that triggered the run. */
		scheduleOccurrence?: string | null;

		/** The timer trigger name that caused the run. */
		timerTriggerName?: string | null;
	}
	export interface TimerTriggerDescriptorFormProperties {

		/** The occurrence that triggered the run. */
		scheduleOccurrence: FormControl<string | null | undefined>,

		/** The timer trigger name that caused the run. */
		timerTriggerName: FormControl<string | null | undefined>,
	}
	export function CreateTimerTriggerDescriptorFormGroup() {
		return new FormGroup<TimerTriggerDescriptorFormProperties>({
			scheduleOccurrence: new FormControl<string | null | undefined>(undefined),
			timerTriggerName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Properties that are enabled for Odata querying on runs. */
	export interface RunFilter {

		/** The create time for a run. */
		createTime?: Date | null;

		/** The time the run finished. */
		finishTime?: Date | null;

		/** The value that indicates whether archiving is enabled or not. */
		isArchiveEnabled?: boolean | null;

		/**
		 * The list of comma-separated image manifests that were generated from the run. This is applicable if the run is of
		 * build type.
		 */
		outputImageManifests?: string | null;

		/** The unique identifier for the run. */
		runId?: string | null;

		/** The type of run. */
		runType?: RunPropertiesRunType | null;

		/** The current status of the run. */
		status?: RunPropertiesStatus | null;

		/** The name of the task that the run corresponds to. */
		taskName?: string | null;
	}

	/** Properties that are enabled for Odata querying on runs. */
	export interface RunFilterFormProperties {

		/** The create time for a run. */
		createTime: FormControl<Date | null | undefined>,

		/** The time the run finished. */
		finishTime: FormControl<Date | null | undefined>,

		/** The value that indicates whether archiving is enabled or not. */
		isArchiveEnabled: FormControl<boolean | null | undefined>,

		/**
		 * The list of comma-separated image manifests that were generated from the run. This is applicable if the run is of
		 * build type.
		 */
		outputImageManifests: FormControl<string | null | undefined>,

		/** The unique identifier for the run. */
		runId: FormControl<string | null | undefined>,

		/** The type of run. */
		runType: FormControl<RunPropertiesRunType | null | undefined>,

		/** The current status of the run. */
		status: FormControl<RunPropertiesStatus | null | undefined>,

		/** The name of the task that the run corresponds to. */
		taskName: FormControl<string | null | undefined>,
	}
	export function CreateRunFilterFormGroup() {
		return new FormGroup<RunFilterFormProperties>({
			createTime: new FormControl<Date | null | undefined>(undefined),
			finishTime: new FormControl<Date | null | undefined>(undefined),
			isArchiveEnabled: new FormControl<boolean | null | undefined>(undefined),
			outputImageManifests: new FormControl<string | null | undefined>(undefined),
			runId: new FormControl<string | null | undefined>(undefined),
			runType: new FormControl<RunPropertiesRunType | null | undefined>(undefined),
			status: new FormControl<RunPropertiesStatus | null | undefined>(undefined),
			taskName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The result of get log link operation. */
	export interface RunGetLogResult {

		/** The link to logs for a run on a azure container registry. */
		logLink?: string | null;
	}

	/** The result of get log link operation. */
	export interface RunGetLogResultFormProperties {

		/** The link to logs for a run on a azure container registry. */
		logLink: FormControl<string | null | undefined>,
	}
	export function CreateRunGetLogResultFormGroup() {
		return new FormGroup<RunGetLogResultFormProperties>({
			logLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Collection of runs. */
	export interface RunListResult {

		/** The URI that can be used to request the next set of paged results. */
		nextLink?: string | null;

		/** The collection value. */
		value?: Array<Run>;
	}

	/** Collection of runs. */
	export interface RunListResultFormProperties {

		/** The URI that can be used to request the next set of paged results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateRunListResultFormGroup() {
		return new FormGroup<RunListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The request parameters for scheduling a run. */
	export interface RunRequest {

		/** The value that indicates whether archiving is enabled for the run or not. */
		isArchiveEnabled?: boolean | null;

		/**
		 * The type of the run request.
		 * Required
		 */
		type: string;
	}

	/** The request parameters for scheduling a run. */
	export interface RunRequestFormProperties {

		/** The value that indicates whether archiving is enabled for the run or not. */
		isArchiveEnabled: FormControl<boolean | null | undefined>,

		/**
		 * The type of the run request.
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateRunRequestFormGroup() {
		return new FormGroup<RunRequestFormProperties>({
			isArchiveEnabled: new FormControl<boolean | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The set of run properties that can be updated. */
	export interface RunUpdateParameters {

		/** The value that indicates whether archiving is enabled or not. */
		isArchiveEnabled?: boolean | null;
	}

	/** The set of run properties that can be updated. */
	export interface RunUpdateParametersFormProperties {

		/** The value that indicates whether archiving is enabled or not. */
		isArchiveEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateRunUpdateParametersFormGroup() {
		return new FormGroup<RunUpdateParametersFormProperties>({
			isArchiveEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** The properties of the source code repository. */
	export interface SourceProperties {

		/** The branch name of the source code. */
		branch?: string | null;

		/**
		 * The full URL to the source code repository
		 * Required
		 */
		repositoryUrl: string;

		/** The authorization properties for accessing the source code repository. */
		sourceControlAuthProperties?: AuthInfo;

		/**
		 * The type of source control service.
		 * Required
		 */
		sourceControlType: SourcePropertiesSourceControlType;
	}

	/** The properties of the source code repository. */
	export interface SourcePropertiesFormProperties {

		/** The branch name of the source code. */
		branch: FormControl<string | null | undefined>,

		/**
		 * The full URL to the source code repository
		 * Required
		 */
		repositoryUrl: FormControl<string | null | undefined>,

		/**
		 * The type of source control service.
		 * Required
		 */
		sourceControlType: FormControl<SourcePropertiesSourceControlType | null | undefined>,
	}
	export function CreateSourcePropertiesFormGroup() {
		return new FormGroup<SourcePropertiesFormProperties>({
			branch: new FormControl<string | null | undefined>(undefined),
			repositoryUrl: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sourceControlType: new FormControl<SourcePropertiesSourceControlType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum SourcePropertiesSourceControlType { Github = 0, VisualStudioTeamService = 1 }


	/** The properties of a source based trigger. */
	export interface SourceTrigger {

		/**
		 * The name of the trigger.
		 * Required
		 */
		name: string;

		/**
		 * The properties of the source code repository.
		 * Required
		 */
		sourceRepository: SourceProperties;

		/**
		 * The source event corresponding to the trigger.
		 * Required
		 */
		sourceTriggerEvents: Array<string>;

		/** The current status of trigger. */
		status?: BaseImageTriggerStatus | null;
	}

	/** The properties of a source based trigger. */
	export interface SourceTriggerFormProperties {

		/**
		 * The name of the trigger.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/** The current status of trigger. */
		status: FormControl<BaseImageTriggerStatus | null | undefined>,
	}
	export function CreateSourceTriggerFormGroup() {
		return new FormGroup<SourceTriggerFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<BaseImageTriggerStatus | null | undefined>(undefined),
		});

	}


	/** The properties for updating a source based trigger. */
	export interface SourceTriggerUpdateParameters {

		/**
		 * The name of the trigger.
		 * Required
		 */
		name: string;

		/** The properties for updating the source code repository. */
		sourceRepository?: SourceUpdateParameters;

		/** The source event corresponding to the trigger. */
		sourceTriggerEvents?: Array<string>;

		/** The current status of trigger. */
		status?: BaseImageTriggerStatus | null;
	}

	/** The properties for updating a source based trigger. */
	export interface SourceTriggerUpdateParametersFormProperties {

		/**
		 * The name of the trigger.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/** The current status of trigger. */
		status: FormControl<BaseImageTriggerStatus | null | undefined>,
	}
	export function CreateSourceTriggerUpdateParametersFormGroup() {
		return new FormGroup<SourceTriggerUpdateParametersFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<BaseImageTriggerStatus | null | undefined>(undefined),
		});

	}


	/** The properties for updating the source code repository. */
	export interface SourceUpdateParameters {

		/** The branch name of the source code. */
		branch?: string | null;

		/** The full URL to the source code repository */
		repositoryUrl?: string | null;

		/** The authorization properties for accessing the source code repository. */
		sourceControlAuthProperties?: AuthInfoUpdateParameters;

		/** The type of source control service. */
		sourceControlType?: SourcePropertiesSourceControlType | null;
	}

	/** The properties for updating the source code repository. */
	export interface SourceUpdateParametersFormProperties {

		/** The branch name of the source code. */
		branch: FormControl<string | null | undefined>,

		/** The full URL to the source code repository */
		repositoryUrl: FormControl<string | null | undefined>,

		/** The type of source control service. */
		sourceControlType: FormControl<SourcePropertiesSourceControlType | null | undefined>,
	}
	export function CreateSourceUpdateParametersFormGroup() {
		return new FormGroup<SourceUpdateParametersFormProperties>({
			branch: new FormControl<string | null | undefined>(undefined),
			repositoryUrl: new FormControl<string | null | undefined>(undefined),
			sourceControlType: new FormControl<SourcePropertiesSourceControlType | null | undefined>(undefined),
		});

	}


	/** The properties of a response to source upload request. */
	export interface SourceUploadDefinition {

		/** The relative path to the source. This is used to submit the subsequent queue build request. */
		relativePath?: string | null;

		/** The URL where the client can upload the source. */
		uploadUrl?: string | null;
	}

	/** The properties of a response to source upload request. */
	export interface SourceUploadDefinitionFormProperties {

		/** The relative path to the source. This is used to submit the subsequent queue build request. */
		relativePath: FormControl<string | null | undefined>,

		/** The URL where the client can upload the source. */
		uploadUrl: FormControl<string | null | undefined>,
	}
	export function CreateSourceUploadDefinitionFormGroup() {
		return new FormGroup<SourceUploadDefinitionFormProperties>({
			relativePath: new FormControl<string | null | undefined>(undefined),
			uploadUrl: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * The task that has the ARM resource and task properties. 
	 * The task will have all information to schedule a run against it.
	 */
	export interface Task {

		/** Managed identity for the resource. */
		identity?: IdentityProperties;

		/** The properties of a task. */
		properties?: TaskProperties;
	}

	/**
	 * The task that has the ARM resource and task properties. 
	 * The task will have all information to schedule a run against it.
	 */
	export interface TaskFormProperties {
	}
	export function CreateTaskFormGroup() {
		return new FormGroup<TaskFormProperties>({
		});

	}


	/** The properties of a task. */
	export interface TaskProperties {

		/** The properties that determine the run agent configuration. */
		agentConfiguration?: AgentProperties;

		/** The creation date of task. */
		creationDate?: Date | null;

		/** The parameters that describes a set of credentials that will be used when a run is invoked. */
		credentials?: Credentials;

		/**
		 * The platform properties against which the run has to happen.
		 * Required
		 */
		platform: PlatformProperties;

		/** The provisioning state of the task. */
		provisioningState?: RunPropertiesProvisioningState | null;

		/** The current status of task. */
		status?: BaseImageTriggerStatus | null;

		/**
		 * Base properties for any task step.
		 * Required
		 */
		step: TaskStepProperties;

		/**
		 * Run timeout in seconds.
		 * Minimum: 300
		 * Maximum: 28800
		 */
		timeout?: number | null;

		/** The properties of a trigger. */
		trigger?: TriggerProperties;
	}

	/** The properties of a task. */
	export interface TaskPropertiesFormProperties {

		/** The creation date of task. */
		creationDate: FormControl<Date | null | undefined>,

		/** The provisioning state of the task. */
		provisioningState: FormControl<RunPropertiesProvisioningState | null | undefined>,

		/** The current status of task. */
		status: FormControl<BaseImageTriggerStatus | null | undefined>,

		/**
		 * Run timeout in seconds.
		 * Minimum: 300
		 * Maximum: 28800
		 */
		timeout: FormControl<number | null | undefined>,
	}
	export function CreateTaskPropertiesFormGroup() {
		return new FormGroup<TaskPropertiesFormProperties>({
			creationDate: new FormControl<Date | null | undefined>(undefined),
			provisioningState: new FormControl<RunPropertiesProvisioningState | null | undefined>(undefined),
			status: new FormControl<BaseImageTriggerStatus | null | undefined>(undefined),
			timeout: new FormControl<number | null | undefined>(undefined, [Validators.min(300), Validators.max(28800)]),
		});

	}


	/** Base properties for any task step. */
	export interface TaskStepProperties {

		/** List of base image dependencies for a step. */
		baseImageDependencies?: Array<BaseImageDependency>;

		/** The token (git PAT or SAS token of storage account blob) associated with the context for a step. */
		contextAccessToken?: string | null;

		/** The URL(absolute or relative) of the source context for the task step. */
		contextPath?: string | null;

		/**
		 * The type of the step.
		 * Required
		 */
		type: TaskStepPropertiesType;
	}

	/** Base properties for any task step. */
	export interface TaskStepPropertiesFormProperties {

		/** The token (git PAT or SAS token of storage account blob) associated with the context for a step. */
		contextAccessToken: FormControl<string | null | undefined>,

		/** The URL(absolute or relative) of the source context for the task step. */
		contextPath: FormControl<string | null | undefined>,

		/**
		 * The type of the step.
		 * Required
		 */
		type: FormControl<TaskStepPropertiesType | null | undefined>,
	}
	export function CreateTaskStepPropertiesFormGroup() {
		return new FormGroup<TaskStepPropertiesFormProperties>({
			contextAccessToken: new FormControl<string | null | undefined>(undefined),
			contextPath: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<TaskStepPropertiesType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum TaskStepPropertiesType { Docker = 0, FileTask = 1, EncodedTask = 2 }


	/** The properties of a trigger. */
	export interface TriggerProperties {

		/** The trigger based on base image dependency. */
		baseImageTrigger?: BaseImageTrigger;

		/** The collection of triggers based on source code repository. */
		sourceTriggers?: Array<SourceTrigger>;

		/** The collection of timer triggers. */
		timerTriggers?: Array<TimerTrigger>;
	}

	/** The properties of a trigger. */
	export interface TriggerPropertiesFormProperties {
	}
	export function CreateTriggerPropertiesFormGroup() {
		return new FormGroup<TriggerPropertiesFormProperties>({
		});

	}


	/** The properties of a timer trigger. */
	export interface TimerTrigger {

		/**
		 * The name of the trigger.
		 * Required
		 */
		name: string;

		/**
		 * The CRON expression for the task schedule
		 * Required
		 */
		schedule: string;

		/** The current status of trigger. */
		status?: BaseImageTriggerStatus | null;
	}

	/** The properties of a timer trigger. */
	export interface TimerTriggerFormProperties {

		/**
		 * The name of the trigger.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The CRON expression for the task schedule
		 * Required
		 */
		schedule: FormControl<string | null | undefined>,

		/** The current status of trigger. */
		status: FormControl<BaseImageTriggerStatus | null | undefined>,
	}
	export function CreateTimerTriggerFormGroup() {
		return new FormGroup<TimerTriggerFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			schedule: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<BaseImageTriggerStatus | null | undefined>(undefined),
		});

	}


	/** The collection of tasks. */
	export interface TaskListResult {

		/** The URI that can be used to request the next set of paged results. */
		nextLink?: string | null;

		/** The collection value. */
		value?: Array<Task>;
	}

	/** The collection of tasks. */
	export interface TaskListResultFormProperties {

		/** The URI that can be used to request the next set of paged results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateTaskListResultFormGroup() {
		return new FormGroup<TaskListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The properties for updating a task. */
	export interface TaskPropertiesUpdateParameters {

		/** The properties that determine the run agent configuration. */
		agentConfiguration?: AgentProperties;

		/** The parameters that describes a set of credentials that will be used when a run is invoked. */
		credentials?: Credentials;

		/** The properties for updating the platform configuration. */
		platform?: PlatformUpdateParameters;

		/** The current status of task. */
		status?: BaseImageTriggerStatus | null;

		/** Base properties for updating any task step. */
		step?: TaskStepUpdateParameters;

		/** Run timeout in seconds. */
		timeout?: number | null;

		/** The properties for updating triggers. */
		trigger?: TriggerUpdateParameters;
	}

	/** The properties for updating a task. */
	export interface TaskPropertiesUpdateParametersFormProperties {

		/** The current status of task. */
		status: FormControl<BaseImageTriggerStatus | null | undefined>,

		/** Run timeout in seconds. */
		timeout: FormControl<number | null | undefined>,
	}
	export function CreateTaskPropertiesUpdateParametersFormGroup() {
		return new FormGroup<TaskPropertiesUpdateParametersFormProperties>({
			status: new FormControl<BaseImageTriggerStatus | null | undefined>(undefined),
			timeout: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Base properties for updating any task step. */
	export interface TaskStepUpdateParameters {

		/** The token (git PAT or SAS token of storage account blob) associated with the context for a step. */
		contextAccessToken?: string | null;

		/** The URL(absolute or relative) of the source context for the task step. */
		contextPath?: string | null;

		/**
		 * The type of the step.
		 * Required
		 */
		type: TaskStepPropertiesType;
	}

	/** Base properties for updating any task step. */
	export interface TaskStepUpdateParametersFormProperties {

		/** The token (git PAT or SAS token of storage account blob) associated with the context for a step. */
		contextAccessToken: FormControl<string | null | undefined>,

		/** The URL(absolute or relative) of the source context for the task step. */
		contextPath: FormControl<string | null | undefined>,

		/**
		 * The type of the step.
		 * Required
		 */
		type: FormControl<TaskStepPropertiesType | null | undefined>,
	}
	export function CreateTaskStepUpdateParametersFormGroup() {
		return new FormGroup<TaskStepUpdateParametersFormProperties>({
			contextAccessToken: new FormControl<string | null | undefined>(undefined),
			contextPath: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<TaskStepPropertiesType | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The properties for updating triggers. */
	export interface TriggerUpdateParameters {

		/** The properties for updating base image dependency trigger. */
		baseImageTrigger?: BaseImageTriggerUpdateParameters;

		/** The collection of triggers based on source code repository. */
		sourceTriggers?: Array<SourceTriggerUpdateParameters>;

		/** The collection of timer triggers. */
		timerTriggers?: Array<TimerTriggerUpdateParameters>;
	}

	/** The properties for updating triggers. */
	export interface TriggerUpdateParametersFormProperties {
	}
	export function CreateTriggerUpdateParametersFormGroup() {
		return new FormGroup<TriggerUpdateParametersFormProperties>({
		});

	}


	/** The properties for updating a timer trigger. */
	export interface TimerTriggerUpdateParameters {

		/**
		 * The name of the trigger.
		 * Required
		 */
		name: string;

		/** The CRON expression for the task schedule */
		schedule?: string | null;

		/** The current status of trigger. */
		status?: BaseImageTriggerStatus | null;
	}

	/** The properties for updating a timer trigger. */
	export interface TimerTriggerUpdateParametersFormProperties {

		/**
		 * The name of the trigger.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/** The CRON expression for the task schedule */
		schedule: FormControl<string | null | undefined>,

		/** The current status of trigger. */
		status: FormControl<BaseImageTriggerStatus | null | undefined>,
	}
	export function CreateTimerTriggerUpdateParametersFormGroup() {
		return new FormGroup<TimerTriggerUpdateParametersFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			schedule: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<BaseImageTriggerStatus | null | undefined>(undefined),
		});

	}


	/**
	 * The task run that has the ARM resource and properties. 
	 * The task run will have the information of request and result of a run.
	 */
	export interface TaskRun {

		/** Managed identity for the resource. */
		identity?: IdentityProperties;

		/** The properties of task run. */
		properties?: TaskRunProperties;
	}

	/**
	 * The task run that has the ARM resource and properties. 
	 * The task run will have the information of request and result of a run.
	 */
	export interface TaskRunFormProperties {
	}
	export function CreateTaskRunFormGroup() {
		return new FormGroup<TaskRunFormProperties>({
		});

	}


	/** The properties of task run. */
	export interface TaskRunProperties {

		/** How the run should be forced to rerun even if the run request configuration has not changed */
		forceUpdateTag?: string | null;

		/** The provisioning state of this task run */
		provisioningState?: RunPropertiesProvisioningState | null;

		/** The request parameters for scheduling a run. */
		runRequest?: RunRequest;

		/** Run resource properties */
		runResult?: Run;
	}

	/** The properties of task run. */
	export interface TaskRunPropertiesFormProperties {

		/** How the run should be forced to rerun even if the run request configuration has not changed */
		forceUpdateTag: FormControl<string | null | undefined>,

		/** The provisioning state of this task run */
		provisioningState: FormControl<RunPropertiesProvisioningState | null | undefined>,
	}
	export function CreateTaskRunPropertiesFormGroup() {
		return new FormGroup<TaskRunPropertiesFormProperties>({
			forceUpdateTag: new FormControl<string | null | undefined>(undefined),
			provisioningState: new FormControl<RunPropertiesProvisioningState | null | undefined>(undefined),
		});

	}


	/** The collection of task runs. */
	export interface TaskRunListResult {

		/** The URI that can be used to request the next set of paged results. */
		nextLink?: string | null;

		/** The collection value. */
		value?: Array<TaskRun>;
	}

	/** The collection of task runs. */
	export interface TaskRunListResultFormProperties {

		/** The URI that can be used to request the next set of paged results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateTaskRunListResultFormGroup() {
		return new FormGroup<TaskRunListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The properties of a task run update parameters. */
	export interface TaskRunPropertiesUpdateParameters {

		/** How the run should be forced to rerun even if the run request configuration has not changed */
		forceUpdateTag?: string | null;

		/** The request parameters for scheduling a run. */
		runRequest?: RunRequest;
	}

	/** The properties of a task run update parameters. */
	export interface TaskRunPropertiesUpdateParametersFormProperties {

		/** How the run should be forced to rerun even if the run request configuration has not changed */
		forceUpdateTag: FormControl<string | null | undefined>,
	}
	export function CreateTaskRunPropertiesUpdateParametersFormGroup() {
		return new FormGroup<TaskRunPropertiesUpdateParametersFormProperties>({
			forceUpdateTag: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The parameters for a task run request. */
	export interface TaskRunRequest {
		overrideTaskStepProperties?: OverrideTaskStepProperties;

		/**
		 * The resource ID of task against which run has to be queued.
		 * Required
		 */
		taskId: string;
	}

	/** The parameters for a task run request. */
	export interface TaskRunRequestFormProperties {

		/**
		 * The resource ID of task against which run has to be queued.
		 * Required
		 */
		taskId: FormControl<string | null | undefined>,
	}
	export function CreateTaskRunRequestFormGroup() {
		return new FormGroup<TaskRunRequestFormProperties>({
			taskId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The parameters for updating a task run. */
	export interface TaskRunUpdateParameters {

		/** Managed identity for the resource. */
		identity?: IdentityProperties;

		/** The properties of a task run update parameters. */
		properties?: TaskRunPropertiesUpdateParameters;

		/** The ARM resource tags. */
		tags?: {[id: string]: string };
	}

	/** The parameters for updating a task run. */
	export interface TaskRunUpdateParametersFormProperties {

		/** The ARM resource tags. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateTaskRunUpdateParametersFormGroup() {
		return new FormGroup<TaskRunUpdateParametersFormProperties>({
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** The parameters for updating a task. */
	export interface TaskUpdateParameters {

		/** Managed identity for the resource. */
		identity?: IdentityProperties;

		/** The properties for updating a task. */
		properties?: TaskPropertiesUpdateParameters;

		/** The ARM resource tags. */
		tags?: {[id: string]: string };
	}

	/** The parameters for updating a task. */
	export interface TaskUpdateParametersFormProperties {

		/** The ARM resource tags. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateTaskUpdateParametersFormGroup() {
		return new FormGroup<TaskUpdateParametersFormProperties>({
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Get the upload location for the user to be able to upload the source.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/listBuildSourceUploadUrl
		 * @param {string} subscriptionId The Microsoft Azure subscription ID.
		 * @param {string} resourceGroupName The name of the resource group to which the container registry belongs.
		 * @param {string} registryName The name of the container registry.
		 * @param {string} api_version The client API version.
		 * @return {SourceUploadDefinition} The request was successful; the request was well-formed and received properly.
		 */
		Registries_GetBuildSourceUploadUrl(subscriptionId: string, resourceGroupName: string, registryName: string, api_version: string): Observable<SourceUploadDefinition> {
			return this.http.post<SourceUploadDefinition>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ContainerRegistry/registries/' + (registryName == null ? '' : encodeURIComponent(registryName)) + '/listBuildSourceUploadUrl&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, {});
		}

		/**
		 * Gets all the runs for a registry.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/runs
		 * @param {string} subscriptionId The Microsoft Azure subscription ID.
		 * @param {string} resourceGroupName The name of the resource group to which the container registry belongs.
		 * @param {string} registryName The name of the container registry.
		 * @param {string} api_version The client API version.
		 * @param {string} filter The runs filter to apply on the operation. Arithmetic operators are not supported. The allowed string function is 'contains'. All logical operators except 'Not', 'Has', 'All' are allowed.
		 * @param {number} top $top is supported for get list of runs, which limits the maximum number of runs to return.
		 * @return {RunListResult} The request was successful; the request was well-formed and received properly.
		 */
		Runs_List(subscriptionId: string, resourceGroupName: string, registryName: string, api_version: string, filter: string | null | undefined, top: number | null | undefined): Observable<RunListResult> {
			return this.http.get<RunListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ContainerRegistry/registries/' + (registryName == null ? '' : encodeURIComponent(registryName)) + '/runs&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&top=' + top, {});
		}

		/**
		 * Gets the detailed information for a given run.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/runs/{runId}
		 * @param {string} subscriptionId The Microsoft Azure subscription ID.
		 * @param {string} resourceGroupName The name of the resource group to which the container registry belongs.
		 * @param {string} registryName The name of the container registry.
		 * @param {string} api_version The client API version.
		 * @param {string} runId The run ID.
		 * @return {Run} The request was successful; the request was well-formed and received properly.
		 */
		Runs_Get(subscriptionId: string, resourceGroupName: string, registryName: string, api_version: string, runId: string): Observable<Run> {
			return this.http.get<Run>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ContainerRegistry/registries/' + (registryName == null ? '' : encodeURIComponent(registryName)) + '/runs/' + (runId == null ? '' : encodeURIComponent(runId)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Patch the run properties.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/runs/{runId}
		 * @param {string} subscriptionId The Microsoft Azure subscription ID.
		 * @param {string} resourceGroupName The name of the resource group to which the container registry belongs.
		 * @param {string} registryName The name of the container registry.
		 * @param {string} api_version The client API version.
		 * @param {string} runId The run ID.
		 * @param {RunUpdateParameters} requestBody The run update properties.
		 * @return {Run} The request was successful; the request was well-formed and received properly.
		 */
		Runs_Update(subscriptionId: string, resourceGroupName: string, registryName: string, api_version: string, runId: string, requestBody: RunUpdateParameters): Observable<Run> {
			return this.http.patch<Run>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ContainerRegistry/registries/' + (registryName == null ? '' : encodeURIComponent(registryName)) + '/runs/' + (runId == null ? '' : encodeURIComponent(runId)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Cancel an existing run.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/runs/{runId}/cancel
		 * @param {string} subscriptionId The Microsoft Azure subscription ID.
		 * @param {string} resourceGroupName The name of the resource group to which the container registry belongs.
		 * @param {string} registryName The name of the container registry.
		 * @param {string} api_version The client API version.
		 * @param {string} runId The run ID.
		 * @return {void} The request was successful; the request was well-formed and received properly.
		 */
		Runs_Cancel(subscriptionId: string, resourceGroupName: string, registryName: string, api_version: string, runId: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ContainerRegistry/registries/' + (registryName == null ? '' : encodeURIComponent(registryName)) + '/runs/' + (runId == null ? '' : encodeURIComponent(runId)) + '/cancel&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets a link to download the run logs.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/runs/{runId}/listLogSasUrl
		 * @param {string} subscriptionId The Microsoft Azure subscription ID.
		 * @param {string} resourceGroupName The name of the resource group to which the container registry belongs.
		 * @param {string} registryName The name of the container registry.
		 * @param {string} api_version The client API version.
		 * @param {string} runId The run ID.
		 * @return {RunGetLogResult} The request was successful; the request was well-formed and received properly.
		 */
		Runs_GetLogSasUrl(subscriptionId: string, resourceGroupName: string, registryName: string, api_version: string, runId: string): Observable<RunGetLogResult> {
			return this.http.post<RunGetLogResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ContainerRegistry/registries/' + (registryName == null ? '' : encodeURIComponent(registryName)) + '/runs/' + (runId == null ? '' : encodeURIComponent(runId)) + '/listLogSasUrl&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, {});
		}

		/**
		 * Schedules a new run based on the request parameters and add it to the run queue.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/scheduleRun
		 * @param {string} subscriptionId The Microsoft Azure subscription ID.
		 * @param {string} resourceGroupName The name of the resource group to which the container registry belongs.
		 * @param {string} registryName The name of the container registry.
		 * @param {string} api_version The client API version.
		 * @param {RunRequest} requestBody The parameters of a run that needs to scheduled.
		 * @return {Run} The request was successful; the request was well-formed and received properly.
		 */
		Registries_ScheduleRun(subscriptionId: string, resourceGroupName: string, registryName: string, api_version: string, requestBody: RunRequest): Observable<Run> {
			return this.http.post<Run>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ContainerRegistry/registries/' + (registryName == null ? '' : encodeURIComponent(registryName)) + '/scheduleRun&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all the task runs for a specified container registry.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/taskRuns
		 * @param {string} subscriptionId The Microsoft Azure subscription ID.
		 * @param {string} resourceGroupName The name of the resource group to which the container registry belongs.
		 * @param {string} registryName The name of the container registry.
		 * @param {string} api_version The client API version.
		 * @return {TaskRunListResult} The request was successful; the request was well-formed and received properly.
		 */
		TaskRuns_List(subscriptionId: string, resourceGroupName: string, registryName: string, api_version: string): Observable<TaskRunListResult> {
			return this.http.get<TaskRunListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ContainerRegistry/registries/' + (registryName == null ? '' : encodeURIComponent(registryName)) + '/taskRuns&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets the detailed information for a given task run.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/taskRuns/{taskRunName}
		 * @param {string} subscriptionId The Microsoft Azure subscription ID.
		 * @param {string} resourceGroupName The name of the resource group to which the container registry belongs.
		 * @param {string} registryName The name of the container registry.
		 * @param {string} api_version The client API version.
		 * @param {string} taskRunName The run request name.
		 * @return {TaskRun} The request was successful; the request was well-formed and received properly.
		 */
		TaskRuns_Get(subscriptionId: string, resourceGroupName: string, registryName: string, api_version: string, taskRunName: string): Observable<TaskRun> {
			return this.http.get<TaskRun>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ContainerRegistry/registries/' + (registryName == null ? '' : encodeURIComponent(registryName)) + '/taskRuns/' + (taskRunName == null ? '' : encodeURIComponent(taskRunName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates a task run for a container registry with the specified parameters.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/taskRuns/{taskRunName}
		 * @param {string} subscriptionId The Microsoft Azure subscription ID.
		 * @param {string} resourceGroupName The name of the resource group to which the container registry belongs.
		 * @param {string} registryName The name of the container registry.
		 * @param {string} api_version The client API version.
		 * @param {string} taskRunName The name of task run.
		 * @param {TaskRun} requestBody The parameters of a run that needs to scheduled.
		 * @return {TaskRun} The request was successful; the request was well-formed and received properly.
		 */
		TaskRuns_Create(subscriptionId: string, resourceGroupName: string, registryName: string, api_version: string, taskRunName: string, requestBody: TaskRun): Observable<TaskRun> {
			return this.http.put<TaskRun>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ContainerRegistry/registries/' + (registryName == null ? '' : encodeURIComponent(registryName)) + '/taskRuns/' + (taskRunName == null ? '' : encodeURIComponent(taskRunName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a specified task run resource.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/taskRuns/{taskRunName}
		 * @param {string} subscriptionId The Microsoft Azure subscription ID.
		 * @param {string} resourceGroupName The name of the resource group to which the container registry belongs.
		 * @param {string} registryName The name of the container registry.
		 * @param {string} api_version The client API version.
		 * @param {string} taskRunName The task run name.
		 * @return {void} The request was successful; the request was well-formed and received properly.
		 */
		TaskRuns_Delete(subscriptionId: string, resourceGroupName: string, registryName: string, api_version: string, taskRunName: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ContainerRegistry/registries/' + (registryName == null ? '' : encodeURIComponent(registryName)) + '/taskRuns/' + (taskRunName == null ? '' : encodeURIComponent(taskRunName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates a task run with the specified parameters.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/taskRuns/{taskRunName}
		 * @param {string} subscriptionId The Microsoft Azure subscription ID.
		 * @param {string} resourceGroupName The name of the resource group to which the container registry belongs.
		 * @param {string} registryName The name of the container registry.
		 * @param {string} api_version The client API version.
		 * @param {string} taskRunName The task run name.
		 * @param {TaskRunUpdateParameters} requestBody The parameters for updating a task run.
		 * @return {TaskRun} The request was successful; the request was well-formed and received properly.
		 */
		TaskRuns_Update(subscriptionId: string, resourceGroupName: string, registryName: string, api_version: string, taskRunName: string, requestBody: TaskRunUpdateParameters): Observable<TaskRun> {
			return this.http.patch<TaskRun>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ContainerRegistry/registries/' + (registryName == null ? '' : encodeURIComponent(registryName)) + '/taskRuns/' + (taskRunName == null ? '' : encodeURIComponent(taskRunName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all the tasks for a specified container registry.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/tasks
		 * @param {string} subscriptionId The Microsoft Azure subscription ID.
		 * @param {string} resourceGroupName The name of the resource group to which the container registry belongs.
		 * @param {string} registryName The name of the container registry.
		 * @param {string} api_version The client API version.
		 * @return {TaskListResult} The request was successful; the request was well-formed and received properly.
		 */
		Tasks_List(subscriptionId: string, resourceGroupName: string, registryName: string, api_version: string): Observable<TaskListResult> {
			return this.http.get<TaskListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ContainerRegistry/registries/' + (registryName == null ? '' : encodeURIComponent(registryName)) + '/tasks&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Get the properties of a specified task.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/tasks/{taskName}
		 * @param {string} subscriptionId The Microsoft Azure subscription ID.
		 * @param {string} resourceGroupName The name of the resource group to which the container registry belongs.
		 * @param {string} registryName The name of the container registry.
		 * @param {string} api_version The client API version.
		 * @param {string} taskName The name of the container registry task.
		 * @return {Task} The request was successful; the request was well-formed and received properly.
		 */
		Tasks_Get(subscriptionId: string, resourceGroupName: string, registryName: string, api_version: string, taskName: string): Observable<Task> {
			return this.http.get<Task>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ContainerRegistry/registries/' + (registryName == null ? '' : encodeURIComponent(registryName)) + '/tasks/' + (taskName == null ? '' : encodeURIComponent(taskName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates a task for a container registry with the specified parameters.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/tasks/{taskName}
		 * @param {string} subscriptionId The Microsoft Azure subscription ID.
		 * @param {string} resourceGroupName The name of the resource group to which the container registry belongs.
		 * @param {string} registryName The name of the container registry.
		 * @param {string} api_version The client API version.
		 * @param {string} taskName The name of the container registry task.
		 * @param {Task} requestBody The parameters for creating a task.
		 * @return {Task} The request was successful; the request was well-formed and received properly.
		 */
		Tasks_Create(subscriptionId: string, resourceGroupName: string, registryName: string, api_version: string, taskName: string, requestBody: Task): Observable<Task> {
			return this.http.put<Task>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ContainerRegistry/registries/' + (registryName == null ? '' : encodeURIComponent(registryName)) + '/tasks/' + (taskName == null ? '' : encodeURIComponent(taskName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a specified task.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/tasks/{taskName}
		 * @param {string} subscriptionId The Microsoft Azure subscription ID.
		 * @param {string} resourceGroupName The name of the resource group to which the container registry belongs.
		 * @param {string} registryName The name of the container registry.
		 * @param {string} api_version The client API version.
		 * @param {string} taskName The name of the container registry task.
		 * @return {void} The request was successful; the request was well-formed and received properly.
		 */
		Tasks_Delete(subscriptionId: string, resourceGroupName: string, registryName: string, api_version: string, taskName: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ContainerRegistry/registries/' + (registryName == null ? '' : encodeURIComponent(registryName)) + '/tasks/' + (taskName == null ? '' : encodeURIComponent(taskName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates a task with the specified parameters.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/tasks/{taskName}
		 * @param {string} subscriptionId The Microsoft Azure subscription ID.
		 * @param {string} resourceGroupName The name of the resource group to which the container registry belongs.
		 * @param {string} registryName The name of the container registry.
		 * @param {string} api_version The client API version.
		 * @param {string} taskName The name of the container registry task.
		 * @param {TaskUpdateParameters} requestBody The parameters for updating a task.
		 * @return {Task} The request was successful; the request was well-formed and received properly.
		 */
		Tasks_Update(subscriptionId: string, resourceGroupName: string, registryName: string, api_version: string, taskName: string, requestBody: TaskUpdateParameters): Observable<Task> {
			return this.http.patch<Task>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ContainerRegistry/registries/' + (registryName == null ? '' : encodeURIComponent(registryName)) + '/tasks/' + (taskName == null ? '' : encodeURIComponent(taskName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a task with extended information that includes all secrets.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/tasks/{taskName}/listDetails
		 * @param {string} subscriptionId The Microsoft Azure subscription ID.
		 * @param {string} resourceGroupName The name of the resource group to which the container registry belongs.
		 * @param {string} registryName The name of the container registry.
		 * @param {string} api_version The client API version.
		 * @param {string} taskName The name of the container registry task.
		 * @return {Task} The request was successful; the request was well-formed and received properly.
		 */
		Tasks_GetDetails(subscriptionId: string, resourceGroupName: string, registryName: string, api_version: string, taskName: string): Observable<Task> {
			return this.http.post<Task>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ContainerRegistry/registries/' + (registryName == null ? '' : encodeURIComponent(registryName)) + '/tasks/' + (taskName == null ? '' : encodeURIComponent(taskName)) + '/listDetails&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, {});
		}
	}

}

