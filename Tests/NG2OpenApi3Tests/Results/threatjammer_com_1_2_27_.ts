import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface AclGroupOriginCollectionOutput {

		/** Required */
		lists: Array<AclGroupOriginOutput>;

		/** Required */
		self: string;
	}
	export interface AclGroupOriginCollectionOutputFormProperties {

		/** Required */
		self: FormControl<string | null | undefined>,
	}
	export function CreateAclGroupOriginCollectionOutputFormGroup() {
		return new FormGroup<AclGroupOriginCollectionOutputFormProperties>({
			self: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AclGroupOriginOutput {

		/** Required */
		created_at: number;

		/** Required */
		origin: string;

		/** Required */
		self: string;

		/** Required */
		status: AclGroupOriginOutputStatus;

		/** Required */
		updated_at: number;
	}
	export interface AclGroupOriginOutputFormProperties {

		/** Required */
		created_at: FormControl<number | null | undefined>,

		/** Required */
		origin: FormControl<string | null | undefined>,

		/** Required */
		self: FormControl<string | null | undefined>,

		/** Required */
		status: FormControl<AclGroupOriginOutputStatus | null | undefined>,

		/** Required */
		updated_at: FormControl<number | null | undefined>,
	}
	export function CreateAclGroupOriginOutputFormGroup() {
		return new FormGroup<AclGroupOriginOutputFormProperties>({
			created_at: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			origin: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			self: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<AclGroupOriginOutputStatus | null | undefined>(undefined, [Validators.required]),
			updated_at: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum AclGroupOriginOutputStatus { INACTIVE = 0, ACTIVE = 1, EXPIRED = 2 }

	export interface AclListCollectionOutput {
		asns?: Array<string>;
		cidrs?: Array<string>;
		continents?: Array<string>;
		countries?: Array<string>;
		datacenters?: Array<string>;
		reported?: Array<string>;

		/** Required */
		self: string;
	}
	export interface AclListCollectionOutputFormProperties {

		/** Required */
		self: FormControl<string | null | undefined>,
	}
	export function CreateAclListCollectionOutputFormGroup() {
		return new FormGroup<AclListCollectionOutputFormProperties>({
			self: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ActivityCollectionOutput {

		/** Required */
		activities: Array<ActivityOutput>;

		/** Required */
		page: number;

		/** Required */
		page_size: number;

		/** Required */
		self: string;
	}
	export interface ActivityCollectionOutputFormProperties {

		/** Required */
		page: FormControl<number | null | undefined>,

		/** Required */
		page_size: FormControl<number | null | undefined>,

		/** Required */
		self: FormControl<string | null | undefined>,
	}
	export function CreateActivityCollectionOutputFormGroup() {
		return new FormGroup<ActivityCollectionOutputFormProperties>({
			page: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			page_size: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			self: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ActivityOutput {

		/** Required */
		created_at: number;

		/** Required */
		data: string;

		/** Required */
		description: string;

		/** Required */
		event: string;

		/** Required */
		self: string;

		/** Required */
		source: V1__models__token__SourceOutput;
	}
	export interface ActivityOutputFormProperties {

		/** Required */
		created_at: FormControl<number | null | undefined>,

		/** Required */
		data: FormControl<string | null | undefined>,

		/** Required */
		description: FormControl<string | null | undefined>,

		/** Required */
		event: FormControl<string | null | undefined>,

		/** Required */
		self: FormControl<string | null | undefined>,
	}
	export function CreateActivityOutputFormGroup() {
		return new FormGroup<ActivityOutputFormProperties>({
			created_at: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			data: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			event: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			self: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface V1__models__token__SourceOutput {

		/** Required */
		address: string;

		/** Required */
		body: string;

		/** Required */
		method: string;

		/** Required */
		status_code: number;

		/** Required */
		ua_string: string;

		/** Required */
		uri: string;
	}
	export interface V1__models__token__SourceOutputFormProperties {

		/** Required */
		address: FormControl<string | null | undefined>,

		/** Required */
		body: FormControl<string | null | undefined>,

		/** Required */
		method: FormControl<string | null | undefined>,

		/** Required */
		status_code: FormControl<number | null | undefined>,

		/** Required */
		ua_string: FormControl<string | null | undefined>,

		/** Required */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateV1__models__token__SourceOutputFormGroup() {
		return new FormGroup<V1__models__token__SourceOutputFormProperties>({
			address: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			body: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			method: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			ua_string: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			uri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AutonomousSystemOutput {

		/** Required */
		country_code: AutonomousSystemOutputCountry_code;
		description?: string | null;

		/** Required */
		name: string;

		/** Required */
		prefixes: string;

		/** Required */
		registry: string;
		registry_date?: string | null;
		risk?: AutonomousSystemOutputRisk | null;
		score?: number | null;
		self?: string | null;

		/** Required */
		status: string;
	}
	export interface AutonomousSystemOutputFormProperties {

		/** Required */
		country_code: FormControl<AutonomousSystemOutputCountry_code | null | undefined>,
		description: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		prefixes: FormControl<string | null | undefined>,

		/** Required */
		registry: FormControl<string | null | undefined>,
		registry_date: FormControl<string | null | undefined>,
		risk: FormControl<AutonomousSystemOutputRisk | null | undefined>,
		score: FormControl<number | null | undefined>,
		self: FormControl<string | null | undefined>,

		/** Required */
		status: FormControl<string | null | undefined>,
	}
	export function CreateAutonomousSystemOutputFormGroup() {
		return new FormGroup<AutonomousSystemOutputFormProperties>({
			country_code: new FormControl<AutonomousSystemOutputCountry_code | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			prefixes: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			registry: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			registry_date: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^(\d{4})(\d{2})(\d{2})$')]),
			risk: new FormControl<AutonomousSystemOutputRisk | null | undefined>(undefined),
			score: new FormControl<number | null | undefined>(undefined),
			self: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum AutonomousSystemOutputCountry_code { AF = 0, AP = 1, AX = 2, AL = 3, DZ = 4, AS = 5, AD = 6, AO = 7, AI = 8, AQ = 9, AG = 10, AR = 11, AM = 12, AW = 13, AU = 14, AT = 15, AZ = 16, BS = 17, BH = 18, BD = 19, BB = 20, BY = 21, BE = 22, BZ = 23, BJ = 24, BM = 25, BT = 26, BO = 27, BQ = 28, BA = 29, BW = 30, BV = 31, BR = 32, IO = 33, BN = 34, BG = 35, BF = 36, BI = 37, CV = 38, KH = 39, CM = 40, CA = 41, KY = 42, CF = 43, TD = 44, CL = 45, CN = 46, CX = 47, CC = 48, CO = 49, KM = 50, CG = 51, CD = 52, CK = 53, CR = 54, CI = 55, HR = 56, CU = 57, CW = 58, CY = 59, CZ = 60, DK = 61, DJ = 62, DM = 63, DO = 64, EC = 65, EG = 66, SV = 67, GQ = 68, ER = 69, EE = 70, ET = 71, FK = 72, FO = 73, FJ = 74, FI = 75, FR = 76, GF = 77, PF = 78, TF = 79, GA = 80, GM = 81, GE = 82, DE = 83, GH = 84, GI = 85, GR = 86, GL = 87, GD = 88, GP = 89, GU = 90, GT = 91, GG = 92, GN = 93, GW = 94, GY = 95, HT = 96, HM = 97, VA = 98, HN = 99, HK = 100, HU = 101, IS = 102, IN = 103, ID = 104, IR = 105, IQ = 106, IE = 107, IM = 108, IL = 109, IT = 110, JM = 111, JP = 112, JE = 113, JO = 114, KZ = 115, KE = 116, KI = 117, KP = 118, KR = 119, KW = 120, KG = 121, LA = 122, LV = 123, LB = 124, LS = 125, LR = 126, LY = 127, LI = 128, LT = 129, LU = 130, MO = 131, MK = 132, MG = 133, MW = 134, MY = 135, MV = 136, ML = 137, MT = 138, MH = 139, MQ = 140, MR = 141, MU = 142, YT = 143, MX = 144, FM = 145, MD = 146, MC = 147, MN = 148, ME = 149, MS = 150, MA = 151, MZ = 152, MM = 153, NA = 154, NR = 155, NP = 156, NL = 157, NC = 158, NZ = 159, NI = 160, NE = 161, NG = 162, NU = 163, NF = 164, MP = 165, NO = 166, OM = 167, PK = 168, PW = 169, PS = 170, PA = 171, PG = 172, PY = 173, PE = 174, PH = 175, PN = 176, PL = 177, PT = 178, PR = 179, QA = 180, RE = 181, RO = 182, RU = 183, RW = 184, BL = 185, SH = 186, KN = 187, LC = 188, MF = 189, PM = 190, VC = 191, WS = 192, SM = 193, ST = 194, SA = 195, SN = 196, RS = 197, SC = 198, SL = 199, SG = 200, SX = 201, SK = 202, SI = 203, SB = 204, SO = 205, ZA = 206, GS = 207, SS = 208, ES = 209, LK = 210, SD = 211, SR = 212, SJ = 213, SZ = 214, SE = 215, CH = 216, SY = 217, TW = 218, TJ = 219, TZ = 220, TH = 221, TL = 222, TG = 223, TK = 224, TO = 225, TT = 226, TN = 227, TR = 228, TM = 229, TC = 230, TV = 231, UG = 232, UA = 233, AE = 234, GB = 235, US = 236, UM = 237, UY = 238, UZ = 239, VU = 240, VE = 241, VN = 242, VG = 243, VI = 244, WF = 245, EH = 246, YE = 247, ZM = 248, ZW = 249, ZZ = 250, EU = 251, 'RESERVED BY RFC6793' = 252 }

	export enum AutonomousSystemOutputRisk { UNKNOWN = 0, LOW = 1, MEDIUM = 2, HIGH = 3 }


	/** AutonomousSystemPrefixResponse class to return the information to the user */
	export interface AutonomousSystemPrefixOutput {
		asn?: string | null;

		/** Required */
		description: string;

		/** Required */
		mantainer: string;

		/** Required */
		object_type: string;
		registry_date?: string | null;
		registry_status?: string | null;
		risk?: AutonomousSystemOutputRisk | null;
		score?: number | null;
		self?: string | null;
	}

	/** AutonomousSystemPrefixResponse class to return the information to the user */
	export interface AutonomousSystemPrefixOutputFormProperties {
		asn: FormControl<string | null | undefined>,

		/** Required */
		description: FormControl<string | null | undefined>,

		/** Required */
		mantainer: FormControl<string | null | undefined>,

		/** Required */
		object_type: FormControl<string | null | undefined>,
		registry_date: FormControl<string | null | undefined>,
		registry_status: FormControl<string | null | undefined>,
		risk: FormControl<AutonomousSystemOutputRisk | null | undefined>,
		score: FormControl<number | null | undefined>,
		self: FormControl<string | null | undefined>,
	}
	export function CreateAutonomousSystemPrefixOutputFormGroup() {
		return new FormGroup<AutonomousSystemPrefixOutputFormProperties>({
			asn: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			mantainer: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			object_type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			registry_date: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^(\d{4})(\d{2})(\d{2})$')]),
			registry_status: new FormControl<string | null | undefined>(undefined),
			risk: new FormControl<AutonomousSystemOutputRisk | null | undefined>(undefined),
			score: new FormControl<number | null | undefined>(undefined),
			self: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AutonomousSystemPrefixesOutput {
		asn?: string | null;

		/** Required */
		prefixes_v4: Array<AutonomousSystemPrefixOutput>;

		/** Required */
		prefixes_v6: Array<AutonomousSystemPrefixOutput>;

		/** Required */
		self: string;
	}
	export interface AutonomousSystemPrefixesOutputFormProperties {
		asn: FormControl<string | null | undefined>,

		/** Required */
		self: FormControl<string | null | undefined>,
	}
	export function CreateAutonomousSystemPrefixesOutputFormGroup() {
		return new FormGroup<AutonomousSystemPrefixesOutputFormProperties>({
			asn: new FormControl<string | null | undefined>(undefined),
			self: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The Registry information */
	export interface AutonomousSystemRegistryOutput {

		/** Required */
		code: string;

		/** Required */
		name: string;

		/** Required */
		self: string;
	}

	/** The Registry information */
	export interface AutonomousSystemRegistryOutputFormProperties {

		/** Required */
		code: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		self: FormControl<string | null | undefined>,
	}
	export function CreateAutonomousSystemRegistryOutputFormGroup() {
		return new FormGroup<AutonomousSystemRegistryOutputFormProperties>({
			code: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			self: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The Status information */
	export interface AutonomousSystemStatusOutput {

		/** Required */
		code: string;

		/** Required */
		name: string;

		/** Required */
		self: string;
	}

	/** The Status information */
	export interface AutonomousSystemStatusOutputFormProperties {

		/** Required */
		code: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		self: FormControl<string | null | undefined>,
	}
	export function CreateAutonomousSystemStatusOutputFormGroup() {
		return new FormGroup<AutonomousSystemStatusOutputFormProperties>({
			code: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			self: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Body_assess_ip_set_csv_v1_assess_ip_csv_post {

		/**
		 * The CSV file with the IP addresses
		 * Required
		 */
		csv_file: string;
	}
	export interface Body_assess_ip_set_csv_v1_assess_ip_csv_postFormProperties {

		/**
		 * The CSV file with the IP addresses
		 * Required
		 */
		csv_file: FormControl<string | null | undefined>,
	}
	export function CreateBody_assess_ip_set_csv_v1_assess_ip_csv_postFormGroup() {
		return new FormGroup<Body_assess_ip_set_csv_v1_assess_ip_csv_postFormProperties>({
			csv_file: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Body_assess_ip_set_csv_v1_geo_csv_post {

		/**
		 * The CSV file with the IP addresses
		 * Required
		 */
		csv_file: string;
	}
	export interface Body_assess_ip_set_csv_v1_geo_csv_postFormProperties {

		/**
		 * The CSV file with the IP addresses
		 * Required
		 */
		csv_file: FormControl<string | null | undefined>,
	}
	export function CreateBody_assess_ip_set_csv_v1_geo_csv_postFormGroup() {
		return new FormGroup<Body_assess_ip_set_csv_v1_geo_csv_postFormProperties>({
			csv_file: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Body_change_status_of_the_allowlist_v1_allowlist_public__allowlist_id__put {

		/**
		 * The status of the list. ACTIVE or INACTIVE
		 * Required
		 */
		status: Body_change_status_of_the_allowlist_v1_allowlist_public__allowlist_id__putStatus;
	}
	export interface Body_change_status_of_the_allowlist_v1_allowlist_public__allowlist_id__putFormProperties {

		/**
		 * The status of the list. ACTIVE or INACTIVE
		 * Required
		 */
		status: FormControl<Body_change_status_of_the_allowlist_v1_allowlist_public__allowlist_id__putStatus | null | undefined>,
	}
	export function CreateBody_change_status_of_the_allowlist_v1_allowlist_public__allowlist_id__putFormGroup() {
		return new FormGroup<Body_change_status_of_the_allowlist_v1_allowlist_public__allowlist_id__putFormProperties>({
			status: new FormControl<Body_change_status_of_the_allowlist_v1_allowlist_public__allowlist_id__putStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum Body_change_status_of_the_allowlist_v1_allowlist_public__allowlist_id__putStatus { ACTIVE = 0, INACTIVE = 1 }

	export interface Body_change_status_of_the_denylist_v1_denylist_public__denylist_id__put {

		/**
		 * The status of the list. ACTIVE or INACTIVE
		 * Required
		 */
		status: Body_change_status_of_the_allowlist_v1_allowlist_public__allowlist_id__putStatus;
	}
	export interface Body_change_status_of_the_denylist_v1_denylist_public__denylist_id__putFormProperties {

		/**
		 * The status of the list. ACTIVE or INACTIVE
		 * Required
		 */
		status: FormControl<Body_change_status_of_the_allowlist_v1_allowlist_public__allowlist_id__putStatus | null | undefined>,
	}
	export function CreateBody_change_status_of_the_denylist_v1_denylist_public__denylist_id__putFormGroup() {
		return new FormGroup<Body_change_status_of_the_denylist_v1_denylist_public__denylist_id__putFormProperties>({
			status: new FormControl<Body_change_status_of_the_allowlist_v1_allowlist_public__allowlist_id__putStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Body_change_status_of_the_origin_allowlist_v1_allowlist_private__allowlist_id__origin_put {

		/**
		 * The protocol and domain of the origin to change the status
		 * Required
		 * Max length: 2083
		 * Min length: 1
		 */
		origin: string;

		/**
		 * The status of the list. ACTIVE, INACTIVE, DELETED
		 * Required
		 */
		status: Body_change_status_of_the_origin_allowlist_v1_allowlist_private__allowlist_id__origin_putStatus;
	}
	export interface Body_change_status_of_the_origin_allowlist_v1_allowlist_private__allowlist_id__origin_putFormProperties {

		/**
		 * The protocol and domain of the origin to change the status
		 * Required
		 * Max length: 2083
		 * Min length: 1
		 */
		origin: FormControl<string | null | undefined>,

		/**
		 * The status of the list. ACTIVE, INACTIVE, DELETED
		 * Required
		 */
		status: FormControl<Body_change_status_of_the_origin_allowlist_v1_allowlist_private__allowlist_id__origin_putStatus | null | undefined>,
	}
	export function CreateBody_change_status_of_the_origin_allowlist_v1_allowlist_private__allowlist_id__origin_putFormGroup() {
		return new FormGroup<Body_change_status_of_the_origin_allowlist_v1_allowlist_private__allowlist_id__origin_putFormProperties>({
			origin: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(2083)]),
			status: new FormControl<Body_change_status_of_the_origin_allowlist_v1_allowlist_private__allowlist_id__origin_putStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum Body_change_status_of_the_origin_allowlist_v1_allowlist_private__allowlist_id__origin_putStatus { ACTIVE = 0, INACTIVE = 1, DELETED = 2 }

	export interface Body_change_status_of_the_origin_allowlist_v1_allowlist_public__allowlist_id__origin_put {

		/**
		 * The protocol and domain of the origin to change the status
		 * Required
		 * Max length: 2083
		 * Min length: 1
		 */
		origin: string;

		/**
		 * The status of the list. ACTIVE, INACTIVE, DELETED
		 * Required
		 */
		status: Body_change_status_of_the_origin_allowlist_v1_allowlist_private__allowlist_id__origin_putStatus;
	}
	export interface Body_change_status_of_the_origin_allowlist_v1_allowlist_public__allowlist_id__origin_putFormProperties {

		/**
		 * The protocol and domain of the origin to change the status
		 * Required
		 * Max length: 2083
		 * Min length: 1
		 */
		origin: FormControl<string | null | undefined>,

		/**
		 * The status of the list. ACTIVE, INACTIVE, DELETED
		 * Required
		 */
		status: FormControl<Body_change_status_of_the_origin_allowlist_v1_allowlist_private__allowlist_id__origin_putStatus | null | undefined>,
	}
	export function CreateBody_change_status_of_the_origin_allowlist_v1_allowlist_public__allowlist_id__origin_putFormGroup() {
		return new FormGroup<Body_change_status_of_the_origin_allowlist_v1_allowlist_public__allowlist_id__origin_putFormProperties>({
			origin: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(2083)]),
			status: new FormControl<Body_change_status_of_the_origin_allowlist_v1_allowlist_private__allowlist_id__origin_putStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Body_change_status_of_the_origin_denylist_v1_denylist_private__denylist_id__origin_put {

		/**
		 * The protocol and domain of the origin to change the status
		 * Required
		 * Max length: 2083
		 * Min length: 1
		 */
		origin: string;

		/**
		 * The status of the list. ACTIVE, INACTIVE, DELETED
		 * Required
		 */
		status: Body_change_status_of_the_origin_allowlist_v1_allowlist_private__allowlist_id__origin_putStatus;
	}
	export interface Body_change_status_of_the_origin_denylist_v1_denylist_private__denylist_id__origin_putFormProperties {

		/**
		 * The protocol and domain of the origin to change the status
		 * Required
		 * Max length: 2083
		 * Min length: 1
		 */
		origin: FormControl<string | null | undefined>,

		/**
		 * The status of the list. ACTIVE, INACTIVE, DELETED
		 * Required
		 */
		status: FormControl<Body_change_status_of_the_origin_allowlist_v1_allowlist_private__allowlist_id__origin_putStatus | null | undefined>,
	}
	export function CreateBody_change_status_of_the_origin_denylist_v1_denylist_private__denylist_id__origin_putFormGroup() {
		return new FormGroup<Body_change_status_of_the_origin_denylist_v1_denylist_private__denylist_id__origin_putFormProperties>({
			origin: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(2083)]),
			status: new FormControl<Body_change_status_of_the_origin_allowlist_v1_allowlist_private__allowlist_id__origin_putStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Body_change_status_of_the_origin_denylist_v1_denylist_public__denylist_id__origin_put {

		/**
		 * The protocol and domain of the origin to change the status
		 * Required
		 * Max length: 2083
		 * Min length: 1
		 */
		origin: string;

		/**
		 * The status of the list. ACTIVE, INACTIVE, DELETED
		 * Required
		 */
		status: Body_change_status_of_the_origin_allowlist_v1_allowlist_private__allowlist_id__origin_putStatus;
	}
	export interface Body_change_status_of_the_origin_denylist_v1_denylist_public__denylist_id__origin_putFormProperties {

		/**
		 * The protocol and domain of the origin to change the status
		 * Required
		 * Max length: 2083
		 * Min length: 1
		 */
		origin: FormControl<string | null | undefined>,

		/**
		 * The status of the list. ACTIVE, INACTIVE, DELETED
		 * Required
		 */
		status: FormControl<Body_change_status_of_the_origin_allowlist_v1_allowlist_private__allowlist_id__origin_putStatus | null | undefined>,
	}
	export function CreateBody_change_status_of_the_origin_denylist_v1_denylist_public__denylist_id__origin_putFormGroup() {
		return new FormGroup<Body_change_status_of_the_origin_denylist_v1_denylist_public__denylist_id__origin_putFormProperties>({
			origin: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(2083)]),
			status: new FormControl<Body_change_status_of_the_origin_allowlist_v1_allowlist_private__allowlist_id__origin_putStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Body_create_private_allowlist_of_the_user_v1_allowlist_private_post {

		/**
		 * The information needed to create a new allowlist
		 * Required
		 */
		payload: PrivateAclGroupListInput;
	}
	export interface Body_create_private_allowlist_of_the_user_v1_allowlist_private_postFormProperties {
	}
	export function CreateBody_create_private_allowlist_of_the_user_v1_allowlist_private_postFormGroup() {
		return new FormGroup<Body_create_private_allowlist_of_the_user_v1_allowlist_private_postFormProperties>({
		});

	}

	export interface PrivateAclGroupListInput {

		/** Required */
		description: string;

		/** Required */
		name: string;

		/** Required */
		resource_type: PrivateAclGroupListInputResource_type;

		/** Required */
		tags: Array<string>;
		ttl?: number | null;
	}
	export interface PrivateAclGroupListInputFormProperties {

		/** Required */
		description: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		resource_type: FormControl<PrivateAclGroupListInputResource_type | null | undefined>,
		ttl: FormControl<number | null | undefined>,
	}
	export function CreatePrivateAclGroupListInputFormGroup() {
		return new FormGroup<PrivateAclGroupListInputFormProperties>({
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource_type: new FormControl<PrivateAclGroupListInputResource_type | null | undefined>(undefined, [Validators.required]),
			ttl: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum PrivateAclGroupListInputResource_type { UNKNOWN = 0, CIDR = 1, COUNTRY = 2, CONTINENT = 3, AS = 4, DATACENTER = 5, USERAGENT = 6 }

	export interface Body_create_private_denylist_of_the_user_v1_denylist_private_post {

		/**
		 * The information needed to create a new denylist
		 * Required
		 */
		payload: PrivateAclGroupListInput;
	}
	export interface Body_create_private_denylist_of_the_user_v1_denylist_private_postFormProperties {
	}
	export function CreateBody_create_private_denylist_of_the_user_v1_denylist_private_postFormGroup() {
		return new FormGroup<Body_create_private_denylist_of_the_user_v1_denylist_private_postFormProperties>({
		});

	}

	export interface Body_delete_token_v1_origin_token_delete {

		/** Required */
		origin_token_id: string;
	}
	export interface Body_delete_token_v1_origin_token_deleteFormProperties {

		/** Required */
		origin_token_id: FormControl<string | null | undefined>,
	}
	export function CreateBody_delete_token_v1_origin_token_deleteFormGroup() {
		return new FormGroup<Body_delete_token_v1_origin_token_deleteFormProperties>({
			origin_token_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Body_disable_origin_token_v1_origin_token_disable_put {

		/** Required */
		origin_token_id: string;
	}
	export interface Body_disable_origin_token_v1_origin_token_disable_putFormProperties {

		/** Required */
		origin_token_id: FormControl<string | null | undefined>,
	}
	export function CreateBody_disable_origin_token_v1_origin_token_disable_putFormGroup() {
		return new FormGroup<Body_disable_origin_token_v1_origin_token_disable_putFormProperties>({
			origin_token_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Body_enable_origin_token_v1_origin_token_enable_put {

		/** Required */
		origin_token_id: string;
	}
	export interface Body_enable_origin_token_v1_origin_token_enable_putFormProperties {

		/** Required */
		origin_token_id: FormControl<string | null | undefined>,
	}
	export function CreateBody_enable_origin_token_v1_origin_token_enable_putFormGroup() {
		return new FormGroup<Body_enable_origin_token_v1_origin_token_enable_putFormProperties>({
			origin_token_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Body_parse_user_agents_csv_v1_ua_csv_post {

		/**
		 * The CSV file with the User Agents to parse
		 * Required
		 */
		csv_file: string;
	}
	export interface Body_parse_user_agents_csv_v1_ua_csv_postFormProperties {

		/**
		 * The CSV file with the User Agents to parse
		 * Required
		 */
		csv_file: FormControl<string | null | undefined>,
	}
	export function CreateBody_parse_user_agents_csv_v1_ua_csv_postFormGroup() {
		return new FormGroup<Body_parse_user_agents_csv_v1_ua_csv_postFormProperties>({
			csv_file: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Body_query_asn_prefix_information_v1_asn_prefix_post {

		/** Required */
		prefix: string;
	}
	export interface Body_query_asn_prefix_information_v1_asn_prefix_postFormProperties {

		/** Required */
		prefix: FormControl<string | null | undefined>,
	}
	export function CreateBody_query_asn_prefix_information_v1_asn_prefix_postFormGroup() {
		return new FormGroup<Body_query_asn_prefix_information_v1_asn_prefix_postFormProperties>({
			prefix: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Body_query_datacenter_prefix_information_v1_datacenter_prefix_post {

		/** Required */
		prefix: string;
	}
	export interface Body_query_datacenter_prefix_information_v1_datacenter_prefix_postFormProperties {

		/** Required */
		prefix: FormControl<string | null | undefined>,
	}
	export function CreateBody_query_datacenter_prefix_information_v1_datacenter_prefix_postFormGroup() {
		return new FormGroup<Body_query_datacenter_prefix_information_v1_datacenter_prefix_postFormProperties>({
			prefix: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Body_query_origin_status_v1_origin_status_post {

		/** The IP address to query the status */
		address?: string;

		/** The cookie id to query the status */
		cookie_id?: string | null;
	}
	export interface Body_query_origin_status_v1_origin_status_postFormProperties {

		/** The IP address to query the status */
		address: FormControl<string | null | undefined>,

		/** The cookie id to query the status */
		cookie_id: FormControl<string | null | undefined>,
	}
	export function CreateBody_query_origin_status_v1_origin_status_postFormGroup() {
		return new FormGroup<Body_query_origin_status_v1_origin_status_postFormProperties>({
			address: new FormControl<string | null | undefined>(undefined),
			cookie_id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Body_query_origin_token_info_v1_origin_token_post {

		/** Required */
		origin_token_id: string;
	}
	export interface Body_query_origin_token_info_v1_origin_token_postFormProperties {

		/** Required */
		origin_token_id: FormControl<string | null | undefined>,
	}
	export function CreateBody_query_origin_token_info_v1_origin_token_postFormGroup() {
		return new FormGroup<Body_query_origin_token_info_v1_origin_token_postFormProperties>({
			origin_token_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Body_update_configuration_origin_v1_origin_put {

		/** The configuration information to store in the origin. */
		config?: string | null;

		/**
		 * The origin site to modify the configruation
		 * Required
		 */
		origin: string;
	}
	export interface Body_update_configuration_origin_v1_origin_putFormProperties {

		/** The configuration information to store in the origin. */
		config: FormControl<string | null | undefined>,

		/**
		 * The origin site to modify the configruation
		 * Required
		 */
		origin: FormControl<string | null | undefined>,
	}
	export function CreateBody_update_configuration_origin_v1_origin_putFormGroup() {
		return new FormGroup<Body_update_configuration_origin_v1_origin_putFormProperties>({
			config: new FormControl<string | null | undefined>(undefined),
			origin: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Body_update_origin_status_v1_origin_status_put {

		/** The log id to change the status */
		log_id?: string | null;

		/** The scope to change the status */
		scope?: Body_update_origin_status_v1_origin_status_putScope | null;

		/** The status id to change the details */
		status?: Body_update_origin_status_v1_origin_status_putStatus | null;
	}
	export interface Body_update_origin_status_v1_origin_status_putFormProperties {

		/** The log id to change the status */
		log_id: FormControl<string | null | undefined>,

		/** The scope to change the status */
		scope: FormControl<Body_update_origin_status_v1_origin_status_putScope | null | undefined>,

		/** The status id to change the details */
		status: FormControl<Body_update_origin_status_v1_origin_status_putStatus | null | undefined>,
	}
	export function CreateBody_update_origin_status_v1_origin_status_putFormGroup() {
		return new FormGroup<Body_update_origin_status_v1_origin_status_putFormProperties>({
			log_id: new FormControl<string | null | undefined>(undefined),
			scope: new FormControl<Body_update_origin_status_v1_origin_status_putScope | null | undefined>(undefined),
			status: new FormControl<Body_update_origin_status_v1_origin_status_putStatus | null | undefined>(undefined),
		});

	}

	export enum Body_update_origin_status_v1_origin_status_putScope { address_and_cookie = 0, address = 1, cookie = 2 }

	export enum Body_update_origin_status_v1_origin_status_putStatus { pass = 0, block = 1, challenge = 2, bypass = 3, ignore = 4 }

	export interface Body_update_private_allowlist_of_the_user_v1_allowlist_private__allowlist_id__put {

		/** The human readable full description of the list */
		description?: string | null;

		/** The name of the list */
		name?: string | null;

		/** The list of tags to associate with the list */
		tags?: Array<string>;

		/** Optional. The Time To Live (TTL) of a resource in the list in seconds. */
		ttl?: number | null;
	}
	export interface Body_update_private_allowlist_of_the_user_v1_allowlist_private__allowlist_id__putFormProperties {

		/** The human readable full description of the list */
		description: FormControl<string | null | undefined>,

		/** The name of the list */
		name: FormControl<string | null | undefined>,

		/** Optional. The Time To Live (TTL) of a resource in the list in seconds. */
		ttl: FormControl<number | null | undefined>,
	}
	export function CreateBody_update_private_allowlist_of_the_user_v1_allowlist_private__allowlist_id__putFormGroup() {
		return new FormGroup<Body_update_private_allowlist_of_the_user_v1_allowlist_private__allowlist_id__putFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			ttl: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Body_update_private_content_of_the_allowlist_of_the_user_v1_allowlist_private__allowlist_id__content_put {

		/** The name of the resources to append to the allowlist */
		append?: Array<string>;

		/** The name of the resources to remove from the allowlist */
		remove?: Array<string>;
	}
	export interface Body_update_private_content_of_the_allowlist_of_the_user_v1_allowlist_private__allowlist_id__content_putFormProperties {
	}
	export function CreateBody_update_private_content_of_the_allowlist_of_the_user_v1_allowlist_private__allowlist_id__content_putFormGroup() {
		return new FormGroup<Body_update_private_content_of_the_allowlist_of_the_user_v1_allowlist_private__allowlist_id__content_putFormProperties>({
		});

	}

	export interface Body_update_private_content_of_the_denylist_of_the_user_v1_denylist_private__denylist_id__content_put {

		/** The name of the resources to append to the denylist */
		append?: Array<string>;

		/** The name of the resources to remove from the denylist */
		remove?: Array<string>;
	}
	export interface Body_update_private_content_of_the_denylist_of_the_user_v1_denylist_private__denylist_id__content_putFormProperties {
	}
	export function CreateBody_update_private_content_of_the_denylist_of_the_user_v1_denylist_private__denylist_id__content_putFormGroup() {
		return new FormGroup<Body_update_private_content_of_the_denylist_of_the_user_v1_denylist_private__denylist_id__content_putFormProperties>({
		});

	}

	export interface Body_update_private_denylist_of_the_user_v1_denylist_private__denylist_id__put {

		/** The human readable full description of the list */
		description?: string | null;

		/** The name of the list */
		name?: string | null;

		/** The list of tags to associate with the list */
		tags?: Array<string>;

		/** Optional. The Time To Live (TTL) of a resource in the list in seconds. */
		ttl?: number | null;
	}
	export interface Body_update_private_denylist_of_the_user_v1_denylist_private__denylist_id__putFormProperties {

		/** The human readable full description of the list */
		description: FormControl<string | null | undefined>,

		/** The name of the list */
		name: FormControl<string | null | undefined>,

		/** Optional. The Time To Live (TTL) of a resource in the list in seconds. */
		ttl: FormControl<number | null | undefined>,
	}
	export function CreateBody_update_private_denylist_of_the_user_v1_denylist_private__denylist_id__putFormGroup() {
		return new FormGroup<Body_update_private_denylist_of_the_user_v1_denylist_private__denylist_id__putFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			ttl: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DatacenterOutput {

		/** Required */
		asn: string;
		description?: string | null;

		/** Required */
		name: string;

		/** Required */
		prefixes: string;
		risk?: AutonomousSystemOutputRisk | null;
		score?: number | null;

		/** Required */
		self: string;

		/** Required */
		source: string;
		status?: DatacenterOutputStatus | null;
	}
	export interface DatacenterOutputFormProperties {

		/** Required */
		asn: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		prefixes: FormControl<string | null | undefined>,
		risk: FormControl<AutonomousSystemOutputRisk | null | undefined>,
		score: FormControl<number | null | undefined>,

		/** Required */
		self: FormControl<string | null | undefined>,

		/** Required */
		source: FormControl<string | null | undefined>,
		status: FormControl<DatacenterOutputStatus | null | undefined>,
	}
	export function CreateDatacenterOutputFormGroup() {
		return new FormGroup<DatacenterOutputFormProperties>({
			asn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			prefixes: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			risk: new FormControl<AutonomousSystemOutputRisk | null | undefined>(undefined),
			score: new FormControl<number | null | undefined>(undefined),
			self: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			source: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<DatacenterOutputStatus | null | undefined>(undefined),
		});

	}

	export enum DatacenterOutputStatus { disabled = 0, enabled = 1 }

	export interface DatacenterPrefixOutput {

		/** Required */
		datacenter: string;
		ip_abuse_total?: number | null;
		max_score?: number | null;
		min_score?: number | null;
		risk?: AutonomousSystemOutputRisk | null;
		score?: number | null;
		self?: string | null;
	}
	export interface DatacenterPrefixOutputFormProperties {

		/** Required */
		datacenter: FormControl<string | null | undefined>,
		ip_abuse_total: FormControl<number | null | undefined>,
		max_score: FormControl<number | null | undefined>,
		min_score: FormControl<number | null | undefined>,
		risk: FormControl<AutonomousSystemOutputRisk | null | undefined>,
		score: FormControl<number | null | undefined>,
		self: FormControl<string | null | undefined>,
	}
	export function CreateDatacenterPrefixOutputFormGroup() {
		return new FormGroup<DatacenterPrefixOutputFormProperties>({
			datacenter: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ip_abuse_total: new FormControl<number | null | undefined>(undefined),
			max_score: new FormControl<number | null | undefined>(undefined),
			min_score: new FormControl<number | null | undefined>(undefined),
			risk: new FormControl<AutonomousSystemOutputRisk | null | undefined>(undefined),
			score: new FormControl<number | null | undefined>(undefined),
			self: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DatacenterPrefixesOutput {

		/** Required */
		prefixes_v4: Array<DatacenterPrefixOutput>;

		/** Required */
		prefixes_v6: Array<DatacenterPrefixOutput>;

		/** Required */
		self: string;
	}
	export interface DatacenterPrefixesOutputFormProperties {

		/** Required */
		self: FormControl<string | null | undefined>,
	}
	export function CreateDatacenterPrefixesOutputFormGroup() {
		return new FormGroup<DatacenterPrefixesOutputFormProperties>({
			self: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DatasetTypeCollectionOutput {

		/** Required */
		self: string;

		/** Required */
		types: Array<DatasetTypeOutput>;
	}
	export interface DatasetTypeCollectionOutputFormProperties {

		/** Required */
		self: FormControl<string | null | undefined>,
	}
	export function CreateDatasetTypeCollectionOutputFormGroup() {
		return new FormGroup<DatasetTypeCollectionOutputFormProperties>({
			self: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The Status information */
	export interface DatasetTypeOutput {

		/** Required */
		description: string;

		/** Required */
		items: number;

		/** Required */
		name: string;

		/** Required */
		self: string;

		/** Required */
		status: DatasetTypeOutputStatus;

		/** Required */
		type: DatasetTypeOutputType;
	}

	/** The Status information */
	export interface DatasetTypeOutputFormProperties {

		/** Required */
		description: FormControl<string | null | undefined>,

		/** Required */
		items: FormControl<number | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		self: FormControl<string | null | undefined>,

		/** Required */
		status: FormControl<DatasetTypeOutputStatus | null | undefined>,

		/** Required */
		type: FormControl<DatasetTypeOutputType | null | undefined>,
	}
	export function CreateDatasetTypeOutputFormGroup() {
		return new FormGroup<DatasetTypeOutputFormProperties>({
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			items: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			self: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<DatasetTypeOutputStatus | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<DatasetTypeOutputType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum DatasetTypeOutputStatus { ENABLED = 0, DISABLED = 1 }

	export enum DatasetTypeOutputType { ip = 0, domain = 1 }

	export interface DeviceOutput {

		/** Required */
		code: string;

		/** Required */
		description: string;
	}
	export interface DeviceOutputFormProperties {

		/** Required */
		code: FormControl<string | null | undefined>,

		/** Required */
		description: FormControl<string | null | undefined>,
	}
	export function CreateDeviceOutputFormGroup() {
		return new FormGroup<DeviceOutputFormProperties>({
			code: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface FamilyOutput {

		/** Required */
		code: string;

		/** Required */
		description: string;
	}
	export interface FamilyOutputFormProperties {

		/** Required */
		code: FormControl<string | null | undefined>,

		/** Required */
		description: FormControl<string | null | undefined>,
	}
	export function CreateFamilyOutputFormGroup() {
		return new FormGroup<FamilyOutputFormProperties>({
			code: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GeoIPCollectionOutput {

		/** Required */
		results: Array<GeoIPOutput>;

		/** Required */
		self: string;
	}
	export interface GeoIPCollectionOutputFormProperties {

		/** Required */
		self: FormControl<string | null | undefined>,
	}
	export function CreateGeoIPCollectionOutputFormGroup() {
		return new FormGroup<GeoIPCollectionOutputFormProperties>({
			self: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GeoIPOutput {

		/** Required */
		accuracy_radius: number;

		/** Required */
		asn_country_iso_code: string;

		/** Required */
		city_geoname_code: number;

		/** Required */
		city_name: string;

		/** Required */
		continent_code: string;

		/** Required */
		country_iso_code: string;

		/** Required */
		hostnames: Array<string>;

		/** Required */
		latitude: number;

		/** Required */
		longitude: number;

		/** Required */
		postal_code: string;

		/** Required */
		region_geoname_code: number;

		/** Required */
		region_name: string;
		self?: string | null;

		/** Required */
		time_zone: string;
	}
	export interface GeoIPOutputFormProperties {

		/** Required */
		accuracy_radius: FormControl<number | null | undefined>,

		/** Required */
		asn_country_iso_code: FormControl<string | null | undefined>,

		/** Required */
		city_geoname_code: FormControl<number | null | undefined>,

		/** Required */
		city_name: FormControl<string | null | undefined>,

		/** Required */
		continent_code: FormControl<string | null | undefined>,

		/** Required */
		country_iso_code: FormControl<string | null | undefined>,

		/** Required */
		latitude: FormControl<number | null | undefined>,

		/** Required */
		longitude: FormControl<number | null | undefined>,

		/** Required */
		postal_code: FormControl<string | null | undefined>,

		/** Required */
		region_geoname_code: FormControl<number | null | undefined>,

		/** Required */
		region_name: FormControl<string | null | undefined>,
		self: FormControl<string | null | undefined>,

		/** Required */
		time_zone: FormControl<string | null | undefined>,
	}
	export function CreateGeoIPOutputFormGroup() {
		return new FormGroup<GeoIPOutputFormProperties>({
			accuracy_radius: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			asn_country_iso_code: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			city_geoname_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			city_name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			continent_code: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			country_iso_code: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			latitude: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			longitude: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			postal_code: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			region_geoname_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			region_name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			self: new FormControl<string | null | undefined>(undefined),
			time_zone: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface HTTPValidationError {
		detail?: Array<ValidationError>;
	}
	export interface HTTPValidationErrorFormProperties {
	}
	export function CreateHTTPValidationErrorFormGroup() {
		return new FormGroup<HTTPValidationErrorFormProperties>({
		});

	}

	export interface ValidationError {

		/** Required */
		loc: Array<string>;

		/** Required */
		msg: string;

		/** Required */
		type: string;
	}
	export interface ValidationErrorFormProperties {

		/** Required */
		msg: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<string | null | undefined>,
	}
	export function CreateValidationErrorFormGroup() {
		return new FormGroup<ValidationErrorFormProperties>({
			msg: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface IPAssessmentCollectionOutput {

		/** Required */
		results: Array<IPAssessmentOutput>;

		/** Required */
		self: string;
	}
	export interface IPAssessmentCollectionOutputFormProperties {

		/** Required */
		self: FormControl<string | null | undefined>,
	}
	export function CreateIPAssessmentCollectionOutputFormGroup() {
		return new FormGroup<IPAssessmentCollectionOutputFormProperties>({
			self: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface IPAssessmentOutput {

		/** Required */
		allowlisted: string;

		/** Required */
		asn: string;

		/** Required */
		asn_prefix: string;

		/** Required */
		datacenter: string;

		/** Required */
		datacenter_prefix: string;

		/** Required */
		datasets: Array<string>;

		/** Required */
		denylisted: string;

		/** Required */
		first_appearance: Array<string>;

		/** Required */
		last_appearance: Array<string>;

		/** Required */
		reason: string;

		/** Required */
		risk: AutonomousSystemOutputRisk;
		score?: number | null;
		self?: string | null;

		/** Required */
		sources: Array<string>;
	}
	export interface IPAssessmentOutputFormProperties {

		/** Required */
		allowlisted: FormControl<string | null | undefined>,

		/** Required */
		asn: FormControl<string | null | undefined>,

		/** Required */
		asn_prefix: FormControl<string | null | undefined>,

		/** Required */
		datacenter: FormControl<string | null | undefined>,

		/** Required */
		datacenter_prefix: FormControl<string | null | undefined>,

		/** Required */
		denylisted: FormControl<string | null | undefined>,

		/** Required */
		reason: FormControl<string | null | undefined>,

		/** Required */
		risk: FormControl<AutonomousSystemOutputRisk | null | undefined>,
		score: FormControl<number | null | undefined>,
		self: FormControl<string | null | undefined>,
	}
	export function CreateIPAssessmentOutputFormGroup() {
		return new FormGroup<IPAssessmentOutputFormProperties>({
			allowlisted: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			asn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			asn_prefix: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			datacenter: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			datacenter_prefix: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			denylisted: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			reason: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			risk: new FormControl<AutonomousSystemOutputRisk | null | undefined>(undefined, [Validators.required]),
			score: new FormControl<number | null | undefined>(undefined),
			self: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface IPListCollectionOutput {

		/** Required */
		addresses: Array<IPListOutput>;

		/** Required */
		self: string;
	}
	export interface IPListCollectionOutputFormProperties {

		/** Required */
		self: FormControl<string | null | undefined>,
	}
	export function CreateIPListCollectionOutputFormGroup() {
		return new FormGroup<IPListCollectionOutputFormProperties>({
			self: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface IPListOutput {

		/** Required */
		dataset: string;

		/** Required */
		expiry: number;

		/** Required */
		last_report: number;

		/** Required */
		protocol: IPListOutputProtocol;

		/** Required */
		self: string;
		tags?: Array<string>;

		/** Required */
		total_reports: number;
	}
	export interface IPListOutputFormProperties {

		/** Required */
		dataset: FormControl<string | null | undefined>,

		/** Required */
		expiry: FormControl<number | null | undefined>,

		/** Required */
		last_report: FormControl<number | null | undefined>,

		/** Required */
		protocol: FormControl<IPListOutputProtocol | null | undefined>,

		/** Required */
		self: FormControl<string | null | undefined>,

		/** Required */
		total_reports: FormControl<number | null | undefined>,
	}
	export function CreateIPListOutputFormGroup() {
		return new FormGroup<IPListOutputFormProperties>({
			dataset: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			expiry: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			last_report: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			protocol: new FormControl<IPListOutputProtocol | null | undefined>(undefined, [Validators.required]),
			self: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			total_reports: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum IPListOutputProtocol { ALL = 0, IPV4 = 1, IPV6 = 2 }

	export interface IPLogCollectionOutput {

		/** Required */
		logs: Array<IPLogOutput>;
		self?: string | null;
	}
	export interface IPLogCollectionOutputFormProperties {
		self: FormControl<string | null | undefined>,
	}
	export function CreateIPLogCollectionOutputFormGroup() {
		return new FormGroup<IPLogCollectionOutputFormProperties>({
			self: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface IPLogOutput {

		/** Required */
		action: IPLogOutputAction;
		cidr?: string | null;

		/** Required */
		dataset: string;

		/** Required */
		lapse: IPLogOutputLapse;

		/** Required */
		risk: AutonomousSystemOutputRisk;
		score?: number | null;
		self?: string | null;

		/** Required */
		source: string;

		/** Required */
		timestamp: number;
	}
	export interface IPLogOutputFormProperties {

		/** Required */
		action: FormControl<IPLogOutputAction | null | undefined>,
		cidr: FormControl<string | null | undefined>,

		/** Required */
		dataset: FormControl<string | null | undefined>,

		/** Required */
		lapse: FormControl<IPLogOutputLapse | null | undefined>,

		/** Required */
		risk: FormControl<AutonomousSystemOutputRisk | null | undefined>,
		score: FormControl<number | null | undefined>,
		self: FormControl<string | null | undefined>,

		/** Required */
		source: FormControl<string | null | undefined>,

		/** Required */
		timestamp: FormControl<number | null | undefined>,
	}
	export function CreateIPLogOutputFormGroup() {
		return new FormGroup<IPLogOutputFormProperties>({
			action: new FormControl<IPLogOutputAction | null | undefined>(undefined, [Validators.required]),
			cidr: new FormControl<string | null | undefined>(undefined),
			dataset: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			lapse: new FormControl<IPLogOutputLapse | null | undefined>(undefined, [Validators.required]),
			risk: new FormControl<AutonomousSystemOutputRisk | null | undefined>(undefined, [Validators.required]),
			score: new FormControl<number | null | undefined>(undefined),
			self: new FormControl<string | null | undefined>(undefined),
			source: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			timestamp: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum IPLogOutputAction { ADD = 0, DELETE = 1 }

	export enum IPLogOutputLapse { '1H' = 0, '6H' = 1, '12H' = 2, '1D' = 3, '7D' = 4, '30D' = 5, '90D' = 6, '180D' = 7, '365D' = 8 }

	export interface OSOutput {

		/** Required */
		code: string;

		/** Required */
		description: string;

		/** Required */
		family: string;

		/** Required */
		vendor: string;
	}
	export interface OSOutputFormProperties {

		/** Required */
		code: FormControl<string | null | undefined>,

		/** Required */
		description: FormControl<string | null | undefined>,

		/** Required */
		family: FormControl<string | null | undefined>,

		/** Required */
		vendor: FormControl<string | null | undefined>,
	}
	export function CreateOSOutputFormGroup() {
		return new FormGroup<OSOutputFormProperties>({
			code: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			family: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			vendor: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface OriginAddressStatusCollectionOutput {

		/** Required */
		addresses: Array<OriginAddressStatusOutput>;

		/** Required */
		page: number;

		/** Required */
		page_size: number;

		/** Required */
		self: string;
	}
	export interface OriginAddressStatusCollectionOutputFormProperties {

		/** Required */
		page: FormControl<number | null | undefined>,

		/** Required */
		page_size: FormControl<number | null | undefined>,

		/** Required */
		self: FormControl<string | null | undefined>,
	}
	export function CreateOriginAddressStatusCollectionOutputFormGroup() {
		return new FormGroup<OriginAddressStatusCollectionOutputFormProperties>({
			page: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			page_size: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			self: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface OriginAddressStatusOutput {

		/** Required */
		address: string;
		created_at?: number | null;
		expiry?: number | null;
		log_id?: string | null;

		/** Required */
		status: string;
		updated_at?: number | null;
	}
	export interface OriginAddressStatusOutputFormProperties {

		/** Required */
		address: FormControl<string | null | undefined>,
		created_at: FormControl<number | null | undefined>,
		expiry: FormControl<number | null | undefined>,
		log_id: FormControl<string | null | undefined>,

		/** Required */
		status: FormControl<string | null | undefined>,
		updated_at: FormControl<number | null | undefined>,
	}
	export function CreateOriginAddressStatusOutputFormGroup() {
		return new FormGroup<OriginAddressStatusOutputFormProperties>({
			address: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			created_at: new FormControl<number | null | undefined>(undefined),
			expiry: new FormControl<number | null | undefined>(undefined),
			log_id: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			updated_at: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface OriginClientAnalysisCollectionOutput {

		/** Required */
		data: Array<OriginClientAnalysisOutput>;

		/** Required */
		from_timestamp: number;

		/** Required */
		interval: string;

		/** Required */
		self: string;

		/** Required */
		to_timestamp: number;
	}
	export interface OriginClientAnalysisCollectionOutputFormProperties {

		/** Required */
		from_timestamp: FormControl<number | null | undefined>,

		/** Required */
		interval: FormControl<string | null | undefined>,

		/** Required */
		self: FormControl<string | null | undefined>,

		/** Required */
		to_timestamp: FormControl<number | null | undefined>,
	}
	export function CreateOriginClientAnalysisCollectionOutputFormGroup() {
		return new FormGroup<OriginClientAnalysisCollectionOutputFormProperties>({
			from_timestamp: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			interval: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			self: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			to_timestamp: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface OriginClientAnalysisOutput {

		/** Required */
		client_browser: number;

		/** Required */
		client_crawler: number;

		/** Required */
		client_email: number;

		/** Required */
		client_library: number;

		/** Required */
		client_mobile_browser: number;

		/** Required */
		client_multimedia_player: number;

		/** Required */
		client_offline_browser: number;

		/** Required */
		client_total: number;

		/** Required */
		client_ua_anonymizer: number;

		/** Required */
		client_unrecognized: number;

		/** Required */
		client_validator: number;

		/** Required */
		client_wap_browser: number;

		/** Required */
		crawler_feed_fetcher: number;

		/** Required */
		crawler_link_checker: number;

		/** Required */
		crawler_marketing: number;

		/** Required */
		crawler_screenshot_creator: number;

		/** Required */
		crawler_search_engine_bot: number;

		/** Required */
		crawler_site_monitor: number;

		/** Required */
		crawler_speed_tester: number;

		/** Required */
		crawler_tool: number;

		/** Required */
		crawler_total: number;

		/** Required */
		crawler_uncategorised: number;

		/** Required */
		crawler_unrecognized: number;

		/** Required */
		crawler_virus_scanner: number;

		/** Required */
		crawler_vulnerability_scanner: number;

		/** Required */
		crawler_web_scraper: number;

		/** Required */
		timestamp: number;

		/** Required */
		total: number;
	}
	export interface OriginClientAnalysisOutputFormProperties {

		/** Required */
		client_browser: FormControl<number | null | undefined>,

		/** Required */
		client_crawler: FormControl<number | null | undefined>,

		/** Required */
		client_email: FormControl<number | null | undefined>,

		/** Required */
		client_library: FormControl<number | null | undefined>,

		/** Required */
		client_mobile_browser: FormControl<number | null | undefined>,

		/** Required */
		client_multimedia_player: FormControl<number | null | undefined>,

		/** Required */
		client_offline_browser: FormControl<number | null | undefined>,

		/** Required */
		client_total: FormControl<number | null | undefined>,

		/** Required */
		client_ua_anonymizer: FormControl<number | null | undefined>,

		/** Required */
		client_unrecognized: FormControl<number | null | undefined>,

		/** Required */
		client_validator: FormControl<number | null | undefined>,

		/** Required */
		client_wap_browser: FormControl<number | null | undefined>,

		/** Required */
		crawler_feed_fetcher: FormControl<number | null | undefined>,

		/** Required */
		crawler_link_checker: FormControl<number | null | undefined>,

		/** Required */
		crawler_marketing: FormControl<number | null | undefined>,

		/** Required */
		crawler_screenshot_creator: FormControl<number | null | undefined>,

		/** Required */
		crawler_search_engine_bot: FormControl<number | null | undefined>,

		/** Required */
		crawler_site_monitor: FormControl<number | null | undefined>,

		/** Required */
		crawler_speed_tester: FormControl<number | null | undefined>,

		/** Required */
		crawler_tool: FormControl<number | null | undefined>,

		/** Required */
		crawler_total: FormControl<number | null | undefined>,

		/** Required */
		crawler_uncategorised: FormControl<number | null | undefined>,

		/** Required */
		crawler_unrecognized: FormControl<number | null | undefined>,

		/** Required */
		crawler_virus_scanner: FormControl<number | null | undefined>,

		/** Required */
		crawler_vulnerability_scanner: FormControl<number | null | undefined>,

		/** Required */
		crawler_web_scraper: FormControl<number | null | undefined>,

		/** Required */
		timestamp: FormControl<number | null | undefined>,

		/** Required */
		total: FormControl<number | null | undefined>,
	}
	export function CreateOriginClientAnalysisOutputFormGroup() {
		return new FormGroup<OriginClientAnalysisOutputFormProperties>({
			client_browser: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			client_crawler: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			client_email: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			client_library: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			client_mobile_browser: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			client_multimedia_player: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			client_offline_browser: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			client_total: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			client_ua_anonymizer: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			client_unrecognized: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			client_validator: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			client_wap_browser: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			crawler_feed_fetcher: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			crawler_link_checker: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			crawler_marketing: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			crawler_screenshot_creator: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			crawler_search_engine_bot: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			crawler_site_monitor: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			crawler_speed_tester: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			crawler_tool: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			crawler_total: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			crawler_uncategorised: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			crawler_unrecognized: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			crawler_virus_scanner: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			crawler_vulnerability_scanner: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			crawler_web_scraper: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			timestamp: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			total: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface OriginCollectionOutput {

		/** Required */
		origins: Array<OriginOutput>;

		/** Required */
		self: string;
	}
	export interface OriginCollectionOutputFormProperties {

		/** Required */
		self: FormControl<string | null | undefined>,
	}
	export function CreateOriginCollectionOutputFormGroup() {
		return new FormGroup<OriginCollectionOutputFormProperties>({
			self: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface OriginOutput {

		/** Required */
		actions: string;

		/** Required */
		addresses: string;

		/** Required */
		config: string;

		/** Required */
		cookies: string;

		/** Required */
		created_at: number;

		/** Required */
		logs: string;

		/** Required */
		origin: string;

		/** Required */
		scripts: string;

		/** Required */
		self: string;

		/** Required */
		status: DatasetTypeOutputStatus;

		/** Required */
		token: string;

		/** Required */
		updated_at: number;
	}
	export interface OriginOutputFormProperties {

		/** Required */
		actions: FormControl<string | null | undefined>,

		/** Required */
		addresses: FormControl<string | null | undefined>,

		/** Required */
		config: FormControl<string | null | undefined>,

		/** Required */
		cookies: FormControl<string | null | undefined>,

		/** Required */
		created_at: FormControl<number | null | undefined>,

		/** Required */
		logs: FormControl<string | null | undefined>,

		/** Required */
		origin: FormControl<string | null | undefined>,

		/** Required */
		scripts: FormControl<string | null | undefined>,

		/** Required */
		self: FormControl<string | null | undefined>,

		/** Required */
		status: FormControl<DatasetTypeOutputStatus | null | undefined>,

		/** Required */
		token: FormControl<string | null | undefined>,

		/** Required */
		updated_at: FormControl<number | null | undefined>,
	}
	export function CreateOriginOutputFormGroup() {
		return new FormGroup<OriginOutputFormProperties>({
			actions: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			addresses: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			config: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			cookies: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			created_at: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			logs: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			origin: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			scripts: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			self: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<DatasetTypeOutputStatus | null | undefined>(undefined, [Validators.required]),
			token: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			updated_at: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface OriginCookieIdStatusCollectionOutput {

		/** Required */
		cookie_ids: Array<OriginCookieIdStatusOutput>;

		/** Required */
		page: number;

		/** Required */
		page_size: number;

		/** Required */
		self: string;
	}
	export interface OriginCookieIdStatusCollectionOutputFormProperties {

		/** Required */
		page: FormControl<number | null | undefined>,

		/** Required */
		page_size: FormControl<number | null | undefined>,

		/** Required */
		self: FormControl<string | null | undefined>,
	}
	export function CreateOriginCookieIdStatusCollectionOutputFormGroup() {
		return new FormGroup<OriginCookieIdStatusCollectionOutputFormProperties>({
			page: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			page_size: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			self: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface OriginCookieIdStatusOutput {

		/** Required */
		cookie_id: string;
		created_at?: number | null;
		expiry?: number | null;
		log_id?: string | null;

		/** Required */
		status: string;
		updated_at?: number | null;
	}
	export interface OriginCookieIdStatusOutputFormProperties {

		/** Required */
		cookie_id: FormControl<string | null | undefined>,
		created_at: FormControl<number | null | undefined>,
		expiry: FormControl<number | null | undefined>,
		log_id: FormControl<string | null | undefined>,

		/** Required */
		status: FormControl<string | null | undefined>,
		updated_at: FormControl<number | null | undefined>,
	}
	export function CreateOriginCookieIdStatusOutputFormGroup() {
		return new FormGroup<OriginCookieIdStatusOutputFormProperties>({
			cookie_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			created_at: new FormControl<number | null | undefined>(undefined),
			expiry: new FormControl<number | null | undefined>(undefined),
			log_id: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			updated_at: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface OriginScriptsOutput {

		/** Required */
		detection: string;

		/** Required */
		self: string;
	}
	export interface OriginScriptsOutputFormProperties {

		/** Required */
		detection: FormControl<string | null | undefined>,

		/** Required */
		self: FormControl<string | null | undefined>,
	}
	export function CreateOriginScriptsOutputFormGroup() {
		return new FormGroup<OriginScriptsOutputFormProperties>({
			detection: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			self: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface OriginStatusDetailsCollectionOutput {

		/** Required */
		list: Array<OriginStatusDetailsOutput>;

		/** Required */
		self: string;
	}
	export interface OriginStatusDetailsCollectionOutputFormProperties {

		/** Required */
		self: FormControl<string | null | undefined>,
	}
	export function CreateOriginStatusDetailsCollectionOutputFormGroup() {
		return new FormGroup<OriginStatusDetailsCollectionOutputFormProperties>({
			self: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface OriginStatusDetailsOutput {

		/** Required */
		cardinality: number;

		/** Required */
		description: string;

		/** Required */
		self: string;

		/** Required */
		status: string;
	}
	export interface OriginStatusDetailsOutputFormProperties {

		/** Required */
		cardinality: FormControl<number | null | undefined>,

		/** Required */
		description: FormControl<string | null | undefined>,

		/** Required */
		self: FormControl<string | null | undefined>,

		/** Required */
		status: FormControl<string | null | undefined>,
	}
	export function CreateOriginStatusDetailsOutputFormGroup() {
		return new FormGroup<OriginStatusDetailsOutputFormProperties>({
			cardinality: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			self: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface OriginStatusOutput {
		address?: OriginAddressStatusOutput;
		cookie_id?: OriginCookieIdStatusOutput;

		/** Required */
		self: string;
	}
	export interface OriginStatusOutputFormProperties {

		/** Required */
		self: FormControl<string | null | undefined>,
	}
	export function CreateOriginStatusOutputFormGroup() {
		return new FormGroup<OriginStatusOutputFormProperties>({
			self: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface OriginTokenCollectionOutput {

		/** Required */
		self: string;

		/** Required */
		tokens: Array<OriginTokenOutput>;
	}
	export interface OriginTokenCollectionOutputFormProperties {

		/** Required */
		self: FormControl<string | null | undefined>,
	}
	export function CreateOriginTokenCollectionOutputFormGroup() {
		return new FormGroup<OriginTokenCollectionOutputFormProperties>({
			self: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface OriginTokenOutput {

		/** Required */
		created_at: number;

		/** Required */
		origin: string;

		/** Required */
		region_id: string;

		/** Required */
		self: string;

		/** Required */
		status: DatasetTypeOutputStatus;

		/** Required */
		updated_at: number;
	}
	export interface OriginTokenOutputFormProperties {

		/** Required */
		created_at: FormControl<number | null | undefined>,

		/** Required */
		origin: FormControl<string | null | undefined>,

		/** Required */
		region_id: FormControl<string | null | undefined>,

		/** Required */
		self: FormControl<string | null | undefined>,

		/** Required */
		status: FormControl<DatasetTypeOutputStatus | null | undefined>,

		/** Required */
		updated_at: FormControl<number | null | undefined>,
	}
	export function CreateOriginTokenOutputFormGroup() {
		return new FormGroup<OriginTokenOutputFormProperties>({
			created_at: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			origin: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			region_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			self: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<DatasetTypeOutputStatus | null | undefined>(undefined, [Validators.required]),
			updated_at: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface OriginTokenInput {

		/** Required */
		origin: string;
	}
	export interface OriginTokenInputFormProperties {

		/** Required */
		origin: FormControl<string | null | undefined>,
	}
	export function CreateOriginTokenInputFormGroup() {
		return new FormGroup<OriginTokenInputFormProperties>({
			origin: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface OriginTrafficAnalysisCollectionOutput {

		/** Required */
		data: Array<OriginTrafficAnalysisOutput>;

		/** Required */
		from_timestamp: number;

		/** Required */
		interval: string;

		/** Required */
		self: string;

		/** Required */
		to_timestamp: number;
	}
	export interface OriginTrafficAnalysisCollectionOutputFormProperties {

		/** Required */
		from_timestamp: FormControl<number | null | undefined>,

		/** Required */
		interval: FormControl<string | null | undefined>,

		/** Required */
		self: FormControl<string | null | undefined>,

		/** Required */
		to_timestamp: FormControl<number | null | undefined>,
	}
	export function CreateOriginTrafficAnalysisCollectionOutputFormGroup() {
		return new FormGroup<OriginTrafficAnalysisCollectionOutputFormProperties>({
			from_timestamp: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			interval: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			self: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			to_timestamp: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface OriginTrafficAnalysisOutput {

		/** Required */
		asn_risky: number;

		/** Required */
		bots: number;

		/** Required */
		datacenters: number;

		/** Required */
		denylists: number;

		/** Required */
		network_country_mismatches: number;

		/** Required */
		score_high: number;

		/** Required */
		timestamp: number;

		/** Required */
		total: number;

		/** Required */
		webdrivers: number;
	}
	export interface OriginTrafficAnalysisOutputFormProperties {

		/** Required */
		asn_risky: FormControl<number | null | undefined>,

		/** Required */
		bots: FormControl<number | null | undefined>,

		/** Required */
		datacenters: FormControl<number | null | undefined>,

		/** Required */
		denylists: FormControl<number | null | undefined>,

		/** Required */
		network_country_mismatches: FormControl<number | null | undefined>,

		/** Required */
		score_high: FormControl<number | null | undefined>,

		/** Required */
		timestamp: FormControl<number | null | undefined>,

		/** Required */
		total: FormControl<number | null | undefined>,

		/** Required */
		webdrivers: FormControl<number | null | undefined>,
	}
	export function CreateOriginTrafficAnalysisOutputFormGroup() {
		return new FormGroup<OriginTrafficAnalysisOutputFormProperties>({
			asn_risky: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			bots: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			datacenters: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			denylists: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			network_country_mismatches: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			score_high: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			timestamp: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			total: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			webdrivers: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PrivateAclGroupListCollectionOutput {

		/** Required */
		lists: Array<PrivateAclGroupListOutput>;

		/** Required */
		self: string;
	}
	export interface PrivateAclGroupListCollectionOutputFormProperties {

		/** Required */
		self: FormControl<string | null | undefined>,
	}
	export function CreatePrivateAclGroupListCollectionOutputFormGroup() {
		return new FormGroup<PrivateAclGroupListCollectionOutputFormProperties>({
			self: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PrivateAclGroupListOutput {

		/** Required */
		content: string;

		/** Required */
		created_at: number;

		/** Required */
		description: string;

		/** Required */
		list_type: PrivateAclGroupListOutputList_type;

		/** Required */
		name: string;
		origins?: AclGroupOriginCollectionOutput;

		/** Required */
		resource_type: PrivateAclGroupListInputResource_type;

		/** Required */
		self: string;

		/** Required */
		tags: Array<string>;
		ttl?: number | null;

		/** Required */
		updated_at: number;
	}
	export interface PrivateAclGroupListOutputFormProperties {

		/** Required */
		content: FormControl<string | null | undefined>,

		/** Required */
		created_at: FormControl<number | null | undefined>,

		/** Required */
		description: FormControl<string | null | undefined>,

		/** Required */
		list_type: FormControl<PrivateAclGroupListOutputList_type | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		resource_type: FormControl<PrivateAclGroupListInputResource_type | null | undefined>,

		/** Required */
		self: FormControl<string | null | undefined>,
		ttl: FormControl<number | null | undefined>,

		/** Required */
		updated_at: FormControl<number | null | undefined>,
	}
	export function CreatePrivateAclGroupListOutputFormGroup() {
		return new FormGroup<PrivateAclGroupListOutputFormProperties>({
			content: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			created_at: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			list_type: new FormControl<PrivateAclGroupListOutputList_type | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource_type: new FormControl<PrivateAclGroupListInputResource_type | null | undefined>(undefined, [Validators.required]),
			self: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ttl: new FormControl<number | null | undefined>(undefined),
			updated_at: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum PrivateAclGroupListOutputList_type { UNKNOWN = 0, ALLOW = 1, DENY = 2 }

	export interface PrivateAclListCollectionOutput {
		asns?: Array<number>;
		cidrs?: Array<string>;
		continents?: Array<string>;
		countries?: Array<string>;
		datacenters?: Array<string>;

		/** Required */
		self: string;
		user_agents?: Array<string>;
	}
	export interface PrivateAclListCollectionOutputFormProperties {

		/** Required */
		self: FormControl<string | null | undefined>,
	}
	export function CreatePrivateAclListCollectionOutputFormGroup() {
		return new FormGroup<PrivateAclListCollectionOutputFormProperties>({
			self: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PublicAclGroupListCollectionOutput {

		/** Required */
		lists: Array<PublicAclGroupListOutput>;

		/** Required */
		self: string;
	}
	export interface PublicAclGroupListCollectionOutputFormProperties {

		/** Required */
		self: FormControl<string | null | undefined>,
	}
	export function CreatePublicAclGroupListCollectionOutputFormGroup() {
		return new FormGroup<PublicAclGroupListCollectionOutputFormProperties>({
			self: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PublicAclGroupListOutput {

		/** Required */
		created_at: number;

		/** Required */
		description: string;

		/** Required */
		list_type: PrivateAclGroupListOutputList_type;

		/** Required */
		name: string;
		origins?: AclGroupOriginCollectionOutput;

		/** Required */
		resource_type: PrivateAclGroupListInputResource_type;

		/** Required */
		self: string;
		status?: AclGroupOriginOutputStatus | null;

		/** Required */
		tags: Array<string>;
		ttl?: number | null;

		/** Required */
		updated_at: number;
	}
	export interface PublicAclGroupListOutputFormProperties {

		/** Required */
		created_at: FormControl<number | null | undefined>,

		/** Required */
		description: FormControl<string | null | undefined>,

		/** Required */
		list_type: FormControl<PrivateAclGroupListOutputList_type | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		resource_type: FormControl<PrivateAclGroupListInputResource_type | null | undefined>,

		/** Required */
		self: FormControl<string | null | undefined>,
		status: FormControl<AclGroupOriginOutputStatus | null | undefined>,
		ttl: FormControl<number | null | undefined>,

		/** Required */
		updated_at: FormControl<number | null | undefined>,
	}
	export function CreatePublicAclGroupListOutputFormGroup() {
		return new FormGroup<PublicAclGroupListOutputFormProperties>({
			created_at: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			list_type: new FormControl<PrivateAclGroupListOutputList_type | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource_type: new FormControl<PrivateAclGroupListInputResource_type | null | undefined>(undefined, [Validators.required]),
			self: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<AclGroupOriginOutputStatus | null | undefined>(undefined),
			ttl: new FormControl<number | null | undefined>(undefined),
			updated_at: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SourceCollectionOutput {

		/** Required */
		self: string;

		/** Required */
		sources: Array<V1__models__source__SourceOutput>;
	}
	export interface SourceCollectionOutputFormProperties {

		/** Required */
		self: FormControl<string | null | undefined>,
	}
	export function CreateSourceCollectionOutputFormGroup() {
		return new FormGroup<SourceCollectionOutputFormProperties>({
			self: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface V1__models__source__SourceOutput {

		/** Required */
		dataset: string;

		/** Required */
		description: string;

		/** Required */
		maximum_risk: AutonomousSystemOutputRisk;

		/** Required */
		maximum_score: number;

		/** Required */
		minimum_risk: AutonomousSystemOutputRisk;

		/** Required */
		minimum_score: number;

		/** Required */
		name: string;

		/** Required */
		refresh: IPLogOutputLapse;

		/** Required */
		self: string;

		/** Required */
		source: string;

		/** Required */
		subscriptions: Array<string>;

		/** Required */
		time_ranges: Array<string>;

		/** Required */
		updated_at: number;

		/** Required */
		url: string;
	}
	export interface V1__models__source__SourceOutputFormProperties {

		/** Required */
		dataset: FormControl<string | null | undefined>,

		/** Required */
		description: FormControl<string | null | undefined>,

		/** Required */
		maximum_risk: FormControl<AutonomousSystemOutputRisk | null | undefined>,

		/** Required */
		maximum_score: FormControl<number | null | undefined>,

		/** Required */
		minimum_risk: FormControl<AutonomousSystemOutputRisk | null | undefined>,

		/** Required */
		minimum_score: FormControl<number | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		refresh: FormControl<IPLogOutputLapse | null | undefined>,

		/** Required */
		self: FormControl<string | null | undefined>,

		/** Required */
		source: FormControl<string | null | undefined>,

		/** Required */
		updated_at: FormControl<number | null | undefined>,

		/** Required */
		url: FormControl<string | null | undefined>,
	}
	export function CreateV1__models__source__SourceOutputFormGroup() {
		return new FormGroup<V1__models__source__SourceOutputFormProperties>({
			dataset: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			maximum_risk: new FormControl<AutonomousSystemOutputRisk | null | undefined>(undefined, [Validators.required]),
			maximum_score: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			minimum_risk: new FormControl<AutonomousSystemOutputRisk | null | undefined>(undefined, [Validators.required]),
			minimum_score: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			refresh: new FormControl<IPLogOutputLapse | null | undefined>(undefined, [Validators.required]),
			self: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			source: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			updated_at: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SourceTimeRangeOutput {

		/** Required */
		items: number;

		/** Required */
		lapse: IPLogOutputLapse;

		/** Required */
		risk: AutonomousSystemOutputRisk;

		/** Required */
		score: number;

		/** Required */
		self: string;

		/** Required */
		source: string;

		/** Required */
		updated_at: number;
	}
	export interface SourceTimeRangeOutputFormProperties {

		/** Required */
		items: FormControl<number | null | undefined>,

		/** Required */
		lapse: FormControl<IPLogOutputLapse | null | undefined>,

		/** Required */
		risk: FormControl<AutonomousSystemOutputRisk | null | undefined>,

		/** Required */
		score: FormControl<number | null | undefined>,

		/** Required */
		self: FormControl<string | null | undefined>,

		/** Required */
		source: FormControl<string | null | undefined>,

		/** Required */
		updated_at: FormControl<number | null | undefined>,
	}
	export function CreateSourceTimeRangeOutputFormGroup() {
		return new FormGroup<SourceTimeRangeOutputFormProperties>({
			items: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			lapse: new FormControl<IPLogOutputLapse | null | undefined>(undefined, [Validators.required]),
			risk: new FormControl<AutonomousSystemOutputRisk | null | undefined>(undefined, [Validators.required]),
			score: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			self: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			source: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			updated_at: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface TokenOutput {

		/** Required */
		created_at: number;

		/** Required */
		last_minute_bucket_init_value: number;

		/** Required */
		last_minute_bucket_refill_ratio: number;

		/** Required */
		last_minute_bucket_refresh: number;

		/** Required */
		last_minute_bucket_value: number;

		/** Required */
		last_month_bucket_init_value: number;

		/** Required */
		last_month_bucket_refresh: number;

		/** Required */
		last_month_bucket_value: number;

		/** Required */
		region_id: string;

		/** Required */
		self: string;

		/** Required */
		status: DatasetTypeOutputStatus;

		/** Required */
		updated_at: number;
	}
	export interface TokenOutputFormProperties {

		/** Required */
		created_at: FormControl<number | null | undefined>,

		/** Required */
		last_minute_bucket_init_value: FormControl<number | null | undefined>,

		/** Required */
		last_minute_bucket_refill_ratio: FormControl<number | null | undefined>,

		/** Required */
		last_minute_bucket_refresh: FormControl<number | null | undefined>,

		/** Required */
		last_minute_bucket_value: FormControl<number | null | undefined>,

		/** Required */
		last_month_bucket_init_value: FormControl<number | null | undefined>,

		/** Required */
		last_month_bucket_refresh: FormControl<number | null | undefined>,

		/** Required */
		last_month_bucket_value: FormControl<number | null | undefined>,

		/** Required */
		region_id: FormControl<string | null | undefined>,

		/** Required */
		self: FormControl<string | null | undefined>,

		/** Required */
		status: FormControl<DatasetTypeOutputStatus | null | undefined>,

		/** Required */
		updated_at: FormControl<number | null | undefined>,
	}
	export function CreateTokenOutputFormGroup() {
		return new FormGroup<TokenOutputFormProperties>({
			created_at: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			last_minute_bucket_init_value: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			last_minute_bucket_refill_ratio: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			last_minute_bucket_refresh: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			last_minute_bucket_value: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			last_month_bucket_init_value: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			last_month_bucket_refresh: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			last_month_bucket_value: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			region_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			self: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<DatasetTypeOutputStatus | null | undefined>(undefined, [Validators.required]),
			updated_at: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface TypeOutput {

		/** Required */
		code: string;

		/** Required */
		description: string;

		/** Required */
		type: TypeOutputType;
	}
	export interface TypeOutputFormProperties {

		/** Required */
		code: FormControl<string | null | undefined>,

		/** Required */
		description: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<TypeOutputType | null | undefined>,
	}
	export function CreateTypeOutputFormGroup() {
		return new FormGroup<TypeOutputFormProperties>({
			code: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<TypeOutputType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum TypeOutputType { INTERACTIVE = 0, CRAWLER = 1, UNKNOWN = 2 }

	export interface UACollectionOutput {

		/** Required */
		results: Array<UAOutput>;

		/** Required */
		self: string;
	}
	export interface UACollectionOutputFormProperties {

		/** Required */
		self: FormControl<string | null | undefined>,
	}
	export function CreateUACollectionOutputFormGroup() {
		return new FormGroup<UACollectionOutputFormProperties>({
			self: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UAOutput {

		/** Required */
		agent: string;

		/** Required */
		classification: UAOutputClassification;

		/** Required */
		device: string;

		/** Required */
		engine: string;

		/** Required */
		family: string;

		/** Required */
		frequent: UAOutputFrequent;

		/** Required */
		latest: string;

		/** Required */
		os: string;
		self?: string | null;

		/** Required */
		string: string;

		/** Required */
		type: string;

		/** Required */
		vendor: string;

		/** Required */
		version: string;
	}
	export interface UAOutputFormProperties {

		/** Required */
		agent: FormControl<string | null | undefined>,

		/** Required */
		classification: FormControl<UAOutputClassification | null | undefined>,

		/** Required */
		device: FormControl<string | null | undefined>,

		/** Required */
		engine: FormControl<string | null | undefined>,

		/** Required */
		family: FormControl<string | null | undefined>,

		/** Required */
		frequent: FormControl<UAOutputFrequent | null | undefined>,

		/** Required */
		latest: FormControl<string | null | undefined>,

		/** Required */
		os: FormControl<string | null | undefined>,
		self: FormControl<string | null | undefined>,

		/** Required */
		string: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<string | null | undefined>,

		/** Required */
		vendor: FormControl<string | null | undefined>,

		/** Required */
		version: FormControl<string | null | undefined>,
	}
	export function CreateUAOutputFormGroup() {
		return new FormGroup<UAOutputFormProperties>({
			agent: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			classification: new FormControl<UAOutputClassification | null | undefined>(undefined, [Validators.required]),
			device: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			engine: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			family: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			frequent: new FormControl<UAOutputFrequent | null | undefined>(undefined, [Validators.required]),
			latest: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			os: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			self: new FormControl<string | null | undefined>(undefined),
			string: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			vendor: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			version: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum UAOutputClassification { CRAWLER = 0, CLIENT = 1, UNKNOWN = 2 }

	export enum UAOutputFrequent { COMMON = 0, RARE = 1, VERY_RARE = 2, UNKNOWN = 3 }

	export interface VendorOutput {

		/** Required */
		code: string;

		/** Required */
		description: string;
	}
	export interface VendorOutputFormProperties {

		/** Required */
		code: FormControl<string | null | undefined>,

		/** Required */
		description: FormControl<string | null | undefined>,
	}
	export function CreateVendorOutputFormGroup() {
		return new FormGroup<VendorOutputFormProperties>({
			code: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Creates a new private allowlist binded to the user.
		 * ### What
		 * Creates a new allowlist with the information given and binded to the current user. The parameters are:
		 * - name
		 * - description
		 * - tags
		 * - expiry
		 * - Time to Live (TTL)
		 * - Resource Type (`CIDR`, `AS`, `COUNTRY`, `CONTINENT`, `DATACENTER_ID` and `USER AGENT`)
		 * This is an asynchronous operation. It can take several seconds until the operation completes, but the request will immediately return a 202 Accepted response. The operation will also return the UUID of the list.
		 * ### Parameters
		 * In the query string the ID of the private allow list to delete.
		 * In the body the following parameters:
		 * - ``name``: A human readable name of the list.
		 * - ``description``: A long detailed information about what the list contains and how it is used.
		 * - ``tags``: A list of tags that describe the list.
		 * - ``ttl``: (Optional) The Time To Live of the list, in seconds. If it does not exist, it will never expire.
		 * - ``resource_type``: The type of resource that the list contains. It can be ``CIDR``, ``AS``, ``COUNTRY``, ``CONTINENT``,    ``DATACENTER_ID`` or ``USER AGENT``.
		 * ### Result
		 * It should always return a 202 Accepted response with the UUID of the new list in the body.
		 * ### Errors
		 * - If the information is not valid, it will return a `422` (Unprocessable Entity) error.
		 * - If the ttl is negative, it will return a `400` (Bad Request) error.
		 * It will return the API Global errors described in the API description.
		 * Post v1/allowlist/private
		 * @return {string} Successful Response
		 */
		Create_private_allowlist_of_the_user_v1_allowlist_private_post(requestBody: Body_create_private_allowlist_of_the_user_v1_allowlist_private_post): Observable<string> {
			return this.http.post(this.baseUri + 'v1/allowlist/private', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Get the set of private allowlists of the user.
		 * ### What
		 * Obtain the set of private allow lists of the user available in the service.
		 * ### Parameters
		 * No parameters
		 * ### Result
		 * The result is a JSON object with a list of the following JSON objects:
		 * - ``self``: the URI to the status of all the lists.
		 * - ``lists``: a list of JSON objects with the available lists:
		 * - ``self``: the URI to individual information of the list.
		 * - ``name``: A human readable name of the list.
		 * - ``description``: A long detailed information about what the list contains and how it is used.
		 * - ``resource_type``: The type of the list. It can be ``CIDR``, ``AS``, ``COUNTRY``, ``CONTINENT`` or ``DATACENTER_ID``.
		 * - ``list_type``: The type of the list. It can be ``ALLOW`` or ``DENY``.
		 * - ``created_at``: Unix timestamp in seconds when the list was created.
		 * - ``updated_at``: Unix timestamp in seconds when the list was updated.
		 * - ``expiry``: Unix timestamp in seconds when the list will expire. If it does not exist, it will never expire.
		 * - ``origins``: list of websites that are using the list as a allowlist.
		 * - ``self``: the URI to all the list of origins.
		 * - ``lists``: list of lists that the origin is using.
		 * - ``self``: the URI to the individual information of the list.
		 * - ``origin``: the protocol and domain of the website that is using the list.
		 * - ``status``: the status of the list. It can be ``ACTIVE`` or ``INACTIVE`` or ``EXPIRED``. If the list is ``EXPIRED`` it means that the list is not available anymore if not renewed.
		 * - ``expiry``: Unix timestamp in seconds when the list will expire. If it does not exist, it will never expire.
		 * - ``created_at``: Unix timestamp in seconds when the list was created.
		 * - ``updated_at``: Unix timestamp in seconds when the list was updated.
		 * ### Errors
		 * It will return the API Global errors described in the API description.
		 * Get v1/allowlist/private/all
		 * @return {PrivateAclGroupListCollectionOutput} Successful Response
		 */
		Get_all_private_allowlists_v1_allowlist_private_all_get(): Observable<PrivateAclGroupListCollectionOutput> {
			return this.http.get<PrivateAclGroupListCollectionOutput>(this.baseUri + 'v1/allowlist/private/all', {});
		}

		/**
		 * Get the set of private allowlists of the user by resource type.
		 * ### What
		 * Obtain the set of private allow lists of the user available in the service filtering by resource type. It can be ``CIDR``, ``AS``, ``COUNTRY``, ``CONTINENT`` or ``DATACENTER_ID``
		 * ### Parameters
		 * The ``resource type`` to filter. The values can be ``CIDR``, ``AS``, ``COUNTRY``, ``CONTINENT`` or ``DATACENTER_ID``.
		 * ### Result
		 * The result is a JSON object with a list of the following JSON objects:
		 * - ``self``: the URI to the status of all the lists.
		 * - ``lists``: a list of JSON objects with the available lists:
		 * - ``self``: the URI to individual information of the list.
		 * - ``name``: A human readable name of the list.
		 * - ``description``: A long detailed information about what the list contains and how it is used.
		 * - ``resource_type``: The type of the list. It can be ``CIDR``, ``AS``, ``COUNTRY``, ``CONTINENT`` or ``DATACENTER_ID``.
		 * - ``list_type``: The type of the list. It can be ``ALLOW`` or ``DENY``.
		 * - ``created_at``: Unix timestamp in seconds when the list was created.
		 * - ``updated_at``: Unix timestamp in seconds when the list was updated.
		 * - ``expiry``: Unix timestamp in seconds when the list will expire. If it does not exist, it will never expire.
		 * - ``origins``: list of websites that are using the list as a allowlist.
		 * - ``self``: the URI to all the list of origins.
		 * - ``lists``: list of lists that the origin is using.
		 * - ``self``: the URI to the individual information of the list.
		 * - ``origin``: the protocol and domain of the website that is using the list.
		 * - ``status``: the status of the list. It can be ``ACTIVE`` or ``INACTIVE`` or ``EXPIRED``. If the list is ``EXPIRED`` it means that the list is not available anymore if not renewed.
		 * - ``expiry``: Unix timestamp in seconds when the list will expire. If it does not exist, it will never expire.
		 * - ``created_at``: Unix timestamp in seconds when the list was created.
		 * - ``updated_at``: Unix timestamp in seconds when the list was updated.
		 * ### Errors
		 * - If the resource type is not valid, it will return a ``400`` error.
		 * It will also return the API Global errors described in the API description.
		 * Get v1/allowlist/private/all/{resource_type}
		 * @return {PrivateAclGroupListCollectionOutput} Successful Response
		 */
		Get_all_private_allowlists_by_resource_type_v1_allowlist_private_all__resource_type__get(resource_type: Get_all_private_allowlists_by_resource_type_v1_allowlist_private_all__resource_type__getResource_type): Observable<PrivateAclGroupListCollectionOutput> {
			return this.http.get<PrivateAclGroupListCollectionOutput>(this.baseUri + 'v1/allowlist/private/all/' + resource_type, {});
		}

		/**
		 * Get the different private allowlists where the IP address was found.
		 * ### What
		 * Obtain the list of all the different private allowlists where the IP address entered by the user. The allowlisted forbidden datasets are the ones submitted manually by the user from files or indidual items.
		 * ### Parameters
		 * The endpoint accepts the `address` parameter as query string.
		 * ### Result
		 * The result is a JSON object with a list of the following JSON objects:
		 * - ``self``: the URI to individual status.
		 * - ``cidrs``: the URI of the lists of CIDRs where the IP was found.
		 * - ``country``: the URIs where the lists of countries where the IP address was found
		 * - ``continent``: the URI where the continent where the IP address was found.
		 * - ``asn``: the URIs where the list of continents of the ASN where the IP address was found.
		 * - ``datacenter``: the URIs of the lists of datacenters where the IP address was found. If not found, the result is an empty string.
		 * - ``reported``: the URI of the information of the IP address reported by the user. For allowlist should be empty.
		 * ### Errors
		 * - a `422 Unprocessable Entity` error if the IP address was malformed.
		 * It will also return the API Global errors described in the API description.
		 * Get v1/allowlist/private/ip/{address}
		 * @return {AclListCollectionOutput} Successful Response
		 */
		Query_resource_denylists_v1_allowlist_private_ip__address__get(address: string): Observable<AclListCollectionOutput> {
			return this.http.get<AclListCollectionOutput>(this.baseUri + 'v1/allowlist/private/ip/' + (address == null ? '' : encodeURIComponent(address)), {});
		}

		/**
		 * Delete all the bindings between a user and a private allowlist.
		 * ### What
		 * Delete all the bindings between a user and a private allowlist. This will remove the content of the allowlist, the allowlist from the user and also all the origins that are using the allowlist.
		 * This is an asynchronous operation. It can take several seconds until the operation completes, but the request willimmediately return a 202 Accepted response.
		 * ### Parameters
		 * In the query string the ID of the private allow list to delete.
		 * ### Result
		 * It should always return a 202 Accepted response with an empty body.
		 * ### Errors
		 * - If the list does not exist, it will return a 404 error.
		 * - If the allow list is not a valid UUID, it will return a 422 error.
		 * It will return the API Global errors described in the API description.
		 * Delete v1/allowlist/private/{allowlist_id}
		 * @return {any} Successful Response
		 */
		Delete_the_allowlist_v1_allowlist_private__allowlist_id__delete(allowlist_id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/allowlist/private/' + (allowlist_id == null ? '' : encodeURIComponent(allowlist_id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get the details of a specific private allowlist of the user.
		 * ### What
		 * Obtain the details of the private allow list of the user available in the service.
		 * ### Parameters
		 * Pass the private allowlist ID as query parameter.
		 * ### Result
		 * The result is a JSON object with the following structure:
		 * - ``self``: the URI to individual information of the list.
		 * - ``name``: A human readable name of the list.
		 * - ``description``: A long detailed information about what the list contains and how it is used.
		 * - ``resource_type``: The type of the list. It can be ``CIDR``, ``AS``, ``COUNTRY``, ``CONTINENT`` or ``DATACENTER_ID``.
		 * - ``list_type``: The type of the list. It can be ``ALLOW`` or ``DENY``.
		 * - ``created_at``: Unix timestamp in seconds when the list was created.
		 * - ``updated_at``: Unix timestamp in seconds when the list was updated.
		 * - ``expiry``: Unix timestamp in seconds when the list will expire. If it does not exist, it will never expire.
		 * - ``origins``: list of websites that are using the list as a allowlist.
		 * - ``self``: the URI to all the list of origins.
		 * - ``lists``: list of lists that the origin is using.
		 * - ``self``: the URI to the individual information of the list.
		 * - ``origin``: the protocol and domain of the website that is using the list.
		 * - ``status``: the status of the list. It can be ``ACTIVE`` or ``INACTIVE`` or ``EXPIRED``. If the list is ``EXPIRED`` it means that the list is not available anymore if not renewed.
		 * - ``expiry``: Unix timestamp in seconds when the list will expire. If it does not exist, it will never expire.
		 * - ``created_at``: Unix timestamp in seconds when the list was created.
		 * - ``updated_at``: Unix timestamp in seconds when the list was updated.
		 * ### Errors
		 * - If the allow list is not a valid UUID, it will return a 422 error.
		 * - If the private allowlist ID does not exist, it will return a ``404`` error.
		 * It will also return the API Global errors described in the API description.
		 * Get v1/allowlist/private/{allowlist_id}
		 * @return {PrivateAclGroupListOutput} Successful Response
		 */
		Get_single_allowlist_v1_allowlist_private__allowlist_id__get(allowlist_id: string): Observable<PrivateAclGroupListOutput> {
			return this.http.get<PrivateAclGroupListOutput>(this.baseUri + 'v1/allowlist/private/' + (allowlist_id == null ? '' : encodeURIComponent(allowlist_id)), {});
		}

		/**
		 * Update the information of an existing private allowlist of the user.
		 * ### What
		 * Updates the information that describes the allowlist of the user in the system. The parameters that can be modified are:
		 * - name
		 * - description
		 * - tags
		 * - expiry
		 * This is an asynchronous operation. It can take several seconds until the operation completes, but the request will immediately return a 202 Accepted response.
		 * ### Parameters
		 * In the query string the ID of the private allow list to delete.
		 * In the body the following parameters:
		 * - ``name``: (Optional) A human readable name of the list.
		 * - ``description``: (Optional) A long detailed information about what the list contains and how it is used.
		 * - ``tags``: (Optional) A list of tags that describe the list.
		 * - ``expiry``: (Optional) Unix timestamp in seconds when the list will expire. If it does not exist, it will never expire.
		 * ### Result
		 * It should always return a 202 Accepted response with an empty body.
		 * ### Errors
		 * - If the list does not exist, it will return a `404` (Not found) error.
		 * - If the list is a default list, it will return a `403` (Forbidden) error.
		 * - If the allow list is not a valid UUID, it will return a `422` (Unprocessable Entity) error.
		 * - If the expiry is not a valid timestamp, it will return a `422` (Unprocessable Entity) error.
		 * - If the expiry is in the past, it will return a `400` (Bad Request) error.
		 * - If the name is not a string, it will return a `422` (Unprocessable Entity) error.
		 * - If the description is not a string, it will return a `422` (Unprocessable Entity) error.
		 * It will return the API Global errors described in the API description.
		 * Put v1/allowlist/private/{allowlist_id}
		 * @return {any} Successful Response
		 */
		Update_private_allowlist_of_the_user_v1_allowlist_private__allowlist_id__put(allowlist_id: string, requestBody: Body_update_private_allowlist_of_the_user_v1_allowlist_private__allowlist_id__put): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'v1/allowlist/private/' + (allowlist_id == null ? '' : encodeURIComponent(allowlist_id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete all the content of a private allowlist of the user.
		 * ### What
		 * Delete all the content of a private allowlist of the user. This will remove all the elements, and there is no way to recover them.
		 * ### Parameters
		 * Pass the private allowlist ID as query parameter.
		 * ### Result
		 * If successful, it will return a ``202`` (Accepted) response with an empty body. The operation is asynchronous,and can take several seconds to complete.
		 * ### Errors
		 * - If the allow list is not a valid UUID, it will return a ``422`` (Unprocessable Entity) error.
		 * - If the private allowlist ID does not exist, it will return a ``404`` (Not found) error.
		 * It will also return the API Global errors described in the API description.
		 * Delete v1/allowlist/private/{allowlist_id}/content
		 * @return {any} Successful Response
		 */
		Delete_the_allowlist_content_v1_allowlist_private__allowlist_id__content_delete(allowlist_id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/allowlist/private/' + (allowlist_id == null ? '' : encodeURIComponent(allowlist_id)) + '/content', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get the content of a private allowlist of the user.
		 * ### What
		 * Returns the content of the private allowlist of the user. The content can be CIDRs, ASNs, countries, continents or    datacenter IDs.
		 * ### Parameters
		 * Pass the private allowlist ID as query parameter.
		 * The following pagination parameters are required as query string parameters:
		 * - ``page``: (Optional) the page number to retrieve. The first page is 1. Default is 1.
		 * - ``page_size``: (Optional) the number of items per page. Default is 20.
		 * ### Result
		 * The result is a JSON object with the following structure:
		 * - ``self``: the URI to the content of the list.
		 * - ``cidrs``: (Optional) list of CIDRs in the list.
		 * - ``asns``: (Optional) list of ASNs in the list.
		 * - ``countries``: (Optional) list of countries in the list.
		 * - ``continents``: (Optional) list of continents in the list.
		 * - ``datacenters``: (Optional) list of datacenters in the list.
		 * ### Errors
		 * - If the allow list is not a valid UUID, it will return a ``422`` (Unprocessable Entity) error.
		 * - If the private allowlist ID does not exist, it will return a ``404`` (Not found) error.
		 * It will also return the API Global errors described in the API description.
		 * Get v1/allowlist/private/{allowlist_id}/content
		 * @param {number} page The page to be returned
		 * @param {number} page_size The number of items per page
		 * @return {PrivateAclListCollectionOutput} Successful Response
		 */
		Get_allowlist_content_v1_allowlist_private__allowlist_id__content_get(allowlist_id: string, page: number | null | undefined, page_size: number | null | undefined): Observable<PrivateAclListCollectionOutput> {
			return this.http.get<PrivateAclListCollectionOutput>(this.baseUri + 'v1/allowlist/private/' + (allowlist_id == null ? '' : encodeURIComponent(allowlist_id)) + '/content&page=' + page + '&page_size=' + page_size, {});
		}

		/**
		 * Add or remove content of a private allowlist of the user.
		 * ### What
		 * Add or remove content of a private allowlist of the user. The content can be CIDRs, ASNs, countries, continents or datacenter IDs.
		 * The number of elements allowed in all the lists are limited depending on the plan of the user:
		 * - Free: 100 elements
		 * - Basic: 1000 elements
		 * - Pro: 10000 elements
		 * ### Parameters
		 * Pass the private allowlist ID as query parameter.
		 * In the body the following parameters:
		 * - ``append``: (Optional) Add CIDRs, ASNs, countries, continents or datacenter IDs to add to the list. It's not possible to mix different resource types in the same list.
		 * - ``remove``: (Optional) Extract CIDRs, ASNs, countries, continents or datacenter IDs to add to the list. It's not possible to mix different resource types in the same list.
		 * ### Result
		 * If successful, it will return a ``202`` (Accepted) response with an empty body. The operation is asynchronous,and can take several seconds to complete.
		 * ### Errors
		 * - If the allow list is not a valid UUID, it will return a ``422`` (Unprocessable Entity) error.
		 * - If the private allowlist ID does not exist, it will return a ``404`` (Not found) error.
		 * - If the ``append`` or ``remove`` parameters are not processable, it will return a ``422`` (Unprocessable Entity) error.
		 * - If the number of elements in the lists is over the limit, it will return a ``413`` (Payload Too Large) error.
		 * It will also return the API Global errors described in the API description.
		 * Put v1/allowlist/private/{allowlist_id}/content
		 * @return {any} Successful Response
		 */
		Update_private_content_of_the_allowlist_of_the_user_v1_allowlist_private__allowlist_id__content_put(allowlist_id: string, requestBody: Body_update_private_content_of_the_allowlist_of_the_user_v1_allowlist_private__allowlist_id__content_put): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'v1/allowlist/private/' + (allowlist_id == null ? '' : encodeURIComponent(allowlist_id)) + '/content', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Toogle the status of the origin in an allow list.
		 * ### What
		 * Change the status of the origin of an allow list to ``ACTIVE``, ``INACTIVE`` or ``DELETED``.
		 * An ``ACTIVE`` origin will apply the allow list to the protocol and domain of the origin. An origin can be created and activated simply toogling the ``ACTIVE`` status. As an optional parameter it can be provided an ``ttl`` or Time To Live parameter of the origin in the list in seconds. After the TTL expires, the origin will be removed from the list.  If the TTL is not provided, the origin will never expire.
		 * An ``INACTIVE`` origin will not apply the allow list to the protocol and domain of the origin.
		 * A ``DELETED`` origin will be removed from the list. It will not be used by the service anymore. The user can activate it again with the ``ACTIVE`` status.
		 * This is an asynchronous operation. It can take several seconds until the operation completes, but the request will  immediately return a 202 Accepted response.
		 * *This operation is not available in the Freemium plan.*
		 * ### Parameters
		 * In the query string the ID of the allow list to change the status.
		 * In the body the JSON object with the following fields:
		 * - ``origin``: The protocol and domain of the origin. It can be ``http://example.com`` or ``https://example.com``.
		 * - ``status``: The status of the list. It can be ``ACTIVE``, ``INACTIVE`` or ``DELETED``.
		 * ### Result
		 * It should always return a 202 Accepted response with an empty body.
		 * ### Errors
		 * If the list does not exist, it will return a 404 error.
		 * If the status is not ``ACTIVE`` or ``INACTIVE``, it will return a 422 error.
		 * If the TTL is negative in the past, it will return a 422 error.
		 * If the allow list is not a valid UUID, it will return a 422 error.
		 * If the origin is not a valid URL, it will return a 400 error.
		 * If the allowlist is not active, it will returna 409 error.
		 * If the origin is not found in the set owned by the user, it will return a 404 error.
		 * It will return the API Global errors described in the API description.
		 * Put v1/allowlist/private/{allowlist_id}/origin
		 * @return {any} Successful Response
		 */
		Change_status_of_the_origin_allowlist_v1_allowlist_private__allowlist_id__origin_put(allowlist_id: string, requestBody: Body_change_status_of_the_origin_allowlist_v1_allowlist_private__allowlist_id__origin_put): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'v1/allowlist/private/' + (allowlist_id == null ? '' : encodeURIComponent(allowlist_id)) + '/origin', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get the set of public allowlists.
		 * ### What
		 * Obtain the set of public allow lists available in the service and also which ones are already selected by the user and wich ones are not.
		 * ### Parameters
		 * No parameters
		 * ### Result
		 * The result is a JSON object with a list of the following JSON objects:
		 * - ``self``: the URI to the status of all the lists.
		 * - ``lists``: a list of JSON objects with the available lists:
		 * - ``self``: the URI to individual information of the list.
		 * - ``name``: A human readable name of the list.
		 * - ``description``: A long detailed information about what the list contains and how it is used.
		 * - ``resource_type``: The type of the list. It can be ``CIDR``, ``AS``, ``COUNTRY``, ``CONTINENT`` or ``DATACENTER_ID``.
		 * - ``list_type``: The type of the list. It can be ``ALLOW`` or ``DENY``.
		 * - ``status``: The status of the list. It can be ``ACTIVE`` or ``INACTIVE`` or ``EXPIRED``. If the list is ``EXPIRED``    it means that the list is not available anymore if not renewed.
		 * - ``created_at``: Unix timestamp in seconds when the list was created.
		 * - ``updated_at``: Unix timestamp in seconds when the list was updated.
		 * If the list is already selected by the user, the JSON object will also contain the following fields:
		 * - ``expiry``: Unix timestamp in seconds when the list will expire. If it does not exist, it will never expire.
		 * - ``origins``: list of websites that are using the list as an allowlist.
		 * - ``self``: the URI to all the list of origins.
		 * - ``lists``: list of lists that the origin is using.
		 * - ``self``: the URI to the individual information of the list.
		 * - ``origin``: the protocol and domain of the website that is using the list.
		 * - ``status``: the status of the list. It can be ``ACTIVE`` or ``INACTIVE`` or ``EXPIRED``. If the list is ``EXPIRED``        it means that the list is not available anymore if not renewed.
		 * - ``expiry``: Unix timestamp in seconds when the list will expire. If it does not exist, it will never expire.
		 * - ``created_at``: Unix timestamp in seconds when the list was created.
		 * - ``updated_at``: Unix timestamp in seconds when the list was updated.
		 * ### Errors
		 * It will return the API Global errors described in the API description.
		 * Get v1/allowlist/public/all
		 * @return {PublicAclGroupListCollectionOutput} Successful Response
		 */
		Get_all_public_allowlists_v1_allowlist_public_all_get(): Observable<PublicAclGroupListCollectionOutput> {
			return this.http.get<PublicAclGroupListCollectionOutput>(this.baseUri + 'v1/allowlist/public/all', {});
		}

		/**
		 * Get the set of public allowlists by resource type.
		 * ### What
		 * Obtain the set of public allow lists available in the service and also which ones are already selected by the user and wich ones are not filtering by the resource type.
		 * ### Parameters
		 * The ``resource type`` to filter. The values can be ``CIDR``, ``AS``, ``COUNTRY``, ``CONTINENT`` or ``DATACENTER_ID``.
		 * ### Result
		 * The result is a JSON object with a list of the following JSON objects:
		 * - ``self``: the URI to the status of all the lists.
		 * - ``lists``: a list of JSON objects with the available lists:
		 * - ``self``: the URI to individual information of the list.
		 * - ``name``: A human readable name of the list.
		 * - ``description``: A long detailed information about what the list contains and how it is used.
		 * - ``resource_type``: The type of the list. It can be ``CIDR``, ``AS``, ``COUNTRY``, ``CONTINENT`` or ``DATACENTER_ID``.
		 * - ``list_type``: The type of the list. It can be ``ALLOW`` or ``DENY``.
		 * - ``status``: The status of the list. It can be ``ACTIVE`` or ``INACTIVE`` or ``EXPIRED``. If the list is ``EXPIRED``    it means that the list is not available anymore if not renewed.
		 * - ``created_at``: Unix timestamp in seconds when the list was created.
		 * - ``updated_at``: Unix timestamp in seconds when the list was updated.
		 * If the list is already selected by the user, the JSON object will also contain the following fields:
		 * - ``expiry``: Unix timestamp in seconds when the list will expire. If it does not exist, it will never expire.
		 * - ``origins``: list of websites that are using the list as an allowlist.
		 * - ``self``: the URI to all the list of origins.
		 * - ``lists``: list of lists that the origin is using.
		 * - ``self``: the URI to the individual information of the list.
		 * - ``origin``: the protocol and domain of the website that is using the list.
		 * - ``status``: the status of the list. It can be ``ACTIVE`` or ``INACTIVE`` or ``EXPIRED``. If the list is ``EXPIRED``        it means that the list is not available anymore if not renewed.
		 * - ``expiry``: Unix timestamp in seconds when the list will expire. If it does not exist, it will never expire.
		 * - ``created_at``: Unix timestamp in seconds when the list was created.
		 * - ``updated_at``: Unix timestamp in seconds when the list was updated.
		 * ### Errors
		 * It will return the API Global errors described in the API description.
		 * Get v1/allowlist/public/all/{resource_type}
		 * @return {PublicAclGroupListCollectionOutput} Successful Response
		 */
		Get_all_public_allowlists_by_resource_type_v1_allowlist_public_all__resource_type__get(resource_type: Get_all_private_allowlists_by_resource_type_v1_allowlist_private_all__resource_type__getResource_type): Observable<PublicAclGroupListCollectionOutput> {
			return this.http.get<PublicAclGroupListCollectionOutput>(this.baseUri + 'v1/allowlist/public/all/' + resource_type, {});
		}

		/**
		 * Get the different public allowlists where the IP address was found.
		 * ### What
		 * Obtain the list of all the different public allowlists where the IP address entered by the user is. The public allowlists are the ones activated by the user, but managed by Threatjammer administrators.
		 * ### Parameters
		 * The endpoint accepts the `address` parameter as query string.
		 * ### Result
		 * The result is a JSON object with a list of the following JSON objects:
		 * - ``self``: the URI to individual status.
		 * - ``cidrs``: the URI of the lists of CIDRs where the IP was found.
		 * - ``country``: the URIs where the lists of countries where the IP address was found
		 * - ``continent``: the URI where the continent where the IP address was found.
		 * - ``asn``: the URIs where the list of continents of the ASN where the IP address was found.
		 * - ``datacenter``: the URIs of the lists of datacenters where the IP address was found. If not found, the result is an empty string.
		 * ### Errors
		 * - a `422 Unprocessable Entity` error if the IP address was malformed.
		 * It will also return the API Global errors described in the API description.
		 * Get v1/allowlist/public/ip/{address}
		 * @return {AclListCollectionOutput} Successful Response
		 */
		Query_resource_allowlists_v1_allowlist_public_ip__address__get(address: string): Observable<AclListCollectionOutput> {
			return this.http.get<AclListCollectionOutput>(this.baseUri + 'v1/allowlist/public/ip/' + (address == null ? '' : encodeURIComponent(address)), {});
		}

		/**
		 * Get the set of owned allowlists.
		 * ### What
		 * Obtain the set of public allow lists available in the service selected by the user.
		 * ### Parameters
		 * No parameters
		 * ### Result
		 * The result is a JSON object with a list of the following JSON objects:
		 * - ``self``: the URI to the status of all the lists.
		 * - ``lists``: a list of JSON objects with the available lists:
		 * - ``self``: the URI to individual information of the list.
		 * - ``name``: A human readable name of the list.
		 * - ``description``: A long detailed information about what the list contains and how it is used.
		 * - ``resource_type``: The type of the list. It can be ``CIDR``, ``AS``, ``COUNTRY``, ``CONTINENT`` or ``DATACENTER_ID``.
		 * - ``list_type``: The type of the list. It can be ``ALLOW`` or ``DENY``.
		 * - ``status``: The status of the list. It can be ``ACTIVE`` or ``INACTIVE`` or ``EXPIRED``. If the list is ``EXPIRED``    it means that the list is not available anymore if not renewed.
		 * - ``created_at``: Unix timestamp in seconds when the list was created.
		 * - ``updated_at``: Unix timestamp in seconds when the list was updated.
		 * - ``expiry``: Unix timestamp in seconds when the list will expire. If it does not exist, it will never expire.
		 * - ``origins``: list of websites that are using the list as an allowlist.
		 * - ``self``: the URI to all the list of origins.
		 * - ``lists``: list of lists that the origin is using.
		 * - ``self``: the URI to the individual information of the list.
		 * - ``origin``: the protocol and domain of the website that is using the list.
		 * - ``status``: the status of the list. It can be ``ACTIVE`` or ``INACTIVE`` or ``EXPIRED``. If the list is ``EXPIRED``            it means that the list is not available anymore if not renewed.
		 * - ``expiry``: Unix timestamp in seconds when the list will expire. If it does not exist, it will never expire.
		 * - ``created_at``: Unix timestamp in seconds when the list was created.
		 * - ``updated_at``: Unix timestamp in seconds when the list was updated.
		 * ### Errors
		 * It will return the API Global errors described in the API description.
		 * Get v1/allowlist/public/owned
		 * @return {PublicAclGroupListCollectionOutput} Successful Response
		 */
		Get_public_allowlists_owned_by_the_user_v1_allowlist_public_owned_get(): Observable<PublicAclGroupListCollectionOutput> {
			return this.http.get<PublicAclGroupListCollectionOutput>(this.baseUri + 'v1/allowlist/public/owned', {});
		}

		/**
		 * Get the set of public allowlists of a user by resource type.
		 * ### What
		 * Obtain the set of public allow lists selected by the user and wich ones are not filtering by the resource type.
		 * ### Parameters
		 * The ``resource type`` to filter. The values can be ``CIDR``, ``AS``, ``COUNTRY``, ``CONTINENT`` or ``DATACENTER_ID``.
		 * ### Result
		 * The result is a JSON object with a list of the following JSON objects:
		 * - ``self``: the URI to the status of all the lists.
		 * - ``lists``: a list of JSON objects with the available lists:
		 * - ``self``: the URI to individual information of the list.
		 * - ``name``: A human readable name of the list.
		 * - ``description``: A long detailed information about what the list contains and how it is used.
		 * - ``resource_type``: The type of the list. It can be ``CIDR``, ``AS``, ``COUNTRY``, ``CONTINENT`` or ``DATACENTER_ID``.
		 * - ``list_type``: The type of the list. It can be ``ALLOW`` or ``DENY``.
		 * - ``status``: The status of the list. It can be ``ACTIVE`` or ``INACTIVE`` or ``EXPIRED``. If the list is ``EXPIRED``    it means that the list is not available anymore if not renewed.
		 * - ``created_at``: Unix timestamp in seconds when the list was created.
		 * - ``updated_at``: Unix timestamp in seconds when the list was updated.
		 * - ``expiry``: Unix timestamp in seconds when the list will expire. If it does not exist, it will never expire.
		 * - ``origins``: list of websites that are using the list as an allowlist.
		 * - ``self``: the URI to all the list of origins.
		 * - ``lists``: list of lists that the origin is using.
		 * - ``self``: the URI to the individual information of the list.
		 * - ``origin``: the protocol and domain of the website that is using the list.
		 * - ``status``: the status of the list. It can be ``ACTIVE`` or ``INACTIVE`` or ``EXPIRED``. If the list is ``EXPIRED``            it means that the list is not available anymore if not renewed.
		 * - ``expiry``: Unix timestamp in seconds when the list will expire. If it does not exist, it will never expire.
		 * - ``created_at``: Unix timestamp in seconds when the list was created.
		 * - ``updated_at``: Unix timestamp in seconds when the list was updated.
		 * ### Errors
		 * It will return the API Global errors described in the API description.
		 * Get v1/allowlist/public/owned/{resource_type}
		 * @return {PublicAclGroupListCollectionOutput} Successful Response
		 */
		Get_all_owned_allowlists_by_resource_type_v1_allowlist_public_owned__resource_type__get(resource_type: Get_all_private_allowlists_by_resource_type_v1_allowlist_private_all__resource_type__getResource_type): Observable<PublicAclGroupListCollectionOutput> {
			return this.http.get<PublicAclGroupListCollectionOutput>(this.baseUri + 'v1/allowlist/public/owned/' + resource_type, {});
		}

		/**
		 * Delete all the bindings between a user and an allowlist.
		 * ### What
		 * Delete all the bindings between a user and an allowlist. This will remove the allowlist from the user and also all the origins that are using the allowlist.
		 * This is an asynchronous operation. It can take several seconds until the operation completes, but the request will  immediately return a 202 Accepted response.
		 * ### Parameters
		 * In the query string the ID of the allow list to change the status.
		 * ### Result
		 * It should always return a 202 Accepted response with an empty body.
		 * ### Errors
		 * If the list does not exist, it will return a 404 error.
		 * If the allow list is not a valid UUID, it will return a 422 error.
		 * It will return the API Global errors described in the API description.
		 * Delete v1/allowlist/public/{allowlist_id}
		 * @return {any} Successful Response
		 */
		Delete_the_allowlist_v1_allowlist_public__allowlist_id__delete(allowlist_id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/allowlist/public/' + (allowlist_id == null ? '' : encodeURIComponent(allowlist_id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get the details of the allowlist.
		 * ### What
		 * Obtain the details of an allow list available in the service.
		 * ### Parameters
		 * No parameters
		 * ### Result
		 * The result is a JSON object with a list of the following JSON objects:
		 * - ``self``: the URI to individual information of the list.
		 * - ``name``: A human readable name of the list.
		 * - ``description``: A long detailed information about what the list contains and how it is used.
		 * - ``resource_type``: The type of the list. It can be ``CIDR``, ``AS``, ``COUNTRY``, ``CONTINENT`` or ``DATACENTER_ID``.
		 * - ``list_type``: The type of the list. It can be ``ALLOW`` or ``DENY``.
		 * - ``status``: The status of the list. It can be ``ACTIVE`` or ``INACTIVE`` or ``EXPIRED``. If the list is ``EXPIRED``it means that the list is not available anymore if not renewed.
		 * - ``created_at``: Unix timestamp in seconds when the list was created.
		 * - ``updated_at``: Unix timestamp in seconds when the list was updated.
		 * If the list is already selected by the user, the JSON object will also contain the following fields:
		 * - ``expiry``: Unix timestamp in seconds when the list will expire. If it does not exist, it will never expire.
		 * - ``origins``: list of websites that are using the list as an allowlist.
		 * - ``self``: the URI to all the list of origins.
		 * - ``lists``: list of lists that the origin is using.
		 * - ``self``: the URI to the individual information of the list.
		 * - ``origin``: the protocol and domain of the website that is using the list.
		 * - ``status``: the status of the list. It can be ``ACTIVE`` or ``INACTIVE`` or ``EXPIRED``. If the list is ``EXPIRED``            it means that the list is not available anymore if not renewed.
		 * - ``expiry``: Unix timestamp in seconds when the list will expire. If it does not exist, it will never expire.
		 * - ``created_at``: Unix timestamp in seconds when the list was created.
		 * - ``updated_at``: Unix timestamp in seconds when the list was updated.
		 * ### Errors
		 * If the list does not exist, it will return a 404 error.
		 * It will return the API Global errors described in the API description.
		 * Get v1/allowlist/public/{allowlist_id}
		 * @return {PublicAclGroupListOutput} Successful Response
		 */
		Get_single_allowlist_v1_allowlist_public__allowlist_id__get(allowlist_id: string): Observable<PublicAclGroupListOutput> {
			return this.http.get<PublicAclGroupListOutput>(this.baseUri + 'v1/allowlist/public/' + (allowlist_id == null ? '' : encodeURIComponent(allowlist_id)), {});
		}

		/**
		 * Toogle the status of an allow list.
		 * ### What
		 * Change the status of an allow list to ``ACTIVE`` or ``INACTIVE``. An ``INACTIVE`` list will not be used by the service. An ``ACTIVE`` list will be used by the service. As an optional parameter it can be provided an ``expiry`` date in seconds since epoch. If not provided, the list will never expire.
		 * This is an asynchronous operation. It can take several seconds until the operation completes, but the request will  immediately return a 202 Accepted response.
		 * ### Parameters
		 * In the query string the ID of the allow list to change the status.
		 * In the body the JSON object with the following fields:
		 * - ``status``: The status of the list. It can be ``ACTIVE`` or ``INACTIVE``.
		 * - ``expiry``: Unix timestamp in seconds when the list will expire. If it does not exist, it will never expire.
		 * ### Result
		 * It should always return a 202 Accepted response with an empty body.
		 * ### Errors
		 * If the list does not exist, it will return a 404 error.
		 * If the status is not ``ACTIVE`` or ``INACTIVE``, it will return a 422 error.
		 * If the expiry is not a valid timestamp, it will return a 422 error.
		 * If the allow list is not a valid UUID, it will return a 422 error.
		 * It will return the API Global errors described in the API description.
		 * Put v1/allowlist/public/{allowlist_id}
		 * @return {any} Successful Response
		 */
		Change_status_of_the_allowlist_v1_allowlist_public__allowlist_id__put(allowlist_id: string, requestBody: Body_change_status_of_the_allowlist_v1_allowlist_public__allowlist_id__put): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'v1/allowlist/public/' + (allowlist_id == null ? '' : encodeURIComponent(allowlist_id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Toogle the status of the origin in an allow list.
		 * ### What
		 * Change the status of the origin of an allow list to ``ACTIVE``, ``INACTIVE`` or ``DELETED``.
		 * An ``ACTIVE`` origin will apply the allow list to the protocol and domain of the origin. An origin can be created and activated simply toogling the ``ACTIVE`` status. As an optional parameter it can be provided an ``ttl`` or Time To Live parameter of the origin in the list in seconds. After the TTL expires, the origin will be removed from the list.  If the TTL is not provided, the origin will never expire.
		 * An ``INACTIVE`` origin will not apply the allow list to the protocol and domain of the origin.
		 * A ``DELETED`` origin will be removed from the list. It will not be used by the service anymore. The user can activate it again with the ``ACTIVE`` status.
		 * This is an asynchronous operation. It can take several seconds until the operation completes, but the request will  immediately return a 202 Accepted response.
		 * *This operation is not available in the Freemium plan.*
		 * ### Parameters
		 * In the query string the ID of the allow list to change the status.
		 * In the body the JSON object with the following fields:
		 * - ``origin``: The protocol and domain of the origin. It can be ``http://example.com`` or ``https://example.com``.
		 * - ``status``: The status of the list. It can be ``ACTIVE``, ``INACTIVE`` or ``DELETED``.
		 * ### Result
		 * It should always return a 202 Accepted response with an empty body.
		 * ### Errors
		 * If the list does not exist, it will return a 404 error.
		 * If the status is not ``ACTIVE`` or ``INACTIVE``, it will return a 422 error.
		 * If the TTL is negative in the past, it will return a 422 error.
		 * If the allow list is not a valid UUID, it will return a 422 error.
		 * If the origin is not a valid URL, it will return a 400 error.
		 * If the allowlist is not active, it will returna 409 error.
		 * If the origin is not found in the set owned by the user, it will return a 404 error.
		 * It will return the API Global errors described in the API description.
		 * Put v1/allowlist/public/{allowlist_id}/origin
		 * @return {any} Successful Response
		 */
		Change_status_of_the_origin_allowlist_v1_allowlist_public__allowlist_id__origin_put(allowlist_id: string, requestBody: Body_change_status_of_the_origin_allowlist_v1_allowlist_public__allowlist_id__origin_put): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'v1/allowlist/public/' + (allowlist_id == null ? '' : encodeURIComponent(allowlist_id)) + '/origin', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get the IPv4 or IPv6 prefix of the IP address given.
		 * ### What
		 * Obtain the IPv4 or IPv6 prefix and the Autonomous System information of the IP address passed as a parameter.
		 * ### Parameters
		 * The endpoint accepts only the following parameter in the path:
		 * - ``ip_address``: (Mandatory) The IPv4 or IPv6 address to be queried.
		 * ### Result
		 * The result is a JSON object with the following structure:
		 * - ``self``: the URI to individual IPv4 prefix.
		 * - ``asn``: the URI to query the full details of the ASN.
		 * - ``object_type``: the type of the prefix. The allowed values are: IPv4 or IPv6.
		 * - ``maintainer``: the information about the maintainer of this prefix in the registry.
		 * - ``description``: the description of the prefix as registered in the registry.
		 * - ``registry_date``: the date of registration of the prefix in the registry. The format is YYYY-MM-DD.
		 * - ``registry_status``: the URI of the status of the prefix as stored in the registry.
		 * - ``score``: The risk score of the prefix. It ranges from 0 to 99.
		 * - ``risk``: The risk of the prefix. The allowed values are: LOW, MEDIUM, HIGH. It's a human readable representation of the score.
		 * ### Errors
		 * The endpoint will return the following errors:
		 * - a `404 Not Found` error if the prefix information was not found.
		 * - a `422 Unprocessable Entity` error if the IP address is malformed.
		 * It will also return the API Global errors described in the API description.
		 * Get v1/asn/ip/{ip_address}
		 * @return {AutonomousSystemPrefixOutput} Successful Response
		 */
		Query_IP_address_network_information_v1_asn_ip__ip_address__get(ip_address: string): Observable<AutonomousSystemPrefixOutput> {
			return this.http.get<AutonomousSystemPrefixOutput>(this.baseUri + 'v1/asn/ip/' + (ip_address == null ? '' : encodeURIComponent(ip_address)), {});
		}

		/**
		 * Get the IPv4 or IPv6 prefix of the CIDR given.
		 * ### What
		 * Obtain the IPv4 or IPv6 prefix and the Autonomous System information of the CIDR passed in the body as a POST method. This endpoint works around the problem of passing '/' addresses in the URI.
		 * ### Parameters
		 * The endpoint accepts only the following parameter in the body as a JSON object:
		 * - ``prefix``: (Mandatory) The CIDR v4 or v6 to be queried.
		 * ### Result
		 * The result is a JSON object with the following structure:
		 * - ``self``: the URI to individual IPv4 prefix.
		 * - ``asn``: the URI to query the full details of the ASN.
		 * - ``object_type``: the type of the prefix. The allowed values are: IPv4 or IPv6.
		 * - ``maintainer``: the information about the maintainer of this prefix in the registry.
		 * - ``description``: the description of the prefix as registered in the registry.
		 * - ``registry_date``: the date of registration of the prefix in the registry. The format is YYYY-MM-DD.
		 * - ``registry_status``: the URI of the status of the prefix as stored in the registry.
		 * - ``score``: The risk score of the prefix. It ranges from 0 to 99.
		 * - ``risk``: The risk of the prefix. The allowed values are: LOW, MEDIUM, HIGH. It's a human readable representation of the score.
		 * ### Errors
		 * The endpoint will return the following errors:
		 * - a `404 Not Found` error if the prefix information was not found.
		 * - a `422 Unprocessable Entity` error if the CIDR is malformed.
		 * It will also return the API Global errors described in the API description.
		 * Post v1/asn/prefix
		 * @return {AutonomousSystemPrefixOutput} Successful Response
		 */
		Query_asn_prefix_information_v1_asn_prefix_post(requestBody: Body_query_asn_prefix_information_v1_asn_prefix_post): Observable<AutonomousSystemPrefixOutput> {
			return this.http.post<AutonomousSystemPrefixOutput>(this.baseUri + 'v1/asn/prefix', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get the list of the Regional Internet Registries (RIRs) entities worldwide.
		 * ### What
		 * Obtain the list of Regional Internet Registries (RIRs) entities worldwide.
		 * ### Parameters
		 * No parameters are required.
		 * ### Result
		 * The result is a JSON object with a list of the following JSON objects:
		 * - ``self``: the URI to individual RIR.
		 * - ``name``: the RIR name.
		 * - ``code``: the internal code of the RIR in the system. Possible values are: iana, arin, ripencc, afrinic, apnic, lacnic.
		 * ### Errors
		 * It will return the API Global errors described in the API description.
		 * Get v1/asn/registry/all
		 * @return {Array<AutonomousSystemRegistryOutput>} Successful Response
		 */
		Query_registry_names_v1_asn_registry_all_get(): Observable<Array<AutonomousSystemRegistryOutput>> {
			return this.http.get<Array<AutonomousSystemRegistryOutput>>(this.baseUri + 'v1/asn/registry/all', {});
		}

		/**
		 * Get the information of a Regional Internet Registries (RIRs) given.
		 * ### What
		 * Obtain the information about the Regional Internet Registries (RIRs) given as a parameter.
		 * ### Parameters
		 * The endpoint accepts only the following parameter in the path:
		 * - ``code``: (Mandatory) The code that identifies uniquely the RIR. Possible values are: iana, arin, ripencc, afrinic, apnic, lacnic.
		 * ### Result
		 * The result is a JSON object with the following structure:
		 * - ``self``: the URI to individual RIR.
		 * - ``name``: the RIR name.
		 * - ``code``: the internal code of the RIR in the system.
		 * ### Errors
		 * - a `422 Unprocessable Entity` error if the code is not one of the available.
		 * It will also return the API Global errors described in the API description.
		 * Get v1/asn/registry/{code}
		 * @return {AutonomousSystemRegistryOutput} Successful Response
		 */
		Query_registry_by_the_name_v1_asn_registry__code__get(code: Query_registry_by_the_name_v1_asn_registry__code__getCode): Observable<AutonomousSystemRegistryOutput> {
			return this.http.get<AutonomousSystemRegistryOutput>(this.baseUri + 'v1/asn/registry/' + code, {});
		}

		/**
		 * Get the list of status of an object in a registry.
		 * ### What
		 * Obtain the list of status of an object can be in a registry.
		 * ### Parameters
		 * No parameters are required.
		 * ### Result
		 * The result is a JSON object with a list of the following JSON objects:
		 * - ``self``: the URI to individual status.
		 * - ``name``: the code name.
		 * - ``code``: the internal code of the status in the system. Possible values are: assigned, reserved, allocated, available.
		 * ### Errors
		 * It will return the API Global errors described in the API description.
		 * Get v1/asn/status/all
		 * @return {Array<AutonomousSystemStatusOutput>} Successful Response
		 */
		Query_status_names_v1_asn_status_all_get(): Observable<Array<AutonomousSystemStatusOutput>> {
			return this.http.get<Array<AutonomousSystemStatusOutput>>(this.baseUri + 'v1/asn/status/all', {});
		}

		/**
		 * Get the information of a status given.
		 * ### What
		 * Obtain the information about the status of an object in the registry as a parameter.
		 * ### Parameters
		 * The endpoint accepts only the following parameter in the path:
		 * - ``code``: (Mandatory) The code that identifies uniquely the status in the registry. Possible values are: assigned, reserved, allocated, available.
		 * ### Result
		 * The result is a JSON object with the following structure:
		 * - ``self``: the URI to individual status.
		 * - ``name``: the human readable name of the status.
		 * - ``code``: the internal code of the status in the system.
		 * ### Errors
		 * - a `422 Unprocessable Entity` error if the code is not one of the available.
		 * It will also return the API Global errors described in the API description.
		 * Get v1/asn/status/{code}
		 * @return {AutonomousSystemStatusOutput} Successful Response
		 */
		Query_status_by_the_name_v1_asn_status__code__get(code: Query_status_by_the_name_v1_asn_status__code__getCode): Observable<AutonomousSystemStatusOutput> {
			return this.http.get<AutonomousSystemStatusOutput>(this.baseUri + 'v1/asn/status/' + code, {});
		}

		/**
		 * Get the Autonomous System details of the AS number given.
		 * ### What
		 * Obtain the full details of the Autonomous System Number (ASN) passed as a parameter.
		 * ### Parameters
		 * The endpoint accepts only the following parameter in the path:
		 * - ``number``: (Mandatory) The ASN number to be queried.
		 * ### Result
		 * The result is a JSON object with the following structure:
		 * - ``self``: the URI of the API call
		 * - ``name``: the name of the Autonomous System as registered in the registries databases.
		 * - ``description``: the description of the Autonomous System as registered in the registries databases.
		 * - ``country_code``: the ISO 3166-1 alpha-2 country code of the Autonomous System.
		 * - ``registry_date``: the date of registration of the Autonomous System in the registry. The format is YYYY-MM-DD.
		 * - ``registry``: the URI of the registry where the Autonomous System is registered.
		 * - ``status``: the status of the Autonomous System as stored in the registry.
		 * - ``prefixes``: the URI to the list of prefixes that belong to the Autonomous System.
		 * - ``score``: The risk score of the Autonomous System. It ranges from 0 to 99.
		 * - ``risk``: The risk of the Autonomous System. The allowed values are: LOW, MEDIUM, HIGH. It's a human readable representation of the score.
		 * ### Errors
		 * The endpoint will return the following errors:
		 * - a `404 Not Found` error if the AS was not found.
		 * - a `422 Unprocessable Entity` error if the AS number is malformed.
		 * It will also return the API Global errors described in the API description.
		 * Get v1/asn/{number}
		 * @return {AutonomousSystemOutput} Successful Response
		 */
		Query_asn_v1_asn__number__get(number: number): Observable<AutonomousSystemOutput> {
			return this.http.get<AutonomousSystemOutput>(this.baseUri + 'v1/asn/' + number, {});
		}

		/**
		 * Get the list of IPv4 and IPv6 prefixes of the AS number given.
		 * ### What
		 * Obtain the full list of IPv4 and IPv6 prefixes of the Autonomous System Number (ASN) passed as a parameter.
		 * ### Parameters
		 * The endpoint accepts only the following parameter in the path:
		 * - ``number``: (Mandatory) The ASN number to be queried.
		 * ### Result
		 * The result is a JSON object with the following structure:
		 * - ``self``: the URI of the API call
		 * - ``asn``: the URI to query the full details of the ASN.
		 * - ``prefixes_v4``: the list of IPv4 prefixes that belong to the ASN. Each element of the list is a JSON object with the following structure:
		 * - ``self``: the URI to individual IPv4 prefix.
		 * - ``asn``: the URI to query the full details of the ASN.
		 * - ``object_type``: the type of the prefix. The allowed values are: IPv4.
		 * - ``maintainer``: the information about the maintainer of this prefix in the registry.
		 * - ``description``: the description of the prefix as registered in the registry.
		 * - ``registry_date``: the date of registration of the prefix in the registry. The format is YYYY-MM-DD.
		 * - ``registry_status``: the URI of the status of the prefix as stored in the registry.
		 * - ``score``: The risk score of the prefix. It ranges from 0 to 99.
		 * - ``risk``: The risk of the prefix. The allowed values are: LOW, MEDIUM, HIGH. It's a human readable representation of the score.
		 * - ``prefixes_v6``: the list of IPv6 prefixes that belong to the ASN. Each element of the list is a JSON object with the following structure:
		 * - ``self``: the URI to individual IPv6 prefix.
		 * - ``asn``: the URI to query the full details of the ASN.
		 * - ``object_type``: the type of the prefix. The allowed values are: IPv6.
		 * - ``maintainer``: the information about the maintainer of this prefix in the registry.
		 * - ``description``: the description of the prefix as registered in the registry.
		 * - ``registry_date``: the date of registration of the prefix in the registry. The format is YYYY-MM-DD.
		 * - ``registry_status``: the URI of the status of the prefix as stored in the registry.
		 * - ``score``: The risk score of the prefix. It ranges from 0 to 99.
		 * - ``risk``: The risk of the prefix. The allowed values are: LOW, MEDIUM, HIGH. It's a human readable representation of the score.
		 * ### Errors
		 * The endpoint will return the following errors:
		 * - a `404 Not Found` error if the AS was not found.
		 * - a `422 Unprocessable Entity` error if the AS number is malformed.
		 * It will also return the API Global errors described in the API description.
		 * Get v1/asn/{number}/prefixes
		 * @return {AutonomousSystemPrefixesOutput} Successful Response
		 */
		Query_asn_prefixes_list_v1_asn__number__prefixes_get(number: number): Observable<AutonomousSystemPrefixesOutput> {
			return this.http.get<AutonomousSystemPrefixesOutput>(this.baseUri + 'v1/asn/' + number + '/prefixes', {});
		}

		/**
		 * Get the risk score of all IP address passed in the body and other data signals.
		 * ### What
		 * Obtain a numerical score and a risk assessment of all the IP addresses passed as argument.
		 * ### Parameters
		 * A list of public IPv4 or IPv6 addresses is required in the body of the request.
		 * ### Result
		 * The result contains a list of the result for each IP address, with two main sets of data:
		 * - The score is a number **between 0 and 99** describing the probability of the IP address being a malicious one, being **0** means that the IP address is not malicious and is not a threat. Being **99** means that the service behind the IP address is probably malicious an certainly a threat.
		 * - The list of information gathered from the IP address to obtain the score.
		 * The result is a JSON object with the following structure:
		 * - ``self``: the URI of the API call
		 * - ``score``: The score of the IP address. It ranges from 0 to 99.
		 * - ``risk``: The risk of the IP address. The allowed values are: LOW, MEDIUM, HIGH. It's a human readable representation of the score.
		 * - ``reason``: It's a human readable representation of the reason of the risk.
		 * - ``datasets``: The IP address was found in the these lists of datasets used to obtain the risk score. Datasets are described as a list of URIs.
		 * - ``sources``: The IP address was found in the these source lists at an specific time with a specific risk score. Sources are described as a list of URIs.
		 * - ``log``: The activity of the IP address in the different datasets used to obtain the risk score. The log is a URI reference.
		 * - ``asn``: The information about the Autonomous System (AS) of the IP address. The AS is described as an URI.
		 * - ``asn_prefix``: The information about the Autonomous System (AS) network prefix of the IP address. The prefix is described as an URI.
		 * - ``datacenter``: If the IP address is part of a datacenter pool, the information about the datacenter is described as an URI.
		 * - ``datacenter_prefix``: The information about the Datacenter network prefix of the IP address. The `asn_prefix` and `datacenter_prefix` can be the same, but it is not mandatory. The prefix is described as an URI.
		 * - ``denylisted``: If the IP address was denylisted by the user, the information about the denylisted IP address is described as an URI.
		 * - ``first_appearence``: URI to the first appearance of the IP address in the different datasets used to obtain the risk score.
		 * - ``last_appearence``: URI to the last appearance of the IP address in the different datasets used to obtain the risk score.
		 * ### Errors
		 * The endpoint will return the following errors:
		 * - a `422 Unprocessable Entity` error if the IP address is malformed.
		 * The private IP addresses will be ignored, if any.
		 * It will also return the API Global errors described in the API description.
		 * Post v1/assess/ip
		 * @return {IPAssessmentCollectionOutput} The server will return a valid answer in the following cases:
		 */
		Assess_ip_set_v1_assess_ip_post(requestBody: Array<string>): Observable<IPAssessmentCollectionOutput> {
			return this.http.post<IPAssessmentCollectionOutput>(this.baseUri + 'v1/assess/ip', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get a risk score of the IP address and different data signals.
		 * ### What
		 * Obtain a numerical score and a risk assessment of the IP address passed as argument.
		 * ### Parameters
		 * The only argument accepted in the query string is a public IPv4 or IPv6 addresses.
		 * ### Result
		 * The result contains two main sets of data:
		 * - The score is a number **between 0 and 99** describing the probability of the IP address being a malicious one, being **0** means that the IP address is not malicious and is not a threat. Being **99** means that the service behind the IP address is probably malicious an certainly a threat.
		 * - The list of information gathered from the IP address to obtain the score.
		 * The result is a JSON object with the following structure:
		 * - ``self``: the URI of the API call
		 * - ``score``: The score of the IP address. It ranges from 0 to 99.
		 * - ``risk``: The risk of the IP address. The allowed values are: LOW, MEDIUM, HIGH. It's a human readable representation of the score.
		 * - ``reason``: It's a human readable representation of the reason of the risk.
		 * - ``datasets``: The IP address was found in the these lists of datasets used to obtain the risk score. Datasets are described as a list of URIs.
		 * - ``sources``: The IP address was found in the these source lists at an specific time with a specific risk score. Sources are described as a list of URIs.
		 * - ``log``: The activity of the IP address in the different datasets used to obtain the risk score. The log is a URI reference.
		 * - ``asn``: The information about the Autonomous System (AS) of the IP address. The AS is described as an URI.
		 * - ``asn_prefix``: The information about the Autonomous System (AS) network prefix of the IP address. The prefix is described as an URI.
		 * - ``datacenter``: If the IP address is part of a datacenter pool, the information about the datacenter is described as an URI.
		 * - ``datacenter_prefix``: The information about the Datacenter network prefix of the IP address. The `asn_prefix` and `datacenter_prefix` can be the same, but it is not mandatory. The prefix is described as an URI.
		 * - ``denylisted``: If the IP address was denylisted by the user, the information about the denylisted IP address is described as an URI.
		 * - ``first_appearence``: URI to the first appearance of the IP address in the different datasets used to obtain the risk score.
		 * - ``last_appearence``: URI to the last appearance of the IP address in the different datasets used to obtain the risk score.
		 * ### Errors
		 * The endpoint will return the following errors:
		 * - a `400 Bad Request` error if the IP address is not public.
		 * - a `422 Unprocessable Entity` error if the IP address is malformed.
		 * It will also return the API Global errors described in the API description.
		 * Get v1/assess/ip/{ip_address}
		 * @return {IPAssessmentOutput} The server will return a valid answer in the following cases:
		 */
		Assess_ip_v1_assess_ip__ip_address__get(ip_address: string): Observable<IPAssessmentOutput> {
			return this.http.get<IPAssessmentOutput>(this.baseUri + 'v1/assess/ip/' + (ip_address == null ? '' : encodeURIComponent(ip_address)), {});
		}

		/**
		 * Get the IPv4 or IPv6 prefix of the IP address given.
		 * ### What
		 * Obtain the IPv4 or IPv6 prefix and the Datacenter information of the IP address passed as a parameter.
		 * ### Parameters
		 * The endpoint accepts only the following parameter in the path:
		 * - ``ip_address``: (Mandatory) The IPv4 or IPv6 address to be queried.
		 * ### Result
		 * - The result is a JSON object with the following structure:
		 * - ``self``: the URI to individual IPv4 prefix.
		 * - ``datacenter_id``: the URI to query the full details of the Datacenter.
		 * - ``score``: The risk score of the prefix. It ranges from 0 to 99.
		 * - ``risk``: The risk of the prefix. The allowed values are: LOW, MEDIUM, HIGH. It's a human readable representation of the score.
		 * - ``min_score``: The minimum risk score of the prefix. It ranges from 0 to 99.
		 * - ``max_score``: The maximum risk score of the prefix. It ranges from 0 to 99.
		 * - ``ip_abuse_total``: The total number of IPs that have been reported as abuse in the range.
		 * ### Errors
		 * The endpoint will return the following errors:
		 * - a `404 Not Found` error if the prefix information was not found.
		 * - a `422 Unprocessable Entity` error if the IP address is malformed.
		 * It will also return the API Global errors described in the API description.
		 * Get v1/datacenter/ip/{ip_address}
		 * @return {DatacenterPrefixOutput} Successful Response
		 */
		Query_IP_address_network_information_v1_datacenter_ip__ip_address__get(ip_address: string): Observable<DatacenterPrefixOutput> {
			return this.http.get<DatacenterPrefixOutput>(this.baseUri + 'v1/datacenter/ip/' + (ip_address == null ? '' : encodeURIComponent(ip_address)), {});
		}

		/**
		 * Get the IPv4 or IPv6 prefix of the CIDR given.
		 * ### What
		 * Obtain the IPv4 or IPv6 prefix and the Datacenter information of the CIDR passed in the body as a POST method. This endpoint works around the problem of passing '/' addresses in the URI.
		 * ### Parameters
		 * The endpoint accepts only the following parameter in the body as a JSON object:
		 * - ``prefix``: (Mandatory) The CIDR v4 or v6 to be queried.
		 * ### Result
		 * - The result is a JSON object with the following structure:
		 * - ``self``: the URI to individual IPv4 prefix.
		 * - ``datacenter_id``: the URI to query the full details of the Datacenter.
		 * - ``score``: The risk score of the prefix. It ranges from 0 to 99.
		 * - ``risk``: The risk of the prefix. The allowed values are: LOW, MEDIUM, HIGH. It's a human readable representation of the score.
		 * - ``min_score``: The minimum risk score of the prefix. It ranges from 0 to 99.
		 * - ``max_score``: The maximum risk score of the prefix. It ranges from 0 to 99.
		 * - ``ip_abuse_total``: The total number of IPs that have been reported as abuse in the range.
		 * ### Errors
		 * The endpoint will return the following errors:
		 * - a `404 Not Found` error if the prefix information was not found.
		 * - a `422 Unprocessable Entity` error if the CIDR is malformed.
		 * It will also return the API Global errors described in the API description.
		 * Post v1/datacenter/prefix
		 * @return {DatacenterPrefixOutput} Successful Response
		 */
		Query_datacenter_prefix_information_v1_datacenter_prefix_post(requestBody: Body_query_datacenter_prefix_information_v1_datacenter_prefix_post): Observable<DatacenterPrefixOutput> {
			return this.http.post<DatacenterPrefixOutput>(this.baseUri + 'v1/datacenter/prefix', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get the Datacenter details of datacente given.
		 * ### What
		 * Obtain the details of the Datacenter ID passed as a parameter.
		 * ### Parameters
		 * The endpoint accepts only the following parameter in the path:
		 * - ``datacenter_id``: (Mandatory) The internal Datacenter ID to be queried.
		 * ### Result
		 * The result is a JSON object with the following structure:
		 * - ``self``: the URI of the API call
		 * - ``name``: the generic name of the Datacenter. The database takes the name from different sources, so it may be different from the real name.
		 * - ``description``: a full name of the Datacenter. It contains more details about the Datacenter.
		 * - ``source``: website of the company that owns the Datacenter.
		 * - ``asn``: the URI to the ASN of the Datacenter.
		 * - ``status``: the status of the Datacenter. It can be: `enabled` or `disabled`.
		 * - ``prefixes``: the URI to the list of prefixes that belong to the Datacenter.
		 * - ``score``: The risk score of the Datacenter. It ranges from 0 to 99.
		 * - ``risk``: The risk of the Datacenter. The allowed values are: LOW, MEDIUM, HIGH. It's a human readable representation of the score.
		 * ### Errors
		 * The endpoint will return the following errors:
		 * - a `404 Not Found` error if the Datacenter was not found.
		 * - a `422 Unprocessable Entity` error if the Datacenter is malformed.
		 * It will also return the API Global errors described in the API description.
		 * Get v1/datacenter/{datacenter_id}
		 * @return {DatacenterOutput} Successful Response
		 */
		Query_datacenter_v1_datacenter__datacenter_id__get(datacenter_id: string): Observable<DatacenterOutput> {
			return this.http.get<DatacenterOutput>(this.baseUri + 'v1/datacenter/' + (datacenter_id == null ? '' : encodeURIComponent(datacenter_id)), {});
		}

		/**
		 * Get the list of IPv4 and IPv6 prefixes of the Datacenter given.
		 * ### What
		 * Obtain the full list of IPv4 and IPv6 prefixes of the Datacenter passed as a parameter.
		 * ### Parameters
		 * The endpoint accepts only the following parameter in the path:
		 * - ``datacenter_id``: (Mandatory) The internal Datacenter ID to be queried.
		 * ### Result
		 * The result is a JSON object with the following structure:
		 * - ``self``: the URI of the API call
		 * - ``datacenter_id``: the URI to query the full details of the Datacenter.
		 * - ``prefixes_v4``: the list of IPv4 prefixes that belong to the Datacenter. Each element of the list is a JSON object with the following structure:
		 * - ``self``: the URI to individual IPv4 prefix.
		 * - ``datacenter_id``: the URI to query the full details of the Datacenter.
		 * - ``score``: The risk score of the prefix. It ranges from 0 to 99.
		 * - ``risk``: The risk of the prefix. The allowed values are: LOW, MEDIUM, HIGH. It's a human readable representation of the score.
		 * - ``min_score``: The minimum risk score of the prefix. It ranges from 0 to 99.
		 * - ``max_score``: The maximum risk score of the prefix. It ranges from 0 to 99.
		 * - ``ip_abuse_total``: The total number of IPs that have been reported as abuse in the range.
		 * - ``prefixes_v6``: the list of IPv6 prefixes that belong to the Datacenter. Each element of the list is a JSON object with the following structure:
		 * - ``self``: the URI to individual IPv4 prefix.
		 * - ``datacenter_id``: the URI to query the full details of the Datacenter.
		 * - ``score``: The risk score of the prefix. It ranges from 0 to 99.
		 * - ``risk``: The risk of the prefix. The allowed values are: LOW, MEDIUM, HIGH. It's a human readable representation of the score.
		 * - ``min_score``: The minimum risk score of the prefix. It ranges from 0 to 99.
		 * - ``max_score``: The maximum risk score of the prefix. It ranges from 0 to 99.
		 * - ``ip_abuse_total``: The total number of IPs that have been reported as abuse in the range.
		 * ### Errors
		 * The endpoint will return the following errors:
		 * - a `404 Not Found` error if the Datacenter was not found.
		 * - a `422 Unprocessable Entity` error if the Datacenter number is malformed.
		 * It will also return the API Global errors described in the API description.
		 * Get v1/datacenter/{datacenter_id}/prefixes
		 * @return {DatacenterPrefixesOutput} Successful Response
		 */
		Query_datacenter_prefixes_list_v1_datacenter__datacenter_id__prefixes_get(datacenter_id: string): Observable<DatacenterPrefixesOutput> {
			return this.http.get<DatacenterPrefixesOutput>(this.baseUri + 'v1/datacenter/' + (datacenter_id == null ? '' : encodeURIComponent(datacenter_id)) + '/prefixes', {});
		}

		/**
		 * Get the list of all the datasets available in the platform.
		 * ### What
		 * Obtain the list of all the datasets available in the platform. A dataset is a collection of different data sources that are related to a specific topic. The name of the dataset describes the specific topic.
		 * ### Parameters
		 * No parameters are required.
		 * ### Result
		 * The result is a JSON object with a list of the following JSON objects:
		 * - ``self``: the URI to individual status.
		 * - ``types``: a list of JSON objects with the following fields:
		 * - ``self``: the URI to individual dataset information.
		 * - ``type``: what type of dataset is this. The only allowed value is ``ip``.
		 * - ``name``: the name of the dataset in human readable form.
		 * - ``description``: a human readable long description of the dataset.
		 * - ``status``: the status of the dataset. The only allowed value is ``ENABLED``.
		 * - ``items``: the number of 'live' items in the dataset when the request is performed.
		 * ### Errors
		 * It will return the API Global errors described in the API description.
		 * Get v1/dataset/ip
		 * @return {DatasetTypeCollectionOutput} Successful Response
		 */
		Query_datataset_information_of_all_the_resource_types_v1_dataset_ip_get(): Observable<DatasetTypeCollectionOutput> {
			return this.http.get<DatasetTypeCollectionOutput>(this.baseUri + 'v1/dataset/ip', {});
		}

		/**
		 * Get the detailed information of the dataset queried.
		 * ### What
		 * Get the detailed information of the dataset queried by the name. A dataset is a collection of different data sources that are related to a specific topic. The name of the dataset describes the specific topic.
		 * ### Parameters
		 * The endpoint accepts only the following parameter in the path:
		 * - ``name``: (Mandatory) The code name that identifies uniquely the dataset in the platform. It must be composed of uppercase letters, numbers and underscores.
		 * ### Result
		 * The result is a JSON object with the following fields:
		 * - ``self``: the URI to individual dataset information.
		 * - ``type``: what type of dataset is this. The only allowed value is ``ip``.
		 * - ``name``: the name of the dataset in human readable form.
		 * - ``description``: a human readable long description of the dataset.
		 * - ``status``: the status of the dataset. The only allowed value is ``ENABLED``.
		 * - ``items``: the number of 'live' items in the dataset when the request is performed.
		 * ### Errors
		 * - a `404 Not Found` error if the dataset code name was not found.
		 * - a `422 Unprocessable Entity` error if dataset code name does not follow the naming convention.
		 * It will also return the API Global errors described in the API description.
		 * Get v1/dataset/ip/{name}
		 * @return {DatasetTypeOutput} Successful Response
		 */
		Query_datataset_information_of_the_resource_type_v1_dataset_ip__name__get(name: string): Observable<DatasetTypeOutput> {
			return this.http.get<DatasetTypeOutput>(this.baseUri + 'v1/dataset/ip/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Creates a new private denylist binded to the user.
		 * ### What
		 * Creates a new denylist with the information given and binded to the current user. The parameters are:
		 * - name
		 * - description
		 * - tags
		 * - expiry
		 * - Time to Live (TTL)
		 * - Resource Type (`CIDR`, `AS`, `COUNTRY`, `CONTINENT`, `DATACENTER_ID` and `USER AGENT`)
		 * This is an asynchronous operation. It can take several seconds until the operation completes, but the request will immediately return a 202 Accepted response. The operation will also return the UUID of the list.
		 * ### Parameters
		 * In the query string the ID of the private deny list to delete.
		 * In the body the following parameters:
		 * - ``name``: A human readable name of the list.
		 * - ``description``: A long detailed information about what the list contains and how it is used.
		 * - ``tags``: A list of tags that describe the list.
		 * - ``ttl``: (Optional) The Time To Live of the list, in seconds. If it does not exist, it will never expire.
		 * - ``resource_type``: The type of resource that the list contains. It can be ``CIDR``, ``AS``, ``COUNTRY``, ``CONTINENT``,    ``DATACENTER_ID`` or ``USER AGENT``.
		 * ### Result
		 * It should always return a 202 Accepted response with the UUID of the new list in the body.
		 * ### Errors
		 * - If the information is not valid, it will return a `422` (Unprocessable Entity) error.
		 * - If the ttl is negative, it will return a `400` (Bad Request) error.
		 * It will return the API Global errors described in the API description.
		 * Post v1/denylist/private
		 * @return {string} Successful Response
		 */
		Create_private_denylist_of_the_user_v1_denylist_private_post(requestBody: Body_create_private_denylist_of_the_user_v1_denylist_private_post): Observable<string> {
			return this.http.post(this.baseUri + 'v1/denylist/private', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Get the set of private denylists of the user.
		 * ### What
		 * Obtain the set of private deny lists of the user available in the service. These lists are different datasets:
		 * - Lists that are part of the automatically reported data from the Report IP, focused on honeypots and automaticreporting from external sources. The name is `External sources reported CIDRs`.
		 * - Lists that are part of the automatically denylisted by the Threat Jammer service. The name is `Default denylist`.
		 * - Lists that are created by the user.
		 * ### Parameters
		 * No parameters
		 * ### Result
		 * The result is a JSON object with a list of the following JSON objects:
		 * - ``self``: the URI to the status of all the lists.
		 * - ``lists``: a list of JSON objects with the available lists:
		 * - ``self``: the URI to individual information of the list.
		 * - ``name``: A human readable name of the list.
		 * - ``description``: A long detailed information about what the list contains and how it is used.
		 * - ``resource_type``: The type of the list. It can be ``CIDR``, ``AS``, ``COUNTRY``, ``CONTINENT`` or ``DATACENTER_ID``.
		 * - ``list_type``: The type of the list. It can be ``ALLOW`` or ``DENY``.
		 * - ``created_at``: Unix timestamp in seconds when the list was created.
		 * - ``updated_at``: Unix timestamp in seconds when the list was updated.
		 * - ``expiry``: Unix timestamp in seconds when the list will expire. If it does not exist, it will never expire.
		 * - ``origins``: list of websites that are using the list as a denylist.
		 * - ``self``: the URI to all the list of origins.
		 * - ``lists``: list of lists that the origin is using.
		 * - ``self``: the URI to the individual information of the list.
		 * - ``origin``: the protocol and domain of the website that is using the list.
		 * - ``status``: the status of the list. It can be ``ACTIVE`` or ``INACTIVE`` or ``EXPIRED``. If the list is ``EXPIRED`` it means that the list is not available anymore if not renewed.
		 * - ``expiry``: Unix timestamp in seconds when the list will expire. If it does not exist, it will never expire.
		 * - ``created_at``: Unix timestamp in seconds when the list was created.
		 * - ``updated_at``: Unix timestamp in seconds when the list was updated.
		 * ### Errors
		 * It will return the API Global errors described in the API description.
		 * Get v1/denylist/private/all
		 * @return {PrivateAclGroupListCollectionOutput} Successful Response
		 */
		Get_all_private_denylists_v1_denylist_private_all_get(): Observable<PrivateAclGroupListCollectionOutput> {
			return this.http.get<PrivateAclGroupListCollectionOutput>(this.baseUri + 'v1/denylist/private/all', {});
		}

		/**
		 * Get the set of private denylists of the user by resource type.
		 * ### What
		 * Obtain the set of private deny lists of the user available in the service filtering by resource type. It can be ``CIDR``, ``AS``, ``COUNTRY``, ``CONTINENT`` or ``DATACENTER_ID``
		 * These lists are different datasets:
		 * - Lists that are part of the automatically reported data from the Report IP, focused on honeypots and automaticreporting from external sources. The name is `External sources reported CIDRs`. The resource type is ``CIDR``.
		 * - Lists that are part of the automatically denylisted by the Threat Jammer service. The name is `Default denylist`. The resource type is ``CIDR``.
		 * - Lists that are created by the user.
		 * ### Parameters
		 * The ``resource type`` to filter. The values can be ``CIDR``, ``AS``, ``COUNTRY``, ``CONTINENT`` or ``DATACENTER_ID``.
		 * ### Result
		 * The result is a JSON object with a list of the following JSON objects:
		 * - ``self``: the URI to the status of all the lists.
		 * - ``lists``: a list of JSON objects with the available lists:
		 * - ``self``: the URI to individual information of the list.
		 * - ``name``: A human readable name of the list.
		 * - ``description``: A long detailed information about what the list contains and how it is used.
		 * - ``resource_type``: The type of the list. It can be ``CIDR``, ``AS``, ``COUNTRY``, ``CONTINENT`` or ``DATACENTER_ID``.
		 * - ``list_type``: The type of the list. It can be ``ALLOW`` or ``DENY``.
		 * - ``created_at``: Unix timestamp in seconds when the list was created.
		 * - ``updated_at``: Unix timestamp in seconds when the list was updated.
		 * - ``expiry``: Unix timestamp in seconds when the list will expire. If it does not exist, it will never expire.
		 * - ``origins``: list of websites that are using the list as a denylist.
		 * - ``self``: the URI to all the list of origins.
		 * - ``lists``: list of lists that the origin is using.
		 * - ``self``: the URI to the individual information of the list.
		 * - ``origin``: the protocol and domain of the website that is using the list.
		 * - ``status``: the status of the list. It can be ``ACTIVE`` or ``INACTIVE`` or ``EXPIRED``. If the list is ``EXPIRED`` it means that the list is not available anymore if not renewed.
		 * - ``expiry``: Unix timestamp in seconds when the list will expire. If it does not exist, it will never expire.
		 * - ``created_at``: Unix timestamp in seconds when the list was created.
		 * - ``updated_at``: Unix timestamp in seconds when the list was updated.
		 * ### Errors
		 * - If the resource type is not valid, it will return a ``422`` (Unprocessable Entity) error.
		 * It will also return the API Global errors described in the API description.
		 * Get v1/denylist/private/all/{resource_type}
		 * @return {PrivateAclGroupListCollectionOutput} Successful Response
		 */
		Get_all_private_denylists_by_resource_type_v1_denylist_private_all__resource_type__get(resource_type: Get_all_private_allowlists_by_resource_type_v1_allowlist_private_all__resource_type__getResource_type): Observable<PrivateAclGroupListCollectionOutput> {
			return this.http.get<PrivateAclGroupListCollectionOutput>(this.baseUri + 'v1/denylist/private/all/' + resource_type, {});
		}

		/**
		 * Get the different denylists where the IP address was found.
		 * ### What
		 * Obtain the list of all the different denylists where the IP address entered by the user. The denylisted forbidden datasets are the ones submitted manually by the user from files or indidual items.
		 * ### Parameters
		 * The endpoint accepts the `address` parameter as query string.
		 * ### Result
		 * The result is a JSON object with a list of the following JSON objects:
		 * - ``self``: the URI to individual status.
		 * - ``cidrs``: the URI of the lists of CIDRs where the IP was found.
		 * - ``country``: the URIs where the lists of countries where the IP address was found
		 * - ``continent``: the URI where the continent where the IP address was found.
		 * - ``asn``: the URIs where the list of continents of the ASN where the IP address was found.
		 * - ``datacenter``: the URIs of the lists of datacenters where the IP address was found. If not found, the result is an empty string.
		 * - ``reported``: the URI of the information of the IP address reported by the user.
		 * ### Errors
		 * - a `422 Unprocessable Entity` error if the IP address was malformed.
		 * It will also return the API Global errors described in the API description.
		 * Get v1/denylist/private/ip/{address}
		 * @return {AclListCollectionOutput} Successful Response
		 */
		Query_resource_denylists_v1_denylist_private_ip__address__get(address: string): Observable<AclListCollectionOutput> {
			return this.http.get<AclListCollectionOutput>(this.baseUri + 'v1/denylist/private/ip/' + (address == null ? '' : encodeURIComponent(address)), {});
		}

		/**
		 * Delete all the bindings between a user and a private denylist.
		 * ### What
		 * Delete all the bindings between a user and a private denylist. This will remove the content of the denylist, the denylist from the user and also all the origins that are using the denylist.
		 * This is an asynchronous operation. It can take several seconds until the operation completes, but the request willimmediately return a 202 Accepted response.
		 * The default lists ``External sources reported CIDRs`` and ``Default denylist`` cannot be deleted, but can be emptied. Please refer to the documentation to delete the content.
		 * ### Parameters
		 * In the query string the ID of the private deny list to delete.
		 * ### Result
		 * It should always return a 202 Accepted response with an empty body.
		 * ### Errors
		 * - If the list does not exist, it will return a `404` (Not found) error.
		 * - If the list is a default list, it will return a `403` (Forbidden) error.
		 * - If the deny list is not a valid UUID, it will return a `422` (Unprocessable Entity) error.
		 * It will return the API Global errors described in the API description.
		 * Delete v1/denylist/private/{denylist_id}
		 * @return {any} Successful Response
		 */
		Delete_the_denylist_v1_denylist_private__denylist_id__delete(denylist_id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/denylist/private/' + (denylist_id == null ? '' : encodeURIComponent(denylist_id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get the details of a specific private denylist of the user.
		 * ### What
		 * Obtain the details of the private deny list of the user available in the service.
		 * ### Parameters
		 * Pass the private denylist ID as query parameter.
		 * ### Result
		 * The result is a JSON object with the following structure:
		 * - ``self``: the URI to individual information of the list.
		 * - ``name``: A human readable name of the list.
		 * - ``description``: A long detailed information about what the list contains and how it is used.
		 * - ``resource_type``: The type of the list. It can be ``CIDR``, ``AS``, ``COUNTRY``, ``CONTINENT`` or ``DATACENTER_ID``.
		 * - ``list_type``: The type of the list. It can be ``ALLOW`` or ``DENY``.
		 * - ``created_at``: Unix timestamp in seconds when the list was created.
		 * - ``updated_at``: Unix timestamp in seconds when the list was updated.
		 * - ``expiry``: Unix timestamp in seconds when the list will expire. If it does not exist, it will never expire.
		 * - ``origins``: list of websites that are using the list as a denylist.
		 * - ``self``: the URI to all the list of origins.
		 * - ``lists``: list of lists that the origin is using.
		 * - ``self``: the URI to the individual information of the list.
		 * - ``origin``: the protocol and domain of the website that is using the list.
		 * - ``status``: the status of the list. It can be ``ACTIVE`` or ``INACTIVE`` or ``EXPIRED``. If the list is ``EXPIRED`` it means that the list is not available anymore if not renewed.
		 * - ``expiry``: Unix timestamp in seconds when the list will expire. If it does not exist, it will never expire.
		 * - ``created_at``: Unix timestamp in seconds when the list was created.
		 * - ``updated_at``: Unix timestamp in seconds when the list was updated.
		 * ### Errors
		 * - If the deny list is not a valid UUID, it will return a ``422`` (Unprocessable Entity) error.
		 * - If the private denylist ID does not exist, it will return a ``404`` (Not found) error.
		 * It will also return the API Global errors described in the API description.
		 * Get v1/denylist/private/{denylist_id}
		 * @return {PrivateAclGroupListOutput} Successful Response
		 */
		Get_single_denylist_v1_denylist_private__denylist_id__get(denylist_id: string): Observable<PrivateAclGroupListOutput> {
			return this.http.get<PrivateAclGroupListOutput>(this.baseUri + 'v1/denylist/private/' + (denylist_id == null ? '' : encodeURIComponent(denylist_id)), {});
		}

		/**
		 * Update the information of an existing private denylist of the user.
		 * ### What
		 * Updates the information that describes the denylist of the user in the system. The parameters that can be modified are:
		 * - name
		 * - description
		 * - tags
		 * - expiry
		 * This is an asynchronous operation. It can take several seconds until the operation completes, but the request will immediately return a 202 Accepted response.
		 * The default lists ``External sources reported CIDRs`` and ``Default denylist`` cannot be updated.
		 * ### Parameters
		 * In the query string the ID of the private deny list to delete.
		 * In the body the following parameters:
		 * - ``name``: (Optional) A human readable name of the list.
		 * - ``description``: (Optional) A long detailed information about what the list contains and how it is used.
		 * - ``tags``: (Optional) A list of tags that describe the list.
		 * - ``expiry``: (Optional) Unix timestamp in seconds when the list will expire. If it does not exist, it will never expire.
		 * ### Result
		 * It should always return a 202 Accepted response with an empty body.
		 * ### Errors
		 * - If the list does not exist, it will return a `404` (Not found) error.
		 * - If the list is a default list, it will return a `403` (Forbidden) error.
		 * - If the deny list is not a valid UUID, it will return a `422` (Unprocessable Entity) error.
		 * - If the expiry is not a valid timestamp, it will return a `422` (Unprocessable Entity) error.
		 * - If the expiry is in the past, it will return a `400` (Bad Request) error.
		 * - If the name is not a string, it will return a `422` (Unprocessable Entity) error.
		 * - If the description is not a string, it will return a `422` (Unprocessable Entity) error.
		 * It will return the API Global errors described in the API description.
		 * Put v1/denylist/private/{denylist_id}
		 * @return {any} Successful Response
		 */
		Update_private_denylist_of_the_user_v1_denylist_private__denylist_id__put(denylist_id: string, requestBody: Body_update_private_denylist_of_the_user_v1_denylist_private__denylist_id__put): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'v1/denylist/private/' + (denylist_id == null ? '' : encodeURIComponent(denylist_id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete all the content of a private denylist of the user.
		 * ### What
		 * Delete all the content of a private denylist of the user. This will remove all the elements, and there is no way to recover them.
		 * ### Parameters
		 * Pass the private denylist ID as query parameter.
		 * ### Result
		 * If successful, it will return a ``202`` (Accepted) response with an empty body. The operation is asynchronous,and can take several seconds to complete.
		 * ### Errors
		 * - If the deny list is not a valid UUID, it will return a ``422`` (Unprocessable Entity) error.
		 * - If the private denylist ID does not exist, it will return a ``404`` (Not found) error.
		 * It will also return the API Global errors described in the API description.
		 * Delete v1/denylist/private/{denylist_id}/content
		 * @return {any} Successful Response
		 */
		Delete_the_denylist_content_v1_denylist_private__denylist_id__content_delete(denylist_id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/denylist/private/' + (denylist_id == null ? '' : encodeURIComponent(denylist_id)) + '/content', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get the content of a private denylist of the user.
		 * ### What
		 * Returns the content of the private denylist of the user. The content can be CIDRs, ASNs, countries, continents or    datacenter IDs.
		 * ### Parameters
		 * Pass the private denylist ID as query parameter.
		 * The following pagination parameters are required as query string parameters:
		 * - ``page``: (Optional) the page number to retrieve. The first page is 1. Default is 1.
		 * - ``page_size``: (Optional) the number of items per page. Default is 20.
		 * ### Result
		 * The result is a JSON object with the following structure:
		 * - ``self``: the URI to the content of the list.
		 * - ``cidrs``: (Optional) list of CIDRs in the list.
		 * - ``asns``: (Optional) list of ASNs in the list.
		 * - ``countries``: (Optional) list of countries in the list.
		 * - ``continents``: (Optional) list of continents in the list.
		 * - ``datacenters``: (Optional) list of datacenters in the list.
		 * ### Errors
		 * - If the deny list is not a valid UUID, it will return a ``422`` (Unprocessable Entity) error.
		 * - If the private denylist ID does not exist, it will return a ``404`` (Not found) error.
		 * It will also return the API Global errors described in the API description.
		 * Get v1/denylist/private/{denylist_id}/content
		 * @param {number} page The page to be returned
		 * @param {number} page_size The number of items per page
		 * @return {PrivateAclListCollectionOutput} Successful Response
		 */
		Get_denylist_content_v1_denylist_private__denylist_id__content_get(denylist_id: string, page: number | null | undefined, page_size: number | null | undefined): Observable<PrivateAclListCollectionOutput> {
			return this.http.get<PrivateAclListCollectionOutput>(this.baseUri + 'v1/denylist/private/' + (denylist_id == null ? '' : encodeURIComponent(denylist_id)) + '/content&page=' + page + '&page_size=' + page_size, {});
		}

		/**
		 * Add or remove content of a private denylist of the user.
		 * ### What
		 * Add or remove content of a private denylist of the user. The content can be CIDRs, ASNs, countries, continents or datacenter IDs.
		 * The number of elements allowed in all the lists are limited depending on the plan of the user:
		 * - Free: 100 elements
		 * - Basic: 1000 elements
		 * - Pro: 10000 elements
		 * ### Parameters
		 * Pass the private denylist ID as query parameter.
		 * In the body the following parameters:
		 * - ``append``: (Optional) Add CIDRs, ASNs, countries, continents or datacenter IDs to add to the list. It's not possible to mix different resource types in the same list.
		 * - ``remove``: (Optional) Extract CIDRs, ASNs, countries, continents or datacenter IDs to add to the list. It's not possible to mix different resource types in the same list.
		 * ### Result
		 * If successful, it will return a ``202`` (Accepted) response with an empty body. The operation is asynchronous,and can take several seconds to complete.
		 * ### Errors
		 * - If the deny list is not a valid UUID, it will return a ``422`` (Unprocessable Entity) error.
		 * - If the private denylist ID does not exist, it will return a ``404`` (Not found) error.
		 * - If the ``append`` or ``remove`` parameters are not processable, it will return a ``422`` (Unprocessable Entity) error.
		 * - If the number of elements in the lists is over the limit, it will return a ``413`` (Payload Too Large) error.
		 * It will also return the API Global errors described in the API description.
		 * Put v1/denylist/private/{denylist_id}/content
		 * @return {any} Successful Response
		 */
		Update_private_content_of_the_denylist_of_the_user_v1_denylist_private__denylist_id__content_put(denylist_id: string, requestBody: Body_update_private_content_of_the_denylist_of_the_user_v1_denylist_private__denylist_id__content_put): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'v1/denylist/private/' + (denylist_id == null ? '' : encodeURIComponent(denylist_id)) + '/content', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Toogle the status of the origin in a deny list.
		 * ### What
		 * Change the status of the origin of a deny list to ``ACTIVE``, ``INACTIVE`` or ``DELETED``.
		 * An ``ACTIVE`` origin will apply the deny list to the protocol and domain of the origin. An origin can be created and activated simply toogling the ``ACTIVE`` status. As an optional parameter it can be provided an ``ttl`` or Time To Live parameter of the origin in the list in seconds. After the TTL expires, the origin will be removed from the list.  If the TTL is not provided, the origin will never expire.
		 * An ``INACTIVE`` origin will not apply the deny list to the protocol and domain of the origin.
		 * A ``DELETED`` origin will be removed from the list. It will not be used by the service anymore. The user can activate it again with the ``ACTIVE`` status.
		 * This is an asynchronous operation. It can take several seconds until the operation completes, but the request will  immediately return a 202 Accepted response.
		 * *This operation is not available in the Freemium plan.*
		 * ### Parameters
		 * In the query string the ID of the deny list to change the status.
		 * In the body the JSON object with the following fields:
		 * - ``origin``: The protocol and domain of the origin. It can be ``http://example.com`` or ``https://example.com``.
		 * - ``status``: The status of the list. It can be ``ACTIVE``, ``INACTIVE`` or ``DELETED``.
		 * ### Result
		 * It should always return a 202 Accepted response with an empty body.
		 * ### Errors
		 * If the list does not exist, it will return a 404 error.
		 * If the status is not ``ACTIVE`` or ``INACTIVE``, it will return a 422 error.
		 * If the TTL is negative in the past, it will return a 422 error.
		 * If the deny list is not a valid UUID, it will return a 422 error.
		 * If the origin is not a valid URL, it will return a 400 error.
		 * If the denylist is not active, it will returna 409 error.
		 * If the origin is not found in the set owned by the user, it will return a 404 error.
		 * It will return the API Global errors described in the API description.
		 * Put v1/denylist/private/{denylist_id}/origin
		 * @return {any} Successful Response
		 */
		Change_status_of_the_origin_denylist_v1_denylist_private__denylist_id__origin_put(denylist_id: string, requestBody: Body_change_status_of_the_origin_denylist_v1_denylist_private__denylist_id__origin_put): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'v1/denylist/private/' + (denylist_id == null ? '' : encodeURIComponent(denylist_id)) + '/origin', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get the set of public denylists.
		 * ### What
		 * Obtain the set of public deny lists available in the service and also which ones are already selected by the user and wich ones are not.
		 * ### Parameters
		 * No parameters
		 * ### Result
		 * The result is a JSON object with a list of the following JSON objects:
		 * - ``self``: the URI to the status of all the lists.
		 * - ``lists``: a list of JSON objects with the available lists:
		 * - ``self``: the URI to individual information of the list.
		 * - ``name``: A human readable name of the list.
		 * - ``description``: A long detailed information about what the list contains and how it is used.
		 * - ``resource_type``: The type of the list. It can be ``CIDR``, ``AS``, ``COUNTRY``, ``CONTINENT`` or ``DATACENTER_ID``.
		 * - ``list_type``: The type of the list. It can be ``ALLOW`` or ``DENY``.
		 * - ``status``: The status of the list. It can be ``ACTIVE`` or ``INACTIVE`` or ``EXPIRED``. If the list is ``EXPIRED``    it means that the list is not available anymore if not renewed.
		 * - ``created_at``: Unix timestamp in seconds when the list was created.
		 * - ``updated_at``: Unix timestamp in seconds when the list was updated.
		 * If the list is already selected by the user, the JSON object will also contain the following fields:
		 * - ``expiry``: Unix timestamp in seconds when the list will expire. If it does not exist, it will never expire.
		 * - ``origins``: list of websites that are using the list as an denylist.
		 * - ``self``: the URI to all the list of origins.
		 * - ``lists``: list of lists that the origin is using.
		 * - ``self``: the URI to the individual information of the list.
		 * - ``origin``: the protocol and domain of the website that is using the list.
		 * - ``status``: the status of the list. It can be ``ACTIVE`` or ``INACTIVE`` or ``EXPIRED``. If the list is ``EXPIRED``        it means that the list is not available anymore if not renewed.
		 * - ``expiry``: Unix timestamp in seconds when the list will expire. If it does not exist, it will never expire.
		 * - ``created_at``: Unix timestamp in seconds when the list was created.
		 * - ``updated_at``: Unix timestamp in seconds when the list was updated.
		 * ### Errors
		 * It will return the API Global errors described in the API description.
		 * Get v1/denylist/public/all
		 * @return {PublicAclGroupListCollectionOutput} Successful Response
		 */
		Get_all_public_denylists_v1_denylist_public_all_get(): Observable<PublicAclGroupListCollectionOutput> {
			return this.http.get<PublicAclGroupListCollectionOutput>(this.baseUri + 'v1/denylist/public/all', {});
		}

		/**
		 * Get the set of public denylists by resource type.
		 * ### What
		 * Obtain the set of public deny lists available in the service and also which ones are already selected by the user and wich ones are not filtering by the resource type.
		 * ### Parameters
		 * The ``resource type`` to filter. The values can be ``CIDR``, ``AS``, ``COUNTRY``, ``CONTINENT`` or ``DATACENTER_ID``.
		 * ### Result
		 * The result is a JSON object with a list of the following JSON objects:
		 * - ``self``: the URI to the status of all the lists.
		 * - ``lists``: a list of JSON objects with the available lists:
		 * - ``self``: the URI to individual information of the list.
		 * - ``name``: A human readable name of the list.
		 * - ``description``: A long detailed information about what the list contains and how it is used.
		 * - ``resource_type``: The type of the list. It can be ``CIDR``, ``AS``, ``COUNTRY``, ``CONTINENT`` or ``DATACENTER_ID``.
		 * - ``list_type``: The type of the list. It can be ``ALLOW`` or ``DENY``.
		 * - ``status``: The status of the list. It can be ``ACTIVE`` or ``INACTIVE`` or ``EXPIRED``. If the list is ``EXPIRED``    it means that the list is not available anymore if not renewed.
		 * - ``created_at``: Unix timestamp in seconds when the list was created.
		 * - ``updated_at``: Unix timestamp in seconds when the list was updated.
		 * If the list is already selected by the user, the JSON object will also contain the following fields:
		 * - ``expiry``: Unix timestamp in seconds when the list will expire. If it does not exist, it will never expire.
		 * - ``origins``: list of websites that are using the list as an denylist.
		 * - ``self``: the URI to all the list of origins.
		 * - ``lists``: list of lists that the origin is using.
		 * - ``self``: the URI to the individual information of the list.
		 * - ``origin``: the protocol and domain of the website that is using the list.
		 * - ``status``: the status of the list. It can be ``ACTIVE`` or ``INACTIVE`` or ``EXPIRED``. If the list is ``EXPIRED``        it means that the list is not available anymore if not renewed.
		 * - ``expiry``: Unix timestamp in seconds when the list will expire. If it does not exist, it will never expire.
		 * - ``created_at``: Unix timestamp in seconds when the list was created.
		 * - ``updated_at``: Unix timestamp in seconds when the list was updated.
		 * ### Errors
		 * It will return the API Global errors described in the API description.
		 * Get v1/denylist/public/all/{resource_type}
		 * @return {PublicAclGroupListCollectionOutput} Successful Response
		 */
		Get_all_public_denylists_by_resource_type_v1_denylist_public_all__resource_type__get(resource_type: Get_all_private_allowlists_by_resource_type_v1_allowlist_private_all__resource_type__getResource_type): Observable<PublicAclGroupListCollectionOutput> {
			return this.http.get<PublicAclGroupListCollectionOutput>(this.baseUri + 'v1/denylist/public/all/' + resource_type, {});
		}

		/**
		 * Get the different public denylists where the IP address was found.
		 * ### What
		 * Obtain the list of all the different public denylists where the IP address entered by the user is. The public denylists are the ones activated by the user, but managed by Threatjammer administrators.
		 * ### Parameters
		 * The endpoint accepts the `address` parameter as query string.
		 * ### Result
		 * The result is a JSON object with a list of the following JSON objects:
		 * - ``self``: the URI to individual status.
		 * - ``cidrs``: the URI of the lists of CIDRs where the IP was found.
		 * - ``country``: the URIs where the lists of countries where the IP address was found
		 * - ``continent``: the URI where the continent where the IP address was found.
		 * - ``asn``: the URIs where the list of continents of the ASN where the IP address was found.
		 * - ``datacenter``: the URIs of the lists of datacenters where the IP address was found. If not found, the result is an empty string.
		 * ### Errors
		 * - a `422 Unprocessable Entity` error if the IP address was malformed.
		 * It will also return the API Global errors described in the API description.
		 * Get v1/denylist/public/ip/{address}
		 * @return {AclListCollectionOutput} Successful Response
		 */
		Query_resource_denylists_v1_denylist_public_ip__address__get(address: string): Observable<AclListCollectionOutput> {
			return this.http.get<AclListCollectionOutput>(this.baseUri + 'v1/denylist/public/ip/' + (address == null ? '' : encodeURIComponent(address)), {});
		}

		/**
		 * Get the set of owned denylists.
		 * ### What
		 * Obtain the set of public deny lists available in the service selected by the user.
		 * ### Parameters
		 * No parameters
		 * ### Result
		 * The result is a JSON object with a list of the following JSON objects:
		 * - ``self``: the URI to the status of all the lists.
		 * - ``lists``: a list of JSON objects with the available lists:
		 * - ``self``: the URI to individual information of the list.
		 * - ``name``: A human readable name of the list.
		 * - ``description``: A long detailed information about what the list contains and how it is used.
		 * - ``resource_type``: The type of the list. It can be ``CIDR``, ``AS``, ``COUNTRY``, ``CONTINENT`` or ``DATACENTER_ID``.
		 * - ``list_type``: The type of the list. It can be ``ALLOW`` or ``DENY``.
		 * - ``status``: The status of the list. It can be ``ACTIVE`` or ``INACTIVE`` or ``EXPIRED``. If the list is ``EXPIRED``    it means that the list is not available anymore if not renewed.
		 * - ``created_at``: Unix timestamp in seconds when the list was created.
		 * - ``updated_at``: Unix timestamp in seconds when the list was updated.
		 * - ``expiry``: Unix timestamp in seconds when the list will expire. If it does not exist, it will never expire.
		 * - ``origins``: list of websites that are using the list as an denylist.
		 * - ``self``: the URI to all the list of origins.
		 * - ``lists``: list of lists that the origin is using.
		 * - ``self``: the URI to the individual information of the list.
		 * - ``origin``: the protocol and domain of the website that is using the list.
		 * - ``status``: the status of the list. It can be ``ACTIVE`` or ``INACTIVE`` or ``EXPIRED``. If the list is ``EXPIRED``            it means that the list is not available anymore if not renewed.
		 * - ``expiry``: Unix timestamp in seconds when the list will expire. If it does not exist, it will never expire.
		 * - ``created_at``: Unix timestamp in seconds when the list was created.
		 * - ``updated_at``: Unix timestamp in seconds when the list was updated.
		 * ### Errors
		 * It will return the API Global errors described in the API description.
		 * Get v1/denylist/public/owned
		 * @return {PublicAclGroupListCollectionOutput} Successful Response
		 */
		Get_public_denylists_owned_by_the_user_v1_denylist_public_owned_get(): Observable<PublicAclGroupListCollectionOutput> {
			return this.http.get<PublicAclGroupListCollectionOutput>(this.baseUri + 'v1/denylist/public/owned', {});
		}

		/**
		 * Get the set of public denylists of a user by resource type.
		 * ### What
		 * Obtain the set of public deny lists selected by the user and wich ones are not filtering by the resource type.
		 * ### Parameters
		 * The ``resource type`` to filter. The values can be ``CIDR``, ``AS``, ``COUNTRY``, ``CONTINENT`` or ``DATACENTER_ID``.
		 * ### Result
		 * The result is a JSON object with a list of the following JSON objects:
		 * - ``self``: the URI to the status of all the lists.
		 * - ``lists``: a list of JSON objects with the available lists:
		 * - ``self``: the URI to individual information of the list.
		 * - ``name``: A human readable name of the list.
		 * - ``description``: A long detailed information about what the list contains and how it is used.
		 * - ``resource_type``: The type of the list. It can be ``CIDR``, ``AS``, ``COUNTRY``, ``CONTINENT`` or ``DATACENTER_ID``.
		 * - ``list_type``: The type of the list. It can be ``ALLOW`` or ``DENY``.
		 * - ``status``: The status of the list. It can be ``ACTIVE`` or ``INACTIVE`` or ``EXPIRED``. If the list is ``EXPIRED``    it means that the list is not available anymore if not renewed.
		 * - ``created_at``: Unix timestamp in seconds when the list was created.
		 * - ``updated_at``: Unix timestamp in seconds when the list was updated.
		 * - ``expiry``: Unix timestamp in seconds when the list will expire. If it does not exist, it will never expire.
		 * - ``origins``: list of websites that are using the list as an denylist.
		 * - ``self``: the URI to all the list of origins.
		 * - ``lists``: list of lists that the origin is using.
		 * - ``self``: the URI to the individual information of the list.
		 * - ``origin``: the protocol and domain of the website that is using the list.
		 * - ``status``: the status of the list. It can be ``ACTIVE`` or ``INACTIVE`` or ``EXPIRED``. If the list is ``EXPIRED``            it means that the list is not available anymore if not renewed.
		 * - ``expiry``: Unix timestamp in seconds when the list will expire. If it does not exist, it will never expire.
		 * - ``created_at``: Unix timestamp in seconds when the list was created.
		 * - ``updated_at``: Unix timestamp in seconds when the list was updated.
		 * ### Errors
		 * It will return the API Global errors described in the API description.
		 * Get v1/denylist/public/owned/{resource_type}
		 * @return {PublicAclGroupListCollectionOutput} Successful Response
		 */
		Get_all_owned_denylists_by_resource_type_v1_denylist_public_owned__resource_type__get(resource_type: Get_all_private_allowlists_by_resource_type_v1_allowlist_private_all__resource_type__getResource_type): Observable<PublicAclGroupListCollectionOutput> {
			return this.http.get<PublicAclGroupListCollectionOutput>(this.baseUri + 'v1/denylist/public/owned/' + resource_type, {});
		}

		/**
		 * Delete all the bindings between a user and an denylist.
		 * ### What
		 * Delete all the bindings between a user and an denylist. This will remove the denylist from the user and also all the origins that are using the denylist.
		 * This is an asynchronous operation. It can take several seconds until the operation completes, but the request will  immediately return a 202 Accepted response.
		 * ### Parameters
		 * In the query string the ID of the deny list to change the status.
		 * ### Result
		 * It should always return a 202 Accepted response with an empty body.
		 * ### Errors
		 * If the list does not exist, it will return a 404 error.
		 * If the deny list is not a valid UUID, it will return a 422 error.
		 * It will return the API Global errors described in the API description.
		 * Delete v1/denylist/public/{denylist_id}
		 * @return {any} Successful Response
		 */
		Delete_the_denylist_v1_denylist_public__denylist_id__delete(denylist_id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/denylist/public/' + (denylist_id == null ? '' : encodeURIComponent(denylist_id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get the details of the denylist.
		 * ### What
		 * Obtain the details of an deny list available in the service.
		 * ### Parameters
		 * No parameters
		 * ### Result
		 * The result is a JSON object with a list of the following JSON objects:
		 * - ``self``: the URI to individual information of the list.
		 * - ``name``: A human readable name of the list.
		 * - ``description``: A long detailed information about what the list contains and how it is used.
		 * - ``resource_type``: The type of the list. It can be ``CIDR``, ``AS``, ``COUNTRY``, ``CONTINENT`` or ``DATACENTER_ID``.
		 * - ``list_type``: The type of the list. It can be ``ALLOW`` or ``DENY``.
		 * - ``status``: The status of the list. It can be ``ACTIVE`` or ``INACTIVE`` or ``EXPIRED``. If the list is ``EXPIRED``it means that the list is not available anymore if not renewed.
		 * - ``created_at``: Unix timestamp in seconds when the list was created.
		 * - ``updated_at``: Unix timestamp in seconds when the list was updated.
		 * If the list is already selected by the user, the JSON object will also contain the following fields:
		 * - ``expiry``: Unix timestamp in seconds when the list will expire. If it does not exist, it will never expire.
		 * - ``origins``: list of websites that are using the list as an denylist.
		 * - ``self``: the URI to all the list of origins.
		 * - ``lists``: list of lists that the origin is using.
		 * - ``self``: the URI to the individual information of the list.
		 * - ``origin``: the protocol and domain of the website that is using the list.
		 * - ``status``: the status of the list. It can be ``ACTIVE`` or ``INACTIVE`` or ``EXPIRED``. If the list is ``EXPIRED``            it means that the list is not available anymore if not renewed.
		 * - ``expiry``: Unix timestamp in seconds when the list will expire. If it does not exist, it will never expire.
		 * - ``created_at``: Unix timestamp in seconds when the list was created.
		 * - ``updated_at``: Unix timestamp in seconds when the list was updated.
		 * ### Errors
		 * If the list does not exist, it will return a 404 error.
		 * It will return the API Global errors described in the API description.
		 * Get v1/denylist/public/{denylist_id}
		 * @return {PublicAclGroupListOutput} Successful Response
		 */
		Get_single_denylist_v1_denylist_public__denylist_id__get(denylist_id: string): Observable<PublicAclGroupListOutput> {
			return this.http.get<PublicAclGroupListOutput>(this.baseUri + 'v1/denylist/public/' + (denylist_id == null ? '' : encodeURIComponent(denylist_id)), {});
		}

		/**
		 * Toogle the status of an deny list.
		 * ### What
		 * Change the status of an deny list to ``ACTIVE`` or ``INACTIVE``. An ``INACTIVE`` list will not be used by the service. An ``ACTIVE`` list will be used by the service. As an optional parameter it can be provided an ``expiry`` date in seconds since epoch. If not provided, the list will never expire.
		 * This is an asynchronous operation. It can take several seconds until the operation completes, but the request will  immediately return a 202 Accepted response.
		 * ### Parameters
		 * In the query string the ID of the deny list to change the status.
		 * In the body the JSON object with the following fields:
		 * - ``status``: The status of the list. It can be ``ACTIVE`` or ``INACTIVE``.
		 * - ``expiry``: Unix timestamp in seconds when the list will expire. If it does not exist, it will never expire.
		 * ### Result
		 * It should always return a 202 Accepted response with an empty body.
		 * ### Errors
		 * If the list does not exist, it will return a 404 error.
		 * If the status is not ``ACTIVE`` or ``INACTIVE``, it will return a 422 error.
		 * If the expiry is not a valid timestamp, it will return a 422 error.
		 * If the deny list is not a valid UUID, it will return a 422 error.
		 * It will return the API Global errors described in the API description.
		 * Put v1/denylist/public/{denylist_id}
		 * @return {any} Successful Response
		 */
		Change_status_of_the_denylist_v1_denylist_public__denylist_id__put(denylist_id: string, requestBody: Body_change_status_of_the_denylist_v1_denylist_public__denylist_id__put): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'v1/denylist/public/' + (denylist_id == null ? '' : encodeURIComponent(denylist_id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Toogle the status of the origin in a deny list.
		 * ### What
		 * Change the status of the origin of a deny list to ``ACTIVE``, ``INACTIVE`` or ``DELETED``.
		 * An ``ACTIVE`` origin will apply the deny list to the protocol and domain of the origin. An origin can be created and activated simply toogling the ``ACTIVE`` status. As an optional parameter it can be provided an ``ttl`` or Time To Live parameter of the origin in the list in seconds. After the TTL expires, the origin will be removed from the list.  If the TTL is not provided, the origin will never expire.
		 * An ``INACTIVE`` origin will not apply the deny list to the protocol and domain of the origin.
		 * A ``DELETED`` origin will be removed from the list. It will not be used by the service anymore. The user can activate it again with the ``ACTIVE`` status.
		 * This is an asynchronous operation. It can take several seconds until the operation completes, but the request will  immediately return a 202 Accepted response.
		 * *This operation is not available in the Freemium plan.*
		 * ### Parameters
		 * In the query string the ID of the deny list to change the status.
		 * In the body the JSON object with the following fields:
		 * - ``origin``: The protocol and domain of the origin. It can be ``http://example.com`` or ``https://example.com``.
		 * - ``status``: The status of the list. It can be ``ACTIVE``, ``INACTIVE`` or ``DELETED``.
		 * ### Result
		 * It should always return a 202 Accepted response with an empty body.
		 * ### Errors
		 * If the list does not exist, it will return a 404 error.
		 * If the status is not ``ACTIVE`` or ``INACTIVE``, it will return a 422 error.
		 * If the TTL is negative in the past, it will return a 422 error.
		 * If the deny list is not a valid UUID, it will return a 422 error.
		 * If the origin is not a valid URL, it will return a 400 error.
		 * If the denylist is not active, it will returna 409 error.
		 * If the origin is not found in the set owned by the user, it will return a 404 error.
		 * It will return the API Global errors described in the API description.
		 * Put v1/denylist/public/{denylist_id}/origin
		 * @return {any} Successful Response
		 */
		Change_status_of_the_origin_denylist_v1_denylist_public__denylist_id__origin_put(denylist_id: string, requestBody: Body_change_status_of_the_origin_denylist_v1_denylist_public__denylist_id__origin_put): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'v1/denylist/public/' + (denylist_id == null ? '' : encodeURIComponent(denylist_id)) + '/origin', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get the list of automatically reported IP addresses by the user.
		 * ### What
		 * Obtain the list of all the IPv4 or IPv6 addresses that have been automatically reported by the user. A user can report automatically an IP address with the asynchronous API. The reported IP addresses differ from the ones managed with the endpoint ``/v1/denylist/private/ip/%s``. As a rule of thumb,
		 * the reported IP addresses are the ones submitted by devices like honeypots, firewalls, log engines, etc. The denylisted IP addresses are the ones submitted manually by the user from files or indidual items.
		 * ### Parameters
		 * The endpoint accepts the following parameters in the query string:
		 * - ``dataset``: (Optional) Name of the dataset to filter the query. If not given, then all datasets are queried. If given, then only the changes logged in the given dataset are returned. The list of datasets is obtained from the ``/v1/dataset/ip`` endpoint.
		 * - ``reported_before``: (Optional) The UNIX timestamp in milliseconds of the earliest reported date to be included in the query. If not given, then the earliest date is current time.
		 * - ``reported_after``: (Optional) The UNIX timestamp in milliseconds of the oldest reported date to be included in the query. If not given, then the oldest date is the first event logged.
		 * - ``expires_before``: (Optional) The UNIX timestamp in milliseconds of the earliest expiry date to be included in the query. If not given, then the earliest date is current time.
		 * - ``expires_after``: (Optional) The UNIX timestamp in milliseconds of the oldest expiry date to be included in the query. If not given, then the oldest date is the first event logged.
		 * - ``greater_than``: (Optional) Restricts the result displaying only the IP addresses reported more times than the given value. It must be an integer greater than 0.
		 * - ``less_than``: (Optional) Restricts the result displaying only the IP addresses reported less times than the given value. It must be an integer greater than 0.
		 * - ``ip_protocol_version``: (Optional) Restricts the result displaying only the IP addresses with the given IP protocol version. Values are: ALL, IPV4, IPV6. If not given, then all IP addresses are returned.
		 * - ``output_format``: (Optional) The format of the output. Values are: JSON, CSV, AWS-WAF. If not given, then the default format is JSON. AWS-WAF is the format used by AWS WAF to import ipsets in the service. You can find more information about AWS WAF import [here](https://docs.aws.amazon.com/waf/latest/APIReference/API_CreateIPSet.html).
		 * ### Result
		 * The result is a JSON object with a list of the following JSON objects:
		 * - ``self``: the URI to individual status.
		 * - ``addresses``: a list of JSON objects with the following fields:
		 * - ``self``: the URI to individual reported IP information.
		 * - ``last_report``: Unix timestamp in milliseconds when the IP address was last reported.
		 * - ``expiry``: Unix timestamp in milliseconds when the IP address will expire and be removed.
		 * - ``total_reports``: Total number of reports for the IP address.
		 * - ``protocol``: IP protocol version of the IP address. Same value as the ``ip_protocol_version`` parameter if given.
		 * - ``dataset``: Name of the dataset where the IP address was reported. Must be a value from the ``/v1/dataset/ip`` endpoint.
		 * - ``tags``: A list of strings with the tags associated to the IP address at the origin device. It helps to classify the origin of the report.
		 * ### Errors
		 * - a `400 Bad Request` error if any timestamp is in the future.
		 * - a `400 Bad Request` error if the dataset is not a string that can have numbers, upper and lower case letters, and underscores.
		 * - a `404 Not Found` error if the dataset was not found.
		 * - a `422 Unprocessable Entity` error if some of the parameters are malformed.
		 * It will also return the API Global errors described in the API description.
		 * Get v1/denylist/reported/ip
		 * @param {string} dataset The dataset list type to filter for. Must be uppercase, numbers and underscore
		 * @param {number} reported_before Restricts the result displaying only the IP addresses reported before `reported_before`. It must be a UNIX timestamp in seconds.
		 * @param {number} reported_after Restricts the result displaying only the IP addresses reported after `reported_after`. It must be a UNIX timestamp in seconds.
		 * @param {number} expires_before Restricts the result displaying only the IP addresses that will expire before `expires_before`. It must be a UNIX timestamp in seconds greater than the current UNIX timestamp.
		 * @param {number} expires_after Restricts the result displaying only the IP addresses that will expire after `expires_after`. It must be a UNIX timestamp in seconds greater than the current UNIX timestamp.
		 * @param {number} greater_than Restricts the result displaying only the IP addresses reported more times than `greater_than`. It must be an integer greater than 0.
		 * @param {number} less_than Restricts the result displaying only the IP addresses reported less times than `less_than`. It must be an integer greater than 1.
		 * @param {IPListOutputProtocol} ip_protocol_version Restrict the result displaying the IP protocol version requested (IPV4 or IPV6) or both (ALL). Some output formats MUST filter by IP protocol version first.
		 * @param {Query_all_the_ip_addresses_reported_by_the_user_v1_denylist_reported_ip_getOutput_format} output_format The output format of the datasets.
		 * @return {IPListCollectionOutput} Successful Response
		 */
		Query_all_the_ip_addresses_reported_by_the_user_v1_denylist_reported_ip_get(dataset: string | null | undefined, reported_before: number | null | undefined, reported_after: number | null | undefined, expires_before: number | null | undefined, expires_after: number | null | undefined, greater_than: number | null | undefined, less_than: number | null | undefined, ip_protocol_version: IPListOutputProtocol | null | undefined, output_format: Query_all_the_ip_addresses_reported_by_the_user_v1_denylist_reported_ip_getOutput_format | null | undefined): Observable<IPListCollectionOutput> {
			return this.http.get<IPListCollectionOutput>(this.baseUri + 'v1/denylist/reported/ip?dataset=' + (dataset == null ? '' : encodeURIComponent(dataset)) + '&reported_before=' + reported_before + '&reported_after=' + reported_after + '&expires_before=' + expires_before + '&expires_after=' + expires_after + '&greater_than=' + greater_than + '&less_than=' + less_than + '&ip_protocol_version=' + ip_protocol_version + '&output_format=' + output_format, {});
		}

		/**
		 * Delete all the automatically reported IP addresses by the user.
		 * ### What
		 * Delete all the IP addresses that have been automatically reported by the user. This option cannot be reverted.
		 * ### Parameters
		 * No parameters are required.
		 * ### Result
		 * A successful result is an empty response with the the HTTP status code ``204 No Content``.
		 * ### Errors
		 * It will return the API Global errors described in the API description.
		 * Delete v1/denylist/reported/ip/all
		 * @return {any} Successful Response
		 */
		Delete_all_ip_addresses_reported_by_the_user_v1_denylist_reported_ip_all_delete(): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/denylist/reported/ip/all', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete the automatically reported IP address by the user.
		 * ### What
		 * Delete an IP address that was automatically reported by the user. This option cannot be reverted.
		 * ### Parameters
		 * The endpoint accepts the following parameters in the path:
		 * - ``ip_address``: (Mandatory) The public IPv4 or IPv6 addresses to be deleted.
		 * ### Result
		 * A successful result is an empty response with the the HTTP status code ``204 No Content``.
		 * ### Errors
		 * - a `422 Unprocessable Entity` error if the IP address is malformed.
		 * It will also return the API Global errors described in the API description.
		 * Delete v1/denylist/reported/ip/{ip_address}
		 * @return {any} Successful Response
		 */
		Delete_an_ip_address_reported_by_the_user_v1_denylist_reported_ip__ip_address__delete(ip_address: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/denylist/reported/ip/' + (ip_address == null ? '' : encodeURIComponent(ip_address)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get the details of an automatically reported IP addresses by the user.
		 * ### What
		 * Obtain the details of an IPv4 or IPv6 addresses that have been automatically reported by the user. A user can report automatically an IP address with the asynchronous API. The reported IP address differs from the ones managed with the endpoint ``/v1/denylist/private/ip/%s``. As a rule of thumb,
		 * the reported IP addresses are the ones submitted by devices like honeypots, firewalls, log engines, etc. The denylisted IP addresses are the ones submitted manually by the user from files or indidual items.
		 * ### Parameters
		 * The endpoint accepts the following parameters in the path:
		 * - ``ip_address``: (Mandatory) The public IPv4 or IPv6 addresses to be queried.
		 * ### Result
		 * The result is a JSON object with the following fields:
		 * - ``self``: the URI to individual reported IP information.
		 * - ``last_report``: Unix timestamp in milliseconds when the IP address was last reported.
		 * - ``expiry``: Unix timestamp in milliseconds when the IP address will expire and be removed.
		 * - ``total_reports``: Total number of reports for the IP address.
		 * - ``protocol``: IP protocol version of the IP address. Values can be IPV4 or IPV6.
		 * - ``dataset``: Name of the dataset where the IP address was reported. Must be a value from the ``/v1/dataset/ip`` endpoint.
		 * - ``tags``: A list of strings with the tags associated to the IP address at the origin device. It helps to classify the origin of the report.
		 * ### Errors
		 * - a `422 Unprocessable Entity` error if the IP address is malformed.
		 * It will also return the API Global errors described in the API description.
		 * Get v1/denylist/reported/ip/{ip_address}
		 * @return {IPListOutput} Successful Response
		 */
		Query_an_ip_addresses_reported_by_the_user_v1_denylist_reported_ip__ip_address__get(ip_address: string): Observable<IPListOutput> {
			return this.http.get<IPListOutput>(this.baseUri + 'v1/denylist/reported/ip/' + (ip_address == null ? '' : encodeURIComponent(ip_address)), {});
		}

		/**
		 * Get the geolocation data of the IP addresses set.
		 * ### What
		 * Get the geo location data of all the IP addresses passed as argument. This information includes:
		 * - Latitude and longitude
		 * - Time zone
		 * - Accuracy radius
		 * - Postal code
		 * - City name
		 * - Region
		 * - Country
		 * - Country of the service provider
		 * - Continent
		 * - Reverse PTR hostnames
		 * ### Parameters
		 * A list of public IPv4 or IPv6 addresses is required in the body of the request.
		 * ### Result
		 * The result contains a list of the result for each IP address, with the following data set:
		 * The result is a JSON object with the following structure:
		 * - ``self``: the URI of the API call
		 * - ``accuracy_radius``:  The radius in kilometers around the specified location where the IP address is likely to be.
		 * - ``asn_country_iso_code``: The ISO code of the country of the Autonomous System (AS) owner of the IP address.
		 * - ``city_geoname_code``:``: City geoname code. The geoname code by [GeoNames](https://en.wikipedia.org/wiki/GeoNames) is a unique identifier assigned to each geographical point on the globe.
		 * - ``city_name``:``: City name, in english. The developer can use the geoname code to localize the name of the city.
		 * - ``continent_code``: The continent code. It can be any of the following: AF, AN, AS, EU, NA, OC, SA.
		 * - ``country_iso_code``: The country ISO 3166-1 alpha-2 code.
		 * - ``hostnames``: The list of hostnames associated with the IP address obtained from the reverse DNS lookup.
		 * - ``latitude``: The latitude of the geolocation.
		 * - ``longitude``: The longitude of the geolocation.
		 * - ``postal_code``:``: The postal code of the city.
		 * - ``region_geoname_code``:``: The geoname code of the region.
		 * - ``region_name``:``: The region name, in english. The developer can use the geoname code to localize the name of the region.
		 * - ``time_zone``: The name of the time zone.
		 * ### Errors
		 * The endpoint will return the following errors:
		 * - a `422 Unprocessable Entity` error if the IP address is malformed.
		 * The private IP addresses will be ignored, if any.
		 * It will also return the API Global errors described in the API description.
		 * Post v1/geo
		 * @return {GeoIPCollectionOutput} The server will return a valid answer in the following cases:
		 */
		Geolocate_ip_set_v1_geo_post(requestBody: Array<string>): Observable<GeoIPCollectionOutput> {
			return this.http.post<GeoIPCollectionOutput>(this.baseUri + 'v1/geo', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get the geo location data of the IP address.
		 * ### What
		 * Get the geo location data of the IP address passed as argument. This information includes:
		 * - Latitude and longitude
		 * - Time zone
		 * - Accuracy radius
		 * - Postal code
		 * - City name
		 * - Region
		 * - Country
		 * - Country of the service provider
		 * - Continent
		 * - Reverse PTR hostnames
		 * ### Parameters
		 * The only argument accepted in the query string is a public IPv4 or IPv6 addresses.
		 * ### Result
		 * The result contains the following set of data:
		 * The result is a JSON object with the following structure:
		 * - ``self``: the URI of the API call
		 * - ``accuracy_radius``:  The radius in kilometers around the specified location where the IP address is likely to be.
		 * - ``asn_country_iso_code``: The ISO code of the country of the Autonomous System (AS) owner of the IP address.
		 * - ``city_geoname_code``:``: City geoname code. The geoname code by [GeoNames](https://en.wikipedia.org/wiki/GeoNames) is a unique identifier assigned to each geographical point on the globe.
		 * - ``city_name``:``: City name, in english. The developer can use the geoname code to localize the name of the city.
		 * - ``continent_code``: The continent code. It can be any of the following: AF, AN, AS, EU, NA, OC, SA.
		 * - ``country_iso_code``: The country ISO 3166-1 alpha-2 code.
		 * - ``hostnames``: The list of hostnames associated with the IP address obtained from the reverse DNS lookup.
		 * - ``latitude``: The latitude of the geolocation.
		 * - ``longitude``: The longitude of the geolocation.
		 * - ``postal_code``:``: The postal code of the city.
		 * - ``region_geoname_code``:``: The geoname code of the region.
		 * - ``region_name``:``: The region name, in english. The developer can use the geoname code to localize the name of the region.
		 * - ``time_zone``: The name of the time zone.
		 * ### Errors
		 * The endpoint will return the following errors:
		 * - a `400 Bad Request` error if the IP address is not public.
		 * - a `422 Unprocessable Entity` error if the IP address is malformed.
		 * It will also return the API Global errors described in the API description.
		 * Get v1/geo/{ip_address}
		 * @return {GeoIPOutput} The server will return a valid answer in the following cases:
		 */
		Geolocate_ip_v1_geo__ip_address__get(ip_address: string): Observable<GeoIPOutput> {
			return this.http.get<GeoIPOutput>(this.baseUri + 'v1/geo/' + (ip_address == null ? '' : encodeURIComponent(ip_address)), {});
		}

		/**
		 * Get a log event.
		 * ### What
		 * Obtain the full detail of a specific log change.
		 * ### Parameters
		 * The endpoint accepts only the following parameters in the path:
		 * - ``logchange_id``: (Mandatory) A unique integer of the change event log.
		 * ### Result
		 * The result is a JSON object with the following structure:
		 * - ``self``: the URI of the API call
		 * - ``cidr``: The CIDR affected by the change.
		 * - ``score``: The score of the IP address when the event happened. It ranges from 0 to 99.
		 * - ``risk``: The risk of the IP address when the event happened. The allowed values are: LOW, MEDIUM, HIGH. It's a human readable representation of the score.
		 * - ``dataset``: The URI of the dataset where the change was logged.
		 * - ``source``: The URI of the data source where the change was found.
		 * - ``lapse``: The time elapsed between the event found and the moment the source was queried. The possible values are: 1H, 6H, 12H, 1D, 7D, 30D, 90D, 180D, 365D.
		 * - ``action``: The action that was performed on the IP address. The allowed values are: ADD, DELETE.
		 * - ``timestamp``: The UNIX timestamp in milliseconds when the change was logged.
		 * ### Errors
		 * The endpoint will return the following errors:
		 * - a `404 Not Found` error if there is no event in the log with the ``logchange_ID`` given.
		 * - a `422 Unprocessable Entity` error if the ``logchange_ID`` is malformed.
		 * It will also return the API Global errors described in the API description.
		 * Get v1/log/ip/id/{logchange_id}
		 * @return {IPLogOutput} Successful Response
		 */
		Log_change_id_v1_log_ip_id__logchange_id__get(logchange_id: number): Observable<IPLogOutput> {
			return this.http.get<IPLogOutput>(this.baseUri + 'v1/log/ip/id/' + logchange_id, {});
		}

		/**
		 * Get the changes logged in the different datasets of an IP address.
		 * ### What
		 * Obtain a list of changes logged in the different datasets of the IP address given.
		 * ### Parameters
		 * The endpoint accepts the following parameters in the path:
		 * - ``ip_address``: (Mandatory) The public IPv4 or IPv6 addresses to be queried.
		 * The endpoint accepts the following parameters in the query string:
		 * - ``dataset``: (Optional) Name of the dataset to filter the query. If not given, then all datasets are queried. If given, then only the changes logged in the given dataset are returned. The list of datasets is obtained from the ``/v1/dataset/ip`` endpoint.
		 * - ``logged_after``: (Optional) The UNIX timestamp in milliseconds of the earliest date to be included in the query. If not given, then the earliest date is the date of the first change logged in the dataset.
		 * ### Result
		 * The result is a JSON object with the following structure:
		 * - ``self``: the URI of the API call
		 * - ``logs``: The list of log changes. Each element of the list is a JSON object of a specific log change with the structure described in the endpoint ``/v1/log/ip/id/logchange_id``.
		 * ### Errors
		 * The endpoint will return the following errors:
		 * - a `400 Bad Request` error if the IP address is not public.
		 * - a `400 Bad Request` error if the timestamp is in the future.
		 * - a `400 Bad Request` error if the dataset is not a string that can have numbers, upper and lower case letters, and underscores.
		 * - a `404 Not Found` error if the dataset was not found.
		 * - a `422 Unprocessable Entity` error if the IP address is malformed.
		 * It will also return the API Global errors described in the API description.
		 * Get v1/log/ip/{ip_address}
		 * @param {string} ip_address The IPv4 or IPv6 address to asses the risk
		 * @param {string} dataset The name of the dataset to restrict the query
		 * @param {number} logged_after A UNIX timestamp in milliseconds to restrict the results of the query to entries logged after this value.
		 * @return {IPLogCollectionOutput} Successful Response
		 */
		Logchanges_ip_v1_log_ip__ip_address__get(ip_address: string, dataset: string | null | undefined, logged_after: number | null | undefined): Observable<IPLogCollectionOutput> {
			return this.http.get<IPLogCollectionOutput>(this.baseUri + 'v1/log/ip/' + (ip_address == null ? '' : encodeURIComponent(ip_address)) + '&dataset=' + (dataset == null ? '' : encodeURIComponent(dataset)) + '&logged_after=' + logged_after, {});
		}

		/**
		 * Get the information of an origin of the user in the region.
		 * ### What
		 * Obtain the attributes of the origin of the user passed as argument in the selected region. The purpose of this function is to display the information of configuration of the origin and also access to the live data of the origin.
		 * The origin is a combination of protocol and domain (Ex: https://example.com) and the origin token is a special key used in conjunction with javascript library used for abuse detection. This key is owned by the user and is used to identify the origin of the request.
		 * Hence, the protocol and domain of the origin must be the one where the javascript is loaded.
		 * ### Parameters
		 * In the querystring of the request, add the origin of the user to the `query` parameter with the following format:1. Protocol: Can be ``http`` or ``https``.
		 * 2. Domain: The domain of the origin.
		 * Then, the origin must be urlencoded. Example:
		 * ```
		 * https://example.com
		 * ```
		 * ```
		 * https%3A%2F%2Fexample.com
		 * ```
		 * The querystring must be like this:
		 * ```
		 * ?query=https%3A%2F%2Fexample.com
		 * ```
		 * ### Result
		 * The result is a JSON object with the following fields:
		 * - ``self``: the URI to the request to obtain the full details of an origin.
		 * - ``origin``: the protocol and the domain where the origin token is valid.
		 * - ``status``: the status of the origin token. The only allowed values are ``ENABLED`` and ``DISABLED``.
		 * - ``token``: the URI to the request to obtain the token of the origin.
		 * - ``data``: a JSON object containing all the parameters of the origin as key-value pairs.
		 * - ``logs``: the URI to the request to obtain the log activity in the origin.
		 * - ``addresses``: the URI to the request to obtain the list of IP addresses active in the origin.
		 * - ``cookies``: the URI to the request to obtain the list of cookies active in the origin.
		 * - ``created_at``: the date and time when the origin token was created in UNIX timestamp in milliseconds.
		 * - ``updated_at``: the date and time when the origin token was last updated in UNIX timestamp in milliseconds.
		 * ### Errors
		 * - a `404 Not Found` error if the origin token is not found.
		 * - a `400 Bad Request` error if the origin does not have the correct format.
		 * It will return the API Global errors described in the API description.
		 * Get v1/origin
		 * @param {string} query The origin site to query
		 * @return {OriginOutput} Successful Response
		 */
		Query_origin_information_v1_origin_get(query: string): Observable<OriginOutput> {
			return this.http.get<OriginOutput>(this.baseUri + 'v1/origin?query=' + (query == null ? '' : encodeURIComponent(query)), {});
		}

		/**
		 * Update the configuration of an origin of the user in the region.
		 * ### What
		 * Modify the configuration metadata of the origin of the user in the selected region.
		 * The origin is a combination of protocol and domain (Ex: https://example.com) and the origin token is a special key used in conjunction with javascript library used for abuse detection. This key is owned by the user and is used to identify the origin of the request.
		 * Hence, the protocol and domain of the origin must be the one where the javascript is loaded.
		 * ### Parameters
		 * In the body of the request, add the `origin` of the user and the `config` parameter with the following format for the `origin`:1. Protocol: Can be ``http`` or ``https``.
		 * 2. Domain: The domain of the origin.
		 * The `config` parameter is a JSON object containing the configuration of the origin. It only accepts the existing parameters obtained from the `GET` request of the origin. If the parameter is not present in the `config` object, it will fail to store it. It's not necessary to send all the parameters, only the ones that need to be updated.
		 * ### Result
		 * The result is the JSON object with all the new values of the origin configuration.
		 * ### Errors
		 * - a `404 Not Found` error if the origin token is not found.
		 * - a `400 Bad Request` error if the origin does not have the correct format.
		 * - a `400 Bad Request` error if the `config` parameter is not a JSON object or unknown parameters are sent.
		 * It will return the API Global errors described in the API description.
		 * Put v1/origin
		 * @return {string} Successful Response
		 */
		Update_configuration_origin_v1_origin_put(requestBody: Body_update_configuration_origin_v1_origin_put): Observable<string> {
			return this.http.put(this.baseUri + 'v1/origin', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Get the address status of the origin of the user in the region.
		 * ### What
		 * Obtain the status that trigger the change in the status of the origin of a specific IP address. The status will also describe the current state of the status and the information that triggered the change.
		 * The origin is a combination of protocol and domain (Ex: https://example.com) and the origin token is a special key used in conjunction with javascript library used for abuse detection. This key is owned by the user and is used to identify the origin of the request.
		 * Hence, the protocol and domain of the origin must be the one where the javascript is loaded.
		 * ### Parameters
		 * In the querystring of the request, add the origin of the user to the `query` parameter with the following format:1. Protocol: Can be ``http`` or ``https``.
		 * 2. Domain: The domain of the origin.
		 * Then, the origin must be urlencoded. Example:
		 * ```
		 * https://example.com
		 * ```
		 * ```
		 * https%3A%2F%2Fexample.com
		 * ```
		 * The querystring must be like this:
		 * ```
		 * ?query=https%3A%2F%2Fexample.com
		 * ```
		 * ### Result
		 * The result is a JSON object with the following fields:
		 * - ``self``: the URI to the request to obtain the full details of the status of an origin.
		 * - ``addresses``: a list of JSON objects with the following fields:
		 * - ``address``: the IP address of the origin.
		 * - ``status``: the status of IP address for the given origin.
		 * - ``log_id``: the ID of the log that triggered the change in the status of the origin.
		 * - ``expiry``: the date and time when the origin status will expire in UNIX timestamp in milliseconds.
		 * - ``created_at``: the date and time when the origin status was created in UNIX timestamp in milliseconds.
		 * - ``updated_at``: the date and time when the origin status was last updated in UNIX timestamp in milliseconds.
		 * ### Errors
		 * - a `404 Not Found` error if the origin is not found.
		 * - a `400 Bad Request` error if the origin does not have the correct format.
		 * It will return the API Global errors described in the API description.
		 * Get v1/origin/addresses
		 * @param {string} query The origin site to query
		 * @param {number} page The page to be returned
		 * @param {number} page_size The number of items per page
		 * @return {OriginAddressStatusCollectionOutput} Successful Response
		 */
		Query_origin_address_status_information_v1_origin_addresses_get(query: string, page: number | null | undefined, page_size: number | null | undefined): Observable<OriginAddressStatusCollectionOutput> {
			return this.http.get<OriginAddressStatusCollectionOutput>(this.baseUri + 'v1/origin/addresses?query=' + (query == null ? '' : encodeURIComponent(query)) + '&page=' + page + '&page_size=' + page_size, {});
		}

		/**
		 * Get the information of the origins of the user in the region.
		 * ### What
		 * Obtain the attributes of all the origins of the user in the selected region. The purpose of this function is to display the information of configuration of the origins and also access to the live data of the origins.
		 * The origin is a combination of protocol and domain (Ex: https://example.com) and the origin token is a special key used in conjunction with javascript library used for abuse detection. This key is owned by the user and is used to identify the origin of the request.
		 * Hence, the protocol and domain of the origin must be the one where the javascript is loaded.
		 * ### Parameters
		 * No parameters are required.
		 * ### Result
		 * The result is a list of JSON objects with the following fields:
		 * - ``self``: the URI to the request to obtain all the origins of the user.
		 * - ``origins``: A list of JSON objects with the following fields:
		 * - ``self``: the URI to the request to obtain the full details of an origin.
		 * - ``origin``: the protocol and the domain where the origin token is valid.
		 * - ``status``: the status of the origin token. The only allowed values are ``ENABLED`` and ``DISABLED``.
		 * - ``token``: the URI to the request to obtain the token of the origin.
		 * - ``data``: a JSON object containing all the parameters of the origin as key-value pairs.
		 * - ``logs``: the URI to the request to obtain the log activity in the origin.
		 * - ``addresses``: the URI to the request to obtain the list of IP addresses active in the origin.
		 * - ``cookies``: the URI to the request to obtain the list of cookies active in the origin.
		 * - ``created_at``: the date and time when the origin token was created in UNIX timestamp in milliseconds.
		 * - ``updated_at``: the date and time when the origin token was last updated in UNIX timestamp in milliseconds.
		 * ### Errors
		 * It will return the API Global errors described in the API description.
		 * Get v1/origin/all
		 * @return {OriginCollectionOutput} Successful Response
		 */
		Query_all_origin_information_v1_origin_all_get(): Observable<OriginCollectionOutput> {
			return this.http.get<OriginCollectionOutput>(this.baseUri + 'v1/origin/all', {});
		}

		/**
		 * Get the type of clients of the trafffic of the origin.
		 * ### What
		 * Obtain the type of clients of trhe traffic in the specified time range and interval. Thequery will return the number of requests and the different type of CLIENTs and CRAWLERs.
		 * The origin is a combination of protocol and domain (Ex: https://example.com) and the origin token is a special key used in conjunction with javascript library used for abuse detection. This key is owned by the user and is used to identify the origin of the request.
		 * Hence, the protocol and domain of the origin must be the one where the javascript is loaded.
		 * ### Parameters
		 * In the querystring of the request, add the origin of the user to the `query` parameter with the following format:1. Protocol: Can be ``http`` or ``https``.
		 * 2. Domain: The domain of the origin.
		 * Then, the origin must be urlencoded. Example:
		 * ```
		 * https://example.com
		 * ```
		 * ```
		 * https%3A%2F%2Fexample.com
		 * ```
		 * The querystring must be like this:
		 * ```
		 * ?query=https%3A%2F%2Fexample.com
		 * ```
		 * To restrict the query to a specific time range, add the following parameters to the querystring:
		 * - ``from_timestamp``: the start date and time of the analysis in UNIX timestamp in milliseconds.
		 * - ``to_timestamp``: (Optional) the end date and time of the analysis in UNIX timestamp in milliseconds.
		 * - ``interval``: (Optional) the interval of the analysis in minutes. The default value is 60 minutes (HOURLY). Possible values are: ``HOURLY``.
		 * ### Result
		 * The result is a JSON object with the following fields:
		 * - ``self``: the URI to the request to obtain the traffic client analysis for the origin.
		 * - ``from_timestamp``: the start date and time of the analysis in UNIX timestamp in milliseconds.
		 * - ``to_timestamp``: the end date and time of the analysis in UNIX timestamp in milliseconds.
		 * - ``interval``: the interval of the analysis. Possible values are: ``HOURLY``.
		 * - ``data``: a JSON list with the following elements each one with the following fields:
		 * - ``timestamp``: the date and time of the analysis in UNIX timestamp in milliseconds.
		 * - ``total``: the total number of requests.
		 * - ``client_*``: the number of requests from a specific client. The possible clients are: ``browser``, ``crawler``, ``email``, ``library``, ``mobile_browser``, ``multimedia_player``, ``offline_browser``, ``unrecognized``, ``ua_anonymizer``, ``validator``, ``wap_browser``.
		 * - ``crawler_*``: the number of requests from a specific crawler. The possible crawlers are:``feed_fetcher``, ``link_checker``, ``marketing``, ``screenshot_creator``, ``search_engine_bot``,``site_monitor``, ``speed_tester``, ``tool``, ``uncategorized``, ``unrecognized``, ``virus_scanner``,``vulnerability_scanner``, ``web_scraper``.
		 * ### Errors
		 * - a `404 Not Found` error if the origin token is not found.
		 * - a `400 Bad Request` error if the origin does not have the correct format.
		 * It will return the API Global errors described in the API description.
		 * Get v1/origin/client/analysis
		 * @param {string} query The origin site to query
		 * @param {Query_origin_traffic_client_v1_origin_client_analysis_getInterval} interval The data inteval to aggregate the result dataset
		 * @param {number} from_timestamp A UNIX timestamp in milliseconds to restrict the results of the query to entries logged after or equal to this value.
		 * @param {number} to_timestamp A UNIX timestamp in milliseconds to restrict the results of the query to entries logged before this value.
		 * @return {OriginClientAnalysisCollectionOutput} Successful Response
		 */
		Query_origin_traffic_client_v1_origin_client_analysis_get(query: string, interval: Query_origin_traffic_client_v1_origin_client_analysis_getInterval, from_timestamp: number, to_timestamp: number | null | undefined): Observable<OriginClientAnalysisCollectionOutput> {
			return this.http.get<OriginClientAnalysisCollectionOutput>(this.baseUri + 'v1/origin/client/analysis?query=' + (query == null ? '' : encodeURIComponent(query)) + '&interval=' + interval + '&from_timestamp=' + from_timestamp + '&to_timestamp=' + to_timestamp, {});
		}

		/**
		 * Get the tracking cookie ID status of the origin of the user in the region.
		 * ### What
		 * Obtain the status that trigger the change in the status of the origin of the cookie ID used to track the users. The status will also describe the current state of the status and the information that triggered the change.
		 * The origin is a combination of protocol and domain (Ex: https://example.com) and the origin token is a special key used in conjunction with javascript library used for abuse detection. This key is owned by the user and is used to identify the origin of the request.
		 * Hence, the protocol and domain of the origin must be the one where the javascript is loaded.
		 * ### Parameters
		 * In the querystring of the request, add the origin of the user to the `query` parameter with the following format:1. Protocol: Can be ``http`` or ``https``.
		 * 2. Domain: The domain of the origin.
		 * Then, the origin must be urlencoded. Example:
		 * ```
		 * https://example.com
		 * ```
		 * ```
		 * https%3A%2F%2Fexample.com
		 * ```
		 * The querystring must be like this:
		 * ```
		 * ?query=https%3A%2F%2Fexample.com
		 * ```
		 * ### Result
		 * The result is a JSON object with the following fields:
		 * - ``self``: the URI to the request to obtain the full details of the status of an origin.
		 * - ``addresses``: a list of JSON objects with the following fields:
		 * - ``cookie_id``: the ID of the tracking cookie for the origin.
		 * - ``status``: the status of tracking cookie ID for the given origin.
		 * - ``log_id``: the ID of the log that triggered the change in the status of the origin.
		 * - ``expiry``: the date and time when the origin status will expire in UNIX timestamp in milliseconds.
		 * - ``created_at``: the date and time when the origin status was created in UNIX timestamp in milliseconds.
		 * - ``updated_at``: the date and time when the origin status was last updated in UNIX timestamp in milliseconds.
		 * ### Errors
		 * - a `404 Not Found` error if the origin is not found.
		 * - a `400 Bad Request` error if the origin does not have the correct format.
		 * It will return the API Global errors described in the API description.
		 * Get v1/origin/cookies
		 * @param {string} query The origin site to query
		 * @param {number} page The page to be returned
		 * @param {number} page_size The number of items per page
		 * @return {OriginCookieIdStatusCollectionOutput} Successful Response
		 */
		Query_origin_cookie_id_status_information_v1_origin_cookies_get(query: string, page: number | null | undefined, page_size: number | null | undefined): Observable<OriginCookieIdStatusCollectionOutput> {
			return this.http.get<OriginCookieIdStatusCollectionOutput>(this.baseUri + 'v1/origin/cookies?query=' + (query == null ? '' : encodeURIComponent(query)) + '&page=' + page + '&page_size=' + page_size, {});
		}

		/**
		 * Get the code snippets of an origin of the user in the region.
		 * ### What
		 * Obtain the code snippets of the origin of the user passed as argument in the selected region. The purpose of this function is to help the user to integrate the javascript library in their website with a preconfigured script that contains the origin token.
		 * ### Parameters
		 * In the querystring of the request, add the origin of the user to the `query` parameter with the following format:1. Protocol: Can be ``http`` or ``https``.
		 * 2. Domain: The domain of the origin.
		 * Then, the origin must be urlencoded. Example:
		 * ```
		 * https://example.com
		 * ```
		 * ```
		 * https%3A%2F%2Fexample.com
		 * ```
		 * The querystring must be like this:
		 * ```
		 * ?query=https%3A%2F%2Fexample.com
		 * ```
		 * ### Result
		 * The result is a JSON object with the following fields:
		 * - ``self``: the URI to the request to obtain the full details of an origin.
		 * - ``detection``: code snippet to integrate into the website described in the origin to detect malicious activity.
		 * ### Errors
		 * - a `404 Not Found` error if the origin token is not found.
		 * - a `400 Bad Request` error if the origin does not have the correct format.
		 * It will return the API Global errors described in the API description.
		 * Get v1/origin/scripts
		 * @param {string} query The origin site to query
		 * @return {OriginScriptsOutput} Successful Response
		 */
		Query_origin_scripts_v1_origin_scripts_get(query: string): Observable<OriginScriptsOutput> {
			return this.http.get<OriginScriptsOutput>(this.baseUri + 'v1/origin/scripts?query=' + (query == null ? '' : encodeURIComponent(query)), {});
		}

		/**
		 * Get the current cookie ID and IP address status of the origin of user in the region.
		 * ### What
		 * Obtain the current status of the origin for a given IP address and/or cookie ID. The values can be correlated, but they are not required to be. The status will also describe the following information:
		 * - `PASS`: The traffic should not be intercepted, but should be analyzed and a positive detection should trigger a change in the status.
		 * - `BLOCK`: The traffic must be intercepted and redirected to a blocking page. Only a timeout of the IP address or Cookie ID, a solved challenge or a manual status change can change the status.
		 * - `CHALLENGE`: The traffic must be intercepted and redirected to a page where the user must solve a challenge. If the challenge is succesfully solved the status will change to `PASS`. If the user fails to change the challenge a specific amount of times, the status can change to `BLOCK`.
		 * - `BYPASS`: The traffic should not be tapped even if it is suspected to be malicious, as long as the timeout has not expired. When the timeout is reached, it should revert to a previous state instead of going to `PASS`.
		 * - `IGNORE`: Whatever happens to the traffic of the user, it should not be tapped. Once the time expires, it should return to the state PASS.
		 * The origin is a combination of protocol and domain (Ex: https://example.com) and the origin token is a special key used in conjunction with javascript library used for abuse detection. This key is owned by the user and is used to identify the origin of the request.
		 * Hence, the protocol and domain of the origin must be the one where the javascript is loaded.
		 * ### Parameters
		 * In the querystring of the request, add the origin of the user to the `query` parameter with the following format:1. Protocol: Can be ``http`` or ``https``.
		 * 2. Domain: The domain of the origin.
		 * Then, the origin must be urlencoded. Example:
		 * ```
		 * https://example.com
		 * ```
		 * ```
		 * https%3A%2F%2Fexample.com
		 * ```
		 * The querystring must be like this:
		 * ```
		 * ?query=https%3A%2F%2Fexample.com
		 * ```
		 * The body should have at least one of the following fields:
		 * - `address`: The IP address of the user to query.
		 * - `cookie_id`: The ID of the tracking cookie of the user to query.
		 * ### Result
		 * The result is a JSON object with the following fields:
		 * - ``self``: the URI to the request to obtain the full details of the `cookie_id` and `address` status of an origin.
		 * - ``cookie_id``: a JSON object with the following fields:
		 * - ``cookie_id``: the ID of the tracking cookie for the origin.
		 * - ``status``: the URI to the status detail of the cookie ID.
		 * - ``log_id``: (Optional) the ID of the log that triggered the change in the status of the origin.
		 * - ``expiry``: (Optional) the date and time when the origin status will expire in UNIX timestamp in milliseconds.
		 * - ``created_at``: (Optional) the date and time when the origin status was created in UNIX timestamp in milliseconds.
		 * - ``updated_at``: (Optional) the date and time when the origin status was last updated in UNIX timestamp in milliseconds.
		 * - ``address``: a JSON object with the following fields:
		 * - ``address``: the address for the origin.
		 * - ``status``: the URI to the status detail of the cookie ID.
		 * - ``log_id``: (Optional) the ID of the log that triggered the change in the status of the origin.
		 * - ``expiry``: (Optional) the date and time when the origin status will expire in UNIX timestamp in milliseconds.
		 * - ``created_at``: (Optional) the date and time when the origin status was created in UNIX timestamp in milliseconds.
		 * - ``updated_at``: (Optional) the date and time when the origin status was last updated in UNIX timestamp in milliseconds.
		 * ### Errors
		 * - a `404 Not Found` error if the origin is not found.
		 * - a `400 Bad Request` error if the origin does not have the correct format.
		 * It will return the API Global errors described in the API description.
		 * Post v1/origin/status
		 * @param {string} query The origin site to query
		 * @return {OriginStatusOutput} Successful Response
		 */
		Query_origin_status_v1_origin_status_post(query: string, requestBody: Body_query_origin_status_v1_origin_status_post): Observable<OriginStatusOutput> {
			return this.http.post<OriginStatusOutput>(this.baseUri + 'v1/origin/status?query=' + (query == null ? '' : encodeURIComponent(query)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Update the status of a given origin event in the platform.
		 * ### What
		 * Update the status of a given origin event in the platform. The status can be one of the    following values:
		 * - `PASS`: The event is not considered as a threat.
		 * - `BLOCK`: The event is considered as a threat and the origin must be blocked.
		 * - `CHALLENGE`: The event is considered as a threat and the origin must be challenged.
		 * - `BYPASS`: The event is considered as a threat but the origin must be bypassed.
		 * - `IGNORE`: The event is considered as a threat but the origin must be ignored.
		 * To apply the change, it's necessary to send a request to the API with the `log_id` of the    origin status event and the scope of the change. The scope can be one of the following values:
		 * - `address_and_cookie`: The change will be applied to the origin IP address and the cookie.
		 * - `address`: The change will be applied to the origin IP address.
		 * - `cookie`: The change will be applied to the cookie.
		 * ### Parameters
		 * The request must send the following parameters in the body of the request:
		 * - ``log_id``: the log id of the origin status event.
		 * - ``scope``: the scope of the change. Possible values are: ``address_and_cookie``, ``address``, ``cookie``.
		 * - ``status``: the new status of the origin. Possible values are: ``pass``, ``block``, ``challenge``, ``bypass``, ``ignore``.
		 * And in the `query` query string parameter, add the origin website in the format `https://example.com`.
		 * ### Result
		 * A 200 OK response without any content.
		 * ### Errors
		 * It will return the API Global errors described in the API description.
		 * If the parameters are invalid, it will return a `400 Bad Request` error.
		 * Put v1/origin/status
		 * @param {string} query The origin site to query
		 * @return {any} Successful Response
		 */
		Update_origin_status_v1_origin_status_put(query: string, requestBody: Body_update_origin_status_v1_origin_status_put): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'v1/origin/status?query=' + (query == null ? '' : encodeURIComponent(query)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get detail of a status available in the platform.
		 * ### What
		 * Obtain the description of a status available in the platform.
		 * ### Parameters
		 * A `status_id` parameter in the path of the request:
		 * - `PASS`
		 * - `BLOCK`
		 * - `CHALLENGE`
		 * - `BYPASS`
		 * - `IGNORE`
		 * ### Result
		 * The result is a JSON object with the following fields:
		 * - ``self``: the URI to the status detail.
		 * - ``description``: a human readable description of the status.
		 * - ``cardinality``: The number describing the cardinality of the status.
		 * ### Errors
		 * - a `400 Bad Request` error if the origin status is not any of the available ones.
		 * It will return the API Global errors described in the API description.
		 * Get v1/origin/status/detail/{status_id}
		 * @param {Body_update_origin_status_v1_origin_status_putStatus} status_id The status id to query the details
		 * @return {OriginStatusDetailsOutput} Successful Response
		 */
		Query_origin_status_detail_v1_origin_status_detail__status_id__get(status_id: Body_update_origin_status_v1_origin_status_putStatus): Observable<OriginStatusDetailsOutput> {
			return this.http.get<OriginStatusDetailsOutput>(this.baseUri + 'v1/origin/status/detail/' + status_id, {});
		}

		/**
		 * Get the list of different status available in the platform.
		 * ### What
		 * Obtain the full list and description of the different status available in the platform.
		 * ### Parameters
		 * No parameters needed.
		 * ### Result
		 * The result is a JSON list with the following fields:
		 * - ``self``: the URI to the request to obtain the list.
		 * - ``list``: a JSON list with the following elements each one with the following fields:
		 * - ``self``: the URI to the status detail.
		 * - ``description``: a human readable description of the status.
		 * - ``cardinality``: The number describing the cardinality of the status.
		 * ### Errors
		 * It will return the API Global errors described in the API description.
		 * Get v1/origin/status/details
		 * @return {OriginStatusDetailsCollectionOutput} Successful Response
		 */
		Query_origin_status_details_v1_origin_status_details_get(): Observable<OriginStatusDetailsCollectionOutput> {
			return this.http.get<OriginStatusDetailsCollectionOutput>(this.baseUri + 'v1/origin/status/details', {});
		}

		/**
		 * Get the traffic analysis of the origin.
		 * ### What
		 * Obtain the traffic analysis of the origin in the specified time range and interval. Theanalysis will return the number of requests and the anomalies detected like:
		 * - number of requests
		 * - overall score
		 * - malicious synthetic traffic (bad bot traffic)
		 * - IP in a denylist
		 * - IP in a datacenter
		 * - user uses a headless webdriver
		 * - Autonomous System (ASN) of the IP is risky
		 * - The location of the IP address and the ASN is different
		 * The origin is a combination of protocol and domain (Ex: https://example.com) and the origin token is a special key used in conjunction with javascript library used for abuse detection. This key is owned by the user and is used to identify the origin of the request.
		 * Hence, the protocol and domain of the origin must be the one where the javascript is loaded.
		 * ### Parameters
		 * In the querystring of the request, add the origin of the user to the `query` parameter with the following format:1. Protocol: Can be ``http`` or ``https``.
		 * 2. Domain: The domain of the origin.
		 * Then, the origin must be urlencoded. Example:
		 * ```
		 * https://example.com
		 * ```
		 * ```
		 * https%3A%2F%2Fexample.com
		 * ```
		 * The querystring must be like this:
		 * ```
		 * ?query=https%3A%2F%2Fexample.com
		 * ```
		 * To restrict the analysis to a specific time range, add the following parameters to the querystring:
		 * - ``from_timestamp``: the start date and time of the analysis in UNIX timestamp in milliseconds.
		 * - ``to_timestamp``: (Optional) the end date and time of the analysis in UNIX timestamp in milliseconds.
		 * - ``interval``: (Optional) the interval of the analysis in minutes. The default value is 60 minutes (HOURLY). Possible values are: ``HOURLY``.
		 * ### Result
		 * The result is a JSON object with the following fields:
		 * - ``self``: the URI to the request to obtain the traffic analysis for the origin.
		 * - ``from_timestamp``: the start date and time of the analysis in UNIX timestamp in milliseconds.
		 * - ``to_timestamp``: the end date and time of the analysis in UNIX timestamp in milliseconds.
		 * - ``interval``: the interval of the analysis. Possible values are: ``HOURLY``.
		 * - ``data``: a JSON list with the following elements each one with the following fields:
		 * - ``timestamp``: the date and time of the analysis in UNIX timestamp in milliseconds.
		 * - ``total``: the total number of requests.
		 * - ``score_high``: the number of requests with a high score (bad traffic).
		 * - ``bots``: the number of requests from bad bots.
		 * - ``denylists``: the number of requests from IPs in a denylist.
		 * - ``datacenters``: the number of requests from IPs in a datacenter.
		 * - ``webdrivers``: the number of requests from IPs using a headless webdriver.
		 * - ``asn_risky``: the number of requests from IPs with a risky ASN.
		 * - ``network_country_mismatches``: the number of requests from IPs with a different location than the ASN.
		 * ### Errors
		 * - a `404 Not Found` error if the origin token is not found.
		 * - a `400 Bad Request` error if the origin does not have the correct format.
		 * It will return the API Global errors described in the API description.
		 * Get v1/origin/traffic/analysis
		 * @param {string} query The origin site to query
		 * @param {Query_origin_traffic_client_v1_origin_client_analysis_getInterval} interval The data inteval to aggregate the result dataset
		 * @param {number} from_timestamp A UNIX timestamp in milliseconds to restrict the results of the query to entries logged after or equal to this value.
		 * @param {number} to_timestamp A UNIX timestamp in milliseconds to restrict the results of the query to entries logged before this value.
		 * @return {OriginTrafficAnalysisCollectionOutput} Successful Response
		 */
		Query_origin_traffic_analysis_v1_origin_traffic_analysis_get(query: string, interval: Query_origin_traffic_client_v1_origin_client_analysis_getInterval, from_timestamp: number, to_timestamp: number | null | undefined): Observable<OriginTrafficAnalysisCollectionOutput> {
			return this.http.get<OriginTrafficAnalysisCollectionOutput>(this.baseUri + 'v1/origin/traffic/analysis?query=' + (query == null ? '' : encodeURIComponent(query)) + '&interval=' + interval + '&from_timestamp=' + from_timestamp + '&to_timestamp=' + to_timestamp, {});
		}

		/**
		 * Delete an origin token of the user in the region.
		 * ### What
		 * Deletes the origin token passed as argument of the user in the selected region. Once the token is deleted, it will no longer be valid and the protocol and domain of the origin will no longer be under protection.
		 * To delete an origin token, the user must be the owner and the token must be ``DISABLED`` first.
		 * ### Parameters
		 * The Origin Token is required in the body of the request in the parameter `origin_token_id`.
		 * ### Result
		 * If successful, the result will be an empty response with a status code of `204 No Content`.
		 * ### Errors
		 * It will return the API Global errors described in the API description.
		 * It will also return the following errors:
		 * - a `404 Not Found` error if the origin token is not found.
		 * - a `409 Conflict` error if the origin token is not disabled.
		 * Delete v1/origin_token
		 * @return {any} Successful Response
		 */
		Delete_token_v1_origin_token_delete(): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/origin_token', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get the information of an origin token of the user in the region.
		 * ### What
		 * Obtain the attributes of the given origin token of the user in the selected region. The purpose of this function is to show what protocol and domain is linked to the token.
		 * The origin token is a special key used in conjunction with javascript library used for abuse detection. This key is owned by the user and is used to identify the origin of the request.
		 * Hence, the protocol and domain of the origin must be the one where the javascript is loaded.
		 * ### Parameters
		 * The Origin Token is required in the body of the request in the parameter `origin_token_id`.
		 * ### Result
		 * The result is a JSON object with the following fields:
		 * - ``self``: the URI to individual origin token information.
		 * - ``region_id``: the name of the region where the origin token is valid.
		 * - ``origin``: the protocol and the domain where the origin token is valid.
		 * - ``status``: the status of the origin token. The only allowed values are ``ENABLED`` and ``DISABLED``.
		 * - ``created_at``: the date and time when the origin token was created in UNIX timestamp in milliseconds.
		 * - ``updated_at``: the date and time when the origin token was last updated in UNIX timestamp in milliseconds.
		 * ### Errors
		 * It will return the API Global errors described in the API description.
		 * Post v1/origin_token
		 * @return {OriginTokenOutput} Successful Response
		 */
		Query_origin_token_info_v1_origin_token_post(requestBody: Body_query_origin_token_info_v1_origin_token_post): Observable<OriginTokenOutput> {
			return this.http.post<OriginTokenOutput>(this.baseUri + 'v1/origin_token', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get the information of the origin tokens of the user in the region.
		 * ### What
		 * Obtain the attributes of all the origin tokens of the user in the selected region. The purpose of this function is to show what protocol and domain is linked to all the tokens.
		 * The origin token is a special key used in conjunction with javascript library used for abuse detection. This key is owned by the user and is used to identify the origin of the request.
		 * Hence, the protocol and domain of the origin must be the one where the javascript is loaded.
		 * ### Parameters
		 * No parameters are required.
		 * ### Result
		 * The result is a list of JSON objects with the following fields:
		 * - ``self``: the URI to individual origin token information.
		 * - ``region_id``: the name of the region where the origin token is valid.
		 * - ``origin``: the protocol and the domain where the origin token is valid.
		 * - ``status``: the status of the origin token. The only allowed values are ``ENABLED`` and ``DISABLED``.
		 * - ``created_at``: the date and time when the origin token was created in UNIX timestamp in milliseconds.
		 * - ``updated_at``: the date and time when the origin token was last updated in UNIX timestamp in milliseconds.
		 * ### Errors
		 * It will return the API Global errors described in the API description.
		 * Get v1/origin_token/all
		 * @return {OriginTokenCollectionOutput} Successful Response
		 */
		Query_all_origin_tokens_in_the_region_v1_origin_token_all_get(): Observable<OriginTokenCollectionOutput> {
			return this.http.get<OriginTokenCollectionOutput>(this.baseUri + 'v1/origin_token/all', {});
		}

		/**
		 * Disable a enabled origin token of the user in the region.
		 * ### What
		 * Disable an enabled origin token passed as argument of the user in the selected region. When a token is enabled, it will participate in the protection of the origin protocol and domain. If the token is disabled, it will not participate in the protection of the origin protocol and domain.
		 * To disable an origin token, the user must be the owner. If the token is already disabled, the function will not perform any action. If the token is enabled, it will be disabled.
		 * ### Parameters
		 * The Origin Token is required in the body of the request in the parameter `origin_token_id`.
		 * ### Result
		 * If successful, the result will be an empty response with a status code of `204 No Content`.
		 * ### Errors
		 * It will return the API Global errors described in the API description.
		 * It will also return the following errors:
		 * - a `404 Not Found` error if the origin token is not found.
		 * Put v1/origin_token/disable
		 * @return {any} Successful Response
		 */
		Disable_origin_token_v1_origin_token_disable_put(requestBody: Body_disable_origin_token_v1_origin_token_disable_put): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'v1/origin_token/disable', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Enable a disabled origin token of the user in the region.
		 * ### What
		 * Enable a disabled origin token passed as argument of the user in the selected region. When a token is enabled, it will participate in the protection of the origin protocol and domain. If the token is disabled, it will not participate in the protection of the origin protocol and domain.
		 * To enable an origin token, the user must be the owner. If the token is already enabled, the function will not perform any action. If the token is disabled, it will be enabled.
		 * ### Parameters
		 * The Origin Token is required in the body of the request in the parameter `origin_token_id`.
		 * ### Result
		 * If successful, the result will be an empty response with a status code of `204 No Content`.
		 * ### Errors
		 * It will return the API Global errors described in the API description.
		 * It will also return the following errors:
		 * - a `404 Not Found` error if the origin token is not found.
		 * Put v1/origin_token/enable
		 * @return {any} Successful Response
		 */
		Enable_origin_token_v1_origin_token_enable_put(requestBody: Body_enable_origin_token_v1_origin_token_enable_put): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'v1/origin_token/enable', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Create an origin token of the user in the region.
		 * ### What
		 * Creates a new origin token for the user passing as argument the origin. The origin parameter is the protocol and the domain where the origin token is valid.
		 * The origin token is a special key used in conjunction with javascript library used for abuse detection. This key is owned by the user and is used to identify the origin of the request.
		 * Hence, the protocol and domain of the origin must be the one where the javascript is loaded.
		 * ### Parameters
		 * The origin with the protocol and domain is required in the body of the request in the parameter ``origin``. The allowed protocols are ``https://``, and ``http://``.
		 * ### Result
		 * The result is a JSON object with the new origin token and the following fields:
		 * - ``self``: the URI to individual origin token information.
		 * - ``region_id``: the name of the region where the origin token is valid.
		 * - ``origin``: the protocol and the domain where the origin token is valid.
		 * - ``status``: the status of the origin token. The only allowed values are ``ENABLED`` and ``DISABLED``.
		 * - ``created_at``: the date and time when the origin token was created in UNIX timestamp in milliseconds.
		 * - ``updated_at``: the date and time when the origin token was last updated in UNIX timestamp in milliseconds.
		 * ### Errors
		 * It will return the API Global errors described in the API description.
		 * It will also return the following errors:
		 * - a `400 Bad Request` error if the origin does not have the correct format.
		 * - a `409 Conflict` error if the origin token already exists.
		 * Post v1/origin_token/new
		 * @return {OriginTokenOutput} Successful Response
		 */
		Create_a_new_origin_token_v1_origin_token_new_post(requestBody: OriginTokenInput): Observable<OriginTokenOutput> {
			return this.http.post<OriginTokenOutput>(this.baseUri + 'v1/origin_token/new', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get the full information of all the source lists for the subscription level given.
		 * ### What
		 * Obtain the full meta information of all the source lists available for the subscription level of the user. A source list is a collection of resources combined together with other sources to create a dataset.
		 * A source list has some unique properties. The most relevant ones are the score and risk. The score is a number **between 0 and 99** describing the probability of the IP address being a malicious one, being **0** means that the IP address is not malicious and is not a threat. Being **99** means that the service behind the IP address is probably malicious an certainly a threat.
		 * Each source list groups several collections of resource by the lapse of time or time range that they are related to according to their age. Each group by time range has a score and a risk.
		 * ### Parameters
		 * The endpoint does not accept any parameter. The subscription level is obtained from the token provided in the header.
		 * ### Result
		 * The result is a JSON object with a self reference and a list of JSON objects with the following fields:
		 * - ``self``: the URI to individual source list information.
		 * - ``dataset``: the URI to the dataset that aggregates the resources of this list.
		 * - ``name``: the unique name of the source list. Must be uppercase letters, numbers and underscores.
		 * - ``description``: a human readable long description of the source list.
		 * - ``source``: Origin of the list.
		 * - ``url``: The URL where the source list was found.
		 * - ``refresh``: The refresh period of the source list.
		 * - ``minimum_score``: The minimum score found in the different source list time ranges. Is in the range 0-99.
		 * - ``maximum_score``: The maximum score found in the different source list time ranges. Is in the range 0-99.
		 * - ``minimum_risk``: The minimum human readable risk score found in the different source list time ranges. Can be UNKNOWN, LOW, MEDIUM or HIGH.
		 * - ``maximum_risk``: The maximum human readable risk score found in the different source list time ranges. Can be UNKNOWN, LOW, MEDIUM or HIGH.
		 * - ``time_range``: the list of URIs pointing to the different source list time ranges information.
		 * - ``updated_at``: The UNIX timestamp in milliseconds of last update of the source list.
		 * - ``subscriptions``: The list of subscription levels that can access this source list.
		 * ### Errors
		 * It will return the API Global errors described in the API description.
		 * Get v1/source/ip
		 * @return {SourceCollectionOutput} The server will return a valid answer in the following cases:
		 */
		Get_all_sources_v1_source_ip_get(): Observable<SourceCollectionOutput> {
			return this.http.get<SourceCollectionOutput>(this.baseUri + 'v1/source/ip', {});
		}

		/**
		 * Get the full information of the source list given as argument.
		 * ### What
		 * Obtain the full meta information of the source list given as argument. A source list is a collection of resources combined together with other sources to create a dataset. A source list has some unique properties. The most relevant ones are the score and risk. The score is a number **between 0 and 99** describing the probability of the IP address being a malicious one, being **0** means that the IP address is not malicious and is not a threat. Being **99** means that the service behind the IP address is probably malicious an certainly a threat.
		 * Each source list groups several collections of resource by the lapse of time or time range that they are related to according to their age. Each group by time range has a score and a risk.
		 * ### Parameters
		 * The endpoint accepts only the following parameter in the path:
		 * - ``source``: (Mandatory) The code name that identifies uniquely the source list in the platform. It must be composed of uppercase letters, numbers and underscores.
		 * ### Result
		 * The result is a JSON object with the following fields:
		 * - ``self``: the URI to individual source list information.
		 * - ``dataset``: the URI to the dataset that aggregates the resources of this list.
		 * - ``name``: the unique name of the source list. Must be uppercase letters, numbers and underscores.
		 * - ``description``: a human readable long description of the source list.
		 * - ``source``: Origin of the list.
		 * - ``url``: The URL where the source list was found.
		 * - ``refresh``: The refresh period of the source list.
		 * - ``minimum_score``: The minimum score found in the different source list time ranges. Is in the range 0-99.
		 * - ``maximum_score``: The maximum score found in the different source list time ranges. Is in the range 0-99.
		 * - ``minimum_risk``: The minimum human readable risk score found in the different source list time ranges. Can be UNKNOWN, LOW, MEDIUM or HIGH.
		 * - ``maximum_risk``: The maximum human readable risk score found in the different source list time ranges. Can be UNKNOWN, LOW, MEDIUM or HIGH.
		 * - ``time_range``: the list of URIs pointing to the different source list time ranges information.
		 * - ``updated_at``: The UNIX timestamp in milliseconds of last update of the source list.
		 * - ``subscriptions``: The list of subscription levels that can access this source list.
		 * ### Errors
		 * - a `404 Not Found` error if the source list code name was not found.
		 * - a `422 Unprocessable Entity` error if source list code name does not follow the naming convention.
		 * It will return the API Global errors described in the API description.
		 * Get v1/source/ip/{source}
		 * @return {V1__models__source__SourceOutput} The server will return a valid answer in the following cases:
		 */
		Get_source_info_v1_source_ip__source__get(source: string): Observable<V1__models__source__SourceOutput> {
			return this.http.get<V1__models__source__SourceOutput>(this.baseUri + 'v1/source/ip/' + (source == null ? '' : encodeURIComponent(source)), {});
		}

		/**
		 * Get the information of the source list given for a specific time range.
		 * ### What
		 * Obtain the meta information of the source list and the time range given as arguments. A source list is a collection of resources combined together with other sources to create a dataset. A source list has some unique properties. The most relevant ones are the score and risk. The score is a number **between 0 and 99** describing the probability of the IP address being a malicious one, being **0** means that the IP address is not malicious and is not a threat. Being **99** means that the service behind the IP address is probably malicious an certainly a threat.
		 * The time ranges or lapse of time of each source are how the resources are stored according to their age. Each group by time range has a score and a risk.
		 * ### Parameters
		 * The endpoint accepts the following two parameters in the path:
		 * - ``source``: (Mandatory) The code name that identifies uniquely the source list in the platform. It must be composed of uppercase letters, numbers and underscores.
		 * - ``time_range``: (Mandatory) The code name that identifies uniquely the time ranges. Must be: 1H, 6H, 12H, 1D, 7D, 30D, 90D, 180D y 365D.
		 * ### Result
		 * The result is a JSON object with the following fields:
		 * - ``self``: the URI to individual source list and time range information.
		 * - ``source``: the URI to individual source list information.
		 * - ``items``: Number of elements in the source list in the time range given.
		 * - ``lapse``: The lapse of time or time range of the specific source list. Can be 1H, 6H, 12H, 1D, 7D, 30D, 90D, 180D or 365D.
		 * - ``score``: The score found in the source list time range. Is in the range 0-99.
		 * - ``risk``: The human readable risk score found in the source list time range. Can be UNKNOWN, LOW, MEDIUM or HIGH.
		 * - ``updated_at``: The UNIX timestamp in milliseconds of last update of the source list.
		 * ### Errors
		 * - a `404 Not Found` error if the source list code name was not found.
		 * - a `404 Not Found` error if the time range was not found.
		 * - a `422 Unprocessable Entity` error if source list code name or time ranges does not follow the naming convention.
		 * It will return the API Global errors described in the API description.
		 * Get v1/source/ip/{source}/range/{time_range}
		 * @return {SourceTimeRangeOutput} The server will return a valid answer in the following cases:
		 */
		Get_source_and_timerange_info_v1_source_ip__source__range__time_range__get(source: string, time_range: IPLogOutputLapse): Observable<SourceTimeRangeOutput> {
			return this.http.get<SourceTimeRangeOutput>(this.baseUri + 'v1/source/ip/' + (source == null ? '' : encodeURIComponent(source)) + '/range/' + time_range, {});
		}

		/**
		 * Get the information of the user's token in the region.
		 * ### What
		 * Obtain the list of all the token attributes of the current user in the selected region. The purpose of this function is to show the current values of the user's quota.
		 * ### Parameters
		 * No parameters are required. The token is obtained automatically from the `Bearer` in the header.
		 * ### Result
		 * The result is a JSON object with the following fields:
		 * - ``self``: the URI to individual token information.
		 * - ``region_id``: the name of the region where the token is valid.
		 * - ``last_month_bucket_init_value``: the initial value of the monthly bucket.
		 * - ``last_month_bucket_value``: the current value of consumed quota in the monthly bucket.
		 * - ``last_month_bucket_refresh``: Unix timestamp in milliseconds of the next monthly bucket reset.
		 * - ``last_minute_bucket_init_value``: the initial value of the per minute bucket.
		 * - ``last_minute_bucket_value``: the current value of consumed quota in the per minute bucket.
		 * - ``last_minute_bucket_refresh``: Unix timestamp in milliseconds of the next per minute bucket reset.
		 * - ``last_minute_bucket_refill_ratio``: the number of tokens to add every second to the per minute bucket.
		 * - ``status``: the status of the token. The only allowed value is ``ENABLED``.
		 * - ``created_at``: the date and time when the token was created in UNIX timestamp in milliseconds.
		 * - ``updated_at``: the date and time when the token was last updated in UNIX timestamp in milliseconds.
		 * ### Errors
		 * It will return the API Global errors described in the API description.
		 * Get v1/token
		 * @return {TokenOutput} Successful Response
		 */
		Query_token_info_v1_token_get(): Observable<TokenOutput> {
			return this.http.get<TokenOutput>(this.baseUri + 'v1/token', {});
		}

		/**
		 * Get the activity information of the token in the region.
		 * ### What
		 * Obtain the list of all the activity events of the current user in the selected region. The purpose of this function is to show what actions performed a user with the specific token.
		 * ### Parameters
		 * The following pagination parameters are required as query string parameters:
		 * - ``page``: (Optional) the page number to retrieve. The first page is 1. Default is 1.
		 * - ``page_size``: (Optional) the number of items per page. Default is 20.
		 * The token is obtained automatically from the `Bearer` in the header.
		 * ### Result
		 * The result is a JSON object with the following fields:
		 * - ``self``: the URI to all activities of the token.
		 * - ``activities``: a list of activities performed by the user with the token.
		 * - ``self``: the URI to individual activity information.
		 * - ``event``: ID of the reference of the event type.
		 * - ``description``: Human readable description of the event.
		 * - ``data``: the payload of the event. It can be empty.
		 * - ``source``: A JSON object with the following fields:
		 * - ``address``: the IP address of the client.
		 * - ``ua_string``: the user agent string of the client.
		 * - ``status_code``: the HTTP status code of the response.
		 * - ``uri``: the URI of the request.
		 * - ``body``: the body of the request.
		 * - ``method``: the HTTP method of the request.
		 * - ``created_at``: the date and time when the token was created in UNIX timestamp in milliseconds.
		 * ### Errors
		 * It will return the API Global errors described in the API description.
		 * Get v1/token/activity
		 * @param {number} page The page to be returned
		 * @param {number} page_size The number of items per page
		 * @return {ActivityCollectionOutput} Successful Response
		 */
		Query_token_activity_v1_token_activity_get(page: number | null | undefined, page_size: number | null | undefined): Observable<ActivityCollectionOutput> {
			return this.http.get<ActivityCollectionOutput>(this.baseUri + 'v1/token/activity?page=' + page + '&page_size=' + page_size, {});
		}

		/**
		 * Get the information found in a set of User Agents.
		 * ### What
		 * Get the information found in the list of User Agents passed as argument. This information includes:
		 * - Type
		 * - Render Engine
		 * - Version
		 * - Vendor
		 * - Operating System
		 * - Device
		 * - How common is the agent worldwide
		 * ### Parameters
		 * A list of User Agents are required in the body of the request.
		 * ### Result
		 * The result contains a list of the result for each User Agent, with the following data set:
		 * The result is a JSON object with the following structure:
		 * - ``self``: the URI of the API call
		 * - ``string``:  The full user agent string passed as argument.
		 * - ``classification``: The classification of the user agent. It can be one of the following: ``CRAWLER``, ``CLIENT``, ``UNKNOWN``.
		 * - ``type``: An URI to the type of user agent used to identify the client (browser, bot, crawler, etc.).
		 * - ``agent``: Name of the agent and the version, if any.
		 * - ``engine``: Agent render engine.
		 * - ``version``: Version of the agent.
		 * - ``latest``: Latests known version of the agent.
		 * - ``family``: URI to the family of the agent.
		 * - ``vendor``: URI to the vendor or company that produces the agent.
		 * - ``os``: URI to the operating system used by the agent.
		 * - ``device``: URI to the device used by the agent.
		 * - ``frequent``: If the agent is frequently used worlwide or not. The values are ``COMMON``, ``RARE``, and ``UNKNOWN``.
		 * ### Errors
		 * The endpoint will return the API Global errors described in the API description.
		 * Post v1/ua
		 * @return {UACollectionOutput} The server will return a valid answer in the following cases:
		 */
		Parse_user_agents_v1_ua_post(requestBody: Array<string>): Observable<UACollectionOutput> {
			return this.http.post<UACollectionOutput>(this.baseUri + 'v1/ua', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get the information of the device of a user agent.
		 * ### What
		 * Obtain the details of a device of a User Agent.
		 * ### Parameters
		 * The endpoint accepts only the following parameter in the path:
		 * - ``code``: (Mandatory) The code that identifies uniquely the device origin of a User Agent. The value must be an alphanumeric upper case string.
		 * ### Result
		 * The result is a JSON object with the following structure:
		 * - ``self``: the URI to the device.
		 * - ``description``: the human readable description of the device.
		 * - ``code``: the internal code of the device in the system.
		 * ### Errors
		 * - a `422 Unprocessable Entity` error if the code is not one of the available.
		 * It will also return the API Global errors described in the API description.
		 * Get v1/ua/device/{code}
		 * @return {DeviceOutput} Successful Response
		 */
		Query_device_by_code_v1_ua_device__code__get(code: string): Observable<DeviceOutput> {
			return this.http.get<DeviceOutput>(this.baseUri + 'v1/ua/device/' + (code == null ? '' : encodeURIComponent(code)), {});
		}

		/**
		 * Get the information of the family of a user agent.
		 * ### What
		 * Obtain the details of a family of a User Agent.
		 * ### Parameters
		 * The endpoint accepts only the following parameter in the path:
		 * - ``code``: (Mandatory) The code that identifies uniquely the family of a User Agent. The value must be an alphanumeric upper case string.
		 * ### Result
		 * The result is a JSON object with the following structure:
		 * - ``self``: the URI to the family.
		 * - ``description``: the human readable description of the famly.
		 * - ``code``: the internal code of the family in the system.
		 * ### Errors
		 * - a `422 Unprocessable Entity` error if the code is not one of the available.
		 * It will also return the API Global errors described in the API description.
		 * Get v1/ua/family/{code}
		 * @return {FamilyOutput} Successful Response
		 */
		Query_family_by_code_v1_ua_family__code__get(code: string): Observable<FamilyOutput> {
			return this.http.get<FamilyOutput>(this.baseUri + 'v1/ua/family/' + (code == null ? '' : encodeURIComponent(code)), {});
		}

		/**
		 * Get the information of the Operating System of a user agent.
		 * ### What
		 * Obtain the details of the Operating System of a User Agent.
		 * ### Parameters
		 * The endpoint accepts only the following parameter in the path:
		 * - ``code``: (Mandatory) The code that identifies uniquely the Operating System at the origin of a User Agent. The value must be an alphanumeric upper case string.
		 * ### Result
		 * The result is a JSON object with the following structure:
		 * - ``self``: the URI to the OS.
		 * - ``description``: the human readable description of the OS.
		 * - ``code``: the internal code of the OS in the system.
		 * - ``family``: the family of the OS.
		 * - ``vendor``: the vendor or manufacturer of the OS.
		 * ### Errors
		 * - a `422 Unprocessable Entity` error if the code is not one of the available.
		 * It will also return the API Global errors described in the API description.
		 * Get v1/ua/os/{code}
		 * @return {OSOutput} Successful Response
		 */
		Query_os_by_code_v1_ua_os__code__get(code: string): Observable<OSOutput> {
			return this.http.get<OSOutput>(this.baseUri + 'v1/ua/os/' + (code == null ? '' : encodeURIComponent(code)), {});
		}

		/**
		 * Get the information of the type of a user agent.
		 * ### What
		 * Obtain the details of a type of a User Agent.
		 * ### Parameters
		 * The endpoint accepts only the following parameter in the path:
		 * - ``code``: (Mandatory) The code that identifies uniquely the type of a User Agent. The value must be an alphanumeric upper case string.
		 * ### Result
		 * The result is a JSON object with the following structure:
		 * - ``self``: the URI to the type.
		 * - ``description``: the human readable description of the type.
		 * - ``code``: the internal code of the type in the system.
		 * - ``type``: the type of the User Agent. Can be ``INTERACTIVE``, ``CRAWLER`` or ``UNKNOWN`` if the type is not known.
		 * ### Errors
		 * - a `422 Unprocessable Entity` error if the code is not one of the available.
		 * It will also return the API Global errors described in the API description.
		 * Get v1/ua/type/{code}
		 * @return {TypeOutput} Successful Response
		 */
		Query_type_by_code_v1_ua_type__code__get(code: string): Observable<TypeOutput> {
			return this.http.get<TypeOutput>(this.baseUri + 'v1/ua/type/' + (code == null ? '' : encodeURIComponent(code)), {});
		}

		/**
		 * Get the information of the vendor of a user agent.
		 * ### What
		 * Obtain the details of a vendor of a User Agent.
		 * ### Parameters
		 * The endpoint accepts only the following parameter in the path:
		 * - ``code``: (Mandatory) The code that identifies uniquely the vendor or manufacurer of a User Agent. The value must be an alphanumeric upper case string.
		 * ### Result
		 * The result is a JSON object with the following structure:
		 * - ``self``: the URI to the vendor.
		 * - ``description``: the human readable description of the vendor.
		 * - ``code``: the internal code of the vendor in the system.
		 * ### Errors
		 * - a `422 Unprocessable Entity` error if the code is not one of the available.
		 * It will also return the API Global errors described in the API description.
		 * Get v1/ua/vendor/{code}
		 * @return {VendorOutput} Successful Response
		 */
		Query_vendor_by_code_v1_ua_vendor__code__get(code: string): Observable<VendorOutput> {
			return this.http.get<VendorOutput>(this.baseUri + 'v1/ua/vendor/' + (code == null ? '' : encodeURIComponent(code)), {});
		}

		/**
		 * Get the information found in an User Agent.
		 * ### What
		 * Get the information found in the User Agent passed as argument. This information includes:
		 * - Type
		 * - Render Engine
		 * - Version
		 * - Vendor
		 * - Operating System
		 * - Device
		 * - How common is the agent worldwide
		 * ### Parameters
		 * The only argument accepted in the query string is an URL encoded User Agent string.
		 * ### Result
		 * The result contains the following set of data:
		 * The result is a JSON object with the following structure:
		 * - ``self``: the URI of the API call
		 * - ``string``:  The full user agent string passed as argument.
		 * - ``classification``: The classification of the user agent. It can be one of the following: ``CRAWLER``, ``CLIENT``, ``UNKNOWN``.
		 * - ``type``: An URI to the type of user agent used to identify the client (browser, bot, crawler, etc.).
		 * - ``agent``: Name of the agent and the version, if any.
		 * - ``engine``: Agent render engine.
		 * - ``version``: Version of the agent.
		 * - ``latest``: Latests known version of the agent.
		 * - ``family``: URI to the family of the agent.
		 * - ``vendor``: URI to the vendor or company that produces the agent.
		 * - ``os``: URI to the operating system used by the agent.
		 * - ``device``: URI to the device used by the agent.
		 * - ``frequent``: If the agent is frequently used worlwide or not. The values are ``COMMON``, ``RARE``, and ``UNKNOWN``.
		 * ### Errors
		 * The endpoint will return the API Global errors described in the API description.
		 * Get v1/ua/{user_agent_urlencoded}
		 * @return {UAOutput} The server will return a valid answer in the following cases:
		 */
		Parse_user_agent_v1_ua__user_agent_urlencoded__get(user_agent_urlencoded: string): Observable<UAOutput> {
			return this.http.get<UAOutput>(this.baseUri + 'v1/ua/' + (user_agent_urlencoded == null ? '' : encodeURIComponent(user_agent_urlencoded)), {});
		}
	}

	export enum Get_all_private_allowlists_by_resource_type_v1_allowlist_private_all__resource_type__getResource_type { cidr = 0, country = 1, continent = 2, as = 3, datacenter = 4, useragent = 5 }

	export enum Query_registry_by_the_name_v1_asn_registry__code__getCode { iana = 0, arin = 1, ripencc = 2, afrinic = 3, apnic = 4, lacnic = 5 }

	export enum Query_status_by_the_name_v1_asn_status__code__getCode { assigned = 0, reserved = 1, available = 2, allocated = 3 }

	export enum Query_all_the_ip_addresses_reported_by_the_user_v1_denylist_reported_ip_getOutput_format { JSON = 0, CSV = 1, 'AWS-WAF' = 2 }

	export enum Query_origin_traffic_client_v1_origin_client_analysis_getInterval { HOURLY = 0 }

}

