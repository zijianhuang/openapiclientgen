import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface AssociateEncryptionConfigResponse {

		/** An object representing an asynchronous update. */
		update?: Update;
	}
	export interface AssociateEncryptionConfigResponseFormProperties {
	}
	export function CreateAssociateEncryptionConfigResponseFormGroup() {
		return new FormGroup<AssociateEncryptionConfigResponseFormProperties>({
		});

	}


	/** An object representing an asynchronous update. */
	export interface Update {
		id?: string;
		status?: UpdateStatus;
		type?: UpdateType;
		params?: Array<UpdateParam>;
		createdAt?: Date;
		errors?: Array<ErrorDetail>;
	}

	/** An object representing an asynchronous update. */
	export interface UpdateFormProperties {
		id: FormControl<string | null | undefined>,
		status: FormControl<UpdateStatus | null | undefined>,
		type: FormControl<UpdateType | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
	}
	export function CreateUpdateFormGroup() {
		return new FormGroup<UpdateFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<UpdateStatus | null | undefined>(undefined),
			type: new FormControl<UpdateType | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum UpdateStatus { InProgress = 'InProgress', Failed = 'Failed', Cancelled = 'Cancelled', Successful = 'Successful' }

	export enum UpdateType { VersionUpdate = 'VersionUpdate', EndpointAccessUpdate = 'EndpointAccessUpdate', LoggingUpdate = 'LoggingUpdate', ConfigUpdate = 'ConfigUpdate', AssociateIdentityProviderConfig = 'AssociateIdentityProviderConfig', DisassociateIdentityProviderConfig = 'DisassociateIdentityProviderConfig', AssociateEncryptionConfig = 'AssociateEncryptionConfig', AddonUpdate = 'AddonUpdate' }


	/** An object representing the details of an update request. */
	export interface UpdateParam {
		type?: UpdateParamType;
		value?: string;
	}

	/** An object representing the details of an update request. */
	export interface UpdateParamFormProperties {
		type: FormControl<UpdateParamType | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreateUpdateParamFormGroup() {
		return new FormGroup<UpdateParamFormProperties>({
			type: new FormControl<UpdateParamType | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum UpdateParamType { Version = 'Version', PlatformVersion = 'PlatformVersion', EndpointPrivateAccess = 'EndpointPrivateAccess', EndpointPublicAccess = 'EndpointPublicAccess', ClusterLogging = 'ClusterLogging', DesiredSize = 'DesiredSize', LabelsToAdd = 'LabelsToAdd', LabelsToRemove = 'LabelsToRemove', TaintsToAdd = 'TaintsToAdd', TaintsToRemove = 'TaintsToRemove', MaxSize = 'MaxSize', MinSize = 'MinSize', ReleaseVersion = 'ReleaseVersion', PublicAccessCidrs = 'PublicAccessCidrs', LaunchTemplateName = 'LaunchTemplateName', LaunchTemplateVersion = 'LaunchTemplateVersion', IdentityProviderConfig = 'IdentityProviderConfig', EncryptionConfig = 'EncryptionConfig', AddonVersion = 'AddonVersion', ServiceAccountRoleArn = 'ServiceAccountRoleArn', ResolveConflicts = 'ResolveConflicts', MaxUnavailable = 'MaxUnavailable', MaxUnavailablePercentage = 'MaxUnavailablePercentage' }


	/** An object representing an error when an asynchronous operation fails. */
	export interface ErrorDetail {
		errorCode?: ErrorCode;
		errorMessage?: string;
		resourceIds?: Array<string>;
	}

	/** An object representing an error when an asynchronous operation fails. */
	export interface ErrorDetailFormProperties {
		errorCode: FormControl<ErrorCode | null | undefined>,
		errorMessage: FormControl<string | null | undefined>,
	}
	export function CreateErrorDetailFormGroup() {
		return new FormGroup<ErrorDetailFormProperties>({
			errorCode: new FormControl<ErrorCode | null | undefined>(undefined),
			errorMessage: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ErrorCode { SubnetNotFound = 'SubnetNotFound', SecurityGroupNotFound = 'SecurityGroupNotFound', EniLimitReached = 'EniLimitReached', IpNotAvailable = 'IpNotAvailable', AccessDenied = 'AccessDenied', OperationNotPermitted = 'OperationNotPermitted', VpcIdNotFound = 'VpcIdNotFound', Unknown = 'Unknown', NodeCreationFailure = 'NodeCreationFailure', PodEvictionFailure = 'PodEvictionFailure', InsufficientFreeAddresses = 'InsufficientFreeAddresses', ClusterUnreachable = 'ClusterUnreachable', InsufficientNumberOfReplicas = 'InsufficientNumberOfReplicas', ConfigurationConflict = 'ConfigurationConflict', AdmissionRequestDenied = 'AdmissionRequestDenied', UnsupportedAddonModification = 'UnsupportedAddonModification', K8sResourceNotFound = 'K8sResourceNotFound' }


	/** The encryption configuration for the cluster. */
	export interface EncryptionConfig {
		resources?: Array<string>;
		provider?: Provider;
	}

	/** The encryption configuration for the cluster. */
	export interface EncryptionConfigFormProperties {
	}
	export function CreateEncryptionConfigFormGroup() {
		return new FormGroup<EncryptionConfigFormProperties>({
		});

	}


	/** Identifies the Key Management Service (KMS) key used to encrypt the secrets. */
	export interface Provider {
		keyArn?: string;
	}

	/** Identifies the Key Management Service (KMS) key used to encrypt the secrets. */
	export interface ProviderFormProperties {
		keyArn: FormControl<string | null | undefined>,
	}
	export function CreateProviderFormGroup() {
		return new FormGroup<ProviderFormProperties>({
			keyArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface InvalidParameterException {
	}
	export interface InvalidParameterExceptionFormProperties {
	}
	export function CreateInvalidParameterExceptionFormGroup() {
		return new FormGroup<InvalidParameterExceptionFormProperties>({
		});

	}

	export interface ClientException {
	}
	export interface ClientExceptionFormProperties {
	}
	export function CreateClientExceptionFormGroup() {
		return new FormGroup<ClientExceptionFormProperties>({
		});

	}

	export interface ServerException {
	}
	export interface ServerExceptionFormProperties {
	}
	export function CreateServerExceptionFormGroup() {
		return new FormGroup<ServerExceptionFormProperties>({
		});

	}

	export interface ResourceInUseException {
	}
	export interface ResourceInUseExceptionFormProperties {
	}
	export function CreateResourceInUseExceptionFormGroup() {
		return new FormGroup<ResourceInUseExceptionFormProperties>({
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

	export interface InvalidRequestException {
	}
	export interface InvalidRequestExceptionFormProperties {
	}
	export function CreateInvalidRequestExceptionFormGroup() {
		return new FormGroup<InvalidRequestExceptionFormProperties>({
		});

	}

	export interface AssociateIdentityProviderConfigResponse {

		/** An object representing an asynchronous update. */
		update?: Update;
		tags?: TagMap;
	}
	export interface AssociateIdentityProviderConfigResponseFormProperties {
	}
	export function CreateAssociateIdentityProviderConfigResponseFormGroup() {
		return new FormGroup<AssociateIdentityProviderConfigResponseFormProperties>({
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

	export interface RequiredClaimsMap {
	}
	export interface RequiredClaimsMapFormProperties {
	}
	export function CreateRequiredClaimsMapFormGroup() {
		return new FormGroup<RequiredClaimsMapFormProperties>({
		});

	}

	export interface CreateAddonResponse {

		/** An Amazon EKS add-on. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/eks-add-ons.html">Amazon EKS add-ons</a> in the <i>Amazon EKS User Guide</i>. */
		addon?: Addon;
	}
	export interface CreateAddonResponseFormProperties {
	}
	export function CreateCreateAddonResponseFormGroup() {
		return new FormGroup<CreateAddonResponseFormProperties>({
		});

	}


	/** An Amazon EKS add-on. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/eks-add-ons.html">Amazon EKS add-ons</a> in the <i>Amazon EKS User Guide</i>. */
	export interface Addon {
		addonName?: string;
		clusterName?: string;
		status?: AddonStatus;
		addonVersion?: string;
		health?: AddonHealth;
		addonArn?: string;
		createdAt?: Date;
		modifiedAt?: Date;
		serviceAccountRoleArn?: string;
		tags?: TagMap;
		publisher?: string;
		owner?: string;
		marketplaceInformation?: MarketplaceInformation;
		configurationValues?: string;
	}

	/** An Amazon EKS add-on. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/eks-add-ons.html">Amazon EKS add-ons</a> in the <i>Amazon EKS User Guide</i>. */
	export interface AddonFormProperties {
		addonName: FormControl<string | null | undefined>,
		clusterName: FormControl<string | null | undefined>,
		status: FormControl<AddonStatus | null | undefined>,
		addonVersion: FormControl<string | null | undefined>,
		addonArn: FormControl<string | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
		modifiedAt: FormControl<Date | null | undefined>,
		serviceAccountRoleArn: FormControl<string | null | undefined>,
		publisher: FormControl<string | null | undefined>,
		owner: FormControl<string | null | undefined>,
		configurationValues: FormControl<string | null | undefined>,
	}
	export function CreateAddonFormGroup() {
		return new FormGroup<AddonFormProperties>({
			addonName: new FormControl<string | null | undefined>(undefined),
			clusterName: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<AddonStatus | null | undefined>(undefined),
			addonVersion: new FormControl<string | null | undefined>(undefined),
			addonArn: new FormControl<string | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
			modifiedAt: new FormControl<Date | null | undefined>(undefined),
			serviceAccountRoleArn: new FormControl<string | null | undefined>(undefined),
			publisher: new FormControl<string | null | undefined>(undefined),
			owner: new FormControl<string | null | undefined>(undefined),
			configurationValues: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AddonStatus { CREATING = 'CREATING', ACTIVE = 'ACTIVE', CREATE_FAILED = 'CREATE_FAILED', UPDATING = 'UPDATING', DELETING = 'DELETING', DELETE_FAILED = 'DELETE_FAILED', DEGRADED = 'DEGRADED', UPDATE_FAILED = 'UPDATE_FAILED' }


	/** The health of the add-on. */
	export interface AddonHealth {
		issues?: Array<AddonIssue>;
	}

	/** The health of the add-on. */
	export interface AddonHealthFormProperties {
	}
	export function CreateAddonHealthFormGroup() {
		return new FormGroup<AddonHealthFormProperties>({
		});

	}


	/** An issue related to an add-on. */
	export interface AddonIssue {
		code?: AddonIssueCode;
		message?: string;
		resourceIds?: Array<string>;
	}

	/** An issue related to an add-on. */
	export interface AddonIssueFormProperties {
		code: FormControl<AddonIssueCode | null | undefined>,
		message: FormControl<string | null | undefined>,
	}
	export function CreateAddonIssueFormGroup() {
		return new FormGroup<AddonIssueFormProperties>({
			code: new FormControl<AddonIssueCode | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AddonIssueCode { AccessDenied = 'AccessDenied', InternalFailure = 'InternalFailure', ClusterUnreachable = 'ClusterUnreachable', InsufficientNumberOfReplicas = 'InsufficientNumberOfReplicas', ConfigurationConflict = 'ConfigurationConflict', AdmissionRequestDenied = 'AdmissionRequestDenied', UnsupportedAddonModification = 'UnsupportedAddonModification', K8sResourceNotFound = 'K8sResourceNotFound' }


	/** Information about an Amazon EKS add-on from the Amazon Web Services Marketplace. */
	export interface MarketplaceInformation {
		productId?: string;
		productUrl?: string;
	}

	/** Information about an Amazon EKS add-on from the Amazon Web Services Marketplace. */
	export interface MarketplaceInformationFormProperties {
		productId: FormControl<string | null | undefined>,
		productUrl: FormControl<string | null | undefined>,
	}
	export function CreateMarketplaceInformationFormGroup() {
		return new FormGroup<MarketplaceInformationFormProperties>({
			productId: new FormControl<string | null | undefined>(undefined),
			productUrl: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateClusterResponse {
		cluster?: Cluster;
	}
	export interface CreateClusterResponseFormProperties {
	}
	export function CreateCreateClusterResponseFormGroup() {
		return new FormGroup<CreateClusterResponseFormProperties>({
		});

	}


	/** An object representing an Amazon EKS cluster. */
	export interface Cluster {
		name?: string;
		arn?: string;
		createdAt?: Date;
		version?: string;
		endpoint?: string;
		roleArn?: string;
		resourcesVpcConfig?: VpcConfigResponse;
		kubernetesNetworkConfig?: KubernetesNetworkConfigResponse;
		logging?: Logging;
		identity?: Identity;
		status?: ClusterStatus;
		certificateAuthority?: Certificate;
		clientRequestToken?: string;
		platformVersion?: string;
		tags?: TagMap;
		encryptionConfig?: Array<EncryptionConfig>;
		connectorConfig?: ConnectorConfigResponse;
		id?: string;
		health?: ClusterHealth;
		outpostConfig?: OutpostConfigResponse;
	}

	/** An object representing an Amazon EKS cluster. */
	export interface ClusterFormProperties {
		name: FormControl<string | null | undefined>,
		arn: FormControl<string | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
		version: FormControl<string | null | undefined>,
		endpoint: FormControl<string | null | undefined>,
		roleArn: FormControl<string | null | undefined>,
		status: FormControl<ClusterStatus | null | undefined>,
		clientRequestToken: FormControl<string | null | undefined>,
		platformVersion: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
	}
	export function CreateClusterFormGroup() {
		return new FormGroup<ClusterFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			arn: new FormControl<string | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
			endpoint: new FormControl<string | null | undefined>(undefined),
			roleArn: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<ClusterStatus | null | undefined>(undefined),
			clientRequestToken: new FormControl<string | null | undefined>(undefined),
			platformVersion: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An object representing an Amazon EKS cluster VPC configuration response. */
	export interface VpcConfigResponse {
		subnetIds?: Array<string>;
		securityGroupIds?: Array<string>;
		clusterSecurityGroupId?: string;
		vpcId?: string;
		endpointPublicAccess?: boolean | null;
		endpointPrivateAccess?: boolean | null;
		publicAccessCidrs?: Array<string>;
	}

	/** An object representing an Amazon EKS cluster VPC configuration response. */
	export interface VpcConfigResponseFormProperties {
		clusterSecurityGroupId: FormControl<string | null | undefined>,
		vpcId: FormControl<string | null | undefined>,
		endpointPublicAccess: FormControl<boolean | null | undefined>,
		endpointPrivateAccess: FormControl<boolean | null | undefined>,
	}
	export function CreateVpcConfigResponseFormGroup() {
		return new FormGroup<VpcConfigResponseFormProperties>({
			clusterSecurityGroupId: new FormControl<string | null | undefined>(undefined),
			vpcId: new FormControl<string | null | undefined>(undefined),
			endpointPublicAccess: new FormControl<boolean | null | undefined>(undefined),
			endpointPrivateAccess: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** The Kubernetes network configuration for the cluster. The response contains a value for <b>serviceIpv6Cidr</b> or <b>serviceIpv4Cidr</b>, but not both.  */
	export interface KubernetesNetworkConfigResponse {
		serviceIpv4Cidr?: string;
		serviceIpv6Cidr?: string;
		ipFamily?: IpFamily;
	}

	/** The Kubernetes network configuration for the cluster. The response contains a value for <b>serviceIpv6Cidr</b> or <b>serviceIpv4Cidr</b>, but not both.  */
	export interface KubernetesNetworkConfigResponseFormProperties {
		serviceIpv4Cidr: FormControl<string | null | undefined>,
		serviceIpv6Cidr: FormControl<string | null | undefined>,
		ipFamily: FormControl<IpFamily | null | undefined>,
	}
	export function CreateKubernetesNetworkConfigResponseFormGroup() {
		return new FormGroup<KubernetesNetworkConfigResponseFormProperties>({
			serviceIpv4Cidr: new FormControl<string | null | undefined>(undefined),
			serviceIpv6Cidr: new FormControl<string | null | undefined>(undefined),
			ipFamily: new FormControl<IpFamily | null | undefined>(undefined),
		});

	}

	export enum IpFamily { ipv4 = 'ipv4', ipv6 = 'ipv6' }


	/** An object representing the logging configuration for resources in your cluster. */
	export interface Logging {
		clusterLogging?: Array<LogSetup>;
	}

	/** An object representing the logging configuration for resources in your cluster. */
	export interface LoggingFormProperties {
	}
	export function CreateLoggingFormGroup() {
		return new FormGroup<LoggingFormProperties>({
		});

	}


	/** An object representing the enabled or disabled Kubernetes control plane logs for your cluster. */
	export interface LogSetup {
		types?: Array<LogType>;
		enabled?: boolean | null;
	}

	/** An object representing the enabled or disabled Kubernetes control plane logs for your cluster. */
	export interface LogSetupFormProperties {
		enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateLogSetupFormGroup() {
		return new FormGroup<LogSetupFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum LogType { api = 'api', audit = 'audit', authenticator = 'authenticator', controllerManager = 'controllerManager', scheduler = 'scheduler' }


	/** An object representing an identity provider. */
	export interface Identity {
		oidc?: OIDC;
	}

	/** An object representing an identity provider. */
	export interface IdentityFormProperties {
	}
	export function CreateIdentityFormGroup() {
		return new FormGroup<IdentityFormProperties>({
		});

	}


	/** An object representing the <a href="https://openid.net/connect/">OpenID Connect</a> (OIDC) identity provider information for the cluster. */
	export interface OIDC {
		issuer?: string;
	}

	/** An object representing the <a href="https://openid.net/connect/">OpenID Connect</a> (OIDC) identity provider information for the cluster. */
	export interface OIDCFormProperties {
		issuer: FormControl<string | null | undefined>,
	}
	export function CreateOIDCFormGroup() {
		return new FormGroup<OIDCFormProperties>({
			issuer: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ClusterStatus { CREATING = 'CREATING', ACTIVE = 'ACTIVE', DELETING = 'DELETING', FAILED = 'FAILED', UPDATING = 'UPDATING', PENDING = 'PENDING' }


	/** An object representing the <code>certificate-authority-data</code> for your cluster. */
	export interface Certificate {
		data?: string;
	}

	/** An object representing the <code>certificate-authority-data</code> for your cluster. */
	export interface CertificateFormProperties {
		data: FormControl<string | null | undefined>,
	}
	export function CreateCertificateFormGroup() {
		return new FormGroup<CertificateFormProperties>({
			data: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The full description of your connected cluster. */
	export interface ConnectorConfigResponse {
		activationId?: string;
		activationCode?: string;
		activationExpiry?: Date;
		provider?: string;
		roleArn?: string;
	}

	/** The full description of your connected cluster. */
	export interface ConnectorConfigResponseFormProperties {
		activationId: FormControl<string | null | undefined>,
		activationCode: FormControl<string | null | undefined>,
		activationExpiry: FormControl<Date | null | undefined>,
		provider: FormControl<string | null | undefined>,
		roleArn: FormControl<string | null | undefined>,
	}
	export function CreateConnectorConfigResponseFormGroup() {
		return new FormGroup<ConnectorConfigResponseFormProperties>({
			activationId: new FormControl<string | null | undefined>(undefined),
			activationCode: new FormControl<string | null | undefined>(undefined),
			activationExpiry: new FormControl<Date | null | undefined>(undefined),
			provider: new FormControl<string | null | undefined>(undefined),
			roleArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An object representing the health of your local Amazon EKS cluster on an Amazon Web Services Outpost. You can't use this API with an Amazon EKS cluster on the Amazon Web Services cloud.  */
	export interface ClusterHealth {
		issues?: Array<ClusterIssue>;
	}

	/** An object representing the health of your local Amazon EKS cluster on an Amazon Web Services Outpost. You can't use this API with an Amazon EKS cluster on the Amazon Web Services cloud.  */
	export interface ClusterHealthFormProperties {
	}
	export function CreateClusterHealthFormGroup() {
		return new FormGroup<ClusterHealthFormProperties>({
		});

	}


	/** An issue with your local Amazon EKS cluster on an Amazon Web Services Outpost. You can't use this API with an Amazon EKS cluster on the Amazon Web Services cloud. */
	export interface ClusterIssue {
		code?: ClusterIssueCode;
		message?: string;
		resourceIds?: Array<string>;
	}

	/** An issue with your local Amazon EKS cluster on an Amazon Web Services Outpost. You can't use this API with an Amazon EKS cluster on the Amazon Web Services cloud. */
	export interface ClusterIssueFormProperties {
		code: FormControl<ClusterIssueCode | null | undefined>,
		message: FormControl<string | null | undefined>,
	}
	export function CreateClusterIssueFormGroup() {
		return new FormGroup<ClusterIssueFormProperties>({
			code: new FormControl<ClusterIssueCode | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ClusterIssueCode { AccessDenied = 'AccessDenied', ClusterUnreachable = 'ClusterUnreachable', ConfigurationConflict = 'ConfigurationConflict', InternalFailure = 'InternalFailure', ResourceLimitExceeded = 'ResourceLimitExceeded', ResourceNotFound = 'ResourceNotFound' }


	/** An object representing the configuration of your local Amazon EKS cluster on an Amazon Web Services Outpost. This API isn't available for Amazon EKS clusters on the Amazon Web Services cloud. */
	export interface OutpostConfigResponse {

		/** Required */
		outpostArns: Array<string>;

		/** Required */
		controlPlaneInstanceType: string;
		controlPlanePlacement?: ControlPlanePlacementResponse;
	}

	/** An object representing the configuration of your local Amazon EKS cluster on an Amazon Web Services Outpost. This API isn't available for Amazon EKS clusters on the Amazon Web Services cloud. */
	export interface OutpostConfigResponseFormProperties {

		/** Required */
		controlPlaneInstanceType: FormControl<string | null | undefined>,
	}
	export function CreateOutpostConfigResponseFormGroup() {
		return new FormGroup<OutpostConfigResponseFormProperties>({
			controlPlaneInstanceType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The placement configuration for all the control plane instances of your local Amazon EKS cluster on an Amazon Web Services Outpost. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/eks-outposts-capacity-considerations.html">Capacity considerations</a> in the <i>Amazon EKS User Guide</i>. */
	export interface ControlPlanePlacementResponse {
		groupName?: string;
	}

	/** The placement configuration for all the control plane instances of your local Amazon EKS cluster on an Amazon Web Services Outpost. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/eks-outposts-capacity-considerations.html">Capacity considerations</a> in the <i>Amazon EKS User Guide</i>. */
	export interface ControlPlanePlacementResponseFormProperties {
		groupName: FormControl<string | null | undefined>,
	}
	export function CreateControlPlanePlacementResponseFormGroup() {
		return new FormGroup<ControlPlanePlacementResponseFormProperties>({
			groupName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The placement configuration for all the control plane instances of your local Amazon EKS cluster on an Amazon Web Services Outpost. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/eks-outposts-capacity-considerations.html">Capacity considerations</a> in the <i>Amazon EKS User Guide</i>  */
	export interface ControlPlanePlacementRequest {
		groupName?: string;
	}

	/** The placement configuration for all the control plane instances of your local Amazon EKS cluster on an Amazon Web Services Outpost. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/eks-outposts-capacity-considerations.html">Capacity considerations</a> in the <i>Amazon EKS User Guide</i>  */
	export interface ControlPlanePlacementRequestFormProperties {
		groupName: FormControl<string | null | undefined>,
	}
	export function CreateControlPlanePlacementRequestFormGroup() {
		return new FormGroup<ControlPlanePlacementRequestFormProperties>({
			groupName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ResourceLimitExceededException {
	}
	export interface ResourceLimitExceededExceptionFormProperties {
	}
	export function CreateResourceLimitExceededExceptionFormGroup() {
		return new FormGroup<ResourceLimitExceededExceptionFormProperties>({
		});

	}

	export interface ServiceUnavailableException {
	}
	export interface ServiceUnavailableExceptionFormProperties {
	}
	export function CreateServiceUnavailableExceptionFormGroup() {
		return new FormGroup<ServiceUnavailableExceptionFormProperties>({
		});

	}

	export interface UnsupportedAvailabilityZoneException {
	}
	export interface UnsupportedAvailabilityZoneExceptionFormProperties {
	}
	export function CreateUnsupportedAvailabilityZoneExceptionFormGroup() {
		return new FormGroup<UnsupportedAvailabilityZoneExceptionFormProperties>({
		});

	}

	export interface CreateFargateProfileResponse {
		fargateProfile?: FargateProfile;
	}
	export interface CreateFargateProfileResponseFormProperties {
	}
	export function CreateCreateFargateProfileResponseFormGroup() {
		return new FormGroup<CreateFargateProfileResponseFormProperties>({
		});

	}


	/** An object representing an Fargate profile. */
	export interface FargateProfile {
		fargateProfileName?: string;
		fargateProfileArn?: string;
		clusterName?: string;
		createdAt?: Date;
		podExecutionRoleArn?: string;
		subnets?: Array<string>;
		selectors?: Array<FargateProfileSelector>;
		status?: FargateProfileStatus;
		tags?: TagMap;
	}

	/** An object representing an Fargate profile. */
	export interface FargateProfileFormProperties {
		fargateProfileName: FormControl<string | null | undefined>,
		fargateProfileArn: FormControl<string | null | undefined>,
		clusterName: FormControl<string | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
		podExecutionRoleArn: FormControl<string | null | undefined>,
		status: FormControl<FargateProfileStatus | null | undefined>,
	}
	export function CreateFargateProfileFormGroup() {
		return new FormGroup<FargateProfileFormProperties>({
			fargateProfileName: new FormControl<string | null | undefined>(undefined),
			fargateProfileArn: new FormControl<string | null | undefined>(undefined),
			clusterName: new FormControl<string | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
			podExecutionRoleArn: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<FargateProfileStatus | null | undefined>(undefined),
		});

	}


	/** An object representing an Fargate profile selector. */
	export interface FargateProfileSelector {
		namespace?: string;
		labels?: FargateProfileLabel;
	}

	/** An object representing an Fargate profile selector. */
	export interface FargateProfileSelectorFormProperties {
		namespace: FormControl<string | null | undefined>,
	}
	export function CreateFargateProfileSelectorFormGroup() {
		return new FormGroup<FargateProfileSelectorFormProperties>({
			namespace: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface FargateProfileLabel {
	}
	export interface FargateProfileLabelFormProperties {
	}
	export function CreateFargateProfileLabelFormGroup() {
		return new FormGroup<FargateProfileLabelFormProperties>({
		});

	}

	export enum FargateProfileStatus { CREATING = 'CREATING', ACTIVE = 'ACTIVE', DELETING = 'DELETING', CREATE_FAILED = 'CREATE_FAILED', DELETE_FAILED = 'DELETE_FAILED' }

	export interface CreateNodegroupResponse {
		nodegroup?: Nodegroup;
	}
	export interface CreateNodegroupResponseFormProperties {
	}
	export function CreateCreateNodegroupResponseFormGroup() {
		return new FormGroup<CreateNodegroupResponseFormProperties>({
		});

	}


	/** An object representing an Amazon EKS managed node group. */
	export interface Nodegroup {
		nodegroupName?: string;
		nodegroupArn?: string;
		clusterName?: string;
		version?: string;
		releaseVersion?: string;
		createdAt?: Date;
		modifiedAt?: Date;
		status?: NodegroupStatus;
		capacityType?: CapacityTypes;
		scalingConfig?: NodegroupScalingConfig;
		instanceTypes?: Array<string>;
		subnets?: Array<string>;
		remoteAccess?: RemoteAccessConfig;
		amiType?: AMITypes;
		nodeRole?: string;
		labels?: LabelsMap;
		taints?: Array<Taint>;
		resources?: NodegroupResources;
		diskSize?: number | null;
		health?: NodegroupHealth;
		updateConfig?: NodegroupUpdateConfig;
		launchTemplate?: LaunchTemplateSpecification;
		tags?: TagMap;
	}

	/** An object representing an Amazon EKS managed node group. */
	export interface NodegroupFormProperties {
		nodegroupName: FormControl<string | null | undefined>,
		nodegroupArn: FormControl<string | null | undefined>,
		clusterName: FormControl<string | null | undefined>,
		version: FormControl<string | null | undefined>,
		releaseVersion: FormControl<string | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
		modifiedAt: FormControl<Date | null | undefined>,
		status: FormControl<NodegroupStatus | null | undefined>,
		capacityType: FormControl<CapacityTypes | null | undefined>,
		amiType: FormControl<AMITypes | null | undefined>,
		nodeRole: FormControl<string | null | undefined>,
		diskSize: FormControl<number | null | undefined>,
	}
	export function CreateNodegroupFormGroup() {
		return new FormGroup<NodegroupFormProperties>({
			nodegroupName: new FormControl<string | null | undefined>(undefined),
			nodegroupArn: new FormControl<string | null | undefined>(undefined),
			clusterName: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
			releaseVersion: new FormControl<string | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
			modifiedAt: new FormControl<Date | null | undefined>(undefined),
			status: new FormControl<NodegroupStatus | null | undefined>(undefined),
			capacityType: new FormControl<CapacityTypes | null | undefined>(undefined),
			amiType: new FormControl<AMITypes | null | undefined>(undefined),
			nodeRole: new FormControl<string | null | undefined>(undefined),
			diskSize: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum NodegroupStatus { CREATING = 'CREATING', ACTIVE = 'ACTIVE', UPDATING = 'UPDATING', DELETING = 'DELETING', CREATE_FAILED = 'CREATE_FAILED', DELETE_FAILED = 'DELETE_FAILED', DEGRADED = 'DEGRADED' }

	export enum CapacityTypes { ON_DEMAND = 'ON_DEMAND', SPOT = 'SPOT' }


	/** An object representing the scaling configuration details for the Auto Scaling group that is associated with your node group. When creating a node group, you must specify all or none of the properties. When updating a node group, you can specify any or none of the properties. */
	export interface NodegroupScalingConfig {
		minSize?: number | null;
		maxSize?: number | null;
		desiredSize?: number | null;
	}

	/** An object representing the scaling configuration details for the Auto Scaling group that is associated with your node group. When creating a node group, you must specify all or none of the properties. When updating a node group, you can specify any or none of the properties. */
	export interface NodegroupScalingConfigFormProperties {
		minSize: FormControl<number | null | undefined>,
		maxSize: FormControl<number | null | undefined>,
		desiredSize: FormControl<number | null | undefined>,
	}
	export function CreateNodegroupScalingConfigFormGroup() {
		return new FormGroup<NodegroupScalingConfigFormProperties>({
			minSize: new FormControl<number | null | undefined>(undefined),
			maxSize: new FormControl<number | null | undefined>(undefined),
			desiredSize: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** An object representing the remote access configuration for the managed node group. */
	export interface RemoteAccessConfig {
		ec2SshKey?: string;
		sourceSecurityGroups?: Array<string>;
	}

	/** An object representing the remote access configuration for the managed node group. */
	export interface RemoteAccessConfigFormProperties {
		ec2SshKey: FormControl<string | null | undefined>,
	}
	export function CreateRemoteAccessConfigFormGroup() {
		return new FormGroup<RemoteAccessConfigFormProperties>({
			ec2SshKey: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AMITypes { AL2_x86_64 = 'AL2_x86_64', AL2_x86_64_GPU = 'AL2_x86_64_GPU', AL2_ARM_64 = 'AL2_ARM_64', CUSTOM = 'CUSTOM', BOTTLEROCKET_ARM_64 = 'BOTTLEROCKET_ARM_64', BOTTLEROCKET_x86_64 = 'BOTTLEROCKET_x86_64', BOTTLEROCKET_ARM_64_NVIDIA = 'BOTTLEROCKET_ARM_64_NVIDIA', BOTTLEROCKET_x86_64_NVIDIA = 'BOTTLEROCKET_x86_64_NVIDIA', WINDOWS_CORE_2019_x86_64 = 'WINDOWS_CORE_2019_x86_64', WINDOWS_FULL_2019_x86_64 = 'WINDOWS_FULL_2019_x86_64', WINDOWS_CORE_2022_x86_64 = 'WINDOWS_CORE_2022_x86_64', WINDOWS_FULL_2022_x86_64 = 'WINDOWS_FULL_2022_x86_64' }

	export interface LabelsMap {
	}
	export interface LabelsMapFormProperties {
	}
	export function CreateLabelsMapFormGroup() {
		return new FormGroup<LabelsMapFormProperties>({
		});

	}


	/** A property that allows a node to repel a set of pods. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/node-taints-managed-node-groups.html">Node taints on managed node groups</a>. */
	export interface Taint {
		key?: string;
		value?: string;
		effect?: TaintEffect;
	}

	/** A property that allows a node to repel a set of pods. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/node-taints-managed-node-groups.html">Node taints on managed node groups</a>. */
	export interface TaintFormProperties {
		key: FormControl<string | null | undefined>,
		value: FormControl<string | null | undefined>,
		effect: FormControl<TaintEffect | null | undefined>,
	}
	export function CreateTaintFormGroup() {
		return new FormGroup<TaintFormProperties>({
			key: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
			effect: new FormControl<TaintEffect | null | undefined>(undefined),
		});

	}

	export enum TaintEffect { NO_SCHEDULE = 'NO_SCHEDULE', NO_EXECUTE = 'NO_EXECUTE', PREFER_NO_SCHEDULE = 'PREFER_NO_SCHEDULE' }


	/** An object representing the resources associated with the node group, such as Auto Scaling groups and security groups for remote access. */
	export interface NodegroupResources {
		autoScalingGroups?: Array<AutoScalingGroup>;
		remoteAccessSecurityGroup?: string;
	}

	/** An object representing the resources associated with the node group, such as Auto Scaling groups and security groups for remote access. */
	export interface NodegroupResourcesFormProperties {
		remoteAccessSecurityGroup: FormControl<string | null | undefined>,
	}
	export function CreateNodegroupResourcesFormGroup() {
		return new FormGroup<NodegroupResourcesFormProperties>({
			remoteAccessSecurityGroup: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An Auto Scaling group that is associated with an Amazon EKS managed node group. */
	export interface AutoScalingGroup {
		name?: string;
	}

	/** An Auto Scaling group that is associated with an Amazon EKS managed node group. */
	export interface AutoScalingGroupFormProperties {
		name: FormControl<string | null | undefined>,
	}
	export function CreateAutoScalingGroupFormGroup() {
		return new FormGroup<AutoScalingGroupFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An object representing the health status of the node group. */
	export interface NodegroupHealth {
		issues?: Array<Issue>;
	}

	/** An object representing the health status of the node group. */
	export interface NodegroupHealthFormProperties {
	}
	export function CreateNodegroupHealthFormGroup() {
		return new FormGroup<NodegroupHealthFormProperties>({
		});

	}


	/** An object representing an issue with an Amazon EKS resource. */
	export interface Issue {
		code?: NodegroupIssueCode;
		message?: string;
		resourceIds?: Array<string>;
	}

	/** An object representing an issue with an Amazon EKS resource. */
	export interface IssueFormProperties {
		code: FormControl<NodegroupIssueCode | null | undefined>,
		message: FormControl<string | null | undefined>,
	}
	export function CreateIssueFormGroup() {
		return new FormGroup<IssueFormProperties>({
			code: new FormControl<NodegroupIssueCode | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum NodegroupIssueCode { AutoScalingGroupNotFound = 'AutoScalingGroupNotFound', AutoScalingGroupInvalidConfiguration = 'AutoScalingGroupInvalidConfiguration', Ec2SecurityGroupNotFound = 'Ec2SecurityGroupNotFound', Ec2SecurityGroupDeletionFailure = 'Ec2SecurityGroupDeletionFailure', Ec2LaunchTemplateNotFound = 'Ec2LaunchTemplateNotFound', Ec2LaunchTemplateVersionMismatch = 'Ec2LaunchTemplateVersionMismatch', Ec2SubnetNotFound = 'Ec2SubnetNotFound', Ec2SubnetInvalidConfiguration = 'Ec2SubnetInvalidConfiguration', IamInstanceProfileNotFound = 'IamInstanceProfileNotFound', Ec2SubnetMissingIpv6Assignment = 'Ec2SubnetMissingIpv6Assignment', IamLimitExceeded = 'IamLimitExceeded', IamNodeRoleNotFound = 'IamNodeRoleNotFound', NodeCreationFailure = 'NodeCreationFailure', AsgInstanceLaunchFailures = 'AsgInstanceLaunchFailures', InstanceLimitExceeded = 'InstanceLimitExceeded', InsufficientFreeAddresses = 'InsufficientFreeAddresses', AccessDenied = 'AccessDenied', InternalFailure = 'InternalFailure', ClusterUnreachable = 'ClusterUnreachable', AmiIdNotFound = 'AmiIdNotFound', AutoScalingGroupOptInRequired = 'AutoScalingGroupOptInRequired', AutoScalingGroupRateLimitExceeded = 'AutoScalingGroupRateLimitExceeded', Ec2LaunchTemplateDeletionFailure = 'Ec2LaunchTemplateDeletionFailure', Ec2LaunchTemplateInvalidConfiguration = 'Ec2LaunchTemplateInvalidConfiguration', Ec2LaunchTemplateMaxLimitExceeded = 'Ec2LaunchTemplateMaxLimitExceeded', Ec2SubnetListTooLong = 'Ec2SubnetListTooLong', IamThrottling = 'IamThrottling', NodeTerminationFailure = 'NodeTerminationFailure', PodEvictionFailure = 'PodEvictionFailure', SourceEc2LaunchTemplateNotFound = 'SourceEc2LaunchTemplateNotFound', LimitExceeded = 'LimitExceeded', Unknown = 'Unknown', AutoScalingGroupInstanceRefreshActive = 'AutoScalingGroupInstanceRefreshActive' }


	/** The node group update configuration. */
	export interface NodegroupUpdateConfig {
		maxUnavailable?: number | null;
		maxUnavailablePercentage?: number | null;
	}

	/** The node group update configuration. */
	export interface NodegroupUpdateConfigFormProperties {
		maxUnavailable: FormControl<number | null | undefined>,
		maxUnavailablePercentage: FormControl<number | null | undefined>,
	}
	export function CreateNodegroupUpdateConfigFormGroup() {
		return new FormGroup<NodegroupUpdateConfigFormProperties>({
			maxUnavailable: new FormControl<number | null | undefined>(undefined),
			maxUnavailablePercentage: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** <p>An object representing a node group launch template specification. The launch template can't include <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateNetworkInterface.html"> <code>SubnetId</code> </a>, <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_IamInstanceProfile.html"> <code>IamInstanceProfile</code> </a>, <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RequestSpotInstances.html"> <code>RequestSpotInstances</code> </a>, <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_HibernationOptionsRequest.html"> <code>HibernationOptions</code> </a>, or <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_TerminateInstances.html"> <code>TerminateInstances</code> </a>, or the node group deployment or update will fail. For more information about launch templates, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateLaunchTemplate.html"> <code>CreateLaunchTemplate</code> </a> in the Amazon EC2 API Reference. For more information about using launch templates with Amazon EKS, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/launch-templates.html">Launch template support</a> in the <i>Amazon EKS User Guide</i>.</p> <p>You must specify either the launch template ID or the launch template name in the request, but not both.</p> */
	export interface LaunchTemplateSpecification {
		name?: string;
		version?: string;
		id?: string;
	}

	/** <p>An object representing a node group launch template specification. The launch template can't include <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateNetworkInterface.html"> <code>SubnetId</code> </a>, <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_IamInstanceProfile.html"> <code>IamInstanceProfile</code> </a>, <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RequestSpotInstances.html"> <code>RequestSpotInstances</code> </a>, <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_HibernationOptionsRequest.html"> <code>HibernationOptions</code> </a>, or <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_TerminateInstances.html"> <code>TerminateInstances</code> </a>, or the node group deployment or update will fail. For more information about launch templates, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateLaunchTemplate.html"> <code>CreateLaunchTemplate</code> </a> in the Amazon EC2 API Reference. For more information about using launch templates with Amazon EKS, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/launch-templates.html">Launch template support</a> in the <i>Amazon EKS User Guide</i>.</p> <p>You must specify either the launch template ID or the launch template name in the request, but not both.</p> */
	export interface LaunchTemplateSpecificationFormProperties {
		name: FormControl<string | null | undefined>,
		version: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
	}
	export function CreateLaunchTemplateSpecificationFormGroup() {
		return new FormGroup<LaunchTemplateSpecificationFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteAddonResponse {

		/** An Amazon EKS add-on. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/eks-add-ons.html">Amazon EKS add-ons</a> in the <i>Amazon EKS User Guide</i>. */
		addon?: Addon;
	}
	export interface DeleteAddonResponseFormProperties {
	}
	export function CreateDeleteAddonResponseFormGroup() {
		return new FormGroup<DeleteAddonResponseFormProperties>({
		});

	}

	export interface DeleteClusterResponse {
		cluster?: Cluster;
	}
	export interface DeleteClusterResponseFormProperties {
	}
	export function CreateDeleteClusterResponseFormGroup() {
		return new FormGroup<DeleteClusterResponseFormProperties>({
		});

	}

	export interface DeleteFargateProfileResponse {
		fargateProfile?: FargateProfile;
	}
	export interface DeleteFargateProfileResponseFormProperties {
	}
	export function CreateDeleteFargateProfileResponseFormGroup() {
		return new FormGroup<DeleteFargateProfileResponseFormProperties>({
		});

	}

	export interface DeleteNodegroupResponse {
		nodegroup?: Nodegroup;
	}
	export interface DeleteNodegroupResponseFormProperties {
	}
	export function CreateDeleteNodegroupResponseFormGroup() {
		return new FormGroup<DeleteNodegroupResponseFormProperties>({
		});

	}

	export interface DeregisterClusterResponse {

		/** An object representing an Amazon EKS cluster. */
		cluster?: Cluster;
	}
	export interface DeregisterClusterResponseFormProperties {
	}
	export function CreateDeregisterClusterResponseFormGroup() {
		return new FormGroup<DeregisterClusterResponseFormProperties>({
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

	export interface DescribeAddonResponse {

		/** An Amazon EKS add-on. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/eks-add-ons.html">Amazon EKS add-ons</a> in the <i>Amazon EKS User Guide</i>. */
		addon?: Addon;
	}
	export interface DescribeAddonResponseFormProperties {
	}
	export function CreateDescribeAddonResponseFormGroup() {
		return new FormGroup<DescribeAddonResponseFormProperties>({
		});

	}

	export interface DescribeAddonConfigurationResponse {
		addonName?: string;
		addonVersion?: string;
		configurationSchema?: string;
	}
	export interface DescribeAddonConfigurationResponseFormProperties {
		addonName: FormControl<string | null | undefined>,
		addonVersion: FormControl<string | null | undefined>,
		configurationSchema: FormControl<string | null | undefined>,
	}
	export function CreateDescribeAddonConfigurationResponseFormGroup() {
		return new FormGroup<DescribeAddonConfigurationResponseFormProperties>({
			addonName: new FormControl<string | null | undefined>(undefined),
			addonVersion: new FormControl<string | null | undefined>(undefined),
			configurationSchema: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeAddonVersionsResponse {
		addons?: Array<AddonInfo>;
		nextToken?: string;
	}
	export interface DescribeAddonVersionsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeAddonVersionsResponseFormGroup() {
		return new FormGroup<DescribeAddonVersionsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about an add-on. */
	export interface AddonInfo {
		addonName?: string;
		type?: string;
		addonVersions?: Array<AddonVersionInfo>;
		publisher?: string;
		owner?: string;
		marketplaceInformation?: MarketplaceInformation;
	}

	/** Information about an add-on. */
	export interface AddonInfoFormProperties {
		addonName: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
		publisher: FormControl<string | null | undefined>,
		owner: FormControl<string | null | undefined>,
	}
	export function CreateAddonInfoFormGroup() {
		return new FormGroup<AddonInfoFormProperties>({
			addonName: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			publisher: new FormControl<string | null | undefined>(undefined),
			owner: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about an add-on version. */
	export interface AddonVersionInfo {
		addonVersion?: string;
		architecture?: Array<string>;
		compatibilities?: Array<Compatibility>;
		requiresConfiguration?: boolean | null;
	}

	/** Information about an add-on version. */
	export interface AddonVersionInfoFormProperties {
		addonVersion: FormControl<string | null | undefined>,
		requiresConfiguration: FormControl<boolean | null | undefined>,
	}
	export function CreateAddonVersionInfoFormGroup() {
		return new FormGroup<AddonVersionInfoFormProperties>({
			addonVersion: new FormControl<string | null | undefined>(undefined),
			requiresConfiguration: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Compatibility information. */
	export interface Compatibility {
		clusterVersion?: string;
		platformVersions?: Array<string>;
		defaultVersion?: boolean | null;
	}

	/** Compatibility information. */
	export interface CompatibilityFormProperties {
		clusterVersion: FormControl<string | null | undefined>,
		defaultVersion: FormControl<boolean | null | undefined>,
	}
	export function CreateCompatibilityFormGroup() {
		return new FormGroup<CompatibilityFormProperties>({
			clusterVersion: new FormControl<string | null | undefined>(undefined),
			defaultVersion: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface DescribeClusterResponse {
		cluster?: Cluster;
	}
	export interface DescribeClusterResponseFormProperties {
	}
	export function CreateDescribeClusterResponseFormGroup() {
		return new FormGroup<DescribeClusterResponseFormProperties>({
		});

	}

	export interface DescribeFargateProfileResponse {
		fargateProfile?: FargateProfile;
	}
	export interface DescribeFargateProfileResponseFormProperties {
	}
	export function CreateDescribeFargateProfileResponseFormGroup() {
		return new FormGroup<DescribeFargateProfileResponseFormProperties>({
		});

	}

	export interface DescribeIdentityProviderConfigResponse {
		identityProviderConfig?: IdentityProviderConfigResponse;
	}
	export interface DescribeIdentityProviderConfigResponseFormProperties {
	}
	export function CreateDescribeIdentityProviderConfigResponseFormGroup() {
		return new FormGroup<DescribeIdentityProviderConfigResponseFormProperties>({
		});

	}


	/** The full description of your identity configuration. */
	export interface IdentityProviderConfigResponse {
		oidc?: OidcIdentityProviderConfig;
	}

	/** The full description of your identity configuration. */
	export interface IdentityProviderConfigResponseFormProperties {
	}
	export function CreateIdentityProviderConfigResponseFormGroup() {
		return new FormGroup<IdentityProviderConfigResponseFormProperties>({
		});

	}


	/** An object representing the configuration for an OpenID Connect (OIDC) identity provider.  */
	export interface OidcIdentityProviderConfig {
		identityProviderConfigName?: string;
		identityProviderConfigArn?: string;
		clusterName?: string;
		issuerUrl?: string;
		clientId?: string;
		usernameClaim?: string;
		usernamePrefix?: string;
		groupsClaim?: string;
		groupsPrefix?: string;
		requiredClaims?: RequiredClaimsMap;
		tags?: TagMap;
		status?: ConfigStatus;
	}

	/** An object representing the configuration for an OpenID Connect (OIDC) identity provider.  */
	export interface OidcIdentityProviderConfigFormProperties {
		identityProviderConfigName: FormControl<string | null | undefined>,
		identityProviderConfigArn: FormControl<string | null | undefined>,
		clusterName: FormControl<string | null | undefined>,
		issuerUrl: FormControl<string | null | undefined>,
		clientId: FormControl<string | null | undefined>,
		usernameClaim: FormControl<string | null | undefined>,
		usernamePrefix: FormControl<string | null | undefined>,
		groupsClaim: FormControl<string | null | undefined>,
		groupsPrefix: FormControl<string | null | undefined>,
		status: FormControl<ConfigStatus | null | undefined>,
	}
	export function CreateOidcIdentityProviderConfigFormGroup() {
		return new FormGroup<OidcIdentityProviderConfigFormProperties>({
			identityProviderConfigName: new FormControl<string | null | undefined>(undefined),
			identityProviderConfigArn: new FormControl<string | null | undefined>(undefined),
			clusterName: new FormControl<string | null | undefined>(undefined),
			issuerUrl: new FormControl<string | null | undefined>(undefined),
			clientId: new FormControl<string | null | undefined>(undefined),
			usernameClaim: new FormControl<string | null | undefined>(undefined),
			usernamePrefix: new FormControl<string | null | undefined>(undefined),
			groupsClaim: new FormControl<string | null | undefined>(undefined),
			groupsPrefix: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<ConfigStatus | null | undefined>(undefined),
		});

	}

	export enum ConfigStatus { CREATING = 'CREATING', DELETING = 'DELETING', ACTIVE = 'ACTIVE' }

	export interface DescribeNodegroupResponse {
		nodegroup?: Nodegroup;
	}
	export interface DescribeNodegroupResponseFormProperties {
	}
	export function CreateDescribeNodegroupResponseFormGroup() {
		return new FormGroup<DescribeNodegroupResponseFormProperties>({
		});

	}

	export interface DescribeUpdateResponse {
		update?: Update;
	}
	export interface DescribeUpdateResponseFormProperties {
	}
	export function CreateDescribeUpdateResponseFormGroup() {
		return new FormGroup<DescribeUpdateResponseFormProperties>({
		});

	}

	export interface DisassociateIdentityProviderConfigResponse {

		/** An object representing an asynchronous update. */
		update?: Update;
	}
	export interface DisassociateIdentityProviderConfigResponseFormProperties {
	}
	export function CreateDisassociateIdentityProviderConfigResponseFormGroup() {
		return new FormGroup<DisassociateIdentityProviderConfigResponseFormProperties>({
		});

	}

	export interface ListAddonsResponse {
		addons?: Array<string>;
		nextToken?: string;
	}
	export interface ListAddonsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListAddonsResponseFormGroup() {
		return new FormGroup<ListAddonsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListClustersResponse {
		clusters?: Array<string>;
		nextToken?: string;
	}
	export interface ListClustersResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListClustersResponseFormGroup() {
		return new FormGroup<ListClustersResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListFargateProfilesResponse {
		fargateProfileNames?: Array<string>;
		nextToken?: string;
	}
	export interface ListFargateProfilesResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListFargateProfilesResponseFormGroup() {
		return new FormGroup<ListFargateProfilesResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListIdentityProviderConfigsResponse {
		identityProviderConfigs?: Array<IdentityProviderConfig>;
		nextToken?: string;
	}
	export interface ListIdentityProviderConfigsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListIdentityProviderConfigsResponseFormGroup() {
		return new FormGroup<ListIdentityProviderConfigsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An object representing an identity provider configuration. */
	export interface IdentityProviderConfig {

		/** Required */
		type: string;

		/** Required */
		name: string;
	}

	/** An object representing an identity provider configuration. */
	export interface IdentityProviderConfigFormProperties {

		/** Required */
		type: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
	}
	export function CreateIdentityProviderConfigFormGroup() {
		return new FormGroup<IdentityProviderConfigFormProperties>({
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListNodegroupsResponse {
		nodegroups?: Array<string>;
		nextToken?: string;
	}
	export interface ListNodegroupsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListNodegroupsResponseFormGroup() {
		return new FormGroup<ListNodegroupsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListTagsForResourceResponse {
		tags?: TagMap;
	}
	export interface ListTagsForResourceResponseFormProperties {
	}
	export function CreateListTagsForResourceResponseFormGroup() {
		return new FormGroup<ListTagsForResourceResponseFormProperties>({
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

	export interface NotFoundException {
	}
	export interface NotFoundExceptionFormProperties {
	}
	export function CreateNotFoundExceptionFormGroup() {
		return new FormGroup<NotFoundExceptionFormProperties>({
		});

	}

	export interface ListUpdatesResponse {
		updateIds?: Array<string>;
		nextToken?: string;
	}
	export interface ListUpdatesResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListUpdatesResponseFormGroup() {
		return new FormGroup<ListUpdatesResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RegisterClusterResponse {

		/** An object representing an Amazon EKS cluster. */
		cluster?: Cluster;
	}
	export interface RegisterClusterResponseFormProperties {
	}
	export function CreateRegisterClusterResponseFormGroup() {
		return new FormGroup<RegisterClusterResponseFormProperties>({
		});

	}

	export enum ConnectorConfigProvider { EKS_ANYWHERE = 'EKS_ANYWHERE', ANTHOS = 'ANTHOS', GKE = 'GKE', AKS = 'AKS', OPENSHIFT = 'OPENSHIFT', TANZU = 'TANZU', RANCHER = 'RANCHER', EC2 = 'EC2', OTHER = 'OTHER' }

	export interface ResourcePropagationDelayException {
	}
	export interface ResourcePropagationDelayExceptionFormProperties {
	}
	export function CreateResourcePropagationDelayExceptionFormGroup() {
		return new FormGroup<ResourcePropagationDelayExceptionFormProperties>({
		});

	}

	export interface TagResourceResponse {
	}
	export interface TagResourceResponseFormProperties {
	}
	export function CreateTagResourceResponseFormGroup() {
		return new FormGroup<TagResourceResponseFormProperties>({
		});

	}

	export interface UntagResourceResponse {
	}
	export interface UntagResourceResponseFormProperties {
	}
	export function CreateUntagResourceResponseFormGroup() {
		return new FormGroup<UntagResourceResponseFormProperties>({
		});

	}

	export interface UpdateAddonResponse {

		/** An object representing an asynchronous update. */
		update?: Update;
	}
	export interface UpdateAddonResponseFormProperties {
	}
	export function CreateUpdateAddonResponseFormGroup() {
		return new FormGroup<UpdateAddonResponseFormProperties>({
		});

	}

	export interface UpdateClusterConfigResponse {

		/** An object representing an asynchronous update. */
		update?: Update;
	}
	export interface UpdateClusterConfigResponseFormProperties {
	}
	export function CreateUpdateClusterConfigResponseFormGroup() {
		return new FormGroup<UpdateClusterConfigResponseFormProperties>({
		});

	}

	export interface UpdateClusterVersionResponse {
		update?: Update;
	}
	export interface UpdateClusterVersionResponseFormProperties {
	}
	export function CreateUpdateClusterVersionResponseFormGroup() {
		return new FormGroup<UpdateClusterVersionResponseFormProperties>({
		});

	}

	export interface UpdateNodegroupConfigResponse {

		/** An object representing an asynchronous update. */
		update?: Update;
	}
	export interface UpdateNodegroupConfigResponseFormProperties {
	}
	export function CreateUpdateNodegroupConfigResponseFormGroup() {
		return new FormGroup<UpdateNodegroupConfigResponseFormProperties>({
		});

	}

	export interface UpdateNodegroupVersionResponse {

		/** An object representing an asynchronous update. */
		update?: Update;
	}
	export interface UpdateNodegroupVersionResponseFormProperties {
	}
	export function CreateUpdateNodegroupVersionResponseFormGroup() {
		return new FormGroup<UpdateNodegroupVersionResponseFormProperties>({
		});

	}

	export interface AssociateEncryptionConfigRequest {

		/** Required */
		encryptionConfig: Array<EncryptionConfig>;
		clientRequestToken?: string;
	}
	export interface AssociateEncryptionConfigRequestFormProperties {
		clientRequestToken: FormControl<string | null | undefined>,
	}
	export function CreateAssociateEncryptionConfigRequestFormGroup() {
		return new FormGroup<AssociateEncryptionConfigRequestFormProperties>({
			clientRequestToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An object representing an OpenID Connect (OIDC) configuration. Before associating an OIDC identity provider to your cluster, review the considerations in <a href="https://docs.aws.amazon.com/eks/latest/userguide/authenticate-oidc-identity-provider.html">Authenticating users for your cluster from an OpenID Connect identity provider</a> in the <i>Amazon EKS User Guide</i>. */
	export interface OidcIdentityProviderConfigRequest {

		/** Required */
		identityProviderConfigName: string;

		/** Required */
		issuerUrl: string;

		/** Required */
		clientId: string;
		usernameClaim?: string;
		usernamePrefix?: string;
		groupsClaim?: string;
		groupsPrefix?: string;
		requiredClaims?: RequiredClaimsMap;
	}

	/** An object representing an OpenID Connect (OIDC) configuration. Before associating an OIDC identity provider to your cluster, review the considerations in <a href="https://docs.aws.amazon.com/eks/latest/userguide/authenticate-oidc-identity-provider.html">Authenticating users for your cluster from an OpenID Connect identity provider</a> in the <i>Amazon EKS User Guide</i>. */
	export interface OidcIdentityProviderConfigRequestFormProperties {

		/** Required */
		identityProviderConfigName: FormControl<string | null | undefined>,

		/** Required */
		issuerUrl: FormControl<string | null | undefined>,

		/** Required */
		clientId: FormControl<string | null | undefined>,
		usernameClaim: FormControl<string | null | undefined>,
		usernamePrefix: FormControl<string | null | undefined>,
		groupsClaim: FormControl<string | null | undefined>,
		groupsPrefix: FormControl<string | null | undefined>,
	}
	export function CreateOidcIdentityProviderConfigRequestFormGroup() {
		return new FormGroup<OidcIdentityProviderConfigRequestFormProperties>({
			identityProviderConfigName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			issuerUrl: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			clientId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			usernameClaim: new FormControl<string | null | undefined>(undefined),
			usernamePrefix: new FormControl<string | null | undefined>(undefined),
			groupsClaim: new FormControl<string | null | undefined>(undefined),
			groupsPrefix: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AssociateIdentityProviderConfigRequest {

		/** Required */
		oidc: OidcIdentityProviderConfigRequest;
		tags?: TagMap;
		clientRequestToken?: string;
	}
	export interface AssociateIdentityProviderConfigRequestFormProperties {
		clientRequestToken: FormControl<string | null | undefined>,
	}
	export function CreateAssociateIdentityProviderConfigRequestFormGroup() {
		return new FormGroup<AssociateIdentityProviderConfigRequestFormProperties>({
			clientRequestToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The configuration sent to a cluster for configuration. */
	export interface ConnectorConfigRequest {

		/** Required */
		roleArn: string;

		/** Required */
		provider: ConnectorConfigProvider;
	}

	/** The configuration sent to a cluster for configuration. */
	export interface ConnectorConfigRequestFormProperties {

		/** Required */
		roleArn: FormControl<string | null | undefined>,

		/** Required */
		provider: FormControl<ConnectorConfigProvider | null | undefined>,
	}
	export function CreateConnectorConfigRequestFormGroup() {
		return new FormGroup<ConnectorConfigRequestFormProperties>({
			roleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			provider: new FormControl<ConnectorConfigProvider | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ResolveConflicts { OVERWRITE = 'OVERWRITE', NONE = 'NONE', PRESERVE = 'PRESERVE' }

	export interface CreateAddonRequest {

		/** Required */
		addonName: string;
		addonVersion?: string;
		serviceAccountRoleArn?: string;
		resolveConflicts?: ResolveConflicts;
		clientRequestToken?: string;
		tags?: TagMap;
		configurationValues?: string;
	}
	export interface CreateAddonRequestFormProperties {

		/** Required */
		addonName: FormControl<string | null | undefined>,
		addonVersion: FormControl<string | null | undefined>,
		serviceAccountRoleArn: FormControl<string | null | undefined>,
		resolveConflicts: FormControl<ResolveConflicts | null | undefined>,
		clientRequestToken: FormControl<string | null | undefined>,
		configurationValues: FormControl<string | null | undefined>,
	}
	export function CreateCreateAddonRequestFormGroup() {
		return new FormGroup<CreateAddonRequestFormProperties>({
			addonName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			addonVersion: new FormControl<string | null | undefined>(undefined),
			serviceAccountRoleArn: new FormControl<string | null | undefined>(undefined),
			resolveConflicts: new FormControl<ResolveConflicts | null | undefined>(undefined),
			clientRequestToken: new FormControl<string | null | undefined>(undefined),
			configurationValues: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An object representing the VPC configuration to use for an Amazon EKS cluster. */
	export interface VpcConfigRequest {
		subnetIds?: Array<string>;
		securityGroupIds?: Array<string>;
		endpointPublicAccess?: boolean | null;
		endpointPrivateAccess?: boolean | null;
		publicAccessCidrs?: Array<string>;
	}

	/** An object representing the VPC configuration to use for an Amazon EKS cluster. */
	export interface VpcConfigRequestFormProperties {
		endpointPublicAccess: FormControl<boolean | null | undefined>,
		endpointPrivateAccess: FormControl<boolean | null | undefined>,
	}
	export function CreateVpcConfigRequestFormGroup() {
		return new FormGroup<VpcConfigRequestFormProperties>({
			endpointPublicAccess: new FormControl<boolean | null | undefined>(undefined),
			endpointPrivateAccess: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** The Kubernetes network configuration for the cluster. */
	export interface KubernetesNetworkConfigRequest {
		serviceIpv4Cidr?: string;
		ipFamily?: IpFamily;
	}

	/** The Kubernetes network configuration for the cluster. */
	export interface KubernetesNetworkConfigRequestFormProperties {
		serviceIpv4Cidr: FormControl<string | null | undefined>,
		ipFamily: FormControl<IpFamily | null | undefined>,
	}
	export function CreateKubernetesNetworkConfigRequestFormGroup() {
		return new FormGroup<KubernetesNetworkConfigRequestFormProperties>({
			serviceIpv4Cidr: new FormControl<string | null | undefined>(undefined),
			ipFamily: new FormControl<IpFamily | null | undefined>(undefined),
		});

	}


	/** The configuration of your local Amazon EKS cluster on an Amazon Web Services Outpost. Before creating a cluster on an Outpost, review <a href="https://docs.aws.amazon.com/eks/latest/userguide/eks-outposts-local-cluster-create.html">Creating a local cluster on an Outpost</a> in the <i>Amazon EKS User Guide</i>. This API isn't available for Amazon EKS clusters on the Amazon Web Services cloud. */
	export interface OutpostConfigRequest {

		/** Required */
		outpostArns: Array<string>;

		/** Required */
		controlPlaneInstanceType: string;
		controlPlanePlacement?: ControlPlanePlacementRequest;
	}

	/** The configuration of your local Amazon EKS cluster on an Amazon Web Services Outpost. Before creating a cluster on an Outpost, review <a href="https://docs.aws.amazon.com/eks/latest/userguide/eks-outposts-local-cluster-create.html">Creating a local cluster on an Outpost</a> in the <i>Amazon EKS User Guide</i>. This API isn't available for Amazon EKS clusters on the Amazon Web Services cloud. */
	export interface OutpostConfigRequestFormProperties {

		/** Required */
		controlPlaneInstanceType: FormControl<string | null | undefined>,
	}
	export function CreateOutpostConfigRequestFormGroup() {
		return new FormGroup<OutpostConfigRequestFormProperties>({
			controlPlaneInstanceType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateClusterRequest {

		/** Required */
		name: string;
		version?: string;

		/** Required */
		roleArn: string;

		/** Required */
		resourcesVpcConfig: VpcConfigRequest;
		kubernetesNetworkConfig?: KubernetesNetworkConfigRequest;
		logging?: Logging;
		clientRequestToken?: string;
		tags?: TagMap;
		encryptionConfig?: Array<EncryptionConfig>;
		outpostConfig?: OutpostConfigRequest;
	}
	export interface CreateClusterRequestFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,
		version: FormControl<string | null | undefined>,

		/** Required */
		roleArn: FormControl<string | null | undefined>,
		clientRequestToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateClusterRequestFormGroup() {
		return new FormGroup<CreateClusterRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			version: new FormControl<string | null | undefined>(undefined),
			roleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			clientRequestToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateFargateProfileRequest {

		/** Required */
		fargateProfileName: string;

		/** Required */
		podExecutionRoleArn: string;
		subnets?: Array<string>;
		selectors?: Array<FargateProfileSelector>;
		clientRequestToken?: string;
		tags?: TagMap;
	}
	export interface CreateFargateProfileRequestFormProperties {

		/** Required */
		fargateProfileName: FormControl<string | null | undefined>,

		/** Required */
		podExecutionRoleArn: FormControl<string | null | undefined>,
		clientRequestToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateFargateProfileRequestFormGroup() {
		return new FormGroup<CreateFargateProfileRequestFormProperties>({
			fargateProfileName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			podExecutionRoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			clientRequestToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateNodegroupRequest {

		/** Required */
		nodegroupName: string;
		scalingConfig?: NodegroupScalingConfig;
		diskSize?: number | null;

		/** Required */
		subnets: Array<string>;
		instanceTypes?: Array<string>;
		amiType?: AMITypes;
		remoteAccess?: RemoteAccessConfig;

		/** Required */
		nodeRole: string;
		labels?: LabelsMap;
		taints?: Array<Taint>;
		tags?: TagMap;
		clientRequestToken?: string;
		launchTemplate?: LaunchTemplateSpecification;
		updateConfig?: NodegroupUpdateConfig;
		capacityType?: CapacityTypes;
		version?: string;
		releaseVersion?: string;
	}
	export interface CreateNodegroupRequestFormProperties {

		/** Required */
		nodegroupName: FormControl<string | null | undefined>,
		diskSize: FormControl<number | null | undefined>,
		amiType: FormControl<AMITypes | null | undefined>,

		/** Required */
		nodeRole: FormControl<string | null | undefined>,
		clientRequestToken: FormControl<string | null | undefined>,
		capacityType: FormControl<CapacityTypes | null | undefined>,
		version: FormControl<string | null | undefined>,
		releaseVersion: FormControl<string | null | undefined>,
	}
	export function CreateCreateNodegroupRequestFormGroup() {
		return new FormGroup<CreateNodegroupRequestFormProperties>({
			nodegroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			diskSize: new FormControl<number | null | undefined>(undefined),
			amiType: new FormControl<AMITypes | null | undefined>(undefined),
			nodeRole: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			clientRequestToken: new FormControl<string | null | undefined>(undefined),
			capacityType: new FormControl<CapacityTypes | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
			releaseVersion: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteAddonRequest {
	}
	export interface DeleteAddonRequestFormProperties {
	}
	export function CreateDeleteAddonRequestFormGroup() {
		return new FormGroup<DeleteAddonRequestFormProperties>({
		});

	}

	export interface DeleteClusterRequest {
	}
	export interface DeleteClusterRequestFormProperties {
	}
	export function CreateDeleteClusterRequestFormGroup() {
		return new FormGroup<DeleteClusterRequestFormProperties>({
		});

	}

	export interface DeleteFargateProfileRequest {
	}
	export interface DeleteFargateProfileRequestFormProperties {
	}
	export function CreateDeleteFargateProfileRequestFormGroup() {
		return new FormGroup<DeleteFargateProfileRequestFormProperties>({
		});

	}

	export interface DeleteNodegroupRequest {
	}
	export interface DeleteNodegroupRequestFormProperties {
	}
	export function CreateDeleteNodegroupRequestFormGroup() {
		return new FormGroup<DeleteNodegroupRequestFormProperties>({
		});

	}

	export interface DeregisterClusterRequest {
	}
	export interface DeregisterClusterRequestFormProperties {
	}
	export function CreateDeregisterClusterRequestFormGroup() {
		return new FormGroup<DeregisterClusterRequestFormProperties>({
		});

	}

	export interface DescribeAddonConfigurationRequest {
	}
	export interface DescribeAddonConfigurationRequestFormProperties {
	}
	export function CreateDescribeAddonConfigurationRequestFormGroup() {
		return new FormGroup<DescribeAddonConfigurationRequestFormProperties>({
		});

	}

	export interface DescribeAddonRequest {
	}
	export interface DescribeAddonRequestFormProperties {
	}
	export function CreateDescribeAddonRequestFormGroup() {
		return new FormGroup<DescribeAddonRequestFormProperties>({
		});

	}

	export interface DescribeAddonVersionsRequest {
	}
	export interface DescribeAddonVersionsRequestFormProperties {
	}
	export function CreateDescribeAddonVersionsRequestFormGroup() {
		return new FormGroup<DescribeAddonVersionsRequestFormProperties>({
		});

	}

	export interface DescribeClusterRequest {
	}
	export interface DescribeClusterRequestFormProperties {
	}
	export function CreateDescribeClusterRequestFormGroup() {
		return new FormGroup<DescribeClusterRequestFormProperties>({
		});

	}

	export interface DescribeFargateProfileRequest {
	}
	export interface DescribeFargateProfileRequestFormProperties {
	}
	export function CreateDescribeFargateProfileRequestFormGroup() {
		return new FormGroup<DescribeFargateProfileRequestFormProperties>({
		});

	}

	export interface DescribeIdentityProviderConfigRequest {

		/** Required */
		identityProviderConfig: IdentityProviderConfig;
	}
	export interface DescribeIdentityProviderConfigRequestFormProperties {
	}
	export function CreateDescribeIdentityProviderConfigRequestFormGroup() {
		return new FormGroup<DescribeIdentityProviderConfigRequestFormProperties>({
		});

	}

	export interface DescribeNodegroupRequest {
	}
	export interface DescribeNodegroupRequestFormProperties {
	}
	export function CreateDescribeNodegroupRequestFormGroup() {
		return new FormGroup<DescribeNodegroupRequestFormProperties>({
		});

	}

	export interface DescribeUpdateRequest {
	}
	export interface DescribeUpdateRequestFormProperties {
	}
	export function CreateDescribeUpdateRequestFormGroup() {
		return new FormGroup<DescribeUpdateRequestFormProperties>({
		});

	}

	export interface DisassociateIdentityProviderConfigRequest {

		/** Required */
		identityProviderConfig: IdentityProviderConfig;
		clientRequestToken?: string;
	}
	export interface DisassociateIdentityProviderConfigRequestFormProperties {
		clientRequestToken: FormControl<string | null | undefined>,
	}
	export function CreateDisassociateIdentityProviderConfigRequestFormGroup() {
		return new FormGroup<DisassociateIdentityProviderConfigRequestFormProperties>({
			clientRequestToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListAddonsRequest {
	}
	export interface ListAddonsRequestFormProperties {
	}
	export function CreateListAddonsRequestFormGroup() {
		return new FormGroup<ListAddonsRequestFormProperties>({
		});

	}

	export interface ListClustersRequest {
	}
	export interface ListClustersRequestFormProperties {
	}
	export function CreateListClustersRequestFormGroup() {
		return new FormGroup<ListClustersRequestFormProperties>({
		});

	}

	export interface ListFargateProfilesRequest {
	}
	export interface ListFargateProfilesRequestFormProperties {
	}
	export function CreateListFargateProfilesRequestFormGroup() {
		return new FormGroup<ListFargateProfilesRequestFormProperties>({
		});

	}

	export interface ListIdentityProviderConfigsRequest {
	}
	export interface ListIdentityProviderConfigsRequestFormProperties {
	}
	export function CreateListIdentityProviderConfigsRequestFormGroup() {
		return new FormGroup<ListIdentityProviderConfigsRequestFormProperties>({
		});

	}

	export interface ListNodegroupsRequest {
	}
	export interface ListNodegroupsRequestFormProperties {
	}
	export function CreateListNodegroupsRequestFormGroup() {
		return new FormGroup<ListNodegroupsRequestFormProperties>({
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

	export interface ListUpdatesRequest {
	}
	export interface ListUpdatesRequestFormProperties {
	}
	export function CreateListUpdatesRequestFormGroup() {
		return new FormGroup<ListUpdatesRequestFormProperties>({
		});

	}

	export interface RegisterClusterRequest {

		/** Required */
		name: string;

		/** Required */
		connectorConfig: ConnectorConfigRequest;
		clientRequestToken?: string;
		tags?: TagMap;
	}
	export interface RegisterClusterRequestFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,
		clientRequestToken: FormControl<string | null | undefined>,
	}
	export function CreateRegisterClusterRequestFormGroup() {
		return new FormGroup<RegisterClusterRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			clientRequestToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TagResourceRequest {

		/** Required */
		tags: TagMap;
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

	export interface UpdateAddonRequest {
		addonVersion?: string;
		serviceAccountRoleArn?: string;
		resolveConflicts?: ResolveConflicts;
		clientRequestToken?: string;
		configurationValues?: string;
	}
	export interface UpdateAddonRequestFormProperties {
		addonVersion: FormControl<string | null | undefined>,
		serviceAccountRoleArn: FormControl<string | null | undefined>,
		resolveConflicts: FormControl<ResolveConflicts | null | undefined>,
		clientRequestToken: FormControl<string | null | undefined>,
		configurationValues: FormControl<string | null | undefined>,
	}
	export function CreateUpdateAddonRequestFormGroup() {
		return new FormGroup<UpdateAddonRequestFormProperties>({
			addonVersion: new FormControl<string | null | undefined>(undefined),
			serviceAccountRoleArn: new FormControl<string | null | undefined>(undefined),
			resolveConflicts: new FormControl<ResolveConflicts | null | undefined>(undefined),
			clientRequestToken: new FormControl<string | null | undefined>(undefined),
			configurationValues: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateClusterConfigRequest {

		/** An object representing the VPC configuration to use for an Amazon EKS cluster. */
		resourcesVpcConfig?: VpcConfigRequest;
		logging?: Logging;
		clientRequestToken?: string;
	}
	export interface UpdateClusterConfigRequestFormProperties {
		clientRequestToken: FormControl<string | null | undefined>,
	}
	export function CreateUpdateClusterConfigRequestFormGroup() {
		return new FormGroup<UpdateClusterConfigRequestFormProperties>({
			clientRequestToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateClusterVersionRequest {

		/** Required */
		version: string;
		clientRequestToken?: string;
	}
	export interface UpdateClusterVersionRequestFormProperties {

		/** Required */
		version: FormControl<string | null | undefined>,
		clientRequestToken: FormControl<string | null | undefined>,
	}
	export function CreateUpdateClusterVersionRequestFormGroup() {
		return new FormGroup<UpdateClusterVersionRequestFormProperties>({
			version: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			clientRequestToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An object representing a Kubernetes label change for a managed node group. */
	export interface UpdateLabelsPayload {
		addOrUpdateLabels?: LabelsMap;
		removeLabels?: Array<string>;
	}

	/** An object representing a Kubernetes label change for a managed node group. */
	export interface UpdateLabelsPayloadFormProperties {
	}
	export function CreateUpdateLabelsPayloadFormGroup() {
		return new FormGroup<UpdateLabelsPayloadFormProperties>({
		});

	}


	/** An object representing the details of an update to a taints payload. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/node-taints-managed-node-groups.html">Node taints on managed node groups</a>. */
	export interface UpdateTaintsPayload {
		addOrUpdateTaints?: Array<Taint>;
		removeTaints?: Array<Taint>;
	}

	/** An object representing the details of an update to a taints payload. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/node-taints-managed-node-groups.html">Node taints on managed node groups</a>. */
	export interface UpdateTaintsPayloadFormProperties {
	}
	export function CreateUpdateTaintsPayloadFormGroup() {
		return new FormGroup<UpdateTaintsPayloadFormProperties>({
		});

	}

	export interface UpdateNodegroupConfigRequest {
		labels?: UpdateLabelsPayload;
		taints?: UpdateTaintsPayload;
		scalingConfig?: NodegroupScalingConfig;
		updateConfig?: NodegroupUpdateConfig;
		clientRequestToken?: string;
	}
	export interface UpdateNodegroupConfigRequestFormProperties {
		clientRequestToken: FormControl<string | null | undefined>,
	}
	export function CreateUpdateNodegroupConfigRequestFormGroup() {
		return new FormGroup<UpdateNodegroupConfigRequestFormProperties>({
			clientRequestToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateNodegroupVersionRequest {
		version?: string;
		releaseVersion?: string;
		launchTemplate?: LaunchTemplateSpecification;
		force?: boolean | null;
		clientRequestToken?: string;
	}
	export interface UpdateNodegroupVersionRequestFormProperties {
		version: FormControl<string | null | undefined>,
		releaseVersion: FormControl<string | null | undefined>,
		force: FormControl<boolean | null | undefined>,
		clientRequestToken: FormControl<string | null | undefined>,
	}
	export function CreateUpdateNodegroupVersionRequestFormGroup() {
		return new FormGroup<UpdateNodegroupVersionRequestFormProperties>({
			version: new FormControl<string | null | undefined>(undefined),
			releaseVersion: new FormControl<string | null | undefined>(undefined),
			force: new FormControl<boolean | null | undefined>(undefined),
			clientRequestToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p>Associate encryption configuration to an existing cluster.</p> <p>You can use this API to enable encryption on existing clusters which do not have encryption already enabled. This allows you to implement a defense-in-depth security strategy without migrating applications to new Amazon EKS clusters.</p>
		 * Post clusters/{name}/encryption-config/associate
		 * @param {string} name The name of the cluster that you are associating with encryption configuration.
		 * @return {AssociateEncryptionConfigResponse} Success
		 */
		AssociateEncryptionConfig(name: string, requestBody: AssociateEncryptionConfigPostBody): Observable<AssociateEncryptionConfigResponse> {
			return this.http.post<AssociateEncryptionConfigResponse>(this.baseUri + 'clusters/' + (name == null ? '' : encodeURIComponent(name)) + '/encryption-config/associate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Associate an identity provider configuration to a cluster.</p> <p>If you want to authenticate identities using an identity provider, you can create an identity provider configuration and associate it to your cluster. After configuring authentication to your cluster you can create Kubernetes <code>roles</code> and <code>clusterroles</code> to assign permissions to the roles, and then bind the roles to the identities using Kubernetes <code>rolebindings</code> and <code>clusterrolebindings</code>. For more information see <a href="https://kubernetes.io/docs/reference/access-authn-authz/rbac/">Using RBAC Authorization</a> in the Kubernetes documentation.</p>
		 * Post clusters/{name}/identity-provider-configs/associate
		 * @param {string} name The name of the cluster to associate the configuration to.
		 * @return {AssociateIdentityProviderConfigResponse} Success
		 */
		AssociateIdentityProviderConfig(name: string, requestBody: AssociateIdentityProviderConfigPostBody): Observable<AssociateIdentityProviderConfigResponse> {
			return this.http.post<AssociateIdentityProviderConfigResponse>(this.baseUri + 'clusters/' + (name == null ? '' : encodeURIComponent(name)) + '/identity-provider-configs/associate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates an Amazon EKS add-on.</p> <p>Amazon EKS add-ons help to automate the provisioning and lifecycle management of common operational software for Amazon EKS clusters. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/eks-add-ons.html">Amazon EKS add-ons</a> in the <i>Amazon EKS User Guide</i>.</p>
		 * Post clusters/{name}/addons
		 * @param {string} name The name of the cluster to create the add-on for.
		 * @return {CreateAddonResponse} Success
		 */
		CreateAddon(name: string, requestBody: CreateAddonPostBody): Observable<CreateAddonResponse> {
			return this.http.post<CreateAddonResponse>(this.baseUri + 'clusters/' + (name == null ? '' : encodeURIComponent(name)) + '/addons', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the available add-ons.
		 * Get clusters/{name}/addons
		 * @param {string} name The name of the cluster.
		 * @param {number} maxResults The maximum number of add-on results returned by <code>ListAddonsRequest</code> in paginated output. When you use this parameter, <code>ListAddonsRequest</code> returns only <code>maxResults</code> results in a single page along with a <code>nextToken</code> response element. You can see the remaining results of the initial request by sending another <code>ListAddonsRequest</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 100. If you don't use this parameter, <code>ListAddonsRequest</code> returns up to 100 results and a <code>nextToken</code> value, if applicable.
		 * @param {string} nextToken <p>The <code>nextToken</code> value returned from a previous paginated <code>ListAddonsRequest</code> where <code>maxResults</code> was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the <code>nextToken</code> value.</p> <note> <p>This token should be treated as an opaque identifier that is used only to retrieve the next items in a list and not for other programmatic purposes.</p> </note>
		 * @return {ListAddonsResponse} Success
		 */
		ListAddons(name: string, maxResults: number | null | undefined, nextToken: string | null | undefined): Observable<ListAddonsResponse> {
			return this.http.get<ListAddonsResponse>(this.baseUri + 'clusters/' + (name == null ? '' : encodeURIComponent(name)) + '/addons&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
		}

		/**
		 * <p>Creates an Amazon EKS control plane. </p> <p>The Amazon EKS control plane consists of control plane instances that run the Kubernetes software, such as <code>etcd</code> and the API server. The control plane runs in an account managed by Amazon Web Services, and the Kubernetes API is exposed by the Amazon EKS API server endpoint. Each Amazon EKS cluster control plane is single tenant and unique. It runs on its own set of Amazon EC2 instances.</p> <p>The cluster control plane is provisioned across multiple Availability Zones and fronted by an Elastic Load Balancing Network Load Balancer. Amazon EKS also provisions elastic network interfaces in your VPC subnets to provide connectivity from the control plane instances to the nodes (for example, to support <code>kubectl exec</code>, <code>logs</code>, and <code>proxy</code> data flows).</p> <p>Amazon EKS nodes run in your Amazon Web Services account and connect to your cluster's control plane over the Kubernetes API server endpoint and a certificate file that is created for your cluster.</p> <p>In most cases, it takes several minutes to create a cluster. After you create an Amazon EKS cluster, you must configure your Kubernetes tooling to communicate with the API server and launch nodes into your cluster. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/managing-auth.html">Managing Cluster Authentication</a> and <a href="https://docs.aws.amazon.com/eks/latest/userguide/launch-workers.html">Launching Amazon EKS nodes</a> in the <i>Amazon EKS User Guide</i>.</p>
		 * Post clusters
		 * @return {CreateClusterResponse} Success
		 */
		CreateCluster(requestBody: CreateClusterPostBody): Observable<CreateClusterResponse> {
			return this.http.post<CreateClusterResponse>(this.baseUri + 'clusters', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the Amazon EKS clusters in your Amazon Web Services account in the specified Region.
		 * Get clusters
		 * @param {number} maxResults The maximum number of cluster results returned by <code>ListClusters</code> in paginated output. When you use this parameter, <code>ListClusters</code> returns only <code>maxResults</code> results in a single page along with a <code>nextToken</code> response element. You can see the remaining results of the initial request by sending another <code>ListClusters</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 100. If you don't use this parameter, <code>ListClusters</code> returns up to 100 results and a <code>nextToken</code> value if applicable.
		 * @param {string} nextToken <p>The <code>nextToken</code> value returned from a previous paginated <code>ListClusters</code> request where <code>maxResults</code> was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the <code>nextToken</code> value.</p> <note> <p>This token should be treated as an opaque identifier that is used only to retrieve the next items in a list and not for other programmatic purposes.</p> </note>
		 * @param {Array<string>} include Indicates whether external clusters are included in the returned list. Use '<code>all</code>' to return connected clusters, or blank to return only Amazon EKS clusters. '<code>all</code>' must be in lowercase otherwise an error occurs.
		 * @return {ListClustersResponse} Success
		 */
		ListClusters(maxResults: number | null | undefined, nextToken: string | null | undefined, include: Array<string> | null | undefined): Observable<ListClustersResponse> {
			return this.http.get<ListClustersResponse>(this.baseUri + 'clusters?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&' + include?.map(z => `include=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * <p>Creates an Fargate profile for your Amazon EKS cluster. You must have at least one Fargate profile in a cluster to be able to run pods on Fargate.</p> <p>The Fargate profile allows an administrator to declare which pods run on Fargate and specify which pods run on which Fargate profile. This declaration is done through the profile’s selectors. Each profile can have up to five selectors that contain a namespace and labels. A namespace is required for every selector. The label field consists of multiple optional key-value pairs. Pods that match the selectors are scheduled on Fargate. If a to-be-scheduled pod matches any of the selectors in the Fargate profile, then that pod is run on Fargate.</p> <p>When you create a Fargate profile, you must specify a pod execution role to use with the pods that are scheduled with the profile. This role is added to the cluster's Kubernetes <a href="https://kubernetes.io/docs/admin/authorization/rbac/">Role Based Access Control</a> (RBAC) for authorization so that the <code>kubelet</code> that is running on the Fargate infrastructure can register with your Amazon EKS cluster so that it can appear in your cluster as a node. The pod execution role also provides IAM permissions to the Fargate infrastructure to allow read access to Amazon ECR image repositories. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/pod-execution-role.html">Pod Execution Role</a> in the <i>Amazon EKS User Guide</i>.</p> <p>Fargate profiles are immutable. However, you can create a new updated profile to replace an existing profile and then delete the original after the updated profile has finished creating.</p> <p>If any Fargate profiles in a cluster are in the <code>DELETING</code> status, you must wait for that Fargate profile to finish deleting before you can create any other profiles in that cluster.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/fargate-profile.html">Fargate Profile</a> in the <i>Amazon EKS User Guide</i>.</p>
		 * Post clusters/{name}/fargate-profiles
		 * @param {string} name The name of the Amazon EKS cluster to apply the Fargate profile to.
		 * @return {CreateFargateProfileResponse} Success
		 */
		CreateFargateProfile(name: string, requestBody: CreateFargateProfilePostBody): Observable<CreateFargateProfileResponse> {
			return this.http.post<CreateFargateProfileResponse>(this.baseUri + 'clusters/' + (name == null ? '' : encodeURIComponent(name)) + '/fargate-profiles', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the Fargate profiles associated with the specified cluster in your Amazon Web Services account in the specified Region.
		 * Get clusters/{name}/fargate-profiles
		 * @param {string} name The name of the Amazon EKS cluster that you would like to list Fargate profiles in.
		 * @param {number} maxResults The maximum number of Fargate profile results returned by <code>ListFargateProfiles</code> in paginated output. When you use this parameter, <code>ListFargateProfiles</code> returns only <code>maxResults</code> results in a single page along with a <code>nextToken</code> response element. You can see the remaining results of the initial request by sending another <code>ListFargateProfiles</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 100. If you don't use this parameter, <code>ListFargateProfiles</code> returns up to 100 results and a <code>nextToken</code> value if applicable.
		 * @param {string} nextToken The <code>nextToken</code> value returned from a previous paginated <code>ListFargateProfiles</code> request where <code>maxResults</code> was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the <code>nextToken</code> value.
		 * @return {ListFargateProfilesResponse} Success
		 */
		ListFargateProfiles(name: string, maxResults: number | null | undefined, nextToken: string | null | undefined): Observable<ListFargateProfilesResponse> {
			return this.http.get<ListFargateProfilesResponse>(this.baseUri + 'clusters/' + (name == null ? '' : encodeURIComponent(name)) + '/fargate-profiles&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
		}

		/**
		 * <p>Creates a managed node group for an Amazon EKS cluster. You can only create a node group for your cluster that is equal to the current Kubernetes version for the cluster. All node groups are created with the latest AMI release version for the respective minor Kubernetes version of the cluster, unless you deploy a custom AMI using a launch template. For more information about using launch templates, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/launch-templates.html">Launch template support</a>.</p> <p>An Amazon EKS managed node group is an Amazon EC2 Auto Scaling group and associated Amazon EC2 instances that are managed by Amazon Web Services for an Amazon EKS cluster. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/managed-node-groups.html">Managed node groups</a> in the <i>Amazon EKS User Guide</i>.</p> <note> <p>Windows AMI types are only supported for commercial Regions that support Windows Amazon EKS.</p> </note>
		 * Post clusters/{name}/node-groups
		 * @param {string} name The name of the cluster to create the node group in.
		 * @return {CreateNodegroupResponse} Success
		 */
		CreateNodegroup(name: string, requestBody: CreateNodegroupPostBody): Observable<CreateNodegroupResponse> {
			return this.http.post<CreateNodegroupResponse>(this.baseUri + 'clusters/' + (name == null ? '' : encodeURIComponent(name)) + '/node-groups', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the Amazon EKS managed node groups associated with the specified cluster in your Amazon Web Services account in the specified Region. Self-managed node groups are not listed.
		 * Get clusters/{name}/node-groups
		 * @param {string} name The name of the Amazon EKS cluster that you would like to list node groups in.
		 * @param {number} maxResults The maximum number of node group results returned by <code>ListNodegroups</code> in paginated output. When you use this parameter, <code>ListNodegroups</code> returns only <code>maxResults</code> results in a single page along with a <code>nextToken</code> response element. You can see the remaining results of the initial request by sending another <code>ListNodegroups</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 100. If you don't use this parameter, <code>ListNodegroups</code> returns up to 100 results and a <code>nextToken</code> value if applicable.
		 * @param {string} nextToken The <code>nextToken</code> value returned from a previous paginated <code>ListNodegroups</code> request where <code>maxResults</code> was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the <code>nextToken</code> value.
		 * @return {ListNodegroupsResponse} Success
		 */
		ListNodegroups(name: string, maxResults: number | null | undefined, nextToken: string | null | undefined): Observable<ListNodegroupsResponse> {
			return this.http.get<ListNodegroupsResponse>(this.baseUri + 'clusters/' + (name == null ? '' : encodeURIComponent(name)) + '/node-groups&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
		}

		/**
		 * <p>Delete an Amazon EKS add-on.</p> <p>When you remove the add-on, it will also be deleted from the cluster. You can always manually start an add-on on the cluster using the Kubernetes API.</p>
		 * Delete clusters/{name}/addons/{addonName}
		 * @param {string} name The name of the cluster to delete the add-on from.
		 * @param {string} addonName The name of the add-on. The name must match one of the names returned by <a href="https://docs.aws.amazon.com/eks/latest/APIReference/API_ListAddons.html"> <code>ListAddons</code> </a>.
		 * @param {boolean} preserve Specifying this option preserves the add-on software on your cluster but Amazon EKS stops managing any settings for the add-on. If an IAM account is associated with the add-on, it isn't removed.
		 * @return {DeleteAddonResponse} Success
		 */
		DeleteAddon(name: string, addonName: string, preserve: boolean | null | undefined): Observable<DeleteAddonResponse> {
			return this.http.delete<DeleteAddonResponse>(this.baseUri + 'clusters/' + (name == null ? '' : encodeURIComponent(name)) + '/addons/' + (addonName == null ? '' : encodeURIComponent(addonName)) + '&preserve=' + preserve, {});
		}

		/**
		 * Describes an Amazon EKS add-on.
		 * Get clusters/{name}/addons/{addonName}
		 * @param {string} name The name of the cluster.
		 * @param {string} addonName The name of the add-on. The name must match one of the names returned by <a href="https://docs.aws.amazon.com/eks/latest/APIReference/API_ListAddons.html"> <code>ListAddons</code> </a>.
		 * @return {DescribeAddonResponse} Success
		 */
		DescribeAddon(name: string, addonName: string): Observable<DescribeAddonResponse> {
			return this.http.get<DescribeAddonResponse>(this.baseUri + 'clusters/' + (name == null ? '' : encodeURIComponent(name)) + '/addons/' + (addonName == null ? '' : encodeURIComponent(addonName)), {});
		}

		/**
		 * <p>Deletes the Amazon EKS cluster control plane.</p> <p>If you have active services in your cluster that are associated with a load balancer, you must delete those services before deleting the cluster so that the load balancers are deleted properly. Otherwise, you can have orphaned resources in your VPC that prevent you from being able to delete the VPC. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/delete-cluster.html">Deleting a Cluster</a> in the <i>Amazon EKS User Guide</i>.</p> <p>If you have managed node groups or Fargate profiles attached to the cluster, you must delete them first. For more information, see <a>DeleteNodegroup</a> and <a>DeleteFargateProfile</a>.</p>
		 * Delete clusters/{name}
		 * @param {string} name The name of the cluster to delete.
		 * @return {DeleteClusterResponse} Success
		 */
		DeleteCluster(name: string): Observable<DeleteClusterResponse> {
			return this.http.delete<DeleteClusterResponse>(this.baseUri + 'clusters/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * <p>Returns descriptive information about an Amazon EKS cluster.</p> <p>The API server endpoint and certificate authority data returned by this operation are required for <code>kubelet</code> and <code>kubectl</code> to communicate with your Kubernetes API server. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/create-kubeconfig.html">Create a kubeconfig for Amazon EKS</a>.</p> <note> <p>The API server endpoint and certificate authority data aren't available until the cluster reaches the <code>ACTIVE</code> state.</p> </note>
		 * Get clusters/{name}
		 * @param {string} name The name of the cluster to describe.
		 * @return {DescribeClusterResponse} Success
		 */
		DescribeCluster(name: string): Observable<DescribeClusterResponse> {
			return this.http.get<DescribeClusterResponse>(this.baseUri + 'clusters/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * <p>Deletes an Fargate profile.</p> <p>When you delete a Fargate profile, any pods running on Fargate that were created with the profile are deleted. If those pods match another Fargate profile, then they are scheduled on Fargate with that profile. If they no longer match any Fargate profiles, then they are not scheduled on Fargate and they may remain in a pending state.</p> <p>Only one Fargate profile in a cluster can be in the <code>DELETING</code> status at a time. You must wait for a Fargate profile to finish deleting before you can delete any other profiles in that cluster.</p>
		 * Delete clusters/{name}/fargate-profiles/{fargateProfileName}
		 * @param {string} name The name of the Amazon EKS cluster associated with the Fargate profile to delete.
		 * @param {string} fargateProfileName The name of the Fargate profile to delete.
		 * @return {DeleteFargateProfileResponse} Success
		 */
		DeleteFargateProfile(name: string, fargateProfileName: string): Observable<DeleteFargateProfileResponse> {
			return this.http.delete<DeleteFargateProfileResponse>(this.baseUri + 'clusters/' + (name == null ? '' : encodeURIComponent(name)) + '/fargate-profiles/' + (fargateProfileName == null ? '' : encodeURIComponent(fargateProfileName)), {});
		}

		/**
		 * Returns descriptive information about an Fargate profile.
		 * Get clusters/{name}/fargate-profiles/{fargateProfileName}
		 * @param {string} name The name of the Amazon EKS cluster associated with the Fargate profile.
		 * @param {string} fargateProfileName The name of the Fargate profile to describe.
		 * @return {DescribeFargateProfileResponse} Success
		 */
		DescribeFargateProfile(name: string, fargateProfileName: string): Observable<DescribeFargateProfileResponse> {
			return this.http.get<DescribeFargateProfileResponse>(this.baseUri + 'clusters/' + (name == null ? '' : encodeURIComponent(name)) + '/fargate-profiles/' + (fargateProfileName == null ? '' : encodeURIComponent(fargateProfileName)), {});
		}

		/**
		 * Deletes an Amazon EKS node group for a cluster.
		 * Delete clusters/{name}/node-groups/{nodegroupName}
		 * @param {string} name The name of the Amazon EKS cluster that is associated with your node group.
		 * @param {string} nodegroupName The name of the node group to delete.
		 * @return {DeleteNodegroupResponse} Success
		 */
		DeleteNodegroup(name: string, nodegroupName: string): Observable<DeleteNodegroupResponse> {
			return this.http.delete<DeleteNodegroupResponse>(this.baseUri + 'clusters/' + (name == null ? '' : encodeURIComponent(name)) + '/node-groups/' + (nodegroupName == null ? '' : encodeURIComponent(nodegroupName)), {});
		}

		/**
		 * Returns descriptive information about an Amazon EKS node group.
		 * Get clusters/{name}/node-groups/{nodegroupName}
		 * @param {string} name The name of the Amazon EKS cluster associated with the node group.
		 * @param {string} nodegroupName The name of the node group to describe.
		 * @return {DescribeNodegroupResponse} Success
		 */
		DescribeNodegroup(name: string, nodegroupName: string): Observable<DescribeNodegroupResponse> {
			return this.http.get<DescribeNodegroupResponse>(this.baseUri + 'clusters/' + (name == null ? '' : encodeURIComponent(name)) + '/node-groups/' + (nodegroupName == null ? '' : encodeURIComponent(nodegroupName)), {});
		}

		/**
		 * Deregisters a connected cluster to remove it from the Amazon EKS control plane.
		 * Delete cluster-registrations/{name}
		 * @param {string} name The name of the connected cluster to deregister.
		 * @return {DeregisterClusterResponse} Success
		 */
		DeregisterCluster(name: string): Observable<DeregisterClusterResponse> {
			return this.http.delete<DeregisterClusterResponse>(this.baseUri + 'cluster-registrations/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Returns configuration options.
		 * Get addons/configuration-schemas#addonName&addonVersion
		 * @param {string} addonName The name of the add-on. The name must match one of the names that <a href="https://docs.aws.amazon.com/eks/latest/APIReference/API_DescribeAddonVersions.html"> <code>DescribeAddonVersions</code> </a> returns.
		 * @param {string} addonVersion The version of the add-on. The version must match one of the versions returned by <a href="https://docs.aws.amazon.com/eks/latest/APIReference/API_DescribeAddonVersions.html"> <code>DescribeAddonVersions</code> </a>.
		 * @return {DescribeAddonConfigurationResponse} Success
		 */
		DescribeAddonConfiguration(addonName: string, addonVersion: string): Observable<DescribeAddonConfigurationResponse> {
			return this.http.get<DescribeAddonConfigurationResponse>(this.baseUri + 'addons/configuration-schemas#addonName&addonVersion?addonName=' + (addonName == null ? '' : encodeURIComponent(addonName)) + '&addonVersion=' + (addonVersion == null ? '' : encodeURIComponent(addonVersion)), {});
		}

		/**
		 * Describes the versions for an add-on. Information such as the Kubernetes versions that you can use the add-on with, the <code>owner</code>, <code>publisher</code>, and the <code>type</code> of the add-on are returned.
		 * Get addons/supported-versions
		 * @param {string} kubernetesVersion The Kubernetes versions that you can use the add-on with.
		 * @param {number} maxResults The maximum number of results to return.
		 * @param {string} nextToken <p>The <code>nextToken</code> value returned from a previous paginated <code>DescribeAddonVersionsRequest</code> where <code>maxResults</code> was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the <code>nextToken</code> value.</p> <note> <p>This token should be treated as an opaque identifier that is used only to retrieve the next items in a list and not for other programmatic purposes.</p> </note>
		 * @param {string} addonName The name of the add-on. The name must match one of the names returned by <a href="https://docs.aws.amazon.com/eks/latest/APIReference/API_ListAddons.html"> <code>ListAddons</code> </a>.
		 * @param {Array<string>} types The type of the add-on. For valid <code>types</code>, don't specify a value for this property.
		 * @param {Array<string>} publishers The publisher of the add-on. For valid <code>publishers</code>, don't specify a value for this property.
		 * @param {Array<string>} owners The owner of the add-on. For valid <code>owners</code>, don't specify a value for this property.
		 * @return {DescribeAddonVersionsResponse} Success
		 */
		DescribeAddonVersions(kubernetesVersion: string | null | undefined, maxResults: number | null | undefined, nextToken: string | null | undefined, addonName: string | null | undefined, types: Array<string> | null | undefined, publishers: Array<string> | null | undefined, owners: Array<string> | null | undefined): Observable<DescribeAddonVersionsResponse> {
			return this.http.get<DescribeAddonVersionsResponse>(this.baseUri + 'addons/supported-versions?kubernetesVersion=' + (kubernetesVersion == null ? '' : encodeURIComponent(kubernetesVersion)) + '&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&addonName=' + (addonName == null ? '' : encodeURIComponent(addonName)) + '&' + types?.map(z => `types=${encodeURIComponent(z)}`).join('&') + '&' + publishers?.map(z => `publishers=${encodeURIComponent(z)}`).join('&') + '&' + owners?.map(z => `owners=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Returns descriptive information about an identity provider configuration.
		 * Post clusters/{name}/identity-provider-configs/describe
		 * @param {string} name The cluster name that the identity provider configuration is associated to.
		 * @return {DescribeIdentityProviderConfigResponse} Success
		 */
		DescribeIdentityProviderConfig(name: string, requestBody: DescribeIdentityProviderConfigPostBody): Observable<DescribeIdentityProviderConfigResponse> {
			return this.http.post<DescribeIdentityProviderConfigResponse>(this.baseUri + 'clusters/' + (name == null ? '' : encodeURIComponent(name)) + '/identity-provider-configs/describe', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns descriptive information about an update against your Amazon EKS cluster or associated managed node group or Amazon EKS add-on.</p> <p>When the status of the update is <code>Succeeded</code>, the update is complete. If an update fails, the status is <code>Failed</code>, and an error detail explains the reason for the failure.</p>
		 * Get clusters/{name}/updates/{updateId}
		 * @param {string} name The name of the Amazon EKS cluster associated with the update.
		 * @param {string} updateId The ID of the update to describe.
		 * @param {string} nodegroupName The name of the Amazon EKS node group associated with the update. This parameter is required if the update is a node group update.
		 * @param {string} addonName The name of the add-on. The name must match one of the names returned by <a href="https://docs.aws.amazon.com/eks/latest/APIReference/API_ListAddons.html"> <code>ListAddons</code> </a>. This parameter is required if the update is an add-on update.
		 * @return {DescribeUpdateResponse} Success
		 */
		DescribeUpdate(name: string, updateId: string, nodegroupName: string | null | undefined, addonName: string | null | undefined): Observable<DescribeUpdateResponse> {
			return this.http.get<DescribeUpdateResponse>(this.baseUri + 'clusters/' + (name == null ? '' : encodeURIComponent(name)) + '/updates/' + (updateId == null ? '' : encodeURIComponent(updateId)) + '&nodegroupName=' + (nodegroupName == null ? '' : encodeURIComponent(nodegroupName)) + '&addonName=' + (addonName == null ? '' : encodeURIComponent(addonName)), {});
		}

		/**
		 * Disassociates an identity provider configuration from a cluster. If you disassociate an identity provider from your cluster, users included in the provider can no longer access the cluster. However, you can still access the cluster with Amazon Web Services IAM users.
		 * Post clusters/{name}/identity-provider-configs/disassociate
		 * @param {string} name The name of the cluster to disassociate an identity provider from.
		 * @return {DisassociateIdentityProviderConfigResponse} Success
		 */
		DisassociateIdentityProviderConfig(name: string, requestBody: DisassociateIdentityProviderConfigPostBody): Observable<DisassociateIdentityProviderConfigResponse> {
			return this.http.post<DisassociateIdentityProviderConfigResponse>(this.baseUri + 'clusters/' + (name == null ? '' : encodeURIComponent(name)) + '/identity-provider-configs/disassociate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * A list of identity provider configurations.
		 * Get clusters/{name}/identity-provider-configs
		 * @param {string} name The cluster name that you want to list identity provider configurations for.
		 * @param {number} maxResults The maximum number of identity provider configurations returned by <code>ListIdentityProviderConfigs</code> in paginated output. When you use this parameter, <code>ListIdentityProviderConfigs</code> returns only <code>maxResults</code> results in a single page along with a <code>nextToken</code> response element. You can see the remaining results of the initial request by sending another <code>ListIdentityProviderConfigs</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 100. If you don't use this parameter, <code>ListIdentityProviderConfigs</code> returns up to 100 results and a <code>nextToken</code> value, if applicable.
		 * @param {string} nextToken The <code>nextToken</code> value returned from a previous paginated <code>IdentityProviderConfigsRequest</code> where <code>maxResults</code> was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the <code>nextToken</code> value.
		 * @return {ListIdentityProviderConfigsResponse} Success
		 */
		ListIdentityProviderConfigs(name: string, maxResults: number | null | undefined, nextToken: string | null | undefined): Observable<ListIdentityProviderConfigsResponse> {
			return this.http.get<ListIdentityProviderConfigsResponse>(this.baseUri + 'clusters/' + (name == null ? '' : encodeURIComponent(name)) + '/identity-provider-configs&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
		}

		/**
		 * List the tags for an Amazon EKS resource.
		 * Get tags/{resourceArn}
		 * @param {string} resourceArn The Amazon Resource Name (ARN) that identifies the resource for which to list the tags. Currently, the supported resources are Amazon EKS clusters and managed node groups.
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(resourceArn: string): Observable<ListTagsForResourceResponse> {
			return this.http.get<ListTagsForResourceResponse>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), {});
		}

		/**
		 * Associates the specified tags to a resource with the specified <code>resourceArn</code>. If existing tags on a resource are not specified in the request parameters, they are not changed. When a resource is deleted, the tags associated with that resource are deleted as well. Tags that you create for Amazon EKS resources do not propagate to any other resources associated with the cluster. For example, if you tag a cluster with this operation, that tag does not automatically propagate to the subnets and nodes associated with the cluster.
		 * Post tags/{resourceArn}
		 * @param {string} resourceArn The Amazon Resource Name (ARN) of the resource to which to add tags. Currently, the supported resources are Amazon EKS clusters and managed node groups.
		 * @return {TagResourceResponse} Success
		 */
		TagResource(resourceArn: string, requestBody: TagResourcePostBody): Observable<TagResourceResponse> {
			return this.http.post<TagResourceResponse>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the updates associated with an Amazon EKS cluster or managed node group in your Amazon Web Services account, in the specified Region.
		 * Get clusters/{name}/updates
		 * @param {string} name The name of the Amazon EKS cluster to list updates for.
		 * @param {string} nodegroupName The name of the Amazon EKS managed node group to list updates for.
		 * @param {string} addonName The names of the installed add-ons that have available updates.
		 * @param {string} nextToken The <code>nextToken</code> value returned from a previous paginated <code>ListUpdates</code> request where <code>maxResults</code> was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the <code>nextToken</code> value.
		 * @param {number} maxResults The maximum number of update results returned by <code>ListUpdates</code> in paginated output. When you use this parameter, <code>ListUpdates</code> returns only <code>maxResults</code> results in a single page along with a <code>nextToken</code> response element. You can see the remaining results of the initial request by sending another <code>ListUpdates</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 100. If you don't use this parameter, <code>ListUpdates</code> returns up to 100 results and a <code>nextToken</code> value if applicable.
		 * @return {ListUpdatesResponse} Success
		 */
		ListUpdates(name: string, nodegroupName: string | null | undefined, addonName: string | null | undefined, nextToken: string | null | undefined, maxResults: number | null | undefined): Observable<ListUpdatesResponse> {
			return this.http.get<ListUpdatesResponse>(this.baseUri + 'clusters/' + (name == null ? '' : encodeURIComponent(name)) + '/updates&nodegroupName=' + (nodegroupName == null ? '' : encodeURIComponent(nodegroupName)) + '&addonName=' + (addonName == null ? '' : encodeURIComponent(addonName)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, {});
		}

		/**
		 * <p>Updates an Amazon EKS cluster to the specified Kubernetes version. Your cluster continues to function during the update. The response output includes an update ID that you can use to track the status of your cluster update with the <a>DescribeUpdate</a> API operation.</p> <p>Cluster updates are asynchronous, and they should finish within a few minutes. During an update, the cluster status moves to <code>UPDATING</code> (this status transition is eventually consistent). When the update is complete (either <code>Failed</code> or <code>Successful</code>), the cluster status moves to <code>Active</code>.</p> <p>If your cluster has managed node groups attached to it, all of your node groups’ Kubernetes versions must match the cluster’s Kubernetes version in order to update the cluster to a new Kubernetes version.</p>
		 * Post clusters/{name}/updates
		 * @param {string} name The name of the Amazon EKS cluster to update.
		 * @return {UpdateClusterVersionResponse} Success
		 */
		UpdateClusterVersion(name: string, requestBody: UpdateClusterVersionPostBody): Observable<UpdateClusterVersionResponse> {
			return this.http.post<UpdateClusterVersionResponse>(this.baseUri + 'clusters/' + (name == null ? '' : encodeURIComponent(name)) + '/updates', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Connects a Kubernetes cluster to the Amazon EKS control plane. </p> <p>Any Kubernetes cluster can be connected to the Amazon EKS control plane to view current information about the cluster and its nodes. </p> <p>Cluster connection requires two steps. First, send a <code> <a>RegisterClusterRequest</a> </code> to add it to the Amazon EKS control plane.</p> <p>Second, a <a href="https://amazon-eks.s3.us-west-2.amazonaws.com/eks-connector/manifests/eks-connector/latest/eks-connector.yaml">Manifest</a> containing the <code>activationID</code> and <code>activationCode</code> must be applied to the Kubernetes cluster through it's native provider to provide visibility.</p> <p>After the Manifest is updated and applied, then the connected cluster is visible to the Amazon EKS control plane. If the Manifest is not applied within three days, then the connected cluster will no longer be visible and must be deregistered. See <a>DeregisterCluster</a>.</p>
		 * Post cluster-registrations
		 * @return {RegisterClusterResponse} Success
		 */
		RegisterCluster(requestBody: RegisterClusterPostBody): Observable<RegisterClusterResponse> {
			return this.http.post<RegisterClusterResponse>(this.baseUri + 'cluster-registrations', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes specified tags from a resource.
		 * Delete tags/{resourceArn}#tagKeys
		 * @param {string} resourceArn The Amazon Resource Name (ARN) of the resource from which to delete tags. Currently, the supported resources are Amazon EKS clusters and managed node groups.
		 * @param {Array<string>} tagKeys The keys of the tags to be removed.
		 * @return {UntagResourceResponse} Success
		 */
		UntagResource(resourceArn: string, tagKeys: Array<string>): Observable<UntagResourceResponse> {
			return this.http.delete<UntagResourceResponse>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)) + '#tagKeys&' + tagKeys.map(z => `tagKeys=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Updates an Amazon EKS add-on.
		 * Post clusters/{name}/addons/{addonName}/update
		 * @param {string} name The name of the cluster.
		 * @param {string} addonName The name of the add-on. The name must match one of the names returned by <a href="https://docs.aws.amazon.com/eks/latest/APIReference/API_ListAddons.html"> <code>ListAddons</code> </a>.
		 * @return {UpdateAddonResponse} Success
		 */
		UpdateAddon(name: string, addonName: string, requestBody: UpdateAddonPostBody): Observable<UpdateAddonResponse> {
			return this.http.post<UpdateAddonResponse>(this.baseUri + 'clusters/' + (name == null ? '' : encodeURIComponent(name)) + '/addons/' + (addonName == null ? '' : encodeURIComponent(addonName)) + '/update', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Updates an Amazon EKS cluster configuration. Your cluster continues to function during the update. The response output includes an update ID that you can use to track the status of your cluster update with the <a>DescribeUpdate</a> API operation.</p> <p>You can use this API operation to enable or disable exporting the Kubernetes control plane logs for your cluster to CloudWatch Logs. By default, cluster control plane logs aren't exported to CloudWatch Logs. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/control-plane-logs.html">Amazon EKS Cluster Control Plane Logs</a> in the <i> <i>Amazon EKS User Guide</i> </i>.</p> <note> <p>CloudWatch Logs ingestion, archive storage, and data scanning rates apply to exported control plane logs. For more information, see <a href="http://aws.amazon.com/cloudwatch/pricing/">CloudWatch Pricing</a>.</p> </note> <p>You can also use this API operation to enable or disable public and private access to your cluster's Kubernetes API server endpoint. By default, public access is enabled, and private access is disabled. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/cluster-endpoint.html">Amazon EKS cluster endpoint access control</a> in the <i> <i>Amazon EKS User Guide</i> </i>. </p> <important> <p>You can't update the subnets or security group IDs for an existing cluster.</p> </important> <p>Cluster updates are asynchronous, and they should finish within a few minutes. During an update, the cluster status moves to <code>UPDATING</code> (this status transition is eventually consistent). When the update is complete (either <code>Failed</code> or <code>Successful</code>), the cluster status moves to <code>Active</code>.</p>
		 * Post clusters/{name}/update-config
		 * @param {string} name The name of the Amazon EKS cluster to update.
		 * @return {UpdateClusterConfigResponse} Success
		 */
		UpdateClusterConfig(name: string, requestBody: UpdateClusterConfigPostBody): Observable<UpdateClusterConfigResponse> {
			return this.http.post<UpdateClusterConfigResponse>(this.baseUri + 'clusters/' + (name == null ? '' : encodeURIComponent(name)) + '/update-config', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates an Amazon EKS managed node group configuration. Your node group continues to function during the update. The response output includes an update ID that you can use to track the status of your node group update with the <a>DescribeUpdate</a> API operation. Currently you can update the Kubernetes labels for a node group or the scaling configuration.
		 * Post clusters/{name}/node-groups/{nodegroupName}/update-config
		 * @param {string} name The name of the Amazon EKS cluster that the managed node group resides in.
		 * @param {string} nodegroupName The name of the managed node group to update.
		 * @return {UpdateNodegroupConfigResponse} Success
		 */
		UpdateNodegroupConfig(name: string, nodegroupName: string, requestBody: UpdateNodegroupConfigPostBody): Observable<UpdateNodegroupConfigResponse> {
			return this.http.post<UpdateNodegroupConfigResponse>(this.baseUri + 'clusters/' + (name == null ? '' : encodeURIComponent(name)) + '/node-groups/' + (nodegroupName == null ? '' : encodeURIComponent(nodegroupName)) + '/update-config', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Updates the Kubernetes version or AMI version of an Amazon EKS managed node group.</p> <p>You can update a node group using a launch template only if the node group was originally deployed with a launch template. If you need to update a custom AMI in a node group that was deployed with a launch template, then update your custom AMI, specify the new ID in a new version of the launch template, and then update the node group to the new version of the launch template.</p> <p>If you update without a launch template, then you can update to the latest available AMI version of a node group's current Kubernetes version by not specifying a Kubernetes version in the request. You can update to the latest AMI version of your cluster's current Kubernetes version by specifying your cluster's Kubernetes version in the request. For information about Linux versions, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/eks-linux-ami-versions.html">Amazon EKS optimized Amazon Linux AMI versions</a> in the <i>Amazon EKS User Guide</i>. For information about Windows versions, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/eks-ami-versions-windows.html">Amazon EKS optimized Windows AMI versions</a> in the <i>Amazon EKS User Guide</i>. </p> <p>You cannot roll back a node group to an earlier Kubernetes version or AMI version.</p> <p>When a node in a managed node group is terminated due to a scaling action or update, the pods in that node are drained first. Amazon EKS attempts to drain the nodes gracefully and will fail if it is unable to do so. You can <code>force</code> the update if Amazon EKS is unable to drain the nodes as a result of a pod disruption budget issue.</p>
		 * Post clusters/{name}/node-groups/{nodegroupName}/update-version
		 * @param {string} name The name of the Amazon EKS cluster that is associated with the managed node group to update.
		 * @param {string} nodegroupName The name of the managed node group to update.
		 * @return {UpdateNodegroupVersionResponse} Success
		 */
		UpdateNodegroupVersion(name: string, nodegroupName: string, requestBody: UpdateNodegroupVersionPostBody): Observable<UpdateNodegroupVersionResponse> {
			return this.http.post<UpdateNodegroupVersionResponse>(this.baseUri + 'clusters/' + (name == null ? '' : encodeURIComponent(name)) + '/node-groups/' + (nodegroupName == null ? '' : encodeURIComponent(nodegroupName)) + '/update-version', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export interface AssociateEncryptionConfigPostBody {

		/**
		 * The configuration you are using for encryption.
		 * Required
		 * Maximum items: 1
		 */
		encryptionConfig: Array<EncryptionConfig>;

		/** The client request token you are using with the encryption configuration. */
		clientRequestToken?: string | null;
	}
	export interface AssociateEncryptionConfigPostBodyFormProperties {

		/** The client request token you are using with the encryption configuration. */
		clientRequestToken: FormControl<string | null | undefined>,
	}
	export function CreateAssociateEncryptionConfigPostBodyFormGroup() {
		return new FormGroup<AssociateEncryptionConfigPostBodyFormProperties>({
			clientRequestToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AssociateIdentityProviderConfigPostBody {

		/**
		 * An object representing an OpenID Connect (OIDC) configuration. Before associating an OIDC identity provider to your cluster, review the considerations in <a href="https://docs.aws.amazon.com/eks/latest/userguide/authenticate-oidc-identity-provider.html">Authenticating users for your cluster from an OpenID Connect identity provider</a> in the <i>Amazon EKS User Guide</i>.
		 * Required
		 */
		oidc: AssociateIdentityProviderConfigPostBodyOidc;

		/** The metadata to apply to the configuration to assist with categorization and organization. Each tag consists of a key and an optional value. You define both. */
		tags?: {[id: string]: string };

		/** Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. */
		clientRequestToken?: string | null;
	}
	export interface AssociateIdentityProviderConfigPostBodyFormProperties {

		/** The metadata to apply to the configuration to assist with categorization and organization. Each tag consists of a key and an optional value. You define both. */
		tags: FormControl<{[id: string]: string } | null | undefined>,

		/** Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. */
		clientRequestToken: FormControl<string | null | undefined>,
	}
	export function CreateAssociateIdentityProviderConfigPostBodyFormGroup() {
		return new FormGroup<AssociateIdentityProviderConfigPostBodyFormProperties>({
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			clientRequestToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AssociateIdentityProviderConfigPostBodyOidc {
		identityProviderConfigName?: string;
		issuerUrl?: string;
		clientId?: string;
		usernameClaim?: string;
		usernamePrefix?: string;
		groupsClaim?: string;
		groupsPrefix?: string;
		requiredClaims?: RequiredClaimsMap;
	}
	export interface AssociateIdentityProviderConfigPostBodyOidcFormProperties {
		identityProviderConfigName: FormControl<string | null | undefined>,
		issuerUrl: FormControl<string | null | undefined>,
		clientId: FormControl<string | null | undefined>,
		usernameClaim: FormControl<string | null | undefined>,
		usernamePrefix: FormControl<string | null | undefined>,
		groupsClaim: FormControl<string | null | undefined>,
		groupsPrefix: FormControl<string | null | undefined>,
	}
	export function CreateAssociateIdentityProviderConfigPostBodyOidcFormGroup() {
		return new FormGroup<AssociateIdentityProviderConfigPostBodyOidcFormProperties>({
			identityProviderConfigName: new FormControl<string | null | undefined>(undefined),
			issuerUrl: new FormControl<string | null | undefined>(undefined),
			clientId: new FormControl<string | null | undefined>(undefined),
			usernameClaim: new FormControl<string | null | undefined>(undefined),
			usernamePrefix: new FormControl<string | null | undefined>(undefined),
			groupsClaim: new FormControl<string | null | undefined>(undefined),
			groupsPrefix: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateAddonPostBody {

		/**
		 * The name of the add-on. The name must match one of the names that <a href="https://docs.aws.amazon.com/eks/latest/APIReference/API_DescribeAddonVersions.html"> <code>DescribeAddonVersions</code> </a> returns.
		 * Required
		 */
		addonName: string;

		/** The version of the add-on. The version must match one of the versions returned by <a href="https://docs.aws.amazon.com/eks/latest/APIReference/API_DescribeAddonVersions.html"> <code>DescribeAddonVersions</code> </a>. */
		addonVersion?: string | null;

		/**
		 * <p>The Amazon Resource Name (ARN) of an existing IAM role to bind to the add-on's service account. The role must be assigned the IAM permissions required by the add-on. If you don't specify an existing IAM role, then the add-on uses the permissions assigned to the node IAM role. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/create-node-role.html">Amazon EKS node IAM role</a> in the <i>Amazon EKS User Guide</i>.</p> <note> <p>To specify an existing IAM role, you must have an IAM OpenID Connect (OIDC) provider created for your cluster. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/enable-iam-roles-for-service-accounts.html">Enabling IAM roles for service accounts on your cluster</a> in the <i>Amazon EKS User Guide</i>.</p> </note>
		 * Max length: 255
		 * Min length: 1
		 */
		serviceAccountRoleArn?: string | null;

		/** <p>How to resolve field value conflicts for an Amazon EKS add-on. Conflicts are handled based on the value you choose:</p> <ul> <li> <p> <b>None</b> – If the self-managed version of the add-on is installed on your cluster, Amazon EKS doesn't change the value. Creation of the add-on might fail.</p> </li> <li> <p> <b>Overwrite</b> – If the self-managed version of the add-on is installed on your cluster and the Amazon EKS default value is different than the existing value, Amazon EKS changes the value to the Amazon EKS default value.</p> </li> <li> <p> <b>Preserve</b> – Not supported. You can set this value when updating an add-on though. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/APIReference/API_UpdateAddon.html">UpdateAddon</a>.</p> </li> </ul> <p>If you don't currently have the self-managed version of the add-on installed on your cluster, the Amazon EKS add-on is installed. Amazon EKS sets all values to default values, regardless of the option that you specify.</p> */
		resolveConflicts?: ResolveConflicts | null;

		/** A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. */
		clientRequestToken?: string | null;

		/** The metadata to apply to the cluster to assist with categorization and organization. Each tag consists of a key and an optional value. You define both. */
		tags?: {[id: string]: string };

		/** The set of configuration values for the add-on that's created. The values that you provide are validated against the schema in <a href="https://docs.aws.amazon.com/eks/latest/APIReference/API_DescribeAddonConfiguration.html"> <code>DescribeAddonConfiguration</code> </a>. */
		configurationValues?: string | null;
	}
	export interface CreateAddonPostBodyFormProperties {

		/**
		 * The name of the add-on. The name must match one of the names that <a href="https://docs.aws.amazon.com/eks/latest/APIReference/API_DescribeAddonVersions.html"> <code>DescribeAddonVersions</code> </a> returns.
		 * Required
		 */
		addonName: FormControl<string | null | undefined>,

		/** The version of the add-on. The version must match one of the versions returned by <a href="https://docs.aws.amazon.com/eks/latest/APIReference/API_DescribeAddonVersions.html"> <code>DescribeAddonVersions</code> </a>. */
		addonVersion: FormControl<string | null | undefined>,

		/**
		 * <p>The Amazon Resource Name (ARN) of an existing IAM role to bind to the add-on's service account. The role must be assigned the IAM permissions required by the add-on. If you don't specify an existing IAM role, then the add-on uses the permissions assigned to the node IAM role. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/create-node-role.html">Amazon EKS node IAM role</a> in the <i>Amazon EKS User Guide</i>.</p> <note> <p>To specify an existing IAM role, you must have an IAM OpenID Connect (OIDC) provider created for your cluster. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/enable-iam-roles-for-service-accounts.html">Enabling IAM roles for service accounts on your cluster</a> in the <i>Amazon EKS User Guide</i>.</p> </note>
		 * Max length: 255
		 * Min length: 1
		 */
		serviceAccountRoleArn: FormControl<string | null | undefined>,

		/** <p>How to resolve field value conflicts for an Amazon EKS add-on. Conflicts are handled based on the value you choose:</p> <ul> <li> <p> <b>None</b> – If the self-managed version of the add-on is installed on your cluster, Amazon EKS doesn't change the value. Creation of the add-on might fail.</p> </li> <li> <p> <b>Overwrite</b> – If the self-managed version of the add-on is installed on your cluster and the Amazon EKS default value is different than the existing value, Amazon EKS changes the value to the Amazon EKS default value.</p> </li> <li> <p> <b>Preserve</b> – Not supported. You can set this value when updating an add-on though. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/APIReference/API_UpdateAddon.html">UpdateAddon</a>.</p> </li> </ul> <p>If you don't currently have the self-managed version of the add-on installed on your cluster, the Amazon EKS add-on is installed. Amazon EKS sets all values to default values, regardless of the option that you specify.</p> */
		resolveConflicts: FormControl<ResolveConflicts | null | undefined>,

		/** A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. */
		clientRequestToken: FormControl<string | null | undefined>,

		/** The metadata to apply to the cluster to assist with categorization and organization. Each tag consists of a key and an optional value. You define both. */
		tags: FormControl<{[id: string]: string } | null | undefined>,

		/** The set of configuration values for the add-on that's created. The values that you provide are validated against the schema in <a href="https://docs.aws.amazon.com/eks/latest/APIReference/API_DescribeAddonConfiguration.html"> <code>DescribeAddonConfiguration</code> </a>. */
		configurationValues: FormControl<string | null | undefined>,
	}
	export function CreateCreateAddonPostBodyFormGroup() {
		return new FormGroup<CreateAddonPostBodyFormProperties>({
			addonName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			addonVersion: new FormControl<string | null | undefined>(undefined),
			serviceAccountRoleArn: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			resolveConflicts: new FormControl<ResolveConflicts | null | undefined>(undefined),
			clientRequestToken: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			configurationValues: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateClusterPostBody {

		/**
		 * The unique name to give to your cluster.
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		name: string;

		/** <p>The desired Kubernetes version for your cluster. If you don't specify a value here, the default version available in Amazon EKS is used.</p> <note> <p>The default version might not be the latest version available.</p> </note> */
		version?: string | null;

		/**
		 * The Amazon Resource Name (ARN) of the IAM role that provides permissions for the Kubernetes control plane to make calls to Amazon Web Services API operations on your behalf. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/service_IAM_role.html">Amazon EKS Service IAM Role</a> in the <i> <i>Amazon EKS User Guide</i> </i>.
		 * Required
		 */
		roleArn: string;

		/**
		 * An object representing the VPC configuration to use for an Amazon EKS cluster.
		 * Required
		 */
		resourcesVpcConfig: CreateClusterPostBodyResourcesVpcConfig;

		/** The Kubernetes network configuration for the cluster. */
		kubernetesNetworkConfig?: CreateClusterPostBodyKubernetesNetworkConfig;

		/** An object representing the logging configuration for resources in your cluster. */
		logging?: CreateClusterPostBodyLogging;

		/** Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. */
		clientRequestToken?: string | null;

		/** The metadata to apply to the cluster to assist with categorization and organization. Each tag consists of a key and an optional value. You define both. */
		tags?: {[id: string]: string };

		/**
		 * The encryption configuration for the cluster.
		 * Maximum items: 1
		 */
		encryptionConfig?: Array<EncryptionConfig>;

		/** The configuration of your local Amazon EKS cluster on an Amazon Web Services Outpost. Before creating a cluster on an Outpost, review <a href="https://docs.aws.amazon.com/eks/latest/userguide/eks-outposts-local-cluster-create.html">Creating a local cluster on an Outpost</a> in the <i>Amazon EKS User Guide</i>. This API isn't available for Amazon EKS clusters on the Amazon Web Services cloud. */
		outpostConfig?: CreateClusterPostBodyOutpostConfig;
	}
	export interface CreateClusterPostBodyFormProperties {

		/**
		 * The unique name to give to your cluster.
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/** <p>The desired Kubernetes version for your cluster. If you don't specify a value here, the default version available in Amazon EKS is used.</p> <note> <p>The default version might not be the latest version available.</p> </note> */
		version: FormControl<string | null | undefined>,

		/**
		 * The Amazon Resource Name (ARN) of the IAM role that provides permissions for the Kubernetes control plane to make calls to Amazon Web Services API operations on your behalf. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/service_IAM_role.html">Amazon EKS Service IAM Role</a> in the <i> <i>Amazon EKS User Guide</i> </i>.
		 * Required
		 */
		roleArn: FormControl<string | null | undefined>,

		/** Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. */
		clientRequestToken: FormControl<string | null | undefined>,

		/** The metadata to apply to the cluster to assist with categorization and organization. Each tag consists of a key and an optional value. You define both. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateClusterPostBodyFormGroup() {
		return new FormGroup<CreateClusterPostBodyFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^[0-9A-Za-z][A-Za-z0-9\-_]*')]),
			version: new FormControl<string | null | undefined>(undefined),
			roleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			clientRequestToken: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateClusterPostBodyResourcesVpcConfig {
		subnetIds?: Array<string>;
		securityGroupIds?: Array<string>;
		endpointPublicAccess?: boolean | null;
		endpointPrivateAccess?: boolean | null;
		publicAccessCidrs?: Array<string>;
	}
	export interface CreateClusterPostBodyResourcesVpcConfigFormProperties {
		endpointPublicAccess: FormControl<boolean | null | undefined>,
		endpointPrivateAccess: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateClusterPostBodyResourcesVpcConfigFormGroup() {
		return new FormGroup<CreateClusterPostBodyResourcesVpcConfigFormProperties>({
			endpointPublicAccess: new FormControl<boolean | null | undefined>(undefined),
			endpointPrivateAccess: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface CreateClusterPostBodyKubernetesNetworkConfig {
		serviceIpv4Cidr?: string;
		ipFamily?: IpFamily;
	}
	export interface CreateClusterPostBodyKubernetesNetworkConfigFormProperties {
		serviceIpv4Cidr: FormControl<string | null | undefined>,
		ipFamily: FormControl<IpFamily | null | undefined>,
	}
	export function CreateCreateClusterPostBodyKubernetesNetworkConfigFormGroup() {
		return new FormGroup<CreateClusterPostBodyKubernetesNetworkConfigFormProperties>({
			serviceIpv4Cidr: new FormControl<string | null | undefined>(undefined),
			ipFamily: new FormControl<IpFamily | null | undefined>(undefined),
		});

	}

	export interface CreateClusterPostBodyLogging {
		clusterLogging?: Array<LogSetup>;
	}
	export interface CreateClusterPostBodyLoggingFormProperties {
	}
	export function CreateCreateClusterPostBodyLoggingFormGroup() {
		return new FormGroup<CreateClusterPostBodyLoggingFormProperties>({
		});

	}

	export interface CreateClusterPostBodyOutpostConfig {
		outpostArns?: Array<string>;
		controlPlaneInstanceType?: string;
		controlPlanePlacement?: ControlPlanePlacementRequest;
	}
	export interface CreateClusterPostBodyOutpostConfigFormProperties {
		controlPlaneInstanceType: FormControl<string | null | undefined>,
	}
	export function CreateCreateClusterPostBodyOutpostConfigFormGroup() {
		return new FormGroup<CreateClusterPostBodyOutpostConfigFormProperties>({
			controlPlaneInstanceType: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateFargateProfilePostBody {

		/**
		 * The name of the Fargate profile.
		 * Required
		 */
		fargateProfileName: string;

		/**
		 * The Amazon Resource Name (ARN) of the pod execution role to use for pods that match the selectors in the Fargate profile. The pod execution role allows Fargate infrastructure to register with your cluster as a node, and it provides read access to Amazon ECR image repositories. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/pod-execution-role.html">Pod Execution Role</a> in the <i>Amazon EKS User Guide</i>.
		 * Required
		 */
		podExecutionRoleArn: string;

		/** The IDs of subnets to launch your pods into. At this time, pods running on Fargate are not assigned public IP addresses, so only private subnets (with no direct route to an Internet Gateway) are accepted for this parameter. */
		subnets?: Array<string>;

		/** The selectors to match for pods to use this Fargate profile. Each selector must have an associated namespace. Optionally, you can also specify labels for a namespace. You may specify up to five selectors in a Fargate profile. */
		selectors?: Array<FargateProfileSelector>;

		/** Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. */
		clientRequestToken?: string | null;

		/** The metadata to apply to the Fargate profile to assist with categorization and organization. Each tag consists of a key and an optional value. You define both. Fargate profile tags do not propagate to any other resources associated with the Fargate profile, such as the pods that are scheduled with it. */
		tags?: {[id: string]: string };
	}
	export interface CreateFargateProfilePostBodyFormProperties {

		/**
		 * The name of the Fargate profile.
		 * Required
		 */
		fargateProfileName: FormControl<string | null | undefined>,

		/**
		 * The Amazon Resource Name (ARN) of the pod execution role to use for pods that match the selectors in the Fargate profile. The pod execution role allows Fargate infrastructure to register with your cluster as a node, and it provides read access to Amazon ECR image repositories. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/pod-execution-role.html">Pod Execution Role</a> in the <i>Amazon EKS User Guide</i>.
		 * Required
		 */
		podExecutionRoleArn: FormControl<string | null | undefined>,

		/** Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. */
		clientRequestToken: FormControl<string | null | undefined>,

		/** The metadata to apply to the Fargate profile to assist with categorization and organization. Each tag consists of a key and an optional value. You define both. Fargate profile tags do not propagate to any other resources associated with the Fargate profile, such as the pods that are scheduled with it. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateFargateProfilePostBodyFormGroup() {
		return new FormGroup<CreateFargateProfilePostBodyFormProperties>({
			fargateProfileName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			podExecutionRoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			clientRequestToken: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateNodegroupPostBody {

		/**
		 * The unique name to give your node group.
		 * Required
		 */
		nodegroupName: string;

		/** An object representing the scaling configuration details for the Auto Scaling group that is associated with your node group. When creating a node group, you must specify all or none of the properties. When updating a node group, you can specify any or none of the properties. */
		scalingConfig?: CreateNodegroupPostBodyScalingConfig;

		/** The root device disk size (in GiB) for your node group instances. The default disk size is 20 GiB for Linux and Bottlerocket. The default disk size is 50 GiB for Windows. If you specify <code>launchTemplate</code>, then don't specify <code>diskSize</code>, or the node group deployment will fail. For more information about using launch templates with Amazon EKS, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/launch-templates.html">Launch template support</a> in the <i>Amazon EKS User Guide</i>. */
		diskSize?: number | null;

		/**
		 * The subnets to use for the Auto Scaling group that is created for your node group. If you specify <code>launchTemplate</code>, then don't specify <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateNetworkInterface.html"> <code>SubnetId</code> </a> in your launch template, or the node group deployment will fail. For more information about using launch templates with Amazon EKS, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/launch-templates.html">Launch template support</a> in the <i>Amazon EKS User Guide</i>.
		 * Required
		 */
		subnets: Array<string>;

		/** Specify the instance types for a node group. If you specify a GPU instance type, make sure to also specify an applicable GPU AMI type with the <code>amiType</code> parameter. If you specify <code>launchTemplate</code>, then you can specify zero or one instance type in your launch template <i>or</i> you can specify 0-20 instance types for <code>instanceTypes</code>. If however, you specify an instance type in your launch template <i>and</i> specify any <code>instanceTypes</code>, the node group deployment will fail. If you don't specify an instance type in a launch template or for <code>instanceTypes</code>, then <code>t3.medium</code> is used, by default. If you specify <code>Spot</code> for <code>capacityType</code>, then we recommend specifying multiple values for <code>instanceTypes</code>. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/managed-node-groups.html#managed-node-group-capacity-types">Managed node group capacity types</a> and <a href="https://docs.aws.amazon.com/eks/latest/userguide/launch-templates.html">Launch template support</a> in the <i>Amazon EKS User Guide</i>. */
		instanceTypes?: Array<string>;

		/** The AMI type for your node group. If you specify <code>launchTemplate</code>, and your launch template uses a custom AMI, then don't specify <code>amiType</code>, or the node group deployment will fail. If your launch template uses a Windows custom AMI, then add <code>eks:kube-proxy-windows</code> to your Windows nodes <code>rolearn</code> in the <code>aws-auth</code> <code>ConfigMap</code>. For more information about using launch templates with Amazon EKS, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/launch-templates.html">Launch template support</a> in the <i>Amazon EKS User Guide</i>. */
		amiType?: AMITypes | null;

		/** An object representing the remote access configuration for the managed node group. */
		remoteAccess?: CreateNodegroupPostBodyRemoteAccess;

		/**
		 * The Amazon Resource Name (ARN) of the IAM role to associate with your node group. The Amazon EKS worker node <code>kubelet</code> daemon makes calls to Amazon Web Services APIs on your behalf. Nodes receive permissions for these API calls through an IAM instance profile and associated policies. Before you can launch nodes and register them into a cluster, you must create an IAM role for those nodes to use when they are launched. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/create-node-role.html">Amazon EKS node IAM role</a> in the <i> <i>Amazon EKS User Guide</i> </i>. If you specify <code>launchTemplate</code>, then don't specify <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_IamInstanceProfile.html"> <code>IamInstanceProfile</code> </a> in your launch template, or the node group deployment will fail. For more information about using launch templates with Amazon EKS, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/launch-templates.html">Launch template support</a> in the <i>Amazon EKS User Guide</i>.
		 * Required
		 */
		nodeRole: string;

		/** The Kubernetes labels to be applied to the nodes in the node group when they are created. */
		labels?: {[id: string]: string };

		/** The Kubernetes taints to be applied to the nodes in the node group. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/node-taints-managed-node-groups.html">Node taints on managed node groups</a>. */
		taints?: Array<Taint>;

		/** The metadata to apply to the node group to assist with categorization and organization. Each tag consists of a key and an optional value. You define both. Node group tags do not propagate to any other resources associated with the node group, such as the Amazon EC2 instances or subnets. */
		tags?: {[id: string]: string };

		/** Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. */
		clientRequestToken?: string | null;

		/** <p>An object representing a node group launch template specification. The launch template can't include <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateNetworkInterface.html"> <code>SubnetId</code> </a>, <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_IamInstanceProfile.html"> <code>IamInstanceProfile</code> </a>, <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RequestSpotInstances.html"> <code>RequestSpotInstances</code> </a>, <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_HibernationOptionsRequest.html"> <code>HibernationOptions</code> </a>, or <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_TerminateInstances.html"> <code>TerminateInstances</code> </a>, or the node group deployment or update will fail. For more information about launch templates, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateLaunchTemplate.html"> <code>CreateLaunchTemplate</code> </a> in the Amazon EC2 API Reference. For more information about using launch templates with Amazon EKS, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/launch-templates.html">Launch template support</a> in the <i>Amazon EKS User Guide</i>.</p> <p>You must specify either the launch template ID or the launch template name in the request, but not both.</p> */
		launchTemplate?: CreateNodegroupPostBodyLaunchTemplate;

		/** The node group update configuration. */
		updateConfig?: CreateNodegroupPostBodyUpdateConfig;

		/** The capacity type for your node group. */
		capacityType?: CapacityTypes | null;

		/** The Kubernetes version to use for your managed nodes. By default, the Kubernetes version of the cluster is used, and this is the only accepted specified value. If you specify <code>launchTemplate</code>, and your launch template uses a custom AMI, then don't specify <code>version</code>, or the node group deployment will fail. For more information about using launch templates with Amazon EKS, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/launch-templates.html">Launch template support</a> in the <i>Amazon EKS User Guide</i>. */
		version?: string | null;

		/** <p>The AMI version of the Amazon EKS optimized AMI to use with your node group. By default, the latest available AMI version for the node group's current Kubernetes version is used. For information about Linux versions, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/eks-linux-ami-versions.html">Amazon EKS optimized Amazon Linux AMI versions</a> in the <i>Amazon EKS User Guide</i>. Amazon EKS managed node groups support the November 2022 and later releases of the Windows AMIs. For information about Windows versions, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/eks-ami-versions-windows.html">Amazon EKS optimized Windows AMI versions</a> in the <i>Amazon EKS User Guide</i>.</p> <p>If you specify <code>launchTemplate</code>, and your launch template uses a custom AMI, then don't specify <code>releaseVersion</code>, or the node group deployment will fail. For more information about using launch templates with Amazon EKS, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/launch-templates.html">Launch template support</a> in the <i>Amazon EKS User Guide</i>.</p> */
		releaseVersion?: string | null;
	}
	export interface CreateNodegroupPostBodyFormProperties {

		/**
		 * The unique name to give your node group.
		 * Required
		 */
		nodegroupName: FormControl<string | null | undefined>,

		/** The root device disk size (in GiB) for your node group instances. The default disk size is 20 GiB for Linux and Bottlerocket. The default disk size is 50 GiB for Windows. If you specify <code>launchTemplate</code>, then don't specify <code>diskSize</code>, or the node group deployment will fail. For more information about using launch templates with Amazon EKS, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/launch-templates.html">Launch template support</a> in the <i>Amazon EKS User Guide</i>. */
		diskSize: FormControl<number | null | undefined>,

		/** The AMI type for your node group. If you specify <code>launchTemplate</code>, and your launch template uses a custom AMI, then don't specify <code>amiType</code>, or the node group deployment will fail. If your launch template uses a Windows custom AMI, then add <code>eks:kube-proxy-windows</code> to your Windows nodes <code>rolearn</code> in the <code>aws-auth</code> <code>ConfigMap</code>. For more information about using launch templates with Amazon EKS, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/launch-templates.html">Launch template support</a> in the <i>Amazon EKS User Guide</i>. */
		amiType: FormControl<AMITypes | null | undefined>,

		/**
		 * The Amazon Resource Name (ARN) of the IAM role to associate with your node group. The Amazon EKS worker node <code>kubelet</code> daemon makes calls to Amazon Web Services APIs on your behalf. Nodes receive permissions for these API calls through an IAM instance profile and associated policies. Before you can launch nodes and register them into a cluster, you must create an IAM role for those nodes to use when they are launched. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/create-node-role.html">Amazon EKS node IAM role</a> in the <i> <i>Amazon EKS User Guide</i> </i>. If you specify <code>launchTemplate</code>, then don't specify <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_IamInstanceProfile.html"> <code>IamInstanceProfile</code> </a> in your launch template, or the node group deployment will fail. For more information about using launch templates with Amazon EKS, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/launch-templates.html">Launch template support</a> in the <i>Amazon EKS User Guide</i>.
		 * Required
		 */
		nodeRole: FormControl<string | null | undefined>,

		/** The Kubernetes labels to be applied to the nodes in the node group when they are created. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** The metadata to apply to the node group to assist with categorization and organization. Each tag consists of a key and an optional value. You define both. Node group tags do not propagate to any other resources associated with the node group, such as the Amazon EC2 instances or subnets. */
		tags: FormControl<{[id: string]: string } | null | undefined>,

		/** Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. */
		clientRequestToken: FormControl<string | null | undefined>,

		/** The capacity type for your node group. */
		capacityType: FormControl<CapacityTypes | null | undefined>,

		/** The Kubernetes version to use for your managed nodes. By default, the Kubernetes version of the cluster is used, and this is the only accepted specified value. If you specify <code>launchTemplate</code>, and your launch template uses a custom AMI, then don't specify <code>version</code>, or the node group deployment will fail. For more information about using launch templates with Amazon EKS, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/launch-templates.html">Launch template support</a> in the <i>Amazon EKS User Guide</i>. */
		version: FormControl<string | null | undefined>,

		/** <p>The AMI version of the Amazon EKS optimized AMI to use with your node group. By default, the latest available AMI version for the node group's current Kubernetes version is used. For information about Linux versions, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/eks-linux-ami-versions.html">Amazon EKS optimized Amazon Linux AMI versions</a> in the <i>Amazon EKS User Guide</i>. Amazon EKS managed node groups support the November 2022 and later releases of the Windows AMIs. For information about Windows versions, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/eks-ami-versions-windows.html">Amazon EKS optimized Windows AMI versions</a> in the <i>Amazon EKS User Guide</i>.</p> <p>If you specify <code>launchTemplate</code>, and your launch template uses a custom AMI, then don't specify <code>releaseVersion</code>, or the node group deployment will fail. For more information about using launch templates with Amazon EKS, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/launch-templates.html">Launch template support</a> in the <i>Amazon EKS User Guide</i>.</p> */
		releaseVersion: FormControl<string | null | undefined>,
	}
	export function CreateCreateNodegroupPostBodyFormGroup() {
		return new FormGroup<CreateNodegroupPostBodyFormProperties>({
			nodegroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			diskSize: new FormControl<number | null | undefined>(undefined),
			amiType: new FormControl<AMITypes | null | undefined>(undefined),
			nodeRole: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			clientRequestToken: new FormControl<string | null | undefined>(undefined),
			capacityType: new FormControl<CapacityTypes | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
			releaseVersion: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateNodegroupPostBodyScalingConfig {
		minSize?: number | null;
		maxSize?: number | null;
		desiredSize?: number | null;
	}
	export interface CreateNodegroupPostBodyScalingConfigFormProperties {
		minSize: FormControl<number | null | undefined>,
		maxSize: FormControl<number | null | undefined>,
		desiredSize: FormControl<number | null | undefined>,
	}
	export function CreateCreateNodegroupPostBodyScalingConfigFormGroup() {
		return new FormGroup<CreateNodegroupPostBodyScalingConfigFormProperties>({
			minSize: new FormControl<number | null | undefined>(undefined),
			maxSize: new FormControl<number | null | undefined>(undefined),
			desiredSize: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CreateNodegroupPostBodyRemoteAccess {
		ec2SshKey?: string;
		sourceSecurityGroups?: Array<string>;
	}
	export interface CreateNodegroupPostBodyRemoteAccessFormProperties {
		ec2SshKey: FormControl<string | null | undefined>,
	}
	export function CreateCreateNodegroupPostBodyRemoteAccessFormGroup() {
		return new FormGroup<CreateNodegroupPostBodyRemoteAccessFormProperties>({
			ec2SshKey: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateNodegroupPostBodyLaunchTemplate {
		name?: string;
		version?: string;
		id?: string;
	}
	export interface CreateNodegroupPostBodyLaunchTemplateFormProperties {
		name: FormControl<string | null | undefined>,
		version: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
	}
	export function CreateCreateNodegroupPostBodyLaunchTemplateFormGroup() {
		return new FormGroup<CreateNodegroupPostBodyLaunchTemplateFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateNodegroupPostBodyUpdateConfig {
		maxUnavailable?: number | null;
		maxUnavailablePercentage?: number | null;
	}
	export interface CreateNodegroupPostBodyUpdateConfigFormProperties {
		maxUnavailable: FormControl<number | null | undefined>,
		maxUnavailablePercentage: FormControl<number | null | undefined>,
	}
	export function CreateCreateNodegroupPostBodyUpdateConfigFormGroup() {
		return new FormGroup<CreateNodegroupPostBodyUpdateConfigFormProperties>({
			maxUnavailable: new FormControl<number | null | undefined>(undefined),
			maxUnavailablePercentage: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DescribeIdentityProviderConfigPostBody {

		/**
		 * An object representing an identity provider configuration.
		 * Required
		 */
		identityProviderConfig: DescribeIdentityProviderConfigPostBodyIdentityProviderConfig;
	}
	export interface DescribeIdentityProviderConfigPostBodyFormProperties {
	}
	export function CreateDescribeIdentityProviderConfigPostBodyFormGroup() {
		return new FormGroup<DescribeIdentityProviderConfigPostBodyFormProperties>({
		});

	}

	export interface DescribeIdentityProviderConfigPostBodyIdentityProviderConfig {
		type?: string;
		name?: string;
	}
	export interface DescribeIdentityProviderConfigPostBodyIdentityProviderConfigFormProperties {
		type: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateDescribeIdentityProviderConfigPostBodyIdentityProviderConfigFormGroup() {
		return new FormGroup<DescribeIdentityProviderConfigPostBodyIdentityProviderConfigFormProperties>({
			type: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DisassociateIdentityProviderConfigPostBody {

		/**
		 * An object representing an identity provider configuration.
		 * Required
		 */
		identityProviderConfig: DisassociateIdentityProviderConfigPostBodyIdentityProviderConfig;

		/** A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. */
		clientRequestToken?: string | null;
	}
	export interface DisassociateIdentityProviderConfigPostBodyFormProperties {

		/** A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. */
		clientRequestToken: FormControl<string | null | undefined>,
	}
	export function CreateDisassociateIdentityProviderConfigPostBodyFormGroup() {
		return new FormGroup<DisassociateIdentityProviderConfigPostBodyFormProperties>({
			clientRequestToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DisassociateIdentityProviderConfigPostBodyIdentityProviderConfig {
		type?: string;
		name?: string;
	}
	export interface DisassociateIdentityProviderConfigPostBodyIdentityProviderConfigFormProperties {
		type: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateDisassociateIdentityProviderConfigPostBodyIdentityProviderConfigFormGroup() {
		return new FormGroup<DisassociateIdentityProviderConfigPostBodyIdentityProviderConfigFormProperties>({
			type: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TagResourcePostBody {

		/**
		 * The tags to add to the resource. A tag is an array of key-value pairs.
		 * Required
		 */
		tags: {[id: string]: string };
	}
	export interface TagResourcePostBodyFormProperties {

		/**
		 * The tags to add to the resource. A tag is an array of key-value pairs.
		 * Required
		 */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateTagResourcePostBodyFormGroup() {
		return new FormGroup<TagResourcePostBodyFormProperties>({
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateClusterVersionPostBody {

		/**
		 * The desired Kubernetes version following a successful update.
		 * Required
		 */
		version: string;

		/** Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. */
		clientRequestToken?: string | null;
	}
	export interface UpdateClusterVersionPostBodyFormProperties {

		/**
		 * The desired Kubernetes version following a successful update.
		 * Required
		 */
		version: FormControl<string | null | undefined>,

		/** Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. */
		clientRequestToken: FormControl<string | null | undefined>,
	}
	export function CreateUpdateClusterVersionPostBodyFormGroup() {
		return new FormGroup<UpdateClusterVersionPostBodyFormProperties>({
			version: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			clientRequestToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RegisterClusterPostBody {

		/**
		 * Define a unique name for this cluster for your Region.
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		name: string;

		/**
		 * The configuration sent to a cluster for configuration.
		 * Required
		 */
		connectorConfig: RegisterClusterPostBodyConnectorConfig;

		/** Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. */
		clientRequestToken?: string | null;

		/** The metadata that you apply to the cluster to assist with categorization and organization. Each tag consists of a key and an optional value, both of which you define. Cluster tags do not propagate to any other resources associated with the cluster. */
		tags?: {[id: string]: string };
	}
	export interface RegisterClusterPostBodyFormProperties {

		/**
		 * Define a unique name for this cluster for your Region.
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/** Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. */
		clientRequestToken: FormControl<string | null | undefined>,

		/** The metadata that you apply to the cluster to assist with categorization and organization. Each tag consists of a key and an optional value, both of which you define. Cluster tags do not propagate to any other resources associated with the cluster. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateRegisterClusterPostBodyFormGroup() {
		return new FormGroup<RegisterClusterPostBodyFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^[0-9A-Za-z][A-Za-z0-9\-_]*')]),
			clientRequestToken: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface RegisterClusterPostBodyConnectorConfig {
		roleArn?: string;
		provider?: ConnectorConfigProvider;
	}
	export interface RegisterClusterPostBodyConnectorConfigFormProperties {
		roleArn: FormControl<string | null | undefined>,
		provider: FormControl<ConnectorConfigProvider | null | undefined>,
	}
	export function CreateRegisterClusterPostBodyConnectorConfigFormGroup() {
		return new FormGroup<RegisterClusterPostBodyConnectorConfigFormProperties>({
			roleArn: new FormControl<string | null | undefined>(undefined),
			provider: new FormControl<ConnectorConfigProvider | null | undefined>(undefined),
		});

	}

	export interface UpdateAddonPostBody {

		/** The version of the add-on. The version must match one of the versions returned by <a href="https://docs.aws.amazon.com/eks/latest/APIReference/API_DescribeAddonVersions.html"> <code>DescribeAddonVersions</code> </a>. */
		addonVersion?: string | null;

		/**
		 * <p>The Amazon Resource Name (ARN) of an existing IAM role to bind to the add-on's service account. The role must be assigned the IAM permissions required by the add-on. If you don't specify an existing IAM role, then the add-on uses the permissions assigned to the node IAM role. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/create-node-role.html">Amazon EKS node IAM role</a> in the <i>Amazon EKS User Guide</i>.</p> <note> <p>To specify an existing IAM role, you must have an IAM OpenID Connect (OIDC) provider created for your cluster. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/enable-iam-roles-for-service-accounts.html">Enabling IAM roles for service accounts on your cluster</a> in the <i>Amazon EKS User Guide</i>.</p> </note>
		 * Max length: 255
		 * Min length: 1
		 */
		serviceAccountRoleArn?: string | null;

		/** <p>How to resolve field value conflicts for an Amazon EKS add-on if you've changed a value from the Amazon EKS default value. Conflicts are handled based on the option you choose:</p> <ul> <li> <p> <b>None</b> – Amazon EKS doesn't change the value. The update might fail.</p> </li> <li> <p> <b>Overwrite</b> – Amazon EKS overwrites the changed value back to the Amazon EKS default value.</p> </li> <li> <p> <b>Preserve</b> – Amazon EKS preserves the value. If you choose this option, we recommend that you test any field and value changes on a non-production cluster before updating the add-on on your production cluster.</p> </li> </ul> */
		resolveConflicts?: ResolveConflicts | null;

		/** Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. */
		clientRequestToken?: string | null;

		/** The set of configuration values for the add-on that's created. The values that you provide are validated against the schema in <a href="https://docs.aws.amazon.com/eks/latest/APIReference/API_DescribeAddonConfiguration.html">DescribeAddonConfiguration</a>. */
		configurationValues?: string | null;
	}
	export interface UpdateAddonPostBodyFormProperties {

		/** The version of the add-on. The version must match one of the versions returned by <a href="https://docs.aws.amazon.com/eks/latest/APIReference/API_DescribeAddonVersions.html"> <code>DescribeAddonVersions</code> </a>. */
		addonVersion: FormControl<string | null | undefined>,

		/**
		 * <p>The Amazon Resource Name (ARN) of an existing IAM role to bind to the add-on's service account. The role must be assigned the IAM permissions required by the add-on. If you don't specify an existing IAM role, then the add-on uses the permissions assigned to the node IAM role. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/create-node-role.html">Amazon EKS node IAM role</a> in the <i>Amazon EKS User Guide</i>.</p> <note> <p>To specify an existing IAM role, you must have an IAM OpenID Connect (OIDC) provider created for your cluster. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/enable-iam-roles-for-service-accounts.html">Enabling IAM roles for service accounts on your cluster</a> in the <i>Amazon EKS User Guide</i>.</p> </note>
		 * Max length: 255
		 * Min length: 1
		 */
		serviceAccountRoleArn: FormControl<string | null | undefined>,

		/** <p>How to resolve field value conflicts for an Amazon EKS add-on if you've changed a value from the Amazon EKS default value. Conflicts are handled based on the option you choose:</p> <ul> <li> <p> <b>None</b> – Amazon EKS doesn't change the value. The update might fail.</p> </li> <li> <p> <b>Overwrite</b> – Amazon EKS overwrites the changed value back to the Amazon EKS default value.</p> </li> <li> <p> <b>Preserve</b> – Amazon EKS preserves the value. If you choose this option, we recommend that you test any field and value changes on a non-production cluster before updating the add-on on your production cluster.</p> </li> </ul> */
		resolveConflicts: FormControl<ResolveConflicts | null | undefined>,

		/** Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. */
		clientRequestToken: FormControl<string | null | undefined>,

		/** The set of configuration values for the add-on that's created. The values that you provide are validated against the schema in <a href="https://docs.aws.amazon.com/eks/latest/APIReference/API_DescribeAddonConfiguration.html">DescribeAddonConfiguration</a>. */
		configurationValues: FormControl<string | null | undefined>,
	}
	export function CreateUpdateAddonPostBodyFormGroup() {
		return new FormGroup<UpdateAddonPostBodyFormProperties>({
			addonVersion: new FormControl<string | null | undefined>(undefined),
			serviceAccountRoleArn: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			resolveConflicts: new FormControl<ResolveConflicts | null | undefined>(undefined),
			clientRequestToken: new FormControl<string | null | undefined>(undefined),
			configurationValues: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateClusterConfigPostBody {

		/** An object representing the VPC configuration to use for an Amazon EKS cluster. */
		resourcesVpcConfig?: UpdateClusterConfigPostBodyResourcesVpcConfig;

		/** An object representing the logging configuration for resources in your cluster. */
		logging?: UpdateClusterConfigPostBodyLogging;

		/** Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. */
		clientRequestToken?: string | null;
	}
	export interface UpdateClusterConfigPostBodyFormProperties {

		/** Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. */
		clientRequestToken: FormControl<string | null | undefined>,
	}
	export function CreateUpdateClusterConfigPostBodyFormGroup() {
		return new FormGroup<UpdateClusterConfigPostBodyFormProperties>({
			clientRequestToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateClusterConfigPostBodyResourcesVpcConfig {
		subnetIds?: Array<string>;
		securityGroupIds?: Array<string>;
		endpointPublicAccess?: boolean | null;
		endpointPrivateAccess?: boolean | null;
		publicAccessCidrs?: Array<string>;
	}
	export interface UpdateClusterConfigPostBodyResourcesVpcConfigFormProperties {
		endpointPublicAccess: FormControl<boolean | null | undefined>,
		endpointPrivateAccess: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateClusterConfigPostBodyResourcesVpcConfigFormGroup() {
		return new FormGroup<UpdateClusterConfigPostBodyResourcesVpcConfigFormProperties>({
			endpointPublicAccess: new FormControl<boolean | null | undefined>(undefined),
			endpointPrivateAccess: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UpdateClusterConfigPostBodyLogging {
		clusterLogging?: Array<LogSetup>;
	}
	export interface UpdateClusterConfigPostBodyLoggingFormProperties {
	}
	export function CreateUpdateClusterConfigPostBodyLoggingFormGroup() {
		return new FormGroup<UpdateClusterConfigPostBodyLoggingFormProperties>({
		});

	}

	export interface UpdateNodegroupConfigPostBody {

		/** An object representing a Kubernetes label change for a managed node group. */
		labels?: UpdateNodegroupConfigPostBodyLabels;

		/** An object representing the details of an update to a taints payload. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/node-taints-managed-node-groups.html">Node taints on managed node groups</a>. */
		taints?: UpdateNodegroupConfigPostBodyTaints;

		/** An object representing the scaling configuration details for the Auto Scaling group that is associated with your node group. When creating a node group, you must specify all or none of the properties. When updating a node group, you can specify any or none of the properties. */
		scalingConfig?: UpdateNodegroupConfigPostBodyScalingConfig;

		/** The node group update configuration. */
		updateConfig?: UpdateNodegroupConfigPostBodyUpdateConfig;

		/** Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. */
		clientRequestToken?: string | null;
	}
	export interface UpdateNodegroupConfigPostBodyFormProperties {

		/** Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. */
		clientRequestToken: FormControl<string | null | undefined>,
	}
	export function CreateUpdateNodegroupConfigPostBodyFormGroup() {
		return new FormGroup<UpdateNodegroupConfigPostBodyFormProperties>({
			clientRequestToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateNodegroupConfigPostBodyLabels {
		addOrUpdateLabels?: LabelsMap;
		removeLabels?: Array<string>;
	}
	export interface UpdateNodegroupConfigPostBodyLabelsFormProperties {
	}
	export function CreateUpdateNodegroupConfigPostBodyLabelsFormGroup() {
		return new FormGroup<UpdateNodegroupConfigPostBodyLabelsFormProperties>({
		});

	}

	export interface UpdateNodegroupConfigPostBodyTaints {
		addOrUpdateTaints?: Array<Taint>;
		removeTaints?: Array<Taint>;
	}
	export interface UpdateNodegroupConfigPostBodyTaintsFormProperties {
	}
	export function CreateUpdateNodegroupConfigPostBodyTaintsFormGroup() {
		return new FormGroup<UpdateNodegroupConfigPostBodyTaintsFormProperties>({
		});

	}

	export interface UpdateNodegroupConfigPostBodyScalingConfig {
		minSize?: number | null;
		maxSize?: number | null;
		desiredSize?: number | null;
	}
	export interface UpdateNodegroupConfigPostBodyScalingConfigFormProperties {
		minSize: FormControl<number | null | undefined>,
		maxSize: FormControl<number | null | undefined>,
		desiredSize: FormControl<number | null | undefined>,
	}
	export function CreateUpdateNodegroupConfigPostBodyScalingConfigFormGroup() {
		return new FormGroup<UpdateNodegroupConfigPostBodyScalingConfigFormProperties>({
			minSize: new FormControl<number | null | undefined>(undefined),
			maxSize: new FormControl<number | null | undefined>(undefined),
			desiredSize: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface UpdateNodegroupConfigPostBodyUpdateConfig {
		maxUnavailable?: number | null;
		maxUnavailablePercentage?: number | null;
	}
	export interface UpdateNodegroupConfigPostBodyUpdateConfigFormProperties {
		maxUnavailable: FormControl<number | null | undefined>,
		maxUnavailablePercentage: FormControl<number | null | undefined>,
	}
	export function CreateUpdateNodegroupConfigPostBodyUpdateConfigFormGroup() {
		return new FormGroup<UpdateNodegroupConfigPostBodyUpdateConfigFormProperties>({
			maxUnavailable: new FormControl<number | null | undefined>(undefined),
			maxUnavailablePercentage: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface UpdateNodegroupVersionPostBody {

		/** The Kubernetes version to update to. If no version is specified, then the Kubernetes version of the node group does not change. You can specify the Kubernetes version of the cluster to update the node group to the latest AMI version of the cluster's Kubernetes version. If you specify <code>launchTemplate</code>, and your launch template uses a custom AMI, then don't specify <code>version</code>, or the node group update will fail. For more information about using launch templates with Amazon EKS, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/launch-templates.html">Launch template support</a> in the <i>Amazon EKS User Guide</i>. */
		version?: string | null;

		/** <p>The AMI version of the Amazon EKS optimized AMI to use for the update. By default, the latest available AMI version for the node group's Kubernetes version is used. For information about Linux versions, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/eks-linux-ami-versions.html">Amazon EKS optimized Amazon Linux AMI versions</a> in the <i>Amazon EKS User Guide</i>. Amazon EKS managed node groups support the November 2022 and later releases of the Windows AMIs. For information about Windows versions, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/eks-ami-versions-windows.html">Amazon EKS optimized Windows AMI versions</a> in the <i>Amazon EKS User Guide</i>.</p> <p>If you specify <code>launchTemplate</code>, and your launch template uses a custom AMI, then don't specify <code>releaseVersion</code>, or the node group update will fail. For more information about using launch templates with Amazon EKS, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/launch-templates.html">Launch template support</a> in the <i>Amazon EKS User Guide</i>.</p> */
		releaseVersion?: string | null;

		/** <p>An object representing a node group launch template specification. The launch template can't include <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateNetworkInterface.html"> <code>SubnetId</code> </a>, <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_IamInstanceProfile.html"> <code>IamInstanceProfile</code> </a>, <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RequestSpotInstances.html"> <code>RequestSpotInstances</code> </a>, <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_HibernationOptionsRequest.html"> <code>HibernationOptions</code> </a>, or <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_TerminateInstances.html"> <code>TerminateInstances</code> </a>, or the node group deployment or update will fail. For more information about launch templates, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateLaunchTemplate.html"> <code>CreateLaunchTemplate</code> </a> in the Amazon EC2 API Reference. For more information about using launch templates with Amazon EKS, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/launch-templates.html">Launch template support</a> in the <i>Amazon EKS User Guide</i>.</p> <p>You must specify either the launch template ID or the launch template name in the request, but not both.</p> */
		launchTemplate?: UpdateNodegroupVersionPostBodyLaunchTemplate;

		/** Force the update if the existing node group's pods are unable to be drained due to a pod disruption budget issue. If an update fails because pods could not be drained, you can force the update after it fails to terminate the old node whether or not any pods are running on the node. */
		force?: boolean | null;

		/** Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. */
		clientRequestToken?: string | null;
	}
	export interface UpdateNodegroupVersionPostBodyFormProperties {

		/** The Kubernetes version to update to. If no version is specified, then the Kubernetes version of the node group does not change. You can specify the Kubernetes version of the cluster to update the node group to the latest AMI version of the cluster's Kubernetes version. If you specify <code>launchTemplate</code>, and your launch template uses a custom AMI, then don't specify <code>version</code>, or the node group update will fail. For more information about using launch templates with Amazon EKS, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/launch-templates.html">Launch template support</a> in the <i>Amazon EKS User Guide</i>. */
		version: FormControl<string | null | undefined>,

		/** <p>The AMI version of the Amazon EKS optimized AMI to use for the update. By default, the latest available AMI version for the node group's Kubernetes version is used. For information about Linux versions, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/eks-linux-ami-versions.html">Amazon EKS optimized Amazon Linux AMI versions</a> in the <i>Amazon EKS User Guide</i>. Amazon EKS managed node groups support the November 2022 and later releases of the Windows AMIs. For information about Windows versions, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/eks-ami-versions-windows.html">Amazon EKS optimized Windows AMI versions</a> in the <i>Amazon EKS User Guide</i>.</p> <p>If you specify <code>launchTemplate</code>, and your launch template uses a custom AMI, then don't specify <code>releaseVersion</code>, or the node group update will fail. For more information about using launch templates with Amazon EKS, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/launch-templates.html">Launch template support</a> in the <i>Amazon EKS User Guide</i>.</p> */
		releaseVersion: FormControl<string | null | undefined>,

		/** Force the update if the existing node group's pods are unable to be drained due to a pod disruption budget issue. If an update fails because pods could not be drained, you can force the update after it fails to terminate the old node whether or not any pods are running on the node. */
		force: FormControl<boolean | null | undefined>,

		/** Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. */
		clientRequestToken: FormControl<string | null | undefined>,
	}
	export function CreateUpdateNodegroupVersionPostBodyFormGroup() {
		return new FormGroup<UpdateNodegroupVersionPostBodyFormProperties>({
			version: new FormControl<string | null | undefined>(undefined),
			releaseVersion: new FormControl<string | null | undefined>(undefined),
			force: new FormControl<boolean | null | undefined>(undefined),
			clientRequestToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateNodegroupVersionPostBodyLaunchTemplate {
		name?: string;
		version?: string;
		id?: string;
	}
	export interface UpdateNodegroupVersionPostBodyLaunchTemplateFormProperties {
		name: FormControl<string | null | undefined>,
		version: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
	}
	export function CreateUpdateNodegroupVersionPostBodyLaunchTemplateFormGroup() {
		return new FormGroup<UpdateNodegroupVersionPostBodyLaunchTemplateFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
		});

	}

}

