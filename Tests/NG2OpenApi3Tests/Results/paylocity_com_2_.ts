import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** The Add Client Secret Request Model */
	export interface AddClientSecret {

		/**
		 * A value sent with the 'ACTION NEEDED: Web Link API Credentials Expiring Soon.' email notification.
		 * Required
		 */
		code: string;
	}

	/** The Add Client Secret Request Model */
	export interface AddClientSecretFormProperties {

		/**
		 * A value sent with the 'ACTION NEEDED: Web Link API Credentials Expiring Soon.' email notification.
		 * Required
		 */
		code: FormControl<string | null | undefined>,
	}
	export function CreateAddClientSecretFormGroup() {
		return new FormGroup<AddClientSecretFormProperties>({
			code: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The additional pay rate model */
	export interface AdditionalRate {

		/** Not required. If populated, must match one of the system coded values available in the Additional Rates Change Reason drop down.<br /> */
		changeReason?: string | null;

		/** Not required. Valid values must match one of the system coded cost centers available in the Additional Rates Cost Center level 1 drop down. This cell must be in a text format.<br /> */
		costCenter1?: string | null;

		/** Not required. Valid values must match one of the system coded cost centers available in the Additional Rates Cost Center level 2 drop down. This cell must be in a text format.<br /> */
		costCenter2?: string | null;

		/** Not required. Valid values must match one of the system coded cost centers available in the Additional Rates Cost Center level 3 drop down. This cell must be in a text format.<br /> */
		costCenter3?: string | null;

		/** Required. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*.<br /> */
		effectiveDate?: string | null;

		/** Not required. Must match one of the system coded check dates available in the Additional Rates End Check Date drop down. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*.<br /> */
		endCheckDate?: string | null;

		/** Not required. If populated, must match one of the system coded values available in the Additional Rates Job drop down.<br /> */
		job?: string | null;

		/**
		 * Required. Enter dollar amount that corresponds to the Per selection.<br />
		 * Type: double
		 */
		rate?: number | null;

		/** Required. If populated, must match one of the system coded values available in the Additional Rates Rate Code drop down.<br /> */
		rateCode?: string | null;

		/** Not required.<br  />Max length: 4000<br /> */
		rateNotes?: string | null;

		/** Required. Valid values are HOUR or WEEK.<br /> */
		ratePer?: string | null;

		/** Not required. If populated, must match one of the system coded values available in the Additional Rates Shift drop down.<br /> */
		shift?: string | null;
	}

	/** The additional pay rate model */
	export interface AdditionalRateFormProperties {

		/** Not required. If populated, must match one of the system coded values available in the Additional Rates Change Reason drop down.<br /> */
		changeReason: FormControl<string | null | undefined>,

		/** Not required. Valid values must match one of the system coded cost centers available in the Additional Rates Cost Center level 1 drop down. This cell must be in a text format.<br /> */
		costCenter1: FormControl<string | null | undefined>,

		/** Not required. Valid values must match one of the system coded cost centers available in the Additional Rates Cost Center level 2 drop down. This cell must be in a text format.<br /> */
		costCenter2: FormControl<string | null | undefined>,

		/** Not required. Valid values must match one of the system coded cost centers available in the Additional Rates Cost Center level 3 drop down. This cell must be in a text format.<br /> */
		costCenter3: FormControl<string | null | undefined>,

		/** Required. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*.<br /> */
		effectiveDate: FormControl<string | null | undefined>,

		/** Not required. Must match one of the system coded check dates available in the Additional Rates End Check Date drop down. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*.<br /> */
		endCheckDate: FormControl<string | null | undefined>,

		/** Not required. If populated, must match one of the system coded values available in the Additional Rates Job drop down.<br /> */
		job: FormControl<string | null | undefined>,

		/**
		 * Required. Enter dollar amount that corresponds to the Per selection.<br />
		 * Type: double
		 */
		rate: FormControl<number | null | undefined>,

		/** Required. If populated, must match one of the system coded values available in the Additional Rates Rate Code drop down.<br /> */
		rateCode: FormControl<string | null | undefined>,

		/** Not required.<br  />Max length: 4000<br /> */
		rateNotes: FormControl<string | null | undefined>,

		/** Required. Valid values are HOUR or WEEK.<br /> */
		ratePer: FormControl<string | null | undefined>,

		/** Not required. If populated, must match one of the system coded values available in the Additional Rates Shift drop down.<br /> */
		shift: FormControl<string | null | undefined>,
	}
	export function CreateAdditionalRateFormGroup() {
		return new FormGroup<AdditionalRateFormProperties>({
			changeReason: new FormControl<string | null | undefined>(undefined),
			costCenter1: new FormControl<string | null | undefined>(undefined),
			costCenter2: new FormControl<string | null | undefined>(undefined),
			costCenter3: new FormControl<string | null | undefined>(undefined),
			effectiveDate: new FormControl<string | null | undefined>(undefined),
			endCheckDate: new FormControl<string | null | undefined>(undefined),
			job: new FormControl<string | null | undefined>(undefined),
			rate: new FormControl<number | null | undefined>(undefined),
			rateCode: new FormControl<string | null | undefined>(undefined),
			rateNotes: new FormControl<string | null | undefined>(undefined),
			ratePer: new FormControl<string | null | undefined>(undefined),
			shift: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The benefit setup model */
	export interface BenefitSetup {

		/** Benefit Class code. Values are configured in Web Pay Company > Setup > Benefits > Classes.<br  />Max length: 30 */
		benefitClass?: string | null;

		/** Date when Benefit Class takes effect. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*. */
		benefitClassEffectiveDate?: string | null;

		/**
		 * Salary used to configure benefits.<br  />Decimal(12,2)
		 * Type: double
		 */
		benefitSalary?: number | null;

		/** Date when Benefit Salary takes effect. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*. */
		benefitSalaryEffectiveDate?: string | null;

		/** Applicable only for HR Enhanced clients and Benefit Classes with ACA Employment Type of Full Time. */
		doNotApplyAdministrativePeriod?: boolean | null;

		/** Only valid for HR Enhanced clients and Benefit Classes that are ACA Employment Type of Full Time. */
		isMeasureAcaEligibility?: boolean | null;
	}

	/** The benefit setup model */
	export interface BenefitSetupFormProperties {

		/** Benefit Class code. Values are configured in Web Pay Company > Setup > Benefits > Classes.<br  />Max length: 30 */
		benefitClass: FormControl<string | null | undefined>,

		/** Date when Benefit Class takes effect. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*. */
		benefitClassEffectiveDate: FormControl<string | null | undefined>,

		/**
		 * Salary used to configure benefits.<br  />Decimal(12,2)
		 * Type: double
		 */
		benefitSalary: FormControl<number | null | undefined>,

		/** Date when Benefit Salary takes effect. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*. */
		benefitSalaryEffectiveDate: FormControl<string | null | undefined>,

		/** Applicable only for HR Enhanced clients and Benefit Classes with ACA Employment Type of Full Time. */
		doNotApplyAdministrativePeriod: FormControl<boolean | null | undefined>,

		/** Only valid for HR Enhanced clients and Benefit Classes that are ACA Employment Type of Full Time. */
		isMeasureAcaEligibility: FormControl<boolean | null | undefined>,
	}
	export function CreateBenefitSetupFormGroup() {
		return new FormGroup<BenefitSetupFormProperties>({
			benefitClass: new FormControl<string | null | undefined>(undefined),
			benefitClassEffectiveDate: new FormControl<string | null | undefined>(undefined),
			benefitSalary: new FormControl<number | null | undefined>(undefined),
			benefitSalaryEffectiveDate: new FormControl<string | null | undefined>(undefined),
			doNotApplyAdministrativePeriod: new FormControl<boolean | null | undefined>(undefined),
			isMeasureAcaEligibility: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** The Client Credentials Response Model */
	export interface ClientCredentialsResponse {

		/** The client's secret */
		clientSecret?: string | null;

		/** The client's secret expiration date */
		clientSecretExpirationDate?: string | null;
	}

	/** The Client Credentials Response Model */
	export interface ClientCredentialsResponseFormProperties {

		/** The client's secret */
		clientSecret: FormControl<string | null | undefined>,

		/** The client's secret expiration date */
		clientSecretExpirationDate: FormControl<string | null | undefined>,
	}
	export function CreateClientCredentialsResponseFormGroup() {
		return new FormGroup<ClientCredentialsResponseFormProperties>({
			clientSecret: new FormControl<string | null | undefined>(undefined),
			clientSecretExpirationDate: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The Company Codes model */
	export interface CompanyCodes {

		/** Code.<br  /> Max length: 40 */
		code?: string | null;

		/** Description. <br  /> Max length: 150 */
		description?: string | null;
	}

	/** The Company Codes model */
	export interface CompanyCodesFormProperties {

		/** Code.<br  /> Max length: 40 */
		code: FormControl<string | null | undefined>,

		/** Description. <br  /> Max length: 150 */
		description: FormControl<string | null | undefined>,
	}
	export function CreateCompanyCodesFormGroup() {
		return new FormGroup<CompanyCodesFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CustomFieldDefinition {

		/** The custom field category. */
		category?: string | null;

		/** Specifies the default value of the custom field. */
		defaultValue?: string | null;

		/** Indicates whether the custom field is required. */
		isRequired?: boolean | null;

		/** The custom field label. */
		label?: string | null;

		/** The custom field type. */
		type?: string | null;

		/** A set of values that are applicable to the custom field. */
		CustomFieldDefinitionValues?: Array<CustomFieldDefinitionValues>;
	}
	export interface CustomFieldDefinitionFormProperties {

		/** The custom field category. */
		category: FormControl<string | null | undefined>,

		/** Specifies the default value of the custom field. */
		defaultValue: FormControl<string | null | undefined>,

		/** Indicates whether the custom field is required. */
		isRequired: FormControl<boolean | null | undefined>,

		/** The custom field label. */
		label: FormControl<string | null | undefined>,

		/** The custom field type. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateCustomFieldDefinitionFormGroup() {
		return new FormGroup<CustomFieldDefinitionFormProperties>({
			category: new FormControl<string | null | undefined>(undefined),
			defaultValue: new FormControl<string | null | undefined>(undefined),
			isRequired: new FormControl<boolean | null | undefined>(undefined),
			label: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CustomFieldDefinitionValues {

		/** The custom field code. */
		code?: string | null;

		/** The custom field description. */
		description?: string | null;
	}
	export interface CustomFieldDefinitionValuesFormProperties {

		/** The custom field code. */
		code: FormControl<string | null | undefined>,

		/** The custom field description. */
		description: FormControl<string | null | undefined>,
	}
	export function CreateCustomFieldDefinitionValuesFormGroup() {
		return new FormGroup<CustomFieldDefinitionValuesFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The Direct Deposit model */
	export interface DirectDeposit {

		/** Additional Direct Deposits that are not the main Direct Deposit. */
		DirectDepositAdditionalDirectDeposit?: Array<DirectDepositAdditionalDirectDeposit>;

		/** The main Direct Deposit account. */
		mainDirectDeposit?: DirectDepositMainDirectDeposit;
	}

	/** The Direct Deposit model */
	export interface DirectDepositFormProperties {
	}
	export function CreateDirectDepositFormGroup() {
		return new FormGroup<DirectDepositFormProperties>({
		});

	}

	export interface DirectDepositAdditionalDirectDeposit {

		/** Account number, entered without special characters and spaces. <br  />Max length: 17<br /> */
		accountNumber?: string | null;

		/** Account type. Valid values are *C* (Checking), *S* (Saving), *P* (Pay Card). <br   />Max length: 1<br /> */
		accountType?: string | null;

		/**
		 * Amount value to be deposited to the account.<br  />Decimal (12,2)<br />
		 * Type: double
		 */
		amount?: number | null;

		/** Amount type to indicate the context of the amount. Common values are *F* (FLAT), *F-* (Net Minus), *P* (Percent). <br  /> Max length: 5<br /> */
		amountType?: string | null;

		/** Indicates if direct deposit should be blocked when special check types such as Bonus are processed.<br /> */
		blockSpecial?: boolean | null;

		/** Indicates if account will not pre-note.<br /> */
		isSkipPreNote?: boolean | null;

		/** Name on the bank account. Defaults to employee's name. <br  />Max length: 30<br /> */
		nameOnAccount?: string | null;

		/** Date to end the pre-note of the account. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*.<br /> */
		preNoteDate?: string | null;

		/** ABA Transit Routing Number, entered without dashes or spaces. <br  />Max length: 9<br /> */
		routingNumber?: string | null;
	}
	export interface DirectDepositAdditionalDirectDepositFormProperties {

		/** Account number, entered without special characters and spaces. <br  />Max length: 17<br /> */
		accountNumber: FormControl<string | null | undefined>,

		/** Account type. Valid values are *C* (Checking), *S* (Saving), *P* (Pay Card). <br   />Max length: 1<br /> */
		accountType: FormControl<string | null | undefined>,

		/**
		 * Amount value to be deposited to the account.<br  />Decimal (12,2)<br />
		 * Type: double
		 */
		amount: FormControl<number | null | undefined>,

		/** Amount type to indicate the context of the amount. Common values are *F* (FLAT), *F-* (Net Minus), *P* (Percent). <br  /> Max length: 5<br /> */
		amountType: FormControl<string | null | undefined>,

		/** Indicates if direct deposit should be blocked when special check types such as Bonus are processed.<br /> */
		blockSpecial: FormControl<boolean | null | undefined>,

		/** Indicates if account will not pre-note.<br /> */
		isSkipPreNote: FormControl<boolean | null | undefined>,

		/** Name on the bank account. Defaults to employee's name. <br  />Max length: 30<br /> */
		nameOnAccount: FormControl<string | null | undefined>,

		/** Date to end the pre-note of the account. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*.<br /> */
		preNoteDate: FormControl<string | null | undefined>,

		/** ABA Transit Routing Number, entered without dashes or spaces. <br  />Max length: 9<br /> */
		routingNumber: FormControl<string | null | undefined>,
	}
	export function CreateDirectDepositAdditionalDirectDepositFormGroup() {
		return new FormGroup<DirectDepositAdditionalDirectDepositFormProperties>({
			accountNumber: new FormControl<string | null | undefined>(undefined),
			accountType: new FormControl<string | null | undefined>(undefined),
			amount: new FormControl<number | null | undefined>(undefined),
			amountType: new FormControl<string | null | undefined>(undefined),
			blockSpecial: new FormControl<boolean | null | undefined>(undefined),
			isSkipPreNote: new FormControl<boolean | null | undefined>(undefined),
			nameOnAccount: new FormControl<string | null | undefined>(undefined),
			preNoteDate: new FormControl<string | null | undefined>(undefined),
			routingNumber: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DirectDepositMainDirectDeposit {

		/** Account number, entered without special characters and spaces. <br  />Max length: 17 */
		accountNumber?: string | null;

		/** Account type. Valid values are *C* (Checking), *S* (Saving), *P* (Pay Card). <br   />Max length: 1 */
		accountType?: string | null;

		/** Indicates if direct deposit should be blocked when special check types such as Bonus are processed.<br /> */
		blockSpecial?: boolean | null;

		/** Indicates if account will not pre-note. */
		isSkipPreNote?: boolean | null;

		/** Name on the bank account. Defaults to employee's name. <br  />Max length: 30<br /> */
		nameOnAccount?: string | null;

		/** Date to end the pre-note of the account. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*. */
		preNoteDate?: string | null;

		/** ABA Transit Routing Number, entered without dashes or spaces. <br  />Max length: 9 */
		routingNumber?: string | null;
	}
	export interface DirectDepositMainDirectDepositFormProperties {

		/** Account number, entered without special characters and spaces. <br  />Max length: 17 */
		accountNumber: FormControl<string | null | undefined>,

		/** Account type. Valid values are *C* (Checking), *S* (Saving), *P* (Pay Card). <br   />Max length: 1 */
		accountType: FormControl<string | null | undefined>,

		/** Indicates if direct deposit should be blocked when special check types such as Bonus are processed.<br /> */
		blockSpecial: FormControl<boolean | null | undefined>,

		/** Indicates if account will not pre-note. */
		isSkipPreNote: FormControl<boolean | null | undefined>,

		/** Name on the bank account. Defaults to employee's name. <br  />Max length: 30<br /> */
		nameOnAccount: FormControl<string | null | undefined>,

		/** Date to end the pre-note of the account. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*. */
		preNoteDate: FormControl<string | null | undefined>,

		/** ABA Transit Routing Number, entered without dashes or spaces. <br  />Max length: 9 */
		routingNumber: FormControl<string | null | undefined>,
	}
	export function CreateDirectDepositMainDirectDepositFormGroup() {
		return new FormGroup<DirectDepositMainDirectDepositFormProperties>({
			accountNumber: new FormControl<string | null | undefined>(undefined),
			accountType: new FormControl<string | null | undefined>(undefined),
			blockSpecial: new FormControl<boolean | null | undefined>(undefined),
			isSkipPreNote: new FormControl<boolean | null | undefined>(undefined),
			nameOnAccount: new FormControl<string | null | undefined>(undefined),
			preNoteDate: new FormControl<string | null | undefined>(undefined),
			routingNumber: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The employee earning model */
	export interface Earning {

		/** Third-party agency associated with earning. Must match Company setup.<br  />Max length: 10 */
		agency?: string | null;

		/**
		 * Value that matches CalculationCode to add to gross wages. For percentage (%), enter whole number (10 = 10%).  <br  />Decimal(12,2)
		 * Type: double
		 */
		amount?: number | null;

		/**
		 * Year to Date dollar amount not to be exceeded for an earning in the calendar year. Used only with company driven maximums. <br  />Decimal(12,2)
		 * Type: double
		 */
		annualMaximum?: number | null;

		/** Defines how earnings are calculated. Common values are *% (percentage of gross), flat (flat dollar amount)*. Defaulted to the Company setup calcCode for earning. <br  />Max length: 20 */
		calculationCode?: string | null;

		/** Cost Center associated with earning. Must match Company setup.<br  /> Max length: 10 */
		costCenter1?: string | null;

		/** Cost Center associated with earning. Must match Company setup.<br  /> Max length: 10 */
		costCenter2?: string | null;

		/** Cost Center associated with earning. Must match Company setup.<br  /> Max length: 10 */
		costCenter3?: string | null;

		/**
		 * Earning code. Must match Company setup. <br  />Max length: 10
		 * Required
		 */
		earningCode: string;

		/** Date earning is active. Defaulted to run date or check date based on Company setup. Common formats are MM-DD-CCYY, CCYY-MM-DD. */
		effectiveDate?: string | null;

		/** Stop date of an earning. Common formats are MM-DD-CCYY, CCYY-MM-DD. */
		endDate?: string | null;

		/** Needed if earning is applied differently from the payroll frequency (one time earning for example).<br  /> Max length: 5 */
		frequency?: string | null;

		/**
		 * Dollar amount. The employee earning will stop when the goal amount is reached.<br  /> Decimal(12,2)
		 * Type: double
		 */
		goal?: number | null;

		/**
		 * The value is used in conjunction with the Rate field. When entering Group Term Life Insurance (GTL), it should contain the full amount of the group term life insurance policy. <br  /> Decimal(12,2)
		 * Type: double
		 */
		hoursOrUnits?: number | null;

		/** Used for ACA. If not entered, defaulted to Company earning setup. */
		isSelfInsured?: boolean | null;

		/** Job code associated with earnings. Must match Company setup.<br  /> Max length: 20 */
		jobCode?: string | null;

		/** Information to print on the check stub if agency is set up for this earning. <br  />Max length: 50 */
		miscellaneousInfo?: string | null;

		/**
		 * Amount already paid to employee toward goal. <br  /> Decimal(12,2)
		 * Type: double
		 */
		paidTowardsGoal?: number | null;

		/**
		 * Maximum amount of the earning on a single paycheck. <br  /> Decimal(12,2)
		 * Type: double
		 */
		payPeriodMaximum?: number | null;

		/**
		 * Minimum amount of the earning on a single paycheck. <br  /> Decimal(12,2)
		 * Type: double
		 */
		payPeriodMinimum?: number | null;

		/**
		 * Rate is used in conjunction with the hoursOrUnits field. <br  /> Decimal(12,2)
		 * Type: double
		 */
		rate?: number | null;

		/** Rate Code applies to additional pay rates entered for an employee. Must match Company setup. <br  /> Max length: 10 */
		rateCode?: string | null;

		/**
		 * Start date of an earning based on payroll calendar. Common formats are MM-DD-CCYY, CCYY-MM-DD.
		 * Required
		 */
		startDate: string;
	}

	/** The employee earning model */
	export interface EarningFormProperties {

		/** Third-party agency associated with earning. Must match Company setup.<br  />Max length: 10 */
		agency: FormControl<string | null | undefined>,

		/**
		 * Value that matches CalculationCode to add to gross wages. For percentage (%), enter whole number (10 = 10%).  <br  />Decimal(12,2)
		 * Type: double
		 */
		amount: FormControl<number | null | undefined>,

		/**
		 * Year to Date dollar amount not to be exceeded for an earning in the calendar year. Used only with company driven maximums. <br  />Decimal(12,2)
		 * Type: double
		 */
		annualMaximum: FormControl<number | null | undefined>,

		/** Defines how earnings are calculated. Common values are *% (percentage of gross), flat (flat dollar amount)*. Defaulted to the Company setup calcCode for earning. <br  />Max length: 20 */
		calculationCode: FormControl<string | null | undefined>,

		/** Cost Center associated with earning. Must match Company setup.<br  /> Max length: 10 */
		costCenter1: FormControl<string | null | undefined>,

		/** Cost Center associated with earning. Must match Company setup.<br  /> Max length: 10 */
		costCenter2: FormControl<string | null | undefined>,

		/** Cost Center associated with earning. Must match Company setup.<br  /> Max length: 10 */
		costCenter3: FormControl<string | null | undefined>,

		/**
		 * Earning code. Must match Company setup. <br  />Max length: 10
		 * Required
		 */
		earningCode: FormControl<string | null | undefined>,

		/** Date earning is active. Defaulted to run date or check date based on Company setup. Common formats are MM-DD-CCYY, CCYY-MM-DD. */
		effectiveDate: FormControl<string | null | undefined>,

		/** Stop date of an earning. Common formats are MM-DD-CCYY, CCYY-MM-DD. */
		endDate: FormControl<string | null | undefined>,

		/** Needed if earning is applied differently from the payroll frequency (one time earning for example).<br  /> Max length: 5 */
		frequency: FormControl<string | null | undefined>,

		/**
		 * Dollar amount. The employee earning will stop when the goal amount is reached.<br  /> Decimal(12,2)
		 * Type: double
		 */
		goal: FormControl<number | null | undefined>,

		/**
		 * The value is used in conjunction with the Rate field. When entering Group Term Life Insurance (GTL), it should contain the full amount of the group term life insurance policy. <br  /> Decimal(12,2)
		 * Type: double
		 */
		hoursOrUnits: FormControl<number | null | undefined>,

		/** Used for ACA. If not entered, defaulted to Company earning setup. */
		isSelfInsured: FormControl<boolean | null | undefined>,

		/** Job code associated with earnings. Must match Company setup.<br  /> Max length: 20 */
		jobCode: FormControl<string | null | undefined>,

		/** Information to print on the check stub if agency is set up for this earning. <br  />Max length: 50 */
		miscellaneousInfo: FormControl<string | null | undefined>,

		/**
		 * Amount already paid to employee toward goal. <br  /> Decimal(12,2)
		 * Type: double
		 */
		paidTowardsGoal: FormControl<number | null | undefined>,

		/**
		 * Maximum amount of the earning on a single paycheck. <br  /> Decimal(12,2)
		 * Type: double
		 */
		payPeriodMaximum: FormControl<number | null | undefined>,

		/**
		 * Minimum amount of the earning on a single paycheck. <br  /> Decimal(12,2)
		 * Type: double
		 */
		payPeriodMinimum: FormControl<number | null | undefined>,

		/**
		 * Rate is used in conjunction with the hoursOrUnits field. <br  /> Decimal(12,2)
		 * Type: double
		 */
		rate: FormControl<number | null | undefined>,

		/** Rate Code applies to additional pay rates entered for an employee. Must match Company setup. <br  /> Max length: 10 */
		rateCode: FormControl<string | null | undefined>,

		/**
		 * Start date of an earning based on payroll calendar. Common formats are MM-DD-CCYY, CCYY-MM-DD.
		 * Required
		 */
		startDate: FormControl<string | null | undefined>,
	}
	export function CreateEarningFormGroup() {
		return new FormGroup<EarningFormProperties>({
			agency: new FormControl<string | null | undefined>(undefined),
			amount: new FormControl<number | null | undefined>(undefined),
			annualMaximum: new FormControl<number | null | undefined>(undefined),
			calculationCode: new FormControl<string | null | undefined>(undefined),
			costCenter1: new FormControl<string | null | undefined>(undefined),
			costCenter2: new FormControl<string | null | undefined>(undefined),
			costCenter3: new FormControl<string | null | undefined>(undefined),
			earningCode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			effectiveDate: new FormControl<string | null | undefined>(undefined),
			endDate: new FormControl<string | null | undefined>(undefined),
			frequency: new FormControl<string | null | undefined>(undefined),
			goal: new FormControl<number | null | undefined>(undefined),
			hoursOrUnits: new FormControl<number | null | undefined>(undefined),
			isSelfInsured: new FormControl<boolean | null | undefined>(undefined),
			jobCode: new FormControl<string | null | undefined>(undefined),
			miscellaneousInfo: new FormControl<string | null | undefined>(undefined),
			paidTowardsGoal: new FormControl<number | null | undefined>(undefined),
			payPeriodMaximum: new FormControl<number | null | undefined>(undefined),
			payPeriodMinimum: new FormControl<number | null | undefined>(undefined),
			rate: new FormControl<number | null | undefined>(undefined),
			rateCode: new FormControl<string | null | undefined>(undefined),
			startDate: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The emergency contact model */
	export interface EmergencyContact {

		/** 1st address line. */
		address1?: string | null;

		/** 2nd address line. */
		address2?: string | null;

		/** City. */
		city?: string | null;

		/** County. */
		country?: string | null;

		/** Country.  Must be a valid 3 character country code.  Common values are *USA* (United States), *CAN* (Canada). */
		county?: string | null;

		/** Contact email.  Must be valid email address format. */
		email?: string | null;

		/**
		 * Required. Contact first name. <br  />Max length: 40
		 * Required
		 */
		firstName: string;

		/** Contact Home Phone.  Valid phone format  *(###) #######* or *######-####* or *### ### ####* or *##########* or, if international, starts with *+#*, only spaces and digits allowed. */
		homePhone?: string | null;

		/**
		 * Required. Contact last name. <br  />Max length: 40
		 * Required
		 */
		lastName: string;

		/** Contact Mobile Phone.  Valid phone format  *(###) #######* or *######-####* or *### ### ####* or *##########* or, if international, starts with *+#*, only spaces and digits allowed. */
		mobilePhone?: string | null;

		/** Notes. <br  />Max length: 1000 */
		notes?: string | null;

		/** Contact Pager.  Valid phone format  *(###) #######* or *######-####* or *### ### ####* or *##########* or, if international, starts with *+#*, only spaces and digits allowed. */
		pager?: string | null;

		/** Required. Contact primary phone type.  Must match Company setup.  Valid  values are H (Home), M (Mobile), P (Pager), W (Work) */
		primaryPhone?: string | null;

		/** Required. Contact priority. Valid values are *P* (Primary) or *S* (Secondary). */
		priority?: string | null;

		/** Required. Contact relationship.  Must match Company setup.  Common values are Spouse, Mother, Father. */
		relationship?: string | null;

		/** State or Province.  If U.S. address, must be valid 2 character state code.  Common values are *IL* (Illinois), *CA* (California). */
		state?: string | null;

		/** Valid values are *true* or *false*. */
		syncEmployeeInfo?: boolean | null;

		/** Work Extension. */
		workExtension?: string | null;

		/** Contact Work Phone.  Valid phone format  *(###) #######* or *######-####* or *### ### ####* or *##########* or, if international, starts with *+#*, only spaces and digits allowed. */
		workPhone?: string | null;

		/** Postal code.  If U.S. address, must be a valid zip code. */
		zip?: string | null;
	}

	/** The emergency contact model */
	export interface EmergencyContactFormProperties {

		/** 1st address line. */
		address1: FormControl<string | null | undefined>,

		/** 2nd address line. */
		address2: FormControl<string | null | undefined>,

		/** City. */
		city: FormControl<string | null | undefined>,

		/** County. */
		country: FormControl<string | null | undefined>,

		/** Country.  Must be a valid 3 character country code.  Common values are *USA* (United States), *CAN* (Canada). */
		county: FormControl<string | null | undefined>,

		/** Contact email.  Must be valid email address format. */
		email: FormControl<string | null | undefined>,

		/**
		 * Required. Contact first name. <br  />Max length: 40
		 * Required
		 */
		firstName: FormControl<string | null | undefined>,

		/** Contact Home Phone.  Valid phone format  *(###) #######* or *######-####* or *### ### ####* or *##########* or, if international, starts with *+#*, only spaces and digits allowed. */
		homePhone: FormControl<string | null | undefined>,

		/**
		 * Required. Contact last name. <br  />Max length: 40
		 * Required
		 */
		lastName: FormControl<string | null | undefined>,

		/** Contact Mobile Phone.  Valid phone format  *(###) #######* or *######-####* or *### ### ####* or *##########* or, if international, starts with *+#*, only spaces and digits allowed. */
		mobilePhone: FormControl<string | null | undefined>,

		/** Notes. <br  />Max length: 1000 */
		notes: FormControl<string | null | undefined>,

		/** Contact Pager.  Valid phone format  *(###) #######* or *######-####* or *### ### ####* or *##########* or, if international, starts with *+#*, only spaces and digits allowed. */
		pager: FormControl<string | null | undefined>,

		/** Required. Contact primary phone type.  Must match Company setup.  Valid  values are H (Home), M (Mobile), P (Pager), W (Work) */
		primaryPhone: FormControl<string | null | undefined>,

		/** Required. Contact priority. Valid values are *P* (Primary) or *S* (Secondary). */
		priority: FormControl<string | null | undefined>,

		/** Required. Contact relationship.  Must match Company setup.  Common values are Spouse, Mother, Father. */
		relationship: FormControl<string | null | undefined>,

		/** State or Province.  If U.S. address, must be valid 2 character state code.  Common values are *IL* (Illinois), *CA* (California). */
		state: FormControl<string | null | undefined>,

		/** Valid values are *true* or *false*. */
		syncEmployeeInfo: FormControl<boolean | null | undefined>,

		/** Work Extension. */
		workExtension: FormControl<string | null | undefined>,

		/** Contact Work Phone.  Valid phone format  *(###) #######* or *######-####* or *### ### ####* or *##########* or, if international, starts with *+#*, only spaces and digits allowed. */
		workPhone: FormControl<string | null | undefined>,

		/** Postal code.  If U.S. address, must be a valid zip code. */
		zip: FormControl<string | null | undefined>,
	}
	export function CreateEmergencyContactFormGroup() {
		return new FormGroup<EmergencyContactFormProperties>({
			address1: new FormControl<string | null | undefined>(undefined),
			address2: new FormControl<string | null | undefined>(undefined),
			city: new FormControl<string | null | undefined>(undefined),
			country: new FormControl<string | null | undefined>(undefined),
			county: new FormControl<string | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
			firstName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			homePhone: new FormControl<string | null | undefined>(undefined),
			lastName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			mobilePhone: new FormControl<string | null | undefined>(undefined),
			notes: new FormControl<string | null | undefined>(undefined),
			pager: new FormControl<string | null | undefined>(undefined),
			primaryPhone: new FormControl<string | null | undefined>(undefined),
			priority: new FormControl<string | null | undefined>(undefined),
			relationship: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<string | null | undefined>(undefined),
			syncEmployeeInfo: new FormControl<boolean | null | undefined>(undefined),
			workExtension: new FormControl<string | null | undefined>(undefined),
			workPhone: new FormControl<string | null | undefined>(undefined),
			zip: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The employee model */
	export interface Employee {

		/**
		 * Add up to 19 direct deposit accounts in addition to the main direct deposit account. IMPORTANT: A direct deposit update will remove ALL existing main and additional direct deposit information in WebPay and replace with information provided on the request. GET API will not return direct deposit data.
		 * Maximum items: 19
		 */
		EmployeeAdditionalDirectDeposit?: Array<EmployeeAdditionalDirectDeposit>;

		/** Add Additional Rates. */
		EmployeeAdditionalRate?: Array<EmployeeAdditionalRate>;

		/** Add or update setup values used for employee benefits integration, insurance plan settings, and ACA reporting. */
		benefitSetup?: EmployeeBenefitSetup;

		/** Employee birthdate. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*. */
		birthDate?: string | null;

		/** Unique idenifier for SSO.<br  />Max length: 20 */
		coEmpCode?: string | null;

		/** Company FEIN as defined in Web Pay, applicable with GET requests only.<br  /> Max length: 20 */
		companyFEIN?: string | null;

		/** Company name as defined in Web Pay, applicable with GET requests only.<br  /> Max length: 50 */
		companyName?: string | null;

		/** Employee is paid in this currency. <br  />Max length: 30 */
		currency?: string | null;

		/**
		 * Up to 8 custom fields of boolean (checkbox) type value.
		 * Maximum items: 8
		 */
		EmployeeCustomBooleanFields?: Array<EmployeeCustomBooleanFields>;

		/**
		 * Up to 8 custom fields of the date type value.
		 * Maximum items: 8
		 */
		EmployeeCustomDateFields?: Array<EmployeeCustomDateFields>;

		/**
		 * Up to 8 custom fields of the dropdown type value.
		 * Maximum items: 8
		 */
		EmployeeCustomDropDownFields?: Array<EmployeeCustomDropDownFields>;

		/**
		 * Up to 8 custom fields of numeric type value.
		 * Maximum items: 8
		 */
		EmployeeCustomNumberFields?: Array<EmployeeCustomNumberFields>;

		/**
		 * Up to 8 custom fields of text type value.
		 * Maximum items: 8
		 */
		EmployeeCustomTextFields?: Array<EmployeeCustomTextFields>;

		/** Add or update home department cost center, position, supervisor, reviewer, employment type, EEO class, pay settings, and union information. */
		departmentPosition?: EmployeeDepartmentPosition;

		/** Indicates if employee has disability status. */
		disabilityDescription?: string | null;

		/** Add or update Emergency Contacts. */
		EmployeeEmergencyContacts?: Array<EmployeeEmergencyContacts>;

		/** Leave blank to have Web Pay automatically assign the next available employee ID.<br  />Max length: 9 */
		employeeId?: string | null;

		/** Employee ethnicity.<br  /> Max length: 10 */
		ethnicity?: string | null;

		/** Add or update federal tax amount type (taxCalculationCode), amount or percentage, filing status, and exemptions. */
		federalTax?: EmployeeFederalTax;

		/** Employee first name. <br  />Max length: 40 */
		firstName?: string | null;

		/** Employee gender. Common values *M* (Male), *F* (Female). <br  />Max length: 1 */
		gender?: string | null;

		/** Add or update employee's home address, personal phone numbers, and personal email. */
		homeAddress?: EmployeeHomeAddress;

		/** Indicates if employee meets the highly compensated employee criteria. */
		isHighlyCompensated?: boolean | null;

		/** Indicates if employee is a smoker. */
		isSmoker?: boolean | null;

		/** Employee last name. <br  />Max length: 40 */
		lastName?: string | null;

		/**
		 * Add, update, or delete local tax code, filing status, and exemptions including  PA-PSD taxes.
		 * Maximum items: 5
		 */
		EmployeeLocalTax?: Array<EmployeeLocalTax>;

		/** Add the main direct deposit account. After deposits are made to any additional direct deposit accounts, the remaining net check is deposited in the main direct deposit account. IMPORTANT: A direct deposit update will remove ALL existing main and additional direct deposit information in WebPay and replace with what is provided on the request. GET API will not return direct deposit data. */
		mainDirectDeposit?: EmployeeMainDirectDeposit;

		/** Employee marital status. Common values *D (Divorced), M (Married), S (Single), W (Widowed)*. <br  />Max length: 10 */
		maritalStatus?: string | null;

		/** Employee middle name.<br  /> Max length: 20 */
		middleName?: string | null;

		/** Add or update non-primary state tax code, amount type (taxCalculationCode), amount or percentage, filing status, exemptions, supplemental check (specialCheckCalc), and reciprocity code information. */
		nonPrimaryStateTax?: EmployeeNonPrimaryStateTax;

		/**
		 * Percentage of employee's ownership in the company, entered as a whole number. <br  /> Decimal (12,2)
		 * Type: double
		 */
		ownerPercent?: number | null;

		/** Employee preferred display name.<br  /> Max length: 20 */
		preferredName?: string | null;

		/** Add or update hourly or salary pay rate, effective date, and pay frequency. */
		primaryPayRate?: EmployeePrimaryPayRate;

		/** Add or update primary state tax code, amount type (taxCalculationCode), amount or percentage, filing status, exemptions, and supplemental check (specialCheckCalc) information. Only one primary state is allowed. Sending an updated primary state will replace the current primary state. */
		primaryStateTax?: EmployeePrimaryStateTax;

		/** Prior last name if applicable.<br  />Max length: 40 */
		priorLastName?: string | null;

		/** Employee preferred salutation. <br  />Max length: 10 */
		salutation?: string | null;

		/** Employee social security number. Leave it blank if valid social security number not available. <br  />Max length: 11 */
		ssn?: string | null;

		/** Add or update employee status, change reason, effective date, and adjusted seniority date. Note that companies that are still in Implementation cannot hire future employees. */
		status?: EmployeeStatus;

		/** Employee name suffix. Common values are *Jr, Sr, II*.<br  />Max length: 30 */
		suffix?: string | null;

		/** Add tax form, 1099 exempt reasons and notes, and 943 agricultural employee information. Once the employee receives wages, this information cannot be updated. Add or update SUI tax state, retirement plan, and statutory information. */
		taxSetup?: EmployeeTaxSetup;

		/** Indicates if employee is a veteran. */
		veteranDescription?: string | null;

		/** Add or update Web Time badge number and charge rate and synchronize Web Pay and Web Time employee data. */
		webTime?: EmployeeWebTime;

		/** Add or update employee's work address, phone numbers, and email. Work Location drop down field is not included. */
		workAddress?: EmployeeWorkAddress;

		/** Add or update I-9 work authorization information. */
		workEligibility?: EmployeeWorkEligibility;
	}

	/** The employee model */
	export interface EmployeeFormProperties {

		/** Employee birthdate. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*. */
		birthDate: FormControl<string | null | undefined>,

		/** Unique idenifier for SSO.<br  />Max length: 20 */
		coEmpCode: FormControl<string | null | undefined>,

		/** Company FEIN as defined in Web Pay, applicable with GET requests only.<br  /> Max length: 20 */
		companyFEIN: FormControl<string | null | undefined>,

		/** Company name as defined in Web Pay, applicable with GET requests only.<br  /> Max length: 50 */
		companyName: FormControl<string | null | undefined>,

		/** Employee is paid in this currency. <br  />Max length: 30 */
		currency: FormControl<string | null | undefined>,

		/** Indicates if employee has disability status. */
		disabilityDescription: FormControl<string | null | undefined>,

		/** Leave blank to have Web Pay automatically assign the next available employee ID.<br  />Max length: 9 */
		employeeId: FormControl<string | null | undefined>,

		/** Employee ethnicity.<br  /> Max length: 10 */
		ethnicity: FormControl<string | null | undefined>,

		/** Employee first name. <br  />Max length: 40 */
		firstName: FormControl<string | null | undefined>,

		/** Employee gender. Common values *M* (Male), *F* (Female). <br  />Max length: 1 */
		gender: FormControl<string | null | undefined>,

		/** Indicates if employee meets the highly compensated employee criteria. */
		isHighlyCompensated: FormControl<boolean | null | undefined>,

		/** Indicates if employee is a smoker. */
		isSmoker: FormControl<boolean | null | undefined>,

		/** Employee last name. <br  />Max length: 40 */
		lastName: FormControl<string | null | undefined>,

		/** Employee marital status. Common values *D (Divorced), M (Married), S (Single), W (Widowed)*. <br  />Max length: 10 */
		maritalStatus: FormControl<string | null | undefined>,

		/** Employee middle name.<br  /> Max length: 20 */
		middleName: FormControl<string | null | undefined>,

		/**
		 * Percentage of employee's ownership in the company, entered as a whole number. <br  /> Decimal (12,2)
		 * Type: double
		 */
		ownerPercent: FormControl<number | null | undefined>,

		/** Employee preferred display name.<br  /> Max length: 20 */
		preferredName: FormControl<string | null | undefined>,

		/** Prior last name if applicable.<br  />Max length: 40 */
		priorLastName: FormControl<string | null | undefined>,

		/** Employee preferred salutation. <br  />Max length: 10 */
		salutation: FormControl<string | null | undefined>,

		/** Employee social security number. Leave it blank if valid social security number not available. <br  />Max length: 11 */
		ssn: FormControl<string | null | undefined>,

		/** Employee name suffix. Common values are *Jr, Sr, II*.<br  />Max length: 30 */
		suffix: FormControl<string | null | undefined>,

		/** Indicates if employee is a veteran. */
		veteranDescription: FormControl<string | null | undefined>,
	}
	export function CreateEmployeeFormGroup() {
		return new FormGroup<EmployeeFormProperties>({
			birthDate: new FormControl<string | null | undefined>(undefined),
			coEmpCode: new FormControl<string | null | undefined>(undefined),
			companyFEIN: new FormControl<string | null | undefined>(undefined),
			companyName: new FormControl<string | null | undefined>(undefined),
			currency: new FormControl<string | null | undefined>(undefined),
			disabilityDescription: new FormControl<string | null | undefined>(undefined),
			employeeId: new FormControl<string | null | undefined>(undefined),
			ethnicity: new FormControl<string | null | undefined>(undefined),
			firstName: new FormControl<string | null | undefined>(undefined),
			gender: new FormControl<string | null | undefined>(undefined),
			isHighlyCompensated: new FormControl<boolean | null | undefined>(undefined),
			isSmoker: new FormControl<boolean | null | undefined>(undefined),
			lastName: new FormControl<string | null | undefined>(undefined),
			maritalStatus: new FormControl<string | null | undefined>(undefined),
			middleName: new FormControl<string | null | undefined>(undefined),
			ownerPercent: new FormControl<number | null | undefined>(undefined),
			preferredName: new FormControl<string | null | undefined>(undefined),
			priorLastName: new FormControl<string | null | undefined>(undefined),
			salutation: new FormControl<string | null | undefined>(undefined),
			ssn: new FormControl<string | null | undefined>(undefined),
			suffix: new FormControl<string | null | undefined>(undefined),
			veteranDescription: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface EmployeeAdditionalDirectDeposit {

		/** Account number, entered without special characters and spaces. <br  />Max length: 17<br /> */
		accountNumber?: string | null;

		/** Account type. Valid values are *C* (Checking), *S* (Saving), *P* (Pay Card). <br   />Max length: 1<br /> */
		accountType?: string | null;

		/**
		 * Amount value to be deposited to the account.<br  />Decimal (12,2)<br />
		 * Type: double
		 */
		amount?: number | null;

		/** Amount type to indicate the context of the amount. Common values are *F* (FLAT), *F-* (Net Minus), *P* (Percent). <br  /> Max length: 5<br /> */
		amountType?: string | null;

		/** Indicates if direct deposit should be blocked when special check types such as Bonus are processed.<br /> */
		blockSpecial?: boolean | null;

		/** Indicates if account will not pre-note.<br /> */
		isSkipPreNote?: boolean | null;

		/** Name on the bank account. Defaults to employee's name. <br  />Max length: 30<br /> */
		nameOnAccount?: string | null;

		/** Date to end the pre-note of the account. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*.<br /> */
		preNoteDate?: string | null;

		/** ABA Transit Routing Number, entered without dashes or spaces. <br  />Max length: 9<br /> */
		routingNumber?: string | null;
	}
	export interface EmployeeAdditionalDirectDepositFormProperties {

		/** Account number, entered without special characters and spaces. <br  />Max length: 17<br /> */
		accountNumber: FormControl<string | null | undefined>,

		/** Account type. Valid values are *C* (Checking), *S* (Saving), *P* (Pay Card). <br   />Max length: 1<br /> */
		accountType: FormControl<string | null | undefined>,

		/**
		 * Amount value to be deposited to the account.<br  />Decimal (12,2)<br />
		 * Type: double
		 */
		amount: FormControl<number | null | undefined>,

		/** Amount type to indicate the context of the amount. Common values are *F* (FLAT), *F-* (Net Minus), *P* (Percent). <br  /> Max length: 5<br /> */
		amountType: FormControl<string | null | undefined>,

		/** Indicates if direct deposit should be blocked when special check types such as Bonus are processed.<br /> */
		blockSpecial: FormControl<boolean | null | undefined>,

		/** Indicates if account will not pre-note.<br /> */
		isSkipPreNote: FormControl<boolean | null | undefined>,

		/** Name on the bank account. Defaults to employee's name. <br  />Max length: 30<br /> */
		nameOnAccount: FormControl<string | null | undefined>,

		/** Date to end the pre-note of the account. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*.<br /> */
		preNoteDate: FormControl<string | null | undefined>,

		/** ABA Transit Routing Number, entered without dashes or spaces. <br  />Max length: 9<br /> */
		routingNumber: FormControl<string | null | undefined>,
	}
	export function CreateEmployeeAdditionalDirectDepositFormGroup() {
		return new FormGroup<EmployeeAdditionalDirectDepositFormProperties>({
			accountNumber: new FormControl<string | null | undefined>(undefined),
			accountType: new FormControl<string | null | undefined>(undefined),
			amount: new FormControl<number | null | undefined>(undefined),
			amountType: new FormControl<string | null | undefined>(undefined),
			blockSpecial: new FormControl<boolean | null | undefined>(undefined),
			isSkipPreNote: new FormControl<boolean | null | undefined>(undefined),
			nameOnAccount: new FormControl<string | null | undefined>(undefined),
			preNoteDate: new FormControl<string | null | undefined>(undefined),
			routingNumber: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface EmployeeAdditionalRate {

		/** Not required. If populated, must match one of the system coded values available in the Additional Rates Change Reason drop down.<br /> */
		changeReason?: string | null;

		/** Not required. Valid values must match one of the system coded cost centers available in the Additional Rates Cost Center level 1 drop down. This cell must be in a text format.<br /> */
		costCenter1?: string | null;

		/** Not required. Valid values must match one of the system coded cost centers available in the Additional Rates Cost Center level 2 drop down. This cell must be in a text format.<br /> */
		costCenter2?: string | null;

		/** Not required. Valid values must match one of the system coded cost centers available in the Additional Rates Cost Center level 3 drop down. This cell must be in a text format.<br /> */
		costCenter3?: string | null;

		/** Required. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*.<br /> */
		effectiveDate?: string | null;

		/** Not required. Must match one of the system coded check dates available in the Additional Rates End Check Date drop down. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*.<br /> */
		endCheckDate?: string | null;

		/** Not required. If populated, must match one of the system coded values available in the Additional Rates Job drop down.<br /> */
		job?: string | null;

		/**
		 * Required. Enter dollar amount that corresponds to the Per selection.<br />
		 * Type: double
		 */
		rate?: number | null;

		/** Required. If populated, must match one of the system coded values available in the Additional Rates Rate Code drop down.<br /> */
		rateCode?: string | null;

		/** Not required.<br  />Max length: 4000<br /> */
		rateNotes?: string | null;

		/** Required. Valid values are HOUR or WEEK.<br /> */
		ratePer?: string | null;

		/** Not required. If populated, must match one of the system coded values available in the Additional Rates Shift drop down.<br /> */
		shift?: string | null;
	}
	export interface EmployeeAdditionalRateFormProperties {

		/** Not required. If populated, must match one of the system coded values available in the Additional Rates Change Reason drop down.<br /> */
		changeReason: FormControl<string | null | undefined>,

		/** Not required. Valid values must match one of the system coded cost centers available in the Additional Rates Cost Center level 1 drop down. This cell must be in a text format.<br /> */
		costCenter1: FormControl<string | null | undefined>,

		/** Not required. Valid values must match one of the system coded cost centers available in the Additional Rates Cost Center level 2 drop down. This cell must be in a text format.<br /> */
		costCenter2: FormControl<string | null | undefined>,

		/** Not required. Valid values must match one of the system coded cost centers available in the Additional Rates Cost Center level 3 drop down. This cell must be in a text format.<br /> */
		costCenter3: FormControl<string | null | undefined>,

		/** Required. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*.<br /> */
		effectiveDate: FormControl<string | null | undefined>,

		/** Not required. Must match one of the system coded check dates available in the Additional Rates End Check Date drop down. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*.<br /> */
		endCheckDate: FormControl<string | null | undefined>,

		/** Not required. If populated, must match one of the system coded values available in the Additional Rates Job drop down.<br /> */
		job: FormControl<string | null | undefined>,

		/**
		 * Required. Enter dollar amount that corresponds to the Per selection.<br />
		 * Type: double
		 */
		rate: FormControl<number | null | undefined>,

		/** Required. If populated, must match one of the system coded values available in the Additional Rates Rate Code drop down.<br /> */
		rateCode: FormControl<string | null | undefined>,

		/** Not required.<br  />Max length: 4000<br /> */
		rateNotes: FormControl<string | null | undefined>,

		/** Required. Valid values are HOUR or WEEK.<br /> */
		ratePer: FormControl<string | null | undefined>,

		/** Not required. If populated, must match one of the system coded values available in the Additional Rates Shift drop down.<br /> */
		shift: FormControl<string | null | undefined>,
	}
	export function CreateEmployeeAdditionalRateFormGroup() {
		return new FormGroup<EmployeeAdditionalRateFormProperties>({
			changeReason: new FormControl<string | null | undefined>(undefined),
			costCenter1: new FormControl<string | null | undefined>(undefined),
			costCenter2: new FormControl<string | null | undefined>(undefined),
			costCenter3: new FormControl<string | null | undefined>(undefined),
			effectiveDate: new FormControl<string | null | undefined>(undefined),
			endCheckDate: new FormControl<string | null | undefined>(undefined),
			job: new FormControl<string | null | undefined>(undefined),
			rate: new FormControl<number | null | undefined>(undefined),
			rateCode: new FormControl<string | null | undefined>(undefined),
			rateNotes: new FormControl<string | null | undefined>(undefined),
			ratePer: new FormControl<string | null | undefined>(undefined),
			shift: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface EmployeeBenefitSetup {

		/** Benefit Class code. Values are configured in Web Pay Company > Setup > Benefits > Classes.<br  />Max length: 30 */
		benefitClass?: string | null;

		/** Date when Benefit Class takes effect. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*. */
		benefitClassEffectiveDate?: string | null;

		/**
		 * Salary used to configure benefits.<br  />Decimal(12,2)
		 * Type: double
		 */
		benefitSalary?: number | null;

		/** Date when Benefit Salary takes effect. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*. */
		benefitSalaryEffectiveDate?: string | null;

		/** Applicable only for HR Enhanced clients and Benefit Classes with ACA Employment Type of Full Time. */
		doNotApplyAdministrativePeriod?: boolean | null;

		/** Only valid for HR Enhanced clients and Benefit Classes that are ACA Employment Type of Full Time. */
		isMeasureAcaEligibility?: boolean | null;
	}
	export interface EmployeeBenefitSetupFormProperties {

		/** Benefit Class code. Values are configured in Web Pay Company > Setup > Benefits > Classes.<br  />Max length: 30 */
		benefitClass: FormControl<string | null | undefined>,

		/** Date when Benefit Class takes effect. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*. */
		benefitClassEffectiveDate: FormControl<string | null | undefined>,

		/**
		 * Salary used to configure benefits.<br  />Decimal(12,2)
		 * Type: double
		 */
		benefitSalary: FormControl<number | null | undefined>,

		/** Date when Benefit Salary takes effect. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*. */
		benefitSalaryEffectiveDate: FormControl<string | null | undefined>,

		/** Applicable only for HR Enhanced clients and Benefit Classes with ACA Employment Type of Full Time. */
		doNotApplyAdministrativePeriod: FormControl<boolean | null | undefined>,

		/** Only valid for HR Enhanced clients and Benefit Classes that are ACA Employment Type of Full Time. */
		isMeasureAcaEligibility: FormControl<boolean | null | undefined>,
	}
	export function CreateEmployeeBenefitSetupFormGroup() {
		return new FormGroup<EmployeeBenefitSetupFormProperties>({
			benefitClass: new FormControl<string | null | undefined>(undefined),
			benefitClassEffectiveDate: new FormControl<string | null | undefined>(undefined),
			benefitSalary: new FormControl<number | null | undefined>(undefined),
			benefitSalaryEffectiveDate: new FormControl<string | null | undefined>(undefined),
			doNotApplyAdministrativePeriod: new FormControl<boolean | null | undefined>(undefined),
			isMeasureAcaEligibility: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface EmployeeCustomBooleanFields {

		/**
		 * The custom field category.  Acceptable value is 'PayrollAndHR'.
		 * Required
		 */
		category: EmployeeCustomBooleanFieldsCategory;

		/**
		 * The custom field label whose value is to be added/updated. Must match to the label defined in Web Pay Custom Fields setup.  Max length: 255.
		 * Required
		 */
		label: string;

		/**
		 * The custom boolean field value.
		 * Required
		 */
		value: boolean;
	}
	export interface EmployeeCustomBooleanFieldsFormProperties {

		/**
		 * The custom field category.  Acceptable value is 'PayrollAndHR'.
		 * Required
		 */
		category: FormControl<EmployeeCustomBooleanFieldsCategory | null | undefined>,

		/**
		 * The custom field label whose value is to be added/updated. Must match to the label defined in Web Pay Custom Fields setup.  Max length: 255.
		 * Required
		 */
		label: FormControl<string | null | undefined>,

		/**
		 * The custom boolean field value.
		 * Required
		 */
		value: FormControl<boolean | null | undefined>,
	}
	export function CreateEmployeeCustomBooleanFieldsFormGroup() {
		return new FormGroup<EmployeeCustomBooleanFieldsFormProperties>({
			category: new FormControl<EmployeeCustomBooleanFieldsCategory | null | undefined>(undefined, [Validators.required]),
			label: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum EmployeeCustomBooleanFieldsCategory { PayrollAndHR = 'PayrollAndHR' }

	export interface EmployeeCustomDateFields {

		/**
		 * The custom field category.  Acceptable value is 'PayrollAndHR'.
		 * Required
		 */
		category: EmployeeCustomBooleanFieldsCategory;

		/**
		 * The custom field label whose value is to be added/updated.  Must match to the label defined in Web Pay Custom Fields setup.  Max length: 255.
		 * Required
		 */
		label: string;

		/**
		 * The custom date field value.  Common formats include MM-DD-CCYY, CCYY-MM-DD.
		 * Required
		 */
		value: string;
	}
	export interface EmployeeCustomDateFieldsFormProperties {

		/**
		 * The custom field category.  Acceptable value is 'PayrollAndHR'.
		 * Required
		 */
		category: FormControl<EmployeeCustomBooleanFieldsCategory | null | undefined>,

		/**
		 * The custom field label whose value is to be added/updated.  Must match to the label defined in Web Pay Custom Fields setup.  Max length: 255.
		 * Required
		 */
		label: FormControl<string | null | undefined>,

		/**
		 * The custom date field value.  Common formats include MM-DD-CCYY, CCYY-MM-DD.
		 * Required
		 */
		value: FormControl<string | null | undefined>,
	}
	export function CreateEmployeeCustomDateFieldsFormGroup() {
		return new FormGroup<EmployeeCustomDateFieldsFormProperties>({
			category: new FormControl<EmployeeCustomBooleanFieldsCategory | null | undefined>(undefined, [Validators.required]),
			label: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface EmployeeCustomDropDownFields {

		/**
		 * The custom field category.  Acceptable value is 'PayrollAndHR'.
		 * Required
		 */
		category: EmployeeCustomBooleanFieldsCategory;

		/**
		 * The custom field label whose value is to be added/updated.  Must match to the label defined in Web Pay Custom Fields setup.  Max length: 255.
		 * Required
		 */
		label: string;

		/**
		 * The custom dropdown field value.  Values are configured in Web Pay Company > Setup > List Values > Lookup Values > Custom Fields: PayrollAndHR.  Max length: 10.
		 * Required
		 */
		value: string;
	}
	export interface EmployeeCustomDropDownFieldsFormProperties {

		/**
		 * The custom field category.  Acceptable value is 'PayrollAndHR'.
		 * Required
		 */
		category: FormControl<EmployeeCustomBooleanFieldsCategory | null | undefined>,

		/**
		 * The custom field label whose value is to be added/updated.  Must match to the label defined in Web Pay Custom Fields setup.  Max length: 255.
		 * Required
		 */
		label: FormControl<string | null | undefined>,

		/**
		 * The custom dropdown field value.  Values are configured in Web Pay Company > Setup > List Values > Lookup Values > Custom Fields: PayrollAndHR.  Max length: 10.
		 * Required
		 */
		value: FormControl<string | null | undefined>,
	}
	export function CreateEmployeeCustomDropDownFieldsFormGroup() {
		return new FormGroup<EmployeeCustomDropDownFieldsFormProperties>({
			category: new FormControl<EmployeeCustomBooleanFieldsCategory | null | undefined>(undefined, [Validators.required]),
			label: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface EmployeeCustomNumberFields {

		/**
		 * The custom field category.  Acceptable value is 'PayrollAndHR'.
		 * Required
		 */
		category: EmployeeCustomBooleanFieldsCategory;

		/**
		 * The custom field label whose value is to be added/updated.  Must match to the label defined in Web Pay Custom Fields setup.  Max length: 255.
		 * Required
		 */
		label: string;

		/**
		 * The custom number field value.  Decimal (18,6).
		 * Required
		 * Type: double
		 */
		value: number;
	}
	export interface EmployeeCustomNumberFieldsFormProperties {

		/**
		 * The custom field category.  Acceptable value is 'PayrollAndHR'.
		 * Required
		 */
		category: FormControl<EmployeeCustomBooleanFieldsCategory | null | undefined>,

		/**
		 * The custom field label whose value is to be added/updated.  Must match to the label defined in Web Pay Custom Fields setup.  Max length: 255.
		 * Required
		 */
		label: FormControl<string | null | undefined>,

		/**
		 * The custom number field value.  Decimal (18,6).
		 * Required
		 * Type: double
		 */
		value: FormControl<number | null | undefined>,
	}
	export function CreateEmployeeCustomNumberFieldsFormGroup() {
		return new FormGroup<EmployeeCustomNumberFieldsFormProperties>({
			category: new FormControl<EmployeeCustomBooleanFieldsCategory | null | undefined>(undefined, [Validators.required]),
			label: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface EmployeeCustomTextFields {

		/**
		 * The custom field category.  Acceptable value is 'PayrollAndHR'.
		 * Required
		 */
		category: EmployeeCustomBooleanFieldsCategory;

		/**
		 * The custom field label whose value is to be added/updated.  Must match to the label defined in Web Pay Custom Fields setup.  Max length: 255.
		 * Required
		 */
		label: string;

		/**
		 * The custom text field value.  Max length: 255.
		 * Required
		 */
		value: string;
	}
	export interface EmployeeCustomTextFieldsFormProperties {

		/**
		 * The custom field category.  Acceptable value is 'PayrollAndHR'.
		 * Required
		 */
		category: FormControl<EmployeeCustomBooleanFieldsCategory | null | undefined>,

		/**
		 * The custom field label whose value is to be added/updated.  Must match to the label defined in Web Pay Custom Fields setup.  Max length: 255.
		 * Required
		 */
		label: FormControl<string | null | undefined>,

		/**
		 * The custom text field value.  Max length: 255.
		 * Required
		 */
		value: FormControl<string | null | undefined>,
	}
	export function CreateEmployeeCustomTextFieldsFormGroup() {
		return new FormGroup<EmployeeCustomTextFieldsFormProperties>({
			category: new FormControl<EmployeeCustomBooleanFieldsCategory | null | undefined>(undefined, [Validators.required]),
			label: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface EmployeeDepartmentPosition {

		/** Employee department/position change reason. Must match Company setup. <br  />Max length: 15 */
		changeReason?: string | null;

		/** Employee clock badge number. Defaults to employeeId. <br  />Max length: 10 */
		clockBadgeNumber?: string | null;

		/** Employer defined location, like *branch, division, department*, etc. Must match Company setup. <br  />Max length: 10 */
		costCenter1?: string | null;

		/** Employer defined location, like *branch, division, department*, etc. Must match Company setup. <br  />Max length: 10 */
		costCenter2?: string | null;

		/** Employer defined location, like *branch, division, department*, etc. Must match Company setup. <br  />Max length: 10 */
		costCenter3?: string | null;

		/** The date the position takes effect. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*. */
		effectiveDate?: string | null;

		/** Employee current employment type. Common values *RFT (Regular Full Time), RPT (Regular Part Time), SNL (Seasonal), TFT (Temporary Full Time), TPT (Temporary Part Time)*. <br  />Max length: 10 */
		employeeType?: string | null;

		/** Values are configured in Company > Setup > HR > EEO Classes.<br  /> Max length: 10 */
		equalEmploymentOpportunityClass?: string | null;

		/** Indicates if employee is exempt from minimum wage. */
		isMinimumWageExempt?: boolean | null;

		/** Indicates if employee is exempt from overtime. */
		isOvertimeExempt?: boolean | null;

		/** Indicates if employee is a supervisor or reviewer. */
		isSupervisorReviewer?: boolean | null;

		/** Indicates if union dues are collected. */
		isUnionDuesCollected?: boolean | null;

		/** Indicates if initiations fees are collected. */
		isUnionInitiationCollected?: boolean | null;

		/** Employee current job title. <br  />Max length: 50 */
		jobTitle?: string | null;

		/** Employee pay group. Must match Company setup. <br  /> Max length: 20 */
		payGroup?: string | null;

		/** Employee position code. Must match Company setup.<br  />Max length: 20 */
		positionCode?: string | null;

		/** Company number of reviewer.<br />Max length: 9 */
		reviewerCompanyNumber?: string | null;

		/** Employee id of the reviewer.<br />Max length: 10 */
		reviewerEmployeeId?: string | null;

		/** Employee work shift.<br  />Max length: 255 */
		shift?: string | null;

		/** Supervisor's company number. Defaults to employee company number.<br  />Max length: 9 */
		supervisorCompanyNumber?: string | null;

		/** EmployeeId of the supervisor. <br  />Max length: 10 */
		supervisorEmployeeId?: string | null;

		/** Indicates if employee receives tips. */
		tipped?: string | null;

		/** Employee union affiliation effective date. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*. */
		unionAffiliationDate?: string | null;

		/** Employee union code. Must match Company setup. <br  />Max length: 10 */
		unionCode?: string | null;

		/** Employee union position. Must match Company setup. <br  />Max length: 30 */
		unionPosition?: string | null;

		/** Employee worker compensation code. Must match Company setup.<br  /> Max length: 10 */
		workersCompensation?: string | null;
	}
	export interface EmployeeDepartmentPositionFormProperties {

		/** Employee department/position change reason. Must match Company setup. <br  />Max length: 15 */
		changeReason: FormControl<string | null | undefined>,

		/** Employee clock badge number. Defaults to employeeId. <br  />Max length: 10 */
		clockBadgeNumber: FormControl<string | null | undefined>,

		/** Employer defined location, like *branch, division, department*, etc. Must match Company setup. <br  />Max length: 10 */
		costCenter1: FormControl<string | null | undefined>,

		/** Employer defined location, like *branch, division, department*, etc. Must match Company setup. <br  />Max length: 10 */
		costCenter2: FormControl<string | null | undefined>,

		/** Employer defined location, like *branch, division, department*, etc. Must match Company setup. <br  />Max length: 10 */
		costCenter3: FormControl<string | null | undefined>,

		/** The date the position takes effect. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*. */
		effectiveDate: FormControl<string | null | undefined>,

		/** Employee current employment type. Common values *RFT (Regular Full Time), RPT (Regular Part Time), SNL (Seasonal), TFT (Temporary Full Time), TPT (Temporary Part Time)*. <br  />Max length: 10 */
		employeeType: FormControl<string | null | undefined>,

		/** Values are configured in Company > Setup > HR > EEO Classes.<br  /> Max length: 10 */
		equalEmploymentOpportunityClass: FormControl<string | null | undefined>,

		/** Indicates if employee is exempt from minimum wage. */
		isMinimumWageExempt: FormControl<boolean | null | undefined>,

		/** Indicates if employee is exempt from overtime. */
		isOvertimeExempt: FormControl<boolean | null | undefined>,

		/** Indicates if employee is a supervisor or reviewer. */
		isSupervisorReviewer: FormControl<boolean | null | undefined>,

		/** Indicates if union dues are collected. */
		isUnionDuesCollected: FormControl<boolean | null | undefined>,

		/** Indicates if initiations fees are collected. */
		isUnionInitiationCollected: FormControl<boolean | null | undefined>,

		/** Employee current job title. <br  />Max length: 50 */
		jobTitle: FormControl<string | null | undefined>,

		/** Employee pay group. Must match Company setup. <br  /> Max length: 20 */
		payGroup: FormControl<string | null | undefined>,

		/** Employee position code. Must match Company setup.<br  />Max length: 20 */
		positionCode: FormControl<string | null | undefined>,

		/** Company number of reviewer.<br />Max length: 9 */
		reviewerCompanyNumber: FormControl<string | null | undefined>,

		/** Employee id of the reviewer.<br />Max length: 10 */
		reviewerEmployeeId: FormControl<string | null | undefined>,

		/** Employee work shift.<br  />Max length: 255 */
		shift: FormControl<string | null | undefined>,

		/** Supervisor's company number. Defaults to employee company number.<br  />Max length: 9 */
		supervisorCompanyNumber: FormControl<string | null | undefined>,

		/** EmployeeId of the supervisor. <br  />Max length: 10 */
		supervisorEmployeeId: FormControl<string | null | undefined>,

		/** Indicates if employee receives tips. */
		tipped: FormControl<string | null | undefined>,

		/** Employee union affiliation effective date. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*. */
		unionAffiliationDate: FormControl<string | null | undefined>,

		/** Employee union code. Must match Company setup. <br  />Max length: 10 */
		unionCode: FormControl<string | null | undefined>,

		/** Employee union position. Must match Company setup. <br  />Max length: 30 */
		unionPosition: FormControl<string | null | undefined>,

		/** Employee worker compensation code. Must match Company setup.<br  /> Max length: 10 */
		workersCompensation: FormControl<string | null | undefined>,
	}
	export function CreateEmployeeDepartmentPositionFormGroup() {
		return new FormGroup<EmployeeDepartmentPositionFormProperties>({
			changeReason: new FormControl<string | null | undefined>(undefined),
			clockBadgeNumber: new FormControl<string | null | undefined>(undefined),
			costCenter1: new FormControl<string | null | undefined>(undefined),
			costCenter2: new FormControl<string | null | undefined>(undefined),
			costCenter3: new FormControl<string | null | undefined>(undefined),
			effectiveDate: new FormControl<string | null | undefined>(undefined),
			employeeType: new FormControl<string | null | undefined>(undefined),
			equalEmploymentOpportunityClass: new FormControl<string | null | undefined>(undefined),
			isMinimumWageExempt: new FormControl<boolean | null | undefined>(undefined),
			isOvertimeExempt: new FormControl<boolean | null | undefined>(undefined),
			isSupervisorReviewer: new FormControl<boolean | null | undefined>(undefined),
			isUnionDuesCollected: new FormControl<boolean | null | undefined>(undefined),
			isUnionInitiationCollected: new FormControl<boolean | null | undefined>(undefined),
			jobTitle: new FormControl<string | null | undefined>(undefined),
			payGroup: new FormControl<string | null | undefined>(undefined),
			positionCode: new FormControl<string | null | undefined>(undefined),
			reviewerCompanyNumber: new FormControl<string | null | undefined>(undefined),
			reviewerEmployeeId: new FormControl<string | null | undefined>(undefined),
			shift: new FormControl<string | null | undefined>(undefined),
			supervisorCompanyNumber: new FormControl<string | null | undefined>(undefined),
			supervisorEmployeeId: new FormControl<string | null | undefined>(undefined),
			tipped: new FormControl<string | null | undefined>(undefined),
			unionAffiliationDate: new FormControl<string | null | undefined>(undefined),
			unionCode: new FormControl<string | null | undefined>(undefined),
			unionPosition: new FormControl<string | null | undefined>(undefined),
			workersCompensation: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface EmployeeEmergencyContacts {

		/** 1st address line. */
		address1?: string | null;

		/** 2nd address line. */
		address2?: string | null;

		/** City. */
		city?: string | null;

		/** County. */
		country?: string | null;

		/** Country.  Must be a valid 3 character country code.  Common values are *USA* (United States), *CAN* (Canada). */
		county?: string | null;

		/** Contact email.  Must be valid email address format. */
		email?: string | null;

		/**
		 * Required. Contact first name. <br  />Max length: 40
		 * Required
		 */
		firstName: string;

		/** Contact Home Phone.  Valid phone format  *(###) #######* or *######-####* or *### ### ####* or *##########* or, if international, starts with *+#*, only spaces and digits allowed. */
		homePhone?: string | null;

		/**
		 * Required. Contact last name. <br  />Max length: 40
		 * Required
		 */
		lastName: string;

		/** Contact Mobile Phone.  Valid phone format  *(###) #######* or *######-####* or *### ### ####* or *##########* or, if international, starts with *+#*, only spaces and digits allowed. */
		mobilePhone?: string | null;

		/** Notes. <br  />Max length: 1000 */
		notes?: string | null;

		/** Contact Pager.  Valid phone format  *(###) #######* or *######-####* or *### ### ####* or *##########* or, if international, starts with *+#*, only spaces and digits allowed. */
		pager?: string | null;

		/** Required. Contact primary phone type.  Must match Company setup.  Valid  values are H (Home), M (Mobile), P (Pager), W (Work) */
		primaryPhone?: string | null;

		/** Required. Contact priority. Valid values are *P* (Primary) or *S* (Secondary). */
		priority?: string | null;

		/** Required. Contact relationship.  Must match Company setup.  Common values are Spouse, Mother, Father. */
		relationship?: string | null;

		/** State or Province.  If U.S. address, must be valid 2 character state code.  Common values are *IL* (Illinois), *CA* (California). */
		state?: string | null;

		/** Valid values are *true* or *false*. */
		syncEmployeeInfo?: boolean | null;

		/** Work Extension. */
		workExtension?: string | null;

		/** Contact Work Phone.  Valid phone format  *(###) #######* or *######-####* or *### ### ####* or *##########* or, if international, starts with *+#*, only spaces and digits allowed. */
		workPhone?: string | null;

		/** Postal code.  If U.S. address, must be a valid zip code. */
		zip?: string | null;
	}
	export interface EmployeeEmergencyContactsFormProperties {

		/** 1st address line. */
		address1: FormControl<string | null | undefined>,

		/** 2nd address line. */
		address2: FormControl<string | null | undefined>,

		/** City. */
		city: FormControl<string | null | undefined>,

		/** County. */
		country: FormControl<string | null | undefined>,

		/** Country.  Must be a valid 3 character country code.  Common values are *USA* (United States), *CAN* (Canada). */
		county: FormControl<string | null | undefined>,

		/** Contact email.  Must be valid email address format. */
		email: FormControl<string | null | undefined>,

		/**
		 * Required. Contact first name. <br  />Max length: 40
		 * Required
		 */
		firstName: FormControl<string | null | undefined>,

		/** Contact Home Phone.  Valid phone format  *(###) #######* or *######-####* or *### ### ####* or *##########* or, if international, starts with *+#*, only spaces and digits allowed. */
		homePhone: FormControl<string | null | undefined>,

		/**
		 * Required. Contact last name. <br  />Max length: 40
		 * Required
		 */
		lastName: FormControl<string | null | undefined>,

		/** Contact Mobile Phone.  Valid phone format  *(###) #######* or *######-####* or *### ### ####* or *##########* or, if international, starts with *+#*, only spaces and digits allowed. */
		mobilePhone: FormControl<string | null | undefined>,

		/** Notes. <br  />Max length: 1000 */
		notes: FormControl<string | null | undefined>,

		/** Contact Pager.  Valid phone format  *(###) #######* or *######-####* or *### ### ####* or *##########* or, if international, starts with *+#*, only spaces and digits allowed. */
		pager: FormControl<string | null | undefined>,

		/** Required. Contact primary phone type.  Must match Company setup.  Valid  values are H (Home), M (Mobile), P (Pager), W (Work) */
		primaryPhone: FormControl<string | null | undefined>,

		/** Required. Contact priority. Valid values are *P* (Primary) or *S* (Secondary). */
		priority: FormControl<string | null | undefined>,

		/** Required. Contact relationship.  Must match Company setup.  Common values are Spouse, Mother, Father. */
		relationship: FormControl<string | null | undefined>,

		/** State or Province.  If U.S. address, must be valid 2 character state code.  Common values are *IL* (Illinois), *CA* (California). */
		state: FormControl<string | null | undefined>,

		/** Valid values are *true* or *false*. */
		syncEmployeeInfo: FormControl<boolean | null | undefined>,

		/** Work Extension. */
		workExtension: FormControl<string | null | undefined>,

		/** Contact Work Phone.  Valid phone format  *(###) #######* or *######-####* or *### ### ####* or *##########* or, if international, starts with *+#*, only spaces and digits allowed. */
		workPhone: FormControl<string | null | undefined>,

		/** Postal code.  If U.S. address, must be a valid zip code. */
		zip: FormControl<string | null | undefined>,
	}
	export function CreateEmployeeEmergencyContactsFormGroup() {
		return new FormGroup<EmployeeEmergencyContactsFormProperties>({
			address1: new FormControl<string | null | undefined>(undefined),
			address2: new FormControl<string | null | undefined>(undefined),
			city: new FormControl<string | null | undefined>(undefined),
			country: new FormControl<string | null | undefined>(undefined),
			county: new FormControl<string | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
			firstName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			homePhone: new FormControl<string | null | undefined>(undefined),
			lastName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			mobilePhone: new FormControl<string | null | undefined>(undefined),
			notes: new FormControl<string | null | undefined>(undefined),
			pager: new FormControl<string | null | undefined>(undefined),
			primaryPhone: new FormControl<string | null | undefined>(undefined),
			priority: new FormControl<string | null | undefined>(undefined),
			relationship: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<string | null | undefined>(undefined),
			syncEmployeeInfo: new FormControl<boolean | null | undefined>(undefined),
			workExtension: new FormControl<string | null | undefined>(undefined),
			workPhone: new FormControl<string | null | undefined>(undefined),
			zip: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface EmployeeFederalTax {

		/**
		 * Tax amount. <br  />Decimal (12,2)
		 * Type: double
		 */
		amount?: number | null;

		/**
		 * Box 4(b) on form W4 (year 2020 or later): Deductions amount. <br  />Decimal (12,2)
		 * Type: double
		 */
		deductionsAmount?: number | null;

		/**
		 * Box 3 on form W4 (year 2020 or later): Total dependents amount. <br  />Decimal (12,2)
		 * Type: double
		 */
		dependentsAmount?: number | null;

		/**
		 * Federal tax exemptions value. <br  />Decimal (12,2)
		 * Type: double
		 */
		exemptions?: number | null;

		/** Employee federal filing status. Common values are *S* (Single), *M* (Married).<br  />Max length: 50 */
		filingStatus?: string | null;

		/** Box 2(c) on form W4 (year 2020 or later): Multiple Jobs or Spouse Works. <br  />Boolean */
		higherRate?: boolean | null;

		/**
		 * Box 4(a) on form W4 (year 2020 or later): Other income amount. <br  />Decimal (12,2)
		 * Type: double
		 */
		otherIncomeAmount?: number | null;

		/**
		 * Tax percentage. <br  />Decimal (12,2)
		 * Type: double
		 */
		percentage?: number | null;

		/** Tax calculation code. Common values are *F* (Flat), *P* (Percentage), *FDFP* (Flat Dollar Amount plus Fixed Percentage). <br  />Max length: 10 */
		taxCalculationCode?: string | null;

		/**
		 * The federal W4 form year <br  />Integer
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		w4FormYear?: number | null;
	}
	export interface EmployeeFederalTaxFormProperties {

		/**
		 * Tax amount. <br  />Decimal (12,2)
		 * Type: double
		 */
		amount: FormControl<number | null | undefined>,

		/**
		 * Box 4(b) on form W4 (year 2020 or later): Deductions amount. <br  />Decimal (12,2)
		 * Type: double
		 */
		deductionsAmount: FormControl<number | null | undefined>,

		/**
		 * Box 3 on form W4 (year 2020 or later): Total dependents amount. <br  />Decimal (12,2)
		 * Type: double
		 */
		dependentsAmount: FormControl<number | null | undefined>,

		/**
		 * Federal tax exemptions value. <br  />Decimal (12,2)
		 * Type: double
		 */
		exemptions: FormControl<number | null | undefined>,

		/** Employee federal filing status. Common values are *S* (Single), *M* (Married).<br  />Max length: 50 */
		filingStatus: FormControl<string | null | undefined>,

		/** Box 2(c) on form W4 (year 2020 or later): Multiple Jobs or Spouse Works. <br  />Boolean */
		higherRate: FormControl<boolean | null | undefined>,

		/**
		 * Box 4(a) on form W4 (year 2020 or later): Other income amount. <br  />Decimal (12,2)
		 * Type: double
		 */
		otherIncomeAmount: FormControl<number | null | undefined>,

		/**
		 * Tax percentage. <br  />Decimal (12,2)
		 * Type: double
		 */
		percentage: FormControl<number | null | undefined>,

		/** Tax calculation code. Common values are *F* (Flat), *P* (Percentage), *FDFP* (Flat Dollar Amount plus Fixed Percentage). <br  />Max length: 10 */
		taxCalculationCode: FormControl<string | null | undefined>,

		/**
		 * The federal W4 form year <br  />Integer
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		w4FormYear: FormControl<number | null | undefined>,
	}
	export function CreateEmployeeFederalTaxFormGroup() {
		return new FormGroup<EmployeeFederalTaxFormProperties>({
			amount: new FormControl<number | null | undefined>(undefined),
			deductionsAmount: new FormControl<number | null | undefined>(undefined),
			dependentsAmount: new FormControl<number | null | undefined>(undefined),
			exemptions: new FormControl<number | null | undefined>(undefined),
			filingStatus: new FormControl<string | null | undefined>(undefined),
			higherRate: new FormControl<boolean | null | undefined>(undefined),
			otherIncomeAmount: new FormControl<number | null | undefined>(undefined),
			percentage: new FormControl<number | null | undefined>(undefined),
			taxCalculationCode: new FormControl<string | null | undefined>(undefined),
			w4FormYear: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface EmployeeHomeAddress {

		/** 1st address line.<br  /> Max length: 40 */
		address1?: string | null;

		/** 2nd address line. <br  /> Max length: 40 */
		address2?: string | null;

		/** City.<br  /> Max length: 40 */
		city?: string | null;

		/** Country.<br  /> Max length: 30 */
		country?: string | null;

		/** County.<br  /> Max length: 30 */
		county?: string | null;

		/** Email. <br  />Max length: 50 */
		emailAddress?: string | null;

		/** Mobile phone number.<br  /> Max length: 20 */
		mobilePhone?: string | null;

		/** Phone number.<br  /> Max length: 20 */
		phone?: string | null;

		/** Postal code.<br  /> Max length: 10 */
		postalCode?: string | null;

		/** State or province.<br  /> Max length: 2 */
		state?: string | null;
	}
	export interface EmployeeHomeAddressFormProperties {

		/** 1st address line.<br  /> Max length: 40 */
		address1: FormControl<string | null | undefined>,

		/** 2nd address line. <br  /> Max length: 40 */
		address2: FormControl<string | null | undefined>,

		/** City.<br  /> Max length: 40 */
		city: FormControl<string | null | undefined>,

		/** Country.<br  /> Max length: 30 */
		country: FormControl<string | null | undefined>,

		/** County.<br  /> Max length: 30 */
		county: FormControl<string | null | undefined>,

		/** Email. <br  />Max length: 50 */
		emailAddress: FormControl<string | null | undefined>,

		/** Mobile phone number.<br  /> Max length: 20 */
		mobilePhone: FormControl<string | null | undefined>,

		/** Phone number.<br  /> Max length: 20 */
		phone: FormControl<string | null | undefined>,

		/** Postal code.<br  /> Max length: 10 */
		postalCode: FormControl<string | null | undefined>,

		/** State or province.<br  /> Max length: 2 */
		state: FormControl<string | null | undefined>,
	}
	export function CreateEmployeeHomeAddressFormGroup() {
		return new FormGroup<EmployeeHomeAddressFormProperties>({
			address1: new FormControl<string | null | undefined>(undefined),
			address2: new FormControl<string | null | undefined>(undefined),
			city: new FormControl<string | null | undefined>(undefined),
			country: new FormControl<string | null | undefined>(undefined),
			county: new FormControl<string | null | undefined>(undefined),
			emailAddress: new FormControl<string | null | undefined>(undefined),
			mobilePhone: new FormControl<string | null | undefined>(undefined),
			phone: new FormControl<string | null | undefined>(undefined),
			postalCode: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface EmployeeLocalTax {

		/**
		 * Local tax exemptions value.<br  />Decimal (12,2)
		 * Type: double
		 */
		exemptions?: number | null;

		/**
		 * Local tax exemptions 2 value.<br  />Decimal (12,2)
		 * Type: double
		 */
		exemptions2?: number | null;

		/** Employee local tax filing status. Must match specific local tax setup. <br  /> Max length: 50 */
		filingStatus?: string | null;

		/** Resident PSD (political subdivision code) applicable in PA. Must match Company setup.<br  /> Max length: 9 */
		residentPSD?: string | null;

		/** Local tax code.<br  />Max length: 50 */
		taxCode?: string | null;

		/** Work location PSD. Must match Company setup. <br  /> Max length: 9 */
		workPSD?: string | null;
	}
	export interface EmployeeLocalTaxFormProperties {

		/**
		 * Local tax exemptions value.<br  />Decimal (12,2)
		 * Type: double
		 */
		exemptions: FormControl<number | null | undefined>,

		/**
		 * Local tax exemptions 2 value.<br  />Decimal (12,2)
		 * Type: double
		 */
		exemptions2: FormControl<number | null | undefined>,

		/** Employee local tax filing status. Must match specific local tax setup. <br  /> Max length: 50 */
		filingStatus: FormControl<string | null | undefined>,

		/** Resident PSD (political subdivision code) applicable in PA. Must match Company setup.<br  /> Max length: 9 */
		residentPSD: FormControl<string | null | undefined>,

		/** Local tax code.<br  />Max length: 50 */
		taxCode: FormControl<string | null | undefined>,

		/** Work location PSD. Must match Company setup. <br  /> Max length: 9 */
		workPSD: FormControl<string | null | undefined>,
	}
	export function CreateEmployeeLocalTaxFormGroup() {
		return new FormGroup<EmployeeLocalTaxFormProperties>({
			exemptions: new FormControl<number | null | undefined>(undefined),
			exemptions2: new FormControl<number | null | undefined>(undefined),
			filingStatus: new FormControl<string | null | undefined>(undefined),
			residentPSD: new FormControl<string | null | undefined>(undefined),
			taxCode: new FormControl<string | null | undefined>(undefined),
			workPSD: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface EmployeeMainDirectDeposit {

		/** Account number, entered without special characters and spaces. <br  />Max length: 17 */
		accountNumber?: string | null;

		/** Account type. Valid values are *C* (Checking), *S* (Saving), *P* (Pay Card). <br   />Max length: 1 */
		accountType?: string | null;

		/** Indicates if direct deposit should be blocked when special check types such as Bonus are processed.<br /> */
		blockSpecial?: boolean | null;

		/** Indicates if account will not pre-note. */
		isSkipPreNote?: boolean | null;

		/** Name on the bank account. Defaults to employee's name. <br  />Max length: 30<br /> */
		nameOnAccount?: string | null;

		/** Date to end the pre-note of the account. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*. */
		preNoteDate?: string | null;

		/** ABA Transit Routing Number, entered without dashes or spaces. <br  />Max length: 9 */
		routingNumber?: string | null;
	}
	export interface EmployeeMainDirectDepositFormProperties {

		/** Account number, entered without special characters and spaces. <br  />Max length: 17 */
		accountNumber: FormControl<string | null | undefined>,

		/** Account type. Valid values are *C* (Checking), *S* (Saving), *P* (Pay Card). <br   />Max length: 1 */
		accountType: FormControl<string | null | undefined>,

		/** Indicates if direct deposit should be blocked when special check types such as Bonus are processed.<br /> */
		blockSpecial: FormControl<boolean | null | undefined>,

		/** Indicates if account will not pre-note. */
		isSkipPreNote: FormControl<boolean | null | undefined>,

		/** Name on the bank account. Defaults to employee's name. <br  />Max length: 30<br /> */
		nameOnAccount: FormControl<string | null | undefined>,

		/** Date to end the pre-note of the account. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*. */
		preNoteDate: FormControl<string | null | undefined>,

		/** ABA Transit Routing Number, entered without dashes or spaces. <br  />Max length: 9 */
		routingNumber: FormControl<string | null | undefined>,
	}
	export function CreateEmployeeMainDirectDepositFormGroup() {
		return new FormGroup<EmployeeMainDirectDepositFormProperties>({
			accountNumber: new FormControl<string | null | undefined>(undefined),
			accountType: new FormControl<string | null | undefined>(undefined),
			blockSpecial: new FormControl<boolean | null | undefined>(undefined),
			isSkipPreNote: new FormControl<boolean | null | undefined>(undefined),
			nameOnAccount: new FormControl<string | null | undefined>(undefined),
			preNoteDate: new FormControl<string | null | undefined>(undefined),
			routingNumber: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface EmployeeNonPrimaryStateTax {

		/**
		 * State tax code.<br  /> Max length: 50
		 * Type: double
		 */
		amount?: number | null;

		/**
		 * Box 4(b) on form W4 (year 2020 or later): Deductions amount. <br  />Decimal (12,2)
		 * Type: double
		 */
		deductionsAmount?: number | null;

		/**
		 * Box 3 on form W4 (year 2020 or later): Total dependents amount. <br  />Decimal (12,2)
		 * Type: double
		 */
		dependentsAmount?: number | null;

		/**
		 * State tax exemptions value.<br  />Decimal (12,2)
		 * Type: double
		 */
		exemptions?: number | null;

		/**
		 * State tax exemptions 2 value.<br  />Decimal (12,2)
		 * Type: double
		 */
		exemptions2?: number | null;

		/** Employee state tax filing status. Common values are *S* (Single), *M* (Married).<br  />Max length: 50 */
		filingStatus?: string | null;

		/** Box 2(c) on form W4 (year 2020 or later): Multiple Jobs or Spouse Works. <br  />Boolean */
		higherRate?: boolean | null;

		/**
		 * Box 4(a) on form W4 (year 2020 or later): Other income amount. <br  />Decimal (12,2)
		 * Type: double
		 */
		otherIncomeAmount?: number | null;

		/**
		 * State Tax percentage. <br  />Decimal (12,2)
		 * Type: double
		 */
		percentage?: number | null;

		/** Non-primary state tax reciprocity code.<br  /> Max length: 50 */
		reciprocityCode?: string | null;

		/** Supplemental check calculation code. Common values are *Blocked* (Taxes blocked on Supplemental checks), *Supp* (Use supplemental Tax Rate-Code). <br  />Max length: 10 */
		specialCheckCalc?: string | null;

		/** Tax calculation code. Common values are *F* (Flat), *P* (Percentage), *FDFP* (Flat Dollar Amount plus Fixed Percentage). <br  />Max length: 10 */
		taxCalculationCode?: string | null;

		/** State tax code.<br  /> Max length: 50 */
		taxCode?: string | null;

		/**
		 * The state W4 form year <br  />Integer
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		w4FormYear?: number | null;
	}
	export interface EmployeeNonPrimaryStateTaxFormProperties {

		/**
		 * State tax code.<br  /> Max length: 50
		 * Type: double
		 */
		amount: FormControl<number | null | undefined>,

		/**
		 * Box 4(b) on form W4 (year 2020 or later): Deductions amount. <br  />Decimal (12,2)
		 * Type: double
		 */
		deductionsAmount: FormControl<number | null | undefined>,

		/**
		 * Box 3 on form W4 (year 2020 or later): Total dependents amount. <br  />Decimal (12,2)
		 * Type: double
		 */
		dependentsAmount: FormControl<number | null | undefined>,

		/**
		 * State tax exemptions value.<br  />Decimal (12,2)
		 * Type: double
		 */
		exemptions: FormControl<number | null | undefined>,

		/**
		 * State tax exemptions 2 value.<br  />Decimal (12,2)
		 * Type: double
		 */
		exemptions2: FormControl<number | null | undefined>,

		/** Employee state tax filing status. Common values are *S* (Single), *M* (Married).<br  />Max length: 50 */
		filingStatus: FormControl<string | null | undefined>,

		/** Box 2(c) on form W4 (year 2020 or later): Multiple Jobs or Spouse Works. <br  />Boolean */
		higherRate: FormControl<boolean | null | undefined>,

		/**
		 * Box 4(a) on form W4 (year 2020 or later): Other income amount. <br  />Decimal (12,2)
		 * Type: double
		 */
		otherIncomeAmount: FormControl<number | null | undefined>,

		/**
		 * State Tax percentage. <br  />Decimal (12,2)
		 * Type: double
		 */
		percentage: FormControl<number | null | undefined>,

		/** Non-primary state tax reciprocity code.<br  /> Max length: 50 */
		reciprocityCode: FormControl<string | null | undefined>,

		/** Supplemental check calculation code. Common values are *Blocked* (Taxes blocked on Supplemental checks), *Supp* (Use supplemental Tax Rate-Code). <br  />Max length: 10 */
		specialCheckCalc: FormControl<string | null | undefined>,

		/** Tax calculation code. Common values are *F* (Flat), *P* (Percentage), *FDFP* (Flat Dollar Amount plus Fixed Percentage). <br  />Max length: 10 */
		taxCalculationCode: FormControl<string | null | undefined>,

		/** State tax code.<br  /> Max length: 50 */
		taxCode: FormControl<string | null | undefined>,

		/**
		 * The state W4 form year <br  />Integer
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		w4FormYear: FormControl<number | null | undefined>,
	}
	export function CreateEmployeeNonPrimaryStateTaxFormGroup() {
		return new FormGroup<EmployeeNonPrimaryStateTaxFormProperties>({
			amount: new FormControl<number | null | undefined>(undefined),
			deductionsAmount: new FormControl<number | null | undefined>(undefined),
			dependentsAmount: new FormControl<number | null | undefined>(undefined),
			exemptions: new FormControl<number | null | undefined>(undefined),
			exemptions2: new FormControl<number | null | undefined>(undefined),
			filingStatus: new FormControl<string | null | undefined>(undefined),
			higherRate: new FormControl<boolean | null | undefined>(undefined),
			otherIncomeAmount: new FormControl<number | null | undefined>(undefined),
			percentage: new FormControl<number | null | undefined>(undefined),
			reciprocityCode: new FormControl<string | null | undefined>(undefined),
			specialCheckCalc: new FormControl<string | null | undefined>(undefined),
			taxCalculationCode: new FormControl<string | null | undefined>(undefined),
			taxCode: new FormControl<string | null | undefined>(undefined),
			w4FormYear: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface EmployeePrimaryPayRate {

		/**
		 * Employee annual salary.<br />Decimal (12,6)
		 * Type: double
		 */
		annualSalary?: number | null;

		/**
		 * Employee base rate, used for Hourly employees. <br  />Decimal (12,6)
		 * Type: double
		 */
		baseRate?: number | null;

		/** The date of the first check on which the new pay rate will appear. This value is only applicable when updating an existing employee. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*. */
		beginCheckDate?: string | null;

		/** Pay rate change reason.<br  /> Max length: 30 */
		changeReason?: string | null;

		/**
		 * Employee default hours consistently worked. If autoPayType is set to D, employee will be paid hourly base rate for the defaultHours. <br  />Decimal (12,2)
		 * Type: double
		 */
		defaultHours?: number | null;

		/** The date the employee's pay rate takes effect. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*. */
		effectiveDate?: string | null;

		/** If set to *True*, employee will be paid automatically using deafultHours. */
		isAutoPay?: boolean | null;

		/** Employee current pay frequency. Common values are *A (Annual), B (Bi-Weekly), D (Daily), M (Monthly), S (Semi-Monthly), Q (Quarterly), W (Weekly)*. <br  />Max length: 5 */
		payFrequency?: string | null;

		/** Employee pay grade. Must match Company setup. <br  /> Max length: 10 */
		payGrade?: string | null;

		/** Pay rate notes regarding employee.<br  /> Max length: 250 */
		payRateNote?: string | null;

		/** Employee pay type (rate code). Valid values are *Hourly* or *Salary*. <br  />Max length: 10 */
		payType?: string | null;

		/** Employee base rate frequency used with payType Hourly. Common values are *Hour, Week*. Default is Hour. <br  />Max length: 10 */
		ratePer?: string | null;

		/**
		 * Employee gross salary per pay period used with payType Salary.<br  />Decimal (12,6)
		 * Type: double
		 */
		salary?: number | null;
	}
	export interface EmployeePrimaryPayRateFormProperties {

		/**
		 * Employee annual salary.<br />Decimal (12,6)
		 * Type: double
		 */
		annualSalary: FormControl<number | null | undefined>,

		/**
		 * Employee base rate, used for Hourly employees. <br  />Decimal (12,6)
		 * Type: double
		 */
		baseRate: FormControl<number | null | undefined>,

		/** The date of the first check on which the new pay rate will appear. This value is only applicable when updating an existing employee. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*. */
		beginCheckDate: FormControl<string | null | undefined>,

		/** Pay rate change reason.<br  /> Max length: 30 */
		changeReason: FormControl<string | null | undefined>,

		/**
		 * Employee default hours consistently worked. If autoPayType is set to D, employee will be paid hourly base rate for the defaultHours. <br  />Decimal (12,2)
		 * Type: double
		 */
		defaultHours: FormControl<number | null | undefined>,

		/** The date the employee's pay rate takes effect. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*. */
		effectiveDate: FormControl<string | null | undefined>,

		/** If set to *True*, employee will be paid automatically using deafultHours. */
		isAutoPay: FormControl<boolean | null | undefined>,

		/** Employee current pay frequency. Common values are *A (Annual), B (Bi-Weekly), D (Daily), M (Monthly), S (Semi-Monthly), Q (Quarterly), W (Weekly)*. <br  />Max length: 5 */
		payFrequency: FormControl<string | null | undefined>,

		/** Employee pay grade. Must match Company setup. <br  /> Max length: 10 */
		payGrade: FormControl<string | null | undefined>,

		/** Pay rate notes regarding employee.<br  /> Max length: 250 */
		payRateNote: FormControl<string | null | undefined>,

		/** Employee pay type (rate code). Valid values are *Hourly* or *Salary*. <br  />Max length: 10 */
		payType: FormControl<string | null | undefined>,

		/** Employee base rate frequency used with payType Hourly. Common values are *Hour, Week*. Default is Hour. <br  />Max length: 10 */
		ratePer: FormControl<string | null | undefined>,

		/**
		 * Employee gross salary per pay period used with payType Salary.<br  />Decimal (12,6)
		 * Type: double
		 */
		salary: FormControl<number | null | undefined>,
	}
	export function CreateEmployeePrimaryPayRateFormGroup() {
		return new FormGroup<EmployeePrimaryPayRateFormProperties>({
			annualSalary: new FormControl<number | null | undefined>(undefined),
			baseRate: new FormControl<number | null | undefined>(undefined),
			beginCheckDate: new FormControl<string | null | undefined>(undefined),
			changeReason: new FormControl<string | null | undefined>(undefined),
			defaultHours: new FormControl<number | null | undefined>(undefined),
			effectiveDate: new FormControl<string | null | undefined>(undefined),
			isAutoPay: new FormControl<boolean | null | undefined>(undefined),
			payFrequency: new FormControl<string | null | undefined>(undefined),
			payGrade: new FormControl<string | null | undefined>(undefined),
			payRateNote: new FormControl<string | null | undefined>(undefined),
			payType: new FormControl<string | null | undefined>(undefined),
			ratePer: new FormControl<string | null | undefined>(undefined),
			salary: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface EmployeePrimaryStateTax {

		/**
		 * State tax code.<br  /> Max length: 50
		 * Type: double
		 */
		amount?: number | null;

		/**
		 * Box 4(b) on form W4 (year 2020 or later): Deductions amount. <br  />Decimal (12,2)
		 * Type: double
		 */
		deductionsAmount?: number | null;

		/**
		 * Box 3 on form W4 (year 2020 or later): Total dependents amount. <br  />Decimal (12,2)
		 * Type: double
		 */
		dependentsAmount?: number | null;

		/**
		 * State tax exemptions value.<br  />Decimal (12,2)
		 * Type: double
		 */
		exemptions?: number | null;

		/**
		 * State tax exemptions 2 value.<br  />Decimal (12,2)
		 * Type: double
		 */
		exemptions2?: number | null;

		/** Employee state tax filing status. Common values are *S* (Single), *M* (Married).<br  />Max length: 50 */
		filingStatus?: string | null;

		/** Box 2(c) on form W4 (year 2020 or later): Multiple Jobs or Spouse Works. <br  />Boolean */
		higherRate?: boolean | null;

		/**
		 * Box 4(a) on form W4 (year 2020 or later): Other income amount. <br  />Decimal (12,2)
		 * Type: double
		 */
		otherIncomeAmount?: number | null;

		/**
		 * State Tax percentage. <br  />Decimal (12,2)
		 * Type: double
		 */
		percentage?: number | null;

		/** Supplemental check calculation code. Common values are *Blocked* (Taxes blocked on Supplemental checks), *Supp* (Use supplemental Tax Rate-Code). <br  />Max length: 10 */
		specialCheckCalc?: string | null;

		/** Tax calculation code. Common values are *F* (Flat), *P* (Percentage), *FDFP* (Flat Dollar Amount plus Fixed Percentage). <br  />Max length: 10 */
		taxCalculationCode?: string | null;

		/** State tax code.<br  /> Max length: 50 */
		taxCode?: string | null;

		/**
		 * The state W4 form year <br  />Integer
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		w4FormYear?: number | null;
	}
	export interface EmployeePrimaryStateTaxFormProperties {

		/**
		 * State tax code.<br  /> Max length: 50
		 * Type: double
		 */
		amount: FormControl<number | null | undefined>,

		/**
		 * Box 4(b) on form W4 (year 2020 or later): Deductions amount. <br  />Decimal (12,2)
		 * Type: double
		 */
		deductionsAmount: FormControl<number | null | undefined>,

		/**
		 * Box 3 on form W4 (year 2020 or later): Total dependents amount. <br  />Decimal (12,2)
		 * Type: double
		 */
		dependentsAmount: FormControl<number | null | undefined>,

		/**
		 * State tax exemptions value.<br  />Decimal (12,2)
		 * Type: double
		 */
		exemptions: FormControl<number | null | undefined>,

		/**
		 * State tax exemptions 2 value.<br  />Decimal (12,2)
		 * Type: double
		 */
		exemptions2: FormControl<number | null | undefined>,

		/** Employee state tax filing status. Common values are *S* (Single), *M* (Married).<br  />Max length: 50 */
		filingStatus: FormControl<string | null | undefined>,

		/** Box 2(c) on form W4 (year 2020 or later): Multiple Jobs or Spouse Works. <br  />Boolean */
		higherRate: FormControl<boolean | null | undefined>,

		/**
		 * Box 4(a) on form W4 (year 2020 or later): Other income amount. <br  />Decimal (12,2)
		 * Type: double
		 */
		otherIncomeAmount: FormControl<number | null | undefined>,

		/**
		 * State Tax percentage. <br  />Decimal (12,2)
		 * Type: double
		 */
		percentage: FormControl<number | null | undefined>,

		/** Supplemental check calculation code. Common values are *Blocked* (Taxes blocked on Supplemental checks), *Supp* (Use supplemental Tax Rate-Code). <br  />Max length: 10 */
		specialCheckCalc: FormControl<string | null | undefined>,

		/** Tax calculation code. Common values are *F* (Flat), *P* (Percentage), *FDFP* (Flat Dollar Amount plus Fixed Percentage). <br  />Max length: 10 */
		taxCalculationCode: FormControl<string | null | undefined>,

		/** State tax code.<br  /> Max length: 50 */
		taxCode: FormControl<string | null | undefined>,

		/**
		 * The state W4 form year <br  />Integer
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		w4FormYear: FormControl<number | null | undefined>,
	}
	export function CreateEmployeePrimaryStateTaxFormGroup() {
		return new FormGroup<EmployeePrimaryStateTaxFormProperties>({
			amount: new FormControl<number | null | undefined>(undefined),
			deductionsAmount: new FormControl<number | null | undefined>(undefined),
			dependentsAmount: new FormControl<number | null | undefined>(undefined),
			exemptions: new FormControl<number | null | undefined>(undefined),
			exemptions2: new FormControl<number | null | undefined>(undefined),
			filingStatus: new FormControl<string | null | undefined>(undefined),
			higherRate: new FormControl<boolean | null | undefined>(undefined),
			otherIncomeAmount: new FormControl<number | null | undefined>(undefined),
			percentage: new FormControl<number | null | undefined>(undefined),
			specialCheckCalc: new FormControl<string | null | undefined>(undefined),
			taxCalculationCode: new FormControl<string | null | undefined>(undefined),
			taxCode: new FormControl<string | null | undefined>(undefined),
			w4FormYear: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface EmployeeStatus {

		/** Adjusted seniority date. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*. */
		adjustedSeniorityDate?: string | null;

		/** Employee status change reason. Must match Company setup.<br  /> Max length: 15 */
		changeReason?: string | null;

		/** Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*. */
		effectiveDate?: string | null;

		/** Employee current work status. Common values are *A* (Active), *L* (Leave of Absence), *T* (Terminated). <br  />Max length: 20 */
		employeeStatus?: string | null;

		/** Employee hired date. Updates to hire date are not allowed and will be ignored. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*. */
		hireDate?: string | null;

		/** Indicates if employee eligible for rehire. */
		isEligibleForRehire?: boolean | null;

		/** Rehire date if employee is rehired.  Updates to re-hire date are not allowed and will be ignored. Common formats are *MM-DD-CCYY, CCYY-MM-DD*. */
		reHireDate?: string | null;

		/** The Status Type associated with the Employee Status code. Each Employee Status  code for a company is assigned to one of the Status Type values of  A (Active), L (Leave of Absence), T (Terminated). */
		statusType?: string | null;

		/** Employee termination date. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*. */
		terminationDate?: string | null;
	}
	export interface EmployeeStatusFormProperties {

		/** Adjusted seniority date. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*. */
		adjustedSeniorityDate: FormControl<string | null | undefined>,

		/** Employee status change reason. Must match Company setup.<br  /> Max length: 15 */
		changeReason: FormControl<string | null | undefined>,

		/** Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*. */
		effectiveDate: FormControl<string | null | undefined>,

		/** Employee current work status. Common values are *A* (Active), *L* (Leave of Absence), *T* (Terminated). <br  />Max length: 20 */
		employeeStatus: FormControl<string | null | undefined>,

		/** Employee hired date. Updates to hire date are not allowed and will be ignored. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*. */
		hireDate: FormControl<string | null | undefined>,

		/** Indicates if employee eligible for rehire. */
		isEligibleForRehire: FormControl<boolean | null | undefined>,

		/** Rehire date if employee is rehired.  Updates to re-hire date are not allowed and will be ignored. Common formats are *MM-DD-CCYY, CCYY-MM-DD*. */
		reHireDate: FormControl<string | null | undefined>,

		/** The Status Type associated with the Employee Status code. Each Employee Status  code for a company is assigned to one of the Status Type values of  A (Active), L (Leave of Absence), T (Terminated). */
		statusType: FormControl<string | null | undefined>,

		/** Employee termination date. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*. */
		terminationDate: FormControl<string | null | undefined>,
	}
	export function CreateEmployeeStatusFormGroup() {
		return new FormGroup<EmployeeStatusFormProperties>({
			adjustedSeniorityDate: new FormControl<string | null | undefined>(undefined),
			changeReason: new FormControl<string | null | undefined>(undefined),
			effectiveDate: new FormControl<string | null | undefined>(undefined),
			employeeStatus: new FormControl<string | null | undefined>(undefined),
			hireDate: new FormControl<string | null | undefined>(undefined),
			isEligibleForRehire: new FormControl<boolean | null | undefined>(undefined),
			reHireDate: new FormControl<string | null | undefined>(undefined),
			statusType: new FormControl<string | null | undefined>(undefined),
			terminationDate: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface EmployeeTaxSetup {

		/** Notes for FITW exemption.<br  /> Max length: 250 */
		fitwExemptNotes?: string | null;

		/** Reason code for FITW exemption. Common values are *SE* (Statutory employee), *CR* (clergy/Religious). <br  /> Max length: 30 */
		fitwExemptReason?: string | null;

		/** Notes for FUTA exemption.<br  /> Max length: 250 */
		futaExemptNotes?: string | null;

		/** Reason code for FUTA exemption. Common values are *501* (5019c)(3) Organization), *IC* (Independent Contractor).<br  /> Max length: 30 */
		futaExemptReason?: string | null;

		/** Indicates if employee in agriculture or farming. */
		isEmployee943?: boolean | null;

		/** Indicates if employee is eligible for pension. */
		isPension?: boolean | null;

		/** Indicates if employee is statutory. */
		isStatutory?: boolean | null;

		/** Notes for Medicare exemption.<br  /> Max length: 250 */
		medExemptNotes?: string | null;

		/** Reason code for Medicare exemption. Common values are *501* (5019c)(3) Organization), *IC* (Independent Contractor).<br  /> Max length: 30 */
		medExemptReason?: string | null;

		/** Notes for SITW exemption.<br  /> Max length: 250 */
		sitwExemptNotes?: string | null;

		/** Reason code for SITW exemption. Common values are *SE* (Statutory employee), *CR* (clergy/Religious). <br  /> Max length: 30 */
		sitwExemptReason?: string | null;

		/** Notes for Social Security exemption.<br  /> Max length: 250 */
		ssExemptNotes?: string | null;

		/** Reason code for Social Security exemption. Common values are *SE* (Statutory employee), *CR* (clergy/Religious). <br  /> Max length: 30 */
		ssExemptReason?: string | null;

		/** Notes for SUI exemption.<br  /> Max length: 250 */
		suiExemptNotes?: string | null;

		/** Reason code for SUI exemption. Common values are *SE* (Statutory employee), *CR* (clergy/Religious). <br  /> Max length: 30 */
		suiExemptReason?: string | null;

		/** Employee SUI (State Unemployment Insurance) state. <br  />Max length: 2 */
		suiState?: string | null;

		/** Employee 1099R distribution code. Common values are *7* (Normal Distribution), *F* (Charitable Gift Annuity). <br  />Max length: 1 */
		taxDistributionCode1099R?: string | null;

		/** Employee tax form for reporting income. Valid values are *W2, 1099M, 1099R*. Default is W2. <br  />Max length: 15 */
		taxForm?: string | null;
	}
	export interface EmployeeTaxSetupFormProperties {

		/** Notes for FITW exemption.<br  /> Max length: 250 */
		fitwExemptNotes: FormControl<string | null | undefined>,

		/** Reason code for FITW exemption. Common values are *SE* (Statutory employee), *CR* (clergy/Religious). <br  /> Max length: 30 */
		fitwExemptReason: FormControl<string | null | undefined>,

		/** Notes for FUTA exemption.<br  /> Max length: 250 */
		futaExemptNotes: FormControl<string | null | undefined>,

		/** Reason code for FUTA exemption. Common values are *501* (5019c)(3) Organization), *IC* (Independent Contractor).<br  /> Max length: 30 */
		futaExemptReason: FormControl<string | null | undefined>,

		/** Indicates if employee in agriculture or farming. */
		isEmployee943: FormControl<boolean | null | undefined>,

		/** Indicates if employee is eligible for pension. */
		isPension: FormControl<boolean | null | undefined>,

		/** Indicates if employee is statutory. */
		isStatutory: FormControl<boolean | null | undefined>,

		/** Notes for Medicare exemption.<br  /> Max length: 250 */
		medExemptNotes: FormControl<string | null | undefined>,

		/** Reason code for Medicare exemption. Common values are *501* (5019c)(3) Organization), *IC* (Independent Contractor).<br  /> Max length: 30 */
		medExemptReason: FormControl<string | null | undefined>,

		/** Notes for SITW exemption.<br  /> Max length: 250 */
		sitwExemptNotes: FormControl<string | null | undefined>,

		/** Reason code for SITW exemption. Common values are *SE* (Statutory employee), *CR* (clergy/Religious). <br  /> Max length: 30 */
		sitwExemptReason: FormControl<string | null | undefined>,

		/** Notes for Social Security exemption.<br  /> Max length: 250 */
		ssExemptNotes: FormControl<string | null | undefined>,

		/** Reason code for Social Security exemption. Common values are *SE* (Statutory employee), *CR* (clergy/Religious). <br  /> Max length: 30 */
		ssExemptReason: FormControl<string | null | undefined>,

		/** Notes for SUI exemption.<br  /> Max length: 250 */
		suiExemptNotes: FormControl<string | null | undefined>,

		/** Reason code for SUI exemption. Common values are *SE* (Statutory employee), *CR* (clergy/Religious). <br  /> Max length: 30 */
		suiExemptReason: FormControl<string | null | undefined>,

		/** Employee SUI (State Unemployment Insurance) state. <br  />Max length: 2 */
		suiState: FormControl<string | null | undefined>,

		/** Employee 1099R distribution code. Common values are *7* (Normal Distribution), *F* (Charitable Gift Annuity). <br  />Max length: 1 */
		taxDistributionCode1099R: FormControl<string | null | undefined>,

		/** Employee tax form for reporting income. Valid values are *W2, 1099M, 1099R*. Default is W2. <br  />Max length: 15 */
		taxForm: FormControl<string | null | undefined>,
	}
	export function CreateEmployeeTaxSetupFormGroup() {
		return new FormGroup<EmployeeTaxSetupFormProperties>({
			fitwExemptNotes: new FormControl<string | null | undefined>(undefined),
			fitwExemptReason: new FormControl<string | null | undefined>(undefined),
			futaExemptNotes: new FormControl<string | null | undefined>(undefined),
			futaExemptReason: new FormControl<string | null | undefined>(undefined),
			isEmployee943: new FormControl<boolean | null | undefined>(undefined),
			isPension: new FormControl<boolean | null | undefined>(undefined),
			isStatutory: new FormControl<boolean | null | undefined>(undefined),
			medExemptNotes: new FormControl<string | null | undefined>(undefined),
			medExemptReason: new FormControl<string | null | undefined>(undefined),
			sitwExemptNotes: new FormControl<string | null | undefined>(undefined),
			sitwExemptReason: new FormControl<string | null | undefined>(undefined),
			ssExemptNotes: new FormControl<string | null | undefined>(undefined),
			ssExemptReason: new FormControl<string | null | undefined>(undefined),
			suiExemptNotes: new FormControl<string | null | undefined>(undefined),
			suiExemptReason: new FormControl<string | null | undefined>(undefined),
			suiState: new FormControl<string | null | undefined>(undefined),
			taxDistributionCode1099R: new FormControl<string | null | undefined>(undefined),
			taxForm: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface EmployeeWebTime {

		/** Badge number usually issued for time and attendance system use. <br  />Max length: 50 */
		badgeNumber?: string | null;

		/**
		 * Rate to be charged to third party for time worked by the employee. It is most commonly referenced in the Cost Center Charge, Cost Center Charge vs. Cost Reports, and the Customer Invoice time and attendance reports. <br  />Decimal (12,2)
		 * Type: double
		 */
		chargeRate?: number | null;

		/** If set to true, changes to employee data will be reflected in Web Time. */
		isTimeLaborEnabled?: boolean | null;
	}
	export interface EmployeeWebTimeFormProperties {

		/** Badge number usually issued for time and attendance system use. <br  />Max length: 50 */
		badgeNumber: FormControl<string | null | undefined>,

		/**
		 * Rate to be charged to third party for time worked by the employee. It is most commonly referenced in the Cost Center Charge, Cost Center Charge vs. Cost Reports, and the Customer Invoice time and attendance reports. <br  />Decimal (12,2)
		 * Type: double
		 */
		chargeRate: FormControl<number | null | undefined>,

		/** If set to true, changes to employee data will be reflected in Web Time. */
		isTimeLaborEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateEmployeeWebTimeFormGroup() {
		return new FormGroup<EmployeeWebTimeFormProperties>({
			badgeNumber: new FormControl<string | null | undefined>(undefined),
			chargeRate: new FormControl<number | null | undefined>(undefined),
			isTimeLaborEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface EmployeeWorkAddress {

		/** 1st address line.<br  /> Max length: 40 */
		address1?: string | null;

		/** 2nd address line. <br  /> Max length: 40 */
		address2?: string | null;

		/** City.<br  /> Max length: 40 */
		city?: string | null;

		/** Country.<br  /> Max length: 30 */
		country?: string | null;

		/** County.<br  /> Max length: 30 */
		county?: string | null;

		/** Email. <br  />Max length: 50 */
		emailAddress?: string | null;

		/** Work Location name. <br />Max length: 50 */
		location?: string | null;

		/** Employee mail stop.<br  /> Max length: 10 */
		mailStop?: string | null;

		/** Mobile phone number.<br  /> Max length: 20 */
		mobilePhone?: string | null;

		/** Employee pager number.<br  /> Max length: 20 */
		pager?: string | null;

		/** Phone number.<br  /> Max length: 20 */
		phone?: string | null;

		/** Phone number extension.<br  /> Max length: 10 */
		phoneExtension?: string | null;

		/** Postal code.<br  /> Max length: 10 */
		postalCode?: string | null;

		/** State or province.<br  /> Max length: 2 */
		state?: string | null;
	}
	export interface EmployeeWorkAddressFormProperties {

		/** 1st address line.<br  /> Max length: 40 */
		address1: FormControl<string | null | undefined>,

		/** 2nd address line. <br  /> Max length: 40 */
		address2: FormControl<string | null | undefined>,

		/** City.<br  /> Max length: 40 */
		city: FormControl<string | null | undefined>,

		/** Country.<br  /> Max length: 30 */
		country: FormControl<string | null | undefined>,

		/** County.<br  /> Max length: 30 */
		county: FormControl<string | null | undefined>,

		/** Email. <br  />Max length: 50 */
		emailAddress: FormControl<string | null | undefined>,

		/** Work Location name. <br />Max length: 50 */
		location: FormControl<string | null | undefined>,

		/** Employee mail stop.<br  /> Max length: 10 */
		mailStop: FormControl<string | null | undefined>,

		/** Mobile phone number.<br  /> Max length: 20 */
		mobilePhone: FormControl<string | null | undefined>,

		/** Employee pager number.<br  /> Max length: 20 */
		pager: FormControl<string | null | undefined>,

		/** Phone number.<br  /> Max length: 20 */
		phone: FormControl<string | null | undefined>,

		/** Phone number extension.<br  /> Max length: 10 */
		phoneExtension: FormControl<string | null | undefined>,

		/** Postal code.<br  /> Max length: 10 */
		postalCode: FormControl<string | null | undefined>,

		/** State or province.<br  /> Max length: 2 */
		state: FormControl<string | null | undefined>,
	}
	export function CreateEmployeeWorkAddressFormGroup() {
		return new FormGroup<EmployeeWorkAddressFormProperties>({
			address1: new FormControl<string | null | undefined>(undefined),
			address2: new FormControl<string | null | undefined>(undefined),
			city: new FormControl<string | null | undefined>(undefined),
			country: new FormControl<string | null | undefined>(undefined),
			county: new FormControl<string | null | undefined>(undefined),
			emailAddress: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			mailStop: new FormControl<string | null | undefined>(undefined),
			mobilePhone: new FormControl<string | null | undefined>(undefined),
			pager: new FormControl<string | null | undefined>(undefined),
			phone: new FormControl<string | null | undefined>(undefined),
			phoneExtension: new FormControl<string | null | undefined>(undefined),
			postalCode: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface EmployeeWorkEligibility {

		/** Employee USCIS or Admission Number. <br  /> Must be 7-10 characters and may begin with an 'A' */
		alienOrAdmissionDocumentNumber?: string | null;

		/** The date the I-9 Verification form was attested by Employer or Authorized representative. Common formats are *MM-DD-CCYY, CCYY-MM-DD*. */
		attestedDate?: string | null;

		/** If Foreign Passport number is provided, provide its country of issuance. Must match Paylocity setup.<br  /> Max length: 30 */
		countryOfIssuance?: string | null;

		/** Foreign Passport Number.<br  /> Max length: 50 */
		foreignPassportNumber?: string | null;

		/** Form I-94 admission number.<br  /> Must be 11 numeric characters */
		i94AdmissionNumber?: string | null;

		/** Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*. */
		i9DateVerified?: string | null;

		/** Notes regarding employee's i9.<br  /> Max length: 4000 */
		i9Notes?: string | null;

		/** Indicates if employee I9 is verified. */
		isI9Verified?: boolean | null;

		/** Indicates if employee SSN is verified. */
		isSsnVerified?: boolean | null;

		/** The date of employer verification of employee SSN. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*. */
		ssnDateVerified?: string | null;

		/** Notes regarding employee's SSN.<br  /> Max length: 4000 */
		ssnNotes?: string | null;

		/** Employee Visa type. Must match one of the system coded values.<br  /> Max length: 100 */
		visaType?: string | null;

		/** Employee work authorization. Must match one of the system coded values.<br  /> Max length: 100 */
		workAuthorization?: string | null;

		/** End date of employee work eligibility.  Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*. */
		workUntil?: string | null;
	}
	export interface EmployeeWorkEligibilityFormProperties {

		/** Employee USCIS or Admission Number. <br  /> Must be 7-10 characters and may begin with an 'A' */
		alienOrAdmissionDocumentNumber: FormControl<string | null | undefined>,

		/** The date the I-9 Verification form was attested by Employer or Authorized representative. Common formats are *MM-DD-CCYY, CCYY-MM-DD*. */
		attestedDate: FormControl<string | null | undefined>,

		/** If Foreign Passport number is provided, provide its country of issuance. Must match Paylocity setup.<br  /> Max length: 30 */
		countryOfIssuance: FormControl<string | null | undefined>,

		/** Foreign Passport Number.<br  /> Max length: 50 */
		foreignPassportNumber: FormControl<string | null | undefined>,

		/** Form I-94 admission number.<br  /> Must be 11 numeric characters */
		i94AdmissionNumber: FormControl<string | null | undefined>,

		/** Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*. */
		i9DateVerified: FormControl<string | null | undefined>,

		/** Notes regarding employee's i9.<br  /> Max length: 4000 */
		i9Notes: FormControl<string | null | undefined>,

		/** Indicates if employee I9 is verified. */
		isI9Verified: FormControl<boolean | null | undefined>,

		/** Indicates if employee SSN is verified. */
		isSsnVerified: FormControl<boolean | null | undefined>,

		/** The date of employer verification of employee SSN. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*. */
		ssnDateVerified: FormControl<string | null | undefined>,

		/** Notes regarding employee's SSN.<br  /> Max length: 4000 */
		ssnNotes: FormControl<string | null | undefined>,

		/** Employee Visa type. Must match one of the system coded values.<br  /> Max length: 100 */
		visaType: FormControl<string | null | undefined>,

		/** Employee work authorization. Must match one of the system coded values.<br  /> Max length: 100 */
		workAuthorization: FormControl<string | null | undefined>,

		/** End date of employee work eligibility.  Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*. */
		workUntil: FormControl<string | null | undefined>,
	}
	export function CreateEmployeeWorkEligibilityFormGroup() {
		return new FormGroup<EmployeeWorkEligibilityFormProperties>({
			alienOrAdmissionDocumentNumber: new FormControl<string | null | undefined>(undefined),
			attestedDate: new FormControl<string | null | undefined>(undefined),
			countryOfIssuance: new FormControl<string | null | undefined>(undefined),
			foreignPassportNumber: new FormControl<string | null | undefined>(undefined),
			i94AdmissionNumber: new FormControl<string | null | undefined>(undefined),
			i9DateVerified: new FormControl<string | null | undefined>(undefined),
			i9Notes: new FormControl<string | null | undefined>(undefined),
			isI9Verified: new FormControl<boolean | null | undefined>(undefined),
			isSsnVerified: new FormControl<boolean | null | undefined>(undefined),
			ssnDateVerified: new FormControl<string | null | undefined>(undefined),
			ssnNotes: new FormControl<string | null | undefined>(undefined),
			visaType: new FormControl<string | null | undefined>(undefined),
			workAuthorization: new FormControl<string | null | undefined>(undefined),
			workUntil: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The EmployeeId Response Model */
	export interface EmployeeIdResponse {

		/** The EmployeeId */
		employeeId?: string | null;
	}

	/** The EmployeeId Response Model */
	export interface EmployeeIdResponseFormProperties {

		/** The EmployeeId */
		employeeId: FormControl<string | null | undefined>,
	}
	export function CreateEmployeeIdResponseFormGroup() {
		return new FormGroup<EmployeeIdResponseFormProperties>({
			employeeId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The employee info model */
	export interface EmployeeInfo {

		/** Employee Id.<br  /> Max length: 10 */
		employeeId?: string | null;

		/** Employee current work status. Common values are *A* (Active), *L* (Leave of Absence), *T* (Terminated). <br  />Max length: 20 */
		statusCode?: string | null;

		/** Employee current work status type. <br  />Max length: 10 */
		statusTypeCode?: string | null;
	}

	/** The employee info model */
	export interface EmployeeInfoFormProperties {

		/** Employee Id.<br  /> Max length: 10 */
		employeeId: FormControl<string | null | undefined>,

		/** Employee current work status. Common values are *A* (Active), *L* (Leave of Absence), *T* (Terminated). <br  />Max length: 20 */
		statusCode: FormControl<string | null | undefined>,

		/** Employee current work status type. <br  />Max length: 10 */
		statusTypeCode: FormControl<string | null | undefined>,
	}
	export function CreateEmployeeInfoFormGroup() {
		return new FormGroup<EmployeeInfoFormProperties>({
			employeeId: new FormControl<string | null | undefined>(undefined),
			statusCode: new FormControl<string | null | undefined>(undefined),
			statusTypeCode: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The error model */
	export interface Error {

		/** The name of the field, or property in the request message that contains an error. */
		field?: string | null;

		/** The error message. */
		message?: string | null;

		/** A list of options associated with this error. These options may indicate valid values for the field, or property that contains an error. */
		ErrorOptions?: Array<ErrorOptions>;

		/** The JSON path of the field, or property, that contains an error in the request message. */
		path?: string | null;
	}

	/** The error model */
	export interface ErrorFormProperties {

		/** The name of the field, or property in the request message that contains an error. */
		field: FormControl<string | null | undefined>,

		/** The error message. */
		message: FormControl<string | null | undefined>,

		/** The JSON path of the field, or property, that contains an error in the request message. */
		path: FormControl<string | null | undefined>,
	}
	export function CreateErrorFormGroup() {
		return new FormGroup<ErrorFormProperties>({
			field: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			path: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ErrorOptions {

		/** The code associated with this option. */
		code?: string | null;

		/** The description of the option. */
		description?: string | null;
	}
	export interface ErrorOptionsFormProperties {

		/** The code associated with this option. */
		code: FormControl<string | null | undefined>,

		/** The description of the option. */
		description: FormControl<string | null | undefined>,
	}
	export function CreateErrorOptionsFormGroup() {
		return new FormGroup<ErrorOptionsFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The Local Tax model */
	export interface LocalTax {

		/**
		 * Local tax exemptions value.<br  />Decimal (12,2)
		 * Type: double
		 */
		exemptions?: number | null;

		/**
		 * Local tax exemptions 2 value.<br  />Decimal (12,2)
		 * Type: double
		 */
		exemptions2?: number | null;

		/** Employee local tax filing status. Must match specific local tax setup. <br  /> Max length: 50 */
		filingStatus?: string | null;

		/** Resident PSD (political subdivision code) applicable in PA. Must match Company setup.<br  /> Max length: 9 */
		residentPSD?: string | null;

		/** Local tax code.<br  />Max length: 50 */
		taxCode?: string | null;

		/** Work location PSD. Must match Company setup. <br  /> Max length: 9 */
		workPSD?: string | null;
	}

	/** The Local Tax model */
	export interface LocalTaxFormProperties {

		/**
		 * Local tax exemptions value.<br  />Decimal (12,2)
		 * Type: double
		 */
		exemptions: FormControl<number | null | undefined>,

		/**
		 * Local tax exemptions 2 value.<br  />Decimal (12,2)
		 * Type: double
		 */
		exemptions2: FormControl<number | null | undefined>,

		/** Employee local tax filing status. Must match specific local tax setup. <br  /> Max length: 50 */
		filingStatus: FormControl<string | null | undefined>,

		/** Resident PSD (political subdivision code) applicable in PA. Must match Company setup.<br  /> Max length: 9 */
		residentPSD: FormControl<string | null | undefined>,

		/** Local tax code.<br  />Max length: 50 */
		taxCode: FormControl<string | null | undefined>,

		/** Work location PSD. Must match Company setup. <br  /> Max length: 9 */
		workPSD: FormControl<string | null | undefined>,
	}
	export function CreateLocalTaxFormGroup() {
		return new FormGroup<LocalTaxFormProperties>({
			exemptions: new FormControl<number | null | undefined>(undefined),
			exemptions2: new FormControl<number | null | undefined>(undefined),
			filingStatus: new FormControl<string | null | undefined>(undefined),
			residentPSD: new FormControl<string | null | undefined>(undefined),
			taxCode: new FormControl<string | null | undefined>(undefined),
			workPSD: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The Non-Primary State Tax model */
	export interface NonPrimaryStateTax {

		/**
		 * State tax code.<br  /> Max length: 50
		 * Type: double
		 */
		amount?: number | null;

		/**
		 * Box 4(b) on form W4 (year 2020 or later): Deductions amount. <br  />Decimal (12,2)
		 * Type: double
		 */
		deductionsAmount?: number | null;

		/**
		 * Box 3 on form W4 (year 2020 or later): Total dependents amount. <br  />Decimal (12,2)
		 * Type: double
		 */
		dependentsAmount?: number | null;

		/**
		 * State tax exemptions value.<br  />Decimal (12,2)
		 * Type: double
		 */
		exemptions?: number | null;

		/**
		 * State tax exemptions 2 value.<br  />Decimal (12,2)
		 * Type: double
		 */
		exemptions2?: number | null;

		/** Employee state tax filing status. Common values are *S* (Single), *M* (Married).<br  />Max length: 50 */
		filingStatus?: string | null;

		/** Box 2(c) on form W4 (year 2020 or later): Multiple Jobs or Spouse Works. <br  />Boolean */
		higherRate?: boolean | null;

		/**
		 * Box 4(a) on form W4 (year 2020 or later): Other income amount. <br  />Decimal (12,2)
		 * Type: double
		 */
		otherIncomeAmount?: number | null;

		/**
		 * State Tax percentage. <br  />Decimal (12,2)
		 * Type: double
		 */
		percentage?: number | null;

		/** Non-primary state tax reciprocity code.<br  /> Max length: 50 */
		reciprocityCode?: string | null;

		/** Supplemental check calculation code. Common values are *Blocked* (Taxes blocked on Supplemental checks), *Supp* (Use supplemental Tax Rate-Code). <br  />Max length: 10 */
		specialCheckCalc?: string | null;

		/** Tax calculation code. Common values are *F* (Flat), *P* (Percentage), *FDFP* (Flat Dollar Amount plus Fixed Percentage). <br  />Max length: 10 */
		taxCalculationCode?: string | null;

		/** State tax code.<br  /> Max length: 50 */
		taxCode?: string | null;

		/**
		 * The state W4 form year <br  />Integer
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		w4FormYear?: number | null;
	}

	/** The Non-Primary State Tax model */
	export interface NonPrimaryStateTaxFormProperties {

		/**
		 * State tax code.<br  /> Max length: 50
		 * Type: double
		 */
		amount: FormControl<number | null | undefined>,

		/**
		 * Box 4(b) on form W4 (year 2020 or later): Deductions amount. <br  />Decimal (12,2)
		 * Type: double
		 */
		deductionsAmount: FormControl<number | null | undefined>,

		/**
		 * Box 3 on form W4 (year 2020 or later): Total dependents amount. <br  />Decimal (12,2)
		 * Type: double
		 */
		dependentsAmount: FormControl<number | null | undefined>,

		/**
		 * State tax exemptions value.<br  />Decimal (12,2)
		 * Type: double
		 */
		exemptions: FormControl<number | null | undefined>,

		/**
		 * State tax exemptions 2 value.<br  />Decimal (12,2)
		 * Type: double
		 */
		exemptions2: FormControl<number | null | undefined>,

		/** Employee state tax filing status. Common values are *S* (Single), *M* (Married).<br  />Max length: 50 */
		filingStatus: FormControl<string | null | undefined>,

		/** Box 2(c) on form W4 (year 2020 or later): Multiple Jobs or Spouse Works. <br  />Boolean */
		higherRate: FormControl<boolean | null | undefined>,

		/**
		 * Box 4(a) on form W4 (year 2020 or later): Other income amount. <br  />Decimal (12,2)
		 * Type: double
		 */
		otherIncomeAmount: FormControl<number | null | undefined>,

		/**
		 * State Tax percentage. <br  />Decimal (12,2)
		 * Type: double
		 */
		percentage: FormControl<number | null | undefined>,

		/** Non-primary state tax reciprocity code.<br  /> Max length: 50 */
		reciprocityCode: FormControl<string | null | undefined>,

		/** Supplemental check calculation code. Common values are *Blocked* (Taxes blocked on Supplemental checks), *Supp* (Use supplemental Tax Rate-Code). <br  />Max length: 10 */
		specialCheckCalc: FormControl<string | null | undefined>,

		/** Tax calculation code. Common values are *F* (Flat), *P* (Percentage), *FDFP* (Flat Dollar Amount plus Fixed Percentage). <br  />Max length: 10 */
		taxCalculationCode: FormControl<string | null | undefined>,

		/** State tax code.<br  /> Max length: 50 */
		taxCode: FormControl<string | null | undefined>,

		/**
		 * The state W4 form year <br  />Integer
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		w4FormYear: FormControl<number | null | undefined>,
	}
	export function CreateNonPrimaryStateTaxFormGroup() {
		return new FormGroup<NonPrimaryStateTaxFormProperties>({
			amount: new FormControl<number | null | undefined>(undefined),
			deductionsAmount: new FormControl<number | null | undefined>(undefined),
			dependentsAmount: new FormControl<number | null | undefined>(undefined),
			exemptions: new FormControl<number | null | undefined>(undefined),
			exemptions2: new FormControl<number | null | undefined>(undefined),
			filingStatus: new FormControl<string | null | undefined>(undefined),
			higherRate: new FormControl<boolean | null | undefined>(undefined),
			otherIncomeAmount: new FormControl<number | null | undefined>(undefined),
			percentage: new FormControl<number | null | undefined>(undefined),
			reciprocityCode: new FormControl<string | null | undefined>(undefined),
			specialCheckCalc: new FormControl<string | null | undefined>(undefined),
			taxCalculationCode: new FormControl<string | null | undefined>(undefined),
			taxCode: new FormControl<string | null | undefined>(undefined),
			w4FormYear: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The pay statement details model */
	export interface PayStatementDetails {

		/**
		 * .<br />
		 * Type: double
		 */
		amount?: number | null;

		/** .<br /> */
		checkDate?: string | null;

		/** .<br /> */
		det?: string | null;

		/** .<br /> */
		detCode?: string | null;

		/** .<br /> */
		detType?: string | null;

		/**
		 * .<br />
		 * Type: double
		 */
		eligibleCompensation?: number | null;

		/**
		 * .<br />
		 * Type: double
		 */
		hours?: number | null;

		/**
		 * .<br />
		 * Type: double
		 */
		rate?: number | null;

		/**
		 * <br />
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		transactionNumber?: number | null;

		/** .<br /> */
		transactionType?: string | null;

		/**
		 * .<br />
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		year?: number | null;
	}

	/** The pay statement details model */
	export interface PayStatementDetailsFormProperties {

		/**
		 * .<br />
		 * Type: double
		 */
		amount: FormControl<number | null | undefined>,

		/** .<br /> */
		checkDate: FormControl<string | null | undefined>,

		/** .<br /> */
		det: FormControl<string | null | undefined>,

		/** .<br /> */
		detCode: FormControl<string | null | undefined>,

		/** .<br /> */
		detType: FormControl<string | null | undefined>,

		/**
		 * .<br />
		 * Type: double
		 */
		eligibleCompensation: FormControl<number | null | undefined>,

		/**
		 * .<br />
		 * Type: double
		 */
		hours: FormControl<number | null | undefined>,

		/**
		 * .<br />
		 * Type: double
		 */
		rate: FormControl<number | null | undefined>,

		/**
		 * <br />
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		transactionNumber: FormControl<number | null | undefined>,

		/** .<br /> */
		transactionType: FormControl<string | null | undefined>,

		/**
		 * .<br />
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		year: FormControl<number | null | undefined>,
	}
	export function CreatePayStatementDetailsFormGroup() {
		return new FormGroup<PayStatementDetailsFormProperties>({
			amount: new FormControl<number | null | undefined>(undefined),
			checkDate: new FormControl<string | null | undefined>(undefined),
			det: new FormControl<string | null | undefined>(undefined),
			detCode: new FormControl<string | null | undefined>(undefined),
			detType: new FormControl<string | null | undefined>(undefined),
			eligibleCompensation: new FormControl<number | null | undefined>(undefined),
			hours: new FormControl<number | null | undefined>(undefined),
			rate: new FormControl<number | null | undefined>(undefined),
			transactionNumber: new FormControl<number | null | undefined>(undefined),
			transactionType: new FormControl<string | null | undefined>(undefined),
			year: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The pay statement summary model */
	export interface PayStatementSummary {

		/** .<br /> */
		autoPay?: boolean | null;

		/** .<br /> */
		beginDate?: string | null;

		/** .<br /> */
		checkDate?: string | null;

		/**
		 * .<br />
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		checkNumber?: number | null;

		/**
		 * .<br />
		 * Type: double
		 */
		directDepositAmount?: number | null;

		/** .<br /> */
		endDate?: string | null;

		/**
		 * .<br />
		 * Type: double
		 */
		grossPay?: number | null;

		/**
		 * .<br />
		 * Type: double
		 */
		hours?: number | null;

		/**
		 * .<br />
		 * Type: double
		 */
		netCheck?: number | null;

		/**
		 * .<br />
		 * Type: double
		 */
		netPay?: number | null;

		/**
		 * .<br />
		 * Type: double
		 */
		overtimeDollars?: number | null;

		/**
		 * .<br />
		 * Type: double
		 */
		overtimeHours?: number | null;

		/**
		 * .<br />
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		process?: number | null;

		/**
		 * .<br />
		 * Type: double
		 */
		regularDollars?: number | null;

		/**
		 * .<br />
		 * Type: double
		 */
		regularHours?: number | null;

		/**
		 * <br />
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		transactionNumber?: number | null;

		/**
		 * .<br />
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		voucherNumber?: number | null;

		/** .<br /> */
		workersCompCode?: string | null;

		/**
		 * .<br />
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		year?: number | null;
	}

	/** The pay statement summary model */
	export interface PayStatementSummaryFormProperties {

		/** .<br /> */
		autoPay: FormControl<boolean | null | undefined>,

		/** .<br /> */
		beginDate: FormControl<string | null | undefined>,

		/** .<br /> */
		checkDate: FormControl<string | null | undefined>,

		/**
		 * .<br />
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		checkNumber: FormControl<number | null | undefined>,

		/**
		 * .<br />
		 * Type: double
		 */
		directDepositAmount: FormControl<number | null | undefined>,

		/** .<br /> */
		endDate: FormControl<string | null | undefined>,

		/**
		 * .<br />
		 * Type: double
		 */
		grossPay: FormControl<number | null | undefined>,

		/**
		 * .<br />
		 * Type: double
		 */
		hours: FormControl<number | null | undefined>,

		/**
		 * .<br />
		 * Type: double
		 */
		netCheck: FormControl<number | null | undefined>,

		/**
		 * .<br />
		 * Type: double
		 */
		netPay: FormControl<number | null | undefined>,

		/**
		 * .<br />
		 * Type: double
		 */
		overtimeDollars: FormControl<number | null | undefined>,

		/**
		 * .<br />
		 * Type: double
		 */
		overtimeHours: FormControl<number | null | undefined>,

		/**
		 * .<br />
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		process: FormControl<number | null | undefined>,

		/**
		 * .<br />
		 * Type: double
		 */
		regularDollars: FormControl<number | null | undefined>,

		/**
		 * .<br />
		 * Type: double
		 */
		regularHours: FormControl<number | null | undefined>,

		/**
		 * <br />
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		transactionNumber: FormControl<number | null | undefined>,

		/**
		 * .<br />
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		voucherNumber: FormControl<number | null | undefined>,

		/** .<br /> */
		workersCompCode: FormControl<string | null | undefined>,

		/**
		 * .<br />
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		year: FormControl<number | null | undefined>,
	}
	export function CreatePayStatementSummaryFormGroup() {
		return new FormGroup<PayStatementSummaryFormProperties>({
			autoPay: new FormControl<boolean | null | undefined>(undefined),
			beginDate: new FormControl<string | null | undefined>(undefined),
			checkDate: new FormControl<string | null | undefined>(undefined),
			checkNumber: new FormControl<number | null | undefined>(undefined),
			directDepositAmount: new FormControl<number | null | undefined>(undefined),
			endDate: new FormControl<string | null | undefined>(undefined),
			grossPay: new FormControl<number | null | undefined>(undefined),
			hours: new FormControl<number | null | undefined>(undefined),
			netCheck: new FormControl<number | null | undefined>(undefined),
			netPay: new FormControl<number | null | undefined>(undefined),
			overtimeDollars: new FormControl<number | null | undefined>(undefined),
			overtimeHours: new FormControl<number | null | undefined>(undefined),
			process: new FormControl<number | null | undefined>(undefined),
			regularDollars: new FormControl<number | null | undefined>(undefined),
			regularHours: new FormControl<number | null | undefined>(undefined),
			transactionNumber: new FormControl<number | null | undefined>(undefined),
			voucherNumber: new FormControl<number | null | undefined>(undefined),
			workersCompCode: new FormControl<string | null | undefined>(undefined),
			year: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The sensitive data model */
	export interface SensitiveData {

		/** Add or update disability data. */
		disability?: SensitiveDataDisability;

		/** Add or update ethnicity data. */
		ethnicity?: SensitiveDataEthnicity;

		/** Add or update gender data. */
		gender?: SensitiveDataGender;

		/** Add or update veteran data. */
		veteran?: SensitiveDataVeteran;
	}

	/** The sensitive data model */
	export interface SensitiveDataFormProperties {
	}
	export function CreateSensitiveDataFormGroup() {
		return new FormGroup<SensitiveDataFormProperties>({
		});

	}

	export interface SensitiveDataDisability {

		/** Description of employee's disability or accommodation.<br  />Max length: 50 */
		disability?: string | null;

		/** Add or update employee's disability classifications */
		SensitiveDataDisabilityDisabilityClassifications?: Array<SensitiveDataDisabilityDisabilityClassifications>;

		/** Indicates if the employee has a disability. Values include:<br  /><br  />0 = No<br  />1 = Yes<br  />2 = Prefer not to say */
		hasDisability?: string | null;
	}
	export interface SensitiveDataDisabilityFormProperties {

		/** Description of employee's disability or accommodation.<br  />Max length: 50 */
		disability: FormControl<string | null | undefined>,

		/** Indicates if the employee has a disability. Values include:<br  /><br  />0 = No<br  />1 = Yes<br  />2 = Prefer not to say */
		hasDisability: FormControl<string | null | undefined>,
	}
	export function CreateSensitiveDataDisabilityFormGroup() {
		return new FormGroup<SensitiveDataDisabilityFormProperties>({
			disability: new FormControl<string | null | undefined>(undefined),
			hasDisability: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SensitiveDataDisabilityDisabilityClassifications {

		/** Indicates the type of disability. This field is only allowed if hasDisability is set to 1=Yes. Values include:<br  /><br  />Auditory<br  />Cognitive, learning, and neurological<br  />Physical<br  />Speech<br  />Vision<br  />Prefer not to say<br  /><br  />Valid values can be obtained from Company Codes endpoint, codeResource = disabilityClassification */
		classification?: string | null;
	}
	export interface SensitiveDataDisabilityDisabilityClassificationsFormProperties {

		/** Indicates the type of disability. This field is only allowed if hasDisability is set to 1=Yes. Values include:<br  /><br  />Auditory<br  />Cognitive, learning, and neurological<br  />Physical<br  />Speech<br  />Vision<br  />Prefer not to say<br  /><br  />Valid values can be obtained from Company Codes endpoint, codeResource = disabilityClassification */
		classification: FormControl<string | null | undefined>,
	}
	export function CreateSensitiveDataDisabilityDisabilityClassificationsFormGroup() {
		return new FormGroup<SensitiveDataDisabilityDisabilityClassificationsFormProperties>({
			classification: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SensitiveDataEthnicity {

		/** Add or update Ethnic Racial Identity */
		SensitiveDataEthnicityEthnicRacialIdentities?: Array<SensitiveDataEthnicityEthnicRacialIdentities>;

		/** Employee's legal ethnicity or race.<br  />A = Asian<br  />B = Black<br  />H = Hispanic<br  />I = American Indian<br  />N = Native Hawaiian or Pacific Islander<br  />T = Two or More Races<br  />W = White<br  /><br  />Valid values can be obtained from Company Codes endpoint, codeResource = ethnicity */
		ethnicity?: string | null;
	}
	export interface SensitiveDataEthnicityFormProperties {

		/** Employee's legal ethnicity or race.<br  />A = Asian<br  />B = Black<br  />H = Hispanic<br  />I = American Indian<br  />N = Native Hawaiian or Pacific Islander<br  />T = Two or More Races<br  />W = White<br  /><br  />Valid values can be obtained from Company Codes endpoint, codeResource = ethnicity */
		ethnicity: FormControl<string | null | undefined>,
	}
	export function CreateSensitiveDataEthnicityFormGroup() {
		return new FormGroup<SensitiveDataEthnicityFormProperties>({
			ethnicity: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SensitiveDataEthnicityEthnicRacialIdentities {

		/** Employee's preferred or chosen ethnicity or race.<br  />Max length: 40. */
		description?: string | null;
	}
	export interface SensitiveDataEthnicityEthnicRacialIdentitiesFormProperties {

		/** Employee's preferred or chosen ethnicity or race.<br  />Max length: 40. */
		description: FormControl<string | null | undefined>,
	}
	export function CreateSensitiveDataEthnicityEthnicRacialIdentitiesFormGroup() {
		return new FormGroup<SensitiveDataEthnicityEthnicRacialIdentitiesFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SensitiveDataGender {

		/** Specifies whether employee's preferred pronouns will be displayed to co-workers in Community, Directory, etc. Values include:<br  /><br  />0 = No<br  />1 = Yes */
		displayPronouns?: boolean | null;

		/** Employee's preferred or chosen gender identification.<br  />Max length: 40 */
		genderIdentityDescription?: string | null;

		/** Employee's self-identification of legal gender. Numerical values include:<br  /><br  />0 = No<br  />1 = Yes<br  />2 = Prefer not to say */
		identifyAsLegalGender?: string | null;

		/** Employee's legal gender. Values include:<br  /><br  />M = Male<br  />F = Female<br  /><br  />Valid values can be obtained from Company Codes endpoint, codeResource = legalGender */
		legalGender?: string | null;

		/** Employee's preferred or chosen pronouns. Values include:<br  /><br  />He / Him / His<br  />She / Her / Hers<br  />They / Them / Theirs<br  />Prefer not to say<br  /><br  />Valid values can be obtained from Company Codes endpoint, codeResource = preferredPronouns */
		pronouns?: string | null;

		/** Employee's self-identification of sexual orientation. Values may include values below. Additionally, any custom value may be provided.<br  /><br  />Asexual<br  />Gay / Lesbian<br  />Heterosexual / Straight<br  />Pansexual<br  />Queer<br  />Bisexual<br  />Prefer not to say */
		sexualOrientation?: string | null;
	}
	export interface SensitiveDataGenderFormProperties {

		/** Specifies whether employee's preferred pronouns will be displayed to co-workers in Community, Directory, etc. Values include:<br  /><br  />0 = No<br  />1 = Yes */
		displayPronouns: FormControl<boolean | null | undefined>,

		/** Employee's preferred or chosen gender identification.<br  />Max length: 40 */
		genderIdentityDescription: FormControl<string | null | undefined>,

		/** Employee's self-identification of legal gender. Numerical values include:<br  /><br  />0 = No<br  />1 = Yes<br  />2 = Prefer not to say */
		identifyAsLegalGender: FormControl<string | null | undefined>,

		/** Employee's legal gender. Values include:<br  /><br  />M = Male<br  />F = Female<br  /><br  />Valid values can be obtained from Company Codes endpoint, codeResource = legalGender */
		legalGender: FormControl<string | null | undefined>,

		/** Employee's preferred or chosen pronouns. Values include:<br  /><br  />He / Him / His<br  />She / Her / Hers<br  />They / Them / Theirs<br  />Prefer not to say<br  /><br  />Valid values can be obtained from Company Codes endpoint, codeResource = preferredPronouns */
		pronouns: FormControl<string | null | undefined>,

		/** Employee's self-identification of sexual orientation. Values may include values below. Additionally, any custom value may be provided.<br  /><br  />Asexual<br  />Gay / Lesbian<br  />Heterosexual / Straight<br  />Pansexual<br  />Queer<br  />Bisexual<br  />Prefer not to say */
		sexualOrientation: FormControl<string | null | undefined>,
	}
	export function CreateSensitiveDataGenderFormGroup() {
		return new FormGroup<SensitiveDataGenderFormProperties>({
			displayPronouns: new FormControl<boolean | null | undefined>(undefined),
			genderIdentityDescription: new FormControl<string | null | undefined>(undefined),
			identifyAsLegalGender: new FormControl<string | null | undefined>(undefined),
			legalGender: new FormControl<string | null | undefined>(undefined),
			pronouns: new FormControl<string | null | undefined>(undefined),
			sexualOrientation: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SensitiveDataVeteran {

		/** Indicates if the employee is a veteran.  Values include:<br  /><br  />0 = No<br  />1 = Yes<br  />2 = Prefer not to say */
		isVeteran?: string | null;

		/** Employee's Veteran Notes<br  />Max length: 50 */
		veteran?: string | null;
	}
	export interface SensitiveDataVeteranFormProperties {

		/** Indicates if the employee is a veteran.  Values include:<br  /><br  />0 = No<br  />1 = Yes<br  />2 = Prefer not to say */
		isVeteran: FormControl<string | null | undefined>,

		/** Employee's Veteran Notes<br  />Max length: 50 */
		veteran: FormControl<string | null | undefined>,
	}
	export function CreateSensitiveDataVeteranFormGroup() {
		return new FormGroup<SensitiveDataVeteranFormProperties>({
			isVeteran: new FormControl<string | null | undefined>(undefined),
			veteran: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The staged employee model */
	export interface StagedEmployee {

		/**
		 * Add up to 19 direct deposit accounts in addition to the main direct deposit account. IMPORTANT: A direct deposit update will remove ALL existing main and additional direct deposit information in WebPay and replace with information provided on the request. GET API will not return direct deposit data.
		 * Maximum items: 4
		 */
		StagedEmployeeAdditionalDirectDeposit?: Array<StagedEmployeeAdditionalDirectDeposit>;

		/**
		 * Add setup values used for employee benefits integration, insurance plan settings, and ACA reporting.
		 * Maximum items: 1
		 */
		StagedEmployeeBenefitSetup?: Array<StagedEmployeeBenefitSetup>;

		/** Employee birthdate. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*. */
		birthDate?: string | null;

		/**
		 * Up to 8 custom fields of boolean (checkbox) type value.
		 * Maximum items: 8
		 */
		StagedEmployeeCustomBooleanFields?: Array<StagedEmployeeCustomBooleanFields>;

		/**
		 * Up to 8 custom fields of the date type value.
		 * Maximum items: 8
		 */
		StagedEmployeeCustomDateFields?: Array<StagedEmployeeCustomDateFields>;

		/**
		 * Up to 8 custom fields of the dropdown type value.
		 * Maximum items: 8
		 */
		StagedEmployeeCustomDropDownFields?: Array<StagedEmployeeCustomDropDownFields>;

		/**
		 * Up to 8 custom fields of numeric type value.
		 * Maximum items: 8
		 */
		StagedEmployeeCustomNumberFields?: Array<StagedEmployeeCustomNumberFields>;

		/**
		 * Up to 8 custom fields of text type value.
		 * Maximum items: 8
		 */
		StagedEmployeeCustomTextFields?: Array<StagedEmployeeCustomTextFields>;

		/**
		 * Add home department cost center, position, supervisor, reviewer, employment type, EEO class, pay settings, and union information.
		 * Maximum items: 1
		 */
		StagedEmployeeDepartmentPosition?: Array<StagedEmployeeDepartmentPosition>;

		/** Indicates if employee has disability status. */
		disabilityDescription?: string | null;

		/** Leave blank to have Web Pay automatically assign the next available employee ID.<br  /> Max length: 10 */
		employeeId?: string | null;

		/** Employee ethnicity.<br  /> Max length: 10 */
		ethnicity?: string | null;

		/**
		 * Add federal tax amount type (taxCalculationCode), amount or percentage, filing status, and exemptions.
		 * Maximum items: 1
		 */
		StagedEmployeeFederalTax?: Array<StagedEmployeeFederalTax>;

		/** Employee first name. <br  />Max length: 40 */
		firstName?: string | null;

		/** Reason code for FITW exemption. Common values are *SE* (Statutory employee), *CR* (clergy/Religious). <br  /> Max length: 30 */
		fitwExemptReason?: string | null;

		/** Reason code for FUTA exemption. Common values are *501* (5019c)(3) Organization), *IC* (Independent Contractor).<br  /> Max length: 30 */
		futaExemptReason?: string | null;

		/** Employee gender. Common values *M* (Male), *F* (Female). <br  />Max length: 1 */
		gender?: string | null;

		/**
		 * Add employee's home address, personal phone numbers, and personal email.
		 * Maximum items: 1
		 */
		StagedEmployeeHomeAddress?: Array<StagedEmployeeHomeAddress>;

		/** Indicates if employee in agriculture or farming. */
		isEmployee943?: boolean | null;

		/** Indicates if employee is a smoker. */
		isSmoker?: boolean | null;

		/** Employee last name. <br  />Max length: 40 */
		lastName?: string | null;

		/**
		 * Add local tax code, filing status, and exemptions including PA-PSD taxes.
		 * Maximum items: 5
		 */
		StagedEmployeeLocalTax?: Array<StagedEmployeeLocalTax>;

		/**
		 * Add the main direct deposit account. After deposits are made to any additional direct deposit accounts, the remaining net check is deposited in the main direct deposit account. IMPORTANT: A direct deposit update will remove ALL existing main and additional direct deposit information in WebPay and replace with what is provided on the request. GET API will not return direct deposit data.
		 * Maximum items: 1
		 */
		StagedEmployeeMainDirectDeposit?: Array<StagedEmployeeMainDirectDeposit>;

		/** Employee marital status. Common values *D (Divorced), M (Married), S (Single), W (Widowed)*. <br  />Max length: 10 */
		maritalStatus?: string | null;

		/** Reason code for Medicare exemption. Common values are *501* (5019c)(3) Organization), *IC* (Independent Contractor).<br  /> Max length: 30 */
		medExemptReason?: string | null;

		/** Employee middle name.<br  /> Max length: 20 */
		middleName?: string | null;

		/**
		 * Add non-primary state tax code, amount type (taxCalculationCode), amount or percentage, filing status, exemptions, supplemental check (specialCheckCalc), and reciprocity code information.
		 * Maximum items: 1
		 */
		StagedEmployeeNonPrimaryStateTax?: Array<StagedEmployeeNonPrimaryStateTax>;

		/** Employee preferred display name.<br  /> Max length: 20 */
		preferredName?: string | null;

		/**
		 * Add hourly or salary pay rate, effective date, and pay frequency.
		 * Maximum items: 1
		 */
		StagedEmployeePrimaryPayRate?: Array<StagedEmployeePrimaryPayRate>;

		/**
		 * Add primary state tax code, amount type (taxCalculationCode), amount or percentage, filing status, exemptions, and supplemental check (specialCheckCalc) information. Only one primary state is allowed.
		 * Maximum items: 1
		 */
		StagedEmployeePrimaryStateTax?: Array<StagedEmployeePrimaryStateTax>;

		/** Prior last name if applicable.<br  />Max length: 40 */
		priorLastName?: string | null;

		/** Employee preferred salutation. <br  />Max length: 10 */
		salutation?: string | null;

		/** Reason code for SITW exemption. Common values are *SE* (Statutory employee), *CR* (clergy/Religious). <br  /> Max length: 30 */
		sitwExemptReason?: string | null;

		/** Reason code for Social Security exemption. Common values are *SE* (Statutory employee), *CR* (clergy/Religious). <br  /> Max length: 30 */
		ssExemptReason?: string | null;

		/** Employee social security number. Leave it blank if valid social security number not available. <br  />Max length: 11 */
		ssn?: string | null;

		/**
		 * Add employee status, change reason, effective date, and adjusted seniority date. Note that companies that are still in Implementation cannot hire future employees.
		 * Maximum items: 1
		 */
		StagedEmployeeStatus?: Array<StagedEmployeeStatus>;

		/** Employee name suffix. Common values are *Jr, Sr, II*.<br  />Max length: 30 */
		suffix?: string | null;

		/** Reason code for SUI exemption. Common values are *SE* (Statutory employee), *CR* (clergy/Religious). <br  /> Max length: 30 */
		suiExemptReason?: string | null;

		/** Employee SUI (State Unemployment Insurance) state. <br  />Max length: 2 */
		suiState?: string | null;

		/** Employee 1099R distribution code. Common values are *7* (Normal Distribution), *F* (Charitable Gift Annuity). <br  />Max length: 1 */
		taxDistributionCode1099R?: string | null;

		/** Employee tax form for reporting income. Valid values are *W2, 1099M, 1099R*. Default is W2. <br  />Max length: 15 */
		taxForm?: string | null;

		/** Indicates if employee is a veteran. */
		veteranDescription?: string | null;

		/** Add Web Time badge number and charge rate and synchronize Web Pay and Web Time employee data. */
		webTime?: StagedEmployeeWebTime;

		/**
		 * Add employee's work address, phone numbers, and email. Work Location drop down field is not included.
		 * Maximum items: 1
		 */
		StagedEmployeeWorkAddress?: Array<StagedEmployeeWorkAddress>;

		/**
		 * Add I-9 work authorization information.
		 * Maximum items: 1
		 */
		StagedEmployeeWorkEligibility?: Array<StagedEmployeeWorkEligibility>;
	}

	/** The staged employee model */
	export interface StagedEmployeeFormProperties {

		/** Employee birthdate. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*. */
		birthDate: FormControl<string | null | undefined>,

		/** Indicates if employee has disability status. */
		disabilityDescription: FormControl<string | null | undefined>,

		/** Leave blank to have Web Pay automatically assign the next available employee ID.<br  /> Max length: 10 */
		employeeId: FormControl<string | null | undefined>,

		/** Employee ethnicity.<br  /> Max length: 10 */
		ethnicity: FormControl<string | null | undefined>,

		/** Employee first name. <br  />Max length: 40 */
		firstName: FormControl<string | null | undefined>,

		/** Reason code for FITW exemption. Common values are *SE* (Statutory employee), *CR* (clergy/Religious). <br  /> Max length: 30 */
		fitwExemptReason: FormControl<string | null | undefined>,

		/** Reason code for FUTA exemption. Common values are *501* (5019c)(3) Organization), *IC* (Independent Contractor).<br  /> Max length: 30 */
		futaExemptReason: FormControl<string | null | undefined>,

		/** Employee gender. Common values *M* (Male), *F* (Female). <br  />Max length: 1 */
		gender: FormControl<string | null | undefined>,

		/** Indicates if employee in agriculture or farming. */
		isEmployee943: FormControl<boolean | null | undefined>,

		/** Indicates if employee is a smoker. */
		isSmoker: FormControl<boolean | null | undefined>,

		/** Employee last name. <br  />Max length: 40 */
		lastName: FormControl<string | null | undefined>,

		/** Employee marital status. Common values *D (Divorced), M (Married), S (Single), W (Widowed)*. <br  />Max length: 10 */
		maritalStatus: FormControl<string | null | undefined>,

		/** Reason code for Medicare exemption. Common values are *501* (5019c)(3) Organization), *IC* (Independent Contractor).<br  /> Max length: 30 */
		medExemptReason: FormControl<string | null | undefined>,

		/** Employee middle name.<br  /> Max length: 20 */
		middleName: FormControl<string | null | undefined>,

		/** Employee preferred display name.<br  /> Max length: 20 */
		preferredName: FormControl<string | null | undefined>,

		/** Prior last name if applicable.<br  />Max length: 40 */
		priorLastName: FormControl<string | null | undefined>,

		/** Employee preferred salutation. <br  />Max length: 10 */
		salutation: FormControl<string | null | undefined>,

		/** Reason code for SITW exemption. Common values are *SE* (Statutory employee), *CR* (clergy/Religious). <br  /> Max length: 30 */
		sitwExemptReason: FormControl<string | null | undefined>,

		/** Reason code for Social Security exemption. Common values are *SE* (Statutory employee), *CR* (clergy/Religious). <br  /> Max length: 30 */
		ssExemptReason: FormControl<string | null | undefined>,

		/** Employee social security number. Leave it blank if valid social security number not available. <br  />Max length: 11 */
		ssn: FormControl<string | null | undefined>,

		/** Employee name suffix. Common values are *Jr, Sr, II*.<br  />Max length: 30 */
		suffix: FormControl<string | null | undefined>,

		/** Reason code for SUI exemption. Common values are *SE* (Statutory employee), *CR* (clergy/Religious). <br  /> Max length: 30 */
		suiExemptReason: FormControl<string | null | undefined>,

		/** Employee SUI (State Unemployment Insurance) state. <br  />Max length: 2 */
		suiState: FormControl<string | null | undefined>,

		/** Employee 1099R distribution code. Common values are *7* (Normal Distribution), *F* (Charitable Gift Annuity). <br  />Max length: 1 */
		taxDistributionCode1099R: FormControl<string | null | undefined>,

		/** Employee tax form for reporting income. Valid values are *W2, 1099M, 1099R*. Default is W2. <br  />Max length: 15 */
		taxForm: FormControl<string | null | undefined>,

		/** Indicates if employee is a veteran. */
		veteranDescription: FormControl<string | null | undefined>,
	}
	export function CreateStagedEmployeeFormGroup() {
		return new FormGroup<StagedEmployeeFormProperties>({
			birthDate: new FormControl<string | null | undefined>(undefined),
			disabilityDescription: new FormControl<string | null | undefined>(undefined),
			employeeId: new FormControl<string | null | undefined>(undefined),
			ethnicity: new FormControl<string | null | undefined>(undefined),
			firstName: new FormControl<string | null | undefined>(undefined),
			fitwExemptReason: new FormControl<string | null | undefined>(undefined),
			futaExemptReason: new FormControl<string | null | undefined>(undefined),
			gender: new FormControl<string | null | undefined>(undefined),
			isEmployee943: new FormControl<boolean | null | undefined>(undefined),
			isSmoker: new FormControl<boolean | null | undefined>(undefined),
			lastName: new FormControl<string | null | undefined>(undefined),
			maritalStatus: new FormControl<string | null | undefined>(undefined),
			medExemptReason: new FormControl<string | null | undefined>(undefined),
			middleName: new FormControl<string | null | undefined>(undefined),
			preferredName: new FormControl<string | null | undefined>(undefined),
			priorLastName: new FormControl<string | null | undefined>(undefined),
			salutation: new FormControl<string | null | undefined>(undefined),
			sitwExemptReason: new FormControl<string | null | undefined>(undefined),
			ssExemptReason: new FormControl<string | null | undefined>(undefined),
			ssn: new FormControl<string | null | undefined>(undefined),
			suffix: new FormControl<string | null | undefined>(undefined),
			suiExemptReason: new FormControl<string | null | undefined>(undefined),
			suiState: new FormControl<string | null | undefined>(undefined),
			taxDistributionCode1099R: new FormControl<string | null | undefined>(undefined),
			taxForm: new FormControl<string | null | undefined>(undefined),
			veteranDescription: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StagedEmployeeAdditionalDirectDeposit {

		/** Account number, entered without special characters and spaces. <br  />Max length: 17<br /> */
		accountNumber?: string | null;

		/** Account type. Valid values are *C* (Checking), *S* (Saving), *P* (Pay Card). <br   />Max length: 1<br /> */
		accountType?: string | null;

		/**
		 * Amount value to be deposited to the account.<br  />Decimal (12,2)<br />
		 * Type: double
		 */
		amount?: number | null;

		/** Amount type to indicate the context of the amount. Common values are *F* (FLAT), *F-* (Net Minus), *P* (Percent). <br  /> Max length: 5<br /> */
		amountType?: string | null;

		/** Indicates if account will not pre-note.<br /> */
		isSkipPreNote?: boolean | null;

		/** Date to end the pre-note of the account. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*.<br /> */
		preNoteDate?: string | null;

		/** ABA Transit Routing Number, entered without dashes or spaces. <br  />Max length: 9<br /> */
		routingNumber?: string | null;
	}
	export interface StagedEmployeeAdditionalDirectDepositFormProperties {

		/** Account number, entered without special characters and spaces. <br  />Max length: 17<br /> */
		accountNumber: FormControl<string | null | undefined>,

		/** Account type. Valid values are *C* (Checking), *S* (Saving), *P* (Pay Card). <br   />Max length: 1<br /> */
		accountType: FormControl<string | null | undefined>,

		/**
		 * Amount value to be deposited to the account.<br  />Decimal (12,2)<br />
		 * Type: double
		 */
		amount: FormControl<number | null | undefined>,

		/** Amount type to indicate the context of the amount. Common values are *F* (FLAT), *F-* (Net Minus), *P* (Percent). <br  /> Max length: 5<br /> */
		amountType: FormControl<string | null | undefined>,

		/** Indicates if account will not pre-note.<br /> */
		isSkipPreNote: FormControl<boolean | null | undefined>,

		/** Date to end the pre-note of the account. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*.<br /> */
		preNoteDate: FormControl<string | null | undefined>,

		/** ABA Transit Routing Number, entered without dashes or spaces. <br  />Max length: 9<br /> */
		routingNumber: FormControl<string | null | undefined>,
	}
	export function CreateStagedEmployeeAdditionalDirectDepositFormGroup() {
		return new FormGroup<StagedEmployeeAdditionalDirectDepositFormProperties>({
			accountNumber: new FormControl<string | null | undefined>(undefined),
			accountType: new FormControl<string | null | undefined>(undefined),
			amount: new FormControl<number | null | undefined>(undefined),
			amountType: new FormControl<string | null | undefined>(undefined),
			isSkipPreNote: new FormControl<boolean | null | undefined>(undefined),
			preNoteDate: new FormControl<string | null | undefined>(undefined),
			routingNumber: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StagedEmployeeBenefitSetup {

		/** Benefit Class code. Values are configured in Web Pay Company > Setup > Benefits > Classes.<br  />Max length: 30 */
		benefitClass?: string | null;

		/** Date when Benefit Class takes effect. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*. */
		benefitClassEffectiveDate?: string | null;

		/**
		 * Salary used to configure benefits.<br  />Decimal(12,2)
		 * Type: double
		 */
		benefitSalary?: number | null;

		/** Date when Benefit Salary takes effect. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*. */
		benefitSalaryEffectiveDate?: string | null;

		/** Applicable only for ACA Enhanced clients and Benefit Classes with ACA Employment Type of Full Time. */
		doNotApplyAdministrativePeriod?: boolean | null;

		/** Only valid for ACA Enhanced clients and Benefit Classes that are ACA Employment Type of Full Time. */
		isMeasureAcaEligibility?: boolean | null;
	}
	export interface StagedEmployeeBenefitSetupFormProperties {

		/** Benefit Class code. Values are configured in Web Pay Company > Setup > Benefits > Classes.<br  />Max length: 30 */
		benefitClass: FormControl<string | null | undefined>,

		/** Date when Benefit Class takes effect. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*. */
		benefitClassEffectiveDate: FormControl<string | null | undefined>,

		/**
		 * Salary used to configure benefits.<br  />Decimal(12,2)
		 * Type: double
		 */
		benefitSalary: FormControl<number | null | undefined>,

		/** Date when Benefit Salary takes effect. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*. */
		benefitSalaryEffectiveDate: FormControl<string | null | undefined>,

		/** Applicable only for ACA Enhanced clients and Benefit Classes with ACA Employment Type of Full Time. */
		doNotApplyAdministrativePeriod: FormControl<boolean | null | undefined>,

		/** Only valid for ACA Enhanced clients and Benefit Classes that are ACA Employment Type of Full Time. */
		isMeasureAcaEligibility: FormControl<boolean | null | undefined>,
	}
	export function CreateStagedEmployeeBenefitSetupFormGroup() {
		return new FormGroup<StagedEmployeeBenefitSetupFormProperties>({
			benefitClass: new FormControl<string | null | undefined>(undefined),
			benefitClassEffectiveDate: new FormControl<string | null | undefined>(undefined),
			benefitSalary: new FormControl<number | null | undefined>(undefined),
			benefitSalaryEffectiveDate: new FormControl<string | null | undefined>(undefined),
			doNotApplyAdministrativePeriod: new FormControl<boolean | null | undefined>(undefined),
			isMeasureAcaEligibility: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface StagedEmployeeCustomBooleanFields {

		/**
		 * The custom field category.  Acceptable value is 'PayrollAndHR'.
		 * Required
		 */
		category: EmployeeCustomBooleanFieldsCategory;

		/**
		 * The custom field label whose value is to be added/updated. Must match to the label defined in Web Pay Custom Fields setup.  Max length: 255.
		 * Required
		 */
		label: string;

		/**
		 * The custom boolean field value.
		 * Required
		 */
		value: boolean;
	}
	export interface StagedEmployeeCustomBooleanFieldsFormProperties {

		/**
		 * The custom field category.  Acceptable value is 'PayrollAndHR'.
		 * Required
		 */
		category: FormControl<EmployeeCustomBooleanFieldsCategory | null | undefined>,

		/**
		 * The custom field label whose value is to be added/updated. Must match to the label defined in Web Pay Custom Fields setup.  Max length: 255.
		 * Required
		 */
		label: FormControl<string | null | undefined>,

		/**
		 * The custom boolean field value.
		 * Required
		 */
		value: FormControl<boolean | null | undefined>,
	}
	export function CreateStagedEmployeeCustomBooleanFieldsFormGroup() {
		return new FormGroup<StagedEmployeeCustomBooleanFieldsFormProperties>({
			category: new FormControl<EmployeeCustomBooleanFieldsCategory | null | undefined>(undefined, [Validators.required]),
			label: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface StagedEmployeeCustomDateFields {

		/**
		 * The custom field category.  Acceptable value is 'PayrollAndHR'.
		 * Required
		 */
		category: EmployeeCustomBooleanFieldsCategory;

		/**
		 * The custom field label whose value is to be added/updated.  Must match to the label defined in Web Pay Custom Fields setup.  Max length: 255.
		 * Required
		 */
		label: string;

		/**
		 * The custom date field value.  Common formats include MM-DD-CCYY, CCYY-MM-DD.
		 * Required
		 */
		value: string;
	}
	export interface StagedEmployeeCustomDateFieldsFormProperties {

		/**
		 * The custom field category.  Acceptable value is 'PayrollAndHR'.
		 * Required
		 */
		category: FormControl<EmployeeCustomBooleanFieldsCategory | null | undefined>,

		/**
		 * The custom field label whose value is to be added/updated.  Must match to the label defined in Web Pay Custom Fields setup.  Max length: 255.
		 * Required
		 */
		label: FormControl<string | null | undefined>,

		/**
		 * The custom date field value.  Common formats include MM-DD-CCYY, CCYY-MM-DD.
		 * Required
		 */
		value: FormControl<string | null | undefined>,
	}
	export function CreateStagedEmployeeCustomDateFieldsFormGroup() {
		return new FormGroup<StagedEmployeeCustomDateFieldsFormProperties>({
			category: new FormControl<EmployeeCustomBooleanFieldsCategory | null | undefined>(undefined, [Validators.required]),
			label: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface StagedEmployeeCustomDropDownFields {

		/**
		 * The custom field category.  Acceptable value is 'PayrollAndHR'.
		 * Required
		 */
		category: EmployeeCustomBooleanFieldsCategory;

		/**
		 * The custom field label whose value is to be added/updated.  Must match to the label defined in Web Pay Custom Fields setup.  Max length: 255.
		 * Required
		 */
		label: string;

		/**
		 * The custom dropdown field value.  Values are configured in Web Pay Company > Setup > List Values > Lookup Values > Custom Fields: PayrollAndHR.  Max length: 10.
		 * Required
		 */
		value: string;
	}
	export interface StagedEmployeeCustomDropDownFieldsFormProperties {

		/**
		 * The custom field category.  Acceptable value is 'PayrollAndHR'.
		 * Required
		 */
		category: FormControl<EmployeeCustomBooleanFieldsCategory | null | undefined>,

		/**
		 * The custom field label whose value is to be added/updated.  Must match to the label defined in Web Pay Custom Fields setup.  Max length: 255.
		 * Required
		 */
		label: FormControl<string | null | undefined>,

		/**
		 * The custom dropdown field value.  Values are configured in Web Pay Company > Setup > List Values > Lookup Values > Custom Fields: PayrollAndHR.  Max length: 10.
		 * Required
		 */
		value: FormControl<string | null | undefined>,
	}
	export function CreateStagedEmployeeCustomDropDownFieldsFormGroup() {
		return new FormGroup<StagedEmployeeCustomDropDownFieldsFormProperties>({
			category: new FormControl<EmployeeCustomBooleanFieldsCategory | null | undefined>(undefined, [Validators.required]),
			label: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface StagedEmployeeCustomNumberFields {

		/**
		 * The custom field category.  Acceptable value is 'PayrollAndHR'.
		 * Required
		 */
		category: EmployeeCustomBooleanFieldsCategory;

		/**
		 * The custom field label whose value is to be added/updated.  Must match to the label defined in Web Pay Custom Fields setup.  Max length: 255.
		 * Required
		 */
		label: string;

		/**
		 * The custom number field value.  Decimal (18,6).
		 * Required
		 * Type: double
		 */
		value: number;
	}
	export interface StagedEmployeeCustomNumberFieldsFormProperties {

		/**
		 * The custom field category.  Acceptable value is 'PayrollAndHR'.
		 * Required
		 */
		category: FormControl<EmployeeCustomBooleanFieldsCategory | null | undefined>,

		/**
		 * The custom field label whose value is to be added/updated.  Must match to the label defined in Web Pay Custom Fields setup.  Max length: 255.
		 * Required
		 */
		label: FormControl<string | null | undefined>,

		/**
		 * The custom number field value.  Decimal (18,6).
		 * Required
		 * Type: double
		 */
		value: FormControl<number | null | undefined>,
	}
	export function CreateStagedEmployeeCustomNumberFieldsFormGroup() {
		return new FormGroup<StagedEmployeeCustomNumberFieldsFormProperties>({
			category: new FormControl<EmployeeCustomBooleanFieldsCategory | null | undefined>(undefined, [Validators.required]),
			label: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface StagedEmployeeCustomTextFields {

		/**
		 * The custom field category.  Acceptable value is 'PayrollAndHR'.
		 * Required
		 */
		category: EmployeeCustomBooleanFieldsCategory;

		/**
		 * The custom field label whose value is to be added/updated.  Must match to the label defined in Web Pay Custom Fields setup.  Max length: 255.
		 * Required
		 */
		label: string;

		/**
		 * The custom text field value.  Max length: 255.
		 * Required
		 */
		value: string;
	}
	export interface StagedEmployeeCustomTextFieldsFormProperties {

		/**
		 * The custom field category.  Acceptable value is 'PayrollAndHR'.
		 * Required
		 */
		category: FormControl<EmployeeCustomBooleanFieldsCategory | null | undefined>,

		/**
		 * The custom field label whose value is to be added/updated.  Must match to the label defined in Web Pay Custom Fields setup.  Max length: 255.
		 * Required
		 */
		label: FormControl<string | null | undefined>,

		/**
		 * The custom text field value.  Max length: 255.
		 * Required
		 */
		value: FormControl<string | null | undefined>,
	}
	export function CreateStagedEmployeeCustomTextFieldsFormGroup() {
		return new FormGroup<StagedEmployeeCustomTextFieldsFormProperties>({
			category: new FormControl<EmployeeCustomBooleanFieldsCategory | null | undefined>(undefined, [Validators.required]),
			label: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface StagedEmployeeDepartmentPosition {

		/** Employee department/position change reason. Must match Company setup. <br  />Max length: 15 */
		changeReason?: string | null;

		/** Employee clock badge number. Defaults to employeeId. <br  />Max length: 10 */
		clockBadgeNumber?: string | null;

		/** Employer defined location, like *branch, division, department*, etc. Must match Company setup. <br  />Max length: 10 */
		costCenter1?: string | null;

		/** Employer defined location, like *branch, division, department*, etc. Must match Company setup. <br  />Max length: 10 */
		costCenter2?: string | null;

		/** Employer defined location, like *branch, division, department*, etc. Must match Company setup. <br  />Max length: 10 */
		costCenter3?: string | null;

		/** The date the position takes effect. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*. */
		effectiveDate?: string | null;

		/** Employee current employment type. Common values *RFT (Regular Full Time), RPT (Regular Part Time), SNL (Seasonal), TFT (Temporary Full Time), TPT (Temporary Part Time)*. <br  />Max length: 10 */
		employeeType?: string | null;

		/** Values are configured in Company > Setup > HR > EEO Classes.<br  /> Max length: 10 */
		equalEmploymentOpportunityClass?: string | null;

		/** Indicates if employee is exempt from minimum wage. */
		isMinimumWageExempt?: boolean | null;

		/** Indicates if employee is exempt from overtime. */
		isOvertimeExempt?: boolean | null;

		/** Indicates if employee is a supervisor or reviewer. */
		isSupervisorReviewer?: boolean | null;

		/** Indicates if union dues are collected. */
		isUnionDuesCollected?: boolean | null;

		/** Indicates if initiations fees are collected. */
		isUnionInitiationCollected?: boolean | null;

		/** Employee current job title. <br  />Max length: 50 */
		jobTitle?: string | null;

		/** Employee pay group. Must match Company setup. <br  /> Max length: 20 */
		payGroup?: string | null;

		/** Employee position code. Must match Company setup.<br  />Max length: 20 */
		positionCode?: string | null;

		/** Employee work shift.<br  />Max length: 255 */
		shift?: string | null;

		/** Supervisor's company number. Defaults to employee company number.<br  />Max length: 9 */
		supervisorCompanyNumber?: string | null;

		/** EmployeeId of the supervisor. <br  />Max length: 10 */
		supervisorEmployeeId?: string | null;

		/** Indicates if employee receives tips. */
		tipped?: string | null;

		/** Employee union affiliation effective date. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*. */
		unionAffiliationDate?: string | null;

		/** Employee union code. Must match Company setup. <br  />Max length: 10 */
		unionCode?: string | null;

		/** Employee union position. Must match Company setup. <br  />Max length: 30 */
		unionPosition?: string | null;

		/** Employee worker compensation code. Must match Company setup.<br  /> Max length: 10 */
		workersCompensation?: string | null;
	}
	export interface StagedEmployeeDepartmentPositionFormProperties {

		/** Employee department/position change reason. Must match Company setup. <br  />Max length: 15 */
		changeReason: FormControl<string | null | undefined>,

		/** Employee clock badge number. Defaults to employeeId. <br  />Max length: 10 */
		clockBadgeNumber: FormControl<string | null | undefined>,

		/** Employer defined location, like *branch, division, department*, etc. Must match Company setup. <br  />Max length: 10 */
		costCenter1: FormControl<string | null | undefined>,

		/** Employer defined location, like *branch, division, department*, etc. Must match Company setup. <br  />Max length: 10 */
		costCenter2: FormControl<string | null | undefined>,

		/** Employer defined location, like *branch, division, department*, etc. Must match Company setup. <br  />Max length: 10 */
		costCenter3: FormControl<string | null | undefined>,

		/** The date the position takes effect. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*. */
		effectiveDate: FormControl<string | null | undefined>,

		/** Employee current employment type. Common values *RFT (Regular Full Time), RPT (Regular Part Time), SNL (Seasonal), TFT (Temporary Full Time), TPT (Temporary Part Time)*. <br  />Max length: 10 */
		employeeType: FormControl<string | null | undefined>,

		/** Values are configured in Company > Setup > HR > EEO Classes.<br  /> Max length: 10 */
		equalEmploymentOpportunityClass: FormControl<string | null | undefined>,

		/** Indicates if employee is exempt from minimum wage. */
		isMinimumWageExempt: FormControl<boolean | null | undefined>,

		/** Indicates if employee is exempt from overtime. */
		isOvertimeExempt: FormControl<boolean | null | undefined>,

		/** Indicates if employee is a supervisor or reviewer. */
		isSupervisorReviewer: FormControl<boolean | null | undefined>,

		/** Indicates if union dues are collected. */
		isUnionDuesCollected: FormControl<boolean | null | undefined>,

		/** Indicates if initiations fees are collected. */
		isUnionInitiationCollected: FormControl<boolean | null | undefined>,

		/** Employee current job title. <br  />Max length: 50 */
		jobTitle: FormControl<string | null | undefined>,

		/** Employee pay group. Must match Company setup. <br  /> Max length: 20 */
		payGroup: FormControl<string | null | undefined>,

		/** Employee position code. Must match Company setup.<br  />Max length: 20 */
		positionCode: FormControl<string | null | undefined>,

		/** Employee work shift.<br  />Max length: 255 */
		shift: FormControl<string | null | undefined>,

		/** Supervisor's company number. Defaults to employee company number.<br  />Max length: 9 */
		supervisorCompanyNumber: FormControl<string | null | undefined>,

		/** EmployeeId of the supervisor. <br  />Max length: 10 */
		supervisorEmployeeId: FormControl<string | null | undefined>,

		/** Indicates if employee receives tips. */
		tipped: FormControl<string | null | undefined>,

		/** Employee union affiliation effective date. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*. */
		unionAffiliationDate: FormControl<string | null | undefined>,

		/** Employee union code. Must match Company setup. <br  />Max length: 10 */
		unionCode: FormControl<string | null | undefined>,

		/** Employee union position. Must match Company setup. <br  />Max length: 30 */
		unionPosition: FormControl<string | null | undefined>,

		/** Employee worker compensation code. Must match Company setup.<br  /> Max length: 10 */
		workersCompensation: FormControl<string | null | undefined>,
	}
	export function CreateStagedEmployeeDepartmentPositionFormGroup() {
		return new FormGroup<StagedEmployeeDepartmentPositionFormProperties>({
			changeReason: new FormControl<string | null | undefined>(undefined),
			clockBadgeNumber: new FormControl<string | null | undefined>(undefined),
			costCenter1: new FormControl<string | null | undefined>(undefined),
			costCenter2: new FormControl<string | null | undefined>(undefined),
			costCenter3: new FormControl<string | null | undefined>(undefined),
			effectiveDate: new FormControl<string | null | undefined>(undefined),
			employeeType: new FormControl<string | null | undefined>(undefined),
			equalEmploymentOpportunityClass: new FormControl<string | null | undefined>(undefined),
			isMinimumWageExempt: new FormControl<boolean | null | undefined>(undefined),
			isOvertimeExempt: new FormControl<boolean | null | undefined>(undefined),
			isSupervisorReviewer: new FormControl<boolean | null | undefined>(undefined),
			isUnionDuesCollected: new FormControl<boolean | null | undefined>(undefined),
			isUnionInitiationCollected: new FormControl<boolean | null | undefined>(undefined),
			jobTitle: new FormControl<string | null | undefined>(undefined),
			payGroup: new FormControl<string | null | undefined>(undefined),
			positionCode: new FormControl<string | null | undefined>(undefined),
			shift: new FormControl<string | null | undefined>(undefined),
			supervisorCompanyNumber: new FormControl<string | null | undefined>(undefined),
			supervisorEmployeeId: new FormControl<string | null | undefined>(undefined),
			tipped: new FormControl<string | null | undefined>(undefined),
			unionAffiliationDate: new FormControl<string | null | undefined>(undefined),
			unionCode: new FormControl<string | null | undefined>(undefined),
			unionPosition: new FormControl<string | null | undefined>(undefined),
			workersCompensation: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StagedEmployeeFederalTax {

		/**
		 * Tax amount. <br  />Decimal (12,2)
		 * Type: double
		 */
		amount?: number | null;

		/**
		 * Box 4(b) on form W4 (year 2020 or later): Deductions amount. <br  />Decimal (12,2)
		 * Type: double
		 */
		deductionsAmount?: number | null;

		/**
		 * Box 3 on form W4 (year 2020 or later): Total dependents amount. <br  />Decimal (12,2)
		 * Type: double
		 */
		dependentsAmount?: number | null;

		/**
		 * Federal tax exemptions value. <br  />Decimal (12,2)
		 * Type: double
		 */
		exemptions?: number | null;

		/** Employee federal filing status. Common values are *S* (Single), *M* (Married).<br  />Max length: 50 */
		filingStatus?: string | null;

		/** Box 2(c) on form W4 (year 2020 or later): Multiple Jobs or Spouse Works. <br  />Boolean */
		higherRate?: boolean | null;

		/**
		 * Box 4(a) on form W4 (year 2020 or later): Other income amount. <br  />Decimal (12,2)
		 * Type: double
		 */
		otherIncomeAmount?: number | null;

		/**
		 * Tax percentage. <br  />Decimal (12,2)
		 * Type: double
		 */
		percentage?: number | null;

		/** Tax calculation code. Common values are *F* (Flat), *P* (Percentage), *FDFP* (Flat Dollar Amount plus Fixed Percentage). <br  />Max length: 10 */
		taxCalculationCode?: string | null;

		/**
		 * The federal W4 form year <br  />Integer
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		w4FormYear?: number | null;
	}
	export interface StagedEmployeeFederalTaxFormProperties {

		/**
		 * Tax amount. <br  />Decimal (12,2)
		 * Type: double
		 */
		amount: FormControl<number | null | undefined>,

		/**
		 * Box 4(b) on form W4 (year 2020 or later): Deductions amount. <br  />Decimal (12,2)
		 * Type: double
		 */
		deductionsAmount: FormControl<number | null | undefined>,

		/**
		 * Box 3 on form W4 (year 2020 or later): Total dependents amount. <br  />Decimal (12,2)
		 * Type: double
		 */
		dependentsAmount: FormControl<number | null | undefined>,

		/**
		 * Federal tax exemptions value. <br  />Decimal (12,2)
		 * Type: double
		 */
		exemptions: FormControl<number | null | undefined>,

		/** Employee federal filing status. Common values are *S* (Single), *M* (Married).<br  />Max length: 50 */
		filingStatus: FormControl<string | null | undefined>,

		/** Box 2(c) on form W4 (year 2020 or later): Multiple Jobs or Spouse Works. <br  />Boolean */
		higherRate: FormControl<boolean | null | undefined>,

		/**
		 * Box 4(a) on form W4 (year 2020 or later): Other income amount. <br  />Decimal (12,2)
		 * Type: double
		 */
		otherIncomeAmount: FormControl<number | null | undefined>,

		/**
		 * Tax percentage. <br  />Decimal (12,2)
		 * Type: double
		 */
		percentage: FormControl<number | null | undefined>,

		/** Tax calculation code. Common values are *F* (Flat), *P* (Percentage), *FDFP* (Flat Dollar Amount plus Fixed Percentage). <br  />Max length: 10 */
		taxCalculationCode: FormControl<string | null | undefined>,

		/**
		 * The federal W4 form year <br  />Integer
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		w4FormYear: FormControl<number | null | undefined>,
	}
	export function CreateStagedEmployeeFederalTaxFormGroup() {
		return new FormGroup<StagedEmployeeFederalTaxFormProperties>({
			amount: new FormControl<number | null | undefined>(undefined),
			deductionsAmount: new FormControl<number | null | undefined>(undefined),
			dependentsAmount: new FormControl<number | null | undefined>(undefined),
			exemptions: new FormControl<number | null | undefined>(undefined),
			filingStatus: new FormControl<string | null | undefined>(undefined),
			higherRate: new FormControl<boolean | null | undefined>(undefined),
			otherIncomeAmount: new FormControl<number | null | undefined>(undefined),
			percentage: new FormControl<number | null | undefined>(undefined),
			taxCalculationCode: new FormControl<string | null | undefined>(undefined),
			w4FormYear: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface StagedEmployeeHomeAddress {

		/** 1st address line.<br  /> Max length: 40 */
		address1?: string | null;

		/** 2nd address line. <br  /> Max length: 40 */
		address2?: string | null;

		/** City.<br  /> Max length: 40 */
		city?: string | null;

		/** Country.<br  /> Max length: 30 */
		country?: string | null;

		/** County.<br  /> Max length: 30 */
		county?: string | null;

		/** Email. <br  />Max length: 50 */
		emailAddress?: string | null;

		/** Mobile phone number.<br  /> Max length: 12 */
		mobilePhone?: string | null;

		/** Phone number.<br  /> Max length: 12 */
		phone?: string | null;

		/** Postal code.<br  /> Max length: 10 */
		postalCode?: string | null;

		/** State or province.<br  /> Max length: 2 */
		state?: string | null;
	}
	export interface StagedEmployeeHomeAddressFormProperties {

		/** 1st address line.<br  /> Max length: 40 */
		address1: FormControl<string | null | undefined>,

		/** 2nd address line. <br  /> Max length: 40 */
		address2: FormControl<string | null | undefined>,

		/** City.<br  /> Max length: 40 */
		city: FormControl<string | null | undefined>,

		/** Country.<br  /> Max length: 30 */
		country: FormControl<string | null | undefined>,

		/** County.<br  /> Max length: 30 */
		county: FormControl<string | null | undefined>,

		/** Email. <br  />Max length: 50 */
		emailAddress: FormControl<string | null | undefined>,

		/** Mobile phone number.<br  /> Max length: 12 */
		mobilePhone: FormControl<string | null | undefined>,

		/** Phone number.<br  /> Max length: 12 */
		phone: FormControl<string | null | undefined>,

		/** Postal code.<br  /> Max length: 10 */
		postalCode: FormControl<string | null | undefined>,

		/** State or province.<br  /> Max length: 2 */
		state: FormControl<string | null | undefined>,
	}
	export function CreateStagedEmployeeHomeAddressFormGroup() {
		return new FormGroup<StagedEmployeeHomeAddressFormProperties>({
			address1: new FormControl<string | null | undefined>(undefined),
			address2: new FormControl<string | null | undefined>(undefined),
			city: new FormControl<string | null | undefined>(undefined),
			country: new FormControl<string | null | undefined>(undefined),
			county: new FormControl<string | null | undefined>(undefined),
			emailAddress: new FormControl<string | null | undefined>(undefined),
			mobilePhone: new FormControl<string | null | undefined>(undefined),
			phone: new FormControl<string | null | undefined>(undefined),
			postalCode: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StagedEmployeeLocalTax {

		/**
		 * Local tax exemptions value.<br  />Decimal (12,2)
		 * Type: double
		 */
		exemptions?: number | null;

		/**
		 * Local tax exemptions 2 value.<br  />Decimal (12,2)
		 * Type: double
		 */
		exemptions2?: number | null;

		/** Employee local tax filing status. Must match specific local tax setup. <br  /> Max length: 50 */
		filingStatus?: string | null;

		/** Resident PSD (political subdivision code) applicable in PA. Must match Company setup.<br  /> Max length: 9 */
		residentPSD?: string | null;

		/** Local tax code.<br  />Max length: 50 */
		taxCode?: string | null;

		/** Work location PSD. Must match Company setup. <br  /> Max length: 9 */
		workPSD?: string | null;
	}
	export interface StagedEmployeeLocalTaxFormProperties {

		/**
		 * Local tax exemptions value.<br  />Decimal (12,2)
		 * Type: double
		 */
		exemptions: FormControl<number | null | undefined>,

		/**
		 * Local tax exemptions 2 value.<br  />Decimal (12,2)
		 * Type: double
		 */
		exemptions2: FormControl<number | null | undefined>,

		/** Employee local tax filing status. Must match specific local tax setup. <br  /> Max length: 50 */
		filingStatus: FormControl<string | null | undefined>,

		/** Resident PSD (political subdivision code) applicable in PA. Must match Company setup.<br  /> Max length: 9 */
		residentPSD: FormControl<string | null | undefined>,

		/** Local tax code.<br  />Max length: 50 */
		taxCode: FormControl<string | null | undefined>,

		/** Work location PSD. Must match Company setup. <br  /> Max length: 9 */
		workPSD: FormControl<string | null | undefined>,
	}
	export function CreateStagedEmployeeLocalTaxFormGroup() {
		return new FormGroup<StagedEmployeeLocalTaxFormProperties>({
			exemptions: new FormControl<number | null | undefined>(undefined),
			exemptions2: new FormControl<number | null | undefined>(undefined),
			filingStatus: new FormControl<string | null | undefined>(undefined),
			residentPSD: new FormControl<string | null | undefined>(undefined),
			taxCode: new FormControl<string | null | undefined>(undefined),
			workPSD: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StagedEmployeeMainDirectDeposit {

		/** Account number, entered without special characters and spaces. <br  />Max length: 17 */
		accountNumber?: string | null;

		/** Account type. Valid values are *C* (Checking), *S* (Saving), *P* (Pay Card). <br   />Max length: 1 */
		accountType?: string | null;

		/** Indicates if account will not pre-note. */
		isSkipPreNote?: boolean | null;

		/** Date to end the pre-note of the account. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*. */
		preNoteDate?: string | null;

		/** ABA Transit Routing Number, entered without dashes or spaces. <br  />Max length: 9 */
		routingNumber?: string | null;
	}
	export interface StagedEmployeeMainDirectDepositFormProperties {

		/** Account number, entered without special characters and spaces. <br  />Max length: 17 */
		accountNumber: FormControl<string | null | undefined>,

		/** Account type. Valid values are *C* (Checking), *S* (Saving), *P* (Pay Card). <br   />Max length: 1 */
		accountType: FormControl<string | null | undefined>,

		/** Indicates if account will not pre-note. */
		isSkipPreNote: FormControl<boolean | null | undefined>,

		/** Date to end the pre-note of the account. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*. */
		preNoteDate: FormControl<string | null | undefined>,

		/** ABA Transit Routing Number, entered without dashes or spaces. <br  />Max length: 9 */
		routingNumber: FormControl<string | null | undefined>,
	}
	export function CreateStagedEmployeeMainDirectDepositFormGroup() {
		return new FormGroup<StagedEmployeeMainDirectDepositFormProperties>({
			accountNumber: new FormControl<string | null | undefined>(undefined),
			accountType: new FormControl<string | null | undefined>(undefined),
			isSkipPreNote: new FormControl<boolean | null | undefined>(undefined),
			preNoteDate: new FormControl<string | null | undefined>(undefined),
			routingNumber: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StagedEmployeeNonPrimaryStateTax {

		/**
		 * State tax code.<br  /> Max length: 50
		 * Type: double
		 */
		amount?: number | null;

		/**
		 * Box 4(b) on form W4 (year 2020 or later): Deductions amount. <br  />Decimal (12,2)
		 * Type: double
		 */
		deductionsAmount?: number | null;

		/**
		 * Box 3 on form W4 (year 2020 or later): Total dependents amount. <br  />Decimal (12,2)
		 * Type: double
		 */
		dependentsAmount?: number | null;

		/**
		 * State tax exemptions value.<br  />Decimal (12,2)
		 * Type: double
		 */
		exemptions?: number | null;

		/**
		 * State tax exemptions 2 value.<br  />Decimal (12,2)
		 * Type: double
		 */
		exemptions2?: number | null;

		/** Employee state tax filing status. Common values are *S* (Single), *M* (Married).<br  />Max length: 50 */
		filingStatus?: string | null;

		/** Box 2(c) on form W4 (year 2020 or later): Multiple Jobs or Spouse Works. <br  />Boolean */
		higherRate?: boolean | null;

		/**
		 * Box 4(a) on form W4 (year 2020 or later): Other income amount. <br  />Decimal (12,2)
		 * Type: double
		 */
		otherIncomeAmount?: number | null;

		/**
		 * State Tax percentage. <br  />Decimal (12,2)
		 * Type: double
		 */
		percentage?: number | null;

		/** Non-primary state tax reciprocity code.<br  /> Max length: 50 */
		reciprocityCode?: string | null;

		/** Supplemental check calculation code. Common values are *Blocked* (Taxes blocked on Supplemental checks), *Supp* (Use supplemental Tax Rate-Code). <br  />Max length: 10 */
		specialCheckCalc?: string | null;

		/** Tax calculation code. Common values are *F* (Flat), *P* (Percentage), *FDFP* (Flat Dollar Amount plus Fixed Percentage). <br  />Max length: 10 */
		taxCalculationCode?: string | null;

		/** State tax code.<br  /> Max length: 50 */
		taxCode?: string | null;

		/**
		 * The state W4 form year <br  />Integer
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		w4FormYear?: number | null;
	}
	export interface StagedEmployeeNonPrimaryStateTaxFormProperties {

		/**
		 * State tax code.<br  /> Max length: 50
		 * Type: double
		 */
		amount: FormControl<number | null | undefined>,

		/**
		 * Box 4(b) on form W4 (year 2020 or later): Deductions amount. <br  />Decimal (12,2)
		 * Type: double
		 */
		deductionsAmount: FormControl<number | null | undefined>,

		/**
		 * Box 3 on form W4 (year 2020 or later): Total dependents amount. <br  />Decimal (12,2)
		 * Type: double
		 */
		dependentsAmount: FormControl<number | null | undefined>,

		/**
		 * State tax exemptions value.<br  />Decimal (12,2)
		 * Type: double
		 */
		exemptions: FormControl<number | null | undefined>,

		/**
		 * State tax exemptions 2 value.<br  />Decimal (12,2)
		 * Type: double
		 */
		exemptions2: FormControl<number | null | undefined>,

		/** Employee state tax filing status. Common values are *S* (Single), *M* (Married).<br  />Max length: 50 */
		filingStatus: FormControl<string | null | undefined>,

		/** Box 2(c) on form W4 (year 2020 or later): Multiple Jobs or Spouse Works. <br  />Boolean */
		higherRate: FormControl<boolean | null | undefined>,

		/**
		 * Box 4(a) on form W4 (year 2020 or later): Other income amount. <br  />Decimal (12,2)
		 * Type: double
		 */
		otherIncomeAmount: FormControl<number | null | undefined>,

		/**
		 * State Tax percentage. <br  />Decimal (12,2)
		 * Type: double
		 */
		percentage: FormControl<number | null | undefined>,

		/** Non-primary state tax reciprocity code.<br  /> Max length: 50 */
		reciprocityCode: FormControl<string | null | undefined>,

		/** Supplemental check calculation code. Common values are *Blocked* (Taxes blocked on Supplemental checks), *Supp* (Use supplemental Tax Rate-Code). <br  />Max length: 10 */
		specialCheckCalc: FormControl<string | null | undefined>,

		/** Tax calculation code. Common values are *F* (Flat), *P* (Percentage), *FDFP* (Flat Dollar Amount plus Fixed Percentage). <br  />Max length: 10 */
		taxCalculationCode: FormControl<string | null | undefined>,

		/** State tax code.<br  /> Max length: 50 */
		taxCode: FormControl<string | null | undefined>,

		/**
		 * The state W4 form year <br  />Integer
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		w4FormYear: FormControl<number | null | undefined>,
	}
	export function CreateStagedEmployeeNonPrimaryStateTaxFormGroup() {
		return new FormGroup<StagedEmployeeNonPrimaryStateTaxFormProperties>({
			amount: new FormControl<number | null | undefined>(undefined),
			deductionsAmount: new FormControl<number | null | undefined>(undefined),
			dependentsAmount: new FormControl<number | null | undefined>(undefined),
			exemptions: new FormControl<number | null | undefined>(undefined),
			exemptions2: new FormControl<number | null | undefined>(undefined),
			filingStatus: new FormControl<string | null | undefined>(undefined),
			higherRate: new FormControl<boolean | null | undefined>(undefined),
			otherIncomeAmount: new FormControl<number | null | undefined>(undefined),
			percentage: new FormControl<number | null | undefined>(undefined),
			reciprocityCode: new FormControl<string | null | undefined>(undefined),
			specialCheckCalc: new FormControl<string | null | undefined>(undefined),
			taxCalculationCode: new FormControl<string | null | undefined>(undefined),
			taxCode: new FormControl<string | null | undefined>(undefined),
			w4FormYear: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface StagedEmployeePrimaryPayRate {

		/**
		 * Employee base rate, used for Hourly employees. <br  />Decimal (12,2)
		 * Type: double
		 */
		baseRate?: number | null;

		/** Pay rate change reason.<br  /> Max length: 30 */
		changeReason?: string | null;

		/**
		 * Employee default hours consistently worked. If autoPayType is set to D, employee will be paid hourly base rate for the defaultHours. <br  />Decimal (12,2)
		 * Type: double
		 */
		defaultHours?: number | null;

		/** The date the employee's pay rate takes effect. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*. */
		effectiveDate?: string | null;

		/** If set to *True*, employee will be paid automatically using deafultHours. */
		isAutoPay?: boolean | null;

		/** Employee current pay frequency. Common values are *A (Annual), B (Bi-Weekly), D (Daily), M (Monthly), S (Semi-Monthly), Q (Quarterly), W (Weekly)*. <br  />Max length: 5 */
		payFrequency?: string | null;

		/** Employee pay grade. Must match Company setup. <br  /> Max length: 10 */
		payGrade?: string | null;

		/** Employee pay type (rate code). Valid values are *Hourly* or *Salary*. <br  />Max length: 10 */
		payType?: string | null;

		/** Employee base rate frequency used with payType Hourly. Common values are *Hour, Week*. Default is Hour. <br  />Max length: 10 */
		ratePer?: string | null;

		/**
		 * Employee gross salary per pay period used with payType Salary.<br  />Decimal (12,6)
		 * Type: double
		 */
		salary?: number | null;
	}
	export interface StagedEmployeePrimaryPayRateFormProperties {

		/**
		 * Employee base rate, used for Hourly employees. <br  />Decimal (12,2)
		 * Type: double
		 */
		baseRate: FormControl<number | null | undefined>,

		/** Pay rate change reason.<br  /> Max length: 30 */
		changeReason: FormControl<string | null | undefined>,

		/**
		 * Employee default hours consistently worked. If autoPayType is set to D, employee will be paid hourly base rate for the defaultHours. <br  />Decimal (12,2)
		 * Type: double
		 */
		defaultHours: FormControl<number | null | undefined>,

		/** The date the employee's pay rate takes effect. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*. */
		effectiveDate: FormControl<string | null | undefined>,

		/** If set to *True*, employee will be paid automatically using deafultHours. */
		isAutoPay: FormControl<boolean | null | undefined>,

		/** Employee current pay frequency. Common values are *A (Annual), B (Bi-Weekly), D (Daily), M (Monthly), S (Semi-Monthly), Q (Quarterly), W (Weekly)*. <br  />Max length: 5 */
		payFrequency: FormControl<string | null | undefined>,

		/** Employee pay grade. Must match Company setup. <br  /> Max length: 10 */
		payGrade: FormControl<string | null | undefined>,

		/** Employee pay type (rate code). Valid values are *Hourly* or *Salary*. <br  />Max length: 10 */
		payType: FormControl<string | null | undefined>,

		/** Employee base rate frequency used with payType Hourly. Common values are *Hour, Week*. Default is Hour. <br  />Max length: 10 */
		ratePer: FormControl<string | null | undefined>,

		/**
		 * Employee gross salary per pay period used with payType Salary.<br  />Decimal (12,6)
		 * Type: double
		 */
		salary: FormControl<number | null | undefined>,
	}
	export function CreateStagedEmployeePrimaryPayRateFormGroup() {
		return new FormGroup<StagedEmployeePrimaryPayRateFormProperties>({
			baseRate: new FormControl<number | null | undefined>(undefined),
			changeReason: new FormControl<string | null | undefined>(undefined),
			defaultHours: new FormControl<number | null | undefined>(undefined),
			effectiveDate: new FormControl<string | null | undefined>(undefined),
			isAutoPay: new FormControl<boolean | null | undefined>(undefined),
			payFrequency: new FormControl<string | null | undefined>(undefined),
			payGrade: new FormControl<string | null | undefined>(undefined),
			payType: new FormControl<string | null | undefined>(undefined),
			ratePer: new FormControl<string | null | undefined>(undefined),
			salary: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface StagedEmployeePrimaryStateTax {

		/**
		 * State tax code.<br  /> Max length: 50
		 * Type: double
		 */
		amount?: number | null;

		/**
		 * Box 4(b) on form W4 (year 2020 or later): Deductions amount. <br  />Decimal (12,2)
		 * Type: double
		 */
		deductionsAmount?: number | null;

		/**
		 * Box 3 on form W4 (year 2020 or later): Total dependents amount. <br  />Decimal (12,2)
		 * Type: double
		 */
		dependentsAmount?: number | null;

		/**
		 * State tax exemptions value.<br  />Decimal (12,2)
		 * Type: double
		 */
		exemptions?: number | null;

		/**
		 * State tax exemptions 2 value.<br  />Decimal (12,2)
		 * Type: double
		 */
		exemptions2?: number | null;

		/** Employee state tax filing status. Common values are *S* (Single), *M* (Married).<br  />Max length: 50 */
		filingStatus?: string | null;

		/** Box 2(c) on form W4 (year 2020 or later): Multiple Jobs or Spouse Works. <br  />Boolean */
		higherRate?: boolean | null;

		/**
		 * Box 4(a) on form W4 (year 2020 or later): Other income amount. <br  />Decimal (12,2)
		 * Type: double
		 */
		otherIncomeAmount?: number | null;

		/**
		 * State Tax percentage. <br  />Decimal (12,2)
		 * Type: double
		 */
		percentage?: number | null;

		/** Supplemental check calculation code. Common values are *Blocked* (Taxes blocked on Supplemental checks), *Supp* (Use supplemental Tax Rate-Code). <br  />Max length: 10 */
		specialCheckCalc?: string | null;

		/** Tax calculation code. Common values are *F* (Flat), *P* (Percentage), *FDFP* (Flat Dollar Amount plus Fixed Percentage). <br  />Max length: 10 */
		taxCalculationCode?: string | null;

		/** State tax code.<br  /> Max length: 50 */
		taxCode?: string | null;

		/**
		 * The state W4 form year <br  />Integer
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		w4FormYear?: number | null;
	}
	export interface StagedEmployeePrimaryStateTaxFormProperties {

		/**
		 * State tax code.<br  /> Max length: 50
		 * Type: double
		 */
		amount: FormControl<number | null | undefined>,

		/**
		 * Box 4(b) on form W4 (year 2020 or later): Deductions amount. <br  />Decimal (12,2)
		 * Type: double
		 */
		deductionsAmount: FormControl<number | null | undefined>,

		/**
		 * Box 3 on form W4 (year 2020 or later): Total dependents amount. <br  />Decimal (12,2)
		 * Type: double
		 */
		dependentsAmount: FormControl<number | null | undefined>,

		/**
		 * State tax exemptions value.<br  />Decimal (12,2)
		 * Type: double
		 */
		exemptions: FormControl<number | null | undefined>,

		/**
		 * State tax exemptions 2 value.<br  />Decimal (12,2)
		 * Type: double
		 */
		exemptions2: FormControl<number | null | undefined>,

		/** Employee state tax filing status. Common values are *S* (Single), *M* (Married).<br  />Max length: 50 */
		filingStatus: FormControl<string | null | undefined>,

		/** Box 2(c) on form W4 (year 2020 or later): Multiple Jobs or Spouse Works. <br  />Boolean */
		higherRate: FormControl<boolean | null | undefined>,

		/**
		 * Box 4(a) on form W4 (year 2020 or later): Other income amount. <br  />Decimal (12,2)
		 * Type: double
		 */
		otherIncomeAmount: FormControl<number | null | undefined>,

		/**
		 * State Tax percentage. <br  />Decimal (12,2)
		 * Type: double
		 */
		percentage: FormControl<number | null | undefined>,

		/** Supplemental check calculation code. Common values are *Blocked* (Taxes blocked on Supplemental checks), *Supp* (Use supplemental Tax Rate-Code). <br  />Max length: 10 */
		specialCheckCalc: FormControl<string | null | undefined>,

		/** Tax calculation code. Common values are *F* (Flat), *P* (Percentage), *FDFP* (Flat Dollar Amount plus Fixed Percentage). <br  />Max length: 10 */
		taxCalculationCode: FormControl<string | null | undefined>,

		/** State tax code.<br  /> Max length: 50 */
		taxCode: FormControl<string | null | undefined>,

		/**
		 * The state W4 form year <br  />Integer
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		w4FormYear: FormControl<number | null | undefined>,
	}
	export function CreateStagedEmployeePrimaryStateTaxFormGroup() {
		return new FormGroup<StagedEmployeePrimaryStateTaxFormProperties>({
			amount: new FormControl<number | null | undefined>(undefined),
			deductionsAmount: new FormControl<number | null | undefined>(undefined),
			dependentsAmount: new FormControl<number | null | undefined>(undefined),
			exemptions: new FormControl<number | null | undefined>(undefined),
			exemptions2: new FormControl<number | null | undefined>(undefined),
			filingStatus: new FormControl<string | null | undefined>(undefined),
			higherRate: new FormControl<boolean | null | undefined>(undefined),
			otherIncomeAmount: new FormControl<number | null | undefined>(undefined),
			percentage: new FormControl<number | null | undefined>(undefined),
			specialCheckCalc: new FormControl<string | null | undefined>(undefined),
			taxCalculationCode: new FormControl<string | null | undefined>(undefined),
			taxCode: new FormControl<string | null | undefined>(undefined),
			w4FormYear: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface StagedEmployeeStatus {

		/** Adjusted seniority date. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*. */
		adjustedSeniorityDate?: string | null;

		/** Employee status change reason. Must match Company setup.<br  /> Max length: 15 */
		changeReason?: string | null;

		/** Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*. */
		effectiveDate?: string | null;

		/** Employee current work status. Common values are *A* (Active), *L* (Leave of Absence), *T* (Terminated). <br  />Max length: 20 */
		employeeStatus?: string | null;

		/** Employee hired date. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*. */
		hireDate?: string | null;

		/** Indicates if employee eligible for rehire. */
		isEligibleForRehire?: boolean | null;
	}
	export interface StagedEmployeeStatusFormProperties {

		/** Adjusted seniority date. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*. */
		adjustedSeniorityDate: FormControl<string | null | undefined>,

		/** Employee status change reason. Must match Company setup.<br  /> Max length: 15 */
		changeReason: FormControl<string | null | undefined>,

		/** Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*. */
		effectiveDate: FormControl<string | null | undefined>,

		/** Employee current work status. Common values are *A* (Active), *L* (Leave of Absence), *T* (Terminated). <br  />Max length: 20 */
		employeeStatus: FormControl<string | null | undefined>,

		/** Employee hired date. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*. */
		hireDate: FormControl<string | null | undefined>,

		/** Indicates if employee eligible for rehire. */
		isEligibleForRehire: FormControl<boolean | null | undefined>,
	}
	export function CreateStagedEmployeeStatusFormGroup() {
		return new FormGroup<StagedEmployeeStatusFormProperties>({
			adjustedSeniorityDate: new FormControl<string | null | undefined>(undefined),
			changeReason: new FormControl<string | null | undefined>(undefined),
			effectiveDate: new FormControl<string | null | undefined>(undefined),
			employeeStatus: new FormControl<string | null | undefined>(undefined),
			hireDate: new FormControl<string | null | undefined>(undefined),
			isEligibleForRehire: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface StagedEmployeeWebTime {

		/** Badge number usually issued for time and attendance system use. <br  />Max length: 50 */
		badgeNumber?: string | null;

		/**
		 * Rate to be charged to third party for time worked by the employee. It is most commonly referenced in the Cost Center Charge, Cost Center Charge vs. Cost Reports, and the Customer Invoice time and attendance reports. <br  />Decimal (12,2)
		 * Type: double
		 */
		chargeRate?: number | null;

		/** If set to true, changes to employee data will be reflected in Web Time. */
		isTimeLaborEnabled?: boolean | null;
	}
	export interface StagedEmployeeWebTimeFormProperties {

		/** Badge number usually issued for time and attendance system use. <br  />Max length: 50 */
		badgeNumber: FormControl<string | null | undefined>,

		/**
		 * Rate to be charged to third party for time worked by the employee. It is most commonly referenced in the Cost Center Charge, Cost Center Charge vs. Cost Reports, and the Customer Invoice time and attendance reports. <br  />Decimal (12,2)
		 * Type: double
		 */
		chargeRate: FormControl<number | null | undefined>,

		/** If set to true, changes to employee data will be reflected in Web Time. */
		isTimeLaborEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateStagedEmployeeWebTimeFormGroup() {
		return new FormGroup<StagedEmployeeWebTimeFormProperties>({
			badgeNumber: new FormControl<string | null | undefined>(undefined),
			chargeRate: new FormControl<number | null | undefined>(undefined),
			isTimeLaborEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface StagedEmployeeWorkAddress {

		/** 1st address line.<br  /> Max length: 40 */
		address1?: string | null;

		/** 2nd address line. <br  /> Max length: 40 */
		address2?: string | null;

		/** City.<br  /> Max length: 40 */
		city?: string | null;

		/** Country.<br  /> Max length: 30 */
		country?: string | null;

		/** County.<br  /> Max length: 30 */
		county?: string | null;

		/** Email. <br  />Max length: 50 */
		emailAddress?: string | null;

		/** Mobile phone number.<br  /> Max length: 12 */
		mobilePhone?: string | null;

		/** Employee pager number.<br  /> Max length: 20 */
		pager?: string | null;

		/** Phone number.<br  /> Max length: 12 */
		phone?: string | null;

		/** Phone number extension.<br  /> Max length: 10 */
		phoneExtension?: string | null;

		/** Postal code.<br  /> Max length: 10 */
		postalCode?: string | null;

		/** State or province.<br  /> Max length: 2 */
		state?: string | null;
	}
	export interface StagedEmployeeWorkAddressFormProperties {

		/** 1st address line.<br  /> Max length: 40 */
		address1: FormControl<string | null | undefined>,

		/** 2nd address line. <br  /> Max length: 40 */
		address2: FormControl<string | null | undefined>,

		/** City.<br  /> Max length: 40 */
		city: FormControl<string | null | undefined>,

		/** Country.<br  /> Max length: 30 */
		country: FormControl<string | null | undefined>,

		/** County.<br  /> Max length: 30 */
		county: FormControl<string | null | undefined>,

		/** Email. <br  />Max length: 50 */
		emailAddress: FormControl<string | null | undefined>,

		/** Mobile phone number.<br  /> Max length: 12 */
		mobilePhone: FormControl<string | null | undefined>,

		/** Employee pager number.<br  /> Max length: 20 */
		pager: FormControl<string | null | undefined>,

		/** Phone number.<br  /> Max length: 12 */
		phone: FormControl<string | null | undefined>,

		/** Phone number extension.<br  /> Max length: 10 */
		phoneExtension: FormControl<string | null | undefined>,

		/** Postal code.<br  /> Max length: 10 */
		postalCode: FormControl<string | null | undefined>,

		/** State or province.<br  /> Max length: 2 */
		state: FormControl<string | null | undefined>,
	}
	export function CreateStagedEmployeeWorkAddressFormGroup() {
		return new FormGroup<StagedEmployeeWorkAddressFormProperties>({
			address1: new FormControl<string | null | undefined>(undefined),
			address2: new FormControl<string | null | undefined>(undefined),
			city: new FormControl<string | null | undefined>(undefined),
			country: new FormControl<string | null | undefined>(undefined),
			county: new FormControl<string | null | undefined>(undefined),
			emailAddress: new FormControl<string | null | undefined>(undefined),
			mobilePhone: new FormControl<string | null | undefined>(undefined),
			pager: new FormControl<string | null | undefined>(undefined),
			phone: new FormControl<string | null | undefined>(undefined),
			phoneExtension: new FormControl<string | null | undefined>(undefined),
			postalCode: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StagedEmployeeWorkEligibility {

		/** Employee USCIS or Admission Number. <br  /> Must be 7-10 characters and may begin with an 'A' */
		alienOrAdmissionDocumentNumber?: string | null;

		/** The date the I-9 Verification form was attested by Employer or Authorized representative. Common formats are *MM-DD-CCYY, CCYY-MM-DD*. */
		attestedDate?: string | null;

		/** If Foreign Passport number is provided, provide its country of issuance. Must match Paylocity setup.<br  /> Max length: 30 */
		countryOfIssuance?: string | null;

		/** Foreign Passport Number.<br  /> Max length: 50 */
		foreignPassportNumber?: string | null;

		/** Form I-94 admission number.<br  /> Must be 11 numeric characters */
		i94AdmissionNumber?: string | null;

		/** Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*. */
		i9DateVerified?: string | null;

		/** Notes regarding employee's i9.<br  /> Max length: 4000 */
		i9Notes?: string | null;

		/** Indicates if employee I9 is verified. */
		isI9Verified?: boolean | null;

		/** Indicates if employee SSN is verified. */
		isSsnVerified?: boolean | null;

		/** The date of employer verification of employee SSN. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*. */
		ssnDateVerified?: string | null;

		/** Notes regarding employee's SSN.<br  /> Max length: 4000 */
		ssnNotes?: string | null;

		/** Employee Visa type. Must match one of the system coded values.<br  /> Max length: 100 */
		visaType?: string | null;

		/** Employee work authorization. Must match one of the system coded values.<br  /> Max length: 100 */
		workAuthorization?: string | null;

		/** End date of employee work eligibility.  Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*. */
		workUntil?: string | null;
	}
	export interface StagedEmployeeWorkEligibilityFormProperties {

		/** Employee USCIS or Admission Number. <br  /> Must be 7-10 characters and may begin with an 'A' */
		alienOrAdmissionDocumentNumber: FormControl<string | null | undefined>,

		/** The date the I-9 Verification form was attested by Employer or Authorized representative. Common formats are *MM-DD-CCYY, CCYY-MM-DD*. */
		attestedDate: FormControl<string | null | undefined>,

		/** If Foreign Passport number is provided, provide its country of issuance. Must match Paylocity setup.<br  /> Max length: 30 */
		countryOfIssuance: FormControl<string | null | undefined>,

		/** Foreign Passport Number.<br  /> Max length: 50 */
		foreignPassportNumber: FormControl<string | null | undefined>,

		/** Form I-94 admission number.<br  /> Must be 11 numeric characters */
		i94AdmissionNumber: FormControl<string | null | undefined>,

		/** Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*. */
		i9DateVerified: FormControl<string | null | undefined>,

		/** Notes regarding employee's i9.<br  /> Max length: 4000 */
		i9Notes: FormControl<string | null | undefined>,

		/** Indicates if employee I9 is verified. */
		isI9Verified: FormControl<boolean | null | undefined>,

		/** Indicates if employee SSN is verified. */
		isSsnVerified: FormControl<boolean | null | undefined>,

		/** The date of employer verification of employee SSN. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*. */
		ssnDateVerified: FormControl<string | null | undefined>,

		/** Notes regarding employee's SSN.<br  /> Max length: 4000 */
		ssnNotes: FormControl<string | null | undefined>,

		/** Employee Visa type. Must match one of the system coded values.<br  /> Max length: 100 */
		visaType: FormControl<string | null | undefined>,

		/** Employee work authorization. Must match one of the system coded values.<br  /> Max length: 100 */
		workAuthorization: FormControl<string | null | undefined>,

		/** End date of employee work eligibility.  Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*. */
		workUntil: FormControl<string | null | undefined>,
	}
	export function CreateStagedEmployeeWorkEligibilityFormGroup() {
		return new FormGroup<StagedEmployeeWorkEligibilityFormProperties>({
			alienOrAdmissionDocumentNumber: new FormControl<string | null | undefined>(undefined),
			attestedDate: new FormControl<string | null | undefined>(undefined),
			countryOfIssuance: new FormControl<string | null | undefined>(undefined),
			foreignPassportNumber: new FormControl<string | null | undefined>(undefined),
			i94AdmissionNumber: new FormControl<string | null | undefined>(undefined),
			i9DateVerified: new FormControl<string | null | undefined>(undefined),
			i9Notes: new FormControl<string | null | undefined>(undefined),
			isI9Verified: new FormControl<boolean | null | undefined>(undefined),
			isSsnVerified: new FormControl<boolean | null | undefined>(undefined),
			ssnDateVerified: new FormControl<string | null | undefined>(undefined),
			ssnNotes: new FormControl<string | null | undefined>(undefined),
			visaType: new FormControl<string | null | undefined>(undefined),
			workAuthorization: new FormControl<string | null | undefined>(undefined),
			workUntil: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The State Tax model */
	export interface StateTax {

		/**
		 * State tax code.<br  /> Max length: 50
		 * Type: double
		 */
		amount?: number | null;

		/**
		 * Box 4(b) on form W4 (year 2020 or later): Deductions amount. <br  />Decimal (12,2)
		 * Type: double
		 */
		deductionsAmount?: number | null;

		/**
		 * Box 3 on form W4 (year 2020 or later): Total dependents amount. <br  />Decimal (12,2)
		 * Type: double
		 */
		dependentsAmount?: number | null;

		/**
		 * State tax exemptions value.<br  />Decimal (12,2)
		 * Type: double
		 */
		exemptions?: number | null;

		/**
		 * State tax exemptions 2 value.<br  />Decimal (12,2)
		 * Type: double
		 */
		exemptions2?: number | null;

		/** Employee state tax filing status. Common values are *S* (Single), *M* (Married).<br  />Max length: 50 */
		filingStatus?: string | null;

		/** Box 2(c) on form W4 (year 2020 or later): Multiple Jobs or Spouse Works. <br  />Boolean */
		higherRate?: boolean | null;

		/**
		 * Box 4(a) on form W4 (year 2020 or later): Other income amount. <br  />Decimal (12,2)
		 * Type: double
		 */
		otherIncomeAmount?: number | null;

		/**
		 * State Tax percentage. <br  />Decimal (12,2)
		 * Type: double
		 */
		percentage?: number | null;

		/** Supplemental check calculation code. Common values are *Blocked* (Taxes blocked on Supplemental checks), *Supp* (Use supplemental Tax Rate-Code). <br  />Max length: 10 */
		specialCheckCalc?: string | null;

		/** Tax calculation code. Common values are *F* (Flat), *P* (Percentage), *FDFP* (Flat Dollar Amount plus Fixed Percentage). <br  />Max length: 10 */
		taxCalculationCode?: string | null;

		/** State tax code.<br  /> Max length: 50 */
		taxCode?: string | null;

		/**
		 * The state W4 form year <br  />Integer
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		w4FormYear?: number | null;
	}

	/** The State Tax model */
	export interface StateTaxFormProperties {

		/**
		 * State tax code.<br  /> Max length: 50
		 * Type: double
		 */
		amount: FormControl<number | null | undefined>,

		/**
		 * Box 4(b) on form W4 (year 2020 or later): Deductions amount. <br  />Decimal (12,2)
		 * Type: double
		 */
		deductionsAmount: FormControl<number | null | undefined>,

		/**
		 * Box 3 on form W4 (year 2020 or later): Total dependents amount. <br  />Decimal (12,2)
		 * Type: double
		 */
		dependentsAmount: FormControl<number | null | undefined>,

		/**
		 * State tax exemptions value.<br  />Decimal (12,2)
		 * Type: double
		 */
		exemptions: FormControl<number | null | undefined>,

		/**
		 * State tax exemptions 2 value.<br  />Decimal (12,2)
		 * Type: double
		 */
		exemptions2: FormControl<number | null | undefined>,

		/** Employee state tax filing status. Common values are *S* (Single), *M* (Married).<br  />Max length: 50 */
		filingStatus: FormControl<string | null | undefined>,

		/** Box 2(c) on form W4 (year 2020 or later): Multiple Jobs or Spouse Works. <br  />Boolean */
		higherRate: FormControl<boolean | null | undefined>,

		/**
		 * Box 4(a) on form W4 (year 2020 or later): Other income amount. <br  />Decimal (12,2)
		 * Type: double
		 */
		otherIncomeAmount: FormControl<number | null | undefined>,

		/**
		 * State Tax percentage. <br  />Decimal (12,2)
		 * Type: double
		 */
		percentage: FormControl<number | null | undefined>,

		/** Supplemental check calculation code. Common values are *Blocked* (Taxes blocked on Supplemental checks), *Supp* (Use supplemental Tax Rate-Code). <br  />Max length: 10 */
		specialCheckCalc: FormControl<string | null | undefined>,

		/** Tax calculation code. Common values are *F* (Flat), *P* (Percentage), *FDFP* (Flat Dollar Amount plus Fixed Percentage). <br  />Max length: 10 */
		taxCalculationCode: FormControl<string | null | undefined>,

		/** State tax code.<br  /> Max length: 50 */
		taxCode: FormControl<string | null | undefined>,

		/**
		 * The state W4 form year <br  />Integer
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		w4FormYear: FormControl<number | null | undefined>,
	}
	export function CreateStateTaxFormGroup() {
		return new FormGroup<StateTaxFormProperties>({
			amount: new FormControl<number | null | undefined>(undefined),
			deductionsAmount: new FormControl<number | null | undefined>(undefined),
			dependentsAmount: new FormControl<number | null | undefined>(undefined),
			exemptions: new FormControl<number | null | undefined>(undefined),
			exemptions2: new FormControl<number | null | undefined>(undefined),
			filingStatus: new FormControl<string | null | undefined>(undefined),
			higherRate: new FormControl<boolean | null | undefined>(undefined),
			otherIncomeAmount: new FormControl<number | null | undefined>(undefined),
			percentage: new FormControl<number | null | undefined>(undefined),
			specialCheckCalc: new FormControl<string | null | undefined>(undefined),
			taxCalculationCode: new FormControl<string | null | undefined>(undefined),
			taxCode: new FormControl<string | null | undefined>(undefined),
			w4FormYear: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The Tracking Number Response model */
	export interface TrackingNumberResponse {

		/** The unique tracking number */
		trackingNumber?: string | null;
	}

	/** The Tracking Number Response model */
	export interface TrackingNumberResponseFormProperties {

		/** The unique tracking number */
		trackingNumber: FormControl<string | null | undefined>,
	}
	export function CreateTrackingNumberResponseFormGroup() {
		return new FormGroup<TrackingNumberResponseFormProperties>({
			trackingNumber: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Get All Company Codes
		 * Get All Company Codes for the selected company and resource
		 * Get v2/companies/{companyId}/codes/{codeResource}
		 * @param {string} companyId Company Id
		 * @param {string} codeResource Type of Company Code. Common values costcenter1, costcenter2, costcenter3, deductions, earnings, taxes, paygrade, positions.
		 * @return {Array<CompanyCodes>} Successfully retrieved
		 */
		Get_All_Company_Codes_and_Descriptions_by_Resource(companyId: string, codeResource: string): Observable<Array<CompanyCodes>> {
			return this.http.get<Array<CompanyCodes>>(this.baseUri + 'v2/companies/' + (companyId == null ? '' : encodeURIComponent(companyId)) + '/codes/' + (codeResource == null ? '' : encodeURIComponent(codeResource)), {});
		}

		/**
		 * Get All Custom Fields
		 * Get All Custom Fields for the selected company
		 * Get v2/companies/{companyId}/customfields/{category}
		 * @param {string} companyId Company Id
		 * @param {string} category Custom Fields Category
		 * @return {Array<CustomFieldDefinition>} Successfully retrieved
		 */
		Get_All_Custom_Fields_by_category(companyId: string, category: string): Observable<Array<CustomFieldDefinition>> {
			return this.http.get<Array<CustomFieldDefinition>>(this.baseUri + 'v2/companies/' + (companyId == null ? '' : encodeURIComponent(companyId)) + '/customfields/' + (category == null ? '' : encodeURIComponent(category)), {});
		}

		/**
		 * Add new employee
		 * New Employee API sends new employee data directly to Web Pay. Companies who use the New Hire Template in Web Pay may require additional fields when hiring employees. New Employee API Requests will honor these required fields.
		 * Post v2/companies/{companyId}/employees
		 * @param {string} companyId Company Id
		 * @param {Employee} requestBody Employee Model
		 * @return {void} 
		 */
		Add_employee(companyId: string, requestBody: Employee): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v2/companies/' + (companyId == null ? '' : encodeURIComponent(companyId)) + '/employees', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all employees
		 * Get All Employees API will return employee data currently available in Web Pay.
		 * Get v2/companies/{companyId}/employees/
		 * @param {string} companyId Company Id
		 * @param {number} pagesize Number of records per page. Default value is 25.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} pagenumber Page number to retrieve; page numbers are 0-based (so to get the first page of results, pass pagenumber=0). Default value is 0.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {boolean} includetotalcount Whether to include the total record count in the header's X-Pcty-Total-Count property. Default value is true.
		 * @return {Array<EmployeeInfo>} Successfully Retrieved
		 */
		Get_all_employees(companyId: string, pagesize: number | null | undefined, pagenumber: number | null | undefined, includetotalcount: boolean | null | undefined): Observable<Array<EmployeeInfo>> {
			return this.http.get<Array<EmployeeInfo>>(this.baseUri + 'v2/companies/' + (companyId == null ? '' : encodeURIComponent(companyId)) + '/employees/&pagesize=' + pagesize + '&pagenumber=' + pagenumber + '&includetotalcount=' + includetotalcount, {});
		}

		/**
		 * Get employee
		 * Get Employee API will return employee data currently available in Web Pay.
		 * Get v2/companies/{companyId}/employees/{employeeId}
		 * @param {string} companyId Company Id
		 * @param {string} employeeId Employee Id
		 * @return {Employee} Successfully Retrieved
		 */
		Get_employee(companyId: string, employeeId: string): Observable<Employee> {
			return this.http.get<Employee>(this.baseUri + 'v2/companies/' + (companyId == null ? '' : encodeURIComponent(companyId)) + '/employees/' + (employeeId == null ? '' : encodeURIComponent(employeeId)), {});
		}

		/**
		 * Update employee
		 * Update Employee API will update existing employee data in WebPay.
		 * Patch v2/companies/{companyId}/employees/{employeeId}
		 * @param {string} companyId Company Id
		 * @param {string} employeeId Employee Id
		 * @param {Employee} requestBody Employee Model
		 * @return {void} Successfully Updated
		 */
		Update_employee(companyId: string, employeeId: string, requestBody: Employee): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'v2/companies/' + (companyId == null ? '' : encodeURIComponent(companyId)) + '/employees/' + (employeeId == null ? '' : encodeURIComponent(employeeId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Add/update additional rates
		 * Sends new or updated employee additional rates information directly to Web Pay.
		 * Put v2/companies/{companyId}/employees/{employeeId}/additionalRates
		 * @param {string} companyId Company Id
		 * @param {string} employeeId Employee Id
		 * @param {AdditionalRate} requestBody Additional Rate Model
		 * @return {void} Successfully added or updated
		 */
		Add_or_update_additional_rates(companyId: string, employeeId: string, requestBody: AdditionalRate): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'v2/companies/' + (companyId == null ? '' : encodeURIComponent(companyId)) + '/employees/' + (employeeId == null ? '' : encodeURIComponent(employeeId)) + '/additionalRates', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Add/update employee's benefit setup
		 * Sends new or updated employee benefit setup information directly to Web Pay.
		 * Put v2/companies/{companyId}/employees/{employeeId}/benefitSetup
		 * @param {string} companyId Company Id
		 * @param {string} employeeId Employee Id
		 * @param {BenefitSetup} requestBody BenefitSetup Model
		 * @return {void} Successfully added or updated
		 */
		Update_or_add_employee_benefit_setup(companyId: string, employeeId: string, requestBody: BenefitSetup): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'v2/companies/' + (companyId == null ? '' : encodeURIComponent(companyId)) + '/employees/' + (employeeId == null ? '' : encodeURIComponent(employeeId)) + '/benefitSetup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get All Direct Deposit
		 * Get All Direct Deposit returns main direct deposit and all additional direct depositsfor the selected employee.
		 * Get v2/companies/{companyId}/employees/{employeeId}/directDeposit
		 * @param {string} companyId Company Id
		 * @param {string} employeeId Employee Id
		 * @return {Array<DirectDeposit>} Successfully Retrieved
		 */
		Get_All_Direct_Deposit(companyId: string, employeeId: string): Observable<Array<DirectDeposit>> {
			return this.http.get<Array<DirectDeposit>>(this.baseUri + 'v2/companies/' + (companyId == null ? '' : encodeURIComponent(companyId)) + '/employees/' + (employeeId == null ? '' : encodeURIComponent(employeeId)) + '/directDeposit', {});
		}

		/**
		 * Get All Earnings
		 * Get All Earnings returns all earnings for the selected employee.
		 * Get v2/companies/{companyId}/employees/{employeeId}/earnings
		 * @param {string} companyId Company Id
		 * @param {string} employeeId Employee Id
		 * @return {Array<Earning>} Successfully retrieved
		 */
		Get_All_Earnings(companyId: string, employeeId: string): Observable<Array<Earning>> {
			return this.http.get<Array<Earning>>(this.baseUri + 'v2/companies/' + (companyId == null ? '' : encodeURIComponent(companyId)) + '/employees/' + (employeeId == null ? '' : encodeURIComponent(employeeId)) + '/earnings', {});
		}

		/**
		 * Add/Update Earning
		 * Add/Update Earning API sends new or updated employee earnings information directly to Web Pay.
		 * Put v2/companies/{companyId}/employees/{employeeId}/earnings
		 * @param {string} companyId Company Id
		 * @param {string} employeeId Employee Id
		 * @param {Earning} requestBody Earning Model
		 * @return {void} Successfully added or updated
		 */
		Add_or_update_an_employee_earning(companyId: string, employeeId: string, requestBody: Earning): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'v2/companies/' + (companyId == null ? '' : encodeURIComponent(companyId)) + '/employees/' + (employeeId == null ? '' : encodeURIComponent(employeeId)) + '/earnings', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Earnings by Earning Code
		 * Get Earnings returns all earnings with the provided earning code for the selected employee.
		 * Get v2/companies/{companyId}/employees/{employeeId}/earnings/{earningCode}
		 * @param {string} companyId Company Id
		 * @param {string} employeeId Employee Id
		 * @param {string} earningCode Earning Code
		 * @return {Array<Earning>} Successfully retrieved
		 */
		Get_Earnings_by_Earning_Code(companyId: string, employeeId: string, earningCode: string): Observable<Array<Earning>> {
			return this.http.get<Array<Earning>>(this.baseUri + 'v2/companies/' + (companyId == null ? '' : encodeURIComponent(companyId)) + '/employees/' + (employeeId == null ? '' : encodeURIComponent(employeeId)) + '/earnings/' + (earningCode == null ? '' : encodeURIComponent(earningCode)), {});
		}

		/**
		 * Delete Earning by Earning Code and Start Date
		 * Delete Earning by Earning Code and Start Date
		 * Delete v2/companies/{companyId}/employees/{employeeId}/earnings/{earningCode}/{startDate}
		 * @param {string} companyId Company Id
		 * @param {string} employeeId Employee Id
		 * @param {string} earningCode Earning Code
		 * @param {string} startDate Start Date
		 * @return {void} 
		 */
		Delete_Earning_by_Earning_Code_and_Start_Date(companyId: string, employeeId: string, earningCode: string, startDate: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v2/companies/' + (companyId == null ? '' : encodeURIComponent(companyId)) + '/employees/' + (employeeId == null ? '' : encodeURIComponent(employeeId)) + '/earnings/' + (earningCode == null ? '' : encodeURIComponent(earningCode)) + '/' + (startDate == null ? '' : encodeURIComponent(startDate)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Earning by Earning Code and Start Date
		 * Get Earnings returns the single earning with the provided earning code and start date for the selected employee.
		 * Get v2/companies/{companyId}/employees/{employeeId}/earnings/{earningCode}/{startDate}
		 * @param {string} companyId Company Id
		 * @param {string} employeeId Employee Id
		 * @param {string} earningCode Earning Code
		 * @param {string} startDate Start Date
		 * @return {Earning} Successfully retrieved
		 */
		Get_Earning_by_Earning_Code_and_Start_Date(companyId: string, employeeId: string, earningCode: string, startDate: string): Observable<Earning> {
			return this.http.get<Earning>(this.baseUri + 'v2/companies/' + (companyId == null ? '' : encodeURIComponent(companyId)) + '/employees/' + (employeeId == null ? '' : encodeURIComponent(employeeId)) + '/earnings/' + (earningCode == null ? '' : encodeURIComponent(earningCode)) + '/' + (startDate == null ? '' : encodeURIComponent(startDate)), {});
		}

		/**
		 * Add/update emergency contacts
		 * Sends new or updated employee emergency contacts directly to Web Pay.
		 * Put v2/companies/{companyId}/employees/{employeeId}/emergencyContacts
		 * @param {string} companyId Company Id
		 * @param {string} employeeId Employee Id
		 * @param {EmergencyContact} requestBody Emergency Contact Model
		 * @return {void} Successfully added or updated
		 */
		Add_or_update_emergency_contacts(companyId: string, employeeId: string, requestBody: EmergencyContact): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'v2/companies/' + (companyId == null ? '' : encodeURIComponent(companyId)) + '/employees/' + (employeeId == null ? '' : encodeURIComponent(employeeId)) + '/emergencyContacts', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all local taxes
		 * Returns all local taxes for the selected employee.
		 * Get v2/companies/{companyId}/employees/{employeeId}/localTaxes
		 * @param {string} companyId Company Id
		 * @param {string} employeeId Employee Id
		 * @return {Array<LocalTax>} Successfully retrieved
		 */
		Get_all_local_taxes(companyId: string, employeeId: string): Observable<Array<LocalTax>> {
			return this.http.get<Array<LocalTax>>(this.baseUri + 'v2/companies/' + (companyId == null ? '' : encodeURIComponent(companyId)) + '/employees/' + (employeeId == null ? '' : encodeURIComponent(employeeId)) + '/localTaxes', {});
		}

		/**
		 * Add new local tax
		 * Sends new employee local tax information directly to Web Pay.
		 * Post v2/companies/{companyId}/employees/{employeeId}/localTaxes
		 * @param {string} companyId Company Id
		 * @param {string} employeeId Employee Id
		 * @param {LocalTax} requestBody LocalTax Model
		 * @return {void} 
		 */
		Add_local_tax(companyId: string, employeeId: string, requestBody: LocalTax): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v2/companies/' + (companyId == null ? '' : encodeURIComponent(companyId)) + '/employees/' + (employeeId == null ? '' : encodeURIComponent(employeeId)) + '/localTaxes', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete local tax by tax code
		 * Delete local tax by tax code
		 * Delete v2/companies/{companyId}/employees/{employeeId}/localTaxes/{taxCode}
		 * @param {string} companyId Company Id
		 * @param {string} employeeId Employee Id
		 * @param {string} taxCode Tax Code
		 * @return {void} 
		 */
		Delete_local_tax_by_tax_code(companyId: string, employeeId: string, taxCode: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v2/companies/' + (companyId == null ? '' : encodeURIComponent(companyId)) + '/employees/' + (employeeId == null ? '' : encodeURIComponent(employeeId)) + '/localTaxes/' + (taxCode == null ? '' : encodeURIComponent(taxCode)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get local taxes by tax code
		 * Returns all local taxes with the provided tax code for the selected employee.
		 * Get v2/companies/{companyId}/employees/{employeeId}/localTaxes/{taxCode}
		 * @param {string} companyId Company Id
		 * @param {string} employeeId Employee Id
		 * @param {string} taxCode Tax Code
		 * @return {Array<LocalTax>} Successfully retrieved
		 */
		Get_local_tax_by_tax_code(companyId: string, employeeId: string, taxCode: string): Observable<Array<LocalTax>> {
			return this.http.get<Array<LocalTax>>(this.baseUri + 'v2/companies/' + (companyId == null ? '' : encodeURIComponent(companyId)) + '/employees/' + (employeeId == null ? '' : encodeURIComponent(employeeId)) + '/localTaxes/' + (taxCode == null ? '' : encodeURIComponent(taxCode)), {});
		}

		/**
		 * Add/update non-primary state tax
		 * Sends new or updated employee non-primary state tax information directly to Web Pay.
		 * Put v2/companies/{companyId}/employees/{employeeId}/nonprimaryStateTax
		 * @param {string} companyId Company Id
		 * @param {string} employeeId Employee Id
		 * @param {NonPrimaryStateTax} requestBody Non-Primary State Tax Model
		 * @return {void} Successfully added or updated
		 */
		Add_or_update_non_primary_state_tax(companyId: string, employeeId: string, requestBody: NonPrimaryStateTax): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'v2/companies/' + (companyId == null ? '' : encodeURIComponent(companyId)) + '/employees/' + (employeeId == null ? '' : encodeURIComponent(employeeId)) + '/nonprimaryStateTax', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get employee pay statement details data for the specified year.
		 * Get pay statement details API will return employee pay statement details data currently available in Web Pay for the specified year.
		 * Get v2/companies/{companyId}/employees/{employeeId}/paystatement/details/{year}
		 * @param {string} companyId Company Id
		 * @param {string} employeeId Employee Id
		 * @param {string} year The year for which to retrieve pay statement data
		 * @param {number} pagesize Number of records per page. Default value is 25.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} pagenumber Page number to retrieve; page numbers are 0-based (so to get the first page of results, pass pagenumber=0). Default value is 0.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {boolean} includetotalcount Whether to include the total record count in the header's X-Pcty-Total-Count property. Default value is true.
		 * @param {string} codegroup Retrieve pay statement details related to specific deduction, earning or tax types. Common values include 401k, Memo, Reg, OT, Cash Tips, FED and SITW.
		 * @return {Array<PayStatementDetails>} Successfully Retrieved
		 */
		Gets_employee_pay_statement_detail_data_based_on_the_specified_year(companyId: string, employeeId: string, year: string, pagesize: number | null | undefined, pagenumber: number | null | undefined, includetotalcount: boolean | null | undefined, codegroup: string | null | undefined): Observable<Array<PayStatementDetails>> {
			return this.http.get<Array<PayStatementDetails>>(this.baseUri + 'v2/companies/' + (companyId == null ? '' : encodeURIComponent(companyId)) + '/employees/' + (employeeId == null ? '' : encodeURIComponent(employeeId)) + '/paystatement/details/' + (year == null ? '' : encodeURIComponent(year)) + '&pagesize=' + pagesize + '&pagenumber=' + pagenumber + '&includetotalcount=' + includetotalcount + '&codegroup=' + (codegroup == null ? '' : encodeURIComponent(codegroup)), {});
		}

		/**
		 * Get employee pay statement details data for the specified year and check date.
		 * Get pay statement details API will return employee pay statement detail data currently available in Web Pay for the specified year and check date.
		 * Get v2/companies/{companyId}/employees/{employeeId}/paystatement/details/{year}/{checkDate}
		 * @param {string} companyId Company Id
		 * @param {string} employeeId Employee Id
		 * @param {string} year The year for which to retrieve pay statement data
		 * @param {string} checkDate The check date for which to retrieve pay statement data
		 * @param {number} pagesize Number of records per page. Default value is 25.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} pagenumber Page number to retrieve; page numbers are 0-based (so to get the first page of results, pass pagenumber=0). Default value is 0.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {boolean} includetotalcount Whether to include the total record count in the header's X-Pcty-Total-Count property. Default value is true.
		 * @param {string} codegroup Retrieve pay statement details related to specific deduction, earning or tax types. Common values include 401k, Memo, Reg, OT, Cash Tips, FED and SITW.
		 * @return {Array<PayStatementDetails>} Successfully Retrieved
		 */
		Gets_employee_pay_statement_detail_data_based_on_the_specified_year_and_check_date(companyId: string, employeeId: string, year: string, checkDate: string, pagesize: number | null | undefined, pagenumber: number | null | undefined, includetotalcount: boolean | null | undefined, codegroup: string | null | undefined): Observable<Array<PayStatementDetails>> {
			return this.http.get<Array<PayStatementDetails>>(this.baseUri + 'v2/companies/' + (companyId == null ? '' : encodeURIComponent(companyId)) + '/employees/' + (employeeId == null ? '' : encodeURIComponent(employeeId)) + '/paystatement/details/' + (year == null ? '' : encodeURIComponent(year)) + '/' + (checkDate == null ? '' : encodeURIComponent(checkDate)) + '&pagesize=' + pagesize + '&pagenumber=' + pagenumber + '&includetotalcount=' + includetotalcount + '&codegroup=' + (codegroup == null ? '' : encodeURIComponent(codegroup)), {});
		}

		/**
		 * Get employee pay statement summary data for the specified year.
		 * Get pay statement summary API will return employee pay statement summary data currently available in Web Pay for the specified year.
		 * Get v2/companies/{companyId}/employees/{employeeId}/paystatement/summary/{year}
		 * @param {string} companyId Company Id
		 * @param {string} employeeId Employee Id
		 * @param {string} year The year for which to retrieve pay statement data
		 * @param {number} pagesize Number of records per page. Default value is 25.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} pagenumber Page number to retrieve; page numbers are 0-based (so to get the first page of results, pass pagenumber=0). Default value is 0.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {boolean} includetotalcount Whether to include the total record count in the header's X-Pcty-Total-Count property. Default value is true.
		 * @param {string} codegroup Retrieve pay statement details related to specific deduction, earning or tax types. Common values include 401k, Memo, Reg, OT, Cash Tips, FED and SITW.
		 * @return {Array<PayStatementSummary>} Successfully Retrieved
		 */
		Gets_employee_pay_statement_summary_data_based_on_the_specified_year(companyId: string, employeeId: string, year: string, pagesize: number | null | undefined, pagenumber: number | null | undefined, includetotalcount: boolean | null | undefined, codegroup: string | null | undefined): Observable<Array<PayStatementSummary>> {
			return this.http.get<Array<PayStatementSummary>>(this.baseUri + 'v2/companies/' + (companyId == null ? '' : encodeURIComponent(companyId)) + '/employees/' + (employeeId == null ? '' : encodeURIComponent(employeeId)) + '/paystatement/summary/' + (year == null ? '' : encodeURIComponent(year)) + '&pagesize=' + pagesize + '&pagenumber=' + pagenumber + '&includetotalcount=' + includetotalcount + '&codegroup=' + (codegroup == null ? '' : encodeURIComponent(codegroup)), {});
		}

		/**
		 * Get employee pay statement summary data for the specified year and check date.
		 * Get pay statement summary API will return employee pay statement summary data currently available in Web Pay for the specified year and check date.
		 * Get v2/companies/{companyId}/employees/{employeeId}/paystatement/summary/{year}/{checkDate}
		 * @param {string} companyId Company Id
		 * @param {string} employeeId Employee Id
		 * @param {string} year The year for which to retrieve pay statement data
		 * @param {string} checkDate The check date for which to retrieve pay statement data
		 * @param {number} pagesize Number of records per page. Default value is 25.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} pagenumber Page number to retrieve; page numbers are 0-based (so to get the first page of results, pass pagenumber=0). Default value is 0.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {boolean} includetotalcount Whether to include the total record count in the header's X-Pcty-Total-Count property. Default value is true.
		 * @param {string} codegroup Retrieve pay statement details related to specific deduction, earning or tax types. Common values include 401k, Memo, Reg, OT, Cash Tips, FED and SITW.
		 * @return {Array<PayStatementSummary>} Successfully Retrieved
		 */
		Gets_employee_pay_statement_summary_data_based_on_the_specified_year_and_check_date(companyId: string, employeeId: string, year: string, checkDate: string, pagesize: number | null | undefined, pagenumber: number | null | undefined, includetotalcount: boolean | null | undefined, codegroup: string | null | undefined): Observable<Array<PayStatementSummary>> {
			return this.http.get<Array<PayStatementSummary>>(this.baseUri + 'v2/companies/' + (companyId == null ? '' : encodeURIComponent(companyId)) + '/employees/' + (employeeId == null ? '' : encodeURIComponent(employeeId)) + '/paystatement/summary/' + (year == null ? '' : encodeURIComponent(year)) + '/' + (checkDate == null ? '' : encodeURIComponent(checkDate)) + '&pagesize=' + pagesize + '&pagenumber=' + pagenumber + '&includetotalcount=' + includetotalcount + '&codegroup=' + (codegroup == null ? '' : encodeURIComponent(codegroup)), {});
		}

		/**
		 * Add/update primary state tax
		 * Sends new or updated employee primary state tax information directly to Web Pay.
		 * Put v2/companies/{companyId}/employees/{employeeId}/primaryStateTax
		 * @param {string} companyId Company Id
		 * @param {string} employeeId Employee Id
		 * @param {StateTax} requestBody Primary State Tax Model
		 * @return {void} Successfully added or updated
		 */
		Add_or_update_primary_state_tax(companyId: string, employeeId: string, requestBody: StateTax): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'v2/companies/' + (companyId == null ? '' : encodeURIComponent(companyId)) + '/employees/' + (employeeId == null ? '' : encodeURIComponent(employeeId)) + '/primaryStateTax', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get sensitive data
		 * Gets employee sensitive data information directly from Web Pay.
		 * Get v2/companies/{companyId}/employees/{employeeId}/sensitivedata
		 * @param {string} companyId Company Id
		 * @param {string} employeeId Employee Id
		 * @return {Array<SensitiveData>} Successfully Retrieved
		 */
		Get_sensitive_data(companyId: string, employeeId: string): Observable<Array<SensitiveData>> {
			return this.http.get<Array<SensitiveData>>(this.baseUri + 'v2/companies/' + (companyId == null ? '' : encodeURIComponent(companyId)) + '/employees/' + (employeeId == null ? '' : encodeURIComponent(employeeId)) + '/sensitivedata', {});
		}

		/**
		 * Add/update sensitive data
		 * Sends new or updated employee sensitive data information directly to Web Pay.
		 * Put v2/companies/{companyId}/employees/{employeeId}/sensitivedata
		 * @param {string} companyId Company Id
		 * @param {string} employeeId Employee Id
		 * @param {SensitiveData} requestBody Sensitive Data Model
		 * @return {void} Successfully added or updated
		 */
		Add_or_update_Sensitive_Data(companyId: string, employeeId: string, requestBody: SensitiveData): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'v2/companies/' + (companyId == null ? '' : encodeURIComponent(companyId)) + '/employees/' + (employeeId == null ? '' : encodeURIComponent(employeeId)) + '/sensitivedata', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Company-Specific Open API Documentation
		 * The company-specific Open API endpoint allows the client to GET an Open API document for the Paylocity API that is customized with company-specific resource schemas. These customized resource schemas define certain properties as enumerations of pre-defined values that correspond to the company's setup with Web Pay. The customized schemas also indicate which properties are required by the company within Web Pay.<br  />To learn more about Open API, click [here](https://www.openapis.org/)
		 * Get v2/companies/{companyId}/openapi
		 * @param {string} companyId Company Id
		 * @return {void} Successfully retrieved
		 */
		Get_company_specific_Open_API_documentation(companyId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v2/companies/' + (companyId == null ? '' : encodeURIComponent(companyId)) + '/openapi', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Obtain new client secret.
		 * Obtain new client secret for Paylocity-issued client id. See Setup section for details.
		 * Post v2/credentials/secrets
		 * @param {AddClientSecret} requestBody Add Client Secret Model
		 * @return {Array<ClientCredentialsResponse>} Successfully added
		 */
		Add_Client_Secret(requestBody: AddClientSecret): Observable<Array<ClientCredentialsResponse>> {
			return this.http.post<Array<ClientCredentialsResponse>>(this.baseUri + 'v2/credentials/secrets', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Add new employee to Web Link
		 * Add new employee to Web Link will send partially completed or potentially erroneous new hire record to Web Link, where it can be corrected and competed by company administrator or authorized Paylocity Service Bureau employee.
		 * Post v2/weblinkstaging/companies/{companyId}/employees/newemployees
		 * @param {string} companyId Company Id
		 * @param {StagedEmployee} requestBody StagedEmployee Model
		 * @return {void} 
		 */
		Add_new_employee_to_Web_Link(companyId: string, requestBody: StagedEmployee): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v2/weblinkstaging/companies/' + (companyId == null ? '' : encodeURIComponent(companyId)) + '/employees/newemployees', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

}

