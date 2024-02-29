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

	export enum AddressCountry { AD = 'AD', AE = 'AE', AF = 'AF', AG = 'AG', AI = 'AI', AL = 'AL', AM = 'AM', AO = 'AO', AQ = 'AQ', AR = 'AR', AS = 'AS', AT = 'AT', AU = 'AU', AW = 'AW', AX = 'AX', AZ = 'AZ', BA = 'BA', BB = 'BB', BD = 'BD', BE = 'BE', BF = 'BF', BG = 'BG', BH = 'BH', BI = 'BI', BJ = 'BJ', BL = 'BL', BM = 'BM', BN = 'BN', BO = 'BO', BQ = 'BQ', BR = 'BR', BS = 'BS', BT = 'BT', BV = 'BV', BW = 'BW', BY = 'BY', BZ = 'BZ', CA = 'CA', CC = 'CC', CD = 'CD', CF = 'CF', CG = 'CG', CH = 'CH', CI = 'CI', CK = 'CK', CL = 'CL', CM = 'CM', CN = 'CN', CO = 'CO', CR = 'CR', CU = 'CU', CV = 'CV', CW = 'CW', CX = 'CX', CY = 'CY', CZ = 'CZ', DE = 'DE', DJ = 'DJ', DK = 'DK', DM = 'DM', DO = 'DO', DZ = 'DZ', EC = 'EC', EE = 'EE', EG = 'EG', EH = 'EH', ER = 'ER', ES = 'ES', ET = 'ET', FI = 'FI', FJ = 'FJ', FK = 'FK', FM = 'FM', FO = 'FO', FR = 'FR', GA = 'GA', GB = 'GB', GD = 'GD', GE = 'GE', GF = 'GF', GG = 'GG', GH = 'GH', GI = 'GI', GL = 'GL', GM = 'GM', GN = 'GN', GP = 'GP', GQ = 'GQ', GR = 'GR', GS = 'GS', GT = 'GT', GU = 'GU', GW = 'GW', GY = 'GY', HK = 'HK', HM = 'HM', HN = 'HN', HR = 'HR', HT = 'HT', HU = 'HU', ID = 'ID', IE = 'IE', IL = 'IL', IM = 'IM', IN = 'IN', IO = 'IO', IQ = 'IQ', IR = 'IR', IS = 'IS', IT = 'IT', JE = 'JE', JM = 'JM', JO = 'JO', JP = 'JP', KE = 'KE', KG = 'KG', KH = 'KH', KI = 'KI', KM = 'KM', KN = 'KN', KP = 'KP', KR = 'KR', KW = 'KW', KY = 'KY', KZ = 'KZ', LA = 'LA', LB = 'LB', LC = 'LC', LI = 'LI', LK = 'LK', LR = 'LR', LS = 'LS', LT = 'LT', LU = 'LU', LV = 'LV', LY = 'LY', MA = 'MA', MC = 'MC', MD = 'MD', ME = 'ME', MF = 'MF', MG = 'MG', MH = 'MH', MK = 'MK', ML = 'ML', MM = 'MM', MN = 'MN', MO = 'MO', MP = 'MP', MQ = 'MQ', MR = 'MR', MS = 'MS', MT = 'MT', MU = 'MU', MV = 'MV', MW = 'MW', MX = 'MX', MY = 'MY', MZ = 'MZ', NA = 'NA', NC = 'NC', NE = 'NE', NF = 'NF', NG = 'NG', NI = 'NI', NL = 'NL', NO = 'NO', NP = 'NP', NR = 'NR', NU = 'NU', NZ = 'NZ', OM = 'OM', PA = 'PA', PE = 'PE', PF = 'PF', PG = 'PG', PH = 'PH', PK = 'PK', PL = 'PL', PM = 'PM', PN = 'PN', PR = 'PR', PS = 'PS', PT = 'PT', PW = 'PW', PY = 'PY', QA = 'QA', RE = 'RE', RO = 'RO', RS = 'RS', RU = 'RU', RW = 'RW', SA = 'SA', SB = 'SB', SC = 'SC', SD = 'SD', SE = 'SE', SG = 'SG', SH = 'SH', SI = 'SI', SJ = 'SJ', SK = 'SK', SL = 'SL', SM = 'SM', SN = 'SN', SO = 'SO', SR = 'SR', SS = 'SS', ST = 'ST', SV = 'SV', SX = 'SX', SY = 'SY', SZ = 'SZ', TC = 'TC', TD = 'TD', TF = 'TF', TG = 'TG', TH = 'TH', TJ = 'TJ', TK = 'TK', TL = 'TL', TM = 'TM', TN = 'TN', TO = 'TO', TR = 'TR', TT = 'TT', TV = 'TV', TW = 'TW', TZ = 'TZ', UA = 'UA', UG = 'UG', UM = 'UM', US = 'US', UY = 'UY', UZ = 'UZ', VA = 'VA', VC = 'VC', VE = 'VE', VG = 'VG', VI = 'VI', VN = 'VN', VU = 'VU', WF = 'WF', WS = 'WS', XI = 'XI', YE = 'YE', YT = 'YT', ZA = 'ZA', ZM = 'ZM', ZW = 'ZW' }


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
		 * Min length: 2
		 * Max length: 2
		 */
		country?: string | null;

		/**
		 * The county/state inside the country code to use this identifier for in case of consumerTaxMode.
		 * Min length: 2
		 * Max length: 2
		 */
		county?: string | null;

		/**
		 * The Storecove assigned id for the AdditionalTaxIdentifier.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		id?: string | null;

		/** The identifier. */
		identifier?: string | null;

		/**
		 * The scheme of the identifier.
		 * Min length: 2
		 * Max length: 64
		 */
		scheme?: string | null;

		/**
		 * The superscheme of the identifier.
		 * Min length: 2
		 * Max length: 64
		 */
		superscheme?: string | null;
	}
	export interface AdditionalTaxIdentifierFormProperties {

		/**
		 * The ISO3166 country code to use this identifier for in case of consumerTaxMode.
		 * Min length: 2
		 * Max length: 2
		 */
		country: FormControl<string | null | undefined>,

		/**
		 * The county/state inside the country code to use this identifier for in case of consumerTaxMode.
		 * Min length: 2
		 * Max length: 2
		 */
		county: FormControl<string | null | undefined>,

		/**
		 * The Storecove assigned id for the AdditionalTaxIdentifier.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		id: FormControl<string | null | undefined>,

		/** The identifier. */
		identifier: FormControl<string | null | undefined>,

		/**
		 * The scheme of the identifier.
		 * Min length: 2
		 * Max length: 64
		 */
		scheme: FormControl<string | null | undefined>,

		/**
		 * The superscheme of the identifier.
		 * Min length: 2
		 * Max length: 64
		 */
		superscheme: FormControl<string | null | undefined>,
	}
	export function CreateAdditionalTaxIdentifierFormGroup() {
		return new FormGroup<AdditionalTaxIdentifierFormProperties>({
			country: new FormControl<string | null | undefined>(undefined, [Validators.minLength(2), Validators.maxLength(2)]),
			county: new FormControl<string | null | undefined>(undefined, [Validators.minLength(2), Validators.maxLength(2)]),
			id: new FormControl<string | null | undefined>(undefined),
			identifier: new FormControl<string | null | undefined>(undefined),
			scheme: new FormControl<string | null | undefined>(undefined, [Validators.minLength(2), Validators.maxLength(64)]),
			superscheme: new FormControl<string | null | undefined>(undefined, [Validators.minLength(2), Validators.maxLength(64)]),
		});

	}

	export interface AdditionalTaxIdentifierCreate {

		/**
		 * The ISO3166 country code to use this identifier for in case of consumerTaxMode.
		 * Required
		 * Min length: 2
		 * Max length: 2
		 */
		country: string;

		/**
		 * The county/state inside the country code to use this identifier for in case of consumerTaxMode. Leave empty to create an additional tax identifier for the entire country. For India, use the two last characters of ISO 3166-2:IN (https://en.wikipedia.org/wiki/States_and_union_territories_of_India).
		 * Min length: 2
		 * Max length: 2
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
		 * Min length: 2
		 * Max length: 64
		 */
		scheme: string;

		/**
		 * The superscheme of the identifier. Should always be "iso6523-actorid-upis".
		 * Required
		 * Min length: 2
		 * Max length: 64
		 */
		superscheme: string;

		/**
		 * The password to use to authenticate to a system through which to send the document, or to obtain tax authority approval to send it. This field is currently relevant only for India and mandatory when creating an IN tax identifier.
		 * Min length: 2
		 * Max length: 64
		 */
		third_party_password?: string | null;

		/**
		 * The username to use to authenticate to a system through which to send the document, or to obtain tax authority approval to send it. This field is currently relevant only for India and mandatory when creating an IN tax identifier.
		 * Min length: 2
		 * Max length: 64
		 */
		third_party_username?: string | null;
	}
	export interface AdditionalTaxIdentifierCreateFormProperties {

		/**
		 * The ISO3166 country code to use this identifier for in case of consumerTaxMode.
		 * Required
		 * Min length: 2
		 * Max length: 2
		 */
		country: FormControl<string | null | undefined>,

		/**
		 * The county/state inside the country code to use this identifier for in case of consumerTaxMode. Leave empty to create an additional tax identifier for the entire country. For India, use the two last characters of ISO 3166-2:IN (https://en.wikipedia.org/wiki/States_and_union_territories_of_India).
		 * Min length: 2
		 * Max length: 2
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
		 * Min length: 2
		 * Max length: 64
		 */
		scheme: FormControl<string | null | undefined>,

		/**
		 * The superscheme of the identifier. Should always be "iso6523-actorid-upis".
		 * Required
		 * Min length: 2
		 * Max length: 64
		 */
		superscheme: FormControl<string | null | undefined>,

		/**
		 * The password to use to authenticate to a system through which to send the document, or to obtain tax authority approval to send it. This field is currently relevant only for India and mandatory when creating an IN tax identifier.
		 * Min length: 2
		 * Max length: 64
		 */
		third_party_password: FormControl<string | null | undefined>,

		/**
		 * The username to use to authenticate to a system through which to send the document, or to obtain tax authority approval to send it. This field is currently relevant only for India and mandatory when creating an IN tax identifier.
		 * Min length: 2
		 * Max length: 64
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
		 * Min length: 2
		 * Max length: 64
		 */
		third_party_password?: string | null;

		/**
		 * The username to use to authenticate to a system through which to send the document, or to obtain tax authority approval to send it. This field is currently relevant only for India and mandatory when creating an IN tax identifier.
		 * Min length: 2
		 * Max length: 64
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
		 * Min length: 2
		 * Max length: 64
		 */
		third_party_password: FormControl<string | null | undefined>,

		/**
		 * The username to use to authenticate to a system through which to send the document, or to obtain tax authority approval to send it. This field is currently relevant only for India and mandatory when creating an IN tax identifier.
		 * Min length: 2
		 * Max length: 64
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
		 * Min length: 5
		 * Max length: 128
		 */
		email?: string | null;

		/**
		 * The Storecove assigned id for the Administration.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		id?: string | null;

		/**
		 * The LegalEntity the Administration belongs to.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		legal_entity_id?: string | null;

		/** The version of the package. */
		package_version?: AdministrationPackage_version | null;

		/** How to package the purchase invoice. */
		packaging?: AdministrationPackaging | null;

		/**
		 * The id of the SenderEmailIdentity. If not provided, the Storecove default sender will be used
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		sender_email_identity_id?: string | null;
	}
	export interface AdministrationFormProperties {

		/**
		 * The email address to send the received document to
		 * Min length: 5
		 * Max length: 128
		 */
		email: FormControl<string | null | undefined>,

		/**
		 * The Storecove assigned id for the Administration.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * The LegalEntity the Administration belongs to.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		legal_entity_id: FormControl<string | null | undefined>,

		/** The version of the package. */
		package_version: FormControl<AdministrationPackage_version | null | undefined>,

		/** How to package the purchase invoice. */
		packaging: FormControl<AdministrationPackaging | null | undefined>,

		/**
		 * The id of the SenderEmailIdentity. If not provided, the Storecove default sender will be used
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		sender_email_identity_id: FormControl<string | null | undefined>,
	}
	export function CreateAdministrationFormGroup() {
		return new FormGroup<AdministrationFormProperties>({
			email: new FormControl<string | null | undefined>(undefined, [Validators.minLength(5), Validators.maxLength(128)]),
			id: new FormControl<string | null | undefined>(undefined),
			legal_entity_id: new FormControl<string | null | undefined>(undefined),
			package_version: new FormControl<AdministrationPackage_version | null | undefined>(undefined),
			packaging: new FormControl<AdministrationPackaging | null | undefined>(undefined),
			sender_email_identity_id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AdministrationPackage_version { peppol_bis_v3 = 'peppol_bis_v3', aunz = 'aunz', sg = 'sg' }

	export enum AdministrationPackaging { ubl = 'ubl' }

	export interface AdministrationCreate {

		/**
		 * The email address to send the received document to
		 * Min length: 5
		 * Max length: 128
		 */
		email?: string | null;

		/**
		 * The LegalEntity the Administration belongs to.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		legal_entity_id?: string | null;

		/** The version of the package. */
		package_version?: AdministrationPackage_version | null;

		/** How to package the purchase invoice. */
		packaging?: AdministrationPackaging | null;

		/**
		 * The id of the SenderEmailIdentity. If not provided, the Storecove default sender will be used
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		sender_email_identity_id?: string | null;
	}
	export interface AdministrationCreateFormProperties {

		/**
		 * The email address to send the received document to
		 * Min length: 5
		 * Max length: 128
		 */
		email: FormControl<string | null | undefined>,

		/**
		 * The LegalEntity the Administration belongs to.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		legal_entity_id: FormControl<string | null | undefined>,

		/** The version of the package. */
		package_version: FormControl<AdministrationPackage_version | null | undefined>,

		/** How to package the purchase invoice. */
		packaging: FormControl<AdministrationPackaging | null | undefined>,

		/**
		 * The id of the SenderEmailIdentity. If not provided, the Storecove default sender will be used
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		sender_email_identity_id: FormControl<string | null | undefined>,
	}
	export function CreateAdministrationCreateFormGroup() {
		return new FormGroup<AdministrationCreateFormProperties>({
			email: new FormControl<string | null | undefined>(undefined, [Validators.minLength(5), Validators.maxLength(128)]),
			legal_entity_id: new FormControl<string | null | undefined>(undefined),
			package_version: new FormControl<AdministrationPackage_version | null | undefined>(undefined),
			packaging: new FormControl<AdministrationPackaging | null | undefined>(undefined),
			sender_email_identity_id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AdministrationUpdate {

		/**
		 * The email address to send the received document to
		 * Min length: 5
		 * Max length: 128
		 */
		email?: string | null;

		/** The version of the package. */
		package_version?: AdministrationPackage_version | null;

		/** How to package the purchase invoice. */
		packaging?: AdministrationPackaging | null;

		/**
		 * The id of the SenderEmailIdentity. If not provided, the Storecove default sender will be used
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		sender_email_identity_id?: string | null;
	}
	export interface AdministrationUpdateFormProperties {

		/**
		 * The email address to send the received document to
		 * Min length: 5
		 * Max length: 128
		 */
		email: FormControl<string | null | undefined>,

		/** The version of the package. */
		package_version: FormControl<AdministrationPackage_version | null | undefined>,

		/** How to package the purchase invoice. */
		packaging: FormControl<AdministrationPackaging | null | undefined>,

		/**
		 * The id of the SenderEmailIdentity. If not provided, the Storecove default sender will be used
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		sender_email_identity_id: FormControl<string | null | undefined>,
	}
	export function CreateAdministrationUpdateFormGroup() {
		return new FormGroup<AdministrationUpdateFormProperties>({
			email: new FormControl<string | null | undefined>(undefined, [Validators.minLength(5), Validators.maxLength(128)]),
			package_version: new FormControl<AdministrationPackage_version | null | undefined>(undefined),
			packaging: new FormControl<AdministrationPackaging | null | undefined>(undefined),
			sender_email_identity_id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AllowanceCharge {

		/**
		 * The amount for the allowance or charge, excluding tax.
		 * Type: double
		 */
		amountExcludingTax?: number | null;

		/**
		 * DEPRECATED. Use amountExcludingTax. The amount for the allowance or charge, excluding VAT.
		 * Type: double
		 */
		amountExcludingVat?: number | null;

		/**
		 * The amount for the allowance or charge, including tax.
		 * Type: double
		 */
		amountIncludingTax?: number | null;

		/**
		 * The base amount for the allowance or charge, excluding tax.
		 * Type: double
		 */
		baseAmountExcludingTax?: number | null;

		/**
		 * The base amount for the allowance or charge, including tax.
		 * Type: double
		 */
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

		/**
		 * The amount for the allowance or charge, excluding tax.
		 * Type: double
		 */
		amountExcludingTax: FormControl<number | null | undefined>,

		/**
		 * DEPRECATED. Use amountExcludingTax. The amount for the allowance or charge, excluding VAT.
		 * Type: double
		 */
		amountExcludingVat: FormControl<number | null | undefined>,

		/**
		 * The amount for the allowance or charge, including tax.
		 * Type: double
		 */
		amountIncludingTax: FormControl<number | null | undefined>,

		/**
		 * The base amount for the allowance or charge, excluding tax.
		 * Type: double
		 */
		baseAmountExcludingTax: FormControl<number | null | undefined>,

		/**
		 * The base amount for the allowance or charge, including tax.
		 * Type: double
		 */
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

		/**
		 * The amount of tax. Mandatory if taxSystem == 'tax_line_amounts'. However, it is best to use taxSystem tax_line_percentages and provide only the percentage, not the actual amount. The amount is then provided at the invoice level, in the taxSubtotals element.
		 * Type: double
		 */
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

		/**
		 * The percentage Tax. This should be a valid Tax percentage in the country at the time of the issueDate of this invoice. Mandatory if taxSystem == 'tax_line_percentages'
		 * Type: double
		 */
		percentage?: number | null;
	}
	export interface TaxFormProperties {

		/**
		 * The amount of tax. Mandatory if taxSystem == 'tax_line_amounts'. However, it is best to use taxSystem tax_line_percentages and provide only the percentage, not the actual amount. The amount is then provided at the invoice level, in the taxSubtotals element.
		 * Type: double
		 */
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

		/**
		 * The percentage Tax. This should be a valid Tax percentage in the country at the time of the issueDate of this invoice. Mandatory if taxSystem == 'tax_line_percentages'
		 * Type: double
		 */
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

	export enum TaxCategory { standard = 'standard', zero_rated = 'zero_rated', reverse_charge = 'reverse_charge', intra_community = 'intra_community', exempt = 'exempt', export = 'export', outside_scope = 'outside_scope', regulation33_exempt = 'regulation33_exempt', nonregulation33_exempt = 'nonregulation33_exempt', deemed_supply = 'deemed_supply', srca_s = 'srca_s', srca_c = 'srca_c', not_registered = 'not_registered', igst = 'igst', cgst = 'cgst', sgst = 'sgst', cess = 'cess', state_cess = 'state_cess', srovr = 'srovr', srovr_rs = 'srovr_rs', srovr_lvg = 'srovr_lvg', srlvg = 'srlvg' }


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

	export enum AttachmentMimeType { 'application/pdf' = 'application/pdf' }

	export interface CorpPass {

		/**
		 * The URL the CorpPass system will redirect to in case of a failure to perform identity verfication.
		 * Min length: 11
		 * Max length: 255
		 */
		client_redirect_fail_url?: string | null;

		/**
		 * The URL the CorpPass system will redirect to in case of successful identity verfication.
		 * Min length: 11
		 * Max length: 255
		 */
		client_redirect_success_url?: string | null;

		/**
		 * The CorpPass redirect URL.
		 * Min length: 11
		 * Max length: 255
		 */
		corppass_url?: string | null;

		/** Whether or not the CorpPass flow is enabled. */
		enabled?: boolean | null;

		/** The CorpPass flow type. */
		flow_type?: CorpPassFlow_type | null;

		/**
		 * The email of the person who is going to perform the CorpPass process.
		 * Min length: 2
		 * Max length: 128
		 */
		signer_email?: string | null;

		/**
		 * The name of the person who is going to perform the CorpPass process.
		 * Min length: 2
		 * Max length: 64
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
		 * Min length: 11
		 * Max length: 255
		 */
		client_redirect_fail_url: FormControl<string | null | undefined>,

		/**
		 * The URL the CorpPass system will redirect to in case of successful identity verfication.
		 * Min length: 11
		 * Max length: 255
		 */
		client_redirect_success_url: FormControl<string | null | undefined>,

		/**
		 * The CorpPass redirect URL.
		 * Min length: 11
		 * Max length: 255
		 */
		corppass_url: FormControl<string | null | undefined>,

		/** Whether or not the CorpPass flow is enabled. */
		enabled: FormControl<boolean | null | undefined>,

		/** The CorpPass flow type. */
		flow_type: FormControl<CorpPassFlow_type | null | undefined>,

		/**
		 * The email of the person who is going to perform the CorpPass process.
		 * Min length: 2
		 * Max length: 128
		 */
		signer_email: FormControl<string | null | undefined>,

		/**
		 * The name of the person who is going to perform the CorpPass process.
		 * Min length: 2
		 * Max length: 64
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

	export enum CorpPassFlow_type { corppass_flow_redirect = 'corppass_flow_redirect', corppass_flow_email = 'corppass_flow_email' }

	export enum CorpPassStatus { 'corppass_no_status,' = 'corppass_no_status,', 'corppass_initiated,' = 'corppass_initiated,', 'corppass_cancelled,' = 'corppass_cancelled,', 'corppass_failed,' = 'corppass_failed,', corppass_succeeded = 'corppass_succeeded' }

	export interface CorpPassCreate {

		/**
		 * The URL the CorpPass system will redirect to in case of a failure to perform identity verfication. Mandatory for flow_type="corppass_flow_redirect"
		 * Min length: 11
		 * Max length: 255
		 */
		client_redirect_fail_url?: string | null;

		/**
		 * The URL the CorpPass system will redirect to in case of successful identity verfication. Mandatory for flow_type="corppass_flow_redirect"
		 * Min length: 11
		 * Max length: 255
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
		 * Min length: 2
		 * Max length: 128
		 */
		signer_email?: string | null;

		/**
		 * The name of the person who is going to perform the CorpPass process. Mandatory for flow_type="corppass_flow_email"
		 * Min length: 2
		 * Max length: 64
		 */
		signer_name?: string | null;

		/** Whether or not to simulate CorpPass. Instead of redirecting to a CorpPass URL, you will receive a redirect to a Storecove URL which will show a page with two buttons: success and fail. This makes development without having test CorpPass credentials possible. Note this only works in sandbox, not in the production environment. */
		simulate_corppass?: boolean | null;
	}
	export interface CorpPassCreateFormProperties {

		/**
		 * The URL the CorpPass system will redirect to in case of a failure to perform identity verfication. Mandatory for flow_type="corppass_flow_redirect"
		 * Min length: 11
		 * Max length: 255
		 */
		client_redirect_fail_url: FormControl<string | null | undefined>,

		/**
		 * The URL the CorpPass system will redirect to in case of successful identity verfication. Mandatory for flow_type="corppass_flow_redirect"
		 * Min length: 11
		 * Max length: 255
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
		 * Min length: 2
		 * Max length: 128
		 */
		signer_email: FormControl<string | null | undefined>,

		/**
		 * The name of the person who is going to perform the CorpPass process. Mandatory for flow_type="corppass_flow_email"
		 * Min length: 2
		 * Max length: 64
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
	export enum Country { AD = 'AD', AE = 'AE', AF = 'AF', AG = 'AG', AI = 'AI', AL = 'AL', AM = 'AM', AO = 'AO', AQ = 'AQ', AR = 'AR', AS = 'AS', AT = 'AT', AU = 'AU', AW = 'AW', AX = 'AX', AZ = 'AZ', BA = 'BA', BB = 'BB', BD = 'BD', BE = 'BE', BF = 'BF', BG = 'BG', BH = 'BH', BI = 'BI', BJ = 'BJ', BL = 'BL', BM = 'BM', BN = 'BN', BO = 'BO', BQ = 'BQ', BR = 'BR', BS = 'BS', BT = 'BT', BV = 'BV', BW = 'BW', BY = 'BY', BZ = 'BZ', CA = 'CA', CC = 'CC', CD = 'CD', CF = 'CF', CG = 'CG', CH = 'CH', CI = 'CI', CK = 'CK', CL = 'CL', CM = 'CM', CN = 'CN', CO = 'CO', CR = 'CR', CU = 'CU', CV = 'CV', CW = 'CW', CX = 'CX', CY = 'CY', CZ = 'CZ', DE = 'DE', DJ = 'DJ', DK = 'DK', DM = 'DM', DO = 'DO', DZ = 'DZ', EC = 'EC', EE = 'EE', EG = 'EG', EH = 'EH', ER = 'ER', ES = 'ES', ET = 'ET', FI = 'FI', FJ = 'FJ', FK = 'FK', FM = 'FM', FO = 'FO', FR = 'FR', GA = 'GA', GB = 'GB', GD = 'GD', GE = 'GE', GF = 'GF', GG = 'GG', GH = 'GH', GI = 'GI', GL = 'GL', GM = 'GM', GN = 'GN', GP = 'GP', GQ = 'GQ', GR = 'GR', GS = 'GS', GT = 'GT', GU = 'GU', GW = 'GW', GY = 'GY', HK = 'HK', HM = 'HM', HN = 'HN', HR = 'HR', HT = 'HT', HU = 'HU', ID = 'ID', IE = 'IE', IL = 'IL', IM = 'IM', IN = 'IN', IO = 'IO', IQ = 'IQ', IR = 'IR', IS = 'IS', IT = 'IT', JE = 'JE', JM = 'JM', JO = 'JO', JP = 'JP', KE = 'KE', KG = 'KG', KH = 'KH', KI = 'KI', KM = 'KM', KN = 'KN', KP = 'KP', KR = 'KR', KW = 'KW', KY = 'KY', KZ = 'KZ', LA = 'LA', LB = 'LB', LC = 'LC', LI = 'LI', LK = 'LK', LR = 'LR', LS = 'LS', LT = 'LT', LU = 'LU', LV = 'LV', LY = 'LY', MA = 'MA', MC = 'MC', MD = 'MD', ME = 'ME', MF = 'MF', MG = 'MG', MH = 'MH', MK = 'MK', ML = 'ML', MM = 'MM', MN = 'MN', MO = 'MO', MP = 'MP', MQ = 'MQ', MR = 'MR', MS = 'MS', MT = 'MT', MU = 'MU', MV = 'MV', MW = 'MW', MX = 'MX', MY = 'MY', MZ = 'MZ', NA = 'NA', NC = 'NC', NE = 'NE', NF = 'NF', NG = 'NG', NI = 'NI', NL = 'NL', NO = 'NO', NP = 'NP', NR = 'NR', NU = 'NU', NZ = 'NZ', OM = 'OM', PA = 'PA', PE = 'PE', PF = 'PF', PG = 'PG', PH = 'PH', PK = 'PK', PL = 'PL', PM = 'PM', PN = 'PN', PR = 'PR', PS = 'PS', PT = 'PT', PW = 'PW', PY = 'PY', QA = 'QA', RE = 'RE', RO = 'RO', RS = 'RS', RU = 'RU', RW = 'RW', SA = 'SA', SB = 'SB', SC = 'SC', SD = 'SD', SE = 'SE', SG = 'SG', SH = 'SH', SI = 'SI', SJ = 'SJ', SK = 'SK', SL = 'SL', SM = 'SM', SN = 'SN', SO = 'SO', SR = 'SR', SS = 'SS', ST = 'ST', SV = 'SV', SX = 'SX', SY = 'SY', SZ = 'SZ', TC = 'TC', TD = 'TD', TF = 'TF', TG = 'TG', TH = 'TH', TJ = 'TJ', TK = 'TK', TL = 'TL', TM = 'TM', TN = 'TN', TO = 'TO', TR = 'TR', TT = 'TT', TV = 'TV', TW = 'TW', TZ = 'TZ', UA = 'UA', UG = 'UG', UM = 'UM', US = 'US', UY = 'UY', UZ = 'UZ', VA = 'VA', VC = 'VC', VE = 'VE', VG = 'VG', VI = 'VI', VN = 'VN', VU = 'VU', WF = 'WF', WS = 'WS', XI = 'XI', YE = 'YE', YT = 'YT', ZA = 'ZA', ZM = 'ZM', ZW = 'ZW' }

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

	export enum CountrySpecificationRegion { eu_eea = 'eu_eea', sg = 'sg', aunz = 'aunz', in = 'in', world = 'world' }

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

	export enum CountrySpecificationIdentifierScheme_type { 'iso6523-actorid-upis' = 'iso6523-actorid-upis' }

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
	export enum CurrencyCode { AED = 'AED', AFN = 'AFN', ALL = 'ALL', AMD = 'AMD', ANG = 'ANG', AOA = 'AOA', ARS = 'ARS', AUD = 'AUD', AWG = 'AWG', AZN = 'AZN', BAM = 'BAM', BBD = 'BBD', BDT = 'BDT', BGN = 'BGN', BHD = 'BHD', BIF = 'BIF', BMD = 'BMD', BND = 'BND', BOB = 'BOB', BOV = 'BOV', BRL = 'BRL', BSD = 'BSD', BTN = 'BTN', BWP = 'BWP', BYN = 'BYN', BYR = 'BYR', BZD = 'BZD', CAD = 'CAD', CDF = 'CDF', CHE = 'CHE', CHF = 'CHF', CHW = 'CHW', CLF = 'CLF', CLP = 'CLP', CNY = 'CNY', COP = 'COP', COU = 'COU', CRC = 'CRC', CUC = 'CUC', CUP = 'CUP', CVE = 'CVE', CZK = 'CZK', DJF = 'DJF', DKK = 'DKK', DOP = 'DOP', DZD = 'DZD', EGP = 'EGP', ERN = 'ERN', ETB = 'ETB', EUR = 'EUR', FJD = 'FJD', FKP = 'FKP', GBP = 'GBP', GEL = 'GEL', GHS = 'GHS', GIP = 'GIP', GMD = 'GMD', GNF = 'GNF', GTQ = 'GTQ', GYD = 'GYD', HKD = 'HKD', HNL = 'HNL', HRK = 'HRK', HTG = 'HTG', HUF = 'HUF', IDR = 'IDR', ILS = 'ILS', INR = 'INR', IQD = 'IQD', IRR = 'IRR', ISK = 'ISK', JMD = 'JMD', JOD = 'JOD', JPY = 'JPY', KES = 'KES', KGS = 'KGS', KHR = 'KHR', KMF = 'KMF', KPW = 'KPW', KRW = 'KRW', KWD = 'KWD', KYD = 'KYD', KZT = 'KZT', LAK = 'LAK', LBP = 'LBP', LKR = 'LKR', LRD = 'LRD', LSL = 'LSL', LYD = 'LYD', MAD = 'MAD', MDL = 'MDL', MGA = 'MGA', MKD = 'MKD', MMK = 'MMK', MNT = 'MNT', MOP = 'MOP', MRO = 'MRO', MUR = 'MUR', MVR = 'MVR', MWK = 'MWK', MXN = 'MXN', MXV = 'MXV', MYR = 'MYR', MZN = 'MZN', NAD = 'NAD', NGN = 'NGN', NIO = 'NIO', NOK = 'NOK', NPR = 'NPR', NZD = 'NZD', OMR = 'OMR', PAB = 'PAB', PEN = 'PEN', PGK = 'PGK', PHP = 'PHP', PKR = 'PKR', PLN = 'PLN', PYG = 'PYG', QAR = 'QAR', RON = 'RON', RSD = 'RSD', RUB = 'RUB', RWF = 'RWF', SAR = 'SAR', SBD = 'SBD', SCR = 'SCR', SDG = 'SDG', SEK = 'SEK', SGD = 'SGD', SHP = 'SHP', SLE = 'SLE', SLL = 'SLL', SOS = 'SOS', SRD = 'SRD', SSP = 'SSP', STD = 'STD', SYP = 'SYP', SZL = 'SZL', THB = 'THB', TJS = 'TJS', TMT = 'TMT', TND = 'TND', TOP = 'TOP', TRY = 'TRY', TTD = 'TTD', TWD = 'TWD', TZS = 'TZS', UAH = 'UAH', UGX = 'UGX', USD = 'USD', USN = 'USN', UYI = 'UYI', UYU = 'UYU', UZS = 'UZS', VEF = 'VEF', VND = 'VND', VUV = 'VUV', WST = 'WST', XAF = 'XAF', XAG = 'XAG', XAU = 'XAU', XBA = 'XBA', XBB = 'XBB', XBC = 'XBC', XBD = 'XBD', XCD = 'XCD', XDR = 'XDR', XFU = 'XFU', XOF = 'XOF', XPD = 'XPD', XPF = 'XPF', XPT = 'XPT', XSU = 'XSU', XTS = 'XTS', XUA = 'XUA', XXX = 'XXX', YER = 'YER', ZAR = 'ZAR', ZMW = 'ZMW' }

	export interface Delivery {

		/** The actual date of the delivery. Used only for Invoice */
		actualDate?: string | null;
		deliveryLocation?: DeliveryDeliveryLocation;

		/** The party receiving the shipment. */
		deliveryParty?: DeliveryParty;

		/** Use deliveryParty. The name of the party that took delivery. Used only for Invoice */
		deliveryPartyName?: string | null;

		/**
		 * The quantity of the delivery. Used only for Invoice
		 * Type: double
		 */
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

		/**
		 * The quantity of the delivery. Used only for Invoice
		 * Type: double
		 */
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

	export enum DeliveryTermsIncoterms { EXW = 'EXW', FCA = 'FCA', CPT = 'CPT', CIP = 'CIP', DAP = 'DAP', DPU = 'DPU', DDP = 'DDP', FAS = 'FAS', FOB = 'FOB', CFR = 'CFR', CIF = 'CIF' }


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

	export enum DiscoveredParticipantCode { OK = 'OK', NOK = 'NOK' }


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

	export enum InvoiceResponseClarificationClarificationCode { NON = 'NON', REF = 'REF', LEG = 'LEG', REC = 'REC', QUA = 'QUA', DEL = 'DEL', PRI = 'PRI', QTY = 'QTY', ITM = 'ITM', PAY = 'PAY', UNR = 'UNR', FIN = 'FIN', PPD = 'PPD', OTH = 'OTH', NOA = 'NOA', PIN = 'PIN', NIN = 'NIN', CNF = 'CNF', CNP = 'CNP', CNA = 'CNA' }

	export enum InvoiceResponseClarificationClarificationCodeType { OPStatusReason = 'OPStatusReason', OPStatusAction = 'OPStatusAction' }


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

	export enum DocumentInvoiceResponseResponseCode { AB = 'AB', IP = 'IP', UQ = 'UQ', CA = 'CA', RE = 'RE', AP = 'AP', PD = 'PD' }


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
		 * Type: double
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
		 * Type: double
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
		 * Type: double
		 */
		amountExcludingTax: number;

		/**
		 * The number of items the price is for.
		 * Type: double
		 */
		baseQuantity?: number | null;
		delivery?: LineDelivery;

		/**
		 * The description for this line.
		 * Min length: 1
		 * Max length: 255
		 */
		description?: string | null;

		/**
		 * The price per item (may be fractional)
		 * Type: double
		 */
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
		 * Min length: 1
		 * Max length: 255
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
		 * Type: double
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
		 * Type: double
		 */
		amountExcludingTax: FormControl<number | null | undefined>,

		/**
		 * The number of items the price is for.
		 * Type: double
		 */
		baseQuantity: FormControl<number | null | undefined>,

		/**
		 * The description for this line.
		 * Min length: 1
		 * Max length: 255
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * The price per item (may be fractional)
		 * Type: double
		 */
		itemPrice: FormControl<number | null | undefined>,

		/**
		 * The id for this invoice line.
		 * Required
		 * Min length: 1
		 */
		lineId: FormControl<string | null | undefined>,

		/**
		 * A short name for this line.
		 * Min length: 1
		 * Max length: 255
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
		 * Type: double
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
		 * Type: double
		 */
		amountExcludingTax: number;

		/**
		 * The base amount for the allowance or charge, excluding tax.
		 * Type: double
		 */
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
		 * Type: double
		 */
		amountExcludingTax: FormControl<number | null | undefined>,

		/**
		 * The base amount for the allowance or charge, excluding tax.
		 * Type: double
		 */
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

	export enum OrderLineQuantityUnitCode { _10 = '10', _11 = '11', _13 = '13', _14 = '14', _15 = '15', _20 = '20', _21 = '21', _22 = '22', _23 = '23', _24 = '24', _25 = '25', _27 = '27', _28 = '28', _33 = '33', _34 = '34', _35 = '35', _37 = '37', _38 = '38', _40 = '40', _41 = '41', _56 = '56', _57 = '57', _58 = '58', _59 = '59', _60 = '60', _61 = '61', _74 = '74', _77 = '77', _80 = '80', _81 = '81', _85 = '85', _87 = '87', _89 = '89', _91 = '91', '1I' = '1I', '2A' = '2A', '2B' = '2B', '2C' = '2C', '2G' = '2G', '2H' = '2H', '2I' = '2I', '2J' = '2J', '2K' = '2K', '2L' = '2L', '2M' = '2M', '2N' = '2N', '2P' = '2P', '2Q' = '2Q', '2R' = '2R', '2U' = '2U', '2X' = '2X', '2Y' = '2Y', '2Z' = '2Z', '3B' = '3B', '3C' = '3C', '4C' = '4C', '4G' = '4G', '4H' = '4H', '4K' = '4K', '4L' = '4L', '4M' = '4M', '4N' = '4N', '4O' = '4O', '4P' = '4P', '4Q' = '4Q', '4R' = '4R', '4T' = '4T', '4U' = '4U', '4W' = '4W', '4X' = '4X', '5A' = '5A', '5B' = '5B', '5E' = '5E', '5J' = '5J', A10 = 'A10', A11 = 'A11', A12 = 'A12', A13 = 'A13', A14 = 'A14', A15 = 'A15', A16 = 'A16', A17 = 'A17', A18 = 'A18', A19 = 'A19', A2 = 'A2', A20 = 'A20', A21 = 'A21', A22 = 'A22', A23 = 'A23', A24 = 'A24', A26 = 'A26', A27 = 'A27', A28 = 'A28', A29 = 'A29', A3 = 'A3', A30 = 'A30', A31 = 'A31', A32 = 'A32', A33 = 'A33', A34 = 'A34', A35 = 'A35', A36 = 'A36', A37 = 'A37', A38 = 'A38', A39 = 'A39', A4 = 'A4', A40 = 'A40', A41 = 'A41', A42 = 'A42', A43 = 'A43', A44 = 'A44', A45 = 'A45', A47 = 'A47', A48 = 'A48', A49 = 'A49', A5 = 'A5', A53 = 'A53', A54 = 'A54', A55 = 'A55', A56 = 'A56', A59 = 'A59', A6 = 'A6', A68 = 'A68', A69 = 'A69', A7 = 'A7', A70 = 'A70', A71 = 'A71', A73 = 'A73', A74 = 'A74', A75 = 'A75', A76 = 'A76', A8 = 'A8', A84 = 'A84', A85 = 'A85', A86 = 'A86', A87 = 'A87', A88 = 'A88', A89 = 'A89', A9 = 'A9', A90 = 'A90', A91 = 'A91', A93 = 'A93', A94 = 'A94', A95 = 'A95', A96 = 'A96', A97 = 'A97', A98 = 'A98', A99 = 'A99', AA = 'AA', AB = 'AB', ACR = 'ACR', ACT = 'ACT', AD = 'AD', AE = 'AE', AH = 'AH', AI = 'AI', AK = 'AK', AL = 'AL', AMH = 'AMH', AMP = 'AMP', ANN = 'ANN', APZ = 'APZ', AQ = 'AQ', AS = 'AS', ASM = 'ASM', ASU = 'ASU', ATM = 'ATM', AWG = 'AWG', AY = 'AY', AZ = 'AZ', B1 = 'B1', B10 = 'B10', B11 = 'B11', B12 = 'B12', B13 = 'B13', B14 = 'B14', B15 = 'B15', B16 = 'B16', B17 = 'B17', B18 = 'B18', B19 = 'B19', B20 = 'B20', B21 = 'B21', B22 = 'B22', B23 = 'B23', B24 = 'B24', B25 = 'B25', B26 = 'B26', B27 = 'B27', B28 = 'B28', B29 = 'B29', B3 = 'B3', B30 = 'B30', B31 = 'B31', B32 = 'B32', B33 = 'B33', B34 = 'B34', B35 = 'B35', B4 = 'B4', B41 = 'B41', B42 = 'B42', B43 = 'B43', B44 = 'B44', B45 = 'B45', B46 = 'B46', B47 = 'B47', B48 = 'B48', B49 = 'B49', B50 = 'B50', B52 = 'B52', B53 = 'B53', B54 = 'B54', B55 = 'B55', B56 = 'B56', B57 = 'B57', B58 = 'B58', B59 = 'B59', B60 = 'B60', B61 = 'B61', B62 = 'B62', B63 = 'B63', B64 = 'B64', B66 = 'B66', B67 = 'B67', B68 = 'B68', B69 = 'B69', B7 = 'B7', B70 = 'B70', B71 = 'B71', B72 = 'B72', B73 = 'B73', B74 = 'B74', B75 = 'B75', B76 = 'B76', B77 = 'B77', B78 = 'B78', B79 = 'B79', B8 = 'B8', B80 = 'B80', B81 = 'B81', B82 = 'B82', B83 = 'B83', B84 = 'B84', B85 = 'B85', B86 = 'B86', B87 = 'B87', B88 = 'B88', B89 = 'B89', B90 = 'B90', B91 = 'B91', B92 = 'B92', B93 = 'B93', B94 = 'B94', B95 = 'B95', B96 = 'B96', B97 = 'B97', B98 = 'B98', B99 = 'B99', BAR = 'BAR', BB = 'BB', BFT = 'BFT', BHP = 'BHP', BIL = 'BIL', BLD = 'BLD', BLL = 'BLL', BP = 'BP', BPM = 'BPM', BQL = 'BQL', BTU = 'BTU', BUA = 'BUA', BUI = 'BUI', C0 = 'C0', C10 = 'C10', C11 = 'C11', C12 = 'C12', C13 = 'C13', C14 = 'C14', C15 = 'C15', C16 = 'C16', C17 = 'C17', C18 = 'C18', C19 = 'C19', C20 = 'C20', C21 = 'C21', C22 = 'C22', C23 = 'C23', C24 = 'C24', C25 = 'C25', C26 = 'C26', C27 = 'C27', C28 = 'C28', C29 = 'C29', C3 = 'C3', C30 = 'C30', C31 = 'C31', C32 = 'C32', C33 = 'C33', C34 = 'C34', C35 = 'C35', C36 = 'C36', C37 = 'C37', C38 = 'C38', C39 = 'C39', C40 = 'C40', C41 = 'C41', C42 = 'C42', C43 = 'C43', C44 = 'C44', C45 = 'C45', C46 = 'C46', C47 = 'C47', C48 = 'C48', C49 = 'C49', C50 = 'C50', C51 = 'C51', C52 = 'C52', C53 = 'C53', C54 = 'C54', C55 = 'C55', C56 = 'C56', C57 = 'C57', C58 = 'C58', C59 = 'C59', C60 = 'C60', C61 = 'C61', C62 = 'C62', C63 = 'C63', C64 = 'C64', C65 = 'C65', C66 = 'C66', C67 = 'C67', C68 = 'C68', C69 = 'C69', C7 = 'C7', C70 = 'C70', C71 = 'C71', C72 = 'C72', C73 = 'C73', C74 = 'C74', C75 = 'C75', C76 = 'C76', C78 = 'C78', C79 = 'C79', C8 = 'C8', C80 = 'C80', C81 = 'C81', C82 = 'C82', C83 = 'C83', C84 = 'C84', C85 = 'C85', C86 = 'C86', C87 = 'C87', C88 = 'C88', C89 = 'C89', C9 = 'C9', C90 = 'C90', C91 = 'C91', C92 = 'C92', C93 = 'C93', C94 = 'C94', C95 = 'C95', C96 = 'C96', C97 = 'C97', C99 = 'C99', CCT = 'CCT', CDL = 'CDL', CEL = 'CEL', CEN = 'CEN', CG = 'CG', CGM = 'CGM', CKG = 'CKG', CLF = 'CLF', CLT = 'CLT', CMK = 'CMK', CMQ = 'CMQ', CMT = 'CMT', CNP = 'CNP', CNT = 'CNT', COU = 'COU', CTG = 'CTG', CTM = 'CTM', CTN = 'CTN', CUR = 'CUR', CWA = 'CWA', CWI = 'CWI', D03 = 'D03', D04 = 'D04', D1 = 'D1', D10 = 'D10', D11 = 'D11', D12 = 'D12', D13 = 'D13', D15 = 'D15', D16 = 'D16', D17 = 'D17', D18 = 'D18', D19 = 'D19', D2 = 'D2', D20 = 'D20', D21 = 'D21', D22 = 'D22', D23 = 'D23', D24 = 'D24', D25 = 'D25', D26 = 'D26', D27 = 'D27', D29 = 'D29', D30 = 'D30', D31 = 'D31', D32 = 'D32', D33 = 'D33', D34 = 'D34', D36 = 'D36', D41 = 'D41', D42 = 'D42', D43 = 'D43', D44 = 'D44', D45 = 'D45', D46 = 'D46', D47 = 'D47', D48 = 'D48', D49 = 'D49', D5 = 'D5', D50 = 'D50', D51 = 'D51', D52 = 'D52', D53 = 'D53', D54 = 'D54', D55 = 'D55', D56 = 'D56', D57 = 'D57', D58 = 'D58', D59 = 'D59', D6 = 'D6', D60 = 'D60', D61 = 'D61', D62 = 'D62', D63 = 'D63', D65 = 'D65', D68 = 'D68', D69 = 'D69', D73 = 'D73', D74 = 'D74', D77 = 'D77', D78 = 'D78', D80 = 'D80', D81 = 'D81', D82 = 'D82', D83 = 'D83', D85 = 'D85', D86 = 'D86', D87 = 'D87', D88 = 'D88', D89 = 'D89', D91 = 'D91', D93 = 'D93', D94 = 'D94', D95 = 'D95', DAA = 'DAA', DAD = 'DAD', DAY = 'DAY', DB = 'DB', DD = 'DD', DEC = 'DEC', DG = 'DG', DJ = 'DJ', DLT = 'DLT', DMA = 'DMA', DMK = 'DMK', DMO = 'DMO', DMQ = 'DMQ', DMT = 'DMT', DN = 'DN', DPC = 'DPC', DPR = 'DPR', DPT = 'DPT', DRA = 'DRA', DRI = 'DRI', DRL = 'DRL', DT = 'DT', DTN = 'DTN', DWT = 'DWT', DZN = 'DZN', DZP = 'DZP', E01 = 'E01', E07 = 'E07', E08 = 'E08', E09 = 'E09', E10 = 'E10', E12 = 'E12', E14 = 'E14', E15 = 'E15', E16 = 'E16', E17 = 'E17', E18 = 'E18', E19 = 'E19', E20 = 'E20', E21 = 'E21', E22 = 'E22', E23 = 'E23', E25 = 'E25', E27 = 'E27', E28 = 'E28', E30 = 'E30', E31 = 'E31', E32 = 'E32', E33 = 'E33', E34 = 'E34', E35 = 'E35', E36 = 'E36', E37 = 'E37', E38 = 'E38', E39 = 'E39', E4 = 'E4', E40 = 'E40', E41 = 'E41', E42 = 'E42', E43 = 'E43', E44 = 'E44', E45 = 'E45', E46 = 'E46', E47 = 'E47', E48 = 'E48', E49 = 'E49', E50 = 'E50', E51 = 'E51', E52 = 'E52', E53 = 'E53', E54 = 'E54', E55 = 'E55', E56 = 'E56', E57 = 'E57', E58 = 'E58', E59 = 'E59', E60 = 'E60', E61 = 'E61', E62 = 'E62', E63 = 'E63', E64 = 'E64', E65 = 'E65', E66 = 'E66', E67 = 'E67', E68 = 'E68', E69 = 'E69', E70 = 'E70', E71 = 'E71', E72 = 'E72', E73 = 'E73', E74 = 'E74', E75 = 'E75', E76 = 'E76', E77 = 'E77', E78 = 'E78', E79 = 'E79', E80 = 'E80', E81 = 'E81', E82 = 'E82', E83 = 'E83', E84 = 'E84', E85 = 'E85', E86 = 'E86', E87 = 'E87', E88 = 'E88', E89 = 'E89', E90 = 'E90', E91 = 'E91', E92 = 'E92', E93 = 'E93', E94 = 'E94', E95 = 'E95', E96 = 'E96', E97 = 'E97', E98 = 'E98', E99 = 'E99', EA = 'EA', EB = 'EB', EQ = 'EQ', F01 = 'F01', F02 = 'F02', F03 = 'F03', F04 = 'F04', F05 = 'F05', F06 = 'F06', F07 = 'F07', F08 = 'F08', F10 = 'F10', F11 = 'F11', F12 = 'F12', F13 = 'F13', F14 = 'F14', F15 = 'F15', F16 = 'F16', F17 = 'F17', F18 = 'F18', F19 = 'F19', F20 = 'F20', F21 = 'F21', F22 = 'F22', F23 = 'F23', F24 = 'F24', F25 = 'F25', F26 = 'F26', F27 = 'F27', F28 = 'F28', F29 = 'F29', F30 = 'F30', F31 = 'F31', F32 = 'F32', F33 = 'F33', F34 = 'F34', F35 = 'F35', F36 = 'F36', F37 = 'F37', F38 = 'F38', F39 = 'F39', F40 = 'F40', F41 = 'F41', F42 = 'F42', F43 = 'F43', F44 = 'F44', F45 = 'F45', F46 = 'F46', F47 = 'F47', F48 = 'F48', F49 = 'F49', F50 = 'F50', F51 = 'F51', F52 = 'F52', F53 = 'F53', F54 = 'F54', F55 = 'F55', F56 = 'F56', F57 = 'F57', F58 = 'F58', F59 = 'F59', F60 = 'F60', F61 = 'F61', F62 = 'F62', F63 = 'F63', F64 = 'F64', F65 = 'F65', F66 = 'F66', F67 = 'F67', F68 = 'F68', F69 = 'F69', F70 = 'F70', F71 = 'F71', F72 = 'F72', F73 = 'F73', F74 = 'F74', F75 = 'F75', F76 = 'F76', F77 = 'F77', F78 = 'F78', F79 = 'F79', F80 = 'F80', F81 = 'F81', F82 = 'F82', F83 = 'F83', F84 = 'F84', F85 = 'F85', F86 = 'F86', F87 = 'F87', F88 = 'F88', F89 = 'F89', F90 = 'F90', F91 = 'F91', F92 = 'F92', F93 = 'F93', F94 = 'F94', F95 = 'F95', F96 = 'F96', F97 = 'F97', F98 = 'F98', F99 = 'F99', FAH = 'FAH', FAR = 'FAR', FBM = 'FBM', FC = 'FC', FF = 'FF', FH = 'FH', FIT = 'FIT', FL = 'FL', FOT = 'FOT', FP = 'FP', FR = 'FR', FS = 'FS', FTK = 'FTK', FTQ = 'FTQ', G01 = 'G01', G04 = 'G04', G05 = 'G05', G06 = 'G06', G08 = 'G08', G09 = 'G09', G10 = 'G10', G11 = 'G11', G12 = 'G12', G13 = 'G13', G14 = 'G14', G15 = 'G15', G16 = 'G16', G17 = 'G17', G18 = 'G18', G19 = 'G19', G2 = 'G2', G20 = 'G20', G21 = 'G21', G23 = 'G23', G24 = 'G24', G25 = 'G25', G26 = 'G26', G27 = 'G27', G28 = 'G28', G29 = 'G29', G3 = 'G3', G30 = 'G30', G31 = 'G31', G32 = 'G32', G33 = 'G33', G34 = 'G34', G35 = 'G35', G36 = 'G36', G37 = 'G37', G38 = 'G38', G39 = 'G39', G40 = 'G40', G41 = 'G41', G42 = 'G42', G43 = 'G43', G44 = 'G44', G45 = 'G45', G46 = 'G46', G47 = 'G47', G48 = 'G48', G49 = 'G49', G50 = 'G50', G51 = 'G51', G52 = 'G52', G53 = 'G53', G54 = 'G54', G55 = 'G55', G56 = 'G56', G57 = 'G57', G58 = 'G58', G59 = 'G59', G60 = 'G60', G61 = 'G61', G62 = 'G62', G63 = 'G63', G64 = 'G64', G65 = 'G65', G66 = 'G66', G67 = 'G67', G68 = 'G68', G69 = 'G69', G70 = 'G70', G71 = 'G71', G72 = 'G72', G73 = 'G73', G74 = 'G74', G75 = 'G75', G76 = 'G76', G77 = 'G77', G78 = 'G78', G79 = 'G79', G80 = 'G80', G81 = 'G81', G82 = 'G82', G83 = 'G83', G84 = 'G84', G85 = 'G85', G86 = 'G86', G87 = 'G87', G88 = 'G88', G89 = 'G89', G90 = 'G90', G91 = 'G91', G92 = 'G92', G93 = 'G93', G94 = 'G94', G95 = 'G95', G96 = 'G96', G97 = 'G97', G98 = 'G98', G99 = 'G99', GB = 'GB', GBQ = 'GBQ', GDW = 'GDW', GE = 'GE', GF = 'GF', GFI = 'GFI', GGR = 'GGR', GIA = 'GIA', GIC = 'GIC', GII = 'GII', GIP = 'GIP', GJ = 'GJ', GL = 'GL', GLD = 'GLD', GLI = 'GLI', GLL = 'GLL', GM = 'GM', GO = 'GO', GP = 'GP', GQ = 'GQ', GRM = 'GRM', GRN = 'GRN', GRO = 'GRO', GV = 'GV', GWH = 'GWH', H03 = 'H03', H04 = 'H04', H05 = 'H05', H06 = 'H06', H07 = 'H07', H08 = 'H08', H09 = 'H09', H10 = 'H10', H11 = 'H11', H12 = 'H12', H13 = 'H13', H14 = 'H14', H15 = 'H15', H16 = 'H16', H18 = 'H18', H19 = 'H19', H20 = 'H20', H21 = 'H21', H22 = 'H22', H23 = 'H23', H24 = 'H24', H25 = 'H25', H26 = 'H26', H27 = 'H27', H28 = 'H28', H29 = 'H29', H30 = 'H30', H31 = 'H31', H32 = 'H32', H33 = 'H33', H34 = 'H34', H35 = 'H35', H36 = 'H36', H37 = 'H37', H38 = 'H38', H39 = 'H39', H40 = 'H40', H41 = 'H41', H42 = 'H42', H43 = 'H43', H44 = 'H44', H45 = 'H45', H46 = 'H46', H47 = 'H47', H48 = 'H48', H49 = 'H49', H50 = 'H50', H51 = 'H51', H52 = 'H52', H53 = 'H53', H54 = 'H54', H55 = 'H55', H56 = 'H56', H57 = 'H57', H58 = 'H58', H59 = 'H59', H60 = 'H60', H61 = 'H61', H62 = 'H62', H63 = 'H63', H64 = 'H64', H65 = 'H65', H66 = 'H66', H67 = 'H67', H68 = 'H68', H69 = 'H69', H70 = 'H70', H71 = 'H71', H72 = 'H72', H73 = 'H73', H74 = 'H74', H75 = 'H75', H76 = 'H76', H77 = 'H77', H79 = 'H79', H80 = 'H80', H81 = 'H81', H82 = 'H82', H83 = 'H83', H84 = 'H84', H85 = 'H85', H87 = 'H87', H88 = 'H88', H89 = 'H89', H90 = 'H90', H91 = 'H91', H92 = 'H92', H93 = 'H93', H94 = 'H94', H95 = 'H95', H96 = 'H96', H98 = 'H98', H99 = 'H99', HA = 'HA', HBA = 'HBA', HBX = 'HBX', HC = 'HC', HDW = 'HDW', HEA = 'HEA', HGM = 'HGM', HH = 'HH', HIU = 'HIU', HKM = 'HKM', HLT = 'HLT', HM = 'HM', HMQ = 'HMQ', HMT = 'HMT', HPA = 'HPA', HTZ = 'HTZ', HUR = 'HUR', IA = 'IA', IE = 'IE', INH = 'INH', INK = 'INK', INQ = 'INQ', ISD = 'ISD', IU = 'IU', IV = 'IV', J10 = 'J10', J12 = 'J12', J13 = 'J13', J14 = 'J14', J15 = 'J15', J16 = 'J16', J17 = 'J17', J18 = 'J18', J19 = 'J19', J2 = 'J2', J20 = 'J20', J21 = 'J21', J22 = 'J22', J23 = 'J23', J24 = 'J24', J25 = 'J25', J26 = 'J26', J27 = 'J27', J28 = 'J28', J29 = 'J29', J30 = 'J30', J31 = 'J31', J32 = 'J32', J33 = 'J33', J34 = 'J34', J35 = 'J35', J36 = 'J36', J38 = 'J38', J39 = 'J39', J40 = 'J40', J41 = 'J41', J42 = 'J42', J43 = 'J43', J44 = 'J44', J45 = 'J45', J46 = 'J46', J47 = 'J47', J48 = 'J48', J49 = 'J49', J50 = 'J50', J51 = 'J51', J52 = 'J52', J53 = 'J53', J54 = 'J54', J55 = 'J55', J56 = 'J56', J57 = 'J57', J58 = 'J58', J59 = 'J59', J60 = 'J60', J61 = 'J61', J62 = 'J62', J63 = 'J63', J64 = 'J64', J65 = 'J65', J66 = 'J66', J67 = 'J67', J68 = 'J68', J69 = 'J69', J70 = 'J70', J71 = 'J71', J72 = 'J72', J73 = 'J73', J74 = 'J74', J75 = 'J75', J76 = 'J76', J78 = 'J78', J79 = 'J79', J81 = 'J81', J82 = 'J82', J83 = 'J83', J84 = 'J84', J85 = 'J85', J87 = 'J87', J90 = 'J90', J91 = 'J91', J92 = 'J92', J93 = 'J93', J95 = 'J95', J96 = 'J96', J97 = 'J97', J98 = 'J98', J99 = 'J99', JE = 'JE', JK = 'JK', JM = 'JM', JNT = 'JNT', JOU = 'JOU', JPS = 'JPS', JWL = 'JWL', K1 = 'K1', K10 = 'K10', K11 = 'K11', K12 = 'K12', K13 = 'K13', K14 = 'K14', K15 = 'K15', K16 = 'K16', K17 = 'K17', K18 = 'K18', K19 = 'K19', K2 = 'K2', K20 = 'K20', K21 = 'K21', K22 = 'K22', K23 = 'K23', K26 = 'K26', K27 = 'K27', K28 = 'K28', K3 = 'K3', K30 = 'K30', K31 = 'K31', K32 = 'K32', K33 = 'K33', K34 = 'K34', K35 = 'K35', K36 = 'K36', K37 = 'K37', K38 = 'K38', K39 = 'K39', K40 = 'K40', K41 = 'K41', K42 = 'K42', K43 = 'K43', K45 = 'K45', K46 = 'K46', K47 = 'K47', K48 = 'K48', K49 = 'K49', K50 = 'K50', K51 = 'K51', K52 = 'K52', K53 = 'K53', K54 = 'K54', K55 = 'K55', K58 = 'K58', K59 = 'K59', K6 = 'K6', K60 = 'K60', K61 = 'K61', K62 = 'K62', K63 = 'K63', K64 = 'K64', K65 = 'K65', K66 = 'K66', K67 = 'K67', K68 = 'K68', K69 = 'K69', K70 = 'K70', K71 = 'K71', K73 = 'K73', K74 = 'K74', K75 = 'K75', K76 = 'K76', K77 = 'K77', K78 = 'K78', K79 = 'K79', K80 = 'K80', K81 = 'K81', K82 = 'K82', K83 = 'K83', K84 = 'K84', K85 = 'K85', K86 = 'K86', K87 = 'K87', K88 = 'K88', K89 = 'K89', K90 = 'K90', K91 = 'K91', K92 = 'K92', K93 = 'K93', K94 = 'K94', K95 = 'K95', K96 = 'K96', K97 = 'K97', K98 = 'K98', K99 = 'K99', KA = 'KA', KAT = 'KAT', KB = 'KB', KBA = 'KBA', KCC = 'KCC', KDW = 'KDW', KEL = 'KEL', KGM = 'KGM', KGS = 'KGS', KHY = 'KHY', KHZ = 'KHZ', KI = 'KI', KIC = 'KIC', KIP = 'KIP', KJ = 'KJ', KJO = 'KJO', KL = 'KL', KLK = 'KLK', KLX = 'KLX', KMA = 'KMA', KMH = 'KMH', KMK = 'KMK', KMQ = 'KMQ', KMT = 'KMT', KNI = 'KNI', KNM = 'KNM', KNS = 'KNS', KNT = 'KNT', KO = 'KO', KPA = 'KPA', KPH = 'KPH', KPO = 'KPO', KPP = 'KPP', KR = 'KR', KSD = 'KSD', KSH = 'KSH', KT = 'KT', KTN = 'KTN', KUR = 'KUR', KVA = 'KVA', KVR = 'KVR', KVT = 'KVT', KW = 'KW', KWH = 'KWH', KWO = 'KWO', KWT = 'KWT', KX = 'KX', L10 = 'L10', L11 = 'L11', L12 = 'L12', L13 = 'L13', L14 = 'L14', L15 = 'L15', L16 = 'L16', L17 = 'L17', L18 = 'L18', L19 = 'L19', L2 = 'L2', L20 = 'L20', L21 = 'L21', L23 = 'L23', L24 = 'L24', L25 = 'L25', L26 = 'L26', L27 = 'L27', L28 = 'L28', L29 = 'L29', L30 = 'L30', L31 = 'L31', L32 = 'L32', L33 = 'L33', L34 = 'L34', L35 = 'L35', L36 = 'L36', L37 = 'L37', L38 = 'L38', L39 = 'L39', L40 = 'L40', L41 = 'L41', L42 = 'L42', L43 = 'L43', L44 = 'L44', L45 = 'L45', L46 = 'L46', L47 = 'L47', L48 = 'L48', L49 = 'L49', L50 = 'L50', L51 = 'L51', L52 = 'L52', L53 = 'L53', L54 = 'L54', L55 = 'L55', L56 = 'L56', L57 = 'L57', L58 = 'L58', L59 = 'L59', L60 = 'L60', L63 = 'L63', L64 = 'L64', L65 = 'L65', L66 = 'L66', L67 = 'L67', L68 = 'L68', L69 = 'L69', L70 = 'L70', L71 = 'L71', L72 = 'L72', L73 = 'L73', L74 = 'L74', L75 = 'L75', L76 = 'L76', L77 = 'L77', L78 = 'L78', L79 = 'L79', L80 = 'L80', L81 = 'L81', L82 = 'L82', L83 = 'L83', L84 = 'L84', L85 = 'L85', L86 = 'L86', L87 = 'L87', L88 = 'L88', L89 = 'L89', L90 = 'L90', L91 = 'L91', L92 = 'L92', L93 = 'L93', L94 = 'L94', L95 = 'L95', L96 = 'L96', L98 = 'L98', L99 = 'L99', LA = 'LA', LAC = 'LAC', LBR = 'LBR', LBT = 'LBT', LD = 'LD', LEF = 'LEF', LF = 'LF', LH = 'LH', LK = 'LK', LM = 'LM', LN = 'LN', LO = 'LO', LP = 'LP', LPA = 'LPA', LR = 'LR', LS = 'LS', LTN = 'LTN', LTR = 'LTR', LUB = 'LUB', LUM = 'LUM', LUX = 'LUX', LY = 'LY', M1 = 'M1', M10 = 'M10', M11 = 'M11', M12 = 'M12', M13 = 'M13', M14 = 'M14', M15 = 'M15', M16 = 'M16', M17 = 'M17', M18 = 'M18', M19 = 'M19', M20 = 'M20', M21 = 'M21', M22 = 'M22', M23 = 'M23', M24 = 'M24', M25 = 'M25', M26 = 'M26', M27 = 'M27', M29 = 'M29', M30 = 'M30', M31 = 'M31', M32 = 'M32', M33 = 'M33', M34 = 'M34', M35 = 'M35', M36 = 'M36', M37 = 'M37', M38 = 'M38', M39 = 'M39', M4 = 'M4', M40 = 'M40', M41 = 'M41', M42 = 'M42', M43 = 'M43', M44 = 'M44', M45 = 'M45', M46 = 'M46', M47 = 'M47', M48 = 'M48', M49 = 'M49', M5 = 'M5', M50 = 'M50', M51 = 'M51', M52 = 'M52', M53 = 'M53', M55 = 'M55', M56 = 'M56', M57 = 'M57', M58 = 'M58', M59 = 'M59', M60 = 'M60', M61 = 'M61', M62 = 'M62', M63 = 'M63', M64 = 'M64', M65 = 'M65', M66 = 'M66', M67 = 'M67', M68 = 'M68', M69 = 'M69', M7 = 'M7', M70 = 'M70', M71 = 'M71', M72 = 'M72', M73 = 'M73', M74 = 'M74', M75 = 'M75', M76 = 'M76', M77 = 'M77', M78 = 'M78', M79 = 'M79', M80 = 'M80', M81 = 'M81', M82 = 'M82', M83 = 'M83', M84 = 'M84', M85 = 'M85', M86 = 'M86', M87 = 'M87', M88 = 'M88', M89 = 'M89', M9 = 'M9', M90 = 'M90', M91 = 'M91', M92 = 'M92', M93 = 'M93', M94 = 'M94', M95 = 'M95', M96 = 'M96', M97 = 'M97', M98 = 'M98', M99 = 'M99', MAH = 'MAH', MAL = 'MAL', MAM = 'MAM', MAR = 'MAR', MAW = 'MAW', MBE = 'MBE', MBF = 'MBF', MBR = 'MBR', MC = 'MC', MCU = 'MCU', MD = 'MD', MGM = 'MGM', MHZ = 'MHZ', MIK = 'MIK', MIL = 'MIL', MIN = 'MIN', MIO = 'MIO', MIU = 'MIU', MLD = 'MLD', MLT = 'MLT', MMK = 'MMK', MMQ = 'MMQ', MMT = 'MMT', MND = 'MND', MON = 'MON', MPA = 'MPA', MQH = 'MQH', MQS = 'MQS', MSK = 'MSK', MTK = 'MTK', MTQ = 'MTQ', MTR = 'MTR', MTS = 'MTS', MVA = 'MVA', MWH = 'MWH', N1 = 'N1', N10 = 'N10', N11 = 'N11', N12 = 'N12', N13 = 'N13', N14 = 'N14', N15 = 'N15', N16 = 'N16', N17 = 'N17', N18 = 'N18', N19 = 'N19', N20 = 'N20', N21 = 'N21', N22 = 'N22', N23 = 'N23', N24 = 'N24', N25 = 'N25', N26 = 'N26', N27 = 'N27', N28 = 'N28', N29 = 'N29', N3 = 'N3', N30 = 'N30', N31 = 'N31', N32 = 'N32', N33 = 'N33', N34 = 'N34', N35 = 'N35', N36 = 'N36', N37 = 'N37', N38 = 'N38', N39 = 'N39', N40 = 'N40', N41 = 'N41', N42 = 'N42', N43 = 'N43', N44 = 'N44', N45 = 'N45', N46 = 'N46', N47 = 'N47', N48 = 'N48', N49 = 'N49', N50 = 'N50', N51 = 'N51', N52 = 'N52', N53 = 'N53', N54 = 'N54', N55 = 'N55', N56 = 'N56', N57 = 'N57', N58 = 'N58', N59 = 'N59', N60 = 'N60', N61 = 'N61', N62 = 'N62', N63 = 'N63', N64 = 'N64', N65 = 'N65', N66 = 'N66', N67 = 'N67', N68 = 'N68', N69 = 'N69', N70 = 'N70', N71 = 'N71', N72 = 'N72', N73 = 'N73', N74 = 'N74', N75 = 'N75', N76 = 'N76', N77 = 'N77', N78 = 'N78', N79 = 'N79', N80 = 'N80', N81 = 'N81', N82 = 'N82', N83 = 'N83', N84 = 'N84', N85 = 'N85', N86 = 'N86', N87 = 'N87', N88 = 'N88', N89 = 'N89', N90 = 'N90', N91 = 'N91', N92 = 'N92', N93 = 'N93', N94 = 'N94', N95 = 'N95', N96 = 'N96', N97 = 'N97', N98 = 'N98', N99 = 'N99', NA = 'NA', NAR = 'NAR', NCL = 'NCL', NEW = 'NEW', NF = 'NF', NIL = 'NIL', NIU = 'NIU', NL = 'NL', NM3 = 'NM3', NMI = 'NMI', NMP = 'NMP', NPT = 'NPT', NT = 'NT', NU = 'NU', NX = 'NX', OA = 'OA', ODE = 'ODE', OHM = 'OHM', ON = 'ON', ONZ = 'ONZ', OPM = 'OPM', OT = 'OT', OZA = 'OZA', OZI = 'OZI', P1 = 'P1', P10 = 'P10', P11 = 'P11', P12 = 'P12', P13 = 'P13', P14 = 'P14', P15 = 'P15', P16 = 'P16', P17 = 'P17', P18 = 'P18', P19 = 'P19', P2 = 'P2', P20 = 'P20', P21 = 'P21', P22 = 'P22', P23 = 'P23', P24 = 'P24', P25 = 'P25', P26 = 'P26', P27 = 'P27', P28 = 'P28', P29 = 'P29', P30 = 'P30', P31 = 'P31', P32 = 'P32', P33 = 'P33', P34 = 'P34', P35 = 'P35', P36 = 'P36', P37 = 'P37', P38 = 'P38', P39 = 'P39', P40 = 'P40', P41 = 'P41', P42 = 'P42', P43 = 'P43', P44 = 'P44', P45 = 'P45', P46 = 'P46', P47 = 'P47', P48 = 'P48', P49 = 'P49', P5 = 'P5', P50 = 'P50', P51 = 'P51', P52 = 'P52', P53 = 'P53', P54 = 'P54', P55 = 'P55', P56 = 'P56', P57 = 'P57', P58 = 'P58', P59 = 'P59', P60 = 'P60', P61 = 'P61', P62 = 'P62', P63 = 'P63', P64 = 'P64', P65 = 'P65', P66 = 'P66', P67 = 'P67', P68 = 'P68', P69 = 'P69', P70 = 'P70', P71 = 'P71', P72 = 'P72', P73 = 'P73', P74 = 'P74', P75 = 'P75', P76 = 'P76', P77 = 'P77', P78 = 'P78', P79 = 'P79', P80 = 'P80', P81 = 'P81', P82 = 'P82', P83 = 'P83', P84 = 'P84', P85 = 'P85', P86 = 'P86', P87 = 'P87', P88 = 'P88', P89 = 'P89', P90 = 'P90', P91 = 'P91', P92 = 'P92', P93 = 'P93', P94 = 'P94', P95 = 'P95', P96 = 'P96', P97 = 'P97', P98 = 'P98', P99 = 'P99', PAL = 'PAL', PD = 'PD', PFL = 'PFL', PGL = 'PGL', PI = 'PI', PLA = 'PLA', PO = 'PO', PQ = 'PQ', PR = 'PR', PS = 'PS', PTD = 'PTD', PTI = 'PTI', PTL = 'PTL', PTN = 'PTN', Q10 = 'Q10', Q11 = 'Q11', Q12 = 'Q12', Q13 = 'Q13', Q14 = 'Q14', Q15 = 'Q15', Q16 = 'Q16', Q17 = 'Q17', Q18 = 'Q18', Q19 = 'Q19', Q20 = 'Q20', Q21 = 'Q21', Q22 = 'Q22', Q23 = 'Q23', Q24 = 'Q24', Q25 = 'Q25', Q26 = 'Q26', Q27 = 'Q27', Q28 = 'Q28', Q29 = 'Q29', Q30 = 'Q30', Q31 = 'Q31', Q32 = 'Q32', Q33 = 'Q33', Q34 = 'Q34', Q35 = 'Q35', Q36 = 'Q36', Q37 = 'Q37', Q38 = 'Q38', Q39 = 'Q39', Q40 = 'Q40', Q3 = 'Q3', QA = 'QA', QAN = 'QAN', QB = 'QB', QR = 'QR', QTD = 'QTD', QTI = 'QTI', QTL = 'QTL', QTR = 'QTR', R1 = 'R1', R9 = 'R9', RH = 'RH', RM = 'RM', ROM = 'ROM', RP = 'RP', RPM = 'RPM', RPS = 'RPS', RT = 'RT', S3 = 'S3', S4 = 'S4', SAN = 'SAN', SCO = 'SCO', SCR = 'SCR', SEC = 'SEC', SET = 'SET', SG = 'SG', SIE = 'SIE', SM3 = 'SM3', SMI = 'SMI', SQ = 'SQ', SQR = 'SQR', SR = 'SR', STC = 'STC', STI = 'STI', STK = 'STK', STL = 'STL', STN = 'STN', STW = 'STW', SW = 'SW', SX = 'SX', SYR = 'SYR', T0 = 'T0', T3 = 'T3', TAH = 'TAH', TAN = 'TAN', TI = 'TI', TIC = 'TIC', TIP = 'TIP', TKM = 'TKM', TMS = 'TMS', TNE = 'TNE', TP = 'TP', TPI = 'TPI', TPR = 'TPR', TQD = 'TQD', TRL = 'TRL', TST = 'TST', TTS = 'TTS', U1 = 'U1', U2 = 'U2', UB = 'UB', UC = 'UC', VA = 'VA', VLT = 'VLT', VP = 'VP', W2 = 'W2', WA = 'WA', WB = 'WB', WCD = 'WCD', WE = 'WE', WEB = 'WEB', WEE = 'WEE', WG = 'WG', WHR = 'WHR', WM = 'WM', WSD = 'WSD', WTT = 'WTT', X1 = 'X1', YDK = 'YDK', YDQ = 'YDQ', YRD = 'YRD', Z11 = 'Z11', ZP = 'ZP', ZZ = 'ZZ', X1A = 'X1A', X1B = 'X1B', X1D = 'X1D', X1F = 'X1F', X1G = 'X1G', X1W = 'X1W', X2C = 'X2C', X3A = 'X3A', X3H = 'X3H', X43 = 'X43', X44 = 'X44', X4A = 'X4A', X4B = 'X4B', X4C = 'X4C', X4D = 'X4D', X4F = 'X4F', X4G = 'X4G', X4H = 'X4H', X5H = 'X5H', X5L = 'X5L', X5M = 'X5M', X6H = 'X6H', X6P = 'X6P', X7A = 'X7A', X7B = 'X7B', X8A = 'X8A', X8B = 'X8B', X8C = 'X8C', XAA = 'XAA', XAB = 'XAB', XAC = 'XAC', XAD = 'XAD', XAE = 'XAE', XAF = 'XAF', XAG = 'XAG', XAH = 'XAH', XAI = 'XAI', XAJ = 'XAJ', XAL = 'XAL', XAM = 'XAM', XAP = 'XAP', XAT = 'XAT', XAV = 'XAV', XB4 = 'XB4', XBA = 'XBA', XBB = 'XBB', XBC = 'XBC', XBD = 'XBD', XBE = 'XBE', XBF = 'XBF', XBG = 'XBG', XBH = 'XBH', XBI = 'XBI', XBJ = 'XBJ', XBK = 'XBK', XBL = 'XBL', XBM = 'XBM', XBN = 'XBN', XBO = 'XBO', XBP = 'XBP', XBQ = 'XBQ', XBR = 'XBR', XBS = 'XBS', XBT = 'XBT', XBU = 'XBU', XBV = 'XBV', XBW = 'XBW', XBX = 'XBX', XBY = 'XBY', XBZ = 'XBZ', XCA = 'XCA', XCB = 'XCB', XCC = 'XCC', XCD = 'XCD', XCE = 'XCE', XCF = 'XCF', XCG = 'XCG', XCH = 'XCH', XCI = 'XCI', XCJ = 'XCJ', XCK = 'XCK', XCL = 'XCL', XCM = 'XCM', XCN = 'XCN', XCO = 'XCO', XCP = 'XCP', XCQ = 'XCQ', XCR = 'XCR', XCS = 'XCS', XCT = 'XCT', XCU = 'XCU', XCV = 'XCV', XCW = 'XCW', XCX = 'XCX', XCY = 'XCY', XCZ = 'XCZ', XDA = 'XDA', XDB = 'XDB', XDC = 'XDC', XDG = 'XDG', XDH = 'XDH', XDI = 'XDI', XDJ = 'XDJ', XDK = 'XDK', XDL = 'XDL', XDM = 'XDM', XDN = 'XDN', XDP = 'XDP', XDR = 'XDR', XDS = 'XDS', XDT = 'XDT', XDU = 'XDU', XDV = 'XDV', XDW = 'XDW', XDX = 'XDX', XDY = 'XDY', XEC = 'XEC', XED = 'XED', XEE = 'XEE', XEF = 'XEF', XEG = 'XEG', XEH = 'XEH', XEI = 'XEI', XEN = 'XEN', XFB = 'XFB', XFC = 'XFC', XFD = 'XFD', XFE = 'XFE', XFI = 'XFI', XFL = 'XFL', XFO = 'XFO', XFP = 'XFP', XFR = 'XFR', XFT = 'XFT', XFW = 'XFW', XFX = 'XFX', XGB = 'XGB', XGI = 'XGI', XGL = 'XGL', XGR = 'XGR', XGU = 'XGU', XGY = 'XGY', XGZ = 'XGZ', XHA = 'XHA', XHB = 'XHB', XHC = 'XHC', XHG = 'XHG', XHN = 'XHN', XHR = 'XHR', XIA = 'XIA', XIB = 'XIB', XIC = 'XIC', XID = 'XID', XIE = 'XIE', XIF = 'XIF', XIG = 'XIG', XIH = 'XIH', XIK = 'XIK', XIL = 'XIL', XIN = 'XIN', XIZ = 'XIZ', XJB = 'XJB', XJC = 'XJC', XJG = 'XJG', XJR = 'XJR', XJT = 'XJT', XJY = 'XJY', XKG = 'XKG', XKI = 'XKI', XLE = 'XLE', XLG = 'XLG', XLT = 'XLT', XLU = 'XLU', XLV = 'XLV', XLZ = 'XLZ', XMA = 'XMA', XMB = 'XMB', XMC = 'XMC', XME = 'XME', XMR = 'XMR', XMS = 'XMS', XMT = 'XMT', XMW = 'XMW', XMX = 'XMX', XNA = 'XNA', XNE = 'XNE', XNF = 'XNF', XNG = 'XNG', XNS = 'XNS', XNT = 'XNT', XNU = 'XNU', XNV = 'XNV', XOA = 'XOA', XOB = 'XOB', XOC = 'XOC', XOD = 'XOD', XOE = 'XOE', XOF = 'XOF', XOK = 'XOK', XOT = 'XOT', XOU = 'XOU', XP2 = 'XP2', XPA = 'XPA', XPB = 'XPB', XPC = 'XPC', XPD = 'XPD', XPE = 'XPE', XPF = 'XPF', XPG = 'XPG', XPH = 'XPH', XPI = 'XPI', XPJ = 'XPJ', XPK = 'XPK', XPL = 'XPL', XPN = 'XPN', XPO = 'XPO', XPP = 'XPP', XPR = 'XPR', XPT = 'XPT', XPU = 'XPU', XPV = 'XPV', XPX = 'XPX', XPY = 'XPY', XPZ = 'XPZ', XQA = 'XQA', XQB = 'XQB', XQC = 'XQC', XQD = 'XQD', XQF = 'XQF', XQG = 'XQG', XQH = 'XQH', XQJ = 'XQJ', XQK = 'XQK', XQL = 'XQL', XQM = 'XQM', XQN = 'XQN', XQP = 'XQP', XQQ = 'XQQ', XQR = 'XQR', XQS = 'XQS', XRD = 'XRD', XRG = 'XRG', XRJ = 'XRJ', XRK = 'XRK', XRL = 'XRL', XRO = 'XRO', XRT = 'XRT', XRZ = 'XRZ', XSA = 'XSA', XSB = 'XSB', XSC = 'XSC', XSD = 'XSD', XSE = 'XSE', XSH = 'XSH', XSI = 'XSI', XSK = 'XSK', XSL = 'XSL', XSM = 'XSM', XSO = 'XSO', XSP = 'XSP', XSS = 'XSS', XST = 'XST', XSU = 'XSU', XSV = 'XSV', XSW = 'XSW', XSY = 'XSY', XSZ = 'XSZ', XT1 = 'XT1', XTB = 'XTB', XTC = 'XTC', XTD = 'XTD', XTE = 'XTE', XTG = 'XTG', XTI = 'XTI', XTK = 'XTK', XTL = 'XTL', XTN = 'XTN', XTO = 'XTO', XTR = 'XTR', XTS = 'XTS', XTT = 'XTT', XTU = 'XTU', XTV = 'XTV', XTW = 'XTW', XTY = 'XTY', XTZ = 'XTZ', XUC = 'XUC', XUN = 'XUN', XVA = 'XVA', XVG = 'XVG', XVI = 'XVI', XVK = 'XVK', XVL = 'XVL', XVO = 'XVO', XVP = 'XVP', XVQ = 'XVQ', XVN = 'XVN', XVR = 'XVR', XVS = 'XVS', XVY = 'XVY', XWA = 'XWA', XWB = 'XWB', XWC = 'XWC', XWD = 'XWD', XWF = 'XWF', XWG = 'XWG', XWH = 'XWH', XWJ = 'XWJ', XWK = 'XWK', XWL = 'XWL', XWM = 'XWM', XWN = 'XWN', XWP = 'XWP', XWQ = 'XWQ', XWR = 'XWR', XWS = 'XWS', XWT = 'XWT', XWU = 'XWU', XWV = 'XWV', XWW = 'XWW', XWX = 'XWX', XWY = 'XWY', XWZ = 'XWZ', XXA = 'XXA', XXB = 'XXB', XXC = 'XXC', XXD = 'XXD', XXF = 'XXF', XXG = 'XXG', XXH = 'XXH', XXJ = 'XXJ', XXK = 'XXK', XYA = 'XYA', XYB = 'XYB', XYC = 'XYC', XYD = 'XYD', XYF = 'XYF', XYG = 'XYG', XYH = 'XYH', XYJ = 'XYJ', XYK = 'XYK', XYL = 'XYL', XYM = 'XYM', XYN = 'XYN', XYP = 'XYP', XYQ = 'XYQ', XYR = 'XYR', XYS = 'XYS', XYT = 'XYT', XYV = 'XYV', XYW = 'XYW', XYX = 'XYX', XYY = 'XYY', XYZ = 'XYZ', XZA = 'XZA', XZB = 'XZB', XZC = 'XZC', XZD = 'XZD', XZF = 'XZF', XZG = 'XZG', XZH = 'XZH', XZJ = 'XZJ', XZK = 'XZK', XZL = 'XZL', XZM = 'XZM', XZN = 'XZN', XZP = 'XZP', XZQ = 'XZQ', XZR = 'XZR', XZS = 'XZS', XZT = 'XZT', XZU = 'XZU', XZV = 'XZV', XZW = 'XZW', XZX = 'XZX', XZY = 'XZY', XZZ = 'XZZ', _04 = '04', _05 = '05', _08 = '08', _16 = '16', _17 = '17', _18 = '18', _19 = '19', _26 = '26', _29 = '29', _30 = '30', _31 = '31', _32 = '32', _36 = '36', _43 = '43', _44 = '44', _45 = '45', _46 = '46', _47 = '47', _48 = '48', _53 = '53', _54 = '54', _62 = '62', _63 = '63', _64 = '64', _66 = '66', _69 = '69', _71 = '71', _72 = '72', _73 = '73', _76 = '76', _78 = '78', _84 = '84', _90 = '90', _92 = '92', _93 = '93', _94 = '94', _95 = '95', _96 = '96', _97 = '97', _98 = '98', '1A' = '1A', '1B' = '1B', '1C' = '1C', '1D' = '1D', '1E' = '1E', '1F' = '1F', '1G' = '1G', '1H' = '1H', '1J' = '1J', '1K' = '1K', '1L' = '1L', '1M' = '1M', '1X' = '1X', '2V' = '2V', '2W' = '2W', '3E' = '3E', '3G' = '3G', '3H' = '3H', '3I' = '3I', '4A' = '4A', '4B' = '4B', '4E' = '4E', '5C' = '5C', '5F' = '5F', '5G' = '5G', '5H' = '5H', '5I' = '5I', '5K' = '5K', '5P' = '5P', '5Q' = '5Q', A1 = 'A1', A25 = 'A25', A50 = 'A50', A51 = 'A51', A52 = 'A52', A57 = 'A57', A58 = 'A58', A60 = 'A60', A61 = 'A61', A62 = 'A62', A63 = 'A63', A64 = 'A64', A65 = 'A65', A66 = 'A66', A67 = 'A67', A77 = 'A77', A78 = 'A78', A79 = 'A79', A80 = 'A80', A81 = 'A81', A82 = 'A82', A83 = 'A83', AJ = 'AJ', AM = 'AM', AP = 'AP', AR = 'AR', ARE = 'ARE', ATT = 'ATT', AV = 'AV', AW = 'AW', B0 = 'B0', B2 = 'B2', B36 = 'B36', B37 = 'B37', B38 = 'B38', B39 = 'B39', B40 = 'B40', B5 = 'B5', B51 = 'B51', B6 = 'B6', B65 = 'B65', B9 = 'B9', BD = 'BD', BE = 'BE', BG = 'BG', BH = 'BH', BJ = 'BJ', BK = 'BK', BL = 'BL', BO = 'BO', BR = 'BR', BT = 'BT', BW = 'BW', BX = 'BX', BZ = 'BZ', C1 = 'C1', C2 = 'C2', C4 = 'C4', C5 = 'C5', C6 = 'C6', C77 = 'C77', C98 = 'C98', CA = 'CA', CH = 'CH', CJ = 'CJ', CK = 'CK', CL = 'CL', CO = 'CO', CQ = 'CQ', CR = 'CR', CS = 'CS', CT = 'CT', CU = 'CU', CV = 'CV', CY = 'CY', CZ = 'CZ', D14 = 'D14', D28 = 'D28', D35 = 'D35', D37 = 'D37', D38 = 'D38', D39 = 'D39', D40 = 'D40', D64 = 'D64', D66 = 'D66', D67 = 'D67', D7 = 'D7', D70 = 'D70', D71 = 'D71', D72 = 'D72', D75 = 'D75', D76 = 'D76', D79 = 'D79', D8 = 'D8', D9 = 'D9', D90 = 'D90', D92 = 'D92', D96 = 'D96', D97 = 'D97', D98 = 'D98', D99 = 'D99', DC = 'DC', DE = 'DE', DI = 'DI', DQ = 'DQ', DR = 'DR', DRM = 'DRM', DS = 'DS', DU = 'DU', DX = 'DX', DY = 'DY', E2 = 'E2', E3 = 'E3', E5 = 'E5', EC = 'EC', EP = 'EP', EV = 'EV', F1 = 'F1', F9 = 'F9', FB = 'FB', FD = 'FD', FE = 'FE', FG = 'FG', FM = 'FM', G7 = 'G7', GC = 'GC', GD = 'GD', GH = 'GH', GK = 'GK', GN = 'GN', GRT = 'GRT', GT = 'GT', GW = 'GW', GY = 'GY', GZ = 'GZ', H1 = 'H1', H2 = 'H2', HAR = 'HAR', HD = 'HD', HE = 'HE', HF = 'HF', HI = 'HI', HJ = 'HJ', HK = 'HK', HL = 'HL', HN = 'HN', HO = 'HO', HP = 'HP', HS = 'HS', HT = 'HT', HY = 'HY', IC = 'IC', IF = 'IF', II = 'II', IL = 'IL', IM = 'IM', IP = 'IP', IT = 'IT', JB = 'JB', JG = 'JG', JO = 'JO', JR = 'JR', K5 = 'K5', KD = 'KD', KF = 'KF', KG = 'KG', KS = 'KS', KTM = 'KTM', LC = 'LC', LE = 'LE', LI = 'LI', LJ = 'LJ', LX = 'LX', M0 = 'M0', MA = 'MA', MF = 'MF', MK = 'MK', MQ = 'MQ', MT = 'MT', MV = 'MV', N2 = 'N2', NB = 'NB', NBB = 'NBB', NC = 'NC', ND = 'ND', NE = 'NE', NG = 'NG', NH = 'NH', NI = 'NI', NJ = 'NJ', NN = 'NN', NPL = 'NPL', NPR = 'NPR', NQ = 'NQ', NR = 'NR', NRL = 'NRL', NTT = 'NTT', NV = 'NV', NY = 'NY', OP = 'OP', OZ = 'OZ', P0 = 'P0', P3 = 'P3', P4 = 'P4', P6 = 'P6', P7 = 'P7', P8 = 'P8', P9 = 'P9', PA = 'PA', PB = 'PB', PE = 'PE', PF = 'PF', PG = 'PG', PK = 'PK', PL = 'PL', PM = 'PM', PN = 'PN', PT = 'PT', PU = 'PU', PV = 'PV', PW = 'PW', PY = 'PY', PZ = 'PZ', QD = 'QD', QH = 'QH', QK = 'QK', QT = 'QT', R4 = 'R4', RA = 'RA', RD = 'RD', RG = 'RG', RK = 'RK', RL = 'RL', RN = 'RN', RO = 'RO', RS = 'RS', RU = 'RU', S5 = 'S5', S6 = 'S6', S7 = 'S7', S8 = 'S8', SA = 'SA', SD = 'SD', SE = 'SE', SHT = 'SHT', SK = 'SK', SL = 'SL', SN = 'SN', SO = 'SO', SP = 'SP', SS = 'SS', SST = 'SST', ST = 'ST', SV = 'SV', T1 = 'T1', T4 = 'T4', T5 = 'T5', T6 = 'T6', T7 = 'T7', T8 = 'T8', TA = 'TA', TC = 'TC', TD = 'TD', TE = 'TE', TF = 'TF', TJ = 'TJ', TK = 'TK', TL = 'TL', TN = 'TN', TQ = 'TQ', TR = 'TR', TS = 'TS', TSD = 'TSD', TSH = 'TSH', TT = 'TT', TU = 'TU', TV = 'TV', TW = 'TW', TY = 'TY', UA = 'UA', UD = 'UD', UE = 'UE', UF = 'UF', UH = 'UH', UM = 'UM', VI = 'VI', VQ = 'VQ', VS = 'VS', W4 = 'W4', WH = 'WH', WI = 'WI', WR = 'WR', WW = 'WW', YL = 'YL', YT = 'YT', Z1 = 'Z1', Z2 = 'Z2', Z3 = 'Z3', Z4 = 'Z4', Z5 = 'Z5', Z6 = 'Z6', Z8 = 'Z8' }


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

	export enum ReferenceDocumentType { purchase_order = 'purchase_order', buyer_reference = 'buyer_reference', billing = 'billing', sales_order = 'sales_order', contract = 'contract', despatch_advice = 'despatch_advice', originator = 'originator', receipt = 'receipt', project = 'project', quotation = 'quotation', payment_url = 'payment_url', item_classification_code = 'item_classification_code', item_commodity_code = 'item_commodity_code', line_document_reference = 'line_document_reference', line_standard_item_identification = 'line_standard_item_identification', line_sellers_item_identification = 'line_sellers_item_identification', line_buyers_item_identification = 'line_buyers_item_identification', item_specification = 'item_specification' }

	export enum DocumentOrderOrderType { regular = 'regular', consignment = 'consignment' }


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

	export enum DocumentOrderTaxSystem { tax_line_percentages = 'tax_line_percentages' }


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
		 * Min length: 36
		 * Max length: 36
		 */
		idempotencyGuid?: string | null;

		/**
		 * The id of the LegalEntity this document should be sent on behalf of. Either legalEntityId or receiveGuid is mandatory.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
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
		 * Min length: 36
		 * Max length: 36
		 */
		idempotencyGuid: FormControl<string | null | undefined>,

		/**
		 * The id of the LegalEntity this document should be sent on behalf of. Either legalEntityId or receiveGuid is mandatory.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
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

	export enum SendableDocumentDocumentType { invoice = 'invoice', invoice_response = 'invoice_response', order = 'order' }


	/** The invoice to send. Provide either invoice, or invoiceData, but not both. */
	export interface Invoice {

		/**
		 * The buyer's accounting cost centre for this invoice, expressed as text.
		 * Min length: 1
		 */
		accountingCost?: string | null;

		/**
		 * The total amount of tax in the accounting currency. If included, must be non-zero.
		 * Type: double
		 */
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
		 * Type: double
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

		/**
		 * The amount already paid.
		 * Type: double
		 */
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

		/**
		 * The total amount of tax in the accounting currency. If included, must be non-zero.
		 * Type: double
		 */
		accountingCurrencyTaxAmount: FormControl<number | null | undefined>,

		/** The ISO 4217 currency code. */
		accountingCurrencyTaxAmountCurrency: FormControl<CurrencyCode | null | undefined>,

		/**
		 * amountIncludingVat is important because of rounding differences. In many invoices, the sum of the line item amounts excluding VAT and the VAT amounts is not equal to first summing the line items without VAT, and then applying VAT. The difference is automatically calculated and included in the electronic invoice, so the receiving accounting package can process the electronic invoice without problems.
		 * Required
		 * Type: double
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

		/**
		 * The amount already paid.
		 * Type: double
		 */
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

		/**
		 * The discount or surcharge on this item. Should be negative for discounts
		 * Type: double
		 */
		allowanceCharge?: number | null;

		/**
		 * An array of allowance charges. NOTE: this is currently supported only when sending from/to Italy.
		 * Minimum items: 0
		 */
		allowanceCharges?: Array<LineAllowanceCharge>;

		/**
		 * The amount excluding tax. EXPERIMENTAL. Use amountExcludingVat.
		 * Type: double
		 */
		amountExcludingTax?: number | null;

		/**
		 * The amount excluding VAT. Should equal quantity x itemPrice + allowanceCharge.
		 * Type: double
		 */
		amountExcludingVat?: number | null;

		/**
		 * The amount including tax. Can only be used for "priceMode": "price_mode_gross". Use either this property or amountExcludingTax (amountExcludingVat).
		 * Type: double
		 */
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

		/**
		 * The price per item (may be fractional)
		 * Type: double
		 */
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

		/**
		 * The number of items (may be fractional).
		 * Type: double
		 */
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

		/**
		 * The discount or surcharge on this item. Should be negative for discounts
		 * Type: double
		 */
		allowanceCharge: FormControl<number | null | undefined>,

		/**
		 * The amount excluding tax. EXPERIMENTAL. Use amountExcludingVat.
		 * Type: double
		 */
		amountExcludingTax: FormControl<number | null | undefined>,

		/**
		 * The amount excluding VAT. Should equal quantity x itemPrice + allowanceCharge.
		 * Type: double
		 */
		amountExcludingVat: FormControl<number | null | undefined>,

		/**
		 * The amount including tax. Can only be used for "priceMode": "price_mode_gross". Use either this property or amountExcludingTax (amountExcludingVat).
		 * Type: double
		 */
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

		/**
		 * The price per item (may be fractional)
		 * Type: double
		 */
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

		/**
		 * The number of items (may be fractional).
		 * Type: double
		 */
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

	export enum InvoiceInvoiceType { _380 = '380', _381 = '381', _384 = '384' }


	/** A PaymentMeans is a way to pay the invoice. */
	export interface PaymentMeans {

		/** The account number. */
		account?: string | null;

		/**
		 * The amount to be paid for this category. Only used for Dutch G-Account invoices. The amount nl_ga_beneficiary + amount nl_ga_gaccount must add up to the amountExcludingVat
		 * Type: double
		 */
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

		/**
		 * The amount to be paid for this category. Only used for Dutch G-Account invoices. The amount nl_ga_beneficiary + amount nl_ga_gaccount must add up to the amountExcludingVat
		 * Type: double
		 */
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

	export enum PaymentMeansCode { credit_transfer = 'credit_transfer', debit_transfer = 'debit_transfer', direct_debit = 'direct_debit', card = 'card', bank_card = 'bank_card', credit_card = 'credit_card', online_payment_service = 'online_payment_service', cash = 'cash', bank_cheque = 'bank_cheque', cashiers_cheque = 'cashiers_cheque', standing_agreement = 'standing_agreement', aunz_npp = 'aunz_npp', aunz_npp_payid = 'aunz_npp_payid', aunz_npp_payto = 'aunz_npp_payto', aunz_bpay = 'aunz_bpay', aunz_postbillpay = 'aunz_postbillpay', aunz_uri = 'aunz_uri', se_bankgiro = 'se_bankgiro', se_plusgiro = 'se_plusgiro', sg_giro = 'sg_giro', sg_card = 'sg_card', sg_paynow = 'sg_paynow', it_mav = 'it_mav', it_pagopa = 'it_pagopa', nl_ga_beneficiary = 'nl_ga_beneficiary', nl_ga_gaccount = 'nl_ga_gaccount', undefined = 'undefined' }

	export enum InvoicePaymentMeansCode { online_payment_service = 'online_payment_service', bank_card = 'bank_card', direct_debit = 'direct_debit', standing_agreement = 'standing_agreement', credit_transfer = 'credit_transfer', se_bankgiro = 'se_bankgiro', se_plusgiro = 'se_plusgiro', aunz_npp = 'aunz_npp', '' = '', _1 = '1', _30 = '30', _31 = '31', _42 = '42', _48 = '48', _49 = '49', _57 = '57', _58 = '58' }

	export enum InvoicePreferredInvoiceType { prefer_autodetect = 'prefer_autodetect', prefer_invoice = 'prefer_invoice', prefer_creditnote = 'prefer_creditnote' }

	export enum InvoicePriceMode { price_mode_net = 'price_mode_net', price_mode_gross = 'price_mode_gross' }

	export enum InvoiceTaxExemptReason { export = 'export', reverse_charge = 'reverse_charge', zero_rated = 'zero_rated', exempt = 'exempt', outside_scope = 'outside_scope', intra_community = 'intra_community' }


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
		 * Type: double
		 */
		percentage: number;

		/**
		 * The amount of tax.
		 * Required
		 * Type: double
		 */
		taxAmount: number;

		/**
		 * The amount on which the tax is levied.
		 * Required
		 * Type: double
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
		 * Type: double
		 */
		percentage: FormControl<number | null | undefined>,

		/**
		 * The amount of tax.
		 * Required
		 * Type: double
		 */
		taxAmount: FormControl<number | null | undefined>,

		/**
		 * The amount on which the tax is levied.
		 * Required
		 * Type: double
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

	export enum InvoiceTaxSystem { tax_line_amounts = 'tax_line_amounts', tax_line_percentages = 'tax_line_percentages' }

	export enum InvoiceTransactionType { b2b = 'b2b', sezwp = 'sezwp', sezwop = 'sezwop', expwp = 'expwp', expwop = 'expwop', dexp = 'dexp' }

	export enum InvoiceX2y { b2b = 'b2b', b2g = 'b2g', b2c = 'b2c', b2b_sez = 'b2b_sez' }


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

	export enum RawDocumentDataParseStrategy { ubl = 'ubl', cii = 'cii', idoc = 'idoc' }


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

	export enum DocumentSubmissionEvidenceDocumentMime_type { 'message/rfc822' = 'message/rfc822', 'application/xml' = 'application/xml', 'application/json' = 'application/json', 'application/pdf' = 'application/pdf' }

	export enum DocumentSubmissionEvidenceNetwork { as2 = 'as2', email = 'email', peppol = 'peppol', sdi = 'sdi' }

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
		 * Min length: 36
		 * Max length: 36
		 */
		idempotencyGuid?: string | null;

		/** The invoice to send. Provide either invoice, or invoiceData, but not both. */
		invoice?: Invoice;

		/** The invoice to send, in base64 encoded format. Provide either invoice, or invoiceData, but not both. */
		invoiceData?: InvoiceData;

		/** The different ways to send the invoice to the recipient. The publicIdentifiers are used to send via the Peppol network, if the recipient is not registered on the Peppol network, the invoice will be sent to the email addresses in the emails property. This property is only mandatory when sending the invoice data using the <<_openapi_invoice>> property, not when sending using the <<_openapi_invoicedata>> property, in which case this information will be extracted from the <<_openapi_invoicedata>> object. If you do specify an <<_openapi_invoicerecipient>> object and an <<_openapi_invoicedata>> object, the data from the two will be merged. */
		invoiceRecipient?: InvoiceRecipient;

		/**
		 * The id of the LegalEntity this invoice should be sent for.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		legalEntityId?: number | null;

		/**
		 * DEPRECATED. Use legalEntityId
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		legalSupplierId?: number | null;

		/** DEPRECATED. */
		mode?: InvoiceSubmissionMode | null;

		/** The different ways to send the invoice to the recipient. The publicIdentifiers are used to send via the Peppol network, if the recipient is not registered on the Peppol network, the invoice will be sent to the email addresses in the emails property. This property is only mandatory when sending the invoice data using the <<_openapi_invoice>> property, not when sending using the <<_openapi_invoicedata>> property, in which case this information will be extracted from the <<_openapi_invoicedata>> object. If you do specify an <<_openapi_invoicerecipient>> object and an <<_openapi_invoicedata>> object, the data from the two will be merged. */
		routing?: Routing;

		/**
		 * DEPRECATED.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
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
		 * Min length: 36
		 * Max length: 36
		 */
		idempotencyGuid: FormControl<string | null | undefined>,

		/**
		 * The id of the LegalEntity this invoice should be sent for.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		legalEntityId: FormControl<number | null | undefined>,

		/**
		 * DEPRECATED. Use legalEntityId
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		legalSupplierId: FormControl<number | null | undefined>,

		/** DEPRECATED. */
		mode: FormControl<InvoiceSubmissionMode | null | undefined>,

		/**
		 * DEPRECATED.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
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

	export enum InvoiceSubmissionMode { direct = 'direct' }

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

	export enum InvoiceSubmissionActionEvidenceTransmission_result { unknown = 'unknown', accepted = 'accepted', rejected = 'rejected', send_error = 'send_error', internal_error = 'internal_error' }

	export enum InvoiceSubmissionActionEvidenceTransmission_type { email = 'email', edi = 'edi', as2 = 'as2', peppol = 'peppol', sandbox = 'sandbox' }

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
			id: new FormControl<string | null | undefined>(undefined),
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
		 * Min length: 2
		 * Max length: 64
		 */
		identifier?: string | null;

		/**
		 * The scheme of the identifier. See <<_receiver_identifiers_list>> for a list.
		 * Min length: 2
		 * Max length: 64
		 */
		scheme?: string | null;

		/**
		 * The superscheme of the identifier. Should always be "iso6523-actorid-upis".
		 * Min length: 2
		 * Max length: 64
		 */
		superscheme?: string | null;
	}
	export interface PeppolIdentifierFormProperties {

		/**
		 * The identifier.
		 * Min length: 2
		 * Max length: 64
		 */
		identifier: FormControl<string | null | undefined>,

		/**
		 * The scheme of the identifier. See <<_receiver_identifiers_list>> for a list.
		 * Min length: 2
		 * Max length: 64
		 */
		scheme: FormControl<string | null | undefined>,

		/**
		 * The superscheme of the identifier. Should always be "iso6523-actorid-upis".
		 * Min length: 2
		 * Max length: 64
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
		 * Min length: 2
		 * Max length: 64
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
		 * Min length: 2
		 * Max length: 192
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
		 * Min length: 2
		 * Max length: 64
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
		 * Min length: 2
		 * Max length: 64
		 */
		third_party_password?: string | null;

		/**
		 * The username to use to authenticate to a system through which to send the document, or to obtain tax authority approval to send it. This field is currently relevant only for India and mandatory when creating an IN LegalEntity.
		 * Min length: 2
		 * Max length: 64
		 */
		third_party_username?: string | null;

		/**
		 * The zipcode.
		 * Required
		 * Min length: 2
		 * Max length: 32
		 */
		zip: string;
	}
	export interface LegalEntityCreateFormProperties {

		/**
		 * The city.
		 * Required
		 * Min length: 2
		 * Max length: 64
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
		 * Min length: 2
		 * Max length: 192
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
		 * Min length: 2
		 * Max length: 64
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
		 * Min length: 2
		 * Max length: 64
		 */
		third_party_password: FormControl<string | null | undefined>,

		/**
		 * The username to use to authenticate to a system through which to send the document, or to obtain tax authority approval to send it. This field is currently relevant only for India and mandatory when creating an IN LegalEntity.
		 * Min length: 2
		 * Max length: 64
		 */
		third_party_username: FormControl<string | null | undefined>,

		/**
		 * The zipcode.
		 * Required
		 * Min length: 2
		 * Max length: 32
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
		 * Min length: 2
		 * Max length: 64
		 */
		city?: string | null;

		/** An ISO 3166-1 alpha-2 country code. */
		country?: AddressCountry | null;

		/**
		 * County, if applicable
		 * Max length: 64
		 */
		county?: string | null;

		/**
		 * The Storecove assigned id for the LegalEntity.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		id?: string | null;

		/**
		 * The first address line.
		 * Min length: 2
		 * Max length: 192
		 */
		line1?: string | null;

		/**
		 * The second address line, if applicable
		 * Max length: 192
		 */
		line2?: string | null;

		/**
		 * The name of the company.
		 * Min length: 2
		 * Max length: 64
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
		 * Min length: 2
		 * Max length: 64
		 */
		third_party_password?: string | null;

		/**
		 * The username to use to authenticate to a system through which to send the document, or to obtain tax authority approval to send it. This field is currently relevant only for India and mandatory when creating an IN LegalEntity.
		 * Min length: 2
		 * Max length: 64
		 */
		third_party_username?: string | null;

		/**
		 * The zipcode.
		 * Min length: 2
		 * Max length: 32
		 */
		zip?: string | null;
	}
	export interface LegalEntityUpdateFormProperties {

		/**
		 * The city.
		 * Min length: 2
		 * Max length: 64
		 */
		city: FormControl<string | null | undefined>,

		/** An ISO 3166-1 alpha-2 country code. */
		country: FormControl<AddressCountry | null | undefined>,

		/**
		 * County, if applicable
		 * Max length: 64
		 */
		county: FormControl<string | null | undefined>,

		/**
		 * The Storecove assigned id for the LegalEntity.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * The first address line.
		 * Min length: 2
		 * Max length: 192
		 */
		line1: FormControl<string | null | undefined>,

		/**
		 * The second address line, if applicable
		 * Max length: 192
		 */
		line2: FormControl<string | null | undefined>,

		/**
		 * The name of the company.
		 * Min length: 2
		 * Max length: 64
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
		 * Min length: 2
		 * Max length: 64
		 */
		third_party_password: FormControl<string | null | undefined>,

		/**
		 * The username to use to authenticate to a system through which to send the document, or to obtain tax authority approval to send it. This field is currently relevant only for India and mandatory when creating an IN LegalEntity.
		 * Min length: 2
		 * Max length: 64
		 */
		third_party_username: FormControl<string | null | undefined>,

		/**
		 * The zipcode.
		 * Min length: 2
		 * Max length: 32
		 */
		zip: FormControl<string | null | undefined>,
	}
	export function CreateLegalEntityUpdateFormGroup() {
		return new FormGroup<LegalEntityUpdateFormProperties>({
			city: new FormControl<string | null | undefined>(undefined, [Validators.minLength(2), Validators.maxLength(64)]),
			country: new FormControl<AddressCountry | null | undefined>(undefined),
			county: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64)]),
			id: new FormControl<string | null | undefined>(undefined),
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
		 * Min length: 2
		 * Max length: 64
		 */
		identifier: string;

		/**
		 * The scheme of the identifier. See <<_receiver_identifiers_list>> for a list.
		 * Required
		 * Min length: 2
		 * Max length: 64
		 */
		scheme: string;

		/**
		 * The superscheme of the identifier. Should always be "iso6523-actorid-upis".
		 * Required
		 * Min length: 2
		 * Max length: 64
		 */
		superscheme: string;
	}
	export interface PeppolIdentifierCreateFormProperties {

		/**
		 * The identifier.
		 * Required
		 * Min length: 2
		 * Max length: 64
		 */
		identifier: FormControl<string | null | undefined>,

		/**
		 * The scheme of the identifier. See <<_receiver_identifiers_list>> for a list.
		 * Required
		 * Min length: 2
		 * Max length: 64
		 */
		scheme: FormControl<string | null | undefined>,

		/**
		 * The superscheme of the identifier. Should always be "iso6523-actorid-upis".
		 * Required
		 * Min length: 2
		 * Max length: 64
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

	export enum PreflightInvoiceRecipientResultCode { ok = 'ok', nok = 'nok' }

	export interface PurchaseInvoice {
		accounting?: PurchaseInvoiceAccountingDetails;

		/** The accounting cost code. */
		accounting_cost?: string | null;

		/**
		 * DEPRECATED - Use the allowance_charges array.
		 * Type: double
		 */
		allowance_charge?: number | null;
		allowance_charges?: Array<PurchaseInvoiceAllowanceCharge>;

		/**
		 * DEPRECATED - Use amount_including_tax.
		 * Type: double
		 */
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

		/**
		 * The id of the LegalEntity the invoice was received for.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		legal_entity_id?: string | null;

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

		/**
		 * DEPRECATED - Use the allowance_charges array.
		 * Type: double
		 */
		allowance_charge: FormControl<number | null | undefined>,

		/**
		 * DEPRECATED - Use amount_including_tax.
		 * Type: double
		 */
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

		/**
		 * The id of the LegalEntity the invoice was received for.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		legal_entity_id: FormControl<string | null | undefined>,

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
			legal_entity_id: new FormControl<string | null | undefined>(undefined),
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

		/**
		 * The amount excluding tax.
		 * Type: double
		 */
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

		/**
		 * The amount excluding tax.
		 * Type: double
		 */
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

	export enum PurchaseInvoiceDocument_type { invoice = 'invoice' }

	export interface PurchaseInvoiceInvoiceLine {
		accounting?: PurchaseInvoiceAccountingDetails;

		/**
		 * DEPRECATED - use allowance_charges.
		 * Type: double
		 */
		allowance_charge?: number | null;
		allowance_charge_array?: Array<PurchaseInvoiceInvoiceLineAllowanceCharge>;

		/** Deprecated. */
		allowance_charges?: Array<number>;

		/**
		 * The amount excluding Tax. This is equal to quantity x price_amount + ∑ allowance_charges.
		 * Type: double
		 */
		amount_excluding_tax?: number | null;

		/**
		 * DEPRECATED - use amount_excluding_tax. The amount excluding VAT.
		 * Type: double
		 */
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

		/**
		 * DEPRECATED - use allowance_charges.
		 * Type: double
		 */
		allowance_charge: FormControl<number | null | undefined>,

		/**
		 * The amount excluding Tax. This is equal to quantity x price_amount + ∑ allowance_charges.
		 * Type: double
		 */
		amount_excluding_tax: FormControl<number | null | undefined>,

		/**
		 * DEPRECATED - use amount_excluding_tax. The amount excluding VAT.
		 * Type: double
		 */
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

		/**
		 * The amount of the allowance or charge.
		 * Type: double
		 */
		amount?: number | null;

		/** The reason for the allowance or charge. */
		reason?: string | null;
	}
	export interface PurchaseInvoiceInvoiceLineAllowanceChargeFormProperties {

		/**
		 * The amount of the allowance or charge.
		 * Type: double
		 */
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

		/**
		 * The amount of VAT for the invoice line.
		 * Type: double
		 */
		amount?: number | null;

		/** The ISO 3166 country of the VAT for the invoice line. */
		country?: string | null;

		/**
		 * The percentage of VAT for the invoice line.
		 * Type: double
		 */
		percentage?: number | null;
	}
	export interface PurchaseInvoiceInvoiceLineVatFormProperties {

		/**
		 * The amount of VAT for the invoice line.
		 * Type: double
		 */
		amount: FormControl<number | null | undefined>,

		/** The ISO 3166 country of the VAT for the invoice line. */
		country: FormControl<string | null | undefined>,

		/**
		 * The percentage of VAT for the invoice line.
		 * Type: double
		 */
		percentage: FormControl<number | null | undefined>,
	}
	export function CreatePurchaseInvoiceInvoiceLineVatFormGroup() {
		return new FormGroup<PurchaseInvoiceInvoiceLineVatFormProperties>({
			amount: new FormControl<number | null | undefined>(undefined),
			country: new FormControl<string | null | undefined>(undefined),
			percentage: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum PurchaseInvoiceInvoice_type { invoice = 'invoice', creditnote = 'creditnote', correctioninvoice = 'correctioninvoice' }

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

	export enum PurchaseInvoicePaymentMeansType { BankPaymentMean = 'BankPaymentMean', DirectDebitPaymentMean = 'DirectDebitPaymentMean', CardPaymentMean = 'CardPaymentMean', NppPaymentMean = 'NppPaymentMean', SeBankGiroPaymentMean = 'SeBankGiroPaymentMean', SePlusgiroPaymentMean = 'SePlusgiroPaymentMean', SgCardPaymentMean = 'SgCardPaymentMean', SgGiroPaymentMean = 'SgGiroPaymentMean', SgPaynowPaymentMean = 'SgPaynowPaymentMean', CreditTransferPaymentMean = 'CreditTransferPaymentMean', CreditCardPaymentMean = 'CreditCardPaymentMean', SeBankgiroPaymentMean = 'SeBankgiroPaymentMean', AunzNppPayidPaymentMean = 'AunzNppPayidPaymentMean', OnlinePaymentServicePaymentMean = 'OnlinePaymentServicePaymentMean', StandingAgreementPaymentMean = 'StandingAgreementPaymentMean', AunzNppPaytoPaymentMean = 'AunzNppPaytoPaymentMean', AunzBpayPaymentMean = 'AunzBpayPaymentMean', AunzPostbillpayPaymentMean = 'AunzPostbillpayPaymentMean', AunzUriPaymentMean = 'AunzUriPaymentMean' }

	export enum PurchaseInvoiceSource { peppol = 'peppol', script = 'script', supplier = 'supplier', email = 'email' }

	export interface PurchaseInvoiceTaxSubtotal {

		/**
		 * The amount excluding tax.
		 * Type: double
		 */
		amount_excluding_tax?: number | null;

		/** DEPRECATED - use amount_excluding_tax. */
		amount_excluding_vat?: string | null;
		tax?: PurchaseInvoiceTax;

		/** DEPRECATED - Use tax. */
		vat?: PurchaseInvoiceVat;
	}
	export interface PurchaseInvoiceTaxSubtotalFormProperties {

		/**
		 * The amount excluding tax.
		 * Type: double
		 */
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

		/**
		 * The total invoice amount payable including tax.
		 * Type: double
		 */
		payable?: number | null;

		/**
		 * The amount already paid.
		 * Type: double
		 */
		prepaid?: number | null;

		/**
		 * The difference between the payable amount and the total invoice amount including tax.
		 * Type: double
		 */
		rounding?: number | null;

		/**
		 * The total invoice amount, including tax. This is equal to the sum of the invoice_lines (amount_excluding_tax + tax.amount) and the allowances and charges.
		 * Type: double
		 */
		total?: number | null;
	}
	export interface PurchaseInvoiceDocumentTotalsFormProperties {

		/**
		 * The total invoice amount payable including tax.
		 * Type: double
		 */
		payable: FormControl<number | null | undefined>,

		/**
		 * The amount already paid.
		 * Type: double
		 */
		prepaid: FormControl<number | null | undefined>,

		/**
		 * The difference between the payable amount and the total invoice amount including tax.
		 * Type: double
		 */
		rounding: FormControl<number | null | undefined>,

		/**
		 * The total invoice amount, including tax. This is equal to the sum of the invoice_lines (amount_excluding_tax + tax.amount) and the allowances and charges.
		 * Type: double
		 */
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

		/**
		 * The quantity of the item. Can have up to digits.
		 * Type: double
		 */
		quantity?: number | null;

		/** The unit code of the quantity. */
		unit_code?: string | null;
	}
	export interface PurchaseInvoiceInvoiceLineItemFormProperties {

		/**
		 * The quantity of the item. Can have up to digits.
		 * Type: double
		 */
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

		/**
		 * The number of items the price is for. Can have up to digits.
		 * Type: double
		 */
		base_quantity?: number | null;

		/**
		 * The price for one item, excluding VAT. Can have up to digits.
		 * Type: double
		 */
		price_amount?: number | null;
	}
	export interface PurchaseInvoiceInvoiceLinePriceFormProperties {

		/**
		 * The number of items the price is for. Can have up to digits.
		 * Type: double
		 */
		base_quantity: FormControl<number | null | undefined>,

		/**
		 * The price for one item, excluding VAT. Can have up to digits.
		 * Type: double
		 */
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

		/**
		 * The tax amount.
		 * Type: double
		 */
		amount?: number | null;

		/** The tax category. */
		category?: TaxCategory | null;

		/** Deprecated. The tax category code. */
		category_code?: string | null;

		/** The tax country. */
		country?: string | null;

		/**
		 * The tax percentage.
		 * Type: double
		 */
		percentage?: number | null;

		/** The tax type. */
		type?: PurchaseInvoiceTaxTaxType | null;
	}
	export interface PurchaseInvoiceTaxTaxFormProperties {

		/**
		 * The tax amount.
		 * Type: double
		 */
		amount: FormControl<number | null | undefined>,

		/** The tax category. */
		category: FormControl<TaxCategory | null | undefined>,

		/** Deprecated. The tax category code. */
		category_code: FormControl<string | null | undefined>,

		/** The tax country. */
		country: FormControl<string | null | undefined>,

		/**
		 * The tax percentage.
		 * Type: double
		 */
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

	export enum PurchaseInvoiceTaxTaxType { VAT = 'VAT', GST = 'GST' }

	export interface PurchaseInvoiceUbl {

		/** Used for accountants. The id you specified for the organization. */
		external_key?: string | null;

		/** Used for the embedded portal retrieval service. The external_user_id you provided when the ShopAccount was created. */
		external_user_id?: string | null;

		/** The GUID of the invoice */
		guid?: string | null;

		/**
		 * The id of the LegalEntity the invoice was received for.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		legal_entity_id?: string | null;

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

		/**
		 * The id of the LegalEntity the invoice was received for.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		legal_entity_id: FormControl<string | null | undefined>,

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
			legal_entity_id: new FormControl<string | null | undefined>(undefined),
			system_generated_primary_image: new FormControl<boolean | null | undefined>(undefined),
			tax_system: new FormControl<string | null | undefined>(undefined),
			ubl: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Rea {

		/**
		 * The captial for the company.
		 * Type: double
		 */
		capital?: number | null;

		/**
		 * The identifier.
		 * Min length: 2
		 * Max length: 20
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

		/**
		 * The captial for the company.
		 * Type: double
		 */
		capital: FormControl<number | null | undefined>,

		/**
		 * The identifier.
		 * Min length: 2
		 * Max length: 20
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

	export enum ReaLiquidation_status { LN = 'LN', LS = 'LS' }

	export enum ReaPartners { SU = 'SU', SM = 'SM' }

	export enum ReaProvince { AG = 'AG', AL = 'AL', AN = 'AN', AO = 'AO', AQ = 'AQ', AR = 'AR', AP = 'AP', AT = 'AT', AV = 'AV', BA = 'BA', BT = 'BT', BL = 'BL', BN = 'BN', BG = 'BG', BI = 'BI', BO = 'BO', BZ = 'BZ', BS = 'BS', BR = 'BR', CA = 'CA', CL = 'CL', CB = 'CB', CI = 'CI', CE = 'CE', CT = 'CT', CZ = 'CZ', CH = 'CH', CO = 'CO', CS = 'CS', CR = 'CR', KR = 'KR', CN = 'CN', EN = 'EN', FM = 'FM', FE = 'FE', FI = 'FI', FG = 'FG', FC = 'FC', FR = 'FR', GE = 'GE', GO = 'GO', GR = 'GR', IM = 'IM', IS = 'IS', SP = 'SP', LT = 'LT', LE = 'LE', LC = 'LC', LI = 'LI', LO = 'LO', LU = 'LU', MC = 'MC', MN = 'MN', MS = 'MS', MT = 'MT', VS = 'VS', ME = 'ME', MI = 'MI', MO = 'MO', MB = 'MB', NA = 'NA', NO = 'NO', NU = 'NU', OG = 'OG', OT = 'OT', OR = 'OR', PD = 'PD', PA = 'PA', PR = 'PR', PV = 'PV', PG = 'PG', PU = 'PU', PE = 'PE', PC = 'PC', PI = 'PI', PT = 'PT', PN = 'PN', PZ = 'PZ', PO = 'PO', RG = 'RG', RA = 'RA', RC = 'RC', RE = 'RE', RI = 'RI', RN = 'RN', RO = 'RO', SA = 'SA', SS = 'SS', SV = 'SV', SI = 'SI', SR = 'SR', SO = 'SO', TA = 'TA', TE = 'TE', TR = 'TR', TO = 'TO', TP = 'TP', TN = 'TN', TV = 'TV', TS = 'TS', UD = 'UD', VA = 'VA', VE = 'VE', VB = 'VB', VC = 'VC', VR = 'VR', VV = 'VV', VI = 'VI', VT = 'VT' }

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

	export enum ReceivedDocumentCreateParseStrategy { rfc822 = 'rfc822' }


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
		 * @param {string} id legal_entity id
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {void} 
		 */
		Delete_legal_entity(id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'legal_entities/' + id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get LegalEntity
		 * Get a specific LegalEntity.
		 * Get legal_entities/{id}
		 * @param {string} id legal_entity id
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {LegalEntity} Success
		 */
		Get_legal_entity(id: string): Observable<LegalEntity> {
			return this.http.get<LegalEntity>(this.baseUri + 'legal_entities/' + id, {});
		}

		/**
		 * Update LegalEntity
		 * Update a specific LegalEntity.
		 * Patch legal_entities/{id}
		 * @param {string} id legal_entity id
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @param {LegalEntityUpdate} requestBody LegalEntity updates
		 * @return {LegalEntity} Success
		 */
		Update_legal_entity(id: string, requestBody: LegalEntityUpdate): Observable<LegalEntity> {
			return this.http.patch<LegalEntity>(this.baseUri + 'legal_entities/' + id, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Create a new AdditionalTaxIdentifier
		 * Create a new AdditionalTaxIdentifier. An AdditionalTaxIdentifier is a seconday tax identifier that is used inside the EU when sending invoices to consumers. In that case, the VAT of the receiving country is used and if the sender has a local VAT identifier, that is used to identifiy the sender, instead of the sender's origin country VAT number. To use these identifiers, use the invoice.consumerTaxMode = true property.
		 * Post legal_entities/{legal_entity_id}/additional_tax_identifiers
		 * @param {string} legal_entity_id The id of the LegalEntity for which to create the AdditionalTaxIdentifier
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @param {AdditionalTaxIdentifierCreate} requestBody AdditionalTaxIdentifier to create
		 * @return {AdditionalTaxIdentifier} Success
		 */
		Create_additional_tax_identifier(legal_entity_id: string, requestBody: AdditionalTaxIdentifierCreate): Observable<AdditionalTaxIdentifier> {
			return this.http.post<AdditionalTaxIdentifier>(this.baseUri + 'legal_entities/' + legal_entity_id + '/additional_tax_identifiers', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete AdditionalTaxIdentifier
		 * Delete an AdditionalTaxIdentifier
		 * Delete legal_entities/{legal_entity_id}/additional_tax_identifiers/{id}
		 * @param {string} legal_entity_id The id of the LegalEntity the AdditionalTaxIdentifier belongs to
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @param {string} id The id of the AdditionalTaxIdentifier
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {void} 
		 */
		Delete_additional_tax_identifier(legal_entity_id: string, id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'legal_entities/' + legal_entity_id + '/additional_tax_identifiers/' + id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get AdditionalTaxIdentifier
		 * Get an AdditionalTaxIdentifier
		 * Get legal_entities/{legal_entity_id}/additional_tax_identifiers/{id}
		 * @param {string} legal_entity_id The id of the LegalEntity the AdditionalTaxIdentifier belongs to
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @param {string} id The id of the AdditionalTaxIdentifier
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {AdditionalTaxIdentifier} Success
		 */
		Get_additional_tax_identifier(legal_entity_id: string, id: string): Observable<AdditionalTaxIdentifier> {
			return this.http.get<AdditionalTaxIdentifier>(this.baseUri + 'legal_entities/' + legal_entity_id + '/additional_tax_identifiers/' + id, {});
		}

		/**
		 * Update AdditionalTaxIdentifier
		 * Update an AdditionalTaxIdentifier
		 * Patch legal_entities/{legal_entity_id}/additional_tax_identifiers/{id}
		 * @param {string} legal_entity_id The id of the LegalEntity the AdditionalTaxIdentifier belongs to
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @param {string} id The id of the AdditionalTaxIdentifier to be updated
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @param {AdditionalTaxIdentifierUpdate} requestBody AdditionalTaxIdentifier to update
		 * @return {AdditionalTaxIdentifier} Success
		 */
		Update_additional_tax_identifier(legal_entity_id: string, id: string, requestBody: AdditionalTaxIdentifierUpdate): Observable<AdditionalTaxIdentifier> {
			return this.http.patch<AdditionalTaxIdentifier>(this.baseUri + 'legal_entities/' + legal_entity_id + '/additional_tax_identifiers/' + id, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Create a new Administration
		 * Deprecated. Create a new Administration. An Administration is an email destination for purchase invoices.
		 * Post legal_entities/{legal_entity_id}/administrations
		 * @param {string} legal_entity_id The id of the LegalEntity for which to create the Administration
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @param {AdministrationCreate} requestBody Administration to create
		 * @return {Administration} Success
		 */
		Create_administration(legal_entity_id: string, requestBody: AdministrationCreate): Observable<Administration> {
			return this.http.post<Administration>(this.baseUri + 'legal_entities/' + legal_entity_id + '/administrations', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete Administration
		 * Deprecated. Delete an Administration
		 * Delete legal_entities/{legal_entity_id}/administrations/{id}
		 * @param {string} legal_entity_id The id of the LegalEntity the Administration belongs to
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @param {string} id The id of the Administration
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {void} 
		 */
		Delete_administration(legal_entity_id: string, id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'legal_entities/' + legal_entity_id + '/administrations/' + id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Administration
		 * Deprecated. Get an Administration
		 * Get legal_entities/{legal_entity_id}/administrations/{id}
		 * @param {string} legal_entity_id The id of the LegalEntity the Administration belongs to
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @param {string} id The id of the Administration
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {Administration} Success
		 */
		Get_administration(legal_entity_id: string, id: string): Observable<Administration> {
			return this.http.get<Administration>(this.baseUri + 'legal_entities/' + legal_entity_id + '/administrations/' + id, {});
		}

		/**
		 * Update Administration
		 * Deprecated. Update an Administration
		 * Patch legal_entities/{legal_entity_id}/administrations/{id}
		 * @param {string} legal_entity_id The id of the LegalEntity the Administration belongs to
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @param {string} id The id of the Administration to be updated
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @param {AdministrationUpdate} requestBody Administration to update
		 * @return {Administration} Success
		 */
		Update_administration(legal_entity_id: string, id: string, requestBody: AdministrationUpdate): Observable<Administration> {
			return this.http.patch<Administration>(this.baseUri + 'legal_entities/' + legal_entity_id + '/administrations/' + id, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Create a new PeppolIdentifier
		 * Create a brand new new PeppolIdentifier. For <<_sg_singapore>>, special rules apply.
		 * Post legal_entities/{legal_entity_id}/peppol_identifiers
		 * @param {string} legal_entity_id The id of the LegalEntity for which to create the PeppolIdentifier
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @param {PeppolIdentifierCreate} requestBody PeppolIdentifier to create
		 * @return {PeppolIdentifier} Success
		 */
		Create_peppol_identifier(legal_entity_id: string, requestBody: PeppolIdentifierCreate): Observable<PeppolIdentifier> {
			return this.http.post<PeppolIdentifier>(this.baseUri + 'legal_entities/' + legal_entity_id + '/peppol_identifiers', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete PeppolIdentifier
		 * Delete a PeppolIdentifier.
		 * Delete legal_entities/{legal_entity_id}/peppol_identifiers/{superscheme}/{scheme}/{identifier}
		 * @param {string} legal_entity_id The id of the LegalEntity this PeppolIdentifier belongs to
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @param {string} superscheme The superscheme of the identifier. Should always be "iso6523-actorid-upis".
		 * @param {string} scheme PEPPOL identifier scheme id, e.g. "DE:VAT". For a full list see <<_receiver_identifiers_list>>.
		 * @param {string} identifier PEPPOL identifier
		 * @return {void} 
		 */
		Delete_peppol_identifier(legal_entity_id: string, superscheme: string, scheme: string, identifier: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'legal_entities/' + legal_entity_id + '/peppol_identifiers/' + (superscheme == null ? '' : encodeURIComponent(superscheme)) + '/' + (scheme == null ? '' : encodeURIComponent(scheme)) + '/' + (identifier == null ? '' : encodeURIComponent(identifier)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Receive a new Document
		 * Receive a new Document.
		 * Post legal_entities/{legal_entity_id}/received_documents
		 * @param {string} legal_entity_id The id of the LegalEntity for which the document was received.
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @param {ReceivedDocumentCreate} requestBody Received document to process.
		 * @return {ReceivedDocument} Success
		 */
		Receive_document(legal_entity_id: string, requestBody: ReceivedDocumentCreate): Observable<ReceivedDocument> {
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

	export enum Show_document_submission_evidenceEvidence_type { sending = 'sending', clearing = 'clearing' }

	export enum Get_invoice_ublPackaging { json = 'json', ubl = 'ubl', original = 'original' }

	export enum Get_invoice_ubl_versionedPackage_version { si11 = 'si11', si12 = 'si12', si20 = 'si20', aunz = 'aunz', sg = 'sg', jp = 'jp', en16931 = 'en16931', original = 'original' }

	export enum Get_received_documentSyntax { json = 'json', original = 'original' }

}

