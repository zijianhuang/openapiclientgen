import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface AddFlowOutputsResponse {
		FlowArn?: string | null;
		Outputs?: Array<Output>;
	}
	export interface AddFlowOutputsResponseFormProperties {
		FlowArn: FormControl<string | null | undefined>,
	}
	export function CreateAddFlowOutputsResponseFormGroup() {
		return new FormGroup<AddFlowOutputsResponseFormProperties>({
			FlowArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The settings for an output. */
	export interface Output {
		DataTransferSubscriberFeePercent?: number | null;
		Description?: string | null;
		Destination?: string | null;

		/** Information about the encryption of the flow. */
		Encryption?: Encryption;
		EntitlementArn?: string | null;
		MediaLiveInputArn?: string | null;

		/** Required */
		Name: string;

		/** Required */
		OutputArn: string;
		Port?: number | null;

		/** Attributes related to the transport stream that are used in a source or output. */
		Transport?: Transport;

		/** The settings for attaching a VPC interface to an output. */
		VpcInterfaceAttachment?: VpcInterfaceAttachment;
	}

	/** The settings for an output. */
	export interface OutputFormProperties {
		DataTransferSubscriberFeePercent: FormControl<number | null | undefined>,
		Description: FormControl<string | null | undefined>,
		Destination: FormControl<string | null | undefined>,
		EntitlementArn: FormControl<string | null | undefined>,
		MediaLiveInputArn: FormControl<string | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		OutputArn: FormControl<string | null | undefined>,
		Port: FormControl<number | null | undefined>,
	}
	export function CreateOutputFormGroup() {
		return new FormGroup<OutputFormProperties>({
			DataTransferSubscriberFeePercent: new FormControl<number | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			Destination: new FormControl<string | null | undefined>(undefined),
			EntitlementArn: new FormControl<string | null | undefined>(undefined),
			MediaLiveInputArn: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			OutputArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Port: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Information about the encryption of the flow. */
	export interface Encryption {

		/** Required */
		Algorithm: EncryptionAlgorithm;
		ConstantInitializationVector?: string | null;
		DeviceId?: string | null;
		KeyType?: EncryptionKeyType | null;
		Region?: string | null;
		ResourceId?: string | null;

		/** Required */
		RoleArn: string;
		SecretArn?: string | null;
		Url?: string | null;
	}

	/** Information about the encryption of the flow. */
	export interface EncryptionFormProperties {

		/** Required */
		Algorithm: FormControl<EncryptionAlgorithm | null | undefined>,
		ConstantInitializationVector: FormControl<string | null | undefined>,
		DeviceId: FormControl<string | null | undefined>,
		KeyType: FormControl<EncryptionKeyType | null | undefined>,
		Region: FormControl<string | null | undefined>,
		ResourceId: FormControl<string | null | undefined>,

		/** Required */
		RoleArn: FormControl<string | null | undefined>,
		SecretArn: FormControl<string | null | undefined>,
		Url: FormControl<string | null | undefined>,
	}
	export function CreateEncryptionFormGroup() {
		return new FormGroup<EncryptionFormProperties>({
			Algorithm: new FormControl<EncryptionAlgorithm | null | undefined>(undefined, [Validators.required]),
			ConstantInitializationVector: new FormControl<string | null | undefined>(undefined),
			DeviceId: new FormControl<string | null | undefined>(undefined),
			KeyType: new FormControl<EncryptionKeyType | null | undefined>(undefined),
			Region: new FormControl<string | null | undefined>(undefined),
			ResourceId: new FormControl<string | null | undefined>(undefined),
			RoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SecretArn: new FormControl<string | null | undefined>(undefined),
			Url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum EncryptionAlgorithm { aes128 = 0, aes192 = 1, aes256 = 2 }

	export enum EncryptionKeyType { speke = 0, static_key = 1 }


	/** Attributes related to the transport stream that are used in a source or output. */
	export interface Transport {
		CidrAllowList?: Array<string>;
		MaxBitrate?: number | null;
		MaxLatency?: number | null;

		/** Required */
		Protocol: TransportProtocol;
		RemoteId?: string | null;
		SmoothingLatency?: number | null;
		StreamId?: string | null;
	}

	/** Attributes related to the transport stream that are used in a source or output. */
	export interface TransportFormProperties {
		MaxBitrate: FormControl<number | null | undefined>,
		MaxLatency: FormControl<number | null | undefined>,

		/** Required */
		Protocol: FormControl<TransportProtocol | null | undefined>,
		RemoteId: FormControl<string | null | undefined>,
		SmoothingLatency: FormControl<number | null | undefined>,
		StreamId: FormControl<string | null | undefined>,
	}
	export function CreateTransportFormGroup() {
		return new FormGroup<TransportFormProperties>({
			MaxBitrate: new FormControl<number | null | undefined>(undefined),
			MaxLatency: new FormControl<number | null | undefined>(undefined),
			Protocol: new FormControl<TransportProtocol | null | undefined>(undefined, [Validators.required]),
			RemoteId: new FormControl<string | null | undefined>(undefined),
			SmoothingLatency: new FormControl<number | null | undefined>(undefined),
			StreamId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum TransportProtocol { zixi_push = 0, rtp_fec = 1, rtp = 2, zixi_pull = 3, rist = 4 }


	/** The settings for attaching a VPC interface to an output. */
	export interface VpcInterfaceAttachment {
		VpcInterfaceName?: string | null;
	}

	/** The settings for attaching a VPC interface to an output. */
	export interface VpcInterfaceAttachmentFormProperties {
		VpcInterfaceName: FormControl<string | null | undefined>,
	}
	export function CreateVpcInterfaceAttachmentFormGroup() {
		return new FormGroup<VpcInterfaceAttachmentFormProperties>({
			VpcInterfaceName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The output that you want to add to this flow. */
	export interface AddOutputRequest {
		CidrAllowList?: Array<string>;
		Description?: string | null;
		Destination?: string | null;

		/** Information about the encryption of the flow. */
		Encryption?: Encryption;
		MaxLatency?: number | null;
		Name?: string | null;
		Port?: number | null;

		/** Required */
		Protocol: AddOutputRequestProtocol;
		RemoteId?: string | null;
		SmoothingLatency?: number | null;
		StreamId?: string | null;

		/** The settings for attaching a VPC interface to an output. */
		VpcInterfaceAttachment?: VpcInterfaceAttachment;
	}

	/** The output that you want to add to this flow. */
	export interface AddOutputRequestFormProperties {
		Description: FormControl<string | null | undefined>,
		Destination: FormControl<string | null | undefined>,
		MaxLatency: FormControl<number | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Port: FormControl<number | null | undefined>,

		/** Required */
		Protocol: FormControl<AddOutputRequestProtocol | null | undefined>,
		RemoteId: FormControl<string | null | undefined>,
		SmoothingLatency: FormControl<number | null | undefined>,
		StreamId: FormControl<string | null | undefined>,
	}
	export function CreateAddOutputRequestFormGroup() {
		return new FormGroup<AddOutputRequestFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined),
			Destination: new FormControl<string | null | undefined>(undefined),
			MaxLatency: new FormControl<number | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Port: new FormControl<number | null | undefined>(undefined),
			Protocol: new FormControl<AddOutputRequestProtocol | null | undefined>(undefined, [Validators.required]),
			RemoteId: new FormControl<string | null | undefined>(undefined),
			SmoothingLatency: new FormControl<number | null | undefined>(undefined),
			StreamId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AddOutputRequestProtocol { zixi_push = 0, rtp_fec = 1, rtp = 2, zixi_pull = 3, rist = 4 }

	export interface AddFlowOutputs420Exception {
	}
	export interface AddFlowOutputs420ExceptionFormProperties {
	}
	export function CreateAddFlowOutputs420ExceptionFormGroup() {
		return new FormGroup<AddFlowOutputs420ExceptionFormProperties>({
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

	export interface ForbiddenException {
	}
	export interface ForbiddenExceptionFormProperties {
	}
	export function CreateForbiddenExceptionFormGroup() {
		return new FormGroup<ForbiddenExceptionFormProperties>({
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

	export interface ServiceUnavailableException {
	}
	export interface ServiceUnavailableExceptionFormProperties {
	}
	export function CreateServiceUnavailableExceptionFormGroup() {
		return new FormGroup<ServiceUnavailableExceptionFormProperties>({
		});

	}

	export interface TooManyRequestsException {
	}
	export interface TooManyRequestsExceptionFormProperties {
	}
	export function CreateTooManyRequestsExceptionFormGroup() {
		return new FormGroup<TooManyRequestsExceptionFormProperties>({
		});

	}

	export interface AddFlowSourcesResponse {
		FlowArn?: string | null;
		Sources?: Array<Source>;
	}
	export interface AddFlowSourcesResponseFormProperties {
		FlowArn: FormControl<string | null | undefined>,
	}
	export function CreateAddFlowSourcesResponseFormGroup() {
		return new FormGroup<AddFlowSourcesResponseFormProperties>({
			FlowArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The settings for the source of the flow. */
	export interface Source {
		DataTransferSubscriberFeePercent?: number | null;

		/** Information about the encryption of the flow. */
		Decryption?: Encryption;
		Description?: string | null;
		EntitlementArn?: string | null;
		IngestIp?: string | null;
		IngestPort?: number | null;

		/** Required */
		Name: string;

		/** Required */
		SourceArn: string;

		/** Attributes related to the transport stream that are used in a source or output. */
		Transport?: Transport;
		VpcInterfaceName?: string | null;
		WhitelistCidr?: string | null;
	}

	/** The settings for the source of the flow. */
	export interface SourceFormProperties {
		DataTransferSubscriberFeePercent: FormControl<number | null | undefined>,
		Description: FormControl<string | null | undefined>,
		EntitlementArn: FormControl<string | null | undefined>,
		IngestIp: FormControl<string | null | undefined>,
		IngestPort: FormControl<number | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		SourceArn: FormControl<string | null | undefined>,
		VpcInterfaceName: FormControl<string | null | undefined>,
		WhitelistCidr: FormControl<string | null | undefined>,
	}
	export function CreateSourceFormGroup() {
		return new FormGroup<SourceFormProperties>({
			DataTransferSubscriberFeePercent: new FormControl<number | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			EntitlementArn: new FormControl<string | null | undefined>(undefined),
			IngestIp: new FormControl<string | null | undefined>(undefined),
			IngestPort: new FormControl<number | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			VpcInterfaceName: new FormControl<string | null | undefined>(undefined),
			WhitelistCidr: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The settings for the source of the flow. */
	export interface SetSourceRequest {

		/** Information about the encryption of the flow. */
		Decryption?: Encryption;
		Description?: string | null;
		EntitlementArn?: string | null;
		IngestPort?: number | null;
		MaxBitrate?: number | null;
		MaxLatency?: number | null;
		Name?: string | null;
		Protocol?: SetSourceRequestProtocol | null;
		StreamId?: string | null;
		VpcInterfaceName?: string | null;
		WhitelistCidr?: string | null;
	}

	/** The settings for the source of the flow. */
	export interface SetSourceRequestFormProperties {
		Description: FormControl<string | null | undefined>,
		EntitlementArn: FormControl<string | null | undefined>,
		IngestPort: FormControl<number | null | undefined>,
		MaxBitrate: FormControl<number | null | undefined>,
		MaxLatency: FormControl<number | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Protocol: FormControl<SetSourceRequestProtocol | null | undefined>,
		StreamId: FormControl<string | null | undefined>,
		VpcInterfaceName: FormControl<string | null | undefined>,
		WhitelistCidr: FormControl<string | null | undefined>,
	}
	export function CreateSetSourceRequestFormGroup() {
		return new FormGroup<SetSourceRequestFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined),
			EntitlementArn: new FormControl<string | null | undefined>(undefined),
			IngestPort: new FormControl<number | null | undefined>(undefined),
			MaxBitrate: new FormControl<number | null | undefined>(undefined),
			MaxLatency: new FormControl<number | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Protocol: new FormControl<SetSourceRequestProtocol | null | undefined>(undefined),
			StreamId: new FormControl<string | null | undefined>(undefined),
			VpcInterfaceName: new FormControl<string | null | undefined>(undefined),
			WhitelistCidr: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum SetSourceRequestProtocol { zixi_push = 0, rtp_fec = 1, rtp = 2, zixi_pull = 3, rist = 4 }

	export interface AddFlowVpcInterfacesResponse {
		FlowArn?: string | null;
		VpcInterfaces?: Array<VpcInterface>;
	}
	export interface AddFlowVpcInterfacesResponseFormProperties {
		FlowArn: FormControl<string | null | undefined>,
	}
	export function CreateAddFlowVpcInterfacesResponseFormGroup() {
		return new FormGroup<AddFlowVpcInterfacesResponseFormProperties>({
			FlowArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The settings for a VPC Source. */
	export interface VpcInterface {

		/** Required */
		Name: string;

		/** Required */
		NetworkInterfaceIds: Array<string>;

		/** Required */
		RoleArn: string;

		/** Required */
		SecurityGroupIds: Array<string>;

		/** Required */
		SubnetId: string;
	}

	/** The settings for a VPC Source. */
	export interface VpcInterfaceFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		RoleArn: FormControl<string | null | undefined>,

		/** Required */
		SubnetId: FormControl<string | null | undefined>,
	}
	export function CreateVpcInterfaceFormGroup() {
		return new FormGroup<VpcInterfaceFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SubnetId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Desired VPC Interface for a Flow */
	export interface VpcInterfaceRequest {

		/** Required */
		Name: string;

		/** Required */
		RoleArn: string;

		/** Required */
		SecurityGroupIds: Array<string>;

		/** Required */
		SubnetId: string;
	}

	/** Desired VPC Interface for a Flow */
	export interface VpcInterfaceRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		RoleArn: FormControl<string | null | undefined>,

		/** Required */
		SubnetId: FormControl<string | null | undefined>,
	}
	export function CreateVpcInterfaceRequestFormGroup() {
		return new FormGroup<VpcInterfaceRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SubnetId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateFlowResponse {

		/** The settings for a flow, including its source, outputs, and entitlements. */
		Flow?: Flow;
	}
	export interface CreateFlowResponseFormProperties {
	}
	export function CreateCreateFlowResponseFormGroup() {
		return new FormGroup<CreateFlowResponseFormProperties>({
		});

	}


	/** The settings for a flow, including its source, outputs, and entitlements. */
	export interface Flow {

		/** Required */
		AvailabilityZone: string;
		Description?: string | null;
		EgressIp?: string | null;

		/** Required */
		Entitlements: Array<Entitlement>;

		/** Required */
		FlowArn: string;

		/** Required */
		Name: string;

		/** Required */
		Outputs: Array<Output>;

		/**
		 * The settings for the source of the flow.
		 * Required
		 */
		Source: Source;

		/** The settings for source failover */
		SourceFailoverConfig?: FailoverConfig;
		Sources?: Array<Source>;

		/** Required */
		Status: FlowStatus;
		VpcInterfaces?: Array<VpcInterface>;
	}

	/** The settings for a flow, including its source, outputs, and entitlements. */
	export interface FlowFormProperties {

		/** Required */
		AvailabilityZone: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		EgressIp: FormControl<string | null | undefined>,

		/** Required */
		FlowArn: FormControl<string | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		Status: FormControl<FlowStatus | null | undefined>,
	}
	export function CreateFlowFormGroup() {
		return new FormGroup<FlowFormProperties>({
			AvailabilityZone: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
			EgressIp: new FormControl<string | null | undefined>(undefined),
			FlowArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Status: new FormControl<FlowStatus | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The settings for a flow entitlement. */
	export interface Entitlement {
		DataTransferSubscriberFeePercent?: number | null;
		Description?: string | null;

		/** Information about the encryption of the flow. */
		Encryption?: Encryption;

		/** Required */
		EntitlementArn: string;

		/** Required */
		Name: string;

		/** Required */
		Subscribers: Array<string>;
	}

	/** The settings for a flow entitlement. */
	export interface EntitlementFormProperties {
		DataTransferSubscriberFeePercent: FormControl<number | null | undefined>,
		Description: FormControl<string | null | undefined>,

		/** Required */
		EntitlementArn: FormControl<string | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateEntitlementFormGroup() {
		return new FormGroup<EntitlementFormProperties>({
			DataTransferSubscriberFeePercent: new FormControl<number | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			EntitlementArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The settings for source failover */
	export interface FailoverConfig {
		RecoveryWindow?: number | null;
		State?: FailoverConfigState | null;
	}

	/** The settings for source failover */
	export interface FailoverConfigFormProperties {
		RecoveryWindow: FormControl<number | null | undefined>,
		State: FormControl<FailoverConfigState | null | undefined>,
	}
	export function CreateFailoverConfigFormGroup() {
		return new FormGroup<FailoverConfigFormProperties>({
			RecoveryWindow: new FormControl<number | null | undefined>(undefined),
			State: new FormControl<FailoverConfigState | null | undefined>(undefined),
		});

	}

	export enum FailoverConfigState { ENABLED = 0, DISABLED = 1 }

	export enum FlowStatus { STANDBY = 0, ACTIVE = 1, UPDATING = 2, DELETING = 3, STARTING = 4, STOPPING = 5, ERROR = 6 }


	/** The entitlements that you want to grant on a flow. */
	export interface GrantEntitlementRequest {
		DataTransferSubscriberFeePercent?: number | null;
		Description?: string | null;

		/** Information about the encryption of the flow. */
		Encryption?: Encryption;
		Name?: string | null;

		/** Required */
		Subscribers: Array<string>;
	}

	/** The entitlements that you want to grant on a flow. */
	export interface GrantEntitlementRequestFormProperties {
		DataTransferSubscriberFeePercent: FormControl<number | null | undefined>,
		Description: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
	}
	export function CreateGrantEntitlementRequestFormGroup() {
		return new FormGroup<GrantEntitlementRequestFormProperties>({
			DataTransferSubscriberFeePercent: new FormControl<number | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum Protocol { zixi_push = 0, rtp_fec = 1, rtp = 2, zixi_pull = 3, rist = 4 }

	export enum State { ENABLED = 0, DISABLED = 1 }

	export interface CreateFlow420Exception {
	}
	export interface CreateFlow420ExceptionFormProperties {
	}
	export function CreateCreateFlow420ExceptionFormGroup() {
		return new FormGroup<CreateFlow420ExceptionFormProperties>({
		});

	}

	export interface DeleteFlowResponse {
		FlowArn?: string | null;
		Status?: FlowStatus | null;
	}
	export interface DeleteFlowResponseFormProperties {
		FlowArn: FormControl<string | null | undefined>,
		Status: FormControl<FlowStatus | null | undefined>,
	}
	export function CreateDeleteFlowResponseFormGroup() {
		return new FormGroup<DeleteFlowResponseFormProperties>({
			FlowArn: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<FlowStatus | null | undefined>(undefined),
		});

	}

	export interface DescribeFlowResponse {

		/** The settings for a flow, including its source, outputs, and entitlements. */
		Flow?: Flow;

		/** Messages that provide the state of the flow. */
		Messages?: Messages;
	}
	export interface DescribeFlowResponseFormProperties {
	}
	export function CreateDescribeFlowResponseFormGroup() {
		return new FormGroup<DescribeFlowResponseFormProperties>({
		});

	}


	/** Messages that provide the state of the flow. */
	export interface Messages {

		/** Required */
		Errors: Array<string>;
	}

	/** Messages that provide the state of the flow. */
	export interface MessagesFormProperties {
	}
	export function CreateMessagesFormGroup() {
		return new FormGroup<MessagesFormProperties>({
		});

	}

	export interface GrantFlowEntitlementsResponse {
		Entitlements?: Array<Entitlement>;
		FlowArn?: string | null;
	}
	export interface GrantFlowEntitlementsResponseFormProperties {
		FlowArn: FormControl<string | null | undefined>,
	}
	export function CreateGrantFlowEntitlementsResponseFormGroup() {
		return new FormGroup<GrantFlowEntitlementsResponseFormProperties>({
			FlowArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GrantFlowEntitlements420Exception {
	}
	export interface GrantFlowEntitlements420ExceptionFormProperties {
	}
	export function CreateGrantFlowEntitlements420ExceptionFormGroup() {
		return new FormGroup<GrantFlowEntitlements420ExceptionFormProperties>({
		});

	}

	export interface ListEntitlementsResponse {
		Entitlements?: Array<ListedEntitlement>;
		NextToken?: string | null;
	}
	export interface ListEntitlementsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListEntitlementsResponseFormGroup() {
		return new FormGroup<ListEntitlementsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An entitlement that has been granted to you from other AWS accounts. */
	export interface ListedEntitlement {
		DataTransferSubscriberFeePercent?: number | null;

		/** Required */
		EntitlementArn: string;

		/** Required */
		EntitlementName: string;
	}

	/** An entitlement that has been granted to you from other AWS accounts. */
	export interface ListedEntitlementFormProperties {
		DataTransferSubscriberFeePercent: FormControl<number | null | undefined>,

		/** Required */
		EntitlementArn: FormControl<string | null | undefined>,

		/** Required */
		EntitlementName: FormControl<string | null | undefined>,
	}
	export function CreateListedEntitlementFormGroup() {
		return new FormGroup<ListedEntitlementFormProperties>({
			DataTransferSubscriberFeePercent: new FormControl<number | null | undefined>(undefined),
			EntitlementArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			EntitlementName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListFlowsResponse {
		Flows?: Array<ListedFlow>;
		NextToken?: string | null;
	}
	export interface ListFlowsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListFlowsResponseFormGroup() {
		return new FormGroup<ListFlowsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides a summary of a flow, including its ARN, Availability Zone, and source type. */
	export interface ListedFlow {

		/** Required */
		AvailabilityZone: string;

		/** Required */
		Description: string;

		/** Required */
		FlowArn: string;

		/** Required */
		Name: string;

		/** Required */
		SourceType: ListedFlowSourceType;

		/** Required */
		Status: FlowStatus;
	}

	/** Provides a summary of a flow, including its ARN, Availability Zone, and source type. */
	export interface ListedFlowFormProperties {

		/** Required */
		AvailabilityZone: FormControl<string | null | undefined>,

		/** Required */
		Description: FormControl<string | null | undefined>,

		/** Required */
		FlowArn: FormControl<string | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		SourceType: FormControl<ListedFlowSourceType | null | undefined>,

		/** Required */
		Status: FormControl<FlowStatus | null | undefined>,
	}
	export function CreateListedFlowFormGroup() {
		return new FormGroup<ListedFlowFormProperties>({
			AvailabilityZone: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			FlowArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SourceType: new FormControl<ListedFlowSourceType | null | undefined>(undefined, [Validators.required]),
			Status: new FormControl<FlowStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ListedFlowSourceType { OWNED = 0, ENTITLED = 1 }

	export interface ListTagsForResourceResponse {
		Tags?: __mapOf__string;
	}
	export interface ListTagsForResourceResponseFormProperties {
	}
	export function CreateListTagsForResourceResponseFormGroup() {
		return new FormGroup<ListTagsForResourceResponseFormProperties>({
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

	export interface RemoveFlowOutputResponse {
		FlowArn?: string | null;
		OutputArn?: string | null;
	}
	export interface RemoveFlowOutputResponseFormProperties {
		FlowArn: FormControl<string | null | undefined>,
		OutputArn: FormControl<string | null | undefined>,
	}
	export function CreateRemoveFlowOutputResponseFormGroup() {
		return new FormGroup<RemoveFlowOutputResponseFormProperties>({
			FlowArn: new FormControl<string | null | undefined>(undefined),
			OutputArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RemoveFlowSourceResponse {
		FlowArn?: string | null;
		SourceArn?: string | null;
	}
	export interface RemoveFlowSourceResponseFormProperties {
		FlowArn: FormControl<string | null | undefined>,
		SourceArn: FormControl<string | null | undefined>,
	}
	export function CreateRemoveFlowSourceResponseFormGroup() {
		return new FormGroup<RemoveFlowSourceResponseFormProperties>({
			FlowArn: new FormControl<string | null | undefined>(undefined),
			SourceArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RemoveFlowVpcInterfaceResponse {
		FlowArn?: string | null;
		NonDeletedNetworkInterfaceIds?: Array<string>;
		VpcInterfaceName?: string | null;
	}
	export interface RemoveFlowVpcInterfaceResponseFormProperties {
		FlowArn: FormControl<string | null | undefined>,
		VpcInterfaceName: FormControl<string | null | undefined>,
	}
	export function CreateRemoveFlowVpcInterfaceResponseFormGroup() {
		return new FormGroup<RemoveFlowVpcInterfaceResponseFormProperties>({
			FlowArn: new FormControl<string | null | undefined>(undefined),
			VpcInterfaceName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RevokeFlowEntitlementResponse {
		EntitlementArn?: string | null;
		FlowArn?: string | null;
	}
	export interface RevokeFlowEntitlementResponseFormProperties {
		EntitlementArn: FormControl<string | null | undefined>,
		FlowArn: FormControl<string | null | undefined>,
	}
	export function CreateRevokeFlowEntitlementResponseFormGroup() {
		return new FormGroup<RevokeFlowEntitlementResponseFormProperties>({
			EntitlementArn: new FormControl<string | null | undefined>(undefined),
			FlowArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StartFlowResponse {
		FlowArn?: string | null;
		Status?: FlowStatus | null;
	}
	export interface StartFlowResponseFormProperties {
		FlowArn: FormControl<string | null | undefined>,
		Status: FormControl<FlowStatus | null | undefined>,
	}
	export function CreateStartFlowResponseFormGroup() {
		return new FormGroup<StartFlowResponseFormProperties>({
			FlowArn: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<FlowStatus | null | undefined>(undefined),
		});

	}

	export interface StopFlowResponse {
		FlowArn?: string | null;
		Status?: FlowStatus | null;
	}
	export interface StopFlowResponseFormProperties {
		FlowArn: FormControl<string | null | undefined>,
		Status: FormControl<FlowStatus | null | undefined>,
	}
	export function CreateStopFlowResponseFormGroup() {
		return new FormGroup<StopFlowResponseFormProperties>({
			FlowArn: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<FlowStatus | null | undefined>(undefined),
		});

	}

	export interface UpdateFlowResponse {

		/** The settings for a flow, including its source, outputs, and entitlements. */
		Flow?: Flow;
	}
	export interface UpdateFlowResponseFormProperties {
	}
	export function CreateUpdateFlowResponseFormGroup() {
		return new FormGroup<UpdateFlowResponseFormProperties>({
		});

	}

	export interface UpdateFlowEntitlementResponse {

		/** The settings for a flow entitlement. */
		Entitlement?: Entitlement;
		FlowArn?: string | null;
	}
	export interface UpdateFlowEntitlementResponseFormProperties {
		FlowArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateFlowEntitlementResponseFormGroup() {
		return new FormGroup<UpdateFlowEntitlementResponseFormProperties>({
			FlowArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum Algorithm { aes128 = 0, aes192 = 1, aes256 = 2 }

	export enum KeyType { speke = 0, static_key = 1 }

	export interface UpdateFlowOutputResponse {
		FlowArn?: string | null;

		/** The settings for an output. */
		Output?: Output;
	}
	export interface UpdateFlowOutputResponseFormProperties {
		FlowArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateFlowOutputResponseFormGroup() {
		return new FormGroup<UpdateFlowOutputResponseFormProperties>({
			FlowArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateFlowSourceResponse {
		FlowArn?: string | null;

		/** The settings for the source of the flow. */
		Source?: Source;
	}
	export interface UpdateFlowSourceResponseFormProperties {
		FlowArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateFlowSourceResponseFormGroup() {
		return new FormGroup<UpdateFlowSourceResponseFormProperties>({
			FlowArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A request to add outputs to the specified flow. */
	export interface AddFlowOutputsRequest {

		/** Required */
		Outputs: Array<AddOutputRequest>;
	}

	/** A request to add outputs to the specified flow. */
	export interface AddFlowOutputsRequestFormProperties {
	}
	export function CreateAddFlowOutputsRequestFormGroup() {
		return new FormGroup<AddFlowOutputsRequestFormProperties>({
		});

	}


	/** A request to add sources to the flow. */
	export interface AddFlowSourcesRequest {

		/** Required */
		Sources: Array<SetSourceRequest>;
	}

	/** A request to add sources to the flow. */
	export interface AddFlowSourcesRequestFormProperties {
	}
	export function CreateAddFlowSourcesRequestFormGroup() {
		return new FormGroup<AddFlowSourcesRequestFormProperties>({
		});

	}


	/** A request to add VPC interfaces to the flow. */
	export interface AddFlowVpcInterfacesRequest {

		/** Required */
		VpcInterfaces: Array<VpcInterfaceRequest>;
	}

	/** A request to add VPC interfaces to the flow. */
	export interface AddFlowVpcInterfacesRequestFormProperties {
	}
	export function CreateAddFlowVpcInterfacesRequestFormGroup() {
		return new FormGroup<AddFlowVpcInterfacesRequestFormProperties>({
		});

	}


	/** Creates a new flow. The request must include one source. The request optionally can include outputs (up to 50) and entitlements (up to 50). */
	export interface CreateFlowRequest {
		AvailabilityZone?: string | null;
		Entitlements?: Array<GrantEntitlementRequest>;

		/** Required */
		Name: string;
		Outputs?: Array<AddOutputRequest>;

		/** The settings for the source of the flow. */
		Source?: SetSourceRequest;

		/** The settings for source failover */
		SourceFailoverConfig?: FailoverConfig;
		Sources?: Array<SetSourceRequest>;
		VpcInterfaces?: Array<VpcInterfaceRequest>;
	}

	/** Creates a new flow. The request must include one source. The request optionally can include outputs (up to 50) and entitlements (up to 50). */
	export interface CreateFlowRequestFormProperties {
		AvailabilityZone: FormControl<string | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateCreateFlowRequestFormGroup() {
		return new FormGroup<CreateFlowRequestFormProperties>({
			AvailabilityZone: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteFlowRequest {
	}
	export interface DeleteFlowRequestFormProperties {
	}
	export function CreateDeleteFlowRequestFormGroup() {
		return new FormGroup<DeleteFlowRequestFormProperties>({
		});

	}

	export enum Status { STANDBY = 0, ACTIVE = 1, UPDATING = 2, DELETING = 3, STARTING = 4, STOPPING = 5, ERROR = 6 }

	export interface DescribeFlowRequest {
	}
	export interface DescribeFlowRequestFormProperties {
	}
	export function CreateDescribeFlowRequestFormGroup() {
		return new FormGroup<DescribeFlowRequestFormProperties>({
		});

	}


	/** A request to grant entitlements on a flow. */
	export interface GrantFlowEntitlementsRequest {

		/** Required */
		Entitlements: Array<GrantEntitlementRequest>;
	}

	/** A request to grant entitlements on a flow. */
	export interface GrantFlowEntitlementsRequestFormProperties {
	}
	export function CreateGrantFlowEntitlementsRequestFormGroup() {
		return new FormGroup<GrantFlowEntitlementsRequestFormProperties>({
		});

	}

	export interface ListEntitlementsRequest {
	}
	export interface ListEntitlementsRequestFormProperties {
	}
	export function CreateListEntitlementsRequestFormGroup() {
		return new FormGroup<ListEntitlementsRequestFormProperties>({
		});

	}

	export interface ListFlowsRequest {
	}
	export interface ListFlowsRequestFormProperties {
	}
	export function CreateListFlowsRequestFormGroup() {
		return new FormGroup<ListFlowsRequestFormProperties>({
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

	export enum SourceType { OWNED = 0, ENTITLED = 1 }

	export interface RemoveFlowOutputRequest {
	}
	export interface RemoveFlowOutputRequestFormProperties {
	}
	export function CreateRemoveFlowOutputRequestFormGroup() {
		return new FormGroup<RemoveFlowOutputRequestFormProperties>({
		});

	}

	export interface RemoveFlowSourceRequest {
	}
	export interface RemoveFlowSourceRequestFormProperties {
	}
	export function CreateRemoveFlowSourceRequestFormGroup() {
		return new FormGroup<RemoveFlowSourceRequestFormProperties>({
		});

	}

	export interface RemoveFlowVpcInterfaceRequest {
	}
	export interface RemoveFlowVpcInterfaceRequestFormProperties {
	}
	export function CreateRemoveFlowVpcInterfaceRequestFormGroup() {
		return new FormGroup<RemoveFlowVpcInterfaceRequestFormProperties>({
		});

	}

	export interface RevokeFlowEntitlementRequest {
	}
	export interface RevokeFlowEntitlementRequestFormProperties {
	}
	export function CreateRevokeFlowEntitlementRequestFormGroup() {
		return new FormGroup<RevokeFlowEntitlementRequestFormProperties>({
		});

	}

	export interface StartFlowRequest {
	}
	export interface StartFlowRequestFormProperties {
	}
	export function CreateStartFlowRequestFormGroup() {
		return new FormGroup<StartFlowRequestFormProperties>({
		});

	}

	export interface StopFlowRequest {
	}
	export interface StopFlowRequestFormProperties {
	}
	export function CreateStopFlowRequestFormGroup() {
		return new FormGroup<StopFlowRequestFormProperties>({
		});

	}


	/** The tags to add to the resource. A tag is an array of key-value pairs. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters. */
	export interface TagResourceRequest {

		/** Required */
		Tags: __mapOf__string;
	}

	/** The tags to add to the resource. A tag is an array of key-value pairs. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters. */
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


	/** Information about the encryption of the flow. */
	export interface UpdateEncryption {
		Algorithm?: EncryptionAlgorithm | null;
		ConstantInitializationVector?: string | null;
		DeviceId?: string | null;
		KeyType?: UpdateEncryptionKeyType | null;
		Region?: string | null;
		ResourceId?: string | null;
		RoleArn?: string | null;
		SecretArn?: string | null;
		Url?: string | null;
	}

	/** Information about the encryption of the flow. */
	export interface UpdateEncryptionFormProperties {
		Algorithm: FormControl<EncryptionAlgorithm | null | undefined>,
		ConstantInitializationVector: FormControl<string | null | undefined>,
		DeviceId: FormControl<string | null | undefined>,
		KeyType: FormControl<UpdateEncryptionKeyType | null | undefined>,
		Region: FormControl<string | null | undefined>,
		ResourceId: FormControl<string | null | undefined>,
		RoleArn: FormControl<string | null | undefined>,
		SecretArn: FormControl<string | null | undefined>,
		Url: FormControl<string | null | undefined>,
	}
	export function CreateUpdateEncryptionFormGroup() {
		return new FormGroup<UpdateEncryptionFormProperties>({
			Algorithm: new FormControl<EncryptionAlgorithm | null | undefined>(undefined),
			ConstantInitializationVector: new FormControl<string | null | undefined>(undefined),
			DeviceId: new FormControl<string | null | undefined>(undefined),
			KeyType: new FormControl<UpdateEncryptionKeyType | null | undefined>(undefined),
			Region: new FormControl<string | null | undefined>(undefined),
			ResourceId: new FormControl<string | null | undefined>(undefined),
			RoleArn: new FormControl<string | null | undefined>(undefined),
			SecretArn: new FormControl<string | null | undefined>(undefined),
			Url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum UpdateEncryptionKeyType { speke = 0, static_key = 1 }


	/** The settings for source failover */
	export interface UpdateFailoverConfig {
		RecoveryWindow?: number | null;
		State?: FailoverConfigState | null;
	}

	/** The settings for source failover */
	export interface UpdateFailoverConfigFormProperties {
		RecoveryWindow: FormControl<number | null | undefined>,
		State: FormControl<FailoverConfigState | null | undefined>,
	}
	export function CreateUpdateFailoverConfigFormGroup() {
		return new FormGroup<UpdateFailoverConfigFormProperties>({
			RecoveryWindow: new FormControl<number | null | undefined>(undefined),
			State: new FormControl<FailoverConfigState | null | undefined>(undefined),
		});

	}


	/** The entitlement fields that you want to update. */
	export interface UpdateFlowEntitlementRequest {
		Description?: string | null;

		/** Information about the encryption of the flow. */
		Encryption?: UpdateEncryption;
		Subscribers?: Array<string>;
	}

	/** The entitlement fields that you want to update. */
	export interface UpdateFlowEntitlementRequestFormProperties {
		Description: FormControl<string | null | undefined>,
	}
	export function CreateUpdateFlowEntitlementRequestFormGroup() {
		return new FormGroup<UpdateFlowEntitlementRequestFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The fields that you want to update in the output. */
	export interface UpdateFlowOutputRequest {
		CidrAllowList?: Array<string>;
		Description?: string | null;
		Destination?: string | null;

		/** Information about the encryption of the flow. */
		Encryption?: UpdateEncryption;
		MaxLatency?: number | null;
		Port?: number | null;
		Protocol?: UpdateFlowOutputRequestProtocol | null;
		RemoteId?: string | null;
		SmoothingLatency?: number | null;
		StreamId?: string | null;

		/** The settings for attaching a VPC interface to an output. */
		VpcInterfaceAttachment?: VpcInterfaceAttachment;
	}

	/** The fields that you want to update in the output. */
	export interface UpdateFlowOutputRequestFormProperties {
		Description: FormControl<string | null | undefined>,
		Destination: FormControl<string | null | undefined>,
		MaxLatency: FormControl<number | null | undefined>,
		Port: FormControl<number | null | undefined>,
		Protocol: FormControl<UpdateFlowOutputRequestProtocol | null | undefined>,
		RemoteId: FormControl<string | null | undefined>,
		SmoothingLatency: FormControl<number | null | undefined>,
		StreamId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateFlowOutputRequestFormGroup() {
		return new FormGroup<UpdateFlowOutputRequestFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined),
			Destination: new FormControl<string | null | undefined>(undefined),
			MaxLatency: new FormControl<number | null | undefined>(undefined),
			Port: new FormControl<number | null | undefined>(undefined),
			Protocol: new FormControl<UpdateFlowOutputRequestProtocol | null | undefined>(undefined),
			RemoteId: new FormControl<string | null | undefined>(undefined),
			SmoothingLatency: new FormControl<number | null | undefined>(undefined),
			StreamId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum UpdateFlowOutputRequestProtocol { zixi_push = 0, rtp_fec = 1, rtp = 2, zixi_pull = 3, rist = 4 }


	/** A request to update flow. */
	export interface UpdateFlowRequest {

		/** The settings for source failover */
		SourceFailoverConfig?: UpdateFailoverConfig;
	}

	/** A request to update flow. */
	export interface UpdateFlowRequestFormProperties {
	}
	export function CreateUpdateFlowRequestFormGroup() {
		return new FormGroup<UpdateFlowRequestFormProperties>({
		});

	}


	/** A request to update the source of a flow. */
	export interface UpdateFlowSourceRequest {

		/** Information about the encryption of the flow. */
		Decryption?: UpdateEncryption;
		Description?: string | null;
		EntitlementArn?: string | null;
		IngestPort?: number | null;
		MaxBitrate?: number | null;
		MaxLatency?: number | null;
		Protocol?: UpdateFlowSourceRequestProtocol | null;
		StreamId?: string | null;
		VpcInterfaceName?: string | null;
		WhitelistCidr?: string | null;
	}

	/** A request to update the source of a flow. */
	export interface UpdateFlowSourceRequestFormProperties {
		Description: FormControl<string | null | undefined>,
		EntitlementArn: FormControl<string | null | undefined>,
		IngestPort: FormControl<number | null | undefined>,
		MaxBitrate: FormControl<number | null | undefined>,
		MaxLatency: FormControl<number | null | undefined>,
		Protocol: FormControl<UpdateFlowSourceRequestProtocol | null | undefined>,
		StreamId: FormControl<string | null | undefined>,
		VpcInterfaceName: FormControl<string | null | undefined>,
		WhitelistCidr: FormControl<string | null | undefined>,
	}
	export function CreateUpdateFlowSourceRequestFormGroup() {
		return new FormGroup<UpdateFlowSourceRequestFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined),
			EntitlementArn: new FormControl<string | null | undefined>(undefined),
			IngestPort: new FormControl<number | null | undefined>(undefined),
			MaxBitrate: new FormControl<number | null | undefined>(undefined),
			MaxLatency: new FormControl<number | null | undefined>(undefined),
			Protocol: new FormControl<UpdateFlowSourceRequestProtocol | null | undefined>(undefined),
			StreamId: new FormControl<string | null | undefined>(undefined),
			VpcInterfaceName: new FormControl<string | null | undefined>(undefined),
			WhitelistCidr: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum UpdateFlowSourceRequestProtocol { zixi_push = 0, rtp_fec = 1, rtp = 2, zixi_pull = 3, rist = 4 }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Adds outputs to an existing flow. You can create up to 50 outputs per flow.
		 * Post v1/flows/{flowArn}/outputs
		 * @param {string} flowArn The flow that you want to add outputs to.
		 * @return {void} 
		 */
		AddFlowOutputs(flowArn: string, requestBody: AddFlowOutputsPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/flows/' + (flowArn == null ? '' : encodeURIComponent(flowArn)) + '/outputs', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Adds Sources to flow
		 * Post v1/flows/{flowArn}/source
		 * @param {string} flowArn The flow that you want to mutate.
		 * @return {void} 
		 */
		AddFlowSources(flowArn: string, requestBody: AddFlowSourcesPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/flows/' + (flowArn == null ? '' : encodeURIComponent(flowArn)) + '/source', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Adds VPC interfaces to flow
		 * Post v1/flows/{flowArn}/vpcInterfaces
		 * @param {string} flowArn The flow that you want to mutate.
		 * @return {void} 
		 */
		AddFlowVpcInterfaces(flowArn: string, requestBody: AddFlowVpcInterfacesPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/flows/' + (flowArn == null ? '' : encodeURIComponent(flowArn)) + '/vpcInterfaces', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a new flow. The request must include one source. The request optionally can include outputs (up to 50) and entitlements (up to 50).
		 * Post v1/flows
		 * @return {void} 
		 */
		CreateFlow(requestBody: CreateFlowPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/flows', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Displays a list of flows that are associated with this account. This request returns a paginated result.
		 * Get v1/flows
		 * @param {number} maxResults The maximum number of results to return per API request. For example, you submit a ListFlows request with MaxResults set at 5. Although 20 items match your request, the service returns no more than the first 5 items. (The service also returns a NextToken value that you can use to fetch the next batch of results.) The service might return fewer results than the MaxResults value. If MaxResults is not included in the request, the service defaults to pagination with a maximum of 10 results per page.
		 * @param {string} nextToken The token that identifies which batch of results that you want to see. For example, you submit a ListFlows request with MaxResults set at 5. The service returns the first batch of results (up to 5) and a NextToken value. To see the next batch of results, you can submit the ListFlows request a second time and specify the NextToken value.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListFlowsResponse} Success
		 */
		ListFlows(maxResults: number | null | undefined, nextToken: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListFlowsResponse> {
			return this.http.get<ListFlowsResponse>(this.baseUri + 'v1/flows?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Deletes a flow. Before you can delete a flow, you must stop the flow.
		 * Delete v1/flows/{flowArn}
		 * @param {string} flowArn The ARN of the flow that you want to delete.
		 * @return {void} 
		 */
		DeleteFlow(flowArn: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/flows/' + (flowArn == null ? '' : encodeURIComponent(flowArn)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Displays the details of a flow. The response includes the flow ARN, name, and Availability Zone, as well as details about the source, outputs, and entitlements.
		 * Get v1/flows/{flowArn}
		 * @param {string} flowArn The ARN of the flow that you want to describe.
		 * @return {DescribeFlowResponse} Success
		 */
		DescribeFlow(flowArn: string): Observable<DescribeFlowResponse> {
			return this.http.get<DescribeFlowResponse>(this.baseUri + 'v1/flows/' + (flowArn == null ? '' : encodeURIComponent(flowArn)), {});
		}

		/**
		 * Updates flow
		 * Put v1/flows/{flowArn}
		 * @param {string} flowArn The flow that you want to update.
		 * @return {void} 
		 */
		UpdateFlow(flowArn: string, requestBody: UpdateFlowPutBody): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'v1/flows/' + (flowArn == null ? '' : encodeURIComponent(flowArn)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Grants entitlements to an existing flow.
		 * Post v1/flows/{flowArn}/entitlements
		 * @param {string} flowArn The flow that you want to grant entitlements on.
		 * @return {GrantFlowEntitlementsResponse} Success
		 */
		GrantFlowEntitlements(flowArn: string, requestBody: GrantFlowEntitlementsPostBody): Observable<GrantFlowEntitlementsResponse> {
			return this.http.post<GrantFlowEntitlementsResponse>(this.baseUri + 'v1/flows/' + (flowArn == null ? '' : encodeURIComponent(flowArn)) + '/entitlements', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Displays a list of all entitlements that have been granted to this account. This request returns 20 results per page.
		 * Get v1/entitlements
		 * @param {number} maxResults The maximum number of results to return per API request. For example, you submit a ListEntitlements request with MaxResults set at 5. Although 20 items match your request, the service returns no more than the first 5 items. (The service also returns a NextToken value that you can use to fetch the next batch of results.) The service might return fewer results than the MaxResults value. If MaxResults is not included in the request, the service defaults to pagination with a maximum of 20 results per page.
		 * @param {string} nextToken The token that identifies which batch of results that you want to see. For example, you submit a ListEntitlements request with MaxResults set at 5. The service returns the first batch of results (up to 5) and a NextToken value. To see the next batch of results, you can submit the ListEntitlements request a second time and specify the NextToken value.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListEntitlementsResponse} Success
		 */
		ListEntitlements(maxResults: number | null | undefined, nextToken: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListEntitlementsResponse> {
			return this.http.get<ListEntitlementsResponse>(this.baseUri + 'v1/entitlements?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * List all tags on an AWS Elemental MediaConnect resource
		 * Get tags/{resourceArn}
		 * @param {string} resourceArn The Amazon Resource Name (ARN) that identifies the AWS Elemental MediaConnect resource for which to list the tags.
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(resourceArn: string): Observable<ListTagsForResourceResponse> {
			return this.http.get<ListTagsForResourceResponse>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), {});
		}

		/**
		 * Associates the specified tags to a resource with the specified resourceArn. If existing tags on a resource are not specified in the request parameters, they are not changed. When a resource is deleted, the tags associated with that resource are deleted as well.
		 * Post tags/{resourceArn}
		 * @param {string} resourceArn The Amazon Resource Name (ARN) that identifies the AWS Elemental MediaConnect resource to which to add tags.
		 * @return {void} 
		 */
		TagResource(resourceArn: string, requestBody: TagResourcePostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Removes an output from an existing flow. This request can be made only on an output that does not have an entitlement associated with it. If the output has an entitlement, you must revoke the entitlement instead. When an entitlement is revoked from a flow, the service automatically removes the associated output.
		 * Delete v1/flows/{flowArn}/outputs/{outputArn}
		 * @param {string} flowArn The flow that you want to remove an output from.
		 * @param {string} outputArn The ARN of the output that you want to remove.
		 * @return {void} 
		 */
		RemoveFlowOutput(flowArn: string, outputArn: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/flows/' + (flowArn == null ? '' : encodeURIComponent(flowArn)) + '/outputs/' + (outputArn == null ? '' : encodeURIComponent(outputArn)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates an existing flow output.
		 * Put v1/flows/{flowArn}/outputs/{outputArn}
		 * @param {string} flowArn The flow that is associated with the output that you want to update.
		 * @param {string} outputArn The ARN of the output that you want to update.
		 * @return {void} 
		 */
		UpdateFlowOutput(flowArn: string, outputArn: string, requestBody: UpdateFlowOutputPutBody): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'v1/flows/' + (flowArn == null ? '' : encodeURIComponent(flowArn)) + '/outputs/' + (outputArn == null ? '' : encodeURIComponent(outputArn)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Removes a source from an existing flow. This request can be made only if there is more than one source on the flow.
		 * Delete v1/flows/{flowArn}/source/{sourceArn}
		 * @param {string} flowArn The flow that you want to remove a source from.
		 * @param {string} sourceArn The ARN of the source that you want to remove.
		 * @return {void} 
		 */
		RemoveFlowSource(flowArn: string, sourceArn: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/flows/' + (flowArn == null ? '' : encodeURIComponent(flowArn)) + '/source/' + (sourceArn == null ? '' : encodeURIComponent(sourceArn)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates the source of a flow.
		 * Put v1/flows/{flowArn}/source/{sourceArn}
		 * @param {string} flowArn The flow that is associated with the source that you want to update.
		 * @param {string} sourceArn The ARN of the source that you want to update.
		 * @return {void} 
		 */
		UpdateFlowSource(flowArn: string, sourceArn: string, requestBody: UpdateFlowSourcePutBody): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'v1/flows/' + (flowArn == null ? '' : encodeURIComponent(flowArn)) + '/source/' + (sourceArn == null ? '' : encodeURIComponent(sourceArn)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Removes a VPC Interface from an existing flow. This request can be made only on a VPC interface that does not have a Source or Output associated with it. If the VPC interface is referenced by a Source or Output, you must first delete or update the Source or Output to no longer reference the VPC interface.
		 * Delete v1/flows/{flowArn}/vpcInterfaces/{vpcInterfaceName}
		 * @param {string} flowArn The flow that you want to remove a VPC interface from.
		 * @param {string} vpcInterfaceName The name of the VPC interface that you want to remove.
		 * @return {RemoveFlowVpcInterfaceResponse} Success
		 */
		RemoveFlowVpcInterface(flowArn: string, vpcInterfaceName: string): Observable<RemoveFlowVpcInterfaceResponse> {
			return this.http.delete<RemoveFlowVpcInterfaceResponse>(this.baseUri + 'v1/flows/' + (flowArn == null ? '' : encodeURIComponent(flowArn)) + '/vpcInterfaces/' + (vpcInterfaceName == null ? '' : encodeURIComponent(vpcInterfaceName)), {});
		}

		/**
		 * Revokes an entitlement from a flow. Once an entitlement is revoked, the content becomes unavailable to the subscriber and the associated output is removed.
		 * Delete v1/flows/{flowArn}/entitlements/{entitlementArn}
		 * @param {string} entitlementArn The ARN of the entitlement that you want to revoke.
		 * @param {string} flowArn The flow that you want to revoke an entitlement from.
		 * @return {void} 
		 */
		RevokeFlowEntitlement(entitlementArn: string, flowArn: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/flows/' + (flowArn == null ? '' : encodeURIComponent(flowArn)) + '/entitlements/' + (entitlementArn == null ? '' : encodeURIComponent(entitlementArn)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * You can change an entitlement's description, subscribers, and encryption. If you change the subscribers, the service will remove the outputs that are are used by the subscribers that are removed.
		 * Put v1/flows/{flowArn}/entitlements/{entitlementArn}
		 * @param {string} entitlementArn The ARN of the entitlement that you want to update.
		 * @param {string} flowArn The flow that is associated with the entitlement that you want to update.
		 * @return {void} 
		 */
		UpdateFlowEntitlement(entitlementArn: string, flowArn: string, requestBody: UpdateFlowEntitlementPutBody): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'v1/flows/' + (flowArn == null ? '' : encodeURIComponent(flowArn)) + '/entitlements/' + (entitlementArn == null ? '' : encodeURIComponent(entitlementArn)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Starts a flow.
		 * Post v1/flows/start/{flowArn}
		 * @param {string} flowArn The ARN of the flow that you want to start.
		 * @return {void} 
		 */
		StartFlow(flowArn: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/flows/start/' + (flowArn == null ? '' : encodeURIComponent(flowArn)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Stops a flow.
		 * Post v1/flows/stop/{flowArn}
		 * @param {string} flowArn The ARN of the flow that you want to stop.
		 * @return {void} 
		 */
		StopFlow(flowArn: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/flows/stop/' + (flowArn == null ? '' : encodeURIComponent(flowArn)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes specified tags from a resource.
		 * Delete tags/{resourceArn}#tagKeys
		 * @param {string} resourceArn The Amazon Resource Name (ARN) that identifies the AWS Elemental MediaConnect resource from which to delete tags.
		 * @param {Array<string>} tagKeys The keys of the tags to be removed.
		 * @return {void} 
		 */
		UntagResource(resourceArn: string, tagKeys: Array<string>): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)) + '#tagKeys&' + tagKeys.map(z => `tagKeys=${encodeURIComponent(z)}`).join('&'), { observe: 'response', responseType: 'text' });
		}
	}

	export interface AddFlowOutputsPostBody {

		/**
		 * A list of outputs that you want to add.
		 * Required
		 */
		outputs: Array<AddOutputRequest>;
	}
	export interface AddFlowOutputsPostBodyFormProperties {
	}
	export function CreateAddFlowOutputsPostBodyFormGroup() {
		return new FormGroup<AddFlowOutputsPostBodyFormProperties>({
		});

	}

	export interface AddFlowSourcesPostBody {

		/**
		 * A list of sources that you want to add.
		 * Required
		 */
		sources: Array<SetSourceRequest>;
	}
	export interface AddFlowSourcesPostBodyFormProperties {
	}
	export function CreateAddFlowSourcesPostBodyFormGroup() {
		return new FormGroup<AddFlowSourcesPostBodyFormProperties>({
		});

	}

	export interface AddFlowVpcInterfacesPostBody {

		/**
		 * A list of VPC interfaces that you want to add.
		 * Required
		 */
		vpcInterfaces: Array<VpcInterfaceRequest>;
	}
	export interface AddFlowVpcInterfacesPostBodyFormProperties {
	}
	export function CreateAddFlowVpcInterfacesPostBodyFormGroup() {
		return new FormGroup<AddFlowVpcInterfacesPostBodyFormProperties>({
		});

	}

	export interface CreateFlowPostBody {

		/** The Availability Zone that you want to create the flow in. These options are limited to the Availability Zones within the current AWS Region. */
		availabilityZone?: string | null;

		/** The entitlements that you want to grant on a flow. */
		entitlements?: Array<GrantEntitlementRequest>;

		/**
		 * The name of the flow.
		 * Required
		 */
		name: string;

		/** The outputs that you want to add to this flow. */
		outputs?: Array<AddOutputRequest>;

		/** The settings for the source of the flow. */
		source?: CreateFlowPostBodySource;

		/** The settings for source failover */
		sourceFailoverConfig?: CreateFlowPostBodySourceFailoverConfig;
		sources?: Array<SetSourceRequest>;

		/** The VPC interfaces you want on the flow. */
		vpcInterfaces?: Array<VpcInterfaceRequest>;
	}
	export interface CreateFlowPostBodyFormProperties {

		/** The Availability Zone that you want to create the flow in. These options are limited to the Availability Zones within the current AWS Region. */
		availabilityZone: FormControl<string | null | undefined>,

		/**
		 * The name of the flow.
		 * Required
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateCreateFlowPostBodyFormGroup() {
		return new FormGroup<CreateFlowPostBodyFormProperties>({
			availabilityZone: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateFlowPostBodySource {

		/** Information about the encryption of the flow. */
		Decryption?: Encryption;
		Description?: string | null;
		EntitlementArn?: string | null;
		IngestPort?: number | null;
		MaxBitrate?: number | null;
		MaxLatency?: number | null;
		Name?: string | null;
		Protocol?: CreateFlowPostBodySourceProtocol | null;
		StreamId?: string | null;
		VpcInterfaceName?: string | null;
		WhitelistCidr?: string | null;
	}
	export interface CreateFlowPostBodySourceFormProperties {
		Description: FormControl<string | null | undefined>,
		EntitlementArn: FormControl<string | null | undefined>,
		IngestPort: FormControl<number | null | undefined>,
		MaxBitrate: FormControl<number | null | undefined>,
		MaxLatency: FormControl<number | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Protocol: FormControl<CreateFlowPostBodySourceProtocol | null | undefined>,
		StreamId: FormControl<string | null | undefined>,
		VpcInterfaceName: FormControl<string | null | undefined>,
		WhitelistCidr: FormControl<string | null | undefined>,
	}
	export function CreateCreateFlowPostBodySourceFormGroup() {
		return new FormGroup<CreateFlowPostBodySourceFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined),
			EntitlementArn: new FormControl<string | null | undefined>(undefined),
			IngestPort: new FormControl<number | null | undefined>(undefined),
			MaxBitrate: new FormControl<number | null | undefined>(undefined),
			MaxLatency: new FormControl<number | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Protocol: new FormControl<CreateFlowPostBodySourceProtocol | null | undefined>(undefined),
			StreamId: new FormControl<string | null | undefined>(undefined),
			VpcInterfaceName: new FormControl<string | null | undefined>(undefined),
			WhitelistCidr: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum CreateFlowPostBodySourceProtocol { zixi_push = 0, rtp_fec = 1, rtp = 2, zixi_pull = 3, rist = 4 }

	export interface CreateFlowPostBodySourceFailoverConfig {
		RecoveryWindow?: number | null;
		State?: FailoverConfigState | null;
	}
	export interface CreateFlowPostBodySourceFailoverConfigFormProperties {
		RecoveryWindow: FormControl<number | null | undefined>,
		State: FormControl<FailoverConfigState | null | undefined>,
	}
	export function CreateCreateFlowPostBodySourceFailoverConfigFormGroup() {
		return new FormGroup<CreateFlowPostBodySourceFailoverConfigFormProperties>({
			RecoveryWindow: new FormControl<number | null | undefined>(undefined),
			State: new FormControl<FailoverConfigState | null | undefined>(undefined),
		});

	}

	export interface UpdateFlowPutBody {

		/** The settings for source failover */
		sourceFailoverConfig?: UpdateFlowPutBodySourceFailoverConfig;
	}
	export interface UpdateFlowPutBodyFormProperties {
	}
	export function CreateUpdateFlowPutBodyFormGroup() {
		return new FormGroup<UpdateFlowPutBodyFormProperties>({
		});

	}

	export interface UpdateFlowPutBodySourceFailoverConfig {
		RecoveryWindow?: number | null;
		State?: FailoverConfigState | null;
	}
	export interface UpdateFlowPutBodySourceFailoverConfigFormProperties {
		RecoveryWindow: FormControl<number | null | undefined>,
		State: FormControl<FailoverConfigState | null | undefined>,
	}
	export function CreateUpdateFlowPutBodySourceFailoverConfigFormGroup() {
		return new FormGroup<UpdateFlowPutBodySourceFailoverConfigFormProperties>({
			RecoveryWindow: new FormControl<number | null | undefined>(undefined),
			State: new FormControl<FailoverConfigState | null | undefined>(undefined),
		});

	}

	export interface GrantFlowEntitlementsPostBody {

		/**
		 * The list of entitlements that you want to grant.
		 * Required
		 */
		entitlements: Array<GrantEntitlementRequest>;
	}
	export interface GrantFlowEntitlementsPostBodyFormProperties {
	}
	export function CreateGrantFlowEntitlementsPostBodyFormGroup() {
		return new FormGroup<GrantFlowEntitlementsPostBodyFormProperties>({
		});

	}

	export interface TagResourcePostBody {

		/**
		 * A map from tag keys to values. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.
		 * Required
		 */
		tags: {[id: string]: string };
	}
	export interface TagResourcePostBodyFormProperties {

		/**
		 * A map from tag keys to values. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.
		 * Required
		 */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateTagResourcePostBodyFormGroup() {
		return new FormGroup<TagResourcePostBodyFormProperties>({
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateFlowOutputPutBody {

		/** The range of IP addresses that should be allowed to initiate output requests to this flow. These IP addresses should be in the form of a Classless Inter-Domain Routing (CIDR) block; for example, 10.0.0.0/16. */
		cidrAllowList?: Array<string>;

		/** A description of the output. This description appears only on the AWS Elemental MediaConnect console and will not be seen by the end user. */
		description?: string | null;

		/** The IP address where you want to send the output. */
		destination?: string | null;

		/** Information about the encryption of the flow. */
		encryption?: UpdateFlowOutputPutBodyEncryption;

		/** The maximum latency in milliseconds for Zixi-based streams. */
		maxLatency?: number | null;

		/** The port to use when content is distributed to this output. */
		port?: number | null;

		/** The protocol to use for the output. */
		protocol?: UpdateFlowOutputPutBodyProtocol | null;

		/** The remote ID for the Zixi-pull stream. */
		remoteId?: string | null;

		/** The smoothing latency in milliseconds for RIST, RTP, and RTP-FEC streams. */
		smoothingLatency?: number | null;

		/** The stream ID that you want to use for this transport. This parameter applies only to Zixi-based streams. */
		streamId?: string | null;

		/** The settings for attaching a VPC interface to an output. */
		vpcInterfaceAttachment?: UpdateFlowOutputPutBodyVpcInterfaceAttachment;
	}
	export interface UpdateFlowOutputPutBodyFormProperties {

		/** A description of the output. This description appears only on the AWS Elemental MediaConnect console and will not be seen by the end user. */
		description: FormControl<string | null | undefined>,

		/** The IP address where you want to send the output. */
		destination: FormControl<string | null | undefined>,

		/** The maximum latency in milliseconds for Zixi-based streams. */
		maxLatency: FormControl<number | null | undefined>,

		/** The port to use when content is distributed to this output. */
		port: FormControl<number | null | undefined>,

		/** The protocol to use for the output. */
		protocol: FormControl<UpdateFlowOutputPutBodyProtocol | null | undefined>,

		/** The remote ID for the Zixi-pull stream. */
		remoteId: FormControl<string | null | undefined>,

		/** The smoothing latency in milliseconds for RIST, RTP, and RTP-FEC streams. */
		smoothingLatency: FormControl<number | null | undefined>,

		/** The stream ID that you want to use for this transport. This parameter applies only to Zixi-based streams. */
		streamId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateFlowOutputPutBodyFormGroup() {
		return new FormGroup<UpdateFlowOutputPutBodyFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			destination: new FormControl<string | null | undefined>(undefined),
			maxLatency: new FormControl<number | null | undefined>(undefined),
			port: new FormControl<number | null | undefined>(undefined),
			protocol: new FormControl<UpdateFlowOutputPutBodyProtocol | null | undefined>(undefined),
			remoteId: new FormControl<string | null | undefined>(undefined),
			smoothingLatency: new FormControl<number | null | undefined>(undefined),
			streamId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateFlowOutputPutBodyEncryption {
		Algorithm?: EncryptionAlgorithm | null;
		ConstantInitializationVector?: string | null;
		DeviceId?: string | null;
		KeyType?: UpdateFlowOutputPutBodyEncryptionKeyType | null;
		Region?: string | null;
		ResourceId?: string | null;
		RoleArn?: string | null;
		SecretArn?: string | null;
		Url?: string | null;
	}
	export interface UpdateFlowOutputPutBodyEncryptionFormProperties {
		Algorithm: FormControl<EncryptionAlgorithm | null | undefined>,
		ConstantInitializationVector: FormControl<string | null | undefined>,
		DeviceId: FormControl<string | null | undefined>,
		KeyType: FormControl<UpdateFlowOutputPutBodyEncryptionKeyType | null | undefined>,
		Region: FormControl<string | null | undefined>,
		ResourceId: FormControl<string | null | undefined>,
		RoleArn: FormControl<string | null | undefined>,
		SecretArn: FormControl<string | null | undefined>,
		Url: FormControl<string | null | undefined>,
	}
	export function CreateUpdateFlowOutputPutBodyEncryptionFormGroup() {
		return new FormGroup<UpdateFlowOutputPutBodyEncryptionFormProperties>({
			Algorithm: new FormControl<EncryptionAlgorithm | null | undefined>(undefined),
			ConstantInitializationVector: new FormControl<string | null | undefined>(undefined),
			DeviceId: new FormControl<string | null | undefined>(undefined),
			KeyType: new FormControl<UpdateFlowOutputPutBodyEncryptionKeyType | null | undefined>(undefined),
			Region: new FormControl<string | null | undefined>(undefined),
			ResourceId: new FormControl<string | null | undefined>(undefined),
			RoleArn: new FormControl<string | null | undefined>(undefined),
			SecretArn: new FormControl<string | null | undefined>(undefined),
			Url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum UpdateFlowOutputPutBodyEncryptionKeyType { speke = 0, static_key = 1 }

	export enum UpdateFlowOutputPutBodyProtocol { zixi_push = 0, rtp_fec = 1, rtp = 2, zixi_pull = 3, rist = 4 }

	export interface UpdateFlowOutputPutBodyVpcInterfaceAttachment {
		VpcInterfaceName?: string | null;
	}
	export interface UpdateFlowOutputPutBodyVpcInterfaceAttachmentFormProperties {
		VpcInterfaceName: FormControl<string | null | undefined>,
	}
	export function CreateUpdateFlowOutputPutBodyVpcInterfaceAttachmentFormGroup() {
		return new FormGroup<UpdateFlowOutputPutBodyVpcInterfaceAttachmentFormProperties>({
			VpcInterfaceName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateFlowSourcePutBody {

		/** Information about the encryption of the flow. */
		decryption?: UpdateFlowSourcePutBodyDecryption;

		/** A description for the source. This value is not used or seen outside of the current AWS Elemental MediaConnect account. */
		description?: string | null;

		/** The ARN of the entitlement that allows you to subscribe to this flow. The entitlement is set by the flow originator, and the ARN is generated as part of the originator's flow. */
		entitlementArn?: string | null;

		/** The port that the flow will be listening on for incoming content. */
		ingestPort?: number | null;

		/** The smoothing max bitrate for RIST, RTP, and RTP-FEC streams. */
		maxBitrate?: number | null;

		/** The maximum latency in milliseconds. This parameter applies only to RIST-based and Zixi-based streams. */
		maxLatency?: number | null;

		/** The protocol that is used by the source. */
		protocol?: UpdateFlowSourcePutBodyProtocol | null;

		/** The stream ID that you want to use for this transport. This parameter applies only to Zixi-based streams. */
		streamId?: string | null;

		/** The name of the VPC Interface to configure this Source with. */
		vpcInterfaceName?: string | null;

		/** The range of IP addresses that should be allowed to contribute content to your source. These IP addresses should be in the form of a Classless Inter-Domain Routing (CIDR) block; for example, 10.0.0.0/16. */
		whitelistCidr?: string | null;
	}
	export interface UpdateFlowSourcePutBodyFormProperties {

		/** A description for the source. This value is not used or seen outside of the current AWS Elemental MediaConnect account. */
		description: FormControl<string | null | undefined>,

		/** The ARN of the entitlement that allows you to subscribe to this flow. The entitlement is set by the flow originator, and the ARN is generated as part of the originator's flow. */
		entitlementArn: FormControl<string | null | undefined>,

		/** The port that the flow will be listening on for incoming content. */
		ingestPort: FormControl<number | null | undefined>,

		/** The smoothing max bitrate for RIST, RTP, and RTP-FEC streams. */
		maxBitrate: FormControl<number | null | undefined>,

		/** The maximum latency in milliseconds. This parameter applies only to RIST-based and Zixi-based streams. */
		maxLatency: FormControl<number | null | undefined>,

		/** The protocol that is used by the source. */
		protocol: FormControl<UpdateFlowSourcePutBodyProtocol | null | undefined>,

		/** The stream ID that you want to use for this transport. This parameter applies only to Zixi-based streams. */
		streamId: FormControl<string | null | undefined>,

		/** The name of the VPC Interface to configure this Source with. */
		vpcInterfaceName: FormControl<string | null | undefined>,

		/** The range of IP addresses that should be allowed to contribute content to your source. These IP addresses should be in the form of a Classless Inter-Domain Routing (CIDR) block; for example, 10.0.0.0/16. */
		whitelistCidr: FormControl<string | null | undefined>,
	}
	export function CreateUpdateFlowSourcePutBodyFormGroup() {
		return new FormGroup<UpdateFlowSourcePutBodyFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			entitlementArn: new FormControl<string | null | undefined>(undefined),
			ingestPort: new FormControl<number | null | undefined>(undefined),
			maxBitrate: new FormControl<number | null | undefined>(undefined),
			maxLatency: new FormControl<number | null | undefined>(undefined),
			protocol: new FormControl<UpdateFlowSourcePutBodyProtocol | null | undefined>(undefined),
			streamId: new FormControl<string | null | undefined>(undefined),
			vpcInterfaceName: new FormControl<string | null | undefined>(undefined),
			whitelistCidr: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateFlowSourcePutBodyDecryption {
		Algorithm?: EncryptionAlgorithm | null;
		ConstantInitializationVector?: string | null;
		DeviceId?: string | null;
		KeyType?: UpdateFlowSourcePutBodyDecryptionKeyType | null;
		Region?: string | null;
		ResourceId?: string | null;
		RoleArn?: string | null;
		SecretArn?: string | null;
		Url?: string | null;
	}
	export interface UpdateFlowSourcePutBodyDecryptionFormProperties {
		Algorithm: FormControl<EncryptionAlgorithm | null | undefined>,
		ConstantInitializationVector: FormControl<string | null | undefined>,
		DeviceId: FormControl<string | null | undefined>,
		KeyType: FormControl<UpdateFlowSourcePutBodyDecryptionKeyType | null | undefined>,
		Region: FormControl<string | null | undefined>,
		ResourceId: FormControl<string | null | undefined>,
		RoleArn: FormControl<string | null | undefined>,
		SecretArn: FormControl<string | null | undefined>,
		Url: FormControl<string | null | undefined>,
	}
	export function CreateUpdateFlowSourcePutBodyDecryptionFormGroup() {
		return new FormGroup<UpdateFlowSourcePutBodyDecryptionFormProperties>({
			Algorithm: new FormControl<EncryptionAlgorithm | null | undefined>(undefined),
			ConstantInitializationVector: new FormControl<string | null | undefined>(undefined),
			DeviceId: new FormControl<string | null | undefined>(undefined),
			KeyType: new FormControl<UpdateFlowSourcePutBodyDecryptionKeyType | null | undefined>(undefined),
			Region: new FormControl<string | null | undefined>(undefined),
			ResourceId: new FormControl<string | null | undefined>(undefined),
			RoleArn: new FormControl<string | null | undefined>(undefined),
			SecretArn: new FormControl<string | null | undefined>(undefined),
			Url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum UpdateFlowSourcePutBodyDecryptionKeyType { speke = 0, static_key = 1 }

	export enum UpdateFlowSourcePutBodyProtocol { zixi_push = 0, rtp_fec = 1, rtp = 2, zixi_pull = 3, rist = 4 }

	export interface UpdateFlowEntitlementPutBody {

		/** A description of the entitlement. This description appears only on the AWS Elemental MediaConnect console and will not be seen by the subscriber or end user. */
		description?: string | null;

		/** Information about the encryption of the flow. */
		encryption?: UpdateFlowEntitlementPutBodyEncryption;

		/** The AWS account IDs that you want to share your content with. The receiving accounts (subscribers) will be allowed to create their own flow using your content as the source. */
		subscribers?: Array<string>;
	}
	export interface UpdateFlowEntitlementPutBodyFormProperties {

		/** A description of the entitlement. This description appears only on the AWS Elemental MediaConnect console and will not be seen by the subscriber or end user. */
		description: FormControl<string | null | undefined>,
	}
	export function CreateUpdateFlowEntitlementPutBodyFormGroup() {
		return new FormGroup<UpdateFlowEntitlementPutBodyFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateFlowEntitlementPutBodyEncryption {
		Algorithm?: EncryptionAlgorithm | null;
		ConstantInitializationVector?: string | null;
		DeviceId?: string | null;
		KeyType?: UpdateFlowEntitlementPutBodyEncryptionKeyType | null;
		Region?: string | null;
		ResourceId?: string | null;
		RoleArn?: string | null;
		SecretArn?: string | null;
		Url?: string | null;
	}
	export interface UpdateFlowEntitlementPutBodyEncryptionFormProperties {
		Algorithm: FormControl<EncryptionAlgorithm | null | undefined>,
		ConstantInitializationVector: FormControl<string | null | undefined>,
		DeviceId: FormControl<string | null | undefined>,
		KeyType: FormControl<UpdateFlowEntitlementPutBodyEncryptionKeyType | null | undefined>,
		Region: FormControl<string | null | undefined>,
		ResourceId: FormControl<string | null | undefined>,
		RoleArn: FormControl<string | null | undefined>,
		SecretArn: FormControl<string | null | undefined>,
		Url: FormControl<string | null | undefined>,
	}
	export function CreateUpdateFlowEntitlementPutBodyEncryptionFormGroup() {
		return new FormGroup<UpdateFlowEntitlementPutBodyEncryptionFormProperties>({
			Algorithm: new FormControl<EncryptionAlgorithm | null | undefined>(undefined),
			ConstantInitializationVector: new FormControl<string | null | undefined>(undefined),
			DeviceId: new FormControl<string | null | undefined>(undefined),
			KeyType: new FormControl<UpdateFlowEntitlementPutBodyEncryptionKeyType | null | undefined>(undefined),
			Region: new FormControl<string | null | undefined>(undefined),
			ResourceId: new FormControl<string | null | undefined>(undefined),
			RoleArn: new FormControl<string | null | undefined>(undefined),
			SecretArn: new FormControl<string | null | undefined>(undefined),
			Url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum UpdateFlowEntitlementPutBodyEncryptionKeyType { speke = 0, static_key = 1 }

}

