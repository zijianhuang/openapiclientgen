import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** <p/> */
	export interface ContactIdResponse {
		contactId?: string;
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
		configArn?: string;
		configId?: string;
		configType?: ConfigCapabilityType;
	}

	/** <p/> */
	export interface ConfigIdResponseFormProperties {
		configArn: FormControl<string | null | undefined>,
		configId: FormControl<string | null | undefined>,
		configType: FormControl<ConfigCapabilityType | null | undefined>,
	}
	export function CreateConfigIdResponseFormGroup() {
		return new FormGroup<ConfigIdResponseFormProperties>({
			configArn: new FormControl<string | null | undefined>(undefined),
			configId: new FormControl<string | null | undefined>(undefined),
			configType: new FormControl<ConfigCapabilityType | null | undefined>(undefined),
		});

	}

	export enum ConfigCapabilityType { 'antenna-downlink' = 'antenna-downlink', 'antenna-downlink-demod-decode' = 'antenna-downlink-demod-decode', 'antenna-uplink' = 'antenna-uplink', 'dataflow-endpoint' = 'dataflow-endpoint', tracking = 'tracking', 'uplink-echo' = 'uplink-echo', 's3-recording' = 's3-recording' }


	/** Information about how AWS Ground Station should configure an antenna for downlink during a contact. */
	export interface AntennaDownlinkConfig {

		/** Required */
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

		/** Required */
		bandwidth: FrequencyBandwidth;

		/** Required */
		centerFrequency: Frequency;
		polarization?: Polarization;
	}

	/** Object that describes a spectral <code>Config</code>. */
	export interface SpectrumConfigFormProperties {
		polarization: FormControl<Polarization | null | undefined>,
	}
	export function CreateSpectrumConfigFormGroup() {
		return new FormGroup<SpectrumConfigFormProperties>({
			polarization: new FormControl<Polarization | null | undefined>(undefined),
		});

	}


	/** Object that describes the frequency bandwidth.  */
	export interface FrequencyBandwidth {

		/** Required */
		units: BandwidthUnits;

		/** Required */
		value: number;
	}

	/** Object that describes the frequency bandwidth.  */
	export interface FrequencyBandwidthFormProperties {

		/** Required */
		units: FormControl<BandwidthUnits | null | undefined>,

		/** Required */
		value: FormControl<number | null | undefined>,
	}
	export function CreateFrequencyBandwidthFormGroup() {
		return new FormGroup<FrequencyBandwidthFormProperties>({
			units: new FormControl<BandwidthUnits | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum BandwidthUnits { GHz = 'GHz', MHz = 'MHz', kHz = 'kHz' }


	/** Object that describes the frequency. */
	export interface Frequency {

		/** Required */
		units: BandwidthUnits;

		/** Required */
		value: number;
	}

	/** Object that describes the frequency. */
	export interface FrequencyFormProperties {

		/** Required */
		units: FormControl<BandwidthUnits | null | undefined>,

		/** Required */
		value: FormControl<number | null | undefined>,
	}
	export function CreateFrequencyFormGroup() {
		return new FormGroup<FrequencyFormProperties>({
			units: new FormControl<BandwidthUnits | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum Polarization { LEFT_HAND = 'LEFT_HAND', NONE = 'NONE', RIGHT_HAND = 'RIGHT_HAND' }


	/** Information about how AWS Ground Station should conﬁgure an antenna for downlink demod decode during a contact. */
	export interface AntennaDownlinkDemodDecodeConfig {

		/** Required */
		decodeConfig: DecodeConfig;

		/** Required */
		demodulationConfig: DemodulationConfig;

		/** Required */
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

		/** Required */
		unvalidatedJSON: string;
	}

	/** Information about the decode <code>Config</code>. */
	export interface DecodeConfigFormProperties {

		/** Required */
		unvalidatedJSON: FormControl<string | null | undefined>,
	}
	export function CreateDecodeConfigFormGroup() {
		return new FormGroup<DecodeConfigFormProperties>({
			unvalidatedJSON: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Information about the demodulation <code>Config</code>. */
	export interface DemodulationConfig {

		/** Required */
		unvalidatedJSON: string;
	}

	/** Information about the demodulation <code>Config</code>. */
	export interface DemodulationConfigFormProperties {

		/** Required */
		unvalidatedJSON: FormControl<string | null | undefined>,
	}
	export function CreateDemodulationConfigFormGroup() {
		return new FormGroup<DemodulationConfigFormProperties>({
			unvalidatedJSON: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Information about the uplink <code>Config</code> of an antenna. */
	export interface AntennaUplinkConfig {

		/** Required */
		spectrumConfig: UplinkSpectrumConfig;

		/** Required */
		targetEirp: Eirp;
		transmitDisabled?: boolean | null;
	}

	/** Information about the uplink <code>Config</code> of an antenna. */
	export interface AntennaUplinkConfigFormProperties {
		transmitDisabled: FormControl<boolean | null | undefined>,
	}
	export function CreateAntennaUplinkConfigFormGroup() {
		return new FormGroup<AntennaUplinkConfigFormProperties>({
			transmitDisabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Information about the uplink spectral <code>Config</code>. */
	export interface UplinkSpectrumConfig {

		/** Required */
		centerFrequency: Frequency;
		polarization?: Polarization;
	}

	/** Information about the uplink spectral <code>Config</code>. */
	export interface UplinkSpectrumConfigFormProperties {
		polarization: FormControl<Polarization | null | undefined>,
	}
	export function CreateUplinkSpectrumConfigFormGroup() {
		return new FormGroup<UplinkSpectrumConfigFormProperties>({
			polarization: new FormControl<Polarization | null | undefined>(undefined),
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

	export enum EirpUnits { dBW = 'dBW' }


	/** Information about the dataflow endpoint <code>Config</code>. */
	export interface DataflowEndpointConfig {

		/** Required */
		dataflowEndpointName: string;
		dataflowEndpointRegion?: string;
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


	/** Information about an S3 recording <code>Config</code>. */
	export interface S3RecordingConfig {

		/** Required */
		bucketArn: string;
		prefix?: string;

		/** Required */
		roleArn: string;
	}

	/** Information about an S3 recording <code>Config</code>. */
	export interface S3RecordingConfigFormProperties {

		/** Required */
		bucketArn: FormControl<string | null | undefined>,
		prefix: FormControl<string | null | undefined>,

		/** Required */
		roleArn: FormControl<string | null | undefined>,
	}
	export function CreateS3RecordingConfigFormGroup() {
		return new FormGroup<S3RecordingConfigFormProperties>({
			bucketArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			prefix: new FormControl<string | null | undefined>(undefined),
			roleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Object that determines whether tracking should be used during a contact executed with this <code>Config</code> in the mission profile. */
	export interface TrackingConfig {

		/** Required */
		autotrack: Criticality;
	}

	/** Object that determines whether tracking should be used during a contact executed with this <code>Config</code> in the mission profile. */
	export interface TrackingConfigFormProperties {

		/** Required */
		autotrack: FormControl<Criticality | null | undefined>,
	}
	export function CreateTrackingConfigFormGroup() {
		return new FormGroup<TrackingConfigFormProperties>({
			autotrack: new FormControl<Criticality | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum Criticality { PREFERRED = 'PREFERRED', REMOVED = 'REMOVED', REQUIRED = 'REQUIRED' }


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
		dataflowEndpointGroupId?: string;
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
		awsGroundStationAgentEndpoint?: AwsGroundStationAgentEndpoint;
		endpoint?: DataflowEndpoint;
		healthReasons?: Array<CapabilityHealthReason>;
		healthStatus?: CapabilityHealth;
		securityDetails?: SecurityDetails;
	}

	/** Information about the endpoint details. */
	export interface EndpointDetailsFormProperties {
		healthStatus: FormControl<CapabilityHealth | null | undefined>,
	}
	export function CreateEndpointDetailsFormGroup() {
		return new FormGroup<EndpointDetailsFormProperties>({
			healthStatus: new FormControl<CapabilityHealth | null | undefined>(undefined),
		});

	}


	/** Information about AwsGroundStationAgentEndpoint. */
	export interface AwsGroundStationAgentEndpoint {
		agentStatus?: AgentStatus;
		auditResults?: AuditResults;

		/** Required */
		egressAddress: ConnectionDetails;

		/** Required */
		ingressAddress: RangedConnectionDetails;

		/** Required */
		name: string;
	}

	/** Information about AwsGroundStationAgentEndpoint. */
	export interface AwsGroundStationAgentEndpointFormProperties {
		agentStatus: FormControl<AgentStatus | null | undefined>,
		auditResults: FormControl<AuditResults | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
	}
	export function CreateAwsGroundStationAgentEndpointFormGroup() {
		return new FormGroup<AwsGroundStationAgentEndpointFormProperties>({
			agentStatus: new FormControl<AgentStatus | null | undefined>(undefined),
			auditResults: new FormControl<AuditResults | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum AgentStatus { SUCCESS = 'SUCCESS', FAILED = 'FAILED', ACTIVE = 'ACTIVE', INACTIVE = 'INACTIVE' }

	export enum AuditResults { HEALTHY = 'HEALTHY', UNHEALTHY = 'UNHEALTHY' }


	/** Egress address of AgentEndpoint with an optional mtu. */
	export interface ConnectionDetails {
		mtu?: number | null;

		/** Required */
		socketAddress: SocketAddress;
	}

	/** Egress address of AgentEndpoint with an optional mtu. */
	export interface ConnectionDetailsFormProperties {
		mtu: FormControl<number | null | undefined>,
	}
	export function CreateConnectionDetailsFormGroup() {
		return new FormGroup<ConnectionDetailsFormProperties>({
			mtu: new FormControl<number | null | undefined>(undefined),
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


	/** Ingress address of AgentEndpoint with a port range and an optional mtu. */
	export interface RangedConnectionDetails {
		mtu?: number | null;

		/** Required */
		socketAddress: RangedSocketAddress;
	}

	/** Ingress address of AgentEndpoint with a port range and an optional mtu. */
	export interface RangedConnectionDetailsFormProperties {
		mtu: FormControl<number | null | undefined>,
	}
	export function CreateRangedConnectionDetailsFormGroup() {
		return new FormGroup<RangedConnectionDetailsFormProperties>({
			mtu: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A socket address with a port range. */
	export interface RangedSocketAddress {

		/** Required */
		name: string;

		/** Required */
		portRange: IntegerRange;
	}

	/** A socket address with a port range. */
	export interface RangedSocketAddressFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,
	}
	export function CreateRangedSocketAddressFormGroup() {
		return new FormGroup<RangedSocketAddressFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** An integer range that has a minimum and maximum value. */
	export interface IntegerRange {

		/** Required */
		maximum: number;

		/** Required */
		minimum: number;
	}

	/** An integer range that has a minimum and maximum value. */
	export interface IntegerRangeFormProperties {

		/** Required */
		maximum: FormControl<number | null | undefined>,

		/** Required */
		minimum: FormControl<number | null | undefined>,
	}
	export function CreateIntegerRangeFormGroup() {
		return new FormGroup<IntegerRangeFormProperties>({
			maximum: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			minimum: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Information about a dataflow endpoint. */
	export interface DataflowEndpoint {
		address?: SocketAddress;
		mtu?: number | null;
		name?: string;
		status?: EndpointStatus;
	}

	/** Information about a dataflow endpoint. */
	export interface DataflowEndpointFormProperties {
		mtu: FormControl<number | null | undefined>,
		name: FormControl<string | null | undefined>,
		status: FormControl<EndpointStatus | null | undefined>,
	}
	export function CreateDataflowEndpointFormGroup() {
		return new FormGroup<DataflowEndpointFormProperties>({
			mtu: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<EndpointStatus | null | undefined>(undefined),
		});

	}

	export enum EndpointStatus { created = 'created', creating = 'creating', deleted = 'deleted', deleting = 'deleting', failed = 'failed' }

	export enum CapabilityHealthReason { NO_REGISTERED_AGENT = 'NO_REGISTERED_AGENT', INVALID_IP_OWNERSHIP = 'INVALID_IP_OWNERSHIP', NOT_AUTHORIZED_TO_CREATE_SLR = 'NOT_AUTHORIZED_TO_CREATE_SLR', UNVERIFIED_IP_OWNERSHIP = 'UNVERIFIED_IP_OWNERSHIP', INITIALIZING_DATAPLANE = 'INITIALIZING_DATAPLANE', DATAPLANE_FAILURE = 'DATAPLANE_FAILURE', HEALTHY = 'HEALTHY' }

	export enum CapabilityHealth { UNHEALTHY = 'UNHEALTHY', HEALTHY = 'HEALTHY' }


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

	export interface EphemerisIdResponse {
		ephemerisId?: string;
	}
	export interface EphemerisIdResponseFormProperties {
		ephemerisId: FormControl<string | null | undefined>,
	}
	export function CreateEphemerisIdResponseFormGroup() {
		return new FormGroup<EphemerisIdResponseFormProperties>({
			ephemerisId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Ephemeris data in Orbit Ephemeris Message (OEM) format. */
	export interface OEMEphemeris {
		oemData?: string;
		s3Object?: S3Object;
	}

	/** Ephemeris data in Orbit Ephemeris Message (OEM) format. */
	export interface OEMEphemerisFormProperties {
		oemData: FormControl<string | null | undefined>,
	}
	export function CreateOEMEphemerisFormGroup() {
		return new FormGroup<OEMEphemerisFormProperties>({
			oemData: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Object stored in S3 containing ephemeris data. */
	export interface S3Object {
		bucket?: string;
		key?: string;
		version?: string;
	}

	/** Object stored in S3 containing ephemeris data. */
	export interface S3ObjectFormProperties {
		bucket: FormControl<string | null | undefined>,
		key: FormControl<string | null | undefined>,
		version: FormControl<string | null | undefined>,
	}
	export function CreateS3ObjectFormGroup() {
		return new FormGroup<S3ObjectFormProperties>({
			bucket: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Two-line element set (TLE) ephemeris. */
	export interface TLEEphemeris {
		s3Object?: S3Object;
		tleData?: Array<TLEData>;
	}

	/** Two-line element set (TLE) ephemeris. */
	export interface TLEEphemerisFormProperties {
	}
	export function CreateTLEEphemerisFormGroup() {
		return new FormGroup<TLEEphemerisFormProperties>({
		});

	}


	/** Two-line element set (TLE) data. */
	export interface TLEData {

		/** Required */
		tleLine1: string;

		/** Required */
		tleLine2: string;

		/** Required */
		validTimeRange: TimeRange;
	}

	/** Two-line element set (TLE) data. */
	export interface TLEDataFormProperties {

		/** Required */
		tleLine1: FormControl<string | null | undefined>,

		/** Required */
		tleLine2: FormControl<string | null | undefined>,
	}
	export function CreateTLEDataFormGroup() {
		return new FormGroup<TLEDataFormProperties>({
			tleLine1: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			tleLine2: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A time range with a start and end time. */
	export interface TimeRange {

		/** Required */
		endTime: Date;

		/** Required */
		startTime: Date;
	}

	/** A time range with a start and end time. */
	export interface TimeRangeFormProperties {

		/** Required */
		endTime: FormControl<Date | null | undefined>,

		/** Required */
		startTime: FormControl<Date | null | undefined>,
	}
	export function CreateTimeRangeFormGroup() {
		return new FormGroup<TimeRangeFormProperties>({
			endTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			startTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p/> */
	export interface MissionProfileIdResponse {
		missionProfileId?: string;
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
		contactId?: string;
		contactStatus?: ContactStatus;
		dataflowList?: Array<DataflowDetail>;
		endTime?: Date;
		errorMessage?: string;
		groundStation?: string;
		maximumElevation?: Elevation;
		missionProfileArn?: string;
		postPassEndTime?: Date;
		prePassStartTime?: Date;
		region?: string;
		satelliteArn?: string;
		startTime?: Date;
		tags?: TagsMap;
	}

	/** <p/> */
	export interface DescribeContactResponseFormProperties {
		contactId: FormControl<string | null | undefined>,
		contactStatus: FormControl<ContactStatus | null | undefined>,
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
			contactStatus: new FormControl<ContactStatus | null | undefined>(undefined),
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

	export enum ContactStatus { AVAILABLE = 'AVAILABLE', AWS_CANCELLED = 'AWS_CANCELLED', AWS_FAILED = 'AWS_FAILED', CANCELLED = 'CANCELLED', CANCELLING = 'CANCELLING', COMPLETED = 'COMPLETED', FAILED = 'FAILED', FAILED_TO_SCHEDULE = 'FAILED_TO_SCHEDULE', PASS = 'PASS', POSTPASS = 'POSTPASS', PREPASS = 'PREPASS', SCHEDULED = 'SCHEDULED', SCHEDULING = 'SCHEDULING' }


	/** Information about a dataflow edge used in a contact. */
	export interface DataflowDetail {

		/** Dataflow details for the destination side. */
		destination?: Destination;
		errorMessage?: string;

		/** Dataflow details for the source side. */
		source?: Source;
	}

	/** Information about a dataflow edge used in a contact. */
	export interface DataflowDetailFormProperties {
		errorMessage: FormControl<string | null | undefined>,
	}
	export function CreateDataflowDetailFormGroup() {
		return new FormGroup<DataflowDetailFormProperties>({
			errorMessage: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Dataflow details for the destination side. */
	export interface Destination {
		configDetails?: ConfigDetails;
		configId?: string;
		configType?: ConfigCapabilityType;
		dataflowDestinationRegion?: string;
	}

	/** Dataflow details for the destination side. */
	export interface DestinationFormProperties {
		configId: FormControl<string | null | undefined>,
		configType: FormControl<ConfigCapabilityType | null | undefined>,
		dataflowDestinationRegion: FormControl<string | null | undefined>,
	}
	export function CreateDestinationFormGroup() {
		return new FormGroup<DestinationFormProperties>({
			configId: new FormControl<string | null | undefined>(undefined),
			configType: new FormControl<ConfigCapabilityType | null | undefined>(undefined),
			dataflowDestinationRegion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details for certain <code>Config</code> object types in a contact. */
	export interface ConfigDetails {
		antennaDemodDecodeDetails?: AntennaDemodDecodeDetails;

		/** Information about the endpoint details. */
		endpointDetails?: EndpointDetails;
		s3RecordingDetails?: S3RecordingDetails;
	}

	/** Details for certain <code>Config</code> object types in a contact. */
	export interface ConfigDetailsFormProperties {
	}
	export function CreateConfigDetailsFormGroup() {
		return new FormGroup<ConfigDetailsFormProperties>({
		});

	}


	/** Details about an antenna demod decode <code>Config</code> used in a contact. */
	export interface AntennaDemodDecodeDetails {
		outputNode?: string;
	}

	/** Details about an antenna demod decode <code>Config</code> used in a contact. */
	export interface AntennaDemodDecodeDetailsFormProperties {
		outputNode: FormControl<string | null | undefined>,
	}
	export function CreateAntennaDemodDecodeDetailsFormGroup() {
		return new FormGroup<AntennaDemodDecodeDetailsFormProperties>({
			outputNode: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details about an S3 recording <code>Config</code> used in a contact. */
	export interface S3RecordingDetails {
		bucketArn?: string;
		keyTemplate?: string;
	}

	/** Details about an S3 recording <code>Config</code> used in a contact. */
	export interface S3RecordingDetailsFormProperties {
		bucketArn: FormControl<string | null | undefined>,
		keyTemplate: FormControl<string | null | undefined>,
	}
	export function CreateS3RecordingDetailsFormGroup() {
		return new FormGroup<S3RecordingDetailsFormProperties>({
			bucketArn: new FormControl<string | null | undefined>(undefined),
			keyTemplate: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Dataflow details for the source side. */
	export interface Source {
		configDetails?: ConfigDetails;
		configId?: string;
		configType?: ConfigCapabilityType;
		dataflowSourceRegion?: string;
	}

	/** Dataflow details for the source side. */
	export interface SourceFormProperties {
		configId: FormControl<string | null | undefined>,
		configType: FormControl<ConfigCapabilityType | null | undefined>,
		dataflowSourceRegion: FormControl<string | null | undefined>,
	}
	export function CreateSourceFormGroup() {
		return new FormGroup<SourceFormProperties>({
			configId: new FormControl<string | null | undefined>(undefined),
			configType: new FormControl<ConfigCapabilityType | null | undefined>(undefined),
			dataflowSourceRegion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Elevation angle of the satellite in the sky during a contact. */
	export interface Elevation {

		/** Required */
		unit: AngleUnits;

		/** Required */
		value: number;
	}

	/** Elevation angle of the satellite in the sky during a contact. */
	export interface ElevationFormProperties {

		/** Required */
		unit: FormControl<AngleUnits | null | undefined>,

		/** Required */
		value: FormControl<number | null | undefined>,
	}
	export function CreateElevationFormGroup() {
		return new FormGroup<ElevationFormProperties>({
			unit: new FormControl<AngleUnits | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum AngleUnits { DEGREE_ANGLE = 'DEGREE_ANGLE', RADIAN = 'RADIAN' }

	export interface TagsMap {
	}
	export interface TagsMapFormProperties {
	}
	export function CreateTagsMapFormGroup() {
		return new FormGroup<TagsMapFormProperties>({
		});

	}

	export interface DescribeEphemerisResponse {
		creationTime?: Date;
		enabled?: boolean | null;
		ephemerisId?: string;
		invalidReason?: EphemerisInvalidReason;
		name?: string;
		priority?: number | null;
		satelliteId?: string;
		status?: EphemerisStatus;
		suppliedData?: EphemerisTypeDescription;
		tags?: TagsMap;
	}
	export interface DescribeEphemerisResponseFormProperties {
		creationTime: FormControl<Date | null | undefined>,
		enabled: FormControl<boolean | null | undefined>,
		ephemerisId: FormControl<string | null | undefined>,
		invalidReason: FormControl<EphemerisInvalidReason | null | undefined>,
		name: FormControl<string | null | undefined>,
		priority: FormControl<number | null | undefined>,
		satelliteId: FormControl<string | null | undefined>,
		status: FormControl<EphemerisStatus | null | undefined>,
	}
	export function CreateDescribeEphemerisResponseFormGroup() {
		return new FormGroup<DescribeEphemerisResponseFormProperties>({
			creationTime: new FormControl<Date | null | undefined>(undefined),
			enabled: new FormControl<boolean | null | undefined>(undefined),
			ephemerisId: new FormControl<string | null | undefined>(undefined),
			invalidReason: new FormControl<EphemerisInvalidReason | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			priority: new FormControl<number | null | undefined>(undefined),
			satelliteId: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<EphemerisStatus | null | undefined>(undefined),
		});

	}

	export enum EphemerisInvalidReason { METADATA_INVALID = 'METADATA_INVALID', TIME_RANGE_INVALID = 'TIME_RANGE_INVALID', TRAJECTORY_INVALID = 'TRAJECTORY_INVALID', KMS_KEY_INVALID = 'KMS_KEY_INVALID', VALIDATION_ERROR = 'VALIDATION_ERROR' }

	export enum EphemerisStatus { VALIDATING = 'VALIDATING', INVALID = 'INVALID', ERROR = 'ERROR', ENABLED = 'ENABLED', DISABLED = 'DISABLED', EXPIRED = 'EXPIRED' }


	/** <p/> */
	export interface EphemerisTypeDescription {

		/** Description of ephemeris. */
		oem?: EphemerisDescription;

		/** Description of ephemeris. */
		tle?: EphemerisDescription;
	}

	/** <p/> */
	export interface EphemerisTypeDescriptionFormProperties {
	}
	export function CreateEphemerisTypeDescriptionFormGroup() {
		return new FormGroup<EphemerisTypeDescriptionFormProperties>({
		});

	}


	/** Description of ephemeris. */
	export interface EphemerisDescription {
		ephemerisData?: string;
		sourceS3Object?: S3Object;
	}

	/** Description of ephemeris. */
	export interface EphemerisDescriptionFormProperties {
		ephemerisData: FormControl<string | null | undefined>,
	}
	export function CreateEphemerisDescriptionFormGroup() {
		return new FormGroup<EphemerisDescriptionFormProperties>({
			ephemerisData: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetAgentConfigurationResponse {
		agentId?: string;
		taskingDocument?: string;
	}
	export interface GetAgentConfigurationResponseFormProperties {
		agentId: FormControl<string | null | undefined>,
		taskingDocument: FormControl<string | null | undefined>,
	}
	export function CreateGetAgentConfigurationResponseFormGroup() {
		return new FormGroup<GetAgentConfigurationResponseFormProperties>({
			agentId: new FormControl<string | null | undefined>(undefined),
			taskingDocument: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p/> */
	export interface GetConfigResponse {

		/** Required */
		configArn: string;

		/** Required */
		configData: ConfigTypeData;

		/** Required */
		configId: string;
		configType?: ConfigCapabilityType;

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
		configType: FormControl<ConfigCapabilityType | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGetConfigResponseFormGroup() {
		return new FormGroup<GetConfigResponseFormProperties>({
			configArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			configId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			configType: new FormControl<ConfigCapabilityType | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p>Object containing the parameters of a <code>Config</code>.</p> <p>See the subtype definitions for what each type of <code>Config</code> contains.</p> */
	export interface ConfigTypeData {
		antennaDownlinkConfig?: AntennaDownlinkConfig;
		antennaDownlinkDemodDecodeConfig?: AntennaDownlinkDemodDecodeConfig;
		antennaUplinkConfig?: AntennaUplinkConfig;
		dataflowEndpointConfig?: DataflowEndpointConfig;
		s3RecordingConfig?: S3RecordingConfig;
		trackingConfig?: TrackingConfig;
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
		contactPostPassDurationSeconds?: number | null;
		contactPrePassDurationSeconds?: number | null;
		dataflowEndpointGroupArn?: string;
		dataflowEndpointGroupId?: string;
		endpointsDetails?: Array<EndpointDetails>;
		tags?: TagsMap;
	}

	/** <p/> */
	export interface GetDataflowEndpointGroupResponseFormProperties {
		contactPostPassDurationSeconds: FormControl<number | null | undefined>,
		contactPrePassDurationSeconds: FormControl<number | null | undefined>,
		dataflowEndpointGroupArn: FormControl<string | null | undefined>,
		dataflowEndpointGroupId: FormControl<string | null | undefined>,
	}
	export function CreateGetDataflowEndpointGroupResponseFormGroup() {
		return new FormGroup<GetDataflowEndpointGroupResponseFormProperties>({
			contactPostPassDurationSeconds: new FormControl<number | null | undefined>(undefined),
			contactPrePassDurationSeconds: new FormControl<number | null | undefined>(undefined),
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
		contactPostPassDurationSeconds?: number | null;
		contactPrePassDurationSeconds?: number | null;
		dataflowEdges?: Array<Array<string>>;
		minimumViableContactDurationSeconds?: number | null;
		missionProfileArn?: string;
		missionProfileId?: string;
		name?: string;
		region?: string;
		streamsKmsKey?: KmsKey;
		streamsKmsRole?: string;
		tags?: TagsMap;
		trackingConfigArn?: string;
	}

	/** <p/> */
	export interface GetMissionProfileResponseFormProperties {
		contactPostPassDurationSeconds: FormControl<number | null | undefined>,
		contactPrePassDurationSeconds: FormControl<number | null | undefined>,
		minimumViableContactDurationSeconds: FormControl<number | null | undefined>,
		missionProfileArn: FormControl<string | null | undefined>,
		missionProfileId: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		region: FormControl<string | null | undefined>,
		streamsKmsRole: FormControl<string | null | undefined>,
		trackingConfigArn: FormControl<string | null | undefined>,
	}
	export function CreateGetMissionProfileResponseFormGroup() {
		return new FormGroup<GetMissionProfileResponseFormProperties>({
			contactPostPassDurationSeconds: new FormControl<number | null | undefined>(undefined),
			contactPrePassDurationSeconds: new FormControl<number | null | undefined>(undefined),
			minimumViableContactDurationSeconds: new FormControl<number | null | undefined>(undefined),
			missionProfileArn: new FormControl<string | null | undefined>(undefined),
			missionProfileId: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			region: new FormControl<string | null | undefined>(undefined),
			streamsKmsRole: new FormControl<string | null | undefined>(undefined),
			trackingConfigArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** AWS Key Management Service (KMS) Key. */
	export interface KmsKey {
		kmsAliasArn?: string;
		kmsKeyArn?: string;
	}

	/** AWS Key Management Service (KMS) Key. */
	export interface KmsKeyFormProperties {
		kmsAliasArn: FormControl<string | null | undefined>,
		kmsKeyArn: FormControl<string | null | undefined>,
	}
	export function CreateKmsKeyFormGroup() {
		return new FormGroup<KmsKeyFormProperties>({
			kmsAliasArn: new FormControl<string | null | undefined>(undefined),
			kmsKeyArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p/> */
	export interface GetSatelliteResponse {
		currentEphemeris?: EphemerisMetaData;
		groundStations?: Array<string>;
		noradSatelliteID?: number | null;
		satelliteArn?: string;
		satelliteId?: string;
	}

	/** <p/> */
	export interface GetSatelliteResponseFormProperties {
		noradSatelliteID: FormControl<number | null | undefined>,
		satelliteArn: FormControl<string | null | undefined>,
		satelliteId: FormControl<string | null | undefined>,
	}
	export function CreateGetSatelliteResponseFormGroup() {
		return new FormGroup<GetSatelliteResponseFormProperties>({
			noradSatelliteID: new FormControl<number | null | undefined>(undefined),
			satelliteArn: new FormControl<string | null | undefined>(undefined),
			satelliteId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata describing a particular ephemeris. */
	export interface EphemerisMetaData {
		ephemerisId?: string;
		epoch?: Date;
		name?: string;

		/** Required */
		source: EphemerisSource;
	}

	/** Metadata describing a particular ephemeris. */
	export interface EphemerisMetaDataFormProperties {
		ephemerisId: FormControl<string | null | undefined>,
		epoch: FormControl<Date | null | undefined>,
		name: FormControl<string | null | undefined>,

		/** Required */
		source: FormControl<EphemerisSource | null | undefined>,
	}
	export function CreateEphemerisMetaDataFormGroup() {
		return new FormGroup<EphemerisMetaDataFormProperties>({
			ephemerisId: new FormControl<string | null | undefined>(undefined),
			epoch: new FormControl<Date | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			source: new FormControl<EphemerisSource | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum EphemerisSource { CUSTOMER_PROVIDED = 'CUSTOMER_PROVIDED', SPACE_TRACK = 'SPACE_TRACK' }


	/** <p/> */
	export interface ListConfigsResponse {
		configList?: Array<ConfigListItem>;
		nextToken?: string;
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
		configArn?: string;
		configId?: string;
		configType?: ConfigCapabilityType;
		name?: string;
	}

	/** An item in a list of <code>Config</code> objects. */
	export interface ConfigListItemFormProperties {
		configArn: FormControl<string | null | undefined>,
		configId: FormControl<string | null | undefined>,
		configType: FormControl<ConfigCapabilityType | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateConfigListItemFormGroup() {
		return new FormGroup<ConfigListItemFormProperties>({
			configArn: new FormControl<string | null | undefined>(undefined),
			configId: new FormControl<string | null | undefined>(undefined),
			configType: new FormControl<ConfigCapabilityType | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p/> */
	export interface ListContactsResponse {
		contactList?: Array<ContactData>;
		nextToken?: string;
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
		contactId?: string;
		contactStatus?: ContactStatus;
		endTime?: Date;
		errorMessage?: string;
		groundStation?: string;
		maximumElevation?: Elevation;
		missionProfileArn?: string;
		postPassEndTime?: Date;
		prePassStartTime?: Date;
		region?: string;
		satelliteArn?: string;
		startTime?: Date;
		tags?: TagsMap;
	}

	/** Data describing a contact. */
	export interface ContactDataFormProperties {
		contactId: FormControl<string | null | undefined>,
		contactStatus: FormControl<ContactStatus | null | undefined>,
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
			contactStatus: new FormControl<ContactStatus | null | undefined>(undefined),
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


	/** <p/> */
	export interface ListDataflowEndpointGroupsResponse {
		dataflowEndpointGroupList?: Array<DataflowEndpointListItem>;
		nextToken?: string;
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
		dataflowEndpointGroupArn?: string;
		dataflowEndpointGroupId?: string;
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

	export interface ListEphemeridesResponse {
		ephemerides?: Array<EphemerisItem>;
		nextToken?: string;
	}
	export interface ListEphemeridesResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListEphemeridesResponseFormGroup() {
		return new FormGroup<ListEphemeridesResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Ephemeris item. */
	export interface EphemerisItem {
		creationTime?: Date;
		enabled?: boolean | null;
		ephemerisId?: string;
		name?: string;
		priority?: number | null;
		sourceS3Object?: S3Object;
		status?: EphemerisStatus;
	}

	/** Ephemeris item. */
	export interface EphemerisItemFormProperties {
		creationTime: FormControl<Date | null | undefined>,
		enabled: FormControl<boolean | null | undefined>,
		ephemerisId: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		priority: FormControl<number | null | undefined>,
		status: FormControl<EphemerisStatus | null | undefined>,
	}
	export function CreateEphemerisItemFormGroup() {
		return new FormGroup<EphemerisItemFormProperties>({
			creationTime: new FormControl<Date | null | undefined>(undefined),
			enabled: new FormControl<boolean | null | undefined>(undefined),
			ephemerisId: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			priority: new FormControl<number | null | undefined>(undefined),
			status: new FormControl<EphemerisStatus | null | undefined>(undefined),
		});

	}


	/** <p/> */
	export interface ListGroundStationsResponse {
		groundStationList?: Array<GroundStationData>;
		nextToken?: string;
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
		groundStationId?: string;
		groundStationName?: string;
		region?: string;
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
		nextToken?: string;
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
		missionProfileArn?: string;
		missionProfileId?: string;
		name?: string;
		region?: string;
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
		nextToken?: string;
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
		currentEphemeris?: EphemerisMetaData;
		groundStations?: Array<string>;
		noradSatelliteID?: number | null;
		satelliteArn?: string;
		satelliteId?: string;
	}

	/** Item in a list of satellites. */
	export interface SatelliteListItemFormProperties {
		noradSatelliteID: FormControl<number | null | undefined>,
		satelliteArn: FormControl<string | null | undefined>,
		satelliteId: FormControl<string | null | undefined>,
	}
	export function CreateSatelliteListItemFormGroup() {
		return new FormGroup<SatelliteListItemFormProperties>({
			noradSatelliteID: new FormControl<number | null | undefined>(undefined),
			satelliteArn: new FormControl<string | null | undefined>(undefined),
			satelliteId: new FormControl<string | null | undefined>(undefined),
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

	export interface RegisterAgentResponse {
		agentId?: string;
	}
	export interface RegisterAgentResponseFormProperties {
		agentId: FormControl<string | null | undefined>,
	}
	export function CreateRegisterAgentResponseFormGroup() {
		return new FormGroup<RegisterAgentResponseFormProperties>({
			agentId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Version information for agent components. */
	export interface ComponentVersion {

		/** Required */
		componentType: string;

		/** Required */
		versions: Array<string>;
	}

	/** Version information for agent components. */
	export interface ComponentVersionFormProperties {

		/** Required */
		componentType: FormControl<string | null | undefined>,
	}
	export function CreateComponentVersionFormGroup() {
		return new FormGroup<ComponentVersionFormProperties>({
			componentType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

	export interface UpdateAgentStatusResponse {

		/** Required */
		agentId: string;
	}
	export interface UpdateAgentStatusResponseFormProperties {

		/** Required */
		agentId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateAgentStatusResponseFormGroup() {
		return new FormGroup<UpdateAgentStatusResponseFormProperties>({
			agentId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SignatureMap {
	}
	export interface SignatureMapFormProperties {
	}
	export function CreateSignatureMapFormGroup() {
		return new FormGroup<SignatureMapFormProperties>({
		});

	}


	/** Data on the status of agent components. */
	export interface ComponentStatusData {
		bytesReceived?: number | null;
		bytesSent?: number | null;

		/** Required */
		capabilityArn: string;

		/** Required */
		componentType: string;

		/** Required */
		dataflowId: string;
		packetsDropped?: number | null;

		/** Required */
		status: AgentStatus;
	}

	/** Data on the status of agent components. */
	export interface ComponentStatusDataFormProperties {
		bytesReceived: FormControl<number | null | undefined>,
		bytesSent: FormControl<number | null | undefined>,

		/** Required */
		capabilityArn: FormControl<string | null | undefined>,

		/** Required */
		componentType: FormControl<string | null | undefined>,

		/** Required */
		dataflowId: FormControl<string | null | undefined>,
		packetsDropped: FormControl<number | null | undefined>,

		/** Required */
		status: FormControl<AgentStatus | null | undefined>,
	}
	export function CreateComponentStatusDataFormGroup() {
		return new FormGroup<ComponentStatusDataFormProperties>({
			bytesReceived: new FormControl<number | null | undefined>(undefined),
			bytesSent: new FormControl<number | null | undefined>(undefined),
			capabilityArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			componentType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			dataflowId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			packetsDropped: new FormControl<number | null | undefined>(undefined),
			status: new FormControl<AgentStatus | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Detailed information about the agent. */
	export interface AgentDetails {
		agentCpuCores?: Array<number> | null;

		/** Required */
		agentVersion: string;

		/** Required */
		componentVersions: Array<ComponentVersion>;

		/** Required */
		instanceId: string;

		/** Required */
		instanceType: string;
		reservedCpuCores?: Array<number> | null;
	}

	/** Detailed information about the agent. */
	export interface AgentDetailsFormProperties {

		/** Required */
		agentVersion: FormControl<string | null | undefined>,

		/** Required */
		instanceId: FormControl<string | null | undefined>,

		/** Required */
		instanceType: FormControl<string | null | undefined>,
	}
	export function CreateAgentDetailsFormGroup() {
		return new FormGroup<AgentDetailsFormProperties>({
			agentVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			instanceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			instanceType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Aggregate status of Agent components. */
	export interface AggregateStatus {
		signatureMap?: SignatureMap;

		/** Required */
		status: AgentStatus;
	}

	/** Aggregate status of Agent components. */
	export interface AggregateStatusFormProperties {

		/** Required */
		status: FormControl<AgentStatus | null | undefined>,
	}
	export function CreateAggregateStatusFormGroup() {
		return new FormGroup<AggregateStatusFormProperties>({
			status: new FormControl<AgentStatus | null | undefined>(undefined, [Validators.required]),
		});

	}


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


	/** <p/> */
	export interface CreateConfigRequest {

		/** Required */
		configData: ConfigTypeData;

		/** Required */
		name: string;
		tags?: TagsMap;
	}

	/** <p/> */
	export interface CreateConfigRequestFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,
	}
	export function CreateCreateConfigRequestFormGroup() {
		return new FormGroup<CreateConfigRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p/> */
	export interface CreateDataflowEndpointGroupRequest {
		contactPostPassDurationSeconds?: number | null;
		contactPrePassDurationSeconds?: number | null;

		/** Required */
		endpointDetails: Array<EndpointDetails>;
		tags?: TagsMap;
	}

	/** <p/> */
	export interface CreateDataflowEndpointGroupRequestFormProperties {
		contactPostPassDurationSeconds: FormControl<number | null | undefined>,
		contactPrePassDurationSeconds: FormControl<number | null | undefined>,
	}
	export function CreateCreateDataflowEndpointGroupRequestFormGroup() {
		return new FormGroup<CreateDataflowEndpointGroupRequestFormProperties>({
			contactPostPassDurationSeconds: new FormControl<number | null | undefined>(undefined),
			contactPrePassDurationSeconds: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Ephemeris data. */
	export interface EphemerisData {

		/** Ephemeris data in Orbit Ephemeris Message (OEM) format. */
		oem?: OEMEphemeris;

		/** Two-line element set (TLE) ephemeris. */
		tle?: TLEEphemeris;
	}

	/** Ephemeris data. */
	export interface EphemerisDataFormProperties {
	}
	export function CreateEphemerisDataFormGroup() {
		return new FormGroup<EphemerisDataFormProperties>({
		});

	}

	export interface CreateEphemerisRequest {
		enabled?: boolean | null;
		ephemeris?: EphemerisData;
		expirationTime?: Date;
		kmsKeyArn?: string;

		/** Required */
		name: string;
		priority?: number | null;

		/** Required */
		satelliteId: string;
		tags?: TagsMap;
	}
	export interface CreateEphemerisRequestFormProperties {
		enabled: FormControl<boolean | null | undefined>,
		expirationTime: FormControl<Date | null | undefined>,
		kmsKeyArn: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
		priority: FormControl<number | null | undefined>,

		/** Required */
		satelliteId: FormControl<string | null | undefined>,
	}
	export function CreateCreateEphemerisRequestFormGroup() {
		return new FormGroup<CreateEphemerisRequestFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined),
			expirationTime: new FormControl<Date | null | undefined>(undefined),
			kmsKeyArn: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			priority: new FormControl<number | null | undefined>(undefined),
			satelliteId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p/> */
	export interface CreateMissionProfileRequest {
		contactPostPassDurationSeconds?: number | null;
		contactPrePassDurationSeconds?: number | null;

		/** Required */
		dataflowEdges: Array<Array<string>>;

		/** Required */
		minimumViableContactDurationSeconds: number;

		/** Required */
		name: string;
		streamsKmsKey?: KmsKey;
		streamsKmsRole?: string;
		tags?: TagsMap;

		/** Required */
		trackingConfigArn: string;
	}

	/** <p/> */
	export interface CreateMissionProfileRequestFormProperties {
		contactPostPassDurationSeconds: FormControl<number | null | undefined>,
		contactPrePassDurationSeconds: FormControl<number | null | undefined>,

		/** Required */
		minimumViableContactDurationSeconds: FormControl<number | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
		streamsKmsRole: FormControl<string | null | undefined>,

		/** Required */
		trackingConfigArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateMissionProfileRequestFormGroup() {
		return new FormGroup<CreateMissionProfileRequestFormProperties>({
			contactPostPassDurationSeconds: new FormControl<number | null | undefined>(undefined),
			contactPrePassDurationSeconds: new FormControl<number | null | undefined>(undefined),
			minimumViableContactDurationSeconds: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			streamsKmsRole: new FormControl<string | null | undefined>(undefined),
			trackingConfigArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


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

	export interface DeleteEphemerisRequest {
	}
	export interface DeleteEphemerisRequestFormProperties {
	}
	export function CreateDeleteEphemerisRequestFormGroup() {
		return new FormGroup<DeleteEphemerisRequestFormProperties>({
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

	export interface DescribeEphemerisRequest {
	}
	export interface DescribeEphemerisRequestFormProperties {
	}
	export function CreateDescribeEphemerisRequestFormGroup() {
		return new FormGroup<DescribeEphemerisRequestFormProperties>({
		});

	}


	/** Data for agent discovery. */
	export interface DiscoveryData {

		/** Required */
		capabilityArns: Array<string>;

		/** Required */
		privateIpAddresses: Array<string>;

		/** Required */
		publicIpAddresses: Array<string>;
	}

	/** Data for agent discovery. */
	export interface DiscoveryDataFormProperties {
	}
	export function CreateDiscoveryDataFormGroup() {
		return new FormGroup<DiscoveryDataFormProperties>({
		});

	}

	export enum FrequencyUnits { GHz = 'GHz', MHz = 'MHz', kHz = 'kHz' }

	export interface GetAgentConfigurationRequest {
	}
	export interface GetAgentConfigurationRequestFormProperties {
	}
	export function CreateGetAgentConfigurationRequestFormGroup() {
		return new FormGroup<GetAgentConfigurationRequestFormProperties>({
		});

	}


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
		groundStation?: string;
		maxResults?: number | null;
		missionProfileArn?: string;
		nextToken?: string;
		satelliteArn?: string;

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

	export interface ListEphemeridesRequest {

		/** Required */
		endTime: Date;

		/** Required */
		satelliteId: string;

		/** Required */
		startTime: Date;
		statusList?: Array<EphemerisStatus>;
	}
	export interface ListEphemeridesRequestFormProperties {

		/** Required */
		endTime: FormControl<Date | null | undefined>,

		/** Required */
		satelliteId: FormControl<string | null | undefined>,

		/** Required */
		startTime: FormControl<Date | null | undefined>,
	}
	export function CreateListEphemeridesRequestFormGroup() {
		return new FormGroup<ListEphemeridesRequestFormProperties>({
			endTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			satelliteId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			startTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
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

	export interface RegisterAgentRequest {

		/** Required */
		agentDetails: AgentDetails;

		/** Required */
		discoveryData: DiscoveryData;
	}
	export interface RegisterAgentRequestFormProperties {
	}
	export function CreateRegisterAgentRequestFormGroup() {
		return new FormGroup<RegisterAgentRequestFormProperties>({
		});

	}


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

	export interface UpdateAgentStatusRequest {

		/** Required */
		aggregateStatus: AggregateStatus;

		/** Required */
		componentStatuses: Array<ComponentStatusData>;

		/** Required */
		taskId: string;
	}
	export interface UpdateAgentStatusRequestFormProperties {

		/** Required */
		taskId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateAgentStatusRequestFormGroup() {
		return new FormGroup<UpdateAgentStatusRequestFormProperties>({
			taskId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p/> */
	export interface UpdateConfigRequest {

		/** Required */
		configData: ConfigTypeData;

		/** Required */
		name: string;
	}

	/** <p/> */
	export interface UpdateConfigRequestFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,
	}
	export function CreateUpdateConfigRequestFormGroup() {
		return new FormGroup<UpdateConfigRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateEphemerisRequest {

		/** Required */
		enabled: boolean;
		name?: string;
		priority?: number | null;
	}
	export interface UpdateEphemerisRequestFormProperties {

		/** Required */
		enabled: FormControl<boolean | null | undefined>,
		name: FormControl<string | null | undefined>,
		priority: FormControl<number | null | undefined>,
	}
	export function CreateUpdateEphemerisRequestFormGroup() {
		return new FormGroup<UpdateEphemerisRequestFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined),
			priority: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** <p/> */
	export interface UpdateMissionProfileRequest {
		contactPostPassDurationSeconds?: number | null;
		contactPrePassDurationSeconds?: number | null;
		dataflowEdges?: Array<Array<string>>;
		minimumViableContactDurationSeconds?: number | null;
		name?: string;
		streamsKmsKey?: KmsKey;
		streamsKmsRole?: string;
		trackingConfigArn?: string;
	}

	/** <p/> */
	export interface UpdateMissionProfileRequestFormProperties {
		contactPostPassDurationSeconds: FormControl<number | null | undefined>,
		contactPrePassDurationSeconds: FormControl<number | null | undefined>,
		minimumViableContactDurationSeconds: FormControl<number | null | undefined>,
		name: FormControl<string | null | undefined>,
		streamsKmsRole: FormControl<string | null | undefined>,
		trackingConfigArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateMissionProfileRequestFormGroup() {
		return new FormGroup<UpdateMissionProfileRequestFormProperties>({
			contactPostPassDurationSeconds: new FormControl<number | null | undefined>(undefined),
			contactPrePassDurationSeconds: new FormControl<number | null | undefined>(undefined),
			minimumViableContactDurationSeconds: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			streamsKmsRole: new FormControl<string | null | undefined>(undefined),
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
		 * Creates an Ephemeris with the specified <code>EphemerisData</code>.
		 * Post ephemeris
		 * @return {EphemerisIdResponse} Success
		 */
		CreateEphemeris(requestBody: CreateEphemerisPostBody): Observable<EphemerisIdResponse> {
			return this.http.post<EphemerisIdResponse>(this.baseUri + 'ephemeris', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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
		 * @param {ConfigCapabilityType} configType Type of a <code>Config</code>.
		 * @return {ConfigIdResponse} Success
		 */
		DeleteConfig(configId: string, configType: ConfigCapabilityType): Observable<ConfigIdResponse> {
			return this.http.delete<ConfigIdResponse>(this.baseUri + 'config/' + configType + '/' + (configId == null ? '' : encodeURIComponent(configId)), {});
		}

		/**
		 * <p>Returns <code>Config</code> information.</p> <p>Only one <code>Config</code> response can be returned.</p>
		 * Get config/{configType}/{configId}
		 * @param {string} configId UUID of a <code>Config</code>.
		 * @param {ConfigCapabilityType} configType Type of a <code>Config</code>.
		 * @return {GetConfigResponse} Success
		 */
		GetConfig(configId: string, configType: ConfigCapabilityType): Observable<GetConfigResponse> {
			return this.http.get<GetConfigResponse>(this.baseUri + 'config/' + configType + '/' + (configId == null ? '' : encodeURIComponent(configId)), {});
		}

		/**
		 * <p>Updates the <code>Config</code> used when scheduling contacts.</p> <p>Updating a <code>Config</code> will not update the execution parameters for existing future contacts scheduled with this <code>Config</code>.</p>
		 * Put config/{configType}/{configId}
		 * @param {string} configId UUID of a <code>Config</code>.
		 * @param {ConfigCapabilityType} configType Type of a <code>Config</code>.
		 * @return {ConfigIdResponse} Success
		 */
		UpdateConfig(configId: string, configType: ConfigCapabilityType, requestBody: UpdateConfigPutBody): Observable<ConfigIdResponse> {
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
		 * Deletes an ephemeris
		 * Delete ephemeris/{ephemerisId}
		 * @param {string} ephemerisId The AWS Ground Station ephemeris ID.
		 * @return {EphemerisIdResponse} Success
		 */
		DeleteEphemeris(ephemerisId: string): Observable<EphemerisIdResponse> {
			return this.http.delete<EphemerisIdResponse>(this.baseUri + 'ephemeris/' + (ephemerisId == null ? '' : encodeURIComponent(ephemerisId)), {});
		}

		/**
		 * Describes an existing ephemeris.
		 * Get ephemeris/{ephemerisId}
		 * @param {string} ephemerisId The AWS Ground Station ephemeris ID.
		 * @return {DescribeEphemerisResponse} Success
		 */
		DescribeEphemeris(ephemerisId: string): Observable<DescribeEphemerisResponse> {
			return this.http.get<DescribeEphemerisResponse>(this.baseUri + 'ephemeris/' + (ephemerisId == null ? '' : encodeURIComponent(ephemerisId)), {});
		}

		/**
		 * Updates an existing ephemeris
		 * Put ephemeris/{ephemerisId}
		 * @param {string} ephemerisId The AWS Ground Station ephemeris ID.
		 * @return {EphemerisIdResponse} Success
		 */
		UpdateEphemeris(ephemerisId: string, requestBody: UpdateEphemerisPutBody): Observable<EphemerisIdResponse> {
			return this.http.put<EphemerisIdResponse>(this.baseUri + 'ephemeris/' + (ephemerisId == null ? '' : encodeURIComponent(ephemerisId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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
		 * <note> <p> For use by AWS Ground Station Agent and shouldn't be called directly.</p> </note> <p>Gets the latest configuration information for a registered agent.</p>
		 * Get agent/{agentId}/configuration
		 * @param {string} agentId UUID of agent to get configuration information for.
		 * @return {GetAgentConfigurationResponse} Success
		 */
		GetAgentConfiguration(agentId: string): Observable<GetAgentConfigurationResponse> {
			return this.http.get<GetAgentConfigurationResponse>(this.baseUri + 'agent/' + (agentId == null ? '' : encodeURIComponent(agentId)) + '/configuration', {});
		}

		/**
		 * Returns the number of reserved minutes used by account.
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
		 * List existing ephemerides.
		 * Post ephemerides
		 * @param {number} maxResults Maximum number of ephemerides to return.
		 * @param {string} nextToken Pagination token.
		 * @return {ListEphemeridesResponse} Success
		 */
		ListEphemerides(maxResults: number | null | undefined, nextToken: string | null | undefined, requestBody: ListEphemeridesPostBody): Observable<ListEphemeridesResponse> {
			return this.http.post<ListEphemeridesResponse>(this.baseUri + 'ephemerides?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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
		 * <note> <p> For use by AWS Ground Station Agent and shouldn't be called directly.</p> </note> <p> Registers a new agent with AWS Ground Station. </p>
		 * Post agent
		 * @return {RegisterAgentResponse} Success
		 */
		RegisterAgent(requestBody: RegisterAgentPostBody): Observable<RegisterAgentResponse> {
			return this.http.post<RegisterAgentResponse>(this.baseUri + 'agent', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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

		/**
		 * <note> <p> For use by AWS Ground Station Agent and shouldn't be called directly.</p> </note> <p>Update the status of the agent.</p>
		 * Put agent/{agentId}
		 * @param {string} agentId UUID of agent to update.
		 * @return {UpdateAgentStatusResponse} Success
		 */
		UpdateAgentStatus(agentId: string, requestBody: UpdateAgentStatusPutBody): Observable<UpdateAgentStatusResponse> {
			return this.http.put<UpdateAgentStatusResponse>(this.baseUri + 'agent/' + (agentId == null ? '' : encodeURIComponent(agentId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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
		antennaDownlinkConfig?: AntennaDownlinkConfig;
		antennaDownlinkDemodDecodeConfig?: AntennaDownlinkDemodDecodeConfig;
		antennaUplinkConfig?: AntennaUplinkConfig;
		dataflowEndpointConfig?: DataflowEndpointConfig;
		s3RecordingConfig?: S3RecordingConfig;
		trackingConfig?: TrackingConfig;
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
		 * Amount of time, in seconds, after a contact ends that the Ground Station Dataflow Endpoint Group will be in a <code>POSTPASS</code> state. A Ground Station Dataflow Endpoint Group State Change event will be emitted when the Dataflow Endpoint Group enters and exits the <code>POSTPASS</code> state.
		 * Minimum: 120
		 * Maximum: 480
		 */
		contactPostPassDurationSeconds?: number | null;

		/**
		 * Amount of time, in seconds, before a contact starts that the Ground Station Dataflow Endpoint Group will be in a <code>PREPASS</code> state. A Ground Station Dataflow Endpoint Group State Change event will be emitted when the Dataflow Endpoint Group enters and exits the <code>PREPASS</code> state.
		 * Minimum: 120
		 * Maximum: 480
		 */
		contactPrePassDurationSeconds?: number | null;

		/**
		 * Endpoint details of each endpoint in the dataflow endpoint group.
		 * Required
		 * Minimum items: 0
		 * Maximum items: 500
		 */
		endpointDetails: Array<EndpointDetails>;

		/** Tags of a dataflow endpoint group. */
		tags?: {[id: string]: string };
	}
	export interface CreateDataflowEndpointGroupPostBodyFormProperties {

		/**
		 * Amount of time, in seconds, after a contact ends that the Ground Station Dataflow Endpoint Group will be in a <code>POSTPASS</code> state. A Ground Station Dataflow Endpoint Group State Change event will be emitted when the Dataflow Endpoint Group enters and exits the <code>POSTPASS</code> state.
		 * Minimum: 120
		 * Maximum: 480
		 */
		contactPostPassDurationSeconds: FormControl<number | null | undefined>,

		/**
		 * Amount of time, in seconds, before a contact starts that the Ground Station Dataflow Endpoint Group will be in a <code>PREPASS</code> state. A Ground Station Dataflow Endpoint Group State Change event will be emitted when the Dataflow Endpoint Group enters and exits the <code>PREPASS</code> state.
		 * Minimum: 120
		 * Maximum: 480
		 */
		contactPrePassDurationSeconds: FormControl<number | null | undefined>,

		/** Tags of a dataflow endpoint group. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateDataflowEndpointGroupPostBodyFormGroup() {
		return new FormGroup<CreateDataflowEndpointGroupPostBodyFormProperties>({
			contactPostPassDurationSeconds: new FormControl<number | null | undefined>(undefined, [Validators.min(120), Validators.max(480)]),
			contactPrePassDurationSeconds: new FormControl<number | null | undefined>(undefined, [Validators.min(120), Validators.max(480)]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateEphemerisPostBody {

		/** <p>Whether to set the ephemeris status to <code>ENABLED</code> after validation.</p> <p>Setting this to false will set the ephemeris status to <code>DISABLED</code> after validation.</p> */
		enabled?: boolean | null;

		/** Ephemeris data. */
		ephemeris?: CreateEphemerisPostBodyEphemeris;

		/** An overall expiration time for the ephemeris in UTC, after which it will become <code>EXPIRED</code>. */
		expirationTime?: Date | null;

		/** The ARN of a KMS key used to encrypt the ephemeris in Ground Station. */
		kmsKeyArn?: string | null;

		/**
		 * A name string associated with the ephemeris. Used as a human-readable identifier for the ephemeris.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		name: string;

		/**
		 * <p>Customer-provided priority score to establish the order in which overlapping ephemerides should be used.</p> <p>The default for customer-provided ephemeris priority is 1, and higher numbers take precedence.</p> <p>Priority must be 1 or greater</p>
		 * Minimum: 1
		 * Maximum: 99999
		 */
		priority?: number | null;

		/**
		 * AWS Ground Station satellite ID for this ephemeris.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		satelliteId: string;

		/** Tags assigned to an ephemeris. */
		tags?: {[id: string]: string };
	}
	export interface CreateEphemerisPostBodyFormProperties {

		/** <p>Whether to set the ephemeris status to <code>ENABLED</code> after validation.</p> <p>Setting this to false will set the ephemeris status to <code>DISABLED</code> after validation.</p> */
		enabled: FormControl<boolean | null | undefined>,

		/** An overall expiration time for the ephemeris in UTC, after which it will become <code>EXPIRED</code>. */
		expirationTime: FormControl<Date | null | undefined>,

		/** The ARN of a KMS key used to encrypt the ephemeris in Ground Station. */
		kmsKeyArn: FormControl<string | null | undefined>,

		/**
		 * A name string associated with the ephemeris. Used as a human-readable identifier for the ephemeris.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * <p>Customer-provided priority score to establish the order in which overlapping ephemerides should be used.</p> <p>The default for customer-provided ephemeris priority is 1, and higher numbers take precedence.</p> <p>Priority must be 1 or greater</p>
		 * Minimum: 1
		 * Maximum: 99999
		 */
		priority: FormControl<number | null | undefined>,

		/**
		 * AWS Ground Station satellite ID for this ephemeris.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		satelliteId: FormControl<string | null | undefined>,

		/** Tags assigned to an ephemeris. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateEphemerisPostBodyFormGroup() {
		return new FormGroup<CreateEphemerisPostBodyFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined),
			expirationTime: new FormControl<Date | null | undefined>(undefined),
			kmsKeyArn: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256), Validators.pattern('^[ a-zA-Z0-9_:-]{1,256}$')]),
			priority: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(99999)]),
			satelliteId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128), Validators.pattern('^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$')]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateEphemerisPostBodyEphemeris {

		/** Ephemeris data in Orbit Ephemeris Message (OEM) format. */
		oem?: OEMEphemeris;

		/** Two-line element set (TLE) ephemeris. */
		tle?: TLEEphemeris;
	}
	export interface CreateEphemerisPostBodyEphemerisFormProperties {
	}
	export function CreateCreateEphemerisPostBodyEphemerisFormGroup() {
		return new FormGroup<CreateEphemerisPostBodyEphemerisFormProperties>({
		});

	}

	export interface CreateMissionProfilePostBody {

		/**
		 * Amount of time after a contact ends that you’d like to receive a CloudWatch event indicating the pass has finished.
		 * Minimum: 0
		 * Maximum: 21600
		 */
		contactPostPassDurationSeconds?: number | null;

		/**
		 * Amount of time prior to contact start you’d like to receive a CloudWatch event indicating an upcoming pass.
		 * Minimum: 0
		 * Maximum: 21600
		 */
		contactPrePassDurationSeconds?: number | null;

		/**
		 * A list of lists of ARNs. Each list of ARNs is an edge, with a <i>from</i> <code>Config</code> and a <i>to</i> <code>Config</code>.
		 * Required
		 * Minimum items: 0
		 * Maximum items: 500
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

		/** AWS Key Management Service (KMS) Key. */
		streamsKmsKey?: CreateMissionProfilePostBodyStreamsKmsKey;

		/** Role to use for encrypting streams with KMS key. */
		streamsKmsRole?: string | null;

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
		 * Minimum: 0
		 * Maximum: 21600
		 */
		contactPostPassDurationSeconds: FormControl<number | null | undefined>,

		/**
		 * Amount of time prior to contact start you’d like to receive a CloudWatch event indicating an upcoming pass.
		 * Minimum: 0
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

		/** Role to use for encrypting streams with KMS key. */
		streamsKmsRole: FormControl<string | null | undefined>,

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
			contactPostPassDurationSeconds: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(21600)]),
			contactPrePassDurationSeconds: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(21600)]),
			minimumViableContactDurationSeconds: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(1), Validators.max(21600)]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256), Validators.pattern('^[ a-zA-Z0-9_:-]{1,256}$')]),
			streamsKmsRole: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			trackingConfigArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateMissionProfilePostBodyStreamsKmsKey {
		kmsAliasArn?: string;
		kmsKeyArn?: string;
	}
	export interface CreateMissionProfilePostBodyStreamsKmsKeyFormProperties {
		kmsAliasArn: FormControl<string | null | undefined>,
		kmsKeyArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateMissionProfilePostBodyStreamsKmsKeyFormGroup() {
		return new FormGroup<CreateMissionProfilePostBodyStreamsKmsKeyFormProperties>({
			kmsAliasArn: new FormControl<string | null | undefined>(undefined),
			kmsKeyArn: new FormControl<string | null | undefined>(undefined),
		});

	}

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
		antennaDownlinkConfig?: AntennaDownlinkConfig;
		antennaDownlinkDemodDecodeConfig?: AntennaDownlinkDemodDecodeConfig;
		antennaUplinkConfig?: AntennaUplinkConfig;
		dataflowEndpointConfig?: DataflowEndpointConfig;
		s3RecordingConfig?: S3RecordingConfig;
		trackingConfig?: TrackingConfig;
		uplinkEchoConfig?: UplinkEchoConfig;
	}
	export interface UpdateConfigPutBodyConfigDataFormProperties {
	}
	export function CreateUpdateConfigPutBodyConfigDataFormGroup() {
		return new FormGroup<UpdateConfigPutBodyConfigDataFormProperties>({
		});

	}

	export interface UpdateEphemerisPutBody {

		/**
		 * Whether the ephemeris is enabled or not. Changing this value will not require the ephemeris to be re-validated.
		 * Required
		 */
		enabled: boolean;

		/**
		 * A name string associated with the ephemeris. Used as a human-readable identifier for the ephemeris.
		 * Max length: 256
		 * Min length: 1
		 */
		name?: string | null;

		/**
		 * <p>Customer-provided priority score to establish the order in which overlapping ephemerides should be used.</p> <p>The default for customer-provided ephemeris priority is 1, and higher numbers take precedence.</p> <p>Priority must be 1 or greater</p>
		 * Minimum: 0
		 * Maximum: 99999
		 */
		priority?: number | null;
	}
	export interface UpdateEphemerisPutBodyFormProperties {

		/**
		 * Whether the ephemeris is enabled or not. Changing this value will not require the ephemeris to be re-validated.
		 * Required
		 */
		enabled: FormControl<boolean | null | undefined>,

		/**
		 * A name string associated with the ephemeris. Used as a human-readable identifier for the ephemeris.
		 * Max length: 256
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * <p>Customer-provided priority score to establish the order in which overlapping ephemerides should be used.</p> <p>The default for customer-provided ephemeris priority is 1, and higher numbers take precedence.</p> <p>Priority must be 1 or greater</p>
		 * Minimum: 0
		 * Maximum: 99999
		 */
		priority: FormControl<number | null | undefined>,
	}
	export function CreateUpdateEphemerisPutBodyFormGroup() {
		return new FormGroup<UpdateEphemerisPutBodyFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256), Validators.pattern('^[ a-zA-Z0-9_:-]{1,256}$')]),
			priority: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(99999)]),
		});

	}

	export interface UpdateMissionProfilePutBody {

		/**
		 * Amount of time after a contact ends that you’d like to receive a CloudWatch event indicating the pass has finished.
		 * Minimum: 0
		 * Maximum: 21600
		 */
		contactPostPassDurationSeconds?: number | null;

		/**
		 * Amount of time after a contact ends that you’d like to receive a CloudWatch event indicating the pass has finished.
		 * Minimum: 0
		 * Maximum: 21600
		 */
		contactPrePassDurationSeconds?: number | null;

		/**
		 * A list of lists of ARNs. Each list of ARNs is an edge, with a <i>from</i> <code>Config</code> and a <i>to</i> <code>Config</code>.
		 * Minimum items: 0
		 * Maximum items: 500
		 */
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

		/** AWS Key Management Service (KMS) Key. */
		streamsKmsKey?: UpdateMissionProfilePutBodyStreamsKmsKey;

		/** Role to use for encrypting streams with KMS key. */
		streamsKmsRole?: string | null;

		/** ARN of a tracking <code>Config</code>. */
		trackingConfigArn?: string | null;
	}
	export interface UpdateMissionProfilePutBodyFormProperties {

		/**
		 * Amount of time after a contact ends that you’d like to receive a CloudWatch event indicating the pass has finished.
		 * Minimum: 0
		 * Maximum: 21600
		 */
		contactPostPassDurationSeconds: FormControl<number | null | undefined>,

		/**
		 * Amount of time after a contact ends that you’d like to receive a CloudWatch event indicating the pass has finished.
		 * Minimum: 0
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

		/** Role to use for encrypting streams with KMS key. */
		streamsKmsRole: FormControl<string | null | undefined>,

		/** ARN of a tracking <code>Config</code>. */
		trackingConfigArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateMissionProfilePutBodyFormGroup() {
		return new FormGroup<UpdateMissionProfilePutBodyFormProperties>({
			contactPostPassDurationSeconds: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(21600)]),
			contactPrePassDurationSeconds: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(21600)]),
			minimumViableContactDurationSeconds: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(21600)]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256), Validators.pattern('^[ a-zA-Z0-9_:-]{1,256}$')]),
			streamsKmsRole: new FormControl<string | null | undefined>(undefined),
			trackingConfigArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateMissionProfilePutBodyStreamsKmsKey {
		kmsAliasArn?: string;
		kmsKeyArn?: string;
	}
	export interface UpdateMissionProfilePutBodyStreamsKmsKeyFormProperties {
		kmsAliasArn: FormControl<string | null | undefined>,
		kmsKeyArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateMissionProfilePutBodyStreamsKmsKeyFormGroup() {
		return new FormGroup<UpdateMissionProfilePutBodyStreamsKmsKeyFormProperties>({
			kmsAliasArn: new FormControl<string | null | undefined>(undefined),
			kmsKeyArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetMinuteUsagePostBody {

		/**
		 * The month being requested, with a value of 1-12.
		 * Required
		 * Minimum: 1
		 * Maximum: 12
		 */
		month: number;

		/**
		 * The year being requested, in the format of YYYY.
		 * Required
		 * Minimum: 2018
		 * Maximum: 3000
		 */
		year: number;
	}
	export interface GetMinuteUsagePostBodyFormProperties {

		/**
		 * The month being requested, with a value of 1-12.
		 * Required
		 * Minimum: 1
		 * Maximum: 12
		 */
		month: FormControl<number | null | undefined>,

		/**
		 * The year being requested, in the format of YYYY.
		 * Required
		 * Minimum: 2018
		 * Maximum: 3000
		 */
		year: FormControl<number | null | undefined>,
	}
	export function CreateGetMinuteUsagePostBodyFormGroup() {
		return new FormGroup<GetMinuteUsagePostBodyFormProperties>({
			month: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(1), Validators.max(12)]),
			year: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(2018), Validators.max(3000)]),
		});

	}

	export interface ListContactsPostBody {

		/**
		 * End time of a contact in UTC.
		 * Required
		 */
		endTime: Date;

		/**
		 * Name of a ground station.
		 * Max length: 500
		 * Min length: 4
		 */
		groundStation?: string | null;

		/**
		 * Maximum number of contacts returned.
		 * Minimum: 0
		 * Maximum: 100
		 */
		maxResults?: number | null;

		/** ARN of a mission profile. */
		missionProfileArn?: string | null;

		/**
		 * Next token returned in the request of a previous <code>ListContacts</code> call. Used to get the next page of results.
		 * Max length: 1000
		 * Min length: 3
		 */
		nextToken?: string | null;

		/** ARN of a satellite. */
		satelliteArn?: string | null;

		/**
		 * Start time of a contact in UTC.
		 * Required
		 */
		startTime: Date;

		/**
		 * Status of a contact reservation.
		 * Required
		 * Minimum items: 0
		 * Maximum items: 500
		 */
		statusList: Array<ContactStatus>;
	}
	export interface ListContactsPostBodyFormProperties {

		/**
		 * End time of a contact in UTC.
		 * Required
		 */
		endTime: FormControl<Date | null | undefined>,

		/**
		 * Name of a ground station.
		 * Max length: 500
		 * Min length: 4
		 */
		groundStation: FormControl<string | null | undefined>,

		/**
		 * Maximum number of contacts returned.
		 * Minimum: 0
		 * Maximum: 100
		 */
		maxResults: FormControl<number | null | undefined>,

		/** ARN of a mission profile. */
		missionProfileArn: FormControl<string | null | undefined>,

		/**
		 * Next token returned in the request of a previous <code>ListContacts</code> call. Used to get the next page of results.
		 * Max length: 1000
		 * Min length: 3
		 */
		nextToken: FormControl<string | null | undefined>,

		/** ARN of a satellite. */
		satelliteArn: FormControl<string | null | undefined>,

		/**
		 * Start time of a contact in UTC.
		 * Required
		 */
		startTime: FormControl<Date | null | undefined>,
	}
	export function CreateListContactsPostBodyFormGroup() {
		return new FormGroup<ListContactsPostBodyFormProperties>({
			endTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			groundStation: new FormControl<string | null | undefined>(undefined, [Validators.minLength(4), Validators.maxLength(500), Validators.pattern('^[ a-zA-Z0-9-._:=]{4,256}$')]),
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(100)]),
			missionProfileArn: new FormControl<string | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(3), Validators.maxLength(1000), Validators.pattern('^[A-Za-z0-9-/+_.=]+$')]),
			satelliteArn: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListEphemeridesPostBody {

		/**
		 * The end time to list in UTC. The operation will return an ephemeris if its expiration time is within the time range defined by the <code>startTime</code> and <code>endTime</code>.
		 * Required
		 */
		endTime: Date;

		/**
		 * The AWS Ground Station satellite ID to list ephemeris for.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		satelliteId: string;

		/**
		 * The start time to list in UTC. The operation will return an ephemeris if its expiration time is within the time range defined by the <code>startTime</code> and <code>endTime</code>.
		 * Required
		 */
		startTime: Date;

		/**
		 * The list of ephemeris status to return.
		 * Minimum items: 0
		 * Maximum items: 500
		 */
		statusList?: Array<EphemerisStatus>;
	}
	export interface ListEphemeridesPostBodyFormProperties {

		/**
		 * The end time to list in UTC. The operation will return an ephemeris if its expiration time is within the time range defined by the <code>startTime</code> and <code>endTime</code>.
		 * Required
		 */
		endTime: FormControl<Date | null | undefined>,

		/**
		 * The AWS Ground Station satellite ID to list ephemeris for.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		satelliteId: FormControl<string | null | undefined>,

		/**
		 * The start time to list in UTC. The operation will return an ephemeris if its expiration time is within the time range defined by the <code>startTime</code> and <code>endTime</code>.
		 * Required
		 */
		startTime: FormControl<Date | null | undefined>,
	}
	export function CreateListEphemeridesPostBodyFormGroup() {
		return new FormGroup<ListEphemeridesPostBodyFormProperties>({
			endTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			satelliteId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128), Validators.pattern('^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$')]),
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

	export interface RegisterAgentPostBody {

		/**
		 * Detailed information about the agent.
		 * Required
		 */
		agentDetails: RegisterAgentPostBodyAgentDetails;

		/**
		 * Data for agent discovery.
		 * Required
		 */
		discoveryData: RegisterAgentPostBodyDiscoveryData;
	}
	export interface RegisterAgentPostBodyFormProperties {
	}
	export function CreateRegisterAgentPostBodyFormGroup() {
		return new FormGroup<RegisterAgentPostBodyFormProperties>({
		});

	}

	export interface RegisterAgentPostBodyAgentDetails {
		agentCpuCores?: Array<number> | null;
		agentVersion?: string;
		componentVersions?: Array<ComponentVersion>;
		instanceId?: string;
		instanceType?: string;
		reservedCpuCores?: Array<number> | null;
	}
	export interface RegisterAgentPostBodyAgentDetailsFormProperties {
		agentVersion: FormControl<string | null | undefined>,
		instanceId: FormControl<string | null | undefined>,
		instanceType: FormControl<string | null | undefined>,
	}
	export function CreateRegisterAgentPostBodyAgentDetailsFormGroup() {
		return new FormGroup<RegisterAgentPostBodyAgentDetailsFormProperties>({
			agentVersion: new FormControl<string | null | undefined>(undefined),
			instanceId: new FormControl<string | null | undefined>(undefined),
			instanceType: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RegisterAgentPostBodyDiscoveryData {
		capabilityArns?: Array<string>;
		privateIpAddresses?: Array<string>;
		publicIpAddresses?: Array<string>;
	}
	export interface RegisterAgentPostBodyDiscoveryDataFormProperties {
	}
	export function CreateRegisterAgentPostBodyDiscoveryDataFormGroup() {
		return new FormGroup<RegisterAgentPostBodyDiscoveryDataFormProperties>({
		});

	}

	export interface ReserveContactPostBody {

		/**
		 * End time of a contact in UTC.
		 * Required
		 */
		endTime: Date;

		/**
		 * Name of a ground station.
		 * Required
		 * Max length: 500
		 * Min length: 4
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
		 * Start time of a contact in UTC.
		 * Required
		 */
		startTime: Date;

		/** Tags assigned to a contact. */
		tags?: {[id: string]: string };
	}
	export interface ReserveContactPostBodyFormProperties {

		/**
		 * End time of a contact in UTC.
		 * Required
		 */
		endTime: FormControl<Date | null | undefined>,

		/**
		 * Name of a ground station.
		 * Required
		 * Max length: 500
		 * Min length: 4
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
		 * Start time of a contact in UTC.
		 * Required
		 */
		startTime: FormControl<Date | null | undefined>,

		/** Tags assigned to a contact. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateReserveContactPostBodyFormGroup() {
		return new FormGroup<ReserveContactPostBodyFormProperties>({
			endTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			groundStation: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(4), Validators.maxLength(500), Validators.pattern('^[ a-zA-Z0-9-._:=]{4,256}$')]),
			missionProfileArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			satelliteArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			startTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface UpdateAgentStatusPutBody {

		/**
		 * Aggregate status of Agent components.
		 * Required
		 */
		aggregateStatus: UpdateAgentStatusPutBodyAggregateStatus;

		/**
		 * List of component statuses for agent.
		 * Required
		 * Minimum items: 0
		 * Maximum items: 20
		 */
		componentStatuses: Array<ComponentStatusData>;

		/**
		 * GUID of agent task.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		taskId: string;
	}
	export interface UpdateAgentStatusPutBodyFormProperties {

		/**
		 * GUID of agent task.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		taskId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateAgentStatusPutBodyFormGroup() {
		return new FormGroup<UpdateAgentStatusPutBodyFormProperties>({
			taskId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128), Validators.pattern('^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$')]),
		});

	}

	export interface UpdateAgentStatusPutBodyAggregateStatus {
		signatureMap?: SignatureMap;
		status?: AgentStatus;
	}
	export interface UpdateAgentStatusPutBodyAggregateStatusFormProperties {
		status: FormControl<AgentStatus | null | undefined>,
	}
	export function CreateUpdateAgentStatusPutBodyAggregateStatusFormGroup() {
		return new FormGroup<UpdateAgentStatusPutBodyAggregateStatusFormProperties>({
			status: new FormControl<AgentStatus | null | undefined>(undefined),
		});

	}

}

