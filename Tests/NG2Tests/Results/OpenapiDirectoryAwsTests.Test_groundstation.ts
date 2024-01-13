import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** <p/> */
	export interface ContactIdResponse {
		contactId?: string | null;
	}

	/** <p/> */
	export interface ContactIdResponseFormProperties {
		contactId: FormControl<string | null | undefined>,
	}
	export function CreateContactIdResponseFormGroup() {
		return new FormGroup<ContactIdResponseFormProperties>({
			contactId: new FormControl<string | null | undefined>(undefined),
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

	export interface DependencyException {
	}
	export interface DependencyExceptionFormProperties {
	}
	export function CreateDependencyExceptionFormGroup() {
		return new FormGroup<DependencyExceptionFormProperties>({
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


	/** <p/> */
	export interface ConfigIdResponse {
		configArn?: string | null;
		configId?: string | null;
		configType?: ConfigIdResponseConfigType | null;
	}

	/** <p/> */
	export interface ConfigIdResponseFormProperties {
		configArn: FormControl<string | null | undefined>,
		configId: FormControl<string | null | undefined>,
		configType: FormControl<ConfigIdResponseConfigType | null | undefined>,
	}
	export function CreateConfigIdResponseFormGroup() {
		return new FormGroup<ConfigIdResponseFormProperties>({
			configArn: new FormControl<string | null | undefined>(undefined),
			configId: new FormControl<string | null | undefined>(undefined),
			configType: new FormControl<ConfigIdResponseConfigType | null | undefined>(undefined),
		});

	}

	export enum ConfigIdResponseConfigType { 'antenna-downlink' = 0, 'antenna-downlink-demod-decode' = 1, 'antenna-uplink' = 2, 'dataflow-endpoint' = 3, tracking = 4, 'uplink-echo' = 5 }


	/** Information about how AWS Ground Station should configure an antenna for downlink during a contact. */
	export interface AntennaDownlinkConfig {

		/**
		 * Object that describes a spectral <code>Config</code>.
		 * Required
		 */
		spectrumConfig: SpectrumConfig;
	}

	/** Information about how AWS Ground Station should configure an antenna for downlink during a contact. */
	export interface AntennaDownlinkConfigFormProperties {
	}
	export function CreateAntennaDownlinkConfigFormGroup() {
		return new FormGroup<AntennaDownlinkConfigFormProperties>({
		});

	}


	/** Object that describes a spectral <code>Config</code>. */
	export interface SpectrumConfig {

		/**
		 * Object that describes the frequency bandwidth.
		 * Required
		 */
		bandwidth: FrequencyBandwidth;

		/**
		 * Object that describes the frequency.
		 * Required
		 */
		centerFrequency: Frequency;
		polarization?: SpectrumConfigPolarization | null;
	}

	/** Object that describes a spectral <code>Config</code>. */
	export interface SpectrumConfigFormProperties {
		polarization: FormControl<SpectrumConfigPolarization | null | undefined>,
	}
	export function CreateSpectrumConfigFormGroup() {
		return new FormGroup<SpectrumConfigFormProperties>({
			polarization: new FormControl<SpectrumConfigPolarization | null | undefined>(undefined),
		});

	}


	/** Object that describes the frequency bandwidth. */
	export interface FrequencyBandwidth {

		/** Required */
		units: FrequencyBandwidthUnits;

		/** Required */
		value: number;
	}

	/** Object that describes the frequency bandwidth. */
	export interface FrequencyBandwidthFormProperties {

		/** Required */
		units: FormControl<FrequencyBandwidthUnits | null | undefined>,

		/** Required */
		value: FormControl<number | null | undefined>,
	}
	export function CreateFrequencyBandwidthFormGroup() {
		return new FormGroup<FrequencyBandwidthFormProperties>({
			units: new FormControl<FrequencyBandwidthUnits | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum FrequencyBandwidthUnits { GHz = 0, MHz = 1, kHz = 2 }


	/** Object that describes the frequency. */
	export interface Frequency {

		/** Required */
		units: FrequencyBandwidthUnits;

		/** Required */
		value: number;
	}

	/** Object that describes the frequency. */
	export interface FrequencyFormProperties {

		/** Required */
		units: FormControl<FrequencyBandwidthUnits | null | undefined>,

		/** Required */
		value: FormControl<number | null | undefined>,
	}
	export function CreateFrequencyFormGroup() {
		return new FormGroup<FrequencyFormProperties>({
			units: new FormControl<FrequencyBandwidthUnits | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum SpectrumConfigPolarization { LEFT_HAND = 0, NONE = 1, RIGHT_HAND = 2 }


	/** Information about how AWS Ground Station should conﬁgure an antenna for downlink demod decode during a contact. */
	export interface AntennaDownlinkDemodDecodeConfig {

		/**
		 * Information about the decode <code>Config</code>.
		 * Required
		 */
		decodeConfig: DecodeConfig;

		/**
		 * Information about the demodulation <code>Config</code>.
		 * Required
		 */
		demodulationConfig: DemodulationConfig;

		/**
		 * Object that describes a spectral <code>Config</code>.
		 * Required
		 */
		spectrumConfig: SpectrumConfig;
	}

	/** Information about how AWS Ground Station should conﬁgure an antenna for downlink demod decode during a contact. */
	export interface AntennaDownlinkDemodDecodeConfigFormProperties {
	}
	export function CreateAntennaDownlinkDemodDecodeConfigFormGroup() {
		return new FormGroup<AntennaDownlinkDemodDecodeConfigFormProperties>({
		});

	}


	/** Information about the decode <code>Config</code>. */
	export interface DecodeConfig {

		/**
		 * Required
		 * Max length: 8192
		 * Min length: 2
		 */
		unvalidatedJSON: string;
	}

	/** Information about the decode <code>Config</code>. */
	export interface DecodeConfigFormProperties {

		/**
		 * Required
		 * Max length: 8192
		 * Min length: 2
		 */
		unvalidatedJSON: FormControl<string | null | undefined>,
	}
	export function CreateDecodeConfigFormGroup() {
		return new FormGroup<DecodeConfigFormProperties>({
			unvalidatedJSON: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(2), Validators.maxLength(8192), Validators.pattern('^[{}\[\]:.,"0-9A-z\-_\s]{2,8192}$')]),
		});

	}


	/** Information about the demodulation <code>Config</code>. */
	export interface DemodulationConfig {

		/**
		 * Required
		 * Max length: 8192
		 * Min length: 2
		 */
		unvalidatedJSON: string;
	}

	/** Information about the demodulation <code>Config</code>. */
	export interface DemodulationConfigFormProperties {

		/**
		 * Required
		 * Max length: 8192
		 * Min length: 2
		 */
		unvalidatedJSON: FormControl<string | null | undefined>,
	}
	export function CreateDemodulationConfigFormGroup() {
		return new FormGroup<DemodulationConfigFormProperties>({
			unvalidatedJSON: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(2), Validators.maxLength(8192), Validators.pattern('^[{}\[\]:.,"0-9A-z\-_\s]{2,8192}$')]),
		});

	}


	/** Information about the uplink <code>Config</code> of an antenna. */
	export interface AntennaUplinkConfig {

		/**
		 * Information about the uplink spectral <code>Config</code>.
		 * Required
		 */
		spectrumConfig: UplinkSpectrumConfig;

		/**
		 * Object that represents EIRP.
		 * Required
		 */
		targetEirp: Eirp;
	}

	/** Information about the uplink <code>Config</code> of an antenna. */
	export interface AntennaUplinkConfigFormProperties {
	}
	export function CreateAntennaUplinkConfigFormGroup() {
		return new FormGroup<AntennaUplinkConfigFormProperties>({
		});

	}


	/** Information about the uplink spectral <code>Config</code>. */
	export interface UplinkSpectrumConfig {

		/**
		 * Object that describes the frequency.
		 * Required
		 */
		centerFrequency: Frequency;
		polarization?: SpectrumConfigPolarization | null;
	}

	/** Information about the uplink spectral <code>Config</code>. */
	export interface UplinkSpectrumConfigFormProperties {
		polarization: FormControl<SpectrumConfigPolarization | null | undefined>,
	}
	export function CreateUplinkSpectrumConfigFormGroup() {
		return new FormGroup<UplinkSpectrumConfigFormProperties>({
			polarization: new FormControl<SpectrumConfigPolarization | null | undefined>(undefined),
		});

	}


	/** Object that represents EIRP. */
	export interface Eirp {

		/** Required */
		units: EirpUnits;

		/** Required */
		value: number;
	}

	/** Object that represents EIRP. */
	export interface EirpFormProperties {

		/** Required */
		units: FormControl<EirpUnits | null | undefined>,

		/** Required */
		value: FormControl<number | null | undefined>,
	}
	export function CreateEirpFormGroup() {
		return new FormGroup<EirpFormProperties>({
			units: new FormControl<EirpUnits | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum EirpUnits { dBW = 0 }


	/** Information about the dataflow endpoint <code>Config</code>. */
	export interface DataflowEndpointConfig {

		/** Required */
		dataflowEndpointName: string;
		dataflowEndpointRegion?: string | null;
	}

	/** Information about the dataflow endpoint <code>Config</code>. */
	export interface DataflowEndpointConfigFormProperties {

		/** Required */
		dataflowEndpointName: FormControl<string | null | undefined>,
		dataflowEndpointRegion: FormControl<string | null | undefined>,
	}
	export function CreateDataflowEndpointConfigFormGroup() {
		return new FormGroup<DataflowEndpointConfigFormProperties>({
			dataflowEndpointName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			dataflowEndpointRegion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Object that determines whether tracking should be used during a contact executed with this <code>Config</code> in the mission profile. */
	export interface TrackingConfig {

		/** Required */
		autotrack: TrackingConfigAutotrack;
	}

	/** Object that determines whether tracking should be used during a contact executed with this <code>Config</code> in the mission profile. */
	export interface TrackingConfigFormProperties {

		/** Required */
		autotrack: FormControl<TrackingConfigAutotrack | null | undefined>,
	}
	export function CreateTrackingConfigFormGroup() {
		return new FormGroup<TrackingConfigFormProperties>({
			autotrack: new FormControl<TrackingConfigAutotrack | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum TrackingConfigAutotrack { PREFERRED = 0, REMOVED = 1, REQUIRED = 2 }


	/** <p>Information about an uplink echo <code>Config</code>.</p> <p>Parameters from the <code>AntennaUplinkConfig</code>, corresponding to the specified <code>AntennaUplinkConfigArn</code>, are used when this <code>UplinkEchoConfig</code> is used in a contact.</p> */
	export interface UplinkEchoConfig {

		/** Required */
		antennaUplinkConfigArn: string;

		/** Required */
		enabled: boolean;
	}

	/** <p>Information about an uplink echo <code>Config</code>.</p> <p>Parameters from the <code>AntennaUplinkConfig</code>, corresponding to the specified <code>AntennaUplinkConfigArn</code>, are used when this <code>UplinkEchoConfig</code> is used in a contact.</p> */
	export interface UplinkEchoConfigFormProperties {

		/** Required */
		antennaUplinkConfigArn: FormControl<string | null | undefined>,

		/** Required */
		enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateUplinkEchoConfigFormGroup() {
		return new FormGroup<UplinkEchoConfigFormProperties>({
			antennaUplinkConfigArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			enabled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
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


	/** <p/> */
	export interface DataflowEndpointGroupIdResponse {
		dataflowEndpointGroupId?: string | null;
	}

	/** <p/> */
	export interface DataflowEndpointGroupIdResponseFormProperties {
		dataflowEndpointGroupId: FormControl<string | null | undefined>,
	}
	export function CreateDataflowEndpointGroupIdResponseFormGroup() {
		return new FormGroup<DataflowEndpointGroupIdResponseFormProperties>({
			dataflowEndpointGroupId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about the endpoint details. */
	export interface EndpointDetails {

		/** Information about a dataflow endpoint. */
		endpoint?: DataflowEndpoint;

		/** Information about endpoints. */
		securityDetails?: SecurityDetails;
	}

	/** Information about the endpoint details. */
	export interface EndpointDetailsFormProperties {
	}
	export function CreateEndpointDetailsFormGroup() {
		return new FormGroup<EndpointDetailsFormProperties>({
		});

	}


	/** Information about a dataflow endpoint. */
	export interface DataflowEndpoint {

		/** Information about the socket address. */
		address?: SocketAddress;

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		name?: string | null;
		status?: DataflowEndpointStatus | null;
	}

	/** Information about a dataflow endpoint. */
	export interface DataflowEndpointFormProperties {

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,
		status: FormControl<DataflowEndpointStatus | null | undefined>,
	}
	export function CreateDataflowEndpointFormGroup() {
		return new FormGroup<DataflowEndpointFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256), Validators.pattern('^[ a-zA-Z0-9_:-]{1,256}$')]),
			status: new FormControl<DataflowEndpointStatus | null | undefined>(undefined),
		});

	}


	/** Information about the socket address. */
	export interface SocketAddress {

		/** Required */
		name: string;

		/** Required */
		port: number;
	}

	/** Information about the socket address. */
	export interface SocketAddressFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		port: FormControl<number | null | undefined>,
	}
	export function CreateSocketAddressFormGroup() {
		return new FormGroup<SocketAddressFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			port: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum DataflowEndpointStatus { created = 0, creating = 1, deleted = 2, deleting = 3, failed = 4 }


	/** Information about endpoints. */
	export interface SecurityDetails {

		/** Required */
		roleArn: string;

		/** Required */
		securityGroupIds: Array<string>;

		/** Required */
		subnetIds: Array<string>;
	}

	/** Information about endpoints. */
	export interface SecurityDetailsFormProperties {

		/** Required */
		roleArn: FormControl<string | null | undefined>,
	}
	export function CreateSecurityDetailsFormGroup() {
		return new FormGroup<SecurityDetailsFormProperties>({
			roleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p/> */
	export interface MissionProfileIdResponse {
		missionProfileId?: string | null;
	}

	/** <p/> */
	export interface MissionProfileIdResponseFormProperties {
		missionProfileId: FormControl<string | null | undefined>,
	}
	export function CreateMissionProfileIdResponseFormGroup() {
		return new FormGroup<MissionProfileIdResponseFormProperties>({
			missionProfileId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p/> */
	export interface DescribeContactResponse {
		contactId?: string | null;
		contactStatus?: DescribeContactResponseContactStatus | null;
		endTime?: Date | null;
		errorMessage?: string | null;
		groundStation?: string | null;

		/** Elevation angle of the satellite in the sky during a contact. */
		maximumElevation?: Elevation;
		missionProfileArn?: string | null;
		postPassEndTime?: Date | null;
		prePassStartTime?: Date | null;
		region?: string | null;
		satelliteArn?: string | null;
		startTime?: Date | null;
		tags?: TagsMap;
	}

	/** <p/> */
	export interface DescribeContactResponseFormProperties {
		contactId: FormControl<string | null | undefined>,
		contactStatus: FormControl<DescribeContactResponseContactStatus | null | undefined>,
		endTime: FormControl<Date | null | undefined>,
		errorMessage: FormControl<string | null | undefined>,
		groundStation: FormControl<string | null | undefined>,
		missionProfileArn: FormControl<string | null | undefined>,
		postPassEndTime: FormControl<Date | null | undefined>,
		prePassStartTime: FormControl<Date | null | undefined>,
		region: FormControl<string | null | undefined>,
		satelliteArn: FormControl<string | null | undefined>,
		startTime: FormControl<Date | null | undefined>,
	}
	export function CreateDescribeContactResponseFormGroup() {
		return new FormGroup<DescribeContactResponseFormProperties>({
			contactId: new FormControl<string | null | undefined>(undefined),
			contactStatus: new FormControl<DescribeContactResponseContactStatus | null | undefined>(undefined),
			endTime: new FormControl<Date | null | undefined>(undefined),
			errorMessage: new FormControl<string | null | undefined>(undefined),
			groundStation: new FormControl<string | null | undefined>(undefined),
			missionProfileArn: new FormControl<string | null | undefined>(undefined),
			postPassEndTime: new FormControl<Date | null | undefined>(undefined),
			prePassStartTime: new FormControl<Date | null | undefined>(undefined),
			region: new FormControl<string | null | undefined>(undefined),
			satelliteArn: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum DescribeContactResponseContactStatus { AVAILABLE = 0, AWS_CANCELLED = 1, CANCELLED = 2, CANCELLING = 3, COMPLETED = 4, FAILED = 5, FAILED_TO_SCHEDULE = 6, PASS = 7, POSTPASS = 8, PREPASS = 9, SCHEDULED = 10, SCHEDULING = 11 }


	/** Elevation angle of the satellite in the sky during a contact. */
	export interface Elevation {

		/** Required */
		unit: ElevationUnit;

		/** Required */
		value: number;
	}

	/** Elevation angle of the satellite in the sky during a contact. */
	export interface ElevationFormProperties {

		/** Required */
		unit: FormControl<ElevationUnit | null | undefined>,

		/** Required */
		value: FormControl<number | null | undefined>,
	}
	export function CreateElevationFormGroup() {
		return new FormGroup<ElevationFormProperties>({
			unit: new FormControl<ElevationUnit | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ElevationUnit { DEGREE_ANGLE = 0, RADIAN = 1 }

	export interface TagsMap {
	}
	export interface TagsMapFormProperties {
	}
	export function CreateTagsMapFormGroup() {
		return new FormGroup<TagsMapFormProperties>({
		});

	}


	/** <p/> */
	export interface GetConfigResponse {

		/** Required */
		configArn: string;

		/**
		 * <p>Object containing the parameters of a <code>Config</code>.</p> <p>See the subtype definitions for what each type of <code>Config</code> contains.</p>
		 * Required
		 */
		configData: ConfigTypeData;

		/** Required */
		configId: string;
		configType?: ConfigIdResponseConfigType | null;

		/** Required */
		name: string;
		tags?: TagsMap;
	}

	/** <p/> */
	export interface GetConfigResponseFormProperties {

		/** Required */
		configArn: FormControl<string | null | undefined>,

		/** Required */
		configId: FormControl<string | null | undefined>,
		configType: FormControl<ConfigIdResponseConfigType | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGetConfigResponseFormGroup() {
		return new FormGroup<GetConfigResponseFormProperties>({
			configArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			configId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			configType: new FormControl<ConfigIdResponseConfigType | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p>Object containing the parameters of a <code>Config</code>.</p> <p>See the subtype definitions for what each type of <code>Config</code> contains.</p> */
	export interface ConfigTypeData {

		/** Information about how AWS Ground Station should configure an antenna for downlink during a contact. */
		antennaDownlinkConfig?: AntennaDownlinkConfig;

		/** Information about how AWS Ground Station should conﬁgure an antenna for downlink demod decode during a contact. */
		antennaDownlinkDemodDecodeConfig?: AntennaDownlinkDemodDecodeConfig;

		/** Information about the uplink <code>Config</code> of an antenna. */
		antennaUplinkConfig?: AntennaUplinkConfig;

		/** Information about the dataflow endpoint <code>Config</code>. */
		dataflowEndpointConfig?: DataflowEndpointConfig;

		/** Object that determines whether tracking should be used during a contact executed with this <code>Config</code> in the mission profile. */
		trackingConfig?: TrackingConfig;

		/** <p>Information about an uplink echo <code>Config</code>.</p> <p>Parameters from the <code>AntennaUplinkConfig</code>, corresponding to the specified <code>AntennaUplinkConfigArn</code>, are used when this <code>UplinkEchoConfig</code> is used in a contact.</p> */
		uplinkEchoConfig?: UplinkEchoConfig;
	}

	/** <p>Object containing the parameters of a <code>Config</code>.</p> <p>See the subtype definitions for what each type of <code>Config</code> contains.</p> */
	export interface ConfigTypeDataFormProperties {
	}
	export function CreateConfigTypeDataFormGroup() {
		return new FormGroup<ConfigTypeDataFormProperties>({
		});

	}


	/** <p/> */
	export interface GetDataflowEndpointGroupResponse {
		dataflowEndpointGroupArn?: string | null;
		dataflowEndpointGroupId?: string | null;
		endpointsDetails?: Array<EndpointDetails>;
		tags?: TagsMap;
	}

	/** <p/> */
	export interface GetDataflowEndpointGroupResponseFormProperties {
		dataflowEndpointGroupArn: FormControl<string | null | undefined>,
		dataflowEndpointGroupId: FormControl<string | null | undefined>,
	}
	export function CreateGetDataflowEndpointGroupResponseFormGroup() {
		return new FormGroup<GetDataflowEndpointGroupResponseFormProperties>({
			dataflowEndpointGroupArn: new FormControl<string | null | undefined>(undefined),
			dataflowEndpointGroupId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p/> */
	export interface GetMinuteUsageResponse {
		estimatedMinutesRemaining?: number | null;
		isReservedMinutesCustomer?: boolean | null;
		totalReservedMinuteAllocation?: number | null;
		totalScheduledMinutes?: number | null;
		upcomingMinutesScheduled?: number | null;
	}

	/** <p/> */
	export interface GetMinuteUsageResponseFormProperties {
		estimatedMinutesRemaining: FormControl<number | null | undefined>,
		isReservedMinutesCustomer: FormControl<boolean | null | undefined>,
		totalReservedMinuteAllocation: FormControl<number | null | undefined>,
		totalScheduledMinutes: FormControl<number | null | undefined>,
		upcomingMinutesScheduled: FormControl<number | null | undefined>,
	}
	export function CreateGetMinuteUsageResponseFormGroup() {
		return new FormGroup<GetMinuteUsageResponseFormProperties>({
			estimatedMinutesRemaining: new FormControl<number | null | undefined>(undefined),
			isReservedMinutesCustomer: new FormControl<boolean | null | undefined>(undefined),
			totalReservedMinuteAllocation: new FormControl<number | null | undefined>(undefined),
			totalScheduledMinutes: new FormControl<number | null | undefined>(undefined),
			upcomingMinutesScheduled: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** <p/> */
	export interface GetMissionProfileResponse {

		/**
		 * Minimum: 1
		 * Maximum: 21600
		 */
		contactPostPassDurationSeconds?: number | null;

		/**
		 * Minimum: 1
		 * Maximum: 21600
		 */
		contactPrePassDurationSeconds?: number | null;
		dataflowEdges?: Array<Array<string>>;

		/**
		 * Minimum: 1
		 * Maximum: 21600
		 */
		minimumViableContactDurationSeconds?: number | null;
		missionProfileArn?: string | null;
		missionProfileId?: string | null;
		name?: string | null;
		region?: string | null;
		tags?: TagsMap;
		trackingConfigArn?: string | null;
	}

	/** <p/> */
	export interface GetMissionProfileResponseFormProperties {

		/**
		 * Minimum: 1
		 * Maximum: 21600
		 */
		contactPostPassDurationSeconds: FormControl<number | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 21600
		 */
		contactPrePassDurationSeconds: FormControl<number | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 21600
		 */
		minimumViableContactDurationSeconds: FormControl<number | null | undefined>,
		missionProfileArn: FormControl<string | null | undefined>,
		missionProfileId: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		region: FormControl<string | null | undefined>,
		trackingConfigArn: FormControl<string | null | undefined>,
	}
	export function CreateGetMissionProfileResponseFormGroup() {
		return new FormGroup<GetMissionProfileResponseFormProperties>({
			contactPostPassDurationSeconds: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(21600)]),
			contactPrePassDurationSeconds: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(21600)]),
			minimumViableContactDurationSeconds: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(21600)]),
			missionProfileArn: new FormControl<string | null | undefined>(undefined),
			missionProfileId: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			region: new FormControl<string | null | undefined>(undefined),
			trackingConfigArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p/> */
	export interface GetSatelliteResponse {
		groundStations?: Array<string>;

		/**
		 * Minimum: 1
		 * Maximum: 99999
		 */
		noradSatelliteID?: number | null;
		satelliteArn?: string | null;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		satelliteId?: string | null;
	}

	/** <p/> */
	export interface GetSatelliteResponseFormProperties {

		/**
		 * Minimum: 1
		 * Maximum: 99999
		 */
		noradSatelliteID: FormControl<number | null | undefined>,
		satelliteArn: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		satelliteId: FormControl<string | null | undefined>,
	}
	export function CreateGetSatelliteResponseFormGroup() {
		return new FormGroup<GetSatelliteResponseFormProperties>({
			noradSatelliteID: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(99999)]),
			satelliteArn: new FormControl<string | null | undefined>(undefined),
			satelliteId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}')]),
		});

	}


	/** <p/> */
	export interface ListConfigsResponse {
		configList?: Array<ConfigListItem>;
		nextToken?: string | null;
	}

	/** <p/> */
	export interface ListConfigsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListConfigsResponseFormGroup() {
		return new FormGroup<ListConfigsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An item in a list of <code>Config</code> objects. */
	export interface ConfigListItem {
		configArn?: string | null;
		configId?: string | null;
		configType?: ConfigIdResponseConfigType | null;
		name?: string | null;
	}

	/** An item in a list of <code>Config</code> objects. */
	export interface ConfigListItemFormProperties {
		configArn: FormControl<string | null | undefined>,
		configId: FormControl<string | null | undefined>,
		configType: FormControl<ConfigIdResponseConfigType | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateConfigListItemFormGroup() {
		return new FormGroup<ConfigListItemFormProperties>({
			configArn: new FormControl<string | null | undefined>(undefined),
			configId: new FormControl<string | null | undefined>(undefined),
			configType: new FormControl<ConfigIdResponseConfigType | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p/> */
	export interface ListContactsResponse {
		contactList?: Array<ContactData>;
		nextToken?: string | null;
	}

	/** <p/> */
	export interface ListContactsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListContactsResponseFormGroup() {
		return new FormGroup<ListContactsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Data describing a contact. */
	export interface ContactData {
		contactId?: string | null;
		contactStatus?: DescribeContactResponseContactStatus | null;
		endTime?: Date | null;
		errorMessage?: string | null;
		groundStation?: string | null;

		/** Elevation angle of the satellite in the sky during a contact. */
		maximumElevation?: Elevation;
		missionProfileArn?: string | null;
		postPassEndTime?: Date | null;
		prePassStartTime?: Date | null;
		region?: string | null;
		satelliteArn?: string | null;
		startTime?: Date | null;
		tags?: TagsMap;
	}

	/** Data describing a contact. */
	export interface ContactDataFormProperties {
		contactId: FormControl<string | null | undefined>,
		contactStatus: FormControl<DescribeContactResponseContactStatus | null | undefined>,
		endTime: FormControl<Date | null | undefined>,
		errorMessage: FormControl<string | null | undefined>,
		groundStation: FormControl<string | null | undefined>,
		missionProfileArn: FormControl<string | null | undefined>,
		postPassEndTime: FormControl<Date | null | undefined>,
		prePassStartTime: FormControl<Date | null | undefined>,
		region: FormControl<string | null | undefined>,
		satelliteArn: FormControl<string | null | undefined>,
		startTime: FormControl<Date | null | undefined>,
	}
	export function CreateContactDataFormGroup() {
		return new FormGroup<ContactDataFormProperties>({
			contactId: new FormControl<string | null | undefined>(undefined),
			contactStatus: new FormControl<DescribeContactResponseContactStatus | null | undefined>(undefined),
			endTime: new FormControl<Date | null | undefined>(undefined),
			errorMessage: new FormControl<string | null | undefined>(undefined),
			groundStation: new FormControl<string | null | undefined>(undefined),
			missionProfileArn: new FormControl<string | null | undefined>(undefined),
			postPassEndTime: new FormControl<Date | null | undefined>(undefined),
			prePassStartTime: new FormControl<Date | null | undefined>(undefined),
			region: new FormControl<string | null | undefined>(undefined),
			satelliteArn: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum ContactStatus { AVAILABLE = 0, AWS_CANCELLED = 1, CANCELLED = 2, CANCELLING = 3, COMPLETED = 4, FAILED = 5, FAILED_TO_SCHEDULE = 6, PASS = 7, POSTPASS = 8, PREPASS = 9, SCHEDULED = 10, SCHEDULING = 11 }


	/** <p/> */
	export interface ListDataflowEndpointGroupsResponse {
		dataflowEndpointGroupList?: Array<DataflowEndpointListItem>;
		nextToken?: string | null;
	}

	/** <p/> */
	export interface ListDataflowEndpointGroupsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListDataflowEndpointGroupsResponseFormGroup() {
		return new FormGroup<ListDataflowEndpointGroupsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Item in a list of <code>DataflowEndpoint</code> groups. */
	export interface DataflowEndpointListItem {
		dataflowEndpointGroupArn?: string | null;
		dataflowEndpointGroupId?: string | null;
	}

	/** Item in a list of <code>DataflowEndpoint</code> groups. */
	export interface DataflowEndpointListItemFormProperties {
		dataflowEndpointGroupArn: FormControl<string | null | undefined>,
		dataflowEndpointGroupId: FormControl<string | null | undefined>,
	}
	export function CreateDataflowEndpointListItemFormGroup() {
		return new FormGroup<DataflowEndpointListItemFormProperties>({
			dataflowEndpointGroupArn: new FormControl<string | null | undefined>(undefined),
			dataflowEndpointGroupId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p/> */
	export interface ListGroundStationsResponse {
		groundStationList?: Array<GroundStationData>;
		nextToken?: string | null;
	}

	/** <p/> */
	export interface ListGroundStationsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListGroundStationsResponseFormGroup() {
		return new FormGroup<ListGroundStationsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about the ground station data. */
	export interface GroundStationData {
		groundStationId?: string | null;
		groundStationName?: string | null;
		region?: string | null;
	}

	/** Information about the ground station data. */
	export interface GroundStationDataFormProperties {
		groundStationId: FormControl<string | null | undefined>,
		groundStationName: FormControl<string | null | undefined>,
		region: FormControl<string | null | undefined>,
	}
	export function CreateGroundStationDataFormGroup() {
		return new FormGroup<GroundStationDataFormProperties>({
			groundStationId: new FormControl<string | null | undefined>(undefined),
			groundStationName: new FormControl<string | null | undefined>(undefined),
			region: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p/> */
	export interface ListMissionProfilesResponse {
		missionProfileList?: Array<MissionProfileListItem>;
		nextToken?: string | null;
	}

	/** <p/> */
	export interface ListMissionProfilesResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListMissionProfilesResponseFormGroup() {
		return new FormGroup<ListMissionProfilesResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Item in a list of mission profiles. */
	export interface MissionProfileListItem {
		missionProfileArn?: string | null;
		missionProfileId?: string | null;
		name?: string | null;
		region?: string | null;
	}

	/** Item in a list of mission profiles. */
	export interface MissionProfileListItemFormProperties {
		missionProfileArn: FormControl<string | null | undefined>,
		missionProfileId: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		region: FormControl<string | null | undefined>,
	}
	export function CreateMissionProfileListItemFormGroup() {
		return new FormGroup<MissionProfileListItemFormProperties>({
			missionProfileArn: new FormControl<string | null | undefined>(undefined),
			missionProfileId: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			region: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p/> */
	export interface ListSatellitesResponse {
		nextToken?: string | null;
		satellites?: Array<SatelliteListItem>;
	}

	/** <p/> */
	export interface ListSatellitesResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListSatellitesResponseFormGroup() {
		return new FormGroup<ListSatellitesResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Item in a list of satellites. */
	export interface SatelliteListItem {
		groundStations?: Array<string>;

		/**
		 * Minimum: 1
		 * Maximum: 99999
		 */
		noradSatelliteID?: number | null;
		satelliteArn?: string | null;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		satelliteId?: string | null;
	}

	/** Item in a list of satellites. */
	export interface SatelliteListItemFormProperties {

		/**
		 * Minimum: 1
		 * Maximum: 99999
		 */
		noradSatelliteID: FormControl<number | null | undefined>,
		satelliteArn: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		satelliteId: FormControl<string | null | undefined>,
	}
	export function CreateSatelliteListItemFormGroup() {
		return new FormGroup<SatelliteListItemFormProperties>({
			noradSatelliteID: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(99999)]),
			satelliteArn: new FormControl<string | null | undefined>(undefined),
			satelliteId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}')]),
		});

	}


	/** <p/> */
	export interface ListTagsForResourceResponse {
		tags?: TagsMap;
	}

	/** <p/> */
	export interface ListTagsForResourceResponseFormProperties {
	}
	export function CreateListTagsForResourceResponseFormGroup() {
		return new FormGroup<ListTagsForResourceResponseFormProperties>({
		});

	}


	/** <p/> */
	export interface TagResourceResponse {
	}

	/** <p/> */
	export interface TagResourceResponseFormProperties {
	}
	export function CreateTagResourceResponseFormGroup() {
		return new FormGroup<TagResourceResponseFormProperties>({
		});

	}


	/** <p/> */
	export interface UntagResourceResponse {
	}

	/** <p/> */
	export interface UntagResourceResponseFormProperties {
	}
	export function CreateUntagResourceResponseFormGroup() {
		return new FormGroup<UntagResourceResponseFormProperties>({
		});

	}

	export enum AngleUnits { DEGREE_ANGLE = 0, RADIAN = 1 }

	export enum BandwidthUnits { GHz = 0, MHz = 1, kHz = 2 }


	/** <p/> */
	export interface CancelContactRequest {
	}

	/** <p/> */
	export interface CancelContactRequestFormProperties {
	}
	export function CreateCancelContactRequestFormGroup() {
		return new FormGroup<CancelContactRequestFormProperties>({
		});

	}

	export enum ConfigCapabilityType { 'antenna-downlink' = 0, 'antenna-downlink-demod-decode' = 1, 'antenna-uplink' = 2, 'dataflow-endpoint' = 3, tracking = 4, 'uplink-echo' = 5 }


	/** <p/> */
	export interface CreateConfigRequest {

		/**
		 * <p>Object containing the parameters of a <code>Config</code>.</p> <p>See the subtype definitions for what each type of <code>Config</code> contains.</p>
		 * Required
		 */
		configData: ConfigTypeData;

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		name: string;
		tags?: TagsMap;
	}

	/** <p/> */
	export interface CreateConfigRequestFormProperties {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateCreateConfigRequestFormGroup() {
		return new FormGroup<CreateConfigRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256), Validators.pattern('^[ a-zA-Z0-9_:-]{1,256}$')]),
		});

	}


	/** <p/> */
	export interface CreateDataflowEndpointGroupRequest {

		/** Required */
		endpointDetails: Array<EndpointDetails>;
		tags?: TagsMap;
	}

	/** <p/> */
	export interface CreateDataflowEndpointGroupRequestFormProperties {
	}
	export function CreateCreateDataflowEndpointGroupRequestFormGroup() {
		return new FormGroup<CreateDataflowEndpointGroupRequestFormProperties>({
		});

	}


	/** <p/> */
	export interface CreateMissionProfileRequest {

		/**
		 * Minimum: 1
		 * Maximum: 21600
		 */
		contactPostPassDurationSeconds?: number | null;

		/**
		 * Minimum: 1
		 * Maximum: 21600
		 */
		contactPrePassDurationSeconds?: number | null;

		/** Required */
		dataflowEdges: Array<Array<string>>;

		/**
		 * Required
		 * Minimum: 1
		 * Maximum: 21600
		 */
		minimumViableContactDurationSeconds: number;

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		name: string;
		tags?: TagsMap;

		/** Required */
		trackingConfigArn: string;
	}

	/** <p/> */
	export interface CreateMissionProfileRequestFormProperties {

		/**
		 * Minimum: 1
		 * Maximum: 21600
		 */
		contactPostPassDurationSeconds: FormControl<number | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 21600
		 */
		contactPrePassDurationSeconds: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Minimum: 1
		 * Maximum: 21600
		 */
		minimumViableContactDurationSeconds: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/** Required */
		trackingConfigArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateMissionProfileRequestFormGroup() {
		return new FormGroup<CreateMissionProfileRequestFormProperties>({
			contactPostPassDurationSeconds: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(21600)]),
			contactPrePassDurationSeconds: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(21600)]),
			minimumViableContactDurationSeconds: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(1), Validators.max(21600)]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256), Validators.pattern('^[ a-zA-Z0-9_:-]{1,256}$')]),
			trackingConfigArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum Criticality { PREFERRED = 0, REMOVED = 1, REQUIRED = 2 }

	export enum EndpointStatus { created = 0, creating = 1, deleted = 2, deleting = 3, failed = 4 }


	/** <p/> */
	export interface DeleteConfigRequest {
	}

	/** <p/> */
	export interface DeleteConfigRequestFormProperties {
	}
	export function CreateDeleteConfigRequestFormGroup() {
		return new FormGroup<DeleteConfigRequestFormProperties>({
		});

	}


	/** <p/> */
	export interface DeleteDataflowEndpointGroupRequest {
	}

	/** <p/> */
	export interface DeleteDataflowEndpointGroupRequestFormProperties {
	}
	export function CreateDeleteDataflowEndpointGroupRequestFormGroup() {
		return new FormGroup<DeleteDataflowEndpointGroupRequestFormProperties>({
		});

	}


	/** <p/> */
	export interface DeleteMissionProfileRequest {
	}

	/** <p/> */
	export interface DeleteMissionProfileRequestFormProperties {
	}
	export function CreateDeleteMissionProfileRequestFormGroup() {
		return new FormGroup<DeleteMissionProfileRequestFormProperties>({
		});

	}


	/** <p/> */
	export interface DescribeContactRequest {
	}

	/** <p/> */
	export interface DescribeContactRequestFormProperties {
	}
	export function CreateDescribeContactRequestFormGroup() {
		return new FormGroup<DescribeContactRequestFormProperties>({
		});

	}

	export enum FrequencyUnits { GHz = 0, MHz = 1, kHz = 2 }


	/** <p/> */
	export interface GetConfigRequest {
	}

	/** <p/> */
	export interface GetConfigRequestFormProperties {
	}
	export function CreateGetConfigRequestFormGroup() {
		return new FormGroup<GetConfigRequestFormProperties>({
		});

	}


	/** <p/> */
	export interface GetDataflowEndpointGroupRequest {
	}

	/** <p/> */
	export interface GetDataflowEndpointGroupRequestFormProperties {
	}
	export function CreateGetDataflowEndpointGroupRequestFormGroup() {
		return new FormGroup<GetDataflowEndpointGroupRequestFormProperties>({
		});

	}


	/** <p/> */
	export interface GetMinuteUsageRequest {

		/** Required */
		month: number;

		/** Required */
		year: number;
	}

	/** <p/> */
	export interface GetMinuteUsageRequestFormProperties {

		/** Required */
		month: FormControl<number | null | undefined>,

		/** Required */
		year: FormControl<number | null | undefined>,
	}
	export function CreateGetMinuteUsageRequestFormGroup() {
		return new FormGroup<GetMinuteUsageRequestFormProperties>({
			month: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			year: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p/> */
	export interface GetMissionProfileRequest {
	}

	/** <p/> */
	export interface GetMissionProfileRequestFormProperties {
	}
	export function CreateGetMissionProfileRequestFormGroup() {
		return new FormGroup<GetMissionProfileRequestFormProperties>({
		});

	}


	/** <p/> */
	export interface GetSatelliteRequest {
	}

	/** <p/> */
	export interface GetSatelliteRequestFormProperties {
	}
	export function CreateGetSatelliteRequestFormGroup() {
		return new FormGroup<GetSatelliteRequestFormProperties>({
		});

	}


	/** <p/> */
	export interface ListConfigsRequest {
	}

	/** <p/> */
	export interface ListConfigsRequestFormProperties {
	}
	export function CreateListConfigsRequestFormGroup() {
		return new FormGroup<ListConfigsRequestFormProperties>({
		});

	}


	/** <p/> */
	export interface ListContactsRequest {

		/** Required */
		endTime: Date;
		groundStation?: string | null;
		maxResults?: number | null;
		missionProfileArn?: string | null;
		nextToken?: string | null;
		satelliteArn?: string | null;

		/** Required */
		startTime: Date;

		/** Required */
		statusList: Array<ContactStatus>;
	}

	/** <p/> */
	export interface ListContactsRequestFormProperties {

		/** Required */
		endTime: FormControl<Date | null | undefined>,
		groundStation: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
		missionProfileArn: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
		satelliteArn: FormControl<string | null | undefined>,

		/** Required */
		startTime: FormControl<Date | null | undefined>,
	}
	export function CreateListContactsRequestFormGroup() {
		return new FormGroup<ListContactsRequestFormProperties>({
			endTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			groundStation: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
			missionProfileArn: new FormControl<string | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
			satelliteArn: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p/> */
	export interface ListDataflowEndpointGroupsRequest {
	}

	/** <p/> */
	export interface ListDataflowEndpointGroupsRequestFormProperties {
	}
	export function CreateListDataflowEndpointGroupsRequestFormGroup() {
		return new FormGroup<ListDataflowEndpointGroupsRequestFormProperties>({
		});

	}


	/** <p/> */
	export interface ListGroundStationsRequest {
	}

	/** <p/> */
	export interface ListGroundStationsRequestFormProperties {
	}
	export function CreateListGroundStationsRequestFormGroup() {
		return new FormGroup<ListGroundStationsRequestFormProperties>({
		});

	}


	/** <p/> */
	export interface ListMissionProfilesRequest {
	}

	/** <p/> */
	export interface ListMissionProfilesRequestFormProperties {
	}
	export function CreateListMissionProfilesRequestFormGroup() {
		return new FormGroup<ListMissionProfilesRequestFormProperties>({
		});

	}


	/** <p/> */
	export interface ListSatellitesRequest {
	}

	/** <p/> */
	export interface ListSatellitesRequestFormProperties {
	}
	export function CreateListSatellitesRequestFormGroup() {
		return new FormGroup<ListSatellitesRequestFormProperties>({
		});

	}


	/** <p/> */
	export interface ListTagsForResourceRequest {
	}

	/** <p/> */
	export interface ListTagsForResourceRequestFormProperties {
	}
	export function CreateListTagsForResourceRequestFormGroup() {
		return new FormGroup<ListTagsForResourceRequestFormProperties>({
		});

	}

	export enum Polarization { LEFT_HAND = 0, NONE = 1, RIGHT_HAND = 2 }


	/** <p/> */
	export interface ReserveContactRequest {

		/** Required */
		endTime: Date;

		/** Required */
		groundStation: string;

		/** Required */
		missionProfileArn: string;

		/** Required */
		satelliteArn: string;

		/** Required */
		startTime: Date;
		tags?: TagsMap;
	}

	/** <p/> */
	export interface ReserveContactRequestFormProperties {

		/** Required */
		endTime: FormControl<Date | null | undefined>,

		/** Required */
		groundStation: FormControl<string | null | undefined>,

		/** Required */
		missionProfileArn: FormControl<string | null | undefined>,

		/** Required */
		satelliteArn: FormControl<string | null | undefined>,

		/** Required */
		startTime: FormControl<Date | null | undefined>,
	}
	export function CreateReserveContactRequestFormGroup() {
		return new FormGroup<ReserveContactRequestFormProperties>({
			endTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			groundStation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			missionProfileArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			satelliteArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			startTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p/> */
	export interface TagResourceRequest {

		/** Required */
		tags: TagsMap;
	}

	/** <p/> */
	export interface TagResourceRequestFormProperties {
	}
	export function CreateTagResourceRequestFormGroup() {
		return new FormGroup<TagResourceRequestFormProperties>({
		});

	}


	/** <p/> */
	export interface UntagResourceRequest {
	}

	/** <p/> */
	export interface UntagResourceRequestFormProperties {
	}
	export function CreateUntagResourceRequestFormGroup() {
		return new FormGroup<UntagResourceRequestFormProperties>({
		});

	}


	/** <p/> */
	export interface UpdateConfigRequest {

		/**
		 * <p>Object containing the parameters of a <code>Config</code>.</p> <p>See the subtype definitions for what each type of <code>Config</code> contains.</p>
		 * Required
		 */
		configData: ConfigTypeData;

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		name: string;
	}

	/** <p/> */
	export interface UpdateConfigRequestFormProperties {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateUpdateConfigRequestFormGroup() {
		return new FormGroup<UpdateConfigRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256), Validators.pattern('^[ a-zA-Z0-9_:-]{1,256}$')]),
		});

	}


	/** <p/> */
	export interface UpdateMissionProfileRequest {

		/**
		 * Minimum: 1
		 * Maximum: 21600
		 */
		contactPostPassDurationSeconds?: number | null;

		/**
		 * Minimum: 1
		 * Maximum: 21600
		 */
		contactPrePassDurationSeconds?: number | null;
		dataflowEdges?: Array<Array<string>>;

		/**
		 * Minimum: 1
		 * Maximum: 21600
		 */
		minimumViableContactDurationSeconds?: number | null;

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		name?: string | null;
		trackingConfigArn?: string | null;
	}

	/** <p/> */
	export interface UpdateMissionProfileRequestFormProperties {

		/**
		 * Minimum: 1
		 * Maximum: 21600
		 */
		contactPostPassDurationSeconds: FormControl<number | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 21600
		 */
		contactPrePassDurationSeconds: FormControl<number | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 21600
		 */
		minimumViableContactDurationSeconds: FormControl<number | null | undefined>,

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,
		trackingConfigArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateMissionProfileRequestFormGroup() {
		return new FormGroup<UpdateMissionProfileRequestFormProperties>({
			contactPostPassDurationSeconds: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(21600)]),
			contactPrePassDurationSeconds: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(21600)]),
			minimumViableContactDurationSeconds: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(21600)]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256), Validators.pattern('^[ a-zA-Z0-9_:-]{1,256}$')]),
			trackingConfigArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Cancels a contact with a specified contact ID.
		 * Delete contact/{contactId}
		 * @param {string} contactId UUID of a contact.
		 * @return {ContactIdResponse} Success
		 */
		CancelContact(contactId: string): Observable<ContactIdResponse> {
			return this.http.delete<ContactIdResponse>(this.baseUri + 'contact/' + (contactId == null ? '' : encodeURIComponent(contactId)), {});
		}

		/**
		 * Describes an existing contact.
		 * Get contact/{contactId}
		 * @param {string} contactId UUID of a contact.
		 * @return {DescribeContactResponse} Success
		 */
		DescribeContact(contactId: string): Observable<DescribeContactResponse> {
			return this.http.get<DescribeContactResponse>(this.baseUri + 'contact/' + (contactId == null ? '' : encodeURIComponent(contactId)), {});
		}

		/**
		 * <p>Creates a <code>Config</code> with the specified <code>configData</code> parameters.</p> <p>Only one type of <code>configData</code> can be specified.</p>
		 * Post config
		 * @return {ConfigIdResponse} Success
		 */
		CreateConfig(requestBody: CreateConfigPostBody): Observable<ConfigIdResponse> {
			return this.http.post<ConfigIdResponse>(this.baseUri + 'config', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of <code>Config</code> objects.
		 * Get config
		 * @param {number} maxResults Maximum number of <code>Configs</code> returned.
		 * @param {string} nextToken Next token returned in the request of a previous <code>ListConfigs</code> call. Used to get the next page of results.
		 * @return {ListConfigsResponse} Success
		 */
		ListConfigs(maxResults: number | null | undefined, nextToken: string | null | undefined): Observable<ListConfigsResponse> {
			return this.http.get<ListConfigsResponse>(this.baseUri + 'config?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
		}

		/**
		 * <p>Creates a <code>DataflowEndpoint</code> group containing the specified list of <code>DataflowEndpoint</code> objects.</p> <p>The <code>name</code> field in each endpoint is used in your mission profile <code>DataflowEndpointConfig</code> to specify which endpoints to use during a contact.</p> <p>When a contact uses multiple <code>DataflowEndpointConfig</code> objects, each <code>Config</code> must match a <code>DataflowEndpoint</code> in the same group.</p>
		 * Post dataflowEndpointGroup
		 * @return {DataflowEndpointGroupIdResponse} Success
		 */
		CreateDataflowEndpointGroup(requestBody: CreateDataflowEndpointGroupPostBody): Observable<DataflowEndpointGroupIdResponse> {
			return this.http.post<DataflowEndpointGroupIdResponse>(this.baseUri + 'dataflowEndpointGroup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of <code>DataflowEndpoint</code> groups.
		 * Get dataflowEndpointGroup
		 * @param {number} maxResults Maximum number of dataflow endpoint groups returned.
		 * @param {string} nextToken Next token returned in the request of a previous <code>ListDataflowEndpointGroups</code> call. Used to get the next page of results.
		 * @return {ListDataflowEndpointGroupsResponse} Success
		 */
		ListDataflowEndpointGroups(maxResults: number | null | undefined, nextToken: string | null | undefined): Observable<ListDataflowEndpointGroupsResponse> {
			return this.http.get<ListDataflowEndpointGroupsResponse>(this.baseUri + 'dataflowEndpointGroup?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
		}

		/**
		 * <p>Creates a mission profile.</p> <p> <code>dataflowEdges</code> is a list of lists of strings. Each lower level list of strings has two elements: a <i>from</i> ARN and a <i>to</i> ARN.</p>
		 * Post missionprofile
		 * @return {MissionProfileIdResponse} Success
		 */
		CreateMissionProfile(requestBody: CreateMissionProfilePostBody): Observable<MissionProfileIdResponse> {
			return this.http.post<MissionProfileIdResponse>(this.baseUri + 'missionprofile', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of mission profiles.
		 * Get missionprofile
		 * @param {number} maxResults Maximum number of mission profiles returned.
		 * @param {string} nextToken Next token returned in the request of a previous <code>ListMissionProfiles</code> call. Used to get the next page of results.
		 * @return {ListMissionProfilesResponse} Success
		 */
		ListMissionProfiles(maxResults: number | null | undefined, nextToken: string | null | undefined): Observable<ListMissionProfilesResponse> {
			return this.http.get<ListMissionProfilesResponse>(this.baseUri + 'missionprofile?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
		}

		/**
		 * Deletes a <code>Config</code>.
		 * Delete config/{configType}/{configId}
		 * @param {string} configId UUID of a <code>Config</code>.
		 * @param {DeleteConfigConfigType} configType Type of a <code>Config</code>.
		 * @return {ConfigIdResponse} Success
		 */
		DeleteConfig(configId: string, configType: DeleteConfigConfigType): Observable<ConfigIdResponse> {
			return this.http.delete<ConfigIdResponse>(this.baseUri + 'config/' + configType + '/' + (configId == null ? '' : encodeURIComponent(configId)), {});
		}

		/**
		 * <p>Returns <code>Config</code> information.</p> <p>Only one <code>Config</code> response can be returned.</p>
		 * Get config/{configType}/{configId}
		 * @param {string} configId UUID of a <code>Config</code>.
		 * @param {GetConfigConfigType} configType Type of a <code>Config</code>.
		 * @return {GetConfigResponse} Success
		 */
		GetConfig(configId: string, configType: GetConfigConfigType): Observable<GetConfigResponse> {
			return this.http.get<GetConfigResponse>(this.baseUri + 'config/' + configType + '/' + (configId == null ? '' : encodeURIComponent(configId)), {});
		}

		/**
		 * <p>Updates the <code>Config</code> used when scheduling contacts.</p> <p>Updating a <code>Config</code> will not update the execution parameters for existing future contacts scheduled with this <code>Config</code>.</p>
		 * Put config/{configType}/{configId}
		 * @param {string} configId UUID of a <code>Config</code>.
		 * @param {UpdateConfigConfigType} configType Type of a <code>Config</code>.
		 * @return {ConfigIdResponse} Success
		 */
		UpdateConfig(configId: string, configType: UpdateConfigConfigType, requestBody: UpdateConfigPutBody): Observable<ConfigIdResponse> {
			return this.http.put<ConfigIdResponse>(this.baseUri + 'config/' + configType + '/' + (configId == null ? '' : encodeURIComponent(configId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a dataflow endpoint group.
		 * Delete dataflowEndpointGroup/{dataflowEndpointGroupId}
		 * @param {string} dataflowEndpointGroupId UUID of a dataflow endpoint group.
		 * @return {DataflowEndpointGroupIdResponse} Success
		 */
		DeleteDataflowEndpointGroup(dataflowEndpointGroupId: string): Observable<DataflowEndpointGroupIdResponse> {
			return this.http.delete<DataflowEndpointGroupIdResponse>(this.baseUri + 'dataflowEndpointGroup/' + (dataflowEndpointGroupId == null ? '' : encodeURIComponent(dataflowEndpointGroupId)), {});
		}

		/**
		 * Returns the dataflow endpoint group.
		 * Get dataflowEndpointGroup/{dataflowEndpointGroupId}
		 * @param {string} dataflowEndpointGroupId UUID of a dataflow endpoint group.
		 * @return {GetDataflowEndpointGroupResponse} Success
		 */
		GetDataflowEndpointGroup(dataflowEndpointGroupId: string): Observable<GetDataflowEndpointGroupResponse> {
			return this.http.get<GetDataflowEndpointGroupResponse>(this.baseUri + 'dataflowEndpointGroup/' + (dataflowEndpointGroupId == null ? '' : encodeURIComponent(dataflowEndpointGroupId)), {});
		}

		/**
		 * Deletes a mission profile.
		 * Delete missionprofile/{missionProfileId}
		 * @param {string} missionProfileId UUID of a mission profile.
		 * @return {MissionProfileIdResponse} Success
		 */
		DeleteMissionProfile(missionProfileId: string): Observable<MissionProfileIdResponse> {
			return this.http.delete<MissionProfileIdResponse>(this.baseUri + 'missionprofile/' + (missionProfileId == null ? '' : encodeURIComponent(missionProfileId)), {});
		}

		/**
		 * Returns a mission profile.
		 * Get missionprofile/{missionProfileId}
		 * @param {string} missionProfileId UUID of a mission profile.
		 * @return {GetMissionProfileResponse} Success
		 */
		GetMissionProfile(missionProfileId: string): Observable<GetMissionProfileResponse> {
			return this.http.get<GetMissionProfileResponse>(this.baseUri + 'missionprofile/' + (missionProfileId == null ? '' : encodeURIComponent(missionProfileId)), {});
		}

		/**
		 * <p>Updates a mission profile.</p> <p>Updating a mission profile will not update the execution parameters for existing future contacts.</p>
		 * Put missionprofile/{missionProfileId}
		 * @param {string} missionProfileId UUID of a mission profile.
		 * @return {MissionProfileIdResponse} Success
		 */
		UpdateMissionProfile(missionProfileId: string, requestBody: UpdateMissionProfilePutBody): Observable<MissionProfileIdResponse> {
			return this.http.put<MissionProfileIdResponse>(this.baseUri + 'missionprofile/' + (missionProfileId == null ? '' : encodeURIComponent(missionProfileId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the number of minutes used by account.
		 * Post minute-usage
		 * @return {GetMinuteUsageResponse} Success
		 */
		GetMinuteUsage(requestBody: GetMinuteUsagePostBody): Observable<GetMinuteUsageResponse> {
			return this.http.post<GetMinuteUsageResponse>(this.baseUri + 'minute-usage', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a satellite.
		 * Get satellite/{satelliteId}
		 * @param {string} satelliteId UUID of a satellite.
		 * @return {GetSatelliteResponse} Success
		 */
		GetSatellite(satelliteId: string): Observable<GetSatelliteResponse> {
			return this.http.get<GetSatelliteResponse>(this.baseUri + 'satellite/' + (satelliteId == null ? '' : encodeURIComponent(satelliteId)), {});
		}

		/**
		 * <p>Returns a list of contacts.</p> <p>If <code>statusList</code> contains AVAILABLE, the request must include <code>groundStation</code>, <code>missionprofileArn</code>, and <code>satelliteArn</code>. </p>
		 * Post contacts
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListContactsResponse} Success
		 */
		ListContacts(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListContactsPostBody): Observable<ListContactsResponse> {
			return this.http.post<ListContactsResponse>(this.baseUri + 'contacts?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of ground stations.
		 * Get groundstation
		 * @param {number} maxResults Maximum number of ground stations returned.
		 * @param {string} nextToken Next token that can be supplied in the next call to get the next page of ground stations.
		 * @param {string} satelliteId Satellite ID to retrieve on-boarded ground stations.
		 * @return {ListGroundStationsResponse} Success
		 */
		ListGroundStations(maxResults: number | null | undefined, nextToken: string | null | undefined, satelliteId: string | null | undefined): Observable<ListGroundStationsResponse> {
			return this.http.get<ListGroundStationsResponse>(this.baseUri + 'groundstation?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&satelliteId=' + (satelliteId == null ? '' : encodeURIComponent(satelliteId)), {});
		}

		/**
		 * Returns a list of satellites.
		 * Get satellite
		 * @param {number} maxResults Maximum number of satellites returned.
		 * @param {string} nextToken Next token that can be supplied in the next call to get the next page of satellites.
		 * @return {ListSatellitesResponse} Success
		 */
		ListSatellites(maxResults: number | null | undefined, nextToken: string | null | undefined): Observable<ListSatellitesResponse> {
			return this.http.get<ListSatellitesResponse>(this.baseUri + 'satellite?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
		}

		/**
		 * Returns a list of tags for a specified resource.
		 * Get tags/{resourceArn}
		 * @param {string} resourceArn ARN of a resource.
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(resourceArn: string): Observable<ListTagsForResourceResponse> {
			return this.http.get<ListTagsForResourceResponse>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), {});
		}

		/**
		 * Assigns a tag to a resource.
		 * Post tags/{resourceArn}
		 * @param {string} resourceArn ARN of a resource tag.
		 * @return {TagResourceResponse} Success
		 */
		TagResource(resourceArn: string, requestBody: TagResourcePostBody): Observable<TagResourceResponse> {
			return this.http.post<TagResourceResponse>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Reserves a contact using specified parameters.
		 * Post contact
		 * @return {ContactIdResponse} Success
		 */
		ReserveContact(requestBody: ReserveContactPostBody): Observable<ContactIdResponse> {
			return this.http.post<ContactIdResponse>(this.baseUri + 'contact', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deassigns a resource tag.
		 * Delete tags/{resourceArn}#tagKeys
		 * @param {string} resourceArn ARN of a resource.
		 * @param {Array<string>} tagKeys Keys of a resource tag.
		 * @return {UntagResourceResponse} Success
		 */
		UntagResource(resourceArn: string, tagKeys: Array<string>): Observable<UntagResourceResponse> {
			return this.http.delete<UntagResourceResponse>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)) + '#tagKeys&' + tagKeys.map(z => `tagKeys=${encodeURIComponent(z)}`).join('&'), {});
		}
	}

	export interface CreateConfigPostBody {

		/**
		 * <p>Object containing the parameters of a <code>Config</code>.</p> <p>See the subtype definitions for what each type of <code>Config</code> contains.</p>
		 * Required
		 */
		configData: CreateConfigPostBodyConfigData;

		/**
		 * Name of a <code>Config</code>.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		name: string;

		/** Tags assigned to a <code>Config</code>. */
		tags?: {[id: string]: string };
	}
	export interface CreateConfigPostBodyFormProperties {

		/**
		 * Name of a <code>Config</code>.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/** Tags assigned to a <code>Config</code>. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateConfigPostBodyFormGroup() {
		return new FormGroup<CreateConfigPostBodyFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256), Validators.pattern('^[ a-zA-Z0-9_:-]{1,256}$')]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateConfigPostBodyConfigData {

		/** Information about how AWS Ground Station should configure an antenna for downlink during a contact. */
		antennaDownlinkConfig?: AntennaDownlinkConfig;

		/** Information about how AWS Ground Station should conﬁgure an antenna for downlink demod decode during a contact. */
		antennaDownlinkDemodDecodeConfig?: AntennaDownlinkDemodDecodeConfig;

		/** Information about the uplink <code>Config</code> of an antenna. */
		antennaUplinkConfig?: AntennaUplinkConfig;

		/** Information about the dataflow endpoint <code>Config</code>. */
		dataflowEndpointConfig?: DataflowEndpointConfig;

		/** Object that determines whether tracking should be used during a contact executed with this <code>Config</code> in the mission profile. */
		trackingConfig?: TrackingConfig;

		/** <p>Information about an uplink echo <code>Config</code>.</p> <p>Parameters from the <code>AntennaUplinkConfig</code>, corresponding to the specified <code>AntennaUplinkConfigArn</code>, are used when this <code>UplinkEchoConfig</code> is used in a contact.</p> */
		uplinkEchoConfig?: UplinkEchoConfig;
	}
	export interface CreateConfigPostBodyConfigDataFormProperties {
	}
	export function CreateCreateConfigPostBodyConfigDataFormGroup() {
		return new FormGroup<CreateConfigPostBodyConfigDataFormProperties>({
		});

	}

	export interface CreateDataflowEndpointGroupPostBody {

		/**
		 * Endpoint details of each endpoint in the dataflow endpoint group.
		 * Required
		 */
		endpointDetails: Array<EndpointDetails>;

		/** Tags of a dataflow endpoint group. */
		tags?: {[id: string]: string };
	}
	export interface CreateDataflowEndpointGroupPostBodyFormProperties {

		/** Tags of a dataflow endpoint group. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateDataflowEndpointGroupPostBodyFormGroup() {
		return new FormGroup<CreateDataflowEndpointGroupPostBodyFormProperties>({
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateMissionProfilePostBody {

		/**
		 * Amount of time after a contact ends that you’d like to receive a CloudWatch event indicating the pass has finished.
		 * Minimum: 1
		 * Maximum: 21600
		 */
		contactPostPassDurationSeconds?: number | null;

		/**
		 * Amount of time prior to contact start you’d like to receive a CloudWatch event indicating an upcoming pass.
		 * Minimum: 1
		 * Maximum: 21600
		 */
		contactPrePassDurationSeconds?: number | null;

		/**
		 * A list of lists of ARNs. Each list of ARNs is an edge, with a <i>from</i> <code>Config</code> and a <i>to</i> <code>Config</code>.
		 * Required
		 */
		dataflowEdges: Array<Array<string>>;

		/**
		 * Smallest amount of time in seconds that you’d like to see for an available contact. AWS Ground Station will not present you with contacts shorter than this duration.
		 * Required
		 * Minimum: 1
		 * Maximum: 21600
		 */
		minimumViableContactDurationSeconds: number;

		/**
		 * Name of a mission profile.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		name: string;

		/** Tags assigned to a mission profile. */
		tags?: {[id: string]: string };

		/**
		 * ARN of a tracking <code>Config</code>.
		 * Required
		 */
		trackingConfigArn: string;
	}
	export interface CreateMissionProfilePostBodyFormProperties {

		/**
		 * Amount of time after a contact ends that you’d like to receive a CloudWatch event indicating the pass has finished.
		 * Minimum: 1
		 * Maximum: 21600
		 */
		contactPostPassDurationSeconds: FormControl<number | null | undefined>,

		/**
		 * Amount of time prior to contact start you’d like to receive a CloudWatch event indicating an upcoming pass.
		 * Minimum: 1
		 * Maximum: 21600
		 */
		contactPrePassDurationSeconds: FormControl<number | null | undefined>,

		/**
		 * Smallest amount of time in seconds that you’d like to see for an available contact. AWS Ground Station will not present you with contacts shorter than this duration.
		 * Required
		 * Minimum: 1
		 * Maximum: 21600
		 */
		minimumViableContactDurationSeconds: FormControl<number | null | undefined>,

		/**
		 * Name of a mission profile.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/** Tags assigned to a mission profile. */
		tags: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * ARN of a tracking <code>Config</code>.
		 * Required
		 */
		trackingConfigArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateMissionProfilePostBodyFormGroup() {
		return new FormGroup<CreateMissionProfilePostBodyFormProperties>({
			contactPostPassDurationSeconds: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(21600)]),
			contactPrePassDurationSeconds: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(21600)]),
			minimumViableContactDurationSeconds: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(1), Validators.max(21600)]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256), Validators.pattern('^[ a-zA-Z0-9_:-]{1,256}$')]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			trackingConfigArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum DeleteConfigConfigType { 'antenna-downlink' = 0, 'antenna-downlink-demod-decode' = 1, 'antenna-uplink' = 2, 'dataflow-endpoint' = 3, tracking = 4, 'uplink-echo' = 5 }

	export enum GetConfigConfigType { 'antenna-downlink' = 0, 'antenna-downlink-demod-decode' = 1, 'antenna-uplink' = 2, 'dataflow-endpoint' = 3, tracking = 4, 'uplink-echo' = 5 }

	export enum UpdateConfigConfigType { 'antenna-downlink' = 0, 'antenna-downlink-demod-decode' = 1, 'antenna-uplink' = 2, 'dataflow-endpoint' = 3, tracking = 4, 'uplink-echo' = 5 }

	export interface UpdateConfigPutBody {

		/**
		 * <p>Object containing the parameters of a <code>Config</code>.</p> <p>See the subtype definitions for what each type of <code>Config</code> contains.</p>
		 * Required
		 */
		configData: UpdateConfigPutBodyConfigData;

		/**
		 * Name of a <code>Config</code>.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		name: string;
	}
	export interface UpdateConfigPutBodyFormProperties {

		/**
		 * Name of a <code>Config</code>.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateUpdateConfigPutBodyFormGroup() {
		return new FormGroup<UpdateConfigPutBodyFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256), Validators.pattern('^[ a-zA-Z0-9_:-]{1,256}$')]),
		});

	}

	export interface UpdateConfigPutBodyConfigData {

		/** Information about how AWS Ground Station should configure an antenna for downlink during a contact. */
		antennaDownlinkConfig?: AntennaDownlinkConfig;

		/** Information about how AWS Ground Station should conﬁgure an antenna for downlink demod decode during a contact. */
		antennaDownlinkDemodDecodeConfig?: AntennaDownlinkDemodDecodeConfig;

		/** Information about the uplink <code>Config</code> of an antenna. */
		antennaUplinkConfig?: AntennaUplinkConfig;

		/** Information about the dataflow endpoint <code>Config</code>. */
		dataflowEndpointConfig?: DataflowEndpointConfig;

		/** Object that determines whether tracking should be used during a contact executed with this <code>Config</code> in the mission profile. */
		trackingConfig?: TrackingConfig;

		/** <p>Information about an uplink echo <code>Config</code>.</p> <p>Parameters from the <code>AntennaUplinkConfig</code>, corresponding to the specified <code>AntennaUplinkConfigArn</code>, are used when this <code>UplinkEchoConfig</code> is used in a contact.</p> */
		uplinkEchoConfig?: UplinkEchoConfig;
	}
	export interface UpdateConfigPutBodyConfigDataFormProperties {
	}
	export function CreateUpdateConfigPutBodyConfigDataFormGroup() {
		return new FormGroup<UpdateConfigPutBodyConfigDataFormProperties>({
		});

	}

	export interface UpdateMissionProfilePutBody {

		/**
		 * Amount of time after a contact ends that you’d like to receive a CloudWatch event indicating the pass has finished.
		 * Minimum: 1
		 * Maximum: 21600
		 */
		contactPostPassDurationSeconds?: number | null;

		/**
		 * Amount of time after a contact ends that you’d like to receive a CloudWatch event indicating the pass has finished.
		 * Minimum: 1
		 * Maximum: 21600
		 */
		contactPrePassDurationSeconds?: number | null;

		/** A list of lists of ARNs. Each list of ARNs is an edge, with a <i>from</i> <code>Config</code> and a <i>to</i> <code>Config</code>. */
		dataflowEdges?: Array<Array<string>>;

		/**
		 * Smallest amount of time in seconds that you’d like to see for an available contact. AWS Ground Station will not present you with contacts shorter than this duration.
		 * Minimum: 1
		 * Maximum: 21600
		 */
		minimumViableContactDurationSeconds?: number | null;

		/**
		 * Name of a mission profile.
		 * Max length: 256
		 * Min length: 1
		 */
		name?: string | null;

		/** ARN of a tracking <code>Config</code>. */
		trackingConfigArn?: string | null;
	}
	export interface UpdateMissionProfilePutBodyFormProperties {

		/**
		 * Amount of time after a contact ends that you’d like to receive a CloudWatch event indicating the pass has finished.
		 * Minimum: 1
		 * Maximum: 21600
		 */
		contactPostPassDurationSeconds: FormControl<number | null | undefined>,

		/**
		 * Amount of time after a contact ends that you’d like to receive a CloudWatch event indicating the pass has finished.
		 * Minimum: 1
		 * Maximum: 21600
		 */
		contactPrePassDurationSeconds: FormControl<number | null | undefined>,

		/**
		 * Smallest amount of time in seconds that you’d like to see for an available contact. AWS Ground Station will not present you with contacts shorter than this duration.
		 * Minimum: 1
		 * Maximum: 21600
		 */
		minimumViableContactDurationSeconds: FormControl<number | null | undefined>,

		/**
		 * Name of a mission profile.
		 * Max length: 256
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/** ARN of a tracking <code>Config</code>. */
		trackingConfigArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateMissionProfilePutBodyFormGroup() {
		return new FormGroup<UpdateMissionProfilePutBodyFormProperties>({
			contactPostPassDurationSeconds: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(21600)]),
			contactPrePassDurationSeconds: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(21600)]),
			minimumViableContactDurationSeconds: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(21600)]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256), Validators.pattern('^[ a-zA-Z0-9_:-]{1,256}$')]),
			trackingConfigArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetMinuteUsagePostBody {

		/**
		 * The month being requested, with a value of 1-12.
		 * Required
		 */
		month: number;

		/**
		 * The year being requested, in the format of YYYY.
		 * Required
		 */
		year: number;
	}
	export interface GetMinuteUsagePostBodyFormProperties {

		/**
		 * The month being requested, with a value of 1-12.
		 * Required
		 */
		month: FormControl<number | null | undefined>,

		/**
		 * The year being requested, in the format of YYYY.
		 * Required
		 */
		year: FormControl<number | null | undefined>,
	}
	export function CreateGetMinuteUsagePostBodyFormGroup() {
		return new FormGroup<GetMinuteUsagePostBodyFormProperties>({
			month: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			year: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListContactsPostBody {

		/**
		 * End time of a contact.
		 * Required
		 */
		endTime: Date;

		/** Name of a ground station. */
		groundStation?: string | null;

		/** Maximum number of contacts returned. */
		maxResults?: number | null;

		/** ARN of a mission profile. */
		missionProfileArn?: string | null;

		/** Next token returned in the request of a previous <code>ListContacts</code> call. Used to get the next page of results. */
		nextToken?: string | null;

		/** ARN of a satellite. */
		satelliteArn?: string | null;

		/**
		 * Start time of a contact.
		 * Required
		 */
		startTime: Date;

		/**
		 * Status of a contact reservation.
		 * Required
		 */
		statusList: Array<ContactStatus>;
	}
	export interface ListContactsPostBodyFormProperties {

		/**
		 * End time of a contact.
		 * Required
		 */
		endTime: FormControl<Date | null | undefined>,

		/** Name of a ground station. */
		groundStation: FormControl<string | null | undefined>,

		/** Maximum number of contacts returned. */
		maxResults: FormControl<number | null | undefined>,

		/** ARN of a mission profile. */
		missionProfileArn: FormControl<string | null | undefined>,

		/** Next token returned in the request of a previous <code>ListContacts</code> call. Used to get the next page of results. */
		nextToken: FormControl<string | null | undefined>,

		/** ARN of a satellite. */
		satelliteArn: FormControl<string | null | undefined>,

		/**
		 * Start time of a contact.
		 * Required
		 */
		startTime: FormControl<Date | null | undefined>,
	}
	export function CreateListContactsPostBodyFormGroup() {
		return new FormGroup<ListContactsPostBodyFormProperties>({
			endTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			groundStation: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
			missionProfileArn: new FormControl<string | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
			satelliteArn: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface TagResourcePostBody {

		/**
		 * Tags assigned to a resource.
		 * Required
		 */
		tags: {[id: string]: string };
	}
	export interface TagResourcePostBodyFormProperties {

		/**
		 * Tags assigned to a resource.
		 * Required
		 */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateTagResourcePostBodyFormGroup() {
		return new FormGroup<TagResourcePostBodyFormProperties>({
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ReserveContactPostBody {

		/**
		 * End time of a contact.
		 * Required
		 */
		endTime: Date;

		/**
		 * Name of a ground station.
		 * Required
		 */
		groundStation: string;

		/**
		 * ARN of a mission profile.
		 * Required
		 */
		missionProfileArn: string;

		/**
		 * ARN of a satellite
		 * Required
		 */
		satelliteArn: string;

		/**
		 * Start time of a contact.
		 * Required
		 */
		startTime: Date;

		/** Tags assigned to a contact. */
		tags?: {[id: string]: string };
	}
	export interface ReserveContactPostBodyFormProperties {

		/**
		 * End time of a contact.
		 * Required
		 */
		endTime: FormControl<Date | null | undefined>,

		/**
		 * Name of a ground station.
		 * Required
		 */
		groundStation: FormControl<string | null | undefined>,

		/**
		 * ARN of a mission profile.
		 * Required
		 */
		missionProfileArn: FormControl<string | null | undefined>,

		/**
		 * ARN of a satellite
		 * Required
		 */
		satelliteArn: FormControl<string | null | undefined>,

		/**
		 * Start time of a contact.
		 * Required
		 */
		startTime: FormControl<Date | null | undefined>,

		/** Tags assigned to a contact. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateReserveContactPostBodyFormGroup() {
		return new FormGroup<ReserveContactPostBodyFormProperties>({
			endTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			groundStation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			missionProfileArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			satelliteArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			startTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

}

