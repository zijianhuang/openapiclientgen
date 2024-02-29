import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** The representation of a bank account. */
	export interface Account {

		/** The date & time at which the account object was created. */
		created?: Date | null;

		/** The Account IBAN */
		iban?: string | null;

		/** The ID of this Account, used to refer to this account in other API calls. */
		id?: string | null;

		/** The ASPSP associated with this account. */
		institution_id?: string | null;

		/** The date & time at which the account object was last accessed. */
		last_accessed?: Date | null;

		/** The name of the account owner. */
		owner_name?: string | null;

		/** The processing status of this account. */
		status?: AccountStatusEnum;
	}

	/** The representation of a bank account. */
	export interface AccountFormProperties {

		/** The date & time at which the account object was created. */
		created: FormControl<Date | null | undefined>,

		/** The Account IBAN */
		iban: FormControl<string | null | undefined>,

		/** The ID of this Account, used to refer to this account in other API calls. */
		id: FormControl<string | null | undefined>,

		/** The ASPSP associated with this account. */
		institution_id: FormControl<string | null | undefined>,

		/** The date & time at which the account object was last accessed. */
		last_accessed: FormControl<Date | null | undefined>,

		/** The name of the account owner. */
		owner_name: FormControl<string | null | undefined>,

		/** The processing status of this account. */
		status: FormControl<AccountStatusEnum | null | undefined>,
	}
	export function CreateAccountFormGroup() {
		return new FormGroup<AccountFormProperties>({
			created: new FormControl<Date | null | undefined>(undefined),
			iban: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			institution_id: new FormControl<string | null | undefined>(undefined),
			last_accessed: new FormControl<Date | null | undefined>(undefined),
			owner_name: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<AccountStatusEnum | null | undefined>(undefined),
		});

	}

	export enum AccountStatusEnum { DISCOVERED = 'DISCOVERED', PROCESSING = 'PROCESSING', READY = 'READY', ERROR = 'ERROR', SUSPENDED = 'SUSPENDED' }


	/**
	 * * `AT` - Austria
	 * * `BE` - Belgium
	 * * `BG` - Bulgaria
	 * * `HR` - Croatia
	 * * `CY` - Cyprus
	 * * `CZ` - Czechia
	 * * `DK` - Denmark
	 * * `EE` - Estonia
	 * * `FI` - Finland
	 * * `FR` - France
	 * * `DE` - Germany
	 * * `GR` - Greece
	 * * `HU` - Hungary
	 * * `IS` - Iceland
	 * * `IE` - Ireland
	 * * `IT` - Italy
	 * * `LV` - Latvia
	 * * `LI` - Liechtenstein
	 * * `LT` - Lithuania
	 * * `LU` - Luxembourg
	 * * `MT` - Malta
	 * * `NL` - Netherlands
	 * * `NO` - Norway
	 * * `PL` - Poland
	 * * `PT` - Portugal
	 * * `RO` - Romania
	 * * `SK` - Slovakia
	 * * `SI` - Slovenia
	 * * `ES` - Spain
	 * * `SE` - Sweden
	 * * `GB` - United Kingdom
	 * * `US` - United States of America
	 */
	export enum AddressCountryEnum { AT = 'AT', BE = 'BE', BG = 'BG', HR = 'HR', CY = 'CY', CZ = 'CZ', DK = 'DK', EE = 'EE', FI = 'FI', FR = 'FR', DE = 'DE', GR = 'GR', HU = 'HU', IS = 'IS', IE = 'IE', IT = 'IT', LV = 'LV', LI = 'LI', LT = 'LT', LU = 'LU', MT = 'MT', NL = 'NL', NO = 'NO', PL = 'PL', PT = 'PT', RO = 'RO', SK = 'SK', SI = 'SI', ES = 'ES', SE = 'SE', GB = 'GB', US = 'US' }


	/**
	 * * `AT` - Austria
	 * * `BE` - Belgium
	 * * `BG` - Bulgaria
	 * * `HR` - Croatia
	 * * `CY` - Cyprus
	 * * `CZ` - Czechia
	 * * `DK` - Denmark
	 * * `EE` - Estonia
	 * * `FI` - Finland
	 * * `FR` - France
	 * * `DE` - Germany
	 * * `GR` - Greece
	 * * `HU` - Hungary
	 * * `IS` - Iceland
	 * * `IE` - Ireland
	 * * `IT` - Italy
	 * * `LV` - Latvia
	 * * `LI` - Liechtenstein
	 * * `LT` - Lithuania
	 * * `LU` - Luxembourg
	 * * `MT` - Malta
	 * * `NL` - Netherlands
	 * * `NO` - Norway
	 * * `PL` - Poland
	 * * `PT` - Portugal
	 * * `RO` - Romania
	 * * `SK` - Slovakia
	 * * `SI` - Slovenia
	 * * `ES` - Spain
	 * * `SE` - Sweden
	 * * `GB` - United Kingdom
	 * * `US` - United States of America
	 */
	export enum CountryEnum { AT = 'AT', BE = 'BE', BG = 'BG', HR = 'HR', CY = 'CY', CZ = 'CZ', DK = 'DK', EE = 'EE', FI = 'FI', FR = 'FR', DE = 'DE', GR = 'GR', HU = 'HU', IS = 'IS', IE = 'IE', IT = 'IT', LV = 'LV', LI = 'LI', LT = 'LT', LU = 'LU', MT = 'MT', NL = 'NL', NO = 'NO', PL = 'PL', PT = 'PT', RO = 'RO', SK = 'SK', SI = 'SI', ES = 'ES', SE = 'SE', GB = 'GB', US = 'US' }


	/** Creditor account read serializer. */
	export interface CreditorAccount {

		/**
		 * Creditor account type identifier
		 * Required
		 * Max length: 128
		 */
		account: string;

		/**
		 * Creditor account address country
		 * Max length: 2
		 */
		address_country?: string | null;

		/**
		 * Creditor account currency
		 * Required
		 * Max length: 3
		 */
		currency: string;

		/** Unique entry ID */
		id?: string | null;

		/**
		 * Creditor account name
		 * Required
		 * Max length: 70
		 */
		name: string;

		/**
		 * Creditor account type
		 * * `IBAN` - IBAN
		 * * `SCAN` - SortCodeAccountNumber
		 */
		type?: TypeEnum;
	}

	/** Creditor account read serializer. */
	export interface CreditorAccountFormProperties {

		/**
		 * Creditor account type identifier
		 * Required
		 * Max length: 128
		 */
		account: FormControl<string | null | undefined>,

		/**
		 * Creditor account address country
		 * Max length: 2
		 */
		address_country: FormControl<string | null | undefined>,

		/**
		 * Creditor account currency
		 * Required
		 * Max length: 3
		 */
		currency: FormControl<string | null | undefined>,

		/** Unique entry ID */
		id: FormControl<string | null | undefined>,

		/**
		 * Creditor account name
		 * Required
		 * Max length: 70
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Creditor account type
		 * * `IBAN` - IBAN
		 * * `SCAN` - SortCodeAccountNumber
		 */
		type: FormControl<TypeEnum | null | undefined>,
	}
	export function CreateCreditorAccountFormGroup() {
		return new FormGroup<CreditorAccountFormProperties>({
			account: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128)]),
			address_country: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2)]),
			currency: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(3)]),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(70)]),
			type: new FormControl<TypeEnum | null | undefined>(undefined),
		});

	}


	/**
	 * * `IBAN` - IBAN
	 * * `SCAN` - SortCodeAccountNumber
	 */
	export enum TypeEnum { IBAN = 'IBAN', SCAN = 'SCAN' }


	/** Creditor account write serializer. */
	export interface CreditorAccountWrite {

		/**
		 * Creditor account type identifier
		 * Required
		 * Max length: 128
		 */
		account: string;

		/**
		 * * `AT` - Austria
		 * * `BE` - Belgium
		 * * `BG` - Bulgaria
		 * * `HR` - Croatia
		 * * `CY` - Cyprus
		 * * `CZ` - Czechia
		 * * `DK` - Denmark
		 * * `EE` - Estonia
		 * * `FI` - Finland
		 * * `FR` - France
		 * * `DE` - Germany
		 * * `GR` - Greece
		 * * `HU` - Hungary
		 * * `IS` - Iceland
		 * * `IE` - Ireland
		 * * `IT` - Italy
		 * * `LV` - Latvia
		 * * `LI` - Liechtenstein
		 * * `LT` - Lithuania
		 * * `LU` - Luxembourg
		 * * `MT` - Malta
		 * * `NL` - Netherlands
		 * * `NO` - Norway
		 * * `PL` - Poland
		 * * `PT` - Portugal
		 * * `RO` - Romania
		 * * `SK` - Slovakia
		 * * `SI` - Slovenia
		 * * `ES` - Spain
		 * * `SE` - Sweden
		 * * `GB` - United Kingdom
		 * * `US` - United States of America
		 */
		address_country?: AddressCountryEnum | null;

		/**
		 * Creditor account address street
		 * Max length: 140
		 */
		address_street?: string | null;

		/**
		 * Creditor account BICFI Identifier
		 * Max length: 128
		 */
		agent?: string | null;

		/**
		 * Creditor account agent name
		 * Max length: 140
		 */
		agent_name?: string | null;

		/**
		 * Creditor account currency
		 * Required
		 * Max length: 3
		 */
		currency: string;

		/** Unique entry ID */
		id?: string | null;

		/** an Institution ID for this CreditorAccount */
		institution_id?: string | null;

		/**
		 * Creditor account name
		 * Required
		 * Max length: 70
		 */
		name: string;

		/**
		 * Creditor account address post code
		 * Max length: 30
		 */
		post_code?: string | null;

		/**
		 * Creditor account type
		 * * `IBAN` - IBAN
		 * * `SCAN` - SortCodeAccountNumber
		 */
		type?: TypeEnum;
	}

	/** Creditor account write serializer. */
	export interface CreditorAccountWriteFormProperties {

		/**
		 * Creditor account type identifier
		 * Required
		 * Max length: 128
		 */
		account: FormControl<string | null | undefined>,

		/**
		 * * `AT` - Austria
		 * * `BE` - Belgium
		 * * `BG` - Bulgaria
		 * * `HR` - Croatia
		 * * `CY` - Cyprus
		 * * `CZ` - Czechia
		 * * `DK` - Denmark
		 * * `EE` - Estonia
		 * * `FI` - Finland
		 * * `FR` - France
		 * * `DE` - Germany
		 * * `GR` - Greece
		 * * `HU` - Hungary
		 * * `IS` - Iceland
		 * * `IE` - Ireland
		 * * `IT` - Italy
		 * * `LV` - Latvia
		 * * `LI` - Liechtenstein
		 * * `LT` - Lithuania
		 * * `LU` - Luxembourg
		 * * `MT` - Malta
		 * * `NL` - Netherlands
		 * * `NO` - Norway
		 * * `PL` - Poland
		 * * `PT` - Portugal
		 * * `RO` - Romania
		 * * `SK` - Slovakia
		 * * `SI` - Slovenia
		 * * `ES` - Spain
		 * * `SE` - Sweden
		 * * `GB` - United Kingdom
		 * * `US` - United States of America
		 */
		address_country: FormControl<AddressCountryEnum | null | undefined>,

		/**
		 * Creditor account address street
		 * Max length: 140
		 */
		address_street: FormControl<string | null | undefined>,

		/**
		 * Creditor account BICFI Identifier
		 * Max length: 128
		 */
		agent: FormControl<string | null | undefined>,

		/**
		 * Creditor account agent name
		 * Max length: 140
		 */
		agent_name: FormControl<string | null | undefined>,

		/**
		 * Creditor account currency
		 * Required
		 * Max length: 3
		 */
		currency: FormControl<string | null | undefined>,

		/** Unique entry ID */
		id: FormControl<string | null | undefined>,

		/** an Institution ID for this CreditorAccount */
		institution_id: FormControl<string | null | undefined>,

		/**
		 * Creditor account name
		 * Required
		 * Max length: 70
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Creditor account address post code
		 * Max length: 30
		 */
		post_code: FormControl<string | null | undefined>,

		/**
		 * Creditor account type
		 * * `IBAN` - IBAN
		 * * `SCAN` - SortCodeAccountNumber
		 */
		type: FormControl<TypeEnum | null | undefined>,
	}
	export function CreateCreditorAccountWriteFormGroup() {
		return new FormGroup<CreditorAccountWriteFormProperties>({
			account: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128)]),
			address_country: new FormControl<AddressCountryEnum | null | undefined>(undefined),
			address_street: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(140)]),
			agent: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128)]),
			agent_name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(140)]),
			currency: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(3)]),
			id: new FormControl<string | null | undefined>(undefined),
			institution_id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(70)]),
			post_code: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(30)]),
			type: new FormControl<TypeEnum | null | undefined>(undefined),
		});

	}


	/** Creditor account write serializer. */
	export interface CreditorAccountWriteRequest {

		/**
		 * Creditor account type identifier
		 * Required
		 * Min length: 1
		 * Max length: 128
		 */
		account: string;

		/**
		 * * `AT` - Austria
		 * * `BE` - Belgium
		 * * `BG` - Bulgaria
		 * * `HR` - Croatia
		 * * `CY` - Cyprus
		 * * `CZ` - Czechia
		 * * `DK` - Denmark
		 * * `EE` - Estonia
		 * * `FI` - Finland
		 * * `FR` - France
		 * * `DE` - Germany
		 * * `GR` - Greece
		 * * `HU` - Hungary
		 * * `IS` - Iceland
		 * * `IE` - Ireland
		 * * `IT` - Italy
		 * * `LV` - Latvia
		 * * `LI` - Liechtenstein
		 * * `LT` - Lithuania
		 * * `LU` - Luxembourg
		 * * `MT` - Malta
		 * * `NL` - Netherlands
		 * * `NO` - Norway
		 * * `PL` - Poland
		 * * `PT` - Portugal
		 * * `RO` - Romania
		 * * `SK` - Slovakia
		 * * `SI` - Slovenia
		 * * `ES` - Spain
		 * * `SE` - Sweden
		 * * `GB` - United Kingdom
		 * * `US` - United States of America
		 */
		address_country?: AddressCountryEnum | null;

		/**
		 * Creditor account address street
		 * Min length: 1
		 * Max length: 140
		 */
		address_street?: string | null;

		/**
		 * Creditor account BICFI Identifier
		 * Min length: 1
		 * Max length: 128
		 */
		agent?: string | null;

		/**
		 * Creditor account agent name
		 * Min length: 1
		 * Max length: 140
		 */
		agent_name?: string | null;

		/**
		 * Creditor account currency
		 * Required
		 * Min length: 1
		 * Max length: 3
		 */
		currency: string;

		/**
		 * an Institution ID for this CreditorAccount
		 * Min length: 1
		 */
		institution_id?: string | null;

		/**
		 * Creditor account name
		 * Required
		 * Min length: 1
		 * Max length: 70
		 */
		name: string;

		/**
		 * Creditor account address post code
		 * Min length: 1
		 * Max length: 30
		 */
		post_code?: string | null;

		/**
		 * Creditor account type
		 * * `IBAN` - IBAN
		 * * `SCAN` - SortCodeAccountNumber
		 */
		type?: TypeEnum;
	}

	/** Creditor account write serializer. */
	export interface CreditorAccountWriteRequestFormProperties {

		/**
		 * Creditor account type identifier
		 * Required
		 * Min length: 1
		 * Max length: 128
		 */
		account: FormControl<string | null | undefined>,

		/**
		 * * `AT` - Austria
		 * * `BE` - Belgium
		 * * `BG` - Bulgaria
		 * * `HR` - Croatia
		 * * `CY` - Cyprus
		 * * `CZ` - Czechia
		 * * `DK` - Denmark
		 * * `EE` - Estonia
		 * * `FI` - Finland
		 * * `FR` - France
		 * * `DE` - Germany
		 * * `GR` - Greece
		 * * `HU` - Hungary
		 * * `IS` - Iceland
		 * * `IE` - Ireland
		 * * `IT` - Italy
		 * * `LV` - Latvia
		 * * `LI` - Liechtenstein
		 * * `LT` - Lithuania
		 * * `LU` - Luxembourg
		 * * `MT` - Malta
		 * * `NL` - Netherlands
		 * * `NO` - Norway
		 * * `PL` - Poland
		 * * `PT` - Portugal
		 * * `RO` - Romania
		 * * `SK` - Slovakia
		 * * `SI` - Slovenia
		 * * `ES` - Spain
		 * * `SE` - Sweden
		 * * `GB` - United Kingdom
		 * * `US` - United States of America
		 */
		address_country: FormControl<AddressCountryEnum | null | undefined>,

		/**
		 * Creditor account address street
		 * Min length: 1
		 * Max length: 140
		 */
		address_street: FormControl<string | null | undefined>,

		/**
		 * Creditor account BICFI Identifier
		 * Min length: 1
		 * Max length: 128
		 */
		agent: FormControl<string | null | undefined>,

		/**
		 * Creditor account agent name
		 * Min length: 1
		 * Max length: 140
		 */
		agent_name: FormControl<string | null | undefined>,

		/**
		 * Creditor account currency
		 * Required
		 * Min length: 1
		 * Max length: 3
		 */
		currency: FormControl<string | null | undefined>,

		/**
		 * an Institution ID for this CreditorAccount
		 * Min length: 1
		 */
		institution_id: FormControl<string | null | undefined>,

		/**
		 * Creditor account name
		 * Required
		 * Min length: 1
		 * Max length: 70
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Creditor account address post code
		 * Min length: 1
		 * Max length: 30
		 */
		post_code: FormControl<string | null | undefined>,

		/**
		 * Creditor account type
		 * * `IBAN` - IBAN
		 * * `SCAN` - SortCodeAccountNumber
		 */
		type: FormControl<TypeEnum | null | undefined>,
	}
	export function CreateCreditorAccountWriteRequestFormGroup() {
		return new FormGroup<CreditorAccountWriteRequestFormProperties>({
			account: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128)]),
			address_country: new FormControl<AddressCountryEnum | null | undefined>(undefined),
			address_street: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(140)]),
			agent: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128)]),
			agent_name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(140)]),
			currency: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(3)]),
			institution_id: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(70)]),
			post_code: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(30)]),
			type: new FormControl<TypeEnum | null | undefined>(undefined),
		});

	}


	/** Debtor account write serializer. */
	export interface DebtorAccountWrite {

		/**
		 * Debtor account type identifier
		 * Max length: 128
		 */
		account?: string | null;

		/**
		 * Debtor account address country
		 * Max length: 2
		 */
		address_country?: string | null;

		/**
		 * Debtor account address street
		 * Max length: 140
		 */
		address_street?: string | null;

		/**
		 * Debtor account currency
		 * Max length: 3
		 */
		currency?: string | null;

		/**
		 * Debtor account name
		 * Required
		 * Max length: 70
		 */
		name: string;

		/**
		 * Debtor account post code
		 * Max length: 30
		 */
		post_code?: string | null;

		/**
		 * Debtor account type
		 * * `IBAN` - IBAN
		 * * `SCAN` - SortCodeAccountNumber
		 */
		type?: TypeEnum;

		/**
		 * Debtor account type identifier
		 * Max length: 128
		 */
		type_number?: string | null;
	}

	/** Debtor account write serializer. */
	export interface DebtorAccountWriteFormProperties {

		/**
		 * Debtor account type identifier
		 * Max length: 128
		 */
		account: FormControl<string | null | undefined>,

		/**
		 * Debtor account address country
		 * Max length: 2
		 */
		address_country: FormControl<string | null | undefined>,

		/**
		 * Debtor account address street
		 * Max length: 140
		 */
		address_street: FormControl<string | null | undefined>,

		/**
		 * Debtor account currency
		 * Max length: 3
		 */
		currency: FormControl<string | null | undefined>,

		/**
		 * Debtor account name
		 * Required
		 * Max length: 70
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Debtor account post code
		 * Max length: 30
		 */
		post_code: FormControl<string | null | undefined>,

		/**
		 * Debtor account type
		 * * `IBAN` - IBAN
		 * * `SCAN` - SortCodeAccountNumber
		 */
		type: FormControl<TypeEnum | null | undefined>,

		/**
		 * Debtor account type identifier
		 * Max length: 128
		 */
		type_number: FormControl<string | null | undefined>,
	}
	export function CreateDebtorAccountWriteFormGroup() {
		return new FormGroup<DebtorAccountWriteFormProperties>({
			account: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128)]),
			address_country: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2)]),
			address_street: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(140)]),
			currency: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(3)]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(70)]),
			post_code: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(30)]),
			type: new FormControl<TypeEnum | null | undefined>(undefined),
			type_number: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128)]),
		});

	}


	/** Debtor account write serializer. */
	export interface DebtorAccountWriteRequest {

		/**
		 * Debtor account type identifier
		 * Min length: 1
		 * Max length: 128
		 */
		account?: string | null;

		/**
		 * Debtor account address country
		 * Min length: 1
		 * Max length: 2
		 */
		address_country?: string | null;

		/**
		 * Debtor account address street
		 * Min length: 1
		 * Max length: 140
		 */
		address_street?: string | null;

		/**
		 * Debtor account currency
		 * Min length: 1
		 * Max length: 3
		 */
		currency?: string | null;

		/**
		 * Debtor account name
		 * Required
		 * Min length: 1
		 * Max length: 70
		 */
		name: string;

		/**
		 * Debtor account post code
		 * Min length: 1
		 * Max length: 30
		 */
		post_code?: string | null;

		/**
		 * Debtor account type
		 * * `IBAN` - IBAN
		 * * `SCAN` - SortCodeAccountNumber
		 */
		type?: TypeEnum;

		/**
		 * Debtor account type identifier
		 * Min length: 1
		 * Max length: 128
		 */
		type_number?: string | null;
	}

	/** Debtor account write serializer. */
	export interface DebtorAccountWriteRequestFormProperties {

		/**
		 * Debtor account type identifier
		 * Min length: 1
		 * Max length: 128
		 */
		account: FormControl<string | null | undefined>,

		/**
		 * Debtor account address country
		 * Min length: 1
		 * Max length: 2
		 */
		address_country: FormControl<string | null | undefined>,

		/**
		 * Debtor account address street
		 * Min length: 1
		 * Max length: 140
		 */
		address_street: FormControl<string | null | undefined>,

		/**
		 * Debtor account currency
		 * Min length: 1
		 * Max length: 3
		 */
		currency: FormControl<string | null | undefined>,

		/**
		 * Debtor account name
		 * Required
		 * Min length: 1
		 * Max length: 70
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Debtor account post code
		 * Min length: 1
		 * Max length: 30
		 */
		post_code: FormControl<string | null | undefined>,

		/**
		 * Debtor account type
		 * * `IBAN` - IBAN
		 * * `SCAN` - SortCodeAccountNumber
		 */
		type: FormControl<TypeEnum | null | undefined>,

		/**
		 * Debtor account type identifier
		 * Min length: 1
		 * Max length: 128
		 */
		type_number: FormControl<string | null | undefined>,
	}
	export function CreateDebtorAccountWriteRequestFormGroup() {
		return new FormGroup<DebtorAccountWriteRequestFormProperties>({
			account: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128)]),
			address_country: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2)]),
			address_street: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(140)]),
			currency: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(3)]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(70)]),
			post_code: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(30)]),
			type: new FormControl<TypeEnum | null | undefined>(undefined),
			type_number: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128)]),
		});

	}


	/** Represents an end-user agreement. */
	export interface EndUserAgreement {

		/** The date & time at which the end user accepted the agreement. */
		accepted?: Date | null;

		/** Array containing one or several values of ['balances', 'details', 'transactions'] */
		access_scope?: Array<string>;

		/**
		 * Number of days from acceptance that the access can be used.
		 * Minimum: 1
		 * Maximum: 90
		 */
		access_valid_for_days?: number | null;

		/** The date & time at which the end user agreement was created. */
		created?: Date | null;

		/** The ID of this End User Agreement, used to refer to this end user agreement in other API calls. */
		id?: string | null;

		/**
		 * an Institution ID for this EUA
		 * Required
		 */
		institution_id: string;

		/**
		 * Maximum number of days of transaction data to retrieve.
		 * Minimum: 1
		 * Maximum: 730
		 */
		max_historical_days?: number | null;
	}

	/** Represents an end-user agreement. */
	export interface EndUserAgreementFormProperties {

		/** The date & time at which the end user accepted the agreement. */
		accepted: FormControl<Date | null | undefined>,

		/**
		 * Number of days from acceptance that the access can be used.
		 * Minimum: 1
		 * Maximum: 90
		 */
		access_valid_for_days: FormControl<number | null | undefined>,

		/** The date & time at which the end user agreement was created. */
		created: FormControl<Date | null | undefined>,

		/** The ID of this End User Agreement, used to refer to this end user agreement in other API calls. */
		id: FormControl<string | null | undefined>,

		/**
		 * an Institution ID for this EUA
		 * Required
		 */
		institution_id: FormControl<string | null | undefined>,

		/**
		 * Maximum number of days of transaction data to retrieve.
		 * Minimum: 1
		 * Maximum: 730
		 */
		max_historical_days: FormControl<number | null | undefined>,
	}
	export function CreateEndUserAgreementFormGroup() {
		return new FormGroup<EndUserAgreementFormProperties>({
			accepted: new FormControl<Date | null | undefined>(undefined),
			access_valid_for_days: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(90)]),
			created: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			institution_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			max_historical_days: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(730)]),
		});

	}


	/** Represents an end-user agreement. */
	export interface EndUserAgreementRequest {

		/** Array containing one or several values of ['balances', 'details', 'transactions'] */
		access_scope?: Array<string>;

		/**
		 * Number of days from acceptance that the access can be used.
		 * Minimum: 1
		 * Maximum: 90
		 */
		access_valid_for_days?: number | null;

		/**
		 * an Institution ID for this EUA
		 * Required
		 * Min length: 1
		 */
		institution_id: string;

		/**
		 * Maximum number of days of transaction data to retrieve.
		 * Minimum: 1
		 * Maximum: 730
		 */
		max_historical_days?: number | null;
	}

	/** Represents an end-user agreement. */
	export interface EndUserAgreementRequestFormProperties {

		/**
		 * Number of days from acceptance that the access can be used.
		 * Minimum: 1
		 * Maximum: 90
		 */
		access_valid_for_days: FormControl<number | null | undefined>,

		/**
		 * an Institution ID for this EUA
		 * Required
		 * Min length: 1
		 */
		institution_id: FormControl<string | null | undefined>,

		/**
		 * Maximum number of days of transaction data to retrieve.
		 * Minimum: 1
		 * Maximum: 730
		 */
		max_historical_days: FormControl<number | null | undefined>,
	}
	export function CreateEndUserAgreementRequestFormGroup() {
		return new FormGroup<EndUserAgreementRequestFormProperties>({
			access_valid_for_days: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(90)]),
			institution_id: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			max_historical_days: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(730)]),
		});

	}


	/** Represents end-user details. */
	export interface EnduserAcceptanceDetailsRequest {

		/**
		 * Required
		 * Min length: 1
		 */
		ip_address: string;

		/**
		 * Required
		 * Min length: 1
		 */
		user_agent: string;
	}

	/** Represents end-user details. */
	export interface EnduserAcceptanceDetailsRequestFormProperties {

		/**
		 * Required
		 * Min length: 1
		 */
		ip_address: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		user_agent: FormControl<string | null | undefined>,
	}
	export function CreateEnduserAcceptanceDetailsRequestFormGroup() {
		return new FormGroup<EnduserAcceptanceDetailsRequestFormProperties>({
			ip_address: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			user_agent: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
		});

	}


	/**
	 * * `following` - following
	 * * `preceding` - preceding
	 */
	export enum ExecutionRuleEnum { following = 'following', preceding = 'preceding' }


	/**
	 * * `Daily` - Daily
	 * * `Weekly` - Weekly
	 * * `EveryTwoWeeks` - EveryTwoWeeks
	 * * `Monthly` - Monthly
	 * * `EveryTwoMonths` - EveryTwoMonths
	 * * `Quarterly` - Quarterly
	 * * `SemiAnnual` - SemiAnnual
	 * * `Annual` - Annual
	 * * `MonthlyVariable` - MonthlyVariable
	 */
	export enum FrequencyEnum { Daily = 'Daily', Weekly = 'Weekly', EveryTwoWeeks = 'EveryTwoWeeks', Monthly = 'Monthly', EveryTwoMonths = 'EveryTwoMonths', Quarterly = 'Quarterly', SemiAnnual = 'SemiAnnual', Annual = 'Annual', MonthlyVariable = 'MonthlyVariable' }


	/** InstructedAmountSerializer. */
	export interface InstructedAmount {

		/**
		 * Instructed amount
		 * Required
		 */
		amount: string;

		/**
		 * Instructed amount currency
		 * Required
		 * Max length: 3
		 */
		currency: string;
	}

	/** InstructedAmountSerializer. */
	export interface InstructedAmountFormProperties {

		/**
		 * Instructed amount
		 * Required
		 */
		amount: FormControl<string | null | undefined>,

		/**
		 * Instructed amount currency
		 * Required
		 * Max length: 3
		 */
		currency: FormControl<string | null | undefined>,
	}
	export function CreateInstructedAmountFormGroup() {
		return new FormGroup<InstructedAmountFormProperties>({
			amount: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^-?\d{0,10}(?:\.\d{0,2})?$')]),
			currency: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(3)]),
		});

	}


	/** InstructedAmountSerializer. */
	export interface InstructedAmountRequest {

		/**
		 * Instructed amount
		 * Required
		 */
		amount: string;

		/**
		 * Instructed amount currency
		 * Required
		 * Min length: 1
		 * Max length: 3
		 */
		currency: string;
	}

	/** InstructedAmountSerializer. */
	export interface InstructedAmountRequestFormProperties {

		/**
		 * Instructed amount
		 * Required
		 */
		amount: FormControl<string | null | undefined>,

		/**
		 * Instructed amount currency
		 * Required
		 * Min length: 1
		 * Max length: 3
		 */
		currency: FormControl<string | null | undefined>,
	}
	export function CreateInstructedAmountRequestFormGroup() {
		return new FormGroup<InstructedAmountRequestFormProperties>({
			amount: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^-?\d{0,10}(?:\.\d{0,2})?$')]),
			currency: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(3)]),
		});

	}


	/** Represents an Integration. */
	export interface Integration {
		bic?: string | null;

		/** Required */
		countries: Array<string>;

		/** Required */
		id: string;

		/** Required */
		logo: string;

		/** Required */
		name: string;
		transaction_total_days?: string | null;
	}

	/** Represents an Integration. */
	export interface IntegrationFormProperties {
		bic: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		logo: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
		transaction_total_days: FormControl<string | null | undefined>,
	}
	export function CreateIntegrationFormGroup() {
		return new FormGroup<IntegrationFormProperties>({
			bic: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			logo: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			transaction_total_days: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** IntegrationSerializer for Retrieve endpoint. */
	export interface IntegrationRetrieve {
		bic?: string | null;

		/** Required */
		countries: Array<string>;

		/** Required */
		id: string;

		/** Required */
		logo: string;

		/** Required */
		name: string;

		/** Required */
		supported_features: Array<string>;

		/** Required */
		supported_payments: {[id: string]: any };
		transaction_total_days?: string | null;
	}

	/** IntegrationSerializer for Retrieve endpoint. */
	export interface IntegrationRetrieveFormProperties {
		bic: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		logo: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		supported_payments: FormControl<{[id: string]: any } | null | undefined>,
		transaction_total_days: FormControl<string | null | undefined>,
	}
	export function CreateIntegrationRetrieveFormGroup() {
		return new FormGroup<IntegrationRetrieveFormProperties>({
			bic: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			logo: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			supported_payments: new FormControl<{[id: string]: any } | null | undefined>(undefined, [Validators.required]),
			transaction_total_days: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Obtain JWT pair. */
	export interface JWTObtainPairRequest {

		/**
		 * Secret id from /user-secrets/
		 * Required
		 * Min length: 1
		 */
		secret_id: string;

		/**
		 * Secret key from /user-secrets/
		 * Required
		 * Min length: 1
		 */
		secret_key: string;
	}

	/** Obtain JWT pair. */
	export interface JWTObtainPairRequestFormProperties {

		/**
		 * Secret id from /user-secrets/
		 * Required
		 * Min length: 1
		 */
		secret_id: FormControl<string | null | undefined>,

		/**
		 * Secret key from /user-secrets/
		 * Required
		 * Min length: 1
		 */
		secret_key: FormControl<string | null | undefined>,
	}
	export function CreateJWTObtainPairRequestFormGroup() {
		return new FormGroup<JWTObtainPairRequestFormProperties>({
			secret_id: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			secret_key: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
		});

	}


	/** Refresh access token. */
	export interface JWTRefreshRequest {

		/**
		 * Required
		 * Min length: 1
		 */
		refresh: string;
	}

	/** Refresh access token. */
	export interface JWTRefreshRequestFormProperties {

		/**
		 * Required
		 * Min length: 1
		 */
		refresh: FormControl<string | null | undefined>,
	}
	export function CreateJWTRefreshRequestFormGroup() {
		return new FormGroup<JWTRefreshRequestFormProperties>({
			refresh: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
		});

	}

	export interface PaginatedCreditorAccountList {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		count?: number | null;
		next?: string | null;
		previous?: string | null;
		results?: Array<CreditorAccount>;
	}
	export interface PaginatedCreditorAccountListFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		count: FormControl<number | null | undefined>,
		next: FormControl<string | null | undefined>,
		previous: FormControl<string | null | undefined>,
	}
	export function CreatePaginatedCreditorAccountListFormGroup() {
		return new FormGroup<PaginatedCreditorAccountListFormProperties>({
			count: new FormControl<number | null | undefined>(undefined),
			next: new FormControl<string | null | undefined>(undefined),
			previous: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PaginatedEndUserAgreementList {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		count?: number | null;
		next?: string | null;
		previous?: string | null;
		results?: Array<EndUserAgreement>;
	}
	export interface PaginatedEndUserAgreementListFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		count: FormControl<number | null | undefined>,
		next: FormControl<string | null | undefined>,
		previous: FormControl<string | null | undefined>,
	}
	export function CreatePaginatedEndUserAgreementListFormGroup() {
		return new FormGroup<PaginatedEndUserAgreementListFormProperties>({
			count: new FormControl<number | null | undefined>(undefined),
			next: new FormControl<string | null | undefined>(undefined),
			previous: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PaginatedPaymentReadList {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		count?: number | null;
		next?: string | null;
		previous?: string | null;
		results?: Array<PaymentRead>;
	}
	export interface PaginatedPaymentReadListFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		count: FormControl<number | null | undefined>,
		next: FormControl<string | null | undefined>,
		previous: FormControl<string | null | undefined>,
	}
	export function CreatePaginatedPaymentReadListFormGroup() {
		return new FormGroup<PaginatedPaymentReadListFormProperties>({
			count: new FormControl<number | null | undefined>(undefined),
			next: new FormControl<string | null | undefined>(undefined),
			previous: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** PaymentReadSerializer. */
	export interface PaymentRead {

		/** Registered creditor account */
		creditor_account?: string | null;

		/** Creditor account */
		creditor_object?: CreditorAccountWrite;

		/**
		 * Payment Custom Payment ID
		 * Max length: 35
		 */
		custom_payment_id?: string | null;

		/**
		 * Debtor account write serializer.
		 * Required
		 */
		debtor_account: DebtorAccountWrite;

		/** Payment description */
		description?: string | null;

		/**
		 * Instructed amount
		 * Required
		 */
		instructed_amount: InstructedAmount;

		/** Payment ID */
		payment_id?: string | null;

		/**
		 * Payment product
		 * * `T2P` - target-2-payments
		 * * `SCT` - sepa-credit-transfers
		 * * `ISCT` - instant-sepa-credit-transfer
		 * * `CBCT` - cross-border-credit-transfers
		 * * `BACS` - Back Payment Scheme
		 * * `CHAPS` - CHAPS Payment Scheme
		 * * `FPS` - Faster Payment Scheme
		 * * `SWIFT` - Swift Payment Service
		 * * `BT` - Balance Transfer
		 * * `MT` - Money Transfer
		 */
		payment_product?: PaymentProductEnum;

		/**
		 * Payment end to end identification
		 * * `INIT` - Initiated. Payment has been initiated.
		 * * `ERRE` - ExecutionError. We experienced error on payment execution.
		 * * `ERRS` - StatusError. We experienced error retrieving payment status. Try again.
		 * * `ACCC` - AcceptedSettlementCompleted. Settlement on the creditor's account has been completed
		 * * `ACCP` - AcceptedCustomerProfile. Preceding check of technical validation was successful. Customer profile check was successful
		 * * `ACSC` - AcceptedSettlementCompleted. Settlement on the debtor’s account has been completed
		 * * `ACSP` - AcceptedSettlementInProcess. All preceding checks such as technical validation and customer profile were successful and therefore the payment initiation has been accepted for execution
		 * * `ACTC` - AcceptedTechnicalValidation. Authentication and syntactical and semantical validation are successful
		 * * `ACWC` - AcceptedWithChange. Instruction is accepted but a change will be made, such as date or remittance not sent
		 * * `ACWP` - AcceptedWithoutPosting. Payment instruction included in the credit transfer is accepted without being posted to the creditor customer’s account
		 * * `RCVD` - Received. Payment initiation has been received by the receiving agent
		 * * `PDNG` - Pending. Payment initiation or individual transaction included in the payment initiation is pending. Further checks and status update will be performed
		 * * `RJCT` - Rejected. Payment initiation or individual transaction included in the payment initiation has been rejected.
		 * * `CANC` - Cancelled. Payment initiation has been cancelled before execution
		 * * `ACFC` - AcceptedFundsChecked. Pre-ceeding check of technical validation and customer profile was successful and an automatic funds check was positive
		 * * `PATC` - PartiallyAcceptedTechnicalCorrect. The payment initiation needs multiple authentications, where some but not yet all have been performed
		 * * `PART` - PartiallyAccepted. A number of transactions have been accepted, whereas another number of transactions have not yet achieved 'accepted' status
		 */
		payment_status?: PaymentStatusEnum;

		/**
		 * Payment Type
		 * * `single-payment` - payment
		 * * `bulk-payment` - bulk-payments
		 * * `periodic-payment` - periodic-payments
		 */
		payment_type?: PaymentTypeEnum;

		/**
		 * Redirect URL to your application after payment is done
		 * Required
		 * Max length: 1024
		 */
		redirect: string;
	}

	/** PaymentReadSerializer. */
	export interface PaymentReadFormProperties {

		/** Registered creditor account */
		creditor_account: FormControl<string | null | undefined>,

		/**
		 * Payment Custom Payment ID
		 * Max length: 35
		 */
		custom_payment_id: FormControl<string | null | undefined>,

		/** Payment description */
		description: FormControl<string | null | undefined>,

		/** Payment ID */
		payment_id: FormControl<string | null | undefined>,

		/**
		 * Payment product
		 * * `T2P` - target-2-payments
		 * * `SCT` - sepa-credit-transfers
		 * * `ISCT` - instant-sepa-credit-transfer
		 * * `CBCT` - cross-border-credit-transfers
		 * * `BACS` - Back Payment Scheme
		 * * `CHAPS` - CHAPS Payment Scheme
		 * * `FPS` - Faster Payment Scheme
		 * * `SWIFT` - Swift Payment Service
		 * * `BT` - Balance Transfer
		 * * `MT` - Money Transfer
		 */
		payment_product: FormControl<PaymentProductEnum | null | undefined>,

		/**
		 * Payment end to end identification
		 * * `INIT` - Initiated. Payment has been initiated.
		 * * `ERRE` - ExecutionError. We experienced error on payment execution.
		 * * `ERRS` - StatusError. We experienced error retrieving payment status. Try again.
		 * * `ACCC` - AcceptedSettlementCompleted. Settlement on the creditor's account has been completed
		 * * `ACCP` - AcceptedCustomerProfile. Preceding check of technical validation was successful. Customer profile check was successful
		 * * `ACSC` - AcceptedSettlementCompleted. Settlement on the debtor’s account has been completed
		 * * `ACSP` - AcceptedSettlementInProcess. All preceding checks such as technical validation and customer profile were successful and therefore the payment initiation has been accepted for execution
		 * * `ACTC` - AcceptedTechnicalValidation. Authentication and syntactical and semantical validation are successful
		 * * `ACWC` - AcceptedWithChange. Instruction is accepted but a change will be made, such as date or remittance not sent
		 * * `ACWP` - AcceptedWithoutPosting. Payment instruction included in the credit transfer is accepted without being posted to the creditor customer’s account
		 * * `RCVD` - Received. Payment initiation has been received by the receiving agent
		 * * `PDNG` - Pending. Payment initiation or individual transaction included in the payment initiation is pending. Further checks and status update will be performed
		 * * `RJCT` - Rejected. Payment initiation or individual transaction included in the payment initiation has been rejected.
		 * * `CANC` - Cancelled. Payment initiation has been cancelled before execution
		 * * `ACFC` - AcceptedFundsChecked. Pre-ceeding check of technical validation and customer profile was successful and an automatic funds check was positive
		 * * `PATC` - PartiallyAcceptedTechnicalCorrect. The payment initiation needs multiple authentications, where some but not yet all have been performed
		 * * `PART` - PartiallyAccepted. A number of transactions have been accepted, whereas another number of transactions have not yet achieved 'accepted' status
		 */
		payment_status: FormControl<PaymentStatusEnum | null | undefined>,

		/**
		 * Payment Type
		 * * `single-payment` - payment
		 * * `bulk-payment` - bulk-payments
		 * * `periodic-payment` - periodic-payments
		 */
		payment_type: FormControl<PaymentTypeEnum | null | undefined>,

		/**
		 * Redirect URL to your application after payment is done
		 * Required
		 * Max length: 1024
		 */
		redirect: FormControl<string | null | undefined>,
	}
	export function CreatePaymentReadFormGroup() {
		return new FormGroup<PaymentReadFormProperties>({
			creditor_account: new FormControl<string | null | undefined>(undefined),
			custom_payment_id: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(35)]),
			description: new FormControl<string | null | undefined>(undefined),
			payment_id: new FormControl<string | null | undefined>(undefined),
			payment_product: new FormControl<PaymentProductEnum | null | undefined>(undefined),
			payment_status: new FormControl<PaymentStatusEnum | null | undefined>(undefined),
			payment_type: new FormControl<PaymentTypeEnum | null | undefined>(undefined),
			redirect: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1024)]),
		});

	}


	/**
	 * * `T2P` - target-2-payments
	 * * `SCT` - sepa-credit-transfers
	 * * `ISCT` - instant-sepa-credit-transfer
	 * * `CBCT` - cross-border-credit-transfers
	 * * `BACS` - Back Payment Scheme
	 * * `CHAPS` - CHAPS Payment Scheme
	 * * `FPS` - Faster Payment Scheme
	 * * `SWIFT` - Swift Payment Service
	 * * `BT` - Balance Transfer
	 * * `MT` - Money Transfer
	 */
	export enum PaymentProductEnum { T2P = 'T2P', SCT = 'SCT', ISCT = 'ISCT', CBCT = 'CBCT', BACS = 'BACS', CHAPS = 'CHAPS', FPS = 'FPS', SWIFT = 'SWIFT', BT = 'BT', MT = 'MT' }


	/**
	 * * `INIT` - Initiated. Payment has been initiated.
	 * * `ERRE` - ExecutionError. We experienced error on payment execution.
	 * * `ERRS` - StatusError. We experienced error retrieving payment status. Try again.
	 * * `ACCC` - AcceptedSettlementCompleted. Settlement on the creditor's account has been completed
	 * * `ACCP` - AcceptedCustomerProfile. Preceding check of technical validation was successful. Customer profile check was successful
	 * * `ACSC` - AcceptedSettlementCompleted. Settlement on the debtor’s account has been completed
	 * * `ACSP` - AcceptedSettlementInProcess. All preceding checks such as technical validation and customer profile were successful and therefore the payment initiation has been accepted for execution
	 * * `ACTC` - AcceptedTechnicalValidation. Authentication and syntactical and semantical validation are successful
	 * * `ACWC` - AcceptedWithChange. Instruction is accepted but a change will be made, such as date or remittance not sent
	 * * `ACWP` - AcceptedWithoutPosting. Payment instruction included in the credit transfer is accepted without being posted to the creditor customer’s account
	 * * `RCVD` - Received. Payment initiation has been received by the receiving agent
	 * * `PDNG` - Pending. Payment initiation or individual transaction included in the payment initiation is pending. Further checks and status update will be performed
	 * * `RJCT` - Rejected. Payment initiation or individual transaction included in the payment initiation has been rejected.
	 * * `CANC` - Cancelled. Payment initiation has been cancelled before execution
	 * * `ACFC` - AcceptedFundsChecked. Pre-ceeding check of technical validation and customer profile was successful and an automatic funds check was positive
	 * * `PATC` - PartiallyAcceptedTechnicalCorrect. The payment initiation needs multiple authentications, where some but not yet all have been performed
	 * * `PART` - PartiallyAccepted. A number of transactions have been accepted, whereas another number of transactions have not yet achieved 'accepted' status
	 */
	export enum PaymentStatusEnum { INIT = 'INIT', ERRE = 'ERRE', ERRS = 'ERRS', ACCC = 'ACCC', ACCP = 'ACCP', ACSC = 'ACSC', ACSP = 'ACSP', ACTC = 'ACTC', ACWC = 'ACWC', ACWP = 'ACWP', RCVD = 'RCVD', PDNG = 'PDNG', RJCT = 'RJCT', CANC = 'CANC', ACFC = 'ACFC', PATC = 'PATC', PART = 'PART' }


	/**
	 * * `single-payment` - payment
	 * * `bulk-payment` - bulk-payments
	 * * `periodic-payment` - periodic-payments
	 */
	export enum PaymentTypeEnum { 'single-payment' = 'single-payment', 'bulk-payment' = 'bulk-payment', 'periodic-payment' = 'periodic-payment' }

	export interface PaginatedRequisitionList {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		count?: number | null;
		next?: string | null;
		previous?: string | null;
		results?: Array<Requisition>;
	}
	export interface PaginatedRequisitionListFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		count: FormControl<number | null | undefined>,
		next: FormControl<string | null | undefined>,
		previous: FormControl<string | null | undefined>,
	}
	export function CreatePaginatedRequisitionListFormGroup() {
		return new FormGroup<PaginatedRequisitionListFormProperties>({
			count: new FormControl<number | null | undefined>(undefined),
			next: new FormControl<string | null | undefined>(undefined),
			previous: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** RequisitionSerializer. */
	export interface Requisition {

		/** option to enable account selection view for the end user */
		account_selection?: boolean | null;

		/** array of account IDs retrieved within a scope of this requisition */
		accounts?: Array<string>;

		/** EUA associated with this requisition */
		agreement?: string | null;

		/** The date & time at which the requisition was created. */
		created?: Date | null;
		id?: string | null;

		/**
		 * an Institution ID for this Requisition
		 * Required
		 */
		institution_id: string;

		/** link to initiate authorization with Institution */
		link?: string | null;

		/**
		 * redirect URL to your application after end-user authorization with ASPSP
		 * Required
		 * Max length: 1024
		 */
		redirect: string;

		/** enable redirect back to the client after account list received */
		redirect_immediate?: boolean | null;

		/**
		 * additional ID to identify the end user
		 * Max length: 256
		 */
		reference?: string | null;

		/**
		 * optional SSN field to verify ownership of the account
		 * Max length: 64
		 */
		ssn?: string | null;

		/** status of this requisition */
		status?: Status1c5Enum;

		/**
		 * A two-letter country code (ISO 639-1)
		 * Max length: 5
		 */
		user_language?: string | null;
	}

	/** RequisitionSerializer. */
	export interface RequisitionFormProperties {

		/** option to enable account selection view for the end user */
		account_selection: FormControl<boolean | null | undefined>,

		/** EUA associated with this requisition */
		agreement: FormControl<string | null | undefined>,

		/** The date & time at which the requisition was created. */
		created: FormControl<Date | null | undefined>,
		id: FormControl<string | null | undefined>,

		/**
		 * an Institution ID for this Requisition
		 * Required
		 */
		institution_id: FormControl<string | null | undefined>,

		/** link to initiate authorization with Institution */
		link: FormControl<string | null | undefined>,

		/**
		 * redirect URL to your application after end-user authorization with ASPSP
		 * Required
		 * Max length: 1024
		 */
		redirect: FormControl<string | null | undefined>,

		/** enable redirect back to the client after account list received */
		redirect_immediate: FormControl<boolean | null | undefined>,

		/**
		 * additional ID to identify the end user
		 * Max length: 256
		 */
		reference: FormControl<string | null | undefined>,

		/**
		 * optional SSN field to verify ownership of the account
		 * Max length: 64
		 */
		ssn: FormControl<string | null | undefined>,

		/** status of this requisition */
		status: FormControl<Status1c5Enum | null | undefined>,

		/**
		 * A two-letter country code (ISO 639-1)
		 * Max length: 5
		 */
		user_language: FormControl<string | null | undefined>,
	}
	export function CreateRequisitionFormGroup() {
		return new FormGroup<RequisitionFormProperties>({
			account_selection: new FormControl<boolean | null | undefined>(undefined),
			agreement: new FormControl<string | null | undefined>(undefined),
			created: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			institution_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			link: new FormControl<string | null | undefined>(undefined),
			redirect: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1024)]),
			redirect_immediate: new FormControl<boolean | null | undefined>(undefined),
			reference: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256)]),
			ssn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64)]),
			status: new FormControl<Status1c5Enum | null | undefined>(undefined),
			user_language: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(5)]),
		});

	}

	export enum Status1c5Enum { CR = 'CR', ID = 'ID', LN = 'LN', RJ = 'RJ', ER = 'ER', SU = 'SU', EX = 'EX', GC = 'GC', UA = 'UA', GA = 'GA', SA = 'SA' }


	/** PaymentReadSerializer. */
	export interface PaymentReadRequest {

		/** Registered creditor account */
		creditor_account?: string | null;

		/** Creditor account */
		creditor_object?: CreditorAccountWriteRequest;

		/**
		 * Payment Custom Payment ID
		 * Min length: 1
		 * Max length: 35
		 */
		custom_payment_id?: string | null;

		/**
		 * Debtor account write serializer.
		 * Required
		 */
		debtor_account: DebtorAccountWriteRequest;

		/**
		 * Payment description
		 * Min length: 1
		 */
		description?: string | null;

		/**
		 * Institution ID for Payment
		 * Min length: 1
		 */
		institution_id?: string | null;

		/**
		 * Instructed amount
		 * Required
		 */
		instructed_amount: InstructedAmountRequest;

		/**
		 * Payment product
		 * * `T2P` - target-2-payments
		 * * `SCT` - sepa-credit-transfers
		 * * `ISCT` - instant-sepa-credit-transfer
		 * * `CBCT` - cross-border-credit-transfers
		 * * `BACS` - Back Payment Scheme
		 * * `CHAPS` - CHAPS Payment Scheme
		 * * `FPS` - Faster Payment Scheme
		 * * `SWIFT` - Swift Payment Service
		 * * `BT` - Balance Transfer
		 * * `MT` - Money Transfer
		 */
		payment_product?: PaymentProductEnum;

		/**
		 * Redirect URL to your application after payment is done
		 * Required
		 * Min length: 1
		 * Max length: 1024
		 */
		redirect: string;
	}

	/** PaymentReadSerializer. */
	export interface PaymentReadRequestFormProperties {

		/** Registered creditor account */
		creditor_account: FormControl<string | null | undefined>,

		/**
		 * Payment Custom Payment ID
		 * Min length: 1
		 * Max length: 35
		 */
		custom_payment_id: FormControl<string | null | undefined>,

		/**
		 * Payment description
		 * Min length: 1
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * Institution ID for Payment
		 * Min length: 1
		 */
		institution_id: FormControl<string | null | undefined>,

		/**
		 * Payment product
		 * * `T2P` - target-2-payments
		 * * `SCT` - sepa-credit-transfers
		 * * `ISCT` - instant-sepa-credit-transfer
		 * * `CBCT` - cross-border-credit-transfers
		 * * `BACS` - Back Payment Scheme
		 * * `CHAPS` - CHAPS Payment Scheme
		 * * `FPS` - Faster Payment Scheme
		 * * `SWIFT` - Swift Payment Service
		 * * `BT` - Balance Transfer
		 * * `MT` - Money Transfer
		 */
		payment_product: FormControl<PaymentProductEnum | null | undefined>,

		/**
		 * Redirect URL to your application after payment is done
		 * Required
		 * Min length: 1
		 * Max length: 1024
		 */
		redirect: FormControl<string | null | undefined>,
	}
	export function CreatePaymentReadRequestFormGroup() {
		return new FormGroup<PaymentReadRequestFormProperties>({
			creditor_account: new FormControl<string | null | undefined>(undefined),
			custom_payment_id: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(35)]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			institution_id: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			payment_product: new FormControl<PaymentProductEnum | null | undefined>(undefined),
			redirect: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1024)]),
		});

	}


	/** PaymentWriteSerializer. */
	export interface PaymentWrite {

		/** Registered creditor account */
		creditor_account?: string | null;

		/** Creditor account */
		creditor_object?: CreditorAccountWrite;

		/**
		 * Payment Custom Payment ID
		 * Max length: 35
		 */
		custom_payment_id?: string | null;

		/** Payment description */
		description?: string | null;

		/**
		 * Instructed amount
		 * Required
		 */
		instructed_amount: InstructedAmount;

		/** Link to initiate authorization with Institution */
		link?: string | null;

		/** Payment ID */
		payment_id?: string | null;

		/**
		 * Payment product
		 * * `T2P` - target-2-payments
		 * * `SCT` - sepa-credit-transfers
		 * * `ISCT` - instant-sepa-credit-transfer
		 * * `CBCT` - cross-border-credit-transfers
		 * * `BACS` - Back Payment Scheme
		 * * `CHAPS` - CHAPS Payment Scheme
		 * * `FPS` - Faster Payment Scheme
		 * * `SWIFT` - Swift Payment Service
		 * * `BT` - Balance Transfer
		 * * `MT` - Money Transfer
		 */
		payment_product?: PaymentProductEnum;

		/**
		 * Payment end to end identification
		 * * `INIT` - Initiated. Payment has been initiated.
		 * * `ERRE` - ExecutionError. We experienced error on payment execution.
		 * * `ERRS` - StatusError. We experienced error retrieving payment status. Try again.
		 * * `ACCC` - AcceptedSettlementCompleted. Settlement on the creditor's account has been completed
		 * * `ACCP` - AcceptedCustomerProfile. Preceding check of technical validation was successful. Customer profile check was successful
		 * * `ACSC` - AcceptedSettlementCompleted. Settlement on the debtor’s account has been completed
		 * * `ACSP` - AcceptedSettlementInProcess. All preceding checks such as technical validation and customer profile were successful and therefore the payment initiation has been accepted for execution
		 * * `ACTC` - AcceptedTechnicalValidation. Authentication and syntactical and semantical validation are successful
		 * * `ACWC` - AcceptedWithChange. Instruction is accepted but a change will be made, such as date or remittance not sent
		 * * `ACWP` - AcceptedWithoutPosting. Payment instruction included in the credit transfer is accepted without being posted to the creditor customer’s account
		 * * `RCVD` - Received. Payment initiation has been received by the receiving agent
		 * * `PDNG` - Pending. Payment initiation or individual transaction included in the payment initiation is pending. Further checks and status update will be performed
		 * * `RJCT` - Rejected. Payment initiation or individual transaction included in the payment initiation has been rejected.
		 * * `CANC` - Cancelled. Payment initiation has been cancelled before execution
		 * * `ACFC` - AcceptedFundsChecked. Pre-ceeding check of technical validation and customer profile was successful and an automatic funds check was positive
		 * * `PATC` - PartiallyAcceptedTechnicalCorrect. The payment initiation needs multiple authentications, where some but not yet all have been performed
		 * * `PART` - PartiallyAccepted. A number of transactions have been accepted, whereas another number of transactions have not yet achieved 'accepted' status
		 */
		payment_status?: PaymentStatusEnum;

		/**
		 * Payment Type
		 * * `single-payment` - payment
		 * * `bulk-payment` - bulk-payments
		 * * `periodic-payment` - periodic-payments
		 */
		payment_type?: PaymentTypeEnum;

		/** Periodic Payment Serializer. */
		periodic_payment?: PeriodicPayment;

		/**
		 * Redirect URL to your application after payment is done
		 * Required
		 * Max length: 1024
		 */
		redirect: string;

		/**
		 * Payment Execution date (for periodic payments)
		 * Type: DateOnly
		 */
		requested_execution_date?: Date | null;

		/** Indicates whether payment should be submitted separately */
		submit_payment?: boolean | null;
	}

	/** PaymentWriteSerializer. */
	export interface PaymentWriteFormProperties {

		/** Registered creditor account */
		creditor_account: FormControl<string | null | undefined>,

		/**
		 * Payment Custom Payment ID
		 * Max length: 35
		 */
		custom_payment_id: FormControl<string | null | undefined>,

		/** Payment description */
		description: FormControl<string | null | undefined>,

		/** Link to initiate authorization with Institution */
		link: FormControl<string | null | undefined>,

		/** Payment ID */
		payment_id: FormControl<string | null | undefined>,

		/**
		 * Payment product
		 * * `T2P` - target-2-payments
		 * * `SCT` - sepa-credit-transfers
		 * * `ISCT` - instant-sepa-credit-transfer
		 * * `CBCT` - cross-border-credit-transfers
		 * * `BACS` - Back Payment Scheme
		 * * `CHAPS` - CHAPS Payment Scheme
		 * * `FPS` - Faster Payment Scheme
		 * * `SWIFT` - Swift Payment Service
		 * * `BT` - Balance Transfer
		 * * `MT` - Money Transfer
		 */
		payment_product: FormControl<PaymentProductEnum | null | undefined>,

		/**
		 * Payment end to end identification
		 * * `INIT` - Initiated. Payment has been initiated.
		 * * `ERRE` - ExecutionError. We experienced error on payment execution.
		 * * `ERRS` - StatusError. We experienced error retrieving payment status. Try again.
		 * * `ACCC` - AcceptedSettlementCompleted. Settlement on the creditor's account has been completed
		 * * `ACCP` - AcceptedCustomerProfile. Preceding check of technical validation was successful. Customer profile check was successful
		 * * `ACSC` - AcceptedSettlementCompleted. Settlement on the debtor’s account has been completed
		 * * `ACSP` - AcceptedSettlementInProcess. All preceding checks such as technical validation and customer profile were successful and therefore the payment initiation has been accepted for execution
		 * * `ACTC` - AcceptedTechnicalValidation. Authentication and syntactical and semantical validation are successful
		 * * `ACWC` - AcceptedWithChange. Instruction is accepted but a change will be made, such as date or remittance not sent
		 * * `ACWP` - AcceptedWithoutPosting. Payment instruction included in the credit transfer is accepted without being posted to the creditor customer’s account
		 * * `RCVD` - Received. Payment initiation has been received by the receiving agent
		 * * `PDNG` - Pending. Payment initiation or individual transaction included in the payment initiation is pending. Further checks and status update will be performed
		 * * `RJCT` - Rejected. Payment initiation or individual transaction included in the payment initiation has been rejected.
		 * * `CANC` - Cancelled. Payment initiation has been cancelled before execution
		 * * `ACFC` - AcceptedFundsChecked. Pre-ceeding check of technical validation and customer profile was successful and an automatic funds check was positive
		 * * `PATC` - PartiallyAcceptedTechnicalCorrect. The payment initiation needs multiple authentications, where some but not yet all have been performed
		 * * `PART` - PartiallyAccepted. A number of transactions have been accepted, whereas another number of transactions have not yet achieved 'accepted' status
		 */
		payment_status: FormControl<PaymentStatusEnum | null | undefined>,

		/**
		 * Payment Type
		 * * `single-payment` - payment
		 * * `bulk-payment` - bulk-payments
		 * * `periodic-payment` - periodic-payments
		 */
		payment_type: FormControl<PaymentTypeEnum | null | undefined>,

		/**
		 * Redirect URL to your application after payment is done
		 * Required
		 * Max length: 1024
		 */
		redirect: FormControl<string | null | undefined>,

		/**
		 * Payment Execution date (for periodic payments)
		 * Type: DateOnly
		 */
		requested_execution_date: FormControl<Date | null | undefined>,

		/** Indicates whether payment should be submitted separately */
		submit_payment: FormControl<boolean | null | undefined>,
	}
	export function CreatePaymentWriteFormGroup() {
		return new FormGroup<PaymentWriteFormProperties>({
			creditor_account: new FormControl<string | null | undefined>(undefined),
			custom_payment_id: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(35)]),
			description: new FormControl<string | null | undefined>(undefined),
			link: new FormControl<string | null | undefined>(undefined),
			payment_id: new FormControl<string | null | undefined>(undefined),
			payment_product: new FormControl<PaymentProductEnum | null | undefined>(undefined),
			payment_status: new FormControl<PaymentStatusEnum | null | undefined>(undefined),
			payment_type: new FormControl<PaymentTypeEnum | null | undefined>(undefined),
			redirect: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1024)]),
			requested_execution_date: new FormControl<Date | null | undefined>(undefined),
			submit_payment: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Periodic Payment Serializer. */
	export interface PeriodicPayment {
		day_of_execution?: string | null;

		/** Type: DateOnly */
		end_date?: Date | null;

		/**
		 * Behavior when periodic payment dates fall on holiday.
		 * * `following` - following
		 * * `preceding` - preceding
		 */
		execution_rule?: ExecutionRuleEnum;
		frequency?: FrequencyEnum;

		/**
		 * Required
		 * Type: DateOnly
		 */
		start_date: Date;
	}

	/** Periodic Payment Serializer. */
	export interface PeriodicPaymentFormProperties {
		day_of_execution: FormControl<string | null | undefined>,

		/** Type: DateOnly */
		end_date: FormControl<Date | null | undefined>,

		/**
		 * Behavior when periodic payment dates fall on holiday.
		 * * `following` - following
		 * * `preceding` - preceding
		 */
		execution_rule: FormControl<ExecutionRuleEnum | null | undefined>,
		frequency: FormControl<FrequencyEnum | null | undefined>,

		/**
		 * Required
		 * Type: DateOnly
		 */
		start_date: FormControl<Date | null | undefined>,
	}
	export function CreatePeriodicPaymentFormGroup() {
		return new FormGroup<PeriodicPaymentFormProperties>({
			day_of_execution: new FormControl<string | null | undefined>(undefined),
			end_date: new FormControl<Date | null | undefined>(undefined),
			execution_rule: new FormControl<ExecutionRuleEnum | null | undefined>(undefined),
			frequency: new FormControl<FrequencyEnum | null | undefined>(undefined),
			start_date: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** PaymentWriteSerializer. */
	export interface PaymentWriteRequest {

		/** Registered creditor account */
		creditor_account?: string | null;

		/** Creditor account */
		creditor_object?: CreditorAccountWriteRequest;

		/**
		 * Payment Custom Payment ID
		 * Min length: 1
		 * Max length: 35
		 */
		custom_payment_id?: string | null;

		/** Debtor account */
		debtor_account?: DebtorAccountWriteRequest;

		/**
		 * Payment description
		 * Min length: 1
		 */
		description?: string | null;

		/**
		 * Institution ID for Payment
		 * Min length: 1
		 */
		institution_id?: string | null;

		/**
		 * Instructed amount
		 * Required
		 */
		instructed_amount: InstructedAmountRequest;

		/**
		 * Payment product
		 * * `T2P` - target-2-payments
		 * * `SCT` - sepa-credit-transfers
		 * * `ISCT` - instant-sepa-credit-transfer
		 * * `CBCT` - cross-border-credit-transfers
		 * * `BACS` - Back Payment Scheme
		 * * `CHAPS` - CHAPS Payment Scheme
		 * * `FPS` - Faster Payment Scheme
		 * * `SWIFT` - Swift Payment Service
		 * * `BT` - Balance Transfer
		 * * `MT` - Money Transfer
		 */
		payment_product?: PaymentProductEnum;

		/** Periodic Payment Serializer. */
		periodic_payment?: PeriodicPaymentRequest;

		/**
		 * Redirect URL to your application after payment is done
		 * Required
		 * Min length: 1
		 * Max length: 1024
		 */
		redirect: string;

		/**
		 * Payment Execution date (for periodic payments)
		 * Type: DateOnly
		 */
		requested_execution_date?: Date | null;

		/** Indicates whether payment should be submitted separately */
		submit_payment?: boolean | null;
	}

	/** PaymentWriteSerializer. */
	export interface PaymentWriteRequestFormProperties {

		/** Registered creditor account */
		creditor_account: FormControl<string | null | undefined>,

		/**
		 * Payment Custom Payment ID
		 * Min length: 1
		 * Max length: 35
		 */
		custom_payment_id: FormControl<string | null | undefined>,

		/**
		 * Payment description
		 * Min length: 1
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * Institution ID for Payment
		 * Min length: 1
		 */
		institution_id: FormControl<string | null | undefined>,

		/**
		 * Payment product
		 * * `T2P` - target-2-payments
		 * * `SCT` - sepa-credit-transfers
		 * * `ISCT` - instant-sepa-credit-transfer
		 * * `CBCT` - cross-border-credit-transfers
		 * * `BACS` - Back Payment Scheme
		 * * `CHAPS` - CHAPS Payment Scheme
		 * * `FPS` - Faster Payment Scheme
		 * * `SWIFT` - Swift Payment Service
		 * * `BT` - Balance Transfer
		 * * `MT` - Money Transfer
		 */
		payment_product: FormControl<PaymentProductEnum | null | undefined>,

		/**
		 * Redirect URL to your application after payment is done
		 * Required
		 * Min length: 1
		 * Max length: 1024
		 */
		redirect: FormControl<string | null | undefined>,

		/**
		 * Payment Execution date (for periodic payments)
		 * Type: DateOnly
		 */
		requested_execution_date: FormControl<Date | null | undefined>,

		/** Indicates whether payment should be submitted separately */
		submit_payment: FormControl<boolean | null | undefined>,
	}
	export function CreatePaymentWriteRequestFormGroup() {
		return new FormGroup<PaymentWriteRequestFormProperties>({
			creditor_account: new FormControl<string | null | undefined>(undefined),
			custom_payment_id: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(35)]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			institution_id: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			payment_product: new FormControl<PaymentProductEnum | null | undefined>(undefined),
			redirect: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1024)]),
			requested_execution_date: new FormControl<Date | null | undefined>(undefined),
			submit_payment: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Periodic Payment Serializer. */
	export interface PeriodicPaymentRequest {

		/** Min length: 1 */
		day_of_execution?: string | null;

		/** Type: DateOnly */
		end_date?: Date | null;

		/**
		 * Behavior when periodic payment dates fall on holiday.
		 * * `following` - following
		 * * `preceding` - preceding
		 */
		execution_rule?: ExecutionRuleEnum;
		frequency?: FrequencyEnum;

		/**
		 * Required
		 * Type: DateOnly
		 */
		start_date: Date;
	}

	/** Periodic Payment Serializer. */
	export interface PeriodicPaymentRequestFormProperties {

		/** Min length: 1 */
		day_of_execution: FormControl<string | null | undefined>,

		/** Type: DateOnly */
		end_date: FormControl<Date | null | undefined>,

		/**
		 * Behavior when periodic payment dates fall on holiday.
		 * * `following` - following
		 * * `preceding` - preceding
		 */
		execution_rule: FormControl<ExecutionRuleEnum | null | undefined>,
		frequency: FormControl<FrequencyEnum | null | undefined>,

		/**
		 * Required
		 * Type: DateOnly
		 */
		start_date: FormControl<Date | null | undefined>,
	}
	export function CreatePeriodicPaymentRequestFormGroup() {
		return new FormGroup<PeriodicPaymentRequestFormProperties>({
			day_of_execution: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			end_date: new FormControl<Date | null | undefined>(undefined),
			execution_rule: new FormControl<ExecutionRuleEnum | null | undefined>(undefined),
			frequency: new FormControl<FrequencyEnum | null | undefined>(undefined),
			start_date: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Filter country. */
	export interface PremiumAccountQuery {

		/**
		 * * `AT` - Austria
		 * * `BE` - Belgium
		 * * `BG` - Bulgaria
		 * * `HR` - Croatia
		 * * `CY` - Cyprus
		 * * `CZ` - Czechia
		 * * `DK` - Denmark
		 * * `EE` - Estonia
		 * * `FI` - Finland
		 * * `FR` - France
		 * * `DE` - Germany
		 * * `GR` - Greece
		 * * `HU` - Hungary
		 * * `IS` - Iceland
		 * * `IE` - Ireland
		 * * `IT` - Italy
		 * * `LV` - Latvia
		 * * `LI` - Liechtenstein
		 * * `LT` - Lithuania
		 * * `LU` - Luxembourg
		 * * `MT` - Malta
		 * * `NL` - Netherlands
		 * * `NO` - Norway
		 * * `PL` - Poland
		 * * `PT` - Portugal
		 * * `RO` - Romania
		 * * `SK` - Slovakia
		 * * `SI` - Slovenia
		 * * `ES` - Spain
		 * * `SE` - Sweden
		 * * `GB` - United Kingdom
		 * * `US` - United States of America
		 */
		country?: AddressCountryEnum | null;

		/** Type: DateOnly */
		date_from?: Date | null;

		/** Type: DateOnly */
		date_to?: Date | null;
	}

	/** Filter country. */
	export interface PremiumAccountQueryFormProperties {

		/**
		 * * `AT` - Austria
		 * * `BE` - Belgium
		 * * `BG` - Bulgaria
		 * * `HR` - Croatia
		 * * `CY` - Cyprus
		 * * `CZ` - Czechia
		 * * `DK` - Denmark
		 * * `EE` - Estonia
		 * * `FI` - Finland
		 * * `FR` - France
		 * * `DE` - Germany
		 * * `GR` - Greece
		 * * `HU` - Hungary
		 * * `IS` - Iceland
		 * * `IE` - Ireland
		 * * `IT` - Italy
		 * * `LV` - Latvia
		 * * `LI` - Liechtenstein
		 * * `LT` - Lithuania
		 * * `LU` - Luxembourg
		 * * `MT` - Malta
		 * * `NL` - Netherlands
		 * * `NO` - Norway
		 * * `PL` - Poland
		 * * `PT` - Portugal
		 * * `RO` - Romania
		 * * `SK` - Slovakia
		 * * `SI` - Slovenia
		 * * `ES` - Spain
		 * * `SE` - Sweden
		 * * `GB` - United Kingdom
		 * * `US` - United States of America
		 */
		country: FormControl<AddressCountryEnum | null | undefined>,

		/** Type: DateOnly */
		date_from: FormControl<Date | null | undefined>,

		/** Type: DateOnly */
		date_to: FormControl<Date | null | undefined>,
	}
	export function CreatePremiumAccountQueryFormGroup() {
		return new FormGroup<PremiumAccountQueryFormProperties>({
			country: new FormControl<AddressCountryEnum | null | undefined>(undefined),
			date_from: new FormControl<Date | null | undefined>(undefined),
			date_to: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** RequisitionSerializer. */
	export interface RequisitionRequest {

		/** option to enable account selection view for the end user */
		account_selection?: boolean | null;

		/** EUA associated with this requisition */
		agreement?: string | null;

		/**
		 * an Institution ID for this Requisition
		 * Required
		 * Min length: 1
		 */
		institution_id: string;

		/**
		 * redirect URL to your application after end-user authorization with ASPSP
		 * Required
		 * Min length: 1
		 * Max length: 1024
		 */
		redirect: string;

		/** enable redirect back to the client after account list received */
		redirect_immediate?: boolean | null;

		/**
		 * additional ID to identify the end user
		 * Min length: 1
		 * Max length: 256
		 */
		reference?: string | null;

		/**
		 * optional SSN field to verify ownership of the account
		 * Max length: 64
		 */
		ssn?: string | null;

		/**
		 * A two-letter country code (ISO 639-1)
		 * Min length: 1
		 * Max length: 5
		 */
		user_language?: string | null;
	}

	/** RequisitionSerializer. */
	export interface RequisitionRequestFormProperties {

		/** option to enable account selection view for the end user */
		account_selection: FormControl<boolean | null | undefined>,

		/** EUA associated with this requisition */
		agreement: FormControl<string | null | undefined>,

		/**
		 * an Institution ID for this Requisition
		 * Required
		 * Min length: 1
		 */
		institution_id: FormControl<string | null | undefined>,

		/**
		 * redirect URL to your application after end-user authorization with ASPSP
		 * Required
		 * Min length: 1
		 * Max length: 1024
		 */
		redirect: FormControl<string | null | undefined>,

		/** enable redirect back to the client after account list received */
		redirect_immediate: FormControl<boolean | null | undefined>,

		/**
		 * additional ID to identify the end user
		 * Min length: 1
		 * Max length: 256
		 */
		reference: FormControl<string | null | undefined>,

		/**
		 * optional SSN field to verify ownership of the account
		 * Max length: 64
		 */
		ssn: FormControl<string | null | undefined>,

		/**
		 * A two-letter country code (ISO 639-1)
		 * Min length: 1
		 * Max length: 5
		 */
		user_language: FormControl<string | null | undefined>,
	}
	export function CreateRequisitionRequestFormGroup() {
		return new FormGroup<RequisitionRequestFormProperties>({
			account_selection: new FormControl<boolean | null | undefined>(undefined),
			agreement: new FormControl<string | null | undefined>(undefined),
			institution_id: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			redirect: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1024)]),
			redirect_immediate: new FormControl<boolean | null | undefined>(undefined),
			reference: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256)]),
			ssn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64)]),
			user_language: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(5)]),
		});

	}


	/** Obtain new JWT pair. */
	export interface SpectacularJWTObtain {

		/** Your access token */
		access?: string | null;

		/**
		 * Access token expires in seconds
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		access_expires?: number | null;

		/** Your refresh token */
		refresh?: string | null;

		/**
		 * Refresh token expires in seconds
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		refresh_expires?: number | null;
	}

	/** Obtain new JWT pair. */
	export interface SpectacularJWTObtainFormProperties {

		/** Your access token */
		access: FormControl<string | null | undefined>,

		/**
		 * Access token expires in seconds
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		access_expires: FormControl<number | null | undefined>,

		/** Your refresh token */
		refresh: FormControl<string | null | undefined>,

		/**
		 * Refresh token expires in seconds
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		refresh_expires: FormControl<number | null | undefined>,
	}
	export function CreateSpectacularJWTObtainFormGroup() {
		return new FormGroup<SpectacularJWTObtainFormProperties>({
			access: new FormControl<string | null | undefined>(undefined),
			access_expires: new FormControl<number | null | undefined>(undefined),
			refresh: new FormControl<string | null | undefined>(undefined),
			refresh_expires: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Refresh Access token. */
	export interface SpectacularJWTRefresh {

		/** Your access token */
		access?: string | null;

		/**
		 * Access token expires in seconds
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		access_expires?: number | null;
	}

	/** Refresh Access token. */
	export interface SpectacularJWTRefreshFormProperties {

		/** Your access token */
		access: FormControl<string | null | undefined>,

		/**
		 * Access token expires in seconds
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		access_expires: FormControl<number | null | undefined>,
	}
	export function CreateSpectacularJWTRefreshFormGroup() {
		return new FormGroup<SpectacularJWTRefreshFormProperties>({
			access: new FormControl<string | null | undefined>(undefined),
			access_expires: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Create requisition. */
	export interface SpectacularRequisition {

		/** option to enable account selection view for the end user */
		account_selection?: boolean | null;

		/** array of account IDs retrieved within a scope of this requisition */
		accounts?: Array<string>;

		/** EUA associated with this requisition */
		agreement?: string | null;

		/** The date & time at which the requisition was created. */
		created?: Date | null;
		id?: string | null;

		/**
		 * an Institution ID for this Requisition
		 * Required
		 */
		institution_id: string;

		/** link to initiate authorization with Institution */
		link?: string | null;

		/**
		 * redirect URL to your application after end-user authorization with ASPSP
		 * Required
		 * Max length: 1024
		 */
		redirect: string;

		/** enable redirect back to the client after account list received */
		redirect_immediate?: boolean | null;

		/**
		 * additional ID to identify the end user
		 * Max length: 256
		 */
		reference?: string | null;

		/**
		 * optional SSN field to verify ownership of the account
		 * Max length: 64
		 */
		ssn?: string | null;

		/** status of this requisition */
		status?: Status1c5Enum;

		/**
		 * A two-letter country code (ISO 639-1)
		 * Max length: 5
		 */
		user_language?: string | null;
	}

	/** Create requisition. */
	export interface SpectacularRequisitionFormProperties {

		/** option to enable account selection view for the end user */
		account_selection: FormControl<boolean | null | undefined>,

		/** EUA associated with this requisition */
		agreement: FormControl<string | null | undefined>,

		/** The date & time at which the requisition was created. */
		created: FormControl<Date | null | undefined>,
		id: FormControl<string | null | undefined>,

		/**
		 * an Institution ID for this Requisition
		 * Required
		 */
		institution_id: FormControl<string | null | undefined>,

		/** link to initiate authorization with Institution */
		link: FormControl<string | null | undefined>,

		/**
		 * redirect URL to your application after end-user authorization with ASPSP
		 * Required
		 * Max length: 1024
		 */
		redirect: FormControl<string | null | undefined>,

		/** enable redirect back to the client after account list received */
		redirect_immediate: FormControl<boolean | null | undefined>,

		/**
		 * additional ID to identify the end user
		 * Max length: 256
		 */
		reference: FormControl<string | null | undefined>,

		/**
		 * optional SSN field to verify ownership of the account
		 * Max length: 64
		 */
		ssn: FormControl<string | null | undefined>,

		/** status of this requisition */
		status: FormControl<Status1c5Enum | null | undefined>,

		/**
		 * A two-letter country code (ISO 639-1)
		 * Max length: 5
		 */
		user_language: FormControl<string | null | undefined>,
	}
	export function CreateSpectacularRequisitionFormGroup() {
		return new FormGroup<SpectacularRequisitionFormProperties>({
			account_selection: new FormControl<boolean | null | undefined>(undefined),
			agreement: new FormControl<string | null | undefined>(undefined),
			created: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			institution_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			link: new FormControl<string | null | undefined>(undefined),
			redirect: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1024)]),
			redirect_immediate: new FormControl<boolean | null | undefined>(undefined),
			reference: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256)]),
			ssn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64)]),
			status: new FormControl<Status1c5Enum | null | undefined>(undefined),
			user_language: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(5)]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Access account premium transactions.
		 * Get api/v2/accounts/premium/{id}/transactions/
		 * @param {string} country ISO 3166 two-character country code
		 * @param {Date} date_from Type: DateOnly
		 * @param {Date} date_to Type: DateOnly
		 * @return {{[id: string]: any }} Retrieve account transactions
		 */
		Retrieve_account_transactions_v2(country: string | null | undefined, date_from: Date | null | undefined, date_to: Date | null | undefined, id: string): Observable<{[id: string]: any }> {
			return this.http.get<{[id: string]: any }>(this.baseUri + 'api/v2/accounts/premium/' + (id == null ? '' : encodeURIComponent(id)) + '/transactions/?country=' + (country == null ? '' : encodeURIComponent(country)) + '&date_from=' + date_from?.toISOString() + '&date_to=' + date_to?.toISOString(), {});
		}

		/**
		 * Access account metadata.
		 * Information about the account record, such as the processing status and IBAN.
		 * Account status is recalculated based on the error count in the latest req.
		 * Get api/v2/accounts/{id}/
		 * @return {Account} sample account metadata
		 */
		Retrieve_account_metadata(id: string): Observable<Account> {
			return this.http.get<Account>(this.baseUri + 'api/v2/accounts/' + (id == null ? '' : encodeURIComponent(id)) + '/', {});
		}

		/**
		 * Access account balances.
		 * Balances will be returned in Berlin Group PSD2 format.
		 * Get api/v2/accounts/{id}/balances/
		 * @return {{[id: string]: any }} Retrieve account balances
		 */
		Retrieve_account_balances_v2(id: string): Observable<{[id: string]: any }> {
			return this.http.get<{[id: string]: any }>(this.baseUri + 'api/v2/accounts/' + (id == null ? '' : encodeURIComponent(id)) + '/balances/', {});
		}

		/**
		 * Access account details.
		 * Account details will be returned in Berlin Group PSD2 format.
		 * Get api/v2/accounts/{id}/details/
		 * @return {{[id: string]: any }} Retrieve account details
		 */
		Retrieve_account_details_v2(id: string): Observable<{[id: string]: any }> {
			return this.http.get<{[id: string]: any }>(this.baseUri + 'api/v2/accounts/' + (id == null ? '' : encodeURIComponent(id)) + '/details/', {});
		}

		/**
		 * Access account transactions.
		 * Transactions will be returned in Berlin Group PSD2 format.
		 * Get api/v2/accounts/{id}/transactions/
		 * @param {Date} date_from Type: DateOnly
		 * @param {Date} date_to Type: DateOnly
		 * @return {{[id: string]: any }} Retrieve account transactions
		 */
		Retrieve_account_transactions_v2_2(date_from: Date | null | undefined, date_to: Date | null | undefined, id: string): Observable<{[id: string]: any }> {
			return this.http.get<{[id: string]: any }>(this.baseUri + 'api/v2/accounts/' + (id == null ? '' : encodeURIComponent(id)) + '/transactions/?date_from=' + date_from?.toISOString() + '&date_to=' + date_to?.toISOString(), {});
		}

		/**
		 * API endpoints related to end-user agreements.
		 * Get api/v2/agreements/enduser/
		 * @param {number} limit Number of results to return per page.
		 *     Minimum: 1
		 * @param {number} offset The initial index from which to return the results.
		 *     Minimum: 1
		 * @return {PaginatedEndUserAgreementList} Retrieve all end user agreements
		 */
		Retrieve_all_EUAs_for_an_end_user_v2(limit: number | null | undefined, offset: number | null | undefined): Observable<PaginatedEndUserAgreementList> {
			return this.http.get<PaginatedEndUserAgreementList>(this.baseUri + 'api/v2/agreements/enduser/?limit=' + limit + '&offset=' + offset, {});
		}

		/**
		 * API endpoints related to end-user agreements.
		 * Post api/v2/agreements/enduser/
		 * @return {void} 
		 */
		Create_EUA_v2(requestBody: EndUserAgreementRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/v2/agreements/enduser/', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete an end user agreement
		 * Delete api/v2/agreements/enduser/{id}/
		 * @param {string} id A UUID string identifying this end user agreement.
		 * @return {void} 
		 */
		Delete_EUA_by_id_v2(id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'api/v2/agreements/enduser/' + (id == null ? '' : encodeURIComponent(id)) + '/', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieve end user agreement by ID
		 * Get api/v2/agreements/enduser/{id}/
		 * @param {string} id A UUID string identifying this end user agreement.
		 * @return {EndUserAgreement} Retrieve end user agreement by ID
		 */
		Retrieve_EUA_by_id_v2(id: string): Observable<EndUserAgreement> {
			return this.http.get<EndUserAgreement>(this.baseUri + 'api/v2/agreements/enduser/' + (id == null ? '' : encodeURIComponent(id)) + '/', {});
		}

		/**
		 * Accept an end-user agreement via the API
		 * Put api/v2/agreements/enduser/{id}/accept/
		 * @param {string} id A UUID string identifying this end user agreement.
		 * @return {EndUserAgreement} Accept end user agreement
		 */
		Accept_EUA(id: string, requestBody: EnduserAcceptanceDetailsRequest): Observable<EndUserAgreement> {
			return this.http.put<EndUserAgreement>(this.baseUri + 'api/v2/agreements/enduser/' + (id == null ? '' : encodeURIComponent(id)) + '/accept/', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List all available institutions
		 * Get api/v2/institutions/
		 * @param {string} country ISO 3166 two-character country code
		 * @param {string} payments_enabled Boolean value, indicating if payments are enabled
		 * @return {Array<Integration>} list of supported Institutions in the country
		 */
		Retrieve_all_supported_Institutions_in_a_given_country(country: string | null | undefined, payments_enabled: string | null | undefined): Observable<Array<Integration>> {
			return this.http.get<Array<Integration>>(this.baseUri + 'api/v2/institutions/?country=' + (country == null ? '' : encodeURIComponent(country)) + '&payments_enabled=' + (payments_enabled == null ? '' : encodeURIComponent(payments_enabled)), {});
		}

		/**
		 * Get details about a specific Institution
		 * Get api/v2/institutions/{id}/
		 * @return {IntegrationRetrieve} Retrieve institution by id
		 */
		Retrieve_institution(id: string): Observable<IntegrationRetrieve> {
			return this.http.get<IntegrationRetrieve>(this.baseUri + 'api/v2/institutions/' + (id == null ? '' : encodeURIComponent(id)) + '/', {});
		}

		/**
		 * Retrieve all payments belonging to the company
		 * Get api/v2/payments/
		 * @param {number} limit Number of results to return per page.
		 *     Minimum: 1
		 * @param {number} offset The initial index from which to return the results.
		 *     Minimum: 1
		 * @return {PaginatedPaymentReadList} List payments
		 */
		List_payments(limit: number | null | undefined, offset: number | null | undefined): Observable<PaginatedPaymentReadList> {
			return this.http.get<PaginatedPaymentReadList>(this.baseUri + 'api/v2/payments/?limit=' + limit + '&offset=' + offset, {});
		}

		/**
		 * Create payment
		 * Post api/v2/payments/
		 * @return {void} 
		 */
		Create_payment(requestBody: PaymentWriteRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/v2/payments/', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieve all payment creditor accounts
		 * Get api/v2/payments/account/
		 * @return {Array<CreditorAccount>} Retrieve all payment creditor accounts
		 */
		Retrieve_all_payment_creditor_accounts(): Observable<Array<CreditorAccount>> {
			return this.http.get<Array<CreditorAccount>>(this.baseUri + 'api/v2/payments/account/', {});
		}

		/**
		 * API endpoints related to creditor accounts.
		 * Get api/v2/payments/creditors/
		 * @param {number} limit Number of results to return per page.
		 *     Minimum: 1
		 * @param {number} offset The initial index from which to return the results.
		 *     Minimum: 1
		 */
		Payments_creditors_list(account: string | null | undefined, address_country: string | null | undefined, agent: string | null | undefined, currency: string | null | undefined, limit: number | null | undefined, name: string | null | undefined, offset: number | null | undefined, type: string | null | undefined): Observable<PaginatedCreditorAccountList> {
			return this.http.get<PaginatedCreditorAccountList>(this.baseUri + 'api/v2/payments/creditors/?account=' + (account == null ? '' : encodeURIComponent(account)) + '&address_country=' + (address_country == null ? '' : encodeURIComponent(address_country)) + '&agent=' + (agent == null ? '' : encodeURIComponent(agent)) + '&currency=' + (currency == null ? '' : encodeURIComponent(currency)) + '&limit=' + limit + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&offset=' + offset + '&type=' + (type == null ? '' : encodeURIComponent(type)), {});
		}

		/**
		 * API endpoints related to creditor accounts.
		 * Post api/v2/payments/creditors/
		 * @return {void} 
		 */
		Payments_creditors_create(requestBody: CreditorAccountWriteRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/v2/payments/creditors/', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * API endpoints related to creditor accounts.
		 * Delete api/v2/payments/creditors/{id}/
		 * @return {void} 
		 */
		Payments_creditors_destroy(id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'api/v2/payments/creditors/' + (id == null ? '' : encodeURIComponent(id)) + '/', { observe: 'response', responseType: 'text' });
		}

		/**
		 * API endpoints related to creditor accounts.
		 * Get api/v2/payments/creditors/{id}/
		 */
		Payments_creditors_retrieve(id: string): Observable<CreditorAccount> {
			return this.http.get<CreditorAccount>(this.baseUri + 'api/v2/payments/creditors/' + (id == null ? '' : encodeURIComponent(id)) + '/', {});
		}

		/**
		 * List minimum required fields for institution
		 * Get api/v2/payments/fields/{institution_id}/
		 * @return {{[id: string]: any }} Minimum required fields
		 */
		List_minimum_required_fields_for_institution(institution_id: string): Observable<{[id: string]: any }> {
			return this.http.get<{[id: string]: any }>(this.baseUri + 'api/v2/payments/fields/' + (institution_id == null ? '' : encodeURIComponent(institution_id)) + '/', {});
		}

		/**
		 * Delete periodic payment
		 * Delete api/v2/payments/{id}/
		 * @return {{[id: string]: any }} Payment deleted
		 */
		Delete_periodic_payment(id: string): Observable<{[id: string]: any }> {
			return this.http.delete<{[id: string]: any }>(this.baseUri + 'api/v2/payments/' + (id == null ? '' : encodeURIComponent(id)) + '/', {});
		}

		/**
		 * Retrieve payment
		 * Get api/v2/payments/{id}/
		 * @return {PaymentRead} Retrieve payment information
		 */
		Retrieve_payment(id: string): Observable<PaymentRead> {
			return this.http.get<PaymentRead>(this.baseUri + 'api/v2/payments/' + (id == null ? '' : encodeURIComponent(id)) + '/', {});
		}

		/**
		 * Initiate the payment on bank's side.
		 * Complete the payment and return payment details as a response.
		 * Post api/v2/payments/{id}/submit/
		 */
		Payments_submit_create(id: string, requestBody: PaymentReadRequest): Observable<PaymentRead> {
			return this.http.post<PaymentRead>(this.baseUri + 'api/v2/payments/' + (id == null ? '' : encodeURIComponent(id)) + '/submit/', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieve all requisitions belonging to the company
		 * Get api/v2/requisitions/
		 * @param {number} limit Number of results to return per page.
		 *     Minimum: 1
		 * @param {number} offset The initial index from which to return the results.
		 *     Minimum: 1
		 * @return {PaginatedRequisitionList} Retrieve all requisitions
		 */
		Retrieve_all_requisitions(limit: number | null | undefined, offset: number | null | undefined): Observable<PaginatedRequisitionList> {
			return this.http.get<PaginatedRequisitionList>(this.baseUri + 'api/v2/requisitions/?limit=' + limit + '&offset=' + offset, {});
		}

		/**
		 * Create a new requisition
		 * Post api/v2/requisitions/
		 * @return {void} 
		 */
		Requisition_created(requestBody: RequisitionRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/v2/requisitions/', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete requisition and its end user agreement
		 * Delete api/v2/requisitions/{id}/
		 * @param {string} id A UUID string identifying this requisition.
		 * @return {void} 
		 */
		Delete_requisition_by_id_v2(id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'api/v2/requisitions/' + (id == null ? '' : encodeURIComponent(id)) + '/', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieve a requisition by ID
		 * Get api/v2/requisitions/{id}/
		 * @param {string} id A UUID string identifying this requisition.
		 * @return {Requisition} Get requisition by ID
		 */
		Requisition_by_id(id: string): Observable<Requisition> {
			return this.http.get<Requisition>(this.baseUri + 'api/v2/requisitions/' + (id == null ? '' : encodeURIComponent(id)) + '/', {});
		}

		/**
		 * Obtain JWT pair
		 * Post api/v2/token/new/
		 * @return {SpectacularJWTObtain} Obtain JWT response.
		 */
		JWT_Obtain(requestBody: JWTObtainPairRequest): Observable<SpectacularJWTObtain> {
			return this.http.post<SpectacularJWTObtain>(this.baseUri + 'api/v2/token/new/', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Refresh access token
		 * Post api/v2/token/refresh/
		 * @return {SpectacularJWTRefresh} Refresh access token.
		 */
		JWT_Refresh(requestBody: JWTRefreshRequest): Observable<SpectacularJWTRefresh> {
			return this.http.post<SpectacularJWTRefresh>(this.baseUri + 'api/v2/token/refresh/', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

