import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** The public key of the gateway. */
	export interface EncryptionJwkResource {
		alg?: string | null;
		e?: string | null;
		kty?: string | null;
		n?: string | null;
	}

	/** The public key of the gateway. */
	export interface EncryptionJwkResourceFormProperties {
		alg: FormControl<string | null | undefined>,
		e: FormControl<string | null | undefined>,
		kty: FormControl<string | null | undefined>,
		n: FormControl<string | null | undefined>,
	}
	export function CreateEncryptionJwkResourceFormGroup() {
		return new FormGroup<EncryptionJwkResourceFormProperties>({
			alg: new FormControl<string | null | undefined>(undefined),
			e: new FormControl<string | null | undefined>(undefined),
			kty: new FormControl<string | null | undefined>(undefined),
			n: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Error message. */
	export interface Error {
		code?: number | null;
		fields?: string | null;
		message?: string | null;
	}

	/** Error message. */
	export interface ErrorFormProperties {
		code: FormControl<number | null | undefined>,
		fields: FormControl<string | null | undefined>,
		message: FormControl<string | null | undefined>,
	}
	export function CreateErrorFormGroup() {
		return new FormGroup<ErrorFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			fields: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Collection of parameters for operations on a gateway resource. */
	export interface GatewayParameters {

		/** Location of the resource. */
		location?: string | null;

		/** Collection of properties. */
		properties?: GatewayParametersProperties;

		/** Resource tags. */
		tags?: string | null;
	}

	/** Collection of parameters for operations on a gateway resource. */
	export interface GatewayParametersFormProperties {

		/** Location of the resource. */
		location: FormControl<string | null | undefined>,

		/** Resource tags. */
		tags: FormControl<string | null | undefined>,
	}
	export function CreateGatewayParametersFormGroup() {
		return new FormGroup<GatewayParametersFormProperties>({
			location: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GatewayParametersProperties {

		/** The upgradeMode property gives the flexibility to gateway to auto upgrade itself. If properties value not specified, then we assume upgradeMode = Automatic. */
		upgradeMode?: GatewayParametersPropertiesUpgradeMode | null;
	}
	export interface GatewayParametersPropertiesFormProperties {

		/** The upgradeMode property gives the flexibility to gateway to auto upgrade itself. If properties value not specified, then we assume upgradeMode = Automatic. */
		upgradeMode: FormControl<GatewayParametersPropertiesUpgradeMode | null | undefined>,
	}
	export function CreateGatewayParametersPropertiesFormGroup() {
		return new FormGroup<GatewayParametersPropertiesFormProperties>({
			upgradeMode: new FormControl<GatewayParametersPropertiesUpgradeMode | null | undefined>(undefined),
		});

	}

	export enum GatewayParametersPropertiesUpgradeMode { Manual = 0, Automatic = 1 }


	/** JSON properties that the gateway service uses know how to communicate with the resource. */
	export interface GatewayProfile {

		/** The Dataplane connection URL. */
		dataPlaneServiceBaseAddress?: string | null;

		/** The environment for the gateway (DEV, DogFood, or Production). */
		environment?: string | null;

		/** The ID of the gateway. */
		gatewayId?: string | null;

		/** Messaging Account. */
		messagingAccount?: string | null;

		/** Messaging Key. */
		messagingKey?: string | null;

		/** Messaging namespace. */
		messagingNamespace?: string | null;

		/** Request queue name. */
		requestQueue?: string | null;

		/** Response topic name. */
		responseTopic?: string | null;

		/** The gateway status blob SAS URL. */
		statusBlobSignature?: string | null;

		/** Gateway upgrade manifest URL. */
		upgradeManifestUrl?: string | null;
	}

	/** JSON properties that the gateway service uses know how to communicate with the resource. */
	export interface GatewayProfileFormProperties {

		/** The Dataplane connection URL. */
		dataPlaneServiceBaseAddress: FormControl<string | null | undefined>,

		/** The environment for the gateway (DEV, DogFood, or Production). */
		environment: FormControl<string | null | undefined>,

		/** The ID of the gateway. */
		gatewayId: FormControl<string | null | undefined>,

		/** Messaging Account. */
		messagingAccount: FormControl<string | null | undefined>,

		/** Messaging Key. */
		messagingKey: FormControl<string | null | undefined>,

		/** Messaging namespace. */
		messagingNamespace: FormControl<string | null | undefined>,

		/** Request queue name. */
		requestQueue: FormControl<string | null | undefined>,

		/** Response topic name. */
		responseTopic: FormControl<string | null | undefined>,

		/** The gateway status blob SAS URL. */
		statusBlobSignature: FormControl<string | null | undefined>,

		/** Gateway upgrade manifest URL. */
		upgradeManifestUrl: FormControl<string | null | undefined>,
	}
	export function CreateGatewayProfileFormGroup() {
		return new FormGroup<GatewayProfileFormProperties>({
			dataPlaneServiceBaseAddress: new FormControl<string | null | undefined>(undefined),
			environment: new FormControl<string | null | undefined>(undefined),
			gatewayId: new FormControl<string | null | undefined>(undefined),
			messagingAccount: new FormControl<string | null | undefined>(undefined),
			messagingKey: new FormControl<string | null | undefined>(undefined),
			messagingNamespace: new FormControl<string | null | undefined>(undefined),
			requestQueue: new FormControl<string | null | undefined>(undefined),
			responseTopic: new FormControl<string | null | undefined>(undefined),
			statusBlobSignature: new FormControl<string | null | undefined>(undefined),
			upgradeManifestUrl: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Data model for an arm gateway resource. */
	export interface GatewayResource extends Resource {

		/** Collection of properties. */
		properties?: GatewayResourceProperties;
	}

	/** Data model for an arm gateway resource. */
	export interface GatewayResourceFormProperties extends ResourceFormProperties {
	}
	export function CreateGatewayResourceFormGroup() {
		return new FormGroup<GatewayResourceFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GatewayResourceProperties {

		/** Number of active messages. */
		activeMessageCount?: number | null;

		/** UTC date and time when gateway was first added to management service. */
		created?: Date | null;

		/** Latest available MSI version. */
		desiredVersion?: string | null;

		/** Installer download uri. */
		installerDownload?: string | null;

		/** Names of the nodes in the gateway. */
		instances?: Array<GatewayStatus>;

		/** Last published MSI version. */
		latestPublishedMsiVersion?: string | null;

		/** Minimum gateway version. */
		minimumVersion?: string | null;

		/** The date/time of the last published gateway. */
		publishedTimeUtc?: Date | null;

		/** UTC date and time when node was last updated. */
		updated?: Date | null;

		/** The upgradeMode property gives the flexibility to gateway to auto upgrade itself. If properties value not specified, then we assume upgradeMode = Automatic. */
		upgradeMode?: GatewayParametersPropertiesUpgradeMode | null;
	}
	export interface GatewayResourcePropertiesFormProperties {

		/** Number of active messages. */
		activeMessageCount: FormControl<number | null | undefined>,

		/** UTC date and time when gateway was first added to management service. */
		created: FormControl<Date | null | undefined>,

		/** Latest available MSI version. */
		desiredVersion: FormControl<string | null | undefined>,

		/** Installer download uri. */
		installerDownload: FormControl<string | null | undefined>,

		/** Last published MSI version. */
		latestPublishedMsiVersion: FormControl<string | null | undefined>,

		/** Minimum gateway version. */
		minimumVersion: FormControl<string | null | undefined>,

		/** The date/time of the last published gateway. */
		publishedTimeUtc: FormControl<Date | null | undefined>,

		/** UTC date and time when node was last updated. */
		updated: FormControl<Date | null | undefined>,

		/** The upgradeMode property gives the flexibility to gateway to auto upgrade itself. If properties value not specified, then we assume upgradeMode = Automatic. */
		upgradeMode: FormControl<GatewayParametersPropertiesUpgradeMode | null | undefined>,
	}
	export function CreateGatewayResourcePropertiesFormGroup() {
		return new FormGroup<GatewayResourcePropertiesFormProperties>({
			activeMessageCount: new FormControl<number | null | undefined>(undefined),
			created: new FormControl<Date | null | undefined>(undefined),
			desiredVersion: new FormControl<string | null | undefined>(undefined),
			installerDownload: new FormControl<string | null | undefined>(undefined),
			latestPublishedMsiVersion: new FormControl<string | null | undefined>(undefined),
			minimumVersion: new FormControl<string | null | undefined>(undefined),
			publishedTimeUtc: new FormControl<Date | null | undefined>(undefined),
			updated: new FormControl<Date | null | undefined>(undefined),
			upgradeMode: new FormControl<GatewayParametersPropertiesUpgradeMode | null | undefined>(undefined),
		});

	}


	/** Expanded gateway status information. */
	export interface GatewayStatus {

		/** Active message count. */
		activeMessageCount?: number | null;

		/** Status of the allowGatewayGroupPolicy setting. */
		allowGatewayGroupPolicyStatus?: boolean | null;

		/** The available memory on the gateway host machine in megabytes. */
		availableMemoryMByte?: number | null;

		/** Thumbprint of the encryption certificate. */
		encryptionCertificateThumbprint?: string | null;

		/** The public key of the gateway. */
		encryptionJwk?: EncryptionJwkResource;

		/** The Plaintext description of the OS on the gateway. */
		friendlyOsName?: string | null;

		/**
		 * The CPU utilization of the gateway process (numeric value between 0 and 100).
		 * Minimum: 0
		 * Maximum: 100
		 */
		gatewayCpuUtilizationPercent?: number | null;

		/** The gateway resource ID. */
		gatewayId?: string | null;

		/** The version of the gateway that is installed on the system. */
		gatewayVersion?: string | null;

		/** The working set size of the gateway process in megabytes. */
		gatewayWorkingSetMByte?: number | null;

		/** The group policy error. */
		groupPolicyError?: string | null;

		/** The date the gateway was installed. */
		installedDate?: Date | null;

		/** Latest published version of the gateway install MSI. */
		latestPublishedMsiVersion?: string | null;

		/** Number of logical processors in the gateway system. */
		logicalProcessorCount?: number | null;

		/** The computer name of the gateway system. */
		name?: string | null;

		/** Gateway install MSI published time. */
		publishedTimeUtc?: Date | null;

		/** Status of the requireMfaGroupPolicy setting. */
		requireMfaGroupPolicyStatus?: boolean | null;

		/** Secondary thumbprint of the encryption certificate. */
		secondaryEncryptionCertificateThumbprint?: string | null;

		/** The public key of the gateway. */
		secondaryEncryptionJwk?: EncryptionJwkResource;

		/** UTC date and time when gateway status was last updated. */
		statusUpdated?: Date | null;

		/** CPU Utilization of the whole system. */
		totalCpuUtilizationPercent?: number | null;
	}

	/** Expanded gateway status information. */
	export interface GatewayStatusFormProperties {

		/** Active message count. */
		activeMessageCount: FormControl<number | null | undefined>,

		/** Status of the allowGatewayGroupPolicy setting. */
		allowGatewayGroupPolicyStatus: FormControl<boolean | null | undefined>,

		/** The available memory on the gateway host machine in megabytes. */
		availableMemoryMByte: FormControl<number | null | undefined>,

		/** Thumbprint of the encryption certificate. */
		encryptionCertificateThumbprint: FormControl<string | null | undefined>,

		/** The Plaintext description of the OS on the gateway. */
		friendlyOsName: FormControl<string | null | undefined>,

		/**
		 * The CPU utilization of the gateway process (numeric value between 0 and 100).
		 * Minimum: 0
		 * Maximum: 100
		 */
		gatewayCpuUtilizationPercent: FormControl<number | null | undefined>,

		/** The gateway resource ID. */
		gatewayId: FormControl<string | null | undefined>,

		/** The version of the gateway that is installed on the system. */
		gatewayVersion: FormControl<string | null | undefined>,

		/** The working set size of the gateway process in megabytes. */
		gatewayWorkingSetMByte: FormControl<number | null | undefined>,

		/** The group policy error. */
		groupPolicyError: FormControl<string | null | undefined>,

		/** The date the gateway was installed. */
		installedDate: FormControl<Date | null | undefined>,

		/** Latest published version of the gateway install MSI. */
		latestPublishedMsiVersion: FormControl<string | null | undefined>,

		/** Number of logical processors in the gateway system. */
		logicalProcessorCount: FormControl<number | null | undefined>,

		/** The computer name of the gateway system. */
		name: FormControl<string | null | undefined>,

		/** Gateway install MSI published time. */
		publishedTimeUtc: FormControl<Date | null | undefined>,

		/** Status of the requireMfaGroupPolicy setting. */
		requireMfaGroupPolicyStatus: FormControl<boolean | null | undefined>,

		/** Secondary thumbprint of the encryption certificate. */
		secondaryEncryptionCertificateThumbprint: FormControl<string | null | undefined>,

		/** UTC date and time when gateway status was last updated. */
		statusUpdated: FormControl<Date | null | undefined>,

		/** CPU Utilization of the whole system. */
		totalCpuUtilizationPercent: FormControl<number | null | undefined>,
	}
	export function CreateGatewayStatusFormGroup() {
		return new FormGroup<GatewayStatusFormProperties>({
			activeMessageCount: new FormControl<number | null | undefined>(undefined),
			allowGatewayGroupPolicyStatus: new FormControl<boolean | null | undefined>(undefined),
			availableMemoryMByte: new FormControl<number | null | undefined>(undefined),
			encryptionCertificateThumbprint: new FormControl<string | null | undefined>(undefined),
			friendlyOsName: new FormControl<string | null | undefined>(undefined),
			gatewayCpuUtilizationPercent: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(100)]),
			gatewayId: new FormControl<string | null | undefined>(undefined),
			gatewayVersion: new FormControl<string | null | undefined>(undefined),
			gatewayWorkingSetMByte: new FormControl<number | null | undefined>(undefined),
			groupPolicyError: new FormControl<string | null | undefined>(undefined),
			installedDate: new FormControl<Date | null | undefined>(undefined),
			latestPublishedMsiVersion: new FormControl<string | null | undefined>(undefined),
			logicalProcessorCount: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			publishedTimeUtc: new FormControl<Date | null | undefined>(undefined),
			requireMfaGroupPolicyStatus: new FormControl<boolean | null | undefined>(undefined),
			secondaryEncryptionCertificateThumbprint: new FormControl<string | null | undefined>(undefined),
			statusUpdated: new FormControl<Date | null | undefined>(undefined),
			totalCpuUtilizationPercent: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Collection of Gateway Resources. */
	export interface GatewayResources {

		/** The URL to the next set of resources. */
		nextLink?: string | null;

		/** Collection of Gateway Resources. */
		value?: Array<GatewayResource>;
	}

	/** Collection of Gateway Resources. */
	export interface GatewayResourcesFormProperties {

		/** The URL to the next set of resources. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateGatewayResourcesFormGroup() {
		return new FormGroup<GatewayResourcesFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Parameter collection for operations on arm node resource. */
	export interface NodeParameters {

		/** Location of the resource. */
		location?: string | null;

		/** Collection of properties. */
		properties?: NodeParametersProperties;

		/** Resource tags. */
		tags?: string | null;
	}

	/** Parameter collection for operations on arm node resource. */
	export interface NodeParametersFormProperties {

		/** Location of the resource. */
		location: FormControl<string | null | undefined>,

		/** Resource tags. */
		tags: FormControl<string | null | undefined>,
	}
	export function CreateNodeParametersFormGroup() {
		return new FormGroup<NodeParametersFormProperties>({
			location: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface NodeParametersProperties {

		/** myhost.domain.com */
		connectionName?: string | null;

		/** Gateway ID which will manage this node. */
		gatewayId?: string | null;

		/** Password associated with user name. */
		password?: string | null;

		/** User name to be used to connect to node. */
		userName?: string | null;
	}
	export interface NodeParametersPropertiesFormProperties {

		/** myhost.domain.com */
		connectionName: FormControl<string | null | undefined>,

		/** Gateway ID which will manage this node. */
		gatewayId: FormControl<string | null | undefined>,

		/** Password associated with user name. */
		password: FormControl<string | null | undefined>,

		/** User name to be used to connect to node. */
		userName: FormControl<string | null | undefined>,
	}
	export function CreateNodeParametersPropertiesFormGroup() {
		return new FormGroup<NodeParametersPropertiesFormProperties>({
			connectionName: new FormControl<string | null | undefined>(undefined),
			gatewayId: new FormControl<string | null | undefined>(undefined),
			password: new FormControl<string | null | undefined>(undefined),
			userName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A Node Resource. */
	export interface NodeResource extends Resource {

		/** Collection of properties. */
		properties?: NodeResourceProperties;
	}

	/** A Node Resource. */
	export interface NodeResourceFormProperties extends ResourceFormProperties {
	}
	export function CreateNodeResourceFormGroup() {
		return new FormGroup<NodeResourceFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface NodeResourceProperties {

		/** myhost.domain.com */
		connectionName?: string | null;

		/** UTC date and time when node was first added to management service. */
		created?: Date | null;

		/** ID of the gateway. */
		gatewayId?: string | null;

		/** UTC date and time when node was last updated. */
		updated?: Date | null;
	}
	export interface NodeResourcePropertiesFormProperties {

		/** myhost.domain.com */
		connectionName: FormControl<string | null | undefined>,

		/** UTC date and time when node was first added to management service. */
		created: FormControl<Date | null | undefined>,

		/** ID of the gateway. */
		gatewayId: FormControl<string | null | undefined>,

		/** UTC date and time when node was last updated. */
		updated: FormControl<Date | null | undefined>,
	}
	export function CreateNodeResourcePropertiesFormGroup() {
		return new FormGroup<NodeResourcePropertiesFormProperties>({
			connectionName: new FormControl<string | null | undefined>(undefined),
			created: new FormControl<Date | null | undefined>(undefined),
			gatewayId: new FormControl<string | null | undefined>(undefined),
			updated: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** A collection of node resource objects. */
	export interface NodeResources {

		/** The URL to the next set of resources. */
		nextLink?: string | null;

		/** Collection of Node Resources. */
		value?: Array<NodeResource>;
	}

	/** A collection of node resource objects. */
	export interface NodeResourcesFormProperties {

		/** The URL to the next set of resources. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateNodeResourcesFormGroup() {
		return new FormGroup<NodeResourcesFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The parameters to a PowerShell script execution command. */
	export interface PowerShellCommandParameters {

		/** Collection of properties. */
		properties?: PowerShellCommandParametersProperties;
	}

	/** The parameters to a PowerShell script execution command. */
	export interface PowerShellCommandParametersFormProperties {
	}
	export function CreatePowerShellCommandParametersFormGroup() {
		return new FormGroup<PowerShellCommandParametersFormProperties>({
		});

	}

	export interface PowerShellCommandParametersProperties {

		/** Script to execute. */
		command?: string | null;
	}
	export interface PowerShellCommandParametersPropertiesFormProperties {

		/** Script to execute. */
		command: FormControl<string | null | undefined>,
	}
	export function CreatePowerShellCommandParametersPropertiesFormGroup() {
		return new FormGroup<PowerShellCommandParametersPropertiesFormProperties>({
			command: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Results from invoking a PowerShell command. */
	export interface PowerShellCommandResult {

		/** The HTML color string representing the background color. */
		backgroundColor?: string | null;

		/** Text that precedes the prompt. */
		caption?: string | null;

		/** Collection of PromptFieldDescription objects that contains the user input. */
		descriptions?: Array<PromptFieldDescription>;

		/** The exit code from a executable that was called from PowerShell. */
		exitCode?: number | null;

		/** The HTML color string representing the foreground color. */
		foregroundColor?: string | null;

		/** ID of the prompt message. */
		id?: number | null;

		/** Text of the prompt. */
		message?: string | null;

		/** The type of message. */
		messageType?: number | null;

		/** The interactive prompt message. */
		prompt?: string | null;

		/** Actual result text from the PowerShell Command. */
		value?: string | null;
	}

	/** Results from invoking a PowerShell command. */
	export interface PowerShellCommandResultFormProperties {

		/** The HTML color string representing the background color. */
		backgroundColor: FormControl<string | null | undefined>,

		/** Text that precedes the prompt. */
		caption: FormControl<string | null | undefined>,

		/** The exit code from a executable that was called from PowerShell. */
		exitCode: FormControl<number | null | undefined>,

		/** The HTML color string representing the foreground color. */
		foregroundColor: FormControl<string | null | undefined>,

		/** ID of the prompt message. */
		id: FormControl<number | null | undefined>,

		/** Text of the prompt. */
		message: FormControl<string | null | undefined>,

		/** The type of message. */
		messageType: FormControl<number | null | undefined>,

		/** The interactive prompt message. */
		prompt: FormControl<string | null | undefined>,

		/** Actual result text from the PowerShell Command. */
		value: FormControl<string | null | undefined>,
	}
	export function CreatePowerShellCommandResultFormGroup() {
		return new FormGroup<PowerShellCommandResultFormProperties>({
			backgroundColor: new FormControl<string | null | undefined>(undefined),
			caption: new FormControl<string | null | undefined>(undefined),
			exitCode: new FormControl<number | null | undefined>(undefined),
			foregroundColor: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			messageType: new FormControl<number | null | undefined>(undefined),
			prompt: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Field description for the implementation of PSHostUserInterface.Prompt */
	export interface PromptFieldDescription {

		/** The help message of the prompt. */
		helpMessage?: string | null;

		/** The label text of the prompt. */
		label?: string | null;

		/** The name of the prompt. */
		name?: string | null;
		promptFieldType?: PromptFieldDescriptionPromptFieldType | null;

		/** When set to 'true' the prompt field type is a list of values. */
		promptFieldTypeIsList?: boolean | null;
	}

	/** Field description for the implementation of PSHostUserInterface.Prompt */
	export interface PromptFieldDescriptionFormProperties {

		/** The help message of the prompt. */
		helpMessage: FormControl<string | null | undefined>,

		/** The label text of the prompt. */
		label: FormControl<string | null | undefined>,

		/** The name of the prompt. */
		name: FormControl<string | null | undefined>,
		promptFieldType: FormControl<PromptFieldDescriptionPromptFieldType | null | undefined>,

		/** When set to 'true' the prompt field type is a list of values. */
		promptFieldTypeIsList: FormControl<boolean | null | undefined>,
	}
	export function CreatePromptFieldDescriptionFormGroup() {
		return new FormGroup<PromptFieldDescriptionFormProperties>({
			helpMessage: new FormControl<string | null | undefined>(undefined),
			label: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			promptFieldType: new FormControl<PromptFieldDescriptionPromptFieldType | null | undefined>(undefined),
			promptFieldTypeIsList: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum PromptFieldDescriptionPromptFieldType { String = 0, SecureString = 1, Credential = 2 }


	/** A collection of results from a PowerShell command. */
	export interface PowerShellCommandResults {
		command?: string | null;
		completed?: boolean | null;
		pssession?: string | null;
		results?: Array<PowerShellCommandResult>;
	}

	/** A collection of results from a PowerShell command. */
	export interface PowerShellCommandResultsFormProperties {
		command: FormControl<string | null | undefined>,
		completed: FormControl<boolean | null | undefined>,
		pssession: FormControl<string | null | undefined>,
	}
	export function CreatePowerShellCommandResultsFormGroup() {
		return new FormGroup<PowerShellCommandResultsFormProperties>({
			command: new FormControl<string | null | undefined>(undefined),
			completed: new FormControl<boolean | null | undefined>(undefined),
			pssession: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Result status from invoking a PowerShell command. */
	export interface PowerShellCommandStatus extends Resource {

		/** A collection of results from a PowerShell command. */
		properties?: PowerShellCommandResults;
	}

	/** Result status from invoking a PowerShell command. */
	export interface PowerShellCommandStatusFormProperties extends ResourceFormProperties {
	}
	export function CreatePowerShellCommandStatusFormGroup() {
		return new FormGroup<PowerShellCommandStatusFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A PowerShell session resource (practically equivalent to a runspace instance). */
	export interface PowerShellSessionResource extends Resource {

		/** Collection of properties. */
		properties?: PowerShellSessionResourceProperties;
	}

	/** A PowerShell session resource (practically equivalent to a runspace instance). */
	export interface PowerShellSessionResourceFormProperties extends ResourceFormProperties {
	}
	export function CreatePowerShellSessionResourceFormGroup() {
		return new FormGroup<PowerShellSessionResourceFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PowerShellSessionResourceProperties {

		/** Timestamp of last time the service disconnected from the runspace. */
		disconnectedOn?: Date | null;

		/** Timestamp when the runspace expires. */
		expiresOn?: Date | null;

		/** Name of the runspace. */
		name?: string | null;

		/** The availability of the runspace. */
		runspaceAvailability?: string | null;

		/** The PowerShell Session ID. */
		sessionId?: string | null;

		/** The runspace state. */
		state?: string | null;

		/** A multipart-numeric version number. */
		version?: Version;
	}
	export interface PowerShellSessionResourcePropertiesFormProperties {

		/** Timestamp of last time the service disconnected from the runspace. */
		disconnectedOn: FormControl<Date | null | undefined>,

		/** Timestamp when the runspace expires. */
		expiresOn: FormControl<Date | null | undefined>,

		/** Name of the runspace. */
		name: FormControl<string | null | undefined>,

		/** The availability of the runspace. */
		runspaceAvailability: FormControl<string | null | undefined>,

		/** The PowerShell Session ID. */
		sessionId: FormControl<string | null | undefined>,

		/** The runspace state. */
		state: FormControl<string | null | undefined>,
	}
	export function CreatePowerShellSessionResourcePropertiesFormGroup() {
		return new FormGroup<PowerShellSessionResourcePropertiesFormProperties>({
			disconnectedOn: new FormControl<Date | null | undefined>(undefined),
			expiresOn: new FormControl<Date | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			runspaceAvailability: new FormControl<string | null | undefined>(undefined),
			sessionId: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A collection of PowerShell session resources */
	export interface PowerShellSessionResources {

		/** The URL to the next set of resources. */
		nextLink?: string | null;

		/** Collection of PowerShell session resources. */
		value?: Array<PowerShellSessionResource>;
	}

	/** A collection of PowerShell session resources */
	export interface PowerShellSessionResourcesFormProperties {

		/** The URL to the next set of resources. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreatePowerShellSessionResourcesFormGroup() {
		return new FormGroup<PowerShellSessionResourcesFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Collection of parameters for PowerShell tab completion. */
	export interface PowerShellTabCompletionParameters {

		/** Command to get tab completion for. */
		command?: string | null;
	}

	/** Collection of parameters for PowerShell tab completion. */
	export interface PowerShellTabCompletionParametersFormProperties {

		/** Command to get tab completion for. */
		command: FormControl<string | null | undefined>,
	}
	export function CreatePowerShellTabCompletionParametersFormGroup() {
		return new FormGroup<PowerShellTabCompletionParametersFormProperties>({
			command: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An array of strings representing the different values that can be selected through. */
	export interface PowerShellTabCompletionResults {
		results?: Array<string>;
	}

	/** An array of strings representing the different values that can be selected through. */
	export interface PowerShellTabCompletionResultsFormProperties {
	}
	export function CreatePowerShellTabCompletionResultsFormGroup() {
		return new FormGroup<PowerShellTabCompletionResultsFormProperties>({
		});

	}


	/** The response to a prompt message. */
	export interface PromptMessageResponse {

		/** The list of responses a cmdlet expects. */
		response?: Array<string>;
	}

	/** The response to a prompt message. */
	export interface PromptMessageResponseFormProperties {
	}
	export function CreatePromptMessageResponseFormGroup() {
		return new FormGroup<PromptMessageResponseFormProperties>({
		});

	}


	/** Resource Manager Resource Information. */
	export interface Resource {
		etag?: string | null;

		/** Resource Manager Resource ID. */
		id?: string | null;

		/** Resource Manager Resource Location. */
		location?: string | null;

		/** Resource Manager Resource Name. */
		name?: string | null;

		/** Resource Manager Resource Tags. */
		tags?: {[id: string]: string };

		/** Resource Manager Resource Type. */
		type?: string | null;
	}

	/** Resource Manager Resource Information. */
	export interface ResourceFormProperties {
		etag: FormControl<string | null | undefined>,

		/** Resource Manager Resource ID. */
		id: FormControl<string | null | undefined>,

		/** Resource Manager Resource Location. */
		location: FormControl<string | null | undefined>,

		/** Resource Manager Resource Name. */
		name: FormControl<string | null | undefined>,

		/** Resource Manager Resource Tags. */
		tags: FormControl<{[id: string]: string } | null | undefined>,

		/** Resource Manager Resource Type. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateResourceFormGroup() {
		return new FormGroup<ResourceFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Parameter collection for creation and other operations on sessions. */
	export interface SessionParameters {

		/** Collection of properties */
		properties?: SessionParametersProperties;
	}

	/** Parameter collection for creation and other operations on sessions. */
	export interface SessionParametersFormProperties {
	}
	export function CreateSessionParametersFormGroup() {
		return new FormGroup<SessionParametersFormProperties>({
		});

	}

	export interface SessionParametersProperties {

		/** Encryption certificate thumbprint. */
		EncryptionCertificateThumbprint?: string | null;

		/** Credential data format. */
		credentialDataFormat?: SessionParametersPropertiesCredentialDataFormat | null;

		/** Encrypted Password associated with user name. */
		password?: string | null;

		/** Session retention period. */
		retentionPeriod?: SessionParametersPropertiesRetentionPeriod | null;

		/** Encrypted User name to be used to connect to node. */
		userName?: string | null;
	}
	export interface SessionParametersPropertiesFormProperties {

		/** Encryption certificate thumbprint. */
		EncryptionCertificateThumbprint: FormControl<string | null | undefined>,

		/** Credential data format. */
		credentialDataFormat: FormControl<SessionParametersPropertiesCredentialDataFormat | null | undefined>,

		/** Encrypted Password associated with user name. */
		password: FormControl<string | null | undefined>,

		/** Session retention period. */
		retentionPeriod: FormControl<SessionParametersPropertiesRetentionPeriod | null | undefined>,

		/** Encrypted User name to be used to connect to node. */
		userName: FormControl<string | null | undefined>,
	}
	export function CreateSessionParametersPropertiesFormGroup() {
		return new FormGroup<SessionParametersPropertiesFormProperties>({
			EncryptionCertificateThumbprint: new FormControl<string | null | undefined>(undefined),
			credentialDataFormat: new FormControl<SessionParametersPropertiesCredentialDataFormat | null | undefined>(undefined),
			password: new FormControl<string | null | undefined>(undefined),
			retentionPeriod: new FormControl<SessionParametersPropertiesRetentionPeriod | null | undefined>(undefined),
			userName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum SessionParametersPropertiesCredentialDataFormat { RsaEncrypted = 0 }

	export enum SessionParametersPropertiesRetentionPeriod { Session = 0, Persistent = 1 }


	/** The session object. */
	export interface SessionResource extends Resource {

		/** Collection of properties. */
		properties?: SessionResourceProperties;
	}

	/** The session object. */
	export interface SessionResourceFormProperties extends ResourceFormProperties {
	}
	export function CreateSessionResourceFormGroup() {
		return new FormGroup<SessionResourceFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SessionResourceProperties {

		/** UTC date and time when node was first added to management service. */
		created?: Date | null;

		/** UTC date and time when node was last updated. */
		updated?: Date | null;

		/** The username connecting to the session. */
		userName?: string | null;
	}
	export interface SessionResourcePropertiesFormProperties {

		/** UTC date and time when node was first added to management service. */
		created: FormControl<Date | null | undefined>,

		/** UTC date and time when node was last updated. */
		updated: FormControl<Date | null | undefined>,

		/** The username connecting to the session. */
		userName: FormControl<string | null | undefined>,
	}
	export function CreateSessionResourcePropertiesFormGroup() {
		return new FormGroup<SessionResourcePropertiesFormProperties>({
			created: new FormControl<Date | null | undefined>(undefined),
			updated: new FormControl<Date | null | undefined>(undefined),
			userName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A multipart-numeric version number. */
	export interface Version {

		/** The third number of the version. */
		build?: number | null;

		/** The leftmost number of the version. */
		major?: number | null;

		/** The MSW of the fourth part. */
		majorRevision?: number | null;

		/** The second leftmost number of the version. */
		minor?: number | null;

		/** The LSW of the fourth part. */
		minorRevision?: number | null;

		/** The fourth number of the version. */
		revision?: number | null;
	}

	/** A multipart-numeric version number. */
	export interface VersionFormProperties {

		/** The third number of the version. */
		build: FormControl<number | null | undefined>,

		/** The leftmost number of the version. */
		major: FormControl<number | null | undefined>,

		/** The MSW of the fourth part. */
		majorRevision: FormControl<number | null | undefined>,

		/** The second leftmost number of the version. */
		minor: FormControl<number | null | undefined>,

		/** The LSW of the fourth part. */
		minorRevision: FormControl<number | null | undefined>,

		/** The fourth number of the version. */
		revision: FormControl<number | null | undefined>,
	}
	export function CreateVersionFormGroup() {
		return new FormGroup<VersionFormProperties>({
			build: new FormControl<number | null | undefined>(undefined),
			major: new FormControl<number | null | undefined>(undefined),
			majorRevision: new FormControl<number | null | undefined>(undefined),
			minor: new FormControl<number | null | undefined>(undefined),
			minorRevision: new FormControl<number | null | undefined>(undefined),
			revision: new FormControl<number | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Returns gateways in a subscription.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.ServerManagement/gateways
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client API Version.
		 * @return {GatewayResources} The operation completed successfully.
		 */
		Gateway_List(subscriptionId: string, api_version: string): Observable<GatewayResources> {
			return this.http.get<GatewayResources>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.ServerManagement/gateways&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Lists nodes in a subscription.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.ServerManagement/nodes
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client API Version.
		 * @return {NodeResources} The operation completed successfully.
		 */
		Node_List(subscriptionId: string, api_version: string): Observable<NodeResources> {
			return this.http.get<NodeResources>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.ServerManagement/nodes&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Returns gateways in a resource group.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServerManagement/gateways
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client API Version.
		 * @param {string} resourceGroupName The resource group name uniquely identifies the resource group within the user subscriptionId.
		 * @return {GatewayResources} The operation completed successfully.
		 */
		Gateway_ListForResourceGroup(subscriptionId: string, api_version: string, resourceGroupName: string): Observable<GatewayResources> {
			return this.http.get<GatewayResources>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ServerManagement/gateways&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets a gateway.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServerManagement/gateways/{gatewayName}
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client API Version.
		 * @param {string} resourceGroupName The resource group name uniquely identifies the resource group within the user subscriptionId.
		 * @param {string} gatewayName The gateway name (256 characters maximum)
		 * @param {Gateway_GetExpand} expand Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {GatewayResource} The operation completed successfully.
		 */
		Gateway_Get(subscriptionId: string, api_version: string, resourceGroupName: string, gatewayName: string, expand: Gateway_GetExpand | null | undefined): Observable<GatewayResource> {
			return this.http.get<GatewayResource>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ServerManagement/gateways/' + (gatewayName == null ? '' : encodeURIComponent(gatewayName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&expand=' + expand, {});
		}

		/**
		 * Creates or updates a ManagementService gateway.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServerManagement/gateways/{gatewayName}
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client API Version.
		 * @param {string} resourceGroupName The resource group name uniquely identifies the resource group within the user subscriptionId.
		 * @param {string} gatewayName The gateway name (256 characters maximum).
		 * @param {GatewayParameters} requestBody Parameters supplied to the CreateOrUpdate operation.
		 * @return {GatewayResource} The operation completed successfully.
		 */
		Gateway_Create(subscriptionId: string, api_version: string, resourceGroupName: string, gatewayName: string, requestBody: GatewayParameters): Observable<GatewayResource> {
			return this.http.put<GatewayResource>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ServerManagement/gateways/' + (gatewayName == null ? '' : encodeURIComponent(gatewayName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a gateway from a resource group.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServerManagement/gateways/{gatewayName}
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client API Version.
		 * @param {string} resourceGroupName The resource group name uniquely identifies the resource group within the user subscriptionId.
		 * @param {string} gatewayName The gateway name (256 characters maximum).
		 * @return {void} The object exists and was deleted successfully.
		 */
		Gateway_Delete(subscriptionId: string, api_version: string, resourceGroupName: string, gatewayName: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ServerManagement/gateways/' + (gatewayName == null ? '' : encodeURIComponent(gatewayName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates a gateway belonging to a resource group.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServerManagement/gateways/{gatewayName}
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client API Version.
		 * @param {string} resourceGroupName The resource group name uniquely identifies the resource group within the user subscriptionId.
		 * @param {string} gatewayName The gateway name (256 characters maximum).
		 * @param {GatewayParameters} requestBody Parameters supplied to the Update operation.
		 * @return {GatewayResource} Update completed successfully.
		 */
		Gateway_Update(subscriptionId: string, api_version: string, resourceGroupName: string, gatewayName: string, requestBody: GatewayParameters): Observable<GatewayResource> {
			return this.http.patch<GatewayResource>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ServerManagement/gateways/' + (gatewayName == null ? '' : encodeURIComponent(gatewayName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets a gateway profile.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServerManagement/gateways/{gatewayName}/profile
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client API Version.
		 * @param {string} resourceGroupName The resource group name uniquely identifies the resource group within the user subscriptionId.
		 * @param {string} gatewayName The gateway name (256 characters maximum).
		 * @return {GatewayProfile} The operation completed successfully.
		 */
		Gateway_GetProfile(subscriptionId: string, api_version: string, resourceGroupName: string, gatewayName: string): Observable<GatewayProfile> {
			return this.http.post<GatewayProfile>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ServerManagement/gateways/' + (gatewayName == null ? '' : encodeURIComponent(gatewayName)) + '/profile&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, {});
		}

		/**
		 * Regenerate a gateway's profile
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServerManagement/gateways/{gatewayName}/regenerateprofile
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client API Version.
		 * @param {string} resourceGroupName The resource group name uniquely identifies the resource group within the user subscriptionId.
		 * @param {string} gatewayName The gateway name (256 characters maximum).
		 * @return {void} The operation completed successfully.
		 */
		Gateway_RegenerateProfile(subscriptionId: string, api_version: string, resourceGroupName: string, gatewayName: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ServerManagement/gateways/' + (gatewayName == null ? '' : encodeURIComponent(gatewayName)) + '/regenerateprofile&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Upgrades a gateway.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServerManagement/gateways/{gatewayName}/upgradetolatest
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client API Version.
		 * @param {string} resourceGroupName The resource group name uniquely identifies the resource group within the user subscriptionId.
		 * @param {string} gatewayName The gateway name (256 characters maximum).
		 * @return {void} The operation completed successfully.
		 */
		Gateway_Upgrade(subscriptionId: string, api_version: string, resourceGroupName: string, gatewayName: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ServerManagement/gateways/' + (gatewayName == null ? '' : encodeURIComponent(gatewayName)) + '/upgradetolatest&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists nodes in a resource group.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServerManagement/nodes
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client API Version.
		 * @param {string} resourceGroupName The resource group name uniquely identifies the resource group within the user subscriptionId.
		 * @return {NodeResources} The operation completed successfully.
		 */
		Node_ListForResourceGroup(subscriptionId: string, api_version: string, resourceGroupName: string): Observable<NodeResources> {
			return this.http.get<NodeResources>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ServerManagement/nodes&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets a management node.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServerManagement/nodes/{nodeName}
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client API Version.
		 * @param {string} resourceGroupName The resource group name uniquely identifies the resource group within the user subscriptionId.
		 * @param {string} nodeName The node name (256 characters maximum).
		 * @return {NodeResource} The object exists and was deleted successfully.
		 */
		Node_Get(subscriptionId: string, api_version: string, resourceGroupName: string, nodeName: string): Observable<NodeResource> {
			return this.http.get<NodeResource>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ServerManagement/nodes/' + (nodeName == null ? '' : encodeURIComponent(nodeName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates or updates a management node.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServerManagement/nodes/{nodeName}
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client API Version.
		 * @param {string} resourceGroupName The resource group name uniquely identifies the resource group within the user subscriptionId.
		 * @param {string} nodeName The node name (256 characters maximum).
		 * @param {NodeParameters} requestBody Parameters supplied to the CreateOrUpdate operation.
		 * @return {NodeResource} The operation completed successfully.
		 */
		Node_Create(subscriptionId: string, api_version: string, resourceGroupName: string, nodeName: string, requestBody: NodeParameters): Observable<NodeResource> {
			return this.http.put<NodeResource>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ServerManagement/nodes/' + (nodeName == null ? '' : encodeURIComponent(nodeName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * deletes a management node
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServerManagement/nodes/{nodeName}
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client API Version.
		 * @param {string} resourceGroupName The resource group name uniquely identifies the resource group within the user subscriptionId.
		 * @param {string} nodeName The node name (256 characters maximum).
		 * @return {void} The object exists and was deleted successfully.
		 */
		Node_Delete(subscriptionId: string, api_version: string, resourceGroupName: string, nodeName: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ServerManagement/nodes/' + (nodeName == null ? '' : encodeURIComponent(nodeName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates a management node.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServerManagement/nodes/{nodeName}
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client API Version.
		 * @param {string} resourceGroupName The resource group name uniquely identifies the resource group within the user subscriptionId.
		 * @param {string} nodeName The node name (256 characters maximum).
		 * @param {NodeParameters} requestBody Parameters supplied to the CreateOrUpdate operation.
		 * @return {NodeResource} The operation completed successfully.
		 */
		Node_Update(subscriptionId: string, api_version: string, resourceGroupName: string, nodeName: string, requestBody: NodeParameters): Observable<NodeResource> {
			return this.http.patch<NodeResource>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ServerManagement/nodes/' + (nodeName == null ? '' : encodeURIComponent(nodeName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets a session for a node.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServerManagement/nodes/{nodeName}/sessions/{session}
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client API Version.
		 * @param {string} resourceGroupName The resource group name uniquely identifies the resource group within the user subscriptionId.
		 * @param {string} nodeName The node name (256 characters maximum).
		 * @param {string} session The sessionId from the user.
		 * @return {SessionResource} The operation completed successfully.
		 */
		Session_Get(subscriptionId: string, api_version: string, resourceGroupName: string, nodeName: string, session: string): Observable<SessionResource> {
			return this.http.get<SessionResource>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ServerManagement/nodes/' + (nodeName == null ? '' : encodeURIComponent(nodeName)) + '/sessions/' + (session == null ? '' : encodeURIComponent(session)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates a session for a node.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServerManagement/nodes/{nodeName}/sessions/{session}
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client API Version.
		 * @param {string} resourceGroupName The resource group name uniquely identifies the resource group within the user subscriptionId.
		 * @param {string} nodeName The node name (256 characters maximum).
		 * @param {string} session The sessionId from the user.
		 * @param {SessionParameters} requestBody Parameters supplied to the CreateOrUpdate operation.
		 * @return {SessionResource} The operation completed successfully.
		 */
		Session_Create(subscriptionId: string, api_version: string, resourceGroupName: string, nodeName: string, session: string, requestBody: SessionParameters): Observable<SessionResource> {
			return this.http.put<SessionResource>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ServerManagement/nodes/' + (nodeName == null ? '' : encodeURIComponent(nodeName)) + '/sessions/' + (session == null ? '' : encodeURIComponent(session)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a session for a node.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServerManagement/nodes/{nodeName}/sessions/{session}
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client API Version.
		 * @param {string} resourceGroupName The resource group name uniquely identifies the resource group within the user subscriptionId.
		 * @param {string} nodeName The node name (256 characters maximum).
		 * @param {string} session The sessionId from the user.
		 * @return {void} The operation completed successfully.
		 */
		Session_Delete(subscriptionId: string, api_version: string, resourceGroupName: string, nodeName: string, session: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ServerManagement/nodes/' + (nodeName == null ? '' : encodeURIComponent(nodeName)) + '/sessions/' + (session == null ? '' : encodeURIComponent(session)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets a list of the active sessions.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServerManagement/nodes/{nodeName}/sessions/{session}/features/powerShellConsole/pssessions
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client API Version.
		 * @param {string} resourceGroupName The resource group name uniquely identifies the resource group within the user subscriptionId.
		 * @param {string} nodeName The node name (256 characters maximum).
		 * @param {string} session The sessionId from the user.
		 * @return {PowerShellSessionResources} The operation completed successfully.
		 */
		PowerShell_ListSession(subscriptionId: string, api_version: string, resourceGroupName: string, nodeName: string, session: string): Observable<PowerShellSessionResources> {
			return this.http.get<PowerShellSessionResources>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ServerManagement/nodes/' + (nodeName == null ? '' : encodeURIComponent(nodeName)) + '/sessions/' + (session == null ? '' : encodeURIComponent(session)) + '/features/powerShellConsole/pssessions&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets the status of a command.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServerManagement/nodes/{nodeName}/sessions/{session}/features/powerShellConsole/pssessions/{pssession}
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client API Version.
		 * @param {string} resourceGroupName The resource group name uniquely identifies the resource group within the user subscriptionId.
		 * @param {string} nodeName The node name (256 characters maximum).
		 * @param {string} session The sessionId from the user.
		 * @param {string} pssession The PowerShell sessionId from the user.
		 * @param {PowerShell_GetCommandStatusExpand} expand Gets current output from an ongoing call.
		 * @return {PowerShellCommandStatus} The operation completed successfully.
		 */
		PowerShell_GetCommandStatus(subscriptionId: string, api_version: string, resourceGroupName: string, nodeName: string, session: string, pssession: string, expand: PowerShell_GetCommandStatusExpand | null | undefined): Observable<PowerShellCommandStatus> {
			return this.http.get<PowerShellCommandStatus>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ServerManagement/nodes/' + (nodeName == null ? '' : encodeURIComponent(nodeName)) + '/sessions/' + (session == null ? '' : encodeURIComponent(session)) + '/features/powerShellConsole/pssessions/' + (pssession == null ? '' : encodeURIComponent(pssession)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&expand=' + expand, {});
		}

		/**
		 * Creates a PowerShell session.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServerManagement/nodes/{nodeName}/sessions/{session}/features/powerShellConsole/pssessions/{pssession}
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client API Version.
		 * @param {string} resourceGroupName The resource group name uniquely identifies the resource group within the user subscriptionId.
		 * @param {string} nodeName The node name (256 characters maximum).
		 * @param {string} session The sessionId from the user.
		 * @param {string} pssession The PowerShell sessionId from the user.
		 * @return {PowerShellSessionResource} The operation completed succesfully.
		 */
		PowerShell_CreateSession(subscriptionId: string, api_version: string, resourceGroupName: string, nodeName: string, session: string, pssession: string): Observable<PowerShellSessionResource> {
			return this.http.put<PowerShellSessionResource>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ServerManagement/nodes/' + (nodeName == null ? '' : encodeURIComponent(nodeName)) + '/sessions/' + (session == null ? '' : encodeURIComponent(session)) + '/features/powerShellConsole/pssessions/' + (pssession == null ? '' : encodeURIComponent(pssession)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, {});
		}

		/**
		 * Updates a running PowerShell command with more data.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServerManagement/nodes/{nodeName}/sessions/{session}/features/powerShellConsole/pssessions/{pssession}
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client API Version.
		 * @param {string} resourceGroupName The resource group name uniquely identifies the resource group within the user subscriptionId.
		 * @param {string} nodeName The node name (256 characters maximum).
		 * @param {string} session The sessionId from the user.
		 * @param {string} pssession The PowerShell sessionId from the user.
		 * @return {PowerShellCommandResults} The operation completed successfully.
		 */
		PowerShell_UpdateCommand(subscriptionId: string, api_version: string, resourceGroupName: string, nodeName: string, session: string, pssession: string): Observable<PowerShellCommandResults> {
			return this.http.patch<PowerShellCommandResults>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ServerManagement/nodes/' + (nodeName == null ? '' : encodeURIComponent(nodeName)) + '/sessions/' + (session == null ? '' : encodeURIComponent(session)) + '/features/powerShellConsole/pssessions/' + (pssession == null ? '' : encodeURIComponent(pssession)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, {});
		}

		/**
		 * Cancels a PowerShell command.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServerManagement/nodes/{nodeName}/sessions/{session}/features/powerShellConsole/pssessions/{pssession}/cancel
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client API Version.
		 * @param {string} resourceGroupName The resource group name uniquely identifies the resource group within the user subscriptionId.
		 * @param {string} nodeName The node name (256 characters maximum).
		 * @param {string} session The sessionId from the user.
		 * @param {string} pssession The PowerShell sessionId from the user.
		 * @return {PowerShellCommandResults} The cancellation was completed successfully.
		 */
		PowerShell_CancelCommand(subscriptionId: string, api_version: string, resourceGroupName: string, nodeName: string, session: string, pssession: string): Observable<PowerShellCommandResults> {
			return this.http.post<PowerShellCommandResults>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ServerManagement/nodes/' + (nodeName == null ? '' : encodeURIComponent(nodeName)) + '/sessions/' + (session == null ? '' : encodeURIComponent(session)) + '/features/powerShellConsole/pssessions/' + (pssession == null ? '' : encodeURIComponent(pssession)) + '/cancel&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, {});
		}

		/**
		 * Creates a PowerShell script and invokes it.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServerManagement/nodes/{nodeName}/sessions/{session}/features/powerShellConsole/pssessions/{pssession}/invokeCommand
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client API Version.
		 * @param {string} resourceGroupName The resource group name uniquely identifies the resource group within the user subscriptionId.
		 * @param {string} nodeName The node name (256 characters maximum).
		 * @param {string} session The sessionId from the user.
		 * @param {string} pssession The PowerShell sessionId from the user.
		 * @param {PowerShellCommandParameters} requestBody Parameters supplied to the Invoke PowerShell Command operation.
		 * @return {PowerShellCommandResults} The operation completed successfully.
		 */
		PowerShell_InvokeCommand(subscriptionId: string, api_version: string, resourceGroupName: string, nodeName: string, session: string, pssession: string, requestBody: PowerShellCommandParameters): Observable<PowerShellCommandResults> {
			return this.http.post<PowerShellCommandResults>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ServerManagement/nodes/' + (nodeName == null ? '' : encodeURIComponent(nodeName)) + '/sessions/' + (session == null ? '' : encodeURIComponent(session)) + '/features/powerShellConsole/pssessions/' + (pssession == null ? '' : encodeURIComponent(pssession)) + '/invokeCommand&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets tab completion values for a command.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServerManagement/nodes/{nodeName}/sessions/{session}/features/powerShellConsole/pssessions/{pssession}/tab
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client API Version.
		 * @param {string} resourceGroupName The resource group name uniquely identifies the resource group within the user subscriptionId.
		 * @param {string} nodeName The node name (256 characters maximum).
		 * @param {string} session The sessionId from the user.
		 * @param {string} pssession The PowerShell sessionId from the user.
		 * @param {PowerShellTabCompletionParameters} requestBody Parameters supplied to the tab completion call.
		 * @return {PowerShellTabCompletionResults} The request was succesfully completed.
		 */
		PowerShell_TabCompletion(subscriptionId: string, api_version: string, resourceGroupName: string, nodeName: string, session: string, pssession: string, requestBody: PowerShellTabCompletionParameters): Observable<PowerShellTabCompletionResults> {
			return this.http.post<PowerShellTabCompletionResults>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ServerManagement/nodes/' + (nodeName == null ? '' : encodeURIComponent(nodeName)) + '/sessions/' + (session == null ? '' : encodeURIComponent(session)) + '/features/powerShellConsole/pssessions/' + (pssession == null ? '' : encodeURIComponent(pssession)) + '/tab&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum Gateway_GetExpand { status = 0, download = 1 }

	export enum PowerShell_GetCommandStatusExpand { output = 0 }

}

