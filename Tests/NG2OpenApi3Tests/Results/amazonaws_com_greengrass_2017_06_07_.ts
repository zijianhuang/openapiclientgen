import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface AssociateRoleToGroupResponse {
		AssociatedAt?: string;
	}
	export interface AssociateRoleToGroupResponseFormProperties {
		AssociatedAt: FormControl<string | null | undefined>,
	}
	export function CreateAssociateRoleToGroupResponseFormGroup() {
		return new FormGroup<AssociateRoleToGroupResponseFormProperties>({
			AssociatedAt: new FormControl<string | null | undefined>(undefined),
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

	export interface InternalServerErrorException {
	}
	export interface InternalServerErrorExceptionFormProperties {
	}
	export function CreateInternalServerErrorExceptionFormGroup() {
		return new FormGroup<InternalServerErrorExceptionFormProperties>({
		});

	}

	export interface AssociateServiceRoleToAccountResponse {
		AssociatedAt?: string;
	}
	export interface AssociateServiceRoleToAccountResponseFormProperties {
		AssociatedAt: FormControl<string | null | undefined>,
	}
	export function CreateAssociateServiceRoleToAccountResponseFormGroup() {
		return new FormGroup<AssociateServiceRoleToAccountResponseFormProperties>({
			AssociatedAt: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateConnectorDefinitionResponse {
		Arn?: string;
		CreationTimestamp?: string;
		Id?: string;
		LastUpdatedTimestamp?: string;
		LatestVersion?: string;
		LatestVersionArn?: string;
		Name?: string;
	}
	export interface CreateConnectorDefinitionResponseFormProperties {
		Arn: FormControl<string | null | undefined>,
		CreationTimestamp: FormControl<string | null | undefined>,
		Id: FormControl<string | null | undefined>,
		LastUpdatedTimestamp: FormControl<string | null | undefined>,
		LatestVersion: FormControl<string | null | undefined>,
		LatestVersionArn: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
	}
	export function CreateCreateConnectorDefinitionResponseFormGroup() {
		return new FormGroup<CreateConnectorDefinitionResponseFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			CreationTimestamp: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			LastUpdatedTimestamp: new FormControl<string | null | undefined>(undefined),
			LatestVersion: new FormControl<string | null | undefined>(undefined),
			LatestVersionArn: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about a connector. Connectors run on the Greengrass core and contain built-in integration with local infrastructure, device protocols, AWS, and other cloud services. */
	export interface Connector {

		/** Required */
		ConnectorArn: string;

		/** Required */
		Id: string;
		Parameters?: __mapOf__string;
	}

	/** Information about a connector. Connectors run on the Greengrass core and contain built-in integration with local infrastructure, device protocols, AWS, and other cloud services. */
	export interface ConnectorFormProperties {

		/** Required */
		ConnectorArn: FormControl<string | null | undefined>,

		/** Required */
		Id: FormControl<string | null | undefined>,
	}
	export function CreateConnectorFormGroup() {
		return new FormGroup<ConnectorFormProperties>({
			ConnectorArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface __mapOf__string {
	}
	export interface __mapOf__stringFormProperties {
	}
	export function Create__mapOf__stringFormGroup() {
		return new FormGroup<__mapOf__stringFormProperties>({
		});

	}

	export interface CreateConnectorDefinitionVersionResponse {
		Arn?: string;
		CreationTimestamp?: string;
		Id?: string;
		Version?: string;
	}
	export interface CreateConnectorDefinitionVersionResponseFormProperties {
		Arn: FormControl<string | null | undefined>,
		CreationTimestamp: FormControl<string | null | undefined>,
		Id: FormControl<string | null | undefined>,
		Version: FormControl<string | null | undefined>,
	}
	export function CreateCreateConnectorDefinitionVersionResponseFormGroup() {
		return new FormGroup<CreateConnectorDefinitionVersionResponseFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			CreationTimestamp: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			Version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateCoreDefinitionResponse {
		Arn?: string;
		CreationTimestamp?: string;
		Id?: string;
		LastUpdatedTimestamp?: string;
		LatestVersion?: string;
		LatestVersionArn?: string;
		Name?: string;
	}
	export interface CreateCoreDefinitionResponseFormProperties {
		Arn: FormControl<string | null | undefined>,
		CreationTimestamp: FormControl<string | null | undefined>,
		Id: FormControl<string | null | undefined>,
		LastUpdatedTimestamp: FormControl<string | null | undefined>,
		LatestVersion: FormControl<string | null | undefined>,
		LatestVersionArn: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
	}
	export function CreateCreateCoreDefinitionResponseFormGroup() {
		return new FormGroup<CreateCoreDefinitionResponseFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			CreationTimestamp: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			LastUpdatedTimestamp: new FormControl<string | null | undefined>(undefined),
			LatestVersion: new FormControl<string | null | undefined>(undefined),
			LatestVersionArn: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about a core. */
	export interface Core {

		/** Required */
		CertificateArn: string;

		/** Required */
		Id: string;
		SyncShadow?: boolean | null;

		/** Required */
		ThingArn: string;
	}

	/** Information about a core. */
	export interface CoreFormProperties {

		/** Required */
		CertificateArn: FormControl<string | null | undefined>,

		/** Required */
		Id: FormControl<string | null | undefined>,
		SyncShadow: FormControl<boolean | null | undefined>,

		/** Required */
		ThingArn: FormControl<string | null | undefined>,
	}
	export function CreateCoreFormGroup() {
		return new FormGroup<CoreFormProperties>({
			CertificateArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SyncShadow: new FormControl<boolean | null | undefined>(undefined),
			ThingArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateCoreDefinitionVersionResponse {
		Arn?: string;
		CreationTimestamp?: string;
		Id?: string;
		Version?: string;
	}
	export interface CreateCoreDefinitionVersionResponseFormProperties {
		Arn: FormControl<string | null | undefined>,
		CreationTimestamp: FormControl<string | null | undefined>,
		Id: FormControl<string | null | undefined>,
		Version: FormControl<string | null | undefined>,
	}
	export function CreateCreateCoreDefinitionVersionResponseFormGroup() {
		return new FormGroup<CreateCoreDefinitionVersionResponseFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			CreationTimestamp: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			Version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateDeploymentResponse {
		DeploymentArn?: string;
		DeploymentId?: string;
	}
	export interface CreateDeploymentResponseFormProperties {
		DeploymentArn: FormControl<string | null | undefined>,
		DeploymentId: FormControl<string | null | undefined>,
	}
	export function CreateCreateDeploymentResponseFormGroup() {
		return new FormGroup<CreateDeploymentResponseFormProperties>({
			DeploymentArn: new FormControl<string | null | undefined>(undefined),
			DeploymentId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateDeviceDefinitionResponse {
		Arn?: string;
		CreationTimestamp?: string;
		Id?: string;
		LastUpdatedTimestamp?: string;
		LatestVersion?: string;
		LatestVersionArn?: string;
		Name?: string;
	}
	export interface CreateDeviceDefinitionResponseFormProperties {
		Arn: FormControl<string | null | undefined>,
		CreationTimestamp: FormControl<string | null | undefined>,
		Id: FormControl<string | null | undefined>,
		LastUpdatedTimestamp: FormControl<string | null | undefined>,
		LatestVersion: FormControl<string | null | undefined>,
		LatestVersionArn: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
	}
	export function CreateCreateDeviceDefinitionResponseFormGroup() {
		return new FormGroup<CreateDeviceDefinitionResponseFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			CreationTimestamp: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			LastUpdatedTimestamp: new FormControl<string | null | undefined>(undefined),
			LatestVersion: new FormControl<string | null | undefined>(undefined),
			LatestVersionArn: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about a device. */
	export interface Device {

		/** Required */
		CertificateArn: string;

		/** Required */
		Id: string;
		SyncShadow?: boolean | null;

		/** Required */
		ThingArn: string;
	}

	/** Information about a device. */
	export interface DeviceFormProperties {

		/** Required */
		CertificateArn: FormControl<string | null | undefined>,

		/** Required */
		Id: FormControl<string | null | undefined>,
		SyncShadow: FormControl<boolean | null | undefined>,

		/** Required */
		ThingArn: FormControl<string | null | undefined>,
	}
	export function CreateDeviceFormGroup() {
		return new FormGroup<DeviceFormProperties>({
			CertificateArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SyncShadow: new FormControl<boolean | null | undefined>(undefined),
			ThingArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateDeviceDefinitionVersionResponse {
		Arn?: string;
		CreationTimestamp?: string;
		Id?: string;
		Version?: string;
	}
	export interface CreateDeviceDefinitionVersionResponseFormProperties {
		Arn: FormControl<string | null | undefined>,
		CreationTimestamp: FormControl<string | null | undefined>,
		Id: FormControl<string | null | undefined>,
		Version: FormControl<string | null | undefined>,
	}
	export function CreateCreateDeviceDefinitionVersionResponseFormGroup() {
		return new FormGroup<CreateDeviceDefinitionVersionResponseFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			CreationTimestamp: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			Version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateFunctionDefinitionResponse {
		Arn?: string;
		CreationTimestamp?: string;
		Id?: string;
		LastUpdatedTimestamp?: string;
		LatestVersion?: string;
		LatestVersionArn?: string;
		Name?: string;
	}
	export interface CreateFunctionDefinitionResponseFormProperties {
		Arn: FormControl<string | null | undefined>,
		CreationTimestamp: FormControl<string | null | undefined>,
		Id: FormControl<string | null | undefined>,
		LastUpdatedTimestamp: FormControl<string | null | undefined>,
		LatestVersion: FormControl<string | null | undefined>,
		LatestVersionArn: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
	}
	export function CreateCreateFunctionDefinitionResponseFormGroup() {
		return new FormGroup<CreateFunctionDefinitionResponseFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			CreationTimestamp: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			LastUpdatedTimestamp: new FormControl<string | null | undefined>(undefined),
			LatestVersion: new FormControl<string | null | undefined>(undefined),
			LatestVersionArn: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The default configuration that applies to all Lambda functions in the group. Individual Lambda functions can override these settings. */
	export interface FunctionDefaultConfig {

		/** Configuration information that specifies how a Lambda function runs. */
		Execution?: FunctionDefaultExecutionConfig;
	}

	/** The default configuration that applies to all Lambda functions in the group. Individual Lambda functions can override these settings. */
	export interface FunctionDefaultConfigFormProperties {
	}
	export function CreateFunctionDefaultConfigFormGroup() {
		return new FormGroup<FunctionDefaultConfigFormProperties>({
		});

	}


	/** Configuration information that specifies how a Lambda function runs.  */
	export interface FunctionDefaultExecutionConfig {

		/** Specifies whether the Lambda function runs in a Greengrass container (default) or without containerization. Unless your scenario requires that you run without containerization, we recommend that you run in a Greengrass container. Omit this value to run the Lambda function with the default containerization for the group. */
		IsolationMode?: FunctionDefaultExecutionConfigIsolationMode | null;

		/** Specifies the user and group whose permissions are used when running the Lambda function. You can specify one or both values to override the default values. We recommend that you avoid running as root unless absolutely necessary to minimize the risk of unintended changes or malicious attacks. To run as root, you must set ''IsolationMode'' to ''NoContainer'' and update config.json in ''greengrass-root/config'' to set ''allowFunctionsToRunAsRoot'' to ''yes''. */
		RunAs?: FunctionRunAsConfig;
	}

	/** Configuration information that specifies how a Lambda function runs.  */
	export interface FunctionDefaultExecutionConfigFormProperties {

		/** Specifies whether the Lambda function runs in a Greengrass container (default) or without containerization. Unless your scenario requires that you run without containerization, we recommend that you run in a Greengrass container. Omit this value to run the Lambda function with the default containerization for the group. */
		IsolationMode: FormControl<FunctionDefaultExecutionConfigIsolationMode | null | undefined>,
	}
	export function CreateFunctionDefaultExecutionConfigFormGroup() {
		return new FormGroup<FunctionDefaultExecutionConfigFormProperties>({
			IsolationMode: new FormControl<FunctionDefaultExecutionConfigIsolationMode | null | undefined>(undefined),
		});

	}

	export enum FunctionDefaultExecutionConfigIsolationMode { GreengrassContainer = 'GreengrassContainer', NoContainer = 'NoContainer' }


	/** Specifies the user and group whose permissions are used when running the Lambda function. You can specify one or both values to override the default values. We recommend that you avoid running as root unless absolutely necessary to minimize the risk of unintended changes or malicious attacks. To run as root, you must set ''IsolationMode'' to ''NoContainer'' and update config.json in ''greengrass-root/config'' to set ''allowFunctionsToRunAsRoot'' to ''yes''. */
	export interface FunctionRunAsConfig {
		Gid?: number | null;
		Uid?: number | null;
	}

	/** Specifies the user and group whose permissions are used when running the Lambda function. You can specify one or both values to override the default values. We recommend that you avoid running as root unless absolutely necessary to minimize the risk of unintended changes or malicious attacks. To run as root, you must set ''IsolationMode'' to ''NoContainer'' and update config.json in ''greengrass-root/config'' to set ''allowFunctionsToRunAsRoot'' to ''yes''. */
	export interface FunctionRunAsConfigFormProperties {
		Gid: FormControl<number | null | undefined>,
		Uid: FormControl<number | null | undefined>,
	}
	export function CreateFunctionRunAsConfigFormGroup() {
		return new FormGroup<FunctionRunAsConfigFormProperties>({
			Gid: new FormControl<number | null | undefined>(undefined),
			Uid: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Information about a Lambda function. */
	export interface Function {
		FunctionArn?: string;
		FunctionConfiguration?: FunctionConfiguration;

		/** Required */
		Id: string;
	}

	/** Information about a Lambda function. */
	export interface FunctionFormProperties {
		FunctionArn: FormControl<string | null | undefined>,

		/** Required */
		Id: FormControl<string | null | undefined>,
	}
	export function CreateFunctionFormGroup() {
		return new FormGroup<FunctionFormProperties>({
			FunctionArn: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The configuration of the Lambda function. */
	export interface FunctionConfiguration {
		EncodingType?: EncodingType;
		Environment?: FunctionConfigurationEnvironment;
		ExecArgs?: string;
		Executable?: string;
		MemorySize?: number | null;
		Pinned?: boolean | null;
		Timeout?: number | null;
		FunctionRuntimeOverride?: string;
	}

	/** The configuration of the Lambda function. */
	export interface FunctionConfigurationFormProperties {
		EncodingType: FormControl<EncodingType | null | undefined>,
		ExecArgs: FormControl<string | null | undefined>,
		Executable: FormControl<string | null | undefined>,
		MemorySize: FormControl<number | null | undefined>,
		Pinned: FormControl<boolean | null | undefined>,
		Timeout: FormControl<number | null | undefined>,
		FunctionRuntimeOverride: FormControl<string | null | undefined>,
	}
	export function CreateFunctionConfigurationFormGroup() {
		return new FormGroup<FunctionConfigurationFormProperties>({
			EncodingType: new FormControl<EncodingType | null | undefined>(undefined),
			ExecArgs: new FormControl<string | null | undefined>(undefined),
			Executable: new FormControl<string | null | undefined>(undefined),
			MemorySize: new FormControl<number | null | undefined>(undefined),
			Pinned: new FormControl<boolean | null | undefined>(undefined),
			Timeout: new FormControl<number | null | undefined>(undefined),
			FunctionRuntimeOverride: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum EncodingType { binary = 'binary', json = 'json' }


	/** The environment configuration of the function. */
	export interface FunctionConfigurationEnvironment {
		AccessSysfs?: boolean | null;
		Execution?: FunctionExecutionConfig;
		ResourceAccessPolicies?: Array<ResourceAccessPolicy>;
		Variables?: __mapOf__string;
	}

	/** The environment configuration of the function. */
	export interface FunctionConfigurationEnvironmentFormProperties {
		AccessSysfs: FormControl<boolean | null | undefined>,
	}
	export function CreateFunctionConfigurationEnvironmentFormGroup() {
		return new FormGroup<FunctionConfigurationEnvironmentFormProperties>({
			AccessSysfs: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Configuration information that specifies how a Lambda function runs.  */
	export interface FunctionExecutionConfig {

		/** Specifies whether the Lambda function runs in a Greengrass container (default) or without containerization. Unless your scenario requires that you run without containerization, we recommend that you run in a Greengrass container. Omit this value to run the Lambda function with the default containerization for the group. */
		IsolationMode?: FunctionDefaultExecutionConfigIsolationMode | null;

		/** Specifies the user and group whose permissions are used when running the Lambda function. You can specify one or both values to override the default values. We recommend that you avoid running as root unless absolutely necessary to minimize the risk of unintended changes or malicious attacks. To run as root, you must set ''IsolationMode'' to ''NoContainer'' and update config.json in ''greengrass-root/config'' to set ''allowFunctionsToRunAsRoot'' to ''yes''. */
		RunAs?: FunctionRunAsConfig;
	}

	/** Configuration information that specifies how a Lambda function runs.  */
	export interface FunctionExecutionConfigFormProperties {

		/** Specifies whether the Lambda function runs in a Greengrass container (default) or without containerization. Unless your scenario requires that you run without containerization, we recommend that you run in a Greengrass container. Omit this value to run the Lambda function with the default containerization for the group. */
		IsolationMode: FormControl<FunctionDefaultExecutionConfigIsolationMode | null | undefined>,
	}
	export function CreateFunctionExecutionConfigFormGroup() {
		return new FormGroup<FunctionExecutionConfigFormProperties>({
			IsolationMode: new FormControl<FunctionDefaultExecutionConfigIsolationMode | null | undefined>(undefined),
		});

	}


	/** A policy used by the function to access a resource. */
	export interface ResourceAccessPolicy {
		Permission?: Permission;

		/** Required */
		ResourceId: string;
	}

	/** A policy used by the function to access a resource. */
	export interface ResourceAccessPolicyFormProperties {
		Permission: FormControl<Permission | null | undefined>,

		/** Required */
		ResourceId: FormControl<string | null | undefined>,
	}
	export function CreateResourceAccessPolicyFormGroup() {
		return new FormGroup<ResourceAccessPolicyFormProperties>({
			Permission: new FormControl<Permission | null | undefined>(undefined),
			ResourceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The type of permission a function has to access a resource. */
	export enum Permission { ro = 'ro', rw = 'rw' }

	export interface CreateFunctionDefinitionVersionResponse {
		Arn?: string;
		CreationTimestamp?: string;
		Id?: string;
		Version?: string;
	}
	export interface CreateFunctionDefinitionVersionResponseFormProperties {
		Arn: FormControl<string | null | undefined>,
		CreationTimestamp: FormControl<string | null | undefined>,
		Id: FormControl<string | null | undefined>,
		Version: FormControl<string | null | undefined>,
	}
	export function CreateCreateFunctionDefinitionVersionResponseFormGroup() {
		return new FormGroup<CreateFunctionDefinitionVersionResponseFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			CreationTimestamp: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			Version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateGroupResponse {
		Arn?: string;
		CreationTimestamp?: string;
		Id?: string;
		LastUpdatedTimestamp?: string;
		LatestVersion?: string;
		LatestVersionArn?: string;
		Name?: string;
	}
	export interface CreateGroupResponseFormProperties {
		Arn: FormControl<string | null | undefined>,
		CreationTimestamp: FormControl<string | null | undefined>,
		Id: FormControl<string | null | undefined>,
		LastUpdatedTimestamp: FormControl<string | null | undefined>,
		LatestVersion: FormControl<string | null | undefined>,
		LatestVersionArn: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
	}
	export function CreateCreateGroupResponseFormGroup() {
		return new FormGroup<CreateGroupResponseFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			CreationTimestamp: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			LastUpdatedTimestamp: new FormControl<string | null | undefined>(undefined),
			LatestVersion: new FormControl<string | null | undefined>(undefined),
			LatestVersionArn: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateGroupCertificateAuthorityResponse {
		GroupCertificateAuthorityArn?: string;
	}
	export interface CreateGroupCertificateAuthorityResponseFormProperties {
		GroupCertificateAuthorityArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateGroupCertificateAuthorityResponseFormGroup() {
		return new FormGroup<CreateGroupCertificateAuthorityResponseFormProperties>({
			GroupCertificateAuthorityArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateGroupVersionResponse {
		Arn?: string;
		CreationTimestamp?: string;
		Id?: string;
		Version?: string;
	}
	export interface CreateGroupVersionResponseFormProperties {
		Arn: FormControl<string | null | undefined>,
		CreationTimestamp: FormControl<string | null | undefined>,
		Id: FormControl<string | null | undefined>,
		Version: FormControl<string | null | undefined>,
	}
	export function CreateCreateGroupVersionResponseFormGroup() {
		return new FormGroup<CreateGroupVersionResponseFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			CreationTimestamp: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			Version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateLoggerDefinitionResponse {
		Arn?: string;
		CreationTimestamp?: string;
		Id?: string;
		LastUpdatedTimestamp?: string;
		LatestVersion?: string;
		LatestVersionArn?: string;
		Name?: string;
	}
	export interface CreateLoggerDefinitionResponseFormProperties {
		Arn: FormControl<string | null | undefined>,
		CreationTimestamp: FormControl<string | null | undefined>,
		Id: FormControl<string | null | undefined>,
		LastUpdatedTimestamp: FormControl<string | null | undefined>,
		LatestVersion: FormControl<string | null | undefined>,
		LatestVersionArn: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
	}
	export function CreateCreateLoggerDefinitionResponseFormGroup() {
		return new FormGroup<CreateLoggerDefinitionResponseFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			CreationTimestamp: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			LastUpdatedTimestamp: new FormControl<string | null | undefined>(undefined),
			LatestVersion: new FormControl<string | null | undefined>(undefined),
			LatestVersionArn: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about a logger */
	export interface Logger {

		/** Required */
		Component: LoggerComponent;

		/** Required */
		Id: string;

		/** Required */
		Level: LoggerLevel;
		Space?: number | null;

		/** Required */
		Type: LoggerType;
	}

	/** Information about a logger */
	export interface LoggerFormProperties {

		/** Required */
		Component: FormControl<LoggerComponent | null | undefined>,

		/** Required */
		Id: FormControl<string | null | undefined>,

		/** Required */
		Level: FormControl<LoggerLevel | null | undefined>,
		Space: FormControl<number | null | undefined>,

		/** Required */
		Type: FormControl<LoggerType | null | undefined>,
	}
	export function CreateLoggerFormGroup() {
		return new FormGroup<LoggerFormProperties>({
			Component: new FormControl<LoggerComponent | null | undefined>(undefined, [Validators.required]),
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Level: new FormControl<LoggerLevel | null | undefined>(undefined, [Validators.required]),
			Space: new FormControl<number | null | undefined>(undefined),
			Type: new FormControl<LoggerType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum LoggerComponent { GreengrassSystem = 'GreengrassSystem', Lambda = 'Lambda' }

	export enum LoggerLevel { DEBUG = 'DEBUG', INFO = 'INFO', WARN = 'WARN', ERROR = 'ERROR', FATAL = 'FATAL' }

	export enum LoggerType { FileSystem = 'FileSystem', AWSCloudWatch = 'AWSCloudWatch' }

	export interface CreateLoggerDefinitionVersionResponse {
		Arn?: string;
		CreationTimestamp?: string;
		Id?: string;
		Version?: string;
	}
	export interface CreateLoggerDefinitionVersionResponseFormProperties {
		Arn: FormControl<string | null | undefined>,
		CreationTimestamp: FormControl<string | null | undefined>,
		Id: FormControl<string | null | undefined>,
		Version: FormControl<string | null | undefined>,
	}
	export function CreateCreateLoggerDefinitionVersionResponseFormGroup() {
		return new FormGroup<CreateLoggerDefinitionVersionResponseFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			CreationTimestamp: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			Version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateResourceDefinitionResponse {
		Arn?: string;
		CreationTimestamp?: string;
		Id?: string;
		LastUpdatedTimestamp?: string;
		LatestVersion?: string;
		LatestVersionArn?: string;
		Name?: string;
	}
	export interface CreateResourceDefinitionResponseFormProperties {
		Arn: FormControl<string | null | undefined>,
		CreationTimestamp: FormControl<string | null | undefined>,
		Id: FormControl<string | null | undefined>,
		LastUpdatedTimestamp: FormControl<string | null | undefined>,
		LatestVersion: FormControl<string | null | undefined>,
		LatestVersionArn: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
	}
	export function CreateCreateResourceDefinitionResponseFormGroup() {
		return new FormGroup<CreateResourceDefinitionResponseFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			CreationTimestamp: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			LastUpdatedTimestamp: new FormControl<string | null | undefined>(undefined),
			LatestVersion: new FormControl<string | null | undefined>(undefined),
			LatestVersionArn: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about a resource. */
	export interface Resource {

		/** Required */
		Id: string;

		/** Required */
		Name: string;

		/** Required */
		ResourceDataContainer: ResourceDataContainer;
	}

	/** Information about a resource. */
	export interface ResourceFormProperties {

		/** Required */
		Id: FormControl<string | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateResourceFormGroup() {
		return new FormGroup<ResourceFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A container for resource data. The container takes only one of the following supported resource data types: ''LocalDeviceResourceData'', ''LocalVolumeResourceData'', ''SageMakerMachineLearningModelResourceData'', ''S3MachineLearningModelResourceData'', ''SecretsManagerSecretResourceData''. */
	export interface ResourceDataContainer {
		LocalDeviceResourceData?: LocalDeviceResourceData;
		LocalVolumeResourceData?: LocalVolumeResourceData;
		S3MachineLearningModelResourceData?: S3MachineLearningModelResourceData;
		SageMakerMachineLearningModelResourceData?: SageMakerMachineLearningModelResourceData;
		SecretsManagerSecretResourceData?: SecretsManagerSecretResourceData;
	}

	/** A container for resource data. The container takes only one of the following supported resource data types: ''LocalDeviceResourceData'', ''LocalVolumeResourceData'', ''SageMakerMachineLearningModelResourceData'', ''S3MachineLearningModelResourceData'', ''SecretsManagerSecretResourceData''. */
	export interface ResourceDataContainerFormProperties {
	}
	export function CreateResourceDataContainerFormGroup() {
		return new FormGroup<ResourceDataContainerFormProperties>({
		});

	}


	/** Attributes that define a local device resource. */
	export interface LocalDeviceResourceData {
		GroupOwnerSetting?: GroupOwnerSetting;
		SourcePath?: string;
	}

	/** Attributes that define a local device resource. */
	export interface LocalDeviceResourceDataFormProperties {
		SourcePath: FormControl<string | null | undefined>,
	}
	export function CreateLocalDeviceResourceDataFormGroup() {
		return new FormGroup<LocalDeviceResourceDataFormProperties>({
			SourcePath: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Group owner related settings for local resources. */
	export interface GroupOwnerSetting {
		AutoAddGroupOwner?: boolean | null;
		GroupOwner?: string;
	}

	/** Group owner related settings for local resources. */
	export interface GroupOwnerSettingFormProperties {
		AutoAddGroupOwner: FormControl<boolean | null | undefined>,
		GroupOwner: FormControl<string | null | undefined>,
	}
	export function CreateGroupOwnerSettingFormGroup() {
		return new FormGroup<GroupOwnerSettingFormProperties>({
			AutoAddGroupOwner: new FormControl<boolean | null | undefined>(undefined),
			GroupOwner: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Attributes that define a local volume resource. */
	export interface LocalVolumeResourceData {
		DestinationPath?: string;
		GroupOwnerSetting?: GroupOwnerSetting;
		SourcePath?: string;
	}

	/** Attributes that define a local volume resource. */
	export interface LocalVolumeResourceDataFormProperties {
		DestinationPath: FormControl<string | null | undefined>,
		SourcePath: FormControl<string | null | undefined>,
	}
	export function CreateLocalVolumeResourceDataFormGroup() {
		return new FormGroup<LocalVolumeResourceDataFormProperties>({
			DestinationPath: new FormControl<string | null | undefined>(undefined),
			SourcePath: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Attributes that define an Amazon S3 machine learning resource. */
	export interface S3MachineLearningModelResourceData {
		DestinationPath?: string;

		/** The owner setting for downloaded machine learning resources. */
		OwnerSetting?: ResourceDownloadOwnerSetting;
		S3Uri?: string;
	}

	/** Attributes that define an Amazon S3 machine learning resource. */
	export interface S3MachineLearningModelResourceDataFormProperties {
		DestinationPath: FormControl<string | null | undefined>,
		S3Uri: FormControl<string | null | undefined>,
	}
	export function CreateS3MachineLearningModelResourceDataFormGroup() {
		return new FormGroup<S3MachineLearningModelResourceDataFormProperties>({
			DestinationPath: new FormControl<string | null | undefined>(undefined),
			S3Uri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The owner setting for downloaded machine learning resources. */
	export interface ResourceDownloadOwnerSetting {

		/** Required */
		GroupOwner: string;

		/** Required */
		GroupPermission: Permission;
	}

	/** The owner setting for downloaded machine learning resources. */
	export interface ResourceDownloadOwnerSettingFormProperties {

		/** Required */
		GroupOwner: FormControl<string | null | undefined>,

		/** Required */
		GroupPermission: FormControl<Permission | null | undefined>,
	}
	export function CreateResourceDownloadOwnerSettingFormGroup() {
		return new FormGroup<ResourceDownloadOwnerSettingFormProperties>({
			GroupOwner: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			GroupPermission: new FormControl<Permission | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Attributes that define an Amazon SageMaker machine learning resource. */
	export interface SageMakerMachineLearningModelResourceData {
		DestinationPath?: string;

		/** The owner setting for downloaded machine learning resources. */
		OwnerSetting?: ResourceDownloadOwnerSetting;
		SageMakerJobArn?: string;
	}

	/** Attributes that define an Amazon SageMaker machine learning resource. */
	export interface SageMakerMachineLearningModelResourceDataFormProperties {
		DestinationPath: FormControl<string | null | undefined>,
		SageMakerJobArn: FormControl<string | null | undefined>,
	}
	export function CreateSageMakerMachineLearningModelResourceDataFormGroup() {
		return new FormGroup<SageMakerMachineLearningModelResourceDataFormProperties>({
			DestinationPath: new FormControl<string | null | undefined>(undefined),
			SageMakerJobArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Attributes that define a secret resource, which references a secret from AWS Secrets Manager. AWS IoT Greengrass stores a local, encrypted copy of the secret on the Greengrass core, where it can be securely accessed by connectors and Lambda functions. */
	export interface SecretsManagerSecretResourceData {
		ARN?: string;
		AdditionalStagingLabelsToDownload?: Array<string>;
	}

	/** Attributes that define a secret resource, which references a secret from AWS Secrets Manager. AWS IoT Greengrass stores a local, encrypted copy of the secret on the Greengrass core, where it can be securely accessed by connectors and Lambda functions. */
	export interface SecretsManagerSecretResourceDataFormProperties {
		ARN: FormControl<string | null | undefined>,
	}
	export function CreateSecretsManagerSecretResourceDataFormGroup() {
		return new FormGroup<SecretsManagerSecretResourceDataFormProperties>({
			ARN: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateResourceDefinitionVersionResponse {
		Arn?: string;
		CreationTimestamp?: string;
		Id?: string;
		Version?: string;
	}
	export interface CreateResourceDefinitionVersionResponseFormProperties {
		Arn: FormControl<string | null | undefined>,
		CreationTimestamp: FormControl<string | null | undefined>,
		Id: FormControl<string | null | undefined>,
		Version: FormControl<string | null | undefined>,
	}
	export function CreateCreateResourceDefinitionVersionResponseFormGroup() {
		return new FormGroup<CreateResourceDefinitionVersionResponseFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			CreationTimestamp: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			Version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateSoftwareUpdateJobResponse {
		IotJobArn?: string;
		IotJobId?: string;
		PlatformSoftwareVersion?: string;
	}
	export interface CreateSoftwareUpdateJobResponseFormProperties {
		IotJobArn: FormControl<string | null | undefined>,
		IotJobId: FormControl<string | null | undefined>,
		PlatformSoftwareVersion: FormControl<string | null | undefined>,
	}
	export function CreateCreateSoftwareUpdateJobResponseFormGroup() {
		return new FormGroup<CreateSoftwareUpdateJobResponseFormProperties>({
			IotJobArn: new FormControl<string | null | undefined>(undefined),
			IotJobId: new FormControl<string | null | undefined>(undefined),
			PlatformSoftwareVersion: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateSubscriptionDefinitionResponse {
		Arn?: string;
		CreationTimestamp?: string;
		Id?: string;
		LastUpdatedTimestamp?: string;
		LatestVersion?: string;
		LatestVersionArn?: string;
		Name?: string;
	}
	export interface CreateSubscriptionDefinitionResponseFormProperties {
		Arn: FormControl<string | null | undefined>,
		CreationTimestamp: FormControl<string | null | undefined>,
		Id: FormControl<string | null | undefined>,
		LastUpdatedTimestamp: FormControl<string | null | undefined>,
		LatestVersion: FormControl<string | null | undefined>,
		LatestVersionArn: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
	}
	export function CreateCreateSubscriptionDefinitionResponseFormGroup() {
		return new FormGroup<CreateSubscriptionDefinitionResponseFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			CreationTimestamp: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			LastUpdatedTimestamp: new FormControl<string | null | undefined>(undefined),
			LatestVersion: new FormControl<string | null | undefined>(undefined),
			LatestVersionArn: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about a subscription. */
	export interface Subscription {

		/** Required */
		Id: string;

		/** Required */
		Source: string;

		/** Required */
		Subject: string;

		/** Required */
		Target: string;
	}

	/** Information about a subscription. */
	export interface SubscriptionFormProperties {

		/** Required */
		Id: FormControl<string | null | undefined>,

		/** Required */
		Source: FormControl<string | null | undefined>,

		/** Required */
		Subject: FormControl<string | null | undefined>,

		/** Required */
		Target: FormControl<string | null | undefined>,
	}
	export function CreateSubscriptionFormGroup() {
		return new FormGroup<SubscriptionFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Source: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Subject: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Target: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateSubscriptionDefinitionVersionResponse {
		Arn?: string;
		CreationTimestamp?: string;
		Id?: string;
		Version?: string;
	}
	export interface CreateSubscriptionDefinitionVersionResponseFormProperties {
		Arn: FormControl<string | null | undefined>,
		CreationTimestamp: FormControl<string | null | undefined>,
		Id: FormControl<string | null | undefined>,
		Version: FormControl<string | null | undefined>,
	}
	export function CreateCreateSubscriptionDefinitionVersionResponseFormGroup() {
		return new FormGroup<CreateSubscriptionDefinitionVersionResponseFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			CreationTimestamp: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			Version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteConnectorDefinitionResponse {
	}
	export interface DeleteConnectorDefinitionResponseFormProperties {
	}
	export function CreateDeleteConnectorDefinitionResponseFormGroup() {
		return new FormGroup<DeleteConnectorDefinitionResponseFormProperties>({
		});

	}

	export interface DeleteCoreDefinitionResponse {
	}
	export interface DeleteCoreDefinitionResponseFormProperties {
	}
	export function CreateDeleteCoreDefinitionResponseFormGroup() {
		return new FormGroup<DeleteCoreDefinitionResponseFormProperties>({
		});

	}

	export interface DeleteDeviceDefinitionResponse {
	}
	export interface DeleteDeviceDefinitionResponseFormProperties {
	}
	export function CreateDeleteDeviceDefinitionResponseFormGroup() {
		return new FormGroup<DeleteDeviceDefinitionResponseFormProperties>({
		});

	}

	export interface DeleteFunctionDefinitionResponse {
	}
	export interface DeleteFunctionDefinitionResponseFormProperties {
	}
	export function CreateDeleteFunctionDefinitionResponseFormGroup() {
		return new FormGroup<DeleteFunctionDefinitionResponseFormProperties>({
		});

	}

	export interface DeleteGroupResponse {
	}
	export interface DeleteGroupResponseFormProperties {
	}
	export function CreateDeleteGroupResponseFormGroup() {
		return new FormGroup<DeleteGroupResponseFormProperties>({
		});

	}

	export interface DeleteLoggerDefinitionResponse {
	}
	export interface DeleteLoggerDefinitionResponseFormProperties {
	}
	export function CreateDeleteLoggerDefinitionResponseFormGroup() {
		return new FormGroup<DeleteLoggerDefinitionResponseFormProperties>({
		});

	}

	export interface DeleteResourceDefinitionResponse {
	}
	export interface DeleteResourceDefinitionResponseFormProperties {
	}
	export function CreateDeleteResourceDefinitionResponseFormGroup() {
		return new FormGroup<DeleteResourceDefinitionResponseFormProperties>({
		});

	}

	export interface DeleteSubscriptionDefinitionResponse {
	}
	export interface DeleteSubscriptionDefinitionResponseFormProperties {
	}
	export function CreateDeleteSubscriptionDefinitionResponseFormGroup() {
		return new FormGroup<DeleteSubscriptionDefinitionResponseFormProperties>({
		});

	}

	export interface DisassociateRoleFromGroupResponse {
		DisassociatedAt?: string;
	}
	export interface DisassociateRoleFromGroupResponseFormProperties {
		DisassociatedAt: FormControl<string | null | undefined>,
	}
	export function CreateDisassociateRoleFromGroupResponseFormGroup() {
		return new FormGroup<DisassociateRoleFromGroupResponseFormProperties>({
			DisassociatedAt: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DisassociateServiceRoleFromAccountResponse {
		DisassociatedAt?: string;
	}
	export interface DisassociateServiceRoleFromAccountResponseFormProperties {
		DisassociatedAt: FormControl<string | null | undefined>,
	}
	export function CreateDisassociateServiceRoleFromAccountResponseFormGroup() {
		return new FormGroup<DisassociateServiceRoleFromAccountResponseFormProperties>({
			DisassociatedAt: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetAssociatedRoleResponse {
		AssociatedAt?: string;
		RoleArn?: string;
	}
	export interface GetAssociatedRoleResponseFormProperties {
		AssociatedAt: FormControl<string | null | undefined>,
		RoleArn: FormControl<string | null | undefined>,
	}
	export function CreateGetAssociatedRoleResponseFormGroup() {
		return new FormGroup<GetAssociatedRoleResponseFormProperties>({
			AssociatedAt: new FormControl<string | null | undefined>(undefined),
			RoleArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetBulkDeploymentStatusResponse {
		BulkDeploymentMetrics?: BulkDeploymentMetrics;
		BulkDeploymentStatus?: BulkDeploymentStatus;
		CreatedAt?: string;
		ErrorDetails?: Array<ErrorDetail>;
		ErrorMessage?: string;
		tags?: Tags;
	}
	export interface GetBulkDeploymentStatusResponseFormProperties {
		BulkDeploymentStatus: FormControl<BulkDeploymentStatus | null | undefined>,
		CreatedAt: FormControl<string | null | undefined>,
		ErrorMessage: FormControl<string | null | undefined>,
	}
	export function CreateGetBulkDeploymentStatusResponseFormGroup() {
		return new FormGroup<GetBulkDeploymentStatusResponseFormProperties>({
			BulkDeploymentStatus: new FormControl<BulkDeploymentStatus | null | undefined>(undefined),
			CreatedAt: new FormControl<string | null | undefined>(undefined),
			ErrorMessage: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Relevant metrics on input records processed during bulk deployment. */
	export interface BulkDeploymentMetrics {
		InvalidInputRecords?: number | null;
		RecordsProcessed?: number | null;
		RetryAttempts?: number | null;
	}

	/** Relevant metrics on input records processed during bulk deployment. */
	export interface BulkDeploymentMetricsFormProperties {
		InvalidInputRecords: FormControl<number | null | undefined>,
		RecordsProcessed: FormControl<number | null | undefined>,
		RetryAttempts: FormControl<number | null | undefined>,
	}
	export function CreateBulkDeploymentMetricsFormGroup() {
		return new FormGroup<BulkDeploymentMetricsFormProperties>({
			InvalidInputRecords: new FormControl<number | null | undefined>(undefined),
			RecordsProcessed: new FormControl<number | null | undefined>(undefined),
			RetryAttempts: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The current status of the bulk deployment. */
	export enum BulkDeploymentStatus { Initializing = 'Initializing', Running = 'Running', Completed = 'Completed', Stopping = 'Stopping', Stopped = 'Stopped', Failed = 'Failed' }


	/** Details about the error. */
	export interface ErrorDetail {
		DetailedErrorCode?: string;
		DetailedErrorMessage?: string;
	}

	/** Details about the error. */
	export interface ErrorDetailFormProperties {
		DetailedErrorCode: FormControl<string | null | undefined>,
		DetailedErrorMessage: FormControl<string | null | undefined>,
	}
	export function CreateErrorDetailFormGroup() {
		return new FormGroup<ErrorDetailFormProperties>({
			DetailedErrorCode: new FormControl<string | null | undefined>(undefined),
			DetailedErrorMessage: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The key-value pair for the resource tag. */
	export interface Tags {
	}

	/** The key-value pair for the resource tag. */
	export interface TagsFormProperties {
	}
	export function CreateTagsFormGroup() {
		return new FormGroup<TagsFormProperties>({
		});

	}

	export interface GetConnectivityInfoResponse {
		ConnectivityInfo?: Array<ConnectivityInfo>;
		Message?: string;
	}
	export interface GetConnectivityInfoResponseFormProperties {
		Message: FormControl<string | null | undefined>,
	}
	export function CreateGetConnectivityInfoResponseFormGroup() {
		return new FormGroup<GetConnectivityInfoResponseFormProperties>({
			Message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about a Greengrass core's connectivity. */
	export interface ConnectivityInfo {
		HostAddress?: string;
		Id?: string;
		Metadata?: string;
		PortNumber?: number | null;
	}

	/** Information about a Greengrass core's connectivity. */
	export interface ConnectivityInfoFormProperties {
		HostAddress: FormControl<string | null | undefined>,
		Id: FormControl<string | null | undefined>,
		Metadata: FormControl<string | null | undefined>,
		PortNumber: FormControl<number | null | undefined>,
	}
	export function CreateConnectivityInfoFormGroup() {
		return new FormGroup<ConnectivityInfoFormProperties>({
			HostAddress: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			Metadata: new FormControl<string | null | undefined>(undefined),
			PortNumber: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetConnectorDefinitionResponse {
		Arn?: string;
		CreationTimestamp?: string;
		Id?: string;
		LastUpdatedTimestamp?: string;
		LatestVersion?: string;
		LatestVersionArn?: string;
		Name?: string;
		tags?: Tags;
	}
	export interface GetConnectorDefinitionResponseFormProperties {
		Arn: FormControl<string | null | undefined>,
		CreationTimestamp: FormControl<string | null | undefined>,
		Id: FormControl<string | null | undefined>,
		LastUpdatedTimestamp: FormControl<string | null | undefined>,
		LatestVersion: FormControl<string | null | undefined>,
		LatestVersionArn: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
	}
	export function CreateGetConnectorDefinitionResponseFormGroup() {
		return new FormGroup<GetConnectorDefinitionResponseFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			CreationTimestamp: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			LastUpdatedTimestamp: new FormControl<string | null | undefined>(undefined),
			LatestVersion: new FormControl<string | null | undefined>(undefined),
			LatestVersionArn: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetConnectorDefinitionVersionResponse {
		Arn?: string;
		CreationTimestamp?: string;
		Definition?: ConnectorDefinitionVersion;
		Id?: string;
		NextToken?: string;
		Version?: string;
	}
	export interface GetConnectorDefinitionVersionResponseFormProperties {
		Arn: FormControl<string | null | undefined>,
		CreationTimestamp: FormControl<string | null | undefined>,
		Id: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		Version: FormControl<string | null | undefined>,
	}
	export function CreateGetConnectorDefinitionVersionResponseFormGroup() {
		return new FormGroup<GetConnectorDefinitionVersionResponseFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			CreationTimestamp: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			Version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about the connector definition version, which is a container for connectors. */
	export interface ConnectorDefinitionVersion {
		Connectors?: Array<Connector>;
	}

	/** Information about the connector definition version, which is a container for connectors. */
	export interface ConnectorDefinitionVersionFormProperties {
	}
	export function CreateConnectorDefinitionVersionFormGroup() {
		return new FormGroup<ConnectorDefinitionVersionFormProperties>({
		});

	}

	export interface GetCoreDefinitionResponse {
		Arn?: string;
		CreationTimestamp?: string;
		Id?: string;
		LastUpdatedTimestamp?: string;
		LatestVersion?: string;
		LatestVersionArn?: string;
		Name?: string;
		tags?: Tags;
	}
	export interface GetCoreDefinitionResponseFormProperties {
		Arn: FormControl<string | null | undefined>,
		CreationTimestamp: FormControl<string | null | undefined>,
		Id: FormControl<string | null | undefined>,
		LastUpdatedTimestamp: FormControl<string | null | undefined>,
		LatestVersion: FormControl<string | null | undefined>,
		LatestVersionArn: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
	}
	export function CreateGetCoreDefinitionResponseFormGroup() {
		return new FormGroup<GetCoreDefinitionResponseFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			CreationTimestamp: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			LastUpdatedTimestamp: new FormControl<string | null | undefined>(undefined),
			LatestVersion: new FormControl<string | null | undefined>(undefined),
			LatestVersionArn: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetCoreDefinitionVersionResponse {
		Arn?: string;
		CreationTimestamp?: string;
		Definition?: CoreDefinitionVersion;
		Id?: string;
		NextToken?: string;
		Version?: string;
	}
	export interface GetCoreDefinitionVersionResponseFormProperties {
		Arn: FormControl<string | null | undefined>,
		CreationTimestamp: FormControl<string | null | undefined>,
		Id: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		Version: FormControl<string | null | undefined>,
	}
	export function CreateGetCoreDefinitionVersionResponseFormGroup() {
		return new FormGroup<GetCoreDefinitionVersionResponseFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			CreationTimestamp: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			Version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about a core definition version. */
	export interface CoreDefinitionVersion {
		Cores?: Array<Core>;
	}

	/** Information about a core definition version. */
	export interface CoreDefinitionVersionFormProperties {
	}
	export function CreateCoreDefinitionVersionFormGroup() {
		return new FormGroup<CoreDefinitionVersionFormProperties>({
		});

	}

	export interface GetDeploymentStatusResponse {
		DeploymentStatus?: string;
		DeploymentType?: DeploymentType;
		ErrorDetails?: Array<ErrorDetail>;
		ErrorMessage?: string;
		UpdatedAt?: string;
	}
	export interface GetDeploymentStatusResponseFormProperties {
		DeploymentStatus: FormControl<string | null | undefined>,
		DeploymentType: FormControl<DeploymentType | null | undefined>,
		ErrorMessage: FormControl<string | null | undefined>,
		UpdatedAt: FormControl<string | null | undefined>,
	}
	export function CreateGetDeploymentStatusResponseFormGroup() {
		return new FormGroup<GetDeploymentStatusResponseFormProperties>({
			DeploymentStatus: new FormControl<string | null | undefined>(undefined),
			DeploymentType: new FormControl<DeploymentType | null | undefined>(undefined),
			ErrorMessage: new FormControl<string | null | undefined>(undefined),
			UpdatedAt: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The type of deployment. When used for ''CreateDeployment'', only ''NewDeployment'' and ''Redeployment'' are valid. */
	export enum DeploymentType { NewDeployment = 'NewDeployment', Redeployment = 'Redeployment', ResetDeployment = 'ResetDeployment', ForceResetDeployment = 'ForceResetDeployment' }

	export interface GetDeviceDefinitionResponse {
		Arn?: string;
		CreationTimestamp?: string;
		Id?: string;
		LastUpdatedTimestamp?: string;
		LatestVersion?: string;
		LatestVersionArn?: string;
		Name?: string;
		tags?: Tags;
	}
	export interface GetDeviceDefinitionResponseFormProperties {
		Arn: FormControl<string | null | undefined>,
		CreationTimestamp: FormControl<string | null | undefined>,
		Id: FormControl<string | null | undefined>,
		LastUpdatedTimestamp: FormControl<string | null | undefined>,
		LatestVersion: FormControl<string | null | undefined>,
		LatestVersionArn: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
	}
	export function CreateGetDeviceDefinitionResponseFormGroup() {
		return new FormGroup<GetDeviceDefinitionResponseFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			CreationTimestamp: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			LastUpdatedTimestamp: new FormControl<string | null | undefined>(undefined),
			LatestVersion: new FormControl<string | null | undefined>(undefined),
			LatestVersionArn: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetDeviceDefinitionVersionResponse {
		Arn?: string;
		CreationTimestamp?: string;
		Definition?: DeviceDefinitionVersion;
		Id?: string;
		NextToken?: string;
		Version?: string;
	}
	export interface GetDeviceDefinitionVersionResponseFormProperties {
		Arn: FormControl<string | null | undefined>,
		CreationTimestamp: FormControl<string | null | undefined>,
		Id: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		Version: FormControl<string | null | undefined>,
	}
	export function CreateGetDeviceDefinitionVersionResponseFormGroup() {
		return new FormGroup<GetDeviceDefinitionVersionResponseFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			CreationTimestamp: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			Version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about a device definition version. */
	export interface DeviceDefinitionVersion {
		Devices?: Array<Device>;
	}

	/** Information about a device definition version. */
	export interface DeviceDefinitionVersionFormProperties {
	}
	export function CreateDeviceDefinitionVersionFormGroup() {
		return new FormGroup<DeviceDefinitionVersionFormProperties>({
		});

	}

	export interface GetFunctionDefinitionResponse {
		Arn?: string;
		CreationTimestamp?: string;
		Id?: string;
		LastUpdatedTimestamp?: string;
		LatestVersion?: string;
		LatestVersionArn?: string;
		Name?: string;
		tags?: Tags;
	}
	export interface GetFunctionDefinitionResponseFormProperties {
		Arn: FormControl<string | null | undefined>,
		CreationTimestamp: FormControl<string | null | undefined>,
		Id: FormControl<string | null | undefined>,
		LastUpdatedTimestamp: FormControl<string | null | undefined>,
		LatestVersion: FormControl<string | null | undefined>,
		LatestVersionArn: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
	}
	export function CreateGetFunctionDefinitionResponseFormGroup() {
		return new FormGroup<GetFunctionDefinitionResponseFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			CreationTimestamp: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			LastUpdatedTimestamp: new FormControl<string | null | undefined>(undefined),
			LatestVersion: new FormControl<string | null | undefined>(undefined),
			LatestVersionArn: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetFunctionDefinitionVersionResponse {
		Arn?: string;
		CreationTimestamp?: string;
		Definition?: FunctionDefinitionVersion;
		Id?: string;
		NextToken?: string;
		Version?: string;
	}
	export interface GetFunctionDefinitionVersionResponseFormProperties {
		Arn: FormControl<string | null | undefined>,
		CreationTimestamp: FormControl<string | null | undefined>,
		Id: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		Version: FormControl<string | null | undefined>,
	}
	export function CreateGetFunctionDefinitionVersionResponseFormGroup() {
		return new FormGroup<GetFunctionDefinitionVersionResponseFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			CreationTimestamp: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			Version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about a function definition version. */
	export interface FunctionDefinitionVersion {
		DefaultConfig?: FunctionDefaultConfig;
		Functions?: Array<Function>;
	}

	/** Information about a function definition version. */
	export interface FunctionDefinitionVersionFormProperties {
	}
	export function CreateFunctionDefinitionVersionFormGroup() {
		return new FormGroup<FunctionDefinitionVersionFormProperties>({
		});

	}

	export interface GetGroupResponse {
		Arn?: string;
		CreationTimestamp?: string;
		Id?: string;
		LastUpdatedTimestamp?: string;
		LatestVersion?: string;
		LatestVersionArn?: string;
		Name?: string;
		tags?: Tags;
	}
	export interface GetGroupResponseFormProperties {
		Arn: FormControl<string | null | undefined>,
		CreationTimestamp: FormControl<string | null | undefined>,
		Id: FormControl<string | null | undefined>,
		LastUpdatedTimestamp: FormControl<string | null | undefined>,
		LatestVersion: FormControl<string | null | undefined>,
		LatestVersionArn: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
	}
	export function CreateGetGroupResponseFormGroup() {
		return new FormGroup<GetGroupResponseFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			CreationTimestamp: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			LastUpdatedTimestamp: new FormControl<string | null | undefined>(undefined),
			LatestVersion: new FormControl<string | null | undefined>(undefined),
			LatestVersionArn: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetGroupCertificateAuthorityResponse {
		GroupCertificateAuthorityArn?: string;
		GroupCertificateAuthorityId?: string;
		PemEncodedCertificate?: string;
	}
	export interface GetGroupCertificateAuthorityResponseFormProperties {
		GroupCertificateAuthorityArn: FormControl<string | null | undefined>,
		GroupCertificateAuthorityId: FormControl<string | null | undefined>,
		PemEncodedCertificate: FormControl<string | null | undefined>,
	}
	export function CreateGetGroupCertificateAuthorityResponseFormGroup() {
		return new FormGroup<GetGroupCertificateAuthorityResponseFormProperties>({
			GroupCertificateAuthorityArn: new FormControl<string | null | undefined>(undefined),
			GroupCertificateAuthorityId: new FormControl<string | null | undefined>(undefined),
			PemEncodedCertificate: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetGroupCertificateConfigurationResponse {
		CertificateAuthorityExpiryInMilliseconds?: string;
		CertificateExpiryInMilliseconds?: string;
		GroupId?: string;
	}
	export interface GetGroupCertificateConfigurationResponseFormProperties {
		CertificateAuthorityExpiryInMilliseconds: FormControl<string | null | undefined>,
		CertificateExpiryInMilliseconds: FormControl<string | null | undefined>,
		GroupId: FormControl<string | null | undefined>,
	}
	export function CreateGetGroupCertificateConfigurationResponseFormGroup() {
		return new FormGroup<GetGroupCertificateConfigurationResponseFormProperties>({
			CertificateAuthorityExpiryInMilliseconds: new FormControl<string | null | undefined>(undefined),
			CertificateExpiryInMilliseconds: new FormControl<string | null | undefined>(undefined),
			GroupId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetGroupVersionResponse {
		Arn?: string;
		CreationTimestamp?: string;
		Definition?: GroupVersion;
		Id?: string;
		Version?: string;
	}
	export interface GetGroupVersionResponseFormProperties {
		Arn: FormControl<string | null | undefined>,
		CreationTimestamp: FormControl<string | null | undefined>,
		Id: FormControl<string | null | undefined>,
		Version: FormControl<string | null | undefined>,
	}
	export function CreateGetGroupVersionResponseFormGroup() {
		return new FormGroup<GetGroupVersionResponseFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			CreationTimestamp: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			Version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about a group version. */
	export interface GroupVersion {
		ConnectorDefinitionVersionArn?: string;
		CoreDefinitionVersionArn?: string;
		DeviceDefinitionVersionArn?: string;
		FunctionDefinitionVersionArn?: string;
		LoggerDefinitionVersionArn?: string;
		ResourceDefinitionVersionArn?: string;
		SubscriptionDefinitionVersionArn?: string;
	}

	/** Information about a group version. */
	export interface GroupVersionFormProperties {
		ConnectorDefinitionVersionArn: FormControl<string | null | undefined>,
		CoreDefinitionVersionArn: FormControl<string | null | undefined>,
		DeviceDefinitionVersionArn: FormControl<string | null | undefined>,
		FunctionDefinitionVersionArn: FormControl<string | null | undefined>,
		LoggerDefinitionVersionArn: FormControl<string | null | undefined>,
		ResourceDefinitionVersionArn: FormControl<string | null | undefined>,
		SubscriptionDefinitionVersionArn: FormControl<string | null | undefined>,
	}
	export function CreateGroupVersionFormGroup() {
		return new FormGroup<GroupVersionFormProperties>({
			ConnectorDefinitionVersionArn: new FormControl<string | null | undefined>(undefined),
			CoreDefinitionVersionArn: new FormControl<string | null | undefined>(undefined),
			DeviceDefinitionVersionArn: new FormControl<string | null | undefined>(undefined),
			FunctionDefinitionVersionArn: new FormControl<string | null | undefined>(undefined),
			LoggerDefinitionVersionArn: new FormControl<string | null | undefined>(undefined),
			ResourceDefinitionVersionArn: new FormControl<string | null | undefined>(undefined),
			SubscriptionDefinitionVersionArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetLoggerDefinitionResponse {
		Arn?: string;
		CreationTimestamp?: string;
		Id?: string;
		LastUpdatedTimestamp?: string;
		LatestVersion?: string;
		LatestVersionArn?: string;
		Name?: string;
		tags?: Tags;
	}
	export interface GetLoggerDefinitionResponseFormProperties {
		Arn: FormControl<string | null | undefined>,
		CreationTimestamp: FormControl<string | null | undefined>,
		Id: FormControl<string | null | undefined>,
		LastUpdatedTimestamp: FormControl<string | null | undefined>,
		LatestVersion: FormControl<string | null | undefined>,
		LatestVersionArn: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
	}
	export function CreateGetLoggerDefinitionResponseFormGroup() {
		return new FormGroup<GetLoggerDefinitionResponseFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			CreationTimestamp: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			LastUpdatedTimestamp: new FormControl<string | null | undefined>(undefined),
			LatestVersion: new FormControl<string | null | undefined>(undefined),
			LatestVersionArn: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetLoggerDefinitionVersionResponse {
		Arn?: string;
		CreationTimestamp?: string;
		Definition?: LoggerDefinitionVersion;
		Id?: string;
		Version?: string;
	}
	export interface GetLoggerDefinitionVersionResponseFormProperties {
		Arn: FormControl<string | null | undefined>,
		CreationTimestamp: FormControl<string | null | undefined>,
		Id: FormControl<string | null | undefined>,
		Version: FormControl<string | null | undefined>,
	}
	export function CreateGetLoggerDefinitionVersionResponseFormGroup() {
		return new FormGroup<GetLoggerDefinitionVersionResponseFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			CreationTimestamp: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			Version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about a logger definition version. */
	export interface LoggerDefinitionVersion {
		Loggers?: Array<Logger>;
	}

	/** Information about a logger definition version. */
	export interface LoggerDefinitionVersionFormProperties {
	}
	export function CreateLoggerDefinitionVersionFormGroup() {
		return new FormGroup<LoggerDefinitionVersionFormProperties>({
		});

	}

	export interface GetResourceDefinitionResponse {
		Arn?: string;
		CreationTimestamp?: string;
		Id?: string;
		LastUpdatedTimestamp?: string;
		LatestVersion?: string;
		LatestVersionArn?: string;
		Name?: string;
		tags?: Tags;
	}
	export interface GetResourceDefinitionResponseFormProperties {
		Arn: FormControl<string | null | undefined>,
		CreationTimestamp: FormControl<string | null | undefined>,
		Id: FormControl<string | null | undefined>,
		LastUpdatedTimestamp: FormControl<string | null | undefined>,
		LatestVersion: FormControl<string | null | undefined>,
		LatestVersionArn: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
	}
	export function CreateGetResourceDefinitionResponseFormGroup() {
		return new FormGroup<GetResourceDefinitionResponseFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			CreationTimestamp: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			LastUpdatedTimestamp: new FormControl<string | null | undefined>(undefined),
			LatestVersion: new FormControl<string | null | undefined>(undefined),
			LatestVersionArn: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetResourceDefinitionVersionResponse {
		Arn?: string;
		CreationTimestamp?: string;
		Definition?: ResourceDefinitionVersion;
		Id?: string;
		Version?: string;
	}
	export interface GetResourceDefinitionVersionResponseFormProperties {
		Arn: FormControl<string | null | undefined>,
		CreationTimestamp: FormControl<string | null | undefined>,
		Id: FormControl<string | null | undefined>,
		Version: FormControl<string | null | undefined>,
	}
	export function CreateGetResourceDefinitionVersionResponseFormGroup() {
		return new FormGroup<GetResourceDefinitionVersionResponseFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			CreationTimestamp: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			Version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about a resource definition version. */
	export interface ResourceDefinitionVersion {
		Resources?: Array<Resource>;
	}

	/** Information about a resource definition version. */
	export interface ResourceDefinitionVersionFormProperties {
	}
	export function CreateResourceDefinitionVersionFormGroup() {
		return new FormGroup<ResourceDefinitionVersionFormProperties>({
		});

	}

	export interface GetServiceRoleForAccountResponse {
		AssociatedAt?: string;
		RoleArn?: string;
	}
	export interface GetServiceRoleForAccountResponseFormProperties {
		AssociatedAt: FormControl<string | null | undefined>,
		RoleArn: FormControl<string | null | undefined>,
	}
	export function CreateGetServiceRoleForAccountResponseFormGroup() {
		return new FormGroup<GetServiceRoleForAccountResponseFormProperties>({
			AssociatedAt: new FormControl<string | null | undefined>(undefined),
			RoleArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetSubscriptionDefinitionResponse {
		Arn?: string;
		CreationTimestamp?: string;
		Id?: string;
		LastUpdatedTimestamp?: string;
		LatestVersion?: string;
		LatestVersionArn?: string;
		Name?: string;
		tags?: Tags;
	}
	export interface GetSubscriptionDefinitionResponseFormProperties {
		Arn: FormControl<string | null | undefined>,
		CreationTimestamp: FormControl<string | null | undefined>,
		Id: FormControl<string | null | undefined>,
		LastUpdatedTimestamp: FormControl<string | null | undefined>,
		LatestVersion: FormControl<string | null | undefined>,
		LatestVersionArn: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
	}
	export function CreateGetSubscriptionDefinitionResponseFormGroup() {
		return new FormGroup<GetSubscriptionDefinitionResponseFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			CreationTimestamp: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			LastUpdatedTimestamp: new FormControl<string | null | undefined>(undefined),
			LatestVersion: new FormControl<string | null | undefined>(undefined),
			LatestVersionArn: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetSubscriptionDefinitionVersionResponse {
		Arn?: string;
		CreationTimestamp?: string;
		Definition?: SubscriptionDefinitionVersion;
		Id?: string;
		NextToken?: string;
		Version?: string;
	}
	export interface GetSubscriptionDefinitionVersionResponseFormProperties {
		Arn: FormControl<string | null | undefined>,
		CreationTimestamp: FormControl<string | null | undefined>,
		Id: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		Version: FormControl<string | null | undefined>,
	}
	export function CreateGetSubscriptionDefinitionVersionResponseFormGroup() {
		return new FormGroup<GetSubscriptionDefinitionVersionResponseFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			CreationTimestamp: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			Version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about a subscription definition version. */
	export interface SubscriptionDefinitionVersion {
		Subscriptions?: Array<Subscription>;
	}

	/** Information about a subscription definition version. */
	export interface SubscriptionDefinitionVersionFormProperties {
	}
	export function CreateSubscriptionDefinitionVersionFormGroup() {
		return new FormGroup<SubscriptionDefinitionVersionFormProperties>({
		});

	}

	export interface GetThingRuntimeConfigurationResponse {
		RuntimeConfiguration?: RuntimeConfiguration;
	}
	export interface GetThingRuntimeConfigurationResponseFormProperties {
	}
	export function CreateGetThingRuntimeConfigurationResponseFormGroup() {
		return new FormGroup<GetThingRuntimeConfigurationResponseFormProperties>({
		});

	}


	/** Runtime configuration for a thing. */
	export interface RuntimeConfiguration {
		TelemetryConfiguration?: TelemetryConfiguration;
	}

	/** Runtime configuration for a thing. */
	export interface RuntimeConfigurationFormProperties {
	}
	export function CreateRuntimeConfigurationFormGroup() {
		return new FormGroup<RuntimeConfigurationFormProperties>({
		});

	}


	/** Configuration settings for running telemetry. */
	export interface TelemetryConfiguration {
		ConfigurationSyncStatus?: ConfigurationSyncStatus;

		/** Required */
		Telemetry: Telemetry;
	}

	/** Configuration settings for running telemetry. */
	export interface TelemetryConfigurationFormProperties {
		ConfigurationSyncStatus: FormControl<ConfigurationSyncStatus | null | undefined>,

		/** Required */
		Telemetry: FormControl<Telemetry | null | undefined>,
	}
	export function CreateTelemetryConfigurationFormGroup() {
		return new FormGroup<TelemetryConfigurationFormProperties>({
			ConfigurationSyncStatus: new FormControl<ConfigurationSyncStatus | null | undefined>(undefined),
			Telemetry: new FormControl<Telemetry | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ConfigurationSyncStatus { InSync = 'InSync', OutOfSync = 'OutOfSync' }

	export enum Telemetry { On = 'On', Off = 'Off' }

	export interface ListBulkDeploymentDetailedReportsResponse {
		Deployments?: Array<BulkDeploymentResult>;
		NextToken?: string;
	}
	export interface ListBulkDeploymentDetailedReportsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListBulkDeploymentDetailedReportsResponseFormGroup() {
		return new FormGroup<ListBulkDeploymentDetailedReportsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about an individual group deployment in a bulk deployment operation. */
	export interface BulkDeploymentResult {
		CreatedAt?: string;
		DeploymentArn?: string;
		DeploymentId?: string;
		DeploymentStatus?: string;
		DeploymentType?: DeploymentType;
		ErrorDetails?: Array<ErrorDetail>;
		ErrorMessage?: string;
		GroupArn?: string;
	}

	/** Information about an individual group deployment in a bulk deployment operation. */
	export interface BulkDeploymentResultFormProperties {
		CreatedAt: FormControl<string | null | undefined>,
		DeploymentArn: FormControl<string | null | undefined>,
		DeploymentId: FormControl<string | null | undefined>,
		DeploymentStatus: FormControl<string | null | undefined>,
		DeploymentType: FormControl<DeploymentType | null | undefined>,
		ErrorMessage: FormControl<string | null | undefined>,
		GroupArn: FormControl<string | null | undefined>,
	}
	export function CreateBulkDeploymentResultFormGroup() {
		return new FormGroup<BulkDeploymentResultFormProperties>({
			CreatedAt: new FormControl<string | null | undefined>(undefined),
			DeploymentArn: new FormControl<string | null | undefined>(undefined),
			DeploymentId: new FormControl<string | null | undefined>(undefined),
			DeploymentStatus: new FormControl<string | null | undefined>(undefined),
			DeploymentType: new FormControl<DeploymentType | null | undefined>(undefined),
			ErrorMessage: new FormControl<string | null | undefined>(undefined),
			GroupArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListBulkDeploymentsResponse {
		BulkDeployments?: Array<BulkDeployment>;
		NextToken?: string;
	}
	export interface ListBulkDeploymentsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListBulkDeploymentsResponseFormGroup() {
		return new FormGroup<ListBulkDeploymentsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about a bulk deployment. You cannot start a new bulk deployment while another one is still running or in a non-terminal state. */
	export interface BulkDeployment {
		BulkDeploymentArn?: string;
		BulkDeploymentId?: string;
		CreatedAt?: string;
	}

	/** Information about a bulk deployment. You cannot start a new bulk deployment while another one is still running or in a non-terminal state. */
	export interface BulkDeploymentFormProperties {
		BulkDeploymentArn: FormControl<string | null | undefined>,
		BulkDeploymentId: FormControl<string | null | undefined>,
		CreatedAt: FormControl<string | null | undefined>,
	}
	export function CreateBulkDeploymentFormGroup() {
		return new FormGroup<BulkDeploymentFormProperties>({
			BulkDeploymentArn: new FormControl<string | null | undefined>(undefined),
			BulkDeploymentId: new FormControl<string | null | undefined>(undefined),
			CreatedAt: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListConnectorDefinitionVersionsResponse {
		NextToken?: string;
		Versions?: Array<VersionInformation>;
	}
	export interface ListConnectorDefinitionVersionsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListConnectorDefinitionVersionsResponseFormGroup() {
		return new FormGroup<ListConnectorDefinitionVersionsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about a version. */
	export interface VersionInformation {
		Arn?: string;
		CreationTimestamp?: string;
		Id?: string;
		Version?: string;
	}

	/** Information about a version. */
	export interface VersionInformationFormProperties {
		Arn: FormControl<string | null | undefined>,
		CreationTimestamp: FormControl<string | null | undefined>,
		Id: FormControl<string | null | undefined>,
		Version: FormControl<string | null | undefined>,
	}
	export function CreateVersionInformationFormGroup() {
		return new FormGroup<VersionInformationFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			CreationTimestamp: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			Version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListConnectorDefinitionsResponse {
		Definitions?: Array<DefinitionInformation>;
		NextToken?: string;
	}
	export interface ListConnectorDefinitionsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListConnectorDefinitionsResponseFormGroup() {
		return new FormGroup<ListConnectorDefinitionsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about a definition. */
	export interface DefinitionInformation {
		Arn?: string;
		CreationTimestamp?: string;
		Id?: string;
		LastUpdatedTimestamp?: string;
		LatestVersion?: string;
		LatestVersionArn?: string;
		Name?: string;
		Tags?: Tags;
	}

	/** Information about a definition. */
	export interface DefinitionInformationFormProperties {
		Arn: FormControl<string | null | undefined>,
		CreationTimestamp: FormControl<string | null | undefined>,
		Id: FormControl<string | null | undefined>,
		LastUpdatedTimestamp: FormControl<string | null | undefined>,
		LatestVersion: FormControl<string | null | undefined>,
		LatestVersionArn: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
	}
	export function CreateDefinitionInformationFormGroup() {
		return new FormGroup<DefinitionInformationFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			CreationTimestamp: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			LastUpdatedTimestamp: new FormControl<string | null | undefined>(undefined),
			LatestVersion: new FormControl<string | null | undefined>(undefined),
			LatestVersionArn: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListCoreDefinitionVersionsResponse {
		NextToken?: string;
		Versions?: Array<VersionInformation>;
	}
	export interface ListCoreDefinitionVersionsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListCoreDefinitionVersionsResponseFormGroup() {
		return new FormGroup<ListCoreDefinitionVersionsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListCoreDefinitionsResponse {
		Definitions?: Array<DefinitionInformation>;
		NextToken?: string;
	}
	export interface ListCoreDefinitionsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListCoreDefinitionsResponseFormGroup() {
		return new FormGroup<ListCoreDefinitionsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListDeploymentsResponse {
		Deployments?: Array<Deployment>;
		NextToken?: string;
	}
	export interface ListDeploymentsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListDeploymentsResponseFormGroup() {
		return new FormGroup<ListDeploymentsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about a deployment. */
	export interface Deployment {
		CreatedAt?: string;
		DeploymentArn?: string;
		DeploymentId?: string;
		DeploymentType?: DeploymentType;
		GroupArn?: string;
	}

	/** Information about a deployment. */
	export interface DeploymentFormProperties {
		CreatedAt: FormControl<string | null | undefined>,
		DeploymentArn: FormControl<string | null | undefined>,
		DeploymentId: FormControl<string | null | undefined>,
		DeploymentType: FormControl<DeploymentType | null | undefined>,
		GroupArn: FormControl<string | null | undefined>,
	}
	export function CreateDeploymentFormGroup() {
		return new FormGroup<DeploymentFormProperties>({
			CreatedAt: new FormControl<string | null | undefined>(undefined),
			DeploymentArn: new FormControl<string | null | undefined>(undefined),
			DeploymentId: new FormControl<string | null | undefined>(undefined),
			DeploymentType: new FormControl<DeploymentType | null | undefined>(undefined),
			GroupArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListDeviceDefinitionVersionsResponse {
		NextToken?: string;
		Versions?: Array<VersionInformation>;
	}
	export interface ListDeviceDefinitionVersionsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListDeviceDefinitionVersionsResponseFormGroup() {
		return new FormGroup<ListDeviceDefinitionVersionsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListDeviceDefinitionsResponse {
		Definitions?: Array<DefinitionInformation>;
		NextToken?: string;
	}
	export interface ListDeviceDefinitionsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListDeviceDefinitionsResponseFormGroup() {
		return new FormGroup<ListDeviceDefinitionsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListFunctionDefinitionVersionsResponse {
		NextToken?: string;
		Versions?: Array<VersionInformation>;
	}
	export interface ListFunctionDefinitionVersionsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListFunctionDefinitionVersionsResponseFormGroup() {
		return new FormGroup<ListFunctionDefinitionVersionsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListFunctionDefinitionsResponse {
		Definitions?: Array<DefinitionInformation>;
		NextToken?: string;
	}
	export interface ListFunctionDefinitionsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListFunctionDefinitionsResponseFormGroup() {
		return new FormGroup<ListFunctionDefinitionsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListGroupCertificateAuthoritiesResponse {
		GroupCertificateAuthorities?: Array<GroupCertificateAuthorityProperties>;
	}
	export interface ListGroupCertificateAuthoritiesResponseFormProperties {
	}
	export function CreateListGroupCertificateAuthoritiesResponseFormGroup() {
		return new FormGroup<ListGroupCertificateAuthoritiesResponseFormProperties>({
		});

	}


	/** Information about a certificate authority for a group. */
	export interface GroupCertificateAuthorityProperties {
		GroupCertificateAuthorityArn?: string;
		GroupCertificateAuthorityId?: string;
	}

	/** Information about a certificate authority for a group. */
	export interface GroupCertificateAuthorityPropertiesFormProperties {
		GroupCertificateAuthorityArn: FormControl<string | null | undefined>,
		GroupCertificateAuthorityId: FormControl<string | null | undefined>,
	}
	export function CreateGroupCertificateAuthorityPropertiesFormGroup() {
		return new FormGroup<GroupCertificateAuthorityPropertiesFormProperties>({
			GroupCertificateAuthorityArn: new FormControl<string | null | undefined>(undefined),
			GroupCertificateAuthorityId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListGroupVersionsResponse {
		NextToken?: string;
		Versions?: Array<VersionInformation>;
	}
	export interface ListGroupVersionsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListGroupVersionsResponseFormGroup() {
		return new FormGroup<ListGroupVersionsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListGroupsResponse {
		Groups?: Array<GroupInformation>;
		NextToken?: string;
	}
	export interface ListGroupsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListGroupsResponseFormGroup() {
		return new FormGroup<ListGroupsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about a group. */
	export interface GroupInformation {
		Arn?: string;
		CreationTimestamp?: string;
		Id?: string;
		LastUpdatedTimestamp?: string;
		LatestVersion?: string;
		LatestVersionArn?: string;
		Name?: string;
	}

	/** Information about a group. */
	export interface GroupInformationFormProperties {
		Arn: FormControl<string | null | undefined>,
		CreationTimestamp: FormControl<string | null | undefined>,
		Id: FormControl<string | null | undefined>,
		LastUpdatedTimestamp: FormControl<string | null | undefined>,
		LatestVersion: FormControl<string | null | undefined>,
		LatestVersionArn: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
	}
	export function CreateGroupInformationFormGroup() {
		return new FormGroup<GroupInformationFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			CreationTimestamp: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			LastUpdatedTimestamp: new FormControl<string | null | undefined>(undefined),
			LatestVersion: new FormControl<string | null | undefined>(undefined),
			LatestVersionArn: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListLoggerDefinitionVersionsResponse {
		NextToken?: string;
		Versions?: Array<VersionInformation>;
	}
	export interface ListLoggerDefinitionVersionsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListLoggerDefinitionVersionsResponseFormGroup() {
		return new FormGroup<ListLoggerDefinitionVersionsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListLoggerDefinitionsResponse {
		Definitions?: Array<DefinitionInformation>;
		NextToken?: string;
	}
	export interface ListLoggerDefinitionsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListLoggerDefinitionsResponseFormGroup() {
		return new FormGroup<ListLoggerDefinitionsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListResourceDefinitionVersionsResponse {
		NextToken?: string;
		Versions?: Array<VersionInformation>;
	}
	export interface ListResourceDefinitionVersionsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListResourceDefinitionVersionsResponseFormGroup() {
		return new FormGroup<ListResourceDefinitionVersionsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListResourceDefinitionsResponse {
		Definitions?: Array<DefinitionInformation>;
		NextToken?: string;
	}
	export interface ListResourceDefinitionsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListResourceDefinitionsResponseFormGroup() {
		return new FormGroup<ListResourceDefinitionsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListSubscriptionDefinitionVersionsResponse {
		NextToken?: string;
		Versions?: Array<VersionInformation>;
	}
	export interface ListSubscriptionDefinitionVersionsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListSubscriptionDefinitionVersionsResponseFormGroup() {
		return new FormGroup<ListSubscriptionDefinitionVersionsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListSubscriptionDefinitionsResponse {
		Definitions?: Array<DefinitionInformation>;
		NextToken?: string;
	}
	export interface ListSubscriptionDefinitionsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListSubscriptionDefinitionsResponseFormGroup() {
		return new FormGroup<ListSubscriptionDefinitionsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListTagsForResourceResponse {

		/** The key-value pair for the resource tag. */
		tags?: Tags;
	}
	export interface ListTagsForResourceResponseFormProperties {
	}
	export function CreateListTagsForResourceResponseFormGroup() {
		return new FormGroup<ListTagsForResourceResponseFormProperties>({
		});

	}

	export interface ResetDeploymentsResponse {
		DeploymentArn?: string;
		DeploymentId?: string;
	}
	export interface ResetDeploymentsResponseFormProperties {
		DeploymentArn: FormControl<string | null | undefined>,
		DeploymentId: FormControl<string | null | undefined>,
	}
	export function CreateResetDeploymentsResponseFormGroup() {
		return new FormGroup<ResetDeploymentsResponseFormProperties>({
			DeploymentArn: new FormControl<string | null | undefined>(undefined),
			DeploymentId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StartBulkDeploymentResponse {
		BulkDeploymentArn?: string;
		BulkDeploymentId?: string;
	}
	export interface StartBulkDeploymentResponseFormProperties {
		BulkDeploymentArn: FormControl<string | null | undefined>,
		BulkDeploymentId: FormControl<string | null | undefined>,
	}
	export function CreateStartBulkDeploymentResponseFormGroup() {
		return new FormGroup<StartBulkDeploymentResponseFormProperties>({
			BulkDeploymentArn: new FormControl<string | null | undefined>(undefined),
			BulkDeploymentId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StopBulkDeploymentResponse {
	}
	export interface StopBulkDeploymentResponseFormProperties {
	}
	export function CreateStopBulkDeploymentResponseFormGroup() {
		return new FormGroup<StopBulkDeploymentResponseFormProperties>({
		});

	}

	export interface UpdateConnectivityInfoResponse {
		Message?: string;
		Version?: string;
	}
	export interface UpdateConnectivityInfoResponseFormProperties {
		Message: FormControl<string | null | undefined>,
		Version: FormControl<string | null | undefined>,
	}
	export function CreateUpdateConnectivityInfoResponseFormGroup() {
		return new FormGroup<UpdateConnectivityInfoResponseFormProperties>({
			Message: new FormControl<string | null | undefined>(undefined),
			Version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateConnectorDefinitionResponse {
	}
	export interface UpdateConnectorDefinitionResponseFormProperties {
	}
	export function CreateUpdateConnectorDefinitionResponseFormGroup() {
		return new FormGroup<UpdateConnectorDefinitionResponseFormProperties>({
		});

	}

	export interface UpdateCoreDefinitionResponse {
	}
	export interface UpdateCoreDefinitionResponseFormProperties {
	}
	export function CreateUpdateCoreDefinitionResponseFormGroup() {
		return new FormGroup<UpdateCoreDefinitionResponseFormProperties>({
		});

	}

	export interface UpdateDeviceDefinitionResponse {
	}
	export interface UpdateDeviceDefinitionResponseFormProperties {
	}
	export function CreateUpdateDeviceDefinitionResponseFormGroup() {
		return new FormGroup<UpdateDeviceDefinitionResponseFormProperties>({
		});

	}

	export interface UpdateFunctionDefinitionResponse {
	}
	export interface UpdateFunctionDefinitionResponseFormProperties {
	}
	export function CreateUpdateFunctionDefinitionResponseFormGroup() {
		return new FormGroup<UpdateFunctionDefinitionResponseFormProperties>({
		});

	}

	export interface UpdateGroupResponse {
	}
	export interface UpdateGroupResponseFormProperties {
	}
	export function CreateUpdateGroupResponseFormGroup() {
		return new FormGroup<UpdateGroupResponseFormProperties>({
		});

	}

	export interface UpdateGroupCertificateConfigurationResponse {
		CertificateAuthorityExpiryInMilliseconds?: string;
		CertificateExpiryInMilliseconds?: string;
		GroupId?: string;
	}
	export interface UpdateGroupCertificateConfigurationResponseFormProperties {
		CertificateAuthorityExpiryInMilliseconds: FormControl<string | null | undefined>,
		CertificateExpiryInMilliseconds: FormControl<string | null | undefined>,
		GroupId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateGroupCertificateConfigurationResponseFormGroup() {
		return new FormGroup<UpdateGroupCertificateConfigurationResponseFormProperties>({
			CertificateAuthorityExpiryInMilliseconds: new FormControl<string | null | undefined>(undefined),
			CertificateExpiryInMilliseconds: new FormControl<string | null | undefined>(undefined),
			GroupId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateLoggerDefinitionResponse {
	}
	export interface UpdateLoggerDefinitionResponseFormProperties {
	}
	export function CreateUpdateLoggerDefinitionResponseFormGroup() {
		return new FormGroup<UpdateLoggerDefinitionResponseFormProperties>({
		});

	}

	export interface UpdateResourceDefinitionResponse {
	}
	export interface UpdateResourceDefinitionResponseFormProperties {
	}
	export function CreateUpdateResourceDefinitionResponseFormGroup() {
		return new FormGroup<UpdateResourceDefinitionResponseFormProperties>({
		});

	}

	export interface UpdateSubscriptionDefinitionResponse {
	}
	export interface UpdateSubscriptionDefinitionResponseFormProperties {
	}
	export function CreateUpdateSubscriptionDefinitionResponseFormGroup() {
		return new FormGroup<UpdateSubscriptionDefinitionResponseFormProperties>({
		});

	}

	export interface UpdateThingRuntimeConfigurationResponse {
	}
	export interface UpdateThingRuntimeConfigurationResponseFormProperties {
	}
	export function CreateUpdateThingRuntimeConfigurationResponseFormGroup() {
		return new FormGroup<UpdateThingRuntimeConfigurationResponseFormProperties>({
		});

	}

	export interface AssociateRoleToGroupRequest {

		/** Required */
		RoleArn: string;
	}
	export interface AssociateRoleToGroupRequestFormProperties {

		/** Required */
		RoleArn: FormControl<string | null | undefined>,
	}
	export function CreateAssociateRoleToGroupRequestFormGroup() {
		return new FormGroup<AssociateRoleToGroupRequestFormProperties>({
			RoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AssociateServiceRoleToAccountRequest {

		/** Required */
		RoleArn: string;
	}
	export interface AssociateServiceRoleToAccountRequestFormProperties {

		/** Required */
		RoleArn: FormControl<string | null | undefined>,
	}
	export function CreateAssociateServiceRoleToAccountRequestFormGroup() {
		return new FormGroup<AssociateServiceRoleToAccountRequestFormProperties>({
			RoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateConnectorDefinitionRequest {
		InitialVersion?: ConnectorDefinitionVersion;
		Name?: string;
		tags?: Tags;
	}
	export interface CreateConnectorDefinitionRequestFormProperties {
		Name: FormControl<string | null | undefined>,
	}
	export function CreateCreateConnectorDefinitionRequestFormGroup() {
		return new FormGroup<CreateConnectorDefinitionRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateConnectorDefinitionVersionRequest {
		Connectors?: Array<Connector>;
	}
	export interface CreateConnectorDefinitionVersionRequestFormProperties {
	}
	export function CreateCreateConnectorDefinitionVersionRequestFormGroup() {
		return new FormGroup<CreateConnectorDefinitionVersionRequestFormProperties>({
		});

	}


	/** Information needed to create a core definition. */
	export interface CreateCoreDefinitionRequest {
		InitialVersion?: CoreDefinitionVersion;
		Name?: string;
		tags?: Tags;
	}

	/** Information needed to create a core definition. */
	export interface CreateCoreDefinitionRequestFormProperties {
		Name: FormControl<string | null | undefined>,
	}
	export function CreateCreateCoreDefinitionRequestFormGroup() {
		return new FormGroup<CreateCoreDefinitionRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateCoreDefinitionVersionRequest {
		Cores?: Array<Core>;
	}
	export interface CreateCoreDefinitionVersionRequestFormProperties {
	}
	export function CreateCreateCoreDefinitionVersionRequestFormGroup() {
		return new FormGroup<CreateCoreDefinitionVersionRequestFormProperties>({
		});

	}

	export interface CreateDeploymentRequest {
		DeploymentId?: string;

		/** Required */
		DeploymentType: DeploymentType;
		GroupVersionId?: string;
	}
	export interface CreateDeploymentRequestFormProperties {
		DeploymentId: FormControl<string | null | undefined>,

		/** Required */
		DeploymentType: FormControl<DeploymentType | null | undefined>,
		GroupVersionId: FormControl<string | null | undefined>,
	}
	export function CreateCreateDeploymentRequestFormGroup() {
		return new FormGroup<CreateDeploymentRequestFormProperties>({
			DeploymentId: new FormControl<string | null | undefined>(undefined),
			DeploymentType: new FormControl<DeploymentType | null | undefined>(undefined, [Validators.required]),
			GroupVersionId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateDeviceDefinitionRequest {
		InitialVersion?: DeviceDefinitionVersion;
		Name?: string;
		tags?: Tags;
	}
	export interface CreateDeviceDefinitionRequestFormProperties {
		Name: FormControl<string | null | undefined>,
	}
	export function CreateCreateDeviceDefinitionRequestFormGroup() {
		return new FormGroup<CreateDeviceDefinitionRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateDeviceDefinitionVersionRequest {
		Devices?: Array<Device>;
	}
	export interface CreateDeviceDefinitionVersionRequestFormProperties {
	}
	export function CreateCreateDeviceDefinitionVersionRequestFormGroup() {
		return new FormGroup<CreateDeviceDefinitionVersionRequestFormProperties>({
		});

	}

	export interface CreateFunctionDefinitionRequest {
		InitialVersion?: FunctionDefinitionVersion;
		Name?: string;
		tags?: Tags;
	}
	export interface CreateFunctionDefinitionRequestFormProperties {
		Name: FormControl<string | null | undefined>,
	}
	export function CreateCreateFunctionDefinitionRequestFormGroup() {
		return new FormGroup<CreateFunctionDefinitionRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information needed to create a function definition version. */
	export interface CreateFunctionDefinitionVersionRequest {
		DefaultConfig?: FunctionDefaultConfig;
		Functions?: Array<Function>;
	}

	/** Information needed to create a function definition version. */
	export interface CreateFunctionDefinitionVersionRequestFormProperties {
	}
	export function CreateCreateFunctionDefinitionVersionRequestFormGroup() {
		return new FormGroup<CreateFunctionDefinitionVersionRequestFormProperties>({
		});

	}

	export interface CreateGroupCertificateAuthorityRequest {
	}
	export interface CreateGroupCertificateAuthorityRequestFormProperties {
	}
	export function CreateCreateGroupCertificateAuthorityRequestFormGroup() {
		return new FormGroup<CreateGroupCertificateAuthorityRequestFormProperties>({
		});

	}

	export interface CreateGroupRequest {
		InitialVersion?: GroupVersion;

		/** Required */
		Name: string;
		tags?: Tags;
	}
	export interface CreateGroupRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateCreateGroupRequestFormGroup() {
		return new FormGroup<CreateGroupRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateGroupVersionRequest {
		ConnectorDefinitionVersionArn?: string;
		CoreDefinitionVersionArn?: string;
		DeviceDefinitionVersionArn?: string;
		FunctionDefinitionVersionArn?: string;
		LoggerDefinitionVersionArn?: string;
		ResourceDefinitionVersionArn?: string;
		SubscriptionDefinitionVersionArn?: string;
	}
	export interface CreateGroupVersionRequestFormProperties {
		ConnectorDefinitionVersionArn: FormControl<string | null | undefined>,
		CoreDefinitionVersionArn: FormControl<string | null | undefined>,
		DeviceDefinitionVersionArn: FormControl<string | null | undefined>,
		FunctionDefinitionVersionArn: FormControl<string | null | undefined>,
		LoggerDefinitionVersionArn: FormControl<string | null | undefined>,
		ResourceDefinitionVersionArn: FormControl<string | null | undefined>,
		SubscriptionDefinitionVersionArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateGroupVersionRequestFormGroup() {
		return new FormGroup<CreateGroupVersionRequestFormProperties>({
			ConnectorDefinitionVersionArn: new FormControl<string | null | undefined>(undefined),
			CoreDefinitionVersionArn: new FormControl<string | null | undefined>(undefined),
			DeviceDefinitionVersionArn: new FormControl<string | null | undefined>(undefined),
			FunctionDefinitionVersionArn: new FormControl<string | null | undefined>(undefined),
			LoggerDefinitionVersionArn: new FormControl<string | null | undefined>(undefined),
			ResourceDefinitionVersionArn: new FormControl<string | null | undefined>(undefined),
			SubscriptionDefinitionVersionArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateLoggerDefinitionRequest {
		InitialVersion?: LoggerDefinitionVersion;
		Name?: string;
		tags?: Tags;
	}
	export interface CreateLoggerDefinitionRequestFormProperties {
		Name: FormControl<string | null | undefined>,
	}
	export function CreateCreateLoggerDefinitionRequestFormGroup() {
		return new FormGroup<CreateLoggerDefinitionRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateLoggerDefinitionVersionRequest {
		Loggers?: Array<Logger>;
	}
	export interface CreateLoggerDefinitionVersionRequestFormProperties {
	}
	export function CreateCreateLoggerDefinitionVersionRequestFormGroup() {
		return new FormGroup<CreateLoggerDefinitionVersionRequestFormProperties>({
		});

	}

	export interface CreateResourceDefinitionRequest {
		InitialVersion?: ResourceDefinitionVersion;
		Name?: string;
		tags?: Tags;
	}
	export interface CreateResourceDefinitionRequestFormProperties {
		Name: FormControl<string | null | undefined>,
	}
	export function CreateCreateResourceDefinitionRequestFormGroup() {
		return new FormGroup<CreateResourceDefinitionRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateResourceDefinitionVersionRequest {
		Resources?: Array<Resource>;
	}
	export interface CreateResourceDefinitionVersionRequestFormProperties {
	}
	export function CreateCreateResourceDefinitionVersionRequestFormGroup() {
		return new FormGroup<CreateResourceDefinitionVersionRequestFormProperties>({
		});

	}


	/** The piece of software on the Greengrass core that will be updated. */
	export enum SoftwareToUpdate { core = 'core', ota_agent = 'ota_agent' }


	/** The minimum level of log statements that should be logged by the OTA Agent during an update. */
	export enum UpdateAgentLogLevel { NONE = 'NONE', TRACE = 'TRACE', DEBUG = 'DEBUG', VERBOSE = 'VERBOSE', INFO = 'INFO', WARN = 'WARN', ERROR = 'ERROR', FATAL = 'FATAL' }


	/** The architecture of the cores which are the targets of an update. */
	export enum UpdateTargetsArchitecture { armv6l = 'armv6l', armv7l = 'armv7l', x86_64 = 'x86_64', aarch64 = 'aarch64' }


	/** The operating system of the cores which are the targets of an update. */
	export enum UpdateTargetsOperatingSystem { ubuntu = 'ubuntu', raspbian = 'raspbian', amazon_linux = 'amazon_linux', openwrt = 'openwrt' }

	export interface CreateSoftwareUpdateJobRequest {

		/**
		 * The IAM Role that Greengrass will use to create pre-signed URLs pointing towards the update artifact.
		 * Required
		 */
		S3UrlSignerRole: string;

		/**
		 * The piece of software on the Greengrass core that will be updated.
		 * Required
		 */
		SoftwareToUpdate: SoftwareToUpdate;

		/** The minimum level of log statements that should be logged by the OTA Agent during an update. */
		UpdateAgentLogLevel?: UpdateAgentLogLevel | null;

		/**
		 * The ARNs of the targets (IoT things or IoT thing groups) that this update will be applied to.
		 * Required
		 */
		UpdateTargets: Array<string>;

		/**
		 * The architecture of the cores which are the targets of an update.
		 * Required
		 */
		UpdateTargetsArchitecture: UpdateTargetsArchitecture;

		/**
		 * The operating system of the cores which are the targets of an update.
		 * Required
		 */
		UpdateTargetsOperatingSystem: UpdateTargetsOperatingSystem;
	}
	export interface CreateSoftwareUpdateJobRequestFormProperties {

		/**
		 * The IAM Role that Greengrass will use to create pre-signed URLs pointing towards the update artifact.
		 * Required
		 */
		S3UrlSignerRole: FormControl<string | null | undefined>,

		/**
		 * The piece of software on the Greengrass core that will be updated.
		 * Required
		 */
		SoftwareToUpdate: FormControl<SoftwareToUpdate | null | undefined>,

		/** The minimum level of log statements that should be logged by the OTA Agent during an update. */
		UpdateAgentLogLevel: FormControl<UpdateAgentLogLevel | null | undefined>,

		/**
		 * The architecture of the cores which are the targets of an update.
		 * Required
		 */
		UpdateTargetsArchitecture: FormControl<UpdateTargetsArchitecture | null | undefined>,

		/**
		 * The operating system of the cores which are the targets of an update.
		 * Required
		 */
		UpdateTargetsOperatingSystem: FormControl<UpdateTargetsOperatingSystem | null | undefined>,
	}
	export function CreateCreateSoftwareUpdateJobRequestFormGroup() {
		return new FormGroup<CreateSoftwareUpdateJobRequestFormProperties>({
			S3UrlSignerRole: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SoftwareToUpdate: new FormControl<SoftwareToUpdate | null | undefined>(undefined, [Validators.required]),
			UpdateAgentLogLevel: new FormControl<UpdateAgentLogLevel | null | undefined>(undefined),
			UpdateTargetsArchitecture: new FormControl<UpdateTargetsArchitecture | null | undefined>(undefined, [Validators.required]),
			UpdateTargetsOperatingSystem: new FormControl<UpdateTargetsOperatingSystem | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateSubscriptionDefinitionRequest {
		InitialVersion?: SubscriptionDefinitionVersion;
		Name?: string;
		tags?: Tags;
	}
	export interface CreateSubscriptionDefinitionRequestFormProperties {
		Name: FormControl<string | null | undefined>,
	}
	export function CreateCreateSubscriptionDefinitionRequestFormGroup() {
		return new FormGroup<CreateSubscriptionDefinitionRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateSubscriptionDefinitionVersionRequest {
		Subscriptions?: Array<Subscription>;
	}
	export interface CreateSubscriptionDefinitionVersionRequestFormProperties {
	}
	export function CreateCreateSubscriptionDefinitionVersionRequestFormGroup() {
		return new FormGroup<CreateSubscriptionDefinitionVersionRequestFormProperties>({
		});

	}

	export interface DeleteConnectorDefinitionRequest {
	}
	export interface DeleteConnectorDefinitionRequestFormProperties {
	}
	export function CreateDeleteConnectorDefinitionRequestFormGroup() {
		return new FormGroup<DeleteConnectorDefinitionRequestFormProperties>({
		});

	}

	export interface DeleteCoreDefinitionRequest {
	}
	export interface DeleteCoreDefinitionRequestFormProperties {
	}
	export function CreateDeleteCoreDefinitionRequestFormGroup() {
		return new FormGroup<DeleteCoreDefinitionRequestFormProperties>({
		});

	}

	export interface DeleteDeviceDefinitionRequest {
	}
	export interface DeleteDeviceDefinitionRequestFormProperties {
	}
	export function CreateDeleteDeviceDefinitionRequestFormGroup() {
		return new FormGroup<DeleteDeviceDefinitionRequestFormProperties>({
		});

	}

	export interface DeleteFunctionDefinitionRequest {
	}
	export interface DeleteFunctionDefinitionRequestFormProperties {
	}
	export function CreateDeleteFunctionDefinitionRequestFormGroup() {
		return new FormGroup<DeleteFunctionDefinitionRequestFormProperties>({
		});

	}

	export interface DeleteGroupRequest {
	}
	export interface DeleteGroupRequestFormProperties {
	}
	export function CreateDeleteGroupRequestFormGroup() {
		return new FormGroup<DeleteGroupRequestFormProperties>({
		});

	}

	export interface DeleteLoggerDefinitionRequest {
	}
	export interface DeleteLoggerDefinitionRequestFormProperties {
	}
	export function CreateDeleteLoggerDefinitionRequestFormGroup() {
		return new FormGroup<DeleteLoggerDefinitionRequestFormProperties>({
		});

	}

	export interface DeleteResourceDefinitionRequest {
	}
	export interface DeleteResourceDefinitionRequestFormProperties {
	}
	export function CreateDeleteResourceDefinitionRequestFormGroup() {
		return new FormGroup<DeleteResourceDefinitionRequestFormProperties>({
		});

	}

	export interface DeleteSubscriptionDefinitionRequest {
	}
	export interface DeleteSubscriptionDefinitionRequestFormProperties {
	}
	export function CreateDeleteSubscriptionDefinitionRequestFormGroup() {
		return new FormGroup<DeleteSubscriptionDefinitionRequestFormProperties>({
		});

	}

	export interface DisassociateRoleFromGroupRequest {
	}
	export interface DisassociateRoleFromGroupRequestFormProperties {
	}
	export function CreateDisassociateRoleFromGroupRequestFormGroup() {
		return new FormGroup<DisassociateRoleFromGroupRequestFormProperties>({
		});

	}

	export interface DisassociateServiceRoleFromAccountRequest {
	}
	export interface DisassociateServiceRoleFromAccountRequestFormProperties {
	}
	export function CreateDisassociateServiceRoleFromAccountRequestFormGroup() {
		return new FormGroup<DisassociateServiceRoleFromAccountRequestFormProperties>({
		});

	}


	/** Specifies whether the Lambda function runs in a Greengrass container (default) or without containerization. Unless your scenario requires that you run without containerization, we recommend that you run in a Greengrass container. Omit this value to run the Lambda function with the default containerization for the group. */
	export enum FunctionIsolationMode { GreengrassContainer = 'GreengrassContainer', NoContainer = 'NoContainer' }

	export interface GetAssociatedRoleRequest {
	}
	export interface GetAssociatedRoleRequestFormProperties {
	}
	export function CreateGetAssociatedRoleRequestFormGroup() {
		return new FormGroup<GetAssociatedRoleRequestFormProperties>({
		});

	}

	export interface GetBulkDeploymentStatusRequest {
	}
	export interface GetBulkDeploymentStatusRequestFormProperties {
	}
	export function CreateGetBulkDeploymentStatusRequestFormGroup() {
		return new FormGroup<GetBulkDeploymentStatusRequestFormProperties>({
		});

	}

	export interface GetConnectivityInfoRequest {
	}
	export interface GetConnectivityInfoRequestFormProperties {
	}
	export function CreateGetConnectivityInfoRequestFormGroup() {
		return new FormGroup<GetConnectivityInfoRequestFormProperties>({
		});

	}

	export interface GetConnectorDefinitionRequest {
	}
	export interface GetConnectorDefinitionRequestFormProperties {
	}
	export function CreateGetConnectorDefinitionRequestFormGroup() {
		return new FormGroup<GetConnectorDefinitionRequestFormProperties>({
		});

	}

	export interface GetConnectorDefinitionVersionRequest {
	}
	export interface GetConnectorDefinitionVersionRequestFormProperties {
	}
	export function CreateGetConnectorDefinitionVersionRequestFormGroup() {
		return new FormGroup<GetConnectorDefinitionVersionRequestFormProperties>({
		});

	}

	export interface GetCoreDefinitionRequest {
	}
	export interface GetCoreDefinitionRequestFormProperties {
	}
	export function CreateGetCoreDefinitionRequestFormGroup() {
		return new FormGroup<GetCoreDefinitionRequestFormProperties>({
		});

	}

	export interface GetCoreDefinitionVersionRequest {
	}
	export interface GetCoreDefinitionVersionRequestFormProperties {
	}
	export function CreateGetCoreDefinitionVersionRequestFormGroup() {
		return new FormGroup<GetCoreDefinitionVersionRequestFormProperties>({
		});

	}

	export interface GetDeploymentStatusRequest {
	}
	export interface GetDeploymentStatusRequestFormProperties {
	}
	export function CreateGetDeploymentStatusRequestFormGroup() {
		return new FormGroup<GetDeploymentStatusRequestFormProperties>({
		});

	}

	export interface GetDeviceDefinitionRequest {
	}
	export interface GetDeviceDefinitionRequestFormProperties {
	}
	export function CreateGetDeviceDefinitionRequestFormGroup() {
		return new FormGroup<GetDeviceDefinitionRequestFormProperties>({
		});

	}

	export interface GetDeviceDefinitionVersionRequest {
	}
	export interface GetDeviceDefinitionVersionRequestFormProperties {
	}
	export function CreateGetDeviceDefinitionVersionRequestFormGroup() {
		return new FormGroup<GetDeviceDefinitionVersionRequestFormProperties>({
		});

	}

	export interface GetFunctionDefinitionRequest {
	}
	export interface GetFunctionDefinitionRequestFormProperties {
	}
	export function CreateGetFunctionDefinitionRequestFormGroup() {
		return new FormGroup<GetFunctionDefinitionRequestFormProperties>({
		});

	}

	export interface GetFunctionDefinitionVersionRequest {
	}
	export interface GetFunctionDefinitionVersionRequestFormProperties {
	}
	export function CreateGetFunctionDefinitionVersionRequestFormGroup() {
		return new FormGroup<GetFunctionDefinitionVersionRequestFormProperties>({
		});

	}

	export interface GetGroupCertificateAuthorityRequest {
	}
	export interface GetGroupCertificateAuthorityRequestFormProperties {
	}
	export function CreateGetGroupCertificateAuthorityRequestFormGroup() {
		return new FormGroup<GetGroupCertificateAuthorityRequestFormProperties>({
		});

	}

	export interface GetGroupCertificateConfigurationRequest {
	}
	export interface GetGroupCertificateConfigurationRequestFormProperties {
	}
	export function CreateGetGroupCertificateConfigurationRequestFormGroup() {
		return new FormGroup<GetGroupCertificateConfigurationRequestFormProperties>({
		});

	}

	export interface GetGroupRequest {
	}
	export interface GetGroupRequestFormProperties {
	}
	export function CreateGetGroupRequestFormGroup() {
		return new FormGroup<GetGroupRequestFormProperties>({
		});

	}

	export interface GetGroupVersionRequest {
	}
	export interface GetGroupVersionRequestFormProperties {
	}
	export function CreateGetGroupVersionRequestFormGroup() {
		return new FormGroup<GetGroupVersionRequestFormProperties>({
		});

	}

	export interface GetLoggerDefinitionRequest {
	}
	export interface GetLoggerDefinitionRequestFormProperties {
	}
	export function CreateGetLoggerDefinitionRequestFormGroup() {
		return new FormGroup<GetLoggerDefinitionRequestFormProperties>({
		});

	}

	export interface GetLoggerDefinitionVersionRequest {
	}
	export interface GetLoggerDefinitionVersionRequestFormProperties {
	}
	export function CreateGetLoggerDefinitionVersionRequestFormGroup() {
		return new FormGroup<GetLoggerDefinitionVersionRequestFormProperties>({
		});

	}

	export interface GetResourceDefinitionRequest {
	}
	export interface GetResourceDefinitionRequestFormProperties {
	}
	export function CreateGetResourceDefinitionRequestFormGroup() {
		return new FormGroup<GetResourceDefinitionRequestFormProperties>({
		});

	}

	export interface GetResourceDefinitionVersionRequest {
	}
	export interface GetResourceDefinitionVersionRequestFormProperties {
	}
	export function CreateGetResourceDefinitionVersionRequestFormGroup() {
		return new FormGroup<GetResourceDefinitionVersionRequestFormProperties>({
		});

	}

	export interface GetServiceRoleForAccountRequest {
	}
	export interface GetServiceRoleForAccountRequestFormProperties {
	}
	export function CreateGetServiceRoleForAccountRequestFormGroup() {
		return new FormGroup<GetServiceRoleForAccountRequestFormProperties>({
		});

	}

	export interface GetSubscriptionDefinitionRequest {
	}
	export interface GetSubscriptionDefinitionRequestFormProperties {
	}
	export function CreateGetSubscriptionDefinitionRequestFormGroup() {
		return new FormGroup<GetSubscriptionDefinitionRequestFormProperties>({
		});

	}

	export interface GetSubscriptionDefinitionVersionRequest {
	}
	export interface GetSubscriptionDefinitionVersionRequestFormProperties {
	}
	export function CreateGetSubscriptionDefinitionVersionRequestFormGroup() {
		return new FormGroup<GetSubscriptionDefinitionVersionRequestFormProperties>({
		});

	}

	export interface GetThingRuntimeConfigurationRequest {
	}
	export interface GetThingRuntimeConfigurationRequestFormProperties {
	}
	export function CreateGetThingRuntimeConfigurationRequestFormGroup() {
		return new FormGroup<GetThingRuntimeConfigurationRequestFormProperties>({
		});

	}

	export interface ListBulkDeploymentDetailedReportsRequest {
	}
	export interface ListBulkDeploymentDetailedReportsRequestFormProperties {
	}
	export function CreateListBulkDeploymentDetailedReportsRequestFormGroup() {
		return new FormGroup<ListBulkDeploymentDetailedReportsRequestFormProperties>({
		});

	}

	export interface ListBulkDeploymentsRequest {
	}
	export interface ListBulkDeploymentsRequestFormProperties {
	}
	export function CreateListBulkDeploymentsRequestFormGroup() {
		return new FormGroup<ListBulkDeploymentsRequestFormProperties>({
		});

	}

	export interface ListConnectorDefinitionVersionsRequest {
	}
	export interface ListConnectorDefinitionVersionsRequestFormProperties {
	}
	export function CreateListConnectorDefinitionVersionsRequestFormGroup() {
		return new FormGroup<ListConnectorDefinitionVersionsRequestFormProperties>({
		});

	}

	export interface ListConnectorDefinitionsRequest {
	}
	export interface ListConnectorDefinitionsRequestFormProperties {
	}
	export function CreateListConnectorDefinitionsRequestFormGroup() {
		return new FormGroup<ListConnectorDefinitionsRequestFormProperties>({
		});

	}

	export interface ListCoreDefinitionVersionsRequest {
	}
	export interface ListCoreDefinitionVersionsRequestFormProperties {
	}
	export function CreateListCoreDefinitionVersionsRequestFormGroup() {
		return new FormGroup<ListCoreDefinitionVersionsRequestFormProperties>({
		});

	}

	export interface ListCoreDefinitionsRequest {
	}
	export interface ListCoreDefinitionsRequestFormProperties {
	}
	export function CreateListCoreDefinitionsRequestFormGroup() {
		return new FormGroup<ListCoreDefinitionsRequestFormProperties>({
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

	export interface ListDeviceDefinitionVersionsRequest {
	}
	export interface ListDeviceDefinitionVersionsRequestFormProperties {
	}
	export function CreateListDeviceDefinitionVersionsRequestFormGroup() {
		return new FormGroup<ListDeviceDefinitionVersionsRequestFormProperties>({
		});

	}

	export interface ListDeviceDefinitionsRequest {
	}
	export interface ListDeviceDefinitionsRequestFormProperties {
	}
	export function CreateListDeviceDefinitionsRequestFormGroup() {
		return new FormGroup<ListDeviceDefinitionsRequestFormProperties>({
		});

	}

	export interface ListFunctionDefinitionVersionsRequest {
	}
	export interface ListFunctionDefinitionVersionsRequestFormProperties {
	}
	export function CreateListFunctionDefinitionVersionsRequestFormGroup() {
		return new FormGroup<ListFunctionDefinitionVersionsRequestFormProperties>({
		});

	}

	export interface ListFunctionDefinitionsRequest {
	}
	export interface ListFunctionDefinitionsRequestFormProperties {
	}
	export function CreateListFunctionDefinitionsRequestFormGroup() {
		return new FormGroup<ListFunctionDefinitionsRequestFormProperties>({
		});

	}

	export interface ListGroupCertificateAuthoritiesRequest {
	}
	export interface ListGroupCertificateAuthoritiesRequestFormProperties {
	}
	export function CreateListGroupCertificateAuthoritiesRequestFormGroup() {
		return new FormGroup<ListGroupCertificateAuthoritiesRequestFormProperties>({
		});

	}

	export interface ListGroupVersionsRequest {
	}
	export interface ListGroupVersionsRequestFormProperties {
	}
	export function CreateListGroupVersionsRequestFormGroup() {
		return new FormGroup<ListGroupVersionsRequestFormProperties>({
		});

	}

	export interface ListGroupsRequest {
	}
	export interface ListGroupsRequestFormProperties {
	}
	export function CreateListGroupsRequestFormGroup() {
		return new FormGroup<ListGroupsRequestFormProperties>({
		});

	}

	export interface ListLoggerDefinitionVersionsRequest {
	}
	export interface ListLoggerDefinitionVersionsRequestFormProperties {
	}
	export function CreateListLoggerDefinitionVersionsRequestFormGroup() {
		return new FormGroup<ListLoggerDefinitionVersionsRequestFormProperties>({
		});

	}

	export interface ListLoggerDefinitionsRequest {
	}
	export interface ListLoggerDefinitionsRequestFormProperties {
	}
	export function CreateListLoggerDefinitionsRequestFormGroup() {
		return new FormGroup<ListLoggerDefinitionsRequestFormProperties>({
		});

	}

	export interface ListResourceDefinitionVersionsRequest {
	}
	export interface ListResourceDefinitionVersionsRequestFormProperties {
	}
	export function CreateListResourceDefinitionVersionsRequestFormGroup() {
		return new FormGroup<ListResourceDefinitionVersionsRequestFormProperties>({
		});

	}

	export interface ListResourceDefinitionsRequest {
	}
	export interface ListResourceDefinitionsRequestFormProperties {
	}
	export function CreateListResourceDefinitionsRequestFormGroup() {
		return new FormGroup<ListResourceDefinitionsRequestFormProperties>({
		});

	}

	export interface ListSubscriptionDefinitionVersionsRequest {
	}
	export interface ListSubscriptionDefinitionVersionsRequestFormProperties {
	}
	export function CreateListSubscriptionDefinitionVersionsRequestFormGroup() {
		return new FormGroup<ListSubscriptionDefinitionVersionsRequestFormProperties>({
		});

	}

	export interface ListSubscriptionDefinitionsRequest {
	}
	export interface ListSubscriptionDefinitionsRequestFormProperties {
	}
	export function CreateListSubscriptionDefinitionsRequestFormGroup() {
		return new FormGroup<ListSubscriptionDefinitionsRequestFormProperties>({
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


	/** Information needed to reset deployments. */
	export interface ResetDeploymentsRequest {
		Force?: boolean | null;
	}

	/** Information needed to reset deployments. */
	export interface ResetDeploymentsRequestFormProperties {
		Force: FormControl<boolean | null | undefined>,
	}
	export function CreateResetDeploymentsRequestFormGroup() {
		return new FormGroup<ResetDeploymentsRequestFormProperties>({
			Force: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface StartBulkDeploymentRequest {

		/** Required */
		ExecutionRoleArn: string;

		/** Required */
		InputFileUri: string;
		tags?: Tags;
	}
	export interface StartBulkDeploymentRequestFormProperties {

		/** Required */
		ExecutionRoleArn: FormControl<string | null | undefined>,

		/** Required */
		InputFileUri: FormControl<string | null | undefined>,
	}
	export function CreateStartBulkDeploymentRequestFormGroup() {
		return new FormGroup<StartBulkDeploymentRequestFormProperties>({
			ExecutionRoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			InputFileUri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface StopBulkDeploymentRequest {
	}
	export interface StopBulkDeploymentRequestFormProperties {
	}
	export function CreateStopBulkDeploymentRequestFormGroup() {
		return new FormGroup<StopBulkDeploymentRequestFormProperties>({
		});

	}


	/** A map of the key-value pairs for the resource tag. */
	export interface TagResourceRequest {

		/** The key-value pair for the resource tag. */
		tags?: Tags;
	}

	/** A map of the key-value pairs for the resource tag. */
	export interface TagResourceRequestFormProperties {
	}
	export function CreateTagResourceRequestFormGroup() {
		return new FormGroup<TagResourceRequestFormProperties>({
		});

	}


	/** Configuration settings for running telemetry. */
	export interface TelemetryConfigurationUpdate {

		/** Required */
		Telemetry: Telemetry;
	}

	/** Configuration settings for running telemetry. */
	export interface TelemetryConfigurationUpdateFormProperties {

		/** Required */
		Telemetry: FormControl<Telemetry | null | undefined>,
	}
	export function CreateTelemetryConfigurationUpdateFormGroup() {
		return new FormGroup<TelemetryConfigurationUpdateFormProperties>({
			Telemetry: new FormControl<Telemetry | null | undefined>(undefined, [Validators.required]),
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


	/** Connectivity information. */
	export interface UpdateConnectivityInfoRequest {
		ConnectivityInfo?: Array<ConnectivityInfo>;
	}

	/** Connectivity information. */
	export interface UpdateConnectivityInfoRequestFormProperties {
	}
	export function CreateUpdateConnectivityInfoRequestFormGroup() {
		return new FormGroup<UpdateConnectivityInfoRequestFormProperties>({
		});

	}

	export interface UpdateConnectorDefinitionRequest {
		Name?: string;
	}
	export interface UpdateConnectorDefinitionRequestFormProperties {
		Name: FormControl<string | null | undefined>,
	}
	export function CreateUpdateConnectorDefinitionRequestFormGroup() {
		return new FormGroup<UpdateConnectorDefinitionRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateCoreDefinitionRequest {
		Name?: string;
	}
	export interface UpdateCoreDefinitionRequestFormProperties {
		Name: FormControl<string | null | undefined>,
	}
	export function CreateUpdateCoreDefinitionRequestFormGroup() {
		return new FormGroup<UpdateCoreDefinitionRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateDeviceDefinitionRequest {
		Name?: string;
	}
	export interface UpdateDeviceDefinitionRequestFormProperties {
		Name: FormControl<string | null | undefined>,
	}
	export function CreateUpdateDeviceDefinitionRequestFormGroup() {
		return new FormGroup<UpdateDeviceDefinitionRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateFunctionDefinitionRequest {
		Name?: string;
	}
	export interface UpdateFunctionDefinitionRequestFormProperties {
		Name: FormControl<string | null | undefined>,
	}
	export function CreateUpdateFunctionDefinitionRequestFormGroup() {
		return new FormGroup<UpdateFunctionDefinitionRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateGroupCertificateConfigurationRequest {
		CertificateExpiryInMilliseconds?: string;
	}
	export interface UpdateGroupCertificateConfigurationRequestFormProperties {
		CertificateExpiryInMilliseconds: FormControl<string | null | undefined>,
	}
	export function CreateUpdateGroupCertificateConfigurationRequestFormGroup() {
		return new FormGroup<UpdateGroupCertificateConfigurationRequestFormProperties>({
			CertificateExpiryInMilliseconds: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateGroupRequest {
		Name?: string;
	}
	export interface UpdateGroupRequestFormProperties {
		Name: FormControl<string | null | undefined>,
	}
	export function CreateUpdateGroupRequestFormGroup() {
		return new FormGroup<UpdateGroupRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateLoggerDefinitionRequest {
		Name?: string;
	}
	export interface UpdateLoggerDefinitionRequestFormProperties {
		Name: FormControl<string | null | undefined>,
	}
	export function CreateUpdateLoggerDefinitionRequestFormGroup() {
		return new FormGroup<UpdateLoggerDefinitionRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateResourceDefinitionRequest {
		Name?: string;
	}
	export interface UpdateResourceDefinitionRequestFormProperties {
		Name: FormControl<string | null | undefined>,
	}
	export function CreateUpdateResourceDefinitionRequestFormGroup() {
		return new FormGroup<UpdateResourceDefinitionRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateSubscriptionDefinitionRequest {
		Name?: string;
	}
	export interface UpdateSubscriptionDefinitionRequestFormProperties {
		Name: FormControl<string | null | undefined>,
	}
	export function CreateUpdateSubscriptionDefinitionRequestFormGroup() {
		return new FormGroup<UpdateSubscriptionDefinitionRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateThingRuntimeConfigurationRequest {
		TelemetryConfiguration?: TelemetryConfigurationUpdate;
	}
	export interface UpdateThingRuntimeConfigurationRequestFormProperties {
	}
	export function CreateUpdateThingRuntimeConfigurationRequestFormGroup() {
		return new FormGroup<UpdateThingRuntimeConfigurationRequestFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Associates a role with a group. Your Greengrass core will use the role to access AWS cloud services. The role's permissions should allow Greengrass core Lambda functions to perform actions against the cloud.
		 * Put greengrass/groups/{GroupId}/role
		 * @param {string} GroupId The ID of the Greengrass group.
		 * @return {AssociateRoleToGroupResponse} Success
		 */
		AssociateRoleToGroup(GroupId: string, requestBody: AssociateRoleToGroupPutBody): Observable<AssociateRoleToGroupResponse> {
			return this.http.put<AssociateRoleToGroupResponse>(this.baseUri + 'greengrass/groups/' + (GroupId == null ? '' : encodeURIComponent(GroupId)) + '/role', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Disassociates the role from a group.
		 * Delete greengrass/groups/{GroupId}/role
		 * @param {string} GroupId The ID of the Greengrass group.
		 * @return {DisassociateRoleFromGroupResponse} Success
		 */
		DisassociateRoleFromGroup(GroupId: string): Observable<DisassociateRoleFromGroupResponse> {
			return this.http.delete<DisassociateRoleFromGroupResponse>(this.baseUri + 'greengrass/groups/' + (GroupId == null ? '' : encodeURIComponent(GroupId)) + '/role', {});
		}

		/**
		 * Retrieves the role associated with a particular group.
		 * Get greengrass/groups/{GroupId}/role
		 * @param {string} GroupId The ID of the Greengrass group.
		 * @return {GetAssociatedRoleResponse} Success
		 */
		GetAssociatedRole(GroupId: string): Observable<GetAssociatedRoleResponse> {
			return this.http.get<GetAssociatedRoleResponse>(this.baseUri + 'greengrass/groups/' + (GroupId == null ? '' : encodeURIComponent(GroupId)) + '/role', {});
		}

		/**
		 * Associates a role with your account. AWS IoT Greengrass will use the role to access your Lambda functions and AWS IoT resources. This is necessary for deployments to succeed. The role must have at least minimum permissions in the policy ''AWSGreengrassResourceAccessRolePolicy''.
		 * Put greengrass/servicerole
		 * @return {AssociateServiceRoleToAccountResponse} Success
		 */
		AssociateServiceRoleToAccount(requestBody: AssociateServiceRoleToAccountPutBody): Observable<AssociateServiceRoleToAccountResponse> {
			return this.http.put<AssociateServiceRoleToAccountResponse>(this.baseUri + 'greengrass/servicerole', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Disassociates the service role from your account. Without a service role, deployments will not work.
		 * Delete greengrass/servicerole
		 * @return {DisassociateServiceRoleFromAccountResponse} Success
		 */
		DisassociateServiceRoleFromAccount(): Observable<DisassociateServiceRoleFromAccountResponse> {
			return this.http.delete<DisassociateServiceRoleFromAccountResponse>(this.baseUri + 'greengrass/servicerole', {});
		}

		/**
		 * Retrieves the service role that is attached to your account.
		 * Get greengrass/servicerole
		 * @return {GetServiceRoleForAccountResponse} Success
		 */
		GetServiceRoleForAccount(): Observable<GetServiceRoleForAccountResponse> {
			return this.http.get<GetServiceRoleForAccountResponse>(this.baseUri + 'greengrass/servicerole', {});
		}

		/**
		 * Creates a connector definition. You may provide the initial version of the connector definition now or use ''CreateConnectorDefinitionVersion'' at a later time.
		 * Post greengrass/definition/connectors
		 * @return {CreateConnectorDefinitionResponse} Success
		 */
		CreateConnectorDefinition(requestBody: CreateConnectorDefinitionPostBody): Observable<CreateConnectorDefinitionResponse> {
			return this.http.post<CreateConnectorDefinitionResponse>(this.baseUri + 'greengrass/definition/connectors', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves a list of connector definitions.
		 * Get greengrass/definition/connectors
		 * @param {string} MaxResults The maximum number of results to be returned per request.
		 * @param {string} NextToken The token for the next set of results, or ''null'' if there are no additional results.
		 * @return {ListConnectorDefinitionsResponse} Success
		 */
		ListConnectorDefinitions(MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListConnectorDefinitionsResponse> {
			return this.http.get<ListConnectorDefinitionsResponse>(this.baseUri + 'greengrass/definition/connectors?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Creates a version of a connector definition which has already been defined.
		 * Post greengrass/definition/connectors/{ConnectorDefinitionId}/versions
		 * @param {string} ConnectorDefinitionId The ID of the connector definition.
		 * @return {CreateConnectorDefinitionVersionResponse} Success
		 */
		CreateConnectorDefinitionVersion(ConnectorDefinitionId: string, requestBody: CreateConnectorDefinitionVersionPostBody): Observable<CreateConnectorDefinitionVersionResponse> {
			return this.http.post<CreateConnectorDefinitionVersionResponse>(this.baseUri + 'greengrass/definition/connectors/' + (ConnectorDefinitionId == null ? '' : encodeURIComponent(ConnectorDefinitionId)) + '/versions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the versions of a connector definition, which are containers for connectors. Connectors run on the Greengrass core and contain built-in integration with local infrastructure, device protocols, AWS, and other cloud services.
		 * Get greengrass/definition/connectors/{ConnectorDefinitionId}/versions
		 * @param {string} ConnectorDefinitionId The ID of the connector definition.
		 * @param {string} MaxResults The maximum number of results to be returned per request.
		 * @param {string} NextToken The token for the next set of results, or ''null'' if there are no additional results.
		 * @return {ListConnectorDefinitionVersionsResponse} Success
		 */
		ListConnectorDefinitionVersions(ConnectorDefinitionId: string, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListConnectorDefinitionVersionsResponse> {
			return this.http.get<ListConnectorDefinitionVersionsResponse>(this.baseUri + 'greengrass/definition/connectors/' + (ConnectorDefinitionId == null ? '' : encodeURIComponent(ConnectorDefinitionId)) + '/versions&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Creates a core definition. You may provide the initial version of the core definition now or use ''CreateCoreDefinitionVersion'' at a later time. Greengrass groups must each contain exactly one Greengrass core.
		 * Post greengrass/definition/cores
		 * @return {CreateCoreDefinitionResponse} Success
		 */
		CreateCoreDefinition(requestBody: CreateCoreDefinitionPostBody): Observable<CreateCoreDefinitionResponse> {
			return this.http.post<CreateCoreDefinitionResponse>(this.baseUri + 'greengrass/definition/cores', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves a list of core definitions.
		 * Get greengrass/definition/cores
		 * @param {string} MaxResults The maximum number of results to be returned per request.
		 * @param {string} NextToken The token for the next set of results, or ''null'' if there are no additional results.
		 * @return {ListCoreDefinitionsResponse} Success
		 */
		ListCoreDefinitions(MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListCoreDefinitionsResponse> {
			return this.http.get<ListCoreDefinitionsResponse>(this.baseUri + 'greengrass/definition/cores?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Creates a version of a core definition that has already been defined. Greengrass groups must each contain exactly one Greengrass core.
		 * Post greengrass/definition/cores/{CoreDefinitionId}/versions
		 * @param {string} CoreDefinitionId The ID of the core definition.
		 * @return {CreateCoreDefinitionVersionResponse} Success
		 */
		CreateCoreDefinitionVersion(CoreDefinitionId: string, requestBody: CreateCoreDefinitionVersionPostBody): Observable<CreateCoreDefinitionVersionResponse> {
			return this.http.post<CreateCoreDefinitionVersionResponse>(this.baseUri + 'greengrass/definition/cores/' + (CoreDefinitionId == null ? '' : encodeURIComponent(CoreDefinitionId)) + '/versions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the versions of a core definition.
		 * Get greengrass/definition/cores/{CoreDefinitionId}/versions
		 * @param {string} CoreDefinitionId The ID of the core definition.
		 * @param {string} MaxResults The maximum number of results to be returned per request.
		 * @param {string} NextToken The token for the next set of results, or ''null'' if there are no additional results.
		 * @return {ListCoreDefinitionVersionsResponse} Success
		 */
		ListCoreDefinitionVersions(CoreDefinitionId: string, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListCoreDefinitionVersionsResponse> {
			return this.http.get<ListCoreDefinitionVersionsResponse>(this.baseUri + 'greengrass/definition/cores/' + (CoreDefinitionId == null ? '' : encodeURIComponent(CoreDefinitionId)) + '/versions&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Creates a deployment. ''CreateDeployment'' requests are idempotent with respect to the ''X-Amzn-Client-Token'' token and the request parameters.
		 * Post greengrass/groups/{GroupId}/deployments
		 * @param {string} GroupId The ID of the Greengrass group.
		 * @return {CreateDeploymentResponse} Success
		 */
		CreateDeployment(GroupId: string, requestBody: CreateDeploymentPostBody): Observable<CreateDeploymentResponse> {
			return this.http.post<CreateDeploymentResponse>(this.baseUri + 'greengrass/groups/' + (GroupId == null ? '' : encodeURIComponent(GroupId)) + '/deployments', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a history of deployments for the group.
		 * Get greengrass/groups/{GroupId}/deployments
		 * @param {string} GroupId The ID of the Greengrass group.
		 * @param {string} MaxResults The maximum number of results to be returned per request.
		 * @param {string} NextToken The token for the next set of results, or ''null'' if there are no additional results.
		 * @return {ListDeploymentsResponse} Success
		 */
		ListDeployments(GroupId: string, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListDeploymentsResponse> {
			return this.http.get<ListDeploymentsResponse>(this.baseUri + 'greengrass/groups/' + (GroupId == null ? '' : encodeURIComponent(GroupId)) + '/deployments&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Creates a device definition. You may provide the initial version of the device definition now or use ''CreateDeviceDefinitionVersion'' at a later time.
		 * Post greengrass/definition/devices
		 * @return {CreateDeviceDefinitionResponse} Success
		 */
		CreateDeviceDefinition(requestBody: CreateDeviceDefinitionPostBody): Observable<CreateDeviceDefinitionResponse> {
			return this.http.post<CreateDeviceDefinitionResponse>(this.baseUri + 'greengrass/definition/devices', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves a list of device definitions.
		 * Get greengrass/definition/devices
		 * @param {string} MaxResults The maximum number of results to be returned per request.
		 * @param {string} NextToken The token for the next set of results, or ''null'' if there are no additional results.
		 * @return {ListDeviceDefinitionsResponse} Success
		 */
		ListDeviceDefinitions(MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListDeviceDefinitionsResponse> {
			return this.http.get<ListDeviceDefinitionsResponse>(this.baseUri + 'greengrass/definition/devices?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Creates a version of a device definition that has already been defined.
		 * Post greengrass/definition/devices/{DeviceDefinitionId}/versions
		 * @param {string} DeviceDefinitionId The ID of the device definition.
		 * @return {CreateDeviceDefinitionVersionResponse} Success
		 */
		CreateDeviceDefinitionVersion(DeviceDefinitionId: string, requestBody: CreateDeviceDefinitionVersionPostBody): Observable<CreateDeviceDefinitionVersionResponse> {
			return this.http.post<CreateDeviceDefinitionVersionResponse>(this.baseUri + 'greengrass/definition/devices/' + (DeviceDefinitionId == null ? '' : encodeURIComponent(DeviceDefinitionId)) + '/versions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the versions of a device definition.
		 * Get greengrass/definition/devices/{DeviceDefinitionId}/versions
		 * @param {string} DeviceDefinitionId The ID of the device definition.
		 * @param {string} MaxResults The maximum number of results to be returned per request.
		 * @param {string} NextToken The token for the next set of results, or ''null'' if there are no additional results.
		 * @return {ListDeviceDefinitionVersionsResponse} Success
		 */
		ListDeviceDefinitionVersions(DeviceDefinitionId: string, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListDeviceDefinitionVersionsResponse> {
			return this.http.get<ListDeviceDefinitionVersionsResponse>(this.baseUri + 'greengrass/definition/devices/' + (DeviceDefinitionId == null ? '' : encodeURIComponent(DeviceDefinitionId)) + '/versions&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Creates a Lambda function definition which contains a list of Lambda functions and their configurations to be used in a group. You can create an initial version of the definition by providing a list of Lambda functions and their configurations now, or use ''CreateFunctionDefinitionVersion'' later.
		 * Post greengrass/definition/functions
		 * @return {CreateFunctionDefinitionResponse} Success
		 */
		CreateFunctionDefinition(requestBody: CreateFunctionDefinitionPostBody): Observable<CreateFunctionDefinitionResponse> {
			return this.http.post<CreateFunctionDefinitionResponse>(this.baseUri + 'greengrass/definition/functions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves a list of Lambda function definitions.
		 * Get greengrass/definition/functions
		 * @param {string} MaxResults The maximum number of results to be returned per request.
		 * @param {string} NextToken The token for the next set of results, or ''null'' if there are no additional results.
		 * @return {ListFunctionDefinitionsResponse} Success
		 */
		ListFunctionDefinitions(MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListFunctionDefinitionsResponse> {
			return this.http.get<ListFunctionDefinitionsResponse>(this.baseUri + 'greengrass/definition/functions?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Creates a version of a Lambda function definition that has already been defined.
		 * Post greengrass/definition/functions/{FunctionDefinitionId}/versions
		 * @param {string} FunctionDefinitionId The ID of the Lambda function definition.
		 * @return {CreateFunctionDefinitionVersionResponse} Success
		 */
		CreateFunctionDefinitionVersion(FunctionDefinitionId: string, requestBody: CreateFunctionDefinitionVersionPostBody): Observable<CreateFunctionDefinitionVersionResponse> {
			return this.http.post<CreateFunctionDefinitionVersionResponse>(this.baseUri + 'greengrass/definition/functions/' + (FunctionDefinitionId == null ? '' : encodeURIComponent(FunctionDefinitionId)) + '/versions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the versions of a Lambda function definition.
		 * Get greengrass/definition/functions/{FunctionDefinitionId}/versions
		 * @param {string} FunctionDefinitionId The ID of the Lambda function definition.
		 * @param {string} MaxResults The maximum number of results to be returned per request.
		 * @param {string} NextToken The token for the next set of results, or ''null'' if there are no additional results.
		 * @return {ListFunctionDefinitionVersionsResponse} Success
		 */
		ListFunctionDefinitionVersions(FunctionDefinitionId: string, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListFunctionDefinitionVersionsResponse> {
			return this.http.get<ListFunctionDefinitionVersionsResponse>(this.baseUri + 'greengrass/definition/functions/' + (FunctionDefinitionId == null ? '' : encodeURIComponent(FunctionDefinitionId)) + '/versions&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Creates a group. You may provide the initial version of the group or use ''CreateGroupVersion'' at a later time. Tip: You can use the ''gg_group_setup'' package (https://github.com/awslabs/aws-greengrass-group-setup) as a library or command-line application to create and deploy Greengrass groups.
		 * Post greengrass/groups
		 * @return {CreateGroupResponse} Success
		 */
		CreateGroup(requestBody: CreateGroupPostBody): Observable<CreateGroupResponse> {
			return this.http.post<CreateGroupResponse>(this.baseUri + 'greengrass/groups', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves a list of groups.
		 * Get greengrass/groups
		 * @param {string} MaxResults The maximum number of results to be returned per request.
		 * @param {string} NextToken The token for the next set of results, or ''null'' if there are no additional results.
		 * @return {ListGroupsResponse} Success
		 */
		ListGroups(MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListGroupsResponse> {
			return this.http.get<ListGroupsResponse>(this.baseUri + 'greengrass/groups?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Creates a CA for the group. If a CA already exists, it will rotate the existing CA.
		 * Post greengrass/groups/{GroupId}/certificateauthorities
		 * @param {string} GroupId The ID of the Greengrass group.
		 * @return {CreateGroupCertificateAuthorityResponse} Success
		 */
		CreateGroupCertificateAuthority(GroupId: string): Observable<CreateGroupCertificateAuthorityResponse> {
			return this.http.post<CreateGroupCertificateAuthorityResponse>(this.baseUri + 'greengrass/groups/' + (GroupId == null ? '' : encodeURIComponent(GroupId)) + '/certificateauthorities', null, {});
		}

		/**
		 * Retrieves the current CAs for a group.
		 * Get greengrass/groups/{GroupId}/certificateauthorities
		 * @param {string} GroupId The ID of the Greengrass group.
		 * @return {ListGroupCertificateAuthoritiesResponse} Success
		 */
		ListGroupCertificateAuthorities(GroupId: string): Observable<ListGroupCertificateAuthoritiesResponse> {
			return this.http.get<ListGroupCertificateAuthoritiesResponse>(this.baseUri + 'greengrass/groups/' + (GroupId == null ? '' : encodeURIComponent(GroupId)) + '/certificateauthorities', {});
		}

		/**
		 * Creates a version of a group which has already been defined.
		 * Post greengrass/groups/{GroupId}/versions
		 * @param {string} GroupId The ID of the Greengrass group.
		 * @return {CreateGroupVersionResponse} Success
		 */
		CreateGroupVersion(GroupId: string, requestBody: CreateGroupVersionPostBody): Observable<CreateGroupVersionResponse> {
			return this.http.post<CreateGroupVersionResponse>(this.baseUri + 'greengrass/groups/' + (GroupId == null ? '' : encodeURIComponent(GroupId)) + '/versions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the versions of a group.
		 * Get greengrass/groups/{GroupId}/versions
		 * @param {string} GroupId The ID of the Greengrass group.
		 * @param {string} MaxResults The maximum number of results to be returned per request.
		 * @param {string} NextToken The token for the next set of results, or ''null'' if there are no additional results.
		 * @return {ListGroupVersionsResponse} Success
		 */
		ListGroupVersions(GroupId: string, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListGroupVersionsResponse> {
			return this.http.get<ListGroupVersionsResponse>(this.baseUri + 'greengrass/groups/' + (GroupId == null ? '' : encodeURIComponent(GroupId)) + '/versions&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Creates a logger definition. You may provide the initial version of the logger definition now or use ''CreateLoggerDefinitionVersion'' at a later time.
		 * Post greengrass/definition/loggers
		 * @return {CreateLoggerDefinitionResponse} Success
		 */
		CreateLoggerDefinition(requestBody: CreateLoggerDefinitionPostBody): Observable<CreateLoggerDefinitionResponse> {
			return this.http.post<CreateLoggerDefinitionResponse>(this.baseUri + 'greengrass/definition/loggers', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves a list of logger definitions.
		 * Get greengrass/definition/loggers
		 * @param {string} MaxResults The maximum number of results to be returned per request.
		 * @param {string} NextToken The token for the next set of results, or ''null'' if there are no additional results.
		 * @return {ListLoggerDefinitionsResponse} Success
		 */
		ListLoggerDefinitions(MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListLoggerDefinitionsResponse> {
			return this.http.get<ListLoggerDefinitionsResponse>(this.baseUri + 'greengrass/definition/loggers?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Creates a version of a logger definition that has already been defined.
		 * Post greengrass/definition/loggers/{LoggerDefinitionId}/versions
		 * @param {string} LoggerDefinitionId The ID of the logger definition.
		 * @return {CreateLoggerDefinitionVersionResponse} Success
		 */
		CreateLoggerDefinitionVersion(LoggerDefinitionId: string, requestBody: CreateLoggerDefinitionVersionPostBody): Observable<CreateLoggerDefinitionVersionResponse> {
			return this.http.post<CreateLoggerDefinitionVersionResponse>(this.baseUri + 'greengrass/definition/loggers/' + (LoggerDefinitionId == null ? '' : encodeURIComponent(LoggerDefinitionId)) + '/versions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the versions of a logger definition.
		 * Get greengrass/definition/loggers/{LoggerDefinitionId}/versions
		 * @param {string} LoggerDefinitionId The ID of the logger definition.
		 * @param {string} MaxResults The maximum number of results to be returned per request.
		 * @param {string} NextToken The token for the next set of results, or ''null'' if there are no additional results.
		 * @return {ListLoggerDefinitionVersionsResponse} Success
		 */
		ListLoggerDefinitionVersions(LoggerDefinitionId: string, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListLoggerDefinitionVersionsResponse> {
			return this.http.get<ListLoggerDefinitionVersionsResponse>(this.baseUri + 'greengrass/definition/loggers/' + (LoggerDefinitionId == null ? '' : encodeURIComponent(LoggerDefinitionId)) + '/versions&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Creates a resource definition which contains a list of resources to be used in a group. You can create an initial version of the definition by providing a list of resources now, or use ''CreateResourceDefinitionVersion'' later.
		 * Post greengrass/definition/resources
		 * @return {CreateResourceDefinitionResponse} Success
		 */
		CreateResourceDefinition(requestBody: CreateResourceDefinitionPostBody): Observable<CreateResourceDefinitionResponse> {
			return this.http.post<CreateResourceDefinitionResponse>(this.baseUri + 'greengrass/definition/resources', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves a list of resource definitions.
		 * Get greengrass/definition/resources
		 * @param {string} MaxResults The maximum number of results to be returned per request.
		 * @param {string} NextToken The token for the next set of results, or ''null'' if there are no additional results.
		 * @return {ListResourceDefinitionsResponse} Success
		 */
		ListResourceDefinitions(MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListResourceDefinitionsResponse> {
			return this.http.get<ListResourceDefinitionsResponse>(this.baseUri + 'greengrass/definition/resources?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Creates a version of a resource definition that has already been defined.
		 * Post greengrass/definition/resources/{ResourceDefinitionId}/versions
		 * @param {string} ResourceDefinitionId The ID of the resource definition.
		 * @return {CreateResourceDefinitionVersionResponse} Success
		 */
		CreateResourceDefinitionVersion(ResourceDefinitionId: string, requestBody: CreateResourceDefinitionVersionPostBody): Observable<CreateResourceDefinitionVersionResponse> {
			return this.http.post<CreateResourceDefinitionVersionResponse>(this.baseUri + 'greengrass/definition/resources/' + (ResourceDefinitionId == null ? '' : encodeURIComponent(ResourceDefinitionId)) + '/versions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the versions of a resource definition.
		 * Get greengrass/definition/resources/{ResourceDefinitionId}/versions
		 * @param {string} MaxResults The maximum number of results to be returned per request.
		 * @param {string} NextToken The token for the next set of results, or ''null'' if there are no additional results.
		 * @param {string} ResourceDefinitionId The ID of the resource definition.
		 * @return {ListResourceDefinitionVersionsResponse} Success
		 */
		ListResourceDefinitionVersions(MaxResults: string | null | undefined, NextToken: string | null | undefined, ResourceDefinitionId: string): Observable<ListResourceDefinitionVersionsResponse> {
			return this.http.get<ListResourceDefinitionVersionsResponse>(this.baseUri + 'greengrass/definition/resources/' + (ResourceDefinitionId == null ? '' : encodeURIComponent(ResourceDefinitionId)) + '/versions?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Creates a software update for a core or group of cores (specified as an IoT thing group.) Use this to update the OTA Agent as well as the Greengrass core software. It makes use of the IoT Jobs feature which provides additional commands to manage a Greengrass core software update job.
		 * Post greengrass/updates
		 * @return {CreateSoftwareUpdateJobResponse} Success
		 */
		CreateSoftwareUpdateJob(requestBody: CreateSoftwareUpdateJobPostBody): Observable<CreateSoftwareUpdateJobResponse> {
			return this.http.post<CreateSoftwareUpdateJobResponse>(this.baseUri + 'greengrass/updates', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a subscription definition. You may provide the initial version of the subscription definition now or use ''CreateSubscriptionDefinitionVersion'' at a later time.
		 * Post greengrass/definition/subscriptions
		 * @return {CreateSubscriptionDefinitionResponse} Success
		 */
		CreateSubscriptionDefinition(requestBody: CreateSubscriptionDefinitionPostBody): Observable<CreateSubscriptionDefinitionResponse> {
			return this.http.post<CreateSubscriptionDefinitionResponse>(this.baseUri + 'greengrass/definition/subscriptions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves a list of subscription definitions.
		 * Get greengrass/definition/subscriptions
		 * @param {string} MaxResults The maximum number of results to be returned per request.
		 * @param {string} NextToken The token for the next set of results, or ''null'' if there are no additional results.
		 * @return {ListSubscriptionDefinitionsResponse} Success
		 */
		ListSubscriptionDefinitions(MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListSubscriptionDefinitionsResponse> {
			return this.http.get<ListSubscriptionDefinitionsResponse>(this.baseUri + 'greengrass/definition/subscriptions?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Creates a version of a subscription definition which has already been defined.
		 * Post greengrass/definition/subscriptions/{SubscriptionDefinitionId}/versions
		 * @param {string} SubscriptionDefinitionId The ID of the subscription definition.
		 * @return {CreateSubscriptionDefinitionVersionResponse} Success
		 */
		CreateSubscriptionDefinitionVersion(SubscriptionDefinitionId: string, requestBody: CreateSubscriptionDefinitionVersionPostBody): Observable<CreateSubscriptionDefinitionVersionResponse> {
			return this.http.post<CreateSubscriptionDefinitionVersionResponse>(this.baseUri + 'greengrass/definition/subscriptions/' + (SubscriptionDefinitionId == null ? '' : encodeURIComponent(SubscriptionDefinitionId)) + '/versions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the versions of a subscription definition.
		 * Get greengrass/definition/subscriptions/{SubscriptionDefinitionId}/versions
		 * @param {string} MaxResults The maximum number of results to be returned per request.
		 * @param {string} NextToken The token for the next set of results, or ''null'' if there are no additional results.
		 * @param {string} SubscriptionDefinitionId The ID of the subscription definition.
		 * @return {ListSubscriptionDefinitionVersionsResponse} Success
		 */
		ListSubscriptionDefinitionVersions(MaxResults: string | null | undefined, NextToken: string | null | undefined, SubscriptionDefinitionId: string): Observable<ListSubscriptionDefinitionVersionsResponse> {
			return this.http.get<ListSubscriptionDefinitionVersionsResponse>(this.baseUri + 'greengrass/definition/subscriptions/' + (SubscriptionDefinitionId == null ? '' : encodeURIComponent(SubscriptionDefinitionId)) + '/versions?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Deletes a connector definition.
		 * Delete greengrass/definition/connectors/{ConnectorDefinitionId}
		 * @param {string} ConnectorDefinitionId The ID of the connector definition.
		 * @return {DeleteConnectorDefinitionResponse} Success
		 */
		DeleteConnectorDefinition(ConnectorDefinitionId: string): Observable<DeleteConnectorDefinitionResponse> {
			return this.http.delete<DeleteConnectorDefinitionResponse>(this.baseUri + 'greengrass/definition/connectors/' + (ConnectorDefinitionId == null ? '' : encodeURIComponent(ConnectorDefinitionId)), {});
		}

		/**
		 * Retrieves information about a connector definition.
		 * Get greengrass/definition/connectors/{ConnectorDefinitionId}
		 * @param {string} ConnectorDefinitionId The ID of the connector definition.
		 * @return {GetConnectorDefinitionResponse} Success
		 */
		GetConnectorDefinition(ConnectorDefinitionId: string): Observable<GetConnectorDefinitionResponse> {
			return this.http.get<GetConnectorDefinitionResponse>(this.baseUri + 'greengrass/definition/connectors/' + (ConnectorDefinitionId == null ? '' : encodeURIComponent(ConnectorDefinitionId)), {});
		}

		/**
		 * Updates a connector definition.
		 * Put greengrass/definition/connectors/{ConnectorDefinitionId}
		 * @param {string} ConnectorDefinitionId The ID of the connector definition.
		 * @return {UpdateConnectorDefinitionResponse} Success
		 */
		UpdateConnectorDefinition(ConnectorDefinitionId: string, requestBody: UpdateConnectorDefinitionPutBody): Observable<UpdateConnectorDefinitionResponse> {
			return this.http.put<UpdateConnectorDefinitionResponse>(this.baseUri + 'greengrass/definition/connectors/' + (ConnectorDefinitionId == null ? '' : encodeURIComponent(ConnectorDefinitionId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a core definition.
		 * Delete greengrass/definition/cores/{CoreDefinitionId}
		 * @param {string} CoreDefinitionId The ID of the core definition.
		 * @return {DeleteCoreDefinitionResponse} Success
		 */
		DeleteCoreDefinition(CoreDefinitionId: string): Observable<DeleteCoreDefinitionResponse> {
			return this.http.delete<DeleteCoreDefinitionResponse>(this.baseUri + 'greengrass/definition/cores/' + (CoreDefinitionId == null ? '' : encodeURIComponent(CoreDefinitionId)), {});
		}

		/**
		 * Retrieves information about a core definition version.
		 * Get greengrass/definition/cores/{CoreDefinitionId}
		 * @param {string} CoreDefinitionId The ID of the core definition.
		 * @return {GetCoreDefinitionResponse} Success
		 */
		GetCoreDefinition(CoreDefinitionId: string): Observable<GetCoreDefinitionResponse> {
			return this.http.get<GetCoreDefinitionResponse>(this.baseUri + 'greengrass/definition/cores/' + (CoreDefinitionId == null ? '' : encodeURIComponent(CoreDefinitionId)), {});
		}

		/**
		 * Updates a core definition.
		 * Put greengrass/definition/cores/{CoreDefinitionId}
		 * @param {string} CoreDefinitionId The ID of the core definition.
		 * @return {UpdateCoreDefinitionResponse} Success
		 */
		UpdateCoreDefinition(CoreDefinitionId: string, requestBody: UpdateCoreDefinitionPutBody): Observable<UpdateCoreDefinitionResponse> {
			return this.http.put<UpdateCoreDefinitionResponse>(this.baseUri + 'greengrass/definition/cores/' + (CoreDefinitionId == null ? '' : encodeURIComponent(CoreDefinitionId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a device definition.
		 * Delete greengrass/definition/devices/{DeviceDefinitionId}
		 * @param {string} DeviceDefinitionId The ID of the device definition.
		 * @return {DeleteDeviceDefinitionResponse} Success
		 */
		DeleteDeviceDefinition(DeviceDefinitionId: string): Observable<DeleteDeviceDefinitionResponse> {
			return this.http.delete<DeleteDeviceDefinitionResponse>(this.baseUri + 'greengrass/definition/devices/' + (DeviceDefinitionId == null ? '' : encodeURIComponent(DeviceDefinitionId)), {});
		}

		/**
		 * Retrieves information about a device definition.
		 * Get greengrass/definition/devices/{DeviceDefinitionId}
		 * @param {string} DeviceDefinitionId The ID of the device definition.
		 * @return {GetDeviceDefinitionResponse} Success
		 */
		GetDeviceDefinition(DeviceDefinitionId: string): Observable<GetDeviceDefinitionResponse> {
			return this.http.get<GetDeviceDefinitionResponse>(this.baseUri + 'greengrass/definition/devices/' + (DeviceDefinitionId == null ? '' : encodeURIComponent(DeviceDefinitionId)), {});
		}

		/**
		 * Updates a device definition.
		 * Put greengrass/definition/devices/{DeviceDefinitionId}
		 * @param {string} DeviceDefinitionId The ID of the device definition.
		 * @return {UpdateDeviceDefinitionResponse} Success
		 */
		UpdateDeviceDefinition(DeviceDefinitionId: string, requestBody: UpdateDeviceDefinitionPutBody): Observable<UpdateDeviceDefinitionResponse> {
			return this.http.put<UpdateDeviceDefinitionResponse>(this.baseUri + 'greengrass/definition/devices/' + (DeviceDefinitionId == null ? '' : encodeURIComponent(DeviceDefinitionId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a Lambda function definition.
		 * Delete greengrass/definition/functions/{FunctionDefinitionId}
		 * @param {string} FunctionDefinitionId The ID of the Lambda function definition.
		 * @return {DeleteFunctionDefinitionResponse} Success
		 */
		DeleteFunctionDefinition(FunctionDefinitionId: string): Observable<DeleteFunctionDefinitionResponse> {
			return this.http.delete<DeleteFunctionDefinitionResponse>(this.baseUri + 'greengrass/definition/functions/' + (FunctionDefinitionId == null ? '' : encodeURIComponent(FunctionDefinitionId)), {});
		}

		/**
		 * Retrieves information about a Lambda function definition, including its creation time and latest version.
		 * Get greengrass/definition/functions/{FunctionDefinitionId}
		 * @param {string} FunctionDefinitionId The ID of the Lambda function definition.
		 * @return {GetFunctionDefinitionResponse} Success
		 */
		GetFunctionDefinition(FunctionDefinitionId: string): Observable<GetFunctionDefinitionResponse> {
			return this.http.get<GetFunctionDefinitionResponse>(this.baseUri + 'greengrass/definition/functions/' + (FunctionDefinitionId == null ? '' : encodeURIComponent(FunctionDefinitionId)), {});
		}

		/**
		 * Updates a Lambda function definition.
		 * Put greengrass/definition/functions/{FunctionDefinitionId}
		 * @param {string} FunctionDefinitionId The ID of the Lambda function definition.
		 * @return {UpdateFunctionDefinitionResponse} Success
		 */
		UpdateFunctionDefinition(FunctionDefinitionId: string, requestBody: UpdateFunctionDefinitionPutBody): Observable<UpdateFunctionDefinitionResponse> {
			return this.http.put<UpdateFunctionDefinitionResponse>(this.baseUri + 'greengrass/definition/functions/' + (FunctionDefinitionId == null ? '' : encodeURIComponent(FunctionDefinitionId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a group.
		 * Delete greengrass/groups/{GroupId}
		 * @param {string} GroupId The ID of the Greengrass group.
		 * @return {DeleteGroupResponse} Success
		 */
		DeleteGroup(GroupId: string): Observable<DeleteGroupResponse> {
			return this.http.delete<DeleteGroupResponse>(this.baseUri + 'greengrass/groups/' + (GroupId == null ? '' : encodeURIComponent(GroupId)), {});
		}

		/**
		 * Retrieves information about a group.
		 * Get greengrass/groups/{GroupId}
		 * @param {string} GroupId The ID of the Greengrass group.
		 * @return {GetGroupResponse} Success
		 */
		GetGroup(GroupId: string): Observable<GetGroupResponse> {
			return this.http.get<GetGroupResponse>(this.baseUri + 'greengrass/groups/' + (GroupId == null ? '' : encodeURIComponent(GroupId)), {});
		}

		/**
		 * Updates a group.
		 * Put greengrass/groups/{GroupId}
		 * @param {string} GroupId The ID of the Greengrass group.
		 * @return {UpdateGroupResponse} Success
		 */
		UpdateGroup(GroupId: string, requestBody: UpdateGroupPutBody): Observable<UpdateGroupResponse> {
			return this.http.put<UpdateGroupResponse>(this.baseUri + 'greengrass/groups/' + (GroupId == null ? '' : encodeURIComponent(GroupId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a logger definition.
		 * Delete greengrass/definition/loggers/{LoggerDefinitionId}
		 * @param {string} LoggerDefinitionId The ID of the logger definition.
		 * @return {DeleteLoggerDefinitionResponse} Success
		 */
		DeleteLoggerDefinition(LoggerDefinitionId: string): Observable<DeleteLoggerDefinitionResponse> {
			return this.http.delete<DeleteLoggerDefinitionResponse>(this.baseUri + 'greengrass/definition/loggers/' + (LoggerDefinitionId == null ? '' : encodeURIComponent(LoggerDefinitionId)), {});
		}

		/**
		 * Retrieves information about a logger definition.
		 * Get greengrass/definition/loggers/{LoggerDefinitionId}
		 * @param {string} LoggerDefinitionId The ID of the logger definition.
		 * @return {GetLoggerDefinitionResponse} Success
		 */
		GetLoggerDefinition(LoggerDefinitionId: string): Observable<GetLoggerDefinitionResponse> {
			return this.http.get<GetLoggerDefinitionResponse>(this.baseUri + 'greengrass/definition/loggers/' + (LoggerDefinitionId == null ? '' : encodeURIComponent(LoggerDefinitionId)), {});
		}

		/**
		 * Updates a logger definition.
		 * Put greengrass/definition/loggers/{LoggerDefinitionId}
		 * @param {string} LoggerDefinitionId The ID of the logger definition.
		 * @return {UpdateLoggerDefinitionResponse} Success
		 */
		UpdateLoggerDefinition(LoggerDefinitionId: string, requestBody: UpdateLoggerDefinitionPutBody): Observable<UpdateLoggerDefinitionResponse> {
			return this.http.put<UpdateLoggerDefinitionResponse>(this.baseUri + 'greengrass/definition/loggers/' + (LoggerDefinitionId == null ? '' : encodeURIComponent(LoggerDefinitionId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a resource definition.
		 * Delete greengrass/definition/resources/{ResourceDefinitionId}
		 * @param {string} ResourceDefinitionId The ID of the resource definition.
		 * @return {DeleteResourceDefinitionResponse} Success
		 */
		DeleteResourceDefinition(ResourceDefinitionId: string): Observable<DeleteResourceDefinitionResponse> {
			return this.http.delete<DeleteResourceDefinitionResponse>(this.baseUri + 'greengrass/definition/resources/' + (ResourceDefinitionId == null ? '' : encodeURIComponent(ResourceDefinitionId)), {});
		}

		/**
		 * Retrieves information about a resource definition, including its creation time and latest version.
		 * Get greengrass/definition/resources/{ResourceDefinitionId}
		 * @param {string} ResourceDefinitionId The ID of the resource definition.
		 * @return {GetResourceDefinitionResponse} Success
		 */
		GetResourceDefinition(ResourceDefinitionId: string): Observable<GetResourceDefinitionResponse> {
			return this.http.get<GetResourceDefinitionResponse>(this.baseUri + 'greengrass/definition/resources/' + (ResourceDefinitionId == null ? '' : encodeURIComponent(ResourceDefinitionId)), {});
		}

		/**
		 * Updates a resource definition.
		 * Put greengrass/definition/resources/{ResourceDefinitionId}
		 * @param {string} ResourceDefinitionId The ID of the resource definition.
		 * @return {UpdateResourceDefinitionResponse} Success
		 */
		UpdateResourceDefinition(ResourceDefinitionId: string, requestBody: UpdateResourceDefinitionPutBody): Observable<UpdateResourceDefinitionResponse> {
			return this.http.put<UpdateResourceDefinitionResponse>(this.baseUri + 'greengrass/definition/resources/' + (ResourceDefinitionId == null ? '' : encodeURIComponent(ResourceDefinitionId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a subscription definition.
		 * Delete greengrass/definition/subscriptions/{SubscriptionDefinitionId}
		 * @param {string} SubscriptionDefinitionId The ID of the subscription definition.
		 * @return {DeleteSubscriptionDefinitionResponse} Success
		 */
		DeleteSubscriptionDefinition(SubscriptionDefinitionId: string): Observable<DeleteSubscriptionDefinitionResponse> {
			return this.http.delete<DeleteSubscriptionDefinitionResponse>(this.baseUri + 'greengrass/definition/subscriptions/' + (SubscriptionDefinitionId == null ? '' : encodeURIComponent(SubscriptionDefinitionId)), {});
		}

		/**
		 * Retrieves information about a subscription definition.
		 * Get greengrass/definition/subscriptions/{SubscriptionDefinitionId}
		 * @param {string} SubscriptionDefinitionId The ID of the subscription definition.
		 * @return {GetSubscriptionDefinitionResponse} Success
		 */
		GetSubscriptionDefinition(SubscriptionDefinitionId: string): Observable<GetSubscriptionDefinitionResponse> {
			return this.http.get<GetSubscriptionDefinitionResponse>(this.baseUri + 'greengrass/definition/subscriptions/' + (SubscriptionDefinitionId == null ? '' : encodeURIComponent(SubscriptionDefinitionId)), {});
		}

		/**
		 * Updates a subscription definition.
		 * Put greengrass/definition/subscriptions/{SubscriptionDefinitionId}
		 * @param {string} SubscriptionDefinitionId The ID of the subscription definition.
		 * @return {UpdateSubscriptionDefinitionResponse} Success
		 */
		UpdateSubscriptionDefinition(SubscriptionDefinitionId: string, requestBody: UpdateSubscriptionDefinitionPutBody): Observable<UpdateSubscriptionDefinitionResponse> {
			return this.http.put<UpdateSubscriptionDefinitionResponse>(this.baseUri + 'greengrass/definition/subscriptions/' + (SubscriptionDefinitionId == null ? '' : encodeURIComponent(SubscriptionDefinitionId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the status of a bulk deployment.
		 * Get greengrass/bulk/deployments/{BulkDeploymentId}/status
		 * @param {string} BulkDeploymentId The ID of the bulk deployment.
		 * @return {GetBulkDeploymentStatusResponse} Success
		 */
		GetBulkDeploymentStatus(BulkDeploymentId: string): Observable<GetBulkDeploymentStatusResponse> {
			return this.http.get<GetBulkDeploymentStatusResponse>(this.baseUri + 'greengrass/bulk/deployments/' + (BulkDeploymentId == null ? '' : encodeURIComponent(BulkDeploymentId)) + '/status', {});
		}

		/**
		 * Retrieves the connectivity information for a core.
		 * Get greengrass/things/{ThingName}/connectivityInfo
		 * @param {string} ThingName The thing name.
		 * @return {GetConnectivityInfoResponse} Success
		 */
		GetConnectivityInfo(ThingName: string): Observable<GetConnectivityInfoResponse> {
			return this.http.get<GetConnectivityInfoResponse>(this.baseUri + 'greengrass/things/' + (ThingName == null ? '' : encodeURIComponent(ThingName)) + '/connectivityInfo', {});
		}

		/**
		 * Updates the connectivity information for the core. Any devices that belong to the group which has this core will receive this information in order to find the location of the core and connect to it.
		 * Put greengrass/things/{ThingName}/connectivityInfo
		 * @param {string} ThingName The thing name.
		 * @return {UpdateConnectivityInfoResponse} Success
		 */
		UpdateConnectivityInfo(ThingName: string, requestBody: UpdateConnectivityInfoPutBody): Observable<UpdateConnectivityInfoResponse> {
			return this.http.put<UpdateConnectivityInfoResponse>(this.baseUri + 'greengrass/things/' + (ThingName == null ? '' : encodeURIComponent(ThingName)) + '/connectivityInfo', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves information about a connector definition version, including the connectors that the version contains. Connectors are prebuilt modules that interact with local infrastructure, device protocols, AWS, and other cloud services.
		 * Get greengrass/definition/connectors/{ConnectorDefinitionId}/versions/{ConnectorDefinitionVersionId}
		 * @param {string} ConnectorDefinitionId The ID of the connector definition.
		 * @param {string} ConnectorDefinitionVersionId The ID of the connector definition version. This value maps to the ''Version'' property of the corresponding ''VersionInformation'' object, which is returned by ''ListConnectorDefinitionVersions'' requests. If the version is the last one that was associated with a connector definition, the value also maps to the ''LatestVersion'' property of the corresponding ''DefinitionInformation'' object.
		 * @param {string} NextToken The token for the next set of results, or ''null'' if there are no additional results.
		 * @return {GetConnectorDefinitionVersionResponse} Success
		 */
		GetConnectorDefinitionVersion(ConnectorDefinitionId: string, ConnectorDefinitionVersionId: string, NextToken: string | null | undefined): Observable<GetConnectorDefinitionVersionResponse> {
			return this.http.get<GetConnectorDefinitionVersionResponse>(this.baseUri + 'greengrass/definition/connectors/' + (ConnectorDefinitionId == null ? '' : encodeURIComponent(ConnectorDefinitionId)) + '/versions/' + (ConnectorDefinitionVersionId == null ? '' : encodeURIComponent(ConnectorDefinitionVersionId)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Retrieves information about a core definition version.
		 * Get greengrass/definition/cores/{CoreDefinitionId}/versions/{CoreDefinitionVersionId}
		 * @param {string} CoreDefinitionId The ID of the core definition.
		 * @param {string} CoreDefinitionVersionId The ID of the core definition version. This value maps to the ''Version'' property of the corresponding ''VersionInformation'' object, which is returned by ''ListCoreDefinitionVersions'' requests. If the version is the last one that was associated with a core definition, the value also maps to the ''LatestVersion'' property of the corresponding ''DefinitionInformation'' object.
		 * @return {GetCoreDefinitionVersionResponse} Success
		 */
		GetCoreDefinitionVersion(CoreDefinitionId: string, CoreDefinitionVersionId: string): Observable<GetCoreDefinitionVersionResponse> {
			return this.http.get<GetCoreDefinitionVersionResponse>(this.baseUri + 'greengrass/definition/cores/' + (CoreDefinitionId == null ? '' : encodeURIComponent(CoreDefinitionId)) + '/versions/' + (CoreDefinitionVersionId == null ? '' : encodeURIComponent(CoreDefinitionVersionId)), {});
		}

		/**
		 * Returns the status of a deployment.
		 * Get greengrass/groups/{GroupId}/deployments/{DeploymentId}/status
		 * @param {string} DeploymentId The ID of the deployment.
		 * @param {string} GroupId The ID of the Greengrass group.
		 * @return {GetDeploymentStatusResponse} Success
		 */
		GetDeploymentStatus(DeploymentId: string, GroupId: string): Observable<GetDeploymentStatusResponse> {
			return this.http.get<GetDeploymentStatusResponse>(this.baseUri + 'greengrass/groups/' + (GroupId == null ? '' : encodeURIComponent(GroupId)) + '/deployments/' + (DeploymentId == null ? '' : encodeURIComponent(DeploymentId)) + '/status', {});
		}

		/**
		 * Retrieves information about a device definition version.
		 * Get greengrass/definition/devices/{DeviceDefinitionId}/versions/{DeviceDefinitionVersionId}
		 * @param {string} DeviceDefinitionId The ID of the device definition.
		 * @param {string} DeviceDefinitionVersionId The ID of the device definition version. This value maps to the ''Version'' property of the corresponding ''VersionInformation'' object, which is returned by ''ListDeviceDefinitionVersions'' requests. If the version is the last one that was associated with a device definition, the value also maps to the ''LatestVersion'' property of the corresponding ''DefinitionInformation'' object.
		 * @param {string} NextToken The token for the next set of results, or ''null'' if there are no additional results.
		 * @return {GetDeviceDefinitionVersionResponse} Success
		 */
		GetDeviceDefinitionVersion(DeviceDefinitionId: string, DeviceDefinitionVersionId: string, NextToken: string | null | undefined): Observable<GetDeviceDefinitionVersionResponse> {
			return this.http.get<GetDeviceDefinitionVersionResponse>(this.baseUri + 'greengrass/definition/devices/' + (DeviceDefinitionId == null ? '' : encodeURIComponent(DeviceDefinitionId)) + '/versions/' + (DeviceDefinitionVersionId == null ? '' : encodeURIComponent(DeviceDefinitionVersionId)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Retrieves information about a Lambda function definition version, including which Lambda functions are included in the version and their configurations.
		 * Get greengrass/definition/functions/{FunctionDefinitionId}/versions/{FunctionDefinitionVersionId}
		 * @param {string} FunctionDefinitionId The ID of the Lambda function definition.
		 * @param {string} FunctionDefinitionVersionId The ID of the function definition version. This value maps to the ''Version'' property of the corresponding ''VersionInformation'' object, which is returned by ''ListFunctionDefinitionVersions'' requests. If the version is the last one that was associated with a function definition, the value also maps to the ''LatestVersion'' property of the corresponding ''DefinitionInformation'' object.
		 * @param {string} NextToken The token for the next set of results, or ''null'' if there are no additional results.
		 * @return {GetFunctionDefinitionVersionResponse} Success
		 */
		GetFunctionDefinitionVersion(FunctionDefinitionId: string, FunctionDefinitionVersionId: string, NextToken: string | null | undefined): Observable<GetFunctionDefinitionVersionResponse> {
			return this.http.get<GetFunctionDefinitionVersionResponse>(this.baseUri + 'greengrass/definition/functions/' + (FunctionDefinitionId == null ? '' : encodeURIComponent(FunctionDefinitionId)) + '/versions/' + (FunctionDefinitionVersionId == null ? '' : encodeURIComponent(FunctionDefinitionVersionId)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Retreives the CA associated with a group. Returns the public key of the CA.
		 * Get greengrass/groups/{GroupId}/certificateauthorities/{CertificateAuthorityId}
		 * @param {string} CertificateAuthorityId The ID of the certificate authority.
		 * @param {string} GroupId The ID of the Greengrass group.
		 * @return {GetGroupCertificateAuthorityResponse} Success
		 */
		GetGroupCertificateAuthority(CertificateAuthorityId: string, GroupId: string): Observable<GetGroupCertificateAuthorityResponse> {
			return this.http.get<GetGroupCertificateAuthorityResponse>(this.baseUri + 'greengrass/groups/' + (GroupId == null ? '' : encodeURIComponent(GroupId)) + '/certificateauthorities/' + (CertificateAuthorityId == null ? '' : encodeURIComponent(CertificateAuthorityId)), {});
		}

		/**
		 * Retrieves the current configuration for the CA used by the group.
		 * Get greengrass/groups/{GroupId}/certificateauthorities/configuration/expiry
		 * @param {string} GroupId The ID of the Greengrass group.
		 * @return {GetGroupCertificateConfigurationResponse} Success
		 */
		GetGroupCertificateConfiguration(GroupId: string): Observable<GetGroupCertificateConfigurationResponse> {
			return this.http.get<GetGroupCertificateConfigurationResponse>(this.baseUri + 'greengrass/groups/' + (GroupId == null ? '' : encodeURIComponent(GroupId)) + '/certificateauthorities/configuration/expiry', {});
		}

		/**
		 * Updates the Certificate expiry time for a group.
		 * Put greengrass/groups/{GroupId}/certificateauthorities/configuration/expiry
		 * @param {string} GroupId The ID of the Greengrass group.
		 * @return {UpdateGroupCertificateConfigurationResponse} Success
		 */
		UpdateGroupCertificateConfiguration(GroupId: string, requestBody: UpdateGroupCertificateConfigurationPutBody): Observable<UpdateGroupCertificateConfigurationResponse> {
			return this.http.put<UpdateGroupCertificateConfigurationResponse>(this.baseUri + 'greengrass/groups/' + (GroupId == null ? '' : encodeURIComponent(GroupId)) + '/certificateauthorities/configuration/expiry', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves information about a group version.
		 * Get greengrass/groups/{GroupId}/versions/{GroupVersionId}
		 * @param {string} GroupId The ID of the Greengrass group.
		 * @param {string} GroupVersionId The ID of the group version. This value maps to the ''Version'' property of the corresponding ''VersionInformation'' object, which is returned by ''ListGroupVersions'' requests. If the version is the last one that was associated with a group, the value also maps to the ''LatestVersion'' property of the corresponding ''GroupInformation'' object.
		 * @return {GetGroupVersionResponse} Success
		 */
		GetGroupVersion(GroupId: string, GroupVersionId: string): Observable<GetGroupVersionResponse> {
			return this.http.get<GetGroupVersionResponse>(this.baseUri + 'greengrass/groups/' + (GroupId == null ? '' : encodeURIComponent(GroupId)) + '/versions/' + (GroupVersionId == null ? '' : encodeURIComponent(GroupVersionId)), {});
		}

		/**
		 * Retrieves information about a logger definition version.
		 * Get greengrass/definition/loggers/{LoggerDefinitionId}/versions/{LoggerDefinitionVersionId}
		 * @param {string} LoggerDefinitionId The ID of the logger definition.
		 * @param {string} LoggerDefinitionVersionId The ID of the logger definition version. This value maps to the ''Version'' property of the corresponding ''VersionInformation'' object, which is returned by ''ListLoggerDefinitionVersions'' requests. If the version is the last one that was associated with a logger definition, the value also maps to the ''LatestVersion'' property of the corresponding ''DefinitionInformation'' object.
		 * @param {string} NextToken The token for the next set of results, or ''null'' if there are no additional results.
		 * @return {GetLoggerDefinitionVersionResponse} Success
		 */
		GetLoggerDefinitionVersion(LoggerDefinitionId: string, LoggerDefinitionVersionId: string, NextToken: string | null | undefined): Observable<GetLoggerDefinitionVersionResponse> {
			return this.http.get<GetLoggerDefinitionVersionResponse>(this.baseUri + 'greengrass/definition/loggers/' + (LoggerDefinitionId == null ? '' : encodeURIComponent(LoggerDefinitionId)) + '/versions/' + (LoggerDefinitionVersionId == null ? '' : encodeURIComponent(LoggerDefinitionVersionId)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Retrieves information about a resource definition version, including which resources are included in the version.
		 * Get greengrass/definition/resources/{ResourceDefinitionId}/versions/{ResourceDefinitionVersionId}
		 * @param {string} ResourceDefinitionId The ID of the resource definition.
		 * @param {string} ResourceDefinitionVersionId The ID of the resource definition version. This value maps to the ''Version'' property of the corresponding ''VersionInformation'' object, which is returned by ''ListResourceDefinitionVersions'' requests. If the version is the last one that was associated with a resource definition, the value also maps to the ''LatestVersion'' property of the corresponding ''DefinitionInformation'' object.
		 * @return {GetResourceDefinitionVersionResponse} Success
		 */
		GetResourceDefinitionVersion(ResourceDefinitionId: string, ResourceDefinitionVersionId: string): Observable<GetResourceDefinitionVersionResponse> {
			return this.http.get<GetResourceDefinitionVersionResponse>(this.baseUri + 'greengrass/definition/resources/' + (ResourceDefinitionId == null ? '' : encodeURIComponent(ResourceDefinitionId)) + '/versions/' + (ResourceDefinitionVersionId == null ? '' : encodeURIComponent(ResourceDefinitionVersionId)), {});
		}

		/**
		 * Retrieves information about a subscription definition version.
		 * Get greengrass/definition/subscriptions/{SubscriptionDefinitionId}/versions/{SubscriptionDefinitionVersionId}
		 * @param {string} NextToken The token for the next set of results, or ''null'' if there are no additional results.
		 * @param {string} SubscriptionDefinitionId The ID of the subscription definition.
		 * @param {string} SubscriptionDefinitionVersionId The ID of the subscription definition version. This value maps to the ''Version'' property of the corresponding ''VersionInformation'' object, which is returned by ''ListSubscriptionDefinitionVersions'' requests. If the version is the last one that was associated with a subscription definition, the value also maps to the ''LatestVersion'' property of the corresponding ''DefinitionInformation'' object.
		 * @return {GetSubscriptionDefinitionVersionResponse} Success
		 */
		GetSubscriptionDefinitionVersion(NextToken: string | null | undefined, SubscriptionDefinitionId: string, SubscriptionDefinitionVersionId: string): Observable<GetSubscriptionDefinitionVersionResponse> {
			return this.http.get<GetSubscriptionDefinitionVersionResponse>(this.baseUri + 'greengrass/definition/subscriptions/' + (SubscriptionDefinitionId == null ? '' : encodeURIComponent(SubscriptionDefinitionId)) + '/versions/' + (SubscriptionDefinitionVersionId == null ? '' : encodeURIComponent(SubscriptionDefinitionVersionId)) + '?NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Get the runtime configuration of a thing.
		 * Get greengrass/things/{ThingName}/runtimeconfig
		 * @param {string} ThingName The thing name.
		 * @return {GetThingRuntimeConfigurationResponse} Success
		 */
		GetThingRuntimeConfiguration(ThingName: string): Observable<GetThingRuntimeConfigurationResponse> {
			return this.http.get<GetThingRuntimeConfigurationResponse>(this.baseUri + 'greengrass/things/' + (ThingName == null ? '' : encodeURIComponent(ThingName)) + '/runtimeconfig', {});
		}

		/**
		 * Updates the runtime configuration of a thing.
		 * Put greengrass/things/{ThingName}/runtimeconfig
		 * @param {string} ThingName The thing name.
		 * @return {UpdateThingRuntimeConfigurationResponse} Success
		 */
		UpdateThingRuntimeConfiguration(ThingName: string, requestBody: UpdateThingRuntimeConfigurationPutBody): Observable<UpdateThingRuntimeConfigurationResponse> {
			return this.http.put<UpdateThingRuntimeConfigurationResponse>(this.baseUri + 'greengrass/things/' + (ThingName == null ? '' : encodeURIComponent(ThingName)) + '/runtimeconfig', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets a paginated list of the deployments that have been started in a bulk deployment operation, and their current deployment status.
		 * Get greengrass/bulk/deployments/{BulkDeploymentId}/detailed-reports
		 * @param {string} BulkDeploymentId The ID of the bulk deployment.
		 * @param {string} MaxResults The maximum number of results to be returned per request.
		 * @param {string} NextToken The token for the next set of results, or ''null'' if there are no additional results.
		 * @return {ListBulkDeploymentDetailedReportsResponse} Success
		 */
		ListBulkDeploymentDetailedReports(BulkDeploymentId: string, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListBulkDeploymentDetailedReportsResponse> {
			return this.http.get<ListBulkDeploymentDetailedReportsResponse>(this.baseUri + 'greengrass/bulk/deployments/' + (BulkDeploymentId == null ? '' : encodeURIComponent(BulkDeploymentId)) + '/detailed-reports&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Returns a list of bulk deployments.
		 * Get greengrass/bulk/deployments
		 * @param {string} MaxResults The maximum number of results to be returned per request.
		 * @param {string} NextToken The token for the next set of results, or ''null'' if there are no additional results.
		 * @return {ListBulkDeploymentsResponse} Success
		 */
		ListBulkDeployments(MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListBulkDeploymentsResponse> {
			return this.http.get<ListBulkDeploymentsResponse>(this.baseUri + 'greengrass/bulk/deployments?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Deploys multiple groups in one operation. This action starts the bulk deployment of a specified set of group versions. Each group version deployment will be triggered with an adaptive rate that has a fixed upper limit. We recommend that you include an ''X-Amzn-Client-Token'' token in every ''StartBulkDeployment'' request. These requests are idempotent with respect to the token and the request parameters.
		 * Post greengrass/bulk/deployments
		 * @return {StartBulkDeploymentResponse} Success
		 */
		StartBulkDeployment(requestBody: StartBulkDeploymentPostBody): Observable<StartBulkDeploymentResponse> {
			return this.http.post<StartBulkDeploymentResponse>(this.baseUri + 'greengrass/bulk/deployments', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves a list of resource tags for a resource arn.
		 * Get tags/{resource_arn}
		 * @param {string} resource_arn The Amazon Resource Name (ARN) of the resource.
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(resource_arn: string): Observable<ListTagsForResourceResponse> {
			return this.http.get<ListTagsForResourceResponse>(this.baseUri + 'tags/{resource_arn}', {});
		}

		/**
		 * Adds tags to a Greengrass resource. Valid resources are 'Group', 'ConnectorDefinition', 'CoreDefinition', 'DeviceDefinition', 'FunctionDefinition', 'LoggerDefinition', 'SubscriptionDefinition', 'ResourceDefinition', and 'BulkDeployment'.
		 * Post tags/{resource_arn}
		 * @param {string} resource_arn The Amazon Resource Name (ARN) of the resource.
		 * @return {void} 
		 */
		TagResource(resource_arn: string, requestBody: TagResourcePostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'tags/{resource_arn}', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Resets a group's deployments.
		 * Post greengrass/groups/{GroupId}/deployments/$reset
		 * @param {string} GroupId The ID of the Greengrass group.
		 * @return {ResetDeploymentsResponse} Success
		 */
		ResetDeployments(GroupId: string, requestBody: ResetDeploymentsPostBody): Observable<ResetDeploymentsResponse> {
			return this.http.post<ResetDeploymentsResponse>(this.baseUri + 'greengrass/groups/' + (GroupId == null ? '' : encodeURIComponent(GroupId)) + '/deployments/$reset', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Stops the execution of a bulk deployment. This action returns a status of ''Stopping'' until the deployment is stopped. You cannot start a new bulk deployment while a previous deployment is in the ''Stopping'' state. This action doesn't rollback completed deployments or cancel pending deployments.
		 * Put greengrass/bulk/deployments/{BulkDeploymentId}/$stop
		 * @param {string} BulkDeploymentId The ID of the bulk deployment.
		 * @return {StopBulkDeploymentResponse} Success
		 */
		StopBulkDeployment(BulkDeploymentId: string): Observable<StopBulkDeploymentResponse> {
			return this.http.put<StopBulkDeploymentResponse>(this.baseUri + 'greengrass/bulk/deployments/' + (BulkDeploymentId == null ? '' : encodeURIComponent(BulkDeploymentId)) + '/$stop', null, {});
		}

		/**
		 * Remove resource tags from a Greengrass Resource.
		 * Delete tags/{resource_arn}#tagKeys
		 * @param {string} resource_arn The Amazon Resource Name (ARN) of the resource.
		 * @param {Array<string>} tagKeys An array of tag keys to delete
		 * @return {void} 
		 */
		UntagResource(resource_arn: string, tagKeys: Array<string>): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'tags/{resource_arn}#tagKeys?' + tagKeys.map(z => `tagKeys=${encodeURIComponent(z)}`).join('&'), { observe: 'response', responseType: 'text' });
		}
	}

	export interface AssociateRoleToGroupPutBody {

		/**
		 * The ARN of the role you wish to associate with this group. The existence of the role is not validated.
		 * Required
		 */
		RoleArn: string;
	}
	export interface AssociateRoleToGroupPutBodyFormProperties {

		/**
		 * The ARN of the role you wish to associate with this group. The existence of the role is not validated.
		 * Required
		 */
		RoleArn: FormControl<string | null | undefined>,
	}
	export function CreateAssociateRoleToGroupPutBodyFormGroup() {
		return new FormGroup<AssociateRoleToGroupPutBodyFormProperties>({
			RoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AssociateServiceRoleToAccountPutBody {

		/**
		 * The ARN of the service role you wish to associate with your account.
		 * Required
		 */
		RoleArn: string;
	}
	export interface AssociateServiceRoleToAccountPutBodyFormProperties {

		/**
		 * The ARN of the service role you wish to associate with your account.
		 * Required
		 */
		RoleArn: FormControl<string | null | undefined>,
	}
	export function CreateAssociateServiceRoleToAccountPutBodyFormGroup() {
		return new FormGroup<AssociateServiceRoleToAccountPutBodyFormProperties>({
			RoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateConnectorDefinitionPostBody {

		/** Information about the connector definition version, which is a container for connectors. */
		InitialVersion?: CreateConnectorDefinitionPostBodyInitialVersion;

		/** The name of the connector definition. */
		Name?: string | null;

		/** The key-value pair for the resource tag. */
		tags?: {[id: string]: string };
	}
	export interface CreateConnectorDefinitionPostBodyFormProperties {

		/** The name of the connector definition. */
		Name: FormControl<string | null | undefined>,

		/** The key-value pair for the resource tag. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateConnectorDefinitionPostBodyFormGroup() {
		return new FormGroup<CreateConnectorDefinitionPostBodyFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateConnectorDefinitionPostBodyInitialVersion {
		Connectors?: Array<Connector>;
	}
	export interface CreateConnectorDefinitionPostBodyInitialVersionFormProperties {
	}
	export function CreateCreateConnectorDefinitionPostBodyInitialVersionFormGroup() {
		return new FormGroup<CreateConnectorDefinitionPostBodyInitialVersionFormProperties>({
		});

	}

	export interface CreateConnectorDefinitionVersionPostBody {

		/** A list of references to connectors in this version, with their corresponding configuration settings. */
		Connectors?: Array<Connector>;
	}
	export interface CreateConnectorDefinitionVersionPostBodyFormProperties {
	}
	export function CreateCreateConnectorDefinitionVersionPostBodyFormGroup() {
		return new FormGroup<CreateConnectorDefinitionVersionPostBodyFormProperties>({
		});

	}

	export interface CreateCoreDefinitionPostBody {

		/** Information about a core definition version. */
		InitialVersion?: CreateCoreDefinitionPostBodyInitialVersion;

		/** The name of the core definition. */
		Name?: string | null;

		/** The key-value pair for the resource tag. */
		tags?: {[id: string]: string };
	}
	export interface CreateCoreDefinitionPostBodyFormProperties {

		/** The name of the core definition. */
		Name: FormControl<string | null | undefined>,

		/** The key-value pair for the resource tag. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateCoreDefinitionPostBodyFormGroup() {
		return new FormGroup<CreateCoreDefinitionPostBodyFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateCoreDefinitionPostBodyInitialVersion {
		Cores?: Array<Core>;
	}
	export interface CreateCoreDefinitionPostBodyInitialVersionFormProperties {
	}
	export function CreateCreateCoreDefinitionPostBodyInitialVersionFormGroup() {
		return new FormGroup<CreateCoreDefinitionPostBodyInitialVersionFormProperties>({
		});

	}

	export interface CreateCoreDefinitionVersionPostBody {

		/** A list of cores in the core definition version. */
		Cores?: Array<Core>;
	}
	export interface CreateCoreDefinitionVersionPostBodyFormProperties {
	}
	export function CreateCreateCoreDefinitionVersionPostBodyFormGroup() {
		return new FormGroup<CreateCoreDefinitionVersionPostBodyFormProperties>({
		});

	}

	export interface CreateDeploymentPostBody {

		/** The ID of the deployment if you wish to redeploy a previous deployment. */
		DeploymentId?: string | null;

		/**
		 * The type of deployment. When used for ''CreateDeployment'', only ''NewDeployment'' and ''Redeployment'' are valid.
		 * Required
		 */
		DeploymentType: DeploymentType;

		/** The ID of the group version to be deployed. */
		GroupVersionId?: string | null;
	}
	export interface CreateDeploymentPostBodyFormProperties {

		/** The ID of the deployment if you wish to redeploy a previous deployment. */
		DeploymentId: FormControl<string | null | undefined>,

		/**
		 * The type of deployment. When used for ''CreateDeployment'', only ''NewDeployment'' and ''Redeployment'' are valid.
		 * Required
		 */
		DeploymentType: FormControl<DeploymentType | null | undefined>,

		/** The ID of the group version to be deployed. */
		GroupVersionId: FormControl<string | null | undefined>,
	}
	export function CreateCreateDeploymentPostBodyFormGroup() {
		return new FormGroup<CreateDeploymentPostBodyFormProperties>({
			DeploymentId: new FormControl<string | null | undefined>(undefined),
			DeploymentType: new FormControl<DeploymentType | null | undefined>(undefined, [Validators.required]),
			GroupVersionId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateDeviceDefinitionPostBody {

		/** Information about a device definition version. */
		InitialVersion?: CreateDeviceDefinitionPostBodyInitialVersion;

		/** The name of the device definition. */
		Name?: string | null;

		/** The key-value pair for the resource tag. */
		tags?: {[id: string]: string };
	}
	export interface CreateDeviceDefinitionPostBodyFormProperties {

		/** The name of the device definition. */
		Name: FormControl<string | null | undefined>,

		/** The key-value pair for the resource tag. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateDeviceDefinitionPostBodyFormGroup() {
		return new FormGroup<CreateDeviceDefinitionPostBodyFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateDeviceDefinitionPostBodyInitialVersion {
		Devices?: Array<Device>;
	}
	export interface CreateDeviceDefinitionPostBodyInitialVersionFormProperties {
	}
	export function CreateCreateDeviceDefinitionPostBodyInitialVersionFormGroup() {
		return new FormGroup<CreateDeviceDefinitionPostBodyInitialVersionFormProperties>({
		});

	}

	export interface CreateDeviceDefinitionVersionPostBody {

		/** A list of devices in the definition version. */
		Devices?: Array<Device>;
	}
	export interface CreateDeviceDefinitionVersionPostBodyFormProperties {
	}
	export function CreateCreateDeviceDefinitionVersionPostBodyFormGroup() {
		return new FormGroup<CreateDeviceDefinitionVersionPostBodyFormProperties>({
		});

	}

	export interface CreateFunctionDefinitionPostBody {

		/** Information about a function definition version. */
		InitialVersion?: CreateFunctionDefinitionPostBodyInitialVersion;

		/** The name of the function definition. */
		Name?: string | null;

		/** The key-value pair for the resource tag. */
		tags?: {[id: string]: string };
	}
	export interface CreateFunctionDefinitionPostBodyFormProperties {

		/** The name of the function definition. */
		Name: FormControl<string | null | undefined>,

		/** The key-value pair for the resource tag. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateFunctionDefinitionPostBodyFormGroup() {
		return new FormGroup<CreateFunctionDefinitionPostBodyFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateFunctionDefinitionPostBodyInitialVersion {
		DefaultConfig?: FunctionDefaultConfig;
		Functions?: Array<Function>;
	}
	export interface CreateFunctionDefinitionPostBodyInitialVersionFormProperties {
	}
	export function CreateCreateFunctionDefinitionPostBodyInitialVersionFormGroup() {
		return new FormGroup<CreateFunctionDefinitionPostBodyInitialVersionFormProperties>({
		});

	}

	export interface CreateFunctionDefinitionVersionPostBody {

		/** The default configuration that applies to all Lambda functions in the group. Individual Lambda functions can override these settings. */
		DefaultConfig?: CreateFunctionDefinitionVersionPostBodyDefaultConfig;

		/** A list of Lambda functions in this function definition version. */
		Functions?: Array<Function>;
	}
	export interface CreateFunctionDefinitionVersionPostBodyFormProperties {
	}
	export function CreateCreateFunctionDefinitionVersionPostBodyFormGroup() {
		return new FormGroup<CreateFunctionDefinitionVersionPostBodyFormProperties>({
		});

	}

	export interface CreateFunctionDefinitionVersionPostBodyDefaultConfig {

		/** Configuration information that specifies how a Lambda function runs. */
		Execution?: FunctionDefaultExecutionConfig;
	}
	export interface CreateFunctionDefinitionVersionPostBodyDefaultConfigFormProperties {
	}
	export function CreateCreateFunctionDefinitionVersionPostBodyDefaultConfigFormGroup() {
		return new FormGroup<CreateFunctionDefinitionVersionPostBodyDefaultConfigFormProperties>({
		});

	}

	export interface CreateGroupPostBody {

		/** Information about a group version. */
		InitialVersion?: CreateGroupPostBodyInitialVersion;

		/**
		 * The name of the group.
		 * Required
		 */
		Name: string;

		/** The key-value pair for the resource tag. */
		tags?: {[id: string]: string };
	}
	export interface CreateGroupPostBodyFormProperties {

		/**
		 * The name of the group.
		 * Required
		 */
		Name: FormControl<string | null | undefined>,

		/** The key-value pair for the resource tag. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateGroupPostBodyFormGroup() {
		return new FormGroup<CreateGroupPostBodyFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateGroupPostBodyInitialVersion {
		ConnectorDefinitionVersionArn?: string;
		CoreDefinitionVersionArn?: string;
		DeviceDefinitionVersionArn?: string;
		FunctionDefinitionVersionArn?: string;
		LoggerDefinitionVersionArn?: string;
		ResourceDefinitionVersionArn?: string;
		SubscriptionDefinitionVersionArn?: string;
	}
	export interface CreateGroupPostBodyInitialVersionFormProperties {
		ConnectorDefinitionVersionArn: FormControl<string | null | undefined>,
		CoreDefinitionVersionArn: FormControl<string | null | undefined>,
		DeviceDefinitionVersionArn: FormControl<string | null | undefined>,
		FunctionDefinitionVersionArn: FormControl<string | null | undefined>,
		LoggerDefinitionVersionArn: FormControl<string | null | undefined>,
		ResourceDefinitionVersionArn: FormControl<string | null | undefined>,
		SubscriptionDefinitionVersionArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateGroupPostBodyInitialVersionFormGroup() {
		return new FormGroup<CreateGroupPostBodyInitialVersionFormProperties>({
			ConnectorDefinitionVersionArn: new FormControl<string | null | undefined>(undefined),
			CoreDefinitionVersionArn: new FormControl<string | null | undefined>(undefined),
			DeviceDefinitionVersionArn: new FormControl<string | null | undefined>(undefined),
			FunctionDefinitionVersionArn: new FormControl<string | null | undefined>(undefined),
			LoggerDefinitionVersionArn: new FormControl<string | null | undefined>(undefined),
			ResourceDefinitionVersionArn: new FormControl<string | null | undefined>(undefined),
			SubscriptionDefinitionVersionArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateGroupVersionPostBody {

		/** The ARN of the connector definition version for this group. */
		ConnectorDefinitionVersionArn?: string | null;

		/** The ARN of the core definition version for this group. */
		CoreDefinitionVersionArn?: string | null;

		/** The ARN of the device definition version for this group. */
		DeviceDefinitionVersionArn?: string | null;

		/** The ARN of the function definition version for this group. */
		FunctionDefinitionVersionArn?: string | null;

		/** The ARN of the logger definition version for this group. */
		LoggerDefinitionVersionArn?: string | null;

		/** The ARN of the resource definition version for this group. */
		ResourceDefinitionVersionArn?: string | null;

		/** The ARN of the subscription definition version for this group. */
		SubscriptionDefinitionVersionArn?: string | null;
	}
	export interface CreateGroupVersionPostBodyFormProperties {

		/** The ARN of the connector definition version for this group. */
		ConnectorDefinitionVersionArn: FormControl<string | null | undefined>,

		/** The ARN of the core definition version for this group. */
		CoreDefinitionVersionArn: FormControl<string | null | undefined>,

		/** The ARN of the device definition version for this group. */
		DeviceDefinitionVersionArn: FormControl<string | null | undefined>,

		/** The ARN of the function definition version for this group. */
		FunctionDefinitionVersionArn: FormControl<string | null | undefined>,

		/** The ARN of the logger definition version for this group. */
		LoggerDefinitionVersionArn: FormControl<string | null | undefined>,

		/** The ARN of the resource definition version for this group. */
		ResourceDefinitionVersionArn: FormControl<string | null | undefined>,

		/** The ARN of the subscription definition version for this group. */
		SubscriptionDefinitionVersionArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateGroupVersionPostBodyFormGroup() {
		return new FormGroup<CreateGroupVersionPostBodyFormProperties>({
			ConnectorDefinitionVersionArn: new FormControl<string | null | undefined>(undefined),
			CoreDefinitionVersionArn: new FormControl<string | null | undefined>(undefined),
			DeviceDefinitionVersionArn: new FormControl<string | null | undefined>(undefined),
			FunctionDefinitionVersionArn: new FormControl<string | null | undefined>(undefined),
			LoggerDefinitionVersionArn: new FormControl<string | null | undefined>(undefined),
			ResourceDefinitionVersionArn: new FormControl<string | null | undefined>(undefined),
			SubscriptionDefinitionVersionArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateLoggerDefinitionPostBody {

		/** Information about a logger definition version. */
		InitialVersion?: CreateLoggerDefinitionPostBodyInitialVersion;

		/** The name of the logger definition. */
		Name?: string | null;

		/** The key-value pair for the resource tag. */
		tags?: {[id: string]: string };
	}
	export interface CreateLoggerDefinitionPostBodyFormProperties {

		/** The name of the logger definition. */
		Name: FormControl<string | null | undefined>,

		/** The key-value pair for the resource tag. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateLoggerDefinitionPostBodyFormGroup() {
		return new FormGroup<CreateLoggerDefinitionPostBodyFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateLoggerDefinitionPostBodyInitialVersion {
		Loggers?: Array<Logger>;
	}
	export interface CreateLoggerDefinitionPostBodyInitialVersionFormProperties {
	}
	export function CreateCreateLoggerDefinitionPostBodyInitialVersionFormGroup() {
		return new FormGroup<CreateLoggerDefinitionPostBodyInitialVersionFormProperties>({
		});

	}

	export interface CreateLoggerDefinitionVersionPostBody {

		/** A list of loggers. */
		Loggers?: Array<Logger>;
	}
	export interface CreateLoggerDefinitionVersionPostBodyFormProperties {
	}
	export function CreateCreateLoggerDefinitionVersionPostBodyFormGroup() {
		return new FormGroup<CreateLoggerDefinitionVersionPostBodyFormProperties>({
		});

	}

	export interface CreateResourceDefinitionPostBody {

		/** Information about a resource definition version. */
		InitialVersion?: CreateResourceDefinitionPostBodyInitialVersion;

		/** The name of the resource definition. */
		Name?: string | null;

		/** The key-value pair for the resource tag. */
		tags?: {[id: string]: string };
	}
	export interface CreateResourceDefinitionPostBodyFormProperties {

		/** The name of the resource definition. */
		Name: FormControl<string | null | undefined>,

		/** The key-value pair for the resource tag. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateResourceDefinitionPostBodyFormGroup() {
		return new FormGroup<CreateResourceDefinitionPostBodyFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateResourceDefinitionPostBodyInitialVersion {
		Resources?: Array<Resource>;
	}
	export interface CreateResourceDefinitionPostBodyInitialVersionFormProperties {
	}
	export function CreateCreateResourceDefinitionPostBodyInitialVersionFormGroup() {
		return new FormGroup<CreateResourceDefinitionPostBodyInitialVersionFormProperties>({
		});

	}

	export interface CreateResourceDefinitionVersionPostBody {

		/** A list of resources. */
		Resources?: Array<Resource>;
	}
	export interface CreateResourceDefinitionVersionPostBodyFormProperties {
	}
	export function CreateCreateResourceDefinitionVersionPostBodyFormGroup() {
		return new FormGroup<CreateResourceDefinitionVersionPostBodyFormProperties>({
		});

	}

	export interface CreateSoftwareUpdateJobPostBody {

		/**
		 * The IAM Role that Greengrass will use to create pre-signed URLs pointing towards the update artifact.
		 * Required
		 */
		S3UrlSignerRole: string;

		/**
		 * The piece of software on the Greengrass core that will be updated.
		 * Required
		 */
		SoftwareToUpdate: SoftwareToUpdate;

		/** The minimum level of log statements that should be logged by the OTA Agent during an update. */
		UpdateAgentLogLevel?: UpdateAgentLogLevel | null;

		/**
		 * The ARNs of the targets (IoT things or IoT thing groups) that this update will be applied to.
		 * Required
		 */
		UpdateTargets: Array<string>;

		/**
		 * The architecture of the cores which are the targets of an update.
		 * Required
		 */
		UpdateTargetsArchitecture: UpdateTargetsArchitecture;

		/**
		 * The operating system of the cores which are the targets of an update.
		 * Required
		 */
		UpdateTargetsOperatingSystem: UpdateTargetsOperatingSystem;
	}
	export interface CreateSoftwareUpdateJobPostBodyFormProperties {

		/**
		 * The IAM Role that Greengrass will use to create pre-signed URLs pointing towards the update artifact.
		 * Required
		 */
		S3UrlSignerRole: FormControl<string | null | undefined>,

		/**
		 * The piece of software on the Greengrass core that will be updated.
		 * Required
		 */
		SoftwareToUpdate: FormControl<SoftwareToUpdate | null | undefined>,

		/** The minimum level of log statements that should be logged by the OTA Agent during an update. */
		UpdateAgentLogLevel: FormControl<UpdateAgentLogLevel | null | undefined>,

		/**
		 * The architecture of the cores which are the targets of an update.
		 * Required
		 */
		UpdateTargetsArchitecture: FormControl<UpdateTargetsArchitecture | null | undefined>,

		/**
		 * The operating system of the cores which are the targets of an update.
		 * Required
		 */
		UpdateTargetsOperatingSystem: FormControl<UpdateTargetsOperatingSystem | null | undefined>,
	}
	export function CreateCreateSoftwareUpdateJobPostBodyFormGroup() {
		return new FormGroup<CreateSoftwareUpdateJobPostBodyFormProperties>({
			S3UrlSignerRole: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SoftwareToUpdate: new FormControl<SoftwareToUpdate | null | undefined>(undefined, [Validators.required]),
			UpdateAgentLogLevel: new FormControl<UpdateAgentLogLevel | null | undefined>(undefined),
			UpdateTargetsArchitecture: new FormControl<UpdateTargetsArchitecture | null | undefined>(undefined, [Validators.required]),
			UpdateTargetsOperatingSystem: new FormControl<UpdateTargetsOperatingSystem | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateSubscriptionDefinitionPostBody {

		/** Information about a subscription definition version. */
		InitialVersion?: CreateSubscriptionDefinitionPostBodyInitialVersion;

		/** The name of the subscription definition. */
		Name?: string | null;

		/** The key-value pair for the resource tag. */
		tags?: {[id: string]: string };
	}
	export interface CreateSubscriptionDefinitionPostBodyFormProperties {

		/** The name of the subscription definition. */
		Name: FormControl<string | null | undefined>,

		/** The key-value pair for the resource tag. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateSubscriptionDefinitionPostBodyFormGroup() {
		return new FormGroup<CreateSubscriptionDefinitionPostBodyFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateSubscriptionDefinitionPostBodyInitialVersion {
		Subscriptions?: Array<Subscription>;
	}
	export interface CreateSubscriptionDefinitionPostBodyInitialVersionFormProperties {
	}
	export function CreateCreateSubscriptionDefinitionPostBodyInitialVersionFormGroup() {
		return new FormGroup<CreateSubscriptionDefinitionPostBodyInitialVersionFormProperties>({
		});

	}

	export interface CreateSubscriptionDefinitionVersionPostBody {

		/** A list of subscriptions. */
		Subscriptions?: Array<Subscription>;
	}
	export interface CreateSubscriptionDefinitionVersionPostBodyFormProperties {
	}
	export function CreateCreateSubscriptionDefinitionVersionPostBodyFormGroup() {
		return new FormGroup<CreateSubscriptionDefinitionVersionPostBodyFormProperties>({
		});

	}

	export interface UpdateConnectorDefinitionPutBody {

		/** The name of the definition. */
		Name?: string | null;
	}
	export interface UpdateConnectorDefinitionPutBodyFormProperties {

		/** The name of the definition. */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateUpdateConnectorDefinitionPutBodyFormGroup() {
		return new FormGroup<UpdateConnectorDefinitionPutBodyFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateCoreDefinitionPutBody {

		/** The name of the definition. */
		Name?: string | null;
	}
	export interface UpdateCoreDefinitionPutBodyFormProperties {

		/** The name of the definition. */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateUpdateCoreDefinitionPutBodyFormGroup() {
		return new FormGroup<UpdateCoreDefinitionPutBodyFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateDeviceDefinitionPutBody {

		/** The name of the definition. */
		Name?: string | null;
	}
	export interface UpdateDeviceDefinitionPutBodyFormProperties {

		/** The name of the definition. */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateUpdateDeviceDefinitionPutBodyFormGroup() {
		return new FormGroup<UpdateDeviceDefinitionPutBodyFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateFunctionDefinitionPutBody {

		/** The name of the definition. */
		Name?: string | null;
	}
	export interface UpdateFunctionDefinitionPutBodyFormProperties {

		/** The name of the definition. */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateUpdateFunctionDefinitionPutBodyFormGroup() {
		return new FormGroup<UpdateFunctionDefinitionPutBodyFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateGroupPutBody {

		/** The name of the definition. */
		Name?: string | null;
	}
	export interface UpdateGroupPutBodyFormProperties {

		/** The name of the definition. */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateUpdateGroupPutBodyFormGroup() {
		return new FormGroup<UpdateGroupPutBodyFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateLoggerDefinitionPutBody {

		/** The name of the definition. */
		Name?: string | null;
	}
	export interface UpdateLoggerDefinitionPutBodyFormProperties {

		/** The name of the definition. */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateUpdateLoggerDefinitionPutBodyFormGroup() {
		return new FormGroup<UpdateLoggerDefinitionPutBodyFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateResourceDefinitionPutBody {

		/** The name of the definition. */
		Name?: string | null;
	}
	export interface UpdateResourceDefinitionPutBodyFormProperties {

		/** The name of the definition. */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateUpdateResourceDefinitionPutBodyFormGroup() {
		return new FormGroup<UpdateResourceDefinitionPutBodyFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateSubscriptionDefinitionPutBody {

		/** The name of the definition. */
		Name?: string | null;
	}
	export interface UpdateSubscriptionDefinitionPutBodyFormProperties {

		/** The name of the definition. */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateUpdateSubscriptionDefinitionPutBodyFormGroup() {
		return new FormGroup<UpdateSubscriptionDefinitionPutBodyFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateConnectivityInfoPutBody {

		/** A list of connectivity info. */
		ConnectivityInfo?: Array<ConnectivityInfo>;
	}
	export interface UpdateConnectivityInfoPutBodyFormProperties {
	}
	export function CreateUpdateConnectivityInfoPutBodyFormGroup() {
		return new FormGroup<UpdateConnectivityInfoPutBodyFormProperties>({
		});

	}

	export interface UpdateGroupCertificateConfigurationPutBody {

		/** The amount of time remaining before the certificate expires, in milliseconds. */
		CertificateExpiryInMilliseconds?: string | null;
	}
	export interface UpdateGroupCertificateConfigurationPutBodyFormProperties {

		/** The amount of time remaining before the certificate expires, in milliseconds. */
		CertificateExpiryInMilliseconds: FormControl<string | null | undefined>,
	}
	export function CreateUpdateGroupCertificateConfigurationPutBodyFormGroup() {
		return new FormGroup<UpdateGroupCertificateConfigurationPutBodyFormProperties>({
			CertificateExpiryInMilliseconds: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateThingRuntimeConfigurationPutBody {

		/** Configuration settings for running telemetry. */
		TelemetryConfiguration?: UpdateThingRuntimeConfigurationPutBodyTelemetryConfiguration;
	}
	export interface UpdateThingRuntimeConfigurationPutBodyFormProperties {
	}
	export function CreateUpdateThingRuntimeConfigurationPutBodyFormGroup() {
		return new FormGroup<UpdateThingRuntimeConfigurationPutBodyFormProperties>({
		});

	}

	export interface UpdateThingRuntimeConfigurationPutBodyTelemetryConfiguration {
		Telemetry?: Telemetry;
	}
	export interface UpdateThingRuntimeConfigurationPutBodyTelemetryConfigurationFormProperties {
		Telemetry: FormControl<Telemetry | null | undefined>,
	}
	export function CreateUpdateThingRuntimeConfigurationPutBodyTelemetryConfigurationFormGroup() {
		return new FormGroup<UpdateThingRuntimeConfigurationPutBodyTelemetryConfigurationFormProperties>({
			Telemetry: new FormControl<Telemetry | null | undefined>(undefined),
		});

	}

	export interface StartBulkDeploymentPostBody {

		/**
		 * The ARN of the execution role to associate with the bulk deployment operation. This IAM role must allow the ''greengrass:CreateDeployment'' action for all group versions that are listed in the input file. This IAM role must have access to the S3 bucket containing the input file.
		 * Required
		 */
		ExecutionRoleArn: string;

		/**
		 * The URI of the input file contained in the S3 bucket. The execution role must have ''getObject'' permissions on this bucket to access the input file. The input file is a JSON-serialized, line delimited file with UTF-8 encoding that provides a list of group and version IDs and the deployment type. This file must be less than 100 MB. Currently, AWS IoT Greengrass supports only ''NewDeployment'' deployment types.
		 * Required
		 */
		InputFileUri: string;

		/** The key-value pair for the resource tag. */
		tags?: {[id: string]: string };
	}
	export interface StartBulkDeploymentPostBodyFormProperties {

		/**
		 * The ARN of the execution role to associate with the bulk deployment operation. This IAM role must allow the ''greengrass:CreateDeployment'' action for all group versions that are listed in the input file. This IAM role must have access to the S3 bucket containing the input file.
		 * Required
		 */
		ExecutionRoleArn: FormControl<string | null | undefined>,

		/**
		 * The URI of the input file contained in the S3 bucket. The execution role must have ''getObject'' permissions on this bucket to access the input file. The input file is a JSON-serialized, line delimited file with UTF-8 encoding that provides a list of group and version IDs and the deployment type. This file must be less than 100 MB. Currently, AWS IoT Greengrass supports only ''NewDeployment'' deployment types.
		 * Required
		 */
		InputFileUri: FormControl<string | null | undefined>,

		/** The key-value pair for the resource tag. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateStartBulkDeploymentPostBodyFormGroup() {
		return new FormGroup<StartBulkDeploymentPostBodyFormProperties>({
			ExecutionRoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			InputFileUri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface TagResourcePostBody {

		/** The key-value pair for the resource tag. */
		tags?: {[id: string]: string };
	}
	export interface TagResourcePostBodyFormProperties {

		/** The key-value pair for the resource tag. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateTagResourcePostBodyFormGroup() {
		return new FormGroup<TagResourcePostBodyFormProperties>({
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface ResetDeploymentsPostBody {

		/** If true, performs a best-effort only core reset. */
		Force?: boolean | null;
	}
	export interface ResetDeploymentsPostBodyFormProperties {

		/** If true, performs a best-effort only core reset. */
		Force: FormControl<boolean | null | undefined>,
	}
	export function CreateResetDeploymentsPostBodyFormGroup() {
		return new FormGroup<ResetDeploymentsPostBodyFormProperties>({
			Force: new FormControl<boolean | null | undefined>(undefined),
		});

	}

}

