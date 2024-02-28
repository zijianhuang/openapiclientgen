import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** The custom setup of running cmdkey commands. */
	export interface CmdkeySetup {

		/**
		 * Cmdkey command custom setup type properties.
		 * Required
		 */
		typeProperties: CmdkeySetupTypeProperties;
	}

	/** The custom setup of running cmdkey commands. */
	export interface CmdkeySetupFormProperties {
	}
	export function CreateCmdkeySetupFormGroup() {
		return new FormGroup<CmdkeySetupFormProperties>({
		});

	}


	/** Cmdkey command custom setup type properties. */
	export interface CmdkeySetupTypeProperties {

		/**
		 * The base definition of a secret type.
		 * Required
		 */
		password: CmdkeySetupTypePropertiesPassword;

		/**
		 * The server name of data source access.
		 * Required
		 */
		targetName: string;

		/**
		 * The user name of data source access.
		 * Required
		 */
		userName: string;
	}

	/** Cmdkey command custom setup type properties. */
	export interface CmdkeySetupTypePropertiesFormProperties {

		/**
		 * The server name of data source access.
		 * Required
		 */
		targetName: FormControl<string | null | undefined>,

		/**
		 * The user name of data source access.
		 * Required
		 */
		userName: FormControl<string | null | undefined>,
	}
	export function CreateCmdkeySetupTypePropertiesFormGroup() {
		return new FormGroup<CmdkeySetupTypePropertiesFormProperties>({
			targetName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			userName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CmdkeySetupTypePropertiesPassword {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: string;
	}
	export interface CmdkeySetupTypePropertiesPasswordFormProperties {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateCmdkeySetupTypePropertiesPasswordFormGroup() {
		return new FormGroup<CmdkeySetupTypePropertiesPasswordFormProperties>({
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The custom setup of installing 3rd party components. */
	export interface ComponentSetup {

		/**
		 * Installation of licensed component setup type properties.
		 * Required
		 */
		typeProperties: LicensedComponentSetupTypeProperties;
	}

	/** The custom setup of installing 3rd party components. */
	export interface ComponentSetupFormProperties {
	}
	export function CreateComponentSetupFormGroup() {
		return new FormGroup<ComponentSetupFormProperties>({
		});

	}


	/** Installation of licensed component setup type properties. */
	export interface LicensedComponentSetupTypeProperties {

		/**
		 * The name of the 3rd party component.
		 * Required
		 */
		componentName: string;

		/** The base definition of a secret type. */
		licenseKey?: LicensedComponentSetupTypePropertiesLicenseKey;
	}

	/** Installation of licensed component setup type properties. */
	export interface LicensedComponentSetupTypePropertiesFormProperties {

		/**
		 * The name of the 3rd party component.
		 * Required
		 */
		componentName: FormControl<string | null | undefined>,
	}
	export function CreateLicensedComponentSetupTypePropertiesFormGroup() {
		return new FormGroup<LicensedComponentSetupTypePropertiesFormProperties>({
			componentName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface LicensedComponentSetupTypePropertiesLicenseKey {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: string;
	}
	export interface LicensedComponentSetupTypePropertiesLicenseKeyFormProperties {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateLicensedComponentSetupTypePropertiesLicenseKeyFormGroup() {
		return new FormGroup<LicensedComponentSetupTypePropertiesLicenseKeyFormProperties>({
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The base definition of the custom setup. */
	export interface CustomSetupBase {

		/**
		 * The type of custom setup.
		 * Required
		 */
		type: string;
	}

	/** The base definition of the custom setup. */
	export interface CustomSetupBaseFormProperties {

		/**
		 * The type of custom setup.
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateCustomSetupBaseFormGroup() {
		return new FormGroup<CustomSetupBaseFormProperties>({
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The entity reference. */
	export interface EntityReference {

		/** The name of this referenced entity. */
		referenceName?: string | null;

		/** The type of this referenced entity. */
		type?: EntityReferenceType | null;
	}

	/** The entity reference. */
	export interface EntityReferenceFormProperties {

		/** The name of this referenced entity. */
		referenceName: FormControl<string | null | undefined>,

		/** The type of this referenced entity. */
		type: FormControl<EntityReferenceType | null | undefined>,
	}
	export function CreateEntityReferenceFormGroup() {
		return new FormGroup<EntityReferenceFormProperties>({
			referenceName: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<EntityReferenceType | null | undefined>(undefined),
		});

	}

	export enum EntityReferenceType { IntegrationRuntimeReference = 'IntegrationRuntimeReference', LinkedServiceReference = 'LinkedServiceReference' }


	/** The custom setup of setting environment variable. */
	export interface EnvironmentVariableSetup {

		/**
		 * Environment variable custom setup type properties.
		 * Required
		 */
		typeProperties: EnvironmentVariableSetupTypeProperties;
	}

	/** The custom setup of setting environment variable. */
	export interface EnvironmentVariableSetupFormProperties {
	}
	export function CreateEnvironmentVariableSetupFormGroup() {
		return new FormGroup<EnvironmentVariableSetupFormProperties>({
		});

	}


	/** Environment variable custom setup type properties. */
	export interface EnvironmentVariableSetupTypeProperties {

		/**
		 * The name of the environment variable.
		 * Required
		 */
		variableName: string;

		/**
		 * The value of the environment variable.
		 * Required
		 */
		variableValue: string;
	}

	/** Environment variable custom setup type properties. */
	export interface EnvironmentVariableSetupTypePropertiesFormProperties {

		/**
		 * The name of the environment variable.
		 * Required
		 */
		variableName: FormControl<string | null | undefined>,

		/**
		 * The value of the environment variable.
		 * Required
		 */
		variableValue: FormControl<string | null | undefined>,
	}
	export function CreateEnvironmentVariableSetupTypePropertiesFormGroup() {
		return new FormGroup<EnvironmentVariableSetupTypePropertiesFormProperties>({
			variableName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			variableValue: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Azure Data Factory nested object which serves as a compute resource for activities. */
	export interface IntegrationRuntime {

		/** Integration runtime description. */
		description?: string | null;

		/**
		 * The type of integration runtime.
		 * Required
		 */
		type: IntegrationRuntimeType;
	}

	/** Azure Data Factory nested object which serves as a compute resource for activities. */
	export interface IntegrationRuntimeFormProperties {

		/** Integration runtime description. */
		description: FormControl<string | null | undefined>,

		/**
		 * The type of integration runtime.
		 * Required
		 */
		type: FormControl<IntegrationRuntimeType | null | undefined>,
	}
	export function CreateIntegrationRuntimeFormGroup() {
		return new FormGroup<IntegrationRuntimeFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<IntegrationRuntimeType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum IntegrationRuntimeType { Managed = 'Managed', SelfHosted = 'SelfHosted' }


	/** The integration runtime authentication keys. */
	export interface IntegrationRuntimeAuthKeys {

		/** The primary integration runtime authentication key. */
		authKey1?: string | null;

		/** The secondary integration runtime authentication key. */
		authKey2?: string | null;
	}

	/** The integration runtime authentication keys. */
	export interface IntegrationRuntimeAuthKeysFormProperties {

		/** The primary integration runtime authentication key. */
		authKey1: FormControl<string | null | undefined>,

		/** The secondary integration runtime authentication key. */
		authKey2: FormControl<string | null | undefined>,
	}
	export function CreateIntegrationRuntimeAuthKeysFormGroup() {
		return new FormGroup<IntegrationRuntimeAuthKeysFormProperties>({
			authKey1: new FormControl<string | null | undefined>(undefined),
			authKey2: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The state of integration runtime auto update. */
	export enum IntegrationRuntimeAutoUpdate { On = 'On', Off = 'Off' }


	/** The compute resource properties for managed integration runtime. */
	export interface IntegrationRuntimeComputeProperties {

		/** Data flow properties for managed integration runtime. */
		dataFlowProperties?: IntegrationRuntimeDataFlowProperties;

		/** The location for managed integration runtime. The supported regions could be found on https://docs.microsoft.com/en-us/azure/data-factory/data-factory-data-movement-activities */
		location?: string | null;

		/**
		 * Maximum parallel executions count per node for managed integration runtime.
		 * Minimum: 1
		 */
		maxParallelExecutionsPerNode?: number | null;

		/** The node size requirement to managed integration runtime. */
		nodeSize?: string | null;

		/**
		 * The required number of nodes for managed integration runtime.
		 * Minimum: 1
		 */
		numberOfNodes?: number | null;

		/** VNet properties for managed integration runtime. */
		vNetProperties?: IntegrationRuntimeVNetProperties;
	}

	/** The compute resource properties for managed integration runtime. */
	export interface IntegrationRuntimeComputePropertiesFormProperties {

		/** The location for managed integration runtime. The supported regions could be found on https://docs.microsoft.com/en-us/azure/data-factory/data-factory-data-movement-activities */
		location: FormControl<string | null | undefined>,

		/**
		 * Maximum parallel executions count per node for managed integration runtime.
		 * Minimum: 1
		 */
		maxParallelExecutionsPerNode: FormControl<number | null | undefined>,

		/** The node size requirement to managed integration runtime. */
		nodeSize: FormControl<string | null | undefined>,

		/**
		 * The required number of nodes for managed integration runtime.
		 * Minimum: 1
		 */
		numberOfNodes: FormControl<number | null | undefined>,
	}
	export function CreateIntegrationRuntimeComputePropertiesFormGroup() {
		return new FormGroup<IntegrationRuntimeComputePropertiesFormProperties>({
			location: new FormControl<string | null | undefined>(undefined),
			maxParallelExecutionsPerNode: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			nodeSize: new FormControl<string | null | undefined>(undefined),
			numberOfNodes: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
		});

	}


	/** Data flow properties for managed integration runtime. */
	export interface IntegrationRuntimeDataFlowProperties {

		/** Compute type of the cluster which will execute data flow job. */
		computeType?: IntegrationRuntimeDataFlowPropertiesComputeType | null;

		/**
		 * Core count of the cluster which will execute data flow job. Supported values are: 8, 16, 32, 48, 80, 144 and 272.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		coreCount?: number | null;

		/**
		 * Time to live (in minutes) setting of the cluster which will execute data flow job.
		 * Minimum: 0
		 */
		timeToLive?: number | null;
	}

	/** Data flow properties for managed integration runtime. */
	export interface IntegrationRuntimeDataFlowPropertiesFormProperties {

		/** Compute type of the cluster which will execute data flow job. */
		computeType: FormControl<IntegrationRuntimeDataFlowPropertiesComputeType | null | undefined>,

		/**
		 * Core count of the cluster which will execute data flow job. Supported values are: 8, 16, 32, 48, 80, 144 and 272.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		coreCount: FormControl<number | null | undefined>,

		/**
		 * Time to live (in minutes) setting of the cluster which will execute data flow job.
		 * Minimum: 0
		 */
		timeToLive: FormControl<number | null | undefined>,
	}
	export function CreateIntegrationRuntimeDataFlowPropertiesFormGroup() {
		return new FormGroup<IntegrationRuntimeDataFlowPropertiesFormProperties>({
			computeType: new FormControl<IntegrationRuntimeDataFlowPropertiesComputeType | null | undefined>(undefined),
			coreCount: new FormControl<number | null | undefined>(undefined),
			timeToLive: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
		});

	}

	export enum IntegrationRuntimeDataFlowPropertiesComputeType { General = 'General', MemoryOptimized = 'MemoryOptimized', ComputeOptimized = 'ComputeOptimized' }


	/** VNet properties for managed integration runtime. */
	export interface IntegrationRuntimeVNetProperties {

		/** Resource IDs of the public IP addresses that this integration runtime will use. */
		publicIPs?: Array<string>;

		/** The name of the subnet this integration runtime will join. */
		subnet?: string | null;

		/** The ID of the VNet that this integration runtime will join. */
		vNetId?: string | null;
	}

	/** VNet properties for managed integration runtime. */
	export interface IntegrationRuntimeVNetPropertiesFormProperties {

		/** The name of the subnet this integration runtime will join. */
		subnet: FormControl<string | null | undefined>,

		/** The ID of the VNet that this integration runtime will join. */
		vNetId: FormControl<string | null | undefined>,
	}
	export function CreateIntegrationRuntimeVNetPropertiesFormGroup() {
		return new FormGroup<IntegrationRuntimeVNetPropertiesFormProperties>({
			subnet: new FormControl<string | null | undefined>(undefined),
			vNetId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Connection information for encrypting the on-premises data source credentials. */
	export interface IntegrationRuntimeConnectionInfo {

		/** The on-premises integration runtime host URL. */
		hostServiceUri?: string | null;

		/** The integration runtime SSL certificate thumbprint. Click-Once application uses it to do server validation. */
		identityCertThumbprint?: string | null;

		/** Whether the identity certificate is expired. */
		isIdentityCertExprired?: boolean | null;

		/** The public key for encrypting a credential when transferring the credential to the integration runtime. */
		publicKey?: string | null;

		/** The token generated in service. Callers use this token to authenticate to integration runtime. */
		serviceToken?: string | null;

		/** The integration runtime version. */
		version?: string | null;
	}

	/** Connection information for encrypting the on-premises data source credentials. */
	export interface IntegrationRuntimeConnectionInfoFormProperties {

		/** The on-premises integration runtime host URL. */
		hostServiceUri: FormControl<string | null | undefined>,

		/** The integration runtime SSL certificate thumbprint. Click-Once application uses it to do server validation. */
		identityCertThumbprint: FormControl<string | null | undefined>,

		/** Whether the identity certificate is expired. */
		isIdentityCertExprired: FormControl<boolean | null | undefined>,

		/** The public key for encrypting a credential when transferring the credential to the integration runtime. */
		publicKey: FormControl<string | null | undefined>,

		/** The token generated in service. Callers use this token to authenticate to integration runtime. */
		serviceToken: FormControl<string | null | undefined>,

		/** The integration runtime version. */
		version: FormControl<string | null | undefined>,
	}
	export function CreateIntegrationRuntimeConnectionInfoFormGroup() {
		return new FormGroup<IntegrationRuntimeConnectionInfoFormProperties>({
			hostServiceUri: new FormControl<string | null | undefined>(undefined),
			identityCertThumbprint: new FormControl<string | null | undefined>(undefined),
			isIdentityCertExprired: new FormControl<boolean | null | undefined>(undefined),
			publicKey: new FormControl<string | null | undefined>(undefined),
			serviceToken: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Custom setup script properties for a managed dedicated integration runtime. */
	export interface IntegrationRuntimeCustomSetupScriptProperties {

		/** The URI of the Azure blob container that contains the custom setup script. */
		blobContainerUri?: string | null;

		/** Azure Data Factory secure string definition. The string value will be masked with asterisks '*' during Get or List API calls. */
		sasToken?: IntegrationRuntimeCustomSetupScriptPropertiesSasToken;
	}

	/** Custom setup script properties for a managed dedicated integration runtime. */
	export interface IntegrationRuntimeCustomSetupScriptPropertiesFormProperties {

		/** The URI of the Azure blob container that contains the custom setup script. */
		blobContainerUri: FormControl<string | null | undefined>,
	}
	export function CreateIntegrationRuntimeCustomSetupScriptPropertiesFormGroup() {
		return new FormGroup<IntegrationRuntimeCustomSetupScriptPropertiesFormProperties>({
			blobContainerUri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface IntegrationRuntimeCustomSetupScriptPropertiesSasToken {

		/**
		 * Value of secure string.
		 * Required
		 */
		value: string;
	}
	export interface IntegrationRuntimeCustomSetupScriptPropertiesSasTokenFormProperties {

		/**
		 * Value of secure string.
		 * Required
		 */
		value: FormControl<string | null | undefined>,
	}
	export function CreateIntegrationRuntimeCustomSetupScriptPropertiesSasTokenFormGroup() {
		return new FormGroup<IntegrationRuntimeCustomSetupScriptPropertiesSasTokenFormProperties>({
			value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Data proxy properties for a managed dedicated integration runtime. */
	export interface IntegrationRuntimeDataProxyProperties {

		/** The entity reference. */
		connectVia?: EntityReference;

		/** The path to contain the staged data in the Blob storage. */
		path?: string | null;

		/** The entity reference. */
		stagingLinkedService?: EntityReference;
	}

	/** Data proxy properties for a managed dedicated integration runtime. */
	export interface IntegrationRuntimeDataProxyPropertiesFormProperties {

		/** The path to contain the staged data in the Blob storage. */
		path: FormControl<string | null | undefined>,
	}
	export function CreateIntegrationRuntimeDataProxyPropertiesFormGroup() {
		return new FormGroup<IntegrationRuntimeDataProxyPropertiesFormProperties>({
			path: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Get monitoring data response. */
	export interface IntegrationRuntimeMonitoringData {

		/** Integration runtime name. */
		name?: string | null;

		/** Integration runtime node monitoring data. */
		nodes?: Array<IntegrationRuntimeNodeMonitoringData>;
	}

	/** Get monitoring data response. */
	export interface IntegrationRuntimeMonitoringDataFormProperties {

		/** Integration runtime name. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateIntegrationRuntimeMonitoringDataFormGroup() {
		return new FormGroup<IntegrationRuntimeMonitoringDataFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Monitoring data for integration runtime node. */
	export interface IntegrationRuntimeNodeMonitoringData {

		/**
		 * Available memory (MB) on the integration runtime node.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		availableMemoryInMB?: number | null;

		/**
		 * Maximum concurrent jobs on the integration runtime node.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		concurrentJobsLimit?: number | null;

		/**
		 * The number of jobs currently running on the integration runtime node.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		concurrentJobsRunning?: number | null;

		/**
		 * CPU percentage on the integration runtime node.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		cpuUtilization?: number | null;

		/**
		 * The maximum concurrent jobs in this integration runtime.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxConcurrentJobs?: number | null;

		/** Name of the integration runtime node. */
		nodeName?: string | null;

		/**
		 * Received bytes on the integration runtime node.
		 * Type: double
		 */
		receivedBytes?: number | null;

		/**
		 * Sent bytes on the integration runtime node.
		 * Type: double
		 */
		sentBytes?: number | null;
	}

	/** Monitoring data for integration runtime node. */
	export interface IntegrationRuntimeNodeMonitoringDataFormProperties {

		/**
		 * Available memory (MB) on the integration runtime node.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		availableMemoryInMB: FormControl<number | null | undefined>,

		/**
		 * Maximum concurrent jobs on the integration runtime node.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		concurrentJobsLimit: FormControl<number | null | undefined>,

		/**
		 * The number of jobs currently running on the integration runtime node.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		concurrentJobsRunning: FormControl<number | null | undefined>,

		/**
		 * CPU percentage on the integration runtime node.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		cpuUtilization: FormControl<number | null | undefined>,

		/**
		 * The maximum concurrent jobs in this integration runtime.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxConcurrentJobs: FormControl<number | null | undefined>,

		/** Name of the integration runtime node. */
		nodeName: FormControl<string | null | undefined>,

		/**
		 * Received bytes on the integration runtime node.
		 * Type: double
		 */
		receivedBytes: FormControl<number | null | undefined>,

		/**
		 * Sent bytes on the integration runtime node.
		 * Type: double
		 */
		sentBytes: FormControl<number | null | undefined>,
	}
	export function CreateIntegrationRuntimeNodeMonitoringDataFormGroup() {
		return new FormGroup<IntegrationRuntimeNodeMonitoringDataFormProperties>({
			availableMemoryInMB: new FormControl<number | null | undefined>(undefined),
			concurrentJobsLimit: new FormControl<number | null | undefined>(undefined),
			concurrentJobsRunning: new FormControl<number | null | undefined>(undefined),
			cpuUtilization: new FormControl<number | null | undefined>(undefined),
			maxConcurrentJobs: new FormControl<number | null | undefined>(undefined),
			nodeName: new FormControl<string | null | undefined>(undefined),
			receivedBytes: new FormControl<number | null | undefined>(undefined),
			sentBytes: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The IP address of self-hosted integration runtime node. */
	export interface IntegrationRuntimeNodeIpAddress {

		/** The IP address of self-hosted integration runtime node. */
		ipAddress?: string | null;
	}

	/** The IP address of self-hosted integration runtime node. */
	export interface IntegrationRuntimeNodeIpAddressFormProperties {

		/** The IP address of self-hosted integration runtime node. */
		ipAddress: FormControl<string | null | undefined>,
	}
	export function CreateIntegrationRuntimeNodeIpAddressFormGroup() {
		return new FormGroup<IntegrationRuntimeNodeIpAddressFormProperties>({
			ipAddress: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Parameters to regenerate the authentication key. */
	export interface IntegrationRuntimeRegenerateKeyParameters {

		/** The name of the authentication key to regenerate. */
		keyName?: IntegrationRuntimeRegenerateKeyParametersKeyName | null;
	}

	/** Parameters to regenerate the authentication key. */
	export interface IntegrationRuntimeRegenerateKeyParametersFormProperties {

		/** The name of the authentication key to regenerate. */
		keyName: FormControl<IntegrationRuntimeRegenerateKeyParametersKeyName | null | undefined>,
	}
	export function CreateIntegrationRuntimeRegenerateKeyParametersFormGroup() {
		return new FormGroup<IntegrationRuntimeRegenerateKeyParametersFormProperties>({
			keyName: new FormControl<IntegrationRuntimeRegenerateKeyParametersKeyName | null | undefined>(undefined),
		});

	}

	export enum IntegrationRuntimeRegenerateKeyParametersKeyName { authKey1 = 'authKey1', authKey2 = 'authKey2' }


	/** Catalog information for managed dedicated integration runtime. */
	export interface IntegrationRuntimeSsisCatalogInfo {

		/** Azure Data Factory secure string definition. The string value will be masked with asterisks '*' during Get or List API calls. */
		catalogAdminPassword?: IntegrationRuntimeSsisCatalogInfoCatalogAdminPassword;

		/**
		 * The administrator user name of catalog database.
		 * Max length: 128
		 * Min length: 1
		 */
		catalogAdminUserName?: string | null;

		/** The pricing tier for the catalog database. The valid values could be found in https://azure.microsoft.com/en-us/pricing/details/sql-database/ */
		catalogPricingTier?: IntegrationRuntimeSsisCatalogInfoCatalogPricingTier | null;

		/** The catalog database server URL. */
		catalogServerEndpoint?: string | null;
	}

	/** Catalog information for managed dedicated integration runtime. */
	export interface IntegrationRuntimeSsisCatalogInfoFormProperties {

		/**
		 * The administrator user name of catalog database.
		 * Max length: 128
		 * Min length: 1
		 */
		catalogAdminUserName: FormControl<string | null | undefined>,

		/** The pricing tier for the catalog database. The valid values could be found in https://azure.microsoft.com/en-us/pricing/details/sql-database/ */
		catalogPricingTier: FormControl<IntegrationRuntimeSsisCatalogInfoCatalogPricingTier | null | undefined>,

		/** The catalog database server URL. */
		catalogServerEndpoint: FormControl<string | null | undefined>,
	}
	export function CreateIntegrationRuntimeSsisCatalogInfoFormGroup() {
		return new FormGroup<IntegrationRuntimeSsisCatalogInfoFormProperties>({
			catalogAdminUserName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128)]),
			catalogPricingTier: new FormControl<IntegrationRuntimeSsisCatalogInfoCatalogPricingTier | null | undefined>(undefined),
			catalogServerEndpoint: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface IntegrationRuntimeSsisCatalogInfoCatalogAdminPassword {

		/**
		 * Value of secure string.
		 * Required
		 */
		value: string;
	}
	export interface IntegrationRuntimeSsisCatalogInfoCatalogAdminPasswordFormProperties {

		/**
		 * Value of secure string.
		 * Required
		 */
		value: FormControl<string | null | undefined>,
	}
	export function CreateIntegrationRuntimeSsisCatalogInfoCatalogAdminPasswordFormGroup() {
		return new FormGroup<IntegrationRuntimeSsisCatalogInfoCatalogAdminPasswordFormProperties>({
			value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum IntegrationRuntimeSsisCatalogInfoCatalogPricingTier { Basic = 'Basic', Standard = 'Standard', Premium = 'Premium', PremiumRS = 'PremiumRS' }


	/** SSIS properties for managed integration runtime. */
	export interface IntegrationRuntimeSsisProperties {

		/** Catalog information for managed dedicated integration runtime. */
		catalogInfo?: IntegrationRuntimeSsisCatalogInfo;

		/** Custom setup script properties for a managed dedicated integration runtime. */
		customSetupScriptProperties?: IntegrationRuntimeCustomSetupScriptProperties;

		/** Data proxy properties for a managed dedicated integration runtime. */
		dataProxyProperties?: IntegrationRuntimeDataProxyProperties;

		/** The edition for the SSIS Integration Runtime */
		edition?: IntegrationRuntimeSsisPropertiesEdition | null;

		/** Custom setup without script properties for a SSIS integration runtime. */
		expressCustomSetupProperties?: Array<CustomSetupBase>;

		/** License type for bringing your own license scenario. */
		licenseType?: IntegrationRuntimeSsisPropertiesLicenseType | null;
	}

	/** SSIS properties for managed integration runtime. */
	export interface IntegrationRuntimeSsisPropertiesFormProperties {

		/** The edition for the SSIS Integration Runtime */
		edition: FormControl<IntegrationRuntimeSsisPropertiesEdition | null | undefined>,

		/** License type for bringing your own license scenario. */
		licenseType: FormControl<IntegrationRuntimeSsisPropertiesLicenseType | null | undefined>,
	}
	export function CreateIntegrationRuntimeSsisPropertiesFormGroup() {
		return new FormGroup<IntegrationRuntimeSsisPropertiesFormProperties>({
			edition: new FormControl<IntegrationRuntimeSsisPropertiesEdition | null | undefined>(undefined),
			licenseType: new FormControl<IntegrationRuntimeSsisPropertiesLicenseType | null | undefined>(undefined),
		});

	}

	export enum IntegrationRuntimeSsisPropertiesEdition { Standard = 'Standard', Enterprise = 'Enterprise' }

	export enum IntegrationRuntimeSsisPropertiesLicenseType { BasePrice = 'BasePrice', LicenseIncluded = 'LicenseIncluded' }


	/** The state of integration runtime. */
	export enum IntegrationRuntimeState { Initial = 'Initial', Stopped = 'Stopped', Started = 'Started', Starting = 'Starting', Stopping = 'Stopping', NeedRegistration = 'NeedRegistration', Online = 'Online', Limited = 'Limited', Offline = 'Offline', AccessDenied = 'AccessDenied' }


	/** Integration runtime status. */
	export interface IntegrationRuntimeStatus {

		/** The data factory name which the integration runtime belong to. */
		dataFactoryName?: string | null;

		/** The state of integration runtime. */
		state?: IntegrationRuntimeState | null;

		/**
		 * The type of integration runtime.
		 * Required
		 */
		type: IntegrationRuntimeType;
	}

	/** Integration runtime status. */
	export interface IntegrationRuntimeStatusFormProperties {

		/** The data factory name which the integration runtime belong to. */
		dataFactoryName: FormControl<string | null | undefined>,

		/** The state of integration runtime. */
		state: FormControl<IntegrationRuntimeState | null | undefined>,

		/**
		 * The type of integration runtime.
		 * Required
		 */
		type: FormControl<IntegrationRuntimeType | null | undefined>,
	}
	export function CreateIntegrationRuntimeStatusFormGroup() {
		return new FormGroup<IntegrationRuntimeStatusFormProperties>({
			dataFactoryName: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<IntegrationRuntimeState | null | undefined>(undefined),
			type: new FormControl<IntegrationRuntimeType | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The linked integration runtime information. */
	export interface LinkedIntegrationRuntime {

		/** The creating time of the linked integration runtime. */
		createTime?: Date | null;

		/** The location of the data factory for which the linked integration runtime belong to. */
		dataFactoryLocation?: string | null;

		/** The name of the data factory for which the linked integration runtime belong to. */
		dataFactoryName?: string | null;

		/** The name of the linked integration runtime. */
		name?: string | null;

		/** The subscription ID for which the linked integration runtime belong to. */
		subscriptionId?: string | null;
	}

	/** The linked integration runtime information. */
	export interface LinkedIntegrationRuntimeFormProperties {

		/** The creating time of the linked integration runtime. */
		createTime: FormControl<Date | null | undefined>,

		/** The location of the data factory for which the linked integration runtime belong to. */
		dataFactoryLocation: FormControl<string | null | undefined>,

		/** The name of the data factory for which the linked integration runtime belong to. */
		dataFactoryName: FormControl<string | null | undefined>,

		/** The name of the linked integration runtime. */
		name: FormControl<string | null | undefined>,

		/** The subscription ID for which the linked integration runtime belong to. */
		subscriptionId: FormControl<string | null | undefined>,
	}
	export function CreateLinkedIntegrationRuntimeFormGroup() {
		return new FormGroup<LinkedIntegrationRuntimeFormProperties>({
			createTime: new FormControl<Date | null | undefined>(undefined),
			dataFactoryLocation: new FormControl<string | null | undefined>(undefined),
			dataFactoryName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			subscriptionId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The key authorization type integration runtime. */
	export interface LinkedIntegrationRuntimeKeyAuthorization {

		/**
		 * Azure Data Factory secure string definition. The string value will be masked with asterisks '*' during Get or List API calls.
		 * Required
		 */
		key: LinkedIntegrationRuntimeKeyAuthorizationKey;
	}

	/** The key authorization type integration runtime. */
	export interface LinkedIntegrationRuntimeKeyAuthorizationFormProperties {
	}
	export function CreateLinkedIntegrationRuntimeKeyAuthorizationFormGroup() {
		return new FormGroup<LinkedIntegrationRuntimeKeyAuthorizationFormProperties>({
		});

	}

	export interface LinkedIntegrationRuntimeKeyAuthorizationKey {

		/**
		 * Value of secure string.
		 * Required
		 */
		value: string;
	}
	export interface LinkedIntegrationRuntimeKeyAuthorizationKeyFormProperties {

		/**
		 * Value of secure string.
		 * Required
		 */
		value: FormControl<string | null | undefined>,
	}
	export function CreateLinkedIntegrationRuntimeKeyAuthorizationKeyFormGroup() {
		return new FormGroup<LinkedIntegrationRuntimeKeyAuthorizationKeyFormProperties>({
			value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The role based access control (RBAC) authorization type integration runtime. */
	export interface LinkedIntegrationRuntimeRbacAuthorization {

		/**
		 * The resource identifier of the integration runtime to be shared.
		 * Required
		 */
		resourceId: string;
	}

	/** The role based access control (RBAC) authorization type integration runtime. */
	export interface LinkedIntegrationRuntimeRbacAuthorizationFormProperties {

		/**
		 * The resource identifier of the integration runtime to be shared.
		 * Required
		 */
		resourceId: FormControl<string | null | undefined>,
	}
	export function CreateLinkedIntegrationRuntimeRbacAuthorizationFormGroup() {
		return new FormGroup<LinkedIntegrationRuntimeRbacAuthorizationFormProperties>({
			resourceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The base definition of a linked integration runtime. */
	export interface LinkedIntegrationRuntimeType {

		/**
		 * The authorization type for integration runtime sharing.
		 * Required
		 */
		authorizationType: string;
	}

	/** The base definition of a linked integration runtime. */
	export interface LinkedIntegrationRuntimeTypeFormProperties {

		/**
		 * The authorization type for integration runtime sharing.
		 * Required
		 */
		authorizationType: FormControl<string | null | undefined>,
	}
	export function CreateLinkedIntegrationRuntimeTypeFormGroup() {
		return new FormGroup<LinkedIntegrationRuntimeTypeFormProperties>({
			authorizationType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Managed integration runtime, including managed elastic and managed dedicated integration runtimes. */
	export interface ManagedIntegrationRuntime {

		/** The state of integration runtime. */
		state?: IntegrationRuntimeState | null;

		/**
		 * Managed integration runtime type properties.
		 * Required
		 */
		typeProperties: ManagedIntegrationRuntimeTypeProperties;
	}

	/** Managed integration runtime, including managed elastic and managed dedicated integration runtimes. */
	export interface ManagedIntegrationRuntimeFormProperties {

		/** The state of integration runtime. */
		state: FormControl<IntegrationRuntimeState | null | undefined>,
	}
	export function CreateManagedIntegrationRuntimeFormGroup() {
		return new FormGroup<ManagedIntegrationRuntimeFormProperties>({
			state: new FormControl<IntegrationRuntimeState | null | undefined>(undefined),
		});

	}


	/** Managed integration runtime type properties. */
	export interface ManagedIntegrationRuntimeTypeProperties {

		/** The compute resource properties for managed integration runtime. */
		computeProperties?: IntegrationRuntimeComputeProperties;

		/** SSIS properties for managed integration runtime. */
		ssisProperties?: IntegrationRuntimeSsisProperties;
	}

	/** Managed integration runtime type properties. */
	export interface ManagedIntegrationRuntimeTypePropertiesFormProperties {
	}
	export function CreateManagedIntegrationRuntimeTypePropertiesFormGroup() {
		return new FormGroup<ManagedIntegrationRuntimeTypePropertiesFormProperties>({
		});

	}


	/** Error definition for managed integration runtime. */
	export interface ManagedIntegrationRuntimeError {

		/** Error code. */
		code?: string | null;

		/** Error message. */
		message?: string | null;

		/** Managed integration runtime error parameters. */
		parameters?: Array<string>;

		/** The time when the error occurred. */
		time?: Date | null;
	}

	/** Error definition for managed integration runtime. */
	export interface ManagedIntegrationRuntimeErrorFormProperties {

		/** Error code. */
		code: FormControl<string | null | undefined>,

		/** Error message. */
		message: FormControl<string | null | undefined>,

		/** The time when the error occurred. */
		time: FormControl<Date | null | undefined>,
	}
	export function CreateManagedIntegrationRuntimeErrorFormGroup() {
		return new FormGroup<ManagedIntegrationRuntimeErrorFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			time: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Properties of integration runtime node. */
	export interface ManagedIntegrationRuntimeNode {

		/** The errors that occurred on this integration runtime node. */
		errors?: Array<ManagedIntegrationRuntimeError>;

		/** The managed integration runtime node id. */
		nodeId?: string | null;

		/** The managed integration runtime node status. */
		status?: ManagedIntegrationRuntimeNodeStatus | null;
	}

	/** Properties of integration runtime node. */
	export interface ManagedIntegrationRuntimeNodeFormProperties {

		/** The managed integration runtime node id. */
		nodeId: FormControl<string | null | undefined>,

		/** The managed integration runtime node status. */
		status: FormControl<ManagedIntegrationRuntimeNodeStatus | null | undefined>,
	}
	export function CreateManagedIntegrationRuntimeNodeFormGroup() {
		return new FormGroup<ManagedIntegrationRuntimeNodeFormProperties>({
			nodeId: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<ManagedIntegrationRuntimeNodeStatus | null | undefined>(undefined),
		});

	}

	export enum ManagedIntegrationRuntimeNodeStatus { Starting = 'Starting', Available = 'Available', Recycling = 'Recycling', Unavailable = 'Unavailable' }


	/** Properties of managed integration runtime operation result. */
	export interface ManagedIntegrationRuntimeOperationResult {

		/** The activity id for the operation request. */
		activityId?: string | null;

		/** The error code. */
		errorCode?: string | null;

		/** Managed integration runtime error parameters. */
		parameters?: Array<string>;

		/** The operation result. */
		result?: string | null;

		/** The start time of the operation. */
		startTime?: Date | null;

		/** The operation type. Could be start or stop. */
		type?: string | null;
	}

	/** Properties of managed integration runtime operation result. */
	export interface ManagedIntegrationRuntimeOperationResultFormProperties {

		/** The activity id for the operation request. */
		activityId: FormControl<string | null | undefined>,

		/** The error code. */
		errorCode: FormControl<string | null | undefined>,

		/** The operation result. */
		result: FormControl<string | null | undefined>,

		/** The start time of the operation. */
		startTime: FormControl<Date | null | undefined>,

		/** The operation type. Could be start or stop. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateManagedIntegrationRuntimeOperationResultFormGroup() {
		return new FormGroup<ManagedIntegrationRuntimeOperationResultFormProperties>({
			activityId: new FormControl<string | null | undefined>(undefined),
			errorCode: new FormControl<string | null | undefined>(undefined),
			result: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<Date | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Managed integration runtime status. */
	export interface ManagedIntegrationRuntimeStatus {

		/**
		 * Managed integration runtime status type properties.
		 * Required
		 */
		typeProperties: ManagedIntegrationRuntimeStatusTypeProperties;
	}

	/** Managed integration runtime status. */
	export interface ManagedIntegrationRuntimeStatusFormProperties {
	}
	export function CreateManagedIntegrationRuntimeStatusFormGroup() {
		return new FormGroup<ManagedIntegrationRuntimeStatusFormProperties>({
		});

	}


	/** Managed integration runtime status type properties. */
	export interface ManagedIntegrationRuntimeStatusTypeProperties {

		/** The time at which the integration runtime was created, in ISO8601 format. */
		createTime?: Date | null;

		/** Properties of managed integration runtime operation result. */
		lastOperation?: ManagedIntegrationRuntimeOperationResult;

		/** The list of nodes for managed integration runtime. */
		nodes?: Array<ManagedIntegrationRuntimeNode>;

		/** The errors that occurred on this integration runtime. */
		otherErrors?: Array<ManagedIntegrationRuntimeError>;
	}

	/** Managed integration runtime status type properties. */
	export interface ManagedIntegrationRuntimeStatusTypePropertiesFormProperties {

		/** The time at which the integration runtime was created, in ISO8601 format. */
		createTime: FormControl<Date | null | undefined>,
	}
	export function CreateManagedIntegrationRuntimeStatusTypePropertiesFormGroup() {
		return new FormGroup<ManagedIntegrationRuntimeStatusTypePropertiesFormProperties>({
			createTime: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Self-hosted integration runtime. */
	export interface SelfHostedIntegrationRuntime {

		/** The self-hosted integration runtime properties. */
		typeProperties?: SelfHostedIntegrationRuntimeTypeProperties;
	}

	/** Self-hosted integration runtime. */
	export interface SelfHostedIntegrationRuntimeFormProperties {
	}
	export function CreateSelfHostedIntegrationRuntimeFormGroup() {
		return new FormGroup<SelfHostedIntegrationRuntimeFormProperties>({
		});

	}


	/** The self-hosted integration runtime properties. */
	export interface SelfHostedIntegrationRuntimeTypeProperties {

		/** The base definition of a linked integration runtime. */
		linkedInfo?: LinkedIntegrationRuntimeType;
	}

	/** The self-hosted integration runtime properties. */
	export interface SelfHostedIntegrationRuntimeTypePropertiesFormProperties {
	}
	export function CreateSelfHostedIntegrationRuntimeTypePropertiesFormGroup() {
		return new FormGroup<SelfHostedIntegrationRuntimeTypePropertiesFormProperties>({
		});

	}


	/** Properties of Self-hosted integration runtime node. */
	export interface SelfHostedIntegrationRuntimeNode {

		/** The integration runtime capabilities dictionary */
		capabilities?: {[id: string]: string };

		/**
		 * Maximum concurrent jobs on the integration runtime node.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		concurrentJobsLimit?: number | null;

		/** The time at which the integration runtime will expire in ISO8601 format. */
		expiryTime?: Date | null;

		/** URI for the host machine of the integration runtime. */
		hostServiceUri?: string | null;

		/** Indicates whether this node is the active dispatcher for integration runtime requests. */
		isActiveDispatcher?: boolean | null;

		/** The most recent time at which the integration runtime was connected in ISO8601 format. */
		lastConnectTime?: Date | null;

		/** The last time for the integration runtime node update end. */
		lastEndUpdateTime?: Date | null;

		/** The time the node last started up. */
		lastStartTime?: Date | null;

		/** The last time for the integration runtime node update start. */
		lastStartUpdateTime?: Date | null;

		/** The integration runtime node last stop time. */
		lastStopTime?: Date | null;

		/** The result of the last integration runtime node update. */
		lastUpdateResult?: SelfHostedIntegrationRuntimeNodeLastUpdateResult | null;

		/** Machine name of the integration runtime node. */
		machineName?: string | null;

		/**
		 * The maximum concurrent jobs in this integration runtime.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxConcurrentJobs?: number | null;

		/** Name of the integration runtime node. */
		nodeName?: string | null;

		/** The time at which the integration runtime node was registered in ISO8601 format. */
		registerTime?: Date | null;

		/** Status of the integration runtime node. */
		status?: SelfHostedIntegrationRuntimeNodeStatus | null;

		/** Version of the integration runtime node. */
		version?: string | null;

		/** Status of the integration runtime node version. */
		versionStatus?: string | null;
	}

	/** Properties of Self-hosted integration runtime node. */
	export interface SelfHostedIntegrationRuntimeNodeFormProperties {

		/** The integration runtime capabilities dictionary */
		capabilities: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * Maximum concurrent jobs on the integration runtime node.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		concurrentJobsLimit: FormControl<number | null | undefined>,

		/** The time at which the integration runtime will expire in ISO8601 format. */
		expiryTime: FormControl<Date | null | undefined>,

		/** URI for the host machine of the integration runtime. */
		hostServiceUri: FormControl<string | null | undefined>,

		/** Indicates whether this node is the active dispatcher for integration runtime requests. */
		isActiveDispatcher: FormControl<boolean | null | undefined>,

		/** The most recent time at which the integration runtime was connected in ISO8601 format. */
		lastConnectTime: FormControl<Date | null | undefined>,

		/** The last time for the integration runtime node update end. */
		lastEndUpdateTime: FormControl<Date | null | undefined>,

		/** The time the node last started up. */
		lastStartTime: FormControl<Date | null | undefined>,

		/** The last time for the integration runtime node update start. */
		lastStartUpdateTime: FormControl<Date | null | undefined>,

		/** The integration runtime node last stop time. */
		lastStopTime: FormControl<Date | null | undefined>,

		/** The result of the last integration runtime node update. */
		lastUpdateResult: FormControl<SelfHostedIntegrationRuntimeNodeLastUpdateResult | null | undefined>,

		/** Machine name of the integration runtime node. */
		machineName: FormControl<string | null | undefined>,

		/**
		 * The maximum concurrent jobs in this integration runtime.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxConcurrentJobs: FormControl<number | null | undefined>,

		/** Name of the integration runtime node. */
		nodeName: FormControl<string | null | undefined>,

		/** The time at which the integration runtime node was registered in ISO8601 format. */
		registerTime: FormControl<Date | null | undefined>,

		/** Status of the integration runtime node. */
		status: FormControl<SelfHostedIntegrationRuntimeNodeStatus | null | undefined>,

		/** Version of the integration runtime node. */
		version: FormControl<string | null | undefined>,

		/** Status of the integration runtime node version. */
		versionStatus: FormControl<string | null | undefined>,
	}
	export function CreateSelfHostedIntegrationRuntimeNodeFormGroup() {
		return new FormGroup<SelfHostedIntegrationRuntimeNodeFormProperties>({
			capabilities: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			concurrentJobsLimit: new FormControl<number | null | undefined>(undefined),
			expiryTime: new FormControl<Date | null | undefined>(undefined),
			hostServiceUri: new FormControl<string | null | undefined>(undefined),
			isActiveDispatcher: new FormControl<boolean | null | undefined>(undefined),
			lastConnectTime: new FormControl<Date | null | undefined>(undefined),
			lastEndUpdateTime: new FormControl<Date | null | undefined>(undefined),
			lastStartTime: new FormControl<Date | null | undefined>(undefined),
			lastStartUpdateTime: new FormControl<Date | null | undefined>(undefined),
			lastStopTime: new FormControl<Date | null | undefined>(undefined),
			lastUpdateResult: new FormControl<SelfHostedIntegrationRuntimeNodeLastUpdateResult | null | undefined>(undefined),
			machineName: new FormControl<string | null | undefined>(undefined),
			maxConcurrentJobs: new FormControl<number | null | undefined>(undefined),
			nodeName: new FormControl<string | null | undefined>(undefined),
			registerTime: new FormControl<Date | null | undefined>(undefined),
			status: new FormControl<SelfHostedIntegrationRuntimeNodeStatus | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
			versionStatus: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum SelfHostedIntegrationRuntimeNodeLastUpdateResult { None = 'None', Succeed = 'Succeed', Fail = 'Fail' }

	export enum SelfHostedIntegrationRuntimeNodeStatus { NeedRegistration = 'NeedRegistration', Online = 'Online', Limited = 'Limited', Offline = 'Offline', Upgrading = 'Upgrading', Initializing = 'Initializing', InitializeFailed = 'InitializeFailed' }


	/** Self-hosted integration runtime status. */
	export interface SelfHostedIntegrationRuntimeStatus {

		/**
		 * Self-hosted integration runtime status type properties.
		 * Required
		 */
		typeProperties: SelfHostedIntegrationRuntimeStatusTypeProperties;
	}

	/** Self-hosted integration runtime status. */
	export interface SelfHostedIntegrationRuntimeStatusFormProperties {
	}
	export function CreateSelfHostedIntegrationRuntimeStatusFormGroup() {
		return new FormGroup<SelfHostedIntegrationRuntimeStatusFormProperties>({
		});

	}


	/** Self-hosted integration runtime status type properties. */
	export interface SelfHostedIntegrationRuntimeStatusTypeProperties {

		/** The state of integration runtime auto update. */
		autoUpdate?: IntegrationRuntimeAutoUpdate | null;

		/** The estimated time when the self-hosted integration runtime will be updated. */
		autoUpdateETA?: Date | null;

		/** Object with additional information about integration runtime capabilities. */
		capabilities?: {[id: string]: string };

		/** The time at which the integration runtime was created, in ISO8601 format. */
		createTime?: Date | null;

		/** It is used to set the encryption mode for node-node communication channel (when more than 2 self-hosted integration runtime nodes exist). */
		internalChannelEncryption?: SelfHostedIntegrationRuntimeStatusTypePropertiesInternalChannelEncryption | null;

		/** The latest version on download center. */
		latestVersion?: string | null;

		/** The list of linked integration runtimes that are created to share with this integration runtime. */
		links?: Array<LinkedIntegrationRuntime>;

		/** The local time zone offset in hours. */
		localTimeZoneOffset?: string | null;

		/** The list of nodes for this integration runtime. */
		nodes?: Array<SelfHostedIntegrationRuntimeNode>;

		/** The version that the integration runtime is going to update to. */
		pushedVersion?: string | null;

		/** The date at which the integration runtime will be scheduled to update, in ISO8601 format. */
		scheduledUpdateDate?: Date | null;

		/** The URLs for the services used in integration runtime backend service. */
		serviceUrls?: Array<string>;

		/** The task queue id of the integration runtime. */
		taskQueueId?: string | null;

		/** The time in the date scheduled by service to update the integration runtime, e.g., PT03H is 3 hours */
		updateDelayOffset?: string | null;

		/** Version of the integration runtime. */
		version?: string | null;

		/** Status of the integration runtime version. */
		versionStatus?: string | null;
	}

	/** Self-hosted integration runtime status type properties. */
	export interface SelfHostedIntegrationRuntimeStatusTypePropertiesFormProperties {

		/** The state of integration runtime auto update. */
		autoUpdate: FormControl<IntegrationRuntimeAutoUpdate | null | undefined>,

		/** The estimated time when the self-hosted integration runtime will be updated. */
		autoUpdateETA: FormControl<Date | null | undefined>,

		/** Object with additional information about integration runtime capabilities. */
		capabilities: FormControl<{[id: string]: string } | null | undefined>,

		/** The time at which the integration runtime was created, in ISO8601 format. */
		createTime: FormControl<Date | null | undefined>,

		/** It is used to set the encryption mode for node-node communication channel (when more than 2 self-hosted integration runtime nodes exist). */
		internalChannelEncryption: FormControl<SelfHostedIntegrationRuntimeStatusTypePropertiesInternalChannelEncryption | null | undefined>,

		/** The latest version on download center. */
		latestVersion: FormControl<string | null | undefined>,

		/** The local time zone offset in hours. */
		localTimeZoneOffset: FormControl<string | null | undefined>,

		/** The version that the integration runtime is going to update to. */
		pushedVersion: FormControl<string | null | undefined>,

		/** The date at which the integration runtime will be scheduled to update, in ISO8601 format. */
		scheduledUpdateDate: FormControl<Date | null | undefined>,

		/** The task queue id of the integration runtime. */
		taskQueueId: FormControl<string | null | undefined>,

		/** The time in the date scheduled by service to update the integration runtime, e.g., PT03H is 3 hours */
		updateDelayOffset: FormControl<string | null | undefined>,

		/** Version of the integration runtime. */
		version: FormControl<string | null | undefined>,

		/** Status of the integration runtime version. */
		versionStatus: FormControl<string | null | undefined>,
	}
	export function CreateSelfHostedIntegrationRuntimeStatusTypePropertiesFormGroup() {
		return new FormGroup<SelfHostedIntegrationRuntimeStatusTypePropertiesFormProperties>({
			autoUpdate: new FormControl<IntegrationRuntimeAutoUpdate | null | undefined>(undefined),
			autoUpdateETA: new FormControl<Date | null | undefined>(undefined),
			capabilities: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			createTime: new FormControl<Date | null | undefined>(undefined),
			internalChannelEncryption: new FormControl<SelfHostedIntegrationRuntimeStatusTypePropertiesInternalChannelEncryption | null | undefined>(undefined),
			latestVersion: new FormControl<string | null | undefined>(undefined),
			localTimeZoneOffset: new FormControl<string | null | undefined>(undefined),
			pushedVersion: new FormControl<string | null | undefined>(undefined),
			scheduledUpdateDate: new FormControl<Date | null | undefined>(undefined),
			taskQueueId: new FormControl<string | null | undefined>(undefined),
			updateDelayOffset: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
			versionStatus: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum SelfHostedIntegrationRuntimeStatusTypePropertiesInternalChannelEncryption { NotSet = 'NotSet', SslEncrypted = 'SslEncrypted', NotEncrypted = 'NotEncrypted' }


	/** Ssis environment. */
	export interface SsisEnvironment {

		/**
		 * Folder id which contains environment.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		folderId?: string | null;

		/** Variable in environment */
		variables?: Array<SsisVariable>;
	}

	/** Ssis environment. */
	export interface SsisEnvironmentFormProperties {

		/**
		 * Folder id which contains environment.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		folderId: FormControl<string | null | undefined>,
	}
	export function CreateSsisEnvironmentFormGroup() {
		return new FormGroup<SsisEnvironmentFormProperties>({
			folderId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Ssis variable. */
	export interface SsisVariable {

		/** Variable type. */
		dataType?: string | null;

		/** Variable description. */
		description?: string | null;

		/**
		 * Variable id.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		id?: string | null;

		/** Variable name. */
		name?: string | null;

		/** Whether variable is sensitive. */
		sensitive?: boolean | null;

		/** Variable sensitive value. */
		sensitiveValue?: string | null;

		/** Variable value. */
		value?: string | null;
	}

	/** Ssis variable. */
	export interface SsisVariableFormProperties {

		/** Variable type. */
		dataType: FormControl<string | null | undefined>,

		/** Variable description. */
		description: FormControl<string | null | undefined>,

		/**
		 * Variable id.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		id: FormControl<string | null | undefined>,

		/** Variable name. */
		name: FormControl<string | null | undefined>,

		/** Whether variable is sensitive. */
		sensitive: FormControl<boolean | null | undefined>,

		/** Variable sensitive value. */
		sensitiveValue: FormControl<string | null | undefined>,

		/** Variable value. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateSsisVariableFormGroup() {
		return new FormGroup<SsisVariableFormProperties>({
			dataType: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			sensitive: new FormControl<boolean | null | undefined>(undefined),
			sensitiveValue: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Ssis environment reference. */
	export interface SsisEnvironmentReference {

		/** Environment folder name. */
		environmentFolderName?: string | null;

		/** Environment name. */
		environmentName?: string | null;

		/**
		 * Environment reference id.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		id?: string | null;

		/** Reference type */
		referenceType?: string | null;
	}

	/** Ssis environment reference. */
	export interface SsisEnvironmentReferenceFormProperties {

		/** Environment folder name. */
		environmentFolderName: FormControl<string | null | undefined>,

		/** Environment name. */
		environmentName: FormControl<string | null | undefined>,

		/**
		 * Environment reference id.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		id: FormControl<string | null | undefined>,

		/** Reference type */
		referenceType: FormControl<string | null | undefined>,
	}
	export function CreateSsisEnvironmentReferenceFormGroup() {
		return new FormGroup<SsisEnvironmentReferenceFormProperties>({
			environmentFolderName: new FormControl<string | null | undefined>(undefined),
			environmentName: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			referenceType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Ssis folder. */
	export interface SsisFolder {
	}

	/** Ssis folder. */
	export interface SsisFolderFormProperties {
	}
	export function CreateSsisFolderFormGroup() {
		return new FormGroup<SsisFolderFormProperties>({
		});

	}


	/** SSIS object metadata. */
	export interface SsisObjectMetadata {

		/** Metadata description. */
		description?: string | null;

		/**
		 * Metadata id.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		id?: string | null;

		/** Metadata name. */
		name?: string | null;

		/**
		 * The type of SSIS object metadata.
		 * Required
		 */
		type: SsisObjectMetadataType;
	}

	/** SSIS object metadata. */
	export interface SsisObjectMetadataFormProperties {

		/** Metadata description. */
		description: FormControl<string | null | undefined>,

		/**
		 * Metadata id.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		id: FormControl<string | null | undefined>,

		/** Metadata name. */
		name: FormControl<string | null | undefined>,

		/**
		 * The type of SSIS object metadata.
		 * Required
		 */
		type: FormControl<SsisObjectMetadataType | null | undefined>,
	}
	export function CreateSsisObjectMetadataFormGroup() {
		return new FormGroup<SsisObjectMetadataFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<SsisObjectMetadataType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum SsisObjectMetadataType { Folder = 'Folder', Project = 'Project', Package = 'Package', Environment = 'Environment' }


	/** A list of SSIS object metadata. */
	export interface SsisObjectMetadataListResponse {

		/** The link to the next page of results, if any remaining results exist. */
		nextLink?: string | null;

		/** List of SSIS object metadata. */
		value?: Array<SsisObjectMetadata>;
	}

	/** A list of SSIS object metadata. */
	export interface SsisObjectMetadataListResponseFormProperties {

		/** The link to the next page of results, if any remaining results exist. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateSsisObjectMetadataListResponseFormGroup() {
		return new FormGroup<SsisObjectMetadataListResponseFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Ssis Package. */
	export interface SsisPackage {

		/**
		 * Folder id which contains package.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		folderId?: string | null;

		/** Parameters in package */
		parameters?: Array<SsisParameter>;

		/**
		 * Project id which contains package.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		projectId?: string | null;

		/**
		 * Project version which contains package.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		projectVersion?: string | null;
	}

	/** Ssis Package. */
	export interface SsisPackageFormProperties {

		/**
		 * Folder id which contains package.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		folderId: FormControl<string | null | undefined>,

		/**
		 * Project id which contains package.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		projectId: FormControl<string | null | undefined>,

		/**
		 * Project version which contains package.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		projectVersion: FormControl<string | null | undefined>,
	}
	export function CreateSsisPackageFormGroup() {
		return new FormGroup<SsisPackageFormProperties>({
			folderId: new FormControl<string | null | undefined>(undefined),
			projectId: new FormControl<string | null | undefined>(undefined),
			projectVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Ssis parameter. */
	export interface SsisParameter {

		/** Parameter type. */
		dataType?: string | null;

		/** Default value of parameter. */
		defaultValue?: string | null;

		/** Parameter description. */
		description?: string | null;

		/** Design default value of parameter. */
		designDefaultValue?: string | null;

		/**
		 * Parameter id.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		id?: string | null;

		/** Parameter name. */
		name?: string | null;

		/** Whether parameter is required. */
		required?: boolean | null;

		/** Whether parameter is sensitive. */
		sensitive?: boolean | null;

		/** Default sensitive value of parameter. */
		sensitiveDefaultValue?: string | null;

		/** Parameter value set. */
		valueSet?: boolean | null;

		/** Parameter value type. */
		valueType?: string | null;

		/** Parameter reference variable. */
		variable?: string | null;
	}

	/** Ssis parameter. */
	export interface SsisParameterFormProperties {

		/** Parameter type. */
		dataType: FormControl<string | null | undefined>,

		/** Default value of parameter. */
		defaultValue: FormControl<string | null | undefined>,

		/** Parameter description. */
		description: FormControl<string | null | undefined>,

		/** Design default value of parameter. */
		designDefaultValue: FormControl<string | null | undefined>,

		/**
		 * Parameter id.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		id: FormControl<string | null | undefined>,

		/** Parameter name. */
		name: FormControl<string | null | undefined>,

		/** Whether parameter is required. */
		required: FormControl<boolean | null | undefined>,

		/** Whether parameter is sensitive. */
		sensitive: FormControl<boolean | null | undefined>,

		/** Default sensitive value of parameter. */
		sensitiveDefaultValue: FormControl<string | null | undefined>,

		/** Parameter value set. */
		valueSet: FormControl<boolean | null | undefined>,

		/** Parameter value type. */
		valueType: FormControl<string | null | undefined>,

		/** Parameter reference variable. */
		variable: FormControl<string | null | undefined>,
	}
	export function CreateSsisParameterFormGroup() {
		return new FormGroup<SsisParameterFormProperties>({
			dataType: new FormControl<string | null | undefined>(undefined),
			defaultValue: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			designDefaultValue: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			required: new FormControl<boolean | null | undefined>(undefined),
			sensitive: new FormControl<boolean | null | undefined>(undefined),
			sensitiveDefaultValue: new FormControl<string | null | undefined>(undefined),
			valueSet: new FormControl<boolean | null | undefined>(undefined),
			valueType: new FormControl<string | null | undefined>(undefined),
			variable: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Ssis project. */
	export interface SsisProject {

		/** Environment reference in project */
		environmentRefs?: Array<SsisEnvironmentReference>;

		/**
		 * Folder id which contains project.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		folderId?: string | null;

		/** Parameters in project */
		parameters?: Array<SsisParameter>;

		/**
		 * Project version.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		version?: string | null;
	}

	/** Ssis project. */
	export interface SsisProjectFormProperties {

		/**
		 * Folder id which contains project.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		folderId: FormControl<string | null | undefined>,

		/**
		 * Project version.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		version: FormControl<string | null | undefined>,
	}
	export function CreateSsisProjectFormGroup() {
		return new FormGroup<SsisProjectFormProperties>({
			folderId: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}
	}

}

