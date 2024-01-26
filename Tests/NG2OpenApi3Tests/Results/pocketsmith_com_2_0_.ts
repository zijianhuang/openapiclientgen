import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface Account {

		/** When the account was created. */
		created_at?: string | null;

		/** The currency code for the account. */
		currency_code?: string | null;

		/** The current balance of the account. */
		current_balance?: number | null;

		/** The date of the current balance. */
		current_balance_date?: string | null;

		/** The exchange rate between the account's currency and the user's base currency, when different. If the currencies are the same, null is returned. */
		current_balance_exchange_rate?: number | null;

		/** The current balance of the account in the user's base currency. */
		current_balance_in_base_currency?: number | null;

		/** The unique identifier of the account. */
		id?: number | null;

		/** Whether the account is a net worth asset. */
		is_net_worth?: boolean | null;
		primary_scenario?: Scenario;
		primary_transaction_account?: TransactionAccount;

		/** The current safe balance, if safe balance is activated on the account. If safe balance is not activated, then null is returned. */
		safe_balance?: number | null;

		/** The current safe balance in the user's base currency, if safe balance is activated on the account. If safe balance is not activated, then null is returned. */
		safe_balance_in_base_currency?: number | null;

		/** All scenarios that compose the account, including the primary. */
		scenarios?: Array<Scenario>;

		/** The title of the account. */
		title?: string | null;

		/** All transaction accounts that compose the account, including the primary. */
		transaction_accounts?: Array<TransactionAccount>;

		/** The type of the account. */
		type?: TransactionAccountType | null;

		/** When the account was last updated. */
		updated_at?: string | null;
	}
	export interface AccountFormProperties {

		/** When the account was created. */
		created_at: FormControl<string | null | undefined>,

		/** The currency code for the account. */
		currency_code: FormControl<string | null | undefined>,

		/** The current balance of the account. */
		current_balance: FormControl<number | null | undefined>,

		/** The date of the current balance. */
		current_balance_date: FormControl<string | null | undefined>,

		/** The exchange rate between the account's currency and the user's base currency, when different. If the currencies are the same, null is returned. */
		current_balance_exchange_rate: FormControl<number | null | undefined>,

		/** The current balance of the account in the user's base currency. */
		current_balance_in_base_currency: FormControl<number | null | undefined>,

		/** The unique identifier of the account. */
		id: FormControl<number | null | undefined>,

		/** Whether the account is a net worth asset. */
		is_net_worth: FormControl<boolean | null | undefined>,

		/** The current safe balance, if safe balance is activated on the account. If safe balance is not activated, then null is returned. */
		safe_balance: FormControl<number | null | undefined>,

		/** The current safe balance in the user's base currency, if safe balance is activated on the account. If safe balance is not activated, then null is returned. */
		safe_balance_in_base_currency: FormControl<number | null | undefined>,

		/** The title of the account. */
		title: FormControl<string | null | undefined>,

		/** The type of the account. */
		type: FormControl<TransactionAccountType | null | undefined>,

		/** When the account was last updated. */
		updated_at: FormControl<string | null | undefined>,
	}
	export function CreateAccountFormGroup() {
		return new FormGroup<AccountFormProperties>({
			created_at: new FormControl<string | null | undefined>(undefined),
			currency_code: new FormControl<string | null | undefined>(undefined),
			current_balance: new FormControl<number | null | undefined>(undefined),
			current_balance_date: new FormControl<string | null | undefined>(undefined),
			current_balance_exchange_rate: new FormControl<number | null | undefined>(undefined),
			current_balance_in_base_currency: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			is_net_worth: new FormControl<boolean | null | undefined>(undefined),
			safe_balance: new FormControl<number | null | undefined>(undefined),
			safe_balance_in_base_currency: new FormControl<number | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<TransactionAccountType | null | undefined>(undefined),
			updated_at: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Scenario {

		/** For goals, the date that they should be achieved by. */
		achieve_date?: string | null;

		/** The closing balance of the scenario. */
		closing_balance?: number | null;

		/** The date of the closing balance. */
		closing_balance_date?: string | null;

		/** When the scenario was created. */
		created_at?: string | null;

		/** The current balance of the scenario. */
		current_balance?: number | null;

		/** The date of the current balance. */
		current_balance_date?: string | null;

		/** The exchange rate between the scenario's currency and the user's base currency, when different. If the currencies are the same, null is returned. */
		current_balance_exchange_rate?: number | null;

		/** The current balance of the scenario in the user's base currency. */
		current_balance_in_base_currency?: number | null;

		/** A short description of what the scenario is modelling. */
		description?: string | null;

		/** The unique identifier of the scenario. */
		id?: number | null;

		/** The amount of interest to apply to the balance. Will apply periodically depending on what `interest_rate_repeat_id` is set to. */
		interest_rate?: number | null;

		/** A number representing how often the interest should be applied. 0 is used for no interest, 2 is weekly, 3 is fortnightly, 4 is monthly, 5 is yearly and 7 for quarterly. */
		interest_rate_repeat_id?: number | null;
		'maximum-value'?: number | null;
		'minimum-value'?: number | null;

		/** The current safe balance in the user's base currency, if safe balance is activated on the account associated with the scenario. If safe balance is not activated, then null is returned. */
		safe_balance?: number | null;

		/** The current safe balance in the user's base currency, if safe balance is activated on the account associated with the scenario. If safe balance is not available, then null is returned. */
		safe_balance_in_base_currency?: number | null;

		/** The starting balance of the scenario. */
		starting_balance?: number | null;

		/** The date of the starting balance. */
		starting_balance_date?: string | null;

		/** The title of the scenario. */
		title?: string | null;

		/** The type of the scenario. */
		type?: ScenarioType | null;

		/** When the scenario was last updated. */
		updated_at?: string | null;
	}
	export interface ScenarioFormProperties {

		/** For goals, the date that they should be achieved by. */
		achieve_date: FormControl<string | null | undefined>,

		/** The closing balance of the scenario. */
		closing_balance: FormControl<number | null | undefined>,

		/** The date of the closing balance. */
		closing_balance_date: FormControl<string | null | undefined>,

		/** When the scenario was created. */
		created_at: FormControl<string | null | undefined>,

		/** The current balance of the scenario. */
		current_balance: FormControl<number | null | undefined>,

		/** The date of the current balance. */
		current_balance_date: FormControl<string | null | undefined>,

		/** The exchange rate between the scenario's currency and the user's base currency, when different. If the currencies are the same, null is returned. */
		current_balance_exchange_rate: FormControl<number | null | undefined>,

		/** The current balance of the scenario in the user's base currency. */
		current_balance_in_base_currency: FormControl<number | null | undefined>,

		/** A short description of what the scenario is modelling. */
		description: FormControl<string | null | undefined>,

		/** The unique identifier of the scenario. */
		id: FormControl<number | null | undefined>,

		/** The amount of interest to apply to the balance. Will apply periodically depending on what `interest_rate_repeat_id` is set to. */
		interest_rate: FormControl<number | null | undefined>,

		/** A number representing how often the interest should be applied. 0 is used for no interest, 2 is weekly, 3 is fortnightly, 4 is monthly, 5 is yearly and 7 for quarterly. */
		interest_rate_repeat_id: FormControl<number | null | undefined>,
		'maximum-value': FormControl<number | null | undefined>,
		'minimum-value': FormControl<number | null | undefined>,

		/** The current safe balance in the user's base currency, if safe balance is activated on the account associated with the scenario. If safe balance is not activated, then null is returned. */
		safe_balance: FormControl<number | null | undefined>,

		/** The current safe balance in the user's base currency, if safe balance is activated on the account associated with the scenario. If safe balance is not available, then null is returned. */
		safe_balance_in_base_currency: FormControl<number | null | undefined>,

		/** The starting balance of the scenario. */
		starting_balance: FormControl<number | null | undefined>,

		/** The date of the starting balance. */
		starting_balance_date: FormControl<string | null | undefined>,

		/** The title of the scenario. */
		title: FormControl<string | null | undefined>,

		/** The type of the scenario. */
		type: FormControl<ScenarioType | null | undefined>,

		/** When the scenario was last updated. */
		updated_at: FormControl<string | null | undefined>,
	}
	export function CreateScenarioFormGroup() {
		return new FormGroup<ScenarioFormProperties>({
			achieve_date: new FormControl<string | null | undefined>(undefined),
			closing_balance: new FormControl<number | null | undefined>(undefined),
			closing_balance_date: new FormControl<string | null | undefined>(undefined),
			created_at: new FormControl<string | null | undefined>(undefined),
			current_balance: new FormControl<number | null | undefined>(undefined),
			current_balance_date: new FormControl<string | null | undefined>(undefined),
			current_balance_exchange_rate: new FormControl<number | null | undefined>(undefined),
			current_balance_in_base_currency: new FormControl<number | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			interest_rate: new FormControl<number | null | undefined>(undefined),
			interest_rate_repeat_id: new FormControl<number | null | undefined>(undefined),
			'maximum-value': new FormControl<number | null | undefined>(undefined),
			'minimum-value': new FormControl<number | null | undefined>(undefined),
			safe_balance: new FormControl<number | null | undefined>(undefined),
			safe_balance_in_base_currency: new FormControl<number | null | undefined>(undefined),
			starting_balance: new FormControl<number | null | undefined>(undefined),
			starting_balance_date: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<ScenarioType | null | undefined>(undefined),
			updated_at: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ScenarioType { 'no-interest' = 'no-interest', savings = 'savings', debt = 'debt' }

	export interface TransactionAccount {
		created_at?: string | null;

		/** The currency that the account is in. This is determined by the account that the transaction account belongs to. */
		currency_code?: string | null;
		current_balance?: number | null;
		current_balance_date?: string | null;

		/** The exchange rate between the transaction account's currency and the user's base currency, when different. If the currencies are the same, null is returned. */
		current_balance_exchange_rate?: number | null;

		/** The current balance of the transaction account in the user's base currency. */
		current_balance_in_base_currency?: number | null;
		id?: number | null;
		institution?: Institution;
		name?: string | null;
		number?: string | null;

		/** The current safe balance, if safe balance is activated and available for the transaction account. If safe balance is not available, then null is returned. */
		safe_balance?: number | null;

		/** The current safe balance in the user's base currency, if safe balance is activated and available for the transaction account. If safe balance is not available, then null is returned. */
		safe_balance_in_base_currency?: number | null;
		starting_balance?: number | null;
		starting_balance_date?: string | null;

		/** The type of the transaction account. */
		type?: TransactionAccountType | null;
		updated_at?: string | null;
	}
	export interface TransactionAccountFormProperties {
		created_at: FormControl<string | null | undefined>,

		/** The currency that the account is in. This is determined by the account that the transaction account belongs to. */
		currency_code: FormControl<string | null | undefined>,
		current_balance: FormControl<number | null | undefined>,
		current_balance_date: FormControl<string | null | undefined>,

		/** The exchange rate between the transaction account's currency and the user's base currency, when different. If the currencies are the same, null is returned. */
		current_balance_exchange_rate: FormControl<number | null | undefined>,

		/** The current balance of the transaction account in the user's base currency. */
		current_balance_in_base_currency: FormControl<number | null | undefined>,
		id: FormControl<number | null | undefined>,
		name: FormControl<string | null | undefined>,
		number: FormControl<string | null | undefined>,

		/** The current safe balance, if safe balance is activated and available for the transaction account. If safe balance is not available, then null is returned. */
		safe_balance: FormControl<number | null | undefined>,

		/** The current safe balance in the user's base currency, if safe balance is activated and available for the transaction account. If safe balance is not available, then null is returned. */
		safe_balance_in_base_currency: FormControl<number | null | undefined>,
		starting_balance: FormControl<number | null | undefined>,
		starting_balance_date: FormControl<string | null | undefined>,

		/** The type of the transaction account. */
		type: FormControl<TransactionAccountType | null | undefined>,
		updated_at: FormControl<string | null | undefined>,
	}
	export function CreateTransactionAccountFormGroup() {
		return new FormGroup<TransactionAccountFormProperties>({
			created_at: new FormControl<string | null | undefined>(undefined),
			currency_code: new FormControl<string | null | undefined>(undefined),
			current_balance: new FormControl<number | null | undefined>(undefined),
			current_balance_date: new FormControl<string | null | undefined>(undefined),
			current_balance_exchange_rate: new FormControl<number | null | undefined>(undefined),
			current_balance_in_base_currency: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			number: new FormControl<string | null | undefined>(undefined),
			safe_balance: new FormControl<number | null | undefined>(undefined),
			safe_balance_in_base_currency: new FormControl<number | null | undefined>(undefined),
			starting_balance: new FormControl<number | null | undefined>(undefined),
			starting_balance_date: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<TransactionAccountType | null | undefined>(undefined),
			updated_at: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Institution {

		/** When the institution was created. */
		created_at?: string | null;

		/** The currency code of the institution. */
		currency_code?: string | null;

		/** The unique identifier of the institution. */
		id?: number | null;

		/** The title of the institution. */
		title?: string | null;

		/** When the institution was last updated. */
		updated_at?: string | null;
	}
	export interface InstitutionFormProperties {

		/** When the institution was created. */
		created_at: FormControl<string | null | undefined>,

		/** The currency code of the institution. */
		currency_code: FormControl<string | null | undefined>,

		/** The unique identifier of the institution. */
		id: FormControl<number | null | undefined>,

		/** The title of the institution. */
		title: FormControl<string | null | undefined>,

		/** When the institution was last updated. */
		updated_at: FormControl<string | null | undefined>,
	}
	export function CreateInstitutionFormGroup() {
		return new FormGroup<InstitutionFormProperties>({
			created_at: new FormControl<string | null | undefined>(undefined),
			currency_code: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			updated_at: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum TransactionAccountType { bank = 'bank', credits = 'credits', cash = 'cash', stocks = 'stocks', mortgage = 'mortgage', loans = 'loans', vehicle = 'vehicle', property = 'property', insurance = 'insurance', other_asset = 'other_asset', other_liability = 'other_liability' }

	export interface Attachment {

		/** The content type of the attachment. */
		content_type?: string | null;
		content_type_meta?: AttachmentContent_type_meta;

		/** When the attachment was created. */
		created_at?: string | null;

		/** The file name of the attachment. */
		file_name?: string | null;

		/** The unique identifier of the attachment */
		id?: number | null;

		/** The url of the attachment. */
		original_url?: string | null;

		/** The title of the attachment. If blank or not provided, the title will be derived from the file name. */
		title?: string | null;

		/** The type of attachment. */
		type?: string | null;

		/** When the attachment was last updated. */
		updated_at?: string | null;
		variants?: AttachmentVariants;
	}
	export interface AttachmentFormProperties {

		/** The content type of the attachment. */
		content_type: FormControl<string | null | undefined>,

		/** When the attachment was created. */
		created_at: FormControl<string | null | undefined>,

		/** The file name of the attachment. */
		file_name: FormControl<string | null | undefined>,

		/** The unique identifier of the attachment */
		id: FormControl<number | null | undefined>,

		/** The url of the attachment. */
		original_url: FormControl<string | null | undefined>,

		/** The title of the attachment. If blank or not provided, the title will be derived from the file name. */
		title: FormControl<string | null | undefined>,

		/** The type of attachment. */
		type: FormControl<string | null | undefined>,

		/** When the attachment was last updated. */
		updated_at: FormControl<string | null | undefined>,
	}
	export function CreateAttachmentFormGroup() {
		return new FormGroup<AttachmentFormProperties>({
			content_type: new FormControl<string | null | undefined>(undefined),
			created_at: new FormControl<string | null | undefined>(undefined),
			file_name: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			original_url: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			updated_at: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AttachmentContent_type_meta {

		/** The content type description of the attachment. */
		description?: string | null;

		/** The extension type of the attachment. */
		extension?: string | null;

		/** The content type title of the attachment. */
		title?: string | null;
	}
	export interface AttachmentContent_type_metaFormProperties {

		/** The content type description of the attachment. */
		description: FormControl<string | null | undefined>,

		/** The extension type of the attachment. */
		extension: FormControl<string | null | undefined>,

		/** The content type title of the attachment. */
		title: FormControl<string | null | undefined>,
	}
	export function CreateAttachmentContent_type_metaFormGroup() {
		return new FormGroup<AttachmentContent_type_metaFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			extension: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AttachmentVariants {

		/** The url of the large version of the attachment. */
		large_url?: string | null;

		/** The url of the thumb version of the attachment. */
		thumb_url?: string | null;
	}
	export interface AttachmentVariantsFormProperties {

		/** The url of the large version of the attachment. */
		large_url: FormControl<string | null | undefined>,

		/** The url of the thumb version of the attachment. */
		thumb_url: FormControl<string | null | undefined>,
	}
	export function CreateAttachmentVariantsFormGroup() {
		return new FormGroup<AttachmentVariantsFormProperties>({
			large_url: new FormControl<string | null | undefined>(undefined),
			thumb_url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BudgetAnalysis {

		/** The average actual (transactions) amount across all periods. */
		average_actual_amount?: number | null;

		/** The average budgeted amount across all periods. */
		average_forecast_amount?: number | null;

		/** The currency of the budget analysis. */
		currency_code?: string | null;

		/** The end date of the budget analysis. */
		end_date?: string | null;

		/** The period analyses that this budget analysis comprises. */
		periods?: Array<Period>;

		/** The start date of the budget analysis. */
		start_date?: string | null;

		/** The total actual (transactions) amount across all periods. */
		total_actual_amount?: number | null;

		/** The total budgeted amount across all periods. */
		total_forecast_amount?: number | null;

		/** The total amount the budget was exceeded across all periods. */
		total_over_by?: number | null;

		/** The total amount the budget was under by across all periods. */
		total_under_by?: number | null;
	}
	export interface BudgetAnalysisFormProperties {

		/** The average actual (transactions) amount across all periods. */
		average_actual_amount: FormControl<number | null | undefined>,

		/** The average budgeted amount across all periods. */
		average_forecast_amount: FormControl<number | null | undefined>,

		/** The currency of the budget analysis. */
		currency_code: FormControl<string | null | undefined>,

		/** The end date of the budget analysis. */
		end_date: FormControl<string | null | undefined>,

		/** The start date of the budget analysis. */
		start_date: FormControl<string | null | undefined>,

		/** The total actual (transactions) amount across all periods. */
		total_actual_amount: FormControl<number | null | undefined>,

		/** The total budgeted amount across all periods. */
		total_forecast_amount: FormControl<number | null | undefined>,

		/** The total amount the budget was exceeded across all periods. */
		total_over_by: FormControl<number | null | undefined>,

		/** The total amount the budget was under by across all periods. */
		total_under_by: FormControl<number | null | undefined>,
	}
	export function CreateBudgetAnalysisFormGroup() {
		return new FormGroup<BudgetAnalysisFormProperties>({
			average_actual_amount: new FormControl<number | null | undefined>(undefined),
			average_forecast_amount: new FormControl<number | null | undefined>(undefined),
			currency_code: new FormControl<string | null | undefined>(undefined),
			end_date: new FormControl<string | null | undefined>(undefined),
			start_date: new FormControl<string | null | undefined>(undefined),
			total_actual_amount: new FormControl<number | null | undefined>(undefined),
			total_forecast_amount: new FormControl<number | null | undefined>(undefined),
			total_over_by: new FormControl<number | null | undefined>(undefined),
			total_under_by: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Period {

		/** The sum of all actuals (transactions) in the period. */
		actual_amount?: number | null;

		/** The currency of the period. */
		currency_code?: string | null;

		/** Whether this period is current, such that the current date (in the user's time zone) falls within the date range. */
		current?: boolean | null;

		/** The end date of the period. */
		end_date?: string | null;

		/** The sum of all forecast sources (budget events) in the period, for comparison against the actual amount. */
		forecast_amount?: number | null;

		/** Whether the budget has been exceeded in the period. */
		over_budget?: boolean | null;

		/** How much the budget has been exceeded by in the period. */
		over_by?: number | null;

		/** The percentage of the budget that has been used in the period. */
		percentage_used?: number | null;

		/** This attribute tracks the amount that has been refunded or deducted to the actual amount. When a category is set to "always expense", any credit transactions are treated as refunds and when set to "always income", any debit transactions are treated as deductions. */
		refund_amount?: number | null;

		/** The start date of the period. */
		start_date?: string | null;

		/** Whether the budget has not been exceeded in the period. */
		under_budget?: boolean | null;

		/** How much there is left in the budget for the period. */
		under_by?: number | null;
	}
	export interface PeriodFormProperties {

		/** The sum of all actuals (transactions) in the period. */
		actual_amount: FormControl<number | null | undefined>,

		/** The currency of the period. */
		currency_code: FormControl<string | null | undefined>,

		/** Whether this period is current, such that the current date (in the user's time zone) falls within the date range. */
		current: FormControl<boolean | null | undefined>,

		/** The end date of the period. */
		end_date: FormControl<string | null | undefined>,

		/** The sum of all forecast sources (budget events) in the period, for comparison against the actual amount. */
		forecast_amount: FormControl<number | null | undefined>,

		/** Whether the budget has been exceeded in the period. */
		over_budget: FormControl<boolean | null | undefined>,

		/** How much the budget has been exceeded by in the period. */
		over_by: FormControl<number | null | undefined>,

		/** The percentage of the budget that has been used in the period. */
		percentage_used: FormControl<number | null | undefined>,

		/** This attribute tracks the amount that has been refunded or deducted to the actual amount. When a category is set to "always expense", any credit transactions are treated as refunds and when set to "always income", any debit transactions are treated as deductions. */
		refund_amount: FormControl<number | null | undefined>,

		/** The start date of the period. */
		start_date: FormControl<string | null | undefined>,

		/** Whether the budget has not been exceeded in the period. */
		under_budget: FormControl<boolean | null | undefined>,

		/** How much there is left in the budget for the period. */
		under_by: FormControl<number | null | undefined>,
	}
	export function CreatePeriodFormGroup() {
		return new FormGroup<PeriodFormProperties>({
			actual_amount: new FormControl<number | null | undefined>(undefined),
			currency_code: new FormControl<string | null | undefined>(undefined),
			current: new FormControl<boolean | null | undefined>(undefined),
			end_date: new FormControl<string | null | undefined>(undefined),
			forecast_amount: new FormControl<number | null | undefined>(undefined),
			over_budget: new FormControl<boolean | null | undefined>(undefined),
			over_by: new FormControl<number | null | undefined>(undefined),
			percentage_used: new FormControl<number | null | undefined>(undefined),
			refund_amount: new FormControl<number | null | undefined>(undefined),
			start_date: new FormControl<string | null | undefined>(undefined),
			under_budget: new FormControl<boolean | null | undefined>(undefined),
			under_by: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface BudgetAnalysisPackage {
		category?: Category;
		expense?: BudgetAnalysis;
		income?: BudgetAnalysis;

		/** Whether the expense budget analysis looks like a transfer to the income budget analysis, based on a number of heuristics. */
		is_transfer?: boolean | null;
	}
	export interface BudgetAnalysisPackageFormProperties {

		/** Whether the expense budget analysis looks like a transfer to the income budget analysis, based on a number of heuristics. */
		is_transfer: FormControl<boolean | null | undefined>,
	}
	export function CreateBudgetAnalysisPackageFormGroup() {
		return new FormGroup<BudgetAnalysisPackageFormProperties>({
			is_transfer: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface Category {

		/** The category's child categories. */
		children?: Array<Category>;

		/** The colour for the category. */
		colour?: string | null;

		/** When the category was created. */
		created_at?: string | null;

		/** The unique identifier of the category. */
		id?: number | null;

		/** Whether the category is a bill category. A bill category is when budgeted amounts are normally spent at once, instead of spread across a budgeting period. This category will be included in the bill reminder email when set to true. */
		is_bill?: boolean | null;

		/** Whether this category has been marked as a transfer category. */
		is_transfer?: boolean | null;

		/** The unique identifier of the parent category of this category, or null if this category has no parent (i.e. is a top-level category) */
		parent_id?: number | null;

		/** How the category's refunds or deductions should be reported on. */
		refund_behaviour?: CategoryRefund_behaviour | null;

		/** Whether the category's budget is rolled up into its parent category, if a parent category is present. */
		roll_up?: boolean | null;

		/** The title of the category. */
		title?: string | null;

		/** When the category was last updated. */
		updated_at?: string | null;
	}
	export interface CategoryFormProperties {

		/** The colour for the category. */
		colour: FormControl<string | null | undefined>,

		/** When the category was created. */
		created_at: FormControl<string | null | undefined>,

		/** The unique identifier of the category. */
		id: FormControl<number | null | undefined>,

		/** Whether the category is a bill category. A bill category is when budgeted amounts are normally spent at once, instead of spread across a budgeting period. This category will be included in the bill reminder email when set to true. */
		is_bill: FormControl<boolean | null | undefined>,

		/** Whether this category has been marked as a transfer category. */
		is_transfer: FormControl<boolean | null | undefined>,

		/** The unique identifier of the parent category of this category, or null if this category has no parent (i.e. is a top-level category) */
		parent_id: FormControl<number | null | undefined>,

		/** How the category's refunds or deductions should be reported on. */
		refund_behaviour: FormControl<CategoryRefund_behaviour | null | undefined>,

		/** Whether the category's budget is rolled up into its parent category, if a parent category is present. */
		roll_up: FormControl<boolean | null | undefined>,

		/** The title of the category. */
		title: FormControl<string | null | undefined>,

		/** When the category was last updated. */
		updated_at: FormControl<string | null | undefined>,
	}
	export function CreateCategoryFormGroup() {
		return new FormGroup<CategoryFormProperties>({
			colour: new FormControl<string | null | undefined>(undefined),
			created_at: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			is_bill: new FormControl<boolean | null | undefined>(undefined),
			is_transfer: new FormControl<boolean | null | undefined>(undefined),
			parent_id: new FormControl<number | null | undefined>(undefined),
			refund_behaviour: new FormControl<CategoryRefund_behaviour | null | undefined>(undefined),
			roll_up: new FormControl<boolean | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			updated_at: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum CategoryRefund_behaviour { debits_are_deductions = 'debits_are_deductions', credits_are_refunds = 'credits_are_refunds', _null = 2 }

	export interface CategoryRule {
		category?: Category;

		/** When the category rule was created. */
		created_at?: string | null;

		/** The unique identifier of the category rule. */
		id?: number | null;

		/** The keyword/s to match the transactions payees. */
		payee_matches?: string | null;

		/** When the category rule was last updated. */
		updated_at?: string | null;
	}
	export interface CategoryRuleFormProperties {

		/** When the category rule was created. */
		created_at: FormControl<string | null | undefined>,

		/** The unique identifier of the category rule. */
		id: FormControl<number | null | undefined>,

		/** The keyword/s to match the transactions payees. */
		payee_matches: FormControl<string | null | undefined>,

		/** When the category rule was last updated. */
		updated_at: FormControl<string | null | undefined>,
	}
	export function CreateCategoryRuleFormGroup() {
		return new FormGroup<CategoryRuleFormProperties>({
			created_at: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			payee_matches: new FormControl<string | null | undefined>(undefined),
			updated_at: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Currency {

		/** The ISO 4217 or unofficial currency code. */
		id?: string | null;

		/** The number of digits after the minor unit separator. */
		minor_unit?: number | null;

		/** The name of the currency. */
		name?: string | null;
		separators?: CurrencySeparators;

		/** The symbol of the currency. */
		symbol?: string | null;
	}
	export interface CurrencyFormProperties {

		/** The ISO 4217 or unofficial currency code. */
		id: FormControl<string | null | undefined>,

		/** The number of digits after the minor unit separator. */
		minor_unit: FormControl<number | null | undefined>,

		/** The name of the currency. */
		name: FormControl<string | null | undefined>,

		/** The symbol of the currency. */
		symbol: FormControl<string | null | undefined>,
	}
	export function CreateCurrencyFormGroup() {
		return new FormGroup<CurrencyFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			minor_unit: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			symbol: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CurrencySeparators {

		/** The separator used in the major unit. */
		major?: string | null;

		/** The seperator used for the minor unit. */
		minor?: string | null;
	}
	export interface CurrencySeparatorsFormProperties {

		/** The separator used in the major unit. */
		major: FormControl<string | null | undefined>,

		/** The seperator used for the minor unit. */
		minor: FormControl<string | null | undefined>,
	}
	export function CreateCurrencySeparatorsFormGroup() {
		return new FormGroup<CurrencySeparatorsFormProperties>({
			major: new FormControl<string | null | undefined>(undefined),
			minor: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Error {

		/** A message describing the error that occurred. */
		error?: string | null;
	}
	export interface ErrorFormProperties {

		/** A message describing the error that occurred. */
		error: FormControl<string | null | undefined>,
	}
	export function CreateErrorFormGroup() {
		return new FormGroup<ErrorFormProperties>({
			error: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Event {

		/** The amount of the event. */
		amount?: number | null;

		/** The amount of the event in the user's base currency. */
		amount_in_base_currency?: number | null;
		category?: Category;

		/** The CSS hex-style colour of the event. */
		colour?: string | null;

		/** The currency code of the event. */
		currency_code?: string | null;

		/** The date of the event. */
		date?: string | null;

		/** The unique identifier of the event. */
		id?: string | null;

		/** Whether the event repeats and does not have an end date. */
		infinite_series?: boolean | null;

		/** The note of the event. */
		note?: string | null;

		/** The repeat interval of how often the event takes place. */
		repeat_interval?: number | null;

		/** The repeat type of the event. */
		repeat_type?: EventRepeat_type | null;
		scenario?: Scenario;

		/** The unique identifier of the series that the event belongs to. */
		series_id?: number | null;

		/** The unique identifier of the series followed by the series's start date. */
		series_start_id?: string | null;
	}
	export interface EventFormProperties {

		/** The amount of the event. */
		amount: FormControl<number | null | undefined>,

		/** The amount of the event in the user's base currency. */
		amount_in_base_currency: FormControl<number | null | undefined>,

		/** The CSS hex-style colour of the event. */
		colour: FormControl<string | null | undefined>,

		/** The currency code of the event. */
		currency_code: FormControl<string | null | undefined>,

		/** The date of the event. */
		date: FormControl<string | null | undefined>,

		/** The unique identifier of the event. */
		id: FormControl<string | null | undefined>,

		/** Whether the event repeats and does not have an end date. */
		infinite_series: FormControl<boolean | null | undefined>,

		/** The note of the event. */
		note: FormControl<string | null | undefined>,

		/** The repeat interval of how often the event takes place. */
		repeat_interval: FormControl<number | null | undefined>,

		/** The repeat type of the event. */
		repeat_type: FormControl<EventRepeat_type | null | undefined>,

		/** The unique identifier of the series that the event belongs to. */
		series_id: FormControl<number | null | undefined>,

		/** The unique identifier of the series followed by the series's start date. */
		series_start_id: FormControl<string | null | undefined>,
	}
	export function CreateEventFormGroup() {
		return new FormGroup<EventFormProperties>({
			amount: new FormControl<number | null | undefined>(undefined),
			amount_in_base_currency: new FormControl<number | null | undefined>(undefined),
			colour: new FormControl<string | null | undefined>(undefined),
			currency_code: new FormControl<string | null | undefined>(undefined),
			date: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			infinite_series: new FormControl<boolean | null | undefined>(undefined),
			note: new FormControl<string | null | undefined>(undefined),
			repeat_interval: new FormControl<number | null | undefined>(undefined),
			repeat_type: new FormControl<EventRepeat_type | null | undefined>(undefined),
			series_id: new FormControl<number | null | undefined>(undefined),
			series_start_id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum EventRepeat_type { once = 'once', daily = 'daily', weekly = 'weekly', fortnightly = 'fortnightly', monthly = 'monthly', yearly = 'yearly', 'each weekday' = 'each weekday' }

	export interface SavedSearch {

		/** When the saved search was created. */
		created_at?: string | null;

		/** The unique identifier of the saved search. */
		id?: number | null;

		/** The title of the saved search. */
		title?: string | null;

		/** When the saved search was last updated. */
		updated_at?: string | null;
	}
	export interface SavedSearchFormProperties {

		/** When the saved search was created. */
		created_at: FormControl<string | null | undefined>,

		/** The unique identifier of the saved search. */
		id: FormControl<number | null | undefined>,

		/** The title of the saved search. */
		title: FormControl<string | null | undefined>,

		/** When the saved search was last updated. */
		updated_at: FormControl<string | null | undefined>,
	}
	export function CreateSavedSearchFormGroup() {
		return new FormGroup<SavedSearchFormProperties>({
			created_at: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			updated_at: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TimeZone {

		/** The abbreviation of the time zone. */
		abbreviation?: string | null;

		/** The formatted name of the time zone. */
		formatted_name?: string | null;

		/** The formatted offset of the time zone. */
		formatted_offset?: string | null;

		/** The tz database name of the time zone. */
		identifier?: string | null;

		/** The name of the time zone. */
		name?: string | null;

		/** The time zone's UTC offset in seconds. */
		utc_offset?: number | null;
	}
	export interface TimeZoneFormProperties {

		/** The abbreviation of the time zone. */
		abbreviation: FormControl<string | null | undefined>,

		/** The formatted name of the time zone. */
		formatted_name: FormControl<string | null | undefined>,

		/** The formatted offset of the time zone. */
		formatted_offset: FormControl<string | null | undefined>,

		/** The tz database name of the time zone. */
		identifier: FormControl<string | null | undefined>,

		/** The name of the time zone. */
		name: FormControl<string | null | undefined>,

		/** The time zone's UTC offset in seconds. */
		utc_offset: FormControl<number | null | undefined>,
	}
	export function CreateTimeZoneFormGroup() {
		return new FormGroup<TimeZoneFormProperties>({
			abbreviation: new FormControl<string | null | undefined>(undefined),
			formatted_name: new FormControl<string | null | undefined>(undefined),
			formatted_offset: new FormControl<string | null | undefined>(undefined),
			identifier: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			utc_offset: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Transaction {
		amount?: number | null;

		/** The amount of the transaction in the user's base currency. */
		amount_in_base_currency?: number | null;
		category?: Category;
		cheque_number?: string | null;

		/** The closing balance of the account at the transaction. */
		closing_balance?: number | null;

		/** When the transaction was created. */
		created_at?: string | null;

		/** The date the transaction took place. */
		date?: string | null;

		/** The unique identifier of the transaction. */
		id?: number | null;

		/** Whether the transaction is a transfer. */
		is_transfer?: boolean | null;
		labels?: Array<string>;
		memo?: string | null;

		/** Whether the transaction needs to be reviewed. */
		needs_review?: boolean | null;
		note?: string | null;

		/** The payee the transaction was created with. */
		original_payee?: string | null;

		/** The payee/merchant of the transaction. */
		payee?: string | null;

		/** The status of the transaction. Pending transactions are temporary and may be superseded later by their posted counterparts, which are permanent. */
		status?: TransactionStatus | null;
		transaction_account?: TransactionAccount;

		/** Whether the transaction is a debit or a credit */
		type?: TransactionType | null;

		/** When the transaction was last updated. */
		updated_at?: string | null;

		/** Where the transaction came from. */
		upload_source?: string | null;
	}
	export interface TransactionFormProperties {
		amount: FormControl<number | null | undefined>,

		/** The amount of the transaction in the user's base currency. */
		amount_in_base_currency: FormControl<number | null | undefined>,
		cheque_number: FormControl<string | null | undefined>,

		/** The closing balance of the account at the transaction. */
		closing_balance: FormControl<number | null | undefined>,

		/** When the transaction was created. */
		created_at: FormControl<string | null | undefined>,

		/** The date the transaction took place. */
		date: FormControl<string | null | undefined>,

		/** The unique identifier of the transaction. */
		id: FormControl<number | null | undefined>,

		/** Whether the transaction is a transfer. */
		is_transfer: FormControl<boolean | null | undefined>,
		memo: FormControl<string | null | undefined>,

		/** Whether the transaction needs to be reviewed. */
		needs_review: FormControl<boolean | null | undefined>,
		note: FormControl<string | null | undefined>,

		/** The payee the transaction was created with. */
		original_payee: FormControl<string | null | undefined>,

		/** The payee/merchant of the transaction. */
		payee: FormControl<string | null | undefined>,

		/** The status of the transaction. Pending transactions are temporary and may be superseded later by their posted counterparts, which are permanent. */
		status: FormControl<TransactionStatus | null | undefined>,

		/** Whether the transaction is a debit or a credit */
		type: FormControl<TransactionType | null | undefined>,

		/** When the transaction was last updated. */
		updated_at: FormControl<string | null | undefined>,

		/** Where the transaction came from. */
		upload_source: FormControl<string | null | undefined>,
	}
	export function CreateTransactionFormGroup() {
		return new FormGroup<TransactionFormProperties>({
			amount: new FormControl<number | null | undefined>(undefined),
			amount_in_base_currency: new FormControl<number | null | undefined>(undefined),
			cheque_number: new FormControl<string | null | undefined>(undefined),
			closing_balance: new FormControl<number | null | undefined>(undefined),
			created_at: new FormControl<string | null | undefined>(undefined),
			date: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			is_transfer: new FormControl<boolean | null | undefined>(undefined),
			memo: new FormControl<string | null | undefined>(undefined),
			needs_review: new FormControl<boolean | null | undefined>(undefined),
			note: new FormControl<string | null | undefined>(undefined),
			original_payee: new FormControl<string | null | undefined>(undefined),
			payee: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<TransactionStatus | null | undefined>(undefined),
			type: new FormControl<TransactionType | null | undefined>(undefined),
			updated_at: new FormControl<string | null | undefined>(undefined),
			upload_source: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum TransactionStatus { pending = 'pending', posted = 'posted' }

	export enum TransactionType { debit = 'debit', credit = 'credit' }

	export interface User {

		/** Whether the user wants to see all accounts in their base currency instead of the native account currency. */
		always_show_base_currency?: boolean | null;

		/** The user's total number of available accounts. */
		available_accounts?: number | null;

		/** The user's total number of available budgets. */
		available_budgets?: number | null;

		/** The URL to the user's avatar. */
		avatar_url?: string | null;

		/** The user's base currency. */
		base_currency_code?: string | null;

		/** Whether the user has opted in to beta features. */
		beta_user?: boolean | null;

		/** When the user signed up. */
		created_at?: string | null;

		/** The user's email address. */
		email?: string | null;

		/** Whether the user's forecast recalculation should be deferred. */
		forecast_defer_recalculate?: boolean | null;

		/** The date that the user's forecast ends. */
		forecast_end_date?: string | null;

		/** When the user's forecast was last accessed. */
		forecast_last_accessed_at?: string | null;

		/** When the user's forecast was last updated. */
		forecast_last_updated_at?: string | null;

		/** Whether the user's forecast needs to be recalculated. */
		forecast_needs_recalculate?: boolean | null;

		/** The date that the user's forecast starts. */
		forecast_start_date?: string | null;

		/** The unique identifier of the user. */
		id?: number | null;

		/** Whether the user wants to review new transactions, transfer transactions or categorisation. */
		is_reviewing_transactions?: boolean | null;

		/** When the user last interacted with PocketSmith, via any application or the API. */
		last_activity_at?: string | null;

		/** When the user last logged into PocketSmith. */
		last_logged_in_at?: string | null;

		/** The user's username. */
		login?: string | null;

		/** The full name of the user, although not all users will have a name set. */
		name?: string | null;

		/** The user's time zone. */
		time_zone?: string | null;

		/** When the user was last updated. */
		updated_at?: string | null;

		/** Whether the user has multiple currencies in use across their account. */
		using_multiple_currencies?: boolean | null;

		/** The day of the week the user wishes their calendars to start on. A number between 0 and 6, where 0 is Sunday and 6 is Saturday. */
		week_start_day?: number | null;
	}
	export interface UserFormProperties {

		/** Whether the user wants to see all accounts in their base currency instead of the native account currency. */
		always_show_base_currency: FormControl<boolean | null | undefined>,

		/** The user's total number of available accounts. */
		available_accounts: FormControl<number | null | undefined>,

		/** The user's total number of available budgets. */
		available_budgets: FormControl<number | null | undefined>,

		/** The URL to the user's avatar. */
		avatar_url: FormControl<string | null | undefined>,

		/** The user's base currency. */
		base_currency_code: FormControl<string | null | undefined>,

		/** Whether the user has opted in to beta features. */
		beta_user: FormControl<boolean | null | undefined>,

		/** When the user signed up. */
		created_at: FormControl<string | null | undefined>,

		/** The user's email address. */
		email: FormControl<string | null | undefined>,

		/** Whether the user's forecast recalculation should be deferred. */
		forecast_defer_recalculate: FormControl<boolean | null | undefined>,

		/** The date that the user's forecast ends. */
		forecast_end_date: FormControl<string | null | undefined>,

		/** When the user's forecast was last accessed. */
		forecast_last_accessed_at: FormControl<string | null | undefined>,

		/** When the user's forecast was last updated. */
		forecast_last_updated_at: FormControl<string | null | undefined>,

		/** Whether the user's forecast needs to be recalculated. */
		forecast_needs_recalculate: FormControl<boolean | null | undefined>,

		/** The date that the user's forecast starts. */
		forecast_start_date: FormControl<string | null | undefined>,

		/** The unique identifier of the user. */
		id: FormControl<number | null | undefined>,

		/** Whether the user wants to review new transactions, transfer transactions or categorisation. */
		is_reviewing_transactions: FormControl<boolean | null | undefined>,

		/** When the user last interacted with PocketSmith, via any application or the API. */
		last_activity_at: FormControl<string | null | undefined>,

		/** When the user last logged into PocketSmith. */
		last_logged_in_at: FormControl<string | null | undefined>,

		/** The user's username. */
		login: FormControl<string | null | undefined>,

		/** The full name of the user, although not all users will have a name set. */
		name: FormControl<string | null | undefined>,

		/** The user's time zone. */
		time_zone: FormControl<string | null | undefined>,

		/** When the user was last updated. */
		updated_at: FormControl<string | null | undefined>,

		/** Whether the user has multiple currencies in use across their account. */
		using_multiple_currencies: FormControl<boolean | null | undefined>,

		/** The day of the week the user wishes their calendars to start on. A number between 0 and 6, where 0 is Sunday and 6 is Saturday. */
		week_start_day: FormControl<number | null | undefined>,
	}
	export function CreateUserFormGroup() {
		return new FormGroup<UserFormProperties>({
			always_show_base_currency: new FormControl<boolean | null | undefined>(undefined),
			available_accounts: new FormControl<number | null | undefined>(undefined),
			available_budgets: new FormControl<number | null | undefined>(undefined),
			avatar_url: new FormControl<string | null | undefined>(undefined),
			base_currency_code: new FormControl<string | null | undefined>(undefined),
			beta_user: new FormControl<boolean | null | undefined>(undefined),
			created_at: new FormControl<string | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
			forecast_defer_recalculate: new FormControl<boolean | null | undefined>(undefined),
			forecast_end_date: new FormControl<string | null | undefined>(undefined),
			forecast_last_accessed_at: new FormControl<string | null | undefined>(undefined),
			forecast_last_updated_at: new FormControl<string | null | undefined>(undefined),
			forecast_needs_recalculate: new FormControl<boolean | null | undefined>(undefined),
			forecast_start_date: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			is_reviewing_transactions: new FormControl<boolean | null | undefined>(undefined),
			last_activity_at: new FormControl<string | null | undefined>(undefined),
			last_logged_in_at: new FormControl<string | null | undefined>(undefined),
			login: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			time_zone: new FormControl<string | null | undefined>(undefined),
			updated_at: new FormControl<string | null | undefined>(undefined),
			using_multiple_currencies: new FormControl<boolean | null | undefined>(undefined),
			week_start_day: new FormControl<number | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Delete account
		 * Deletes an account and all its data by ID, optionally merge scenarios into another account.
		 * Delete accounts/{id}
		 * @param {number} id The unique identifier of the account.
		 * @return {void} 
		 */
		Accounts_idDelete(id: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'accounts/' + id, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get account
		 * Gets an account by its ID.
		 * Get accounts/{id}
		 * @param {number} id The unique identifier of the account.
		 * @return {Account} Success
		 */
		Accounts_idGet(id: number, headersHandler?: () => HttpHeaders): Observable<Account> {
			return this.http.get<Account>(this.baseUri + 'accounts/' + id, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Update account
		 * Updates and returns an account by its ID.
		 * Put accounts/{id}
		 * @param {number} id The unique identifier of the account.
		 * @return {Account} Success
		 */
		Accounts_idPut(id: number, requestBody: Accounts_idPutPutBody, headersHandler?: () => HttpHeaders): Observable<Account> {
			return this.http.put<Account>(this.baseUri + 'accounts/' + id, JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * List transactions in account
		 * Lists transactions belonging to an account by its ID.
		 * Get accounts/{id}/transactions
		 * @param {number} id The unique identifier of the account.
		 * @param {string} start_date Limit to transactions on or after this date. Required if end_date is provided. If not provided, defaults to the furtherest date allowed by the user's subscription.
		 * @param {string} end_date Limit to transactions on or before this date. Required if start_date is provided. If not provided, defaults to today's date.
		 * @param {string} updated_since Limit to transactions updated since an ISO 8601 timestamp.
		 * @param {number} uncategorised Limit to uncategorised transactions.
		 * @param {TransactionType} type Limit to transactions of this type.
		 * @param {number} needs_review Limit to transactions that need to be reviewed.
		 * @param {string} search Limit to transactions matching a keyword search string. The provided string is matched against the transaction amount, account name, payee, category title, note, labels, and the date in ISO 8601 format.
		 * @param {number} page Choose a particular page of the results.
		 * @return {Array<Transaction>} Success
		 */
		Accounts_idTransactionsGetByStart_dateAndEnd_dateAndUpdated_sinceAndUncategorisedAndTypeAndNeeds_reviewAndSearchAndPage(id: number, start_date: string | null | undefined, end_date: string | null | undefined, updated_since: string | null | undefined, uncategorised: number | null | undefined, type: TransactionType | null | undefined, needs_review: number | null | undefined, search: string | null | undefined, page: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<Transaction>> {
			return this.http.get<Array<Transaction>>(this.baseUri + 'accounts/' + id + '/transactions?start_date=' + (start_date == null ? '' : encodeURIComponent(start_date)) + '&end_date=' + (end_date == null ? '' : encodeURIComponent(end_date)) + '&updated_since=' + (updated_since == null ? '' : encodeURIComponent(updated_since)) + '&uncategorised=' + uncategorised + '&type=' + type + '&needs_review=' + needs_review + '&search=' + (search == null ? '' : encodeURIComponent(search)) + '&page=' + page, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Delete attachment
		 * Deletes a particular attachment by its ID.
		 * Delete attachments/{id}
		 * @param {number} id The unique identifier of the attachment.
		 * @return {void} 
		 */
		Attachments_idDelete(id: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'attachments/' + id, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get attachment
		 * Gets a particular attachment by its ID.
		 * Get attachments/{id}
		 * @param {number} id The unique identifier of the attachment.
		 * @return {Attachment} Success
		 */
		Attachments_idGet(id: number, headersHandler?: () => HttpHeaders): Observable<Attachment> {
			return this.http.get<Attachment>(this.baseUri + 'attachments/' + id, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Update attachment
		 * Updates the title of the attachment.
		 * Put attachments/{id}
		 * @param {number} id The unique identifier of the attachment.
		 * @return {Attachment} Success
		 */
		Attachments_idPut(id: number, requestBody: Attachments_idPutPutBody, headersHandler?: () => HttpHeaders): Observable<Attachment> {
			return this.http.put<Attachment>(this.baseUri + 'attachments/' + id, JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Delete category
		 * Deletes a particular category by its ID. This will delete all budgets within the category, and uncategorize all transactions assigned to the category.
		 * Delete categories/{id}
		 * @param {number} id The unique identifier of the category.
		 * @return {void} 
		 */
		Categories_idDelete(id: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'categories/' + id, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get category
		 * Gets a particular category by its ID.
		 * Get categories/{id}
		 * @param {number} id The unique identifier of the category.
		 * @return {Category} Success
		 */
		Categories_idGet(id: number, headersHandler?: () => HttpHeaders): Observable<Category> {
			return this.http.get<Category>(this.baseUri + 'categories/' + id, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Update category
		 * Updates a category by its ID.
		 * Put categories/{id}
		 * @param {number} id The unique identifier of the category.
		 * @return {Category} Success
		 */
		Categories_idPut(id: number, requestBody: Categories_idPutPutBody, headersHandler?: () => HttpHeaders): Observable<Category> {
			return this.http.put<Category>(this.baseUri + 'categories/' + id, JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Create category rule in category
		 * Creates a rule to allocate a category to transactions.
		 * Post categories/{id}/category_rules
		 * @param {number} id The unique identifier of the category.
		 * @return {CategoryRule} Success
		 */
		Categories_idCategory_rulesPost(id: number, requestBody: Categories_idCategory_rulesPostPostBody, headersHandler?: () => HttpHeaders): Observable<CategoryRule> {
			return this.http.post<CategoryRule>(this.baseUri + 'categories/' + id + '/category_rules', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * List transactions in categories
		 * Lists transactions belonging to one or more categories by their IDs.
		 * Get categories/{id}/transactions
		 * @param {string} id A comma-separated list of category IDs.
		 * @param {string} start_date Limit to transactions on or after this date. Required if end_date is provided. If not provided, defaults to the furtherest date allowed by the user's subscription.
		 * @param {string} end_date Limit to transactions on or before this date. Required if start_date is provided. If not provided, defaults to today's date.
		 * @param {string} updated_since Limit to transactions updated since an ISO 8601 timestamp.
		 * @param {number} uncategorised Limit to uncategorised transactions.
		 * @param {TransactionType} type Limit to transactions of this type.
		 * @param {number} needs_review Limit to transactions that need to be reviewed.
		 * @param {string} search Limit to transactions matching a keyword search string. The provided string is matched against the transaction amount, account name, payee, category title, note, labels, and the date in ISO 8601 format.
		 * @param {number} page Choose a particular page of the results.
		 * @return {Array<Transaction>} Success
		 */
		Categories_idTransactionsGetByStart_dateAndEnd_dateAndUpdated_sinceAndUncategorisedAndTypeAndNeeds_reviewAndSearchAndPage(id: string, start_date: string | null | undefined, end_date: string | null | undefined, updated_since: string | null | undefined, uncategorised: number | null | undefined, type: TransactionType | null | undefined, needs_review: number | null | undefined, search: string | null | undefined, page: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<Transaction>> {
			return this.http.get<Array<Transaction>>(this.baseUri + 'categories/' + (id == null ? '' : encodeURIComponent(id)) + '/transactions&start_date=' + (start_date == null ? '' : encodeURIComponent(start_date)) + '&end_date=' + (end_date == null ? '' : encodeURIComponent(end_date)) + '&updated_since=' + (updated_since == null ? '' : encodeURIComponent(updated_since)) + '&uncategorised=' + uncategorised + '&type=' + type + '&needs_review=' + needs_review + '&search=' + (search == null ? '' : encodeURIComponent(search)) + '&page=' + page, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * List currencies
		 * Lists currencies supported by PocketSmith.
		 * Get currencies
		 * @return {Array<Currency>} Success
		 */
		CurrenciesGet(headersHandler?: () => HttpHeaders): Observable<Array<Currency>> {
			return this.http.get<Array<Currency>>(this.baseUri + 'currencies', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get currency
		 * Gets a particular currency by its ID.
		 * Get currencies/{id}
		 * @param {string} id The unique identifier of the currency.
		 * @return {Currency} Success
		 */
		Currencies_idGet(id: string, headersHandler?: () => HttpHeaders): Observable<Currency> {
			return this.http.get<Currency>(this.baseUri + 'currencies/' + (id == null ? '' : encodeURIComponent(id)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Delete event
		 * Deletes an event by its ID.
		 * Delete events/{id}
		 * @param {string} id The unique identifier of the event.
		 * @param {Events_idDeleteByBehaviourBehaviour} behaviour Whether the delete applies only to this event, to all events within the series from this event or to all events within the series.
		 * @return {void} 
		 */
		Events_idDeleteByBehaviour(id: string, behaviour: Events_idDeleteByBehaviourBehaviour, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'events/' + (id == null ? '' : encodeURIComponent(id)) + '&behaviour=' + behaviour, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get event
		 * Gets a particular event by its ID.
		 * Get events/{id}
		 * @param {string} id The unique identifier of the event.
		 * @return {Event} Success
		 */
		Events_idGet(id: string, headersHandler?: () => HttpHeaders): Observable<Event> {
			return this.http.get<Event>(this.baseUri + 'events/' + (id == null ? '' : encodeURIComponent(id)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Update event
		 * Updates an event by its ID.
		 * Put events/{id}
		 * @param {string} id The unique identifier of the event.
		 * @return {Event} Success
		 */
		Events_idPut(id: string, requestBody: Events_idPutPutBody, headersHandler?: () => HttpHeaders): Observable<Event> {
			return this.http.put<Event>(this.baseUri + 'events/' + (id == null ? '' : encodeURIComponent(id)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Delete institution
		 * Deletes an institution and all data within. Alternatively, another institution can be provided to merge the data into to avoid losing it.
		 * Delete institutions/{id}
		 * @param {number} id The unique identifier of the institution.
		 * @param {number} merge_into_institution_id The unique identifier of the institution to merge into.
		 * @return {void} 
		 */
		Institutions_idDeleteByMerge_into_institution_id(id: number, merge_into_institution_id: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'institutions/' + id + '?merge_into_institution_id=' + merge_into_institution_id, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get institution
		 * Gets an institution by its ID.
		 * Get institutions/{id}
		 * @param {number} id The unique identifier of the institution.
		 * @return {Institution} Success
		 */
		Institutions_idGet(id: number, headersHandler?: () => HttpHeaders): Observable<Institution> {
			return this.http.get<Institution>(this.baseUri + 'institutions/' + id, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Update institution
		 * Updates the title and currency code for an institution.
		 * Put institutions/{id}
		 * @param {number} id The unique identifier of the institution.
		 * @return {Institution} Success
		 */
		Institutions_idPut(id: number, requestBody: Institutions_idPutPutBody, headersHandler?: () => HttpHeaders): Observable<Institution> {
			return this.http.put<Institution>(this.baseUri + 'institutions/' + id, JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * List accounts in institution
		 * Lists accounts belonging to an institution by its ID.
		 * Get institutions/{id}/accounts
		 * @param {number} id The unique identifier of the institution.
		 * @return {Array<Account>} Success
		 */
		Institutions_idAccountsGet(id: number, headersHandler?: () => HttpHeaders): Observable<Array<Account>> {
			return this.http.get<Array<Account>>(this.baseUri + 'institutions/' + id + '/accounts', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get the authorised user
		 * Gets the user that corresponds to the access token used in the request.
		 * Get me
		 * @return {User} Success
		 */
		MeGet(headersHandler?: () => HttpHeaders): Observable<User> {
			return this.http.get<User>(this.baseUri + 'me', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * List events in scenario.
		 * Lists events belonging to a scenario by their ID.
		 * Get scenarios/{id}/events
		 * @param {number} id The unique identifier of the scenario.
		 * @param {string} start_date Return the events from and including this date.
		 * @param {string} end_date Return the events until and including this date.
		 * @return {Array<Event>} Success
		 */
		Scenarios_idEventsGetByStart_dateAndEnd_date(id: number, start_date: string, end_date: string, headersHandler?: () => HttpHeaders): Observable<Array<Event>> {
			return this.http.get<Array<Event>>(this.baseUri + 'scenarios/' + id + '/events?start_date=' + (start_date == null ? '' : encodeURIComponent(start_date)) + '&end_date=' + (end_date == null ? '' : encodeURIComponent(end_date)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Create event in scenario
		 * Creates an event in a scenario by its ID.
		 * Post scenarios/{id}/events
		 * @param {number} id The unique identifier of the scenario.
		 * @return {void} 
		 */
		Scenarios_idEventsPost(id: number, requestBody: Scenarios_idEventsPostPostBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'scenarios/' + id + '/events', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * List time zones
		 * Lists time zones.
		 * Get time_zones
		 * @return {Array<TimeZone>} Success
		 */
		Time_zonesGet(headersHandler?: () => HttpHeaders): Observable<Array<TimeZone>> {
			return this.http.get<Array<TimeZone>>(this.baseUri + 'time_zones', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get transaction account
		 * Gets a transaction account by its ID.
		 * Get transaction_accounts/{id}
		 * @param {number} id The unique identifier of the transaction account.
		 * @return {TransactionAccount} Success
		 */
		Transaction_accounts_idGet(id: number, headersHandler?: () => HttpHeaders): Observable<TransactionAccount> {
			return this.http.get<TransactionAccount>(this.baseUri + 'transaction_accounts/' + id, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Update transaction account
		 * Updates the transaction account by its ID.
		 * Put transaction_accounts/{id}
		 * @param {number} id The unique identifier of the transaction account.
		 * @return {TransactionAccount} Success
		 */
		Transaction_accounts_idPut(id: number, requestBody: Transaction_accounts_idPutPutBody, headersHandler?: () => HttpHeaders): Observable<TransactionAccount> {
			return this.http.put<TransactionAccount>(this.baseUri + 'transaction_accounts/' + id, JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * List transactions in transaction account
		 * Lists transactions belonging to a transaction account by its ID.
		 * Get transaction_accounts/{id}/transactions
		 * @param {number} id The unique identifier of the transaction account.
		 * @param {string} start_date Limit to transactions on or after this date. Required if end_date is provided. If not provided, defaults to the furtherest date allowed by the user's subscription.
		 * @param {string} end_date Limit to transactions on or before this date. Required if start_date is provided. If not provided, defaults to today's date.
		 * @param {string} updated_since Limit to transactions updated since an ISO 8601 timestamp.
		 * @param {number} uncategorised Limit to uncategorised transactions.
		 * @param {TransactionType} type Limit to transactions of this type.
		 * @param {number} needs_review Limit to transactions that need to be reviewed.
		 * @param {string} search Limit to transactions matching a keyword search string. The provided string is matched against the transaction amount, account name, payee, category title, note, labels, and the date in ISO 8601 format.
		 * @param {number} page Choose a particular page of the results.
		 * @return {Array<Transaction>} Success
		 */
		Transaction_accounts_idTransactionsGetByStart_dateAndEnd_dateAndUpdated_sinceAndUncategorisedAndTypeAndNeeds_reviewAndSearchAndPage(id: number, start_date: string | null | undefined, end_date: string | null | undefined, updated_since: string | null | undefined, uncategorised: number | null | undefined, type: TransactionType | null | undefined, needs_review: number | null | undefined, search: string | null | undefined, page: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<Transaction>> {
			return this.http.get<Array<Transaction>>(this.baseUri + 'transaction_accounts/' + id + '/transactions?start_date=' + (start_date == null ? '' : encodeURIComponent(start_date)) + '&end_date=' + (end_date == null ? '' : encodeURIComponent(end_date)) + '&updated_since=' + (updated_since == null ? '' : encodeURIComponent(updated_since)) + '&uncategorised=' + uncategorised + '&type=' + type + '&needs_review=' + needs_review + '&search=' + (search == null ? '' : encodeURIComponent(search)) + '&page=' + page, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Create a transaction in transaction account
		 * Creates a transaction in a transaction account by its ID.
		 * Post transaction_accounts/{id}/transactions
		 * @param {number} id The unique identifier of the transaction account.
		 * @return {void} 
		 */
		Transaction_accounts_idTransactionsPost(id: number, requestBody: Transaction_accounts_idTransactionsPostPostBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'transaction_accounts/' + id + '/transactions', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete transaction
		 * Deletes a transaction and all its data by ID.
		 * Delete transactions/{id}
		 * @param {number} id The unique identifier of the transaction.
		 * @return {void} 
		 */
		Transactions_idDelete(id: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'transactions/' + id, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a transaction
		 * Gets a transaction by its ID.
		 * Get transactions/{id}
		 * @param {number} id The unique identifier of the transaction.
		 * @return {Transaction} Success
		 */
		Transactions_idGet(id: number, headersHandler?: () => HttpHeaders): Observable<Transaction> {
			return this.http.get<Transaction>(this.baseUri + 'transactions/' + id, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Update a transaction
		 * Updates a transaction by its ID.
		 * Put transactions/{id}
		 * @param {number} id The unique identifier of the transaction.
		 * @return {Transaction} Success
		 */
		Transactions_idPut(id: number, requestBody: Transactions_idPutPutBody, headersHandler?: () => HttpHeaders): Observable<Transaction> {
			return this.http.put<Transaction>(this.baseUri + 'transactions/' + id, JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * List attachments in transaction
		 * Lists attachments belonging to a transaction by their ID.
		 * Get transactions/{id}/attachments
		 * @param {number} id The unique identifier of the transaction.
		 * @return {Array<Attachment>} Success
		 */
		Transactions_idAttachmentsGet(id: number, headersHandler?: () => HttpHeaders): Observable<Array<Attachment>> {
			return this.http.get<Array<Attachment>>(this.baseUri + 'transactions/' + id + '/attachments', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Assigns attachment to transaction
		 * Assigns an attachment to the transaction by their ID.
		 * Post transactions/{id}/attachments
		 * @param {number} id The unique identifier of the transaction.
		 * @return {void} 
		 */
		Transactions_idAttachmentsPost(id: number, requestBody: Transactions_idAttachmentsPostPostBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'transactions/' + id + '/attachments', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Unassigns attachment in transaction
		 * Unassigns a particular attachment by its ID from the transaction ID. This does not delete the attachment, it only removes its association from the transaction.
		 * Delete transactions/{transaction_id}/attachments/{attachment_id}
		 * @param {number} transaction_id The unique identifier of the transaction.
		 * @param {number} attachment_id The unique identifier of the attachment.
		 * @return {void} 
		 */
		Transactions_transaction_idAttachments_attachment_idDelete(transaction_id: number, attachment_id: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'transactions/' + transaction_id + '/attachments/' + attachment_id, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get user
		 * Gets a user by ID. You must be authorised as the target user in order to make this request.
		 * Get users/{id}
		 * @param {number} id The unique identifier of the user.
		 * @return {User} Success
		 */
		Users_idGet(id: number, headersHandler?: () => HttpHeaders): Observable<User> {
			return this.http.get<User>(this.baseUri + 'users/' + id, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Update user
		 * Updates the user by their ID. You must be authorised as the target user in order to make this request.
		 * Put users/{id}
		 * @param {number} id The unique identifier of the user.
		 * @return {User} Success
		 */
		Users_idPut(id: number, requestBody: Users_idPutPutBody, headersHandler?: () => HttpHeaders): Observable<User> {
			return this.http.put<User>(this.baseUri + 'users/' + id, JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * List accounts in user
		 * Lists all accounts belonging to the user by their ID.
		 * Get users/{id}/accounts
		 * @param {number} id The unique identifier of the user.
		 * @return {Array<Account>} Success
		 */
		Users_idAccountsGet(id: number, headersHandler?: () => HttpHeaders): Observable<Array<Account>> {
			return this.http.get<Array<Account>>(this.baseUri + 'users/' + id + '/accounts', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Create an account in user
		 * Creates and returns an account belonging to the user by their ID.
		 * Post users/{id}/accounts
		 * @param {number} id The unique identifier of the user.
		 * @return {void} 
		 */
		Users_idAccountsPost(id: number, requestBody: Users_idAccountsPostPostBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'users/' + id + '/accounts', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Update the display order of accounts in user
		 * Updates the display order of accounts belonging to the user, by accepting an array of accounts in their new display order.
		 * Put users/{id}/accounts
		 * @param {number} id The unique identifier of the user.
		 * @return {Array<Account>} Success
		 */
		Users_idAccountsPut(id: number, requestBody: Users_idAccountsPutPutBody, headersHandler?: () => HttpHeaders): Observable<Array<Account>> {
			return this.http.put<Array<Account>>(this.baseUri + 'users/' + id + '/accounts', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Lists attachments in user
		 * Lists attachments belonging to a user by their ID.
		 * Get users/{id}/attachments
		 * @param {number} id The unique identifier of the user.
		 * @param {number} unassigned If set, returns unassigned attachments, that are available for assigning to a transaction.
		 * @return {Array<Attachment>} Success
		 */
		Users_idAttachmentsGetByUnassigned(id: number, unassigned: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<Attachment>> {
			return this.http.get<Array<Attachment>>(this.baseUri + 'users/' + id + '/attachments?unassigned=' + unassigned, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Create attachment in user
		 * Creates an attachment belonging to the user by their ID.
		 * Post users/{id}/attachments
		 * @param {number} id The unique identifier of the user.
		 * @return {Attachment} Success
		 */
		Users_idAttachmentsPost(id: number, requestBody: Users_idAttachmentsPostPostBody, headersHandler?: () => HttpHeaders): Observable<Attachment> {
			return this.http.post<Attachment>(this.baseUri + 'users/' + id + '/attachments', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * List budget for user
		 * Lists the user's budget, consisting of one or more budget analysis packages, one per category. Akin to the list on the Budget page in PocketSmith.
		 * Get users/{id}/budget
		 * @param {number} id The unique identifier of the account.
		 * @param {boolean} roll_up Whether parent categories should have their children rolled up into them. When used, the children will still appear in the collection on their own, but their actual and forecast figures will be rolled up to the root parent.
		 * @return {Array<BudgetAnalysisPackage>} Success
		 */
		Users_idBudgetGetByRoll_up(id: number, roll_up: boolean | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<BudgetAnalysisPackage>> {
			return this.http.get<Array<BudgetAnalysisPackage>>(this.baseUri + 'users/' + id + '/budget?roll_up=' + roll_up, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get budget summary for user
		 * Get the user's budget summary, containing an expense and income analysis for all categories (excluding transfer categories) for the given period and date range. Akin to the overall budget shown on the Budget page in PocketSmith.
		 * Get users/{id}/budget_summary
		 * @param {number} id The unique identifier of the user.
		 * @param {Users_idBudget_summaryGetByPeriodAndIntervalAndStart_dateAndEnd_datePeriod} period The period to analyse in, one of `weeks`, `months` or `years`. Also supported is `event`, although event period analysis is only possible when the budget events gathered align, so in this case where all categories are analysed together, it's highly unlikely that event period analysis will be possible.
		 * @param {number} interval The period interval, e.g. if the interval is 2 and the period is weeks, the budget will be analysed fortnightly.
		 * @param {string} start_date The date to start analysing the budget from. This will be bumped out to make full periods as necessary.
		 * @param {string} end_date The date to stop analysing the budget from. This will be bumped out to make full periods as necessary.
		 * @return {Array<BudgetAnalysisPackage>} Success
		 */
		Users_idBudget_summaryGetByPeriodAndIntervalAndStart_dateAndEnd_date(id: number, period: Users_idBudget_summaryGetByPeriodAndIntervalAndStart_dateAndEnd_datePeriod, interval: number, start_date: string, end_date: string, headersHandler?: () => HttpHeaders): Observable<Array<BudgetAnalysisPackage>> {
			return this.http.get<Array<BudgetAnalysisPackage>>(this.baseUri + 'users/' + id + '/budget_summary?period=' + period + '&interval=' + interval + '&start_date=' + (start_date == null ? '' : encodeURIComponent(start_date)) + '&end_date=' + (end_date == null ? '' : encodeURIComponent(end_date)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * List categories in user
		 * Lists all categories belonging to a user by their ID.
		 * Get users/{id}/categories
		 * @param {number} id The unique identifier of the user.
		 * @return {Array<Category>} Success
		 */
		Users_idCategoriesGet(id: number, headersHandler?: () => HttpHeaders): Observable<Array<Category>> {
			return this.http.get<Array<Category>>(this.baseUri + 'users/' + id + '/categories', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Create category in user
		 * Creates a category belonging to the user by their ID.
		 * Post users/{id}/categories
		 * @param {number} id The unique identifier of the user.
		 * @return {void} 
		 */
		Users_idCategoriesPost(id: number, requestBody: Users_idCategoriesPostPostBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'users/' + id + '/categories', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * List category rules in user
		 * Lists all category rules belonging to a user by their ID.
		 * Get users/{id}/category_rules
		 * @param {number} id The unique identifier of the user.
		 * @return {Array<CategoryRule>} Success
		 */
		Users_idCategory_rulesGet(id: number, headersHandler?: () => HttpHeaders): Observable<Array<CategoryRule>> {
			return this.http.get<Array<CategoryRule>>(this.baseUri + 'users/' + id + '/category_rules', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * List events in user.
		 * Lists events belonging to a user by their ID.
		 * Get users/{id}/events
		 * @param {number} id The unique identifier of the user.
		 * @param {string} start_date Return the events from and including this date.
		 * @param {string} end_date Return the events until and including this date.
		 * @return {Array<Event>} Success
		 */
		Users_idEventsGetByStart_dateAndEnd_date(id: number, start_date: string, end_date: string, headersHandler?: () => HttpHeaders): Observable<Array<Event>> {
			return this.http.get<Array<Event>>(this.baseUri + 'users/' + id + '/events?start_date=' + (start_date == null ? '' : encodeURIComponent(start_date)) + '&end_date=' + (end_date == null ? '' : encodeURIComponent(end_date)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Delete forecast cache for user
		 * Delete the user's cached forecast by recalculating the forecast.
		 * Delete users/{id}/forecast_cache
		 * @param {number} id The unique identifier of the user.
		 * @return {void} 
		 */
		Users_idForecast_cacheDelete(id: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'users/' + id + '/forecast_cache', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * List institutions in user
		 * Lists all the institutions belonging to the user.
		 * Get users/{id}/institutions
		 * @param {number} id The unique identifier of the user
		 * @return {Array<Institution>} Success
		 */
		Users_idInstitutionsGet(id: number, headersHandler?: () => HttpHeaders): Observable<Array<Institution>> {
			return this.http.get<Array<Institution>>(this.baseUri + 'users/' + id + '/institutions', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Create institution in user
		 * Creates an institution belonging to a user.
		 * Post users/{id}/institutions
		 * @param {number} id The unique identifier of the user
		 * @return {void} 
		 */
		Users_idInstitutionsPost(id: number, requestBody: Users_idInstitutionsPostPostBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'users/' + id + '/institutions', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * List labels in user
		 * Lists labels belonging to a user by their ID.
		 * Get users/{id}/labels
		 * @param {number} id The unique identifier of the user.
		 * @return {Array<string>} Success
		 */
		Users_idLabelsGet(id: number, headersHandler?: () => HttpHeaders): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'users/' + id + '/labels', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * List saved searches in user
		 * Lists saved searches belonging to a user by their ID.
		 * Get users/{id}/saved_searches
		 * @param {number} id The unique identifier of the user.
		 * @return {Array<SavedSearch>} Success
		 */
		Users_idSaved_searchesGet(id: number, headersHandler?: () => HttpHeaders): Observable<Array<SavedSearch>> {
			return this.http.get<Array<SavedSearch>>(this.baseUri + 'users/' + id + '/saved_searches', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * List transaction accounts in user
		 * List all transaction accounts belonging to a user.
		 * Get users/{id}/transaction_accounts
		 * @param {number} id The unique identifier of the user.
		 * @return {Array<TransactionAccount>} Success
		 */
		Users_idTransaction_accountsGet(id: number, headersHandler?: () => HttpHeaders): Observable<Array<TransactionAccount>> {
			return this.http.get<Array<TransactionAccount>>(this.baseUri + 'users/' + id + '/transaction_accounts', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * List transactions in user
		 * Lists transactions belonging to a user by their ID.
		 * Get users/{id}/transactions
		 * @param {number} id The unique identifier of the account.
		 * @param {string} start_date Limit to transactions on or after this date. Required if end_date is provided. If not provided, defaults to the furtherest date allowed by the user's subscription.
		 * @param {string} end_date Limit to transactions on or before this date. Required if start_date is provided. If not provided, defaults to today's date.
		 * @param {string} updated_since Limit to transactions updated since an ISO 8601 timestamp.
		 * @param {number} uncategorised Limit to uncategorised transactions.
		 * @param {TransactionType} type Limit to transactions of this type.
		 * @param {number} needs_review Limit to transactions that need to be reviewed.
		 * @param {string} search Limit to transactions matching a keyword search string. The provided string is matched against the transaction amount, account name, payee, category title, note, labels, and the date in ISO 8601 format.
		 * @param {number} page Choose a particular page of the results.
		 * @return {Array<Transaction>} Success
		 */
		Users_idTransactionsGetByStart_dateAndEnd_dateAndUpdated_sinceAndUncategorisedAndTypeAndNeeds_reviewAndSearchAndPage(id: number, start_date: string | null | undefined, end_date: string | null | undefined, updated_since: string | null | undefined, uncategorised: number | null | undefined, type: TransactionType | null | undefined, needs_review: number | null | undefined, search: string | null | undefined, page: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<Transaction>> {
			return this.http.get<Array<Transaction>>(this.baseUri + 'users/' + id + '/transactions?start_date=' + (start_date == null ? '' : encodeURIComponent(start_date)) + '&end_date=' + (end_date == null ? '' : encodeURIComponent(end_date)) + '&updated_since=' + (updated_since == null ? '' : encodeURIComponent(updated_since)) + '&uncategorised=' + uncategorised + '&type=' + type + '&needs_review=' + needs_review + '&search=' + (search == null ? '' : encodeURIComponent(search)) + '&page=' + page, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get trend analysis for user
		 * Get an income and/or expense budget analysis for the given date range and period across any number of categories and scenarios. Akin to the Trends page in PocketSmith.
		 * Get users/{id}/trend_analysis
		 * @param {number} id The unique identifier of the user.
		 * @param {Users_idBudget_summaryGetByPeriodAndIntervalAndStart_dateAndEnd_datePeriod} period The period to analyse in, one of `weeks`, `months` or `years`. Also supported is `event`, although event period analysis is only possible when the budget events gathered align, so in this case where all categories are analysed together, it's highly unlikely that event period analysis will be possible.
		 * @param {number} interval The period interval, e.g. if the interval is 2 and the period is weeks, the budget will be analysed fortnightly.
		 * @param {string} start_date The date to start analysing the budget from. This will be bumped out to make full periods as necessary.
		 * @param {string} end_date The date to stop analysing the budget from. This will be bumped out to make full periods as necessary.
		 * @param {string} categories A comma-separated list of category IDs to analyse.
		 * @param {string} scenarios A comma-separated list of scenario IDs to analyse. You're likely going to want to include all a user's scenarios here, unless you have reason to only analyse for a subset of scenarios. Regardless of what scenarios are analysed, all actuals (transactions) across all accounts will be included.
		 * @return {Array<BudgetAnalysisPackage>} Success
		 */
		Users_idTrend_analysisGetByPeriodAndIntervalAndStart_dateAndEnd_dateAndCategoriesAndScenarios(id: number, period: Users_idBudget_summaryGetByPeriodAndIntervalAndStart_dateAndEnd_datePeriod, interval: number, start_date: string, end_date: string, categories: string, scenarios: string, headersHandler?: () => HttpHeaders): Observable<Array<BudgetAnalysisPackage>> {
			return this.http.get<Array<BudgetAnalysisPackage>>(this.baseUri + 'users/' + id + '/trend_analysis?period=' + period + '&interval=' + interval + '&start_date=' + (start_date == null ? '' : encodeURIComponent(start_date)) + '&end_date=' + (end_date == null ? '' : encodeURIComponent(end_date)) + '&categories=' + (categories == null ? '' : encodeURIComponent(categories)) + '&scenarios=' + (scenarios == null ? '' : encodeURIComponent(scenarios)), { headers: headersHandler ? headersHandler() : undefined });
		}
	}

	export interface Accounts_idPutPutBody {

		/** A new currency code for the account. */
		currency_code?: string | null;

		/** Whether the account is a net worth account. */
		is_net_worth?: boolean | null;

		/** A new title for the account. */
		title?: string | null;

		/** The type of the account. */
		type?: Accounts_idPutPutBodyType | null;
	}
	export interface Accounts_idPutPutBodyFormProperties {

		/** A new currency code for the account. */
		currency_code: FormControl<string | null | undefined>,

		/** Whether the account is a net worth account. */
		is_net_worth: FormControl<boolean | null | undefined>,

		/** A new title for the account. */
		title: FormControl<string | null | undefined>,

		/** The type of the account. */
		type: FormControl<Accounts_idPutPutBodyType | null | undefined>,
	}
	export function CreateAccounts_idPutPutBodyFormGroup() {
		return new FormGroup<Accounts_idPutPutBodyFormProperties>({
			currency_code: new FormControl<string | null | undefined>(undefined),
			is_net_worth: new FormControl<boolean | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<Accounts_idPutPutBodyType | null | undefined>(undefined),
		});

	}

	export enum Accounts_idPutPutBodyType { bank = 'bank', credits = 'credits', cash = 'cash', loans = 'loans', mortgage = 'mortgage', stocks = 'stocks', vehicle = 'vehicle', property = 'property', insurance = 'insurance', other_asset = 'other_asset', other_liability = 'other_liability' }

	export interface Attachments_idPutPutBody {

		/** The new title of the attachment. If the title is blank or not provided, the server will derive a title from the file name. */
		title?: string | null;
	}
	export interface Attachments_idPutPutBodyFormProperties {

		/** The new title of the attachment. If the title is blank or not provided, the server will derive a title from the file name. */
		title: FormControl<string | null | undefined>,
	}
	export function CreateAttachments_idPutPutBodyFormGroup() {
		return new FormGroup<Attachments_idPutPutBodyFormProperties>({
			title: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Categories_idPutPutBody {

		/** A new CSS-style hex colour for the category. */
		colour?: string | null;

		/** Set the category as a bill category. */
		is_bill?: boolean | null;

		/** Set the category as a transfer category. */
		is_transfer?: boolean | null;

		/** The unique identifier of a parent category for the category, making this category a child of that category. */
		parent_id?: number | null;

		/** Set the refund behaviour of the category. */
		refund_behaviour?: Categories_idPutPutBodyRefund_behaviour | null;

		/** Set the category to be rolled up into its parent category. */
		roll_up?: boolean | null;

		/** A new title for the category. */
		title?: string | null;
	}
	export interface Categories_idPutPutBodyFormProperties {

		/** A new CSS-style hex colour for the category. */
		colour: FormControl<string | null | undefined>,

		/** Set the category as a bill category. */
		is_bill: FormControl<boolean | null | undefined>,

		/** Set the category as a transfer category. */
		is_transfer: FormControl<boolean | null | undefined>,

		/** The unique identifier of a parent category for the category, making this category a child of that category. */
		parent_id: FormControl<number | null | undefined>,

		/** Set the refund behaviour of the category. */
		refund_behaviour: FormControl<Categories_idPutPutBodyRefund_behaviour | null | undefined>,

		/** Set the category to be rolled up into its parent category. */
		roll_up: FormControl<boolean | null | undefined>,

		/** A new title for the category. */
		title: FormControl<string | null | undefined>,
	}
	export function CreateCategories_idPutPutBodyFormGroup() {
		return new FormGroup<Categories_idPutPutBodyFormProperties>({
			colour: new FormControl<string | null | undefined>(undefined),
			is_bill: new FormControl<boolean | null | undefined>(undefined),
			is_transfer: new FormControl<boolean | null | undefined>(undefined),
			parent_id: new FormControl<number | null | undefined>(undefined),
			refund_behaviour: new FormControl<Categories_idPutPutBodyRefund_behaviour | null | undefined>(undefined),
			roll_up: new FormControl<boolean | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum Categories_idPutPutBodyRefund_behaviour { debits_are_deductions = 'debits_are_deductions', credits_are_refunds = 'credits_are_refunds', _null = 2 }

	export interface Categories_idCategory_rulesPostPostBody {

		/** Apply the created category rule to all transactions. */
		apply_to_all?: boolean | null;

		/** Apply the created category rule to all uncategorised transactions. */
		apply_to_uncategorised?: boolean | null;

		/**
		 * The keyword/s to match the transaction payees.
		 * Required
		 */
		payee_matches: string;
	}
	export interface Categories_idCategory_rulesPostPostBodyFormProperties {

		/** Apply the created category rule to all transactions. */
		apply_to_all: FormControl<boolean | null | undefined>,

		/** Apply the created category rule to all uncategorised transactions. */
		apply_to_uncategorised: FormControl<boolean | null | undefined>,

		/**
		 * The keyword/s to match the transaction payees.
		 * Required
		 */
		payee_matches: FormControl<string | null | undefined>,
	}
	export function CreateCategories_idCategory_rulesPostPostBodyFormGroup() {
		return new FormGroup<Categories_idCategory_rulesPostPostBodyFormProperties>({
			apply_to_all: new FormControl<boolean | null | undefined>(undefined),
			apply_to_uncategorised: new FormControl<boolean | null | undefined>(undefined),
			payee_matches: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum Events_idDeleteByBehaviourBehaviour { one = 'one', forward = 'forward', all = 'all' }

	export interface Events_idPutPutBody {

		/** The amount of the event. A positive amount is a credit, and a negative amount is a debit. */
		amount?: number | null;

		/**
		 * Whether the update applies only to this event, to all events within the series from this event or to all events within the series.
		 * Required
		 */
		behaviour: Events_idDeleteByBehaviourBehaviour;

		/** A note for the event. */
		note?: string | null;

		/** The repeat interval of the event. */
		repeat_interval?: number | null;

		/** The repeat type of the event. */
		repeat_type?: EventRepeat_type | null;
	}
	export interface Events_idPutPutBodyFormProperties {

		/** The amount of the event. A positive amount is a credit, and a negative amount is a debit. */
		amount: FormControl<number | null | undefined>,

		/**
		 * Whether the update applies only to this event, to all events within the series from this event or to all events within the series.
		 * Required
		 */
		behaviour: FormControl<Events_idDeleteByBehaviourBehaviour | null | undefined>,

		/** A note for the event. */
		note: FormControl<string | null | undefined>,

		/** The repeat interval of the event. */
		repeat_interval: FormControl<number | null | undefined>,

		/** The repeat type of the event. */
		repeat_type: FormControl<EventRepeat_type | null | undefined>,
	}
	export function CreateEvents_idPutPutBodyFormGroup() {
		return new FormGroup<Events_idPutPutBodyFormProperties>({
			amount: new FormControl<number | null | undefined>(undefined),
			behaviour: new FormControl<Events_idDeleteByBehaviourBehaviour | null | undefined>(undefined, [Validators.required]),
			note: new FormControl<string | null | undefined>(undefined),
			repeat_interval: new FormControl<number | null | undefined>(undefined),
			repeat_type: new FormControl<EventRepeat_type | null | undefined>(undefined),
		});

	}

	export interface Institutions_idPutPutBody {

		/** A new currency code for the institution. */
		currency_code?: string | null;

		/** A new title for the institution. */
		title?: string | null;
	}
	export interface Institutions_idPutPutBodyFormProperties {

		/** A new currency code for the institution. */
		currency_code: FormControl<string | null | undefined>,

		/** A new title for the institution. */
		title: FormControl<string | null | undefined>,
	}
	export function CreateInstitutions_idPutPutBodyFormGroup() {
		return new FormGroup<Institutions_idPutPutBodyFormProperties>({
			currency_code: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Scenarios_idEventsPostPostBody {

		/**
		 * The amount of the event. A positive amount is a credit, and a negative amount is a debit.
		 * Required
		 */
		amount: number;

		/**
		 * The unique identifier of the category for the event.
		 * Required
		 */
		category_id: number;

		/**
		 * The starting date of the event.
		 * Required
		 */
		date: string;

		/** A note for the event. */
		note?: string | null;

		/** The repeat interval of the event. */
		repeat_interval?: number | null;

		/**
		 * The repeat type of the event.
		 * Required
		 */
		repeat_type: EventRepeat_type;
	}
	export interface Scenarios_idEventsPostPostBodyFormProperties {

		/**
		 * The amount of the event. A positive amount is a credit, and a negative amount is a debit.
		 * Required
		 */
		amount: FormControl<number | null | undefined>,

		/**
		 * The unique identifier of the category for the event.
		 * Required
		 */
		category_id: FormControl<number | null | undefined>,

		/**
		 * The starting date of the event.
		 * Required
		 */
		date: FormControl<string | null | undefined>,

		/** A note for the event. */
		note: FormControl<string | null | undefined>,

		/** The repeat interval of the event. */
		repeat_interval: FormControl<number | null | undefined>,

		/**
		 * The repeat type of the event.
		 * Required
		 */
		repeat_type: FormControl<EventRepeat_type | null | undefined>,
	}
	export function CreateScenarios_idEventsPostPostBodyFormGroup() {
		return new FormGroup<Scenarios_idEventsPostPostBodyFormProperties>({
			amount: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			category_id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			date: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			note: new FormControl<string | null | undefined>(undefined),
			repeat_interval: new FormControl<number | null | undefined>(undefined),
			repeat_type: new FormControl<EventRepeat_type | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Transaction_accounts_idPutPutBody {

		/** The unique identifier of a new institution for the transaction account. */
		institution_id?: number | null;

		/** The starting balance amount of the transaction account. */
		starting_balance?: number | null;

		/** The starting balance date of the transaction account. */
		starting_balance_date?: string | null;
	}
	export interface Transaction_accounts_idPutPutBodyFormProperties {

		/** The unique identifier of a new institution for the transaction account. */
		institution_id: FormControl<number | null | undefined>,

		/** The starting balance amount of the transaction account. */
		starting_balance: FormControl<number | null | undefined>,

		/** The starting balance date of the transaction account. */
		starting_balance_date: FormControl<string | null | undefined>,
	}
	export function CreateTransaction_accounts_idPutPutBodyFormGroup() {
		return new FormGroup<Transaction_accounts_idPutPutBodyFormProperties>({
			institution_id: new FormControl<number | null | undefined>(undefined),
			starting_balance: new FormControl<number | null | undefined>(undefined),
			starting_balance_date: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Transaction_accounts_idTransactionsPostPostBody {

		/**
		 * The amount of the transaction. A positive amount is a credit, and a negative amount is a debit.
		 * Required
		 */
		amount: number;

		/** The unique identifier of a category for the transaction. */
		category_id?: number | null;

		/** A cheque number for the transaction. */
		cheque_number?: string | null;

		/**
		 * The date when the transaction occurred.
		 * Required
		 */
		date: string;

		/** Whether the transaction should be indicated as a transfer. */
		is_transfer?: boolean | null;

		/** A set of comma-separated labels for the transaction. */
		labels?: string | null;

		/** A memo for the transaction. */
		memo?: string | null;

		/** Whether the transaction needs to be reviewed or not. */
		needs_review?: boolean | null;

		/** A note for the transaction. */
		note?: string | null;

		/**
		 * The payee/merchant of the transaction.
		 * Required
		 */
		payee: string;
	}
	export interface Transaction_accounts_idTransactionsPostPostBodyFormProperties {

		/**
		 * The amount of the transaction. A positive amount is a credit, and a negative amount is a debit.
		 * Required
		 */
		amount: FormControl<number | null | undefined>,

		/** The unique identifier of a category for the transaction. */
		category_id: FormControl<number | null | undefined>,

		/** A cheque number for the transaction. */
		cheque_number: FormControl<string | null | undefined>,

		/**
		 * The date when the transaction occurred.
		 * Required
		 */
		date: FormControl<string | null | undefined>,

		/** Whether the transaction should be indicated as a transfer. */
		is_transfer: FormControl<boolean | null | undefined>,

		/** A set of comma-separated labels for the transaction. */
		labels: FormControl<string | null | undefined>,

		/** A memo for the transaction. */
		memo: FormControl<string | null | undefined>,

		/** Whether the transaction needs to be reviewed or not. */
		needs_review: FormControl<boolean | null | undefined>,

		/** A note for the transaction. */
		note: FormControl<string | null | undefined>,

		/**
		 * The payee/merchant of the transaction.
		 * Required
		 */
		payee: FormControl<string | null | undefined>,
	}
	export function CreateTransaction_accounts_idTransactionsPostPostBodyFormGroup() {
		return new FormGroup<Transaction_accounts_idTransactionsPostPostBodyFormProperties>({
			amount: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			category_id: new FormControl<number | null | undefined>(undefined),
			cheque_number: new FormControl<string | null | undefined>(undefined),
			date: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			is_transfer: new FormControl<boolean | null | undefined>(undefined),
			labels: new FormControl<string | null | undefined>(undefined),
			memo: new FormControl<string | null | undefined>(undefined),
			needs_review: new FormControl<boolean | null | undefined>(undefined),
			note: new FormControl<string | null | undefined>(undefined),
			payee: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Transactions_idPutPutBody {

		/** A new amount for the transaction. */
		amount?: number | null;

		/** The unique identifier of a new category for the transaction. */
		category_id?: number | null;

		/** A new cheque number for the transaction. */
		cheque_number?: string | null;

		/** A new date for the transaction. */
		date?: string | null;

		/** Whether the transaction is a transfer or not. */
		is_transfer?: boolean | null;

		/** A new comma-separated set of labels for the transaction. */
		labels?: string | null;

		/** A new memo for the transaction. */
		memo?: string | null;

		/** Whether the transaction needs to be reviewed or not. */
		needs_review?: boolean | null;

		/** A new note for the transaction. */
		note?: string | null;

		/** A new payee for the transaction. */
		payee?: string | null;
	}
	export interface Transactions_idPutPutBodyFormProperties {

		/** A new amount for the transaction. */
		amount: FormControl<number | null | undefined>,

		/** The unique identifier of a new category for the transaction. */
		category_id: FormControl<number | null | undefined>,

		/** A new cheque number for the transaction. */
		cheque_number: FormControl<string | null | undefined>,

		/** A new date for the transaction. */
		date: FormControl<string | null | undefined>,

		/** Whether the transaction is a transfer or not. */
		is_transfer: FormControl<boolean | null | undefined>,

		/** A new comma-separated set of labels for the transaction. */
		labels: FormControl<string | null | undefined>,

		/** A new memo for the transaction. */
		memo: FormControl<string | null | undefined>,

		/** Whether the transaction needs to be reviewed or not. */
		needs_review: FormControl<boolean | null | undefined>,

		/** A new note for the transaction. */
		note: FormControl<string | null | undefined>,

		/** A new payee for the transaction. */
		payee: FormControl<string | null | undefined>,
	}
	export function CreateTransactions_idPutPutBodyFormGroup() {
		return new FormGroup<Transactions_idPutPutBodyFormProperties>({
			amount: new FormControl<number | null | undefined>(undefined),
			category_id: new FormControl<number | null | undefined>(undefined),
			cheque_number: new FormControl<string | null | undefined>(undefined),
			date: new FormControl<string | null | undefined>(undefined),
			is_transfer: new FormControl<boolean | null | undefined>(undefined),
			labels: new FormControl<string | null | undefined>(undefined),
			memo: new FormControl<string | null | undefined>(undefined),
			needs_review: new FormControl<boolean | null | undefined>(undefined),
			note: new FormControl<string | null | undefined>(undefined),
			payee: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Transactions_idAttachmentsPostPostBody {

		/** The unique identifier of the attachment. */
		attachment_id?: number | null;
	}
	export interface Transactions_idAttachmentsPostPostBodyFormProperties {

		/** The unique identifier of the attachment. */
		attachment_id: FormControl<number | null | undefined>,
	}
	export function CreateTransactions_idAttachmentsPostPostBodyFormGroup() {
		return new FormGroup<Transactions_idAttachmentsPostPostBodyFormProperties>({
			attachment_id: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Users_idPutPutBody {

		/** Whether the user wishes to have all monetary values converted to their base currency. */
		always_show_base_currency?: boolean | null;

		/** A new base currency code for the user. */
		base_currency_code?: string | null;

		/** Whether the user is a beta user, and wishes to try out new features. */
		beta_user?: boolean | null;

		/** A new email address for the user. */
		email?: string | null;

		/** A new name for the user. */
		name?: string | null;

		/** A new time zone for the user. */
		time_zone?: string | null;

		/** The day of the week the user wishes their calendars to start on. A number between 0 and 6, where 0 is Sunday and 6 is Saturday. */
		week_start_day?: number | null;
	}
	export interface Users_idPutPutBodyFormProperties {

		/** Whether the user wishes to have all monetary values converted to their base currency. */
		always_show_base_currency: FormControl<boolean | null | undefined>,

		/** A new base currency code for the user. */
		base_currency_code: FormControl<string | null | undefined>,

		/** Whether the user is a beta user, and wishes to try out new features. */
		beta_user: FormControl<boolean | null | undefined>,

		/** A new email address for the user. */
		email: FormControl<string | null | undefined>,

		/** A new name for the user. */
		name: FormControl<string | null | undefined>,

		/** A new time zone for the user. */
		time_zone: FormControl<string | null | undefined>,

		/** The day of the week the user wishes their calendars to start on. A number between 0 and 6, where 0 is Sunday and 6 is Saturday. */
		week_start_day: FormControl<number | null | undefined>,
	}
	export function CreateUsers_idPutPutBodyFormGroup() {
		return new FormGroup<Users_idPutPutBodyFormProperties>({
			always_show_base_currency: new FormControl<boolean | null | undefined>(undefined),
			base_currency_code: new FormControl<string | null | undefined>(undefined),
			beta_user: new FormControl<boolean | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			time_zone: new FormControl<string | null | undefined>(undefined),
			week_start_day: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Users_idAccountsPostPostBody {

		/**
		 * A currency code for the account.
		 * Required
		 */
		currency_code: string;

		/**
		 * The ID of the institution to create this account in.
		 * Required
		 */
		institution_id: number;

		/**
		 * A title for the account.
		 * Required
		 */
		title: string;

		/**
		 * The type of the account.
		 * Required
		 */
		type: Accounts_idPutPutBodyType;
	}
	export interface Users_idAccountsPostPostBodyFormProperties {

		/**
		 * A currency code for the account.
		 * Required
		 */
		currency_code: FormControl<string | null | undefined>,

		/**
		 * The ID of the institution to create this account in.
		 * Required
		 */
		institution_id: FormControl<number | null | undefined>,

		/**
		 * A title for the account.
		 * Required
		 */
		title: FormControl<string | null | undefined>,

		/**
		 * The type of the account.
		 * Required
		 */
		type: FormControl<Accounts_idPutPutBodyType | null | undefined>,
	}
	export function CreateUsers_idAccountsPostPostBodyFormGroup() {
		return new FormGroup<Users_idAccountsPostPostBodyFormProperties>({
			currency_code: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			institution_id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			title: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<Accounts_idPutPutBodyType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Users_idAccountsPutPutBody {

		/**
		 * List the account objects in their new display order.
		 * Required
		 */
		accounts: Array<Account>;
	}
	export interface Users_idAccountsPutPutBodyFormProperties {
	}
	export function CreateUsers_idAccountsPutPutBodyFormGroup() {
		return new FormGroup<Users_idAccountsPutPutBodyFormProperties>({
		});

	}

	export interface Users_idAttachmentsPostPostBody {

		/** The base64-encoded contents of the source file. The supported file types are png, jpg, pdf, xls, xlsx, doc, docx. */
		file_data?: string | null;

		/** The file name of the attachment. */
		file_name?: string | null;

		/** The title of the attachment. If the title is blank or not provided, the title will derived from the file name. */
		title?: string | null;
	}
	export interface Users_idAttachmentsPostPostBodyFormProperties {

		/** The base64-encoded contents of the source file. The supported file types are png, jpg, pdf, xls, xlsx, doc, docx. */
		file_data: FormControl<string | null | undefined>,

		/** The file name of the attachment. */
		file_name: FormControl<string | null | undefined>,

		/** The title of the attachment. If the title is blank or not provided, the title will derived from the file name. */
		title: FormControl<string | null | undefined>,
	}
	export function CreateUsers_idAttachmentsPostPostBodyFormGroup() {
		return new FormGroup<Users_idAttachmentsPostPostBodyFormProperties>({
			file_data: new FormControl<string | null | undefined>(undefined),
			file_name: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum Users_idBudget_summaryGetByPeriodAndIntervalAndStart_dateAndEnd_datePeriod { weeks = 'weeks', months = 'months', years = 'years', event = 'event' }

	export interface Users_idCategoriesPostPostBody {

		/** A CSS-style hex colour for the category. */
		colour?: string | null;

		/** Set the category as a bill category. */
		is_bill?: boolean | null;

		/** Set the category as a transfer category. */
		is_transfer?: boolean | null;

		/** The unique identifier of a category to be the parent of this category. */
		parent_id?: number | null;

		/** Set the refund behaviour of the category. */
		refund_behaviour?: Users_idCategoriesPostPostBodyRefund_behaviour | null;

		/** Set the category to be rolled up into its parent category. */
		roll_up?: boolean | null;

		/**
		 * A title for the category.
		 * Required
		 */
		title: string;
	}
	export interface Users_idCategoriesPostPostBodyFormProperties {

		/** A CSS-style hex colour for the category. */
		colour: FormControl<string | null | undefined>,

		/** Set the category as a bill category. */
		is_bill: FormControl<boolean | null | undefined>,

		/** Set the category as a transfer category. */
		is_transfer: FormControl<boolean | null | undefined>,

		/** The unique identifier of a category to be the parent of this category. */
		parent_id: FormControl<number | null | undefined>,

		/** Set the refund behaviour of the category. */
		refund_behaviour: FormControl<Users_idCategoriesPostPostBodyRefund_behaviour | null | undefined>,

		/** Set the category to be rolled up into its parent category. */
		roll_up: FormControl<boolean | null | undefined>,

		/**
		 * A title for the category.
		 * Required
		 */
		title: FormControl<string | null | undefined>,
	}
	export function CreateUsers_idCategoriesPostPostBodyFormGroup() {
		return new FormGroup<Users_idCategoriesPostPostBodyFormProperties>({
			colour: new FormControl<string | null | undefined>(undefined),
			is_bill: new FormControl<boolean | null | undefined>(undefined),
			is_transfer: new FormControl<boolean | null | undefined>(undefined),
			parent_id: new FormControl<number | null | undefined>(undefined),
			refund_behaviour: new FormControl<Users_idCategoriesPostPostBodyRefund_behaviour | null | undefined>(undefined),
			roll_up: new FormControl<boolean | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum Users_idCategoriesPostPostBodyRefund_behaviour { debits_are_deductions = 'debits_are_deductions', credits_are_refunds = 'credits_are_refunds', _null = 2 }

	export interface Users_idInstitutionsPostPostBody {

		/**
		 * A currency code for the institution.
		 * Required
		 */
		currency_code: string;

		/**
		 * A title for the institution.
		 * Required
		 */
		title: string;
	}
	export interface Users_idInstitutionsPostPostBodyFormProperties {

		/**
		 * A currency code for the institution.
		 * Required
		 */
		currency_code: FormControl<string | null | undefined>,

		/**
		 * A title for the institution.
		 * Required
		 */
		title: FormControl<string | null | undefined>,
	}
	export function CreateUsers_idInstitutionsPostPostBodyFormGroup() {
		return new FormGroup<Users_idInstitutionsPostPostBodyFormProperties>({
			currency_code: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			title: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

}

