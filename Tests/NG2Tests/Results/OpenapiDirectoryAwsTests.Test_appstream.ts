import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface AssociateFleetResult {
	}
	export interface AssociateFleetResultFormProperties {
	}
	export function CreateAssociateFleetResultFormGroup() {
		return new FormGroup<AssociateFleetResultFormProperties>({
		});

	}

	export interface AssociateFleetRequest {
		FleetName: string;
		StackName: string;
	}
	export interface AssociateFleetRequestFormProperties {
		FleetName: FormControl<string | null | undefined>,
		StackName: FormControl<string | null | undefined>,
	}
	export function CreateAssociateFleetRequestFormGroup() {
		return new FormGroup<AssociateFleetRequestFormProperties>({
			FleetName: new FormControl<string | null | undefined>(undefined),
			StackName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface LimitExceededException {
	}
	export interface LimitExceededExceptionFormProperties {
	}
	export function CreateLimitExceededExceptionFormGroup() {
		return new FormGroup<LimitExceededExceptionFormProperties>({
		});

	}

	export interface InvalidAccountStatusException {
	}
	export interface InvalidAccountStatusExceptionFormProperties {
	}
	export function CreateInvalidAccountStatusExceptionFormGroup() {
		return new FormGroup<InvalidAccountStatusExceptionFormProperties>({
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

	export interface ConcurrentModificationException {
	}
	export interface ConcurrentModificationExceptionFormProperties {
	}
	export function CreateConcurrentModificationExceptionFormGroup() {
		return new FormGroup<ConcurrentModificationExceptionFormProperties>({
		});

	}

	export interface IncompatibleImageException {
	}
	export interface IncompatibleImageExceptionFormProperties {
	}
	export function CreateIncompatibleImageExceptionFormGroup() {
		return new FormGroup<IncompatibleImageExceptionFormProperties>({
		});

	}

	export interface OperationNotPermittedException {
	}
	export interface OperationNotPermittedExceptionFormProperties {
	}
	export function CreateOperationNotPermittedExceptionFormGroup() {
		return new FormGroup<OperationNotPermittedExceptionFormProperties>({
		});

	}

	export interface BatchAssociateUserStackResult {
		errors?: Array<UserStackAssociationError>;
	}
	export interface BatchAssociateUserStackResultFormProperties {
	}
	export function CreateBatchAssociateUserStackResultFormGroup() {
		return new FormGroup<BatchAssociateUserStackResultFormProperties>({
		});

	}


	/** Describes the error that is returned when a user can’t be associated with or disassociated from a stack.  */
	export interface UserStackAssociationError {

		/** Describes a user in the user pool and the associated stack. */
		UserStackAssociation?: UserStackAssociation;
		ErrorCode?: UserStackAssociationErrorErrorCode | null;
		ErrorMessage?: string | null;
	}

	/** Describes the error that is returned when a user can’t be associated with or disassociated from a stack.  */
	export interface UserStackAssociationErrorFormProperties {
		ErrorCode: FormControl<UserStackAssociationErrorErrorCode | null | undefined>,
		ErrorMessage: FormControl<string | null | undefined>,
	}
	export function CreateUserStackAssociationErrorFormGroup() {
		return new FormGroup<UserStackAssociationErrorFormProperties>({
			ErrorCode: new FormControl<UserStackAssociationErrorErrorCode | null | undefined>(undefined),
			ErrorMessage: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes a user in the user pool and the associated stack. */
	export interface UserStackAssociation {
		StackName: string;
		UserName: string;
		AuthenticationType: UserStackAssociationAuthenticationType;
		SendEmailNotification?: boolean | null;
	}

	/** Describes a user in the user pool and the associated stack. */
	export interface UserStackAssociationFormProperties {
		StackName: FormControl<string | null | undefined>,
		UserName: FormControl<string | null | undefined>,
		AuthenticationType: FormControl<UserStackAssociationAuthenticationType | null | undefined>,
		SendEmailNotification: FormControl<boolean | null | undefined>,
	}
	export function CreateUserStackAssociationFormGroup() {
		return new FormGroup<UserStackAssociationFormProperties>({
			StackName: new FormControl<string | null | undefined>(undefined),
			UserName: new FormControl<string | null | undefined>(undefined),
			AuthenticationType: new FormControl<UserStackAssociationAuthenticationType | null | undefined>(undefined),
			SendEmailNotification: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum UserStackAssociationAuthenticationType { API = 0, SAML = 1, USERPOOL = 2 }

	export enum UserStackAssociationErrorErrorCode { STACK_NOT_FOUND = 0, USER_NAME_NOT_FOUND = 1, INTERNAL_ERROR = 2 }

	export interface BatchAssociateUserStackRequest {
		UserStackAssociations: Array<UserStackAssociation>;
	}
	export interface BatchAssociateUserStackRequestFormProperties {
	}
	export function CreateBatchAssociateUserStackRequestFormGroup() {
		return new FormGroup<BatchAssociateUserStackRequestFormProperties>({
		});

	}

	export interface BatchDisassociateUserStackResult {
		errors?: Array<UserStackAssociationError>;
	}
	export interface BatchDisassociateUserStackResultFormProperties {
	}
	export function CreateBatchDisassociateUserStackResultFormGroup() {
		return new FormGroup<BatchDisassociateUserStackResultFormProperties>({
		});

	}

	export interface BatchDisassociateUserStackRequest {
		UserStackAssociations: Array<UserStackAssociation>;
	}
	export interface BatchDisassociateUserStackRequestFormProperties {
	}
	export function CreateBatchDisassociateUserStackRequestFormGroup() {
		return new FormGroup<BatchDisassociateUserStackRequestFormProperties>({
		});

	}

	export interface CopyImageResponse {
		DestinationImageName?: string | null;
	}
	export interface CopyImageResponseFormProperties {
		DestinationImageName: FormControl<string | null | undefined>,
	}
	export function CreateCopyImageResponseFormGroup() {
		return new FormGroup<CopyImageResponseFormProperties>({
			DestinationImageName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CopyImageRequest {
		SourceImageName: string;
		DestinationImageName: string;
		DestinationRegion: string;
		DestinationImageDescription?: string | null;
	}
	export interface CopyImageRequestFormProperties {
		SourceImageName: FormControl<string | null | undefined>,
		DestinationImageName: FormControl<string | null | undefined>,
		DestinationRegion: FormControl<string | null | undefined>,
		DestinationImageDescription: FormControl<string | null | undefined>,
	}
	export function CreateCopyImageRequestFormGroup() {
		return new FormGroup<CopyImageRequestFormProperties>({
			SourceImageName: new FormControl<string | null | undefined>(undefined),
			DestinationImageName: new FormControl<string | null | undefined>(undefined),
			DestinationRegion: new FormControl<string | null | undefined>(undefined),
			DestinationImageDescription: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ResourceAlreadyExistsException {
	}
	export interface ResourceAlreadyExistsExceptionFormProperties {
	}
	export function CreateResourceAlreadyExistsExceptionFormGroup() {
		return new FormGroup<ResourceAlreadyExistsExceptionFormProperties>({
		});

	}

	export interface ResourceNotAvailableException {
	}
	export interface ResourceNotAvailableExceptionFormProperties {
	}
	export function CreateResourceNotAvailableExceptionFormGroup() {
		return new FormGroup<ResourceNotAvailableExceptionFormProperties>({
		});

	}

	export interface CreateDirectoryConfigResult {

		/** Describes the configuration information required to join fleets and image builders to Microsoft Active Directory domains. */
		DirectoryConfig?: DirectoryConfig;
	}
	export interface CreateDirectoryConfigResultFormProperties {
	}
	export function CreateCreateDirectoryConfigResultFormGroup() {
		return new FormGroup<CreateDirectoryConfigResultFormProperties>({
		});

	}


	/** Describes the configuration information required to join fleets and image builders to Microsoft Active Directory domains. */
	export interface DirectoryConfig {
		DirectoryName: string;
		OrganizationalUnitDistinguishedNames?: Array<string>;

		/** Describes the credentials for the service account used by the fleet or image builder to connect to the directory. */
		ServiceAccountCredentials?: ServiceAccountCredentials;
		CreatedTime?: Date | null;
	}

	/** Describes the configuration information required to join fleets and image builders to Microsoft Active Directory domains. */
	export interface DirectoryConfigFormProperties {
		DirectoryName: FormControl<string | null | undefined>,
		CreatedTime: FormControl<Date | null | undefined>,
	}
	export function CreateDirectoryConfigFormGroup() {
		return new FormGroup<DirectoryConfigFormProperties>({
			DirectoryName: new FormControl<string | null | undefined>(undefined),
			CreatedTime: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Describes the credentials for the service account used by the fleet or image builder to connect to the directory. */
	export interface ServiceAccountCredentials {
		AccountName: string;
		AccountPassword: string;
	}

	/** Describes the credentials for the service account used by the fleet or image builder to connect to the directory. */
	export interface ServiceAccountCredentialsFormProperties {
		AccountName: FormControl<string | null | undefined>,
		AccountPassword: FormControl<string | null | undefined>,
	}
	export function CreateServiceAccountCredentialsFormGroup() {
		return new FormGroup<ServiceAccountCredentialsFormProperties>({
			AccountName: new FormControl<string | null | undefined>(undefined),
			AccountPassword: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateDirectoryConfigRequest {
		DirectoryName: string;
		OrganizationalUnitDistinguishedNames: Array<string>;

		/**
		 * Describes the credentials for the service account used by the fleet or image builder to connect to the directory.
		 * Required
		 */
		ServiceAccountCredentials: ServiceAccountCredentials;
	}
	export interface CreateDirectoryConfigRequestFormProperties {
		DirectoryName: FormControl<string | null | undefined>,
	}
	export function CreateCreateDirectoryConfigRequestFormGroup() {
		return new FormGroup<CreateDirectoryConfigRequestFormProperties>({
			DirectoryName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateFleetResult {

		/** Describes a fleet. */
		Fleet?: Fleet;
	}
	export interface CreateFleetResultFormProperties {
	}
	export function CreateCreateFleetResultFormGroup() {
		return new FormGroup<CreateFleetResultFormProperties>({
		});

	}


	/** Describes a fleet. */
	export interface Fleet {
		Arn: string;
		Name: string;
		DisplayName?: string | null;
		Description?: string | null;
		ImageName?: string | null;
		ImageArn?: string | null;
		InstanceType: string;
		FleetType?: FleetFleetType | null;

		/**
		 * Describes the capacity status for a fleet.
		 * Required
		 */
		ComputeCapacityStatus: ComputeCapacityStatus;
		MaxUserDurationInSeconds?: number | null;
		DisconnectTimeoutInSeconds?: number | null;
		State: FleetState;

		/** Describes VPC configuration information for fleets and image builders. */
		VpcConfig?: VpcConfig;
		CreatedTime?: Date | null;
		FleetErrors?: Array<FleetError>;
		EnableDefaultInternetAccess?: boolean | null;

		/** Describes the configuration information required to join fleets and image builders to Microsoft Active Directory domains. */
		DomainJoinInfo?: DomainJoinInfo;
		IdleDisconnectTimeoutInSeconds?: number | null;
		IamRoleArn?: string | null;
	}

	/** Describes a fleet. */
	export interface FleetFormProperties {
		Arn: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		DisplayName: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		ImageName: FormControl<string | null | undefined>,
		ImageArn: FormControl<string | null | undefined>,
		InstanceType: FormControl<string | null | undefined>,
		FleetType: FormControl<FleetFleetType | null | undefined>,
		MaxUserDurationInSeconds: FormControl<number | null | undefined>,
		DisconnectTimeoutInSeconds: FormControl<number | null | undefined>,
		State: FormControl<FleetState | null | undefined>,
		CreatedTime: FormControl<Date | null | undefined>,
		EnableDefaultInternetAccess: FormControl<boolean | null | undefined>,
		IdleDisconnectTimeoutInSeconds: FormControl<number | null | undefined>,
		IamRoleArn: FormControl<string | null | undefined>,
	}
	export function CreateFleetFormGroup() {
		return new FormGroup<FleetFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			DisplayName: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			ImageName: new FormControl<string | null | undefined>(undefined),
			ImageArn: new FormControl<string | null | undefined>(undefined),
			InstanceType: new FormControl<string | null | undefined>(undefined),
			FleetType: new FormControl<FleetFleetType | null | undefined>(undefined),
			MaxUserDurationInSeconds: new FormControl<number | null | undefined>(undefined),
			DisconnectTimeoutInSeconds: new FormControl<number | null | undefined>(undefined),
			State: new FormControl<FleetState | null | undefined>(undefined),
			CreatedTime: new FormControl<Date | null | undefined>(undefined),
			EnableDefaultInternetAccess: new FormControl<boolean | null | undefined>(undefined),
			IdleDisconnectTimeoutInSeconds: new FormControl<number | null | undefined>(undefined),
			IamRoleArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum FleetFleetType { ALWAYS_ON = 0, ON_DEMAND = 1 }


	/** Describes the capacity status for a fleet. */
	export interface ComputeCapacityStatus {
		Desired: number;
		Running?: number | null;
		InUse?: number | null;
		Available?: number | null;
	}

	/** Describes the capacity status for a fleet. */
	export interface ComputeCapacityStatusFormProperties {
		Desired: FormControl<number | null | undefined>,
		Running: FormControl<number | null | undefined>,
		InUse: FormControl<number | null | undefined>,
		Available: FormControl<number | null | undefined>,
	}
	export function CreateComputeCapacityStatusFormGroup() {
		return new FormGroup<ComputeCapacityStatusFormProperties>({
			Desired: new FormControl<number | null | undefined>(undefined),
			Running: new FormControl<number | null | undefined>(undefined),
			InUse: new FormControl<number | null | undefined>(undefined),
			Available: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum FleetState { STARTING = 0, RUNNING = 1, STOPPING = 2, STOPPED = 3 }


	/** Describes VPC configuration information for fleets and image builders. */
	export interface VpcConfig {

		/** The subnet identifiers. */
		SubnetIds?: Array<string>;

		/**
		 * The security group identifiers.
		 * Maximum items: 5
		 */
		SecurityGroupIds?: Array<string>;
	}

	/** Describes VPC configuration information for fleets and image builders. */
	export interface VpcConfigFormProperties {
	}
	export function CreateVpcConfigFormGroup() {
		return new FormGroup<VpcConfigFormProperties>({
		});

	}


	/** Describes a fleet error. */
	export interface FleetError {
		ErrorCode?: FleetErrorErrorCode | null;
		ErrorMessage?: string | null;
	}

	/** Describes a fleet error. */
	export interface FleetErrorFormProperties {
		ErrorCode: FormControl<FleetErrorErrorCode | null | undefined>,
		ErrorMessage: FormControl<string | null | undefined>,
	}
	export function CreateFleetErrorFormGroup() {
		return new FormGroup<FleetErrorFormProperties>({
			ErrorCode: new FormControl<FleetErrorErrorCode | null | undefined>(undefined),
			ErrorMessage: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum FleetErrorErrorCode { IAM_SERVICE_ROLE_MISSING_ENI_DESCRIBE_ACTION = 0, IAM_SERVICE_ROLE_MISSING_ENI_CREATE_ACTION = 1, IAM_SERVICE_ROLE_MISSING_ENI_DELETE_ACTION = 2, NETWORK_INTERFACE_LIMIT_EXCEEDED = 3, INTERNAL_SERVICE_ERROR = 4, IAM_SERVICE_ROLE_IS_MISSING = 5, MACHINE_ROLE_IS_MISSING = 6, STS_DISABLED_IN_REGION = 7, SUBNET_HAS_INSUFFICIENT_IP_ADDRESSES = 8, IAM_SERVICE_ROLE_MISSING_DESCRIBE_SUBNET_ACTION = 9, SUBNET_NOT_FOUND = 10, IMAGE_NOT_FOUND = 11, INVALID_SUBNET_CONFIGURATION = 12, SECURITY_GROUPS_NOT_FOUND = 13, IGW_NOT_ATTACHED = 14, IAM_SERVICE_ROLE_MISSING_DESCRIBE_SECURITY_GROUPS_ACTION = 15, DOMAIN_JOIN_ERROR_FILE_NOT_FOUND = 16, DOMAIN_JOIN_ERROR_ACCESS_DENIED = 17, DOMAIN_JOIN_ERROR_LOGON_FAILURE = 18, DOMAIN_JOIN_ERROR_INVALID_PARAMETER = 19, DOMAIN_JOIN_ERROR_MORE_DATA = 20, DOMAIN_JOIN_ERROR_NO_SUCH_DOMAIN = 21, DOMAIN_JOIN_ERROR_NOT_SUPPORTED = 22, DOMAIN_JOIN_NERR_INVALID_WORKGROUP_NAME = 23, DOMAIN_JOIN_NERR_WORKSTATION_NOT_STARTED = 24, DOMAIN_JOIN_ERROR_DS_MACHINE_ACCOUNT_QUOTA_EXCEEDED = 25, DOMAIN_JOIN_NERR_PASSWORD_EXPIRED = 26, DOMAIN_JOIN_INTERNAL_SERVICE_ERROR = 27 }


	/** Describes the configuration information required to join fleets and image builders to Microsoft Active Directory domains. */
	export interface DomainJoinInfo {
		DirectoryName?: string | null;
		OrganizationalUnitDistinguishedName?: string | null;
	}

	/** Describes the configuration information required to join fleets and image builders to Microsoft Active Directory domains. */
	export interface DomainJoinInfoFormProperties {
		DirectoryName: FormControl<string | null | undefined>,
		OrganizationalUnitDistinguishedName: FormControl<string | null | undefined>,
	}
	export function CreateDomainJoinInfoFormGroup() {
		return new FormGroup<DomainJoinInfoFormProperties>({
			DirectoryName: new FormControl<string | null | undefined>(undefined),
			OrganizationalUnitDistinguishedName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateFleetRequest {
		Name: string;
		ImageName?: string | null;
		ImageArn?: string | null;
		InstanceType: string;
		FleetType?: FleetFleetType | null;

		/**
		 * Describes the capacity for a fleet.
		 * Required
		 */
		ComputeCapacity: ComputeCapacity;

		/** Describes VPC configuration information for fleets and image builders. */
		VpcConfig?: VpcConfig;
		MaxUserDurationInSeconds?: number | null;
		DisconnectTimeoutInSeconds?: number | null;
		Description?: string | null;
		DisplayName?: string | null;
		EnableDefaultInternetAccess?: boolean | null;

		/** Describes the configuration information required to join fleets and image builders to Microsoft Active Directory domains. */
		DomainJoinInfo?: DomainJoinInfo;
		Tags?: Tags;
		IdleDisconnectTimeoutInSeconds?: number | null;
		IamRoleArn?: string | null;
	}
	export interface CreateFleetRequestFormProperties {
		Name: FormControl<string | null | undefined>,
		ImageName: FormControl<string | null | undefined>,
		ImageArn: FormControl<string | null | undefined>,
		InstanceType: FormControl<string | null | undefined>,
		FleetType: FormControl<FleetFleetType | null | undefined>,
		MaxUserDurationInSeconds: FormControl<number | null | undefined>,
		DisconnectTimeoutInSeconds: FormControl<number | null | undefined>,
		Description: FormControl<string | null | undefined>,
		DisplayName: FormControl<string | null | undefined>,
		EnableDefaultInternetAccess: FormControl<boolean | null | undefined>,
		IdleDisconnectTimeoutInSeconds: FormControl<number | null | undefined>,
		IamRoleArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateFleetRequestFormGroup() {
		return new FormGroup<CreateFleetRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			ImageName: new FormControl<string | null | undefined>(undefined),
			ImageArn: new FormControl<string | null | undefined>(undefined),
			InstanceType: new FormControl<string | null | undefined>(undefined),
			FleetType: new FormControl<FleetFleetType | null | undefined>(undefined),
			MaxUserDurationInSeconds: new FormControl<number | null | undefined>(undefined),
			DisconnectTimeoutInSeconds: new FormControl<number | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			DisplayName: new FormControl<string | null | undefined>(undefined),
			EnableDefaultInternetAccess: new FormControl<boolean | null | undefined>(undefined),
			IdleDisconnectTimeoutInSeconds: new FormControl<number | null | undefined>(undefined),
			IamRoleArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes the capacity for a fleet. */
	export interface ComputeCapacity {
		DesiredInstances: number;
	}

	/** Describes the capacity for a fleet. */
	export interface ComputeCapacityFormProperties {
		DesiredInstances: FormControl<number | null | undefined>,
	}
	export function CreateComputeCapacityFormGroup() {
		return new FormGroup<ComputeCapacityFormProperties>({
			DesiredInstances: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Tags {
	}
	export interface TagsFormProperties {
	}
	export function CreateTagsFormGroup() {
		return new FormGroup<TagsFormProperties>({
		});

	}

	export interface InvalidRoleException {
	}
	export interface InvalidRoleExceptionFormProperties {
	}
	export function CreateInvalidRoleExceptionFormGroup() {
		return new FormGroup<InvalidRoleExceptionFormProperties>({
		});

	}

	export interface InvalidParameterCombinationException {
	}
	export interface InvalidParameterCombinationExceptionFormProperties {
	}
	export function CreateInvalidParameterCombinationExceptionFormGroup() {
		return new FormGroup<InvalidParameterCombinationExceptionFormProperties>({
		});

	}

	export interface CreateImageBuilderResult {

		/** Describes a virtual machine that is used to create an image. */
		ImageBuilder?: ImageBuilder;
	}
	export interface CreateImageBuilderResultFormProperties {
	}
	export function CreateCreateImageBuilderResultFormGroup() {
		return new FormGroup<CreateImageBuilderResultFormProperties>({
		});

	}


	/** Describes a virtual machine that is used to create an image.  */
	export interface ImageBuilder {
		Name: string;
		Arn?: string | null;
		ImageArn?: string | null;
		Description?: string | null;
		DisplayName?: string | null;

		/** Describes VPC configuration information for fleets and image builders. */
		VpcConfig?: VpcConfig;
		InstanceType?: string | null;
		Platform?: ImageBuilderPlatform | null;
		IamRoleArn?: string | null;
		State?: ImageBuilderState | null;

		/** Describes the reason why the last image builder state change occurred. */
		StateChangeReason?: ImageBuilderStateChangeReason;
		CreatedTime?: Date | null;
		EnableDefaultInternetAccess?: boolean | null;

		/** Describes the configuration information required to join fleets and image builders to Microsoft Active Directory domains. */
		DomainJoinInfo?: DomainJoinInfo;

		/** Describes the network details of the fleet or image builder instance. */
		NetworkAccessConfiguration?: NetworkAccessConfiguration;
		ImageBuilderErrors?: Array<ResourceError>;
		AppstreamAgentVersion?: string | null;
		AccessEndpoints?: Array<AccessEndpoint>;
	}

	/** Describes a virtual machine that is used to create an image.  */
	export interface ImageBuilderFormProperties {
		Name: FormControl<string | null | undefined>,
		Arn: FormControl<string | null | undefined>,
		ImageArn: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		DisplayName: FormControl<string | null | undefined>,
		InstanceType: FormControl<string | null | undefined>,
		Platform: FormControl<ImageBuilderPlatform | null | undefined>,
		IamRoleArn: FormControl<string | null | undefined>,
		State: FormControl<ImageBuilderState | null | undefined>,
		CreatedTime: FormControl<Date | null | undefined>,
		EnableDefaultInternetAccess: FormControl<boolean | null | undefined>,
		AppstreamAgentVersion: FormControl<string | null | undefined>,
	}
	export function CreateImageBuilderFormGroup() {
		return new FormGroup<ImageBuilderFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Arn: new FormControl<string | null | undefined>(undefined),
			ImageArn: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			DisplayName: new FormControl<string | null | undefined>(undefined),
			InstanceType: new FormControl<string | null | undefined>(undefined),
			Platform: new FormControl<ImageBuilderPlatform | null | undefined>(undefined),
			IamRoleArn: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<ImageBuilderState | null | undefined>(undefined),
			CreatedTime: new FormControl<Date | null | undefined>(undefined),
			EnableDefaultInternetAccess: new FormControl<boolean | null | undefined>(undefined),
			AppstreamAgentVersion: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ImageBuilderPlatform { WINDOWS = 0, WINDOWS_SERVER_2016 = 1, WINDOWS_SERVER_2019 = 2 }

	export enum ImageBuilderState { PENDING = 0, UPDATING_AGENT = 1, RUNNING = 2, STOPPING = 3, STOPPED = 4, REBOOTING = 5, SNAPSHOTTING = 6, DELETING = 7, FAILED = 8 }


	/** Describes the reason why the last image builder state change occurred. */
	export interface ImageBuilderStateChangeReason {
		Code?: ImageBuilderStateChangeReasonCode | null;
		Message?: string | null;
	}

	/** Describes the reason why the last image builder state change occurred. */
	export interface ImageBuilderStateChangeReasonFormProperties {
		Code: FormControl<ImageBuilderStateChangeReasonCode | null | undefined>,
		Message: FormControl<string | null | undefined>,
	}
	export function CreateImageBuilderStateChangeReasonFormGroup() {
		return new FormGroup<ImageBuilderStateChangeReasonFormProperties>({
			Code: new FormControl<ImageBuilderStateChangeReasonCode | null | undefined>(undefined),
			Message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ImageBuilderStateChangeReasonCode { INTERNAL_ERROR = 0, IMAGE_UNAVAILABLE = 1 }


	/** Describes the network details of the fleet or image builder instance. */
	export interface NetworkAccessConfiguration {
		EniPrivateIpAddress?: string | null;
		EniId?: string | null;
	}

	/** Describes the network details of the fleet or image builder instance. */
	export interface NetworkAccessConfigurationFormProperties {
		EniPrivateIpAddress: FormControl<string | null | undefined>,
		EniId: FormControl<string | null | undefined>,
	}
	export function CreateNetworkAccessConfigurationFormGroup() {
		return new FormGroup<NetworkAccessConfigurationFormProperties>({
			EniPrivateIpAddress: new FormControl<string | null | undefined>(undefined),
			EniId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes a resource error. */
	export interface ResourceError {
		ErrorCode?: FleetErrorErrorCode | null;
		ErrorMessage?: string | null;
		ErrorTimestamp?: Date | null;
	}

	/** Describes a resource error. */
	export interface ResourceErrorFormProperties {
		ErrorCode: FormControl<FleetErrorErrorCode | null | undefined>,
		ErrorMessage: FormControl<string | null | undefined>,
		ErrorTimestamp: FormControl<Date | null | undefined>,
	}
	export function CreateResourceErrorFormGroup() {
		return new FormGroup<ResourceErrorFormProperties>({
			ErrorCode: new FormControl<FleetErrorErrorCode | null | undefined>(undefined),
			ErrorMessage: new FormControl<string | null | undefined>(undefined),
			ErrorTimestamp: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Describes an interface VPC endpoint (interface endpoint) that lets you create a private connection between the virtual private cloud (VPC) that you specify and AppStream 2.0. When you specify an interface endpoint for a stack, users of the stack can connect to AppStream 2.0 only through that endpoint. When you specify an interface endpoint for an image builder, administrators can connect to the image builder only through that endpoint. */
	export interface AccessEndpoint {
		EndpointType: AccessEndpointEndpointType;
		VpceId?: string | null;
	}

	/** Describes an interface VPC endpoint (interface endpoint) that lets you create a private connection between the virtual private cloud (VPC) that you specify and AppStream 2.0. When you specify an interface endpoint for a stack, users of the stack can connect to AppStream 2.0 only through that endpoint. When you specify an interface endpoint for an image builder, administrators can connect to the image builder only through that endpoint. */
	export interface AccessEndpointFormProperties {
		EndpointType: FormControl<AccessEndpointEndpointType | null | undefined>,
		VpceId: FormControl<string | null | undefined>,
	}
	export function CreateAccessEndpointFormGroup() {
		return new FormGroup<AccessEndpointFormProperties>({
			EndpointType: new FormControl<AccessEndpointEndpointType | null | undefined>(undefined),
			VpceId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AccessEndpointEndpointType { STREAMING = 0 }

	export interface CreateImageBuilderRequest {
		Name: string;
		ImageName?: string | null;
		ImageArn?: string | null;
		InstanceType: string;
		Description?: string | null;
		DisplayName?: string | null;

		/** Describes VPC configuration information for fleets and image builders. */
		VpcConfig?: VpcConfig;
		IamRoleArn?: string | null;
		EnableDefaultInternetAccess?: boolean | null;

		/** Describes the configuration information required to join fleets and image builders to Microsoft Active Directory domains. */
		DomainJoinInfo?: DomainJoinInfo;
		AppstreamAgentVersion?: string | null;
		Tags?: Tags;
		AccessEndpoints?: Array<AccessEndpoint>;
	}
	export interface CreateImageBuilderRequestFormProperties {
		Name: FormControl<string | null | undefined>,
		ImageName: FormControl<string | null | undefined>,
		ImageArn: FormControl<string | null | undefined>,
		InstanceType: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		DisplayName: FormControl<string | null | undefined>,
		IamRoleArn: FormControl<string | null | undefined>,
		EnableDefaultInternetAccess: FormControl<boolean | null | undefined>,
		AppstreamAgentVersion: FormControl<string | null | undefined>,
	}
	export function CreateCreateImageBuilderRequestFormGroup() {
		return new FormGroup<CreateImageBuilderRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			ImageName: new FormControl<string | null | undefined>(undefined),
			ImageArn: new FormControl<string | null | undefined>(undefined),
			InstanceType: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			DisplayName: new FormControl<string | null | undefined>(undefined),
			IamRoleArn: new FormControl<string | null | undefined>(undefined),
			EnableDefaultInternetAccess: new FormControl<boolean | null | undefined>(undefined),
			AppstreamAgentVersion: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateImageBuilderStreamingURLResult {
		StreamingURL?: string | null;
		Expires?: Date | null;
	}
	export interface CreateImageBuilderStreamingURLResultFormProperties {
		StreamingURL: FormControl<string | null | undefined>,
		Expires: FormControl<Date | null | undefined>,
	}
	export function CreateCreateImageBuilderStreamingURLResultFormGroup() {
		return new FormGroup<CreateImageBuilderStreamingURLResultFormProperties>({
			StreamingURL: new FormControl<string | null | undefined>(undefined),
			Expires: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface CreateImageBuilderStreamingURLRequest {
		Name: string;
		Validity?: number | null;
	}
	export interface CreateImageBuilderStreamingURLRequestFormProperties {
		Name: FormControl<string | null | undefined>,
		Validity: FormControl<number | null | undefined>,
	}
	export function CreateCreateImageBuilderStreamingURLRequestFormGroup() {
		return new FormGroup<CreateImageBuilderStreamingURLRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Validity: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CreateStackResult {

		/** Describes a stack. */
		Stack?: Stack;
	}
	export interface CreateStackResultFormProperties {
	}
	export function CreateCreateStackResultFormGroup() {
		return new FormGroup<CreateStackResultFormProperties>({
		});

	}


	/** Describes a stack. */
	export interface Stack {
		Arn?: string | null;
		Name: string;
		Description?: string | null;
		DisplayName?: string | null;
		CreatedTime?: Date | null;

		/** The storage connectors. */
		StorageConnectors?: Array<StorageConnector>;
		RedirectURL?: string | null;
		FeedbackURL?: string | null;

		/** The stack errors. */
		StackErrors?: Array<StackError>;
		UserSettings?: Array<UserSetting>;

		/** Describes the persistent application settings for users of a stack. */
		ApplicationSettings?: ApplicationSettingsResponse;
		AccessEndpoints?: Array<AccessEndpoint>;
		EmbedHostDomains?: Array<string>;
	}

	/** Describes a stack. */
	export interface StackFormProperties {
		Arn: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		DisplayName: FormControl<string | null | undefined>,
		CreatedTime: FormControl<Date | null | undefined>,
		RedirectURL: FormControl<string | null | undefined>,
		FeedbackURL: FormControl<string | null | undefined>,
	}
	export function CreateStackFormGroup() {
		return new FormGroup<StackFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			DisplayName: new FormControl<string | null | undefined>(undefined),
			CreatedTime: new FormControl<Date | null | undefined>(undefined),
			RedirectURL: new FormControl<string | null | undefined>(undefined),
			FeedbackURL: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes a connector that enables persistent storage for users. */
	export interface StorageConnector {

		/**
		 * The type of storage connector.
		 * Required
		 */
		ConnectorType: StorageConnectorConnectorType;

		/**
		 * The ARN of the resource.
		 * Min length: 1
		 */
		ResourceIdentifier?: string | null;
		Domains?: Array<string>;
	}

	/** Describes a connector that enables persistent storage for users. */
	export interface StorageConnectorFormProperties {

		/**
		 * The type of storage connector.
		 * Required
		 */
		ConnectorType: FormControl<StorageConnectorConnectorType | null | undefined>,

		/**
		 * The ARN of the resource.
		 * Min length: 1
		 */
		ResourceIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateStorageConnectorFormGroup() {
		return new FormGroup<StorageConnectorFormProperties>({
			ConnectorType: new FormControl<StorageConnectorConnectorType | null | undefined>(undefined),
			ResourceIdentifier: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum StorageConnectorConnectorType { HOMEFOLDERS = 0, GOOGLE_DRIVE = 1, ONE_DRIVE = 2 }


	/** Describes a stack error. */
	export interface StackError {
		ErrorCode?: StackErrorErrorCode | null;
		ErrorMessage?: string | null;
	}

	/** Describes a stack error. */
	export interface StackErrorFormProperties {
		ErrorCode: FormControl<StackErrorErrorCode | null | undefined>,
		ErrorMessage: FormControl<string | null | undefined>,
	}
	export function CreateStackErrorFormGroup() {
		return new FormGroup<StackErrorFormProperties>({
			ErrorCode: new FormControl<StackErrorErrorCode | null | undefined>(undefined),
			ErrorMessage: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum StackErrorErrorCode { STORAGE_CONNECTOR_ERROR = 0, INTERNAL_SERVICE_ERROR = 1 }


	/** Describes an action and whether the action is enabled or disabled for users during their streaming sessions. */
	export interface UserSetting {
		Action: UserSettingAction;
		Permission: UserSettingPermission;
	}

	/** Describes an action and whether the action is enabled or disabled for users during their streaming sessions. */
	export interface UserSettingFormProperties {
		Action: FormControl<UserSettingAction | null | undefined>,
		Permission: FormControl<UserSettingPermission | null | undefined>,
	}
	export function CreateUserSettingFormGroup() {
		return new FormGroup<UserSettingFormProperties>({
			Action: new FormControl<UserSettingAction | null | undefined>(undefined),
			Permission: new FormControl<UserSettingPermission | null | undefined>(undefined),
		});

	}

	export enum UserSettingAction { CLIPBOARD_COPY_FROM_LOCAL_DEVICE = 0, CLIPBOARD_COPY_TO_LOCAL_DEVICE = 1, FILE_UPLOAD = 2, FILE_DOWNLOAD = 3, PRINTING_TO_LOCAL_DEVICE = 4 }

	export enum UserSettingPermission { ENABLED = 0, DISABLED = 1 }


	/** Describes the persistent application settings for users of a stack. */
	export interface ApplicationSettingsResponse {
		Enabled?: boolean | null;
		SettingsGroup?: string | null;
		S3BucketName?: string | null;
	}

	/** Describes the persistent application settings for users of a stack. */
	export interface ApplicationSettingsResponseFormProperties {
		Enabled: FormControl<boolean | null | undefined>,
		SettingsGroup: FormControl<string | null | undefined>,
		S3BucketName: FormControl<string | null | undefined>,
	}
	export function CreateApplicationSettingsResponseFormGroup() {
		return new FormGroup<ApplicationSettingsResponseFormProperties>({
			Enabled: new FormControl<boolean | null | undefined>(undefined),
			SettingsGroup: new FormControl<string | null | undefined>(undefined),
			S3BucketName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateStackRequest {
		Name: string;
		Description?: string | null;
		DisplayName?: string | null;

		/** The storage connectors. */
		StorageConnectors?: Array<StorageConnector>;
		RedirectURL?: string | null;
		FeedbackURL?: string | null;
		UserSettings?: Array<UserSetting>;

		/** The persistent application settings for users of a stack. */
		ApplicationSettings?: ApplicationSettings;
		Tags?: Tags;
		AccessEndpoints?: Array<AccessEndpoint>;
		EmbedHostDomains?: Array<string>;
	}
	export interface CreateStackRequestFormProperties {
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		DisplayName: FormControl<string | null | undefined>,
		RedirectURL: FormControl<string | null | undefined>,
		FeedbackURL: FormControl<string | null | undefined>,
	}
	export function CreateCreateStackRequestFormGroup() {
		return new FormGroup<CreateStackRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			DisplayName: new FormControl<string | null | undefined>(undefined),
			RedirectURL: new FormControl<string | null | undefined>(undefined),
			FeedbackURL: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The persistent application settings for users of a stack. */
	export interface ApplicationSettings {
		Enabled: boolean;
		SettingsGroup?: string | null;
	}

	/** The persistent application settings for users of a stack. */
	export interface ApplicationSettingsFormProperties {
		Enabled: FormControl<boolean | null | undefined>,
		SettingsGroup: FormControl<string | null | undefined>,
	}
	export function CreateApplicationSettingsFormGroup() {
		return new FormGroup<ApplicationSettingsFormProperties>({
			Enabled: new FormControl<boolean | null | undefined>(undefined),
			SettingsGroup: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateStreamingURLResult {
		StreamingURL?: string | null;
		Expires?: Date | null;
	}
	export interface CreateStreamingURLResultFormProperties {
		StreamingURL: FormControl<string | null | undefined>,
		Expires: FormControl<Date | null | undefined>,
	}
	export function CreateCreateStreamingURLResultFormGroup() {
		return new FormGroup<CreateStreamingURLResultFormProperties>({
			StreamingURL: new FormControl<string | null | undefined>(undefined),
			Expires: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface CreateStreamingURLRequest {
		StackName: string;
		FleetName: string;
		UserId: string;
		ApplicationId?: string | null;
		Validity?: number | null;
		SessionContext?: string | null;
	}
	export interface CreateStreamingURLRequestFormProperties {
		StackName: FormControl<string | null | undefined>,
		FleetName: FormControl<string | null | undefined>,
		UserId: FormControl<string | null | undefined>,
		ApplicationId: FormControl<string | null | undefined>,
		Validity: FormControl<number | null | undefined>,
		SessionContext: FormControl<string | null | undefined>,
	}
	export function CreateCreateStreamingURLRequestFormGroup() {
		return new FormGroup<CreateStreamingURLRequestFormProperties>({
			StackName: new FormControl<string | null | undefined>(undefined),
			FleetName: new FormControl<string | null | undefined>(undefined),
			UserId: new FormControl<string | null | undefined>(undefined),
			ApplicationId: new FormControl<string | null | undefined>(undefined),
			Validity: new FormControl<number | null | undefined>(undefined),
			SessionContext: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateUsageReportSubscriptionResult {
		S3BucketName?: string | null;
		Schedule?: CreateUsageReportSubscriptionResultSchedule | null;
	}
	export interface CreateUsageReportSubscriptionResultFormProperties {
		S3BucketName: FormControl<string | null | undefined>,
		Schedule: FormControl<CreateUsageReportSubscriptionResultSchedule | null | undefined>,
	}
	export function CreateCreateUsageReportSubscriptionResultFormGroup() {
		return new FormGroup<CreateUsageReportSubscriptionResultFormProperties>({
			S3BucketName: new FormControl<string | null | undefined>(undefined),
			Schedule: new FormControl<CreateUsageReportSubscriptionResultSchedule | null | undefined>(undefined),
		});

	}

	export enum CreateUsageReportSubscriptionResultSchedule { DAILY = 0 }

	export interface CreateUsageReportSubscriptionRequest {
	}
	export interface CreateUsageReportSubscriptionRequestFormProperties {
	}
	export function CreateCreateUsageReportSubscriptionRequestFormGroup() {
		return new FormGroup<CreateUsageReportSubscriptionRequestFormProperties>({
		});

	}

	export interface CreateUserResult {
	}
	export interface CreateUserResultFormProperties {
	}
	export function CreateCreateUserResultFormGroup() {
		return new FormGroup<CreateUserResultFormProperties>({
		});

	}

	export interface CreateUserRequest {
		UserName: string;
		MessageAction?: CreateUserRequestMessageAction | null;
		FirstName?: string | null;
		LastName?: string | null;
		AuthenticationType: UserStackAssociationAuthenticationType;
	}
	export interface CreateUserRequestFormProperties {
		UserName: FormControl<string | null | undefined>,
		MessageAction: FormControl<CreateUserRequestMessageAction | null | undefined>,
		FirstName: FormControl<string | null | undefined>,
		LastName: FormControl<string | null | undefined>,
		AuthenticationType: FormControl<UserStackAssociationAuthenticationType | null | undefined>,
	}
	export function CreateCreateUserRequestFormGroup() {
		return new FormGroup<CreateUserRequestFormProperties>({
			UserName: new FormControl<string | null | undefined>(undefined),
			MessageAction: new FormControl<CreateUserRequestMessageAction | null | undefined>(undefined),
			FirstName: new FormControl<string | null | undefined>(undefined),
			LastName: new FormControl<string | null | undefined>(undefined),
			AuthenticationType: new FormControl<UserStackAssociationAuthenticationType | null | undefined>(undefined),
		});

	}

	export enum CreateUserRequestMessageAction { SUPPRESS = 0, RESEND = 1 }

	export interface DeleteDirectoryConfigResult {
	}
	export interface DeleteDirectoryConfigResultFormProperties {
	}
	export function CreateDeleteDirectoryConfigResultFormGroup() {
		return new FormGroup<DeleteDirectoryConfigResultFormProperties>({
		});

	}

	export interface DeleteDirectoryConfigRequest {
		DirectoryName: string;
	}
	export interface DeleteDirectoryConfigRequestFormProperties {
		DirectoryName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteDirectoryConfigRequestFormGroup() {
		return new FormGroup<DeleteDirectoryConfigRequestFormProperties>({
			DirectoryName: new FormControl<string | null | undefined>(undefined),
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

	export interface DeleteFleetResult {
	}
	export interface DeleteFleetResultFormProperties {
	}
	export function CreateDeleteFleetResultFormGroup() {
		return new FormGroup<DeleteFleetResultFormProperties>({
		});

	}

	export interface DeleteFleetRequest {
		Name: string;
	}
	export interface DeleteFleetRequestFormProperties {
		Name: FormControl<string | null | undefined>,
	}
	export function CreateDeleteFleetRequestFormGroup() {
		return new FormGroup<DeleteFleetRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteImageResult {

		/** Describes an image. */
		Image?: Image;
	}
	export interface DeleteImageResultFormProperties {
	}
	export function CreateDeleteImageResultFormGroup() {
		return new FormGroup<DeleteImageResultFormProperties>({
		});

	}


	/** Describes an image. */
	export interface Image {
		Name: string;
		Arn?: string | null;
		BaseImageArn?: string | null;
		DisplayName?: string | null;
		State?: ImageState | null;
		Visibility?: ImageVisibility | null;
		ImageBuilderSupported?: boolean | null;
		ImageBuilderName?: string | null;
		Platform?: ImageBuilderPlatform | null;
		Description?: string | null;

		/** Describes the reason why the last image state change occurred. */
		StateChangeReason?: ImageStateChangeReason;
		Applications?: Array<Application>;
		CreatedTime?: Date | null;
		PublicBaseImageReleasedDate?: Date | null;
		AppstreamAgentVersion?: string | null;

		/** Describes the permissions for an image. */
		ImagePermissions?: ImagePermissions;
	}

	/** Describes an image. */
	export interface ImageFormProperties {
		Name: FormControl<string | null | undefined>,
		Arn: FormControl<string | null | undefined>,
		BaseImageArn: FormControl<string | null | undefined>,
		DisplayName: FormControl<string | null | undefined>,
		State: FormControl<ImageState | null | undefined>,
		Visibility: FormControl<ImageVisibility | null | undefined>,
		ImageBuilderSupported: FormControl<boolean | null | undefined>,
		ImageBuilderName: FormControl<string | null | undefined>,
		Platform: FormControl<ImageBuilderPlatform | null | undefined>,
		Description: FormControl<string | null | undefined>,
		CreatedTime: FormControl<Date | null | undefined>,
		PublicBaseImageReleasedDate: FormControl<Date | null | undefined>,
		AppstreamAgentVersion: FormControl<string | null | undefined>,
	}
	export function CreateImageFormGroup() {
		return new FormGroup<ImageFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Arn: new FormControl<string | null | undefined>(undefined),
			BaseImageArn: new FormControl<string | null | undefined>(undefined),
			DisplayName: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<ImageState | null | undefined>(undefined),
			Visibility: new FormControl<ImageVisibility | null | undefined>(undefined),
			ImageBuilderSupported: new FormControl<boolean | null | undefined>(undefined),
			ImageBuilderName: new FormControl<string | null | undefined>(undefined),
			Platform: new FormControl<ImageBuilderPlatform | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			CreatedTime: new FormControl<Date | null | undefined>(undefined),
			PublicBaseImageReleasedDate: new FormControl<Date | null | undefined>(undefined),
			AppstreamAgentVersion: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ImageState { PENDING = 0, AVAILABLE = 1, FAILED = 2, COPYING = 3, DELETING = 4 }

	export enum ImageVisibility { PUBLIC = 0, PRIVATE = 1, SHARED = 2 }


	/** Describes the reason why the last image state change occurred. */
	export interface ImageStateChangeReason {
		Code?: ImageStateChangeReasonCode | null;
		Message?: string | null;
	}

	/** Describes the reason why the last image state change occurred. */
	export interface ImageStateChangeReasonFormProperties {
		Code: FormControl<ImageStateChangeReasonCode | null | undefined>,
		Message: FormControl<string | null | undefined>,
	}
	export function CreateImageStateChangeReasonFormGroup() {
		return new FormGroup<ImageStateChangeReasonFormProperties>({
			Code: new FormControl<ImageStateChangeReasonCode | null | undefined>(undefined),
			Message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ImageStateChangeReasonCode { INTERNAL_ERROR = 0, IMAGE_BUILDER_NOT_AVAILABLE = 1, IMAGE_COPY_FAILURE = 2 }


	/** Describes an application in the application catalog. */
	export interface Application {
		Name?: string | null;
		DisplayName?: string | null;
		IconURL?: string | null;
		LaunchPath?: string | null;
		LaunchParameters?: string | null;
		Enabled?: boolean | null;
		Metadata?: Metadata;
	}

	/** Describes an application in the application catalog. */
	export interface ApplicationFormProperties {
		Name: FormControl<string | null | undefined>,
		DisplayName: FormControl<string | null | undefined>,
		IconURL: FormControl<string | null | undefined>,
		LaunchPath: FormControl<string | null | undefined>,
		LaunchParameters: FormControl<string | null | undefined>,
		Enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateApplicationFormGroup() {
		return new FormGroup<ApplicationFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			DisplayName: new FormControl<string | null | undefined>(undefined),
			IconURL: new FormControl<string | null | undefined>(undefined),
			LaunchPath: new FormControl<string | null | undefined>(undefined),
			LaunchParameters: new FormControl<string | null | undefined>(undefined),
			Enabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface Metadata {
	}
	export interface MetadataFormProperties {
	}
	export function CreateMetadataFormGroup() {
		return new FormGroup<MetadataFormProperties>({
		});

	}


	/** Describes the permissions for an image.  */
	export interface ImagePermissions {
		allowFleet?: boolean | null;
		allowImageBuilder?: boolean | null;
	}

	/** Describes the permissions for an image.  */
	export interface ImagePermissionsFormProperties {
		allowFleet: FormControl<boolean | null | undefined>,
		allowImageBuilder: FormControl<boolean | null | undefined>,
	}
	export function CreateImagePermissionsFormGroup() {
		return new FormGroup<ImagePermissionsFormProperties>({
			allowFleet: new FormControl<boolean | null | undefined>(undefined),
			allowImageBuilder: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface DeleteImageRequest {
		Name: string;
	}
	export interface DeleteImageRequestFormProperties {
		Name: FormControl<string | null | undefined>,
	}
	export function CreateDeleteImageRequestFormGroup() {
		return new FormGroup<DeleteImageRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteImageBuilderResult {

		/** Describes a virtual machine that is used to create an image. */
		ImageBuilder?: ImageBuilder;
	}
	export interface DeleteImageBuilderResultFormProperties {
	}
	export function CreateDeleteImageBuilderResultFormGroup() {
		return new FormGroup<DeleteImageBuilderResultFormProperties>({
		});

	}

	export interface DeleteImageBuilderRequest {
		Name: string;
	}
	export interface DeleteImageBuilderRequestFormProperties {
		Name: FormControl<string | null | undefined>,
	}
	export function CreateDeleteImageBuilderRequestFormGroup() {
		return new FormGroup<DeleteImageBuilderRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteImagePermissionsResult {
	}
	export interface DeleteImagePermissionsResultFormProperties {
	}
	export function CreateDeleteImagePermissionsResultFormGroup() {
		return new FormGroup<DeleteImagePermissionsResultFormProperties>({
		});

	}

	export interface DeleteImagePermissionsRequest {
		Name: string;
		SharedAccountId: string;
	}
	export interface DeleteImagePermissionsRequestFormProperties {
		Name: FormControl<string | null | undefined>,
		SharedAccountId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteImagePermissionsRequestFormGroup() {
		return new FormGroup<DeleteImagePermissionsRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			SharedAccountId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteStackResult {
	}
	export interface DeleteStackResultFormProperties {
	}
	export function CreateDeleteStackResultFormGroup() {
		return new FormGroup<DeleteStackResultFormProperties>({
		});

	}

	export interface DeleteStackRequest {
		Name: string;
	}
	export interface DeleteStackRequestFormProperties {
		Name: FormControl<string | null | undefined>,
	}
	export function CreateDeleteStackRequestFormGroup() {
		return new FormGroup<DeleteStackRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteUsageReportSubscriptionResult {
	}
	export interface DeleteUsageReportSubscriptionResultFormProperties {
	}
	export function CreateDeleteUsageReportSubscriptionResultFormGroup() {
		return new FormGroup<DeleteUsageReportSubscriptionResultFormProperties>({
		});

	}

	export interface DeleteUsageReportSubscriptionRequest {
	}
	export interface DeleteUsageReportSubscriptionRequestFormProperties {
	}
	export function CreateDeleteUsageReportSubscriptionRequestFormGroup() {
		return new FormGroup<DeleteUsageReportSubscriptionRequestFormProperties>({
		});

	}

	export interface DeleteUserResult {
	}
	export interface DeleteUserResultFormProperties {
	}
	export function CreateDeleteUserResultFormGroup() {
		return new FormGroup<DeleteUserResultFormProperties>({
		});

	}

	export interface DeleteUserRequest {
		UserName: string;
		AuthenticationType: UserStackAssociationAuthenticationType;
	}
	export interface DeleteUserRequestFormProperties {
		UserName: FormControl<string | null | undefined>,
		AuthenticationType: FormControl<UserStackAssociationAuthenticationType | null | undefined>,
	}
	export function CreateDeleteUserRequestFormGroup() {
		return new FormGroup<DeleteUserRequestFormProperties>({
			UserName: new FormControl<string | null | undefined>(undefined),
			AuthenticationType: new FormControl<UserStackAssociationAuthenticationType | null | undefined>(undefined),
		});

	}

	export interface DescribeDirectoryConfigsResult {
		DirectoryConfigs?: Array<DirectoryConfig>;
		NextToken?: string | null;
	}
	export interface DescribeDirectoryConfigsResultFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeDirectoryConfigsResultFormGroup() {
		return new FormGroup<DescribeDirectoryConfigsResultFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeDirectoryConfigsRequest {
		DirectoryNames?: Array<string>;
		MaxResults?: number | null;
		NextToken?: string | null;
	}
	export interface DescribeDirectoryConfigsRequestFormProperties {
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeDirectoryConfigsRequestFormGroup() {
		return new FormGroup<DescribeDirectoryConfigsRequestFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeFleetsResult {

		/** The fleets. */
		Fleets?: Array<Fleet>;
		NextToken?: string | null;
	}
	export interface DescribeFleetsResultFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeFleetsResultFormGroup() {
		return new FormGroup<DescribeFleetsResultFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeFleetsRequest {
		Names?: Array<string>;
		NextToken?: string | null;
	}
	export interface DescribeFleetsRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeFleetsRequestFormGroup() {
		return new FormGroup<DescribeFleetsRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeImageBuildersResult {
		ImageBuilders?: Array<ImageBuilder>;
		NextToken?: string | null;
	}
	export interface DescribeImageBuildersResultFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeImageBuildersResultFormGroup() {
		return new FormGroup<DescribeImageBuildersResultFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeImageBuildersRequest {
		Names?: Array<string>;
		MaxResults?: number | null;
		NextToken?: string | null;
	}
	export interface DescribeImageBuildersRequestFormProperties {
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeImageBuildersRequestFormGroup() {
		return new FormGroup<DescribeImageBuildersRequestFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeImagePermissionsResult {
		Name?: string | null;
		SharedImagePermissionsList?: Array<SharedImagePermissions>;
		NextToken?: string | null;
	}
	export interface DescribeImagePermissionsResultFormProperties {
		Name: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeImagePermissionsResultFormGroup() {
		return new FormGroup<DescribeImagePermissionsResultFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes the permissions that are available to the specified AWS account for a shared image. */
	export interface SharedImagePermissions {
		sharedAccountId: string;

		/**
		 * Describes the permissions for an image.
		 * Required
		 */
		imagePermissions: ImagePermissions;
	}

	/** Describes the permissions that are available to the specified AWS account for a shared image. */
	export interface SharedImagePermissionsFormProperties {
		sharedAccountId: FormControl<string | null | undefined>,
	}
	export function CreateSharedImagePermissionsFormGroup() {
		return new FormGroup<SharedImagePermissionsFormProperties>({
			sharedAccountId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeImagePermissionsRequest {
		Name: string;
		MaxResults?: number | null;
		SharedAwsAccountIds?: Array<string>;
		NextToken?: string | null;
	}
	export interface DescribeImagePermissionsRequestFormProperties {
		Name: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeImagePermissionsRequestFormGroup() {
		return new FormGroup<DescribeImagePermissionsRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeImagesResult {
		Images?: Array<Image>;
		NextToken?: string | null;
	}
	export interface DescribeImagesResultFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeImagesResultFormGroup() {
		return new FormGroup<DescribeImagesResultFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeImagesRequest {
		Names?: Array<string>;
		Arns?: Array<string>;
		Type?: ImageVisibility | null;
		NextToken?: string | null;
		MaxResults?: number | null;
	}
	export interface DescribeImagesRequestFormProperties {
		Type: FormControl<ImageVisibility | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateDescribeImagesRequestFormGroup() {
		return new FormGroup<DescribeImagesRequestFormProperties>({
			Type: new FormControl<ImageVisibility | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DescribeSessionsResult {

		/** List of sessions. */
		Sessions?: Array<Session>;
		NextToken?: string | null;
	}
	export interface DescribeSessionsResultFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeSessionsResultFormGroup() {
		return new FormGroup<DescribeSessionsResultFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes a streaming session. */
	export interface Session {
		Id: string;
		UserId: string;
		StackName: string;
		FleetName: string;

		/**
		 * Possible values for the state of a streaming session.
		 * Required
		 */
		State: SessionState;
		ConnectionState?: SessionConnectionState | null;
		StartTime?: Date | null;
		MaxExpirationTime?: Date | null;
		AuthenticationType?: UserStackAssociationAuthenticationType | null;

		/** Describes the network details of the fleet or image builder instance. */
		NetworkAccessConfiguration?: NetworkAccessConfiguration;
	}

	/** Describes a streaming session. */
	export interface SessionFormProperties {
		Id: FormControl<string | null | undefined>,
		UserId: FormControl<string | null | undefined>,
		StackName: FormControl<string | null | undefined>,
		FleetName: FormControl<string | null | undefined>,

		/**
		 * Possible values for the state of a streaming session.
		 * Required
		 */
		State: FormControl<SessionState | null | undefined>,
		ConnectionState: FormControl<SessionConnectionState | null | undefined>,
		StartTime: FormControl<Date | null | undefined>,
		MaxExpirationTime: FormControl<Date | null | undefined>,
		AuthenticationType: FormControl<UserStackAssociationAuthenticationType | null | undefined>,
	}
	export function CreateSessionFormGroup() {
		return new FormGroup<SessionFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			UserId: new FormControl<string | null | undefined>(undefined),
			StackName: new FormControl<string | null | undefined>(undefined),
			FleetName: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<SessionState | null | undefined>(undefined),
			ConnectionState: new FormControl<SessionConnectionState | null | undefined>(undefined),
			StartTime: new FormControl<Date | null | undefined>(undefined),
			MaxExpirationTime: new FormControl<Date | null | undefined>(undefined),
			AuthenticationType: new FormControl<UserStackAssociationAuthenticationType | null | undefined>(undefined),
		});

	}

	export enum SessionState { ACTIVE = 0, PENDING = 1, EXPIRED = 2 }

	export enum SessionConnectionState { CONNECTED = 0, NOT_CONNECTED = 1 }

	export interface DescribeSessionsRequest {
		StackName: string;
		FleetName: string;
		UserId?: string | null;
		NextToken?: string | null;
		Limit?: number | null;
		AuthenticationType?: UserStackAssociationAuthenticationType | null;
	}
	export interface DescribeSessionsRequestFormProperties {
		StackName: FormControl<string | null | undefined>,
		FleetName: FormControl<string | null | undefined>,
		UserId: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		Limit: FormControl<number | null | undefined>,
		AuthenticationType: FormControl<UserStackAssociationAuthenticationType | null | undefined>,
	}
	export function CreateDescribeSessionsRequestFormGroup() {
		return new FormGroup<DescribeSessionsRequestFormProperties>({
			StackName: new FormControl<string | null | undefined>(undefined),
			FleetName: new FormControl<string | null | undefined>(undefined),
			UserId: new FormControl<string | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			Limit: new FormControl<number | null | undefined>(undefined),
			AuthenticationType: new FormControl<UserStackAssociationAuthenticationType | null | undefined>(undefined),
		});

	}

	export interface DescribeStacksResult {

		/** The stacks. */
		Stacks?: Array<Stack>;
		NextToken?: string | null;
	}
	export interface DescribeStacksResultFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeStacksResultFormGroup() {
		return new FormGroup<DescribeStacksResultFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeStacksRequest {
		Names?: Array<string>;
		NextToken?: string | null;
	}
	export interface DescribeStacksRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeStacksRequestFormGroup() {
		return new FormGroup<DescribeStacksRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeUsageReportSubscriptionsResult {
		UsageReportSubscriptions?: Array<UsageReportSubscription>;
		NextToken?: string | null;
	}
	export interface DescribeUsageReportSubscriptionsResultFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeUsageReportSubscriptionsResultFormGroup() {
		return new FormGroup<DescribeUsageReportSubscriptionsResultFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes information about the usage report subscription. */
	export interface UsageReportSubscription {
		S3BucketName?: string | null;
		Schedule?: CreateUsageReportSubscriptionResultSchedule | null;
		LastGeneratedReportDate?: Date | null;
		SubscriptionErrors?: Array<LastReportGenerationExecutionError>;
	}

	/** Describes information about the usage report subscription. */
	export interface UsageReportSubscriptionFormProperties {
		S3BucketName: FormControl<string | null | undefined>,
		Schedule: FormControl<CreateUsageReportSubscriptionResultSchedule | null | undefined>,
		LastGeneratedReportDate: FormControl<Date | null | undefined>,
	}
	export function CreateUsageReportSubscriptionFormGroup() {
		return new FormGroup<UsageReportSubscriptionFormProperties>({
			S3BucketName: new FormControl<string | null | undefined>(undefined),
			Schedule: new FormControl<CreateUsageReportSubscriptionResultSchedule | null | undefined>(undefined),
			LastGeneratedReportDate: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Describes the error that is returned when a usage report can't be generated. */
	export interface LastReportGenerationExecutionError {
		ErrorCode?: LastReportGenerationExecutionErrorErrorCode | null;
		ErrorMessage?: string | null;
	}

	/** Describes the error that is returned when a usage report can't be generated. */
	export interface LastReportGenerationExecutionErrorFormProperties {
		ErrorCode: FormControl<LastReportGenerationExecutionErrorErrorCode | null | undefined>,
		ErrorMessage: FormControl<string | null | undefined>,
	}
	export function CreateLastReportGenerationExecutionErrorFormGroup() {
		return new FormGroup<LastReportGenerationExecutionErrorFormProperties>({
			ErrorCode: new FormControl<LastReportGenerationExecutionErrorErrorCode | null | undefined>(undefined),
			ErrorMessage: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum LastReportGenerationExecutionErrorErrorCode { RESOURCE_NOT_FOUND = 0, ACCESS_DENIED = 1, INTERNAL_SERVICE_ERROR = 2 }

	export interface DescribeUsageReportSubscriptionsRequest {
		MaxResults?: number | null;
		NextToken?: string | null;
	}
	export interface DescribeUsageReportSubscriptionsRequestFormProperties {
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeUsageReportSubscriptionsRequestFormGroup() {
		return new FormGroup<DescribeUsageReportSubscriptionsRequestFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeUserStackAssociationsResult {
		UserStackAssociations?: Array<UserStackAssociation>;
		NextToken?: string | null;
	}
	export interface DescribeUserStackAssociationsResultFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeUserStackAssociationsResultFormGroup() {
		return new FormGroup<DescribeUserStackAssociationsResultFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeUserStackAssociationsRequest {
		StackName?: string | null;
		UserName?: string | null;
		AuthenticationType?: UserStackAssociationAuthenticationType | null;
		MaxResults?: number | null;
		NextToken?: string | null;
	}
	export interface DescribeUserStackAssociationsRequestFormProperties {
		StackName: FormControl<string | null | undefined>,
		UserName: FormControl<string | null | undefined>,
		AuthenticationType: FormControl<UserStackAssociationAuthenticationType | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeUserStackAssociationsRequestFormGroup() {
		return new FormGroup<DescribeUserStackAssociationsRequestFormProperties>({
			StackName: new FormControl<string | null | undefined>(undefined),
			UserName: new FormControl<string | null | undefined>(undefined),
			AuthenticationType: new FormControl<UserStackAssociationAuthenticationType | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeUsersResult {
		Users?: Array<User>;
		NextToken?: string | null;
	}
	export interface DescribeUsersResultFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeUsersResultFormGroup() {
		return new FormGroup<DescribeUsersResultFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes a user in the user pool. */
	export interface User {
		Arn?: string | null;
		UserName?: string | null;
		Enabled?: boolean | null;
		Status?: string | null;
		FirstName?: string | null;
		LastName?: string | null;
		CreatedTime?: Date | null;
		AuthenticationType: UserStackAssociationAuthenticationType;
	}

	/** Describes a user in the user pool. */
	export interface UserFormProperties {
		Arn: FormControl<string | null | undefined>,
		UserName: FormControl<string | null | undefined>,
		Enabled: FormControl<boolean | null | undefined>,
		Status: FormControl<string | null | undefined>,
		FirstName: FormControl<string | null | undefined>,
		LastName: FormControl<string | null | undefined>,
		CreatedTime: FormControl<Date | null | undefined>,
		AuthenticationType: FormControl<UserStackAssociationAuthenticationType | null | undefined>,
	}
	export function CreateUserFormGroup() {
		return new FormGroup<UserFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			UserName: new FormControl<string | null | undefined>(undefined),
			Enabled: new FormControl<boolean | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
			FirstName: new FormControl<string | null | undefined>(undefined),
			LastName: new FormControl<string | null | undefined>(undefined),
			CreatedTime: new FormControl<Date | null | undefined>(undefined),
			AuthenticationType: new FormControl<UserStackAssociationAuthenticationType | null | undefined>(undefined),
		});

	}

	export interface DescribeUsersRequest {
		AuthenticationType: UserStackAssociationAuthenticationType;
		MaxResults?: number | null;
		NextToken?: string | null;
	}
	export interface DescribeUsersRequestFormProperties {
		AuthenticationType: FormControl<UserStackAssociationAuthenticationType | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeUsersRequestFormGroup() {
		return new FormGroup<DescribeUsersRequestFormProperties>({
			AuthenticationType: new FormControl<UserStackAssociationAuthenticationType | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DisableUserResult {
	}
	export interface DisableUserResultFormProperties {
	}
	export function CreateDisableUserResultFormGroup() {
		return new FormGroup<DisableUserResultFormProperties>({
		});

	}

	export interface DisableUserRequest {
		UserName: string;
		AuthenticationType: UserStackAssociationAuthenticationType;
	}
	export interface DisableUserRequestFormProperties {
		UserName: FormControl<string | null | undefined>,
		AuthenticationType: FormControl<UserStackAssociationAuthenticationType | null | undefined>,
	}
	export function CreateDisableUserRequestFormGroup() {
		return new FormGroup<DisableUserRequestFormProperties>({
			UserName: new FormControl<string | null | undefined>(undefined),
			AuthenticationType: new FormControl<UserStackAssociationAuthenticationType | null | undefined>(undefined),
		});

	}

	export interface DisassociateFleetResult {
	}
	export interface DisassociateFleetResultFormProperties {
	}
	export function CreateDisassociateFleetResultFormGroup() {
		return new FormGroup<DisassociateFleetResultFormProperties>({
		});

	}

	export interface DisassociateFleetRequest {
		FleetName: string;
		StackName: string;
	}
	export interface DisassociateFleetRequestFormProperties {
		FleetName: FormControl<string | null | undefined>,
		StackName: FormControl<string | null | undefined>,
	}
	export function CreateDisassociateFleetRequestFormGroup() {
		return new FormGroup<DisassociateFleetRequestFormProperties>({
			FleetName: new FormControl<string | null | undefined>(undefined),
			StackName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface EnableUserResult {
	}
	export interface EnableUserResultFormProperties {
	}
	export function CreateEnableUserResultFormGroup() {
		return new FormGroup<EnableUserResultFormProperties>({
		});

	}

	export interface EnableUserRequest {
		UserName: string;
		AuthenticationType: UserStackAssociationAuthenticationType;
	}
	export interface EnableUserRequestFormProperties {
		UserName: FormControl<string | null | undefined>,
		AuthenticationType: FormControl<UserStackAssociationAuthenticationType | null | undefined>,
	}
	export function CreateEnableUserRequestFormGroup() {
		return new FormGroup<EnableUserRequestFormProperties>({
			UserName: new FormControl<string | null | undefined>(undefined),
			AuthenticationType: new FormControl<UserStackAssociationAuthenticationType | null | undefined>(undefined),
		});

	}

	export interface ExpireSessionResult {
	}
	export interface ExpireSessionResultFormProperties {
	}
	export function CreateExpireSessionResultFormGroup() {
		return new FormGroup<ExpireSessionResultFormProperties>({
		});

	}

	export interface ExpireSessionRequest {
		SessionId: string;
	}
	export interface ExpireSessionRequestFormProperties {
		SessionId: FormControl<string | null | undefined>,
	}
	export function CreateExpireSessionRequestFormGroup() {
		return new FormGroup<ExpireSessionRequestFormProperties>({
			SessionId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListAssociatedFleetsResult {
		Names?: Array<string>;
		NextToken?: string | null;
	}
	export interface ListAssociatedFleetsResultFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListAssociatedFleetsResultFormGroup() {
		return new FormGroup<ListAssociatedFleetsResultFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListAssociatedFleetsRequest {
		StackName: string;
		NextToken?: string | null;
	}
	export interface ListAssociatedFleetsRequestFormProperties {
		StackName: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListAssociatedFleetsRequestFormGroup() {
		return new FormGroup<ListAssociatedFleetsRequestFormProperties>({
			StackName: new FormControl<string | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListAssociatedStacksResult {
		Names?: Array<string>;
		NextToken?: string | null;
	}
	export interface ListAssociatedStacksResultFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListAssociatedStacksResultFormGroup() {
		return new FormGroup<ListAssociatedStacksResultFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListAssociatedStacksRequest {
		FleetName: string;
		NextToken?: string | null;
	}
	export interface ListAssociatedStacksRequestFormProperties {
		FleetName: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListAssociatedStacksRequestFormGroup() {
		return new FormGroup<ListAssociatedStacksRequestFormProperties>({
			FleetName: new FormControl<string | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListTagsForResourceResponse {
		Tags?: Tags;
	}
	export interface ListTagsForResourceResponseFormProperties {
	}
	export function CreateListTagsForResourceResponseFormGroup() {
		return new FormGroup<ListTagsForResourceResponseFormProperties>({
		});

	}

	export interface ListTagsForResourceRequest {
		ResourceArn: string;
	}
	export interface ListTagsForResourceRequestFormProperties {
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateListTagsForResourceRequestFormGroup() {
		return new FormGroup<ListTagsForResourceRequestFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StartFleetResult {
	}
	export interface StartFleetResultFormProperties {
	}
	export function CreateStartFleetResultFormGroup() {
		return new FormGroup<StartFleetResultFormProperties>({
		});

	}

	export interface StartFleetRequest {
		Name: string;
	}
	export interface StartFleetRequestFormProperties {
		Name: FormControl<string | null | undefined>,
	}
	export function CreateStartFleetRequestFormGroup() {
		return new FormGroup<StartFleetRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StartImageBuilderResult {

		/** Describes a virtual machine that is used to create an image. */
		ImageBuilder?: ImageBuilder;
	}
	export interface StartImageBuilderResultFormProperties {
	}
	export function CreateStartImageBuilderResultFormGroup() {
		return new FormGroup<StartImageBuilderResultFormProperties>({
		});

	}

	export interface StartImageBuilderRequest {
		Name: string;
		AppstreamAgentVersion?: string | null;
	}
	export interface StartImageBuilderRequestFormProperties {
		Name: FormControl<string | null | undefined>,
		AppstreamAgentVersion: FormControl<string | null | undefined>,
	}
	export function CreateStartImageBuilderRequestFormGroup() {
		return new FormGroup<StartImageBuilderRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			AppstreamAgentVersion: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StopFleetResult {
	}
	export interface StopFleetResultFormProperties {
	}
	export function CreateStopFleetResultFormGroup() {
		return new FormGroup<StopFleetResultFormProperties>({
		});

	}

	export interface StopFleetRequest {
		Name: string;
	}
	export interface StopFleetRequestFormProperties {
		Name: FormControl<string | null | undefined>,
	}
	export function CreateStopFleetRequestFormGroup() {
		return new FormGroup<StopFleetRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StopImageBuilderResult {

		/** Describes a virtual machine that is used to create an image. */
		ImageBuilder?: ImageBuilder;
	}
	export interface StopImageBuilderResultFormProperties {
	}
	export function CreateStopImageBuilderResultFormGroup() {
		return new FormGroup<StopImageBuilderResultFormProperties>({
		});

	}

	export interface StopImageBuilderRequest {
		Name: string;
	}
	export interface StopImageBuilderRequestFormProperties {
		Name: FormControl<string | null | undefined>,
	}
	export function CreateStopImageBuilderRequestFormGroup() {
		return new FormGroup<StopImageBuilderRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
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

	export interface TagResourceRequest {
		ResourceArn: string;
		Tags: Tags;
	}
	export interface TagResourceRequestFormProperties {
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateTagResourceRequestFormGroup() {
		return new FormGroup<TagResourceRequestFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined),
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

	export interface UntagResourceRequest {
		ResourceArn: string;
		TagKeys: Array<string>;
	}
	export interface UntagResourceRequestFormProperties {
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateUntagResourceRequestFormGroup() {
		return new FormGroup<UntagResourceRequestFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateDirectoryConfigResult {

		/** Describes the configuration information required to join fleets and image builders to Microsoft Active Directory domains. */
		DirectoryConfig?: DirectoryConfig;
	}
	export interface UpdateDirectoryConfigResultFormProperties {
	}
	export function CreateUpdateDirectoryConfigResultFormGroup() {
		return new FormGroup<UpdateDirectoryConfigResultFormProperties>({
		});

	}

	export interface UpdateDirectoryConfigRequest {
		DirectoryName: string;
		OrganizationalUnitDistinguishedNames?: Array<string>;

		/** Describes the credentials for the service account used by the fleet or image builder to connect to the directory. */
		ServiceAccountCredentials?: ServiceAccountCredentials;
	}
	export interface UpdateDirectoryConfigRequestFormProperties {
		DirectoryName: FormControl<string | null | undefined>,
	}
	export function CreateUpdateDirectoryConfigRequestFormGroup() {
		return new FormGroup<UpdateDirectoryConfigRequestFormProperties>({
			DirectoryName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateFleetResult {

		/** Describes a fleet. */
		Fleet?: Fleet;
	}
	export interface UpdateFleetResultFormProperties {
	}
	export function CreateUpdateFleetResultFormGroup() {
		return new FormGroup<UpdateFleetResultFormProperties>({
		});

	}

	export interface UpdateFleetRequest {
		ImageName?: string | null;
		ImageArn?: string | null;
		Name?: string | null;
		InstanceType?: string | null;

		/** Describes the capacity for a fleet. */
		ComputeCapacity?: ComputeCapacity;

		/** Describes VPC configuration information for fleets and image builders. */
		VpcConfig?: VpcConfig;
		MaxUserDurationInSeconds?: number | null;
		DisconnectTimeoutInSeconds?: number | null;
		DeleteVpcConfig?: boolean | null;
		Description?: string | null;
		DisplayName?: string | null;
		EnableDefaultInternetAccess?: boolean | null;

		/** Describes the configuration information required to join fleets and image builders to Microsoft Active Directory domains. */
		DomainJoinInfo?: DomainJoinInfo;
		IdleDisconnectTimeoutInSeconds?: number | null;

		/** The fleet attributes. */
		AttributesToDelete?: Array<FleetAttribute>;
		IamRoleArn?: string | null;
	}
	export interface UpdateFleetRequestFormProperties {
		ImageName: FormControl<string | null | undefined>,
		ImageArn: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		InstanceType: FormControl<string | null | undefined>,
		MaxUserDurationInSeconds: FormControl<number | null | undefined>,
		DisconnectTimeoutInSeconds: FormControl<number | null | undefined>,
		DeleteVpcConfig: FormControl<boolean | null | undefined>,
		Description: FormControl<string | null | undefined>,
		DisplayName: FormControl<string | null | undefined>,
		EnableDefaultInternetAccess: FormControl<boolean | null | undefined>,
		IdleDisconnectTimeoutInSeconds: FormControl<number | null | undefined>,
		IamRoleArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateFleetRequestFormGroup() {
		return new FormGroup<UpdateFleetRequestFormProperties>({
			ImageName: new FormControl<string | null | undefined>(undefined),
			ImageArn: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			InstanceType: new FormControl<string | null | undefined>(undefined),
			MaxUserDurationInSeconds: new FormControl<number | null | undefined>(undefined),
			DisconnectTimeoutInSeconds: new FormControl<number | null | undefined>(undefined),
			DeleteVpcConfig: new FormControl<boolean | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			DisplayName: new FormControl<string | null | undefined>(undefined),
			EnableDefaultInternetAccess: new FormControl<boolean | null | undefined>(undefined),
			IdleDisconnectTimeoutInSeconds: new FormControl<number | null | undefined>(undefined),
			IamRoleArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The fleet attribute. */
	export enum FleetAttribute { VPC_CONFIGURATION = 0, VPC_CONFIGURATION_SECURITY_GROUP_IDS = 1, DOMAIN_JOIN_INFO = 2, IAM_ROLE_ARN = 3 }

	export interface UpdateImagePermissionsResult {
	}
	export interface UpdateImagePermissionsResultFormProperties {
	}
	export function CreateUpdateImagePermissionsResultFormGroup() {
		return new FormGroup<UpdateImagePermissionsResultFormProperties>({
		});

	}

	export interface UpdateImagePermissionsRequest {
		Name: string;
		SharedAccountId: string;

		/**
		 * Describes the permissions for an image.
		 * Required
		 */
		ImagePermissions: ImagePermissions;
	}
	export interface UpdateImagePermissionsRequestFormProperties {
		Name: FormControl<string | null | undefined>,
		SharedAccountId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateImagePermissionsRequestFormGroup() {
		return new FormGroup<UpdateImagePermissionsRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			SharedAccountId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateStackResult {

		/** Describes a stack. */
		Stack?: Stack;
	}
	export interface UpdateStackResultFormProperties {
	}
	export function CreateUpdateStackResultFormGroup() {
		return new FormGroup<UpdateStackResultFormProperties>({
		});

	}

	export interface UpdateStackRequest {
		DisplayName?: string | null;
		Description?: string | null;
		Name: string;

		/** The storage connectors. */
		StorageConnectors?: Array<StorageConnector>;
		DeleteStorageConnectors?: boolean | null;
		RedirectURL?: string | null;
		FeedbackURL?: string | null;
		AttributesToDelete?: Array<StackAttribute>;
		UserSettings?: Array<UserSetting>;

		/** The persistent application settings for users of a stack. */
		ApplicationSettings?: ApplicationSettings;
		AccessEndpoints?: Array<AccessEndpoint>;
		EmbedHostDomains?: Array<string>;
	}
	export interface UpdateStackRequestFormProperties {
		DisplayName: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		DeleteStorageConnectors: FormControl<boolean | null | undefined>,
		RedirectURL: FormControl<string | null | undefined>,
		FeedbackURL: FormControl<string | null | undefined>,
	}
	export function CreateUpdateStackRequestFormGroup() {
		return new FormGroup<UpdateStackRequestFormProperties>({
			DisplayName: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			DeleteStorageConnectors: new FormControl<boolean | null | undefined>(undefined),
			RedirectURL: new FormControl<string | null | undefined>(undefined),
			FeedbackURL: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum StackAttribute { STORAGE_CONNECTORS = 0, STORAGE_CONNECTOR_HOMEFOLDERS = 1, STORAGE_CONNECTOR_GOOGLE_DRIVE = 2, STORAGE_CONNECTOR_ONE_DRIVE = 3, REDIRECT_URL = 4, FEEDBACK_URL = 5, THEME_NAME = 6, USER_SETTINGS = 7, EMBED_HOST_DOMAINS = 8, IAM_ROLE_ARN = 9, ACCESS_ENDPOINTS = 10 }

	export enum AccessEndpointType { STREAMING = 0 }

	export enum Action { CLIPBOARD_COPY_FROM_LOCAL_DEVICE = 0, CLIPBOARD_COPY_TO_LOCAL_DEVICE = 1, FILE_UPLOAD = 2, FILE_DOWNLOAD = 3, PRINTING_TO_LOCAL_DEVICE = 4 }

	export enum AuthenticationType { API = 0, SAML = 1, USERPOOL = 2 }

	export enum FleetType { ALWAYS_ON = 0, ON_DEMAND = 1 }

	export enum UsageReportSchedule { DAILY = 0 }

	export enum MessageAction { SUPPRESS = 0, RESEND = 1 }

	export enum VisibilityType { PUBLIC = 0, PRIVATE = 1, SHARED = 2 }

	export enum FleetErrorCode { IAM_SERVICE_ROLE_MISSING_ENI_DESCRIBE_ACTION = 0, IAM_SERVICE_ROLE_MISSING_ENI_CREATE_ACTION = 1, IAM_SERVICE_ROLE_MISSING_ENI_DELETE_ACTION = 2, NETWORK_INTERFACE_LIMIT_EXCEEDED = 3, INTERNAL_SERVICE_ERROR = 4, IAM_SERVICE_ROLE_IS_MISSING = 5, MACHINE_ROLE_IS_MISSING = 6, STS_DISABLED_IN_REGION = 7, SUBNET_HAS_INSUFFICIENT_IP_ADDRESSES = 8, IAM_SERVICE_ROLE_MISSING_DESCRIBE_SUBNET_ACTION = 9, SUBNET_NOT_FOUND = 10, IMAGE_NOT_FOUND = 11, INVALID_SUBNET_CONFIGURATION = 12, SECURITY_GROUPS_NOT_FOUND = 13, IGW_NOT_ATTACHED = 14, IAM_SERVICE_ROLE_MISSING_DESCRIBE_SECURITY_GROUPS_ACTION = 15, DOMAIN_JOIN_ERROR_FILE_NOT_FOUND = 16, DOMAIN_JOIN_ERROR_ACCESS_DENIED = 17, DOMAIN_JOIN_ERROR_LOGON_FAILURE = 18, DOMAIN_JOIN_ERROR_INVALID_PARAMETER = 19, DOMAIN_JOIN_ERROR_MORE_DATA = 20, DOMAIN_JOIN_ERROR_NO_SUCH_DOMAIN = 21, DOMAIN_JOIN_ERROR_NOT_SUPPORTED = 22, DOMAIN_JOIN_NERR_INVALID_WORKGROUP_NAME = 23, DOMAIN_JOIN_NERR_WORKSTATION_NOT_STARTED = 24, DOMAIN_JOIN_ERROR_DS_MACHINE_ACCOUNT_QUOTA_EXCEEDED = 25, DOMAIN_JOIN_NERR_PASSWORD_EXPIRED = 26, DOMAIN_JOIN_INTERNAL_SERVICE_ERROR = 27 }

	export enum PlatformType { WINDOWS = 0, WINDOWS_SERVER_2016 = 1, WINDOWS_SERVER_2019 = 2 }

	export enum UsageReportExecutionErrorCode { RESOURCE_NOT_FOUND = 0, ACCESS_DENIED = 1, INTERNAL_SERVICE_ERROR = 2 }

	export enum Permission { ENABLED = 0, DISABLED = 1 }

	export enum StackErrorCode { STORAGE_CONNECTOR_ERROR = 0, INTERNAL_SERVICE_ERROR = 1 }


	/** The type of storage connector. */
	export enum StorageConnectorType { HOMEFOLDERS = 0, GOOGLE_DRIVE = 1, ONE_DRIVE = 2 }

	export enum UserStackAssociationErrorCode { STACK_NOT_FOUND = 0, USER_NAME_NOT_FOUND = 1, INTERNAL_ERROR = 2 }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Associates the specified fleet with the specified stack.
		 * Post #X-Amz-Target=PhotonAdminProxyService.AssociateFleet
		 * @return {AssociateFleetResult} Success
		 */
		AssociateFleet(requestBody: AssociateFleetRequest): Observable<AssociateFleetResult> {
			return this.http.post<AssociateFleetResult>(this.baseUri + '#X-Amz-Target=PhotonAdminProxyService.AssociateFleet', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Associates the specified users with the specified stacks. Users in a user pool cannot be assigned to stacks with fleets that are joined to an Active Directory domain.
		 * Post #X-Amz-Target=PhotonAdminProxyService.BatchAssociateUserStack
		 * @return {BatchAssociateUserStackResult} Success
		 */
		BatchAssociateUserStack(requestBody: BatchAssociateUserStackRequest): Observable<BatchAssociateUserStackResult> {
			return this.http.post<BatchAssociateUserStackResult>(this.baseUri + '#X-Amz-Target=PhotonAdminProxyService.BatchAssociateUserStack', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Disassociates the specified users from the specified stacks.
		 * Post #X-Amz-Target=PhotonAdminProxyService.BatchDisassociateUserStack
		 * @return {BatchDisassociateUserStackResult} Success
		 */
		BatchDisassociateUserStack(requestBody: BatchDisassociateUserStackRequest): Observable<BatchDisassociateUserStackResult> {
			return this.http.post<BatchDisassociateUserStackResult>(this.baseUri + '#X-Amz-Target=PhotonAdminProxyService.BatchDisassociateUserStack', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Copies the image within the same region or to a new region within the same AWS account. Note that any tags you added to the image will not be copied.
		 * Post #X-Amz-Target=PhotonAdminProxyService.CopyImage
		 * @return {CopyImageResponse} Success
		 */
		CopyImage(requestBody: CopyImageRequest): Observable<CopyImageResponse> {
			return this.http.post<CopyImageResponse>(this.baseUri + '#X-Amz-Target=PhotonAdminProxyService.CopyImage', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a Directory Config object in AppStream 2.0. This object includes the configuration information required to join fleets and image builders to Microsoft Active Directory domains.
		 * Post #X-Amz-Target=PhotonAdminProxyService.CreateDirectoryConfig
		 * @return {CreateDirectoryConfigResult} Success
		 */
		CreateDirectoryConfig(requestBody: CreateDirectoryConfigRequest): Observable<CreateDirectoryConfigResult> {
			return this.http.post<CreateDirectoryConfigResult>(this.baseUri + '#X-Amz-Target=PhotonAdminProxyService.CreateDirectoryConfig', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a fleet. A fleet consists of streaming instances that run a specified image.
		 * Post #X-Amz-Target=PhotonAdminProxyService.CreateFleet
		 * @return {CreateFleetResult} Success
		 */
		CreateFleet(requestBody: CreateFleetRequest): Observable<CreateFleetResult> {
			return this.http.post<CreateFleetResult>(this.baseUri + '#X-Amz-Target=PhotonAdminProxyService.CreateFleet', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates an image builder. An image builder is a virtual machine that is used to create an image.</p> <p>The initial state of the builder is <code>PENDING</code>. When it is ready, the state is <code>RUNNING</code>.</p>
		 * Post #X-Amz-Target=PhotonAdminProxyService.CreateImageBuilder
		 * @return {CreateImageBuilderResult} Success
		 */
		CreateImageBuilder(requestBody: CreateImageBuilderRequest): Observable<CreateImageBuilderResult> {
			return this.http.post<CreateImageBuilderResult>(this.baseUri + '#X-Amz-Target=PhotonAdminProxyService.CreateImageBuilder', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a URL to start an image builder streaming session.
		 * Post #X-Amz-Target=PhotonAdminProxyService.CreateImageBuilderStreamingURL
		 * @return {CreateImageBuilderStreamingURLResult} Success
		 */
		CreateImageBuilderStreamingURL(requestBody: CreateImageBuilderStreamingURLRequest): Observable<CreateImageBuilderStreamingURLResult> {
			return this.http.post<CreateImageBuilderStreamingURLResult>(this.baseUri + '#X-Amz-Target=PhotonAdminProxyService.CreateImageBuilderStreamingURL', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a stack to start streaming applications to users. A stack consists of an associated fleet, user access policies, and storage configurations.
		 * Post #X-Amz-Target=PhotonAdminProxyService.CreateStack
		 * @return {CreateStackResult} Success
		 */
		CreateStack(requestBody: CreateStackRequest): Observable<CreateStackResult> {
			return this.http.post<CreateStackResult>(this.baseUri + '#X-Amz-Target=PhotonAdminProxyService.CreateStack', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a temporary URL to start an AppStream 2.0 streaming session for the specified user. A streaming URL enables application streaming to be tested without user setup.
		 * Post #X-Amz-Target=PhotonAdminProxyService.CreateStreamingURL
		 * @return {CreateStreamingURLResult} Success
		 */
		CreateStreamingURL(requestBody: CreateStreamingURLRequest): Observable<CreateStreamingURLResult> {
			return this.http.post<CreateStreamingURLResult>(this.baseUri + '#X-Amz-Target=PhotonAdminProxyService.CreateStreamingURL', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a usage report subscription. Usage reports are generated daily.
		 * Post #X-Amz-Target=PhotonAdminProxyService.CreateUsageReportSubscription
		 * @return {CreateUsageReportSubscriptionResult} Success
		 */
		CreateUsageReportSubscription(requestBody: CreateUsageReportSubscriptionRequest): Observable<CreateUsageReportSubscriptionResult> {
			return this.http.post<CreateUsageReportSubscriptionResult>(this.baseUri + '#X-Amz-Target=PhotonAdminProxyService.CreateUsageReportSubscription', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a new user in the user pool.
		 * Post #X-Amz-Target=PhotonAdminProxyService.CreateUser
		 * @return {CreateUserResult} Success
		 */
		CreateUser(requestBody: CreateUserRequest): Observable<CreateUserResult> {
			return this.http.post<CreateUserResult>(this.baseUri + '#X-Amz-Target=PhotonAdminProxyService.CreateUser', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the specified Directory Config object from AppStream 2.0. This object includes the information required to join streaming instances to an Active Directory domain.
		 * Post #X-Amz-Target=PhotonAdminProxyService.DeleteDirectoryConfig
		 * @return {DeleteDirectoryConfigResult} Success
		 */
		DeleteDirectoryConfig(requestBody: DeleteDirectoryConfigRequest): Observable<DeleteDirectoryConfigResult> {
			return this.http.post<DeleteDirectoryConfigResult>(this.baseUri + '#X-Amz-Target=PhotonAdminProxyService.DeleteDirectoryConfig', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the specified fleet.
		 * Post #X-Amz-Target=PhotonAdminProxyService.DeleteFleet
		 * @return {DeleteFleetResult} Success
		 */
		DeleteFleet(requestBody: DeleteFleetRequest): Observable<DeleteFleetResult> {
			return this.http.post<DeleteFleetResult>(this.baseUri + '#X-Amz-Target=PhotonAdminProxyService.DeleteFleet', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the specified image. You cannot delete an image when it is in use. After you delete an image, you cannot provision new capacity using the image.
		 * Post #X-Amz-Target=PhotonAdminProxyService.DeleteImage
		 * @return {DeleteImageResult} Success
		 */
		DeleteImage(requestBody: DeleteImageRequest): Observable<DeleteImageResult> {
			return this.http.post<DeleteImageResult>(this.baseUri + '#X-Amz-Target=PhotonAdminProxyService.DeleteImage', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the specified image builder and releases the capacity.
		 * Post #X-Amz-Target=PhotonAdminProxyService.DeleteImageBuilder
		 * @return {DeleteImageBuilderResult} Success
		 */
		DeleteImageBuilder(requestBody: DeleteImageBuilderRequest): Observable<DeleteImageBuilderResult> {
			return this.http.post<DeleteImageBuilderResult>(this.baseUri + '#X-Amz-Target=PhotonAdminProxyService.DeleteImageBuilder', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes permissions for the specified private image. After you delete permissions for an image, AWS accounts to which you previously granted these permissions can no longer use the image.
		 * Post #X-Amz-Target=PhotonAdminProxyService.DeleteImagePermissions
		 * @return {DeleteImagePermissionsResult} Success
		 */
		DeleteImagePermissions(requestBody: DeleteImagePermissionsRequest): Observable<DeleteImagePermissionsResult> {
			return this.http.post<DeleteImagePermissionsResult>(this.baseUri + '#X-Amz-Target=PhotonAdminProxyService.DeleteImagePermissions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the specified stack. After the stack is deleted, the application streaming environment provided by the stack is no longer available to users. Also, any reservations made for application streaming sessions for the stack are released.
		 * Post #X-Amz-Target=PhotonAdminProxyService.DeleteStack
		 * @return {DeleteStackResult} Success
		 */
		DeleteStack(requestBody: DeleteStackRequest): Observable<DeleteStackResult> {
			return this.http.post<DeleteStackResult>(this.baseUri + '#X-Amz-Target=PhotonAdminProxyService.DeleteStack', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Disables usage report generation.
		 * Post #X-Amz-Target=PhotonAdminProxyService.DeleteUsageReportSubscription
		 * @return {DeleteUsageReportSubscriptionResult} Success
		 */
		DeleteUsageReportSubscription(requestBody: DeleteUsageReportSubscriptionRequest): Observable<DeleteUsageReportSubscriptionResult> {
			return this.http.post<DeleteUsageReportSubscriptionResult>(this.baseUri + '#X-Amz-Target=PhotonAdminProxyService.DeleteUsageReportSubscription', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a user from the user pool.
		 * Post #X-Amz-Target=PhotonAdminProxyService.DeleteUser
		 * @return {DeleteUserResult} Success
		 */
		DeleteUser(requestBody: DeleteUserRequest): Observable<DeleteUserResult> {
			return this.http.post<DeleteUserResult>(this.baseUri + '#X-Amz-Target=PhotonAdminProxyService.DeleteUser', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Retrieves a list that describes one or more specified Directory Config objects for AppStream 2.0, if the names for these objects are provided. Otherwise, all Directory Config objects in the account are described. These objects include the configuration information required to join fleets and image builders to Microsoft Active Directory domains. </p> <p>Although the response syntax in this topic includes the account password, this password is not returned in the actual response.</p>
		 * Post #X-Amz-Target=PhotonAdminProxyService.DescribeDirectoryConfigs
		 * @return {DescribeDirectoryConfigsResult} Success
		 */
		DescribeDirectoryConfigs(requestBody: DescribeDirectoryConfigsRequest): Observable<DescribeDirectoryConfigsResult> {
			return this.http.post<DescribeDirectoryConfigsResult>(this.baseUri + '#X-Amz-Target=PhotonAdminProxyService.DescribeDirectoryConfigs', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves a list that describes one or more specified fleets, if the fleet names are provided. Otherwise, all fleets in the account are described.
		 * Post #X-Amz-Target=PhotonAdminProxyService.DescribeFleets
		 * @return {DescribeFleetsResult} Success
		 */
		DescribeFleets(requestBody: DescribeFleetsRequest): Observable<DescribeFleetsResult> {
			return this.http.post<DescribeFleetsResult>(this.baseUri + '#X-Amz-Target=PhotonAdminProxyService.DescribeFleets', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves a list that describes one or more specified image builders, if the image builder names are provided. Otherwise, all image builders in the account are described.
		 * Post #X-Amz-Target=PhotonAdminProxyService.DescribeImageBuilders
		 * @return {DescribeImageBuildersResult} Success
		 */
		DescribeImageBuilders(requestBody: DescribeImageBuildersRequest): Observable<DescribeImageBuildersResult> {
			return this.http.post<DescribeImageBuildersResult>(this.baseUri + '#X-Amz-Target=PhotonAdminProxyService.DescribeImageBuilders', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves a list that describes the permissions for shared AWS account IDs on a private image that you own.
		 * Post #X-Amz-Target=PhotonAdminProxyService.DescribeImagePermissions
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeImagePermissionsResult} Success
		 */
		DescribeImagePermissions(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: DescribeImagePermissionsRequest): Observable<DescribeImagePermissionsResult> {
			return this.http.post<DescribeImagePermissionsResult>(this.baseUri + '#X-Amz-Target=PhotonAdminProxyService.DescribeImagePermissions?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves a list that describes one or more specified images, if the image names or image ARNs are provided. Otherwise, all images in the account are described.
		 * Post #X-Amz-Target=PhotonAdminProxyService.DescribeImages
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeImagesResult} Success
		 */
		DescribeImages(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: DescribeImagesRequest): Observable<DescribeImagesResult> {
			return this.http.post<DescribeImagesResult>(this.baseUri + '#X-Amz-Target=PhotonAdminProxyService.DescribeImages?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves a list that describes the streaming sessions for a specified stack and fleet. If a UserId is provided for the stack and fleet, only streaming sessions for that user are described. If an authentication type is not provided, the default is to authenticate users using a streaming URL.
		 * Post #X-Amz-Target=PhotonAdminProxyService.DescribeSessions
		 * @return {DescribeSessionsResult} Success
		 */
		DescribeSessions(requestBody: DescribeSessionsRequest): Observable<DescribeSessionsResult> {
			return this.http.post<DescribeSessionsResult>(this.baseUri + '#X-Amz-Target=PhotonAdminProxyService.DescribeSessions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves a list that describes one or more specified stacks, if the stack names are provided. Otherwise, all stacks in the account are described.
		 * Post #X-Amz-Target=PhotonAdminProxyService.DescribeStacks
		 * @return {DescribeStacksResult} Success
		 */
		DescribeStacks(requestBody: DescribeStacksRequest): Observable<DescribeStacksResult> {
			return this.http.post<DescribeStacksResult>(this.baseUri + '#X-Amz-Target=PhotonAdminProxyService.DescribeStacks', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves a list that describes one or more usage report subscriptions.
		 * Post #X-Amz-Target=PhotonAdminProxyService.DescribeUsageReportSubscriptions
		 * @return {DescribeUsageReportSubscriptionsResult} Success
		 */
		DescribeUsageReportSubscriptions(requestBody: DescribeUsageReportSubscriptionsRequest): Observable<DescribeUsageReportSubscriptionsResult> {
			return this.http.post<DescribeUsageReportSubscriptionsResult>(this.baseUri + '#X-Amz-Target=PhotonAdminProxyService.DescribeUsageReportSubscriptions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Retrieves a list that describes the UserStackAssociation objects. You must specify either or both of the following:</p> <ul> <li> <p>The stack name</p> </li> <li> <p>The user name (email address of the user associated with the stack) and the authentication type for the user</p> </li> </ul>
		 * Post #X-Amz-Target=PhotonAdminProxyService.DescribeUserStackAssociations
		 * @return {DescribeUserStackAssociationsResult} Success
		 */
		DescribeUserStackAssociations(requestBody: DescribeUserStackAssociationsRequest): Observable<DescribeUserStackAssociationsResult> {
			return this.http.post<DescribeUserStackAssociationsResult>(this.baseUri + '#X-Amz-Target=PhotonAdminProxyService.DescribeUserStackAssociations', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves a list that describes one or more specified users in the user pool.
		 * Post #X-Amz-Target=PhotonAdminProxyService.DescribeUsers
		 * @return {DescribeUsersResult} Success
		 */
		DescribeUsers(requestBody: DescribeUsersRequest): Observable<DescribeUsersResult> {
			return this.http.post<DescribeUsersResult>(this.baseUri + '#X-Amz-Target=PhotonAdminProxyService.DescribeUsers', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Disables the specified user in the user pool. Users can't sign in to AppStream 2.0 until they are re-enabled. This action does not delete the user.
		 * Post #X-Amz-Target=PhotonAdminProxyService.DisableUser
		 * @return {DisableUserResult} Success
		 */
		DisableUser(requestBody: DisableUserRequest): Observable<DisableUserResult> {
			return this.http.post<DisableUserResult>(this.baseUri + '#X-Amz-Target=PhotonAdminProxyService.DisableUser', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Disassociates the specified fleet from the specified stack.
		 * Post #X-Amz-Target=PhotonAdminProxyService.DisassociateFleet
		 * @return {DisassociateFleetResult} Success
		 */
		DisassociateFleet(requestBody: DisassociateFleetRequest): Observable<DisassociateFleetResult> {
			return this.http.post<DisassociateFleetResult>(this.baseUri + '#X-Amz-Target=PhotonAdminProxyService.DisassociateFleet', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Enables a user in the user pool. After being enabled, users can sign in to AppStream 2.0 and open applications from the stacks to which they are assigned.
		 * Post #X-Amz-Target=PhotonAdminProxyService.EnableUser
		 * @return {EnableUserResult} Success
		 */
		EnableUser(requestBody: EnableUserRequest): Observable<EnableUserResult> {
			return this.http.post<EnableUserResult>(this.baseUri + '#X-Amz-Target=PhotonAdminProxyService.EnableUser', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Immediately stops the specified streaming session.
		 * Post #X-Amz-Target=PhotonAdminProxyService.ExpireSession
		 * @return {ExpireSessionResult} Success
		 */
		ExpireSession(requestBody: ExpireSessionRequest): Observable<ExpireSessionResult> {
			return this.http.post<ExpireSessionResult>(this.baseUri + '#X-Amz-Target=PhotonAdminProxyService.ExpireSession', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves the name of the fleet that is associated with the specified stack.
		 * Post #X-Amz-Target=PhotonAdminProxyService.ListAssociatedFleets
		 * @return {ListAssociatedFleetsResult} Success
		 */
		ListAssociatedFleets(requestBody: ListAssociatedFleetsRequest): Observable<ListAssociatedFleetsResult> {
			return this.http.post<ListAssociatedFleetsResult>(this.baseUri + '#X-Amz-Target=PhotonAdminProxyService.ListAssociatedFleets', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves the name of the stack with which the specified fleet is associated.
		 * Post #X-Amz-Target=PhotonAdminProxyService.ListAssociatedStacks
		 * @return {ListAssociatedStacksResult} Success
		 */
		ListAssociatedStacks(requestBody: ListAssociatedStacksRequest): Observable<ListAssociatedStacksResult> {
			return this.http.post<ListAssociatedStacksResult>(this.baseUri + '#X-Amz-Target=PhotonAdminProxyService.ListAssociatedStacks', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Retrieves a list of all tags for the specified AppStream 2.0 resource. You can tag AppStream 2.0 image builders, images, fleets, and stacks.</p> <p>For more information about tags, see <a href="https://docs.aws.amazon.com/appstream2/latest/developerguide/tagging-basic.html">Tagging Your Resources</a> in the <i>Amazon AppStream 2.0 Administration Guide</i>.</p>
		 * Post #X-Amz-Target=PhotonAdminProxyService.ListTagsForResource
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(requestBody: ListTagsForResourceRequest): Observable<ListTagsForResourceResponse> {
			return this.http.post<ListTagsForResourceResponse>(this.baseUri + '#X-Amz-Target=PhotonAdminProxyService.ListTagsForResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Starts the specified fleet.
		 * Post #X-Amz-Target=PhotonAdminProxyService.StartFleet
		 * @return {StartFleetResult} Success
		 */
		StartFleet(requestBody: StartFleetRequest): Observable<StartFleetResult> {
			return this.http.post<StartFleetResult>(this.baseUri + '#X-Amz-Target=PhotonAdminProxyService.StartFleet', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Starts the specified image builder.
		 * Post #X-Amz-Target=PhotonAdminProxyService.StartImageBuilder
		 * @return {StartImageBuilderResult} Success
		 */
		StartImageBuilder(requestBody: StartImageBuilderRequest): Observable<StartImageBuilderResult> {
			return this.http.post<StartImageBuilderResult>(this.baseUri + '#X-Amz-Target=PhotonAdminProxyService.StartImageBuilder', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Stops the specified fleet.
		 * Post #X-Amz-Target=PhotonAdminProxyService.StopFleet
		 * @return {StopFleetResult} Success
		 */
		StopFleet(requestBody: StopFleetRequest): Observable<StopFleetResult> {
			return this.http.post<StopFleetResult>(this.baseUri + '#X-Amz-Target=PhotonAdminProxyService.StopFleet', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Stops the specified image builder.
		 * Post #X-Amz-Target=PhotonAdminProxyService.StopImageBuilder
		 * @return {StopImageBuilderResult} Success
		 */
		StopImageBuilder(requestBody: StopImageBuilderRequest): Observable<StopImageBuilderResult> {
			return this.http.post<StopImageBuilderResult>(this.baseUri + '#X-Amz-Target=PhotonAdminProxyService.StopImageBuilder', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Adds or overwrites one or more tags for the specified AppStream 2.0 resource. You can tag AppStream 2.0 image builders, images, fleets, and stacks.</p> <p>Each tag consists of a key and an optional value. If a resource already has a tag with the same key, this operation updates its value.</p> <p>To list the current tags for your resources, use <a>ListTagsForResource</a>. To disassociate tags from your resources, use <a>UntagResource</a>.</p> <p>For more information about tags, see <a href="https://docs.aws.amazon.com/appstream2/latest/developerguide/tagging-basic.html">Tagging Your Resources</a> in the <i>Amazon AppStream 2.0 Administration Guide</i>.</p>
		 * Post #X-Amz-Target=PhotonAdminProxyService.TagResource
		 * @return {TagResourceResponse} Success
		 */
		TagResource(requestBody: TagResourceRequest): Observable<TagResourceResponse> {
			return this.http.post<TagResourceResponse>(this.baseUri + '#X-Amz-Target=PhotonAdminProxyService.TagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Disassociates one or more specified tags from the specified AppStream 2.0 resource.</p> <p>To list the current tags for your resources, use <a>ListTagsForResource</a>.</p> <p>For more information about tags, see <a href="https://docs.aws.amazon.com/appstream2/latest/developerguide/tagging-basic.html">Tagging Your Resources</a> in the <i>Amazon AppStream 2.0 Administration Guide</i>.</p>
		 * Post #X-Amz-Target=PhotonAdminProxyService.UntagResource
		 * @return {UntagResourceResponse} Success
		 */
		UntagResource(requestBody: UntagResourceRequest): Observable<UntagResourceResponse> {
			return this.http.post<UntagResourceResponse>(this.baseUri + '#X-Amz-Target=PhotonAdminProxyService.UntagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates the specified Directory Config object in AppStream 2.0. This object includes the configuration information required to join fleets and image builders to Microsoft Active Directory domains.
		 * Post #X-Amz-Target=PhotonAdminProxyService.UpdateDirectoryConfig
		 * @return {UpdateDirectoryConfigResult} Success
		 */
		UpdateDirectoryConfig(requestBody: UpdateDirectoryConfigRequest): Observable<UpdateDirectoryConfigResult> {
			return this.http.post<UpdateDirectoryConfigResult>(this.baseUri + '#X-Amz-Target=PhotonAdminProxyService.UpdateDirectoryConfig', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Updates the specified fleet.</p> <p>If the fleet is in the <code>STOPPED</code> state, you can update any attribute except the fleet name. If the fleet is in the <code>RUNNING</code> state, you can update the <code>DisplayName</code>, <code>ComputeCapacity</code>, <code>ImageARN</code>, <code>ImageName</code>, <code>IdleDisconnectTimeoutInSeconds</code>, and <code>DisconnectTimeoutInSeconds</code> attributes. If the fleet is in the <code>STARTING</code> or <code>STOPPING</code> state, you can't update it.</p>
		 * Post #X-Amz-Target=PhotonAdminProxyService.UpdateFleet
		 * @return {UpdateFleetResult} Success
		 */
		UpdateFleet(requestBody: UpdateFleetRequest): Observable<UpdateFleetResult> {
			return this.http.post<UpdateFleetResult>(this.baseUri + '#X-Amz-Target=PhotonAdminProxyService.UpdateFleet', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Adds or updates permissions for the specified private image.
		 * Post #X-Amz-Target=PhotonAdminProxyService.UpdateImagePermissions
		 * @return {UpdateImagePermissionsResult} Success
		 */
		UpdateImagePermissions(requestBody: UpdateImagePermissionsRequest): Observable<UpdateImagePermissionsResult> {
			return this.http.post<UpdateImagePermissionsResult>(this.baseUri + '#X-Amz-Target=PhotonAdminProxyService.UpdateImagePermissions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates the specified fields for the specified stack.
		 * Post #X-Amz-Target=PhotonAdminProxyService.UpdateStack
		 * @return {UpdateStackResult} Success
		 */
		UpdateStack(requestBody: UpdateStackRequest): Observable<UpdateStackResult> {
			return this.http.post<UpdateStackResult>(this.baseUri + '#X-Amz-Target=PhotonAdminProxyService.UpdateStack', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum AssociateFleetX_Amz_Target { PhotonAdminProxyService_AssociateFleet = 0 }

	export enum BatchAssociateUserStackX_Amz_Target { PhotonAdminProxyService_BatchAssociateUserStack = 0 }

	export enum BatchDisassociateUserStackX_Amz_Target { PhotonAdminProxyService_BatchDisassociateUserStack = 0 }

	export enum CopyImageX_Amz_Target { PhotonAdminProxyService_CopyImage = 0 }

	export enum CreateDirectoryConfigX_Amz_Target { PhotonAdminProxyService_CreateDirectoryConfig = 0 }

	export enum CreateFleetX_Amz_Target { PhotonAdminProxyService_CreateFleet = 0 }

	export enum CreateImageBuilderX_Amz_Target { PhotonAdminProxyService_CreateImageBuilder = 0 }

	export enum CreateImageBuilderStreamingURLX_Amz_Target { PhotonAdminProxyService_CreateImageBuilderStreamingURL = 0 }

	export enum CreateStackX_Amz_Target { PhotonAdminProxyService_CreateStack = 0 }

	export enum CreateStreamingURLX_Amz_Target { PhotonAdminProxyService_CreateStreamingURL = 0 }

	export enum CreateUsageReportSubscriptionX_Amz_Target { PhotonAdminProxyService_CreateUsageReportSubscription = 0 }

	export enum CreateUserX_Amz_Target { PhotonAdminProxyService_CreateUser = 0 }

	export enum DeleteDirectoryConfigX_Amz_Target { PhotonAdminProxyService_DeleteDirectoryConfig = 0 }

	export enum DeleteFleetX_Amz_Target { PhotonAdminProxyService_DeleteFleet = 0 }

	export enum DeleteImageX_Amz_Target { PhotonAdminProxyService_DeleteImage = 0 }

	export enum DeleteImageBuilderX_Amz_Target { PhotonAdminProxyService_DeleteImageBuilder = 0 }

	export enum DeleteImagePermissionsX_Amz_Target { PhotonAdminProxyService_DeleteImagePermissions = 0 }

	export enum DeleteStackX_Amz_Target { PhotonAdminProxyService_DeleteStack = 0 }

	export enum DeleteUsageReportSubscriptionX_Amz_Target { PhotonAdminProxyService_DeleteUsageReportSubscription = 0 }

	export enum DeleteUserX_Amz_Target { PhotonAdminProxyService_DeleteUser = 0 }

	export enum DescribeDirectoryConfigsX_Amz_Target { PhotonAdminProxyService_DescribeDirectoryConfigs = 0 }

	export enum DescribeFleetsX_Amz_Target { PhotonAdminProxyService_DescribeFleets = 0 }

	export enum DescribeImageBuildersX_Amz_Target { PhotonAdminProxyService_DescribeImageBuilders = 0 }

	export enum DescribeImagePermissionsX_Amz_Target { PhotonAdminProxyService_DescribeImagePermissions = 0 }

	export enum DescribeImagesX_Amz_Target { PhotonAdminProxyService_DescribeImages = 0 }

	export enum DescribeSessionsX_Amz_Target { PhotonAdminProxyService_DescribeSessions = 0 }

	export enum DescribeStacksX_Amz_Target { PhotonAdminProxyService_DescribeStacks = 0 }

	export enum DescribeUsageReportSubscriptionsX_Amz_Target { PhotonAdminProxyService_DescribeUsageReportSubscriptions = 0 }

	export enum DescribeUserStackAssociationsX_Amz_Target { PhotonAdminProxyService_DescribeUserStackAssociations = 0 }

	export enum DescribeUsersX_Amz_Target { PhotonAdminProxyService_DescribeUsers = 0 }

	export enum DisableUserX_Amz_Target { PhotonAdminProxyService_DisableUser = 0 }

	export enum DisassociateFleetX_Amz_Target { PhotonAdminProxyService_DisassociateFleet = 0 }

	export enum EnableUserX_Amz_Target { PhotonAdminProxyService_EnableUser = 0 }

	export enum ExpireSessionX_Amz_Target { PhotonAdminProxyService_ExpireSession = 0 }

	export enum ListAssociatedFleetsX_Amz_Target { PhotonAdminProxyService_ListAssociatedFleets = 0 }

	export enum ListAssociatedStacksX_Amz_Target { PhotonAdminProxyService_ListAssociatedStacks = 0 }

	export enum ListTagsForResourceX_Amz_Target { PhotonAdminProxyService_ListTagsForResource = 0 }

	export enum StartFleetX_Amz_Target { PhotonAdminProxyService_StartFleet = 0 }

	export enum StartImageBuilderX_Amz_Target { PhotonAdminProxyService_StartImageBuilder = 0 }

	export enum StopFleetX_Amz_Target { PhotonAdminProxyService_StopFleet = 0 }

	export enum StopImageBuilderX_Amz_Target { PhotonAdminProxyService_StopImageBuilder = 0 }

	export enum TagResourceX_Amz_Target { PhotonAdminProxyService_TagResource = 0 }

	export enum UntagResourceX_Amz_Target { PhotonAdminProxyService_UntagResource = 0 }

	export enum UpdateDirectoryConfigX_Amz_Target { PhotonAdminProxyService_UpdateDirectoryConfig = 0 }

	export enum UpdateFleetX_Amz_Target { PhotonAdminProxyService_UpdateFleet = 0 }

	export enum UpdateImagePermissionsX_Amz_Target { PhotonAdminProxyService_UpdateImagePermissions = 0 }

	export enum UpdateStackX_Amz_Target { PhotonAdminProxyService_UpdateStack = 0 }

}

