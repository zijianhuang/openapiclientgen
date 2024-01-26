import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** The customer receiving the document. */
	export interface AccountingCustomerParty {

		/**
		 * A party that can receive or send invoices
		 * Required
		 */
		party: Party;

		/** A list of legal and tax identifiers for this customer. */
		publicIdentifiers?: Array<PublicIdentifier>;
	}

	/** The customer receiving the document. */
	export interface AccountingCustomerPartyFormProperties {
	}
	export function CreateAccountingCustomerPartyFormGroup() {
		return new FormGroup<AccountingCustomerPartyFormProperties>({
		});

	}


	/** A party that can receive or send invoices */
	export interface Party {

		/**
		 * The address
		 * Required
		 */
		address: Address;

		/**
		 * The name of the company receiving the invoice
		 * Required
		 * Min length: 2
		 */
		companyName: string;

		/** Contact details for the invoice */
		contact?: Contact;
	}

	/** A party that can receive or send invoices */
	export interface PartyFormProperties {

		/**
		 * The name of the company receiving the invoice
		 * Required
		 * Min length: 2
		 */
		companyName: FormControl<string | null | undefined>,
	}
	export function CreatePartyFormGroup() {
		return new FormGroup<PartyFormProperties>({
			companyName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(2)]),
		});

	}


	/** The address */
	export interface Address {

		/**
		 * The name of the city. Mandatory in most countries.
		 * Min length: 2
		 */
		city?: string | null;

		/**
		 * An ISO 3166-1 alpha-2 country code.
		 * Required
		 */
		country: AddressCountry;

		/** An optional county name. */
		county?: string | null;

		/**
		 * The street name and number. Mandatory in most countries.
		 * Min length: 2
		 */
		street1?: string | null;

		/** The second street field. Use this if you used the first field for the building name. */
		street2?: string | null;

		/**
		 * The zipcode/postalzone. Mandatory unless the country does not have zip codes.
		 * Min length: 2
		 */
		zip?: string | null;
	}

	/** The address */
	export interface AddressFormProperties {

		/**
		 * The name of the city. Mandatory in most countries.
		 * Min length: 2
		 */
		city: FormControl<string | null | undefined>,

		/**
		 * An ISO 3166-1 alpha-2 country code.
		 * Required
		 */
		country: FormControl<AddressCountry | null | undefined>,

		/** An optional county name. */
		county: FormControl<string | null | undefined>,

		/**
		 * The street name and number. Mandatory in most countries.
		 * Min length: 2
		 */
		street1: FormControl<string | null | undefined>,

		/** The second street field. Use this if you used the first field for the building name. */
		street2: FormControl<string | null | undefined>,

		/**
		 * The zipcode/postalzone. Mandatory unless the country does not have zip codes.
		 * Min length: 2
		 */
		zip: FormControl<string | null | undefined>,
	}
	export function CreateAddressFormGroup() {
		return new FormGroup<AddressFormProperties>({
			city: new FormControl<string | null | undefined>(undefined, [Validators.minLength(2)]),
			country: new FormControl<AddressCountry | null | undefined>(undefined, [Validators.required]),
			county: new FormControl<string | null | undefined>(undefined),
			street1: new FormControl<string | null | undefined>(undefined, [Validators.minLength(2)]),
			street2: new FormControl<string | null | undefined>(undefined),
			zip: new FormControl<string | null | undefined>(undefined, [Validators.minLength(2)]),
		});

	}

	export enum AddressCountry { AD = 0, AE = 1, AF = 2, AG = 3, AI = 4, AL = 5, AM = 6, AO = 7, AQ = 8, AR = 9, AS = 10, AT = 11, AU = 12, AW = 13, AX = 14, AZ = 15, BA = 16, BB = 17, BD = 18, BE = 19, BF = 20, BG = 21, BH = 22, BI = 23, BJ = 24, BL = 25, BM = 26, BN = 27, BO = 28, BQ = 29, BR = 30, BS = 31, BT = 32, BV = 33, BW = 34, BY = 35, BZ = 36, CA = 37, CC = 38, CD = 39, CF = 40, CG = 41, CH = 42, CI = 43, CK = 44, CL = 45, CM = 46, CN = 47, CO = 48, CR = 49, CU = 50, CV = 51, CW = 52, CX = 53, CY = 54, CZ = 55, DE = 56, DJ = 57, DK = 58, DM = 59, DO = 60, DZ = 61, EC = 62, EE = 63, EG = 64, EH = 65, ER = 66, ES = 67, ET = 68, FI = 69, FJ = 70, FK = 71, FM = 72, FO = 73, FR = 74, GA = 75, GB = 76, GD = 77, GE = 78, GF = 79, GG = 80, GH = 81, GI = 82, GL = 83, GM = 84, GN = 85, GP = 86, GQ = 87, GR = 88, GS = 89, GT = 90, GU = 91, GW = 92, GY = 93, HK = 94, HM = 95, HN = 96, HR = 97, HT = 98, HU = 99, ID = 100, IE = 101, IL = 102, IM = 103, IN = 104, IO = 105, IQ = 106, IR = 107, IS = 108, IT = 109, JE = 110, JM = 111, JO = 112, JP = 113, KE = 114, KG = 115, KH = 116, KI = 117, KM = 118, KN = 119, KP = 120, KR = 121, KW = 122, KY = 123, KZ = 124, LA = 125, LB = 126, LC = 127, LI = 128, LK = 129, LR = 130, LS = 131, LT = 132, LU = 133, LV = 134, LY = 135, MA = 136, MC = 137, MD = 138, ME = 139, MF = 140, MG = 141, MH = 142, MK = 143, ML = 144, MM = 145, MN = 146, MO = 147, MP = 148, MQ = 149, MR = 150, MS = 151, MT = 152, MU = 153, MV = 154, MW = 155, MX = 156, MY = 157, MZ = 158, NA = 159, NC = 160, NE = 161, NF = 162, NG = 163, NI = 164, NL = 165, NO = 166, NP = 167, NR = 168, NU = 169, NZ = 170, OM = 171, PA = 172, PE = 173, PF = 174, PG = 175, PH = 176, PK = 177, PL = 178, PM = 179, PN = 180, PR = 181, PS = 182, PT = 183, PW = 184, PY = 185, QA = 186, RE = 187, RO = 188, RS = 189, RU = 190, RW = 191, SA = 192, SB = 193, SC = 194, SD = 195, SE = 196, SG = 197, SH = 198, SI = 199, SJ = 200, SK = 201, SL = 202, SM = 203, SN = 204, SO = 205, SR = 206, SS = 207, ST = 208, SV = 209, SX = 210, SY = 211, SZ = 212, TC = 213, TD = 214, TF = 215, TG = 216, TH = 217, TJ = 218, TK = 219, TL = 220, TM = 221, TN = 222, TO = 223, TR = 224, TT = 225, TV = 226, TW = 227, TZ = 228, UA = 229, UG = 230, UM = 231, US = 232, UY = 233, UZ = 234, VA = 235, VC = 236, VE = 237, VG = 238, VI = 239, VN = 240, VU = 241, WF = 242, WS = 243, XI = 244, YE = 245, YT = 246, ZA = 247, ZM = 248, ZW = 249 }


	/** Contact details for the invoice */
	export interface Contact {
		email?: string | null;
		firstName?: string | null;

		/**
		 * Only supported for AccountingCustomerParty.
		 * Max length: 20
		 */
		id?: string | null;
		lastName?: string | null;

		/** Max length: 24 */
		phone?: string | null;
	}

	/** Contact details for the invoice */
	export interface ContactFormProperties {
		email: FormControl<string | null | undefined>,
		firstName: FormControl<string | null | undefined>,

		/**
		 * Only supported for AccountingCustomerParty.
		 * Max length: 20
		 */
		id: FormControl<string | null | undefined>,
		lastName: FormControl<string | null | undefined>,

		/** Max length: 24 */
		phone: FormControl<string | null | undefined>,
	}
	export function CreateContactFormGroup() {
		return new FormGroup<ContactFormProperties>({
			email: new FormControl<string | null | undefined>(undefined),
			firstName: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(20)]),
			lastName: new FormControl<string | null | undefined>(undefined),
			phone: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(24)]),
		});

	}


	/** A public identifier for this customer. */
	export interface PublicIdentifier {

		/**
		 * The actual identifier.
		 * Required
		 * Min length: 1
		 */
		id: string;

		/**
		 * The scheme of the identifier. See <<_receiver_identifiers_list>> for a list.
		 * Required
		 * Min length: 3
		 */
		scheme: string;
	}

	/** A public identifier for this customer. */
	export interface PublicIdentifierFormProperties {

		/**
		 * The actual identifier.
		 * Required
		 * Min length: 1
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * The scheme of the identifier. See <<_receiver_identifiers_list>> for a list.
		 * Required
		 * Min length: 3
		 */
		scheme: FormControl<string | null | undefined>,
	}
	export function CreatePublicIdentifierFormGroup() {
		return new FormGroup<PublicIdentifierFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			scheme: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(3)]),
		});

	}


	/** The party sending the invoice. Most data for the AccountingSupplierParty is taken from the Storecove database, where your sender identity resides and has been validated. However, we provide a limited number of fields here that you can specify on an invoice-by-invoice basis. */
	export interface AccountingSupplierParty {

		/** A party that can send documents */
		party?: SenderParty;
	}

	/** The party sending the invoice. Most data for the AccountingSupplierParty is taken from the Storecove database, where your sender identity resides and has been validated. However, we provide a limited number of fields here that you can specify on an invoice-by-invoice basis. */
	export interface AccountingSupplierPartyFormProperties {
	}
	export function CreateAccountingSupplierPartyFormGroup() {
		return new FormGroup<AccountingSupplierPartyFormProperties>({
		});

	}


	/** A party that can send documents */
	export interface SenderParty {

		/** Contact details for the invoice */
		contact?: Contact;
	}

	/** A party that can send documents */
	export interface SenderPartyFormProperties {
	}
	export function CreateSenderPartyFormGroup() {
		return new FormGroup<SenderPartyFormProperties>({
		});

	}


	/** An additional property for the item */
	export interface AdditionalItemProperty {

		/**
		 * The name of the property.
		 * Required
		 * Min length: 1
		 */
		name: string;

		/**
		 * The value of the property.
		 * Required
		 */
		value: string;
	}

	/** An additional property for the item */
	export interface AdditionalItemPropertyFormProperties {

		/**
		 * The name of the property.
		 * Required
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The value of the property.
		 * Required
		 */
		value: FormControl<string | null | undefined>,
	}
	export function CreateAdditionalItemPropertyFormGroup() {
		return new FormGroup<AdditionalItemPropertyFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AdditionalTaxIdentifier {

		/**
		 * The ISO3166 country code to use this identifier for in case of consumerTaxMode.
		 * Max length: 2
		 * Min length: 2
		 */
		country?: string | null;

		/**
		 * The county/state inside the country code to use this identifier for in case of consumerTaxMode.
		 * Max length: 2
		 * Min length: 2
		 */
		county?: string | null;

		/** The Storecove assigned id for the AdditionalTaxIdentifier. */
		id?: number | null;

		/** The identifier. */
		identifier?: string | null;

		/**
		 * The scheme of the identifier.
		 * Max length: 64
		 * Min length: 2
		 */
		scheme?: string | null;

		/**
		 * The superscheme of the identifier.
		 * Max length: 64
		 * Min length: 2
		 */
		superscheme?: string | null;
	}
	export interface AdditionalTaxIdentifierFormProperties {

		/**
		 * The ISO3166 country code to use this identifier for in case of consumerTaxMode.
		 * Max length: 2
		 * Min length: 2
		 */
		country: FormControl<string | null | undefined>,

		/**
		 * The county/state inside the country code to use this identifier for in case of consumerTaxMode.
		 * Max length: 2
		 * Min length: 2
		 */
		county: FormControl<string | null | undefined>,

		/** The Storecove assigned id for the AdditionalTaxIdentifier. */
		id: FormControl<number | null | undefined>,

		/** The identifier. */
		identifier: FormControl<string | null | undefined>,

		/**
		 * The scheme of the identifier.
		 * Max length: 64
		 * Min length: 2
		 */
		scheme: FormControl<string | null | undefined>,

		/**
		 * The superscheme of the identifier.
		 * Max length: 64
		 * Min length: 2
		 */
		superscheme: FormControl<string | null | undefined>,
	}
	export function CreateAdditionalTaxIdentifierFormGroup() {
		return new FormGroup<AdditionalTaxIdentifierFormProperties>({
			country: new FormControl<string | null | undefined>(undefined, [Validators.minLength(2), Validators.maxLength(2)]),
			county: new FormControl<string | null | undefined>(undefined, [Validators.minLength(2), Validators.maxLength(2)]),
			id: new FormControl<number | null | undefined>(undefined),
			identifier: new FormControl<string | null | undefined>(undefined),
			scheme: new FormControl<string | null | undefined>(undefined, [Validators.minLength(2), Validators.maxLength(64)]),
			superscheme: new FormControl<string | null | undefined>(undefined, [Validators.minLength(2), Validators.maxLength(64)]),
		});

	}

	export interface AdditionalTaxIdentifierCreate {

		/**
		 * The ISO3166 country code to use this identifier for in case of consumerTaxMode.
		 * Required
		 * Max length: 2
		 * Min length: 2
		 */
		country: string;

		/**
		 * The county/state inside the country code to use this identifier for in case of consumerTaxMode. Leave empty to create an additional tax identifier for the entire country. For India, use the two last characters of ISO 3166-2:IN (https://en.wikipedia.org/wiki/States_and_union_territories_of_India).
		 * Max length: 2
		 * Min length: 2
		 */
		county?: string | null;

		/**
		 * The identifier.
		 * Required
		 */
		identifier: string;

		/**
		 * The scheme of the identifier.
		 * Required
		 * Max length: 64
		 * Min length: 2
		 */
		scheme: string;

		/**
		 * The superscheme of the identifier. Should always be "iso6523-actorid-upis".
		 * Required
		 * Max length: 64
		 * Min length: 2
		 */
		superscheme: string;

		/**
		 * The password to use to authenticate to a system through which to send the document, or to obtain tax authority approval to send it. This field is currently relevant only for India and mandatory when creating an IN tax identifier.
		 * Max length: 64
		 * Min length: 2
		 */
		third_party_password?: string | null;

		/**
		 * The username to use to authenticate to a system through which to send the document, or to obtain tax authority approval to send it. This field is currently relevant only for India and mandatory when creating an IN tax identifier.
		 * Max length: 64
		 * Min length: 2
		 */
		third_party_username?: string | null;
	}
	export interface AdditionalTaxIdentifierCreateFormProperties {

		/**
		 * The ISO3166 country code to use this identifier for in case of consumerTaxMode.
		 * Required
		 * Max length: 2
		 * Min length: 2
		 */
		country: FormControl<string | null | undefined>,

		/**
		 * The county/state inside the country code to use this identifier for in case of consumerTaxMode. Leave empty to create an additional tax identifier for the entire country. For India, use the two last characters of ISO 3166-2:IN (https://en.wikipedia.org/wiki/States_and_union_territories_of_India).
		 * Max length: 2
		 * Min length: 2
		 */
		county: FormControl<string | null | undefined>,

		/**
		 * The identifier.
		 * Required
		 */
		identifier: FormControl<string | null | undefined>,

		/**
		 * The scheme of the identifier.
		 * Required
		 * Max length: 64
		 * Min length: 2
		 */
		scheme: FormControl<string | null | undefined>,

		/**
		 * The superscheme of the identifier. Should always be "iso6523-actorid-upis".
		 * Required
		 * Max length: 64
		 * Min length: 2
		 */
		superscheme: FormControl<string | null | undefined>,

		/**
		 * The password to use to authenticate to a system through which to send the document, or to obtain tax authority approval to send it. This field is currently relevant only for India and mandatory when creating an IN tax identifier.
		 * Max length: 64
		 * Min length: 2
		 */
		third_party_password: FormControl<string | null | undefined>,

		/**
		 * The username to use to authenticate to a system through which to send the document, or to obtain tax authority approval to send it. This field is currently relevant only for India and mandatory when creating an IN tax identifier.
		 * Max length: 64
		 * Min length: 2
		 */
		third_party_username: FormControl<string | null | undefined>,
	}
	export function CreateAdditionalTaxIdentifierCreateFormGroup() {
		return new FormGroup<AdditionalTaxIdentifierCreateFormProperties>({
			country: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(2), Validators.maxLength(2)]),
			county: new FormControl<string | null | undefined>(undefined, [Validators.minLength(2), Validators.maxLength(2)]),
			identifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			scheme: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(2), Validators.maxLength(64)]),
			superscheme: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(2), Validators.maxLength(64)]),
			third_party_password: new FormControl<string | null | undefined>(undefined, [Validators.minLength(2), Validators.maxLength(64)]),
			third_party_username: new FormControl<string | null | undefined>(undefined, [Validators.minLength(2), Validators.maxLength(64)]),
		});

	}

	export interface AdditionalTaxIdentifierUpdate {

		/**
		 * The identifier.
		 * Required
		 */
		identifier: string;

		/**
		 * The password to use to authenticate to a system through which to send the document, or to obtain tax authority approval to send it. This field is currently relevant only for India and mandatory when creating an IN tax identifier.
		 * Max length: 64
		 * Min length: 2
		 */
		third_party_password?: string | null;

		/**
		 * The username to use to authenticate to a system through which to send the document, or to obtain tax authority approval to send it. This field is currently relevant only for India and mandatory when creating an IN tax identifier.
		 * Max length: 64
		 * Min length: 2
		 */
		third_party_username?: string | null;
	}
	export interface AdditionalTaxIdentifierUpdateFormProperties {

		/**
		 * The identifier.
		 * Required
		 */
		identifier: FormControl<string | null | undefined>,

		/**
		 * The password to use to authenticate to a system through which to send the document, or to obtain tax authority approval to send it. This field is currently relevant only for India and mandatory when creating an IN tax identifier.
		 * Max length: 64
		 * Min length: 2
		 */
		third_party_password: FormControl<string | null | undefined>,

		/**
		 * The username to use to authenticate to a system through which to send the document, or to obtain tax authority approval to send it. This field is currently relevant only for India and mandatory when creating an IN tax identifier.
		 * Max length: 64
		 * Min length: 2
		 */
		third_party_username: FormControl<string | null | undefined>,
	}
	export function CreateAdditionalTaxIdentifierUpdateFormGroup() {
		return new FormGroup<AdditionalTaxIdentifierUpdateFormProperties>({
			identifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			third_party_password: new FormControl<string | null | undefined>(undefined, [Validators.minLength(2), Validators.maxLength(64)]),
			third_party_username: new FormControl<string | null | undefined>(undefined, [Validators.minLength(2), Validators.maxLength(64)]),
		});

	}

	export interface Administration {

		/**
		 * The email address to send the received document to
		 * Max length: 128
		 * Min length: 5
		 */
		email?: string | null;

		/** The Storecove assigned id for the Administration. */
		id?: number | null;

		/** The LegalEntity the Administration belongs to. */
		legal_entity_id?: number | null;

		/** The version of the package. */
		package_version?: AdministrationPackage_version | null;

		/** How to package the purchase invoice. */
		packaging?: AdministrationPackaging | null;

		/** The id of the SenderEmailIdentity. If not provided, the Storecove default sender will be used */
		sender_email_identity_id?: number | null;
	}
	export interface AdministrationFormProperties {

		/**
		 * The email address to send the received document to
		 * Max length: 128
		 * Min length: 5
		 */
		email: FormControl<string | null | undefined>,

		/** The Storecove assigned id for the Administration. */
		id: FormControl<number | null | undefined>,

		/** The LegalEntity the Administration belongs to. */
		legal_entity_id: FormControl<number | null | undefined>,

		/** The version of the package. */
		package_version: FormControl<AdministrationPackage_version | null | undefined>,

		/** How to package the purchase invoice. */
		packaging: FormControl<AdministrationPackaging | null | undefined>,

		/** The id of the SenderEmailIdentity. If not provided, the Storecove default sender will be used */
		sender_email_identity_id: FormControl<number | null | undefined>,
	}
	export function CreateAdministrationFormGroup() {
		return new FormGroup<AdministrationFormProperties>({
			email: new FormControl<string | null | undefined>(undefined, [Validators.minLength(5), Validators.maxLength(128)]),
			id: new FormControl<number | null | undefined>(undefined),
			legal_entity_id: new FormControl<number | null | undefined>(undefined),
			package_version: new FormControl<AdministrationPackage_version | null | undefined>(undefined),
			packaging: new FormControl<AdministrationPackaging | null | undefined>(undefined),
			sender_email_identity_id: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum AdministrationPackage_version { peppol_bis_v3 = 0, aunz = 1, sg = 2 }

	export enum AdministrationPackaging { ubl = 0 }

	export interface AdministrationCreate {

		/**
		 * The email address to send the received document to
		 * Max length: 128
		 * Min length: 5
		 */
		email?: string | null;

		/** The LegalEntity the Administration belongs to. */
		legal_entity_id?: number | null;

		/** The version of the package. */
		package_version?: AdministrationPackage_version | null;

		/** How to package the purchase invoice. */
		packaging?: AdministrationPackaging | null;

		/** The id of the SenderEmailIdentity. If not provided, the Storecove default sender will be used */
		sender_email_identity_id?: number | null;
	}
	export interface AdministrationCreateFormProperties {

		/**
		 * The email address to send the received document to
		 * Max length: 128
		 * Min length: 5
		 */
		email: FormControl<string | null | undefined>,

		/** The LegalEntity the Administration belongs to. */
		legal_entity_id: FormControl<number | null | undefined>,

		/** The version of the package. */
		package_version: FormControl<AdministrationPackage_version | null | undefined>,

		/** How to package the purchase invoice. */
		packaging: FormControl<AdministrationPackaging | null | undefined>,

		/** The id of the SenderEmailIdentity. If not provided, the Storecove default sender will be used */
		sender_email_identity_id: FormControl<number | null | undefined>,
	}
	export function CreateAdministrationCreateFormGroup() {
		return new FormGroup<AdministrationCreateFormProperties>({
			email: new FormControl<string | null | undefined>(undefined, [Validators.minLength(5), Validators.maxLength(128)]),
			legal_entity_id: new FormControl<number | null | undefined>(undefined),
			package_version: new FormControl<AdministrationPackage_version | null | undefined>(undefined),
			packaging: new FormControl<AdministrationPackaging | null | undefined>(undefined),
			sender_email_identity_id: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface AdministrationUpdate {

		/**
		 * The email address to send the received document to
		 * Max length: 128
		 * Min length: 5
		 */
		email?: string | null;

		/** The version of the package. */
		package_version?: AdministrationPackage_version | null;

		/** How to package the purchase invoice. */
		packaging?: AdministrationPackaging | null;

		/** The id of the SenderEmailIdentity. If not provided, the Storecove default sender will be used */
		sender_email_identity_id?: number | null;
	}
	export interface AdministrationUpdateFormProperties {

		/**
		 * The email address to send the received document to
		 * Max length: 128
		 * Min length: 5
		 */
		email: FormControl<string | null | undefined>,

		/** The version of the package. */
		package_version: FormControl<AdministrationPackage_version | null | undefined>,

		/** How to package the purchase invoice. */
		packaging: FormControl<AdministrationPackaging | null | undefined>,

		/** The id of the SenderEmailIdentity. If not provided, the Storecove default sender will be used */
		sender_email_identity_id: FormControl<number | null | undefined>,
	}
	export function CreateAdministrationUpdateFormGroup() {
		return new FormGroup<AdministrationUpdateFormProperties>({
			email: new FormControl<string | null | undefined>(undefined, [Validators.minLength(5), Validators.maxLength(128)]),
			package_version: new FormControl<AdministrationPackage_version | null | undefined>(undefined),
			packaging: new FormControl<AdministrationPackaging | null | undefined>(undefined),
			sender_email_identity_id: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface AllowanceCharge {

		/** The amount for the allowance or charge, excluding tax. */
		amountExcludingTax?: number | null;

		/** DEPRECATED. Use amountExcludingTax. The amount for the allowance or charge, excluding VAT. */
		amountExcludingVat?: number | null;

		/** The amount for the allowance or charge, including tax. */
		amountIncludingTax?: number | null;

		/** The base amount for the allowance or charge, excluding tax. */
		baseAmountExcludingTax?: number | null;

		/** The base amount for the allowance or charge, including tax. */
		baseAmountIncludingTax?: number | null;

		/** The reason for the allowance or charge, free text */
		reason?: string | null;

		/** Do not use. Contact Storecove first if you want to use this field. */
		reasonCode?: string | null;
		tax?: Tax;

		/**
		 * An array of taxes, duties and fees for this invoice line. At this moment, multiple Tax items is allowed only for IN (India) and US (USA) taxes. All other countries can only have a single Tax item in this array.
		 * Minimum items: 0
		 */
		taxesDutiesFees?: Array<Tax>;
	}
	export interface AllowanceChargeFormProperties {

		/** The amount for the allowance or charge, excluding tax. */
		amountExcludingTax: FormControl<number | null | undefined>,

		/** DEPRECATED. Use amountExcludingTax. The amount for the allowance or charge, excluding VAT. */
		amountExcludingVat: FormControl<number | null | undefined>,

		/** The amount for the allowance or charge, including tax. */
		amountIncludingTax: FormControl<number | null | undefined>,

		/** The base amount for the allowance or charge, excluding tax. */
		baseAmountExcludingTax: FormControl<number | null | undefined>,

		/** The base amount for the allowance or charge, including tax. */
		baseAmountIncludingTax: FormControl<number | null | undefined>,

		/** The reason for the allowance or charge, free text */
		reason: FormControl<string | null | undefined>,

		/** Do not use. Contact Storecove first if you want to use this field. */
		reasonCode: FormControl<string | null | undefined>,
	}
	export function CreateAllowanceChargeFormGroup() {
		return new FormGroup<AllowanceChargeFormProperties>({
			amountExcludingTax: new FormControl<number | null | undefined>(undefined),
			amountExcludingVat: new FormControl<number | null | undefined>(undefined),
			amountIncludingTax: new FormControl<number | null | undefined>(undefined),
			baseAmountExcludingTax: new FormControl<number | null | undefined>(undefined),
			baseAmountIncludingTax: new FormControl<number | null | undefined>(undefined),
			reason: new FormControl<string | null | undefined>(undefined),
			reasonCode: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Tax {

		/** The amount of tax. Mandatory if taxSystem == 'tax_line_amounts'. However, it is best to use taxSystem tax_line_percentages and provide only the percentage, not the actual amount. The amount is then provided at the invoice level, in the taxSubtotals element. */
		amount?: number | null;

		/**
		 * The allowed values depend on the country of the tax:
		 * ++++
		 * <ul>    <li>        AU:        <ul>            <li>standard (10%, 5.5%)</li>            <li>zero_rated (0%)</li>            <li>export (0%)</li>            <li>exempt (0%)</li>            <li>outside_scope (0%)</li>        </ul>    </li>    <li>        EU:        <ul>            <li>standard (percentages country dependent)</li>            <li>zero_rated (0%)</li>            <li>reverse_charge (0%)</li>            <li>intra_community (0%)</li>            <li>export (0%)</li>            <li>exempt (0%)</li>            <li>outside_scope (0%)</li>        </ul>    </li>    <li>        IN:        <ul>            <li>igst (28%, 18%, 12%, 5%, 3%, 0.25%)</li>            <li>sgst (14%, 9%, 6%, 2.5%, 1.5%</li>            <li>cgst (14%, 9%, 6%, 2.5%, 1.5%</li>            <li>cess (any percentage)</li>            <li>state_cess (any percentage)</li>            <li>reverse_charge (0%)</li>            <li>export (0%)</li>            <li>exempt (0%)</li>            <li>outside_scope (0%)</li>            <li>zero_rated (0%)</li>        </ul>    </li>    <li>        JP:        <ul>            <li>standard (10%, 8%)</li>            <li>export (0%)</li>            <li>exempt (0%)</li>            <li>outside_scope (0%)</li>        </ul>    </li>    <li>        MY:        <ul>            <li>standard (10%, 6%, 5%)</li>            <li>zero_rated (0%)</li>        </ul>    </li>    <li>        NZ:        <ul>            <li>standard (15%)</li>            <li>zero_rated (0%)</li>            <li>export (0%)</li>            <li>exempt (0%)</li>            <li>outside_scope (0%)</li>        </ul>    </li>    <li>        SG:        <ul>            <li>standard (7%; 8% from 2023-01-01; 9% from 2024-01-01)</li>            <li>deemed_supply (7%; 8% from 2023-01-01; 9% from 2024-01-01)</li>            <li>srca_c (7%; 8% from 2023-01-01; 9% from 2024-01-01)</li>            <li>srovr (7%; NOT to be used from 2023-01-01)</li>            <li>srovr_rs (8% from 2023-01-01; 9% from 2024-01-01)</li>            <li>srovr_lvg (8% from 2023-01-01; 9% from 2024-01-01)</li>            <li>srlvg (8% from 2023-01-01; 9% from 2024-01-01)</li>            <li>srca_s (0%)</li>            <li>outside_scope (0%)</li>            <li>not_registered (0%)</li>            <li>zero_rated (0%)</li>            <li>regulation33_exempt (0%)</li>            <li>nonregulation33_exempt (0%)</li>            <li>export (0%)</li>        </ul>    </li>    <li>        US:        <ul>            <li>standard (any percentage)</li>            <li>export (0%)</li>            <li>exempt (0%)</li>            <li>outside_scope (0%)</li>        </ul>    </li></ul>
		 * ++++
		 */
		category?: TaxCategory | null;

		/**
		 * An ISO 3166-1 alpha-2 country code.
		 * Required
		 */
		country: AddressCountry;

		/** The percentage Tax. This should be a valid Tax percentage in the country at the time of the issueDate of this invoice. Mandatory if taxSystem == 'tax_line_percentages' */
		percentage?: number | null;
	}
	export interface TaxFormProperties {

		/** The amount of tax. Mandatory if taxSystem == 'tax_line_amounts'. However, it is best to use taxSystem tax_line_percentages and provide only the percentage, not the actual amount. The amount is then provided at the invoice level, in the taxSubtotals element. */
		amount: FormControl<number | null | undefined>,

		/**
		 * The allowed values depend on the country of the tax:
		 * ++++
		 * <ul>    <li>        AU:        <ul>            <li>standard (10%, 5.5%)</li>            <li>zero_rated (0%)</li>            <li>export (0%)</li>            <li>exempt (0%)</li>            <li>outside_scope (0%)</li>        </ul>    </li>    <li>        EU:        <ul>            <li>standard (percentages country dependent)</li>            <li>zero_rated (0%)</li>            <li>reverse_charge (0%)</li>            <li>intra_community (0%)</li>            <li>export (0%)</li>            <li>exempt (0%)</li>            <li>outside_scope (0%)</li>        </ul>    </li>    <li>        IN:        <ul>            <li>igst (28%, 18%, 12%, 5%, 3%, 0.25%)</li>            <li>sgst (14%, 9%, 6%, 2.5%, 1.5%</li>            <li>cgst (14%, 9%, 6%, 2.5%, 1.5%</li>            <li>cess (any percentage)</li>            <li>state_cess (any percentage)</li>            <li>reverse_charge (0%)</li>            <li>export (0%)</li>            <li>exempt (0%)</li>            <li>outside_scope (0%)</li>            <li>zero_rated (0%)</li>        </ul>    </li>    <li>        JP:        <ul>            <li>standard (10%, 8%)</li>            <li>export (0%)</li>            <li>exempt (0%)</li>            <li>outside_scope (0%)</li>        </ul>    </li>    <li>        MY:        <ul>            <li>standard (10%, 6%, 5%)</li>            <li>zero_rated (0%)</li>        </ul>    </li>    <li>        NZ:        <ul>            <li>standard (15%)</li>            <li>zero_rated (0%)</li>            <li>export (0%)</li>            <li>exempt (0%)</li>            <li>outside_scope (0%)</li>        </ul>    </li>    <li>        SG:        <ul>            <li>standard (7%; 8% from 2023-01-01; 9% from 2024-01-01)</li>            <li>deemed_supply (7%; 8% from 2023-01-01; 9% from 2024-01-01)</li>            <li>srca_c (7%; 8% from 2023-01-01; 9% from 2024-01-01)</li>            <li>srovr (7%; NOT to be used from 2023-01-01)</li>            <li>srovr_rs (8% from 2023-01-01; 9% from 2024-01-01)</li>            <li>srovr_lvg (8% from 2023-01-01; 9% from 2024-01-01)</li>            <li>srlvg (8% from 2023-01-01; 9% from 2024-01-01)</li>            <li>srca_s (0%)</li>            <li>outside_scope (0%)</li>            <li>not_registered (0%)</li>            <li>zero_rated (0%)</li>            <li>regulation33_exempt (0%)</li>            <li>nonregulation33_exempt (0%)</li>            <li>export (0%)</li>        </ul>    </li>    <li>        US:        <ul>            <li>standard (any percentage)</li>            <li>export (0%)</li>            <li>exempt (0%)</li>            <li>outside_scope (0%)</li>        </ul>    </li></ul>
		 * ++++
		 */
		category: FormControl<TaxCategory | null | undefined>,

		/**
		 * An ISO 3166-1 alpha-2 country code.
		 * Required
		 */
		country: FormControl<AddressCountry | null | undefined>,

		/** The percentage Tax. This should be a valid Tax percentage in the country at the time of the issueDate of this invoice. Mandatory if taxSystem == 'tax_line_percentages' */
		percentage: FormControl<number | null | undefined>,
	}
	export function CreateTaxFormGroup() {
		return new FormGroup<TaxFormProperties>({
			amount: new FormControl<number | null | undefined>(undefined),
			category: new FormControl<TaxCategory | null | undefined>(undefined),
			country: new FormControl<AddressCountry | null | undefined>(undefined, [Validators.required]),
			percentage: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum TaxCategory { standard = 0, zero_rated = 1, reverse_charge = 2, intra_community = 3, exempt = 4, export = 5, outside_scope = 6, regulation33_exempt = 7, nonregulation33_exempt = 8, deemed_supply = 9, srca_s = 10, srca_c = 11, not_registered = 12, igst = 13, cgst = 14, sgst = 15, cess = 16, state_cess = 17, srovr = 18, srovr_rs = 19, srovr_lvg = 20, srlvg = 21 }


	/** A document attachment to the invoice. */
	export interface Attachment {

		/**
		 * A description for the file attachment.
		 * Max length: 1024
		 */
		description?: string | null;

		/**
		 * The base64 encoded version of the document attachment.
		 * Required
		 * Min length: 5
		 */
		document: string;

		/**
		 * An id for the file attachment.
		 * Max length: 64
		 */
		documentId?: string | null;

		/** The name of the file attachment. */
		filename?: string | null;

		/**
		 * The document attachment mime type. Currently only application/pdf is allowed.
		 * Required
		 */
		mimeType: AttachmentMimeType;

		/** Whether or not this document is a visual representation of the invoice data. Note that although this property is not yet deprecated, using value 'true' is discouraged, since the invoice data itself is leading, not the image, and including an image may lead to confusion. Peppol no longer allows including primary images. */
		primaryImage?: boolean | null;
	}

	/** A document attachment to the invoice. */
	export interface AttachmentFormProperties {

		/**
		 * A description for the file attachment.
		 * Max length: 1024
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * The base64 encoded version of the document attachment.
		 * Required
		 * Min length: 5
		 */
		document: FormControl<string | null | undefined>,

		/**
		 * An id for the file attachment.
		 * Max length: 64
		 */
		documentId: FormControl<string | null | undefined>,

		/** The name of the file attachment. */
		filename: FormControl<string | null | undefined>,

		/**
		 * The document attachment mime type. Currently only application/pdf is allowed.
		 * Required
		 */
		mimeType: FormControl<AttachmentMimeType | null | undefined>,

		/** Whether or not this document is a visual representation of the invoice data. Note that although this property is not yet deprecated, using value 'true' is discouraged, since the invoice data itself is leading, not the image, and including an image may lead to confusion. Peppol no longer allows including primary images. */
		primaryImage: FormControl<boolean | null | undefined>,
	}
	export function CreateAttachmentFormGroup() {
		return new FormGroup<AttachmentFormProperties>({
			description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024)]),
			document: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(5)]),
			documentId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64)]),
			filename: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[a-zA-Z0-9]([a-zA-Z0-9._-]*[a-zA-Z0-9])?\.[a-zA-Z0-9_-]+$')]),
			mimeType: new FormControl<AttachmentMimeType | null | undefined>(undefined, [Validators.required]),
			primaryImage: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum AttachmentMimeType { 'application/pdf' = 0 }

	export interface CorpPass {

		/**
		 * The URL the CorpPass system will redirect to in case of a failure to perform identity verfication.
		 * Max length: 255
		 * Min length: 11
		 */
		client_redirect_fail_url?: string | null;

		/**
		 * The URL the CorpPass system will redirect to in case of successful identity verfication.
		 * Max length: 255
		 * Min length: 11
		 */
		client_redirect_success_url?: string | null;

		/**
		 * The CorpPass redirect URL.
		 * Max length: 255
		 * Min length: 11
		 */
		corppass_url?: string | null;

		/** Whether or not the CorpPass flow is enabled. */
		enabled?: boolean | null;

		/** The CorpPass flow type. */
		flow_type?: CorpPassFlow_type | null;

		/**
		 * The email of the person who is going to perform the CorpPass process.
		 * Max length: 128
		 * Min length: 2
		 */
		signer_email?: string | null;

		/**
		 * The name of the person who is going to perform the CorpPass process.
		 * Max length: 64
		 * Min length: 2
		 */
		signer_name?: string | null;

		/** Whether or not CorpPass is being simulated. */
		simulate_corppass?: boolean | null;

		/** The status of the CorpPass process. */
		status?: CorpPassStatus | null;
	}
	export interface CorpPassFormProperties {

		/**
		 * The URL the CorpPass system will redirect to in case of a failure to perform identity verfication.
		 * Max length: 255
		 * Min length: 11
		 */
		client_redirect_fail_url: FormControl<string | null | undefined>,

		/**
		 * The URL the CorpPass system will redirect to in case of successful identity verfication.
		 * Max length: 255
		 * Min length: 11
		 */
		client_redirect_success_url: FormControl<string | null | undefined>,

		/**
		 * The CorpPass redirect URL.
		 * Max length: 255
		 * Min length: 11
		 */
		corppass_url: FormControl<string | null | undefined>,

		/** Whether or not the CorpPass flow is enabled. */
		enabled: FormControl<boolean | null | undefined>,

		/** The CorpPass flow type. */
		flow_type: FormControl<CorpPassFlow_type | null | undefined>,

		/**
		 * The email of the person who is going to perform the CorpPass process.
		 * Max length: 128
		 * Min length: 2
		 */
		signer_email: FormControl<string | null | undefined>,

		/**
		 * The name of the person who is going to perform the CorpPass process.
		 * Max length: 64
		 * Min length: 2
		 */
		signer_name: FormControl<string | null | undefined>,

		/** Whether or not CorpPass is being simulated. */
		simulate_corppass: FormControl<boolean | null | undefined>,

		/** The status of the CorpPass process. */
		status: FormControl<CorpPassStatus | null | undefined>,
	}
	export function CreateCorpPassFormGroup() {
		return new FormGroup<CorpPassFormProperties>({
			client_redirect_fail_url: new FormControl<string | null | undefined>(undefined, [Validators.minLength(11), Validators.maxLength(255)]),
			client_redirect_success_url: new FormControl<string | null | undefined>(undefined, [Validators.minLength(11), Validators.maxLength(255)]),
			corppass_url: new FormControl<string | null | undefined>(undefined, [Validators.minLength(11), Validators.maxLength(255)]),
			enabled: new FormControl<boolean | null | undefined>(undefined),
			flow_type: new FormControl<CorpPassFlow_type | null | undefined>(undefined),
			signer_email: new FormControl<string | null | undefined>(undefined, [Validators.minLength(2), Validators.maxLength(128)]),
			signer_name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(2), Validators.maxLength(64)]),
			simulate_corppass: new FormControl<boolean | null | undefined>(undefined),
			status: new FormControl<CorpPassStatus | null | undefined>(undefined),
		});

	}

	export enum CorpPassFlow_type { corppass_flow_redirect = 0, corppass_flow_email = 1 }

	export enum CorpPassStatus { 'corppass_no_status,' = 0, 'corppass_initiated,' = 1, 'corppass_cancelled,' = 2, 'corppass_failed,' = 3, corppass_succeeded = 4 }

	export interface CorpPassCreate {

		/**
		 * The URL the CorpPass system will redirect to in case of a failure to perform identity verfication. Mandatory for flow_type="corppass_flow_redirect"
		 * Max length: 255
		 * Min length: 11
		 */
		client_redirect_fail_url?: string | null;

		/**
		 * The URL the CorpPass system will redirect to in case of successful identity verfication. Mandatory for flow_type="corppass_flow_redirect"
		 * Max length: 255
		 * Min length: 11
		 */
		client_redirect_success_url?: string | null;

		/** DEPRECATED. Whether or not to enable the CorpPass flow. Must be true if provided. */
		enabled?: boolean | null;

		/**
		 * The CorpPass flow type.
		 * Required
		 */
		flow_type: CorpPassFlow_type;

		/**
		 * The email of the person who is going to perform the CorpPass process. Mandatory for flow_type="corppass_flow_email"
		 * Max length: 128
		 * Min length: 2
		 */
		signer_email?: string | null;

		/**
		 * The name of the person who is going to perform the CorpPass process. Mandatory for flow_type="corppass_flow_email"
		 * Max length: 64
		 * Min length: 2
		 */
		signer_name?: string | null;

		/** Whether or not to simulate CorpPass. Instead of redirecting to a CorpPass URL, you will receive a redirect to a Storecove URL which will show a page with two buttons: success and fail. This makes development without having test CorpPass credentials possible. Note this only works in sandbox, not in the production environment. */
		simulate_corppass?: boolean | null;
	}
	export interface CorpPassCreateFormProperties {

		/**
		 * The URL the CorpPass system will redirect to in case of a failure to perform identity verfication. Mandatory for flow_type="corppass_flow_redirect"
		 * Max length: 255
		 * Min length: 11
		 */
		client_redirect_fail_url: FormControl<string | null | undefined>,

		/**
		 * The URL the CorpPass system will redirect to in case of successful identity verfication. Mandatory for flow_type="corppass_flow_redirect"
		 * Max length: 255
		 * Min length: 11
		 */
		client_redirect_success_url: FormControl<string | null | undefined>,

		/** DEPRECATED. Whether or not to enable the CorpPass flow. Must be true if provided. */
		enabled: FormControl<boolean | null | undefined>,

		/**
		 * The CorpPass flow type.
		 * Required
		 */
		flow_type: FormControl<CorpPassFlow_type | null | undefined>,

		/**
		 * The email of the person who is going to perform the CorpPass process. Mandatory for flow_type="corppass_flow_email"
		 * Max length: 128
		 * Min length: 2
		 */
		signer_email: FormControl<string | null | undefined>,

		/**
		 * The name of the person who is going to perform the CorpPass process. Mandatory for flow_type="corppass_flow_email"
		 * Max length: 64
		 * Min length: 2
		 */
		signer_name: FormControl<string | null | undefined>,

		/** Whether or not to simulate CorpPass. Instead of redirecting to a CorpPass URL, you will receive a redirect to a Storecove URL which will show a page with two buttons: success and fail. This makes development without having test CorpPass credentials possible. Note this only works in sandbox, not in the production environment. */
		simulate_corppass: FormControl<boolean | null | undefined>,
	}
	export function CreateCorpPassCreateFormGroup() {
		return new FormGroup<CorpPassCreateFormProperties>({
			client_redirect_fail_url: new FormControl<string | null | undefined>(undefined, [Validators.minLength(11), Validators.maxLength(255)]),
			client_redirect_success_url: new FormControl<string | null | undefined>(undefined, [Validators.minLength(11), Validators.maxLength(255)]),
			enabled: new FormControl<boolean | null | undefined>(undefined),
			flow_type: new FormControl<CorpPassFlow_type | null | undefined>(undefined, [Validators.required]),
			signer_email: new FormControl<string | null | undefined>(undefined, [Validators.minLength(2), Validators.maxLength(128)]),
			signer_name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(2), Validators.maxLength(64)]),
			simulate_corppass: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** An ISO 3166-1 alpha-2 country code. */
	export enum Country { AD = 0, AE = 1, AF = 2, AG = 3, AI = 4, AL = 5, AM = 6, AO = 7, AQ = 8, AR = 9, AS = 10, AT = 11, AU = 12, AW = 13, AX = 14, AZ = 15, BA = 16, BB = 17, BD = 18, BE = 19, BF = 20, BG = 21, BH = 22, BI = 23, BJ = 24, BL = 25, BM = 26, BN = 27, BO = 28, BQ = 29, BR = 30, BS = 31, BT = 32, BV = 33, BW = 34, BY = 35, BZ = 36, CA = 37, CC = 38, CD = 39, CF = 40, CG = 41, CH = 42, CI = 43, CK = 44, CL = 45, CM = 46, CN = 47, CO = 48, CR = 49, CU = 50, CV = 51, CW = 52, CX = 53, CY = 54, CZ = 55, DE = 56, DJ = 57, DK = 58, DM = 59, DO = 60, DZ = 61, EC = 62, EE = 63, EG = 64, EH = 65, ER = 66, ES = 67, ET = 68, FI = 69, FJ = 70, FK = 71, FM = 72, FO = 73, FR = 74, GA = 75, GB = 76, GD = 77, GE = 78, GF = 79, GG = 80, GH = 81, GI = 82, GL = 83, GM = 84, GN = 85, GP = 86, GQ = 87, GR = 88, GS = 89, GT = 90, GU = 91, GW = 92, GY = 93, HK = 94, HM = 95, HN = 96, HR = 97, HT = 98, HU = 99, ID = 100, IE = 101, IL = 102, IM = 103, IN = 104, IO = 105, IQ = 106, IR = 107, IS = 108, IT = 109, JE = 110, JM = 111, JO = 112, JP = 113, KE = 114, KG = 115, KH = 116, KI = 117, KM = 118, KN = 119, KP = 120, KR = 121, KW = 122, KY = 123, KZ = 124, LA = 125, LB = 126, LC = 127, LI = 128, LK = 129, LR = 130, LS = 131, LT = 132, LU = 133, LV = 134, LY = 135, MA = 136, MC = 137, MD = 138, ME = 139, MF = 140, MG = 141, MH = 142, MK = 143, ML = 144, MM = 145, MN = 146, MO = 147, MP = 148, MQ = 149, MR = 150, MS = 151, MT = 152, MU = 153, MV = 154, MW = 155, MX = 156, MY = 157, MZ = 158, NA = 159, NC = 160, NE = 161, NF = 162, NG = 163, NI = 164, NL = 165, NO = 166, NP = 167, NR = 168, NU = 169, NZ = 170, OM = 171, PA = 172, PE = 173, PF = 174, PG = 175, PH = 176, PK = 177, PL = 178, PM = 179, PN = 180, PR = 181, PS = 182, PT = 183, PW = 184, PY = 185, QA = 186, RE = 187, RO = 188, RS = 189, RU = 190, RW = 191, SA = 192, SB = 193, SC = 194, SD = 195, SE = 196, SG = 197, SH = 198, SI = 199, SJ = 200, SK = 201, SL = 202, SM = 203, SN = 204, SO = 205, SR = 206, SS = 207, ST = 208, SV = 209, SX = 210, SY = 211, SZ = 212, TC = 213, TD = 214, TF = 215, TG = 216, TH = 217, TJ = 218, TK = 219, TL = 220, TM = 221, TN = 222, TO = 223, TR = 224, TT = 225, TV = 226, TW = 227, TZ = 228, UA = 229, UG = 230, UM = 231, US = 232, UY = 233, UZ = 234, VA = 235, VC = 236, VE = 237, VG = 238, VI = 239, VN = 240, VU = 241, WF = 242, WS = 243, XI = 244, YE = 245, YT = 246, ZA = 247, ZM = 248, ZW = 249 }

	export interface CountrySpecification {

		/** An ISO 3166-1 alpha-2 country code. */
		country?: AddressCountry | null;

		/** The receiver of the document. */
		receiver?: any;

		/** The region this country belongs to. Within this region exchanging invoices is well defined. Between regions some care needs to be taken and Storecove may help in automatically converting some items. Contact us for details of inter-regional document exchange. */
		region?: CountrySpecificationRegion | null;

		/** The sender of the document. */
		sender?: any;
	}
	export interface CountrySpecificationFormProperties {

		/** An ISO 3166-1 alpha-2 country code. */
		country: FormControl<AddressCountry | null | undefined>,

		/** The receiver of the document. */
		receiver: FormControl<any | null | undefined>,

		/** The region this country belongs to. Within this region exchanging invoices is well defined. Between regions some care needs to be taken and Storecove may help in automatically converting some items. Contact us for details of inter-regional document exchange. */
		region: FormControl<CountrySpecificationRegion | null | undefined>,

		/** The sender of the document. */
		sender: FormControl<any | null | undefined>,
	}
	export function CreateCountrySpecificationFormGroup() {
		return new FormGroup<CountrySpecificationFormProperties>({
			country: new FormControl<AddressCountry | null | undefined>(undefined),
			receiver: new FormControl<any | null | undefined>(undefined),
			region: new FormControl<CountrySpecificationRegion | null | undefined>(undefined),
			sender: new FormControl<any | null | undefined>(undefined),
		});

	}

	export enum CountrySpecificationRegion { eu_eea = 0, sg = 1, aunz = 2, in = 3, world = 4 }

	export interface CountrySpecificationIdentifier {

		/** The centralized identifier to use for routing in test cases, if the "centralized" proprerty is true. May not always be available depending on the country and network. */
		centalized_identifier_test?: string | null;

		/** Whether or not the identifier represents a centralized routing identifier. This is used in SG, AT and FR where all government invoices are routed to a central accesspoint with a single identifier. This field can only be present for routing identifiers. */
		centralized?: boolean | null;

		/** The centralized identifier to use for routing, if the "centralized" proprerty is true. */
		centralized_identifier?: string | null;

		/** Identifier description. */
		description?: string | null;

		/** The scheme of the identifier */
		scheme?: string | null;

		/** The numerical version of the scheme of the identifier */
		scheme_numercial?: string | null;

		/** The scheme type of the identifier. Currently always "iso6523-actorid-upis" */
		scheme_type?: CountrySpecificationIdentifierScheme_type | null;
	}
	export interface CountrySpecificationIdentifierFormProperties {

		/** The centralized identifier to use for routing in test cases, if the "centralized" proprerty is true. May not always be available depending on the country and network. */
		centalized_identifier_test: FormControl<string | null | undefined>,

		/** Whether or not the identifier represents a centralized routing identifier. This is used in SG, AT and FR where all government invoices are routed to a central accesspoint with a single identifier. This field can only be present for routing identifiers. */
		centralized: FormControl<boolean | null | undefined>,

		/** The centralized identifier to use for routing, if the "centralized" proprerty is true. */
		centralized_identifier: FormControl<string | null | undefined>,

		/** Identifier description. */
		description: FormControl<string | null | undefined>,

		/** The scheme of the identifier */
		scheme: FormControl<string | null | undefined>,

		/** The numerical version of the scheme of the identifier */
		scheme_numercial: FormControl<string | null | undefined>,

		/** The scheme type of the identifier. Currently always "iso6523-actorid-upis" */
		scheme_type: FormControl<CountrySpecificationIdentifierScheme_type | null | undefined>,
	}
	export function CreateCountrySpecificationIdentifierFormGroup() {
		return new FormGroup<CountrySpecificationIdentifierFormProperties>({
			centalized_identifier_test: new FormControl<string | null | undefined>(undefined),
			centralized: new FormControl<boolean | null | undefined>(undefined),
			centralized_identifier: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			scheme: new FormControl<string | null | undefined>(undefined),
			scheme_numercial: new FormControl<string | null | undefined>(undefined),
			scheme_type: new FormControl<CountrySpecificationIdentifierScheme_type | null | undefined>(undefined),
		});

	}

	export enum CountrySpecificationIdentifierScheme_type { 'iso6523-actorid-upis' = 0 }

	export interface CountrySpecifications {
		countries?: Array<CountrySpecification>;
	}
	export interface CountrySpecificationsFormProperties {
	}
	export function CreateCountrySpecificationsFormGroup() {
		return new FormGroup<CountrySpecificationsFormProperties>({
		});

	}


	/** The ISO 4217 currency code. */
	export enum CurrencyCode { AED = 0, AFN = 1, ALL = 2, AMD = 3, ANG = 4, AOA = 5, ARS = 6, AUD = 7, AWG = 8, AZN = 9, BAM = 10, BBD = 11, BDT = 12, BGN = 13, BHD = 14, BIF = 15, BMD = 16, BND = 17, BOB = 18, BOV = 19, BRL = 20, BSD = 21, BTN = 22, BWP = 23, BYN = 24, BYR = 25, BZD = 26, CAD = 27, CDF = 28, CHE = 29, CHF = 30, CHW = 31, CLF = 32, CLP = 33, CNY = 34, COP = 35, COU = 36, CRC = 37, CUC = 38, CUP = 39, CVE = 40, CZK = 41, DJF = 42, DKK = 43, DOP = 44, DZD = 45, EGP = 46, ERN = 47, ETB = 48, EUR = 49, FJD = 50, FKP = 51, GBP = 52, GEL = 53, GHS = 54, GIP = 55, GMD = 56, GNF = 57, GTQ = 58, GYD = 59, HKD = 60, HNL = 61, HRK = 62, HTG = 63, HUF = 64, IDR = 65, ILS = 66, INR = 67, IQD = 68, IRR = 69, ISK = 70, JMD = 71, JOD = 72, JPY = 73, KES = 74, KGS = 75, KHR = 76, KMF = 77, KPW = 78, KRW = 79, KWD = 80, KYD = 81, KZT = 82, LAK = 83, LBP = 84, LKR = 85, LRD = 86, LSL = 87, LYD = 88, MAD = 89, MDL = 90, MGA = 91, MKD = 92, MMK = 93, MNT = 94, MOP = 95, MRO = 96, MUR = 97, MVR = 98, MWK = 99, MXN = 100, MXV = 101, MYR = 102, MZN = 103, NAD = 104, NGN = 105, NIO = 106, NOK = 107, NPR = 108, NZD = 109, OMR = 110, PAB = 111, PEN = 112, PGK = 113, PHP = 114, PKR = 115, PLN = 116, PYG = 117, QAR = 118, RON = 119, RSD = 120, RUB = 121, RWF = 122, SAR = 123, SBD = 124, SCR = 125, SDG = 126, SEK = 127, SGD = 128, SHP = 129, SLE = 130, SLL = 131, SOS = 132, SRD = 133, SSP = 134, STD = 135, SYP = 136, SZL = 137, THB = 138, TJS = 139, TMT = 140, TND = 141, TOP = 142, TRY = 143, TTD = 144, TWD = 145, TZS = 146, UAH = 147, UGX = 148, USD = 149, USN = 150, UYI = 151, UYU = 152, UZS = 153, VEF = 154, VND = 155, VUV = 156, WST = 157, XAF = 158, XAG = 159, XAU = 160, XBA = 161, XBB = 162, XBC = 163, XBD = 164, XCD = 165, XDR = 166, XFU = 167, XOF = 168, XPD = 169, XPF = 170, XPT = 171, XSU = 172, XTS = 173, XUA = 174, XXX = 175, YER = 176, ZAR = 177, ZMW = 178 }

	export interface Delivery {

		/** The actual date of the delivery. Used only for Invoice */
		actualDate?: string | null;
		deliveryLocation?: DeliveryDeliveryLocation;

		/** The party receiving the shipment. */
		deliveryParty?: DeliveryParty;

		/** Use deliveryParty. The name of the party that took delivery. Used only for Invoice */
		deliveryPartyName?: string | null;

		/** The quantity of the delivery. Used only for Invoice */
		quantity?: number | null;

		/** The requested delivery period. Used only for DocumentOrder. */
		requestedDeliveryPeriod?: string | null;

		/**
		 * A text that the buyer requests to be printed on the packing labels. Used only for DocumentOrder.
		 * Max length: 128
		 */
		shippingMarks?: string | null;
	}
	export interface DeliveryFormProperties {

		/** The actual date of the delivery. Used only for Invoice */
		actualDate: FormControl<string | null | undefined>,

		/** Use deliveryParty. The name of the party that took delivery. Used only for Invoice */
		deliveryPartyName: FormControl<string | null | undefined>,

		/** The quantity of the delivery. Used only for Invoice */
		quantity: FormControl<number | null | undefined>,

		/** The requested delivery period. Used only for DocumentOrder. */
		requestedDeliveryPeriod: FormControl<string | null | undefined>,

		/**
		 * A text that the buyer requests to be printed on the packing labels. Used only for DocumentOrder.
		 * Max length: 128
		 */
		shippingMarks: FormControl<string | null | undefined>,
	}
	export function CreateDeliveryFormGroup() {
		return new FormGroup<DeliveryFormProperties>({
			actualDate: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[0-9]{4}-[0-9]{2}-[0-9]{2}$')]),
			deliveryPartyName: new FormControl<string | null | undefined>(undefined),
			quantity: new FormControl<number | null | undefined>(undefined),
			requestedDeliveryPeriod: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[0-9]{4}-[0-9]{2}-[0-9]{2} - [0-9]{4}-[0-9]{2}-[0-9]{2}$')]),
			shippingMarks: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128)]),
		});

	}

	export interface DeliveryDeliveryLocation {

		/** The address */
		address?: Address;

		/**
		 * The location identifier.
		 * Min length: 2
		 */
		id?: string | null;

		/**
		 * The name of the delivery location. Only used for DocumentOrder.
		 * Max length: 128
		 */
		locationName?: string | null;

		/** DEPRECATED. The schemeAgencyId of the location identifier (e.g. 'ZZZ') */
		schemeAgencyId?: string | null;

		/** The schemeId of the location identifier (e.g. 'EAN') */
		schemeId?: string | null;
	}
	export interface DeliveryDeliveryLocationFormProperties {

		/**
		 * The location identifier.
		 * Min length: 2
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * The name of the delivery location. Only used for DocumentOrder.
		 * Max length: 128
		 */
		locationName: FormControl<string | null | undefined>,

		/** DEPRECATED. The schemeAgencyId of the location identifier (e.g. 'ZZZ') */
		schemeAgencyId: FormControl<string | null | undefined>,

		/** The schemeId of the location identifier (e.g. 'EAN') */
		schemeId: FormControl<string | null | undefined>,
	}
	export function CreateDeliveryDeliveryLocationFormGroup() {
		return new FormGroup<DeliveryDeliveryLocationFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.minLength(2)]),
			locationName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128)]),
			schemeAgencyId: new FormControl<string | null | undefined>(undefined),
			schemeId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The party receiving the shipment. */
	export interface DeliveryParty {

		/**
		 * A party that can receive or send invoices
		 * Required
		 */
		party: Party;
	}

	/** The party receiving the shipment. */
	export interface DeliveryPartyFormProperties {
	}
	export function CreateDeliveryPartyFormGroup() {
		return new FormGroup<DeliveryPartyFormProperties>({
		});

	}

	export interface DeliveryTerms {

		/**
		 * The location to which the delivery terms refer.
		 * Max length: 128
		 */
		deliveryLocationId?: string | null;

		/**
		 * The incoterms:
		 * ++++
		 * <ul>    <li>        <strong>EXW – Ex Works</strong><br/>        The seller must give the buyer access to goods at an agreed location. From that moment, the buyer bears almost all costs and risks during the entire shipping process.<br/>    </li>    <li>        <strong>FCA – Free Carrier</strong><br/>        The seller must make the goods available at his own risk and expense at his own premises or at an agreed place. In both cases, the seller is responsible for the clearance of the goods for export. It can be agreed that the buyer must instruct the carrier to transfer a “Bill of Lading (BL)” with a note on board to the seller.    </li>    <li>        <strong>CPT – Carriage Paid To</strong><br/>        The seller has the same responsibilities as with FCA, but in this case also pays the delivery costs.    </li>    <li>        <strong>CIP – Carriage Insurance Paid To</strong><br/>        The same seller responsibilities as with CPT, only in this case the seller is obliged to pay the insurance with a high coverage ratio. Parties can agree separately to apply limited coverage.    </li>    <li>        <strong>DAP – Delivered At Place</strong><br/>        The seller bears the costs and risks during the transport of the goods to an agreed address. As soon as the goods have arrived at this address and are ready for unloading, the risk passes to the buyer.    </li>    <li>        <strong>DPU – Delivered at Place Unloaded</strong><br/>        The seller is responsible for the costs and risks of delivering goods to an agreed destination where goods can be unloaded for further transport. The selling party arranges customs and unloads the goods at the agreed place. The buyer arranges the customs clearance and any associated rights.    </li>    <li>        <strong>DDP – Delivered Duty Paid</strong><br/>        The seller bears the costs and risks of transport, carries out the export and import responsibilities and pays any import duties. As soon as the goods have arrived at the address and are ready for unloading, the risk passes to the buyer.    </li>    <li>        <strong>FAS – Free Alongside Ship</strong><br/>        The seller bears all costs and risks until the goods are delivered next to the ship. From that point, the risk is for the buyer and he also arranges the export clearance and import clearance.    </li>    <li>        <strong>FOB – Free On Board</strong><br/>        The seller bears all costs and risks until the goods are on board the ship and also arranges the export clearance. As soon as the goods have been delivered to the ship, the buyer bears all responsibilities.    </li>    <li>        <strong>CFR – Cost And Freight</strong><br/>        The same applies to the seller and buyer as with FOB, but in this case, the seller must also pay for the transport of the goods to the port.    </li>    <li>        <strong>CIF – Cost, Insurance, and Freight</strong><br/>        The seller has the same obligations as with CFR but also pays the (minimum) insurance costs. The buyer must pay for more comprehensive insurance.    </li></ul>
		 * ++++
		 */
		incoterms?: DeliveryTermsIncoterms | null;

		/**
		 * A description of special conditions relating to the delivery terms.
		 * Max length: 512
		 */
		specialTerms?: string | null;
	}
	export interface DeliveryTermsFormProperties {

		/**
		 * The location to which the delivery terms refer.
		 * Max length: 128
		 */
		deliveryLocationId: FormControl<string | null | undefined>,

		/**
		 * The incoterms:
		 * ++++
		 * <ul>    <li>        <strong>EXW – Ex Works</strong><br/>        The seller must give the buyer access to goods at an agreed location. From that moment, the buyer bears almost all costs and risks during the entire shipping process.<br/>    </li>    <li>        <strong>FCA – Free Carrier</strong><br/>        The seller must make the goods available at his own risk and expense at his own premises or at an agreed place. In both cases, the seller is responsible for the clearance of the goods for export. It can be agreed that the buyer must instruct the carrier to transfer a “Bill of Lading (BL)” with a note on board to the seller.    </li>    <li>        <strong>CPT – Carriage Paid To</strong><br/>        The seller has the same responsibilities as with FCA, but in this case also pays the delivery costs.    </li>    <li>        <strong>CIP – Carriage Insurance Paid To</strong><br/>        The same seller responsibilities as with CPT, only in this case the seller is obliged to pay the insurance with a high coverage ratio. Parties can agree separately to apply limited coverage.    </li>    <li>        <strong>DAP – Delivered At Place</strong><br/>        The seller bears the costs and risks during the transport of the goods to an agreed address. As soon as the goods have arrived at this address and are ready for unloading, the risk passes to the buyer.    </li>    <li>        <strong>DPU – Delivered at Place Unloaded</strong><br/>        The seller is responsible for the costs and risks of delivering goods to an agreed destination where goods can be unloaded for further transport. The selling party arranges customs and unloads the goods at the agreed place. The buyer arranges the customs clearance and any associated rights.    </li>    <li>        <strong>DDP – Delivered Duty Paid</strong><br/>        The seller bears the costs and risks of transport, carries out the export and import responsibilities and pays any import duties. As soon as the goods have arrived at the address and are ready for unloading, the risk passes to the buyer.    </li>    <li>        <strong>FAS – Free Alongside Ship</strong><br/>        The seller bears all costs and risks until the goods are delivered next to the ship. From that point, the risk is for the buyer and he also arranges the export clearance and import clearance.    </li>    <li>        <strong>FOB – Free On Board</strong><br/>        The seller bears all costs and risks until the goods are on board the ship and also arranges the export clearance. As soon as the goods have been delivered to the ship, the buyer bears all responsibilities.    </li>    <li>        <strong>CFR – Cost And Freight</strong><br/>        The same applies to the seller and buyer as with FOB, but in this case, the seller must also pay for the transport of the goods to the port.    </li>    <li>        <strong>CIF – Cost, Insurance, and Freight</strong><br/>        The seller has the same obligations as with CFR but also pays the (minimum) insurance costs. The buyer must pay for more comprehensive insurance.    </li></ul>
		 * ++++
		 */
		incoterms: FormControl<DeliveryTermsIncoterms | null | undefined>,

		/**
		 * A description of special conditions relating to the delivery terms.
		 * Max length: 512
		 */
		specialTerms: FormControl<string | null | undefined>,
	}
	export function CreateDeliveryTermsFormGroup() {
		return new FormGroup<DeliveryTermsFormProperties>({
			deliveryLocationId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128)]),
			incoterms: new FormControl<DeliveryTermsIncoterms | null | undefined>(undefined),
			specialTerms: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(512)]),
		});

	}

	export enum DeliveryTermsIncoterms { EXW = 0, FCA = 1, CPT = 2, CIP = 3, DAP = 4, DPU = 5, DDP = 6, FAS = 7, FOB = 8, CFR = 9, CIF = 10 }


	/** A participant to be discovered. */
	export interface DiscoverableParticipant {

		/** An array of document types to discover. The default is '["invoice", "creditnote"]'. This is ignored when only checking existence. */
		documentTypes?: Array<string>;

		/**
		 * The actual identifier.
		 * Required
		 * Min length: 1
		 */
		identifier: string;

		/**
		 * The meta scheme of the identifier. For Peppol this is always 'iso6523-actorid-upis'.
		 * Min length: 3
		 */
		metaScheme?: string | null;

		/**
		 * The network to check. Currently only 'peppol' is supported.
		 * Min length: 3
		 */
		network?: string | null;

		/**
		 * The scheme of the identifier. See <<_receiver_identifiers_list>> for a list.
		 * Required
		 * Min length: 3
		 */
		scheme: string;
	}

	/** A participant to be discovered. */
	export interface DiscoverableParticipantFormProperties {

		/**
		 * The actual identifier.
		 * Required
		 * Min length: 1
		 */
		identifier: FormControl<string | null | undefined>,

		/**
		 * The meta scheme of the identifier. For Peppol this is always 'iso6523-actorid-upis'.
		 * Min length: 3
		 */
		metaScheme: FormControl<string | null | undefined>,

		/**
		 * The network to check. Currently only 'peppol' is supported.
		 * Min length: 3
		 */
		network: FormControl<string | null | undefined>,

		/**
		 * The scheme of the identifier. See <<_receiver_identifiers_list>> for a list.
		 * Required
		 * Min length: 3
		 */
		scheme: FormControl<string | null | undefined>,
	}
	export function CreateDiscoverableParticipantFormGroup() {
		return new FormGroup<DiscoverableParticipantFormProperties>({
			identifier: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			metaScheme: new FormControl<string | null | undefined>(undefined, [Validators.minLength(3)]),
			network: new FormControl<string | null | undefined>(undefined, [Validators.minLength(3)]),
			scheme: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(3)]),
		});

	}


	/** A public identifier for this customer. */
	export interface DiscoveredParticipant {

		/** The response code. */
		code?: DiscoveredParticipantCode | null;

		/** Whether or not an 'OK' response means the document will be sent via Peppol, but delivered by email. This happens in the Belgian Hermes system where all identifiers have been registered, but if the receiver hasn't registered with a service provider, the Hermes system will send a PDF created from the electronic invoice and email that. The electronic document will itself not be emailed. Also see https://einvoice.belgium.be/en/article/send-structured-invoices-all-your-customers-hermes[Hermes^]. */
		email?: boolean | null;
	}

	/** A public identifier for this customer. */
	export interface DiscoveredParticipantFormProperties {

		/** The response code. */
		code: FormControl<DiscoveredParticipantCode | null | undefined>,

		/** Whether or not an 'OK' response means the document will be sent via Peppol, but delivered by email. This happens in the Belgian Hermes system where all identifiers have been registered, but if the receiver hasn't registered with a service provider, the Hermes system will send a PDF created from the electronic invoice and email that. The electronic document will itself not be emailed. Also see https://einvoice.belgium.be/en/article/send-structured-invoices-all-your-customers-hermes[Hermes^]. */
		email: FormControl<boolean | null | undefined>,
	}
	export function CreateDiscoveredParticipantFormGroup() {
		return new FormGroup<DiscoveredParticipantFormProperties>({
			code: new FormControl<DiscoveredParticipantCode | null | undefined>(undefined),
			email: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum DiscoveredParticipantCode { OK = 0, NOK = 1 }


	/** The invoice response to send or received. */
	export interface DocumentInvoiceResponse {

		/**
		 * A list of clarifications why a received invoice was rejected (RE) or under query (UQ) and what action to take.
		 * Minimum items: 0
		 */
		clarifications?: Array<InvoiceResponseClarification>;

		/** The date when the status became effective. Format: yyyy-mm-dd. */
		effectiveDate?: string | null;

		/** A note to add to the invoice reponse */
		note?: string | null;

		/**
		 * The response code. For details see https://docs.peppol.eu/poacc/upgrade-3/codelist/UNCL4343-T111/
		 * Required
		 */
		responseCode: DocumentInvoiceResponseResponseCode;
	}

	/** The invoice response to send or received. */
	export interface DocumentInvoiceResponseFormProperties {

		/** The date when the status became effective. Format: yyyy-mm-dd. */
		effectiveDate: FormControl<string | null | undefined>,

		/** A note to add to the invoice reponse */
		note: FormControl<string | null | undefined>,

		/**
		 * The response code. For details see https://docs.peppol.eu/poacc/upgrade-3/codelist/UNCL4343-T111/
		 * Required
		 */
		responseCode: FormControl<DocumentInvoiceResponseResponseCode | null | undefined>,
	}
	export function CreateDocumentInvoiceResponseFormGroup() {
		return new FormGroup<DocumentInvoiceResponseFormProperties>({
			effectiveDate: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[0-9]{4}-[0-9]{2}-[0-9]{2}$')]),
			note: new FormControl<string | null | undefined>(undefined),
			responseCode: new FormControl<DocumentInvoiceResponseResponseCode | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A clarification for why a received invoice was rejected (RE) or under query (UQ) and what action to take. */
	export interface InvoiceResponseClarification {

		/** A textual description of the clarification */
		clarification?: string | null;

		/** The code for the clarification. For details see https://docs.peppol.eu/poacc/upgrade-3/codelist/OPStatusReason/ and https://docs.peppol.eu/poacc/upgrade-3/codelist/OPStatusAction/ */
		clarificationCode?: InvoiceResponseClarificationClarificationCode | null;

		/** The type of the clarification. */
		clarificationCodeType?: InvoiceResponseClarificationClarificationCodeType | null;

		/**
		 * A list of conditions that triggered the error. This is only included for receiving in webhooks. You cannot currently send these conditions.
		 * Minimum items: 0
		 */
		conditions?: Array<InvoiceResponseCondition>;
	}

	/** A clarification for why a received invoice was rejected (RE) or under query (UQ) and what action to take. */
	export interface InvoiceResponseClarificationFormProperties {

		/** A textual description of the clarification */
		clarification: FormControl<string | null | undefined>,

		/** The code for the clarification. For details see https://docs.peppol.eu/poacc/upgrade-3/codelist/OPStatusReason/ and https://docs.peppol.eu/poacc/upgrade-3/codelist/OPStatusAction/ */
		clarificationCode: FormControl<InvoiceResponseClarificationClarificationCode | null | undefined>,

		/** The type of the clarification. */
		clarificationCodeType: FormControl<InvoiceResponseClarificationClarificationCodeType | null | undefined>,
	}
	export function CreateInvoiceResponseClarificationFormGroup() {
		return new FormGroup<InvoiceResponseClarificationFormProperties>({
			clarification: new FormControl<string | null | undefined>(undefined),
			clarificationCode: new FormControl<InvoiceResponseClarificationClarificationCode | null | undefined>(undefined),
			clarificationCodeType: new FormControl<InvoiceResponseClarificationClarificationCodeType | null | undefined>(undefined),
		});

	}

	export enum InvoiceResponseClarificationClarificationCode { NON = 0, REF = 1, LEG = 2, REC = 3, QUA = 4, DEL = 5, PRI = 6, QTY = 7, ITM = 8, PAY = 9, UNR = 10, FIN = 11, PPD = 12, OTH = 13, NOA = 14, PIN = 15, NIN = 16, CNF = 17, CNP = 18, CNA = 19 }

	export enum InvoiceResponseClarificationClarificationCodeType { OPStatusReason = 0, OPStatusAction = 1 }


	/** Specifies an error in the received invoice. */
	export interface InvoiceResponseCondition {

		/**
		 * The code of the field with the error. Find the element here: https://docs.peppol.eu/poacc/billing/3.0/syntax/ubl-invoice/ and then get the field's Business term.
		 * Required
		 */
		fieldCode: string;

		/**
		 * The (error) value of the field.
		 * Required
		 */
		fieldValue: string;
	}

	/** Specifies an error in the received invoice. */
	export interface InvoiceResponseConditionFormProperties {

		/**
		 * The code of the field with the error. Find the element here: https://docs.peppol.eu/poacc/billing/3.0/syntax/ubl-invoice/ and then get the field's Business term.
		 * Required
		 */
		fieldCode: FormControl<string | null | undefined>,

		/**
		 * The (error) value of the field.
		 * Required
		 */
		fieldValue: FormControl<string | null | undefined>,
	}
	export function CreateInvoiceResponseConditionFormGroup() {
		return new FormGroup<InvoiceResponseConditionFormProperties>({
			fieldCode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			fieldValue: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum DocumentInvoiceResponseResponseCode { AB = 0, IP = 1, UQ = 2, CA = 3, RE = 4, AP = 5, PD = 6 }


	/** The order to send. */
	export interface DocumentOrder {

		/**
		 * The buyer's accounting cost centre for this document.
		 * Min length: 1
		 */
		accountingCost?: string | null;

		/**
		 * An array of allowance charges.
		 * Minimum items: 0
		 */
		allowanceCharges?: Array<AllowanceCharge>;

		/**
		 * Total amount including Tax.
		 * Required
		 */
		amountIncludingTax: number;

		/**
		 * An array of attachments. You may provide up to 10 attchments, but the total size must not exceed 10MB after Base64 encoding.
		 * Maximum items: 10
		 */
		attachments?: Array<Attachment>;
		delivery?: Delivery;
		deliveryTerms?: DeliveryTerms;

		/** The ISO 4217 currency code. */
		documentCurrencyCode?: CurrencyCode | null;

		/**
		 * The number you assigned to the document.
		 * Required
		 * Min length: 1
		 */
		documentNumber: string;

		/**
		 * Format: yyyy-mm-dd.
		 * Required
		 */
		issueDate: string;

		/** Format: hh:mm:ss±zzzz */
		issueTime?: string | null;

		/**
		 * A note to add to the document
		 * Max length: 255
		 */
		note?: string | null;

		/**
		 * An array of order lines.
		 * Required
		 * Minimum items: 1
		 */
		orderLines: Array<OrderLine>;

		/** The type of this order. */
		orderType?: DocumentOrderOrderType | null;

		/** The payment terms of the document. */
		paymentTerms?: PaymentTerms;

		/**
		 * An array of references to other documents. Note that many syntaxes do not support multiple references of the same type in which case they will be concatenated with ','. Also, not all syntaxes and doucments support all documentTypes.
		 * Minimum items: 0
		 */
		references?: Array<Reference>;

		/**
		 * The party sending the order.
		 * Required
		 */
		sellerSupplierParty: SellerSupplierParty;

		/** The tax system used for the invoice. The system 'tax_line_percentages' is the only one currently supported. */
		taxSystem?: DocumentOrderTaxSystem | null;

		/** Format: ±zzzz, where ±zzzz is the difference from UTC, e.g. +0100 or -0900 etc. The timezone will also apply to the document issue date if this field is provided. */
		timeZone?: string | null;

		/** The period (or specific date) to which the invoice applies. Format: yyyy-mm-dd - yyyy-mm-dd. */
		validityPeriod?: string | null;
	}

	/** The order to send. */
	export interface DocumentOrderFormProperties {

		/**
		 * The buyer's accounting cost centre for this document.
		 * Min length: 1
		 */
		accountingCost: FormControl<string | null | undefined>,

		/**
		 * Total amount including Tax.
		 * Required
		 */
		amountIncludingTax: FormControl<number | null | undefined>,

		/** The ISO 4217 currency code. */
		documentCurrencyCode: FormControl<CurrencyCode | null | undefined>,

		/**
		 * The number you assigned to the document.
		 * Required
		 * Min length: 1
		 */
		documentNumber: FormControl<string | null | undefined>,

		/**
		 * Format: yyyy-mm-dd.
		 * Required
		 */
		issueDate: FormControl<string | null | undefined>,

		/** Format: hh:mm:ss±zzzz */
		issueTime: FormControl<string | null | undefined>,

		/**
		 * A note to add to the document
		 * Max length: 255
		 */
		note: FormControl<string | null | undefined>,

		/** The type of this order. */
		orderType: FormControl<DocumentOrderOrderType | null | undefined>,

		/** The tax system used for the invoice. The system 'tax_line_percentages' is the only one currently supported. */
		taxSystem: FormControl<DocumentOrderTaxSystem | null | undefined>,

		/** Format: ±zzzz, where ±zzzz is the difference from UTC, e.g. +0100 or -0900 etc. The timezone will also apply to the document issue date if this field is provided. */
		timeZone: FormControl<string | null | undefined>,

		/** The period (or specific date) to which the invoice applies. Format: yyyy-mm-dd - yyyy-mm-dd. */
		validityPeriod: FormControl<string | null | undefined>,
	}
	export function CreateDocumentOrderFormGroup() {
		return new FormGroup<DocumentOrderFormProperties>({
			accountingCost: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			amountIncludingTax: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			documentCurrencyCode: new FormControl<CurrencyCode | null | undefined>(undefined),
			documentNumber: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			issueDate: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[0-9]{4}-[0-9]{2}-[0-9]{2}$')]),
			issueTime: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[0-9]{2}:[0-9]{2}:[0-9]{2}$')]),
			note: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255)]),
			orderType: new FormControl<DocumentOrderOrderType | null | undefined>(undefined),
			taxSystem: new FormControl<DocumentOrderTaxSystem | null | undefined>(undefined),
			timeZone: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[+-]\d{4}$')]),
			validityPeriod: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[0-9]{4}-[0-9]{2}-[0-9]{2} - [0-9]{4}-[0-9]{2}-[0-9]{2}$')]),
		});

	}

	export interface OrderLine {

		/**
		 * The buyer's accounting cost centre for this line.
		 * Min length: 1
		 */
		accountingCost?: string | null;

		/**
		 * An array of additional item properties.
		 * Minimum items: 0
		 */
		additionalItemProperties?: Array<AdditionalItemProperty>;

		/** Whether or not the line items must be delivered in a single shipment. */
		allowPartialDelivery?: boolean | null;

		/**
		 * An array of allowance charges.
		 * Minimum items: 0
		 */
		allowanceCharges?: Array<LineAllowanceCharge>;

		/**
		 * The amount excluding tax. Should equal quantity x itemPrice + allowanceCharge.
		 * Required
		 */
		amountExcludingTax: number;

		/** The number of items the price is for. */
		baseQuantity?: number | null;
		delivery?: LineDelivery;

		/**
		 * The description for this line.
		 * Max length: 255
		 * Min length: 1
		 */
		description?: string | null;

		/** The price per item (may be fractional) */
		itemPrice?: number | null;

		/**
		 * The id for this invoice line.
		 * Required
		 * Min length: 1
		 */
		lineId: string;

		/**
		 * An identifier for the production lot which the line items come from.
		 * Minimum items: 0
		 */
		lotNumberIds?: Array<string>;

		/**
		 * A short name for this line.
		 * Max length: 255
		 * Min length: 1
		 */
		name?: string | null;

		/**
		 * A note to add to the line
		 * Max length: 255
		 */
		note?: string | null;

		/**
		 * The number of items (may be fractional).
		 * Required
		 */
		quantity: number;

		/**
		 * The unit of measure that applies to the quantity. Codes for unit of packaging from UNECE Recommendation No. 21 can be used in accordance with the descriptions in the "Intro" section of UN/ECE Recommendation 20, Revision 11 (2015): The 2 character alphanumeric code values in UNECE Recommendation 21 shall be used. To avoid duplication with existing code values in UNECE Recommendation No. 20, each code value from UNECE Recommendation 21 shall be prefixed with an “X”, resulting in a 3 alphanumeric code when used as a unit of measure. Note that the following additionally allowed codes are deprecated and will be converted to C62: 04, 05, 08, 16, 17, 18, 19, 26, 29, 30, 31, 32, 36, 43, 44, 45, 46, 47, 48, 53, 54, 62, 63, 64, 66, 69, 71, 72, 73, 76, 78, 84, 90, 92, 93, 94, 95, 96, 97, 98, 1A, 1B, 1C, 1D, 1E, 1F, 1G, 1H, 1J, 1K, 1L, 1M, 1X, 2V, 2W, 3E, 3G, 3H, 3I, 4A, 4B, 4E, 5C, 5F, 5G, 5H, 5I, 5K, 5P, 5Q, A1, A25, A50, A51, A52, A57, A58, A60, A61, A62, A63, A64, A65, A66, A67, A77, A78, A79, A80, A81, A82, A83, AJ, AM, AP, AR, ARE, ATT, AV, AW, B0, B2, B36, B37, B38, B39, B40, B5, B51, B6, B65, B9, BD, BE, BG, BH, BJ, BK, BL, BO, BR, BT, BW, BX, BZ, C1, C2, C4, C5, C6, C77, C98, CA, CH, CJ, CK, CL, CO, CQ, CR, CS, CT, CU, CV, CY, CZ, D14, D28, D35, D37, D38, D39, D40, D64, D66, D67, D7, D70, D71, D72, D75, D76, D79, D8, D9, D90, D92, D96, D97, D98, D99, DC, DE, DI, DQ, DR, DRM, DS, DU, DX, DY, E2, E3, E5, EC, EP, EV, F1, F9, FB, FD, FE, FG, FM, G7, GC, GD, GH, GK, GN, GRT, GT, GW, GY, GZ, H1, H2, HAR, HD, HE, HF, HI, HJ, HK, HL, HN, HO, HP, HS, HT, HY, IC, IF, II, IL, IM, IP, IT, JB, JG, JO, JR, K5, KD, KF, KG, KS, KTM, LC, LE, LI, LJ, LX, M0, MA, MF, MK, MQ, MT, MV, N2, NB, NBB, NC, ND, NE, NG, NH, NI, NJ, NN, NPL, NPR, NQ, NR, NRL, NTT, NV, NY, OP, OZ, P0, P3, P4, P6, P7, P8, P9, PA, PB, PE, PF, PG, PK, PL, PM, PN, PT, PU, PV, PW, PY, PZ, QD, QH, QK, QT, R4, RA, RD, RG, RK, RL, RN, RO, RS, RU, S5, S6, S7, S8, SA, SD, SE, SHT, SK, SL, SN, SO, SP, SS, SST, ST, SV, T1, T4, T5, T6, T7, T8, TA, TC, TD, TE, TF, TJ, TK, TL, TN, TQ, TR, TS, TSD, TSH, TT, TU, TV, TW, TY, UA, UD, UE, UF, UH, UM, VI, VQ, VS, W4, WH, WI, WR, WW, YL, YT, Z1, Z2, Z3, Z4, Z5, Z6, Z8
		 * Required
		 */
		quantityUnitCode: OrderLineQuantityUnitCode;

		/**
		 * An array of references to other documents or codes. Note that many syntaxes do not support multiple references of the same type in which case they will be concatenated with ','. Also, not all syntaxes support all documentTypes.
		 * Minimum items: 0
		 */
		references?: Array<Reference>;

		/**
		 * An array of taxes, duties and fees for this invoice line. Multiple taxesDutiesFees items is allowed only for IN (India) and US (USA) taxes. All other countries can only have a single Tax item in this array.
		 * Minimum items: 0
		 */
		taxesDutiesFees?: Array<Tax>;
	}
	export interface OrderLineFormProperties {

		/**
		 * The buyer's accounting cost centre for this line.
		 * Min length: 1
		 */
		accountingCost: FormControl<string | null | undefined>,

		/** Whether or not the line items must be delivered in a single shipment. */
		allowPartialDelivery: FormControl<boolean | null | undefined>,

		/**
		 * The amount excluding tax. Should equal quantity x itemPrice + allowanceCharge.
		 * Required
		 */
		amountExcludingTax: FormControl<number | null | undefined>,

		/** The number of items the price is for. */
		baseQuantity: FormControl<number | null | undefined>,

		/**
		 * The description for this line.
		 * Max length: 255
		 * Min length: 1
		 */
		description: FormControl<string | null | undefined>,

		/** The price per item (may be fractional) */
		itemPrice: FormControl<number | null | undefined>,

		/**
		 * The id for this invoice line.
		 * Required
		 * Min length: 1
		 */
		lineId: FormControl<string | null | undefined>,

		/**
		 * A short name for this line.
		 * Max length: 255
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * A note to add to the line
		 * Max length: 255
		 */
		note: FormControl<string | null | undefined>,

		/**
		 * The number of items (may be fractional).
		 * Required
		 */
		quantity: FormControl<number | null | undefined>,

		/**
		 * The unit of measure that applies to the quantity. Codes for unit of packaging from UNECE Recommendation No. 21 can be used in accordance with the descriptions in the "Intro" section of UN/ECE Recommendation 20, Revision 11 (2015): The 2 character alphanumeric code values in UNECE Recommendation 21 shall be used. To avoid duplication with existing code values in UNECE Recommendation No. 20, each code value from UNECE Recommendation 21 shall be prefixed with an “X”, resulting in a 3 alphanumeric code when used as a unit of measure. Note that the following additionally allowed codes are deprecated and will be converted to C62: 04, 05, 08, 16, 17, 18, 19, 26, 29, 30, 31, 32, 36, 43, 44, 45, 46, 47, 48, 53, 54, 62, 63, 64, 66, 69, 71, 72, 73, 76, 78, 84, 90, 92, 93, 94, 95, 96, 97, 98, 1A, 1B, 1C, 1D, 1E, 1F, 1G, 1H, 1J, 1K, 1L, 1M, 1X, 2V, 2W, 3E, 3G, 3H, 3I, 4A, 4B, 4E, 5C, 5F, 5G, 5H, 5I, 5K, 5P, 5Q, A1, A25, A50, A51, A52, A57, A58, A60, A61, A62, A63, A64, A65, A66, A67, A77, A78, A79, A80, A81, A82, A83, AJ, AM, AP, AR, ARE, ATT, AV, AW, B0, B2, B36, B37, B38, B39, B40, B5, B51, B6, B65, B9, BD, BE, BG, BH, BJ, BK, BL, BO, BR, BT, BW, BX, BZ, C1, C2, C4, C5, C6, C77, C98, CA, CH, CJ, CK, CL, CO, CQ, CR, CS, CT, CU, CV, CY, CZ, D14, D28, D35, D37, D38, D39, D40, D64, D66, D67, D7, D70, D71, D72, D75, D76, D79, D8, D9, D90, D92, D96, D97, D98, D99, DC, DE, DI, DQ, DR, DRM, DS, DU, DX, DY, E2, E3, E5, EC, EP, EV, F1, F9, FB, FD, FE, FG, FM, G7, GC, GD, GH, GK, GN, GRT, GT, GW, GY, GZ, H1, H2, HAR, HD, HE, HF, HI, HJ, HK, HL, HN, HO, HP, HS, HT, HY, IC, IF, II, IL, IM, IP, IT, JB, JG, JO, JR, K5, KD, KF, KG, KS, KTM, LC, LE, LI, LJ, LX, M0, MA, MF, MK, MQ, MT, MV, N2, NB, NBB, NC, ND, NE, NG, NH, NI, NJ, NN, NPL, NPR, NQ, NR, NRL, NTT, NV, NY, OP, OZ, P0, P3, P4, P6, P7, P8, P9, PA, PB, PE, PF, PG, PK, PL, PM, PN, PT, PU, PV, PW, PY, PZ, QD, QH, QK, QT, R4, RA, RD, RG, RK, RL, RN, RO, RS, RU, S5, S6, S7, S8, SA, SD, SE, SHT, SK, SL, SN, SO, SP, SS, SST, ST, SV, T1, T4, T5, T6, T7, T8, TA, TC, TD, TE, TF, TJ, TK, TL, TN, TQ, TR, TS, TSD, TSH, TT, TU, TV, TW, TY, UA, UD, UE, UF, UH, UM, VI, VQ, VS, W4, WH, WI, WR, WW, YL, YT, Z1, Z2, Z3, Z4, Z5, Z6, Z8
		 * Required
		 */
		quantityUnitCode: FormControl<OrderLineQuantityUnitCode | null | undefined>,
	}
	export function CreateOrderLineFormGroup() {
		return new FormGroup<OrderLineFormProperties>({
			accountingCost: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			allowPartialDelivery: new FormControl<boolean | null | undefined>(undefined),
			amountExcludingTax: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			baseQuantity: new FormControl<number | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			itemPrice: new FormControl<number | null | undefined>(undefined),
			lineId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			note: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255)]),
			quantity: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			quantityUnitCode: new FormControl<OrderLineQuantityUnitCode | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface LineAllowanceCharge {

		/**
		 * The amount for the allowance or charge, excluding tax.
		 * Required
		 */
		amountExcludingTax: number;

		/** The base amount for the allowance or charge, excluding tax. */
		baseAmountExcludingTax?: number | null;

		/** The reason for the allowance or charge, free text */
		reason?: string | null;

		/** Do not use. Contact Storecove first if you want to use this field. */
		reasonCode?: string | null;
	}
	export interface LineAllowanceChargeFormProperties {

		/**
		 * The amount for the allowance or charge, excluding tax.
		 * Required
		 */
		amountExcludingTax: FormControl<number | null | undefined>,

		/** The base amount for the allowance or charge, excluding tax. */
		baseAmountExcludingTax: FormControl<number | null | undefined>,

		/** The reason for the allowance or charge, free text */
		reason: FormControl<string | null | undefined>,

		/** Do not use. Contact Storecove first if you want to use this field. */
		reasonCode: FormControl<string | null | undefined>,
	}
	export function CreateLineAllowanceChargeFormGroup() {
		return new FormGroup<LineAllowanceChargeFormProperties>({
			amountExcludingTax: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			baseAmountExcludingTax: new FormControl<number | null | undefined>(undefined),
			reason: new FormControl<string | null | undefined>(undefined),
			reasonCode: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface LineDelivery {
		deliveryLocation?: LineDeliveryDeliveryLocation;
	}
	export interface LineDeliveryFormProperties {
	}
	export function CreateLineDeliveryFormGroup() {
		return new FormGroup<LineDeliveryFormProperties>({
		});

	}

	export interface LineDeliveryDeliveryLocation {

		/**
		 * The location identifier.
		 * Min length: 2
		 */
		id?: string | null;

		/** The schemeId of the location identifier (e.g. '0088') */
		schemeId?: string | null;
	}
	export interface LineDeliveryDeliveryLocationFormProperties {

		/**
		 * The location identifier.
		 * Min length: 2
		 */
		id: FormControl<string | null | undefined>,

		/** The schemeId of the location identifier (e.g. '0088') */
		schemeId: FormControl<string | null | undefined>,
	}
	export function CreateLineDeliveryDeliveryLocationFormGroup() {
		return new FormGroup<LineDeliveryDeliveryLocationFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.minLength(2)]),
			schemeId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum OrderLineQuantityUnitCode { _10 = 0, _11 = 1, _13 = 2, _14 = 3, _15 = 4, _20 = 5, _21 = 6, _22 = 7, _23 = 8, _24 = 9, _25 = 10, _27 = 11, _28 = 12, _33 = 13, _34 = 14, _35 = 15, _37 = 16, _38 = 17, _40 = 18, _41 = 19, _56 = 20, _57 = 21, _58 = 22, _59 = 23, _60 = 24, _61 = 25, _74 = 26, _77 = 27, _80 = 28, _81 = 29, _85 = 30, _87 = 31, _89 = 32, _91 = 33, '1I' = 34, '2A' = 35, '2B' = 36, '2C' = 37, '2G' = 38, '2H' = 39, '2I' = 40, '2J' = 41, '2K' = 42, '2L' = 43, '2M' = 44, '2N' = 45, '2P' = 46, '2Q' = 47, '2R' = 48, '2U' = 49, '2X' = 50, '2Y' = 51, '2Z' = 52, '3B' = 53, '3C' = 54, '4C' = 55, '4G' = 56, '4H' = 57, '4K' = 58, '4L' = 59, '4M' = 60, '4N' = 61, '4O' = 62, '4P' = 63, '4Q' = 64, '4R' = 65, '4T' = 66, '4U' = 67, '4W' = 68, '4X' = 69, '5A' = 70, '5B' = 71, '5E' = 72, '5J' = 73, A10 = 74, A11 = 75, A12 = 76, A13 = 77, A14 = 78, A15 = 79, A16 = 80, A17 = 81, A18 = 82, A19 = 83, A2 = 84, A20 = 85, A21 = 86, A22 = 87, A23 = 88, A24 = 89, A26 = 90, A27 = 91, A28 = 92, A29 = 93, A3 = 94, A30 = 95, A31 = 96, A32 = 97, A33 = 98, A34 = 99, A35 = 100, A36 = 101, A37 = 102, A38 = 103, A39 = 104, A4 = 105, A40 = 106, A41 = 107, A42 = 108, A43 = 109, A44 = 110, A45 = 111, A47 = 112, A48 = 113, A49 = 114, A5 = 115, A53 = 116, A54 = 117, A55 = 118, A56 = 119, A59 = 120, A6 = 121, A68 = 122, A69 = 123, A7 = 124, A70 = 125, A71 = 126, A73 = 127, A74 = 128, A75 = 129, A76 = 130, A8 = 131, A84 = 132, A85 = 133, A86 = 134, A87 = 135, A88 = 136, A89 = 137, A9 = 138, A90 = 139, A91 = 140, A93 = 141, A94 = 142, A95 = 143, A96 = 144, A97 = 145, A98 = 146, A99 = 147, AA = 148, AB = 149, ACR = 150, ACT = 151, AD = 152, AE = 153, AH = 154, AI = 155, AK = 156, AL = 157, AMH = 158, AMP = 159, ANN = 160, APZ = 161, AQ = 162, AS = 163, ASM = 164, ASU = 165, ATM = 166, AWG = 167, AY = 168, AZ = 169, B1 = 170, B10 = 171, B11 = 172, B12 = 173, B13 = 174, B14 = 175, B15 = 176, B16 = 177, B17 = 178, B18 = 179, B19 = 180, B20 = 181, B21 = 182, B22 = 183, B23 = 184, B24 = 185, B25 = 186, B26 = 187, B27 = 188, B28 = 189, B29 = 190, B3 = 191, B30 = 192, B31 = 193, B32 = 194, B33 = 195, B34 = 196, B35 = 197, B4 = 198, B41 = 199, B42 = 200, B43 = 201, B44 = 202, B45 = 203, B46 = 204, B47 = 205, B48 = 206, B49 = 207, B50 = 208, B52 = 209, B53 = 210, B54 = 211, B55 = 212, B56 = 213, B57 = 214, B58 = 215, B59 = 216, B60 = 217, B61 = 218, B62 = 219, B63 = 220, B64 = 221, B66 = 222, B67 = 223, B68 = 224, B69 = 225, B7 = 226, B70 = 227, B71 = 228, B72 = 229, B73 = 230, B74 = 231, B75 = 232, B76 = 233, B77 = 234, B78 = 235, B79 = 236, B8 = 237, B80 = 238, B81 = 239, B82 = 240, B83 = 241, B84 = 242, B85 = 243, B86 = 244, B87 = 245, B88 = 246, B89 = 247, B90 = 248, B91 = 249, B92 = 250, B93 = 251, B94 = 252, B95 = 253, B96 = 254, B97 = 255, B98 = 256, B99 = 257, BAR = 258, BB = 259, BFT = 260, BHP = 261, BIL = 262, BLD = 263, BLL = 264, BP = 265, BPM = 266, BQL = 267, BTU = 268, BUA = 269, BUI = 270, C0 = 271, C10 = 272, C11 = 273, C12 = 274, C13 = 275, C14 = 276, C15 = 277, C16 = 278, C17 = 279, C18 = 280, C19 = 281, C20 = 282, C21 = 283, C22 = 284, C23 = 285, C24 = 286, C25 = 287, C26 = 288, C27 = 289, C28 = 290, C29 = 291, C3 = 292, C30 = 293, C31 = 294, C32 = 295, C33 = 296, C34 = 297, C35 = 298, C36 = 299, C37 = 300, C38 = 301, C39 = 302, C40 = 303, C41 = 304, C42 = 305, C43 = 306, C44 = 307, C45 = 308, C46 = 309, C47 = 310, C48 = 311, C49 = 312, C50 = 313, C51 = 314, C52 = 315, C53 = 316, C54 = 317, C55 = 318, C56 = 319, C57 = 320, C58 = 321, C59 = 322, C60 = 323, C61 = 324, C62 = 325, C63 = 326, C64 = 327, C65 = 328, C66 = 329, C67 = 330, C68 = 331, C69 = 332, C7 = 333, C70 = 334, C71 = 335, C72 = 336, C73 = 337, C74 = 338, C75 = 339, C76 = 340, C78 = 341, C79 = 342, C8 = 343, C80 = 344, C81 = 345, C82 = 346, C83 = 347, C84 = 348, C85 = 349, C86 = 350, C87 = 351, C88 = 352, C89 = 353, C9 = 354, C90 = 355, C91 = 356, C92 = 357, C93 = 358, C94 = 359, C95 = 360, C96 = 361, C97 = 362, C99 = 363, CCT = 364, CDL = 365, CEL = 366, CEN = 367, CG = 368, CGM = 369, CKG = 370, CLF = 371, CLT = 372, CMK = 373, CMQ = 374, CMT = 375, CNP = 376, CNT = 377, COU = 378, CTG = 379, CTM = 380, CTN = 381, CUR = 382, CWA = 383, CWI = 384, D03 = 385, D04 = 386, D1 = 387, D10 = 388, D11 = 389, D12 = 390, D13 = 391, D15 = 392, D16 = 393, D17 = 394, D18 = 395, D19 = 396, D2 = 397, D20 = 398, D21 = 399, D22 = 400, D23 = 401, D24 = 402, D25 = 403, D26 = 404, D27 = 405, D29 = 406, D30 = 407, D31 = 408, D32 = 409, D33 = 410, D34 = 411, D36 = 412, D41 = 413, D42 = 414, D43 = 415, D44 = 416, D45 = 417, D46 = 418, D47 = 419, D48 = 420, D49 = 421, D5 = 422, D50 = 423, D51 = 424, D52 = 425, D53 = 426, D54 = 427, D55 = 428, D56 = 429, D57 = 430, D58 = 431, D59 = 432, D6 = 433, D60 = 434, D61 = 435, D62 = 436, D63 = 437, D65 = 438, D68 = 439, D69 = 440, D73 = 441, D74 = 442, D77 = 443, D78 = 444, D80 = 445, D81 = 446, D82 = 447, D83 = 448, D85 = 449, D86 = 450, D87 = 451, D88 = 452, D89 = 453, D91 = 454, D93 = 455, D94 = 456, D95 = 457, DAA = 458, DAD = 459, DAY = 460, DB = 461, DD = 462, DEC = 463, DG = 464, DJ = 465, DLT = 466, DMA = 467, DMK = 468, DMO = 469, DMQ = 470, DMT = 471, DN = 472, DPC = 473, DPR = 474, DPT = 475, DRA = 476, DRI = 477, DRL = 478, DT = 479, DTN = 480, DWT = 481, DZN = 482, DZP = 483, E01 = 484, E07 = 485, E08 = 486, E09 = 487, E10 = 488, E12 = 489, E14 = 490, E15 = 491, E16 = 492, E17 = 493, E18 = 494, E19 = 495, E20 = 496, E21 = 497, E22 = 498, E23 = 499, E25 = 500, E27 = 501, E28 = 502, E30 = 503, E31 = 504, E32 = 505, E33 = 506, E34 = 507, E35 = 508, E36 = 509, E37 = 510, E38 = 511, E39 = 512, E4 = 513, E40 = 514, E41 = 515, E42 = 516, E43 = 517, E44 = 518, E45 = 519, E46 = 520, E47 = 521, E48 = 522, E49 = 523, E50 = 524, E51 = 525, E52 = 526, E53 = 527, E54 = 528, E55 = 529, E56 = 530, E57 = 531, E58 = 532, E59 = 533, E60 = 534, E61 = 535, E62 = 536, E63 = 537, E64 = 538, E65 = 539, E66 = 540, E67 = 541, E68 = 542, E69 = 543, E70 = 544, E71 = 545, E72 = 546, E73 = 547, E74 = 548, E75 = 549, E76 = 550, E77 = 551, E78 = 552, E79 = 553, E80 = 554, E81 = 555, E82 = 556, E83 = 557, E84 = 558, E85 = 559, E86 = 560, E87 = 561, E88 = 562, E89 = 563, E90 = 564, E91 = 565, E92 = 566, E93 = 567, E94 = 568, E95 = 569, E96 = 570, E97 = 571, E98 = 572, E99 = 573, EA = 574, EB = 575, EQ = 576, F01 = 577, F02 = 578, F03 = 579, F04 = 580, F05 = 581, F06 = 582, F07 = 583, F08 = 584, F10 = 585, F11 = 586, F12 = 587, F13 = 588, F14 = 589, F15 = 590, F16 = 591, F17 = 592, F18 = 593, F19 = 594, F20 = 595, F21 = 596, F22 = 597, F23 = 598, F24 = 599, F25 = 600, F26 = 601, F27 = 602, F28 = 603, F29 = 604, F30 = 605, F31 = 606, F32 = 607, F33 = 608, F34 = 609, F35 = 610, F36 = 611, F37 = 612, F38 = 613, F39 = 614, F40 = 615, F41 = 616, F42 = 617, F43 = 618, F44 = 619, F45 = 620, F46 = 621, F47 = 622, F48 = 623, F49 = 624, F50 = 625, F51 = 626, F52 = 627, F53 = 628, F54 = 629, F55 = 630, F56 = 631, F57 = 632, F58 = 633, F59 = 634, F60 = 635, F61 = 636, F62 = 637, F63 = 638, F64 = 639, F65 = 640, F66 = 641, F67 = 642, F68 = 643, F69 = 644, F70 = 645, F71 = 646, F72 = 647, F73 = 648, F74 = 649, F75 = 650, F76 = 651, F77 = 652, F78 = 653, F79 = 654, F80 = 655, F81 = 656, F82 = 657, F83 = 658, F84 = 659, F85 = 660, F86 = 661, F87 = 662, F88 = 663, F89 = 664, F90 = 665, F91 = 666, F92 = 667, F93 = 668, F94 = 669, F95 = 670, F96 = 671, F97 = 672, F98 = 673, F99 = 674, FAH = 675, FAR = 676, FBM = 677, FC = 678, FF = 679, FH = 680, FIT = 681, FL = 682, FOT = 683, FP = 684, FR = 685, FS = 686, FTK = 687, FTQ = 688, G01 = 689, G04 = 690, G05 = 691, G06 = 692, G08 = 693, G09 = 694, G10 = 695, G11 = 696, G12 = 697, G13 = 698, G14 = 699, G15 = 700, G16 = 701, G17 = 702, G18 = 703, G19 = 704, G2 = 705, G20 = 706, G21 = 707, G23 = 708, G24 = 709, G25 = 710, G26 = 711, G27 = 712, G28 = 713, G29 = 714, G3 = 715, G30 = 716, G31 = 717, G32 = 718, G33 = 719, G34 = 720, G35 = 721, G36 = 722, G37 = 723, G38 = 724, G39 = 725, G40 = 726, G41 = 727, G42 = 728, G43 = 729, G44 = 730, G45 = 731, G46 = 732, G47 = 733, G48 = 734, G49 = 735, G50 = 736, G51 = 737, G52 = 738, G53 = 739, G54 = 740, G55 = 741, G56 = 742, G57 = 743, G58 = 744, G59 = 745, G60 = 746, G61 = 747, G62 = 748, G63 = 749, G64 = 750, G65 = 751, G66 = 752, G67 = 753, G68 = 754, G69 = 755, G70 = 756, G71 = 757, G72 = 758, G73 = 759, G74 = 760, G75 = 761, G76 = 762, G77 = 763, G78 = 764, G79 = 765, G80 = 766, G81 = 767, G82 = 768, G83 = 769, G84 = 770, G85 = 771, G86 = 772, G87 = 773, G88 = 774, G89 = 775, G90 = 776, G91 = 777, G92 = 778, G93 = 779, G94 = 780, G95 = 781, G96 = 782, G97 = 783, G98 = 784, G99 = 785, GB = 786, GBQ = 787, GDW = 788, GE = 789, GF = 790, GFI = 791, GGR = 792, GIA = 793, GIC = 794, GII = 795, GIP = 796, GJ = 797, GL = 798, GLD = 799, GLI = 800, GLL = 801, GM = 802, GO = 803, GP = 804, GQ = 805, GRM = 806, GRN = 807, GRO = 808, GV = 809, GWH = 810, H03 = 811, H04 = 812, H05 = 813, H06 = 814, H07 = 815, H08 = 816, H09 = 817, H10 = 818, H11 = 819, H12 = 820, H13 = 821, H14 = 822, H15 = 823, H16 = 824, H18 = 825, H19 = 826, H20 = 827, H21 = 828, H22 = 829, H23 = 830, H24 = 831, H25 = 832, H26 = 833, H27 = 834, H28 = 835, H29 = 836, H30 = 837, H31 = 838, H32 = 839, H33 = 840, H34 = 841, H35 = 842, H36 = 843, H37 = 844, H38 = 845, H39 = 846, H40 = 847, H41 = 848, H42 = 849, H43 = 850, H44 = 851, H45 = 852, H46 = 853, H47 = 854, H48 = 855, H49 = 856, H50 = 857, H51 = 858, H52 = 859, H53 = 860, H54 = 861, H55 = 862, H56 = 863, H57 = 864, H58 = 865, H59 = 866, H60 = 867, H61 = 868, H62 = 869, H63 = 870, H64 = 871, H65 = 872, H66 = 873, H67 = 874, H68 = 875, H69 = 876, H70 = 877, H71 = 878, H72 = 879, H73 = 880, H74 = 881, H75 = 882, H76 = 883, H77 = 884, H79 = 885, H80 = 886, H81 = 887, H82 = 888, H83 = 889, H84 = 890, H85 = 891, H87 = 892, H88 = 893, H89 = 894, H90 = 895, H91 = 896, H92 = 897, H93 = 898, H94 = 899, H95 = 900, H96 = 901, H98 = 902, H99 = 903, HA = 904, HBA = 905, HBX = 906, HC = 907, HDW = 908, HEA = 909, HGM = 910, HH = 911, HIU = 912, HKM = 913, HLT = 914, HM = 915, HMQ = 916, HMT = 917, HPA = 918, HTZ = 919, HUR = 920, IA = 921, IE = 922, INH = 923, INK = 924, INQ = 925, ISD = 926, IU = 927, IV = 928, J10 = 929, J12 = 930, J13 = 931, J14 = 932, J15 = 933, J16 = 934, J17 = 935, J18 = 936, J19 = 937, J2 = 938, J20 = 939, J21 = 940, J22 = 941, J23 = 942, J24 = 943, J25 = 944, J26 = 945, J27 = 946, J28 = 947, J29 = 948, J30 = 949, J31 = 950, J32 = 951, J33 = 952, J34 = 953, J35 = 954, J36 = 955, J38 = 956, J39 = 957, J40 = 958, J41 = 959, J42 = 960, J43 = 961, J44 = 962, J45 = 963, J46 = 964, J47 = 965, J48 = 966, J49 = 967, J50 = 968, J51 = 969, J52 = 970, J53 = 971, J54 = 972, J55 = 973, J56 = 974, J57 = 975, J58 = 976, J59 = 977, J60 = 978, J61 = 979, J62 = 980, J63 = 981, J64 = 982, J65 = 983, J66 = 984, J67 = 985, J68 = 986, J69 = 987, J70 = 988, J71 = 989, J72 = 990, J73 = 991, J74 = 992, J75 = 993, J76 = 994, J78 = 995, J79 = 996, J81 = 997, J82 = 998, J83 = 999, J84 = 1000, J85 = 1001, J87 = 1002, J90 = 1003, J91 = 1004, J92 = 1005, J93 = 1006, J95 = 1007, J96 = 1008, J97 = 1009, J98 = 1010, J99 = 1011, JE = 1012, JK = 1013, JM = 1014, JNT = 1015, JOU = 1016, JPS = 1017, JWL = 1018, K1 = 1019, K10 = 1020, K11 = 1021, K12 = 1022, K13 = 1023, K14 = 1024, K15 = 1025, K16 = 1026, K17 = 1027, K18 = 1028, K19 = 1029, K2 = 1030, K20 = 1031, K21 = 1032, K22 = 1033, K23 = 1034, K26 = 1035, K27 = 1036, K28 = 1037, K3 = 1038, K30 = 1039, K31 = 1040, K32 = 1041, K33 = 1042, K34 = 1043, K35 = 1044, K36 = 1045, K37 = 1046, K38 = 1047, K39 = 1048, K40 = 1049, K41 = 1050, K42 = 1051, K43 = 1052, K45 = 1053, K46 = 1054, K47 = 1055, K48 = 1056, K49 = 1057, K50 = 1058, K51 = 1059, K52 = 1060, K53 = 1061, K54 = 1062, K55 = 1063, K58 = 1064, K59 = 1065, K6 = 1066, K60 = 1067, K61 = 1068, K62 = 1069, K63 = 1070, K64 = 1071, K65 = 1072, K66 = 1073, K67 = 1074, K68 = 1075, K69 = 1076, K70 = 1077, K71 = 1078, K73 = 1079, K74 = 1080, K75 = 1081, K76 = 1082, K77 = 1083, K78 = 1084, K79 = 1085, K80 = 1086, K81 = 1087, K82 = 1088, K83 = 1089, K84 = 1090, K85 = 1091, K86 = 1092, K87 = 1093, K88 = 1094, K89 = 1095, K90 = 1096, K91 = 1097, K92 = 1098, K93 = 1099, K94 = 1100, K95 = 1101, K96 = 1102, K97 = 1103, K98 = 1104, K99 = 1105, KA = 1106, KAT = 1107, KB = 1108, KBA = 1109, KCC = 1110, KDW = 1111, KEL = 1112, KGM = 1113, KGS = 1114, KHY = 1115, KHZ = 1116, KI = 1117, KIC = 1118, KIP = 1119, KJ = 1120, KJO = 1121, KL = 1122, KLK = 1123, KLX = 1124, KMA = 1125, KMH = 1126, KMK = 1127, KMQ = 1128, KMT = 1129, KNI = 1130, KNM = 1131, KNS = 1132, KNT = 1133, KO = 1134, KPA = 1135, KPH = 1136, KPO = 1137, KPP = 1138, KR = 1139, KSD = 1140, KSH = 1141, KT = 1142, KTN = 1143, KUR = 1144, KVA = 1145, KVR = 1146, KVT = 1147, KW = 1148, KWH = 1149, KWO = 1150, KWT = 1151, KX = 1152, L10 = 1153, L11 = 1154, L12 = 1155, L13 = 1156, L14 = 1157, L15 = 1158, L16 = 1159, L17 = 1160, L18 = 1161, L19 = 1162, L2 = 1163, L20 = 1164, L21 = 1165, L23 = 1166, L24 = 1167, L25 = 1168, L26 = 1169, L27 = 1170, L28 = 1171, L29 = 1172, L30 = 1173, L31 = 1174, L32 = 1175, L33 = 1176, L34 = 1177, L35 = 1178, L36 = 1179, L37 = 1180, L38 = 1181, L39 = 1182, L40 = 1183, L41 = 1184, L42 = 1185, L43 = 1186, L44 = 1187, L45 = 1188, L46 = 1189, L47 = 1190, L48 = 1191, L49 = 1192, L50 = 1193, L51 = 1194, L52 = 1195, L53 = 1196, L54 = 1197, L55 = 1198, L56 = 1199, L57 = 1200, L58 = 1201, L59 = 1202, L60 = 1203, L63 = 1204, L64 = 1205, L65 = 1206, L66 = 1207, L67 = 1208, L68 = 1209, L69 = 1210, L70 = 1211, L71 = 1212, L72 = 1213, L73 = 1214, L74 = 1215, L75 = 1216, L76 = 1217, L77 = 1218, L78 = 1219, L79 = 1220, L80 = 1221, L81 = 1222, L82 = 1223, L83 = 1224, L84 = 1225, L85 = 1226, L86 = 1227, L87 = 1228, L88 = 1229, L89 = 1230, L90 = 1231, L91 = 1232, L92 = 1233, L93 = 1234, L94 = 1235, L95 = 1236, L96 = 1237, L98 = 1238, L99 = 1239, LA = 1240, LAC = 1241, LBR = 1242, LBT = 1243, LD = 1244, LEF = 1245, LF = 1246, LH = 1247, LK = 1248, LM = 1249, LN = 1250, LO = 1251, LP = 1252, LPA = 1253, LR = 1254, LS = 1255, LTN = 1256, LTR = 1257, LUB = 1258, LUM = 1259, LUX = 1260, LY = 1261, M1 = 1262, M10 = 1263, M11 = 1264, M12 = 1265, M13 = 1266, M14 = 1267, M15 = 1268, M16 = 1269, M17 = 1270, M18 = 1271, M19 = 1272, M20 = 1273, M21 = 1274, M22 = 1275, M23 = 1276, M24 = 1277, M25 = 1278, M26 = 1279, M27 = 1280, M29 = 1281, M30 = 1282, M31 = 1283, M32 = 1284, M33 = 1285, M34 = 1286, M35 = 1287, M36 = 1288, M37 = 1289, M38 = 1290, M39 = 1291, M4 = 1292, M40 = 1293, M41 = 1294, M42 = 1295, M43 = 1296, M44 = 1297, M45 = 1298, M46 = 1299, M47 = 1300, M48 = 1301, M49 = 1302, M5 = 1303, M50 = 1304, M51 = 1305, M52 = 1306, M53 = 1307, M55 = 1308, M56 = 1309, M57 = 1310, M58 = 1311, M59 = 1312, M60 = 1313, M61 = 1314, M62 = 1315, M63 = 1316, M64 = 1317, M65 = 1318, M66 = 1319, M67 = 1320, M68 = 1321, M69 = 1322, M7 = 1323, M70 = 1324, M71 = 1325, M72 = 1326, M73 = 1327, M74 = 1328, M75 = 1329, M76 = 1330, M77 = 1331, M78 = 1332, M79 = 1333, M80 = 1334, M81 = 1335, M82 = 1336, M83 = 1337, M84 = 1338, M85 = 1339, M86 = 1340, M87 = 1341, M88 = 1342, M89 = 1343, M9 = 1344, M90 = 1345, M91 = 1346, M92 = 1347, M93 = 1348, M94 = 1349, M95 = 1350, M96 = 1351, M97 = 1352, M98 = 1353, M99 = 1354, MAH = 1355, MAL = 1356, MAM = 1357, MAR = 1358, MAW = 1359, MBE = 1360, MBF = 1361, MBR = 1362, MC = 1363, MCU = 1364, MD = 1365, MGM = 1366, MHZ = 1367, MIK = 1368, MIL = 1369, MIN = 1370, MIO = 1371, MIU = 1372, MLD = 1373, MLT = 1374, MMK = 1375, MMQ = 1376, MMT = 1377, MND = 1378, MON = 1379, MPA = 1380, MQH = 1381, MQS = 1382, MSK = 1383, MTK = 1384, MTQ = 1385, MTR = 1386, MTS = 1387, MVA = 1388, MWH = 1389, N1 = 1390, N10 = 1391, N11 = 1392, N12 = 1393, N13 = 1394, N14 = 1395, N15 = 1396, N16 = 1397, N17 = 1398, N18 = 1399, N19 = 1400, N20 = 1401, N21 = 1402, N22 = 1403, N23 = 1404, N24 = 1405, N25 = 1406, N26 = 1407, N27 = 1408, N28 = 1409, N29 = 1410, N3 = 1411, N30 = 1412, N31 = 1413, N32 = 1414, N33 = 1415, N34 = 1416, N35 = 1417, N36 = 1418, N37 = 1419, N38 = 1420, N39 = 1421, N40 = 1422, N41 = 1423, N42 = 1424, N43 = 1425, N44 = 1426, N45 = 1427, N46 = 1428, N47 = 1429, N48 = 1430, N49 = 1431, N50 = 1432, N51 = 1433, N52 = 1434, N53 = 1435, N54 = 1436, N55 = 1437, N56 = 1438, N57 = 1439, N58 = 1440, N59 = 1441, N60 = 1442, N61 = 1443, N62 = 1444, N63 = 1445, N64 = 1446, N65 = 1447, N66 = 1448, N67 = 1449, N68 = 1450, N69 = 1451, N70 = 1452, N71 = 1453, N72 = 1454, N73 = 1455, N74 = 1456, N75 = 1457, N76 = 1458, N77 = 1459, N78 = 1460, N79 = 1461, N80 = 1462, N81 = 1463, N82 = 1464, N83 = 1465, N84 = 1466, N85 = 1467, N86 = 1468, N87 = 1469, N88 = 1470, N89 = 1471, N90 = 1472, N91 = 1473, N92 = 1474, N93 = 1475, N94 = 1476, N95 = 1477, N96 = 1478, N97 = 1479, N98 = 1480, N99 = 1481, NA = 1482, NAR = 1483, NCL = 1484, NEW = 1485, NF = 1486, NIL = 1487, NIU = 1488, NL = 1489, NM3 = 1490, NMI = 1491, NMP = 1492, NPT = 1493, NT = 1494, NU = 1495, NX = 1496, OA = 1497, ODE = 1498, OHM = 1499, ON = 1500, ONZ = 1501, OPM = 1502, OT = 1503, OZA = 1504, OZI = 1505, P1 = 1506, P10 = 1507, P11 = 1508, P12 = 1509, P13 = 1510, P14 = 1511, P15 = 1512, P16 = 1513, P17 = 1514, P18 = 1515, P19 = 1516, P2 = 1517, P20 = 1518, P21 = 1519, P22 = 1520, P23 = 1521, P24 = 1522, P25 = 1523, P26 = 1524, P27 = 1525, P28 = 1526, P29 = 1527, P30 = 1528, P31 = 1529, P32 = 1530, P33 = 1531, P34 = 1532, P35 = 1533, P36 = 1534, P37 = 1535, P38 = 1536, P39 = 1537, P40 = 1538, P41 = 1539, P42 = 1540, P43 = 1541, P44 = 1542, P45 = 1543, P46 = 1544, P47 = 1545, P48 = 1546, P49 = 1547, P5 = 1548, P50 = 1549, P51 = 1550, P52 = 1551, P53 = 1552, P54 = 1553, P55 = 1554, P56 = 1555, P57 = 1556, P58 = 1557, P59 = 1558, P60 = 1559, P61 = 1560, P62 = 1561, P63 = 1562, P64 = 1563, P65 = 1564, P66 = 1565, P67 = 1566, P68 = 1567, P69 = 1568, P70 = 1569, P71 = 1570, P72 = 1571, P73 = 1572, P74 = 1573, P75 = 1574, P76 = 1575, P77 = 1576, P78 = 1577, P79 = 1578, P80 = 1579, P81 = 1580, P82 = 1581, P83 = 1582, P84 = 1583, P85 = 1584, P86 = 1585, P87 = 1586, P88 = 1587, P89 = 1588, P90 = 1589, P91 = 1590, P92 = 1591, P93 = 1592, P94 = 1593, P95 = 1594, P96 = 1595, P97 = 1596, P98 = 1597, P99 = 1598, PAL = 1599, PD = 1600, PFL = 1601, PGL = 1602, PI = 1603, PLA = 1604, PO = 1605, PQ = 1606, PR = 1607, PS = 1608, PTD = 1609, PTI = 1610, PTL = 1611, PTN = 1612, Q10 = 1613, Q11 = 1614, Q12 = 1615, Q13 = 1616, Q14 = 1617, Q15 = 1618, Q16 = 1619, Q17 = 1620, Q18 = 1621, Q19 = 1622, Q20 = 1623, Q21 = 1624, Q22 = 1625, Q23 = 1626, Q24 = 1627, Q25 = 1628, Q26 = 1629, Q27 = 1630, Q28 = 1631, Q29 = 1632, Q30 = 1633, Q31 = 1634, Q32 = 1635, Q33 = 1636, Q34 = 1637, Q35 = 1638, Q36 = 1639, Q37 = 1640, Q38 = 1641, Q39 = 1642, Q40 = 1643, Q3 = 1644, QA = 1645, QAN = 1646, QB = 1647, QR = 1648, QTD = 1649, QTI = 1650, QTL = 1651, QTR = 1652, R1 = 1653, R9 = 1654, RH = 1655, RM = 1656, ROM = 1657, RP = 1658, RPM = 1659, RPS = 1660, RT = 1661, S3 = 1662, S4 = 1663, SAN = 1664, SCO = 1665, SCR = 1666, SEC = 1667, SET = 1668, SG = 1669, SIE = 1670, SM3 = 1671, SMI = 1672, SQ = 1673, SQR = 1674, SR = 1675, STC = 1676, STI = 1677, STK = 1678, STL = 1679, STN = 1680, STW = 1681, SW = 1682, SX = 1683, SYR = 1684, T0 = 1685, T3 = 1686, TAH = 1687, TAN = 1688, TI = 1689, TIC = 1690, TIP = 1691, TKM = 1692, TMS = 1693, TNE = 1694, TP = 1695, TPI = 1696, TPR = 1697, TQD = 1698, TRL = 1699, TST = 1700, TTS = 1701, U1 = 1702, U2 = 1703, UB = 1704, UC = 1705, VA = 1706, VLT = 1707, VP = 1708, W2 = 1709, WA = 1710, WB = 1711, WCD = 1712, WE = 1713, WEB = 1714, WEE = 1715, WG = 1716, WHR = 1717, WM = 1718, WSD = 1719, WTT = 1720, X1 = 1721, YDK = 1722, YDQ = 1723, YRD = 1724, Z11 = 1725, ZP = 1726, ZZ = 1727, X1A = 1728, X1B = 1729, X1D = 1730, X1F = 1731, X1G = 1732, X1W = 1733, X2C = 1734, X3A = 1735, X3H = 1736, X43 = 1737, X44 = 1738, X4A = 1739, X4B = 1740, X4C = 1741, X4D = 1742, X4F = 1743, X4G = 1744, X4H = 1745, X5H = 1746, X5L = 1747, X5M = 1748, X6H = 1749, X6P = 1750, X7A = 1751, X7B = 1752, X8A = 1753, X8B = 1754, X8C = 1755, XAA = 1756, XAB = 1757, XAC = 1758, XAD = 1759, XAE = 1760, XAF = 1761, XAG = 1762, XAH = 1763, XAI = 1764, XAJ = 1765, XAL = 1766, XAM = 1767, XAP = 1768, XAT = 1769, XAV = 1770, XB4 = 1771, XBA = 1772, XBB = 1773, XBC = 1774, XBD = 1775, XBE = 1776, XBF = 1777, XBG = 1778, XBH = 1779, XBI = 1780, XBJ = 1781, XBK = 1782, XBL = 1783, XBM = 1784, XBN = 1785, XBO = 1786, XBP = 1787, XBQ = 1788, XBR = 1789, XBS = 1790, XBT = 1791, XBU = 1792, XBV = 1793, XBW = 1794, XBX = 1795, XBY = 1796, XBZ = 1797, XCA = 1798, XCB = 1799, XCC = 1800, XCD = 1801, XCE = 1802, XCF = 1803, XCG = 1804, XCH = 1805, XCI = 1806, XCJ = 1807, XCK = 1808, XCL = 1809, XCM = 1810, XCN = 1811, XCO = 1812, XCP = 1813, XCQ = 1814, XCR = 1815, XCS = 1816, XCT = 1817, XCU = 1818, XCV = 1819, XCW = 1820, XCX = 1821, XCY = 1822, XCZ = 1823, XDA = 1824, XDB = 1825, XDC = 1826, XDG = 1827, XDH = 1828, XDI = 1829, XDJ = 1830, XDK = 1831, XDL = 1832, XDM = 1833, XDN = 1834, XDP = 1835, XDR = 1836, XDS = 1837, XDT = 1838, XDU = 1839, XDV = 1840, XDW = 1841, XDX = 1842, XDY = 1843, XEC = 1844, XED = 1845, XEE = 1846, XEF = 1847, XEG = 1848, XEH = 1849, XEI = 1850, XEN = 1851, XFB = 1852, XFC = 1853, XFD = 1854, XFE = 1855, XFI = 1856, XFL = 1857, XFO = 1858, XFP = 1859, XFR = 1860, XFT = 1861, XFW = 1862, XFX = 1863, XGB = 1864, XGI = 1865, XGL = 1866, XGR = 1867, XGU = 1868, XGY = 1869, XGZ = 1870, XHA = 1871, XHB = 1872, XHC = 1873, XHG = 1874, XHN = 1875, XHR = 1876, XIA = 1877, XIB = 1878, XIC = 1879, XID = 1880, XIE = 1881, XIF = 1882, XIG = 1883, XIH = 1884, XIK = 1885, XIL = 1886, XIN = 1887, XIZ = 1888, XJB = 1889, XJC = 1890, XJG = 1891, XJR = 1892, XJT = 1893, XJY = 1894, XKG = 1895, XKI = 1896, XLE = 1897, XLG = 1898, XLT = 1899, XLU = 1900, XLV = 1901, XLZ = 1902, XMA = 1903, XMB = 1904, XMC = 1905, XME = 1906, XMR = 1907, XMS = 1908, XMT = 1909, XMW = 1910, XMX = 1911, XNA = 1912, XNE = 1913, XNF = 1914, XNG = 1915, XNS = 1916, XNT = 1917, XNU = 1918, XNV = 1919, XOA = 1920, XOB = 1921, XOC = 1922, XOD = 1923, XOE = 1924, XOF = 1925, XOK = 1926, XOT = 1927, XOU = 1928, XP2 = 1929, XPA = 1930, XPB = 1931, XPC = 1932, XPD = 1933, XPE = 1934, XPF = 1935, XPG = 1936, XPH = 1937, XPI = 1938, XPJ = 1939, XPK = 1940, XPL = 1941, XPN = 1942, XPO = 1943, XPP = 1944, XPR = 1945, XPT = 1946, XPU = 1947, XPV = 1948, XPX = 1949, XPY = 1950, XPZ = 1951, XQA = 1952, XQB = 1953, XQC = 1954, XQD = 1955, XQF = 1956, XQG = 1957, XQH = 1958, XQJ = 1959, XQK = 1960, XQL = 1961, XQM = 1962, XQN = 1963, XQP = 1964, XQQ = 1965, XQR = 1966, XQS = 1967, XRD = 1968, XRG = 1969, XRJ = 1970, XRK = 1971, XRL = 1972, XRO = 1973, XRT = 1974, XRZ = 1975, XSA = 1976, XSB = 1977, XSC = 1978, XSD = 1979, XSE = 1980, XSH = 1981, XSI = 1982, XSK = 1983, XSL = 1984, XSM = 1985, XSO = 1986, XSP = 1987, XSS = 1988, XST = 1989, XSU = 1990, XSV = 1991, XSW = 1992, XSY = 1993, XSZ = 1994, XT1 = 1995, XTB = 1996, XTC = 1997, XTD = 1998, XTE = 1999, XTG = 2000, XTI = 2001, XTK = 2002, XTL = 2003, XTN = 2004, XTO = 2005, XTR = 2006, XTS = 2007, XTT = 2008, XTU = 2009, XTV = 2010, XTW = 2011, XTY = 2012, XTZ = 2013, XUC = 2014, XUN = 2015, XVA = 2016, XVG = 2017, XVI = 2018, XVK = 2019, XVL = 2020, XVO = 2021, XVP = 2022, XVQ = 2023, XVN = 2024, XVR = 2025, XVS = 2026, XVY = 2027, XWA = 2028, XWB = 2029, XWC = 2030, XWD = 2031, XWF = 2032, XWG = 2033, XWH = 2034, XWJ = 2035, XWK = 2036, XWL = 2037, XWM = 2038, XWN = 2039, XWP = 2040, XWQ = 2041, XWR = 2042, XWS = 2043, XWT = 2044, XWU = 2045, XWV = 2046, XWW = 2047, XWX = 2048, XWY = 2049, XWZ = 2050, XXA = 2051, XXB = 2052, XXC = 2053, XXD = 2054, XXF = 2055, XXG = 2056, XXH = 2057, XXJ = 2058, XXK = 2059, XYA = 2060, XYB = 2061, XYC = 2062, XYD = 2063, XYF = 2064, XYG = 2065, XYH = 2066, XYJ = 2067, XYK = 2068, XYL = 2069, XYM = 2070, XYN = 2071, XYP = 2072, XYQ = 2073, XYR = 2074, XYS = 2075, XYT = 2076, XYV = 2077, XYW = 2078, XYX = 2079, XYY = 2080, XYZ = 2081, XZA = 2082, XZB = 2083, XZC = 2084, XZD = 2085, XZF = 2086, XZG = 2087, XZH = 2088, XZJ = 2089, XZK = 2090, XZL = 2091, XZM = 2092, XZN = 2093, XZP = 2094, XZQ = 2095, XZR = 2096, XZS = 2097, XZT = 2098, XZU = 2099, XZV = 2100, XZW = 2101, XZX = 2102, XZY = 2103, XZZ = 2104, _04 = 2105, _05 = 2106, _08 = 2107, _16 = 2108, _17 = 2109, _18 = 2110, _19 = 2111, _26 = 2112, _29 = 2113, _30 = 2114, _31 = 2115, _32 = 2116, _36 = 2117, _43 = 2118, _44 = 2119, _45 = 2120, _46 = 2121, _47 = 2122, _48 = 2123, _53 = 2124, _54 = 2125, _62 = 2126, _63 = 2127, _64 = 2128, _66 = 2129, _69 = 2130, _71 = 2131, _72 = 2132, _73 = 2133, _76 = 2134, _78 = 2135, _84 = 2136, _90 = 2137, _92 = 2138, _93 = 2139, _94 = 2140, _95 = 2141, _96 = 2142, _97 = 2143, _98 = 2144, '1A' = 2145, '1B' = 2146, '1C' = 2147, '1D' = 2148, '1E' = 2149, '1F' = 2150, '1G' = 2151, '1H' = 2152, '1J' = 2153, '1K' = 2154, '1L' = 2155, '1M' = 2156, '1X' = 2157, '2V' = 2158, '2W' = 2159, '3E' = 2160, '3G' = 2161, '3H' = 2162, '3I' = 2163, '4A' = 2164, '4B' = 2165, '4E' = 2166, '5C' = 2167, '5F' = 2168, '5G' = 2169, '5H' = 2170, '5I' = 2171, '5K' = 2172, '5P' = 2173, '5Q' = 2174, A1 = 2175, A25 = 2176, A50 = 2177, A51 = 2178, A52 = 2179, A57 = 2180, A58 = 2181, A60 = 2182, A61 = 2183, A62 = 2184, A63 = 2185, A64 = 2186, A65 = 2187, A66 = 2188, A67 = 2189, A77 = 2190, A78 = 2191, A79 = 2192, A80 = 2193, A81 = 2194, A82 = 2195, A83 = 2196, AJ = 2197, AM = 2198, AP = 2199, AR = 2200, ARE = 2201, ATT = 2202, AV = 2203, AW = 2204, B0 = 2205, B2 = 2206, B36 = 2207, B37 = 2208, B38 = 2209, B39 = 2210, B40 = 2211, B5 = 2212, B51 = 2213, B6 = 2214, B65 = 2215, B9 = 2216, BD = 2217, BE = 2218, BG = 2219, BH = 2220, BJ = 2221, BK = 2222, BL = 2223, BO = 2224, BR = 2225, BT = 2226, BW = 2227, BX = 2228, BZ = 2229, C1 = 2230, C2 = 2231, C4 = 2232, C5 = 2233, C6 = 2234, C77 = 2235, C98 = 2236, CA = 2237, CH = 2238, CJ = 2239, CK = 2240, CL = 2241, CO = 2242, CQ = 2243, CR = 2244, CS = 2245, CT = 2246, CU = 2247, CV = 2248, CY = 2249, CZ = 2250, D14 = 2251, D28 = 2252, D35 = 2253, D37 = 2254, D38 = 2255, D39 = 2256, D40 = 2257, D64 = 2258, D66 = 2259, D67 = 2260, D7 = 2261, D70 = 2262, D71 = 2263, D72 = 2264, D75 = 2265, D76 = 2266, D79 = 2267, D8 = 2268, D9 = 2269, D90 = 2270, D92 = 2271, D96 = 2272, D97 = 2273, D98 = 2274, D99 = 2275, DC = 2276, DE = 2277, DI = 2278, DQ = 2279, DR = 2280, DRM = 2281, DS = 2282, DU = 2283, DX = 2284, DY = 2285, E2 = 2286, E3 = 2287, E5 = 2288, EC = 2289, EP = 2290, EV = 2291, F1 = 2292, F9 = 2293, FB = 2294, FD = 2295, FE = 2296, FG = 2297, FM = 2298, G7 = 2299, GC = 2300, GD = 2301, GH = 2302, GK = 2303, GN = 2304, GRT = 2305, GT = 2306, GW = 2307, GY = 2308, GZ = 2309, H1 = 2310, H2 = 2311, HAR = 2312, HD = 2313, HE = 2314, HF = 2315, HI = 2316, HJ = 2317, HK = 2318, HL = 2319, HN = 2320, HO = 2321, HP = 2322, HS = 2323, HT = 2324, HY = 2325, IC = 2326, IF = 2327, II = 2328, IL = 2329, IM = 2330, IP = 2331, IT = 2332, JB = 2333, JG = 2334, JO = 2335, JR = 2336, K5 = 2337, KD = 2338, KF = 2339, KG = 2340, KS = 2341, KTM = 2342, LC = 2343, LE = 2344, LI = 2345, LJ = 2346, LX = 2347, M0 = 2348, MA = 2349, MF = 2350, MK = 2351, MQ = 2352, MT = 2353, MV = 2354, N2 = 2355, NB = 2356, NBB = 2357, NC = 2358, ND = 2359, NE = 2360, NG = 2361, NH = 2362, NI = 2363, NJ = 2364, NN = 2365, NPL = 2366, NPR = 2367, NQ = 2368, NR = 2369, NRL = 2370, NTT = 2371, NV = 2372, NY = 2373, OP = 2374, OZ = 2375, P0 = 2376, P3 = 2377, P4 = 2378, P6 = 2379, P7 = 2380, P8 = 2381, P9 = 2382, PA = 2383, PB = 2384, PE = 2385, PF = 2386, PG = 2387, PK = 2388, PL = 2389, PM = 2390, PN = 2391, PT = 2392, PU = 2393, PV = 2394, PW = 2395, PY = 2396, PZ = 2397, QD = 2398, QH = 2399, QK = 2400, QT = 2401, R4 = 2402, RA = 2403, RD = 2404, RG = 2405, RK = 2406, RL = 2407, RN = 2408, RO = 2409, RS = 2410, RU = 2411, S5 = 2412, S6 = 2413, S7 = 2414, S8 = 2415, SA = 2416, SD = 2417, SE = 2418, SHT = 2419, SK = 2420, SL = 2421, SN = 2422, SO = 2423, SP = 2424, SS = 2425, SST = 2426, ST = 2427, SV = 2428, T1 = 2429, T4 = 2430, T5 = 2431, T6 = 2432, T7 = 2433, T8 = 2434, TA = 2435, TC = 2436, TD = 2437, TE = 2438, TF = 2439, TJ = 2440, TK = 2441, TL = 2442, TN = 2443, TQ = 2444, TR = 2445, TS = 2446, TSD = 2447, TSH = 2448, TT = 2449, TU = 2450, TV = 2451, TW = 2452, TY = 2453, UA = 2454, UD = 2455, UE = 2456, UF = 2457, UH = 2458, UM = 2459, VI = 2460, VQ = 2461, VS = 2462, W4 = 2463, WH = 2464, WI = 2465, WR = 2466, WW = 2467, YL = 2468, YT = 2469, Z1 = 2470, Z2 = 2471, Z3 = 2472, Z4 = 2473, Z5 = 2474, Z6 = 2475, Z8 = 2476 }


	/** A reference to a document. */
	export interface Reference {

		/** The id of the referenced document. */
		documentId?: string | null;

		/**
		 * The type of the referenced document. The following types are supported:
		 * ++++
		 * <ul>    <li>        <b>purchase_order</b> (document level, Invoice + Order)        <p>A reference to an order for this document, assigned by the buyer. Note that this often is a key field, since many receivers of invoices will use this field to automatically match the invoice to an order they placed. Many receivers refuse invoices that cannot be automatically matched, in particular government agencies. So it is highly recommended to fill this field whenever possible.</p>    </li>    <li>        <b>billing</b> (document level, Invoice)        <p>A reference to a billing document. For instance, credit notes may refer to an invoice they are a credit note for.</p>    </li>    <li>        <b>sales_order</b> (document level, Invoice + Order)        <p>A reference to an order for this document, assigned by the seller.</p>    </li>    <li>        <b>buyer_reference</b> (document level, Invoice, Order)        <p>The buyer's reference. Used for internal routing by the receiver. For orders, this becomes the customer reference which the receiver of the order should put back in the buyer reference field in the invoice.</p>    </li>    <li>        <b>contract</b> (document level, Invoice + Order)        <p>A reference to a contract or framework agreement that this document relates to.</p>    </li>    <li>        <b>despatch_advice</b> (document level, Invoice)        <p>A reference to a despatch advice for this document. In the FatturaPA, this is what will become the DDT.</p>    </li>    <li>        <b>originator</b> (document level, Invoice + Order)        <p>A reference to an originator document for this invoice.</p>    </li>    <li>        <b>receipt</b> (document level, Invoice)        <p>A reference to a receipt document for this document.</p>    </li>    <li>        <b>project</b> (document level, Invoice)        <p>A reference to a project document for this document.</p>    </li>    <li>        <b>quotation</b> (document level, Order)        <p>A reference to a quotation document for this document.</p>    </li>    <li>        <b>payment_url</b> (document level, Invoice)        <p>A to a payment URL for the invoice.</p>    </li>    <li>        <b>item_classification_code</b> (line level)        <p>A reference to a commodity classification / item classification code for this line.</p>    </li>    <li>        <b>item_commodity_code</b> (line level)        <p>A reference to a commodity classification / commodity code for this line.</p>    </li>    <li>        <b>line_document_reference</b> (line level)        <p>A reference to another document for this line.</p>    </li>    <li>        <b>line_standard_item_identification</b> (line level)        <p>A standard item identification.</p>    </li>    <li>        <b>line_sellers_item_identification</b> (line level)        <p>The seller's item identification.</p>    </li>    <li>        <b>line_buyers_item_identification</b> (line level)        <p>The buyer's item identification.</p>    </li>    <li>        <b>item_specification</b> (line level)        <p>Referece to an item specification document</p>    </li></ul>
		 * ++++
		 * Required
		 */
		documentType: ReferenceDocumentType;

		/** The issue date of the referenced document. */
		issueDate?: string | null;

		/** The line in the referenced document. */
		lineId?: string | null;
	}

	/** A reference to a document. */
	export interface ReferenceFormProperties {

		/** The id of the referenced document. */
		documentId: FormControl<string | null | undefined>,

		/**
		 * The type of the referenced document. The following types are supported:
		 * ++++
		 * <ul>    <li>        <b>purchase_order</b> (document level, Invoice + Order)        <p>A reference to an order for this document, assigned by the buyer. Note that this often is a key field, since many receivers of invoices will use this field to automatically match the invoice to an order they placed. Many receivers refuse invoices that cannot be automatically matched, in particular government agencies. So it is highly recommended to fill this field whenever possible.</p>    </li>    <li>        <b>billing</b> (document level, Invoice)        <p>A reference to a billing document. For instance, credit notes may refer to an invoice they are a credit note for.</p>    </li>    <li>        <b>sales_order</b> (document level, Invoice + Order)        <p>A reference to an order for this document, assigned by the seller.</p>    </li>    <li>        <b>buyer_reference</b> (document level, Invoice, Order)        <p>The buyer's reference. Used for internal routing by the receiver. For orders, this becomes the customer reference which the receiver of the order should put back in the buyer reference field in the invoice.</p>    </li>    <li>        <b>contract</b> (document level, Invoice + Order)        <p>A reference to a contract or framework agreement that this document relates to.</p>    </li>    <li>        <b>despatch_advice</b> (document level, Invoice)        <p>A reference to a despatch advice for this document. In the FatturaPA, this is what will become the DDT.</p>    </li>    <li>        <b>originator</b> (document level, Invoice + Order)        <p>A reference to an originator document for this invoice.</p>    </li>    <li>        <b>receipt</b> (document level, Invoice)        <p>A reference to a receipt document for this document.</p>    </li>    <li>        <b>project</b> (document level, Invoice)        <p>A reference to a project document for this document.</p>    </li>    <li>        <b>quotation</b> (document level, Order)        <p>A reference to a quotation document for this document.</p>    </li>    <li>        <b>payment_url</b> (document level, Invoice)        <p>A to a payment URL for the invoice.</p>    </li>    <li>        <b>item_classification_code</b> (line level)        <p>A reference to a commodity classification / item classification code for this line.</p>    </li>    <li>        <b>item_commodity_code</b> (line level)        <p>A reference to a commodity classification / commodity code for this line.</p>    </li>    <li>        <b>line_document_reference</b> (line level)        <p>A reference to another document for this line.</p>    </li>    <li>        <b>line_standard_item_identification</b> (line level)        <p>A standard item identification.</p>    </li>    <li>        <b>line_sellers_item_identification</b> (line level)        <p>The seller's item identification.</p>    </li>    <li>        <b>line_buyers_item_identification</b> (line level)        <p>The buyer's item identification.</p>    </li>    <li>        <b>item_specification</b> (line level)        <p>Referece to an item specification document</p>    </li></ul>
		 * ++++
		 * Required
		 */
		documentType: FormControl<ReferenceDocumentType | null | undefined>,

		/** The issue date of the referenced document. */
		issueDate: FormControl<string | null | undefined>,

		/** The line in the referenced document. */
		lineId: FormControl<string | null | undefined>,
	}
	export function CreateReferenceFormGroup() {
		return new FormGroup<ReferenceFormProperties>({
			documentId: new FormControl<string | null | undefined>(undefined),
			documentType: new FormControl<ReferenceDocumentType | null | undefined>(undefined, [Validators.required]),
			issueDate: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[0-9]{4}-[0-9]{2}-[0-9]{2}$')]),
			lineId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ReferenceDocumentType { purchase_order = 0, buyer_reference = 1, billing = 2, sales_order = 3, contract = 4, despatch_advice = 5, originator = 6, receipt = 7, project = 8, quotation = 9, payment_url = 10, item_classification_code = 11, item_commodity_code = 12, line_document_reference = 13, line_standard_item_identification = 14, line_sellers_item_identification = 15, line_buyers_item_identification = 16, item_specification = 17 }

	export enum DocumentOrderOrderType { regular = 0, consignment = 1 }


	/** The payment terms of the document. */
	export interface PaymentTerms {

		/** The note for the payment terms. */
		note?: string | null;
	}

	/** The payment terms of the document. */
	export interface PaymentTermsFormProperties {

		/** The note for the payment terms. */
		note: FormControl<string | null | undefined>,
	}
	export function CreatePaymentTermsFormGroup() {
		return new FormGroup<PaymentTermsFormProperties>({
			note: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The party sending the order. */
	export interface SellerSupplierParty {

		/**
		 * A party that can send documents
		 * Required
		 */
		party: SenderParty;

		/** A list of legal and tax identifiers for this customer. */
		publicIdentifiers?: Array<PublicIdentifier>;
	}

	/** The party sending the order. */
	export interface SellerSupplierPartyFormProperties {
	}
	export function CreateSellerSupplierPartyFormGroup() {
		return new FormGroup<SellerSupplierPartyFormProperties>({
		});

	}

	export enum DocumentOrderTaxSystem { tax_line_percentages = 0 }


	/** The document you want Storecove to send, with some meta-data. */
	export interface DocumentSubmission {

		/**
		 * DEPRECATED. Use the attachments array inside the 'document' property. An array of attachments. You may provide up to 10 attchments, but the total size must not exceed 10MB after Base64 encoding.
		 * Maximum items: 10
		 */
		attachments?: Array<Attachment>;

		/** DEPRECATED. In the future we will no longer support creating PDF invoices. Whether or not to create a primary image (PDF) if one is not provided. For customers who started from April 1st 2023, the default is false. For customers who started before that, the default is true. */
		createPrimaryImage?: boolean | null;

		/** The document to send. */
		document?: SendableDocument;

		/**
		 * A guid that you generated for this DocumentSubmission to achieve idempotency. If you submit multiple documents with the same idempotencyGuid, only the first one will be processed and any subsequent ones will trigger an HTTP 422 Unprocessable Entity response.
		 * Max length: 36
		 * Min length: 36
		 */
		idempotencyGuid?: string | null;

		/** The id of the LegalEntity this document should be sent on behalf of. Either legalEntityId or receiveGuid is mandatory. */
		legalEntityId?: number | null;

		/** The GUID that was in the received_document webhook. Either legalEntityId or receiveGuid is mandatory. This field is used for sending response documents, such as InvoiceReponse and OrderResponse. */
		receiveGuid?: string | null;

		/** The different ways to send the invoice to the recipient. The publicIdentifiers are used to send via the Peppol network, if the recipient is not registered on the Peppol network, the invoice will be sent to the email addresses in the emails property. This property is only mandatory when sending the invoice data using the <<_openapi_invoice>> property, not when sending using the <<_openapi_invoicedata>> property, in which case this information will be extracted from the <<_openapi_invoicedata>> object. If you do specify an <<_openapi_invoicerecipient>> object and an <<_openapi_invoicedata>> object, the data from the two will be merged. */
		routing?: Routing;
	}

	/** The document you want Storecove to send, with some meta-data. */
	export interface DocumentSubmissionFormProperties {

		/** DEPRECATED. In the future we will no longer support creating PDF invoices. Whether or not to create a primary image (PDF) if one is not provided. For customers who started from April 1st 2023, the default is false. For customers who started before that, the default is true. */
		createPrimaryImage: FormControl<boolean | null | undefined>,

		/**
		 * A guid that you generated for this DocumentSubmission to achieve idempotency. If you submit multiple documents with the same idempotencyGuid, only the first one will be processed and any subsequent ones will trigger an HTTP 422 Unprocessable Entity response.
		 * Max length: 36
		 * Min length: 36
		 */
		idempotencyGuid: FormControl<string | null | undefined>,

		/** The id of the LegalEntity this document should be sent on behalf of. Either legalEntityId or receiveGuid is mandatory. */
		legalEntityId: FormControl<number | null | undefined>,

		/** The GUID that was in the received_document webhook. Either legalEntityId or receiveGuid is mandatory. This field is used for sending response documents, such as InvoiceReponse and OrderResponse. */
		receiveGuid: FormControl<string | null | undefined>,
	}
	export function CreateDocumentSubmissionFormGroup() {
		return new FormGroup<DocumentSubmissionFormProperties>({
			createPrimaryImage: new FormControl<boolean | null | undefined>(undefined),
			idempotencyGuid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(36), Validators.maxLength(36)]),
			legalEntityId: new FormControl<number | null | undefined>(undefined),
			receiveGuid: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The document to send. */
	export interface SendableDocument {

		/**
		 * The type of document to be sent.
		 * Required
		 */
		documentType: SendableDocumentDocumentType;

		/** The invoice to send. Provide either invoice, or invoiceData, but not both. */
		invoice?: Invoice;

		/** The invoice response to send or received. */
		invoiceResponse?: DocumentInvoiceResponse;

		/** The order to send. */
		order?: DocumentOrder;

		/** A document to send, in base64 encoded format. */
		rawDocumentData?: RawDocumentData;
	}

	/** The document to send. */
	export interface SendableDocumentFormProperties {

		/**
		 * The type of document to be sent.
		 * Required
		 */
		documentType: FormControl<SendableDocumentDocumentType | null | undefined>,
	}
	export function CreateSendableDocumentFormGroup() {
		return new FormGroup<SendableDocumentFormProperties>({
			documentType: new FormControl<SendableDocumentDocumentType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum SendableDocumentDocumentType { invoice = 0, invoice_response = 1, order = 2 }


	/** The invoice to send. Provide either invoice, or invoiceData, but not both. */
	export interface Invoice {

		/**
		 * The buyer's accounting cost centre for this invoice, expressed as text.
		 * Min length: 1
		 */
		accountingCost?: string | null;

		/** The total amount of tax in the accounting currency. If included, must be non-zero. */
		accountingCurrencyTaxAmount?: number | null;

		/** The ISO 4217 currency code. */
		accountingCurrencyTaxAmountCurrency?: CurrencyCode | null;

		/**
		 * The customer receiving the document.
		 * Required
		 */
		accountingCustomerParty: AccountingCustomerParty;

		/** The party sending the invoice. Most data for the AccountingSupplierParty is taken from the Storecove database, where your sender identity resides and has been validated. However, we provide a limited number of fields here that you can specify on an invoice-by-invoice basis. */
		accountingSupplierParty?: AccountingSupplierParty;

		/**
		 * An array of allowance charges.
		 * Minimum items: 0
		 */
		allowanceCharges?: Array<AllowanceCharge>;

		/**
		 * amountIncludingVat is important because of rounding differences. In many invoices, the sum of the line item amounts excluding VAT and the VAT amounts is not equal to first summing the line items without VAT, and then applying VAT. The difference is automatically calculated and included in the electronic invoice, so the receiving accounting package can process the electronic invoice without problems.
		 * Required
		 */
		amountIncludingVat: number;

		/**
		 * An array of attachments. You may provide up to 10 attchments, but the total size must not exceed 10MB after Base64 encoding.
		 * Maximum items: 10
		 */
		attachments?: Array<Attachment>;

		/** DEPRECATED. Use a reference object with a documentType 'billing'. A reference to a commercial invoice or corrective invoice of which the current invoice is a correction. This field is mandatory when sending invoiceType 384. */
		billingReference?: string | null;

		/** DEPRECATED. Use a reference object with a documentType 'buyer_reference'. A reference provided by the buyer used for internal routing of the document. */
		buyerReference?: string | null;

		/** Whether or not to process the invoice in consumer tax mode. In this mode, the VAT identifier of the sender will not be the default VAT identifier, but the one that matches with the country of the receiving consumer, if that additional VAT identifier for that country is available. These additional VAT identifiers need to be added to the sending LegalEntity by Storecove, so if you need to send invoices in this mode, please contact us. */
		consumerTaxMode?: boolean | null;

		/** DEPRECATED. Use a reference object with a documentType 'contract'. A reference to a contract or framework agreement that this invoice relates to. */
		contractDocumentReference?: string | null;
		delivery?: Delivery;

		/** The ISO 4217 currency code. */
		documentCurrencyCode?: CurrencyCode | null;

		/** Format: yyyy-mm-dd. */
		dueDate?: string | null;

		/**
		 * An array of invoice lines.
		 * Required
		 * Minimum items: 1
		 */
		invoiceLines: Array<InvoiceLine>;

		/**
		 * The invoice number you assigned to the invoice. The invoiceNumber should be unique for the legalEntityId and year of the issueDate. This means invoice numbers can be reused in different years, as is customary in some countries.
		 * Required
		 * Min length: 1
		 */
		invoiceNumber: string;

		/** The period (or specific date) to which the invoice applies. Format: yyyy-mm-dd - yyyy-mm-dd. */
		invoicePeriod?: string | null;

		/** DEPRECATED. Do not use. This field is available for legacy reasons only. If you want to send a regular invoice (aka UBL type '380'), make sure you have a positive invoice amount. For a credit note (aka UBL type '381'), simply provide a negative invoice amount. If you, in addition to a negative invoice amount, also specify a billingReferences, your invoice will become a corrective invoice (aka UBL type '384'). If your invoice is not sent in the UBL syntax, Storecove will provide the appropriate type for the syntax the invoice is sent in. */
		invoiceType?: InvoiceInvoiceType | null;

		/**
		 * Format: yyyy-mm-dd.
		 * Required
		 */
		issueDate: string;

		/** An array reasons for issuing the invoice. */
		issueReasons?: Array<string>;

		/** A note to add to the invoice */
		note?: string | null;

		/** DEPRECATED. Use a reference object with a documentType 'purchase_order'. A reference to an order for this invoice, assigned by the buyer. Note that this often is a key field, since many receivers of invoices will use this field to automatically match the invoice to an order they placed. Many receivers refuse invoices that cannot be automatically matched, in particular government agencies. So it is highly recommended to fill this field whenever possible. */
		orderReference?: string | null;

		/** An array of payment means (ways to pay the invoice). */
		paymentMeansArray?: Array<PaymentMeans>;

		/** DEPRECATED. Use paymentMeansArray. The BIC (Swift) of the bank where the amount payable should be transferred to */
		paymentMeansBic?: string | null;

		/** DEPRECATED. Use paymentMeansArray. How the invoice has been / will be paid. Use only online_payment_service (payment will be made or has been made by an online payment service), bank_card (e.g. debit card, credit card), direct_debit (the amount has been / will be taken out of the client's bank account), standing_agreement (an unspecified payment means known to both buyer and seller) or credit_transfer (the buyer will do / has done a bank transfer). The numeric codes are for legacy purposes, they should not be used. */
		paymentMeansCode?: InvoicePaymentMeansCode | null;

		/** DEPRECATED. Use paymentMeansArray. The IBAN the amount payable should be transferred to */
		paymentMeansIban?: string | null;

		/** DEPRECATED. Use the paymentId in the individual PaymentMeans object. The payment id that you will use to match the payment against the invoice. */
		paymentMeansPaymentId?: string | null;

		/** The payment terms of the document. */
		paymentTerms?: PaymentTerms;

		/** In auto mode, the choice between invoice or creditnote is made by Storecove based on what is appropriate for the receiver and the receiver country, in combination with the invoice amount sign. If you wish to state a preference, use this field. It is not guaranteed that the preference will be used, since it depends also on the receiver's document capabilities. */
		preferredInvoiceType?: InvoicePreferredInvoiceType | null;

		/** The amount already paid. */
		prepaidAmount?: number | null;

		/** The price mode. This is used to determine whether the prices are net or gross. Price Mode 'price_mode_gross' can only be used for "x2y": "b2c", sender countries ES, IT and PT, "clearWithoutSending": true and "taxSystem": "tax_line_percentages" */
		priceMode?: InvoicePriceMode | null;

		/** DEPRECATED. Information about the project this invoice relates to. */
		projectReference?: string | null;

		/**
		 * An array of references to other documents. Note that many syntaxes do not support multiple references of the same type in which case they will be concatenated with ','. Also, not all syntaxes support all documentTypes.
		 * Minimum items: 0
		 */
		references?: Array<Reference>;

		/** DEPRECATED. Use a reference object with a documentType 'sales_order'. A reference to an order for this invoice, assigned by the seller. */
		salesOrderId?: string | null;

		/** In self billing mode, the AccountingCustomerParty and the AccountingSupplierParty are be switched. Such an invoice can only be sent via email. Also, your account will need to allow the use of this mode, so before trying to use this please first contact Storecove. */
		selfBillingMode?: boolean | null;

		/** DEPRECATED. Use Tax/category and specify this per invoice line. If you do specify this field, it will be applied to all invoice lines and it is an error to specify a Tax/category at the invoice line level. This field holds the reason no tax is present in the invoice. Note that this is an invoice level field and you cannot specify it per invoice line. This field is mandatory unless tax is present in the invoice. */
		taxExemptReason?: InvoiceTaxExemptReason | null;

		/** The tax date is the date on which the supply of goods or of services was made or completed or the date on which the payment on account was made insofar as that date can be determined and differs from the date of the issue of the invoice. EU 2006-112 Article 226 Point 7. Note: For the Dutch TAX authorities the tac date should be the same as the issue date. */
		taxPointDate?: string | null;

		/**
		 * An array of tax subtotals. This element is mandatory for taxSystem 'tax_line_percentages'.
		 * Minimum items: 0
		 */
		taxSubtotals?: Array<TaxSubtotal>;

		/** The tax system used for the invoice. The system 'tax_line_percentages' is preferred, but for historic purposes 'tax_line_amounts' is supported and the default. Since not all invoice formats that we are required to send support 'tax_line_amounts' we will need to convert the invoice to the 'tax_line_percentags' system if we are forced to send the invoice in that tax system. Note that an invoice must always contain tax information, even if that is 0% or an item or sender is exempt or tax is completely outside scope. In that case, use the correct tax categories (see <<_openapi_tax>>) */
		taxSystem?: InvoiceTaxSystem | null;

		/**
		 * An array of taxes, duties and fees for this invoice. At this moment, the only invoice level tax allowed is the Italian '€2 bollo virtuale'
		 * Minimum items: 0
		 * Maximum items: 1
		 */
		taxesDutiesFees?: Array<Tax>;

		/** The type of transaction. Currently used only for India. */
		transactionType?: InvoiceTransactionType | null;

		/** An array of ubl extensions. */
		ublExtensions?: Array<string>;

		/** DEPRECATED. Use taxExemptReason. */
		vatReverseCharge?: boolean | null;

		/** The type of entities the document is sent from/to: b2b (business-to-business), b2g (business-to-government) or b2c (business-to-consumer). This field does not have a default, but it in mose cases it will be treated as b2b. Only when you explicitly specify b2g or b2c OR when it is clear from the context will a different value be used. For instance, when we see the document is being routed to DE:LWID or NL:OINO number, this tells us it is b2g. But in many cases we are unable to determine this and so it is best to always specify this field. Note that b2b_sez is for use inside India only. */
		x2y?: InvoiceX2y | null;
	}

	/** The invoice to send. Provide either invoice, or invoiceData, but not both. */
	export interface InvoiceFormProperties {

		/**
		 * The buyer's accounting cost centre for this invoice, expressed as text.
		 * Min length: 1
		 */
		accountingCost: FormControl<string | null | undefined>,

		/** The total amount of tax in the accounting currency. If included, must be non-zero. */
		accountingCurrencyTaxAmount: FormControl<number | null | undefined>,

		/** The ISO 4217 currency code. */
		accountingCurrencyTaxAmountCurrency: FormControl<CurrencyCode | null | undefined>,

		/**
		 * amountIncludingVat is important because of rounding differences. In many invoices, the sum of the line item amounts excluding VAT and the VAT amounts is not equal to first summing the line items without VAT, and then applying VAT. The difference is automatically calculated and included in the electronic invoice, so the receiving accounting package can process the electronic invoice without problems.
		 * Required
		 */
		amountIncludingVat: FormControl<number | null | undefined>,

		/** DEPRECATED. Use a reference object with a documentType 'billing'. A reference to a commercial invoice or corrective invoice of which the current invoice is a correction. This field is mandatory when sending invoiceType 384. */
		billingReference: FormControl<string | null | undefined>,

		/** DEPRECATED. Use a reference object with a documentType 'buyer_reference'. A reference provided by the buyer used for internal routing of the document. */
		buyerReference: FormControl<string | null | undefined>,

		/** Whether or not to process the invoice in consumer tax mode. In this mode, the VAT identifier of the sender will not be the default VAT identifier, but the one that matches with the country of the receiving consumer, if that additional VAT identifier for that country is available. These additional VAT identifiers need to be added to the sending LegalEntity by Storecove, so if you need to send invoices in this mode, please contact us. */
		consumerTaxMode: FormControl<boolean | null | undefined>,

		/** DEPRECATED. Use a reference object with a documentType 'contract'. A reference to a contract or framework agreement that this invoice relates to. */
		contractDocumentReference: FormControl<string | null | undefined>,

		/** The ISO 4217 currency code. */
		documentCurrencyCode: FormControl<CurrencyCode | null | undefined>,

		/** Format: yyyy-mm-dd. */
		dueDate: FormControl<string | null | undefined>,

		/**
		 * The invoice number you assigned to the invoice. The invoiceNumber should be unique for the legalEntityId and year of the issueDate. This means invoice numbers can be reused in different years, as is customary in some countries.
		 * Required
		 * Min length: 1
		 */
		invoiceNumber: FormControl<string | null | undefined>,

		/** The period (or specific date) to which the invoice applies. Format: yyyy-mm-dd - yyyy-mm-dd. */
		invoicePeriod: FormControl<string | null | undefined>,

		/** DEPRECATED. Do not use. This field is available for legacy reasons only. If you want to send a regular invoice (aka UBL type '380'), make sure you have a positive invoice amount. For a credit note (aka UBL type '381'), simply provide a negative invoice amount. If you, in addition to a negative invoice amount, also specify a billingReferences, your invoice will become a corrective invoice (aka UBL type '384'). If your invoice is not sent in the UBL syntax, Storecove will provide the appropriate type for the syntax the invoice is sent in. */
		invoiceType: FormControl<InvoiceInvoiceType | null | undefined>,

		/**
		 * Format: yyyy-mm-dd.
		 * Required
		 */
		issueDate: FormControl<string | null | undefined>,

		/** A note to add to the invoice */
		note: FormControl<string | null | undefined>,

		/** DEPRECATED. Use a reference object with a documentType 'purchase_order'. A reference to an order for this invoice, assigned by the buyer. Note that this often is a key field, since many receivers of invoices will use this field to automatically match the invoice to an order they placed. Many receivers refuse invoices that cannot be automatically matched, in particular government agencies. So it is highly recommended to fill this field whenever possible. */
		orderReference: FormControl<string | null | undefined>,

		/** DEPRECATED. Use paymentMeansArray. The BIC (Swift) of the bank where the amount payable should be transferred to */
		paymentMeansBic: FormControl<string | null | undefined>,

		/** DEPRECATED. Use paymentMeansArray. How the invoice has been / will be paid. Use only online_payment_service (payment will be made or has been made by an online payment service), bank_card (e.g. debit card, credit card), direct_debit (the amount has been / will be taken out of the client's bank account), standing_agreement (an unspecified payment means known to both buyer and seller) or credit_transfer (the buyer will do / has done a bank transfer). The numeric codes are for legacy purposes, they should not be used. */
		paymentMeansCode: FormControl<InvoicePaymentMeansCode | null | undefined>,

		/** DEPRECATED. Use paymentMeansArray. The IBAN the amount payable should be transferred to */
		paymentMeansIban: FormControl<string | null | undefined>,

		/** DEPRECATED. Use the paymentId in the individual PaymentMeans object. The payment id that you will use to match the payment against the invoice. */
		paymentMeansPaymentId: FormControl<string | null | undefined>,

		/** In auto mode, the choice between invoice or creditnote is made by Storecove based on what is appropriate for the receiver and the receiver country, in combination with the invoice amount sign. If you wish to state a preference, use this field. It is not guaranteed that the preference will be used, since it depends also on the receiver's document capabilities. */
		preferredInvoiceType: FormControl<InvoicePreferredInvoiceType | null | undefined>,

		/** The amount already paid. */
		prepaidAmount: FormControl<number | null | undefined>,

		/** The price mode. This is used to determine whether the prices are net or gross. Price Mode 'price_mode_gross' can only be used for "x2y": "b2c", sender countries ES, IT and PT, "clearWithoutSending": true and "taxSystem": "tax_line_percentages" */
		priceMode: FormControl<InvoicePriceMode | null | undefined>,

		/** DEPRECATED. Information about the project this invoice relates to. */
		projectReference: FormControl<string | null | undefined>,

		/** DEPRECATED. Use a reference object with a documentType 'sales_order'. A reference to an order for this invoice, assigned by the seller. */
		salesOrderId: FormControl<string | null | undefined>,

		/** In self billing mode, the AccountingCustomerParty and the AccountingSupplierParty are be switched. Such an invoice can only be sent via email. Also, your account will need to allow the use of this mode, so before trying to use this please first contact Storecove. */
		selfBillingMode: FormControl<boolean | null | undefined>,

		/** DEPRECATED. Use Tax/category and specify this per invoice line. If you do specify this field, it will be applied to all invoice lines and it is an error to specify a Tax/category at the invoice line level. This field holds the reason no tax is present in the invoice. Note that this is an invoice level field and you cannot specify it per invoice line. This field is mandatory unless tax is present in the invoice. */
		taxExemptReason: FormControl<InvoiceTaxExemptReason | null | undefined>,

		/** The tax date is the date on which the supply of goods or of services was made or completed or the date on which the payment on account was made insofar as that date can be determined and differs from the date of the issue of the invoice. EU 2006-112 Article 226 Point 7. Note: For the Dutch TAX authorities the tac date should be the same as the issue date. */
		taxPointDate: FormControl<string | null | undefined>,

		/** The tax system used for the invoice. The system 'tax_line_percentages' is preferred, but for historic purposes 'tax_line_amounts' is supported and the default. Since not all invoice formats that we are required to send support 'tax_line_amounts' we will need to convert the invoice to the 'tax_line_percentags' system if we are forced to send the invoice in that tax system. Note that an invoice must always contain tax information, even if that is 0% or an item or sender is exempt or tax is completely outside scope. In that case, use the correct tax categories (see <<_openapi_tax>>) */
		taxSystem: FormControl<InvoiceTaxSystem | null | undefined>,

		/** The type of transaction. Currently used only for India. */
		transactionType: FormControl<InvoiceTransactionType | null | undefined>,

		/** DEPRECATED. Use taxExemptReason. */
		vatReverseCharge: FormControl<boolean | null | undefined>,

		/** The type of entities the document is sent from/to: b2b (business-to-business), b2g (business-to-government) or b2c (business-to-consumer). This field does not have a default, but it in mose cases it will be treated as b2b. Only when you explicitly specify b2g or b2c OR when it is clear from the context will a different value be used. For instance, when we see the document is being routed to DE:LWID or NL:OINO number, this tells us it is b2g. But in many cases we are unable to determine this and so it is best to always specify this field. Note that b2b_sez is for use inside India only. */
		x2y: FormControl<InvoiceX2y | null | undefined>,
	}
	export function CreateInvoiceFormGroup() {
		return new FormGroup<InvoiceFormProperties>({
			accountingCost: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			accountingCurrencyTaxAmount: new FormControl<number | null | undefined>(undefined),
			accountingCurrencyTaxAmountCurrency: new FormControl<CurrencyCode | null | undefined>(undefined),
			amountIncludingVat: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			billingReference: new FormControl<string | null | undefined>(undefined),
			buyerReference: new FormControl<string | null | undefined>(undefined),
			consumerTaxMode: new FormControl<boolean | null | undefined>(undefined),
			contractDocumentReference: new FormControl<string | null | undefined>(undefined),
			documentCurrencyCode: new FormControl<CurrencyCode | null | undefined>(undefined),
			dueDate: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[0-9]{4}-[0-9]{2}-[0-9]{2}$')]),
			invoiceNumber: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			invoicePeriod: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[0-9]{4}-[0-9]{2}-[0-9]{2} - [0-9]{4}-[0-9]{2}-[0-9]{2}$')]),
			invoiceType: new FormControl<InvoiceInvoiceType | null | undefined>(undefined),
			issueDate: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[0-9]{4}-[0-9]{2}-[0-9]{2}$')]),
			note: new FormControl<string | null | undefined>(undefined),
			orderReference: new FormControl<string | null | undefined>(undefined),
			paymentMeansBic: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[A-Z]{6}[2-9A-Z][0-9A-NP-Z]([A-Z0-9]{3}|X{3})?$')]),
			paymentMeansCode: new FormControl<InvoicePaymentMeansCode | null | undefined>(undefined),
			paymentMeansIban: new FormControl<string | null | undefined>(undefined),
			paymentMeansPaymentId: new FormControl<string | null | undefined>(undefined),
			preferredInvoiceType: new FormControl<InvoicePreferredInvoiceType | null | undefined>(undefined),
			prepaidAmount: new FormControl<number | null | undefined>(undefined),
			priceMode: new FormControl<InvoicePriceMode | null | undefined>(undefined),
			projectReference: new FormControl<string | null | undefined>(undefined),
			salesOrderId: new FormControl<string | null | undefined>(undefined),
			selfBillingMode: new FormControl<boolean | null | undefined>(undefined),
			taxExemptReason: new FormControl<InvoiceTaxExemptReason | null | undefined>(undefined),
			taxPointDate: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[0-9]{4}-[0-9]{2}-[0-9]{2}$')]),
			taxSystem: new FormControl<InvoiceTaxSystem | null | undefined>(undefined),
			transactionType: new FormControl<InvoiceTransactionType | null | undefined>(undefined),
			vatReverseCharge: new FormControl<boolean | null | undefined>(undefined),
			x2y: new FormControl<InvoiceX2y | null | undefined>(undefined),
		});

	}

	export interface InvoiceLine {

		/**
		 * The buyer's accounting cost centre for this invoice line, expressed as text.
		 * Min length: 1
		 */
		accountingCost?: string | null;

		/**
		 * An array of additional item properties.
		 * Minimum items: 0
		 */
		additionalItemProperties?: Array<AdditionalItemProperty>;

		/** The discount or surcharge on this item. Should be negative for discounts */
		allowanceCharge?: number | null;

		/**
		 * An array of allowance charges. NOTE: this is currently supported only when sending from/to Italy.
		 * Minimum items: 0
		 */
		allowanceCharges?: Array<LineAllowanceCharge>;

		/** The amount excluding tax. EXPERIMENTAL. Use amountExcludingVat. */
		amountExcludingTax?: number | null;

		/** The amount excluding VAT. Should equal quantity x itemPrice + allowanceCharge. */
		amountExcludingVat?: number | null;

		/** The amount including tax. Can only be used for "priceMode": "price_mode_gross". Use either this property or amountExcludingTax (amountExcludingVat). */
		amountIncludingTax?: number | null;

		/**
		 * DEPRECATED. Use the references array with 'line_buyers_item_identification' documentType. The ID the buyer assigned to this item.
		 * Min length: 1
		 */
		buyersItemIdentification?: string | null;

		/**
		 * The description for this invoice line.
		 * Min length: 1
		 */
		description?: string | null;

		/** The period (or specific date) to which the invoice line applies. Format: yyyy-mm-dd - yyyy-mm-dd. */
		invoicePeriod?: string | null;

		/** The price per item (may be fractional) */
		itemPrice?: number | null;

		/**
		 * The id for this invoice line.
		 * Min length: 1
		 */
		lineId?: string | null;

		/**
		 * A short name for this invoice line. If not provided, it will be taken from description and description will be set to an emtpy string.
		 * Min length: 1
		 */
		name?: string | null;

		/** A note to add to the document line */
		note?: string | null;

		/**
		 * A reference to the LineID of the order. The order itself is specified as the orderReference at the invoice level. It is not possible to specify an orderReference at the invoice line level. An invoice MUST at this time be for a single order only.
		 * Min length: 1
		 */
		orderLineReferenceLineId?: string | null;

		/** The number of items (may be fractional). */
		quantity?: number | null;

		/** The unit of measure that applies to the invoiced quantity. Codes for unit of packaging from UNECE Recommendation No. 21 can be used in accordance with the descriptions in the "Intro" section of UN/ECE Recommendation 20, Revision 11 (2015): The 2 character alphanumeric code values in UNECE Recommendation 21 shall be used. To avoid duplication with existing code values in UNECE Recommendation No. 20, each code value from UNECE Recommendation 21 shall be prefixed with an “X”, resulting in a 3 alphanumeric code when used as a unit of measure. Note that the following additionally allowed codes are deprecated and will be converted to C62: 04, 05, 08, 16, 17, 18, 19, 26, 29, 30, 31, 32, 36, 43, 44, 45, 46, 47, 48, 53, 54, 62, 63, 64, 66, 69, 71, 72, 73, 76, 78, 84, 90, 92, 93, 94, 95, 96, 97, 98, 1A, 1B, 1C, 1D, 1E, 1F, 1G, 1H, 1J, 1K, 1L, 1M, 1X, 2V, 2W, 3E, 3G, 3H, 3I, 4A, 4B, 4E, 5C, 5F, 5G, 5H, 5I, 5K, 5P, 5Q, A1, A25, A50, A51, A52, A57, A58, A60, A61, A62, A63, A64, A65, A66, A67, A77, A78, A79, A80, A81, A82, A83, AJ, AM, AP, AR, ARE, ATT, AV, AW, B0, B2, B36, B37, B38, B39, B40, B5, B51, B6, B65, B9, BD, BE, BG, BH, BJ, BK, BL, BO, BR, BT, BW, BX, BZ, C1, C2, C4, C5, C6, C77, C98, CA, CH, CJ, CK, CL, CO, CQ, CR, CS, CT, CU, CV, CY, CZ, D14, D28, D35, D37, D38, D39, D40, D64, D66, D67, D7, D70, D71, D72, D75, D76, D79, D8, D9, D90, D92, D96, D97, D98, D99, DC, DE, DI, DQ, DR, DRM, DS, DU, DX, DY, E2, E3, E5, EC, EP, EV, F1, F9, FB, FD, FE, FG, FM, G7, GC, GD, GH, GK, GN, GRT, GT, GW, GY, GZ, H1, H2, HAR, HD, HE, HF, HI, HJ, HK, HL, HN, HO, HP, HS, HT, HY, IC, IF, II, IL, IM, IP, IT, JB, JG, JO, JR, K5, KD, KF, KG, KS, KTM, LC, LE, LI, LJ, LX, M0, MA, MF, MK, MQ, MT, MV, N2, NB, NBB, NC, ND, NE, NG, NH, NI, NJ, NN, NPL, NPR, NQ, NR, NRL, NTT, NV, NY, OP, OZ, P0, P3, P4, P6, P7, P8, P9, PA, PB, PE, PF, PG, PK, PL, PM, PN, PT, PU, PV, PW, PY, PZ, QD, QH, QK, QT, R4, RA, RD, RG, RK, RL, RN, RO, RS, RU, S5, S6, S7, S8, SA, SD, SE, SHT, SK, SL, SN, SO, SP, SS, SST, ST, SV, T1, T4, T5, T6, T7, T8, TA, TC, TD, TE, TF, TJ, TK, TL, TN, TQ, TR, TS, TSD, TSH, TT, TU, TV, TW, TY, UA, UD, UE, UF, UH, UM, VI, VQ, VS, W4, WH, WI, WR, WW, YL, YT, Z1, Z2, Z3, Z4, Z5, Z6, Z8 */
		quantityUnitCode?: OrderLineQuantityUnitCode | null;

		/**
		 * An array of references to other documents or codes. Note that many syntaxes do not support multiple references of the same type in which case they will be concatenated with ','. Also, not all syntaxes support all documentTypes.
		 * Minimum items: 0
		 */
		references?: Array<Reference>;

		/**
		 * DEPRECATED. Use the references array with 'line_sellers_item_identification' documentType. The ID the seller assigned to this item.
		 * Min length: 1
		 */
		sellersItemIdentification?: string | null;

		/**
		 * Standardized ID for the item.
		 * Min length: 1
		 */
		standardItemIdentification?: string | null;

		/**
		 * DEPRECATED. Use the references array with 'line_standard_item_identification' documentType. The scheme agency for the standardized ID for the item.
		 * Min length: 1
		 */
		standardItemIdentificationSchemeAgencyId?: string | null;

		/**
		 * DEPRECATED. Use the references array with 'line_standard_item_identification' documentType. The scheme for the standardized ID for the item.
		 * Min length: 1
		 */
		standardItemIdentificationSchemeId?: string | null;
		tax?: Tax;

		/**
		 * An array of taxes, duties and fees for this invoice line. Multiple taxesDutiesFees items is allowed only for IN (India) and US (USA) taxes. All other countries can only have a single Tax item in this array.
		 * Minimum items: 0
		 */
		taxesDutiesFees?: Array<Tax>;
	}
	export interface InvoiceLineFormProperties {

		/**
		 * The buyer's accounting cost centre for this invoice line, expressed as text.
		 * Min length: 1
		 */
		accountingCost: FormControl<string | null | undefined>,

		/** The discount or surcharge on this item. Should be negative for discounts */
		allowanceCharge: FormControl<number | null | undefined>,

		/** The amount excluding tax. EXPERIMENTAL. Use amountExcludingVat. */
		amountExcludingTax: FormControl<number | null | undefined>,

		/** The amount excluding VAT. Should equal quantity x itemPrice + allowanceCharge. */
		amountExcludingVat: FormControl<number | null | undefined>,

		/** The amount including tax. Can only be used for "priceMode": "price_mode_gross". Use either this property or amountExcludingTax (amountExcludingVat). */
		amountIncludingTax: FormControl<number | null | undefined>,

		/**
		 * DEPRECATED. Use the references array with 'line_buyers_item_identification' documentType. The ID the buyer assigned to this item.
		 * Min length: 1
		 */
		buyersItemIdentification: FormControl<string | null | undefined>,

		/**
		 * The description for this invoice line.
		 * Min length: 1
		 */
		description: FormControl<string | null | undefined>,

		/** The period (or specific date) to which the invoice line applies. Format: yyyy-mm-dd - yyyy-mm-dd. */
		invoicePeriod: FormControl<string | null | undefined>,

		/** The price per item (may be fractional) */
		itemPrice: FormControl<number | null | undefined>,

		/**
		 * The id for this invoice line.
		 * Min length: 1
		 */
		lineId: FormControl<string | null | undefined>,

		/**
		 * A short name for this invoice line. If not provided, it will be taken from description and description will be set to an emtpy string.
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/** A note to add to the document line */
		note: FormControl<string | null | undefined>,

		/**
		 * A reference to the LineID of the order. The order itself is specified as the orderReference at the invoice level. It is not possible to specify an orderReference at the invoice line level. An invoice MUST at this time be for a single order only.
		 * Min length: 1
		 */
		orderLineReferenceLineId: FormControl<string | null | undefined>,

		/** The number of items (may be fractional). */
		quantity: FormControl<number | null | undefined>,

		/** The unit of measure that applies to the invoiced quantity. Codes for unit of packaging from UNECE Recommendation No. 21 can be used in accordance with the descriptions in the "Intro" section of UN/ECE Recommendation 20, Revision 11 (2015): The 2 character alphanumeric code values in UNECE Recommendation 21 shall be used. To avoid duplication with existing code values in UNECE Recommendation No. 20, each code value from UNECE Recommendation 21 shall be prefixed with an “X”, resulting in a 3 alphanumeric code when used as a unit of measure. Note that the following additionally allowed codes are deprecated and will be converted to C62: 04, 05, 08, 16, 17, 18, 19, 26, 29, 30, 31, 32, 36, 43, 44, 45, 46, 47, 48, 53, 54, 62, 63, 64, 66, 69, 71, 72, 73, 76, 78, 84, 90, 92, 93, 94, 95, 96, 97, 98, 1A, 1B, 1C, 1D, 1E, 1F, 1G, 1H, 1J, 1K, 1L, 1M, 1X, 2V, 2W, 3E, 3G, 3H, 3I, 4A, 4B, 4E, 5C, 5F, 5G, 5H, 5I, 5K, 5P, 5Q, A1, A25, A50, A51, A52, A57, A58, A60, A61, A62, A63, A64, A65, A66, A67, A77, A78, A79, A80, A81, A82, A83, AJ, AM, AP, AR, ARE, ATT, AV, AW, B0, B2, B36, B37, B38, B39, B40, B5, B51, B6, B65, B9, BD, BE, BG, BH, BJ, BK, BL, BO, BR, BT, BW, BX, BZ, C1, C2, C4, C5, C6, C77, C98, CA, CH, CJ, CK, CL, CO, CQ, CR, CS, CT, CU, CV, CY, CZ, D14, D28, D35, D37, D38, D39, D40, D64, D66, D67, D7, D70, D71, D72, D75, D76, D79, D8, D9, D90, D92, D96, D97, D98, D99, DC, DE, DI, DQ, DR, DRM, DS, DU, DX, DY, E2, E3, E5, EC, EP, EV, F1, F9, FB, FD, FE, FG, FM, G7, GC, GD, GH, GK, GN, GRT, GT, GW, GY, GZ, H1, H2, HAR, HD, HE, HF, HI, HJ, HK, HL, HN, HO, HP, HS, HT, HY, IC, IF, II, IL, IM, IP, IT, JB, JG, JO, JR, K5, KD, KF, KG, KS, KTM, LC, LE, LI, LJ, LX, M0, MA, MF, MK, MQ, MT, MV, N2, NB, NBB, NC, ND, NE, NG, NH, NI, NJ, NN, NPL, NPR, NQ, NR, NRL, NTT, NV, NY, OP, OZ, P0, P3, P4, P6, P7, P8, P9, PA, PB, PE, PF, PG, PK, PL, PM, PN, PT, PU, PV, PW, PY, PZ, QD, QH, QK, QT, R4, RA, RD, RG, RK, RL, RN, RO, RS, RU, S5, S6, S7, S8, SA, SD, SE, SHT, SK, SL, SN, SO, SP, SS, SST, ST, SV, T1, T4, T5, T6, T7, T8, TA, TC, TD, TE, TF, TJ, TK, TL, TN, TQ, TR, TS, TSD, TSH, TT, TU, TV, TW, TY, UA, UD, UE, UF, UH, UM, VI, VQ, VS, W4, WH, WI, WR, WW, YL, YT, Z1, Z2, Z3, Z4, Z5, Z6, Z8 */
		quantityUnitCode: FormControl<OrderLineQuantityUnitCode | null | undefined>,

		/**
		 * DEPRECATED. Use the references array with 'line_sellers_item_identification' documentType. The ID the seller assigned to this item.
		 * Min length: 1
		 */
		sellersItemIdentification: FormControl<string | null | undefined>,

		/**
		 * Standardized ID for the item.
		 * Min length: 1
		 */
		standardItemIdentification: FormControl<string | null | undefined>,

		/**
		 * DEPRECATED. Use the references array with 'line_standard_item_identification' documentType. The scheme agency for the standardized ID for the item.
		 * Min length: 1
		 */
		standardItemIdentificationSchemeAgencyId: FormControl<string | null | undefined>,

		/**
		 * DEPRECATED. Use the references array with 'line_standard_item_identification' documentType. The scheme for the standardized ID for the item.
		 * Min length: 1
		 */
		standardItemIdentificationSchemeId: FormControl<string | null | undefined>,
	}
	export function CreateInvoiceLineFormGroup() {
		return new FormGroup<InvoiceLineFormProperties>({
			accountingCost: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			allowanceCharge: new FormControl<number | null | undefined>(undefined),
			amountExcludingTax: new FormControl<number | null | undefined>(undefined),
			amountExcludingVat: new FormControl<number | null | undefined>(undefined),
			amountIncludingTax: new FormControl<number | null | undefined>(undefined),
			buyersItemIdentification: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			invoicePeriod: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[0-9]{4}-[0-9]{2}-[0-9]{2} - [0-9]{4}-[0-9]{2}-[0-9]{2}$')]),
			itemPrice: new FormControl<number | null | undefined>(undefined),
			lineId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			note: new FormControl<string | null | undefined>(undefined),
			orderLineReferenceLineId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			quantity: new FormControl<number | null | undefined>(undefined),
			quantityUnitCode: new FormControl<OrderLineQuantityUnitCode | null | undefined>(undefined),
			sellersItemIdentification: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			standardItemIdentification: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			standardItemIdentificationSchemeAgencyId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			standardItemIdentificationSchemeId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
		});

	}

	export enum InvoiceInvoiceType { _380 = 0, _381 = 1, _384 = 2 }


	/** A PaymentMeans is a way to pay the invoice. */
	export interface PaymentMeans {

		/** The account number. */
		account?: string | null;

		/** The amount to be paid for this category. Only used for Dutch G-Account invoices. The amount nl_ga_beneficiary + amount nl_ga_gaccount must add up to the amountExcludingVat */
		amount?: number | null;

		/** The bank branch code. Not required for IBAN numbers. Often referred to as Swift or Bic code. */
		branche_code?: string | null;

		/**
		 * How the invoice has been / will be paid. The code determines which type of PaymentMeans is used and which fields are mandatory.
		 * ++++
		 * <ul>    <li>        <strong>cash</strong><br/>        The invoice was/is paid in cash.<br/>    </li>    <li>        <strong>bank_cheque</strong><br/>        The invoice was/is paid via a bank cheque.<br/>    </li>    <li>        <strong>cashiers_cheque</strong><br/>        The invoice was/is paid via a cashiers cheque.<br/>    </li>    <li>        <strong>credit_transfer</strong><br/>        The amount is to be transfered into a bank account. Relevant additional fields:<br/>        <ul>            <li>                <strong>account</strong><br/>                The account number. For New Zealand, this should hold the full 16 digit bank account number. <strong>Mandatory</strong>.            </li>            <li>                <strong>branche_code</strong><br/>                In case of an IBAN, the account alone number is sufficient. In other cases, like a BBAN, a BIC code or other additional identifier is required. For Australia, the BSB goes here. Optional.            </li>            <li>                <strong>holder</strong><br/>                The account holder name. Optional.            </li>        </ul>    </li>    <li>        <strong>debit_transfer</strong><br/>        Used for CreditNotes. The amount is to be transfered by the sender of the document into the bank account of the receiver of the document. Relevant additional fields:<br/>        <ul>            <li>                <strong>account</strong><br/>                The account number. For New Zealand, this should hold the full 16 digit bank account number. <strong>Mandatory</strong>.            </li>            <li>                <strong>branche_code</strong><br/>                In case of an IBAN, the account alone number is sufficient. In other cases, like a BBAN, a BIC code or other additional identifier is required. For Australia, the BSB goes here. Optional.            </li>        </ul>    </li>    <li>        <strong>direct_debit</strong><br/>        Direct debit. Relevant additional fields:<br/>        <ul>            <li>                <strong>account</strong><br/>                The account number from which the funds will be debited. <strong>Mandatory</strong>.            </li>            <li>                <strong>mandate</strong><br/>                The direct debit mandate id. Mandatory.            </li>            <li>                <strong>holder</strong><br/>                The account holder name. Optional.            </li>        </ul>    </li>    <li>        <strong>card, credit_card, bank_card (credit_card, bank_card are deprecated)</strong><br/>        E.g. credit or debit card. Relevant additional fields:<br/>        <ul>            <li>                <strong>account</strong><br/>                The card number, but never more than the last four digits. <strong>Mandatory</strong>.            </li>            <li>                <strong>holder</strong><br/>                The account holder name. Optional.            </li>            <li>                <strong>network</strong><br/>                The payment network, e.g. VISA, SEPA. Optional, but recommended since a default of "N/A" may be used if not provided.            </li>        </ul>    </li>    <li>        <strong>online_payment_service</strong><br/>        An online payment service has been or will be used. Relevant additional fields:<br/>        <ul>            <li>                <strong>network</strong><br/>                The payment network, e.g. PayPal. <strong>Mandatory unless url is provided</strong>.            </li>            <li>                <strong>url</strong><br/>                The URL to execute the payment. <strong>Mandatory unless network is provided</strong>.            </li>        </ul>        It is possible to provide both url and network. Note that for UBL, in countries where this payment means is not allowed, this will translate into an AdditionalDocumentReference.Attachment.ExternalReference element.    </li>    <li>        <strong>standing_agreement</strong><br/>        The payment means has been agreed out of band. Relevant additional fields: none.    </li>    <li>        <strong>aunz_npp_payid, aunz_npp (aunz_npp is deprecated)</strong><br/>        Australia/New Zealand New Payments Platform. Relevant additional fields:<br/>        <ul>            <li>                <strong>account</strong><br/>                PayID. May be an email address, ABN, mobile phone number etc. <strong>Mandatory</strong>.            </li>        </ul>    </li>    <li>        <strong>aunz_npp_payto</strong><br/>        Australia/New Zealand New Payments Platform. Relevant additional fields:<br/>        <ul>            <li>                <strong>account</strong><br/>                Account number. <strong>Mandatory</strong>.            </li>            <li>                <strong>mandate</strong><br/>                Mandate/direct debit authority reference/PayTo Agreement. <strong>Mandatory</strong>.            </li>        </ul>    </li>    <li>        <strong>aunz_bpay</strong><br/>        Australia/New Zealand New Payments Platform. Relevant additional fields:<br/>        <ul>            <li>                <strong>account</strong><br/>                Biller code. <strong>Mandatory</strong>.            </li>            <li>                <strong>holder</strong><br/>                The account holder name. Optional.            </li>        </ul>    </li>    <li>        <strong>aunz_postbillpay</strong><br/>        Australia/New Zealand New Payments Platform. Relevant additional fields:<br/>        <ul>            <li>                <strong>account</strong><br/>                Biller code. <strong>Mandatory.</strong>.            </li>            <li>                <strong>holder</strong><br/>                The account holder name. Optional.            </li>        </ul>    </li>    <li>        <strong>aunz_uri</strong><br/>        Australia/New Zealand URI. Relevant additional fields:<br/>        <ul>            <li>                <strong>account</strong><br/>                Payment URI. <strong>Mandatory.</strong>.            </li>            <li>                <strong>holder</strong><br/>                The account holder name. Optional.            </li>        </ul>    </li>    <li>        <strong>se_bankgiro</strong><br/>        Swedish Bankgiro. Relevant additional fields:<br/>        <ul>            <li>                <strong>account</strong><br/>                The account number from which the funds will be debited, 7 or 8 digits. <strong>Mandatory</strong>.            </li>            <li>                <strong>holder</strong><br/>                The account holder name. Optional.            </li>        </ul>        <br/>    </li>    <li>        <strong>se_plusgiro</strong><br/>        Swedish Plusgiro. Relevant additional fields:<br/>        <ul>            <li>                <strong>account</strong><br/>                The account number from which the funds will be debited, 2 - 8 digits. <strong>Mandatory</strong>.            </li>            <li>                <strong>holder</strong><br/>                The account holder name. Optional.            </li>        </ul>        <br/>    </li>    <li>        <strong>sg_giro</strong><br/>        Singapore GIRO-system (direct debit). Relevant additional fields: none.    </li>    <li>        <strong>sg_card</strong><br/>        Singapore CreditCard payment. Relevant additional fields: none.    </li>    <li>        <strong>sg_paynow</strong><br/>        Singapore PayNow Corporate.  Relevant additional fields:<br/>        <ul>            <li>                <strong>account</strong><br/>                The UEN, format: UENxxxxxxxxxx. <strong>Mandatory</strong>.            </li>        </ul>    </li>    <li>        <strong>it_mav</strong><br/>        Italy MAV payment.    </li>    <li>        <strong>it_pagopa</strong><br/>        Italy PagoPA payment.    </li></ul>
		 * ++++
		 * Required
		 */
		code: PaymentMeansCode;

		/** The name of the account holder. */
		holder?: string | null;

		/** The direct debit mandate code. */
		mandate?: string | null;

		/** The name of the card network, e.g. VISA. */
		network?: string | null;

		/** The payment id that you will use to match the payment against the invoice. */
		paymentId?: string | null;
	}

	/** A PaymentMeans is a way to pay the invoice. */
	export interface PaymentMeansFormProperties {

		/** The account number. */
		account: FormControl<string | null | undefined>,

		/** The amount to be paid for this category. Only used for Dutch G-Account invoices. The amount nl_ga_beneficiary + amount nl_ga_gaccount must add up to the amountExcludingVat */
		amount: FormControl<number | null | undefined>,

		/** The bank branch code. Not required for IBAN numbers. Often referred to as Swift or Bic code. */
		branche_code: FormControl<string | null | undefined>,

		/**
		 * How the invoice has been / will be paid. The code determines which type of PaymentMeans is used and which fields are mandatory.
		 * ++++
		 * <ul>    <li>        <strong>cash</strong><br/>        The invoice was/is paid in cash.<br/>    </li>    <li>        <strong>bank_cheque</strong><br/>        The invoice was/is paid via a bank cheque.<br/>    </li>    <li>        <strong>cashiers_cheque</strong><br/>        The invoice was/is paid via a cashiers cheque.<br/>    </li>    <li>        <strong>credit_transfer</strong><br/>        The amount is to be transfered into a bank account. Relevant additional fields:<br/>        <ul>            <li>                <strong>account</strong><br/>                The account number. For New Zealand, this should hold the full 16 digit bank account number. <strong>Mandatory</strong>.            </li>            <li>                <strong>branche_code</strong><br/>                In case of an IBAN, the account alone number is sufficient. In other cases, like a BBAN, a BIC code or other additional identifier is required. For Australia, the BSB goes here. Optional.            </li>            <li>                <strong>holder</strong><br/>                The account holder name. Optional.            </li>        </ul>    </li>    <li>        <strong>debit_transfer</strong><br/>        Used for CreditNotes. The amount is to be transfered by the sender of the document into the bank account of the receiver of the document. Relevant additional fields:<br/>        <ul>            <li>                <strong>account</strong><br/>                The account number. For New Zealand, this should hold the full 16 digit bank account number. <strong>Mandatory</strong>.            </li>            <li>                <strong>branche_code</strong><br/>                In case of an IBAN, the account alone number is sufficient. In other cases, like a BBAN, a BIC code or other additional identifier is required. For Australia, the BSB goes here. Optional.            </li>        </ul>    </li>    <li>        <strong>direct_debit</strong><br/>        Direct debit. Relevant additional fields:<br/>        <ul>            <li>                <strong>account</strong><br/>                The account number from which the funds will be debited. <strong>Mandatory</strong>.            </li>            <li>                <strong>mandate</strong><br/>                The direct debit mandate id. Mandatory.            </li>            <li>                <strong>holder</strong><br/>                The account holder name. Optional.            </li>        </ul>    </li>    <li>        <strong>card, credit_card, bank_card (credit_card, bank_card are deprecated)</strong><br/>        E.g. credit or debit card. Relevant additional fields:<br/>        <ul>            <li>                <strong>account</strong><br/>                The card number, but never more than the last four digits. <strong>Mandatory</strong>.            </li>            <li>                <strong>holder</strong><br/>                The account holder name. Optional.            </li>            <li>                <strong>network</strong><br/>                The payment network, e.g. VISA, SEPA. Optional, but recommended since a default of "N/A" may be used if not provided.            </li>        </ul>    </li>    <li>        <strong>online_payment_service</strong><br/>        An online payment service has been or will be used. Relevant additional fields:<br/>        <ul>            <li>                <strong>network</strong><br/>                The payment network, e.g. PayPal. <strong>Mandatory unless url is provided</strong>.            </li>            <li>                <strong>url</strong><br/>                The URL to execute the payment. <strong>Mandatory unless network is provided</strong>.            </li>        </ul>        It is possible to provide both url and network. Note that for UBL, in countries where this payment means is not allowed, this will translate into an AdditionalDocumentReference.Attachment.ExternalReference element.    </li>    <li>        <strong>standing_agreement</strong><br/>        The payment means has been agreed out of band. Relevant additional fields: none.    </li>    <li>        <strong>aunz_npp_payid, aunz_npp (aunz_npp is deprecated)</strong><br/>        Australia/New Zealand New Payments Platform. Relevant additional fields:<br/>        <ul>            <li>                <strong>account</strong><br/>                PayID. May be an email address, ABN, mobile phone number etc. <strong>Mandatory</strong>.            </li>        </ul>    </li>    <li>        <strong>aunz_npp_payto</strong><br/>        Australia/New Zealand New Payments Platform. Relevant additional fields:<br/>        <ul>            <li>                <strong>account</strong><br/>                Account number. <strong>Mandatory</strong>.            </li>            <li>                <strong>mandate</strong><br/>                Mandate/direct debit authority reference/PayTo Agreement. <strong>Mandatory</strong>.            </li>        </ul>    </li>    <li>        <strong>aunz_bpay</strong><br/>        Australia/New Zealand New Payments Platform. Relevant additional fields:<br/>        <ul>            <li>                <strong>account</strong><br/>                Biller code. <strong>Mandatory</strong>.            </li>            <li>                <strong>holder</strong><br/>                The account holder name. Optional.            </li>        </ul>    </li>    <li>        <strong>aunz_postbillpay</strong><br/>        Australia/New Zealand New Payments Platform. Relevant additional fields:<br/>        <ul>            <li>                <strong>account</strong><br/>                Biller code. <strong>Mandatory.</strong>.            </li>            <li>                <strong>holder</strong><br/>                The account holder name. Optional.            </li>        </ul>    </li>    <li>        <strong>aunz_uri</strong><br/>        Australia/New Zealand URI. Relevant additional fields:<br/>        <ul>            <li>                <strong>account</strong><br/>                Payment URI. <strong>Mandatory.</strong>.            </li>            <li>                <strong>holder</strong><br/>                The account holder name. Optional.            </li>        </ul>    </li>    <li>        <strong>se_bankgiro</strong><br/>        Swedish Bankgiro. Relevant additional fields:<br/>        <ul>            <li>                <strong>account</strong><br/>                The account number from which the funds will be debited, 7 or 8 digits. <strong>Mandatory</strong>.            </li>            <li>                <strong>holder</strong><br/>                The account holder name. Optional.            </li>        </ul>        <br/>    </li>    <li>        <strong>se_plusgiro</strong><br/>        Swedish Plusgiro. Relevant additional fields:<br/>        <ul>            <li>                <strong>account</strong><br/>                The account number from which the funds will be debited, 2 - 8 digits. <strong>Mandatory</strong>.            </li>            <li>                <strong>holder</strong><br/>                The account holder name. Optional.            </li>        </ul>        <br/>    </li>    <li>        <strong>sg_giro</strong><br/>        Singapore GIRO-system (direct debit). Relevant additional fields: none.    </li>    <li>        <strong>sg_card</strong><br/>        Singapore CreditCard payment. Relevant additional fields: none.    </li>    <li>        <strong>sg_paynow</strong><br/>        Singapore PayNow Corporate.  Relevant additional fields:<br/>        <ul>            <li>                <strong>account</strong><br/>                The UEN, format: UENxxxxxxxxxx. <strong>Mandatory</strong>.            </li>        </ul>    </li>    <li>        <strong>it_mav</strong><br/>        Italy MAV payment.    </li>    <li>        <strong>it_pagopa</strong><br/>        Italy PagoPA payment.    </li></ul>
		 * ++++
		 * Required
		 */
		code: FormControl<PaymentMeansCode | null | undefined>,

		/** The name of the account holder. */
		holder: FormControl<string | null | undefined>,

		/** The direct debit mandate code. */
		mandate: FormControl<string | null | undefined>,

		/** The name of the card network, e.g. VISA. */
		network: FormControl<string | null | undefined>,

		/** The payment id that you will use to match the payment against the invoice. */
		paymentId: FormControl<string | null | undefined>,
	}
	export function CreatePaymentMeansFormGroup() {
		return new FormGroup<PaymentMeansFormProperties>({
			account: new FormControl<string | null | undefined>(undefined),
			amount: new FormControl<number | null | undefined>(undefined),
			branche_code: new FormControl<string | null | undefined>(undefined),
			code: new FormControl<PaymentMeansCode | null | undefined>(undefined, [Validators.required]),
			holder: new FormControl<string | null | undefined>(undefined),
			mandate: new FormControl<string | null | undefined>(undefined),
			network: new FormControl<string | null | undefined>(undefined),
			paymentId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum PaymentMeansCode { credit_transfer = 0, debit_transfer = 1, direct_debit = 2, card = 3, bank_card = 4, credit_card = 5, online_payment_service = 6, cash = 7, bank_cheque = 8, cashiers_cheque = 9, standing_agreement = 10, aunz_npp = 11, aunz_npp_payid = 12, aunz_npp_payto = 13, aunz_bpay = 14, aunz_postbillpay = 15, aunz_uri = 16, se_bankgiro = 17, se_plusgiro = 18, sg_giro = 19, sg_card = 20, sg_paynow = 21, it_mav = 22, it_pagopa = 23, nl_ga_beneficiary = 24, nl_ga_gaccount = 25, undefined = 26 }

	export enum InvoicePaymentMeansCode { online_payment_service = 0, bank_card = 1, direct_debit = 2, standing_agreement = 3, credit_transfer = 4, se_bankgiro = 5, se_plusgiro = 6, aunz_npp = 7, '' = 8, _1 = 9, _30 = 10, _31 = 11, _42 = 12, _48 = 13, _49 = 14, _57 = 15, _58 = 16 }

	export enum InvoicePreferredInvoiceType { prefer_autodetect = 0, prefer_invoice = 1, prefer_creditnote = 2 }

	export enum InvoicePriceMode { price_mode_net = 0, price_mode_gross = 1 }

	export enum InvoiceTaxExemptReason { export = 0, reverse_charge = 1, zero_rated = 2, exempt = 3, outside_scope = 4, intra_community = 5 }


	/** The total amount of tax of this type in the invoice. */
	export interface TaxSubtotal {

		/** The tax category. For a description see <<_openapi_tax>> */
		category?: TaxCategory | null;

		/**
		 * An ISO 3166-1 alpha-2 country code.
		 * Required
		 */
		country: AddressCountry;

		/**
		 * The tax percentage. This should be a valid tax percentage in the country at the time of the taxpointDate of this invoice.
		 * Required
		 */
		percentage: number;

		/**
		 * The amount of tax.
		 * Required
		 */
		taxAmount: number;

		/**
		 * The amount on which the tax is levied.
		 * Required
		 */
		taxableAmount: number;
	}

	/** The total amount of tax of this type in the invoice. */
	export interface TaxSubtotalFormProperties {

		/** The tax category. For a description see <<_openapi_tax>> */
		category: FormControl<TaxCategory | null | undefined>,

		/**
		 * An ISO 3166-1 alpha-2 country code.
		 * Required
		 */
		country: FormControl<AddressCountry | null | undefined>,

		/**
		 * The tax percentage. This should be a valid tax percentage in the country at the time of the taxpointDate of this invoice.
		 * Required
		 */
		percentage: FormControl<number | null | undefined>,

		/**
		 * The amount of tax.
		 * Required
		 */
		taxAmount: FormControl<number | null | undefined>,

		/**
		 * The amount on which the tax is levied.
		 * Required
		 */
		taxableAmount: FormControl<number | null | undefined>,
	}
	export function CreateTaxSubtotalFormGroup() {
		return new FormGroup<TaxSubtotalFormProperties>({
			category: new FormControl<TaxCategory | null | undefined>(undefined),
			country: new FormControl<AddressCountry | null | undefined>(undefined, [Validators.required]),
			percentage: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			taxAmount: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			taxableAmount: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum InvoiceTaxSystem { tax_line_amounts = 0, tax_line_percentages = 1 }

	export enum InvoiceTransactionType { b2b = 0, sezwp = 1, sezwop = 2, expwp = 3, expwop = 4, dexp = 5 }

	export enum InvoiceX2y { b2b = 0, b2g = 1, b2c = 2, b2b_sez = 3 }


	/** A document to send, in base64 encoded format. */
	export interface RawDocumentData {

		/**
		 * The base64 encoded version of the document.
		 * Required
		 * Min length: 5
		 */
		document: string;

		/** The document type id of the document. Required when parse == false. */
		documentTypeId?: string | null;

		/** *** NOTE: only parse == true is currently supported *** *** NOTE: parsing is only supported for documentType == 'invoice' *** Whether or not to parse the document. If true, the data will be extracted from the document and used to construct a new document. If false, the document will be sent as is. In this case, you must ensure the document validates without any errors against the relevant validation artifacts for that processId/documentTypeId. We automatically apply updates of the validation artificats, respecting the grace period provided by the issuer. During that period, documents that validate against either the old as well as against the new artifacts are accepted. After the grace period, your document must validate against the new artifacts. You are also responsible for making sure your receiver is able to receive the updated document. */
		parse?: boolean | null;

		/** How to parse the document. Only needed when parse == true. */
		parseStrategy?: RawDocumentDataParseStrategy | null;

		/** The process id of the document. Required when parse == false. */
		processId?: string | null;
	}

	/** A document to send, in base64 encoded format. */
	export interface RawDocumentDataFormProperties {

		/**
		 * The base64 encoded version of the document.
		 * Required
		 * Min length: 5
		 */
		document: FormControl<string | null | undefined>,

		/** The document type id of the document. Required when parse == false. */
		documentTypeId: FormControl<string | null | undefined>,

		/** *** NOTE: only parse == true is currently supported *** *** NOTE: parsing is only supported for documentType == 'invoice' *** Whether or not to parse the document. If true, the data will be extracted from the document and used to construct a new document. If false, the document will be sent as is. In this case, you must ensure the document validates without any errors against the relevant validation artifacts for that processId/documentTypeId. We automatically apply updates of the validation artificats, respecting the grace period provided by the issuer. During that period, documents that validate against either the old as well as against the new artifacts are accepted. After the grace period, your document must validate against the new artifacts. You are also responsible for making sure your receiver is able to receive the updated document. */
		parse: FormControl<boolean | null | undefined>,

		/** How to parse the document. Only needed when parse == true. */
		parseStrategy: FormControl<RawDocumentDataParseStrategy | null | undefined>,

		/** The process id of the document. Required when parse == false. */
		processId: FormControl<string | null | undefined>,
	}
	export function CreateRawDocumentDataFormGroup() {
		return new FormGroup<RawDocumentDataFormProperties>({
			document: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(5)]),
			documentTypeId: new FormControl<string | null | undefined>(undefined),
			parse: new FormControl<boolean | null | undefined>(undefined),
			parseStrategy: new FormControl<RawDocumentDataParseStrategy | null | undefined>(undefined),
			processId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum RawDocumentDataParseStrategy { ubl = 0, cii = 1, idoc = 2 }


	/** The different ways to send the invoice to the recipient. The publicIdentifiers are used to send via the Peppol network, if the recipient is not registered on the Peppol network, the invoice will be sent to the email addresses in the emails property. This property is only mandatory when sending the invoice data using the <<_openapi_invoice>> property, not when sending using the <<_openapi_invoicedata>> property, in which case this information will be extracted from the <<_openapi_invoicedata>> object. If you do specify an <<_openapi_invoicerecipient>> object and an <<_openapi_invoicedata>> object, the data from the two will be merged. */
	export interface Routing {

		/** If you wish to send the document yourself in a Y-flow, use this flag. Wait for the 'cleared' webhook and use the <<_openapi_show_document_submission_evidence>> endpoint to retrieve the clearing evidence. This will include a sendable document. */
		clearWithoutSending?: boolean | null;

		/** A list of electronic routing identifiers. These are the identifiers used on the Peppol network or for other destinations. */
		eIdentifiers?: Array<RoutingIdentifier>;

		/** The email addresses the invoice should be sent to if none of the other identifiers can be used */
		emails?: Array<string>;
	}

	/** The different ways to send the invoice to the recipient. The publicIdentifiers are used to send via the Peppol network, if the recipient is not registered on the Peppol network, the invoice will be sent to the email addresses in the emails property. This property is only mandatory when sending the invoice data using the <<_openapi_invoice>> property, not when sending using the <<_openapi_invoicedata>> property, in which case this information will be extracted from the <<_openapi_invoicedata>> object. If you do specify an <<_openapi_invoicerecipient>> object and an <<_openapi_invoicedata>> object, the data from the two will be merged. */
	export interface RoutingFormProperties {

		/** If you wish to send the document yourself in a Y-flow, use this flag. Wait for the 'cleared' webhook and use the <<_openapi_show_document_submission_evidence>> endpoint to retrieve the clearing evidence. This will include a sendable document. */
		clearWithoutSending: FormControl<boolean | null | undefined>,
	}
	export function CreateRoutingFormGroup() {
		return new FormGroup<RoutingFormProperties>({
			clearWithoutSending: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** An electronic routing identifier. */
	export interface RoutingIdentifier {

		/**
		 * The actual identifier.
		 * Min length: 1
		 */
		id?: string | null;

		/**
		 * The scheme of the identifier. See <<_receiver_identifiers_list>> for a list.
		 * Min length: 3
		 */
		scheme?: string | null;
	}

	/** An electronic routing identifier. */
	export interface RoutingIdentifierFormProperties {

		/**
		 * The actual identifier.
		 * Min length: 1
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * The scheme of the identifier. See <<_receiver_identifiers_list>> for a list.
		 * Min length: 3
		 */
		scheme: FormControl<string | null | undefined>,
	}
	export function CreateRoutingIdentifierFormGroup() {
		return new FormGroup<RoutingIdentifierFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			scheme: new FormControl<string | null | undefined>(undefined, [Validators.minLength(3)]),
		});

	}

	export interface DocumentSubmissionEvidence {

		/** An array of documents that were sent. For OpenPeppol, this is always a single document (it may contain a PDF inside). For Email, the number of documents depends on the number of attachments, which in turn depends on the country of the receiver. For email, the raw email in RFC822 format is also included. */
		documents?: Array<DocumentSubmissionEvidenceDocument>;
		evidence?: DocumentSubmissionEvidenceEvidence;

		/** The exchange network that was used to send the document */
		network?: DocumentSubmissionEvidenceNetwork | null;

		/** The legal identifier of the receiver, or the tax identifier if there is no legal identifier. */
		receiver?: string | null;

		/** The legal identifier of the sender, or the tax identifier if there is no legal identifier. */
		sender?: string | null;
	}
	export interface DocumentSubmissionEvidenceFormProperties {

		/** The exchange network that was used to send the document */
		network: FormControl<DocumentSubmissionEvidenceNetwork | null | undefined>,

		/** The legal identifier of the receiver, or the tax identifier if there is no legal identifier. */
		receiver: FormControl<string | null | undefined>,

		/** The legal identifier of the sender, or the tax identifier if there is no legal identifier. */
		sender: FormControl<string | null | undefined>,
	}
	export function CreateDocumentSubmissionEvidenceFormGroup() {
		return new FormGroup<DocumentSubmissionEvidenceFormProperties>({
			network: new FormControl<DocumentSubmissionEvidenceNetwork | null | undefined>(undefined),
			receiver: new FormControl<string | null | undefined>(undefined),
			sender: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DocumentSubmissionEvidenceDocument {

		/** The URL where the document can be retrieved. */
		document?: string | null;

		/** The datetime the URL expires. Format: 'YYYY-MM-DD HH:mm:ss.' */
		expires_at?: string | null;

		/** The mime type of the document. */
		mime_type?: DocumentSubmissionEvidenceDocumentMime_type | null;
	}
	export interface DocumentSubmissionEvidenceDocumentFormProperties {

		/** The URL where the document can be retrieved. */
		document: FormControl<string | null | undefined>,

		/** The datetime the URL expires. Format: 'YYYY-MM-DD HH:mm:ss.' */
		expires_at: FormControl<string | null | undefined>,

		/** The mime type of the document. */
		mime_type: FormControl<DocumentSubmissionEvidenceDocumentMime_type | null | undefined>,
	}
	export function CreateDocumentSubmissionEvidenceDocumentFormGroup() {
		return new FormGroup<DocumentSubmissionEvidenceDocumentFormProperties>({
			document: new FormControl<string | null | undefined>(undefined),
			expires_at: new FormControl<string | null | undefined>(undefined),
			mime_type: new FormControl<DocumentSubmissionEvidenceDocumentMime_type | null | undefined>(undefined),
		});

	}

	export enum DocumentSubmissionEvidenceDocumentMime_type { 'message/rfc822' = 0, 'application/xml' = 1, 'application/json' = 2, 'application/pdf' = 3 }

	export enum DocumentSubmissionEvidenceNetwork { as2 = 0, email = 1, peppol = 2, sdi = 3 }

	export interface DocumentSubmissionEvidenceEvidence {

		/** The unique message id used in the OpenPeppol SBDH. */
		message_id?: string | null;

		/** An identification of the OpenPeppol accesspoint that the invoice was sent to. */
		receiving_accesspoint?: string | null;

		/** The IP address of the sending SMTP server. */
		remote_mta_ip?: string | null;

		/** An identification for the sending SMTP. */
		reporting_mta?: string | null;

		/** The response of the receiving SMTP server. */
		smtp_response?: string | null;

		/** The timestamp of the delivery to the receiving SMTP server. */
		timestamp?: string | null;

		/** The unique id for this OpenPeppol transmission. */
		transmission_id?: string | null;

		/** The XML evidence for the transmission. This is the XML returned by the receiving OpenPeppol accesspoint. */
		xml?: string | null;
	}
	export interface DocumentSubmissionEvidenceEvidenceFormProperties {

		/** The unique message id used in the OpenPeppol SBDH. */
		message_id: FormControl<string | null | undefined>,

		/** An identification of the OpenPeppol accesspoint that the invoice was sent to. */
		receiving_accesspoint: FormControl<string | null | undefined>,

		/** The IP address of the sending SMTP server. */
		remote_mta_ip: FormControl<string | null | undefined>,

		/** An identification for the sending SMTP. */
		reporting_mta: FormControl<string | null | undefined>,

		/** The response of the receiving SMTP server. */
		smtp_response: FormControl<string | null | undefined>,

		/** The timestamp of the delivery to the receiving SMTP server. */
		timestamp: FormControl<string | null | undefined>,

		/** The unique id for this OpenPeppol transmission. */
		transmission_id: FormControl<string | null | undefined>,

		/** The XML evidence for the transmission. This is the XML returned by the receiving OpenPeppol accesspoint. */
		xml: FormControl<string | null | undefined>,
	}
	export function CreateDocumentSubmissionEvidenceEvidenceFormGroup() {
		return new FormGroup<DocumentSubmissionEvidenceEvidenceFormProperties>({
			message_id: new FormControl<string | null | undefined>(undefined),
			receiving_accesspoint: new FormControl<string | null | undefined>(undefined),
			remote_mta_ip: new FormControl<string | null | undefined>(undefined),
			reporting_mta: new FormControl<string | null | undefined>(undefined),
			smtp_response: new FormControl<string | null | undefined>(undefined),
			timestamp: new FormControl<string | null | undefined>(undefined),
			transmission_id: new FormControl<string | null | undefined>(undefined),
			xml: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The result of a document submission */
	export interface DocumentSubmissionResult {

		/** A (V4) GUID for the document submission */
		guid?: string | null;
	}

	/** The result of a document submission */
	export interface DocumentSubmissionResultFormProperties {

		/** A (V4) GUID for the document submission */
		guid: FormControl<string | null | undefined>,
	}
	export function CreateDocumentSubmissionResultFormGroup() {
		return new FormGroup<DocumentSubmissionResultFormProperties>({
			guid: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ErrorModel {
		details?: string | null;
		source?: string | null;
	}
	export interface ErrorModelFormProperties {
		details: FormControl<string | null | undefined>,
		source: FormControl<string | null | undefined>,
	}
	export function CreateErrorModelFormGroup() {
		return new FormGroup<ErrorModelFormProperties>({
			details: new FormControl<string | null | undefined>(undefined),
			source: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The invoice to send, in base64 encoded format. Provide either invoice, or invoiceData, but not both. */
	export interface InvoiceData {

		/** How to interpret the document. */
		conversionStrategy?: RawDocumentDataParseStrategy | null;

		/**
		 * The base64 encoded version of the document.
		 * Min length: 5
		 */
		document?: string | null;
	}

	/** The invoice to send, in base64 encoded format. Provide either invoice, or invoiceData, but not both. */
	export interface InvoiceDataFormProperties {

		/** How to interpret the document. */
		conversionStrategy: FormControl<RawDocumentDataParseStrategy | null | undefined>,

		/**
		 * The base64 encoded version of the document.
		 * Min length: 5
		 */
		document: FormControl<string | null | undefined>,
	}
	export function CreateInvoiceDataFormGroup() {
		return new FormGroup<InvoiceDataFormProperties>({
			conversionStrategy: new FormControl<RawDocumentDataParseStrategy | null | undefined>(undefined),
			document: new FormControl<string | null | undefined>(undefined, [Validators.minLength(5)]),
		});

	}


	/** The different ways to send the invoice to the recipient. The publicIdentifiers are used to send via the Peppol network, if the recipient is not registered on the Peppol network, the invoice will be sent to the email addresses in the emails property. This property is only mandatory when sending the invoice data using the <<_openapi_invoice>> property, not when sending using the <<_openapi_invoicedata>> property, in which case this information will be extracted from the <<_openapi_invoicedata>> object. If you do specify an <<_openapi_invoicerecipient>> object and an <<_openapi_invoicedata>> object, the data from the two will be merged. */
	export interface InvoiceRecipient {

		/** The email addresses the invoice should be sent to if none of the other identifiers can be used */
		emails?: Array<string>;

		/** A list of public identifiers that uniquely identify this customer. */
		publicIdentifiers?: Array<PublicIdentifier>;
	}

	/** The different ways to send the invoice to the recipient. The publicIdentifiers are used to send via the Peppol network, if the recipient is not registered on the Peppol network, the invoice will be sent to the email addresses in the emails property. This property is only mandatory when sending the invoice data using the <<_openapi_invoice>> property, not when sending using the <<_openapi_invoicedata>> property, in which case this information will be extracted from the <<_openapi_invoicedata>> object. If you do specify an <<_openapi_invoicerecipient>> object and an <<_openapi_invoicedata>> object, the data from the two will be merged. */
	export interface InvoiceRecipientFormProperties {
	}
	export function CreateInvoiceRecipientFormGroup() {
		return new FormGroup<InvoiceRecipientFormProperties>({
		});

	}


	/** Identifies the invoice recipient to preflight */
	export interface InvoiceRecipientPreflight {

		/** A list of public identifiers that uniquely identify this customer. */
		publicIdentifiers?: Array<PublicIdentifier>;
	}

	/** Identifies the invoice recipient to preflight */
	export interface InvoiceRecipientPreflightFormProperties {
	}
	export function CreateInvoiceRecipientPreflightFormGroup() {
		return new FormGroup<InvoiceRecipientPreflightFormProperties>({
		});

	}


	/** DEPRECATED. The invoice you want Storecove to process, with some meta-data. */
	export interface InvoiceSubmission {

		/**
		 * An array of attachments. You may provide up to 10 attchments, but the total size must not exceed 10MB after Base64 encoding.
		 * Maximum items: 10
		 */
		attachments?: Array<Attachment>;

		/** DEPRECATED. In the future we will no longer support creating PDF invoices. Whether or not to create a primary image (PDF) if one is not provided. For customers who started from December 1st 2022, the default is false. For customers who started before that, the default is true. */
		createPrimaryImage?: boolean | null;

		/** DEPRECATED. Use attachments. */
		document?: string | null;

		/** DEPRECATED. Use attachments. */
		documentUrl?: string | null;

		/**
		 * A guid that you generated for this InvoiceSubmission to achieve idempotency. If you submit multiple documents with the same idempotencyGuid, only the first one will be processed.
		 * Max length: 36
		 * Min length: 36
		 */
		idempotencyGuid?: string | null;

		/** The invoice to send. Provide either invoice, or invoiceData, but not both. */
		invoice?: Invoice;

		/** The invoice to send, in base64 encoded format. Provide either invoice, or invoiceData, but not both. */
		invoiceData?: InvoiceData;

		/** The different ways to send the invoice to the recipient. The publicIdentifiers are used to send via the Peppol network, if the recipient is not registered on the Peppol network, the invoice will be sent to the email addresses in the emails property. This property is only mandatory when sending the invoice data using the <<_openapi_invoice>> property, not when sending using the <<_openapi_invoicedata>> property, in which case this information will be extracted from the <<_openapi_invoicedata>> object. If you do specify an <<_openapi_invoicerecipient>> object and an <<_openapi_invoicedata>> object, the data from the two will be merged. */
		invoiceRecipient?: InvoiceRecipient;

		/** The id of the LegalEntity this invoice should be sent for. */
		legalEntityId?: number | null;

		/** DEPRECATED. Use legalEntityId */
		legalSupplierId?: number | null;

		/** DEPRECATED. */
		mode?: InvoiceSubmissionMode | null;

		/** The different ways to send the invoice to the recipient. The publicIdentifiers are used to send via the Peppol network, if the recipient is not registered on the Peppol network, the invoice will be sent to the email addresses in the emails property. This property is only mandatory when sending the invoice data using the <<_openapi_invoice>> property, not when sending using the <<_openapi_invoicedata>> property, in which case this information will be extracted from the <<_openapi_invoicedata>> object. If you do specify an <<_openapi_invoicerecipient>> object and an <<_openapi_invoicedata>> object, the data from the two will be merged. */
		routing?: Routing;

		/** DEPRECATED. */
		supplierId?: number | null;
	}

	/** DEPRECATED. The invoice you want Storecove to process, with some meta-data. */
	export interface InvoiceSubmissionFormProperties {

		/** DEPRECATED. In the future we will no longer support creating PDF invoices. Whether or not to create a primary image (PDF) if one is not provided. For customers who started from December 1st 2022, the default is false. For customers who started before that, the default is true. */
		createPrimaryImage: FormControl<boolean | null | undefined>,

		/** DEPRECATED. Use attachments. */
		document: FormControl<string | null | undefined>,

		/** DEPRECATED. Use attachments. */
		documentUrl: FormControl<string | null | undefined>,

		/**
		 * A guid that you generated for this InvoiceSubmission to achieve idempotency. If you submit multiple documents with the same idempotencyGuid, only the first one will be processed.
		 * Max length: 36
		 * Min length: 36
		 */
		idempotencyGuid: FormControl<string | null | undefined>,

		/** The id of the LegalEntity this invoice should be sent for. */
		legalEntityId: FormControl<number | null | undefined>,

		/** DEPRECATED. Use legalEntityId */
		legalSupplierId: FormControl<number | null | undefined>,

		/** DEPRECATED. */
		mode: FormControl<InvoiceSubmissionMode | null | undefined>,

		/** DEPRECATED. */
		supplierId: FormControl<number | null | undefined>,
	}
	export function CreateInvoiceSubmissionFormGroup() {
		return new FormGroup<InvoiceSubmissionFormProperties>({
			createPrimaryImage: new FormControl<boolean | null | undefined>(undefined),
			document: new FormControl<string | null | undefined>(undefined),
			documentUrl: new FormControl<string | null | undefined>(undefined),
			idempotencyGuid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(36), Validators.maxLength(36)]),
			legalEntityId: new FormControl<number | null | undefined>(undefined),
			legalSupplierId: new FormControl<number | null | undefined>(undefined),
			mode: new FormControl<InvoiceSubmissionMode | null | undefined>(undefined),
			supplierId: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum InvoiceSubmissionMode { direct = 0 }

	export interface InvoiceSubmissionActionEvidence {

		/** The response the receiver sent. */
		receiver_response?: string | null;

		/** The DateTime of the transmission, as defined by RFC 3339, section 5.6, for example, 2017-07-21T17:32:28Z. */
		transmission_datetime?: string | null;

		/** The result of this transmission. */
		transmission_result?: InvoiceSubmissionActionEvidenceTransmission_result | null;

		/** How the document was transmitted. */
		transmission_type?: InvoiceSubmissionActionEvidenceTransmission_type | null;

		/** The document that was transmitted. */
		transmitted_document?: string | null;
	}
	export interface InvoiceSubmissionActionEvidenceFormProperties {

		/** The response the receiver sent. */
		receiver_response: FormControl<string | null | undefined>,

		/** The DateTime of the transmission, as defined by RFC 3339, section 5.6, for example, 2017-07-21T17:32:28Z. */
		transmission_datetime: FormControl<string | null | undefined>,

		/** The result of this transmission. */
		transmission_result: FormControl<InvoiceSubmissionActionEvidenceTransmission_result | null | undefined>,

		/** How the document was transmitted. */
		transmission_type: FormControl<InvoiceSubmissionActionEvidenceTransmission_type | null | undefined>,

		/** The document that was transmitted. */
		transmitted_document: FormControl<string | null | undefined>,
	}
	export function CreateInvoiceSubmissionActionEvidenceFormGroup() {
		return new FormGroup<InvoiceSubmissionActionEvidenceFormProperties>({
			receiver_response: new FormControl<string | null | undefined>(undefined),
			transmission_datetime: new FormControl<string | null | undefined>(undefined),
			transmission_result: new FormControl<InvoiceSubmissionActionEvidenceTransmission_result | null | undefined>(undefined),
			transmission_type: new FormControl<InvoiceSubmissionActionEvidenceTransmission_type | null | undefined>(undefined),
			transmitted_document: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum InvoiceSubmissionActionEvidenceTransmission_result { unknown = 0, accepted = 1, rejected = 2, send_error = 3, internal_error = 4 }

	export enum InvoiceSubmissionActionEvidenceTransmission_type { email = 0, edi = 1, as2 = 2, peppol = 3, sandbox = 4 }

	export interface InvoiceSubmissionEvidence {

		/** An array of actions taken to deliver the document. */
		actions?: Array<InvoiceSubmissionActionEvidence>;

		/** The guid for the InvoiceSubmission. */
		guid?: string | null;

		/** The overall status for this InvoiceSubmission. */
		status?: string | null;
	}
	export interface InvoiceSubmissionEvidenceFormProperties {

		/** The guid for the InvoiceSubmission. */
		guid: FormControl<string | null | undefined>,

		/** The overall status for this InvoiceSubmission. */
		status: FormControl<string | null | undefined>,
	}
	export function CreateInvoiceSubmissionEvidenceFormGroup() {
		return new FormGroup<InvoiceSubmissionEvidenceFormProperties>({
			guid: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The result of an invoice submission */
	export interface InvoiceSubmissionResult {

		/** A (V4) GUID for the invoice submission */
		guid?: string | null;
	}

	/** The result of an invoice submission */
	export interface InvoiceSubmissionResultFormProperties {

		/** A (V4) GUID for the invoice submission */
		guid: FormControl<string | null | undefined>,
	}
	export function CreateInvoiceSubmissionResultFormGroup() {
		return new FormGroup<InvoiceSubmissionResultFormProperties>({
			guid: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface LegalEntity extends LegalEntityUpdate {
		peppol_identifiers?: Array<PeppolIdentifier>;
	}
	export interface LegalEntityFormProperties extends LegalEntityUpdateFormProperties {
	}
	export function CreateLegalEntityFormGroup() {
		return new FormGroup<LegalEntityFormProperties>({
			city: new FormControl<string | null | undefined>(undefined, [Validators.minLength(2), Validators.maxLength(64)]),
			country: new FormControl<AddressCountry | null | undefined>(undefined),
			county: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64)]),
			id: new FormControl<number | null | undefined>(undefined),
			line1: new FormControl<string | null | undefined>(undefined, [Validators.minLength(2), Validators.maxLength(192)]),
			line2: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(192)]),
			party_name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(2), Validators.maxLength(64)]),
			public: new FormControl<boolean | null | undefined>(undefined),
			smart_inbox: new FormControl<string | null | undefined>(undefined),
			tenant_id: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64)]),
			third_party_password: new FormControl<string | null | undefined>(undefined, [Validators.minLength(2), Validators.maxLength(64)]),
			third_party_username: new FormControl<string | null | undefined>(undefined, [Validators.minLength(2), Validators.maxLength(64)]),
			zip: new FormControl<string | null | undefined>(undefined, [Validators.minLength(2), Validators.maxLength(32)]),
		});

	}

	export interface PeppolIdentifier {
		corppass?: CorpPass;

		/**
		 * The identifier.
		 * Max length: 64
		 * Min length: 2
		 */
		identifier?: string | null;

		/**
		 * The scheme of the identifier. See <<_receiver_identifiers_list>> for a list.
		 * Max length: 64
		 * Min length: 2
		 */
		scheme?: string | null;

		/**
		 * The superscheme of the identifier. Should always be "iso6523-actorid-upis".
		 * Max length: 64
		 * Min length: 2
		 */
		superscheme?: string | null;
	}
	export interface PeppolIdentifierFormProperties {

		/**
		 * The identifier.
		 * Max length: 64
		 * Min length: 2
		 */
		identifier: FormControl<string | null | undefined>,

		/**
		 * The scheme of the identifier. See <<_receiver_identifiers_list>> for a list.
		 * Max length: 64
		 * Min length: 2
		 */
		scheme: FormControl<string | null | undefined>,

		/**
		 * The superscheme of the identifier. Should always be "iso6523-actorid-upis".
		 * Max length: 64
		 * Min length: 2
		 */
		superscheme: FormControl<string | null | undefined>,
	}
	export function CreatePeppolIdentifierFormGroup() {
		return new FormGroup<PeppolIdentifierFormProperties>({
			identifier: new FormControl<string | null | undefined>(undefined, [Validators.minLength(2), Validators.maxLength(64)]),
			scheme: new FormControl<string | null | undefined>(undefined, [Validators.minLength(2), Validators.maxLength(64)]),
			superscheme: new FormControl<string | null | undefined>(undefined, [Validators.minLength(2), Validators.maxLength(64)]),
		});

	}

	export interface LegalEntityCreate {

		/** A list of document types to advertise. Use if this LegalEntity needs the ability to receive more than only invoice documents. */
		advertisements?: Array<string>;

		/**
		 * The city.
		 * Required
		 * Max length: 64
		 * Min length: 2
		 */
		city: string;

		/**
		 * An ISO 3166-1 alpha-2 country code.
		 * Required
		 */
		country: AddressCountry;

		/**
		 * County, if applicable
		 * Max length: 64
		 */
		county?: string | null;

		/**
		 * The first address line.
		 * Required
		 * Max length: 192
		 * Min length: 2
		 */
		line1: string;

		/**
		 * The second address line, if applicable
		 * Max length: 192
		 */
		line2?: string | null;

		/**
		 * The name of the company.
		 * Required
		 * Max length: 64
		 * Min length: 2
		 */
		party_name: string;

		/** Whether or not this LegalEntity is public. Public means it will be entered into the PEPPOL directory at https://directory.peppol.eu/ */
		public?: boolean | null;
		rea?: Rea;

		/**
		 * The id of the tenant, to be used in case of single-tenant solutions that share webhook URLs. This property will included in webhook events.
		 * Max length: 64
		 */
		tenant_id?: string | null;

		/**
		 * The password to use to authenticate to a system through which to send the document, or to obtain tax authority approval to send it. This field is currently relevant only for India and mandatory when creating an IN LegalEntity.
		 * Max length: 64
		 * Min length: 2
		 */
		third_party_password?: string | null;

		/**
		 * The username to use to authenticate to a system through which to send the document, or to obtain tax authority approval to send it. This field is currently relevant only for India and mandatory when creating an IN LegalEntity.
		 * Max length: 64
		 * Min length: 2
		 */
		third_party_username?: string | null;

		/**
		 * The zipcode.
		 * Required
		 * Max length: 32
		 * Min length: 2
		 */
		zip: string;
	}
	export interface LegalEntityCreateFormProperties {

		/**
		 * The city.
		 * Required
		 * Max length: 64
		 * Min length: 2
		 */
		city: FormControl<string | null | undefined>,

		/**
		 * An ISO 3166-1 alpha-2 country code.
		 * Required
		 */
		country: FormControl<AddressCountry | null | undefined>,

		/**
		 * County, if applicable
		 * Max length: 64
		 */
		county: FormControl<string | null | undefined>,

		/**
		 * The first address line.
		 * Required
		 * Max length: 192
		 * Min length: 2
		 */
		line1: FormControl<string | null | undefined>,

		/**
		 * The second address line, if applicable
		 * Max length: 192
		 */
		line2: FormControl<string | null | undefined>,

		/**
		 * The name of the company.
		 * Required
		 * Max length: 64
		 * Min length: 2
		 */
		party_name: FormControl<string | null | undefined>,

		/** Whether or not this LegalEntity is public. Public means it will be entered into the PEPPOL directory at https://directory.peppol.eu/ */
		public: FormControl<boolean | null | undefined>,

		/**
		 * The id of the tenant, to be used in case of single-tenant solutions that share webhook URLs. This property will included in webhook events.
		 * Max length: 64
		 */
		tenant_id: FormControl<string | null | undefined>,

		/**
		 * The password to use to authenticate to a system through which to send the document, or to obtain tax authority approval to send it. This field is currently relevant only for India and mandatory when creating an IN LegalEntity.
		 * Max length: 64
		 * Min length: 2
		 */
		third_party_password: FormControl<string | null | undefined>,

		/**
		 * The username to use to authenticate to a system through which to send the document, or to obtain tax authority approval to send it. This field is currently relevant only for India and mandatory when creating an IN LegalEntity.
		 * Max length: 64
		 * Min length: 2
		 */
		third_party_username: FormControl<string | null | undefined>,

		/**
		 * The zipcode.
		 * Required
		 * Max length: 32
		 * Min length: 2
		 */
		zip: FormControl<string | null | undefined>,
	}
	export function CreateLegalEntityCreateFormGroup() {
		return new FormGroup<LegalEntityCreateFormProperties>({
			city: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(2), Validators.maxLength(64)]),
			country: new FormControl<AddressCountry | null | undefined>(undefined, [Validators.required]),
			county: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64)]),
			line1: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(2), Validators.maxLength(192)]),
			line2: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(192)]),
			party_name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(2), Validators.maxLength(64)]),
			public: new FormControl<boolean | null | undefined>(undefined),
			tenant_id: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64)]),
			third_party_password: new FormControl<string | null | undefined>(undefined, [Validators.minLength(2), Validators.maxLength(64)]),
			third_party_username: new FormControl<string | null | undefined>(undefined, [Validators.minLength(2), Validators.maxLength(64)]),
			zip: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(2), Validators.maxLength(32)]),
		});

	}

	export interface LegalEntityUpdate {

		/** A list of document types to advertise. Use if this LegalEntity needs the ability to receive more than only invoice documents. */
		advertisements?: Array<string>;

		/**
		 * The city.
		 * Max length: 64
		 * Min length: 2
		 */
		city?: string | null;

		/** An ISO 3166-1 alpha-2 country code. */
		country?: AddressCountry | null;

		/**
		 * County, if applicable
		 * Max length: 64
		 */
		county?: string | null;

		/** The Storecove assigned id for the LegalEntity. */
		id?: number | null;

		/**
		 * The first address line.
		 * Max length: 192
		 * Min length: 2
		 */
		line1?: string | null;

		/**
		 * The second address line, if applicable
		 * Max length: 192
		 */
		line2?: string | null;

		/**
		 * The name of the company.
		 * Max length: 64
		 * Min length: 2
		 */
		party_name?: string | null;

		/** Whether or not this LegalEntity is public. Public means it will be listed in the PEPPOL directory at https://directory.peppol.eu/ which is normally what you want. If you have a good reason to not want the LegalEntity listed, provide false. This property is ignored when for country SG, where it is always true. */
		public?: boolean | null;
		rea?: Rea;

		/** DEPRECATED. Use the <<_openapi_receiveddocuments_resource>> endpoint. The email address of the Smart Inbox for this LegalEntity. */
		smart_inbox?: string | null;

		/**
		 * The id of the tenant, to be used in case of multi-tenant solutions. This property will included in webhook events.
		 * Max length: 64
		 */
		tenant_id?: string | null;

		/**
		 * The password to use to authenticate to a system through which to send the document, or to obtain tax authority approval to send it. This field is currently relevant only for India and mandatory when creating an IN LegalEntity.
		 * Max length: 64
		 * Min length: 2
		 */
		third_party_password?: string | null;

		/**
		 * The username to use to authenticate to a system through which to send the document, or to obtain tax authority approval to send it. This field is currently relevant only for India and mandatory when creating an IN LegalEntity.
		 * Max length: 64
		 * Min length: 2
		 */
		third_party_username?: string | null;

		/**
		 * The zipcode.
		 * Max length: 32
		 * Min length: 2
		 */
		zip?: string | null;
	}
	export interface LegalEntityUpdateFormProperties {

		/**
		 * The city.
		 * Max length: 64
		 * Min length: 2
		 */
		city: FormControl<string | null | undefined>,

		/** An ISO 3166-1 alpha-2 country code. */
		country: FormControl<AddressCountry | null | undefined>,

		/**
		 * County, if applicable
		 * Max length: 64
		 */
		county: FormControl<string | null | undefined>,

		/** The Storecove assigned id for the LegalEntity. */
		id: FormControl<number | null | undefined>,

		/**
		 * The first address line.
		 * Max length: 192
		 * Min length: 2
		 */
		line1: FormControl<string | null | undefined>,

		/**
		 * The second address line, if applicable
		 * Max length: 192
		 */
		line2: FormControl<string | null | undefined>,

		/**
		 * The name of the company.
		 * Max length: 64
		 * Min length: 2
		 */
		party_name: FormControl<string | null | undefined>,

		/** Whether or not this LegalEntity is public. Public means it will be listed in the PEPPOL directory at https://directory.peppol.eu/ which is normally what you want. If you have a good reason to not want the LegalEntity listed, provide false. This property is ignored when for country SG, where it is always true. */
		public: FormControl<boolean | null | undefined>,

		/** DEPRECATED. Use the <<_openapi_receiveddocuments_resource>> endpoint. The email address of the Smart Inbox for this LegalEntity. */
		smart_inbox: FormControl<string | null | undefined>,

		/**
		 * The id of the tenant, to be used in case of multi-tenant solutions. This property will included in webhook events.
		 * Max length: 64
		 */
		tenant_id: FormControl<string | null | undefined>,

		/**
		 * The password to use to authenticate to a system through which to send the document, or to obtain tax authority approval to send it. This field is currently relevant only for India and mandatory when creating an IN LegalEntity.
		 * Max length: 64
		 * Min length: 2
		 */
		third_party_password: FormControl<string | null | undefined>,

		/**
		 * The username to use to authenticate to a system through which to send the document, or to obtain tax authority approval to send it. This field is currently relevant only for India and mandatory when creating an IN LegalEntity.
		 * Max length: 64
		 * Min length: 2
		 */
		third_party_username: FormControl<string | null | undefined>,

		/**
		 * The zipcode.
		 * Max length: 32
		 * Min length: 2
		 */
		zip: FormControl<string | null | undefined>,
	}
	export function CreateLegalEntityUpdateFormGroup() {
		return new FormGroup<LegalEntityUpdateFormProperties>({
			city: new FormControl<string | null | undefined>(undefined, [Validators.minLength(2), Validators.maxLength(64)]),
			country: new FormControl<AddressCountry | null | undefined>(undefined),
			county: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64)]),
			id: new FormControl<number | null | undefined>(undefined),
			line1: new FormControl<string | null | undefined>(undefined, [Validators.minLength(2), Validators.maxLength(192)]),
			line2: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(192)]),
			party_name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(2), Validators.maxLength(64)]),
			public: new FormControl<boolean | null | undefined>(undefined),
			smart_inbox: new FormControl<string | null | undefined>(undefined),
			tenant_id: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64)]),
			third_party_password: new FormControl<string | null | undefined>(undefined, [Validators.minLength(2), Validators.maxLength(64)]),
			third_party_username: new FormControl<string | null | undefined>(undefined, [Validators.minLength(2), Validators.maxLength(64)]),
			zip: new FormControl<string | null | undefined>(undefined, [Validators.minLength(2), Validators.maxLength(32)]),
		});

	}


	/** The originator of the document. */
	export interface OriginatorCustomerParty {

		/**
		 * A party that can receive or send invoices
		 * Required
		 */
		party: Party;
	}

	/** The originator of the document. */
	export interface OriginatorCustomerPartyFormProperties {
	}
	export function CreateOriginatorCustomerPartyFormGroup() {
		return new FormGroup<OriginatorCustomerPartyFormProperties>({
		});

	}


	/** The originator of the line. */
	export interface OriginatorParty {

		/** Required */
		party: string;
	}

	/** The originator of the line. */
	export interface OriginatorPartyFormProperties {

		/** Required */
		party: FormControl<string | null | undefined>,
	}
	export function CreateOriginatorPartyFormGroup() {
		return new FormGroup<OriginatorPartyFormProperties>({
			party: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PeppolIdentifierCreate {
		corppass?: CorpPassCreate;

		/**
		 * The identifier.
		 * Required
		 * Max length: 64
		 * Min length: 2
		 */
		identifier: string;

		/**
		 * The scheme of the identifier. See <<_receiver_identifiers_list>> for a list.
		 * Required
		 * Max length: 64
		 * Min length: 2
		 */
		scheme: string;

		/**
		 * The superscheme of the identifier. Should always be "iso6523-actorid-upis".
		 * Required
		 * Max length: 64
		 * Min length: 2
		 */
		superscheme: string;
	}
	export interface PeppolIdentifierCreateFormProperties {

		/**
		 * The identifier.
		 * Required
		 * Max length: 64
		 * Min length: 2
		 */
		identifier: FormControl<string | null | undefined>,

		/**
		 * The scheme of the identifier. See <<_receiver_identifiers_list>> for a list.
		 * Required
		 * Max length: 64
		 * Min length: 2
		 */
		scheme: FormControl<string | null | undefined>,

		/**
		 * The superscheme of the identifier. Should always be "iso6523-actorid-upis".
		 * Required
		 * Max length: 64
		 * Min length: 2
		 */
		superscheme: FormControl<string | null | undefined>,
	}
	export function CreatePeppolIdentifierCreateFormGroup() {
		return new FormGroup<PeppolIdentifierCreateFormProperties>({
			identifier: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(2), Validators.maxLength(64)]),
			scheme: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(2), Validators.maxLength(64)]),
			superscheme: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(2), Validators.maxLength(64)]),
		});

	}


	/** The result of preflighting an invoice recipient */
	export interface PreflightInvoiceRecipientResult {

		/** The result code of the preflight request */
		code?: PreflightInvoiceRecipientResultCode | null;
	}

	/** The result of preflighting an invoice recipient */
	export interface PreflightInvoiceRecipientResultFormProperties {

		/** The result code of the preflight request */
		code: FormControl<PreflightInvoiceRecipientResultCode | null | undefined>,
	}
	export function CreatePreflightInvoiceRecipientResultFormGroup() {
		return new FormGroup<PreflightInvoiceRecipientResultFormProperties>({
			code: new FormControl<PreflightInvoiceRecipientResultCode | null | undefined>(undefined),
		});

	}

	export enum PreflightInvoiceRecipientResultCode { ok = 0, nok = 1 }

	export interface PurchaseInvoice {
		accounting?: PurchaseInvoiceAccountingDetails;

		/** The accounting cost code. */
		accounting_cost?: string | null;

		/** DEPRECATED - Use the allowance_charges array. */
		allowance_charge?: number | null;
		allowance_charges?: Array<PurchaseInvoiceAllowanceCharge>;

		/** DEPRECATED - Use amount_including_tax. */
		amount_including_vat?: number | null;
		attachments?: Array<PurchaseInvoiceAttachment>;

		/** Reference to the previous invoice this invoice relates to. */
		billing_reference?: string | null;

		/** Reference provided by the buyer. Used for routing. */
		buyer_reference?: string | null;

		/** Reference to the contract. */
		contract_document_reference?: string | null;

		/** The details of the delivery associated with this invoice. */
		delivery?: PurchaseInvoiceDelivery;

		/** DEPRECATED. Use the new atatchments array. */
		document?: string | null;

		/** The ISO 4217 currency for the invoice. */
		document_currency_code?: string | null;
		document_totals?: PurchaseInvoiceDocumentTotals;

		/** The type of document. Only "invoice" for now. */
		document_type?: PurchaseInvoiceDocument_type | null;

		/** The date the invoice must be payed by. Format "YYYY-MM-DD". */
		due_date?: string | null;

		/** Deprecated. Used for accountants. The id you specified for the organization. */
		external_key?: string | null;

		/** Deprecated. Used for the embedded portal retrieval service. The external_user_id you provided when the ShopAccount was created. */
		external_user_id?: string | null;

		/** The GUID of the invoice */
		guid?: string | null;
		invoice_lines?: Array<PurchaseInvoiceInvoiceLine>;

		/** The invoicenumber. */
		invoice_number?: string | null;

		/** The type of invoice. */
		invoice_type?: PurchaseInvoiceInvoice_type | null;

		/** The date the invoice was issued. Format "YYYY-MM-DD". */
		issue_date?: string | null;

		/** The id of the LegalEntity the invoice was received for. */
		legal_entity_id?: number | null;

		/** The invoice level note. */
		note?: string | null;

		/** Reference to the order. Used for matching the invoice to an order. */
		order_reference?: string | null;

		/** DEPRECATED - Use the new payment_means_array array. */
		payment_means?: PurchaseInvoicePayment_means;

		/** The different payment means that can be used to pay the invoice. */
		payment_means_array?: Array<PurchaseInvoicePaymentMeans>;

		/** DEPRECATED - use the payment_id property in the payment_means_array */
		payment_means_payment_id?: string | null;

		/** A textual description of the payment terms. */
		payment_terms_note?: string | null;

		/** The end date of the period this invoice relates to. Format "YYYY-MM-DD". */
		period_end?: string | null;

		/** The start date of the period this invoice relates to. Format "YYYY-MM-DD". */
		period_start?: string | null;

		/** Reference to the project. */
		project_reference?: string | null;
		sender?: PurchaseInvoiceSender;

		/** The source the invoice was received from. */
		source?: PurchaseInvoiceSource | null;

		/** The subtype of document. */
		sub_type?: PurchaseInvoiceInvoice_type | null;

		/** Whether or not the document image (PDF) was generated by Storecove. If true, it means the invoice was received without any attachments and Storecove generated one for you. If false, the invoice will contain at least one attachment, which was received from the invoice sender. */
		system_generated_primary_image?: boolean | null;

		/** The date the invoice was issued for tax purposes. In most countries MUST match the issue_date. Format "YYYY-MM-DD". */
		tax_point_date?: string | null;
		tax_subtotals?: Array<PurchaseInvoiceTaxSubtotal>;

		/** The tax system of the invoice. Either tax_line_percentages or tax_line_amounts. The first tax system means the invoice lines contain only the tax percentages and the tax amounts are included only in the tax subtotals at the invoice level and so are only calculated at the invoice level. The tax system tax_line_amounts means that in addition to the percentage, each invoice line also contains the tax amount. The tax subtotals at the invoice level are calculated as the sum of the tax of the invoice lines. The distinction between the two tax systems has has implications for rounding. */
		tax_system?: string | null;

		/** DEPRECATED - This is now part of each invoice line. */
		vat_reverse_charge?: boolean | null;
	}
	export interface PurchaseInvoiceFormProperties {

		/** The accounting cost code. */
		accounting_cost: FormControl<string | null | undefined>,

		/** DEPRECATED - Use the allowance_charges array. */
		allowance_charge: FormControl<number | null | undefined>,

		/** DEPRECATED - Use amount_including_tax. */
		amount_including_vat: FormControl<number | null | undefined>,

		/** Reference to the previous invoice this invoice relates to. */
		billing_reference: FormControl<string | null | undefined>,

		/** Reference provided by the buyer. Used for routing. */
		buyer_reference: FormControl<string | null | undefined>,

		/** Reference to the contract. */
		contract_document_reference: FormControl<string | null | undefined>,

		/** DEPRECATED. Use the new atatchments array. */
		document: FormControl<string | null | undefined>,

		/** The ISO 4217 currency for the invoice. */
		document_currency_code: FormControl<string | null | undefined>,

		/** The type of document. Only "invoice" for now. */
		document_type: FormControl<PurchaseInvoiceDocument_type | null | undefined>,

		/** The date the invoice must be payed by. Format "YYYY-MM-DD". */
		due_date: FormControl<string | null | undefined>,

		/** Deprecated. Used for accountants. The id you specified for the organization. */
		external_key: FormControl<string | null | undefined>,

		/** Deprecated. Used for the embedded portal retrieval service. The external_user_id you provided when the ShopAccount was created. */
		external_user_id: FormControl<string | null | undefined>,

		/** The GUID of the invoice */
		guid: FormControl<string | null | undefined>,

		/** The invoicenumber. */
		invoice_number: FormControl<string | null | undefined>,

		/** The type of invoice. */
		invoice_type: FormControl<PurchaseInvoiceInvoice_type | null | undefined>,

		/** The date the invoice was issued. Format "YYYY-MM-DD". */
		issue_date: FormControl<string | null | undefined>,

		/** The id of the LegalEntity the invoice was received for. */
		legal_entity_id: FormControl<number | null | undefined>,

		/** The invoice level note. */
		note: FormControl<string | null | undefined>,

		/** Reference to the order. Used for matching the invoice to an order. */
		order_reference: FormControl<string | null | undefined>,

		/** DEPRECATED - use the payment_id property in the payment_means_array */
		payment_means_payment_id: FormControl<string | null | undefined>,

		/** A textual description of the payment terms. */
		payment_terms_note: FormControl<string | null | undefined>,

		/** The end date of the period this invoice relates to. Format "YYYY-MM-DD". */
		period_end: FormControl<string | null | undefined>,

		/** The start date of the period this invoice relates to. Format "YYYY-MM-DD". */
		period_start: FormControl<string | null | undefined>,

		/** Reference to the project. */
		project_reference: FormControl<string | null | undefined>,

		/** The source the invoice was received from. */
		source: FormControl<PurchaseInvoiceSource | null | undefined>,

		/** The subtype of document. */
		sub_type: FormControl<PurchaseInvoiceInvoice_type | null | undefined>,

		/** Whether or not the document image (PDF) was generated by Storecove. If true, it means the invoice was received without any attachments and Storecove generated one for you. If false, the invoice will contain at least one attachment, which was received from the invoice sender. */
		system_generated_primary_image: FormControl<boolean | null | undefined>,

		/** The date the invoice was issued for tax purposes. In most countries MUST match the issue_date. Format "YYYY-MM-DD". */
		tax_point_date: FormControl<string | null | undefined>,

		/** The tax system of the invoice. Either tax_line_percentages or tax_line_amounts. The first tax system means the invoice lines contain only the tax percentages and the tax amounts are included only in the tax subtotals at the invoice level and so are only calculated at the invoice level. The tax system tax_line_amounts means that in addition to the percentage, each invoice line also contains the tax amount. The tax subtotals at the invoice level are calculated as the sum of the tax of the invoice lines. The distinction between the two tax systems has has implications for rounding. */
		tax_system: FormControl<string | null | undefined>,

		/** DEPRECATED - This is now part of each invoice line. */
		vat_reverse_charge: FormControl<boolean | null | undefined>,
	}
	export function CreatePurchaseInvoiceFormGroup() {
		return new FormGroup<PurchaseInvoiceFormProperties>({
			accounting_cost: new FormControl<string | null | undefined>(undefined),
			allowance_charge: new FormControl<number | null | undefined>(undefined),
			amount_including_vat: new FormControl<number | null | undefined>(undefined),
			billing_reference: new FormControl<string | null | undefined>(undefined),
			buyer_reference: new FormControl<string | null | undefined>(undefined),
			contract_document_reference: new FormControl<string | null | undefined>(undefined),
			document: new FormControl<string | null | undefined>(undefined),
			document_currency_code: new FormControl<string | null | undefined>(undefined),
			document_type: new FormControl<PurchaseInvoiceDocument_type | null | undefined>(undefined),
			due_date: new FormControl<string | null | undefined>(undefined),
			external_key: new FormControl<string | null | undefined>(undefined),
			external_user_id: new FormControl<string | null | undefined>(undefined),
			guid: new FormControl<string | null | undefined>(undefined),
			invoice_number: new FormControl<string | null | undefined>(undefined),
			invoice_type: new FormControl<PurchaseInvoiceInvoice_type | null | undefined>(undefined),
			issue_date: new FormControl<string | null | undefined>(undefined),
			legal_entity_id: new FormControl<number | null | undefined>(undefined),
			note: new FormControl<string | null | undefined>(undefined),
			order_reference: new FormControl<string | null | undefined>(undefined),
			payment_means_payment_id: new FormControl<string | null | undefined>(undefined),
			payment_terms_note: new FormControl<string | null | undefined>(undefined),
			period_end: new FormControl<string | null | undefined>(undefined),
			period_start: new FormControl<string | null | undefined>(undefined),
			project_reference: new FormControl<string | null | undefined>(undefined),
			source: new FormControl<PurchaseInvoiceSource | null | undefined>(undefined),
			sub_type: new FormControl<PurchaseInvoiceInvoice_type | null | undefined>(undefined),
			system_generated_primary_image: new FormControl<boolean | null | undefined>(undefined),
			tax_point_date: new FormControl<string | null | undefined>(undefined),
			tax_system: new FormControl<string | null | undefined>(undefined),
			vat_reverse_charge: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface PurchaseInvoiceAllowanceCharge {

		/** The amount excluding tax. */
		amount_excluding_tax?: number | null;

		/** DEPRECATED - use amount_excluding_tax. */
		amount_excluding_vat?: string | null;

		/** The reason for the allowance or charge. */
		reason?: string | null;
		tax?: PurchaseInvoiceTax;

		/** DEPRECATED - Use tax. */
		vat?: PurchaseInvoiceVat;
	}
	export interface PurchaseInvoiceAllowanceChargeFormProperties {

		/** The amount excluding tax. */
		amount_excluding_tax: FormControl<number | null | undefined>,

		/** DEPRECATED - use amount_excluding_tax. */
		amount_excluding_vat: FormControl<string | null | undefined>,

		/** The reason for the allowance or charge. */
		reason: FormControl<string | null | undefined>,
	}
	export function CreatePurchaseInvoiceAllowanceChargeFormGroup() {
		return new FormGroup<PurchaseInvoiceAllowanceChargeFormProperties>({
			amount_excluding_tax: new FormControl<number | null | undefined>(undefined),
			amount_excluding_vat: new FormControl<string | null | undefined>(undefined),
			reason: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** DEPRECATED - Use tax. */
	export interface PurchaseInvoiceVat {

		/** The VAT country. */
		amount?: string | null;

		/** The VAT percentage. */
		percentage?: string | null;
	}

	/** DEPRECATED - Use tax. */
	export interface PurchaseInvoiceVatFormProperties {

		/** The VAT country. */
		amount: FormControl<string | null | undefined>,

		/** The VAT percentage. */
		percentage: FormControl<string | null | undefined>,
	}
	export function CreatePurchaseInvoiceVatFormGroup() {
		return new FormGroup<PurchaseInvoiceVatFormProperties>({
			amount: new FormControl<string | null | undefined>(undefined),
			percentage: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PurchaseInvoiceAttachment {

		/** The attachment content type (mime type). */
		content_type?: string | null;

		/** The Base64 encoded document attachment. */
		document?: string | null;
	}
	export interface PurchaseInvoiceAttachmentFormProperties {

		/** The attachment content type (mime type). */
		content_type: FormControl<string | null | undefined>,

		/** The Base64 encoded document attachment. */
		document: FormControl<string | null | undefined>,
	}
	export function CreatePurchaseInvoiceAttachmentFormGroup() {
		return new FormGroup<PurchaseInvoiceAttachmentFormProperties>({
			content_type: new FormControl<string | null | undefined>(undefined),
			document: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PurchaseInvoiceDelivery {

		/** The actual delivery date. */
		actual_date?: string | null;

		/** The location the goods/services were delivered to. */
		location?: PurchaseInvoiceDeliveryLocation;

		/** The party the goods/services were delivered to. */
		party?: PurchaseInvoiceDeliveryParty;
	}
	export interface PurchaseInvoiceDeliveryFormProperties {

		/** The actual delivery date. */
		actual_date: FormControl<string | null | undefined>,
	}
	export function CreatePurchaseInvoiceDeliveryFormGroup() {
		return new FormGroup<PurchaseInvoiceDeliveryFormProperties>({
			actual_date: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PurchaseInvoiceDeliveryLocation {

		/** The building number. Used in SA. */
		building_number?: string | null;

		/** Address city. */
		city?: string | null;

		/** Address country. */
		country?: string | null;

		/** Address county. */
		county?: string | null;

		/** Department name. */
		department?: string | null;

		/** The id of the location. */
		id?: string | null;

		/** Address line 1. */
		line1?: string | null;

		/** Address line 2. */
		line2?: string | null;

		/** The neighborhood. Used in SA. */
		neighborhood?: string | null;

		/** The scheme id for the id of the location. */
		scheme_id?: string | null;

		/** The secondary number. Used in SA. */
		secondary_number?: string | null;

		/** Address zip code */
		zip?: string | null;
	}
	export interface PurchaseInvoiceDeliveryLocationFormProperties {

		/** The building number. Used in SA. */
		building_number: FormControl<string | null | undefined>,

		/** Address city. */
		city: FormControl<string | null | undefined>,

		/** Address country. */
		country: FormControl<string | null | undefined>,

		/** Address county. */
		county: FormControl<string | null | undefined>,

		/** Department name. */
		department: FormControl<string | null | undefined>,

		/** The id of the location. */
		id: FormControl<string | null | undefined>,

		/** Address line 1. */
		line1: FormControl<string | null | undefined>,

		/** Address line 2. */
		line2: FormControl<string | null | undefined>,

		/** The neighborhood. Used in SA. */
		neighborhood: FormControl<string | null | undefined>,

		/** The scheme id for the id of the location. */
		scheme_id: FormControl<string | null | undefined>,

		/** The secondary number. Used in SA. */
		secondary_number: FormControl<string | null | undefined>,

		/** Address zip code */
		zip: FormControl<string | null | undefined>,
	}
	export function CreatePurchaseInvoiceDeliveryLocationFormGroup() {
		return new FormGroup<PurchaseInvoiceDeliveryLocationFormProperties>({
			building_number: new FormControl<string | null | undefined>(undefined),
			city: new FormControl<string | null | undefined>(undefined),
			country: new FormControl<string | null | undefined>(undefined),
			county: new FormControl<string | null | undefined>(undefined),
			department: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			line1: new FormControl<string | null | undefined>(undefined),
			line2: new FormControl<string | null | undefined>(undefined),
			neighborhood: new FormControl<string | null | undefined>(undefined),
			scheme_id: new FormControl<string | null | undefined>(undefined),
			secondary_number: new FormControl<string | null | undefined>(undefined),
			zip: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PurchaseInvoiceDeliveryParty {

		/** The name of the deliveyr party. */
		name?: string | null;
	}
	export interface PurchaseInvoiceDeliveryPartyFormProperties {

		/** The name of the deliveyr party. */
		name: FormControl<string | null | undefined>,
	}
	export function CreatePurchaseInvoiceDeliveryPartyFormGroup() {
		return new FormGroup<PurchaseInvoiceDeliveryPartyFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum PurchaseInvoiceDocument_type { invoice = 0 }

	export interface PurchaseInvoiceInvoiceLine {
		accounting?: PurchaseInvoiceAccountingDetails;

		/** DEPRECATED - use allowance_charges. */
		allowance_charge?: number | null;
		allowance_charge_array?: Array<PurchaseInvoiceInvoiceLineAllowanceCharge>;

		/** Deprecated. */
		allowance_charges?: Array<number>;

		/** The amount excluding Tax. This is equal to quantity x price_amount + ∑ allowance_charges. */
		amount_excluding_tax?: number | null;

		/** DEPRECATED - use amount_excluding_tax. The amount excluding VAT. */
		amount_excluding_vat?: number | null;

		/** The description for the invoice line. */
		description?: string | null;

		/** A short name for the invoice line. */
		name?: string | null;

		/** The end date of the period this invoice line relates to. Format "YYYY-MM-DD". */
		period_end?: string | null;

		/** The start date of the period this invoice line relates to. Format "YYYY-MM-DD". */
		period_start?: string | null;
		price?: PurchaseInvoiceInvoiceLinePrice;
		tax?: PurchaseInvoiceTax;
		units?: PurchaseInvoiceInvoiceLineItem;

		/** DEPRECATED - use tax. The VAT details for the invoice line. */
		vat?: PurchaseInvoiceInvoiceLineVat;
	}
	export interface PurchaseInvoiceInvoiceLineFormProperties {

		/** DEPRECATED - use allowance_charges. */
		allowance_charge: FormControl<number | null | undefined>,

		/** The amount excluding Tax. This is equal to quantity x price_amount + ∑ allowance_charges. */
		amount_excluding_tax: FormControl<number | null | undefined>,

		/** DEPRECATED - use amount_excluding_tax. The amount excluding VAT. */
		amount_excluding_vat: FormControl<number | null | undefined>,

		/** The description for the invoice line. */
		description: FormControl<string | null | undefined>,

		/** A short name for the invoice line. */
		name: FormControl<string | null | undefined>,

		/** The end date of the period this invoice line relates to. Format "YYYY-MM-DD". */
		period_end: FormControl<string | null | undefined>,

		/** The start date of the period this invoice line relates to. Format "YYYY-MM-DD". */
		period_start: FormControl<string | null | undefined>,
	}
	export function CreatePurchaseInvoiceInvoiceLineFormGroup() {
		return new FormGroup<PurchaseInvoiceInvoiceLineFormProperties>({
			allowance_charge: new FormControl<number | null | undefined>(undefined),
			amount_excluding_tax: new FormControl<number | null | undefined>(undefined),
			amount_excluding_vat: new FormControl<number | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			period_end: new FormControl<string | null | undefined>(undefined),
			period_start: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PurchaseInvoiceInvoiceLineAllowanceCharge {

		/** The amount of the allowance or charge. */
		amount?: number | null;

		/** The reason for the allowance or charge. */
		reason?: string | null;
	}
	export interface PurchaseInvoiceInvoiceLineAllowanceChargeFormProperties {

		/** The amount of the allowance or charge. */
		amount: FormControl<number | null | undefined>,

		/** The reason for the allowance or charge. */
		reason: FormControl<string | null | undefined>,
	}
	export function CreatePurchaseInvoiceInvoiceLineAllowanceChargeFormGroup() {
		return new FormGroup<PurchaseInvoiceInvoiceLineAllowanceChargeFormProperties>({
			amount: new FormControl<number | null | undefined>(undefined),
			reason: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PurchaseInvoiceInvoiceLineVat {

		/** The amount of VAT for the invoice line. */
		amount?: number | null;

		/** The ISO 3166 country of the VAT for the invoice line. */
		country?: string | null;

		/** The percentage of VAT for the invoice line. */
		percentage?: number | null;
	}
	export interface PurchaseInvoiceInvoiceLineVatFormProperties {

		/** The amount of VAT for the invoice line. */
		amount: FormControl<number | null | undefined>,

		/** The ISO 3166 country of the VAT for the invoice line. */
		country: FormControl<string | null | undefined>,

		/** The percentage of VAT for the invoice line. */
		percentage: FormControl<number | null | undefined>,
	}
	export function CreatePurchaseInvoiceInvoiceLineVatFormGroup() {
		return new FormGroup<PurchaseInvoiceInvoiceLineVatFormProperties>({
			amount: new FormControl<number | null | undefined>(undefined),
			country: new FormControl<string | null | undefined>(undefined),
			percentage: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum PurchaseInvoiceInvoice_type { invoice = 0, creditnote = 1, correctioninvoice = 2 }

	export interface PurchaseInvoicePayment_means {

		/** The IBAN to which to transfer. */
		iban?: string | null;

		/** An id to mention in the transfer. */
		id?: string | null;
	}
	export interface PurchaseInvoicePayment_meansFormProperties {

		/** The IBAN to which to transfer. */
		iban: FormControl<string | null | undefined>,

		/** An id to mention in the transfer. */
		id: FormControl<string | null | undefined>,
	}
	export function CreatePurchaseInvoicePayment_meansFormGroup() {
		return new FormGroup<PurchaseInvoicePayment_meansFormProperties>({
			iban: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PurchaseInvoicePaymentMeans {

		/** The account number to which to transfer. */
		account?: string | null;

		/** The code identifying the bank branch. May contain a BIC/SWIFT or something appropriate for the payment method, such as "NPP" for type NppPaymentMean. */
		branch_code?: string | null;

		/** The account holder name to which to transfer. */
		holder?: string | null;

		/** The mandate, used only for type DirectDebitPaymentMean. */
		mandate?: string | null;

		/** The payment network. Used only for type CardPaymentType. */
		network?: string | null;

		/** The payment id to use when making the payment. The invoice sender will use this to match the received funds to the invoice. */
		payment_id?: string | null;

		/** The type of payment means. Which type are returned is determined by the &pmv= query parameter. For details see documentation for that field. */
		type?: PurchaseInvoicePaymentMeansType | null;
	}
	export interface PurchaseInvoicePaymentMeansFormProperties {

		/** The account number to which to transfer. */
		account: FormControl<string | null | undefined>,

		/** The code identifying the bank branch. May contain a BIC/SWIFT or something appropriate for the payment method, such as "NPP" for type NppPaymentMean. */
		branch_code: FormControl<string | null | undefined>,

		/** The account holder name to which to transfer. */
		holder: FormControl<string | null | undefined>,

		/** The mandate, used only for type DirectDebitPaymentMean. */
		mandate: FormControl<string | null | undefined>,

		/** The payment network. Used only for type CardPaymentType. */
		network: FormControl<string | null | undefined>,

		/** The payment id to use when making the payment. The invoice sender will use this to match the received funds to the invoice. */
		payment_id: FormControl<string | null | undefined>,

		/** The type of payment means. Which type are returned is determined by the &pmv= query parameter. For details see documentation for that field. */
		type: FormControl<PurchaseInvoicePaymentMeansType | null | undefined>,
	}
	export function CreatePurchaseInvoicePaymentMeansFormGroup() {
		return new FormGroup<PurchaseInvoicePaymentMeansFormProperties>({
			account: new FormControl<string | null | undefined>(undefined),
			branch_code: new FormControl<string | null | undefined>(undefined),
			holder: new FormControl<string | null | undefined>(undefined),
			mandate: new FormControl<string | null | undefined>(undefined),
			network: new FormControl<string | null | undefined>(undefined),
			payment_id: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<PurchaseInvoicePaymentMeansType | null | undefined>(undefined),
		});

	}

	export enum PurchaseInvoicePaymentMeansType { BankPaymentMean = 0, DirectDebitPaymentMean = 1, CardPaymentMean = 2, NppPaymentMean = 3, SeBankGiroPaymentMean = 4, SePlusgiroPaymentMean = 5, SgCardPaymentMean = 6, SgGiroPaymentMean = 7, SgPaynowPaymentMean = 8, CreditTransferPaymentMean = 9, CreditCardPaymentMean = 10, SeBankgiroPaymentMean = 11, AunzNppPayidPaymentMean = 12, OnlinePaymentServicePaymentMean = 13, StandingAgreementPaymentMean = 14, AunzNppPaytoPaymentMean = 15, AunzBpayPaymentMean = 16, AunzPostbillpayPaymentMean = 17, AunzUriPaymentMean = 18 }

	export enum PurchaseInvoiceSource { peppol = 0, script = 1, supplier = 2, email = 3 }

	export interface PurchaseInvoiceTaxSubtotal {

		/** The amount excluding tax. */
		amount_excluding_tax?: number | null;

		/** DEPRECATED - use amount_excluding_tax. */
		amount_excluding_vat?: string | null;
		tax?: PurchaseInvoiceTax;

		/** DEPRECATED - Use tax. */
		vat?: PurchaseInvoiceVat;
	}
	export interface PurchaseInvoiceTaxSubtotalFormProperties {

		/** The amount excluding tax. */
		amount_excluding_tax: FormControl<number | null | undefined>,

		/** DEPRECATED - use amount_excluding_tax. */
		amount_excluding_vat: FormControl<string | null | undefined>,
	}
	export function CreatePurchaseInvoiceTaxSubtotalFormGroup() {
		return new FormGroup<PurchaseInvoiceTaxSubtotalFormProperties>({
			amount_excluding_tax: new FormControl<number | null | undefined>(undefined),
			amount_excluding_vat: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PurchaseInvoiceAccountingDetails {

		/** The the code of the general ledger account. */
		code?: string | null;

		/** The name of the list for the code, e.g. "RGS". */
		list?: string | null;

		/** The version of the list for the code, e.g. "1.1". */
		list_version?: string | null;

		/** A textual description of the code. */
		name?: string | null;
	}
	export interface PurchaseInvoiceAccountingDetailsFormProperties {

		/** The the code of the general ledger account. */
		code: FormControl<string | null | undefined>,

		/** The name of the list for the code, e.g. "RGS". */
		list: FormControl<string | null | undefined>,

		/** The version of the list for the code, e.g. "1.1". */
		list_version: FormControl<string | null | undefined>,

		/** A textual description of the code. */
		name: FormControl<string | null | undefined>,
	}
	export function CreatePurchaseInvoiceAccountingDetailsFormGroup() {
		return new FormGroup<PurchaseInvoiceAccountingDetailsFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			list: new FormControl<string | null | undefined>(undefined),
			list_version: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PurchaseInvoiceDocumentTotals {

		/** The total invoice amount payable including tax. */
		payable?: number | null;

		/** The amount already paid. */
		prepaid?: number | null;

		/** The difference between the payable amount and the total invoice amount including tax. */
		rounding?: number | null;

		/** The total invoice amount, including tax. This is equal to the sum of the invoice_lines (amount_excluding_tax + tax.amount) and the allowances and charges. */
		total?: number | null;
	}
	export interface PurchaseInvoiceDocumentTotalsFormProperties {

		/** The total invoice amount payable including tax. */
		payable: FormControl<number | null | undefined>,

		/** The amount already paid. */
		prepaid: FormControl<number | null | undefined>,

		/** The difference between the payable amount and the total invoice amount including tax. */
		rounding: FormControl<number | null | undefined>,

		/** The total invoice amount, including tax. This is equal to the sum of the invoice_lines (amount_excluding_tax + tax.amount) and the allowances and charges. */
		total: FormControl<number | null | undefined>,
	}
	export function CreatePurchaseInvoiceDocumentTotalsFormGroup() {
		return new FormGroup<PurchaseInvoiceDocumentTotalsFormProperties>({
			payable: new FormControl<number | null | undefined>(undefined),
			prepaid: new FormControl<number | null | undefined>(undefined),
			rounding: new FormControl<number | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface PurchaseInvoiceInvoiceLineItem {

		/** The quantity of the item. Can have up to digits. */
		quantity?: number | null;

		/** The unit code of the quantity. */
		unit_code?: string | null;
	}
	export interface PurchaseInvoiceInvoiceLineItemFormProperties {

		/** The quantity of the item. Can have up to digits. */
		quantity: FormControl<number | null | undefined>,

		/** The unit code of the quantity. */
		unit_code: FormControl<string | null | undefined>,
	}
	export function CreatePurchaseInvoiceInvoiceLineItemFormGroup() {
		return new FormGroup<PurchaseInvoiceInvoiceLineItemFormProperties>({
			quantity: new FormControl<number | null | undefined>(undefined),
			unit_code: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PurchaseInvoiceInvoiceLinePrice {

		/** The number of items the price is for. Can have up to digits. */
		base_quantity?: number | null;

		/** The price for one item, excluding VAT. Can have up to digits. */
		price_amount?: number | null;
	}
	export interface PurchaseInvoiceInvoiceLinePriceFormProperties {

		/** The number of items the price is for. Can have up to digits. */
		base_quantity: FormControl<number | null | undefined>,

		/** The price for one item, excluding VAT. Can have up to digits. */
		price_amount: FormControl<number | null | undefined>,
	}
	export function CreatePurchaseInvoiceInvoiceLinePriceFormGroup() {
		return new FormGroup<PurchaseInvoiceInvoiceLinePriceFormProperties>({
			base_quantity: new FormControl<number | null | undefined>(undefined),
			price_amount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface PurchaseInvoiceSender {
		billing_contact?: PurchaseInvoiceSenderBillingContact;

		/** The building number. Used in SA. */
		building_number?: string | null;

		/** The city. */
		city?: string | null;

		/** The country. */
		country?: string | null;

		/** The county. */
		county?: string | null;

		/** The department who sent the invoice. */
		department?: string | null;

		/** The array of identifiers for this sender. */
		identifiers?: Array<PeppolIdentifier>;

		/** The legal name of the party who sent the invoice. */
		legal_name?: string | null;

		/** The address */
		line1?: string | null;

		/** The address, line 2 */
		line2?: string | null;

		/** The neighborhood. Used in SA. */
		neighborhood?: string | null;

		/** The party who sent the invoice. */
		party_name?: string | null;
		peppol_identifiers?: PeppolIdentifier;

		/** The secondary number. Used in SA. */
		secondary_number?: string | null;

		/** The zip code. */
		zip?: string | null;
	}
	export interface PurchaseInvoiceSenderFormProperties {

		/** The building number. Used in SA. */
		building_number: FormControl<string | null | undefined>,

		/** The city. */
		city: FormControl<string | null | undefined>,

		/** The country. */
		country: FormControl<string | null | undefined>,

		/** The county. */
		county: FormControl<string | null | undefined>,

		/** The department who sent the invoice. */
		department: FormControl<string | null | undefined>,

		/** The legal name of the party who sent the invoice. */
		legal_name: FormControl<string | null | undefined>,

		/** The address */
		line1: FormControl<string | null | undefined>,

		/** The address, line 2 */
		line2: FormControl<string | null | undefined>,

		/** The neighborhood. Used in SA. */
		neighborhood: FormControl<string | null | undefined>,

		/** The party who sent the invoice. */
		party_name: FormControl<string | null | undefined>,

		/** The secondary number. Used in SA. */
		secondary_number: FormControl<string | null | undefined>,

		/** The zip code. */
		zip: FormControl<string | null | undefined>,
	}
	export function CreatePurchaseInvoiceSenderFormGroup() {
		return new FormGroup<PurchaseInvoiceSenderFormProperties>({
			building_number: new FormControl<string | null | undefined>(undefined),
			city: new FormControl<string | null | undefined>(undefined),
			country: new FormControl<string | null | undefined>(undefined),
			county: new FormControl<string | null | undefined>(undefined),
			department: new FormControl<string | null | undefined>(undefined),
			legal_name: new FormControl<string | null | undefined>(undefined),
			line1: new FormControl<string | null | undefined>(undefined),
			line2: new FormControl<string | null | undefined>(undefined),
			neighborhood: new FormControl<string | null | undefined>(undefined),
			party_name: new FormControl<string | null | undefined>(undefined),
			secondary_number: new FormControl<string | null | undefined>(undefined),
			zip: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PurchaseInvoiceSenderBillingContact {

		/** The email of the billing contact. */
		email?: string | null;

		/** The first name of the billing contact. */
		first_name?: string | null;

		/** The last name of the billing contact. */
		last_name?: string | null;
	}
	export interface PurchaseInvoiceSenderBillingContactFormProperties {

		/** The email of the billing contact. */
		email: FormControl<string | null | undefined>,

		/** The first name of the billing contact. */
		first_name: FormControl<string | null | undefined>,

		/** The last name of the billing contact. */
		last_name: FormControl<string | null | undefined>,
	}
	export function CreatePurchaseInvoiceSenderBillingContactFormGroup() {
		return new FormGroup<PurchaseInvoiceSenderBillingContactFormProperties>({
			email: new FormControl<string | null | undefined>(undefined),
			first_name: new FormControl<string | null | undefined>(undefined),
			last_name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PurchaseInvoiceTax {

		/** The tax element. */
		tax?: PurchaseInvoiceTaxTax;
	}
	export interface PurchaseInvoiceTaxFormProperties {
	}
	export function CreatePurchaseInvoiceTaxFormGroup() {
		return new FormGroup<PurchaseInvoiceTaxFormProperties>({
		});

	}

	export interface PurchaseInvoiceTaxTax {

		/** The tax amount. */
		amount?: number | null;

		/** The tax category. */
		category?: TaxCategory | null;

		/** Deprecated. The tax category code. */
		category_code?: string | null;

		/** The tax country. */
		country?: string | null;

		/** The tax percentage. */
		percentage?: number | null;

		/** The tax type. */
		type?: PurchaseInvoiceTaxTaxType | null;
	}
	export interface PurchaseInvoiceTaxTaxFormProperties {

		/** The tax amount. */
		amount: FormControl<number | null | undefined>,

		/** The tax category. */
		category: FormControl<TaxCategory | null | undefined>,

		/** Deprecated. The tax category code. */
		category_code: FormControl<string | null | undefined>,

		/** The tax country. */
		country: FormControl<string | null | undefined>,

		/** The tax percentage. */
		percentage: FormControl<number | null | undefined>,

		/** The tax type. */
		type: FormControl<PurchaseInvoiceTaxTaxType | null | undefined>,
	}
	export function CreatePurchaseInvoiceTaxTaxFormGroup() {
		return new FormGroup<PurchaseInvoiceTaxTaxFormProperties>({
			amount: new FormControl<number | null | undefined>(undefined),
			category: new FormControl<TaxCategory | null | undefined>(undefined),
			category_code: new FormControl<string | null | undefined>(undefined),
			country: new FormControl<string | null | undefined>(undefined),
			percentage: new FormControl<number | null | undefined>(undefined),
			type: new FormControl<PurchaseInvoiceTaxTaxType | null | undefined>(undefined),
		});

	}

	export enum PurchaseInvoiceTaxTaxType { VAT = 0, GST = 1 }

	export interface PurchaseInvoiceUbl {

		/** Used for accountants. The id you specified for the organization. */
		external_key?: string | null;

		/** Used for the embedded portal retrieval service. The external_user_id you provided when the ShopAccount was created. */
		external_user_id?: string | null;

		/** The GUID of the invoice */
		guid?: string | null;

		/** The id of the LegalEntity the invoice was received for. */
		legal_entity_id?: number | null;

		/** Whether or not the document image (PDF) was generated by Storecove. If true, it means the invoice was received without any attachments and Storecove generated one for you. If false, the invoice will contain at least one attachment, which was received from the invoice sender. */
		system_generated_primary_image?: boolean | null;

		/** The tax system of the invoice. Either tax_line_percentages or tax_line_amounts. The first tax system means the invoice lines contain only the tax percentages and the tax amounts are included only in the tax subtotals at the invoice level and so are only calculated at the invoice level. The tax system tax_line_amounts means that in addition to the percentage, each invoice line also contains the tax amount. The tax subtotals at the invoice level are calculated as the sum of the tax of the invoice lines. The distinction between the two tax systems has has implications for rounding. */
		tax_system?: string | null;

		/** The Base64 encoded UBL invoice. */
		ubl?: string | null;
	}
	export interface PurchaseInvoiceUblFormProperties {

		/** Used for accountants. The id you specified for the organization. */
		external_key: FormControl<string | null | undefined>,

		/** Used for the embedded portal retrieval service. The external_user_id you provided when the ShopAccount was created. */
		external_user_id: FormControl<string | null | undefined>,

		/** The GUID of the invoice */
		guid: FormControl<string | null | undefined>,

		/** The id of the LegalEntity the invoice was received for. */
		legal_entity_id: FormControl<number | null | undefined>,

		/** Whether or not the document image (PDF) was generated by Storecove. If true, it means the invoice was received without any attachments and Storecove generated one for you. If false, the invoice will contain at least one attachment, which was received from the invoice sender. */
		system_generated_primary_image: FormControl<boolean | null | undefined>,

		/** The tax system of the invoice. Either tax_line_percentages or tax_line_amounts. The first tax system means the invoice lines contain only the tax percentages and the tax amounts are included only in the tax subtotals at the invoice level and so are only calculated at the invoice level. The tax system tax_line_amounts means that in addition to the percentage, each invoice line also contains the tax amount. The tax subtotals at the invoice level are calculated as the sum of the tax of the invoice lines. The distinction between the two tax systems has has implications for rounding. */
		tax_system: FormControl<string | null | undefined>,

		/** The Base64 encoded UBL invoice. */
		ubl: FormControl<string | null | undefined>,
	}
	export function CreatePurchaseInvoiceUblFormGroup() {
		return new FormGroup<PurchaseInvoiceUblFormProperties>({
			external_key: new FormControl<string | null | undefined>(undefined),
			external_user_id: new FormControl<string | null | undefined>(undefined),
			guid: new FormControl<string | null | undefined>(undefined),
			legal_entity_id: new FormControl<number | null | undefined>(undefined),
			system_generated_primary_image: new FormControl<boolean | null | undefined>(undefined),
			tax_system: new FormControl<string | null | undefined>(undefined),
			ubl: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Rea {

		/** The captial for the company. */
		capital?: number | null;

		/**
		 * The identifier.
		 * Max length: 20
		 * Min length: 2
		 */
		identifier?: string | null;

		/** The liquidation status of the company. */
		liquidation_status?: ReaLiquidation_status | null;

		/** The number of partners. */
		partners?: ReaPartners | null;

		/** The provincia of the ufficio that issued the identifier. */
		province?: ReaProvince | null;
	}
	export interface ReaFormProperties {

		/** The captial for the company. */
		capital: FormControl<number | null | undefined>,

		/**
		 * The identifier.
		 * Max length: 20
		 * Min length: 2
		 */
		identifier: FormControl<string | null | undefined>,

		/** The liquidation status of the company. */
		liquidation_status: FormControl<ReaLiquidation_status | null | undefined>,

		/** The number of partners. */
		partners: FormControl<ReaPartners | null | undefined>,

		/** The provincia of the ufficio that issued the identifier. */
		province: FormControl<ReaProvince | null | undefined>,
	}
	export function CreateReaFormGroup() {
		return new FormGroup<ReaFormProperties>({
			capital: new FormControl<number | null | undefined>(undefined),
			identifier: new FormControl<string | null | undefined>(undefined, [Validators.minLength(2), Validators.maxLength(20)]),
			liquidation_status: new FormControl<ReaLiquidation_status | null | undefined>(undefined),
			partners: new FormControl<ReaPartners | null | undefined>(undefined),
			province: new FormControl<ReaProvince | null | undefined>(undefined),
		});

	}

	export enum ReaLiquidation_status { LN = 0, LS = 1 }

	export enum ReaPartners { SU = 0, SM = 1 }

	export enum ReaProvince { AG = 0, AL = 1, AN = 2, AO = 3, AQ = 4, AR = 5, AP = 6, AT = 7, AV = 8, BA = 9, BT = 10, BL = 11, BN = 12, BG = 13, BI = 14, BO = 15, BZ = 16, BS = 17, BR = 18, CA = 19, CL = 20, CB = 21, CI = 22, CE = 23, CT = 24, CZ = 25, CH = 26, CO = 27, CS = 28, CR = 29, KR = 30, CN = 31, EN = 32, FM = 33, FE = 34, FI = 35, FG = 36, FC = 37, FR = 38, GE = 39, GO = 40, GR = 41, IM = 42, IS = 43, SP = 44, LT = 45, LE = 46, LC = 47, LI = 48, LO = 49, LU = 50, MC = 51, MN = 52, MS = 53, MT = 54, VS = 55, ME = 56, MI = 57, MO = 58, MB = 59, NA = 60, NO = 61, NU = 62, OG = 63, OT = 64, OR = 65, PD = 66, PA = 67, PR = 68, PV = 69, PG = 70, PU = 71, PE = 72, PC = 73, PI = 74, PT = 75, PN = 76, PZ = 77, PO = 78, RG = 79, RA = 80, RC = 81, RE = 82, RI = 83, RN = 84, RO = 85, SA = 86, SS = 87, SV = 88, SI = 89, SR = 90, SO = 91, TA = 92, TE = 93, TR = 94, TO = 95, TP = 96, TN = 97, TV = 98, TS = 99, UD = 100, VA = 101, VE = 102, VB = 103, VC = 104, VR = 105, VV = 106, VI = 107, VT = 108 }

	export interface ReceivedDocument {

		/** The GUID of the received document */
		guid?: string | null;
	}
	export interface ReceivedDocumentFormProperties {

		/** The GUID of the received document */
		guid: FormControl<string | null | undefined>,
	}
	export function CreateReceivedDocumentFormGroup() {
		return new FormGroup<ReceivedDocumentFormProperties>({
			guid: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ReceivedDocumentCreate {

		/**
		 * The Base64 encoded document.
		 * Required
		 */
		document: string;

		/**
		 * The attachment content type (mime type).
		 * Required
		 */
		parseStrategy: ReceivedDocumentCreateParseStrategy;
	}
	export interface ReceivedDocumentCreateFormProperties {

		/**
		 * The Base64 encoded document.
		 * Required
		 */
		document: FormControl<string | null | undefined>,

		/**
		 * The attachment content type (mime type).
		 * Required
		 */
		parseStrategy: FormControl<ReceivedDocumentCreateParseStrategy | null | undefined>,
	}
	export function CreateReceivedDocumentCreateFormGroup() {
		return new FormGroup<ReceivedDocumentCreateFormProperties>({
			document: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			parseStrategy: new FormControl<ReceivedDocumentCreateParseStrategy | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ReceivedDocumentCreateParseStrategy { rfc822 = 0 }


	/** A party that can receive or send invoices */
	export interface ReceiverParty {

		/**
		 * The address
		 * Required
		 */
		address: Address;

		/**
		 * The name of the company receiving the invoice
		 * Required
		 * Min length: 2
		 */
		companyName: string;

		/** Contact details for the invoice */
		contact?: Contact;
	}

	/** A party that can receive or send invoices */
	export interface ReceiverPartyFormProperties {

		/**
		 * The name of the company receiving the invoice
		 * Required
		 * Min length: 2
		 */
		companyName: FormControl<string | null | undefined>,
	}
	export function CreateReceiverPartyFormGroup() {
		return new FormGroup<ReceiverPartyFormProperties>({
			companyName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(2)]),
		});

	}

	export interface WebhookInstance {

		/** The webhook body that would have been pushed if this were a push-mode webhook. */
		body?: string | null;

		/** The GUID of the WebhookInstance. Use this to delete it. */
		guid?: string | null;
	}
	export interface WebhookInstanceFormProperties {

		/** The webhook body that would have been pushed if this were a push-mode webhook. */
		body: FormControl<string | null | undefined>,

		/** The GUID of the WebhookInstance. Use this to delete it. */
		guid: FormControl<string | null | undefined>,
	}
	export function CreateWebhookInstanceFormGroup() {
		return new FormGroup<WebhookInstanceFormProperties>({
			body: new FormControl<string | null | undefined>(undefined),
			guid: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Discover Network Participant Existence
		 * Discover if a network participant exists.
		 * Post discovery/exists
		 * @param {DiscoverableParticipant} requestBody The participant to check
		 * @return {DiscoveredParticipant} Success
		 */
		Discovery_exists(requestBody: DiscoverableParticipant): Observable<DiscoveredParticipant> {
			return this.http.post<DiscoveredParticipant>(this.baseUri + 'discovery/exists', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Discover Country Identifiers ** EXPERIMENTAL
		 * Discover the identifiers used in each country, for routing, for legal identification as well as for tax identification purposes. We are currently testing this endpoint with selected Customers. If you would like to participate, please contact us.
		 * Get discovery/identifiers
		 * @return {CountrySpecifications} Success
		 */
		Discovery_identifiers(): Observable<CountrySpecifications> {
			return this.http.get<CountrySpecifications>(this.baseUri + 'discovery/identifiers', {});
		}

		/**
		 * Disover Network Participant
		 * Discover a network participant and capabilities.
		 * Post discovery/receives
		 * @param {DiscoverableParticipant} requestBody The participant to check
		 * @return {DiscoveredParticipant} Success
		 */
		Discovery_receives(requestBody: DiscoverableParticipant): Observable<DiscoveredParticipant> {
			return this.http.post<DiscoveredParticipant>(this.baseUri + 'discovery/receives', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Submit a new document.
		 * Submit a document for delivery. This endpoint will replaces the /invoice_submissions endpoint which will soon be deprecated.
		 * Post document_submissions
		 * @param {DocumentSubmission} requestBody Document to submit
		 * @return {DocumentSubmissionResult} Success
		 */
		Create_document_submission(requestBody: DocumentSubmission): Observable<DocumentSubmissionResult> {
			return this.http.post<DocumentSubmissionResult>(this.baseUri + 'document_submissions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get DocumentSubmission Evidence
		 * Get evidence for a DocumentSubmission by GUID with corresponding status
		 * Get document_submissions/{guid}/evidence/{evidence_type}
		 * @param {string} guid DocumentSubmission GUID
		 * @param {Show_document_submission_evidenceEvidence_type} evidence_type Type of evidence requested
		 * @return {DocumentSubmissionEvidence} Success
		 */
		Show_document_submission_evidence(guid: string, evidence_type: Show_document_submission_evidenceEvidence_type): Observable<DocumentSubmissionEvidence> {
			return this.http.get<DocumentSubmissionEvidence>(this.baseUri + 'document_submissions/' + (guid == null ? '' : encodeURIComponent(guid)) + '/evidence/' + evidence_type, {});
		}

		/**
		 * Submit a new invoice
		 * DEPRECATED. Use the new /document_submissions endpoint. Submit an invoice for delivery.
		 * Post invoice_submissions
		 * @param {InvoiceSubmission} requestBody Invoice to submit
		 * @return {InvoiceSubmissionResult} Success
		 */
		Create_invoice_submission(requestBody: InvoiceSubmission): Observable<InvoiceSubmissionResult> {
			return this.http.post<InvoiceSubmissionResult>(this.baseUri + 'invoice_submissions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * DEPRECATED. Preflight an invoice recipient
		 * Deprecated. Use the new /discovery endpoint. Check whether Storecove can deliver an invoice for a list of ids.
		 * Post invoice_submissions/preflight
		 * @param {InvoiceRecipientPreflight} requestBody The invoice recipient to preflight
		 * @return {PreflightInvoiceRecipientResult} Success
		 */
		Preflight_invoice_recipient(requestBody: InvoiceRecipientPreflight): Observable<PreflightInvoiceRecipientResult> {
			return this.http.post<PreflightInvoiceRecipientResult>(this.baseUri + 'invoice_submissions/preflight', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * DEPRECATED. Get InvoiceSubmission Evidence
		 * Deprecated. Use the new /document_submissions/{guid}/evidence endpoint. Get evidence for an InvoiceSubmission by GUID with corresponding status
		 * Get invoice_submissions/{guid}/evidence
		 * @param {string} guid InvoiceSubmission GUID
		 * @return {InvoiceSubmissionEvidence} Success
		 */
		Show_invoice_submission_evidence(guid: string): Observable<InvoiceSubmissionEvidence> {
			return this.http.get<InvoiceSubmissionEvidence>(this.baseUri + 'invoice_submissions/' + (guid == null ? '' : encodeURIComponent(guid)) + '/evidence', {});
		}

		/**
		 * Create a new LegalEntity
		 * Create a new LegalEntity.
		 * Post legal_entities
		 * @param {LegalEntityCreate} requestBody LegalEntity to create
		 * @return {LegalEntity} Success
		 */
		Create_legal_entity(requestBody: LegalEntityCreate): Observable<LegalEntity> {
			return this.http.post<LegalEntity>(this.baseUri + 'legal_entities', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete LegalEntity
		 * Delete a specific LegalEntity.
		 * Delete legal_entities/{id}
		 * @param {number} id legal_entity id
		 * @return {void} 
		 */
		Delete_legal_entity(id: number): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'legal_entities/' + id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get LegalEntity
		 * Get a specific LegalEntity.
		 * Get legal_entities/{id}
		 * @param {number} id legal_entity id
		 * @return {LegalEntity} Success
		 */
		Get_legal_entity(id: number): Observable<LegalEntity> {
			return this.http.get<LegalEntity>(this.baseUri + 'legal_entities/' + id, {});
		}

		/**
		 * Update LegalEntity
		 * Update a specific LegalEntity.
		 * Patch legal_entities/{id}
		 * @param {number} id legal_entity id
		 * @param {LegalEntityUpdate} requestBody LegalEntity updates
		 * @return {LegalEntity} Success
		 */
		Update_legal_entity(id: number, requestBody: LegalEntityUpdate): Observable<LegalEntity> {
			return this.http.patch<LegalEntity>(this.baseUri + 'legal_entities/' + id, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Create a new AdditionalTaxIdentifier
		 * Create a new AdditionalTaxIdentifier. An AdditionalTaxIdentifier is a seconday tax identifier that is used inside the EU when sending invoices to consumers. In that case, the VAT of the receiving country is used and if the sender has a local VAT identifier, that is used to identifiy the sender, instead of the sender's origin country VAT number. To use these identifiers, use the invoice.consumerTaxMode = true property.
		 * Post legal_entities/{legal_entity_id}/additional_tax_identifiers
		 * @param {number} legal_entity_id The id of the LegalEntity for which to create the AdditionalTaxIdentifier
		 * @param {AdditionalTaxIdentifierCreate} requestBody AdditionalTaxIdentifier to create
		 * @return {AdditionalTaxIdentifier} Success
		 */
		Create_additional_tax_identifier(legal_entity_id: number, requestBody: AdditionalTaxIdentifierCreate): Observable<AdditionalTaxIdentifier> {
			return this.http.post<AdditionalTaxIdentifier>(this.baseUri + 'legal_entities/' + legal_entity_id + '/additional_tax_identifiers', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete AdditionalTaxIdentifier
		 * Delete an AdditionalTaxIdentifier
		 * Delete legal_entities/{legal_entity_id}/additional_tax_identifiers/{id}
		 * @param {number} legal_entity_id The id of the LegalEntity the AdditionalTaxIdentifier belongs to
		 * @param {number} id The id of the AdditionalTaxIdentifier
		 * @return {void} 
		 */
		Delete_additional_tax_identifier(legal_entity_id: number, id: number): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'legal_entities/' + legal_entity_id + '/additional_tax_identifiers/' + id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get AdditionalTaxIdentifier
		 * Get an AdditionalTaxIdentifier
		 * Get legal_entities/{legal_entity_id}/additional_tax_identifiers/{id}
		 * @param {number} legal_entity_id The id of the LegalEntity the AdditionalTaxIdentifier belongs to
		 * @param {number} id The id of the AdditionalTaxIdentifier
		 * @return {AdditionalTaxIdentifier} Success
		 */
		Get_additional_tax_identifier(legal_entity_id: number, id: number): Observable<AdditionalTaxIdentifier> {
			return this.http.get<AdditionalTaxIdentifier>(this.baseUri + 'legal_entities/' + legal_entity_id + '/additional_tax_identifiers/' + id, {});
		}

		/**
		 * Update AdditionalTaxIdentifier
		 * Update an AdditionalTaxIdentifier
		 * Patch legal_entities/{legal_entity_id}/additional_tax_identifiers/{id}
		 * @param {number} legal_entity_id The id of the LegalEntity the AdditionalTaxIdentifier belongs to
		 * @param {number} id The id of the AdditionalTaxIdentifier to be updated
		 * @param {AdditionalTaxIdentifierUpdate} requestBody AdditionalTaxIdentifier to update
		 * @return {AdditionalTaxIdentifier} Success
		 */
		Update_additional_tax_identifier(legal_entity_id: number, id: number, requestBody: AdditionalTaxIdentifierUpdate): Observable<AdditionalTaxIdentifier> {
			return this.http.patch<AdditionalTaxIdentifier>(this.baseUri + 'legal_entities/' + legal_entity_id + '/additional_tax_identifiers/' + id, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Create a new Administration
		 * Deprecated. Create a new Administration. An Administration is an email destination for purchase invoices.
		 * Post legal_entities/{legal_entity_id}/administrations
		 * @param {number} legal_entity_id The id of the LegalEntity for which to create the Administration
		 * @param {AdministrationCreate} requestBody Administration to create
		 * @return {Administration} Success
		 */
		Create_administration(legal_entity_id: number, requestBody: AdministrationCreate): Observable<Administration> {
			return this.http.post<Administration>(this.baseUri + 'legal_entities/' + legal_entity_id + '/administrations', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete Administration
		 * Deprecated. Delete an Administration
		 * Delete legal_entities/{legal_entity_id}/administrations/{id}
		 * @param {number} legal_entity_id The id of the LegalEntity the Administration belongs to
		 * @param {number} id The id of the Administration
		 * @return {void} 
		 */
		Delete_administration(legal_entity_id: number, id: number): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'legal_entities/' + legal_entity_id + '/administrations/' + id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Administration
		 * Deprecated. Get an Administration
		 * Get legal_entities/{legal_entity_id}/administrations/{id}
		 * @param {number} legal_entity_id The id of the LegalEntity the Administration belongs to
		 * @param {number} id The id of the Administration
		 * @return {Administration} Success
		 */
		Get_administration(legal_entity_id: number, id: number): Observable<Administration> {
			return this.http.get<Administration>(this.baseUri + 'legal_entities/' + legal_entity_id + '/administrations/' + id, {});
		}

		/**
		 * Update Administration
		 * Deprecated. Update an Administration
		 * Patch legal_entities/{legal_entity_id}/administrations/{id}
		 * @param {number} legal_entity_id The id of the LegalEntity the Administration belongs to
		 * @param {number} id The id of the Administration to be updated
		 * @param {AdministrationUpdate} requestBody Administration to update
		 * @return {Administration} Success
		 */
		Update_administration(legal_entity_id: number, id: number, requestBody: AdministrationUpdate): Observable<Administration> {
			return this.http.patch<Administration>(this.baseUri + 'legal_entities/' + legal_entity_id + '/administrations/' + id, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Create a new PeppolIdentifier
		 * Create a brand new new PeppolIdentifier. For <<_sg_singapore>>, special rules apply.
		 * Post legal_entities/{legal_entity_id}/peppol_identifiers
		 * @param {number} legal_entity_id The id of the LegalEntity for which to create the PeppolIdentifier
		 * @param {PeppolIdentifierCreate} requestBody PeppolIdentifier to create
		 * @return {PeppolIdentifier} Success
		 */
		Create_peppol_identifier(legal_entity_id: number, requestBody: PeppolIdentifierCreate): Observable<PeppolIdentifier> {
			return this.http.post<PeppolIdentifier>(this.baseUri + 'legal_entities/' + legal_entity_id + '/peppol_identifiers', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete PeppolIdentifier
		 * Delete a PeppolIdentifier.
		 * Delete legal_entities/{legal_entity_id}/peppol_identifiers/{superscheme}/{scheme}/{identifier}
		 * @param {number} legal_entity_id The id of the LegalEntity this PeppolIdentifier belongs to
		 * @param {string} superscheme The superscheme of the identifier. Should always be "iso6523-actorid-upis".
		 * @param {string} scheme PEPPOL identifier scheme id, e.g. "DE:VAT". For a full list see <<_receiver_identifiers_list>>.
		 * @param {string} identifier PEPPOL identifier
		 * @return {void} 
		 */
		Delete_peppol_identifier(legal_entity_id: number, superscheme: string, scheme: string, identifier: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'legal_entities/' + legal_entity_id + '/peppol_identifiers/' + (superscheme == null ? '' : encodeURIComponent(superscheme)) + '/' + (scheme == null ? '' : encodeURIComponent(scheme)) + '/' + (identifier == null ? '' : encodeURIComponent(identifier)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Receive a new Document
		 * Receive a new Document.
		 * Post legal_entities/{legal_entity_id}/received_documents
		 * @param {number} legal_entity_id The id of the LegalEntity for which the document was received.
		 * @param {ReceivedDocumentCreate} requestBody Received document to process.
		 * @return {ReceivedDocument} Success
		 */
		Receive_document(legal_entity_id: number, requestBody: ReceivedDocumentCreate): Observable<ReceivedDocument> {
			return this.http.post<ReceivedDocument>(this.baseUri + 'legal_entities/' + legal_entity_id + '/received_documents', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get Purchase invoice data as JSON
		 * Get a specific PurchaseInvoice, in JSON format.
		 * Get purchase_invoices/{guid}
		 * @param {string} guid The guid of the purchase invoice, from the webhook.
		 * @param {string} pmv The PaymentMeans version. The default (and deprecated) version 1.0 will give BankPaymentMean, DirectDebitPaymentMean, CardPaymentMean, NppPaymentMean, SeBankGiroPaymentMean, SePlusGiroPaymentMean, SgCardPaymentMean, SgGiroPaymentMean, SgPaynowPaymentMean.
		 * Version 2.0 deprecates BankPaymentMean (now CreditTransferPaymentMean), CardPaymentMean (now CreditCardPaymentMean), NppPaymentMean (now AunzNppPayidPaymentMean), SeBankGiroPaymentMean (now SeBankgiroPaymentMean  -- note the lower 'g' in 'bankgiro'). It also adds OnlinePaymentServicePaymentMean, StandingAgreementPaymentMean, AunzNppPaytoPaymentMean, AunzBpayPaymentMean, AunzPostbillpayPaymentMean, AunzUriPaymentMean.
		 * @return {PurchaseInvoice} Success
		 */
		Get_invoice_json(guid: string, pmv: string | null | undefined): Observable<PurchaseInvoice> {
			return this.http.get<PurchaseInvoice>(this.baseUri + 'purchase_invoices/' + (guid == null ? '' : encodeURIComponent(guid)) + '&pmv=' + (pmv == null ? '' : encodeURIComponent(pmv)), {});
		}

		/**
		 * Get Purchase invoice data in a selectable format
		 * Get a specific PurchaseInvoice.
		 * Get purchase_invoices/{guid}/{packaging}
		 * @param {string} guid purchase invoice guid
		 * @param {Get_invoice_ublPackaging} packaging How to package the purchase invoice.
		 * @param {string} pmv The PaymentMeans version. The default (and deprecated) version 1.0 will give BankPaymentMean, DirectDebitPaymentMean, CardPaymentMean, NppPaymentMean, SeBankGiroPaymentMean, SePlusGiroPaymentMean, SgCardPaymentMean, SgGiroPaymentMean, SgPaynowPaymentMean.
		 * Version 2.0 deprecates BankPaymentMean (now CreditTransferPaymentMean), CardPaymentMean (now CreditCardPaymentMean), NppPaymentMean (now AunzNppPayidPaymentMean), SeBankGiroPaymentMean (now SeBankgiroPaymentMean  -- note the lower 'g' in 'bankgiro'). It also adds OnlinePaymentServicePaymentMean, StandingAgreementPaymentMean, AunzNppPaytoPaymentMean, AunzBpayPaymentMean, AunzPostbillpayPaymentMean, AunzUriPaymentMean.
		 * @return {PurchaseInvoiceUbl} Success
		 */
		Get_invoice_ubl(guid: string, packaging: Get_invoice_ublPackaging, pmv: string | null | undefined): Observable<PurchaseInvoiceUbl> {
			return this.http.get<PurchaseInvoiceUbl>(this.baseUri + 'purchase_invoices/' + (guid == null ? '' : encodeURIComponent(guid)) + '/' + packaging + '&pmv=' + (pmv == null ? '' : encodeURIComponent(pmv)), {});
		}

		/**
		 * Get Purchase invoice data as JSON with a Base64-encoded UBL string in the specified version
		 * Get a specific PurchaseInvoice in UBL format
		 * Get purchase_invoices/{guid}/{packaging}/{package_version}
		 * @param {string} guid purchase invoice guid
		 * @param {AdministrationPackaging} packaging How to package the purchase invoice.
		 * @param {Get_invoice_ubl_versionedPackage_version} package_version The version of the package.
		 * @return {PurchaseInvoiceUbl} Success
		 */
		Get_invoice_ubl_versioned(guid: string, packaging: AdministrationPackaging, package_version: Get_invoice_ubl_versionedPackage_version): Observable<PurchaseInvoiceUbl> {
			return this.http.get<PurchaseInvoiceUbl>(this.baseUri + 'purchase_invoices/' + (guid == null ? '' : encodeURIComponent(guid)) + '/' + packaging + '/' + package_version, {});
		}

		/**
		 * Get a new ReceivedDocument
		 * EXPERIMENTAL: use only for orders. Get a new ReceivedDocument.
		 * Get received_documents/{guid}/{format}
		 * @param {string} guid The guid of the document that was received. This is the "document_guid" property of the "received_document" webhook.
		 * @param {Get_received_documentSyntax} syntax The syntax in which to receive the received document.
		 * @param {string} format Automatically added
		 * @return {ReceivedDocument} Success
		 */
		Get_received_document(guid: string, syntax: Get_received_documentSyntax, format: string): Observable<ReceivedDocument> {
			return this.http.get<ReceivedDocument>(this.baseUri + 'received_documents/' + (guid == null ? '' : encodeURIComponent(guid)) + '/' + (format == null ? '' : encodeURIComponent(format)) + '&syntax=' + syntax, {});
		}

		/**
		 * GET a WebhookInstance
		 * GET a WebhookInstance from the queue. After processing it successfully, DELETE it and GET the next one. When a 204 is received, the queue is empty and the polling process can sleep for a while.
		 * Get webhook_instances/
		 * @return {WebhookInstance} Success
		 */
		Get_webhook_instances(): Observable<WebhookInstance> {
			return this.http.get<WebhookInstance>(this.baseUri + 'webhook_instances/', {});
		}

		/**
		 * DELETE a WebhookInstance
		 * DELETE a specific WebhookInstance
		 * Delete webhook_instances/{guid}
		 * @param {string} guid WebhookInstance guid
		 * @return {void} 
		 */
		Delete_webhook_instance(guid: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'webhook_instances/' + (guid == null ? '' : encodeURIComponent(guid)), { observe: 'response', responseType: 'text' });
		}
	}

	export enum Show_document_submission_evidenceEvidence_type { sending = 0, clearing = 1 }

	export enum Get_invoice_ublPackaging { json = 0, ubl = 1, original = 2 }

	export enum Get_invoice_ubl_versionedPackage_version { si11 = 0, si12 = 1, si20 = 2, aunz = 3, sg = 4, jp = 5, en16931 = 6, original = 7 }

	export enum Get_received_documentSyntax { json = 0, original = 1 }

}

