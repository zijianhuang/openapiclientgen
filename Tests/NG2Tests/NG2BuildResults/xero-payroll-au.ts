import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {
	export interface Employees {
		Employees1?: Array<Employee>;
	}

	export interface Employee {

		/**
		 * First name of employee
		 * Required
		 */
		FirstName: string;

		/**
		 * Last name of employee
		 * Required
		 */
		LastName: string;

		/**
		 * Date of birth of the employee (YYYY-MM-DD)
		 * Required
		 */
		DateOfBirth: string;
		HomeAddress?: HomeAddress;

		/** Start date for an employee (YYYY-MM-DD) */
		StartDate?: string;

		/** Title of the employee */
		Title?: string;

		/** Middle name(s) of the employee */
		MiddleNames?: string;

		/** The email address for the employee */
		Email?: string;

		/** The employee’s gender. See Employee Gender */
		Gender?: EmployeeGender;

		/** Employee phone number */
		Phone?: string;

		/** Employee mobile number */
		Mobile?: string;

		/** Employee’s twitter name */
		TwitterUserName?: string;

		/** Authorised to approve other employees' leave requests */
		IsAuthorisedToApproveLeave?: boolean;

		/** Authorised to approve timesheets */
		IsAuthorisedToApproveTimesheets?: boolean;

		/** JobTitle of the employee */
		JobTitle?: string;

		/** Employees classification */
		Classification?: string;

		/** Xero unique identifier for earnings rate */
		OrdinaryEarningsRateID?: string;

		/** Xero unique identifier for payroll calendar for the employee */
		PayrollCalendarID?: string;

		/** The Employee Group allows you to report on payroll expenses and liabilities for each group of employees */
		EmployeeGroupName?: string;

		/** Xero unique identifier for an Employee */
		EmployeeID?: string;

		/** Employee Termination Date (YYYY-MM-DD) */
		TerminationDate?: string;
		BankAccounts?: Array<BankAccount>;
		PayTemplate?: PayTemplate;
		OpeningBalances?: OpeningBalances;
		TaxDeclaration?: TaxDeclaration;
		LeaveBalances?: Array<LeaveBalance>;
		LeaveLines?: Array<LeaveLine>;
		SuperMemberships?: Array<SuperMembership>;

		/** Employee Status Types */
		Status?: EmployeeStatus;

		/** Last modified timestamp */
		UpdatedDateUTC?: string;

		/** Displays array of validation error messages from the API */
		ValidationErrors?: Array<ValidationError>;
	}

	export interface HomeAddress {

		/**
		 * Address line 1 for employee home address
		 * Required
		 */
		AddressLine1: string;

		/** Address line 2 for employee home address */
		AddressLine2?: string;

		/** Suburb for employee home address */
		City?: string;

		/** State abbreviation for employee home address */
		Region?: HomeAddressRegion;

		/** PostCode for employee home address */
		PostalCode?: string;

		/** Country of HomeAddress */
		Country?: string;
	}

	export enum HomeAddressRegion { ACT = 0, NSW = 1, NT = 2, QLD = 3, SA = 4, TAS = 5, VIC = 6, WA = 7 }

	export enum EmployeeGender { N = 0, M = 1, F = 2, I = 3 }

	export interface BankAccount {

		/** The text that will appear on your employee's bank statement when they receive payment */
		StatementText?: string;

		/** The name of the account */
		AccountName?: string;

		/** The BSB number of the account */
		BSB?: string;

		/** The account number */
		AccountNumber?: string;

		/** If this account is the Remaining bank account */
		Remainder?: boolean;

		/** Fixed amounts (for example, if an employee wants to have $100 of their salary transferred to one account, and the remaining amount to another) */
		Amount?: number;
	}

	export interface PayTemplate {
		EarningsLines?: Array<EarningsLine>;
		DeductionLines?: Array<DeductionLine>;
		SuperLines?: Array<SuperLine>;
		ReimbursementLines?: Array<ReimbursementLine>;
		LeaveLines?: Array<LeaveLine>;
	}

	export interface EarningsLine {

		/**
		 * Xero unique id for earnings rate
		 * Required
		 */
		EarningsRateID: string;
		CalculationType: EarningsLineCalculationType;

		/** Annual salary for earnings line */
		AnnualSalary?: number;

		/** number of units for earning line */
		NumberOfUnitsPerWeek?: number;

		/** Rate per unit of the EarningsLine. */
		RatePerUnit?: number;

		/** Normal number of units for EarningsLine. Applicable when RateType is "MULTIPLE" */
		NormalNumberOfUnits?: number;

		/** Earnings rate amount */
		Amount?: number;

		/** Earnings rate number of units. */
		NumberOfUnits?: number;

		/** Earnings rate amount. Only applicable if the EarningsRate RateType is Fixed */
		FixedAmount?: number;
	}

	export enum EarningsLineCalculationType { USEEARNINGSRATE = 0, ENTEREARNINGSRATE = 1, ANNUALSALARY = 2 }

	export interface DeductionLine {

		/**
		 * Xero deduction type identifier
		 * Required
		 */
		DeductionTypeID: string;
		CalculationType: DeductionLineCalculationType;

		/** Deduction type amount */
		Amount?: number;

		/** The Percentage of the Deduction */
		Percentage?: number;

		/** Deduction number of units */
		NumberOfUnits?: number;
	}

	export enum DeductionLineCalculationType { FIXEDAMOUNT = 0, PRETAX = 1, POSTTAX = 2 }

	export interface SuperLine {

		/** Xero super membership ID */
		SuperMembershipID?: string;
		ContributionType?: SuperLineContributionType;
		CalculationType?: SuperLineCalculationType;

		/** amount of mimimum earnings */
		MinimumMonthlyEarnings?: number;

		/** expense account code */
		ExpenseAccountCode?: string;

		/** liabilty account code */
		LiabilityAccountCode?: string;

		/** percentage for super line */
		Percentage?: number;

		/** Super membership amount */
		Amount?: number;
	}

	export enum SuperLineContributionType { SGC = 0, SALARYSACRIFICE = 1, EMPLOYERADDITIONAL = 2, EMPLOYEE = 3 }

	export enum SuperLineCalculationType { FIXEDAMOUNT = 0, PERCENTAGEOFEARNINGS = 1, STATUTORY = 2 }

	export interface ReimbursementLine {

		/** Xero reimbursement type identifier */
		ReimbursementTypeID?: string;

		/** Reimbursement type amount */
		Amount?: number;

		/**
		 * Reimbursement lines description (max length 50)
		 * Max length: 50
		 */
		Description?: string;

		/** Reimbursement expense account. For posted pay run you should be able to see expense account code. */
		ExpenseAccount?: string;
	}

	export interface LeaveLine {

		/** Xero leave type identifier */
		LeaveTypeID?: string;

		/** Calculation type for leave line for Opening Balance on Employee */
		CalculationType?: LeaveLineCalculationType;
		EntitlementFinalPayPayoutType?: LeaveLineEntitlementFinalPayPayoutType;
		EmploymentTerminationPaymentType?: LeaveLineEmploymentTerminationPaymentType;

		/** amount of leave line */
		IncludeSuperannuationGuaranteeContribution?: boolean;

		/** Leave number of units */
		NumberOfUnits?: number;
	}

	export enum LeaveLineCalculationType { NOCALCULATIONREQUIRED = 0, FIXEDAMOUNTEACHPERIOD = 1, ENTERRATEINPAYTEMPLATE = 2, BASEDONORDINARYEARNINGS = 3, _ = 4 }

	export enum LeaveLineEntitlementFinalPayPayoutType { NOTPAIDOUT = 0, PAIDOUT = 1 }

	export enum LeaveLineEmploymentTerminationPaymentType { O = 0, R = 1 }

	export interface OpeningBalances {

		/** Opening Balance Date. (YYYY-MM-DD) */
		OpeningBalanceDate?: string;

		/** Opening Balance tax */
		Tax?: string;
		EarningsLines?: Array<EarningsLine>;
		DeductionLines?: Array<DeductionLine>;
		SuperLines?: Array<SuperLine>;
		ReimbursementLines?: Array<ReimbursementLine>;
		LeaveLines?: Array<LeaveLine>;
	}

	export interface TaxDeclaration {

		/**
		 * Address line 1 for employee home address
		 * Required
		 */
		EmployeeID: string;
		EmploymentBasis: TaxDeclarationEmploymentBasis;
		TFNExemptionType?: TaxDeclarationTFNExemptionType;

		/** The tax file number e.g 123123123. */
		TaxFileNumber?: string;

		/** If the employee is Australian resident for tax purposes. e.g true or false */
		AustralianResidentForTaxPurposes?: boolean;
		ResidencyStatus?: TaxDeclarationResidencyStatus;

		/** If tax free threshold claimed. e.g true or false */
		TaxFreeThresholdClaimed?: boolean;

		/** If has tax offset estimated then the tax offset estimated amount. e.g 100 */
		TaxOffsetEstimatedAmount?: string;

		/** If employee has HECS or HELP debt. e.g true or false */
		HasHELPDebt?: boolean;

		/** If employee has financial supplement debt. e.g true or false */
		HasSFSSDebt?: boolean;

		/** If employee has trade support loan. e.g true or false */
		HasTradeSupportLoanDebt?: boolean;

		/** If the employee has requested that additional tax be withheld each pay run. e.g 50 */
		UpwardVariationTaxWithholdingAmount?: string;

		/** If the employee is eligible to receive an additional percentage on top of ordinary earnings when they take leave (typically 17.5%). e.g true or false */
		EligibleToReceiveLeaveLoading?: boolean;

		/** If the employee has approved withholding variation. e.g (0 - 100) */
		ApprovedWithholdingVariationPercentage?: string;

		/** If the employee is eligible for student startup loan rules */
		HasStudentStartupLoan?: boolean;

		/** Last modified timestamp */
		UpdatedDateUTC?: string;
	}

	export enum TaxDeclarationEmploymentBasis { FULLTIME = 0, PARTTIME = 1, CASUAL = 2, LABOURHIRE = 3, SUPERINCOMESTREAM = 4 }

	export enum TaxDeclarationTFNExemptionType { NOTQUOTED = 0, PENDING = 1, PENSIONER = 2, UNDER18 = 3 }

	export enum TaxDeclarationResidencyStatus { AUSTRALIANRESIDENT = 0, FOREIGNRESIDENT = 1, WORKINGHOLIDAYMAKER = 2 }

	export interface LeaveBalance {

		/** The name of the leave type */
		LeaveName?: string;

		/** Identifier of the leave type (see PayItems) */
		LeaveTypeID?: string;

		/** The balance of the leave available */
		NumberOfUnits?: number;

		/** The type of units as specified by the LeaveType (see PayItems) */
		TypeOfUnits?: string;
	}

	export interface SuperMembership {

		/** Xero unique identifier for Super membership */
		SuperMembershipID?: string;

		/**
		 * Xero identifier for super fund
		 * Required
		 */
		SuperFundID: string;

		/**
		 * The memberhsip number assigned to the employee by the super fund.
		 * Required
		 */
		EmployeeNumber: number;
	}

	export enum EmployeeStatus { ACTIVE = 0, TERMINATED = 1 }

	export interface ValidationError {

		/** Validation error message */
		Message?: string;
	}

	export interface LeaveApplications {
		LeaveApplications1?: Array<LeaveApplication>;
	}

	export interface LeaveApplication {

		/** The Xero identifier for Payroll Employee */
		LeaveApplicationID?: string;

		/** The Xero identifier for Payroll Employee */
		EmployeeID?: string;

		/** The Xero identifier for Leave Type */
		LeaveTypeID?: string;

		/** The title of the leave */
		Title?: string;

		/** Start date of the leave (YYYY-MM-DD) */
		StartDate?: string;

		/** End date of the leave (YYYY-MM-DD) */
		EndDate?: string;

		/** The Description of the Leave */
		Description?: string;
		LeavePeriods?: Array<LeavePeriod>;

		/** Last modified timestamp */
		UpdatedDateUTC?: string;

		/** Displays array of validation error messages from the API */
		ValidationErrors?: Array<ValidationError>;
	}

	export interface LeavePeriod {

		/** The Number of Units for the leave */
		NumberOfUnits?: number;

		/** The Pay Period End Date (YYYY-MM-DD) */
		PayPeriodEndDate?: string;

		/** The Pay Period Start Date (YYYY-MM-DD) */
		PayPeriodStartDate?: string;
		LeavePeriodStatus?: LeavePeriodLeavePeriodStatus;
	}

	export enum LeavePeriodLeavePeriodStatus { SCHEDULED = 0, PROCESSED = 1 }

	export enum LeavePeriodStatus { SCHEDULED = 0, PROCESSED = 1 }

	export interface PayItems {
		PayItems1?: PayItem;
	}

	export interface PayItem {
		EarningsRates?: Array<EarningsRate>;
		DeductionTypes?: Array<DeductionType>;
		LeaveTypes?: Array<LeaveType>;
		ReimbursementTypes?: Array<ReimbursementType>;
	}

	export interface EarningsRate {

		/**
		 * Name of the earnings rate (max length = 100)
		 * Max length: 100
		 */
		Name?: string;

		/** See Accounts */
		AccountCode?: string;

		/**
		 * Type of units used to record earnings (max length = 50). Only When RateType is RATEPERUNIT
		 * Max length: 50
		 */
		TypeOfUnits?: string;

		/** Most payments are subject to tax, so you should only set this value if you are sure that a payment is exempt from PAYG withholding */
		IsExemptFromTax?: boolean;

		/** See the ATO website for details of which payments are exempt from SGC */
		IsExemptFromSuper?: boolean;

		/** Boolean to determine if the earnings rate is reportable or exempt from W1 */
		IsReportableAsW1?: boolean;
		EarningsType?: EarningsRateEarningsType;

		/** Xero identifier */
		EarningsRateID?: string;
		RateType?: EarningsRateRateType;

		/** Default rate per unit (optional). Only applicable if RateType is RATEPERUNIT. */
		RatePerUnit?: string;

		/** This is the multiplier used to calculate the rate per unit, based on the employee’s ordinary earnings rate. For example, for time and a half enter 1.5. Only applicable if RateType is MULTIPLE */
		Multiplier?: number;

		/** Indicates that this earnings rate should accrue leave. Only applicable if RateType is MULTIPLE */
		AccrueLeave?: boolean;

		/** Optional Amount for FIXEDAMOUNT RateType EarningsRate */
		Amount?: number;
		EmploymentTerminationPaymentType?: LeaveLineEmploymentTerminationPaymentType;

		/** Last modified timestamp */
		UpdatedDateUTC?: string;

		/** Is the current record */
		CurrentRecord?: boolean;
		AllowanceType?: EarningsRateAllowanceType;
	}

	export enum EarningsRateEarningsType { FIXED = 0, ORDINARYTIMEEARNINGS = 1, OVERTIMEEARNINGS = 2, ALLOWANCE = 3, LUMPSUMD = 4, EMPLOYMENTTERMINATIONPAYMENT = 5, LUMPSUMA = 6, LUMPSUMB = 7 }

	export enum EarningsRateRateType { FIXEDAMOUNT = 0, MULTIPLE = 1, RATEPERUNIT = 2 }

	export enum EarningsRateAllowanceType { CAR = 0, TRANSPORT = 1, TRAVEL = 2, LAUNDRY = 3, MEALS = 4, JOBKEEPER = 5, OTHER = 6 }

	export interface DeductionType {

		/**
		 * Name of the earnings rate (max length = 100)
		 * Max length: 100
		 */
		Name?: string;

		/** See Accounts */
		AccountCode?: string;

		/** Indicates that this is a pre-tax deduction that will reduce the amount of tax you withhold from an employee. */
		ReducesTax?: boolean;

		/** Most deductions don’t reduce your superannuation guarantee contribution liability, so typically you will not set any value for this. */
		ReducesSuper?: boolean;

		/** Boolean to determine if the deduction type is reportable or exempt from W1 */
		IsExemptFromW1?: boolean;

		/** Xero identifier */
		DeductionTypeID?: string;

		/** Last modified timestamp */
		UpdatedDateUTC?: string;
		DeductionCategory?: DeductionTypeDeductionCategory;

		/** Is the current record */
		CurrentRecord?: boolean;
	}

	export enum DeductionTypeDeductionCategory { NONE = 0, UNIONFEES = 1, WORKPLACEGIVING = 2 }

	export interface LeaveType {

		/**
		 * Name of the earnings rate (max length = 100)
		 * Max length: 100
		 */
		Name?: string;

		/** The type of units by which leave entitlements are normally tracked. These are typically the same as the type of units used for the employee’s ordinary earnings rate */
		TypeOfUnits?: string;

		/** Xero identifier */
		LeaveTypeID?: string;

		/** The number of units the employee is entitled to each year */
		NormalEntitlement?: number;

		/** Enter an amount here if your organisation pays an additional percentage on top of ordinary earnings when your employees take leave (typically 17.5%) */
		LeaveLoadingRate?: number;

		/** Last modified timestamp */
		UpdatedDateUTC?: string;

		/** Set this to indicate that an employee will be paid when taking this type of leave */
		IsPaidLeave?: boolean;

		/** Set this if you want a balance for this leave type to be shown on your employee’s payslips */
		ShowOnPayslip?: boolean;

		/** Is the current record */
		CurrentRecord?: boolean;
	}

	export interface ReimbursementType {

		/**
		 * Name of the earnings rate (max length = 100)
		 * Max length: 100
		 */
		Name?: string;

		/** See Accounts */
		AccountCode?: string;

		/** Xero identifier */
		ReimbursementTypeID?: string;

		/** Last modified timestamp */
		UpdatedDateUTC?: string;

		/** Is the current record */
		CurrentRecord?: boolean;
	}

	export interface PayrollCalendars {
		PayrollCalendars1?: Array<PayrollCalendar>;
	}

	export interface PayrollCalendar {

		/** Name of the Payroll Calendar */
		Name?: string;
		CalendarType?: PayrollCalendarCalendarType;

		/** The start date of the upcoming pay period. The end date will be calculated based upon this date, and the calendar type selected (YYYY-MM-DD) */
		StartDate?: string;

		/** The date on which employees will be paid for the upcoming pay period (YYYY-MM-DD) */
		PaymentDate?: string;

		/** Xero identifier */
		PayrollCalendarID?: string;

		/** Last modified timestamp */
		UpdatedDateUTC?: string;

		/** Displays array of validation error messages from the API */
		ValidationErrors?: Array<ValidationError>;
	}

	export enum PayrollCalendarCalendarType { WEEKLY = 0, FORTNIGHTLY = 1, FOURWEEKLY = 2, MONTHLY = 3, TWICEMONTHLY = 4, QUARTERLY = 5 }

	export interface Timesheets {
		Timesheets1?: Array<Timesheet>;
	}

	export interface Timesheet {

		/**
		 * The Xero identifier for an employee
		 * Required
		 */
		EmployeeID: string;

		/**
		 * Period start date (YYYY-MM-DD)
		 * Required
		 */
		StartDate: string;

		/**
		 * Period end date (YYYY-MM-DD)
		 * Required
		 */
		EndDate: string;
		Status?: TimesheetStatus;

		/** Timesheet total hours */
		Hours?: number;

		/** The Xero identifier for a Payroll Timesheet */
		TimesheetID?: string;
		TimesheetLines?: Array<TimesheetLine>;

		/** Last modified timestamp */
		UpdatedDateUTC?: string;

		/** Displays array of validation error messages from the API */
		ValidationErrors?: Array<ValidationError>;
	}

	export enum TimesheetStatus { DRAFT = 0, PROCESSED = 1, APPROVED = 2 }

	export interface TimesheetLine {

		/** The Xero identifier for an Earnings Rate */
		EarningsRateID?: string;

		/** The Xero identifier for a Tracking Category. The TrackingOptionID must belong to the TrackingCategory selected as TimesheetCategories under Payroll Settings. */
		TrackingItemID?: string;

		/** The number of units on a timesheet line */
		NumberOfUnits?: Array<number>;

		/** Last modified timestamp */
		UpdatedDateUTC?: string;
	}

	export interface TimesheetObject {
		Timesheet?: Timesheet;
	}

	export interface PayRuns {
		PayRuns1?: Array<PayRun>;
	}

	export interface PayRun {

		/**
		 * Xero identifier for pay run
		 * Required
		 */
		PayrollCalendarID: string;

		/** Xero identifier for pay run */
		PayRunID?: string;

		/** Period Start Date for the PayRun (YYYY-MM-DD) */
		PayRunPeriodStartDate?: string;

		/** Period End Date for the PayRun (YYYY-MM-DD) */
		PayRunPeriodEndDate?: string;
		PayRunStatus?: PayRunPayRunStatus;

		/** Payment Date for the PayRun (YYYY-MM-DD) */
		PaymentDate?: string;

		/** Payslip message for the PayRun */
		PayslipMessage?: string;

		/** Last modified timestamp */
		UpdatedDateUTC?: string;

		/** The payslips in the payrun */
		Payslips?: Array<PayslipSummary>;

		/** The total Wages for the Payrun */
		Wages?: number;

		/** The total Deductions for the Payrun */
		Deductions?: number;

		/** The total Tax for the Payrun */
		Tax?: number;

		/** The total Super for the Payrun */
		Super?: number;

		/** The total Reimbursements for the Payrun */
		Reimbursement?: number;

		/** The total NetPay for the Payrun */
		NetPay?: number;

		/** Displays array of validation error messages from the API */
		ValidationErrors?: Array<ValidationError>;
	}

	export enum PayRunPayRunStatus { DRAFT = 0, POSTED = 1 }

	export interface PayslipSummary {

		/** The Xero identifier for an employee */
		EmployeeID?: string;

		/** Xero identifier for the payslip */
		PayslipID?: string;

		/** First name of employee */
		FirstName?: string;

		/** Last name of employee */
		LastName?: string;

		/** Employee group name */
		EmployeeGroup?: string;

		/** The Wages for the Payslip */
		Wages?: number;

		/** The Deductions for the Payslip */
		Deductions?: number;

		/** The Tax for the Payslip */
		Tax?: number;

		/** The Super for the Payslip */
		Super?: number;

		/** The Reimbursements for the Payslip */
		Reimbursements?: number;

		/** The NetPay for the Payslip */
		NetPay?: number;

		/** Last modified timestamp */
		UpdatedDateUTC?: string;
	}

	export interface PayslipLines {
		EarningsLines?: Array<EarningsLine>;
		LeaveEarningsLines?: Array<LeaveEarningsLine>;
		TimesheetEarningsLines?: Array<EarningsLine>;
		DeductionLines?: Array<DeductionLine>;
		LeaveAccrualLines?: Array<LeaveAccrualLine>;
		ReimbursementLines?: Array<ReimbursementLine>;
		SuperannuationLines?: Array<SuperannuationLine>;
		TaxLines?: Array<TaxLine>;
	}

	export interface LeaveEarningsLine {

		/** Xero identifier */
		EarningsRateID?: string;

		/** Rate per unit of the EarningsLine. */
		RatePerUnit?: number;

		/** Earnings rate number of units. */
		NumberOfUnits?: number;
	}

	export interface LeaveAccrualLine {

		/** Xero identifier for the Leave type. */
		LeaveTypeID?: string;

		/** Leave Accrual number of units */
		NumberOfUnits?: number;

		/** If you want to auto calculate leave. */
		AutoCalculate?: boolean;
	}

	export interface SuperannuationLine {

		/** Xero identifier for payroll super fund membership ID. */
		SuperMembershipID?: string;
		ContributionType?: SuperLineContributionType;
		CalculationType?: SuperLineCalculationType;

		/** Superannuation minimum monthly earnings. */
		MinimumMonthlyEarnings?: number;

		/** Superannuation expense account code. */
		ExpenseAccountCode?: string;

		/** Superannuation liability account code */
		LiabilityAccountCode?: string;

		/** Superannuation payment date for the current period (YYYY-MM-DD) */
		PaymentDateForThisPeriod?: string;

		/** Superannuation percentage */
		Percentage?: number;

		/** Superannuation amount */
		Amount?: number;
	}

	export interface TaxLine {

		/** Xero identifier for payslip tax line ID. */
		PayslipTaxLineID?: string;

		/** The tax line amount */
		Amount?: number;

		/** Name of the tax type. */
		TaxTypeName?: string;

		/** Description of the tax line. */
		Description?: string;
		ManualTaxType?: TaxLineManualTaxType;

		/** The tax line liability account code. For posted pay run you should be able to see liability account code */
		LiabilityAccount?: string;
	}

	export enum TaxLineManualTaxType { PAYGMANUAL = 0, ETPOMANUAL = 1, ETPRMANUAL = 2 }

	export interface PayslipObject {
		Payslip?: Payslip;
	}

	export interface Payslip {

		/** The Xero identifier for an employee */
		EmployeeID?: string;

		/** Xero identifier for the payslip */
		PayslipID?: string;

		/** First name of employee */
		FirstName?: string;

		/** Last name of employee */
		LastName?: string;

		/** The Wages for the Payslip */
		Wages?: number;

		/** The Deductions for the Payslip */
		Deductions?: number;

		/** The Tax for the Payslip */
		Tax?: number;

		/** The Super for the Payslip */
		Super?: number;

		/** The Reimbursements for the Payslip */
		Reimbursements?: number;

		/** The NetPay for the Payslip */
		NetPay?: number;
		EarningsLines?: Array<EarningsLine>;
		LeaveEarningsLines?: Array<LeaveEarningsLine>;
		TimesheetEarningsLines?: Array<EarningsLine>;
		DeductionLines?: Array<DeductionLine>;
		LeaveAccrualLines?: Array<LeaveAccrualLine>;
		ReimbursementLines?: Array<ReimbursementLine>;
		SuperannuationLines?: Array<SuperannuationLine>;
		TaxLines?: Array<TaxLine>;

		/** Last modified timestamp */
		UpdatedDateUTC?: string;
	}

	export interface Payslips {
		Payslips1?: Array<Payslip>;
	}

	export interface SettingsObject {
		Settings?: Settings;
	}

	export interface Settings {

		/** Payroll Account details for SuperExpense, SuperLiabilty, WagesExpense, PAYGLiability & WagesPayable. */
		Accounts?: Array<Account>;

		/** Tracking categories for Employees and Timesheets */
		TrackingCategories?: SettingsTrackingCategories;

		/** Number of days in the Payroll year */
		DaysInPayrollYear?: number;
	}

	export interface Account {

		/** Xero identifier for accounts */
		AccountID?: string;

		/** See Account Types */
		Type?: AccountType;

		/** Customer defined account code */
		Code?: string;

		/** Name of account */
		Name?: string;
	}

	export enum AccountType { BANK = 0, CURRENT = 1, CURRLIAB = 2, DEPRECIATN = 3, DIRECTCOSTS = 4, EQUITY = 5, EXPENSE = 6, FIXED = 7, INVENTORY = 8, LIABILITY = 9, NONCURRENT = 10, OTHERINCOME = 11, OVERHEADS = 12, PREPAYMENT = 13, REVENUE = 14, SALES = 15, TERMLIAB = 16, PAYGLIABILITY = 17, PAYG = 18, SUPERANNUATIONEXPENSE = 19, SUPERANNUATIONLIABILITY = 20, WAGESEXPENSE = 21, WAGESPAYABLELIABILITY = 22 }

	export interface SettingsTrackingCategories {

		/** The tracking category used for employees */
		EmployeeGroups?: SettingsTrackingCategoriesEmployeeGroups;

		/** The tracking category used for timesheets */
		TimesheetCategories?: SettingsTrackingCategoriesTimesheetCategories;
	}

	export interface SettingsTrackingCategoriesEmployeeGroups {

		/** The identifier for the tracking category */
		TrackingCategoryID?: string;

		/** Name of the tracking category */
		TrackingCategoryName?: string;
	}

	export interface SettingsTrackingCategoriesTimesheetCategories {

		/** The identifier for the tracking category */
		TrackingCategoryID?: string;

		/** Name of the tracking category */
		TrackingCategoryName?: string;
	}

	export interface SuperFunds {
		SuperFunds1?: Array<SuperFund>;
	}

	export interface SuperFund {

		/** Xero identifier for a super fund */
		SuperFundID?: string;
		Type: SuperFundType;

		/** Name of the super fund */
		Name?: string;

		/** ABN of the self managed super fund */
		ABN?: string;

		/** BSB of the self managed super fund */
		BSB?: string;

		/** The account number for the self managed super fund. */
		AccountNumber?: string;

		/** The account name for the self managed super fund. */
		AccountName?: string;

		/** The electronic service address for the self managed super fund. */
		ElectronicServiceAddress?: string;

		/** Some funds assign a unique number to each employer */
		EmployerNumber?: string;

		/** The SPIN of the Regulated SuperFund. This field has been deprecated. It will only be present for legacy superfunds. New superfunds will not have a SPIN value. The USI field should be used instead of SPIN. */
		SPIN?: string;

		/** The USI of the Regulated SuperFund */
		USI?: string;

		/** Last modified timestamp */
		UpdatedDateUTC?: string;

		/** Displays array of validation error messages from the API */
		ValidationErrors?: Array<ValidationError>;
	}

	export enum SuperFundType { REGULATED = 0, SMSF = 1 }

	export interface SuperFundProducts {
		SuperFundProducts1?: Array<SuperFundProduct>;
	}

	export interface SuperFundProduct {

		/** The ABN of the Regulated SuperFund */
		ABN?: string;

		/** The USI of the Regulated SuperFund */
		USI?: string;

		/** The SPIN of the Regulated SuperFund. This field has been deprecated. New superfunds will not have a SPIN value. The USI field should be used instead of SPIN */
		SPIN?: string;

		/** The name of the Regulated SuperFund */
		ProductName?: string;
	}


	/** The reimbursement type lines */
	export interface ReimbursementLines {
		ReimbursementLines1?: Array<ReimbursementLine>;
	}


	/** The leave type lines */
	export interface LeaveLines {
		Employee?: Array<LeaveLine>;
	}

	export enum RateType { FIXEDAMOUNT = 0, MULTIPLE = 1, RATEPERUNIT = 2 }

	export enum EarningsType { FIXED = 0, ORDINARYTIMEEARNINGS = 1, OVERTIMEEARNINGS = 2, ALLOWANCE = 3, LUMPSUMD = 4, EMPLOYMENTTERMINATIONPAYMENT = 5, LUMPSUMA = 6, LUMPSUMB = 7 }

	export enum EmploymentTerminationPaymentType { O = 0, R = 1 }

	export enum AllowanceType { CAR = 0, TRANSPORT = 1, TRAVEL = 2, LAUNDRY = 3, MEALS = 4, JOBKEEPER = 5, OTHER = 6 }

	export enum CalendarType { WEEKLY = 0, FORTNIGHTLY = 1, FOURWEEKLY = 2, MONTHLY = 3, TWICEMONTHLY = 4, QUARTERLY = 5 }

	export enum EarningsRateCalculationType { USEEARNINGSRATE = 0, ENTEREARNINGSRATE = 1, ANNUALSALARY = 2 }

	export enum DeductionTypeCalculationType { FIXEDAMOUNT = 0, PRETAX = 1, POSTTAX = 2 }

	export enum SuperannuationContributionType { SGC = 0, SALARYSACRIFICE = 1, EMPLOYERADDITIONAL = 2, EMPLOYEE = 3 }

	export enum SuperannuationCalculationType { FIXEDAMOUNT = 0, PERCENTAGEOFEARNINGS = 1, STATUTORY = 2 }

	export enum PaymentFrequencyType { WEEKLY = 0, MONTHLY = 1, FORTNIGHTLY = 2, QUARTERLY = 3, TWICEMONTHLY = 4, FOURWEEKLY = 5, YEARLY = 6 }

	export enum LeaveTypeContributionType { SGC = 0, SALARYSACRIFICE = 1, EMPLOYERADDITIONAL = 2, EMPLOYEE = 3 }

	export enum EntitlementFinalPayPayoutType { NOTPAIDOUT = 0, PAIDOUT = 1 }

	export enum PayRunStatus { DRAFT = 0, POSTED = 1 }

	export enum ManualTaxType { PAYGMANUAL = 0, ETPOMANUAL = 1, ETPRMANUAL = 2 }

	export enum EmploymentBasis { FULLTIME = 0, PARTTIME = 1, CASUAL = 2, LABOURHIRE = 3, SUPERINCOMESTREAM = 4 }

	export enum TFNExemptionType { NOTQUOTED = 0, PENDING = 1, PENSIONER = 2, UNDER18 = 3 }

	export enum ResidencyStatus { AUSTRALIANRESIDENT = 0, FOREIGNRESIDENT = 1, WORKINGHOLIDAYMAKER = 2 }


	/** State abbreviation for employee home address */
	export enum State { ACT = 0, NSW = 1, NT = 2, QLD = 3, SA = 4, TAS = 5, VIC = 6, WA = 7 }


	/** The object returned for a bad request */
	export interface APIException {

		/** The error number */
		ErrorNumber?: string;

		/** The type of error */
		Type?: string;

		/** The message describing the error */
		Message?: string;
	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * searches employees
		 * Get Employees
		 * @param {string} where Filter by an any element
		 * @param {string} order Order by an any element
		 * @param {number} page e.g. page=1 – Up to 100 employees will be returned in a single API call
		 * @return {Employees} search results matching criteria
		 */
		GetEmployees(where: string, order: string, page: number): Observable<Employees> {
			return this.http.get<Employees>(this.baseUri + 'Employees?where=' + (where == null ? '' : encodeURIComponent(where)) + '&order=' + (order == null ? '' : encodeURIComponent(order)) + '&page=' + page, {});
		}

		/**
		 * Use this method to create a payroll employee
		 * Post Employees
		 * @return {Employees} A successful request
		 */
		CreateEmployee(requestBody: Array<Employee>): Observable<Employees> {
			return this.http.post<Employees>(this.baseUri + 'Employees', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * searches for an employee by unique id
		 * Get Employees/{EmployeeId}
		 * @param {string} EmployeeId Employee id for single object
		 * @return {Employees} search results matching criteria
		 */
		GetEmployee(EmployeeId: string): Observable<Employees> {
			return this.http.get<Employees>(this.baseUri + 'Employees/' + (EmployeeId == null ? '' : encodeURIComponent(EmployeeId)), {});
		}

		/**
		 * Update an Employee
		 * Update properties on a single employee
		 * Post Employees/{EmployeeId}
		 * @param {string} EmployeeId Employee id for single object
		 * @return {Employees} A successful request
		 */
		UpdateEmployee(EmployeeId: string, requestBody: Array<Employee>): Observable<Employees> {
			return this.http.post<Employees>(this.baseUri + 'Employees/' + (EmployeeId == null ? '' : encodeURIComponent(EmployeeId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * searches Leave Applications
		 * Get LeaveApplications
		 * @param {string} where Filter by an any element
		 * @param {string} order Order by an any element
		 * @param {number} page e.g. page=1 – Up to 100 objects will be returned in a single API call
		 * @return {LeaveApplications} search results matching criteria
		 */
		GetLeaveApplications(where: string, order: string, page: number): Observable<LeaveApplications> {
			return this.http.get<LeaveApplications>(this.baseUri + 'LeaveApplications?where=' + (where == null ? '' : encodeURIComponent(where)) + '&order=' + (order == null ? '' : encodeURIComponent(order)) + '&page=' + page, {});
		}

		/**
		 * Use this method to create a Leave Application
		 * Post LeaveApplications
		 * @return {LeaveApplications} A successful request
		 */
		CreateLeaveApplication(requestBody: Array<LeaveApplication>): Observable<LeaveApplications> {
			return this.http.post<LeaveApplications>(this.baseUri + 'LeaveApplications', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * searches for an Leave Application by unique id
		 * Get LeaveApplications/{LeaveApplicationId}
		 * @param {string} LeaveApplicationId Leave Application id for single object
		 * @return {LeaveApplications} search results matching criteria
		 */
		GetLeaveApplication(LeaveApplicationId: string): Observable<LeaveApplications> {
			return this.http.get<LeaveApplications>(this.baseUri + 'LeaveApplications/' + (LeaveApplicationId == null ? '' : encodeURIComponent(LeaveApplicationId)), {});
		}

		/**
		 * Use this method to update a Leave Application
		 * Post LeaveApplications/{LeaveApplicationId}
		 * @param {string} LeaveApplicationId Leave Application id for single object
		 * @return {LeaveApplications} A successful request
		 */
		UpdateLeaveApplication(LeaveApplicationId: string, requestBody: Array<LeaveApplication>): Observable<LeaveApplications> {
			return this.http.post<LeaveApplications>(this.baseUri + 'LeaveApplications/' + (LeaveApplicationId == null ? '' : encodeURIComponent(LeaveApplicationId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * searches Pay Items
		 * Get PayItems
		 * @param {string} where Filter by an any element
		 * @param {string} order Order by an any element
		 * @param {number} page e.g. page=1 – Up to 100 objects will be returned in a single API call
		 * @return {PayItems} search results matching criteria
		 */
		GetPayItems(where: string, order: string, page: number): Observable<PayItems> {
			return this.http.get<PayItems>(this.baseUri + 'PayItems?where=' + (where == null ? '' : encodeURIComponent(where)) + '&order=' + (order == null ? '' : encodeURIComponent(order)) + '&page=' + page, {});
		}

		/**
		 * Use this method to create a Pay Item
		 * Post PayItems
		 * @return {PayItems} A successful request - currently returns empty array for JSON
		 */
		CreatePayItem(requestBody: PayItem): Observable<PayItems> {
			return this.http.post<PayItems>(this.baseUri + 'PayItems', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * searches Payroll Calendars
		 * Get PayrollCalendars
		 * @param {string} where Filter by an any element
		 * @param {string} order Order by an any element
		 * @param {number} page e.g. page=1 – Up to 100 objects will be returned in a single API call
		 * @return {PayrollCalendars} search results matching criteria
		 */
		GetPayrollCalendars(where: string, order: string, page: number): Observable<PayrollCalendars> {
			return this.http.get<PayrollCalendars>(this.baseUri + 'PayrollCalendars?where=' + (where == null ? '' : encodeURIComponent(where)) + '&order=' + (order == null ? '' : encodeURIComponent(order)) + '&page=' + page, {});
		}

		/**
		 * Use this method to create a Payroll Calendars
		 * Post PayrollCalendars
		 * @return {PayrollCalendars} A successful request
		 */
		CreatePayrollCalendar(requestBody: Array<PayrollCalendar>): Observable<PayrollCalendars> {
			return this.http.post<PayrollCalendars>(this.baseUri + 'PayrollCalendars', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * searches Payroll Calendars
		 * Get PayrollCalendars/{PayrollCalendarID}
		 * @param {string} PayrollCalendarID Payroll Calendar id for single object
		 * @return {PayrollCalendars} search results matching criteria
		 */
		GetPayrollCalendar(PayrollCalendarID: string): Observable<PayrollCalendars> {
			return this.http.get<PayrollCalendars>(this.baseUri + 'PayrollCalendars/' + (PayrollCalendarID == null ? '' : encodeURIComponent(PayrollCalendarID)), {});
		}

		/**
		 * searches PayRuns
		 * Get PayRuns
		 * @param {string} where Filter by an any element
		 * @param {string} order Order by an any element
		 * @param {number} page e.g. page=1 – Up to 100 PayRuns will be returned in a single API call
		 * @return {PayRuns} search results matching criteria
		 */
		GetPayRuns(where: string, order: string, page: number): Observable<PayRuns> {
			return this.http.get<PayRuns>(this.baseUri + 'PayRuns?where=' + (where == null ? '' : encodeURIComponent(where)) + '&order=' + (order == null ? '' : encodeURIComponent(order)) + '&page=' + page, {});
		}

		/**
		 * Use this method to create a PayRun
		 * Post PayRuns
		 * @return {PayRuns} A successful request
		 */
		CreatePayRun(requestBody: Array<PayRun>): Observable<PayRuns> {
			return this.http.post<PayRuns>(this.baseUri + 'PayRuns', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * searches for an payrun by unique id
		 * Get PayRuns/{PayRunID}
		 * @param {string} PayRunID PayRun id for single object
		 * @return {PayRuns} search results matching criteria
		 */
		GetPayRun(PayRunID: string): Observable<PayRuns> {
			return this.http.get<PayRuns>(this.baseUri + 'PayRuns/' + (PayRunID == null ? '' : encodeURIComponent(PayRunID)), {});
		}

		/**
		 * Update a PayRun
		 * Update properties on a single PayRun
		 * Post PayRuns/{PayRunID}
		 * @param {string} PayRunID PayRun id for single object
		 * @return {PayRuns} A successful request
		 */
		UpdatePayRun(PayRunID: string, requestBody: Array<PayRun>): Observable<PayRuns> {
			return this.http.post<PayRuns>(this.baseUri + 'PayRuns/' + (PayRunID == null ? '' : encodeURIComponent(PayRunID)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * searches for an payslip by unique id
		 * Get Payslip/{PayslipID}
		 * @param {string} PayslipID Payslip id for single object
		 * @return {PayslipObject} search results matching criteria
		 */
		GetPayslip(PayslipID: string): Observable<PayslipObject> {
			return this.http.get<PayslipObject>(this.baseUri + 'Payslip/' + (PayslipID == null ? '' : encodeURIComponent(PayslipID)), {});
		}

		/**
		 * Update a Payslip
		 * Update lines on a single payslips
		 * Post Payslip/{PayslipID}
		 * @param {string} PayslipID Payslip id for single object
		 * @return {Payslips} A successful request - currently returns empty array for JSON
		 */
		UpdatePayslip(PayslipID: string, requestBody: Array<PayslipLines>): Observable<Payslips> {
			return this.http.post<Payslips>(this.baseUri + 'Payslip/' + (PayslipID == null ? '' : encodeURIComponent(PayslipID)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * retrieve settings
		 * Get Settings
		 * @return {SettingsObject} payroll settings
		 */
		GetSettings(): Observable<SettingsObject> {
			return this.http.get<SettingsObject>(this.baseUri + 'Settings', {});
		}

		/**
		 * searches SuperFunds
		 * Get Superfunds
		 * @param {string} where Filter by an any element
		 * @param {string} order Order by an any element
		 * @param {number} page e.g. page=1 – Up to 100 SuperFunds will be returned in a single API call
		 * @return {SuperFunds} search results matching criteria
		 */
		GetSuperfunds(where: string, order: string, page: number): Observable<SuperFunds> {
			return this.http.get<SuperFunds>(this.baseUri + 'Superfunds?where=' + (where == null ? '' : encodeURIComponent(where)) + '&order=' + (order == null ? '' : encodeURIComponent(order)) + '&page=' + page, {});
		}

		/**
		 * Use this method to create a super fund
		 * Post Superfunds
		 * @return {SuperFunds} A successful request
		 */
		CreateSuperfund(requestBody: Array<SuperFund>): Observable<SuperFunds> {
			return this.http.post<SuperFunds>(this.baseUri + 'Superfunds', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * searches for an Superfund by unique id
		 * Get Superfunds/{SuperFundID}
		 * @param {string} SuperFundID Superfund id for single object
		 * @return {SuperFunds} search results matching criteria
		 */
		GetSuperfund(SuperFundID: string): Observable<SuperFunds> {
			return this.http.get<SuperFunds>(this.baseUri + 'Superfunds/' + (SuperFundID == null ? '' : encodeURIComponent(SuperFundID)), {});
		}

		/**
		 * Update a Superfund
		 * Update properties on a single Superfund
		 * Post Superfunds/{SuperFundID}
		 * @param {string} SuperFundID Superfund id for single object
		 * @return {SuperFunds} A successful request
		 */
		UpdateSuperfund(SuperFundID: string, requestBody: Array<SuperFund>): Observable<SuperFunds> {
			return this.http.post<SuperFunds>(this.baseUri + 'Superfunds/' + (SuperFundID == null ? '' : encodeURIComponent(SuperFundID)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * searches SuperfundProducts
		 * Get SuperfundProducts
		 * @param {string} ABN The ABN of the Regulated SuperFund
		 * @param {string} USI The USI of the Regulated SuperFund
		 * @return {SuperFundProducts} search results matching criteria
		 */
		GetSuperfundProducts(ABN: string, USI: string): Observable<SuperFundProducts> {
			return this.http.get<SuperFundProducts>(this.baseUri + 'SuperfundProducts?ABN=' + (ABN == null ? '' : encodeURIComponent(ABN)) + '&USI=' + (USI == null ? '' : encodeURIComponent(USI)), {});
		}

		/**
		 * searches timesheets
		 * Get Timesheets
		 * @param {string} where Filter by an any element
		 * @param {string} order Order by an any element
		 * @param {number} page e.g. page=1 – Up to 100 timesheets will be returned in a single API call
		 * @return {Timesheets} search results matching criteria
		 */
		GetTimesheets(where: string, order: string, page: number): Observable<Timesheets> {
			return this.http.get<Timesheets>(this.baseUri + 'Timesheets?where=' + (where == null ? '' : encodeURIComponent(where)) + '&order=' + (order == null ? '' : encodeURIComponent(order)) + '&page=' + page, {});
		}

		/**
		 * Use this method to create a timesheet
		 * Post Timesheets
		 * @return {Timesheets} A successful request
		 */
		CreateTimesheet(requestBody: Array<Timesheet>): Observable<Timesheets> {
			return this.http.post<Timesheets>(this.baseUri + 'Timesheets', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * searches for an timesheet by unique id
		 * Get Timesheets/{TimesheetID}
		 * @param {string} TimesheetID Timesheet id for single object
		 * @return {TimesheetObject} search results matching criteria
		 */
		GetTimesheet(TimesheetID: string): Observable<TimesheetObject> {
			return this.http.get<TimesheetObject>(this.baseUri + 'Timesheets/' + (TimesheetID == null ? '' : encodeURIComponent(TimesheetID)), {});
		}

		/**
		 * Update a Timesheet
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

