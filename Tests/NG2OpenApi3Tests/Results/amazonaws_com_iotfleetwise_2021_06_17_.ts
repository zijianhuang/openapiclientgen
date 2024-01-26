import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface AssociateVehicleFleetResponse {
	}
	export interface AssociateVehicleFleetResponseFormProperties {
	}
	export function CreateAssociateVehicleFleetResponseFormGroup() {
		return new FormGroup<AssociateVehicleFleetResponseFormProperties>({
		});

	}

	export interface AssociateVehicleFleetRequest {

		/** Required */
		vehicleName: string;

		/** Required */
		fleetId: string;
	}
	export interface AssociateVehicleFleetRequestFormProperties {

		/** Required */
		vehicleName: FormControl<string | null | undefined>,

		/** Required */
		fleetId: FormControl<string | null | undefined>,
	}
	export function CreateAssociateVehicleFleetRequestFormGroup() {
		return new FormGroup<AssociateVehicleFleetRequestFormProperties>({
			vehicleName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			fleetId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

	export interface ResourceNotFoundException {
	}
	export interface ResourceNotFoundExceptionFormProperties {
	}
	export function CreateResourceNotFoundExceptionFormGroup() {
		return new FormGroup<ResourceNotFoundExceptionFormProperties>({
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

	export interface ValidationException {
	}
	export interface ValidationExceptionFormProperties {
	}
	export function CreateValidationExceptionFormGroup() {
		return new FormGroup<ValidationExceptionFormProperties>({
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

	export interface BatchCreateVehicleResponse {
		vehicles?: Array<CreateVehicleResponseItem>;
		errors?: Array<CreateVehicleError>;
	}
	export interface BatchCreateVehicleResponseFormProperties {
	}
	export function CreateBatchCreateVehicleResponseFormGroup() {
		return new FormGroup<BatchCreateVehicleResponseFormProperties>({
		});

	}


	/** Information about a created vehicle. */
	export interface CreateVehicleResponseItem {
		vehicleName?: string;
		arn?: string;
		thingArn?: string;
	}

	/** Information about a created vehicle. */
	export interface CreateVehicleResponseItemFormProperties {
		vehicleName: FormControl<string | null | undefined>,
		arn: FormControl<string | null | undefined>,
		thingArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateVehicleResponseItemFormGroup() {
		return new FormGroup<CreateVehicleResponseItemFormProperties>({
			vehicleName: new FormControl<string | null | undefined>(undefined),
			arn: new FormControl<string | null | undefined>(undefined),
			thingArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An HTTP error resulting from creating a vehicle. */
	export interface CreateVehicleError {
		vehicleName?: string;
		code?: string;
		message?: string;
	}

	/** An HTTP error resulting from creating a vehicle. */
	export interface CreateVehicleErrorFormProperties {
		vehicleName: FormControl<string | null | undefined>,
		code: FormControl<string | null | undefined>,
		message: FormControl<string | null | undefined>,
	}
	export function CreateCreateVehicleErrorFormGroup() {
		return new FormGroup<CreateVehicleErrorFormProperties>({
			vehicleName: new FormControl<string | null | undefined>(undefined),
			code: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BatchCreateVehicleRequest {

		/** Required */
		vehicles: Array<CreateVehicleRequestItem>;
	}
	export interface BatchCreateVehicleRequestFormProperties {
	}
	export function CreateBatchCreateVehicleRequestFormGroup() {
		return new FormGroup<BatchCreateVehicleRequestFormProperties>({
		});

	}


	/** Information about the vehicle to create. */
	export interface CreateVehicleRequestItem {

		/** Required */
		vehicleName: string;

		/** Required */
		modelManifestArn: string;

		/** Required */
		decoderManifestArn: string;
		attributes?: AttributesMap;
		associationBehavior?: VehicleAssociationBehavior;
		tags?: Array<Tag>;
	}

	/** Information about the vehicle to create. */
	export interface CreateVehicleRequestItemFormProperties {

		/** Required */
		vehicleName: FormControl<string | null | undefined>,

		/** Required */
		modelManifestArn: FormControl<string | null | undefined>,

		/** Required */
		decoderManifestArn: FormControl<string | null | undefined>,
		associationBehavior: FormControl<VehicleAssociationBehavior | null | undefined>,
	}
	export function CreateCreateVehicleRequestItemFormGroup() {
		return new FormGroup<CreateVehicleRequestItemFormProperties>({
			vehicleName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			modelManifestArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			decoderManifestArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			associationBehavior: new FormControl<VehicleAssociationBehavior | null | undefined>(undefined),
		});

	}

	export interface AttributesMap {
	}
	export interface AttributesMapFormProperties {
	}
	export function CreateAttributesMapFormGroup() {
		return new FormGroup<AttributesMapFormProperties>({
		});

	}

	export enum VehicleAssociationBehavior { CreateIotThing = 0, ValidateIotThingExists = 1 }


	/** A set of key/value pairs that are used to manage the resource. */
	export interface Tag {

		/** Required */
		Key: string;

		/** Required */
		Value: string;
	}

	/** A set of key/value pairs that are used to manage the resource. */
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

	export interface LimitExceededException {
	}
	export interface LimitExceededExceptionFormProperties {
	}
	export function CreateLimitExceededExceptionFormGroup() {
		return new FormGroup<LimitExceededExceptionFormProperties>({
		});

	}

	export interface BatchUpdateVehicleResponse {
		vehicles?: Array<UpdateVehicleResponseItem>;
		errors?: Array<UpdateVehicleError>;
	}
	export interface BatchUpdateVehicleResponseFormProperties {
	}
	export function CreateBatchUpdateVehicleResponseFormGroup() {
		return new FormGroup<BatchUpdateVehicleResponseFormProperties>({
		});

	}


	/** Information about the updated vehicle. */
	export interface UpdateVehicleResponseItem {
		vehicleName?: string;
		arn?: string;
	}

	/** Information about the updated vehicle. */
	export interface UpdateVehicleResponseItemFormProperties {
		vehicleName: FormControl<string | null | undefined>,
		arn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateVehicleResponseItemFormGroup() {
		return new FormGroup<UpdateVehicleResponseItemFormProperties>({
			vehicleName: new FormControl<string | null | undefined>(undefined),
			arn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An HTTP error resulting from updating the description for a vehicle. */
	export interface UpdateVehicleError {
		vehicleName?: string;
		code?: number | null;
		message?: string;
	}

	/** An HTTP error resulting from updating the description for a vehicle. */
	export interface UpdateVehicleErrorFormProperties {
		vehicleName: FormControl<string | null | undefined>,
		code: FormControl<number | null | undefined>,
		message: FormControl<string | null | undefined>,
	}
	export function CreateUpdateVehicleErrorFormGroup() {
		return new FormGroup<UpdateVehicleErrorFormProperties>({
			vehicleName: new FormControl<string | null | undefined>(undefined),
			code: new FormControl<number | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BatchUpdateVehicleRequest {

		/** Required */
		vehicles: Array<UpdateVehicleRequestItem>;
	}
	export interface BatchUpdateVehicleRequestFormProperties {
	}
	export function CreateBatchUpdateVehicleRequestFormGroup() {
		return new FormGroup<BatchUpdateVehicleRequestFormProperties>({
		});

	}


	/** Information about the vehicle to update. */
	export interface UpdateVehicleRequestItem {

		/** Required */
		vehicleName: string;
		modelManifestArn?: string;
		decoderManifestArn?: string;
		attributes?: AttributesMap;
		attributeUpdateMode?: UpdateMode;
	}

	/** Information about the vehicle to update. */
	export interface UpdateVehicleRequestItemFormProperties {

		/** Required */
		vehicleName: FormControl<string | null | undefined>,
		modelManifestArn: FormControl<string | null | undefined>,
		decoderManifestArn: FormControl<string | null | undefined>,
		attributeUpdateMode: FormControl<UpdateMode | null | undefined>,
	}
	export function CreateUpdateVehicleRequestItemFormGroup() {
		return new FormGroup<UpdateVehicleRequestItemFormProperties>({
			vehicleName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			modelManifestArn: new FormControl<string | null | undefined>(undefined),
			decoderManifestArn: new FormControl<string | null | undefined>(undefined),
			attributeUpdateMode: new FormControl<UpdateMode | null | undefined>(undefined),
		});

	}

	export enum UpdateMode { Overwrite = 0, Merge = 1 }

	export interface CreateCampaignResponse {
		name?: string;
		arn?: string;
	}
	export interface CreateCampaignResponseFormProperties {
		name: FormControl<string | null | undefined>,
		arn: FormControl<string | null | undefined>,
	}
	export function CreateCreateCampaignResponseFormGroup() {
		return new FormGroup<CreateCampaignResponseFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			arn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateCampaignRequest {

		/** Required */
		name: string;
		description?: string;

		/** Required */
		signalCatalogArn: string;

		/** Required */
		targetArn: string;
		startTime?: Date;
		expiryTime?: Date;
		postTriggerCollectionDuration?: number | null;
		diagnosticsMode?: DiagnosticsMode;
		spoolingMode?: SpoolingMode;
		compression?: Compression;
		priority?: number | null;
		signalsToCollect?: Array<SignalInformation>;

		/** Required */
		collectionScheme: CollectionScheme;
		dataExtraDimensions?: Array<string>;
		tags?: Array<Tag>;
		dataDestinationConfigs?: Array<DataDestinationConfig>;
	}
	export interface CreateCampaignRequestFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,

		/** Required */
		signalCatalogArn: FormControl<string | null | undefined>,

		/** Required */
		targetArn: FormControl<string | null | undefined>,
		startTime: FormControl<Date | null | undefined>,
		expiryTime: FormControl<Date | null | undefined>,
		postTriggerCollectionDuration: FormControl<number | null | undefined>,
		diagnosticsMode: FormControl<DiagnosticsMode | null | undefined>,
		spoolingMode: FormControl<SpoolingMode | null | undefined>,
		compression: FormControl<Compression | null | undefined>,
		priority: FormControl<number | null | undefined>,
	}
	export function CreateCreateCampaignRequestFormGroup() {
		return new FormGroup<CreateCampaignRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
			signalCatalogArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			targetArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			startTime: new FormControl<Date | null | undefined>(undefined),
			expiryTime: new FormControl<Date | null | undefined>(undefined),
			postTriggerCollectionDuration: new FormControl<number | null | undefined>(undefined),
			diagnosticsMode: new FormControl<DiagnosticsMode | null | undefined>(undefined),
			spoolingMode: new FormControl<SpoolingMode | null | undefined>(undefined),
			compression: new FormControl<Compression | null | undefined>(undefined),
			priority: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum DiagnosticsMode { OFF = 0, SEND_ACTIVE_DTCS = 1 }

	export enum SpoolingMode { OFF = 0, TO_DISK = 1 }

	export enum Compression { OFF = 0, SNAPPY = 1 }


	/** Information about a signal. */
	export interface SignalInformation {

		/** Required */
		name: string;
		maxSampleCount?: number | null;
		minimumSamplingIntervalMs?: number | null;
	}

	/** Information about a signal. */
	export interface SignalInformationFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,
		maxSampleCount: FormControl<number | null | undefined>,
		minimumSamplingIntervalMs: FormControl<number | null | undefined>,
	}
	export function CreateSignalInformationFormGroup() {
		return new FormGroup<SignalInformationFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			maxSampleCount: new FormControl<number | null | undefined>(undefined),
			minimumSamplingIntervalMs: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Specifies what data to collect and how often or when to collect it. */
	export interface CollectionScheme {
		timeBasedCollectionScheme?: TimeBasedCollectionScheme;
		conditionBasedCollectionScheme?: ConditionBasedCollectionScheme;
	}

	/** Specifies what data to collect and how often or when to collect it. */
	export interface CollectionSchemeFormProperties {
	}
	export function CreateCollectionSchemeFormGroup() {
		return new FormGroup<CollectionSchemeFormProperties>({
		});

	}


	/** Information about a collection scheme that uses a time period to decide how often to collect data. */
	export interface TimeBasedCollectionScheme {

		/** Required */
		periodMs: number;
	}

	/** Information about a collection scheme that uses a time period to decide how often to collect data. */
	export interface TimeBasedCollectionSchemeFormProperties {

		/** Required */
		periodMs: FormControl<number | null | undefined>,
	}
	export function CreateTimeBasedCollectionSchemeFormGroup() {
		return new FormGroup<TimeBasedCollectionSchemeFormProperties>({
			periodMs: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Information about a collection scheme that uses a simple logical expression to recognize what data to collect. */
	export interface ConditionBasedCollectionScheme {

		/** Required */
		expression: string;
		minimumTriggerIntervalMs?: number | null;
		triggerMode?: TriggerMode;
		conditionLanguageVersion?: number | null;
	}

	/** Information about a collection scheme that uses a simple logical expression to recognize what data to collect. */
	export interface ConditionBasedCollectionSchemeFormProperties {

		/** Required */
		expression: FormControl<string | null | undefined>,
		minimumTriggerIntervalMs: FormControl<number | null | undefined>,
		triggerMode: FormControl<TriggerMode | null | undefined>,
		conditionLanguageVersion: FormControl<number | null | undefined>,
	}
	export function CreateConditionBasedCollectionSchemeFormGroup() {
		return new FormGroup<ConditionBasedCollectionSchemeFormProperties>({
			expression: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			minimumTriggerIntervalMs: new FormControl<number | null | undefined>(undefined),
			triggerMode: new FormControl<TriggerMode | null | undefined>(undefined),
			conditionLanguageVersion: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum TriggerMode { ALWAYS = 0, RISING_EDGE = 1 }


	/** The destination where the Amazon Web Services IoT FleetWise campaign sends data. You can send data to be stored in Amazon S3 or Amazon Timestream. */
	export interface DataDestinationConfig {
		s3Config?: S3Config;
		timestreamConfig?: TimestreamConfig;
	}

	/** The destination where the Amazon Web Services IoT FleetWise campaign sends data. You can send data to be stored in Amazon S3 or Amazon Timestream. */
	export interface DataDestinationConfigFormProperties {
	}
	export function CreateDataDestinationConfigFormGroup() {
		return new FormGroup<DataDestinationConfigFormProperties>({
		});

	}


	/** The Amazon S3 bucket where the Amazon Web Services IoT FleetWise campaign sends data. Amazon S3 is an object storage service that stores data as objects within buckets. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-buckets-s3.html">Creating, configuring, and working with Amazon S3 buckets</a> in the <i>Amazon Simple Storage Service User Guide</i>. */
	export interface S3Config {

		/** Required */
		bucketArn: string;
		dataFormat?: DataFormat;
		storageCompressionFormat?: StorageCompressionFormat;
		prefix?: string;
	}

	/** The Amazon S3 bucket where the Amazon Web Services IoT FleetWise campaign sends data. Amazon S3 is an object storage service that stores data as objects within buckets. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-buckets-s3.html">Creating, configuring, and working with Amazon S3 buckets</a> in the <i>Amazon Simple Storage Service User Guide</i>. */
	export interface S3ConfigFormProperties {

		/** Required */
		bucketArn: FormControl<string | null | undefined>,
		dataFormat: FormControl<DataFormat | null | undefined>,
		storageCompressionFormat: FormControl<StorageCompressionFormat | null | undefined>,
		prefix: FormControl<string | null | undefined>,
	}
	export function CreateS3ConfigFormGroup() {
		return new FormGroup<S3ConfigFormProperties>({
			bucketArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			dataFormat: new FormControl<DataFormat | null | undefined>(undefined),
			storageCompressionFormat: new FormControl<StorageCompressionFormat | null | undefined>(undefined),
			prefix: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DataFormat { JSON = 0, PARQUET = 1 }

	export enum StorageCompressionFormat { NONE = 0, GZIP = 1 }


	/** The Amazon Timestream table where the Amazon Web Services IoT FleetWise campaign sends data. Timestream stores and organizes data to optimize query processing time and to reduce storage costs. For more information, see <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/data-modeling.html">Data modeling</a> in the <i>Amazon Timestream Developer Guide</i>. */
	export interface TimestreamConfig {

		/** Required */
		timestreamTableArn: string;

		/** Required */
		executionRoleArn: string;
	}

	/** The Amazon Timestream table where the Amazon Web Services IoT FleetWise campaign sends data. Timestream stores and organizes data to optimize query processing time and to reduce storage costs. For more information, see <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/data-modeling.html">Data modeling</a> in the <i>Amazon Timestream Developer Guide</i>. */
	export interface TimestreamConfigFormProperties {

		/** Required */
		timestreamTableArn: FormControl<string | null | undefined>,

		/** Required */
		executionRoleArn: FormControl<string | null | undefined>,
	}
	export function CreateTimestreamConfigFormGroup() {
		return new FormGroup<TimestreamConfigFormProperties>({
			timestreamTableArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			executionRoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

	export interface CreateDecoderManifestResponse {

		/** Required */
		name: string;

		/** Required */
		arn: string;
	}
	export interface CreateDecoderManifestResponseFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		arn: FormControl<string | null | undefined>,
	}
	export function CreateCreateDecoderManifestResponseFormGroup() {
		return new FormGroup<CreateDecoderManifestResponseFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateDecoderManifestRequest {

		/** Required */
		name: string;
		description?: string;

		/** Required */
		modelManifestArn: string;
		signalDecoders?: Array<SignalDecoder>;
		networkInterfaces?: Array<NetworkInterface>;
		tags?: Array<Tag>;
	}
	export interface CreateDecoderManifestRequestFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,

		/** Required */
		modelManifestArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateDecoderManifestRequestFormGroup() {
		return new FormGroup<CreateDecoderManifestRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
			modelManifestArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Information about a signal decoder. */
	export interface SignalDecoder {

		/** Required */
		fullyQualifiedName: string;

		/** Required */
		type: SignalDecoderType;

		/** Required */
		interfaceId: string;
		canSignal?: CanSignal;
		obdSignal?: ObdSignal;
	}

	/** Information about a signal decoder. */
	export interface SignalDecoderFormProperties {

		/** Required */
		fullyQualifiedName: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<SignalDecoderType | null | undefined>,

		/** Required */
		interfaceId: FormControl<string | null | undefined>,
	}
	export function CreateSignalDecoderFormGroup() {
		return new FormGroup<SignalDecoderFormProperties>({
			fullyQualifiedName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<SignalDecoderType | null | undefined>(undefined, [Validators.required]),
			interfaceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum SignalDecoderType { CAN_SIGNAL = 0, OBD_SIGNAL = 1 }


	/** Information about a single controller area network (CAN) signal and the messages it receives and transmits. */
	export interface CanSignal {

		/** Required */
		messageId: number;

		/** Required */
		isBigEndian: boolean;

		/** Required */
		isSigned: boolean;

		/** Required */
		startBit: number;

		/** Required */
		offset: number;

		/** Required */
		factor: number;

		/** Required */
		length: number;
		name?: string;
	}

	/** Information about a single controller area network (CAN) signal and the messages it receives and transmits. */
	export interface CanSignalFormProperties {

		/** Required */
		messageId: FormControl<number | null | undefined>,

		/** Required */
		isBigEndian: FormControl<boolean | null | undefined>,

		/** Required */
		isSigned: FormControl<boolean | null | undefined>,

		/** Required */
		startBit: FormControl<number | null | undefined>,

		/** Required */
		offset: FormControl<number | null | undefined>,

		/** Required */
		factor: FormControl<number | null | undefined>,

		/** Required */
		length: FormControl<number | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateCanSignalFormGroup() {
		return new FormGroup<CanSignalFormProperties>({
			messageId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			isBigEndian: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			isSigned: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			startBit: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			offset: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			factor: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			length: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about signal messages using the on-board diagnostics (OBD) II protocol in a vehicle. */
	export interface ObdSignal {

		/** Required */
		pidResponseLength: number;

		/** Required */
		serviceMode: number;

		/** Required */
		pid: number;

		/** Required */
		scaling: number;

		/** Required */
		offset: number;

		/** Required */
		startByte: number;

		/** Required */
		byteLength: number;
		bitRightShift?: number | null;
		bitMaskLength?: number | null;
	}

	/** Information about signal messages using the on-board diagnostics (OBD) II protocol in a vehicle. */
	export interface ObdSignalFormProperties {

		/** Required */
		pidResponseLength: FormControl<number | null | undefined>,

		/** Required */
		serviceMode: FormControl<number | null | undefined>,

		/** Required */
		pid: FormControl<number | null | undefined>,

		/** Required */
		scaling: FormControl<number | null | undefined>,

		/** Required */
		offset: FormControl<number | null | undefined>,

		/** Required */
		startByte: FormControl<number | null | undefined>,

		/** Required */
		byteLength: FormControl<number | null | undefined>,
		bitRightShift: FormControl<number | null | undefined>,
		bitMaskLength: FormControl<number | null | undefined>,
	}
	export function CreateObdSignalFormGroup() {
		return new FormGroup<ObdSignalFormProperties>({
			pidResponseLength: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			serviceMode: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			pid: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			scaling: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			offset: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			startByte: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			byteLength: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			bitRightShift: new FormControl<number | null | undefined>(undefined),
			bitMaskLength: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** <p>Represents a node and its specifications in an in-vehicle communication network. All signal decoders must be associated with a network node. </p> <p> To return this information about all the network interfaces specified in a decoder manifest, use the API operation.</p> */
	export interface NetworkInterface {

		/** Required */
		interfaceId: string;

		/** Required */
		type: NetworkInterfaceType;
		canInterface?: CanInterface;
		obdInterface?: ObdInterface;
	}

	/** <p>Represents a node and its specifications in an in-vehicle communication network. All signal decoders must be associated with a network node. </p> <p> To return this information about all the network interfaces specified in a decoder manifest, use the API operation.</p> */
	export interface NetworkInterfaceFormProperties {

		/** Required */
		interfaceId: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<NetworkInterfaceType | null | undefined>,
	}
	export function CreateNetworkInterfaceFormGroup() {
		return new FormGroup<NetworkInterfaceFormProperties>({
			interfaceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<NetworkInterfaceType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum NetworkInterfaceType { CAN_INTERFACE = 0, OBD_INTERFACE = 1 }


	/** A single controller area network (CAN) device interface. */
	export interface CanInterface {

		/** Required */
		name: string;
		protocolName?: string;
		protocolVersion?: string;
	}

	/** A single controller area network (CAN) device interface. */
	export interface CanInterfaceFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,
		protocolName: FormControl<string | null | undefined>,
		protocolVersion: FormControl<string | null | undefined>,
	}
	export function CreateCanInterfaceFormGroup() {
		return new FormGroup<CanInterfaceFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			protocolName: new FormControl<string | null | undefined>(undefined),
			protocolVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A network interface that specifies the On-board diagnostic (OBD) II network protocol. */
	export interface ObdInterface {

		/** Required */
		name: string;

		/** Required */
		requestMessageId: number;
		obdStandard?: string;
		pidRequestIntervalSeconds?: number | null;
		dtcRequestIntervalSeconds?: number | null;
		useExtendedIds?: boolean | null;
		hasTransmissionEcu?: boolean | null;
	}

	/** A network interface that specifies the On-board diagnostic (OBD) II network protocol. */
	export interface ObdInterfaceFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		requestMessageId: FormControl<number | null | undefined>,
		obdStandard: FormControl<string | null | undefined>,
		pidRequestIntervalSeconds: FormControl<number | null | undefined>,
		dtcRequestIntervalSeconds: FormControl<number | null | undefined>,
		useExtendedIds: FormControl<boolean | null | undefined>,
		hasTransmissionEcu: FormControl<boolean | null | undefined>,
	}
	export function CreateObdInterfaceFormGroup() {
		return new FormGroup<ObdInterfaceFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			requestMessageId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			obdStandard: new FormControl<string | null | undefined>(undefined),
			pidRequestIntervalSeconds: new FormControl<number | null | undefined>(undefined),
			dtcRequestIntervalSeconds: new FormControl<number | null | undefined>(undefined),
			useExtendedIds: new FormControl<boolean | null | undefined>(undefined),
			hasTransmissionEcu: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface DecoderManifestValidationException {
	}
	export interface DecoderManifestValidationExceptionFormProperties {
	}
	export function CreateDecoderManifestValidationExceptionFormGroup() {
		return new FormGroup<DecoderManifestValidationExceptionFormProperties>({
		});

	}

	export interface CreateFleetResponse {

		/** Required */
		id: string;

		/** Required */
		arn: string;
	}
	export interface CreateFleetResponseFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		arn: FormControl<string | null | undefined>,
	}
	export function CreateCreateFleetResponseFormGroup() {
		return new FormGroup<CreateFleetResponseFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateFleetRequest {

		/** Required */
		fleetId: string;
		description?: string;

		/** Required */
		signalCatalogArn: string;
		tags?: Array<Tag>;
	}
	export interface CreateFleetRequestFormProperties {

		/** Required */
		fleetId: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,

		/** Required */
		signalCatalogArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateFleetRequestFormGroup() {
		return new FormGroup<CreateFleetRequestFormProperties>({
			fleetId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
			signalCatalogArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateModelManifestResponse {

		/** Required */
		name: string;

		/** Required */
		arn: string;
	}
	export interface CreateModelManifestResponseFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		arn: FormControl<string | null | undefined>,
	}
	export function CreateCreateModelManifestResponseFormGroup() {
		return new FormGroup<CreateModelManifestResponseFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateModelManifestRequest {

		/** Required */
		name: string;
		description?: string;

		/** Required */
		nodes: Array<string>;

		/** Required */
		signalCatalogArn: string;
		tags?: Array<Tag>;
	}
	export interface CreateModelManifestRequestFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,

		/** Required */
		signalCatalogArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateModelManifestRequestFormGroup() {
		return new FormGroup<CreateModelManifestRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
			signalCatalogArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface InvalidSignalsException {
	}
	export interface InvalidSignalsExceptionFormProperties {
	}
	export function CreateInvalidSignalsExceptionFormGroup() {
		return new FormGroup<InvalidSignalsExceptionFormProperties>({
		});

	}

	export interface CreateSignalCatalogResponse {

		/** Required */
		name: string;

		/** Required */
		arn: string;
	}
	export interface CreateSignalCatalogResponseFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		arn: FormControl<string | null | undefined>,
	}
	export function CreateCreateSignalCatalogResponseFormGroup() {
		return new FormGroup<CreateSignalCatalogResponseFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateSignalCatalogRequest {

		/** Required */
		name: string;
		description?: string;
		nodes?: Array<Node>;
		tags?: Array<Tag>;
	}
	export interface CreateSignalCatalogRequestFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
	}
	export function CreateCreateSignalCatalogRequestFormGroup() {
		return new FormGroup<CreateSignalCatalogRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A general abstraction of a signal. A node can be specified as an actuator, attribute, branch, or sensor. */
	export interface Node {
		branch?: Branch;

		/** <p>An input component that reports the environmental condition of a vehicle.</p> <note> <p>You can collect data about fluid levels, temperatures, vibrations, or battery voltage from sensors.</p> </note> */
		sensor?: Sensor;
		actuator?: Actuator;
		attribute?: Attribute;
	}

	/** A general abstraction of a signal. A node can be specified as an actuator, attribute, branch, or sensor. */
	export interface NodeFormProperties {
	}
	export function CreateNodeFormGroup() {
		return new FormGroup<NodeFormProperties>({
		});

	}


	/** A group of signals that are defined in a hierarchical structure. */
	export interface Branch {

		/** Required */
		fullyQualifiedName: string;
		description?: string;
		deprecationMessage?: string;
		comment?: string;
	}

	/** A group of signals that are defined in a hierarchical structure. */
	export interface BranchFormProperties {

		/** Required */
		fullyQualifiedName: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		deprecationMessage: FormControl<string | null | undefined>,
		comment: FormControl<string | null | undefined>,
	}
	export function CreateBranchFormGroup() {
		return new FormGroup<BranchFormProperties>({
			fullyQualifiedName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
			deprecationMessage: new FormControl<string | null | undefined>(undefined),
			comment: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>An input component that reports the environmental condition of a vehicle.</p> <note> <p>You can collect data about fluid levels, temperatures, vibrations, or battery voltage from sensors.</p> </note> */
	export interface Sensor {

		/** Required */
		fullyQualifiedName: string;

		/** Required */
		dataType: NodeDataType;
		description?: string;
		unit?: string;
		allowedValues?: Array<string>;
		min?: number | null;
		max?: number | null;
		deprecationMessage?: string;
		comment?: string;
	}

	/** <p>An input component that reports the environmental condition of a vehicle.</p> <note> <p>You can collect data about fluid levels, temperatures, vibrations, or battery voltage from sensors.</p> </note> */
	export interface SensorFormProperties {

		/** Required */
		fullyQualifiedName: FormControl<string | null | undefined>,

		/** Required */
		dataType: FormControl<NodeDataType | null | undefined>,
		description: FormControl<string | null | undefined>,
		unit: FormControl<string | null | undefined>,
		min: FormControl<number | null | undefined>,
		max: FormControl<number | null | undefined>,
		deprecationMessage: FormControl<string | null | undefined>,
		comment: FormControl<string | null | undefined>,
	}
	export function CreateSensorFormGroup() {
		return new FormGroup<SensorFormProperties>({
			fullyQualifiedName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			dataType: new FormControl<NodeDataType | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
			unit: new FormControl<string | null | undefined>(undefined),
			min: new FormControl<number | null | undefined>(undefined),
			max: new FormControl<number | null | undefined>(undefined),
			deprecationMessage: new FormControl<string | null | undefined>(undefined),
			comment: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum NodeDataType { INT8 = 0, UINT8 = 1, INT16 = 2, UINT16 = 3, INT32 = 4, UINT32 = 5, INT64 = 6, UINT64 = 7, BOOLEAN = 8, FLOAT = 9, DOUBLE = 10, STRING = 11, UNIX_TIMESTAMP = 12, INT8_ARRAY = 13, UINT8_ARRAY = 14, INT16_ARRAY = 15, UINT16_ARRAY = 16, INT32_ARRAY = 17, UINT32_ARRAY = 18, INT64_ARRAY = 19, UINT64_ARRAY = 20, BOOLEAN_ARRAY = 21, FLOAT_ARRAY = 22, DOUBLE_ARRAY = 23, STRING_ARRAY = 24, UNIX_TIMESTAMP_ARRAY = 25, UNKNOWN = 26 }


	/** <p>A signal that represents a vehicle device such as the engine, heater, and door locks. Data from an actuator reports the state of a certain vehicle device.</p> <note> <p> Updating actuator data can change the state of a device. For example, you can turn on or off the heater by updating its actuator data.</p> </note> */
	export interface Actuator {

		/** Required */
		fullyQualifiedName: string;

		/** Required */
		dataType: NodeDataType;
		description?: string;
		unit?: string;
		allowedValues?: Array<string>;
		min?: number | null;
		max?: number | null;
		assignedValue?: string;
		deprecationMessage?: string;
		comment?: string;
	}

	/** <p>A signal that represents a vehicle device such as the engine, heater, and door locks. Data from an actuator reports the state of a certain vehicle device.</p> <note> <p> Updating actuator data can change the state of a device. For example, you can turn on or off the heater by updating its actuator data.</p> </note> */
	export interface ActuatorFormProperties {

		/** Required */
		fullyQualifiedName: FormControl<string | null | undefined>,

		/** Required */
		dataType: FormControl<NodeDataType | null | undefined>,
		description: FormControl<string | null | undefined>,
		unit: FormControl<string | null | undefined>,
		min: FormControl<number | null | undefined>,
		max: FormControl<number | null | undefined>,
		assignedValue: FormControl<string | null | undefined>,
		deprecationMessage: FormControl<string | null | undefined>,
		comment: FormControl<string | null | undefined>,
	}
	export function CreateActuatorFormGroup() {
		return new FormGroup<ActuatorFormProperties>({
			fullyQualifiedName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			dataType: new FormControl<NodeDataType | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
			unit: new FormControl<string | null | undefined>(undefined),
			min: new FormControl<number | null | undefined>(undefined),
			max: new FormControl<number | null | undefined>(undefined),
			assignedValue: new FormControl<string | null | undefined>(undefined),
			deprecationMessage: new FormControl<string | null | undefined>(undefined),
			comment: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A signal that represents static information about the vehicle, such as engine type or manufacturing date. */
	export interface Attribute {

		/** Required */
		fullyQualifiedName: string;

		/** Required */
		dataType: NodeDataType;
		description?: string;
		unit?: string;
		allowedValues?: Array<string>;
		min?: number | null;
		max?: number | null;
		assignedValue?: string;
		defaultValue?: string;
		deprecationMessage?: string;
		comment?: string;
	}

	/** A signal that represents static information about the vehicle, such as engine type or manufacturing date. */
	export interface AttributeFormProperties {

		/** Required */
		fullyQualifiedName: FormControl<string | null | undefined>,

		/** Required */
		dataType: FormControl<NodeDataType | null | undefined>,
		description: FormControl<string | null | undefined>,
		unit: FormControl<string | null | undefined>,
		min: FormControl<number | null | undefined>,
		max: FormControl<number | null | undefined>,
		assignedValue: FormControl<string | null | undefined>,
		defaultValue: FormControl<string | null | undefined>,
		deprecationMessage: FormControl<string | null | undefined>,
		comment: FormControl<string | null | undefined>,
	}
	export function CreateAttributeFormGroup() {
		return new FormGroup<AttributeFormProperties>({
			fullyQualifiedName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			dataType: new FormControl<NodeDataType | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
			unit: new FormControl<string | null | undefined>(undefined),
			min: new FormControl<number | null | undefined>(undefined),
			max: new FormControl<number | null | undefined>(undefined),
			assignedValue: new FormControl<string | null | undefined>(undefined),
			defaultValue: new FormControl<string | null | undefined>(undefined),
			deprecationMessage: new FormControl<string | null | undefined>(undefined),
			comment: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface InvalidNodeException {
	}
	export interface InvalidNodeExceptionFormProperties {
	}
	export function CreateInvalidNodeExceptionFormGroup() {
		return new FormGroup<InvalidNodeExceptionFormProperties>({
		});

	}

	export interface CreateVehicleResponse {
		vehicleName?: string;
		arn?: string;
		thingArn?: string;
	}
	export interface CreateVehicleResponseFormProperties {
		vehicleName: FormControl<string | null | undefined>,
		arn: FormControl<string | null | undefined>,
		thingArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateVehicleResponseFormGroup() {
		return new FormGroup<CreateVehicleResponseFormProperties>({
			vehicleName: new FormControl<string | null | undefined>(undefined),
			arn: new FormControl<string | null | undefined>(undefined),
			thingArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateVehicleRequest {

		/** Required */
		vehicleName: string;

		/** Required */
		modelManifestArn: string;

		/** Required */
		decoderManifestArn: string;
		attributes?: AttributesMap;
		associationBehavior?: VehicleAssociationBehavior;
		tags?: Array<Tag>;
	}
	export interface CreateVehicleRequestFormProperties {

		/** Required */
		vehicleName: FormControl<string | null | undefined>,

		/** Required */
		modelManifestArn: FormControl<string | null | undefined>,

		/** Required */
		decoderManifestArn: FormControl<string | null | undefined>,
		associationBehavior: FormControl<VehicleAssociationBehavior | null | undefined>,
	}
	export function CreateCreateVehicleRequestFormGroup() {
		return new FormGroup<CreateVehicleRequestFormProperties>({
			vehicleName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			modelManifestArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			decoderManifestArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			associationBehavior: new FormControl<VehicleAssociationBehavior | null | undefined>(undefined),
		});

	}

	export interface DeleteCampaignResponse {
		name?: string;
		arn?: string;
	}
	export interface DeleteCampaignResponseFormProperties {
		name: FormControl<string | null | undefined>,
		arn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteCampaignResponseFormGroup() {
		return new FormGroup<DeleteCampaignResponseFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			arn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteCampaignRequest {

		/** Required */
		name: string;
	}
	export interface DeleteCampaignRequestFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,
	}
	export function CreateDeleteCampaignRequestFormGroup() {
		return new FormGroup<DeleteCampaignRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteDecoderManifestResponse {

		/** Required */
		name: string;

		/** Required */
		arn: string;
	}
	export interface DeleteDecoderManifestResponseFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		arn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteDecoderManifestResponseFormGroup() {
		return new FormGroup<DeleteDecoderManifestResponseFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteDecoderManifestRequest {

		/** Required */
		name: string;
	}
	export interface DeleteDecoderManifestRequestFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,
	}
	export function CreateDeleteDecoderManifestRequestFormGroup() {
		return new FormGroup<DeleteDecoderManifestRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteFleetResponse {
		id?: string;
		arn?: string;
	}
	export interface DeleteFleetResponseFormProperties {
		id: FormControl<string | null | undefined>,
		arn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteFleetResponseFormGroup() {
		return new FormGroup<DeleteFleetResponseFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			arn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteFleetRequest {

		/** Required */
		fleetId: string;
	}
	export interface DeleteFleetRequestFormProperties {

		/** Required */
		fleetId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteFleetRequestFormGroup() {
		return new FormGroup<DeleteFleetRequestFormProperties>({
			fleetId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteModelManifestResponse {

		/** Required */
		name: string;

		/** Required */
		arn: string;
	}
	export interface DeleteModelManifestResponseFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		arn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteModelManifestResponseFormGroup() {
		return new FormGroup<DeleteModelManifestResponseFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteModelManifestRequest {

		/** Required */
		name: string;
	}
	export interface DeleteModelManifestRequestFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,
	}
	export function CreateDeleteModelManifestRequestFormGroup() {
		return new FormGroup<DeleteModelManifestRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteSignalCatalogResponse {

		/** Required */
		name: string;

		/** Required */
		arn: string;
	}
	export interface DeleteSignalCatalogResponseFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		arn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteSignalCatalogResponseFormGroup() {
		return new FormGroup<DeleteSignalCatalogResponseFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteSignalCatalogRequest {

		/** Required */
		name: string;
	}
	export interface DeleteSignalCatalogRequestFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,
	}
	export function CreateDeleteSignalCatalogRequestFormGroup() {
		return new FormGroup<DeleteSignalCatalogRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteVehicleResponse {

		/** Required */
		vehicleName: string;

		/** Required */
		arn: string;
	}
	export interface DeleteVehicleResponseFormProperties {

		/** Required */
		vehicleName: FormControl<string | null | undefined>,

		/** Required */
		arn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteVehicleResponseFormGroup() {
		return new FormGroup<DeleteVehicleResponseFormProperties>({
			vehicleName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteVehicleRequest {

		/** Required */
		vehicleName: string;
	}
	export interface DeleteVehicleRequestFormProperties {

		/** Required */
		vehicleName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteVehicleRequestFormGroup() {
		return new FormGroup<DeleteVehicleRequestFormProperties>({
			vehicleName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DisassociateVehicleFleetResponse {
	}
	export interface DisassociateVehicleFleetResponseFormProperties {
	}
	export function CreateDisassociateVehicleFleetResponseFormGroup() {
		return new FormGroup<DisassociateVehicleFleetResponseFormProperties>({
		});

	}

	export interface DisassociateVehicleFleetRequest {

		/** Required */
		vehicleName: string;

		/** Required */
		fleetId: string;
	}
	export interface DisassociateVehicleFleetRequestFormProperties {

		/** Required */
		vehicleName: FormControl<string | null | undefined>,

		/** Required */
		fleetId: FormControl<string | null | undefined>,
	}
	export function CreateDisassociateVehicleFleetRequestFormGroup() {
		return new FormGroup<DisassociateVehicleFleetRequestFormProperties>({
			vehicleName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			fleetId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetCampaignResponse {
		name?: string;
		arn?: string;
		description?: string;
		signalCatalogArn?: string;
		targetArn?: string;
		status?: CampaignStatus;
		startTime?: Date;
		expiryTime?: Date;
		postTriggerCollectionDuration?: number | null;
		diagnosticsMode?: DiagnosticsMode;
		spoolingMode?: SpoolingMode;
		compression?: Compression;
		priority?: number | null;
		signalsToCollect?: Array<SignalInformation>;
		collectionScheme?: CollectionScheme;
		dataExtraDimensions?: Array<string>;
		creationTime?: Date;
		lastModificationTime?: Date;
		dataDestinationConfigs?: Array<DataDestinationConfig>;
	}
	export interface GetCampaignResponseFormProperties {
		name: FormControl<string | null | undefined>,
		arn: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		signalCatalogArn: FormControl<string | null | undefined>,
		targetArn: FormControl<string | null | undefined>,
		status: FormControl<CampaignStatus | null | undefined>,
		startTime: FormControl<Date | null | undefined>,
		expiryTime: FormControl<Date | null | undefined>,
		postTriggerCollectionDuration: FormControl<number | null | undefined>,
		diagnosticsMode: FormControl<DiagnosticsMode | null | undefined>,
		spoolingMode: FormControl<SpoolingMode | null | undefined>,
		compression: FormControl<Compression | null | undefined>,
		priority: FormControl<number | null | undefined>,
		creationTime: FormControl<Date | null | undefined>,
		lastModificationTime: FormControl<Date | null | undefined>,
	}
	export function CreateGetCampaignResponseFormGroup() {
		return new FormGroup<GetCampaignResponseFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			arn: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			signalCatalogArn: new FormControl<string | null | undefined>(undefined),
			targetArn: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<CampaignStatus | null | undefined>(undefined),
			startTime: new FormControl<Date | null | undefined>(undefined),
			expiryTime: new FormControl<Date | null | undefined>(undefined),
			postTriggerCollectionDuration: new FormControl<number | null | undefined>(undefined),
			diagnosticsMode: new FormControl<DiagnosticsMode | null | undefined>(undefined),
			spoolingMode: new FormControl<SpoolingMode | null | undefined>(undefined),
			compression: new FormControl<Compression | null | undefined>(undefined),
			priority: new FormControl<number | null | undefined>(undefined),
			creationTime: new FormControl<Date | null | undefined>(undefined),
			lastModificationTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum CampaignStatus { CREATING = 0, WAITING_FOR_APPROVAL = 1, RUNNING = 2, SUSPENDED = 3 }

	export interface GetCampaignRequest {

		/** Required */
		name: string;
	}
	export interface GetCampaignRequestFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGetCampaignRequestFormGroup() {
		return new FormGroup<GetCampaignRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetDecoderManifestResponse {

		/** Required */
		name: string;

		/** Required */
		arn: string;
		description?: string;
		modelManifestArn?: string;
		status?: ManifestStatus;

		/** Required */
		creationTime: Date;

		/** Required */
		lastModificationTime: Date;
	}
	export interface GetDecoderManifestResponseFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		arn: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		modelManifestArn: FormControl<string | null | undefined>,
		status: FormControl<ManifestStatus | null | undefined>,

		/** Required */
		creationTime: FormControl<Date | null | undefined>,

		/** Required */
		lastModificationTime: FormControl<Date | null | undefined>,
	}
	export function CreateGetDecoderManifestResponseFormGroup() {
		return new FormGroup<GetDecoderManifestResponseFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
			modelManifestArn: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<ManifestStatus | null | undefined>(undefined),
			creationTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			lastModificationTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ManifestStatus { ACTIVE = 0, DRAFT = 1 }

	export interface GetDecoderManifestRequest {

		/** Required */
		name: string;
	}
	export interface GetDecoderManifestRequestFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGetDecoderManifestRequestFormGroup() {
		return new FormGroup<GetDecoderManifestRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetFleetResponse {

		/** Required */
		id: string;

		/** Required */
		arn: string;
		description?: string;

		/** Required */
		signalCatalogArn: string;

		/** Required */
		creationTime: Date;

		/** Required */
		lastModificationTime: Date;
	}
	export interface GetFleetResponseFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		arn: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,

		/** Required */
		signalCatalogArn: FormControl<string | null | undefined>,

		/** Required */
		creationTime: FormControl<Date | null | undefined>,

		/** Required */
		lastModificationTime: FormControl<Date | null | undefined>,
	}
	export function CreateGetFleetResponseFormGroup() {
		return new FormGroup<GetFleetResponseFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
			signalCatalogArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			creationTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			lastModificationTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetFleetRequest {

		/** Required */
		fleetId: string;
	}
	export interface GetFleetRequestFormProperties {

		/** Required */
		fleetId: FormControl<string | null | undefined>,
	}
	export function CreateGetFleetRequestFormGroup() {
		return new FormGroup<GetFleetRequestFormProperties>({
			fleetId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetLoggingOptionsResponse {

		/** Required */
		cloudWatchLogDelivery: CloudWatchLogDeliveryOptions;
	}
	export interface GetLoggingOptionsResponseFormProperties {
	}
	export function CreateGetLoggingOptionsResponseFormGroup() {
		return new FormGroup<GetLoggingOptionsResponseFormProperties>({
		});

	}


	/** The log delivery option to send data to Amazon CloudWatch Logs. */
	export interface CloudWatchLogDeliveryOptions {

		/** Required */
		logType: LogType;
		logGroupName?: string;
	}

	/** The log delivery option to send data to Amazon CloudWatch Logs. */
	export interface CloudWatchLogDeliveryOptionsFormProperties {

		/** Required */
		logType: FormControl<LogType | null | undefined>,
		logGroupName: FormControl<string | null | undefined>,
	}
	export function CreateCloudWatchLogDeliveryOptionsFormGroup() {
		return new FormGroup<CloudWatchLogDeliveryOptionsFormProperties>({
			logType: new FormControl<LogType | null | undefined>(undefined, [Validators.required]),
			logGroupName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum LogType { OFF = 0, ERROR = 1 }

	export interface GetLoggingOptionsRequest {
	}
	export interface GetLoggingOptionsRequestFormProperties {
	}
	export function CreateGetLoggingOptionsRequestFormGroup() {
		return new FormGroup<GetLoggingOptionsRequestFormProperties>({
		});

	}

	export interface GetModelManifestResponse {

		/** Required */
		name: string;

		/** Required */
		arn: string;
		description?: string;
		signalCatalogArn?: string;
		status?: ManifestStatus;

		/** Required */
		creationTime: Date;

		/** Required */
		lastModificationTime: Date;
	}
	export interface GetModelManifestResponseFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		arn: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		signalCatalogArn: FormControl<string | null | undefined>,
		status: FormControl<ManifestStatus | null | undefined>,

		/** Required */
		creationTime: FormControl<Date | null | undefined>,

		/** Required */
		lastModificationTime: FormControl<Date | null | undefined>,
	}
	export function CreateGetModelManifestResponseFormGroup() {
		return new FormGroup<GetModelManifestResponseFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
			signalCatalogArn: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<ManifestStatus | null | undefined>(undefined),
			creationTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			lastModificationTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetModelManifestRequest {

		/** Required */
		name: string;
	}
	export interface GetModelManifestRequestFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGetModelManifestRequestFormGroup() {
		return new FormGroup<GetModelManifestRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetRegisterAccountStatusResponse {

		/** Required */
		customerAccountId: string;

		/** Required */
		accountStatus: RegistrationStatus;
		timestreamRegistrationResponse?: TimestreamRegistrationResponse;

		/** Required */
		iamRegistrationResponse: IamRegistrationResponse;

		/** Required */
		creationTime: Date;

		/** Required */
		lastModificationTime: Date;
	}
	export interface GetRegisterAccountStatusResponseFormProperties {

		/** Required */
		customerAccountId: FormControl<string | null | undefined>,

		/** Required */
		accountStatus: FormControl<RegistrationStatus | null | undefined>,

		/** Required */
		creationTime: FormControl<Date | null | undefined>,

		/** Required */
		lastModificationTime: FormControl<Date | null | undefined>,
	}
	export function CreateGetRegisterAccountStatusResponseFormGroup() {
		return new FormGroup<GetRegisterAccountStatusResponseFormProperties>({
			customerAccountId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			accountStatus: new FormControl<RegistrationStatus | null | undefined>(undefined, [Validators.required]),
			creationTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			lastModificationTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum RegistrationStatus { REGISTRATION_PENDING = 0, REGISTRATION_SUCCESS = 1, REGISTRATION_FAILURE = 2 }


	/** Information about the registered Amazon Timestream resources or errors, if any. */
	export interface TimestreamRegistrationResponse {

		/** Required */
		timestreamDatabaseName: string;

		/** Required */
		timestreamTableName: string;
		timestreamDatabaseArn?: string;
		timestreamTableArn?: string;

		/** Required */
		registrationStatus: RegistrationStatus;
		errorMessage?: string;
	}

	/** Information about the registered Amazon Timestream resources or errors, if any. */
	export interface TimestreamRegistrationResponseFormProperties {

		/** Required */
		timestreamDatabaseName: FormControl<string | null | undefined>,

		/** Required */
		timestreamTableName: FormControl<string | null | undefined>,
		timestreamDatabaseArn: FormControl<string | null | undefined>,
		timestreamTableArn: FormControl<string | null | undefined>,

		/** Required */
		registrationStatus: FormControl<RegistrationStatus | null | undefined>,
		errorMessage: FormControl<string | null | undefined>,
	}
	export function CreateTimestreamRegistrationResponseFormGroup() {
		return new FormGroup<TimestreamRegistrationResponseFormProperties>({
			timestreamDatabaseName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			timestreamTableName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			timestreamDatabaseArn: new FormControl<string | null | undefined>(undefined),
			timestreamTableArn: new FormControl<string | null | undefined>(undefined),
			registrationStatus: new FormControl<RegistrationStatus | null | undefined>(undefined, [Validators.required]),
			errorMessage: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about registering an Identity and Access Management (IAM) resource so Amazon Web Services IoT FleetWise edge agent software can transfer your vehicle data to Amazon Timestream. */
	export interface IamRegistrationResponse {

		/** Required */
		roleArn: string;

		/** Required */
		registrationStatus: RegistrationStatus;
		errorMessage?: string;
	}

	/** Information about registering an Identity and Access Management (IAM) resource so Amazon Web Services IoT FleetWise edge agent software can transfer your vehicle data to Amazon Timestream. */
	export interface IamRegistrationResponseFormProperties {

		/** Required */
		roleArn: FormControl<string | null | undefined>,

		/** Required */
		registrationStatus: FormControl<RegistrationStatus | null | undefined>,
		errorMessage: FormControl<string | null | undefined>,
	}
	export function CreateIamRegistrationResponseFormGroup() {
		return new FormGroup<IamRegistrationResponseFormProperties>({
			roleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			registrationStatus: new FormControl<RegistrationStatus | null | undefined>(undefined, [Validators.required]),
			errorMessage: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetRegisterAccountStatusRequest {
	}
	export interface GetRegisterAccountStatusRequestFormProperties {
	}
	export function CreateGetRegisterAccountStatusRequestFormGroup() {
		return new FormGroup<GetRegisterAccountStatusRequestFormProperties>({
		});

	}

	export interface GetSignalCatalogResponse {

		/** Required */
		name: string;

		/** Required */
		arn: string;
		description?: string;
		nodeCounts?: NodeCounts;

		/** Required */
		creationTime: Date;

		/** Required */
		lastModificationTime: Date;
	}
	export interface GetSignalCatalogResponseFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		arn: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,

		/** Required */
		creationTime: FormControl<Date | null | undefined>,

		/** Required */
		lastModificationTime: FormControl<Date | null | undefined>,
	}
	export function CreateGetSignalCatalogResponseFormGroup() {
		return new FormGroup<GetSignalCatalogResponseFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
			creationTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			lastModificationTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Information about the number of nodes and node types in a vehicle network. */
	export interface NodeCounts {
		totalNodes?: number | null;
		totalBranches?: number | null;
		totalSensors?: number | null;
		totalAttributes?: number | null;
		totalActuators?: number | null;
	}

	/** Information about the number of nodes and node types in a vehicle network. */
	export interface NodeCountsFormProperties {
		totalNodes: FormControl<number | null | undefined>,
		totalBranches: FormControl<number | null | undefined>,
		totalSensors: FormControl<number | null | undefined>,
		totalAttributes: FormControl<number | null | undefined>,
		totalActuators: FormControl<number | null | undefined>,
	}
	export function CreateNodeCountsFormGroup() {
		return new FormGroup<NodeCountsFormProperties>({
			totalNodes: new FormControl<number | null | undefined>(undefined),
			totalBranches: new FormControl<number | null | undefined>(undefined),
			totalSensors: new FormControl<number | null | undefined>(undefined),
			totalAttributes: new FormControl<number | null | undefined>(undefined),
			totalActuators: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetSignalCatalogRequest {

		/** Required */
		name: string;
	}
	export interface GetSignalCatalogRequestFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGetSignalCatalogRequestFormGroup() {
		return new FormGroup<GetSignalCatalogRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetVehicleResponse {
		vehicleName?: string;
		arn?: string;
		modelManifestArn?: string;
		decoderManifestArn?: string;
		attributes?: AttributesMap;
		creationTime?: Date;
		lastModificationTime?: Date;
	}
	export interface GetVehicleResponseFormProperties {
		vehicleName: FormControl<string | null | undefined>,
		arn: FormControl<string | null | undefined>,
		modelManifestArn: FormControl<string | null | undefined>,
		decoderManifestArn: FormControl<string | null | undefined>,
		creationTime: FormControl<Date | null | undefined>,
		lastModificationTime: FormControl<Date | null | undefined>,
	}
	export function CreateGetVehicleResponseFormGroup() {
		return new FormGroup<GetVehicleResponseFormProperties>({
			vehicleName: new FormControl<string | null | undefined>(undefined),
			arn: new FormControl<string | null | undefined>(undefined),
			modelManifestArn: new FormControl<string | null | undefined>(undefined),
			decoderManifestArn: new FormControl<string | null | undefined>(undefined),
			creationTime: new FormControl<Date | null | undefined>(undefined),
			lastModificationTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface GetVehicleRequest {

		/** Required */
		vehicleName: string;
	}
	export interface GetVehicleRequestFormProperties {

		/** Required */
		vehicleName: FormControl<string | null | undefined>,
	}
	export function CreateGetVehicleRequestFormGroup() {
		return new FormGroup<GetVehicleRequestFormProperties>({
			vehicleName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetVehicleStatusResponse {
		campaigns?: Array<VehicleStatus>;
		nextToken?: string;
	}
	export interface GetVehicleStatusResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetVehicleStatusResponseFormGroup() {
		return new FormGroup<GetVehicleStatusResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about the state of a vehicle and how it relates to the status of a campaign. */
	export interface VehicleStatus {
		campaignName?: string;
		vehicleName?: string;
		status?: VehicleState;
	}

	/** Information about the state of a vehicle and how it relates to the status of a campaign. */
	export interface VehicleStatusFormProperties {
		campaignName: FormControl<string | null | undefined>,
		vehicleName: FormControl<string | null | undefined>,
		status: FormControl<VehicleState | null | undefined>,
	}
	export function CreateVehicleStatusFormGroup() {
		return new FormGroup<VehicleStatusFormProperties>({
			campaignName: new FormControl<string | null | undefined>(undefined),
			vehicleName: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<VehicleState | null | undefined>(undefined),
		});

	}

	export enum VehicleState { CREATED = 0, READY = 1, HEALTHY = 2, SUSPENDED = 3, DELETING = 4 }

	export interface GetVehicleStatusRequest {
		nextToken?: string;
		maxResults?: number | null;

		/** Required */
		vehicleName: string;
	}
	export interface GetVehicleStatusRequestFormProperties {
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,

		/** Required */
		vehicleName: FormControl<string | null | undefined>,
	}
	export function CreateGetVehicleStatusRequestFormGroup() {
		return new FormGroup<GetVehicleStatusRequestFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
			vehicleName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ImportDecoderManifestResponse {

		/** Required */
		name: string;

		/** Required */
		arn: string;
	}
	export interface ImportDecoderManifestResponseFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		arn: FormControl<string | null | undefined>,
	}
	export function CreateImportDecoderManifestResponseFormGroup() {
		return new FormGroup<ImportDecoderManifestResponseFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ImportDecoderManifestRequest {

		/** Required */
		name: string;

		/** Required */
		networkFileDefinitions: Array<NetworkFileDefinition>;
	}
	export interface ImportDecoderManifestRequestFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,
	}
	export function CreateImportDecoderManifestRequestFormGroup() {
		return new FormGroup<ImportDecoderManifestRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Specifications for defining a vehicle network. */
	export interface NetworkFileDefinition {
		canDbc?: CanDbcDefinition;
	}

	/** Specifications for defining a vehicle network. */
	export interface NetworkFileDefinitionFormProperties {
	}
	export function CreateNetworkFileDefinitionFormGroup() {
		return new FormGroup<NetworkFileDefinitionFormProperties>({
		});

	}


	/** Configurations used to create a decoder manifest. */
	export interface CanDbcDefinition {

		/** Required */
		networkInterface: string;

		/** Required */
		canDbcFiles: Array<string>;
		signalsMap?: ModelSignalsMap;
	}

	/** Configurations used to create a decoder manifest. */
	export interface CanDbcDefinitionFormProperties {

		/** Required */
		networkInterface: FormControl<string | null | undefined>,
	}
	export function CreateCanDbcDefinitionFormGroup() {
		return new FormGroup<CanDbcDefinitionFormProperties>({
			networkInterface: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ModelSignalsMap {
	}
	export interface ModelSignalsMapFormProperties {
	}
	export function CreateModelSignalsMapFormGroup() {
		return new FormGroup<ModelSignalsMapFormProperties>({
		});

	}

	export interface ImportSignalCatalogResponse {

		/** Required */
		name: string;

		/** Required */
		arn: string;
	}
	export interface ImportSignalCatalogResponseFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		arn: FormControl<string | null | undefined>,
	}
	export function CreateImportSignalCatalogResponseFormGroup() {
		return new FormGroup<ImportSignalCatalogResponseFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ImportSignalCatalogRequest {

		/** Required */
		name: string;
		description?: string;
		vss?: FormattedVss;
		tags?: Array<Tag>;
	}
	export interface ImportSignalCatalogRequestFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
	}
	export function CreateImportSignalCatalogRequestFormGroup() {
		return new FormGroup<ImportSignalCatalogRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  <a href="https://www.w3.org/auto/wg/wiki/Vehicle_Signal_Specification_(VSS)/Vehicle_Data_Spec">Vehicle Signal Specification (VSS)</a> is a precise language used to describe and model signals in vehicle networks. The JSON file collects signal specificiations in a VSS format. */
	export interface FormattedVss {
		vssJson?: string;
	}

	/**  <a href="https://www.w3.org/auto/wg/wiki/Vehicle_Signal_Specification_(VSS)/Vehicle_Data_Spec">Vehicle Signal Specification (VSS)</a> is a precise language used to describe and model signals in vehicle networks. The JSON file collects signal specificiations in a VSS format. */
	export interface FormattedVssFormProperties {
		vssJson: FormControl<string | null | undefined>,
	}
	export function CreateFormattedVssFormGroup() {
		return new FormGroup<FormattedVssFormProperties>({
			vssJson: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListCampaignsResponse {
		campaignSummaries?: Array<CampaignSummary>;
		nextToken?: string;
	}
	export interface ListCampaignsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListCampaignsResponseFormGroup() {
		return new FormGroup<ListCampaignsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>Information about a campaign. </p> <p>You can use the API operation to return this information about multiple created campaigns.</p> */
	export interface CampaignSummary {
		arn?: string;
		name?: string;
		description?: string;
		signalCatalogArn?: string;
		targetArn?: string;
		status?: CampaignStatus;

		/** Required */
		creationTime: Date;

		/** Required */
		lastModificationTime: Date;
	}

	/** <p>Information about a campaign. </p> <p>You can use the API operation to return this information about multiple created campaigns.</p> */
	export interface CampaignSummaryFormProperties {
		arn: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		signalCatalogArn: FormControl<string | null | undefined>,
		targetArn: FormControl<string | null | undefined>,
		status: FormControl<CampaignStatus | null | undefined>,

		/** Required */
		creationTime: FormControl<Date | null | undefined>,

		/** Required */
		lastModificationTime: FormControl<Date | null | undefined>,
	}
	export function CreateCampaignSummaryFormGroup() {
		return new FormGroup<CampaignSummaryFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			signalCatalogArn: new FormControl<string | null | undefined>(undefined),
			targetArn: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<CampaignStatus | null | undefined>(undefined),
			creationTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			lastModificationTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListCampaignsRequest {
		nextToken?: string;
		maxResults?: number | null;
		status?: string;
	}
	export interface ListCampaignsRequestFormProperties {
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
		status: FormControl<string | null | undefined>,
	}
	export function CreateListCampaignsRequestFormGroup() {
		return new FormGroup<ListCampaignsRequestFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListDecoderManifestNetworkInterfacesResponse {
		networkInterfaces?: Array<NetworkInterface>;
		nextToken?: string;
	}
	export interface ListDecoderManifestNetworkInterfacesResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListDecoderManifestNetworkInterfacesResponseFormGroup() {
		return new FormGroup<ListDecoderManifestNetworkInterfacesResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListDecoderManifestNetworkInterfacesRequest {

		/** Required */
		name: string;
		nextToken?: string;
		maxResults?: number | null;
	}
	export interface ListDecoderManifestNetworkInterfacesRequestFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateListDecoderManifestNetworkInterfacesRequestFormGroup() {
		return new FormGroup<ListDecoderManifestNetworkInterfacesRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListDecoderManifestSignalsResponse {
		signalDecoders?: Array<SignalDecoder>;
		nextToken?: string;
	}
	export interface ListDecoderManifestSignalsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListDecoderManifestSignalsResponseFormGroup() {
		return new FormGroup<ListDecoderManifestSignalsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListDecoderManifestSignalsRequest {

		/** Required */
		name: string;
		nextToken?: string;
		maxResults?: number | null;
	}
	export interface ListDecoderManifestSignalsRequestFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateListDecoderManifestSignalsRequestFormGroup() {
		return new FormGroup<ListDecoderManifestSignalsRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListDecoderManifestsResponse {
		summaries?: Array<DecoderManifestSummary>;
		nextToken?: string;
	}
	export interface ListDecoderManifestsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListDecoderManifestsResponseFormGroup() {
		return new FormGroup<ListDecoderManifestsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about a created decoder manifest. You can use the API operation to return this information about multiple decoder manifests. */
	export interface DecoderManifestSummary {
		name?: string;
		arn?: string;
		modelManifestArn?: string;
		description?: string;
		status?: ManifestStatus;

		/** Required */
		creationTime: Date;

		/** Required */
		lastModificationTime: Date;
	}

	/** Information about a created decoder manifest. You can use the API operation to return this information about multiple decoder manifests. */
	export interface DecoderManifestSummaryFormProperties {
		name: FormControl<string | null | undefined>,
		arn: FormControl<string | null | undefined>,
		modelManifestArn: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		status: FormControl<ManifestStatus | null | undefined>,

		/** Required */
		creationTime: FormControl<Date | null | undefined>,

		/** Required */
		lastModificationTime: FormControl<Date | null | undefined>,
	}
	export function CreateDecoderManifestSummaryFormGroup() {
		return new FormGroup<DecoderManifestSummaryFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			arn: new FormControl<string | null | undefined>(undefined),
			modelManifestArn: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<ManifestStatus | null | undefined>(undefined),
			creationTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			lastModificationTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListDecoderManifestsRequest {
		modelManifestArn?: string;
		nextToken?: string;
		maxResults?: number | null;
	}
	export interface ListDecoderManifestsRequestFormProperties {
		modelManifestArn: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateListDecoderManifestsRequestFormGroup() {
		return new FormGroup<ListDecoderManifestsRequestFormProperties>({
			modelManifestArn: new FormControl<string | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListFleetsResponse {
		fleetSummaries?: Array<FleetSummary>;
		nextToken?: string;
	}
	export interface ListFleetsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListFleetsResponseFormGroup() {
		return new FormGroup<ListFleetsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>Information about a fleet.</p> <p>You can use the API operation to return this information about multiple fleets.</p> */
	export interface FleetSummary {

		/** Required */
		id: string;

		/** Required */
		arn: string;
		description?: string;

		/** Required */
		signalCatalogArn: string;

		/** Required */
		creationTime: Date;
		lastModificationTime?: Date;
	}

	/** <p>Information about a fleet.</p> <p>You can use the API operation to return this information about multiple fleets.</p> */
	export interface FleetSummaryFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		arn: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,

		/** Required */
		signalCatalogArn: FormControl<string | null | undefined>,

		/** Required */
		creationTime: FormControl<Date | null | undefined>,
		lastModificationTime: FormControl<Date | null | undefined>,
	}
	export function CreateFleetSummaryFormGroup() {
		return new FormGroup<FleetSummaryFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
			signalCatalogArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			creationTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			lastModificationTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListFleetsRequest {
		nextToken?: string;
		maxResults?: number | null;
	}
	export interface ListFleetsRequestFormProperties {
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateListFleetsRequestFormGroup() {
		return new FormGroup<ListFleetsRequestFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListFleetsForVehicleResponse {
		fleets?: Array<string>;
		nextToken?: string;
	}
	export interface ListFleetsForVehicleResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListFleetsForVehicleResponseFormGroup() {
		return new FormGroup<ListFleetsForVehicleResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListFleetsForVehicleRequest {

		/** Required */
		vehicleName: string;
		nextToken?: string;
		maxResults?: number | null;
	}
	export interface ListFleetsForVehicleRequestFormProperties {

		/** Required */
		vehicleName: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateListFleetsForVehicleRequestFormGroup() {
		return new FormGroup<ListFleetsForVehicleRequestFormProperties>({
			vehicleName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListModelManifestNodesResponse {
		nodes?: Array<Node>;
		nextToken?: string;
	}
	export interface ListModelManifestNodesResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListModelManifestNodesResponseFormGroup() {
		return new FormGroup<ListModelManifestNodesResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListModelManifestNodesRequest {

		/** Required */
		name: string;
		nextToken?: string;
		maxResults?: number | null;
	}
	export interface ListModelManifestNodesRequestFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateListModelManifestNodesRequestFormGroup() {
		return new FormGroup<ListModelManifestNodesRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListModelManifestsResponse {
		summaries?: Array<ModelManifestSummary>;
		nextToken?: string;
	}
	export interface ListModelManifestsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListModelManifestsResponseFormGroup() {
		return new FormGroup<ListModelManifestsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about a vehicle model (model manifest). You can use the API operation to return this information about multiple vehicle models. */
	export interface ModelManifestSummary {
		name?: string;
		arn?: string;
		signalCatalogArn?: string;
		description?: string;
		status?: ManifestStatus;

		/** Required */
		creationTime: Date;

		/** Required */
		lastModificationTime: Date;
	}

	/** Information about a vehicle model (model manifest). You can use the API operation to return this information about multiple vehicle models. */
	export interface ModelManifestSummaryFormProperties {
		name: FormControl<string | null | undefined>,
		arn: FormControl<string | null | undefined>,
		signalCatalogArn: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		status: FormControl<ManifestStatus | null | undefined>,

		/** Required */
		creationTime: FormControl<Date | null | undefined>,

		/** Required */
		lastModificationTime: FormControl<Date | null | undefined>,
	}
	export function CreateModelManifestSummaryFormGroup() {
		return new FormGroup<ModelManifestSummaryFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			arn: new FormControl<string | null | undefined>(undefined),
			signalCatalogArn: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<ManifestStatus | null | undefined>(undefined),
			creationTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			lastModificationTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListModelManifestsRequest {
		signalCatalogArn?: string;
		nextToken?: string;
		maxResults?: number | null;
	}
	export interface ListModelManifestsRequestFormProperties {
		signalCatalogArn: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateListModelManifestsRequestFormGroup() {
		return new FormGroup<ListModelManifestsRequestFormProperties>({
			signalCatalogArn: new FormControl<string | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListSignalCatalogNodesResponse {
		nodes?: Array<Node>;
		nextToken?: string;
	}
	export interface ListSignalCatalogNodesResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListSignalCatalogNodesResponseFormGroup() {
		return new FormGroup<ListSignalCatalogNodesResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListSignalCatalogNodesRequest {

		/** Required */
		name: string;
		nextToken?: string;
		maxResults?: number | null;
	}
	export interface ListSignalCatalogNodesRequestFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateListSignalCatalogNodesRequestFormGroup() {
		return new FormGroup<ListSignalCatalogNodesRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListSignalCatalogsResponse {
		summaries?: Array<SignalCatalogSummary>;
		nextToken?: string;
	}
	export interface ListSignalCatalogsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListSignalCatalogsResponseFormGroup() {
		return new FormGroup<ListSignalCatalogsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about a collection of standardized signals, which can be attributes, branches, sensors, or actuators. */
	export interface SignalCatalogSummary {
		name?: string;
		arn?: string;
		creationTime?: Date;
		lastModificationTime?: Date;
	}

	/** Information about a collection of standardized signals, which can be attributes, branches, sensors, or actuators. */
	export interface SignalCatalogSummaryFormProperties {
		name: FormControl<string | null | undefined>,
		arn: FormControl<string | null | undefined>,
		creationTime: FormControl<Date | null | undefined>,
		lastModificationTime: FormControl<Date | null | undefined>,
	}
	export function CreateSignalCatalogSummaryFormGroup() {
		return new FormGroup<SignalCatalogSummaryFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			arn: new FormControl<string | null | undefined>(undefined),
			creationTime: new FormControl<Date | null | undefined>(undefined),
			lastModificationTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListSignalCatalogsRequest {
		nextToken?: string;
		maxResults?: number | null;
	}
	export interface ListSignalCatalogsRequestFormProperties {
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateListSignalCatalogsRequestFormGroup() {
		return new FormGroup<ListSignalCatalogsRequestFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
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

	export interface ListTagsForResourceRequest {

		/** Required */
		ResourceARN: string;
	}
	export interface ListTagsForResourceRequestFormProperties {

		/** Required */
		ResourceARN: FormControl<string | null | undefined>,
	}
	export function CreateListTagsForResourceRequestFormGroup() {
		return new FormGroup<ListTagsForResourceRequestFormProperties>({
			ResourceARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListVehiclesResponse {
		vehicleSummaries?: Array<VehicleSummary>;
		nextToken?: string;
	}
	export interface ListVehiclesResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListVehiclesResponseFormGroup() {
		return new FormGroup<ListVehiclesResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>Information about a vehicle.</p> <p>To return this information about vehicles in your account, you can use the API operation.</p> */
	export interface VehicleSummary {

		/** Required */
		vehicleName: string;

		/** Required */
		arn: string;

		/** Required */
		modelManifestArn: string;

		/** Required */
		decoderManifestArn: string;

		/** Required */
		creationTime: Date;

		/** Required */
		lastModificationTime: Date;
	}

	/** <p>Information about a vehicle.</p> <p>To return this information about vehicles in your account, you can use the API operation.</p> */
	export interface VehicleSummaryFormProperties {

		/** Required */
		vehicleName: FormControl<string | null | undefined>,

		/** Required */
		arn: FormControl<string | null | undefined>,

		/** Required */
		modelManifestArn: FormControl<string | null | undefined>,

		/** Required */
		decoderManifestArn: FormControl<string | null | undefined>,

		/** Required */
		creationTime: FormControl<Date | null | undefined>,

		/** Required */
		lastModificationTime: FormControl<Date | null | undefined>,
	}
	export function CreateVehicleSummaryFormGroup() {
		return new FormGroup<VehicleSummaryFormProperties>({
			vehicleName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			modelManifestArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			decoderManifestArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			creationTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			lastModificationTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListVehiclesRequest {
		modelManifestArn?: string;
		nextToken?: string;
		maxResults?: number | null;
	}
	export interface ListVehiclesRequestFormProperties {
		modelManifestArn: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateListVehiclesRequestFormGroup() {
		return new FormGroup<ListVehiclesRequestFormProperties>({
			modelManifestArn: new FormControl<string | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListVehiclesInFleetResponse {
		vehicles?: Array<string>;
		nextToken?: string;
	}
	export interface ListVehiclesInFleetResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListVehiclesInFleetResponseFormGroup() {
		return new FormGroup<ListVehiclesInFleetResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListVehiclesInFleetRequest {

		/** Required */
		fleetId: string;
		nextToken?: string;
		maxResults?: number | null;
	}
	export interface ListVehiclesInFleetRequestFormProperties {

		/** Required */
		fleetId: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateListVehiclesInFleetRequestFormGroup() {
		return new FormGroup<ListVehiclesInFleetRequestFormProperties>({
			fleetId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface PutLoggingOptionsResponse {
	}
	export interface PutLoggingOptionsResponseFormProperties {
	}
	export function CreatePutLoggingOptionsResponseFormGroup() {
		return new FormGroup<PutLoggingOptionsResponseFormProperties>({
		});

	}

	export interface PutLoggingOptionsRequest {

		/** Required */
		cloudWatchLogDelivery: CloudWatchLogDeliveryOptions;
	}
	export interface PutLoggingOptionsRequestFormProperties {
	}
	export function CreatePutLoggingOptionsRequestFormGroup() {
		return new FormGroup<PutLoggingOptionsRequestFormProperties>({
		});

	}

	export interface RegisterAccountResponse {

		/** Required */
		registerAccountStatus: RegistrationStatus;

		/** The registered Amazon Timestream resources that Amazon Web Services IoT FleetWise edge agent software can transfer your vehicle data to. */
		timestreamResources?: TimestreamResources;

		/** Required */
		iamResources: IamResources;

		/** Required */
		creationTime: Date;

		/** Required */
		lastModificationTime: Date;
	}
	export interface RegisterAccountResponseFormProperties {

		/** Required */
		registerAccountStatus: FormControl<RegistrationStatus | null | undefined>,

		/** Required */
		creationTime: FormControl<Date | null | undefined>,

		/** Required */
		lastModificationTime: FormControl<Date | null | undefined>,
	}
	export function CreateRegisterAccountResponseFormGroup() {
		return new FormGroup<RegisterAccountResponseFormProperties>({
			registerAccountStatus: new FormControl<RegistrationStatus | null | undefined>(undefined, [Validators.required]),
			creationTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			lastModificationTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The registered Amazon Timestream resources that Amazon Web Services IoT FleetWise edge agent software can transfer your vehicle data to. */
	export interface TimestreamResources {

		/** Required */
		timestreamDatabaseName: string;

		/** Required */
		timestreamTableName: string;
	}

	/** The registered Amazon Timestream resources that Amazon Web Services IoT FleetWise edge agent software can transfer your vehicle data to. */
	export interface TimestreamResourcesFormProperties {

		/** Required */
		timestreamDatabaseName: FormControl<string | null | undefined>,

		/** Required */
		timestreamTableName: FormControl<string | null | undefined>,
	}
	export function CreateTimestreamResourcesFormGroup() {
		return new FormGroup<TimestreamResourcesFormProperties>({
			timestreamDatabaseName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			timestreamTableName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p>The IAM resource that enables Amazon Web Services IoT FleetWise edge agent software to send data to Amazon Timestream. </p> <p>For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles.html">IAM roles</a> in the <i>Identity and Access Management User Guide</i>.</p> */
	export interface IamResources {

		/** Required */
		roleArn: string;
	}

	/** <p>The IAM resource that enables Amazon Web Services IoT FleetWise edge agent software to send data to Amazon Timestream. </p> <p>For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles.html">IAM roles</a> in the <i>Identity and Access Management User Guide</i>.</p> */
	export interface IamResourcesFormProperties {

		/** Required */
		roleArn: FormControl<string | null | undefined>,
	}
	export function CreateIamResourcesFormGroup() {
		return new FormGroup<IamResourcesFormProperties>({
			roleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface RegisterAccountRequest {
		timestreamResources?: TimestreamResources;
		iamResources?: IamResources;
	}
	export interface RegisterAccountRequestFormProperties {
	}
	export function CreateRegisterAccountRequestFormGroup() {
		return new FormGroup<RegisterAccountRequestFormProperties>({
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
		ResourceARN: string;

		/** Required */
		Tags: Array<Tag>;
	}
	export interface TagResourceRequestFormProperties {

		/** Required */
		ResourceARN: FormControl<string | null | undefined>,
	}
	export function CreateTagResourceRequestFormGroup() {
		return new FormGroup<TagResourceRequestFormProperties>({
			ResourceARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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
		ResourceARN: string;

		/** Required */
		TagKeys: Array<string>;
	}
	export interface UntagResourceRequestFormProperties {

		/** Required */
		ResourceARN: FormControl<string | null | undefined>,
	}
	export function CreateUntagResourceRequestFormGroup() {
		return new FormGroup<UntagResourceRequestFormProperties>({
			ResourceARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateCampaignResponse {
		arn?: string;
		name?: string;
		status?: CampaignStatus;
	}
	export interface UpdateCampaignResponseFormProperties {
		arn: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		status: FormControl<CampaignStatus | null | undefined>,
	}
	export function CreateUpdateCampaignResponseFormGroup() {
		return new FormGroup<UpdateCampaignResponseFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<CampaignStatus | null | undefined>(undefined),
		});

	}

	export interface UpdateCampaignRequest {

		/** Required */
		name: string;
		description?: string;
		dataExtraDimensions?: Array<string>;

		/** Required */
		action: UpdateCampaignAction;
	}
	export interface UpdateCampaignRequestFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,

		/** Required */
		action: FormControl<UpdateCampaignAction | null | undefined>,
	}
	export function CreateUpdateCampaignRequestFormGroup() {
		return new FormGroup<UpdateCampaignRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
			action: new FormControl<UpdateCampaignAction | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum UpdateCampaignAction { APPROVE = 0, SUSPEND = 1, RESUME = 2, UPDATE = 3 }

	export interface UpdateDecoderManifestResponse {

		/** Required */
		name: string;

		/** Required */
		arn: string;
	}
	export interface UpdateDecoderManifestResponseFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		arn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateDecoderManifestResponseFormGroup() {
		return new FormGroup<UpdateDecoderManifestResponseFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateDecoderManifestRequest {

		/** Required */
		name: string;
		description?: string;
		signalDecodersToAdd?: Array<SignalDecoder>;
		signalDecodersToUpdate?: Array<SignalDecoder>;
		signalDecodersToRemove?: Array<string>;
		networkInterfacesToAdd?: Array<NetworkInterface>;
		networkInterfacesToUpdate?: Array<NetworkInterface>;
		networkInterfacesToRemove?: Array<string>;
		status?: ManifestStatus;
	}
	export interface UpdateDecoderManifestRequestFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		status: FormControl<ManifestStatus | null | undefined>,
	}
	export function CreateUpdateDecoderManifestRequestFormGroup() {
		return new FormGroup<UpdateDecoderManifestRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<ManifestStatus | null | undefined>(undefined),
		});

	}

	export interface UpdateFleetResponse {
		id?: string;
		arn?: string;
	}
	export interface UpdateFleetResponseFormProperties {
		id: FormControl<string | null | undefined>,
		arn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateFleetResponseFormGroup() {
		return new FormGroup<UpdateFleetResponseFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			arn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateFleetRequest {

		/** Required */
		fleetId: string;
		description?: string;
	}
	export interface UpdateFleetRequestFormProperties {

		/** Required */
		fleetId: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
	}
	export function CreateUpdateFleetRequestFormGroup() {
		return new FormGroup<UpdateFleetRequestFormProperties>({
			fleetId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateModelManifestResponse {

		/** Required */
		name: string;

		/** Required */
		arn: string;
	}
	export interface UpdateModelManifestResponseFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		arn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateModelManifestResponseFormGroup() {
		return new FormGroup<UpdateModelManifestResponseFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateModelManifestRequest {

		/** Required */
		name: string;
		description?: string;
		nodesToAdd?: Array<string>;
		nodesToRemove?: Array<string>;
		status?: ManifestStatus;
	}
	export interface UpdateModelManifestRequestFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		status: FormControl<ManifestStatus | null | undefined>,
	}
	export function CreateUpdateModelManifestRequestFormGroup() {
		return new FormGroup<UpdateModelManifestRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<ManifestStatus | null | undefined>(undefined),
		});

	}

	export interface UpdateSignalCatalogResponse {

		/** Required */
		name: string;

		/** Required */
		arn: string;
	}
	export interface UpdateSignalCatalogResponseFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		arn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateSignalCatalogResponseFormGroup() {
		return new FormGroup<UpdateSignalCatalogResponseFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateSignalCatalogRequest {

		/** Required */
		name: string;
		description?: string;
		nodesToAdd?: Array<Node>;
		nodesToUpdate?: Array<Node>;
		nodesToRemove?: Array<string>;
	}
	export interface UpdateSignalCatalogRequestFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
	}
	export function CreateUpdateSignalCatalogRequestFormGroup() {
		return new FormGroup<UpdateSignalCatalogRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateVehicleResponse {
		vehicleName?: string;
		arn?: string;
	}
	export interface UpdateVehicleResponseFormProperties {
		vehicleName: FormControl<string | null | undefined>,
		arn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateVehicleResponseFormGroup() {
		return new FormGroup<UpdateVehicleResponseFormProperties>({
			vehicleName: new FormControl<string | null | undefined>(undefined),
			arn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateVehicleRequest {

		/** Required */
		vehicleName: string;
		modelManifestArn?: string;
		decoderManifestArn?: string;
		attributes?: AttributesMap;
		attributeUpdateMode?: UpdateMode;
	}
	export interface UpdateVehicleRequestFormProperties {

		/** Required */
		vehicleName: FormControl<string | null | undefined>,
		modelManifestArn: FormControl<string | null | undefined>,
		decoderManifestArn: FormControl<string | null | undefined>,
		attributeUpdateMode: FormControl<UpdateMode | null | undefined>,
	}
	export function CreateUpdateVehicleRequestFormGroup() {
		return new FormGroup<UpdateVehicleRequestFormProperties>({
			vehicleName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			modelManifestArn: new FormControl<string | null | undefined>(undefined),
			decoderManifestArn: new FormControl<string | null | undefined>(undefined),
			attributeUpdateMode: new FormControl<UpdateMode | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Adds, or associates, a vehicle with a fleet.
		 * Post #X-Amz-Target=IoTAutobahnControlPlane.AssociateVehicleFleet
		 * @return {AssociateVehicleFleetResponse} Success
		 */
		AssociateVehicleFleet(requestBody: AssociateVehicleFleetRequest): Observable<AssociateVehicleFleetResponse> {
			return this.http.post<AssociateVehicleFleetResponse>(this.baseUri + '#X-Amz-Target=IoTAutobahnControlPlane.AssociateVehicleFleet', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p> Creates a group, or batch, of vehicles. </p> <note> <p> You must specify a decoder manifest and a vehicle model (model manifest) for each vehicle. </p> </note> <p>For more information, see <a href="https://docs.aws.amazon.com/iot-fleetwise/latest/developerguide/create-vehicles-cli.html">Create multiple vehicles (AWS CLI)</a> in the <i>Amazon Web Services IoT FleetWise Developer Guide</i>. </p>
		 * Post #X-Amz-Target=IoTAutobahnControlPlane.BatchCreateVehicle
		 * @return {BatchCreateVehicleResponse} Success
		 */
		BatchCreateVehicle(requestBody: BatchCreateVehicleRequest): Observable<BatchCreateVehicleResponse> {
			return this.http.post<BatchCreateVehicleResponse>(this.baseUri + '#X-Amz-Target=IoTAutobahnControlPlane.BatchCreateVehicle', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p> Updates a group, or batch, of vehicles.</p> <note> <p> You must specify a decoder manifest and a vehicle model (model manifest) for each vehicle. </p> </note> <p>For more information, see <a href="https://docs.aws.amazon.com/iot-fleetwise/latest/developerguide/update-vehicles-cli.html">Update multiple vehicles (AWS CLI)</a> in the <i>Amazon Web Services IoT FleetWise Developer Guide</i>. </p>
		 * Post #X-Amz-Target=IoTAutobahnControlPlane.BatchUpdateVehicle
		 * @return {BatchUpdateVehicleResponse} Success
		 */
		BatchUpdateVehicle(requestBody: BatchUpdateVehicleRequest): Observable<BatchUpdateVehicleResponse> {
			return this.http.post<BatchUpdateVehicleResponse>(this.baseUri + '#X-Amz-Target=IoTAutobahnControlPlane.BatchUpdateVehicle', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates an orchestration of data collection rules. The Amazon Web Services IoT FleetWise Edge Agent software running in vehicles uses campaigns to decide how to collect and transfer data to the cloud. You create campaigns in the cloud. After you or your team approve campaigns, Amazon Web Services IoT FleetWise automatically deploys them to vehicles. </p> <p>For more information, see <a href="https://docs.aws.amazon.com/iot-fleetwise/latest/developerguide/campaigns.html">Collect and transfer data with campaigns</a> in the <i>Amazon Web Services IoT FleetWise Developer Guide</i>.</p>
		 * Post #X-Amz-Target=IoTAutobahnControlPlane.CreateCampaign
		 * @return {CreateCampaignResponse} Success
		 */
		CreateCampaign(requestBody: CreateCampaignRequest): Observable<CreateCampaignResponse> {
			return this.http.post<CreateCampaignResponse>(this.baseUri + '#X-Amz-Target=IoTAutobahnControlPlane.CreateCampaign', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates the decoder manifest associated with a model manifest. To create a decoder manifest, the following must be true:</p> <ul> <li> <p>Every signal decoder has a unique name.</p> </li> <li> <p>Each signal decoder is associated with a network interface.</p> </li> <li> <p>Each network interface has a unique ID.</p> </li> <li> <p>The signal decoders are specified in the model manifest.</p> </li> </ul>
		 * Post #X-Amz-Target=IoTAutobahnControlPlane.CreateDecoderManifest
		 * @return {CreateDecoderManifestResponse} Success
		 */
		CreateDecoderManifest(requestBody: CreateDecoderManifestRequest): Observable<CreateDecoderManifestResponse> {
			return this.http.post<CreateDecoderManifestResponse>(this.baseUri + '#X-Amz-Target=IoTAutobahnControlPlane.CreateDecoderManifest', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p> Creates a fleet that represents a group of vehicles. </p> <note> <p>You must create both a signal catalog and vehicles before you can create a fleet. </p> </note> <p>For more information, see <a href="https://docs.aws.amazon.com/iot-fleetwise/latest/developerguide/fleets.html">Fleets</a> in the <i>Amazon Web Services IoT FleetWise Developer Guide</i>.</p>
		 * Post #X-Amz-Target=IoTAutobahnControlPlane.CreateFleet
		 * @return {CreateFleetResponse} Success
		 */
		CreateFleet(requestBody: CreateFleetRequest): Observable<CreateFleetResponse> {
			return this.http.post<CreateFleetResponse>(this.baseUri + '#X-Amz-Target=IoTAutobahnControlPlane.CreateFleet', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p> Creates a vehicle model (model manifest) that specifies signals (attributes, branches, sensors, and actuators). </p> <p>For more information, see <a href="https://docs.aws.amazon.com/iot-fleetwise/latest/developerguide/vehicle-models.html">Vehicle models</a> in the <i>Amazon Web Services IoT FleetWise Developer Guide</i>.</p>
		 * Post #X-Amz-Target=IoTAutobahnControlPlane.CreateModelManifest
		 * @return {CreateModelManifestResponse} Success
		 */
		CreateModelManifest(requestBody: CreateModelManifestRequest): Observable<CreateModelManifestResponse> {
			return this.http.post<CreateModelManifestResponse>(this.baseUri + '#X-Amz-Target=IoTAutobahnControlPlane.CreateModelManifest', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a collection of standardized signals that can be reused to create vehicle models.
		 * Post #X-Amz-Target=IoTAutobahnControlPlane.CreateSignalCatalog
		 * @return {CreateSignalCatalogResponse} Success
		 */
		CreateSignalCatalog(requestBody: CreateSignalCatalogRequest): Observable<CreateSignalCatalogResponse> {
			return this.http.post<CreateSignalCatalogResponse>(this.baseUri + '#X-Amz-Target=IoTAutobahnControlPlane.CreateSignalCatalog', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p> Creates a vehicle, which is an instance of a vehicle model (model manifest). Vehicles created from the same vehicle model consist of the same signals inherited from the vehicle model.</p> <note> <p> If you have an existing Amazon Web Services IoT thing, you can use Amazon Web Services IoT FleetWise to create a vehicle and collect data from your thing. </p> </note> <p>For more information, see <a href="https://docs.aws.amazon.com/iot-fleetwise/latest/developerguide/create-vehicle-cli.html">Create a vehicle (AWS CLI)</a> in the <i>Amazon Web Services IoT FleetWise Developer Guide</i>.</p>
		 * Post #X-Amz-Target=IoTAutobahnControlPlane.CreateVehicle
		 * @return {CreateVehicleResponse} Success
		 */
		CreateVehicle(requestBody: CreateVehicleRequest): Observable<CreateVehicleResponse> {
			return this.http.post<CreateVehicleResponse>(this.baseUri + '#X-Amz-Target=IoTAutobahnControlPlane.CreateVehicle', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a data collection campaign. Deleting a campaign suspends all data collection and removes it from any vehicles.
		 * Post #X-Amz-Target=IoTAutobahnControlPlane.DeleteCampaign
		 * @return {DeleteCampaignResponse} Success
		 */
		DeleteCampaign(requestBody: DeleteCampaignRequest): Observable<DeleteCampaignResponse> {
			return this.http.post<DeleteCampaignResponse>(this.baseUri + '#X-Amz-Target=IoTAutobahnControlPlane.DeleteCampaign', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p> Deletes a decoder manifest. You can't delete a decoder manifest if it has vehicles associated with it. </p> <note> <p>If the decoder manifest is successfully deleted, Amazon Web Services IoT FleetWise sends back an HTTP 200 response with an empty body.</p> </note>
		 * Post #X-Amz-Target=IoTAutobahnControlPlane.DeleteDecoderManifest
		 * @return {DeleteDecoderManifestResponse} Success
		 */
		DeleteDecoderManifest(requestBody: DeleteDecoderManifestRequest): Observable<DeleteDecoderManifestResponse> {
			return this.http.post<DeleteDecoderManifestResponse>(this.baseUri + '#X-Amz-Target=IoTAutobahnControlPlane.DeleteDecoderManifest', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p> Deletes a fleet. Before you delete a fleet, all vehicles must be dissociated from the fleet. For more information, see <a href="https://docs.aws.amazon.com/iot-fleetwise/latest/developerguide/delete-fleet-cli.html">Delete a fleet (AWS CLI)</a> in the <i>Amazon Web Services IoT FleetWise Developer Guide</i>.</p> <note> <p>If the fleet is successfully deleted, Amazon Web Services IoT FleetWise sends back an HTTP 200 response with an empty body.</p> </note>
		 * Post #X-Amz-Target=IoTAutobahnControlPlane.DeleteFleet
		 * @return {DeleteFleetResponse} Success
		 */
		DeleteFleet(requestBody: DeleteFleetRequest): Observable<DeleteFleetResponse> {
			return this.http.post<DeleteFleetResponse>(this.baseUri + '#X-Amz-Target=IoTAutobahnControlPlane.DeleteFleet', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p> Deletes a vehicle model (model manifest).</p> <note> <p>If the vehicle model is successfully deleted, Amazon Web Services IoT FleetWise sends back an HTTP 200 response with an empty body.</p> </note>
		 * Post #X-Amz-Target=IoTAutobahnControlPlane.DeleteModelManifest
		 * @return {DeleteModelManifestResponse} Success
		 */
		DeleteModelManifest(requestBody: DeleteModelManifestRequest): Observable<DeleteModelManifestResponse> {
			return this.http.post<DeleteModelManifestResponse>(this.baseUri + '#X-Amz-Target=IoTAutobahnControlPlane.DeleteModelManifest', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p> Deletes a signal catalog. </p> <note> <p>If the signal catalog is successfully deleted, Amazon Web Services IoT FleetWise sends back an HTTP 200 response with an empty body.</p> </note>
		 * Post #X-Amz-Target=IoTAutobahnControlPlane.DeleteSignalCatalog
		 * @return {DeleteSignalCatalogResponse} Success
		 */
		DeleteSignalCatalog(requestBody: DeleteSignalCatalogRequest): Observable<DeleteSignalCatalogResponse> {
			return this.http.post<DeleteSignalCatalogResponse>(this.baseUri + '#X-Amz-Target=IoTAutobahnControlPlane.DeleteSignalCatalog', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p> Deletes a vehicle and removes it from any campaigns.</p> <note> <p>If the vehicle is successfully deleted, Amazon Web Services IoT FleetWise sends back an HTTP 200 response with an empty body.</p> </note>
		 * Post #X-Amz-Target=IoTAutobahnControlPlane.DeleteVehicle
		 * @return {DeleteVehicleResponse} Success
		 */
		DeleteVehicle(requestBody: DeleteVehicleRequest): Observable<DeleteVehicleResponse> {
			return this.http.post<DeleteVehicleResponse>(this.baseUri + '#X-Amz-Target=IoTAutobahnControlPlane.DeleteVehicle', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Removes, or disassociates, a vehicle from a fleet. Disassociating a vehicle from a fleet doesn't delete the vehicle.</p> <note> <p>If the vehicle is successfully dissociated from a fleet, Amazon Web Services IoT FleetWise sends back an HTTP 200 response with an empty body.</p> </note>
		 * Post #X-Amz-Target=IoTAutobahnControlPlane.DisassociateVehicleFleet
		 * @return {DisassociateVehicleFleetResponse} Success
		 */
		DisassociateVehicleFleet(requestBody: DisassociateVehicleFleetRequest): Observable<DisassociateVehicleFleetResponse> {
			return this.http.post<DisassociateVehicleFleetResponse>(this.baseUri + '#X-Amz-Target=IoTAutobahnControlPlane.DisassociateVehicleFleet', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves information about a campaign.
		 * Post #X-Amz-Target=IoTAutobahnControlPlane.GetCampaign
		 * @return {GetCampaignResponse} Success
		 */
		GetCampaign(requestBody: GetCampaignRequest): Observable<GetCampaignResponse> {
			return this.http.post<GetCampaignResponse>(this.baseUri + '#X-Amz-Target=IoTAutobahnControlPlane.GetCampaign', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves information about a created decoder manifest.
		 * Post #X-Amz-Target=IoTAutobahnControlPlane.GetDecoderManifest
		 * @return {GetDecoderManifestResponse} Success
		 */
		GetDecoderManifest(requestBody: GetDecoderManifestRequest): Observable<GetDecoderManifestResponse> {
			return this.http.post<GetDecoderManifestResponse>(this.baseUri + '#X-Amz-Target=IoTAutobahnControlPlane.GetDecoderManifest', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves information about a fleet.
		 * Post #X-Amz-Target=IoTAutobahnControlPlane.GetFleet
		 * @return {GetFleetResponse} Success
		 */
		GetFleet(requestBody: GetFleetRequest): Observable<GetFleetResponse> {
			return this.http.post<GetFleetResponse>(this.baseUri + '#X-Amz-Target=IoTAutobahnControlPlane.GetFleet', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves the logging options.
		 * Post #X-Amz-Target=IoTAutobahnControlPlane.GetLoggingOptions
		 * @return {GetLoggingOptionsResponse} Success
		 */
		GetLoggingOptions(requestBody: GetLoggingOptionsRequest): Observable<GetLoggingOptionsResponse> {
			return this.http.post<GetLoggingOptionsResponse>(this.baseUri + '#X-Amz-Target=IoTAutobahnControlPlane.GetLoggingOptions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves information about a vehicle model (model manifest).
		 * Post #X-Amz-Target=IoTAutobahnControlPlane.GetModelManifest
		 * @return {GetModelManifestResponse} Success
		 */
		GetModelManifest(requestBody: GetModelManifestRequest): Observable<GetModelManifestResponse> {
			return this.http.post<GetModelManifestResponse>(this.baseUri + '#X-Amz-Target=IoTAutobahnControlPlane.GetModelManifest', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p> Retrieves information about the status of registering your Amazon Web Services account, IAM, and Amazon Timestream resources so that Amazon Web Services IoT FleetWise can transfer your vehicle data to the Amazon Web Services Cloud. </p> <p>For more information, including step-by-step procedures, see <a href="https://docs.aws.amazon.com/iot-fleetwise/latest/developerguide/setting-up.html">Setting up Amazon Web Services IoT FleetWise</a>. </p> <note> <p>This API operation doesn't require input parameters.</p> </note>
		 * Post #X-Amz-Target=IoTAutobahnControlPlane.GetRegisterAccountStatus
		 * @return {GetRegisterAccountStatusResponse} Success
		 */
		GetRegisterAccountStatus(requestBody: GetRegisterAccountStatusRequest): Observable<GetRegisterAccountStatusResponse> {
			return this.http.post<GetRegisterAccountStatusResponse>(this.baseUri + '#X-Amz-Target=IoTAutobahnControlPlane.GetRegisterAccountStatus', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves information about a signal catalog.
		 * Post #X-Amz-Target=IoTAutobahnControlPlane.GetSignalCatalog
		 * @return {GetSignalCatalogResponse} Success
		 */
		GetSignalCatalog(requestBody: GetSignalCatalogRequest): Observable<GetSignalCatalogResponse> {
			return this.http.post<GetSignalCatalogResponse>(this.baseUri + '#X-Amz-Target=IoTAutobahnControlPlane.GetSignalCatalog', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves information about a vehicle.
		 * Post #X-Amz-Target=IoTAutobahnControlPlane.GetVehicle
		 * @return {GetVehicleResponse} Success
		 */
		GetVehicle(requestBody: GetVehicleRequest): Observable<GetVehicleResponse> {
			return this.http.post<GetVehicleResponse>(this.baseUri + '#X-Amz-Target=IoTAutobahnControlPlane.GetVehicle', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves information about the status of a vehicle with any associated campaigns.
		 * Post #X-Amz-Target=IoTAutobahnControlPlane.GetVehicleStatus
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {GetVehicleStatusResponse} Success
		 */
		GetVehicleStatus(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: GetVehicleStatusRequest): Observable<GetVehicleStatusResponse> {
			return this.http.post<GetVehicleStatusResponse>(this.baseUri + '#X-Amz-Target=IoTAutobahnControlPlane.GetVehicleStatus?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a decoder manifest using your existing CAN DBC file from your local device.
		 * Post #X-Amz-Target=IoTAutobahnControlPlane.ImportDecoderManifest
		 * @return {ImportDecoderManifestResponse} Success
		 */
		ImportDecoderManifest(requestBody: ImportDecoderManifestRequest): Observable<ImportDecoderManifestResponse> {
			return this.http.post<ImportDecoderManifestResponse>(this.baseUri + '#X-Amz-Target=IoTAutobahnControlPlane.ImportDecoderManifest', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a signal catalog using your existing VSS formatted content from your local device.
		 * Post #X-Amz-Target=IoTAutobahnControlPlane.ImportSignalCatalog
		 * @return {ImportSignalCatalogResponse} Success
		 */
		ImportSignalCatalog(requestBody: ImportSignalCatalogRequest): Observable<ImportSignalCatalogResponse> {
			return this.http.post<ImportSignalCatalogResponse>(this.baseUri + '#X-Amz-Target=IoTAutobahnControlPlane.ImportSignalCatalog', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p> Lists information about created campaigns. </p> <note> <p>This API operation uses pagination. Specify the <code>nextToken</code> parameter in the request to return more results.</p> </note>
		 * Post #X-Amz-Target=IoTAutobahnControlPlane.ListCampaigns
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListCampaignsResponse} Success
		 */
		ListCampaigns(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListCampaignsRequest): Observable<ListCampaignsResponse> {
			return this.http.post<ListCampaignsResponse>(this.baseUri + '#X-Amz-Target=IoTAutobahnControlPlane.ListCampaigns?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p> Lists the network interfaces specified in a decoder manifest. </p> <note> <p>This API operation uses pagination. Specify the <code>nextToken</code> parameter in the request to return more results.</p> </note>
		 * Post #X-Amz-Target=IoTAutobahnControlPlane.ListDecoderManifestNetworkInterfaces
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListDecoderManifestNetworkInterfacesResponse} Success
		 */
		ListDecoderManifestNetworkInterfaces(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListDecoderManifestNetworkInterfacesRequest): Observable<ListDecoderManifestNetworkInterfacesResponse> {
			return this.http.post<ListDecoderManifestNetworkInterfacesResponse>(this.baseUri + '#X-Amz-Target=IoTAutobahnControlPlane.ListDecoderManifestNetworkInterfaces?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p> A list of information about signal decoders specified in a decoder manifest. </p> <note> <p>This API operation uses pagination. Specify the <code>nextToken</code> parameter in the request to return more results.</p> </note>
		 * Post #X-Amz-Target=IoTAutobahnControlPlane.ListDecoderManifestSignals
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListDecoderManifestSignalsResponse} Success
		 */
		ListDecoderManifestSignals(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListDecoderManifestSignalsRequest): Observable<ListDecoderManifestSignalsResponse> {
			return this.http.post<ListDecoderManifestSignalsResponse>(this.baseUri + '#X-Amz-Target=IoTAutobahnControlPlane.ListDecoderManifestSignals?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p> Lists decoder manifests. </p> <note> <p>This API operation uses pagination. Specify the <code>nextToken</code> parameter in the request to return more results.</p> </note>
		 * Post #X-Amz-Target=IoTAutobahnControlPlane.ListDecoderManifests
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListDecoderManifestsResponse} Success
		 */
		ListDecoderManifests(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListDecoderManifestsRequest): Observable<ListDecoderManifestsResponse> {
			return this.http.post<ListDecoderManifestsResponse>(this.baseUri + '#X-Amz-Target=IoTAutobahnControlPlane.ListDecoderManifests?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p> Retrieves information for each created fleet in an Amazon Web Services account. </p> <note> <p>This API operation uses pagination. Specify the <code>nextToken</code> parameter in the request to return more results.</p> </note>
		 * Post #X-Amz-Target=IoTAutobahnControlPlane.ListFleets
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListFleetsResponse} Success
		 */
		ListFleets(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListFleetsRequest): Observable<ListFleetsResponse> {
			return this.http.post<ListFleetsResponse>(this.baseUri + '#X-Amz-Target=IoTAutobahnControlPlane.ListFleets?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Retrieves a list of IDs for all fleets that the vehicle is associated with.</p> <note> <p>This API operation uses pagination. Specify the <code>nextToken</code> parameter in the request to return more results.</p> </note>
		 * Post #X-Amz-Target=IoTAutobahnControlPlane.ListFleetsForVehicle
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListFleetsForVehicleResponse} Success
		 */
		ListFleetsForVehicle(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListFleetsForVehicleRequest): Observable<ListFleetsForVehicleResponse> {
			return this.http.post<ListFleetsForVehicleResponse>(this.baseUri + '#X-Amz-Target=IoTAutobahnControlPlane.ListFleetsForVehicle?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p> Lists information about nodes specified in a vehicle model (model manifest). </p> <note> <p>This API operation uses pagination. Specify the <code>nextToken</code> parameter in the request to return more results.</p> </note>
		 * Post #X-Amz-Target=IoTAutobahnControlPlane.ListModelManifestNodes
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListModelManifestNodesResponse} Success
		 */
		ListModelManifestNodes(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListModelManifestNodesRequest): Observable<ListModelManifestNodesResponse> {
			return this.http.post<ListModelManifestNodesResponse>(this.baseUri + '#X-Amz-Target=IoTAutobahnControlPlane.ListModelManifestNodes?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p> Retrieves a list of vehicle models (model manifests). </p> <note> <p>This API operation uses pagination. Specify the <code>nextToken</code> parameter in the request to return more results.</p> </note>
		 * Post #X-Amz-Target=IoTAutobahnControlPlane.ListModelManifests
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListModelManifestsResponse} Success
		 */
		ListModelManifests(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListModelManifestsRequest): Observable<ListModelManifestsResponse> {
			return this.http.post<ListModelManifestsResponse>(this.baseUri + '#X-Amz-Target=IoTAutobahnControlPlane.ListModelManifests?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p> Lists of information about the signals (nodes) specified in a signal catalog. </p> <note> <p>This API operation uses pagination. Specify the <code>nextToken</code> parameter in the request to return more results.</p> </note>
		 * Post #X-Amz-Target=IoTAutobahnControlPlane.ListSignalCatalogNodes
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListSignalCatalogNodesResponse} Success
		 */
		ListSignalCatalogNodes(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListSignalCatalogNodesRequest): Observable<ListSignalCatalogNodesResponse> {
			return this.http.post<ListSignalCatalogNodesResponse>(this.baseUri + '#X-Amz-Target=IoTAutobahnControlPlane.ListSignalCatalogNodes?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p> Lists all the created signal catalogs in an Amazon Web Services account. </p> <p>You can use to list information about each signal (node) specified in a signal catalog.</p> <note> <p>This API operation uses pagination. Specify the <code>nextToken</code> parameter in the request to return more results.</p> </note>
		 * Post #X-Amz-Target=IoTAutobahnControlPlane.ListSignalCatalogs
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListSignalCatalogsResponse} Success
		 */
		ListSignalCatalogs(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListSignalCatalogsRequest): Observable<ListSignalCatalogsResponse> {
			return this.http.post<ListSignalCatalogsResponse>(this.baseUri + '#X-Amz-Target=IoTAutobahnControlPlane.ListSignalCatalogs?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the tags (metadata) you have assigned to the resource.
		 * Post #X-Amz-Target=IoTAutobahnControlPlane.ListTagsForResource
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(requestBody: ListTagsForResourceRequest): Observable<ListTagsForResourceResponse> {
			return this.http.post<ListTagsForResourceResponse>(this.baseUri + '#X-Amz-Target=IoTAutobahnControlPlane.ListTagsForResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p> Retrieves a list of summaries of created vehicles. </p> <note> <p>This API operation uses pagination. Specify the <code>nextToken</code> parameter in the request to return more results.</p> </note>
		 * Post #X-Amz-Target=IoTAutobahnControlPlane.ListVehicles
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListVehiclesResponse} Success
		 */
		ListVehicles(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListVehiclesRequest): Observable<ListVehiclesResponse> {
			return this.http.post<ListVehiclesResponse>(this.baseUri + '#X-Amz-Target=IoTAutobahnControlPlane.ListVehicles?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p> Retrieves a list of summaries of all vehicles associated with a fleet. </p> <note> <p>This API operation uses pagination. Specify the <code>nextToken</code> parameter in the request to return more results.</p> </note>
		 * Post #X-Amz-Target=IoTAutobahnControlPlane.ListVehiclesInFleet
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListVehiclesInFleetResponse} Success
		 */
		ListVehiclesInFleet(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListVehiclesInFleetRequest): Observable<ListVehiclesInFleetResponse> {
			return this.http.post<ListVehiclesInFleetResponse>(this.baseUri + '#X-Amz-Target=IoTAutobahnControlPlane.ListVehiclesInFleet?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates or updates the logging option.
		 * Post #X-Amz-Target=IoTAutobahnControlPlane.PutLoggingOptions
		 * @return {PutLoggingOptionsResponse} Success
		 */
		PutLoggingOptions(requestBody: PutLoggingOptionsRequest): Observable<PutLoggingOptionsResponse> {
			return this.http.post<PutLoggingOptionsResponse>(this.baseUri + '#X-Amz-Target=IoTAutobahnControlPlane.PutLoggingOptions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <important> <p>This API operation contains deprecated parameters. Register your account again without the Timestream resources parameter so that Amazon Web Services IoT FleetWise can remove the Timestream metadata stored. You should then pass the data destination into the <a href="https://docs.aws.amazon.com/iot-fleetwise/latest/APIReference/API_CreateCampaign.html">CreateCampaign</a> API operation.</p> <p>You must delete any existing campaigns that include an empty data destination before you register your account again. For more information, see the <a href="https://docs.aws.amazon.com/iot-fleetwise/latest/APIReference/API_DeleteCampaign.html">DeleteCampaign</a> API operation.</p> <p>If you want to delete the Timestream inline policy from the service-linked role, such as to mitigate an overly permissive policy, you must first delete any existing campaigns. Then delete the service-linked role and register your account again to enable CloudWatch metrics. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteServiceLinkedRole.html">DeleteServiceLinkedRole</a> in the <i>Identity and Access Management API Reference</i>.</p> </important> <pre><code> &lt;p&gt;Registers your Amazon Web Services account, IAM, and Amazon Timestream resources so Amazon Web Services IoT FleetWise can transfer your vehicle data to the Amazon Web Services Cloud. For more information, including step-by-step procedures, see &lt;a href=&quot;https://docs.aws.amazon.com/iot-fleetwise/latest/developerguide/setting-up.html&quot;&gt;Setting up Amazon Web Services IoT FleetWise&lt;/a&gt;. &lt;/p&gt; &lt;note&gt; &lt;p&gt;An Amazon Web Services account is &lt;b&gt;not&lt;/b&gt; the same thing as a &quot;user.&quot; An &lt;a href=&quot;https://docs.aws.amazon.com/IAM/latest/UserGuide/introduction_identity-management.html#intro-identity-users&quot;&gt;Amazon Web Services user&lt;/a&gt; is an identity that you create using Identity and Access Management (IAM) and takes the form of either an &lt;a href=&quot;https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users.html&quot;&gt;IAM user&lt;/a&gt; or an &lt;a href=&quot;https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles.html&quot;&gt;IAM role, both with credentials&lt;/a&gt;. A single Amazon Web Services account can, and typically does, contain many users and roles.&lt;/p&gt; &lt;/note&gt; </code></pre>
		 * Post #X-Amz-Target=IoTAutobahnControlPlane.RegisterAccount
		 * @return {RegisterAccountResponse} Success
		 */
		RegisterAccount(requestBody: RegisterAccountRequest): Observable<RegisterAccountResponse> {
			return this.http.post<RegisterAccountResponse>(this.baseUri + '#X-Amz-Target=IoTAutobahnControlPlane.RegisterAccount', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Adds to or modifies the tags of the given resource. Tags are metadata which can be used to manage a resource.
		 * Post #X-Amz-Target=IoTAutobahnControlPlane.TagResource
		 * @return {TagResourceResponse} Success
		 */
		TagResource(requestBody: TagResourceRequest): Observable<TagResourceResponse> {
			return this.http.post<TagResourceResponse>(this.baseUri + '#X-Amz-Target=IoTAutobahnControlPlane.TagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes the given tags (metadata) from the resource.
		 * Post #X-Amz-Target=IoTAutobahnControlPlane.UntagResource
		 * @return {UntagResourceResponse} Success
		 */
		UntagResource(requestBody: UntagResourceRequest): Observable<UntagResourceResponse> {
			return this.http.post<UntagResourceResponse>(this.baseUri + '#X-Amz-Target=IoTAutobahnControlPlane.UntagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates a campaign.
		 * Post #X-Amz-Target=IoTAutobahnControlPlane.UpdateCampaign
		 * @return {UpdateCampaignResponse} Success
		 */
		UpdateCampaign(requestBody: UpdateCampaignRequest): Observable<UpdateCampaignResponse> {
			return this.http.post<UpdateCampaignResponse>(this.baseUri + '#X-Amz-Target=IoTAutobahnControlPlane.UpdateCampaign', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p> Updates a decoder manifest.</p> <p>A decoder manifest can only be updated when the status is <code>DRAFT</code>. Only <code>ACTIVE</code> decoder manifests can be associated with vehicles.</p>
		 * Post #X-Amz-Target=IoTAutobahnControlPlane.UpdateDecoderManifest
		 * @return {UpdateDecoderManifestResponse} Success
		 */
		UpdateDecoderManifest(requestBody: UpdateDecoderManifestRequest): Observable<UpdateDecoderManifestResponse> {
			return this.http.post<UpdateDecoderManifestResponse>(this.baseUri + '#X-Amz-Target=IoTAutobahnControlPlane.UpdateDecoderManifest', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p> Updates the description of an existing fleet. </p> <note> <p>If the fleet is successfully updated, Amazon Web Services IoT FleetWise sends back an HTTP 200 response with an empty HTTP body.</p> </note>
		 * Post #X-Amz-Target=IoTAutobahnControlPlane.UpdateFleet
		 * @return {UpdateFleetResponse} Success
		 */
		UpdateFleet(requestBody: UpdateFleetRequest): Observable<UpdateFleetResponse> {
			return this.http.post<UpdateFleetResponse>(this.baseUri + '#X-Amz-Target=IoTAutobahnControlPlane.UpdateFleet', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates a vehicle model (model manifest). If created vehicles are associated with a vehicle model, it can't be updated.
		 * Post #X-Amz-Target=IoTAutobahnControlPlane.UpdateModelManifest
		 * @return {UpdateModelManifestResponse} Success
		 */
		UpdateModelManifest(requestBody: UpdateModelManifestRequest): Observable<UpdateModelManifestResponse> {
			return this.http.post<UpdateModelManifestResponse>(this.baseUri + '#X-Amz-Target=IoTAutobahnControlPlane.UpdateModelManifest', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates a signal catalog.
		 * Post #X-Amz-Target=IoTAutobahnControlPlane.UpdateSignalCatalog
		 * @return {UpdateSignalCatalogResponse} Success
		 */
		UpdateSignalCatalog(requestBody: UpdateSignalCatalogRequest): Observable<UpdateSignalCatalogResponse> {
			return this.http.post<UpdateSignalCatalogResponse>(this.baseUri + '#X-Amz-Target=IoTAutobahnControlPlane.UpdateSignalCatalog', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates a vehicle.
		 * Post #X-Amz-Target=IoTAutobahnControlPlane.UpdateVehicle
		 * @return {UpdateVehicleResponse} Success
		 */
		UpdateVehicle(requestBody: UpdateVehicleRequest): Observable<UpdateVehicleResponse> {
			return this.http.post<UpdateVehicleResponse>(this.baseUri + '#X-Amz-Target=IoTAutobahnControlPlane.UpdateVehicle', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum AssociateVehicleFleetX_Amz_Target { 'IoTAutobahnControlPlane.AssociateVehicleFleet' = 0 }

	export enum BatchCreateVehicleX_Amz_Target { 'IoTAutobahnControlPlane.BatchCreateVehicle' = 0 }

	export enum BatchUpdateVehicleX_Amz_Target { 'IoTAutobahnControlPlane.BatchUpdateVehicle' = 0 }

	export enum CreateCampaignX_Amz_Target { 'IoTAutobahnControlPlane.CreateCampaign' = 0 }

	export enum CreateDecoderManifestX_Amz_Target { 'IoTAutobahnControlPlane.CreateDecoderManifest' = 0 }

	export enum CreateFleetX_Amz_Target { 'IoTAutobahnControlPlane.CreateFleet' = 0 }

	export enum CreateModelManifestX_Amz_Target { 'IoTAutobahnControlPlane.CreateModelManifest' = 0 }

	export enum CreateSignalCatalogX_Amz_Target { 'IoTAutobahnControlPlane.CreateSignalCatalog' = 0 }

	export enum CreateVehicleX_Amz_Target { 'IoTAutobahnControlPlane.CreateVehicle' = 0 }

	export enum DeleteCampaignX_Amz_Target { 'IoTAutobahnControlPlane.DeleteCampaign' = 0 }

	export enum DeleteDecoderManifestX_Amz_Target { 'IoTAutobahnControlPlane.DeleteDecoderManifest' = 0 }

	export enum DeleteFleetX_Amz_Target { 'IoTAutobahnControlPlane.DeleteFleet' = 0 }

	export enum DeleteModelManifestX_Amz_Target { 'IoTAutobahnControlPlane.DeleteModelManifest' = 0 }

	export enum DeleteSignalCatalogX_Amz_Target { 'IoTAutobahnControlPlane.DeleteSignalCatalog' = 0 }

	export enum DeleteVehicleX_Amz_Target { 'IoTAutobahnControlPlane.DeleteVehicle' = 0 }

	export enum DisassociateVehicleFleetX_Amz_Target { 'IoTAutobahnControlPlane.DisassociateVehicleFleet' = 0 }

	export enum GetCampaignX_Amz_Target { 'IoTAutobahnControlPlane.GetCampaign' = 0 }

	export enum GetDecoderManifestX_Amz_Target { 'IoTAutobahnControlPlane.GetDecoderManifest' = 0 }

	export enum GetFleetX_Amz_Target { 'IoTAutobahnControlPlane.GetFleet' = 0 }

	export enum GetLoggingOptionsX_Amz_Target { 'IoTAutobahnControlPlane.GetLoggingOptions' = 0 }

	export enum GetModelManifestX_Amz_Target { 'IoTAutobahnControlPlane.GetModelManifest' = 0 }

	export enum GetRegisterAccountStatusX_Amz_Target { 'IoTAutobahnControlPlane.GetRegisterAccountStatus' = 0 }

	export enum GetSignalCatalogX_Amz_Target { 'IoTAutobahnControlPlane.GetSignalCatalog' = 0 }

	export enum GetVehicleX_Amz_Target { 'IoTAutobahnControlPlane.GetVehicle' = 0 }

	export enum GetVehicleStatusX_Amz_Target { 'IoTAutobahnControlPlane.GetVehicleStatus' = 0 }

	export enum ImportDecoderManifestX_Amz_Target { 'IoTAutobahnControlPlane.ImportDecoderManifest' = 0 }

	export enum ImportSignalCatalogX_Amz_Target { 'IoTAutobahnControlPlane.ImportSignalCatalog' = 0 }

	export enum ListCampaignsX_Amz_Target { 'IoTAutobahnControlPlane.ListCampaigns' = 0 }

	export enum ListDecoderManifestNetworkInterfacesX_Amz_Target { 'IoTAutobahnControlPlane.ListDecoderManifestNetworkInterfaces' = 0 }

	export enum ListDecoderManifestSignalsX_Amz_Target { 'IoTAutobahnControlPlane.ListDecoderManifestSignals' = 0 }

	export enum ListDecoderManifestsX_Amz_Target { 'IoTAutobahnControlPlane.ListDecoderManifests' = 0 }

	export enum ListFleetsX_Amz_Target { 'IoTAutobahnControlPlane.ListFleets' = 0 }

	export enum ListFleetsForVehicleX_Amz_Target { 'IoTAutobahnControlPlane.ListFleetsForVehicle' = 0 }

	export enum ListModelManifestNodesX_Amz_Target { 'IoTAutobahnControlPlane.ListModelManifestNodes' = 0 }

	export enum ListModelManifestsX_Amz_Target { 'IoTAutobahnControlPlane.ListModelManifests' = 0 }

	export enum ListSignalCatalogNodesX_Amz_Target { 'IoTAutobahnControlPlane.ListSignalCatalogNodes' = 0 }

	export enum ListSignalCatalogsX_Amz_Target { 'IoTAutobahnControlPlane.ListSignalCatalogs' = 0 }

	export enum ListTagsForResourceX_Amz_Target { 'IoTAutobahnControlPlane.ListTagsForResource' = 0 }

	export enum ListVehiclesX_Amz_Target { 'IoTAutobahnControlPlane.ListVehicles' = 0 }

	export enum ListVehiclesInFleetX_Amz_Target { 'IoTAutobahnControlPlane.ListVehiclesInFleet' = 0 }

	export enum PutLoggingOptionsX_Amz_Target { 'IoTAutobahnControlPlane.PutLoggingOptions' = 0 }

	export enum RegisterAccountX_Amz_Target { 'IoTAutobahnControlPlane.RegisterAccount' = 0 }

	export enum TagResourceX_Amz_Target { 'IoTAutobahnControlPlane.TagResource' = 0 }

	export enum UntagResourceX_Amz_Target { 'IoTAutobahnControlPlane.UntagResource' = 0 }

	export enum UpdateCampaignX_Amz_Target { 'IoTAutobahnControlPlane.UpdateCampaign' = 0 }

	export enum UpdateDecoderManifestX_Amz_Target { 'IoTAutobahnControlPlane.UpdateDecoderManifest' = 0 }

	export enum UpdateFleetX_Amz_Target { 'IoTAutobahnControlPlane.UpdateFleet' = 0 }

	export enum UpdateModelManifestX_Amz_Target { 'IoTAutobahnControlPlane.UpdateModelManifest' = 0 }

	export enum UpdateSignalCatalogX_Amz_Target { 'IoTAutobahnControlPlane.UpdateSignalCatalog' = 0 }

	export enum UpdateVehicleX_Amz_Target { 'IoTAutobahnControlPlane.UpdateVehicle' = 0 }

}

