import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface AssociateAppBlockBuilderAppBlockResult {
		AppBlockBuilderAppBlockAssociation?: AppBlockBuilderAppBlockAssociation;
	}
	export interface AssociateAppBlockBuilderAppBlockResultFormProperties {
	}
	export function CreateAssociateAppBlockBuilderAppBlockResultFormGroup() {
		return new FormGroup<AssociateAppBlockBuilderAppBlockResultFormProperties>({
		});

	}


	/** Describes an association between an app block builder and app block. */
	export interface AppBlockBuilderAppBlockAssociation {

		/** Required */
		AppBlockArn: string;

		/** Required */
		AppBlockBuilderName: string;
	}

	/** Describes an association between an app block builder and app block. */
	export interface AppBlockBuilderAppBlockAssociationFormProperties {

		/** Required */
		AppBlockArn: FormControl<string | null | undefined>,

		/** Required */
		AppBlockBuilderName: FormControl<string | null | undefined>,
	}
	export function CreateAppBlockBuilderAppBlockAssociationFormGroup() {
		return new FormGroup<AppBlockBuilderAppBlockAssociationFormProperties>({
			AppBlockArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			AppBlockBuilderName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AssociateAppBlockBuilderAppBlockRequest {

		/** Required */
		AppBlockArn: string;

		/** Required */
		AppBlockBuilderName: string;
	}
	export interface AssociateAppBlockBuilderAppBlockRequestFormProperties {

		/** Required */
		AppBlockArn: FormControl<string | null | undefined>,

		/** Required */
		AppBlockBuilderName: FormControl<string | null | undefined>,
	}
	export function CreateAssociateAppBlockBuilderAppBlockRequestFormGroup() {
		return new FormGroup<AssociateAppBlockBuilderAppBlockRequestFormProperties>({
			AppBlockArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			AppBlockBuilderName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

	export interface LimitExceededException {
	}
	export interface LimitExceededExceptionFormProperties {
	}
	export function CreateLimitExceededExceptionFormGroup() {
		return new FormGroup<LimitExceededExceptionFormProperties>({
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

	export interface InvalidParameterCombinationException {
	}
	export interface InvalidParameterCombinationExceptionFormProperties {
	}
	export function CreateInvalidParameterCombinationExceptionFormGroup() {
		return new FormGroup<InvalidParameterCombinationExceptionFormProperties>({
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

	export interface AssociateApplicationFleetResult {
		ApplicationFleetAssociation?: ApplicationFleetAssociation;
	}
	export interface AssociateApplicationFleetResultFormProperties {
	}
	export function CreateAssociateApplicationFleetResultFormGroup() {
		return new FormGroup<AssociateApplicationFleetResultFormProperties>({
		});

	}


	/** Describes the application fleet association. */
	export interface ApplicationFleetAssociation {

		/** Required */
		FleetName: string;

		/** Required */
		ApplicationArn: string;
	}

	/** Describes the application fleet association. */
	export interface ApplicationFleetAssociationFormProperties {

		/** Required */
		FleetName: FormControl<string | null | undefined>,

		/** Required */
		ApplicationArn: FormControl<string | null | undefined>,
	}
	export function CreateApplicationFleetAssociationFormGroup() {
		return new FormGroup<ApplicationFleetAssociationFormProperties>({
			FleetName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ApplicationArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AssociateApplicationFleetRequest {

		/** Required */
		FleetName: string;

		/** Required */
		ApplicationArn: string;
	}
	export interface AssociateApplicationFleetRequestFormProperties {

		/** Required */
		FleetName: FormControl<string | null | undefined>,

		/** Required */
		ApplicationArn: FormControl<string | null | undefined>,
	}
	export function CreateAssociateApplicationFleetRequestFormGroup() {
		return new FormGroup<AssociateApplicationFleetRequestFormProperties>({
			FleetName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ApplicationArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AssociateApplicationToEntitlementResult {
	}
	export interface AssociateApplicationToEntitlementResultFormProperties {
	}
	export function CreateAssociateApplicationToEntitlementResultFormGroup() {
		return new FormGroup<AssociateApplicationToEntitlementResultFormProperties>({
		});

	}

	export interface AssociateApplicationToEntitlementRequest {

		/** Required */
		StackName: string;

		/** Required */
		EntitlementName: string;

		/** Required */
		ApplicationIdentifier: string;
	}
	export interface AssociateApplicationToEntitlementRequestFormProperties {

		/** Required */
		StackName: FormControl<string | null | undefined>,

		/** Required */
		EntitlementName: FormControl<string | null | undefined>,

		/** Required */
		ApplicationIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateAssociateApplicationToEntitlementRequestFormGroup() {
		return new FormGroup<AssociateApplicationToEntitlementRequestFormProperties>({
			StackName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			EntitlementName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ApplicationIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface EntitlementNotFoundException {
	}
	export interface EntitlementNotFoundExceptionFormProperties {
	}
	export function CreateEntitlementNotFoundExceptionFormGroup() {
		return new FormGroup<EntitlementNotFoundExceptionFormProperties>({
		});

	}

	export interface AssociateFleetResult {
	}
	export interface AssociateFleetResultFormProperties {
	}
	export function CreateAssociateFleetResultFormGroup() {
		return new FormGroup<AssociateFleetResultFormProperties>({
		});

	}

	export interface AssociateFleetRequest {

		/** Required */
		FleetName: string;

		/** Required */
		StackName: string;
	}
	export interface AssociateFleetRequestFormProperties {

		/** Required */
		FleetName: FormControl<string | null | undefined>,

		/** Required */
		StackName: FormControl<string | null | undefined>,
	}
	export function CreateAssociateFleetRequestFormGroup() {
		return new FormGroup<AssociateFleetRequestFormProperties>({
			FleetName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			StackName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

	export interface IncompatibleImageException {
	}
	export interface IncompatibleImageExceptionFormProperties {
	}
	export function CreateIncompatibleImageExceptionFormGroup() {
		return new FormGroup<IncompatibleImageExceptionFormProperties>({
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
		UserStackAssociation?: UserStackAssociation;
		ErrorCode?: UserStackAssociationErrorCode;
		ErrorMessage?: string;
	}

	/** Describes the error that is returned when a user can’t be associated with or disassociated from a stack.  */
	export interface UserStackAssociationErrorFormProperties {
		ErrorCode: FormControl<UserStackAssociationErrorCode | null | undefined>,
		ErrorMessage: FormControl<string | null | undefined>,
	}
	export function CreateUserStackAssociationErrorFormGroup() {
		return new FormGroup<UserStackAssociationErrorFormProperties>({
			ErrorCode: new FormControl<UserStackAssociationErrorCode | null | undefined>(undefined),
			ErrorMessage: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes a user in the user pool and the associated stack. */
	export interface UserStackAssociation {

		/** Required */
		StackName: string;

		/** Required */
		UserName: string;

		/** Required */
		AuthenticationType: AuthenticationType;
		SendEmailNotification?: boolean | null;
	}

	/** Describes a user in the user pool and the associated stack. */
	export interface UserStackAssociationFormProperties {

		/** Required */
		StackName: FormControl<string | null | undefined>,

		/** Required */
		UserName: FormControl<string | null | undefined>,

		/** Required */
		AuthenticationType: FormControl<AuthenticationType | null | undefined>,
		SendEmailNotification: FormControl<boolean | null | undefined>,
	}
	export function CreateUserStackAssociationFormGroup() {
		return new FormGroup<UserStackAssociationFormProperties>({
			StackName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			UserName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			AuthenticationType: new FormControl<AuthenticationType | null | undefined>(undefined, [Validators.required]),
			SendEmailNotification: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum AuthenticationType { API = 'API', SAML = 'SAML', USERPOOL = 'USERPOOL', AWS_AD = 'AWS_AD' }

	export enum UserStackAssociationErrorCode { STACK_NOT_FOUND = 'STACK_NOT_FOUND', USER_NAME_NOT_FOUND = 'USER_NAME_NOT_FOUND', DIRECTORY_NOT_FOUND = 'DIRECTORY_NOT_FOUND', INTERNAL_ERROR = 'INTERNAL_ERROR' }

	export interface BatchAssociateUserStackRequest {

		/** Required */
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

		/** Required */
		UserStackAssociations: Array<UserStackAssociation>;
	}
	export interface BatchDisassociateUserStackRequestFormProperties {
	}
	export function CreateBatchDisassociateUserStackRequestFormGroup() {
		return new FormGroup<BatchDisassociateUserStackRequestFormProperties>({
		});

	}

	export interface CopyImageResponse {
		DestinationImageName?: string;
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

		/** Required */
		SourceImageName: string;

		/** Required */
		DestinationImageName: string;

		/** Required */
		DestinationRegion: string;
		DestinationImageDescription?: string;
	}
	export interface CopyImageRequestFormProperties {

		/** Required */
		SourceImageName: FormControl<string | null | undefined>,

		/** Required */
		DestinationImageName: FormControl<string | null | undefined>,

		/** Required */
		DestinationRegion: FormControl<string | null | undefined>,
		DestinationImageDescription: FormControl<string | null | undefined>,
	}
	export function CreateCopyImageRequestFormGroup() {
		return new FormGroup<CopyImageRequestFormProperties>({
			SourceImageName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DestinationImageName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DestinationRegion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

	export interface CreateAppBlockResult {
		AppBlock?: AppBlock;
	}
	export interface CreateAppBlockResultFormProperties {
	}
	export function CreateCreateAppBlockResultFormGroup() {
		return new FormGroup<CreateAppBlockResultFormProperties>({
		});

	}


	/** <p>Describes an app block.</p> <p>App blocks are an Amazon AppStream 2.0 resource that stores the details about the virtual hard disk in an S3 bucket. It also stores the setup script with details about how to mount the virtual hard disk. The virtual hard disk includes the application binaries and other files necessary to launch your applications. Multiple applications can be assigned to a single app block.</p> <p>This is only supported for Elastic fleets.</p> */
	export interface AppBlock {

		/** Required */
		Name: string;

		/** Required */
		Arn: string;
		Description?: string;
		DisplayName?: string;
		SourceS3Location?: S3Location;
		SetupScriptDetails?: ScriptDetails;
		CreatedTime?: Date;
		PostSetupScriptDetails?: ScriptDetails;
		PackagingType?: PackagingType;
		State?: AppBlockState;
		AppBlockErrors?: Array<ErrorDetails>;
	}

	/** <p>Describes an app block.</p> <p>App blocks are an Amazon AppStream 2.0 resource that stores the details about the virtual hard disk in an S3 bucket. It also stores the setup script with details about how to mount the virtual hard disk. The virtual hard disk includes the application binaries and other files necessary to launch your applications. Multiple applications can be assigned to a single app block.</p> <p>This is only supported for Elastic fleets.</p> */
	export interface AppBlockFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		Arn: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		DisplayName: FormControl<string | null | undefined>,
		CreatedTime: FormControl<Date | null | undefined>,
		PackagingType: FormControl<PackagingType | null | undefined>,
		State: FormControl<AppBlockState | null | undefined>,
	}
	export function CreateAppBlockFormGroup() {
		return new FormGroup<AppBlockFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
			DisplayName: new FormControl<string | null | undefined>(undefined),
			CreatedTime: new FormControl<Date | null | undefined>(undefined),
			PackagingType: new FormControl<PackagingType | null | undefined>(undefined),
			State: new FormControl<AppBlockState | null | undefined>(undefined),
		});

	}


	/** Describes the S3 location. */
	export interface S3Location {

		/** Required */
		S3Bucket: string;
		S3Key?: string;
	}

	/** Describes the S3 location. */
	export interface S3LocationFormProperties {

		/** Required */
		S3Bucket: FormControl<string | null | undefined>,
		S3Key: FormControl<string | null | undefined>,
	}
	export function CreateS3LocationFormGroup() {
		return new FormGroup<S3LocationFormProperties>({
			S3Bucket: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			S3Key: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes the details of the script. */
	export interface ScriptDetails {

		/** Required */
		ScriptS3Location: S3Location;

		/** Required */
		ExecutablePath: string;
		ExecutableParameters?: string;

		/** Required */
		TimeoutInSeconds: number;
	}

	/** Describes the details of the script. */
	export interface ScriptDetailsFormProperties {

		/** Required */
		ExecutablePath: FormControl<string | null | undefined>,
		ExecutableParameters: FormControl<string | null | undefined>,

		/** Required */
		TimeoutInSeconds: FormControl<number | null | undefined>,
	}
	export function CreateScriptDetailsFormGroup() {
		return new FormGroup<ScriptDetailsFormProperties>({
			ExecutablePath: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ExecutableParameters: new FormControl<string | null | undefined>(undefined),
			TimeoutInSeconds: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum PackagingType { CUSTOM = 'CUSTOM', APPSTREAM2 = 'APPSTREAM2' }

	export enum AppBlockState { INACTIVE = 'INACTIVE', ACTIVE = 'ACTIVE' }


	/** The error details. */
	export interface ErrorDetails {
		ErrorCode?: string;
		ErrorMessage?: string;
	}

	/** The error details. */
	export interface ErrorDetailsFormProperties {
		ErrorCode: FormControl<string | null | undefined>,
		ErrorMessage: FormControl<string | null | undefined>,
	}
	export function CreateErrorDetailsFormGroup() {
		return new FormGroup<ErrorDetailsFormProperties>({
			ErrorCode: new FormControl<string | null | undefined>(undefined),
			ErrorMessage: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateAppBlockRequest {

		/** Required */
		Name: string;
		Description?: string;
		DisplayName?: string;

		/** Required */
		SourceS3Location: S3Location;
		SetupScriptDetails?: ScriptDetails;
		Tags?: Tags;
		PostSetupScriptDetails?: ScriptDetails;
		PackagingType?: PackagingType;
	}
	export interface CreateAppBlockRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		DisplayName: FormControl<string | null | undefined>,
		PackagingType: FormControl<PackagingType | null | undefined>,
	}
	export function CreateCreateAppBlockRequestFormGroup() {
		return new FormGroup<CreateAppBlockRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
			DisplayName: new FormControl<string | null | undefined>(undefined),
			PackagingType: new FormControl<PackagingType | null | undefined>(undefined),
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

	export interface CreateAppBlockBuilderResult {

		/** Describes an app block builder. */
		AppBlockBuilder?: AppBlockBuilder;
	}
	export interface CreateAppBlockBuilderResultFormProperties {
	}
	export function CreateCreateAppBlockBuilderResultFormGroup() {
		return new FormGroup<CreateAppBlockBuilderResultFormProperties>({
		});

	}


	/** Describes an app block builder. */
	export interface AppBlockBuilder {

		/** Required */
		Arn: string;

		/** Required */
		Name: string;
		DisplayName?: string;
		Description?: string;

		/** Required */
		Platform: AppBlockBuilderPlatformType;

		/** Required */
		InstanceType: string;
		EnableDefaultInternetAccess?: boolean | null;
		IamRoleArn?: string;

		/** Required */
		VpcConfig: VpcConfig;

		/** Required */
		State: AppBlockBuilderState;
		CreatedTime?: Date;
		AppBlockBuilderErrors?: Array<ResourceError>;
		StateChangeReason?: AppBlockBuilderStateChangeReason;
		AccessEndpoints?: Array<AccessEndpoint>;
	}

	/** Describes an app block builder. */
	export interface AppBlockBuilderFormProperties {

		/** Required */
		Arn: FormControl<string | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,
		DisplayName: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,

		/** Required */
		Platform: FormControl<AppBlockBuilderPlatformType | null | undefined>,

		/** Required */
		InstanceType: FormControl<string | null | undefined>,
		EnableDefaultInternetAccess: FormControl<boolean | null | undefined>,
		IamRoleArn: FormControl<string | null | undefined>,

		/** Required */
		State: FormControl<AppBlockBuilderState | null | undefined>,
		CreatedTime: FormControl<Date | null | undefined>,
	}
	export function CreateAppBlockBuilderFormGroup() {
		return new FormGroup<AppBlockBuilderFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DisplayName: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			Platform: new FormControl<AppBlockBuilderPlatformType | null | undefined>(undefined, [Validators.required]),
			InstanceType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			EnableDefaultInternetAccess: new FormControl<boolean | null | undefined>(undefined),
			IamRoleArn: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<AppBlockBuilderState | null | undefined>(undefined, [Validators.required]),
			CreatedTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum AppBlockBuilderPlatformType { WINDOWS_SERVER_2019 = 'WINDOWS_SERVER_2019' }


	/** Describes VPC configuration information for fleets and image builders. */
	export interface VpcConfig {
		SubnetIds?: Array<string>;
		SecurityGroupIds?: Array<string>;
	}

	/** Describes VPC configuration information for fleets and image builders. */
	export interface VpcConfigFormProperties {
	}
	export function CreateVpcConfigFormGroup() {
		return new FormGroup<VpcConfigFormProperties>({
		});

	}

	export enum AppBlockBuilderState { STARTING = 'STARTING', RUNNING = 'RUNNING', STOPPING = 'STOPPING', STOPPED = 'STOPPED' }


	/** Describes a resource error. */
	export interface ResourceError {
		ErrorCode?: FleetErrorCode;
		ErrorMessage?: string;
		ErrorTimestamp?: Date;
	}

	/** Describes a resource error. */
	export interface ResourceErrorFormProperties {
		ErrorCode: FormControl<FleetErrorCode | null | undefined>,
		ErrorMessage: FormControl<string | null | undefined>,
		ErrorTimestamp: FormControl<Date | null | undefined>,
	}
	export function CreateResourceErrorFormGroup() {
		return new FormGroup<ResourceErrorFormProperties>({
			ErrorCode: new FormControl<FleetErrorCode | null | undefined>(undefined),
			ErrorMessage: new FormControl<string | null | undefined>(undefined),
			ErrorTimestamp: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum FleetErrorCode { IAM_SERVICE_ROLE_MISSING_ENI_DESCRIBE_ACTION = 'IAM_SERVICE_ROLE_MISSING_ENI_DESCRIBE_ACTION', IAM_SERVICE_ROLE_MISSING_ENI_CREATE_ACTION = 'IAM_SERVICE_ROLE_MISSING_ENI_CREATE_ACTION', IAM_SERVICE_ROLE_MISSING_ENI_DELETE_ACTION = 'IAM_SERVICE_ROLE_MISSING_ENI_DELETE_ACTION', NETWORK_INTERFACE_LIMIT_EXCEEDED = 'NETWORK_INTERFACE_LIMIT_EXCEEDED', INTERNAL_SERVICE_ERROR = 'INTERNAL_SERVICE_ERROR', IAM_SERVICE_ROLE_IS_MISSING = 'IAM_SERVICE_ROLE_IS_MISSING', MACHINE_ROLE_IS_MISSING = 'MACHINE_ROLE_IS_MISSING', STS_DISABLED_IN_REGION = 'STS_DISABLED_IN_REGION', SUBNET_HAS_INSUFFICIENT_IP_ADDRESSES = 'SUBNET_HAS_INSUFFICIENT_IP_ADDRESSES', IAM_SERVICE_ROLE_MISSING_DESCRIBE_SUBNET_ACTION = 'IAM_SERVICE_ROLE_MISSING_DESCRIBE_SUBNET_ACTION', SUBNET_NOT_FOUND = 'SUBNET_NOT_FOUND', IMAGE_NOT_FOUND = 'IMAGE_NOT_FOUND', INVALID_SUBNET_CONFIGURATION = 'INVALID_SUBNET_CONFIGURATION', SECURITY_GROUPS_NOT_FOUND = 'SECURITY_GROUPS_NOT_FOUND', IGW_NOT_ATTACHED = 'IGW_NOT_ATTACHED', IAM_SERVICE_ROLE_MISSING_DESCRIBE_SECURITY_GROUPS_ACTION = 'IAM_SERVICE_ROLE_MISSING_DESCRIBE_SECURITY_GROUPS_ACTION', FLEET_STOPPED = 'FLEET_STOPPED', FLEET_INSTANCE_PROVISIONING_FAILURE = 'FLEET_INSTANCE_PROVISIONING_FAILURE', DOMAIN_JOIN_ERROR_FILE_NOT_FOUND = 'DOMAIN_JOIN_ERROR_FILE_NOT_FOUND', DOMAIN_JOIN_ERROR_ACCESS_DENIED = 'DOMAIN_JOIN_ERROR_ACCESS_DENIED', DOMAIN_JOIN_ERROR_LOGON_FAILURE = 'DOMAIN_JOIN_ERROR_LOGON_FAILURE', DOMAIN_JOIN_ERROR_INVALID_PARAMETER = 'DOMAIN_JOIN_ERROR_INVALID_PARAMETER', DOMAIN_JOIN_ERROR_MORE_DATA = 'DOMAIN_JOIN_ERROR_MORE_DATA', DOMAIN_JOIN_ERROR_NO_SUCH_DOMAIN = 'DOMAIN_JOIN_ERROR_NO_SUCH_DOMAIN', DOMAIN_JOIN_ERROR_NOT_SUPPORTED = 'DOMAIN_JOIN_ERROR_NOT_SUPPORTED', DOMAIN_JOIN_NERR_INVALID_WORKGROUP_NAME = 'DOMAIN_JOIN_NERR_INVALID_WORKGROUP_NAME', DOMAIN_JOIN_NERR_WORKSTATION_NOT_STARTED = 'DOMAIN_JOIN_NERR_WORKSTATION_NOT_STARTED', DOMAIN_JOIN_ERROR_DS_MACHINE_ACCOUNT_QUOTA_EXCEEDED = 'DOMAIN_JOIN_ERROR_DS_MACHINE_ACCOUNT_QUOTA_EXCEEDED', DOMAIN_JOIN_NERR_PASSWORD_EXPIRED = 'DOMAIN_JOIN_NERR_PASSWORD_EXPIRED', DOMAIN_JOIN_INTERNAL_SERVICE_ERROR = 'DOMAIN_JOIN_INTERNAL_SERVICE_ERROR' }


	/** Describes the reason why the last app block builder state change occurred. */
	export interface AppBlockBuilderStateChangeReason {
		Code?: AppBlockBuilderStateChangeReasonCode;
		Message?: string;
	}

	/** Describes the reason why the last app block builder state change occurred. */
	export interface AppBlockBuilderStateChangeReasonFormProperties {
		Code: FormControl<AppBlockBuilderStateChangeReasonCode | null | undefined>,
		Message: FormControl<string | null | undefined>,
	}
	export function CreateAppBlockBuilderStateChangeReasonFormGroup() {
		return new FormGroup<AppBlockBuilderStateChangeReasonFormProperties>({
			Code: new FormControl<AppBlockBuilderStateChangeReasonCode | null | undefined>(undefined),
			Message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AppBlockBuilderStateChangeReasonCode { INTERNAL_ERROR = 'INTERNAL_ERROR' }


	/** Describes an interface VPC endpoint (interface endpoint) that lets you create a private connection between the virtual private cloud (VPC) that you specify and AppStream 2.0. When you specify an interface endpoint for a stack, users of the stack can connect to AppStream 2.0 only through that endpoint. When you specify an interface endpoint for an image builder, administrators can connect to the image builder only through that endpoint. */
	export interface AccessEndpoint {

		/** Required */
		EndpointType: AccessEndpointType;
		VpceId?: string;
	}

	/** Describes an interface VPC endpoint (interface endpoint) that lets you create a private connection between the virtual private cloud (VPC) that you specify and AppStream 2.0. When you specify an interface endpoint for a stack, users of the stack can connect to AppStream 2.0 only through that endpoint. When you specify an interface endpoint for an image builder, administrators can connect to the image builder only through that endpoint. */
	export interface AccessEndpointFormProperties {

		/** Required */
		EndpointType: FormControl<AccessEndpointType | null | undefined>,
		VpceId: FormControl<string | null | undefined>,
	}
	export function CreateAccessEndpointFormGroup() {
		return new FormGroup<AccessEndpointFormProperties>({
			EndpointType: new FormControl<AccessEndpointType | null | undefined>(undefined, [Validators.required]),
			VpceId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AccessEndpointType { STREAMING = 'STREAMING' }

	export interface CreateAppBlockBuilderRequest {

		/** Required */
		Name: string;
		Description?: string;
		DisplayName?: string;
		Tags?: Tags;

		/** Required */
		Platform: AppBlockBuilderPlatformType;

		/** Required */
		InstanceType: string;

		/** Required */
		VpcConfig: VpcConfig;
		EnableDefaultInternetAccess?: boolean | null;
		IamRoleArn?: string;
		AccessEndpoints?: Array<AccessEndpoint>;
	}
	export interface CreateAppBlockBuilderRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		DisplayName: FormControl<string | null | undefined>,

		/** Required */
		Platform: FormControl<AppBlockBuilderPlatformType | null | undefined>,

		/** Required */
		InstanceType: FormControl<string | null | undefined>,
		EnableDefaultInternetAccess: FormControl<boolean | null | undefined>,
		IamRoleArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateAppBlockBuilderRequestFormGroup() {
		return new FormGroup<CreateAppBlockBuilderRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
			DisplayName: new FormControl<string | null | undefined>(undefined),
			Platform: new FormControl<AppBlockBuilderPlatformType | null | undefined>(undefined, [Validators.required]),
			InstanceType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			EnableDefaultInternetAccess: new FormControl<boolean | null | undefined>(undefined),
			IamRoleArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RequestLimitExceededException {
	}
	export interface RequestLimitExceededExceptionFormProperties {
	}
	export function CreateRequestLimitExceededExceptionFormGroup() {
		return new FormGroup<RequestLimitExceededExceptionFormProperties>({
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

	export interface CreateAppBlockBuilderStreamingURLResult {
		StreamingURL?: string;
		Expires?: Date;
	}
	export interface CreateAppBlockBuilderStreamingURLResultFormProperties {
		StreamingURL: FormControl<string | null | undefined>,
		Expires: FormControl<Date | null | undefined>,
	}
	export function CreateCreateAppBlockBuilderStreamingURLResultFormGroup() {
		return new FormGroup<CreateAppBlockBuilderStreamingURLResultFormProperties>({
			StreamingURL: new FormControl<string | null | undefined>(undefined),
			Expires: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface CreateAppBlockBuilderStreamingURLRequest {

		/** Required */
		AppBlockBuilderName: string;
		Validity?: number | null;
	}
	export interface CreateAppBlockBuilderStreamingURLRequestFormProperties {

		/** Required */
		AppBlockBuilderName: FormControl<string | null | undefined>,
		Validity: FormControl<number | null | undefined>,
	}
	export function CreateCreateAppBlockBuilderStreamingURLRequestFormGroup() {
		return new FormGroup<CreateAppBlockBuilderStreamingURLRequestFormProperties>({
			AppBlockBuilderName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Validity: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CreateApplicationResult {

		/** Describes an application in the application catalog. */
		Application?: Application;
	}
	export interface CreateApplicationResultFormProperties {
	}
	export function CreateCreateApplicationResultFormGroup() {
		return new FormGroup<CreateApplicationResultFormProperties>({
		});

	}


	/** Describes an application in the application catalog. */
	export interface Application {
		Name?: string;
		DisplayName?: string;
		IconURL?: string;
		LaunchPath?: string;
		LaunchParameters?: string;
		Enabled?: boolean | null;
		Metadata?: Metadata;
		WorkingDirectory?: string;
		Description?: string;
		Arn?: string;
		AppBlockArn?: string;
		IconS3Location?: S3Location;
		Platforms?: Array<PlatformType>;
		InstanceFamilies?: Array<string>;
		CreatedTime?: Date;
	}

	/** Describes an application in the application catalog. */
	export interface ApplicationFormProperties {
		Name: FormControl<string | null | undefined>,
		DisplayName: FormControl<string | null | undefined>,
		IconURL: FormControl<string | null | undefined>,
		LaunchPath: FormControl<string | null | undefined>,
		LaunchParameters: FormControl<string | null | undefined>,
		Enabled: FormControl<boolean | null | undefined>,
		WorkingDirectory: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		Arn: FormControl<string | null | undefined>,
		AppBlockArn: FormControl<string | null | undefined>,
		CreatedTime: FormControl<Date | null | undefined>,
	}
	export function CreateApplicationFormGroup() {
		return new FormGroup<ApplicationFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			DisplayName: new FormControl<string | null | undefined>(undefined),
			IconURL: new FormControl<string | null | undefined>(undefined),
			LaunchPath: new FormControl<string | null | undefined>(undefined),
			LaunchParameters: new FormControl<string | null | undefined>(undefined),
			Enabled: new FormControl<boolean | null | undefined>(undefined),
			WorkingDirectory: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			Arn: new FormControl<string | null | undefined>(undefined),
			AppBlockArn: new FormControl<string | null | undefined>(undefined),
			CreatedTime: new FormControl<Date | null | undefined>(undefined),
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

	export enum PlatformType { WINDOWS = 'WINDOWS', WINDOWS_SERVER_2016 = 'WINDOWS_SERVER_2016', WINDOWS_SERVER_2019 = 'WINDOWS_SERVER_2019', AMAZON_LINUX2 = 'AMAZON_LINUX2' }

	export interface CreateApplicationRequest {

		/** Required */
		Name: string;
		DisplayName?: string;
		Description?: string;

		/** Required */
		IconS3Location: S3Location;

		/** Required */
		LaunchPath: string;
		WorkingDirectory?: string;
		LaunchParameters?: string;

		/** Required */
		Platforms: Array<PlatformType>;

		/** Required */
		InstanceFamilies: Array<string>;

		/** Required */
		AppBlockArn: string;
		Tags?: Tags;
	}
	export interface CreateApplicationRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
		DisplayName: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,

		/** Required */
		LaunchPath: FormControl<string | null | undefined>,
		WorkingDirectory: FormControl<string | null | undefined>,
		LaunchParameters: FormControl<string | null | undefined>,

		/** Required */
		AppBlockArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateApplicationRequestFormGroup() {
		return new FormGroup<CreateApplicationRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DisplayName: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			LaunchPath: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			WorkingDirectory: new FormControl<string | null | undefined>(undefined),
			LaunchParameters: new FormControl<string | null | undefined>(undefined),
			AppBlockArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateDirectoryConfigResult {
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

		/** Required */
		DirectoryName: string;
		OrganizationalUnitDistinguishedNames?: Array<string>;
		ServiceAccountCredentials?: ServiceAccountCredentials;
		CreatedTime?: Date;
		CertificateBasedAuthProperties?: CertificateBasedAuthProperties;
	}

	/** Describes the configuration information required to join fleets and image builders to Microsoft Active Directory domains. */
	export interface DirectoryConfigFormProperties {

		/** Required */
		DirectoryName: FormControl<string | null | undefined>,
		CreatedTime: FormControl<Date | null | undefined>,
	}
	export function CreateDirectoryConfigFormGroup() {
		return new FormGroup<DirectoryConfigFormProperties>({
			DirectoryName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			CreatedTime: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Describes the credentials for the service account used by the fleet or image builder to connect to the directory. */
	export interface ServiceAccountCredentials {

		/** Required */
		AccountName: string;

		/** Required */
		AccountPassword: string;
	}

	/** Describes the credentials for the service account used by the fleet or image builder to connect to the directory. */
	export interface ServiceAccountCredentialsFormProperties {

		/** Required */
		AccountName: FormControl<string | null | undefined>,

		/** Required */
		AccountPassword: FormControl<string | null | undefined>,
	}
	export function CreateServiceAccountCredentialsFormGroup() {
		return new FormGroup<ServiceAccountCredentialsFormProperties>({
			AccountName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			AccountPassword: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The certificate-based authentication properties used to authenticate SAML 2.0 Identity Provider (IdP) user identities to Active Directory domain-joined streaming instances. Fallback is turned on by default when certificate-based authentication is <b>Enabled</b> . Fallback allows users to log in using their AD domain password if certificate-based authentication is unsuccessful, or to unlock a desktop lock screen. <b>Enabled_no_directory_login_fallback</b> enables certificate-based authentication, but does not allow users to log in using their AD domain password. Users will be disconnected to re-authenticate using certificates. */
	export interface CertificateBasedAuthProperties {
		Status?: CertificateBasedAuthStatus;
		CertificateAuthorityArn?: string;
	}

	/** The certificate-based authentication properties used to authenticate SAML 2.0 Identity Provider (IdP) user identities to Active Directory domain-joined streaming instances. Fallback is turned on by default when certificate-based authentication is <b>Enabled</b> . Fallback allows users to log in using their AD domain password if certificate-based authentication is unsuccessful, or to unlock a desktop lock screen. <b>Enabled_no_directory_login_fallback</b> enables certificate-based authentication, but does not allow users to log in using their AD domain password. Users will be disconnected to re-authenticate using certificates. */
	export interface CertificateBasedAuthPropertiesFormProperties {
		Status: FormControl<CertificateBasedAuthStatus | null | undefined>,
		CertificateAuthorityArn: FormControl<string | null | undefined>,
	}
	export function CreateCertificateBasedAuthPropertiesFormGroup() {
		return new FormGroup<CertificateBasedAuthPropertiesFormProperties>({
			Status: new FormControl<CertificateBasedAuthStatus | null | undefined>(undefined),
			CertificateAuthorityArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum CertificateBasedAuthStatus { DISABLED = 'DISABLED', ENABLED = 'ENABLED', ENABLED_NO_DIRECTORY_LOGIN_FALLBACK = 'ENABLED_NO_DIRECTORY_LOGIN_FALLBACK' }

	export interface CreateDirectoryConfigRequest {

		/** Required */
		DirectoryName: string;

		/** Required */
		OrganizationalUnitDistinguishedNames: Array<string>;
		ServiceAccountCredentials?: ServiceAccountCredentials;
		CertificateBasedAuthProperties?: CertificateBasedAuthProperties;
	}
	export interface CreateDirectoryConfigRequestFormProperties {

		/** Required */
		DirectoryName: FormControl<string | null | undefined>,
	}
	export function CreateCreateDirectoryConfigRequestFormGroup() {
		return new FormGroup<CreateDirectoryConfigRequestFormProperties>({
			DirectoryName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateEntitlementResult {
		Entitlement?: Entitlement;
	}
	export interface CreateEntitlementResultFormProperties {
	}
	export function CreateCreateEntitlementResultFormGroup() {
		return new FormGroup<CreateEntitlementResultFormProperties>({
		});

	}


	/** Specifies an entitlement. Entitlements control access to specific applications within a stack, based on user attributes. Entitlements apply to SAML 2.0 federated user identities. Amazon AppStream 2.0 user pool and streaming URL users are entitled to all applications in a stack. Entitlements don't apply to the desktop stream view application, or to applications managed by a dynamic app provider using the Dynamic Application Framework. */
	export interface Entitlement {

		/** Required */
		Name: string;

		/** Required */
		StackName: string;
		Description?: string;

		/** Required */
		AppVisibility: AppVisibility;

		/** Required */
		Attributes: Array<EntitlementAttribute>;
		CreatedTime?: Date;
		LastModifiedTime?: Date;
	}

	/** Specifies an entitlement. Entitlements control access to specific applications within a stack, based on user attributes. Entitlements apply to SAML 2.0 federated user identities. Amazon AppStream 2.0 user pool and streaming URL users are entitled to all applications in a stack. Entitlements don't apply to the desktop stream view application, or to applications managed by a dynamic app provider using the Dynamic Application Framework. */
	export interface EntitlementFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		StackName: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,

		/** Required */
		AppVisibility: FormControl<AppVisibility | null | undefined>,
		CreatedTime: FormControl<Date | null | undefined>,
		LastModifiedTime: FormControl<Date | null | undefined>,
	}
	export function CreateEntitlementFormGroup() {
		return new FormGroup<EntitlementFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			StackName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
			AppVisibility: new FormControl<AppVisibility | null | undefined>(undefined, [Validators.required]),
			CreatedTime: new FormControl<Date | null | undefined>(undefined),
			LastModifiedTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum AppVisibility { ALL = 'ALL', ASSOCIATED = 'ASSOCIATED' }


	/** An attribute associated with an entitlement. Application entitlements work by matching a supported SAML 2.0 attribute name to a value when a user identity federates to an Amazon AppStream 2.0 SAML application. */
	export interface EntitlementAttribute {

		/** Required */
		Name: string;

		/** Required */
		Value: string;
	}

	/** An attribute associated with an entitlement. Application entitlements work by matching a supported SAML 2.0 attribute name to a value when a user identity federates to an Amazon AppStream 2.0 SAML application. */
	export interface EntitlementAttributeFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		Value: FormControl<string | null | undefined>,
	}
	export function CreateEntitlementAttributeFormGroup() {
		return new FormGroup<EntitlementAttributeFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateEntitlementRequest {

		/** Required */
		Name: string;

		/** Required */
		StackName: string;
		Description?: string;

		/** Required */
		AppVisibility: AppVisibility;

		/** Required */
		Attributes: Array<EntitlementAttribute>;
	}
	export interface CreateEntitlementRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		StackName: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,

		/** Required */
		AppVisibility: FormControl<AppVisibility | null | undefined>,
	}
	export function CreateCreateEntitlementRequestFormGroup() {
		return new FormGroup<CreateEntitlementRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			StackName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
			AppVisibility: new FormControl<AppVisibility | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface EntitlementAlreadyExistsException {
	}
	export interface EntitlementAlreadyExistsExceptionFormProperties {
	}
	export function CreateEntitlementAlreadyExistsExceptionFormGroup() {
		return new FormGroup<EntitlementAlreadyExistsExceptionFormProperties>({
		});

	}

	export interface CreateFleetResult {
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

		/** Required */
		Arn: string;

		/** Required */
		Name: string;
		DisplayName?: string;
		Description?: string;
		ImageName?: string;
		ImageArn?: string;

		/** Required */
		InstanceType: string;
		FleetType?: FleetType;

		/** Required */
		ComputeCapacityStatus: ComputeCapacityStatus;
		MaxUserDurationInSeconds?: number | null;
		DisconnectTimeoutInSeconds?: number | null;

		/** Required */
		State: AppBlockBuilderState;
		VpcConfig?: VpcConfig;
		CreatedTime?: Date;
		FleetErrors?: Array<FleetError>;
		EnableDefaultInternetAccess?: boolean | null;
		DomainJoinInfo?: DomainJoinInfo;
		IdleDisconnectTimeoutInSeconds?: number | null;
		IamRoleArn?: string;
		StreamView?: StreamView;
		Platform?: PlatformType;
		MaxConcurrentSessions?: number | null;
		UsbDeviceFilterStrings?: Array<string>;
		SessionScriptS3Location?: S3Location;
	}

	/** Describes a fleet. */
	export interface FleetFormProperties {

		/** Required */
		Arn: FormControl<string | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,
		DisplayName: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		ImageName: FormControl<string | null | undefined>,
		ImageArn: FormControl<string | null | undefined>,

		/** Required */
		InstanceType: FormControl<string | null | undefined>,
		FleetType: FormControl<FleetType | null | undefined>,
		MaxUserDurationInSeconds: FormControl<number | null | undefined>,
		DisconnectTimeoutInSeconds: FormControl<number | null | undefined>,

		/** Required */
		State: FormControl<AppBlockBuilderState | null | undefined>,
		CreatedTime: FormControl<Date | null | undefined>,
		EnableDefaultInternetAccess: FormControl<boolean | null | undefined>,
		IdleDisconnectTimeoutInSeconds: FormControl<number | null | undefined>,
		IamRoleArn: FormControl<string | null | undefined>,
		StreamView: FormControl<StreamView | null | undefined>,
		Platform: FormControl<PlatformType | null | undefined>,
		MaxConcurrentSessions: FormControl<number | null | undefined>,
	}
	export function CreateFleetFormGroup() {
		return new FormGroup<FleetFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DisplayName: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			ImageName: new FormControl<string | null | undefined>(undefined),
			ImageArn: new FormControl<string | null | undefined>(undefined),
			InstanceType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			FleetType: new FormControl<FleetType | null | undefined>(undefined),
			MaxUserDurationInSeconds: new FormControl<number | null | undefined>(undefined),
			DisconnectTimeoutInSeconds: new FormControl<number | null | undefined>(undefined),
			State: new FormControl<AppBlockBuilderState | null | undefined>(undefined, [Validators.required]),
			CreatedTime: new FormControl<Date | null | undefined>(undefined),
			EnableDefaultInternetAccess: new FormControl<boolean | null | undefined>(undefined),
			IdleDisconnectTimeoutInSeconds: new FormControl<number | null | undefined>(undefined),
			IamRoleArn: new FormControl<string | null | undefined>(undefined),
			StreamView: new FormControl<StreamView | null | undefined>(undefined),
			Platform: new FormControl<PlatformType | null | undefined>(undefined),
			MaxConcurrentSessions: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum FleetType { ALWAYS_ON = 'ALWAYS_ON', ON_DEMAND = 'ON_DEMAND', ELASTIC = 'ELASTIC' }


	/** Describes the capacity status for a fleet. */
	export interface ComputeCapacityStatus {

		/** Required */
		Desired: number;
		Running?: number | null;
		InUse?: number | null;
		Available?: number | null;
	}

	/** Describes the capacity status for a fleet. */
	export interface ComputeCapacityStatusFormProperties {

		/** Required */
		Desired: FormControl<number | null | undefined>,
		Running: FormControl<number | null | undefined>,
		InUse: FormControl<number | null | undefined>,
		Available: FormControl<number | null | undefined>,
	}
	export function CreateComputeCapacityStatusFormGroup() {
		return new FormGroup<ComputeCapacityStatusFormProperties>({
			Desired: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Running: new FormControl<number | null | undefined>(undefined),
			InUse: new FormControl<number | null | undefined>(undefined),
			Available: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Describes a fleet error. */
	export interface FleetError {
		ErrorCode?: FleetErrorCode;
		ErrorMessage?: string;
	}

	/** Describes a fleet error. */
	export interface FleetErrorFormProperties {
		ErrorCode: FormControl<FleetErrorCode | null | undefined>,
		ErrorMessage: FormControl<string | null | undefined>,
	}
	export function CreateFleetErrorFormGroup() {
		return new FormGroup<FleetErrorFormProperties>({
			ErrorCode: new FormControl<FleetErrorCode | null | undefined>(undefined),
			ErrorMessage: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes the configuration information required to join fleets and image builders to Microsoft Active Directory domains. */
	export interface DomainJoinInfo {
		DirectoryName?: string;
		OrganizationalUnitDistinguishedName?: string;
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

	export enum StreamView { APP = 'APP', DESKTOP = 'DESKTOP' }

	export interface CreateFleetRequest {

		/** Required */
		Name: string;
		ImageName?: string;
		ImageArn?: string;

		/** Required */
		InstanceType: string;
		FleetType?: FleetType;
		ComputeCapacity?: ComputeCapacity;
		VpcConfig?: VpcConfig;
		MaxUserDurationInSeconds?: number | null;
		DisconnectTimeoutInSeconds?: number | null;
		Description?: string;
		DisplayName?: string;
		EnableDefaultInternetAccess?: boolean | null;
		DomainJoinInfo?: DomainJoinInfo;
		Tags?: Tags;
		IdleDisconnectTimeoutInSeconds?: number | null;
		IamRoleArn?: string;
		StreamView?: StreamView;
		Platform?: PlatformType;
		MaxConcurrentSessions?: number | null;
		UsbDeviceFilterStrings?: Array<string>;
		SessionScriptS3Location?: S3Location;
	}
	export interface CreateFleetRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
		ImageName: FormControl<string | null | undefined>,
		ImageArn: FormControl<string | null | undefined>,

		/** Required */
		InstanceType: FormControl<string | null | undefined>,
		FleetType: FormControl<FleetType | null | undefined>,
		MaxUserDurationInSeconds: FormControl<number | null | undefined>,
		DisconnectTimeoutInSeconds: FormControl<number | null | undefined>,
		Description: FormControl<string | null | undefined>,
		DisplayName: FormControl<string | null | undefined>,
		EnableDefaultInternetAccess: FormControl<boolean | null | undefined>,
		IdleDisconnectTimeoutInSeconds: FormControl<number | null | undefined>,
		IamRoleArn: FormControl<string | null | undefined>,
		StreamView: FormControl<StreamView | null | undefined>,
		Platform: FormControl<PlatformType | null | undefined>,
		MaxConcurrentSessions: FormControl<number | null | undefined>,
	}
	export function CreateCreateFleetRequestFormGroup() {
		return new FormGroup<CreateFleetRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ImageName: new FormControl<string | null | undefined>(undefined),
			ImageArn: new FormControl<string | null | undefined>(undefined),
			InstanceType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			FleetType: new FormControl<FleetType | null | undefined>(undefined),
			MaxUserDurationInSeconds: new FormControl<number | null | undefined>(undefined),
			DisconnectTimeoutInSeconds: new FormControl<number | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			DisplayName: new FormControl<string | null | undefined>(undefined),
			EnableDefaultInternetAccess: new FormControl<boolean | null | undefined>(undefined),
			IdleDisconnectTimeoutInSeconds: new FormControl<number | null | undefined>(undefined),
			IamRoleArn: new FormControl<string | null | undefined>(undefined),
			StreamView: new FormControl<StreamView | null | undefined>(undefined),
			Platform: new FormControl<PlatformType | null | undefined>(undefined),
			MaxConcurrentSessions: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Describes the capacity for a fleet. */
	export interface ComputeCapacity {

		/** Required */
		DesiredInstances: number;
	}

	/** Describes the capacity for a fleet. */
	export interface ComputeCapacityFormProperties {

		/** Required */
		DesiredInstances: FormControl<number | null | undefined>,
	}
	export function CreateComputeCapacityFormGroup() {
		return new FormGroup<ComputeCapacityFormProperties>({
			DesiredInstances: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateImageBuilderResult {
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

		/** Required */
		Name: string;
		Arn?: string;
		ImageArn?: string;
		Description?: string;
		DisplayName?: string;
		VpcConfig?: VpcConfig;
		InstanceType?: string;
		Platform?: PlatformType;
		IamRoleArn?: string;
		State?: ImageBuilderState;
		StateChangeReason?: ImageBuilderStateChangeReason;
		CreatedTime?: Date;
		EnableDefaultInternetAccess?: boolean | null;
		DomainJoinInfo?: DomainJoinInfo;

		/** Describes the network details of the fleet or image builder instance. */
		NetworkAccessConfiguration?: NetworkAccessConfiguration;
		ImageBuilderErrors?: Array<ResourceError>;
		AppstreamAgentVersion?: string;
		AccessEndpoints?: Array<AccessEndpoint>;
	}

	/** Describes a virtual machine that is used to create an image.  */
	export interface ImageBuilderFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
		Arn: FormControl<string | null | undefined>,
		ImageArn: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		DisplayName: FormControl<string | null | undefined>,
		InstanceType: FormControl<string | null | undefined>,
		Platform: FormControl<PlatformType | null | undefined>,
		IamRoleArn: FormControl<string | null | undefined>,
		State: FormControl<ImageBuilderState | null | undefined>,
		CreatedTime: FormControl<Date | null | undefined>,
		EnableDefaultInternetAccess: FormControl<boolean | null | undefined>,
		AppstreamAgentVersion: FormControl<string | null | undefined>,
	}
	export function CreateImageBuilderFormGroup() {
		return new FormGroup<ImageBuilderFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Arn: new FormControl<string | null | undefined>(undefined),
			ImageArn: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			DisplayName: new FormControl<string | null | undefined>(undefined),
			InstanceType: new FormControl<string | null | undefined>(undefined),
			Platform: new FormControl<PlatformType | null | undefined>(undefined),
			IamRoleArn: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<ImageBuilderState | null | undefined>(undefined),
			CreatedTime: new FormControl<Date | null | undefined>(undefined),
			EnableDefaultInternetAccess: new FormControl<boolean | null | undefined>(undefined),
			AppstreamAgentVersion: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ImageBuilderState { PENDING = 'PENDING', UPDATING_AGENT = 'UPDATING_AGENT', RUNNING = 'RUNNING', STOPPING = 'STOPPING', STOPPED = 'STOPPED', REBOOTING = 'REBOOTING', SNAPSHOTTING = 'SNAPSHOTTING', DELETING = 'DELETING', FAILED = 'FAILED', UPDATING = 'UPDATING', PENDING_QUALIFICATION = 'PENDING_QUALIFICATION' }


	/** Describes the reason why the last image builder state change occurred. */
	export interface ImageBuilderStateChangeReason {
		Code?: ImageBuilderStateChangeReasonCode;
		Message?: string;
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

	export enum ImageBuilderStateChangeReasonCode { INTERNAL_ERROR = 'INTERNAL_ERROR', IMAGE_UNAVAILABLE = 'IMAGE_UNAVAILABLE' }


	/** Describes the network details of the fleet or image builder instance. */
	export interface NetworkAccessConfiguration {
		EniPrivateIpAddress?: string;
		EniId?: string;
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

	export interface CreateImageBuilderRequest {

		/** Required */
		Name: string;
		ImageName?: string;
		ImageArn?: string;

		/** Required */
		InstanceType: string;
		Description?: string;
		DisplayName?: string;
		VpcConfig?: VpcConfig;
		IamRoleArn?: string;
		EnableDefaultInternetAccess?: boolean | null;
		DomainJoinInfo?: DomainJoinInfo;
		AppstreamAgentVersion?: string;
		Tags?: Tags;
		AccessEndpoints?: Array<AccessEndpoint>;
	}
	export interface CreateImageBuilderRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
		ImageName: FormControl<string | null | undefined>,
		ImageArn: FormControl<string | null | undefined>,

		/** Required */
		InstanceType: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		DisplayName: FormControl<string | null | undefined>,
		IamRoleArn: FormControl<string | null | undefined>,
		EnableDefaultInternetAccess: FormControl<boolean | null | undefined>,
		AppstreamAgentVersion: FormControl<string | null | undefined>,
	}
	export function CreateCreateImageBuilderRequestFormGroup() {
		return new FormGroup<CreateImageBuilderRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ImageName: new FormControl<string | null | undefined>(undefined),
			ImageArn: new FormControl<string | null | undefined>(undefined),
			InstanceType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
			DisplayName: new FormControl<string | null | undefined>(undefined),
			IamRoleArn: new FormControl<string | null | undefined>(undefined),
			EnableDefaultInternetAccess: new FormControl<boolean | null | undefined>(undefined),
			AppstreamAgentVersion: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateImageBuilderStreamingURLResult {
		StreamingURL?: string;
		Expires?: Date;
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

		/** Required */
		Name: string;
		Validity?: number | null;
	}
	export interface CreateImageBuilderStreamingURLRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
		Validity: FormControl<number | null | undefined>,
	}
	export function CreateCreateImageBuilderStreamingURLRequestFormGroup() {
		return new FormGroup<CreateImageBuilderStreamingURLRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Validity: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CreateStackResult {
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
		Arn?: string;

		/** Required */
		Name: string;
		Description?: string;
		DisplayName?: string;
		CreatedTime?: Date;
		StorageConnectors?: Array<StorageConnector>;
		RedirectURL?: string;
		FeedbackURL?: string;
		StackErrors?: Array<StackError>;
		UserSettings?: Array<UserSetting>;
		ApplicationSettings?: ApplicationSettingsResponse;
		AccessEndpoints?: Array<AccessEndpoint>;
		EmbedHostDomains?: Array<string>;
		StreamingExperienceSettings?: StreamingExperienceSettings;
	}

	/** Describes a stack. */
	export interface StackFormProperties {
		Arn: FormControl<string | null | undefined>,

		/** Required */
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
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
			DisplayName: new FormControl<string | null | undefined>(undefined),
			CreatedTime: new FormControl<Date | null | undefined>(undefined),
			RedirectURL: new FormControl<string | null | undefined>(undefined),
			FeedbackURL: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes a connector that enables persistent storage for users. */
	export interface StorageConnector {

		/** Required */
		ConnectorType: StorageConnectorType;
		ResourceIdentifier?: string;
		Domains?: Array<string>;
	}

	/** Describes a connector that enables persistent storage for users. */
	export interface StorageConnectorFormProperties {

		/** Required */
		ConnectorType: FormControl<StorageConnectorType | null | undefined>,
		ResourceIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateStorageConnectorFormGroup() {
		return new FormGroup<StorageConnectorFormProperties>({
			ConnectorType: new FormControl<StorageConnectorType | null | undefined>(undefined, [Validators.required]),
			ResourceIdentifier: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The type of storage connector. */
	export enum StorageConnectorType { HOMEFOLDERS = 'HOMEFOLDERS', GOOGLE_DRIVE = 'GOOGLE_DRIVE', ONE_DRIVE = 'ONE_DRIVE' }


	/** Describes a stack error. */
	export interface StackError {
		ErrorCode?: StackErrorCode;
		ErrorMessage?: string;
	}

	/** Describes a stack error. */
	export interface StackErrorFormProperties {
		ErrorCode: FormControl<StackErrorCode | null | undefined>,
		ErrorMessage: FormControl<string | null | undefined>,
	}
	export function CreateStackErrorFormGroup() {
		return new FormGroup<StackErrorFormProperties>({
			ErrorCode: new FormControl<StackErrorCode | null | undefined>(undefined),
			ErrorMessage: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum StackErrorCode { STORAGE_CONNECTOR_ERROR = 'STORAGE_CONNECTOR_ERROR', INTERNAL_SERVICE_ERROR = 'INTERNAL_SERVICE_ERROR' }


	/** Describes an action and whether the action is enabled or disabled for users during their streaming sessions. */
	export interface UserSetting {

		/** Required */
		Action: Action;

		/** Required */
		Permission: Permission;
	}

	/** Describes an action and whether the action is enabled or disabled for users during their streaming sessions. */
	export interface UserSettingFormProperties {

		/** Required */
		Action: FormControl<Action | null | undefined>,

		/** Required */
		Permission: FormControl<Permission | null | undefined>,
	}
	export function CreateUserSettingFormGroup() {
		return new FormGroup<UserSettingFormProperties>({
			Action: new FormControl<Action | null | undefined>(undefined, [Validators.required]),
			Permission: new FormControl<Permission | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum Action { CLIPBOARD_COPY_FROM_LOCAL_DEVICE = 'CLIPBOARD_COPY_FROM_LOCAL_DEVICE', CLIPBOARD_COPY_TO_LOCAL_DEVICE = 'CLIPBOARD_COPY_TO_LOCAL_DEVICE', FILE_UPLOAD = 'FILE_UPLOAD', FILE_DOWNLOAD = 'FILE_DOWNLOAD', PRINTING_TO_LOCAL_DEVICE = 'PRINTING_TO_LOCAL_DEVICE', DOMAIN_PASSWORD_SIGNIN = 'DOMAIN_PASSWORD_SIGNIN', DOMAIN_SMART_CARD_SIGNIN = 'DOMAIN_SMART_CARD_SIGNIN' }

	export enum Permission { ENABLED = 'ENABLED', DISABLED = 'DISABLED' }


	/** Describes the persistent application settings for users of a stack. */
	export interface ApplicationSettingsResponse {
		Enabled?: boolean | null;
		SettingsGroup?: string;
		S3BucketName?: string;
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


	/** The streaming protocol you want your stack to prefer. This can be UDP or TCP. Currently, UDP is only supported in the Windows native client. */
	export interface StreamingExperienceSettings {
		PreferredProtocol?: PreferredProtocol;
	}

	/** The streaming protocol you want your stack to prefer. This can be UDP or TCP. Currently, UDP is only supported in the Windows native client. */
	export interface StreamingExperienceSettingsFormProperties {
		PreferredProtocol: FormControl<PreferredProtocol | null | undefined>,
	}
	export function CreateStreamingExperienceSettingsFormGroup() {
		return new FormGroup<StreamingExperienceSettingsFormProperties>({
			PreferredProtocol: new FormControl<PreferredProtocol | null | undefined>(undefined),
		});

	}

	export enum PreferredProtocol { TCP = 'TCP', UDP = 'UDP' }

	export interface CreateStackRequest {

		/** Required */
		Name: string;
		Description?: string;
		DisplayName?: string;
		StorageConnectors?: Array<StorageConnector>;
		RedirectURL?: string;
		FeedbackURL?: string;
		UserSettings?: Array<UserSetting>;
		ApplicationSettings?: ApplicationSettings;
		Tags?: Tags;
		AccessEndpoints?: Array<AccessEndpoint>;
		EmbedHostDomains?: Array<string>;
		StreamingExperienceSettings?: StreamingExperienceSettings;
	}
	export interface CreateStackRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		DisplayName: FormControl<string | null | undefined>,
		RedirectURL: FormControl<string | null | undefined>,
		FeedbackURL: FormControl<string | null | undefined>,
	}
	export function CreateCreateStackRequestFormGroup() {
		return new FormGroup<CreateStackRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
			DisplayName: new FormControl<string | null | undefined>(undefined),
			RedirectURL: new FormControl<string | null | undefined>(undefined),
			FeedbackURL: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The persistent application settings for users of a stack. */
	export interface ApplicationSettings {

		/** Required */
		Enabled: boolean;
		SettingsGroup?: string;
	}

	/** The persistent application settings for users of a stack. */
	export interface ApplicationSettingsFormProperties {

		/** Required */
		Enabled: FormControl<boolean | null | undefined>,
		SettingsGroup: FormControl<string | null | undefined>,
	}
	export function CreateApplicationSettingsFormGroup() {
		return new FormGroup<ApplicationSettingsFormProperties>({
			Enabled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			SettingsGroup: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateStreamingURLResult {
		StreamingURL?: string;
		Expires?: Date;
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

		/** Required */
		StackName: string;

		/** Required */
		FleetName: string;

		/** Required */
		UserId: string;
		ApplicationId?: string;
		Validity?: number | null;
		SessionContext?: string;
	}
	export interface CreateStreamingURLRequestFormProperties {

		/** Required */
		StackName: FormControl<string | null | undefined>,

		/** Required */
		FleetName: FormControl<string | null | undefined>,

		/** Required */
		UserId: FormControl<string | null | undefined>,
		ApplicationId: FormControl<string | null | undefined>,
		Validity: FormControl<number | null | undefined>,
		SessionContext: FormControl<string | null | undefined>,
	}
	export function CreateCreateStreamingURLRequestFormGroup() {
		return new FormGroup<CreateStreamingURLRequestFormProperties>({
			StackName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			FleetName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			UserId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ApplicationId: new FormControl<string | null | undefined>(undefined),
			Validity: new FormControl<number | null | undefined>(undefined),
			SessionContext: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateUpdatedImageResult {

		/** Describes an image. */
		image?: Image;
		canUpdateImage?: boolean | null;
	}
	export interface CreateUpdatedImageResultFormProperties {
		canUpdateImage: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateUpdatedImageResultFormGroup() {
		return new FormGroup<CreateUpdatedImageResultFormProperties>({
			canUpdateImage: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Describes an image. */
	export interface Image {

		/** Required */
		Name: string;
		Arn?: string;
		BaseImageArn?: string;
		DisplayName?: string;
		State?: ImageState;
		Visibility?: VisibilityType;
		ImageBuilderSupported?: boolean | null;
		ImageBuilderName?: string;
		Platform?: PlatformType;
		Description?: string;
		StateChangeReason?: ImageStateChangeReason;
		Applications?: Array<Application>;
		CreatedTime?: Date;
		PublicBaseImageReleasedDate?: Date;
		AppstreamAgentVersion?: string;
		ImagePermissions?: ImagePermissions;
		ImageErrors?: Array<ResourceError>;
	}

	/** Describes an image. */
	export interface ImageFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
		Arn: FormControl<string | null | undefined>,
		BaseImageArn: FormControl<string | null | undefined>,
		DisplayName: FormControl<string | null | undefined>,
		State: FormControl<ImageState | null | undefined>,
		Visibility: FormControl<VisibilityType | null | undefined>,
		ImageBuilderSupported: FormControl<boolean | null | undefined>,
		ImageBuilderName: FormControl<string | null | undefined>,
		Platform: FormControl<PlatformType | null | undefined>,
		Description: FormControl<string | null | undefined>,
		CreatedTime: FormControl<Date | null | undefined>,
		PublicBaseImageReleasedDate: FormControl<Date | null | undefined>,
		AppstreamAgentVersion: FormControl<string | null | undefined>,
	}
	export function CreateImageFormGroup() {
		return new FormGroup<ImageFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Arn: new FormControl<string | null | undefined>(undefined),
			BaseImageArn: new FormControl<string | null | undefined>(undefined),
			DisplayName: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<ImageState | null | undefined>(undefined),
			Visibility: new FormControl<VisibilityType | null | undefined>(undefined),
			ImageBuilderSupported: new FormControl<boolean | null | undefined>(undefined),
			ImageBuilderName: new FormControl<string | null | undefined>(undefined),
			Platform: new FormControl<PlatformType | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			CreatedTime: new FormControl<Date | null | undefined>(undefined),
			PublicBaseImageReleasedDate: new FormControl<Date | null | undefined>(undefined),
			AppstreamAgentVersion: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ImageState { PENDING = 'PENDING', AVAILABLE = 'AVAILABLE', FAILED = 'FAILED', COPYING = 'COPYING', DELETING = 'DELETING', CREATING = 'CREATING', IMPORTING = 'IMPORTING' }

	export enum VisibilityType { PUBLIC = 'PUBLIC', PRIVATE = 'PRIVATE', SHARED = 'SHARED' }


	/** Describes the reason why the last image state change occurred. */
	export interface ImageStateChangeReason {
		Code?: ImageStateChangeReasonCode;
		Message?: string;
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

	export enum ImageStateChangeReasonCode { INTERNAL_ERROR = 'INTERNAL_ERROR', IMAGE_BUILDER_NOT_AVAILABLE = 'IMAGE_BUILDER_NOT_AVAILABLE', IMAGE_COPY_FAILURE = 'IMAGE_COPY_FAILURE' }


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

	export interface CreateUpdatedImageRequest {

		/** Required */
		existingImageName: string;

		/** Required */
		newImageName: string;
		newImageDescription?: string;
		newImageDisplayName?: string;
		newImageTags?: Tags;
		dryRun?: boolean | null;
	}
	export interface CreateUpdatedImageRequestFormProperties {

		/** Required */
		existingImageName: FormControl<string | null | undefined>,

		/** Required */
		newImageName: FormControl<string | null | undefined>,
		newImageDescription: FormControl<string | null | undefined>,
		newImageDisplayName: FormControl<string | null | undefined>,
		dryRun: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateUpdatedImageRequestFormGroup() {
		return new FormGroup<CreateUpdatedImageRequestFormProperties>({
			existingImageName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			newImageName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			newImageDescription: new FormControl<string | null | undefined>(undefined),
			newImageDisplayName: new FormControl<string | null | undefined>(undefined),
			dryRun: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface CreateUsageReportSubscriptionResult {
		S3BucketName?: string;
		Schedule?: UsageReportSchedule;
	}
	export interface CreateUsageReportSubscriptionResultFormProperties {
		S3BucketName: FormControl<string | null | undefined>,
		Schedule: FormControl<UsageReportSchedule | null | undefined>,
	}
	export function CreateCreateUsageReportSubscriptionResultFormGroup() {
		return new FormGroup<CreateUsageReportSubscriptionResultFormProperties>({
			S3BucketName: new FormControl<string | null | undefined>(undefined),
			Schedule: new FormControl<UsageReportSchedule | null | undefined>(undefined),
		});

	}

	export enum UsageReportSchedule { DAILY = 'DAILY' }

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

		/** Required */
		UserName: string;
		MessageAction?: MessageAction;
		FirstName?: string;
		LastName?: string;

		/** Required */
		AuthenticationType: AuthenticationType;
	}
	export interface CreateUserRequestFormProperties {

		/** Required */
		UserName: FormControl<string | null | undefined>,
		MessageAction: FormControl<MessageAction | null | undefined>,
		FirstName: FormControl<string | null | undefined>,
		LastName: FormControl<string | null | undefined>,

		/** Required */
		AuthenticationType: FormControl<AuthenticationType | null | undefined>,
	}
	export function CreateCreateUserRequestFormGroup() {
		return new FormGroup<CreateUserRequestFormProperties>({
			UserName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MessageAction: new FormControl<MessageAction | null | undefined>(undefined),
			FirstName: new FormControl<string | null | undefined>(undefined),
			LastName: new FormControl<string | null | undefined>(undefined),
			AuthenticationType: new FormControl<AuthenticationType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum MessageAction { SUPPRESS = 'SUPPRESS', RESEND = 'RESEND' }

	export interface DeleteAppBlockResult {
	}
	export interface DeleteAppBlockResultFormProperties {
	}
	export function CreateDeleteAppBlockResultFormGroup() {
		return new FormGroup<DeleteAppBlockResultFormProperties>({
		});

	}

	export interface DeleteAppBlockRequest {

		/** Required */
		Name: string;
	}
	export interface DeleteAppBlockRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateDeleteAppBlockRequestFormGroup() {
		return new FormGroup<DeleteAppBlockRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

	export interface DeleteAppBlockBuilderResult {
	}
	export interface DeleteAppBlockBuilderResultFormProperties {
	}
	export function CreateDeleteAppBlockBuilderResultFormGroup() {
		return new FormGroup<DeleteAppBlockBuilderResultFormProperties>({
		});

	}

	export interface DeleteAppBlockBuilderRequest {

		/** Required */
		Name: string;
	}
	export interface DeleteAppBlockBuilderRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateDeleteAppBlockBuilderRequestFormGroup() {
		return new FormGroup<DeleteAppBlockBuilderRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteApplicationResult {
	}
	export interface DeleteApplicationResultFormProperties {
	}
	export function CreateDeleteApplicationResultFormGroup() {
		return new FormGroup<DeleteApplicationResultFormProperties>({
		});

	}

	export interface DeleteApplicationRequest {

		/** Required */
		Name: string;
	}
	export interface DeleteApplicationRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateDeleteApplicationRequestFormGroup() {
		return new FormGroup<DeleteApplicationRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteDirectoryConfigResult {
	}
	export interface DeleteDirectoryConfigResultFormProperties {
	}
	export function CreateDeleteDirectoryConfigResultFormGroup() {
		return new FormGroup<DeleteDirectoryConfigResultFormProperties>({
		});

	}

	export interface DeleteDirectoryConfigRequest {

		/** Required */
		DirectoryName: string;
	}
	export interface DeleteDirectoryConfigRequestFormProperties {

		/** Required */
		DirectoryName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteDirectoryConfigRequestFormGroup() {
		return new FormGroup<DeleteDirectoryConfigRequestFormProperties>({
			DirectoryName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteEntitlementResult {
	}
	export interface DeleteEntitlementResultFormProperties {
	}
	export function CreateDeleteEntitlementResultFormGroup() {
		return new FormGroup<DeleteEntitlementResultFormProperties>({
		});

	}

	export interface DeleteEntitlementRequest {

		/** Required */
		Name: string;

		/** Required */
		StackName: string;
	}
	export interface DeleteEntitlementRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		StackName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteEntitlementRequestFormGroup() {
		return new FormGroup<DeleteEntitlementRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			StackName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

		/** Required */
		Name: string;
	}
	export interface DeleteFleetRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateDeleteFleetRequestFormGroup() {
		return new FormGroup<DeleteFleetRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteImageResult {
		Image?: Image;
	}
	export interface DeleteImageResultFormProperties {
	}
	export function CreateDeleteImageResultFormGroup() {
		return new FormGroup<DeleteImageResultFormProperties>({
		});

	}

	export interface DeleteImageRequest {

		/** Required */
		Name: string;
	}
	export interface DeleteImageRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateDeleteImageRequestFormGroup() {
		return new FormGroup<DeleteImageRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteImageBuilderResult {
		ImageBuilder?: ImageBuilder;
	}
	export interface DeleteImageBuilderResultFormProperties {
	}
	export function CreateDeleteImageBuilderResultFormGroup() {
		return new FormGroup<DeleteImageBuilderResultFormProperties>({
		});

	}

	export interface DeleteImageBuilderRequest {

		/** Required */
		Name: string;
	}
	export interface DeleteImageBuilderRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateDeleteImageBuilderRequestFormGroup() {
		return new FormGroup<DeleteImageBuilderRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

		/** Required */
		Name: string;

		/** Required */
		SharedAccountId: string;
	}
	export interface DeleteImagePermissionsRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		SharedAccountId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteImagePermissionsRequestFormGroup() {
		return new FormGroup<DeleteImagePermissionsRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SharedAccountId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

		/** Required */
		Name: string;
	}
	export interface DeleteStackRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateDeleteStackRequestFormGroup() {
		return new FormGroup<DeleteStackRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

		/** Required */
		UserName: string;

		/** Required */
		AuthenticationType: AuthenticationType;
	}
	export interface DeleteUserRequestFormProperties {

		/** Required */
		UserName: FormControl<string | null | undefined>,

		/** Required */
		AuthenticationType: FormControl<AuthenticationType | null | undefined>,
	}
	export function CreateDeleteUserRequestFormGroup() {
		return new FormGroup<DeleteUserRequestFormProperties>({
			UserName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			AuthenticationType: new FormControl<AuthenticationType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeAppBlockBuilderAppBlockAssociationsResult {
		AppBlockBuilderAppBlockAssociations?: Array<AppBlockBuilderAppBlockAssociation>;
		NextToken?: string;
	}
	export interface DescribeAppBlockBuilderAppBlockAssociationsResultFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeAppBlockBuilderAppBlockAssociationsResultFormGroup() {
		return new FormGroup<DescribeAppBlockBuilderAppBlockAssociationsResultFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeAppBlockBuilderAppBlockAssociationsRequest {
		AppBlockArn?: string;
		AppBlockBuilderName?: string;
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface DescribeAppBlockBuilderAppBlockAssociationsRequestFormProperties {
		AppBlockArn: FormControl<string | null | undefined>,
		AppBlockBuilderName: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeAppBlockBuilderAppBlockAssociationsRequestFormGroup() {
		return new FormGroup<DescribeAppBlockBuilderAppBlockAssociationsRequestFormProperties>({
			AppBlockArn: new FormControl<string | null | undefined>(undefined),
			AppBlockBuilderName: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeAppBlockBuildersResult {
		AppBlockBuilders?: Array<AppBlockBuilder>;
		NextToken?: string;
	}
	export interface DescribeAppBlockBuildersResultFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeAppBlockBuildersResultFormGroup() {
		return new FormGroup<DescribeAppBlockBuildersResultFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeAppBlockBuildersRequest {
		Names?: Array<string>;
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface DescribeAppBlockBuildersRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateDescribeAppBlockBuildersRequestFormGroup() {
		return new FormGroup<DescribeAppBlockBuildersRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DescribeAppBlocksResult {
		AppBlocks?: Array<AppBlock>;
		NextToken?: string;
	}
	export interface DescribeAppBlocksResultFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeAppBlocksResultFormGroup() {
		return new FormGroup<DescribeAppBlocksResultFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeAppBlocksRequest {
		Arns?: Array<string>;
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface DescribeAppBlocksRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateDescribeAppBlocksRequestFormGroup() {
		return new FormGroup<DescribeAppBlocksRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DescribeApplicationFleetAssociationsResult {
		ApplicationFleetAssociations?: Array<ApplicationFleetAssociation>;
		NextToken?: string;
	}
	export interface DescribeApplicationFleetAssociationsResultFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeApplicationFleetAssociationsResultFormGroup() {
		return new FormGroup<DescribeApplicationFleetAssociationsResultFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeApplicationFleetAssociationsRequest {
		FleetName?: string;
		ApplicationArn?: string;
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface DescribeApplicationFleetAssociationsRequestFormProperties {
		FleetName: FormControl<string | null | undefined>,
		ApplicationArn: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeApplicationFleetAssociationsRequestFormGroup() {
		return new FormGroup<DescribeApplicationFleetAssociationsRequestFormProperties>({
			FleetName: new FormControl<string | null | undefined>(undefined),
			ApplicationArn: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeApplicationsResult {
		Applications?: Array<Application>;
		NextToken?: string;
	}
	export interface DescribeApplicationsResultFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeApplicationsResultFormGroup() {
		return new FormGroup<DescribeApplicationsResultFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeApplicationsRequest {
		Arns?: Array<string>;
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface DescribeApplicationsRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateDescribeApplicationsRequestFormGroup() {
		return new FormGroup<DescribeApplicationsRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DescribeDirectoryConfigsResult {
		DirectoryConfigs?: Array<DirectoryConfig>;
		NextToken?: string;
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
		NextToken?: string;
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

	export interface DescribeEntitlementsResult {
		Entitlements?: Array<Entitlement>;
		NextToken?: string;
	}
	export interface DescribeEntitlementsResultFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeEntitlementsResultFormGroup() {
		return new FormGroup<DescribeEntitlementsResultFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeEntitlementsRequest {
		Name?: string;

		/** Required */
		StackName: string;
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface DescribeEntitlementsRequestFormProperties {
		Name: FormControl<string | null | undefined>,

		/** Required */
		StackName: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateDescribeEntitlementsRequestFormGroup() {
		return new FormGroup<DescribeEntitlementsRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			StackName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DescribeFleetsResult {
		Fleets?: Array<Fleet>;
		NextToken?: string;
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
		NextToken?: string;
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
		NextToken?: string;
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
		NextToken?: string;
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
		Name?: string;
		SharedImagePermissionsList?: Array<SharedImagePermissions>;
		NextToken?: string;
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

		/** Required */
		sharedAccountId: string;

		/** Required */
		imagePermissions: ImagePermissions;
	}

	/** Describes the permissions that are available to the specified AWS account for a shared image. */
	export interface SharedImagePermissionsFormProperties {

		/** Required */
		sharedAccountId: FormControl<string | null | undefined>,
	}
	export function CreateSharedImagePermissionsFormGroup() {
		return new FormGroup<SharedImagePermissionsFormProperties>({
			sharedAccountId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeImagePermissionsRequest {

		/** Required */
		Name: string;
		MaxResults?: number | null;
		SharedAwsAccountIds?: Array<string>;
		NextToken?: string;
	}
	export interface DescribeImagePermissionsRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeImagePermissionsRequestFormGroup() {
		return new FormGroup<DescribeImagePermissionsRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeImagesResult {
		Images?: Array<Image>;
		NextToken?: string;
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
		Type?: VisibilityType;
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface DescribeImagesRequestFormProperties {
		Type: FormControl<VisibilityType | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateDescribeImagesRequestFormGroup() {
		return new FormGroup<DescribeImagesRequestFormProperties>({
			Type: new FormControl<VisibilityType | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DescribeSessionsResult {
		Sessions?: Array<Session>;
		NextToken?: string;
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

		/** Required */
		Id: string;

		/** Required */
		UserId: string;

		/** Required */
		StackName: string;

		/** Required */
		FleetName: string;

		/** Required */
		State: SessionState;
		ConnectionState?: SessionConnectionState;
		StartTime?: Date;
		MaxExpirationTime?: Date;
		AuthenticationType?: AuthenticationType;
		NetworkAccessConfiguration?: NetworkAccessConfiguration;
	}

	/** Describes a streaming session. */
	export interface SessionFormProperties {

		/** Required */
		Id: FormControl<string | null | undefined>,

		/** Required */
		UserId: FormControl<string | null | undefined>,

		/** Required */
		StackName: FormControl<string | null | undefined>,

		/** Required */
		FleetName: FormControl<string | null | undefined>,

		/** Required */
		State: FormControl<SessionState | null | undefined>,
		ConnectionState: FormControl<SessionConnectionState | null | undefined>,
		StartTime: FormControl<Date | null | undefined>,
		MaxExpirationTime: FormControl<Date | null | undefined>,
		AuthenticationType: FormControl<AuthenticationType | null | undefined>,
	}
	export function CreateSessionFormGroup() {
		return new FormGroup<SessionFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			UserId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			StackName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			FleetName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			State: new FormControl<SessionState | null | undefined>(undefined, [Validators.required]),
			ConnectionState: new FormControl<SessionConnectionState | null | undefined>(undefined),
			StartTime: new FormControl<Date | null | undefined>(undefined),
			MaxExpirationTime: new FormControl<Date | null | undefined>(undefined),
			AuthenticationType: new FormControl<AuthenticationType | null | undefined>(undefined),
		});

	}


	/** Possible values for the state of a streaming session. */
	export enum SessionState { ACTIVE = 'ACTIVE', PENDING = 'PENDING', EXPIRED = 'EXPIRED' }

	export enum SessionConnectionState { CONNECTED = 'CONNECTED', NOT_CONNECTED = 'NOT_CONNECTED' }

	export interface DescribeSessionsRequest {

		/** Required */
		StackName: string;

		/** Required */
		FleetName: string;
		UserId?: string;
		NextToken?: string;
		Limit?: number | null;
		AuthenticationType?: AuthenticationType;
	}
	export interface DescribeSessionsRequestFormProperties {

		/** Required */
		StackName: FormControl<string | null | undefined>,

		/** Required */
		FleetName: FormControl<string | null | undefined>,
		UserId: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		Limit: FormControl<number | null | undefined>,
		AuthenticationType: FormControl<AuthenticationType | null | undefined>,
	}
	export function CreateDescribeSessionsRequestFormGroup() {
		return new FormGroup<DescribeSessionsRequestFormProperties>({
			StackName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			FleetName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			UserId: new FormControl<string | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			Limit: new FormControl<number | null | undefined>(undefined),
			AuthenticationType: new FormControl<AuthenticationType | null | undefined>(undefined),
		});

	}

	export interface DescribeStacksResult {
		Stacks?: Array<Stack>;
		NextToken?: string;
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
		NextToken?: string;
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
		NextToken?: string;
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
		S3BucketName?: string;
		Schedule?: UsageReportSchedule;
		LastGeneratedReportDate?: Date;
		SubscriptionErrors?: Array<LastReportGenerationExecutionError>;
	}

	/** Describes information about the usage report subscription. */
	export interface UsageReportSubscriptionFormProperties {
		S3BucketName: FormControl<string | null | undefined>,
		Schedule: FormControl<UsageReportSchedule | null | undefined>,
		LastGeneratedReportDate: FormControl<Date | null | undefined>,
	}
	export function CreateUsageReportSubscriptionFormGroup() {
		return new FormGroup<UsageReportSubscriptionFormProperties>({
			S3BucketName: new FormControl<string | null | undefined>(undefined),
			Schedule: new FormControl<UsageReportSchedule | null | undefined>(undefined),
			LastGeneratedReportDate: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Describes the error that is returned when a usage report can't be generated. */
	export interface LastReportGenerationExecutionError {
		ErrorCode?: UsageReportExecutionErrorCode;
		ErrorMessage?: string;
	}

	/** Describes the error that is returned when a usage report can't be generated. */
	export interface LastReportGenerationExecutionErrorFormProperties {
		ErrorCode: FormControl<UsageReportExecutionErrorCode | null | undefined>,
		ErrorMessage: FormControl<string | null | undefined>,
	}
	export function CreateLastReportGenerationExecutionErrorFormGroup() {
		return new FormGroup<LastReportGenerationExecutionErrorFormProperties>({
			ErrorCode: new FormControl<UsageReportExecutionErrorCode | null | undefined>(undefined),
			ErrorMessage: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum UsageReportExecutionErrorCode { RESOURCE_NOT_FOUND = 'RESOURCE_NOT_FOUND', ACCESS_DENIED = 'ACCESS_DENIED', INTERNAL_SERVICE_ERROR = 'INTERNAL_SERVICE_ERROR' }

	export interface DescribeUsageReportSubscriptionsRequest {
		MaxResults?: number | null;
		NextToken?: string;
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
		NextToken?: string;
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
		StackName?: string;
		UserName?: string;
		AuthenticationType?: AuthenticationType;
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface DescribeUserStackAssociationsRequestFormProperties {
		StackName: FormControl<string | null | undefined>,
		UserName: FormControl<string | null | undefined>,
		AuthenticationType: FormControl<AuthenticationType | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeUserStackAssociationsRequestFormGroup() {
		return new FormGroup<DescribeUserStackAssociationsRequestFormProperties>({
			StackName: new FormControl<string | null | undefined>(undefined),
			UserName: new FormControl<string | null | undefined>(undefined),
			AuthenticationType: new FormControl<AuthenticationType | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeUsersResult {
		Users?: Array<User>;
		NextToken?: string;
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
		Arn?: string;
		UserName?: string;
		Enabled?: boolean | null;
		Status?: string;
		FirstName?: string;
		LastName?: string;
		CreatedTime?: Date;

		/** Required */
		AuthenticationType: AuthenticationType;
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

		/** Required */
		AuthenticationType: FormControl<AuthenticationType | null | undefined>,
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
			AuthenticationType: new FormControl<AuthenticationType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeUsersRequest {

		/** Required */
		AuthenticationType: AuthenticationType;
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface DescribeUsersRequestFormProperties {

		/** Required */
		AuthenticationType: FormControl<AuthenticationType | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeUsersRequestFormGroup() {
		return new FormGroup<DescribeUsersRequestFormProperties>({
			AuthenticationType: new FormControl<AuthenticationType | null | undefined>(undefined, [Validators.required]),
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

		/** Required */
		UserName: string;

		/** Required */
		AuthenticationType: AuthenticationType;
	}
	export interface DisableUserRequestFormProperties {

		/** Required */
		UserName: FormControl<string | null | undefined>,

		/** Required */
		AuthenticationType: FormControl<AuthenticationType | null | undefined>,
	}
	export function CreateDisableUserRequestFormGroup() {
		return new FormGroup<DisableUserRequestFormProperties>({
			UserName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			AuthenticationType: new FormControl<AuthenticationType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DisassociateAppBlockBuilderAppBlockResult {
	}
	export interface DisassociateAppBlockBuilderAppBlockResultFormProperties {
	}
	export function CreateDisassociateAppBlockBuilderAppBlockResultFormGroup() {
		return new FormGroup<DisassociateAppBlockBuilderAppBlockResultFormProperties>({
		});

	}

	export interface DisassociateAppBlockBuilderAppBlockRequest {

		/** Required */
		AppBlockArn: string;

		/** Required */
		AppBlockBuilderName: string;
	}
	export interface DisassociateAppBlockBuilderAppBlockRequestFormProperties {

		/** Required */
		AppBlockArn: FormControl<string | null | undefined>,

		/** Required */
		AppBlockBuilderName: FormControl<string | null | undefined>,
	}
	export function CreateDisassociateAppBlockBuilderAppBlockRequestFormGroup() {
		return new FormGroup<DisassociateAppBlockBuilderAppBlockRequestFormProperties>({
			AppBlockArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			AppBlockBuilderName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DisassociateApplicationFleetResult {
	}
	export interface DisassociateApplicationFleetResultFormProperties {
	}
	export function CreateDisassociateApplicationFleetResultFormGroup() {
		return new FormGroup<DisassociateApplicationFleetResultFormProperties>({
		});

	}

	export interface DisassociateApplicationFleetRequest {

		/** Required */
		FleetName: string;

		/** Required */
		ApplicationArn: string;
	}
	export interface DisassociateApplicationFleetRequestFormProperties {

		/** Required */
		FleetName: FormControl<string | null | undefined>,

		/** Required */
		ApplicationArn: FormControl<string | null | undefined>,
	}
	export function CreateDisassociateApplicationFleetRequestFormGroup() {
		return new FormGroup<DisassociateApplicationFleetRequestFormProperties>({
			FleetName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ApplicationArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DisassociateApplicationFromEntitlementResult {
	}
	export interface DisassociateApplicationFromEntitlementResultFormProperties {
	}
	export function CreateDisassociateApplicationFromEntitlementResultFormGroup() {
		return new FormGroup<DisassociateApplicationFromEntitlementResultFormProperties>({
		});

	}

	export interface DisassociateApplicationFromEntitlementRequest {

		/** Required */
		StackName: string;

		/** Required */
		EntitlementName: string;

		/** Required */
		ApplicationIdentifier: string;
	}
	export interface DisassociateApplicationFromEntitlementRequestFormProperties {

		/** Required */
		StackName: FormControl<string | null | undefined>,

		/** Required */
		EntitlementName: FormControl<string | null | undefined>,

		/** Required */
		ApplicationIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateDisassociateApplicationFromEntitlementRequestFormGroup() {
		return new FormGroup<DisassociateApplicationFromEntitlementRequestFormProperties>({
			StackName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			EntitlementName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ApplicationIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

		/** Required */
		FleetName: string;

		/** Required */
		StackName: string;
	}
	export interface DisassociateFleetRequestFormProperties {

		/** Required */
		FleetName: FormControl<string | null | undefined>,

		/** Required */
		StackName: FormControl<string | null | undefined>,
	}
	export function CreateDisassociateFleetRequestFormGroup() {
		return new FormGroup<DisassociateFleetRequestFormProperties>({
			FleetName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			StackName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

		/** Required */
		UserName: string;

		/** Required */
		AuthenticationType: AuthenticationType;
	}
	export interface EnableUserRequestFormProperties {

		/** Required */
		UserName: FormControl<string | null | undefined>,

		/** Required */
		AuthenticationType: FormControl<AuthenticationType | null | undefined>,
	}
	export function CreateEnableUserRequestFormGroup() {
		return new FormGroup<EnableUserRequestFormProperties>({
			UserName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			AuthenticationType: new FormControl<AuthenticationType | null | undefined>(undefined, [Validators.required]),
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

		/** Required */
		SessionId: string;
	}
	export interface ExpireSessionRequestFormProperties {

		/** Required */
		SessionId: FormControl<string | null | undefined>,
	}
	export function CreateExpireSessionRequestFormGroup() {
		return new FormGroup<ExpireSessionRequestFormProperties>({
			SessionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListAssociatedFleetsResult {
		Names?: Array<string>;
		NextToken?: string;
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

		/** Required */
		StackName: string;
		NextToken?: string;
	}
	export interface ListAssociatedFleetsRequestFormProperties {

		/** Required */
		StackName: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListAssociatedFleetsRequestFormGroup() {
		return new FormGroup<ListAssociatedFleetsRequestFormProperties>({
			StackName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListAssociatedStacksResult {
		Names?: Array<string>;
		NextToken?: string;
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

		/** Required */
		FleetName: string;
		NextToken?: string;
	}
	export interface ListAssociatedStacksRequestFormProperties {

		/** Required */
		FleetName: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListAssociatedStacksRequestFormGroup() {
		return new FormGroup<ListAssociatedStacksRequestFormProperties>({
			FleetName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListEntitledApplicationsResult {
		EntitledApplications?: Array<EntitledApplication>;
		NextToken?: string;
	}
	export interface ListEntitledApplicationsResultFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListEntitledApplicationsResultFormGroup() {
		return new FormGroup<ListEntitledApplicationsResultFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The application associated to an entitlement. Access is controlled based on user attributes. */
	export interface EntitledApplication {

		/** Required */
		ApplicationIdentifier: string;
	}

	/** The application associated to an entitlement. Access is controlled based on user attributes. */
	export interface EntitledApplicationFormProperties {

		/** Required */
		ApplicationIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateEntitledApplicationFormGroup() {
		return new FormGroup<EntitledApplicationFormProperties>({
			ApplicationIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListEntitledApplicationsRequest {

		/** Required */
		StackName: string;

		/** Required */
		EntitlementName: string;
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface ListEntitledApplicationsRequestFormProperties {

		/** Required */
		StackName: FormControl<string | null | undefined>,

		/** Required */
		EntitlementName: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListEntitledApplicationsRequestFormGroup() {
		return new FormGroup<ListEntitledApplicationsRequestFormProperties>({
			StackName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			EntitlementName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
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

		/** Required */
		ResourceArn: string;
	}
	export interface ListTagsForResourceRequestFormProperties {

		/** Required */
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateListTagsForResourceRequestFormGroup() {
		return new FormGroup<ListTagsForResourceRequestFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface StartAppBlockBuilderResult {

		/** Describes an app block builder. */
		AppBlockBuilder?: AppBlockBuilder;
	}
	export interface StartAppBlockBuilderResultFormProperties {
	}
	export function CreateStartAppBlockBuilderResultFormGroup() {
		return new FormGroup<StartAppBlockBuilderResultFormProperties>({
		});

	}

	export interface StartAppBlockBuilderRequest {

		/** Required */
		Name: string;
	}
	export interface StartAppBlockBuilderRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateStartAppBlockBuilderRequestFormGroup() {
		return new FormGroup<StartAppBlockBuilderRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

		/** Required */
		Name: string;
	}
	export interface StartFleetRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateStartFleetRequestFormGroup() {
		return new FormGroup<StartFleetRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface StartImageBuilderResult {
		ImageBuilder?: ImageBuilder;
	}
	export interface StartImageBuilderResultFormProperties {
	}
	export function CreateStartImageBuilderResultFormGroup() {
		return new FormGroup<StartImageBuilderResultFormProperties>({
		});

	}

	export interface StartImageBuilderRequest {

		/** Required */
		Name: string;
		AppstreamAgentVersion?: string;
	}
	export interface StartImageBuilderRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
		AppstreamAgentVersion: FormControl<string | null | undefined>,
	}
	export function CreateStartImageBuilderRequestFormGroup() {
		return new FormGroup<StartImageBuilderRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			AppstreamAgentVersion: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StopAppBlockBuilderResult {

		/** Describes an app block builder. */
		AppBlockBuilder?: AppBlockBuilder;
	}
	export interface StopAppBlockBuilderResultFormProperties {
	}
	export function CreateStopAppBlockBuilderResultFormGroup() {
		return new FormGroup<StopAppBlockBuilderResultFormProperties>({
		});

	}

	export interface StopAppBlockBuilderRequest {

		/** Required */
		Name: string;
	}
	export interface StopAppBlockBuilderRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateStopAppBlockBuilderRequestFormGroup() {
		return new FormGroup<StopAppBlockBuilderRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

		/** Required */
		Name: string;
	}
	export interface StopFleetRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateStopFleetRequestFormGroup() {
		return new FormGroup<StopFleetRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface StopImageBuilderResult {
		ImageBuilder?: ImageBuilder;
	}
	export interface StopImageBuilderResultFormProperties {
	}
	export function CreateStopImageBuilderResultFormGroup() {
		return new FormGroup<StopImageBuilderResultFormProperties>({
		});

	}

	export interface StopImageBuilderRequest {

		/** Required */
		Name: string;
	}
	export interface StopImageBuilderRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateStopImageBuilderRequestFormGroup() {
		return new FormGroup<StopImageBuilderRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

		/** Required */
		ResourceArn: string;

		/** Required */
		Tags: Tags;
	}
	export interface TagResourceRequestFormProperties {

		/** Required */
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateTagResourceRequestFormGroup() {
		return new FormGroup<TagResourceRequestFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

		/** Required */
		ResourceArn: string;

		/** Required */
		TagKeys: Array<string>;
	}
	export interface UntagResourceRequestFormProperties {

		/** Required */
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateUntagResourceRequestFormGroup() {
		return new FormGroup<UntagResourceRequestFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateAppBlockBuilderResult {

		/** Describes an app block builder. */
		AppBlockBuilder?: AppBlockBuilder;
	}
	export interface UpdateAppBlockBuilderResultFormProperties {
	}
	export function CreateUpdateAppBlockBuilderResultFormGroup() {
		return new FormGroup<UpdateAppBlockBuilderResultFormProperties>({
		});

	}

	export interface UpdateAppBlockBuilderRequest {

		/** Required */
		Name: string;
		Description?: string;
		DisplayName?: string;
		Platform?: PlatformType;
		InstanceType?: string;
		VpcConfig?: VpcConfig;
		EnableDefaultInternetAccess?: boolean | null;
		IamRoleArn?: string;
		AccessEndpoints?: Array<AccessEndpoint>;
		AttributesToDelete?: Array<AppBlockBuilderAttribute>;
	}
	export interface UpdateAppBlockBuilderRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		DisplayName: FormControl<string | null | undefined>,
		Platform: FormControl<PlatformType | null | undefined>,
		InstanceType: FormControl<string | null | undefined>,
		EnableDefaultInternetAccess: FormControl<boolean | null | undefined>,
		IamRoleArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateAppBlockBuilderRequestFormGroup() {
		return new FormGroup<UpdateAppBlockBuilderRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
			DisplayName: new FormControl<string | null | undefined>(undefined),
			Platform: new FormControl<PlatformType | null | undefined>(undefined),
			InstanceType: new FormControl<string | null | undefined>(undefined),
			EnableDefaultInternetAccess: new FormControl<boolean | null | undefined>(undefined),
			IamRoleArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AppBlockBuilderAttribute { IAM_ROLE_ARN = 'IAM_ROLE_ARN', ACCESS_ENDPOINTS = 'ACCESS_ENDPOINTS', VPC_CONFIGURATION_SECURITY_GROUP_IDS = 'VPC_CONFIGURATION_SECURITY_GROUP_IDS' }

	export interface UpdateApplicationResult {

		/** Describes an application in the application catalog. */
		Application?: Application;
	}
	export interface UpdateApplicationResultFormProperties {
	}
	export function CreateUpdateApplicationResultFormGroup() {
		return new FormGroup<UpdateApplicationResultFormProperties>({
		});

	}

	export interface UpdateApplicationRequest {

		/** Required */
		Name: string;
		DisplayName?: string;
		Description?: string;
		IconS3Location?: S3Location;
		LaunchPath?: string;
		WorkingDirectory?: string;
		LaunchParameters?: string;
		AppBlockArn?: string;
		AttributesToDelete?: Array<ApplicationAttribute>;
	}
	export interface UpdateApplicationRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
		DisplayName: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		LaunchPath: FormControl<string | null | undefined>,
		WorkingDirectory: FormControl<string | null | undefined>,
		LaunchParameters: FormControl<string | null | undefined>,
		AppBlockArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateApplicationRequestFormGroup() {
		return new FormGroup<UpdateApplicationRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DisplayName: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			LaunchPath: new FormControl<string | null | undefined>(undefined),
			WorkingDirectory: new FormControl<string | null | undefined>(undefined),
			LaunchParameters: new FormControl<string | null | undefined>(undefined),
			AppBlockArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ApplicationAttribute { LAUNCH_PARAMETERS = 'LAUNCH_PARAMETERS', WORKING_DIRECTORY = 'WORKING_DIRECTORY' }

	export interface UpdateDirectoryConfigResult {
		DirectoryConfig?: DirectoryConfig;
	}
	export interface UpdateDirectoryConfigResultFormProperties {
	}
	export function CreateUpdateDirectoryConfigResultFormGroup() {
		return new FormGroup<UpdateDirectoryConfigResultFormProperties>({
		});

	}

	export interface UpdateDirectoryConfigRequest {

		/** Required */
		DirectoryName: string;
		OrganizationalUnitDistinguishedNames?: Array<string>;
		ServiceAccountCredentials?: ServiceAccountCredentials;
		CertificateBasedAuthProperties?: CertificateBasedAuthProperties;
	}
	export interface UpdateDirectoryConfigRequestFormProperties {

		/** Required */
		DirectoryName: FormControl<string | null | undefined>,
	}
	export function CreateUpdateDirectoryConfigRequestFormGroup() {
		return new FormGroup<UpdateDirectoryConfigRequestFormProperties>({
			DirectoryName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateEntitlementResult {
		Entitlement?: Entitlement;
	}
	export interface UpdateEntitlementResultFormProperties {
	}
	export function CreateUpdateEntitlementResultFormGroup() {
		return new FormGroup<UpdateEntitlementResultFormProperties>({
		});

	}

	export interface UpdateEntitlementRequest {

		/** Required */
		Name: string;

		/** Required */
		StackName: string;
		Description?: string;
		AppVisibility?: AppVisibility;
		Attributes?: Array<EntitlementAttribute>;
	}
	export interface UpdateEntitlementRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		StackName: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		AppVisibility: FormControl<AppVisibility | null | undefined>,
	}
	export function CreateUpdateEntitlementRequestFormGroup() {
		return new FormGroup<UpdateEntitlementRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			StackName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
			AppVisibility: new FormControl<AppVisibility | null | undefined>(undefined),
		});

	}

	export interface UpdateFleetResult {
		Fleet?: Fleet;
	}
	export interface UpdateFleetResultFormProperties {
	}
	export function CreateUpdateFleetResultFormGroup() {
		return new FormGroup<UpdateFleetResultFormProperties>({
		});

	}

	export interface UpdateFleetRequest {
		ImageName?: string;
		ImageArn?: string;
		Name?: string;
		InstanceType?: string;
		ComputeCapacity?: ComputeCapacity;
		VpcConfig?: VpcConfig;
		MaxUserDurationInSeconds?: number | null;
		DisconnectTimeoutInSeconds?: number | null;
		DeleteVpcConfig?: boolean | null;
		Description?: string;
		DisplayName?: string;
		EnableDefaultInternetAccess?: boolean | null;
		DomainJoinInfo?: DomainJoinInfo;
		IdleDisconnectTimeoutInSeconds?: number | null;
		AttributesToDelete?: Array<FleetAttribute>;
		IamRoleArn?: string;
		StreamView?: StreamView;
		Platform?: PlatformType;
		MaxConcurrentSessions?: number | null;
		UsbDeviceFilterStrings?: Array<string>;
		SessionScriptS3Location?: S3Location;
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
		StreamView: FormControl<StreamView | null | undefined>,
		Platform: FormControl<PlatformType | null | undefined>,
		MaxConcurrentSessions: FormControl<number | null | undefined>,
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
			StreamView: new FormControl<StreamView | null | undefined>(undefined),
			Platform: new FormControl<PlatformType | null | undefined>(undefined),
			MaxConcurrentSessions: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The fleet attribute. */
	export enum FleetAttribute { VPC_CONFIGURATION = 'VPC_CONFIGURATION', VPC_CONFIGURATION_SECURITY_GROUP_IDS = 'VPC_CONFIGURATION_SECURITY_GROUP_IDS', DOMAIN_JOIN_INFO = 'DOMAIN_JOIN_INFO', IAM_ROLE_ARN = 'IAM_ROLE_ARN', USB_DEVICE_FILTER_STRINGS = 'USB_DEVICE_FILTER_STRINGS', SESSION_SCRIPT_S3_LOCATION = 'SESSION_SCRIPT_S3_LOCATION' }

	export interface UpdateImagePermissionsResult {
	}
	export interface UpdateImagePermissionsResultFormProperties {
	}
	export function CreateUpdateImagePermissionsResultFormGroup() {
		return new FormGroup<UpdateImagePermissionsResultFormProperties>({
		});

	}

	export interface UpdateImagePermissionsRequest {

		/** Required */
		Name: string;

		/** Required */
		SharedAccountId: string;

		/** Required */
		ImagePermissions: ImagePermissions;
	}
	export interface UpdateImagePermissionsRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		SharedAccountId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateImagePermissionsRequestFormGroup() {
		return new FormGroup<UpdateImagePermissionsRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SharedAccountId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateStackResult {
		Stack?: Stack;
	}
	export interface UpdateStackResultFormProperties {
	}
	export function CreateUpdateStackResultFormGroup() {
		return new FormGroup<UpdateStackResultFormProperties>({
		});

	}

	export interface UpdateStackRequest {
		DisplayName?: string;
		Description?: string;

		/** Required */
		Name: string;
		StorageConnectors?: Array<StorageConnector>;
		DeleteStorageConnectors?: boolean | null;
		RedirectURL?: string;
		FeedbackURL?: string;
		AttributesToDelete?: Array<StackAttribute>;
		UserSettings?: Array<UserSetting>;
		ApplicationSettings?: ApplicationSettings;
		AccessEndpoints?: Array<AccessEndpoint>;
		EmbedHostDomains?: Array<string>;
		StreamingExperienceSettings?: StreamingExperienceSettings;
	}
	export interface UpdateStackRequestFormProperties {
		DisplayName: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,
		DeleteStorageConnectors: FormControl<boolean | null | undefined>,
		RedirectURL: FormControl<string | null | undefined>,
		FeedbackURL: FormControl<string | null | undefined>,
	}
	export function CreateUpdateStackRequestFormGroup() {
		return new FormGroup<UpdateStackRequestFormProperties>({
			DisplayName: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DeleteStorageConnectors: new FormControl<boolean | null | undefined>(undefined),
			RedirectURL: new FormControl<string | null | undefined>(undefined),
			FeedbackURL: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum StackAttribute { STORAGE_CONNECTORS = 'STORAGE_CONNECTORS', STORAGE_CONNECTOR_HOMEFOLDERS = 'STORAGE_CONNECTOR_HOMEFOLDERS', STORAGE_CONNECTOR_GOOGLE_DRIVE = 'STORAGE_CONNECTOR_GOOGLE_DRIVE', STORAGE_CONNECTOR_ONE_DRIVE = 'STORAGE_CONNECTOR_ONE_DRIVE', REDIRECT_URL = 'REDIRECT_URL', FEEDBACK_URL = 'FEEDBACK_URL', THEME_NAME = 'THEME_NAME', USER_SETTINGS = 'USER_SETTINGS', EMBED_HOST_DOMAINS = 'EMBED_HOST_DOMAINS', IAM_ROLE_ARN = 'IAM_ROLE_ARN', ACCESS_ENDPOINTS = 'ACCESS_ENDPOINTS', STREAMING_EXPERIENCE_SETTINGS = 'STREAMING_EXPERIENCE_SETTINGS' }

	export enum FleetState { STARTING = 'STARTING', RUNNING = 'RUNNING', STOPPING = 'STOPPING', STOPPED = 'STOPPED' }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Associates the specified app block builder with the specified app block.
		 * Post #X-Amz-Target=PhotonAdminProxyService.AssociateAppBlockBuilderAppBlock
		 * @return {AssociateAppBlockBuilderAppBlockResult} Success
		 */
		AssociateAppBlockBuilderAppBlock(requestBody: AssociateAppBlockBuilderAppBlockRequest): Observable<AssociateAppBlockBuilderAppBlockResult> {
			return this.http.post<AssociateAppBlockBuilderAppBlockResult>(this.baseUri + '#X-Amz-Target=PhotonAdminProxyService.AssociateAppBlockBuilderAppBlock', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Associates the specified application with the specified fleet. This is only supported for Elastic fleets.
		 * Post #X-Amz-Target=PhotonAdminProxyService.AssociateApplicationFleet
		 * @return {AssociateApplicationFleetResult} Success
		 */
		AssociateApplicationFleet(requestBody: AssociateApplicationFleetRequest): Observable<AssociateApplicationFleetResult> {
			return this.http.post<AssociateApplicationFleetResult>(this.baseUri + '#X-Amz-Target=PhotonAdminProxyService.AssociateApplicationFleet', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Associates an application to entitle.
		 * Post #X-Amz-Target=PhotonAdminProxyService.AssociateApplicationToEntitlement
		 * @return {AssociateApplicationToEntitlementResult} Success
		 */
		AssociateApplicationToEntitlement(requestBody: AssociateApplicationToEntitlementRequest): Observable<AssociateApplicationToEntitlementResult> {
			return this.http.post<AssociateApplicationToEntitlementResult>(this.baseUri + '#X-Amz-Target=PhotonAdminProxyService.AssociateApplicationToEntitlement', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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
		 * <p>Creates an app block.</p> <p>App blocks are an Amazon AppStream 2.0 resource that stores the details about the virtual hard disk in an S3 bucket. It also stores the setup script with details about how to mount the virtual hard disk. The virtual hard disk includes the application binaries and other files necessary to launch your applications. Multiple applications can be assigned to a single app block.</p> <p>This is only supported for Elastic fleets.</p>
		 * Post #X-Amz-Target=PhotonAdminProxyService.CreateAppBlock
		 * @return {CreateAppBlockResult} Success
		 */
		CreateAppBlock(requestBody: CreateAppBlockRequest): Observable<CreateAppBlockResult> {
			return this.http.post<CreateAppBlockResult>(this.baseUri + '#X-Amz-Target=PhotonAdminProxyService.CreateAppBlock', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates an app block builder.
		 * Post #X-Amz-Target=PhotonAdminProxyService.CreateAppBlockBuilder
		 * @return {CreateAppBlockBuilderResult} Success
		 */
		CreateAppBlockBuilder(requestBody: CreateAppBlockBuilderRequest): Observable<CreateAppBlockBuilderResult> {
			return this.http.post<CreateAppBlockBuilderResult>(this.baseUri + '#X-Amz-Target=PhotonAdminProxyService.CreateAppBlockBuilder', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a URL to start a create app block builder streaming session.
		 * Post #X-Amz-Target=PhotonAdminProxyService.CreateAppBlockBuilderStreamingURL
		 * @return {CreateAppBlockBuilderStreamingURLResult} Success
		 */
		CreateAppBlockBuilderStreamingURL(requestBody: CreateAppBlockBuilderStreamingURLRequest): Observable<CreateAppBlockBuilderStreamingURLResult> {
			return this.http.post<CreateAppBlockBuilderStreamingURLResult>(this.baseUri + '#X-Amz-Target=PhotonAdminProxyService.CreateAppBlockBuilderStreamingURL', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates an application.</p> <p>Applications are an Amazon AppStream 2.0 resource that stores the details about how to launch applications on Elastic fleet streaming instances. An application consists of the launch details, icon, and display name. Applications are associated with an app block that contains the application binaries and other files. The applications assigned to an Elastic fleet are the applications users can launch. </p> <p>This is only supported for Elastic fleets.</p>
		 * Post #X-Amz-Target=PhotonAdminProxyService.CreateApplication
		 * @return {CreateApplicationResult} Success
		 */
		CreateApplication(requestBody: CreateApplicationRequest): Observable<CreateApplicationResult> {
			return this.http.post<CreateApplicationResult>(this.baseUri + '#X-Amz-Target=PhotonAdminProxyService.CreateApplication', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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
		 * Creates a new entitlement. Entitlements control access to specific applications within a stack, based on user attributes. Entitlements apply to SAML 2.0 federated user identities. Amazon AppStream 2.0 user pool and streaming URL users are entitled to all applications in a stack. Entitlements don't apply to the desktop stream view application, or to applications managed by a dynamic app provider using the Dynamic Application Framework.
		 * Post #X-Amz-Target=PhotonAdminProxyService.CreateEntitlement
		 * @return {CreateEntitlementResult} Success
		 */
		CreateEntitlement(requestBody: CreateEntitlementRequest): Observable<CreateEntitlementResult> {
			return this.http.post<CreateEntitlementResult>(this.baseUri + '#X-Amz-Target=PhotonAdminProxyService.CreateEntitlement', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a fleet. A fleet consists of streaming instances that your users access for their applications and desktops.
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
		 * <p>Creates a new image with the latest Windows operating system updates, driver updates, and AppStream 2.0 agent software.</p> <p>For more information, see the "Update an Image by Using Managed AppStream 2.0 Image Updates" section in <a href="https://docs.aws.amazon.com/appstream2/latest/developerguide/administer-images.html">Administer Your AppStream 2.0 Images</a>, in the <i>Amazon AppStream 2.0 Administration Guide</i>.</p>
		 * Post #X-Amz-Target=PhotonAdminProxyService.CreateUpdatedImage
		 * @return {CreateUpdatedImageResult} Success
		 */
		CreateUpdatedImage(requestBody: CreateUpdatedImageRequest): Observable<CreateUpdatedImageResult> {
			return this.http.post<CreateUpdatedImageResult>(this.baseUri + '#X-Amz-Target=PhotonAdminProxyService.CreateUpdatedImage', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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
		 * Deletes an app block.
		 * Post #X-Amz-Target=PhotonAdminProxyService.DeleteAppBlock
		 * @return {DeleteAppBlockResult} Success
		 */
		DeleteAppBlock(requestBody: DeleteAppBlockRequest): Observable<DeleteAppBlockResult> {
			return this.http.post<DeleteAppBlockResult>(this.baseUri + '#X-Amz-Target=PhotonAdminProxyService.DeleteAppBlock', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes an app block builder.</p> <p>An app block builder can only be deleted when it has no association with an app block.</p>
		 * Post #X-Amz-Target=PhotonAdminProxyService.DeleteAppBlockBuilder
		 * @return {DeleteAppBlockBuilderResult} Success
		 */
		DeleteAppBlockBuilder(requestBody: DeleteAppBlockBuilderRequest): Observable<DeleteAppBlockBuilderResult> {
			return this.http.post<DeleteAppBlockBuilderResult>(this.baseUri + '#X-Amz-Target=PhotonAdminProxyService.DeleteAppBlockBuilder', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an application.
		 * Post #X-Amz-Target=PhotonAdminProxyService.DeleteApplication
		 * @return {DeleteApplicationResult} Success
		 */
		DeleteApplication(requestBody: DeleteApplicationRequest): Observable<DeleteApplicationResult> {
			return this.http.post<DeleteApplicationResult>(this.baseUri + '#X-Amz-Target=PhotonAdminProxyService.DeleteApplication', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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
		 * Deletes the specified entitlement.
		 * Post #X-Amz-Target=PhotonAdminProxyService.DeleteEntitlement
		 * @return {DeleteEntitlementResult} Success
		 */
		DeleteEntitlement(requestBody: DeleteEntitlementRequest): Observable<DeleteEntitlementResult> {
			return this.http.post<DeleteEntitlementResult>(this.baseUri + '#X-Amz-Target=PhotonAdminProxyService.DeleteEntitlement', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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
		 * Retrieves a list that describes one or more app block builder associations.
		 * Post #X-Amz-Target=PhotonAdminProxyService.DescribeAppBlockBuilderAppBlockAssociations
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeAppBlockBuilderAppBlockAssociationsResult} Success
		 */
		DescribeAppBlockBuilderAppBlockAssociations(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: DescribeAppBlockBuilderAppBlockAssociationsRequest): Observable<DescribeAppBlockBuilderAppBlockAssociationsResult> {
			return this.http.post<DescribeAppBlockBuilderAppBlockAssociationsResult>(this.baseUri + '#X-Amz-Target=PhotonAdminProxyService.DescribeAppBlockBuilderAppBlockAssociations?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves a list that describes one or more app block builders.
		 * Post #X-Amz-Target=PhotonAdminProxyService.DescribeAppBlockBuilders
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeAppBlockBuildersResult} Success
		 */
		DescribeAppBlockBuilders(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: DescribeAppBlockBuildersRequest): Observable<DescribeAppBlockBuildersResult> {
			return this.http.post<DescribeAppBlockBuildersResult>(this.baseUri + '#X-Amz-Target=PhotonAdminProxyService.DescribeAppBlockBuilders?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves a list that describes one or more app blocks.
		 * Post #X-Amz-Target=PhotonAdminProxyService.DescribeAppBlocks
		 * @return {DescribeAppBlocksResult} Success
		 */
		DescribeAppBlocks(requestBody: DescribeAppBlocksRequest): Observable<DescribeAppBlocksResult> {
			return this.http.post<DescribeAppBlocksResult>(this.baseUri + '#X-Amz-Target=PhotonAdminProxyService.DescribeAppBlocks', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves a list that describes one or more application fleet associations. Either ApplicationArn or FleetName must be specified.
		 * Post #X-Amz-Target=PhotonAdminProxyService.DescribeApplicationFleetAssociations
		 * @return {DescribeApplicationFleetAssociationsResult} Success
		 */
		DescribeApplicationFleetAssociations(requestBody: DescribeApplicationFleetAssociationsRequest): Observable<DescribeApplicationFleetAssociationsResult> {
			return this.http.post<DescribeApplicationFleetAssociationsResult>(this.baseUri + '#X-Amz-Target=PhotonAdminProxyService.DescribeApplicationFleetAssociations', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves a list that describes one or more applications.
		 * Post #X-Amz-Target=PhotonAdminProxyService.DescribeApplications
		 * @return {DescribeApplicationsResult} Success
		 */
		DescribeApplications(requestBody: DescribeApplicationsRequest): Observable<DescribeApplicationsResult> {
			return this.http.post<DescribeApplicationsResult>(this.baseUri + '#X-Amz-Target=PhotonAdminProxyService.DescribeApplications', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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
		 * Retrieves a list that describes one of more entitlements.
		 * Post #X-Amz-Target=PhotonAdminProxyService.DescribeEntitlements
		 * @return {DescribeEntitlementsResult} Success
		 */
		DescribeEntitlements(requestBody: DescribeEntitlementsRequest): Observable<DescribeEntitlementsResult> {
			return this.http.post<DescribeEntitlementsResult>(this.baseUri + '#X-Amz-Target=PhotonAdminProxyService.DescribeEntitlements', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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
		 * Disassociates a specified app block builder from a specified app block.
		 * Post #X-Amz-Target=PhotonAdminProxyService.DisassociateAppBlockBuilderAppBlock
		 * @return {DisassociateAppBlockBuilderAppBlockResult} Success
		 */
		DisassociateAppBlockBuilderAppBlock(requestBody: DisassociateAppBlockBuilderAppBlockRequest): Observable<DisassociateAppBlockBuilderAppBlockResult> {
			return this.http.post<DisassociateAppBlockBuilderAppBlockResult>(this.baseUri + '#X-Amz-Target=PhotonAdminProxyService.DisassociateAppBlockBuilderAppBlock', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Disassociates the specified application from the fleet.
		 * Post #X-Amz-Target=PhotonAdminProxyService.DisassociateApplicationFleet
		 * @return {DisassociateApplicationFleetResult} Success
		 */
		DisassociateApplicationFleet(requestBody: DisassociateApplicationFleetRequest): Observable<DisassociateApplicationFleetResult> {
			return this.http.post<DisassociateApplicationFleetResult>(this.baseUri + '#X-Amz-Target=PhotonAdminProxyService.DisassociateApplicationFleet', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the specified application from the specified entitlement.
		 * Post #X-Amz-Target=PhotonAdminProxyService.DisassociateApplicationFromEntitlement
		 * @return {DisassociateApplicationFromEntitlementResult} Success
		 */
		DisassociateApplicationFromEntitlement(requestBody: DisassociateApplicationFromEntitlementRequest): Observable<DisassociateApplicationFromEntitlementResult> {
			return this.http.post<DisassociateApplicationFromEntitlementResult>(this.baseUri + '#X-Amz-Target=PhotonAdminProxyService.DisassociateApplicationFromEntitlement', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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
		 * Retrieves a list of entitled applications.
		 * Post #X-Amz-Target=PhotonAdminProxyService.ListEntitledApplications
		 * @return {ListEntitledApplicationsResult} Success
		 */
		ListEntitledApplications(requestBody: ListEntitledApplicationsRequest): Observable<ListEntitledApplicationsResult> {
			return this.http.post<ListEntitledApplicationsResult>(this.baseUri + '#X-Amz-Target=PhotonAdminProxyService.ListEntitledApplications', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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
		 * <p>Starts an app block builder.</p> <p>An app block builder can only be started when it's associated with an app block.</p> <p>Starting an app block builder starts a new instance, which is equivalent to an elastic fleet instance with application builder assistance functionality.</p>
		 * Post #X-Amz-Target=PhotonAdminProxyService.StartAppBlockBuilder
		 * @return {StartAppBlockBuilderResult} Success
		 */
		StartAppBlockBuilder(requestBody: StartAppBlockBuilderRequest): Observable<StartAppBlockBuilderResult> {
			return this.http.post<StartAppBlockBuilderResult>(this.baseUri + '#X-Amz-Target=PhotonAdminProxyService.StartAppBlockBuilder', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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
		 * <p>Stops an app block builder.</p> <p>Stopping an app block builder terminates the instance, and the instance state is not persisted.</p>
		 * Post #X-Amz-Target=PhotonAdminProxyService.StopAppBlockBuilder
		 * @return {StopAppBlockBuilderResult} Success
		 */
		StopAppBlockBuilder(requestBody: StopAppBlockBuilderRequest): Observable<StopAppBlockBuilderResult> {
			return this.http.post<StopAppBlockBuilderResult>(this.baseUri + '#X-Amz-Target=PhotonAdminProxyService.StopAppBlockBuilder', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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
		 * <p>Updates an app block builder.</p> <p>If the app block builder is in the <code>STARTING</code> or <code>STOPPING</code> state, you can't update it. If the app block builder is in the <code>RUNNING</code> state, you can only update the DisplayName and Description. If the app block builder is in the <code>STOPPED</code> state, you can update any attribute except the Name.</p>
		 * Post #X-Amz-Target=PhotonAdminProxyService.UpdateAppBlockBuilder
		 * @return {UpdateAppBlockBuilderResult} Success
		 */
		UpdateAppBlockBuilder(requestBody: UpdateAppBlockBuilderRequest): Observable<UpdateAppBlockBuilderResult> {
			return this.http.post<UpdateAppBlockBuilderResult>(this.baseUri + '#X-Amz-Target=PhotonAdminProxyService.UpdateAppBlockBuilder', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates the specified application.
		 * Post #X-Amz-Target=PhotonAdminProxyService.UpdateApplication
		 * @return {UpdateApplicationResult} Success
		 */
		UpdateApplication(requestBody: UpdateApplicationRequest): Observable<UpdateApplicationResult> {
			return this.http.post<UpdateApplicationResult>(this.baseUri + '#X-Amz-Target=PhotonAdminProxyService.UpdateApplication', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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
		 * Updates the specified entitlement.
		 * Post #X-Amz-Target=PhotonAdminProxyService.UpdateEntitlement
		 * @return {UpdateEntitlementResult} Success
		 */
		UpdateEntitlement(requestBody: UpdateEntitlementRequest): Observable<UpdateEntitlementResult> {
			return this.http.post<UpdateEntitlementResult>(this.baseUri + '#X-Amz-Target=PhotonAdminProxyService.UpdateEntitlement', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Updates the specified fleet.</p> <p>If the fleet is in the <code>STOPPED</code> state, you can update any attribute except the fleet name.</p> <p>If the fleet is in the <code>RUNNING</code> state, you can update the following based on the fleet type:</p> <ul> <li> <p>Always-On and On-Demand fleet types</p> <p>You can update the <code>DisplayName</code>, <code>ComputeCapacity</code>, <code>ImageARN</code>, <code>ImageName</code>, <code>IdleDisconnectTimeoutInSeconds</code>, and <code>DisconnectTimeoutInSeconds</code> attributes.</p> </li> <li> <p>Elastic fleet type</p> <p>You can update the <code>DisplayName</code>, <code>IdleDisconnectTimeoutInSeconds</code>, <code>DisconnectTimeoutInSeconds</code>, <code>MaxConcurrentSessions</code>, <code>SessionScriptS3Location</code> and <code>UsbDeviceFilterStrings</code> attributes.</p> </li> </ul> <p>If the fleet is in the <code>STARTING</code> or <code>STOPPED</code> state, you can't update it.</p>
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

	export enum AssociateAppBlockBuilderAppBlockX_Amz_Target { 'PhotonAdminProxyService.AssociateAppBlockBuilderAppBlock' = 'PhotonAdminProxyService.AssociateAppBlockBuilderAppBlock' }

	export enum AssociateApplicationFleetX_Amz_Target { 'PhotonAdminProxyService.AssociateApplicationFleet' = 'PhotonAdminProxyService.AssociateApplicationFleet' }

	export enum AssociateApplicationToEntitlementX_Amz_Target { 'PhotonAdminProxyService.AssociateApplicationToEntitlement' = 'PhotonAdminProxyService.AssociateApplicationToEntitlement' }

	export enum AssociateFleetX_Amz_Target { 'PhotonAdminProxyService.AssociateFleet' = 'PhotonAdminProxyService.AssociateFleet' }

	export enum BatchAssociateUserStackX_Amz_Target { 'PhotonAdminProxyService.BatchAssociateUserStack' = 'PhotonAdminProxyService.BatchAssociateUserStack' }

	export enum BatchDisassociateUserStackX_Amz_Target { 'PhotonAdminProxyService.BatchDisassociateUserStack' = 'PhotonAdminProxyService.BatchDisassociateUserStack' }

	export enum CopyImageX_Amz_Target { 'PhotonAdminProxyService.CopyImage' = 'PhotonAdminProxyService.CopyImage' }

	export enum CreateAppBlockX_Amz_Target { 'PhotonAdminProxyService.CreateAppBlock' = 'PhotonAdminProxyService.CreateAppBlock' }

	export enum CreateAppBlockBuilderX_Amz_Target { 'PhotonAdminProxyService.CreateAppBlockBuilder' = 'PhotonAdminProxyService.CreateAppBlockBuilder' }

	export enum CreateAppBlockBuilderStreamingURLX_Amz_Target { 'PhotonAdminProxyService.CreateAppBlockBuilderStreamingURL' = 'PhotonAdminProxyService.CreateAppBlockBuilderStreamingURL' }

	export enum CreateApplicationX_Amz_Target { 'PhotonAdminProxyService.CreateApplication' = 'PhotonAdminProxyService.CreateApplication' }

	export enum CreateDirectoryConfigX_Amz_Target { 'PhotonAdminProxyService.CreateDirectoryConfig' = 'PhotonAdminProxyService.CreateDirectoryConfig' }

	export enum CreateEntitlementX_Amz_Target { 'PhotonAdminProxyService.CreateEntitlement' = 'PhotonAdminProxyService.CreateEntitlement' }

	export enum CreateFleetX_Amz_Target { 'PhotonAdminProxyService.CreateFleet' = 'PhotonAdminProxyService.CreateFleet' }

	export enum CreateImageBuilderX_Amz_Target { 'PhotonAdminProxyService.CreateImageBuilder' = 'PhotonAdminProxyService.CreateImageBuilder' }

	export enum CreateImageBuilderStreamingURLX_Amz_Target { 'PhotonAdminProxyService.CreateImageBuilderStreamingURL' = 'PhotonAdminProxyService.CreateImageBuilderStreamingURL' }

	export enum CreateStackX_Amz_Target { 'PhotonAdminProxyService.CreateStack' = 'PhotonAdminProxyService.CreateStack' }

	export enum CreateStreamingURLX_Amz_Target { 'PhotonAdminProxyService.CreateStreamingURL' = 'PhotonAdminProxyService.CreateStreamingURL' }

	export enum CreateUpdatedImageX_Amz_Target { 'PhotonAdminProxyService.CreateUpdatedImage' = 'PhotonAdminProxyService.CreateUpdatedImage' }

	export enum CreateUsageReportSubscriptionX_Amz_Target { 'PhotonAdminProxyService.CreateUsageReportSubscription' = 'PhotonAdminProxyService.CreateUsageReportSubscription' }

	export enum CreateUserX_Amz_Target { 'PhotonAdminProxyService.CreateUser' = 'PhotonAdminProxyService.CreateUser' }

	export enum DeleteAppBlockX_Amz_Target { 'PhotonAdminProxyService.DeleteAppBlock' = 'PhotonAdminProxyService.DeleteAppBlock' }

	export enum DeleteAppBlockBuilderX_Amz_Target { 'PhotonAdminProxyService.DeleteAppBlockBuilder' = 'PhotonAdminProxyService.DeleteAppBlockBuilder' }

	export enum DeleteApplicationX_Amz_Target { 'PhotonAdminProxyService.DeleteApplication' = 'PhotonAdminProxyService.DeleteApplication' }

	export enum DeleteDirectoryConfigX_Amz_Target { 'PhotonAdminProxyService.DeleteDirectoryConfig' = 'PhotonAdminProxyService.DeleteDirectoryConfig' }

	export enum DeleteEntitlementX_Amz_Target { 'PhotonAdminProxyService.DeleteEntitlement' = 'PhotonAdminProxyService.DeleteEntitlement' }

	export enum DeleteFleetX_Amz_Target { 'PhotonAdminProxyService.DeleteFleet' = 'PhotonAdminProxyService.DeleteFleet' }

	export enum DeleteImageX_Amz_Target { 'PhotonAdminProxyService.DeleteImage' = 'PhotonAdminProxyService.DeleteImage' }

	export enum DeleteImageBuilderX_Amz_Target { 'PhotonAdminProxyService.DeleteImageBuilder' = 'PhotonAdminProxyService.DeleteImageBuilder' }

	export enum DeleteImagePermissionsX_Amz_Target { 'PhotonAdminProxyService.DeleteImagePermissions' = 'PhotonAdminProxyService.DeleteImagePermissions' }

	export enum DeleteStackX_Amz_Target { 'PhotonAdminProxyService.DeleteStack' = 'PhotonAdminProxyService.DeleteStack' }

	export enum DeleteUsageReportSubscriptionX_Amz_Target { 'PhotonAdminProxyService.DeleteUsageReportSubscription' = 'PhotonAdminProxyService.DeleteUsageReportSubscription' }

	export enum DeleteUserX_Amz_Target { 'PhotonAdminProxyService.DeleteUser' = 'PhotonAdminProxyService.DeleteUser' }

	export enum DescribeAppBlockBuilderAppBlockAssociationsX_Amz_Target { 'PhotonAdminProxyService.DescribeAppBlockBuilderAppBlockAssociations' = 'PhotonAdminProxyService.DescribeAppBlockBuilderAppBlockAssociations' }

	export enum DescribeAppBlockBuildersX_Amz_Target { 'PhotonAdminProxyService.DescribeAppBlockBuilders' = 'PhotonAdminProxyService.DescribeAppBlockBuilders' }

	export enum DescribeAppBlocksX_Amz_Target { 'PhotonAdminProxyService.DescribeAppBlocks' = 'PhotonAdminProxyService.DescribeAppBlocks' }

	export enum DescribeApplicationFleetAssociationsX_Amz_Target { 'PhotonAdminProxyService.DescribeApplicationFleetAssociations' = 'PhotonAdminProxyService.DescribeApplicationFleetAssociations' }

	export enum DescribeApplicationsX_Amz_Target { 'PhotonAdminProxyService.DescribeApplications' = 'PhotonAdminProxyService.DescribeApplications' }

	export enum DescribeDirectoryConfigsX_Amz_Target { 'PhotonAdminProxyService.DescribeDirectoryConfigs' = 'PhotonAdminProxyService.DescribeDirectoryConfigs' }

	export enum DescribeEntitlementsX_Amz_Target { 'PhotonAdminProxyService.DescribeEntitlements' = 'PhotonAdminProxyService.DescribeEntitlements' }

	export enum DescribeFleetsX_Amz_Target { 'PhotonAdminProxyService.DescribeFleets' = 'PhotonAdminProxyService.DescribeFleets' }

	export enum DescribeImageBuildersX_Amz_Target { 'PhotonAdminProxyService.DescribeImageBuilders' = 'PhotonAdminProxyService.DescribeImageBuilders' }

	export enum DescribeImagePermissionsX_Amz_Target { 'PhotonAdminProxyService.DescribeImagePermissions' = 'PhotonAdminProxyService.DescribeImagePermissions' }

	export enum DescribeImagesX_Amz_Target { 'PhotonAdminProxyService.DescribeImages' = 'PhotonAdminProxyService.DescribeImages' }

	export enum DescribeSessionsX_Amz_Target { 'PhotonAdminProxyService.DescribeSessions' = 'PhotonAdminProxyService.DescribeSessions' }

	export enum DescribeStacksX_Amz_Target { 'PhotonAdminProxyService.DescribeStacks' = 'PhotonAdminProxyService.DescribeStacks' }

	export enum DescribeUsageReportSubscriptionsX_Amz_Target { 'PhotonAdminProxyService.DescribeUsageReportSubscriptions' = 'PhotonAdminProxyService.DescribeUsageReportSubscriptions' }

	export enum DescribeUserStackAssociationsX_Amz_Target { 'PhotonAdminProxyService.DescribeUserStackAssociations' = 'PhotonAdminProxyService.DescribeUserStackAssociations' }

	export enum DescribeUsersX_Amz_Target { 'PhotonAdminProxyService.DescribeUsers' = 'PhotonAdminProxyService.DescribeUsers' }

	export enum DisableUserX_Amz_Target { 'PhotonAdminProxyService.DisableUser' = 'PhotonAdminProxyService.DisableUser' }

	export enum DisassociateAppBlockBuilderAppBlockX_Amz_Target { 'PhotonAdminProxyService.DisassociateAppBlockBuilderAppBlock' = 'PhotonAdminProxyService.DisassociateAppBlockBuilderAppBlock' }

	export enum DisassociateApplicationFleetX_Amz_Target { 'PhotonAdminProxyService.DisassociateApplicationFleet' = 'PhotonAdminProxyService.DisassociateApplicationFleet' }

	export enum DisassociateApplicationFromEntitlementX_Amz_Target { 'PhotonAdminProxyService.DisassociateApplicationFromEntitlement' = 'PhotonAdminProxyService.DisassociateApplicationFromEntitlement' }

	export enum DisassociateFleetX_Amz_Target { 'PhotonAdminProxyService.DisassociateFleet' = 'PhotonAdminProxyService.DisassociateFleet' }

	export enum EnableUserX_Amz_Target { 'PhotonAdminProxyService.EnableUser' = 'PhotonAdminProxyService.EnableUser' }

	export enum ExpireSessionX_Amz_Target { 'PhotonAdminProxyService.ExpireSession' = 'PhotonAdminProxyService.ExpireSession' }

	export enum ListAssociatedFleetsX_Amz_Target { 'PhotonAdminProxyService.ListAssociatedFleets' = 'PhotonAdminProxyService.ListAssociatedFleets' }

	export enum ListAssociatedStacksX_Amz_Target { 'PhotonAdminProxyService.ListAssociatedStacks' = 'PhotonAdminProxyService.ListAssociatedStacks' }

	export enum ListEntitledApplicationsX_Amz_Target { 'PhotonAdminProxyService.ListEntitledApplications' = 'PhotonAdminProxyService.ListEntitledApplications' }

	export enum ListTagsForResourceX_Amz_Target { 'PhotonAdminProxyService.ListTagsForResource' = 'PhotonAdminProxyService.ListTagsForResource' }

	export enum StartAppBlockBuilderX_Amz_Target { 'PhotonAdminProxyService.StartAppBlockBuilder' = 'PhotonAdminProxyService.StartAppBlockBuilder' }

	export enum StartFleetX_Amz_Target { 'PhotonAdminProxyService.StartFleet' = 'PhotonAdminProxyService.StartFleet' }

	export enum StartImageBuilderX_Amz_Target { 'PhotonAdminProxyService.StartImageBuilder' = 'PhotonAdminProxyService.StartImageBuilder' }

	export enum StopAppBlockBuilderX_Amz_Target { 'PhotonAdminProxyService.StopAppBlockBuilder' = 'PhotonAdminProxyService.StopAppBlockBuilder' }

	export enum StopFleetX_Amz_Target { 'PhotonAdminProxyService.StopFleet' = 'PhotonAdminProxyService.StopFleet' }

	export enum StopImageBuilderX_Amz_Target { 'PhotonAdminProxyService.StopImageBuilder' = 'PhotonAdminProxyService.StopImageBuilder' }

	export enum TagResourceX_Amz_Target { 'PhotonAdminProxyService.TagResource' = 'PhotonAdminProxyService.TagResource' }

	export enum UntagResourceX_Amz_Target { 'PhotonAdminProxyService.UntagResource' = 'PhotonAdminProxyService.UntagResource' }

	export enum UpdateAppBlockBuilderX_Amz_Target { 'PhotonAdminProxyService.UpdateAppBlockBuilder' = 'PhotonAdminProxyService.UpdateAppBlockBuilder' }

	export enum UpdateApplicationX_Amz_Target { 'PhotonAdminProxyService.UpdateApplication' = 'PhotonAdminProxyService.UpdateApplication' }

	export enum UpdateDirectoryConfigX_Amz_Target { 'PhotonAdminProxyService.UpdateDirectoryConfig' = 'PhotonAdminProxyService.UpdateDirectoryConfig' }

	export enum UpdateEntitlementX_Amz_Target { 'PhotonAdminProxyService.UpdateEntitlement' = 'PhotonAdminProxyService.UpdateEntitlement' }

	export enum UpdateFleetX_Amz_Target { 'PhotonAdminProxyService.UpdateFleet' = 'PhotonAdminProxyService.UpdateFleet' }

	export enum UpdateImagePermissionsX_Amz_Target { 'PhotonAdminProxyService.UpdateImagePermissions' = 'PhotonAdminProxyService.UpdateImagePermissions' }

	export enum UpdateStackX_Amz_Target { 'PhotonAdminProxyService.UpdateStack' = 'PhotonAdminProxyService.UpdateStack' }

}

