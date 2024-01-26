import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface CertificateAction {

		/**
		 * Date action created
		 * Required
		 */
		createdAt: string;

		/** Required */
		type: CertificateActionType;
	}
	export interface CertificateActionFormProperties {

		/**
		 * Date action created
		 * Required
		 */
		createdAt: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<CertificateActionType | null | undefined>,
	}
	export function CreateCertificateActionFormGroup() {
		return new FormGroup<CertificateActionFormProperties>({
			createdAt: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<CertificateActionType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum CertificateActionType { CERTIFICATE_ISSUED = 0, CERTIFICATE_ORDER_CANCELED = 1, CERTIFICATE_ORDER_CREATED = 2, CERTIFICATE_REVOKED = 3, DOMAIN_VALIDATION_COMPLETE = 4, FRAUD_DETECTED = 5, ORG_NAME_CHANGE = 6, ORG_VALIDATION_COMPLETE = 7, SAN_DROP = 8 }

	export interface Certificate {

		/**
		 * The unique identifier of the certificate request. Only present if no errors returned
		 * Required
		 */
		certificateId: string;

		/** Common name of certificate */
		commonName?: string | null;

		/** Required */
		contact: CertificateContact;

		/**
		 * The date the certificate was ordered.
		 * Required
		 */
		createdAt: string;

		/** Only present if certificate order has been denied */
		deniedReason?: string | null;
		organization?: CertificateOrganization;

		/**
		 * Validity period of order. Specified in years
		 * Required
		 */
		period: number;

		/**
		 * Certificate product type
		 * Required
		 */
		productType: CertificateProductType;

		/** Percentage of completion for certificate vetting */
		progress?: number | null;

		/** The revocation date of certificate (if revoked). */
		revokedAt?: string | null;

		/** Root Type */
		rootType?: CertificateRootType | null;

		/** Serial number of certificate (if issued or revoked) */
		serialNumber?: string | null;

		/** Hexadecmial format for Serial number of certificate(if issued or revoked) */
		serialNumberHex?: string | null;

		/** Number of subject alternative names(SAN) to be included in certificate */
		slotSize?: CertificateSlotSize | null;

		/**
		 * Status of certificate
		 * Required
		 */
		status: CertificateStatus;

		/** Contains subject alternative names set */
		subjectAlternativeNames?: Array<SubjectAlternativeNameDetails>;

		/** The end date of the certificate's validity (if issued or revoked). */
		validEnd?: string | null;

		/** The start date of the certificate's validity (if issued or revoked). */
		validStart?: string | null;
	}
	export interface CertificateFormProperties {

		/**
		 * The unique identifier of the certificate request. Only present if no errors returned
		 * Required
		 */
		certificateId: FormControl<string | null | undefined>,

		/** Common name of certificate */
		commonName: FormControl<string | null | undefined>,

		/**
		 * The date the certificate was ordered.
		 * Required
		 */
		createdAt: FormControl<string | null | undefined>,

		/** Only present if certificate order has been denied */
		deniedReason: FormControl<string | null | undefined>,

		/**
		 * Validity period of order. Specified in years
		 * Required
		 */
		period: FormControl<number | null | undefined>,

		/**
		 * Certificate product type
		 * Required
		 */
		productType: FormControl<CertificateProductType | null | undefined>,

		/** Percentage of completion for certificate vetting */
		progress: FormControl<number | null | undefined>,

		/** The revocation date of certificate (if revoked). */
		revokedAt: FormControl<string | null | undefined>,

		/** Root Type */
		rootType: FormControl<CertificateRootType | null | undefined>,

		/** Serial number of certificate (if issued or revoked) */
		serialNumber: FormControl<string | null | undefined>,

		/** Hexadecmial format for Serial number of certificate(if issued or revoked) */
		serialNumberHex: FormControl<string | null | undefined>,

		/** Number of subject alternative names(SAN) to be included in certificate */
		slotSize: FormControl<CertificateSlotSize | null | undefined>,

		/**
		 * Status of certificate
		 * Required
		 */
		status: FormControl<CertificateStatus | null | undefined>,

		/** The end date of the certificate's validity (if issued or revoked). */
		validEnd: FormControl<string | null | undefined>,

		/** The start date of the certificate's validity (if issued or revoked). */
		validStart: FormControl<string | null | undefined>,
	}
	export function CreateCertificateFormGroup() {
		return new FormGroup<CertificateFormProperties>({
			certificateId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			commonName: new FormControl<string | null | undefined>(undefined),
			createdAt: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			deniedReason: new FormControl<string | null | undefined>(undefined),
			period: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			productType: new FormControl<CertificateProductType | null | undefined>(undefined, [Validators.required]),
			progress: new FormControl<number | null | undefined>(undefined),
			revokedAt: new FormControl<string | null | undefined>(undefined),
			rootType: new FormControl<CertificateRootType | null | undefined>(undefined),
			serialNumber: new FormControl<string | null | undefined>(undefined),
			serialNumberHex: new FormControl<string | null | undefined>(undefined),
			slotSize: new FormControl<CertificateSlotSize | null | undefined>(undefined),
			status: new FormControl<CertificateStatus | null | undefined>(undefined, [Validators.required]),
			validEnd: new FormControl<string | null | undefined>(undefined),
			validStart: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum CertificateProductType { DV_SSL = 0, DV_WILDCARD_SSL = 1, EV_SSL = 2, OV_CS = 3, OV_DS = 4, OV_SSL = 5, OV_WILDCARD_SSL = 6, UCC_DV_SSL = 7, UCC_EV_SSL = 8, UCC_OV_SSL = 9 }

	export enum CertificateRootType { GODADDY_SHA_1 = 0, GODADDY_SHA_2 = 1, STARFIELD_SHA_1 = 2, STARFIELD_SHA_2 = 3 }

	export enum CertificateSlotSize { FIVE = 0, TEN = 1, FIFTEEN = 2, TWENTY = 3, THIRTY = 4, FOURTY = 5, FIFTY = 6, ONE_HUNDRED = 7 }

	export enum CertificateStatus { PENDING_ISSUANCE = 0, ISSUED = 1, REVOKED = 2, CANCELED = 3, DENIED = 4, PENDING_REVOCATION = 5, PENDING_REKEY = 6, UNUSED = 7, EXPIRED = 8 }

	export interface SubjectAlternativeNameDetails {

		/**
		 * Total number of page results
		 * Required
		 */
		status: SubjectAlternativeNameDetailsStatus;

		/**
		 * Subject alternative name to be included in certificate
		 * Required
		 */
		subjectAlternativeName: string;
	}
	export interface SubjectAlternativeNameDetailsFormProperties {

		/**
		 * Total number of page results
		 * Required
		 */
		status: FormControl<SubjectAlternativeNameDetailsStatus | null | undefined>,

		/**
		 * Subject alternative name to be included in certificate
		 * Required
		 */
		subjectAlternativeName: FormControl<string | null | undefined>,
	}
	export function CreateSubjectAlternativeNameDetailsFormGroup() {
		return new FormGroup<SubjectAlternativeNameDetailsFormProperties>({
			status: new FormControl<SubjectAlternativeNameDetailsStatus | null | undefined>(undefined, [Validators.required]),
			subjectAlternativeName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum SubjectAlternativeNameDetailsStatus { PENDING = 0, INVALID = 1, COMPLETED = 2, FRAUD = 3 }

	export interface CertificateAddress {

		/**
		 * Address line 1 of organization address
		 * Required
		 */
		address1: string;

		/** Address line 2 of organization address */
		address2?: string | null;

		/** City/Locality of organization address */
		city?: string | null;

		/**
		 * Two character country code of organization
		 * Required
		 */
		country: CertificateAddressCountry;

		/** Postal code of organization address */
		postalCode?: string | null;

		/** Full name of State/Province/Territory of organization address */
		state?: string | null;
	}
	export interface CertificateAddressFormProperties {

		/**
		 * Address line 1 of organization address
		 * Required
		 */
		address1: FormControl<string | null | undefined>,

		/** Address line 2 of organization address */
		address2: FormControl<string | null | undefined>,

		/** City/Locality of organization address */
		city: FormControl<string | null | undefined>,

		/**
		 * Two character country code of organization
		 * Required
		 */
		country: FormControl<CertificateAddressCountry | null | undefined>,

		/** Postal code of organization address */
		postalCode: FormControl<string | null | undefined>,

		/** Full name of State/Province/Territory of organization address */
		state: FormControl<string | null | undefined>,
	}
	export function CreateCertificateAddressFormGroup() {
		return new FormGroup<CertificateAddressFormProperties>({
			address1: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			address2: new FormControl<string | null | undefined>(undefined),
			city: new FormControl<string | null | undefined>(undefined),
			country: new FormControl<CertificateAddressCountry | null | undefined>(undefined, [Validators.required]),
			postalCode: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum CertificateAddressCountry { AC = 0, AD = 1, AE = 2, AF = 3, AG = 4, AI = 5, AL = 6, AM = 7, AN = 8, AO = 9, AQ = 10, AR = 11, AS = 12, AT = 13, AU = 14, AW = 15, AZ = 16, BA = 17, BB = 18, BD = 19, BE = 20, BF = 21, BG = 22, BH = 23, BI = 24, BJ = 25, BM = 26, BN = 27, BO = 28, BR = 29, BS = 30, BT = 31, BV = 32, BW = 33, BY = 34, BZ = 35, CA = 36, CC = 37, CD = 38, CF = 39, CG = 40, CH = 41, CI = 42, CK = 43, CL = 44, CM = 45, CN = 46, CO = 47, CR = 48, CV = 49, CX = 50, CY = 51, CZ = 52, DE = 53, DJ = 54, DK = 55, DM = 56, DO = 57, DZ = 58, EC = 59, EE = 60, EG = 61, EH = 62, ER = 63, ES = 64, ET = 65, FI = 66, FJ = 67, FK = 68, FM = 69, FO = 70, FR = 71, GA = 72, GB = 73, GD = 74, GE = 75, GF = 76, GG = 77, GH = 78, GI = 79, GL = 80, GM = 81, GN = 82, GP = 83, GQ = 84, GR = 85, GS = 86, GT = 87, GU = 88, GW = 89, GY = 90, HK = 91, HM = 92, HN = 93, HR = 94, HT = 95, HU = 96, ID = 97, IE = 98, IL = 99, IM = 100, IN = 101, IO = 102, IQ = 103, IS = 104, IT = 105, JE = 106, JM = 107, JO = 108, JP = 109, KE = 110, KG = 111, KH = 112, KI = 113, KM = 114, KN = 115, KR = 116, KW = 117, KY = 118, KZ = 119, LA = 120, LB = 121, LC = 122, LI = 123, LK = 124, LR = 125, LS = 126, LT = 127, LU = 128, LV = 129, LY = 130, MA = 131, MC = 132, MD = 133, ME = 134, MG = 135, MH = 136, ML = 137, MM = 138, MN = 139, MO = 140, MP = 141, MQ = 142, MR = 143, MS = 144, MT = 145, MU = 146, MV = 147, MW = 148, MX = 149, MY = 150, MZ = 151, NA = 152, NC = 153, NE = 154, NF = 155, NG = 156, NI = 157, NL = 158, NO = 159, NP = 160, NR = 161, NU = 162, NZ = 163, OM = 164, PA = 165, PE = 166, PF = 167, PG = 168, PH = 169, PK = 170, PL = 171, PM = 172, PN = 173, PR = 174, PS = 175, PT = 176, PW = 177, PY = 178, QA = 179, RE = 180, RO = 181, RS = 182, RU = 183, RW = 184, SA = 185, SB = 186, SC = 187, SE = 188, SG = 189, SH = 190, SI = 191, SJ = 192, SK = 193, SL = 194, SM = 195, SN = 196, SO = 197, SR = 198, ST = 199, SV = 200, SZ = 201, TC = 202, TD = 203, TF = 204, TG = 205, TH = 206, TJ = 207, TK = 208, TL = 209, TM = 210, TN = 211, TO = 212, TP = 213, TR = 214, TT = 215, TV = 216, TW = 217, TZ = 218, UA = 219, UG = 220, UM = 221, US = 222, UY = 223, UZ = 224, VA = 225, VC = 226, VE = 227, VG = 228, VI = 229, VN = 230, VU = 231, WF = 232, WS = 233, YE = 234, YT = 235, YU = 236, ZA = 237, ZM = 238, ZW = 239 }

	export interface CertificateBundle {

		/** Required */
		pems: PEMCertificates;

		/**
		 * Serial number of certificate requested
		 * Required
		 */
		serialNumber: string;
	}
	export interface CertificateBundleFormProperties {

		/**
		 * Serial number of certificate requested
		 * Required
		 */
		serialNumber: FormControl<string | null | undefined>,
	}
	export function CreateCertificateBundleFormGroup() {
		return new FormGroup<CertificateBundleFormProperties>({
			serialNumber: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CertificateCallback {

		/**
		 * Callback url registered to receive stateful actions
		 * Required
		 */
		callbackUrl: string;
	}
	export interface CertificateCallbackFormProperties {

		/**
		 * Callback url registered to receive stateful actions
		 * Required
		 */
		callbackUrl: FormControl<string | null | undefined>,
	}
	export function CreateCertificateCallbackFormGroup() {
		return new FormGroup<CertificateCallbackFormProperties>({
			callbackUrl: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CertificateContact {

		/**
		 * Email address of requestor contact
		 * Required
		 */
		email: string;

		/** Only used for EVSSL. Job title of requestor contact */
		jobTitle?: string | null;

		/**
		 * First name of requestor contact
		 * Required
		 */
		nameFirst: string;

		/**
		 * Last name of requestor contact
		 * Required
		 */
		nameLast: string;

		/** Middle initial of requestor contact */
		nameMiddle?: string | null;

		/**
		 * Phone number for requestor contact
		 * Required
		 */
		phone: string;

		/** Suffix of requestor contact */
		suffix?: string | null;
	}
	export interface CertificateContactFormProperties {

		/**
		 * Email address of requestor contact
		 * Required
		 */
		email: FormControl<string | null | undefined>,

		/** Only used for EVSSL. Job title of requestor contact */
		jobTitle: FormControl<string | null | undefined>,

		/**
		 * First name of requestor contact
		 * Required
		 */
		nameFirst: FormControl<string | null | undefined>,

		/**
		 * Last name of requestor contact
		 * Required
		 */
		nameLast: FormControl<string | null | undefined>,

		/** Middle initial of requestor contact */
		nameMiddle: FormControl<string | null | undefined>,

		/**
		 * Phone number for requestor contact
		 * Required
		 */
		phone: FormControl<string | null | undefined>,

		/** Suffix of requestor contact */
		suffix: FormControl<string | null | undefined>,
	}
	export function CreateCertificateContactFormGroup() {
		return new FormGroup<CertificateContactFormProperties>({
			email: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			jobTitle: new FormControl<string | null | undefined>(undefined),
			nameFirst: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			nameLast: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			nameMiddle: new FormControl<string | null | undefined>(undefined),
			phone: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			suffix: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CertificateCreate {

		/** Required if client would like to receive stateful actions via callback during certificate lifecyle */
		callbackUrl?: string | null;

		/** Name to be secured in certificate. If provided, CN field in CSR will be ignored. */
		commonName?: string | null;

		/** Required */
		contact: CertificateContact;

		/**
		 * Certificate Signing Request
		 * Required
		 */
		csr: string;

		/** Only used for OV */
		intelVPro?: boolean | null;
		organization?: CertificateOrganizationCreate;

		/**
		 * Number of years for certificate validity period
		 * Required
		 */
		period: number;

		/**
		 * Type of product requesting a certificate. Only required non-renewal
		 * Required
		 */
		productType: CertificateProductType;

		/** Root Type. Depending on certificate expiration date, SHA_1 not be allowed. Will default to SHA_2 if expiration date exceeds sha1 allowed date */
		rootType?: CertificateRootType | null;

		/** Number of subject alternative names(SAN) to be included in certificate */
		slotSize?: CertificateSlotSize | null;

		/** Subject Alternative names. Collection of subjectAlternativeNames to be included in certificate. */
		subjectAlternativeNames?: Array<string>;
	}
	export interface CertificateCreateFormProperties {

		/** Required if client would like to receive stateful actions via callback during certificate lifecyle */
		callbackUrl: FormControl<string | null | undefined>,

		/** Name to be secured in certificate. If provided, CN field in CSR will be ignored. */
		commonName: FormControl<string | null | undefined>,

		/**
		 * Certificate Signing Request
		 * Required
		 */
		csr: FormControl<string | null | undefined>,

		/** Only used for OV */
		intelVPro: FormControl<boolean | null | undefined>,

		/**
		 * Number of years for certificate validity period
		 * Required
		 */
		period: FormControl<number | null | undefined>,

		/**
		 * Type of product requesting a certificate. Only required non-renewal
		 * Required
		 */
		productType: FormControl<CertificateProductType | null | undefined>,

		/** Root Type. Depending on certificate expiration date, SHA_1 not be allowed. Will default to SHA_2 if expiration date exceeds sha1 allowed date */
		rootType: FormControl<CertificateRootType | null | undefined>,

		/** Number of subject alternative names(SAN) to be included in certificate */
		slotSize: FormControl<CertificateSlotSize | null | undefined>,
	}
	export function CreateCertificateCreateFormGroup() {
		return new FormGroup<CertificateCreateFormProperties>({
			callbackUrl: new FormControl<string | null | undefined>(undefined),
			commonName: new FormControl<string | null | undefined>(undefined),
			csr: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			intelVPro: new FormControl<boolean | null | undefined>(undefined),
			period: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			productType: new FormControl<CertificateProductType | null | undefined>(undefined, [Validators.required]),
			rootType: new FormControl<CertificateRootType | null | undefined>(undefined),
			slotSize: new FormControl<CertificateSlotSize | null | undefined>(undefined),
		});

	}

	export interface CertificateDetailV2 {

		/**
		 * The unique identifier of the certificate request. Only present if no errors returned
		 * Required
		 */
		certificateId: string;

		/**
		 * Common name of certificate
		 * Required
		 */
		commonName: string;

		/** The date the certificate request completed processing. */
		completedAt?: string | null;

		/** Required */
		contact: CertificateContact;

		/**
		 * The date the certificate was ordered.
		 * Required
		 */
		createdAt: string;

		/** Certificate signing request (if present) in PEM format */
		csr?: string | null;

		/** Only present if certificate order has been denied */
		deniedReason?: string | null;
		organization?: CertificateOrganization;

		/**
		 * Validity period of order. Specified in years
		 * Required
		 */
		period: number;

		/** Percentage of completion for certificate vetting */
		progress?: number | null;

		/** Only returned when a renewal is available. */
		renewalAvailable?: boolean | null;

		/** The revocation date of certificate (if revoked). */
		revokedAt?: string | null;

		/**
		 * Root type:
		 * * `GODADDY_SHA_1` - GoDaddy (Secure Hash Algorithm 1) SHA-1 root type
		 * * `GODADDY_SHA_2` - GoDaddy (Secure Hash Algorithm 2) SHA-2 root type
		 * * `STARFIELD_SHA_1` - Starfield SHA-1 root type
		 * * `STARFIELD_SHA_2` - Starfield SHA-2 root type
		 */
		rootType?: CertificateRootType | null;

		/** Serial number of certificate (if issued or revoked) */
		serialNumber?: string | null;

		/** Hexadecmial format for Serial number of certificate(if issued or revoked) */
		serialNumberHex?: string | null;

		/**
		 * Number of subject alternative names (SAN) to be included in certificate (if UCC):
		 * * `FIVE` - Five slot UCC request
		 * * `TEN` - Ten slot UCC request
		 * * `FIFTEEN` - Fifteen slot UCC request
		 * * `TWENTY` - Twenty slot UCC request
		 * * `THIRTY` - Thirty slot UCC request
		 * * `FOURTY` - Fourty slot UCC request
		 * * `FIFTY` - Fifty slot UCC request
		 * * `ONE_HUNDRED` - One hundred slot UCC request
		 */
		slotSize?: CertificateSlotSize | null;

		/**
		 * Certificate status (if issued or revoked):
		 * * `CANCELED` - Certificate request was canceled by customer
		 * * `DENIED` - Certificate request was denied by customer\n  * `EXPIRED` - Issued certificate has exceeded the valid end date
		 * * `ISSUED` - Certificate has been issued and is within validity period
		 * * `PENDING_ISSUANCE` - Certificate request has completed domain verification and is in the process of being issued
		 * * `PENDING_REKEY` - Previously issued certificate was rekeyed by customer and is in the process of being reissued
		 * * `PENDING_REVOCATION` - Previously issued certificate is in the process of being revoked
		 * * `REVOKED` - Issued certificate has been revoked\n  * `UNUSED` - Certificate in an error state
		 * Required
		 */
		status: CertificateStatus;

		/** Subject Alternative names. Collection of subjectAlternativeNames to be included in certificate. */
		subjectAlternativeNames?: Array<string>;

		/**
		 * Certificate type:
		 * * `DV_SSL` - (Domain Validated Secure Sockets Layer) SSL certificate validated using domain name only
		 * * `DV_WILDCARD_SSL` - SSL certificate containing subdomains which is validated using domain name only
		 * * `EV_SSL` - (Extended Validation) SSL certificate validated using organization information, domain name, business legal status, and other factors
		 * * `OV_CODE_SIGNING` - Code signing SSL certificate used by software developers to digitally sign apps. Validated using organization information
		 * * `OV_DRIVER_SIGNING` - Driver signing SSL certificate request used by software developers to digitally sign secure code for Windows hardware drivers. Validated using organization information
		 * * `OV_SSL` - SSL certificate validated using organization information and domain name
		 * * `OV_WILDCARD_SSL` - SSL certificate containing subdomains which is validated using organization information and domain name
		 * * `UCC_DV_SSL` - (Unified Communication Certificate) Multi domain SSL certificate validated using domain name only
		 * * `UCC_EV_SSL` - Multi domain SSL certificate validated using organization information, domain name, business legal status, and other factors
		 * * `UCC_OV_SSL` - Multi domain SSL certificate validated using organization information and domain name
		 * Required
		 */
		type: CertificateDetailV2Type;

		/** The end date of the certificate's validity (if issued or revoked). */
		validEndAt?: string | null;

		/** The start date of the certificate's validity (if issued or revoked). */
		validStartAt?: string | null;
	}
	export interface CertificateDetailV2FormProperties {

		/**
		 * The unique identifier of the certificate request. Only present if no errors returned
		 * Required
		 */
		certificateId: FormControl<string | null | undefined>,

		/**
		 * Common name of certificate
		 * Required
		 */
		commonName: FormControl<string | null | undefined>,

		/** The date the certificate request completed processing. */
		completedAt: FormControl<string | null | undefined>,

		/**
		 * The date the certificate was ordered.
		 * Required
		 */
		createdAt: FormControl<string | null | undefined>,

		/** Certificate signing request (if present) in PEM format */
		csr: FormControl<string | null | undefined>,

		/** Only present if certificate order has been denied */
		deniedReason: FormControl<string | null | undefined>,

		/**
		 * Validity period of order. Specified in years
		 * Required
		 */
		period: FormControl<number | null | undefined>,

		/** Percentage of completion for certificate vetting */
		progress: FormControl<number | null | undefined>,

		/** Only returned when a renewal is available. */
		renewalAvailable: FormControl<boolean | null | undefined>,

		/** The revocation date of certificate (if revoked). */
		revokedAt: FormControl<string | null | undefined>,

		/**
		 * Root type:
		 * * `GODADDY_SHA_1` - GoDaddy (Secure Hash Algorithm 1) SHA-1 root type
		 * * `GODADDY_SHA_2` - GoDaddy (Secure Hash Algorithm 2) SHA-2 root type
		 * * `STARFIELD_SHA_1` - Starfield SHA-1 root type
		 * * `STARFIELD_SHA_2` - Starfield SHA-2 root type
		 */
		rootType: FormControl<CertificateRootType | null | undefined>,

		/** Serial number of certificate (if issued or revoked) */
		serialNumber: FormControl<string | null | undefined>,

		/** Hexadecmial format for Serial number of certificate(if issued or revoked) */
		serialNumberHex: FormControl<string | null | undefined>,

		/**
		 * Number of subject alternative names (SAN) to be included in certificate (if UCC):
		 * * `FIVE` - Five slot UCC request
		 * * `TEN` - Ten slot UCC request
		 * * `FIFTEEN` - Fifteen slot UCC request
		 * * `TWENTY` - Twenty slot UCC request
		 * * `THIRTY` - Thirty slot UCC request
		 * * `FOURTY` - Fourty slot UCC request
		 * * `FIFTY` - Fifty slot UCC request
		 * * `ONE_HUNDRED` - One hundred slot UCC request
		 */
		slotSize: FormControl<CertificateSlotSize | null | undefined>,

		/**
		 * Certificate status (if issued or revoked):
		 * * `CANCELED` - Certificate request was canceled by customer
		 * * `DENIED` - Certificate request was denied by customer\n  * `EXPIRED` - Issued certificate has exceeded the valid end date
		 * * `ISSUED` - Certificate has been issued and is within validity period
		 * * `PENDING_ISSUANCE` - Certificate request has completed domain verification and is in the process of being issued
		 * * `PENDING_REKEY` - Previously issued certificate was rekeyed by customer and is in the process of being reissued
		 * * `PENDING_REVOCATION` - Previously issued certificate is in the process of being revoked
		 * * `REVOKED` - Issued certificate has been revoked\n  * `UNUSED` - Certificate in an error state
		 * Required
		 */
		status: FormControl<CertificateStatus | null | undefined>,

		/**
		 * Certificate type:
		 * * `DV_SSL` - (Domain Validated Secure Sockets Layer) SSL certificate validated using domain name only
		 * * `DV_WILDCARD_SSL` - SSL certificate containing subdomains which is validated using domain name only
		 * * `EV_SSL` - (Extended Validation) SSL certificate validated using organization information, domain name, business legal status, and other factors
		 * * `OV_CODE_SIGNING` - Code signing SSL certificate used by software developers to digitally sign apps. Validated using organization information
		 * * `OV_DRIVER_SIGNING` - Driver signing SSL certificate request used by software developers to digitally sign secure code for Windows hardware drivers. Validated using organization information
		 * * `OV_SSL` - SSL certificate validated using organization information and domain name
		 * * `OV_WILDCARD_SSL` - SSL certificate containing subdomains which is validated using organization information and domain name
		 * * `UCC_DV_SSL` - (Unified Communication Certificate) Multi domain SSL certificate validated using domain name only
		 * * `UCC_EV_SSL` - Multi domain SSL certificate validated using organization information, domain name, business legal status, and other factors
		 * * `UCC_OV_SSL` - Multi domain SSL certificate validated using organization information and domain name
		 * Required
		 */
		type: FormControl<CertificateDetailV2Type | null | undefined>,

		/** The end date of the certificate's validity (if issued or revoked). */
		validEndAt: FormControl<string | null | undefined>,

		/** The start date of the certificate's validity (if issued or revoked). */
		validStartAt: FormControl<string | null | undefined>,
	}
	export function CreateCertificateDetailV2FormGroup() {
		return new FormGroup<CertificateDetailV2FormProperties>({
			certificateId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			commonName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			completedAt: new FormControl<string | null | undefined>(undefined),
			createdAt: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			csr: new FormControl<string | null | undefined>(undefined),
			deniedReason: new FormControl<string | null | undefined>(undefined),
			period: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			progress: new FormControl<number | null | undefined>(undefined),
			renewalAvailable: new FormControl<boolean | null | undefined>(undefined),
			revokedAt: new FormControl<string | null | undefined>(undefined),
			rootType: new FormControl<CertificateRootType | null | undefined>(undefined),
			serialNumber: new FormControl<string | null | undefined>(undefined),
			serialNumberHex: new FormControl<string | null | undefined>(undefined),
			slotSize: new FormControl<CertificateSlotSize | null | undefined>(undefined),
			status: new FormControl<CertificateStatus | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<CertificateDetailV2Type | null | undefined>(undefined, [Validators.required]),
			validEndAt: new FormControl<string | null | undefined>(undefined),
			validStartAt: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum CertificateDetailV2Type { DV_SSL = 0, DV_WILDCARD_SSL = 1, EV_SSL = 2, OV_CODE_SIGNING = 3, OV_DRIVER_SIGNING = 4, OV_SSL = 5, OV_WILDCARD_SSL = 6, UCC_DV_SSL = 7, UCC_EV_SSL = 8, UCC_OV_SSL = 9 }

	export interface CertificateEmailHistory {

		/**
		 * Shopper Id requested certificate
		 * Required
		 */
		accountId: number;

		/**
		 * Email message
		 * Required
		 */
		body: string;

		/**
		 * Date email sent
		 * Required
		 */
		dateEntered: string;

		/**
		 * Email from address
		 * Required
		 */
		fromType: string;

		/**
		 * Email Id
		 * Required
		 */
		id: number;

		/**
		 * Email address email was sent
		 * Required
		 */
		recipients: string;

		/**
		 * Email subject
		 * Required
		 */
		subject: string;

		/**
		 * Email template type name
		 * Required
		 */
		templateType: string;
	}
	export interface CertificateEmailHistoryFormProperties {

		/**
		 * Shopper Id requested certificate
		 * Required
		 */
		accountId: FormControl<number | null | undefined>,

		/**
		 * Email message
		 * Required
		 */
		body: FormControl<string | null | undefined>,

		/**
		 * Date email sent
		 * Required
		 */
		dateEntered: FormControl<string | null | undefined>,

		/**
		 * Email from address
		 * Required
		 */
		fromType: FormControl<string | null | undefined>,

		/**
		 * Email Id
		 * Required
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * Email address email was sent
		 * Required
		 */
		recipients: FormControl<string | null | undefined>,

		/**
		 * Email subject
		 * Required
		 */
		subject: FormControl<string | null | undefined>,

		/**
		 * Email template type name
		 * Required
		 */
		templateType: FormControl<string | null | undefined>,
	}
	export function CreateCertificateEmailHistoryFormGroup() {
		return new FormGroup<CertificateEmailHistoryFormProperties>({
			accountId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			body: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			dateEntered: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			fromType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			recipients: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			subject: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			templateType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CertificateIdentifier {

		/**
		 * The unique identifier of the certificate request. Only present if verified.
		 * Required
		 */
		certificateId: string;
	}
	export interface CertificateIdentifierFormProperties {

		/**
		 * The unique identifier of the certificate request. Only present if verified.
		 * Required
		 */
		certificateId: FormControl<string | null | undefined>,
	}
	export function CreateCertificateIdentifierFormGroup() {
		return new FormGroup<CertificateIdentifierFormProperties>({
			certificateId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CertificateOrganization {

		/** Required */
		address: CertificateAddress;

		/** Only for EVSSL. The DBA(does business as) name for the organization. */
		assumedName?: string | null;
		jurisdictionOfIncorporation?: JurisdictionOfIncorporation;

		/**
		 * Name of organization that owns common name
		 * Required
		 */
		name: string;

		/**
		 * Phone number for organization
		 * Required
		 */
		phone: string;

		/** Only for EVSSL. */
		registrationAgent?: string | null;

		/** Only for EVSSL. */
		registrationNumber?: string | null;
	}
	export interface CertificateOrganizationFormProperties {

		/** Only for EVSSL. The DBA(does business as) name for the organization. */
		assumedName: FormControl<string | null | undefined>,

		/**
		 * Name of organization that owns common name
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Phone number for organization
		 * Required
		 */
		phone: FormControl<string | null | undefined>,

		/** Only for EVSSL. */
		registrationAgent: FormControl<string | null | undefined>,

		/** Only for EVSSL. */
		registrationNumber: FormControl<string | null | undefined>,
	}
	export function CreateCertificateOrganizationFormGroup() {
		return new FormGroup<CertificateOrganizationFormProperties>({
			assumedName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			phone: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			registrationAgent: new FormControl<string | null | undefined>(undefined),
			registrationNumber: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CertificateOrganizationCreate {
		address?: CertificateAddress;

		/** Only for EVSSL. The DBA(does business as) name for the organization. */
		assumedName?: string | null;

		/**
		 * Name of organization that owns common name
		 * Required
		 */
		name: string;

		/**
		 * Phone number for organization
		 * Required
		 */
		phone: string;

		/** Only for EVSSL. */
		registrationAgent?: string | null;

		/** Only for EVSSL. */
		registrationNumber?: string | null;
	}
	export interface CertificateOrganizationCreateFormProperties {

		/** Only for EVSSL. The DBA(does business as) name for the organization. */
		assumedName: FormControl<string | null | undefined>,

		/**
		 * Name of organization that owns common name
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Phone number for organization
		 * Required
		 */
		phone: FormControl<string | null | undefined>,

		/** Only for EVSSL. */
		registrationAgent: FormControl<string | null | undefined>,

		/** Only for EVSSL. */
		registrationNumber: FormControl<string | null | undefined>,
	}
	export function CreateCertificateOrganizationCreateFormGroup() {
		return new FormGroup<CertificateOrganizationCreateFormProperties>({
			assumedName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			phone: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			registrationAgent: new FormControl<string | null | undefined>(undefined),
			registrationNumber: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CertificateReissue {

		/** Required if client would like to receive stateful action via callback during certificate lifecyle */
		callbackUrl?: string | null;

		/** The common name of certificate to be secured */
		commonName?: string | null;

		/** Certificate Signing Request. */
		csr?: string | null;

		/**
		 * In hours, time to delay revoking existing certificate after issuance of new certificate. If revokeExistingCertOnIssuance is enabled, this value will be ignored
		 * Maximum: 168
		 */
		delayExistingRevoke?: number | null;

		/** Optional field. Domain verification will be required for each domain listed here. Specify a value of * to indicate that all domains associated with the request should have their domain information reverified. */
		forceDomainRevetting?: Array<string>;

		/** Root Type. Depending on certificate expiration date, SHA_1 not be allowed. Will default to SHA_2 if expiration date exceeds sha1 allowed date */
		rootType?: CertificateRootType | null;

		/** Only used for UCC products. An array of subject alternative names to include in certificate. */
		subjectAlternativeNames?: Array<string>;
	}
	export interface CertificateReissueFormProperties {

		/** Required if client would like to receive stateful action via callback during certificate lifecyle */
		callbackUrl: FormControl<string | null | undefined>,

		/** The common name of certificate to be secured */
		commonName: FormControl<string | null | undefined>,

		/** Certificate Signing Request. */
		csr: FormControl<string | null | undefined>,

		/**
		 * In hours, time to delay revoking existing certificate after issuance of new certificate. If revokeExistingCertOnIssuance is enabled, this value will be ignored
		 * Maximum: 168
		 */
		delayExistingRevoke: FormControl<number | null | undefined>,

		/** Root Type. Depending on certificate expiration date, SHA_1 not be allowed. Will default to SHA_2 if expiration date exceeds sha1 allowed date */
		rootType: FormControl<CertificateRootType | null | undefined>,
	}
	export function CreateCertificateReissueFormGroup() {
		return new FormGroup<CertificateReissueFormProperties>({
			callbackUrl: new FormControl<string | null | undefined>(undefined),
			commonName: new FormControl<string | null | undefined>(undefined),
			csr: new FormControl<string | null | undefined>(undefined),
			delayExistingRevoke: new FormControl<number | null | undefined>(undefined, [Validators.max(168)]),
			rootType: new FormControl<CertificateRootType | null | undefined>(undefined),
		});

	}

	export interface CertificateRenew {

		/** Required if client would like to receive stateful actions via callback during certificate lifecyle */
		callbackUrl?: string | null;

		/** The common name of certificate to be secured */
		commonName?: string | null;

		/** Certificate Signing Request. */
		csr?: string | null;

		/** Number of years for certificate validity period, if different from previous certificate */
		period?: number | null;

		/** Root Type. Depending on certificate expiration date, SHA_1 not be allowed. Will default to SHA_2 if expiration date exceeds sha1 allowed date */
		rootType?: CertificateRootType | null;

		/** Only used for UCC products. An array of subject alternative names to include in certificate. Not including a subject alternative name that was in the previous certificate will remove it from the renewed certificate. */
		subjectAlternativeNames?: Array<string>;
	}
	export interface CertificateRenewFormProperties {

		/** Required if client would like to receive stateful actions via callback during certificate lifecyle */
		callbackUrl: FormControl<string | null | undefined>,

		/** The common name of certificate to be secured */
		commonName: FormControl<string | null | undefined>,

		/** Certificate Signing Request. */
		csr: FormControl<string | null | undefined>,

		/** Number of years for certificate validity period, if different from previous certificate */
		period: FormControl<number | null | undefined>,

		/** Root Type. Depending on certificate expiration date, SHA_1 not be allowed. Will default to SHA_2 if expiration date exceeds sha1 allowed date */
		rootType: FormControl<CertificateRootType | null | undefined>,
	}
	export function CreateCertificateRenewFormGroup() {
		return new FormGroup<CertificateRenewFormProperties>({
			callbackUrl: new FormControl<string | null | undefined>(undefined),
			commonName: new FormControl<string | null | undefined>(undefined),
			csr: new FormControl<string | null | undefined>(undefined),
			period: new FormControl<number | null | undefined>(undefined),
			rootType: new FormControl<CertificateRootType | null | undefined>(undefined),
		});

	}

	export interface CertificateRevoke {

		/**
		 * Reason for revocation
		 * Required
		 */
		reason: CertificateRevokeReason;
	}
	export interface CertificateRevokeFormProperties {

		/**
		 * Reason for revocation
		 * Required
		 */
		reason: FormControl<CertificateRevokeReason | null | undefined>,
	}
	export function CreateCertificateRevokeFormGroup() {
		return new FormGroup<CertificateRevokeFormProperties>({
			reason: new FormControl<CertificateRevokeReason | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum CertificateRevokeReason { AFFILIATION_CHANGED = 0, CESSATION_OF_OPERATION = 1, KEY_COMPROMISE = 2, PRIVILEGE_WITHDRAWN = 3, SUPERSEDED = 4 }

	export interface CertificateSiteSeal {

		/**
		 * Certificate Seal HTML
		 * Required
		 */
		html: string;
	}
	export interface CertificateSiteSealFormProperties {

		/**
		 * Certificate Seal HTML
		 * Required
		 */
		html: FormControl<string | null | undefined>,
	}
	export function CreateCertificateSiteSealFormGroup() {
		return new FormGroup<CertificateSiteSealFormProperties>({
			html: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CertificateSummariesV2 {

		/**
		 * List of certificates for a specified customer.
		 * Required
		 */
		certificates: Array<CertificateSummaryV2>;

		/** Required */
		pagination: Pagination;
	}
	export interface CertificateSummariesV2FormProperties {
	}
	export function CreateCertificateSummariesV2FormGroup() {
		return new FormGroup<CertificateSummariesV2FormProperties>({
		});

	}

	export interface CertificateSummaryV2 {

		/**
		 * The unique identifier of the certificate request.
		 * Required
		 */
		certificateId: string;

		/**
		 * Common name for the certificate request.
		 * Required
		 */
		commonName: string;

		/** The date the certificate request completed processing (if issued or revoked). */
		completedAt?: string | null;

		/**
		 * Date that the certificate request was received.
		 * Required
		 */
		createdAt: string;

		/**
		 * Validity period of order. Specified in years.
		 * Required
		 */
		period: number;

		/** Only returned when a renewal is available. */
		renewalAvailable?: boolean | null;

		/** The revocation date of certificate (if revoked). */
		revokedAt?: string | null;

		/** Serial number of certificate (if issued or revoked). */
		serialNumber?: string | null;

		/**
		 * Number of subject alternative names (SAN) to be included in certificate (if UCC):
		 * * `FIVE` - Five slot UCC request
		 * * `TEN` - Ten slot UCC request
		 * * `FIFTEEN` - Fifteen slot UCC request
		 * * `TWENTY` - Twenty slot UCC request
		 * * `THIRTY` - Thirty slot UCC request
		 * * `FOURTY` - Fourty slot UCC request
		 * * `FIFTY` - Fifty slot UCC request
		 * * `ONE_HUNDRED` - One hundred slot UCC request
		 */
		slotSize?: CertificateSlotSize | null;

		/**
		 * Certificate status (if issued or revoked):
		 * * `CANCELED` - Certificate request was canceled by customer
		 * * `DENIED` - Certificate request was denied by customer
		 * * `EXPIRED` - Issued certificate has exceeded the valid end date
		 * * `ISSUED` - Certificate has been issued and is within validity period
		 * * `PENDING_ISSUANCE` - Certificate request has completed domain verification and is in the process of being issued
		 * * `PENDING_REKEY` - Previously issued certificate was rekeyed by customer and is in the process of being reissued
		 * * `PENDING_REVOCATION` - Previously issued certificate is in the process of being revoked
		 * * `REVOKED` - Issued certificate has been revoked
		 * * `UNUSED` - Certificate in an error state
		 * Required
		 */
		status: CertificateSummaryV2Status;

		/** Subject Alternative names (if UCC). Collection of subjectAlternativeNames to be included in certificate. */
		subjectAlternativeNames?: Array<string>;

		/**
		 * Certificate type:
		 * * `DV_SSL` - (Domain Validated Secure Sockets Layer) SSL certificate validated using domain name only
		 * * `DV_WILDCARD_SSL` - SSL certificate containing subdomains which is validated using domain name only
		 * * `EV_SSL` - (Extended Validation) SSL certificate validated using organization information, domain name, business legal status, and other factors
		 * * `OV_CODE_SIGNING` - Code signing SSL certificate used by software developers to digitally sign apps. Validated using organization information
		 * * `OV_DRIVER_SIGNING` - Driver signing SSL certificate request used by software developers to digitally sign secure code for Windows hardware drivers. Validated using organization information
		 * * `OV_SSL` - SSL certificate validated using organization information and domain name
		 * * `OV_WILDCARD_SSL` - SSL certificate containing subdomains which is validated using organization information and domain name
		 * * `UCC_DV_SSL` - (Unified Communication Certificate) Multi domain SSL certificate validated using domain name only
		 * * `UCC_EV_SSL` - Multi domain SSL certificate validated using organization information, domain name, business legal status, and other factors
		 * * `UCC_OV_SSL` - Multi domain SSL certificate validated using organization information and domain name
		 * Required
		 */
		type: CertificateDetailV2Type;

		/** The end date of the certificate's validity (if issued or revoked). */
		validEndAt?: string | null;

		/** The start date of the certificate's validity (if issued or revoked). */
		validStartAt?: string | null;
	}
	export interface CertificateSummaryV2FormProperties {

		/**
		 * The unique identifier of the certificate request.
		 * Required
		 */
		certificateId: FormControl<string | null | undefined>,

		/**
		 * Common name for the certificate request.
		 * Required
		 */
		commonName: FormControl<string | null | undefined>,

		/** The date the certificate request completed processing (if issued or revoked). */
		completedAt: FormControl<string | null | undefined>,

		/**
		 * Date that the certificate request was received.
		 * Required
		 */
		createdAt: FormControl<string | null | undefined>,

		/**
		 * Validity period of order. Specified in years.
		 * Required
		 */
		period: FormControl<number | null | undefined>,

		/** Only returned when a renewal is available. */
		renewalAvailable: FormControl<boolean | null | undefined>,

		/** The revocation date of certificate (if revoked). */
		revokedAt: FormControl<string | null | undefined>,

		/** Serial number of certificate (if issued or revoked). */
		serialNumber: FormControl<string | null | undefined>,

		/**
		 * Number of subject alternative names (SAN) to be included in certificate (if UCC):
		 * * `FIVE` - Five slot UCC request
		 * * `TEN` - Ten slot UCC request
		 * * `FIFTEEN` - Fifteen slot UCC request
		 * * `TWENTY` - Twenty slot UCC request
		 * * `THIRTY` - Thirty slot UCC request
		 * * `FOURTY` - Fourty slot UCC request
		 * * `FIFTY` - Fifty slot UCC request
		 * * `ONE_HUNDRED` - One hundred slot UCC request
		 */
		slotSize: FormControl<CertificateSlotSize | null | undefined>,

		/**
		 * Certificate status (if issued or revoked):
		 * * `CANCELED` - Certificate request was canceled by customer
		 * * `DENIED` - Certificate request was denied by customer
		 * * `EXPIRED` - Issued certificate has exceeded the valid end date
		 * * `ISSUED` - Certificate has been issued and is within validity period
		 * * `PENDING_ISSUANCE` - Certificate request has completed domain verification and is in the process of being issued
		 * * `PENDING_REKEY` - Previously issued certificate was rekeyed by customer and is in the process of being reissued
		 * * `PENDING_REVOCATION` - Previously issued certificate is in the process of being revoked
		 * * `REVOKED` - Issued certificate has been revoked
		 * * `UNUSED` - Certificate in an error state
		 * Required
		 */
		status: FormControl<CertificateSummaryV2Status | null | undefined>,

		/**
		 * Certificate type:
		 * * `DV_SSL` - (Domain Validated Secure Sockets Layer) SSL certificate validated using domain name only
		 * * `DV_WILDCARD_SSL` - SSL certificate containing subdomains which is validated using domain name only
		 * * `EV_SSL` - (Extended Validation) SSL certificate validated using organization information, domain name, business legal status, and other factors
		 * * `OV_CODE_SIGNING` - Code signing SSL certificate used by software developers to digitally sign apps. Validated using organization information
		 * * `OV_DRIVER_SIGNING` - Driver signing SSL certificate request used by software developers to digitally sign secure code for Windows hardware drivers. Validated using organization information
		 * * `OV_SSL` - SSL certificate validated using organization information and domain name
		 * * `OV_WILDCARD_SSL` - SSL certificate containing subdomains which is validated using organization information and domain name
		 * * `UCC_DV_SSL` - (Unified Communication Certificate) Multi domain SSL certificate validated using domain name only
		 * * `UCC_EV_SSL` - Multi domain SSL certificate validated using organization information, domain name, business legal status, and other factors
		 * * `UCC_OV_SSL` - Multi domain SSL certificate validated using organization information and domain name
		 * Required
		 */
		type: FormControl<CertificateDetailV2Type | null | undefined>,

		/** The end date of the certificate's validity (if issued or revoked). */
		validEndAt: FormControl<string | null | undefined>,

		/** The start date of the certificate's validity (if issued or revoked). */
		validStartAt: FormControl<string | null | undefined>,
	}
	export function CreateCertificateSummaryV2FormGroup() {
		return new FormGroup<CertificateSummaryV2FormProperties>({
			certificateId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			commonName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			completedAt: new FormControl<string | null | undefined>(undefined),
			createdAt: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			period: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			renewalAvailable: new FormControl<boolean | null | undefined>(undefined),
			revokedAt: new FormControl<string | null | undefined>(undefined),
			serialNumber: new FormControl<string | null | undefined>(undefined),
			slotSize: new FormControl<CertificateSlotSize | null | undefined>(undefined),
			status: new FormControl<CertificateSummaryV2Status | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<CertificateDetailV2Type | null | undefined>(undefined, [Validators.required]),
			validEndAt: new FormControl<string | null | undefined>(undefined),
			validStartAt: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum CertificateSummaryV2Status { ISSUED = 0, CANCELED = 1, DENIED = 2, EXPIRED = 3, PENDING_ISSUANCE = 4, PENDING_REKEY = 5, PENDING_REVOCATION = 6, REVOKED = 7, UNUSED = 8 }

	export interface Pagination {

		/** URI to access the first page */
		first?: string | null;

		/** URI to access the last page */
		last?: string | null;

		/** URI to access the next page */
		next?: string | null;

		/** URI to access the previous page */
		previous?: string | null;

		/** Number of records available */
		total?: number | null;
	}
	export interface PaginationFormProperties {

		/** URI to access the first page */
		first: FormControl<string | null | undefined>,

		/** URI to access the last page */
		last: FormControl<string | null | undefined>,

		/** URI to access the next page */
		next: FormControl<string | null | undefined>,

		/** URI to access the previous page */
		previous: FormControl<string | null | undefined>,

		/** Number of records available */
		total: FormControl<number | null | undefined>,
	}
	export function CreatePaginationFormGroup() {
		return new FormGroup<PaginationFormProperties>({
			first: new FormControl<string | null | undefined>(undefined),
			last: new FormControl<string | null | undefined>(undefined),
			next: new FormControl<string | null | undefined>(undefined),
			previous: new FormControl<string | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DomainVerificationDetail extends DomainVerificationSummary {

		/**
		 * Contains information about the last Certificate Authority Authorization (CAA) Lookup details for the specified domain.
		 * In order for a domain to be eligible to be included in the certificate, the entire domain hierarchy must be scanned for DNS CAA records, as outlined by RFC 6844.
		 * The absence of any CAA records found in the domain hierarchy indicates that the domain may be included in the certificate. Alternatively, if CAA records are found when scanning the domain hierarchy, the domain may be included in the certificate as long as `godaddy.com` or `starfieldtech.com` is found in the DNS record value. However, if CAA records are found, yet `godaddy.com` or `starfieldtech.com` is not found in any CAA record's value, then we must drop the domain from the certificate request.
		 * In the case where there are repeated DNS errors when scanning the domain hierarchy for CAA records, thus ending in an unsuccessful scan, then the domain can still be included in the certificate provided the primary domain is not setup with DNSSEC. Conversely, if DNSSEC is found to be setup on the primary domain when scanning following repeated CAA failures, the domain must be dropped from the certificate request. Finally, if DNS errors persist to the point where a successful DNSSEC query could not be obtained, then the domain must be dropped from the certificate request.
		 */
		certificateAuthorityAuthorization?: DomainVerificationDetailCertificateAuthorityAuthorization;
	}
	export interface DomainVerificationDetailFormProperties extends DomainVerificationSummaryFormProperties {
	}
	export function CreateDomainVerificationDetailFormGroup() {
		return new FormGroup<DomainVerificationDetailFormProperties>({
			createdAt: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			dceToken: new FormControl<string | null | undefined>(undefined),
			domain: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			domainEntityId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			modifiedAt: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<DomainVerificationSummaryStatus | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<DomainVerificationSummaryType | null | undefined>(undefined, [Validators.required]),
			usage: new FormControl<DomainVerificationSummaryUsage | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DomainVerificationDetailCertificateAuthorityAuthorization {

		/** The date the certificate request completed processing. */
		completedAt?: string | null;

		/** Details all the individual DNS paths that were scanned for CAA records for this domain, as detailed by RFC 6844. This element not only contains the parts determined from parsing the domain, but also any CNAME or DNAME targets specified by any of those individual parts. */
		queryPaths?: Array<string>;

		/** Returns a list of fix recommendations if the query was unsuccessful, or if the domain was dropped from the certificate request, so that a subsequent certificate request with the specified domain will successfully pass its CAA scan. */
		recommendations?: Array<string>;

		/**
		 * Returns the status of the CAA Lookup for the specified domain:
		 * * `PENDING` - The CAA lookup has not yet been attempted for the specified domain.
		 * * `REMOVED_DNS_ERROR` - Repeated errors occurred while scanning for CAA records, thereby resulting in a DNSSEC scan. DNS errors then prevented the system from determining if DNSSEC was enabled for the specified domain, and it had to be removed from the certificate request.
		 * * `REMOVED_DNSSEC_ENABLED` - Repeated errors occurred while scanning for CAA records, thereby resulting in a DNSSEC scan. DNSSEC was determined to be enabled for the specified domain, and it had to be removed from the certificate request.
		 * * `REMOVED_NOT_FOUND_CA` - CAA records were found during the CAA lookup for the speicified domain, but `godaddy.com` or `starfieldtech.com` was not listed as a value, thereby not allowing us to issue a certificate with this domain. The specified domain was removed from the certificate request.
		 * * `REMOVED_UNKNOWN_CRITICAL_TAG` - A CAA record was found during the CAA lookup with its Critical bit set, as outlined by RFC 6844, yet the Tag of the CAA record was not understood (as outlined by RFC 6844). The specified domain was removed from the certificate request.
		 * * `SUCCESS_CAA` - The CAA lookup was successful for the specified domain, and the domain can remain in the certificate request.
		 * * `SUCCESS_DNSSEC` - Repeated errors occurred while scanning for CAA records, thereby resulting in a DNSSEC scan. The system detemined that DNSSEC was not enabled for the specified domain, so the domain is allowed to remain in the certificate request.
		 */
		status?: DomainVerificationDetailCertificateAuthorityAuthorizationStatus | null;
	}
	export interface DomainVerificationDetailCertificateAuthorityAuthorizationFormProperties {

		/** The date the certificate request completed processing. */
		completedAt: FormControl<string | null | undefined>,

		/**
		 * Returns the status of the CAA Lookup for the specified domain:
		 * * `PENDING` - The CAA lookup has not yet been attempted for the specified domain.
		 * * `REMOVED_DNS_ERROR` - Repeated errors occurred while scanning for CAA records, thereby resulting in a DNSSEC scan. DNS errors then prevented the system from determining if DNSSEC was enabled for the specified domain, and it had to be removed from the certificate request.
		 * * `REMOVED_DNSSEC_ENABLED` - Repeated errors occurred while scanning for CAA records, thereby resulting in a DNSSEC scan. DNSSEC was determined to be enabled for the specified domain, and it had to be removed from the certificate request.
		 * * `REMOVED_NOT_FOUND_CA` - CAA records were found during the CAA lookup for the speicified domain, but `godaddy.com` or `starfieldtech.com` was not listed as a value, thereby not allowing us to issue a certificate with this domain. The specified domain was removed from the certificate request.
		 * * `REMOVED_UNKNOWN_CRITICAL_TAG` - A CAA record was found during the CAA lookup with its Critical bit set, as outlined by RFC 6844, yet the Tag of the CAA record was not understood (as outlined by RFC 6844). The specified domain was removed from the certificate request.
		 * * `SUCCESS_CAA` - The CAA lookup was successful for the specified domain, and the domain can remain in the certificate request.
		 * * `SUCCESS_DNSSEC` - Repeated errors occurred while scanning for CAA records, thereby resulting in a DNSSEC scan. The system detemined that DNSSEC was not enabled for the specified domain, so the domain is allowed to remain in the certificate request.
		 */
		status: FormControl<DomainVerificationDetailCertificateAuthorityAuthorizationStatus | null | undefined>,
	}
	export function CreateDomainVerificationDetailCertificateAuthorityAuthorizationFormGroup() {
		return new FormGroup<DomainVerificationDetailCertificateAuthorityAuthorizationFormProperties>({
			completedAt: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<DomainVerificationDetailCertificateAuthorityAuthorizationStatus | null | undefined>(undefined),
		});

	}

	export enum DomainVerificationDetailCertificateAuthorityAuthorizationStatus { PENDING = 0, REMOVED_DNS_ERROR = 1, REMOVED_DNSSEC_ENABLED = 2, REMOVED_NOT_FOUND_CA = 3, REMOVED_UNKNOWN_CRITICAL_TAG = 4, SUCCESS_CAA = 5, SUCCESS_DNSSEC = 6 }

	export interface DomainVerificationSummary {

		/**
		 * Timestamp indicating when the domain verification process was started
		 * Required
		 */
		createdAt: string;

		/** DCE verification type token (if DCE verification type). */
		dceToken?: string | null;

		/**
		 * Domain name
		 * Required
		 */
		domain: string;

		/**
		 * A unique identifier that can be leveraged for retrieving domain verification related information. Primarily used when troubleshooting a request
		 * Required
		 */
		domainEntityId: number;

		/**
		 * Timestamp indicating when the domain verification process was last updated
		 * Required
		 */
		modifiedAt: string;

		/**
		 * Domain verification status:
		 * * `AWAITING` - Verification pending customer input
		 * * `INVALID` - SAN connected to a cancelled request
		 * * `COMPLETED` - Verification completed
		 * * `FAILED_VERIFICATION` - Verification failed
		 * * `PENDING_POSSIBLE_FRAUD` - Flagged for a system level fraud review
		 * * `VERIFIED_POSSIBLE_FRAUD` - Fraud detection reviewed but verified
		 * * `DROPPED` - SAN dropped from request
		 * * `REVOKED_CERT` - Certificate revoked
		 * * `DROPPED_GOOGLE_SAFE_BROWSING` - SAN dropped from request due to Google Safe Browsing check
		 * * `DROPPED_CERTIFICATE_AUTHORITY_AUTHORIZATION` - SAN dropped from request due to Certificate Authorization Authority DNS record check
		 * Required
		 */
		status: DomainVerificationSummaryStatus;

		/**
		 * Domain verification type:
		 * * `AUTO_GENERATED_DOMAIN_ACCESS_EMAIL_ADMIN` - Domain verified using domain control verification email sent to admin@<your.domain.com>
		 * * `AUTO_GENERATED_DOMAIN_ACCESS_EMAIL_ADMINSTRATOR` - Domain verified using domain control verification email sent to administrator@<your.domain.com>
		 * * `AUTO_GENERATED_DOMAIN_ACCESS_EMAIL_HOST_MASTER` - Domain verified using domain control verification email sent to hostmaster@<your.domain.com>
		 * * `AUTO_GENERATED_DOMAIN_ACCESS_EMAIL_POST_MASTER` - Domain verified using domain control verification email sent to postmaster@<your.domain.com>
		 * * `AUTO_GENERATED_DOMAIN_ACCESS_EMAIL_WEB_MASTER` - Domain verified using domain control verification email sent to webmaster@<your.domain.com>
		 * * `DOMAIN_ACCESS_EMAIL` - Domain verified using a domain access email
		 * * `DOMAIN_ACCESS_LETTER` - Customer completed a domain access letter which was used for domain verification
		 * * `DOMAIN_CONTROL_EMAIL` - Domain verified using HTML file or DNS zone file text value
		 * * `DOMAIN_ZONE_CONTROL` - DNS zone file containing a pre-generated text value used for domain verification
		 * * `MANUAL_DOMAIN_ACCESS_EMAIL` - DAE sent to an email address manually entered by a rep
		 * * `PREVIOUS_DOMAIN_ACCESS_EMAIL` - Customers domain access email for a prior certificate request was used for domain verification
		 * * `REGISTRATION_AUTHORITY_DOMAIN_ACCESS_LETTER` - Representative reviewed a customer provided domain access letter and verified domain
		 * * `REGISTRATION_AUTHORITY_DOMAIN_ZONE_CONTROL` - Representative verified domain using a manual domain zone control check
		 * * `REGISTRATION_AUTHORITY_OVERRIDE` - Representative verified domain using alternative methods
		 * * `REGISTRATION_AUTHORITY_WEBSITE_CONTROL` - Representative verified domain using a manual website control check
		 * * `CUSTOMER_OWNED` - Validated customer account information used for domain control verification
		 * * `WEBSITE_CONTROL` - HTML file in root website directory containing pre-generated value used for domain control verification
		 * Required
		 */
		type: DomainVerificationSummaryType;

		/**
		 * Type of domain name used for domain verification
		 * Required
		 */
		usage: DomainVerificationSummaryUsage;
	}
	export interface DomainVerificationSummaryFormProperties {

		/**
		 * Timestamp indicating when the domain verification process was started
		 * Required
		 */
		createdAt: FormControl<string | null | undefined>,

		/** DCE verification type token (if DCE verification type). */
		dceToken: FormControl<string | null | undefined>,

		/**
		 * Domain name
		 * Required
		 */
		domain: FormControl<string | null | undefined>,

		/**
		 * A unique identifier that can be leveraged for retrieving domain verification related information. Primarily used when troubleshooting a request
		 * Required
		 */
		domainEntityId: FormControl<number | null | undefined>,

		/**
		 * Timestamp indicating when the domain verification process was last updated
		 * Required
		 */
		modifiedAt: FormControl<string | null | undefined>,

		/**
		 * Domain verification status:
		 * * `AWAITING` - Verification pending customer input
		 * * `INVALID` - SAN connected to a cancelled request
		 * * `COMPLETED` - Verification completed
		 * * `FAILED_VERIFICATION` - Verification failed
		 * * `PENDING_POSSIBLE_FRAUD` - Flagged for a system level fraud review
		 * * `VERIFIED_POSSIBLE_FRAUD` - Fraud detection reviewed but verified
		 * * `DROPPED` - SAN dropped from request
		 * * `REVOKED_CERT` - Certificate revoked
		 * * `DROPPED_GOOGLE_SAFE_BROWSING` - SAN dropped from request due to Google Safe Browsing check
		 * * `DROPPED_CERTIFICATE_AUTHORITY_AUTHORIZATION` - SAN dropped from request due to Certificate Authorization Authority DNS record check
		 * Required
		 */
		status: FormControl<DomainVerificationSummaryStatus | null | undefined>,

		/**
		 * Domain verification type:
		 * * `AUTO_GENERATED_DOMAIN_ACCESS_EMAIL_ADMIN` - Domain verified using domain control verification email sent to admin@<your.domain.com>
		 * * `AUTO_GENERATED_DOMAIN_ACCESS_EMAIL_ADMINSTRATOR` - Domain verified using domain control verification email sent to administrator@<your.domain.com>
		 * * `AUTO_GENERATED_DOMAIN_ACCESS_EMAIL_HOST_MASTER` - Domain verified using domain control verification email sent to hostmaster@<your.domain.com>
		 * * `AUTO_GENERATED_DOMAIN_ACCESS_EMAIL_POST_MASTER` - Domain verified using domain control verification email sent to postmaster@<your.domain.com>
		 * * `AUTO_GENERATED_DOMAIN_ACCESS_EMAIL_WEB_MASTER` - Domain verified using domain control verification email sent to webmaster@<your.domain.com>
		 * * `DOMAIN_ACCESS_EMAIL` - Domain verified using a domain access email
		 * * `DOMAIN_ACCESS_LETTER` - Customer completed a domain access letter which was used for domain verification
		 * * `DOMAIN_CONTROL_EMAIL` - Domain verified using HTML file or DNS zone file text value
		 * * `DOMAIN_ZONE_CONTROL` - DNS zone file containing a pre-generated text value used for domain verification
		 * * `MANUAL_DOMAIN_ACCESS_EMAIL` - DAE sent to an email address manually entered by a rep
		 * * `PREVIOUS_DOMAIN_ACCESS_EMAIL` - Customers domain access email for a prior certificate request was used for domain verification
		 * * `REGISTRATION_AUTHORITY_DOMAIN_ACCESS_LETTER` - Representative reviewed a customer provided domain access letter and verified domain
		 * * `REGISTRATION_AUTHORITY_DOMAIN_ZONE_CONTROL` - Representative verified domain using a manual domain zone control check
		 * * `REGISTRATION_AUTHORITY_OVERRIDE` - Representative verified domain using alternative methods
		 * * `REGISTRATION_AUTHORITY_WEBSITE_CONTROL` - Representative verified domain using a manual website control check
		 * * `CUSTOMER_OWNED` - Validated customer account information used for domain control verification
		 * * `WEBSITE_CONTROL` - HTML file in root website directory containing pre-generated value used for domain control verification
		 * Required
		 */
		type: FormControl<DomainVerificationSummaryType | null | undefined>,

		/**
		 * Type of domain name used for domain verification
		 * Required
		 */
		usage: FormControl<DomainVerificationSummaryUsage | null | undefined>,
	}
	export function CreateDomainVerificationSummaryFormGroup() {
		return new FormGroup<DomainVerificationSummaryFormProperties>({
			createdAt: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			dceToken: new FormControl<string | null | undefined>(undefined),
			domain: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			domainEntityId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			modifiedAt: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<DomainVerificationSummaryStatus | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<DomainVerificationSummaryType | null | undefined>(undefined, [Validators.required]),
			usage: new FormControl<DomainVerificationSummaryUsage | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum DomainVerificationSummaryStatus { COMPLETED = 0, FAILED_VERIFICATION = 1, VERIFIED_POSSIBLE_FRAUD = 2, DROPPED = 3, DROPPED_CERTIFICATE_AUTHORITY_AUTHORIZATION = 4, DROPPED_GOOGLE_SAFE_BROWSING = 5, INVALID = 6, AWAITING = 7, PENDING_POSSIBLE_FRAUD = 8, REVOKED_CERTIFICATE = 9 }

	export enum DomainVerificationSummaryType { DOMAIN_CONTROL_EMAIL = 0, AUTO_GENERATED_DOMAIN_ACCESS_EMAIL_ADMIN = 1, AUTO_GENERATED_DOMAIN_ACCESS_EMAIL_ADMINSTRATOR = 2, AUTO_GENERATED_DOMAIN_ACCESS_EMAIL_HOST_MASTER = 3, AUTO_GENERATED_DOMAIN_ACCESS_EMAIL_POST_MASTER = 4, AUTO_GENERATED_DOMAIN_ACCESS_EMAIL_WEB_MASTER = 5, DOMAIN_ACCESS_EMAIL = 6, DOMAIN_ACCESS_LETTER = 7, DOMAIN_ZONE_CONTROL = 8, MANUAL_DOMAIN_ACCESS_EMAIL = 9, PREVIOUS_DOMAIN_ACCESS_EMAIL = 10, REGISTRATION_AUTHORITY_DOMAIN_ACCESS_LETTER = 11, REGISTRATION_AUTHORITY_DOMAIN_ZONE_CONTROL = 12, REGISTRATION_AUTHORITY_OVERRIDE = 13, REGISTRATION_AUTHORITY_WEBSITE_CONTROL = 14, CUSTOMER_OWNED = 15, WEBSITE_CONTROL = 16 }

	export enum DomainVerificationSummaryUsage { COMMON_NAME = 0, SUBJECT_ALTERNATIVE_NAME = 1 }

	export interface Error {

		/**
		 * Short identifier for the error, suitable for indicating the specific error within client code
		 * Required
		 */
		code: string;

		/** List of the specific fields, and the errors found with their contents */
		fields?: Array<ErrorField>;

		/** Description of the error */
		message?: string | null;
	}
	export interface ErrorFormProperties {

		/**
		 * Short identifier for the error, suitable for indicating the specific error within client code
		 * Required
		 */
		code: FormControl<string | null | undefined>,

		/** Description of the error */
		message: FormControl<string | null | undefined>,
	}
	export function CreateErrorFormGroup() {
		return new FormGroup<ErrorFormProperties>({
			code: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ErrorField {

		/**
		 * Short identifier for the error, suitable for indicating the specific error within client code
		 * Required
		 */
		code: string;

		/** Description of the problem with the contents of the field */
		message?: string | null;

		/**
		 * JSONPath referring to the field within the submitted data containing an error
		 * Required
		 */
		path: string;
	}
	export interface ErrorFieldFormProperties {

		/**
		 * Short identifier for the error, suitable for indicating the specific error within client code
		 * Required
		 */
		code: FormControl<string | null | undefined>,

		/** Description of the problem with the contents of the field */
		message: FormControl<string | null | undefined>,

		/**
		 * JSONPath referring to the field within the submitted data containing an error
		 * Required
		 */
		path: FormControl<string | null | undefined>,
	}
	export function CreateErrorFieldFormGroup() {
		return new FormGroup<ErrorFieldFormProperties>({
			code: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			message: new FormControl<string | null | undefined>(undefined),
			path: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ErrorLimit {
	}
	export interface ErrorLimitFormProperties {
	}
	export function CreateErrorLimitFormGroup() {
		return new FormGroup<ErrorLimitFormProperties>({
		});

	}

	export interface ExternalAccountBinding {

		/**
		 * ACME directory resource URL.
		 * Required
		 */
		directoryUrl: string;

		/**
		 * EAB HMAC key for the ACME account
		 * Required
		 */
		hmacKey: string;

		/**
		 * EAB key identifier for the ACME account.
		 * Required
		 */
		keyId: string;
	}
	export interface ExternalAccountBindingFormProperties {

		/**
		 * ACME directory resource URL.
		 * Required
		 */
		directoryUrl: FormControl<string | null | undefined>,

		/**
		 * EAB HMAC key for the ACME account
		 * Required
		 */
		hmacKey: FormControl<string | null | undefined>,

		/**
		 * EAB key identifier for the ACME account.
		 * Required
		 */
		keyId: FormControl<string | null | undefined>,
	}
	export function CreateExternalAccountBindingFormGroup() {
		return new FormGroup<ExternalAccountBindingFormProperties>({
			directoryUrl: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			hmacKey: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			keyId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface JurisdictionOfIncorporation {
		city?: string | null;

		/** Required */
		country: string;
		county?: string | null;
		state?: string | null;
	}
	export interface JurisdictionOfIncorporationFormProperties {
		city: FormControl<string | null | undefined>,

		/** Required */
		country: FormControl<string | null | undefined>,
		county: FormControl<string | null | undefined>,
		state: FormControl<string | null | undefined>,
	}
	export function CreateJurisdictionOfIncorporationFormGroup() {
		return new FormGroup<JurisdictionOfIncorporationFormProperties>({
			city: new FormControl<string | null | undefined>(undefined),
			country: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			county: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PEMCertificates {

		/**
		 * End entity certificate in PEM format
		 * Required
		 */
		certificate: string;

		/** CA Cross Intermediate certificate in PEM format */
		cross?: string | null;

		/** CA Signing Intermediate certificate in PEM format */
		intermediate?: string | null;

		/** CA Root certificate in PEM format */
		root?: string | null;
	}
	export interface PEMCertificatesFormProperties {

		/**
		 * End entity certificate in PEM format
		 * Required
		 */
		certificate: FormControl<string | null | undefined>,

		/** CA Cross Intermediate certificate in PEM format */
		cross: FormControl<string | null | undefined>,

		/** CA Signing Intermediate certificate in PEM format */
		intermediate: FormControl<string | null | undefined>,

		/** CA Root certificate in PEM format */
		root: FormControl<string | null | undefined>,
	}
	export function CreatePEMCertificatesFormGroup() {
		return new FormGroup<PEMCertificatesFormProperties>({
			certificate: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			cross: new FormControl<string | null | undefined>(undefined),
			intermediate: new FormControl<string | null | undefined>(undefined),
			root: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Create a pending order for certificate
		 * <p>Creating a certificate order can be a long running asynchronous operation in the PKI workflow. The PKI API supports 2 options for getting the completion stateful actions for this asynchronous operations: 1) by polling operations -- see /v1/certificates/{certificateId}/actions 2) via WebHook style callback -- see '/v1/certificates/{certificateId}/callback'.</p>
		 * Post v1/certificates
		 * @param {CertificateCreate} requestBody The certificate order information
		 * @return {void} 
		 */
		Certificate_create(requestBody: CertificateCreate): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/certificates', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Validate a pending order for certificate
		 * Post v1/certificates/validate
		 * @param {CertificateCreate} requestBody The certificate order info
		 * @return {void} 
		 */
		Certificate_validate(requestBody: CertificateCreate): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/certificates/validate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieve certificate details
		 * Once the certificate order has been created, this method can be used to check the status of the certificate. This method can also be used to retrieve details of the certificate.
		 * Get v1/certificates/{certificateId}
		 * @param {string} certificateId Certificate id to lookup
		 * @return {Certificate} Certificate details retrieved
		 */
		Certificate_get(certificateId: string): Observable<Certificate> {
			return this.http.get<Certificate>(this.baseUri + 'v1/certificates/' + (certificateId == null ? '' : encodeURIComponent(certificateId)), {});
		}

		/**
		 * Retrieve all certificate actions
		 * This method is used to retrieve all stateful actions relating to a certificate lifecycle.
		 * Get v1/certificates/{certificateId}/actions
		 * @param {string} certificateId Certificate id to register for callback
		 * @return {Array<CertificateAction>} Action retrieval successful
		 */
		Certificate_action_retrieve(certificateId: string): Observable<Array<CertificateAction>> {
			return this.http.get<Array<CertificateAction>>(this.baseUri + 'v1/certificates/' + (certificateId == null ? '' : encodeURIComponent(certificateId)) + '/actions', {});
		}

		/**
		 * Unregister system callback
		 * Unregister the callback for a particular certificate.
		 * Delete v1/certificates/{certificateId}/callback
		 * @param {string} certificateId Certificate id to unregister callback
		 * @return {void} 
		 */
		Certificate_callback_delete(certificateId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/certificates/' + (certificateId == null ? '' : encodeURIComponent(certificateId)) + '/callback', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieve system stateful action callback url
		 * This method is used to retrieve the registered callback url for a certificate.
		 * Get v1/certificates/{certificateId}/callback
		 * @param {string} certificateId Certificate id to register for stateful action callback
		 * @return {CertificateCallback} Callback registered
		 */
		Certificate_callback_get(certificateId: string): Observable<CertificateCallback> {
			return this.http.get<CertificateCallback>(this.baseUri + 'v1/certificates/' + (certificateId == null ? '' : encodeURIComponent(certificateId)) + '/callback', {});
		}

		/**
		 * Register of certificate action callback
		 * This method is used to register/replace url for callbacks for stateful actions relating to a certificate lifecycle. The callback url is a Webhook style pattern and will receive POST http requests with json body defined in the CertificateAction model definition for each certificate action.  Only one callback URL is allowed to be registered for each certificateId, so it will replace a previous registration.
		 * Put v1/certificates/{certificateId}/callback
		 * @param {string} certificateId Certificate id to register/replace for callback
		 * @param {string} callbackUrl Callback url registered/replaced to receive stateful actions
		 * @return {void} 
		 */
		Certificate_callback_replace(certificateId: string, callbackUrl: string): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'v1/certificates/' + (certificateId == null ? '' : encodeURIComponent(certificateId)) + '/callback&callbackUrl=' + (callbackUrl == null ? '' : encodeURIComponent(callbackUrl)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Cancel a pending certificate
		 * Use the cancel call to cancel a pending certificate order.
		 * Post v1/certificates/{certificateId}/cancel
		 * @param {string} certificateId Certificate id to cancel
		 * @return {void} 
		 */
		Certificate_cancel(certificateId: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/certificates/' + (certificateId == null ? '' : encodeURIComponent(certificateId)) + '/cancel', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Download certificate
		 * Get v1/certificates/{certificateId}/download
		 * @param {string} certificateId Certificate id to download
		 * @return {CertificateBundle} Certificate retrieved
		 */
		Certificate_download(certificateId: string): Observable<CertificateBundle> {
			return this.http.get<CertificateBundle>(this.baseUri + 'v1/certificates/' + (certificateId == null ? '' : encodeURIComponent(certificateId)) + '/download', {});
		}

		/**
		 * Retrieve email history
		 * This method can be used to retrieve all emails sent for a certificate.
		 * Get v1/certificates/{certificateId}/email/history
		 * @param {string} certificateId Certificate id to retrieve email history
		 * @return {CertificateEmailHistory} Email history retrieval successful
		 */
		Certificate_email_history(certificateId: string): Observable<CertificateEmailHistory> {
			return this.http.get<CertificateEmailHistory>(this.baseUri + 'v1/certificates/' + (certificateId == null ? '' : encodeURIComponent(certificateId)) + '/email/history', {});
		}

		/**
		 * Add alternate email address
		 * This method adds an alternate email address to a certificate order and re-sends all existing request emails to that address.
		 * Post v1/certificates/{certificateId}/email/resend/{emailAddress}
		 * @param {string} certificateId Certificate id to resend emails
		 * @param {string} emailAddress Specific email address to resend email
		 * @return {CertificateEmailHistory} Alternate email address added and emails re-sent
		 */
		Certificate_alternate_email_address(certificateId: string, emailAddress: string): Observable<CertificateEmailHistory> {
			return this.http.post<CertificateEmailHistory>(this.baseUri + 'v1/certificates/' + (certificateId == null ? '' : encodeURIComponent(certificateId)) + '/email/resend/' + (emailAddress == null ? '' : encodeURIComponent(emailAddress)), null, {});
		}

		/**
		 * Resend an email
		 * This method can be used to resend emails by providing the certificate id and the email id
		 * Post v1/certificates/{certificateId}/email/{emailId}/resend
		 * @param {string} certificateId Certificate id to resend email
		 * @param {string} emailId Email id for email to resend
		 * @return {void} 
		 */
		Certificate_resend_email(certificateId: string, emailId: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/certificates/' + (certificateId == null ? '' : encodeURIComponent(certificateId)) + '/email/' + (emailId == null ? '' : encodeURIComponent(emailId)) + '/resend', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Resend email to email address
		 * This method can be used to resend emails by providing the certificate id, the email id, and the recipient email address
		 * Post v1/certificates/{certificateId}/email/{emailId}/resend/{emailAddress}
		 * @param {string} certificateId Certificate id to resend emails
		 * @param {string} emailId Email id for email to resend
		 * @param {string} emailAddress Specific email address to resend email
		 * @return {void} 
		 */
		Certificate_resend_email_address(certificateId: string, emailId: string, emailAddress: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/certificates/' + (certificateId == null ? '' : encodeURIComponent(certificateId)) + '/email/' + (emailId == null ? '' : encodeURIComponent(emailId)) + '/resend/' + (emailAddress == null ? '' : encodeURIComponent(emailAddress)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Reissue active certificate
		 * <p>Rekeying is the process by which the private and public key is changed for a certificate. It is a simplified reissue,where only the CSR is changed. Reissuing is the process by which domain names are added or removed from a certificate.Once a request is validated and approved, the certificate will be reissued with the new common name and sans specified. Unlimited reissues are available during the lifetime of the certificate.New names added to a certificate that do not share the base domain of the common name may take additional time to validate. If this API call is made before a previous pending reissue has been validated and issued, the previous reissue request is automatically rejected and replaced with the current request.</p>
		 * Post v1/certificates/{certificateId}/reissue
		 * @param {string} certificateId Certificate id to reissue
		 * @param {CertificateReissue} requestBody The reissue request info
		 * @return {void} 
		 */
		Certificate_reissue(certificateId: string, requestBody: CertificateReissue): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/certificates/' + (certificateId == null ? '' : encodeURIComponent(certificateId)) + '/reissue', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Renew active certificate
		 * Renewal is the process by which the validity of a certificate is extended. Renewal is only available 60 days prior to expiration of the previous certificate and 30 days after the expiration of the previous certificate. The renewal supports modifying a set of the original certificate order information. Once a request is validated and approved, the certificate will be issued with extended validity. Since subject alternative names can be removed during a renewal, we require that you provide the subject alternative names you expect in the renewed certificate. New names added to a certificate that do not share the base domain of the common name may take additional time to validate. </p>
		 * Post v1/certificates/{certificateId}/renew
		 * @param {string} certificateId Certificate id to renew
		 * @param {CertificateRenew} requestBody The renew request info
		 * @return {void} 
		 */
		Certificate_renew(certificateId: string, requestBody: CertificateRenew): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/certificates/' + (certificateId == null ? '' : encodeURIComponent(certificateId)) + '/renew', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Revoke active certificate
		 * Use revoke call to revoke an active certificate, if the certificate has not been issued a 404 response will be returned.
		 * Post v1/certificates/{certificateId}/revoke
		 * @param {string} certificateId Certificate id to revoke
		 * @param {CertificateRevoke} requestBody The certificate revocation request
		 * @return {void} 
		 */
		Certificate_revoke(certificateId: string, requestBody: CertificateRevoke): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/certificates/' + (certificateId == null ? '' : encodeURIComponent(certificateId)) + '/revoke', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Site seal
		 * <p>This method is used to obtain the site seal information for an issued certificate. A site seal is a graphic that the certificate purchaser can embed on their web site to show their visitors information about their SSL certificate. If a web site visitor clicks on the site seal image, a pop-up page is displayed that contains detailed information about the SSL certificate. The site seal token is used to link the site seal graphic image to the appropriate certificate details pop-up page display when a user clicks on the site seal. The site seal images are expected to be static images and hosted on the reseller's website, to minimize delays for customer page load times.</p>
		 * Get v1/certificates/{certificateId}/siteSeal
		 * @param {string} certificateId Certificate id
		 * @param {Certificate_siteseal_getTheme} theme This value represents the visual theme of the seal. If seal doesn't exist, default values are used if params not present. If seal does exist, default values will not be used to update unless params present.
		 * @param {string} locale Determine locale for text displayed in seal image and verification page. If seal doesn't exist, default values are used if params not present. If seal does exist, default values will not be used to update unless params present.
		 * @return {CertificateSiteSeal} Site seal retrieved
		 */
		Certificate_siteseal_get(certificateId: string, theme: Certificate_siteseal_getTheme | null | undefined, locale: string | null | undefined): Observable<CertificateSiteSeal> {
			return this.http.get<CertificateSiteSeal>(this.baseUri + 'v1/certificates/' + (certificateId == null ? '' : encodeURIComponent(certificateId)) + '/siteSeal&theme=' + theme + '&locale=' + (locale == null ? '' : encodeURIComponent(locale)), {});
		}

		/**
		 * Check Domain Control
		 * Domain control is a means for verifying the domain included in the certificate order. This resource is useful for resellers that control the domains for their customers, and can expedite the verification process. See https://www.godaddy.com/help/verifying-your-domain-ownership-for-ssl-certificate-requests-html-or-dns-7452
		 * Post v1/certificates/{certificateId}/verifyDomainControl
		 * @param {string} certificateId Certificate id to lookup
		 * @return {void} 
		 */
		Certificate_verifydomaincontrol(certificateId: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/certificates/' + (certificateId == null ? '' : encodeURIComponent(certificateId)) + '/verifyDomainControl', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search for certificate details by entitlement
		 * Once the certificate order has been created, this method can be used to check the status of the certificate. This method can also be used to retrieve details of the certificates associated to an entitlement.
		 * Get v2/certificates
		 * @param {string} entitlementId Entitlement id to lookup
		 * @param {boolean} latest Fetch only the most recent certificate
		 * @return {Array<Certificate>} Certificate details retrieved
		 */
		Certificate_get_entitlement(entitlementId: string, latest: boolean | null | undefined): Observable<Array<Certificate>> {
			return this.http.get<Array<Certificate>>(this.baseUri + 'v2/certificates?entitlementId=' + (entitlementId == null ? '' : encodeURIComponent(entitlementId)) + '&latest=' + latest, {});
		}

		/**
		 * Download certificate by entitlement
		 * Get v2/certificates/download
		 * @param {string} entitlementId Entitlement id to download
		 * @return {CertificateBundle} Certificate retrieved
		 */
		Certificate_download_entitlement(entitlementId: string): Observable<CertificateBundle> {
			return this.http.get<CertificateBundle>(this.baseUri + 'v2/certificates/download?entitlementId=' + (entitlementId == null ? '' : encodeURIComponent(entitlementId)), {});
		}

		/**
		 * Retrieve customer's certificates
		 * This method can be used to retrieve a list of certificates for a specified customer. <ul><li>**shopperId** is **not the same** as **customerId**.  **shopperId** is a number of max length 10 digits (*ex:* 1234567890) whereas **customerId** is a UUIDv4 (*ex:* 295e3bc3-b3b9-4d95-aae5-ede41a994d13)</li></ul>
		 * Get v2/customers/{customerId}/certificates
		 * @param {string} customerId An identifier for a customer
		 * @param {string} offset Number of results to skip for pagination
		 * @param {string} limit Maximum number of items to return
		 * @return {CertificateSummariesV2} Customer certificate information retrieved.
		 */
		GetCustomerCertificatesByCustomerId(customerId: string, offset: string | null | undefined, limit: string | null | undefined): Observable<CertificateSummariesV2> {
			return this.http.get<CertificateSummariesV2>(this.baseUri + 'v2/customers/' + (customerId == null ? '' : encodeURIComponent(customerId)) + '/certificates&offset=' + (offset == null ? '' : encodeURIComponent(offset)) + '&limit=' + (limit == null ? '' : encodeURIComponent(limit)), {});
		}

		/**
		 * Retrieves the external account binding for the specified customer
		 * Use this endpoint to retrieve a key identifier and Hash-based Message Authentication Code (HMAC) key for Automated Certificate Management Environment (ACME) External Account Binding (EAB). These credentials can be used with an ACME client that supports EAB (ex. CertBot) to automate the issuance request and deployment of DV SSL certificates
		 * Get v2/customers/{customerId}/certificates/acme/externalAccountBinding
		 * @param {string} customerId An identifier for a customer
		 * @return {ExternalAccountBinding} Acme key identifier and HMAC key for the external account binding. Directory URI is also provided for making ACME requests.
		 */
		GetAcmeExternalAccountBinding(customerId: string): Observable<ExternalAccountBinding> {
			return this.http.get<ExternalAccountBinding>(this.baseUri + 'v2/customers/' + (customerId == null ? '' : encodeURIComponent(customerId)) + '/certificates/acme/externalAccountBinding', {});
		}

		/**
		 * Retrieve individual certificate details
		 * Once the certificate order has been created, this method can be used to check the status of the certificate. This method can also be used to retrieve details of the certificate. <ul><li>**shopperId** is **not the same** as **customerId**. **shopperId** is a number of max length 10 digits (*ex:* 1234567890) whereas **customerId** is a UUIDv4 (*ex:* 295e3bc3-b3b9-4d95-aae5-ede41a994d13)</li></ul>
		 * Get v2/customers/{customerId}/certificates/{certificateId}
		 * @param {string} customerId An identifier for a customer
		 * @param {string} certificateId Certificate id to lookup
		 * @return {CertificateDetailV2} Certificate details retrieved
		 */
		GetCertificateDetailByCertIdentifier(customerId: string, certificateId: string): Observable<CertificateDetailV2> {
			return this.http.get<CertificateDetailV2>(this.baseUri + 'v2/customers/' + (customerId == null ? '' : encodeURIComponent(customerId)) + '/certificates/' + (certificateId == null ? '' : encodeURIComponent(certificateId)), {});
		}

		/**
		 * Retrieve domain verification status
		 * This method can be used to retrieve the domain verification status for a certificate request.<ul><li>**shopperId** is **not the same** as **customerId**.  **shopperId** is a number of max length 10 digits (*ex:* 1234567890) whereas **customerId** is a UUIDv4 (*ex:* 295e3bc3-b3b9-4d95-aae5-ede41a994d13)</li></ul>"
		 * Get v2/customers/{customerId}/certificates/{certificateId}/domainVerifications
		 * @param {string} customerId An identifier for a customer
		 * @param {string} certificateId Certificate id to lookup
		 * @return {Array<DomainVerificationSummary>} Domain verification status list for specified certificateId.
		 */
		GetDomainInformationByCertificateId(customerId: string, certificateId: string): Observable<Array<DomainVerificationSummary>> {
			return this.http.get<Array<DomainVerificationSummary>>(this.baseUri + 'v2/customers/' + (customerId == null ? '' : encodeURIComponent(customerId)) + '/certificates/' + (certificateId == null ? '' : encodeURIComponent(certificateId)) + '/domainVerifications', {});
		}

		/**
		 * Retrieve detailed information for supplied domain
		 * Retrieve detailed information for supplied domain, including domain verification details and Certificate Authority Authorization (CAA) verification details. <ul><li>**shopperId** is **not the same** as **customerId**.  **shopperId** is a number of max length 10 digits (*ex:* 1234567890) whereas **customerId** is a UUIDv4 (*ex:* 295e3bc3-b3b9-4d95-aae5-ede41a994d13)</li></ul>
		 * Get v2/customers/{customerId}/certificates/{certificateId}/domainVerifications/{domain}
		 * @param {string} customerId An identifier for a customer
		 * @param {string} certificateId Certificate id to lookup
		 * @param {string} domain A valid domain name in the certificate request
		 * @return {DomainVerificationDetail} Retrieve detailed information for supplied domain, including domain verification details and Certificate Authority Authorization (CAA) verification details.
		 */
		GetDomainDetailsByDomain(customerId: string, certificateId: string, domain: string): Observable<DomainVerificationDetail> {
			return this.http.get<DomainVerificationDetail>(this.baseUri + 'v2/customers/' + (customerId == null ? '' : encodeURIComponent(customerId)) + '/certificates/' + (certificateId == null ? '' : encodeURIComponent(certificateId)) + '/domainVerifications/' + (domain == null ? '' : encodeURIComponent(domain)), {});
		}
	}

	export enum Certificate_siteseal_getTheme { DARK = 0, LIGHT = 1 }

}

