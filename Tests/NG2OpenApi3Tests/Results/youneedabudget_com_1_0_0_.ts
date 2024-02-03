import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface Account {

		/**
		 * The current balance of the account in milliunits format
		 * Required
		 */
		balance: number;

		/**
		 * The current cleared balance of the account in milliunits format
		 * Required
		 */
		cleared_balance: number;

		/**
		 * Whether this account is closed or not
		 * Required
		 */
		closed: boolean;
		debt_escrow_amounts?: LoanAccountPeriodicValue;
		debt_interest_rates?: LoanAccountPeriodicValue;
		debt_minimum_payments?: LoanAccountPeriodicValue;

		/** The original debt/loan account balance, specified in milliunits format. */
		debt_original_balance?: number | null;

		/**
		 * Whether or not the account has been deleted.  Deleted accounts will only be included in delta requests.
		 * Required
		 */
		deleted: boolean;

		/** If an account linked to a financial institution (direct_import_linked=true) and the linked connection is not in a healthy state, this will be true. */
		direct_import_in_error?: boolean | null;

		/** Whether or not the account is linked to a financial institution for automatic transaction import. */
		direct_import_linked?: boolean | null;

		/** Required */
		id: string;

		/** A date/time specifying when the account was last reconciled. */
		last_reconciled_at?: Date | null;

		/** Required */
		name: string;
		note?: string | null;

		/**
		 * Whether this account is on budget or not
		 * Required
		 */
		on_budget: boolean;

		/**
		 * The payee id which should be used when transferring to this account
		 * Required
		 */
		transfer_payee_id: string;

		/**
		 * The type of account
		 * Required
		 */
		type: AccountType;

		/**
		 * The current uncleared balance of the account in milliunits format
		 * Required
		 */
		uncleared_balance: number;
	}
	export interface AccountFormProperties {

		/**
		 * The current balance of the account in milliunits format
		 * Required
		 */
		balance: FormControl<number | null | undefined>,

		/**
		 * The current cleared balance of the account in milliunits format
		 * Required
		 */
		cleared_balance: FormControl<number | null | undefined>,

		/**
		 * Whether this account is closed or not
		 * Required
		 */
		closed: FormControl<boolean | null | undefined>,

		/** The original debt/loan account balance, specified in milliunits format. */
		debt_original_balance: FormControl<number | null | undefined>,

		/**
		 * Whether or not the account has been deleted.  Deleted accounts will only be included in delta requests.
		 * Required
		 */
		deleted: FormControl<boolean | null | undefined>,

		/** If an account linked to a financial institution (direct_import_linked=true) and the linked connection is not in a healthy state, this will be true. */
		direct_import_in_error: FormControl<boolean | null | undefined>,

		/** Whether or not the account is linked to a financial institution for automatic transaction import. */
		direct_import_linked: FormControl<boolean | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,

		/** A date/time specifying when the account was last reconciled. */
		last_reconciled_at: FormControl<Date | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
		note: FormControl<string | null | undefined>,

		/**
		 * Whether this account is on budget or not
		 * Required
		 */
		on_budget: FormControl<boolean | null | undefined>,

		/**
		 * The payee id which should be used when transferring to this account
		 * Required
		 */
		transfer_payee_id: FormControl<string | null | undefined>,

		/**
		 * The type of account
		 * Required
		 */
		type: FormControl<AccountType | null | undefined>,

		/**
		 * The current uncleared balance of the account in milliunits format
		 * Required
		 */
		uncleared_balance: FormControl<number | null | undefined>,
	}
	export function CreateAccountFormGroup() {
		return new FormGroup<AccountFormProperties>({
			balance: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			cleared_balance: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			closed: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			debt_original_balance: new FormControl<number | null | undefined>(undefined),
			deleted: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			direct_import_in_error: new FormControl<boolean | null | undefined>(undefined),
			direct_import_linked: new FormControl<boolean | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			last_reconciled_at: new FormControl<Date | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			note: new FormControl<string | null | undefined>(undefined),
			on_budget: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			transfer_payee_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AccountType | null | undefined>(undefined, [Validators.required]),
			uncleared_balance: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface LoanAccountPeriodicValue {
	}
	export interface LoanAccountPeriodicValueFormProperties {
	}
	export function CreateLoanAccountPeriodicValueFormGroup() {
		return new FormGroup<LoanAccountPeriodicValueFormProperties>({
		});

	}

	export enum AccountType { checking = 'checking', savings = 'savings', cash = 'cash', creditCard = 'creditCard', lineOfCredit = 'lineOfCredit', otherAsset = 'otherAsset', otherLiability = 'otherLiability', mortgage = 'mortgage', autoLoan = 'autoLoan', studentLoan = 'studentLoan', personalLoan = 'personalLoan', medicalDebt = 'medicalDebt', otherDebt = 'otherDebt' }

	export interface AccountResponse {

		/** Required */
		data: AccountResponseData;
	}
	export interface AccountResponseFormProperties {
	}
	export function CreateAccountResponseFormGroup() {
		return new FormGroup<AccountResponseFormProperties>({
		});

	}

	export interface AccountResponseData {

		/** Required */
		account: Account;
	}
	export interface AccountResponseDataFormProperties {
	}
	export function CreateAccountResponseDataFormGroup() {
		return new FormGroup<AccountResponseDataFormProperties>({
		});

	}

	export interface AccountsResponse {

		/** Required */
		data: AccountsResponseData;
	}
	export interface AccountsResponseFormProperties {
	}
	export function CreateAccountsResponseFormGroup() {
		return new FormGroup<AccountsResponseFormProperties>({
		});

	}

	export interface AccountsResponseData {

		/** Required */
		accounts: Array<Account>;

		/**
		 * The knowledge of the server
		 * Required
		 */
		server_knowledge: number;
	}
	export interface AccountsResponseDataFormProperties {

		/**
		 * The knowledge of the server
		 * Required
		 */
		server_knowledge: FormControl<number | null | undefined>,
	}
	export function CreateAccountsResponseDataFormGroup() {
		return new FormGroup<AccountsResponseDataFormProperties>({
			server_knowledge: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface BudgetDetail extends BudgetSummary {
		accounts?: Array<Account>;
		categories?: Array<Category>;
		category_groups?: Array<CategoryGroup>;
		months?: Array<MonthDetail>;
		payee_locations?: Array<PayeeLocation>;
		payees?: Array<Payee>;
		scheduled_subtransactions?: Array<ScheduledSubTransaction>;
		scheduled_transactions?: Array<ScheduledTransactionSummary>;
		subtransactions?: Array<SubTransaction>;
		transactions?: Array<TransactionSummary>;
	}
	export interface BudgetDetailFormProperties extends BudgetSummaryFormProperties {
	}
	export function CreateBudgetDetailFormGroup() {
		return new FormGroup<BudgetDetailFormProperties>({
			first_month: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			last_modified_on: new FormControl<Date | null | undefined>(undefined),
			last_month: new FormControl<Date | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Category {

		/**
		 * Activity amount in milliunits format
		 * Required
		 */
		activity: number;

		/**
		 * Balance in milliunits format
		 * Required
		 */
		balance: number;

		/**
		 * Budgeted amount in milliunits format
		 * Required
		 */
		budgeted: number;

		/** Required */
		category_group_id: string;

		/**
		 * Whether or not the category has been deleted.  Deleted categories will only be included in delta requests.
		 * Required
		 */
		deleted: boolean;

		/** The goal cadence */
		goal_cadence?: number | null;

		/** The goal cadence frequency */
		goal_cadence_frequency?: number | null;

		/** The month a goal was created */
		goal_creation_month?: Date | null;

		/** The day of the goal */
		goal_day?: number | null;

		/** The number of months, including the current month, left in the current goal period. */
		goal_months_to_budget?: number | null;

		/** The total amount funded towards the goal within the current goal period. */
		goal_overall_funded?: number | null;

		/** The amount of funding still needed to complete the goal within the current goal period. */
		goal_overall_left?: number | null;

		/** The percentage completion of the goal */
		goal_percentage_complete?: number | null;

		/** The goal target amount in milliunits */
		goal_target?: number | null;

		/** The original target month for the goal to be completed.  Only some goal types specify this date. */
		goal_target_month?: Date | null;

		/** The type of goal, if the category has a goal (TB='Target Category Balance', TBD='Target Category Balance by Date', MF='Monthly Funding', NEED='Plan Your Spending') */
		goal_type?: CategoryGoal_type | null;

		/** The amount of funding still needed in the current month to stay on track towards completing the goal within the current goal period.  This amount will generally correspond to the 'Underfunded' amount in the web and mobile clients except when viewing a category with a Needed for Spending Goal in a future month.  The web and mobile clients will ignore any funding from a prior goal period when viewing category with a Needed for Spending Goal in a future month. */
		goal_under_funded?: number | null;

		/**
		 * Whether or not the category is hidden
		 * Required
		 */
		hidden: boolean;

		/** Required */
		id: string;

		/** Required */
		name: string;
		note?: string | null;

		/** DEPRECATED: No longer used.  Value will always be null. */
		original_category_group_id?: string | null;
	}
	export interface CategoryFormProperties {

		/**
		 * Activity amount in milliunits format
		 * Required
		 */
		activity: FormControl<number | null | undefined>,

		/**
		 * Balance in milliunits format
		 * Required
		 */
		balance: FormControl<number | null | undefined>,

		/**
		 * Budgeted amount in milliunits format
		 * Required
		 */
		budgeted: FormControl<number | null | undefined>,

		/** Required */
		category_group_id: FormControl<string | null | undefined>,

		/**
		 * Whether or not the category has been deleted.  Deleted categories will only be included in delta requests.
		 * Required
		 */
		deleted: FormControl<boolean | null | undefined>,

		/** The goal cadence */
		goal_cadence: FormControl<number | null | undefined>,

		/** The goal cadence frequency */
		goal_cadence_frequency: FormControl<number | null | undefined>,

		/** The month a goal was created */
		goal_creation_month: FormControl<Date | null | undefined>,

		/** The day of the goal */
		goal_day: FormControl<number | null | undefined>,

		/** The number of months, including the current month, left in the current goal period. */
		goal_months_to_budget: FormControl<number | null | undefined>,

		/** The total amount funded towards the goal within the current goal period. */
		goal_overall_funded: FormControl<number | null | undefined>,

		/** The amount of funding still needed to complete the goal within the current goal period. */
		goal_overall_left: FormControl<number | null | undefined>,

		/** The percentage completion of the goal */
		goal_percentage_complete: FormControl<number | null | undefined>,

		/** The goal target amount in milliunits */
		goal_target: FormControl<number | null | undefined>,

		/** The original target month for the goal to be completed.  Only some goal types specify this date. */
		goal_target_month: FormControl<Date | null | undefined>,

		/** The type of goal, if the category has a goal (TB='Target Category Balance', TBD='Target Category Balance by Date', MF='Monthly Funding', NEED='Plan Your Spending') */
		goal_type: FormControl<CategoryGoal_type | null | undefined>,

		/** The amount of funding still needed in the current month to stay on track towards completing the goal within the current goal period.  This amount will generally correspond to the 'Underfunded' amount in the web and mobile clients except when viewing a category with a Needed for Spending Goal in a future month.  The web and mobile clients will ignore any funding from a prior goal period when viewing category with a Needed for Spending Goal in a future month. */
		goal_under_funded: FormControl<number | null | undefined>,

		/**
		 * Whether or not the category is hidden
		 * Required
		 */
		hidden: FormControl<boolean | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
		note: FormControl<string | null | undefined>,

		/** DEPRECATED: No longer used.  Value will always be null. */
		original_category_group_id: FormControl<string | null | undefined>,
	}
	export function CreateCategoryFormGroup() {
		return new FormGroup<CategoryFormProperties>({
			activity: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			balance: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			budgeted: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			category_group_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			deleted: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			goal_cadence: new FormControl<number | null | undefined>(undefined),
			goal_cadence_frequency: new FormControl<number | null | undefined>(undefined),
			goal_creation_month: new FormControl<Date | null | undefined>(undefined),
			goal_day: new FormControl<number | null | undefined>(undefined),
			goal_months_to_budget: new FormControl<number | null | undefined>(undefined),
			goal_overall_funded: new FormControl<number | null | undefined>(undefined),
			goal_overall_left: new FormControl<number | null | undefined>(undefined),
			goal_percentage_complete: new FormControl<number | null | undefined>(undefined),
			goal_target: new FormControl<number | null | undefined>(undefined),
			goal_target_month: new FormControl<Date | null | undefined>(undefined),
			goal_type: new FormControl<CategoryGoal_type | null | undefined>(undefined),
			goal_under_funded: new FormControl<number | null | undefined>(undefined),
			hidden: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			note: new FormControl<string | null | undefined>(undefined),
			original_category_group_id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum CategoryGoal_type { TB = 'TB', TBD = 'TBD', MF = 'MF', NEED = 'NEED', DEBT = 'DEBT', _null = 5 }

	export interface CategoryGroup {

		/**
		 * Whether or not the category group has been deleted.  Deleted category groups will only be included in delta requests.
		 * Required
		 */
		deleted: boolean;

		/**
		 * Whether or not the category group is hidden
		 * Required
		 */
		hidden: boolean;

		/** Required */
		id: string;

		/** Required */
		name: string;
	}
	export interface CategoryGroupFormProperties {

		/**
		 * Whether or not the category group has been deleted.  Deleted category groups will only be included in delta requests.
		 * Required
		 */
		deleted: FormControl<boolean | null | undefined>,

		/**
		 * Whether or not the category group is hidden
		 * Required
		 */
		hidden: FormControl<boolean | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
	}
	export function CreateCategoryGroupFormGroup() {
		return new FormGroup<CategoryGroupFormProperties>({
			deleted: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			hidden: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface MonthDetail extends MonthSummary {

		/**
		 * The budget month categories.  Amounts (budgeted, activity, balance, etc.) are specific to the {month} parameter specified.
		 * Required
		 */
		categories: Array<Category>;
	}
	export interface MonthDetailFormProperties extends MonthSummaryFormProperties {
	}
	export function CreateMonthDetailFormGroup() {
		return new FormGroup<MonthDetailFormProperties>({
			activity: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			age_of_money: new FormControl<number | null | undefined>(undefined),
			budgeted: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			deleted: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			income: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			month: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			note: new FormControl<string | null | undefined>(undefined),
			to_be_budgeted: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PayeeLocation {

		/**
		 * Whether or not the payee location has been deleted.  Deleted payee locations will only be included in delta requests.
		 * Required
		 */
		deleted: boolean;

		/** Required */
		id: string;

		/** Required */
		latitude: string;

		/** Required */
		longitude: string;

		/** Required */
		payee_id: string;
	}
	export interface PayeeLocationFormProperties {

		/**
		 * Whether or not the payee location has been deleted.  Deleted payee locations will only be included in delta requests.
		 * Required
		 */
		deleted: FormControl<boolean | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		latitude: FormControl<string | null | undefined>,

		/** Required */
		longitude: FormControl<string | null | undefined>,

		/** Required */
		payee_id: FormControl<string | null | undefined>,
	}
	export function CreatePayeeLocationFormGroup() {
		return new FormGroup<PayeeLocationFormProperties>({
			deleted: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			latitude: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			longitude: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			payee_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Payee {

		/**
		 * Whether or not the payee has been deleted.  Deleted payees will only be included in delta requests.
		 * Required
		 */
		deleted: boolean;

		/** Required */
		id: string;

		/** Required */
		name: string;

		/** If a transfer payee, the `account_id` to which this payee transfers to */
		transfer_account_id?: string | null;
	}
	export interface PayeeFormProperties {

		/**
		 * Whether or not the payee has been deleted.  Deleted payees will only be included in delta requests.
		 * Required
		 */
		deleted: FormControl<boolean | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** If a transfer payee, the `account_id` to which this payee transfers to */
		transfer_account_id: FormControl<string | null | undefined>,
	}
	export function CreatePayeeFormGroup() {
		return new FormGroup<PayeeFormProperties>({
			deleted: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			transfer_account_id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ScheduledSubTransaction {

		/**
		 * The scheduled subtransaction amount in milliunits format
		 * Required
		 */
		amount: number;
		category_id?: string | null;

		/**
		 * Whether or not the scheduled subtransaction has been deleted.  Deleted scheduled subtransactions will only be included in delta requests.
		 * Required
		 */
		deleted: boolean;

		/** Required */
		id: string;
		memo?: string | null;
		payee_id?: string | null;

		/** Required */
		scheduled_transaction_id: string;

		/** If a transfer, the account_id which the scheduled subtransaction transfers to */
		transfer_account_id?: string | null;
	}
	export interface ScheduledSubTransactionFormProperties {

		/**
		 * The scheduled subtransaction amount in milliunits format
		 * Required
		 */
		amount: FormControl<number | null | undefined>,
		category_id: FormControl<string | null | undefined>,

		/**
		 * Whether or not the scheduled subtransaction has been deleted.  Deleted scheduled subtransactions will only be included in delta requests.
		 * Required
		 */
		deleted: FormControl<boolean | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,
		memo: FormControl<string | null | undefined>,
		payee_id: FormControl<string | null | undefined>,

		/** Required */
		scheduled_transaction_id: FormControl<string | null | undefined>,

		/** If a transfer, the account_id which the scheduled subtransaction transfers to */
		transfer_account_id: FormControl<string | null | undefined>,
	}
	export function CreateScheduledSubTransactionFormGroup() {
		return new FormGroup<ScheduledSubTransactionFormProperties>({
			amount: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			category_id: new FormControl<string | null | undefined>(undefined),
			deleted: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			memo: new FormControl<string | null | undefined>(undefined),
			payee_id: new FormControl<string | null | undefined>(undefined),
			scheduled_transaction_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			transfer_account_id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ScheduledTransactionSummary {

		/** Required */
		account_id: string;

		/**
		 * The scheduled transaction amount in milliunits format
		 * Required
		 */
		amount: number;
		category_id?: string | null;

		/**
		 * The first date for which the Scheduled Transaction was scheduled.
		 * Required
		 */
		date_first: Date;

		/**
		 * The next date for which the Scheduled Transaction is scheduled.
		 * Required
		 */
		date_next: Date;

		/**
		 * Whether or not the scheduled transaction has been deleted.  Deleted scheduled transactions will only be included in delta requests.
		 * Required
		 */
		deleted: boolean;

		/** The scheduled transaction flag */
		flag_color?: ScheduledTransactionSummaryFlag_color | null;

		/** Required */
		frequency: ScheduledTransactionSummaryFrequency;

		/** Required */
		id: string;
		memo?: string | null;
		payee_id?: string | null;

		/** If a transfer, the account_id which the scheduled transaction transfers to */
		transfer_account_id?: string | null;
	}
	export interface ScheduledTransactionSummaryFormProperties {

		/** Required */
		account_id: FormControl<string | null | undefined>,

		/**
		 * The scheduled transaction amount in milliunits format
		 * Required
		 */
		amount: FormControl<number | null | undefined>,
		category_id: FormControl<string | null | undefined>,

		/**
		 * The first date for which the Scheduled Transaction was scheduled.
		 * Required
		 */
		date_first: FormControl<Date | null | undefined>,

		/**
		 * The next date for which the Scheduled Transaction is scheduled.
		 * Required
		 */
		date_next: FormControl<Date | null | undefined>,

		/**
		 * Whether or not the scheduled transaction has been deleted.  Deleted scheduled transactions will only be included in delta requests.
		 * Required
		 */
		deleted: FormControl<boolean | null | undefined>,

		/** The scheduled transaction flag */
		flag_color: FormControl<ScheduledTransactionSummaryFlag_color | null | undefined>,

		/** Required */
		frequency: FormControl<ScheduledTransactionSummaryFrequency | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,
		memo: FormControl<string | null | undefined>,
		payee_id: FormControl<string | null | undefined>,

		/** If a transfer, the account_id which the scheduled transaction transfers to */
		transfer_account_id: FormControl<string | null | undefined>,
	}
	export function CreateScheduledTransactionSummaryFormGroup() {
		return new FormGroup<ScheduledTransactionSummaryFormProperties>({
			account_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			amount: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			category_id: new FormControl<string | null | undefined>(undefined),
			date_first: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			date_next: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			deleted: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			flag_color: new FormControl<ScheduledTransactionSummaryFlag_color | null | undefined>(undefined),
			frequency: new FormControl<ScheduledTransactionSummaryFrequency | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			memo: new FormControl<string | null | undefined>(undefined),
			payee_id: new FormControl<string | null | undefined>(undefined),
			transfer_account_id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ScheduledTransactionSummaryFlag_color { red = 'red', orange = 'orange', yellow = 'yellow', green = 'green', blue = 'blue', purple = 'purple', _null = 6 }

	export enum ScheduledTransactionSummaryFrequency { never = 'never', daily = 'daily', weekly = 'weekly', everyOtherWeek = 'everyOtherWeek', twiceAMonth = 'twiceAMonth', every4Weeks = 'every4Weeks', monthly = 'monthly', everyOtherMonth = 'everyOtherMonth', every3Months = 'every3Months', every4Months = 'every4Months', twiceAYear = 'twiceAYear', yearly = 'yearly', everyOtherYear = 'everyOtherYear' }

	export interface SubTransaction {

		/**
		 * The subtransaction amount in milliunits format
		 * Required
		 */
		amount: number;
		category_id?: string | null;
		category_name?: string | null;

		/**
		 * Whether or not the subtransaction has been deleted.  Deleted subtransactions will only be included in delta requests.
		 * Required
		 */
		deleted: boolean;

		/** Required */
		id: string;
		memo?: string | null;
		payee_id?: string | null;
		payee_name?: string | null;

		/** Required */
		transaction_id: string;

		/** If a transfer, the account_id which the subtransaction transfers to */
		transfer_account_id?: string | null;

		/** If a transfer, the id of transaction on the other side of the transfer */
		transfer_transaction_id?: string | null;
	}
	export interface SubTransactionFormProperties {

		/**
		 * The subtransaction amount in milliunits format
		 * Required
		 */
		amount: FormControl<number | null | undefined>,
		category_id: FormControl<string | null | undefined>,
		category_name: FormControl<string | null | undefined>,

		/**
		 * Whether or not the subtransaction has been deleted.  Deleted subtransactions will only be included in delta requests.
		 * Required
		 */
		deleted: FormControl<boolean | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,
		memo: FormControl<string | null | undefined>,
		payee_id: FormControl<string | null | undefined>,
		payee_name: FormControl<string | null | undefined>,

		/** Required */
		transaction_id: FormControl<string | null | undefined>,

		/** If a transfer, the account_id which the subtransaction transfers to */
		transfer_account_id: FormControl<string | null | undefined>,

		/** If a transfer, the id of transaction on the other side of the transfer */
		transfer_transaction_id: FormControl<string | null | undefined>,
	}
	export function CreateSubTransactionFormGroup() {
		return new FormGroup<SubTransactionFormProperties>({
			amount: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			category_id: new FormControl<string | null | undefined>(undefined),
			category_name: new FormControl<string | null | undefined>(undefined),
			deleted: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			memo: new FormControl<string | null | undefined>(undefined),
			payee_id: new FormControl<string | null | undefined>(undefined),
			payee_name: new FormControl<string | null | undefined>(undefined),
			transaction_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			transfer_account_id: new FormControl<string | null | undefined>(undefined),
			transfer_transaction_id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TransactionSummary {

		/** Required */
		account_id: string;

		/**
		 * The transaction amount in milliunits format
		 * Required
		 */
		amount: number;

		/**
		 * Whether or not the transaction is approved
		 * Required
		 */
		approved: boolean;
		category_id?: string | null;

		/**
		 * The cleared status of the transaction
		 * Required
		 */
		cleared: TransactionSummaryCleared;

		/**
		 * The transaction date in ISO format (e.g. 2016-12-01)
		 * Required
		 */
		date: Date;

		/** If the transaction is a debt/loan account transaction, the type of transaction */
		debt_transaction_type?: TransactionSummaryDebt_transaction_type | null;

		/**
		 * Whether or not the transaction has been deleted.  Deleted transactions will only be included in delta requests.
		 * Required
		 */
		deleted: boolean;

		/** The transaction flag */
		flag_color?: TransactionSummaryFlag_color | null;

		/** Required */
		id: string;

		/** If the transaction was imported, this field is a unique (by account) import identifier.  If this transaction was imported through File Based Import or Direct Import and not through the API, the import_id will have the format: 'YNAB:[milliunit_amount]:[iso_date]:[occurrence]'.  For example, a transaction dated 2015-12-30 in the amount of -$294.23 USD would have an import_id of 'YNAB:-294230:2015-12-30:1'.  If a second transaction on the same account was imported and had the same date and same amount, its import_id would be 'YNAB:-294230:2015-12-30:2'. */
		import_id?: string | null;

		/** If the transaction was imported, the payee name that was used when importing and before applying any payee rename rules */
		import_payee_name?: string | null;

		/** If the transaction was imported, the original payee name as it appeared on the statement */
		import_payee_name_original?: string | null;

		/** If transaction is matched, the id of the matched transaction */
		matched_transaction_id?: string | null;
		memo?: string | null;
		payee_id?: string | null;

		/** If a transfer transaction, the account to which it transfers */
		transfer_account_id?: string | null;

		/** If a transfer transaction, the id of transaction on the other side of the transfer */
		transfer_transaction_id?: string | null;
	}
	export interface TransactionSummaryFormProperties {

		/** Required */
		account_id: FormControl<string | null | undefined>,

		/**
		 * The transaction amount in milliunits format
		 * Required
		 */
		amount: FormControl<number | null | undefined>,

		/**
		 * Whether or not the transaction is approved
		 * Required
		 */
		approved: FormControl<boolean | null | undefined>,
		category_id: FormControl<string | null | undefined>,

		/**
		 * The cleared status of the transaction
		 * Required
		 */
		cleared: FormControl<TransactionSummaryCleared | null | undefined>,

		/**
		 * The transaction date in ISO format (e.g. 2016-12-01)
		 * Required
		 */
		date: FormControl<Date | null | undefined>,

		/** If the transaction is a debt/loan account transaction, the type of transaction */
		debt_transaction_type: FormControl<TransactionSummaryDebt_transaction_type | null | undefined>,

		/**
		 * Whether or not the transaction has been deleted.  Deleted transactions will only be included in delta requests.
		 * Required
		 */
		deleted: FormControl<boolean | null | undefined>,

		/** The transaction flag */
		flag_color: FormControl<TransactionSummaryFlag_color | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,

		/** If the transaction was imported, this field is a unique (by account) import identifier.  If this transaction was imported through File Based Import or Direct Import and not through the API, the import_id will have the format: 'YNAB:[milliunit_amount]:[iso_date]:[occurrence]'.  For example, a transaction dated 2015-12-30 in the amount of -$294.23 USD would have an import_id of 'YNAB:-294230:2015-12-30:1'.  If a second transaction on the same account was imported and had the same date and same amount, its import_id would be 'YNAB:-294230:2015-12-30:2'. */
		import_id: FormControl<string | null | undefined>,

		/** If the transaction was imported, the payee name that was used when importing and before applying any payee rename rules */
		import_payee_name: FormControl<string | null | undefined>,

		/** If the transaction was imported, the original payee name as it appeared on the statement */
		import_payee_name_original: FormControl<string | null | undefined>,

		/** If transaction is matched, the id of the matched transaction */
		matched_transaction_id: FormControl<string | null | undefined>,
		memo: FormControl<string | null | undefined>,
		payee_id: FormControl<string | null | undefined>,

		/** If a transfer transaction, the account to which it transfers */
		transfer_account_id: FormControl<string | null | undefined>,

		/** If a transfer transaction, the id of transaction on the other side of the transfer */
		transfer_transaction_id: FormControl<string | null | undefined>,
	}
	export function CreateTransactionSummaryFormGroup() {
		return new FormGroup<TransactionSummaryFormProperties>({
			account_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			amount: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			approved: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			category_id: new FormControl<string | null | undefined>(undefined),
			cleared: new FormControl<TransactionSummaryCleared | null | undefined>(undefined, [Validators.required]),
			date: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			debt_transaction_type: new FormControl<TransactionSummaryDebt_transaction_type | null | undefined>(undefined),
			deleted: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			flag_color: new FormControl<TransactionSummaryFlag_color | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			import_id: new FormControl<string | null | undefined>(undefined),
			import_payee_name: new FormControl<string | null | undefined>(undefined),
			import_payee_name_original: new FormControl<string | null | undefined>(undefined),
			matched_transaction_id: new FormControl<string | null | undefined>(undefined),
			memo: new FormControl<string | null | undefined>(undefined),
			payee_id: new FormControl<string | null | undefined>(undefined),
			transfer_account_id: new FormControl<string | null | undefined>(undefined),
			transfer_transaction_id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum TransactionSummaryCleared { cleared = 'cleared', uncleared = 'uncleared', reconciled = 'reconciled' }

	export enum TransactionSummaryDebt_transaction_type { payment = 'payment', refund = 'refund', fee = 'fee', interest = 'interest', escrow = 'escrow', balancedAdjustment = 'balancedAdjustment', credit = 'credit', charge = 'charge', _null = 8 }

	export enum TransactionSummaryFlag_color { red = 'red', orange = 'orange', yellow = 'yellow', green = 'green', blue = 'blue', purple = 'purple', _null = 6 }

	export interface BudgetDetailResponse {

		/** Required */
		data: BudgetDetailResponseData;
	}
	export interface BudgetDetailResponseFormProperties {
	}
	export function CreateBudgetDetailResponseFormGroup() {
		return new FormGroup<BudgetDetailResponseFormProperties>({
		});

	}

	export interface BudgetDetailResponseData {

		/** Required */
		budget: BudgetDetail;

		/**
		 * The knowledge of the server
		 * Required
		 */
		server_knowledge: number;
	}
	export interface BudgetDetailResponseDataFormProperties {

		/**
		 * The knowledge of the server
		 * Required
		 */
		server_knowledge: FormControl<number | null | undefined>,
	}
	export function CreateBudgetDetailResponseDataFormGroup() {
		return new FormGroup<BudgetDetailResponseDataFormProperties>({
			server_knowledge: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface BudgetSettings {

		/**
		 * The currency format setting for the budget.  In some cases the format will not be available and will be specified as null.
		 * Required
		 */
		currency_format: CurrencyFormat;

		/**
		 * The date format setting for the budget.  In some cases the format will not be available and will be specified as null.
		 * Required
		 */
		date_format: DateFormat;
	}
	export interface BudgetSettingsFormProperties {
	}
	export function CreateBudgetSettingsFormGroup() {
		return new FormGroup<BudgetSettingsFormProperties>({
		});

	}


	/** The currency format setting for the budget.  In some cases the format will not be available and will be specified as null. */
	export interface CurrencyFormat {

		/** Required */
		currency_symbol: string;

		/** Required */
		decimal_digits: number;

		/** Required */
		decimal_separator: string;

		/** Required */
		display_symbol: boolean;

		/** Required */
		example_format: string;

		/** Required */
		group_separator: string;

		/** Required */
		iso_code: string;

		/** Required */
		symbol_first: boolean;
	}

	/** The currency format setting for the budget.  In some cases the format will not be available and will be specified as null. */
	export interface CurrencyFormatFormProperties {

		/** Required */
		currency_symbol: FormControl<string | null | undefined>,

		/** Required */
		decimal_digits: FormControl<number | null | undefined>,

		/** Required */
		decimal_separator: FormControl<string | null | undefined>,

		/** Required */
		display_symbol: FormControl<boolean | null | undefined>,

		/** Required */
		example_format: FormControl<string | null | undefined>,

		/** Required */
		group_separator: FormControl<string | null | undefined>,

		/** Required */
		iso_code: FormControl<string | null | undefined>,

		/** Required */
		symbol_first: FormControl<boolean | null | undefined>,
	}
	export function CreateCurrencyFormatFormGroup() {
		return new FormGroup<CurrencyFormatFormProperties>({
			currency_symbol: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			decimal_digits: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			decimal_separator: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			display_symbol: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			example_format: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			group_separator: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			iso_code: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			symbol_first: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The date format setting for the budget.  In some cases the format will not be available and will be specified as null. */
	export interface DateFormat {

		/** Required */
		format: string;
	}

	/** The date format setting for the budget.  In some cases the format will not be available and will be specified as null. */
	export interface DateFormatFormProperties {

		/** Required */
		format: FormControl<string | null | undefined>,
	}
	export function CreateDateFormatFormGroup() {
		return new FormGroup<DateFormatFormProperties>({
			format: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface BudgetSettingsResponse {

		/** Required */
		data: BudgetSettingsResponseData;
	}
	export interface BudgetSettingsResponseFormProperties {
	}
	export function CreateBudgetSettingsResponseFormGroup() {
		return new FormGroup<BudgetSettingsResponseFormProperties>({
		});

	}

	export interface BudgetSettingsResponseData {

		/** Required */
		settings: BudgetSettings;
	}
	export interface BudgetSettingsResponseDataFormProperties {
	}
	export function CreateBudgetSettingsResponseDataFormGroup() {
		return new FormGroup<BudgetSettingsResponseDataFormProperties>({
		});

	}

	export interface BudgetSummary {

		/** The budget accounts (only included if `include_accounts=true` specified as query parameter) */
		accounts?: Array<Account>;

		/** The currency format setting for the budget.  In some cases the format will not be available and will be specified as null. */
		currency_format?: CurrencyFormat;

		/** The date format setting for the budget.  In some cases the format will not be available and will be specified as null. */
		date_format?: DateFormat;

		/** The earliest budget month */
		first_month?: Date | null;

		/** Required */
		id: string;

		/** The last time any changes were made to the budget from either a web or mobile client */
		last_modified_on?: Date | null;

		/** The latest budget month */
		last_month?: Date | null;

		/** Required */
		name: string;
	}
	export interface BudgetSummaryFormProperties {

		/** The earliest budget month */
		first_month: FormControl<Date | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,

		/** The last time any changes were made to the budget from either a web or mobile client */
		last_modified_on: FormControl<Date | null | undefined>,

		/** The latest budget month */
		last_month: FormControl<Date | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
	}
	export function CreateBudgetSummaryFormGroup() {
		return new FormGroup<BudgetSummaryFormProperties>({
			first_month: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			last_modified_on: new FormControl<Date | null | undefined>(undefined),
			last_month: new FormControl<Date | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface BudgetSummaryResponse {

		/** Required */
		data: BudgetSummaryResponseData;
	}
	export interface BudgetSummaryResponseFormProperties {
	}
	export function CreateBudgetSummaryResponseFormGroup() {
		return new FormGroup<BudgetSummaryResponseFormProperties>({
		});

	}

	export interface BudgetSummaryResponseData {

		/** Required */
		budgets: Array<BudgetSummary>;
		default_budget?: BudgetSummary;
	}
	export interface BudgetSummaryResponseDataFormProperties {
	}
	export function CreateBudgetSummaryResponseDataFormGroup() {
		return new FormGroup<BudgetSummaryResponseDataFormProperties>({
		});

	}

	export interface BulkResponse {

		/** Required */
		data: BulkResponseData;
	}
	export interface BulkResponseFormProperties {
	}
	export function CreateBulkResponseFormGroup() {
		return new FormGroup<BulkResponseFormProperties>({
		});

	}

	export interface BulkResponseData {

		/** Required */
		bulk: BulkResponseDataBulk;
	}
	export interface BulkResponseDataFormProperties {
	}
	export function CreateBulkResponseDataFormGroup() {
		return new FormGroup<BulkResponseDataFormProperties>({
		});

	}

	export interface BulkResponseDataBulk {

		/**
		 * If any Transactions were not created because they had an `import_id` matching a transaction already on the same account, the specified import_id(s) will be included in this list.
		 * Required
		 */
		duplicate_import_ids: Array<string>;

		/**
		 * The list of Transaction ids that were created.
		 * Required
		 */
		transaction_ids: Array<string>;
	}
	export interface BulkResponseDataBulkFormProperties {
	}
	export function CreateBulkResponseDataBulkFormGroup() {
		return new FormGroup<BulkResponseDataBulkFormProperties>({
		});

	}

	export interface BulkTransactions {

		/** Required */
		transactions: Array<SaveTransaction>;
	}
	export interface BulkTransactionsFormProperties {
	}
	export function CreateBulkTransactionsFormGroup() {
		return new FormGroup<BulkTransactionsFormProperties>({
		});

	}

	export interface SaveTransaction {
	}
	export interface SaveTransactionFormProperties {
	}
	export function CreateSaveTransactionFormGroup() {
		return new FormGroup<SaveTransactionFormProperties>({
		});

	}

	export interface CategoriesResponse {

		/** Required */
		data: CategoriesResponseData;
	}
	export interface CategoriesResponseFormProperties {
	}
	export function CreateCategoriesResponseFormGroup() {
		return new FormGroup<CategoriesResponseFormProperties>({
		});

	}

	export interface CategoriesResponseData {

		/** Required */
		category_groups: Array<CategoryGroupWithCategories>;

		/**
		 * The knowledge of the server
		 * Required
		 */
		server_knowledge: number;
	}
	export interface CategoriesResponseDataFormProperties {

		/**
		 * The knowledge of the server
		 * Required
		 */
		server_knowledge: FormControl<number | null | undefined>,
	}
	export function CreateCategoriesResponseDataFormGroup() {
		return new FormGroup<CategoriesResponseDataFormProperties>({
			server_knowledge: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CategoryGroupWithCategories extends CategoryGroup {

		/**
		 * Category group categories.  Amounts (budgeted, activity, balance, etc.) are specific to the current budget month (UTC).
		 * Required
		 */
		categories: Array<Category>;
	}
	export interface CategoryGroupWithCategoriesFormProperties extends CategoryGroupFormProperties {
	}
	export function CreateCategoryGroupWithCategoriesFormGroup() {
		return new FormGroup<CategoryGroupWithCategoriesFormProperties>({
			deleted: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			hidden: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CategoryResponse {

		/** Required */
		data: CategoryResponseData;
	}
	export interface CategoryResponseFormProperties {
	}
	export function CreateCategoryResponseFormGroup() {
		return new FormGroup<CategoryResponseFormProperties>({
		});

	}

	export interface CategoryResponseData {

		/** Required */
		category: Category;
	}
	export interface CategoryResponseDataFormProperties {
	}
	export function CreateCategoryResponseDataFormGroup() {
		return new FormGroup<CategoryResponseDataFormProperties>({
		});

	}

	export interface ErrorDetail {

		/** Required */
		detail: string;

		/** Required */
		id: string;

		/** Required */
		name: string;
	}
	export interface ErrorDetailFormProperties {

		/** Required */
		detail: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
	}
	export function CreateErrorDetailFormGroup() {
		return new FormGroup<ErrorDetailFormProperties>({
			detail: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ErrorResponse {

		/** Required */
		error: ErrorDetail;
	}
	export interface ErrorResponseFormProperties {
	}
	export function CreateErrorResponseFormGroup() {
		return new FormGroup<ErrorResponseFormProperties>({
		});

	}

	export interface HybridTransaction extends TransactionSummary {

		/** Required */
		account_name: string;

		/** The name of the category.  If a split transaction, this will be 'Split'. */
		category_name?: string | null;

		/** For subtransaction types, this is the id of the parent transaction.  For transaction types, this id will be always be null. */
		parent_transaction_id?: string | null;
		payee_name?: string | null;

		/**
		 * Whether the hybrid transaction represents a regular transaction or a subtransaction
		 * Required
		 */
		type: HybridTransactionType;
	}
	export interface HybridTransactionFormProperties extends TransactionSummaryFormProperties {

		/** Required */
		account_name: FormControl<string | null | undefined>,

		/** The name of the category.  If a split transaction, this will be 'Split'. */
		category_name: FormControl<string | null | undefined>,

		/** For subtransaction types, this is the id of the parent transaction.  For transaction types, this id will be always be null. */
		parent_transaction_id: FormControl<string | null | undefined>,
		payee_name: FormControl<string | null | undefined>,

		/**
		 * Whether the hybrid transaction represents a regular transaction or a subtransaction
		 * Required
		 */
		type: FormControl<HybridTransactionType | null | undefined>,
	}
	export function CreateHybridTransactionFormGroup() {
		return new FormGroup<HybridTransactionFormProperties>({
			account_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			amount: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			approved: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			category_id: new FormControl<string | null | undefined>(undefined),
			cleared: new FormControl<TransactionSummaryCleared | null | undefined>(undefined, [Validators.required]),
			date: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			debt_transaction_type: new FormControl<TransactionSummaryDebt_transaction_type | null | undefined>(undefined),
			deleted: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			flag_color: new FormControl<TransactionSummaryFlag_color | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			import_id: new FormControl<string | null | undefined>(undefined),
			import_payee_name: new FormControl<string | null | undefined>(undefined),
			import_payee_name_original: new FormControl<string | null | undefined>(undefined),
			matched_transaction_id: new FormControl<string | null | undefined>(undefined),
			memo: new FormControl<string | null | undefined>(undefined),
			payee_id: new FormControl<string | null | undefined>(undefined),
			transfer_account_id: new FormControl<string | null | undefined>(undefined),
			transfer_transaction_id: new FormControl<string | null | undefined>(undefined),
			account_name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			category_name: new FormControl<string | null | undefined>(undefined),
			parent_transaction_id: new FormControl<string | null | undefined>(undefined),
			payee_name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<HybridTransactionType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum HybridTransactionType { transaction = 'transaction', subtransaction = 'subtransaction' }

	export interface HybridTransactionsResponse {

		/** Required */
		data: HybridTransactionsResponseData;
	}
	export interface HybridTransactionsResponseFormProperties {
	}
	export function CreateHybridTransactionsResponseFormGroup() {
		return new FormGroup<HybridTransactionsResponseFormProperties>({
		});

	}

	export interface HybridTransactionsResponseData {

		/** The knowledge of the server */
		server_knowledge?: number | null;

		/** Required */
		transactions: Array<HybridTransaction>;
	}
	export interface HybridTransactionsResponseDataFormProperties {

		/** The knowledge of the server */
		server_knowledge: FormControl<number | null | undefined>,
	}
	export function CreateHybridTransactionsResponseDataFormGroup() {
		return new FormGroup<HybridTransactionsResponseDataFormProperties>({
			server_knowledge: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface MonthDetailResponse {

		/** Required */
		data: MonthDetailResponseData;
	}
	export interface MonthDetailResponseFormProperties {
	}
	export function CreateMonthDetailResponseFormGroup() {
		return new FormGroup<MonthDetailResponseFormProperties>({
		});

	}

	export interface MonthDetailResponseData {

		/** Required */
		month: MonthDetail;
	}
	export interface MonthDetailResponseDataFormProperties {
	}
	export function CreateMonthDetailResponseDataFormGroup() {
		return new FormGroup<MonthDetailResponseDataFormProperties>({
		});

	}

	export interface MonthSummariesResponse {

		/** Required */
		data: MonthSummariesResponseData;
	}
	export interface MonthSummariesResponseFormProperties {
	}
	export function CreateMonthSummariesResponseFormGroup() {
		return new FormGroup<MonthSummariesResponseFormProperties>({
		});

	}

	export interface MonthSummariesResponseData {

		/** Required */
		months: Array<MonthSummary>;

		/**
		 * The knowledge of the server
		 * Required
		 */
		server_knowledge: number;
	}
	export interface MonthSummariesResponseDataFormProperties {

		/**
		 * The knowledge of the server
		 * Required
		 */
		server_knowledge: FormControl<number | null | undefined>,
	}
	export function CreateMonthSummariesResponseDataFormGroup() {
		return new FormGroup<MonthSummariesResponseDataFormProperties>({
			server_knowledge: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface MonthSummary {

		/**
		 * The total amount of transactions in the month, excluding those categorized to 'Inflow: Ready to Assign'
		 * Required
		 */
		activity: number;

		/** The Age of Money as of the month */
		age_of_money?: number | null;

		/**
		 * The total amount budgeted in the month
		 * Required
		 */
		budgeted: number;

		/**
		 * Whether or not the month has been deleted.  Deleted months will only be included in delta requests.
		 * Required
		 */
		deleted: boolean;

		/**
		 * The total amount of transactions categorized to 'Inflow: Ready to Assign' in the month
		 * Required
		 */
		income: number;

		/** Required */
		month: Date;
		note?: string | null;

		/**
		 * The available amount for 'Ready to Assign'
		 * Required
		 */
		to_be_budgeted: number;
	}
	export interface MonthSummaryFormProperties {

		/**
		 * The total amount of transactions in the month, excluding those categorized to 'Inflow: Ready to Assign'
		 * Required
		 */
		activity: FormControl<number | null | undefined>,

		/** The Age of Money as of the month */
		age_of_money: FormControl<number | null | undefined>,

		/**
		 * The total amount budgeted in the month
		 * Required
		 */
		budgeted: FormControl<number | null | undefined>,

		/**
		 * Whether or not the month has been deleted.  Deleted months will only be included in delta requests.
		 * Required
		 */
		deleted: FormControl<boolean | null | undefined>,

		/**
		 * The total amount of transactions categorized to 'Inflow: Ready to Assign' in the month
		 * Required
		 */
		income: FormControl<number | null | undefined>,

		/** Required */
		month: FormControl<Date | null | undefined>,
		note: FormControl<string | null | undefined>,

		/**
		 * The available amount for 'Ready to Assign'
		 * Required
		 */
		to_be_budgeted: FormControl<number | null | undefined>,
	}
	export function CreateMonthSummaryFormGroup() {
		return new FormGroup<MonthSummaryFormProperties>({
			activity: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			age_of_money: new FormControl<number | null | undefined>(undefined),
			budgeted: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			deleted: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			income: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			month: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			note: new FormControl<string | null | undefined>(undefined),
			to_be_budgeted: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PatchMonthCategoryWrapper {

		/** Required */
		category: SaveMonthCategory;
	}
	export interface PatchMonthCategoryWrapperFormProperties {
	}
	export function CreatePatchMonthCategoryWrapperFormGroup() {
		return new FormGroup<PatchMonthCategoryWrapperFormProperties>({
		});

	}

	export interface SaveMonthCategory {

		/**
		 * Budgeted amount in milliunits format
		 * Required
		 */
		budgeted: number;
	}
	export interface SaveMonthCategoryFormProperties {

		/**
		 * Budgeted amount in milliunits format
		 * Required
		 */
		budgeted: FormControl<number | null | undefined>,
	}
	export function CreateSaveMonthCategoryFormGroup() {
		return new FormGroup<SaveMonthCategoryFormProperties>({
			budgeted: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PatchTransactionsWrapper {

		/** Required */
		transactions: Array<SaveTransactionWithId>;
	}
	export interface PatchTransactionsWrapperFormProperties {
	}
	export function CreatePatchTransactionsWrapperFormGroup() {
		return new FormGroup<PatchTransactionsWrapperFormProperties>({
		});

	}

	export interface SaveTransactionWithId {
	}
	export interface SaveTransactionWithIdFormProperties {
	}
	export function CreateSaveTransactionWithIdFormGroup() {
		return new FormGroup<SaveTransactionWithIdFormProperties>({
		});

	}

	export interface PayeeLocationResponse {

		/** Required */
		data: PayeeLocationResponseData;
	}
	export interface PayeeLocationResponseFormProperties {
	}
	export function CreatePayeeLocationResponseFormGroup() {
		return new FormGroup<PayeeLocationResponseFormProperties>({
		});

	}

	export interface PayeeLocationResponseData {

		/** Required */
		payee_location: PayeeLocation;
	}
	export interface PayeeLocationResponseDataFormProperties {
	}
	export function CreatePayeeLocationResponseDataFormGroup() {
		return new FormGroup<PayeeLocationResponseDataFormProperties>({
		});

	}

	export interface PayeeLocationsResponse {

		/** Required */
		data: PayeeLocationsResponseData;
	}
	export interface PayeeLocationsResponseFormProperties {
	}
	export function CreatePayeeLocationsResponseFormGroup() {
		return new FormGroup<PayeeLocationsResponseFormProperties>({
		});

	}

	export interface PayeeLocationsResponseData {

		/** Required */
		payee_locations: Array<PayeeLocation>;
	}
	export interface PayeeLocationsResponseDataFormProperties {
	}
	export function CreatePayeeLocationsResponseDataFormGroup() {
		return new FormGroup<PayeeLocationsResponseDataFormProperties>({
		});

	}

	export interface PayeeResponse {

		/** Required */
		data: PayeeResponseData;
	}
	export interface PayeeResponseFormProperties {
	}
	export function CreatePayeeResponseFormGroup() {
		return new FormGroup<PayeeResponseFormProperties>({
		});

	}

	export interface PayeeResponseData {

		/** Required */
		payee: Payee;
	}
	export interface PayeeResponseDataFormProperties {
	}
	export function CreatePayeeResponseDataFormGroup() {
		return new FormGroup<PayeeResponseDataFormProperties>({
		});

	}

	export interface PayeesResponse {

		/** Required */
		data: PayeesResponseData;
	}
	export interface PayeesResponseFormProperties {
	}
	export function CreatePayeesResponseFormGroup() {
		return new FormGroup<PayeesResponseFormProperties>({
		});

	}

	export interface PayeesResponseData {

		/** Required */
		payees: Array<Payee>;

		/**
		 * The knowledge of the server
		 * Required
		 */
		server_knowledge: number;
	}
	export interface PayeesResponseDataFormProperties {

		/**
		 * The knowledge of the server
		 * Required
		 */
		server_knowledge: FormControl<number | null | undefined>,
	}
	export function CreatePayeesResponseDataFormGroup() {
		return new FormGroup<PayeesResponseDataFormProperties>({
			server_knowledge: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PostAccountWrapper {

		/** Required */
		account: SaveAccount;
	}
	export interface PostAccountWrapperFormProperties {
	}
	export function CreatePostAccountWrapperFormGroup() {
		return new FormGroup<PostAccountWrapperFormProperties>({
		});

	}

	export interface SaveAccount {

		/**
		 * The current balance of the account in milliunits format
		 * Required
		 */
		balance: number;

		/**
		 * The name of the account
		 * Required
		 */
		name: string;

		/**
		 * The type of account
		 * Required
		 */
		type: AccountType;
	}
	export interface SaveAccountFormProperties {

		/**
		 * The current balance of the account in milliunits format
		 * Required
		 */
		balance: FormControl<number | null | undefined>,

		/**
		 * The name of the account
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The type of account
		 * Required
		 */
		type: FormControl<AccountType | null | undefined>,
	}
	export function CreateSaveAccountFormGroup() {
		return new FormGroup<SaveAccountFormProperties>({
			balance: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AccountType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PostTransactionsWrapper {
		transaction?: SaveTransaction;
		transactions?: Array<SaveTransaction>;
	}
	export interface PostTransactionsWrapperFormProperties {
	}
	export function CreatePostTransactionsWrapperFormGroup() {
		return new FormGroup<PostTransactionsWrapperFormProperties>({
		});

	}

	export interface PutTransactionWrapper {

		/** Required */
		transaction: SaveTransaction;
	}
	export interface PutTransactionWrapperFormProperties {
	}
	export function CreatePutTransactionWrapperFormGroup() {
		return new FormGroup<PutTransactionWrapperFormProperties>({
		});

	}

	export interface SaveCategoryResponse {

		/** Required */
		data: SaveCategoryResponseData;
	}
	export interface SaveCategoryResponseFormProperties {
	}
	export function CreateSaveCategoryResponseFormGroup() {
		return new FormGroup<SaveCategoryResponseFormProperties>({
		});

	}

	export interface SaveCategoryResponseData {

		/** Required */
		category: Category;

		/**
		 * The knowledge of the server
		 * Required
		 */
		server_knowledge: number;
	}
	export interface SaveCategoryResponseDataFormProperties {

		/**
		 * The knowledge of the server
		 * Required
		 */
		server_knowledge: FormControl<number | null | undefined>,
	}
	export function CreateSaveCategoryResponseDataFormGroup() {
		return new FormGroup<SaveCategoryResponseDataFormProperties>({
			server_knowledge: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SaveSubTransaction {

		/**
		 * The subtransaction amount in milliunits format.
		 * Required
		 */
		amount: number;

		/** The category for the subtransaction.  Credit Card Payment categories are not permitted and will be ignored if supplied. */
		category_id?: string | null;

		/** Max length: 200 */
		memo?: string | null;

		/** The payee for the subtransaction. */
		payee_id?: string | null;

		/**
		 * The payee name.  If a `payee_name` value is provided and `payee_id` has a null value, the `payee_name` value will be used to resolve the payee by either (1) a matching payee rename rule (only if import_id is also specified on parent transaction) or (2) a payee with the same name or (3) creation of a new payee.
		 * Max length: 50
		 */
		payee_name?: string | null;
	}
	export interface SaveSubTransactionFormProperties {

		/**
		 * The subtransaction amount in milliunits format.
		 * Required
		 */
		amount: FormControl<number | null | undefined>,

		/** The category for the subtransaction.  Credit Card Payment categories are not permitted and will be ignored if supplied. */
		category_id: FormControl<string | null | undefined>,

		/** Max length: 200 */
		memo: FormControl<string | null | undefined>,

		/** The payee for the subtransaction. */
		payee_id: FormControl<string | null | undefined>,

		/**
		 * The payee name.  If a `payee_name` value is provided and `payee_id` has a null value, the `payee_name` value will be used to resolve the payee by either (1) a matching payee rename rule (only if import_id is also specified on parent transaction) or (2) a payee with the same name or (3) creation of a new payee.
		 * Max length: 50
		 */
		payee_name: FormControl<string | null | undefined>,
	}
	export function CreateSaveSubTransactionFormGroup() {
		return new FormGroup<SaveSubTransactionFormProperties>({
			amount: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			category_id: new FormControl<string | null | undefined>(undefined),
			memo: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(200)]),
			payee_id: new FormControl<string | null | undefined>(undefined),
			payee_name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(50)]),
		});

	}

	export interface SaveTransactionWithOptionalFields {
		account_id?: string | null;

		/** The transaction amount in milliunits format.  Split transaction amounts cannot be changed and if a different amount is supplied it will be ignored. */
		amount?: number | null;

		/** Whether or not the transaction is approved.  If not supplied, transaction will be unapproved by default. */
		approved?: boolean | null;

		/** The category for the transaction.  To configure a split transaction, you can specify null for `category_id` and provide a `subtransactions` array as part of the transaction object.  If an existing transaction is a split, the `category_id` cannot be changed.  Credit Card Payment categories are not permitted and will be ignored if supplied. */
		category_id?: string | null;

		/** The cleared status of the transaction */
		cleared?: TransactionSummaryCleared | null;

		/** The transaction date in ISO format (e.g. 2016-12-01).  Future dates (scheduled transactions) are not permitted.  Split transaction dates cannot be changed and if a different date is supplied it will be ignored. */
		date?: Date | null;

		/** The transaction flag */
		flag_color?: SaveTransactionWithOptionalFieldsFlag_color | null;

		/**
		 * If specified, the new transaction will be assigned this `import_id` and considered "imported".  We will also attempt to match this imported transaction to an existing "user-entered" transation on the same account, with the same amount, and with a date +/-10 days from the imported transaction date.<br><br>Transactions imported through File Based Import or Direct Import (not through the API) are assigned an import_id in the format: 'YNAB:[milliunit_amount]:[iso_date]:[occurrence]'. For example, a transaction dated 2015-12-30 in the amount of -$294.23 USD would have an import_id of 'YNAB:-294230:2015-12-30:1'.  If a second transaction on the same account was imported and had the same date and same amount, its import_id would be 'YNAB:-294230:2015-12-30:2'.  Using a consistent format will prevent duplicates through Direct Import and File Based Import.<br><br>If import_id is omitted or specified as null, the transaction will be treated as a "user-entered" transaction. As such, it will be eligible to be matched against transactions later being imported (via DI, FBI, or API).
		 * Max length: 36
		 */
		import_id?: string | null;

		/** Max length: 200 */
		memo?: string | null;

		/** The payee for the transaction.  To create a transfer between two accounts, use the account transfer payee pointing to the target account.  Account transfer payees are specified as `tranfer_payee_id` on the account resource. */
		payee_id?: string | null;

		/**
		 * The payee name.  If a `payee_name` value is provided and `payee_id` has a null value, the `payee_name` value will be used to resolve the payee by either (1) a matching payee rename rule (only if `import_id` is also specified) or (2) a payee with the same name or (3) creation of a new payee.
		 * Max length: 50
		 */
		payee_name?: string | null;

		/** An array of subtransactions to configure a transaction as a split.  Updating `subtransactions` on an existing split transaction is not supported. */
		subtransactions?: Array<SaveSubTransaction>;
	}
	export interface SaveTransactionWithOptionalFieldsFormProperties {
		account_id: FormControl<string | null | undefined>,

		/** The transaction amount in milliunits format.  Split transaction amounts cannot be changed and if a different amount is supplied it will be ignored. */
		amount: FormControl<number | null | undefined>,

		/** Whether or not the transaction is approved.  If not supplied, transaction will be unapproved by default. */
		approved: FormControl<boolean | null | undefined>,

		/** The category for the transaction.  To configure a split transaction, you can specify null for `category_id` and provide a `subtransactions` array as part of the transaction object.  If an existing transaction is a split, the `category_id` cannot be changed.  Credit Card Payment categories are not permitted and will be ignored if supplied. */
		category_id: FormControl<string | null | undefined>,

		/** The cleared status of the transaction */
		cleared: FormControl<TransactionSummaryCleared | null | undefined>,

		/** The transaction date in ISO format (e.g. 2016-12-01).  Future dates (scheduled transactions) are not permitted.  Split transaction dates cannot be changed and if a different date is supplied it will be ignored. */
		date: FormControl<Date | null | undefined>,

		/** The transaction flag */
		flag_color: FormControl<SaveTransactionWithOptionalFieldsFlag_color | null | undefined>,

		/**
		 * If specified, the new transaction will be assigned this `import_id` and considered "imported".  We will also attempt to match this imported transaction to an existing "user-entered" transation on the same account, with the same amount, and with a date +/-10 days from the imported transaction date.<br><br>Transactions imported through File Based Import or Direct Import (not through the API) are assigned an import_id in the format: 'YNAB:[milliunit_amount]:[iso_date]:[occurrence]'. For example, a transaction dated 2015-12-30 in the amount of -$294.23 USD would have an import_id of 'YNAB:-294230:2015-12-30:1'.  If a second transaction on the same account was imported and had the same date and same amount, its import_id would be 'YNAB:-294230:2015-12-30:2'.  Using a consistent format will prevent duplicates through Direct Import and File Based Import.<br><br>If import_id is omitted or specified as null, the transaction will be treated as a "user-entered" transaction. As such, it will be eligible to be matched against transactions later being imported (via DI, FBI, or API).
		 * Max length: 36
		 */
		import_id: FormControl<string | null | undefined>,

		/** Max length: 200 */
		memo: FormControl<string | null | undefined>,

		/** The payee for the transaction.  To create a transfer between two accounts, use the account transfer payee pointing to the target account.  Account transfer payees are specified as `tranfer_payee_id` on the account resource. */
		payee_id: FormControl<string | null | undefined>,

		/**
		 * The payee name.  If a `payee_name` value is provided and `payee_id` has a null value, the `payee_name` value will be used to resolve the payee by either (1) a matching payee rename rule (only if `import_id` is also specified) or (2) a payee with the same name or (3) creation of a new payee.
		 * Max length: 50
		 */
		payee_name: FormControl<string | null | undefined>,
	}
	export function CreateSaveTransactionWithOptionalFieldsFormGroup() {
		return new FormGroup<SaveTransactionWithOptionalFieldsFormProperties>({
			account_id: new FormControl<string | null | undefined>(undefined),
			amount: new FormControl<number | null | undefined>(undefined),
			approved: new FormControl<boolean | null | undefined>(undefined),
			category_id: new FormControl<string | null | undefined>(undefined),
			cleared: new FormControl<TransactionSummaryCleared | null | undefined>(undefined),
			date: new FormControl<Date | null | undefined>(undefined),
			flag_color: new FormControl<SaveTransactionWithOptionalFieldsFlag_color | null | undefined>(undefined),
			import_id: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(36)]),
			memo: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(200)]),
			payee_id: new FormControl<string | null | undefined>(undefined),
			payee_name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(50)]),
		});

	}

	export enum SaveTransactionWithOptionalFieldsFlag_color { red = 'red', orange = 'orange', yellow = 'yellow', green = 'green', blue = 'blue', purple = 'purple', _null = 6 }

	export interface SaveTransactionsResponse {

		/** Required */
		data: SaveTransactionsResponseData;
	}
	export interface SaveTransactionsResponseFormProperties {
	}
	export function CreateSaveTransactionsResponseFormGroup() {
		return new FormGroup<SaveTransactionsResponseFormProperties>({
		});

	}

	export interface SaveTransactionsResponseData {

		/** If multiple transactions were specified, a list of import_ids that were not created because of an existing `import_id` found on the same account */
		duplicate_import_ids?: Array<string>;

		/**
		 * The knowledge of the server
		 * Required
		 */
		server_knowledge: number;
		transaction?: TransactionDetail;

		/**
		 * The transaction ids that were saved
		 * Required
		 */
		transaction_ids: Array<string>;

		/** If multiple transactions were specified, the transactions that were saved */
		transactions?: Array<TransactionDetail>;
	}
	export interface SaveTransactionsResponseDataFormProperties {

		/**
		 * The knowledge of the server
		 * Required
		 */
		server_knowledge: FormControl<number | null | undefined>,
	}
	export function CreateSaveTransactionsResponseDataFormGroup() {
		return new FormGroup<SaveTransactionsResponseDataFormProperties>({
			server_knowledge: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface TransactionDetail extends TransactionSummary {

		/** Required */
		account_name: string;

		/** The name of the category.  If a split transaction, this will be 'Split'. */
		category_name?: string | null;
		payee_name?: string | null;

		/**
		 * If a split transaction, the subtransactions.
		 * Required
		 */
		subtransactions: Array<SubTransaction>;
	}
	export interface TransactionDetailFormProperties extends TransactionSummaryFormProperties {

		/** Required */
		account_name: FormControl<string | null | undefined>,

		/** The name of the category.  If a split transaction, this will be 'Split'. */
		category_name: FormControl<string | null | undefined>,
		payee_name: FormControl<string | null | undefined>,
	}
	export function CreateTransactionDetailFormGroup() {
		return new FormGroup<TransactionDetailFormProperties>({
			account_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			amount: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			approved: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			category_id: new FormControl<string | null | undefined>(undefined),
			cleared: new FormControl<TransactionSummaryCleared | null | undefined>(undefined, [Validators.required]),
			date: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			debt_transaction_type: new FormControl<TransactionSummaryDebt_transaction_type | null | undefined>(undefined),
			deleted: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			flag_color: new FormControl<TransactionSummaryFlag_color | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			import_id: new FormControl<string | null | undefined>(undefined),
			import_payee_name: new FormControl<string | null | undefined>(undefined),
			import_payee_name_original: new FormControl<string | null | undefined>(undefined),
			matched_transaction_id: new FormControl<string | null | undefined>(undefined),
			memo: new FormControl<string | null | undefined>(undefined),
			payee_id: new FormControl<string | null | undefined>(undefined),
			transfer_account_id: new FormControl<string | null | undefined>(undefined),
			transfer_transaction_id: new FormControl<string | null | undefined>(undefined),
			account_name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			category_name: new FormControl<string | null | undefined>(undefined),
			payee_name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ScheduledTransactionDetail extends ScheduledTransactionSummary {

		/** Required */
		account_name: string;

		/** The name of the category.  If a split scheduled transaction, this will be 'Split'. */
		category_name?: string | null;
		payee_name?: string | null;

		/**
		 * If a split scheduled transaction, the subtransactions.
		 * Required
		 */
		subtransactions: Array<ScheduledSubTransaction>;
	}
	export interface ScheduledTransactionDetailFormProperties extends ScheduledTransactionSummaryFormProperties {

		/** Required */
		account_name: FormControl<string | null | undefined>,

		/** The name of the category.  If a split scheduled transaction, this will be 'Split'. */
		category_name: FormControl<string | null | undefined>,
		payee_name: FormControl<string | null | undefined>,
	}
	export function CreateScheduledTransactionDetailFormGroup() {
		return new FormGroup<ScheduledTransactionDetailFormProperties>({
			account_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			amount: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			category_id: new FormControl<string | null | undefined>(undefined),
			date_first: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			date_next: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			deleted: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			flag_color: new FormControl<ScheduledTransactionSummaryFlag_color | null | undefined>(undefined),
			frequency: new FormControl<ScheduledTransactionSummaryFrequency | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			memo: new FormControl<string | null | undefined>(undefined),
			payee_id: new FormControl<string | null | undefined>(undefined),
			transfer_account_id: new FormControl<string | null | undefined>(undefined),
			account_name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			category_name: new FormControl<string | null | undefined>(undefined),
			payee_name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ScheduledTransactionResponse {

		/** Required */
		data: ScheduledTransactionResponseData;
	}
	export interface ScheduledTransactionResponseFormProperties {
	}
	export function CreateScheduledTransactionResponseFormGroup() {
		return new FormGroup<ScheduledTransactionResponseFormProperties>({
		});

	}

	export interface ScheduledTransactionResponseData {

		/** Required */
		scheduled_transaction: ScheduledTransactionDetail;
	}
	export interface ScheduledTransactionResponseDataFormProperties {
	}
	export function CreateScheduledTransactionResponseDataFormGroup() {
		return new FormGroup<ScheduledTransactionResponseDataFormProperties>({
		});

	}

	export interface ScheduledTransactionsResponse {

		/** Required */
		data: ScheduledTransactionsResponseData;
	}
	export interface ScheduledTransactionsResponseFormProperties {
	}
	export function CreateScheduledTransactionsResponseFormGroup() {
		return new FormGroup<ScheduledTransactionsResponseFormProperties>({
		});

	}

	export interface ScheduledTransactionsResponseData {

		/** Required */
		scheduled_transactions: Array<ScheduledTransactionDetail>;

		/**
		 * The knowledge of the server
		 * Required
		 */
		server_knowledge: number;
	}
	export interface ScheduledTransactionsResponseDataFormProperties {

		/**
		 * The knowledge of the server
		 * Required
		 */
		server_knowledge: FormControl<number | null | undefined>,
	}
	export function CreateScheduledTransactionsResponseDataFormGroup() {
		return new FormGroup<ScheduledTransactionsResponseDataFormProperties>({
			server_knowledge: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface TransactionResponse {

		/** Required */
		data: TransactionResponseData;
	}
	export interface TransactionResponseFormProperties {
	}
	export function CreateTransactionResponseFormGroup() {
		return new FormGroup<TransactionResponseFormProperties>({
		});

	}

	export interface TransactionResponseData {

		/** Required */
		transaction: TransactionDetail;
	}
	export interface TransactionResponseDataFormProperties {
	}
	export function CreateTransactionResponseDataFormGroup() {
		return new FormGroup<TransactionResponseDataFormProperties>({
		});

	}

	export interface TransactionsImportResponse {

		/** Required */
		data: TransactionsImportResponseData;
	}
	export interface TransactionsImportResponseFormProperties {
	}
	export function CreateTransactionsImportResponseFormGroup() {
		return new FormGroup<TransactionsImportResponseFormProperties>({
		});

	}

	export interface TransactionsImportResponseData {

		/**
		 * The list of transaction ids that were imported.
		 * Required
		 */
		transaction_ids: Array<string>;
	}
	export interface TransactionsImportResponseDataFormProperties {
	}
	export function CreateTransactionsImportResponseDataFormGroup() {
		return new FormGroup<TransactionsImportResponseDataFormProperties>({
		});

	}

	export interface TransactionsResponse {

		/** Required */
		data: TransactionsResponseData;
	}
	export interface TransactionsResponseFormProperties {
	}
	export function CreateTransactionsResponseFormGroup() {
		return new FormGroup<TransactionsResponseFormProperties>({
		});

	}

	export interface TransactionsResponseData {

		/**
		 * The knowledge of the server
		 * Required
		 */
		server_knowledge: number;

		/** Required */
		transactions: Array<TransactionDetail>;
	}
	export interface TransactionsResponseDataFormProperties {

		/**
		 * The knowledge of the server
		 * Required
		 */
		server_knowledge: FormControl<number | null | undefined>,
	}
	export function CreateTransactionsResponseDataFormGroup() {
		return new FormGroup<TransactionsResponseDataFormProperties>({
			server_knowledge: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface User {

		/** Required */
		id: string;
	}
	export interface UserFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,
	}
	export function CreateUserFormGroup() {
		return new FormGroup<UserFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UserResponse {

		/** Required */
		data: UserResponseData;
	}
	export interface UserResponseFormProperties {
	}
	export function CreateUserResponseFormGroup() {
		return new FormGroup<UserResponseFormProperties>({
		});

	}

	export interface UserResponseData {

		/** Required */
		user: User;
	}
	export interface UserResponseDataFormProperties {
	}
	export function CreateUserResponseDataFormGroup() {
		return new FormGroup<UserResponseDataFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * List budgets
		 * Returns budgets list with summary information
		 * Get budgets
		 * @param {boolean} include_accounts Whether to include the list of budget accounts
		 * @return {BudgetSummaryResponse} The list of budgets
		 */
		GetBudgets(include_accounts: boolean | null | undefined): Observable<BudgetSummaryResponse> {
			return this.http.get<BudgetSummaryResponse>(this.baseUri + 'budgets?include_accounts=' + include_accounts, {});
		}

		/**
		 * Single budget
		 * Returns a single budget with all related entities.  This resource is effectively a full budget export.
		 * Get budgets/{budget_id}
		 * @param {string} budget_id The id of the budget. "last-used" can be used to specify the last used budget and "default" can be used if default budget selection is enabled (see: https://api.ynab.com/#oauth-default-budget).
		 * @param {number} last_knowledge_of_server The starting server knowledge.  If provided, only entities that have changed since `last_knowledge_of_server` will be included.
		 * @return {BudgetDetailResponse} The requested budget
		 */
		GetBudgetById(budget_id: string, last_knowledge_of_server: number | null | undefined): Observable<BudgetDetailResponse> {
			return this.http.get<BudgetDetailResponse>(this.baseUri + 'budgets/' + (budget_id == null ? '' : encodeURIComponent(budget_id)) + '&last_knowledge_of_server=' + last_knowledge_of_server, {});
		}

		/**
		 * Account list
		 * Returns all accounts
		 * Get budgets/{budget_id}/accounts
		 * @param {string} budget_id The id of the budget. "last-used" can be used to specify the last used budget and "default" can be used if default budget selection is enabled (see: https://api.ynab.com/#oauth-default-budget).
		 * @param {number} last_knowledge_of_server The starting server knowledge.  If provided, only entities that have changed since `last_knowledge_of_server` will be included.
		 * @return {AccountsResponse} The list of requested accounts
		 */
		GetAccounts(budget_id: string, last_knowledge_of_server: number | null | undefined): Observable<AccountsResponse> {
			return this.http.get<AccountsResponse>(this.baseUri + 'budgets/' + (budget_id == null ? '' : encodeURIComponent(budget_id)) + '/accounts&last_knowledge_of_server=' + last_knowledge_of_server, {});
		}

		/**
		 * Create a new account
		 * Creates a new account
		 * Post budgets/{budget_id}/accounts
		 * @param {string} budget_id The id of the budget ("last-used" can be used to specify the last used budget and "default" can be used if default budget selection is enabled (see: https://api.ynab.com/#oauth-default-budget)
		 * @param {PostAccountWrapper} requestBody The account to create.
		 * @return {void} 
		 */
		CreateAccount(budget_id: string, requestBody: PostAccountWrapper): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'budgets/' + (budget_id == null ? '' : encodeURIComponent(budget_id)) + '/accounts', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Single account
		 * Returns a single account
		 * Get budgets/{budget_id}/accounts/{account_id}
		 * @param {string} budget_id The id of the budget. "last-used" can be used to specify the last used budget and "default" can be used if default budget selection is enabled (see: https://api.ynab.com/#oauth-default-budget).
		 * @param {string} account_id The id of the account
		 * @return {AccountResponse} The requested account
		 */
		GetAccountById(budget_id: string, account_id: string): Observable<AccountResponse> {
			return this.http.get<AccountResponse>(this.baseUri + 'budgets/' + (budget_id == null ? '' : encodeURIComponent(budget_id)) + '/accounts/' + (account_id == null ? '' : encodeURIComponent(account_id)), {});
		}

		/**
		 * List account transactions
		 * Returns all transactions for a specified account
		 * Get budgets/{budget_id}/accounts/{account_id}/transactions
		 * @param {string} budget_id The id of the budget. "last-used" can be used to specify the last used budget and "default" can be used if default budget selection is enabled (see: https://api.ynab.com/#oauth-default-budget).
		 * @param {string} account_id The id of the account
		 * @param {Date} since_date If specified, only transactions on or after this date will be included.  The date should be ISO formatted (e.g. 2016-12-30).
		 * @param {GetTransactionsByAccountType} type If specified, only transactions of the specified type will be included. "uncategorized" and "unapproved" are currently supported.
		 * @param {number} last_knowledge_of_server The starting server knowledge.  If provided, only entities that have changed since `last_knowledge_of_server` will be included.
		 * @return {TransactionsResponse} The list of requested transactions
		 */
		GetTransactionsByAccount(budget_id: string, account_id: string, since_date: Date | null | undefined, type: GetTransactionsByAccountType | null | undefined, last_knowledge_of_server: number | null | undefined): Observable<TransactionsResponse> {
			return this.http.get<TransactionsResponse>(this.baseUri + 'budgets/' + (budget_id == null ? '' : encodeURIComponent(budget_id)) + '/accounts/' + (account_id == null ? '' : encodeURIComponent(account_id)) + '/transactions&since_date=' + since_date?.toISOString() + '&type=' + type + '&last_knowledge_of_server=' + last_knowledge_of_server, {});
		}

		/**
		 * List categories
		 * Returns all categories grouped by category group.  Amounts (budgeted, activity, balance, etc.) are specific to the current budget month (UTC).
		 * Get budgets/{budget_id}/categories
		 * @param {string} budget_id The id of the budget. "last-used" can be used to specify the last used budget and "default" can be used if default budget selection is enabled (see: https://api.ynab.com/#oauth-default-budget).
		 * @param {number} last_knowledge_of_server The starting server knowledge.  If provided, only entities that have changed since `last_knowledge_of_server` will be included.
		 * @return {CategoriesResponse} The categories grouped by category group
		 */
		GetCategories(budget_id: string, last_knowledge_of_server: number | null | undefined): Observable<CategoriesResponse> {
			return this.http.get<CategoriesResponse>(this.baseUri + 'budgets/' + (budget_id == null ? '' : encodeURIComponent(budget_id)) + '/categories&last_knowledge_of_server=' + last_knowledge_of_server, {});
		}

		/**
		 * Single category
		 * Returns a single category.  Amounts (budgeted, activity, balance, etc.) are specific to the current budget month (UTC).
		 * Get budgets/{budget_id}/categories/{category_id}
		 * @param {string} budget_id The id of the budget. "last-used" can be used to specify the last used budget and "default" can be used if default budget selection is enabled (see: https://api.ynab.com/#oauth-default-budget).
		 * @param {string} category_id The id of the category
		 * @return {CategoryResponse} The requested category
		 */
		GetCategoryById(budget_id: string, category_id: string): Observable<CategoryResponse> {
			return this.http.get<CategoryResponse>(this.baseUri + 'budgets/' + (budget_id == null ? '' : encodeURIComponent(budget_id)) + '/categories/' + (category_id == null ? '' : encodeURIComponent(category_id)), {});
		}

		/**
		 * List category transactions
		 * Returns all transactions for a specified category
		 * Get budgets/{budget_id}/categories/{category_id}/transactions
		 * @param {string} budget_id The id of the budget. "last-used" can be used to specify the last used budget and "default" can be used if default budget selection is enabled (see: https://api.ynab.com/#oauth-default-budget).
		 * @param {string} category_id The id of the category
		 * @param {Date} since_date If specified, only transactions on or after this date will be included.  The date should be ISO formatted (e.g. 2016-12-30).
		 * @param {GetTransactionsByAccountType} type If specified, only transactions of the specified type will be included. "uncategorized" and "unapproved" are currently supported.
		 * @param {number} last_knowledge_of_server The starting server knowledge.  If provided, only entities that have changed since `last_knowledge_of_server` will be included.
		 * @return {HybridTransactionsResponse} The list of requested transactions
		 */
		GetTransactionsByCategory(budget_id: string, category_id: string, since_date: Date | null | undefined, type: GetTransactionsByAccountType | null | undefined, last_knowledge_of_server: number | null | undefined): Observable<HybridTransactionsResponse> {
			return this.http.get<HybridTransactionsResponse>(this.baseUri + 'budgets/' + (budget_id == null ? '' : encodeURIComponent(budget_id)) + '/categories/' + (category_id == null ? '' : encodeURIComponent(category_id)) + '/transactions&since_date=' + since_date?.toISOString() + '&type=' + type + '&last_knowledge_of_server=' + last_knowledge_of_server, {});
		}

		/**
		 * List budget months
		 * Returns all budget months
		 * Get budgets/{budget_id}/months
		 * @param {string} budget_id The id of the budget. "last-used" can be used to specify the last used budget and "default" can be used if default budget selection is enabled (see: https://api.ynab.com/#oauth-default-budget).
		 * @param {number} last_knowledge_of_server The starting server knowledge.  If provided, only entities that have changed since `last_knowledge_of_server` will be included.
		 * @return {MonthSummariesResponse} The list of budget months
		 */
		GetBudgetMonths(budget_id: string, last_knowledge_of_server: number | null | undefined): Observable<MonthSummariesResponse> {
			return this.http.get<MonthSummariesResponse>(this.baseUri + 'budgets/' + (budget_id == null ? '' : encodeURIComponent(budget_id)) + '/months&last_knowledge_of_server=' + last_knowledge_of_server, {});
		}

		/**
		 * Single budget month
		 * Returns a single budget month
		 * Get budgets/{budget_id}/months/{month}
		 * @param {string} budget_id The id of the budget. "last-used" can be used to specify the last used budget and "default" can be used if default budget selection is enabled (see: https://api.ynab.com/#oauth-default-budget).
		 * @param {Date} month The budget month in ISO format (e.g. 2016-12-01) ("current" can also be used to specify the current calendar month (UTC))
		 * @return {MonthDetailResponse} The budget month detail
		 */
		GetBudgetMonth(budget_id: string, month: Date): Observable<MonthDetailResponse> {
			return this.http.get<MonthDetailResponse>(this.baseUri + 'budgets/' + (budget_id == null ? '' : encodeURIComponent(budget_id)) + '/months/' + month.toISOString(), {});
		}

		/**
		 * Single category for a specific budget month
		 * Returns a single category for a specific budget month.  Amounts (budgeted, activity, balance, etc.) are specific to the current budget month (UTC).
		 * Get budgets/{budget_id}/months/{month}/categories/{category_id}
		 * @param {string} budget_id The id of the budget. "last-used" can be used to specify the last used budget and "default" can be used if default budget selection is enabled (see: https://api.ynab.com/#oauth-default-budget).
		 * @param {Date} month The budget month in ISO format (e.g. 2016-12-01) ("current" can also be used to specify the current calendar month (UTC))
		 * @param {string} category_id The id of the category
		 * @return {CategoryResponse} The requested month category
		 */
		GetMonthCategoryById(budget_id: string, month: Date, category_id: string): Observable<CategoryResponse> {
			return this.http.get<CategoryResponse>(this.baseUri + 'budgets/' + (budget_id == null ? '' : encodeURIComponent(budget_id)) + '/months/' + month.toISOString() + '/categories/' + (category_id == null ? '' : encodeURIComponent(category_id)), {});
		}

		/**
		 * Update a category for a specific month
		 * Update a category for a specific month.  Only `budgeted` amount can be updated.
		 * Patch budgets/{budget_id}/months/{month}/categories/{category_id}
		 * @param {string} budget_id The id of the budget. "last-used" can be used to specify the last used budget and "default" can be used if default budget selection is enabled (see: https://api.ynab.com/#oauth-default-budget).
		 * @param {Date} month The budget month in ISO format (e.g. 2016-12-01) ("current" can also be used to specify the current calendar month (UTC))
		 * @param {string} category_id The id of the category
		 * @param {PatchMonthCategoryWrapper} requestBody The category to update.  Only `budgeted` amount can be updated and any other fields specified will be ignored.
		 * @return {SaveCategoryResponse} The month category was successfully updated
		 */
		UpdateMonthCategory(budget_id: string, month: Date, category_id: string, requestBody: PatchMonthCategoryWrapper): Observable<SaveCategoryResponse> {
			return this.http.patch<SaveCategoryResponse>(this.baseUri + 'budgets/' + (budget_id == null ? '' : encodeURIComponent(budget_id)) + '/months/' + month.toISOString() + '/categories/' + (category_id == null ? '' : encodeURIComponent(category_id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List payee locations
		 * Returns all payee locations
		 * Get budgets/{budget_id}/payee_locations
		 * @param {string} budget_id The id of the budget. "last-used" can be used to specify the last used budget and "default" can be used if default budget selection is enabled (see: https://api.ynab.com/#oauth-default-budget).
		 * @return {PayeeLocationsResponse} The list of payee locations
		 */
		GetPayeeLocations(budget_id: string): Observable<PayeeLocationsResponse> {
			return this.http.get<PayeeLocationsResponse>(this.baseUri + 'budgets/' + (budget_id == null ? '' : encodeURIComponent(budget_id)) + '/payee_locations', {});
		}

		/**
		 * Single payee location
		 * Returns a single payee location
		 * Get budgets/{budget_id}/payee_locations/{payee_location_id}
		 * @param {string} budget_id The id of the budget. "last-used" can be used to specify the last used budget and "default" can be used if default budget selection is enabled (see: https://api.ynab.com/#oauth-default-budget).
		 * @param {string} payee_location_id id of payee location
		 * @return {PayeeLocationResponse} The payee location
		 */
		GetPayeeLocationById(budget_id: string, payee_location_id: string): Observable<PayeeLocationResponse> {
			return this.http.get<PayeeLocationResponse>(this.baseUri + 'budgets/' + (budget_id == null ? '' : encodeURIComponent(budget_id)) + '/payee_locations/' + (payee_location_id == null ? '' : encodeURIComponent(payee_location_id)), {});
		}

		/**
		 * List payees
		 * Returns all payees
		 * Get budgets/{budget_id}/payees
		 * @param {string} budget_id The id of the budget. "last-used" can be used to specify the last used budget and "default" can be used if default budget selection is enabled (see: https://api.ynab.com/#oauth-default-budget).
		 * @param {number} last_knowledge_of_server The starting server knowledge.  If provided, only entities that have changed since `last_knowledge_of_server` will be included.
		 * @return {PayeesResponse} The requested list of payees
		 */
		GetPayees(budget_id: string, last_knowledge_of_server: number | null | undefined): Observable<PayeesResponse> {
			return this.http.get<PayeesResponse>(this.baseUri + 'budgets/' + (budget_id == null ? '' : encodeURIComponent(budget_id)) + '/payees&last_knowledge_of_server=' + last_knowledge_of_server, {});
		}

		/**
		 * Single payee
		 * Returns a single payee
		 * Get budgets/{budget_id}/payees/{payee_id}
		 * @param {string} budget_id The id of the budget. "last-used" can be used to specify the last used budget and "default" can be used if default budget selection is enabled (see: https://api.ynab.com/#oauth-default-budget).
		 * @param {string} payee_id The id of the payee
		 * @return {PayeeResponse} The requested payee
		 */
		GetPayeeById(budget_id: string, payee_id: string): Observable<PayeeResponse> {
			return this.http.get<PayeeResponse>(this.baseUri + 'budgets/' + (budget_id == null ? '' : encodeURIComponent(budget_id)) + '/payees/' + (payee_id == null ? '' : encodeURIComponent(payee_id)), {});
		}

		/**
		 * List locations for a payee
		 * Returns all payee locations for a specified payee
		 * Get budgets/{budget_id}/payees/{payee_id}/payee_locations
		 * @param {string} budget_id The id of the budget. "last-used" can be used to specify the last used budget and "default" can be used if default budget selection is enabled (see: https://api.ynab.com/#oauth-default-budget).
		 * @param {string} payee_id id of payee
		 * @return {PayeeLocationsResponse} The list of requested payee locations
		 */
		GetPayeeLocationsByPayee(budget_id: string, payee_id: string): Observable<PayeeLocationsResponse> {
			return this.http.get<PayeeLocationsResponse>(this.baseUri + 'budgets/' + (budget_id == null ? '' : encodeURIComponent(budget_id)) + '/payees/' + (payee_id == null ? '' : encodeURIComponent(payee_id)) + '/payee_locations', {});
		}

		/**
		 * List payee transactions
		 * Returns all transactions for a specified payee
		 * Get budgets/{budget_id}/payees/{payee_id}/transactions
		 * @param {string} budget_id The id of the budget. "last-used" can be used to specify the last used budget and "default" can be used if default budget selection is enabled (see: https://api.ynab.com/#oauth-default-budget).
		 * @param {string} payee_id The id of the payee
		 * @param {Date} since_date If specified, only transactions on or after this date will be included.  The date should be ISO formatted (e.g. 2016-12-30).
		 * @param {GetTransactionsByAccountType} type If specified, only transactions of the specified type will be included. "uncategorized" and "unapproved" are currently supported.
		 * @param {number} last_knowledge_of_server The starting server knowledge.  If provided, only entities that have changed since `last_knowledge_of_server` will be included.
		 * @return {HybridTransactionsResponse} The list of requested transactions
		 */
		GetTransactionsByPayee(budget_id: string, payee_id: string, since_date: Date | null | undefined, type: GetTransactionsByAccountType | null | undefined, last_knowledge_of_server: number | null | undefined): Observable<HybridTransactionsResponse> {
			return this.http.get<HybridTransactionsResponse>(this.baseUri + 'budgets/' + (budget_id == null ? '' : encodeURIComponent(budget_id)) + '/payees/' + (payee_id == null ? '' : encodeURIComponent(payee_id)) + '/transactions&since_date=' + since_date?.toISOString() + '&type=' + type + '&last_knowledge_of_server=' + last_knowledge_of_server, {});
		}

		/**
		 * List scheduled transactions
		 * Returns all scheduled transactions
		 * Get budgets/{budget_id}/scheduled_transactions
		 * @param {string} budget_id The id of the budget. "last-used" can be used to specify the last used budget and "default" can be used if default budget selection is enabled (see: https://api.ynab.com/#oauth-default-budget).
		 * @param {number} last_knowledge_of_server The starting server knowledge.  If provided, only entities that have changed since `last_knowledge_of_server` will be included.
		 * @return {ScheduledTransactionsResponse} The list of requested scheduled transactions
		 */
		GetScheduledTransactions(budget_id: string, last_knowledge_of_server: number | null | undefined): Observable<ScheduledTransactionsResponse> {
			return this.http.get<ScheduledTransactionsResponse>(this.baseUri + 'budgets/' + (budget_id == null ? '' : encodeURIComponent(budget_id)) + '/scheduled_transactions&last_knowledge_of_server=' + last_knowledge_of_server, {});
		}

		/**
		 * Single scheduled transaction
		 * Returns a single scheduled transaction
		 * Get budgets/{budget_id}/scheduled_transactions/{scheduled_transaction_id}
		 * @param {string} budget_id The id of the budget. "last-used" can be used to specify the last used budget and "default" can be used if default budget selection is enabled (see: https://api.ynab.com/#oauth-default-budget).
		 * @param {string} scheduled_transaction_id The id of the scheduled transaction
		 * @return {ScheduledTransactionResponse} The requested Scheduled Transaction
		 */
		GetScheduledTransactionById(budget_id: string, scheduled_transaction_id: string): Observable<ScheduledTransactionResponse> {
			return this.http.get<ScheduledTransactionResponse>(this.baseUri + 'budgets/' + (budget_id == null ? '' : encodeURIComponent(budget_id)) + '/scheduled_transactions/' + (scheduled_transaction_id == null ? '' : encodeURIComponent(scheduled_transaction_id)), {});
		}

		/**
		 * Budget Settings
		 * Returns settings for a budget
		 * Get budgets/{budget_id}/settings
		 * @param {string} budget_id The id of the budget. "last-used" can be used to specify the last used budget and "default" can be used if default budget selection is enabled (see: https://api.ynab.com/#oauth-default-budget).
		 * @return {BudgetSettingsResponse} The requested budget settings
		 */
		GetBudgetSettingsById(budget_id: string): Observable<BudgetSettingsResponse> {
			return this.http.get<BudgetSettingsResponse>(this.baseUri + 'budgets/' + (budget_id == null ? '' : encodeURIComponent(budget_id)) + '/settings', {});
		}

		/**
		 * List transactions
		 * Returns budget transactions
		 * Get budgets/{budget_id}/transactions
		 * @param {string} budget_id The id of the budget. "last-used" can be used to specify the last used budget and "default" can be used if default budget selection is enabled (see: https://api.ynab.com/#oauth-default-budget).
		 * @param {Date} since_date If specified, only transactions on or after this date will be included.  The date should be ISO formatted (e.g. 2016-12-30).
		 * @param {GetTransactionsByAccountType} type If specified, only transactions of the specified type will be included. "uncategorized" and "unapproved" are currently supported.
		 * @param {number} last_knowledge_of_server The starting server knowledge.  If provided, only entities that have changed since `last_knowledge_of_server` will be included.
		 * @return {TransactionsResponse} The list of requested transactions
		 */
		GetTransactions(budget_id: string, since_date: Date | null | undefined, type: GetTransactionsByAccountType | null | undefined, last_knowledge_of_server: number | null | undefined): Observable<TransactionsResponse> {
			return this.http.get<TransactionsResponse>(this.baseUri + 'budgets/' + (budget_id == null ? '' : encodeURIComponent(budget_id)) + '/transactions&since_date=' + since_date?.toISOString() + '&type=' + type + '&last_knowledge_of_server=' + last_knowledge_of_server, {});
		}

		/**
		 * Update multiple transactions
		 * Updates multiple transactions, by `id` or `import_id`.
		 * Patch budgets/{budget_id}/transactions
		 * @param {string} budget_id The id of the budget. "last-used" can be used to specify the last used budget and "default" can be used if default budget selection is enabled (see: https://api.ynab.com/#oauth-default-budget).
		 * @param {PatchTransactionsWrapper} requestBody The transactions to update. Each transaction must have either an `id` or `import_id` specified. If `id` is specified as null an `import_id` value can be provided which will allow transaction(s) to be updated by their `import_id`. If an `id` is specified, it will always be used for lookup.
		 * @return {void} 
		 */
		UpdateTransactions(budget_id: string, requestBody: PatchTransactionsWrapper): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'budgets/' + (budget_id == null ? '' : encodeURIComponent(budget_id)) + '/transactions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Create a single transaction or multiple transactions
		 * Creates a single transaction or multiple transactions.  If you provide a body containing a `transaction` object, a single transaction will be created and if you provide a body containing a `transactions` array, multiple transactions will be created.  Scheduled transactions cannot be created on this endpoint.
		 * Post budgets/{budget_id}/transactions
		 * @param {string} budget_id The id of the budget. "last-used" can be used to specify the last used budget and "default" can be used if default budget selection is enabled (see: https://api.ynab.com/#oauth-default-budget).
		 * @param {PostTransactionsWrapper} requestBody The transaction or transactions to create.  To create a single transaction you can specify a value for the `transaction` object and to create multiple transactions you can specify an array of `transactions`.  It is expected that you will only provide a value for one of these objects.
		 * @return {void} 
		 */
		CreateTransaction(budget_id: string, requestBody: PostTransactionsWrapper): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'budgets/' + (budget_id == null ? '' : encodeURIComponent(budget_id)) + '/transactions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Bulk create transactions
		 * Creates multiple transactions.  Although this endpoint is still supported, it is recommended to use 'POST /budgets/{budget_id}/transactions' to create multiple transactions.
		 * Post budgets/{budget_id}/transactions/bulk
		 * @param {string} budget_id The id of the budget. "last-used" can be used to specify the last used budget and "default" can be used if default budget selection is enabled (see: https://api.ynab.com/#oauth-default-budget).
		 * @param {BulkTransactions} requestBody The list of transactions to create
		 * @return {void} 
		 */
		BulkCreateTransactions(budget_id: string, requestBody: BulkTransactions): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'budgets/' + (budget_id == null ? '' : encodeURIComponent(budget_id)) + '/transactions/bulk', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Import transactions
		 * Imports available transactions on all linked accounts for the given budget.  Linked accounts allow transactions to be imported directly from a specified financial institution and this endpoint initiates that import.  Sending a request to this endpoint is the equivalent of clicking "Import" on each account in the web application or tapping the "New Transactions" banner in the mobile applications.  The response for this endpoint contains the transaction ids that have been imported.
		 * Post budgets/{budget_id}/transactions/import
		 * @param {string} budget_id The id of the budget. "last-used" can be used to specify the last used budget and "default" can be used if default budget selection is enabled (see: https://api.ynab.com/#oauth-default-budget).
		 * @return {TransactionsImportResponse} The request was successful but there were no transactions to import
		 */
		ImportTransactions(budget_id: string): Observable<TransactionsImportResponse> {
			return this.http.post<TransactionsImportResponse>(this.baseUri + 'budgets/' + (budget_id == null ? '' : encodeURIComponent(budget_id)) + '/transactions/import', null, {});
		}

		/**
		 * Deletes an existing transaction
		 * Deletes a transaction
		 * Delete budgets/{budget_id}/transactions/{transaction_id}
		 * @param {string} budget_id The id of the budget. "last-used" can be used to specify the last used budget and "default" can be used if default budget selection is enabled (see: https://api.ynab.com/#oauth-default-budget).
		 * @param {string} transaction_id The id of the transaction
		 * @return {TransactionResponse} The transaction was successfully deleted
		 */
		DeleteTransaction(budget_id: string, transaction_id: string): Observable<TransactionResponse> {
			return this.http.delete<TransactionResponse>(this.baseUri + 'budgets/' + (budget_id == null ? '' : encodeURIComponent(budget_id)) + '/transactions/' + (transaction_id == null ? '' : encodeURIComponent(transaction_id)), {});
		}

		/**
		 * Single transaction
		 * Returns a single transaction
		 * Get budgets/{budget_id}/transactions/{transaction_id}
		 * @param {string} budget_id The id of the budget. "last-used" can be used to specify the last used budget and "default" can be used if default budget selection is enabled (see: https://api.ynab.com/#oauth-default-budget).
		 * @param {string} transaction_id The id of the transaction
		 * @return {TransactionResponse} The requested transaction
		 */
		GetTransactionById(budget_id: string, transaction_id: string): Observable<TransactionResponse> {
			return this.http.get<TransactionResponse>(this.baseUri + 'budgets/' + (budget_id == null ? '' : encodeURIComponent(budget_id)) + '/transactions/' + (transaction_id == null ? '' : encodeURIComponent(transaction_id)), {});
		}

		/**
		 * Updates an existing transaction
		 * Updates a single transaction
		 * Put budgets/{budget_id}/transactions/{transaction_id}
		 * @param {string} budget_id The id of the budget. "last-used" can be used to specify the last used budget and "default" can be used if default budget selection is enabled (see: https://api.ynab.com/#oauth-default-budget).
		 * @param {string} transaction_id The id of the transaction
		 * @param {PutTransactionWrapper} requestBody The transaction to update
		 * @return {TransactionResponse} The transaction was successfully updated
		 */
		UpdateTransaction(budget_id: string, transaction_id: string, requestBody: PutTransactionWrapper): Observable<TransactionResponse> {
			return this.http.put<TransactionResponse>(this.baseUri + 'budgets/' + (budget_id == null ? '' : encodeURIComponent(budget_id)) + '/transactions/' + (transaction_id == null ? '' : encodeURIComponent(transaction_id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * User info
		 * Returns authenticated user information
		 * Get user
		 * @return {UserResponse} The user info
		 */
		GetUser(): Observable<UserResponse> {
			return this.http.get<UserResponse>(this.baseUri + 'user', {});
		}
	}

	export enum GetTransactionsByAccountType { uncategorized = 'uncategorized', unapproved = 'unapproved' }

}

