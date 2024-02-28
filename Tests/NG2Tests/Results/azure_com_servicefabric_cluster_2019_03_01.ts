import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Available cluster add-on features */
	export enum AddOnFeatures { RepairManager = 'RepairManager', DnsService = 'DnsService', BackupRestoreService = 'BackupRestoreService', ResourceMonitorService = 'ResourceMonitorService' }


	/**
	 * Defines a delta health policy used to evaluate the health of an application or one of its child entities when upgrading the cluster.
	 */
	export interface ApplicationDeltaHealthPolicy {

		/**
		 * Represents the delta health policy used to evaluate the health of services belonging to a service type when upgrading the cluster.
		 */
		defaultServiceTypeDeltaHealthPolicy?: ServiceTypeDeltaHealthPolicy;

		/**
		 * Defines a map that contains specific delta health policies for different service types.
		 * Each entry specifies as key the service type name and as value a ServiceTypeDeltaHealthPolicy used to evaluate the service health when upgrading the cluster.
		 * The map is empty by default.
		 */
		serviceTypeDeltaHealthPolicies?: ServiceTypeDeltaHealthPolicyMap;
	}

	/**
	 * Defines a delta health policy used to evaluate the health of an application or one of its child entities when upgrading the cluster.
	 */
	export interface ApplicationDeltaHealthPolicyFormProperties {
	}
	export function CreateApplicationDeltaHealthPolicyFormGroup() {
		return new FormGroup<ApplicationDeltaHealthPolicyFormProperties>({
		});

	}


	/**
	 * Represents the delta health policy used to evaluate the health of services belonging to a service type when upgrading the cluster.
	 */
	export interface ServiceTypeDeltaHealthPolicy {

		/**
		 * The maximum allowed percentage of services health degradation allowed during cluster upgrades.
		 * The delta is measured between the state of the services at the beginning of upgrade and the state of the services at the time of the health evaluation.
		 * The check is performed after every upgrade domain upgrade completion to make sure the global state of the cluster is within tolerated limits.
		 * Minimum: 0
		 * Maximum: 100
		 */
		maxPercentDeltaUnhealthyServices?: number | null;
	}

	/**
	 * Represents the delta health policy used to evaluate the health of services belonging to a service type when upgrading the cluster.
	 */
	export interface ServiceTypeDeltaHealthPolicyFormProperties {

		/**
		 * The maximum allowed percentage of services health degradation allowed during cluster upgrades.
		 * The delta is measured between the state of the services at the beginning of upgrade and the state of the services at the time of the health evaluation.
		 * The check is performed after every upgrade domain upgrade completion to make sure the global state of the cluster is within tolerated limits.
		 * Minimum: 0
		 * Maximum: 100
		 */
		maxPercentDeltaUnhealthyServices: FormControl<number | null | undefined>,
	}
	export function CreateServiceTypeDeltaHealthPolicyFormGroup() {
		return new FormGroup<ServiceTypeDeltaHealthPolicyFormProperties>({
			maxPercentDeltaUnhealthyServices: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(100)]),
		});

	}


	/**
	 * Defines a map that contains specific delta health policies for different service types.
	 * Each entry specifies as key the service type name and as value a ServiceTypeDeltaHealthPolicy used to evaluate the service health when upgrading the cluster.
	 * The map is empty by default.
	 */
	export interface ServiceTypeDeltaHealthPolicyMap {
	}

	/**
	 * Defines a map that contains specific delta health policies for different service types.
	 * Each entry specifies as key the service type name and as value a ServiceTypeDeltaHealthPolicy used to evaluate the service health when upgrading the cluster.
	 * The map is empty by default.
	 */
	export interface ServiceTypeDeltaHealthPolicyMapFormProperties {
	}
	export function CreateServiceTypeDeltaHealthPolicyMapFormGroup() {
		return new FormGroup<ServiceTypeDeltaHealthPolicyMapFormProperties>({
		});

	}


	/**
	 * Defines a map that contains specific application delta health policies for different applications.
	 * Each entry specifies as key the application name and as value an ApplicationDeltaHealthPolicy used to evaluate the application health when upgrading the cluster.
	 * The application name should include the 'fabric:' URI scheme.
	 * The map is empty by default.
	 */
	export interface ApplicationDeltaHealthPolicyMap {
	}

	/**
	 * Defines a map that contains specific application delta health policies for different applications.
	 * Each entry specifies as key the application name and as value an ApplicationDeltaHealthPolicy used to evaluate the application health when upgrading the cluster.
	 * The application name should include the 'fabric:' URI scheme.
	 * The map is empty by default.
	 */
	export interface ApplicationDeltaHealthPolicyMapFormProperties {
	}
	export function CreateApplicationDeltaHealthPolicyMapFormGroup() {
		return new FormGroup<ApplicationDeltaHealthPolicyMapFormProperties>({
		});

	}


	/**
	 * Defines a health policy used to evaluate the health of an application or one of its children entities.
	 */
	export interface ApplicationHealthPolicy {

		/**
		 * Represents the health policy used to evaluate the health of services belonging to a service type.
		 */
		defaultServiceTypeHealthPolicy?: ServiceTypeHealthPolicy;

		/**
		 * Defines a ServiceTypeHealthPolicy per service type name.
		 * The entries in the map replace the default service type health policy for each specified service type.
		 * For example, in an application that contains both a stateless gateway service type and a stateful engine service type, the health policies for the stateless and stateful services can be configured differently.
		 * With policy per service type, there's more granular control of the health of the service.
		 * If no policy is specified for a service type name, the DefaultServiceTypeHealthPolicy is used for evaluation.
		 */
		serviceTypeHealthPolicies?: ServiceTypeHealthPolicyMap;
	}

	/**
	 * Defines a health policy used to evaluate the health of an application or one of its children entities.
	 */
	export interface ApplicationHealthPolicyFormProperties {
	}
	export function CreateApplicationHealthPolicyFormGroup() {
		return new FormGroup<ApplicationHealthPolicyFormProperties>({
		});

	}


	/**
	 * Represents the health policy used to evaluate the health of services belonging to a service type.
	 */
	export interface ServiceTypeHealthPolicy {

		/**
		 * The maximum percentage of services allowed to be unhealthy before your application is considered in error.
		 * Minimum: 0
		 * Maximum: 100
		 */
		maxPercentUnhealthyServices?: number | null;
	}

	/**
	 * Represents the health policy used to evaluate the health of services belonging to a service type.
	 */
	export interface ServiceTypeHealthPolicyFormProperties {

		/**
		 * The maximum percentage of services allowed to be unhealthy before your application is considered in error.
		 * Minimum: 0
		 * Maximum: 100
		 */
		maxPercentUnhealthyServices: FormControl<number | null | undefined>,
	}
	export function CreateServiceTypeHealthPolicyFormGroup() {
		return new FormGroup<ServiceTypeHealthPolicyFormProperties>({
			maxPercentUnhealthyServices: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(100)]),
		});

	}


	/**
	 * Defines a ServiceTypeHealthPolicy per service type name.
	 * The entries in the map replace the default service type health policy for each specified service type.
	 * For example, in an application that contains both a stateless gateway service type and a stateful engine service type, the health policies for the stateless and stateful services can be configured differently.
	 * With policy per service type, there's more granular control of the health of the service.
	 * If no policy is specified for a service type name, the DefaultServiceTypeHealthPolicy is used for evaluation.
	 */
	export interface ServiceTypeHealthPolicyMap {
	}

	/**
	 * Defines a ServiceTypeHealthPolicy per service type name.
	 * The entries in the map replace the default service type health policy for each specified service type.
	 * For example, in an application that contains both a stateless gateway service type and a stateful engine service type, the health policies for the stateless and stateful services can be configured differently.
	 * With policy per service type, there's more granular control of the health of the service.
	 * If no policy is specified for a service type name, the DefaultServiceTypeHealthPolicy is used for evaluation.
	 */
	export interface ServiceTypeHealthPolicyMapFormProperties {
	}
	export function CreateServiceTypeHealthPolicyMapFormGroup() {
		return new FormGroup<ServiceTypeHealthPolicyMapFormProperties>({
		});

	}


	/**
	 * Defines a map that contains specific application health policies for different applications.
	 * Each entry specifies as key the application name and as value an ApplicationHealthPolicy used to evaluate the application health.
	 * The application name should include the 'fabric:' URI scheme.
	 * The map is empty by default.
	 */
	export interface ApplicationHealthPolicyMap {
	}

	/**
	 * Defines a map that contains specific application health policies for different applications.
	 * Each entry specifies as key the application name and as value an ApplicationHealthPolicy used to evaluate the application health.
	 * The application name should include the 'fabric:' URI scheme.
	 * The map is empty by default.
	 */
	export interface ApplicationHealthPolicyMapFormProperties {
	}
	export function CreateApplicationHealthPolicyMapFormGroup() {
		return new FormGroup<ApplicationHealthPolicyMapFormProperties>({
		});

	}


	/** Operation supported by the Service Fabric resource provider */
	export interface AvailableOperationDisplay {

		/** Operation description */
		description?: string | null;

		/** The operation that can be performed. */
		operation?: string | null;

		/** The name of the provider. */
		provider?: string | null;

		/** The resource on which the operation is performed */
		resource?: string | null;
	}

	/** Operation supported by the Service Fabric resource provider */
	export interface AvailableOperationDisplayFormProperties {

		/** Operation description */
		description: FormControl<string | null | undefined>,

		/** The operation that can be performed. */
		operation: FormControl<string | null | undefined>,

		/** The name of the provider. */
		provider: FormControl<string | null | undefined>,

		/** The resource on which the operation is performed */
		resource: FormControl<string | null | undefined>,
	}
	export function CreateAvailableOperationDisplayFormGroup() {
		return new FormGroup<AvailableOperationDisplayFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			operation: new FormControl<string | null | undefined>(undefined),
			provider: new FormControl<string | null | undefined>(undefined),
			resource: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The settings to enable AAD authentication on the cluster. */
	export interface AzureActiveDirectory {

		/** Azure active directory client application id. */
		clientApplication?: string | null;

		/** Azure active directory cluster application id. */
		clusterApplication?: string | null;

		/** Azure active directory tenant id. */
		tenantId?: string | null;
	}

	/** The settings to enable AAD authentication on the cluster. */
	export interface AzureActiveDirectoryFormProperties {

		/** Azure active directory client application id. */
		clientApplication: FormControl<string | null | undefined>,

		/** Azure active directory cluster application id. */
		clusterApplication: FormControl<string | null | undefined>,

		/** Azure active directory tenant id. */
		tenantId: FormControl<string | null | undefined>,
	}
	export function CreateAzureActiveDirectoryFormGroup() {
		return new FormGroup<AzureActiveDirectoryFormProperties>({
			clientApplication: new FormControl<string | null | undefined>(undefined),
			clusterApplication: new FormControl<string | null | undefined>(undefined),
			tenantId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes the certificate details. */
	export interface CertificateDescription {

		/**
		 * Thumbprint of the primary certificate.
		 * Required
		 */
		thumbprint: string;

		/** Thumbprint of the secondary certificate. */
		thumbprintSecondary?: string | null;

		/** The local certificate store location. */
		x509StoreName?: CertificateDescriptionX509StoreName | null;
	}

	/** Describes the certificate details. */
	export interface CertificateDescriptionFormProperties {

		/**
		 * Thumbprint of the primary certificate.
		 * Required
		 */
		thumbprint: FormControl<string | null | undefined>,

		/** Thumbprint of the secondary certificate. */
		thumbprintSecondary: FormControl<string | null | undefined>,

		/** The local certificate store location. */
		x509StoreName: FormControl<CertificateDescriptionX509StoreName | null | undefined>,
	}
	export function CreateCertificateDescriptionFormGroup() {
		return new FormGroup<CertificateDescriptionFormProperties>({
			thumbprint: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			thumbprintSecondary: new FormControl<string | null | undefined>(undefined),
			x509StoreName: new FormControl<CertificateDescriptionX509StoreName | null | undefined>(undefined),
		});

	}

	export enum CertificateDescriptionX509StoreName { AddressBook = 'AddressBook', AuthRoot = 'AuthRoot', CertificateAuthority = 'CertificateAuthority', Disallowed = 'Disallowed', My = 'My', Root = 'Root', TrustedPeople = 'TrustedPeople', TrustedPublisher = 'TrustedPublisher' }


	/** Describes the client certificate details using common name. */
	export interface ClientCertificateCommonName {

		/**
		 * The common name of the client certificate.
		 * Required
		 */
		certificateCommonName: string;

		/**
		 * The issuer thumbprint of the client certificate.
		 * Required
		 */
		certificateIssuerThumbprint: string;

		/**
		 * Indicates if the client certificate has admin access to the cluster. Non admin clients can perform only read only operations on the cluster.
		 * Required
		 */
		isAdmin: boolean;
	}

	/** Describes the client certificate details using common name. */
	export interface ClientCertificateCommonNameFormProperties {

		/**
		 * The common name of the client certificate.
		 * Required
		 */
		certificateCommonName: FormControl<string | null | undefined>,

		/**
		 * The issuer thumbprint of the client certificate.
		 * Required
		 */
		certificateIssuerThumbprint: FormControl<string | null | undefined>,

		/**
		 * Indicates if the client certificate has admin access to the cluster. Non admin clients can perform only read only operations on the cluster.
		 * Required
		 */
		isAdmin: FormControl<boolean | null | undefined>,
	}
	export function CreateClientCertificateCommonNameFormGroup() {
		return new FormGroup<ClientCertificateCommonNameFormProperties>({
			certificateCommonName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			certificateIssuerThumbprint: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			isAdmin: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Describes the client certificate details using thumbprint. */
	export interface ClientCertificateThumbprint {

		/**
		 * The thumbprint of the client certificate.
		 * Required
		 */
		certificateThumbprint: string;

		/**
		 * Indicates if the client certificate has admin access to the cluster. Non admin clients can perform only read only operations on the cluster.
		 * Required
		 */
		isAdmin: boolean;
	}

	/** Describes the client certificate details using thumbprint. */
	export interface ClientCertificateThumbprintFormProperties {

		/**
		 * The thumbprint of the client certificate.
		 * Required
		 */
		certificateThumbprint: FormControl<string | null | undefined>,

		/**
		 * Indicates if the client certificate has admin access to the cluster. Non admin clients can perform only read only operations on the cluster.
		 * Required
		 */
		isAdmin: FormControl<boolean | null | undefined>,
	}
	export function CreateClientCertificateThumbprintFormGroup() {
		return new FormGroup<ClientCertificateThumbprintFormProperties>({
			certificateThumbprint: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			isAdmin: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}


	/**
	 * The cluster resource
	 */
	export interface Cluster {
	}

	/**
	 * The cluster resource
	 */
	export interface ClusterFormProperties {
	}
	export function CreateClusterFormGroup() {
		return new FormGroup<ClusterFormProperties>({
		});

	}


	/** The list results of the Service Fabric runtime versions. */
	export interface ClusterCodeVersionsListResult {

		/** The URL to use for getting the next set of results. */
		nextLink?: string | null;
		value?: Array<ClusterCodeVersionsResult>;
	}

	/** The list results of the Service Fabric runtime versions. */
	export interface ClusterCodeVersionsListResultFormProperties {

		/** The URL to use for getting the next set of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateClusterCodeVersionsListResultFormGroup() {
		return new FormGroup<ClusterCodeVersionsListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The result of the Service Fabric runtime versions */
	export interface ClusterCodeVersionsResult {

		/** The identification of the result */
		id?: string | null;

		/** The name of the result */
		name?: string | null;

		/** The detail of the Service Fabric runtime version result */
		properties?: ClusterVersionDetails;

		/** The result resource type */
		type?: string | null;
	}

	/** The result of the Service Fabric runtime versions */
	export interface ClusterCodeVersionsResultFormProperties {

		/** The identification of the result */
		id: FormControl<string | null | undefined>,

		/** The name of the result */
		name: FormControl<string | null | undefined>,

		/** The result resource type */
		type: FormControl<string | null | undefined>,
	}
	export function CreateClusterCodeVersionsResultFormGroup() {
		return new FormGroup<ClusterCodeVersionsResultFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Cluster operating system, the default will be Windows */
	export enum ClusterEnvironment { Windows = 'Windows', Linux = 'Linux' }


	/**
	 * Defines a health policy used to evaluate the health of the cluster or of a cluster node.
	 */
	export interface ClusterHealthPolicy {

		/**
		 * Defines a map that contains specific application health policies for different applications.
		 * Each entry specifies as key the application name and as value an ApplicationHealthPolicy used to evaluate the application health.
		 * The application name should include the 'fabric:' URI scheme.
		 * The map is empty by default.
		 */
		applicationHealthPolicies?: ApplicationHealthPolicyMap;

		/**
		 * The maximum allowed percentage of unhealthy applications before reporting an error. For example, to allow 10% of applications to be unhealthy, this value would be 10.
		 * The percentage represents the maximum tolerated percentage of applications that can be unhealthy before the cluster is considered in error.
		 * If the percentage is respected but there is at least one unhealthy application, the health is evaluated as Warning.
		 * This is calculated by dividing the number of unhealthy applications over the total number of application instances in the cluster, excluding applications of application types that are included in the ApplicationTypeHealthPolicyMap.
		 * The computation rounds up to tolerate one failure on small numbers of applications. Default percentage is zero.
		 * Minimum: 0
		 * Maximum: 100
		 */
		maxPercentUnhealthyApplications?: number | null;

		/**
		 * The maximum allowed percentage of unhealthy nodes before reporting an error. For example, to allow 10% of nodes to be unhealthy, this value would be 10.
		 * The percentage represents the maximum tolerated percentage of nodes that can be unhealthy before the cluster is considered in error.
		 * If the percentage is respected but there is at least one unhealthy node, the health is evaluated as Warning.
		 * The percentage is calculated by dividing the number of unhealthy nodes over the total number of nodes in the cluster.
		 * The computation rounds up to tolerate one failure on small numbers of nodes. Default percentage is zero.
		 * In large clusters, some nodes will always be down or out for repairs, so this percentage should be configured to tolerate that.
		 * Minimum: 0
		 * Maximum: 100
		 */
		maxPercentUnhealthyNodes?: number | null;
	}

	/**
	 * Defines a health policy used to evaluate the health of the cluster or of a cluster node.
	 */
	export interface ClusterHealthPolicyFormProperties {

		/**
		 * The maximum allowed percentage of unhealthy applications before reporting an error. For example, to allow 10% of applications to be unhealthy, this value would be 10.
		 * The percentage represents the maximum tolerated percentage of applications that can be unhealthy before the cluster is considered in error.
		 * If the percentage is respected but there is at least one unhealthy application, the health is evaluated as Warning.
		 * This is calculated by dividing the number of unhealthy applications over the total number of application instances in the cluster, excluding applications of application types that are included in the ApplicationTypeHealthPolicyMap.
		 * The computation rounds up to tolerate one failure on small numbers of applications. Default percentage is zero.
		 * Minimum: 0
		 * Maximum: 100
		 */
		maxPercentUnhealthyApplications: FormControl<number | null | undefined>,

		/**
		 * The maximum allowed percentage of unhealthy nodes before reporting an error. For example, to allow 10% of nodes to be unhealthy, this value would be 10.
		 * The percentage represents the maximum tolerated percentage of nodes that can be unhealthy before the cluster is considered in error.
		 * If the percentage is respected but there is at least one unhealthy node, the health is evaluated as Warning.
		 * The percentage is calculated by dividing the number of unhealthy nodes over the total number of nodes in the cluster.
		 * The computation rounds up to tolerate one failure on small numbers of nodes. Default percentage is zero.
		 * In large clusters, some nodes will always be down or out for repairs, so this percentage should be configured to tolerate that.
		 * Minimum: 0
		 * Maximum: 100
		 */
		maxPercentUnhealthyNodes: FormControl<number | null | undefined>,
	}
	export function CreateClusterHealthPolicyFormGroup() {
		return new FormGroup<ClusterHealthPolicyFormProperties>({
			maxPercentUnhealthyApplications: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(100)]),
			maxPercentUnhealthyNodes: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(100)]),
		});

	}


	/** Cluster list results */
	export interface ClusterListResult {

		/** The URL to use for getting the next set of results. */
		nextLink?: string | null;
		value?: Array<Cluster>;
	}

	/** Cluster list results */
	export interface ClusterListResultFormProperties {

		/** The URL to use for getting the next set of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateClusterListResultFormGroup() {
		return new FormGroup<ClusterListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes the cluster resource properties. */
	export interface ClusterProperties {

		/** The list of add-on features to enable in the cluster. */
		addOnFeatures?: Array<AddOnFeatures>;

		/** The Service Fabric runtime versions available for this cluster. */
		availableClusterVersions?: Array<ClusterVersionDetails>;

		/** The settings to enable AAD authentication on the cluster. */
		azureActiveDirectory?: AzureActiveDirectory;

		/** Describes the certificate details. */
		certificate?: CertificateDescription;

		/** Describes a list of server certificates referenced by common name that are used to secure the cluster. */
		certificateCommonNames?: ServerCertificateCommonNames;

		/** The list of client certificates referenced by common name that are allowed to manage the cluster. */
		clientCertificateCommonNames?: Array<ClientCertificateCommonName>;

		/** The list of client certificates referenced by thumbprint that are allowed to manage the cluster. */
		clientCertificateThumbprints?: Array<ClientCertificateThumbprint>;

		/** The Service Fabric runtime version of the cluster. This property can only by set the user when **upgradeMode** is set to 'Manual'. To get list of available Service Fabric versions for new clusters use [ClusterVersion API](./ClusterVersion.md). To get the list of available version for existing clusters use **availableClusterVersions**. */
		clusterCodeVersion?: string | null;

		/** The Azure Resource Provider endpoint. A system service in the cluster connects to this  endpoint. */
		clusterEndpoint?: string | null;

		/** A service generated unique identifier for the cluster resource. */
		clusterId?: string | null;

		/**
		 * The current state of the cluster.
		 * - WaitingForNodes - Indicates that the cluster resource is created and the resource provider is waiting for Service Fabric VM extension to boot up and report to it.
		 * - Deploying - Indicates that the Service Fabric runtime is being installed on the VMs. Cluster resource will be in this state until the cluster boots up and system services are up.
		 * - BaselineUpgrade - Indicates that the cluster is upgrading to establishes the cluster version. This upgrade is automatically initiated when the cluster boots up for the first time.
		 * - UpdatingUserConfiguration - Indicates that the cluster is being upgraded with the user provided configuration.
		 * - UpdatingUserCertificate - Indicates that the cluster is being upgraded with the user provided certificate.
		 * - UpdatingInfrastructure - Indicates that the cluster is being upgraded with the latest Service Fabric runtime version. This happens only when the **upgradeMode** is set to 'Automatic'.
		 * - EnforcingClusterVersion - Indicates that cluster is on a different version than expected and the cluster is being upgraded to the expected version.
		 * - UpgradeServiceUnreachable - Indicates that the system service in the cluster is no longer polling the Resource Provider. Clusters in this state cannot be managed by the Resource Provider.
		 * - AutoScale - Indicates that the ReliabilityLevel of the cluster is being adjusted.
		 * - Ready - Indicates that the cluster is in a stable state.
		 */
		clusterState?: ClusterPropertiesClusterState | null;

		/** The storage account information for storing Service Fabric diagnostic logs. */
		diagnosticsStorageAccountConfig?: DiagnosticsStorageAccountConfig;

		/** Indicates if the event store service is enabled. */
		eventStoreServiceEnabled?: boolean | null;

		/** The list of custom fabric settings to configure the cluster. */
		fabricSettings?: Array<SettingsSectionDescription>;

		/**
		 * The http management endpoint of the cluster.
		 * Required
		 */
		managementEndpoint: string;

		/**
		 * The list of node types in the cluster.
		 * Required
		 */
		nodeTypes: Array<NodeTypeDescription>;

		/** The provisioning state of the cluster resource. */
		provisioningState?: ClusterPropertiesProvisioningState | null;

		/**
		 * The reliability level sets the replica set size of system services. Learn about [ReliabilityLevel](https://docs.microsoft.com/azure/service-fabric/service-fabric-cluster-capacity).
		 * - None - Run the System services with a target replica set count of 1. This should only be used for test clusters.
		 * - Bronze - Run the System services with a target replica set count of 3. This should only be used for test clusters.
		 * - Silver - Run the System services with a target replica set count of 5.
		 * - Gold - Run the System services with a target replica set count of 7.
		 * - Platinum - Run the System services with a target replica set count of 9.
		 */
		reliabilityLevel?: ClusterPropertiesReliabilityLevel | null;

		/** Describes the certificate details. */
		reverseProxyCertificate?: CertificateDescription;

		/** Describes a list of server certificates referenced by common name that are used to secure the cluster. */
		reverseProxyCertificateCommonNames?: ServerCertificateCommonNames;

		/** Describes the policy used when upgrading the cluster. */
		upgradeDescription?: ClusterUpgradePolicy;

		/**
		 * The upgrade mode of the cluster when new Service Fabric runtime version is available.
		 * - Automatic - The cluster will be automatically upgraded to the latest Service Fabric runtime version as soon as it is available.
		 * - Manual - The cluster will not be automatically upgraded to the latest Service Fabric runtime version. The cluster is upgraded by setting the **clusterCodeVersion** property in the cluster resource.
		 */
		upgradeMode?: ClusterPropertiesUpgradeMode | null;

		/** The VM image VMSS has been configured with. Generic names such as Windows or Linux can be used. */
		vmImage?: string | null;
	}

	/** Describes the cluster resource properties. */
	export interface ClusterPropertiesFormProperties {

		/** The Service Fabric runtime version of the cluster. This property can only by set the user when **upgradeMode** is set to 'Manual'. To get list of available Service Fabric versions for new clusters use [ClusterVersion API](./ClusterVersion.md). To get the list of available version for existing clusters use **availableClusterVersions**. */
		clusterCodeVersion: FormControl<string | null | undefined>,

		/** The Azure Resource Provider endpoint. A system service in the cluster connects to this  endpoint. */
		clusterEndpoint: FormControl<string | null | undefined>,

		/** A service generated unique identifier for the cluster resource. */
		clusterId: FormControl<string | null | undefined>,

		/**
		 * The current state of the cluster.
		 * - WaitingForNodes - Indicates that the cluster resource is created and the resource provider is waiting for Service Fabric VM extension to boot up and report to it.
		 * - Deploying - Indicates that the Service Fabric runtime is being installed on the VMs. Cluster resource will be in this state until the cluster boots up and system services are up.
		 * - BaselineUpgrade - Indicates that the cluster is upgrading to establishes the cluster version. This upgrade is automatically initiated when the cluster boots up for the first time.
		 * - UpdatingUserConfiguration - Indicates that the cluster is being upgraded with the user provided configuration.
		 * - UpdatingUserCertificate - Indicates that the cluster is being upgraded with the user provided certificate.
		 * - UpdatingInfrastructure - Indicates that the cluster is being upgraded with the latest Service Fabric runtime version. This happens only when the **upgradeMode** is set to 'Automatic'.
		 * - EnforcingClusterVersion - Indicates that cluster is on a different version than expected and the cluster is being upgraded to the expected version.
		 * - UpgradeServiceUnreachable - Indicates that the system service in the cluster is no longer polling the Resource Provider. Clusters in this state cannot be managed by the Resource Provider.
		 * - AutoScale - Indicates that the ReliabilityLevel of the cluster is being adjusted.
		 * - Ready - Indicates that the cluster is in a stable state.
		 */
		clusterState: FormControl<ClusterPropertiesClusterState | null | undefined>,

		/** Indicates if the event store service is enabled. */
		eventStoreServiceEnabled: FormControl<boolean | null | undefined>,

		/**
		 * The http management endpoint of the cluster.
		 * Required
		 */
		managementEndpoint: FormControl<string | null | undefined>,

		/** The provisioning state of the cluster resource. */
		provisioningState: FormControl<ClusterPropertiesProvisioningState | null | undefined>,

		/**
		 * The reliability level sets the replica set size of system services. Learn about [ReliabilityLevel](https://docs.microsoft.com/azure/service-fabric/service-fabric-cluster-capacity).
		 * - None - Run the System services with a target replica set count of 1. This should only be used for test clusters.
		 * - Bronze - Run the System services with a target replica set count of 3. This should only be used for test clusters.
		 * - Silver - Run the System services with a target replica set count of 5.
		 * - Gold - Run the System services with a target replica set count of 7.
		 * - Platinum - Run the System services with a target replica set count of 9.
		 */
		reliabilityLevel: FormControl<ClusterPropertiesReliabilityLevel | null | undefined>,

		/**
		 * The upgrade mode of the cluster when new Service Fabric runtime version is available.
		 * - Automatic - The cluster will be automatically upgraded to the latest Service Fabric runtime version as soon as it is available.
		 * - Manual - The cluster will not be automatically upgraded to the latest Service Fabric runtime version. The cluster is upgraded by setting the **clusterCodeVersion** property in the cluster resource.
		 */
		upgradeMode: FormControl<ClusterPropertiesUpgradeMode | null | undefined>,

		/** The VM image VMSS has been configured with. Generic names such as Windows or Linux can be used. */
		vmImage: FormControl<string | null | undefined>,
	}
	export function CreateClusterPropertiesFormGroup() {
		return new FormGroup<ClusterPropertiesFormProperties>({
			clusterCodeVersion: new FormControl<string | null | undefined>(undefined),
			clusterEndpoint: new FormControl<string | null | undefined>(undefined),
			clusterId: new FormControl<string | null | undefined>(undefined),
			clusterState: new FormControl<ClusterPropertiesClusterState | null | undefined>(undefined),
			eventStoreServiceEnabled: new FormControl<boolean | null | undefined>(undefined),
			managementEndpoint: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			provisioningState: new FormControl<ClusterPropertiesProvisioningState | null | undefined>(undefined),
			reliabilityLevel: new FormControl<ClusterPropertiesReliabilityLevel | null | undefined>(undefined),
			upgradeMode: new FormControl<ClusterPropertiesUpgradeMode | null | undefined>(undefined),
			vmImage: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The detail of the Service Fabric runtime version result */
	export interface ClusterVersionDetails {

		/** The Service Fabric runtime version of the cluster. */
		codeVersion?: string | null;

		/** Cluster operating system, the default will be Windows */
		environment?: ClusterEnvironment | null;

		/** The date of expiry of support of the version. */
		supportExpiryUtc?: string | null;
	}

	/** The detail of the Service Fabric runtime version result */
	export interface ClusterVersionDetailsFormProperties {

		/** The Service Fabric runtime version of the cluster. */
		codeVersion: FormControl<string | null | undefined>,

		/** Cluster operating system, the default will be Windows */
		environment: FormControl<ClusterEnvironment | null | undefined>,

		/** The date of expiry of support of the version. */
		supportExpiryUtc: FormControl<string | null | undefined>,
	}
	export function CreateClusterVersionDetailsFormGroup() {
		return new FormGroup<ClusterVersionDetailsFormProperties>({
			codeVersion: new FormControl<string | null | undefined>(undefined),
			environment: new FormControl<ClusterEnvironment | null | undefined>(undefined),
			supportExpiryUtc: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ClusterPropertiesClusterState { WaitingForNodes = 'WaitingForNodes', Deploying = 'Deploying', BaselineUpgrade = 'BaselineUpgrade', UpdatingUserConfiguration = 'UpdatingUserConfiguration', UpdatingUserCertificate = 'UpdatingUserCertificate', UpdatingInfrastructure = 'UpdatingInfrastructure', EnforcingClusterVersion = 'EnforcingClusterVersion', UpgradeServiceUnreachable = 'UpgradeServiceUnreachable', AutoScale = 'AutoScale', Ready = 'Ready' }


	/** Describes a section in the fabric settings of the cluster. */
	export interface SettingsSectionDescription {

		/**
		 * The section name of the fabric settings.
		 * Required
		 */
		name: string;

		/**
		 * The collection of parameters in the section.
		 * Required
		 */
		parameters: Array<SettingsParameterDescription>;
	}

	/** Describes a section in the fabric settings of the cluster. */
	export interface SettingsSectionDescriptionFormProperties {

		/**
		 * The section name of the fabric settings.
		 * Required
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateSettingsSectionDescriptionFormGroup() {
		return new FormGroup<SettingsSectionDescriptionFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Describes a parameter in fabric settings of the cluster. */
	export interface SettingsParameterDescription {

		/**
		 * The parameter name of fabric setting.
		 * Required
		 */
		name: string;

		/**
		 * The parameter value of fabric setting.
		 * Required
		 */
		value: string;
	}

	/** Describes a parameter in fabric settings of the cluster. */
	export interface SettingsParameterDescriptionFormProperties {

		/**
		 * The parameter name of fabric setting.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The parameter value of fabric setting.
		 * Required
		 */
		value: FormControl<string | null | undefined>,
	}
	export function CreateSettingsParameterDescriptionFormGroup() {
		return new FormGroup<SettingsParameterDescriptionFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Describes a node type in the cluster, each node type represents sub set of nodes in the cluster. */
	export interface NodeTypeDescription {

		/** Port range details */
		applicationPorts?: EndpointRangeDescription;

		/** The capacity tags applied to the nodes in the node type, the cluster resource manager uses these tags to understand how much resource a node has. */
		capacities?: {[id: string]: string };

		/**
		 * The TCP cluster management endpoint port.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		clientConnectionEndpointPort: number;

		/**
		 * The durability level of the node type. Learn about [DurabilityLevel](https://docs.microsoft.com/azure/service-fabric/service-fabric-cluster-capacity).
		 * - Bronze - No privileges. This is the default.
		 * - Silver - The infrastructure jobs can be paused for a duration of 10 minutes per UD.
		 * - Gold - The infrastructure jobs can be paused for a duration of 2 hours per UD. Gold durability can be enabled only on full node VM skus like D15_V2, G5 etc.
		 */
		durabilityLevel?: NodeTypeDescriptionDurabilityLevel | null;

		/** Port range details */
		ephemeralPorts?: EndpointRangeDescription;

		/**
		 * The HTTP cluster management endpoint port.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		httpGatewayEndpointPort: number;

		/**
		 * The node type on which system services will run. Only one node type should be marked as primary. Primary node type cannot be deleted or changed for existing clusters.
		 * Required
		 */
		isPrimary: boolean;

		/**
		 * The name of the node type.
		 * Required
		 */
		name: string;

		/** The placement tags applied to nodes in the node type, which can be used to indicate where certain services (workload) should run. */
		placementProperties?: {[id: string]: string };

		/**
		 * The endpoint used by reverse proxy.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		reverseProxyEndpointPort?: number | null;

		/**
		 * The number of nodes in the node type. This count should match the capacity property in the corresponding VirtualMachineScaleSet resource.
		 * Required
		 * Minimum: 1
		 * Maximum: 2147483647
		 */
		vmInstanceCount: number;
	}

	/** Describes a node type in the cluster, each node type represents sub set of nodes in the cluster. */
	export interface NodeTypeDescriptionFormProperties {

		/** The capacity tags applied to the nodes in the node type, the cluster resource manager uses these tags to understand how much resource a node has. */
		capacities: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * The TCP cluster management endpoint port.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		clientConnectionEndpointPort: FormControl<number | null | undefined>,

		/**
		 * The durability level of the node type. Learn about [DurabilityLevel](https://docs.microsoft.com/azure/service-fabric/service-fabric-cluster-capacity).
		 * - Bronze - No privileges. This is the default.
		 * - Silver - The infrastructure jobs can be paused for a duration of 10 minutes per UD.
		 * - Gold - The infrastructure jobs can be paused for a duration of 2 hours per UD. Gold durability can be enabled only on full node VM skus like D15_V2, G5 etc.
		 */
		durabilityLevel: FormControl<NodeTypeDescriptionDurabilityLevel | null | undefined>,

		/**
		 * The HTTP cluster management endpoint port.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		httpGatewayEndpointPort: FormControl<number | null | undefined>,

		/**
		 * The node type on which system services will run. Only one node type should be marked as primary. Primary node type cannot be deleted or changed for existing clusters.
		 * Required
		 */
		isPrimary: FormControl<boolean | null | undefined>,

		/**
		 * The name of the node type.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/** The placement tags applied to nodes in the node type, which can be used to indicate where certain services (workload) should run. */
		placementProperties: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * The endpoint used by reverse proxy.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		reverseProxyEndpointPort: FormControl<number | null | undefined>,

		/**
		 * The number of nodes in the node type. This count should match the capacity property in the corresponding VirtualMachineScaleSet resource.
		 * Required
		 * Minimum: 1
		 * Maximum: 2147483647
		 */
		vmInstanceCount: FormControl<number | null | undefined>,
	}
	export function CreateNodeTypeDescriptionFormGroup() {
		return new FormGroup<NodeTypeDescriptionFormProperties>({
			capacities: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			clientConnectionEndpointPort: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			durabilityLevel: new FormControl<NodeTypeDescriptionDurabilityLevel | null | undefined>(undefined),
			httpGatewayEndpointPort: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			isPrimary: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			placementProperties: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			reverseProxyEndpointPort: new FormControl<number | null | undefined>(undefined),
			vmInstanceCount: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(1), Validators.max(2147483647)]),
		});

	}

	export enum NodeTypeDescriptionDurabilityLevel { Bronze = 'Bronze', Silver = 'Silver', Gold = 'Gold' }

	export enum ClusterPropertiesProvisioningState { Updating = 'Updating', Succeeded = 'Succeeded', Failed = 'Failed', Canceled = 'Canceled' }

	export enum ClusterPropertiesReliabilityLevel { None = 'None', Bronze = 'Bronze', Silver = 'Silver', Gold = 'Gold', Platinum = 'Platinum' }

	export enum ClusterPropertiesUpgradeMode { Automatic = 'Automatic', Manual = 'Manual' }


	/** Describes the cluster resource properties that can be updated during PATCH operation. */
	export interface ClusterPropertiesUpdateParameters {

		/** The list of add-on features to enable in the cluster. */
		addOnFeatures?: Array<AddOnFeatures>;

		/** Describes the certificate details. */
		certificate?: CertificateDescription;

		/** Describes a list of server certificates referenced by common name that are used to secure the cluster. */
		certificateCommonNames?: ServerCertificateCommonNames;

		/** The list of client certificates referenced by common name that are allowed to manage the cluster. This will overwrite the existing list. */
		clientCertificateCommonNames?: Array<ClientCertificateCommonName>;

		/** The list of client certificates referenced by thumbprint that are allowed to manage the cluster. This will overwrite the existing list. */
		clientCertificateThumbprints?: Array<ClientCertificateThumbprint>;

		/** The Service Fabric runtime version of the cluster. This property can only by set the user when **upgradeMode** is set to 'Manual'. To get list of available Service Fabric versions for new clusters use [ClusterVersion API](./ClusterVersion.md). To get the list of available version for existing clusters use **availableClusterVersions**. */
		clusterCodeVersion?: string | null;

		/** Indicates if the event store service is enabled. */
		eventStoreServiceEnabled?: boolean | null;

		/** The list of custom fabric settings to configure the cluster. This will overwrite the existing list. */
		fabricSettings?: Array<SettingsSectionDescription>;

		/** The list of node types in the cluster. This will overwrite the existing list. */
		nodeTypes?: Array<NodeTypeDescription>;

		/**
		 * The reliability level sets the replica set size of system services. Learn about [ReliabilityLevel](https://docs.microsoft.com/azure/service-fabric/service-fabric-cluster-capacity).
		 * - None - Run the System services with a target replica set count of 1. This should only be used for test clusters.
		 * - Bronze - Run the System services with a target replica set count of 3. This should only be used for test clusters.
		 * - Silver - Run the System services with a target replica set count of 5.
		 * - Gold - Run the System services with a target replica set count of 7.
		 * - Platinum - Run the System services with a target replica set count of 9.
		 */
		reliabilityLevel?: ClusterPropertiesReliabilityLevel | null;

		/** Describes the certificate details. */
		reverseProxyCertificate?: CertificateDescription;

		/** Describes the policy used when upgrading the cluster. */
		upgradeDescription?: ClusterUpgradePolicy;

		/**
		 * The upgrade mode of the cluster when new Service Fabric runtime version is available.
		 * - Automatic - The cluster will be automatically upgraded to the latest Service Fabric runtime version as soon as it is available.
		 * - Manual - The cluster will not be automatically upgraded to the latest Service Fabric runtime version. The cluster is upgraded by setting the **clusterCodeVersion** property in the cluster resource.
		 */
		upgradeMode?: ClusterPropertiesUpgradeMode | null;
	}

	/** Describes the cluster resource properties that can be updated during PATCH operation. */
	export interface ClusterPropertiesUpdateParametersFormProperties {

		/** The Service Fabric runtime version of the cluster. This property can only by set the user when **upgradeMode** is set to 'Manual'. To get list of available Service Fabric versions for new clusters use [ClusterVersion API](./ClusterVersion.md). To get the list of available version for existing clusters use **availableClusterVersions**. */
		clusterCodeVersion: FormControl<string | null | undefined>,

		/** Indicates if the event store service is enabled. */
		eventStoreServiceEnabled: FormControl<boolean | null | undefined>,

		/**
		 * The reliability level sets the replica set size of system services. Learn about [ReliabilityLevel](https://docs.microsoft.com/azure/service-fabric/service-fabric-cluster-capacity).
		 * - None - Run the System services with a target replica set count of 1. This should only be used for test clusters.
		 * - Bronze - Run the System services with a target replica set count of 3. This should only be used for test clusters.
		 * - Silver - Run the System services with a target replica set count of 5.
		 * - Gold - Run the System services with a target replica set count of 7.
		 * - Platinum - Run the System services with a target replica set count of 9.
		 */
		reliabilityLevel: FormControl<ClusterPropertiesReliabilityLevel | null | undefined>,

		/**
		 * The upgrade mode of the cluster when new Service Fabric runtime version is available.
		 * - Automatic - The cluster will be automatically upgraded to the latest Service Fabric runtime version as soon as it is available.
		 * - Manual - The cluster will not be automatically upgraded to the latest Service Fabric runtime version. The cluster is upgraded by setting the **clusterCodeVersion** property in the cluster resource.
		 */
		upgradeMode: FormControl<ClusterPropertiesUpgradeMode | null | undefined>,
	}
	export function CreateClusterPropertiesUpdateParametersFormGroup() {
		return new FormGroup<ClusterPropertiesUpdateParametersFormProperties>({
			clusterCodeVersion: new FormControl<string | null | undefined>(undefined),
			eventStoreServiceEnabled: new FormControl<boolean | null | undefined>(undefined),
			reliabilityLevel: new FormControl<ClusterPropertiesReliabilityLevel | null | undefined>(undefined),
			upgradeMode: new FormControl<ClusterPropertiesUpgradeMode | null | undefined>(undefined),
		});

	}


	/**
	 * The current state of the cluster.
	 *   - WaitingForNodes - Indicates that the cluster resource is created and the resource provider is waiting for Service Fabric VM extension to boot up and report to it.
	 *   - Deploying - Indicates that the Service Fabric runtime is being installed on the VMs. Cluster resource will be in this state until the cluster boots up and system services are up.
	 *   - BaselineUpgrade - Indicates that the cluster is upgrading to establishes the cluster version. This upgrade is automatically initiated when the cluster boots up for the first time.
	 *   - UpdatingUserConfiguration - Indicates that the cluster is being upgraded with the user provided configuration.
	 *   - UpdatingUserCertificate - Indicates that the cluster is being upgraded with the user provided certificate.
	 *   - UpdatingInfrastructure - Indicates that the cluster is being upgraded with the latest Service Fabric runtime version. This happens only when the **upgradeMode** is set to 'Automatic'.
	 *   - EnforcingClusterVersion - Indicates that cluster is on a different version than expected and the cluster is being upgraded to the expected version.
	 *   - UpgradeServiceUnreachable - Indicates that the system service in the cluster is no longer polling the Resource Provider. Clusters in this state cannot be managed by the Resource Provider.
	 *   - AutoScale - Indicates that the ReliabilityLevel of the cluster is being adjusted.
	 *   - Ready - Indicates that the cluster is in a stable state.
	 */
	export enum ClusterState { WaitingForNodes = 'WaitingForNodes', Deploying = 'Deploying', BaselineUpgrade = 'BaselineUpgrade', UpdatingUserConfiguration = 'UpdatingUserConfiguration', UpdatingUserCertificate = 'UpdatingUserCertificate', UpdatingInfrastructure = 'UpdatingInfrastructure', EnforcingClusterVersion = 'EnforcingClusterVersion', UpgradeServiceUnreachable = 'UpgradeServiceUnreachable', AutoScale = 'AutoScale', Ready = 'Ready' }


	/** Cluster update request */
	export interface ClusterUpdateParameters {

		/** Describes the cluster resource properties that can be updated during PATCH operation. */
		properties?: ClusterPropertiesUpdateParameters;

		/** Cluster update parameters */
		tags?: {[id: string]: string };
	}

	/** Cluster update request */
	export interface ClusterUpdateParametersFormProperties {

		/** Cluster update parameters */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateClusterUpdateParametersFormGroup() {
		return new FormGroup<ClusterUpdateParametersFormProperties>({
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** Describes the delta health policies for the cluster upgrade. */
	export interface ClusterUpgradeDeltaHealthPolicy {

		/**
		 * Defines a map that contains specific application delta health policies for different applications.
		 * Each entry specifies as key the application name and as value an ApplicationDeltaHealthPolicy used to evaluate the application health when upgrading the cluster.
		 * The application name should include the 'fabric:' URI scheme.
		 * The map is empty by default.
		 */
		applicationDeltaHealthPolicies?: ApplicationDeltaHealthPolicyMap;

		/**
		 * The maximum allowed percentage of applications health degradation allowed during cluster upgrades.
		 * The delta is measured between the state of the applications at the beginning of upgrade and the state of the applications at the time of the health evaluation.
		 * The check is performed after every upgrade domain upgrade completion to make sure the global state of the cluster is within tolerated limits. System services are not included in this.
		 * Required
		 * Minimum: 0
		 * Maximum: 100
		 */
		maxPercentDeltaUnhealthyApplications: number;

		/**
		 * The maximum allowed percentage of nodes health degradation allowed during cluster upgrades.
		 * The delta is measured between the state of the nodes at the beginning of upgrade and the state of the nodes at the time of the health evaluation.
		 * The check is performed after every upgrade domain upgrade completion to make sure the global state of the cluster is within tolerated limits.
		 * Required
		 * Minimum: 0
		 * Maximum: 100
		 */
		maxPercentDeltaUnhealthyNodes: number;

		/**
		 * The maximum allowed percentage of upgrade domain nodes health degradation allowed during cluster upgrades.
		 * The delta is measured between the state of the upgrade domain nodes at the beginning of upgrade and the state of the upgrade domain nodes at the time of the health evaluation.
		 * The check is performed after every upgrade domain upgrade completion for all completed upgrade domains to make sure the state of the upgrade domains is within tolerated limits.
		 * Required
		 * Minimum: 0
		 * Maximum: 100
		 */
		maxPercentUpgradeDomainDeltaUnhealthyNodes: number;
	}

	/** Describes the delta health policies for the cluster upgrade. */
	export interface ClusterUpgradeDeltaHealthPolicyFormProperties {

		/**
		 * The maximum allowed percentage of applications health degradation allowed during cluster upgrades.
		 * The delta is measured between the state of the applications at the beginning of upgrade and the state of the applications at the time of the health evaluation.
		 * The check is performed after every upgrade domain upgrade completion to make sure the global state of the cluster is within tolerated limits. System services are not included in this.
		 * Required
		 * Minimum: 0
		 * Maximum: 100
		 */
		maxPercentDeltaUnhealthyApplications: FormControl<number | null | undefined>,

		/**
		 * The maximum allowed percentage of nodes health degradation allowed during cluster upgrades.
		 * The delta is measured between the state of the nodes at the beginning of upgrade and the state of the nodes at the time of the health evaluation.
		 * The check is performed after every upgrade domain upgrade completion to make sure the global state of the cluster is within tolerated limits.
		 * Required
		 * Minimum: 0
		 * Maximum: 100
		 */
		maxPercentDeltaUnhealthyNodes: FormControl<number | null | undefined>,

		/**
		 * The maximum allowed percentage of upgrade domain nodes health degradation allowed during cluster upgrades.
		 * The delta is measured between the state of the upgrade domain nodes at the beginning of upgrade and the state of the upgrade domain nodes at the time of the health evaluation.
		 * The check is performed after every upgrade domain upgrade completion for all completed upgrade domains to make sure the state of the upgrade domains is within tolerated limits.
		 * Required
		 * Minimum: 0
		 * Maximum: 100
		 */
		maxPercentUpgradeDomainDeltaUnhealthyNodes: FormControl<number | null | undefined>,
	}
	export function CreateClusterUpgradeDeltaHealthPolicyFormGroup() {
		return new FormGroup<ClusterUpgradeDeltaHealthPolicyFormProperties>({
			maxPercentDeltaUnhealthyApplications: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0), Validators.max(100)]),
			maxPercentDeltaUnhealthyNodes: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0), Validators.max(100)]),
			maxPercentUpgradeDomainDeltaUnhealthyNodes: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0), Validators.max(100)]),
		});

	}


	/** Describes the policy used when upgrading the cluster. */
	export interface ClusterUpgradePolicy {

		/** Describes the delta health policies for the cluster upgrade. */
		deltaHealthPolicy?: ClusterUpgradeDeltaHealthPolicy;

		/** If true, then processes are forcefully restarted during upgrade even when the code version has not changed (the upgrade only changes configuration or data). */
		forceRestart?: boolean | null;

		/**
		 * The amount of time to retry health evaluation when the application or cluster is unhealthy before the upgrade rolls back. The timeout can be in either hh:mm:ss or in d.hh:mm:ss.ms format.
		 * Required
		 */
		healthCheckRetryTimeout: string;

		/**
		 * The amount of time that the application or cluster must remain healthy before the upgrade proceeds to the next upgrade domain. The duration can be in either hh:mm:ss or in d.hh:mm:ss.ms format.
		 * Required
		 */
		healthCheckStableDuration: string;

		/**
		 * The length of time to wait after completing an upgrade domain before performing health checks. The duration can be in either hh:mm:ss or in d.hh:mm:ss.ms format.
		 * Required
		 */
		healthCheckWaitDuration: string;

		/**
		 * Defines a health policy used to evaluate the health of the cluster or of a cluster node.
		 * Required
		 */
		healthPolicy: ClusterHealthPolicy;

		/**
		 * The amount of time each upgrade domain has to complete before the upgrade rolls back. The timeout can be in either hh:mm:ss or in d.hh:mm:ss.ms format.
		 * Required
		 */
		upgradeDomainTimeout: string;

		/**
		 * The maximum amount of time to block processing of an upgrade domain and prevent loss of availability when there are unexpected issues. When this timeout expires, processing of the upgrade domain will proceed regardless of availability loss issues. The timeout is reset at the start of each upgrade domain. The timeout can be in either hh:mm:ss or in d.hh:mm:ss.ms format.
		 * Required
		 */
		upgradeReplicaSetCheckTimeout: string;

		/**
		 * The amount of time the overall upgrade has to complete before the upgrade rolls back. The timeout can be in either hh:mm:ss or in d.hh:mm:ss.ms format.
		 * Required
		 */
		upgradeTimeout: string;
	}

	/** Describes the policy used when upgrading the cluster. */
	export interface ClusterUpgradePolicyFormProperties {

		/** If true, then processes are forcefully restarted during upgrade even when the code version has not changed (the upgrade only changes configuration or data). */
		forceRestart: FormControl<boolean | null | undefined>,

		/**
		 * The amount of time to retry health evaluation when the application or cluster is unhealthy before the upgrade rolls back. The timeout can be in either hh:mm:ss or in d.hh:mm:ss.ms format.
		 * Required
		 */
		healthCheckRetryTimeout: FormControl<string | null | undefined>,

		/**
		 * The amount of time that the application or cluster must remain healthy before the upgrade proceeds to the next upgrade domain. The duration can be in either hh:mm:ss or in d.hh:mm:ss.ms format.
		 * Required
		 */
		healthCheckStableDuration: FormControl<string | null | undefined>,

		/**
		 * The length of time to wait after completing an upgrade domain before performing health checks. The duration can be in either hh:mm:ss or in d.hh:mm:ss.ms format.
		 * Required
		 */
		healthCheckWaitDuration: FormControl<string | null | undefined>,

		/**
		 * The amount of time each upgrade domain has to complete before the upgrade rolls back. The timeout can be in either hh:mm:ss or in d.hh:mm:ss.ms format.
		 * Required
		 */
		upgradeDomainTimeout: FormControl<string | null | undefined>,

		/**
		 * The maximum amount of time to block processing of an upgrade domain and prevent loss of availability when there are unexpected issues. When this timeout expires, processing of the upgrade domain will proceed regardless of availability loss issues. The timeout is reset at the start of each upgrade domain. The timeout can be in either hh:mm:ss or in d.hh:mm:ss.ms format.
		 * Required
		 */
		upgradeReplicaSetCheckTimeout: FormControl<string | null | undefined>,

		/**
		 * The amount of time the overall upgrade has to complete before the upgrade rolls back. The timeout can be in either hh:mm:ss or in d.hh:mm:ss.ms format.
		 * Required
		 */
		upgradeTimeout: FormControl<string | null | undefined>,
	}
	export function CreateClusterUpgradePolicyFormGroup() {
		return new FormGroup<ClusterUpgradePolicyFormProperties>({
			forceRestart: new FormControl<boolean | null | undefined>(undefined),
			healthCheckRetryTimeout: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			healthCheckStableDuration: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			healthCheckWaitDuration: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			upgradeDomainTimeout: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			upgradeReplicaSetCheckTimeout: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			upgradeTimeout: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The storage account information for storing Service Fabric diagnostic logs. */
	export interface DiagnosticsStorageAccountConfig {

		/**
		 * The blob endpoint of the azure storage account.
		 * Required
		 */
		blobEndpoint: string;

		/**
		 * The protected diagnostics storage key name.
		 * Required
		 */
		protectedAccountKeyName: string;

		/**
		 * The queue endpoint of the azure storage account.
		 * Required
		 */
		queueEndpoint: string;

		/**
		 * The Azure storage account name.
		 * Required
		 */
		storageAccountName: string;

		/**
		 * The table endpoint of the azure storage account.
		 * Required
		 */
		tableEndpoint: string;
	}

	/** The storage account information for storing Service Fabric diagnostic logs. */
	export interface DiagnosticsStorageAccountConfigFormProperties {

		/**
		 * The blob endpoint of the azure storage account.
		 * Required
		 */
		blobEndpoint: FormControl<string | null | undefined>,

		/**
		 * The protected diagnostics storage key name.
		 * Required
		 */
		protectedAccountKeyName: FormControl<string | null | undefined>,

		/**
		 * The queue endpoint of the azure storage account.
		 * Required
		 */
		queueEndpoint: FormControl<string | null | undefined>,

		/**
		 * The Azure storage account name.
		 * Required
		 */
		storageAccountName: FormControl<string | null | undefined>,

		/**
		 * The table endpoint of the azure storage account.
		 * Required
		 */
		tableEndpoint: FormControl<string | null | undefined>,
	}
	export function CreateDiagnosticsStorageAccountConfigFormGroup() {
		return new FormGroup<DiagnosticsStorageAccountConfigFormProperties>({
			blobEndpoint: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			protectedAccountKeyName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			queueEndpoint: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			storageAccountName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			tableEndpoint: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/**
	 * The durability level of the node type. Learn about [DurabilityLevel](https://docs.microsoft.com/azure/service-fabric/service-fabric-cluster-capacity).
	 *   - Bronze - No privileges. This is the default.
	 *   - Silver - The infrastructure jobs can be paused for a duration of 10 minutes per UD.
	 *   - Gold - The infrastructure jobs can be paused for a duration of 2 hours per UD. Gold durability can be enabled only on full node VM skus like D15_V2, G5 etc.
	 */
	export enum DurabilityLevel { Bronze = 'Bronze', Silver = 'Silver', Gold = 'Gold' }


	/** Port range details */
	export interface EndpointRangeDescription {

		/**
		 * End port of a range of ports
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		endPort: number;

		/**
		 * Starting port of a range of ports
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		startPort: number;
	}

	/** Port range details */
	export interface EndpointRangeDescriptionFormProperties {

		/**
		 * End port of a range of ports
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		endPort: FormControl<number | null | undefined>,

		/**
		 * Starting port of a range of ports
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		startPort: FormControl<number | null | undefined>,
	}
	export function CreateEndpointRangeDescriptionFormGroup() {
		return new FormGroup<EndpointRangeDescriptionFormProperties>({
			endPort: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			startPort: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The structure of the error. */
	export interface ErrorModel {

		/** The error details. */
		error?: ErrorModelError;
	}

	/** The structure of the error. */
	export interface ErrorModelFormProperties {
	}
	export function CreateErrorModelFormGroup() {
		return new FormGroup<ErrorModelFormProperties>({
		});

	}


	/** The error details. */
	export interface ErrorModelError {

		/** The error code. */
		code?: string | null;

		/** The error message. */
		message?: string | null;
	}

	/** The error details. */
	export interface ErrorModelErrorFormProperties {

		/** The error code. */
		code: FormControl<string | null | undefined>,

		/** The error message. */
		message: FormControl<string | null | undefined>,
	}
	export function CreateErrorModelErrorFormGroup() {
		return new FormGroup<ErrorModelErrorFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes the result of the request to list Service Fabric resource provider operations. */
	export interface OperationListResult {

		/** URL to get the next set of operation list results if there are any. */
		nextLink?: string | null;

		/** List of operations supported by the Service Fabric resource provider. */
		value?: Array<OperationResult>;
	}

	/** Describes the result of the request to list Service Fabric resource provider operations. */
	export interface OperationListResultFormProperties {

		/** URL to get the next set of operation list results if there are any. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateOperationListResultFormGroup() {
		return new FormGroup<OperationListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Available operation list result */
	export interface OperationResult {

		/** Operation supported by the Service Fabric resource provider */
		display?: AvailableOperationDisplay;

		/** The name of the operation. */
		name?: string | null;

		/** The URL to use for getting the next set of results. */
		nextLink?: string | null;

		/** Origin result */
		origin?: string | null;
	}

	/** Available operation list result */
	export interface OperationResultFormProperties {

		/** The name of the operation. */
		name: FormControl<string | null | undefined>,

		/** The URL to use for getting the next set of results. */
		nextLink: FormControl<string | null | undefined>,

		/** Origin result */
		origin: FormControl<string | null | undefined>,
	}
	export function CreateOperationResultFormGroup() {
		return new FormGroup<OperationResultFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			nextLink: new FormControl<string | null | undefined>(undefined),
			origin: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * The reliability level sets the replica set size of system services. Learn about [ReliabilityLevel](https://docs.microsoft.com/azure/service-fabric/service-fabric-cluster-capacity).
	 *   - None - Run the System services with a target replica set count of 1. This should only be used for test clusters.
	 *   - Bronze - Run the System services with a target replica set count of 3. This should only be used for test clusters.
	 *   - Silver - Run the System services with a target replica set count of 5.
	 *   - Gold - Run the System services with a target replica set count of 7.
	 *   - Platinum - Run the System services with a target replica set count of 9.
	 */
	export enum ReliabilityLevel { None = 'None', Bronze = 'Bronze', Silver = 'Silver', Gold = 'Gold', Platinum = 'Platinum' }


	/** The resource model definition. */
	export interface Resource {

		/** Azure resource etag. */
		etag?: string | null;

		/** Azure resource identifier. */
		id?: string | null;

		/**
		 * Azure resource location.
		 * Required
		 */
		location: string;

		/** Azure resource name. */
		name?: string | null;

		/** Azure resource tags. */
		tags?: {[id: string]: string };

		/** Azure resource type. */
		type?: string | null;
	}

	/** The resource model definition. */
	export interface ResourceFormProperties {

		/** Azure resource etag. */
		etag: FormControl<string | null | undefined>,

		/** Azure resource identifier. */
		id: FormControl<string | null | undefined>,

		/**
		 * Azure resource location.
		 * Required
		 */
		location: FormControl<string | null | undefined>,

		/** Azure resource name. */
		name: FormControl<string | null | undefined>,

		/** Azure resource tags. */
		tags: FormControl<{[id: string]: string } | null | undefined>,

		/** Azure resource type. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateResourceFormGroup() {
		return new FormGroup<ResourceFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes the server certificate details using common name. */
	export interface ServerCertificateCommonName {

		/**
		 * The common name of the server certificate.
		 * Required
		 */
		certificateCommonName: string;

		/**
		 * The issuer thumbprint of the server certificate.
		 * Required
		 */
		certificateIssuerThumbprint: string;
	}

	/** Describes the server certificate details using common name. */
	export interface ServerCertificateCommonNameFormProperties {

		/**
		 * The common name of the server certificate.
		 * Required
		 */
		certificateCommonName: FormControl<string | null | undefined>,

		/**
		 * The issuer thumbprint of the server certificate.
		 * Required
		 */
		certificateIssuerThumbprint: FormControl<string | null | undefined>,
	}
	export function CreateServerCertificateCommonNameFormGroup() {
		return new FormGroup<ServerCertificateCommonNameFormProperties>({
			certificateCommonName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			certificateIssuerThumbprint: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Describes a list of server certificates referenced by common name that are used to secure the cluster. */
	export interface ServerCertificateCommonNames {

		/** The list of server certificates referenced by common name that are used to secure the cluster. */
		commonNames?: Array<ServerCertificateCommonName>;

		/** The local certificate store location. */
		x509StoreName?: CertificateDescriptionX509StoreName | null;
	}

	/** Describes a list of server certificates referenced by common name that are used to secure the cluster. */
	export interface ServerCertificateCommonNamesFormProperties {

		/** The local certificate store location. */
		x509StoreName: FormControl<CertificateDescriptionX509StoreName | null | undefined>,
	}
	export function CreateServerCertificateCommonNamesFormGroup() {
		return new FormGroup<ServerCertificateCommonNamesFormProperties>({
			x509StoreName: new FormControl<CertificateDescriptionX509StoreName | null | undefined>(undefined),
		});

	}


	/** The local certificate store location. */
	export enum StoreName { AddressBook = 'AddressBook', AuthRoot = 'AuthRoot', CertificateAuthority = 'CertificateAuthority', Disallowed = 'Disallowed', My = 'My', Root = 'Root', TrustedPeople = 'TrustedPeople', TrustedPublisher = 'TrustedPublisher' }


	/**
	 * The upgrade mode of the cluster when new Service Fabric runtime version is available.
	 *   - Automatic - The cluster will be automatically upgraded to the latest Service Fabric runtime version as soon as it is available.
	 *   - Manual - The cluster will not be automatically upgraded to the latest Service Fabric runtime version. The cluster is upgraded by setting the **clusterCodeVersion** property in the cluster resource.
	 */
	export enum UpgradeMode { Automatic = 'Automatic', Manual = 'Manual' }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Lists all of the available Service Fabric resource provider API operations.
		 * Get the list of available Service Fabric resource provider API operations.
		 * Get providers/Microsoft.ServiceFabric/operations
		 * @param {string} api_version The version of the Service Fabric resource provider API
		 * @return {OperationListResult} OK. The request has succeeded.
		 */
		Operations_List(api_version: string): Observable<OperationListResult> {
			return this.http.get<OperationListResult>(this.baseUri + 'providers/Microsoft.ServiceFabric/operations?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets the list of Service Fabric cluster resources created in the specified subscription.
		 * Gets all Service Fabric cluster resources created or in the process of being created in the subscription.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.ServiceFabric/clusters
		 * @param {Clusters_ListApi_version} api_version The version of the Service Fabric resource provider API. This is a required parameter and it's value must be "2019-03-01" for this specification.
		 * @param {string} subscriptionId The customer subscription identifier.
		 * @return {ClusterListResult} The operation completed successfully.
		 */
		Clusters_List(api_version: Clusters_ListApi_version, subscriptionId: string): Observable<ClusterListResult> {
			return this.http.get<ClusterListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.ServiceFabric/clusters?api_version=' + api_version, {});
		}

		/**
		 * Gets the list of Service Fabric cluster code versions available for the specified location.
		 * Gets all available code versions for Service Fabric cluster resources by location.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.ServiceFabric/locations/{location}/clusterVersions
		 * @param {string} location The location for the cluster code versions. This is different from cluster location.
		 * @param {Clusters_ListApi_version} api_version The version of the Service Fabric resource provider API. This is a required parameter and it's value must be "2019-03-01" for this specification.
		 * @param {string} subscriptionId The customer subscription identifier.
		 * @return {ClusterCodeVersionsListResult} The operation completed successfully.
		 */
		ClusterVersions_List(location: string, api_version: Clusters_ListApi_version, subscriptionId: string): Observable<ClusterCodeVersionsListResult> {
			return this.http.get<ClusterCodeVersionsListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.ServiceFabric/locations/' + (location == null ? '' : encodeURIComponent(location)) + '/clusterVersions&api_version=' + api_version, {});
		}

		/**
		 * Gets information about a Service Fabric cluster code version available in the specified location.
		 * Gets information about an available Service Fabric cluster code version.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.ServiceFabric/locations/{location}/clusterVersions/{clusterVersion}
		 * @param {string} location The location for the cluster code versions. This is different from cluster location.
		 * @param {Clusters_ListApi_version} api_version The version of the Service Fabric resource provider API. This is a required parameter and it's value must be "2019-03-01" for this specification.
		 * @param {string} subscriptionId The customer subscription identifier.
		 * @param {string} clusterVersion The cluster code version.
		 * @return {ClusterCodeVersionsListResult} The operation completed successfully.
		 */
		ClusterVersions_Get(location: string, api_version: Clusters_ListApi_version, subscriptionId: string, clusterVersion: string): Observable<ClusterCodeVersionsListResult> {
			return this.http.get<ClusterCodeVersionsListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.ServiceFabric/locations/' + (location == null ? '' : encodeURIComponent(location)) + '/clusterVersions/' + (clusterVersion == null ? '' : encodeURIComponent(clusterVersion)) + '&api_version=' + api_version, {});
		}

		/**
		 * Gets the list of Service Fabric cluster code versions available for the specified environment.
		 * Gets all available code versions for Service Fabric cluster resources by environment.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.ServiceFabric/locations/{location}/environments/{environment}/clusterVersions
		 * @param {string} location The location for the cluster code versions. This is different from cluster location.
		 * @param {ClusterEnvironment} environment The operating system of the cluster. The default means all.
		 * @param {Clusters_ListApi_version} api_version The version of the Service Fabric resource provider API. This is a required parameter and it's value must be "2019-03-01" for this specification.
		 * @param {string} subscriptionId The customer subscription identifier.
		 * @return {ClusterCodeVersionsListResult} The operation completed successfully.
		 */
		ClusterVersions_ListByEnvironment(location: string, environment: ClusterEnvironment, api_version: Clusters_ListApi_version, subscriptionId: string): Observable<ClusterCodeVersionsListResult> {
			return this.http.get<ClusterCodeVersionsListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.ServiceFabric/locations/' + (location == null ? '' : encodeURIComponent(location)) + '/environments/' + environment + '/clusterVersions&api_version=' + api_version, {});
		}

		/**
		 * Gets information about a Service Fabric cluster code version available for the specified environment.
		 * Gets information about an available Service Fabric cluster code version by environment.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.ServiceFabric/locations/{location}/environments/{environment}/clusterVersions/{clusterVersion}
		 * @param {string} location The location for the cluster code versions. This is different from cluster location.
		 * @param {ClusterEnvironment} environment The operating system of the cluster. The default means all.
		 * @param {Clusters_ListApi_version} api_version The version of the Service Fabric resource provider API. This is a required parameter and it's value must be "2019-03-01" for this specification.
		 * @param {string} subscriptionId The customer subscription identifier.
		 * @param {string} clusterVersion The cluster code version.
		 * @return {ClusterCodeVersionsListResult} The operation completed successfully.
		 */
		ClusterVersions_GetByEnvironment(location: string, environment: ClusterEnvironment, api_version: Clusters_ListApi_version, subscriptionId: string, clusterVersion: string): Observable<ClusterCodeVersionsListResult> {
			return this.http.get<ClusterCodeVersionsListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.ServiceFabric/locations/' + (location == null ? '' : encodeURIComponent(location)) + '/environments/' + environment + '/clusterVersions/' + (clusterVersion == null ? '' : encodeURIComponent(clusterVersion)) + '&api_version=' + api_version, {});
		}

		/**
		 * Gets a Service Fabric cluster resource.
		 * Get a Service Fabric cluster resource created or in the process of being created in the specified resource group.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/clusters/{clusterName}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} clusterName The name of the cluster resource.
		 * @param {Clusters_ListApi_version} api_version The version of the Service Fabric resource provider API. This is a required parameter and it's value must be "2019-03-01" for this specification.
		 * @param {string} subscriptionId The customer subscription identifier.
		 * @return {Cluster} The operation completed successfully.
		 */
		Clusters_Get(resourceGroupName: string, clusterName: string, api_version: Clusters_ListApi_version, subscriptionId: string): Observable<Cluster> {
			return this.http.get<Cluster>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ServiceFabric/clusters/' + (clusterName == null ? '' : encodeURIComponent(clusterName)) + '&api_version=' + api_version, {});
		}

		/**
		 * Creates or updates a Service Fabric cluster resource.
		 * Create or update a Service Fabric cluster resource with the specified name.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/clusters/{clusterName}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} clusterName The name of the cluster resource.
		 * @param {Clusters_ListApi_version} api_version The version of the Service Fabric resource provider API. This is a required parameter and it's value must be "2019-03-01" for this specification.
		 * @param {string} subscriptionId The customer subscription identifier.
		 * @param {Cluster} requestBody The cluster resource.
		 * @return {Cluster} The operation completed successfully.
		 */
		Clusters_CreateOrUpdate(resourceGroupName: string, clusterName: string, api_version: Clusters_ListApi_version, subscriptionId: string, requestBody: Cluster): Observable<Cluster> {
			return this.http.put<Cluster>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ServiceFabric/clusters/' + (clusterName == null ? '' : encodeURIComponent(clusterName)) + '&api_version=' + api_version, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a Service Fabric cluster resource.
		 * Delete a Service Fabric cluster resource with the specified name.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/clusters/{clusterName}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} clusterName The name of the cluster resource.
		 * @param {Clusters_ListApi_version} api_version The version of the Service Fabric resource provider API. This is a required parameter and it's value must be "2019-03-01" for this specification.
		 * @param {string} subscriptionId The customer subscription identifier.
		 * @return {void} The operation completed successfully.
		 */
		Clusters_Delete(resourceGroupName: string, clusterName: string, api_version: Clusters_ListApi_version, subscriptionId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ServiceFabric/clusters/' + (clusterName == null ? '' : encodeURIComponent(clusterName)) + '&api_version=' + api_version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates the configuration of a Service Fabric cluster resource.
		 * Update the configuration of a Service Fabric cluster resource with the specified name.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/clusters/{clusterName}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} clusterName The name of the cluster resource.
		 * @param {Clusters_ListApi_version} api_version The version of the Service Fabric resource provider API. This is a required parameter and it's value must be "2019-03-01" for this specification.
		 * @param {string} subscriptionId The customer subscription identifier.
		 * @param {ClusterUpdateParameters} requestBody The parameters which contains the property value and property name which used to update the cluster configuration.
		 * @return {Cluster} The operation completed successfully.
		 */
		Clusters_Update(resourceGroupName: string, clusterName: string, api_version: Clusters_ListApi_version, subscriptionId: string, requestBody: ClusterUpdateParameters): Observable<Cluster> {
			return this.http.patch<Cluster>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ServiceFabric/clusters/' + (clusterName == null ? '' : encodeURIComponent(clusterName)) + '&api_version=' + api_version, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the list of Service Fabric cluster resources created in the specified resource group.
		 * Gets all Service Fabric cluster resources created or in the process of being created in the resource group.
		 * Get subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/clusters
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {Clusters_ListApi_version} api_version The version of the Service Fabric resource provider API. This is a required parameter and it's value must be "2019-03-01" for this specification.
		 * @param {string} subscriptionId The customer subscription identifier.
		 * @return {ClusterListResult} The operation completed successfully.
		 */
		Clusters_ListByResourceGroup(resourceGroupName: string, api_version: Clusters_ListApi_version, subscriptionId: string): Observable<ClusterListResult> {
			return this.http.get<ClusterListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourcegroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ServiceFabric/clusters&api_version=' + api_version, {});
		}
	}

	export enum Clusters_ListApi_version { '2019-03-01' = '2019-03-01' }

}

