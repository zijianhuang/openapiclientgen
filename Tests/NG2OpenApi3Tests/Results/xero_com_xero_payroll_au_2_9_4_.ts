import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** The object returned for a bad request */
	export interface APIException {

		/** The error number */
		ErrorNumber?: string | null;

		/** The message describing the error */
		Message?: string | null;

		/** The type of error */
		Type?: string | null;
	}

	/** The object returned for a bad request */
	export interface APIExceptionFormProperties {

		/** The error number */
		ErrorNumber: FormControl<string | null | undefined>,

		/** The message describing the error */
		Message: FormControl<string | null | undefined>,

		/** The type of error */
		Type: FormControl<string | null | undefined>,
	}
	export function CreateAPIExceptionFormGroup() {
		return new FormGroup<APIExceptionFormProperties>({
			ErrorNumber: new FormControl<string | null | undefined>(undefined),
			Message: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Account {

		/** Xero identifier for accounts */
		AccountID?: string | null;

		/** Customer defined account code */
		Code?: string | null;

		/** Name of account */
		Name?: string | null;

		/** See Account Types */
		Type?: AccountType | null;
	}
	export interface AccountFormProperties {

		/** Xero identifier for accounts */
		AccountID: FormControl<string | null | undefined>,

		/** Customer defined account code */
		Code: FormControl<string | null | undefined>,

		/** Name of account */
		Name: FormControl<string | null | undefined>,

		/** See Account Types */
		Type: FormControl<AccountType | null | undefined>,
	}
	export function CreateAccountFormGroup() {
		return new FormGroup<AccountFormProperties>({
			AccountID: new FormControl<string | null | undefined>(undefined),
			Code: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<AccountType | null | undefined>(undefined),
		});

	}

	export enum AccountType { BANK = 'BANK', CURRENT = 'CURRENT', CURRLIAB = 'CURRLIAB', DEPRECIATN = 'DEPRECIATN', DIRECTCOSTS = 'DIRECTCOSTS', EQUITY = 'EQUITY', EXPENSE = 'EXPENSE', FIXED = 'FIXED', INVENTORY = 'INVENTORY', LIABILITY = 'LIABILITY', NONCURRENT = 'NONCURRENT', OTHERINCOME = 'OTHERINCOME', OVERHEADS = 'OVERHEADS', PREPAYMENT = 'PREPAYMENT', REVENUE = 'REVENUE', SALES = 'SALES', TERMLIAB = 'TERMLIAB', PAYGLIABILITY = 'PAYGLIABILITY', PAYG = 'PAYG', SUPERANNUATIONEXPENSE = 'SUPERANNUATIONEXPENSE', SUPERANNUATIONLIABILITY = 'SUPERANNUATIONLIABILITY', WAGESEXPENSE = 'WAGESEXPENSE', WAGESPAYABLELIABILITY = 'WAGESPAYABLELIABILITY' }

	export enum AllowanceType { CAR = 'CAR', TRANSPORT = 'TRANSPORT', TRAVEL = 'TRAVEL', LAUNDRY = 'LAUNDRY', MEALS = 'MEALS', JOBKEEPER = 'JOBKEEPER', OTHER = 'OTHER' }

	export interface BankAccount {

		/** The name of the account */
		AccountName?: string | null;

		/** The account number */
		AccountNumber?: string | null;

		/**
		 * Fixed amounts (for example, if an employee wants to have $100 of their salary transferred to one account, and the remaining amount to another)
		 * Type: double
		 */
		Amount?: number | null;

		/** The BSB number of the account */
		BSB?: string | null;

		/** If this account is the Remaining bank account */
		Remainder?: boolean | null;

		/** The text that will appear on your employee's bank statement when they receive payment */
		StatementText?: string | null;
	}
	export interface BankAccountFormProperties {

		/** The name of the account */
		AccountName: FormControl<string | null | undefined>,

		/** The account number */
		AccountNumber: FormControl<string | null | undefined>,

		/**
		 * Fixed amounts (for example, if an employee wants to have $100 of their salary transferred to one account, and the remaining amount to another)
		 * Type: double
		 */
		Amount: FormControl<number | null | undefined>,

		/** The BSB number of the account */
		BSB: FormControl<string | null | undefined>,

		/** If this account is the Remaining bank account */
		Remainder: FormControl<boolean | null | undefined>,

		/** The text that will appear on your employee's bank statement when they receive payment */
		StatementText: FormControl<string | null | undefined>,
	}
	export function CreateBankAccountFormGroup() {
		return new FormGroup<BankAccountFormProperties>({
			AccountName: new FormControl<string | null | undefined>(undefined),
			AccountNumber: new FormControl<string | null | undefined>(undefined),
			Amount: new FormControl<number | null | undefined>(undefined),
			BSB: new FormControl<string | null | undefined>(undefined),
			Remainder: new FormControl<boolean | null | undefined>(undefined),
			StatementText: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum CalendarType { WEEKLY = 'WEEKLY', FORTNIGHTLY = 'FORTNIGHTLY', FOURWEEKLY = 'FOURWEEKLY', MONTHLY = 'MONTHLY', TWICEMONTHLY = 'TWICEMONTHLY', QUARTERLY = 'QUARTERLY' }

	export interface DeductionLine {

		/**
		 * Deduction type amount
		 * Type: double
		 */
		Amount?: number | null;

		/** Required */
		CalculationType: DeductionLineCalculationType;

		/**
		 * Xero deduction type identifier
		 * Required
		 */
		DeductionTypeID: string;

		/**
		 * Deduction number of units
		 * Type: double
		 */
		NumberOfUnits?: number | null;

		/**
		 * The Percentage of the Deduction
		 * Type: double
		 */
		Percentage?: number | null;
	}
	export interface DeductionLineFormProperties {

		/**
		 * Deduction type amount
		 * Type: double
		 */
		Amount: FormControl<number | null | undefined>,

		/** Required */
		CalculationType: FormControl<DeductionLineCalculationType | null | undefined>,

		/**
		 * Xero deduction type identifier
		 * Required
		 */
		DeductionTypeID: FormControl<string | null | undefined>,

		/**
		 * Deduction number of units
		 * Type: double
		 */
		NumberOfUnits: FormControl<number | null | undefined>,

		/**
		 * The Percentage of the Deduction
		 * Type: double
		 */
		Percentage: FormControl<number | null | undefined>,
	}
	export function CreateDeductionLineFormGroup() {
		return new FormGroup<DeductionLineFormProperties>({
			Amount: new FormControl<number | null | undefined>(undefined),
			CalculationType: new FormControl<DeductionLineCalculationType | null | undefined>(undefined, [Validators.required]),
			DeductionTypeID: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NumberOfUnits: new FormControl<number | null | undefined>(undefined),
			Percentage: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum DeductionLineCalculationType { FIXEDAMOUNT = 'FIXEDAMOUNT', PRETAX = 'PRETAX', POSTTAX = 'POSTTAX' }

	export interface DeductionType {

		/** See Accounts */
		AccountCode?: string | null;

		/** Is the current record */
		CurrentRecord?: boolean | null;
		DeductionCategory?: DeductionTypeDeductionCategory | null;

		/** Xero identifier */
		DeductionTypeID?: string | null;

		/** Boolean to determine if the deduction type is reportable or exempt from W1 */
		IsExemptFromW1?: boolean | null;

		/**
		 * Name of the earnings rate (max length = 100)
		 * Max length: 100
		 */
		Name?: string | null;

		/** Most deductions don’t reduce your superannuation guarantee contribution liability, so typically you will not set any value for this. */
		ReducesSuper?: boolean | null;

		/** Indicates that this is a pre-tax deduction that will reduce the amount of tax you withhold from an employee. */
		ReducesTax?: boolean | null;

		/** Last modified timestamp */
		UpdatedDateUTC?: string | null;
	}
	export interface DeductionTypeFormProperties {

		/** See Accounts */
		AccountCode: FormControl<string | null | undefined>,

		/** Is the current record */
		CurrentRecord: FormControl<boolean | null | undefined>,
		DeductionCategory: FormControl<DeductionTypeDeductionCategory | null | undefined>,

		/** Xero identifier */
		DeductionTypeID: FormControl<string | null | undefined>,

		/** Boolean to determine if the deduction type is reportable or exempt from W1 */
		IsExemptFromW1: FormControl<boolean | null | undefined>,

		/**
		 * Name of the earnings rate (max length = 100)
		 * Max length: 100
		 */
		Name: FormControl<string | null | undefined>,

		/** Most deductions don’t reduce your superannuation guarantee contribution liability, so typically you will not set any value for this. */
		ReducesSuper: FormControl<boolean | null | undefined>,

		/** Indicates that this is a pre-tax deduction that will reduce the amount of tax you withhold from an employee. */
		ReducesTax: FormControl<boolean | null | undefined>,

		/** Last modified timestamp */
		UpdatedDateUTC: FormControl<string | null | undefined>,
	}
	export function CreateDeductionTypeFormGroup() {
		return new FormGroup<DeductionTypeFormProperties>({
			AccountCode: new FormControl<string | null | undefined>(undefined),
			CurrentRecord: new FormControl<boolean | null | undefined>(undefined),
			DeductionCategory: new FormControl<DeductionTypeDeductionCategory | null | undefined>(undefined),
			DeductionTypeID: new FormControl<string | null | undefined>(undefined),
			IsExemptFromW1: new FormControl<boolean | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(100)]),
			ReducesSuper: new FormControl<boolean | null | undefined>(undefined),
			ReducesTax: new FormControl<boolean | null | undefined>(undefined),
			UpdatedDateUTC: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DeductionTypeDeductionCategory { NONE = 'NONE', UNIONFEES = 'UNIONFEES', WORKPLACEGIVING = 'WORKPLACEGIVING' }

	export enum DeductionTypeCalculationType { FIXEDAMOUNT = 'FIXEDAMOUNT', PRETAX = 'PRETAX', POSTTAX = 'POSTTAX' }

	export interface EarningsLine {

		/**
		 * Earnings rate amount
		 * Type: double
		 */
		Amount?: number | null;

		/**
		 * Annual salary for earnings line
		 * Type: double
		 */
		AnnualSalary?: number | null;
		CalculationType?: EarningsLineCalculationType | null;

		/**
		 * Xero unique id for earnings rate
		 * Required
		 */
		EarningsRateID: string;

		/**
		 * Earnings rate amount. Only applicable if the EarningsRate RateType is Fixed
		 * Type: double
		 */
		FixedAmount?: number | null;

		/**
		 * Normal number of units for EarningsLine. Applicable when RateType is "MULTIPLE"
		 * Type: double
		 */
		NormalNumberOfUnits?: number | null;

		/**
		 * Earnings rate number of units.
		 * Type: double
		 */
		NumberOfUnits?: number | null;

		/**
		 * number of units for earning line
		 * Type: double
		 */
		NumberOfUnitsPerWeek?: number | null;

		/**
		 * Rate per unit of the EarningsLine.
		 * Type: double
		 */
		RatePerUnit?: number | null;
	}
	export interface EarningsLineFormProperties {

		/**
		 * Earnings rate amount
		 * Type: double
		 */
		Amount: FormControl<number | null | undefined>,

		/**
		 * Annual salary for earnings line
		 * Type: double
		 */
		AnnualSalary: FormControl<number | null | undefined>,
		CalculationType: FormControl<EarningsLineCalculationType | null | undefined>,

		/**
		 * Xero unique id for earnings rate
		 * Required
		 */
		EarningsRateID: FormControl<string | null | undefined>,

		/**
		 * Earnings rate amount. Only applicable if the EarningsRate RateType is Fixed
		 * Type: double
		 */
		FixedAmount: FormControl<number | null | undefined>,

		/**
		 * Normal number of units for EarningsLine. Applicable when RateType is "MULTIPLE"
		 * Type: double
		 */
		NormalNumberOfUnits: FormControl<number | null | undefined>,

		/**
		 * Earnings rate number of units.
		 * Type: double
		 */
		NumberOfUnits: FormControl<number | null | undefined>,

		/**
		 * number of units for earning line
		 * Type: double
		 */
		NumberOfUnitsPerWeek: FormControl<number | null | undefined>,

		/**
		 * Rate per unit of the EarningsLine.
		 * Type: double
		 */
		RatePerUnit: FormControl<number | null | undefined>,
	}
	export function CreateEarningsLineFormGroup() {
		return new FormGroup<EarningsLineFormProperties>({
			Amount: new FormControl<number | null | undefined>(undefined),
			AnnualSalary: new FormControl<number | null | undefined>(undefined),
			CalculationType: new FormControl<EarningsLineCalculationType | null | undefined>(undefined),
			EarningsRateID: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			FixedAmount: new FormControl<number | null | undefined>(undefined),
			NormalNumberOfUnits: new FormControl<number | null | undefined>(undefined),
			NumberOfUnits: new FormControl<number | null | undefined>(undefined),
			NumberOfUnitsPerWeek: new FormControl<number | null | undefined>(undefined),
			RatePerUnit: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum EarningsLineCalculationType { USEEARNINGSRATE = 'USEEARNINGSRATE', ENTEREARNINGSRATE = 'ENTEREARNINGSRATE', ANNUALSALARY = 'ANNUALSALARY' }

	export interface EarningsRate {

		/** See Accounts */
		AccountCode?: string | null;

		/** Indicates that this earnings rate should accrue leave. Only applicable if RateType is MULTIPLE */
		AccrueLeave?: boolean | null;
		AllowanceType?: AllowanceType | null;

		/**
		 * Optional Amount for FIXEDAMOUNT RateType EarningsRate
		 * Type: double
		 */
		Amount?: number | null;

		/** Is the current record */
		CurrentRecord?: boolean | null;

		/** Xero identifier */
		EarningsRateID?: string | null;
		EarningsType?: EarningsRateEarningsType | null;
		EmploymentTerminationPaymentType?: EarningsRateEmploymentTerminationPaymentType | null;

		/** See the ATO website for details of which payments are exempt from SGC */
		IsExemptFromSuper?: boolean | null;

		/** Most payments are subject to tax, so you should only set this value if you are sure that a payment is exempt from PAYG withholding */
		IsExemptFromTax?: boolean | null;

		/** Boolean to determine if the earnings rate is reportable or exempt from W1 */
		IsReportableAsW1?: boolean | null;

		/**
		 * This is the multiplier used to calculate the rate per unit, based on the employee’s ordinary earnings rate. For example, for time and a half enter 1.5. Only applicable if RateType is MULTIPLE
		 * Type: double
		 */
		Multiplier?: number | null;

		/**
		 * Name of the earnings rate (max length = 100)
		 * Max length: 100
		 */
		Name?: string | null;

		/** Default rate per unit (optional). Only applicable if RateType is RATEPERUNIT. */
		RatePerUnit?: string | null;
		RateType?: EarningsRateRateType | null;

		/**
		 * Type of units used to record earnings (max length = 50). Only When RateType is RATEPERUNIT
		 * Max length: 50
		 */
		TypeOfUnits?: string | null;

		/** Last modified timestamp */
		UpdatedDateUTC?: string | null;
	}
	export interface EarningsRateFormProperties {

		/** See Accounts */
		AccountCode: FormControl<string | null | undefined>,

		/** Indicates that this earnings rate should accrue leave. Only applicable if RateType is MULTIPLE */
		AccrueLeave: FormControl<boolean | null | undefined>,
		AllowanceType: FormControl<AllowanceType | null | undefined>,

		/**
		 * Optional Amount for FIXEDAMOUNT RateType EarningsRate
		 * Type: double
		 */
		Amount: FormControl<number | null | undefined>,

		/** Is the current record */
		CurrentRecord: FormControl<boolean | null | undefined>,

		/** Xero identifier */
		EarningsRateID: FormControl<string | null | undefined>,
		EarningsType: FormControl<EarningsRateEarningsType | null | undefined>,
		EmploymentTerminationPaymentType: FormControl<EarningsRateEmploymentTerminationPaymentType | null | undefined>,

		/** See the ATO website for details of which payments are exempt from SGC */
		IsExemptFromSuper: FormControl<boolean | null | undefined>,

		/** Most payments are subject to tax, so you should only set this value if you are sure that a payment is exempt from PAYG withholding */
		IsExemptFromTax: FormControl<boolean | null | undefined>,

		/** Boolean to determine if the earnings rate is reportable or exempt from W1 */
		IsReportableAsW1: FormControl<boolean | null | undefined>,

		/**
		 * This is the multiplier used to calculate the rate per unit, based on the employee’s ordinary earnings rate. For example, for time and a half enter 1.5. Only applicable if RateType is MULTIPLE
		 * Type: double
		 */
		Multiplier: FormControl<number | null | undefined>,

		/**
		 * Name of the earnings rate (max length = 100)
		 * Max length: 100
		 */
		Name: FormControl<string | null | undefined>,

		/** Default rate per unit (optional). Only applicable if RateType is RATEPERUNIT. */
		RatePerUnit: FormControl<string | null | undefined>,
		RateType: FormControl<EarningsRateRateType | null | undefined>,

		/**
		 * Type of units used to record earnings (max length = 50). Only When RateType is RATEPERUNIT
		 * Max length: 50
		 */
		TypeOfUnits: FormControl<string | null | undefined>,

		/** Last modified timestamp */
		UpdatedDateUTC: FormControl<string | null | undefined>,
	}
	export function CreateEarningsRateFormGroup() {
		return new FormGroup<EarningsRateFormProperties>({
			AccountCode: new FormControl<string | null | undefined>(undefined),
			AccrueLeave: new FormControl<boolean | null | undefined>(undefined),
			AllowanceType: new FormControl<AllowanceType | null | undefined>(undefined),
			Amount: new FormControl<number | null | undefined>(undefined),
			CurrentRecord: new FormControl<boolean | null | undefined>(undefined),
			EarningsRateID: new FormControl<string | null | undefined>(undefined),
			EarningsType: new FormControl<EarningsRateEarningsType | null | undefined>(undefined),
			EmploymentTerminationPaymentType: new FormControl<EarningsRateEmploymentTerminationPaymentType | null | undefined>(undefined),
			IsExemptFromSuper: new FormControl<boolean | null | undefined>(undefined),
			IsExemptFromTax: new FormControl<boolean | null | undefined>(undefined),
			IsReportableAsW1: new FormControl<boolean | null | undefined>(undefined),
			Multiplier: new FormControl<number | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(100)]),
			RatePerUnit: new FormControl<string | null | undefined>(undefined),
			RateType: new FormControl<EarningsRateRateType | null | undefined>(undefined),
			TypeOfUnits: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(50)]),
			UpdatedDateUTC: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum EarningsRateEarningsType { FIXED = 'FIXED', ORDINARYTIMEEARNINGS = 'ORDINARYTIMEEARNINGS', OVERTIMEEARNINGS = 'OVERTIMEEARNINGS', ALLOWANCE = 'ALLOWANCE', LUMPSUMD = 'LUMPSUMD', EMPLOYMENTTERMINATIONPAYMENT = 'EMPLOYMENTTERMINATIONPAYMENT', LUMPSUMA = 'LUMPSUMA', LUMPSUMB = 'LUMPSUMB', BONUSESANDCOMMISSIONS = 'BONUSESANDCOMMISSIONS', LUMPSUME = 'LUMPSUME' }

	export enum EarningsRateEmploymentTerminationPaymentType { O = 'O', R = 'R' }

	export enum EarningsRateRateType { FIXEDAMOUNT = 'FIXEDAMOUNT', MULTIPLE = 'MULTIPLE', RATEPERUNIT = 'RATEPERUNIT' }

	export enum EarningsRateCalculationType { USEEARNINGSRATE = 'USEEARNINGSRATE', ENTEREARNINGSRATE = 'ENTEREARNINGSRATE', ANNUALSALARY = 'ANNUALSALARY' }

	export enum EarningsType { FIXED = 'FIXED', ORDINARYTIMEEARNINGS = 'ORDINARYTIMEEARNINGS', OVERTIMEEARNINGS = 'OVERTIMEEARNINGS', ALLOWANCE = 'ALLOWANCE', LUMPSUMD = 'LUMPSUMD', EMPLOYMENTTERMINATIONPAYMENT = 'EMPLOYMENTTERMINATIONPAYMENT', LUMPSUMA = 'LUMPSUMA', LUMPSUMB = 'LUMPSUMB', BONUSESANDCOMMISSIONS = 'BONUSESANDCOMMISSIONS', LUMPSUME = 'LUMPSUME' }

	export interface Employee {
		BankAccounts?: Array<BankAccount>;

		/** Employees classification */
		Classification?: string | null;

		/**
		 * Date of birth of the employee (YYYY-MM-DD)
		 * Required
		 */
		DateOfBirth: string;

		/** The email address for the employee */
		Email?: string | null;

		/** The Employee Group allows you to report on payroll expenses and liabilities for each group of employees */
		EmployeeGroupName?: string | null;

		/** Xero unique identifier for an Employee */
		EmployeeID?: string | null;

		/**
		 * First name of employee
		 * Required
		 */
		FirstName: string;

		/** The employee’s gender. See Employee Gender */
		Gender?: EmployeeGender | null;
		HomeAddress?: HomeAddress;

		/** Authorised to approve other employees' leave requests */
		IsAuthorisedToApproveLeave?: boolean | null;

		/** Authorised to approve timesheets */
		IsAuthorisedToApproveTimesheets?: boolean | null;

		/** JobTitle of the employee */
		JobTitle?: string | null;

		/**
		 * Last name of employee
		 * Required
		 */
		LastName: string;
		LeaveBalances?: Array<LeaveBalance>;
		LeaveLines?: Array<LeaveLine>;

		/** Middle name(s) of the employee */
		MiddleNames?: string | null;

		/** Employee mobile number */
		Mobile?: string | null;
		OpeningBalances?: OpeningBalances;

		/** Xero unique identifier for earnings rate */
		OrdinaryEarningsRateID?: string | null;
		PayTemplate?: PayTemplate;

		/** Xero unique identifier for payroll calendar for the employee */
		PayrollCalendarID?: string | null;

		/** Employee phone number */
		Phone?: string | null;

		/** Start date for an employee (YYYY-MM-DD) */
		StartDate?: string | null;

		/** Employee Status Types */
		Status?: EmployeeStatus | null;
		SuperMemberships?: Array<SuperMembership>;
		TaxDeclaration?: TaxDeclaration;

		/** Employee Termination Date (YYYY-MM-DD) */
		TerminationDate?: string | null;

		/** Title of the employee */
		Title?: string | null;

		/** Employee’s twitter name */
		TwitterUserName?: string | null;

		/** Last modified timestamp */
		UpdatedDateUTC?: string | null;

		/** Displays array of validation error messages from the API */
		ValidationErrors?: Array<ValidationError>;
	}
	export interface EmployeeFormProperties {

		/** Employees classification */
		Classification: FormControl<string | null | undefined>,

		/**
		 * Date of birth of the employee (YYYY-MM-DD)
		 * Required
		 */
		DateOfBirth: FormControl<string | null | undefined>,

		/** The email address for the employee */
		Email: FormControl<string | null | undefined>,

		/** The Employee Group allows you to report on payroll expenses and liabilities for each group of employees */
		EmployeeGroupName: FormControl<string | null | undefined>,

		/** Xero unique identifier for an Employee */
		EmployeeID: FormControl<string | null | undefined>,

		/**
		 * First name of employee
		 * Required
		 */
		FirstName: FormControl<string | null | undefined>,

		/** The employee’s gender. See Employee Gender */
		Gender: FormControl<EmployeeGender | null | undefined>,

		/** Authorised to approve other employees' leave requests */
		IsAuthorisedToApproveLeave: FormControl<boolean | null | undefined>,

		/** Authorised to approve timesheets */
		IsAuthorisedToApproveTimesheets: FormControl<boolean | null | undefined>,

		/** JobTitle of the employee */
		JobTitle: FormControl<string | null | undefined>,

		/**
		 * Last name of employee
		 * Required
		 */
		LastName: FormControl<string | null | undefined>,

		/** Middle name(s) of the employee */
		MiddleNames: FormControl<string | null | undefined>,

		/** Employee mobile number */
		Mobile: FormControl<string | null | undefined>,

		/** Xero unique identifier for earnings rate */
		OrdinaryEarningsRateID: FormControl<string | null | undefined>,

		/** Xero unique identifier for payroll calendar for the employee */
		PayrollCalendarID: FormControl<string | null | undefined>,

		/** Employee phone number */
		Phone: FormControl<string | null | undefined>,

		/** Start date for an employee (YYYY-MM-DD) */
		StartDate: FormControl<string | null | undefined>,

		/** Employee Status Types */
		Status: FormControl<EmployeeStatus | null | undefined>,

		/** Employee Termination Date (YYYY-MM-DD) */
		TerminationDate: FormControl<string | null | undefined>,

		/** Title of the employee */
		Title: FormControl<string | null | undefined>,

		/** Employee’s twitter name */
		TwitterUserName: FormControl<string | null | undefined>,

		/** Last modified timestamp */
		UpdatedDateUTC: FormControl<string | null | undefined>,
	}
	export function CreateEmployeeFormGroup() {
		return new FormGroup<EmployeeFormProperties>({
			Classification: new FormControl<string | null | undefined>(undefined),
			DateOfBirth: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Email: new FormControl<string | null | undefined>(undefined),
			EmployeeGroupName: new FormControl<string | null | undefined>(undefined),
			EmployeeID: new FormControl<string | null | undefined>(undefined),
			FirstName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Gender: new FormControl<EmployeeGender | null | undefined>(undefined),
			IsAuthorisedToApproveLeave: new FormControl<boolean | null | undefined>(undefined),
			IsAuthorisedToApproveTimesheets: new FormControl<boolean | null | undefined>(undefined),
			JobTitle: new FormControl<string | null | undefined>(undefined),
			LastName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MiddleNames: new FormControl<string | null | undefined>(undefined),
			Mobile: new FormControl<string | null | undefined>(undefined),
			OrdinaryEarningsRateID: new FormControl<string | null | undefined>(undefined),
			PayrollCalendarID: new FormControl<string | null | undefined>(undefined),
			Phone: new FormControl<string | null | undefined>(undefined),
			StartDate: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<EmployeeStatus | null | undefined>(undefined),
			TerminationDate: new FormControl<string | null | undefined>(undefined),
			Title: new FormControl<string | null | undefined>(undefined),
			TwitterUserName: new FormControl<string | null | undefined>(undefined),
			UpdatedDateUTC: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum EmployeeGender { N = 'N', M = 'M', F = 'F', I = 'I' }

	export interface HomeAddress {

		/**
		 * Address line 1 for employee home address
		 * Required
		 */
		AddressLine1: string;

		/** Address line 2 for employee home address */
		AddressLine2?: string | null;

		/** Suburb for employee home address */
		City?: string | null;

		/** Country of HomeAddress */
		Country?: string | null;

		/** PostCode for employee home address */
		PostalCode?: string | null;

		/** State abbreviation for employee home address */
		Region?: HomeAddressRegion | null;
	}
	export interface HomeAddressFormProperties {

		/**
		 * Address line 1 for employee home address
		 * Required
		 */
		AddressLine1: FormControl<string | null | undefined>,

		/** Address line 2 for employee home address */
		AddressLine2: FormControl<string | null | undefined>,

		/** Suburb for employee home address */
		City: FormControl<string | null | undefined>,

		/** Country of HomeAddress */
		Country: FormControl<string | null | undefined>,

		/** PostCode for employee home address */
		PostalCode: FormControl<string | null | undefined>,

		/** State abbreviation for employee home address */
		Region: FormControl<HomeAddressRegion | null | undefined>,
	}
	export function CreateHomeAddressFormGroup() {
		return new FormGroup<HomeAddressFormProperties>({
			AddressLine1: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			AddressLine2: new FormControl<string | null | undefined>(undefined),
			City: new FormControl<string | null | undefined>(undefined),
			Country: new FormControl<string | null | undefined>(undefined),
			PostalCode: new FormControl<string | null | undefined>(undefined),
			Region: new FormControl<HomeAddressRegion | null | undefined>(undefined),
		});

	}

	export enum HomeAddressRegion { ACT = 'ACT', NSW = 'NSW', NT = 'NT', QLD = 'QLD', SA = 'SA', TAS = 'TAS', VIC = 'VIC', WA = 'WA' }

	export interface LeaveBalance {

		/** The name of the leave type */
		LeaveName?: string | null;

		/** Identifier of the leave type (see PayItems) */
		LeaveTypeID?: string | null;

		/**
		 * The balance of the leave available
		 * Type: double
		 */
		NumberOfUnits?: number | null;

		/** The type of units as specified by the LeaveType (see PayItems) */
		TypeOfUnits?: string | null;
	}
	export interface LeaveBalanceFormProperties {

		/** The name of the leave type */
		LeaveName: FormControl<string | null | undefined>,

		/** Identifier of the leave type (see PayItems) */
		LeaveTypeID: FormControl<string | null | undefined>,

		/**
		 * The balance of the leave available
		 * Type: double
		 */
		NumberOfUnits: FormControl<number | null | undefined>,

		/** The type of units as specified by the LeaveType (see PayItems) */
		TypeOfUnits: FormControl<string | null | undefined>,
	}
	export function CreateLeaveBalanceFormGroup() {
		return new FormGroup<LeaveBalanceFormProperties>({
			LeaveName: new FormControl<string | null | undefined>(undefined),
			LeaveTypeID: new FormControl<string | null | undefined>(undefined),
			NumberOfUnits: new FormControl<number | null | undefined>(undefined),
			TypeOfUnits: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface LeaveLine {

		/**
		 * Hours of leave accrued each year
		 * Type: double
		 */
		AnnualNumberOfUnits?: number | null;

		/** Calculation type for leave line for Opening Balance on Employee */
		CalculationType?: LeaveLineCalculationType | null;
		EmploymentTerminationPaymentType?: EarningsRateEmploymentTerminationPaymentType | null;
		EntitlementFinalPayPayoutType?: LeaveLineEntitlementFinalPayPayoutType | null;

		/**
		 * Normal ordinary earnings number of units for leave line.
		 * Type: double
		 */
		FullTimeNumberOfUnitsPerPeriod?: number | null;

		/** amount of leave line */
		IncludeSuperannuationGuaranteeContribution?: boolean | null;

		/** Xero leave type identifier */
		LeaveTypeID?: string | null;

		/**
		 * Number of units for leave line.
		 * Type: double
		 */
		NumberOfUnits?: number | null;
	}
	export interface LeaveLineFormProperties {

		/**
		 * Hours of leave accrued each year
		 * Type: double
		 */
		AnnualNumberOfUnits: FormControl<number | null | undefined>,

		/** Calculation type for leave line for Opening Balance on Employee */
		CalculationType: FormControl<LeaveLineCalculationType | null | undefined>,
		EmploymentTerminationPaymentType: FormControl<EarningsRateEmploymentTerminationPaymentType | null | undefined>,
		EntitlementFinalPayPayoutType: FormControl<LeaveLineEntitlementFinalPayPayoutType | null | undefined>,

		/**
		 * Normal ordinary earnings number of units for leave line.
		 * Type: double
		 */
		FullTimeNumberOfUnitsPerPeriod: FormControl<number | null | undefined>,

		/** amount of leave line */
		IncludeSuperannuationGuaranteeContribution: FormControl<boolean | null | undefined>,

		/** Xero leave type identifier */
		LeaveTypeID: FormControl<string | null | undefined>,

		/**
		 * Number of units for leave line.
		 * Type: double
		 */
		NumberOfUnits: FormControl<number | null | undefined>,
	}
	export function CreateLeaveLineFormGroup() {
		return new FormGroup<LeaveLineFormProperties>({
			AnnualNumberOfUnits: new FormControl<number | null | undefined>(undefined),
			CalculationType: new FormControl<LeaveLineCalculationType | null | undefined>(undefined),
			EmploymentTerminationPaymentType: new FormControl<EarningsRateEmploymentTerminationPaymentType | null | undefined>(undefined),
			EntitlementFinalPayPayoutType: new FormControl<LeaveLineEntitlementFinalPayPayoutType | null | undefined>(undefined),
			FullTimeNumberOfUnitsPerPeriod: new FormControl<number | null | undefined>(undefined),
			IncludeSuperannuationGuaranteeContribution: new FormControl<boolean | null | undefined>(undefined),
			LeaveTypeID: new FormControl<string | null | undefined>(undefined),
			NumberOfUnits: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum LeaveLineCalculationType { NOCALCULATIONREQUIRED = 'NOCALCULATIONREQUIRED', FIXEDAMOUNTEACHPERIOD = 'FIXEDAMOUNTEACHPERIOD', ENTERRATEINPAYTEMPLATE = 'ENTERRATEINPAYTEMPLATE', BASEDONORDINARYEARNINGS = 'BASEDONORDINARYEARNINGS', '' = '' }

	export enum LeaveLineEntitlementFinalPayPayoutType { NOTPAIDOUT = 'NOTPAIDOUT', PAIDOUT = 'PAIDOUT' }

	export interface OpeningBalances {
		DeductionLines?: Array<DeductionLine>;
		EarningsLines?: Array<EarningsLine>;
		LeaveLines?: Array<LeaveLine>;

		/** Opening Balance Date. (YYYY-MM-DD) */
		OpeningBalanceDate?: string | null;
		ReimbursementLines?: Array<ReimbursementLine>;
		SuperLines?: Array<SuperLine>;

		/** Opening Balance tax */
		Tax?: string | null;
	}
	export interface OpeningBalancesFormProperties {

		/** Opening Balance Date. (YYYY-MM-DD) */
		OpeningBalanceDate: FormControl<string | null | undefined>,

		/** Opening Balance tax */
		Tax: FormControl<string | null | undefined>,
	}
	export function CreateOpeningBalancesFormGroup() {
		return new FormGroup<OpeningBalancesFormProperties>({
			OpeningBalanceDate: new FormControl<string | null | undefined>(undefined),
			Tax: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ReimbursementLine {

		/**
		 * Reimbursement type amount
		 * Type: double
		 */
		Amount?: number | null;

		/**
		 * Reimbursement lines description (max length 50)
		 * Max length: 50
		 */
		Description?: string | null;

		/** Reimbursement expense account. For posted pay run you should be able to see expense account code. */
		ExpenseAccount?: string | null;

		/** Xero reimbursement type identifier */
		ReimbursementTypeID?: string | null;
	}
	export interface ReimbursementLineFormProperties {

		/**
		 * Reimbursement type amount
		 * Type: double
		 */
		Amount: FormControl<number | null | undefined>,

		/**
		 * Reimbursement lines description (max length 50)
		 * Max length: 50
		 */
		Description: FormControl<string | null | undefined>,

		/** Reimbursement expense account. For posted pay run you should be able to see expense account code. */
		ExpenseAccount: FormControl<string | null | undefined>,

		/** Xero reimbursement type identifier */
		ReimbursementTypeID: FormControl<string | null | undefined>,
	}
	export function CreateReimbursementLineFormGroup() {
		return new FormGroup<ReimbursementLineFormProperties>({
			Amount: new FormControl<number | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(50)]),
			ExpenseAccount: new FormControl<string | null | undefined>(undefined),
			ReimbursementTypeID: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SuperLine {

		/**
		 * Super membership amount
		 * Type: double
		 */
		Amount?: number | null;
		CalculationType?: SuperLineCalculationType | null;
		ContributionType?: SuperLineContributionType | null;

		/** expense account code */
		ExpenseAccountCode?: string | null;

		/** liabilty account code */
		LiabilityAccountCode?: string | null;

		/**
		 * amount of minimum earnings
		 * Type: double
		 */
		MinimumMonthlyEarnings?: number | null;

		/**
		 * percentage for super line
		 * Type: double
		 */
		Percentage?: number | null;

		/** Xero super membership ID */
		SuperMembershipID?: string | null;
	}
	export interface SuperLineFormProperties {

		/**
		 * Super membership amount
		 * Type: double
		 */
		Amount: FormControl<number | null | undefined>,
		CalculationType: FormControl<SuperLineCalculationType | null | undefined>,
		ContributionType: FormControl<SuperLineContributionType | null | undefined>,

		/** expense account code */
		ExpenseAccountCode: FormControl<string | null | undefined>,

		/** liabilty account code */
		LiabilityAccountCode: FormControl<string | null | undefined>,

		/**
		 * amount of minimum earnings
		 * Type: double
		 */
		MinimumMonthlyEarnings: FormControl<number | null | undefined>,

		/**
		 * percentage for super line
		 * Type: double
		 */
		Percentage: FormControl<number | null | undefined>,

		/** Xero super membership ID */
		SuperMembershipID: FormControl<string | null | undefined>,
	}
	export function CreateSuperLineFormGroup() {
		return new FormGroup<SuperLineFormProperties>({
			Amount: new FormControl<number | null | undefined>(undefined),
			CalculationType: new FormControl<SuperLineCalculationType | null | undefined>(undefined),
			ContributionType: new FormControl<SuperLineContributionType | null | undefined>(undefined),
			ExpenseAccountCode: new FormControl<string | null | undefined>(undefined),
			LiabilityAccountCode: new FormControl<string | null | undefined>(undefined),
			MinimumMonthlyEarnings: new FormControl<number | null | undefined>(undefined),
			Percentage: new FormControl<number | null | undefined>(undefined),
			SuperMembershipID: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum SuperLineCalculationType { FIXEDAMOUNT = 'FIXEDAMOUNT', PERCENTAGEOFEARNINGS = 'PERCENTAGEOFEARNINGS', STATUTORY = 'STATUTORY' }

	export enum SuperLineContributionType { SGC = 'SGC', SALARYSACRIFICE = 'SALARYSACRIFICE', EMPLOYERADDITIONAL = 'EMPLOYERADDITIONAL', EMPLOYEE = 'EMPLOYEE' }

	export interface PayTemplate {
		DeductionLines?: Array<DeductionLine>;
		EarningsLines?: Array<EarningsLine>;
		LeaveLines?: Array<LeaveLine>;
		ReimbursementLines?: Array<ReimbursementLine>;
		SuperLines?: Array<SuperLine>;
	}
	export interface PayTemplateFormProperties {
	}
	export function CreatePayTemplateFormGroup() {
		return new FormGroup<PayTemplateFormProperties>({
		});

	}

	export enum EmployeeStatus { ACTIVE = 'ACTIVE', TERMINATED = 'TERMINATED' }

	export interface SuperMembership {

		/**
		 * The membership number assigned to the employee by the super fund.
		 * Required
		 */
		EmployeeNumber: string;

		/**
		 * Xero identifier for super fund
		 * Required
		 */
		SuperFundID: string;

		/** Xero unique identifier for Super membership */
		SuperMembershipID?: string | null;
	}
	export interface SuperMembershipFormProperties {

		/**
		 * The membership number assigned to the employee by the super fund.
		 * Required
		 */
		EmployeeNumber: FormControl<string | null | undefined>,

		/**
		 * Xero identifier for super fund
		 * Required
		 */
		SuperFundID: FormControl<string | null | undefined>,

		/** Xero unique identifier for Super membership */
		SuperMembershipID: FormControl<string | null | undefined>,
	}
	export function CreateSuperMembershipFormGroup() {
		return new FormGroup<SuperMembershipFormProperties>({
			EmployeeNumber: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SuperFundID: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SuperMembershipID: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TaxDeclaration {

		/** If the employee has approved withholding variation. e.g (0 - 100) */
		ApprovedWithholdingVariationPercentage?: string | null;

		/** If the employee is Australian resident for tax purposes. e.g true or false */
		AustralianResidentForTaxPurposes?: boolean | null;

		/** If the employee is eligible to receive an additional percentage on top of ordinary earnings when they take leave (typically 17.5%). e.g true or false */
		EligibleToReceiveLeaveLoading?: boolean | null;

		/** Address line 1 for employee home address */
		EmployeeID?: string | null;
		EmploymentBasis?: TaxDeclarationEmploymentBasis | null;

		/** If employee has HECS or HELP debt. e.g true or false */
		HasHELPDebt?: boolean | null;

		/** If employee has financial supplement debt. e.g true or false */
		HasSFSSDebt?: boolean | null;

		/** If the employee is eligible for student startup loan rules */
		HasStudentStartupLoan?: boolean | null;

		/** If employee has trade support loan. e.g true or false */
		HasTradeSupportLoanDebt?: boolean | null;
		ResidencyStatus?: TaxDeclarationResidencyStatus | null;
		TFNExemptionType?: TaxDeclarationTFNExemptionType | null;

		/** The tax file number e.g 123123123. */
		TaxFileNumber?: string | null;

		/** If tax free threshold claimed. e.g true or false */
		TaxFreeThresholdClaimed?: boolean | null;

		/** If has tax offset estimated then the tax offset estimated amount. e.g 100 */
		TaxOffsetEstimatedAmount?: string | null;

		/** Last modified timestamp */
		UpdatedDateUTC?: string | null;

		/** If the employee has requested that additional tax be withheld each pay run. e.g 50 */
		UpwardVariationTaxWithholdingAmount?: string | null;
	}
	export interface TaxDeclarationFormProperties {

		/** If the employee has approved withholding variation. e.g (0 - 100) */
		ApprovedWithholdingVariationPercentage: FormControl<string | null | undefined>,

		/** If the employee is Australian resident for tax purposes. e.g true or false */
		AustralianResidentForTaxPurposes: FormControl<boolean | null | undefined>,

		/** If the employee is eligible to receive an additional percentage on top of ordinary earnings when they take leave (typically 17.5%). e.g true or false */
		EligibleToReceiveLeaveLoading: FormControl<boolean | null | undefined>,

		/** Address line 1 for employee home address */
		EmployeeID: FormControl<string | null | undefined>,
		EmploymentBasis: FormControl<TaxDeclarationEmploymentBasis | null | undefined>,

		/** If employee has HECS or HELP debt. e.g true or false */
		HasHELPDebt: FormControl<boolean | null | undefined>,

		/** If employee has financial supplement debt. e.g true or false */
		HasSFSSDebt: FormControl<boolean | null | undefined>,

		/** If the employee is eligible for student startup loan rules */
		HasStudentStartupLoan: FormControl<boolean | null | undefined>,

		/** If employee has trade support loan. e.g true or false */
		HasTradeSupportLoanDebt: FormControl<boolean | null | undefined>,
		ResidencyStatus: FormControl<TaxDeclarationResidencyStatus | null | undefined>,
		TFNExemptionType: FormControl<TaxDeclarationTFNExemptionType | null | undefined>,

		/** The tax file number e.g 123123123. */
		TaxFileNumber: FormControl<string | null | undefined>,

		/** If tax free threshold claimed. e.g true or false */
		TaxFreeThresholdClaimed: FormControl<boolean | null | undefined>,

		/** If has tax offset estimated then the tax offset estimated amount. e.g 100 */
		TaxOffsetEstimatedAmount: FormControl<string | null | undefined>,

		/** Last modified timestamp */
		UpdatedDateUTC: FormControl<string | null | undefined>,

		/** If the employee has requested that additional tax be withheld each pay run. e.g 50 */
		UpwardVariationTaxWithholdingAmount: FormControl<string | null | undefined>,
	}
	export function CreateTaxDeclarationFormGroup() {
		return new FormGroup<TaxDeclarationFormProperties>({
			ApprovedWithholdingVariationPercentage: new FormControl<string | null | undefined>(undefined),
			AustralianResidentForTaxPurposes: new FormControl<boolean | null | undefined>(undefined),
			EligibleToReceiveLeaveLoading: new FormControl<boolean | null | undefined>(undefined),
			EmployeeID: new FormControl<string | null | undefined>(undefined),
			EmploymentBasis: new FormControl<TaxDeclarationEmploymentBasis | null | undefined>(undefined),
			HasHELPDebt: new FormControl<boolean | null | undefined>(undefined),
			HasSFSSDebt: new FormControl<boolean | null | undefined>(undefined),
			HasStudentStartupLoan: new FormControl<boolean | null | undefined>(undefined),
			HasTradeSupportLoanDebt: new FormControl<boolean | null | undefined>(undefined),
			ResidencyStatus: new FormControl<TaxDeclarationResidencyStatus | null | undefined>(undefined),
			TFNExemptionType: new FormControl<TaxDeclarationTFNExemptionType | null | undefined>(undefined),
			TaxFileNumber: new FormControl<string | null | undefined>(undefined),
			TaxFreeThresholdClaimed: new FormControl<boolean | null | undefined>(undefined),
			TaxOffsetEstimatedAmount: new FormControl<string | null | undefined>(undefined),
			UpdatedDateUTC: new FormControl<string | null | undefined>(undefined),
			UpwardVariationTaxWithholdingAmount: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum TaxDeclarationEmploymentBasis { FULLTIME = 'FULLTIME', PARTTIME = 'PARTTIME', CASUAL = 'CASUAL', LABOURHIRE = 'LABOURHIRE', SUPERINCOMESTREAM = 'SUPERINCOMESTREAM' }

	export enum TaxDeclarationResidencyStatus { AUSTRALIANRESIDENT = 'AUSTRALIANRESIDENT', FOREIGNRESIDENT = 'FOREIGNRESIDENT', WORKINGHOLIDAYMAKER = 'WORKINGHOLIDAYMAKER' }

	export enum TaxDeclarationTFNExemptionType { NOTQUOTED = 'NOTQUOTED', PENDING = 'PENDING', PENSIONER = 'PENSIONER', UNDER18 = 'UNDER18' }

	export interface ValidationError {

		/** Validation error message */
		Message?: string | null;
	}
	export interface ValidationErrorFormProperties {

		/** Validation error message */
		Message: FormControl<string | null | undefined>,
	}
	export function CreateValidationErrorFormGroup() {
		return new FormGroup<ValidationErrorFormProperties>({
			Message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Employees {
		Employees1?: Array<Employee>;
	}
	export interface EmployeesFormProperties {
	}
	export function CreateEmployeesFormGroup() {
		return new FormGroup<EmployeesFormProperties>({
		});

	}

	export enum EmploymentBasis { FULLTIME = 'FULLTIME', PARTTIME = 'PARTTIME', CASUAL = 'CASUAL', LABOURHIRE = 'LABOURHIRE', SUPERINCOMESTREAM = 'SUPERINCOMESTREAM' }

	export enum EmploymentTerminationPaymentType { O = 'O', R = 'R' }

	export enum EntitlementFinalPayPayoutType { NOTPAIDOUT = 'NOTPAIDOUT', PAIDOUT = 'PAIDOUT' }

	export interface LeaveAccrualLine {

		/** If you want to auto calculate leave. */
		AutoCalculate?: boolean | null;

		/** Xero identifier for the Leave type. */
		LeaveTypeID?: string | null;

		/**
		 * Leave Accrual number of units
		 * Type: double
		 */
		NumberOfUnits?: number | null;
	}
	export interface LeaveAccrualLineFormProperties {

		/** If you want to auto calculate leave. */
		AutoCalculate: FormControl<boolean | null | undefined>,

		/** Xero identifier for the Leave type. */
		LeaveTypeID: FormControl<string | null | undefined>,

		/**
		 * Leave Accrual number of units
		 * Type: double
		 */
		NumberOfUnits: FormControl<number | null | undefined>,
	}
	export function CreateLeaveAccrualLineFormGroup() {
		return new FormGroup<LeaveAccrualLineFormProperties>({
			AutoCalculate: new FormControl<boolean | null | undefined>(undefined),
			LeaveTypeID: new FormControl<string | null | undefined>(undefined),
			NumberOfUnits: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface LeaveApplication {

		/** The Description of the Leave */
		Description?: string | null;

		/** The Xero identifier for Payroll Employee */
		EmployeeID?: string | null;

		/** End date of the leave (YYYY-MM-DD) */
		EndDate?: string | null;

		/** The Xero identifier for Payroll Employee */
		LeaveApplicationID?: string | null;
		LeavePeriods?: Array<LeavePeriod>;

		/** The Xero identifier for Leave Type */
		LeaveTypeID?: string | null;

		/** Start date of the leave (YYYY-MM-DD) */
		StartDate?: string | null;

		/** The title of the leave */
		Title?: string | null;

		/** Last modified timestamp */
		UpdatedDateUTC?: string | null;

		/** Displays array of validation error messages from the API */
		ValidationErrors?: Array<ValidationError>;
	}
	export interface LeaveApplicationFormProperties {

		/** The Description of the Leave */
		Description: FormControl<string | null | undefined>,

		/** The Xero identifier for Payroll Employee */
		EmployeeID: FormControl<string | null | undefined>,

		/** End date of the leave (YYYY-MM-DD) */
		EndDate: FormControl<string | null | undefined>,

		/** The Xero identifier for Payroll Employee */
		LeaveApplicationID: FormControl<string | null | undefined>,

		/** The Xero identifier for Leave Type */
		LeaveTypeID: FormControl<string | null | undefined>,

		/** Start date of the leave (YYYY-MM-DD) */
		StartDate: FormControl<string | null | undefined>,

		/** The title of the leave */
		Title: FormControl<string | null | undefined>,

		/** Last modified timestamp */
		UpdatedDateUTC: FormControl<string | null | undefined>,
	}
	export function CreateLeaveApplicationFormGroup() {
		return new FormGroup<LeaveApplicationFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined),
			EmployeeID: new FormControl<string | null | undefined>(undefined),
			EndDate: new FormControl<string | null | undefined>(undefined),
			LeaveApplicationID: new FormControl<string | null | undefined>(undefined),
			LeaveTypeID: new FormControl<string | null | undefined>(undefined),
			StartDate: new FormControl<string | null | undefined>(undefined),
			Title: new FormControl<string | null | undefined>(undefined),
			UpdatedDateUTC: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface LeavePeriod {
		LeavePeriodStatus?: LeavePeriodLeavePeriodStatus | null;

		/**
		 * The Number of Units for the leave
		 * Type: double
		 */
		NumberOfUnits?: number | null;

		/** The Pay Period End Date (YYYY-MM-DD) */
		PayPeriodEndDate?: string | null;

		/** The Pay Period Start Date (YYYY-MM-DD) */
		PayPeriodStartDate?: string | null;
	}
	export interface LeavePeriodFormProperties {
		LeavePeriodStatus: FormControl<LeavePeriodLeavePeriodStatus | null | undefined>,

		/**
		 * The Number of Units for the leave
		 * Type: double
		 */
		NumberOfUnits: FormControl<number | null | undefined>,

		/** The Pay Period End Date (YYYY-MM-DD) */
		PayPeriodEndDate: FormControl<string | null | undefined>,

		/** The Pay Period Start Date (YYYY-MM-DD) */
		PayPeriodStartDate: FormControl<string | null | undefined>,
	}
	export function CreateLeavePeriodFormGroup() {
		return new FormGroup<LeavePeriodFormProperties>({
			LeavePeriodStatus: new FormControl<LeavePeriodLeavePeriodStatus | null | undefined>(undefined),
			NumberOfUnits: new FormControl<number | null | undefined>(undefined),
			PayPeriodEndDate: new FormControl<string | null | undefined>(undefined),
			PayPeriodStartDate: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum LeavePeriodLeavePeriodStatus { SCHEDULED = 'SCHEDULED', PROCESSED = 'PROCESSED' }

	export interface LeaveApplications {
		LeaveApplications1?: Array<LeaveApplication>;
	}
	export interface LeaveApplicationsFormProperties {
	}
	export function CreateLeaveApplicationsFormGroup() {
		return new FormGroup<LeaveApplicationsFormProperties>({
		});

	}

	export interface LeaveEarningsLine {

		/** Xero identifier */
		EarningsRateID?: string | null;

		/**
		 * Earnings rate number of units.
		 * Type: double
		 */
		NumberOfUnits?: number | null;

		/**
		 * Rate per unit of the EarningsLine.
		 * Type: double
		 */
		RatePerUnit?: number | null;
	}
	export interface LeaveEarningsLineFormProperties {

		/** Xero identifier */
		EarningsRateID: FormControl<string | null | undefined>,

		/**
		 * Earnings rate number of units.
		 * Type: double
		 */
		NumberOfUnits: FormControl<number | null | undefined>,

		/**
		 * Rate per unit of the EarningsLine.
		 * Type: double
		 */
		RatePerUnit: FormControl<number | null | undefined>,
	}
	export function CreateLeaveEarningsLineFormGroup() {
		return new FormGroup<LeaveEarningsLineFormProperties>({
			EarningsRateID: new FormControl<string | null | undefined>(undefined),
			NumberOfUnits: new FormControl<number | null | undefined>(undefined),
			RatePerUnit: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The leave type lines */
	export interface LeaveLines {
		Employee?: Array<LeaveLine>;
	}

	/** The leave type lines */
	export interface LeaveLinesFormProperties {
	}
	export function CreateLeaveLinesFormGroup() {
		return new FormGroup<LeaveLinesFormProperties>({
		});

	}

	export enum LeavePeriodStatus { SCHEDULED = 'SCHEDULED', PROCESSED = 'PROCESSED' }

	export interface LeaveType {

		/** Is the current record */
		CurrentRecord?: boolean | null;

		/** Set this to indicate that an employee will be paid when taking this type of leave */
		IsPaidLeave?: boolean | null;

		/**
		 * Enter an amount here if your organisation pays an additional percentage on top of ordinary earnings when your employees take leave (typically 17.5%)
		 * Type: double
		 */
		LeaveLoadingRate?: number | null;

		/** Xero identifier */
		LeaveTypeID?: string | null;

		/**
		 * Name of the earnings rate (max length = 100)
		 * Max length: 100
		 */
		Name?: string | null;

		/**
		 * The number of units the employee is entitled to each year
		 * Type: double
		 */
		NormalEntitlement?: number | null;

		/** Set this if you want a balance for this leave type to be shown on your employee’s payslips */
		ShowOnPayslip?: boolean | null;

		/** The type of units by which leave entitlements are normally tracked. These are typically the same as the type of units used for the employee’s ordinary earnings rate */
		TypeOfUnits?: string | null;

		/** Last modified timestamp */
		UpdatedDateUTC?: string | null;
	}
	export interface LeaveTypeFormProperties {

		/** Is the current record */
		CurrentRecord: FormControl<boolean | null | undefined>,

		/** Set this to indicate that an employee will be paid when taking this type of leave */
		IsPaidLeave: FormControl<boolean | null | undefined>,

		/**
		 * Enter an amount here if your organisation pays an additional percentage on top of ordinary earnings when your employees take leave (typically 17.5%)
		 * Type: double
		 */
		LeaveLoadingRate: FormControl<number | null | undefined>,

		/** Xero identifier */
		LeaveTypeID: FormControl<string | null | undefined>,

		/**
		 * Name of the earnings rate (max length = 100)
		 * Max length: 100
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * The number of units the employee is entitled to each year
		 * Type: double
		 */
		NormalEntitlement: FormControl<number | null | undefined>,

		/** Set this if you want a balance for this leave type to be shown on your employee’s payslips */
		ShowOnPayslip: FormControl<boolean | null | undefined>,

		/** The type of units by which leave entitlements are normally tracked. These are typically the same as the type of units used for the employee’s ordinary earnings rate */
		TypeOfUnits: FormControl<string | null | undefined>,

		/** Last modified timestamp */
		UpdatedDateUTC: FormControl<string | null | undefined>,
	}
	export function CreateLeaveTypeFormGroup() {
		return new FormGroup<LeaveTypeFormProperties>({
			CurrentRecord: new FormControl<boolean | null | undefined>(undefined),
			IsPaidLeave: new FormControl<boolean | null | undefined>(undefined),
			LeaveLoadingRate: new FormControl<number | null | undefined>(undefined),
			LeaveTypeID: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(100)]),
			NormalEntitlement: new FormControl<number | null | undefined>(undefined),
			ShowOnPayslip: new FormControl<boolean | null | undefined>(undefined),
			TypeOfUnits: new FormControl<string | null | undefined>(undefined),
			UpdatedDateUTC: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum LeaveTypeContributionType { SGC = 'SGC', SALARYSACRIFICE = 'SALARYSACRIFICE', EMPLOYERADDITIONAL = 'EMPLOYERADDITIONAL', EMPLOYEE = 'EMPLOYEE' }

	export enum ManualTaxType { PAYGMANUAL = 'PAYGMANUAL', ETPOMANUAL = 'ETPOMANUAL', ETPRMANUAL = 'ETPRMANUAL', SCHEDULE5MANUAL = 'SCHEDULE5MANUAL', SCHEDULE5STSLMANUAL = 'SCHEDULE5STSLMANUAL' }

	export interface PayItem {
		DeductionTypes?: Array<DeductionType>;
		EarningsRates?: Array<EarningsRate>;
		LeaveTypes?: Array<LeaveType>;
		ReimbursementTypes?: Array<ReimbursementType>;
	}
	export interface PayItemFormProperties {
	}
	export function CreatePayItemFormGroup() {
		return new FormGroup<PayItemFormProperties>({
		});

	}

	export interface ReimbursementType {

		/** See Accounts */
		AccountCode?: string | null;

		/** Is the current record */
		CurrentRecord?: boolean | null;

		/**
		 * Name of the earnings rate (max length = 100)
		 * Max length: 100
		 */
		Name?: string | null;

		/** Xero identifier */
		ReimbursementTypeID?: string | null;

		/** Last modified timestamp */
		UpdatedDateUTC?: string | null;
	}
	export interface ReimbursementTypeFormProperties {

		/** See Accounts */
		AccountCode: FormControl<string | null | undefined>,

		/** Is the current record */
		CurrentRecord: FormControl<boolean | null | undefined>,

		/**
		 * Name of the earnings rate (max length = 100)
		 * Max length: 100
		 */
		Name: FormControl<string | null | undefined>,

		/** Xero identifier */
		ReimbursementTypeID: FormControl<string | null | undefined>,

		/** Last modified timestamp */
		UpdatedDateUTC: FormControl<string | null | undefined>,
	}
	export function CreateReimbursementTypeFormGroup() {
		return new FormGroup<ReimbursementTypeFormProperties>({
			AccountCode: new FormControl<string | null | undefined>(undefined),
			CurrentRecord: new FormControl<boolean | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(100)]),
			ReimbursementTypeID: new FormControl<string | null | undefined>(undefined),
			UpdatedDateUTC: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PayItems {
		PayItems1?: PayItem;
	}
	export interface PayItemsFormProperties {
	}
	export function CreatePayItemsFormGroup() {
		return new FormGroup<PayItemsFormProperties>({
		});

	}

	export interface PayRun {

		/**
		 * The total Deductions for the Payrun
		 * Type: double
		 */
		Deductions?: number | null;

		/**
		 * The total NetPay for the Payrun
		 * Type: double
		 */
		NetPay?: number | null;

		/** Xero identifier for pay run */
		PayRunID?: string | null;

		/** Period End Date for the PayRun (YYYY-MM-DD) */
		PayRunPeriodEndDate?: string | null;

		/** Period Start Date for the PayRun (YYYY-MM-DD) */
		PayRunPeriodStartDate?: string | null;
		PayRunStatus?: PayRunPayRunStatus | null;

		/** Payment Date for the PayRun (YYYY-MM-DD) */
		PaymentDate?: string | null;

		/**
		 * Xero identifier for pay run
		 * Required
		 */
		PayrollCalendarID: string;

		/** Payslip message for the PayRun */
		PayslipMessage?: string | null;

		/** The payslips in the payrun */
		Payslips?: Array<PayslipSummary>;

		/**
		 * The total Reimbursements for the Payrun
		 * Type: double
		 */
		Reimbursement?: number | null;

		/**
		 * The total Super for the Payrun
		 * Type: double
		 */
		Super?: number | null;

		/**
		 * The total Tax for the Payrun
		 * Type: double
		 */
		Tax?: number | null;

		/** Last modified timestamp */
		UpdatedDateUTC?: string | null;

		/** Displays array of validation error messages from the API */
		ValidationErrors?: Array<ValidationError>;

		/**
		 * The total Wages for the Payrun
		 * Type: double
		 */
		Wages?: number | null;
	}
	export interface PayRunFormProperties {

		/**
		 * The total Deductions for the Payrun
		 * Type: double
		 */
		Deductions: FormControl<number | null | undefined>,

		/**
		 * The total NetPay for the Payrun
		 * Type: double
		 */
		NetPay: FormControl<number | null | undefined>,

		/** Xero identifier for pay run */
		PayRunID: FormControl<string | null | undefined>,

		/** Period End Date for the PayRun (YYYY-MM-DD) */
		PayRunPeriodEndDate: FormControl<string | null | undefined>,

		/** Period Start Date for the PayRun (YYYY-MM-DD) */
		PayRunPeriodStartDate: FormControl<string | null | undefined>,
		PayRunStatus: FormControl<PayRunPayRunStatus | null | undefined>,

		/** Payment Date for the PayRun (YYYY-MM-DD) */
		PaymentDate: FormControl<string | null | undefined>,

		/**
		 * Xero identifier for pay run
		 * Required
		 */
		PayrollCalendarID: FormControl<string | null | undefined>,

		/** Payslip message for the PayRun */
		PayslipMessage: FormControl<string | null | undefined>,

		/**
		 * The total Reimbursements for the Payrun
		 * Type: double
		 */
		Reimbursement: FormControl<number | null | undefined>,

		/**
		 * The total Super for the Payrun
		 * Type: double
		 */
		Super: FormControl<number | null | undefined>,

		/**
		 * The total Tax for the Payrun
		 * Type: double
		 */
		Tax: FormControl<number | null | undefined>,

		/** Last modified timestamp */
		UpdatedDateUTC: FormControl<string | null | undefined>,

		/**
		 * The total Wages for the Payrun
		 * Type: double
		 */
		Wages: FormControl<number | null | undefined>,
	}
	export function CreatePayRunFormGroup() {
		return new FormGroup<PayRunFormProperties>({
			Deductions: new FormControl<number | null | undefined>(undefined),
			NetPay: new FormControl<number | null | undefined>(undefined),
			PayRunID: new FormControl<string | null | undefined>(undefined),
			PayRunPeriodEndDate: new FormControl<string | null | undefined>(undefined),
			PayRunPeriodStartDate: new FormControl<string | null | undefined>(undefined),
			PayRunStatus: new FormControl<PayRunPayRunStatus | null | undefined>(undefined),
			PaymentDate: new FormControl<string | null | undefined>(undefined),
			PayrollCalendarID: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PayslipMessage: new FormControl<string | null | undefined>(undefined),
			Reimbursement: new FormControl<number | null | undefined>(undefined),
			Super: new FormControl<number | null | undefined>(undefined),
			Tax: new FormControl<number | null | undefined>(undefined),
			UpdatedDateUTC: new FormControl<string | null | undefined>(undefined),
			Wages: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum PayRunPayRunStatus { DRAFT = 'DRAFT', POSTED = 'POSTED' }

	export interface PayslipSummary {

		/**
		 * The Deductions for the Payslip
		 * Type: double
		 */
		Deductions?: number | null;

		/** Employee group name */
		EmployeeGroup?: string | null;

		/** The Xero identifier for an employee */
		EmployeeID?: string | null;

		/** First name of employee */
		FirstName?: string | null;

		/** Last name of employee */
		LastName?: string | null;

		/**
		 * The NetPay for the Payslip
		 * Type: double
		 */
		NetPay?: number | null;

		/** Xero identifier for the payslip */
		PayslipID?: string | null;

		/**
		 * The Reimbursements for the Payslip
		 * Type: double
		 */
		Reimbursements?: number | null;

		/**
		 * The Super for the Payslip
		 * Type: double
		 */
		Super?: number | null;

		/**
		 * The Tax for the Payslip
		 * Type: double
		 */
		Tax?: number | null;

		/** Last modified timestamp */
		UpdatedDateUTC?: string | null;

		/**
		 * The Wages for the Payslip
		 * Type: double
		 */
		Wages?: number | null;
	}
	export interface PayslipSummaryFormProperties {

		/**
		 * The Deductions for the Payslip
		 * Type: double
		 */
		Deductions: FormControl<number | null | undefined>,

		/** Employee group name */
		EmployeeGroup: FormControl<string | null | undefined>,

		/** The Xero identifier for an employee */
		EmployeeID: FormControl<string | null | undefined>,

		/** First name of employee */
		FirstName: FormControl<string | null | undefined>,

		/** Last name of employee */
		LastName: FormControl<string | null | undefined>,

		/**
		 * The NetPay for the Payslip
		 * Type: double
		 */
		NetPay: FormControl<number | null | undefined>,

		/** Xero identifier for the payslip */
		PayslipID: FormControl<string | null | undefined>,

		/**
		 * The Reimbursements for the Payslip
		 * Type: double
		 */
		Reimbursements: FormControl<number | null | undefined>,

		/**
		 * The Super for the Payslip
		 * Type: double
		 */
		Super: FormControl<number | null | undefined>,

		/**
		 * The Tax for the Payslip
		 * Type: double
		 */
		Tax: FormControl<number | null | undefined>,

		/** Last modified timestamp */
		UpdatedDateUTC: FormControl<string | null | undefined>,

		/**
		 * The Wages for the Payslip
		 * Type: double
		 */
		Wages: FormControl<number | null | undefined>,
	}
	export function CreatePayslipSummaryFormGroup() {
		return new FormGroup<PayslipSummaryFormProperties>({
			Deductions: new FormControl<number | null | undefined>(undefined),
			EmployeeGroup: new FormControl<string | null | undefined>(undefined),
			EmployeeID: new FormControl<string | null | undefined>(undefined),
			FirstName: new FormControl<string | null | undefined>(undefined),
			LastName: new FormControl<string | null | undefined>(undefined),
			NetPay: new FormControl<number | null | undefined>(undefined),
			PayslipID: new FormControl<string | null | undefined>(undefined),
			Reimbursements: new FormControl<number | null | undefined>(undefined),
			Super: new FormControl<number | null | undefined>(undefined),
			Tax: new FormControl<number | null | undefined>(undefined),
			UpdatedDateUTC: new FormControl<string | null | undefined>(undefined),
			Wages: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum PayRunStatus { DRAFT = 'DRAFT', POSTED = 'POSTED' }

	export interface PayRuns {
		PayRuns1?: Array<PayRun>;
	}
	export interface PayRunsFormProperties {
	}
	export function CreatePayRunsFormGroup() {
		return new FormGroup<PayRunsFormProperties>({
		});

	}

	export enum PaymentFrequencyType { WEEKLY = 'WEEKLY', MONTHLY = 'MONTHLY', FORTNIGHTLY = 'FORTNIGHTLY', QUARTERLY = 'QUARTERLY', TWICEMONTHLY = 'TWICEMONTHLY', FOURWEEKLY = 'FOURWEEKLY', YEARLY = 'YEARLY' }

	export interface PayrollCalendar {
		CalendarType?: CalendarType | null;

		/** Name of the Payroll Calendar */
		Name?: string | null;

		/** The date on which employees will be paid for the upcoming pay period (YYYY-MM-DD) */
		PaymentDate?: string | null;

		/** Xero identifier */
		PayrollCalendarID?: string | null;

		/** The start date of the upcoming pay period. The end date will be calculated based upon this date, and the calendar type selected (YYYY-MM-DD) */
		StartDate?: string | null;

		/** Last modified timestamp */
		UpdatedDateUTC?: string | null;

		/** Displays array of validation error messages from the API */
		ValidationErrors?: Array<ValidationError>;
	}
	export interface PayrollCalendarFormProperties {
		CalendarType: FormControl<CalendarType | null | undefined>,

		/** Name of the Payroll Calendar */
		Name: FormControl<string | null | undefined>,

		/** The date on which employees will be paid for the upcoming pay period (YYYY-MM-DD) */
		PaymentDate: FormControl<string | null | undefined>,

		/** Xero identifier */
		PayrollCalendarID: FormControl<string | null | undefined>,

		/** The start date of the upcoming pay period. The end date will be calculated based upon this date, and the calendar type selected (YYYY-MM-DD) */
		StartDate: FormControl<string | null | undefined>,

		/** Last modified timestamp */
		UpdatedDateUTC: FormControl<string | null | undefined>,
	}
	export function CreatePayrollCalendarFormGroup() {
		return new FormGroup<PayrollCalendarFormProperties>({
			CalendarType: new FormControl<CalendarType | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			PaymentDate: new FormControl<string | null | undefined>(undefined),
			PayrollCalendarID: new FormControl<string | null | undefined>(undefined),
			StartDate: new FormControl<string | null | undefined>(undefined),
			UpdatedDateUTC: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PayrollCalendars {
		PayrollCalendars1?: Array<PayrollCalendar>;
	}
	export interface PayrollCalendarsFormProperties {
	}
	export function CreatePayrollCalendarsFormGroup() {
		return new FormGroup<PayrollCalendarsFormProperties>({
		});

	}

	export interface Payslip {
		DeductionLines?: Array<DeductionLine>;

		/**
		 * The Deductions for the Payslip
		 * Type: double
		 */
		Deductions?: number | null;
		EarningsLines?: Array<EarningsLine>;

		/** The Xero identifier for an employee */
		EmployeeID?: string | null;

		/** First name of employee */
		FirstName?: string | null;

		/** Last name of employee */
		LastName?: string | null;
		LeaveAccrualLines?: Array<LeaveAccrualLine>;
		LeaveEarningsLines?: Array<LeaveEarningsLine>;

		/**
		 * The NetPay for the Payslip
		 * Type: double
		 */
		NetPay?: number | null;

		/** Xero identifier for the payslip */
		PayslipID?: string | null;
		ReimbursementLines?: Array<ReimbursementLine>;

		/**
		 * The Reimbursements for the Payslip
		 * Type: double
		 */
		Reimbursements?: number | null;

		/**
		 * The Super for the Payslip
		 * Type: double
		 */
		Super?: number | null;
		SuperannuationLines?: Array<SuperannuationLine>;

		/**
		 * The Tax for the Payslip
		 * Type: double
		 */
		Tax?: number | null;
		TaxLines?: Array<TaxLine>;
		TimesheetEarningsLines?: Array<EarningsLine>;

		/** Last modified timestamp */
		UpdatedDateUTC?: string | null;

		/**
		 * The Wages for the Payslip
		 * Type: double
		 */
		Wages?: number | null;
	}
	export interface PayslipFormProperties {

		/**
		 * The Deductions for the Payslip
		 * Type: double
		 */
		Deductions: FormControl<number | null | undefined>,

		/** The Xero identifier for an employee */
		EmployeeID: FormControl<string | null | undefined>,

		/** First name of employee */
		FirstName: FormControl<string | null | undefined>,

		/** Last name of employee */
		LastName: FormControl<string | null | undefined>,

		/**
		 * The NetPay for the Payslip
		 * Type: double
		 */
		NetPay: FormControl<number | null | undefined>,

		/** Xero identifier for the payslip */
		PayslipID: FormControl<string | null | undefined>,

		/**
		 * The Reimbursements for the Payslip
		 * Type: double
		 */
		Reimbursements: FormControl<number | null | undefined>,

		/**
		 * The Super for the Payslip
		 * Type: double
		 */
		Super: FormControl<number | null | undefined>,

		/**
		 * The Tax for the Payslip
		 * Type: double
		 */
		Tax: FormControl<number | null | undefined>,

		/** Last modified timestamp */
		UpdatedDateUTC: FormControl<string | null | undefined>,

		/**
		 * The Wages for the Payslip
		 * Type: double
		 */
		Wages: FormControl<number | null | undefined>,
	}
	export function CreatePayslipFormGroup() {
		return new FormGroup<PayslipFormProperties>({
			Deductions: new FormControl<number | null | undefined>(undefined),
			EmployeeID: new FormControl<string | null | undefined>(undefined),
			FirstName: new FormControl<string | null | undefined>(undefined),
			LastName: new FormControl<string | null | undefined>(undefined),
			NetPay: new FormControl<number | null | undefined>(undefined),
			PayslipID: new FormControl<string | null | undefined>(undefined),
			Reimbursements: new FormControl<number | null | undefined>(undefined),
			Super: new FormControl<number | null | undefined>(undefined),
			Tax: new FormControl<number | null | undefined>(undefined),
			UpdatedDateUTC: new FormControl<string | null | undefined>(undefined),
			Wages: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface SuperannuationLine {

		/**
		 * Superannuation amount
		 * Type: double
		 */
		Amount?: number | null;
		CalculationType?: SuperLineCalculationType | null;
		ContributionType?: SuperLineContributionType | null;

		/** Superannuation expense account code. */
		ExpenseAccountCode?: string | null;

		/** Superannuation liability account code */
		LiabilityAccountCode?: string | null;

		/**
		 * Superannuation minimum monthly earnings.
		 * Type: double
		 */
		MinimumMonthlyEarnings?: number | null;

		/** Superannuation payment date for the current period (YYYY-MM-DD) */
		PaymentDateForThisPeriod?: string | null;

		/**
		 * Superannuation percentage
		 * Type: double
		 */
		Percentage?: number | null;

		/** Xero identifier for payroll super fund membership ID. */
		SuperMembershipID?: string | null;
	}
	export interface SuperannuationLineFormProperties {

		/**
		 * Superannuation amount
		 * Type: double
		 */
		Amount: FormControl<number | null | undefined>,
		CalculationType: FormControl<SuperLineCalculationType | null | undefined>,
		ContributionType: FormControl<SuperLineContributionType | null | undefined>,

		/** Superannuation expense account code. */
		ExpenseAccountCode: FormControl<string | null | undefined>,

		/** Superannuation liability account code */
		LiabilityAccountCode: FormControl<string | null | undefined>,

		/**
		 * Superannuation minimum monthly earnings.
		 * Type: double
		 */
		MinimumMonthlyEarnings: FormControl<number | null | undefined>,

		/** Superannuation payment date for the current period (YYYY-MM-DD) */
		PaymentDateForThisPeriod: FormControl<string | null | undefined>,

		/**
		 * Superannuation percentage
		 * Type: double
		 */
		Percentage: FormControl<number | null | undefined>,

		/** Xero identifier for payroll super fund membership ID. */
		SuperMembershipID: FormControl<string | null | undefined>,
	}
	export function CreateSuperannuationLineFormGroup() {
		return new FormGroup<SuperannuationLineFormProperties>({
			Amount: new FormControl<number | null | undefined>(undefined),
			CalculationType: new FormControl<SuperLineCalculationType | null | undefined>(undefined),
			ContributionType: new FormControl<SuperLineContributionType | null | undefined>(undefined),
			ExpenseAccountCode: new FormControl<string | null | undefined>(undefined),
			LiabilityAccountCode: new FormControl<string | null | undefined>(undefined),
			MinimumMonthlyEarnings: new FormControl<number | null | undefined>(undefined),
			PaymentDateForThisPeriod: new FormControl<string | null | undefined>(undefined),
			Percentage: new FormControl<number | null | undefined>(undefined),
			SuperMembershipID: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TaxLine {

		/**
		 * The tax line amount
		 * Type: double
		 */
		Amount?: number | null;

		/** Description of the tax line. */
		Description?: string | null;

		/** The tax line liability account code. For posted pay run you should be able to see liability account code */
		LiabilityAccount?: string | null;
		ManualTaxType?: ManualTaxType | null;

		/** Xero identifier for payslip tax line ID. */
		PayslipTaxLineID?: string | null;

		/** Name of the tax type. */
		TaxTypeName?: string | null;
	}
	export interface TaxLineFormProperties {

		/**
		 * The tax line amount
		 * Type: double
		 */
		Amount: FormControl<number | null | undefined>,

		/** Description of the tax line. */
		Description: FormControl<string | null | undefined>,

		/** The tax line liability account code. For posted pay run you should be able to see liability account code */
		LiabilityAccount: FormControl<string | null | undefined>,
		ManualTaxType: FormControl<ManualTaxType | null | undefined>,

		/** Xero identifier for payslip tax line ID. */
		PayslipTaxLineID: FormControl<string | null | undefined>,

		/** Name of the tax type. */
		TaxTypeName: FormControl<string | null | undefined>,
	}
	export function CreateTaxLineFormGroup() {
		return new FormGroup<TaxLineFormProperties>({
			Amount: new FormControl<number | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			LiabilityAccount: new FormControl<string | null | undefined>(undefined),
			ManualTaxType: new FormControl<ManualTaxType | null | undefined>(undefined),
			PayslipTaxLineID: new FormControl<string | null | undefined>(undefined),
			TaxTypeName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PayslipLines {
		DeductionLines?: Array<DeductionLine>;
		EarningsLines?: Array<EarningsLine>;
		LeaveAccrualLines?: Array<LeaveAccrualLine>;
		LeaveEarningsLines?: Array<LeaveEarningsLine>;
		ReimbursementLines?: Array<ReimbursementLine>;
		SuperannuationLines?: Array<SuperannuationLine>;
		TaxLines?: Array<TaxLine>;
		TimesheetEarningsLines?: Array<EarningsLine>;
	}
	export interface PayslipLinesFormProperties {
	}
	export function CreatePayslipLinesFormGroup() {
		return new FormGroup<PayslipLinesFormProperties>({
		});

	}

	export interface PayslipObject {
		Payslip?: Payslip;
	}
	export interface PayslipObjectFormProperties {
	}
	export function CreatePayslipObjectFormGroup() {
		return new FormGroup<PayslipObjectFormProperties>({
		});

	}

	export interface Payslips {
		Payslips1?: Array<Payslip>;
	}
	export interface PayslipsFormProperties {
	}
	export function CreatePayslipsFormGroup() {
		return new FormGroup<PayslipsFormProperties>({
		});

	}

	export enum RateType { FIXEDAMOUNT = 'FIXEDAMOUNT', MULTIPLE = 'MULTIPLE', RATEPERUNIT = 'RATEPERUNIT' }


	/** The reimbursement type lines */
	export interface ReimbursementLines {
		ReimbursementLines1?: Array<ReimbursementLine>;
	}

	/** The reimbursement type lines */
	export interface ReimbursementLinesFormProperties {
	}
	export function CreateReimbursementLinesFormGroup() {
		return new FormGroup<ReimbursementLinesFormProperties>({
		});

	}

	export enum ResidencyStatus { AUSTRALIANRESIDENT = 'AUSTRALIANRESIDENT', FOREIGNRESIDENT = 'FOREIGNRESIDENT', WORKINGHOLIDAYMAKER = 'WORKINGHOLIDAYMAKER' }

	export interface Settings {

		/** Payroll Account details for SuperExpense, SuperLiabilty, WagesExpense, PAYGLiability & WagesPayable. */
		Accounts?: Array<Account>;

		/**
		 * Number of days in the Payroll year
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		DaysInPayrollYear?: number | null;

		/** Tracking categories for Employees and Timesheets */
		TrackingCategories?: SettingsTrackingCategories;
	}
	export interface SettingsFormProperties {

		/**
		 * Number of days in the Payroll year
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		DaysInPayrollYear: FormControl<number | null | undefined>,
	}
	export function CreateSettingsFormGroup() {
		return new FormGroup<SettingsFormProperties>({
			DaysInPayrollYear: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface SettingsTrackingCategories {

		/** The tracking category used for employees */
		EmployeeGroups?: SettingsTrackingCategoriesEmployeeGroups;

		/** The tracking category used for timesheets */
		TimesheetCategories?: SettingsTrackingCategoriesTimesheetCategories;
	}
	export interface SettingsTrackingCategoriesFormProperties {
	}
	export function CreateSettingsTrackingCategoriesFormGroup() {
		return new FormGroup<SettingsTrackingCategoriesFormProperties>({
		});

	}

	export interface SettingsTrackingCategoriesEmployeeGroups {

		/** The identifier for the tracking category */
		TrackingCategoryID?: string | null;

		/** Name of the tracking category */
		TrackingCategoryName?: string | null;
	}
	export interface SettingsTrackingCategoriesEmployeeGroupsFormProperties {

		/** The identifier for the tracking category */
		TrackingCategoryID: FormControl<string | null | undefined>,

		/** Name of the tracking category */
		TrackingCategoryName: FormControl<string | null | undefined>,
	}
	export function CreateSettingsTrackingCategoriesEmployeeGroupsFormGroup() {
		return new FormGroup<SettingsTrackingCategoriesEmployeeGroupsFormProperties>({
			TrackingCategoryID: new FormControl<string | null | undefined>(undefined),
			TrackingCategoryName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SettingsTrackingCategoriesTimesheetCategories {

		/** The identifier for the tracking category */
		TrackingCategoryID?: string | null;

		/** Name of the tracking category */
		TrackingCategoryName?: string | null;
	}
	export interface SettingsTrackingCategoriesTimesheetCategoriesFormProperties {

		/** The identifier for the tracking category */
		TrackingCategoryID: FormControl<string | null | undefined>,

		/** Name of the tracking category */
		TrackingCategoryName: FormControl<string | null | undefined>,
	}
	export function CreateSettingsTrackingCategoriesTimesheetCategoriesFormGroup() {
		return new FormGroup<SettingsTrackingCategoriesTimesheetCategoriesFormProperties>({
			TrackingCategoryID: new FormControl<string | null | undefined>(undefined),
			TrackingCategoryName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SettingsObject {
		Settings?: Settings;
	}
	export interface SettingsObjectFormProperties {
	}
	export function CreateSettingsObjectFormGroup() {
		return new FormGroup<SettingsObjectFormProperties>({
		});

	}


	/** State abbreviation for employee home address */
	export enum State { ACT = 'ACT', NSW = 'NSW', NT = 'NT', QLD = 'QLD', SA = 'SA', TAS = 'TAS', VIC = 'VIC', WA = 'WA' }

	export interface SuperFund {

		/** ABN of the self managed super fund */
		ABN?: string | null;

		/** The account name for the self managed super fund. */
		AccountName?: string | null;

		/** The account number for the self managed super fund. */
		AccountNumber?: string | null;

		/** BSB of the self managed super fund */
		BSB?: string | null;

		/** The electronic service address for the self managed super fund. */
		ElectronicServiceAddress?: string | null;

		/** Some funds assign a unique number to each employer */
		EmployerNumber?: string | null;

		/** Name of the super fund */
		Name?: string | null;

		/** The SPIN of the Regulated SuperFund. This field has been deprecated. It will only be present for legacy superfunds. New superfunds will not have a SPIN value. The USI field should be used instead of SPIN. */
		SPIN?: string | null;

		/** Xero identifier for a super fund */
		SuperFundID?: string | null;

		/** Required */
		Type: SuperFundType;

		/** The USI of the Regulated SuperFund */
		USI?: string | null;

		/** Last modified timestamp */
		UpdatedDateUTC?: string | null;

		/** Displays array of validation error messages from the API */
		ValidationErrors?: Array<ValidationError>;
	}
	export interface SuperFundFormProperties {

		/** ABN of the self managed super fund */
		ABN: FormControl<string | null | undefined>,

		/** The account name for the self managed super fund. */
		AccountName: FormControl<string | null | undefined>,

		/** The account number for the self managed super fund. */
		AccountNumber: FormControl<string | null | undefined>,

		/** BSB of the self managed super fund */
		BSB: FormControl<string | null | undefined>,

		/** The electronic service address for the self managed super fund. */
		ElectronicServiceAddress: FormControl<string | null | undefined>,

		/** Some funds assign a unique number to each employer */
		EmployerNumber: FormControl<string | null | undefined>,

		/** Name of the super fund */
		Name: FormControl<string | null | undefined>,

		/** The SPIN of the Regulated SuperFund. This field has been deprecated. It will only be present for legacy superfunds. New superfunds will not have a SPIN value. The USI field should be used instead of SPIN. */
		SPIN: FormControl<string | null | undefined>,

		/** Xero identifier for a super fund */
		SuperFundID: FormControl<string | null | undefined>,

		/** Required */
		Type: FormControl<SuperFundType | null | undefined>,

		/** The USI of the Regulated SuperFund */
		USI: FormControl<string | null | undefined>,

		/** Last modified timestamp */
		UpdatedDateUTC: FormControl<string | null | undefined>,
	}
	export function CreateSuperFundFormGroup() {
		return new FormGroup<SuperFundFormProperties>({
			ABN: new FormControl<string | null | undefined>(undefined),
			AccountName: new FormControl<string | null | undefined>(undefined),
			AccountNumber: new FormControl<string | null | undefined>(undefined),
			BSB: new FormControl<string | null | undefined>(undefined),
			ElectronicServiceAddress: new FormControl<string | null | undefined>(undefined),
			EmployerNumber: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			SPIN: new FormControl<string | null | undefined>(undefined),
			SuperFundID: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<SuperFundType | null | undefined>(undefined, [Validators.required]),
			USI: new FormControl<string | null | undefined>(undefined),
			UpdatedDateUTC: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum SuperFundType { REGULATED = 'REGULATED', SMSF = 'SMSF' }

	export interface SuperFundProduct {

		/** The ABN of the Regulated SuperFund */
		ABN?: string | null;

		/** The name of the Regulated SuperFund */
		ProductName?: string | null;

		/** The SPIN of the Regulated SuperFund. This field has been deprecated. New superfunds will not have a SPIN value. The USI field should be used instead of SPIN */
		SPIN?: string | null;

		/** The USI of the Regulated SuperFund */
		USI?: string | null;
	}
	export interface SuperFundProductFormProperties {

		/** The ABN of the Regulated SuperFund */
		ABN: FormControl<string | null | undefined>,

		/** The name of the Regulated SuperFund */
		ProductName: FormControl<string | null | undefined>,

		/** The SPIN of the Regulated SuperFund. This field has been deprecated. New superfunds will not have a SPIN value. The USI field should be used instead of SPIN */
		SPIN: FormControl<string | null | undefined>,

		/** The USI of the Regulated SuperFund */
		USI: FormControl<string | null | undefined>,
	}
	export function CreateSuperFundProductFormGroup() {
		return new FormGroup<SuperFundProductFormProperties>({
			ABN: new FormControl<string | null | undefined>(undefined),
			ProductName: new FormControl<string | null | undefined>(undefined),
			SPIN: new FormControl<string | null | undefined>(undefined),
			USI: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SuperFundProducts {
		SuperFundProducts1?: Array<SuperFundProduct>;
	}
	export interface SuperFundProductsFormProperties {
	}
	export function CreateSuperFundProductsFormGroup() {
		return new FormGroup<SuperFundProductsFormProperties>({
		});

	}

	export interface SuperFunds {
		SuperFunds1?: Array<SuperFund>;
	}
	export interface SuperFundsFormProperties {
	}
	export function CreateSuperFundsFormGroup() {
		return new FormGroup<SuperFundsFormProperties>({
		});

	}

	export enum SuperannuationCalculationType { FIXEDAMOUNT = 'FIXEDAMOUNT', PERCENTAGEOFEARNINGS = 'PERCENTAGEOFEARNINGS', STATUTORY = 'STATUTORY' }

	export enum SuperannuationContributionType { SGC = 'SGC', SALARYSACRIFICE = 'SALARYSACRIFICE', EMPLOYERADDITIONAL = 'EMPLOYERADDITIONAL', EMPLOYEE = 'EMPLOYEE' }

	export enum TFNExemptionType { NOTQUOTED = 'NOTQUOTED', PENDING = 'PENDING', PENSIONER = 'PENSIONER', UNDER18 = 'UNDER18' }

	export interface Timesheet {

		/**
		 * The Xero identifier for an employee
		 * Required
		 */
		EmployeeID: string;

		/**
		 * Period end date (YYYY-MM-DD)
		 * Required
		 */
		EndDate: string;

		/**
		 * Timesheet total hours
		 * Type: double
		 */
		Hours?: number | null;

		/**
		 * Period start date (YYYY-MM-DD)
		 * Required
		 */
		StartDate: string;
		Status?: TimesheetStatus | null;

		/** The Xero identifier for a Payroll Timesheet */
		TimesheetID?: string | null;
		TimesheetLines?: Array<TimesheetLine>;

		/** Last modified timestamp */
		UpdatedDateUTC?: string | null;

		/** Displays array of validation error messages from the API */
		ValidationErrors?: Array<ValidationError>;
	}
	export interface TimesheetFormProperties {

		/**
		 * The Xero identifier for an employee
		 * Required
		 */
		EmployeeID: FormControl<string | null | undefined>,

		/**
		 * Period end date (YYYY-MM-DD)
		 * Required
		 */
		EndDate: FormControl<string | null | undefined>,

		/**
		 * Timesheet total hours
		 * Type: double
		 */
		Hours: FormControl<number | null | undefined>,

		/**
		 * Period start date (YYYY-MM-DD)
		 * Required
		 */
		StartDate: FormControl<string | null | undefined>,
		Status: FormControl<TimesheetStatus | null | undefined>,

		/** The Xero identifier for a Payroll Timesheet */
		TimesheetID: FormControl<string | null | undefined>,

		/** Last modified timestamp */
		UpdatedDateUTC: FormControl<string | null | undefined>,
	}
	export function CreateTimesheetFormGroup() {
		return new FormGroup<TimesheetFormProperties>({
			EmployeeID: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			EndDate: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Hours: new FormControl<number | null | undefined>(undefined),
			StartDate: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Status: new FormControl<TimesheetStatus | null | undefined>(undefined),
			TimesheetID: new FormControl<string | null | undefined>(undefined),
			UpdatedDateUTC: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum TimesheetStatus { DRAFT = 'DRAFT', PROCESSED = 'PROCESSED', APPROVED = 'APPROVED', REJECTED = 'REJECTED', REQUESTED = 'REQUESTED' }

	export interface TimesheetLine {

		/** The Xero identifier for an Earnings Rate */
		EarningsRateID?: string | null;

		/** The number of units on a timesheet line */
		NumberOfUnits?: Array<number>;

		/** The Xero identifier for a Tracking Category. The TrackingOptionID must belong to the TrackingCategory selected as TimesheetCategories under Payroll Settings. */
		TrackingItemID?: string | null;

		/** Last modified timestamp */
		UpdatedDateUTC?: string | null;
	}
	export interface TimesheetLineFormProperties {

		/** The Xero identifier for an Earnings Rate */
		EarningsRateID: FormControl<string | null | undefined>,

		/** The Xero identifier for a Tracking Category. The TrackingOptionID must belong to the TrackingCategory selected as TimesheetCategories under Payroll Settings. */
		TrackingItemID: FormControl<string | null | undefined>,

		/** Last modified timestamp */
		UpdatedDateUTC: FormControl<string | null | undefined>,
	}
	export function CreateTimesheetLineFormGroup() {
		return new FormGroup<TimesheetLineFormProperties>({
			EarningsRateID: new FormControl<string | null | undefined>(undefined),
			TrackingItemID: new FormControl<string | null | undefined>(undefined),
			UpdatedDateUTC: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TimesheetObject {
		Timesheet?: Timesheet;
	}
	export interface TimesheetObjectFormProperties {
	}
	export function CreateTimesheetObjectFormGroup() {
		return new FormGroup<TimesheetObjectFormProperties>({
		});

	}

	export interface Timesheets {
		Timesheets1?: Array<Timesheet>;
	}
	export interface TimesheetsFormProperties {
	}
	export function CreateTimesheetsFormGroup() {
		return new FormGroup<TimesheetsFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Searches payroll employees
		 * Get Employees
		 * @param {string} where Filter by an any element
		 * @param {string} order Order by an any element
		 * @param {number} page e.g. page=1 – Up to 100 employees will be returned in a single API call
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {Employees} search results matching criteria
		 */
		GetEmployees(where: string | null | undefined, order: string | null | undefined, page: number | null | undefined): Observable<Employees> {
			return this.http.get<Employees>(this.baseUri + 'Employees?where=' + (where == null ? '' : encodeURIComponent(where)) + '&order=' + (order == null ? '' : encodeURIComponent(order)) + '&page=' + page, {});
		}

		/**
		 * Creates a payroll employee
		 * Post Employees
		 * @return {Employees} A successful request
		 */
		CreateEmployee(requestBody: Array<Employee>): Observable<Employees> {
			return this.http.post<Employees>(this.baseUri + 'Employees', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves an employee's detail by unique employee id
		 * Get Employees/{EmployeeID}
		 * @param {string} EmployeeID Employee id for single object
		 * @return {Employees} search results matching criteria
		 */
		GetEmployee(EmployeeID: string): Observable<Employees> {
			return this.http.get<Employees>(this.baseUri + 'Employees/' + (EmployeeID == null ? '' : encodeURIComponent(EmployeeID)), {});
		}

		/**
		 * Updates an employee's detail
		 * Update properties on a single employee
		 * Post Employees/{EmployeeID}
		 * @param {string} EmployeeID Employee id for single object
		 * @return {Employees} A successful request
		 */
		UpdateEmployee(EmployeeID: string, requestBody: Array<Employee>): Observable<Employees> {
			return this.http.post<Employees>(this.baseUri + 'Employees/' + (EmployeeID == null ? '' : encodeURIComponent(EmployeeID)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves leave applications
		 * Get LeaveApplications
		 * @param {string} where Filter by an any element
		 * @param {string} order Order by an any element
		 * @param {number} page e.g. page=1 – Up to 100 objects will be returned in a single API call
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {LeaveApplications} search results matching criteria
		 */
		GetLeaveApplications(where: string | null | undefined, order: string | null | undefined, page: number | null | undefined): Observable<LeaveApplications> {
			return this.http.get<LeaveApplications>(this.baseUri + 'LeaveApplications?where=' + (where == null ? '' : encodeURIComponent(where)) + '&order=' + (order == null ? '' : encodeURIComponent(order)) + '&page=' + page, {});
		}

		/**
		 * Creates a leave application
		 * Post LeaveApplications
		 * @return {LeaveApplications} A successful request
		 */
		CreateLeaveApplication(requestBody: Array<LeaveApplication>): Observable<LeaveApplications> {
			return this.http.post<LeaveApplications>(this.baseUri + 'LeaveApplications', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves a leave application by a unique leave application id
		 * Get LeaveApplications/{LeaveApplicationID}
		 * @param {string} LeaveApplicationID Leave Application id for single object
		 * @return {LeaveApplications} search results matching criteria
		 */
		GetLeaveApplication(LeaveApplicationID: string): Observable<LeaveApplications> {
			return this.http.get<LeaveApplications>(this.baseUri + 'LeaveApplications/' + (LeaveApplicationID == null ? '' : encodeURIComponent(LeaveApplicationID)), {});
		}

		/**
		 * Updates a specific leave application
		 * Post LeaveApplications/{LeaveApplicationID}
		 * @param {string} LeaveApplicationID Leave Application id for single object
		 * @return {LeaveApplications} A successful request
		 */
		UpdateLeaveApplication(LeaveApplicationID: string, requestBody: Array<LeaveApplication>): Observable<LeaveApplications> {
			return this.http.post<LeaveApplications>(this.baseUri + 'LeaveApplications/' + (LeaveApplicationID == null ? '' : encodeURIComponent(LeaveApplicationID)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves pay items
		 * Get PayItems
		 * @param {string} where Filter by an any element
		 * @param {string} order Order by an any element
		 * @param {number} page e.g. page=1 – Up to 100 objects will be returned in a single API call
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {PayItems} search results matching criteria
		 */
		GetPayItems(where: string | null | undefined, order: string | null | undefined, page: number | null | undefined): Observable<PayItems> {
			return this.http.get<PayItems>(this.baseUri + 'PayItems?where=' + (where == null ? '' : encodeURIComponent(where)) + '&order=' + (order == null ? '' : encodeURIComponent(order)) + '&page=' + page, {});
		}

		/**
		 * Creates a pay item
		 * Post PayItems
		 * @return {PayItems} A successful request - currently returns empty array for JSON
		 */
		CreatePayItem(requestBody: PayItem): Observable<PayItems> {
			return this.http.post<PayItems>(this.baseUri + 'PayItems', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves pay runs
		 * Get PayRuns
		 * @param {string} where Filter by an any element
		 * @param {string} order Order by an any element
		 * @param {number} page e.g. page=1 – Up to 100 PayRuns will be returned in a single API call
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {PayRuns} search results matching criteria
		 */
		GetPayRuns(where: string | null | undefined, order: string | null | undefined, page: number | null | undefined): Observable<PayRuns> {
			return this.http.get<PayRuns>(this.baseUri + 'PayRuns?where=' + (where == null ? '' : encodeURIComponent(where)) + '&order=' + (order == null ? '' : encodeURIComponent(order)) + '&page=' + page, {});
		}

		/**
		 * Creates a pay run
		 * Post PayRuns
		 * @return {PayRuns} A successful request
		 */
		CreatePayRun(requestBody: Array<PayRun>): Observable<PayRuns> {
			return this.http.post<PayRuns>(this.baseUri + 'PayRuns', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves a pay run by using a unique pay run id
		 * Get PayRuns/{PayRunID}
		 * @param {string} PayRunID PayRun id for single object
		 * @return {PayRuns} search results matching criteria
		 */
		GetPayRun(PayRunID: string): Observable<PayRuns> {
			return this.http.get<PayRuns>(this.baseUri + 'PayRuns/' + (PayRunID == null ? '' : encodeURIComponent(PayRunID)), {});
		}

		/**
		 * Updates a pay run
		 * Update properties on a single PayRun
		 * Post PayRuns/{PayRunID}
		 * @param {string} PayRunID PayRun id for single object
		 * @return {PayRuns} A successful request
		 */
		UpdatePayRun(PayRunID: string, requestBody: Array<PayRun>): Observable<PayRuns> {
			return this.http.post<PayRuns>(this.baseUri + 'PayRuns/' + (PayRunID == null ? '' : encodeURIComponent(PayRunID)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves payroll calendars
		 * Get PayrollCalendars
		 * @param {string} where Filter by an any element
		 * @param {string} order Order by an any element
		 * @param {number} page e.g. page=1 – Up to 100 objects will be returned in a single API call
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {PayrollCalendars} search results matching criteria
		 */
		GetPayrollCalendars(where: string | null | undefined, order: string | null | undefined, page: number | null | undefined): Observable<PayrollCalendars> {
			return this.http.get<PayrollCalendars>(this.baseUri + 'PayrollCalendars?where=' + (where == null ? '' : encodeURIComponent(where)) + '&order=' + (order == null ? '' : encodeURIComponent(order)) + '&page=' + page, {});
		}

		/**
		 * Creates a Payroll Calendar
		 * Post PayrollCalendars
		 * @return {PayrollCalendars} A successful request
		 */
		CreatePayrollCalendar(requestBody: Array<PayrollCalendar>): Observable<PayrollCalendars> {
			return this.http.post<PayrollCalendars>(this.baseUri + 'PayrollCalendars', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves payroll calendar by using a unique payroll calendar ID
		 * Get PayrollCalendars/{PayrollCalendarID}
		 * @param {string} PayrollCalendarID Payroll Calendar id for single object
		 * @return {PayrollCalendars} search results matching criteria
		 */
		GetPayrollCalendar(PayrollCalendarID: string): Observable<PayrollCalendars> {
			return this.http.get<PayrollCalendars>(this.baseUri + 'PayrollCalendars/' + (PayrollCalendarID == null ? '' : encodeURIComponent(PayrollCalendarID)), {});
		}

		/**
		 * Retrieves for a payslip by a unique payslip id
		 * Get Payslip/{PayslipID}
		 * @param {string} PayslipID Payslip id for single object
		 * @return {PayslipObject} search results matching criteria
		 */
		GetPayslip(PayslipID: string): Observable<PayslipObject> {
			return this.http.get<PayslipObject>(this.baseUri + 'Payslip/' + (PayslipID == null ? '' : encodeURIComponent(PayslipID)), {});
		}

		/**
		 * Updates a payslip
		 * Update lines on a single payslips
		 * Post Payslip/{PayslipID}
		 * @param {string} PayslipID Payslip id for single object
		 * @return {Payslips} A successful request - currently returns empty array for JSON
		 */
		UpdatePayslip(PayslipID: string, requestBody: Array<PayslipLines>): Observable<Payslips> {
			return this.http.post<Payslips>(this.baseUri + 'Payslip/' + (PayslipID == null ? '' : encodeURIComponent(PayslipID)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves payroll settings
		 * Get Settings
		 * @return {SettingsObject} payroll settings
		 */
		GetSettings(): Observable<SettingsObject> {
			return this.http.get<SettingsObject>(this.baseUri + 'Settings', {});
		}

		/**
		 * Retrieves superfund products
		 * Get SuperfundProducts
		 * @param {string} ABN The ABN of the Regulated SuperFund
		 * @param {string} USI The USI of the Regulated SuperFund
		 * @return {SuperFundProducts} search results matching criteria
		 */
		GetSuperfundProducts(ABN: string | null | undefined, USI: string | null | undefined): Observable<SuperFundProducts> {
			return this.http.get<SuperFundProducts>(this.baseUri + 'SuperfundProducts?ABN=' + (ABN == null ? '' : encodeURIComponent(ABN)) + '&USI=' + (USI == null ? '' : encodeURIComponent(USI)), {});
		}

		/**
		 * Retrieves superfunds
		 * Get Superfunds
		 * @param {string} where Filter by an any element
		 * @param {string} order Order by an any element
		 * @param {number} page e.g. page=1 – Up to 100 SuperFunds will be returned in a single API call
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {SuperFunds} search results matching criteria
		 */
		GetSuperfunds(where: string | null | undefined, order: string | null | undefined, page: number | null | undefined): Observable<SuperFunds> {
			return this.http.get<SuperFunds>(this.baseUri + 'Superfunds?where=' + (where == null ? '' : encodeURIComponent(where)) + '&order=' + (order == null ? '' : encodeURIComponent(order)) + '&page=' + page, {});
		}

		/**
		 * Creates a superfund
		 * Post Superfunds
		 * @return {SuperFunds} A successful request
		 */
		CreateSuperfund(requestBody: Array<SuperFund>): Observable<SuperFunds> {
			return this.http.post<SuperFunds>(this.baseUri + 'Superfunds', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves a superfund by using a unique superfund ID
		 * Get Superfunds/{SuperFundID}
		 * @param {string} SuperFundID Superfund id for single object
		 * @return {SuperFunds} search results matching criteria
		 */
		GetSuperfund(SuperFundID: string): Observable<SuperFunds> {
			return this.http.get<SuperFunds>(this.baseUri + 'Superfunds/' + (SuperFundID == null ? '' : encodeURIComponent(SuperFundID)), {});
		}

		/**
		 * Updates a superfund
		 * Update properties on a single Superfund
		 * Post Superfunds/{SuperFundID}
		 * @param {string} SuperFundID Superfund id for single object
		 * @return {SuperFunds} A successful request
		 */
		UpdateSuperfund(SuperFundID: string, requestBody: Array<SuperFund>): Observable<SuperFunds> {
			return this.http.post<SuperFunds>(this.baseUri + 'Superfunds/' + (SuperFundID == null ? '' : encodeURIComponent(SuperFundID)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves timesheets
		 * Get Timesheets
		 * @param {string} where Filter by an any element
		 * @param {string} order Order by an any element
		 * @param {number} page e.g. page=1 – Up to 100 timesheets will be returned in a single API call
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {Timesheets} search results matching criteria
		 */
		GetTimesheets(where: string | null | undefined, order: string | null | undefined, page: number | null | undefined): Observable<Timesheets> {
			return this.http.get<Timesheets>(this.baseUri + 'Timesheets?where=' + (where == null ? '' : encodeURIComponent(where)) + '&order=' + (order == null ? '' : encodeURIComponent(order)) + '&page=' + page, {});
		}

		/**
		 * Creates a timesheet
		 * Post Timesheets
		 * @return {Timesheets} A successful request
		 */
		CreateTimesheet(requestBody: Array<Timesheet>): Observable<Timesheets> {
			return this.http.post<Timesheets>(this.baseUri + 'Timesheets', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves a timesheet by using a unique timesheet id
		 * Get Timesheets/{TimesheetID}
		 * @param {string} TimesheetID Timesheet id for single object
		 * @return {TimesheetObject} search results matching criteria
		 */
		GetTimesheet(TimesheetID: string): Observable<TimesheetObject> {
			return this.http.get<TimesheetObject>(this.baseUri + 'Timesheets/' + (TimesheetID == null ? '' : encodeURIComponent(TimesheetID)), {});
		}

		/**
		 * Updates a timesheet
		 * Update properties on a single timesheet
		 * Post Timesheets/{TimesheetID}
		 * @param {string} TimesheetID Timesheet id for single object
		 * @return {Timesheets} A successful request
		 */
		UpdateTimesheet(TimesheetID: string, requestBody: Array<Timesheet>): Observable<Timesheets> {
			return this.http.post<Timesheets>(this.baseUri + 'Timesheets/' + (TimesheetID == null ? '' : encodeURIComponent(TimesheetID)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

