import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface AssociateAwsAccountWithPartnerAccountResponse {
		Sidewalk?: SidewalkAccountInfo;
		Arn?: string;
	}
	export interface AssociateAwsAccountWithPartnerAccountResponseFormProperties {
		Arn: FormControl<string | null | undefined>,
	}
	export function CreateAssociateAwsAccountWithPartnerAccountResponseFormGroup() {
		return new FormGroup<AssociateAwsAccountWithPartnerAccountResponseFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about a Sidewalk account. */
	export interface SidewalkAccountInfo {
		AmazonId?: string;
		AppServerPrivateKey?: string;
	}

	/** Information about a Sidewalk account. */
	export interface SidewalkAccountInfoFormProperties {
		AmazonId: FormControl<string | null | undefined>,
		AppServerPrivateKey: FormControl<string | null | undefined>,
	}
	export function CreateSidewalkAccountInfoFormGroup() {
		return new FormGroup<SidewalkAccountInfoFormProperties>({
			AmazonId: new FormControl<string | null | undefined>(undefined),
			AppServerPrivateKey: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A simple label consisting of a customer-defined key-value pair */
	export interface Tag {

		/** Required */
		Key: string;

		/** Required */
		Value: string;
	}

	/** A simple label consisting of a customer-defined key-value pair */
	export interface TagFormProperties {

		/** Required */
		Key: FormControl<string | null | undefined>,

		/** Required */
		Value: FormControl<string | null | undefined>,
	}
	export function CreateTagFormGroup() {
		return new FormGroup<TagFormProperties>({
			Key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ValidationException {
	}
	export interface ValidationExceptionFormProperties {
	}
	export function CreateValidationExceptionFormGroup() {
		return new FormGroup<ValidationExceptionFormProperties>({
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

	export interface InternalServerException {
	}
	export interface InternalServerExceptionFormProperties {
	}
	export function CreateInternalServerExceptionFormGroup() {
		return new FormGroup<InternalServerExceptionFormProperties>({
		});

	}

	export interface ThrottlingException {
	}
	export interface ThrottlingExceptionFormProperties {
	}
	export function CreateThrottlingExceptionFormGroup() {
		return new FormGroup<ThrottlingExceptionFormProperties>({
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

	export interface AccessDeniedException {
	}
	export interface AccessDeniedExceptionFormProperties {
	}
	export function CreateAccessDeniedExceptionFormGroup() {
		return new FormGroup<AccessDeniedExceptionFormProperties>({
		});

	}

	export interface AssociateMulticastGroupWithFuotaTaskResponse {
	}
	export interface AssociateMulticastGroupWithFuotaTaskResponseFormProperties {
	}
	export function CreateAssociateMulticastGroupWithFuotaTaskResponseFormGroup() {
		return new FormGroup<AssociateMulticastGroupWithFuotaTaskResponseFormProperties>({
		});

	}

	export interface AssociateWirelessDeviceWithFuotaTaskResponse {
	}
	export interface AssociateWirelessDeviceWithFuotaTaskResponseFormProperties {
	}
	export function CreateAssociateWirelessDeviceWithFuotaTaskResponseFormGroup() {
		return new FormGroup<AssociateWirelessDeviceWithFuotaTaskResponseFormProperties>({
		});

	}

	export interface AssociateWirelessDeviceWithMulticastGroupResponse {
	}
	export interface AssociateWirelessDeviceWithMulticastGroupResponseFormProperties {
	}
	export function CreateAssociateWirelessDeviceWithMulticastGroupResponseFormGroup() {
		return new FormGroup<AssociateWirelessDeviceWithMulticastGroupResponseFormProperties>({
		});

	}

	export interface AssociateWirelessDeviceWithThingResponse {
	}
	export interface AssociateWirelessDeviceWithThingResponseFormProperties {
	}
	export function CreateAssociateWirelessDeviceWithThingResponseFormGroup() {
		return new FormGroup<AssociateWirelessDeviceWithThingResponseFormProperties>({
		});

	}

	export interface AssociateWirelessGatewayWithCertificateResponse {
		IotCertificateId?: string;
	}
	export interface AssociateWirelessGatewayWithCertificateResponseFormProperties {
		IotCertificateId: FormControl<string | null | undefined>,
	}
	export function CreateAssociateWirelessGatewayWithCertificateResponseFormGroup() {
		return new FormGroup<AssociateWirelessGatewayWithCertificateResponseFormProperties>({
			IotCertificateId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AssociateWirelessGatewayWithThingResponse {
	}
	export interface AssociateWirelessGatewayWithThingResponseFormProperties {
	}
	export function CreateAssociateWirelessGatewayWithThingResponseFormGroup() {
		return new FormGroup<AssociateWirelessGatewayWithThingResponseFormProperties>({
		});

	}

	export interface CancelMulticastGroupSessionResponse {
	}
	export interface CancelMulticastGroupSessionResponseFormProperties {
	}
	export function CreateCancelMulticastGroupSessionResponseFormGroup() {
		return new FormGroup<CancelMulticastGroupSessionResponseFormProperties>({
		});

	}

	export interface CreateDestinationResponse {
		Arn?: string;
		Name?: string;
	}
	export interface CreateDestinationResponseFormProperties {
		Arn: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
	}
	export function CreateCreateDestinationResponseFormGroup() {
		return new FormGroup<CreateDestinationResponseFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateDeviceProfileResponse {
		Arn?: string;
		Id?: string;
	}
	export interface CreateDeviceProfileResponseFormProperties {
		Arn: FormControl<string | null | undefined>,
		Id: FormControl<string | null | undefined>,
	}
	export function CreateCreateDeviceProfileResponseFormGroup() {
		return new FormGroup<CreateDeviceProfileResponseFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateFuotaTaskResponse {

		/**
		 * The arn of a FUOTA task.
		 * Max length: 128
		 */
		Arn?: string | null;

		/**
		 * The ID of a FUOTA task.
		 * Max length: 256
		 */
		Id?: string | null;
	}
	export interface CreateFuotaTaskResponseFormProperties {

		/**
		 * The arn of a FUOTA task.
		 * Max length: 128
		 */
		Arn: FormControl<string | null | undefined>,

		/**
		 * The ID of a FUOTA task.
		 * Max length: 256
		 */
		Id: FormControl<string | null | undefined>,
	}
	export function CreateCreateFuotaTaskResponseFormGroup() {
		return new FormGroup<CreateFuotaTaskResponseFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128)]),
			Id: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256)]),
		});

	}


	/** Supported RfRegions */
	export enum SupportedRfRegion { EU868 = 'EU868', US915 = 'US915', AU915 = 'AU915', 'AS923-1' = 'AS923-1', 'AS923-2' = 'AS923-2', 'AS923-3' = 'AS923-3', 'AS923-4' = 'AS923-4', EU433 = 'EU433', CN470 = 'CN470', CN779 = 'CN779', RU864 = 'RU864', KR920 = 'KR920', IN865 = 'IN865' }

	export interface CreateMulticastGroupResponse {

		/**
		 * The arn of the multicast group.
		 * Max length: 128
		 */
		Arn?: string | null;

		/**
		 * The ID of the multicast group.
		 * Max length: 256
		 */
		Id?: string | null;
	}
	export interface CreateMulticastGroupResponseFormProperties {

		/**
		 * The arn of the multicast group.
		 * Max length: 128
		 */
		Arn: FormControl<string | null | undefined>,

		/**
		 * The ID of the multicast group.
		 * Max length: 256
		 */
		Id: FormControl<string | null | undefined>,
	}
	export function CreateCreateMulticastGroupResponseFormGroup() {
		return new FormGroup<CreateMulticastGroupResponseFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128)]),
			Id: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256)]),
		});

	}


	/** DlClass for LoRaWAM, valid values are ClassB and ClassC. */
	export enum DlClass { ClassB = 'ClassB', ClassC = 'ClassC' }

	export interface CreateNetworkAnalyzerConfigurationResponse {
		Arn?: string;

		/**
		 * Name of the network analyzer configuration.
		 * Min length: 1
		 * Max length: 1024
		 */
		Name?: string | null;
	}
	export interface CreateNetworkAnalyzerConfigurationResponseFormProperties {
		Arn: FormControl<string | null | undefined>,

		/**
		 * Name of the network analyzer configuration.
		 * Min length: 1
		 * Max length: 1024
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateCreateNetworkAnalyzerConfigurationResponseFormGroup() {
		return new FormGroup<CreateNetworkAnalyzerConfigurationResponseFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024), Validators.pattern('[a-zA-Z0-9-_]+')]),
		});

	}


	/**  <code>FrameInfo</code> of your wireless device resources for the trace content. Use FrameInfo to debug the communication between your LoRaWAN end devices and the network server. */
	export enum WirelessDeviceFrameInfo { ENABLED = 'ENABLED', DISABLED = 'DISABLED' }


	/** The log level for a log message. The log levels can be disabled, or set to <code>ERROR</code> to display less verbose logs containing only error information, or to <code>INFO</code> for more detailed logs. */
	export enum LogLevel { INFO = 'INFO', ERROR = 'ERROR', DISABLED = 'DISABLED' }


	/**  <code>FrameInfo</code> of your multicast group resources for the trace content. Use FrameInfo to debug the multicast communication between your LoRaWAN end devices and the network server. */
	export enum MulticastFrameInfo { ENABLED = 'ENABLED', DISABLED = 'DISABLED' }

	export interface CreateServiceProfileResponse {
		Arn?: string;
		Id?: string;
	}
	export interface CreateServiceProfileResponseFormProperties {
		Arn: FormControl<string | null | undefined>,
		Id: FormControl<string | null | undefined>,
	}
	export function CreateCreateServiceProfileResponseFormGroup() {
		return new FormGroup<CreateServiceProfileResponseFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateWirelessDeviceResponse {
		Arn?: string;
		Id?: string;
	}
	export interface CreateWirelessDeviceResponseFormProperties {
		Arn: FormControl<string | null | undefined>,
		Id: FormControl<string | null | undefined>,
	}
	export function CreateCreateWirelessDeviceResponseFormGroup() {
		return new FormGroup<CreateWirelessDeviceResponseFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** OTAA device object for v1.1 */
	export interface OtaaV1_1 {
		AppKey?: string;
		NwkKey?: string;
		JoinEui?: string;
	}

	/** OTAA device object for v1.1 */
	export interface OtaaV1_1FormProperties {
		AppKey: FormControl<string | null | undefined>,
		NwkKey: FormControl<string | null | undefined>,
		JoinEui: FormControl<string | null | undefined>,
	}
	export function CreateOtaaV1_1FormGroup() {
		return new FormGroup<OtaaV1_1FormProperties>({
			AppKey: new FormControl<string | null | undefined>(undefined),
			NwkKey: new FormControl<string | null | undefined>(undefined),
			JoinEui: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** OTAA device object for v1.0.x */
	export interface OtaaV1_0_x {
		AppKey?: string;
		AppEui?: string;
		GenAppKey?: string;
	}

	/** OTAA device object for v1.0.x */
	export interface OtaaV1_0_xFormProperties {
		AppKey: FormControl<string | null | undefined>,
		AppEui: FormControl<string | null | undefined>,
		GenAppKey: FormControl<string | null | undefined>,
	}
	export function CreateOtaaV1_0_xFormGroup() {
		return new FormGroup<OtaaV1_0_xFormProperties>({
			AppKey: new FormControl<string | null | undefined>(undefined),
			AppEui: new FormControl<string | null | undefined>(undefined),
			GenAppKey: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** ABP device object for LoRaWAN specification v1.1 */
	export interface AbpV1_1 {
		DevAddr?: string;
		SessionKeys?: SessionKeysAbpV1_1;
		FCntStart?: number | null;
	}

	/** ABP device object for LoRaWAN specification v1.1 */
	export interface AbpV1_1FormProperties {
		DevAddr: FormControl<string | null | undefined>,
		FCntStart: FormControl<number | null | undefined>,
	}
	export function CreateAbpV1_1FormGroup() {
		return new FormGroup<AbpV1_1FormProperties>({
			DevAddr: new FormControl<string | null | undefined>(undefined),
			FCntStart: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Session keys for ABP v1.1 */
	export interface SessionKeysAbpV1_1 {
		FNwkSIntKey?: string;
		SNwkSIntKey?: string;
		NwkSEncKey?: string;
		AppSKey?: string;
	}

	/** Session keys for ABP v1.1 */
	export interface SessionKeysAbpV1_1FormProperties {
		FNwkSIntKey: FormControl<string | null | undefined>,
		SNwkSIntKey: FormControl<string | null | undefined>,
		NwkSEncKey: FormControl<string | null | undefined>,
		AppSKey: FormControl<string | null | undefined>,
	}
	export function CreateSessionKeysAbpV1_1FormGroup() {
		return new FormGroup<SessionKeysAbpV1_1FormProperties>({
			FNwkSIntKey: new FormControl<string | null | undefined>(undefined),
			SNwkSIntKey: new FormControl<string | null | undefined>(undefined),
			NwkSEncKey: new FormControl<string | null | undefined>(undefined),
			AppSKey: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** ABP device object for LoRaWAN specification v1.0.x */
	export interface AbpV1_0_x {
		DevAddr?: string;
		SessionKeys?: SessionKeysAbpV1_0_x;
		FCntStart?: number | null;
	}

	/** ABP device object for LoRaWAN specification v1.0.x */
	export interface AbpV1_0_xFormProperties {
		DevAddr: FormControl<string | null | undefined>,
		FCntStart: FormControl<number | null | undefined>,
	}
	export function CreateAbpV1_0_xFormGroup() {
		return new FormGroup<AbpV1_0_xFormProperties>({
			DevAddr: new FormControl<string | null | undefined>(undefined),
			FCntStart: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Session keys for ABP v1.1 */
	export interface SessionKeysAbpV1_0_x {
		NwkSKey?: string;
		AppSKey?: string;
	}

	/** Session keys for ABP v1.1 */
	export interface SessionKeysAbpV1_0_xFormProperties {
		NwkSKey: FormControl<string | null | undefined>,
		AppSKey: FormControl<string | null | undefined>,
	}
	export function CreateSessionKeysAbpV1_0_xFormGroup() {
		return new FormGroup<SessionKeysAbpV1_0_xFormProperties>({
			NwkSKey: new FormControl<string | null | undefined>(undefined),
			AppSKey: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** List of FPort assigned for different LoRaWAN application packages to use */
	export interface FPorts {

		/**
		 * The Fport value.
		 * Minimum: 1
		 * Maximum: 223
		 */
		Fuota?: number | null;

		/**
		 * The Fport value.
		 * Minimum: 1
		 * Maximum: 223
		 */
		Multicast?: number | null;

		/**
		 * The Fport value.
		 * Minimum: 1
		 * Maximum: 223
		 */
		ClockSync?: number | null;
		Positioning?: Positioning;
		Applications?: Array<ApplicationConfig>;
	}

	/** List of FPort assigned for different LoRaWAN application packages to use */
	export interface FPortsFormProperties {

		/**
		 * The Fport value.
		 * Minimum: 1
		 * Maximum: 223
		 */
		Fuota: FormControl<number | null | undefined>,

		/**
		 * The Fport value.
		 * Minimum: 1
		 * Maximum: 223
		 */
		Multicast: FormControl<number | null | undefined>,

		/**
		 * The Fport value.
		 * Minimum: 1
		 * Maximum: 223
		 */
		ClockSync: FormControl<number | null | undefined>,
	}
	export function CreateFPortsFormGroup() {
		return new FormGroup<FPortsFormProperties>({
			Fuota: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(223)]),
			Multicast: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(223)]),
			ClockSync: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(223)]),
		});

	}


	/** The FPorts for the position information. */
	export interface Positioning {

		/**
		 * The Fport value.
		 * Minimum: 1
		 * Maximum: 223
		 */
		ClockSync?: number | null;

		/**
		 * The Fport value.
		 * Minimum: 1
		 * Maximum: 223
		 */
		Stream?: number | null;

		/**
		 * The Fport value.
		 * Minimum: 1
		 * Maximum: 223
		 */
		Gnss?: number | null;
	}

	/** The FPorts for the position information. */
	export interface PositioningFormProperties {

		/**
		 * The Fport value.
		 * Minimum: 1
		 * Maximum: 223
		 */
		ClockSync: FormControl<number | null | undefined>,

		/**
		 * The Fport value.
		 * Minimum: 1
		 * Maximum: 223
		 */
		Stream: FormControl<number | null | undefined>,

		/**
		 * The Fport value.
		 * Minimum: 1
		 * Maximum: 223
		 */
		Gnss: FormControl<number | null | undefined>,
	}
	export function CreatePositioningFormGroup() {
		return new FormGroup<PositioningFormProperties>({
			ClockSync: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(223)]),
			Stream: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(223)]),
			Gnss: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(223)]),
		});

	}


	/** LoRaWAN application configuration, which can be used to perform geolocation. */
	export interface ApplicationConfig {

		/**
		 * The Fport value.
		 * Minimum: 1
		 * Maximum: 223
		 */
		FPort?: number | null;
		Type?: ApplicationConfigType;
		DestinationName?: string;
	}

	/** LoRaWAN application configuration, which can be used to perform geolocation. */
	export interface ApplicationConfigFormProperties {

		/**
		 * The Fport value.
		 * Minimum: 1
		 * Maximum: 223
		 */
		FPort: FormControl<number | null | undefined>,
		Type: FormControl<ApplicationConfigType | null | undefined>,
		DestinationName: FormControl<string | null | undefined>,
	}
	export function CreateApplicationConfigFormGroup() {
		return new FormGroup<ApplicationConfigFormProperties>({
			FPort: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(223)]),
			Type: new FormControl<ApplicationConfigType | null | undefined>(undefined),
			DestinationName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ApplicationConfigType { SemtechGeolocation = 'SemtechGeolocation' }

	export interface CreateWirelessGatewayResponse {
		Arn?: string;
		Id?: string;
	}
	export interface CreateWirelessGatewayResponseFormProperties {
		Arn: FormControl<string | null | undefined>,
		Id: FormControl<string | null | undefined>,
	}
	export function CreateCreateWirelessGatewayResponseFormGroup() {
		return new FormGroup<CreateWirelessGatewayResponseFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Beaconing parameters for configuring the wireless gateways. */
	export interface Beaconing {
		DataRate?: number | null;
		Frequencies?: Array<number> | null;
	}

	/** Beaconing parameters for configuring the wireless gateways. */
	export interface BeaconingFormProperties {
		DataRate: FormControl<number | null | undefined>,
	}
	export function CreateBeaconingFormGroup() {
		return new FormGroup<BeaconingFormProperties>({
			DataRate: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CreateWirelessGatewayTaskResponse {
		WirelessGatewayTaskDefinitionId?: string;
		Status?: WirelessGatewayTaskStatus;
	}
	export interface CreateWirelessGatewayTaskResponseFormProperties {
		WirelessGatewayTaskDefinitionId: FormControl<string | null | undefined>,
		Status: FormControl<WirelessGatewayTaskStatus | null | undefined>,
	}
	export function CreateCreateWirelessGatewayTaskResponseFormGroup() {
		return new FormGroup<CreateWirelessGatewayTaskResponseFormProperties>({
			WirelessGatewayTaskDefinitionId: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<WirelessGatewayTaskStatus | null | undefined>(undefined),
		});

	}

	export enum WirelessGatewayTaskStatus { PENDING = 'PENDING', IN_PROGRESS = 'IN_PROGRESS', FIRST_RETRY = 'FIRST_RETRY', SECOND_RETRY = 'SECOND_RETRY', COMPLETED = 'COMPLETED', FAILED = 'FAILED' }

	export interface CreateWirelessGatewayTaskDefinitionResponse {
		Id?: string;
		Arn?: string;
	}
	export interface CreateWirelessGatewayTaskDefinitionResponseFormProperties {
		Id: FormControl<string | null | undefined>,
		Arn: FormControl<string | null | undefined>,
	}
	export function CreateCreateWirelessGatewayTaskDefinitionResponseFormGroup() {
		return new FormGroup<CreateWirelessGatewayTaskDefinitionResponseFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			Arn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** LoRaWANUpdateGatewayTaskCreate object. */
	export interface LoRaWANUpdateGatewayTaskCreate {
		UpdateSignature?: string;
		SigKeyCrc?: number | null;
		CurrentVersion?: LoRaWANGatewayVersion;
		UpdateVersion?: LoRaWANGatewayVersion;
	}

	/** LoRaWANUpdateGatewayTaskCreate object. */
	export interface LoRaWANUpdateGatewayTaskCreateFormProperties {
		UpdateSignature: FormControl<string | null | undefined>,
		SigKeyCrc: FormControl<number | null | undefined>,
	}
	export function CreateLoRaWANUpdateGatewayTaskCreateFormGroup() {
		return new FormGroup<LoRaWANUpdateGatewayTaskCreateFormProperties>({
			UpdateSignature: new FormControl<string | null | undefined>(undefined),
			SigKeyCrc: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** LoRaWANGatewayVersion object. */
	export interface LoRaWANGatewayVersion {
		PackageVersion?: string;
		Model?: string;
		Station?: string;
	}

	/** LoRaWANGatewayVersion object. */
	export interface LoRaWANGatewayVersionFormProperties {
		PackageVersion: FormControl<string | null | undefined>,
		Model: FormControl<string | null | undefined>,
		Station: FormControl<string | null | undefined>,
	}
	export function CreateLoRaWANGatewayVersionFormGroup() {
		return new FormGroup<LoRaWANGatewayVersionFormProperties>({
			PackageVersion: new FormControl<string | null | undefined>(undefined),
			Model: new FormControl<string | null | undefined>(undefined),
			Station: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteDestinationResponse {
	}
	export interface DeleteDestinationResponseFormProperties {
	}
	export function CreateDeleteDestinationResponseFormGroup() {
		return new FormGroup<DeleteDestinationResponseFormProperties>({
		});

	}

	export interface DeleteDeviceProfileResponse {
	}
	export interface DeleteDeviceProfileResponseFormProperties {
	}
	export function CreateDeleteDeviceProfileResponseFormGroup() {
		return new FormGroup<DeleteDeviceProfileResponseFormProperties>({
		});

	}

	export interface DeleteFuotaTaskResponse {
	}
	export interface DeleteFuotaTaskResponseFormProperties {
	}
	export function CreateDeleteFuotaTaskResponseFormGroup() {
		return new FormGroup<DeleteFuotaTaskResponseFormProperties>({
		});

	}

	export interface DeleteMulticastGroupResponse {
	}
	export interface DeleteMulticastGroupResponseFormProperties {
	}
	export function CreateDeleteMulticastGroupResponseFormGroup() {
		return new FormGroup<DeleteMulticastGroupResponseFormProperties>({
		});

	}

	export interface DeleteNetworkAnalyzerConfigurationResponse {
	}
	export interface DeleteNetworkAnalyzerConfigurationResponseFormProperties {
	}
	export function CreateDeleteNetworkAnalyzerConfigurationResponseFormGroup() {
		return new FormGroup<DeleteNetworkAnalyzerConfigurationResponseFormProperties>({
		});

	}

	export interface DeleteQueuedMessagesResponse {
	}
	export interface DeleteQueuedMessagesResponseFormProperties {
	}
	export function CreateDeleteQueuedMessagesResponseFormGroup() {
		return new FormGroup<DeleteQueuedMessagesResponseFormProperties>({
		});

	}

	export interface DeleteServiceProfileResponse {
	}
	export interface DeleteServiceProfileResponseFormProperties {
	}
	export function CreateDeleteServiceProfileResponseFormGroup() {
		return new FormGroup<DeleteServiceProfileResponseFormProperties>({
		});

	}

	export interface DeleteWirelessDeviceResponse {
	}
	export interface DeleteWirelessDeviceResponseFormProperties {
	}
	export function CreateDeleteWirelessDeviceResponseFormGroup() {
		return new FormGroup<DeleteWirelessDeviceResponseFormProperties>({
		});

	}

	export interface DeleteWirelessDeviceImportTaskResponse {
	}
	export interface DeleteWirelessDeviceImportTaskResponseFormProperties {
	}
	export function CreateDeleteWirelessDeviceImportTaskResponseFormGroup() {
		return new FormGroup<DeleteWirelessDeviceImportTaskResponseFormProperties>({
		});

	}

	export interface DeleteWirelessGatewayResponse {
	}
	export interface DeleteWirelessGatewayResponseFormProperties {
	}
	export function CreateDeleteWirelessGatewayResponseFormGroup() {
		return new FormGroup<DeleteWirelessGatewayResponseFormProperties>({
		});

	}

	export interface DeleteWirelessGatewayTaskResponse {
	}
	export interface DeleteWirelessGatewayTaskResponseFormProperties {
	}
	export function CreateDeleteWirelessGatewayTaskResponseFormGroup() {
		return new FormGroup<DeleteWirelessGatewayTaskResponseFormProperties>({
		});

	}

	export interface DeleteWirelessGatewayTaskDefinitionResponse {
	}
	export interface DeleteWirelessGatewayTaskDefinitionResponseFormProperties {
	}
	export function CreateDeleteWirelessGatewayTaskDefinitionResponseFormGroup() {
		return new FormGroup<DeleteWirelessGatewayTaskDefinitionResponseFormProperties>({
		});

	}

	export interface DeregisterWirelessDeviceResponse {
	}
	export interface DeregisterWirelessDeviceResponseFormProperties {
	}
	export function CreateDeregisterWirelessDeviceResponseFormGroup() {
		return new FormGroup<DeregisterWirelessDeviceResponseFormProperties>({
		});

	}

	export interface DisassociateAwsAccountFromPartnerAccountResponse {
	}
	export interface DisassociateAwsAccountFromPartnerAccountResponseFormProperties {
	}
	export function CreateDisassociateAwsAccountFromPartnerAccountResponseFormGroup() {
		return new FormGroup<DisassociateAwsAccountFromPartnerAccountResponseFormProperties>({
		});

	}

	export interface DisassociateMulticastGroupFromFuotaTaskResponse {
	}
	export interface DisassociateMulticastGroupFromFuotaTaskResponseFormProperties {
	}
	export function CreateDisassociateMulticastGroupFromFuotaTaskResponseFormGroup() {
		return new FormGroup<DisassociateMulticastGroupFromFuotaTaskResponseFormProperties>({
		});

	}

	export interface DisassociateWirelessDeviceFromFuotaTaskResponse {
	}
	export interface DisassociateWirelessDeviceFromFuotaTaskResponseFormProperties {
	}
	export function CreateDisassociateWirelessDeviceFromFuotaTaskResponseFormGroup() {
		return new FormGroup<DisassociateWirelessDeviceFromFuotaTaskResponseFormProperties>({
		});

	}

	export interface DisassociateWirelessDeviceFromMulticastGroupResponse {
	}
	export interface DisassociateWirelessDeviceFromMulticastGroupResponseFormProperties {
	}
	export function CreateDisassociateWirelessDeviceFromMulticastGroupResponseFormGroup() {
		return new FormGroup<DisassociateWirelessDeviceFromMulticastGroupResponseFormProperties>({
		});

	}

	export interface DisassociateWirelessDeviceFromThingResponse {
	}
	export interface DisassociateWirelessDeviceFromThingResponseFormProperties {
	}
	export function CreateDisassociateWirelessDeviceFromThingResponseFormGroup() {
		return new FormGroup<DisassociateWirelessDeviceFromThingResponseFormProperties>({
		});

	}

	export interface DisassociateWirelessGatewayFromCertificateResponse {
	}
	export interface DisassociateWirelessGatewayFromCertificateResponseFormProperties {
	}
	export function CreateDisassociateWirelessGatewayFromCertificateResponseFormGroup() {
		return new FormGroup<DisassociateWirelessGatewayFromCertificateResponseFormProperties>({
		});

	}

	export interface DisassociateWirelessGatewayFromThingResponse {
	}
	export interface DisassociateWirelessGatewayFromThingResponseFormProperties {
	}
	export function CreateDisassociateWirelessGatewayFromThingResponseFormGroup() {
		return new FormGroup<DisassociateWirelessGatewayFromThingResponseFormProperties>({
		});

	}

	export interface GetDestinationResponse {
		Arn?: string;
		Name?: string;
		Expression?: string;
		ExpressionType?: ExpressionType;
		Description?: string;
		RoleArn?: string;
	}
	export interface GetDestinationResponseFormProperties {
		Arn: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Expression: FormControl<string | null | undefined>,
		ExpressionType: FormControl<ExpressionType | null | undefined>,
		Description: FormControl<string | null | undefined>,
		RoleArn: FormControl<string | null | undefined>,
	}
	export function CreateGetDestinationResponseFormGroup() {
		return new FormGroup<GetDestinationResponseFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Expression: new FormControl<string | null | undefined>(undefined),
			ExpressionType: new FormControl<ExpressionType | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			RoleArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ExpressionType { RuleName = 'RuleName', MqttTopic = 'MqttTopic' }

	export interface GetDeviceProfileResponse {
		Arn?: string;
		Name?: string;
		Id?: string;
		LoRaWAN?: LoRaWANDeviceProfile;
		Sidewalk?: SidewalkGetDeviceProfile;
	}
	export interface GetDeviceProfileResponseFormProperties {
		Arn: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Id: FormControl<string | null | undefined>,
	}
	export function CreateGetDeviceProfileResponseFormGroup() {
		return new FormGroup<GetDeviceProfileResponseFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** LoRaWANDeviceProfile object. */
	export interface LoRaWANDeviceProfile {
		SupportsClassB?: boolean | null;
		ClassBTimeout?: number | null;
		PingSlotPeriod?: number | null;
		PingSlotDr?: number | null;
		PingSlotFreq?: number | null;
		SupportsClassC?: boolean | null;
		ClassCTimeout?: number | null;
		MacVersion?: string;
		RegParamsRevision?: string;
		RxDelay1?: number | null;
		RxDrOffset1?: number | null;
		RxDataRate2?: number | null;
		RxFreq2?: number | null;
		FactoryPresetFreqsList?: Array<number> | null;
		MaxEirp?: number | null;
		MaxDutyCycle?: number | null;
		RfRegion?: string;
		SupportsJoin?: boolean | null;
		Supports32BitFCnt?: boolean | null;
	}

	/** LoRaWANDeviceProfile object. */
	export interface LoRaWANDeviceProfileFormProperties {
		SupportsClassB: FormControl<boolean | null | undefined>,
		ClassBTimeout: FormControl<number | null | undefined>,
		PingSlotPeriod: FormControl<number | null | undefined>,
		PingSlotDr: FormControl<number | null | undefined>,
		PingSlotFreq: FormControl<number | null | undefined>,
		SupportsClassC: FormControl<boolean | null | undefined>,
		ClassCTimeout: FormControl<number | null | undefined>,
		MacVersion: FormControl<string | null | undefined>,
		RegParamsRevision: FormControl<string | null | undefined>,
		RxDelay1: FormControl<number | null | undefined>,
		RxDrOffset1: FormControl<number | null | undefined>,
		RxDataRate2: FormControl<number | null | undefined>,
		RxFreq2: FormControl<number | null | undefined>,
		MaxEirp: FormControl<number | null | undefined>,
		MaxDutyCycle: FormControl<number | null | undefined>,
		RfRegion: FormControl<string | null | undefined>,
		SupportsJoin: FormControl<boolean | null | undefined>,
		Supports32BitFCnt: FormControl<boolean | null | undefined>,
	}
	export function CreateLoRaWANDeviceProfileFormGroup() {
		return new FormGroup<LoRaWANDeviceProfileFormProperties>({
			SupportsClassB: new FormControl<boolean | null | undefined>(undefined),
			ClassBTimeout: new FormControl<number | null | undefined>(undefined),
			PingSlotPeriod: new FormControl<number | null | undefined>(undefined),
			PingSlotDr: new FormControl<number | null | undefined>(undefined),
			PingSlotFreq: new FormControl<number | null | undefined>(undefined),
			SupportsClassC: new FormControl<boolean | null | undefined>(undefined),
			ClassCTimeout: new FormControl<number | null | undefined>(undefined),
			MacVersion: new FormControl<string | null | undefined>(undefined),
			RegParamsRevision: new FormControl<string | null | undefined>(undefined),
			RxDelay1: new FormControl<number | null | undefined>(undefined),
			RxDrOffset1: new FormControl<number | null | undefined>(undefined),
			RxDataRate2: new FormControl<number | null | undefined>(undefined),
			RxFreq2: new FormControl<number | null | undefined>(undefined),
			MaxEirp: new FormControl<number | null | undefined>(undefined),
			MaxDutyCycle: new FormControl<number | null | undefined>(undefined),
			RfRegion: new FormControl<string | null | undefined>(undefined),
			SupportsJoin: new FormControl<boolean | null | undefined>(undefined),
			Supports32BitFCnt: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Gets information about a Sidewalk device profile. */
	export interface SidewalkGetDeviceProfile {
		ApplicationServerPublicKey?: string;
		QualificationStatus?: boolean | null;
		DakCertificateMetadata?: Array<DakCertificateMetadata>;
	}

	/** Gets information about a Sidewalk device profile. */
	export interface SidewalkGetDeviceProfileFormProperties {
		ApplicationServerPublicKey: FormControl<string | null | undefined>,
		QualificationStatus: FormControl<boolean | null | undefined>,
	}
	export function CreateSidewalkGetDeviceProfileFormGroup() {
		return new FormGroup<SidewalkGetDeviceProfileFormProperties>({
			ApplicationServerPublicKey: new FormControl<string | null | undefined>(undefined),
			QualificationStatus: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** The device attestation key (DAK) information. */
	export interface DakCertificateMetadata {

		/** Required */
		CertificateId: string;
		MaxAllowedSignature?: number | null;
		FactorySupport?: boolean | null;
		ApId?: string;
		DeviceTypeId?: string;
	}

	/** The device attestation key (DAK) information. */
	export interface DakCertificateMetadataFormProperties {

		/** Required */
		CertificateId: FormControl<string | null | undefined>,
		MaxAllowedSignature: FormControl<number | null | undefined>,
		FactorySupport: FormControl<boolean | null | undefined>,
		ApId: FormControl<string | null | undefined>,
		DeviceTypeId: FormControl<string | null | undefined>,
	}
	export function CreateDakCertificateMetadataFormGroup() {
		return new FormGroup<DakCertificateMetadataFormProperties>({
			CertificateId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MaxAllowedSignature: new FormControl<number | null | undefined>(undefined),
			FactorySupport: new FormControl<boolean | null | undefined>(undefined),
			ApId: new FormControl<string | null | undefined>(undefined),
			DeviceTypeId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetEventConfigurationByResourceTypesResponse {
		DeviceRegistrationState?: DeviceRegistrationStateResourceTypeEventConfiguration;
		Proximity?: ProximityResourceTypeEventConfiguration;
		Join?: JoinResourceTypeEventConfiguration;
		ConnectionStatus?: ConnectionStatusResourceTypeEventConfiguration;
		MessageDeliveryStatus?: MessageDeliveryStatusResourceTypeEventConfiguration;
	}
	export interface GetEventConfigurationByResourceTypesResponseFormProperties {
	}
	export function CreateGetEventConfigurationByResourceTypesResponseFormGroup() {
		return new FormGroup<GetEventConfigurationByResourceTypesResponseFormProperties>({
		});

	}


	/** Device registration state resource type event configuration object for enabling or disabling topic. */
	export interface DeviceRegistrationStateResourceTypeEventConfiguration {
		Sidewalk?: SidewalkResourceTypeEventConfiguration;
	}

	/** Device registration state resource type event configuration object for enabling or disabling topic. */
	export interface DeviceRegistrationStateResourceTypeEventConfigurationFormProperties {
	}
	export function CreateDeviceRegistrationStateResourceTypeEventConfigurationFormGroup() {
		return new FormGroup<DeviceRegistrationStateResourceTypeEventConfigurationFormProperties>({
		});

	}


	/** Sidewalk resource type event configuration object for enabling or disabling topic. */
	export interface SidewalkResourceTypeEventConfiguration {
		WirelessDeviceEventTopic?: EventNotificationTopicStatus;
	}

	/** Sidewalk resource type event configuration object for enabling or disabling topic. */
	export interface SidewalkResourceTypeEventConfigurationFormProperties {
		WirelessDeviceEventTopic: FormControl<EventNotificationTopicStatus | null | undefined>,
	}
	export function CreateSidewalkResourceTypeEventConfigurationFormGroup() {
		return new FormGroup<SidewalkResourceTypeEventConfigurationFormProperties>({
			WirelessDeviceEventTopic: new FormControl<EventNotificationTopicStatus | null | undefined>(undefined),
		});

	}

	export enum EventNotificationTopicStatus { Enabled = 'Enabled', Disabled = 'Disabled' }


	/** Proximity resource type event configuration object for enabling or disabling topic. */
	export interface ProximityResourceTypeEventConfiguration {
		Sidewalk?: SidewalkResourceTypeEventConfiguration;
	}

	/** Proximity resource type event configuration object for enabling or disabling topic. */
	export interface ProximityResourceTypeEventConfigurationFormProperties {
	}
	export function CreateProximityResourceTypeEventConfigurationFormGroup() {
		return new FormGroup<ProximityResourceTypeEventConfigurationFormProperties>({
		});

	}


	/** Join resource type event configuration object for enabling or disabling topic. */
	export interface JoinResourceTypeEventConfiguration {
		LoRaWAN?: LoRaWANJoinResourceTypeEventConfiguration;
	}

	/** Join resource type event configuration object for enabling or disabling topic. */
	export interface JoinResourceTypeEventConfigurationFormProperties {
	}
	export function CreateJoinResourceTypeEventConfigurationFormGroup() {
		return new FormGroup<JoinResourceTypeEventConfigurationFormProperties>({
		});

	}


	/** Object for LoRaWAN join resource type event configuration. */
	export interface LoRaWANJoinResourceTypeEventConfiguration {
		WirelessDeviceEventTopic?: EventNotificationTopicStatus;
	}

	/** Object for LoRaWAN join resource type event configuration. */
	export interface LoRaWANJoinResourceTypeEventConfigurationFormProperties {
		WirelessDeviceEventTopic: FormControl<EventNotificationTopicStatus | null | undefined>,
	}
	export function CreateLoRaWANJoinResourceTypeEventConfigurationFormGroup() {
		return new FormGroup<LoRaWANJoinResourceTypeEventConfigurationFormProperties>({
			WirelessDeviceEventTopic: new FormControl<EventNotificationTopicStatus | null | undefined>(undefined),
		});

	}


	/** Connection status resource type event configuration object for enabling or disabling topic. */
	export interface ConnectionStatusResourceTypeEventConfiguration {
		LoRaWAN?: LoRaWANConnectionStatusResourceTypeEventConfiguration;
	}

	/** Connection status resource type event configuration object for enabling or disabling topic. */
	export interface ConnectionStatusResourceTypeEventConfigurationFormProperties {
	}
	export function CreateConnectionStatusResourceTypeEventConfigurationFormGroup() {
		return new FormGroup<ConnectionStatusResourceTypeEventConfigurationFormProperties>({
		});

	}


	/** Object for LoRaWAN connection status resource type event configuration. */
	export interface LoRaWANConnectionStatusResourceTypeEventConfiguration {
		WirelessGatewayEventTopic?: EventNotificationTopicStatus;
	}

	/** Object for LoRaWAN connection status resource type event configuration. */
	export interface LoRaWANConnectionStatusResourceTypeEventConfigurationFormProperties {
		WirelessGatewayEventTopic: FormControl<EventNotificationTopicStatus | null | undefined>,
	}
	export function CreateLoRaWANConnectionStatusResourceTypeEventConfigurationFormGroup() {
		return new FormGroup<LoRaWANConnectionStatusResourceTypeEventConfigurationFormProperties>({
			WirelessGatewayEventTopic: new FormControl<EventNotificationTopicStatus | null | undefined>(undefined),
		});

	}


	/** Message delivery status resource type event configuration object for enabling or disabling relevant topic. */
	export interface MessageDeliveryStatusResourceTypeEventConfiguration {

		/** Sidewalk resource type event configuration object for enabling or disabling topic. */
		Sidewalk?: SidewalkResourceTypeEventConfiguration;
	}

	/** Message delivery status resource type event configuration object for enabling or disabling relevant topic. */
	export interface MessageDeliveryStatusResourceTypeEventConfigurationFormProperties {
	}
	export function CreateMessageDeliveryStatusResourceTypeEventConfigurationFormGroup() {
		return new FormGroup<MessageDeliveryStatusResourceTypeEventConfigurationFormProperties>({
		});

	}

	export interface GetFuotaTaskResponse {

		/**
		 * The arn of a FUOTA task.
		 * Max length: 128
		 */
		Arn?: string | null;

		/**
		 * The ID of a FUOTA task.
		 * Max length: 256
		 */
		Id?: string | null;

		/** The status of a FUOTA task. */
		Status?: GetFuotaTaskResponseStatus | null;

		/**
		 * The name of a FUOTA task.
		 * Max length: 256
		 */
		Name?: string | null;

		/**
		 * The description of the new resource.
		 * Max length: 2048
		 */
		Description?: string | null;

		/** The LoRaWAN information returned from getting a FUOTA task. */
		LoRaWAN?: LoRaWANFuotaTaskGetInfo;

		/**
		 * The S3 URI points to a firmware update image that is to be used with a FUOTA task.
		 * Min length: 1
		 * Max length: 4096
		 */
		FirmwareUpdateImage?: string | null;

		/**
		 * The firmware update role that is to be used with a FUOTA task.
		 * Min length: 1
		 * Max length: 2048
		 */
		FirmwareUpdateRole?: string | null;

		/** Created at timestamp for the resource. */
		CreatedAt?: Date | null;

		/**
		 * The percentage of the added fragments that are redundant. For example, if the size of the firmware image file is 100 bytes and the fragment size is 10 bytes, with <code>RedundancyPercent</code> set to 50(%), the final number of encoded fragments is (100 / 10) + (100 / 10 * 50%) = 15.
		 * Minimum: 0
		 * Maximum: 100
		 */
		RedundancyPercent?: number | null;

		/**
		 * The size of each fragment in bytes. This parameter is supported only for FUOTA tasks with multicast groups.
		 * Minimum: 1
		 */
		FragmentSizeBytes?: number | null;

		/**
		 * <p>The interval for sending fragments in milliseconds, rounded to the nearest second.</p> <note> <p>This interval only determines the timing for when the Cloud sends down the fragments to yor device. There can be a delay for when your device will receive these fragments. This delay depends on the device's class and the communication delay with the cloud.</p> </note>
		 * Minimum: 1
		 */
		FragmentIntervalMS?: number | null;
	}
	export interface GetFuotaTaskResponseFormProperties {

		/**
		 * The arn of a FUOTA task.
		 * Max length: 128
		 */
		Arn: FormControl<string | null | undefined>,

		/**
		 * The ID of a FUOTA task.
		 * Max length: 256
		 */
		Id: FormControl<string | null | undefined>,

		/** The status of a FUOTA task. */
		Status: FormControl<GetFuotaTaskResponseStatus | null | undefined>,

		/**
		 * The name of a FUOTA task.
		 * Max length: 256
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * The description of the new resource.
		 * Max length: 2048
		 */
		Description: FormControl<string | null | undefined>,

		/**
		 * The S3 URI points to a firmware update image that is to be used with a FUOTA task.
		 * Min length: 1
		 * Max length: 4096
		 */
		FirmwareUpdateImage: FormControl<string | null | undefined>,

		/**
		 * The firmware update role that is to be used with a FUOTA task.
		 * Min length: 1
		 * Max length: 2048
		 */
		FirmwareUpdateRole: FormControl<string | null | undefined>,

		/** Created at timestamp for the resource. */
		CreatedAt: FormControl<Date | null | undefined>,

		/**
		 * The percentage of the added fragments that are redundant. For example, if the size of the firmware image file is 100 bytes and the fragment size is 10 bytes, with <code>RedundancyPercent</code> set to 50(%), the final number of encoded fragments is (100 / 10) + (100 / 10 * 50%) = 15.
		 * Minimum: 0
		 * Maximum: 100
		 */
		RedundancyPercent: FormControl<number | null | undefined>,

		/**
		 * The size of each fragment in bytes. This parameter is supported only for FUOTA tasks with multicast groups.
		 * Minimum: 1
		 */
		FragmentSizeBytes: FormControl<number | null | undefined>,

		/**
		 * <p>The interval for sending fragments in milliseconds, rounded to the nearest second.</p> <note> <p>This interval only determines the timing for when the Cloud sends down the fragments to yor device. There can be a delay for when your device will receive these fragments. This delay depends on the device's class and the communication delay with the cloud.</p> </note>
		 * Minimum: 1
		 */
		FragmentIntervalMS: FormControl<number | null | undefined>,
	}
	export function CreateGetFuotaTaskResponseFormGroup() {
		return new FormGroup<GetFuotaTaskResponseFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128)]),
			Id: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256)]),
			Status: new FormControl<GetFuotaTaskResponseStatus | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256)]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048)]),
			FirmwareUpdateImage: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(4096)]),
			FirmwareUpdateRole: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2048)]),
			CreatedAt: new FormControl<Date | null | undefined>(undefined),
			RedundancyPercent: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(100)]),
			FragmentSizeBytes: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			FragmentIntervalMS: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
		});

	}

	export enum GetFuotaTaskResponseStatus { Pending = 'Pending', FuotaSession_Waiting = 'FuotaSession_Waiting', In_FuotaSession = 'In_FuotaSession', FuotaDone = 'FuotaDone', Delete_Waiting = 'Delete_Waiting' }


	/** The LoRaWAN information returned from getting a FUOTA task. */
	export interface LoRaWANFuotaTaskGetInfo {

		/**
		 * The frequency band (RFRegion) value.
		 * Max length: 64
		 */
		RfRegion?: string | null;

		/** Start time of a FUOTA task. */
		StartTime?: Date | null;
	}

	/** The LoRaWAN information returned from getting a FUOTA task. */
	export interface LoRaWANFuotaTaskGetInfoFormProperties {

		/**
		 * The frequency band (RFRegion) value.
		 * Max length: 64
		 */
		RfRegion: FormControl<string | null | undefined>,

		/** Start time of a FUOTA task. */
		StartTime: FormControl<Date | null | undefined>,
	}
	export function CreateLoRaWANFuotaTaskGetInfoFormGroup() {
		return new FormGroup<LoRaWANFuotaTaskGetInfoFormProperties>({
			RfRegion: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64)]),
			StartTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface GetLogLevelsByResourceTypesResponse {

		/** The log level for a log message. The log levels can be disabled, or set to <code>ERROR</code> to display less verbose logs containing only error information, or to <code>INFO</code> for more detailed logs. */
		DefaultLogLevel?: LogLevel | null;

		/** The list of wireless gateway log options. */
		WirelessGatewayLogOptions?: Array<WirelessGatewayLogOption>;

		/** The list of wireless device log options. */
		WirelessDeviceLogOptions?: Array<WirelessDeviceLogOption>;
	}
	export interface GetLogLevelsByResourceTypesResponseFormProperties {

		/** The log level for a log message. The log levels can be disabled, or set to <code>ERROR</code> to display less verbose logs containing only error information, or to <code>INFO</code> for more detailed logs. */
		DefaultLogLevel: FormControl<LogLevel | null | undefined>,
	}
	export function CreateGetLogLevelsByResourceTypesResponseFormGroup() {
		return new FormGroup<GetLogLevelsByResourceTypesResponseFormProperties>({
			DefaultLogLevel: new FormControl<LogLevel | null | undefined>(undefined),
		});

	}


	/** The log options for wireless gateways and can be used to set log levels for a specific type of wireless gateway. */
	export interface WirelessGatewayLogOption {

		/**
		 * The wireless gateway type.
		 * Required
		 */
		Type: WirelessGatewayLogOptionType;

		/**
		 * The log level for a log message. The log levels can be disabled, or set to <code>ERROR</code> to display less verbose logs containing only error information, or to <code>INFO</code> for more detailed logs.
		 * Required
		 */
		LogLevel: LogLevel;

		/** The list of wireless gateway event log options. */
		Events?: Array<WirelessGatewayEventLogOption>;
	}

	/** The log options for wireless gateways and can be used to set log levels for a specific type of wireless gateway. */
	export interface WirelessGatewayLogOptionFormProperties {

		/**
		 * The wireless gateway type.
		 * Required
		 */
		Type: FormControl<WirelessGatewayLogOptionType | null | undefined>,

		/**
		 * The log level for a log message. The log levels can be disabled, or set to <code>ERROR</code> to display less verbose logs containing only error information, or to <code>INFO</code> for more detailed logs.
		 * Required
		 */
		LogLevel: FormControl<LogLevel | null | undefined>,
	}
	export function CreateWirelessGatewayLogOptionFormGroup() {
		return new FormGroup<WirelessGatewayLogOptionFormProperties>({
			Type: new FormControl<WirelessGatewayLogOptionType | null | undefined>(undefined, [Validators.required]),
			LogLevel: new FormControl<LogLevel | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum WirelessGatewayLogOptionType { LoRaWAN = 'LoRaWAN' }


	/** <p>The log options for a wireless gateway event and can be used to set log levels for a specific wireless gateway event.</p> <p>For a LoRaWAN gateway, possible events for a log message are <code>CUPS_Request</code> and <code>Certificate</code>.</p> */
	export interface WirelessGatewayEventLogOption {

		/**
		 * The event for a log message, if the log message is tied to a wireless gateway.
		 * Required
		 */
		Event: WirelessGatewayEventLogOptionEvent;

		/**
		 * The log level for a log message. The log levels can be disabled, or set to <code>ERROR</code> to display less verbose logs containing only error information, or to <code>INFO</code> for more detailed logs.
		 * Required
		 */
		LogLevel: LogLevel;
	}

	/** <p>The log options for a wireless gateway event and can be used to set log levels for a specific wireless gateway event.</p> <p>For a LoRaWAN gateway, possible events for a log message are <code>CUPS_Request</code> and <code>Certificate</code>.</p> */
	export interface WirelessGatewayEventLogOptionFormProperties {

		/**
		 * The event for a log message, if the log message is tied to a wireless gateway.
		 * Required
		 */
		Event: FormControl<WirelessGatewayEventLogOptionEvent | null | undefined>,

		/**
		 * The log level for a log message. The log levels can be disabled, or set to <code>ERROR</code> to display less verbose logs containing only error information, or to <code>INFO</code> for more detailed logs.
		 * Required
		 */
		LogLevel: FormControl<LogLevel | null | undefined>,
	}
	export function CreateWirelessGatewayEventLogOptionFormGroup() {
		return new FormGroup<WirelessGatewayEventLogOptionFormProperties>({
			Event: new FormControl<WirelessGatewayEventLogOptionEvent | null | undefined>(undefined, [Validators.required]),
			LogLevel: new FormControl<LogLevel | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum WirelessGatewayEventLogOptionEvent { CUPS_Request = 'CUPS_Request', Certificate = 'Certificate' }


	/** The log options for wireless devices and can be used to set log levels for a specific type of wireless device. */
	export interface WirelessDeviceLogOption {

		/** Required */
		Type: WirelessDeviceType;

		/**
		 * The log level for a log message. The log levels can be disabled, or set to <code>ERROR</code> to display less verbose logs containing only error information, or to <code>INFO</code> for more detailed logs.
		 * Required
		 */
		LogLevel: LogLevel;

		/** The list of wireless device event log options. */
		Events?: Array<WirelessDeviceEventLogOption>;
	}

	/** The log options for wireless devices and can be used to set log levels for a specific type of wireless device. */
	export interface WirelessDeviceLogOptionFormProperties {

		/** Required */
		Type: FormControl<WirelessDeviceType | null | undefined>,

		/**
		 * The log level for a log message. The log levels can be disabled, or set to <code>ERROR</code> to display less verbose logs containing only error information, or to <code>INFO</code> for more detailed logs.
		 * Required
		 */
		LogLevel: FormControl<LogLevel | null | undefined>,
	}
	export function CreateWirelessDeviceLogOptionFormGroup() {
		return new FormGroup<WirelessDeviceLogOptionFormProperties>({
			Type: new FormControl<WirelessDeviceType | null | undefined>(undefined, [Validators.required]),
			LogLevel: new FormControl<LogLevel | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum WirelessDeviceType { Sidewalk = 'Sidewalk', LoRaWAN = 'LoRaWAN' }


	/** <p>The log options for a wireless device event and can be used to set log levels for a specific wireless device event.</p> <p>For a LoRaWAN device, possible events for a log messsage are: <code>Join</code>, <code>Rejoin</code>, <code>Downlink_Data</code>, and <code>Uplink_Data</code>. For a Sidewalk device, possible events for a log message are <code>Registration</code>, <code>Downlink_Data</code>, and <code>Uplink_Data</code>.</p> */
	export interface WirelessDeviceEventLogOption {

		/**
		 * The event for a log message, if the log message is tied to a wireless device.
		 * Required
		 */
		Event: WirelessDeviceEventLogOptionEvent;

		/**
		 * The log level for a log message. The log levels can be disabled, or set to <code>ERROR</code> to display less verbose logs containing only error information, or to <code>INFO</code> for more detailed logs.
		 * Required
		 */
		LogLevel: LogLevel;
	}

	/** <p>The log options for a wireless device event and can be used to set log levels for a specific wireless device event.</p> <p>For a LoRaWAN device, possible events for a log messsage are: <code>Join</code>, <code>Rejoin</code>, <code>Downlink_Data</code>, and <code>Uplink_Data</code>. For a Sidewalk device, possible events for a log message are <code>Registration</code>, <code>Downlink_Data</code>, and <code>Uplink_Data</code>.</p> */
	export interface WirelessDeviceEventLogOptionFormProperties {

		/**
		 * The event for a log message, if the log message is tied to a wireless device.
		 * Required
		 */
		Event: FormControl<WirelessDeviceEventLogOptionEvent | null | undefined>,

		/**
		 * The log level for a log message. The log levels can be disabled, or set to <code>ERROR</code> to display less verbose logs containing only error information, or to <code>INFO</code> for more detailed logs.
		 * Required
		 */
		LogLevel: FormControl<LogLevel | null | undefined>,
	}
	export function CreateWirelessDeviceEventLogOptionFormGroup() {
		return new FormGroup<WirelessDeviceEventLogOptionFormProperties>({
			Event: new FormControl<WirelessDeviceEventLogOptionEvent | null | undefined>(undefined, [Validators.required]),
			LogLevel: new FormControl<LogLevel | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum WirelessDeviceEventLogOptionEvent { Join = 'Join', Rejoin = 'Rejoin', Uplink_Data = 'Uplink_Data', Downlink_Data = 'Downlink_Data', Registration = 'Registration' }

	export interface GetMulticastGroupResponse {

		/**
		 * The arn of the multicast group.
		 * Max length: 128
		 */
		Arn?: string | null;

		/**
		 * The ID of the multicast group.
		 * Max length: 256
		 */
		Id?: string | null;

		/**
		 * The name of the multicast group.
		 * Max length: 256
		 */
		Name?: string | null;

		/**
		 * The description of the new resource.
		 * Max length: 2048
		 */
		Description?: string | null;

		/**
		 * The status of the multicast group.
		 * Max length: 256
		 */
		Status?: string | null;

		/** The LoRaWAN information that is to be returned from getting multicast group information. */
		LoRaWAN?: LoRaWANMulticastGet;

		/** Created at timestamp for the resource. */
		CreatedAt?: Date | null;
	}
	export interface GetMulticastGroupResponseFormProperties {

		/**
		 * The arn of the multicast group.
		 * Max length: 128
		 */
		Arn: FormControl<string | null | undefined>,

		/**
		 * The ID of the multicast group.
		 * Max length: 256
		 */
		Id: FormControl<string | null | undefined>,

		/**
		 * The name of the multicast group.
		 * Max length: 256
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * The description of the new resource.
		 * Max length: 2048
		 */
		Description: FormControl<string | null | undefined>,

		/**
		 * The status of the multicast group.
		 * Max length: 256
		 */
		Status: FormControl<string | null | undefined>,

		/** Created at timestamp for the resource. */
		CreatedAt: FormControl<Date | null | undefined>,
	}
	export function CreateGetMulticastGroupResponseFormGroup() {
		return new FormGroup<GetMulticastGroupResponseFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128)]),
			Id: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256)]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048)]),
			Status: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256)]),
			CreatedAt: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** The LoRaWAN information that is to be returned from getting multicast group information. */
	export interface LoRaWANMulticastGet {

		/** Supported RfRegions */
		RfRegion?: SupportedRfRegion | null;

		/**
		 * DlClass for LoRaWAM, valid values are ClassB and ClassC.
		 * Max length: 256
		 */
		DlClass?: DlClass | null;

		/**
		 * Number of devices that are requested to be associated with the multicast group.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		NumberOfDevicesRequested?: number | null;

		/**
		 * Number of devices that are associated to the multicast group.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		NumberOfDevicesInGroup?: number | null;
	}

	/** The LoRaWAN information that is to be returned from getting multicast group information. */
	export interface LoRaWANMulticastGetFormProperties {

		/** Supported RfRegions */
		RfRegion: FormControl<SupportedRfRegion | null | undefined>,

		/**
		 * DlClass for LoRaWAM, valid values are ClassB and ClassC.
		 * Max length: 256
		 */
		DlClass: FormControl<DlClass | null | undefined>,

		/**
		 * Number of devices that are requested to be associated with the multicast group.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		NumberOfDevicesRequested: FormControl<number | null | undefined>,

		/**
		 * Number of devices that are associated to the multicast group.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		NumberOfDevicesInGroup: FormControl<number | null | undefined>,
	}
	export function CreateLoRaWANMulticastGetFormGroup() {
		return new FormGroup<LoRaWANMulticastGetFormProperties>({
			RfRegion: new FormControl<SupportedRfRegion | null | undefined>(undefined),
			DlClass: new FormControl<DlClass | null | undefined>(undefined, [Validators.maxLength(256)]),
			NumberOfDevicesRequested: new FormControl<number | null | undefined>(undefined),
			NumberOfDevicesInGroup: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetMulticastGroupSessionResponse {

		/** The LoRaWAN information used with the multicast session. */
		LoRaWAN?: LoRaWANMulticastSession;
	}
	export interface GetMulticastGroupSessionResponseFormProperties {
	}
	export function CreateGetMulticastGroupSessionResponseFormGroup() {
		return new FormGroup<GetMulticastGroupSessionResponseFormProperties>({
		});

	}


	/** The LoRaWAN information used with the multicast session. */
	export interface LoRaWANMulticastSession {

		/**
		 * Downlink data rate.
		 * Minimum: 0
		 * Maximum: 15
		 */
		DlDr?: number | null;

		/**
		 * Downlink frequency.
		 * Minimum: 100000000
		 * Maximum: 1000000000
		 */
		DlFreq?: number | null;

		/** Timestamp of when the multicast group session is to start. */
		SessionStartTime?: Date | null;

		/**
		 * How long before a multicast group session is to timeout.
		 * Minimum: 60
		 * Maximum: 172800
		 */
		SessionTimeout?: number | null;
		PingSlotPeriod?: number | null;
	}

	/** The LoRaWAN information used with the multicast session. */
	export interface LoRaWANMulticastSessionFormProperties {

		/**
		 * Downlink data rate.
		 * Minimum: 0
		 * Maximum: 15
		 */
		DlDr: FormControl<number | null | undefined>,

		/**
		 * Downlink frequency.
		 * Minimum: 100000000
		 * Maximum: 1000000000
		 */
		DlFreq: FormControl<number | null | undefined>,

		/** Timestamp of when the multicast group session is to start. */
		SessionStartTime: FormControl<Date | null | undefined>,

		/**
		 * How long before a multicast group session is to timeout.
		 * Minimum: 60
		 * Maximum: 172800
		 */
		SessionTimeout: FormControl<number | null | undefined>,
		PingSlotPeriod: FormControl<number | null | undefined>,
	}
	export function CreateLoRaWANMulticastSessionFormGroup() {
		return new FormGroup<LoRaWANMulticastSessionFormProperties>({
			DlDr: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(15)]),
			DlFreq: new FormControl<number | null | undefined>(undefined, [Validators.min(100000000), Validators.max(1000000000)]),
			SessionStartTime: new FormControl<Date | null | undefined>(undefined),
			SessionTimeout: new FormControl<number | null | undefined>(undefined, [Validators.min(60), Validators.max(172800)]),
			PingSlotPeriod: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetNetworkAnalyzerConfigurationResponse {

		/** Trace content for your wireless gateway and wireless device resources. */
		TraceContent?: TraceContent;
		WirelessDevices?: Array<string>;
		WirelessGateways?: Array<string>;

		/**
		 * The description of the new resource.
		 * Max length: 2048
		 */
		Description?: string | null;
		Arn?: string;

		/**
		 * Name of the network analyzer configuration.
		 * Min length: 1
		 * Max length: 1024
		 */
		Name?: string | null;
		MulticastGroups?: Array<string>;
	}
	export interface GetNetworkAnalyzerConfigurationResponseFormProperties {

		/**
		 * The description of the new resource.
		 * Max length: 2048
		 */
		Description: FormControl<string | null | undefined>,
		Arn: FormControl<string | null | undefined>,

		/**
		 * Name of the network analyzer configuration.
		 * Min length: 1
		 * Max length: 1024
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateGetNetworkAnalyzerConfigurationResponseFormGroup() {
		return new FormGroup<GetNetworkAnalyzerConfigurationResponseFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048)]),
			Arn: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024), Validators.pattern('[a-zA-Z0-9-_]+')]),
		});

	}


	/** Trace content for your wireless gateway and wireless device resources. */
	export interface TraceContent {

		/** <code>FrameInfo</code> of your wireless device resources for the trace content. Use FrameInfo to debug the communication between your LoRaWAN end devices and the network server. */
		WirelessDeviceFrameInfo?: WirelessDeviceFrameInfo | null;

		/** The log level for a log message. The log levels can be disabled, or set to <code>ERROR</code> to display less verbose logs containing only error information, or to <code>INFO</code> for more detailed logs. */
		LogLevel?: LogLevel | null;

		/** <code>FrameInfo</code> of your multicast group resources for the trace content. Use FrameInfo to debug the multicast communication between your LoRaWAN end devices and the network server. */
		MulticastFrameInfo?: WirelessDeviceFrameInfo | null;
	}

	/** Trace content for your wireless gateway and wireless device resources. */
	export interface TraceContentFormProperties {

		/** <code>FrameInfo</code> of your wireless device resources for the trace content. Use FrameInfo to debug the communication between your LoRaWAN end devices and the network server. */
		WirelessDeviceFrameInfo: FormControl<WirelessDeviceFrameInfo | null | undefined>,

		/** The log level for a log message. The log levels can be disabled, or set to <code>ERROR</code> to display less verbose logs containing only error information, or to <code>INFO</code> for more detailed logs. */
		LogLevel: FormControl<LogLevel | null | undefined>,

		/** <code>FrameInfo</code> of your multicast group resources for the trace content. Use FrameInfo to debug the multicast communication between your LoRaWAN end devices and the network server. */
		MulticastFrameInfo: FormControl<WirelessDeviceFrameInfo | null | undefined>,
	}
	export function CreateTraceContentFormGroup() {
		return new FormGroup<TraceContentFormProperties>({
			WirelessDeviceFrameInfo: new FormControl<WirelessDeviceFrameInfo | null | undefined>(undefined),
			LogLevel: new FormControl<LogLevel | null | undefined>(undefined),
			MulticastFrameInfo: new FormControl<WirelessDeviceFrameInfo | null | undefined>(undefined),
		});

	}

	export interface GetPartnerAccountResponse {
		Sidewalk?: SidewalkAccountInfoWithFingerprint;
		AccountLinked?: boolean | null;
	}
	export interface GetPartnerAccountResponseFormProperties {
		AccountLinked: FormControl<boolean | null | undefined>,
	}
	export function CreateGetPartnerAccountResponseFormGroup() {
		return new FormGroup<GetPartnerAccountResponseFormProperties>({
			AccountLinked: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Information about a Sidewalk account. */
	export interface SidewalkAccountInfoWithFingerprint {
		AmazonId?: string;
		Fingerprint?: string;
		Arn?: string;
	}

	/** Information about a Sidewalk account. */
	export interface SidewalkAccountInfoWithFingerprintFormProperties {
		AmazonId: FormControl<string | null | undefined>,
		Fingerprint: FormControl<string | null | undefined>,
		Arn: FormControl<string | null | undefined>,
	}
	export function CreateSidewalkAccountInfoWithFingerprintFormGroup() {
		return new FormGroup<SidewalkAccountInfoWithFingerprintFormProperties>({
			AmazonId: new FormControl<string | null | undefined>(undefined),
			Fingerprint: new FormControl<string | null | undefined>(undefined),
			Arn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This operation is no longer supported. */
	export interface GetPositionResponse {
		Position?: Array<number> | null;
		Accuracy?: Accuracy;
		SolverType?: PositionSolverType;
		SolverProvider?: PositionSolverProvider;
		SolverVersion?: string;
		Timestamp?: string;
	}

	/** This operation is no longer supported. */
	export interface GetPositionResponseFormProperties {
		SolverType: FormControl<PositionSolverType | null | undefined>,
		SolverProvider: FormControl<PositionSolverProvider | null | undefined>,
		SolverVersion: FormControl<string | null | undefined>,
		Timestamp: FormControl<string | null | undefined>,
	}
	export function CreateGetPositionResponseFormGroup() {
		return new FormGroup<GetPositionResponseFormProperties>({
			SolverType: new FormControl<PositionSolverType | null | undefined>(undefined),
			SolverProvider: new FormControl<PositionSolverProvider | null | undefined>(undefined),
			SolverVersion: new FormControl<string | null | undefined>(undefined),
			Timestamp: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The accuracy of the estimated position in meters. An empty value indicates that no position data is available. A value of ‘0.0’ value indicates that position data is available. This data corresponds to the position information that you specified instead of the position computed by solver. */
	export interface Accuracy {
		HorizontalAccuracy?: number;
		VerticalAccuracy?: number;
	}

	/** The accuracy of the estimated position in meters. An empty value indicates that no position data is available. A value of ‘0.0’ value indicates that position data is available. This data corresponds to the position information that you specified instead of the position computed by solver. */
	export interface AccuracyFormProperties {
		HorizontalAccuracy: FormControl<number | null | undefined>,
		VerticalAccuracy: FormControl<number | null | undefined>,
	}
	export function CreateAccuracyFormGroup() {
		return new FormGroup<AccuracyFormProperties>({
			HorizontalAccuracy: new FormControl<number | null | undefined>(undefined),
			VerticalAccuracy: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum PositionSolverType { GNSS = 'GNSS' }

	export enum PositionSolverProvider { Semtech = 'Semtech' }


	/** This operation is no longer supported. */
	export interface GetPositionConfigurationResponse {
		Solvers?: PositionSolverDetails;
		Destination?: string;
	}

	/** This operation is no longer supported. */
	export interface GetPositionConfigurationResponseFormProperties {
		Destination: FormControl<string | null | undefined>,
	}
	export function CreateGetPositionConfigurationResponseFormGroup() {
		return new FormGroup<GetPositionConfigurationResponseFormProperties>({
			Destination: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The wrapper for position solver details. */
	export interface PositionSolverDetails {
		SemtechGnss?: SemtechGnssDetail;
	}

	/** The wrapper for position solver details. */
	export interface PositionSolverDetailsFormProperties {
	}
	export function CreatePositionSolverDetailsFormGroup() {
		return new FormGroup<PositionSolverDetailsFormProperties>({
		});

	}


	/** Details of the Semtech GNSS solver object. */
	export interface SemtechGnssDetail {
		Provider?: PositionSolverProvider;
		Type?: PositionSolverType;
		Status?: EventNotificationTopicStatus;
		Fec?: PositionConfigurationFec;
	}

	/** Details of the Semtech GNSS solver object. */
	export interface SemtechGnssDetailFormProperties {
		Provider: FormControl<PositionSolverProvider | null | undefined>,
		Type: FormControl<PositionSolverType | null | undefined>,
		Status: FormControl<EventNotificationTopicStatus | null | undefined>,
		Fec: FormControl<PositionConfigurationFec | null | undefined>,
	}
	export function CreateSemtechGnssDetailFormGroup() {
		return new FormGroup<SemtechGnssDetailFormProperties>({
			Provider: new FormControl<PositionSolverProvider | null | undefined>(undefined),
			Type: new FormControl<PositionSolverType | null | undefined>(undefined),
			Status: new FormControl<EventNotificationTopicStatus | null | undefined>(undefined),
			Fec: new FormControl<PositionConfigurationFec | null | undefined>(undefined),
		});

	}

	export enum PositionConfigurationFec { ROSE = 'ROSE', NONE = 'NONE' }

	export interface GetPositionEstimateResponse {
		GeoJsonPayload?: string;
	}
	export interface GetPositionEstimateResponseFormProperties {
		GeoJsonPayload: FormControl<string | null | undefined>,
	}
	export function CreateGetPositionEstimateResponseFormGroup() {
		return new FormGroup<GetPositionEstimateResponseFormProperties>({
			GeoJsonPayload: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Wi-Fi access point. */
	export interface WiFiAccessPoint {

		/** Required */
		MacAddress: string;

		/** Required */
		Rss: number;
	}

	/** Wi-Fi access point. */
	export interface WiFiAccessPointFormProperties {

		/** Required */
		MacAddress: FormControl<string | null | undefined>,

		/** Required */
		Rss: FormControl<number | null | undefined>,
	}
	export function CreateWiFiAccessPointFormGroup() {
		return new FormGroup<WiFiAccessPointFormProperties>({
			MacAddress: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Rss: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** GSM object. */
	export interface GsmObj {

		/** Required */
		Mcc: number;

		/** Required */
		Mnc: number;

		/** Required */
		Lac: number;

		/** Required */
		GeranCid: number;
		GsmLocalId?: GsmLocalId;
		GsmTimingAdvance?: number | null;
		RxLevel?: number | null;
		GsmNmr?: Array<GsmNmrObj>;
	}

	/** GSM object. */
	export interface GsmObjFormProperties {

		/** Required */
		Mcc: FormControl<number | null | undefined>,

		/** Required */
		Mnc: FormControl<number | null | undefined>,

		/** Required */
		Lac: FormControl<number | null | undefined>,

		/** Required */
		GeranCid: FormControl<number | null | undefined>,
		GsmTimingAdvance: FormControl<number | null | undefined>,
		RxLevel: FormControl<number | null | undefined>,
	}
	export function CreateGsmObjFormGroup() {
		return new FormGroup<GsmObjFormProperties>({
			Mcc: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Mnc: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Lac: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			GeranCid: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			GsmTimingAdvance: new FormControl<number | null | undefined>(undefined),
			RxLevel: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** GSM local ID information, which corresponds to the local identification parameters of a GSM cell. */
	export interface GsmLocalId {

		/** Required */
		Bsic: number;

		/** Required */
		Bcch: number;
	}

	/** GSM local ID information, which corresponds to the local identification parameters of a GSM cell. */
	export interface GsmLocalIdFormProperties {

		/** Required */
		Bsic: FormControl<number | null | undefined>,

		/** Required */
		Bcch: FormControl<number | null | undefined>,
	}
	export function CreateGsmLocalIdFormGroup() {
		return new FormGroup<GsmLocalIdFormProperties>({
			Bsic: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Bcch: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** GSM object for network measurement reports. */
	export interface GsmNmrObj {

		/** Required */
		Bsic: number;

		/** Required */
		Bcch: number;
		RxLevel?: number | null;
		GlobalIdentity?: GlobalIdentity;
	}

	/** GSM object for network measurement reports. */
	export interface GsmNmrObjFormProperties {

		/** Required */
		Bsic: FormControl<number | null | undefined>,

		/** Required */
		Bcch: FormControl<number | null | undefined>,
		RxLevel: FormControl<number | null | undefined>,
	}
	export function CreateGsmNmrObjFormGroup() {
		return new FormGroup<GsmNmrObjFormProperties>({
			Bsic: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Bcch: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			RxLevel: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Global identity information. */
	export interface GlobalIdentity {

		/** Required */
		Lac: number;

		/** Required */
		GeranCid: number;
	}

	/** Global identity information. */
	export interface GlobalIdentityFormProperties {

		/** Required */
		Lac: FormControl<number | null | undefined>,

		/** Required */
		GeranCid: FormControl<number | null | undefined>,
	}
	export function CreateGlobalIdentityFormGroup() {
		return new FormGroup<GlobalIdentityFormProperties>({
			Lac: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			GeranCid: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** WCDMA. */
	export interface WcdmaObj {

		/** Required */
		Mcc: number;

		/** Required */
		Mnc: number;
		Lac?: number | null;

		/** Required */
		UtranCid: number;
		WcdmaLocalId?: WcdmaLocalId;
		Rscp?: number | null;
		PathLoss?: number | null;
		WcdmaNmr?: Array<WcdmaNmrObj>;
	}

	/** WCDMA. */
	export interface WcdmaObjFormProperties {

		/** Required */
		Mcc: FormControl<number | null | undefined>,

		/** Required */
		Mnc: FormControl<number | null | undefined>,
		Lac: FormControl<number | null | undefined>,

		/** Required */
		UtranCid: FormControl<number | null | undefined>,
		Rscp: FormControl<number | null | undefined>,
		PathLoss: FormControl<number | null | undefined>,
	}
	export function CreateWcdmaObjFormGroup() {
		return new FormGroup<WcdmaObjFormProperties>({
			Mcc: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Mnc: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Lac: new FormControl<number | null | undefined>(undefined),
			UtranCid: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Rscp: new FormControl<number | null | undefined>(undefined),
			PathLoss: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** WCDMA local identification (local ID) information. */
	export interface WcdmaLocalId {

		/** Required */
		Uarfcndl: number;

		/** Required */
		Psc: number;
	}

	/** WCDMA local identification (local ID) information. */
	export interface WcdmaLocalIdFormProperties {

		/** Required */
		Uarfcndl: FormControl<number | null | undefined>,

		/** Required */
		Psc: FormControl<number | null | undefined>,
	}
	export function CreateWcdmaLocalIdFormGroup() {
		return new FormGroup<WcdmaLocalIdFormProperties>({
			Uarfcndl: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Psc: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Network Measurement Reports. */
	export interface WcdmaNmrObj {

		/** Required */
		Uarfcndl: number;

		/** Required */
		Psc: number;

		/** Required */
		UtranCid: number;
		Rscp?: number | null;
		PathLoss?: number | null;
	}

	/** Network Measurement Reports. */
	export interface WcdmaNmrObjFormProperties {

		/** Required */
		Uarfcndl: FormControl<number | null | undefined>,

		/** Required */
		Psc: FormControl<number | null | undefined>,

		/** Required */
		UtranCid: FormControl<number | null | undefined>,
		Rscp: FormControl<number | null | undefined>,
		PathLoss: FormControl<number | null | undefined>,
	}
	export function CreateWcdmaNmrObjFormGroup() {
		return new FormGroup<WcdmaNmrObjFormProperties>({
			Uarfcndl: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Psc: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			UtranCid: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Rscp: new FormControl<number | null | undefined>(undefined),
			PathLoss: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** TD-SCDMA object. */
	export interface TdscdmaObj {

		/** Required */
		Mcc: number;

		/** Required */
		Mnc: number;
		Lac?: number | null;

		/** Required */
		UtranCid: number;
		TdscdmaLocalId?: TdscdmaLocalId;
		TdscdmaTimingAdvance?: number | null;
		Rscp?: number | null;
		PathLoss?: number | null;
		TdscdmaNmr?: Array<TdscdmaNmrObj>;
	}

	/** TD-SCDMA object. */
	export interface TdscdmaObjFormProperties {

		/** Required */
		Mcc: FormControl<number | null | undefined>,

		/** Required */
		Mnc: FormControl<number | null | undefined>,
		Lac: FormControl<number | null | undefined>,

		/** Required */
		UtranCid: FormControl<number | null | undefined>,
		TdscdmaTimingAdvance: FormControl<number | null | undefined>,
		Rscp: FormControl<number | null | undefined>,
		PathLoss: FormControl<number | null | undefined>,
	}
	export function CreateTdscdmaObjFormGroup() {
		return new FormGroup<TdscdmaObjFormProperties>({
			Mcc: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Mnc: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Lac: new FormControl<number | null | undefined>(undefined),
			UtranCid: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			TdscdmaTimingAdvance: new FormControl<number | null | undefined>(undefined),
			Rscp: new FormControl<number | null | undefined>(undefined),
			PathLoss: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** TD-SCDMA local identification (local Id) information. */
	export interface TdscdmaLocalId {

		/** Required */
		Uarfcn: number;

		/** Required */
		CellParams: number;
	}

	/** TD-SCDMA local identification (local Id) information. */
	export interface TdscdmaLocalIdFormProperties {

		/** Required */
		Uarfcn: FormControl<number | null | undefined>,

		/** Required */
		CellParams: FormControl<number | null | undefined>,
	}
	export function CreateTdscdmaLocalIdFormGroup() {
		return new FormGroup<TdscdmaLocalIdFormProperties>({
			Uarfcn: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			CellParams: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** TD-SCDMA object for network measurement reports. */
	export interface TdscdmaNmrObj {

		/** Required */
		Uarfcn: number;

		/** Required */
		CellParams: number;
		UtranCid?: number | null;
		Rscp?: number | null;
		PathLoss?: number | null;
	}

	/** TD-SCDMA object for network measurement reports. */
	export interface TdscdmaNmrObjFormProperties {

		/** Required */
		Uarfcn: FormControl<number | null | undefined>,

		/** Required */
		CellParams: FormControl<number | null | undefined>,
		UtranCid: FormControl<number | null | undefined>,
		Rscp: FormControl<number | null | undefined>,
		PathLoss: FormControl<number | null | undefined>,
	}
	export function CreateTdscdmaNmrObjFormGroup() {
		return new FormGroup<TdscdmaNmrObjFormProperties>({
			Uarfcn: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			CellParams: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			UtranCid: new FormControl<number | null | undefined>(undefined),
			Rscp: new FormControl<number | null | undefined>(undefined),
			PathLoss: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** LTE object. */
	export interface LteObj {

		/** Required */
		Mcc: number;

		/** Required */
		Mnc: number;

		/** Required */
		EutranCid: number;
		Tac?: number | null;
		LteLocalId?: LteLocalId;
		LteTimingAdvance?: number | null;
		Rsrp?: number | null;
		Rsrq?: number;
		NrCapable?: boolean | null;
		LteNmr?: Array<LteNmrObj>;
	}

	/** LTE object. */
	export interface LteObjFormProperties {

		/** Required */
		Mcc: FormControl<number | null | undefined>,

		/** Required */
		Mnc: FormControl<number | null | undefined>,

		/** Required */
		EutranCid: FormControl<number | null | undefined>,
		Tac: FormControl<number | null | undefined>,
		LteTimingAdvance: FormControl<number | null | undefined>,
		Rsrp: FormControl<number | null | undefined>,
		Rsrq: FormControl<number | null | undefined>,
		NrCapable: FormControl<boolean | null | undefined>,
	}
	export function CreateLteObjFormGroup() {
		return new FormGroup<LteObjFormProperties>({
			Mcc: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Mnc: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			EutranCid: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Tac: new FormControl<number | null | undefined>(undefined),
			LteTimingAdvance: new FormControl<number | null | undefined>(undefined),
			Rsrp: new FormControl<number | null | undefined>(undefined),
			Rsrq: new FormControl<number | null | undefined>(undefined),
			NrCapable: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** LTE local identification (local ID) information. */
	export interface LteLocalId {

		/** Required */
		Pci: number;

		/** Required */
		Earfcn: number;
	}

	/** LTE local identification (local ID) information. */
	export interface LteLocalIdFormProperties {

		/** Required */
		Pci: FormControl<number | null | undefined>,

		/** Required */
		Earfcn: FormControl<number | null | undefined>,
	}
	export function CreateLteLocalIdFormGroup() {
		return new FormGroup<LteLocalIdFormProperties>({
			Pci: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Earfcn: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** LTE object for network measurement reports. */
	export interface LteNmrObj {

		/** Required */
		Pci: number;

		/** Required */
		Earfcn: number;

		/** Required */
		EutranCid: number;
		Rsrp?: number | null;
		Rsrq?: number;
	}

	/** LTE object for network measurement reports. */
	export interface LteNmrObjFormProperties {

		/** Required */
		Pci: FormControl<number | null | undefined>,

		/** Required */
		Earfcn: FormControl<number | null | undefined>,

		/** Required */
		EutranCid: FormControl<number | null | undefined>,
		Rsrp: FormControl<number | null | undefined>,
		Rsrq: FormControl<number | null | undefined>,
	}
	export function CreateLteNmrObjFormGroup() {
		return new FormGroup<LteNmrObjFormProperties>({
			Pci: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Earfcn: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			EutranCid: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Rsrp: new FormControl<number | null | undefined>(undefined),
			Rsrq: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** CDMA (Code-division multiple access) object. */
	export interface CdmaObj {

		/** Required */
		SystemId: number;

		/** Required */
		NetworkId: number;

		/** Required */
		BaseStationId: number;
		RegistrationZone?: number | null;
		CdmaLocalId?: CdmaLocalId;
		PilotPower?: number | null;
		BaseLat?: number;
		BaseLng?: number;
		CdmaNmr?: Array<CdmaNmrObj>;
	}

	/** CDMA (Code-division multiple access) object. */
	export interface CdmaObjFormProperties {

		/** Required */
		SystemId: FormControl<number | null | undefined>,

		/** Required */
		NetworkId: FormControl<number | null | undefined>,

		/** Required */
		BaseStationId: FormControl<number | null | undefined>,
		RegistrationZone: FormControl<number | null | undefined>,
		PilotPower: FormControl<number | null | undefined>,
		BaseLat: FormControl<number | null | undefined>,
		BaseLng: FormControl<number | null | undefined>,
	}
	export function CreateCdmaObjFormGroup() {
		return new FormGroup<CdmaObjFormProperties>({
			SystemId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			NetworkId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			BaseStationId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			RegistrationZone: new FormControl<number | null | undefined>(undefined),
			PilotPower: new FormControl<number | null | undefined>(undefined),
			BaseLat: new FormControl<number | null | undefined>(undefined),
			BaseLng: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** CDMA local ID information, which corresponds to the local identification parameters of a CDMA cell. */
	export interface CdmaLocalId {

		/** Required */
		PnOffset: number;

		/** Required */
		CdmaChannel: number;
	}

	/** CDMA local ID information, which corresponds to the local identification parameters of a CDMA cell. */
	export interface CdmaLocalIdFormProperties {

		/** Required */
		PnOffset: FormControl<number | null | undefined>,

		/** Required */
		CdmaChannel: FormControl<number | null | undefined>,
	}
	export function CreateCdmaLocalIdFormGroup() {
		return new FormGroup<CdmaLocalIdFormProperties>({
			PnOffset: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			CdmaChannel: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** CDMA object for network measurement reports. */
	export interface CdmaNmrObj {

		/** Required */
		PnOffset: number;

		/** Required */
		CdmaChannel: number;
		PilotPower?: number | null;
		BaseStationId?: number | null;
	}

	/** CDMA object for network measurement reports. */
	export interface CdmaNmrObjFormProperties {

		/** Required */
		PnOffset: FormControl<number | null | undefined>,

		/** Required */
		CdmaChannel: FormControl<number | null | undefined>,
		PilotPower: FormControl<number | null | undefined>,
		BaseStationId: FormControl<number | null | undefined>,
	}
	export function CreateCdmaNmrObjFormGroup() {
		return new FormGroup<CdmaNmrObjFormProperties>({
			PnOffset: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			CdmaChannel: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			PilotPower: new FormControl<number | null | undefined>(undefined),
			BaseStationId: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetResourceEventConfigurationResponse {
		DeviceRegistrationState?: DeviceRegistrationStateEventConfiguration;
		Proximity?: ProximityEventConfiguration;
		Join?: JoinEventConfiguration;
		ConnectionStatus?: ConnectionStatusEventConfiguration;
		MessageDeliveryStatus?: MessageDeliveryStatusEventConfiguration;
	}
	export interface GetResourceEventConfigurationResponseFormProperties {
	}
	export function CreateGetResourceEventConfigurationResponseFormGroup() {
		return new FormGroup<GetResourceEventConfigurationResponseFormProperties>({
		});

	}


	/** Device registration state event configuration object for enabling and disabling relevant topics. */
	export interface DeviceRegistrationStateEventConfiguration {
		Sidewalk?: SidewalkEventNotificationConfigurations;
		WirelessDeviceIdEventTopic?: EventNotificationTopicStatus;
	}

	/** Device registration state event configuration object for enabling and disabling relevant topics. */
	export interface DeviceRegistrationStateEventConfigurationFormProperties {
		WirelessDeviceIdEventTopic: FormControl<EventNotificationTopicStatus | null | undefined>,
	}
	export function CreateDeviceRegistrationStateEventConfigurationFormGroup() {
		return new FormGroup<DeviceRegistrationStateEventConfigurationFormProperties>({
			WirelessDeviceIdEventTopic: new FormControl<EventNotificationTopicStatus | null | undefined>(undefined),
		});

	}


	/**  <code>SidewalkEventNotificationConfigurations</code> object, which is the event configuration object for Sidewalk-related event topics. */
	export interface SidewalkEventNotificationConfigurations {
		AmazonIdEventTopic?: EventNotificationTopicStatus;
	}

	/**  <code>SidewalkEventNotificationConfigurations</code> object, which is the event configuration object for Sidewalk-related event topics. */
	export interface SidewalkEventNotificationConfigurationsFormProperties {
		AmazonIdEventTopic: FormControl<EventNotificationTopicStatus | null | undefined>,
	}
	export function CreateSidewalkEventNotificationConfigurationsFormGroup() {
		return new FormGroup<SidewalkEventNotificationConfigurationsFormProperties>({
			AmazonIdEventTopic: new FormControl<EventNotificationTopicStatus | null | undefined>(undefined),
		});

	}


	/** Proximity event configuration object for enabling and disabling relevant topics. */
	export interface ProximityEventConfiguration {
		Sidewalk?: SidewalkEventNotificationConfigurations;
		WirelessDeviceIdEventTopic?: EventNotificationTopicStatus;
	}

	/** Proximity event configuration object for enabling and disabling relevant topics. */
	export interface ProximityEventConfigurationFormProperties {
		WirelessDeviceIdEventTopic: FormControl<EventNotificationTopicStatus | null | undefined>,
	}
	export function CreateProximityEventConfigurationFormGroup() {
		return new FormGroup<ProximityEventConfigurationFormProperties>({
			WirelessDeviceIdEventTopic: new FormControl<EventNotificationTopicStatus | null | undefined>(undefined),
		});

	}


	/** Join event configuration object for enabling or disabling topic. */
	export interface JoinEventConfiguration {
		LoRaWAN?: LoRaWANJoinEventNotificationConfigurations;
		WirelessDeviceIdEventTopic?: EventNotificationTopicStatus;
	}

	/** Join event configuration object for enabling or disabling topic. */
	export interface JoinEventConfigurationFormProperties {
		WirelessDeviceIdEventTopic: FormControl<EventNotificationTopicStatus | null | undefined>,
	}
	export function CreateJoinEventConfigurationFormGroup() {
		return new FormGroup<JoinEventConfigurationFormProperties>({
			WirelessDeviceIdEventTopic: new FormControl<EventNotificationTopicStatus | null | undefined>(undefined),
		});

	}


	/** Object for LoRaWAN join resource type event configuration. */
	export interface LoRaWANJoinEventNotificationConfigurations {
		DevEuiEventTopic?: EventNotificationTopicStatus;
	}

	/** Object for LoRaWAN join resource type event configuration. */
	export interface LoRaWANJoinEventNotificationConfigurationsFormProperties {
		DevEuiEventTopic: FormControl<EventNotificationTopicStatus | null | undefined>,
	}
	export function CreateLoRaWANJoinEventNotificationConfigurationsFormGroup() {
		return new FormGroup<LoRaWANJoinEventNotificationConfigurationsFormProperties>({
			DevEuiEventTopic: new FormControl<EventNotificationTopicStatus | null | undefined>(undefined),
		});

	}


	/** Connection status event configuration object for enabling or disabling topic. */
	export interface ConnectionStatusEventConfiguration {
		LoRaWAN?: LoRaWANConnectionStatusEventNotificationConfigurations;
		WirelessGatewayIdEventTopic?: EventNotificationTopicStatus;
	}

	/** Connection status event configuration object for enabling or disabling topic. */
	export interface ConnectionStatusEventConfigurationFormProperties {
		WirelessGatewayIdEventTopic: FormControl<EventNotificationTopicStatus | null | undefined>,
	}
	export function CreateConnectionStatusEventConfigurationFormGroup() {
		return new FormGroup<ConnectionStatusEventConfigurationFormProperties>({
			WirelessGatewayIdEventTopic: new FormControl<EventNotificationTopicStatus | null | undefined>(undefined),
		});

	}


	/** Object for LoRaWAN connection status resource type event configuration. */
	export interface LoRaWANConnectionStatusEventNotificationConfigurations {
		GatewayEuiEventTopic?: EventNotificationTopicStatus;
	}

	/** Object for LoRaWAN connection status resource type event configuration. */
	export interface LoRaWANConnectionStatusEventNotificationConfigurationsFormProperties {
		GatewayEuiEventTopic: FormControl<EventNotificationTopicStatus | null | undefined>,
	}
	export function CreateLoRaWANConnectionStatusEventNotificationConfigurationsFormGroup() {
		return new FormGroup<LoRaWANConnectionStatusEventNotificationConfigurationsFormProperties>({
			GatewayEuiEventTopic: new FormControl<EventNotificationTopicStatus | null | undefined>(undefined),
		});

	}


	/** Message delivery status event configuration object for enabling and disabling relevant topics. */
	export interface MessageDeliveryStatusEventConfiguration {

		/** <code>SidewalkEventNotificationConfigurations</code> object, which is the event configuration object for Sidewalk-related event topics. */
		Sidewalk?: SidewalkEventNotificationConfigurations;
		WirelessDeviceIdEventTopic?: EventNotificationTopicStatus;
	}

	/** Message delivery status event configuration object for enabling and disabling relevant topics. */
	export interface MessageDeliveryStatusEventConfigurationFormProperties {
		WirelessDeviceIdEventTopic: FormControl<EventNotificationTopicStatus | null | undefined>,
	}
	export function CreateMessageDeliveryStatusEventConfigurationFormGroup() {
		return new FormGroup<MessageDeliveryStatusEventConfigurationFormProperties>({
			WirelessDeviceIdEventTopic: new FormControl<EventNotificationTopicStatus | null | undefined>(undefined),
		});

	}

	export interface GetResourceLogLevelResponse {

		/** The log level for a log message. The log levels can be disabled, or set to <code>ERROR</code> to display less verbose logs containing only error information, or to <code>INFO</code> for more detailed logs. */
		LogLevel?: LogLevel | null;
	}
	export interface GetResourceLogLevelResponseFormProperties {

		/** The log level for a log message. The log levels can be disabled, or set to <code>ERROR</code> to display less verbose logs containing only error information, or to <code>INFO</code> for more detailed logs. */
		LogLevel: FormControl<LogLevel | null | undefined>,
	}
	export function CreateGetResourceLogLevelResponseFormGroup() {
		return new FormGroup<GetResourceLogLevelResponseFormProperties>({
			LogLevel: new FormControl<LogLevel | null | undefined>(undefined),
		});

	}

	export interface GetResourcePositionResponse {
		GeoJsonPayload?: string;
	}
	export interface GetResourcePositionResponseFormProperties {
		GeoJsonPayload: FormControl<string | null | undefined>,
	}
	export function CreateGetResourcePositionResponseFormGroup() {
		return new FormGroup<GetResourcePositionResponseFormProperties>({
			GeoJsonPayload: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetServiceEndpointResponse {
		ServiceType?: WirelessGatewayServiceType;
		ServiceEndpoint?: string;
		ServerTrust?: string;
	}
	export interface GetServiceEndpointResponseFormProperties {
		ServiceType: FormControl<WirelessGatewayServiceType | null | undefined>,
		ServiceEndpoint: FormControl<string | null | undefined>,
		ServerTrust: FormControl<string | null | undefined>,
	}
	export function CreateGetServiceEndpointResponseFormGroup() {
		return new FormGroup<GetServiceEndpointResponseFormProperties>({
			ServiceType: new FormControl<WirelessGatewayServiceType | null | undefined>(undefined),
			ServiceEndpoint: new FormControl<string | null | undefined>(undefined),
			ServerTrust: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum WirelessGatewayServiceType { CUPS = 'CUPS', LNS = 'LNS' }

	export interface GetServiceProfileResponse {
		Arn?: string;
		Name?: string;
		Id?: string;
		LoRaWAN?: LoRaWANGetServiceProfileInfo;
	}
	export interface GetServiceProfileResponseFormProperties {
		Arn: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Id: FormControl<string | null | undefined>,
	}
	export function CreateGetServiceProfileResponseFormGroup() {
		return new FormGroup<GetServiceProfileResponseFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** LoRaWANGetServiceProfileInfo object. */
	export interface LoRaWANGetServiceProfileInfo {
		UlRate?: number | null;
		UlBucketSize?: number | null;
		UlRatePolicy?: string;
		DlRate?: number | null;
		DlBucketSize?: number | null;
		DlRatePolicy?: string;
		AddGwMetadata?: boolean | null;
		DevStatusReqFreq?: number | null;
		ReportDevStatusBattery?: boolean | null;
		ReportDevStatusMargin?: boolean | null;
		DrMin?: number | null;
		DrMax?: number | null;
		ChannelMask?: string;
		PrAllowed?: boolean | null;
		HrAllowed?: boolean | null;
		RaAllowed?: boolean | null;
		NwkGeoLoc?: boolean | null;
		TargetPer?: number | null;
		MinGwDiversity?: number | null;
	}

	/** LoRaWANGetServiceProfileInfo object. */
	export interface LoRaWANGetServiceProfileInfoFormProperties {
		UlRate: FormControl<number | null | undefined>,
		UlBucketSize: FormControl<number | null | undefined>,
		UlRatePolicy: FormControl<string | null | undefined>,
		DlRate: FormControl<number | null | undefined>,
		DlBucketSize: FormControl<number | null | undefined>,
		DlRatePolicy: FormControl<string | null | undefined>,
		AddGwMetadata: FormControl<boolean | null | undefined>,
		DevStatusReqFreq: FormControl<number | null | undefined>,
		ReportDevStatusBattery: FormControl<boolean | null | undefined>,
		ReportDevStatusMargin: FormControl<boolean | null | undefined>,
		DrMin: FormControl<number | null | undefined>,
		DrMax: FormControl<number | null | undefined>,
		ChannelMask: FormControl<string | null | undefined>,
		PrAllowed: FormControl<boolean | null | undefined>,
		HrAllowed: FormControl<boolean | null | undefined>,
		RaAllowed: FormControl<boolean | null | undefined>,
		NwkGeoLoc: FormControl<boolean | null | undefined>,
		TargetPer: FormControl<number | null | undefined>,
		MinGwDiversity: FormControl<number | null | undefined>,
	}
	export function CreateLoRaWANGetServiceProfileInfoFormGroup() {
		return new FormGroup<LoRaWANGetServiceProfileInfoFormProperties>({
			UlRate: new FormControl<number | null | undefined>(undefined),
			UlBucketSize: new FormControl<number | null | undefined>(undefined),
			UlRatePolicy: new FormControl<string | null | undefined>(undefined),
			DlRate: new FormControl<number | null | undefined>(undefined),
			DlBucketSize: new FormControl<number | null | undefined>(undefined),
			DlRatePolicy: new FormControl<string | null | undefined>(undefined),
			AddGwMetadata: new FormControl<boolean | null | undefined>(undefined),
			DevStatusReqFreq: new FormControl<number | null | undefined>(undefined),
			ReportDevStatusBattery: new FormControl<boolean | null | undefined>(undefined),
			ReportDevStatusMargin: new FormControl<boolean | null | undefined>(undefined),
			DrMin: new FormControl<number | null | undefined>(undefined),
			DrMax: new FormControl<number | null | undefined>(undefined),
			ChannelMask: new FormControl<string | null | undefined>(undefined),
			PrAllowed: new FormControl<boolean | null | undefined>(undefined),
			HrAllowed: new FormControl<boolean | null | undefined>(undefined),
			RaAllowed: new FormControl<boolean | null | undefined>(undefined),
			NwkGeoLoc: new FormControl<boolean | null | undefined>(undefined),
			TargetPer: new FormControl<number | null | undefined>(undefined),
			MinGwDiversity: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetWirelessDeviceResponse {
		Type?: WirelessDeviceType;
		Name?: string;
		Description?: string;
		DestinationName?: string;
		Id?: string;
		Arn?: string;
		ThingName?: string;
		ThingArn?: string;
		LoRaWAN?: LoRaWANDevice;
		Sidewalk?: SidewalkDevice;
		Positioning?: EventNotificationTopicStatus;
	}
	export interface GetWirelessDeviceResponseFormProperties {
		Type: FormControl<WirelessDeviceType | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		DestinationName: FormControl<string | null | undefined>,
		Id: FormControl<string | null | undefined>,
		Arn: FormControl<string | null | undefined>,
		ThingName: FormControl<string | null | undefined>,
		ThingArn: FormControl<string | null | undefined>,
		Positioning: FormControl<EventNotificationTopicStatus | null | undefined>,
	}
	export function CreateGetWirelessDeviceResponseFormGroup() {
		return new FormGroup<GetWirelessDeviceResponseFormProperties>({
			Type: new FormControl<WirelessDeviceType | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			DestinationName: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			Arn: new FormControl<string | null | undefined>(undefined),
			ThingName: new FormControl<string | null | undefined>(undefined),
			ThingArn: new FormControl<string | null | undefined>(undefined),
			Positioning: new FormControl<EventNotificationTopicStatus | null | undefined>(undefined),
		});

	}


	/** LoRaWAN object for create functions. */
	export interface LoRaWANDevice {
		DevEui?: string;
		DeviceProfileId?: string;
		ServiceProfileId?: string;
		OtaaV1_1?: OtaaV1_1;
		OtaaV1_0_x?: OtaaV1_0_x;
		AbpV1_1?: AbpV1_1;
		AbpV1_0_x?: AbpV1_0_x;

		/** List of FPort assigned for different LoRaWAN application packages to use */
		FPorts?: FPorts;
	}

	/** LoRaWAN object for create functions. */
	export interface LoRaWANDeviceFormProperties {
		DevEui: FormControl<string | null | undefined>,
		DeviceProfileId: FormControl<string | null | undefined>,
		ServiceProfileId: FormControl<string | null | undefined>,
	}
	export function CreateLoRaWANDeviceFormGroup() {
		return new FormGroup<LoRaWANDeviceFormProperties>({
			DevEui: new FormControl<string | null | undefined>(undefined),
			DeviceProfileId: new FormControl<string | null | undefined>(undefined),
			ServiceProfileId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Sidewalk device object. */
	export interface SidewalkDevice {

		/**
		 * The Sidewalk Amazon ID.
		 * Max length: 2048
		 */
		AmazonId?: string | null;
		SidewalkId?: string;
		SidewalkManufacturingSn?: string;
		DeviceCertificates?: Array<CertificateList>;
		PrivateKeys?: Array<CertificateList>;
		DeviceProfileId?: string;
		CertificateId?: string;
		Status?: WirelessDeviceSidewalkStatus;
	}

	/** Sidewalk device object. */
	export interface SidewalkDeviceFormProperties {

		/**
		 * The Sidewalk Amazon ID.
		 * Max length: 2048
		 */
		AmazonId: FormControl<string | null | undefined>,
		SidewalkId: FormControl<string | null | undefined>,
		SidewalkManufacturingSn: FormControl<string | null | undefined>,
		DeviceProfileId: FormControl<string | null | undefined>,
		CertificateId: FormControl<string | null | undefined>,
		Status: FormControl<WirelessDeviceSidewalkStatus | null | undefined>,
	}
	export function CreateSidewalkDeviceFormGroup() {
		return new FormGroup<SidewalkDeviceFormProperties>({
			AmazonId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048)]),
			SidewalkId: new FormControl<string | null | undefined>(undefined),
			SidewalkManufacturingSn: new FormControl<string | null | undefined>(undefined),
			DeviceProfileId: new FormControl<string | null | undefined>(undefined),
			CertificateId: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<WirelessDeviceSidewalkStatus | null | undefined>(undefined),
		});

	}


	/** List of sidewalk certificates. */
	export interface CertificateList {

		/** Required */
		SigningAlg: SigningAlg;

		/** Required */
		Value: string;
	}

	/** List of sidewalk certificates. */
	export interface CertificateListFormProperties {

		/** Required */
		SigningAlg: FormControl<SigningAlg | null | undefined>,

		/** Required */
		Value: FormControl<string | null | undefined>,
	}
	export function CreateCertificateListFormGroup() {
		return new FormGroup<CertificateListFormProperties>({
			SigningAlg: new FormControl<SigningAlg | null | undefined>(undefined, [Validators.required]),
			Value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The certificate chain algorithm provided by sidewalk. */
	export enum SigningAlg { Ed25519 = 'Ed25519', P256r1 = 'P256r1' }

	export enum WirelessDeviceSidewalkStatus { PROVISIONED = 'PROVISIONED', REGISTERED = 'REGISTERED', ACTIVATED = 'ACTIVATED', UNKNOWN = 'UNKNOWN' }

	export interface GetWirelessDeviceImportTaskResponse {
		Id?: string;
		Arn?: string;
		DestinationName?: string;
		Sidewalk?: SidewalkGetStartImportInfo;
		CreationTime?: Date;
		Status?: ImportTaskStatus;
		StatusReason?: string;
		InitializedImportedDeviceCount?: number | null;
		PendingImportedDeviceCount?: number | null;
		OnboardedImportedDeviceCount?: number | null;
		FailedImportedDeviceCount?: number | null;
	}
	export interface GetWirelessDeviceImportTaskResponseFormProperties {
		Id: FormControl<string | null | undefined>,
		Arn: FormControl<string | null | undefined>,
		DestinationName: FormControl<string | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
		Status: FormControl<ImportTaskStatus | null | undefined>,
		StatusReason: FormControl<string | null | undefined>,
		InitializedImportedDeviceCount: FormControl<number | null | undefined>,
		PendingImportedDeviceCount: FormControl<number | null | undefined>,
		OnboardedImportedDeviceCount: FormControl<number | null | undefined>,
		FailedImportedDeviceCount: FormControl<number | null | undefined>,
	}
	export function CreateGetWirelessDeviceImportTaskResponseFormGroup() {
		return new FormGroup<GetWirelessDeviceImportTaskResponseFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			Arn: new FormControl<string | null | undefined>(undefined),
			DestinationName: new FormControl<string | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			Status: new FormControl<ImportTaskStatus | null | undefined>(undefined),
			StatusReason: new FormControl<string | null | undefined>(undefined),
			InitializedImportedDeviceCount: new FormControl<number | null | undefined>(undefined),
			PendingImportedDeviceCount: new FormControl<number | null | undefined>(undefined),
			OnboardedImportedDeviceCount: new FormControl<number | null | undefined>(undefined),
			FailedImportedDeviceCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Sidewalk-related information for devices in an import task that are being onboarded. */
	export interface SidewalkGetStartImportInfo {
		DeviceCreationFileList?: Array<string>;
		Role?: string;
	}

	/** Sidewalk-related information for devices in an import task that are being onboarded. */
	export interface SidewalkGetStartImportInfoFormProperties {
		Role: FormControl<string | null | undefined>,
	}
	export function CreateSidewalkGetStartImportInfoFormGroup() {
		return new FormGroup<SidewalkGetStartImportInfoFormProperties>({
			Role: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ImportTaskStatus { INITIALIZING = 'INITIALIZING', INITIALIZED = 'INITIALIZED', PENDING = 'PENDING', COMPLETE = 'COMPLETE', FAILED = 'FAILED', DELETING = 'DELETING' }

	export interface GetWirelessDeviceStatisticsResponse {
		WirelessDeviceId?: string;
		LastUplinkReceivedAt?: string;
		LoRaWAN?: LoRaWANDeviceMetadata;
		Sidewalk?: SidewalkDeviceMetadata;
	}
	export interface GetWirelessDeviceStatisticsResponseFormProperties {
		WirelessDeviceId: FormControl<string | null | undefined>,
		LastUplinkReceivedAt: FormControl<string | null | undefined>,
	}
	export function CreateGetWirelessDeviceStatisticsResponseFormGroup() {
		return new FormGroup<GetWirelessDeviceStatisticsResponseFormProperties>({
			WirelessDeviceId: new FormControl<string | null | undefined>(undefined),
			LastUplinkReceivedAt: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** LoRaWAN device metatdata. */
	export interface LoRaWANDeviceMetadata {
		DevEui?: string;
		FPort?: number | null;
		DataRate?: number | null;
		Frequency?: number | null;
		Timestamp?: string;
		Gateways?: Array<LoRaWANGatewayMetadata>;
	}

	/** LoRaWAN device metatdata. */
	export interface LoRaWANDeviceMetadataFormProperties {
		DevEui: FormControl<string | null | undefined>,
		FPort: FormControl<number | null | undefined>,
		DataRate: FormControl<number | null | undefined>,
		Frequency: FormControl<number | null | undefined>,
		Timestamp: FormControl<string | null | undefined>,
	}
	export function CreateLoRaWANDeviceMetadataFormGroup() {
		return new FormGroup<LoRaWANDeviceMetadataFormProperties>({
			DevEui: new FormControl<string | null | undefined>(undefined),
			FPort: new FormControl<number | null | undefined>(undefined),
			DataRate: new FormControl<number | null | undefined>(undefined),
			Frequency: new FormControl<number | null | undefined>(undefined),
			Timestamp: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** LoRaWAN gateway metatdata. */
	export interface LoRaWANGatewayMetadata {
		GatewayEui?: string;
		Snr?: number | null;
		Rssi?: number | null;
	}

	/** LoRaWAN gateway metatdata. */
	export interface LoRaWANGatewayMetadataFormProperties {
		GatewayEui: FormControl<string | null | undefined>,
		Snr: FormControl<number | null | undefined>,
		Rssi: FormControl<number | null | undefined>,
	}
	export function CreateLoRaWANGatewayMetadataFormGroup() {
		return new FormGroup<LoRaWANGatewayMetadataFormProperties>({
			GatewayEui: new FormControl<string | null | undefined>(undefined),
			Snr: new FormControl<number | null | undefined>(undefined),
			Rssi: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** MetaData for Sidewalk device. */
	export interface SidewalkDeviceMetadata {
		Rssi?: number | null;
		BatteryLevel?: BatteryLevel;
		Event?: Event;
		DeviceState?: DeviceState;
	}

	/** MetaData for Sidewalk device. */
	export interface SidewalkDeviceMetadataFormProperties {
		Rssi: FormControl<number | null | undefined>,
		BatteryLevel: FormControl<BatteryLevel | null | undefined>,
		Event: FormControl<Event | null | undefined>,
		DeviceState: FormControl<DeviceState | null | undefined>,
	}
	export function CreateSidewalkDeviceMetadataFormGroup() {
		return new FormGroup<SidewalkDeviceMetadataFormProperties>({
			Rssi: new FormControl<number | null | undefined>(undefined),
			BatteryLevel: new FormControl<BatteryLevel | null | undefined>(undefined),
			Event: new FormControl<Event | null | undefined>(undefined),
			DeviceState: new FormControl<DeviceState | null | undefined>(undefined),
		});

	}


	/** Sidewalk device battery level. */
	export enum BatteryLevel { normal = 'normal', low = 'low', critical = 'critical' }


	/** Sidewalk device status notification. */
	export enum Event { discovered = 'discovered', lost = 'lost', ack = 'ack', nack = 'nack', passthrough = 'passthrough' }


	/** Device state defines the device status of sidewalk device. */
	export enum DeviceState { Provisioned = 'Provisioned', RegisteredNotSeen = 'RegisteredNotSeen', RegisteredReachable = 'RegisteredReachable', RegisteredUnreachable = 'RegisteredUnreachable' }

	export interface GetWirelessGatewayResponse {
		Name?: string;
		Id?: string;
		Description?: string;
		LoRaWAN?: LoRaWANGateway;
		Arn?: string;
		ThingName?: string;
		ThingArn?: string;
	}
	export interface GetWirelessGatewayResponseFormProperties {
		Name: FormControl<string | null | undefined>,
		Id: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		Arn: FormControl<string | null | undefined>,
		ThingName: FormControl<string | null | undefined>,
		ThingArn: FormControl<string | null | undefined>,
	}
	export function CreateGetWirelessGatewayResponseFormGroup() {
		return new FormGroup<GetWirelessGatewayResponseFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			Arn: new FormControl<string | null | undefined>(undefined),
			ThingName: new FormControl<string | null | undefined>(undefined),
			ThingArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** LoRaWANGateway object. */
	export interface LoRaWANGateway {
		GatewayEui?: string;
		RfRegion?: string;

		/**
		 * A list of JoinEuiRange used by LoRa gateways to filter LoRa frames.
		 * Minimum items: 0
		 * Maximum items: 3
		 */
		JoinEuiFilters?: Array<Array<string>>;

		/**
		 * A list of NetId values that are used by LoRa gateways to filter the uplink frames.
		 * Minimum items: 0
		 * Maximum items: 10
		 */
		NetIdFilters?: Array<string>;

		/**
		 * A list of integer indicating which sub bands are supported by LoRa gateway.
		 * Minimum items: 0
		 * Maximum items: 8
		 */
		SubBands?: Array<number>;
		Beaconing?: Beaconing;
		MaxEirp?: number;
	}

	/** LoRaWANGateway object. */
	export interface LoRaWANGatewayFormProperties {
		GatewayEui: FormControl<string | null | undefined>,
		RfRegion: FormControl<string | null | undefined>,
		MaxEirp: FormControl<number | null | undefined>,
	}
	export function CreateLoRaWANGatewayFormGroup() {
		return new FormGroup<LoRaWANGatewayFormProperties>({
			GatewayEui: new FormControl<string | null | undefined>(undefined),
			RfRegion: new FormControl<string | null | undefined>(undefined),
			MaxEirp: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetWirelessGatewayCertificateResponse {
		IotCertificateId?: string;
		LoRaWANNetworkServerCertificateId?: string;
	}
	export interface GetWirelessGatewayCertificateResponseFormProperties {
		IotCertificateId: FormControl<string | null | undefined>,
		LoRaWANNetworkServerCertificateId: FormControl<string | null | undefined>,
	}
	export function CreateGetWirelessGatewayCertificateResponseFormGroup() {
		return new FormGroup<GetWirelessGatewayCertificateResponseFormProperties>({
			IotCertificateId: new FormControl<string | null | undefined>(undefined),
			LoRaWANNetworkServerCertificateId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetWirelessGatewayFirmwareInformationResponse {
		LoRaWAN?: LoRaWANGatewayCurrentVersion;
	}
	export interface GetWirelessGatewayFirmwareInformationResponseFormProperties {
	}
	export function CreateGetWirelessGatewayFirmwareInformationResponseFormGroup() {
		return new FormGroup<GetWirelessGatewayFirmwareInformationResponseFormProperties>({
		});

	}


	/** LoRaWANGatewayCurrentVersion object. */
	export interface LoRaWANGatewayCurrentVersion {
		CurrentVersion?: LoRaWANGatewayVersion;
	}

	/** LoRaWANGatewayCurrentVersion object. */
	export interface LoRaWANGatewayCurrentVersionFormProperties {
	}
	export function CreateLoRaWANGatewayCurrentVersionFormGroup() {
		return new FormGroup<LoRaWANGatewayCurrentVersionFormProperties>({
		});

	}

	export interface GetWirelessGatewayStatisticsResponse {
		WirelessGatewayId?: string;
		LastUplinkReceivedAt?: string;
		ConnectionStatus?: ConnectionStatus;
	}
	export interface GetWirelessGatewayStatisticsResponseFormProperties {
		WirelessGatewayId: FormControl<string | null | undefined>,
		LastUplinkReceivedAt: FormControl<string | null | undefined>,
		ConnectionStatus: FormControl<ConnectionStatus | null | undefined>,
	}
	export function CreateGetWirelessGatewayStatisticsResponseFormGroup() {
		return new FormGroup<GetWirelessGatewayStatisticsResponseFormProperties>({
			WirelessGatewayId: new FormControl<string | null | undefined>(undefined),
			LastUplinkReceivedAt: new FormControl<string | null | undefined>(undefined),
			ConnectionStatus: new FormControl<ConnectionStatus | null | undefined>(undefined),
		});

	}

	export enum ConnectionStatus { Connected = 'Connected', Disconnected = 'Disconnected' }

	export interface GetWirelessGatewayTaskResponse {
		WirelessGatewayId?: string;
		WirelessGatewayTaskDefinitionId?: string;
		LastUplinkReceivedAt?: string;
		TaskCreatedAt?: string;
		Status?: WirelessGatewayTaskStatus;
	}
	export interface GetWirelessGatewayTaskResponseFormProperties {
		WirelessGatewayId: FormControl<string | null | undefined>,
		WirelessGatewayTaskDefinitionId: FormControl<string | null | undefined>,
		LastUplinkReceivedAt: FormControl<string | null | undefined>,
		TaskCreatedAt: FormControl<string | null | undefined>,
		Status: FormControl<WirelessGatewayTaskStatus | null | undefined>,
	}
	export function CreateGetWirelessGatewayTaskResponseFormGroup() {
		return new FormGroup<GetWirelessGatewayTaskResponseFormProperties>({
			WirelessGatewayId: new FormControl<string | null | undefined>(undefined),
			WirelessGatewayTaskDefinitionId: new FormControl<string | null | undefined>(undefined),
			LastUplinkReceivedAt: new FormControl<string | null | undefined>(undefined),
			TaskCreatedAt: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<WirelessGatewayTaskStatus | null | undefined>(undefined),
		});

	}

	export interface GetWirelessGatewayTaskDefinitionResponse {
		AutoCreateTasks?: boolean | null;
		Name?: string;
		Update?: UpdateWirelessGatewayTaskCreate;
		Arn?: string;
	}
	export interface GetWirelessGatewayTaskDefinitionResponseFormProperties {
		AutoCreateTasks: FormControl<boolean | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Arn: FormControl<string | null | undefined>,
	}
	export function CreateGetWirelessGatewayTaskDefinitionResponseFormGroup() {
		return new FormGroup<GetWirelessGatewayTaskDefinitionResponseFormProperties>({
			AutoCreateTasks: new FormControl<boolean | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Arn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** UpdateWirelessGatewayTaskCreate object. */
	export interface UpdateWirelessGatewayTaskCreate {
		UpdateDataSource?: string;
		UpdateDataRole?: string;
		LoRaWAN?: LoRaWANUpdateGatewayTaskCreate;
	}

	/** UpdateWirelessGatewayTaskCreate object. */
	export interface UpdateWirelessGatewayTaskCreateFormProperties {
		UpdateDataSource: FormControl<string | null | undefined>,
		UpdateDataRole: FormControl<string | null | undefined>,
	}
	export function CreateUpdateWirelessGatewayTaskCreateFormGroup() {
		return new FormGroup<UpdateWirelessGatewayTaskCreateFormProperties>({
			UpdateDataSource: new FormControl<string | null | undefined>(undefined),
			UpdateDataRole: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListDestinationsResponse {
		NextToken?: string;
		DestinationList?: Array<Destinations>;
	}
	export interface ListDestinationsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListDestinationsResponseFormGroup() {
		return new FormGroup<ListDestinationsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes a destination. */
	export interface Destinations {
		Arn?: string;
		Name?: string;
		ExpressionType?: ExpressionType;
		Expression?: string;
		Description?: string;
		RoleArn?: string;
	}

	/** Describes a destination. */
	export interface DestinationsFormProperties {
		Arn: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		ExpressionType: FormControl<ExpressionType | null | undefined>,
		Expression: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		RoleArn: FormControl<string | null | undefined>,
	}
	export function CreateDestinationsFormGroup() {
		return new FormGroup<DestinationsFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			ExpressionType: new FormControl<ExpressionType | null | undefined>(undefined),
			Expression: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			RoleArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListDeviceProfilesResponse {
		NextToken?: string;
		DeviceProfileList?: Array<DeviceProfile>;
	}
	export interface ListDeviceProfilesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListDeviceProfilesResponseFormGroup() {
		return new FormGroup<ListDeviceProfilesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes a device profile. */
	export interface DeviceProfile {
		Arn?: string;
		Name?: string;
		Id?: string;
	}

	/** Describes a device profile. */
	export interface DeviceProfileFormProperties {
		Arn: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Id: FormControl<string | null | undefined>,
	}
	export function CreateDeviceProfileFormGroup() {
		return new FormGroup<DeviceProfileFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListDevicesForWirelessDeviceImportTaskResponse {
		NextToken?: string;
		DestinationName?: string;
		ImportedWirelessDeviceList?: Array<ImportedWirelessDevice>;
	}
	export interface ListDevicesForWirelessDeviceImportTaskResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
		DestinationName: FormControl<string | null | undefined>,
	}
	export function CreateListDevicesForWirelessDeviceImportTaskResponseFormGroup() {
		return new FormGroup<ListDevicesForWirelessDeviceImportTaskResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			DestinationName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about a wireless device that has been added to an import task. */
	export interface ImportedWirelessDevice {
		Sidewalk?: ImportedSidewalkDevice;
	}

	/** Information about a wireless device that has been added to an import task. */
	export interface ImportedWirelessDeviceFormProperties {
	}
	export function CreateImportedWirelessDeviceFormGroup() {
		return new FormGroup<ImportedWirelessDeviceFormProperties>({
		});

	}


	/** Information about a Sidewalk device that has been added to an import task. */
	export interface ImportedSidewalkDevice {
		SidewalkManufacturingSn?: string;
		OnboardingStatus?: OnboardStatus;
		OnboardingStatusReason?: string;
		LastUpdateTime?: Date;
	}

	/** Information about a Sidewalk device that has been added to an import task. */
	export interface ImportedSidewalkDeviceFormProperties {
		SidewalkManufacturingSn: FormControl<string | null | undefined>,
		OnboardingStatus: FormControl<OnboardStatus | null | undefined>,
		OnboardingStatusReason: FormControl<string | null | undefined>,
		LastUpdateTime: FormControl<Date | null | undefined>,
	}
	export function CreateImportedSidewalkDeviceFormGroup() {
		return new FormGroup<ImportedSidewalkDeviceFormProperties>({
			SidewalkManufacturingSn: new FormControl<string | null | undefined>(undefined),
			OnboardingStatus: new FormControl<OnboardStatus | null | undefined>(undefined),
			OnboardingStatusReason: new FormControl<string | null | undefined>(undefined),
			LastUpdateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum OnboardStatus { INITIALIZED = 'INITIALIZED', PENDING = 'PENDING', ONBOARDED = 'ONBOARDED', FAILED = 'FAILED' }

	export interface ListEventConfigurationsResponse {
		NextToken?: string;
		EventConfigurationsList?: Array<EventConfigurationItem>;
	}
	export interface ListEventConfigurationsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListEventConfigurationsResponseFormGroup() {
		return new FormGroup<ListEventConfigurationsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Event configuration object for a single resource. */
	export interface EventConfigurationItem {
		Identifier?: string;
		IdentifierType?: IdentifierType;
		PartnerType?: EventNotificationPartnerType;

		/** Object of all event configurations and the status of the event topics. */
		Events?: EventNotificationItemConfigurations;
	}

	/** Event configuration object for a single resource. */
	export interface EventConfigurationItemFormProperties {
		Identifier: FormControl<string | null | undefined>,
		IdentifierType: FormControl<IdentifierType | null | undefined>,
		PartnerType: FormControl<EventNotificationPartnerType | null | undefined>,
	}
	export function CreateEventConfigurationItemFormGroup() {
		return new FormGroup<EventConfigurationItemFormProperties>({
			Identifier: new FormControl<string | null | undefined>(undefined),
			IdentifierType: new FormControl<IdentifierType | null | undefined>(undefined),
			PartnerType: new FormControl<EventNotificationPartnerType | null | undefined>(undefined),
		});

	}

	export enum IdentifierType { PartnerAccountId = 'PartnerAccountId', DevEui = 'DevEui', GatewayEui = 'GatewayEui', WirelessDeviceId = 'WirelessDeviceId', WirelessGatewayId = 'WirelessGatewayId' }

	export enum EventNotificationPartnerType { Sidewalk = 'Sidewalk' }


	/** Object of all event configurations and the status of the event topics. */
	export interface EventNotificationItemConfigurations {
		DeviceRegistrationState?: DeviceRegistrationStateEventConfiguration;
		Proximity?: ProximityEventConfiguration;
		Join?: JoinEventConfiguration;
		ConnectionStatus?: ConnectionStatusEventConfiguration;
		MessageDeliveryStatus?: MessageDeliveryStatusEventConfiguration;
	}

	/** Object of all event configurations and the status of the event topics. */
	export interface EventNotificationItemConfigurationsFormProperties {
	}
	export function CreateEventNotificationItemConfigurationsFormGroup() {
		return new FormGroup<EventNotificationItemConfigurationsFormProperties>({
		});

	}

	export interface ListFuotaTasksResponse {
		NextToken?: string;

		/** Lists the FUOTA tasks registered to your AWS account. */
		FuotaTaskList?: Array<FuotaTask>;
	}
	export interface ListFuotaTasksResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListFuotaTasksResponseFormGroup() {
		return new FormGroup<ListFuotaTasksResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A FUOTA task. */
	export interface FuotaTask {

		/**
		 * The ID of a FUOTA task.
		 * Max length: 256
		 */
		Id?: string | null;

		/**
		 * The arn of a FUOTA task.
		 * Max length: 128
		 */
		Arn?: string | null;

		/**
		 * The name of a FUOTA task.
		 * Max length: 256
		 */
		Name?: string | null;
	}

	/** A FUOTA task. */
	export interface FuotaTaskFormProperties {

		/**
		 * The ID of a FUOTA task.
		 * Max length: 256
		 */
		Id: FormControl<string | null | undefined>,

		/**
		 * The arn of a FUOTA task.
		 * Max length: 128
		 */
		Arn: FormControl<string | null | undefined>,

		/**
		 * The name of a FUOTA task.
		 * Max length: 256
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateFuotaTaskFormGroup() {
		return new FormGroup<FuotaTaskFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256)]),
			Arn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256)]),
		});

	}

	export interface ListMulticastGroupsResponse {
		NextToken?: string;

		/** List of multicast groups. */
		MulticastGroupList?: Array<MulticastGroup>;
	}
	export interface ListMulticastGroupsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListMulticastGroupsResponseFormGroup() {
		return new FormGroup<ListMulticastGroupsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A multicast group. */
	export interface MulticastGroup {

		/**
		 * The ID of the multicast group.
		 * Max length: 256
		 */
		Id?: string | null;

		/**
		 * The arn of the multicast group.
		 * Max length: 128
		 */
		Arn?: string | null;

		/**
		 * The name of the multicast group.
		 * Max length: 256
		 */
		Name?: string | null;
	}

	/** A multicast group. */
	export interface MulticastGroupFormProperties {

		/**
		 * The ID of the multicast group.
		 * Max length: 256
		 */
		Id: FormControl<string | null | undefined>,

		/**
		 * The arn of the multicast group.
		 * Max length: 128
		 */
		Arn: FormControl<string | null | undefined>,

		/**
		 * The name of the multicast group.
		 * Max length: 256
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateMulticastGroupFormGroup() {
		return new FormGroup<MulticastGroupFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256)]),
			Arn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256)]),
		});

	}

	export interface ListMulticastGroupsByFuotaTaskResponse {
		NextToken?: string;

		/** List of multicast groups associated with a FUOTA task. */
		MulticastGroupList?: Array<MulticastGroupByFuotaTask>;
	}
	export interface ListMulticastGroupsByFuotaTaskResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListMulticastGroupsByFuotaTaskResponseFormGroup() {
		return new FormGroup<ListMulticastGroupsByFuotaTaskResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A multicast group that is associated with a FUOTA task. */
	export interface MulticastGroupByFuotaTask {

		/**
		 * The ID of the multicast group.
		 * Max length: 256
		 */
		Id?: string | null;
	}

	/** A multicast group that is associated with a FUOTA task. */
	export interface MulticastGroupByFuotaTaskFormProperties {

		/**
		 * The ID of the multicast group.
		 * Max length: 256
		 */
		Id: FormControl<string | null | undefined>,
	}
	export function CreateMulticastGroupByFuotaTaskFormGroup() {
		return new FormGroup<MulticastGroupByFuotaTaskFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256)]),
		});

	}

	export interface ListNetworkAnalyzerConfigurationsResponse {
		NextToken?: string;
		NetworkAnalyzerConfigurationList?: Array<NetworkAnalyzerConfigurations>;
	}
	export interface ListNetworkAnalyzerConfigurationsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListNetworkAnalyzerConfigurationsResponseFormGroup() {
		return new FormGroup<ListNetworkAnalyzerConfigurationsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Network analyzer configurations. */
	export interface NetworkAnalyzerConfigurations {
		Arn?: string;

		/**
		 * Name of the network analyzer configuration.
		 * Min length: 1
		 * Max length: 1024
		 */
		Name?: string | null;
	}

	/** Network analyzer configurations. */
	export interface NetworkAnalyzerConfigurationsFormProperties {
		Arn: FormControl<string | null | undefined>,

		/**
		 * Name of the network analyzer configuration.
		 * Min length: 1
		 * Max length: 1024
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateNetworkAnalyzerConfigurationsFormGroup() {
		return new FormGroup<NetworkAnalyzerConfigurationsFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024), Validators.pattern('[a-zA-Z0-9-_]+')]),
		});

	}

	export interface ListPartnerAccountsResponse {
		NextToken?: string;
		Sidewalk?: Array<SidewalkAccountInfoWithFingerprint>;
	}
	export interface ListPartnerAccountsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListPartnerAccountsResponseFormGroup() {
		return new FormGroup<ListPartnerAccountsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This operation is no longer supported. */
	export interface ListPositionConfigurationsResponse {
		PositionConfigurationList?: Array<PositionConfigurationItem>;
		NextToken?: string;
	}

	/** This operation is no longer supported. */
	export interface ListPositionConfigurationsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListPositionConfigurationsResponseFormGroup() {
		return new FormGroup<ListPositionConfigurationsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The wrapper for a position configuration. */
	export interface PositionConfigurationItem {
		ResourceIdentifier?: string;
		ResourceType?: PositionResourceType;
		Solvers?: PositionSolverDetails;
		Destination?: string;
	}

	/** The wrapper for a position configuration. */
	export interface PositionConfigurationItemFormProperties {
		ResourceIdentifier: FormControl<string | null | undefined>,
		ResourceType: FormControl<PositionResourceType | null | undefined>,
		Destination: FormControl<string | null | undefined>,
	}
	export function CreatePositionConfigurationItemFormGroup() {
		return new FormGroup<PositionConfigurationItemFormProperties>({
			ResourceIdentifier: new FormControl<string | null | undefined>(undefined),
			ResourceType: new FormControl<PositionResourceType | null | undefined>(undefined),
			Destination: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum PositionResourceType { WirelessDevice = 'WirelessDevice', WirelessGateway = 'WirelessGateway' }

	export interface ListQueuedMessagesResponse {
		NextToken?: string;
		DownlinkQueueMessagesList?: Array<DownlinkQueueMessage>;
	}
	export interface ListQueuedMessagesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListQueuedMessagesResponseFormGroup() {
		return new FormGroup<ListQueuedMessagesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The message in the downlink queue. */
	export interface DownlinkQueueMessage {
		MessageId?: string;
		TransmitMode?: number | null;
		ReceivedAt?: string;

		/** LoRaWAN router info. */
		LoRaWAN?: LoRaWANSendDataToDevice;
	}

	/** The message in the downlink queue. */
	export interface DownlinkQueueMessageFormProperties {
		MessageId: FormControl<string | null | undefined>,
		TransmitMode: FormControl<number | null | undefined>,
		ReceivedAt: FormControl<string | null | undefined>,
	}
	export function CreateDownlinkQueueMessageFormGroup() {
		return new FormGroup<DownlinkQueueMessageFormProperties>({
			MessageId: new FormControl<string | null | undefined>(undefined),
			TransmitMode: new FormControl<number | null | undefined>(undefined),
			ReceivedAt: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** LoRaWAN router info. */
	export interface LoRaWANSendDataToDevice {

		/**
		 * The Fport value.
		 * Minimum: 1
		 * Maximum: 223
		 */
		FPort?: number | null;
		ParticipatingGateways?: ParticipatingGateways;
	}

	/** LoRaWAN router info. */
	export interface LoRaWANSendDataToDeviceFormProperties {

		/**
		 * The Fport value.
		 * Minimum: 1
		 * Maximum: 223
		 */
		FPort: FormControl<number | null | undefined>,
	}
	export function CreateLoRaWANSendDataToDeviceFormGroup() {
		return new FormGroup<LoRaWANSendDataToDeviceFormProperties>({
			FPort: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(223)]),
		});

	}


	/** Specify the list of gateways to which you want to send downlink data traffic when the wireless device is running in class B or class C mode. */
	export interface ParticipatingGateways {

		/** Required */
		DownlinkMode: DownlinkMode;

		/** Required */
		GatewayList: Array<GatewayListItem>;

		/** Required */
		TransmissionInterval: number;
	}

	/** Specify the list of gateways to which you want to send downlink data traffic when the wireless device is running in class B or class C mode. */
	export interface ParticipatingGatewaysFormProperties {

		/** Required */
		DownlinkMode: FormControl<DownlinkMode | null | undefined>,

		/** Required */
		TransmissionInterval: FormControl<number | null | undefined>,
	}
	export function CreateParticipatingGatewaysFormGroup() {
		return new FormGroup<ParticipatingGatewaysFormProperties>({
			DownlinkMode: new FormControl<DownlinkMode | null | undefined>(undefined, [Validators.required]),
			TransmissionInterval: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum DownlinkMode { SEQUENTIAL = 'SEQUENTIAL', CONCURRENT = 'CONCURRENT', USING_UPLINK_GATEWAY = 'USING_UPLINK_GATEWAY' }


	/** Gateway list item object that specifies the frequency and list of gateways for which the downlink message should be sent. */
	export interface GatewayListItem {

		/** Required */
		GatewayId: string;

		/** Required */
		DownlinkFrequency: number;
	}

	/** Gateway list item object that specifies the frequency and list of gateways for which the downlink message should be sent. */
	export interface GatewayListItemFormProperties {

		/** Required */
		GatewayId: FormControl<string | null | undefined>,

		/** Required */
		DownlinkFrequency: FormControl<number | null | undefined>,
	}
	export function CreateGatewayListItemFormGroup() {
		return new FormGroup<GatewayListItemFormProperties>({
			GatewayId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DownlinkFrequency: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListServiceProfilesResponse {
		NextToken?: string;
		ServiceProfileList?: Array<ServiceProfile>;
	}
	export interface ListServiceProfilesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListServiceProfilesResponseFormGroup() {
		return new FormGroup<ListServiceProfilesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about a service profile. */
	export interface ServiceProfile {
		Arn?: string;
		Name?: string;
		Id?: string;
	}

	/** Information about a service profile. */
	export interface ServiceProfileFormProperties {
		Arn: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Id: FormControl<string | null | undefined>,
	}
	export function CreateServiceProfileFormGroup() {
		return new FormGroup<ServiceProfileFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListTagsForResourceResponse {
		Tags?: Array<Tag>;
	}
	export interface ListTagsForResourceResponseFormProperties {
	}
	export function CreateListTagsForResourceResponseFormGroup() {
		return new FormGroup<ListTagsForResourceResponseFormProperties>({
		});

	}

	export interface ListWirelessDeviceImportTasksResponse {
		NextToken?: string;
		WirelessDeviceImportTaskList?: Array<WirelessDeviceImportTask>;
	}
	export interface ListWirelessDeviceImportTasksResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListWirelessDeviceImportTasksResponseFormGroup() {
		return new FormGroup<ListWirelessDeviceImportTasksResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about an import task for wireless devices. */
	export interface WirelessDeviceImportTask {
		Id?: string;
		Arn?: string;
		DestinationName?: string;
		Sidewalk?: SidewalkGetStartImportInfo;
		CreationTime?: Date;
		Status?: ImportTaskStatus;
		StatusReason?: string;
		InitializedImportedDeviceCount?: number | null;
		PendingImportedDeviceCount?: number | null;
		OnboardedImportedDeviceCount?: number | null;
		FailedImportedDeviceCount?: number | null;
	}

	/** Information about an import task for wireless devices. */
	export interface WirelessDeviceImportTaskFormProperties {
		Id: FormControl<string | null | undefined>,
		Arn: FormControl<string | null | undefined>,
		DestinationName: FormControl<string | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
		Status: FormControl<ImportTaskStatus | null | undefined>,
		StatusReason: FormControl<string | null | undefined>,
		InitializedImportedDeviceCount: FormControl<number | null | undefined>,
		PendingImportedDeviceCount: FormControl<number | null | undefined>,
		OnboardedImportedDeviceCount: FormControl<number | null | undefined>,
		FailedImportedDeviceCount: FormControl<number | null | undefined>,
	}
	export function CreateWirelessDeviceImportTaskFormGroup() {
		return new FormGroup<WirelessDeviceImportTaskFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			Arn: new FormControl<string | null | undefined>(undefined),
			DestinationName: new FormControl<string | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			Status: new FormControl<ImportTaskStatus | null | undefined>(undefined),
			StatusReason: new FormControl<string | null | undefined>(undefined),
			InitializedImportedDeviceCount: new FormControl<number | null | undefined>(undefined),
			PendingImportedDeviceCount: new FormControl<number | null | undefined>(undefined),
			OnboardedImportedDeviceCount: new FormControl<number | null | undefined>(undefined),
			FailedImportedDeviceCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListWirelessDevicesResponse {
		NextToken?: string;
		WirelessDeviceList?: Array<WirelessDeviceStatistics>;
	}
	export interface ListWirelessDevicesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListWirelessDevicesResponseFormGroup() {
		return new FormGroup<ListWirelessDevicesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about a wireless device's operation. */
	export interface WirelessDeviceStatistics {
		Arn?: string;
		Id?: string;
		Type?: WirelessDeviceType;
		Name?: string;
		DestinationName?: string;
		LastUplinkReceivedAt?: string;
		LoRaWAN?: LoRaWANListDevice;
		Sidewalk?: SidewalkListDevice;

		/** The status of a wireless device in a FUOTA task. */
		FuotaDeviceStatus?: WirelessDeviceStatisticsFuotaDeviceStatus | null;
		MulticastDeviceStatus?: string;

		/**
		 * Id of the multicast group.
		 * Minimum: 1
		 * Maximum: 256
		 */
		McGroupId?: number | null;
	}

	/** Information about a wireless device's operation. */
	export interface WirelessDeviceStatisticsFormProperties {
		Arn: FormControl<string | null | undefined>,
		Id: FormControl<string | null | undefined>,
		Type: FormControl<WirelessDeviceType | null | undefined>,
		Name: FormControl<string | null | undefined>,
		DestinationName: FormControl<string | null | undefined>,
		LastUplinkReceivedAt: FormControl<string | null | undefined>,

		/** The status of a wireless device in a FUOTA task. */
		FuotaDeviceStatus: FormControl<WirelessDeviceStatisticsFuotaDeviceStatus | null | undefined>,
		MulticastDeviceStatus: FormControl<string | null | undefined>,

		/**
		 * Id of the multicast group.
		 * Minimum: 1
		 * Maximum: 256
		 */
		McGroupId: FormControl<number | null | undefined>,
	}
	export function CreateWirelessDeviceStatisticsFormGroup() {
		return new FormGroup<WirelessDeviceStatisticsFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<WirelessDeviceType | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			DestinationName: new FormControl<string | null | undefined>(undefined),
			LastUplinkReceivedAt: new FormControl<string | null | undefined>(undefined),
			FuotaDeviceStatus: new FormControl<WirelessDeviceStatisticsFuotaDeviceStatus | null | undefined>(undefined),
			MulticastDeviceStatus: new FormControl<string | null | undefined>(undefined),
			McGroupId: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(256)]),
		});

	}


	/** LoRaWAN object for list functions. */
	export interface LoRaWANListDevice {
		DevEui?: string;
	}

	/** LoRaWAN object for list functions. */
	export interface LoRaWANListDeviceFormProperties {
		DevEui: FormControl<string | null | undefined>,
	}
	export function CreateLoRaWANListDeviceFormGroup() {
		return new FormGroup<LoRaWANListDeviceFormProperties>({
			DevEui: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Sidewalk object used by list functions. */
	export interface SidewalkListDevice {
		AmazonId?: string;
		SidewalkId?: string;
		SidewalkManufacturingSn?: string;
		DeviceCertificates?: Array<CertificateList>;
		DeviceProfileId?: string;
		Status?: WirelessDeviceSidewalkStatus;
	}

	/** Sidewalk object used by list functions. */
	export interface SidewalkListDeviceFormProperties {
		AmazonId: FormControl<string | null | undefined>,
		SidewalkId: FormControl<string | null | undefined>,
		SidewalkManufacturingSn: FormControl<string | null | undefined>,
		DeviceProfileId: FormControl<string | null | undefined>,
		Status: FormControl<WirelessDeviceSidewalkStatus | null | undefined>,
	}
	export function CreateSidewalkListDeviceFormGroup() {
		return new FormGroup<SidewalkListDeviceFormProperties>({
			AmazonId: new FormControl<string | null | undefined>(undefined),
			SidewalkId: new FormControl<string | null | undefined>(undefined),
			SidewalkManufacturingSn: new FormControl<string | null | undefined>(undefined),
			DeviceProfileId: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<WirelessDeviceSidewalkStatus | null | undefined>(undefined),
		});

	}

	export enum WirelessDeviceStatisticsFuotaDeviceStatus { Initial = 'Initial', Package_Not_Supported = 'Package_Not_Supported', FragAlgo_unsupported = 'FragAlgo_unsupported', Not_enough_memory = 'Not_enough_memory', FragIndex_unsupported = 'FragIndex_unsupported', Wrong_descriptor = 'Wrong_descriptor', SessionCnt_replay = 'SessionCnt_replay', MissingFrag = 'MissingFrag', MemoryError = 'MemoryError', MICError = 'MICError', Successful = 'Successful' }

	export interface ListWirelessGatewayTaskDefinitionsResponse {
		NextToken?: string;
		TaskDefinitions?: Array<UpdateWirelessGatewayTaskEntry>;
	}
	export interface ListWirelessGatewayTaskDefinitionsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListWirelessGatewayTaskDefinitionsResponseFormGroup() {
		return new FormGroup<ListWirelessGatewayTaskDefinitionsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** UpdateWirelessGatewayTaskEntry object. */
	export interface UpdateWirelessGatewayTaskEntry {
		Id?: string;
		LoRaWAN?: LoRaWANUpdateGatewayTaskEntry;
		Arn?: string;
	}

	/** UpdateWirelessGatewayTaskEntry object. */
	export interface UpdateWirelessGatewayTaskEntryFormProperties {
		Id: FormControl<string | null | undefined>,
		Arn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateWirelessGatewayTaskEntryFormGroup() {
		return new FormGroup<UpdateWirelessGatewayTaskEntryFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			Arn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** LoRaWANUpdateGatewayTaskEntry object. */
	export interface LoRaWANUpdateGatewayTaskEntry {
		CurrentVersion?: LoRaWANGatewayVersion;
		UpdateVersion?: LoRaWANGatewayVersion;
	}

	/** LoRaWANUpdateGatewayTaskEntry object. */
	export interface LoRaWANUpdateGatewayTaskEntryFormProperties {
	}
	export function CreateLoRaWANUpdateGatewayTaskEntryFormGroup() {
		return new FormGroup<LoRaWANUpdateGatewayTaskEntryFormProperties>({
		});

	}

	export interface ListWirelessGatewaysResponse {
		NextToken?: string;
		WirelessGatewayList?: Array<WirelessGatewayStatistics>;
	}
	export interface ListWirelessGatewaysResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListWirelessGatewaysResponseFormGroup() {
		return new FormGroup<ListWirelessGatewaysResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about a wireless gateway's operation. */
	export interface WirelessGatewayStatistics {
		Arn?: string;
		Id?: string;
		Name?: string;
		Description?: string;
		LoRaWAN?: LoRaWANGateway;
		LastUplinkReceivedAt?: string;
	}

	/** Information about a wireless gateway's operation. */
	export interface WirelessGatewayStatisticsFormProperties {
		Arn: FormControl<string | null | undefined>,
		Id: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		LastUplinkReceivedAt: FormControl<string | null | undefined>,
	}
	export function CreateWirelessGatewayStatisticsFormGroup() {
		return new FormGroup<WirelessGatewayStatisticsFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			LastUplinkReceivedAt: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This operation is no longer supported. */
	export interface PutPositionConfigurationResponse {
	}

	/** This operation is no longer supported. */
	export interface PutPositionConfigurationResponseFormProperties {
	}
	export function CreatePutPositionConfigurationResponseFormGroup() {
		return new FormGroup<PutPositionConfigurationResponseFormProperties>({
		});

	}


	/** Information about the Semtech GNSS solver configuration. */
	export interface SemtechGnssConfiguration {

		/** Required */
		Status: EventNotificationTopicStatus;

		/** Required */
		Fec: PositionConfigurationFec;
	}

	/** Information about the Semtech GNSS solver configuration. */
	export interface SemtechGnssConfigurationFormProperties {

		/** Required */
		Status: FormControl<EventNotificationTopicStatus | null | undefined>,

		/** Required */
		Fec: FormControl<PositionConfigurationFec | null | undefined>,
	}
	export function CreateSemtechGnssConfigurationFormGroup() {
		return new FormGroup<SemtechGnssConfigurationFormProperties>({
			Status: new FormControl<EventNotificationTopicStatus | null | undefined>(undefined, [Validators.required]),
			Fec: new FormControl<PositionConfigurationFec | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PutResourceLogLevelResponse {
	}
	export interface PutResourceLogLevelResponseFormProperties {
	}
	export function CreatePutResourceLogLevelResponseFormGroup() {
		return new FormGroup<PutResourceLogLevelResponseFormProperties>({
		});

	}

	export interface ResetAllResourceLogLevelsResponse {
	}
	export interface ResetAllResourceLogLevelsResponseFormProperties {
	}
	export function CreateResetAllResourceLogLevelsResponseFormGroup() {
		return new FormGroup<ResetAllResourceLogLevelsResponseFormProperties>({
		});

	}

	export interface ResetResourceLogLevelResponse {
	}
	export interface ResetResourceLogLevelResponseFormProperties {
	}
	export function CreateResetResourceLogLevelResponseFormGroup() {
		return new FormGroup<ResetResourceLogLevelResponseFormProperties>({
		});

	}

	export interface SendDataToMulticastGroupResponse {

		/**
		 * ID of a multicast group message.
		 * Max length: 256
		 */
		MessageId?: string | null;
	}
	export interface SendDataToMulticastGroupResponseFormProperties {

		/**
		 * ID of a multicast group message.
		 * Max length: 256
		 */
		MessageId: FormControl<string | null | undefined>,
	}
	export function CreateSendDataToMulticastGroupResponseFormGroup() {
		return new FormGroup<SendDataToMulticastGroupResponseFormProperties>({
			MessageId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256)]),
		});

	}


	/** The metadata information of the LoRaWAN multicast group. */
	export interface LoRaWANMulticastMetadata {

		/**
		 * The Fport value.
		 * Minimum: 1
		 * Maximum: 223
		 */
		FPort?: number | null;
	}

	/** The metadata information of the LoRaWAN multicast group. */
	export interface LoRaWANMulticastMetadataFormProperties {

		/**
		 * The Fport value.
		 * Minimum: 1
		 * Maximum: 223
		 */
		FPort: FormControl<number | null | undefined>,
	}
	export function CreateLoRaWANMulticastMetadataFormGroup() {
		return new FormGroup<LoRaWANMulticastMetadataFormProperties>({
			FPort: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(223)]),
		});

	}

	export interface SendDataToWirelessDeviceResponse {
		MessageId?: string;
	}
	export interface SendDataToWirelessDeviceResponseFormProperties {
		MessageId: FormControl<string | null | undefined>,
	}
	export function CreateSendDataToWirelessDeviceResponseFormGroup() {
		return new FormGroup<SendDataToWirelessDeviceResponseFormProperties>({
			MessageId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about a Sidewalk router. */
	export interface SidewalkSendDataToDevice {
		Seq?: number | null;

		/** Sidewalk device message type. Default value is <code>CUSTOM_COMMAND_ID_NOTIFY</code>. */
		MessageType?: SidewalkSendDataToDeviceMessageType | null;
		AckModeRetryDurationSecs?: number | null;
	}

	/** Information about a Sidewalk router. */
	export interface SidewalkSendDataToDeviceFormProperties {
		Seq: FormControl<number | null | undefined>,

		/** Sidewalk device message type. Default value is <code>CUSTOM_COMMAND_ID_NOTIFY</code>. */
		MessageType: FormControl<SidewalkSendDataToDeviceMessageType | null | undefined>,
		AckModeRetryDurationSecs: FormControl<number | null | undefined>,
	}
	export function CreateSidewalkSendDataToDeviceFormGroup() {
		return new FormGroup<SidewalkSendDataToDeviceFormProperties>({
			Seq: new FormControl<number | null | undefined>(undefined),
			MessageType: new FormControl<SidewalkSendDataToDeviceMessageType | null | undefined>(undefined),
			AckModeRetryDurationSecs: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum SidewalkSendDataToDeviceMessageType { CUSTOM_COMMAND_ID_NOTIFY = 'CUSTOM_COMMAND_ID_NOTIFY', CUSTOM_COMMAND_ID_GET = 'CUSTOM_COMMAND_ID_GET', CUSTOM_COMMAND_ID_SET = 'CUSTOM_COMMAND_ID_SET', CUSTOM_COMMAND_ID_RESP = 'CUSTOM_COMMAND_ID_RESP' }

	export interface StartBulkAssociateWirelessDeviceWithMulticastGroupResponse {
	}
	export interface StartBulkAssociateWirelessDeviceWithMulticastGroupResponseFormProperties {
	}
	export function CreateStartBulkAssociateWirelessDeviceWithMulticastGroupResponseFormGroup() {
		return new FormGroup<StartBulkAssociateWirelessDeviceWithMulticastGroupResponseFormProperties>({
		});

	}

	export interface StartBulkDisassociateWirelessDeviceFromMulticastGroupResponse {
	}
	export interface StartBulkDisassociateWirelessDeviceFromMulticastGroupResponseFormProperties {
	}
	export function CreateStartBulkDisassociateWirelessDeviceFromMulticastGroupResponseFormGroup() {
		return new FormGroup<StartBulkDisassociateWirelessDeviceFromMulticastGroupResponseFormProperties>({
		});

	}

	export interface StartFuotaTaskResponse {
	}
	export interface StartFuotaTaskResponseFormProperties {
	}
	export function CreateStartFuotaTaskResponseFormGroup() {
		return new FormGroup<StartFuotaTaskResponseFormProperties>({
		});

	}

	export interface StartMulticastGroupSessionResponse {
	}
	export interface StartMulticastGroupSessionResponseFormProperties {
	}
	export function CreateStartMulticastGroupSessionResponseFormGroup() {
		return new FormGroup<StartMulticastGroupSessionResponseFormProperties>({
		});

	}

	export interface StartSingleWirelessDeviceImportTaskResponse {
		Id?: string;
		Arn?: string;
	}
	export interface StartSingleWirelessDeviceImportTaskResponseFormProperties {
		Id: FormControl<string | null | undefined>,
		Arn: FormControl<string | null | undefined>,
	}
	export function CreateStartSingleWirelessDeviceImportTaskResponseFormGroup() {
		return new FormGroup<StartSingleWirelessDeviceImportTaskResponseFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			Arn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StartWirelessDeviceImportTaskResponse {
		Id?: string;
		Arn?: string;
	}
	export interface StartWirelessDeviceImportTaskResponseFormProperties {
		Id: FormControl<string | null | undefined>,
		Arn: FormControl<string | null | undefined>,
	}
	export function CreateStartWirelessDeviceImportTaskResponseFormGroup() {
		return new FormGroup<StartWirelessDeviceImportTaskResponseFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			Arn: new FormControl<string | null | undefined>(undefined),
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

	export interface TooManyTagsException {
	}
	export interface TooManyTagsExceptionFormProperties {
	}
	export function CreateTooManyTagsExceptionFormGroup() {
		return new FormGroup<TooManyTagsExceptionFormProperties>({
		});

	}

	export interface TestWirelessDeviceResponse {
		Result?: string;
	}
	export interface TestWirelessDeviceResponseFormProperties {
		Result: FormControl<string | null | undefined>,
	}
	export function CreateTestWirelessDeviceResponseFormGroup() {
		return new FormGroup<TestWirelessDeviceResponseFormProperties>({
			Result: new FormControl<string | null | undefined>(undefined),
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

	export interface UpdateDestinationResponse {
	}
	export interface UpdateDestinationResponseFormProperties {
	}
	export function CreateUpdateDestinationResponseFormGroup() {
		return new FormGroup<UpdateDestinationResponseFormProperties>({
		});

	}

	export interface UpdateEventConfigurationByResourceTypesResponse {
	}
	export interface UpdateEventConfigurationByResourceTypesResponseFormProperties {
	}
	export function CreateUpdateEventConfigurationByResourceTypesResponseFormGroup() {
		return new FormGroup<UpdateEventConfigurationByResourceTypesResponseFormProperties>({
		});

	}

	export interface UpdateFuotaTaskResponse {
	}
	export interface UpdateFuotaTaskResponseFormProperties {
	}
	export function CreateUpdateFuotaTaskResponseFormGroup() {
		return new FormGroup<UpdateFuotaTaskResponseFormProperties>({
		});

	}

	export interface UpdateLogLevelsByResourceTypesResponse {
	}
	export interface UpdateLogLevelsByResourceTypesResponseFormProperties {
	}
	export function CreateUpdateLogLevelsByResourceTypesResponseFormGroup() {
		return new FormGroup<UpdateLogLevelsByResourceTypesResponseFormProperties>({
		});

	}

	export interface UpdateMulticastGroupResponse {
	}
	export interface UpdateMulticastGroupResponseFormProperties {
	}
	export function CreateUpdateMulticastGroupResponseFormGroup() {
		return new FormGroup<UpdateMulticastGroupResponseFormProperties>({
		});

	}

	export interface UpdateNetworkAnalyzerConfigurationResponse {
	}
	export interface UpdateNetworkAnalyzerConfigurationResponseFormProperties {
	}
	export function CreateUpdateNetworkAnalyzerConfigurationResponseFormGroup() {
		return new FormGroup<UpdateNetworkAnalyzerConfigurationResponseFormProperties>({
		});

	}

	export interface UpdatePartnerAccountResponse {
	}
	export interface UpdatePartnerAccountResponseFormProperties {
	}
	export function CreateUpdatePartnerAccountResponseFormGroup() {
		return new FormGroup<UpdatePartnerAccountResponseFormProperties>({
		});

	}


	/** This operation is no longer supported. */
	export interface UpdatePositionResponse {
	}

	/** This operation is no longer supported. */
	export interface UpdatePositionResponseFormProperties {
	}
	export function CreateUpdatePositionResponseFormGroup() {
		return new FormGroup<UpdatePositionResponseFormProperties>({
		});

	}

	export interface UpdateResourceEventConfigurationResponse {
	}
	export interface UpdateResourceEventConfigurationResponseFormProperties {
	}
	export function CreateUpdateResourceEventConfigurationResponseFormGroup() {
		return new FormGroup<UpdateResourceEventConfigurationResponseFormProperties>({
		});

	}

	export interface UpdateResourcePositionResponse {
	}
	export interface UpdateResourcePositionResponseFormProperties {
	}
	export function CreateUpdateResourcePositionResponseFormGroup() {
		return new FormGroup<UpdateResourcePositionResponseFormProperties>({
		});

	}

	export interface UpdateWirelessDeviceResponse {
	}
	export interface UpdateWirelessDeviceResponseFormProperties {
	}
	export function CreateUpdateWirelessDeviceResponseFormGroup() {
		return new FormGroup<UpdateWirelessDeviceResponseFormProperties>({
		});

	}


	/** ABP device object for LoRaWAN specification v1.1 */
	export interface UpdateAbpV1_1 {
		FCntStart?: number | null;
	}

	/** ABP device object for LoRaWAN specification v1.1 */
	export interface UpdateAbpV1_1FormProperties {
		FCntStart: FormControl<number | null | undefined>,
	}
	export function CreateUpdateAbpV1_1FormGroup() {
		return new FormGroup<UpdateAbpV1_1FormProperties>({
			FCntStart: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** ABP device object for LoRaWAN specification v1.0.x */
	export interface UpdateAbpV1_0_x {
		FCntStart?: number | null;
	}

	/** ABP device object for LoRaWAN specification v1.0.x */
	export interface UpdateAbpV1_0_xFormProperties {
		FCntStart: FormControl<number | null | undefined>,
	}
	export function CreateUpdateAbpV1_0_xFormGroup() {
		return new FormGroup<UpdateAbpV1_0_xFormProperties>({
			FCntStart: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Object for updating the FPorts information. */
	export interface UpdateFPorts {
		Positioning?: Positioning;
		Applications?: Array<ApplicationConfig>;
	}

	/** Object for updating the FPorts information. */
	export interface UpdateFPortsFormProperties {
	}
	export function CreateUpdateFPortsFormGroup() {
		return new FormGroup<UpdateFPortsFormProperties>({
		});

	}

	export interface UpdateWirelessDeviceImportTaskResponse {
	}
	export interface UpdateWirelessDeviceImportTaskResponseFormProperties {
	}
	export function CreateUpdateWirelessDeviceImportTaskResponseFormGroup() {
		return new FormGroup<UpdateWirelessDeviceImportTaskResponseFormProperties>({
		});

	}

	export interface UpdateWirelessGatewayResponse {
	}
	export interface UpdateWirelessGatewayResponseFormProperties {
	}
	export function CreateUpdateWirelessGatewayResponseFormGroup() {
		return new FormGroup<UpdateWirelessGatewayResponseFormProperties>({
		});

	}

	export interface AssociateAwsAccountWithPartnerAccountRequest {

		/** Required */
		Sidewalk: SidewalkAccountInfo;
		ClientRequestToken?: string;
		Tags?: Array<Tag>;
	}
	export interface AssociateAwsAccountWithPartnerAccountRequestFormProperties {
		ClientRequestToken: FormControl<string | null | undefined>,
	}
	export function CreateAssociateAwsAccountWithPartnerAccountRequestFormGroup() {
		return new FormGroup<AssociateAwsAccountWithPartnerAccountRequestFormProperties>({
			ClientRequestToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AssociateMulticastGroupWithFuotaTaskRequest {

		/**
		 * The ID of the multicast group.
		 * Required
		 * Max length: 256
		 */
		MulticastGroupId: string;
	}
	export interface AssociateMulticastGroupWithFuotaTaskRequestFormProperties {

		/**
		 * The ID of the multicast group.
		 * Required
		 * Max length: 256
		 */
		MulticastGroupId: FormControl<string | null | undefined>,
	}
	export function CreateAssociateMulticastGroupWithFuotaTaskRequestFormGroup() {
		return new FormGroup<AssociateMulticastGroupWithFuotaTaskRequestFormProperties>({
			MulticastGroupId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256)]),
		});

	}

	export interface AssociateWirelessDeviceWithFuotaTaskRequest {

		/**
		 * The ID of the wireless device.
		 * Required
		 * Max length: 256
		 */
		WirelessDeviceId: string;
	}
	export interface AssociateWirelessDeviceWithFuotaTaskRequestFormProperties {

		/**
		 * The ID of the wireless device.
		 * Required
		 * Max length: 256
		 */
		WirelessDeviceId: FormControl<string | null | undefined>,
	}
	export function CreateAssociateWirelessDeviceWithFuotaTaskRequestFormGroup() {
		return new FormGroup<AssociateWirelessDeviceWithFuotaTaskRequestFormProperties>({
			WirelessDeviceId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256)]),
		});

	}

	export interface AssociateWirelessDeviceWithMulticastGroupRequest {

		/**
		 * The ID of the wireless device.
		 * Required
		 * Max length: 256
		 */
		WirelessDeviceId: string;
	}
	export interface AssociateWirelessDeviceWithMulticastGroupRequestFormProperties {

		/**
		 * The ID of the wireless device.
		 * Required
		 * Max length: 256
		 */
		WirelessDeviceId: FormControl<string | null | undefined>,
	}
	export function CreateAssociateWirelessDeviceWithMulticastGroupRequestFormGroup() {
		return new FormGroup<AssociateWirelessDeviceWithMulticastGroupRequestFormProperties>({
			WirelessDeviceId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256)]),
		});

	}

	export interface AssociateWirelessDeviceWithThingRequest {

		/** Required */
		ThingArn: string;
	}
	export interface AssociateWirelessDeviceWithThingRequestFormProperties {

		/** Required */
		ThingArn: FormControl<string | null | undefined>,
	}
	export function CreateAssociateWirelessDeviceWithThingRequestFormGroup() {
		return new FormGroup<AssociateWirelessDeviceWithThingRequestFormProperties>({
			ThingArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AssociateWirelessGatewayWithCertificateRequest {

		/** Required */
		IotCertificateId: string;
	}
	export interface AssociateWirelessGatewayWithCertificateRequestFormProperties {

		/** Required */
		IotCertificateId: FormControl<string | null | undefined>,
	}
	export function CreateAssociateWirelessGatewayWithCertificateRequestFormGroup() {
		return new FormGroup<AssociateWirelessGatewayWithCertificateRequestFormProperties>({
			IotCertificateId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AssociateWirelessGatewayWithThingRequest {

		/** Required */
		ThingArn: string;
	}
	export interface AssociateWirelessGatewayWithThingRequestFormProperties {

		/** Required */
		ThingArn: FormControl<string | null | undefined>,
	}
	export function CreateAssociateWirelessGatewayWithThingRequestFormGroup() {
		return new FormGroup<AssociateWirelessGatewayWithThingRequestFormProperties>({
			ThingArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CancelMulticastGroupSessionRequest {
	}
	export interface CancelMulticastGroupSessionRequestFormProperties {
	}
	export function CreateCancelMulticastGroupSessionRequestFormGroup() {
		return new FormGroup<CancelMulticastGroupSessionRequestFormProperties>({
		});

	}


	/** The cell towers that were used to perform the measurements. */
	export interface CellTowers {
		Gsm?: Array<GsmObj>;
		Wcdma?: Array<WcdmaObj>;
		Tdscdma?: Array<TdscdmaObj>;
		Lte?: Array<LteObj>;
		Cdma?: Array<CdmaObj>;
	}

	/** The cell towers that were used to perform the measurements. */
	export interface CellTowersFormProperties {
	}
	export function CreateCellTowersFormGroup() {
		return new FormGroup<CellTowersFormProperties>({
		});

	}

	export interface CreateDestinationRequest {

		/** Required */
		Name: string;

		/** Required */
		ExpressionType: ExpressionType;

		/** Required */
		Expression: string;
		Description?: string;

		/** Required */
		RoleArn: string;
		Tags?: Array<Tag>;
		ClientRequestToken?: string;
	}
	export interface CreateDestinationRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		ExpressionType: FormControl<ExpressionType | null | undefined>,

		/** Required */
		Expression: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,

		/** Required */
		RoleArn: FormControl<string | null | undefined>,
		ClientRequestToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateDestinationRequestFormGroup() {
		return new FormGroup<CreateDestinationRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ExpressionType: new FormControl<ExpressionType | null | undefined>(undefined, [Validators.required]),
			Expression: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
			RoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ClientRequestToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Sidewalk object for creating a device profile. */
	export interface SidewalkCreateDeviceProfile {
	}

	/** Sidewalk object for creating a device profile. */
	export interface SidewalkCreateDeviceProfileFormProperties {
	}
	export function CreateSidewalkCreateDeviceProfileFormGroup() {
		return new FormGroup<SidewalkCreateDeviceProfileFormProperties>({
		});

	}

	export interface CreateDeviceProfileRequest {
		Name?: string;
		LoRaWAN?: LoRaWANDeviceProfile;
		Tags?: Array<Tag>;
		ClientRequestToken?: string;
		Sidewalk?: SidewalkCreateDeviceProfile;
	}
	export interface CreateDeviceProfileRequestFormProperties {
		Name: FormControl<string | null | undefined>,
		ClientRequestToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateDeviceProfileRequestFormGroup() {
		return new FormGroup<CreateDeviceProfileRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			ClientRequestToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The LoRaWAN information used with a FUOTA task. */
	export interface LoRaWANFuotaTask {

		/** Supported RfRegions */
		RfRegion?: SupportedRfRegion | null;
	}

	/** The LoRaWAN information used with a FUOTA task. */
	export interface LoRaWANFuotaTaskFormProperties {

		/** Supported RfRegions */
		RfRegion: FormControl<SupportedRfRegion | null | undefined>,
	}
	export function CreateLoRaWANFuotaTaskFormGroup() {
		return new FormGroup<LoRaWANFuotaTaskFormProperties>({
			RfRegion: new FormControl<SupportedRfRegion | null | undefined>(undefined),
		});

	}

	export interface CreateFuotaTaskRequest {

		/**
		 * The name of a FUOTA task.
		 * Max length: 256
		 */
		Name?: string | null;

		/**
		 * The description of the new resource.
		 * Max length: 2048
		 */
		Description?: string | null;

		/**
		 * Each resource must have a unique client request token. If you try to create a new resource with the same token as a resource that already exists, an exception occurs. If you omit this value, AWS SDKs will automatically generate a unique client request.
		 * Min length: 1
		 * Max length: 64
		 */
		ClientRequestToken?: string | null;

		/** The LoRaWAN information used with a FUOTA task. */
		LoRaWAN?: LoRaWANFuotaTask;

		/**
		 * The S3 URI points to a firmware update image that is to be used with a FUOTA task.
		 * Required
		 * Min length: 1
		 * Max length: 4096
		 */
		FirmwareUpdateImage: string;

		/**
		 * The firmware update role that is to be used with a FUOTA task.
		 * Required
		 * Min length: 1
		 * Max length: 2048
		 */
		FirmwareUpdateRole: string;

		/**
		 * The tag to attach to the specified resource. Tags are metadata that you can use to manage a resource.
		 * Minimum items: 0
		 * Maximum items: 200
		 */
		Tags?: Array<Tag>;

		/**
		 * The percentage of the added fragments that are redundant. For example, if the size of the firmware image file is 100 bytes and the fragment size is 10 bytes, with <code>RedundancyPercent</code> set to 50(%), the final number of encoded fragments is (100 / 10) + (100 / 10 * 50%) = 15.
		 * Minimum: 0
		 * Maximum: 100
		 */
		RedundancyPercent?: number | null;

		/**
		 * The size of each fragment in bytes. This parameter is supported only for FUOTA tasks with multicast groups.
		 * Minimum: 1
		 */
		FragmentSizeBytes?: number | null;

		/**
		 * <p>The interval for sending fragments in milliseconds, rounded to the nearest second.</p> <note> <p>This interval only determines the timing for when the Cloud sends down the fragments to yor device. There can be a delay for when your device will receive these fragments. This delay depends on the device's class and the communication delay with the cloud.</p> </note>
		 * Minimum: 1
		 */
		FragmentIntervalMS?: number | null;
	}
	export interface CreateFuotaTaskRequestFormProperties {

		/**
		 * The name of a FUOTA task.
		 * Max length: 256
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * The description of the new resource.
		 * Max length: 2048
		 */
		Description: FormControl<string | null | undefined>,

		/**
		 * Each resource must have a unique client request token. If you try to create a new resource with the same token as a resource that already exists, an exception occurs. If you omit this value, AWS SDKs will automatically generate a unique client request.
		 * Min length: 1
		 * Max length: 64
		 */
		ClientRequestToken: FormControl<string | null | undefined>,

		/**
		 * The S3 URI points to a firmware update image that is to be used with a FUOTA task.
		 * Required
		 * Min length: 1
		 * Max length: 4096
		 */
		FirmwareUpdateImage: FormControl<string | null | undefined>,

		/**
		 * The firmware update role that is to be used with a FUOTA task.
		 * Required
		 * Min length: 1
		 * Max length: 2048
		 */
		FirmwareUpdateRole: FormControl<string | null | undefined>,

		/**
		 * The percentage of the added fragments that are redundant. For example, if the size of the firmware image file is 100 bytes and the fragment size is 10 bytes, with <code>RedundancyPercent</code> set to 50(%), the final number of encoded fragments is (100 / 10) + (100 / 10 * 50%) = 15.
		 * Minimum: 0
		 * Maximum: 100
		 */
		RedundancyPercent: FormControl<number | null | undefined>,

		/**
		 * The size of each fragment in bytes. This parameter is supported only for FUOTA tasks with multicast groups.
		 * Minimum: 1
		 */
		FragmentSizeBytes: FormControl<number | null | undefined>,

		/**
		 * <p>The interval for sending fragments in milliseconds, rounded to the nearest second.</p> <note> <p>This interval only determines the timing for when the Cloud sends down the fragments to yor device. There can be a delay for when your device will receive these fragments. This delay depends on the device's class and the communication delay with the cloud.</p> </note>
		 * Minimum: 1
		 */
		FragmentIntervalMS: FormControl<number | null | undefined>,
	}
	export function CreateCreateFuotaTaskRequestFormGroup() {
		return new FormGroup<CreateFuotaTaskRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256)]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048)]),
			ClientRequestToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64), Validators.pattern('^[a-zA-Z0-9-_]+$')]),
			FirmwareUpdateImage: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(4096)]),
			FirmwareUpdateRole: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(2048)]),
			RedundancyPercent: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(100)]),
			FragmentSizeBytes: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			FragmentIntervalMS: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
		});

	}


	/** The LoRaWAN information that is to be used with the multicast group. */
	export interface LoRaWANMulticast {

		/** Supported RfRegions */
		RfRegion?: SupportedRfRegion | null;

		/**
		 * DlClass for LoRaWAM, valid values are ClassB and ClassC.
		 * Max length: 256
		 */
		DlClass?: DlClass | null;
	}

	/** The LoRaWAN information that is to be used with the multicast group. */
	export interface LoRaWANMulticastFormProperties {

		/** Supported RfRegions */
		RfRegion: FormControl<SupportedRfRegion | null | undefined>,

		/**
		 * DlClass for LoRaWAM, valid values are ClassB and ClassC.
		 * Max length: 256
		 */
		DlClass: FormControl<DlClass | null | undefined>,
	}
	export function CreateLoRaWANMulticastFormGroup() {
		return new FormGroup<LoRaWANMulticastFormProperties>({
			RfRegion: new FormControl<SupportedRfRegion | null | undefined>(undefined),
			DlClass: new FormControl<DlClass | null | undefined>(undefined, [Validators.maxLength(256)]),
		});

	}

	export interface CreateMulticastGroupRequest {

		/**
		 * The name of the multicast group.
		 * Max length: 256
		 */
		Name?: string | null;
		Description?: string;
		ClientRequestToken?: string;

		/**
		 * The LoRaWAN information that is to be used with the multicast group.
		 * Required
		 */
		LoRaWAN: LoRaWANMulticast;

		/**
		 * The tag to attach to the specified resource. Tags are metadata that you can use to manage a resource.
		 * Minimum items: 0
		 * Maximum items: 200
		 */
		Tags?: Array<Tag>;
	}
	export interface CreateMulticastGroupRequestFormProperties {

		/**
		 * The name of the multicast group.
		 * Max length: 256
		 */
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		ClientRequestToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateMulticastGroupRequestFormGroup() {
		return new FormGroup<CreateMulticastGroupRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256)]),
			Description: new FormControl<string | null | undefined>(undefined),
			ClientRequestToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateNetworkAnalyzerConfigurationRequest {

		/**
		 * Name of the network analyzer configuration.
		 * Required
		 * Min length: 1
		 * Max length: 1024
		 */
		Name: string;

		/** Trace content for your wireless gateway and wireless device resources. */
		TraceContent?: TraceContent;
		WirelessDevices?: Array<string>;
		WirelessGateways?: Array<string>;

		/**
		 * The description of the new resource.
		 * Max length: 2048
		 */
		Description?: string | null;

		/**
		 * The tag to attach to the specified resource. Tags are metadata that you can use to manage a resource.
		 * Minimum items: 0
		 * Maximum items: 200
		 */
		Tags?: Array<Tag>;

		/**
		 * Each resource must have a unique client request token. If you try to create a new resource with the same token as a resource that already exists, an exception occurs. If you omit this value, AWS SDKs will automatically generate a unique client request.
		 * Min length: 1
		 * Max length: 64
		 */
		ClientRequestToken?: string | null;
		MulticastGroups?: Array<string>;
	}
	export interface CreateNetworkAnalyzerConfigurationRequestFormProperties {

		/**
		 * Name of the network analyzer configuration.
		 * Required
		 * Min length: 1
		 * Max length: 1024
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * The description of the new resource.
		 * Max length: 2048
		 */
		Description: FormControl<string | null | undefined>,

		/**
		 * Each resource must have a unique client request token. If you try to create a new resource with the same token as a resource that already exists, an exception occurs. If you omit this value, AWS SDKs will automatically generate a unique client request.
		 * Min length: 1
		 * Max length: 64
		 */
		ClientRequestToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateNetworkAnalyzerConfigurationRequestFormGroup() {
		return new FormGroup<CreateNetworkAnalyzerConfigurationRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1024), Validators.pattern('[a-zA-Z0-9-_]+')]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048)]),
			ClientRequestToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64), Validators.pattern('^[a-zA-Z0-9-_]+$')]),
		});

	}


	/** LoRaWANServiceProfile object. */
	export interface LoRaWANServiceProfile {
		AddGwMetadata?: boolean | null;
		DrMin?: number | null;
		DrMax?: number | null;
		PrAllowed?: boolean | null;
		RaAllowed?: boolean | null;
	}

	/** LoRaWANServiceProfile object. */
	export interface LoRaWANServiceProfileFormProperties {
		AddGwMetadata: FormControl<boolean | null | undefined>,
		DrMin: FormControl<number | null | undefined>,
		DrMax: FormControl<number | null | undefined>,
		PrAllowed: FormControl<boolean | null | undefined>,
		RaAllowed: FormControl<boolean | null | undefined>,
	}
	export function CreateLoRaWANServiceProfileFormGroup() {
		return new FormGroup<LoRaWANServiceProfileFormProperties>({
			AddGwMetadata: new FormControl<boolean | null | undefined>(undefined),
			DrMin: new FormControl<number | null | undefined>(undefined),
			DrMax: new FormControl<number | null | undefined>(undefined),
			PrAllowed: new FormControl<boolean | null | undefined>(undefined),
			RaAllowed: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface CreateServiceProfileRequest {
		Name?: string;
		LoRaWAN?: LoRaWANServiceProfile;
		Tags?: Array<Tag>;
		ClientRequestToken?: string;
	}
	export interface CreateServiceProfileRequestFormProperties {
		Name: FormControl<string | null | undefined>,
		ClientRequestToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateServiceProfileRequestFormGroup() {
		return new FormGroup<CreateServiceProfileRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			ClientRequestToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum PositioningConfigStatus { Enabled = 'Enabled', Disabled = 'Disabled' }


	/** Sidewalk object for creating a wireless device. */
	export interface SidewalkCreateWirelessDevice {
		DeviceProfileId?: string;
	}

	/** Sidewalk object for creating a wireless device. */
	export interface SidewalkCreateWirelessDeviceFormProperties {
		DeviceProfileId: FormControl<string | null | undefined>,
	}
	export function CreateSidewalkCreateWirelessDeviceFormGroup() {
		return new FormGroup<SidewalkCreateWirelessDeviceFormProperties>({
			DeviceProfileId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateWirelessDeviceRequest {

		/** Required */
		Type: WirelessDeviceType;
		Name?: string;
		Description?: string;

		/** Required */
		DestinationName: string;
		ClientRequestToken?: string;
		LoRaWAN?: LoRaWANDevice;
		Tags?: Array<Tag>;
		Positioning?: EventNotificationTopicStatus;
		Sidewalk?: SidewalkCreateWirelessDevice;
	}
	export interface CreateWirelessDeviceRequestFormProperties {

		/** Required */
		Type: FormControl<WirelessDeviceType | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,

		/** Required */
		DestinationName: FormControl<string | null | undefined>,
		ClientRequestToken: FormControl<string | null | undefined>,
		Positioning: FormControl<EventNotificationTopicStatus | null | undefined>,
	}
	export function CreateCreateWirelessDeviceRequestFormGroup() {
		return new FormGroup<CreateWirelessDeviceRequestFormProperties>({
			Type: new FormControl<WirelessDeviceType | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			DestinationName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ClientRequestToken: new FormControl<string | null | undefined>(undefined),
			Positioning: new FormControl<EventNotificationTopicStatus | null | undefined>(undefined),
		});

	}

	export interface CreateWirelessGatewayRequest {
		Name?: string;
		Description?: string;

		/** Required */
		LoRaWAN: LoRaWANGateway;
		Tags?: Array<Tag>;
		ClientRequestToken?: string;
	}
	export interface CreateWirelessGatewayRequestFormProperties {
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		ClientRequestToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateWirelessGatewayRequestFormGroup() {
		return new FormGroup<CreateWirelessGatewayRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			ClientRequestToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateWirelessGatewayTaskDefinitionRequest {

		/** Required */
		AutoCreateTasks: boolean;
		Name?: string;
		Update?: UpdateWirelessGatewayTaskCreate;
		ClientRequestToken?: string;
		Tags?: Array<Tag>;
	}
	export interface CreateWirelessGatewayTaskDefinitionRequestFormProperties {

		/** Required */
		AutoCreateTasks: FormControl<boolean | null | undefined>,
		Name: FormControl<string | null | undefined>,
		ClientRequestToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateWirelessGatewayTaskDefinitionRequestFormGroup() {
		return new FormGroup<CreateWirelessGatewayTaskDefinitionRequestFormProperties>({
			AutoCreateTasks: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined),
			ClientRequestToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateWirelessGatewayTaskRequest {

		/** Required */
		WirelessGatewayTaskDefinitionId: string;
	}
	export interface CreateWirelessGatewayTaskRequestFormProperties {

		/** Required */
		WirelessGatewayTaskDefinitionId: FormControl<string | null | undefined>,
	}
	export function CreateCreateWirelessGatewayTaskRequestFormGroup() {
		return new FormGroup<CreateWirelessGatewayTaskRequestFormProperties>({
			WirelessGatewayTaskDefinitionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteDestinationRequest {
	}
	export interface DeleteDestinationRequestFormProperties {
	}
	export function CreateDeleteDestinationRequestFormGroup() {
		return new FormGroup<DeleteDestinationRequestFormProperties>({
		});

	}

	export interface DeleteDeviceProfileRequest {
	}
	export interface DeleteDeviceProfileRequestFormProperties {
	}
	export function CreateDeleteDeviceProfileRequestFormGroup() {
		return new FormGroup<DeleteDeviceProfileRequestFormProperties>({
		});

	}

	export interface DeleteFuotaTaskRequest {
	}
	export interface DeleteFuotaTaskRequestFormProperties {
	}
	export function CreateDeleteFuotaTaskRequestFormGroup() {
		return new FormGroup<DeleteFuotaTaskRequestFormProperties>({
		});

	}

	export interface DeleteMulticastGroupRequest {
	}
	export interface DeleteMulticastGroupRequestFormProperties {
	}
	export function CreateDeleteMulticastGroupRequestFormGroup() {
		return new FormGroup<DeleteMulticastGroupRequestFormProperties>({
		});

	}

	export interface DeleteNetworkAnalyzerConfigurationRequest {
	}
	export interface DeleteNetworkAnalyzerConfigurationRequestFormProperties {
	}
	export function CreateDeleteNetworkAnalyzerConfigurationRequestFormGroup() {
		return new FormGroup<DeleteNetworkAnalyzerConfigurationRequestFormProperties>({
		});

	}

	export interface DeleteQueuedMessagesRequest {
	}
	export interface DeleteQueuedMessagesRequestFormProperties {
	}
	export function CreateDeleteQueuedMessagesRequestFormGroup() {
		return new FormGroup<DeleteQueuedMessagesRequestFormProperties>({
		});

	}

	export interface DeleteServiceProfileRequest {
	}
	export interface DeleteServiceProfileRequestFormProperties {
	}
	export function CreateDeleteServiceProfileRequestFormGroup() {
		return new FormGroup<DeleteServiceProfileRequestFormProperties>({
		});

	}

	export interface DeleteWirelessDeviceImportTaskRequest {
	}
	export interface DeleteWirelessDeviceImportTaskRequestFormProperties {
	}
	export function CreateDeleteWirelessDeviceImportTaskRequestFormGroup() {
		return new FormGroup<DeleteWirelessDeviceImportTaskRequestFormProperties>({
		});

	}

	export interface DeleteWirelessDeviceRequest {
	}
	export interface DeleteWirelessDeviceRequestFormProperties {
	}
	export function CreateDeleteWirelessDeviceRequestFormGroup() {
		return new FormGroup<DeleteWirelessDeviceRequestFormProperties>({
		});

	}

	export interface DeleteWirelessGatewayRequest {
	}
	export interface DeleteWirelessGatewayRequestFormProperties {
	}
	export function CreateDeleteWirelessGatewayRequestFormGroup() {
		return new FormGroup<DeleteWirelessGatewayRequestFormProperties>({
		});

	}

	export interface DeleteWirelessGatewayTaskDefinitionRequest {
	}
	export interface DeleteWirelessGatewayTaskDefinitionRequestFormProperties {
	}
	export function CreateDeleteWirelessGatewayTaskDefinitionRequestFormGroup() {
		return new FormGroup<DeleteWirelessGatewayTaskDefinitionRequestFormProperties>({
		});

	}

	export interface DeleteWirelessGatewayTaskRequest {
	}
	export interface DeleteWirelessGatewayTaskRequestFormProperties {
	}
	export function CreateDeleteWirelessGatewayTaskRequestFormGroup() {
		return new FormGroup<DeleteWirelessGatewayTaskRequestFormProperties>({
		});

	}

	export interface DeregisterWirelessDeviceRequest {
	}
	export interface DeregisterWirelessDeviceRequestFormProperties {
	}
	export function CreateDeregisterWirelessDeviceRequestFormGroup() {
		return new FormGroup<DeregisterWirelessDeviceRequestFormProperties>({
		});

	}

	export enum DeviceProfileType { Sidewalk = 'Sidewalk', LoRaWAN = 'LoRaWAN' }

	export enum PartnerType { Sidewalk = 'Sidewalk' }

	export interface DisassociateAwsAccountFromPartnerAccountRequest {
	}
	export interface DisassociateAwsAccountFromPartnerAccountRequestFormProperties {
	}
	export function CreateDisassociateAwsAccountFromPartnerAccountRequestFormGroup() {
		return new FormGroup<DisassociateAwsAccountFromPartnerAccountRequestFormProperties>({
		});

	}

	export interface DisassociateMulticastGroupFromFuotaTaskRequest {
	}
	export interface DisassociateMulticastGroupFromFuotaTaskRequestFormProperties {
	}
	export function CreateDisassociateMulticastGroupFromFuotaTaskRequestFormGroup() {
		return new FormGroup<DisassociateMulticastGroupFromFuotaTaskRequestFormProperties>({
		});

	}

	export interface DisassociateWirelessDeviceFromFuotaTaskRequest {
	}
	export interface DisassociateWirelessDeviceFromFuotaTaskRequestFormProperties {
	}
	export function CreateDisassociateWirelessDeviceFromFuotaTaskRequestFormGroup() {
		return new FormGroup<DisassociateWirelessDeviceFromFuotaTaskRequestFormProperties>({
		});

	}

	export interface DisassociateWirelessDeviceFromMulticastGroupRequest {
	}
	export interface DisassociateWirelessDeviceFromMulticastGroupRequestFormProperties {
	}
	export function CreateDisassociateWirelessDeviceFromMulticastGroupRequestFormGroup() {
		return new FormGroup<DisassociateWirelessDeviceFromMulticastGroupRequestFormProperties>({
		});

	}

	export interface DisassociateWirelessDeviceFromThingRequest {
	}
	export interface DisassociateWirelessDeviceFromThingRequestFormProperties {
	}
	export function CreateDisassociateWirelessDeviceFromThingRequestFormGroup() {
		return new FormGroup<DisassociateWirelessDeviceFromThingRequestFormProperties>({
		});

	}

	export interface DisassociateWirelessGatewayFromCertificateRequest {
	}
	export interface DisassociateWirelessGatewayFromCertificateRequestFormProperties {
	}
	export function CreateDisassociateWirelessGatewayFromCertificateRequestFormGroup() {
		return new FormGroup<DisassociateWirelessGatewayFromCertificateRequestFormProperties>({
		});

	}

	export interface DisassociateWirelessGatewayFromThingRequest {
	}
	export interface DisassociateWirelessGatewayFromThingRequestFormProperties {
	}
	export function CreateDisassociateWirelessGatewayFromThingRequestFormGroup() {
		return new FormGroup<DisassociateWirelessGatewayFromThingRequestFormProperties>({
		});

	}

	export enum EventNotificationResourceType { SidewalkAccount = 'SidewalkAccount', WirelessDevice = 'WirelessDevice', WirelessGateway = 'WirelessGateway' }


	/** The status of a wireless device in a FUOTA task. */
	export enum FuotaDeviceStatus { Initial = 'Initial', Package_Not_Supported = 'Package_Not_Supported', FragAlgo_unsupported = 'FragAlgo_unsupported', Not_enough_memory = 'Not_enough_memory', FragIndex_unsupported = 'FragIndex_unsupported', Wrong_descriptor = 'Wrong_descriptor', SessionCnt_replay = 'SessionCnt_replay', MissingFrag = 'MissingFrag', MemoryError = 'MemoryError', MICError = 'MICError', Successful = 'Successful' }


	/** The status of a FUOTA task. */
	export enum FuotaTaskStatus { Pending = 'Pending', FuotaSession_Waiting = 'FuotaSession_Waiting', In_FuotaSession = 'In_FuotaSession', FuotaDone = 'FuotaDone', Delete_Waiting = 'Delete_Waiting' }

	export interface GetDestinationRequest {
	}
	export interface GetDestinationRequestFormProperties {
	}
	export function CreateGetDestinationRequestFormGroup() {
		return new FormGroup<GetDestinationRequestFormProperties>({
		});

	}

	export interface GetDeviceProfileRequest {
	}
	export interface GetDeviceProfileRequestFormProperties {
	}
	export function CreateGetDeviceProfileRequestFormGroup() {
		return new FormGroup<GetDeviceProfileRequestFormProperties>({
		});

	}

	export interface GetEventConfigurationByResourceTypesRequest {
	}
	export interface GetEventConfigurationByResourceTypesRequestFormProperties {
	}
	export function CreateGetEventConfigurationByResourceTypesRequestFormGroup() {
		return new FormGroup<GetEventConfigurationByResourceTypesRequestFormProperties>({
		});

	}

	export interface GetFuotaTaskRequest {
	}
	export interface GetFuotaTaskRequestFormProperties {
	}
	export function CreateGetFuotaTaskRequestFormGroup() {
		return new FormGroup<GetFuotaTaskRequestFormProperties>({
		});

	}

	export interface GetLogLevelsByResourceTypesRequest {
	}
	export interface GetLogLevelsByResourceTypesRequestFormProperties {
	}
	export function CreateGetLogLevelsByResourceTypesRequestFormGroup() {
		return new FormGroup<GetLogLevelsByResourceTypesRequestFormProperties>({
		});

	}

	export interface GetMulticastGroupRequest {
	}
	export interface GetMulticastGroupRequestFormProperties {
	}
	export function CreateGetMulticastGroupRequestFormGroup() {
		return new FormGroup<GetMulticastGroupRequestFormProperties>({
		});

	}

	export interface GetMulticastGroupSessionRequest {
	}
	export interface GetMulticastGroupSessionRequestFormProperties {
	}
	export function CreateGetMulticastGroupSessionRequestFormGroup() {
		return new FormGroup<GetMulticastGroupSessionRequestFormProperties>({
		});

	}

	export interface GetNetworkAnalyzerConfigurationRequest {
	}
	export interface GetNetworkAnalyzerConfigurationRequestFormProperties {
	}
	export function CreateGetNetworkAnalyzerConfigurationRequestFormGroup() {
		return new FormGroup<GetNetworkAnalyzerConfigurationRequestFormProperties>({
		});

	}

	export interface GetPartnerAccountRequest {
	}
	export interface GetPartnerAccountRequestFormProperties {
	}
	export function CreateGetPartnerAccountRequestFormGroup() {
		return new FormGroup<GetPartnerAccountRequestFormProperties>({
		});

	}


	/** This operation is no longer supported. */
	export interface GetPositionConfigurationRequest {
	}

	/** This operation is no longer supported. */
	export interface GetPositionConfigurationRequestFormProperties {
	}
	export function CreateGetPositionConfigurationRequestFormGroup() {
		return new FormGroup<GetPositionConfigurationRequestFormProperties>({
		});

	}


	/** IP address used for resolving device location. */
	export interface Ip {

		/** Required */
		IpAddress: string;
	}

	/** IP address used for resolving device location. */
	export interface IpFormProperties {

		/** Required */
		IpAddress: FormControl<string | null | undefined>,
	}
	export function CreateIpFormGroup() {
		return new FormGroup<IpFormProperties>({
			IpAddress: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Global navigation satellite system (GNSS) object used for positioning. */
	export interface Gnss {

		/** Required */
		Payload: string;
		CaptureTime?: number;
		CaptureTimeAccuracy?: number;
		AssistPosition?: Array<number> | null;
		AssistAltitude?: number;
		Use2DSolver?: boolean | null;
	}

	/** Global navigation satellite system (GNSS) object used for positioning. */
	export interface GnssFormProperties {

		/** Required */
		Payload: FormControl<string | null | undefined>,
		CaptureTime: FormControl<number | null | undefined>,
		CaptureTimeAccuracy: FormControl<number | null | undefined>,
		AssistAltitude: FormControl<number | null | undefined>,
		Use2DSolver: FormControl<boolean | null | undefined>,
	}
	export function CreateGnssFormGroup() {
		return new FormGroup<GnssFormProperties>({
			Payload: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			CaptureTime: new FormControl<number | null | undefined>(undefined),
			CaptureTimeAccuracy: new FormControl<number | null | undefined>(undefined),
			AssistAltitude: new FormControl<number | null | undefined>(undefined),
			Use2DSolver: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface GetPositionEstimateRequest {
		WiFiAccessPoints?: Array<WiFiAccessPoint>;
		CellTowers?: CellTowers;
		Ip?: Ip;
		Gnss?: Gnss;
		Timestamp?: Date;
	}
	export interface GetPositionEstimateRequestFormProperties {
		Timestamp: FormControl<Date | null | undefined>,
	}
	export function CreateGetPositionEstimateRequestFormGroup() {
		return new FormGroup<GetPositionEstimateRequestFormProperties>({
			Timestamp: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** This operation is no longer supported. */
	export interface GetPositionRequest {
	}

	/** This operation is no longer supported. */
	export interface GetPositionRequestFormProperties {
	}
	export function CreateGetPositionRequestFormGroup() {
		return new FormGroup<GetPositionRequestFormProperties>({
		});

	}

	export interface GetResourceEventConfigurationRequest {
	}
	export interface GetResourceEventConfigurationRequestFormProperties {
	}
	export function CreateGetResourceEventConfigurationRequestFormGroup() {
		return new FormGroup<GetResourceEventConfigurationRequestFormProperties>({
		});

	}

	export interface GetResourceLogLevelRequest {
	}
	export interface GetResourceLogLevelRequestFormProperties {
	}
	export function CreateGetResourceLogLevelRequestFormGroup() {
		return new FormGroup<GetResourceLogLevelRequestFormProperties>({
		});

	}

	export interface GetResourcePositionRequest {
	}
	export interface GetResourcePositionRequestFormProperties {
	}
	export function CreateGetResourcePositionRequestFormGroup() {
		return new FormGroup<GetResourcePositionRequestFormProperties>({
		});

	}

	export interface GetServiceEndpointRequest {
	}
	export interface GetServiceEndpointRequestFormProperties {
	}
	export function CreateGetServiceEndpointRequestFormGroup() {
		return new FormGroup<GetServiceEndpointRequestFormProperties>({
		});

	}

	export interface GetServiceProfileRequest {
	}
	export interface GetServiceProfileRequestFormProperties {
	}
	export function CreateGetServiceProfileRequestFormGroup() {
		return new FormGroup<GetServiceProfileRequestFormProperties>({
		});

	}

	export interface GetWirelessDeviceImportTaskRequest {
	}
	export interface GetWirelessDeviceImportTaskRequestFormProperties {
	}
	export function CreateGetWirelessDeviceImportTaskRequestFormGroup() {
		return new FormGroup<GetWirelessDeviceImportTaskRequestFormProperties>({
		});

	}

	export enum WirelessDeviceIdType { WirelessDeviceId = 'WirelessDeviceId', DevEui = 'DevEui', ThingName = 'ThingName', SidewalkManufacturingSn = 'SidewalkManufacturingSn' }

	export interface GetWirelessDeviceRequest {
	}
	export interface GetWirelessDeviceRequestFormProperties {
	}
	export function CreateGetWirelessDeviceRequestFormGroup() {
		return new FormGroup<GetWirelessDeviceRequestFormProperties>({
		});

	}

	export interface GetWirelessDeviceStatisticsRequest {
	}
	export interface GetWirelessDeviceStatisticsRequestFormProperties {
	}
	export function CreateGetWirelessDeviceStatisticsRequestFormGroup() {
		return new FormGroup<GetWirelessDeviceStatisticsRequestFormProperties>({
		});

	}

	export interface GetWirelessGatewayCertificateRequest {
	}
	export interface GetWirelessGatewayCertificateRequestFormProperties {
	}
	export function CreateGetWirelessGatewayCertificateRequestFormGroup() {
		return new FormGroup<GetWirelessGatewayCertificateRequestFormProperties>({
		});

	}

	export interface GetWirelessGatewayFirmwareInformationRequest {
	}
	export interface GetWirelessGatewayFirmwareInformationRequestFormProperties {
	}
	export function CreateGetWirelessGatewayFirmwareInformationRequestFormGroup() {
		return new FormGroup<GetWirelessGatewayFirmwareInformationRequestFormProperties>({
		});

	}

	export enum WirelessGatewayIdType { GatewayEui = 'GatewayEui', WirelessGatewayId = 'WirelessGatewayId', ThingName = 'ThingName' }

	export interface GetWirelessGatewayRequest {
	}
	export interface GetWirelessGatewayRequestFormProperties {
	}
	export function CreateGetWirelessGatewayRequestFormGroup() {
		return new FormGroup<GetWirelessGatewayRequestFormProperties>({
		});

	}

	export interface GetWirelessGatewayStatisticsRequest {
	}
	export interface GetWirelessGatewayStatisticsRequestFormProperties {
	}
	export function CreateGetWirelessGatewayStatisticsRequestFormGroup() {
		return new FormGroup<GetWirelessGatewayStatisticsRequestFormProperties>({
		});

	}

	export interface GetWirelessGatewayTaskDefinitionRequest {
	}
	export interface GetWirelessGatewayTaskDefinitionRequestFormProperties {
	}
	export function CreateGetWirelessGatewayTaskDefinitionRequestFormGroup() {
		return new FormGroup<GetWirelessGatewayTaskDefinitionRequestFormProperties>({
		});

	}

	export interface GetWirelessGatewayTaskRequest {
	}
	export interface GetWirelessGatewayTaskRequestFormProperties {
	}
	export function CreateGetWirelessGatewayTaskRequestFormGroup() {
		return new FormGroup<GetWirelessGatewayTaskRequestFormProperties>({
		});

	}

	export interface ListDestinationsRequest {
	}
	export interface ListDestinationsRequestFormProperties {
	}
	export function CreateListDestinationsRequestFormGroup() {
		return new FormGroup<ListDestinationsRequestFormProperties>({
		});

	}

	export interface ListDeviceProfilesRequest {
	}
	export interface ListDeviceProfilesRequestFormProperties {
	}
	export function CreateListDeviceProfilesRequestFormGroup() {
		return new FormGroup<ListDeviceProfilesRequestFormProperties>({
		});

	}

	export interface ListDevicesForWirelessDeviceImportTaskRequest {
	}
	export interface ListDevicesForWirelessDeviceImportTaskRequestFormProperties {
	}
	export function CreateListDevicesForWirelessDeviceImportTaskRequestFormGroup() {
		return new FormGroup<ListDevicesForWirelessDeviceImportTaskRequestFormProperties>({
		});

	}

	export interface ListEventConfigurationsRequest {
	}
	export interface ListEventConfigurationsRequestFormProperties {
	}
	export function CreateListEventConfigurationsRequestFormGroup() {
		return new FormGroup<ListEventConfigurationsRequestFormProperties>({
		});

	}

	export interface ListFuotaTasksRequest {
	}
	export interface ListFuotaTasksRequestFormProperties {
	}
	export function CreateListFuotaTasksRequestFormGroup() {
		return new FormGroup<ListFuotaTasksRequestFormProperties>({
		});

	}

	export interface ListMulticastGroupsByFuotaTaskRequest {
	}
	export interface ListMulticastGroupsByFuotaTaskRequestFormProperties {
	}
	export function CreateListMulticastGroupsByFuotaTaskRequestFormGroup() {
		return new FormGroup<ListMulticastGroupsByFuotaTaskRequestFormProperties>({
		});

	}

	export interface ListMulticastGroupsRequest {
	}
	export interface ListMulticastGroupsRequestFormProperties {
	}
	export function CreateListMulticastGroupsRequestFormGroup() {
		return new FormGroup<ListMulticastGroupsRequestFormProperties>({
		});

	}

	export interface ListNetworkAnalyzerConfigurationsRequest {
	}
	export interface ListNetworkAnalyzerConfigurationsRequestFormProperties {
	}
	export function CreateListNetworkAnalyzerConfigurationsRequestFormGroup() {
		return new FormGroup<ListNetworkAnalyzerConfigurationsRequestFormProperties>({
		});

	}

	export interface ListPartnerAccountsRequest {
	}
	export interface ListPartnerAccountsRequestFormProperties {
	}
	export function CreateListPartnerAccountsRequestFormGroup() {
		return new FormGroup<ListPartnerAccountsRequestFormProperties>({
		});

	}


	/** This operation is no longer supported. */
	export interface ListPositionConfigurationsRequest {
	}

	/** This operation is no longer supported. */
	export interface ListPositionConfigurationsRequestFormProperties {
	}
	export function CreateListPositionConfigurationsRequestFormGroup() {
		return new FormGroup<ListPositionConfigurationsRequestFormProperties>({
		});

	}

	export interface ListQueuedMessagesRequest {
	}
	export interface ListQueuedMessagesRequestFormProperties {
	}
	export function CreateListQueuedMessagesRequestFormGroup() {
		return new FormGroup<ListQueuedMessagesRequestFormProperties>({
		});

	}

	export interface ListServiceProfilesRequest {
	}
	export interface ListServiceProfilesRequestFormProperties {
	}
	export function CreateListServiceProfilesRequestFormGroup() {
		return new FormGroup<ListServiceProfilesRequestFormProperties>({
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

	export interface ListWirelessDeviceImportTasksRequest {
	}
	export interface ListWirelessDeviceImportTasksRequestFormProperties {
	}
	export function CreateListWirelessDeviceImportTasksRequestFormGroup() {
		return new FormGroup<ListWirelessDeviceImportTasksRequestFormProperties>({
		});

	}

	export interface ListWirelessDevicesRequest {
	}
	export interface ListWirelessDevicesRequestFormProperties {
	}
	export function CreateListWirelessDevicesRequestFormGroup() {
		return new FormGroup<ListWirelessDevicesRequestFormProperties>({
		});

	}

	export enum WirelessGatewayTaskDefinitionType { UPDATE = 'UPDATE' }

	export interface ListWirelessGatewayTaskDefinitionsRequest {
	}
	export interface ListWirelessGatewayTaskDefinitionsRequestFormProperties {
	}
	export function CreateListWirelessGatewayTaskDefinitionsRequestFormGroup() {
		return new FormGroup<ListWirelessGatewayTaskDefinitionsRequestFormProperties>({
		});

	}

	export interface ListWirelessGatewaysRequest {
	}
	export interface ListWirelessGatewaysRequestFormProperties {
	}
	export function CreateListWirelessGatewaysRequestFormGroup() {
		return new FormGroup<ListWirelessGatewaysRequestFormProperties>({
		});

	}


	/** The LoRaWAN information used to start a FUOTA task. */
	export interface LoRaWANStartFuotaTask {

		/** Start time of a FUOTA task. */
		StartTime?: Date | null;
	}

	/** The LoRaWAN information used to start a FUOTA task. */
	export interface LoRaWANStartFuotaTaskFormProperties {

		/** Start time of a FUOTA task. */
		StartTime: FormControl<Date | null | undefined>,
	}
	export function CreateLoRaWANStartFuotaTaskFormGroup() {
		return new FormGroup<LoRaWANStartFuotaTaskFormProperties>({
			StartTime: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** LoRaWAN object for update functions. */
	export interface LoRaWANUpdateDevice {
		DeviceProfileId?: string;
		ServiceProfileId?: string;
		AbpV1_1?: UpdateAbpV1_1;
		AbpV1_0_x?: UpdateAbpV1_0_x;
		FPorts?: UpdateFPorts;
	}

	/** LoRaWAN object for update functions. */
	export interface LoRaWANUpdateDeviceFormProperties {
		DeviceProfileId: FormControl<string | null | undefined>,
		ServiceProfileId: FormControl<string | null | undefined>,
	}
	export function CreateLoRaWANUpdateDeviceFormGroup() {
		return new FormGroup<LoRaWANUpdateDeviceFormProperties>({
			DeviceProfileId: new FormControl<string | null | undefined>(undefined),
			ServiceProfileId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Sidewalk device message type. Default value is <code>CUSTOM_COMMAND_ID_NOTIFY</code>. */
	export enum MessageType { CUSTOM_COMMAND_ID_NOTIFY = 'CUSTOM_COMMAND_ID_NOTIFY', CUSTOM_COMMAND_ID_GET = 'CUSTOM_COMMAND_ID_GET', CUSTOM_COMMAND_ID_SET = 'CUSTOM_COMMAND_ID_SET', CUSTOM_COMMAND_ID_RESP = 'CUSTOM_COMMAND_ID_RESP' }


	/** Wireless metadata that is to be sent to multicast group. */
	export interface MulticastWirelessMetadata {

		/** The metadata information of the LoRaWAN multicast group. */
		LoRaWAN?: LoRaWANMulticastMetadata;
	}

	/** Wireless metadata that is to be sent to multicast group. */
	export interface MulticastWirelessMetadataFormProperties {
	}
	export function CreateMulticastWirelessMetadataFormGroup() {
		return new FormGroup<MulticastWirelessMetadataFormProperties>({
		});

	}

	export enum PositionConfigurationStatus { Enabled = 'Enabled', Disabled = 'Disabled' }


	/** The wrapper for position solver configurations. */
	export interface PositionSolverConfigurations {
		SemtechGnss?: SemtechGnssConfiguration;
	}

	/** The wrapper for position solver configurations. */
	export interface PositionSolverConfigurationsFormProperties {
	}
	export function CreatePositionSolverConfigurationsFormGroup() {
		return new FormGroup<PositionSolverConfigurationsFormProperties>({
		});

	}


	/** This operation is no longer supported. */
	export interface PutPositionConfigurationRequest {
		Solvers?: PositionSolverConfigurations;
		Destination?: string;
	}

	/** This operation is no longer supported. */
	export interface PutPositionConfigurationRequestFormProperties {
		Destination: FormControl<string | null | undefined>,
	}
	export function CreatePutPositionConfigurationRequestFormGroup() {
		return new FormGroup<PutPositionConfigurationRequestFormProperties>({
			Destination: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PutResourceLogLevelRequest {

		/**
		 * The log level for a log message. The log levels can be disabled, or set to <code>ERROR</code> to display less verbose logs containing only error information, or to <code>INFO</code> for more detailed logs.
		 * Required
		 */
		LogLevel: LogLevel;
	}
	export interface PutResourceLogLevelRequestFormProperties {

		/**
		 * The log level for a log message. The log levels can be disabled, or set to <code>ERROR</code> to display less verbose logs containing only error information, or to <code>INFO</code> for more detailed logs.
		 * Required
		 */
		LogLevel: FormControl<LogLevel | null | undefined>,
	}
	export function CreatePutResourceLogLevelRequestFormGroup() {
		return new FormGroup<PutResourceLogLevelRequestFormProperties>({
			LogLevel: new FormControl<LogLevel | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ResetAllResourceLogLevelsRequest {
	}
	export interface ResetAllResourceLogLevelsRequestFormProperties {
	}
	export function CreateResetAllResourceLogLevelsRequestFormGroup() {
		return new FormGroup<ResetAllResourceLogLevelsRequestFormProperties>({
		});

	}

	export interface ResetResourceLogLevelRequest {
	}
	export interface ResetResourceLogLevelRequestFormProperties {
	}
	export function CreateResetResourceLogLevelRequestFormGroup() {
		return new FormGroup<ResetResourceLogLevelRequestFormProperties>({
		});

	}

	export interface SendDataToMulticastGroupRequest {

		/**
		 * The binary to be sent to the end device, encoded in base64.
		 * Required
		 * Max length: 2048
		 */
		PayloadData: string;

		/**
		 * Wireless metadata that is to be sent to multicast group.
		 * Required
		 */
		WirelessMetadata: MulticastWirelessMetadata;
	}
	export interface SendDataToMulticastGroupRequestFormProperties {

		/**
		 * The binary to be sent to the end device, encoded in base64.
		 * Required
		 * Max length: 2048
		 */
		PayloadData: FormControl<string | null | undefined>,
	}
	export function CreateSendDataToMulticastGroupRequestFormGroup() {
		return new FormGroup<SendDataToMulticastGroupRequestFormProperties>({
			PayloadData: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(2048), Validators.pattern('^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$')]),
		});

	}


	/** WirelessMetadata object. */
	export interface WirelessMetadata {
		LoRaWAN?: LoRaWANSendDataToDevice;
		Sidewalk?: SidewalkSendDataToDevice;
	}

	/** WirelessMetadata object. */
	export interface WirelessMetadataFormProperties {
	}
	export function CreateWirelessMetadataFormGroup() {
		return new FormGroup<WirelessMetadataFormProperties>({
		});

	}

	export interface SendDataToWirelessDeviceRequest {

		/** Required */
		TransmitMode: number;

		/**
		 * The binary to be sent to the end device, encoded in base64.
		 * Required
		 * Max length: 2048
		 */
		PayloadData: string;
		WirelessMetadata?: WirelessMetadata;
	}
	export interface SendDataToWirelessDeviceRequestFormProperties {

		/** Required */
		TransmitMode: FormControl<number | null | undefined>,

		/**
		 * The binary to be sent to the end device, encoded in base64.
		 * Required
		 * Max length: 2048
		 */
		PayloadData: FormControl<string | null | undefined>,
	}
	export function CreateSendDataToWirelessDeviceRequestFormGroup() {
		return new FormGroup<SendDataToWirelessDeviceRequestFormProperties>({
			TransmitMode: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			PayloadData: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(2048), Validators.pattern('^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$')]),
		});

	}


	/** Information about an import task created for an individual Sidewalk device. */
	export interface SidewalkSingleStartImportInfo {
		SidewalkManufacturingSn?: string;
	}

	/** Information about an import task created for an individual Sidewalk device. */
	export interface SidewalkSingleStartImportInfoFormProperties {
		SidewalkManufacturingSn: FormControl<string | null | undefined>,
	}
	export function CreateSidewalkSingleStartImportInfoFormGroup() {
		return new FormGroup<SidewalkSingleStartImportInfoFormProperties>({
			SidewalkManufacturingSn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about an import task created for bulk provisioning. */
	export interface SidewalkStartImportInfo {
		DeviceCreationFile?: string;
		Role?: string;
	}

	/** Information about an import task created for bulk provisioning. */
	export interface SidewalkStartImportInfoFormProperties {
		DeviceCreationFile: FormControl<string | null | undefined>,
		Role: FormControl<string | null | undefined>,
	}
	export function CreateSidewalkStartImportInfoFormGroup() {
		return new FormGroup<SidewalkStartImportInfoFormProperties>({
			DeviceCreationFile: new FormControl<string | null | undefined>(undefined),
			Role: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Sidewalk update. */
	export interface SidewalkUpdateAccount {
		AppServerPrivateKey?: string;
	}

	/** Sidewalk update. */
	export interface SidewalkUpdateAccountFormProperties {
		AppServerPrivateKey: FormControl<string | null | undefined>,
	}
	export function CreateSidewalkUpdateAccountFormGroup() {
		return new FormGroup<SidewalkUpdateAccountFormProperties>({
			AppServerPrivateKey: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Sidewalk object information for updating an import task. */
	export interface SidewalkUpdateImportInfo {
		DeviceCreationFile?: string;
	}

	/** Sidewalk object information for updating an import task. */
	export interface SidewalkUpdateImportInfoFormProperties {
		DeviceCreationFile: FormControl<string | null | undefined>,
	}
	export function CreateSidewalkUpdateImportInfoFormGroup() {
		return new FormGroup<SidewalkUpdateImportInfoFormProperties>({
			DeviceCreationFile: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StartBulkAssociateWirelessDeviceWithMulticastGroupRequest {

		/**
		 * Query string used to search for wireless devices as part of the bulk associate and disassociate process.
		 * Max length: 4096
		 */
		QueryString?: string | null;

		/**
		 * The tag to attach to the specified resource. Tags are metadata that you can use to manage a resource.
		 * Minimum items: 0
		 * Maximum items: 200
		 */
		Tags?: Array<Tag>;
	}
	export interface StartBulkAssociateWirelessDeviceWithMulticastGroupRequestFormProperties {

		/**
		 * Query string used to search for wireless devices as part of the bulk associate and disassociate process.
		 * Max length: 4096
		 */
		QueryString: FormControl<string | null | undefined>,
	}
	export function CreateStartBulkAssociateWirelessDeviceWithMulticastGroupRequestFormGroup() {
		return new FormGroup<StartBulkAssociateWirelessDeviceWithMulticastGroupRequestFormProperties>({
			QueryString: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(4096)]),
		});

	}

	export interface StartBulkDisassociateWirelessDeviceFromMulticastGroupRequest {

		/**
		 * Query string used to search for wireless devices as part of the bulk associate and disassociate process.
		 * Max length: 4096
		 */
		QueryString?: string | null;

		/**
		 * The tag to attach to the specified resource. Tags are metadata that you can use to manage a resource.
		 * Minimum items: 0
		 * Maximum items: 200
		 */
		Tags?: Array<Tag>;
	}
	export interface StartBulkDisassociateWirelessDeviceFromMulticastGroupRequestFormProperties {

		/**
		 * Query string used to search for wireless devices as part of the bulk associate and disassociate process.
		 * Max length: 4096
		 */
		QueryString: FormControl<string | null | undefined>,
	}
	export function CreateStartBulkDisassociateWirelessDeviceFromMulticastGroupRequestFormGroup() {
		return new FormGroup<StartBulkDisassociateWirelessDeviceFromMulticastGroupRequestFormProperties>({
			QueryString: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(4096)]),
		});

	}

	export interface StartFuotaTaskRequest {

		/** The LoRaWAN information used to start a FUOTA task. */
		LoRaWAN?: LoRaWANStartFuotaTask;
	}
	export interface StartFuotaTaskRequestFormProperties {
	}
	export function CreateStartFuotaTaskRequestFormGroup() {
		return new FormGroup<StartFuotaTaskRequestFormProperties>({
		});

	}

	export interface StartMulticastGroupSessionRequest {

		/**
		 * The LoRaWAN information used with the multicast session.
		 * Required
		 */
		LoRaWAN: LoRaWANMulticastSession;
	}
	export interface StartMulticastGroupSessionRequestFormProperties {
	}
	export function CreateStartMulticastGroupSessionRequestFormGroup() {
		return new FormGroup<StartMulticastGroupSessionRequestFormProperties>({
		});

	}

	export interface StartSingleWirelessDeviceImportTaskRequest {

		/** Required */
		DestinationName: string;

		/**
		 * Each resource must have a unique client request token. If you try to create a new resource with the same token as a resource that already exists, an exception occurs. If you omit this value, AWS SDKs will automatically generate a unique client request.
		 * Min length: 1
		 * Max length: 64
		 */
		ClientRequestToken?: string | null;
		DeviceName?: string;

		/**
		 * The tag to attach to the specified resource. Tags are metadata that you can use to manage a resource.
		 * Minimum items: 0
		 * Maximum items: 200
		 */
		Tags?: Array<Tag>;

		/** Required */
		Sidewalk: SidewalkSingleStartImportInfo;
	}
	export interface StartSingleWirelessDeviceImportTaskRequestFormProperties {

		/** Required */
		DestinationName: FormControl<string | null | undefined>,

		/**
		 * Each resource must have a unique client request token. If you try to create a new resource with the same token as a resource that already exists, an exception occurs. If you omit this value, AWS SDKs will automatically generate a unique client request.
		 * Min length: 1
		 * Max length: 64
		 */
		ClientRequestToken: FormControl<string | null | undefined>,
		DeviceName: FormControl<string | null | undefined>,
	}
	export function CreateStartSingleWirelessDeviceImportTaskRequestFormGroup() {
		return new FormGroup<StartSingleWirelessDeviceImportTaskRequestFormProperties>({
			DestinationName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ClientRequestToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64), Validators.pattern('^[a-zA-Z0-9-_]+$')]),
			DeviceName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StartWirelessDeviceImportTaskRequest {

		/** Required */
		DestinationName: string;

		/**
		 * Each resource must have a unique client request token. If you try to create a new resource with the same token as a resource that already exists, an exception occurs. If you omit this value, AWS SDKs will automatically generate a unique client request.
		 * Min length: 1
		 * Max length: 64
		 */
		ClientRequestToken?: string | null;

		/**
		 * The tag to attach to the specified resource. Tags are metadata that you can use to manage a resource.
		 * Minimum items: 0
		 * Maximum items: 200
		 */
		Tags?: Array<Tag>;

		/** Required */
		Sidewalk: SidewalkStartImportInfo;
	}
	export interface StartWirelessDeviceImportTaskRequestFormProperties {

		/** Required */
		DestinationName: FormControl<string | null | undefined>,

		/**
		 * Each resource must have a unique client request token. If you try to create a new resource with the same token as a resource that already exists, an exception occurs. If you omit this value, AWS SDKs will automatically generate a unique client request.
		 * Min length: 1
		 * Max length: 64
		 */
		ClientRequestToken: FormControl<string | null | undefined>,
	}
	export function CreateStartWirelessDeviceImportTaskRequestFormGroup() {
		return new FormGroup<StartWirelessDeviceImportTaskRequestFormProperties>({
			DestinationName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ClientRequestToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64), Validators.pattern('^[a-zA-Z0-9-_]+$')]),
		});

	}

	export interface TagResourceRequest {

		/** Required */
		Tags: Array<Tag>;
	}
	export interface TagResourceRequestFormProperties {
	}
	export function CreateTagResourceRequestFormGroup() {
		return new FormGroup<TagResourceRequestFormProperties>({
		});

	}

	export interface TestWirelessDeviceRequest {
	}
	export interface TestWirelessDeviceRequestFormProperties {
	}
	export function CreateTestWirelessDeviceRequestFormGroup() {
		return new FormGroup<TestWirelessDeviceRequestFormProperties>({
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

	export interface UpdateDestinationRequest {
		ExpressionType?: ExpressionType;
		Expression?: string;
		Description?: string;
		RoleArn?: string;
	}
	export interface UpdateDestinationRequestFormProperties {
		ExpressionType: FormControl<ExpressionType | null | undefined>,
		Expression: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		RoleArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateDestinationRequestFormGroup() {
		return new FormGroup<UpdateDestinationRequestFormProperties>({
			ExpressionType: new FormControl<ExpressionType | null | undefined>(undefined),
			Expression: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			RoleArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateEventConfigurationByResourceTypesRequest {
		DeviceRegistrationState?: DeviceRegistrationStateResourceTypeEventConfiguration;
		Proximity?: ProximityResourceTypeEventConfiguration;
		Join?: JoinResourceTypeEventConfiguration;
		ConnectionStatus?: ConnectionStatusResourceTypeEventConfiguration;
		MessageDeliveryStatus?: MessageDeliveryStatusResourceTypeEventConfiguration;
	}
	export interface UpdateEventConfigurationByResourceTypesRequestFormProperties {
	}
	export function CreateUpdateEventConfigurationByResourceTypesRequestFormGroup() {
		return new FormGroup<UpdateEventConfigurationByResourceTypesRequestFormProperties>({
		});

	}

	export interface UpdateFuotaTaskRequest {

		/**
		 * The name of a FUOTA task.
		 * Max length: 256
		 */
		Name?: string | null;

		/**
		 * The description of the new resource.
		 * Max length: 2048
		 */
		Description?: string | null;

		/** The LoRaWAN information used with a FUOTA task. */
		LoRaWAN?: LoRaWANFuotaTask;

		/**
		 * The S3 URI points to a firmware update image that is to be used with a FUOTA task.
		 * Min length: 1
		 * Max length: 4096
		 */
		FirmwareUpdateImage?: string | null;

		/**
		 * The firmware update role that is to be used with a FUOTA task.
		 * Min length: 1
		 * Max length: 2048
		 */
		FirmwareUpdateRole?: string | null;

		/**
		 * The percentage of the added fragments that are redundant. For example, if the size of the firmware image file is 100 bytes and the fragment size is 10 bytes, with <code>RedundancyPercent</code> set to 50(%), the final number of encoded fragments is (100 / 10) + (100 / 10 * 50%) = 15.
		 * Minimum: 0
		 * Maximum: 100
		 */
		RedundancyPercent?: number | null;

		/**
		 * The size of each fragment in bytes. This parameter is supported only for FUOTA tasks with multicast groups.
		 * Minimum: 1
		 */
		FragmentSizeBytes?: number | null;

		/**
		 * <p>The interval for sending fragments in milliseconds, rounded to the nearest second.</p> <note> <p>This interval only determines the timing for when the Cloud sends down the fragments to yor device. There can be a delay for when your device will receive these fragments. This delay depends on the device's class and the communication delay with the cloud.</p> </note>
		 * Minimum: 1
		 */
		FragmentIntervalMS?: number | null;
	}
	export interface UpdateFuotaTaskRequestFormProperties {

		/**
		 * The name of a FUOTA task.
		 * Max length: 256
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * The description of the new resource.
		 * Max length: 2048
		 */
		Description: FormControl<string | null | undefined>,

		/**
		 * The S3 URI points to a firmware update image that is to be used with a FUOTA task.
		 * Min length: 1
		 * Max length: 4096
		 */
		FirmwareUpdateImage: FormControl<string | null | undefined>,

		/**
		 * The firmware update role that is to be used with a FUOTA task.
		 * Min length: 1
		 * Max length: 2048
		 */
		FirmwareUpdateRole: FormControl<string | null | undefined>,

		/**
		 * The percentage of the added fragments that are redundant. For example, if the size of the firmware image file is 100 bytes and the fragment size is 10 bytes, with <code>RedundancyPercent</code> set to 50(%), the final number of encoded fragments is (100 / 10) + (100 / 10 * 50%) = 15.
		 * Minimum: 0
		 * Maximum: 100
		 */
		RedundancyPercent: FormControl<number | null | undefined>,

		/**
		 * The size of each fragment in bytes. This parameter is supported only for FUOTA tasks with multicast groups.
		 * Minimum: 1
		 */
		FragmentSizeBytes: FormControl<number | null | undefined>,

		/**
		 * <p>The interval for sending fragments in milliseconds, rounded to the nearest second.</p> <note> <p>This interval only determines the timing for when the Cloud sends down the fragments to yor device. There can be a delay for when your device will receive these fragments. This delay depends on the device's class and the communication delay with the cloud.</p> </note>
		 * Minimum: 1
		 */
		FragmentIntervalMS: FormControl<number | null | undefined>,
	}
	export function CreateUpdateFuotaTaskRequestFormGroup() {
		return new FormGroup<UpdateFuotaTaskRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256)]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048)]),
			FirmwareUpdateImage: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(4096)]),
			FirmwareUpdateRole: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2048)]),
			RedundancyPercent: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(100)]),
			FragmentSizeBytes: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			FragmentIntervalMS: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
		});

	}

	export interface UpdateLogLevelsByResourceTypesRequest {

		/** The log level for a log message. The log levels can be disabled, or set to <code>ERROR</code> to display less verbose logs containing only error information, or to <code>INFO</code> for more detailed logs. */
		DefaultLogLevel?: LogLevel | null;

		/** The list of wireless device log options. */
		WirelessDeviceLogOptions?: Array<WirelessDeviceLogOption>;

		/** The list of wireless gateway log options. */
		WirelessGatewayLogOptions?: Array<WirelessGatewayLogOption>;
	}
	export interface UpdateLogLevelsByResourceTypesRequestFormProperties {

		/** The log level for a log message. The log levels can be disabled, or set to <code>ERROR</code> to display less verbose logs containing only error information, or to <code>INFO</code> for more detailed logs. */
		DefaultLogLevel: FormControl<LogLevel | null | undefined>,
	}
	export function CreateUpdateLogLevelsByResourceTypesRequestFormGroup() {
		return new FormGroup<UpdateLogLevelsByResourceTypesRequestFormProperties>({
			DefaultLogLevel: new FormControl<LogLevel | null | undefined>(undefined),
		});

	}

	export interface UpdateMulticastGroupRequest {

		/**
		 * The name of the multicast group.
		 * Max length: 256
		 */
		Name?: string | null;

		/**
		 * The description of the new resource.
		 * Max length: 2048
		 */
		Description?: string | null;

		/** The LoRaWAN information that is to be used with the multicast group. */
		LoRaWAN?: LoRaWANMulticast;
	}
	export interface UpdateMulticastGroupRequestFormProperties {

		/**
		 * The name of the multicast group.
		 * Max length: 256
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * The description of the new resource.
		 * Max length: 2048
		 */
		Description: FormControl<string | null | undefined>,
	}
	export function CreateUpdateMulticastGroupRequestFormGroup() {
		return new FormGroup<UpdateMulticastGroupRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256)]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048)]),
		});

	}

	export interface UpdateNetworkAnalyzerConfigurationRequest {

		/** Trace content for your wireless gateway and wireless device resources. */
		TraceContent?: TraceContent;
		WirelessDevicesToAdd?: Array<string>;
		WirelessDevicesToRemove?: Array<string>;
		WirelessGatewaysToAdd?: Array<string>;
		WirelessGatewaysToRemove?: Array<string>;

		/**
		 * The description of the new resource.
		 * Max length: 2048
		 */
		Description?: string | null;
		MulticastGroupsToAdd?: Array<string>;
		MulticastGroupsToRemove?: Array<string>;
	}
	export interface UpdateNetworkAnalyzerConfigurationRequestFormProperties {

		/**
		 * The description of the new resource.
		 * Max length: 2048
		 */
		Description: FormControl<string | null | undefined>,
	}
	export function CreateUpdateNetworkAnalyzerConfigurationRequestFormGroup() {
		return new FormGroup<UpdateNetworkAnalyzerConfigurationRequestFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048)]),
		});

	}

	export interface UpdatePartnerAccountRequest {

		/** Required */
		Sidewalk: SidewalkUpdateAccount;
	}
	export interface UpdatePartnerAccountRequestFormProperties {
	}
	export function CreateUpdatePartnerAccountRequestFormGroup() {
		return new FormGroup<UpdatePartnerAccountRequestFormProperties>({
		});

	}


	/** This operation is no longer supported. */
	export interface UpdatePositionRequest {

		/** Required */
		Position: Array<number>;
	}

	/** This operation is no longer supported. */
	export interface UpdatePositionRequestFormProperties {
	}
	export function CreateUpdatePositionRequestFormGroup() {
		return new FormGroup<UpdatePositionRequestFormProperties>({
		});

	}

	export interface UpdateResourceEventConfigurationRequest {
		DeviceRegistrationState?: DeviceRegistrationStateEventConfiguration;
		Proximity?: ProximityEventConfiguration;
		Join?: JoinEventConfiguration;
		ConnectionStatus?: ConnectionStatusEventConfiguration;
		MessageDeliveryStatus?: MessageDeliveryStatusEventConfiguration;
	}
	export interface UpdateResourceEventConfigurationRequestFormProperties {
	}
	export function CreateUpdateResourceEventConfigurationRequestFormGroup() {
		return new FormGroup<UpdateResourceEventConfigurationRequestFormProperties>({
		});

	}

	export interface UpdateResourcePositionRequest {
		GeoJsonPayload?: string;
	}
	export interface UpdateResourcePositionRequestFormProperties {
		GeoJsonPayload: FormControl<string | null | undefined>,
	}
	export function CreateUpdateResourcePositionRequestFormGroup() {
		return new FormGroup<UpdateResourcePositionRequestFormProperties>({
			GeoJsonPayload: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateWirelessDeviceImportTaskRequest {

		/** Required */
		Sidewalk: SidewalkUpdateImportInfo;
	}
	export interface UpdateWirelessDeviceImportTaskRequestFormProperties {
	}
	export function CreateUpdateWirelessDeviceImportTaskRequestFormGroup() {
		return new FormGroup<UpdateWirelessDeviceImportTaskRequestFormProperties>({
		});

	}

	export interface UpdateWirelessDeviceRequest {
		DestinationName?: string;
		Name?: string;
		Description?: string;
		LoRaWAN?: LoRaWANUpdateDevice;
		Positioning?: EventNotificationTopicStatus;
	}
	export interface UpdateWirelessDeviceRequestFormProperties {
		DestinationName: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		Positioning: FormControl<EventNotificationTopicStatus | null | undefined>,
	}
	export function CreateUpdateWirelessDeviceRequestFormGroup() {
		return new FormGroup<UpdateWirelessDeviceRequestFormProperties>({
			DestinationName: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			Positioning: new FormControl<EventNotificationTopicStatus | null | undefined>(undefined),
		});

	}

	export interface UpdateWirelessGatewayRequest {
		Name?: string;
		Description?: string;

		/**
		 * A list of JoinEuiRange used by LoRa gateways to filter LoRa frames.
		 * Minimum items: 0
		 * Maximum items: 3
		 */
		JoinEuiFilters?: Array<Array<string>>;

		/**
		 * A list of NetId values that are used by LoRa gateways to filter the uplink frames.
		 * Minimum items: 0
		 * Maximum items: 10
		 */
		NetIdFilters?: Array<string>;
		MaxEirp?: number;
	}
	export interface UpdateWirelessGatewayRequestFormProperties {
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		MaxEirp: FormControl<number | null | undefined>,
	}
	export function CreateUpdateWirelessGatewayRequestFormGroup() {
		return new FormGroup<UpdateWirelessGatewayRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			MaxEirp: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The event for a log message, if the log message is tied to a wireless device. */
	export enum WirelessDeviceEvent { Join = 'Join', Rejoin = 'Rejoin', Uplink_Data = 'Uplink_Data', Downlink_Data = 'Downlink_Data', Registration = 'Registration' }


	/** The event for a log message, if the log message is tied to a wireless gateway. */
	export enum WirelessGatewayEvent { CUPS_Request = 'CUPS_Request', Certificate = 'Certificate' }


	/** The wireless gateway type. */
	export enum WirelessGatewayType { LoRaWAN = 'LoRaWAN' }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Associates a partner account with your AWS account.
		 * Post partner-accounts
		 * @return {AssociateAwsAccountWithPartnerAccountResponse} Success
		 */
		AssociateAwsAccountWithPartnerAccount(requestBody: AssociateAwsAccountWithPartnerAccountPostBody): Observable<AssociateAwsAccountWithPartnerAccountResponse> {
			return this.http.post<AssociateAwsAccountWithPartnerAccountResponse>(this.baseUri + 'partner-accounts', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the partner accounts associated with your AWS account.
		 * Get partner-accounts
		 * @param {string} nextToken To retrieve the next set of results, the <code>nextToken</code> value from a previous response; otherwise <b>null</b> to receive the first set of results.
		 *     Max length: 4096
		 * @param {number} maxResults The maximum number of results to return in this operation.
		 *     Minimum: 0    Maximum: 250
		 * @return {ListPartnerAccountsResponse} Success
		 */
		ListPartnerAccounts(nextToken: string | null | undefined, maxResults: number | null | undefined): Observable<ListPartnerAccountsResponse> {
			return this.http.get<ListPartnerAccountsResponse>(this.baseUri + 'partner-accounts?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, {});
		}

		/**
		 * Associate a multicast group with a FUOTA task.
		 * Put fuota-tasks/{Id}/multicast-group
		 * @param {string} Id Max length: 256
		 * @return {void} 
		 */
		AssociateMulticastGroupWithFuotaTask(Id: string, requestBody: AssociateMulticastGroupWithFuotaTaskPutBody): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'fuota-tasks/' + (Id == null ? '' : encodeURIComponent(Id)) + '/multicast-group', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Associate a wireless device with a FUOTA task.
		 * Put fuota-tasks/{Id}/wireless-device
		 * @param {string} Id Max length: 256
		 * @return {void} 
		 */
		AssociateWirelessDeviceWithFuotaTask(Id: string, requestBody: AssociateWirelessDeviceWithFuotaTaskPutBody): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'fuota-tasks/' + (Id == null ? '' : encodeURIComponent(Id)) + '/wireless-device', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Associates a wireless device with a multicast group.
		 * Put multicast-groups/{Id}/wireless-device
		 * @param {string} Id Max length: 256
		 * @return {void} 
		 */
		AssociateWirelessDeviceWithMulticastGroup(Id: string, requestBody: AssociateWirelessDeviceWithMulticastGroupPutBody): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'multicast-groups/' + (Id == null ? '' : encodeURIComponent(Id)) + '/wireless-device', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Associates a wireless device with a thing.
		 * Put wireless-devices/{Id}/thing
		 * @param {string} Id The ID of the resource to update.
		 *     Max length: 256
		 * @return {void} 
		 */
		AssociateWirelessDeviceWithThing(Id: string, requestBody: AssociateWirelessDeviceWithThingPutBody): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'wireless-devices/' + (Id == null ? '' : encodeURIComponent(Id)) + '/thing', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Disassociates a wireless device from its currently associated thing.
		 * Delete wireless-devices/{Id}/thing
		 * @param {string} Id The ID of the resource to update.
		 *     Max length: 256
		 * @return {void} 
		 */
		DisassociateWirelessDeviceFromThing(Id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'wireless-devices/' + (Id == null ? '' : encodeURIComponent(Id)) + '/thing', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Associates a wireless gateway with a certificate.
		 * Put wireless-gateways/{Id}/certificate
		 * @param {string} Id The ID of the resource to update.
		 *     Max length: 256
		 * @return {AssociateWirelessGatewayWithCertificateResponse} Success
		 */
		AssociateWirelessGatewayWithCertificate(Id: string, requestBody: AssociateWirelessGatewayWithCertificatePutBody): Observable<AssociateWirelessGatewayWithCertificateResponse> {
			return this.http.put<AssociateWirelessGatewayWithCertificateResponse>(this.baseUri + 'wireless-gateways/' + (Id == null ? '' : encodeURIComponent(Id)) + '/certificate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Disassociates a wireless gateway from its currently associated certificate.
		 * Delete wireless-gateways/{Id}/certificate
		 * @param {string} Id The ID of the resource to update.
		 *     Max length: 256
		 * @return {void} 
		 */
		DisassociateWirelessGatewayFromCertificate(Id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'wireless-gateways/' + (Id == null ? '' : encodeURIComponent(Id)) + '/certificate', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the ID of the certificate that is currently associated with a wireless gateway.
		 * Get wireless-gateways/{Id}/certificate
		 * @param {string} Id The ID of the resource to get.
		 *     Max length: 256
		 * @return {GetWirelessGatewayCertificateResponse} Success
		 */
		GetWirelessGatewayCertificate(Id: string): Observable<GetWirelessGatewayCertificateResponse> {
			return this.http.get<GetWirelessGatewayCertificateResponse>(this.baseUri + 'wireless-gateways/' + (Id == null ? '' : encodeURIComponent(Id)) + '/certificate', {});
		}

		/**
		 * Associates a wireless gateway with a thing.
		 * Put wireless-gateways/{Id}/thing
		 * @param {string} Id The ID of the resource to update.
		 *     Max length: 256
		 * @return {void} 
		 */
		AssociateWirelessGatewayWithThing(Id: string, requestBody: AssociateWirelessGatewayWithThingPutBody): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'wireless-gateways/' + (Id == null ? '' : encodeURIComponent(Id)) + '/thing', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Disassociates a wireless gateway from its currently associated thing.
		 * Delete wireless-gateways/{Id}/thing
		 * @param {string} Id The ID of the resource to update.
		 *     Max length: 256
		 * @return {void} 
		 */
		DisassociateWirelessGatewayFromThing(Id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'wireless-gateways/' + (Id == null ? '' : encodeURIComponent(Id)) + '/thing', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Cancels an existing multicast group session.
		 * Delete multicast-groups/{Id}/session
		 * @param {string} Id Max length: 256
		 * @return {void} 
		 */
		CancelMulticastGroupSession(Id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'multicast-groups/' + (Id == null ? '' : encodeURIComponent(Id)) + '/session', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets information about a multicast group session.
		 * Get multicast-groups/{Id}/session
		 * @param {string} Id Max length: 256
		 * @return {GetMulticastGroupSessionResponse} Success
		 */
		GetMulticastGroupSession(Id: string): Observable<GetMulticastGroupSessionResponse> {
			return this.http.get<GetMulticastGroupSessionResponse>(this.baseUri + 'multicast-groups/' + (Id == null ? '' : encodeURIComponent(Id)) + '/session', {});
		}

		/**
		 * Starts a multicast group session.
		 * Put multicast-groups/{Id}/session
		 * @param {string} Id Max length: 256
		 * @return {void} 
		 */
		StartMulticastGroupSession(Id: string, requestBody: StartMulticastGroupSessionPutBody): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'multicast-groups/' + (Id == null ? '' : encodeURIComponent(Id)) + '/session', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a new destination that maps a device message to an AWS IoT rule.
		 * Post destinations
		 * @return {void} 
		 */
		CreateDestination(requestBody: CreateDestinationPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'destinations', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists the destinations registered to your AWS account.
		 * Get destinations
		 * @param {number} maxResults The maximum number of results to return in this operation.
		 *     Minimum: 0    Maximum: 250
		 * @param {string} nextToken To retrieve the next set of results, the <code>nextToken</code> value from a previous response; otherwise <b>null</b> to receive the first set of results.
		 *     Max length: 4096
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListDestinationsResponse} Success
		 */
		ListDestinations(maxResults: number | null | undefined, nextToken: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListDestinationsResponse> {
			return this.http.get<ListDestinationsResponse>(this.baseUri + 'destinations?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Creates a new device profile.
		 * Post device-profiles
		 * @return {void} 
		 */
		CreateDeviceProfile(requestBody: CreateDeviceProfilePostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'device-profiles', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists the device profiles registered to your AWS account.
		 * Get device-profiles
		 * @param {string} nextToken To retrieve the next set of results, the <code>nextToken</code> value from a previous response; otherwise <b>null</b> to receive the first set of results.
		 *     Max length: 4096
		 * @param {number} maxResults The maximum number of results to return in this operation.
		 *     Minimum: 0    Maximum: 250
		 * @param {WirelessDeviceType} deviceProfileType A filter to list only device profiles that use this type, which can be <code>LoRaWAN</code> or <code>Sidewalk</code>.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListDeviceProfilesResponse} Success
		 */
		ListDeviceProfiles(nextToken: string | null | undefined, maxResults: number | null | undefined, deviceProfileType: WirelessDeviceType | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListDeviceProfilesResponse> {
			return this.http.get<ListDeviceProfilesResponse>(this.baseUri + 'device-profiles?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults + '&deviceProfileType=' + deviceProfileType + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Creates a FUOTA task.
		 * Post fuota-tasks
		 * @return {void} 
		 */
		CreateFuotaTask(requestBody: CreateFuotaTaskPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'fuota-tasks', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists the FUOTA tasks registered to your AWS account.
		 * Get fuota-tasks
		 * @param {string} nextToken To retrieve the next set of results, the <code>nextToken</code> value from a previous response; otherwise <b>null</b> to receive the first set of results.
		 *     Max length: 4096
		 * @param {number} maxResults Minimum: 0
		 *     Maximum: 250
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListFuotaTasksResponse} Success
		 */
		ListFuotaTasks(nextToken: string | null | undefined, maxResults: number | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListFuotaTasksResponse> {
			return this.http.get<ListFuotaTasksResponse>(this.baseUri + 'fuota-tasks?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Creates a multicast group.
		 * Post multicast-groups
		 * @return {void} 
		 */
		CreateMulticastGroup(requestBody: CreateMulticastGroupPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'multicast-groups', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists the multicast groups registered to your AWS account.
		 * Get multicast-groups
		 * @param {string} nextToken To retrieve the next set of results, the <code>nextToken</code> value from a previous response; otherwise <b>null</b> to receive the first set of results.
		 *     Max length: 4096
		 * @param {number} maxResults Minimum: 0
		 *     Maximum: 250
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListMulticastGroupsResponse} Success
		 */
		ListMulticastGroups(nextToken: string | null | undefined, maxResults: number | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListMulticastGroupsResponse> {
			return this.http.get<ListMulticastGroupsResponse>(this.baseUri + 'multicast-groups?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Creates a new network analyzer configuration.
		 * Post network-analyzer-configurations
		 * @return {void} 
		 */
		CreateNetworkAnalyzerConfiguration(requestBody: CreateNetworkAnalyzerConfigurationPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'network-analyzer-configurations', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists the network analyzer configurations.
		 * Get network-analyzer-configurations
		 * @param {number} maxResults Minimum: 0
		 *     Maximum: 250
		 * @param {string} nextToken To retrieve the next set of results, the <code>nextToken</code> value from a previous response; otherwise <b>null</b> to receive the first set of results.
		 *     Max length: 4096
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListNetworkAnalyzerConfigurationsResponse} Success
		 */
		ListNetworkAnalyzerConfigurations(maxResults: number | null | undefined, nextToken: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListNetworkAnalyzerConfigurationsResponse> {
			return this.http.get<ListNetworkAnalyzerConfigurationsResponse>(this.baseUri + 'network-analyzer-configurations?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Creates a new service profile.
		 * Post service-profiles
		 * @return {void} 
		 */
		CreateServiceProfile(requestBody: CreateServiceProfilePostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'service-profiles', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists the service profiles registered to your AWS account.
		 * Get service-profiles
		 * @param {string} nextToken To retrieve the next set of results, the <code>nextToken</code> value from a previous response; otherwise <b>null</b> to receive the first set of results.
		 *     Max length: 4096
		 * @param {number} maxResults The maximum number of results to return in this operation.
		 *     Minimum: 0    Maximum: 250
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListServiceProfilesResponse} Success
		 */
		ListServiceProfiles(nextToken: string | null | undefined, maxResults: number | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListServiceProfilesResponse> {
			return this.http.get<ListServiceProfilesResponse>(this.baseUri + 'service-profiles?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Provisions a wireless device.
		 * Post wireless-devices
		 * @return {void} 
		 */
		CreateWirelessDevice(requestBody: CreateWirelessDevicePostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'wireless-devices', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists the wireless devices registered to your AWS account.
		 * Get wireless-devices
		 * @param {number} maxResults The maximum number of results to return in this operation.
		 *     Minimum: 0    Maximum: 250
		 * @param {string} nextToken To retrieve the next set of results, the <code>nextToken</code> value from a previous response; otherwise <b>null</b> to receive the first set of results.
		 *     Max length: 4096
		 * @param {string} destinationName A filter to list only the wireless devices that use this destination.
		 *     Max length: 128
		 * @param {string} deviceProfileId A filter to list only the wireless devices that use this device profile.
		 *     Max length: 256
		 * @param {string} serviceProfileId A filter to list only the wireless devices that use this service profile.
		 *     Max length: 256
		 * @param {WirelessDeviceType} wirelessDeviceType A filter to list only the wireless devices that use this wireless device type.
		 * @param {string} fuotaTaskId Max length: 256
		 * @param {string} multicastGroupId Max length: 256
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListWirelessDevicesResponse} Success
		 */
		ListWirelessDevices(maxResults: number | null | undefined, nextToken: string | null | undefined, destinationName: string | null | undefined, deviceProfileId: string | null | undefined, serviceProfileId: string | null | undefined, wirelessDeviceType: WirelessDeviceType | null | undefined, fuotaTaskId: string | null | undefined, multicastGroupId: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListWirelessDevicesResponse> {
			return this.http.get<ListWirelessDevicesResponse>(this.baseUri + 'wireless-devices?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&destinationName=' + (destinationName == null ? '' : encodeURIComponent(destinationName)) + '&deviceProfileId=' + (deviceProfileId == null ? '' : encodeURIComponent(deviceProfileId)) + '&serviceProfileId=' + (serviceProfileId == null ? '' : encodeURIComponent(serviceProfileId)) + '&wirelessDeviceType=' + wirelessDeviceType + '&fuotaTaskId=' + (fuotaTaskId == null ? '' : encodeURIComponent(fuotaTaskId)) + '&multicastGroupId=' + (multicastGroupId == null ? '' : encodeURIComponent(multicastGroupId)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Provisions a wireless gateway.
		 * Post wireless-gateways
		 * @return {void} 
		 */
		CreateWirelessGateway(requestBody: CreateWirelessGatewayPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'wireless-gateways', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists the wireless gateways registered to your AWS account.
		 * Get wireless-gateways
		 * @param {string} nextToken To retrieve the next set of results, the <code>nextToken</code> value from a previous response; otherwise <b>null</b> to receive the first set of results.
		 *     Max length: 4096
		 * @param {number} maxResults The maximum number of results to return in this operation.
		 *     Minimum: 0    Maximum: 250
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListWirelessGatewaysResponse} Success
		 */
		ListWirelessGateways(nextToken: string | null | undefined, maxResults: number | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListWirelessGatewaysResponse> {
			return this.http.get<ListWirelessGatewaysResponse>(this.baseUri + 'wireless-gateways?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Creates a task for a wireless gateway.
		 * Post wireless-gateways/{Id}/tasks
		 * @param {string} Id The ID of the resource to update.
		 *     Max length: 256
		 * @return {void} 
		 */
		CreateWirelessGatewayTask(Id: string, requestBody: CreateWirelessGatewayTaskPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'wireless-gateways/' + (Id == null ? '' : encodeURIComponent(Id)) + '/tasks', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a wireless gateway task.
		 * Delete wireless-gateways/{Id}/tasks
		 * @param {string} Id The ID of the resource to delete.
		 *     Max length: 256
		 * @return {void} 
		 */
		DeleteWirelessGatewayTask(Id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'wireless-gateways/' + (Id == null ? '' : encodeURIComponent(Id)) + '/tasks', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets information about a wireless gateway task.
		 * Get wireless-gateways/{Id}/tasks
		 * @param {string} Id The ID of the resource to get.
		 *     Max length: 256
		 * @return {GetWirelessGatewayTaskResponse} Success
		 */
		GetWirelessGatewayTask(Id: string): Observable<GetWirelessGatewayTaskResponse> {
			return this.http.get<GetWirelessGatewayTaskResponse>(this.baseUri + 'wireless-gateways/' + (Id == null ? '' : encodeURIComponent(Id)) + '/tasks', {});
		}

		/**
		 * Creates a gateway task definition.
		 * Post wireless-gateway-task-definitions
		 * @return {void} 
		 */
		CreateWirelessGatewayTaskDefinition(requestBody: CreateWirelessGatewayTaskDefinitionPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'wireless-gateway-task-definitions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * List the wireless gateway tasks definitions registered to your AWS account.
		 * Get wireless-gateway-task-definitions
		 * @param {number} maxResults The maximum number of results to return in this operation.
		 *     Minimum: 0    Maximum: 250
		 * @param {string} nextToken To retrieve the next set of results, the <code>nextToken</code> value from a previous response; otherwise <b>null</b> to receive the first set of results.
		 *     Max length: 4096
		 * @param {WirelessGatewayTaskDefinitionType} taskDefinitionType A filter to list only the wireless gateway task definitions that use this task definition type.
		 * @return {ListWirelessGatewayTaskDefinitionsResponse} Success
		 */
		ListWirelessGatewayTaskDefinitions(maxResults: number | null | undefined, nextToken: string | null | undefined, taskDefinitionType: WirelessGatewayTaskDefinitionType | null | undefined): Observable<ListWirelessGatewayTaskDefinitionsResponse> {
			return this.http.get<ListWirelessGatewayTaskDefinitionsResponse>(this.baseUri + 'wireless-gateway-task-definitions?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&taskDefinitionType=' + taskDefinitionType, {});
		}

		/**
		 * Deletes a destination.
		 * Delete destinations/{Name}
		 * @param {string} Name The name of the resource to delete.
		 *     Max length: 128
		 * @return {void} 
		 */
		DeleteDestination(Name: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'destinations/' + (Name == null ? '' : encodeURIComponent(Name)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets information about a destination.
		 * Get destinations/{Name}
		 * @param {string} Name The name of the resource to get.
		 *     Max length: 128
		 * @return {GetDestinationResponse} Success
		 */
		GetDestination(Name: string): Observable<GetDestinationResponse> {
			return this.http.get<GetDestinationResponse>(this.baseUri + 'destinations/' + (Name == null ? '' : encodeURIComponent(Name)), {});
		}

		/**
		 * Updates properties of a destination.
		 * Patch destinations/{Name}
		 * @param {string} Name The new name of the resource.
		 *     Max length: 128
		 * @return {void} 
		 */
		UpdateDestination(Name: string, requestBody: UpdateDestinationPatchBody): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'destinations/' + (Name == null ? '' : encodeURIComponent(Name)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a device profile.
		 * Delete device-profiles/{Id}
		 * @param {string} Id The ID of the resource to delete.
		 *     Max length: 256
		 * @return {void} 
		 */
		DeleteDeviceProfile(Id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'device-profiles/' + (Id == null ? '' : encodeURIComponent(Id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets information about a device profile.
		 * Get device-profiles/{Id}
		 * @param {string} Id The ID of the resource to get.
		 *     Max length: 256
		 * @return {GetDeviceProfileResponse} Success
		 */
		GetDeviceProfile(Id: string): Observable<GetDeviceProfileResponse> {
			return this.http.get<GetDeviceProfileResponse>(this.baseUri + 'device-profiles/' + (Id == null ? '' : encodeURIComponent(Id)), {});
		}

		/**
		 * Deletes a FUOTA task.
		 * Delete fuota-tasks/{Id}
		 * @param {string} Id Max length: 256
		 * @return {void} 
		 */
		DeleteFuotaTask(Id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'fuota-tasks/' + (Id == null ? '' : encodeURIComponent(Id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets information about a FUOTA task.
		 * Get fuota-tasks/{Id}
		 * @param {string} Id Max length: 256
		 * @return {GetFuotaTaskResponse} Success
		 */
		GetFuotaTask(Id: string): Observable<GetFuotaTaskResponse> {
			return this.http.get<GetFuotaTaskResponse>(this.baseUri + 'fuota-tasks/' + (Id == null ? '' : encodeURIComponent(Id)), {});
		}

		/**
		 * Starts a FUOTA task.
		 * Put fuota-tasks/{Id}
		 * @param {string} Id Max length: 256
		 * @return {void} 
		 */
		StartFuotaTask(Id: string, requestBody: StartFuotaTaskPutBody): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'fuota-tasks/' + (Id == null ? '' : encodeURIComponent(Id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates properties of a FUOTA task.
		 * Patch fuota-tasks/{Id}
		 * @param {string} Id Max length: 256
		 * @return {void} 
		 */
		UpdateFuotaTask(Id: string, requestBody: UpdateFuotaTaskPatchBody): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'fuota-tasks/' + (Id == null ? '' : encodeURIComponent(Id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a multicast group if it is not in use by a fuota task.
		 * Delete multicast-groups/{Id}
		 * @param {string} Id Max length: 256
		 * @return {void} 
		 */
		DeleteMulticastGroup(Id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'multicast-groups/' + (Id == null ? '' : encodeURIComponent(Id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets information about a multicast group.
		 * Get multicast-groups/{Id}
		 * @param {string} Id Max length: 256
		 * @return {GetMulticastGroupResponse} Success
		 */
		GetMulticastGroup(Id: string): Observable<GetMulticastGroupResponse> {
			return this.http.get<GetMulticastGroupResponse>(this.baseUri + 'multicast-groups/' + (Id == null ? '' : encodeURIComponent(Id)), {});
		}

		/**
		 * Updates properties of a multicast group session.
		 * Patch multicast-groups/{Id}
		 * @param {string} Id Max length: 256
		 * @return {void} 
		 */
		UpdateMulticastGroup(Id: string, requestBody: UpdateMulticastGroupPatchBody): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'multicast-groups/' + (Id == null ? '' : encodeURIComponent(Id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a network analyzer configuration.
		 * Delete network-analyzer-configurations/{ConfigurationName}
		 * @param {string} ConfigurationName Min length: 1
		 *     Max length: 1024
		 * @return {void} 
		 */
		DeleteNetworkAnalyzerConfiguration(ConfigurationName: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'network-analyzer-configurations/' + (ConfigurationName == null ? '' : encodeURIComponent(ConfigurationName)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get network analyzer configuration.
		 * Get network-analyzer-configurations/{ConfigurationName}
		 * @param {string} ConfigurationName Min length: 1
		 *     Max length: 1024
		 * @return {GetNetworkAnalyzerConfigurationResponse} Success
		 */
		GetNetworkAnalyzerConfiguration(ConfigurationName: string): Observable<GetNetworkAnalyzerConfigurationResponse> {
			return this.http.get<GetNetworkAnalyzerConfigurationResponse>(this.baseUri + 'network-analyzer-configurations/' + (ConfigurationName == null ? '' : encodeURIComponent(ConfigurationName)), {});
		}

		/**
		 * Update network analyzer configuration.
		 * Patch network-analyzer-configurations/{ConfigurationName}
		 * @param {string} ConfigurationName Min length: 1
		 *     Max length: 1024
		 * @return {void} 
		 */
		UpdateNetworkAnalyzerConfiguration(ConfigurationName: string, requestBody: UpdateNetworkAnalyzerConfigurationPatchBody): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'network-analyzer-configurations/' + (ConfigurationName == null ? '' : encodeURIComponent(ConfigurationName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Remove queued messages from the downlink queue.
		 * Delete wireless-devices/{Id}/data#messageId
		 * @param {string} Id The ID of a given wireless device for which downlink messages will be deleted.
		 *     Max length: 256
		 * @param {string} messageId If message ID is <code>"*"</code>, it cleares the entire downlink queue for a given device, specified by the wireless device ID. Otherwise, the downlink message with the specified message ID will be deleted.
		 * @param {WirelessDeviceType} WirelessDeviceType The wireless device type, which can be either Sidewalk or LoRaWAN.
		 * @return {void} 
		 */
		DeleteQueuedMessages(Id: string, messageId: string, WirelessDeviceType: WirelessDeviceType | null | undefined): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'wireless-devices/' + (Id == null ? '' : encodeURIComponent(Id)) + '/data#messageId&messageId=' + (messageId == null ? '' : encodeURIComponent(messageId)) + '&WirelessDeviceType=' + WirelessDeviceType, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a service profile.
		 * Delete service-profiles/{Id}
		 * @param {string} Id The ID of the resource to delete.
		 *     Max length: 256
		 * @return {void} 
		 */
		DeleteServiceProfile(Id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'service-profiles/' + (Id == null ? '' : encodeURIComponent(Id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets information about a service profile.
		 * Get service-profiles/{Id}
		 * @param {string} Id The ID of the resource to get.
		 *     Max length: 256
		 * @return {GetServiceProfileResponse} Success
		 */
		GetServiceProfile(Id: string): Observable<GetServiceProfileResponse> {
			return this.http.get<GetServiceProfileResponse>(this.baseUri + 'service-profiles/' + (Id == null ? '' : encodeURIComponent(Id)), {});
		}

		/**
		 * Deletes a wireless device.
		 * Delete wireless-devices/{Id}
		 * @param {string} Id The ID of the resource to delete.
		 *     Max length: 256
		 * @return {void} 
		 */
		DeleteWirelessDevice(Id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'wireless-devices/' + (Id == null ? '' : encodeURIComponent(Id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates properties of a wireless device.
		 * Patch wireless-devices/{Id}
		 * @param {string} Id The ID of the resource to update.
		 *     Max length: 256
		 * @return {void} 
		 */
		UpdateWirelessDevice(Id: string, requestBody: UpdateWirelessDevicePatchBody): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'wireless-devices/' + (Id == null ? '' : encodeURIComponent(Id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete an import task.
		 * Delete wireless_device_import_task/{Id}
		 * @param {string} Id The unique identifier of the import task to be deleted.
		 *     Max length: 256
		 * @return {void} 
		 */
		DeleteWirelessDeviceImportTask(Id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'wireless_device_import_task/' + (Id == null ? '' : encodeURIComponent(Id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get information about an import task and count of device onboarding summary information for the import task.
		 * Get wireless_device_import_task/{Id}
		 * @param {string} Id The identifier of the import task for which information is requested.
		 *     Max length: 256
		 * @return {GetWirelessDeviceImportTaskResponse} Success
		 */
		GetWirelessDeviceImportTask(Id: string): Observable<GetWirelessDeviceImportTaskResponse> {
			return this.http.get<GetWirelessDeviceImportTaskResponse>(this.baseUri + 'wireless_device_import_task/' + (Id == null ? '' : encodeURIComponent(Id)), {});
		}

		/**
		 * Update an import task to add more devices to the task.
		 * Patch wireless_device_import_task/{Id}
		 * @param {string} Id The identifier of the import task to be updated.
		 *     Max length: 256
		 * @return {void} 
		 */
		UpdateWirelessDeviceImportTask(Id: string, requestBody: UpdateWirelessDeviceImportTaskPatchBody): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'wireless_device_import_task/' + (Id == null ? '' : encodeURIComponent(Id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a wireless gateway.
		 * Delete wireless-gateways/{Id}
		 * @param {string} Id The ID of the resource to delete.
		 *     Max length: 256
		 * @return {void} 
		 */
		DeleteWirelessGateway(Id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'wireless-gateways/' + (Id == null ? '' : encodeURIComponent(Id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates properties of a wireless gateway.
		 * Patch wireless-gateways/{Id}
		 * @param {string} Id The ID of the resource to update.
		 *     Max length: 256
		 * @return {void} 
		 */
		UpdateWirelessGateway(Id: string, requestBody: UpdateWirelessGatewayPatchBody): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'wireless-gateways/' + (Id == null ? '' : encodeURIComponent(Id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a wireless gateway task definition. Deleting this task definition does not affect tasks that are currently in progress.
		 * Delete wireless-gateway-task-definitions/{Id}
		 * @param {string} Id The ID of the resource to delete.
		 *     Max length: 36
		 * @return {void} 
		 */
		DeleteWirelessGatewayTaskDefinition(Id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'wireless-gateway-task-definitions/' + (Id == null ? '' : encodeURIComponent(Id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets information about a wireless gateway task definition.
		 * Get wireless-gateway-task-definitions/{Id}
		 * @param {string} Id The ID of the resource to get.
		 *     Max length: 36
		 * @return {GetWirelessGatewayTaskDefinitionResponse} Success
		 */
		GetWirelessGatewayTaskDefinition(Id: string): Observable<GetWirelessGatewayTaskDefinitionResponse> {
			return this.http.get<GetWirelessGatewayTaskDefinitionResponse>(this.baseUri + 'wireless-gateway-task-definitions/' + (Id == null ? '' : encodeURIComponent(Id)), {});
		}

		/**
		 * Deregister a wireless device from AWS IoT Wireless.
		 * Patch wireless-devices/{Identifier}/deregister
		 * @param {string} Identifier The identifier of the wireless device to deregister from AWS IoT Wireless.
		 *     Max length: 256
		 * @param {WirelessDeviceType} WirelessDeviceType The type of wireless device to deregister from AWS IoT Wireless, which can be <code>LoRaWAN</code> or <code>Sidewalk</code>.
		 * @return {DeregisterWirelessDeviceResponse} Success
		 */
		DeregisterWirelessDevice(Identifier: string, WirelessDeviceType: WirelessDeviceType | null | undefined): Observable<DeregisterWirelessDeviceResponse> {
			return this.http.patch<DeregisterWirelessDeviceResponse>(this.baseUri + 'wireless-devices/' + (Identifier == null ? '' : encodeURIComponent(Identifier)) + '/deregister&WirelessDeviceType=' + WirelessDeviceType, null, {});
		}

		/**
		 * Disassociates your AWS account from a partner account. If <code>PartnerAccountId</code> and <code>PartnerType</code> are <code>null</code>, disassociates your AWS account from all partner accounts.
		 * Delete partner-accounts/{PartnerAccountId}#partnerType
		 * @param {string} PartnerAccountId The partner account ID to disassociate from the AWS account.
		 *     Max length: 256
		 * @param {EventNotificationPartnerType} partnerType The partner type.
		 * @return {void} 
		 */
		DisassociateAwsAccountFromPartnerAccount(PartnerAccountId: string, partnerType: EventNotificationPartnerType): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'partner-accounts/' + (PartnerAccountId == null ? '' : encodeURIComponent(PartnerAccountId)) + '#partnerType&partnerType=' + partnerType, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets information about a partner account. If <code>PartnerAccountId</code> and <code>PartnerType</code> are <code>null</code>, returns all partner accounts.
		 * Get partner-accounts/{PartnerAccountId}#partnerType
		 * @param {string} PartnerAccountId The partner account ID to disassociate from the AWS account.
		 *     Max length: 256
		 * @param {EventNotificationPartnerType} partnerType The partner type.
		 * @return {GetPartnerAccountResponse} Success
		 */
		GetPartnerAccount(PartnerAccountId: string, partnerType: EventNotificationPartnerType): Observable<GetPartnerAccountResponse> {
			return this.http.get<GetPartnerAccountResponse>(this.baseUri + 'partner-accounts/' + (PartnerAccountId == null ? '' : encodeURIComponent(PartnerAccountId)) + '#partnerType&partnerType=' + partnerType, {});
		}

		/**
		 * Updates properties of a partner account.
		 * Patch partner-accounts/{PartnerAccountId}#partnerType
		 * @param {string} PartnerAccountId The ID of the partner account to update.
		 *     Max length: 256
		 * @param {EventNotificationPartnerType} partnerType The partner type.
		 * @return {void} 
		 */
		UpdatePartnerAccount(PartnerAccountId: string, partnerType: EventNotificationPartnerType, requestBody: UpdatePartnerAccountPatchBody): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'partner-accounts/' + (PartnerAccountId == null ? '' : encodeURIComponent(PartnerAccountId)) + '#partnerType&partnerType=' + partnerType, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Disassociates a multicast group from a fuota task.
		 * Delete fuota-tasks/{Id}/multicast-groups/{MulticastGroupId}
		 * @param {string} Id Max length: 256
		 * @param {string} MulticastGroupId Max length: 256
		 * @return {void} 
		 */
		DisassociateMulticastGroupFromFuotaTask(Id: string, MulticastGroupId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'fuota-tasks/' + (Id == null ? '' : encodeURIComponent(Id)) + '/multicast-groups/' + (MulticastGroupId == null ? '' : encodeURIComponent(MulticastGroupId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Disassociates a wireless device from a FUOTA task.
		 * Delete fuota-tasks/{Id}/wireless-devices/{WirelessDeviceId}
		 * @param {string} Id Max length: 256
		 * @param {string} WirelessDeviceId Max length: 256
		 * @return {void} 
		 */
		DisassociateWirelessDeviceFromFuotaTask(Id: string, WirelessDeviceId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'fuota-tasks/' + (Id == null ? '' : encodeURIComponent(Id)) + '/wireless-devices/' + (WirelessDeviceId == null ? '' : encodeURIComponent(WirelessDeviceId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Disassociates a wireless device from a multicast group.
		 * Delete multicast-groups/{Id}/wireless-devices/{WirelessDeviceId}
		 * @param {string} Id Max length: 256
		 * @param {string} WirelessDeviceId Max length: 256
		 * @return {void} 
		 */
		DisassociateWirelessDeviceFromMulticastGroup(Id: string, WirelessDeviceId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'multicast-groups/' + (Id == null ? '' : encodeURIComponent(Id)) + '/wireless-devices/' + (WirelessDeviceId == null ? '' : encodeURIComponent(WirelessDeviceId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get the event configuration based on resource types.
		 * Get event-configurations-resource-types
		 * @return {GetEventConfigurationByResourceTypesResponse} Success
		 */
		GetEventConfigurationByResourceTypes(): Observable<GetEventConfigurationByResourceTypesResponse> {
			return this.http.get<GetEventConfigurationByResourceTypesResponse>(this.baseUri + 'event-configurations-resource-types', {});
		}

		/**
		 * Update the event configuration based on resource types.
		 * Patch event-configurations-resource-types
		 * @return {void} 
		 */
		UpdateEventConfigurationByResourceTypes(requestBody: UpdateEventConfigurationByResourceTypesPatchBody): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'event-configurations-resource-types', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns current default log levels or log levels by resource types. Based on resource types, log levels can be for wireless device log options or wireless gateway log options.
		 * Get log-levels
		 * @return {GetLogLevelsByResourceTypesResponse} Success
		 */
		GetLogLevelsByResourceTypes(): Observable<GetLogLevelsByResourceTypesResponse> {
			return this.http.get<GetLogLevelsByResourceTypesResponse>(this.baseUri + 'log-levels', {});
		}

		/**
		 * Removes the log-level overrides for all resources; both wireless devices and wireless gateways.
		 * Delete log-levels
		 * @return {void} 
		 */
		ResetAllResourceLogLevels(): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'log-levels', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Set default log level, or log levels by resource types. This can be for wireless device log options or wireless gateways log options and is used to control the log messages that'll be displayed in CloudWatch.
		 * Post log-levels
		 * @return {UpdateLogLevelsByResourceTypesResponse} Success
		 */
		UpdateLogLevelsByResourceTypes(requestBody: UpdateLogLevelsByResourceTypesPostBody): Observable<UpdateLogLevelsByResourceTypesResponse> {
			return this.http.post<UpdateLogLevelsByResourceTypesResponse>(this.baseUri + 'log-levels', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Get the position information for a given resource.</p> <important> <p>This action is no longer supported. Calls to retrieve the position information should use the <a href="https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_GetResourcePosition.html">GetResourcePosition</a> API operation instead.</p> </important>
		 * Get positions/{ResourceIdentifier}#resourceType
		 * @param {string} ResourceIdentifier Resource identifier used to retrieve the position information.
		 * @param {PositionResourceType} resourceType Resource type of the resource for which position information is retrieved.
		 * @return {GetPositionResponse} Success
		 */
		GetPosition(ResourceIdentifier: string, resourceType: PositionResourceType): Observable<GetPositionResponse> {
			return this.http.get<GetPositionResponse>(this.baseUri + 'positions/' + (ResourceIdentifier == null ? '' : encodeURIComponent(ResourceIdentifier)) + '#resourceType&resourceType=' + resourceType, {});
		}

		/**
		 * <p>Update the position information of a resource.</p> <important> <p>This action is no longer supported. Calls to update the position information should use the <a href="https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_UpdateResourcePosition.html">UpdateResourcePosition</a> API operation instead.</p> </important>
		 * Patch positions/{ResourceIdentifier}#resourceType
		 * @param {string} ResourceIdentifier Resource identifier of the resource for which position is updated.
		 * @param {PositionResourceType} resourceType Resource type of the resource for which position is updated.
		 * @return {void} 
		 */
		UpdatePosition(ResourceIdentifier: string, resourceType: PositionResourceType, requestBody: UpdatePositionPatchBody): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'positions/' + (ResourceIdentifier == null ? '' : encodeURIComponent(ResourceIdentifier)) + '#resourceType&resourceType=' + resourceType, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Get position configuration for a given resource.</p> <important> <p>This action is no longer supported. Calls to retrieve the position configuration should use the <a href="https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_GetResourcePosition.html">GetResourcePosition</a> API operation instead.</p> </important>
		 * Get position-configurations/{ResourceIdentifier}#resourceType
		 * @param {string} ResourceIdentifier Resource identifier used in a position configuration.
		 * @param {PositionResourceType} resourceType Resource type of the resource for which position configuration is retrieved.
		 * @return {GetPositionConfigurationResponse} Success
		 */
		GetPositionConfiguration(ResourceIdentifier: string, resourceType: PositionResourceType): Observable<GetPositionConfigurationResponse> {
			return this.http.get<GetPositionConfigurationResponse>(this.baseUri + 'position-configurations/' + (ResourceIdentifier == null ? '' : encodeURIComponent(ResourceIdentifier)) + '#resourceType&resourceType=' + resourceType, {});
		}

		/**
		 * <p>Put position configuration for a given resource.</p> <important> <p>This action is no longer supported. Calls to update the position configuration should use the <a href="https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_UpdateResourcePosition.html">UpdateResourcePosition</a> API operation instead.</p> </important>
		 * Put position-configurations/{ResourceIdentifier}#resourceType
		 * @param {string} ResourceIdentifier Resource identifier used to update the position configuration.
		 * @param {PositionResourceType} resourceType Resource type of the resource for which you want to update the position configuration.
		 * @return {PutPositionConfigurationResponse} Success
		 */
		PutPositionConfiguration(ResourceIdentifier: string, resourceType: PositionResourceType, requestBody: PutPositionConfigurationPutBody): Observable<PutPositionConfigurationResponse> {
			return this.http.put<PutPositionConfigurationResponse>(this.baseUri + 'position-configurations/' + (ResourceIdentifier == null ? '' : encodeURIComponent(ResourceIdentifier)) + '#resourceType&resourceType=' + resourceType, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get estimated position information as a payload in GeoJSON format. The payload measurement data is resolved using solvers that are provided by third-party vendors.
		 * Post position-estimate
		 * @return {GetPositionEstimateResponse} Success
		 */
		GetPositionEstimate(requestBody: GetPositionEstimatePostBody): Observable<GetPositionEstimateResponse> {
			return this.http.post<GetPositionEstimateResponse>(this.baseUri + 'position-estimate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get the event configuration for a particular resource identifier.
		 * Get event-configurations/{Identifier}#identifierType
		 * @param {string} Identifier Resource identifier to opt in for event messaging.
		 *     Max length: 256
		 * @param {IdentifierType} identifierType Identifier type of the particular resource identifier for event configuration.
		 * @param {EventNotificationPartnerType} partnerType Partner type of the resource if the identifier type is <code>PartnerAccountId</code>.
		 * @return {GetResourceEventConfigurationResponse} Success
		 */
		GetResourceEventConfiguration(Identifier: string, identifierType: IdentifierType, partnerType: EventNotificationPartnerType | null | undefined): Observable<GetResourceEventConfigurationResponse> {
			return this.http.get<GetResourceEventConfigurationResponse>(this.baseUri + 'event-configurations/' + (Identifier == null ? '' : encodeURIComponent(Identifier)) + '#identifierType&identifierType=' + identifierType + '&partnerType=' + partnerType, {});
		}

		/**
		 * Update the event configuration for a particular resource identifier.
		 * Patch event-configurations/{Identifier}#identifierType
		 * @param {string} Identifier Resource identifier to opt in for event messaging.
		 *     Max length: 256
		 * @param {IdentifierType} identifierType Identifier type of the particular resource identifier for event configuration.
		 * @param {EventNotificationPartnerType} partnerType Partner type of the resource if the identifier type is <code>PartnerAccountId</code> 
		 * @return {void} 
		 */
		UpdateResourceEventConfiguration(Identifier: string, identifierType: IdentifierType, partnerType: EventNotificationPartnerType | null | undefined, requestBody: UpdateResourceEventConfigurationPatchBody): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'event-configurations/' + (Identifier == null ? '' : encodeURIComponent(Identifier)) + '#identifierType&identifierType=' + identifierType + '&partnerType=' + partnerType, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Fetches the log-level override, if any, for a given resource-ID and resource-type. It can be used for a wireless device or a wireless gateway.
		 * Get log-levels/{ResourceIdentifier}#resourceType
		 * @param {string} ResourceIdentifier Max length: 256
		 * @param {string} resourceType The type of the resource, which can be <code>WirelessDevice</code> or <code>WirelessGateway</code>.
		 * @return {GetResourceLogLevelResponse} Success
		 */
		GetResourceLogLevel(ResourceIdentifier: string, resourceType: string): Observable<GetResourceLogLevelResponse> {
			return this.http.get<GetResourceLogLevelResponse>(this.baseUri + 'log-levels/' + (ResourceIdentifier == null ? '' : encodeURIComponent(ResourceIdentifier)) + '#resourceType&resourceType=' + (resourceType == null ? '' : encodeURIComponent(resourceType)), {});
		}

		/**
		 * Sets the log-level override for a resource-ID and resource-type. This option can be specified for a wireless gateway or a wireless device. A limit of 200 log level override can be set per account.
		 * Put log-levels/{ResourceIdentifier}#resourceType
		 * @param {string} ResourceIdentifier Max length: 256
		 * @param {string} resourceType The type of the resource, which can be <code>WirelessDevice</code> or <code>WirelessGateway</code>.
		 * @return {PutResourceLogLevelResponse} Success
		 */
		PutResourceLogLevel(ResourceIdentifier: string, resourceType: string, requestBody: PutResourceLogLevelPutBody): Observable<PutResourceLogLevelResponse> {
			return this.http.put<PutResourceLogLevelResponse>(this.baseUri + 'log-levels/' + (ResourceIdentifier == null ? '' : encodeURIComponent(ResourceIdentifier)) + '#resourceType&resourceType=' + (resourceType == null ? '' : encodeURIComponent(resourceType)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes the log-level override, if any, for a specific resource-ID and resource-type. It can be used for a wireless device or a wireless gateway.
		 * Delete log-levels/{ResourceIdentifier}#resourceType
		 * @param {string} ResourceIdentifier Max length: 256
		 * @param {string} resourceType The type of the resource, which can be <code>WirelessDevice</code> or <code>WirelessGateway</code>.
		 * @return {void} 
		 */
		ResetResourceLogLevel(ResourceIdentifier: string, resourceType: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'log-levels/' + (ResourceIdentifier == null ? '' : encodeURIComponent(ResourceIdentifier)) + '#resourceType&resourceType=' + (resourceType == null ? '' : encodeURIComponent(resourceType)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get the position information for a given wireless device or a wireless gateway resource. The position information uses the <a href="https://gisgeography.com/wgs84-world-geodetic-system/"> World Geodetic System (WGS84)</a>.
		 * Get resource-positions/{ResourceIdentifier}#resourceType
		 * @param {string} ResourceIdentifier The identifier of the resource for which position information is retrieved. It can be the wireless device ID or the wireless gateway ID, depending on the resource type.
		 * @param {PositionResourceType} resourceType The type of resource for which position information is retrieved, which can be a wireless device or a wireless gateway.
		 * @return {GetResourcePositionResponse} Success
		 */
		GetResourcePosition(ResourceIdentifier: string, resourceType: PositionResourceType): Observable<GetResourcePositionResponse> {
			return this.http.get<GetResourcePositionResponse>(this.baseUri + 'resource-positions/' + (ResourceIdentifier == null ? '' : encodeURIComponent(ResourceIdentifier)) + '#resourceType&resourceType=' + resourceType, {});
		}

		/**
		 * Update the position information of a given wireless device or a wireless gateway resource. The position coordinates are based on the <a href="https://gisgeography.com/wgs84-world-geodetic-system/"> World Geodetic System (WGS84)</a>.
		 * Patch resource-positions/{ResourceIdentifier}#resourceType
		 * @param {string} ResourceIdentifier The identifier of the resource for which position information is updated. It can be the wireless device ID or the wireless gateway ID, depending on the resource type.
		 * @param {PositionResourceType} resourceType The type of resource for which position information is updated, which can be a wireless device or a wireless gateway.
		 * @return {void} 
		 */
		UpdateResourcePosition(ResourceIdentifier: string, resourceType: PositionResourceType, requestBody: UpdateResourcePositionPatchBody): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'resource-positions/' + (ResourceIdentifier == null ? '' : encodeURIComponent(ResourceIdentifier)) + '#resourceType&resourceType=' + resourceType, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the account-specific endpoint for Configuration and Update Server (CUPS) protocol or LoRaWAN Network Server (LNS) connections.
		 * Get service-endpoint
		 * @param {WirelessGatewayServiceType} serviceType The service type for which to get endpoint information about. Can be <code>CUPS</code> for the Configuration and Update Server endpoint, or <code>LNS</code> for the LoRaWAN Network Server endpoint or <code>CLAIM</code> for the global endpoint.
		 * @return {GetServiceEndpointResponse} Success
		 */
		GetServiceEndpoint(serviceType: WirelessGatewayServiceType | null | undefined): Observable<GetServiceEndpointResponse> {
			return this.http.get<GetServiceEndpointResponse>(this.baseUri + 'service-endpoint?serviceType=' + serviceType, {});
		}

		/**
		 * Gets information about a wireless device.
		 * Get wireless-devices/{Identifier}#identifierType
		 * @param {string} Identifier The identifier of the wireless device to get.
		 *     Max length: 256
		 * @param {WirelessDeviceIdType} identifierType The type of identifier used in <code>identifier</code>.
		 * @return {GetWirelessDeviceResponse} Success
		 */
		GetWirelessDevice(Identifier: string, identifierType: WirelessDeviceIdType): Observable<GetWirelessDeviceResponse> {
			return this.http.get<GetWirelessDeviceResponse>(this.baseUri + 'wireless-devices/' + (Identifier == null ? '' : encodeURIComponent(Identifier)) + '#identifierType&identifierType=' + identifierType, {});
		}

		/**
		 * Gets operating information about a wireless device.
		 * Get wireless-devices/{Id}/statistics
		 * @param {string} Id The ID of the wireless device for which to get the data.
		 *     Max length: 256
		 * @return {GetWirelessDeviceStatisticsResponse} Success
		 */
		GetWirelessDeviceStatistics(Id: string): Observable<GetWirelessDeviceStatisticsResponse> {
			return this.http.get<GetWirelessDeviceStatisticsResponse>(this.baseUri + 'wireless-devices/' + (Id == null ? '' : encodeURIComponent(Id)) + '/statistics', {});
		}

		/**
		 * Gets information about a wireless gateway.
		 * Get wireless-gateways/{Identifier}#identifierType
		 * @param {string} Identifier The identifier of the wireless gateway to get.
		 *     Max length: 256
		 * @param {WirelessGatewayIdType} identifierType The type of identifier used in <code>identifier</code>.
		 * @return {GetWirelessGatewayResponse} Success
		 */
		GetWirelessGateway(Identifier: string, identifierType: WirelessGatewayIdType): Observable<GetWirelessGatewayResponse> {
			return this.http.get<GetWirelessGatewayResponse>(this.baseUri + 'wireless-gateways/' + (Identifier == null ? '' : encodeURIComponent(Identifier)) + '#identifierType&identifierType=' + identifierType, {});
		}

		/**
		 * Gets the firmware version and other information about a wireless gateway.
		 * Get wireless-gateways/{Id}/firmware-information
		 * @param {string} Id The ID of the resource to get.
		 *     Max length: 256
		 * @return {GetWirelessGatewayFirmwareInformationResponse} Success
		 */
		GetWirelessGatewayFirmwareInformation(Id: string): Observable<GetWirelessGatewayFirmwareInformationResponse> {
			return this.http.get<GetWirelessGatewayFirmwareInformationResponse>(this.baseUri + 'wireless-gateways/' + (Id == null ? '' : encodeURIComponent(Id)) + '/firmware-information', {});
		}

		/**
		 * Gets operating information about a wireless gateway.
		 * Get wireless-gateways/{Id}/statistics
		 * @param {string} Id The ID of the wireless gateway for which to get the data.
		 *     Max length: 256
		 * @return {GetWirelessGatewayStatisticsResponse} Success
		 */
		GetWirelessGatewayStatistics(Id: string): Observable<GetWirelessGatewayStatisticsResponse> {
			return this.http.get<GetWirelessGatewayStatisticsResponse>(this.baseUri + 'wireless-gateways/' + (Id == null ? '' : encodeURIComponent(Id)) + '/statistics', {});
		}

		/**
		 * List the Sidewalk devices in an import task and their onboarding status.
		 * Get wireless_device_import_task#id
		 * @param {string} id The identifier of the import task for which wireless devices are listed.
		 *     Max length: 256
		 * @param {number} maxResults Minimum: 0
		 *     Maximum: 250
		 * @param {string} nextToken To retrieve the next set of results, the <code>nextToken</code> value from a previous response; otherwise <code>null</code> to receive the first set of results.
		 *     Max length: 4096
		 * @param {OnboardStatus} status The status of the devices in the import task.
		 * @return {ListDevicesForWirelessDeviceImportTaskResponse} Success
		 */
		ListDevicesForWirelessDeviceImportTask(id: string, maxResults: number | null | undefined, nextToken: string | null | undefined, status: OnboardStatus | null | undefined): Observable<ListDevicesForWirelessDeviceImportTaskResponse> {
			return this.http.get<ListDevicesForWirelessDeviceImportTaskResponse>(this.baseUri + 'wireless_device_import_task#id?id=' + (id == null ? '' : encodeURIComponent(id)) + '&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&status=' + status, {});
		}

		/**
		 * List event configurations where at least one event topic has been enabled.
		 * Get event-configurations#resourceType
		 * @param {EventNotificationResourceType} resourceType Resource type to filter event configurations.
		 * @param {number} maxResults Minimum: 0
		 *     Maximum: 250
		 * @param {string} nextToken To retrieve the next set of results, the <code>nextToken</code> value from a previous response; otherwise <b>null</b> to receive the first set of results.
		 *     Max length: 4096
		 * @return {ListEventConfigurationsResponse} Success
		 */
		ListEventConfigurations(resourceType: EventNotificationResourceType, maxResults: number | null | undefined, nextToken: string | null | undefined): Observable<ListEventConfigurationsResponse> {
			return this.http.get<ListEventConfigurationsResponse>(this.baseUri + 'event-configurations#resourceType?resourceType=' + resourceType + '&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
		}

		/**
		 * List all multicast groups associated with a fuota task.
		 * Get fuota-tasks/{Id}/multicast-groups
		 * @param {string} Id Max length: 256
		 * @param {string} nextToken To retrieve the next set of results, the <code>nextToken</code> value from a previous response; otherwise <b>null</b> to receive the first set of results.
		 *     Max length: 4096
		 * @param {number} maxResults Minimum: 0
		 *     Maximum: 250
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListMulticastGroupsByFuotaTaskResponse} Success
		 */
		ListMulticastGroupsByFuotaTask(Id: string, nextToken: string | null | undefined, maxResults: number | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListMulticastGroupsByFuotaTaskResponse> {
			return this.http.get<ListMulticastGroupsByFuotaTaskResponse>(this.baseUri + 'fuota-tasks/' + (Id == null ? '' : encodeURIComponent(Id)) + '/multicast-groups&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * <p>List position configurations for a given resource, such as positioning solvers.</p> <important> <p>This action is no longer supported. Calls to retrieve position information should use the <a href="https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_GetResourcePosition.html">GetResourcePosition</a> API operation instead.</p> </important>
		 * Get position-configurations
		 * @param {PositionResourceType} resourceType Resource type for which position configurations are listed.
		 * @param {number} maxResults Minimum: 0
		 *     Maximum: 250
		 * @param {string} nextToken To retrieve the next set of results, the <code>nextToken</code> value from a previous response; otherwise <b>null</b> to receive the first set of results.
		 *     Max length: 4096
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListPositionConfigurationsResponse} Success
		 */
		ListPositionConfigurations(resourceType: PositionResourceType | null | undefined, maxResults: number | null | undefined, nextToken: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListPositionConfigurationsResponse> {
			return this.http.get<ListPositionConfigurationsResponse>(this.baseUri + 'position-configurations?resourceType=' + resourceType + '&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * List queued messages in the downlink queue.
		 * Get wireless-devices/{Id}/data
		 * @param {string} Id The ID of a given wireless device which the downlink message packets are being sent.
		 *     Max length: 256
		 * @param {string} nextToken To retrieve the next set of results, the <code>nextToken</code> value from a previous response; otherwise <b>null</b> to receive the first set of results.
		 *     Max length: 4096
		 * @param {number} maxResults The maximum number of results to return in this operation.
		 *     Minimum: 0    Maximum: 250
		 * @param {WirelessDeviceType} WirelessDeviceType The wireless device type, whic can be either Sidewalk or LoRaWAN.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListQueuedMessagesResponse} Success
		 */
		ListQueuedMessages(Id: string, nextToken: string | null | undefined, maxResults: number | null | undefined, WirelessDeviceType: WirelessDeviceType | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListQueuedMessagesResponse> {
			return this.http.get<ListQueuedMessagesResponse>(this.baseUri + 'wireless-devices/' + (Id == null ? '' : encodeURIComponent(Id)) + '/data&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults + '&WirelessDeviceType=' + WirelessDeviceType + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Sends a decrypted application data frame to a device.
		 * Post wireless-devices/{Id}/data
		 * @param {string} Id The ID of the wireless device to receive the data.
		 *     Max length: 256
		 * @return {void} 
		 */
		SendDataToWirelessDevice(Id: string, requestBody: SendDataToWirelessDevicePostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'wireless-devices/' + (Id == null ? '' : encodeURIComponent(Id)) + '/data', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists the tags (metadata) you have assigned to the resource.
		 * Get tags#resourceArn
		 * @param {string} resourceArn The ARN of the resource for which you want to list tags.
		 *     Min length: 1    Max length: 1011
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(resourceArn: string): Observable<ListTagsForResourceResponse> {
			return this.http.get<ListTagsForResourceResponse>(this.baseUri + 'tags#resourceArn?resourceArn=' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), {});
		}

		/**
		 * Adds a tag to a resource.
		 * Post tags#resourceArn
		 * @param {string} resourceArn The ARN of the resource to add tags to.
		 *     Min length: 1    Max length: 1011
		 * @return {void} 
		 */
		TagResource(resourceArn: string, requestBody: TagResourcePostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'tags#resourceArn?resourceArn=' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * List wireless devices that have been added to an import task.
		 * Get wireless_device_import_tasks
		 * @param {number} maxResults Minimum: 0
		 *     Maximum: 250
		 * @param {string} nextToken To retrieve the next set of results, the <code>nextToken</code> value from a previous response; otherwise <code>null</code> to receive the first set of results.
		 *     Max length: 4096
		 * @return {ListWirelessDeviceImportTasksResponse} Success
		 */
		ListWirelessDeviceImportTasks(maxResults: number | null | undefined, nextToken: string | null | undefined): Observable<ListWirelessDeviceImportTasksResponse> {
			return this.http.get<ListWirelessDeviceImportTasksResponse>(this.baseUri + 'wireless_device_import_tasks?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
		}

		/**
		 * Sends the specified data to a multicast group.
		 * Post multicast-groups/{Id}/data
		 * @param {string} Id Max length: 256
		 * @return {void} 
		 */
		SendDataToMulticastGroup(Id: string, requestBody: SendDataToMulticastGroupPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'multicast-groups/' + (Id == null ? '' : encodeURIComponent(Id)) + '/data', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Starts a bulk association of all qualifying wireless devices with a multicast group.
		 * Patch multicast-groups/{Id}/bulk
		 * @param {string} Id Max length: 256
		 * @return {void} 
		 */
		StartBulkAssociateWirelessDeviceWithMulticastGroup(Id: string, requestBody: StartBulkAssociateWirelessDeviceWithMulticastGroupPatchBody): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'multicast-groups/' + (Id == null ? '' : encodeURIComponent(Id)) + '/bulk', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Starts a bulk disassociatin of all qualifying wireless devices from a multicast group.
		 * Post multicast-groups/{Id}/bulk
		 * @param {string} Id Max length: 256
		 * @return {void} 
		 */
		StartBulkDisassociateWirelessDeviceFromMulticastGroup(Id: string, requestBody: StartBulkDisassociateWirelessDeviceFromMulticastGroupPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'multicast-groups/' + (Id == null ? '' : encodeURIComponent(Id)) + '/bulk', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Start import task for a single wireless device.
		 * Post wireless_single_device_import_task
		 * @return {void} 
		 */
		StartSingleWirelessDeviceImportTask(requestBody: StartSingleWirelessDeviceImportTaskPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'wireless_single_device_import_task', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Start import task for provisioning Sidewalk devices in bulk using an S3 CSV file.
		 * Post wireless_device_import_task
		 * @return {void} 
		 */
		StartWirelessDeviceImportTask(requestBody: StartWirelessDeviceImportTaskPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'wireless_device_import_task', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Simulates a provisioned device by sending an uplink data payload of <code>Hello</code>.
		 * Post wireless-devices/{Id}/test
		 * @param {string} Id The ID of the wireless device to test.
		 *     Max length: 256
		 * @return {TestWirelessDeviceResponse} Success
		 */
		TestWirelessDevice(Id: string): Observable<TestWirelessDeviceResponse> {
			return this.http.post<TestWirelessDeviceResponse>(this.baseUri + 'wireless-devices/' + (Id == null ? '' : encodeURIComponent(Id)) + '/test', null, {});
		}

		/**
		 * Removes one or more tags from a resource.
		 * Delete tags#resourceArn&tagKeys
		 * @param {string} resourceArn The ARN of the resource to remove tags from.
		 *     Min length: 1    Max length: 1011
		 * @param {Array<string>} tagKeys A list of the keys of the tags to remove from the resource.
		 *     Minimum items: 0    Maximum items: 200
		 * @return {void} 
		 */
		UntagResource(resourceArn: string, tagKeys: Array<string>): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'tags#resourceArn&tagKeys?resourceArn=' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)) + '&' + tagKeys.map(z => `tagKeys=${encodeURIComponent(z)}`).join('&'), { observe: 'response', responseType: 'text' });
		}
	}

	export interface AssociateAwsAccountWithPartnerAccountPostBody {

		/**
		 * Information about a Sidewalk account.
		 * Required
		 */
		Sidewalk: AssociateAwsAccountWithPartnerAccountPostBodySidewalk;

		/**
		 * Each resource must have a unique client request token. If you try to create a new resource with the same token as a resource that already exists, an exception occurs. If you omit this value, AWS SDKs will automatically generate a unique client request.
		 * Min length: 1
		 * Max length: 64
		 */
		ClientRequestToken?: string | null;

		/**
		 * The tag to attach to the specified resource. Tags are metadata that you can use to manage a resource.
		 * Minimum items: 0
		 * Maximum items: 200
		 */
		Tags?: Array<Tag>;
	}
	export interface AssociateAwsAccountWithPartnerAccountPostBodyFormProperties {

		/**
		 * Each resource must have a unique client request token. If you try to create a new resource with the same token as a resource that already exists, an exception occurs. If you omit this value, AWS SDKs will automatically generate a unique client request.
		 * Min length: 1
		 * Max length: 64
		 */
		ClientRequestToken: FormControl<string | null | undefined>,
	}
	export function CreateAssociateAwsAccountWithPartnerAccountPostBodyFormGroup() {
		return new FormGroup<AssociateAwsAccountWithPartnerAccountPostBodyFormProperties>({
			ClientRequestToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64), Validators.pattern('^[a-zA-Z0-9-_]+$')]),
		});

	}

	export interface AssociateAwsAccountWithPartnerAccountPostBodySidewalk {
		AmazonId?: string;
		AppServerPrivateKey?: string;
	}
	export interface AssociateAwsAccountWithPartnerAccountPostBodySidewalkFormProperties {
		AmazonId: FormControl<string | null | undefined>,
		AppServerPrivateKey: FormControl<string | null | undefined>,
	}
	export function CreateAssociateAwsAccountWithPartnerAccountPostBodySidewalkFormGroup() {
		return new FormGroup<AssociateAwsAccountWithPartnerAccountPostBodySidewalkFormProperties>({
			AmazonId: new FormControl<string | null | undefined>(undefined),
			AppServerPrivateKey: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AssociateMulticastGroupWithFuotaTaskPutBody {

		/**
		 * The ID of the multicast group.
		 * Required
		 * Max length: 256
		 */
		MulticastGroupId: string;
	}
	export interface AssociateMulticastGroupWithFuotaTaskPutBodyFormProperties {

		/**
		 * The ID of the multicast group.
		 * Required
		 * Max length: 256
		 */
		MulticastGroupId: FormControl<string | null | undefined>,
	}
	export function CreateAssociateMulticastGroupWithFuotaTaskPutBodyFormGroup() {
		return new FormGroup<AssociateMulticastGroupWithFuotaTaskPutBodyFormProperties>({
			MulticastGroupId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256)]),
		});

	}

	export interface AssociateWirelessDeviceWithFuotaTaskPutBody {

		/**
		 * The ID of the wireless device.
		 * Required
		 * Max length: 256
		 */
		WirelessDeviceId: string;
	}
	export interface AssociateWirelessDeviceWithFuotaTaskPutBodyFormProperties {

		/**
		 * The ID of the wireless device.
		 * Required
		 * Max length: 256
		 */
		WirelessDeviceId: FormControl<string | null | undefined>,
	}
	export function CreateAssociateWirelessDeviceWithFuotaTaskPutBodyFormGroup() {
		return new FormGroup<AssociateWirelessDeviceWithFuotaTaskPutBodyFormProperties>({
			WirelessDeviceId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256)]),
		});

	}

	export interface AssociateWirelessDeviceWithMulticastGroupPutBody {

		/**
		 * The ID of the wireless device.
		 * Required
		 * Max length: 256
		 */
		WirelessDeviceId: string;
	}
	export interface AssociateWirelessDeviceWithMulticastGroupPutBodyFormProperties {

		/**
		 * The ID of the wireless device.
		 * Required
		 * Max length: 256
		 */
		WirelessDeviceId: FormControl<string | null | undefined>,
	}
	export function CreateAssociateWirelessDeviceWithMulticastGroupPutBodyFormGroup() {
		return new FormGroup<AssociateWirelessDeviceWithMulticastGroupPutBodyFormProperties>({
			WirelessDeviceId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256)]),
		});

	}

	export interface AssociateWirelessDeviceWithThingPutBody {

		/**
		 * The ARN of the thing to associate with the wireless device.
		 * Required
		 */
		ThingArn: string;
	}
	export interface AssociateWirelessDeviceWithThingPutBodyFormProperties {

		/**
		 * The ARN of the thing to associate with the wireless device.
		 * Required
		 */
		ThingArn: FormControl<string | null | undefined>,
	}
	export function CreateAssociateWirelessDeviceWithThingPutBodyFormGroup() {
		return new FormGroup<AssociateWirelessDeviceWithThingPutBodyFormProperties>({
			ThingArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AssociateWirelessGatewayWithCertificatePutBody {

		/**
		 * The ID of the certificate to associate with the wireless gateway.
		 * Required
		 * Min length: 1
		 * Max length: 4096
		 */
		IotCertificateId: string;
	}
	export interface AssociateWirelessGatewayWithCertificatePutBodyFormProperties {

		/**
		 * The ID of the certificate to associate with the wireless gateway.
		 * Required
		 * Min length: 1
		 * Max length: 4096
		 */
		IotCertificateId: FormControl<string | null | undefined>,
	}
	export function CreateAssociateWirelessGatewayWithCertificatePutBodyFormGroup() {
		return new FormGroup<AssociateWirelessGatewayWithCertificatePutBodyFormProperties>({
			IotCertificateId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(4096)]),
		});

	}

	export interface AssociateWirelessGatewayWithThingPutBody {

		/**
		 * The ARN of the thing to associate with the wireless gateway.
		 * Required
		 */
		ThingArn: string;
	}
	export interface AssociateWirelessGatewayWithThingPutBodyFormProperties {

		/**
		 * The ARN of the thing to associate with the wireless gateway.
		 * Required
		 */
		ThingArn: FormControl<string | null | undefined>,
	}
	export function CreateAssociateWirelessGatewayWithThingPutBodyFormGroup() {
		return new FormGroup<AssociateWirelessGatewayWithThingPutBodyFormProperties>({
			ThingArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface StartMulticastGroupSessionPutBody {

		/**
		 * The LoRaWAN information used with the multicast session.
		 * Required
		 */
		LoRaWAN: StartMulticastGroupSessionPutBodyLoRaWAN;
	}
	export interface StartMulticastGroupSessionPutBodyFormProperties {
	}
	export function CreateStartMulticastGroupSessionPutBodyFormGroup() {
		return new FormGroup<StartMulticastGroupSessionPutBodyFormProperties>({
		});

	}

	export interface StartMulticastGroupSessionPutBodyLoRaWAN {

		/**
		 * Downlink data rate.
		 * Minimum: 0
		 * Maximum: 15
		 */
		DlDr?: number | null;

		/**
		 * Downlink frequency.
		 * Minimum: 100000000
		 * Maximum: 1000000000
		 */
		DlFreq?: number | null;

		/** Timestamp of when the multicast group session is to start. */
		SessionStartTime?: Date | null;

		/**
		 * How long before a multicast group session is to timeout.
		 * Minimum: 60
		 * Maximum: 172800
		 */
		SessionTimeout?: number | null;
		PingSlotPeriod?: number | null;
	}
	export interface StartMulticastGroupSessionPutBodyLoRaWANFormProperties {

		/**
		 * Downlink data rate.
		 * Minimum: 0
		 * Maximum: 15
		 */
		DlDr: FormControl<number | null | undefined>,

		/**
		 * Downlink frequency.
		 * Minimum: 100000000
		 * Maximum: 1000000000
		 */
		DlFreq: FormControl<number | null | undefined>,

		/** Timestamp of when the multicast group session is to start. */
		SessionStartTime: FormControl<Date | null | undefined>,

		/**
		 * How long before a multicast group session is to timeout.
		 * Minimum: 60
		 * Maximum: 172800
		 */
		SessionTimeout: FormControl<number | null | undefined>,
		PingSlotPeriod: FormControl<number | null | undefined>,
	}
	export function CreateStartMulticastGroupSessionPutBodyLoRaWANFormGroup() {
		return new FormGroup<StartMulticastGroupSessionPutBodyLoRaWANFormProperties>({
			DlDr: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(15)]),
			DlFreq: new FormControl<number | null | undefined>(undefined, [Validators.min(100000000), Validators.max(1000000000)]),
			SessionStartTime: new FormControl<Date | null | undefined>(undefined),
			SessionTimeout: new FormControl<number | null | undefined>(undefined, [Validators.min(60), Validators.max(172800)]),
			PingSlotPeriod: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CreateDestinationPostBody {

		/**
		 * The name of the new resource.
		 * Required
		 * Max length: 128
		 */
		Name: string;

		/**
		 * The type of value in <code>Expression</code>.
		 * Required
		 */
		ExpressionType: ExpressionType;

		/**
		 * The rule name or topic rule to send messages to.
		 * Required
		 * Max length: 2048
		 */
		Expression: string;

		/**
		 * The description of the new resource.
		 * Max length: 2048
		 */
		Description?: string | null;

		/**
		 * The ARN of the IAM Role that authorizes the destination.
		 * Required
		 * Min length: 20
		 * Max length: 2048
		 */
		RoleArn: string;

		/**
		 * The tag to attach to the specified resource. Tags are metadata that you can use to manage a resource.
		 * Minimum items: 0
		 * Maximum items: 200
		 */
		Tags?: Array<Tag>;

		/**
		 * Each resource must have a unique client request token. If you try to create a new resource with the same token as a resource that already exists, an exception occurs. If you omit this value, AWS SDKs will automatically generate a unique client request.
		 * Min length: 1
		 * Max length: 64
		 */
		ClientRequestToken?: string | null;
	}
	export interface CreateDestinationPostBodyFormProperties {

		/**
		 * The name of the new resource.
		 * Required
		 * Max length: 128
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * The type of value in <code>Expression</code>.
		 * Required
		 */
		ExpressionType: FormControl<ExpressionType | null | undefined>,

		/**
		 * The rule name or topic rule to send messages to.
		 * Required
		 * Max length: 2048
		 */
		Expression: FormControl<string | null | undefined>,

		/**
		 * The description of the new resource.
		 * Max length: 2048
		 */
		Description: FormControl<string | null | undefined>,

		/**
		 * The ARN of the IAM Role that authorizes the destination.
		 * Required
		 * Min length: 20
		 * Max length: 2048
		 */
		RoleArn: FormControl<string | null | undefined>,

		/**
		 * Each resource must have a unique client request token. If you try to create a new resource with the same token as a resource that already exists, an exception occurs. If you omit this value, AWS SDKs will automatically generate a unique client request.
		 * Min length: 1
		 * Max length: 64
		 */
		ClientRequestToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateDestinationPostBodyFormGroup() {
		return new FormGroup<CreateDestinationPostBodyFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.pattern('[a-zA-Z0-9-_]+')]),
			ExpressionType: new FormControl<ExpressionType | null | undefined>(undefined, [Validators.required]),
			Expression: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(2048)]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048)]),
			RoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(20), Validators.maxLength(2048)]),
			ClientRequestToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64), Validators.pattern('^[a-zA-Z0-9-_]+$')]),
		});

	}

	export interface CreateDeviceProfilePostBody {

		/**
		 * The name of the new resource.
		 * Max length: 256
		 */
		Name?: string | null;

		/** LoRaWANDeviceProfile object. */
		LoRaWAN?: CreateDeviceProfilePostBodyLoRaWAN;

		/**
		 * The tag to attach to the specified resource. Tags are metadata that you can use to manage a resource.
		 * Minimum items: 0
		 * Maximum items: 200
		 */
		Tags?: Array<Tag>;

		/**
		 * Each resource must have a unique client request token. If you try to create a new resource with the same token as a resource that already exists, an exception occurs. If you omit this value, AWS SDKs will automatically generate a unique client request.
		 * Min length: 1
		 * Max length: 64
		 */
		ClientRequestToken?: string | null;

		/** Sidewalk object for creating a device profile. */
		Sidewalk?: string | null;
	}
	export interface CreateDeviceProfilePostBodyFormProperties {

		/**
		 * The name of the new resource.
		 * Max length: 256
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * Each resource must have a unique client request token. If you try to create a new resource with the same token as a resource that already exists, an exception occurs. If you omit this value, AWS SDKs will automatically generate a unique client request.
		 * Min length: 1
		 * Max length: 64
		 */
		ClientRequestToken: FormControl<string | null | undefined>,

		/** Sidewalk object for creating a device profile. */
		Sidewalk: FormControl<string | null | undefined>,
	}
	export function CreateCreateDeviceProfilePostBodyFormGroup() {
		return new FormGroup<CreateDeviceProfilePostBodyFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256)]),
			ClientRequestToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64), Validators.pattern('^[a-zA-Z0-9-_]+$')]),
			Sidewalk: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateDeviceProfilePostBodyLoRaWAN {
		SupportsClassB?: boolean | null;
		ClassBTimeout?: number | null;
		PingSlotPeriod?: number | null;
		PingSlotDr?: number | null;
		PingSlotFreq?: number | null;
		SupportsClassC?: boolean | null;
		ClassCTimeout?: number | null;
		MacVersion?: string;
		RegParamsRevision?: string;
		RxDelay1?: number | null;
		RxDrOffset1?: number | null;
		RxDataRate2?: number | null;
		RxFreq2?: number | null;
		FactoryPresetFreqsList?: Array<number> | null;
		MaxEirp?: number | null;
		MaxDutyCycle?: number | null;
		RfRegion?: string;
		SupportsJoin?: boolean | null;
		Supports32BitFCnt?: boolean | null;
	}
	export interface CreateDeviceProfilePostBodyLoRaWANFormProperties {
		SupportsClassB: FormControl<boolean | null | undefined>,
		ClassBTimeout: FormControl<number | null | undefined>,
		PingSlotPeriod: FormControl<number | null | undefined>,
		PingSlotDr: FormControl<number | null | undefined>,
		PingSlotFreq: FormControl<number | null | undefined>,
		SupportsClassC: FormControl<boolean | null | undefined>,
		ClassCTimeout: FormControl<number | null | undefined>,
		MacVersion: FormControl<string | null | undefined>,
		RegParamsRevision: FormControl<string | null | undefined>,
		RxDelay1: FormControl<number | null | undefined>,
		RxDrOffset1: FormControl<number | null | undefined>,
		RxDataRate2: FormControl<number | null | undefined>,
		RxFreq2: FormControl<number | null | undefined>,
		MaxEirp: FormControl<number | null | undefined>,
		MaxDutyCycle: FormControl<number | null | undefined>,
		RfRegion: FormControl<string | null | undefined>,
		SupportsJoin: FormControl<boolean | null | undefined>,
		Supports32BitFCnt: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateDeviceProfilePostBodyLoRaWANFormGroup() {
		return new FormGroup<CreateDeviceProfilePostBodyLoRaWANFormProperties>({
			SupportsClassB: new FormControl<boolean | null | undefined>(undefined),
			ClassBTimeout: new FormControl<number | null | undefined>(undefined),
			PingSlotPeriod: new FormControl<number | null | undefined>(undefined),
			PingSlotDr: new FormControl<number | null | undefined>(undefined),
			PingSlotFreq: new FormControl<number | null | undefined>(undefined),
			SupportsClassC: new FormControl<boolean | null | undefined>(undefined),
			ClassCTimeout: new FormControl<number | null | undefined>(undefined),
			MacVersion: new FormControl<string | null | undefined>(undefined),
			RegParamsRevision: new FormControl<string | null | undefined>(undefined),
			RxDelay1: new FormControl<number | null | undefined>(undefined),
			RxDrOffset1: new FormControl<number | null | undefined>(undefined),
			RxDataRate2: new FormControl<number | null | undefined>(undefined),
			RxFreq2: new FormControl<number | null | undefined>(undefined),
			MaxEirp: new FormControl<number | null | undefined>(undefined),
			MaxDutyCycle: new FormControl<number | null | undefined>(undefined),
			RfRegion: new FormControl<string | null | undefined>(undefined),
			SupportsJoin: new FormControl<boolean | null | undefined>(undefined),
			Supports32BitFCnt: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface CreateFuotaTaskPostBody {

		/**
		 * The name of a FUOTA task.
		 * Max length: 256
		 */
		Name?: string | null;

		/**
		 * The description of the new resource.
		 * Max length: 2048
		 */
		Description?: string | null;

		/**
		 * Each resource must have a unique client request token. If you try to create a new resource with the same token as a resource that already exists, an exception occurs. If you omit this value, AWS SDKs will automatically generate a unique client request.
		 * Min length: 1
		 * Max length: 64
		 */
		ClientRequestToken?: string | null;

		/** The LoRaWAN information used with a FUOTA task. */
		LoRaWAN?: CreateFuotaTaskPostBodyLoRaWAN;

		/**
		 * The S3 URI points to a firmware update image that is to be used with a FUOTA task.
		 * Required
		 * Min length: 1
		 * Max length: 4096
		 */
		FirmwareUpdateImage: string;

		/**
		 * The firmware update role that is to be used with a FUOTA task.
		 * Required
		 * Min length: 1
		 * Max length: 2048
		 */
		FirmwareUpdateRole: string;

		/**
		 * The tag to attach to the specified resource. Tags are metadata that you can use to manage a resource.
		 * Minimum items: 0
		 * Maximum items: 200
		 */
		Tags?: Array<Tag>;

		/**
		 * The percentage of the added fragments that are redundant. For example, if the size of the firmware image file is 100 bytes and the fragment size is 10 bytes, with <code>RedundancyPercent</code> set to 50(%), the final number of encoded fragments is (100 / 10) + (100 / 10 * 50%) = 15.
		 * Minimum: 0
		 * Maximum: 100
		 */
		RedundancyPercent?: number | null;

		/**
		 * The size of each fragment in bytes. This parameter is supported only for FUOTA tasks with multicast groups.
		 * Minimum: 1
		 */
		FragmentSizeBytes?: number | null;

		/**
		 * <p>The interval for sending fragments in milliseconds, rounded to the nearest second.</p> <note> <p>This interval only determines the timing for when the Cloud sends down the fragments to yor device. There can be a delay for when your device will receive these fragments. This delay depends on the device's class and the communication delay with the cloud.</p> </note>
		 * Minimum: 1
		 */
		FragmentIntervalMS?: number | null;
	}
	export interface CreateFuotaTaskPostBodyFormProperties {

		/**
		 * The name of a FUOTA task.
		 * Max length: 256
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * The description of the new resource.
		 * Max length: 2048
		 */
		Description: FormControl<string | null | undefined>,

		/**
		 * Each resource must have a unique client request token. If you try to create a new resource with the same token as a resource that already exists, an exception occurs. If you omit this value, AWS SDKs will automatically generate a unique client request.
		 * Min length: 1
		 * Max length: 64
		 */
		ClientRequestToken: FormControl<string | null | undefined>,

		/**
		 * The S3 URI points to a firmware update image that is to be used with a FUOTA task.
		 * Required
		 * Min length: 1
		 * Max length: 4096
		 */
		FirmwareUpdateImage: FormControl<string | null | undefined>,

		/**
		 * The firmware update role that is to be used with a FUOTA task.
		 * Required
		 * Min length: 1
		 * Max length: 2048
		 */
		FirmwareUpdateRole: FormControl<string | null | undefined>,

		/**
		 * The percentage of the added fragments that are redundant. For example, if the size of the firmware image file is 100 bytes and the fragment size is 10 bytes, with <code>RedundancyPercent</code> set to 50(%), the final number of encoded fragments is (100 / 10) + (100 / 10 * 50%) = 15.
		 * Minimum: 0
		 * Maximum: 100
		 */
		RedundancyPercent: FormControl<number | null | undefined>,

		/**
		 * The size of each fragment in bytes. This parameter is supported only for FUOTA tasks with multicast groups.
		 * Minimum: 1
		 */
		FragmentSizeBytes: FormControl<number | null | undefined>,

		/**
		 * <p>The interval for sending fragments in milliseconds, rounded to the nearest second.</p> <note> <p>This interval only determines the timing for when the Cloud sends down the fragments to yor device. There can be a delay for when your device will receive these fragments. This delay depends on the device's class and the communication delay with the cloud.</p> </note>
		 * Minimum: 1
		 */
		FragmentIntervalMS: FormControl<number | null | undefined>,
	}
	export function CreateCreateFuotaTaskPostBodyFormGroup() {
		return new FormGroup<CreateFuotaTaskPostBodyFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256)]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048)]),
			ClientRequestToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64), Validators.pattern('^[a-zA-Z0-9-_]+$')]),
			FirmwareUpdateImage: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(4096)]),
			FirmwareUpdateRole: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(2048)]),
			RedundancyPercent: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(100)]),
			FragmentSizeBytes: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			FragmentIntervalMS: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
		});

	}

	export interface CreateFuotaTaskPostBodyLoRaWAN {

		/** Supported RfRegions */
		RfRegion?: SupportedRfRegion | null;
	}
	export interface CreateFuotaTaskPostBodyLoRaWANFormProperties {

		/** Supported RfRegions */
		RfRegion: FormControl<SupportedRfRegion | null | undefined>,
	}
	export function CreateCreateFuotaTaskPostBodyLoRaWANFormGroup() {
		return new FormGroup<CreateFuotaTaskPostBodyLoRaWANFormProperties>({
			RfRegion: new FormControl<SupportedRfRegion | null | undefined>(undefined),
		});

	}

	export interface CreateMulticastGroupPostBody {

		/**
		 * The name of the multicast group.
		 * Max length: 256
		 */
		Name?: string | null;

		/**
		 * The description of the new resource.
		 * Max length: 2048
		 */
		Description?: string | null;

		/**
		 * Each resource must have a unique client request token. If you try to create a new resource with the same token as a resource that already exists, an exception occurs. If you omit this value, AWS SDKs will automatically generate a unique client request.
		 * Min length: 1
		 * Max length: 64
		 */
		ClientRequestToken?: string | null;

		/**
		 * The LoRaWAN information that is to be used with the multicast group.
		 * Required
		 */
		LoRaWAN: CreateMulticastGroupPostBodyLoRaWAN;

		/**
		 * The tag to attach to the specified resource. Tags are metadata that you can use to manage a resource.
		 * Minimum items: 0
		 * Maximum items: 200
		 */
		Tags?: Array<Tag>;
	}
	export interface CreateMulticastGroupPostBodyFormProperties {

		/**
		 * The name of the multicast group.
		 * Max length: 256
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * The description of the new resource.
		 * Max length: 2048
		 */
		Description: FormControl<string | null | undefined>,

		/**
		 * Each resource must have a unique client request token. If you try to create a new resource with the same token as a resource that already exists, an exception occurs. If you omit this value, AWS SDKs will automatically generate a unique client request.
		 * Min length: 1
		 * Max length: 64
		 */
		ClientRequestToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateMulticastGroupPostBodyFormGroup() {
		return new FormGroup<CreateMulticastGroupPostBodyFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256)]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048)]),
			ClientRequestToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64), Validators.pattern('^[a-zA-Z0-9-_]+$')]),
		});

	}

	export interface CreateMulticastGroupPostBodyLoRaWAN {

		/** Supported RfRegions */
		RfRegion?: SupportedRfRegion | null;

		/**
		 * DlClass for LoRaWAM, valid values are ClassB and ClassC.
		 * Max length: 256
		 */
		DlClass?: DlClass | null;
	}
	export interface CreateMulticastGroupPostBodyLoRaWANFormProperties {

		/** Supported RfRegions */
		RfRegion: FormControl<SupportedRfRegion | null | undefined>,

		/**
		 * DlClass for LoRaWAM, valid values are ClassB and ClassC.
		 * Max length: 256
		 */
		DlClass: FormControl<DlClass | null | undefined>,
	}
	export function CreateCreateMulticastGroupPostBodyLoRaWANFormGroup() {
		return new FormGroup<CreateMulticastGroupPostBodyLoRaWANFormProperties>({
			RfRegion: new FormControl<SupportedRfRegion | null | undefined>(undefined),
			DlClass: new FormControl<DlClass | null | undefined>(undefined, [Validators.maxLength(256)]),
		});

	}

	export interface CreateNetworkAnalyzerConfigurationPostBody {

		/**
		 * Name of the network analyzer configuration.
		 * Required
		 * Min length: 1
		 * Max length: 1024
		 */
		Name: string;

		/** Trace content for your wireless gateway and wireless device resources. */
		TraceContent?: CreateNetworkAnalyzerConfigurationPostBodyTraceContent;

		/**
		 * Wireless device resources to add to the network analyzer configuration. Provide the <code>WirelessDeviceId</code> of the resource to add in the input array.
		 * Minimum items: 0
		 * Maximum items: 250
		 */
		WirelessDevices?: Array<string>;

		/** Wireless gateway resources to add to the network analyzer configuration. Provide the <code>WirelessGatewayId</code> of the resource to add in the input array. */
		WirelessGateways?: Array<string>;

		/**
		 * The description of the new resource.
		 * Max length: 2048
		 */
		Description?: string | null;

		/**
		 * The tag to attach to the specified resource. Tags are metadata that you can use to manage a resource.
		 * Minimum items: 0
		 * Maximum items: 200
		 */
		Tags?: Array<Tag>;

		/**
		 * Each resource must have a unique client request token. If you try to create a new resource with the same token as a resource that already exists, an exception occurs. If you omit this value, AWS SDKs will automatically generate a unique client request.
		 * Min length: 1
		 * Max length: 64
		 */
		ClientRequestToken?: string | null;

		/**
		 * Multicast Group resources to add to the network analyzer configruation. Provide the <code>MulticastGroupId</code> of the resource to add in the input array.
		 * Minimum items: 0
		 * Maximum items: 10
		 */
		MulticastGroups?: Array<string>;
	}
	export interface CreateNetworkAnalyzerConfigurationPostBodyFormProperties {

		/**
		 * Name of the network analyzer configuration.
		 * Required
		 * Min length: 1
		 * Max length: 1024
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * The description of the new resource.
		 * Max length: 2048
		 */
		Description: FormControl<string | null | undefined>,

		/**
		 * Each resource must have a unique client request token. If you try to create a new resource with the same token as a resource that already exists, an exception occurs. If you omit this value, AWS SDKs will automatically generate a unique client request.
		 * Min length: 1
		 * Max length: 64
		 */
		ClientRequestToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateNetworkAnalyzerConfigurationPostBodyFormGroup() {
		return new FormGroup<CreateNetworkAnalyzerConfigurationPostBodyFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1024), Validators.pattern('[a-zA-Z0-9-_]+')]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048)]),
			ClientRequestToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64), Validators.pattern('^[a-zA-Z0-9-_]+$')]),
		});

	}

	export interface CreateNetworkAnalyzerConfigurationPostBodyTraceContent {

		/** <code>FrameInfo</code> of your wireless device resources for the trace content. Use FrameInfo to debug the communication between your LoRaWAN end devices and the network server. */
		WirelessDeviceFrameInfo?: WirelessDeviceFrameInfo | null;

		/** The log level for a log message. The log levels can be disabled, or set to <code>ERROR</code> to display less verbose logs containing only error information, or to <code>INFO</code> for more detailed logs. */
		LogLevel?: LogLevel | null;

		/** <code>FrameInfo</code> of your multicast group resources for the trace content. Use FrameInfo to debug the multicast communication between your LoRaWAN end devices and the network server. */
		MulticastFrameInfo?: WirelessDeviceFrameInfo | null;
	}
	export interface CreateNetworkAnalyzerConfigurationPostBodyTraceContentFormProperties {

		/** <code>FrameInfo</code> of your wireless device resources for the trace content. Use FrameInfo to debug the communication between your LoRaWAN end devices and the network server. */
		WirelessDeviceFrameInfo: FormControl<WirelessDeviceFrameInfo | null | undefined>,

		/** The log level for a log message. The log levels can be disabled, or set to <code>ERROR</code> to display less verbose logs containing only error information, or to <code>INFO</code> for more detailed logs. */
		LogLevel: FormControl<LogLevel | null | undefined>,

		/** <code>FrameInfo</code> of your multicast group resources for the trace content. Use FrameInfo to debug the multicast communication between your LoRaWAN end devices and the network server. */
		MulticastFrameInfo: FormControl<WirelessDeviceFrameInfo | null | undefined>,
	}
	export function CreateCreateNetworkAnalyzerConfigurationPostBodyTraceContentFormGroup() {
		return new FormGroup<CreateNetworkAnalyzerConfigurationPostBodyTraceContentFormProperties>({
			WirelessDeviceFrameInfo: new FormControl<WirelessDeviceFrameInfo | null | undefined>(undefined),
			LogLevel: new FormControl<LogLevel | null | undefined>(undefined),
			MulticastFrameInfo: new FormControl<WirelessDeviceFrameInfo | null | undefined>(undefined),
		});

	}

	export interface CreateServiceProfilePostBody {

		/**
		 * The name of the new resource.
		 * Max length: 256
		 */
		Name?: string | null;

		/** LoRaWANServiceProfile object. */
		LoRaWAN?: CreateServiceProfilePostBodyLoRaWAN;

		/**
		 * The tag to attach to the specified resource. Tags are metadata that you can use to manage a resource.
		 * Minimum items: 0
		 * Maximum items: 200
		 */
		Tags?: Array<Tag>;

		/**
		 * Each resource must have a unique client request token. If you try to create a new resource with the same token as a resource that already exists, an exception occurs. If you omit this value, AWS SDKs will automatically generate a unique client request.
		 * Min length: 1
		 * Max length: 64
		 */
		ClientRequestToken?: string | null;
	}
	export interface CreateServiceProfilePostBodyFormProperties {

		/**
		 * The name of the new resource.
		 * Max length: 256
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * Each resource must have a unique client request token. If you try to create a new resource with the same token as a resource that already exists, an exception occurs. If you omit this value, AWS SDKs will automatically generate a unique client request.
		 * Min length: 1
		 * Max length: 64
		 */
		ClientRequestToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateServiceProfilePostBodyFormGroup() {
		return new FormGroup<CreateServiceProfilePostBodyFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256)]),
			ClientRequestToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64), Validators.pattern('^[a-zA-Z0-9-_]+$')]),
		});

	}

	export interface CreateServiceProfilePostBodyLoRaWAN {
		AddGwMetadata?: boolean | null;
		DrMin?: number | null;
		DrMax?: number | null;
		PrAllowed?: boolean | null;
		RaAllowed?: boolean | null;
	}
	export interface CreateServiceProfilePostBodyLoRaWANFormProperties {
		AddGwMetadata: FormControl<boolean | null | undefined>,
		DrMin: FormControl<number | null | undefined>,
		DrMax: FormControl<number | null | undefined>,
		PrAllowed: FormControl<boolean | null | undefined>,
		RaAllowed: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateServiceProfilePostBodyLoRaWANFormGroup() {
		return new FormGroup<CreateServiceProfilePostBodyLoRaWANFormProperties>({
			AddGwMetadata: new FormControl<boolean | null | undefined>(undefined),
			DrMin: new FormControl<number | null | undefined>(undefined),
			DrMax: new FormControl<number | null | undefined>(undefined),
			PrAllowed: new FormControl<boolean | null | undefined>(undefined),
			RaAllowed: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface CreateWirelessDevicePostBody {

		/**
		 * The wireless device type.
		 * Required
		 */
		Type: WirelessDeviceType;

		/**
		 * The name of the new resource.
		 * Max length: 256
		 */
		Name?: string | null;

		/**
		 * The description of the new resource.
		 * Max length: 2048
		 */
		Description?: string | null;

		/**
		 * The name of the destination to assign to the new wireless device.
		 * Required
		 * Max length: 128
		 */
		DestinationName: string;

		/**
		 * Each resource must have a unique client request token. If you try to create a new resource with the same token as a resource that already exists, an exception occurs. If you omit this value, AWS SDKs will automatically generate a unique client request.
		 * Min length: 1
		 * Max length: 64
		 */
		ClientRequestToken?: string | null;

		/** LoRaWAN object for create functions. */
		LoRaWAN?: CreateWirelessDevicePostBodyLoRaWAN;

		/**
		 * The tag to attach to the specified resource. Tags are metadata that you can use to manage a resource.
		 * Minimum items: 0
		 * Maximum items: 200
		 */
		Tags?: Array<Tag>;

		/** FPort values for the GNSS, stream, and ClockSync functions of the positioning information. */
		Positioning?: EventNotificationTopicStatus | null;

		/** Sidewalk object for creating a wireless device. */
		Sidewalk?: CreateWirelessDevicePostBodySidewalk;
	}
	export interface CreateWirelessDevicePostBodyFormProperties {

		/**
		 * The wireless device type.
		 * Required
		 */
		Type: FormControl<WirelessDeviceType | null | undefined>,

		/**
		 * The name of the new resource.
		 * Max length: 256
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * The description of the new resource.
		 * Max length: 2048
		 */
		Description: FormControl<string | null | undefined>,

		/**
		 * The name of the destination to assign to the new wireless device.
		 * Required
		 * Max length: 128
		 */
		DestinationName: FormControl<string | null | undefined>,

		/**
		 * Each resource must have a unique client request token. If you try to create a new resource with the same token as a resource that already exists, an exception occurs. If you omit this value, AWS SDKs will automatically generate a unique client request.
		 * Min length: 1
		 * Max length: 64
		 */
		ClientRequestToken: FormControl<string | null | undefined>,

		/** FPort values for the GNSS, stream, and ClockSync functions of the positioning information. */
		Positioning: FormControl<EventNotificationTopicStatus | null | undefined>,
	}
	export function CreateCreateWirelessDevicePostBodyFormGroup() {
		return new FormGroup<CreateWirelessDevicePostBodyFormProperties>({
			Type: new FormControl<WirelessDeviceType | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256)]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048)]),
			DestinationName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.pattern('[a-zA-Z0-9-_]+')]),
			ClientRequestToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64), Validators.pattern('^[a-zA-Z0-9-_]+$')]),
			Positioning: new FormControl<EventNotificationTopicStatus | null | undefined>(undefined),
		});

	}

	export interface CreateWirelessDevicePostBodyLoRaWAN {
		DevEui?: string;
		DeviceProfileId?: string;
		ServiceProfileId?: string;
		OtaaV1_1?: OtaaV1_1;
		OtaaV1_0_x?: OtaaV1_0_x;
		AbpV1_1?: AbpV1_1;
		AbpV1_0_x?: AbpV1_0_x;

		/** List of FPort assigned for different LoRaWAN application packages to use */
		FPorts?: FPorts;
	}
	export interface CreateWirelessDevicePostBodyLoRaWANFormProperties {
		DevEui: FormControl<string | null | undefined>,
		DeviceProfileId: FormControl<string | null | undefined>,
		ServiceProfileId: FormControl<string | null | undefined>,
	}
	export function CreateCreateWirelessDevicePostBodyLoRaWANFormGroup() {
		return new FormGroup<CreateWirelessDevicePostBodyLoRaWANFormProperties>({
			DevEui: new FormControl<string | null | undefined>(undefined),
			DeviceProfileId: new FormControl<string | null | undefined>(undefined),
			ServiceProfileId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateWirelessDevicePostBodySidewalk {
		DeviceProfileId?: string;
	}
	export interface CreateWirelessDevicePostBodySidewalkFormProperties {
		DeviceProfileId: FormControl<string | null | undefined>,
	}
	export function CreateCreateWirelessDevicePostBodySidewalkFormGroup() {
		return new FormGroup<CreateWirelessDevicePostBodySidewalkFormProperties>({
			DeviceProfileId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateWirelessGatewayPostBody {

		/**
		 * The name of the new resource.
		 * Max length: 256
		 */
		Name?: string | null;

		/**
		 * The description of the new resource.
		 * Max length: 2048
		 */
		Description?: string | null;

		/**
		 * LoRaWANGateway object.
		 * Required
		 */
		LoRaWAN: CreateWirelessGatewayPostBodyLoRaWAN;

		/**
		 * The tag to attach to the specified resource. Tags are metadata that you can use to manage a resource.
		 * Minimum items: 0
		 * Maximum items: 200
		 */
		Tags?: Array<Tag>;

		/**
		 * Each resource must have a unique client request token. If you try to create a new resource with the same token as a resource that already exists, an exception occurs. If you omit this value, AWS SDKs will automatically generate a unique client request.
		 * Min length: 1
		 * Max length: 64
		 */
		ClientRequestToken?: string | null;
	}
	export interface CreateWirelessGatewayPostBodyFormProperties {

		/**
		 * The name of the new resource.
		 * Max length: 256
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * The description of the new resource.
		 * Max length: 2048
		 */
		Description: FormControl<string | null | undefined>,

		/**
		 * Each resource must have a unique client request token. If you try to create a new resource with the same token as a resource that already exists, an exception occurs. If you omit this value, AWS SDKs will automatically generate a unique client request.
		 * Min length: 1
		 * Max length: 64
		 */
		ClientRequestToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateWirelessGatewayPostBodyFormGroup() {
		return new FormGroup<CreateWirelessGatewayPostBodyFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256)]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048)]),
			ClientRequestToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64), Validators.pattern('^[a-zA-Z0-9-_]+$')]),
		});

	}

	export interface CreateWirelessGatewayPostBodyLoRaWAN {
		GatewayEui?: string;
		RfRegion?: string;

		/**
		 * A list of JoinEuiRange used by LoRa gateways to filter LoRa frames.
		 * Minimum items: 0
		 * Maximum items: 3
		 */
		JoinEuiFilters?: Array<Array<string>>;

		/**
		 * A list of NetId values that are used by LoRa gateways to filter the uplink frames.
		 * Minimum items: 0
		 * Maximum items: 10
		 */
		NetIdFilters?: Array<string>;

		/**
		 * A list of integer indicating which sub bands are supported by LoRa gateway.
		 * Minimum items: 0
		 * Maximum items: 8
		 */
		SubBands?: Array<number>;
		Beaconing?: Beaconing;
		MaxEirp?: number;
	}
	export interface CreateWirelessGatewayPostBodyLoRaWANFormProperties {
		GatewayEui: FormControl<string | null | undefined>,
		RfRegion: FormControl<string | null | undefined>,
		MaxEirp: FormControl<number | null | undefined>,
	}
	export function CreateCreateWirelessGatewayPostBodyLoRaWANFormGroup() {
		return new FormGroup<CreateWirelessGatewayPostBodyLoRaWANFormProperties>({
			GatewayEui: new FormControl<string | null | undefined>(undefined),
			RfRegion: new FormControl<string | null | undefined>(undefined),
			MaxEirp: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CreateWirelessGatewayTaskPostBody {

		/**
		 * The ID of the WirelessGatewayTaskDefinition.
		 * Required
		 * Max length: 36
		 */
		WirelessGatewayTaskDefinitionId: string;
	}
	export interface CreateWirelessGatewayTaskPostBodyFormProperties {

		/**
		 * The ID of the WirelessGatewayTaskDefinition.
		 * Required
		 * Max length: 36
		 */
		WirelessGatewayTaskDefinitionId: FormControl<string | null | undefined>,
	}
	export function CreateCreateWirelessGatewayTaskPostBodyFormGroup() {
		return new FormGroup<CreateWirelessGatewayTaskPostBodyFormProperties>({
			WirelessGatewayTaskDefinitionId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(36), Validators.pattern('[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}')]),
		});

	}

	export interface CreateWirelessGatewayTaskDefinitionPostBody {

		/**
		 * Whether to automatically create tasks using this task definition for all gateways with the specified current version. If <code>false</code>, the task must me created by calling <code>CreateWirelessGatewayTask</code>.
		 * Required
		 */
		AutoCreateTasks: boolean;

		/**
		 * The name of the new resource.
		 * Min length: 1
		 * Max length: 2048
		 */
		Name?: string | null;

		/** UpdateWirelessGatewayTaskCreate object. */
		Update?: CreateWirelessGatewayTaskDefinitionPostBodyUpdate;

		/**
		 * Each resource must have a unique client request token. If you try to create a new resource with the same token as a resource that already exists, an exception occurs. If you omit this value, AWS SDKs will automatically generate a unique client request.
		 * Min length: 1
		 * Max length: 64
		 */
		ClientRequestToken?: string | null;

		/**
		 * The tag to attach to the specified resource. Tags are metadata that you can use to manage a resource.
		 * Minimum items: 0
		 * Maximum items: 200
		 */
		Tags?: Array<Tag>;
	}
	export interface CreateWirelessGatewayTaskDefinitionPostBodyFormProperties {

		/**
		 * Whether to automatically create tasks using this task definition for all gateways with the specified current version. If <code>false</code>, the task must me created by calling <code>CreateWirelessGatewayTask</code>.
		 * Required
		 */
		AutoCreateTasks: FormControl<boolean | null | undefined>,

		/**
		 * The name of the new resource.
		 * Min length: 1
		 * Max length: 2048
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * Each resource must have a unique client request token. If you try to create a new resource with the same token as a resource that already exists, an exception occurs. If you omit this value, AWS SDKs will automatically generate a unique client request.
		 * Min length: 1
		 * Max length: 64
		 */
		ClientRequestToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateWirelessGatewayTaskDefinitionPostBodyFormGroup() {
		return new FormGroup<CreateWirelessGatewayTaskDefinitionPostBodyFormProperties>({
			AutoCreateTasks: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2048)]),
			ClientRequestToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64), Validators.pattern('^[a-zA-Z0-9-_]+$')]),
		});

	}

	export interface CreateWirelessGatewayTaskDefinitionPostBodyUpdate {
		UpdateDataSource?: string;
		UpdateDataRole?: string;
		LoRaWAN?: LoRaWANUpdateGatewayTaskCreate;
	}
	export interface CreateWirelessGatewayTaskDefinitionPostBodyUpdateFormProperties {
		UpdateDataSource: FormControl<string | null | undefined>,
		UpdateDataRole: FormControl<string | null | undefined>,
	}
	export function CreateCreateWirelessGatewayTaskDefinitionPostBodyUpdateFormGroup() {
		return new FormGroup<CreateWirelessGatewayTaskDefinitionPostBodyUpdateFormProperties>({
			UpdateDataSource: new FormControl<string | null | undefined>(undefined),
			UpdateDataRole: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateDestinationPatchBody {

		/** The type of value in <code>Expression</code>. */
		ExpressionType?: ExpressionType | null;

		/**
		 * The new rule name or topic rule to send messages to.
		 * Max length: 2048
		 */
		Expression?: string | null;

		/**
		 * The description of the new resource.
		 * Max length: 2048
		 */
		Description?: string | null;

		/**
		 * The ARN of the IAM Role that authorizes the destination.
		 * Min length: 20
		 * Max length: 2048
		 */
		RoleArn?: string | null;
	}
	export interface UpdateDestinationPatchBodyFormProperties {

		/** The type of value in <code>Expression</code>. */
		ExpressionType: FormControl<ExpressionType | null | undefined>,

		/**
		 * The new rule name or topic rule to send messages to.
		 * Max length: 2048
		 */
		Expression: FormControl<string | null | undefined>,

		/**
		 * The description of the new resource.
		 * Max length: 2048
		 */
		Description: FormControl<string | null | undefined>,

		/**
		 * The ARN of the IAM Role that authorizes the destination.
		 * Min length: 20
		 * Max length: 2048
		 */
		RoleArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateDestinationPatchBodyFormGroup() {
		return new FormGroup<UpdateDestinationPatchBodyFormProperties>({
			ExpressionType: new FormControl<ExpressionType | null | undefined>(undefined),
			Expression: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048)]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048)]),
			RoleArn: new FormControl<string | null | undefined>(undefined, [Validators.minLength(20), Validators.maxLength(2048)]),
		});

	}

	export interface StartFuotaTaskPutBody {

		/** The LoRaWAN information used to start a FUOTA task. */
		LoRaWAN?: StartFuotaTaskPutBodyLoRaWAN;
	}
	export interface StartFuotaTaskPutBodyFormProperties {
	}
	export function CreateStartFuotaTaskPutBodyFormGroup() {
		return new FormGroup<StartFuotaTaskPutBodyFormProperties>({
		});

	}

	export interface StartFuotaTaskPutBodyLoRaWAN {

		/** Start time of a FUOTA task. */
		StartTime?: Date | null;
	}
	export interface StartFuotaTaskPutBodyLoRaWANFormProperties {

		/** Start time of a FUOTA task. */
		StartTime: FormControl<Date | null | undefined>,
	}
	export function CreateStartFuotaTaskPutBodyLoRaWANFormGroup() {
		return new FormGroup<StartFuotaTaskPutBodyLoRaWANFormProperties>({
			StartTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface UpdateFuotaTaskPatchBody {

		/**
		 * The name of a FUOTA task.
		 * Max length: 256
		 */
		Name?: string | null;

		/**
		 * The description of the new resource.
		 * Max length: 2048
		 */
		Description?: string | null;

		/** The LoRaWAN information used with a FUOTA task. */
		LoRaWAN?: UpdateFuotaTaskPatchBodyLoRaWAN;

		/**
		 * The S3 URI points to a firmware update image that is to be used with a FUOTA task.
		 * Min length: 1
		 * Max length: 4096
		 */
		FirmwareUpdateImage?: string | null;

		/**
		 * The firmware update role that is to be used with a FUOTA task.
		 * Min length: 1
		 * Max length: 2048
		 */
		FirmwareUpdateRole?: string | null;

		/**
		 * The percentage of the added fragments that are redundant. For example, if the size of the firmware image file is 100 bytes and the fragment size is 10 bytes, with <code>RedundancyPercent</code> set to 50(%), the final number of encoded fragments is (100 / 10) + (100 / 10 * 50%) = 15.
		 * Minimum: 0
		 * Maximum: 100
		 */
		RedundancyPercent?: number | null;

		/**
		 * The size of each fragment in bytes. This parameter is supported only for FUOTA tasks with multicast groups.
		 * Minimum: 1
		 */
		FragmentSizeBytes?: number | null;

		/**
		 * <p>The interval for sending fragments in milliseconds, rounded to the nearest second.</p> <note> <p>This interval only determines the timing for when the Cloud sends down the fragments to yor device. There can be a delay for when your device will receive these fragments. This delay depends on the device's class and the communication delay with the cloud.</p> </note>
		 * Minimum: 1
		 */
		FragmentIntervalMS?: number | null;
	}
	export interface UpdateFuotaTaskPatchBodyFormProperties {

		/**
		 * The name of a FUOTA task.
		 * Max length: 256
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * The description of the new resource.
		 * Max length: 2048
		 */
		Description: FormControl<string | null | undefined>,

		/**
		 * The S3 URI points to a firmware update image that is to be used with a FUOTA task.
		 * Min length: 1
		 * Max length: 4096
		 */
		FirmwareUpdateImage: FormControl<string | null | undefined>,

		/**
		 * The firmware update role that is to be used with a FUOTA task.
		 * Min length: 1
		 * Max length: 2048
		 */
		FirmwareUpdateRole: FormControl<string | null | undefined>,

		/**
		 * The percentage of the added fragments that are redundant. For example, if the size of the firmware image file is 100 bytes and the fragment size is 10 bytes, with <code>RedundancyPercent</code> set to 50(%), the final number of encoded fragments is (100 / 10) + (100 / 10 * 50%) = 15.
		 * Minimum: 0
		 * Maximum: 100
		 */
		RedundancyPercent: FormControl<number | null | undefined>,

		/**
		 * The size of each fragment in bytes. This parameter is supported only for FUOTA tasks with multicast groups.
		 * Minimum: 1
		 */
		FragmentSizeBytes: FormControl<number | null | undefined>,

		/**
		 * <p>The interval for sending fragments in milliseconds, rounded to the nearest second.</p> <note> <p>This interval only determines the timing for when the Cloud sends down the fragments to yor device. There can be a delay for when your device will receive these fragments. This delay depends on the device's class and the communication delay with the cloud.</p> </note>
		 * Minimum: 1
		 */
		FragmentIntervalMS: FormControl<number | null | undefined>,
	}
	export function CreateUpdateFuotaTaskPatchBodyFormGroup() {
		return new FormGroup<UpdateFuotaTaskPatchBodyFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256)]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048)]),
			FirmwareUpdateImage: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(4096)]),
			FirmwareUpdateRole: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2048)]),
			RedundancyPercent: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(100)]),
			FragmentSizeBytes: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			FragmentIntervalMS: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
		});

	}

	export interface UpdateFuotaTaskPatchBodyLoRaWAN {

		/** Supported RfRegions */
		RfRegion?: SupportedRfRegion | null;
	}
	export interface UpdateFuotaTaskPatchBodyLoRaWANFormProperties {

		/** Supported RfRegions */
		RfRegion: FormControl<SupportedRfRegion | null | undefined>,
	}
	export function CreateUpdateFuotaTaskPatchBodyLoRaWANFormGroup() {
		return new FormGroup<UpdateFuotaTaskPatchBodyLoRaWANFormProperties>({
			RfRegion: new FormControl<SupportedRfRegion | null | undefined>(undefined),
		});

	}

	export interface UpdateMulticastGroupPatchBody {

		/**
		 * The name of the multicast group.
		 * Max length: 256
		 */
		Name?: string | null;

		/**
		 * The description of the new resource.
		 * Max length: 2048
		 */
		Description?: string | null;

		/** The LoRaWAN information that is to be used with the multicast group. */
		LoRaWAN?: UpdateMulticastGroupPatchBodyLoRaWAN;
	}
	export interface UpdateMulticastGroupPatchBodyFormProperties {

		/**
		 * The name of the multicast group.
		 * Max length: 256
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * The description of the new resource.
		 * Max length: 2048
		 */
		Description: FormControl<string | null | undefined>,
	}
	export function CreateUpdateMulticastGroupPatchBodyFormGroup() {
		return new FormGroup<UpdateMulticastGroupPatchBodyFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256)]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048)]),
		});

	}

	export interface UpdateMulticastGroupPatchBodyLoRaWAN {

		/** Supported RfRegions */
		RfRegion?: SupportedRfRegion | null;

		/**
		 * DlClass for LoRaWAM, valid values are ClassB and ClassC.
		 * Max length: 256
		 */
		DlClass?: DlClass | null;
	}
	export interface UpdateMulticastGroupPatchBodyLoRaWANFormProperties {

		/** Supported RfRegions */
		RfRegion: FormControl<SupportedRfRegion | null | undefined>,

		/**
		 * DlClass for LoRaWAM, valid values are ClassB and ClassC.
		 * Max length: 256
		 */
		DlClass: FormControl<DlClass | null | undefined>,
	}
	export function CreateUpdateMulticastGroupPatchBodyLoRaWANFormGroup() {
		return new FormGroup<UpdateMulticastGroupPatchBodyLoRaWANFormProperties>({
			RfRegion: new FormControl<SupportedRfRegion | null | undefined>(undefined),
			DlClass: new FormControl<DlClass | null | undefined>(undefined, [Validators.maxLength(256)]),
		});

	}

	export interface UpdateNetworkAnalyzerConfigurationPatchBody {

		/** Trace content for your wireless gateway and wireless device resources. */
		TraceContent?: UpdateNetworkAnalyzerConfigurationPatchBodyTraceContent;

		/**
		 * Wireless device resources to add to the network analyzer configuration. Provide the <code>WirelessDeviceId</code> of the resource to add in the input array.
		 * Minimum items: 0
		 * Maximum items: 250
		 */
		WirelessDevicesToAdd?: Array<string>;

		/**
		 * Wireless device resources to remove from the network analyzer configuration. Provide the <code>WirelessDeviceId</code> of the resources to remove in the input array.
		 * Minimum items: 0
		 * Maximum items: 250
		 */
		WirelessDevicesToRemove?: Array<string>;

		/** Wireless gateway resources to add to the network analyzer configuration. Provide the <code>WirelessGatewayId</code> of the resource to add in the input array. */
		WirelessGatewaysToAdd?: Array<string>;

		/** Wireless gateway resources to remove from the network analyzer configuration. Provide the <code>WirelessGatewayId</code> of the resources to remove in the input array. */
		WirelessGatewaysToRemove?: Array<string>;

		/**
		 * The description of the new resource.
		 * Max length: 2048
		 */
		Description?: string | null;

		/**
		 * Multicast group resources to add to the network analyzer configuration. Provide the <code>MulticastGroupId</code> of the resource to add in the input array.
		 * Minimum items: 0
		 * Maximum items: 10
		 */
		MulticastGroupsToAdd?: Array<string>;

		/**
		 * Multicast group resources to remove from the network analyzer configuration. Provide the <code>MulticastGroupId</code> of the resource to remove in the input array.
		 * Minimum items: 0
		 * Maximum items: 10
		 */
		MulticastGroupsToRemove?: Array<string>;
	}
	export interface UpdateNetworkAnalyzerConfigurationPatchBodyFormProperties {

		/**
		 * The description of the new resource.
		 * Max length: 2048
		 */
		Description: FormControl<string | null | undefined>,
	}
	export function CreateUpdateNetworkAnalyzerConfigurationPatchBodyFormGroup() {
		return new FormGroup<UpdateNetworkAnalyzerConfigurationPatchBodyFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048)]),
		});

	}

	export interface UpdateNetworkAnalyzerConfigurationPatchBodyTraceContent {

		/** <code>FrameInfo</code> of your wireless device resources for the trace content. Use FrameInfo to debug the communication between your LoRaWAN end devices and the network server. */
		WirelessDeviceFrameInfo?: WirelessDeviceFrameInfo | null;

		/** The log level for a log message. The log levels can be disabled, or set to <code>ERROR</code> to display less verbose logs containing only error information, or to <code>INFO</code> for more detailed logs. */
		LogLevel?: LogLevel | null;

		/** <code>FrameInfo</code> of your multicast group resources for the trace content. Use FrameInfo to debug the multicast communication between your LoRaWAN end devices and the network server. */
		MulticastFrameInfo?: WirelessDeviceFrameInfo | null;
	}
	export interface UpdateNetworkAnalyzerConfigurationPatchBodyTraceContentFormProperties {

		/** <code>FrameInfo</code> of your wireless device resources for the trace content. Use FrameInfo to debug the communication between your LoRaWAN end devices and the network server. */
		WirelessDeviceFrameInfo: FormControl<WirelessDeviceFrameInfo | null | undefined>,

		/** The log level for a log message. The log levels can be disabled, or set to <code>ERROR</code> to display less verbose logs containing only error information, or to <code>INFO</code> for more detailed logs. */
		LogLevel: FormControl<LogLevel | null | undefined>,

		/** <code>FrameInfo</code> of your multicast group resources for the trace content. Use FrameInfo to debug the multicast communication between your LoRaWAN end devices and the network server. */
		MulticastFrameInfo: FormControl<WirelessDeviceFrameInfo | null | undefined>,
	}
	export function CreateUpdateNetworkAnalyzerConfigurationPatchBodyTraceContentFormGroup() {
		return new FormGroup<UpdateNetworkAnalyzerConfigurationPatchBodyTraceContentFormProperties>({
			WirelessDeviceFrameInfo: new FormControl<WirelessDeviceFrameInfo | null | undefined>(undefined),
			LogLevel: new FormControl<LogLevel | null | undefined>(undefined),
			MulticastFrameInfo: new FormControl<WirelessDeviceFrameInfo | null | undefined>(undefined),
		});

	}

	export interface UpdateWirelessDevicePatchBody {

		/**
		 * The name of the new destination for the device.
		 * Max length: 128
		 */
		DestinationName?: string | null;

		/**
		 * The new name of the resource.
		 * Max length: 256
		 */
		Name?: string | null;

		/**
		 * The description of the new resource.
		 * Max length: 2048
		 */
		Description?: string | null;

		/** LoRaWAN object for update functions. */
		LoRaWAN?: UpdateWirelessDevicePatchBodyLoRaWAN;

		/** FPort values for the GNSS, stream, and ClockSync functions of the positioning information. */
		Positioning?: EventNotificationTopicStatus | null;
	}
	export interface UpdateWirelessDevicePatchBodyFormProperties {

		/**
		 * The name of the new destination for the device.
		 * Max length: 128
		 */
		DestinationName: FormControl<string | null | undefined>,

		/**
		 * The new name of the resource.
		 * Max length: 256
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * The description of the new resource.
		 * Max length: 2048
		 */
		Description: FormControl<string | null | undefined>,

		/** FPort values for the GNSS, stream, and ClockSync functions of the positioning information. */
		Positioning: FormControl<EventNotificationTopicStatus | null | undefined>,
	}
	export function CreateUpdateWirelessDevicePatchBodyFormGroup() {
		return new FormGroup<UpdateWirelessDevicePatchBodyFormProperties>({
			DestinationName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.pattern('[a-zA-Z0-9-_]+')]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256)]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048)]),
			Positioning: new FormControl<EventNotificationTopicStatus | null | undefined>(undefined),
		});

	}

	export interface UpdateWirelessDevicePatchBodyLoRaWAN {
		DeviceProfileId?: string;
		ServiceProfileId?: string;
		AbpV1_1?: UpdateAbpV1_1;
		AbpV1_0_x?: UpdateAbpV1_0_x;
		FPorts?: UpdateFPorts;
	}
	export interface UpdateWirelessDevicePatchBodyLoRaWANFormProperties {
		DeviceProfileId: FormControl<string | null | undefined>,
		ServiceProfileId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateWirelessDevicePatchBodyLoRaWANFormGroup() {
		return new FormGroup<UpdateWirelessDevicePatchBodyLoRaWANFormProperties>({
			DeviceProfileId: new FormControl<string | null | undefined>(undefined),
			ServiceProfileId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateWirelessDeviceImportTaskPatchBody {

		/**
		 * Sidewalk object information for updating an import task.
		 * Required
		 */
		Sidewalk: UpdateWirelessDeviceImportTaskPatchBodySidewalk;
	}
	export interface UpdateWirelessDeviceImportTaskPatchBodyFormProperties {
	}
	export function CreateUpdateWirelessDeviceImportTaskPatchBodyFormGroup() {
		return new FormGroup<UpdateWirelessDeviceImportTaskPatchBodyFormProperties>({
		});

	}

	export interface UpdateWirelessDeviceImportTaskPatchBodySidewalk {
		DeviceCreationFile?: string;
	}
	export interface UpdateWirelessDeviceImportTaskPatchBodySidewalkFormProperties {
		DeviceCreationFile: FormControl<string | null | undefined>,
	}
	export function CreateUpdateWirelessDeviceImportTaskPatchBodySidewalkFormGroup() {
		return new FormGroup<UpdateWirelessDeviceImportTaskPatchBodySidewalkFormProperties>({
			DeviceCreationFile: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateWirelessGatewayPatchBody {

		/**
		 * The new name of the resource.
		 * Max length: 256
		 */
		Name?: string | null;

		/**
		 * The description of the new resource.
		 * Max length: 2048
		 */
		Description?: string | null;

		/**
		 * A list of JoinEuiRange used by LoRa gateways to filter LoRa frames.
		 * Minimum items: 0
		 * Maximum items: 3
		 */
		JoinEuiFilters?: Array<Array<string>>;

		/**
		 * A list of NetId values that are used by LoRa gateways to filter the uplink frames.
		 * Minimum items: 0
		 * Maximum items: 10
		 */
		NetIdFilters?: Array<string>;

		/**
		 * The MaxEIRP value.
		 * Minimum: 0
		 * Maximum: 30
		 */
		MaxEirp?: number | null;
	}
	export interface UpdateWirelessGatewayPatchBodyFormProperties {

		/**
		 * The new name of the resource.
		 * Max length: 256
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * The description of the new resource.
		 * Max length: 2048
		 */
		Description: FormControl<string | null | undefined>,

		/**
		 * The MaxEIRP value.
		 * Minimum: 0
		 * Maximum: 30
		 */
		MaxEirp: FormControl<number | null | undefined>,
	}
	export function CreateUpdateWirelessGatewayPatchBodyFormGroup() {
		return new FormGroup<UpdateWirelessGatewayPatchBodyFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256)]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048)]),
			MaxEirp: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(30)]),
		});

	}

	export interface UpdatePartnerAccountPatchBody {

		/**
		 * Sidewalk update.
		 * Required
		 */
		Sidewalk: UpdatePartnerAccountPatchBodySidewalk;
	}
	export interface UpdatePartnerAccountPatchBodyFormProperties {
	}
	export function CreateUpdatePartnerAccountPatchBodyFormGroup() {
		return new FormGroup<UpdatePartnerAccountPatchBodyFormProperties>({
		});

	}

	export interface UpdatePartnerAccountPatchBodySidewalk {
		AppServerPrivateKey?: string;
	}
	export interface UpdatePartnerAccountPatchBodySidewalkFormProperties {
		AppServerPrivateKey: FormControl<string | null | undefined>,
	}
	export function CreateUpdatePartnerAccountPatchBodySidewalkFormGroup() {
		return new FormGroup<UpdatePartnerAccountPatchBodySidewalkFormProperties>({
			AppServerPrivateKey: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateEventConfigurationByResourceTypesPatchBody {

		/** Device registration state resource type event configuration object for enabling or disabling topic. */
		DeviceRegistrationState?: UpdateEventConfigurationByResourceTypesPatchBodyDeviceRegistrationState;

		/** Proximity resource type event configuration object for enabling or disabling topic. */
		Proximity?: UpdateEventConfigurationByResourceTypesPatchBodyProximity;

		/** Join resource type event configuration object for enabling or disabling topic. */
		Join?: UpdateEventConfigurationByResourceTypesPatchBodyJoin;

		/** Connection status resource type event configuration object for enabling or disabling topic. */
		ConnectionStatus?: UpdateEventConfigurationByResourceTypesPatchBodyConnectionStatus;

		/** Message delivery status resource type event configuration object for enabling or disabling relevant topic. */
		MessageDeliveryStatus?: UpdateEventConfigurationByResourceTypesPatchBodyMessageDeliveryStatus;
	}
	export interface UpdateEventConfigurationByResourceTypesPatchBodyFormProperties {
	}
	export function CreateUpdateEventConfigurationByResourceTypesPatchBodyFormGroup() {
		return new FormGroup<UpdateEventConfigurationByResourceTypesPatchBodyFormProperties>({
		});

	}

	export interface UpdateEventConfigurationByResourceTypesPatchBodyDeviceRegistrationState {
		Sidewalk?: SidewalkResourceTypeEventConfiguration;
	}
	export interface UpdateEventConfigurationByResourceTypesPatchBodyDeviceRegistrationStateFormProperties {
	}
	export function CreateUpdateEventConfigurationByResourceTypesPatchBodyDeviceRegistrationStateFormGroup() {
		return new FormGroup<UpdateEventConfigurationByResourceTypesPatchBodyDeviceRegistrationStateFormProperties>({
		});

	}

	export interface UpdateEventConfigurationByResourceTypesPatchBodyProximity {
		Sidewalk?: SidewalkResourceTypeEventConfiguration;
	}
	export interface UpdateEventConfigurationByResourceTypesPatchBodyProximityFormProperties {
	}
	export function CreateUpdateEventConfigurationByResourceTypesPatchBodyProximityFormGroup() {
		return new FormGroup<UpdateEventConfigurationByResourceTypesPatchBodyProximityFormProperties>({
		});

	}

	export interface UpdateEventConfigurationByResourceTypesPatchBodyJoin {
		LoRaWAN?: LoRaWANJoinResourceTypeEventConfiguration;
	}
	export interface UpdateEventConfigurationByResourceTypesPatchBodyJoinFormProperties {
	}
	export function CreateUpdateEventConfigurationByResourceTypesPatchBodyJoinFormGroup() {
		return new FormGroup<UpdateEventConfigurationByResourceTypesPatchBodyJoinFormProperties>({
		});

	}

	export interface UpdateEventConfigurationByResourceTypesPatchBodyConnectionStatus {
		LoRaWAN?: LoRaWANConnectionStatusResourceTypeEventConfiguration;
	}
	export interface UpdateEventConfigurationByResourceTypesPatchBodyConnectionStatusFormProperties {
	}
	export function CreateUpdateEventConfigurationByResourceTypesPatchBodyConnectionStatusFormGroup() {
		return new FormGroup<UpdateEventConfigurationByResourceTypesPatchBodyConnectionStatusFormProperties>({
		});

	}

	export interface UpdateEventConfigurationByResourceTypesPatchBodyMessageDeliveryStatus {

		/** Sidewalk resource type event configuration object for enabling or disabling topic. */
		Sidewalk?: SidewalkResourceTypeEventConfiguration;
	}
	export interface UpdateEventConfigurationByResourceTypesPatchBodyMessageDeliveryStatusFormProperties {
	}
	export function CreateUpdateEventConfigurationByResourceTypesPatchBodyMessageDeliveryStatusFormGroup() {
		return new FormGroup<UpdateEventConfigurationByResourceTypesPatchBodyMessageDeliveryStatusFormProperties>({
		});

	}

	export interface UpdateLogLevelsByResourceTypesPostBody {

		/** The log level for a log message. The log levels can be disabled, or set to <code>ERROR</code> to display less verbose logs containing only error information, or to <code>INFO</code> for more detailed logs. */
		DefaultLogLevel?: LogLevel | null;

		/** The list of wireless device log options. */
		WirelessDeviceLogOptions?: Array<WirelessDeviceLogOption>;

		/** The list of wireless gateway log options. */
		WirelessGatewayLogOptions?: Array<WirelessGatewayLogOption>;
	}
	export interface UpdateLogLevelsByResourceTypesPostBodyFormProperties {

		/** The log level for a log message. The log levels can be disabled, or set to <code>ERROR</code> to display less verbose logs containing only error information, or to <code>INFO</code> for more detailed logs. */
		DefaultLogLevel: FormControl<LogLevel | null | undefined>,
	}
	export function CreateUpdateLogLevelsByResourceTypesPostBodyFormGroup() {
		return new FormGroup<UpdateLogLevelsByResourceTypesPostBodyFormProperties>({
			DefaultLogLevel: new FormControl<LogLevel | null | undefined>(undefined),
		});

	}

	export interface UpdatePositionPatchBody {

		/**
		 * The position information of the resource.
		 * Required
		 */
		Position: Array<number>;
	}
	export interface UpdatePositionPatchBodyFormProperties {
	}
	export function CreateUpdatePositionPatchBodyFormGroup() {
		return new FormGroup<UpdatePositionPatchBodyFormProperties>({
		});

	}

	export interface PutPositionConfigurationPutBody {

		/** The wrapper for position solver configurations. */
		Solvers?: PutPositionConfigurationPutBodySolvers;

		/**
		 * The position data destination that describes the AWS IoT rule that processes the device's position data for use by AWS IoT Core for LoRaWAN.
		 * Max length: 128
		 */
		Destination?: string | null;
	}
	export interface PutPositionConfigurationPutBodyFormProperties {

		/**
		 * The position data destination that describes the AWS IoT rule that processes the device's position data for use by AWS IoT Core for LoRaWAN.
		 * Max length: 128
		 */
		Destination: FormControl<string | null | undefined>,
	}
	export function CreatePutPositionConfigurationPutBodyFormGroup() {
		return new FormGroup<PutPositionConfigurationPutBodyFormProperties>({
			Destination: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.pattern('[a-zA-Z0-9-_]+')]),
		});

	}

	export interface PutPositionConfigurationPutBodySolvers {
		SemtechGnss?: SemtechGnssConfiguration;
	}
	export interface PutPositionConfigurationPutBodySolversFormProperties {
	}
	export function CreatePutPositionConfigurationPutBodySolversFormGroup() {
		return new FormGroup<PutPositionConfigurationPutBodySolversFormProperties>({
		});

	}

	export interface GetPositionEstimatePostBody {

		/** Retrieves an estimated device position by resolving WLAN measurement data. The position is resolved using HERE's Wi-Fi based solver. */
		WiFiAccessPoints?: Array<WiFiAccessPoint>;

		/** The cell towers that were used to perform the measurements. */
		CellTowers?: GetPositionEstimatePostBodyCellTowers;

		/** IP address used for resolving device location. */
		Ip?: GetPositionEstimatePostBodyIp;

		/** Global navigation satellite system (GNSS) object used for positioning. */
		Gnss?: GetPositionEstimatePostBodyGnss;

		/** Optional information that specifies the time when the position information will be resolved. It uses the Unix timestamp format. If not specified, the time at which the request was received will be used. */
		Timestamp?: Date | null;
	}
	export interface GetPositionEstimatePostBodyFormProperties {

		/** Optional information that specifies the time when the position information will be resolved. It uses the Unix timestamp format. If not specified, the time at which the request was received will be used. */
		Timestamp: FormControl<Date | null | undefined>,
	}
	export function CreateGetPositionEstimatePostBodyFormGroup() {
		return new FormGroup<GetPositionEstimatePostBodyFormProperties>({
			Timestamp: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface GetPositionEstimatePostBodyCellTowers {
		Gsm?: Array<GsmObj>;
		Wcdma?: Array<WcdmaObj>;
		Tdscdma?: Array<TdscdmaObj>;
		Lte?: Array<LteObj>;
		Cdma?: Array<CdmaObj>;
	}
	export interface GetPositionEstimatePostBodyCellTowersFormProperties {
	}
	export function CreateGetPositionEstimatePostBodyCellTowersFormGroup() {
		return new FormGroup<GetPositionEstimatePostBodyCellTowersFormProperties>({
		});

	}

	export interface GetPositionEstimatePostBodyIp {
		IpAddress?: string;
	}
	export interface GetPositionEstimatePostBodyIpFormProperties {
		IpAddress: FormControl<string | null | undefined>,
	}
	export function CreateGetPositionEstimatePostBodyIpFormGroup() {
		return new FormGroup<GetPositionEstimatePostBodyIpFormProperties>({
			IpAddress: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetPositionEstimatePostBodyGnss {
		Payload?: string;
		CaptureTime?: number;
		CaptureTimeAccuracy?: number;
		AssistPosition?: Array<number> | null;
		AssistAltitude?: number;
		Use2DSolver?: boolean | null;
	}
	export interface GetPositionEstimatePostBodyGnssFormProperties {
		Payload: FormControl<string | null | undefined>,
		CaptureTime: FormControl<number | null | undefined>,
		CaptureTimeAccuracy: FormControl<number | null | undefined>,
		AssistAltitude: FormControl<number | null | undefined>,
		Use2DSolver: FormControl<boolean | null | undefined>,
	}
	export function CreateGetPositionEstimatePostBodyGnssFormGroup() {
		return new FormGroup<GetPositionEstimatePostBodyGnssFormProperties>({
			Payload: new FormControl<string | null | undefined>(undefined),
			CaptureTime: new FormControl<number | null | undefined>(undefined),
			CaptureTimeAccuracy: new FormControl<number | null | undefined>(undefined),
			AssistAltitude: new FormControl<number | null | undefined>(undefined),
			Use2DSolver: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UpdateResourceEventConfigurationPatchBody {

		/** Device registration state event configuration object for enabling and disabling relevant topics. */
		DeviceRegistrationState?: UpdateResourceEventConfigurationPatchBodyDeviceRegistrationState;

		/** Proximity event configuration object for enabling and disabling relevant topics. */
		Proximity?: UpdateResourceEventConfigurationPatchBodyProximity;

		/** Join event configuration object for enabling or disabling topic. */
		Join?: UpdateResourceEventConfigurationPatchBodyJoin;

		/** Connection status event configuration object for enabling or disabling topic. */
		ConnectionStatus?: UpdateResourceEventConfigurationPatchBodyConnectionStatus;

		/** Message delivery status event configuration object for enabling and disabling relevant topics. */
		MessageDeliveryStatus?: UpdateResourceEventConfigurationPatchBodyMessageDeliveryStatus;
	}
	export interface UpdateResourceEventConfigurationPatchBodyFormProperties {
	}
	export function CreateUpdateResourceEventConfigurationPatchBodyFormGroup() {
		return new FormGroup<UpdateResourceEventConfigurationPatchBodyFormProperties>({
		});

	}

	export interface UpdateResourceEventConfigurationPatchBodyDeviceRegistrationState {
		Sidewalk?: SidewalkEventNotificationConfigurations;
		WirelessDeviceIdEventTopic?: EventNotificationTopicStatus;
	}
	export interface UpdateResourceEventConfigurationPatchBodyDeviceRegistrationStateFormProperties {
		WirelessDeviceIdEventTopic: FormControl<EventNotificationTopicStatus | null | undefined>,
	}
	export function CreateUpdateResourceEventConfigurationPatchBodyDeviceRegistrationStateFormGroup() {
		return new FormGroup<UpdateResourceEventConfigurationPatchBodyDeviceRegistrationStateFormProperties>({
			WirelessDeviceIdEventTopic: new FormControl<EventNotificationTopicStatus | null | undefined>(undefined),
		});

	}

	export interface UpdateResourceEventConfigurationPatchBodyProximity {
		Sidewalk?: SidewalkEventNotificationConfigurations;
		WirelessDeviceIdEventTopic?: EventNotificationTopicStatus;
	}
	export interface UpdateResourceEventConfigurationPatchBodyProximityFormProperties {
		WirelessDeviceIdEventTopic: FormControl<EventNotificationTopicStatus | null | undefined>,
	}
	export function CreateUpdateResourceEventConfigurationPatchBodyProximityFormGroup() {
		return new FormGroup<UpdateResourceEventConfigurationPatchBodyProximityFormProperties>({
			WirelessDeviceIdEventTopic: new FormControl<EventNotificationTopicStatus | null | undefined>(undefined),
		});

	}

	export interface UpdateResourceEventConfigurationPatchBodyJoin {
		LoRaWAN?: LoRaWANJoinEventNotificationConfigurations;
		WirelessDeviceIdEventTopic?: EventNotificationTopicStatus;
	}
	export interface UpdateResourceEventConfigurationPatchBodyJoinFormProperties {
		WirelessDeviceIdEventTopic: FormControl<EventNotificationTopicStatus | null | undefined>,
	}
	export function CreateUpdateResourceEventConfigurationPatchBodyJoinFormGroup() {
		return new FormGroup<UpdateResourceEventConfigurationPatchBodyJoinFormProperties>({
			WirelessDeviceIdEventTopic: new FormControl<EventNotificationTopicStatus | null | undefined>(undefined),
		});

	}

	export interface UpdateResourceEventConfigurationPatchBodyConnectionStatus {
		LoRaWAN?: LoRaWANConnectionStatusEventNotificationConfigurations;
		WirelessGatewayIdEventTopic?: EventNotificationTopicStatus;
	}
	export interface UpdateResourceEventConfigurationPatchBodyConnectionStatusFormProperties {
		WirelessGatewayIdEventTopic: FormControl<EventNotificationTopicStatus | null | undefined>,
	}
	export function CreateUpdateResourceEventConfigurationPatchBodyConnectionStatusFormGroup() {
		return new FormGroup<UpdateResourceEventConfigurationPatchBodyConnectionStatusFormProperties>({
			WirelessGatewayIdEventTopic: new FormControl<EventNotificationTopicStatus | null | undefined>(undefined),
		});

	}

	export interface UpdateResourceEventConfigurationPatchBodyMessageDeliveryStatus {

		/** <code>SidewalkEventNotificationConfigurations</code> object, which is the event configuration object for Sidewalk-related event topics. */
		Sidewalk?: SidewalkEventNotificationConfigurations;
		WirelessDeviceIdEventTopic?: EventNotificationTopicStatus;
	}
	export interface UpdateResourceEventConfigurationPatchBodyMessageDeliveryStatusFormProperties {
		WirelessDeviceIdEventTopic: FormControl<EventNotificationTopicStatus | null | undefined>,
	}
	export function CreateUpdateResourceEventConfigurationPatchBodyMessageDeliveryStatusFormGroup() {
		return new FormGroup<UpdateResourceEventConfigurationPatchBodyMessageDeliveryStatusFormProperties>({
			WirelessDeviceIdEventTopic: new FormControl<EventNotificationTopicStatus | null | undefined>(undefined),
		});

	}

	export interface PutResourceLogLevelPutBody {

		/**
		 * The log level for a log message. The log levels can be disabled, or set to <code>ERROR</code> to display less verbose logs containing only error information, or to <code>INFO</code> for more detailed logs.
		 * Required
		 */
		LogLevel: LogLevel;
	}
	export interface PutResourceLogLevelPutBodyFormProperties {

		/**
		 * The log level for a log message. The log levels can be disabled, or set to <code>ERROR</code> to display less verbose logs containing only error information, or to <code>INFO</code> for more detailed logs.
		 * Required
		 */
		LogLevel: FormControl<LogLevel | null | undefined>,
	}
	export function CreatePutResourceLogLevelPutBodyFormGroup() {
		return new FormGroup<PutResourceLogLevelPutBodyFormProperties>({
			LogLevel: new FormControl<LogLevel | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateResourcePositionPatchBody {

		/** The position information of the resource, displayed as a JSON payload. The payload uses the GeoJSON format, which a format that's used to encode geographic data structures. For more information, see <a href="https://geojson.org/">GeoJSON</a>. */
		GeoJsonPayload?: string | null;
	}
	export interface UpdateResourcePositionPatchBodyFormProperties {

		/** The position information of the resource, displayed as a JSON payload. The payload uses the GeoJSON format, which a format that's used to encode geographic data structures. For more information, see <a href="https://geojson.org/">GeoJSON</a>. */
		GeoJsonPayload: FormControl<string | null | undefined>,
	}
	export function CreateUpdateResourcePositionPatchBodyFormGroup() {
		return new FormGroup<UpdateResourcePositionPatchBodyFormProperties>({
			GeoJsonPayload: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SendDataToWirelessDevicePostBody {

		/**
		 * The transmit mode to use to send data to the wireless device. Can be: <code>0</code> for UM (unacknowledge mode) or <code>1</code> for AM (acknowledge mode).
		 * Required
		 * Minimum: 0
		 * Maximum: 1
		 */
		TransmitMode: number;

		/**
		 * The binary to be sent to the end device, encoded in base64.
		 * Required
		 * Max length: 2048
		 */
		PayloadData: string;

		/** WirelessMetadata object. */
		WirelessMetadata?: SendDataToWirelessDevicePostBodyWirelessMetadata;
	}
	export interface SendDataToWirelessDevicePostBodyFormProperties {

		/**
		 * The transmit mode to use to send data to the wireless device. Can be: <code>0</code> for UM (unacknowledge mode) or <code>1</code> for AM (acknowledge mode).
		 * Required
		 * Minimum: 0
		 * Maximum: 1
		 */
		TransmitMode: FormControl<number | null | undefined>,

		/**
		 * The binary to be sent to the end device, encoded in base64.
		 * Required
		 * Max length: 2048
		 */
		PayloadData: FormControl<string | null | undefined>,
	}
	export function CreateSendDataToWirelessDevicePostBodyFormGroup() {
		return new FormGroup<SendDataToWirelessDevicePostBodyFormProperties>({
			TransmitMode: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0), Validators.max(1)]),
			PayloadData: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(2048), Validators.pattern('^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$')]),
		});

	}

	export interface SendDataToWirelessDevicePostBodyWirelessMetadata {
		LoRaWAN?: LoRaWANSendDataToDevice;
		Sidewalk?: SidewalkSendDataToDevice;
	}
	export interface SendDataToWirelessDevicePostBodyWirelessMetadataFormProperties {
	}
	export function CreateSendDataToWirelessDevicePostBodyWirelessMetadataFormGroup() {
		return new FormGroup<SendDataToWirelessDevicePostBodyWirelessMetadataFormProperties>({
		});

	}

	export interface TagResourcePostBody {

		/**
		 * The tag to attach to the specified resource. Tags are metadata that you can use to manage a resource.
		 * Required
		 * Minimum items: 0
		 * Maximum items: 200
		 */
		Tags: Array<Tag>;
	}
	export interface TagResourcePostBodyFormProperties {
	}
	export function CreateTagResourcePostBodyFormGroup() {
		return new FormGroup<TagResourcePostBodyFormProperties>({
		});

	}

	export interface SendDataToMulticastGroupPostBody {

		/**
		 * The binary to be sent to the end device, encoded in base64.
		 * Required
		 * Max length: 2048
		 */
		PayloadData: string;

		/**
		 * Wireless metadata that is to be sent to multicast group.
		 * Required
		 */
		WirelessMetadata: SendDataToMulticastGroupPostBodyWirelessMetadata;
	}
	export interface SendDataToMulticastGroupPostBodyFormProperties {

		/**
		 * The binary to be sent to the end device, encoded in base64.
		 * Required
		 * Max length: 2048
		 */
		PayloadData: FormControl<string | null | undefined>,
	}
	export function CreateSendDataToMulticastGroupPostBodyFormGroup() {
		return new FormGroup<SendDataToMulticastGroupPostBodyFormProperties>({
			PayloadData: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(2048), Validators.pattern('^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$')]),
		});

	}

	export interface SendDataToMulticastGroupPostBodyWirelessMetadata {

		/** The metadata information of the LoRaWAN multicast group. */
		LoRaWAN?: LoRaWANMulticastMetadata;
	}
	export interface SendDataToMulticastGroupPostBodyWirelessMetadataFormProperties {
	}
	export function CreateSendDataToMulticastGroupPostBodyWirelessMetadataFormGroup() {
		return new FormGroup<SendDataToMulticastGroupPostBodyWirelessMetadataFormProperties>({
		});

	}

	export interface StartBulkAssociateWirelessDeviceWithMulticastGroupPatchBody {

		/**
		 * Query string used to search for wireless devices as part of the bulk associate and disassociate process.
		 * Max length: 4096
		 */
		QueryString?: string | null;

		/**
		 * The tag to attach to the specified resource. Tags are metadata that you can use to manage a resource.
		 * Minimum items: 0
		 * Maximum items: 200
		 */
		Tags?: Array<Tag>;
	}
	export interface StartBulkAssociateWirelessDeviceWithMulticastGroupPatchBodyFormProperties {

		/**
		 * Query string used to search for wireless devices as part of the bulk associate and disassociate process.
		 * Max length: 4096
		 */
		QueryString: FormControl<string | null | undefined>,
	}
	export function CreateStartBulkAssociateWirelessDeviceWithMulticastGroupPatchBodyFormGroup() {
		return new FormGroup<StartBulkAssociateWirelessDeviceWithMulticastGroupPatchBodyFormProperties>({
			QueryString: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(4096)]),
		});

	}

	export interface StartBulkDisassociateWirelessDeviceFromMulticastGroupPostBody {

		/**
		 * Query string used to search for wireless devices as part of the bulk associate and disassociate process.
		 * Max length: 4096
		 */
		QueryString?: string | null;

		/**
		 * The tag to attach to the specified resource. Tags are metadata that you can use to manage a resource.
		 * Minimum items: 0
		 * Maximum items: 200
		 */
		Tags?: Array<Tag>;
	}
	export interface StartBulkDisassociateWirelessDeviceFromMulticastGroupPostBodyFormProperties {

		/**
		 * Query string used to search for wireless devices as part of the bulk associate and disassociate process.
		 * Max length: 4096
		 */
		QueryString: FormControl<string | null | undefined>,
	}
	export function CreateStartBulkDisassociateWirelessDeviceFromMulticastGroupPostBodyFormGroup() {
		return new FormGroup<StartBulkDisassociateWirelessDeviceFromMulticastGroupPostBodyFormProperties>({
			QueryString: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(4096)]),
		});

	}

	export interface StartSingleWirelessDeviceImportTaskPostBody {

		/**
		 * The name of the Sidewalk destination that describes the IoT rule to route messages from the device in the import task that will be onboarded to AWS IoT Wireless.
		 * Required
		 * Max length: 128
		 */
		DestinationName: string;

		/**
		 * Each resource must have a unique client request token. If you try to create a new resource with the same token as a resource that already exists, an exception occurs. If you omit this value, AWS SDKs will automatically generate a unique client request.
		 * Min length: 1
		 * Max length: 64
		 */
		ClientRequestToken?: string | null;

		/** The name of the wireless device for which an import task is being started. */
		DeviceName?: string | null;

		/**
		 * The tag to attach to the specified resource. Tags are metadata that you can use to manage a resource.
		 * Minimum items: 0
		 * Maximum items: 200
		 */
		Tags?: Array<Tag>;

		/**
		 * Information about an import task created for an individual Sidewalk device.
		 * Required
		 */
		Sidewalk: StartSingleWirelessDeviceImportTaskPostBodySidewalk;
	}
	export interface StartSingleWirelessDeviceImportTaskPostBodyFormProperties {

		/**
		 * The name of the Sidewalk destination that describes the IoT rule to route messages from the device in the import task that will be onboarded to AWS IoT Wireless.
		 * Required
		 * Max length: 128
		 */
		DestinationName: FormControl<string | null | undefined>,

		/**
		 * Each resource must have a unique client request token. If you try to create a new resource with the same token as a resource that already exists, an exception occurs. If you omit this value, AWS SDKs will automatically generate a unique client request.
		 * Min length: 1
		 * Max length: 64
		 */
		ClientRequestToken: FormControl<string | null | undefined>,

		/** The name of the wireless device for which an import task is being started. */
		DeviceName: FormControl<string | null | undefined>,
	}
	export function CreateStartSingleWirelessDeviceImportTaskPostBodyFormGroup() {
		return new FormGroup<StartSingleWirelessDeviceImportTaskPostBodyFormProperties>({
			DestinationName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.pattern('[a-zA-Z0-9-_]+')]),
			ClientRequestToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64), Validators.pattern('^[a-zA-Z0-9-_]+$')]),
			DeviceName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StartSingleWirelessDeviceImportTaskPostBodySidewalk {
		SidewalkManufacturingSn?: string;
	}
	export interface StartSingleWirelessDeviceImportTaskPostBodySidewalkFormProperties {
		SidewalkManufacturingSn: FormControl<string | null | undefined>,
	}
	export function CreateStartSingleWirelessDeviceImportTaskPostBodySidewalkFormGroup() {
		return new FormGroup<StartSingleWirelessDeviceImportTaskPostBodySidewalkFormProperties>({
			SidewalkManufacturingSn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StartWirelessDeviceImportTaskPostBody {

		/**
		 * The name of the Sidewalk destination that describes the IoT rule to route messages from the devices in the import task that are onboarded to AWS IoT Wireless.
		 * Required
		 * Max length: 128
		 */
		DestinationName: string;

		/**
		 * Each resource must have a unique client request token. If you try to create a new resource with the same token as a resource that already exists, an exception occurs. If you omit this value, AWS SDKs will automatically generate a unique client request.
		 * Min length: 1
		 * Max length: 64
		 */
		ClientRequestToken?: string | null;

		/**
		 * The tag to attach to the specified resource. Tags are metadata that you can use to manage a resource.
		 * Minimum items: 0
		 * Maximum items: 200
		 */
		Tags?: Array<Tag>;

		/**
		 * Information about an import task created for bulk provisioning.
		 * Required
		 */
		Sidewalk: StartWirelessDeviceImportTaskPostBodySidewalk;
	}
	export interface StartWirelessDeviceImportTaskPostBodyFormProperties {

		/**
		 * The name of the Sidewalk destination that describes the IoT rule to route messages from the devices in the import task that are onboarded to AWS IoT Wireless.
		 * Required
		 * Max length: 128
		 */
		DestinationName: FormControl<string | null | undefined>,

		/**
		 * Each resource must have a unique client request token. If you try to create a new resource with the same token as a resource that already exists, an exception occurs. If you omit this value, AWS SDKs will automatically generate a unique client request.
		 * Min length: 1
		 * Max length: 64
		 */
		ClientRequestToken: FormControl<string | null | undefined>,
	}
	export function CreateStartWirelessDeviceImportTaskPostBodyFormGroup() {
		return new FormGroup<StartWirelessDeviceImportTaskPostBodyFormProperties>({
			DestinationName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.pattern('[a-zA-Z0-9-_]+')]),
			ClientRequestToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64), Validators.pattern('^[a-zA-Z0-9-_]+$')]),
		});

	}

	export interface StartWirelessDeviceImportTaskPostBodySidewalk {
		DeviceCreationFile?: string;
		Role?: string;
	}
	export interface StartWirelessDeviceImportTaskPostBodySidewalkFormProperties {
		DeviceCreationFile: FormControl<string | null | undefined>,
		Role: FormControl<string | null | undefined>,
	}
	export function CreateStartWirelessDeviceImportTaskPostBodySidewalkFormGroup() {
		return new FormGroup<StartWirelessDeviceImportTaskPostBodySidewalkFormProperties>({
			DeviceCreationFile: new FormControl<string | null | undefined>(undefined),
			Role: new FormControl<string | null | undefined>(undefined),
		});

	}

}

