import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface CredasApiModelsBankAccountsAccountDetails {

		/** Required */
		accountNumber: string;

		/** Required */
		sortcode: string;
	}
	export interface CredasApiModelsBankAccountsAccountDetailsFormProperties {

		/** Required */
		accountNumber: FormControl<string | null | undefined>,

		/** Required */
		sortcode: FormControl<string | null | undefined>,
	}
	export function CreateCredasApiModelsBankAccountsAccountDetailsFormGroup() {
		return new FormGroup<CredasApiModelsBankAccountsAccountDetailsFormProperties>({
			accountNumber: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sortcode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CredasApiModelsBankAccountsAccountVerificationRequest {

		/** Required */
		accountDetails: CredasApiModelsBankAccountsAccountDetails;

		/** Required */
		address: CredasApiModelsDataCheckAddress;

		/** Required */
		person: CredasApiModelsBankAccountsPerson;

		/** Required */
		regEntryId: string;
	}
	export interface CredasApiModelsBankAccountsAccountVerificationRequestFormProperties {

		/** Required */
		regEntryId: FormControl<string | null | undefined>,
	}
	export function CreateCredasApiModelsBankAccountsAccountVerificationRequestFormGroup() {
		return new FormGroup<CredasApiModelsBankAccountsAccountVerificationRequestFormProperties>({
			regEntryId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CredasApiModelsDataCheckAddress {

		/** Required */
		addressLine1: string;
		addressLine2?: string | null;
		addressLine3?: string | null;

		/** Required */
		city: string;

		/** Required */
		country: string;
		county?: string | null;

		/** Required */
		postcode: string;
	}
	export interface CredasApiModelsDataCheckAddressFormProperties {

		/** Required */
		addressLine1: FormControl<string | null | undefined>,
		addressLine2: FormControl<string | null | undefined>,
		addressLine3: FormControl<string | null | undefined>,

		/** Required */
		city: FormControl<string | null | undefined>,

		/** Required */
		country: FormControl<string | null | undefined>,
		county: FormControl<string | null | undefined>,

		/** Required */
		postcode: FormControl<string | null | undefined>,
	}
	export function CreateCredasApiModelsDataCheckAddressFormGroup() {
		return new FormGroup<CredasApiModelsDataCheckAddressFormProperties>({
			addressLine1: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^([A-Za-z0-9 \'\.,&\(\)\/-]*)$')]),
			addressLine2: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^([A-Za-z0-9 \'\.,&\(\)\/-]*)$')]),
			addressLine3: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^([A-Za-z0-9 \'\.,&\(\)\/-]*)$')]),
			city: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^([A-Za-z0-9 \'\.,&\(\)\/-]*)$')]),
			country: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^([A-Za-z0-9 \'\.,&\(\)\/-]*)$')]),
			county: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^([A-Za-z0-9 \'\.,&\(\)\/-]*)$')]),
			postcode: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^([A-Za-z0-9 \'\.,&\(\)\/-]*)$')]),
		});

	}

	export interface CredasApiModelsBankAccountsPerson {

		/** Required */
		forename: string;
		middleName?: string | null;

		/** Required */
		surname: string;
	}
	export interface CredasApiModelsBankAccountsPersonFormProperties {

		/** Required */
		forename: FormControl<string | null | undefined>,
		middleName: FormControl<string | null | undefined>,

		/** Required */
		surname: FormControl<string | null | undefined>,
	}
	export function CreateCredasApiModelsBankAccountsPersonFormGroup() {
		return new FormGroup<CredasApiModelsBankAccountsPersonFormProperties>({
			forename: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			middleName: new FormControl<string | null | undefined>(undefined),
			surname: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CredasApiModelsBankAccountsAccountVerificationResponse {
		Address1?: string | null;
		City?: string | null;
		Forename?: string | null;
		MiddleName?: string | null;
		PostCode?: string | null;
		Surname?: string | null;
		accountNumber?: string | null;

		/** Unknown = 0, NoMatch = 1, Valid = 2, Invalid = 3, SevenDigitsMatched = 4, SixDigitsMatched = 5 */
		accountNumberValidation?: CredasApiModelsBankAccountsAccountVerificationResponseAccountNumberValidation;
		accountNumberValidationText?: string | null;

		/** Unknown = 0, NoMatch = 1, Live = 2, ClosedOrSettled = 3 */
		accountStatus?: CredasApiModelsBankAccountsAccountVerificationResponseAccountStatus;
		accountStatusText?: string | null;
		accountValid?: boolean | null;

		/** Unknown = 0, NoMatch = 1, CurrentAddress = 2, PreviousAddress = 3, ForwardingAddress = 4 */
		addressValidation?: CredasApiModelsBankAccountsAccountVerificationResponseAddressValidation;
		addressValidationText?: string | null;
		checkDate?: Date | null;
		checkId?: string | null;

		/** Unknown = 0, Pass = 1, Refer = 2, Fail = 3 */
		checkStatus?: CredasApiModelsBankAccountsAccountVerificationResponseCheckStatus;
		error?: boolean | null;
		hasBeenOverridden?: boolean | null;

		/** Unknown = 0, NoMatch = 1, Valid = 2 */
		nameValidation?: CredasApiModelsBankAccountsAccountVerificationResponseNameValidation;
		nameValidationText?: string | null;
		referenceId?: string | null;
		sortcode?: string | null;

		/** Unknown = 0, NoMatch = 1, Valid = 2, Invalid = 3, FiveDigitsMatched = 4 */
		sortcodeValidation?: CredasApiModelsBankAccountsAccountVerificationResponseSortcodeValidation;
		sortcodeValidationText?: string | null;
	}
	export interface CredasApiModelsBankAccountsAccountVerificationResponseFormProperties {
		Address1: FormControl<string | null | undefined>,
		City: FormControl<string | null | undefined>,
		Forename: FormControl<string | null | undefined>,
		MiddleName: FormControl<string | null | undefined>,
		PostCode: FormControl<string | null | undefined>,
		Surname: FormControl<string | null | undefined>,
		accountNumber: FormControl<string | null | undefined>,

		/** Unknown = 0, NoMatch = 1, Valid = 2, Invalid = 3, SevenDigitsMatched = 4, SixDigitsMatched = 5 */
		accountNumberValidation: FormControl<CredasApiModelsBankAccountsAccountVerificationResponseAccountNumberValidation | null | undefined>,
		accountNumberValidationText: FormControl<string | null | undefined>,

		/** Unknown = 0, NoMatch = 1, Live = 2, ClosedOrSettled = 3 */
		accountStatus: FormControl<CredasApiModelsBankAccountsAccountVerificationResponseAccountStatus | null | undefined>,
		accountStatusText: FormControl<string | null | undefined>,
		accountValid: FormControl<boolean | null | undefined>,

		/** Unknown = 0, NoMatch = 1, CurrentAddress = 2, PreviousAddress = 3, ForwardingAddress = 4 */
		addressValidation: FormControl<CredasApiModelsBankAccountsAccountVerificationResponseAddressValidation | null | undefined>,
		addressValidationText: FormControl<string | null | undefined>,
		checkDate: FormControl<Date | null | undefined>,
		checkId: FormControl<string | null | undefined>,

		/** Unknown = 0, Pass = 1, Refer = 2, Fail = 3 */
		checkStatus: FormControl<CredasApiModelsBankAccountsAccountVerificationResponseCheckStatus | null | undefined>,
		error: FormControl<boolean | null | undefined>,
		hasBeenOverridden: FormControl<boolean | null | undefined>,

		/** Unknown = 0, NoMatch = 1, Valid = 2 */
		nameValidation: FormControl<CredasApiModelsBankAccountsAccountVerificationResponseNameValidation | null | undefined>,
		nameValidationText: FormControl<string | null | undefined>,
		referenceId: FormControl<string | null | undefined>,
		sortcode: FormControl<string | null | undefined>,

		/** Unknown = 0, NoMatch = 1, Valid = 2, Invalid = 3, FiveDigitsMatched = 4 */
		sortcodeValidation: FormControl<CredasApiModelsBankAccountsAccountVerificationResponseSortcodeValidation | null | undefined>,
		sortcodeValidationText: FormControl<string | null | undefined>,
	}
	export function CreateCredasApiModelsBankAccountsAccountVerificationResponseFormGroup() {
		return new FormGroup<CredasApiModelsBankAccountsAccountVerificationResponseFormProperties>({
			Address1: new FormControl<string | null | undefined>(undefined),
			City: new FormControl<string | null | undefined>(undefined),
			Forename: new FormControl<string | null | undefined>(undefined),
			MiddleName: new FormControl<string | null | undefined>(undefined),
			PostCode: new FormControl<string | null | undefined>(undefined),
			Surname: new FormControl<string | null | undefined>(undefined),
			accountNumber: new FormControl<string | null | undefined>(undefined),
			accountNumberValidation: new FormControl<CredasApiModelsBankAccountsAccountVerificationResponseAccountNumberValidation | null | undefined>(undefined),
			accountNumberValidationText: new FormControl<string | null | undefined>(undefined),
			accountStatus: new FormControl<CredasApiModelsBankAccountsAccountVerificationResponseAccountStatus | null | undefined>(undefined),
			accountStatusText: new FormControl<string | null | undefined>(undefined),
			accountValid: new FormControl<boolean | null | undefined>(undefined),
			addressValidation: new FormControl<CredasApiModelsBankAccountsAccountVerificationResponseAddressValidation | null | undefined>(undefined),
			addressValidationText: new FormControl<string | null | undefined>(undefined),
			checkDate: new FormControl<Date | null | undefined>(undefined),
			checkId: new FormControl<string | null | undefined>(undefined),
			checkStatus: new FormControl<CredasApiModelsBankAccountsAccountVerificationResponseCheckStatus | null | undefined>(undefined),
			error: new FormControl<boolean | null | undefined>(undefined),
			hasBeenOverridden: new FormControl<boolean | null | undefined>(undefined),
			nameValidation: new FormControl<CredasApiModelsBankAccountsAccountVerificationResponseNameValidation | null | undefined>(undefined),
			nameValidationText: new FormControl<string | null | undefined>(undefined),
			referenceId: new FormControl<string | null | undefined>(undefined),
			sortcode: new FormControl<string | null | undefined>(undefined),
			sortcodeValidation: new FormControl<CredasApiModelsBankAccountsAccountVerificationResponseSortcodeValidation | null | undefined>(undefined),
			sortcodeValidationText: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum CredasApiModelsBankAccountsAccountVerificationResponseAccountNumberValidation { _0 = 0, _1 = 1, _2 = 2, _3 = 3, _4 = 4, _5 = 5 }

	export enum CredasApiModelsBankAccountsAccountVerificationResponseAccountStatus { _0 = 0, _1 = 1, _2 = 2, _3 = 3 }

	export enum CredasApiModelsBankAccountsAccountVerificationResponseAddressValidation { _0 = 0, _1 = 1, _2 = 2, _3 = 3, _4 = 4 }

	export enum CredasApiModelsBankAccountsAccountVerificationResponseCheckStatus { _0 = 0, _1 = 1, _2 = 2, _3 = 3 }

	export enum CredasApiModelsBankAccountsAccountVerificationResponseNameValidation { _0 = 0, _1 = 1, _2 = 2 }

	export enum CredasApiModelsBankAccountsAccountVerificationResponseSortcodeValidation { _0 = 0, _1 = 1, _2 = 2, _3 = 3, _4 = 4 }

	export interface CredasApiModelsCompaniesCompanyDetail {
		addressLine1?: string | null;
		companyName?: string | null;
		companyNumber?: string | null;
		dateOfRegistration?: Date | null;
		duplicate?: boolean | null;
		id?: string | null;
		locality?: string | null;
		postCode?: string | null;
		region?: string | null;
		significantParentCompanies?: Array<CredasApiModelsCompaniesCompanyDetail>;
		significantPeople?: Array<CredasApiModelsCompaniesSignificantPerson>;
	}
	export interface CredasApiModelsCompaniesCompanyDetailFormProperties {
		addressLine1: FormControl<string | null | undefined>,
		companyName: FormControl<string | null | undefined>,
		companyNumber: FormControl<string | null | undefined>,
		dateOfRegistration: FormControl<Date | null | undefined>,
		duplicate: FormControl<boolean | null | undefined>,
		id: FormControl<string | null | undefined>,
		locality: FormControl<string | null | undefined>,
		postCode: FormControl<string | null | undefined>,
		region: FormControl<string | null | undefined>,
	}
	export function CreateCredasApiModelsCompaniesCompanyDetailFormGroup() {
		return new FormGroup<CredasApiModelsCompaniesCompanyDetailFormProperties>({
			addressLine1: new FormControl<string | null | undefined>(undefined),
			companyName: new FormControl<string | null | undefined>(undefined),
			companyNumber: new FormControl<string | null | undefined>(undefined),
			dateOfRegistration: new FormControl<Date | null | undefined>(undefined),
			duplicate: new FormControl<boolean | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			locality: new FormControl<string | null | undefined>(undefined),
			postCode: new FormControl<string | null | undefined>(undefined),
			region: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CredasApiModelsCompaniesSignificantPerson {
		forename?: string | null;
		id?: string | null;
		regEntryId?: string | null;
		surname?: string | null;
	}
	export interface CredasApiModelsCompaniesSignificantPersonFormProperties {
		forename: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		regEntryId: FormControl<string | null | undefined>,
		surname: FormControl<string | null | undefined>,
	}
	export function CreateCredasApiModelsCompaniesSignificantPersonFormGroup() {
		return new FormGroup<CredasApiModelsCompaniesSignificantPersonFormProperties>({
			forename: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			regEntryId: new FormControl<string | null | undefined>(undefined),
			surname: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CredasApiModelsDataCheckAddDataCheckRequest {

		/**
		 * The value of checkType dictates what checks are performed. <br/>The StandardAml check (value = 1) will check DOB & Mortality. <br/>The InternationalPepSanctions check (value = 3) will check just International PEP & Sanctions. <br/>The EnhancedAml check (value = 2) will perform both these checks and is equivalent to making two calls with values of 1 then 3 and will be charged accordingly. <br />  values=> None = 0, StandardAml = 1, EnhancedAml = 2, InternationalPepSanctions = 3
		 * Required
		 */
		checkType: CredasApiModelsDataCheckAddDataCheckRequestCheckType;

		/** Required */
		currentAddress: CredasApiModelsDataCheckAddress;

		/** Required */
		person: CredasApiModelsDataCheckPerson;

		/** Required */
		regEntryId: string;
	}
	export interface CredasApiModelsDataCheckAddDataCheckRequestFormProperties {

		/**
		 * The value of checkType dictates what checks are performed. <br/>The StandardAml check (value = 1) will check DOB & Mortality. <br/>The InternationalPepSanctions check (value = 3) will check just International PEP & Sanctions. <br/>The EnhancedAml check (value = 2) will perform both these checks and is equivalent to making two calls with values of 1 then 3 and will be charged accordingly. <br />  values=> None = 0, StandardAml = 1, EnhancedAml = 2, InternationalPepSanctions = 3
		 * Required
		 */
		checkType: FormControl<CredasApiModelsDataCheckAddDataCheckRequestCheckType | null | undefined>,

		/** Required */
		regEntryId: FormControl<string | null | undefined>,
	}
	export function CreateCredasApiModelsDataCheckAddDataCheckRequestFormGroup() {
		return new FormGroup<CredasApiModelsDataCheckAddDataCheckRequestFormProperties>({
			checkType: new FormControl<CredasApiModelsDataCheckAddDataCheckRequestCheckType | null | undefined>(undefined, [Validators.required]),
			regEntryId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum CredasApiModelsDataCheckAddDataCheckRequestCheckType { _0 = 0, _1 = 1, _2 = 2, _3 = 3 }

	export interface CredasApiModelsDataCheckPerson {

		/** Required */
		dateOfBirth: Date;

		/** Required */
		forename: string;
		middleName?: string | null;

		/** Required */
		surname: string;
	}
	export interface CredasApiModelsDataCheckPersonFormProperties {

		/** Required */
		dateOfBirth: FormControl<Date | null | undefined>,

		/** Required */
		forename: FormControl<string | null | undefined>,
		middleName: FormControl<string | null | undefined>,

		/** Required */
		surname: FormControl<string | null | undefined>,
	}
	export function CreateCredasApiModelsDataCheckPersonFormGroup() {
		return new FormGroup<CredasApiModelsDataCheckPersonFormProperties>({
			dateOfBirth: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			forename: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^([A-Za-z0-9 \'\.,&\(\)\/-]*)$')]),
			middleName: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^([A-Za-z0-9 \'\.,&\(\)\/-]*)$')]),
			surname: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^([A-Za-z0-9 \'\.,&\(\)\/-]*)$')]),
		});

	}

	export interface CredasApiModelsDataCheckAddDataCheckResponse {

		/** Required */
		id: string;

		/** Required */
		regCode: string;
	}
	export interface CredasApiModelsDataCheckAddDataCheckResponseFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		regCode: FormControl<string | null | undefined>,
	}
	export function CreateCredasApiModelsDataCheckAddDataCheckResponseFormGroup() {
		return new FormGroup<CredasApiModelsDataCheckAddDataCheckResponseFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			regCode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CredasApiModelsDataCheckCheckRemark {

		/** Match = 1, Mismatch = 2, Warning = 3, Comment = 4 */
		category?: CredasApiModelsDataCheckCheckRemarkCategory;
		description?: string | null;
	}
	export interface CredasApiModelsDataCheckCheckRemarkFormProperties {

		/** Match = 1, Mismatch = 2, Warning = 3, Comment = 4 */
		category: FormControl<CredasApiModelsDataCheckCheckRemarkCategory | null | undefined>,
		description: FormControl<string | null | undefined>,
	}
	export function CreateCredasApiModelsDataCheckCheckRemarkFormGroup() {
		return new FormGroup<CredasApiModelsDataCheckCheckRemarkFormProperties>({
			category: new FormControl<CredasApiModelsDataCheckCheckRemarkCategory | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum CredasApiModelsDataCheckCheckRemarkCategory { _1 = 0, _2 = 1, _3 = 2, _4 = 3 }

	export interface CredasApiModelsDataCheckPepSanctionsPepSanctionItem {
		addresses?: Array<CredasApiModelsDataCheckPepSanctionsSanctionAddress>;
		aliases?: Array<string>;
		fullName?: string | null;
		id?: string | null;
		positions?: Array<CredasApiModelsDataCheckPepSanctionsSanctionPosition>;
		sanctionBodies?: Array<string>;
		sanctionDates?: Array<CredasApiModelsDataCheckPepSanctionsSanctionDate>;
	}
	export interface CredasApiModelsDataCheckPepSanctionsPepSanctionItemFormProperties {
		fullName: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
	}
	export function CreateCredasApiModelsDataCheckPepSanctionsPepSanctionItemFormGroup() {
		return new FormGroup<CredasApiModelsDataCheckPepSanctionsPepSanctionItemFormProperties>({
			fullName: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CredasApiModelsDataCheckPepSanctionsSanctionAddress {
		lines?: Array<string>;
	}
	export interface CredasApiModelsDataCheckPepSanctionsSanctionAddressFormProperties {
	}
	export function CreateCredasApiModelsDataCheckPepSanctionsSanctionAddressFormGroup() {
		return new FormGroup<CredasApiModelsDataCheckPepSanctionsSanctionAddressFormProperties>({
		});

	}

	export interface CredasApiModelsDataCheckPepSanctionsSanctionPosition {
		country?: string | null;
		position?: string | null;
	}
	export interface CredasApiModelsDataCheckPepSanctionsSanctionPositionFormProperties {
		country: FormControl<string | null | undefined>,
		position: FormControl<string | null | undefined>,
	}
	export function CreateCredasApiModelsDataCheckPepSanctionsSanctionPositionFormGroup() {
		return new FormGroup<CredasApiModelsDataCheckPepSanctionsSanctionPositionFormProperties>({
			country: new FormControl<string | null | undefined>(undefined),
			position: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CredasApiModelsDataCheckPepSanctionsSanctionDate {
		date?: Date | null;
		day?: number | null;
		month?: number | null;

		/** Unknown = 0, Birth = 1, Death = 2 */
		type?: CredasApiModelsDataCheckPepSanctionsSanctionDateType;
		year?: number | null;
	}
	export interface CredasApiModelsDataCheckPepSanctionsSanctionDateFormProperties {
		date: FormControl<Date | null | undefined>,
		day: FormControl<number | null | undefined>,
		month: FormControl<number | null | undefined>,

		/** Unknown = 0, Birth = 1, Death = 2 */
		type: FormControl<CredasApiModelsDataCheckPepSanctionsSanctionDateType | null | undefined>,
		year: FormControl<number | null | undefined>,
	}
	export function CreateCredasApiModelsDataCheckPepSanctionsSanctionDateFormGroup() {
		return new FormGroup<CredasApiModelsDataCheckPepSanctionsSanctionDateFormProperties>({
			date: new FormControl<Date | null | undefined>(undefined),
			day: new FormControl<number | null | undefined>(undefined),
			month: new FormControl<number | null | undefined>(undefined),
			type: new FormControl<CredasApiModelsDataCheckPepSanctionsSanctionDateType | null | undefined>(undefined),
			year: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum CredasApiModelsDataCheckPepSanctionsSanctionDateType { _0 = 0, _1 = 1, _2 = 2 }

	export interface CredasApiModelsErrorsErrorResponse {
		details?: string | null;
		message?: string | null;
	}
	export interface CredasApiModelsErrorsErrorResponseFormProperties {
		details: FormControl<string | null | undefined>,
		message: FormControl<string | null | undefined>,
	}
	export function CreateCredasApiModelsErrorsErrorResponseFormGroup() {
		return new FormGroup<CredasApiModelsErrorsErrorResponseFormProperties>({
			details: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CredasApiModelsImagesAddIdDocumentImageRequest {
		documentParameters?: Array<CredasApiModelsRegistrationsKeyValueItem>;

		/**
		 * Other = 0, Passport = 1, DrivingLicence = 2, Visa = 3, CscsCard = 4, HomeOfficeLetter = 5, BirthCertificate = 6, NationalIdCard = 7, ResidencePermit = 9, UtilityBill = 11
		 * Required
		 */
		documentType: CredasApiModelsImagesAddIdDocumentImageRequestDocumentType;

		/** Required */
		imageData: string;

		/** Required */
		registrationId: string;
	}
	export interface CredasApiModelsImagesAddIdDocumentImageRequestFormProperties {

		/**
		 * Other = 0, Passport = 1, DrivingLicence = 2, Visa = 3, CscsCard = 4, HomeOfficeLetter = 5, BirthCertificate = 6, NationalIdCard = 7, ResidencePermit = 9, UtilityBill = 11
		 * Required
		 */
		documentType: FormControl<CredasApiModelsImagesAddIdDocumentImageRequestDocumentType | null | undefined>,

		/** Required */
		imageData: FormControl<string | null | undefined>,

		/** Required */
		registrationId: FormControl<string | null | undefined>,
	}
	export function CreateCredasApiModelsImagesAddIdDocumentImageRequestFormGroup() {
		return new FormGroup<CredasApiModelsImagesAddIdDocumentImageRequestFormProperties>({
			documentType: new FormControl<CredasApiModelsImagesAddIdDocumentImageRequestDocumentType | null | undefined>(undefined, [Validators.required]),
			imageData: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			registrationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CredasApiModelsRegistrationsKeyValueItem {
		key?: string | null;
		value?: string | null;
	}
	export interface CredasApiModelsRegistrationsKeyValueItemFormProperties {
		key: FormControl<string | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreateCredasApiModelsRegistrationsKeyValueItemFormGroup() {
		return new FormGroup<CredasApiModelsRegistrationsKeyValueItemFormProperties>({
			key: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum CredasApiModelsImagesAddIdDocumentImageRequestDocumentType { _0 = 0, _1 = 1, _2 = 2, _3 = 3, _4 = 4, _5 = 5, _6 = 6, _7 = 7, _9 = 8, _10 = 9, _11 = 10 }

	export interface CredasApiModelsImagesAddIdDocumentImageResponse {

		/**
		 * Active = 1, Deleted = 2, UnderReview = 3
		 * Required
		 */
		documentStatus: CredasApiModelsImagesAddIdDocumentImageResponseDocumentStatus;

		/**
		 * Unknown = 0, Passport = 1, DrivingLicense = 2, IdentificationCard = 3, TaxLetter = 4, NIC_Letter = 5, TV_Licence = 6, UtilityBill = 7, HighRiskWorkLicence = 8, TravelPermit = 9, BankLetter = 10, BenefitLetter = 11, BankStatement = 12, NINO_Letter = 13, CouncilTax = 14, ResidentPermit = 15, PhotoCard = 16, RepaymentLetter = 17, Invoice = 18, Visa = 19, AgeIdentificationCard = 20, MedicareCard = 21, MilitaryIdentificationCard = 22, UtilityLetter = 23, CouncilDocument = 24, JobLicence = 25, MembershipIDCard = 26, MilitaryIDCard = 27, ProofOfAgeCard = 28, TravelPermitNew = 29, WeaponsLicence = 30, AccountStatement = 41, TenancyAgreement = 42, BankDocument = 43, BankLetterNew = 44, BankStatementNew = 45, BenefitLetterNew = 46, CouncilDocumentNew = 48, CouncilLetter = 49, CouncilTaxNew = 50, DWPDocument = 51, HMRCDocument = 52, InformationSheet = 53, InsuranceDocument = 54, InsuranceLetter = 55, InvoiceNew = 56, NICLetter = 57, NINOLetter = 58, OfficialDocument = 59, OfficialLetter = 60, RepaymentLetterNew = 61, TaxLetterNew = 62, TaxStatement = 63, TelBill = 64, TelLetter = 65, TelecommunicationDocument = 66, TVLicence = 67, UniversityLetter = 68, UtilityBillNew = 69, UtilityDocument = 70, UtilityLetterNew = 71, WaterBill = 72, WaterDocument = 73, HighRiskWorkLicenceNew = 74, PhotoCardNew = 75, MedicareCardNew = 76, Certificate = 77
		 * Required
		 */
		documentType: CredasApiModelsImagesAddIdDocumentImageResponseDocumentType;

		/** Required */
		facialMatch: boolean;

		/** Required */
		id: string;

		/** Required */
		regCode: string;
	}
	export interface CredasApiModelsImagesAddIdDocumentImageResponseFormProperties {

		/**
		 * Active = 1, Deleted = 2, UnderReview = 3
		 * Required
		 */
		documentStatus: FormControl<CredasApiModelsImagesAddIdDocumentImageResponseDocumentStatus | null | undefined>,

		/**
		 * Unknown = 0, Passport = 1, DrivingLicense = 2, IdentificationCard = 3, TaxLetter = 4, NIC_Letter = 5, TV_Licence = 6, UtilityBill = 7, HighRiskWorkLicence = 8, TravelPermit = 9, BankLetter = 10, BenefitLetter = 11, BankStatement = 12, NINO_Letter = 13, CouncilTax = 14, ResidentPermit = 15, PhotoCard = 16, RepaymentLetter = 17, Invoice = 18, Visa = 19, AgeIdentificationCard = 20, MedicareCard = 21, MilitaryIdentificationCard = 22, UtilityLetter = 23, CouncilDocument = 24, JobLicence = 25, MembershipIDCard = 26, MilitaryIDCard = 27, ProofOfAgeCard = 28, TravelPermitNew = 29, WeaponsLicence = 30, AccountStatement = 41, TenancyAgreement = 42, BankDocument = 43, BankLetterNew = 44, BankStatementNew = 45, BenefitLetterNew = 46, CouncilDocumentNew = 48, CouncilLetter = 49, CouncilTaxNew = 50, DWPDocument = 51, HMRCDocument = 52, InformationSheet = 53, InsuranceDocument = 54, InsuranceLetter = 55, InvoiceNew = 56, NICLetter = 57, NINOLetter = 58, OfficialDocument = 59, OfficialLetter = 60, RepaymentLetterNew = 61, TaxLetterNew = 62, TaxStatement = 63, TelBill = 64, TelLetter = 65, TelecommunicationDocument = 66, TVLicence = 67, UniversityLetter = 68, UtilityBillNew = 69, UtilityDocument = 70, UtilityLetterNew = 71, WaterBill = 72, WaterDocument = 73, HighRiskWorkLicenceNew = 74, PhotoCardNew = 75, MedicareCardNew = 76, Certificate = 77
		 * Required
		 */
		documentType: FormControl<CredasApiModelsImagesAddIdDocumentImageResponseDocumentType | null | undefined>,

		/** Required */
		facialMatch: FormControl<boolean | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		regCode: FormControl<string | null | undefined>,
	}
	export function CreateCredasApiModelsImagesAddIdDocumentImageResponseFormGroup() {
		return new FormGroup<CredasApiModelsImagesAddIdDocumentImageResponseFormProperties>({
			documentStatus: new FormControl<CredasApiModelsImagesAddIdDocumentImageResponseDocumentStatus | null | undefined>(undefined, [Validators.required]),
			documentType: new FormControl<CredasApiModelsImagesAddIdDocumentImageResponseDocumentType | null | undefined>(undefined, [Validators.required]),
			facialMatch: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			regCode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum CredasApiModelsImagesAddIdDocumentImageResponseDocumentStatus { _1 = 0, _2 = 1, _3 = 2 }

	export enum CredasApiModelsImagesAddIdDocumentImageResponseDocumentType { _0 = 0, _1 = 1, _2 = 2, _3 = 3, _4 = 4, _5 = 5, _6 = 6, _7 = 7, _8 = 8, _9 = 9, _10 = 10, _11 = 11, _12 = 12, _13 = 13, _14 = 14, _15 = 15, _16 = 16, _17 = 17, _18 = 18, _19 = 19, _20 = 20, _21 = 21, _22 = 22, _23 = 23, _24 = 24, _25 = 25, _26 = 26, _27 = 27, _28 = 28, _29 = 29, _30 = 30, _41 = 31, _42 = 32, _43 = 33, _44 = 34, _45 = 35, _46 = 36, _48 = 37, _49 = 38, _50 = 39, _51 = 40, _52 = 41, _53 = 42, _54 = 43, _55 = 44, _56 = 45, _57 = 46, _58 = 47, _59 = 48, _60 = 49, _61 = 50, _62 = 51, _63 = 52, _64 = 53, _65 = 54, _66 = 55, _67 = 56, _68 = 57, _69 = 58, _70 = 59, _71 = 60, _72 = 61, _73 = 62, _74 = 63, _75 = 64, _76 = 65, _77 = 66 }

	export interface CredasApiModelsImagesAddLivenessImageRequest {

		/** Required */
		imageData: string;

		/** Required */
		registrationId: string;
	}
	export interface CredasApiModelsImagesAddLivenessImageRequestFormProperties {

		/** Required */
		imageData: FormControl<string | null | undefined>,

		/** Required */
		registrationId: FormControl<string | null | undefined>,
	}
	export function CreateCredasApiModelsImagesAddLivenessImageRequestFormGroup() {
		return new FormGroup<CredasApiModelsImagesAddLivenessImageRequestFormProperties>({
			imageData: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			registrationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CredasApiModelsImagesAddSelfieImageRequest {

		/** Required */
		imageData: string;

		/** Required */
		registrationId: string;
	}
	export interface CredasApiModelsImagesAddSelfieImageRequestFormProperties {

		/** Required */
		imageData: FormControl<string | null | undefined>,

		/** Required */
		registrationId: FormControl<string | null | undefined>,
	}
	export function CreateCredasApiModelsImagesAddSelfieImageRequestFormGroup() {
		return new FormGroup<CredasApiModelsImagesAddSelfieImageRequestFormProperties>({
			imageData: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			registrationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CredasApiModelsImagesAddSelfieImageResponse {

		/** Required */
		livenessConfirmed: boolean;
	}
	export interface CredasApiModelsImagesAddSelfieImageResponseFormProperties {

		/** Required */
		livenessConfirmed: FormControl<boolean | null | undefined>,
	}
	export function CreateCredasApiModelsImagesAddSelfieImageResponseFormGroup() {
		return new FormGroup<CredasApiModelsImagesAddSelfieImageResponseFormProperties>({
			livenessConfirmed: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CredasApiModelsImagesGetIdDocumentImageResponse {
		addressCity?: string | null;
		addressFull?: string | null;
		addressPostcode?: string | null;
		country?: string | null;
		countryCode?: string | null;

		/** Required */
		dateCreated: Date;
		dateOfBirth?: Date | null;

		/** Required */
		description: string;

		/** Unknown = 0, Passed = 1, Refer = 2, Expired = 3, NotSupported = 4, Undefined = 5, Fail = 10, NotPerformed = 11 */
		documentAnalysisResult?: CredasApiModelsImagesGetIdDocumentImageResponseDocumentAnalysisResult;
		documentNumber?: string | null;

		/** Front = 1, Back = 2 */
		documentSide?: CredasApiModelsImagesGetIdDocumentImageResponseDocumentSide;
		expiryDate?: Date | null;

		/** Required */
		facialMatch: boolean;
		forename?: string | null;
		fullName?: string | null;

		/** Required */
		hiResUrl: string;

		/** Required */
		id: string;
		isUnderReview?: boolean | null;
		manuallyVerified?: boolean | null;
		middleName?: string | null;
		mrz1?: string | null;
		mrz2?: string | null;
		mrz3?: string | null;

		/** Required */
		nameCheck: boolean;

		/**
		 * Unknown = 0, Automatic = 1, Manual = 2
		 * Required
		 */
		nameCheckMethod: CredasApiModelsImagesGetIdDocumentImageResponseNameCheckMethod;

		/** Required */
		nfcCheck: boolean;
		nfcFacialUrl?: string | null;

		/**
		 * Unknown = 0, Passed = 1, Failed = 2, NotAttempted = 3, Skipped = 4, Unavailable = 5, NotAllowed = 6, NotTrusted = 7, NotApplicable = 8, Expired = 9, UnavailableWebJourney = 10
		 * Required
		 */
		nfcReadStatus: CredasApiModelsImagesGetIdDocumentImageResponseNfcReadStatus;
		primaryScanId?: string | null;

		/**
		 * Indicates the verification status of the document itself by combining visual analysis and NFC verification results. </br>Note that this may be a pass even if facial or name matches have failed.<br />  values=> Unknown = 0, Pass = 1, Refer = 2, Fail = 3
		 * Required
		 */
		status: CredasApiModelsImagesGetIdDocumentImageResponseStatus;
		surname?: string | null;

		/** Required */
		url: string;
	}
	export interface CredasApiModelsImagesGetIdDocumentImageResponseFormProperties {
		addressCity: FormControl<string | null | undefined>,
		addressFull: FormControl<string | null | undefined>,
		addressPostcode: FormControl<string | null | undefined>,
		country: FormControl<string | null | undefined>,
		countryCode: FormControl<string | null | undefined>,

		/** Required */
		dateCreated: FormControl<Date | null | undefined>,
		dateOfBirth: FormControl<Date | null | undefined>,

		/** Required */
		description: FormControl<string | null | undefined>,

		/** Unknown = 0, Passed = 1, Refer = 2, Expired = 3, NotSupported = 4, Undefined = 5, Fail = 10, NotPerformed = 11 */
		documentAnalysisResult: FormControl<CredasApiModelsImagesGetIdDocumentImageResponseDocumentAnalysisResult | null | undefined>,
		documentNumber: FormControl<string | null | undefined>,

		/** Front = 1, Back = 2 */
		documentSide: FormControl<CredasApiModelsImagesGetIdDocumentImageResponseDocumentSide | null | undefined>,
		expiryDate: FormControl<Date | null | undefined>,

		/** Required */
		facialMatch: FormControl<boolean | null | undefined>,
		forename: FormControl<string | null | undefined>,
		fullName: FormControl<string | null | undefined>,

		/** Required */
		hiResUrl: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,
		isUnderReview: FormControl<boolean | null | undefined>,
		manuallyVerified: FormControl<boolean | null | undefined>,
		middleName: FormControl<string | null | undefined>,
		mrz1: FormControl<string | null | undefined>,
		mrz2: FormControl<string | null | undefined>,
		mrz3: FormControl<string | null | undefined>,

		/** Required */
		nameCheck: FormControl<boolean | null | undefined>,

		/**
		 * Unknown = 0, Automatic = 1, Manual = 2
		 * Required
		 */
		nameCheckMethod: FormControl<CredasApiModelsImagesGetIdDocumentImageResponseNameCheckMethod | null | undefined>,

		/** Required */
		nfcCheck: FormControl<boolean | null | undefined>,
		nfcFacialUrl: FormControl<string | null | undefined>,

		/**
		 * Unknown = 0, Passed = 1, Failed = 2, NotAttempted = 3, Skipped = 4, Unavailable = 5, NotAllowed = 6, NotTrusted = 7, NotApplicable = 8, Expired = 9, UnavailableWebJourney = 10
		 * Required
		 */
		nfcReadStatus: FormControl<CredasApiModelsImagesGetIdDocumentImageResponseNfcReadStatus | null | undefined>,
		primaryScanId: FormControl<string | null | undefined>,

		/**
		 * Indicates the verification status of the document itself by combining visual analysis and NFC verification results. </br>Note that this may be a pass even if facial or name matches have failed.<br />  values=> Unknown = 0, Pass = 1, Refer = 2, Fail = 3
		 * Required
		 */
		status: FormControl<CredasApiModelsImagesGetIdDocumentImageResponseStatus | null | undefined>,
		surname: FormControl<string | null | undefined>,

		/** Required */
		url: FormControl<string | null | undefined>,
	}
	export function CreateCredasApiModelsImagesGetIdDocumentImageResponseFormGroup() {
		return new FormGroup<CredasApiModelsImagesGetIdDocumentImageResponseFormProperties>({
			addressCity: new FormControl<string | null | undefined>(undefined),
			addressFull: new FormControl<string | null | undefined>(undefined),
			addressPostcode: new FormControl<string | null | undefined>(undefined),
			country: new FormControl<string | null | undefined>(undefined),
			countryCode: new FormControl<string | null | undefined>(undefined),
			dateCreated: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			dateOfBirth: new FormControl<Date | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			documentAnalysisResult: new FormControl<CredasApiModelsImagesGetIdDocumentImageResponseDocumentAnalysisResult | null | undefined>(undefined),
			documentNumber: new FormControl<string | null | undefined>(undefined),
			documentSide: new FormControl<CredasApiModelsImagesGetIdDocumentImageResponseDocumentSide | null | undefined>(undefined),
			expiryDate: new FormControl<Date | null | undefined>(undefined),
			facialMatch: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			forename: new FormControl<string | null | undefined>(undefined),
			fullName: new FormControl<string | null | undefined>(undefined),
			hiResUrl: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			isUnderReview: new FormControl<boolean | null | undefined>(undefined),
			manuallyVerified: new FormControl<boolean | null | undefined>(undefined),
			middleName: new FormControl<string | null | undefined>(undefined),
			mrz1: new FormControl<string | null | undefined>(undefined),
			mrz2: new FormControl<string | null | undefined>(undefined),
			mrz3: new FormControl<string | null | undefined>(undefined),
			nameCheck: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			nameCheckMethod: new FormControl<CredasApiModelsImagesGetIdDocumentImageResponseNameCheckMethod | null | undefined>(undefined, [Validators.required]),
			nfcCheck: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			nfcFacialUrl: new FormControl<string | null | undefined>(undefined),
			nfcReadStatus: new FormControl<CredasApiModelsImagesGetIdDocumentImageResponseNfcReadStatus | null | undefined>(undefined, [Validators.required]),
			primaryScanId: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<CredasApiModelsImagesGetIdDocumentImageResponseStatus | null | undefined>(undefined, [Validators.required]),
			surname: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum CredasApiModelsImagesGetIdDocumentImageResponseDocumentAnalysisResult { _0 = 0, _1 = 1, _2 = 2, _3 = 3, _4 = 4, _5 = 5, _10 = 6, _11 = 7 }

	export enum CredasApiModelsImagesGetIdDocumentImageResponseDocumentSide { _0 = 0, _1 = 1, _2 = 2 }

	export enum CredasApiModelsImagesGetIdDocumentImageResponseNameCheckMethod { _0 = 0, _1 = 1, _2 = 2 }

	export enum CredasApiModelsImagesGetIdDocumentImageResponseNfcReadStatus { _0 = 0, _1 = 1, _2 = 2, _3 = 3, _4 = 4, _5 = 5, _6 = 6, _7 = 7, _8 = 8, _9 = 9, _10 = 10 }

	export enum CredasApiModelsImagesGetIdDocumentImageResponseStatus { _0 = 0, _1 = 1, _2 = 2, _3 = 3 }

	export interface CredasApiModelsImagesGetLivenessImageResponse {
		description?: string | null;
		id?: string | null;
		url?: string | null;
	}
	export interface CredasApiModelsImagesGetLivenessImageResponseFormProperties {
		description: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateCredasApiModelsImagesGetLivenessImageResponseFormGroup() {
		return new FormGroup<CredasApiModelsImagesGetLivenessImageResponseFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CredasApiModelsImagesGetLivenessPerformedImageResponse {
		base64Data?: string | null;
		url?: string | null;
	}
	export interface CredasApiModelsImagesGetLivenessPerformedImageResponseFormProperties {
		base64Data: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateCredasApiModelsImagesGetLivenessPerformedImageResponseFormGroup() {
		return new FormGroup<CredasApiModelsImagesGetLivenessPerformedImageResponseFormProperties>({
			base64Data: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CredasApiModelsImagesGetSelfieImageResponse {
		base64Data?: string | null;
		url?: string | null;
	}
	export interface CredasApiModelsImagesGetSelfieImageResponseFormProperties {
		base64Data: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateCredasApiModelsImagesGetSelfieImageResponseFormGroup() {
		return new FormGroup<CredasApiModelsImagesGetSelfieImageResponseFormProperties>({
			base64Data: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CredasApiModelsPropertyRegisterAddress {

		/** Required */
		addressLine1: string;
		addressLine2?: string | null;
		addressLine3?: string | null;

		/** Required */
		city: string;

		/** Required */
		country: string;
		county?: string | null;

		/** Required */
		postcode: string;
	}
	export interface CredasApiModelsPropertyRegisterAddressFormProperties {

		/** Required */
		addressLine1: FormControl<string | null | undefined>,
		addressLine2: FormControl<string | null | undefined>,
		addressLine3: FormControl<string | null | undefined>,

		/** Required */
		city: FormControl<string | null | undefined>,

		/** Required */
		country: FormControl<string | null | undefined>,
		county: FormControl<string | null | undefined>,

		/** Required */
		postcode: FormControl<string | null | undefined>,
	}
	export function CreateCredasApiModelsPropertyRegisterAddressFormGroup() {
		return new FormGroup<CredasApiModelsPropertyRegisterAddressFormProperties>({
			addressLine1: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			addressLine2: new FormControl<string | null | undefined>(undefined),
			addressLine3: new FormControl<string | null | undefined>(undefined),
			city: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			country: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			county: new FormControl<string | null | undefined>(undefined),
			postcode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CredasApiModelsPropertyRegisterPerson {

		/** Required */
		forename: string;
		middleName?: string | null;

		/** Required */
		surname: string;
	}
	export interface CredasApiModelsPropertyRegisterPersonFormProperties {

		/** Required */
		forename: FormControl<string | null | undefined>,
		middleName: FormControl<string | null | undefined>,

		/** Required */
		surname: FormControl<string | null | undefined>,
	}
	export function CreateCredasApiModelsPropertyRegisterPersonFormGroup() {
		return new FormGroup<CredasApiModelsPropertyRegisterPersonFormProperties>({
			forename: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			middleName: new FormControl<string | null | undefined>(undefined),
			surname: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CredasApiModelsPropertyRegisterPropertyRegisterCheckRequest {

		/** Required */
		address: CredasApiModelsPropertyRegisterAddress;

		/** Required */
		person: CredasApiModelsPropertyRegisterPerson;

		/** Required */
		regEntryId: string;
	}
	export interface CredasApiModelsPropertyRegisterPropertyRegisterCheckRequestFormProperties {

		/** Required */
		regEntryId: FormControl<string | null | undefined>,
	}
	export function CreateCredasApiModelsPropertyRegisterPropertyRegisterCheckRequestFormGroup() {
		return new FormGroup<CredasApiModelsPropertyRegisterPropertyRegisterCheckRequestFormProperties>({
			regEntryId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CredasApiModelsPropertyRegisterPropertyRegisterCheckResponse {

		/** Unknown = 0, Pass = 1, Refer = 2, Fail = 3 */
		checkStatus?: CredasApiModelsPropertyRegisterPropertyRegisterCheckResponseCheckStatus;
		hasBeenOverridden?: boolean | null;

		/** Unknown = 0, FullNameMatch = 1, SurnameMatch = 2, NoNameMatch = 3, NoAddressMatch = 4, TitleNotRegistered = 5, Unavailable = 6, OutOfHours = 7 */
		matchResult?: CredasApiModelsPropertyRegisterPropertyRegisterCheckResponseMatchResult;
		matchResultText?: string | null;

		/** Unknown = 0, SoleOwnership = 1, JointOwnership = 2 */
		propertyOwnership?: CredasApiModelsPropertyRegisterPropertyRegisterCheckResponsePropertyOwnership;
		propertyOwnershipText?: string | null;
		titleNumber?: string | null;
	}
	export interface CredasApiModelsPropertyRegisterPropertyRegisterCheckResponseFormProperties {

		/** Unknown = 0, Pass = 1, Refer = 2, Fail = 3 */
		checkStatus: FormControl<CredasApiModelsPropertyRegisterPropertyRegisterCheckResponseCheckStatus | null | undefined>,
		hasBeenOverridden: FormControl<boolean | null | undefined>,

		/** Unknown = 0, FullNameMatch = 1, SurnameMatch = 2, NoNameMatch = 3, NoAddressMatch = 4, TitleNotRegistered = 5, Unavailable = 6, OutOfHours = 7 */
		matchResult: FormControl<CredasApiModelsPropertyRegisterPropertyRegisterCheckResponseMatchResult | null | undefined>,
		matchResultText: FormControl<string | null | undefined>,

		/** Unknown = 0, SoleOwnership = 1, JointOwnership = 2 */
		propertyOwnership: FormControl<CredasApiModelsPropertyRegisterPropertyRegisterCheckResponsePropertyOwnership | null | undefined>,
		propertyOwnershipText: FormControl<string | null | undefined>,
		titleNumber: FormControl<string | null | undefined>,
	}
	export function CreateCredasApiModelsPropertyRegisterPropertyRegisterCheckResponseFormGroup() {
		return new FormGroup<CredasApiModelsPropertyRegisterPropertyRegisterCheckResponseFormProperties>({
			checkStatus: new FormControl<CredasApiModelsPropertyRegisterPropertyRegisterCheckResponseCheckStatus | null | undefined>(undefined),
			hasBeenOverridden: new FormControl<boolean | null | undefined>(undefined),
			matchResult: new FormControl<CredasApiModelsPropertyRegisterPropertyRegisterCheckResponseMatchResult | null | undefined>(undefined),
			matchResultText: new FormControl<string | null | undefined>(undefined),
			propertyOwnership: new FormControl<CredasApiModelsPropertyRegisterPropertyRegisterCheckResponsePropertyOwnership | null | undefined>(undefined),
			propertyOwnershipText: new FormControl<string | null | undefined>(undefined),
			titleNumber: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum CredasApiModelsPropertyRegisterPropertyRegisterCheckResponseCheckStatus { _0 = 0, _1 = 1, _2 = 2, _3 = 3 }

	export enum CredasApiModelsPropertyRegisterPropertyRegisterCheckResponseMatchResult { _0 = 0, _1 = 1, _2 = 2, _3 = 3, _4 = 4, _5 = 5, _6 = 6, _7 = 7 }

	export enum CredasApiModelsPropertyRegisterPropertyRegisterCheckResponsePropertyOwnership { _0 = 0, _1 = 1, _2 = 2 }

	export interface CredasApiModelsRegTypesRegType {
		id?: string | null;
		name?: string | null;
	}
	export interface CredasApiModelsRegTypesRegTypeFormProperties {
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateCredasApiModelsRegTypesRegTypeFormGroup() {
		return new FormGroup<CredasApiModelsRegTypesRegTypeFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CredasApiModelsRegistrationsAddInstantRegistrationRequest {

		/** Required */
		document: string;
		documentParameters?: Array<CredasApiModelsRegistrationsKeyValueItem>;

		/**
		 * Other = 0, Passport = 1, DrivingLicence = 2, Visa = 3, CscsCard = 4, HomeOfficeLetter = 5, BirthCertificate = 6, NationalIdCard = 7, ResidencePermit = 9, UtilityBill = 11
		 * Required
		 */
		documentType: CredasApiModelsRegistrationsAddInstantRegistrationRequestDocumentType;

		/**
		 * Required
		 * Max length: 50
		 * Min length: 1
		 */
		forename: string;

		/**
		 * Max length: 50
		 * Min length: 1
		 */
		middleName?: string | null;
		parameters?: Array<CredasApiModelsRegistrationsKeyValueItem>;

		/**
		 * Max length: 255
		 * Min length: 0
		 */
		referenceId?: string | null;

		/** Required */
		regTypeId: string;
		selfie?: string | null;
		significantPersonId?: string | null;

		/**
		 * Required
		 * Max length: 50
		 * Min length: 1
		 */
		surname: string;
	}
	export interface CredasApiModelsRegistrationsAddInstantRegistrationRequestFormProperties {

		/** Required */
		document: FormControl<string | null | undefined>,

		/**
		 * Other = 0, Passport = 1, DrivingLicence = 2, Visa = 3, CscsCard = 4, HomeOfficeLetter = 5, BirthCertificate = 6, NationalIdCard = 7, ResidencePermit = 9, UtilityBill = 11
		 * Required
		 */
		documentType: FormControl<CredasApiModelsRegistrationsAddInstantRegistrationRequestDocumentType | null | undefined>,

		/**
		 * Required
		 * Max length: 50
		 * Min length: 1
		 */
		forename: FormControl<string | null | undefined>,

		/**
		 * Max length: 50
		 * Min length: 1
		 */
		middleName: FormControl<string | null | undefined>,

		/**
		 * Max length: 255
		 * Min length: 0
		 */
		referenceId: FormControl<string | null | undefined>,

		/** Required */
		regTypeId: FormControl<string | null | undefined>,
		selfie: FormControl<string | null | undefined>,
		significantPersonId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 50
		 * Min length: 1
		 */
		surname: FormControl<string | null | undefined>,
	}
	export function CreateCredasApiModelsRegistrationsAddInstantRegistrationRequestFormGroup() {
		return new FormGroup<CredasApiModelsRegistrationsAddInstantRegistrationRequestFormProperties>({
			document: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			documentType: new FormControl<CredasApiModelsRegistrationsAddInstantRegistrationRequestDocumentType | null | undefined>(undefined, [Validators.required]),
			forename: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(50)]),
			middleName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(50)]),
			referenceId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(255)]),
			regTypeId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			selfie: new FormControl<string | null | undefined>(undefined),
			significantPersonId: new FormControl<string | null | undefined>(undefined),
			surname: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(50)]),
		});

	}

	export enum CredasApiModelsRegistrationsAddInstantRegistrationRequestDocumentType { _0 = 0, _1 = 1, _2 = 2, _3 = 3, _4 = 4, _5 = 5, _6 = 6, _7 = 7, _9 = 8, _10 = 9, _11 = 10 }

	export interface CredasApiModelsRegistrationsAddInstantRegistrationResponse {

		/**
		 * Active = 1, Deleted = 2, UnderReview = 3
		 * Required
		 */
		documentStatus: CredasApiModelsRegistrationsAddInstantRegistrationResponseDocumentStatus;

		/**
		 * Unknown = 0, Passport = 1, DrivingLicense = 2, IdentificationCard = 3, TaxLetter = 4, NIC_Letter = 5, TV_Licence = 6, UtilityBill = 7, HighRiskWorkLicence = 8, TravelPermit = 9, BankLetter = 10, BenefitLetter = 11, BankStatement = 12, NINO_Letter = 13, CouncilTax = 14, ResidentPermit = 15, PhotoCard = 16, RepaymentLetter = 17, Invoice = 18, Visa = 19, AgeIdentificationCard = 20, MedicareCard = 21, MilitaryIdentificationCard = 22, UtilityLetter = 23, CouncilDocument = 24, JobLicence = 25, MembershipIDCard = 26, MilitaryIDCard = 27, ProofOfAgeCard = 28, TravelPermitNew = 29, WeaponsLicence = 30, AccountStatement = 41, TenancyAgreement = 42, BankDocument = 43, BankLetterNew = 44, BankStatementNew = 45, BenefitLetterNew = 46, CouncilDocumentNew = 48, CouncilLetter = 49, CouncilTaxNew = 50, DWPDocument = 51, HMRCDocument = 52, InformationSheet = 53, InsuranceDocument = 54, InsuranceLetter = 55, InvoiceNew = 56, NICLetter = 57, NINOLetter = 58, OfficialDocument = 59, OfficialLetter = 60, RepaymentLetterNew = 61, TaxLetterNew = 62, TaxStatement = 63, TelBill = 64, TelLetter = 65, TelecommunicationDocument = 66, TVLicence = 67, UniversityLetter = 68, UtilityBillNew = 69, UtilityDocument = 70, UtilityLetterNew = 71, WaterBill = 72, WaterDocument = 73, HighRiskWorkLicenceNew = 74, PhotoCardNew = 75, MedicareCardNew = 76, Certificate = 77
		 * Required
		 */
		documentType: CredasApiModelsRegistrationsAddInstantRegistrationResponseDocumentType;

		/** Required */
		facialMatch: boolean;

		/** Required */
		id: string;

		/** Required */
		regCode: string;
	}
	export interface CredasApiModelsRegistrationsAddInstantRegistrationResponseFormProperties {

		/**
		 * Active = 1, Deleted = 2, UnderReview = 3
		 * Required
		 */
		documentStatus: FormControl<CredasApiModelsRegistrationsAddInstantRegistrationResponseDocumentStatus | null | undefined>,

		/**
		 * Unknown = 0, Passport = 1, DrivingLicense = 2, IdentificationCard = 3, TaxLetter = 4, NIC_Letter = 5, TV_Licence = 6, UtilityBill = 7, HighRiskWorkLicence = 8, TravelPermit = 9, BankLetter = 10, BenefitLetter = 11, BankStatement = 12, NINO_Letter = 13, CouncilTax = 14, ResidentPermit = 15, PhotoCard = 16, RepaymentLetter = 17, Invoice = 18, Visa = 19, AgeIdentificationCard = 20, MedicareCard = 21, MilitaryIdentificationCard = 22, UtilityLetter = 23, CouncilDocument = 24, JobLicence = 25, MembershipIDCard = 26, MilitaryIDCard = 27, ProofOfAgeCard = 28, TravelPermitNew = 29, WeaponsLicence = 30, AccountStatement = 41, TenancyAgreement = 42, BankDocument = 43, BankLetterNew = 44, BankStatementNew = 45, BenefitLetterNew = 46, CouncilDocumentNew = 48, CouncilLetter = 49, CouncilTaxNew = 50, DWPDocument = 51, HMRCDocument = 52, InformationSheet = 53, InsuranceDocument = 54, InsuranceLetter = 55, InvoiceNew = 56, NICLetter = 57, NINOLetter = 58, OfficialDocument = 59, OfficialLetter = 60, RepaymentLetterNew = 61, TaxLetterNew = 62, TaxStatement = 63, TelBill = 64, TelLetter = 65, TelecommunicationDocument = 66, TVLicence = 67, UniversityLetter = 68, UtilityBillNew = 69, UtilityDocument = 70, UtilityLetterNew = 71, WaterBill = 72, WaterDocument = 73, HighRiskWorkLicenceNew = 74, PhotoCardNew = 75, MedicareCardNew = 76, Certificate = 77
		 * Required
		 */
		documentType: FormControl<CredasApiModelsRegistrationsAddInstantRegistrationResponseDocumentType | null | undefined>,

		/** Required */
		facialMatch: FormControl<boolean | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		regCode: FormControl<string | null | undefined>,
	}
	export function CreateCredasApiModelsRegistrationsAddInstantRegistrationResponseFormGroup() {
		return new FormGroup<CredasApiModelsRegistrationsAddInstantRegistrationResponseFormProperties>({
			documentStatus: new FormControl<CredasApiModelsRegistrationsAddInstantRegistrationResponseDocumentStatus | null | undefined>(undefined, [Validators.required]),
			documentType: new FormControl<CredasApiModelsRegistrationsAddInstantRegistrationResponseDocumentType | null | undefined>(undefined, [Validators.required]),
			facialMatch: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			regCode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum CredasApiModelsRegistrationsAddInstantRegistrationResponseDocumentStatus { _1 = 0, _2 = 1, _3 = 2 }

	export enum CredasApiModelsRegistrationsAddInstantRegistrationResponseDocumentType { _0 = 0, _1 = 1, _2 = 2, _3 = 3, _4 = 4, _5 = 5, _6 = 6, _7 = 7, _8 = 8, _9 = 9, _10 = 10, _11 = 11, _12 = 12, _13 = 13, _14 = 14, _15 = 15, _16 = 16, _17 = 17, _18 = 18, _19 = 19, _20 = 20, _21 = 21, _22 = 22, _23 = 23, _24 = 24, _25 = 25, _26 = 26, _27 = 27, _28 = 28, _29 = 29, _30 = 30, _41 = 31, _42 = 32, _43 = 33, _44 = 34, _45 = 35, _46 = 36, _48 = 37, _49 = 38, _50 = 39, _51 = 40, _52 = 41, _53 = 42, _54 = 43, _55 = 44, _56 = 45, _57 = 46, _58 = 47, _59 = 48, _60 = 49, _61 = 50, _62 = 51, _63 = 52, _64 = 53, _65 = 54, _66 = 55, _67 = 56, _68 = 57, _69 = 58, _70 = 59, _71 = 60, _72 = 61, _73 = 62, _74 = 63, _75 = 64, _76 = 65, _77 = 66 }

	export interface CredasApiModelsRegistrationsAddRegistrationRequest {

		/**
		 * Max length: 10
		 * Min length: 1
		 */
		diallingCode?: string | null;
		duplicateAcknowledgement?: boolean | null;

		/**
		 * Max length: 250
		 * Min length: 0
		 */
		emailAddress?: string | null;

		/**
		 * Required
		 * Max length: 50
		 * Min length: 1
		 */
		forename: string;

		/**
		 * Max length: 50
		 * Min length: 1
		 */
		middleName?: string | null;
		parameters?: Array<CredasApiModelsRegistrationsKeyValueItem>;

		/**
		 * Max length: 20
		 * Min length: 1
		 */
		phoneNumber?: string | null;
		provideWebJourneyLink?: boolean | null;

		/**
		 * Max length: 255
		 * Min length: 0
		 */
		referenceId?: string | null;

		/** Required */
		regTypeId: string;
		returnUrls?: CredasApiModelsRegistrationsReturnUrls;
		sendEmail?: boolean | null;

		/** Required */
		sendSms: boolean;
		settings?: CredasApiModelsRegistrationsRegistrationSettings;
		significantPersonId?: string | null;

		/**
		 * Required
		 * Max length: 50
		 * Min length: 1
		 */
		surname: string;
	}
	export interface CredasApiModelsRegistrationsAddRegistrationRequestFormProperties {

		/**
		 * Max length: 10
		 * Min length: 1
		 */
		diallingCode: FormControl<string | null | undefined>,
		duplicateAcknowledgement: FormControl<boolean | null | undefined>,

		/**
		 * Max length: 250
		 * Min length: 0
		 */
		emailAddress: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 50
		 * Min length: 1
		 */
		forename: FormControl<string | null | undefined>,

		/**
		 * Max length: 50
		 * Min length: 1
		 */
		middleName: FormControl<string | null | undefined>,

		/**
		 * Max length: 20
		 * Min length: 1
		 */
		phoneNumber: FormControl<string | null | undefined>,
		provideWebJourneyLink: FormControl<boolean | null | undefined>,

		/**
		 * Max length: 255
		 * Min length: 0
		 */
		referenceId: FormControl<string | null | undefined>,

		/** Required */
		regTypeId: FormControl<string | null | undefined>,
		sendEmail: FormControl<boolean | null | undefined>,

		/** Required */
		sendSms: FormControl<boolean | null | undefined>,
		significantPersonId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 50
		 * Min length: 1
		 */
		surname: FormControl<string | null | undefined>,
	}
	export function CreateCredasApiModelsRegistrationsAddRegistrationRequestFormGroup() {
		return new FormGroup<CredasApiModelsRegistrationsAddRegistrationRequestFormProperties>({
			diallingCode: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(10)]),
			duplicateAcknowledgement: new FormControl<boolean | null | undefined>(undefined),
			emailAddress: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(250)]),
			forename: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(50)]),
			middleName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(50)]),
			phoneNumber: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(20)]),
			provideWebJourneyLink: new FormControl<boolean | null | undefined>(undefined),
			referenceId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(255)]),
			regTypeId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sendEmail: new FormControl<boolean | null | undefined>(undefined),
			sendSms: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			significantPersonId: new FormControl<string | null | undefined>(undefined),
			surname: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(50)]),
		});

	}

	export interface CredasApiModelsRegistrationsReturnUrls {
		returnUrl?: string | null;
	}
	export interface CredasApiModelsRegistrationsReturnUrlsFormProperties {
		returnUrl: FormControl<string | null | undefined>,
	}
	export function CreateCredasApiModelsRegistrationsReturnUrlsFormGroup() {
		return new FormGroup<CredasApiModelsRegistrationsReturnUrlsFormProperties>({
			returnUrl: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CredasApiModelsRegistrationsRegistrationSettings {
		capturePersonalDetails?: boolean | null;

		/** Fuzzy = 1, Strict = 2 */
		nameMatchRoutine?: CredasApiModelsRegistrationsRegistrationSettingsNameMatchRoutine;

		/** The value of required checks determines what checks are performed. <br/>Unknown = 0,Id Documents = 1, Standard Checks = 2, International Sanctions and Pep = 3, Credit Status Check = 4, Bank Account Check = 5, Proof of Ownership = 6, Right to Work = 7, Right to Rent = 8<br /> */
		requiredChecks?: Array<number>;
		skipEmailStep?: boolean | null;
	}
	export interface CredasApiModelsRegistrationsRegistrationSettingsFormProperties {
		capturePersonalDetails: FormControl<boolean | null | undefined>,

		/** Fuzzy = 1, Strict = 2 */
		nameMatchRoutine: FormControl<CredasApiModelsRegistrationsRegistrationSettingsNameMatchRoutine | null | undefined>,
		skipEmailStep: FormControl<boolean | null | undefined>,
	}
	export function CreateCredasApiModelsRegistrationsRegistrationSettingsFormGroup() {
		return new FormGroup<CredasApiModelsRegistrationsRegistrationSettingsFormProperties>({
			capturePersonalDetails: new FormControl<boolean | null | undefined>(undefined),
			nameMatchRoutine: new FormControl<CredasApiModelsRegistrationsRegistrationSettingsNameMatchRoutine | null | undefined>(undefined),
			skipEmailStep: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum CredasApiModelsRegistrationsRegistrationSettingsNameMatchRoutine { _1 = 0, _2 = 1 }

	export interface CredasApiModelsRegistrationsAddRegistrationResponse {

		/** Required */
		id: string;

		/** Required */
		regCode: string;
		webJourneyUrl?: CredasApiModelsRegistrationsJourneyUrl;
	}
	export interface CredasApiModelsRegistrationsAddRegistrationResponseFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		regCode: FormControl<string | null | undefined>,
	}
	export function CreateCredasApiModelsRegistrationsAddRegistrationResponseFormGroup() {
		return new FormGroup<CredasApiModelsRegistrationsAddRegistrationResponseFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			regCode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CredasApiModelsRegistrationsJourneyUrl {
		url?: string | null;
		validUntil?: Date | null;
	}
	export interface CredasApiModelsRegistrationsJourneyUrlFormProperties {
		url: FormControl<string | null | undefined>,
		validUntil: FormControl<Date | null | undefined>,
	}
	export function CreateCredasApiModelsRegistrationsJourneyUrlFormGroup() {
		return new FormGroup<CredasApiModelsRegistrationsJourneyUrlFormProperties>({
			url: new FormControl<string | null | undefined>(undefined),
			validUntil: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface CredasApiModelsRegistrationsCheckSubmittedIdDocumentsResponse {

		/** Ok = 1, MayContinue = 2, CannotContinue = 3 */
		checkCode?: CredasApiModelsRegistrationsCheckSubmittedIdDocumentsResponseCheckCode;
		message?: string | null;
	}
	export interface CredasApiModelsRegistrationsCheckSubmittedIdDocumentsResponseFormProperties {

		/** Ok = 1, MayContinue = 2, CannotContinue = 3 */
		checkCode: FormControl<CredasApiModelsRegistrationsCheckSubmittedIdDocumentsResponseCheckCode | null | undefined>,
		message: FormControl<string | null | undefined>,
	}
	export function CreateCredasApiModelsRegistrationsCheckSubmittedIdDocumentsResponseFormGroup() {
		return new FormGroup<CredasApiModelsRegistrationsCheckSubmittedIdDocumentsResponseFormProperties>({
			checkCode: new FormControl<CredasApiModelsRegistrationsCheckSubmittedIdDocumentsResponseCheckCode | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum CredasApiModelsRegistrationsCheckSubmittedIdDocumentsResponseCheckCode { _1 = 0, _2 = 1, _3 = 2 }

	export interface CredasApiModelsRegistrationsDataCheckSourceSummary {
		address?: CredasApiModelsDataCheckAddress;
		dateCreated?: Date | null;
		hasBeenOverridden?: boolean | null;
		hasPepSanctionsData?: boolean | null;
		label?: string | null;
		pepSanctionsData?: Array<CredasApiModelsDataCheckPepSanctionsPepSanctionItem>;
		person?: CredasApiModelsDataCheckPerson;
		remarks?: Array<CredasApiModelsDataCheckCheckRemark>;

		/** Unknown = 0, EditedElectoralRollUk = 1, LandlineAppendUk = 2, MortalityUk = 3, CreaditHeaderAmlUk = 4, NcoaAlertFlagUk = 5, NcoaAlertFullUk = 6, SanctionsEnhancedInternational = 7, PepEnhancedInternational = 8, NationalIdentityRegisterUk = 9, LandRegistry = 10 */
		sourceType?: CredasApiModelsRegistrationsDataCheckSourceSummarySourceType;

		/** Unknown = 0, Pass = 1, Refer = 2, Fail = 3 */
		status?: CredasApiModelsRegistrationsDataCheckSourceSummaryStatus;
	}
	export interface CredasApiModelsRegistrationsDataCheckSourceSummaryFormProperties {
		dateCreated: FormControl<Date | null | undefined>,
		hasBeenOverridden: FormControl<boolean | null | undefined>,
		hasPepSanctionsData: FormControl<boolean | null | undefined>,
		label: FormControl<string | null | undefined>,

		/** Unknown = 0, EditedElectoralRollUk = 1, LandlineAppendUk = 2, MortalityUk = 3, CreaditHeaderAmlUk = 4, NcoaAlertFlagUk = 5, NcoaAlertFullUk = 6, SanctionsEnhancedInternational = 7, PepEnhancedInternational = 8, NationalIdentityRegisterUk = 9, LandRegistry = 10 */
		sourceType: FormControl<CredasApiModelsRegistrationsDataCheckSourceSummarySourceType | null | undefined>,

		/** Unknown = 0, Pass = 1, Refer = 2, Fail = 3 */
		status: FormControl<CredasApiModelsRegistrationsDataCheckSourceSummaryStatus | null | undefined>,
	}
	export function CreateCredasApiModelsRegistrationsDataCheckSourceSummaryFormGroup() {
		return new FormGroup<CredasApiModelsRegistrationsDataCheckSourceSummaryFormProperties>({
			dateCreated: new FormControl<Date | null | undefined>(undefined),
			hasBeenOverridden: new FormControl<boolean | null | undefined>(undefined),
			hasPepSanctionsData: new FormControl<boolean | null | undefined>(undefined),
			label: new FormControl<string | null | undefined>(undefined),
			sourceType: new FormControl<CredasApiModelsRegistrationsDataCheckSourceSummarySourceType | null | undefined>(undefined),
			status: new FormControl<CredasApiModelsRegistrationsDataCheckSourceSummaryStatus | null | undefined>(undefined),
		});

	}

	export enum CredasApiModelsRegistrationsDataCheckSourceSummarySourceType { _0 = 0, _1 = 1, _2 = 2, _3 = 3, _4 = 4, _5 = 5, _6 = 6, _7 = 7, _8 = 8, _9 = 9, _10 = 10 }

	export enum CredasApiModelsRegistrationsDataCheckSourceSummaryStatus { _0 = 0, _1 = 1, _2 = 2, _3 = 3 }

	export interface CredasApiModelsRegistrationsIdDocumentSummary {
		addressCity?: string | null;
		addressFull?: string | null;
		addressPostcode?: string | null;
		country?: string | null;
		countryCode?: string | null;

		/** Required */
		dateCreated: Date;
		dateOfBirth?: Date | null;

		/** Required */
		description: string;

		/** Unknown = 0, Passed = 1, Refer = 2, Expired = 3, NotSupported = 4, Undefined = 5, Fail = 10, NotPerformed = 11 */
		documentAnalysisResult?: CredasApiModelsRegistrationsIdDocumentSummaryDocumentAnalysisResult;
		documentNumber?: string | null;

		/** Front = 1, Back = 2 */
		documentSide?: CredasApiModelsRegistrationsIdDocumentSummaryDocumentSide;
		expiryDate?: Date | null;

		/** Required */
		facialMatch: boolean;
		forename?: string | null;
		fullName?: string | null;

		/** Required */
		id: string;
		isUnderReview?: boolean | null;
		manuallyVerified?: boolean | null;
		middleName?: string | null;
		mrz1?: string | null;
		mrz2?: string | null;
		mrz3?: string | null;

		/** Required */
		nameCheck: boolean;

		/**
		 * Unknown = 0, Automatic = 1, Manual = 2
		 * Required
		 */
		nameCheckMethod: CredasApiModelsRegistrationsIdDocumentSummaryNameCheckMethod;

		/** Required */
		nfcCheck: boolean;

		/**
		 * Unknown = 0, Passed = 1, Failed = 2, NotAttempted = 3, Skipped = 4, Unavailable = 5, NotAllowed = 6, NotTrusted = 7, NotApplicable = 8, Expired = 9, UnavailableWebJourney = 10
		 * Required
		 */
		nfcReadStatus: CredasApiModelsRegistrationsIdDocumentSummaryNfcReadStatus;
		primaryScanId?: string | null;

		/**
		 * Indicates the verification status of the document itself by combining visual analysis and NFC verification results. </br>Note that this may be a pass even if facial or name matches have failed.<br />  values=> Unknown = 0, Pass = 1, Refer = 2, Fail = 3
		 * Required
		 */
		status: CredasApiModelsRegistrationsIdDocumentSummaryStatus;
		surname?: string | null;
	}
	export interface CredasApiModelsRegistrationsIdDocumentSummaryFormProperties {
		addressCity: FormControl<string | null | undefined>,
		addressFull: FormControl<string | null | undefined>,
		addressPostcode: FormControl<string | null | undefined>,
		country: FormControl<string | null | undefined>,
		countryCode: FormControl<string | null | undefined>,

		/** Required */
		dateCreated: FormControl<Date | null | undefined>,
		dateOfBirth: FormControl<Date | null | undefined>,

		/** Required */
		description: FormControl<string | null | undefined>,

		/** Unknown = 0, Passed = 1, Refer = 2, Expired = 3, NotSupported = 4, Undefined = 5, Fail = 10, NotPerformed = 11 */
		documentAnalysisResult: FormControl<CredasApiModelsRegistrationsIdDocumentSummaryDocumentAnalysisResult | null | undefined>,
		documentNumber: FormControl<string | null | undefined>,

		/** Front = 1, Back = 2 */
		documentSide: FormControl<CredasApiModelsRegistrationsIdDocumentSummaryDocumentSide | null | undefined>,
		expiryDate: FormControl<Date | null | undefined>,

		/** Required */
		facialMatch: FormControl<boolean | null | undefined>,
		forename: FormControl<string | null | undefined>,
		fullName: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,
		isUnderReview: FormControl<boolean | null | undefined>,
		manuallyVerified: FormControl<boolean | null | undefined>,
		middleName: FormControl<string | null | undefined>,
		mrz1: FormControl<string | null | undefined>,
		mrz2: FormControl<string | null | undefined>,
		mrz3: FormControl<string | null | undefined>,

		/** Required */
		nameCheck: FormControl<boolean | null | undefined>,

		/**
		 * Unknown = 0, Automatic = 1, Manual = 2
		 * Required
		 */
		nameCheckMethod: FormControl<CredasApiModelsRegistrationsIdDocumentSummaryNameCheckMethod | null | undefined>,

		/** Required */
		nfcCheck: FormControl<boolean | null | undefined>,

		/**
		 * Unknown = 0, Passed = 1, Failed = 2, NotAttempted = 3, Skipped = 4, Unavailable = 5, NotAllowed = 6, NotTrusted = 7, NotApplicable = 8, Expired = 9, UnavailableWebJourney = 10
		 * Required
		 */
		nfcReadStatus: FormControl<CredasApiModelsRegistrationsIdDocumentSummaryNfcReadStatus | null | undefined>,
		primaryScanId: FormControl<string | null | undefined>,

		/**
		 * Indicates the verification status of the document itself by combining visual analysis and NFC verification results. </br>Note that this may be a pass even if facial or name matches have failed.<br />  values=> Unknown = 0, Pass = 1, Refer = 2, Fail = 3
		 * Required
		 */
		status: FormControl<CredasApiModelsRegistrationsIdDocumentSummaryStatus | null | undefined>,
		surname: FormControl<string | null | undefined>,
	}
	export function CreateCredasApiModelsRegistrationsIdDocumentSummaryFormGroup() {
		return new FormGroup<CredasApiModelsRegistrationsIdDocumentSummaryFormProperties>({
			addressCity: new FormControl<string | null | undefined>(undefined),
			addressFull: new FormControl<string | null | undefined>(undefined),
			addressPostcode: new FormControl<string | null | undefined>(undefined),
			country: new FormControl<string | null | undefined>(undefined),
			countryCode: new FormControl<string | null | undefined>(undefined),
			dateCreated: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			dateOfBirth: new FormControl<Date | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			documentAnalysisResult: new FormControl<CredasApiModelsRegistrationsIdDocumentSummaryDocumentAnalysisResult | null | undefined>(undefined),
			documentNumber: new FormControl<string | null | undefined>(undefined),
			documentSide: new FormControl<CredasApiModelsRegistrationsIdDocumentSummaryDocumentSide | null | undefined>(undefined),
			expiryDate: new FormControl<Date | null | undefined>(undefined),
			facialMatch: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			forename: new FormControl<string | null | undefined>(undefined),
			fullName: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			isUnderReview: new FormControl<boolean | null | undefined>(undefined),
			manuallyVerified: new FormControl<boolean | null | undefined>(undefined),
			middleName: new FormControl<string | null | undefined>(undefined),
			mrz1: new FormControl<string | null | undefined>(undefined),
			mrz2: new FormControl<string | null | undefined>(undefined),
			mrz3: new FormControl<string | null | undefined>(undefined),
			nameCheck: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			nameCheckMethod: new FormControl<CredasApiModelsRegistrationsIdDocumentSummaryNameCheckMethod | null | undefined>(undefined, [Validators.required]),
			nfcCheck: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			nfcReadStatus: new FormControl<CredasApiModelsRegistrationsIdDocumentSummaryNfcReadStatus | null | undefined>(undefined, [Validators.required]),
			primaryScanId: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<CredasApiModelsRegistrationsIdDocumentSummaryStatus | null | undefined>(undefined, [Validators.required]),
			surname: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum CredasApiModelsRegistrationsIdDocumentSummaryDocumentAnalysisResult { _0 = 0, _1 = 1, _2 = 2, _3 = 3, _4 = 4, _5 = 5, _10 = 6, _11 = 7 }

	export enum CredasApiModelsRegistrationsIdDocumentSummaryDocumentSide { _0 = 0, _1 = 1, _2 = 2 }

	export enum CredasApiModelsRegistrationsIdDocumentSummaryNameCheckMethod { _0 = 0, _1 = 1, _2 = 2 }

	export enum CredasApiModelsRegistrationsIdDocumentSummaryNfcReadStatus { _0 = 0, _1 = 1, _2 = 2, _3 = 3, _4 = 4, _5 = 5, _6 = 6, _7 = 7, _8 = 8, _9 = 9, _10 = 10 }

	export enum CredasApiModelsRegistrationsIdDocumentSummaryStatus { _0 = 0, _1 = 1, _2 = 2, _3 = 3 }

	export interface CredasApiModelsRegistrationsIdVerification {

		/** Unknown = 0, Pass = 1, Refer = 2, Fail = 3 */
		checkStatus?: CredasApiModelsRegistrationsIdVerificationCheckStatus;
		hasBeenOverridden?: boolean | null;
	}
	export interface CredasApiModelsRegistrationsIdVerificationFormProperties {

		/** Unknown = 0, Pass = 1, Refer = 2, Fail = 3 */
		checkStatus: FormControl<CredasApiModelsRegistrationsIdVerificationCheckStatus | null | undefined>,
		hasBeenOverridden: FormControl<boolean | null | undefined>,
	}
	export function CreateCredasApiModelsRegistrationsIdVerificationFormGroup() {
		return new FormGroup<CredasApiModelsRegistrationsIdVerificationFormProperties>({
			checkStatus: new FormControl<CredasApiModelsRegistrationsIdVerificationCheckStatus | null | undefined>(undefined),
			hasBeenOverridden: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum CredasApiModelsRegistrationsIdVerificationCheckStatus { _0 = 0, _1 = 1, _2 = 2, _3 = 3 }

	export interface CredasApiModelsRegistrationsPagedRegistrationSummary {
		registrationSummaries?: Array<CredasApiModelsRegistrationsRegistrationSummary>;
		totalCount?: number | null;
	}
	export interface CredasApiModelsRegistrationsPagedRegistrationSummaryFormProperties {
		totalCount: FormControl<number | null | undefined>,
	}
	export function CreateCredasApiModelsRegistrationsPagedRegistrationSummaryFormGroup() {
		return new FormGroup<CredasApiModelsRegistrationsPagedRegistrationSummaryFormProperties>({
			totalCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CredasApiModelsRegistrationsRegistrationSummary {
		Comments?: Array<CredasApiModelsRegistrationsRegistrationComment>;
		CreatedByAgencyUserEmail?: string | null;
		DITFDate?: Date | null;

		/** No = 0, Yes = 1, Pending = 2 */
		DITFStatus?: CredasApiModelsRegistrationsRegistrationSummaryDITFStatus;
		IsExpired?: boolean | null;
		VerifiedInAppDate?: Date | null;
		bankAccountChecks?: Array<CredasApiModelsBankAccountsAccountVerificationResponse>;
		createdByAgencyUserId?: string | null;
		creditStatusCheck?: CredasApiModelsStatusChecksStatusCheck;
		customTermsAccepted?: boolean | null;
		customTermsAcceptedDateTime?: Date | null;
		customTermsAcceptedVersion?: number | null;

		/**
		 * Unknown = 0, Pass = 1, Refer = 2, Fail = 3
		 * Required
		 */
		dataCheckResult: CredasApiModelsRegistrationsRegistrationSummaryDataCheckResult;
		dataCheckSources?: Array<CredasApiModelsRegistrationsDataCheckSourceSummary>;

		/** Required */
		dataChecksPerformed: boolean;
		dateCompleted?: Date | null;

		/** Required */
		dateCreated: Date;
		email?: string | null;

		/** Required */
		forename: string;
		hasLivenessPerformed?: boolean | null;
		hasSelfie?: boolean | null;

		/** Required */
		id: string;
		idDocuments?: Array<CredasApiModelsRegistrationsIdDocumentSummary>;
		idVerification?: CredasApiModelsRegistrationsIdVerification;
		isAgentLed?: boolean | null;

		/** NotApplicable = 0, UniqueActionProcess = 1, Passive = 2 */
		livenessMethod?: CredasApiModelsRegistrationsRegistrationSummaryLivenessMethod;

		/**
		 * NotSubmitted = 0, Verified = 1, Unverified = 2, Unknown = 3, RetakeRequested = 4
		 * Required
		 */
		livenessStatus: CredasApiModelsRegistrationsRegistrationSummaryLivenessStatus;

		/** Required */
		livenessVerified: boolean;
		middleName?: string | null;
		personalDetails?: CredasApiModelsRegistrationsPersonalDetails;
		phoneNumber?: string | null;
		proofOfOwnershipCheck?: CredasApiModelsPropertyRegisterPropertyRegisterCheckResponse;

		/**
		 * Max length: 255
		 * Min length: 0
		 */
		referenceId?: string | null;

		/** Required */
		regCode: string;

		/** Required */
		regTypeId: string;
		rightToRentCheck?: CredasApiModelsRegistrationsSettlementStatus;
		rightToWorkCheck?: CredasApiModelsRegistrationsSettlementStatus;

		/**
		 * This property is no longer supported. Right to work is now available as an individual check.<br />  values=> Pending = 0, Pass = 1, Fail = 2
		 * Required
		 */
		rightToWorkDocumentsProvided: CredasApiModelsRegistrationsRegistrationSummaryRightToWorkDocumentsProvided;
		safeHarbourVerifiedDate?: Date | null;

		/** No = 0, Yes = 1, UnderReview = 2 */
		safeHarbourVerifiedStatus?: CredasApiModelsRegistrationsRegistrationSummarySafeHarbourVerifiedStatus;

		/**
		 * Unknown = 0, Submitted = 1, Approved = 2, Rejected = 3, Exported = 4, Invited = 6
		 * Required
		 */
		status: CredasApiModelsRegistrationsRegistrationSummaryStatus;

		/** Required */
		surname: string;
	}
	export interface CredasApiModelsRegistrationsRegistrationSummaryFormProperties {
		CreatedByAgencyUserEmail: FormControl<string | null | undefined>,
		DITFDate: FormControl<Date | null | undefined>,

		/** No = 0, Yes = 1, Pending = 2 */
		DITFStatus: FormControl<CredasApiModelsRegistrationsRegistrationSummaryDITFStatus | null | undefined>,
		IsExpired: FormControl<boolean | null | undefined>,
		VerifiedInAppDate: FormControl<Date | null | undefined>,
		createdByAgencyUserId: FormControl<string | null | undefined>,
		customTermsAccepted: FormControl<boolean | null | undefined>,
		customTermsAcceptedDateTime: FormControl<Date | null | undefined>,
		customTermsAcceptedVersion: FormControl<number | null | undefined>,

		/**
		 * Unknown = 0, Pass = 1, Refer = 2, Fail = 3
		 * Required
		 */
		dataCheckResult: FormControl<CredasApiModelsRegistrationsRegistrationSummaryDataCheckResult | null | undefined>,

		/** Required */
		dataChecksPerformed: FormControl<boolean | null | undefined>,
		dateCompleted: FormControl<Date | null | undefined>,

		/** Required */
		dateCreated: FormControl<Date | null | undefined>,
		email: FormControl<string | null | undefined>,

		/** Required */
		forename: FormControl<string | null | undefined>,
		hasLivenessPerformed: FormControl<boolean | null | undefined>,
		hasSelfie: FormControl<boolean | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,
		isAgentLed: FormControl<boolean | null | undefined>,

		/** NotApplicable = 0, UniqueActionProcess = 1, Passive = 2 */
		livenessMethod: FormControl<CredasApiModelsRegistrationsRegistrationSummaryLivenessMethod | null | undefined>,

		/**
		 * NotSubmitted = 0, Verified = 1, Unverified = 2, Unknown = 3, RetakeRequested = 4
		 * Required
		 */
		livenessStatus: FormControl<CredasApiModelsRegistrationsRegistrationSummaryLivenessStatus | null | undefined>,

		/** Required */
		livenessVerified: FormControl<boolean | null | undefined>,
		middleName: FormControl<string | null | undefined>,
		phoneNumber: FormControl<string | null | undefined>,

		/**
		 * Max length: 255
		 * Min length: 0
		 */
		referenceId: FormControl<string | null | undefined>,

		/** Required */
		regCode: FormControl<string | null | undefined>,

		/** Required */
		regTypeId: FormControl<string | null | undefined>,

		/**
		 * This property is no longer supported. Right to work is now available as an individual check.<br />  values=> Pending = 0, Pass = 1, Fail = 2
		 * Required
		 */
		rightToWorkDocumentsProvided: FormControl<CredasApiModelsRegistrationsRegistrationSummaryRightToWorkDocumentsProvided | null | undefined>,
		safeHarbourVerifiedDate: FormControl<Date | null | undefined>,

		/** No = 0, Yes = 1, UnderReview = 2 */
		safeHarbourVerifiedStatus: FormControl<CredasApiModelsRegistrationsRegistrationSummarySafeHarbourVerifiedStatus | null | undefined>,

		/**
		 * Unknown = 0, Submitted = 1, Approved = 2, Rejected = 3, Exported = 4, Invited = 6
		 * Required
		 */
		status: FormControl<CredasApiModelsRegistrationsRegistrationSummaryStatus | null | undefined>,

		/** Required */
		surname: FormControl<string | null | undefined>,
	}
	export function CreateCredasApiModelsRegistrationsRegistrationSummaryFormGroup() {
		return new FormGroup<CredasApiModelsRegistrationsRegistrationSummaryFormProperties>({
			CreatedByAgencyUserEmail: new FormControl<string | null | undefined>(undefined),
			DITFDate: new FormControl<Date | null | undefined>(undefined),
			DITFStatus: new FormControl<CredasApiModelsRegistrationsRegistrationSummaryDITFStatus | null | undefined>(undefined),
			IsExpired: new FormControl<boolean | null | undefined>(undefined),
			VerifiedInAppDate: new FormControl<Date | null | undefined>(undefined),
			createdByAgencyUserId: new FormControl<string | null | undefined>(undefined),
			customTermsAccepted: new FormControl<boolean | null | undefined>(undefined),
			customTermsAcceptedDateTime: new FormControl<Date | null | undefined>(undefined),
			customTermsAcceptedVersion: new FormControl<number | null | undefined>(undefined),
			dataCheckResult: new FormControl<CredasApiModelsRegistrationsRegistrationSummaryDataCheckResult | null | undefined>(undefined, [Validators.required]),
			dataChecksPerformed: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			dateCompleted: new FormControl<Date | null | undefined>(undefined),
			dateCreated: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			email: new FormControl<string | null | undefined>(undefined),
			forename: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			hasLivenessPerformed: new FormControl<boolean | null | undefined>(undefined),
			hasSelfie: new FormControl<boolean | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			isAgentLed: new FormControl<boolean | null | undefined>(undefined),
			livenessMethod: new FormControl<CredasApiModelsRegistrationsRegistrationSummaryLivenessMethod | null | undefined>(undefined),
			livenessStatus: new FormControl<CredasApiModelsRegistrationsRegistrationSummaryLivenessStatus | null | undefined>(undefined, [Validators.required]),
			livenessVerified: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			middleName: new FormControl<string | null | undefined>(undefined),
			phoneNumber: new FormControl<string | null | undefined>(undefined),
			referenceId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(255)]),
			regCode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			regTypeId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			rightToWorkDocumentsProvided: new FormControl<CredasApiModelsRegistrationsRegistrationSummaryRightToWorkDocumentsProvided | null | undefined>(undefined, [Validators.required]),
			safeHarbourVerifiedDate: new FormControl<Date | null | undefined>(undefined),
			safeHarbourVerifiedStatus: new FormControl<CredasApiModelsRegistrationsRegistrationSummarySafeHarbourVerifiedStatus | null | undefined>(undefined),
			status: new FormControl<CredasApiModelsRegistrationsRegistrationSummaryStatus | null | undefined>(undefined, [Validators.required]),
			surname: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CredasApiModelsRegistrationsRegistrationComment {

		/** IdDocuments = 1, StandardChecks = 2, InternationalSanctionsAndPep = 3, CreditStatusCheck = 4, BankAccountCheck = 5, ProofOfOwnership = 6, RightToWork = 7, RightToRent = 8 */
		checkType?: CredasApiModelsRegistrationsRegistrationCommentCheckType;
		comment?: string | null;
		dateCreated?: Date | null;
		id?: string | null;
		name?: string | null;

		/** General = 0, CheckRelated = 1 */
		type?: CredasApiModelsRegistrationsRegistrationCommentType;
	}
	export interface CredasApiModelsRegistrationsRegistrationCommentFormProperties {

		/** IdDocuments = 1, StandardChecks = 2, InternationalSanctionsAndPep = 3, CreditStatusCheck = 4, BankAccountCheck = 5, ProofOfOwnership = 6, RightToWork = 7, RightToRent = 8 */
		checkType: FormControl<CredasApiModelsRegistrationsRegistrationCommentCheckType | null | undefined>,
		comment: FormControl<string | null | undefined>,
		dateCreated: FormControl<Date | null | undefined>,
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,

		/** General = 0, CheckRelated = 1 */
		type: FormControl<CredasApiModelsRegistrationsRegistrationCommentType | null | undefined>,
	}
	export function CreateCredasApiModelsRegistrationsRegistrationCommentFormGroup() {
		return new FormGroup<CredasApiModelsRegistrationsRegistrationCommentFormProperties>({
			checkType: new FormControl<CredasApiModelsRegistrationsRegistrationCommentCheckType | null | undefined>(undefined),
			comment: new FormControl<string | null | undefined>(undefined),
			dateCreated: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<CredasApiModelsRegistrationsRegistrationCommentType | null | undefined>(undefined),
		});

	}

	export enum CredasApiModelsRegistrationsRegistrationCommentCheckType { _0 = 0, _1 = 1, _2 = 2, _3 = 3, _4 = 4, _5 = 5, _6 = 6, _7 = 7, _8 = 8 }

	export enum CredasApiModelsRegistrationsRegistrationCommentType { _0 = 0, _1 = 1 }

	export enum CredasApiModelsRegistrationsRegistrationSummaryDITFStatus { _0 = 0, _1 = 1, _2 = 2 }

	export interface CredasApiModelsStatusChecksStatusCheck {
		address?: CredasApiModelsDataCheckAddress;
		ccj?: Array<CredasApiModelsStatusChecksCCJCcjResult>;
		checkDate?: Date | null;
		companyDirector?: Array<CredasApiModelsStatusChecksCompanyDirectorCompanyDirectorResult>;
		hasBeenOverridden?: boolean | null;
		insolvency?: Array<CredasApiModelsStatusChecksInsolvencyInsolvencyResult>;
		person?: CredasApiModelsDataCheckPerson;

		/** Unknown = 0, Pass = 1, Refer = 2, Fail = 3 */
		status?: CredasApiModelsStatusChecksStatusCheckStatus;
	}
	export interface CredasApiModelsStatusChecksStatusCheckFormProperties {
		checkDate: FormControl<Date | null | undefined>,
		hasBeenOverridden: FormControl<boolean | null | undefined>,

		/** Unknown = 0, Pass = 1, Refer = 2, Fail = 3 */
		status: FormControl<CredasApiModelsStatusChecksStatusCheckStatus | null | undefined>,
	}
	export function CreateCredasApiModelsStatusChecksStatusCheckFormGroup() {
		return new FormGroup<CredasApiModelsStatusChecksStatusCheckFormProperties>({
			checkDate: new FormControl<Date | null | undefined>(undefined),
			hasBeenOverridden: new FormControl<boolean | null | undefined>(undefined),
			status: new FormControl<CredasApiModelsStatusChecksStatusCheckStatus | null | undefined>(undefined),
		});

	}

	export interface CredasApiModelsStatusChecksCCJCcjResult {
		address1?: string | null;
		address2?: string | null;
		address3?: string | null;
		address4?: string | null;
		address5?: string | null;
		amount?: string | null;
		caseNumber?: string | null;
		courtName?: string | null;
		dateEnd?: Date | null;
		dob?: Date | null;
		judgementDate?: Date | null;

		/** Unknown = 0, Judgement = 1, Satisfaction = 2, Revocation = 3, SetAside = 4, AdministrationOrder = 5 */
		judgementType?: CredasApiModelsStatusChecksCCJCcjResultJudgementType;
		judgementTypeText?: string | null;
		name?: string | null;
		postcode?: string | null;
	}
	export interface CredasApiModelsStatusChecksCCJCcjResultFormProperties {
		address1: FormControl<string | null | undefined>,
		address2: FormControl<string | null | undefined>,
		address3: FormControl<string | null | undefined>,
		address4: FormControl<string | null | undefined>,
		address5: FormControl<string | null | undefined>,
		amount: FormControl<string | null | undefined>,
		caseNumber: FormControl<string | null | undefined>,
		courtName: FormControl<string | null | undefined>,
		dateEnd: FormControl<Date | null | undefined>,
		dob: FormControl<Date | null | undefined>,
		judgementDate: FormControl<Date | null | undefined>,

		/** Unknown = 0, Judgement = 1, Satisfaction = 2, Revocation = 3, SetAside = 4, AdministrationOrder = 5 */
		judgementType: FormControl<CredasApiModelsStatusChecksCCJCcjResultJudgementType | null | undefined>,
		judgementTypeText: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		postcode: FormControl<string | null | undefined>,
	}
	export function CreateCredasApiModelsStatusChecksCCJCcjResultFormGroup() {
		return new FormGroup<CredasApiModelsStatusChecksCCJCcjResultFormProperties>({
			address1: new FormControl<string | null | undefined>(undefined),
			address2: new FormControl<string | null | undefined>(undefined),
			address3: new FormControl<string | null | undefined>(undefined),
			address4: new FormControl<string | null | undefined>(undefined),
			address5: new FormControl<string | null | undefined>(undefined),
			amount: new FormControl<string | null | undefined>(undefined),
			caseNumber: new FormControl<string | null | undefined>(undefined),
			courtName: new FormControl<string | null | undefined>(undefined),
			dateEnd: new FormControl<Date | null | undefined>(undefined),
			dob: new FormControl<Date | null | undefined>(undefined),
			judgementDate: new FormControl<Date | null | undefined>(undefined),
			judgementType: new FormControl<CredasApiModelsStatusChecksCCJCcjResultJudgementType | null | undefined>(undefined),
			judgementTypeText: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			postcode: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum CredasApiModelsStatusChecksCCJCcjResultJudgementType { _0 = 0, _1 = 1, _2 = 2, _3 = 3, _4 = 4, _5 = 5 }

	export interface CredasApiModelsStatusChecksCompanyDirectorCompanyDirectorResult {
		companyAppointments?: Array<CredasApiModelsStatusChecksCompanyDirectorCompanyAppointment>;
		companyName?: string | null;
		companyRegNo?: string | null;
		dateAppointed?: Date | null;

		/** Unknown = 0, NameAndDateOfBirth = 1, NameAndAddress = 2, NameAndAddressAndDateOfBirth = 3 */
		matchType?: CredasApiModelsStatusChecksCompanyDirectorCompanyDirectorResultMatchType;
		matchTypeText?: string | null;
		registeredOffice?: string | null;
	}
	export interface CredasApiModelsStatusChecksCompanyDirectorCompanyDirectorResultFormProperties {
		companyName: FormControl<string | null | undefined>,
		companyRegNo: FormControl<string | null | undefined>,
		dateAppointed: FormControl<Date | null | undefined>,

		/** Unknown = 0, NameAndDateOfBirth = 1, NameAndAddress = 2, NameAndAddressAndDateOfBirth = 3 */
		matchType: FormControl<CredasApiModelsStatusChecksCompanyDirectorCompanyDirectorResultMatchType | null | undefined>,
		matchTypeText: FormControl<string | null | undefined>,
		registeredOffice: FormControl<string | null | undefined>,
	}
	export function CreateCredasApiModelsStatusChecksCompanyDirectorCompanyDirectorResultFormGroup() {
		return new FormGroup<CredasApiModelsStatusChecksCompanyDirectorCompanyDirectorResultFormProperties>({
			companyName: new FormControl<string | null | undefined>(undefined),
			companyRegNo: new FormControl<string | null | undefined>(undefined),
			dateAppointed: new FormControl<Date | null | undefined>(undefined),
			matchType: new FormControl<CredasApiModelsStatusChecksCompanyDirectorCompanyDirectorResultMatchType | null | undefined>(undefined),
			matchTypeText: new FormControl<string | null | undefined>(undefined),
			registeredOffice: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CredasApiModelsStatusChecksCompanyDirectorCompanyAppointment {
		address?: string | null;
		appointmentDate?: Date | null;
		appointmentType?: string | null;
		dob?: Date | null;
		name?: string | null;
		nationality?: string | null;
		occupation?: string | null;
		title?: string | null;
	}
	export interface CredasApiModelsStatusChecksCompanyDirectorCompanyAppointmentFormProperties {
		address: FormControl<string | null | undefined>,
		appointmentDate: FormControl<Date | null | undefined>,
		appointmentType: FormControl<string | null | undefined>,
		dob: FormControl<Date | null | undefined>,
		name: FormControl<string | null | undefined>,
		nationality: FormControl<string | null | undefined>,
		occupation: FormControl<string | null | undefined>,
		title: FormControl<string | null | undefined>,
	}
	export function CreateCredasApiModelsStatusChecksCompanyDirectorCompanyAppointmentFormGroup() {
		return new FormGroup<CredasApiModelsStatusChecksCompanyDirectorCompanyAppointmentFormProperties>({
			address: new FormControl<string | null | undefined>(undefined),
			appointmentDate: new FormControl<Date | null | undefined>(undefined),
			appointmentType: new FormControl<string | null | undefined>(undefined),
			dob: new FormControl<Date | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			nationality: new FormControl<string | null | undefined>(undefined),
			occupation: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum CredasApiModelsStatusChecksCompanyDirectorCompanyDirectorResultMatchType { _0 = 0, _1 = 1, _2 = 2, _3 = 3 }

	export interface CredasApiModelsStatusChecksInsolvencyInsolvencyResult {
		address?: CredasApiModelsStatusChecksInsolvencyAddress;
		aliases?: string | null;
		assetTotal?: string | null;
		caseNo?: string | null;
		caseType?: string | null;
		court?: string | null;
		debtTotal?: string | null;
		description?: string | null;
		dob?: Date | null;
		name?: string | null;
		occupation?: string | null;
		presentationDate?: Date | null;
		previousAddress?: CredasApiModelsStatusChecksInsolvencyAddress;
		serviceOffice?: string | null;
		startDate?: Date | null;
		status?: string | null;
		telephoneNumber?: string | null;
		tradingNames?: string | null;

		/** Unknown = 0, NorthernIrelandBankruptcy = 1, ScottishSequestrationBankruptcy = 2, EnglandAndWalesIVA = 3, EnglandAndWalesDRO = 4, EnglandAndWalesBankruptcy = 5 */
		type?: CredasApiModelsStatusChecksInsolvencyInsolvencyResultType;
		typeText?: string | null;
	}
	export interface CredasApiModelsStatusChecksInsolvencyInsolvencyResultFormProperties {
		aliases: FormControl<string | null | undefined>,
		assetTotal: FormControl<string | null | undefined>,
		caseNo: FormControl<string | null | undefined>,
		caseType: FormControl<string | null | undefined>,
		court: FormControl<string | null | undefined>,
		debtTotal: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		dob: FormControl<Date | null | undefined>,
		name: FormControl<string | null | undefined>,
		occupation: FormControl<string | null | undefined>,
		presentationDate: FormControl<Date | null | undefined>,
		serviceOffice: FormControl<string | null | undefined>,
		startDate: FormControl<Date | null | undefined>,
		status: FormControl<string | null | undefined>,
		telephoneNumber: FormControl<string | null | undefined>,
		tradingNames: FormControl<string | null | undefined>,

		/** Unknown = 0, NorthernIrelandBankruptcy = 1, ScottishSequestrationBankruptcy = 2, EnglandAndWalesIVA = 3, EnglandAndWalesDRO = 4, EnglandAndWalesBankruptcy = 5 */
		type: FormControl<CredasApiModelsStatusChecksInsolvencyInsolvencyResultType | null | undefined>,
		typeText: FormControl<string | null | undefined>,
	}
	export function CreateCredasApiModelsStatusChecksInsolvencyInsolvencyResultFormGroup() {
		return new FormGroup<CredasApiModelsStatusChecksInsolvencyInsolvencyResultFormProperties>({
			aliases: new FormControl<string | null | undefined>(undefined),
			assetTotal: new FormControl<string | null | undefined>(undefined),
			caseNo: new FormControl<string | null | undefined>(undefined),
			caseType: new FormControl<string | null | undefined>(undefined),
			court: new FormControl<string | null | undefined>(undefined),
			debtTotal: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			dob: new FormControl<Date | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			occupation: new FormControl<string | null | undefined>(undefined),
			presentationDate: new FormControl<Date | null | undefined>(undefined),
			serviceOffice: new FormControl<string | null | undefined>(undefined),
			startDate: new FormControl<Date | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			telephoneNumber: new FormControl<string | null | undefined>(undefined),
			tradingNames: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<CredasApiModelsStatusChecksInsolvencyInsolvencyResultType | null | undefined>(undefined),
			typeText: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CredasApiModelsStatusChecksInsolvencyAddress {
		address1?: string | null;
		address2?: string | null;
		address3?: string | null;
		address4?: string | null;
		address5?: string | null;
		dps?: string | null;
		isEmpty?: boolean | null;
		postcode?: string | null;
	}
	export interface CredasApiModelsStatusChecksInsolvencyAddressFormProperties {
		address1: FormControl<string | null | undefined>,
		address2: FormControl<string | null | undefined>,
		address3: FormControl<string | null | undefined>,
		address4: FormControl<string | null | undefined>,
		address5: FormControl<string | null | undefined>,
		dps: FormControl<string | null | undefined>,
		isEmpty: FormControl<boolean | null | undefined>,
		postcode: FormControl<string | null | undefined>,
	}
	export function CreateCredasApiModelsStatusChecksInsolvencyAddressFormGroup() {
		return new FormGroup<CredasApiModelsStatusChecksInsolvencyAddressFormProperties>({
			address1: new FormControl<string | null | undefined>(undefined),
			address2: new FormControl<string | null | undefined>(undefined),
			address3: new FormControl<string | null | undefined>(undefined),
			address4: new FormControl<string | null | undefined>(undefined),
			address5: new FormControl<string | null | undefined>(undefined),
			dps: new FormControl<string | null | undefined>(undefined),
			isEmpty: new FormControl<boolean | null | undefined>(undefined),
			postcode: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum CredasApiModelsStatusChecksInsolvencyInsolvencyResultType { _0 = 0, _1 = 1, _2 = 2, _3 = 3, _4 = 4, _5 = 5 }

	export enum CredasApiModelsStatusChecksStatusCheckStatus { _0 = 0, _1 = 1, _2 = 2, _3 = 3 }

	export enum CredasApiModelsRegistrationsRegistrationSummaryDataCheckResult { _0 = 0, _1 = 1, _2 = 2, _3 = 3 }

	export enum CredasApiModelsRegistrationsRegistrationSummaryLivenessMethod { _0 = 0, _1 = 1, _2 = 2 }

	export enum CredasApiModelsRegistrationsRegistrationSummaryLivenessStatus { _0 = 0, _1 = 1, _2 = 2, _3 = 3, _4 = 4 }

	export interface CredasApiModelsRegistrationsPersonalDetails {
		address?: CredasApiModelsDataCheckAddress;
		dateOfBirth?: Date | null;
		forename?: string | null;
		surname?: string | null;
	}
	export interface CredasApiModelsRegistrationsPersonalDetailsFormProperties {
		dateOfBirth: FormControl<Date | null | undefined>,
		forename: FormControl<string | null | undefined>,
		surname: FormControl<string | null | undefined>,
	}
	export function CreateCredasApiModelsRegistrationsPersonalDetailsFormGroup() {
		return new FormGroup<CredasApiModelsRegistrationsPersonalDetailsFormProperties>({
			dateOfBirth: new FormControl<Date | null | undefined>(undefined),
			forename: new FormControl<string | null | undefined>(undefined),
			surname: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CredasApiModelsRegistrationsSettlementStatus {

		/** Unknown = 0, Pass = 1, Refer = 2, Fail = 3 */
		checkStatus?: CredasApiModelsRegistrationsSettlementStatusCheckStatus;
		hasBeenOverridden?: boolean | null;
		hasShareCodePdf?: boolean | null;

		/** Unknown = 0, Pass = 1, Refer = 2, Fail = 3 */
		shareCodeFacialMatchStatus?: CredasApiModelsRegistrationsSettlementStatusShareCodeFacialMatchStatus;

		/** Unknown = 0, Pass = 1, Refer = 2, Fail = 3 */
		shareCodeNameCheckStatus?: CredasApiModelsRegistrationsSettlementStatusShareCodeNameCheckStatus;
	}
	export interface CredasApiModelsRegistrationsSettlementStatusFormProperties {

		/** Unknown = 0, Pass = 1, Refer = 2, Fail = 3 */
		checkStatus: FormControl<CredasApiModelsRegistrationsSettlementStatusCheckStatus | null | undefined>,
		hasBeenOverridden: FormControl<boolean | null | undefined>,
		hasShareCodePdf: FormControl<boolean | null | undefined>,

		/** Unknown = 0, Pass = 1, Refer = 2, Fail = 3 */
		shareCodeFacialMatchStatus: FormControl<CredasApiModelsRegistrationsSettlementStatusShareCodeFacialMatchStatus | null | undefined>,

		/** Unknown = 0, Pass = 1, Refer = 2, Fail = 3 */
		shareCodeNameCheckStatus: FormControl<CredasApiModelsRegistrationsSettlementStatusShareCodeNameCheckStatus | null | undefined>,
	}
	export function CreateCredasApiModelsRegistrationsSettlementStatusFormGroup() {
		return new FormGroup<CredasApiModelsRegistrationsSettlementStatusFormProperties>({
			checkStatus: new FormControl<CredasApiModelsRegistrationsSettlementStatusCheckStatus | null | undefined>(undefined),
			hasBeenOverridden: new FormControl<boolean | null | undefined>(undefined),
			hasShareCodePdf: new FormControl<boolean | null | undefined>(undefined),
			shareCodeFacialMatchStatus: new FormControl<CredasApiModelsRegistrationsSettlementStatusShareCodeFacialMatchStatus | null | undefined>(undefined),
			shareCodeNameCheckStatus: new FormControl<CredasApiModelsRegistrationsSettlementStatusShareCodeNameCheckStatus | null | undefined>(undefined),
		});

	}

	export enum CredasApiModelsRegistrationsSettlementStatusCheckStatus { _0 = 0, _1 = 1, _2 = 2, _3 = 3 }

	export enum CredasApiModelsRegistrationsSettlementStatusShareCodeFacialMatchStatus { _0 = 0, _1 = 1, _2 = 2, _3 = 3 }

	export enum CredasApiModelsRegistrationsSettlementStatusShareCodeNameCheckStatus { _0 = 0, _1 = 1, _2 = 2, _3 = 3 }

	export enum CredasApiModelsRegistrationsRegistrationSummaryRightToWorkDocumentsProvided { _0 = 0, _1 = 1, _2 = 2 }

	export enum CredasApiModelsRegistrationsRegistrationSummarySafeHarbourVerifiedStatus { _0 = 0, _1 = 1, _2 = 2 }

	export enum CredasApiModelsRegistrationsRegistrationSummaryStatus { _0 = 0, _1 = 1, _2 = 2, _3 = 3, _4 = 4, _6 = 5 }

	export interface CredasApiModelsRegistrationsSupportedIdDocument {
		name?: string | null;

		/** Passport = 1, DrivingLicence = 2, NationalIdCard = 3, CscsCard = 4, ResidencePermit = 5, Visa = 6, BirthCertificate = 7, HomeOfficeLetter = 8, Other = 9 */
		type?: CredasApiModelsRegistrationsSupportedIdDocumentType;
	}
	export interface CredasApiModelsRegistrationsSupportedIdDocumentFormProperties {
		name: FormControl<string | null | undefined>,

		/** Passport = 1, DrivingLicence = 2, NationalIdCard = 3, CscsCard = 4, ResidencePermit = 5, Visa = 6, BirthCertificate = 7, HomeOfficeLetter = 8, Other = 9 */
		type: FormControl<CredasApiModelsRegistrationsSupportedIdDocumentType | null | undefined>,
	}
	export function CreateCredasApiModelsRegistrationsSupportedIdDocumentFormGroup() {
		return new FormGroup<CredasApiModelsRegistrationsSupportedIdDocumentFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<CredasApiModelsRegistrationsSupportedIdDocumentType | null | undefined>(undefined),
		});

	}

	export enum CredasApiModelsRegistrationsSupportedIdDocumentType { _0 = 0, _1 = 1, _2 = 2, _3 = 3, _4 = 4, _5 = 5, _6 = 6, _7 = 7, _8 = 8, _9 = 9 }

	export interface CredasApiModelsRegistrationsUpdateContactDetailsRequest {

		/** None = 0, Email = 1, Sms = 2 */
		deliveryMethod?: CredasApiModelsRegistrationsUpdateContactDetailsRequestDeliveryMethod;

		/**
		 * Max length: 10
		 * Min length: 1
		 */
		diallingCode?: string | null;

		/**
		 * Max length: 250
		 * Min length: 0
		 */
		email?: string | null;

		/**
		 * Required
		 * Max length: 50
		 * Min length: 1
		 */
		forename: string;

		/**
		 * Max length: 50
		 * Min length: 1
		 */
		middleName?: string | null;

		/**
		 * Max length: 20
		 * Min length: 1
		 */
		phoneNumber?: string | null;

		/**
		 * Required
		 * Max length: 50
		 * Min length: 1
		 */
		surname: string;
	}
	export interface CredasApiModelsRegistrationsUpdateContactDetailsRequestFormProperties {

		/** None = 0, Email = 1, Sms = 2 */
		deliveryMethod: FormControl<CredasApiModelsRegistrationsUpdateContactDetailsRequestDeliveryMethod | null | undefined>,

		/**
		 * Max length: 10
		 * Min length: 1
		 */
		diallingCode: FormControl<string | null | undefined>,

		/**
		 * Max length: 250
		 * Min length: 0
		 */
		email: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 50
		 * Min length: 1
		 */
		forename: FormControl<string | null | undefined>,

		/**
		 * Max length: 50
		 * Min length: 1
		 */
		middleName: FormControl<string | null | undefined>,

		/**
		 * Max length: 20
		 * Min length: 1
		 */
		phoneNumber: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 50
		 * Min length: 1
		 */
		surname: FormControl<string | null | undefined>,
	}
	export function CreateCredasApiModelsRegistrationsUpdateContactDetailsRequestFormGroup() {
		return new FormGroup<CredasApiModelsRegistrationsUpdateContactDetailsRequestFormProperties>({
			deliveryMethod: new FormControl<CredasApiModelsRegistrationsUpdateContactDetailsRequestDeliveryMethod | null | undefined>(undefined),
			diallingCode: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(10)]),
			email: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(250)]),
			forename: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(50)]),
			middleName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(50)]),
			phoneNumber: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(20)]),
			surname: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(50)]),
		});

	}

	export enum CredasApiModelsRegistrationsUpdateContactDetailsRequestDeliveryMethod { _0 = 0, _1 = 1, _2 = 2 }

	export interface CredasApiModelsRegistrationsUpdateRegistrationStatusRequest {

		/**
		 * Unknown = 0, Submitted = 1, Approved = 2, Rejected = 3, Exported = 4, Invited = 6
		 * Required
		 */
		status: CredasApiModelsRegistrationsUpdateRegistrationStatusRequestStatus;
	}
	export interface CredasApiModelsRegistrationsUpdateRegistrationStatusRequestFormProperties {

		/**
		 * Unknown = 0, Submitted = 1, Approved = 2, Rejected = 3, Exported = 4, Invited = 6
		 * Required
		 */
		status: FormControl<CredasApiModelsRegistrationsUpdateRegistrationStatusRequestStatus | null | undefined>,
	}
	export function CreateCredasApiModelsRegistrationsUpdateRegistrationStatusRequestFormGroup() {
		return new FormGroup<CredasApiModelsRegistrationsUpdateRegistrationStatusRequestFormProperties>({
			status: new FormControl<CredasApiModelsRegistrationsUpdateRegistrationStatusRequestStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum CredasApiModelsRegistrationsUpdateRegistrationStatusRequestStatus { _0 = 0, _1 = 1, _2 = 2, _3 = 3, _4 = 4, _6 = 5 }

	export interface CredasApiModelsReportViewGetReportViewByReferenceIdRequest {
		canChangeStatus?: boolean | null;
		canVerify?: boolean | null;

		/**
		 * Required
		 * Max length: 255
		 * Min length: 0
		 */
		referenceId: string;

		/**
		 * Max length: 200
		 * Min length: 0
		 */
		user?: string | null;
	}
	export interface CredasApiModelsReportViewGetReportViewByReferenceIdRequestFormProperties {
		canChangeStatus: FormControl<boolean | null | undefined>,
		canVerify: FormControl<boolean | null | undefined>,

		/**
		 * Required
		 * Max length: 255
		 * Min length: 0
		 */
		referenceId: FormControl<string | null | undefined>,

		/**
		 * Max length: 200
		 * Min length: 0
		 */
		user: FormControl<string | null | undefined>,
	}
	export function CreateCredasApiModelsReportViewGetReportViewByReferenceIdRequestFormGroup() {
		return new FormGroup<CredasApiModelsReportViewGetReportViewByReferenceIdRequestFormProperties>({
			canChangeStatus: new FormControl<boolean | null | undefined>(undefined),
			canVerify: new FormControl<boolean | null | undefined>(undefined),
			referenceId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(255)]),
			user: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(200)]),
		});

	}

	export interface CredasApiModelsReportViewGetReportViewByRegistrationIdRequest {
		canChangeStatus?: boolean | null;
		canVerify?: boolean | null;

		/** Required */
		registrationId: string;

		/**
		 * Max length: 200
		 * Min length: 0
		 */
		user?: string | null;
	}
	export interface CredasApiModelsReportViewGetReportViewByRegistrationIdRequestFormProperties {
		canChangeStatus: FormControl<boolean | null | undefined>,
		canVerify: FormControl<boolean | null | undefined>,

		/** Required */
		registrationId: FormControl<string | null | undefined>,

		/**
		 * Max length: 200
		 * Min length: 0
		 */
		user: FormControl<string | null | undefined>,
	}
	export function CreateCredasApiModelsReportViewGetReportViewByRegistrationIdRequestFormGroup() {
		return new FormGroup<CredasApiModelsReportViewGetReportViewByRegistrationIdRequestFormProperties>({
			canChangeStatus: new FormControl<boolean | null | undefined>(undefined),
			canVerify: new FormControl<boolean | null | undefined>(undefined),
			registrationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			user: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(200)]),
		});

	}

	export interface CredasApiModelsReportViewGetReportViewResponse {
		results?: Array<CredasApiModelsReportViewReportViewItem>;
	}
	export interface CredasApiModelsReportViewGetReportViewResponseFormProperties {
	}
	export function CreateCredasApiModelsReportViewGetReportViewResponseFormGroup() {
		return new FormGroup<CredasApiModelsReportViewGetReportViewResponseFormProperties>({
		});

	}

	export interface CredasApiModelsReportViewReportViewItem {
		forename?: string | null;
		surname?: string | null;
		url?: string | null;
		validUntil?: Date | null;
	}
	export interface CredasApiModelsReportViewReportViewItemFormProperties {
		forename: FormControl<string | null | undefined>,
		surname: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
		validUntil: FormControl<Date | null | undefined>,
	}
	export function CreateCredasApiModelsReportViewReportViewItemFormGroup() {
		return new FormGroup<CredasApiModelsReportViewReportViewItemFormProperties>({
			forename: new FormControl<string | null | undefined>(undefined),
			surname: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
			validUntil: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface CredasApiModelsStatusChecksStatusCheckRequest {

		/** Required */
		address: CredasApiModelsDataCheckAddress;

		/** Required */
		person: CredasApiModelsDataCheckPerson;

		/** Required */
		regEntryId: string;
	}
	export interface CredasApiModelsStatusChecksStatusCheckRequestFormProperties {

		/** Required */
		regEntryId: FormControl<string | null | undefined>,
	}
	export function CreateCredasApiModelsStatusChecksStatusCheckRequestFormGroup() {
		return new FormGroup<CredasApiModelsStatusChecksStatusCheckRequestFormProperties>({
			regEntryId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CredasApiModelsStatusOverridesOverrideCheckStatusRequest {

		/**
		 * IdDocuments = 1, StandardChecks = 2, InternationalSanctionsAndPep = 3, CreditStatusCheck = 4, BankAccountCheck = 5, ProofOfOwnership = 6, RightToWork = 7, RightToRent = 8
		 * Required
		 */
		checkType: CredasApiModelsStatusOverridesOverrideCheckStatusRequestCheckType;

		/** Required */
		comment: string;

		/**
		 * Unknown = 0, Pass = 1, Refer = 2, Fail = 3
		 * Required
		 */
		status: CredasApiModelsStatusOverridesOverrideCheckStatusRequestStatus;
	}
	export interface CredasApiModelsStatusOverridesOverrideCheckStatusRequestFormProperties {

		/**
		 * IdDocuments = 1, StandardChecks = 2, InternationalSanctionsAndPep = 3, CreditStatusCheck = 4, BankAccountCheck = 5, ProofOfOwnership = 6, RightToWork = 7, RightToRent = 8
		 * Required
		 */
		checkType: FormControl<CredasApiModelsStatusOverridesOverrideCheckStatusRequestCheckType | null | undefined>,

		/** Required */
		comment: FormControl<string | null | undefined>,

		/**
		 * Unknown = 0, Pass = 1, Refer = 2, Fail = 3
		 * Required
		 */
		status: FormControl<CredasApiModelsStatusOverridesOverrideCheckStatusRequestStatus | null | undefined>,
	}
	export function CreateCredasApiModelsStatusOverridesOverrideCheckStatusRequestFormGroup() {
		return new FormGroup<CredasApiModelsStatusOverridesOverrideCheckStatusRequestFormProperties>({
			checkType: new FormControl<CredasApiModelsStatusOverridesOverrideCheckStatusRequestCheckType | null | undefined>(undefined, [Validators.required]),
			comment: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<CredasApiModelsStatusOverridesOverrideCheckStatusRequestStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum CredasApiModelsStatusOverridesOverrideCheckStatusRequestCheckType { _0 = 0, _1 = 1, _2 = 2, _3 = 3, _4 = 4, _5 = 5, _6 = 6, _7 = 7, _8 = 8 }

	export enum CredasApiModelsStatusOverridesOverrideCheckStatusRequestStatus { _0 = 0, _1 = 1, _2 = 2, _3 = 3 }

	export interface CredasApiModelsWebVerificationsGetWebVerificationsByReferenceIdRequest {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 0
		 */
		referenceId: string;
		returnUrls?: CredasApiModelsRegistrationsReturnUrls;
	}
	export interface CredasApiModelsWebVerificationsGetWebVerificationsByReferenceIdRequestFormProperties {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 0
		 */
		referenceId: FormControl<string | null | undefined>,
	}
	export function CreateCredasApiModelsWebVerificationsGetWebVerificationsByReferenceIdRequestFormGroup() {
		return new FormGroup<CredasApiModelsWebVerificationsGetWebVerificationsByReferenceIdRequestFormProperties>({
			referenceId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(255)]),
		});

	}

	export interface CredasApiModelsWebVerificationsGetWebVerificationsByRegistrationIdRequest {

		/** Required */
		registrationId: string;
		returnUrls?: CredasApiModelsRegistrationsReturnUrls;
	}
	export interface CredasApiModelsWebVerificationsGetWebVerificationsByRegistrationIdRequestFormProperties {

		/** Required */
		registrationId: FormControl<string | null | undefined>,
	}
	export function CreateCredasApiModelsWebVerificationsGetWebVerificationsByRegistrationIdRequestFormGroup() {
		return new FormGroup<CredasApiModelsWebVerificationsGetWebVerificationsByRegistrationIdRequestFormProperties>({
			registrationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CredasApiModelsWebVerificationsGetWebVerificationsResponse {
		results?: Array<CredasApiModelsWebVerificationsWebVerificationsItem>;
	}
	export interface CredasApiModelsWebVerificationsGetWebVerificationsResponseFormProperties {
	}
	export function CreateCredasApiModelsWebVerificationsGetWebVerificationsResponseFormGroup() {
		return new FormGroup<CredasApiModelsWebVerificationsGetWebVerificationsResponseFormProperties>({
		});

	}

	export interface CredasApiModelsWebVerificationsWebVerificationsItem {
		journeyUrl?: CredasApiModelsRegistrationsJourneyUrl;
	}
	export interface CredasApiModelsWebVerificationsWebVerificationsItemFormProperties {
	}
	export function CreateCredasApiModelsWebVerificationsWebVerificationsItemFormGroup() {
		return new FormGroup<CredasApiModelsWebVerificationsWebVerificationsItemFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Verifies bank account details.
		 * Post api/bank-accounts/verify
		 * @param {CredasApiModelsBankAccountsAccountVerificationRequest} requestBody Object containing data required to perform bank account verification.
		 * @return {CredasApiModelsBankAccountsAccountVerificationResponse} Success
		 */
		Verify(requestBody: CredasApiModelsBankAccountsAccountVerificationRequest): Observable<CredasApiModelsBankAccountsAccountVerificationResponse> {
			return this.http.post<CredasApiModelsBankAccountsAccountVerificationResponse>(this.baseUri + 'api/bank-accounts/verify', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Searches for a company based on its Company Number and returns its details.
		 * If a company appears multiple times within the structure, it will only be detailed in full (i.e. with significant ownership details) in its first instance. Subsequent instances will be
		 * marked as duplicates.
		 * Whilst duplicate instances of companies can and will be identified, it is not possible to categorically identify duplicated people.
		 * Post api/companies
		 * @param {string} companyNumber The company registration number of the company that should be searched.
		 * @return {CredasApiModelsCompaniesCompanyDetail} Success
		 */
		SearchCompany(companyNumber: string | null | undefined): Observable<CredasApiModelsCompaniesCompanyDetail> {
			return this.http.post<CredasApiModelsCompaniesCompanyDetail>(this.baseUri + 'api/companies?companyNumber=' + (companyNumber == null ? '' : encodeURIComponent(companyNumber)), null, {});
		}

		/**
		 * Get api/companies/{companyId}
		 * @return {CredasApiModelsCompaniesCompanyDetail} Success
		 */
		GetCompany(companyId: string): Observable<CredasApiModelsCompaniesCompanyDetail> {
			return this.http.get<CredasApiModelsCompaniesCompanyDetail>(this.baseUri + 'api/companies/' + (companyId == null ? '' : encodeURIComponent(companyId)), {});
		}

		/**
		 * Check includes identifying bankruptcy, insolvency, CCJ's or Company Directorship.
		 * Post api/credit-status/perform
		 * @param {CredasApiModelsStatusChecksStatusCheckRequest} requestBody Object containing data required to perform the check.
		 * @return {CredasApiModelsStatusChecksStatusCheck} Success
		 */
		CheckCreditStatus(requestBody: CredasApiModelsStatusChecksStatusCheckRequest): Observable<CredasApiModelsStatusChecksStatusCheck> {
			return this.http.post<CredasApiModelsStatusChecksStatusCheck>(this.baseUri + 'api/credit-status/perform', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates new data check against a specified registration.
		 * Post api/datachecks
		 * @param {CredasApiModelsDataCheckAddDataCheckRequest} requestBody Object containing data check details.
		 * @return {CredasApiModelsDataCheckAddDataCheckResponse} Details of newly added data check.
		 */
		AddDataCheck(requestBody: CredasApiModelsDataCheckAddDataCheckRequest): Observable<CredasApiModelsDataCheckAddDataCheckResponse> {
			return this.http.post<CredasApiModelsDataCheckAddDataCheckResponse>(this.baseUri + 'api/datachecks', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Add an id document image to the specified registration.
		 * Post api/images/id-document
		 * @param {CredasApiModelsImagesAddIdDocumentImageRequest} requestBody Object containing the id document image and registration id.
		 * @return {CredasApiModelsImagesAddIdDocumentImageResponse} Details of the processed id document.
		 */
		AddIdDocumentImage(requestBody: CredasApiModelsImagesAddIdDocumentImageRequest): Observable<CredasApiModelsImagesAddIdDocumentImageResponse> {
			return this.http.post<CredasApiModelsImagesAddIdDocumentImageResponse>(this.baseUri + 'api/images/id-document', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get all id document images associated with a registration.
		 * Get api/images/id-document/{registrationId}
		 * @param {string} registrationId The id of the registration.
		 * @return {Array<CredasApiModelsImagesGetIdDocumentImageResponse>} Details of the id documents associated with the registration.
		 */
		GetIdDocumentImages(registrationId: string): Observable<Array<CredasApiModelsImagesGetIdDocumentImageResponse>> {
			return this.http.get<Array<CredasApiModelsImagesGetIdDocumentImageResponse>>(this.baseUri + 'api/images/id-document/' + (registrationId == null ? '' : encodeURIComponent(registrationId)), {});
		}

		/**
		 * Add a liveness image (UAP) to the specified registration.
		 * Post api/images/liveness
		 * @param {CredasApiModelsImagesAddLivenessImageRequest} requestBody Object containing the liveness image and registration id.
		 * @return {void} OK response indicating a successful action.
		 */
		AddLivenessImage(requestBody: CredasApiModelsImagesAddLivenessImageRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/images/liveness', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieve the liveness performed image associated with a registration.
		 * Get api/images/liveness-performed/{registrationId}
		 * @param {string} registrationId The id of the registration.
		 * @return {CredasApiModelsImagesGetLivenessPerformedImageResponse} Response containing Liveness performed image details.
		 */
		GetLivenessPerformedImage(registrationId: string): Observable<CredasApiModelsImagesGetLivenessPerformedImageResponse> {
			return this.http.get<CredasApiModelsImagesGetLivenessPerformedImageResponse>(this.baseUri + 'api/images/liveness-performed/' + (registrationId == null ? '' : encodeURIComponent(registrationId)), {});
		}

		/**
		 * Retrieve the liveness action image (UAP) associated with a registration.
		 * Get api/images/liveness/{registrationId}
		 * @param {string} registrationId The id of the registration.
		 * @return {CredasApiModelsImagesGetLivenessImageResponse} Response containing Liveness image details.
		 */
		GetLivenessImage(registrationId: string): Observable<CredasApiModelsImagesGetLivenessImageResponse> {
			return this.http.get<CredasApiModelsImagesGetLivenessImageResponse>(this.baseUri + 'api/images/liveness/' + (registrationId == null ? '' : encodeURIComponent(registrationId)), {});
		}

		/**
		 * Returns a detailed report on the analysis that has taken place of a scanned document
		 * Get api/images/scan-report-pdf/{scanId}
		 * @param {string} scanId Id of the individual scanned document
		 * @return {string} PDF document containing detail analysis of scanned documents as a byte stream.
		 */
		GetScanReportPdf(scanId: string): Observable<string> {
			return this.http.get(this.baseUri + 'api/images/scan-report-pdf/' + (scanId == null ? '' : encodeURIComponent(scanId)), { responseType: 'text' });
		}

		/**
		 * Add a selfie image to the registration.
		 * Post api/images/selfie
		 * @param {CredasApiModelsImagesAddSelfieImageRequest} requestBody Object containing the selfie image and registration id.
		 * @return {CredasApiModelsImagesAddSelfieImageResponse} Result of uploading selfie image; including liveness check indicator.
		 */
		AddSelfieImage(requestBody: CredasApiModelsImagesAddSelfieImageRequest): Observable<CredasApiModelsImagesAddSelfieImageResponse> {
			return this.http.post<CredasApiModelsImagesAddSelfieImageResponse>(this.baseUri + 'api/images/selfie', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieve the selfie image associated with a registration.
		 * Get api/images/selfie/{registrationId}
		 * @param {string} registrationId The id of the registration.
		 * @return {CredasApiModelsImagesGetSelfieImageResponse} Response containing the selfie image details.
		 */
		GetSelfieImage(registrationId: string): Observable<CredasApiModelsImagesGetSelfieImageResponse> {
			return this.http.get<CredasApiModelsImagesGetSelfieImageResponse>(this.baseUri + 'api/images/selfie/' + (registrationId == null ? '' : encodeURIComponent(registrationId)), {});
		}

		/**
		 * Creates new property registry check against the registration.
		 * Post api/property-register
		 * @param {CredasApiModelsPropertyRegisterPropertyRegisterCheckRequest} requestBody Object containing check details.
		 * @return {CredasApiModelsPropertyRegisterPropertyRegisterCheckResponse} Details of newly added data check.
		 */
		AddPropertyRegisterCheck(requestBody: CredasApiModelsPropertyRegisterPropertyRegisterCheckRequest): Observable<CredasApiModelsPropertyRegisterPropertyRegisterCheckResponse> {
			return this.http.post<CredasApiModelsPropertyRegisterPropertyRegisterCheckResponse>(this.baseUri + 'api/property-register', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves property registry check associated with the registration.
		 * Get api/property-register/{id}
		 * @param {string} id Id of the registration.
		 * @return {CredasApiModelsPropertyRegisterPropertyRegisterCheckResponse} Details of the property register check.
		 */
		GetPropertyRegisterCheckResult(id: string): Observable<CredasApiModelsPropertyRegisterPropertyRegisterCheckResponse> {
			return this.http.get<CredasApiModelsPropertyRegisterPropertyRegisterCheckResponse>(this.baseUri + 'api/property-register/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Gets all available RegTypes.
		 * Get api/reg-types
		 * @return {Array<CredasApiModelsRegTypesRegType>} A collection of available RegTypes.
		 */
		GetAll(): Observable<Array<CredasApiModelsRegTypesRegType>> {
			return this.http.get<Array<CredasApiModelsRegTypesRegType>>(this.baseUri + 'api/reg-types', {});
		}

		/**
		 * Creates new registration.
		 * Post api/registrations
		 * @param {CredasApiModelsRegistrationsAddRegistrationRequest} requestBody Object containing registration details.
		 * @return {CredasApiModelsRegistrationsAddRegistrationResponse} Details of newly added registration.
		 */
		AddRegistration(requestBody: CredasApiModelsRegistrationsAddRegistrationRequest): Observable<CredasApiModelsRegistrationsAddRegistrationResponse> {
			return this.http.post<CredasApiModelsRegistrationsAddRegistrationResponse>(this.baseUri + 'api/registrations', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates new registration record, adds an ID document and optional selfie image in one go.
		 * It's designed to provide a quick integration path for external systems which capture these details.
		 * Post api/registrations/instant
		 * @param {CredasApiModelsRegistrationsAddInstantRegistrationRequest} requestBody The Credas.Api.Models.Registrations.AddInstantRegistrationRequest object containing required data.
		 * @return {CredasApiModelsRegistrationsAddInstantRegistrationResponse} OK response with object containing the document information.
		 */
		AddInstantRegistration(requestBody: CredasApiModelsRegistrationsAddInstantRegistrationRequest): Observable<CredasApiModelsRegistrationsAddInstantRegistrationResponse> {
			return this.http.post<CredasApiModelsRegistrationsAddInstantRegistrationResponse>(this.baseUri + 'api/registrations/instant', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Finds registrations by the ReferenceId.
		 * Get api/registrations/referenceid/{referenceId}/summary
		 * @param {string} referenceId ReferenceId - from external system to match Registrations on.
		 * @return {Array<CredasApiModelsRegistrationsRegistrationSummary>} Collection of Registration summary objects.
		 */
		GetRegistrationSummariesByReferenceId(referenceId: string): Observable<Array<CredasApiModelsRegistrationsRegistrationSummary>> {
			return this.http.get<Array<CredasApiModelsRegistrationsRegistrationSummary>>(this.baseUri + 'api/registrations/referenceid/' + (referenceId == null ? '' : encodeURIComponent(referenceId)) + '/summary', {});
		}

		/**
		 * Finds a registration by the RegCode.
		 * Get api/registrations/regcode/{regCode}/summary
		 * @param {string} regCode RegCode - short unique identifier.
		 * @return {CredasApiModelsRegistrationsRegistrationSummary} Registration summary object.
		 */
		GetRegistrationSummaryByRegCode(regCode: string): Observable<CredasApiModelsRegistrationsRegistrationSummary> {
			return this.http.get<CredasApiModelsRegistrationsRegistrationSummary>(this.baseUri + 'api/registrations/regcode/' + (regCode == null ? '' : encodeURIComponent(regCode)) + '/summary', {});
		}

		/**
		 * Gets paged registration list by search criteria or nothing if there are no matching fields.
		 * Optional parameters may be appended to the query string.
		 * Maximum page size is 50.
		 * Get api/registrations/search
		 * @param {number} pageNum Zero-based page number to retrieve.
		 * @param {number} pageSize Number of records to return on each request (Maximum value is 50).
		 * @param {string} forename Search by forename.
		 * @param {string} surname Search by surname.
		 * @param {string} email Search by user email.
		 * @param {string} dob Date of birth in (yyyy-MM-dd) format
		 * @return {CredasApiModelsRegistrationsPagedRegistrationSummary} Registration summary object list.
		 */
		GetRegistrationSearch(pageNum: number | null | undefined, pageSize: number | null | undefined, forename: string | null | undefined, surname: string | null | undefined, email: string | null | undefined, dob: string | null | undefined): Observable<CredasApiModelsRegistrationsPagedRegistrationSummary> {
			return this.http.get<CredasApiModelsRegistrationsPagedRegistrationSummary>(this.baseUri + 'api/registrations/search?pageNum=' + pageNum + '&pageSize=' + pageSize + '&forename=' + (forename == null ? '' : encodeURIComponent(forename)) + '&surname=' + (surname == null ? '' : encodeURIComponent(surname)) + '&email=' + (email == null ? '' : encodeURIComponent(email)) + '&dob=' + (dob == null ? '' : encodeURIComponent(dob)), {});
		}

		/**
		 * Checks if submitted documents are sufficient to complete registration.
		 * Get api/registrations/{id}/check-submitted-id-documents
		 * @param {string} id Id of the registration.
		 * @return {CredasApiModelsRegistrationsCheckSubmittedIdDocumentsResponse} OK response with object containing the result of the document check.
		 */
		CheckSubmittedIdDocuments(id: string): Observable<CredasApiModelsRegistrationsCheckSubmittedIdDocumentsResponse> {
			return this.http.get<CredasApiModelsRegistrationsCheckSubmittedIdDocumentsResponse>(this.baseUri + 'api/registrations/' + (id == null ? '' : encodeURIComponent(id)) + '/check-submitted-id-documents', {});
		}

		/**
		 * Updates a registration's contact details.
		 * Put api/registrations/{id}/contact-details
		 * @param {string} id Id of the registration.
		 * @param {CredasApiModelsRegistrationsUpdateContactDetailsRequest} requestBody Object containing contact details.
		 * @return {void} Registration contact details updated.
		 */
		UpdateContactDetails(id: string, requestBody: CredasApiModelsRegistrationsUpdateContactDetailsRequest): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'api/registrations/' + (id == null ? '' : encodeURIComponent(id)) + '/contact-details', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Sets an override for a specific check on the registration.
		 * Put api/registrations/{id}/override-check-status
		 * @param {string} id Id of the registration.
		 * @param {CredasApiModelsStatusOverridesOverrideCheckStatusRequest} requestBody Request data.
		 * @return {void} Status of the operation.
		 */
		OverrideCheckStatus(id: string, requestBody: CredasApiModelsStatusOverridesOverrideCheckStatusRequest): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'api/registrations/' + (id == null ? '' : encodeURIComponent(id)) + '/override-check-status', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns PDF export for a given registration.
		 * Get api/registrations/{id}/pdf-export
		 * @param {string} id Id of the registration.
		 * @return {string} PDF document containing registration extract as byte stream.
		 */
		GetRegistrationPdfExport(id: string): Observable<string> {
			return this.http.get(this.baseUri + 'api/registrations/' + (id == null ? '' : encodeURIComponent(id)) + '/pdf-export', { responseType: 'text' });
		}

		/**
		 * Returns a PDF report for a given registration containing specified sections
		 * Get api/registrations/{id}/pdf-export-sections
		 * @param {string} id Id of the registration.
		 * @return {string} PDF document containing registration extract as byte stream.
		 */
		RegistrationsGetByIdAndCommentsAndContactDetailsAndStandardChecksAndPepSanctionChecksAndProofOfOwnershipAndBankAccountCheckAndCreditStatusCheckAndLivenessAndExcludeSelfieAndExcludeIDDocumentsAndDIATFSection(id: string, Comments: boolean | null | undefined, ContactDetails: boolean | null | undefined, StandardChecks: boolean | null | undefined, PepSanctionChecks: boolean | null | undefined, ProofOfOwnership: boolean | null | undefined, BankAccountCheck: boolean | null | undefined, CreditStatusCheck: boolean | null | undefined, Liveness: boolean | null | undefined, ExcludeSelfie: boolean | null | undefined, ExcludeIDDocuments: boolean | null | undefined, DIATFSection: boolean | null | undefined): Observable<string> {
			return this.http.get(this.baseUri + 'api/registrations/' + (id == null ? '' : encodeURIComponent(id)) + '/pdf-export-sections&Comments=' + Comments + '&ContactDetails=' + ContactDetails + '&StandardChecks=' + StandardChecks + '&PepSanctionChecks=' + PepSanctionChecks + '&ProofOfOwnership=' + ProofOfOwnership + '&BankAccountCheck=' + BankAccountCheck + '&CreditStatusCheck=' + CreditStatusCheck + '&Liveness=' + Liveness + '&ExcludeSelfie=' + ExcludeSelfie + '&ExcludeIDDocuments=' + ExcludeIDDocuments + '&DIATFSection=' + DIATFSection, { responseType: 'text' });
		}

		/**
		 * Returns settlement status PDF (Share Code) for a given registration.
		 * Get api/registrations/{id}/pdf-settlement-status
		 * @param {string} id Id of the registration.
		 * @return {string} PDF document containing settlement status information extract as byte stream.
		 */
		GetShareCodePdfExport(id: string): Observable<string> {
			return this.http.get(this.baseUri + 'api/registrations/' + (id == null ? '' : encodeURIComponent(id)) + '/pdf-settlement-status', { responseType: 'text' });
		}

		/**
		 * Resends any invitation for the specified registration.
		 * Post api/registrations/{id}/resend-invitation
		 * @param {string} id Id of the registration.
		 * @return {void} Invitation sent.
		 */
		ResendInvitation(id: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/registrations/' + (id == null ? '' : encodeURIComponent(id)) + '/resend-invitation', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets registration settings or nothing if there are no settings associated with the registration.
		 * Get api/registrations/{id}/settings
		 * @param {string} id Id of the registration.
		 * @return {void} Registration settings updated.
		 */
		GetRegistrationSettings(id: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/registrations/' + (id == null ? '' : encodeURIComponent(id)) + '/settings', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates registration settings.
		 * Put api/registrations/{id}/settings
		 * @param {string} id Id of the registration.
		 * @param {CredasApiModelsRegistrationsRegistrationSettings} requestBody Object containing registration settings.
		 * @return {void} Registration settings updated.
		 */
		UpdateRegistrationSettings(id: string, requestBody: CredasApiModelsRegistrationsRegistrationSettings): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'api/registrations/' + (id == null ? '' : encodeURIComponent(id)) + '/settings', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates the status of the registration to one specified in the request.
		 * Put api/registrations/{id}/status
		 * @param {string} id Id of the registration.
		 * @param {CredasApiModelsRegistrationsUpdateRegistrationStatusRequest} requestBody Request object containing the details.
		 * @return {void} Update was successful.
		 */
		UpdateRegistrationStatus(id: string, requestBody: CredasApiModelsRegistrationsUpdateRegistrationStatusRequest): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'api/registrations/' + (id == null ? '' : encodeURIComponent(id)) + '/status', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Finds a registration by the Id.
		 * Get api/registrations/{id}/summary
		 * @param {string} id Id of the registration.
		 * @return {CredasApiModelsRegistrationsRegistrationSummary} Registration summary object.
		 */
		GetRegistrationSummary(id: string): Observable<CredasApiModelsRegistrationsRegistrationSummary> {
			return this.http.get<CredasApiModelsRegistrationsRegistrationSummary>(this.baseUri + 'api/registrations/' + (id == null ? '' : encodeURIComponent(id)) + '/summary', {});
		}

		/**
		 * Get a list of supported id document for the specified registration id.
		 * Get api/registrations/{id}/supported-id-documents
		 * @param {string} id Id of the registration.
		 * @return {CredasApiModelsRegistrationsSupportedIdDocument} List of supported id document objects.
		 */
		GetRegistrationSupportedIdDocuments(id: string): Observable<CredasApiModelsRegistrationsSupportedIdDocument> {
			return this.http.get<CredasApiModelsRegistrationsSupportedIdDocument>(this.baseUri + 'api/registrations/' + (id == null ? '' : encodeURIComponent(id)) + '/supported-id-documents', {});
		}

		/**
		 * Retrieves secure links to registration details pages searching by the Reference Id.
		 * It may return none, one or many (up to 20) matching results.
		 * Each result contains a secure url; UTC date/time of when the link expires; name details of a person associated with the registration.
		 * Post api/report-view/by-referenceid
		 * @param {CredasApiModelsReportViewGetReportViewByReferenceIdRequest} requestBody Request object
		 * @return {CredasApiModelsReportViewGetReportViewResponse} Results of the query
		 */
		GetReportViewByReferenceId(requestBody: CredasApiModelsReportViewGetReportViewByReferenceIdRequest): Observable<CredasApiModelsReportViewGetReportViewResponse> {
			return this.http.post<CredasApiModelsReportViewGetReportViewResponse>(this.baseUri + 'api/report-view/by-referenceid', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves secure link to registration details page searching by the Registration Id.
		 * It may return none or one matching result.
		 * Each result contains a secure url; UTC date/time of when the link expires; name details of a person associated with the registration.
		 * Post api/report-view/by-registrationid
		 * @param {CredasApiModelsReportViewGetReportViewByRegistrationIdRequest} requestBody Request object
		 * @return {CredasApiModelsReportViewGetReportViewResponse} Results of the query
		 */
		GetReportViewByRegistrationId(requestBody: CredasApiModelsReportViewGetReportViewByRegistrationIdRequest): Observable<CredasApiModelsReportViewGetReportViewResponse> {
			return this.http.post<CredasApiModelsReportViewGetReportViewResponse>(this.baseUri + 'api/report-view/by-registrationid', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves secure links to web verification pages searching by the Reference Id.
		 * It may return none, one or many (up to 20) matching results.
		 * Each result contains a secure url; UTC date/time of when the link expires; name details of a person associated with the registration.
		 * Post api/web-verifications/by-referenceid
		 * @return {CredasApiModelsWebVerificationsGetWebVerificationsResponse} Results of the query
		 */
		GetWebVerificationsByReferenceId(requestBody: CredasApiModelsWebVerificationsGetWebVerificationsByReferenceIdRequest): Observable<CredasApiModelsWebVerificationsGetWebVerificationsResponse> {
			return this.http.post<CredasApiModelsWebVerificationsGetWebVerificationsResponse>(this.baseUri + 'api/web-verifications/by-referenceid', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves secure link to web verification page searching by the Registration Id.
		 * It may return none or one matching result.
		 * Each result contains a secure url; UTC date/time of when the link expires; name details of a person associated with the registration.
		 * Post api/web-verifications/by-registrationid
		 * @return {CredasApiModelsWebVerificationsGetWebVerificationsResponse} Results of the query
		 */
		GetWebVerificationsByRegistrationId(requestBody: CredasApiModelsWebVerificationsGetWebVerificationsByRegistrationIdRequest): Observable<CredasApiModelsWebVerificationsGetWebVerificationsResponse> {
			return this.http.post<CredasApiModelsWebVerificationsGetWebVerificationsResponse>(this.baseUri + 'api/web-verifications/by-registrationid', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

