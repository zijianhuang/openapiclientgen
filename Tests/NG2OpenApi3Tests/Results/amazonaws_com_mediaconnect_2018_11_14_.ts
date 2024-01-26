import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface AddBridgeOutputsResponse {
		BridgeArn?: string;
		Outputs?: Array<BridgeOutput>;
	}
	export interface AddBridgeOutputsResponseFormProperties {
		BridgeArn: FormControl<string | null | undefined>,
	}
	export function CreateAddBridgeOutputsResponseFormGroup() {
		return new FormGroup<AddBridgeOutputsResponseFormProperties>({
			BridgeArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The output of the bridge. */
	export interface BridgeOutput {
		FlowOutput?: BridgeFlowOutput;
		NetworkOutput?: BridgeNetworkOutput;
	}

	/** The output of the bridge. */
	export interface BridgeOutputFormProperties {
	}
	export function CreateBridgeOutputFormGroup() {
		return new FormGroup<BridgeOutputFormProperties>({
		});

	}


	/** The output of the bridge. A flow output is delivered to the AWS cloud. */
	export interface BridgeFlowOutput {

		/** Required */
		FlowArn: string;

		/** Required */
		FlowSourceArn: string;

		/** Required */
		Name: string;
	}

	/** The output of the bridge. A flow output is delivered to the AWS cloud. */
	export interface BridgeFlowOutputFormProperties {

		/** Required */
		FlowArn: FormControl<string | null | undefined>,

		/** Required */
		FlowSourceArn: FormControl<string | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateBridgeFlowOutputFormGroup() {
		return new FormGroup<BridgeFlowOutputFormProperties>({
			FlowArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			FlowSourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The output of the bridge. A network output is delivered to your premises. */
	export interface BridgeNetworkOutput {

		/** Required */
		IpAddress: string;

		/** Required */
		Name: string;

		/** Required */
		NetworkName: string;

		/** Required */
		Port: number;

		/** Required */
		Protocol: Protocol;

		/** Required */
		Ttl: number;
	}

	/** The output of the bridge. A network output is delivered to your premises. */
	export interface BridgeNetworkOutputFormProperties {

		/** Required */
		IpAddress: FormControl<string | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		NetworkName: FormControl<string | null | undefined>,

		/** Required */
		Port: FormControl<number | null | undefined>,

		/** Required */
		Protocol: FormControl<Protocol | null | undefined>,

		/** Required */
		Ttl: FormControl<number | null | undefined>,
	}
	export function CreateBridgeNetworkOutputFormGroup() {
		return new FormGroup<BridgeNetworkOutputFormProperties>({
			IpAddress: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NetworkName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Port: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Protocol: new FormControl<Protocol | null | undefined>(undefined, [Validators.required]),
			Ttl: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum Protocol { 'zixi-push' = 0, 'rtp-fec' = 1, rtp = 2, 'zixi-pull' = 3, rist = 4, 'st2110-jpegxs' = 5, cdi = 6, 'srt-listener' = 7, 'srt-caller' = 8, 'fujitsu-qos' = 9, udp = 10 }


	/** Add an output to a bridge. */
	export interface AddBridgeOutputRequest {
		NetworkOutput?: AddBridgeNetworkOutputRequest;
	}

	/** Add an output to a bridge. */
	export interface AddBridgeOutputRequestFormProperties {
	}
	export function CreateAddBridgeOutputRequestFormGroup() {
		return new FormGroup<AddBridgeOutputRequestFormProperties>({
		});

	}


	/** Add a network output to an existing bridge. */
	export interface AddBridgeNetworkOutputRequest {

		/** Required */
		IpAddress: string;

		/** Required */
		Name: string;

		/** Required */
		NetworkName: string;

		/** Required */
		Port: number;

		/** Required */
		Protocol: Protocol;

		/** Required */
		Ttl: number;
	}

	/** Add a network output to an existing bridge. */
	export interface AddBridgeNetworkOutputRequestFormProperties {

		/** Required */
		IpAddress: FormControl<string | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		NetworkName: FormControl<string | null | undefined>,

		/** Required */
		Port: FormControl<number | null | undefined>,

		/** Required */
		Protocol: FormControl<Protocol | null | undefined>,

		/** Required */
		Ttl: FormControl<number | null | undefined>,
	}
	export function CreateAddBridgeNetworkOutputRequestFormGroup() {
		return new FormGroup<AddBridgeNetworkOutputRequestFormProperties>({
			IpAddress: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NetworkName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Port: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Protocol: new FormControl<Protocol | null | undefined>(undefined, [Validators.required]),
			Ttl: new FormControl<number | null | undefined>(undefined, [Validators.required]),
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

	export interface ConflictException {
	}
	export interface ConflictExceptionFormProperties {
	}
	export function CreateConflictExceptionFormGroup() {
		return new FormGroup<ConflictExceptionFormProperties>({
		});

	}

	export interface AddBridgeSourcesResponse {
		BridgeArn?: string;
		Sources?: Array<BridgeSource>;
	}
	export interface AddBridgeSourcesResponseFormProperties {
		BridgeArn: FormControl<string | null | undefined>,
	}
	export function CreateAddBridgeSourcesResponseFormGroup() {
		return new FormGroup<AddBridgeSourcesResponseFormProperties>({
			BridgeArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The bridge's source. */
	export interface BridgeSource {
		FlowSource?: BridgeFlowSource;
		NetworkSource?: BridgeNetworkSource;
	}

	/** The bridge's source. */
	export interface BridgeSourceFormProperties {
	}
	export function CreateBridgeSourceFormGroup() {
		return new FormGroup<BridgeSourceFormProperties>({
		});

	}


	/** The source of the bridge. A flow source originates in MediaConnect as an existing cloud flow. */
	export interface BridgeFlowSource {

		/** Required */
		FlowArn: string;
		FlowVpcInterfaceAttachment?: VpcInterfaceAttachment;

		/** Required */
		Name: string;
		OutputArn?: string;
	}

	/** The source of the bridge. A flow source originates in MediaConnect as an existing cloud flow. */
	export interface BridgeFlowSourceFormProperties {

		/** Required */
		FlowArn: FormControl<string | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,
		OutputArn: FormControl<string | null | undefined>,
	}
	export function CreateBridgeFlowSourceFormGroup() {
		return new FormGroup<BridgeFlowSourceFormProperties>({
			FlowArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			OutputArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The settings for attaching a VPC interface to an resource. */
	export interface VpcInterfaceAttachment {
		VpcInterfaceName?: string;
	}

	/** The settings for attaching a VPC interface to an resource. */
	export interface VpcInterfaceAttachmentFormProperties {
		VpcInterfaceName: FormControl<string | null | undefined>,
	}
	export function CreateVpcInterfaceAttachmentFormGroup() {
		return new FormGroup<VpcInterfaceAttachmentFormProperties>({
			VpcInterfaceName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The source of the bridge. A network source originates at your premises. */
	export interface BridgeNetworkSource {

		/** Required */
		MulticastIp: string;

		/** Required */
		Name: string;

		/** Required */
		NetworkName: string;

		/** Required */
		Port: number;

		/** Required */
		Protocol: Protocol;
	}

	/** The source of the bridge. A network source originates at your premises. */
	export interface BridgeNetworkSourceFormProperties {

		/** Required */
		MulticastIp: FormControl<string | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		NetworkName: FormControl<string | null | undefined>,

		/** Required */
		Port: FormControl<number | null | undefined>,

		/** Required */
		Protocol: FormControl<Protocol | null | undefined>,
	}
	export function CreateBridgeNetworkSourceFormGroup() {
		return new FormGroup<BridgeNetworkSourceFormProperties>({
			MulticastIp: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NetworkName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Port: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Protocol: new FormControl<Protocol | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Add a source to an existing bridge. */
	export interface AddBridgeSourceRequest {
		FlowSource?: AddBridgeFlowSourceRequest;
		NetworkSource?: AddBridgeNetworkSourceRequest;
	}

	/** Add a source to an existing bridge. */
	export interface AddBridgeSourceRequestFormProperties {
	}
	export function CreateAddBridgeSourceRequestFormGroup() {
		return new FormGroup<AddBridgeSourceRequestFormProperties>({
		});

	}


	/** Add a flow source to an existing bridge. */
	export interface AddBridgeFlowSourceRequest {

		/** Required */
		FlowArn: string;
		FlowVpcInterfaceAttachment?: VpcInterfaceAttachment;

		/** Required */
		Name: string;
	}

	/** Add a flow source to an existing bridge. */
	export interface AddBridgeFlowSourceRequestFormProperties {

		/** Required */
		FlowArn: FormControl<string | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateAddBridgeFlowSourceRequestFormGroup() {
		return new FormGroup<AddBridgeFlowSourceRequestFormProperties>({
			FlowArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Add a network source to an existing bridge. */
	export interface AddBridgeNetworkSourceRequest {

		/** Required */
		MulticastIp: string;

		/** Required */
		Name: string;

		/** Required */
		NetworkName: string;

		/** Required */
		Port: number;

		/** Required */
		Protocol: Protocol;
	}

	/** Add a network source to an existing bridge. */
	export interface AddBridgeNetworkSourceRequestFormProperties {

		/** Required */
		MulticastIp: FormControl<string | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		NetworkName: FormControl<string | null | undefined>,

		/** Required */
		Port: FormControl<number | null | undefined>,

		/** Required */
		Protocol: FormControl<Protocol | null | undefined>,
	}
	export function CreateAddBridgeNetworkSourceRequestFormGroup() {
		return new FormGroup<AddBridgeNetworkSourceRequestFormProperties>({
			MulticastIp: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NetworkName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Port: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Protocol: new FormControl<Protocol | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AddFlowMediaStreamsResponse {
		FlowArn?: string;
		MediaStreams?: Array<MediaStream>;
	}
	export interface AddFlowMediaStreamsResponseFormProperties {
		FlowArn: FormControl<string | null | undefined>,
	}
	export function CreateAddFlowMediaStreamsResponseFormGroup() {
		return new FormGroup<AddFlowMediaStreamsResponseFormProperties>({
			FlowArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A single track or stream of media that contains video, audio, or ancillary data. After you add a media stream to a flow, you can associate it with sources and outputs on that flow, as long as they use the CDI protocol or the ST 2110 JPEG XS protocol. Each source or output can consist of one or many media streams. */
	export interface MediaStream {
		Attributes?: MediaStreamAttributes;
		ClockRate?: number | null;
		Description?: string;

		/** Required */
		Fmt: number;

		/** Required */
		MediaStreamId: number;

		/** Required */
		MediaStreamName: string;

		/** Required */
		MediaStreamType: MediaStreamType;
		VideoFormat?: string;
	}

	/** A single track or stream of media that contains video, audio, or ancillary data. After you add a media stream to a flow, you can associate it with sources and outputs on that flow, as long as they use the CDI protocol or the ST 2110 JPEG XS protocol. Each source or output can consist of one or many media streams. */
	export interface MediaStreamFormProperties {
		ClockRate: FormControl<number | null | undefined>,
		Description: FormControl<string | null | undefined>,

		/** Required */
		Fmt: FormControl<number | null | undefined>,

		/** Required */
		MediaStreamId: FormControl<number | null | undefined>,

		/** Required */
		MediaStreamName: FormControl<string | null | undefined>,

		/** Required */
		MediaStreamType: FormControl<MediaStreamType | null | undefined>,
		VideoFormat: FormControl<string | null | undefined>,
	}
	export function CreateMediaStreamFormGroup() {
		return new FormGroup<MediaStreamFormProperties>({
			ClockRate: new FormControl<number | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			Fmt: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			MediaStreamId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			MediaStreamName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MediaStreamType: new FormControl<MediaStreamType | null | undefined>(undefined, [Validators.required]),
			VideoFormat: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Attributes that are related to the media stream. */
	export interface MediaStreamAttributes {

		/** Required */
		Fmtp: Fmtp;
		Lang?: string;
	}

	/** Attributes that are related to the media stream. */
	export interface MediaStreamAttributesFormProperties {
		Lang: FormControl<string | null | undefined>,
	}
	export function CreateMediaStreamAttributesFormGroup() {
		return new FormGroup<MediaStreamAttributesFormProperties>({
			Lang: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** FMTP */
	export interface Fmtp {
		ChannelOrder?: string;
		Colorimetry?: Colorimetry;
		ExactFramerate?: string;
		Par?: string;
		Range?: Range;
		ScanMode?: ScanMode;
		Tcs?: Tcs;
	}

	/** FMTP */
	export interface FmtpFormProperties {
		ChannelOrder: FormControl<string | null | undefined>,
		Colorimetry: FormControl<Colorimetry | null | undefined>,
		ExactFramerate: FormControl<string | null | undefined>,
		Par: FormControl<string | null | undefined>,
		Range: FormControl<Range | null | undefined>,
		ScanMode: FormControl<ScanMode | null | undefined>,
		Tcs: FormControl<Tcs | null | undefined>,
	}
	export function CreateFmtpFormGroup() {
		return new FormGroup<FmtpFormProperties>({
			ChannelOrder: new FormControl<string | null | undefined>(undefined),
			Colorimetry: new FormControl<Colorimetry | null | undefined>(undefined),
			ExactFramerate: new FormControl<string | null | undefined>(undefined),
			Par: new FormControl<string | null | undefined>(undefined),
			Range: new FormControl<Range | null | undefined>(undefined),
			ScanMode: new FormControl<ScanMode | null | undefined>(undefined),
			Tcs: new FormControl<Tcs | null | undefined>(undefined),
		});

	}

	export enum Colorimetry { BT601 = 0, BT709 = 1, BT2020 = 2, BT2100 = 3, 'ST2065-1' = 4, 'ST2065-3' = 5, XYZ = 6 }

	export enum Range { NARROW = 0, FULL = 1, FULLPROTECT = 2 }

	export enum ScanMode { progressive = 0, interlace = 1, 'progressive-segmented-frame' = 2 }

	export enum Tcs { SDR = 0, PQ = 1, HLG = 2, LINEAR = 3, BT2100LINPQ = 4, BT2100LINHLG = 5, 'ST2065-1' = 6, 'ST428-1' = 7, DENSITY = 8 }

	export enum MediaStreamType { video = 0, audio = 1, 'ancillary-data' = 2 }


	/** The media stream that you want to add to the flow. */
	export interface AddMediaStreamRequest {
		Attributes?: MediaStreamAttributesRequest;
		ClockRate?: number | null;
		Description?: string;

		/** Required */
		MediaStreamId: number;

		/** Required */
		MediaStreamName: string;

		/** Required */
		MediaStreamType: MediaStreamType;
		VideoFormat?: string;
	}

	/** The media stream that you want to add to the flow. */
	export interface AddMediaStreamRequestFormProperties {
		ClockRate: FormControl<number | null | undefined>,
		Description: FormControl<string | null | undefined>,

		/** Required */
		MediaStreamId: FormControl<number | null | undefined>,

		/** Required */
		MediaStreamName: FormControl<string | null | undefined>,

		/** Required */
		MediaStreamType: FormControl<MediaStreamType | null | undefined>,
		VideoFormat: FormControl<string | null | undefined>,
	}
	export function CreateAddMediaStreamRequestFormGroup() {
		return new FormGroup<AddMediaStreamRequestFormProperties>({
			ClockRate: new FormControl<number | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			MediaStreamId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			MediaStreamName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MediaStreamType: new FormControl<MediaStreamType | null | undefined>(undefined, [Validators.required]),
			VideoFormat: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Attributes that are related to the media stream. */
	export interface MediaStreamAttributesRequest {
		Fmtp?: FmtpRequest;
		Lang?: string;
	}

	/** Attributes that are related to the media stream. */
	export interface MediaStreamAttributesRequestFormProperties {
		Lang: FormControl<string | null | undefined>,
	}
	export function CreateMediaStreamAttributesRequestFormGroup() {
		return new FormGroup<MediaStreamAttributesRequestFormProperties>({
			Lang: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The settings that you want to use to define the media stream. */
	export interface FmtpRequest {
		ChannelOrder?: string;
		Colorimetry?: Colorimetry;
		ExactFramerate?: string;
		Par?: string;
		Range?: Range;
		ScanMode?: ScanMode;
		Tcs?: Tcs;
	}

	/** The settings that you want to use to define the media stream. */
	export interface FmtpRequestFormProperties {
		ChannelOrder: FormControl<string | null | undefined>,
		Colorimetry: FormControl<Colorimetry | null | undefined>,
		ExactFramerate: FormControl<string | null | undefined>,
		Par: FormControl<string | null | undefined>,
		Range: FormControl<Range | null | undefined>,
		ScanMode: FormControl<ScanMode | null | undefined>,
		Tcs: FormControl<Tcs | null | undefined>,
	}
	export function CreateFmtpRequestFormGroup() {
		return new FormGroup<FmtpRequestFormProperties>({
			ChannelOrder: new FormControl<string | null | undefined>(undefined),
			Colorimetry: new FormControl<Colorimetry | null | undefined>(undefined),
			ExactFramerate: new FormControl<string | null | undefined>(undefined),
			Par: new FormControl<string | null | undefined>(undefined),
			Range: new FormControl<Range | null | undefined>(undefined),
			ScanMode: new FormControl<ScanMode | null | undefined>(undefined),
			Tcs: new FormControl<Tcs | null | undefined>(undefined),
		});

	}

	export interface AddFlowOutputsResponse {
		FlowArn?: string;
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
		Description?: string;
		Destination?: string;
		Encryption?: Encryption;
		EntitlementArn?: string;
		ListenerAddress?: string;
		MediaLiveInputArn?: string;
		MediaStreamOutputConfigurations?: Array<MediaStreamOutputConfiguration>;

		/** Required */
		Name: string;

		/** Required */
		OutputArn: string;
		Port?: number | null;
		Transport?: Transport;
		VpcInterfaceAttachment?: VpcInterfaceAttachment;
		BridgeArn?: string;
		BridgePorts?: Array<number> | null;
	}

	/** The settings for an output. */
	export interface OutputFormProperties {
		DataTransferSubscriberFeePercent: FormControl<number | null | undefined>,
		Description: FormControl<string | null | undefined>,
		Destination: FormControl<string | null | undefined>,
		EntitlementArn: FormControl<string | null | undefined>,
		ListenerAddress: FormControl<string | null | undefined>,
		MediaLiveInputArn: FormControl<string | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		OutputArn: FormControl<string | null | undefined>,
		Port: FormControl<number | null | undefined>,
		BridgeArn: FormControl<string | null | undefined>,
	}
	export function CreateOutputFormGroup() {
		return new FormGroup<OutputFormProperties>({
			DataTransferSubscriberFeePercent: new FormControl<number | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			Destination: new FormControl<string | null | undefined>(undefined),
			EntitlementArn: new FormControl<string | null | undefined>(undefined),
			ListenerAddress: new FormControl<string | null | undefined>(undefined),
			MediaLiveInputArn: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			OutputArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Port: new FormControl<number | null | undefined>(undefined),
			BridgeArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about the encryption of the flow. */
	export interface Encryption {
		Algorithm?: Algorithm;
		ConstantInitializationVector?: string;
		DeviceId?: string;
		KeyType?: KeyType;
		Region?: string;
		ResourceId?: string;

		/** Required */
		RoleArn: string;
		SecretArn?: string;
		Url?: string;
	}

	/** Information about the encryption of the flow. */
	export interface EncryptionFormProperties {
		Algorithm: FormControl<Algorithm | null | undefined>,
		ConstantInitializationVector: FormControl<string | null | undefined>,
		DeviceId: FormControl<string | null | undefined>,
		KeyType: FormControl<KeyType | null | undefined>,
		Region: FormControl<string | null | undefined>,
		ResourceId: FormControl<string | null | undefined>,

		/** Required */
		RoleArn: FormControl<string | null | undefined>,
		SecretArn: FormControl<string | null | undefined>,
		Url: FormControl<string | null | undefined>,
	}
	export function CreateEncryptionFormGroup() {
		return new FormGroup<EncryptionFormProperties>({
			Algorithm: new FormControl<Algorithm | null | undefined>(undefined),
			ConstantInitializationVector: new FormControl<string | null | undefined>(undefined),
			DeviceId: new FormControl<string | null | undefined>(undefined),
			KeyType: new FormControl<KeyType | null | undefined>(undefined),
			Region: new FormControl<string | null | undefined>(undefined),
			ResourceId: new FormControl<string | null | undefined>(undefined),
			RoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SecretArn: new FormControl<string | null | undefined>(undefined),
			Url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum Algorithm { aes128 = 0, aes192 = 1, aes256 = 2 }

	export enum KeyType { speke = 0, 'static-key' = 1, 'srt-password' = 2 }


	/** The media stream that is associated with the output, and the parameters for that association. */
	export interface MediaStreamOutputConfiguration {
		DestinationConfigurations?: Array<DestinationConfiguration>;

		/** Required */
		EncodingName: EncodingName;
		EncodingParameters?: EncodingParameters;

		/** Required */
		MediaStreamName: string;
	}

	/** The media stream that is associated with the output, and the parameters for that association. */
	export interface MediaStreamOutputConfigurationFormProperties {

		/** Required */
		EncodingName: FormControl<EncodingName | null | undefined>,

		/** Required */
		MediaStreamName: FormControl<string | null | undefined>,
	}
	export function CreateMediaStreamOutputConfigurationFormGroup() {
		return new FormGroup<MediaStreamOutputConfigurationFormProperties>({
			EncodingName: new FormControl<EncodingName | null | undefined>(undefined, [Validators.required]),
			MediaStreamName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The transport parameters that are associated with an outbound media stream. */
	export interface DestinationConfiguration {

		/** Required */
		DestinationIp: string;

		/** Required */
		DestinationPort: number;

		/** Required */
		Interface: Interface;

		/** Required */
		OutboundIp: string;
	}

	/** The transport parameters that are associated with an outbound media stream. */
	export interface DestinationConfigurationFormProperties {

		/** Required */
		DestinationIp: FormControl<string | null | undefined>,

		/** Required */
		DestinationPort: FormControl<number | null | undefined>,

		/** Required */
		OutboundIp: FormControl<string | null | undefined>,
	}
	export function CreateDestinationConfigurationFormGroup() {
		return new FormGroup<DestinationConfigurationFormProperties>({
			DestinationIp: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DestinationPort: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			OutboundIp: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The VPC interface that is used for the media stream associated with the source or output. */
	export interface Interface {

		/** Required */
		Name: string;
	}

	/** The VPC interface that is used for the media stream associated with the source or output. */
	export interface InterfaceFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateInterfaceFormGroup() {
		return new FormGroup<InterfaceFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum EncodingName { jxsv = 0, raw = 1, smpte291 = 2, pcm = 3 }


	/** A collection of parameters that determine how MediaConnect will convert the content. These fields only apply to outputs on flows that have a CDI source. */
	export interface EncodingParameters {

		/** Required */
		CompressionFactor: number;

		/** Required */
		EncoderProfile: EncoderProfile;
	}

	/** A collection of parameters that determine how MediaConnect will convert the content. These fields only apply to outputs on flows that have a CDI source. */
	export interface EncodingParametersFormProperties {

		/** Required */
		CompressionFactor: FormControl<number | null | undefined>,

		/** Required */
		EncoderProfile: FormControl<EncoderProfile | null | undefined>,
	}
	export function CreateEncodingParametersFormGroup() {
		return new FormGroup<EncodingParametersFormProperties>({
			CompressionFactor: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			EncoderProfile: new FormControl<EncoderProfile | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum EncoderProfile { main = 0, high = 1 }


	/** Attributes related to the transport stream that are used in a source or output. */
	export interface Transport {
		CidrAllowList?: Array<string>;
		MaxBitrate?: number | null;
		MaxLatency?: number | null;
		MaxSyncBuffer?: number | null;
		MinLatency?: number | null;

		/** Required */
		Protocol: Protocol;
		RemoteId?: string;
		SenderControlPort?: number | null;
		SenderIpAddress?: string;
		SmoothingLatency?: number | null;
		SourceListenerAddress?: string;
		SourceListenerPort?: number | null;
		StreamId?: string;
	}

	/** Attributes related to the transport stream that are used in a source or output. */
	export interface TransportFormProperties {
		MaxBitrate: FormControl<number | null | undefined>,
		MaxLatency: FormControl<number | null | undefined>,
		MaxSyncBuffer: FormControl<number | null | undefined>,
		MinLatency: FormControl<number | null | undefined>,

		/** Required */
		Protocol: FormControl<Protocol | null | undefined>,
		RemoteId: FormControl<string | null | undefined>,
		SenderControlPort: FormControl<number | null | undefined>,
		SenderIpAddress: FormControl<string | null | undefined>,
		SmoothingLatency: FormControl<number | null | undefined>,
		SourceListenerAddress: FormControl<string | null | undefined>,
		SourceListenerPort: FormControl<number | null | undefined>,
		StreamId: FormControl<string | null | undefined>,
	}
	export function CreateTransportFormGroup() {
		return new FormGroup<TransportFormProperties>({
			MaxBitrate: new FormControl<number | null | undefined>(undefined),
			MaxLatency: new FormControl<number | null | undefined>(undefined),
			MaxSyncBuffer: new FormControl<number | null | undefined>(undefined),
			MinLatency: new FormControl<number | null | undefined>(undefined),
			Protocol: new FormControl<Protocol | null | undefined>(undefined, [Validators.required]),
			RemoteId: new FormControl<string | null | undefined>(undefined),
			SenderControlPort: new FormControl<number | null | undefined>(undefined),
			SenderIpAddress: new FormControl<string | null | undefined>(undefined),
			SmoothingLatency: new FormControl<number | null | undefined>(undefined),
			SourceListenerAddress: new FormControl<string | null | undefined>(undefined),
			SourceListenerPort: new FormControl<number | null | undefined>(undefined),
			StreamId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The output that you want to add to this flow. */
	export interface AddOutputRequest {
		CidrAllowList?: Array<string>;
		Description?: string;
		Destination?: string;
		Encryption?: Encryption;
		MaxLatency?: number | null;
		MediaStreamOutputConfigurations?: Array<MediaStreamOutputConfigurationRequest>;
		MinLatency?: number | null;
		Name?: string;
		Port?: number | null;

		/** Required */
		Protocol: Protocol;
		RemoteId?: string;
		SenderControlPort?: number | null;
		SmoothingLatency?: number | null;
		StreamId?: string;
		VpcInterfaceAttachment?: VpcInterfaceAttachment;
	}

	/** The output that you want to add to this flow. */
	export interface AddOutputRequestFormProperties {
		Description: FormControl<string | null | undefined>,
		Destination: FormControl<string | null | undefined>,
		MaxLatency: FormControl<number | null | undefined>,
		MinLatency: FormControl<number | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Port: FormControl<number | null | undefined>,

		/** Required */
		Protocol: FormControl<Protocol | null | undefined>,
		RemoteId: FormControl<string | null | undefined>,
		SenderControlPort: FormControl<number | null | undefined>,
		SmoothingLatency: FormControl<number | null | undefined>,
		StreamId: FormControl<string | null | undefined>,
	}
	export function CreateAddOutputRequestFormGroup() {
		return new FormGroup<AddOutputRequestFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined),
			Destination: new FormControl<string | null | undefined>(undefined),
			MaxLatency: new FormControl<number | null | undefined>(undefined),
			MinLatency: new FormControl<number | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Port: new FormControl<number | null | undefined>(undefined),
			Protocol: new FormControl<Protocol | null | undefined>(undefined, [Validators.required]),
			RemoteId: new FormControl<string | null | undefined>(undefined),
			SenderControlPort: new FormControl<number | null | undefined>(undefined),
			SmoothingLatency: new FormControl<number | null | undefined>(undefined),
			StreamId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The media stream that you want to associate with the output, and the parameters for that association. */
	export interface MediaStreamOutputConfigurationRequest {
		DestinationConfigurations?: Array<DestinationConfigurationRequest>;

		/** Required */
		EncodingName: EncodingName;
		EncodingParameters?: EncodingParametersRequest;

		/** Required */
		MediaStreamName: string;
	}

	/** The media stream that you want to associate with the output, and the parameters for that association. */
	export interface MediaStreamOutputConfigurationRequestFormProperties {

		/** Required */
		EncodingName: FormControl<EncodingName | null | undefined>,

		/** Required */
		MediaStreamName: FormControl<string | null | undefined>,
	}
	export function CreateMediaStreamOutputConfigurationRequestFormGroup() {
		return new FormGroup<MediaStreamOutputConfigurationRequestFormProperties>({
			EncodingName: new FormControl<EncodingName | null | undefined>(undefined, [Validators.required]),
			MediaStreamName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The transport parameters that you want to associate with an outbound media stream. */
	export interface DestinationConfigurationRequest {

		/** Required */
		DestinationIp: string;

		/** Required */
		DestinationPort: number;

		/** Required */
		Interface: InterfaceRequest;
	}

	/** The transport parameters that you want to associate with an outbound media stream. */
	export interface DestinationConfigurationRequestFormProperties {

		/** Required */
		DestinationIp: FormControl<string | null | undefined>,

		/** Required */
		DestinationPort: FormControl<number | null | undefined>,
	}
	export function CreateDestinationConfigurationRequestFormGroup() {
		return new FormGroup<DestinationConfigurationRequestFormProperties>({
			DestinationIp: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DestinationPort: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The VPC interface that you want to designate where the media stream is coming from or going to. */
	export interface InterfaceRequest {

		/** Required */
		Name: string;
	}

	/** The VPC interface that you want to designate where the media stream is coming from or going to. */
	export interface InterfaceRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateInterfaceRequestFormGroup() {
		return new FormGroup<InterfaceRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A collection of parameters that determine how MediaConnect will convert the content. These fields only apply to outputs on flows that have a CDI source. */
	export interface EncodingParametersRequest {

		/** Required */
		CompressionFactor: number;

		/** Required */
		EncoderProfile: EncoderProfile;
	}

	/** A collection of parameters that determine how MediaConnect will convert the content. These fields only apply to outputs on flows that have a CDI source. */
	export interface EncodingParametersRequestFormProperties {

		/** Required */
		CompressionFactor: FormControl<number | null | undefined>,

		/** Required */
		EncoderProfile: FormControl<EncoderProfile | null | undefined>,
	}
	export function CreateEncodingParametersRequestFormGroup() {
		return new FormGroup<EncodingParametersRequestFormProperties>({
			CompressionFactor: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			EncoderProfile: new FormControl<EncoderProfile | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AddFlowOutputs420Exception {
	}
	export interface AddFlowOutputs420ExceptionFormProperties {
	}
	export function CreateAddFlowOutputs420ExceptionFormGroup() {
		return new FormGroup<AddFlowOutputs420ExceptionFormProperties>({
		});

	}

	export interface AddFlowSourcesResponse {
		FlowArn?: string;
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
		Decryption?: Encryption;
		Description?: string;
		EntitlementArn?: string;
		IngestIp?: string;
		IngestPort?: number | null;
		MediaStreamSourceConfigurations?: Array<MediaStreamSourceConfiguration>;

		/** Required */
		Name: string;
		SenderControlPort?: number | null;
		SenderIpAddress?: string;

		/** Required */
		SourceArn: string;
		Transport?: Transport;
		VpcInterfaceName?: string;
		WhitelistCidr?: string;
		GatewayBridgeSource?: GatewayBridgeSource;
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
		SenderControlPort: FormControl<number | null | undefined>,
		SenderIpAddress: FormControl<string | null | undefined>,

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
			SenderControlPort: new FormControl<number | null | undefined>(undefined),
			SenderIpAddress: new FormControl<string | null | undefined>(undefined),
			SourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			VpcInterfaceName: new FormControl<string | null | undefined>(undefined),
			WhitelistCidr: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The media stream that is associated with the source, and the parameters for that association. */
	export interface MediaStreamSourceConfiguration {

		/** Required */
		EncodingName: EncodingName;
		InputConfigurations?: Array<InputConfiguration>;

		/** Required */
		MediaStreamName: string;
	}

	/** The media stream that is associated with the source, and the parameters for that association. */
	export interface MediaStreamSourceConfigurationFormProperties {

		/** Required */
		EncodingName: FormControl<EncodingName | null | undefined>,

		/** Required */
		MediaStreamName: FormControl<string | null | undefined>,
	}
	export function CreateMediaStreamSourceConfigurationFormGroup() {
		return new FormGroup<MediaStreamSourceConfigurationFormProperties>({
			EncodingName: new FormControl<EncodingName | null | undefined>(undefined, [Validators.required]),
			MediaStreamName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The transport parameters that are associated with an incoming media stream. */
	export interface InputConfiguration {

		/** Required */
		InputIp: string;

		/** Required */
		InputPort: number;

		/** Required */
		Interface: Interface;
	}

	/** The transport parameters that are associated with an incoming media stream. */
	export interface InputConfigurationFormProperties {

		/** Required */
		InputIp: FormControl<string | null | undefined>,

		/** Required */
		InputPort: FormControl<number | null | undefined>,
	}
	export function CreateInputConfigurationFormGroup() {
		return new FormGroup<InputConfigurationFormProperties>({
			InputIp: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			InputPort: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The source configuration for cloud flows receiving a stream from a bridge. */
	export interface GatewayBridgeSource {

		/** Required */
		BridgeArn: string;
		VpcInterfaceAttachment?: VpcInterfaceAttachment;
	}

	/** The source configuration for cloud flows receiving a stream from a bridge. */
	export interface GatewayBridgeSourceFormProperties {

		/** Required */
		BridgeArn: FormControl<string | null | undefined>,
	}
	export function CreateGatewayBridgeSourceFormGroup() {
		return new FormGroup<GatewayBridgeSourceFormProperties>({
			BridgeArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The settings for the source of the flow. */
	export interface SetSourceRequest {
		Decryption?: Encryption;
		Description?: string;
		EntitlementArn?: string;
		IngestPort?: number | null;
		MaxBitrate?: number | null;
		MaxLatency?: number | null;
		MaxSyncBuffer?: number | null;
		MediaStreamSourceConfigurations?: Array<MediaStreamSourceConfigurationRequest>;
		MinLatency?: number | null;
		Name?: string;
		Protocol?: Protocol;
		SenderControlPort?: number | null;
		SenderIpAddress?: string;
		SourceListenerAddress?: string;
		SourceListenerPort?: number | null;
		StreamId?: string;
		VpcInterfaceName?: string;
		WhitelistCidr?: string;
		GatewayBridgeSource?: SetGatewayBridgeSourceRequest;
	}

	/** The settings for the source of the flow. */
	export interface SetSourceRequestFormProperties {
		Description: FormControl<string | null | undefined>,
		EntitlementArn: FormControl<string | null | undefined>,
		IngestPort: FormControl<number | null | undefined>,
		MaxBitrate: FormControl<number | null | undefined>,
		MaxLatency: FormControl<number | null | undefined>,
		MaxSyncBuffer: FormControl<number | null | undefined>,
		MinLatency: FormControl<number | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Protocol: FormControl<Protocol | null | undefined>,
		SenderControlPort: FormControl<number | null | undefined>,
		SenderIpAddress: FormControl<string | null | undefined>,
		SourceListenerAddress: FormControl<string | null | undefined>,
		SourceListenerPort: FormControl<number | null | undefined>,
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
			MaxSyncBuffer: new FormControl<number | null | undefined>(undefined),
			MinLatency: new FormControl<number | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Protocol: new FormControl<Protocol | null | undefined>(undefined),
			SenderControlPort: new FormControl<number | null | undefined>(undefined),
			SenderIpAddress: new FormControl<string | null | undefined>(undefined),
			SourceListenerAddress: new FormControl<string | null | undefined>(undefined),
			SourceListenerPort: new FormControl<number | null | undefined>(undefined),
			StreamId: new FormControl<string | null | undefined>(undefined),
			VpcInterfaceName: new FormControl<string | null | undefined>(undefined),
			WhitelistCidr: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The definition of a media stream that you want to associate with the source. */
	export interface MediaStreamSourceConfigurationRequest {

		/** Required */
		EncodingName: EncodingName;
		InputConfigurations?: Array<InputConfigurationRequest>;

		/** Required */
		MediaStreamName: string;
	}

	/** The definition of a media stream that you want to associate with the source. */
	export interface MediaStreamSourceConfigurationRequestFormProperties {

		/** Required */
		EncodingName: FormControl<EncodingName | null | undefined>,

		/** Required */
		MediaStreamName: FormControl<string | null | undefined>,
	}
	export function CreateMediaStreamSourceConfigurationRequestFormGroup() {
		return new FormGroup<MediaStreamSourceConfigurationRequestFormProperties>({
			EncodingName: new FormControl<EncodingName | null | undefined>(undefined, [Validators.required]),
			MediaStreamName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The transport parameters that you want to associate with an incoming media stream. */
	export interface InputConfigurationRequest {

		/** Required */
		InputPort: number;

		/** Required */
		Interface: InterfaceRequest;
	}

	/** The transport parameters that you want to associate with an incoming media stream. */
	export interface InputConfigurationRequestFormProperties {

		/** Required */
		InputPort: FormControl<number | null | undefined>,
	}
	export function CreateInputConfigurationRequestFormGroup() {
		return new FormGroup<InputConfigurationRequestFormProperties>({
			InputPort: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The source configuration for cloud flows receiving a stream from a bridge. */
	export interface SetGatewayBridgeSourceRequest {

		/** Required */
		BridgeArn: string;
		VpcInterfaceAttachment?: VpcInterfaceAttachment;
	}

	/** The source configuration for cloud flows receiving a stream from a bridge. */
	export interface SetGatewayBridgeSourceRequestFormProperties {

		/** Required */
		BridgeArn: FormControl<string | null | undefined>,
	}
	export function CreateSetGatewayBridgeSourceRequestFormGroup() {
		return new FormGroup<SetGatewayBridgeSourceRequestFormProperties>({
			BridgeArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AddFlowVpcInterfacesResponse {
		FlowArn?: string;
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
		NetworkInterfaceType: NetworkInterfaceType;

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
		NetworkInterfaceType: FormControl<NetworkInterfaceType | null | undefined>,

		/** Required */
		RoleArn: FormControl<string | null | undefined>,

		/** Required */
		SubnetId: FormControl<string | null | undefined>,
	}
	export function CreateVpcInterfaceFormGroup() {
		return new FormGroup<VpcInterfaceFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NetworkInterfaceType: new FormControl<NetworkInterfaceType | null | undefined>(undefined, [Validators.required]),
			RoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SubnetId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum NetworkInterfaceType { ena = 0, efa = 1 }


	/** Desired VPC Interface for a Flow */
	export interface VpcInterfaceRequest {

		/** Required */
		Name: string;
		NetworkInterfaceType?: NetworkInterfaceType;

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
		NetworkInterfaceType: FormControl<NetworkInterfaceType | null | undefined>,

		/** Required */
		RoleArn: FormControl<string | null | undefined>,

		/** Required */
		SubnetId: FormControl<string | null | undefined>,
	}
	export function CreateVpcInterfaceRequestFormGroup() {
		return new FormGroup<VpcInterfaceRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NetworkInterfaceType: new FormControl<NetworkInterfaceType | null | undefined>(undefined),
			RoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SubnetId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateBridgeResponse {
		Bridge?: Bridge;
	}
	export interface CreateBridgeResponseFormProperties {
	}
	export function CreateCreateBridgeResponseFormGroup() {
		return new FormGroup<CreateBridgeResponseFormProperties>({
		});

	}


	/** A Bridge is the connection between your datacenter's Instances and the AWS cloud. A bridge can be used to send video from the AWS cloud to your datacenter or from your datacenter to the AWS cloud. */
	export interface Bridge {

		/** Required */
		BridgeArn: string;
		BridgeMessages?: Array<MessageDetail>;

		/** Required */
		BridgeState: BridgeState;
		EgressGatewayBridge?: EgressGatewayBridge;
		IngressGatewayBridge?: IngressGatewayBridge;

		/** Required */
		Name: string;
		Outputs?: Array<BridgeOutput>;

		/** Required */
		PlacementArn: string;
		SourceFailoverConfig?: FailoverConfig;
		Sources?: Array<BridgeSource>;
	}

	/** A Bridge is the connection between your datacenter's Instances and the AWS cloud. A bridge can be used to send video from the AWS cloud to your datacenter or from your datacenter to the AWS cloud. */
	export interface BridgeFormProperties {

		/** Required */
		BridgeArn: FormControl<string | null | undefined>,

		/** Required */
		BridgeState: FormControl<BridgeState | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		PlacementArn: FormControl<string | null | undefined>,
	}
	export function CreateBridgeFormGroup() {
		return new FormGroup<BridgeFormProperties>({
			BridgeArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			BridgeState: new FormControl<BridgeState | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PlacementArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface MessageDetail {

		/** Required */
		Code: string;

		/** Required */
		Message: string;
		ResourceName?: string;
	}
	export interface MessageDetailFormProperties {

		/** Required */
		Code: FormControl<string | null | undefined>,

		/** Required */
		Message: FormControl<string | null | undefined>,
		ResourceName: FormControl<string | null | undefined>,
	}
	export function CreateMessageDetailFormGroup() {
		return new FormGroup<MessageDetailFormProperties>({
			Code: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Message: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ResourceName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum BridgeState { CREATING = 0, STANDBY = 1, STARTING = 2, DEPLOYING = 3, ACTIVE = 4, STOPPING = 5, DELETING = 6, DELETED = 7, START_FAILED = 8, START_PENDING = 9, STOP_FAILED = 10, UPDATING = 11 }

	export interface EgressGatewayBridge {
		InstanceId?: string;

		/** Required */
		MaxBitrate: number;
	}
	export interface EgressGatewayBridgeFormProperties {
		InstanceId: FormControl<string | null | undefined>,

		/** Required */
		MaxBitrate: FormControl<number | null | undefined>,
	}
	export function CreateEgressGatewayBridgeFormGroup() {
		return new FormGroup<EgressGatewayBridgeFormProperties>({
			InstanceId: new FormControl<string | null | undefined>(undefined),
			MaxBitrate: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface IngressGatewayBridge {
		InstanceId?: string;

		/** Required */
		MaxBitrate: number;

		/** Required */
		MaxOutputs: number;
	}
	export interface IngressGatewayBridgeFormProperties {
		InstanceId: FormControl<string | null | undefined>,

		/** Required */
		MaxBitrate: FormControl<number | null | undefined>,

		/** Required */
		MaxOutputs: FormControl<number | null | undefined>,
	}
	export function CreateIngressGatewayBridgeFormGroup() {
		return new FormGroup<IngressGatewayBridgeFormProperties>({
			InstanceId: new FormControl<string | null | undefined>(undefined),
			MaxBitrate: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			MaxOutputs: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The settings for source failover. */
	export interface FailoverConfig {
		FailoverMode?: FailoverMode;
		RecoveryWindow?: number | null;
		SourcePriority?: SourcePriority;
		State?: State;
	}

	/** The settings for source failover. */
	export interface FailoverConfigFormProperties {
		FailoverMode: FormControl<FailoverMode | null | undefined>,
		RecoveryWindow: FormControl<number | null | undefined>,
		State: FormControl<State | null | undefined>,
	}
	export function CreateFailoverConfigFormGroup() {
		return new FormGroup<FailoverConfigFormProperties>({
			FailoverMode: new FormControl<FailoverMode | null | undefined>(undefined),
			RecoveryWindow: new FormControl<number | null | undefined>(undefined),
			State: new FormControl<State | null | undefined>(undefined),
		});

	}

	export enum FailoverMode { MERGE = 0, FAILOVER = 1 }


	/** The priority you want to assign to a source. You can have a primary stream and a backup stream or two equally prioritized streams. */
	export interface SourcePriority {
		PrimarySource?: string;
	}

	/** The priority you want to assign to a source. You can have a primary stream and a backup stream or two equally prioritized streams. */
	export interface SourcePriorityFormProperties {
		PrimarySource: FormControl<string | null | undefined>,
	}
	export function CreateSourcePriorityFormGroup() {
		return new FormGroup<SourcePriorityFormProperties>({
			PrimarySource: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum State { ENABLED = 0, DISABLED = 1 }

	export interface CreateBridge420Exception {
	}
	export interface CreateBridge420ExceptionFormProperties {
	}
	export function CreateCreateBridge420ExceptionFormGroup() {
		return new FormGroup<CreateBridge420ExceptionFormProperties>({
		});

	}

	export interface CreateFlowResponse {
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
		Description?: string;
		EgressIp?: string;

		/** Required */
		Entitlements: Array<Entitlement>;

		/** Required */
		FlowArn: string;
		MediaStreams?: Array<MediaStream>;

		/** Required */
		Name: string;

		/** Required */
		Outputs: Array<Output>;

		/** Required */
		Source: Source;
		SourceFailoverConfig?: FailoverConfig;
		Sources?: Array<Source>;

		/** Required */
		Status: Status;
		VpcInterfaces?: Array<VpcInterface>;
		Maintenance?: Maintenance;
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
		Status: FormControl<Status | null | undefined>,
	}
	export function CreateFlowFormGroup() {
		return new FormGroup<FlowFormProperties>({
			AvailabilityZone: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
			EgressIp: new FormControl<string | null | undefined>(undefined),
			FlowArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Status: new FormControl<Status | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The settings for a flow entitlement. */
	export interface Entitlement {
		DataTransferSubscriberFeePercent?: number | null;
		Description?: string;
		Encryption?: Encryption;

		/** Required */
		EntitlementArn: string;
		EntitlementStatus?: State;

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
		EntitlementStatus: FormControl<State | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateEntitlementFormGroup() {
		return new FormGroup<EntitlementFormProperties>({
			DataTransferSubscriberFeePercent: new FormControl<number | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			EntitlementArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			EntitlementStatus: new FormControl<State | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum Status { STANDBY = 0, ACTIVE = 1, UPDATING = 2, DELETING = 3, STARTING = 4, STOPPING = 5, ERROR = 6 }


	/** The maintenance setting of a flow */
	export interface Maintenance {
		MaintenanceDay?: MaintenanceDay;
		MaintenanceDeadline?: string;
		MaintenanceScheduledDate?: string;
		MaintenanceStartHour?: string;
	}

	/** The maintenance setting of a flow */
	export interface MaintenanceFormProperties {
		MaintenanceDay: FormControl<MaintenanceDay | null | undefined>,
		MaintenanceDeadline: FormControl<string | null | undefined>,
		MaintenanceScheduledDate: FormControl<string | null | undefined>,
		MaintenanceStartHour: FormControl<string | null | undefined>,
	}
	export function CreateMaintenanceFormGroup() {
		return new FormGroup<MaintenanceFormProperties>({
			MaintenanceDay: new FormControl<MaintenanceDay | null | undefined>(undefined),
			MaintenanceDeadline: new FormControl<string | null | undefined>(undefined),
			MaintenanceScheduledDate: new FormControl<string | null | undefined>(undefined),
			MaintenanceStartHour: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum MaintenanceDay { Monday = 0, Tuesday = 1, Wednesday = 2, Thursday = 3, Friday = 4, Saturday = 5, Sunday = 6 }


	/** The entitlements that you want to grant on a flow. */
	export interface GrantEntitlementRequest {
		DataTransferSubscriberFeePercent?: number | null;
		Description?: string;
		Encryption?: Encryption;
		EntitlementStatus?: State;
		Name?: string;

		/** Required */
		Subscribers: Array<string>;
	}

	/** The entitlements that you want to grant on a flow. */
	export interface GrantEntitlementRequestFormProperties {
		DataTransferSubscriberFeePercent: FormControl<number | null | undefined>,
		Description: FormControl<string | null | undefined>,
		EntitlementStatus: FormControl<State | null | undefined>,
		Name: FormControl<string | null | undefined>,
	}
	export function CreateGrantEntitlementRequestFormGroup() {
		return new FormGroup<GrantEntitlementRequestFormProperties>({
			DataTransferSubscriberFeePercent: new FormControl<number | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			EntitlementStatus: new FormControl<State | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateFlow420Exception {
	}
	export interface CreateFlow420ExceptionFormProperties {
	}
	export function CreateCreateFlow420ExceptionFormGroup() {
		return new FormGroup<CreateFlow420ExceptionFormProperties>({
		});

	}

	export interface CreateGatewayResponse {
		Gateway?: Gateway;
	}
	export interface CreateGatewayResponseFormProperties {
	}
	export function CreateCreateGatewayResponseFormGroup() {
		return new FormGroup<CreateGatewayResponseFormProperties>({
		});

	}


	/** The settings for a gateway, including its networks. */
	export interface Gateway {

		/** Required */
		EgressCidrBlocks: Array<string>;

		/** Required */
		GatewayArn: string;
		GatewayMessages?: Array<MessageDetail>;
		GatewayState?: GatewayState;

		/** Required */
		Name: string;

		/** Required */
		Networks: Array<GatewayNetwork>;
	}

	/** The settings for a gateway, including its networks. */
	export interface GatewayFormProperties {

		/** Required */
		GatewayArn: FormControl<string | null | undefined>,
		GatewayState: FormControl<GatewayState | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateGatewayFormGroup() {
		return new FormGroup<GatewayFormProperties>({
			GatewayArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			GatewayState: new FormControl<GatewayState | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum GatewayState { CREATING = 0, ACTIVE = 1, UPDATING = 2, ERROR = 3, DELETING = 4, DELETED = 5 }


	/** The network settings for a gateway. */
	export interface GatewayNetwork {

		/** Required */
		CidrBlock: string;

		/** Required */
		Name: string;
	}

	/** The network settings for a gateway. */
	export interface GatewayNetworkFormProperties {

		/** Required */
		CidrBlock: FormControl<string | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateGatewayNetworkFormGroup() {
		return new FormGroup<GatewayNetworkFormProperties>({
			CidrBlock: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateGateway420Exception {
	}
	export interface CreateGateway420ExceptionFormProperties {
	}
	export function CreateCreateGateway420ExceptionFormGroup() {
		return new FormGroup<CreateGateway420ExceptionFormProperties>({
		});

	}

	export interface DeleteBridgeResponse {
		BridgeArn?: string;
	}
	export interface DeleteBridgeResponseFormProperties {
		BridgeArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteBridgeResponseFormGroup() {
		return new FormGroup<DeleteBridgeResponseFormProperties>({
			BridgeArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteFlowResponse {
		FlowArn?: string;
		Status?: Status;
	}
	export interface DeleteFlowResponseFormProperties {
		FlowArn: FormControl<string | null | undefined>,
		Status: FormControl<Status | null | undefined>,
	}
	export function CreateDeleteFlowResponseFormGroup() {
		return new FormGroup<DeleteFlowResponseFormProperties>({
			FlowArn: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<Status | null | undefined>(undefined),
		});

	}

	export interface DeleteGatewayResponse {
		GatewayArn?: string;
	}
	export interface DeleteGatewayResponseFormProperties {
		GatewayArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteGatewayResponseFormGroup() {
		return new FormGroup<DeleteGatewayResponseFormProperties>({
			GatewayArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeregisterGatewayInstanceResponse {
		GatewayInstanceArn?: string;
		InstanceState?: InstanceState;
	}
	export interface DeregisterGatewayInstanceResponseFormProperties {
		GatewayInstanceArn: FormControl<string | null | undefined>,
		InstanceState: FormControl<InstanceState | null | undefined>,
	}
	export function CreateDeregisterGatewayInstanceResponseFormGroup() {
		return new FormGroup<DeregisterGatewayInstanceResponseFormProperties>({
			GatewayInstanceArn: new FormControl<string | null | undefined>(undefined),
			InstanceState: new FormControl<InstanceState | null | undefined>(undefined),
		});

	}

	export enum InstanceState { REGISTERING = 0, ACTIVE = 1, DEREGISTERING = 2, DEREGISTERED = 3, REGISTRATION_ERROR = 4, DEREGISTRATION_ERROR = 5 }

	export interface DescribeBridgeResponse {
		Bridge?: Bridge;
	}
	export interface DescribeBridgeResponseFormProperties {
	}
	export function CreateDescribeBridgeResponseFormGroup() {
		return new FormGroup<DescribeBridgeResponseFormProperties>({
		});

	}

	export interface DescribeFlowResponse {
		Flow?: Flow;
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

	export interface DescribeGatewayResponse {
		Gateway?: Gateway;
	}
	export interface DescribeGatewayResponseFormProperties {
	}
	export function CreateDescribeGatewayResponseFormGroup() {
		return new FormGroup<DescribeGatewayResponseFormProperties>({
		});

	}

	export interface DescribeGatewayInstanceResponse {
		GatewayInstance?: GatewayInstance;
	}
	export interface DescribeGatewayInstanceResponseFormProperties {
	}
	export function CreateDescribeGatewayInstanceResponseFormGroup() {
		return new FormGroup<DescribeGatewayInstanceResponseFormProperties>({
		});

	}


	/** The settings for an instance in a gateway. */
	export interface GatewayInstance {

		/** Required */
		BridgePlacement: BridgePlacement;

		/** Required */
		ConnectionStatus: ConnectionStatus;

		/** Required */
		GatewayArn: string;

		/** Required */
		GatewayInstanceArn: string;

		/** Required */
		InstanceId: string;
		InstanceMessages?: Array<MessageDetail>;

		/** Required */
		InstanceState: InstanceState;

		/** Required */
		RunningBridgeCount: number;
	}

	/** The settings for an instance in a gateway. */
	export interface GatewayInstanceFormProperties {

		/** Required */
		BridgePlacement: FormControl<BridgePlacement | null | undefined>,

		/** Required */
		ConnectionStatus: FormControl<ConnectionStatus | null | undefined>,

		/** Required */
		GatewayArn: FormControl<string | null | undefined>,

		/** Required */
		GatewayInstanceArn: FormControl<string | null | undefined>,

		/** Required */
		InstanceId: FormControl<string | null | undefined>,

		/** Required */
		InstanceState: FormControl<InstanceState | null | undefined>,

		/** Required */
		RunningBridgeCount: FormControl<number | null | undefined>,
	}
	export function CreateGatewayInstanceFormGroup() {
		return new FormGroup<GatewayInstanceFormProperties>({
			BridgePlacement: new FormControl<BridgePlacement | null | undefined>(undefined, [Validators.required]),
			ConnectionStatus: new FormControl<ConnectionStatus | null | undefined>(undefined, [Validators.required]),
			GatewayArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			GatewayInstanceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			InstanceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			InstanceState: new FormControl<InstanceState | null | undefined>(undefined, [Validators.required]),
			RunningBridgeCount: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum BridgePlacement { AVAILABLE = 0, LOCKED = 1 }

	export enum ConnectionStatus { CONNECTED = 0, DISCONNECTED = 1 }

	export interface DescribeOfferingResponse {
		Offering?: Offering;
	}
	export interface DescribeOfferingResponseFormProperties {
	}
	export function CreateDescribeOfferingResponseFormGroup() {
		return new FormGroup<DescribeOfferingResponseFormProperties>({
		});

	}


	/** A savings plan that reserves a certain amount of outbound bandwidth usage at a discounted rate each month over a period of time. */
	export interface Offering {

		/** Required */
		CurrencyCode: string;

		/** Required */
		Duration: number;

		/** Required */
		DurationUnits: DurationUnits;

		/** Required */
		OfferingArn: string;

		/** Required */
		OfferingDescription: string;

		/** Required */
		PricePerUnit: string;

		/** Required */
		PriceUnits: PriceUnits;

		/** Required */
		ResourceSpecification: ResourceSpecification;
	}

	/** A savings plan that reserves a certain amount of outbound bandwidth usage at a discounted rate each month over a period of time. */
	export interface OfferingFormProperties {

		/** Required */
		CurrencyCode: FormControl<string | null | undefined>,

		/** Required */
		Duration: FormControl<number | null | undefined>,

		/** Required */
		DurationUnits: FormControl<DurationUnits | null | undefined>,

		/** Required */
		OfferingArn: FormControl<string | null | undefined>,

		/** Required */
		OfferingDescription: FormControl<string | null | undefined>,

		/** Required */
		PricePerUnit: FormControl<string | null | undefined>,

		/** Required */
		PriceUnits: FormControl<PriceUnits | null | undefined>,
	}
	export function CreateOfferingFormGroup() {
		return new FormGroup<OfferingFormProperties>({
			CurrencyCode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Duration: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			DurationUnits: new FormControl<DurationUnits | null | undefined>(undefined, [Validators.required]),
			OfferingArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			OfferingDescription: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PricePerUnit: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PriceUnits: new FormControl<PriceUnits | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum DurationUnits { MONTHS = 0 }

	export enum PriceUnits { HOURLY = 0 }


	/** A definition of what is being billed for, including the type and amount. */
	export interface ResourceSpecification {
		ReservedBitrate?: number | null;

		/** Required */
		ResourceType: ResourceType;
	}

	/** A definition of what is being billed for, including the type and amount. */
	export interface ResourceSpecificationFormProperties {
		ReservedBitrate: FormControl<number | null | undefined>,

		/** Required */
		ResourceType: FormControl<ResourceType | null | undefined>,
	}
	export function CreateResourceSpecificationFormGroup() {
		return new FormGroup<ResourceSpecificationFormProperties>({
			ReservedBitrate: new FormControl<number | null | undefined>(undefined),
			ResourceType: new FormControl<ResourceType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ResourceType { Mbps_Outbound_Bandwidth = 0 }

	export interface DescribeReservationResponse {
		Reservation?: Reservation;
	}
	export interface DescribeReservationResponseFormProperties {
	}
	export function CreateDescribeReservationResponseFormGroup() {
		return new FormGroup<DescribeReservationResponseFormProperties>({
		});

	}


	/** A pricing agreement for a discounted rate for a specific outbound bandwidth that your MediaConnect account will use each month over a specific time period. The discounted rate in the reservation applies to outbound bandwidth for all flows from your account until your account reaches the amount of bandwidth in your reservation. If you use more outbound bandwidth than the agreed upon amount in a single month, the overage is charged at the on-demand rate. */
	export interface Reservation {

		/** Required */
		CurrencyCode: string;

		/** Required */
		Duration: number;

		/** Required */
		DurationUnits: DurationUnits;

		/** Required */
		End: string;

		/** Required */
		OfferingArn: string;

		/** Required */
		OfferingDescription: string;

		/** Required */
		PricePerUnit: string;

		/** Required */
		PriceUnits: PriceUnits;

		/** Required */
		ReservationArn: string;

		/** Required */
		ReservationName: string;

		/** Required */
		ReservationState: ReservationState;

		/** Required */
		ResourceSpecification: ResourceSpecification;

		/** Required */
		Start: string;
	}

	/** A pricing agreement for a discounted rate for a specific outbound bandwidth that your MediaConnect account will use each month over a specific time period. The discounted rate in the reservation applies to outbound bandwidth for all flows from your account until your account reaches the amount of bandwidth in your reservation. If you use more outbound bandwidth than the agreed upon amount in a single month, the overage is charged at the on-demand rate. */
	export interface ReservationFormProperties {

		/** Required */
		CurrencyCode: FormControl<string | null | undefined>,

		/** Required */
		Duration: FormControl<number | null | undefined>,

		/** Required */
		DurationUnits: FormControl<DurationUnits | null | undefined>,

		/** Required */
		End: FormControl<string | null | undefined>,

		/** Required */
		OfferingArn: FormControl<string | null | undefined>,

		/** Required */
		OfferingDescription: FormControl<string | null | undefined>,

		/** Required */
		PricePerUnit: FormControl<string | null | undefined>,

		/** Required */
		PriceUnits: FormControl<PriceUnits | null | undefined>,

		/** Required */
		ReservationArn: FormControl<string | null | undefined>,

		/** Required */
		ReservationName: FormControl<string | null | undefined>,

		/** Required */
		ReservationState: FormControl<ReservationState | null | undefined>,

		/** Required */
		Start: FormControl<string | null | undefined>,
	}
	export function CreateReservationFormGroup() {
		return new FormGroup<ReservationFormProperties>({
			CurrencyCode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Duration: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			DurationUnits: new FormControl<DurationUnits | null | undefined>(undefined, [Validators.required]),
			End: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			OfferingArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			OfferingDescription: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PricePerUnit: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PriceUnits: new FormControl<PriceUnits | null | undefined>(undefined, [Validators.required]),
			ReservationArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ReservationName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ReservationState: new FormControl<ReservationState | null | undefined>(undefined, [Validators.required]),
			Start: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ReservationState { ACTIVE = 0, EXPIRED = 1, PROCESSING = 2, CANCELED = 3 }

	export interface GrantFlowEntitlementsResponse {
		Entitlements?: Array<Entitlement>;
		FlowArn?: string;
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

	export interface ListBridgesResponse {
		Bridges?: Array<ListedBridge>;
		NextToken?: string;
	}
	export interface ListBridgesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListBridgesResponseFormGroup() {
		return new FormGroup<ListBridgesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Displays details of the selected bridge. */
	export interface ListedBridge {

		/** Required */
		BridgeArn: string;

		/** Required */
		BridgeState: BridgeState;

		/** Required */
		BridgeType: string;

		/** Required */
		Name: string;

		/** Required */
		PlacementArn: string;
	}

	/** Displays details of the selected bridge. */
	export interface ListedBridgeFormProperties {

		/** Required */
		BridgeArn: FormControl<string | null | undefined>,

		/** Required */
		BridgeState: FormControl<BridgeState | null | undefined>,

		/** Required */
		BridgeType: FormControl<string | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		PlacementArn: FormControl<string | null | undefined>,
	}
	export function CreateListedBridgeFormGroup() {
		return new FormGroup<ListedBridgeFormProperties>({
			BridgeArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			BridgeState: new FormControl<BridgeState | null | undefined>(undefined, [Validators.required]),
			BridgeType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PlacementArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListEntitlementsResponse {
		Entitlements?: Array<ListedEntitlement>;
		NextToken?: string;
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
		NextToken?: string;
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
		SourceType: SourceType;

		/** Required */
		Status: Status;
		Maintenance?: Maintenance;
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
		SourceType: FormControl<SourceType | null | undefined>,

		/** Required */
		Status: FormControl<Status | null | undefined>,
	}
	export function CreateListedFlowFormGroup() {
		return new FormGroup<ListedFlowFormProperties>({
			AvailabilityZone: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			FlowArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SourceType: new FormControl<SourceType | null | undefined>(undefined, [Validators.required]),
			Status: new FormControl<Status | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum SourceType { OWNED = 0, ENTITLED = 1 }

	export interface ListGatewayInstancesResponse {
		Instances?: Array<ListedGatewayInstance>;
		NextToken?: string;
	}
	export interface ListGatewayInstancesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListGatewayInstancesResponseFormGroup() {
		return new FormGroup<ListGatewayInstancesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides a summary of an instance. */
	export interface ListedGatewayInstance {

		/** Required */
		GatewayArn: string;

		/** Required */
		GatewayInstanceArn: string;

		/** Required */
		InstanceId: string;
		InstanceState?: InstanceState;
	}

	/** Provides a summary of an instance. */
	export interface ListedGatewayInstanceFormProperties {

		/** Required */
		GatewayArn: FormControl<string | null | undefined>,

		/** Required */
		GatewayInstanceArn: FormControl<string | null | undefined>,

		/** Required */
		InstanceId: FormControl<string | null | undefined>,
		InstanceState: FormControl<InstanceState | null | undefined>,
	}
	export function CreateListedGatewayInstanceFormGroup() {
		return new FormGroup<ListedGatewayInstanceFormProperties>({
			GatewayArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			GatewayInstanceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			InstanceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			InstanceState: new FormControl<InstanceState | null | undefined>(undefined),
		});

	}

	export interface ListGatewaysResponse {
		Gateways?: Array<ListedGateway>;
		NextToken?: string;
	}
	export interface ListGatewaysResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListGatewaysResponseFormGroup() {
		return new FormGroup<ListGatewaysResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides a summary of a gateway, including its name, ARN, and status. */
	export interface ListedGateway {

		/** Required */
		GatewayArn: string;

		/** Required */
		GatewayState: GatewayState;

		/** Required */
		Name: string;
	}

	/** Provides a summary of a gateway, including its name, ARN, and status. */
	export interface ListedGatewayFormProperties {

		/** Required */
		GatewayArn: FormControl<string | null | undefined>,

		/** Required */
		GatewayState: FormControl<GatewayState | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateListedGatewayFormGroup() {
		return new FormGroup<ListedGatewayFormProperties>({
			GatewayArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			GatewayState: new FormControl<GatewayState | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListOfferingsResponse {
		NextToken?: string;
		Offerings?: Array<Offering>;
	}
	export interface ListOfferingsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListOfferingsResponseFormGroup() {
		return new FormGroup<ListOfferingsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListReservationsResponse {
		NextToken?: string;
		Reservations?: Array<Reservation>;
	}
	export interface ListReservationsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListReservationsResponseFormGroup() {
		return new FormGroup<ListReservationsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

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

	export interface PurchaseOfferingResponse {
		Reservation?: Reservation;
	}
	export interface PurchaseOfferingResponseFormProperties {
	}
	export function CreatePurchaseOfferingResponseFormGroup() {
		return new FormGroup<PurchaseOfferingResponseFormProperties>({
		});

	}

	export interface RemoveBridgeOutputResponse {
		BridgeArn?: string;
		OutputName?: string;
	}
	export interface RemoveBridgeOutputResponseFormProperties {
		BridgeArn: FormControl<string | null | undefined>,
		OutputName: FormControl<string | null | undefined>,
	}
	export function CreateRemoveBridgeOutputResponseFormGroup() {
		return new FormGroup<RemoveBridgeOutputResponseFormProperties>({
			BridgeArn: new FormControl<string | null | undefined>(undefined),
			OutputName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RemoveBridgeSourceResponse {
		BridgeArn?: string;
		SourceName?: string;
	}
	export interface RemoveBridgeSourceResponseFormProperties {
		BridgeArn: FormControl<string | null | undefined>,
		SourceName: FormControl<string | null | undefined>,
	}
	export function CreateRemoveBridgeSourceResponseFormGroup() {
		return new FormGroup<RemoveBridgeSourceResponseFormProperties>({
			BridgeArn: new FormControl<string | null | undefined>(undefined),
			SourceName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RemoveFlowMediaStreamResponse {
		FlowArn?: string;
		MediaStreamName?: string;
	}
	export interface RemoveFlowMediaStreamResponseFormProperties {
		FlowArn: FormControl<string | null | undefined>,
		MediaStreamName: FormControl<string | null | undefined>,
	}
	export function CreateRemoveFlowMediaStreamResponseFormGroup() {
		return new FormGroup<RemoveFlowMediaStreamResponseFormProperties>({
			FlowArn: new FormControl<string | null | undefined>(undefined),
			MediaStreamName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RemoveFlowOutputResponse {
		FlowArn?: string;
		OutputArn?: string;
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
		FlowArn?: string;
		SourceArn?: string;
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
		FlowArn?: string;
		NonDeletedNetworkInterfaceIds?: Array<string>;
		VpcInterfaceName?: string;
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
		EntitlementArn?: string;
		FlowArn?: string;
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
		FlowArn?: string;
		Status?: Status;
	}
	export interface StartFlowResponseFormProperties {
		FlowArn: FormControl<string | null | undefined>,
		Status: FormControl<Status | null | undefined>,
	}
	export function CreateStartFlowResponseFormGroup() {
		return new FormGroup<StartFlowResponseFormProperties>({
			FlowArn: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<Status | null | undefined>(undefined),
		});

	}

	export interface StopFlowResponse {
		FlowArn?: string;
		Status?: Status;
	}
	export interface StopFlowResponseFormProperties {
		FlowArn: FormControl<string | null | undefined>,
		Status: FormControl<Status | null | undefined>,
	}
	export function CreateStopFlowResponseFormGroup() {
		return new FormGroup<StopFlowResponseFormProperties>({
			FlowArn: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<Status | null | undefined>(undefined),
		});

	}

	export interface UpdateBridgeResponse {
		Bridge?: Bridge;
	}
	export interface UpdateBridgeResponseFormProperties {
	}
	export function CreateUpdateBridgeResponseFormGroup() {
		return new FormGroup<UpdateBridgeResponseFormProperties>({
		});

	}

	export interface UpdateBridgeOutputResponse {
		BridgeArn?: string;
		Output?: BridgeOutput;
	}
	export interface UpdateBridgeOutputResponseFormProperties {
		BridgeArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateBridgeOutputResponseFormGroup() {
		return new FormGroup<UpdateBridgeOutputResponseFormProperties>({
			BridgeArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateBridgeSourceResponse {
		BridgeArn?: string;
		Source?: BridgeSource;
	}
	export interface UpdateBridgeSourceResponseFormProperties {
		BridgeArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateBridgeSourceResponseFormGroup() {
		return new FormGroup<UpdateBridgeSourceResponseFormProperties>({
			BridgeArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateBridgeStateResponse {
		BridgeArn?: string;
		DesiredState?: DesiredState;
	}
	export interface UpdateBridgeStateResponseFormProperties {
		BridgeArn: FormControl<string | null | undefined>,
		DesiredState: FormControl<DesiredState | null | undefined>,
	}
	export function CreateUpdateBridgeStateResponseFormGroup() {
		return new FormGroup<UpdateBridgeStateResponseFormProperties>({
			BridgeArn: new FormControl<string | null | undefined>(undefined),
			DesiredState: new FormControl<DesiredState | null | undefined>(undefined),
		});

	}

	export enum DesiredState { ACTIVE = 0, STANDBY = 1, DELETED = 2 }

	export interface UpdateFlowResponse {
		Flow?: Flow;
	}
	export interface UpdateFlowResponseFormProperties {
	}
	export function CreateUpdateFlowResponseFormGroup() {
		return new FormGroup<UpdateFlowResponseFormProperties>({
		});

	}

	export interface UpdateFlowEntitlementResponse {
		Entitlement?: Entitlement;
		FlowArn?: string;
	}
	export interface UpdateFlowEntitlementResponseFormProperties {
		FlowArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateFlowEntitlementResponseFormGroup() {
		return new FormGroup<UpdateFlowEntitlementResponseFormProperties>({
			FlowArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateFlowMediaStreamResponse {
		FlowArn?: string;
		MediaStream?: MediaStream;
	}
	export interface UpdateFlowMediaStreamResponseFormProperties {
		FlowArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateFlowMediaStreamResponseFormGroup() {
		return new FormGroup<UpdateFlowMediaStreamResponseFormProperties>({
			FlowArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateFlowOutputResponse {
		FlowArn?: string;
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
		FlowArn?: string;
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

	export interface UpdateGatewayInstanceResponse {
		BridgePlacement?: BridgePlacement;
		GatewayInstanceArn?: string;
	}
	export interface UpdateGatewayInstanceResponseFormProperties {
		BridgePlacement: FormControl<BridgePlacement | null | undefined>,
		GatewayInstanceArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateGatewayInstanceResponseFormGroup() {
		return new FormGroup<UpdateGatewayInstanceResponseFormProperties>({
			BridgePlacement: new FormControl<BridgePlacement | null | undefined>(undefined),
			GatewayInstanceArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A request to add outputs to the specified bridge. */
	export interface AddBridgeOutputsRequest {

		/** Required */
		Outputs: Array<AddBridgeOutputRequest>;
	}

	/** A request to add outputs to the specified bridge. */
	export interface AddBridgeOutputsRequestFormProperties {
	}
	export function CreateAddBridgeOutputsRequestFormGroup() {
		return new FormGroup<AddBridgeOutputsRequestFormProperties>({
		});

	}


	/** A request to add sources to the specified bridge. */
	export interface AddBridgeSourcesRequest {

		/** Required */
		Sources: Array<AddBridgeSourceRequest>;
	}

	/** A request to add sources to the specified bridge. */
	export interface AddBridgeSourcesRequestFormProperties {
	}
	export function CreateAddBridgeSourcesRequestFormGroup() {
		return new FormGroup<AddBridgeSourcesRequestFormProperties>({
		});

	}

	export interface AddEgressGatewayBridgeRequest {

		/** Required */
		MaxBitrate: number;
	}
	export interface AddEgressGatewayBridgeRequestFormProperties {

		/** Required */
		MaxBitrate: FormControl<number | null | undefined>,
	}
	export function CreateAddEgressGatewayBridgeRequestFormGroup() {
		return new FormGroup<AddEgressGatewayBridgeRequestFormProperties>({
			MaxBitrate: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A request to add media streams to the flow. */
	export interface AddFlowMediaStreamsRequest {

		/** Required */
		MediaStreams: Array<AddMediaStreamRequest>;
	}

	/** A request to add media streams to the flow. */
	export interface AddFlowMediaStreamsRequestFormProperties {
	}
	export function CreateAddFlowMediaStreamsRequestFormGroup() {
		return new FormGroup<AddFlowMediaStreamsRequestFormProperties>({
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

	export interface AddIngressGatewayBridgeRequest {

		/** Required */
		MaxBitrate: number;

		/** Required */
		MaxOutputs: number;
	}
	export interface AddIngressGatewayBridgeRequestFormProperties {

		/** Required */
		MaxBitrate: FormControl<number | null | undefined>,

		/** Required */
		MaxOutputs: FormControl<number | null | undefined>,
	}
	export function CreateAddIngressGatewayBridgeRequestFormGroup() {
		return new FormGroup<AddIngressGatewayBridgeRequestFormProperties>({
			MaxBitrate: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			MaxOutputs: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Create maintenance setting for a flow */
	export interface AddMaintenance {

		/** Required */
		MaintenanceDay: MaintenanceDay;

		/** Required */
		MaintenanceStartHour: string;
	}

	/** Create maintenance setting for a flow */
	export interface AddMaintenanceFormProperties {

		/** Required */
		MaintenanceDay: FormControl<MaintenanceDay | null | undefined>,

		/** Required */
		MaintenanceStartHour: FormControl<string | null | undefined>,
	}
	export function CreateAddMaintenanceFormGroup() {
		return new FormGroup<AddMaintenanceFormProperties>({
			MaintenanceDay: new FormControl<MaintenanceDay | null | undefined>(undefined, [Validators.required]),
			MaintenanceStartHour: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Creates a new bridge. The request must include one source. */
	export interface CreateBridgeRequest {
		EgressGatewayBridge?: AddEgressGatewayBridgeRequest;
		IngressGatewayBridge?: AddIngressGatewayBridgeRequest;

		/** Required */
		Name: string;
		Outputs?: Array<AddBridgeOutputRequest>;

		/** Required */
		PlacementArn: string;
		SourceFailoverConfig?: FailoverConfig;

		/** Required */
		Sources: Array<AddBridgeSourceRequest>;
	}

	/** Creates a new bridge. The request must include one source. */
	export interface CreateBridgeRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		PlacementArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateBridgeRequestFormGroup() {
		return new FormGroup<CreateBridgeRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PlacementArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Creates a new flow. The request must include one source. The request optionally can include outputs (up to 50) and entitlements (up to 50). */
	export interface CreateFlowRequest {
		AvailabilityZone?: string;
		Entitlements?: Array<GrantEntitlementRequest>;
		MediaStreams?: Array<AddMediaStreamRequest>;

		/** Required */
		Name: string;
		Outputs?: Array<AddOutputRequest>;
		Source?: SetSourceRequest;
		SourceFailoverConfig?: FailoverConfig;
		Sources?: Array<SetSourceRequest>;
		VpcInterfaces?: Array<VpcInterfaceRequest>;
		Maintenance?: AddMaintenance;
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


	/** Creates a new gateway. The request must include at least one network (up to 4). */
	export interface CreateGatewayRequest {

		/** Required */
		EgressCidrBlocks: Array<string>;

		/** Required */
		Name: string;

		/** Required */
		Networks: Array<GatewayNetwork>;
	}

	/** Creates a new gateway. The request must include at least one network (up to 4). */
	export interface CreateGatewayRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateCreateGatewayRequestFormGroup() {
		return new FormGroup<CreateGatewayRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteBridgeRequest {
	}
	export interface DeleteBridgeRequestFormProperties {
	}
	export function CreateDeleteBridgeRequestFormGroup() {
		return new FormGroup<DeleteBridgeRequestFormProperties>({
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

	export interface DeleteGatewayRequest {
	}
	export interface DeleteGatewayRequestFormProperties {
	}
	export function CreateDeleteGatewayRequestFormGroup() {
		return new FormGroup<DeleteGatewayRequestFormProperties>({
		});

	}

	export interface DeregisterGatewayInstanceRequest {
	}
	export interface DeregisterGatewayInstanceRequestFormProperties {
	}
	export function CreateDeregisterGatewayInstanceRequestFormGroup() {
		return new FormGroup<DeregisterGatewayInstanceRequestFormProperties>({
		});

	}

	export interface DescribeBridgeRequest {
	}
	export interface DescribeBridgeRequestFormProperties {
	}
	export function CreateDescribeBridgeRequestFormGroup() {
		return new FormGroup<DescribeBridgeRequestFormProperties>({
		});

	}

	export interface DescribeFlowRequest {
	}
	export interface DescribeFlowRequestFormProperties {
	}
	export function CreateDescribeFlowRequestFormGroup() {
		return new FormGroup<DescribeFlowRequestFormProperties>({
		});

	}

	export interface DescribeGatewayInstanceRequest {
	}
	export interface DescribeGatewayInstanceRequestFormProperties {
	}
	export function CreateDescribeGatewayInstanceRequestFormGroup() {
		return new FormGroup<DescribeGatewayInstanceRequestFormProperties>({
		});

	}

	export interface DescribeGatewayRequest {
	}
	export interface DescribeGatewayRequestFormProperties {
	}
	export function CreateDescribeGatewayRequestFormGroup() {
		return new FormGroup<DescribeGatewayRequestFormProperties>({
		});

	}

	export interface DescribeOfferingRequest {
	}
	export interface DescribeOfferingRequestFormProperties {
	}
	export function CreateDescribeOfferingRequestFormGroup() {
		return new FormGroup<DescribeOfferingRequestFormProperties>({
		});

	}

	export interface DescribeReservationRequest {
	}
	export interface DescribeReservationRequestFormProperties {
	}
	export function CreateDescribeReservationRequestFormGroup() {
		return new FormGroup<DescribeReservationRequestFormProperties>({
		});

	}

	export enum EntitlementStatus { ENABLED = 0, DISABLED = 1 }


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

	export interface ListBridgesRequest {
	}
	export interface ListBridgesRequestFormProperties {
	}
	export function CreateListBridgesRequestFormGroup() {
		return new FormGroup<ListBridgesRequestFormProperties>({
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

	export interface ListGatewayInstancesRequest {
	}
	export interface ListGatewayInstancesRequestFormProperties {
	}
	export function CreateListGatewayInstancesRequestFormGroup() {
		return new FormGroup<ListGatewayInstancesRequestFormProperties>({
		});

	}

	export interface ListGatewaysRequest {
	}
	export interface ListGatewaysRequestFormProperties {
	}
	export function CreateListGatewaysRequestFormGroup() {
		return new FormGroup<ListGatewaysRequestFormProperties>({
		});

	}

	export interface ListOfferingsRequest {
	}
	export interface ListOfferingsRequestFormProperties {
	}
	export function CreateListOfferingsRequestFormGroup() {
		return new FormGroup<ListOfferingsRequestFormProperties>({
		});

	}

	export interface ListReservationsRequest {
	}
	export interface ListReservationsRequestFormProperties {
	}
	export function CreateListReservationsRequestFormGroup() {
		return new FormGroup<ListReservationsRequestFormProperties>({
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


	/** A request to purchase a offering. */
	export interface PurchaseOfferingRequest {

		/** Required */
		ReservationName: string;

		/** Required */
		Start: string;
	}

	/** A request to purchase a offering. */
	export interface PurchaseOfferingRequestFormProperties {

		/** Required */
		ReservationName: FormControl<string | null | undefined>,

		/** Required */
		Start: FormControl<string | null | undefined>,
	}
	export function CreatePurchaseOfferingRequestFormGroup() {
		return new FormGroup<PurchaseOfferingRequestFormProperties>({
			ReservationName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Start: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface RemoveBridgeOutputRequest {
	}
	export interface RemoveBridgeOutputRequestFormProperties {
	}
	export function CreateRemoveBridgeOutputRequestFormGroup() {
		return new FormGroup<RemoveBridgeOutputRequestFormProperties>({
		});

	}

	export interface RemoveBridgeSourceRequest {
	}
	export interface RemoveBridgeSourceRequestFormProperties {
	}
	export function CreateRemoveBridgeSourceRequestFormGroup() {
		return new FormGroup<RemoveBridgeSourceRequestFormProperties>({
		});

	}

	export interface RemoveFlowMediaStreamRequest {
	}
	export interface RemoveFlowMediaStreamRequestFormProperties {
	}
	export function CreateRemoveFlowMediaStreamRequestFormGroup() {
		return new FormGroup<RemoveFlowMediaStreamRequestFormProperties>({
		});

	}

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


	/** Update the flow source of the bridge. */
	export interface UpdateBridgeFlowSourceRequest {
		FlowArn?: string;
		FlowVpcInterfaceAttachment?: VpcInterfaceAttachment;
	}

	/** Update the flow source of the bridge. */
	export interface UpdateBridgeFlowSourceRequestFormProperties {
		FlowArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateBridgeFlowSourceRequestFormGroup() {
		return new FormGroup<UpdateBridgeFlowSourceRequestFormProperties>({
			FlowArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Update an existing network output. */
	export interface UpdateBridgeNetworkOutputRequest {
		IpAddress?: string;
		NetworkName?: string;
		Port?: number | null;
		Protocol?: Protocol;
		Ttl?: number | null;
	}

	/** Update an existing network output. */
	export interface UpdateBridgeNetworkOutputRequestFormProperties {
		IpAddress: FormControl<string | null | undefined>,
		NetworkName: FormControl<string | null | undefined>,
		Port: FormControl<number | null | undefined>,
		Protocol: FormControl<Protocol | null | undefined>,
		Ttl: FormControl<number | null | undefined>,
	}
	export function CreateUpdateBridgeNetworkOutputRequestFormGroup() {
		return new FormGroup<UpdateBridgeNetworkOutputRequestFormProperties>({
			IpAddress: new FormControl<string | null | undefined>(undefined),
			NetworkName: new FormControl<string | null | undefined>(undefined),
			Port: new FormControl<number | null | undefined>(undefined),
			Protocol: new FormControl<Protocol | null | undefined>(undefined),
			Ttl: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Update the network source of the bridge. */
	export interface UpdateBridgeNetworkSourceRequest {
		MulticastIp?: string;
		NetworkName?: string;
		Port?: number | null;
		Protocol?: Protocol;
	}

	/** Update the network source of the bridge. */
	export interface UpdateBridgeNetworkSourceRequestFormProperties {
		MulticastIp: FormControl<string | null | undefined>,
		NetworkName: FormControl<string | null | undefined>,
		Port: FormControl<number | null | undefined>,
		Protocol: FormControl<Protocol | null | undefined>,
	}
	export function CreateUpdateBridgeNetworkSourceRequestFormGroup() {
		return new FormGroup<UpdateBridgeNetworkSourceRequestFormProperties>({
			MulticastIp: new FormControl<string | null | undefined>(undefined),
			NetworkName: new FormControl<string | null | undefined>(undefined),
			Port: new FormControl<number | null | undefined>(undefined),
			Protocol: new FormControl<Protocol | null | undefined>(undefined),
		});

	}


	/** The fields that you want to update in the bridge output. */
	export interface UpdateBridgeOutputRequest {
		NetworkOutput?: UpdateBridgeNetworkOutputRequest;
	}

	/** The fields that you want to update in the bridge output. */
	export interface UpdateBridgeOutputRequestFormProperties {
	}
	export function CreateUpdateBridgeOutputRequestFormGroup() {
		return new FormGroup<UpdateBridgeOutputRequestFormProperties>({
		});

	}

	export interface UpdateEgressGatewayBridgeRequest {
		MaxBitrate?: number | null;
	}
	export interface UpdateEgressGatewayBridgeRequestFormProperties {
		MaxBitrate: FormControl<number | null | undefined>,
	}
	export function CreateUpdateEgressGatewayBridgeRequestFormGroup() {
		return new FormGroup<UpdateEgressGatewayBridgeRequestFormProperties>({
			MaxBitrate: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface UpdateIngressGatewayBridgeRequest {
		MaxBitrate?: number | null;
		MaxOutputs?: number | null;
	}
	export interface UpdateIngressGatewayBridgeRequestFormProperties {
		MaxBitrate: FormControl<number | null | undefined>,
		MaxOutputs: FormControl<number | null | undefined>,
	}
	export function CreateUpdateIngressGatewayBridgeRequestFormGroup() {
		return new FormGroup<UpdateIngressGatewayBridgeRequestFormProperties>({
			MaxBitrate: new FormControl<number | null | undefined>(undefined),
			MaxOutputs: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The settings for source failover. */
	export interface UpdateFailoverConfig {
		FailoverMode?: FailoverMode;
		RecoveryWindow?: number | null;
		SourcePriority?: SourcePriority;
		State?: State;
	}

	/** The settings for source failover. */
	export interface UpdateFailoverConfigFormProperties {
		FailoverMode: FormControl<FailoverMode | null | undefined>,
		RecoveryWindow: FormControl<number | null | undefined>,
		State: FormControl<State | null | undefined>,
	}
	export function CreateUpdateFailoverConfigFormGroup() {
		return new FormGroup<UpdateFailoverConfigFormProperties>({
			FailoverMode: new FormControl<FailoverMode | null | undefined>(undefined),
			RecoveryWindow: new FormControl<number | null | undefined>(undefined),
			State: new FormControl<State | null | undefined>(undefined),
		});

	}


	/** A request to update the bridge. */
	export interface UpdateBridgeRequest {
		EgressGatewayBridge?: UpdateEgressGatewayBridgeRequest;
		IngressGatewayBridge?: UpdateIngressGatewayBridgeRequest;
		SourceFailoverConfig?: UpdateFailoverConfig;
	}

	/** A request to update the bridge. */
	export interface UpdateBridgeRequestFormProperties {
	}
	export function CreateUpdateBridgeRequestFormGroup() {
		return new FormGroup<UpdateBridgeRequestFormProperties>({
		});

	}


	/** The fields that you want to update in the bridge source. */
	export interface UpdateBridgeSourceRequest {
		FlowSource?: UpdateBridgeFlowSourceRequest;
		NetworkSource?: UpdateBridgeNetworkSourceRequest;
	}

	/** The fields that you want to update in the bridge source. */
	export interface UpdateBridgeSourceRequestFormProperties {
	}
	export function CreateUpdateBridgeSourceRequestFormGroup() {
		return new FormGroup<UpdateBridgeSourceRequestFormProperties>({
		});

	}


	/** A request to update the bridge state. */
	export interface UpdateBridgeStateRequest {

		/** Required */
		DesiredState: DesiredState;
	}

	/** A request to update the bridge state. */
	export interface UpdateBridgeStateRequestFormProperties {

		/** Required */
		DesiredState: FormControl<DesiredState | null | undefined>,
	}
	export function CreateUpdateBridgeStateRequestFormGroup() {
		return new FormGroup<UpdateBridgeStateRequestFormProperties>({
			DesiredState: new FormControl<DesiredState | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Information about the encryption of the flow. */
	export interface UpdateEncryption {
		Algorithm?: Algorithm;
		ConstantInitializationVector?: string;
		DeviceId?: string;
		KeyType?: KeyType;
		Region?: string;
		ResourceId?: string;
		RoleArn?: string;
		SecretArn?: string;
		Url?: string;
	}

	/** Information about the encryption of the flow. */
	export interface UpdateEncryptionFormProperties {
		Algorithm: FormControl<Algorithm | null | undefined>,
		ConstantInitializationVector: FormControl<string | null | undefined>,
		DeviceId: FormControl<string | null | undefined>,
		KeyType: FormControl<KeyType | null | undefined>,
		Region: FormControl<string | null | undefined>,
		ResourceId: FormControl<string | null | undefined>,
		RoleArn: FormControl<string | null | undefined>,
		SecretArn: FormControl<string | null | undefined>,
		Url: FormControl<string | null | undefined>,
	}
	export function CreateUpdateEncryptionFormGroup() {
		return new FormGroup<UpdateEncryptionFormProperties>({
			Algorithm: new FormControl<Algorithm | null | undefined>(undefined),
			ConstantInitializationVector: new FormControl<string | null | undefined>(undefined),
			DeviceId: new FormControl<string | null | undefined>(undefined),
			KeyType: new FormControl<KeyType | null | undefined>(undefined),
			Region: new FormControl<string | null | undefined>(undefined),
			ResourceId: new FormControl<string | null | undefined>(undefined),
			RoleArn: new FormControl<string | null | undefined>(undefined),
			SecretArn: new FormControl<string | null | undefined>(undefined),
			Url: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The entitlement fields that you want to update. */
	export interface UpdateFlowEntitlementRequest {
		Description?: string;
		Encryption?: UpdateEncryption;
		EntitlementStatus?: State;
		Subscribers?: Array<string>;
	}

	/** The entitlement fields that you want to update. */
	export interface UpdateFlowEntitlementRequestFormProperties {
		Description: FormControl<string | null | undefined>,
		EntitlementStatus: FormControl<State | null | undefined>,
	}
	export function CreateUpdateFlowEntitlementRequestFormGroup() {
		return new FormGroup<UpdateFlowEntitlementRequestFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined),
			EntitlementStatus: new FormControl<State | null | undefined>(undefined),
		});

	}


	/** The fields that you want to update in the media stream. */
	export interface UpdateFlowMediaStreamRequest {
		Attributes?: MediaStreamAttributesRequest;
		ClockRate?: number | null;
		Description?: string;
		MediaStreamType?: MediaStreamType;
		VideoFormat?: string;
	}

	/** The fields that you want to update in the media stream. */
	export interface UpdateFlowMediaStreamRequestFormProperties {
		ClockRate: FormControl<number | null | undefined>,
		Description: FormControl<string | null | undefined>,
		MediaStreamType: FormControl<MediaStreamType | null | undefined>,
		VideoFormat: FormControl<string | null | undefined>,
	}
	export function CreateUpdateFlowMediaStreamRequestFormGroup() {
		return new FormGroup<UpdateFlowMediaStreamRequestFormProperties>({
			ClockRate: new FormControl<number | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			MediaStreamType: new FormControl<MediaStreamType | null | undefined>(undefined),
			VideoFormat: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The fields that you want to update in the output. */
	export interface UpdateFlowOutputRequest {
		CidrAllowList?: Array<string>;
		Description?: string;
		Destination?: string;
		Encryption?: UpdateEncryption;
		MaxLatency?: number | null;
		MediaStreamOutputConfigurations?: Array<MediaStreamOutputConfigurationRequest>;
		MinLatency?: number | null;
		Port?: number | null;
		Protocol?: Protocol;
		RemoteId?: string;
		SenderControlPort?: number | null;
		SenderIpAddress?: string;
		SmoothingLatency?: number | null;
		StreamId?: string;
		VpcInterfaceAttachment?: VpcInterfaceAttachment;
	}

	/** The fields that you want to update in the output. */
	export interface UpdateFlowOutputRequestFormProperties {
		Description: FormControl<string | null | undefined>,
		Destination: FormControl<string | null | undefined>,
		MaxLatency: FormControl<number | null | undefined>,
		MinLatency: FormControl<number | null | undefined>,
		Port: FormControl<number | null | undefined>,
		Protocol: FormControl<Protocol | null | undefined>,
		RemoteId: FormControl<string | null | undefined>,
		SenderControlPort: FormControl<number | null | undefined>,
		SenderIpAddress: FormControl<string | null | undefined>,
		SmoothingLatency: FormControl<number | null | undefined>,
		StreamId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateFlowOutputRequestFormGroup() {
		return new FormGroup<UpdateFlowOutputRequestFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined),
			Destination: new FormControl<string | null | undefined>(undefined),
			MaxLatency: new FormControl<number | null | undefined>(undefined),
			MinLatency: new FormControl<number | null | undefined>(undefined),
			Port: new FormControl<number | null | undefined>(undefined),
			Protocol: new FormControl<Protocol | null | undefined>(undefined),
			RemoteId: new FormControl<string | null | undefined>(undefined),
			SenderControlPort: new FormControl<number | null | undefined>(undefined),
			SenderIpAddress: new FormControl<string | null | undefined>(undefined),
			SmoothingLatency: new FormControl<number | null | undefined>(undefined),
			StreamId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Update maintenance setting for a flow */
	export interface UpdateMaintenance {
		MaintenanceDay?: MaintenanceDay;
		MaintenanceScheduledDate?: string;
		MaintenanceStartHour?: string;
	}

	/** Update maintenance setting for a flow */
	export interface UpdateMaintenanceFormProperties {
		MaintenanceDay: FormControl<MaintenanceDay | null | undefined>,
		MaintenanceScheduledDate: FormControl<string | null | undefined>,
		MaintenanceStartHour: FormControl<string | null | undefined>,
	}
	export function CreateUpdateMaintenanceFormGroup() {
		return new FormGroup<UpdateMaintenanceFormProperties>({
			MaintenanceDay: new FormControl<MaintenanceDay | null | undefined>(undefined),
			MaintenanceScheduledDate: new FormControl<string | null | undefined>(undefined),
			MaintenanceStartHour: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A request to update flow. */
	export interface UpdateFlowRequest {
		SourceFailoverConfig?: UpdateFailoverConfig;
		Maintenance?: UpdateMaintenance;
	}

	/** A request to update flow. */
	export interface UpdateFlowRequestFormProperties {
	}
	export function CreateUpdateFlowRequestFormGroup() {
		return new FormGroup<UpdateFlowRequestFormProperties>({
		});

	}


	/** The source configuration for cloud flows receiving a stream from a bridge. */
	export interface UpdateGatewayBridgeSourceRequest {
		BridgeArn?: string;
		VpcInterfaceAttachment?: VpcInterfaceAttachment;
	}

	/** The source configuration for cloud flows receiving a stream from a bridge. */
	export interface UpdateGatewayBridgeSourceRequestFormProperties {
		BridgeArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateGatewayBridgeSourceRequestFormGroup() {
		return new FormGroup<UpdateGatewayBridgeSourceRequestFormProperties>({
			BridgeArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A request to update the source of a flow. */
	export interface UpdateFlowSourceRequest {
		Decryption?: UpdateEncryption;
		Description?: string;
		EntitlementArn?: string;
		IngestPort?: number | null;
		MaxBitrate?: number | null;
		MaxLatency?: number | null;
		MaxSyncBuffer?: number | null;
		MediaStreamSourceConfigurations?: Array<MediaStreamSourceConfigurationRequest>;
		MinLatency?: number | null;
		Protocol?: Protocol;
		SenderControlPort?: number | null;
		SenderIpAddress?: string;
		SourceListenerAddress?: string;
		SourceListenerPort?: number | null;
		StreamId?: string;
		VpcInterfaceName?: string;
		WhitelistCidr?: string;
		GatewayBridgeSource?: UpdateGatewayBridgeSourceRequest;
	}

	/** A request to update the source of a flow. */
	export interface UpdateFlowSourceRequestFormProperties {
		Description: FormControl<string | null | undefined>,
		EntitlementArn: FormControl<string | null | undefined>,
		IngestPort: FormControl<number | null | undefined>,
		MaxBitrate: FormControl<number | null | undefined>,
		MaxLatency: FormControl<number | null | undefined>,
		MaxSyncBuffer: FormControl<number | null | undefined>,
		MinLatency: FormControl<number | null | undefined>,
		Protocol: FormControl<Protocol | null | undefined>,
		SenderControlPort: FormControl<number | null | undefined>,
		SenderIpAddress: FormControl<string | null | undefined>,
		SourceListenerAddress: FormControl<string | null | undefined>,
		SourceListenerPort: FormControl<number | null | undefined>,
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
			MaxSyncBuffer: new FormControl<number | null | undefined>(undefined),
			MinLatency: new FormControl<number | null | undefined>(undefined),
			Protocol: new FormControl<Protocol | null | undefined>(undefined),
			SenderControlPort: new FormControl<number | null | undefined>(undefined),
			SenderIpAddress: new FormControl<string | null | undefined>(undefined),
			SourceListenerAddress: new FormControl<string | null | undefined>(undefined),
			SourceListenerPort: new FormControl<number | null | undefined>(undefined),
			StreamId: new FormControl<string | null | undefined>(undefined),
			VpcInterfaceName: new FormControl<string | null | undefined>(undefined),
			WhitelistCidr: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A request to update gateway instance state. */
	export interface UpdateGatewayInstanceRequest {
		BridgePlacement?: BridgePlacement;
	}

	/** A request to update gateway instance state. */
	export interface UpdateGatewayInstanceRequestFormProperties {
		BridgePlacement: FormControl<BridgePlacement | null | undefined>,
	}
	export function CreateUpdateGatewayInstanceRequestFormGroup() {
		return new FormGroup<UpdateGatewayInstanceRequestFormProperties>({
			BridgePlacement: new FormControl<BridgePlacement | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Adds outputs to an existing bridge.
		 * Post v1/bridges/{bridgeArn}/outputs
		 * @param {string} bridgeArn The ARN of the bridge that you want to update.
		 * @return {void} 
		 */
		AddBridgeOutputs(bridgeArn: string, requestBody: AddBridgeOutputsPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/bridges/' + (bridgeArn == null ? '' : encodeURIComponent(bridgeArn)) + '/outputs', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Adds sources to an existing bridge.
		 * Post v1/bridges/{bridgeArn}/sources
		 * @param {string} bridgeArn The ARN of the bridge that you want to update.
		 * @return {void} 
		 */
		AddBridgeSources(bridgeArn: string, requestBody: AddBridgeSourcesPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/bridges/' + (bridgeArn == null ? '' : encodeURIComponent(bridgeArn)) + '/sources', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Adds media streams to an existing flow. After you add a media stream to a flow, you can associate it with a source and/or an output that uses the ST 2110 JPEG XS or CDI protocol.
		 * Post v1/flows/{flowArn}/mediaStreams
		 * @param {string} flowArn The Amazon Resource Name (ARN) of the flow.
		 * @return {void} 
		 */
		AddFlowMediaStreams(flowArn: string, requestBody: AddFlowMediaStreamsPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/flows/' + (flowArn == null ? '' : encodeURIComponent(flowArn)) + '/mediaStreams', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
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
		 * Creates a new bridge. The request must include one source.
		 * Post v1/bridges
		 * @return {void} 
		 */
		CreateBridge(requestBody: CreateBridgePostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/bridges', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Displays a list of bridges that are associated with this account and an optionally specified Arn. This request returns a paginated result.
		 * Get v1/bridges
		 * @param {string} filterArn Filter the list results to display only the bridges associated with the selected Amazon Resource Name (ARN).
		 * @param {number} maxResults The maximum number of results to return per API request. For example, you submit a ListBridges request with MaxResults set at 5. Although 20 items match your request, the service returns no more than the first 5 items. (The service also returns a NextToken value that you can use to fetch the next batch of results.) The service might return fewer results than the MaxResults value. If MaxResults is not included in the request, the service defaults to pagination with a maximum of 10 results per page.
		 * @param {string} nextToken The token that identifies which batch of results that you want to see. For example, you submit a ListBridges request with MaxResults set at 5. The service returns the first batch of results (up to 5) and a NextToken value. To see the next batch of results, you can submit the ListBridges request a second time and specify the NextToken value.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListBridgesResponse} Success
		 */
		ListBridges(filterArn: string | null | undefined, maxResults: number | null | undefined, nextToken: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListBridgesResponse> {
			return this.http.get<ListBridgesResponse>(this.baseUri + 'v1/bridges?filterArn=' + (filterArn == null ? '' : encodeURIComponent(filterArn)) + '&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
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
		 * Creates a new gateway. The request must include at least one network (up to 4).
		 * Post v1/gateways
		 * @return {void} 
		 */
		CreateGateway(requestBody: CreateGatewayPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/gateways', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Displays a list of gateways that are associated with this account. This request returns a paginated result.
		 * Get v1/gateways
		 * @param {number} maxResults The maximum number of results to return per API request. For example, you submit a ListGateways request with MaxResults set at 5. Although 20 items match your request, the service returns no more than the first 5 items. (The service also returns a NextToken value that you can use to fetch the next batch of results.) The service might return fewer results than the MaxResults value. If MaxResults is not included in the request, the service defaults to pagination with a maximum of 10 results per page.
		 * @param {string} nextToken The token that identifies which batch of results that you want to see. For example, you submit a ListGateways request with MaxResults set at 5. The service returns the first batch of results (up to 5) and a NextToken value. To see the next batch of results, you can submit the ListGateways request a second time and specify the NextToken value.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListGatewaysResponse} Success
		 */
		ListGateways(maxResults: number | null | undefined, nextToken: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListGatewaysResponse> {
			return this.http.get<ListGatewaysResponse>(this.baseUri + 'v1/gateways?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Deletes a bridge. Before you can delete a bridge, you must stop the bridge.
		 * Delete v1/bridges/{bridgeArn}
		 * @param {string} bridgeArn The ARN of the bridge that you want to delete.
		 * @return {DeleteBridgeResponse} Success
		 */
		DeleteBridge(bridgeArn: string): Observable<DeleteBridgeResponse> {
			return this.http.delete<DeleteBridgeResponse>(this.baseUri + 'v1/bridges/' + (bridgeArn == null ? '' : encodeURIComponent(bridgeArn)), {});
		}

		/**
		 * Displays the details of a bridge.
		 * Get v1/bridges/{bridgeArn}
		 * @param {string} bridgeArn The ARN of the bridge that you want to describe.
		 * @return {DescribeBridgeResponse} Success
		 */
		DescribeBridge(bridgeArn: string): Observable<DescribeBridgeResponse> {
			return this.http.get<DescribeBridgeResponse>(this.baseUri + 'v1/bridges/' + (bridgeArn == null ? '' : encodeURIComponent(bridgeArn)), {});
		}

		/**
		 * Updates the bridge
		 * Put v1/bridges/{bridgeArn}
		 * @param {string} bridgeArn The Amazon Resource Number (ARN) of the bridge that you want to update.
		 * @return {void} 
		 */
		UpdateBridge(bridgeArn: string, requestBody: UpdateBridgePutBody): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'v1/bridges/' + (bridgeArn == null ? '' : encodeURIComponent(bridgeArn)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
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
		 * Deletes a gateway. Before you can delete a gateway, you must deregister its instances and delete its bridges.
		 * Delete v1/gateways/{gatewayArn}
		 * @param {string} gatewayArn The ARN of the gateway that you want to delete.
		 * @return {DeleteGatewayResponse} Success
		 */
		DeleteGateway(gatewayArn: string): Observable<DeleteGatewayResponse> {
			return this.http.delete<DeleteGatewayResponse>(this.baseUri + 'v1/gateways/' + (gatewayArn == null ? '' : encodeURIComponent(gatewayArn)), {});
		}

		/**
		 * Displays the details of a gateway. The response includes the gateway ARN, name, and CIDR blocks, as well as details about the networks.
		 * Get v1/gateways/{gatewayArn}
		 * @param {string} gatewayArn The Amazon Resource Name (ARN) of the gateway that you want to describe.
		 * @return {DescribeGatewayResponse} Success
		 */
		DescribeGateway(gatewayArn: string): Observable<DescribeGatewayResponse> {
			return this.http.get<DescribeGatewayResponse>(this.baseUri + 'v1/gateways/' + (gatewayArn == null ? '' : encodeURIComponent(gatewayArn)), {});
		}

		/**
		 * Deregisters an instance. Before you deregister an instance, all bridges running on the instance must be stopped. If you want to deregister an instance without stopping the bridges, you must use the --force option.
		 * Delete v1/gateway-instances/{gatewayInstanceArn}
		 * @param {boolean} force Force the deregistration of an instance. Force will deregister an instance, even if there are bridges running on it.
		 * @param {string} gatewayInstanceArn The Amazon Resource Name (ARN) of the gateway that contains the instance that you want to deregister.
		 * @return {void} 
		 */
		DeregisterGatewayInstance(force: boolean | null | undefined, gatewayInstanceArn: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/gateway-instances/' + (gatewayInstanceArn == null ? '' : encodeURIComponent(gatewayInstanceArn)) + '?force=' + force, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Displays the details of an instance.
		 * Get v1/gateway-instances/{gatewayInstanceArn}
		 * @param {string} gatewayInstanceArn The Amazon Resource Name (ARN) of the gateway instance that you want to describe.
		 * @return {DescribeGatewayInstanceResponse} Success
		 */
		DescribeGatewayInstance(gatewayInstanceArn: string): Observable<DescribeGatewayInstanceResponse> {
			return this.http.get<DescribeGatewayInstanceResponse>(this.baseUri + 'v1/gateway-instances/' + (gatewayInstanceArn == null ? '' : encodeURIComponent(gatewayInstanceArn)), {});
		}

		/**
		 * Updates the configuration of an existing Gateway Instance.
		 * Put v1/gateway-instances/{gatewayInstanceArn}
		 * @param {string} gatewayInstanceArn The Amazon Resource Name (ARN) of the instance that you want to update.
		 * @return {UpdateGatewayInstanceResponse} Success
		 */
		UpdateGatewayInstance(gatewayInstanceArn: string, requestBody: UpdateGatewayInstancePutBody): Observable<UpdateGatewayInstanceResponse> {
			return this.http.put<UpdateGatewayInstanceResponse>(this.baseUri + 'v1/gateway-instances/' + (gatewayInstanceArn == null ? '' : encodeURIComponent(gatewayInstanceArn)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Displays the details of an offering. The response includes the offering description, duration, outbound bandwidth, price, and Amazon Resource Name (ARN).
		 * Get v1/offerings/{offeringArn}
		 * @param {string} offeringArn The Amazon Resource Name (ARN) of the offering.
		 * @return {DescribeOfferingResponse} Success
		 */
		DescribeOffering(offeringArn: string): Observable<DescribeOfferingResponse> {
			return this.http.get<DescribeOfferingResponse>(this.baseUri + 'v1/offerings/' + (offeringArn == null ? '' : encodeURIComponent(offeringArn)), {});
		}

		/**
		 * Submits a request to purchase an offering. If you already have an active reservation, you can't purchase another offering.
		 * Post v1/offerings/{offeringArn}
		 * @param {string} offeringArn The Amazon Resource Name (ARN) of the offering.
		 * @return {void} 
		 */
		PurchaseOffering(offeringArn: string, requestBody: PurchaseOfferingPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/offerings/' + (offeringArn == null ? '' : encodeURIComponent(offeringArn)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Displays the details of a reservation. The response includes the reservation name, state, start date and time, and the details of the offering that make up the rest of the reservation (such as price, duration, and outbound bandwidth).
		 * Get v1/reservations/{reservationArn}
		 * @param {string} reservationArn The Amazon Resource Name (ARN) of the reservation.
		 * @return {DescribeReservationResponse} Success
		 */
		DescribeReservation(reservationArn: string): Observable<DescribeReservationResponse> {
			return this.http.get<DescribeReservationResponse>(this.baseUri + 'v1/reservations/' + (reservationArn == null ? '' : encodeURIComponent(reservationArn)), {});
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
		 * Displays a list of instances associated with the AWS account. This request returns a paginated result. You can use the filterArn property to display only the instances associated with the selected Gateway Amazon Resource Name (ARN).
		 * Get v1/gateway-instances
		 * @param {string} filterArn Filter the list results to display only the instances associated with the selected Gateway Amazon Resource Name (ARN).
		 * @param {number} maxResults The maximum number of results to return per API request. For example, you submit a ListInstances request with MaxResults set at 5. Although 20 items match your request, the service returns no more than the first 5 items. (The service also returns a NextToken value that you can use to fetch the next batch of results.) The service might return fewer results than the MaxResults value. If MaxResults is not included in the request, the service defaults to pagination with a maximum of 10 results per page.
		 * @param {string} nextToken The token that identifies which batch of results that you want to see. For example, you submit a ListInstances request with MaxResults set at 5. The service returns the first batch of results (up to 5) and a NextToken value. To see the next batch of results, you can submit the ListInstances request a second time and specify the NextToken value.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListGatewayInstancesResponse} Success
		 */
		ListGatewayInstances(filterArn: string | null | undefined, maxResults: number | null | undefined, nextToken: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListGatewayInstancesResponse> {
			return this.http.get<ListGatewayInstancesResponse>(this.baseUri + 'v1/gateway-instances?filterArn=' + (filterArn == null ? '' : encodeURIComponent(filterArn)) + '&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Displays a list of all offerings that are available to this account in the current AWS Region. If you have an active reservation (which means you've purchased an offering that has already started and hasn't expired yet), your account isn't eligible for other offerings.
		 * Get v1/offerings
		 * @param {number} maxResults The maximum number of results to return per API request. For example, you submit a ListOfferings request with MaxResults set at 5. Although 20 items match your request, the service returns no more than the first 5 items. (The service also returns a NextToken value that you can use to fetch the next batch of results.) The service might return fewer results than the MaxResults value. If MaxResults is not included in the request, the service defaults to pagination with a maximum of 10 results per page.
		 * @param {string} nextToken The token that identifies which batch of results that you want to see. For example, you submit a ListOfferings request with MaxResults set at 5. The service returns the first batch of results (up to 5) and a NextToken value. To see the next batch of results, you can submit the ListOfferings request a second time and specify the NextToken value.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListOfferingsResponse} Success
		 */
		ListOfferings(maxResults: number | null | undefined, nextToken: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListOfferingsResponse> {
			return this.http.get<ListOfferingsResponse>(this.baseUri + 'v1/offerings?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Displays a list of all reservations that have been purchased by this account in the current AWS Region. This list includes all reservations in all states (such as active and expired).
		 * Get v1/reservations
		 * @param {number} maxResults The maximum number of results to return per API request. For example, you submit a ListReservations request with MaxResults set at 5. Although 20 items match your request, the service returns no more than the first 5 items. (The service also returns a NextToken value that you can use to fetch the next batch of results.) The service might return fewer results than the MaxResults value. If MaxResults is not included in the request, the service defaults to pagination with a maximum of 10 results per page.
		 * @param {string} nextToken The token that identifies which batch of results that you want to see. For example, you submit a ListReservations request with MaxResults set at 5. The service returns the first batch of results (up to 5) and a NextToken value. To see the next batch of results, you can submit the ListOfferings request a second time and specify the NextToken value.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListReservationsResponse} Success
		 */
		ListReservations(maxResults: number | null | undefined, nextToken: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListReservationsResponse> {
			return this.http.get<ListReservationsResponse>(this.baseUri + 'v1/reservations?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
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
		 * Removes an output from a bridge.
		 * Delete v1/bridges/{bridgeArn}/outputs/{outputName}
		 * @param {string} bridgeArn The ARN of the bridge that you want to update.
		 * @param {string} outputName The name of the bridge output that you want to remove.
		 * @return {void} 
		 */
		RemoveBridgeOutput(bridgeArn: string, outputName: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/bridges/' + (bridgeArn == null ? '' : encodeURIComponent(bridgeArn)) + '/outputs/' + (outputName == null ? '' : encodeURIComponent(outputName)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates an existing bridge output.
		 * Put v1/bridges/{bridgeArn}/outputs/{outputName}
		 * @param {string} bridgeArn The ARN of the bridge that you want to update.
		 * @param {string} outputName The name of the bridge output that you want to update.
		 * @return {void} 
		 */
		UpdateBridgeOutput(bridgeArn: string, outputName: string, requestBody: UpdateBridgeOutputPutBody): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'v1/bridges/' + (bridgeArn == null ? '' : encodeURIComponent(bridgeArn)) + '/outputs/' + (outputName == null ? '' : encodeURIComponent(outputName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Removes a source from a bridge.
		 * Delete v1/bridges/{bridgeArn}/sources/{sourceName}
		 * @param {string} bridgeArn The ARN of the bridge that you want to update.
		 * @param {string} sourceName The name of the bridge source that you want to remove.
		 * @return {void} 
		 */
		RemoveBridgeSource(bridgeArn: string, sourceName: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/bridges/' + (bridgeArn == null ? '' : encodeURIComponent(bridgeArn)) + '/sources/' + (sourceName == null ? '' : encodeURIComponent(sourceName)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates an existing bridge source.
		 * Put v1/bridges/{bridgeArn}/sources/{sourceName}
		 * @param {string} bridgeArn The ARN of the bridge that you want to update.
		 * @param {string} sourceName The name of the source that you want to update.
		 * @return {void} 
		 */
		UpdateBridgeSource(bridgeArn: string, sourceName: string, requestBody: UpdateBridgeSourcePutBody): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'v1/bridges/' + (bridgeArn == null ? '' : encodeURIComponent(bridgeArn)) + '/sources/' + (sourceName == null ? '' : encodeURIComponent(sourceName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Removes a media stream from a flow. This action is only available if the media stream is not associated with a source or output.
		 * Delete v1/flows/{flowArn}/mediaStreams/{mediaStreamName}
		 * @param {string} flowArn The Amazon Resource Name (ARN) of the flow.
		 * @param {string} mediaStreamName The name of the media stream that you want to remove.
		 * @return {RemoveFlowMediaStreamResponse} Success
		 */
		RemoveFlowMediaStream(flowArn: string, mediaStreamName: string): Observable<RemoveFlowMediaStreamResponse> {
			return this.http.delete<RemoveFlowMediaStreamResponse>(this.baseUri + 'v1/flows/' + (flowArn == null ? '' : encodeURIComponent(flowArn)) + '/mediaStreams/' + (mediaStreamName == null ? '' : encodeURIComponent(mediaStreamName)), {});
		}

		/**
		 * Updates an existing media stream.
		 * Put v1/flows/{flowArn}/mediaStreams/{mediaStreamName}
		 * @param {string} flowArn The Amazon Resource Name (ARN) of the flow.
		 * @param {string} mediaStreamName The name of the media stream that you want to update.
		 * @return {void} 
		 */
		UpdateFlowMediaStream(flowArn: string, mediaStreamName: string, requestBody: UpdateFlowMediaStreamPutBody): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'v1/flows/' + (flowArn == null ? '' : encodeURIComponent(flowArn)) + '/mediaStreams/' + (mediaStreamName == null ? '' : encodeURIComponent(mediaStreamName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
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

		/**
		 * Updates the bridge state
		 * Put v1/bridges/{bridgeArn}/state
		 * @param {string} bridgeArn The ARN of the bridge that you want to update.
		 * @return {void} 
		 */
		UpdateBridgeState(bridgeArn: string, requestBody: UpdateBridgeStatePutBody): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'v1/bridges/' + (bridgeArn == null ? '' : encodeURIComponent(bridgeArn)) + '/state', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

	export interface AddBridgeOutputsPostBody {

		/**
		 * The outputs that you want to add to this bridge.
		 * Required
		 */
		outputs: Array<AddBridgeOutputRequest>;
	}
	export interface AddBridgeOutputsPostBodyFormProperties {
	}
	export function CreateAddBridgeOutputsPostBodyFormGroup() {
		return new FormGroup<AddBridgeOutputsPostBodyFormProperties>({
		});

	}

	export interface AddBridgeSourcesPostBody {

		/**
		 * The sources that you want to add to this bridge.
		 * Required
		 */
		sources: Array<AddBridgeSourceRequest>;
	}
	export interface AddBridgeSourcesPostBodyFormProperties {
	}
	export function CreateAddBridgeSourcesPostBodyFormGroup() {
		return new FormGroup<AddBridgeSourcesPostBodyFormProperties>({
		});

	}

	export interface AddFlowMediaStreamsPostBody {

		/**
		 * The media streams that you want to add to the flow.
		 * Required
		 */
		mediaStreams: Array<AddMediaStreamRequest>;
	}
	export interface AddFlowMediaStreamsPostBodyFormProperties {
	}
	export function CreateAddFlowMediaStreamsPostBodyFormGroup() {
		return new FormGroup<AddFlowMediaStreamsPostBodyFormProperties>({
		});

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

	export interface CreateBridgePostBody {

		/** Create a bridge with the egress bridge type. An egress bridge is a cloud-to-ground bridge. The content comes from an existing MediaConnect flow and is delivered to your premises. */
		egressGatewayBridge?: CreateBridgePostBodyEgressGatewayBridge;

		/** Create a bridge with the ingress bridge type. An ingress bridge is a ground-to-cloud bridge. The content originates at your premises and is delivered to the cloud. */
		ingressGatewayBridge?: CreateBridgePostBodyIngressGatewayBridge;

		/**
		 * The name of the bridge. This name can not be modified after the bridge is created.
		 * Required
		 */
		name: string;

		/** The outputs that you want to add to this bridge. */
		outputs?: Array<AddBridgeOutputRequest>;

		/**
		 * The bridge placement Amazon Resource Number (ARN).
		 * Required
		 */
		placementArn: string;

		/** The settings for source failover. */
		sourceFailoverConfig?: CreateBridgePostBodySourceFailoverConfig;

		/**
		 * The sources that you want to add to this bridge.
		 * Required
		 */
		sources: Array<AddBridgeSourceRequest>;
	}
	export interface CreateBridgePostBodyFormProperties {

		/**
		 * The name of the bridge. This name can not be modified after the bridge is created.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The bridge placement Amazon Resource Number (ARN).
		 * Required
		 */
		placementArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateBridgePostBodyFormGroup() {
		return new FormGroup<CreateBridgePostBodyFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			placementArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateBridgePostBodyEgressGatewayBridge {
		MaxBitrate?: number | null;
	}
	export interface CreateBridgePostBodyEgressGatewayBridgeFormProperties {
		MaxBitrate: FormControl<number | null | undefined>,
	}
	export function CreateCreateBridgePostBodyEgressGatewayBridgeFormGroup() {
		return new FormGroup<CreateBridgePostBodyEgressGatewayBridgeFormProperties>({
			MaxBitrate: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CreateBridgePostBodyIngressGatewayBridge {
		MaxBitrate?: number | null;
		MaxOutputs?: number | null;
	}
	export interface CreateBridgePostBodyIngressGatewayBridgeFormProperties {
		MaxBitrate: FormControl<number | null | undefined>,
		MaxOutputs: FormControl<number | null | undefined>,
	}
	export function CreateCreateBridgePostBodyIngressGatewayBridgeFormGroup() {
		return new FormGroup<CreateBridgePostBodyIngressGatewayBridgeFormProperties>({
			MaxBitrate: new FormControl<number | null | undefined>(undefined),
			MaxOutputs: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CreateBridgePostBodySourceFailoverConfig {
		FailoverMode?: FailoverMode;
		RecoveryWindow?: number | null;
		SourcePriority?: SourcePriority;
		State?: State;
	}
	export interface CreateBridgePostBodySourceFailoverConfigFormProperties {
		FailoverMode: FormControl<FailoverMode | null | undefined>,
		RecoveryWindow: FormControl<number | null | undefined>,
		State: FormControl<State | null | undefined>,
	}
	export function CreateCreateBridgePostBodySourceFailoverConfigFormGroup() {
		return new FormGroup<CreateBridgePostBodySourceFailoverConfigFormProperties>({
			FailoverMode: new FormControl<FailoverMode | null | undefined>(undefined),
			RecoveryWindow: new FormControl<number | null | undefined>(undefined),
			State: new FormControl<State | null | undefined>(undefined),
		});

	}

	export interface CreateFlowPostBody {

		/** The Availability Zone that you want to create the flow in. These options are limited to the Availability Zones within the current AWS Region. */
		availabilityZone?: string | null;

		/** The entitlements that you want to grant on a flow. */
		entitlements?: Array<GrantEntitlementRequest>;

		/** The media streams that you want to add to the flow. You can associate these media streams with sources and outputs on the flow. */
		mediaStreams?: Array<AddMediaStreamRequest>;

		/**
		 * The name of the flow.
		 * Required
		 */
		name: string;

		/** The outputs that you want to add to this flow. */
		outputs?: Array<AddOutputRequest>;

		/** The settings for the source of the flow. */
		source?: CreateFlowPostBodySource;

		/** The settings for source failover. */
		sourceFailoverConfig?: CreateFlowPostBodySourceFailoverConfig;
		sources?: Array<SetSourceRequest>;

		/** The VPC interfaces you want on the flow. */
		vpcInterfaces?: Array<VpcInterfaceRequest>;

		/** Create maintenance setting for a flow */
		maintenance?: CreateFlowPostBodyMaintenance;
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
		Decryption?: Encryption;
		Description?: string;
		EntitlementArn?: string;
		IngestPort?: number | null;
		MaxBitrate?: number | null;
		MaxLatency?: number | null;
		MaxSyncBuffer?: number | null;
		MediaStreamSourceConfigurations?: Array<MediaStreamSourceConfigurationRequest>;
		MinLatency?: number | null;
		Name?: string;
		Protocol?: Protocol;
		SenderControlPort?: number | null;
		SenderIpAddress?: string;
		SourceListenerAddress?: string;
		SourceListenerPort?: number | null;
		StreamId?: string;
		VpcInterfaceName?: string;
		WhitelistCidr?: string;
		GatewayBridgeSource?: SetGatewayBridgeSourceRequest;
	}
	export interface CreateFlowPostBodySourceFormProperties {
		Description: FormControl<string | null | undefined>,
		EntitlementArn: FormControl<string | null | undefined>,
		IngestPort: FormControl<number | null | undefined>,
		MaxBitrate: FormControl<number | null | undefined>,
		MaxLatency: FormControl<number | null | undefined>,
		MaxSyncBuffer: FormControl<number | null | undefined>,
		MinLatency: FormControl<number | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Protocol: FormControl<Protocol | null | undefined>,
		SenderControlPort: FormControl<number | null | undefined>,
		SenderIpAddress: FormControl<string | null | undefined>,
		SourceListenerAddress: FormControl<string | null | undefined>,
		SourceListenerPort: FormControl<number | null | undefined>,
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
			MaxSyncBuffer: new FormControl<number | null | undefined>(undefined),
			MinLatency: new FormControl<number | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Protocol: new FormControl<Protocol | null | undefined>(undefined),
			SenderControlPort: new FormControl<number | null | undefined>(undefined),
			SenderIpAddress: new FormControl<string | null | undefined>(undefined),
			SourceListenerAddress: new FormControl<string | null | undefined>(undefined),
			SourceListenerPort: new FormControl<number | null | undefined>(undefined),
			StreamId: new FormControl<string | null | undefined>(undefined),
			VpcInterfaceName: new FormControl<string | null | undefined>(undefined),
			WhitelistCidr: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateFlowPostBodySourceFailoverConfig {
		FailoverMode?: FailoverMode;
		RecoveryWindow?: number | null;
		SourcePriority?: SourcePriority;
		State?: State;
	}
	export interface CreateFlowPostBodySourceFailoverConfigFormProperties {
		FailoverMode: FormControl<FailoverMode | null | undefined>,
		RecoveryWindow: FormControl<number | null | undefined>,
		State: FormControl<State | null | undefined>,
	}
	export function CreateCreateFlowPostBodySourceFailoverConfigFormGroup() {
		return new FormGroup<CreateFlowPostBodySourceFailoverConfigFormProperties>({
			FailoverMode: new FormControl<FailoverMode | null | undefined>(undefined),
			RecoveryWindow: new FormControl<number | null | undefined>(undefined),
			State: new FormControl<State | null | undefined>(undefined),
		});

	}

	export interface CreateFlowPostBodyMaintenance {
		MaintenanceDay?: MaintenanceDay;
		MaintenanceStartHour?: string;
	}
	export interface CreateFlowPostBodyMaintenanceFormProperties {
		MaintenanceDay: FormControl<MaintenanceDay | null | undefined>,
		MaintenanceStartHour: FormControl<string | null | undefined>,
	}
	export function CreateCreateFlowPostBodyMaintenanceFormGroup() {
		return new FormGroup<CreateFlowPostBodyMaintenanceFormProperties>({
			MaintenanceDay: new FormControl<MaintenanceDay | null | undefined>(undefined),
			MaintenanceStartHour: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateGatewayPostBody {

		/**
		 * The range of IP addresses that are allowed to contribute content or initiate output requests for flows communicating with this gateway. These IP addresses should be in the form of a Classless Inter-Domain Routing (CIDR) block; for example, 10.0.0.0/16.
		 * Required
		 */
		egressCidrBlocks: Array<string>;

		/**
		 * The name of the gateway. This name can not be modified after the gateway is created.
		 * Required
		 */
		name: string;

		/**
		 * The list of networks that you want to add.
		 * Required
		 */
		networks: Array<GatewayNetwork>;
	}
	export interface CreateGatewayPostBodyFormProperties {

		/**
		 * The name of the gateway. This name can not be modified after the gateway is created.
		 * Required
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateCreateGatewayPostBodyFormGroup() {
		return new FormGroup<CreateGatewayPostBodyFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateBridgePutBody {
		egressGatewayBridge?: UpdateBridgePutBodyEgressGatewayBridge;
		ingressGatewayBridge?: UpdateBridgePutBodyIngressGatewayBridge;

		/** The settings for source failover. */
		sourceFailoverConfig?: UpdateBridgePutBodySourceFailoverConfig;
	}
	export interface UpdateBridgePutBodyFormProperties {
	}
	export function CreateUpdateBridgePutBodyFormGroup() {
		return new FormGroup<UpdateBridgePutBodyFormProperties>({
		});

	}

	export interface UpdateBridgePutBodyEgressGatewayBridge {
		MaxBitrate?: number | null;
	}
	export interface UpdateBridgePutBodyEgressGatewayBridgeFormProperties {
		MaxBitrate: FormControl<number | null | undefined>,
	}
	export function CreateUpdateBridgePutBodyEgressGatewayBridgeFormGroup() {
		return new FormGroup<UpdateBridgePutBodyEgressGatewayBridgeFormProperties>({
			MaxBitrate: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface UpdateBridgePutBodyIngressGatewayBridge {
		MaxBitrate?: number | null;
		MaxOutputs?: number | null;
	}
	export interface UpdateBridgePutBodyIngressGatewayBridgeFormProperties {
		MaxBitrate: FormControl<number | null | undefined>,
		MaxOutputs: FormControl<number | null | undefined>,
	}
	export function CreateUpdateBridgePutBodyIngressGatewayBridgeFormGroup() {
		return new FormGroup<UpdateBridgePutBodyIngressGatewayBridgeFormProperties>({
			MaxBitrate: new FormControl<number | null | undefined>(undefined),
			MaxOutputs: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface UpdateBridgePutBodySourceFailoverConfig {
		FailoverMode?: FailoverMode;
		RecoveryWindow?: number | null;
		SourcePriority?: SourcePriority;
		State?: State;
	}
	export interface UpdateBridgePutBodySourceFailoverConfigFormProperties {
		FailoverMode: FormControl<FailoverMode | null | undefined>,
		RecoveryWindow: FormControl<number | null | undefined>,
		State: FormControl<State | null | undefined>,
	}
	export function CreateUpdateBridgePutBodySourceFailoverConfigFormGroup() {
		return new FormGroup<UpdateBridgePutBodySourceFailoverConfigFormProperties>({
			FailoverMode: new FormControl<FailoverMode | null | undefined>(undefined),
			RecoveryWindow: new FormControl<number | null | undefined>(undefined),
			State: new FormControl<State | null | undefined>(undefined),
		});

	}

	export interface UpdateFlowPutBody {

		/** The settings for source failover. */
		sourceFailoverConfig?: UpdateFlowPutBodySourceFailoverConfig;

		/** Update maintenance setting for a flow */
		maintenance?: UpdateFlowPutBodyMaintenance;
	}
	export interface UpdateFlowPutBodyFormProperties {
	}
	export function CreateUpdateFlowPutBodyFormGroup() {
		return new FormGroup<UpdateFlowPutBodyFormProperties>({
		});

	}

	export interface UpdateFlowPutBodySourceFailoverConfig {
		FailoverMode?: FailoverMode;
		RecoveryWindow?: number | null;
		SourcePriority?: SourcePriority;
		State?: State;
	}
	export interface UpdateFlowPutBodySourceFailoverConfigFormProperties {
		FailoverMode: FormControl<FailoverMode | null | undefined>,
		RecoveryWindow: FormControl<number | null | undefined>,
		State: FormControl<State | null | undefined>,
	}
	export function CreateUpdateFlowPutBodySourceFailoverConfigFormGroup() {
		return new FormGroup<UpdateFlowPutBodySourceFailoverConfigFormProperties>({
			FailoverMode: new FormControl<FailoverMode | null | undefined>(undefined),
			RecoveryWindow: new FormControl<number | null | undefined>(undefined),
			State: new FormControl<State | null | undefined>(undefined),
		});

	}

	export interface UpdateFlowPutBodyMaintenance {
		MaintenanceDay?: MaintenanceDay;
		MaintenanceScheduledDate?: string;
		MaintenanceStartHour?: string;
	}
	export interface UpdateFlowPutBodyMaintenanceFormProperties {
		MaintenanceDay: FormControl<MaintenanceDay | null | undefined>,
		MaintenanceScheduledDate: FormControl<string | null | undefined>,
		MaintenanceStartHour: FormControl<string | null | undefined>,
	}
	export function CreateUpdateFlowPutBodyMaintenanceFormGroup() {
		return new FormGroup<UpdateFlowPutBodyMaintenanceFormProperties>({
			MaintenanceDay: new FormControl<MaintenanceDay | null | undefined>(undefined),
			MaintenanceScheduledDate: new FormControl<string | null | undefined>(undefined),
			MaintenanceStartHour: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateGatewayInstancePutBody {

		/** The availability of the instance to host new bridges. The bridgePlacement property can be LOCKED or AVAILABLE. If it is LOCKED, no new bridges can be deployed to this instance. If it is AVAILABLE, new bridges can be added to this instance. */
		bridgePlacement?: BridgePlacement | null;
	}
	export interface UpdateGatewayInstancePutBodyFormProperties {

		/** The availability of the instance to host new bridges. The bridgePlacement property can be LOCKED or AVAILABLE. If it is LOCKED, no new bridges can be deployed to this instance. If it is AVAILABLE, new bridges can be added to this instance. */
		bridgePlacement: FormControl<BridgePlacement | null | undefined>,
	}
	export function CreateUpdateGatewayInstancePutBodyFormGroup() {
		return new FormGroup<UpdateGatewayInstancePutBodyFormProperties>({
			bridgePlacement: new FormControl<BridgePlacement | null | undefined>(undefined),
		});

	}

	export interface PurchaseOfferingPostBody {

		/**
		 * The name that you want to use for the reservation.
		 * Required
		 */
		reservationName: string;

		/**
		 * The date and time that you want the reservation to begin, in Coordinated Universal Time (UTC). You can specify any date and time between 12:00am on the first day of the current month to the current time on today's date, inclusive. Specify the start in a 24-hour notation. Use the following format: YYYY-MM-DDTHH:mm:SSZ, where T and Z are literal characters. For example, to specify 11:30pm on March 5, 2020, enter 2020-03-05T23:30:00Z.
		 * Required
		 */
		start: string;
	}
	export interface PurchaseOfferingPostBodyFormProperties {

		/**
		 * The name that you want to use for the reservation.
		 * Required
		 */
		reservationName: FormControl<string | null | undefined>,

		/**
		 * The date and time that you want the reservation to begin, in Coordinated Universal Time (UTC). You can specify any date and time between 12:00am on the first day of the current month to the current time on today's date, inclusive. Specify the start in a 24-hour notation. Use the following format: YYYY-MM-DDTHH:mm:SSZ, where T and Z are literal characters. For example, to specify 11:30pm on March 5, 2020, enter 2020-03-05T23:30:00Z.
		 * Required
		 */
		start: FormControl<string | null | undefined>,
	}
	export function CreatePurchaseOfferingPostBodyFormGroup() {
		return new FormGroup<PurchaseOfferingPostBodyFormProperties>({
			reservationName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			start: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

	export interface UpdateBridgeOutputPutBody {

		/** Update an existing network output. */
		networkOutput?: UpdateBridgeOutputPutBodyNetworkOutput;
	}
	export interface UpdateBridgeOutputPutBodyFormProperties {
	}
	export function CreateUpdateBridgeOutputPutBodyFormGroup() {
		return new FormGroup<UpdateBridgeOutputPutBodyFormProperties>({
		});

	}

	export interface UpdateBridgeOutputPutBodyNetworkOutput {
		IpAddress?: string;
		NetworkName?: string;
		Port?: number | null;
		Protocol?: Protocol;
		Ttl?: number | null;
	}
	export interface UpdateBridgeOutputPutBodyNetworkOutputFormProperties {
		IpAddress: FormControl<string | null | undefined>,
		NetworkName: FormControl<string | null | undefined>,
		Port: FormControl<number | null | undefined>,
		Protocol: FormControl<Protocol | null | undefined>,
		Ttl: FormControl<number | null | undefined>,
	}
	export function CreateUpdateBridgeOutputPutBodyNetworkOutputFormGroup() {
		return new FormGroup<UpdateBridgeOutputPutBodyNetworkOutputFormProperties>({
			IpAddress: new FormControl<string | null | undefined>(undefined),
			NetworkName: new FormControl<string | null | undefined>(undefined),
			Port: new FormControl<number | null | undefined>(undefined),
			Protocol: new FormControl<Protocol | null | undefined>(undefined),
			Ttl: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface UpdateBridgeSourcePutBody {

		/** Update the flow source of the bridge. */
		flowSource?: UpdateBridgeSourcePutBodyFlowSource;

		/** Update the network source of the bridge. */
		networkSource?: UpdateBridgeSourcePutBodyNetworkSource;
	}
	export interface UpdateBridgeSourcePutBodyFormProperties {
	}
	export function CreateUpdateBridgeSourcePutBodyFormGroup() {
		return new FormGroup<UpdateBridgeSourcePutBodyFormProperties>({
		});

	}

	export interface UpdateBridgeSourcePutBodyFlowSource {
		FlowArn?: string;
		FlowVpcInterfaceAttachment?: VpcInterfaceAttachment;
	}
	export interface UpdateBridgeSourcePutBodyFlowSourceFormProperties {
		FlowArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateBridgeSourcePutBodyFlowSourceFormGroup() {
		return new FormGroup<UpdateBridgeSourcePutBodyFlowSourceFormProperties>({
			FlowArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateBridgeSourcePutBodyNetworkSource {
		MulticastIp?: string;
		NetworkName?: string;
		Port?: number | null;
		Protocol?: Protocol;
	}
	export interface UpdateBridgeSourcePutBodyNetworkSourceFormProperties {
		MulticastIp: FormControl<string | null | undefined>,
		NetworkName: FormControl<string | null | undefined>,
		Port: FormControl<number | null | undefined>,
		Protocol: FormControl<Protocol | null | undefined>,
	}
	export function CreateUpdateBridgeSourcePutBodyNetworkSourceFormGroup() {
		return new FormGroup<UpdateBridgeSourcePutBodyNetworkSourceFormProperties>({
			MulticastIp: new FormControl<string | null | undefined>(undefined),
			NetworkName: new FormControl<string | null | undefined>(undefined),
			Port: new FormControl<number | null | undefined>(undefined),
			Protocol: new FormControl<Protocol | null | undefined>(undefined),
		});

	}

	export interface UpdateFlowMediaStreamPutBody {

		/** Attributes that are related to the media stream. */
		attributes?: UpdateFlowMediaStreamPutBodyAttributes;

		/** The sample rate (in Hz) for the stream. If the media stream type is video or ancillary data, set this value to 90000. If the media stream type is audio, set this value to either 48000 or 96000. */
		clockRate?: number | null;

		/** Description */
		description?: string | null;

		/** The type of media stream. */
		mediaStreamType?: MediaStreamType | null;

		/** The resolution of the video. */
		videoFormat?: string | null;
	}
	export interface UpdateFlowMediaStreamPutBodyFormProperties {

		/** The sample rate (in Hz) for the stream. If the media stream type is video or ancillary data, set this value to 90000. If the media stream type is audio, set this value to either 48000 or 96000. */
		clockRate: FormControl<number | null | undefined>,

		/** Description */
		description: FormControl<string | null | undefined>,

		/** The type of media stream. */
		mediaStreamType: FormControl<MediaStreamType | null | undefined>,

		/** The resolution of the video. */
		videoFormat: FormControl<string | null | undefined>,
	}
	export function CreateUpdateFlowMediaStreamPutBodyFormGroup() {
		return new FormGroup<UpdateFlowMediaStreamPutBodyFormProperties>({
			clockRate: new FormControl<number | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			mediaStreamType: new FormControl<MediaStreamType | null | undefined>(undefined),
			videoFormat: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateFlowMediaStreamPutBodyAttributes {
		Fmtp?: FmtpRequest;
		Lang?: string;
	}
	export interface UpdateFlowMediaStreamPutBodyAttributesFormProperties {
		Lang: FormControl<string | null | undefined>,
	}
	export function CreateUpdateFlowMediaStreamPutBodyAttributesFormGroup() {
		return new FormGroup<UpdateFlowMediaStreamPutBodyAttributesFormProperties>({
			Lang: new FormControl<string | null | undefined>(undefined),
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

		/** The maximum latency in milliseconds. This parameter applies only to RIST-based, Zixi-based, and Fujitsu-based streams. */
		maxLatency?: number | null;

		/** The media streams that are associated with the output, and the parameters for those associations. */
		mediaStreamOutputConfigurations?: Array<MediaStreamOutputConfigurationRequest>;

		/** The minimum latency in milliseconds for SRT-based streams. In streams that use the SRT protocol, this value that you set on your MediaConnect source or output represents the minimal potential latency of that connection. The latency of the stream is set to the highest number between the sender’s minimum latency and the receiver’s minimum latency. */
		minLatency?: number | null;

		/** The port to use when content is distributed to this output. */
		port?: number | null;

		/** The protocol to use for the output. */
		protocol?: Protocol | null;

		/** The remote ID for the Zixi-pull stream. */
		remoteId?: string | null;

		/** The port that the flow uses to send outbound requests to initiate connection with the sender. */
		senderControlPort?: number | null;

		/** The IP address that the flow communicates with to initiate connection with the sender. */
		senderIpAddress?: string | null;

		/** The smoothing latency in milliseconds for RIST, RTP, and RTP-FEC streams. */
		smoothingLatency?: number | null;

		/** The stream ID that you want to use for this transport. This parameter applies only to Zixi and SRT caller-based streams. */
		streamId?: string | null;

		/** The settings for attaching a VPC interface to an resource. */
		vpcInterfaceAttachment?: UpdateFlowOutputPutBodyVpcInterfaceAttachment;
	}
	export interface UpdateFlowOutputPutBodyFormProperties {

		/** A description of the output. This description appears only on the AWS Elemental MediaConnect console and will not be seen by the end user. */
		description: FormControl<string | null | undefined>,

		/** The IP address where you want to send the output. */
		destination: FormControl<string | null | undefined>,

		/** The maximum latency in milliseconds. This parameter applies only to RIST-based, Zixi-based, and Fujitsu-based streams. */
		maxLatency: FormControl<number | null | undefined>,

		/** The minimum latency in milliseconds for SRT-based streams. In streams that use the SRT protocol, this value that you set on your MediaConnect source or output represents the minimal potential latency of that connection. The latency of the stream is set to the highest number between the sender’s minimum latency and the receiver’s minimum latency. */
		minLatency: FormControl<number | null | undefined>,

		/** The port to use when content is distributed to this output. */
		port: FormControl<number | null | undefined>,

		/** The protocol to use for the output. */
		protocol: FormControl<Protocol | null | undefined>,

		/** The remote ID for the Zixi-pull stream. */
		remoteId: FormControl<string | null | undefined>,

		/** The port that the flow uses to send outbound requests to initiate connection with the sender. */
		senderControlPort: FormControl<number | null | undefined>,

		/** The IP address that the flow communicates with to initiate connection with the sender. */
		senderIpAddress: FormControl<string | null | undefined>,

		/** The smoothing latency in milliseconds for RIST, RTP, and RTP-FEC streams. */
		smoothingLatency: FormControl<number | null | undefined>,

		/** The stream ID that you want to use for this transport. This parameter applies only to Zixi and SRT caller-based streams. */
		streamId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateFlowOutputPutBodyFormGroup() {
		return new FormGroup<UpdateFlowOutputPutBodyFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			destination: new FormControl<string | null | undefined>(undefined),
			maxLatency: new FormControl<number | null | undefined>(undefined),
			minLatency: new FormControl<number | null | undefined>(undefined),
			port: new FormControl<number | null | undefined>(undefined),
			protocol: new FormControl<Protocol | null | undefined>(undefined),
			remoteId: new FormControl<string | null | undefined>(undefined),
			senderControlPort: new FormControl<number | null | undefined>(undefined),
			senderIpAddress: new FormControl<string | null | undefined>(undefined),
			smoothingLatency: new FormControl<number | null | undefined>(undefined),
			streamId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateFlowOutputPutBodyEncryption {
		Algorithm?: Algorithm;
		ConstantInitializationVector?: string;
		DeviceId?: string;
		KeyType?: KeyType;
		Region?: string;
		ResourceId?: string;
		RoleArn?: string;
		SecretArn?: string;
		Url?: string;
	}
	export interface UpdateFlowOutputPutBodyEncryptionFormProperties {
		Algorithm: FormControl<Algorithm | null | undefined>,
		ConstantInitializationVector: FormControl<string | null | undefined>,
		DeviceId: FormControl<string | null | undefined>,
		KeyType: FormControl<KeyType | null | undefined>,
		Region: FormControl<string | null | undefined>,
		ResourceId: FormControl<string | null | undefined>,
		RoleArn: FormControl<string | null | undefined>,
		SecretArn: FormControl<string | null | undefined>,
		Url: FormControl<string | null | undefined>,
	}
	export function CreateUpdateFlowOutputPutBodyEncryptionFormGroup() {
		return new FormGroup<UpdateFlowOutputPutBodyEncryptionFormProperties>({
			Algorithm: new FormControl<Algorithm | null | undefined>(undefined),
			ConstantInitializationVector: new FormControl<string | null | undefined>(undefined),
			DeviceId: new FormControl<string | null | undefined>(undefined),
			KeyType: new FormControl<KeyType | null | undefined>(undefined),
			Region: new FormControl<string | null | undefined>(undefined),
			ResourceId: new FormControl<string | null | undefined>(undefined),
			RoleArn: new FormControl<string | null | undefined>(undefined),
			SecretArn: new FormControl<string | null | undefined>(undefined),
			Url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateFlowOutputPutBodyVpcInterfaceAttachment {
		VpcInterfaceName?: string;
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

		/** The smoothing max bitrate (in bps) for RIST, RTP, and RTP-FEC streams. */
		maxBitrate?: number | null;

		/** The maximum latency in milliseconds. This parameter applies only to RIST-based, Zixi-based, and Fujitsu-based streams. */
		maxLatency?: number | null;

		/** The size of the buffer (in milliseconds) to use to sync incoming source data. */
		maxSyncBuffer?: number | null;

		/** The media streams that are associated with the source, and the parameters for those associations. */
		mediaStreamSourceConfigurations?: Array<MediaStreamSourceConfigurationRequest>;

		/** The minimum latency in milliseconds for SRT-based streams. In streams that use the SRT protocol, this value that you set on your MediaConnect source or output represents the minimal potential latency of that connection. The latency of the stream is set to the highest number between the sender’s minimum latency and the receiver’s minimum latency. */
		minLatency?: number | null;

		/** The protocol that is used by the source. */
		protocol?: Protocol | null;

		/** The port that the flow uses to send outbound requests to initiate connection with the sender. */
		senderControlPort?: number | null;

		/** The IP address that the flow communicates with to initiate connection with the sender. */
		senderIpAddress?: string | null;

		/** Source IP or domain name for SRT-caller protocol. */
		sourceListenerAddress?: string | null;

		/** Source port for SRT-caller protocol. */
		sourceListenerPort?: number | null;

		/** The stream ID that you want to use for this transport. This parameter applies only to Zixi and SRT caller-based streams. */
		streamId?: string | null;

		/** The name of the VPC interface to use for this source. */
		vpcInterfaceName?: string | null;

		/** The range of IP addresses that should be allowed to contribute content to your source. These IP addresses should be in the form of a Classless Inter-Domain Routing (CIDR) block; for example, 10.0.0.0/16. */
		whitelistCidr?: string | null;

		/** The source configuration for cloud flows receiving a stream from a bridge. */
		gatewayBridgeSource?: UpdateFlowSourcePutBodyGatewayBridgeSource;
	}
	export interface UpdateFlowSourcePutBodyFormProperties {

		/** A description for the source. This value is not used or seen outside of the current AWS Elemental MediaConnect account. */
		description: FormControl<string | null | undefined>,

		/** The ARN of the entitlement that allows you to subscribe to this flow. The entitlement is set by the flow originator, and the ARN is generated as part of the originator's flow. */
		entitlementArn: FormControl<string | null | undefined>,

		/** The port that the flow will be listening on for incoming content. */
		ingestPort: FormControl<number | null | undefined>,

		/** The smoothing max bitrate (in bps) for RIST, RTP, and RTP-FEC streams. */
		maxBitrate: FormControl<number | null | undefined>,

		/** The maximum latency in milliseconds. This parameter applies only to RIST-based, Zixi-based, and Fujitsu-based streams. */
		maxLatency: FormControl<number | null | undefined>,

		/** The size of the buffer (in milliseconds) to use to sync incoming source data. */
		maxSyncBuffer: FormControl<number | null | undefined>,

		/** The minimum latency in milliseconds for SRT-based streams. In streams that use the SRT protocol, this value that you set on your MediaConnect source or output represents the minimal potential latency of that connection. The latency of the stream is set to the highest number between the sender’s minimum latency and the receiver’s minimum latency. */
		minLatency: FormControl<number | null | undefined>,

		/** The protocol that is used by the source. */
		protocol: FormControl<Protocol | null | undefined>,

		/** The port that the flow uses to send outbound requests to initiate connection with the sender. */
		senderControlPort: FormControl<number | null | undefined>,

		/** The IP address that the flow communicates with to initiate connection with the sender. */
		senderIpAddress: FormControl<string | null | undefined>,

		/** Source IP or domain name for SRT-caller protocol. */
		sourceListenerAddress: FormControl<string | null | undefined>,

		/** Source port for SRT-caller protocol. */
		sourceListenerPort: FormControl<number | null | undefined>,

		/** The stream ID that you want to use for this transport. This parameter applies only to Zixi and SRT caller-based streams. */
		streamId: FormControl<string | null | undefined>,

		/** The name of the VPC interface to use for this source. */
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
			maxSyncBuffer: new FormControl<number | null | undefined>(undefined),
			minLatency: new FormControl<number | null | undefined>(undefined),
			protocol: new FormControl<Protocol | null | undefined>(undefined),
			senderControlPort: new FormControl<number | null | undefined>(undefined),
			senderIpAddress: new FormControl<string | null | undefined>(undefined),
			sourceListenerAddress: new FormControl<string | null | undefined>(undefined),
			sourceListenerPort: new FormControl<number | null | undefined>(undefined),
			streamId: new FormControl<string | null | undefined>(undefined),
			vpcInterfaceName: new FormControl<string | null | undefined>(undefined),
			whitelistCidr: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateFlowSourcePutBodyDecryption {
		Algorithm?: Algorithm;
		ConstantInitializationVector?: string;
		DeviceId?: string;
		KeyType?: KeyType;
		Region?: string;
		ResourceId?: string;
		RoleArn?: string;
		SecretArn?: string;
		Url?: string;
	}
	export interface UpdateFlowSourcePutBodyDecryptionFormProperties {
		Algorithm: FormControl<Algorithm | null | undefined>,
		ConstantInitializationVector: FormControl<string | null | undefined>,
		DeviceId: FormControl<string | null | undefined>,
		KeyType: FormControl<KeyType | null | undefined>,
		Region: FormControl<string | null | undefined>,
		ResourceId: FormControl<string | null | undefined>,
		RoleArn: FormControl<string | null | undefined>,
		SecretArn: FormControl<string | null | undefined>,
		Url: FormControl<string | null | undefined>,
	}
	export function CreateUpdateFlowSourcePutBodyDecryptionFormGroup() {
		return new FormGroup<UpdateFlowSourcePutBodyDecryptionFormProperties>({
			Algorithm: new FormControl<Algorithm | null | undefined>(undefined),
			ConstantInitializationVector: new FormControl<string | null | undefined>(undefined),
			DeviceId: new FormControl<string | null | undefined>(undefined),
			KeyType: new FormControl<KeyType | null | undefined>(undefined),
			Region: new FormControl<string | null | undefined>(undefined),
			ResourceId: new FormControl<string | null | undefined>(undefined),
			RoleArn: new FormControl<string | null | undefined>(undefined),
			SecretArn: new FormControl<string | null | undefined>(undefined),
			Url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateFlowSourcePutBodyGatewayBridgeSource {
		BridgeArn?: string;
		VpcInterfaceAttachment?: VpcInterfaceAttachment;
	}
	export interface UpdateFlowSourcePutBodyGatewayBridgeSourceFormProperties {
		BridgeArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateFlowSourcePutBodyGatewayBridgeSourceFormGroup() {
		return new FormGroup<UpdateFlowSourcePutBodyGatewayBridgeSourceFormProperties>({
			BridgeArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateFlowEntitlementPutBody {

		/** A description of the entitlement. This description appears only on the AWS Elemental MediaConnect console and will not be seen by the subscriber or end user. */
		description?: string | null;

		/** Information about the encryption of the flow. */
		encryption?: UpdateFlowEntitlementPutBodyEncryption;

		/** An indication of whether you want to enable the entitlement to allow access, or disable it to stop streaming content to the subscriber’s flow temporarily. If you don’t specify the entitlementStatus field in your request, MediaConnect leaves the value unchanged. */
		entitlementStatus?: State | null;

		/** The AWS account IDs that you want to share your content with. The receiving accounts (subscribers) will be allowed to create their own flow using your content as the source. */
		subscribers?: Array<string>;
	}
	export interface UpdateFlowEntitlementPutBodyFormProperties {

		/** A description of the entitlement. This description appears only on the AWS Elemental MediaConnect console and will not be seen by the subscriber or end user. */
		description: FormControl<string | null | undefined>,

		/** An indication of whether you want to enable the entitlement to allow access, or disable it to stop streaming content to the subscriber’s flow temporarily. If you don’t specify the entitlementStatus field in your request, MediaConnect leaves the value unchanged. */
		entitlementStatus: FormControl<State | null | undefined>,
	}
	export function CreateUpdateFlowEntitlementPutBodyFormGroup() {
		return new FormGroup<UpdateFlowEntitlementPutBodyFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			entitlementStatus: new FormControl<State | null | undefined>(undefined),
		});

	}

	export interface UpdateFlowEntitlementPutBodyEncryption {
		Algorithm?: Algorithm;
		ConstantInitializationVector?: string;
		DeviceId?: string;
		KeyType?: KeyType;
		Region?: string;
		ResourceId?: string;
		RoleArn?: string;
		SecretArn?: string;
		Url?: string;
	}
	export interface UpdateFlowEntitlementPutBodyEncryptionFormProperties {
		Algorithm: FormControl<Algorithm | null | undefined>,
		ConstantInitializationVector: FormControl<string | null | undefined>,
		DeviceId: FormControl<string | null | undefined>,
		KeyType: FormControl<KeyType | null | undefined>,
		Region: FormControl<string | null | undefined>,
		ResourceId: FormControl<string | null | undefined>,
		RoleArn: FormControl<string | null | undefined>,
		SecretArn: FormControl<string | null | undefined>,
		Url: FormControl<string | null | undefined>,
	}
	export function CreateUpdateFlowEntitlementPutBodyEncryptionFormGroup() {
		return new FormGroup<UpdateFlowEntitlementPutBodyEncryptionFormProperties>({
			Algorithm: new FormControl<Algorithm | null | undefined>(undefined),
			ConstantInitializationVector: new FormControl<string | null | undefined>(undefined),
			DeviceId: new FormControl<string | null | undefined>(undefined),
			KeyType: new FormControl<KeyType | null | undefined>(undefined),
			Region: new FormControl<string | null | undefined>(undefined),
			ResourceId: new FormControl<string | null | undefined>(undefined),
			RoleArn: new FormControl<string | null | undefined>(undefined),
			SecretArn: new FormControl<string | null | undefined>(undefined),
			Url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateBridgeStatePutBody {

		/** Required */
		desiredState: DesiredState;
	}
	export interface UpdateBridgeStatePutBodyFormProperties {

		/** Required */
		desiredState: FormControl<DesiredState | null | undefined>,
	}
	export function CreateUpdateBridgeStatePutBodyFormGroup() {
		return new FormGroup<UpdateBridgeStatePutBodyFormProperties>({
			desiredState: new FormControl<DesiredState | null | undefined>(undefined, [Validators.required]),
		});

	}

}

