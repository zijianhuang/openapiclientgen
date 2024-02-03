import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface ApiHealthStatus {

		/** Health status of API */
		status?: string | null;
	}
	export interface ApiHealthStatusFormProperties {

		/** Health status of API */
		status: FormControl<string | null | undefined>,
	}
	export function CreateApiHealthStatusFormGroup() {
		return new FormGroup<ApiHealthStatusFormProperties>({
			status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ApiVersion {

		/** Version of API */
		apiVersion?: string | null;

		/** Version of the Service */
		serviceVersion?: string | null;
	}
	export interface ApiVersionFormProperties {

		/** Version of API */
		apiVersion: FormControl<string | null | undefined>,

		/** Version of the Service */
		serviceVersion: FormControl<string | null | undefined>,
	}
	export function CreateApiVersionFormGroup() {
		return new FormGroup<ApiVersionFormProperties>({
			apiVersion: new FormControl<string | null | undefined>(undefined),
			serviceVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Error object reported in case of authentication or authorization errors. */
	export interface AuthError {

		/** Error message */
		error?: string | null;

		/** Detailed information about the error */
		error_description?: string | null;
	}

	/** Error object reported in case of authentication or authorization errors. */
	export interface AuthErrorFormProperties {

		/** Error message */
		error: FormControl<string | null | undefined>,

		/** Detailed information about the error */
		error_description: FormControl<string | null | undefined>,
	}
	export function CreateAuthErrorFormGroup() {
		return new FormGroup<AuthErrorFormProperties>({
			error: new FormControl<string | null | undefined>(undefined),
			error_description: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** CDMA measurement */
	export interface Cdma {

		/**
		 * Base station latitude
		 * Minimum: -90
		 * Maximum: 90
		 */
		baseLat?: number | null;

		/**
		 * Base station longitude
		 * Minimum: -180
		 * Maximum: 180
		 */
		baseLng?: number | null;

		/**
		 * Base Station ID (CDMA BSID, BID)
		 * Required
		 * Minimum: 0
		 * Maximum: 65535
		 */
		bsid: number;

		/** Local identification parameters of CDMA serving cell */
		localId?: CdmaLocalId;

		/**
		 * Network ID (NID)
		 * Required
		 * Minimum: 0
		 * Maximum: 65535
		 */
		nid: number;

		/**
		 * CDMA Network measurements
		 * Minimum items: 1
		 * Maximum items: 32
		 */
		nmr?: Array<CdmaNmr>;

		/**
		 * Pilot Power (dBm). If Pilot Power is not available directly, it needs to be calculated from Total Power in the band and Pilot Strength with respect to the Total Power. Pilot power less than -142dBm should be mapped to -142. Pilot power greater than -49dBm should be mapped to -49.
		 * Minimum: -142
		 * Maximum: -49
		 */
		pilotPower?: number | null;

		/**
		 * CDMA Registration Zone (RZ)
		 * Minimum: 0
		 * Maximum: 4095
		 */
		rz?: number | null;

		/**
		 * System ID (SID)
		 * Required
		 * Minimum: 1
		 * Maximum: 32767
		 */
		sid: number;
	}

	/** CDMA measurement */
	export interface CdmaFormProperties {

		/**
		 * Base station latitude
		 * Minimum: -90
		 * Maximum: 90
		 */
		baseLat: FormControl<number | null | undefined>,

		/**
		 * Base station longitude
		 * Minimum: -180
		 * Maximum: 180
		 */
		baseLng: FormControl<number | null | undefined>,

		/**
		 * Base Station ID (CDMA BSID, BID)
		 * Required
		 * Minimum: 0
		 * Maximum: 65535
		 */
		bsid: FormControl<number | null | undefined>,

		/**
		 * Network ID (NID)
		 * Required
		 * Minimum: 0
		 * Maximum: 65535
		 */
		nid: FormControl<number | null | undefined>,

		/**
		 * Pilot Power (dBm). If Pilot Power is not available directly, it needs to be calculated from Total Power in the band and Pilot Strength with respect to the Total Power. Pilot power less than -142dBm should be mapped to -142. Pilot power greater than -49dBm should be mapped to -49.
		 * Minimum: -142
		 * Maximum: -49
		 */
		pilotPower: FormControl<number | null | undefined>,

		/**
		 * CDMA Registration Zone (RZ)
		 * Minimum: 0
		 * Maximum: 4095
		 */
		rz: FormControl<number | null | undefined>,

		/**
		 * System ID (SID)
		 * Required
		 * Minimum: 1
		 * Maximum: 32767
		 */
		sid: FormControl<number | null | undefined>,
	}
	export function CreateCdmaFormGroup() {
		return new FormGroup<CdmaFormProperties>({
			baseLat: new FormControl<number | null | undefined>(undefined, [Validators.min(-90), Validators.max(90)]),
			baseLng: new FormControl<number | null | undefined>(undefined, [Validators.min(-180), Validators.max(180)]),
			bsid: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0), Validators.max(65535)]),
			nid: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0), Validators.max(65535)]),
			pilotPower: new FormControl<number | null | undefined>(undefined, [Validators.min(-142), Validators.max(-49)]),
			rz: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(4095)]),
			sid: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(1), Validators.max(32767)]),
		});

	}


	/** Local identification parameters of CDMA serving cell */
	export interface CdmaLocalId {

		/**
		 * CDMA channel frequency
		 * Required
		 * Minimum: 0
		 * Maximum: 2047
		 */
		channel: number;

		/**
		 * Pseudonoise offset. This field and CDMA channel frequency together allow for the locally unique identification of the cell.
		 * Required
		 * Minimum: 0
		 * Maximum: 511
		 */
		pnOffset: number;
	}

	/** Local identification parameters of CDMA serving cell */
	export interface CdmaLocalIdFormProperties {

		/**
		 * CDMA channel frequency
		 * Required
		 * Minimum: 0
		 * Maximum: 2047
		 */
		channel: FormControl<number | null | undefined>,

		/**
		 * Pseudonoise offset. This field and CDMA channel frequency together allow for the locally unique identification of the cell.
		 * Required
		 * Minimum: 0
		 * Maximum: 511
		 */
		pnOffset: FormControl<number | null | undefined>,
	}
	export function CreateCdmaLocalIdFormGroup() {
		return new FormGroup<CdmaLocalIdFormProperties>({
			channel: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0), Validators.max(2047)]),
			pnOffset: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0), Validators.max(511)]),
		});

	}


	/** CDMA Network measurement */
	export interface CdmaNmr {

		/**
		 * Base Station ID (CDMA BSID, BID)
		 * Minimum: 0
		 * Maximum: 65535
		 */
		bsid?: number | null;

		/**
		 * CDMA channel frequency
		 * Required
		 * Minimum: 0
		 * Maximum: 2047
		 */
		channel: number;

		/**
		 * Pilot Power (dBm). If Pilot Power is not available directly, it needs to be calculated from Total Power in the band and Pilot Strength with respect to the Total Power. Pilot power less than -142dBm should be mapped to -142. Pilot power greater than -49dBm should be mapped to -49.
		 * Minimum: -142
		 * Maximum: -49
		 */
		pilotPower?: number | null;

		/**
		 * Pseudonoise offset. This field and CDMA channel frequency together allow for the locally unique identification of the cell.
		 * Required
		 * Minimum: 0
		 * Maximum: 511
		 */
		pnOffset: number;
	}

	/** CDMA Network measurement */
	export interface CdmaNmrFormProperties {

		/**
		 * Base Station ID (CDMA BSID, BID)
		 * Minimum: 0
		 * Maximum: 65535
		 */
		bsid: FormControl<number | null | undefined>,

		/**
		 * CDMA channel frequency
		 * Required
		 * Minimum: 0
		 * Maximum: 2047
		 */
		channel: FormControl<number | null | undefined>,

		/**
		 * Pilot Power (dBm). If Pilot Power is not available directly, it needs to be calculated from Total Power in the band and Pilot Strength with respect to the Total Power. Pilot power less than -142dBm should be mapped to -142. Pilot power greater than -49dBm should be mapped to -49.
		 * Minimum: -142
		 * Maximum: -49
		 */
		pilotPower: FormControl<number | null | undefined>,

		/**
		 * Pseudonoise offset. This field and CDMA channel frequency together allow for the locally unique identification of the cell.
		 * Required
		 * Minimum: 0
		 * Maximum: 511
		 */
		pnOffset: FormControl<number | null | undefined>,
	}
	export function CreateCdmaNmrFormGroup() {
		return new FormGroup<CdmaNmrFormProperties>({
			bsid: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(65535)]),
			channel: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0), Validators.max(2047)]),
			pilotPower: new FormControl<number | null | undefined>(undefined, [Validators.min(-142), Validators.max(-49)]),
			pnOffset: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0), Validators.max(511)]),
		});

	}


	/** Information about the client */
	export interface ClientInfo {

		/**
		 * Device firmware version information
		 * Max length: 150
		 * Min length: 1
		 */
		firmware?: string | null;

		/**
		 * Manufacturer of the device (hardware)
		 * Required
		 * Max length: 50
		 * Min length: 2
		 */
		manufacturer: string;

		/**
		 * Model of the device (hardware)
		 * Required
		 * Max length: 50
		 * Min length: 1
		 */
		model: string;

		/**
		 * Name of the client software accessing the HERE API
		 * Required
		 * Max length: 50
		 * Min length: 3
		 */
		name: string;

		/**
		 * Software platform information of the device, for example operating system name and version.
		 * Max length: 50
		 * Min length: 3
		 */
		platform?: string | null;

		/**
		 * Version of the client software in format X.Y.Z, where X [0..255] is a major, Y [0..255] is a minor, and Z [0..65535] is a build version number. Increase the version/build number for each release of the client.
		 * Required
		 * Max length: 13
		 * Min length: 3
		 */
		version: string;
	}

	/** Information about the client */
	export interface ClientInfoFormProperties {

		/**
		 * Device firmware version information
		 * Max length: 150
		 * Min length: 1
		 */
		firmware: FormControl<string | null | undefined>,

		/**
		 * Manufacturer of the device (hardware)
		 * Required
		 * Max length: 50
		 * Min length: 2
		 */
		manufacturer: FormControl<string | null | undefined>,

		/**
		 * Model of the device (hardware)
		 * Required
		 * Max length: 50
		 * Min length: 1
		 */
		model: FormControl<string | null | undefined>,

		/**
		 * Name of the client software accessing the HERE API
		 * Required
		 * Max length: 50
		 * Min length: 3
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Software platform information of the device, for example operating system name and version.
		 * Max length: 50
		 * Min length: 3
		 */
		platform: FormControl<string | null | undefined>,

		/**
		 * Version of the client software in format X.Y.Z, where X [0..255] is a major, Y [0..255] is a minor, and Z [0..65535] is a build version number. Increase the version/build number for each release of the client.
		 * Required
		 * Max length: 13
		 * Min length: 3
		 */
		version: FormControl<string | null | undefined>,
	}
	export function CreateClientInfoFormGroup() {
		return new FormGroup<ClientInfoFormProperties>({
			firmware: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(150)]),
			manufacturer: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(2), Validators.maxLength(50)]),
			model: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(50)]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
			platform: new FormControl<string | null | undefined>(undefined, [Validators.minLength(3), Validators.maxLength(50)]),
			version: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(3), Validators.maxLength(13)]),
		});

	}


	/** Object wrapper for the error response to a request. */
	export interface Error {

		/**
		 * Actionable instructions for the user
		 * Required
		 */
		action: string;

		/**
		 * Reason for the error
		 * Required
		 */
		cause: string;

		/**
		 * Error code
		 * Required
		 */
		code: string;

		/**
		 * Copy from X-Correlation-ID header for logging
		 * Required
		 */
		correlationId: string;
		details?: Array<ErrorDetail>;

		/**
		 * Equals HTTP status code
		 * Required
		 */
		status: number;

		/**
		 * Localized error string
		 * Required
		 */
		title: string;
	}

	/** Object wrapper for the error response to a request. */
	export interface ErrorFormProperties {

		/**
		 * Actionable instructions for the user
		 * Required
		 */
		action: FormControl<string | null | undefined>,

		/**
		 * Reason for the error
		 * Required
		 */
		cause: FormControl<string | null | undefined>,

		/**
		 * Error code
		 * Required
		 */
		code: FormControl<string | null | undefined>,

		/**
		 * Copy from X-Correlation-ID header for logging
		 * Required
		 */
		correlationId: FormControl<string | null | undefined>,

		/**
		 * Equals HTTP status code
		 * Required
		 */
		status: FormControl<number | null | undefined>,

		/**
		 * Localized error string
		 * Required
		 */
		title: FormControl<string | null | undefined>,
	}
	export function CreateErrorFormGroup() {
		return new FormGroup<ErrorFormProperties>({
			action: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			cause: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			code: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			correlationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			title: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Detail about an error */
	export interface ErrorDetail {

		/** Localize message */
		message?: string | null;
		messagePlaceholders?: any;
		messageTemplate?: string | null;

		/** Source of the error, using JSONPath */
		source?: string | null;

		/** Title for the detail */
		title?: string | null;
	}

	/** Detail about an error */
	export interface ErrorDetailFormProperties {

		/** Localize message */
		message: FormControl<string | null | undefined>,
		messagePlaceholders: FormControl<any | null | undefined>,
		messageTemplate: FormControl<string | null | undefined>,

		/** Source of the error, using JSONPath */
		source: FormControl<string | null | undefined>,

		/** Title for the detail */
		title: FormControl<string | null | undefined>,
	}
	export function CreateErrorDetailFormGroup() {
		return new FormGroup<ErrorDetailFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			messagePlaceholders: new FormControl<any | null | undefined>(undefined),
			messageTemplate: new FormControl<string | null | undefined>(undefined),
			source: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** GSM measurement */
	export interface Gsm {

		/**
		 * Cell identifier (GERAN CID)
		 * Required
		 * Minimum: 0
		 * Maximum: 65535
		 */
		cid: number;

		/**
		 * Location Area Code (LAC). Note, value 65534 is invalid.
		 * Required
		 * Minimum: 1
		 * Maximum: 65535
		 */
		lac: number;

		/** Local identification parameters of GSM serving cell */
		localId?: GsmLocalId;

		/**
		 * Mobile Country Code (MCC). Note: 0xx is for test networks, 1xx and 8xx are not used
		 * Required
		 * Minimum: 200
		 * Maximum: 999
		 */
		mcc: number;

		/**
		 * Mobile Network Code (MNC).
		 * Required
		 * Minimum: 0
		 * Maximum: 999
		 */
		mnc: number;

		/**
		 * GSM Network measurements
		 * Minimum items: 1
		 * Maximum items: 32
		 */
		nmr?: Array<GsmNmr>;

		/**
		 * Received Signal power (dBm). Power less than -110dBm should be mapped to -110. Power greater than -25dBm should be mapped to -25.
		 * Minimum: -110
		 * Maximum: -25
		 */
		rxLevel?: number | null;

		/**
		 * Timing advance (TA). Expressed in the units of GSM bits equaling to 48/13 μs ~ 1107 meters.
		 * Minimum: 0
		 * Maximum: 63
		 */
		ta?: number | null;
	}

	/** GSM measurement */
	export interface GsmFormProperties {

		/**
		 * Cell identifier (GERAN CID)
		 * Required
		 * Minimum: 0
		 * Maximum: 65535
		 */
		cid: FormControl<number | null | undefined>,

		/**
		 * Location Area Code (LAC). Note, value 65534 is invalid.
		 * Required
		 * Minimum: 1
		 * Maximum: 65535
		 */
		lac: FormControl<number | null | undefined>,

		/**
		 * Mobile Country Code (MCC). Note: 0xx is for test networks, 1xx and 8xx are not used
		 * Required
		 * Minimum: 200
		 * Maximum: 999
		 */
		mcc: FormControl<number | null | undefined>,

		/**
		 * Mobile Network Code (MNC).
		 * Required
		 * Minimum: 0
		 * Maximum: 999
		 */
		mnc: FormControl<number | null | undefined>,

		/**
		 * Received Signal power (dBm). Power less than -110dBm should be mapped to -110. Power greater than -25dBm should be mapped to -25.
		 * Minimum: -110
		 * Maximum: -25
		 */
		rxLevel: FormControl<number | null | undefined>,

		/**
		 * Timing advance (TA). Expressed in the units of GSM bits equaling to 48/13 μs ~ 1107 meters.
		 * Minimum: 0
		 * Maximum: 63
		 */
		ta: FormControl<number | null | undefined>,
	}
	export function CreateGsmFormGroup() {
		return new FormGroup<GsmFormProperties>({
			cid: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0), Validators.max(65535)]),
			lac: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(1), Validators.max(65535)]),
			mcc: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(200), Validators.max(999)]),
			mnc: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0), Validators.max(999)]),
			rxLevel: new FormControl<number | null | undefined>(undefined, [Validators.min(-110), Validators.max(-25)]),
			ta: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(63)]),
		});

	}


	/** Local identification parameters of GSM serving cell */
	export interface GsmLocalId {

		/**
		 * Broadcast Control Channel (BCCH, synonymous to ARFCN = Absolute Radio Frequency Channel)
		 * Required
		 * Minimum: 0
		 * Maximum: 1023
		 */
		bcch: number;

		/**
		 * Base Station Identity Code (BSIC, for instance, color code)
		 * Required
		 * Minimum: 0
		 * Maximum: 63
		 */
		bsic: number;
	}

	/** Local identification parameters of GSM serving cell */
	export interface GsmLocalIdFormProperties {

		/**
		 * Broadcast Control Channel (BCCH, synonymous to ARFCN = Absolute Radio Frequency Channel)
		 * Required
		 * Minimum: 0
		 * Maximum: 1023
		 */
		bcch: FormControl<number | null | undefined>,

		/**
		 * Base Station Identity Code (BSIC, for instance, color code)
		 * Required
		 * Minimum: 0
		 * Maximum: 63
		 */
		bsic: FormControl<number | null | undefined>,
	}
	export function CreateGsmLocalIdFormGroup() {
		return new FormGroup<GsmLocalIdFormProperties>({
			bcch: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0), Validators.max(1023)]),
			bsic: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0), Validators.max(63)]),
		});

	}


	/**
	 * GSM Network measurements.
	 */
	export interface GsmNmr {

		/**
		 * Broadcast Control Channel (BCCH, synonymous to ARFCN = Absolute Radio Frequency Channel)
		 * Required
		 * Minimum: 0
		 * Maximum: 1023
		 */
		bcch: number;

		/**
		 * Base Station Identity Code (BSIC, for instance, color code)
		 * Required
		 * Minimum: 0
		 * Maximum: 63
		 */
		bsic: number;

		/**
		 * The `lac` and `cid` parameters of global ID for GSM neighbor measurement. They should be from the same PLMN (MCC+MNC) as the serving cell.
		 */
		globalIdentity?: GsmNmrGlobalId;

		/**
		 * Received Signal power (dBm). Power less than -110dBm should be mapped to -110. Power greater than -25dBm should be mapped to -25.
		 * Minimum: -110
		 * Maximum: -25
		 */
		rxLevel?: number | null;
	}

	/**
	 * GSM Network measurements.
	 */
	export interface GsmNmrFormProperties {

		/**
		 * Broadcast Control Channel (BCCH, synonymous to ARFCN = Absolute Radio Frequency Channel)
		 * Required
		 * Minimum: 0
		 * Maximum: 1023
		 */
		bcch: FormControl<number | null | undefined>,

		/**
		 * Base Station Identity Code (BSIC, for instance, color code)
		 * Required
		 * Minimum: 0
		 * Maximum: 63
		 */
		bsic: FormControl<number | null | undefined>,

		/**
		 * Received Signal power (dBm). Power less than -110dBm should be mapped to -110. Power greater than -25dBm should be mapped to -25.
		 * Minimum: -110
		 * Maximum: -25
		 */
		rxLevel: FormControl<number | null | undefined>,
	}
	export function CreateGsmNmrFormGroup() {
		return new FormGroup<GsmNmrFormProperties>({
			bcch: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0), Validators.max(1023)]),
			bsic: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0), Validators.max(63)]),
			rxLevel: new FormControl<number | null | undefined>(undefined, [Validators.min(-110), Validators.max(-25)]),
		});

	}


	/**
	 * The `lac` and `cid` parameters of global ID for GSM neighbor measurement. They should be from the same PLMN (MCC+MNC) as the serving cell.
	 */
	export interface GsmNmrGlobalId {

		/**
		 * Cell identifier (GERAN CID)
		 * Required
		 * Minimum: 0
		 * Maximum: 65535
		 */
		cid: number;

		/**
		 * Location Area Code (LAC). Note, value 65534 is invalid.
		 * Required
		 * Minimum: 1
		 * Maximum: 65535
		 */
		lac: number;
	}

	/**
	 * The `lac` and `cid` parameters of global ID for GSM neighbor measurement. They should be from the same PLMN (MCC+MNC) as the serving cell.
	 */
	export interface GsmNmrGlobalIdFormProperties {

		/**
		 * Cell identifier (GERAN CID)
		 * Required
		 * Minimum: 0
		 * Maximum: 65535
		 */
		cid: FormControl<number | null | undefined>,

		/**
		 * Location Area Code (LAC). Note, value 65534 is invalid.
		 * Required
		 * Minimum: 1
		 * Maximum: 65535
		 */
		lac: FormControl<number | null | undefined>,
	}
	export function CreateGsmNmrGlobalIdFormGroup() {
		return new FormGroup<GsmNmrGlobalIdFormProperties>({
			cid: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0), Validators.max(65535)]),
			lac: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(1), Validators.max(65535)]),
		});

	}


	/**
	 * Object wrapping the location data submitted in a request for a position. At least one of `gsm`, `wcdma`, `tdscdma`, `lte`, `cdma`, or `wlan` elements is required. Array elements should be unique within the request.
	 */
	export interface Locate {

		/**
		 * CDMA cells (CDMA2000)
		 * Minimum items: 1
		 * Maximum items: 16
		 */
		cdma?: Array<Cdma>;

		/** Information about the client */
		client?: ClientInfo;

		/**
		 * GSM cells (GERAN)
		 * Minimum items: 1
		 * Maximum items: 16
		 */
		gsm?: Array<Gsm>;

		/**
		 * LTE cells (E-UTRA, 4G)
		 * Minimum items: 1
		 * Maximum items: 16
		 */
		lte?: Array<Lte>;

		/**
		 * TD-SCDMA cells (UTRA-TDD, 3G UMTS TDD)
		 * Minimum items: 1
		 * Maximum items: 16
		 */
		tdscdma?: Array<Tdscdma>;

		/**
		 * WCDMA cells (UTRA-FDD, 3G UMTS)
		 * Minimum items: 1
		 * Maximum items: 16
		 */
		wcdma?: Array<Wcdma>;

		/**
		 * WLAN access positions. For privacy reasons positioning based on a single WLAN AP is not possible; there has to be at least one other matching wlan or cell. Alternatively, you can allow fallbacks to less accurate single WLAN AP location estimates by using the setting `fallback=singleWifi`.
		 * Minimum items: 1
		 * Maximum items: 256
		 */
		wlan?: Array<WlanLocate>;
	}

	/**
	 * Object wrapping the location data submitted in a request for a position. At least one of `gsm`, `wcdma`, `tdscdma`, `lte`, `cdma`, or `wlan` elements is required. Array elements should be unique within the request.
	 */
	export interface LocateFormProperties {
	}
	export function CreateLocateFormGroup() {
		return new FormGroup<LocateFormProperties>({
		});

	}


	/** LTE measurement */
	export interface Lte {

		/**
		 * E-UTRA Cell Identifier (UC-Id), 28 bits (20 bits eNodeB and 8 bits Cell ID). MCC + MNC + CID uniquely identifies the LTE cell, TAC is optional.
		 * Required
		 * Minimum: 0
		 * Maximum: 268435455
		 */
		cid: number;

		/** Local identification parameters of LTE serving cell */
		localId?: LteLocalId;

		/**
		 * Mobile Country Code (MCC). Note: 0xx is for test networks, 1xx and 8xx are not used
		 * Required
		 * Minimum: 200
		 * Maximum: 999
		 */
		mcc: number;

		/**
		 * Mobile Network Code (MNC).
		 * Required
		 * Minimum: 0
		 * Maximum: 999
		 */
		mnc: number;

		/**
		 * LTE Network measurements
		 * Minimum items: 1
		 * Maximum items: 32
		 */
		nmr?: Array<LteNmr>;

		/**
		 * Reference Signal Received Power (RSRP) in dBm. Power less than -140dBm should be mapped to -140. Power greater than -44dBm should be mapped to -44.
		 * Minimum: -140
		 * Maximum: -44
		 */
		rsrp?: number | null;

		/**
		 * Reference Signal Received Quality (RSRQ) in dBm. Values less than -19.5dB should be mapped to -19.5, and values greater than -3dB should be mapped to -3dB.
		 * Minimum: -19.5
		 * Maximum: -3
		 */
		rsrq?: number | null;

		/**
		 * Timing Advance. Expressed in the units of 16*Ts (16 Basic time units) = 16/(15000*2048) seconds ~ 156meters. For reference see 3GPP TS 36.213 and 36.211.
		 * Minimum: 0
		 * Maximum: 1282
		 */
		ta?: number | null;

		/**
		 * Tracking Area Code (TAC)
		 * Minimum: 0
		 * Maximum: 65535
		 */
		tac?: number | null;
	}

	/** LTE measurement */
	export interface LteFormProperties {

		/**
		 * E-UTRA Cell Identifier (UC-Id), 28 bits (20 bits eNodeB and 8 bits Cell ID). MCC + MNC + CID uniquely identifies the LTE cell, TAC is optional.
		 * Required
		 * Minimum: 0
		 * Maximum: 268435455
		 */
		cid: FormControl<number | null | undefined>,

		/**
		 * Mobile Country Code (MCC). Note: 0xx is for test networks, 1xx and 8xx are not used
		 * Required
		 * Minimum: 200
		 * Maximum: 999
		 */
		mcc: FormControl<number | null | undefined>,

		/**
		 * Mobile Network Code (MNC).
		 * Required
		 * Minimum: 0
		 * Maximum: 999
		 */
		mnc: FormControl<number | null | undefined>,

		/**
		 * Reference Signal Received Power (RSRP) in dBm. Power less than -140dBm should be mapped to -140. Power greater than -44dBm should be mapped to -44.
		 * Minimum: -140
		 * Maximum: -44
		 */
		rsrp: FormControl<number | null | undefined>,

		/**
		 * Reference Signal Received Quality (RSRQ) in dBm. Values less than -19.5dB should be mapped to -19.5, and values greater than -3dB should be mapped to -3dB.
		 * Minimum: -19.5
		 * Maximum: -3
		 */
		rsrq: FormControl<number | null | undefined>,

		/**
		 * Timing Advance. Expressed in the units of 16*Ts (16 Basic time units) = 16/(15000*2048) seconds ~ 156meters. For reference see 3GPP TS 36.213 and 36.211.
		 * Minimum: 0
		 * Maximum: 1282
		 */
		ta: FormControl<number | null | undefined>,

		/**
		 * Tracking Area Code (TAC)
		 * Minimum: 0
		 * Maximum: 65535
		 */
		tac: FormControl<number | null | undefined>,
	}
	export function CreateLteFormGroup() {
		return new FormGroup<LteFormProperties>({
			cid: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0), Validators.max(268435455)]),
			mcc: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(200), Validators.max(999)]),
			mnc: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0), Validators.max(999)]),
			rsrp: new FormControl<number | null | undefined>(undefined, [Validators.min(-140), Validators.max(-44)]),
			rsrq: new FormControl<number | null | undefined>(undefined, [Validators.min(-19.5), Validators.max(-3)]),
			ta: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(1282)]),
			tac: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(65535)]),
		});

	}


	/** Local identification parameters of LTE serving cell */
	export interface LteLocalId {

		/**
		 * Evolved Absolute Radio Frequency Channel (E-ARFCN)
		 * Required
		 * Minimum: 0
		 * Maximum: 262143
		 */
		earfcn: number;

		/**
		 * Physical Cell Identity (PCI)
		 * Required
		 * Minimum: 0
		 * Maximum: 503
		 */
		pci: number;
	}

	/** Local identification parameters of LTE serving cell */
	export interface LteLocalIdFormProperties {

		/**
		 * Evolved Absolute Radio Frequency Channel (E-ARFCN)
		 * Required
		 * Minimum: 0
		 * Maximum: 262143
		 */
		earfcn: FormControl<number | null | undefined>,

		/**
		 * Physical Cell Identity (PCI)
		 * Required
		 * Minimum: 0
		 * Maximum: 503
		 */
		pci: FormControl<number | null | undefined>,
	}
	export function CreateLteLocalIdFormGroup() {
		return new FormGroup<LteLocalIdFormProperties>({
			earfcn: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0), Validators.max(262143)]),
			pci: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0), Validators.max(503)]),
		});

	}


	/** LTE Network measurement */
	export interface LteNmr {

		/**
		 * E-UTRA Cell Identifier (UC-Id), 28 bits (20 bits eNodeB and 8 bits Cell ID). MCC + MNC + CID uniquely identifies the LTE cell, TAC is optional.
		 * Minimum: 0
		 * Maximum: 268435455
		 */
		cid?: number | null;

		/**
		 * Evolved Absolute Radio Frequency Channel (E-ARFCN)
		 * Required
		 * Minimum: 0
		 * Maximum: 262143
		 */
		earfcn: number;

		/**
		 * Physical Cell Identity (PCI)
		 * Required
		 * Minimum: 0
		 * Maximum: 503
		 */
		pci: number;

		/**
		 * Reference Signal Received Power (RSRP) in dBm. Power less than -140dBm should be mapped to -140. Power greater than -44dBm should be mapped to -44.
		 * Minimum: -140
		 * Maximum: -44
		 */
		rsrp?: number | null;

		/**
		 * Reference Signal Received Quality (RSRQ) in dBm. Values less than -19.5dB should be mapped to -19.5, and values greater than -3dB should be mapped to -3dB.
		 * Minimum: -19.5
		 * Maximum: -3
		 */
		rsrq?: number | null;
	}

	/** LTE Network measurement */
	export interface LteNmrFormProperties {

		/**
		 * E-UTRA Cell Identifier (UC-Id), 28 bits (20 bits eNodeB and 8 bits Cell ID). MCC + MNC + CID uniquely identifies the LTE cell, TAC is optional.
		 * Minimum: 0
		 * Maximum: 268435455
		 */
		cid: FormControl<number | null | undefined>,

		/**
		 * Evolved Absolute Radio Frequency Channel (E-ARFCN)
		 * Required
		 * Minimum: 0
		 * Maximum: 262143
		 */
		earfcn: FormControl<number | null | undefined>,

		/**
		 * Physical Cell Identity (PCI)
		 * Required
		 * Minimum: 0
		 * Maximum: 503
		 */
		pci: FormControl<number | null | undefined>,

		/**
		 * Reference Signal Received Power (RSRP) in dBm. Power less than -140dBm should be mapped to -140. Power greater than -44dBm should be mapped to -44.
		 * Minimum: -140
		 * Maximum: -44
		 */
		rsrp: FormControl<number | null | undefined>,

		/**
		 * Reference Signal Received Quality (RSRQ) in dBm. Values less than -19.5dB should be mapped to -19.5, and values greater than -3dB should be mapped to -3dB.
		 * Minimum: -19.5
		 * Maximum: -3
		 */
		rsrq: FormControl<number | null | undefined>,
	}
	export function CreateLteNmrFormGroup() {
		return new FormGroup<LteNmrFormProperties>({
			cid: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(268435455)]),
			earfcn: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0), Validators.max(262143)]),
			pci: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0), Validators.max(503)]),
			rsrp: new FormControl<number | null | undefined>(undefined, [Validators.min(-140), Validators.max(-44)]),
			rsrq: new FormControl<number | null | undefined>(undefined, [Validators.min(-19.5), Validators.max(-3)]),
		});

	}


	/** TD-SCDMA measurement. */
	export interface Tdscdma {

		/**
		 * UTRAN Cell Identifier (UC-Id), 28 bits (12 bits RNC and 16 bits Cell ID). MCC + MNC + CID uniquely identifies the WCDMA cell, LAC is optional.
		 * Required
		 * Minimum: 0
		 * Maximum: 268435455
		 */
		cid: number;

		/**
		 * Location Area Code (LAC). Note, value 65534 is invalid.
		 * Minimum: 1
		 * Maximum: 65535
		 */
		lac?: number | null;

		/** Local identification parameters of TD-SCDMA serving cell */
		localId?: TdscdmaLocalId;

		/**
		 * Mobile Country Code (MCC). Note: 0xx is for test networks, 1xx and 8xx are not used
		 * Required
		 * Minimum: 200
		 * Maximum: 999
		 */
		mcc: number;

		/**
		 * Mobile Network Code (MNC).
		 * Required
		 * Minimum: 0
		 * Maximum: 999
		 */
		mnc: number;

		/**
		 * TD-SCDMA Network measurements. Maximum of 8 distinct uarfcn frequencies.
		 * Minimum items: 1
		 * Maximum items: 32
		 */
		nmr?: Array<TdscdmaNmr>;

		/**
		 * UTRAN pathloss (dBm)
		 * Minimum: 46
		 * Maximum: 158
		 */
		pathloss?: number | null;

		/**
		 * Received Signal Code Power (RSCP) in dBm. Power less than -120dBm should be mapped to -120. Power greater than -25dBm should be mapped to -25.
		 * Minimum: -120
		 * Maximum: -25
		 */
		rscp?: number | null;

		/**
		 * Timing advance (TA). Round-Trip distance presented in the units of 4*c/7.68e6 ~156 meters. That is, the scaling factor is 4 times the chip length at chip rate of 7.68 Mchips/s. Note that at chip rates 1.28 Mchips/s and 3.84 Mchips/s you need to scale according to chip length of 7.68 Mchips/s, that is, multiply by 6 or 2 if needed.
		 * Minimum: 0
		 * Maximum: 1530
		 */
		ta?: number | null;
	}

	/** TD-SCDMA measurement. */
	export interface TdscdmaFormProperties {

		/**
		 * UTRAN Cell Identifier (UC-Id), 28 bits (12 bits RNC and 16 bits Cell ID). MCC + MNC + CID uniquely identifies the WCDMA cell, LAC is optional.
		 * Required
		 * Minimum: 0
		 * Maximum: 268435455
		 */
		cid: FormControl<number | null | undefined>,

		/**
		 * Location Area Code (LAC). Note, value 65534 is invalid.
		 * Minimum: 1
		 * Maximum: 65535
		 */
		lac: FormControl<number | null | undefined>,

		/**
		 * Mobile Country Code (MCC). Note: 0xx is for test networks, 1xx and 8xx are not used
		 * Required
		 * Minimum: 200
		 * Maximum: 999
		 */
		mcc: FormControl<number | null | undefined>,

		/**
		 * Mobile Network Code (MNC).
		 * Required
		 * Minimum: 0
		 * Maximum: 999
		 */
		mnc: FormControl<number | null | undefined>,

		/**
		 * UTRAN pathloss (dBm)
		 * Minimum: 46
		 * Maximum: 158
		 */
		pathloss: FormControl<number | null | undefined>,

		/**
		 * Received Signal Code Power (RSCP) in dBm. Power less than -120dBm should be mapped to -120. Power greater than -25dBm should be mapped to -25.
		 * Minimum: -120
		 * Maximum: -25
		 */
		rscp: FormControl<number | null | undefined>,

		/**
		 * Timing advance (TA). Round-Trip distance presented in the units of 4*c/7.68e6 ~156 meters. That is, the scaling factor is 4 times the chip length at chip rate of 7.68 Mchips/s. Note that at chip rates 1.28 Mchips/s and 3.84 Mchips/s you need to scale according to chip length of 7.68 Mchips/s, that is, multiply by 6 or 2 if needed.
		 * Minimum: 0
		 * Maximum: 1530
		 */
		ta: FormControl<number | null | undefined>,
	}
	export function CreateTdscdmaFormGroup() {
		return new FormGroup<TdscdmaFormProperties>({
			cid: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0), Validators.max(268435455)]),
			lac: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(65535)]),
			mcc: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(200), Validators.max(999)]),
			mnc: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0), Validators.max(999)]),
			pathloss: new FormControl<number | null | undefined>(undefined, [Validators.min(46), Validators.max(158)]),
			rscp: new FormControl<number | null | undefined>(undefined, [Validators.min(-120), Validators.max(-25)]),
			ta: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(1530)]),
		});

	}


	/** Local identification parameters of TD-SCDMA serving cell */
	export interface TdscdmaLocalId {

		/**
		 * Cell Parameters ID (CDMA Spreading Code ID)
		 * Required
		 * Minimum: 0
		 * Maximum: 127
		 */
		cellParams: number;

		/**
		 * UTRAN Absolute Radio Frequency (U-ARFCN)
		 * Required
		 * Minimum: 0
		 * Maximum: 16383
		 */
		uarfcn: number;
	}

	/** Local identification parameters of TD-SCDMA serving cell */
	export interface TdscdmaLocalIdFormProperties {

		/**
		 * Cell Parameters ID (CDMA Spreading Code ID)
		 * Required
		 * Minimum: 0
		 * Maximum: 127
		 */
		cellParams: FormControl<number | null | undefined>,

		/**
		 * UTRAN Absolute Radio Frequency (U-ARFCN)
		 * Required
		 * Minimum: 0
		 * Maximum: 16383
		 */
		uarfcn: FormControl<number | null | undefined>,
	}
	export function CreateTdscdmaLocalIdFormGroup() {
		return new FormGroup<TdscdmaLocalIdFormProperties>({
			cellParams: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0), Validators.max(127)]),
			uarfcn: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0), Validators.max(16383)]),
		});

	}


	/** TD-SCDMA Network measurement */
	export interface TdscdmaNmr {

		/**
		 * Cell Parameters ID (CDMA Spreading Code ID)
		 * Required
		 * Minimum: 0
		 * Maximum: 127
		 */
		cellParams: number;

		/**
		 * UTRAN Cell Identifier (UC-Id), 28 bits (12 bits RNC and 16 bits Cell ID). MCC + MNC + CID uniquely identifies the WCDMA cell, LAC is optional.
		 * Minimum: 0
		 * Maximum: 268435455
		 */
		cid?: number | null;

		/**
		 * UTRAN pathloss (dBm)
		 * Minimum: 46
		 * Maximum: 158
		 */
		pathloss?: number | null;

		/**
		 * Received Signal Code Power (RSCP) in dBm. Power less than -120dBm should be mapped to -120. Power greater than -25dBm should be mapped to -25.
		 * Minimum: -120
		 * Maximum: -25
		 */
		rscp?: number | null;

		/**
		 * UTRAN Absolute Radio Frequency (U-ARFCN)
		 * Required
		 * Minimum: 0
		 * Maximum: 16383
		 */
		uarfcn: number;
	}

	/** TD-SCDMA Network measurement */
	export interface TdscdmaNmrFormProperties {

		/**
		 * Cell Parameters ID (CDMA Spreading Code ID)
		 * Required
		 * Minimum: 0
		 * Maximum: 127
		 */
		cellParams: FormControl<number | null | undefined>,

		/**
		 * UTRAN Cell Identifier (UC-Id), 28 bits (12 bits RNC and 16 bits Cell ID). MCC + MNC + CID uniquely identifies the WCDMA cell, LAC is optional.
		 * Minimum: 0
		 * Maximum: 268435455
		 */
		cid: FormControl<number | null | undefined>,

		/**
		 * UTRAN pathloss (dBm)
		 * Minimum: 46
		 * Maximum: 158
		 */
		pathloss: FormControl<number | null | undefined>,

		/**
		 * Received Signal Code Power (RSCP) in dBm. Power less than -120dBm should be mapped to -120. Power greater than -25dBm should be mapped to -25.
		 * Minimum: -120
		 * Maximum: -25
		 */
		rscp: FormControl<number | null | undefined>,

		/**
		 * UTRAN Absolute Radio Frequency (U-ARFCN)
		 * Required
		 * Minimum: 0
		 * Maximum: 16383
		 */
		uarfcn: FormControl<number | null | undefined>,
	}
	export function CreateTdscdmaNmrFormGroup() {
		return new FormGroup<TdscdmaNmrFormProperties>({
			cellParams: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0), Validators.max(127)]),
			cid: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(268435455)]),
			pathloss: new FormControl<number | null | undefined>(undefined, [Validators.min(46), Validators.max(158)]),
			rscp: new FormControl<number | null | undefined>(undefined, [Validators.min(-120), Validators.max(-25)]),
			uarfcn: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0), Validators.max(16383)]),
		});

	}


	/** WCDMA measurement */
	export interface Wcdma {

		/**
		 * UTRAN Cell Identifier (UC-Id), 28 bits (12 bits RNC and 16 bits Cell ID). MCC + MNC + CID uniquely identifies the WCDMA cell, LAC is optional.
		 * Required
		 * Minimum: 0
		 * Maximum: 268435455
		 */
		cid: number;

		/**
		 * Location Area Code (LAC). Note, value 65534 is invalid.
		 * Minimum: 1
		 * Maximum: 65535
		 */
		lac?: number | null;

		/** Local identification parameters of WCDMA serving cell */
		localId?: WcdmaLocalId;

		/**
		 * Mobile Country Code (MCC). Note: 0xx is for test networks, 1xx and 8xx are not used
		 * Required
		 * Minimum: 200
		 * Maximum: 999
		 */
		mcc: number;

		/**
		 * Mobile Network Code (MNC).
		 * Required
		 * Minimum: 0
		 * Maximum: 999
		 */
		mnc: number;

		/**
		 * WCDMA Network measurements. Maximum of 8 distinct uarfcndl frequencies.
		 * Minimum items: 1
		 * Maximum items: 32
		 */
		nmr?: Array<WcdmaNmr>;

		/**
		 * UTRAN pathloss (dBm)
		 * Minimum: 46
		 * Maximum: 158
		 */
		pathloss?: number | null;

		/**
		 * Received Signal Code Power (RSCP) in dBm. Power less than -120dBm should be mapped to -120. Power greater than -25dBm should be mapped to -25.
		 * Minimum: -120
		 * Maximum: -25
		 */
		rscp?: number | null;
	}

	/** WCDMA measurement */
	export interface WcdmaFormProperties {

		/**
		 * UTRAN Cell Identifier (UC-Id), 28 bits (12 bits RNC and 16 bits Cell ID). MCC + MNC + CID uniquely identifies the WCDMA cell, LAC is optional.
		 * Required
		 * Minimum: 0
		 * Maximum: 268435455
		 */
		cid: FormControl<number | null | undefined>,

		/**
		 * Location Area Code (LAC). Note, value 65534 is invalid.
		 * Minimum: 1
		 * Maximum: 65535
		 */
		lac: FormControl<number | null | undefined>,

		/**
		 * Mobile Country Code (MCC). Note: 0xx is for test networks, 1xx and 8xx are not used
		 * Required
		 * Minimum: 200
		 * Maximum: 999
		 */
		mcc: FormControl<number | null | undefined>,

		/**
		 * Mobile Network Code (MNC).
		 * Required
		 * Minimum: 0
		 * Maximum: 999
		 */
		mnc: FormControl<number | null | undefined>,

		/**
		 * UTRAN pathloss (dBm)
		 * Minimum: 46
		 * Maximum: 158
		 */
		pathloss: FormControl<number | null | undefined>,

		/**
		 * Received Signal Code Power (RSCP) in dBm. Power less than -120dBm should be mapped to -120. Power greater than -25dBm should be mapped to -25.
		 * Minimum: -120
		 * Maximum: -25
		 */
		rscp: FormControl<number | null | undefined>,
	}
	export function CreateWcdmaFormGroup() {
		return new FormGroup<WcdmaFormProperties>({
			cid: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0), Validators.max(268435455)]),
			lac: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(65535)]),
			mcc: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(200), Validators.max(999)]),
			mnc: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0), Validators.max(999)]),
			pathloss: new FormControl<number | null | undefined>(undefined, [Validators.min(46), Validators.max(158)]),
			rscp: new FormControl<number | null | undefined>(undefined, [Validators.min(-120), Validators.max(-25)]),
		});

	}


	/** Local identification parameters of WCDMA serving cell */
	export interface WcdmaLocalId {

		/**
		 * Primary Scrambling Code (PSC, Primary CPICH, Primary Control Pilot Channel).
		 * Required
		 * Minimum: 0
		 * Maximum: 511
		 */
		psc: number;

		/**
		 * UTRAN Absolute Radio Frequency Downlink (UARFCN-DL)
		 * Required
		 * Minimum: 0
		 * Maximum: 16383
		 */
		uarfcndl: number;
	}

	/** Local identification parameters of WCDMA serving cell */
	export interface WcdmaLocalIdFormProperties {

		/**
		 * Primary Scrambling Code (PSC, Primary CPICH, Primary Control Pilot Channel).
		 * Required
		 * Minimum: 0
		 * Maximum: 511
		 */
		psc: FormControl<number | null | undefined>,

		/**
		 * UTRAN Absolute Radio Frequency Downlink (UARFCN-DL)
		 * Required
		 * Minimum: 0
		 * Maximum: 16383
		 */
		uarfcndl: FormControl<number | null | undefined>,
	}
	export function CreateWcdmaLocalIdFormGroup() {
		return new FormGroup<WcdmaLocalIdFormProperties>({
			psc: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0), Validators.max(511)]),
			uarfcndl: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0), Validators.max(16383)]),
		});

	}


	/** WCDMA Network measurement */
	export interface WcdmaNmr {

		/**
		 * UTRAN Cell Identifier (UC-Id), 28 bits (12 bits RNC and 16 bits Cell ID). MCC + MNC + CID uniquely identifies the WCDMA cell, LAC is optional.
		 * Minimum: 0
		 * Maximum: 268435455
		 */
		cid?: number | null;

		/**
		 * UTRAN pathloss (dBm)
		 * Minimum: 46
		 * Maximum: 158
		 */
		pathloss?: number | null;

		/**
		 * Primary Scrambling Code (PSC, Primary CPICH, Primary Control Pilot Channel).
		 * Required
		 * Minimum: 0
		 * Maximum: 511
		 */
		psc: number;

		/**
		 * Received Signal Code Power (RSCP) in dBm. Power less than -120dBm should be mapped to -120. Power greater than -25dBm should be mapped to -25.
		 * Minimum: -120
		 * Maximum: -25
		 */
		rscp?: number | null;

		/**
		 * UTRAN Absolute Radio Frequency Downlink (UARFCN-DL)
		 * Required
		 * Minimum: 0
		 * Maximum: 16383
		 */
		uarfcndl: number;
	}

	/** WCDMA Network measurement */
	export interface WcdmaNmrFormProperties {

		/**
		 * UTRAN Cell Identifier (UC-Id), 28 bits (12 bits RNC and 16 bits Cell ID). MCC + MNC + CID uniquely identifies the WCDMA cell, LAC is optional.
		 * Minimum: 0
		 * Maximum: 268435455
		 */
		cid: FormControl<number | null | undefined>,

		/**
		 * UTRAN pathloss (dBm)
		 * Minimum: 46
		 * Maximum: 158
		 */
		pathloss: FormControl<number | null | undefined>,

		/**
		 * Primary Scrambling Code (PSC, Primary CPICH, Primary Control Pilot Channel).
		 * Required
		 * Minimum: 0
		 * Maximum: 511
		 */
		psc: FormControl<number | null | undefined>,

		/**
		 * Received Signal Code Power (RSCP) in dBm. Power less than -120dBm should be mapped to -120. Power greater than -25dBm should be mapped to -25.
		 * Minimum: -120
		 * Maximum: -25
		 */
		rscp: FormControl<number | null | undefined>,

		/**
		 * UTRAN Absolute Radio Frequency Downlink (UARFCN-DL)
		 * Required
		 * Minimum: 0
		 * Maximum: 16383
		 */
		uarfcndl: FormControl<number | null | undefined>,
	}
	export function CreateWcdmaNmrFormGroup() {
		return new FormGroup<WcdmaNmrFormProperties>({
			cid: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(268435455)]),
			pathloss: new FormControl<number | null | undefined>(undefined, [Validators.min(46), Validators.max(158)]),
			psc: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0), Validators.max(511)]),
			rscp: new FormControl<number | null | undefined>(undefined, [Validators.min(-120), Validators.max(-25)]),
			uarfcndl: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0), Validators.max(16383)]),
		});

	}


	/** WLAN measurement */
	export interface WlanLocate {

		/**
		 * The MAC address of the WLAN access point. MAC-48 address with colon (:) or hyphen (-) separators, upper or lower case hex digits. Note that if the SSID contains postfix "_nomap", the AP should not be used for positioning.
		 * Required
		 */
		mac: string;

		/**
		 * Received signal level (dBm) at the terminal
		 * Minimum: -128
		 * Maximum: 0
		 */
		rss?: number | null;
	}

	/** WLAN measurement */
	export interface WlanLocateFormProperties {

		/**
		 * The MAC address of the WLAN access point. MAC-48 address with colon (:) or hyphen (-) separators, upper or lower case hex digits. Note that if the SSID contains postfix "_nomap", the AP should not be used for positioning.
		 * Required
		 */
		mac: FormControl<string | null | undefined>,

		/**
		 * Received signal level (dBm) at the terminal
		 * Minimum: -128
		 * Maximum: 0
		 */
		rss: FormControl<number | null | undefined>,
	}
	export function CreateWlanLocateFormGroup() {
		return new FormGroup<WlanLocateFormProperties>({
			mac: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^((([0-9a-fA-F]{2}:){5})|(([0-9a-fA-F]{2}-){5}))[0-9a-fA-F]{2}$')]),
			rss: new FormControl<number | null | undefined>(undefined, [Validators.min(-128), Validators.max(0)]),
		});

	}


	/** Object containing information on a location where a measurement was taken. */
	export interface PositionLocate {

		/**
		 * Uncertainty circle radius in meters (degree of confidence according to the `confidence` parameter).
		 * Required
		 * Minimum: 1
		 */
		accuracy: number;

		/** Altitude in meters (referenced to the WGS-84 ellipsoid) negative or positive. */
		alt?: number | null;

		/**
		 * Uncertainty of the altitude estimate in meters (degree of confidence according to the `confidence` parameter). This field superceeds old `altaccuracy`.
		 * Minimum: 1
		 */
		altAccuracy?: number | null;

		/**
		 * Latitude in WGS-84 format, decimal representation ranging from -90 to 90.
		 * Required
		 * Minimum: -90
		 * Maximum: 90
		 */
		lat: number;

		/**
		 * Longitude in WGS-84 format, decimal representation ranging from -180 to 180.
		 * Required
		 * Minimum: -180
		 * Maximum: 180
		 */
		lng: number;
	}

	/** Object containing information on a location where a measurement was taken. */
	export interface PositionLocateFormProperties {

		/**
		 * Uncertainty circle radius in meters (degree of confidence according to the `confidence` parameter).
		 * Required
		 * Minimum: 1
		 */
		accuracy: FormControl<number | null | undefined>,

		/** Altitude in meters (referenced to the WGS-84 ellipsoid) negative or positive. */
		alt: FormControl<number | null | undefined>,

		/**
		 * Uncertainty of the altitude estimate in meters (degree of confidence according to the `confidence` parameter). This field superceeds old `altaccuracy`.
		 * Minimum: 1
		 */
		altAccuracy: FormControl<number | null | undefined>,

		/**
		 * Latitude in WGS-84 format, decimal representation ranging from -90 to 90.
		 * Required
		 * Minimum: -90
		 * Maximum: 90
		 */
		lat: FormControl<number | null | undefined>,

		/**
		 * Longitude in WGS-84 format, decimal representation ranging from -180 to 180.
		 * Required
		 * Minimum: -180
		 * Maximum: 180
		 */
		lng: FormControl<number | null | undefined>,
	}
	export function CreatePositionLocateFormGroup() {
		return new FormGroup<PositionLocateFormProperties>({
			accuracy: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(1)]),
			alt: new FormControl<number | null | undefined>(undefined),
			altAccuracy: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			lat: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(-90), Validators.max(90)]),
			lng: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(-180), Validators.max(180)]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Service health
		 * Tests basic health of the service
		 * Get health
		 * @return {ApiHealthStatus} Health status
		 */
		GetHealth(): Observable<ApiHealthStatus> {
			return this.http.get<ApiHealthStatus>(this.baseUri + 'health', {});
		}

		/**
		 * Location query
		 * Request WGS-84 compliant geocoordinates for a location based on 2G/3G/4G cell and/or WLAN measurements.
		 * Post locate
		 * @param {number} confidence Confidence level in percent for the accuracy/uncertainty in the location estimate response. If not specified, the default is 68 (this corresponds to a 68% probability that the true position is within the accuracy/uncertainty radius of the location estimate: the higher the number, the greater the confidence level).
		 * @param {Array<string>} fallback Acceptable fallback options for cell and WLAN positioning. Values `area` and `any` apply to cell based positioning, and value `singleWifi` applies to WLAN based positioning. Both cell and WLAN options may be specified in the same request. If both `area` and `any` are specified, then `area` is ignored.
		 * By default, cell based positioning returns cell tower level location estimates only. If you allow a WGS-84 compliant geocoordinate location estimate based on LAC, RNC, TAC, NID, or RZ areas, use the `fallback=area` setting. If you use the `fallback=any` setting, the service uses all available cell fallback methods and therefore the location estimate in the response may be at the MNC, SID, or MCC level.
		 * For privacy reasons, the precise positioning based on a single WLAN AP is not possible. You can use the `fallback=singleWifi` setting to allow less accurate positioning based on a single WLAN AP. In that case, the center location of the position estimate will be deviated and the reported accuracy radius will be larger.
		 * @param {Array<string>} desired Comma-separated list of additional data fields that the service should include in the response if data is available. The query parameter supports the value `altitude`.
		 * @param {Array<string>} required Comma-separated list of additional data fields that the service should include in the response. If the data is not available, the response contains an error message. The query parameter supports the value `altitude`.
		 * @param {Locate} requestBody Request body containing cell and/or WLAN measurement data. Cellular measurements are given in terms defined in 3GPP and 3GGP2 specifications, see the corresponsing documentation at http://www.3gpp.org.
		 * @return {PostLocateReturn} Request processed successfully and a WGS-84 compliant geocoordinate location estimate was included in the response.
		 */
		PostLocate(confidence: number | null | undefined, fallback: Array<string> | null | undefined, desired: Array<string> | null | undefined, required: Array<string> | null | undefined, requestBody: Locate): Observable<PostLocateReturn> {
			return this.http.post<PostLocateReturn>(this.baseUri + 'locate?confidence=' + confidence + '&' + fallback?.map(z => `fallback=${encodeURIComponent(z)}`).join('&') + '&' + desired?.map(z => `desired=${encodeURIComponent(z)}`).join('&') + '&' + required?.map(z => `required=${encodeURIComponent(z)}`).join('&'), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * API version
		 * Retrieves API Specification version information
		 * Get version
		 * @return {ApiVersion} Version of API
		 */
		GetApiVersion(): Observable<ApiVersion> {
			return this.http.get<ApiVersion>(this.baseUri + 'version', {});
		}
	}

	export enum PostLocateContent_Encoding { gzip = 'gzip' }

	export interface PostLocateReturn {

		/**
		 * Object containing information on a location where a measurement was taken.
		 * Required
		 */
		location: PositionLocate;
	}
	export interface PostLocateReturnFormProperties {
	}
	export function CreatePostLocateReturnFormGroup() {
		return new FormGroup<PostLocateReturnFormProperties>({
		});

	}

}

