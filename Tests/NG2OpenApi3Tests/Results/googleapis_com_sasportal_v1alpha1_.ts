import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Associates `members` with a `role`. */
	export interface SasPortalAssignment {

		/** The identities the role is assigned to. It can have the following values: * `{user_email}`: An email address that represents a specific Google account. For example: `alice@gmail.com`. * `{group_email}`: An email address that represents a Google group. For example, `viewers@gmail.com`. */
		members?: Array<string>;

		/** Required. Role that is assigned to `members`. */
		role?: string | null;
	}

	/** Associates `members` with a `role`. */
	export interface SasPortalAssignmentFormProperties {

		/** Required. Role that is assigned to `members`. */
		role: FormControl<string | null | undefined>,
	}
	export function CreateSasPortalAssignmentFormGroup() {
		return new FormGroup<SasPortalAssignmentFormProperties>({
			role: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The channel with score. */
	export interface SasPortalChannelWithScore {

		/** Frequency range from `low_frequency` to `high_frequency`. */
		frequencyRange?: SasPortalFrequencyRange;

		/** The channel score, normalized to be in the range [0,100]. */
		score?: number | null;
	}

	/** The channel with score. */
	export interface SasPortalChannelWithScoreFormProperties {

		/** The channel score, normalized to be in the range [0,100]. */
		score: FormControl<number | null | undefined>,
	}
	export function CreateSasPortalChannelWithScoreFormGroup() {
		return new FormGroup<SasPortalChannelWithScoreFormProperties>({
			score: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Frequency range from `low_frequency` to `high_frequency`. */
	export interface SasPortalFrequencyRange {

		/** The highest frequency of the frequency range in MHz. */
		highFrequencyMhz?: number | null;

		/** The lowest frequency of the frequency range in MHz. */
		lowFrequencyMhz?: number | null;
	}

	/** Frequency range from `low_frequency` to `high_frequency`. */
	export interface SasPortalFrequencyRangeFormProperties {

		/** The highest frequency of the frequency range in MHz. */
		highFrequencyMhz: FormControl<number | null | undefined>,

		/** The lowest frequency of the frequency range in MHz. */
		lowFrequencyMhz: FormControl<number | null | undefined>,
	}
	export function CreateSasPortalFrequencyRangeFormGroup() {
		return new FormGroup<SasPortalFrequencyRangeFormProperties>({
			highFrequencyMhz: new FormControl<number | null | undefined>(undefined),
			lowFrequencyMhz: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Response for [CheckHasProvisionedDeployment]. [spectrum.sas.portal.v1alpha1.Provisioning.CheckHasProvisionedDeployment]. */
	export interface SasPortalCheckHasProvisionedDeploymentResponse {

		/** Whether a SAS deployment for the authentication context exists. */
		hasProvisionedDeployment?: boolean | null;
	}

	/** Response for [CheckHasProvisionedDeployment]. [spectrum.sas.portal.v1alpha1.Provisioning.CheckHasProvisionedDeployment]. */
	export interface SasPortalCheckHasProvisionedDeploymentResponseFormProperties {

		/** Whether a SAS deployment for the authentication context exists. */
		hasProvisionedDeployment: FormControl<boolean | null | undefined>,
	}
	export function CreateSasPortalCheckHasProvisionedDeploymentResponseFormGroup() {
		return new FormGroup<SasPortalCheckHasProvisionedDeploymentResponseFormProperties>({
			hasProvisionedDeployment: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Request for CreateSignedDevice. */
	export interface SasPortalCreateSignedDeviceRequest {

		/** Required. JSON Web Token signed using a CPI private key. Payload must be the JSON encoding of the device. The user_id field must be set. */
		encodedDevice?: string | null;

		/** Required. Unique installer id (CPI ID) from the Certified Professional Installers database. */
		installerId?: string | null;
	}

	/** Request for CreateSignedDevice. */
	export interface SasPortalCreateSignedDeviceRequestFormProperties {

		/** Required. JSON Web Token signed using a CPI private key. Payload must be the JSON encoding of the device. The user_id field must be set. */
		encodedDevice: FormControl<string | null | undefined>,

		/** Required. Unique installer id (CPI ID) from the Certified Professional Installers database. */
		installerId: FormControl<string | null | undefined>,
	}
	export function CreateSasPortalCreateSignedDeviceRequestFormGroup() {
		return new FormGroup<SasPortalCreateSignedDeviceRequestFormProperties>({
			encodedDevice: new FormControl<string | null | undefined>(undefined),
			installerId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Entity representing a SAS customer. */
	export interface SasPortalCustomer {

		/** Required. Name of the organization that the customer entity represents. */
		displayName?: string | null;

		/** Output only. Resource name of the customer. */
		name?: string | null;

		/** User IDs used by the devices belonging to this customer. */
		sasUserIds?: Array<string>;
	}

	/** Entity representing a SAS customer. */
	export interface SasPortalCustomerFormProperties {

		/** Required. Name of the organization that the customer entity represents. */
		displayName: FormControl<string | null | undefined>,

		/** Output only. Resource name of the customer. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateSasPortalCustomerFormGroup() {
		return new FormGroup<SasPortalCustomerFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The Deployment. */
	export interface SasPortalDeployment {

		/** The deployment's display name. */
		displayName?: string | null;

		/** Output only. The FCC Registration Numbers (FRNs) copied from its direct parent. */
		frns?: Array<string>;

		/** Output only. Resource name. */
		name?: string | null;

		/** User ID used by the devices belonging to this deployment. Each deployment should be associated with one unique user ID. */
		sasUserIds?: Array<string>;
	}

	/** The Deployment. */
	export interface SasPortalDeploymentFormProperties {

		/** The deployment's display name. */
		displayName: FormControl<string | null | undefined>,

		/** Output only. Resource name. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateSasPortalDeploymentFormGroup() {
		return new FormGroup<SasPortalDeploymentFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Association between a gcp project and a SAS user id. */
	export interface SasPortalDeploymentAssociation {

		/** GCP project id of the associated project. */
		gcpProjectId?: string | null;

		/** User id of the deployment. */
		userId?: string | null;
	}

	/** Association between a gcp project and a SAS user id. */
	export interface SasPortalDeploymentAssociationFormProperties {

		/** GCP project id of the associated project. */
		gcpProjectId: FormControl<string | null | undefined>,

		/** User id of the deployment. */
		userId: FormControl<string | null | undefined>,
	}
	export function CreateSasPortalDeploymentAssociationFormGroup() {
		return new FormGroup<SasPortalDeploymentAssociationFormProperties>({
			gcpProjectId: new FormControl<string | null | undefined>(undefined),
			userId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SasPortalDevice {

		/** Information about the device configuration. */
		activeConfig?: SasPortalDeviceConfig;

		/** Output only. Current channels with scores. */
		currentChannels?: Array<SasPortalChannelWithScore>;

		/** Device data overridable by both SAS Portal and registration requests. */
		deviceMetadata?: SasPortalDeviceMetadata;

		/** Device display name. */
		displayName?: string | null;

		/** The FCC identifier of the device. Refer to https://www.fcc.gov/oet/ea/fccid for FccID format. */
		fccId?: string | null;

		/** Only ranges that are within the allowlists are available for new grants. */
		grantRangeAllowlists?: Array<SasPortalFrequencyRange>;

		/** Output only. Grants held by the device. */
		grants?: Array<SasPortalDeviceGrant>;

		/** Output only. The resource path name. */
		name?: string | null;

		/** Information about the device configuration. */
		preloadedConfig?: SasPortalDeviceConfig;

		/** A serial number assigned to the device by the device manufacturer. */
		serialNumber?: string | null;

		/** Output only. Device state. */
		state?: SasPortalDeviceState | null;
	}
	export interface SasPortalDeviceFormProperties {

		/** Device display name. */
		displayName: FormControl<string | null | undefined>,

		/** The FCC identifier of the device. Refer to https://www.fcc.gov/oet/ea/fccid for FccID format. */
		fccId: FormControl<string | null | undefined>,

		/** Output only. The resource path name. */
		name: FormControl<string | null | undefined>,

		/** A serial number assigned to the device by the device manufacturer. */
		serialNumber: FormControl<string | null | undefined>,

		/** Output only. Device state. */
		state: FormControl<SasPortalDeviceState | null | undefined>,
	}
	export function CreateSasPortalDeviceFormGroup() {
		return new FormGroup<SasPortalDeviceFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			fccId: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			serialNumber: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<SasPortalDeviceState | null | undefined>(undefined),
		});

	}


	/** Information about the device configuration. */
	export interface SasPortalDeviceConfig {

		/** Information about the device's air interface. */
		airInterface?: SasPortalDeviceAirInterface;

		/** The call sign of the device operator. */
		callSign?: string | null;

		/** FCC category of the device. */
		category?: SasPortalDeviceConfigCategory | null;

		/** Information about the device installation parameters. */
		installationParams?: SasPortalInstallationParams;

		/** Output only. Whether the configuration has been signed by a CPI. */
		isSigned?: boolean | null;

		/** Measurement reporting capabilities of the device. */
		measurementCapabilities?: Array<string>;

		/** Information about the model of the device. */
		model?: SasPortalDeviceModel;

		/** State of the configuration. */
		state?: SasPortalDeviceConfigState | null;

		/** Output only. The last time the device configuration was edited. */
		updateTime?: string | null;

		/** The identifier of a device user. */
		userId?: string | null;
	}

	/** Information about the device configuration. */
	export interface SasPortalDeviceConfigFormProperties {

		/** The call sign of the device operator. */
		callSign: FormControl<string | null | undefined>,

		/** FCC category of the device. */
		category: FormControl<SasPortalDeviceConfigCategory | null | undefined>,

		/** Output only. Whether the configuration has been signed by a CPI. */
		isSigned: FormControl<boolean | null | undefined>,

		/** State of the configuration. */
		state: FormControl<SasPortalDeviceConfigState | null | undefined>,

		/** Output only. The last time the device configuration was edited. */
		updateTime: FormControl<string | null | undefined>,

		/** The identifier of a device user. */
		userId: FormControl<string | null | undefined>,
	}
	export function CreateSasPortalDeviceConfigFormGroup() {
		return new FormGroup<SasPortalDeviceConfigFormProperties>({
			callSign: new FormControl<string | null | undefined>(undefined),
			category: new FormControl<SasPortalDeviceConfigCategory | null | undefined>(undefined),
			isSigned: new FormControl<boolean | null | undefined>(undefined),
			state: new FormControl<SasPortalDeviceConfigState | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
			userId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about the device's air interface. */
	export interface SasPortalDeviceAirInterface {

		/** Conditional. This field specifies the radio access technology that is used for the CBSD. */
		radioTechnology?: SasPortalDeviceAirInterfaceRadioTechnology | null;

		/** Optional. This field is related to the `radioTechnology` and provides the air interface specification that the CBSD is compliant with at the time of registration. */
		supportedSpec?: string | null;
	}

	/** Information about the device's air interface. */
	export interface SasPortalDeviceAirInterfaceFormProperties {

		/** Conditional. This field specifies the radio access technology that is used for the CBSD. */
		radioTechnology: FormControl<SasPortalDeviceAirInterfaceRadioTechnology | null | undefined>,

		/** Optional. This field is related to the `radioTechnology` and provides the air interface specification that the CBSD is compliant with at the time of registration. */
		supportedSpec: FormControl<string | null | undefined>,
	}
	export function CreateSasPortalDeviceAirInterfaceFormGroup() {
		return new FormGroup<SasPortalDeviceAirInterfaceFormProperties>({
			radioTechnology: new FormControl<SasPortalDeviceAirInterfaceRadioTechnology | null | undefined>(undefined),
			supportedSpec: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum SasPortalDeviceAirInterfaceRadioTechnology { RADIO_TECHNOLOGY_UNSPECIFIED = 'RADIO_TECHNOLOGY_UNSPECIFIED', E_UTRA = 'E_UTRA', CAMBIUM_NETWORKS = 'CAMBIUM_NETWORKS', FOUR_G_BBW_SAA_1 = 'FOUR_G_BBW_SAA_1', NR = 'NR', DOODLE_CBRS = 'DOODLE_CBRS', CW = 'CW', REDLINE = 'REDLINE', TARANA_WIRELESS = 'TARANA_WIRELESS' }

	export enum SasPortalDeviceConfigCategory { DEVICE_CATEGORY_UNSPECIFIED = 'DEVICE_CATEGORY_UNSPECIFIED', DEVICE_CATEGORY_A = 'DEVICE_CATEGORY_A', DEVICE_CATEGORY_B = 'DEVICE_CATEGORY_B' }


	/** Information about the device installation parameters. */
	export interface SasPortalInstallationParams {

		/** Boresight direction of the horizontal plane of the antenna in degrees with respect to true north. The value of this parameter is an integer with a value between 0 and 359 inclusive. A value of 0 degrees means true north; a value of 90 degrees means east. This parameter is optional for Category A devices and conditional for Category B devices. */
		antennaAzimuth?: number | null;

		/** 3-dB antenna beamwidth of the antenna in the horizontal-plane in degrees. This parameter is an unsigned integer having a value between 0 and 360 (degrees) inclusive; it is optional for Category A devices and conditional for Category B devices. */
		antennaBeamwidth?: number | null;

		/** Antenna downtilt in degrees and is an integer with a value between -90 and +90 inclusive; a negative value means the antenna is tilted up (above horizontal). This parameter is optional for Category A devices and conditional for Category B devices. */
		antennaDowntilt?: number | null;

		/** Peak antenna gain in dBi. This parameter is an integer with a value between -127 and +128 (dBi) inclusive. */
		antennaGain?: number | null;

		/** If an external antenna is used, the antenna model is optionally provided in this field. The string has a maximum length of 128 octets. */
		antennaModel?: string | null;

		/** If present, this parameter specifies whether the CBSD is a CPE-CBSD or not. */
		cpeCbsdIndication?: boolean | null;

		/** This parameter is the maximum device EIRP in units of dBm/10MHz and is an integer with a value between -127 and +47 (dBm/10 MHz) inclusive. If not included, SAS interprets it as maximum allowable EIRP in units of dBm/10MHz for device category. */
		eirpCapability?: number | null;

		/** Device antenna height in meters. When the `heightType` parameter value is "AGL", the antenna height should be given relative to ground level. When the `heightType` parameter value is "AMSL", it is given with respect to WGS84 datum. */
		height?: number | null;

		/** Specifies how the height is measured. */
		heightType?: SasPortalInstallationParamsHeightType | null;

		/** A positive number in meters to indicate accuracy of the device antenna horizontal location. This optional parameter should only be present if its value is less than the FCC requirement of 50 meters. */
		horizontalAccuracy?: number | null;

		/** Whether the device antenna is indoor or not. `true`: indoor. `false`: outdoor. */
		indoorDeployment?: boolean | null;

		/** Latitude of the device antenna location in degrees relative to the WGS 84 datum. The allowed range is from -90.000000 to +90.000000. Positive values represent latitudes north of the equator; negative values south of the equator. */
		latitude?: number | null;

		/** Longitude of the device antenna location in degrees relative to the WGS 84 datum. The allowed range is from -180.000000 to +180.000000. Positive values represent longitudes east of the prime meridian; negative values west of the prime meridian. */
		longitude?: number | null;

		/** A positive number in meters to indicate accuracy of the device antenna vertical location. This optional parameter should only be present if its value is less than the FCC requirement of 3 meters. */
		verticalAccuracy?: number | null;
	}

	/** Information about the device installation parameters. */
	export interface SasPortalInstallationParamsFormProperties {

		/** Boresight direction of the horizontal plane of the antenna in degrees with respect to true north. The value of this parameter is an integer with a value between 0 and 359 inclusive. A value of 0 degrees means true north; a value of 90 degrees means east. This parameter is optional for Category A devices and conditional for Category B devices. */
		antennaAzimuth: FormControl<number | null | undefined>,

		/** 3-dB antenna beamwidth of the antenna in the horizontal-plane in degrees. This parameter is an unsigned integer having a value between 0 and 360 (degrees) inclusive; it is optional for Category A devices and conditional for Category B devices. */
		antennaBeamwidth: FormControl<number | null | undefined>,

		/** Antenna downtilt in degrees and is an integer with a value between -90 and +90 inclusive; a negative value means the antenna is tilted up (above horizontal). This parameter is optional for Category A devices and conditional for Category B devices. */
		antennaDowntilt: FormControl<number | null | undefined>,

		/** Peak antenna gain in dBi. This parameter is an integer with a value between -127 and +128 (dBi) inclusive. */
		antennaGain: FormControl<number | null | undefined>,

		/** If an external antenna is used, the antenna model is optionally provided in this field. The string has a maximum length of 128 octets. */
		antennaModel: FormControl<string | null | undefined>,

		/** If present, this parameter specifies whether the CBSD is a CPE-CBSD or not. */
		cpeCbsdIndication: FormControl<boolean | null | undefined>,

		/** This parameter is the maximum device EIRP in units of dBm/10MHz and is an integer with a value between -127 and +47 (dBm/10 MHz) inclusive. If not included, SAS interprets it as maximum allowable EIRP in units of dBm/10MHz for device category. */
		eirpCapability: FormControl<number | null | undefined>,

		/** Device antenna height in meters. When the `heightType` parameter value is "AGL", the antenna height should be given relative to ground level. When the `heightType` parameter value is "AMSL", it is given with respect to WGS84 datum. */
		height: FormControl<number | null | undefined>,

		/** Specifies how the height is measured. */
		heightType: FormControl<SasPortalInstallationParamsHeightType | null | undefined>,

		/** A positive number in meters to indicate accuracy of the device antenna horizontal location. This optional parameter should only be present if its value is less than the FCC requirement of 50 meters. */
		horizontalAccuracy: FormControl<number | null | undefined>,

		/** Whether the device antenna is indoor or not. `true`: indoor. `false`: outdoor. */
		indoorDeployment: FormControl<boolean | null | undefined>,

		/** Latitude of the device antenna location in degrees relative to the WGS 84 datum. The allowed range is from -90.000000 to +90.000000. Positive values represent latitudes north of the equator; negative values south of the equator. */
		latitude: FormControl<number | null | undefined>,

		/** Longitude of the device antenna location in degrees relative to the WGS 84 datum. The allowed range is from -180.000000 to +180.000000. Positive values represent longitudes east of the prime meridian; negative values west of the prime meridian. */
		longitude: FormControl<number | null | undefined>,

		/** A positive number in meters to indicate accuracy of the device antenna vertical location. This optional parameter should only be present if its value is less than the FCC requirement of 3 meters. */
		verticalAccuracy: FormControl<number | null | undefined>,
	}
	export function CreateSasPortalInstallationParamsFormGroup() {
		return new FormGroup<SasPortalInstallationParamsFormProperties>({
			antennaAzimuth: new FormControl<number | null | undefined>(undefined),
			antennaBeamwidth: new FormControl<number | null | undefined>(undefined),
			antennaDowntilt: new FormControl<number | null | undefined>(undefined),
			antennaGain: new FormControl<number | null | undefined>(undefined),
			antennaModel: new FormControl<string | null | undefined>(undefined),
			cpeCbsdIndication: new FormControl<boolean | null | undefined>(undefined),
			eirpCapability: new FormControl<number | null | undefined>(undefined),
			height: new FormControl<number | null | undefined>(undefined),
			heightType: new FormControl<SasPortalInstallationParamsHeightType | null | undefined>(undefined),
			horizontalAccuracy: new FormControl<number | null | undefined>(undefined),
			indoorDeployment: new FormControl<boolean | null | undefined>(undefined),
			latitude: new FormControl<number | null | undefined>(undefined),
			longitude: new FormControl<number | null | undefined>(undefined),
			verticalAccuracy: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum SasPortalInstallationParamsHeightType { HEIGHT_TYPE_UNSPECIFIED = 'HEIGHT_TYPE_UNSPECIFIED', HEIGHT_TYPE_AGL = 'HEIGHT_TYPE_AGL', HEIGHT_TYPE_AMSL = 'HEIGHT_TYPE_AMSL' }


	/** Information about the model of the device. */
	export interface SasPortalDeviceModel {

		/** The firmware version of the device. */
		firmwareVersion?: string | null;

		/** The hardware version of the device. */
		hardwareVersion?: string | null;

		/** The name of the device model. */
		name?: string | null;

		/** The software version of the device. */
		softwareVersion?: string | null;

		/** The name of the device vendor. */
		vendor?: string | null;
	}

	/** Information about the model of the device. */
	export interface SasPortalDeviceModelFormProperties {

		/** The firmware version of the device. */
		firmwareVersion: FormControl<string | null | undefined>,

		/** The hardware version of the device. */
		hardwareVersion: FormControl<string | null | undefined>,

		/** The name of the device model. */
		name: FormControl<string | null | undefined>,

		/** The software version of the device. */
		softwareVersion: FormControl<string | null | undefined>,

		/** The name of the device vendor. */
		vendor: FormControl<string | null | undefined>,
	}
	export function CreateSasPortalDeviceModelFormGroup() {
		return new FormGroup<SasPortalDeviceModelFormProperties>({
			firmwareVersion: new FormControl<string | null | undefined>(undefined),
			hardwareVersion: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			softwareVersion: new FormControl<string | null | undefined>(undefined),
			vendor: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum SasPortalDeviceConfigState { DEVICE_CONFIG_STATE_UNSPECIFIED = 'DEVICE_CONFIG_STATE_UNSPECIFIED', DRAFT = 'DRAFT', FINAL = 'FINAL' }


	/** Device data overridable by both SAS Portal and registration requests. */
	export interface SasPortalDeviceMetadata {

		/** If populated, the Antenna Model Pattern to use. Format is: `RecordCreatorId:PatternId` */
		antennaModel?: string | null;

		/** Common Channel Group (CCG). A group of CBSDs in the same ICG requesting a common primary channel assignment. For more details, see [CBRSA-TS-2001 V3.0.0](https://ongoalliance.org/wp-content/uploads/2020/02/CBRSA-TS-2001-V3.0.0_Approved-for-publication.pdf). */
		commonChannelGroup?: string | null;

		/** Interference Coordination Group (ICG). A group of CBSDs that manage their own interference with the group. For more details, see [CBRSA-TS-2001 V3.0.0](https://ongoalliance.org/wp-content/uploads/2020/02/CBRSA-TS-2001-V3.0.0_Approved-for-publication.pdf). */
		interferenceCoordinationGroup?: string | null;

		/** Output only. Set to `true` if a CPI has validated that they have coordinated with the National Quiet Zone office. */
		nrqzValidated?: boolean | null;

		/** Information about National Radio Quiet Zone validation. */
		nrqzValidation?: SasPortalNrqzValidation;
	}

	/** Device data overridable by both SAS Portal and registration requests. */
	export interface SasPortalDeviceMetadataFormProperties {

		/** If populated, the Antenna Model Pattern to use. Format is: `RecordCreatorId:PatternId` */
		antennaModel: FormControl<string | null | undefined>,

		/** Common Channel Group (CCG). A group of CBSDs in the same ICG requesting a common primary channel assignment. For more details, see [CBRSA-TS-2001 V3.0.0](https://ongoalliance.org/wp-content/uploads/2020/02/CBRSA-TS-2001-V3.0.0_Approved-for-publication.pdf). */
		commonChannelGroup: FormControl<string | null | undefined>,

		/** Interference Coordination Group (ICG). A group of CBSDs that manage their own interference with the group. For more details, see [CBRSA-TS-2001 V3.0.0](https://ongoalliance.org/wp-content/uploads/2020/02/CBRSA-TS-2001-V3.0.0_Approved-for-publication.pdf). */
		interferenceCoordinationGroup: FormControl<string | null | undefined>,

		/** Output only. Set to `true` if a CPI has validated that they have coordinated with the National Quiet Zone office. */
		nrqzValidated: FormControl<boolean | null | undefined>,
	}
	export function CreateSasPortalDeviceMetadataFormGroup() {
		return new FormGroup<SasPortalDeviceMetadataFormProperties>({
			antennaModel: new FormControl<string | null | undefined>(undefined),
			commonChannelGroup: new FormControl<string | null | undefined>(undefined),
			interferenceCoordinationGroup: new FormControl<string | null | undefined>(undefined),
			nrqzValidated: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Information about National Radio Quiet Zone validation. */
	export interface SasPortalNrqzValidation {

		/** Validation case ID. */
		caseId?: string | null;

		/** CPI who signed the validation. */
		cpiId?: string | null;

		/** Device latitude that's associated with the validation. */
		latitude?: number | null;

		/** Device longitude that's associated with the validation. */
		longitude?: number | null;

		/** State of the NRQZ validation info. */
		state?: SasPortalNrqzValidationState | null;
	}

	/** Information about National Radio Quiet Zone validation. */
	export interface SasPortalNrqzValidationFormProperties {

		/** Validation case ID. */
		caseId: FormControl<string | null | undefined>,

		/** CPI who signed the validation. */
		cpiId: FormControl<string | null | undefined>,

		/** Device latitude that's associated with the validation. */
		latitude: FormControl<number | null | undefined>,

		/** Device longitude that's associated with the validation. */
		longitude: FormControl<number | null | undefined>,

		/** State of the NRQZ validation info. */
		state: FormControl<SasPortalNrqzValidationState | null | undefined>,
	}
	export function CreateSasPortalNrqzValidationFormGroup() {
		return new FormGroup<SasPortalNrqzValidationFormProperties>({
			caseId: new FormControl<string | null | undefined>(undefined),
			cpiId: new FormControl<string | null | undefined>(undefined),
			latitude: new FormControl<number | null | undefined>(undefined),
			longitude: new FormControl<number | null | undefined>(undefined),
			state: new FormControl<SasPortalNrqzValidationState | null | undefined>(undefined),
		});

	}

	export enum SasPortalNrqzValidationState { STATE_UNSPECIFIED = 'STATE_UNSPECIFIED', DRAFT = 'DRAFT', FINAL = 'FINAL' }


	/** Device grant. It is an authorization provided by the Spectrum Access System to a device to transmit using specified operating parameters after a successful heartbeat by the device. */
	export interface SasPortalDeviceGrant {

		/** Type of channel used. */
		channelType?: SasPortalDeviceGrantChannelType | null;

		/** The expiration time of the grant. */
		expireTime?: string | null;

		/** Frequency range from `low_frequency` to `high_frequency`. */
		frequencyRange?: SasPortalFrequencyRange;

		/** Grant Id. */
		grantId?: string | null;

		/** The transmit expiration time of the last heartbeat. */
		lastHeartbeatTransmitExpireTime?: string | null;

		/** Maximum Equivalent Isotropically Radiated Power (EIRP) permitted by the grant. The maximum EIRP is in units of dBm/MHz. The value of `maxEirp` represents the average (RMS) EIRP that would be measured by the procedure defined in FCC part 96.41(e)(3). */
		maxEirp?: number | null;

		/** The DPA move lists on which this grant appears. */
		moveList?: Array<SasPortalDpaMoveList>;

		/** State of the grant. */
		state?: SasPortalDeviceGrantState | null;

		/** If the grant is suspended, the reason(s) for suspension. */
		suspensionReason?: Array<string>;
	}

	/** Device grant. It is an authorization provided by the Spectrum Access System to a device to transmit using specified operating parameters after a successful heartbeat by the device. */
	export interface SasPortalDeviceGrantFormProperties {

		/** Type of channel used. */
		channelType: FormControl<SasPortalDeviceGrantChannelType | null | undefined>,

		/** The expiration time of the grant. */
		expireTime: FormControl<string | null | undefined>,

		/** Grant Id. */
		grantId: FormControl<string | null | undefined>,

		/** The transmit expiration time of the last heartbeat. */
		lastHeartbeatTransmitExpireTime: FormControl<string | null | undefined>,

		/** Maximum Equivalent Isotropically Radiated Power (EIRP) permitted by the grant. The maximum EIRP is in units of dBm/MHz. The value of `maxEirp` represents the average (RMS) EIRP that would be measured by the procedure defined in FCC part 96.41(e)(3). */
		maxEirp: FormControl<number | null | undefined>,

		/** State of the grant. */
		state: FormControl<SasPortalDeviceGrantState | null | undefined>,
	}
	export function CreateSasPortalDeviceGrantFormGroup() {
		return new FormGroup<SasPortalDeviceGrantFormProperties>({
			channelType: new FormControl<SasPortalDeviceGrantChannelType | null | undefined>(undefined),
			expireTime: new FormControl<string | null | undefined>(undefined),
			grantId: new FormControl<string | null | undefined>(undefined),
			lastHeartbeatTransmitExpireTime: new FormControl<string | null | undefined>(undefined),
			maxEirp: new FormControl<number | null | undefined>(undefined),
			state: new FormControl<SasPortalDeviceGrantState | null | undefined>(undefined),
		});

	}

	export enum SasPortalDeviceGrantChannelType { CHANNEL_TYPE_UNSPECIFIED = 'CHANNEL_TYPE_UNSPECIFIED', CHANNEL_TYPE_GAA = 'CHANNEL_TYPE_GAA', CHANNEL_TYPE_PAL = 'CHANNEL_TYPE_PAL' }


	/** An entry in a DPA's move list. */
	export interface SasPortalDpaMoveList {

		/** The ID of the DPA. */
		dpaId?: string | null;

		/** Frequency range from `low_frequency` to `high_frequency`. */
		frequencyRange?: SasPortalFrequencyRange;
	}

	/** An entry in a DPA's move list. */
	export interface SasPortalDpaMoveListFormProperties {

		/** The ID of the DPA. */
		dpaId: FormControl<string | null | undefined>,
	}
	export function CreateSasPortalDpaMoveListFormGroup() {
		return new FormGroup<SasPortalDpaMoveListFormProperties>({
			dpaId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum SasPortalDeviceGrantState { GRANT_STATE_UNSPECIFIED = 'GRANT_STATE_UNSPECIFIED', GRANT_STATE_GRANTED = 'GRANT_STATE_GRANTED', GRANT_STATE_TERMINATED = 'GRANT_STATE_TERMINATED', GRANT_STATE_SUSPENDED = 'GRANT_STATE_SUSPENDED', GRANT_STATE_AUTHORIZED = 'GRANT_STATE_AUTHORIZED', GRANT_STATE_EXPIRED = 'GRANT_STATE_EXPIRED' }

	export enum SasPortalDeviceState { DEVICE_STATE_UNSPECIFIED = 'DEVICE_STATE_UNSPECIFIED', RESERVED = 'RESERVED', REGISTERED = 'REGISTERED', DEREGISTERED = 'DEREGISTERED' }


	/** A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } */
	export interface SasPortalEmpty {
	}

	/** A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } */
	export interface SasPortalEmptyFormProperties {
	}
	export function CreateSasPortalEmptyFormGroup() {
		return new FormGroup<SasPortalEmptyFormProperties>({
		});

	}


	/** Request for GenerateSecret. */
	export interface SasPortalGenerateSecretRequest {
	}

	/** Request for GenerateSecret. */
	export interface SasPortalGenerateSecretRequestFormProperties {
	}
	export function CreateSasPortalGenerateSecretRequestFormGroup() {
		return new FormGroup<SasPortalGenerateSecretRequestFormProperties>({
		});

	}


	/** Response for GenerateSecret. */
	export interface SasPortalGenerateSecretResponse {

		/** The secret generated by the string and used by ValidateInstaller. */
		secret?: string | null;
	}

	/** Response for GenerateSecret. */
	export interface SasPortalGenerateSecretResponseFormProperties {

		/** The secret generated by the string and used by ValidateInstaller. */
		secret: FormControl<string | null | undefined>,
	}
	export function CreateSasPortalGenerateSecretResponseFormGroup() {
		return new FormGroup<SasPortalGenerateSecretResponseFormProperties>({
			secret: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request message for `GetPolicy` method. */
	export interface SasPortalGetPolicyRequest {

		/** Required. The resource for which the policy is being requested. */
		resource?: string | null;
	}

	/** Request message for `GetPolicy` method. */
	export interface SasPortalGetPolicyRequestFormProperties {

		/** Required. The resource for which the policy is being requested. */
		resource: FormControl<string | null | undefined>,
	}
	export function CreateSasPortalGetPolicyRequestFormGroup() {
		return new FormGroup<SasPortalGetPolicyRequestFormProperties>({
			resource: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response for `ListCustomers`. */
	export interface SasPortalListCustomersResponse {

		/** The list of customers that match the request. */
		customers?: Array<SasPortalCustomer>;

		/** A pagination token returned from a previous call to ListCustomers that indicates from where listing should continue. If the field is missing or empty, it means there are no more customers. */
		nextPageToken?: string | null;
	}

	/** Response for `ListCustomers`. */
	export interface SasPortalListCustomersResponseFormProperties {

		/** A pagination token returned from a previous call to ListCustomers that indicates from where listing should continue. If the field is missing or empty, it means there are no more customers. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateSasPortalListCustomersResponseFormGroup() {
		return new FormGroup<SasPortalListCustomersResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response for ListDeployments. */
	export interface SasPortalListDeploymentsResponse {

		/** The deployments that match the request. */
		deployments?: Array<SasPortalDeployment>;

		/** A pagination token returned from a previous call to ListDeployments that indicates from where listing should continue. If the field is missing or empty, it means there are no more deployments. */
		nextPageToken?: string | null;
	}

	/** Response for ListDeployments. */
	export interface SasPortalListDeploymentsResponseFormProperties {

		/** A pagination token returned from a previous call to ListDeployments that indicates from where listing should continue. If the field is missing or empty, it means there are no more deployments. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateSasPortalListDeploymentsResponseFormGroup() {
		return new FormGroup<SasPortalListDeploymentsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response for ListDevices. */
	export interface SasPortalListDevicesResponse {

		/** The devices that match the request. */
		devices?: Array<SasPortalDevice>;

		/** A pagination token returned from a previous call to ListDevices that indicates from where listing should continue. If the field is missing or empty, it means there is no more devices. */
		nextPageToken?: string | null;
	}

	/** Response for ListDevices. */
	export interface SasPortalListDevicesResponseFormProperties {

		/** A pagination token returned from a previous call to ListDevices that indicates from where listing should continue. If the field is missing or empty, it means there is no more devices. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateSasPortalListDevicesResponseFormGroup() {
		return new FormGroup<SasPortalListDevicesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response for [ListLegacyOrganizations]. [spectrum.sas.portal.v1alpha1.Provisioning.ListLegacyOrganizations]. */
	export interface SasPortalListLegacyOrganizationsResponse {

		/** Optional. Legacy SAS organizations. */
		organizations?: Array<SasPortalOrganization>;
	}

	/** Response for [ListLegacyOrganizations]. [spectrum.sas.portal.v1alpha1.Provisioning.ListLegacyOrganizations]. */
	export interface SasPortalListLegacyOrganizationsResponseFormProperties {
	}
	export function CreateSasPortalListLegacyOrganizationsResponseFormGroup() {
		return new FormGroup<SasPortalListLegacyOrganizationsResponseFormProperties>({
		});

	}


	/** Organization details. */
	export interface SasPortalOrganization {

		/** Name of organization */
		displayName?: string | null;

		/** Id of organization */
		id?: string | null;
	}

	/** Organization details. */
	export interface SasPortalOrganizationFormProperties {

		/** Name of organization */
		displayName: FormControl<string | null | undefined>,

		/** Id of organization */
		id: FormControl<string | null | undefined>,
	}
	export function CreateSasPortalOrganizationFormGroup() {
		return new FormGroup<SasPortalOrganizationFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response for ListNodes. */
	export interface SasPortalListNodesResponse {

		/** A pagination token returned from a previous call to ListNodes that indicates from where listing should continue. If the field is missing or empty, it means there is no more nodes. */
		nextPageToken?: string | null;

		/** The nodes that match the request. */
		nodes?: Array<SasPortalNode>;
	}

	/** Response for ListNodes. */
	export interface SasPortalListNodesResponseFormProperties {

		/** A pagination token returned from a previous call to ListNodes that indicates from where listing should continue. If the field is missing or empty, it means there is no more nodes. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateSasPortalListNodesResponseFormGroup() {
		return new FormGroup<SasPortalListNodesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The Node. */
	export interface SasPortalNode {

		/** The node's display name. */
		displayName?: string | null;

		/** Output only. Resource name. */
		name?: string | null;

		/** User ids used by the devices belonging to this node. */
		sasUserIds?: Array<string>;
	}

	/** The Node. */
	export interface SasPortalNodeFormProperties {

		/** The node's display name. */
		displayName: FormControl<string | null | undefined>,

		/** Output only. Resource name. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateSasPortalNodeFormGroup() {
		return new FormGroup<SasPortalNodeFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Long-running operation metadata message returned by the MigrateOrganization. */
	export interface SasPortalMigrateOrganizationMetadata {

		/** Output only. Current operation state */
		operationState?: SasPortalMigrateOrganizationMetadataOperationState | null;
	}

	/** Long-running operation metadata message returned by the MigrateOrganization. */
	export interface SasPortalMigrateOrganizationMetadataFormProperties {

		/** Output only. Current operation state */
		operationState: FormControl<SasPortalMigrateOrganizationMetadataOperationState | null | undefined>,
	}
	export function CreateSasPortalMigrateOrganizationMetadataFormGroup() {
		return new FormGroup<SasPortalMigrateOrganizationMetadataFormProperties>({
			operationState: new FormControl<SasPortalMigrateOrganizationMetadataOperationState | null | undefined>(undefined),
		});

	}

	export enum SasPortalMigrateOrganizationMetadataOperationState { OPERATION_STATE_UNSPECIFIED = 'OPERATION_STATE_UNSPECIFIED', OPERATION_STATE_PENDING = 'OPERATION_STATE_PENDING', OPERATION_STATE_RUNNING = 'OPERATION_STATE_RUNNING', OPERATION_STATE_SUCCEEDED = 'OPERATION_STATE_SUCCEEDED', OPERATION_STATE_FAILED = 'OPERATION_STATE_FAILED' }


	/** Request for [MigrateOrganization]. [spectrum.sas.portal.v1alpha1.Provisioning.MigrateOrganization]. GCP Project, Organization Info, and caller's GAIA ID should be retrieved from the RPC handler, and used to check authorization on SAS Portal organization and to create GCP Projects. */
	export interface SasPortalMigrateOrganizationRequest {

		/** Required. Id of the SAS organization to be migrated. */
		organizationId?: string | null;
	}

	/** Request for [MigrateOrganization]. [spectrum.sas.portal.v1alpha1.Provisioning.MigrateOrganization]. GCP Project, Organization Info, and caller's GAIA ID should be retrieved from the RPC handler, and used to check authorization on SAS Portal organization and to create GCP Projects. */
	export interface SasPortalMigrateOrganizationRequestFormProperties {

		/** Required. Id of the SAS organization to be migrated. */
		organizationId: FormControl<string | null | undefined>,
	}
	export function CreateSasPortalMigrateOrganizationRequestFormGroup() {
		return new FormGroup<SasPortalMigrateOrganizationRequestFormProperties>({
			organizationId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response for [MigrateOrganization]. [spectrum.sas.portal.v1alpha1.Provisioning.MigrateOrganization]. */
	export interface SasPortalMigrateOrganizationResponse {

		/** Optional. A list of deployment association that were created for the migration, or current associations if they already exist. */
		deploymentAssociation?: Array<SasPortalDeploymentAssociation>;
	}

	/** Response for [MigrateOrganization]. [spectrum.sas.portal.v1alpha1.Provisioning.MigrateOrganization]. */
	export interface SasPortalMigrateOrganizationResponseFormProperties {
	}
	export function CreateSasPortalMigrateOrganizationResponseFormGroup() {
		return new FormGroup<SasPortalMigrateOrganizationResponseFormProperties>({
		});

	}


	/** Request for MoveDeployment. */
	export interface SasPortalMoveDeploymentRequest {

		/** Required. The name of the new parent resource node or customer to reparent the deployment under. */
		destination?: string | null;
	}

	/** Request for MoveDeployment. */
	export interface SasPortalMoveDeploymentRequestFormProperties {

		/** Required. The name of the new parent resource node or customer to reparent the deployment under. */
		destination: FormControl<string | null | undefined>,
	}
	export function CreateSasPortalMoveDeploymentRequestFormGroup() {
		return new FormGroup<SasPortalMoveDeploymentRequestFormProperties>({
			destination: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request for MoveDevice. */
	export interface SasPortalMoveDeviceRequest {

		/** Required. The name of the new parent resource node or customer to reparent the device under. */
		destination?: string | null;
	}

	/** Request for MoveDevice. */
	export interface SasPortalMoveDeviceRequestFormProperties {

		/** Required. The name of the new parent resource node or customer to reparent the device under. */
		destination: FormControl<string | null | undefined>,
	}
	export function CreateSasPortalMoveDeviceRequestFormGroup() {
		return new FormGroup<SasPortalMoveDeviceRequestFormProperties>({
			destination: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request for MoveNode. */
	export interface SasPortalMoveNodeRequest {

		/** Required. The name of the new parent resource node or customer to reparent the node under. */
		destination?: string | null;
	}

	/** Request for MoveNode. */
	export interface SasPortalMoveNodeRequestFormProperties {

		/** Required. The name of the new parent resource node or customer to reparent the node under. */
		destination: FormControl<string | null | undefined>,
	}
	export function CreateSasPortalMoveNodeRequestFormGroup() {
		return new FormGroup<SasPortalMoveNodeRequestFormProperties>({
			destination: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This resource represents a long-running operation that is the result of a network API call. */
	export interface SasPortalOperation {

		/** If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available. */
		done?: boolean | null;

		/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
		error?: SasPortalStatus;

		/** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
		metadata?: {[id: string]: any };

		/** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`. */
		name?: string | null;

		/** The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`. */
		response?: {[id: string]: any };
	}

	/** This resource represents a long-running operation that is the result of a network API call. */
	export interface SasPortalOperationFormProperties {

		/** If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available. */
		done: FormControl<boolean | null | undefined>,

		/** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
		metadata: FormControl<{[id: string]: any } | null | undefined>,

		/** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`. */
		name: FormControl<string | null | undefined>,

		/** The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`. */
		response: FormControl<{[id: string]: any } | null | undefined>,
	}
	export function CreateSasPortalOperationFormGroup() {
		return new FormGroup<SasPortalOperationFormProperties>({
			done: new FormControl<boolean | null | undefined>(undefined),
			metadata: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			response: new FormControl<{[id: string]: any } | null | undefined>(undefined),
		});

	}


	/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
	export interface SasPortalStatus {

		/** The status code, which should be an enum value of google.rpc.Code. */
		code?: number | null;

		/** A list of messages that carry the error details. There is a common set of message types for APIs to use. */
		details?: Array<string>;

		/** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
		message?: string | null;
	}

	/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
	export interface SasPortalStatusFormProperties {

		/** The status code, which should be an enum value of google.rpc.Code. */
		code: FormControl<number | null | undefined>,

		/** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
		message: FormControl<string | null | undefined>,
	}
	export function CreateSasPortalStatusFormGroup() {
		return new FormGroup<SasPortalStatusFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Defines an access control policy to the resources. */
	export interface SasPortalPolicy {

		/** List of assignments */
		assignments?: Array<SasPortalAssignment>;

		/** The etag is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the etag in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An etag is returned in the response to GetPolicy, and systems are expected to put that etag in the request to SetPolicy to ensure that their change will be applied to the same version of the policy. If no etag is provided in the call to GetPolicy, then the existing policy is overwritten blindly. */
		etag?: string | null;
	}

	/** Defines an access control policy to the resources. */
	export interface SasPortalPolicyFormProperties {

		/** The etag is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the etag in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An etag is returned in the response to GetPolicy, and systems are expected to put that etag in the request to SetPolicy to ensure that their change will be applied to the same version of the policy. If no etag is provided in the call to GetPolicy, then the existing policy is overwritten blindly. */
		etag: FormControl<string | null | undefined>,
	}
	export function CreateSasPortalPolicyFormGroup() {
		return new FormGroup<SasPortalPolicyFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request for [ProvisionDeployment]. [spectrum.sas.portal.v1alpha1.Provisioning.ProvisionDeployment]. GCP Project, Organization Info, and caller’s GAIA ID should be retrieved from the RPC handler, and used as inputs to create a new SAS organization (if not exists) and a new SAS deployment. */
	export interface SasPortalProvisionDeploymentRequest {

		/** Optional. If this field is set, and a new SAS Portal Deployment needs to be created, its display name will be set to the value of this field. */
		newDeploymentDisplayName?: string | null;

		/** Optional. If this field is set, and a new SAS Portal Organization needs to be created, its display name will be set to the value of this field. */
		newOrganizationDisplayName?: string | null;

		/** Optional. If this field is set then a new deployment will be created under the organization specified by this id. */
		organizationId?: string | null;
	}

	/** Request for [ProvisionDeployment]. [spectrum.sas.portal.v1alpha1.Provisioning.ProvisionDeployment]. GCP Project, Organization Info, and caller’s GAIA ID should be retrieved from the RPC handler, and used as inputs to create a new SAS organization (if not exists) and a new SAS deployment. */
	export interface SasPortalProvisionDeploymentRequestFormProperties {

		/** Optional. If this field is set, and a new SAS Portal Deployment needs to be created, its display name will be set to the value of this field. */
		newDeploymentDisplayName: FormControl<string | null | undefined>,

		/** Optional. If this field is set, and a new SAS Portal Organization needs to be created, its display name will be set to the value of this field. */
		newOrganizationDisplayName: FormControl<string | null | undefined>,

		/** Optional. If this field is set then a new deployment will be created under the organization specified by this id. */
		organizationId: FormControl<string | null | undefined>,
	}
	export function CreateSasPortalProvisionDeploymentRequestFormGroup() {
		return new FormGroup<SasPortalProvisionDeploymentRequestFormProperties>({
			newDeploymentDisplayName: new FormControl<string | null | undefined>(undefined),
			newOrganizationDisplayName: new FormControl<string | null | undefined>(undefined),
			organizationId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response for [ProvisionDeployment]. [spectrum.sas.portal.v1alpha1.Provisioning.ProvisionDeployment]. */
	export interface SasPortalProvisionDeploymentResponse {

		/** Optional. Optional error message if the provisioning request is not successful. */
		errorMessage?: string | null;
	}

	/** Response for [ProvisionDeployment]. [spectrum.sas.portal.v1alpha1.Provisioning.ProvisionDeployment]. */
	export interface SasPortalProvisionDeploymentResponseFormProperties {

		/** Optional. Optional error message if the provisioning request is not successful. */
		errorMessage: FormControl<string | null | undefined>,
	}
	export function CreateSasPortalProvisionDeploymentResponseFormGroup() {
		return new FormGroup<SasPortalProvisionDeploymentResponseFormProperties>({
			errorMessage: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request message for `SetPolicy` method. */
	export interface SasPortalSetPolicyRequest {

		/** Optional. Set the field as `true` to disable the onboarding notification. */
		disableNotification?: boolean | null;

		/** Defines an access control policy to the resources. */
		policy?: SasPortalPolicy;

		/** Required. The resource for which the policy is being specified. This policy replaces any existing policy. */
		resource?: string | null;
	}

	/** Request message for `SetPolicy` method. */
	export interface SasPortalSetPolicyRequestFormProperties {

		/** Optional. Set the field as `true` to disable the onboarding notification. */
		disableNotification: FormControl<boolean | null | undefined>,

		/** Required. The resource for which the policy is being specified. This policy replaces any existing policy. */
		resource: FormControl<string | null | undefined>,
	}
	export function CreateSasPortalSetPolicyRequestFormGroup() {
		return new FormGroup<SasPortalSetPolicyRequestFormProperties>({
			disableNotification: new FormControl<boolean | null | undefined>(undefined),
			resource: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata returned by the long running operation for the SetupSasAnalytics rpc. */
	export interface SasPortalSetupSasAnalyticsMetadata {
	}

	/** Metadata returned by the long running operation for the SetupSasAnalytics rpc. */
	export interface SasPortalSetupSasAnalyticsMetadataFormProperties {
	}
	export function CreateSasPortalSetupSasAnalyticsMetadataFormGroup() {
		return new FormGroup<SasPortalSetupSasAnalyticsMetadataFormProperties>({
		});

	}


	/** Request for the SetupSasAnalytics rpc. */
	export interface SasPortalSetupSasAnalyticsRequest {

		/** Optional. User id to setup analytics for, if not provided the user id associated with the project is used. optional */
		userId?: string | null;
	}

	/** Request for the SetupSasAnalytics rpc. */
	export interface SasPortalSetupSasAnalyticsRequestFormProperties {

		/** Optional. User id to setup analytics for, if not provided the user id associated with the project is used. optional */
		userId: FormControl<string | null | undefined>,
	}
	export function CreateSasPortalSetupSasAnalyticsRequestFormGroup() {
		return new FormGroup<SasPortalSetupSasAnalyticsRequestFormProperties>({
			userId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response returned by the long running operation for the SetupSasAnalytics rpc. */
	export interface SasPortalSetupSasAnalyticsResponse {
	}

	/** Response returned by the long running operation for the SetupSasAnalytics rpc. */
	export interface SasPortalSetupSasAnalyticsResponseFormProperties {
	}
	export function CreateSasPortalSetupSasAnalyticsResponseFormGroup() {
		return new FormGroup<SasPortalSetupSasAnalyticsResponseFormProperties>({
		});

	}


	/** Request for SignDevice. */
	export interface SasPortalSignDeviceRequest {
		device?: SasPortalDevice;
	}

	/** Request for SignDevice. */
	export interface SasPortalSignDeviceRequestFormProperties {
	}
	export function CreateSasPortalSignDeviceRequestFormGroup() {
		return new FormGroup<SasPortalSignDeviceRequestFormProperties>({
		});

	}


	/** Request message for `TestPermissions` method. */
	export interface SasPortalTestPermissionsRequest {

		/** The set of permissions to check for the `resource`. */
		permissions?: Array<string>;

		/** Required. The resource for which the permissions are being requested. */
		resource?: string | null;
	}

	/** Request message for `TestPermissions` method. */
	export interface SasPortalTestPermissionsRequestFormProperties {

		/** Required. The resource for which the permissions are being requested. */
		resource: FormControl<string | null | undefined>,
	}
	export function CreateSasPortalTestPermissionsRequestFormGroup() {
		return new FormGroup<SasPortalTestPermissionsRequestFormProperties>({
			resource: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for `TestPermissions` method. */
	export interface SasPortalTestPermissionsResponse {

		/** A set of permissions that the caller is allowed. */
		permissions?: Array<string>;
	}

	/** Response message for `TestPermissions` method. */
	export interface SasPortalTestPermissionsResponseFormProperties {
	}
	export function CreateSasPortalTestPermissionsResponseFormGroup() {
		return new FormGroup<SasPortalTestPermissionsResponseFormProperties>({
		});

	}


	/** Request for UpdateSignedDevice. */
	export interface SasPortalUpdateSignedDeviceRequest {

		/** Required. The JSON Web Token signed using a CPI private key. Payload must be the JSON encoding of the device. The user_id field must be set. */
		encodedDevice?: string | null;

		/** Required. Unique installer ID (CPI ID) from the Certified Professional Installers database. */
		installerId?: string | null;
	}

	/** Request for UpdateSignedDevice. */
	export interface SasPortalUpdateSignedDeviceRequestFormProperties {

		/** Required. The JSON Web Token signed using a CPI private key. Payload must be the JSON encoding of the device. The user_id field must be set. */
		encodedDevice: FormControl<string | null | undefined>,

		/** Required. Unique installer ID (CPI ID) from the Certified Professional Installers database. */
		installerId: FormControl<string | null | undefined>,
	}
	export function CreateSasPortalUpdateSignedDeviceRequestFormGroup() {
		return new FormGroup<SasPortalUpdateSignedDeviceRequestFormProperties>({
			encodedDevice: new FormControl<string | null | undefined>(undefined),
			installerId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request for ValidateInstaller. */
	export interface SasPortalValidateInstallerRequest {

		/** Required. JSON Web Token signed using a CPI private key. Payload must include a "secret" claim whose value is the secret. */
		encodedSecret?: string | null;

		/** Required. Unique installer id (CPI ID) from the Certified Professional Installers database. */
		installerId?: string | null;

		/** Required. Secret returned by the GenerateSecret. */
		secret?: string | null;
	}

	/** Request for ValidateInstaller. */
	export interface SasPortalValidateInstallerRequestFormProperties {

		/** Required. JSON Web Token signed using a CPI private key. Payload must include a "secret" claim whose value is the secret. */
		encodedSecret: FormControl<string | null | undefined>,

		/** Required. Unique installer id (CPI ID) from the Certified Professional Installers database. */
		installerId: FormControl<string | null | undefined>,

		/** Required. Secret returned by the GenerateSecret. */
		secret: FormControl<string | null | undefined>,
	}
	export function CreateSasPortalValidateInstallerRequestFormGroup() {
		return new FormGroup<SasPortalValidateInstallerRequestFormProperties>({
			encodedSecret: new FormControl<string | null | undefined>(undefined),
			installerId: new FormControl<string | null | undefined>(undefined),
			secret: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response for ValidateInstaller. */
	export interface SasPortalValidateInstallerResponse {
	}

	/** Response for ValidateInstaller. */
	export interface SasPortalValidateInstallerResponseFormProperties {
	}
	export function CreateSasPortalValidateInstallerResponseFormGroup() {
		return new FormGroup<SasPortalValidateInstallerResponseFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Returns a list of requested customers.
		 * Get v1alpha1/customers
		 * @param {number} pageSize The maximum number of customers to return in the response.
		 * @param {string} pageToken A pagination token returned from a previous call to ListCustomers that indicates where this listing should continue from.
		 * @return {SasPortalListCustomersResponse} Successful response
		 */
		Sasportal_customers_list(pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<SasPortalListCustomersResponse> {
			return this.http.get<SasPortalListCustomersResponse>(this.baseUri + 'v1alpha1/customers?pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Checks whether a SAS deployment for the authentication context exists.
		 * Get v1alpha1/customers:checkHasProvisionedDeployment
		 * @return {SasPortalCheckHasProvisionedDeploymentResponse} Successful response
		 */
		Sasportal_customers_checkHasProvisionedDeployment(): Observable<SasPortalCheckHasProvisionedDeploymentResponse> {
			return this.http.get<SasPortalCheckHasProvisionedDeploymentResponse>(this.baseUri + 'v1alpha1/customers:checkHasProvisionedDeployment', {});
		}

		/**
		 * Checks whether account is legacy.
		 * Get v1alpha1/customers:listLegacyOrganizations
		 * @return {SasPortalListLegacyOrganizationsResponse} Successful response
		 */
		Sasportal_customers_listLegacyOrganizations(): Observable<SasPortalListLegacyOrganizationsResponse> {
			return this.http.get<SasPortalListLegacyOrganizationsResponse>(this.baseUri + 'v1alpha1/customers:listLegacyOrganizations', {});
		}

		/**
		 * Migrates a SAS organization to the cloud. This will create GCP projects for each deployment and associate them. The SAS Organization is linked to the gcp project that called the command. go/sas-legacy-customer-migration
		 * Post v1alpha1/customers:migrateOrganization
		 * @return {SasPortalOperation} Successful response
		 */
		Sasportal_customers_migrateOrganization(requestBody: SasPortalMigrateOrganizationRequest): Observable<SasPortalOperation> {
			return this.http.post<SasPortalOperation>(this.baseUri + 'v1alpha1/customers:migrateOrganization', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a new SAS deployment through the GCP workflow. Creates a SAS organization if an organization match is not found.
		 * Post v1alpha1/customers:provisionDeployment
		 * @return {SasPortalProvisionDeploymentResponse} Successful response
		 */
		Sasportal_customers_provisionDeployment(requestBody: SasPortalProvisionDeploymentRequest): Observable<SasPortalProvisionDeploymentResponse> {
			return this.http.post<SasPortalProvisionDeploymentResponse>(this.baseUri + 'v1alpha1/customers:provisionDeployment', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Setups the a GCP Project to receive SAS Analytics messages via GCP Pub/Sub with a subscription to BigQuery. All the Pub/Sub topics and BigQuery tables are created automatically as part of this service.
		 * Post v1alpha1/customers:setupSasAnalytics
		 * @return {SasPortalOperation} Successful response
		 */
		Sasportal_customers_setupSasAnalytics(requestBody: SasPortalSetupSasAnalyticsRequest): Observable<SasPortalOperation> {
			return this.http.post<SasPortalOperation>(this.baseUri + 'v1alpha1/customers:setupSasAnalytics', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Generates a secret to be used with the ValidateInstaller.
		 * Post v1alpha1/installer:generateSecret
		 * @return {SasPortalGenerateSecretResponse} Successful response
		 */
		Sasportal_installer_generateSecret(requestBody: SasPortalGenerateSecretRequest): Observable<SasPortalGenerateSecretResponse> {
			return this.http.post<SasPortalGenerateSecretResponse>(this.baseUri + 'v1alpha1/installer:generateSecret', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Validates the identity of a Certified Professional Installer (CPI).
		 * Post v1alpha1/installer:validate
		 * @return {SasPortalValidateInstallerResponse} Successful response
		 */
		Sasportal_installer_validate(requestBody: SasPortalValidateInstallerRequest): Observable<SasPortalValidateInstallerResponse> {
			return this.http.post<SasPortalValidateInstallerResponse>(this.baseUri + 'v1alpha1/installer:validate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
		 * Post v1alpha1/policies:get
		 * @return {SasPortalPolicy} Successful response
		 */
		Sasportal_policies_get(requestBody: SasPortalGetPolicyRequest): Observable<SasPortalPolicy> {
			return this.http.post<SasPortalPolicy>(this.baseUri + 'v1alpha1/policies:get', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Sets the access control policy on the specified resource. Replaces any existing policy.
		 * Post v1alpha1/policies:set
		 * @return {SasPortalPolicy} Successful response
		 */
		Sasportal_policies_set(requestBody: SasPortalSetPolicyRequest): Observable<SasPortalPolicy> {
			return this.http.post<SasPortalPolicy>(this.baseUri + 'v1alpha1/policies:set', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns permissions that a caller has on the specified resource.
		 * Post v1alpha1/policies:test
		 * @return {SasPortalTestPermissionsResponse} Successful response
		 */
		Sasportal_policies_test(requestBody: SasPortalTestPermissionsRequest): Observable<SasPortalTestPermissionsResponse> {
			return this.http.post<SasPortalTestPermissionsResponse>(this.baseUri + 'v1alpha1/policies:test', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a node.
		 * Delete v1alpha1/{name}
		 * @param {string} name Required. The name of the node.
		 * @return {SasPortalEmpty} Successful response
		 */
		Sasportal_nodes_nodes_delete(name: string): Observable<SasPortalEmpty> {
			return this.http.delete<SasPortalEmpty>(this.baseUri + 'v1alpha1/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Returns a requested node.
		 * Get v1alpha1/{name}
		 * @param {string} name Required. The name of the node.
		 * @return {SasPortalNode} Successful response
		 */
		Sasportal_nodes_nodes_get(name: string): Observable<SasPortalNode> {
			return this.http.get<SasPortalNode>(this.baseUri + 'v1alpha1/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Updates an existing node.
		 * Patch v1alpha1/{name}
		 * @param {string} name Output only. Resource name.
		 * @param {string} updateMask Fields to be updated.
		 * @return {SasPortalNode} Successful response
		 */
		Sasportal_nodes_nodes_patch(name: string, updateMask: string | null | undefined, requestBody: SasPortalNode): Observable<SasPortalNode> {
			return this.http.patch<SasPortalNode>(this.baseUri + 'v1alpha1/' + (name == null ? '' : encodeURIComponent(name)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Moves a node under another node or customer.
		 * Post v1alpha1/{name}:move
		 * @param {string} name Required. The name of the node to move.
		 * @return {SasPortalOperation} Successful response
		 */
		Sasportal_nodes_nodes_move(name: string, requestBody: SasPortalMoveNodeRequest): Observable<SasPortalOperation> {
			return this.http.post<SasPortalOperation>(this.baseUri + 'v1alpha1/' + (name == null ? '' : encodeURIComponent(name)) + ':move', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Signs a device.
		 * Post v1alpha1/{name}:signDevice
		 * @param {string} name Output only. The resource path name.
		 * @return {SasPortalEmpty} Successful response
		 */
		Sasportal_nodes_devices_signDevice(name: string, requestBody: SasPortalSignDeviceRequest): Observable<SasPortalEmpty> {
			return this.http.post<SasPortalEmpty>(this.baseUri + 'v1alpha1/' + (name == null ? '' : encodeURIComponent(name)) + ':signDevice', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates a signed device.
		 * Patch v1alpha1/{name}:updateSigned
		 * @param {string} name Required. The name of the device to update.
		 * @return {SasPortalDevice} Successful response
		 */
		Sasportal_nodes_devices_updateSigned(name: string, requestBody: SasPortalUpdateSignedDeviceRequest): Observable<SasPortalDevice> {
			return this.http.patch<SasPortalDevice>(this.baseUri + 'v1alpha1/' + (name == null ? '' : encodeURIComponent(name)) + ':updateSigned', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists deployments.
		 * Get v1alpha1/{parent}/deployments
		 * @param {string} parent Required. The parent resource name, for example, "nodes/1", customer/1/nodes/2.
		 * @param {string} filter The filter expression. The filter should have the following format: "DIRECT_CHILDREN" or format: "direct_children". The filter is case insensitive. If empty, then no deployments are filtered.
		 * @param {number} pageSize The maximum number of deployments to return in the response.
		 * @param {string} pageToken A pagination token returned from a previous call to ListDeployments that indicates where this listing should continue from.
		 * @return {SasPortalListDeploymentsResponse} Successful response
		 */
		Sasportal_nodes_nodes_deployments_list(parent: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<SasPortalListDeploymentsResponse> {
			return this.http.get<SasPortalListDeploymentsResponse>(this.baseUri + 'v1alpha1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/deployments&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a new deployment.
		 * Post v1alpha1/{parent}/deployments
		 * @param {string} parent Required. The parent resource name where the deployment is to be created.
		 * @return {SasPortalDeployment} Successful response
		 */
		Sasportal_nodes_nodes_deployments_create(parent: string, requestBody: SasPortalDeployment): Observable<SasPortalDeployment> {
			return this.http.post<SasPortalDeployment>(this.baseUri + 'v1alpha1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/deployments', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists devices under a node or customer.
		 * Get v1alpha1/{parent}/devices
		 * @param {string} parent Required. The name of the parent resource.
		 * @param {string} filter The filter expression. The filter should have one of the following formats: "sn=123454" or "display_name=MyDevice". sn corresponds to serial number of the device. The filter is case insensitive.
		 * @param {number} pageSize The maximum number of devices to return in the response. If empty or zero, all devices will be listed. Must be in the range [0, 1000].
		 * @param {string} pageToken A pagination token returned from a previous call to ListDevices that indicates where this listing should continue from.
		 * @return {SasPortalListDevicesResponse} Successful response
		 */
		Sasportal_nodes_nodes_devices_list(parent: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<SasPortalListDevicesResponse> {
			return this.http.get<SasPortalListDevicesResponse>(this.baseUri + 'v1alpha1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/devices&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a device under a node or customer.
		 * Post v1alpha1/{parent}/devices
		 * @param {string} parent Required. The name of the parent resource.
		 * @return {SasPortalDevice} Successful response
		 */
		Sasportal_nodes_nodes_devices_create(parent: string, requestBody: SasPortalDevice): Observable<SasPortalDevice> {
			return this.http.post<SasPortalDevice>(this.baseUri + 'v1alpha1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/devices', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a signed device under a node or customer.
		 * Post v1alpha1/{parent}/devices:createSigned
		 * @param {string} parent Required. The name of the parent resource.
		 * @return {SasPortalDevice} Successful response
		 */
		Sasportal_nodes_nodes_devices_createSigned(parent: string, requestBody: SasPortalCreateSignedDeviceRequest): Observable<SasPortalDevice> {
			return this.http.post<SasPortalDevice>(this.baseUri + 'v1alpha1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/devices:createSigned', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists nodes.
		 * Get v1alpha1/{parent}/nodes
		 * @param {string} parent Required. The parent resource name, for example, "nodes/1".
		 * @param {string} filter The filter expression. The filter should have the following format: "DIRECT_CHILDREN" or format: "direct_children". The filter is case insensitive. If empty, then no nodes are filtered.
		 * @param {number} pageSize The maximum number of nodes to return in the response.
		 * @param {string} pageToken A pagination token returned from a previous call to ListNodes that indicates where this listing should continue from.
		 * @return {SasPortalListNodesResponse} Successful response
		 */
		Sasportal_nodes_nodes_nodes_list(parent: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<SasPortalListNodesResponse> {
			return this.http.get<SasPortalListNodesResponse>(this.baseUri + 'v1alpha1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/nodes&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a new node.
		 * Post v1alpha1/{parent}/nodes
		 * @param {string} parent Required. The parent resource name where the node is to be created.
		 * @return {SasPortalNode} Successful response
		 */
		Sasportal_nodes_nodes_nodes_create(parent: string, requestBody: SasPortalNode): Observable<SasPortalNode> {
			return this.http.post<SasPortalNode>(this.baseUri + 'v1alpha1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/nodes', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

