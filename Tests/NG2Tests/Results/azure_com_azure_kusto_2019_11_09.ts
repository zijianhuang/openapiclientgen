import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface AttachedDatabaseConfiguration {
	}
	export interface AttachedDatabaseConfigurationFormProperties {
	}
	export function CreateAttachedDatabaseConfigurationFormGroup() {
		return new FormGroup<AttachedDatabaseConfigurationFormProperties>({
		});

	}


	/** The list attached database configurations operation response. */
	export interface AttachedDatabaseConfigurationListResult {

		/** The list of attached database configurations. */
		value?: Array<AttachedDatabaseConfiguration>;
	}

	/** The list attached database configurations operation response. */
	export interface AttachedDatabaseConfigurationListResultFormProperties {
	}
	export function CreateAttachedDatabaseConfigurationListResultFormGroup() {
		return new FormGroup<AttachedDatabaseConfigurationListResultFormProperties>({
		});

	}


	/** Class representing the an attached database configuration properties of kind specific. */
	export interface AttachedDatabaseConfigurationProperties {

		/** The list of databases from the clusterResourceId which are currently attached to the cluster. */
		attachedDatabaseNames?: Array<string>;

		/**
		 * The resource id of the cluster where the databases you would like to attach reside.
		 * Required
		 */
		clusterResourceId: string;

		/**
		 * The name of the database which you would like to attach, use * if you want to follow all current and future databases.
		 * Required
		 */
		databaseName: string;

		/**
		 * The default principals modification kind
		 * Required
		 */
		defaultPrincipalsModificationKind: AttachedDatabaseConfigurationPropertiesDefaultPrincipalsModificationKind;

		/** The provisioned state of the resource. */
		provisioningState?: AttachedDatabaseConfigurationPropertiesProvisioningState | null;
	}

	/** Class representing the an attached database configuration properties of kind specific. */
	export interface AttachedDatabaseConfigurationPropertiesFormProperties {

		/**
		 * The resource id of the cluster where the databases you would like to attach reside.
		 * Required
		 */
		clusterResourceId: FormControl<string | null | undefined>,

		/**
		 * The name of the database which you would like to attach, use * if you want to follow all current and future databases.
		 * Required
		 */
		databaseName: FormControl<string | null | undefined>,

		/**
		 * The default principals modification kind
		 * Required
		 */
		defaultPrincipalsModificationKind: FormControl<AttachedDatabaseConfigurationPropertiesDefaultPrincipalsModificationKind | null | undefined>,

		/** The provisioned state of the resource. */
		provisioningState: FormControl<AttachedDatabaseConfigurationPropertiesProvisioningState | null | undefined>,
	}
	export function CreateAttachedDatabaseConfigurationPropertiesFormGroup() {
		return new FormGroup<AttachedDatabaseConfigurationPropertiesFormProperties>({
			clusterResourceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			databaseName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			defaultPrincipalsModificationKind: new FormControl<AttachedDatabaseConfigurationPropertiesDefaultPrincipalsModificationKind | null | undefined>(undefined, [Validators.required]),
			provisioningState: new FormControl<AttachedDatabaseConfigurationPropertiesProvisioningState | null | undefined>(undefined),
		});

	}

	export enum AttachedDatabaseConfigurationPropertiesDefaultPrincipalsModificationKind { Union = 0, Replace = 1, None = 2 }

	export enum AttachedDatabaseConfigurationPropertiesProvisioningState { Running = 0, Creating = 1, Deleting = 2, Succeeded = 3, Failed = 4, Moving = 5 }


	/** Azure capacity definition. */
	export interface AzureCapacity {

		/**
		 * The default capacity that would be used.
		 * Required
		 */
		default: number;

		/**
		 * Maximum allowed capacity.
		 * Required
		 */
		maximum: number;

		/**
		 * Minimum allowed capacity.
		 * Required
		 */
		minimum: number;

		/**
		 * Scale type.
		 * Required
		 */
		scaleType: AzureCapacityScaleType;
	}

	/** Azure capacity definition. */
	export interface AzureCapacityFormProperties {

		/**
		 * The default capacity that would be used.
		 * Required
		 */
		default: FormControl<number | null | undefined>,

		/**
		 * Maximum allowed capacity.
		 * Required
		 */
		maximum: FormControl<number | null | undefined>,

		/**
		 * Minimum allowed capacity.
		 * Required
		 */
		minimum: FormControl<number | null | undefined>,

		/**
		 * Scale type.
		 * Required
		 */
		scaleType: FormControl<AzureCapacityScaleType | null | undefined>,
	}
	export function CreateAzureCapacityFormGroup() {
		return new FormGroup<AzureCapacityFormProperties>({
			default: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			maximum: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			minimum: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			scaleType: new FormControl<AzureCapacityScaleType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum AzureCapacityScaleType { automatic = 0, manual = 1, none = 2 }


	/** Azure resource SKU definition. */
	export interface AzureResourceSku {

		/** Azure capacity definition. */
		capacity?: AzureCapacity;

		/** Resource Namespace and Type. */
		resourceType?: string | null;

		/** Azure SKU definition. */
		sku?: AzureSku;
	}

	/** Azure resource SKU definition. */
	export interface AzureResourceSkuFormProperties {

		/** Resource Namespace and Type. */
		resourceType: FormControl<string | null | undefined>,
	}
	export function CreateAzureResourceSkuFormGroup() {
		return new FormGroup<AzureResourceSkuFormProperties>({
			resourceType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Azure SKU definition. */
	export interface AzureSku {

		/** The number of instances of the cluster. */
		capacity?: number | null;

		/**
		 * SKU name.
		 * Required
		 */
		name: AzureSkuName;

		/**
		 * SKU tier.
		 * Required
		 */
		tier: AzureSkuTier;
	}

	/** Azure SKU definition. */
	export interface AzureSkuFormProperties {

		/** The number of instances of the cluster. */
		capacity: FormControl<number | null | undefined>,

		/**
		 * SKU name.
		 * Required
		 */
		name: FormControl<AzureSkuName | null | undefined>,

		/**
		 * SKU tier.
		 * Required
		 */
		tier: FormControl<AzureSkuTier | null | undefined>,
	}
	export function CreateAzureSkuFormGroup() {
		return new FormGroup<AzureSkuFormProperties>({
			capacity: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<AzureSkuName | null | undefined>(undefined, [Validators.required]),
			tier: new FormControl<AzureSkuTier | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum AzureSkuName { 'Standard_DS13_v2+1TB_PS' = 0, 'Standard_DS13_v2+2TB_PS' = 1, 'Standard_DS14_v2+3TB_PS' = 2, 'Standard_DS14_v2+4TB_PS' = 3, Standard_D13_v2 = 4, Standard_D14_v2 = 5, Standard_L8s = 6, Standard_L16s = 7, Standard_D11_v2 = 8, Standard_D12_v2 = 9, Standard_L4s = 10, 'Dev(No SLA)_Standard_D11_v2' = 11 }

	export enum AzureSkuTier { Basic = 0, Standard = 1 }


	/** The result returned from a database check name availability request. */
	export interface CheckNameRequest {

		/**
		 * Resource name.
		 * Required
		 */
		name: string;

		/**
		 * The type of resource, for instance Microsoft.Kusto/clusters/databases.
		 * Required
		 */
		type: CheckNameRequestType;
	}

	/** The result returned from a database check name availability request. */
	export interface CheckNameRequestFormProperties {

		/**
		 * Resource name.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The type of resource, for instance Microsoft.Kusto/clusters/databases.
		 * Required
		 */
		type: FormControl<CheckNameRequestType | null | undefined>,
	}
	export function CreateCheckNameRequestFormGroup() {
		return new FormGroup<CheckNameRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<CheckNameRequestType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum CheckNameRequestType { 'Microsoft.Kusto/clusters/databases' = 0, 'Microsoft.Kusto/clusters/attachedDatabaseConfigurations' = 1 }


	/** The result returned from a check name availability request. */
	export interface CheckNameResult {

		/** Message indicating an unavailable name due to a conflict, or a description of the naming rules that are violated. */
		message?: string | null;

		/** The name that was checked. */
		name?: string | null;

		/** Specifies a Boolean value that indicates if the name is available. */
		nameAvailable?: boolean | null;

		/** Message providing the reason why the given name is invalid. */
		reason?: CheckNameResultReason | null;
	}

	/** The result returned from a check name availability request. */
	export interface CheckNameResultFormProperties {

		/** Message indicating an unavailable name due to a conflict, or a description of the naming rules that are violated. */
		message: FormControl<string | null | undefined>,

		/** The name that was checked. */
		name: FormControl<string | null | undefined>,

		/** Specifies a Boolean value that indicates if the name is available. */
		nameAvailable: FormControl<boolean | null | undefined>,

		/** Message providing the reason why the given name is invalid. */
		reason: FormControl<CheckNameResultReason | null | undefined>,
	}
	export function CreateCheckNameResultFormGroup() {
		return new FormGroup<CheckNameResultFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			nameAvailable: new FormControl<boolean | null | undefined>(undefined),
			reason: new FormControl<CheckNameResultReason | null | undefined>(undefined),
		});

	}

	export enum CheckNameResultReason { Invalid = 0, AlreadyExists = 1 }


	/** An error response from Kusto. */
	export interface CloudError {

		/** An error response from Kusto. */
		error?: CloudErrorBody;
	}

	/** An error response from Kusto. */
	export interface CloudErrorFormProperties {
	}
	export function CreateCloudErrorFormGroup() {
		return new FormGroup<CloudErrorFormProperties>({
		});

	}


	/** An error response from Kusto. */
	export interface CloudErrorBody {

		/** An identifier for the error. Codes are invariant and are intended to be consumed programmatically. */
		code?: string | null;

		/** A list of additional details about the error. */
		details?: Array<CloudErrorBody>;

		/** A message describing the error, intended to be suitable for displaying in a user interface. */
		message?: string | null;

		/** The target of the particular error. For example, the name of the property in error. */
		target?: string | null;
	}

	/** An error response from Kusto. */
	export interface CloudErrorBodyFormProperties {

		/** An identifier for the error. Codes are invariant and are intended to be consumed programmatically. */
		code: FormControl<string | null | undefined>,

		/** A message describing the error, intended to be suitable for displaying in a user interface. */
		message: FormControl<string | null | undefined>,

		/** The target of the particular error. For example, the name of the property in error. */
		target: FormControl<string | null | undefined>,
	}
	export function CreateCloudErrorBodyFormGroup() {
		return new FormGroup<CloudErrorBodyFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			target: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Cluster {
	}
	export interface ClusterFormProperties {
	}
	export function CreateClusterFormGroup() {
		return new FormGroup<ClusterFormProperties>({
		});

	}


	/** The result returned from a cluster check name availability request. */
	export interface ClusterCheckNameRequest {

		/**
		 * Cluster name.
		 * Required
		 */
		name: string;

		/**
		 * The type of resource, Microsoft.Kusto/clusters.
		 * Required
		 */
		type: ClusterCheckNameRequestType;
	}

	/** The result returned from a cluster check name availability request. */
	export interface ClusterCheckNameRequestFormProperties {

		/**
		 * Cluster name.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The type of resource, Microsoft.Kusto/clusters.
		 * Required
		 */
		type: FormControl<ClusterCheckNameRequestType | null | undefined>,
	}
	export function CreateClusterCheckNameRequestFormGroup() {
		return new FormGroup<ClusterCheckNameRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<ClusterCheckNameRequestType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ClusterCheckNameRequestType { 'Microsoft.Kusto/clusters' = 0 }


	/** The list Kusto clusters operation response. */
	export interface ClusterListResult {

		/** The list of Kusto clusters. */
		value?: Array<Cluster>;
	}

	/** The list Kusto clusters operation response. */
	export interface ClusterListResultFormProperties {
	}
	export function CreateClusterListResultFormGroup() {
		return new FormGroup<ClusterListResultFormProperties>({
		});

	}

	export interface ClusterPrincipalAssignment {
	}
	export interface ClusterPrincipalAssignmentFormProperties {
	}
	export function CreateClusterPrincipalAssignmentFormGroup() {
		return new FormGroup<ClusterPrincipalAssignmentFormProperties>({
		});

	}


	/** A principal assignment check name availability request. */
	export interface ClusterPrincipalAssignmentCheckNameRequest {

		/**
		 * Principal Assignment resource name.
		 * Required
		 */
		name: string;

		/**
		 * The type of resource, Microsoft.Kusto/clusters/principalAssignments.
		 * Required
		 */
		type: ClusterPrincipalAssignmentCheckNameRequestType;
	}

	/** A principal assignment check name availability request. */
	export interface ClusterPrincipalAssignmentCheckNameRequestFormProperties {

		/**
		 * Principal Assignment resource name.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The type of resource, Microsoft.Kusto/clusters/principalAssignments.
		 * Required
		 */
		type: FormControl<ClusterPrincipalAssignmentCheckNameRequestType | null | undefined>,
	}
	export function CreateClusterPrincipalAssignmentCheckNameRequestFormGroup() {
		return new FormGroup<ClusterPrincipalAssignmentCheckNameRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<ClusterPrincipalAssignmentCheckNameRequestType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ClusterPrincipalAssignmentCheckNameRequestType { 'Microsoft.Kusto/clusters/principalAssignments' = 0 }


	/** The list Kusto cluster principal assignments operation response. */
	export interface ClusterPrincipalAssignmentListResult {

		/** The list of Kusto cluster principal assignments. */
		value?: Array<ClusterPrincipalAssignment>;
	}

	/** The list Kusto cluster principal assignments operation response. */
	export interface ClusterPrincipalAssignmentListResultFormProperties {
	}
	export function CreateClusterPrincipalAssignmentListResultFormGroup() {
		return new FormGroup<ClusterPrincipalAssignmentListResultFormProperties>({
		});

	}


	/** A class representing cluster principal property. */
	export interface ClusterPrincipalProperties {

		/**
		 * The principal ID assigned to the cluster principal. It can be a user email, application ID, or security group name.
		 * Required
		 */
		principalId: string;

		/** The principal name */
		principalName?: string | null;

		/**
		 * Principal type.
		 * Required
		 */
		principalType: ClusterPrincipalPropertiesPrincipalType;

		/** The provisioned state of the resource. */
		provisioningState?: AttachedDatabaseConfigurationPropertiesProvisioningState | null;

		/**
		 * Cluster principal role.
		 * Required
		 */
		role: ClusterPrincipalPropertiesRole;

		/** The tenant id of the principal */
		tenantId?: string | null;

		/** The tenant name of the principal */
		tenantName?: string | null;
	}

	/** A class representing cluster principal property. */
	export interface ClusterPrincipalPropertiesFormProperties {

		/**
		 * The principal ID assigned to the cluster principal. It can be a user email, application ID, or security group name.
		 * Required
		 */
		principalId: FormControl<string | null | undefined>,

		/** The principal name */
		principalName: FormControl<string | null | undefined>,

		/**
		 * Principal type.
		 * Required
		 */
		principalType: FormControl<ClusterPrincipalPropertiesPrincipalType | null | undefined>,

		/** The provisioned state of the resource. */
		provisioningState: FormControl<AttachedDatabaseConfigurationPropertiesProvisioningState | null | undefined>,

		/**
		 * Cluster principal role.
		 * Required
		 */
		role: FormControl<ClusterPrincipalPropertiesRole | null | undefined>,

		/** The tenant id of the principal */
		tenantId: FormControl<string | null | undefined>,

		/** The tenant name of the principal */
		tenantName: FormControl<string | null | undefined>,
	}
	export function CreateClusterPrincipalPropertiesFormGroup() {
		return new FormGroup<ClusterPrincipalPropertiesFormProperties>({
			principalId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			principalName: new FormControl<string | null | undefined>(undefined),
			principalType: new FormControl<ClusterPrincipalPropertiesPrincipalType | null | undefined>(undefined, [Validators.required]),
			provisioningState: new FormControl<AttachedDatabaseConfigurationPropertiesProvisioningState | null | undefined>(undefined),
			role: new FormControl<ClusterPrincipalPropertiesRole | null | undefined>(undefined, [Validators.required]),
			tenantId: new FormControl<string | null | undefined>(undefined),
			tenantName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ClusterPrincipalPropertiesPrincipalType { App = 0, Group = 1, User = 2 }

	export enum ClusterPrincipalPropertiesRole { AllDatabasesAdmin = 0, AllDatabasesViewer = 1 }


	/** Class representing the Kusto cluster properties. */
	export interface ClusterProperties {

		/** The cluster data ingestion URI. */
		dataIngestionUri?: string | null;

		/** A boolean value that indicates if the cluster's disks are encrypted. */
		enableDiskEncryption?: boolean | null;

		/** A boolean value that indicates if the streaming ingest is enabled. */
		enableStreamingIngest?: boolean | null;

		/** Properties of the key vault. */
		keyVaultProperties?: KeyVaultProperties;

		/** A class that contains the optimized auto scale definition. */
		optimizedAutoscale?: OptimizedAutoscale;

		/** The provisioned state of the resource. */
		provisioningState?: AttachedDatabaseConfigurationPropertiesProvisioningState | null;

		/** The state of the resource. */
		state?: ClusterPropertiesState | null;

		/** The reason for the cluster's current state. */
		stateReason?: string | null;

		/** The cluster's external tenants. */
		trustedExternalTenants?: Array<TrustedExternalTenant>;

		/** The cluster URI. */
		uri?: string | null;

		/** A class that contains virtual network definition. */
		virtualNetworkConfiguration?: VirtualNetworkConfiguration;
	}

	/** Class representing the Kusto cluster properties. */
	export interface ClusterPropertiesFormProperties {

		/** The cluster data ingestion URI. */
		dataIngestionUri: FormControl<string | null | undefined>,

		/** A boolean value that indicates if the cluster's disks are encrypted. */
		enableDiskEncryption: FormControl<boolean | null | undefined>,

		/** A boolean value that indicates if the streaming ingest is enabled. */
		enableStreamingIngest: FormControl<boolean | null | undefined>,

		/** The provisioned state of the resource. */
		provisioningState: FormControl<AttachedDatabaseConfigurationPropertiesProvisioningState | null | undefined>,

		/** The state of the resource. */
		state: FormControl<ClusterPropertiesState | null | undefined>,

		/** The reason for the cluster's current state. */
		stateReason: FormControl<string | null | undefined>,

		/** The cluster URI. */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateClusterPropertiesFormGroup() {
		return new FormGroup<ClusterPropertiesFormProperties>({
			dataIngestionUri: new FormControl<string | null | undefined>(undefined),
			enableDiskEncryption: new FormControl<boolean | null | undefined>(undefined),
			enableStreamingIngest: new FormControl<boolean | null | undefined>(undefined),
			provisioningState: new FormControl<AttachedDatabaseConfigurationPropertiesProvisioningState | null | undefined>(undefined),
			state: new FormControl<ClusterPropertiesState | null | undefined>(undefined),
			stateReason: new FormControl<string | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A class that contains the optimized auto scale definition. */
	export interface OptimizedAutoscale {

		/**
		 * A boolean value that indicate if the optimized autoscale feature is enabled or not.
		 * Required
		 */
		isEnabled: boolean;

		/**
		 * Maximum allowed instances count.
		 * Required
		 */
		maximum: number;

		/**
		 * Minimum allowed instances count.
		 * Required
		 */
		minimum: number;

		/**
		 * The version of the template defined, for instance 1.
		 * Required
		 */
		version: number;
	}

	/** A class that contains the optimized auto scale definition. */
	export interface OptimizedAutoscaleFormProperties {

		/**
		 * A boolean value that indicate if the optimized autoscale feature is enabled or not.
		 * Required
		 */
		isEnabled: FormControl<boolean | null | undefined>,

		/**
		 * Maximum allowed instances count.
		 * Required
		 */
		maximum: FormControl<number | null | undefined>,

		/**
		 * Minimum allowed instances count.
		 * Required
		 */
		minimum: FormControl<number | null | undefined>,

		/**
		 * The version of the template defined, for instance 1.
		 * Required
		 */
		version: FormControl<number | null | undefined>,
	}
	export function CreateOptimizedAutoscaleFormGroup() {
		return new FormGroup<OptimizedAutoscaleFormProperties>({
			isEnabled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			maximum: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			minimum: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			version: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ClusterPropertiesState { Creating = 0, Unavailable = 1, Running = 2, Deleting = 3, Deleted = 4, Stopping = 5, Stopped = 6, Starting = 7, Updating = 8 }


	/** Represents a tenant ID that is trusted by the cluster. */
	export interface TrustedExternalTenant {

		/** GUID representing an external tenant. */
		value?: string | null;
	}

	/** Represents a tenant ID that is trusted by the cluster. */
	export interface TrustedExternalTenantFormProperties {

		/** GUID representing an external tenant. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateTrustedExternalTenantFormGroup() {
		return new FormGroup<TrustedExternalTenantFormProperties>({
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A class that contains virtual network definition. */
	export interface VirtualNetworkConfiguration {

		/**
		 * Data management's service public IP address resource id.
		 * Required
		 */
		dataManagementPublicIpId: string;

		/**
		 * Engine service's public IP address resource id.
		 * Required
		 */
		enginePublicIpId: string;

		/**
		 * The subnet resource id.
		 * Required
		 */
		subnetId: string;
	}

	/** A class that contains virtual network definition. */
	export interface VirtualNetworkConfigurationFormProperties {

		/**
		 * Data management's service public IP address resource id.
		 * Required
		 */
		dataManagementPublicIpId: FormControl<string | null | undefined>,

		/**
		 * Engine service's public IP address resource id.
		 * Required
		 */
		enginePublicIpId: FormControl<string | null | undefined>,

		/**
		 * The subnet resource id.
		 * Required
		 */
		subnetId: FormControl<string | null | undefined>,
	}
	export function CreateVirtualNetworkConfigurationFormGroup() {
		return new FormGroup<VirtualNetworkConfigurationFormProperties>({
			dataManagementPublicIpId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			enginePublicIpId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			subnetId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ClusterUpdate {
	}
	export interface ClusterUpdateFormProperties {
	}
	export function CreateClusterUpdateFormGroup() {
		return new FormGroup<ClusterUpdateFormProperties>({
		});

	}


	/** The compression type */
	export enum Compression { None = 0, GZip = 1 }

	export interface DataConnection {
	}
	export interface DataConnectionFormProperties {
	}
	export function CreateDataConnectionFormGroup() {
		return new FormGroup<DataConnectionFormProperties>({
		});

	}


	/** A data connection check name availability request. */
	export interface DataConnectionCheckNameRequest {

		/**
		 * Data Connection name.
		 * Required
		 */
		name: string;

		/**
		 * The type of resource, Microsoft.Kusto/clusters/databases/dataConnections.
		 * Required
		 */
		type: DataConnectionCheckNameRequestType;
	}

	/** A data connection check name availability request. */
	export interface DataConnectionCheckNameRequestFormProperties {

		/**
		 * Data Connection name.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The type of resource, Microsoft.Kusto/clusters/databases/dataConnections.
		 * Required
		 */
		type: FormControl<DataConnectionCheckNameRequestType | null | undefined>,
	}
	export function CreateDataConnectionCheckNameRequestFormGroup() {
		return new FormGroup<DataConnectionCheckNameRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<DataConnectionCheckNameRequestType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum DataConnectionCheckNameRequestType { 'Microsoft.Kusto/clusters/databases/dataConnections' = 0 }


	/** The list Kusto data connections operation response. */
	export interface DataConnectionListResult {

		/** The list of Kusto data connections. */
		value?: Array<DataConnection>;
	}

	/** The list Kusto data connections operation response. */
	export interface DataConnectionListResultFormProperties {
	}
	export function CreateDataConnectionListResultFormGroup() {
		return new FormGroup<DataConnectionListResultFormProperties>({
		});

	}


	/** Class representing an data connection validation. */
	export interface DataConnectionValidation {

		/** The name of the data connection. */
		dataConnectionName?: string | null;

		/** Class representing an data connection. */
		properties?: DataConnection;
	}

	/** Class representing an data connection validation. */
	export interface DataConnectionValidationFormProperties {

		/** The name of the data connection. */
		dataConnectionName: FormControl<string | null | undefined>,
	}
	export function CreateDataConnectionValidationFormGroup() {
		return new FormGroup<DataConnectionValidationFormProperties>({
			dataConnectionName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The list Kusto data connection validation result. */
	export interface DataConnectionValidationListResult {

		/** The list of Kusto data connection validation errors. */
		value?: Array<DataConnectionValidationResult>;
	}

	/** The list Kusto data connection validation result. */
	export interface DataConnectionValidationListResultFormProperties {
	}
	export function CreateDataConnectionValidationListResultFormGroup() {
		return new FormGroup<DataConnectionValidationListResultFormProperties>({
		});

	}


	/** The result returned from a data connection validation request. */
	export interface DataConnectionValidationResult {

		/** A message which indicates a problem in data connection validation. */
		errorMessage?: string | null;
	}

	/** The result returned from a data connection validation request. */
	export interface DataConnectionValidationResultFormProperties {

		/** A message which indicates a problem in data connection validation. */
		errorMessage: FormControl<string | null | undefined>,
	}
	export function CreateDataConnectionValidationResultFormGroup() {
		return new FormGroup<DataConnectionValidationResultFormProperties>({
			errorMessage: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Database {
	}
	export interface DatabaseFormProperties {
	}
	export function CreateDatabaseFormGroup() {
		return new FormGroup<DatabaseFormProperties>({
		});

	}


	/** The list Kusto databases operation response. */
	export interface DatabaseListResult {

		/** The list of Kusto databases. */
		value?: Array<Database>;
	}

	/** The list Kusto databases operation response. */
	export interface DatabaseListResultFormProperties {
	}
	export function CreateDatabaseListResultFormGroup() {
		return new FormGroup<DatabaseListResultFormProperties>({
		});

	}


	/** A class representing database principal entity. */
	export interface DatabasePrincipal {

		/** Application id - relevant only for application principal type. */
		appId?: string | null;

		/** Database principal email if exists. */
		email?: string | null;

		/** Database principal fully qualified name. */
		fqn?: string | null;

		/**
		 * Database principal name.
		 * Required
		 */
		name: string;

		/**
		 * Database principal role.
		 * Required
		 */
		role: DatabasePrincipalRole;

		/** The tenant name of the principal */
		tenantName?: string | null;

		/**
		 * Database principal type.
		 * Required
		 */
		type: ClusterPrincipalPropertiesPrincipalType;
	}

	/** A class representing database principal entity. */
	export interface DatabasePrincipalFormProperties {

		/** Application id - relevant only for application principal type. */
		appId: FormControl<string | null | undefined>,

		/** Database principal email if exists. */
		email: FormControl<string | null | undefined>,

		/** Database principal fully qualified name. */
		fqn: FormControl<string | null | undefined>,

		/**
		 * Database principal name.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Database principal role.
		 * Required
		 */
		role: FormControl<DatabasePrincipalRole | null | undefined>,

		/** The tenant name of the principal */
		tenantName: FormControl<string | null | undefined>,

		/**
		 * Database principal type.
		 * Required
		 */
		type: FormControl<ClusterPrincipalPropertiesPrincipalType | null | undefined>,
	}
	export function CreateDatabasePrincipalFormGroup() {
		return new FormGroup<DatabasePrincipalFormProperties>({
			appId: new FormControl<string | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
			fqn: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			role: new FormControl<DatabasePrincipalRole | null | undefined>(undefined, [Validators.required]),
			tenantName: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<ClusterPrincipalPropertiesPrincipalType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum DatabasePrincipalRole { Admin = 0, Ingestor = 1, Monitor = 2, User = 3, UnrestrictedViewers = 4, Viewer = 5 }

	export interface DatabasePrincipalAssignment {
	}
	export interface DatabasePrincipalAssignmentFormProperties {
	}
	export function CreateDatabasePrincipalAssignmentFormGroup() {
		return new FormGroup<DatabasePrincipalAssignmentFormProperties>({
		});

	}


	/** A principal assignment check name availability request. */
	export interface DatabasePrincipalAssignmentCheckNameRequest {

		/**
		 * Principal Assignment resource name.
		 * Required
		 */
		name: string;

		/**
		 * The type of resource, Microsoft.Kusto/clusters/databases/principalAssignments.
		 * Required
		 */
		type: DatabasePrincipalAssignmentCheckNameRequestType;
	}

	/** A principal assignment check name availability request. */
	export interface DatabasePrincipalAssignmentCheckNameRequestFormProperties {

		/**
		 * Principal Assignment resource name.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The type of resource, Microsoft.Kusto/clusters/databases/principalAssignments.
		 * Required
		 */
		type: FormControl<DatabasePrincipalAssignmentCheckNameRequestType | null | undefined>,
	}
	export function CreateDatabasePrincipalAssignmentCheckNameRequestFormGroup() {
		return new FormGroup<DatabasePrincipalAssignmentCheckNameRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<DatabasePrincipalAssignmentCheckNameRequestType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum DatabasePrincipalAssignmentCheckNameRequestType { 'Microsoft.Kusto/clusters/databases/principalAssignments' = 0 }


	/** The list Kusto database principal assignments operation response. */
	export interface DatabasePrincipalAssignmentListResult {

		/** The list of Kusto database principal assignments. */
		value?: Array<DatabasePrincipalAssignment>;
	}

	/** The list Kusto database principal assignments operation response. */
	export interface DatabasePrincipalAssignmentListResultFormProperties {
	}
	export function CreateDatabasePrincipalAssignmentListResultFormGroup() {
		return new FormGroup<DatabasePrincipalAssignmentListResultFormProperties>({
		});

	}


	/** The list Kusto database principals operation request. */
	export interface DatabasePrincipalListRequest {

		/** The list of Kusto database principals. */
		value?: Array<DatabasePrincipal>;
	}

	/** The list Kusto database principals operation request. */
	export interface DatabasePrincipalListRequestFormProperties {
	}
	export function CreateDatabasePrincipalListRequestFormGroup() {
		return new FormGroup<DatabasePrincipalListRequestFormProperties>({
		});

	}


	/** The list Kusto database principals operation response. */
	export interface DatabasePrincipalListResult {

		/** The list of Kusto database principals. */
		value?: Array<DatabasePrincipal>;
	}

	/** The list Kusto database principals operation response. */
	export interface DatabasePrincipalListResultFormProperties {
	}
	export function CreateDatabasePrincipalListResultFormGroup() {
		return new FormGroup<DatabasePrincipalListResultFormProperties>({
		});

	}


	/** A class representing database principal property. */
	export interface DatabasePrincipalProperties {

		/**
		 * The principal ID assigned to the database principal. It can be a user email, application ID, or security group name.
		 * Required
		 */
		principalId: string;

		/** The principal name */
		principalName?: string | null;

		/**
		 * Principal type.
		 * Required
		 */
		principalType: ClusterPrincipalPropertiesPrincipalType;

		/** The provisioned state of the resource. */
		provisioningState?: AttachedDatabaseConfigurationPropertiesProvisioningState | null;

		/**
		 * Database principal role.
		 * Required
		 */
		role: DatabasePrincipalRole;

		/** The tenant id of the principal */
		tenantId?: string | null;

		/** The tenant name of the principal */
		tenantName?: string | null;
	}

	/** A class representing database principal property. */
	export interface DatabasePrincipalPropertiesFormProperties {

		/**
		 * The principal ID assigned to the database principal. It can be a user email, application ID, or security group name.
		 * Required
		 */
		principalId: FormControl<string | null | undefined>,

		/** The principal name */
		principalName: FormControl<string | null | undefined>,

		/**
		 * Principal type.
		 * Required
		 */
		principalType: FormControl<ClusterPrincipalPropertiesPrincipalType | null | undefined>,

		/** The provisioned state of the resource. */
		provisioningState: FormControl<AttachedDatabaseConfigurationPropertiesProvisioningState | null | undefined>,

		/**
		 * Database principal role.
		 * Required
		 */
		role: FormControl<DatabasePrincipalRole | null | undefined>,

		/** The tenant id of the principal */
		tenantId: FormControl<string | null | undefined>,

		/** The tenant name of the principal */
		tenantName: FormControl<string | null | undefined>,
	}
	export function CreateDatabasePrincipalPropertiesFormGroup() {
		return new FormGroup<DatabasePrincipalPropertiesFormProperties>({
			principalId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			principalName: new FormControl<string | null | undefined>(undefined),
			principalType: new FormControl<ClusterPrincipalPropertiesPrincipalType | null | undefined>(undefined, [Validators.required]),
			provisioningState: new FormControl<AttachedDatabaseConfigurationPropertiesProvisioningState | null | undefined>(undefined),
			role: new FormControl<DatabasePrincipalRole | null | undefined>(undefined, [Validators.required]),
			tenantId: new FormControl<string | null | undefined>(undefined),
			tenantName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A class that contains database statistics information. */
	export interface DatabaseStatistics {

		/** The database size - the total size of compressed data and index in bytes. */
		size?: number | null;
	}

	/** A class that contains database statistics information. */
	export interface DatabaseStatisticsFormProperties {

		/** The database size - the total size of compressed data and index in bytes. */
		size: FormControl<number | null | undefined>,
	}
	export function CreateDatabaseStatisticsFormGroup() {
		return new FormGroup<DatabaseStatisticsFormProperties>({
			size: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DiagnoseVirtualNetworkResult {

		/** The list of network connectivity diagnostic finding */
		findings?: Array<string>;
	}
	export interface DiagnoseVirtualNetworkResultFormProperties {
	}
	export function CreateDiagnoseVirtualNetworkResultFormGroup() {
		return new FormGroup<DiagnoseVirtualNetworkResultFormProperties>({
		});

	}


	/** Class representing the Kusto event grid connection properties. */
	export interface EventGridConnectionProperties {

		/**
		 * The event hub consumer group.
		 * Required
		 */
		consumerGroup: string;

		/**
		 * The data format of the message. Optionally the data format can be added to each message.
		 * Required
		 */
		dataFormat: EventGridConnectionPropertiesDataFormat;

		/**
		 * The resource ID where the event grid is configured to send events.
		 * Required
		 */
		eventHubResourceId: string;

		/** The mapping rule to be used to ingest the data. Optionally the mapping information can be added to each message. */
		mappingRuleName?: string | null;

		/**
		 * The resource ID of the storage account where the data resides.
		 * Required
		 */
		storageAccountResourceId: string;

		/**
		 * The table where the data should be ingested. Optionally the table information can be added to each message.
		 * Required
		 */
		tableName: string;
	}

	/** Class representing the Kusto event grid connection properties. */
	export interface EventGridConnectionPropertiesFormProperties {

		/**
		 * The event hub consumer group.
		 * Required
		 */
		consumerGroup: FormControl<string | null | undefined>,

		/**
		 * The data format of the message. Optionally the data format can be added to each message.
		 * Required
		 */
		dataFormat: FormControl<EventGridConnectionPropertiesDataFormat | null | undefined>,

		/**
		 * The resource ID where the event grid is configured to send events.
		 * Required
		 */
		eventHubResourceId: FormControl<string | null | undefined>,

		/** The mapping rule to be used to ingest the data. Optionally the mapping information can be added to each message. */
		mappingRuleName: FormControl<string | null | undefined>,

		/**
		 * The resource ID of the storage account where the data resides.
		 * Required
		 */
		storageAccountResourceId: FormControl<string | null | undefined>,

		/**
		 * The table where the data should be ingested. Optionally the table information can be added to each message.
		 * Required
		 */
		tableName: FormControl<string | null | undefined>,
	}
	export function CreateEventGridConnectionPropertiesFormGroup() {
		return new FormGroup<EventGridConnectionPropertiesFormProperties>({
			consumerGroup: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			dataFormat: new FormControl<EventGridConnectionPropertiesDataFormat | null | undefined>(undefined, [Validators.required]),
			eventHubResourceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			mappingRuleName: new FormControl<string | null | undefined>(undefined),
			storageAccountResourceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			tableName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum EventGridConnectionPropertiesDataFormat { MULTIJSON = 0, JSON = 1, CSV = 2, TSV = 3, SCSV = 4, SOHSV = 5, PSV = 6, TXT = 7, RAW = 8, SINGLEJSON = 9, AVRO = 10, TSVE = 11, PARQUET = 12, ORC = 13 }


	/** Class representing an Event Grid data connection. */
	export interface EventGridDataConnection extends DataConnection {

		/** Class representing the Kusto event grid connection properties. */
		properties?: EventGridConnectionProperties;
	}

	/** Class representing an Event Grid data connection. */
	export interface EventGridDataConnectionFormProperties extends DataConnectionFormProperties {
	}
	export function CreateEventGridDataConnectionFormGroup() {
		return new FormGroup<EventGridDataConnectionFormProperties>({
		});

	}


	/** The data format of the message. Optionally the data format can be added to each message. */
	export enum EventGridDataFormat { MULTIJSON = 0, JSON = 1, CSV = 2, TSV = 3, SCSV = 4, SOHSV = 5, PSV = 6, TXT = 7, RAW = 8, SINGLEJSON = 9, AVRO = 10, TSVE = 11, PARQUET = 12, ORC = 13 }


	/** Class representing the Kusto event hub connection properties. */
	export interface EventHubConnectionProperties {

		/** The compression type */
		compression?: Compression | null;

		/**
		 * The event hub consumer group.
		 * Required
		 */
		consumerGroup: string;

		/** The data format of the message. Optionally the data format can be added to each message. */
		dataFormat?: EventGridConnectionPropertiesDataFormat | null;

		/**
		 * The resource ID of the event hub to be used to create a data connection.
		 * Required
		 */
		eventHubResourceId: string;

		/** System properties of the event hub */
		eventSystemProperties?: Array<string>;

		/** The mapping rule to be used to ingest the data. Optionally the mapping information can be added to each message. */
		mappingRuleName?: string | null;

		/** The table where the data should be ingested. Optionally the table information can be added to each message. */
		tableName?: string | null;
	}

	/** Class representing the Kusto event hub connection properties. */
	export interface EventHubConnectionPropertiesFormProperties {

		/** The compression type */
		compression: FormControl<Compression | null | undefined>,

		/**
		 * The event hub consumer group.
		 * Required
		 */
		consumerGroup: FormControl<string | null | undefined>,

		/** The data format of the message. Optionally the data format can be added to each message. */
		dataFormat: FormControl<EventGridConnectionPropertiesDataFormat | null | undefined>,

		/**
		 * The resource ID of the event hub to be used to create a data connection.
		 * Required
		 */
		eventHubResourceId: FormControl<string | null | undefined>,

		/** The mapping rule to be used to ingest the data. Optionally the mapping information can be added to each message. */
		mappingRuleName: FormControl<string | null | undefined>,

		/** The table where the data should be ingested. Optionally the table information can be added to each message. */
		tableName: FormControl<string | null | undefined>,
	}
	export function CreateEventHubConnectionPropertiesFormGroup() {
		return new FormGroup<EventHubConnectionPropertiesFormProperties>({
			compression: new FormControl<Compression | null | undefined>(undefined),
			consumerGroup: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			dataFormat: new FormControl<EventGridConnectionPropertiesDataFormat | null | undefined>(undefined),
			eventHubResourceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			mappingRuleName: new FormControl<string | null | undefined>(undefined),
			tableName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Class representing an event hub data connection. */
	export interface EventHubDataConnection extends DataConnection {

		/** Class representing the Kusto event hub connection properties. */
		properties?: EventHubConnectionProperties;
	}

	/** Class representing an event hub data connection. */
	export interface EventHubDataConnectionFormProperties extends DataConnectionFormProperties {
	}
	export function CreateEventHubDataConnectionFormGroup() {
		return new FormGroup<EventHubDataConnectionFormProperties>({
		});

	}


	/** The data format of the message. Optionally the data format can be added to each message. */
	export enum EventHubDataFormat { MULTIJSON = 0, JSON = 1, CSV = 2, TSV = 3, SCSV = 4, SOHSV = 5, PSV = 6, TXT = 7, RAW = 8, SINGLEJSON = 9, AVRO = 10, TSVE = 11, PARQUET = 12, ORC = 13 }


	/** A class representing follower database request. */
	export interface FollowerDatabaseDefinition {

		/**
		 * Resource name of the attached database configuration in the follower cluster.
		 * Required
		 */
		attachedDatabaseConfigurationName: string;

		/**
		 * Resource id of the cluster that follows a database owned by this cluster.
		 * Required
		 */
		clusterResourceId: string;

		/** The database name owned by this cluster that was followed. * in case following all databases. */
		databaseName?: string | null;
	}

	/** A class representing follower database request. */
	export interface FollowerDatabaseDefinitionFormProperties {

		/**
		 * Resource name of the attached database configuration in the follower cluster.
		 * Required
		 */
		attachedDatabaseConfigurationName: FormControl<string | null | undefined>,

		/**
		 * Resource id of the cluster that follows a database owned by this cluster.
		 * Required
		 */
		clusterResourceId: FormControl<string | null | undefined>,

		/** The database name owned by this cluster that was followed. * in case following all databases. */
		databaseName: FormControl<string | null | undefined>,
	}
	export function CreateFollowerDatabaseDefinitionFormGroup() {
		return new FormGroup<FollowerDatabaseDefinitionFormProperties>({
			attachedDatabaseConfigurationName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			clusterResourceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			databaseName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The list Kusto database principals operation response. */
	export interface FollowerDatabaseListResult {

		/** The list of follower database result. */
		value?: Array<FollowerDatabaseDefinition>;
	}

	/** The list Kusto database principals operation response. */
	export interface FollowerDatabaseListResultFormProperties {
	}
	export function CreateFollowerDatabaseListResultFormGroup() {
		return new FormGroup<FollowerDatabaseListResultFormProperties>({
		});

	}


	/** Identity for the resource. */
	export interface Identity {

		/** The principal ID of resource identity. */
		principalId?: string | null;

		/** The tenant ID of resource. */
		tenantId?: string | null;

		/**
		 * The identity type.
		 * Required
		 */
		type: IdentityType;

		/** The list of user identities associated with the Kusto cluster. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'. */
		userAssignedIdentities?: {[id: string]: IdentityUserAssignedIdentities };
	}

	/** Identity for the resource. */
	export interface IdentityFormProperties {

		/** The principal ID of resource identity. */
		principalId: FormControl<string | null | undefined>,

		/** The tenant ID of resource. */
		tenantId: FormControl<string | null | undefined>,

		/**
		 * The identity type.
		 * Required
		 */
		type: FormControl<IdentityType | null | undefined>,

		/** The list of user identities associated with the Kusto cluster. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'. */
		userAssignedIdentities: FormControl<{[id: string]: IdentityUserAssignedIdentities } | null | undefined>,
	}
	export function CreateIdentityFormGroup() {
		return new FormGroup<IdentityFormProperties>({
			principalId: new FormControl<string | null | undefined>(undefined),
			tenantId: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<IdentityType | null | undefined>(undefined, [Validators.required]),
			userAssignedIdentities: new FormControl<{[id: string]: IdentityUserAssignedIdentities } | null | undefined>(undefined),
		});

	}

	export enum IdentityType { None = 0, SystemAssigned = 1 }

	export interface IdentityUserAssignedIdentities {

		/** The client id of user assigned identity. */
		clientId?: string | null;

		/** The principal id of user assigned identity. */
		principalId?: string | null;
	}
	export interface IdentityUserAssignedIdentitiesFormProperties {

		/** The client id of user assigned identity. */
		clientId: FormControl<string | null | undefined>,

		/** The principal id of user assigned identity. */
		principalId: FormControl<string | null | undefined>,
	}
	export function CreateIdentityUserAssignedIdentitiesFormGroup() {
		return new FormGroup<IdentityUserAssignedIdentitiesFormProperties>({
			clientId: new FormControl<string | null | undefined>(undefined),
			principalId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Class representing the Kusto Iot hub connection properties. */
	export interface IotHubConnectionProperties {

		/**
		 * The iot hub consumer group.
		 * Required
		 */
		consumerGroup: string;

		/** The data format of the message. Optionally the data format can be added to each message. */
		dataFormat?: EventGridConnectionPropertiesDataFormat | null;

		/** System properties of the iot hub */
		eventSystemProperties?: Array<string>;

		/**
		 * The resource ID of the Iot hub to be used to create a data connection.
		 * Required
		 */
		iotHubResourceId: string;

		/** The mapping rule to be used to ingest the data. Optionally the mapping information can be added to each message. */
		mappingRuleName?: string | null;

		/**
		 * The name of the share access policy
		 * Required
		 */
		sharedAccessPolicyName: string;

		/** The table where the data should be ingested. Optionally the table information can be added to each message. */
		tableName?: string | null;
	}

	/** Class representing the Kusto Iot hub connection properties. */
	export interface IotHubConnectionPropertiesFormProperties {

		/**
		 * The iot hub consumer group.
		 * Required
		 */
		consumerGroup: FormControl<string | null | undefined>,

		/** The data format of the message. Optionally the data format can be added to each message. */
		dataFormat: FormControl<EventGridConnectionPropertiesDataFormat | null | undefined>,

		/**
		 * The resource ID of the Iot hub to be used to create a data connection.
		 * Required
		 */
		iotHubResourceId: FormControl<string | null | undefined>,

		/** The mapping rule to be used to ingest the data. Optionally the mapping information can be added to each message. */
		mappingRuleName: FormControl<string | null | undefined>,

		/**
		 * The name of the share access policy
		 * Required
		 */
		sharedAccessPolicyName: FormControl<string | null | undefined>,

		/** The table where the data should be ingested. Optionally the table information can be added to each message. */
		tableName: FormControl<string | null | undefined>,
	}
	export function CreateIotHubConnectionPropertiesFormGroup() {
		return new FormGroup<IotHubConnectionPropertiesFormProperties>({
			consumerGroup: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			dataFormat: new FormControl<EventGridConnectionPropertiesDataFormat | null | undefined>(undefined),
			iotHubResourceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			mappingRuleName: new FormControl<string | null | undefined>(undefined),
			sharedAccessPolicyName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			tableName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Class representing an iot hub data connection. */
	export interface IotHubDataConnection extends DataConnection {

		/** Class representing the Kusto Iot hub connection properties. */
		properties?: IotHubConnectionProperties;
	}

	/** Class representing an iot hub data connection. */
	export interface IotHubDataConnectionFormProperties extends DataConnectionFormProperties {
	}
	export function CreateIotHubDataConnectionFormGroup() {
		return new FormGroup<IotHubDataConnectionFormProperties>({
		});

	}


	/** The data format of the message. Optionally the data format can be added to each message. */
	export enum IotHubDataFormat { MULTIJSON = 0, JSON = 1, CSV = 2, TSV = 3, SCSV = 4, SOHSV = 5, PSV = 6, TXT = 7, RAW = 8, SINGLEJSON = 9, AVRO = 10, TSVE = 11, PARQUET = 12, ORC = 13 }


	/** Properties of the key vault. */
	export interface KeyVaultProperties {

		/**
		 * The name of the key vault key.
		 * Required
		 */
		keyName: string;

		/**
		 * The Uri of the key vault.
		 * Required
		 */
		keyVaultUri: string;

		/**
		 * The version of the key vault key.
		 * Required
		 */
		keyVersion: string;
	}

	/** Properties of the key vault. */
	export interface KeyVaultPropertiesFormProperties {

		/**
		 * The name of the key vault key.
		 * Required
		 */
		keyName: FormControl<string | null | undefined>,

		/**
		 * The Uri of the key vault.
		 * Required
		 */
		keyVaultUri: FormControl<string | null | undefined>,

		/**
		 * The version of the key vault key.
		 * Required
		 */
		keyVersion: FormControl<string | null | undefined>,
	}
	export function CreateKeyVaultPropertiesFormGroup() {
		return new FormGroup<KeyVaultPropertiesFormProperties>({
			keyName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			keyVaultUri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			keyVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** List of available SKUs for a Kusto Cluster. */
	export interface ListResourceSkusResult {

		/** The collection of available SKUs for an existing resource. */
		value?: Array<AzureResourceSku>;
	}

	/** List of available SKUs for a Kusto Cluster. */
	export interface ListResourceSkusResultFormProperties {
	}
	export function CreateListResourceSkusResultFormGroup() {
		return new FormGroup<ListResourceSkusResultFormProperties>({
		});

	}

	export interface Operation {
		display?: any;

		/** This is of the format {provider}/{resource}/{operation}. */
		name?: string | null;
		origin?: string | null;
		properties?: string | null;
	}
	export interface OperationFormProperties {
		display: FormControl<any | null | undefined>,

		/** This is of the format {provider}/{resource}/{operation}. */
		name: FormControl<string | null | undefined>,
		origin: FormControl<string | null | undefined>,
		properties: FormControl<string | null | undefined>,
	}
	export function CreateOperationFormGroup() {
		return new FormGroup<OperationFormProperties>({
			display: new FormControl<any | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			origin: new FormControl<string | null | undefined>(undefined),
			properties: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OperationListResult {
		nextLink?: string | null;
		value?: Array<Operation>;
	}
	export interface OperationListResultFormProperties {
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateOperationListResultFormGroup() {
		return new FormGroup<OperationListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Class representing a read only following database. */
	export interface ReadOnlyFollowingDatabase extends Database {

		/** Class representing the Kusto database properties. */
		properties?: ReadOnlyFollowingDatabaseProperties;
	}

	/** Class representing a read only following database. */
	export interface ReadOnlyFollowingDatabaseFormProperties extends DatabaseFormProperties {
	}
	export function CreateReadOnlyFollowingDatabaseFormGroup() {
		return new FormGroup<ReadOnlyFollowingDatabaseFormProperties>({
		});

	}


	/** Class representing the Kusto database properties. */
	export interface ReadOnlyFollowingDatabaseProperties {

		/** The name of the attached database configuration cluster */
		attachedDatabaseConfigurationName?: string | null;

		/** The time the data should be kept in cache for fast queries in TimeSpan. */
		hotCachePeriod?: string | null;

		/** The name of the leader cluster */
		leaderClusterResourceId?: string | null;

		/** The principals modification kind of the database */
		principalsModificationKind?: AttachedDatabaseConfigurationPropertiesDefaultPrincipalsModificationKind | null;

		/** The provisioned state of the resource. */
		provisioningState?: AttachedDatabaseConfigurationPropertiesProvisioningState | null;

		/** The time the data should be kept before it stops being accessible to queries in TimeSpan. */
		softDeletePeriod?: string | null;

		/** A class that contains database statistics information. */
		statistics?: DatabaseStatistics;
	}

	/** Class representing the Kusto database properties. */
	export interface ReadOnlyFollowingDatabasePropertiesFormProperties {

		/** The name of the attached database configuration cluster */
		attachedDatabaseConfigurationName: FormControl<string | null | undefined>,

		/** The time the data should be kept in cache for fast queries in TimeSpan. */
		hotCachePeriod: FormControl<string | null | undefined>,

		/** The name of the leader cluster */
		leaderClusterResourceId: FormControl<string | null | undefined>,

		/** The principals modification kind of the database */
		principalsModificationKind: FormControl<AttachedDatabaseConfigurationPropertiesDefaultPrincipalsModificationKind | null | undefined>,

		/** The provisioned state of the resource. */
		provisioningState: FormControl<AttachedDatabaseConfigurationPropertiesProvisioningState | null | undefined>,

		/** The time the data should be kept before it stops being accessible to queries in TimeSpan. */
		softDeletePeriod: FormControl<string | null | undefined>,
	}
	export function CreateReadOnlyFollowingDatabasePropertiesFormGroup() {
		return new FormGroup<ReadOnlyFollowingDatabasePropertiesFormProperties>({
			attachedDatabaseConfigurationName: new FormControl<string | null | undefined>(undefined),
			hotCachePeriod: new FormControl<string | null | undefined>(undefined),
			leaderClusterResourceId: new FormControl<string | null | undefined>(undefined),
			principalsModificationKind: new FormControl<AttachedDatabaseConfigurationPropertiesDefaultPrincipalsModificationKind | null | undefined>(undefined),
			provisioningState: new FormControl<AttachedDatabaseConfigurationPropertiesProvisioningState | null | undefined>(undefined),
			softDeletePeriod: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Class representing a read write database. */
	export interface ReadWriteDatabase extends Database {

		/** Class representing the Kusto database properties. */
		properties?: ReadWriteDatabaseProperties;
	}

	/** Class representing a read write database. */
	export interface ReadWriteDatabaseFormProperties extends DatabaseFormProperties {
	}
	export function CreateReadWriteDatabaseFormGroup() {
		return new FormGroup<ReadWriteDatabaseFormProperties>({
		});

	}


	/** Class representing the Kusto database properties. */
	export interface ReadWriteDatabaseProperties {

		/** The time the data should be kept in cache for fast queries in TimeSpan. */
		hotCachePeriod?: string | null;

		/** Indicates whether the database is followed. */
		isFollowed?: string | null;

		/** The provisioned state of the resource. */
		provisioningState?: AttachedDatabaseConfigurationPropertiesProvisioningState | null;

		/** The time the data should be kept before it stops being accessible to queries in TimeSpan. */
		softDeletePeriod?: string | null;

		/** A class that contains database statistics information. */
		statistics?: DatabaseStatistics;
	}

	/** Class representing the Kusto database properties. */
	export interface ReadWriteDatabasePropertiesFormProperties {

		/** The time the data should be kept in cache for fast queries in TimeSpan. */
		hotCachePeriod: FormControl<string | null | undefined>,

		/** Indicates whether the database is followed. */
		isFollowed: FormControl<string | null | undefined>,

		/** The provisioned state of the resource. */
		provisioningState: FormControl<AttachedDatabaseConfigurationPropertiesProvisioningState | null | undefined>,

		/** The time the data should be kept before it stops being accessible to queries in TimeSpan. */
		softDeletePeriod: FormControl<string | null | undefined>,
	}
	export function CreateReadWriteDatabasePropertiesFormGroup() {
		return new FormGroup<ReadWriteDatabasePropertiesFormProperties>({
			hotCachePeriod: new FormControl<string | null | undefined>(undefined),
			isFollowed: new FormControl<string | null | undefined>(undefined),
			provisioningState: new FormControl<AttachedDatabaseConfigurationPropertiesProvisioningState | null | undefined>(undefined),
			softDeletePeriod: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The Kusto SKU description of given resource type */
	export interface SkuDescription {

		/** Locations and zones */
		locationInfo?: Array<SkuLocationInfoItem>;

		/** The set of locations that the SKU is available */
		locations?: Array<string>;

		/** The name of the SKU */
		name?: string | null;

		/** The resource type */
		resourceType?: string | null;

		/** The restrictions because of which SKU cannot be used */
		restrictions?: Array<string>;

		/** The tier of the SKU */
		tier?: string | null;
	}

	/** The Kusto SKU description of given resource type */
	export interface SkuDescriptionFormProperties {

		/** The name of the SKU */
		name: FormControl<string | null | undefined>,

		/** The resource type */
		resourceType: FormControl<string | null | undefined>,

		/** The tier of the SKU */
		tier: FormControl<string | null | undefined>,
	}
	export function CreateSkuDescriptionFormGroup() {
		return new FormGroup<SkuDescriptionFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			resourceType: new FormControl<string | null | undefined>(undefined),
			tier: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The locations and zones info for SKU. */
	export interface SkuLocationInfoItem {

		/**
		 * The available location of the SKU.
		 * Required
		 */
		location: string;

		/** The available zone of the SKU. */
		zones?: Array<string>;
	}

	/** The locations and zones info for SKU. */
	export interface SkuLocationInfoItemFormProperties {

		/**
		 * The available location of the SKU.
		 * Required
		 */
		location: FormControl<string | null | undefined>,
	}
	export function CreateSkuLocationInfoItemFormGroup() {
		return new FormGroup<SkuLocationInfoItemFormProperties>({
			location: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The list of the EngagementFabric SKU descriptions */
	export interface SkuDescriptionList {

		/** SKU descriptions */
		value?: Array<SkuDescription>;
	}

	/** The list of the EngagementFabric SKU descriptions */
	export interface SkuDescriptionListFormProperties {
	}
	export function CreateSkuDescriptionListFormGroup() {
		return new FormGroup<SkuDescriptionListFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Lists available operations for the Microsoft.Kusto provider.
		 * Get providers/Microsoft.Kusto/operations
		 * @param {string} api_version Client API Version.
		 * @return {OperationListResult} The operation was successful. The response contains the list of available operations.
		 */
		Operations_List(api_version: string): Observable<OperationListResult> {
			return this.http.get<OperationListResult>(this.baseUri + 'providers/Microsoft.Kusto/operations?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Lists all Kusto clusters within a subscription.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Kusto/clusters
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client API Version.
		 * @return {ClusterListResult} OK.
		 */
		Clusters_List(subscriptionId: string, api_version: string): Observable<ClusterListResult> {
			return this.http.get<ClusterListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Kusto/clusters&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Checks that the cluster name is valid and is not already in use.
		 * Post subscriptions/{subscriptionId}/providers/Microsoft.Kusto/locations/{location}/checkNameAvailability
		 * @param {string} api_version Client API Version.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} location Azure location.
		 * @param {ClusterCheckNameRequest} requestBody The name of the cluster.
		 * @return {CheckNameResult} OK -- Operation to check the kusto resource name availability was successful.
		 */
		Clusters_CheckNameAvailability(api_version: string, subscriptionId: string, location: string, requestBody: ClusterCheckNameRequest): Observable<CheckNameResult> {
			return this.http.post<CheckNameResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Kusto/locations/' + (location == null ? '' : encodeURIComponent(location)) + '/checkNameAvailability?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists eligible SKUs for Kusto resource provider.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Kusto/skus
		 * @param {string} api_version Client API Version.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {SkuDescriptionList} OK.
		 */
		Clusters_ListSkus(api_version: string, subscriptionId: string): Observable<SkuDescriptionList> {
			return this.http.get<SkuDescriptionList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Kusto/skus?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Lists all Kusto clusters within a resource group.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters
		 * @param {string} resourceGroupName The name of the resource group containing the Kusto cluster.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client API Version.
		 * @return {ClusterListResult} OK.
		 */
		Clusters_ListByResourceGroup(resourceGroupName: string, subscriptionId: string, api_version: string): Observable<ClusterListResult> {
			return this.http.get<ClusterListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Kusto/clusters&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets a Kusto cluster.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}
		 * @param {string} resourceGroupName The name of the resource group containing the Kusto cluster.
		 * @param {string} clusterName The name of the Kusto cluster.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client API Version.
		 * @return {Cluster} The Kusto cluster.
		 */
		Clusters_Get(resourceGroupName: string, clusterName: string, subscriptionId: string, api_version: string): Observable<Cluster> {
			return this.http.get<Cluster>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Kusto/clusters/' + (clusterName == null ? '' : encodeURIComponent(clusterName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Create or update a Kusto cluster.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}
		 * @param {string} resourceGroupName The name of the resource group containing the Kusto cluster.
		 * @param {string} clusterName The name of the Kusto cluster.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client API Version.
		 * @param {Cluster} requestBody The Kusto cluster parameters supplied to the CreateOrUpdate operation.
		 * @return {Cluster} Successfully updated the Cluster.
		 */
		Clusters_CreateOrUpdate(resourceGroupName: string, clusterName: string, subscriptionId: string, api_version: string, requestBody: Cluster): Observable<Cluster> {
			return this.http.put<Cluster>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Kusto/clusters/' + (clusterName == null ? '' : encodeURIComponent(clusterName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a Kusto cluster.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}
		 * @param {string} resourceGroupName The name of the resource group containing the Kusto cluster.
		 * @param {string} clusterName The name of the Kusto cluster.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client API Version.
		 * @return {void} OK -- cluster deleted successfully.
		 */
		Clusters_Delete(resourceGroupName: string, clusterName: string, subscriptionId: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Kusto/clusters/' + (clusterName == null ? '' : encodeURIComponent(clusterName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Update a Kusto cluster.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}
		 * @param {string} resourceGroupName The name of the resource group containing the Kusto cluster.
		 * @param {string} clusterName The name of the Kusto cluster.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client API Version.
		 * @param {ClusterUpdate} requestBody The Kusto cluster parameters supplied to the Update operation.
		 * @return {Cluster} Successfully updated the Cluster.
		 */
		Clusters_Update(resourceGroupName: string, clusterName: string, subscriptionId: string, api_version: string, requestBody: ClusterUpdate): Observable<Cluster> {
			return this.http.patch<Cluster>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Kusto/clusters/' + (clusterName == null ? '' : encodeURIComponent(clusterName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the list of attached database configurations of the given Kusto cluster.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}/attachedDatabaseConfigurations
		 * @param {string} resourceGroupName The name of the resource group containing the Kusto cluster.
		 * @param {string} clusterName The name of the Kusto cluster.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client API Version.
		 * @return {AttachedDatabaseConfigurationListResult} Successfully retrieved the list of attached database configurations.
		 */
		AttachedDatabaseConfigurations_ListByCluster(resourceGroupName: string, clusterName: string, subscriptionId: string, api_version: string): Observable<AttachedDatabaseConfigurationListResult> {
			return this.http.get<AttachedDatabaseConfigurationListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Kusto/clusters/' + (clusterName == null ? '' : encodeURIComponent(clusterName)) + '/attachedDatabaseConfigurations&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Returns an attached database configuration.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}/attachedDatabaseConfigurations/{attachedDatabaseConfigurationName}
		 * @param {string} resourceGroupName The name of the resource group containing the Kusto cluster.
		 * @param {string} clusterName The name of the Kusto cluster.
		 * @param {string} attachedDatabaseConfigurationName The name of the attached database configuration.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client API Version.
		 * @return {AttachedDatabaseConfiguration} Successfully retrieved the specified attached database configuration.
		 */
		AttachedDatabaseConfigurations_Get(resourceGroupName: string, clusterName: string, attachedDatabaseConfigurationName: string, subscriptionId: string, api_version: string): Observable<AttachedDatabaseConfiguration> {
			return this.http.get<AttachedDatabaseConfiguration>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Kusto/clusters/' + (clusterName == null ? '' : encodeURIComponent(clusterName)) + '/attachedDatabaseConfigurations/' + (attachedDatabaseConfigurationName == null ? '' : encodeURIComponent(attachedDatabaseConfigurationName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates or updates an attached database configuration.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}/attachedDatabaseConfigurations/{attachedDatabaseConfigurationName}
		 * @param {string} resourceGroupName The name of the resource group containing the Kusto cluster.
		 * @param {string} clusterName The name of the Kusto cluster.
		 * @param {string} attachedDatabaseConfigurationName The name of the attached database configuration.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client API Version.
		 * @param {AttachedDatabaseConfiguration} requestBody The database parameters supplied to the CreateOrUpdate operation.
		 * @return {AttachedDatabaseConfiguration} Successfully updated the database.
		 */
		AttachedDatabaseConfigurations_CreateOrUpdate(resourceGroupName: string, clusterName: string, attachedDatabaseConfigurationName: string, subscriptionId: string, api_version: string, requestBody: AttachedDatabaseConfiguration): Observable<AttachedDatabaseConfiguration> {
			return this.http.put<AttachedDatabaseConfiguration>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Kusto/clusters/' + (clusterName == null ? '' : encodeURIComponent(clusterName)) + '/attachedDatabaseConfigurations/' + (attachedDatabaseConfigurationName == null ? '' : encodeURIComponent(attachedDatabaseConfigurationName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the attached database configuration with the given name.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}/attachedDatabaseConfigurations/{attachedDatabaseConfigurationName}
		 * @param {string} resourceGroupName The name of the resource group containing the Kusto cluster.
		 * @param {string} clusterName The name of the Kusto cluster.
		 * @param {string} attachedDatabaseConfigurationName The name of the attached database configuration.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client API Version.
		 * @return {void} Successfully deleted the database.
		 */
		AttachedDatabaseConfigurations_Delete(resourceGroupName: string, clusterName: string, attachedDatabaseConfigurationName: string, subscriptionId: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Kusto/clusters/' + (clusterName == null ? '' : encodeURIComponent(clusterName)) + '/attachedDatabaseConfigurations/' + (attachedDatabaseConfigurationName == null ? '' : encodeURIComponent(attachedDatabaseConfigurationName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Checks that the database name is valid and is not already in use.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}/checkNameAvailability
		 * @param {string} resourceGroupName The name of the resource group containing the Kusto cluster.
		 * @param {string} clusterName The name of the Kusto cluster.
		 * @param {string} api_version Client API Version.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {CheckNameRequest} requestBody The name of the resource.
		 * @return {CheckNameResult} OK -- Operation to check the kusto resource name availability was successful.
		 */
		Databases_CheckNameAvailability(resourceGroupName: string, clusterName: string, api_version: string, subscriptionId: string, requestBody: CheckNameRequest): Observable<CheckNameResult> {
			return this.http.post<CheckNameResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Kusto/clusters/' + (clusterName == null ? '' : encodeURIComponent(clusterName)) + '/checkNameAvailability&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Checks that the principal assignment name is valid and is not already in use.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}/checkPrincipalAssignmentNameAvailability
		 * @param {string} resourceGroupName The name of the resource group containing the Kusto cluster.
		 * @param {string} clusterName The name of the Kusto cluster.
		 * @param {string} api_version Client API Version.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {ClusterPrincipalAssignmentCheckNameRequest} requestBody The name of the principal assignment.
		 * @return {CheckNameResult} OK -- Operation to check the kusto resource name availability was successful.
		 */
		ClusterPrincipalAssignments_CheckNameAvailability(resourceGroupName: string, clusterName: string, api_version: string, subscriptionId: string, requestBody: ClusterPrincipalAssignmentCheckNameRequest): Observable<CheckNameResult> {
			return this.http.post<CheckNameResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Kusto/clusters/' + (clusterName == null ? '' : encodeURIComponent(clusterName)) + '/checkPrincipalAssignmentNameAvailability&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the list of databases of the given Kusto cluster.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}/databases
		 * @param {string} resourceGroupName The name of the resource group containing the Kusto cluster.
		 * @param {string} clusterName The name of the Kusto cluster.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client API Version.
		 * @return {DatabaseListResult} Successfully retrieved the list of databases.
		 */
		Databases_ListByCluster(resourceGroupName: string, clusterName: string, subscriptionId: string, api_version: string): Observable<DatabaseListResult> {
			return this.http.get<DatabaseListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Kusto/clusters/' + (clusterName == null ? '' : encodeURIComponent(clusterName)) + '/databases&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Returns a database.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}/databases/{databaseName}
		 * @param {string} resourceGroupName The name of the resource group containing the Kusto cluster.
		 * @param {string} clusterName The name of the Kusto cluster.
		 * @param {string} databaseName The name of the database in the Kusto cluster.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client API Version.
		 * @return {Database} Successfully retrieved the specified database.
		 */
		Databases_Get(resourceGroupName: string, clusterName: string, databaseName: string, subscriptionId: string, api_version: string): Observable<Database> {
			return this.http.get<Database>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Kusto/clusters/' + (clusterName == null ? '' : encodeURIComponent(clusterName)) + '/databases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates or updates a database.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}/databases/{databaseName}
		 * @param {string} resourceGroupName The name of the resource group containing the Kusto cluster.
		 * @param {string} clusterName The name of the Kusto cluster.
		 * @param {string} databaseName The name of the database in the Kusto cluster.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client API Version.
		 * @param {Database} requestBody The database parameters supplied to the CreateOrUpdate operation.
		 * @return {Database} Successfully updated the database.
		 */
		Databases_CreateOrUpdate(resourceGroupName: string, clusterName: string, databaseName: string, subscriptionId: string, api_version: string, requestBody: Database): Observable<Database> {
			return this.http.put<Database>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Kusto/clusters/' + (clusterName == null ? '' : encodeURIComponent(clusterName)) + '/databases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the database with the given name.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}/databases/{databaseName}
		 * @param {string} resourceGroupName The name of the resource group containing the Kusto cluster.
		 * @param {string} clusterName The name of the Kusto cluster.
		 * @param {string} databaseName The name of the database in the Kusto cluster.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client API Version.
		 * @return {void} Successfully deleted the database.
		 */
		Databases_Delete(resourceGroupName: string, clusterName: string, databaseName: string, subscriptionId: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Kusto/clusters/' + (clusterName == null ? '' : encodeURIComponent(clusterName)) + '/databases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates a database.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}/databases/{databaseName}
		 * @param {string} resourceGroupName The name of the resource group containing the Kusto cluster.
		 * @param {string} clusterName The name of the Kusto cluster.
		 * @param {string} databaseName The name of the database in the Kusto cluster.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client API Version.
		 * @param {Database} requestBody The database parameters supplied to the Update operation.
		 * @return {Database} Successfully updated the database.
		 */
		Databases_Update(resourceGroupName: string, clusterName: string, databaseName: string, subscriptionId: string, api_version: string, requestBody: Database): Observable<Database> {
			return this.http.patch<Database>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Kusto/clusters/' + (clusterName == null ? '' : encodeURIComponent(clusterName)) + '/databases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Add Database principals permissions.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}/databases/{databaseName}/addPrincipals
		 * @param {string} resourceGroupName The name of the resource group containing the Kusto cluster.
		 * @param {string} clusterName The name of the Kusto cluster.
		 * @param {string} databaseName The name of the database in the Kusto cluster.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client API Version.
		 * @param {DatabasePrincipalListRequest} requestBody List of database principals to add.
		 * @return {DatabasePrincipalListResult} OK -- Successfully added the list of database principals. Returns the updated list of principals.
		 */
		Databases_AddPrincipals(resourceGroupName: string, clusterName: string, databaseName: string, subscriptionId: string, api_version: string, requestBody: DatabasePrincipalListRequest): Observable<DatabasePrincipalListResult> {
			return this.http.post<DatabasePrincipalListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Kusto/clusters/' + (clusterName == null ? '' : encodeURIComponent(clusterName)) + '/databases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/addPrincipals&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Checks that the data connection name is valid and is not already in use.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}/databases/{databaseName}/checkNameAvailability
		 * @param {string} resourceGroupName The name of the resource group containing the Kusto cluster.
		 * @param {string} clusterName The name of the Kusto cluster.
		 * @param {string} databaseName The name of the database in the Kusto cluster.
		 * @param {string} api_version Client API Version.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {DataConnectionCheckNameRequest} requestBody The name of the data connection.
		 * @return {CheckNameResult} OK -- Operation to check the Kusto resource name availability was successful.
		 */
		DataConnections_CheckNameAvailability(resourceGroupName: string, clusterName: string, databaseName: string, api_version: string, subscriptionId: string, requestBody: DataConnectionCheckNameRequest): Observable<CheckNameResult> {
			return this.http.post<CheckNameResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Kusto/clusters/' + (clusterName == null ? '' : encodeURIComponent(clusterName)) + '/databases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/checkNameAvailability&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Checks that the database principal assignment is valid and is not already in use.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}/databases/{databaseName}/checkPrincipalAssignmentNameAvailability
		 * @param {string} resourceGroupName The name of the resource group containing the Kusto cluster.
		 * @param {string} clusterName The name of the Kusto cluster.
		 * @param {string} databaseName The name of the database in the Kusto cluster.
		 * @param {string} api_version Client API Version.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {DatabasePrincipalAssignmentCheckNameRequest} requestBody The name of the resource.
		 * @return {CheckNameResult} OK -- Operation to check the kusto resource name availability was successful.
		 */
		DatabasePrincipalAssignments_CheckNameAvailability(resourceGroupName: string, clusterName: string, databaseName: string, api_version: string, subscriptionId: string, requestBody: DatabasePrincipalAssignmentCheckNameRequest): Observable<CheckNameResult> {
			return this.http.post<CheckNameResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Kusto/clusters/' + (clusterName == null ? '' : encodeURIComponent(clusterName)) + '/databases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/checkPrincipalAssignmentNameAvailability&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Checks that the data connection parameters are valid.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}/databases/{databaseName}/dataConnectionValidation
		 * @param {string} resourceGroupName The name of the resource group containing the Kusto cluster.
		 * @param {string} clusterName The name of the Kusto cluster.
		 * @param {string} databaseName The name of the database in the Kusto cluster.
		 * @param {string} api_version Client API Version.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {DataConnectionValidation} requestBody The data connection parameters supplied to the CreateOrUpdate operation.
		 * @return {DataConnectionValidationListResult} OK -- Operation to check the kusto resource name availability was successful.
		 */
		DataConnections_dataConnectionValidation(resourceGroupName: string, clusterName: string, databaseName: string, api_version: string, subscriptionId: string, requestBody: DataConnectionValidation): Observable<DataConnectionValidationListResult> {
			return this.http.post<DataConnectionValidationListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Kusto/clusters/' + (clusterName == null ? '' : encodeURIComponent(clusterName)) + '/databases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/dataConnectionValidation&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the list of data connections of the given Kusto database.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}/databases/{databaseName}/dataConnections
		 * @param {string} resourceGroupName The name of the resource group containing the Kusto cluster.
		 * @param {string} clusterName The name of the Kusto cluster.
		 * @param {string} databaseName The name of the database in the Kusto cluster.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client API Version.
		 * @return {DataConnectionListResult} Successfully retrieved the list of data connections.
		 */
		DataConnections_ListByDatabase(resourceGroupName: string, clusterName: string, databaseName: string, subscriptionId: string, api_version: string): Observable<DataConnectionListResult> {
			return this.http.get<DataConnectionListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Kusto/clusters/' + (clusterName == null ? '' : encodeURIComponent(clusterName)) + '/databases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/dataConnections&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Returns a data connection.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}/databases/{databaseName}/dataConnections/{dataConnectionName}
		 * @param {string} resourceGroupName The name of the resource group containing the Kusto cluster.
		 * @param {string} clusterName The name of the Kusto cluster.
		 * @param {string} databaseName The name of the database in the Kusto cluster.
		 * @param {string} dataConnectionName The name of the data connection.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client API Version.
		 * @return {DataConnection} Successfully retrieved the specified data connection.
		 */
		DataConnections_Get(resourceGroupName: string, clusterName: string, databaseName: string, dataConnectionName: string, subscriptionId: string, api_version: string): Observable<DataConnection> {
			return this.http.get<DataConnection>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Kusto/clusters/' + (clusterName == null ? '' : encodeURIComponent(clusterName)) + '/databases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/dataConnections/' + (dataConnectionName == null ? '' : encodeURIComponent(dataConnectionName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates or updates a data connection.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}/databases/{databaseName}/dataConnections/{dataConnectionName}
		 * @param {string} resourceGroupName The name of the resource group containing the Kusto cluster.
		 * @param {string} clusterName The name of the Kusto cluster.
		 * @param {string} databaseName The name of the database in the Kusto cluster.
		 * @param {string} dataConnectionName The name of the data connection.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client API Version.
		 * @param {DataConnection} requestBody The data connection parameters supplied to the CreateOrUpdate operation.
		 * @return {DataConnection} Successfully updated the data connection.
		 */
		DataConnections_CreateOrUpdate(resourceGroupName: string, clusterName: string, databaseName: string, dataConnectionName: string, subscriptionId: string, api_version: string, requestBody: DataConnection): Observable<DataConnection> {
			return this.http.put<DataConnection>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Kusto/clusters/' + (clusterName == null ? '' : encodeURIComponent(clusterName)) + '/databases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/dataConnections/' + (dataConnectionName == null ? '' : encodeURIComponent(dataConnectionName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the data connection with the given name.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}/databases/{databaseName}/dataConnections/{dataConnectionName}
		 * @param {string} resourceGroupName The name of the resource group containing the Kusto cluster.
		 * @param {string} clusterName The name of the Kusto cluster.
		 * @param {string} databaseName The name of the database in the Kusto cluster.
		 * @param {string} dataConnectionName The name of the data connection.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client API Version.
		 * @return {void} Successfully deleted the data connection.
		 */
		DataConnections_Delete(resourceGroupName: string, clusterName: string, databaseName: string, dataConnectionName: string, subscriptionId: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Kusto/clusters/' + (clusterName == null ? '' : encodeURIComponent(clusterName)) + '/databases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/dataConnections/' + (dataConnectionName == null ? '' : encodeURIComponent(dataConnectionName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates a data connection.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}/databases/{databaseName}/dataConnections/{dataConnectionName}
		 * @param {string} resourceGroupName The name of the resource group containing the Kusto cluster.
		 * @param {string} clusterName The name of the Kusto cluster.
		 * @param {string} databaseName The name of the database in the Kusto cluster.
		 * @param {string} dataConnectionName The name of the data connection.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client API Version.
		 * @param {DataConnection} requestBody The data connection parameters supplied to the Update operation.
		 * @return {DataConnection} Successfully updated the data connection.
		 */
		DataConnections_Update(resourceGroupName: string, clusterName: string, databaseName: string, dataConnectionName: string, subscriptionId: string, api_version: string, requestBody: DataConnection): Observable<DataConnection> {
			return this.http.patch<DataConnection>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Kusto/clusters/' + (clusterName == null ? '' : encodeURIComponent(clusterName)) + '/databases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/dataConnections/' + (dataConnectionName == null ? '' : encodeURIComponent(dataConnectionName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of database principals of the given Kusto cluster and database.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}/databases/{databaseName}/listPrincipals
		 * @param {string} resourceGroupName The name of the resource group containing the Kusto cluster.
		 * @param {string} clusterName The name of the Kusto cluster.
		 * @param {string} databaseName The name of the database in the Kusto cluster.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client API Version.
		 * @return {DatabasePrincipalListResult} Successfully retrieved the list of database principals.
		 */
		Databases_ListPrincipals(resourceGroupName: string, clusterName: string, databaseName: string, subscriptionId: string, api_version: string): Observable<DatabasePrincipalListResult> {
			return this.http.post<DatabasePrincipalListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Kusto/clusters/' + (clusterName == null ? '' : encodeURIComponent(clusterName)) + '/databases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/listPrincipals&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, {});
		}

		/**
		 * Lists all Kusto cluster database principalAssignments.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}/databases/{databaseName}/principalAssignments
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group containing the Kusto cluster.
		 * @param {string} clusterName The name of the Kusto cluster.
		 * @param {string} databaseName The name of the database in the Kusto cluster.
		 * @param {string} api_version Client API Version.
		 * @return {DatabasePrincipalAssignmentListResult} OK.
		 */
		DatabasePrincipalAssignments_List(subscriptionId: string, resourceGroupName: string, clusterName: string, databaseName: string, api_version: string): Observable<DatabasePrincipalAssignmentListResult> {
			return this.http.get<DatabasePrincipalAssignmentListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Kusto/clusters/' + (clusterName == null ? '' : encodeURIComponent(clusterName)) + '/databases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/principalAssignments&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets a Kusto cluster database principalAssignment.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}/databases/{databaseName}/principalAssignments/{principalAssignmentName}
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group containing the Kusto cluster.
		 * @param {string} clusterName The name of the Kusto cluster.
		 * @param {string} databaseName The name of the database in the Kusto cluster.
		 * @param {string} principalAssignmentName The name of the Kusto principalAssignment.
		 * @param {string} api_version Client API Version.
		 * @return {DatabasePrincipalAssignment} The Kusto cluster database principal assignment object.
		 */
		DatabasePrincipalAssignments_Get(subscriptionId: string, resourceGroupName: string, clusterName: string, databaseName: string, principalAssignmentName: string, api_version: string): Observable<DatabasePrincipalAssignment> {
			return this.http.get<DatabasePrincipalAssignment>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Kusto/clusters/' + (clusterName == null ? '' : encodeURIComponent(clusterName)) + '/databases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/principalAssignments/' + (principalAssignmentName == null ? '' : encodeURIComponent(principalAssignmentName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates a Kusto cluster database principalAssignment.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}/databases/{databaseName}/principalAssignments/{principalAssignmentName}
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group containing the Kusto cluster.
		 * @param {string} clusterName The name of the Kusto cluster.
		 * @param {string} databaseName The name of the database in the Kusto cluster.
		 * @param {string} principalAssignmentName The name of the Kusto principalAssignment.
		 * @param {string} api_version Client API Version.
		 * @param {DatabasePrincipalAssignment} requestBody The Kusto principalAssignments parameters supplied for the operation.
		 * @return {DatabasePrincipalAssignment} Successfully updated the PrincipalAssignments.
		 */
		DatabasePrincipalAssignments_CreateOrUpdate(subscriptionId: string, resourceGroupName: string, clusterName: string, databaseName: string, principalAssignmentName: string, api_version: string, requestBody: DatabasePrincipalAssignment): Observable<DatabasePrincipalAssignment> {
			return this.http.put<DatabasePrincipalAssignment>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Kusto/clusters/' + (clusterName == null ? '' : encodeURIComponent(clusterName)) + '/databases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/principalAssignments/' + (principalAssignmentName == null ? '' : encodeURIComponent(principalAssignmentName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a Kusto principalAssignment.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}/databases/{databaseName}/principalAssignments/{principalAssignmentName}
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group containing the Kusto cluster.
		 * @param {string} clusterName The name of the Kusto cluster.
		 * @param {string} databaseName The name of the database in the Kusto cluster.
		 * @param {string} principalAssignmentName The name of the Kusto principalAssignment.
		 * @param {string} api_version Client API Version.
		 * @return {void} OK -- principalAssignments deleted successfully.
		 */
		DatabasePrincipalAssignments_Delete(subscriptionId: string, resourceGroupName: string, clusterName: string, databaseName: string, principalAssignmentName: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Kusto/clusters/' + (clusterName == null ? '' : encodeURIComponent(clusterName)) + '/databases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/principalAssignments/' + (principalAssignmentName == null ? '' : encodeURIComponent(principalAssignmentName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Remove Database principals permissions.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}/databases/{databaseName}/removePrincipals
		 * @param {string} resourceGroupName The name of the resource group containing the Kusto cluster.
		 * @param {string} clusterName The name of the Kusto cluster.
		 * @param {string} databaseName The name of the database in the Kusto cluster.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client API Version.
		 * @param {DatabasePrincipalListRequest} requestBody List of database principals to remove.
		 * @return {DatabasePrincipalListResult} OK -- Successfully removed the list of database principals. Returns the updated list of principals.
		 */
		Databases_RemovePrincipals(resourceGroupName: string, clusterName: string, databaseName: string, subscriptionId: string, api_version: string, requestBody: DatabasePrincipalListRequest): Observable<DatabasePrincipalListResult> {
			return this.http.post<DatabasePrincipalListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Kusto/clusters/' + (clusterName == null ? '' : encodeURIComponent(clusterName)) + '/databases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/removePrincipals&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Detaches all followers of a database owned by this cluster.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}/detachFollowerDatabases
		 * @param {string} resourceGroupName The name of the resource group containing the Kusto cluster.
		 * @param {string} clusterName The name of the Kusto cluster.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client API Version.
		 * @param {FollowerDatabaseDefinition} requestBody The follower databases properties to remove.
		 * @return {void} OK.
		 */
		Clusters_DetachFollowerDatabases(resourceGroupName: string, clusterName: string, subscriptionId: string, api_version: string, requestBody: FollowerDatabaseDefinition): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Kusto/clusters/' + (clusterName == null ? '' : encodeURIComponent(clusterName)) + '/detachFollowerDatabases&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Diagnoses network connectivity status for external resources on which the service is dependent on.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}/diagnoseVirtualNetwork
		 * @param {string} resourceGroupName The name of the resource group containing the Kusto cluster.
		 * @param {string} clusterName The name of the Kusto cluster.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client API Version.
		 * @return {DiagnoseVirtualNetworkResult} OK.
		 */
		Clusters_DiagnoseVirtualNetwork(resourceGroupName: string, clusterName: string, subscriptionId: string, api_version: string): Observable<DiagnoseVirtualNetworkResult> {
			return this.http.post<DiagnoseVirtualNetworkResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Kusto/clusters/' + (clusterName == null ? '' : encodeURIComponent(clusterName)) + '/diagnoseVirtualNetwork&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, {});
		}

		/**
		 * Returns a list of databases that are owned by this cluster and were followed by another cluster.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}/listFollowerDatabases
		 * @param {string} resourceGroupName The name of the resource group containing the Kusto cluster.
		 * @param {string} clusterName The name of the Kusto cluster.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client API Version.
		 * @return {FollowerDatabaseListResult} Successfully retrieved the list of followed databases.
		 */
		Clusters_ListFollowerDatabases(resourceGroupName: string, clusterName: string, subscriptionId: string, api_version: string): Observable<FollowerDatabaseListResult> {
			return this.http.post<FollowerDatabaseListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Kusto/clusters/' + (clusterName == null ? '' : encodeURIComponent(clusterName)) + '/listFollowerDatabases&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, {});
		}

		/**
		 * Lists all Kusto cluster principalAssignments.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}/principalAssignments
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group containing the Kusto cluster.
		 * @param {string} clusterName The name of the Kusto cluster.
		 * @param {string} api_version Client API Version.
		 * @return {ClusterPrincipalAssignmentListResult} OK.
		 */
		ClusterPrincipalAssignments_List(subscriptionId: string, resourceGroupName: string, clusterName: string, api_version: string): Observable<ClusterPrincipalAssignmentListResult> {
			return this.http.get<ClusterPrincipalAssignmentListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Kusto/clusters/' + (clusterName == null ? '' : encodeURIComponent(clusterName)) + '/principalAssignments&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets a Kusto cluster principalAssignment.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}/principalAssignments/{principalAssignmentName}
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group containing the Kusto cluster.
		 * @param {string} clusterName The name of the Kusto cluster.
		 * @param {string} principalAssignmentName The name of the Kusto principalAssignment.
		 * @param {string} api_version Client API Version.
		 * @return {ClusterPrincipalAssignment} The Kusto cluster principal assignment object.
		 */
		ClusterPrincipalAssignments_Get(subscriptionId: string, resourceGroupName: string, clusterName: string, principalAssignmentName: string, api_version: string): Observable<ClusterPrincipalAssignment> {
			return this.http.get<ClusterPrincipalAssignment>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Kusto/clusters/' + (clusterName == null ? '' : encodeURIComponent(clusterName)) + '/principalAssignments/' + (principalAssignmentName == null ? '' : encodeURIComponent(principalAssignmentName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Create a Kusto cluster principalAssignment.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}/principalAssignments/{principalAssignmentName}
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group containing the Kusto cluster.
		 * @param {string} clusterName The name of the Kusto cluster.
		 * @param {string} principalAssignmentName The name of the Kusto principalAssignment.
		 * @param {string} api_version Client API Version.
		 * @param {ClusterPrincipalAssignment} requestBody The Kusto cluster principalAssignment's parameters supplied for the operation.
		 * @return {ClusterPrincipalAssignment} Successfully updated the PrincipalAssignment.
		 */
		ClusterPrincipalAssignments_CreateOrUpdate(subscriptionId: string, resourceGroupName: string, clusterName: string, principalAssignmentName: string, api_version: string, requestBody: ClusterPrincipalAssignment): Observable<ClusterPrincipalAssignment> {
			return this.http.put<ClusterPrincipalAssignment>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Kusto/clusters/' + (clusterName == null ? '' : encodeURIComponent(clusterName)) + '/principalAssignments/' + (principalAssignmentName == null ? '' : encodeURIComponent(principalAssignmentName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a Kusto cluster principalAssignment.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}/principalAssignments/{principalAssignmentName}
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group containing the Kusto cluster.
		 * @param {string} clusterName The name of the Kusto cluster.
		 * @param {string} principalAssignmentName The name of the Kusto principalAssignment.
		 * @param {string} api_version Client API Version.
		 * @return {void} OK -- principalAssignments deleted successfully.
		 */
		ClusterPrincipalAssignments_Delete(subscriptionId: string, resourceGroupName: string, clusterName: string, principalAssignmentName: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Kusto/clusters/' + (clusterName == null ? '' : encodeURIComponent(clusterName)) + '/principalAssignments/' + (principalAssignmentName == null ? '' : encodeURIComponent(principalAssignmentName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns the SKUs available for the provided resource.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}/skus
		 * @param {string} resourceGroupName The name of the resource group containing the Kusto cluster.
		 * @param {string} clusterName The name of the Kusto cluster.
		 * @param {string} api_version Client API Version.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {ListResourceSkusResult} OK.
		 */
		Clusters_ListSkusByResource(resourceGroupName: string, clusterName: string, api_version: string, subscriptionId: string): Observable<ListResourceSkusResult> {
			return this.http.get<ListResourceSkusResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Kusto/clusters/' + (clusterName == null ? '' : encodeURIComponent(clusterName)) + '/skus&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Starts a Kusto cluster.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}/start
		 * @param {string} resourceGroupName The name of the resource group containing the Kusto cluster.
		 * @param {string} clusterName The name of the Kusto cluster.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client API Version.
		 * @return {void} OK.
		 */
		Clusters_Start(resourceGroupName: string, clusterName: string, subscriptionId: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Kusto/clusters/' + (clusterName == null ? '' : encodeURIComponent(clusterName)) + '/start&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Stops a Kusto cluster.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}/stop
		 * @param {string} resourceGroupName The name of the resource group containing the Kusto cluster.
		 * @param {string} clusterName The name of the Kusto cluster.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client API Version.
		 * @return {void} OK.
		 */
		Clusters_Stop(resourceGroupName: string, clusterName: string, subscriptionId: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Kusto/clusters/' + (clusterName == null ? '' : encodeURIComponent(clusterName)) + '/stop&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}
	}

}

