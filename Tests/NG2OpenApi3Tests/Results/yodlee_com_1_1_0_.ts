import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface AccessTokens {

		/** The identifier of the application for which the access token is generated.<br><br><b>Endpoints</b>:<ul><li>GET user/accessTokens</li></ul> */
		appId?: string | null;

		/** Base URL using which the application is accessed.<br><br><b>Endpoints</b>:<ul><li>GET user/accessTokens</li></ul> */
		url?: string | null;

		/** Access token value used to invoke the widgets/apps.<br><br><b>Endpoints</b>:<ul><li>GET user/accessTokens</li></ul> */
		value?: string | null;
	}
	export interface AccessTokensFormProperties {

		/** The identifier of the application for which the access token is generated.<br><br><b>Endpoints</b>:<ul><li>GET user/accessTokens</li></ul> */
		appId: FormControl<string | null | undefined>,

		/** Base URL using which the application is accessed.<br><br><b>Endpoints</b>:<ul><li>GET user/accessTokens</li></ul> */
		url: FormControl<string | null | undefined>,

		/** Access token value used to invoke the widgets/apps.<br><br><b>Endpoints</b>:<ul><li>GET user/accessTokens</li></ul> */
		value: FormControl<string | null | undefined>,
	}
	export function CreateAccessTokensFormGroup() {
		return new FormGroup<AccessTokensFormProperties>({
			appId: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Account {
		'401kLoan'?: Money;

		/** The type of service. E.g., Bank, Credit Card, Investment, Insurance, etc.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: All containers<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul><b>Applicable Values</b><br> */
		CONTAINER?: AccountCONTAINER | null;

		/** The account name as it appears at the site.<br>(The POST accounts service response return this field as name)<br><b>Applicable containers</b>: All Containers<br><b>Aggregated / Manual</b>: Both <br><b>Endpoints</b>:<br><ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul> */
		accountName?: string | null;

		/** The account number as it appears on the site. (The POST accounts service response return this field as number)<br><b>Additional Details</b>:<b> Bank/ Loan/ Insurance/ Investment</b>:<br> The account number for the bank account as it appears at the site.<br><b>Credit Card</b>: The account number of the card account as it appears at the site,<br>i.e., the card number.The account number can be full or partial based on how it is displayed in the account summary page of the site.In most cases, the site does not display the full account number in the account summary page and additional navigation is required to aggregate it.<br><b>Applicable containers</b>: All Containers<br><b>Aggregated / Manual</b>: Both <br><b>Endpoints</b>:<br><ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>POST accounts</li><li>GET dataExtracts/userData</li></ul> */
		accountNumber?: string | null;

		/** The status of the account that is updated by the consumer through an application or an API. Valid Values: AccountStatus<br><b>Additional Details:</b><br><b>ACTIVE:</b> All the added manual and aggregated accounts status will be made "ACTIVE" by default. <br><b>TO_BE_CLOSED:</b> If the aggregated accounts are not found or closed in the data provider site, Yodlee system marks the status as TO_BE_CLOSED<br><b>INACTIVE:</b> Users can update the status as INACTIVE to stop updating and to stop considering the account in other services<br><b>CLOSED:</b> Users can update the status as CLOSED, if the account is closed with the provider. <br><br><b>Aggregated / Manual</b>: Both <br><b>Applicable containers</b>: All containers<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul><b>Applicable Values</b><br> */
		accountStatus?: AccountAccountStatus | null;

		/** The type of account that is aggregated, i.e., savings, checking, credit card, charge, HELOC, etc. The account type is derived based on the attributes of the account. <br><b>Valid Values:</b><br><b>Aggregated Account Type</b><br><b>bank</b><ul><li>CHECKING</li><li>SAVINGS</li><li>CD</li><li>PPF</li><li>RECURRING_DEPOSIT</li><li>FSA</li><li>MONEY_MARKET</li><li>IRA</li><li>PREPAID</li></ul><b>creditCard</b><ul><li>OTHER</li><li>CREDIT</li><li>STORE</li><li>CHARGE</li><li>OTHER</li></ul><b>investment (SN 1.0)</b><ul><li>BROKERAGE_MARGIN</li><li>HSA</li><li>IRA</li><li>BROKERAGE_CASH</li><li>401K</li><li>403B</li><li>TRUST</li><li>ANNUITY</li><li>SIMPLE</li><li>CUSTODIAL</li><li>BROKERAGE_CASH_OPTION</li><li>BROKERAGE_MARGIN_OPTION</li><li>INDIVIDUAL</li><li>CORPORATE</li><li>JTTIC</li><li>JTWROS</li><li>COMMUNITY_PROPERTY</li><li>JOINT_BY_ENTIRETY</li><li>CONSERVATORSHIP</li><li>ROTH</li><li>ROTH_CONVERSION</li><li>ROLLOVER</li><li>EDUCATIONAL</li><li>529_PLAN</li><li>457_DEFERRED_COMPENSATION</li><li>401A</li><li>PSP</li><li>MPP</li><li>STOCK_BASKET</li><li>LIVING_TRUST</li><li>REVOCABLE_TRUST</li><li>IRREVOCABLE_TRUST</li><li>CHARITABLE_REMAINDER</li><li>CHARITABLE_LEAD</li><li>CHARITABLE_GIFT_ACCOUNT</li><li>SEP</li><li>UTMA</li><li>UGMA</li><li>ESOPP</li><li>ADMINISTRATOR</li><li>EXECUTOR</li><li>PARTNERSHIP</li><li>SOLE_PROPRIETORSHIP</li><li>CHURCH</li><li>INVESTMENT_CLUB</li><li>RESTRICTED_STOCK_AWARD</li><li>CMA</li><li>EMPLOYEE_STOCK_PURCHASE_PLAN</li><li>PERFORMANCE_PLAN</li><li>BROKERAGE_LINK_ACCOUNT</li><li>MONEY_MARKET</li><li>SUPER_ANNUATION</li><li>REGISTERED_RETIREMENT_SAVINGS_PLAN</li><li>SPOUSAL_RETIREMENT_SAVINGS_PLAN</li><li>DEFERRED_PROFIT_SHARING_PLAN</li><li>NON_REGISTERED_SAVINGS_PLAN</li><li>REGISTERED_EDUCATION_SAVINGS_PLAN</li><li>GROUP_RETIREMENT_SAVINGS_PLAN</li><li>LOCKED_IN_RETIREMENT_SAVINGS_PLAN</li><li>RESTRICTED_LOCKED_IN_SAVINGS_PLAN</li><li>LOCKED_IN_RETIREMENT_ACCOUNT</li><li>REGISTERED_PENSION_PLAN</li><li>TAX_FREE_SAVINGS_ACCOUNT</li><li>LIFE_INCOME_FUND</li><li>REGISTERED_RETIREMENT_INCOME_FUND</li><li>SPOUSAL_RETIREMENT_INCOME_FUND</li><li>LOCKED_IN_REGISTERED_INVESTMENT_FUND</li><li>PRESCRIBED_REGISTERED_RETIREMENT_INCOME_FUND</li><li>GUARANTEED_INVESTMENT_CERTIFICATES</li><li>REGISTERED_DISABILITY_SAVINGS_PLAN</li><li>OTHER</li></ul><b>investment (SN 2.0)</b><ul><li>BROKERAGE_CASH</li><li>BROKERAGE_MARGIN</li><li>INDIVIDUAL_RETIREMENT_ACCOUNT_IRA</li><li>EMPLOYEE_RETIREMENT_ACCOUNT_401K</li><li>EMPLOYEE_RETIREMENT_SAVINGS_PLAN_403B</li><li>TRUST</li><li>ANNUITY</li><li>SIMPLE_IRA</li><li>CUSTODIAL_ACCOUNT</li><li>BROKERAGE_CASH_OPTION</li><li>BROKERAGE_MARGIN_OPTION</li><li>INDIVIDUAL</li><li>CORPORATE_INVESTMENT_ACCOUNT</li><li>JOINT_TENANTS_TENANCY_IN_COMMON_JTIC</li><li>JOINT_TENANTS_WITH_RIGHTS_OF_SURVIVORSHIP_JTWROS</li><li>JOINT_TENANTS_COMMUNITY_PROPERTY</li><li>JOINT_TENANTS_TENANTS_BY_ENTIRETY</li><li>CONSERVATOR</li><li>ROTH_IRA</li><li>ROTH_CONVERSION</li><li>ROLLOVER_IRA</li><li>EDUCATIONAL</li><li>EDUCATIONAL_SAVINGS_PLAN_529</li><li>DEFERRED_COMPENSATION_PLAN_457</li><li>MONEY_PURCHASE_RETIREMENT_PLAN_401A</li><li>PROFIT_SHARING_PLAN</li><li>MONEY_PURCHASE_PLAN</li><li>STOCK_BASKET_ACCOUNT</li><li>LIVING_TRUST</li><li>REVOCABLE_TRUST</li><li>IRREVOCABLE_TRUST</li><li>CHARITABLE_REMAINDER_TRUST</li><li>CHARITABLE_LEAD_TRUST</li><li>CHARITABLE_GIFT_ACCOUNT</li><li>SEP_IRA</li><li>UNIFORM_TRANSFER_TO_MINORS_ACT_UTMA</li><li>UNIFORM_GIFT_TO_MINORS_ACT_UGMA</li><li>EMPLOYEE_STOCK_OWNERSHIP_PLAN_ESOP</li><li>ADMINISTRATOR</li><li>EXECUTOR</li><li>PARTNERSHIP</li><li>PROPRIETORSHIP</li><li>CHURCH_ACCOUNT</li><li>INVESTMENT_CLUB</li><li>RESTRICTED_STOCK_AWARD</li><li>CASH_MANAGEMENT_ACCOUNT</li><li>EMPLOYEE_STOCK_PURCHASE_PLAN_ESPP</li><li>PERFORMANCE_PLAN</li><li>BROKERAGE_LINK_ACCOUNT</li><li>MONEY_MARKET_ACCOUNT</li><li>SUPERANNUATION</li><li>REGISTERED_RETIREMENT_SAVINGS_PLAN_RRSP</li><li>SPOUSAL_RETIREMENT_SAVINGS_PLAN_SRSP</li><li>DEFERRED_PROFIT_SHARING_PLAN_DPSP</li><li>NON_REGISTERED_SAVINGS_PLAN_NRSP</li><li>REGISTERED_EDUCATION_SAVINGS_PLAN_RESP</li><li>GROUP_RETIREMENT_SAVINGS_PLAN_GRSP</li><li>LOCKED_IN_RETIREMENT_SAVINGS_PLAN_LRSP</li><li>RESTRICTED_LOCKED_IN_SAVINGS_PLAN_RLSP</li><li>LOCKED_IN_RETIREMENT_ACCOUNT_LIRA</li><li>REGISTERED_PENSION_PLAN_RPP</li><li>TAX_FREE_SAVINGS_ACCOUNT_TFSA</li><li>LIFE_INCOME_FUND_LIF</li><li>REGISTERED_RETIREMENT_INCOME_FUND_RIF</li><li>SPOUSAL_RETIREMENT_INCOME_FUND_SRIF</li><li>LOCKED_IN_REGISTERED_INVESTMENT_FUND_LRIF</li><li>PRESCRIBED_REGISTERED_RETIREMENT_INCOME_FUND_PRIF</li><li>GUARANTEED_INVESTMENT_CERTIFICATES_GIC</li><li>REGISTERED_DISABILITY_SAVINGS_PLAN_RDSP</li><li>DEFINED_CONTRIBUTION_PLAN</li><li>DEFINED_BENEFIT_PLAN</li><li>EMPLOYEE_STOCK_OPTION_PLAN</li><li>NONQUALIFIED_DEFERRED_COMPENSATION_PLAN_409A</li><li>KEOGH_PLAN</li><li>EMPLOYEE_RETIREMENT_ACCOUNT_ROTH_401K</li><li>DEFERRED_CONTINGENT_CAPITAL_PLAN_DCCP</li><li>EMPLOYEE_BENEFIT_PLAN</li><li>EMPLOYEE_SAVINGS_PLAN</li><li>HEALTH_SAVINGS_ACCOUNT_HSA</li><li>COVERDELL_EDUCATION_SAVINGS_ACCOUNT_ESA</li><li>TESTAMENTARY_TRUST</li><li>ESTATE</li><li>GRANTOR_RETAINED_ANNUITY_TRUST_GRAT</li><li>ADVISORY_ACCOUNT</li><li>NON_PROFIT_ORGANIZATION_501C</li><li>HEALTH_REIMBURSEMENT_ARRANGEMENT_HRA</li><li>INDIVIDUAL_SAVINGS_ACCOUNT_ISA</li><li>CASH_ISA</li><li>STOCKS_AND_SHARES_ISA</li><li>INNOVATIVE_FINANCE_ISA</li><li>JUNIOR_ISA</li><li>EMPLOYEES_PROVIDENT_FUND_ORGANIZATION_EPFO</li><li>PUBLIC_PROVIDENT_FUND_PPF</li><li>EMPLOYEES_PENSION_SCHEME_EPS</li><li>NATIONAL_PENSION_SYSTEM_NPS</li><li>INDEXED_ANNUITY</li><li>ANNUITIZED_ANNUITY</li><li>VARIABLE_ANNUITY</li><li>ROTH_403B</li><li>SPOUSAL_IRA</li><li>SPOUSAL_ROTH_IRA</li><li>SARSEP_IRA</li><li>SUBSTANTIALLY_EQUAL_PERIODIC_PAYMENTS_SEPP</li><li>OFFSHORE_TRUST</li><li>IRREVOCABLE_LIFE_INSURANCE_TRUST</li><li>INTERNATIONAL_TRUST</li><li>LIFE_INTEREST_TRUST</li><li>EMPLOYEE_BENEFIT_TRUST</li><li>PRECIOUS_METAL_ACCOUNT</li><li>INVESTMENT_LOAN_ACCOUNT</li><li>GRANTOR_RETAINED_INCOME_TRUST</li><li>PENSION_PLAN</li><li>OTHER</li></ul><b>loan</b><ul><li>MORTGAGE</li><li>INSTALLMENT_LOAN</li><li>PERSONAL_LOAN</li><li>HOME_EQUITY_LINE_OF_CREDIT</li><li>LINE_OF_CREDIT</li><li>AUTO_LOAN</li><li>STUDENT_LOAN</li><li>HOME_LOAN</li></ul><b>insurance</b><ul><li>AUTO_INSURANCE</li><li>HEALTH_INSURANCE</li><li>HOME_INSURANCE</li><li>LIFE_INSURANCE</li><li>ANNUITY</li><li>TRAVEL_INSURANCE</li><li>INSURANCE</li></ul><b>realEstate</b><ul> <li>REAL_ESTATE</li></ul><b>reward</b><ul><li>REWARD_POINTS</li></ul><b>Manual Account Type</b><br><b>bank</b><ul><li>CHECKING</li><li>SAVINGS</li><li>CD</li><li>PREPAID</li></ul><b>credit</b><ul>  <li>CREDIT</li></ul><b>loan</b><ul>  <li>PERSONAL_LOAN</li><li>HOME_LOAN</li></ul><b>insurance</b><ul><li>INSURANCE</li><li>ANNUITY</li></ul><b>investment</b><ul><li>BROKERAGE_CASH</li></ul><br><br><b>Aggregated / Manual</b>: Both <br><b>Applicable containers</b>: All containers<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul> */
		accountType?: string | null;
		address?: AccountAddress;

		/** The source through which the account(s) are added in the system.<br><b>Valid Values</b>: SYSTEM, USER<br><b>Applicable containers</b>: All Containers<br><b>Aggregated / Manual</b>: Both <br><b>Endpoints</b>:<br><ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul><b>Applicable Values</b><br> */
		aggregationSource?: AccountAggregationSource | null;
		amountDue?: Money;

		/**
		 * Annual percentage yield (APY) is a normalized representation of an interest rate, based on a compounding period of one year. APY generally refers to the rate paid to a depositor by a financial institution on an account.<br><b>Applicable containers</b>: bank<br><b>Aggregated / Manual</b>: Aggregated<br><b>Endpoints</b>:<br><ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>
		 * Type: double
		 */
		annualPercentageYield?: number | null;
		annuityBalance?: Money;

		/**
		 * The annual percentage rate (APR) is the yearly rate of interest on the credit card account.<br><b>Additional Details:</b> The yearly percentage rate charged when a balance is held on a credit card. This rate of interest is applied every month on the outstanding credit card balance.<br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: creditCard<br><b>Endpoints</b>:<br><ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>
		 * Type: double
		 */
		apr?: number | null;

		/** The providerAccountIds that share the account with the primary providerAccountId that was created when the user had added the account for the first time.<br><b>Additional Details</b>: This attribute is returned in the response only if the account deduplication feature is enabled and the same account is mapped to more than one provider account IDs indicating the account is owned by more than one user, for example, joint accounts.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: All Containers<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul> */
		associatedProviderAccountId?: Array<number>;
		autoRefresh?: AutoRefresh;
		availableBalance?: Money;
		availableCash?: Money;
		availableCredit?: Money;
		balance?: Money;

		/** Bank and branch identification information.<br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: bank, investment, loan<br><b>Endpoints</b>:<br><ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul> */
		bankTransferCode?: Array<BankTransferCode>;
		cash?: Money;

		/**
		 * Annual percentage rate applied to cash withdrawals on the card.<br><br><b>Account Type</b>: Aggregated<br><b>Applicable containers</b>: creditCard<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>
		 * Type: double
		 */
		cashApr?: number | null;
		cashValue?: Money;

		/** The classification of the account such as personal, corporate, etc.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: bank, creditCard, investment, reward, loan, insurance<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul><b>Applicable Values</b><br> */
		classification?: AccountClassification | null;

		/** Property or possession offered to support a loan that can be seized on a default.<br><b>Applicable containers</b>: loan<br><b>Aggregated / Manual</b>: Aggregated<br><b>Endpoints</b>:<br><ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul> */
		collateral?: string | null;

		/** The coverage-related details of the account.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: insurance,investment<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul> */
		coverage?: Array<Coverage>;

		/** The date on which the account is created in the Yodlee system.<br><b>Additional Details:</b> It is the date when the user links or aggregates the account(s) that are held with the provider to the Yodlee system.<br><br><b>Aggregated / Manual</b>: Both <br><b>Applicable containers</b>: All containers<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul> */
		createdDate?: string | null;
		currentBalance?: Money;

		/** Current level of the reward program the user is associated with. E.g. Silver, Jade etc.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: reward<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul> */
		currentLevel?: string | null;

		/** Logical grouping of dataset attributes into datasets such as Basic Aggregation Data, Account Profile and Documents.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: All containers<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul> */
		dataset?: Array<AccountDataset>;
		deathBenefit?: Money;

		/**
		 * Derived APR will be an estimated purchase APR based on consumers credit card transactions and credit card purchase.<br><b>Aggregated / Manual / Derived</b>: Derived<br><b>Applicable containers</b>: creditCard<br><b>Endpoints</b>:<br><ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>
		 * Type: double
		 */
		derivedApr?: number | null;

		/** The name or identification of the account owner, as it appears at the FI site. <br><b>Note:</b> The account holder name can be full or partial based on how it is displayed in the account summary page of the FI site. In most cases, the FI site does not display the full account holder name in the account summary page.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: bank, creditCard, investment, insurance, loan,  reward<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul> */
		displayedName?: string | null;

		/** The date on which the due amount has to be paid. <br><b>Additional Details:</b><br><b>Credit Card:</b> The monthly date by when the minimum payment is due to be paid on the credit card account. <br><b>Loan:</b> The date on or before which the due amount should be paid.<br><b>Note:</b> The due date at the account-level can differ from the due date field at the statement-level, as the information in the aggregated card account data provides an up-to-date information to the consumer.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: creditCard, loan, insurance<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul> */
		dueDate?: string | null;

		/** Date on which the user is enrolled on the rewards program.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: reward<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul> */
		enrollmentDate?: string | null;
		escrowBalance?: Money;

		/** The date on which the home value was estimated.<br><br><b>Aggregated / Manual</b>: Manual<br><b>Applicable containers</b>: realEstate<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul> */
		estimatedDate?: string | null;

		/** The date on which the insurance policy expires or matures.<br><b>Additional Details:</b> The due date at the account-level can differ from the due date field at the statement-level, as the information in the aggregated card account data provides an up-to-date information to the consumer.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: insurance<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul> */
		expirationDate?: string | null;
		faceAmount?: Money;

		/** The frequency of the billing cycle of the account in case of card. The frequency in which premiums are paid in an insurance policy such as monthly, quarterly, and annually. The frequency in which due amounts are paid in a loan  account.<br><br><b>Aggregated / Manual</b>: Both <br><b>Applicable containers</b>:  creditCard, insurance, loan<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul><b>Applicable Values</b><br> */
		frequency?: AccountFrequency | null;

		/** Full account number of the account that is included only when include = fullAccountNumber is provided in the request. For student loan account the account number that will be used for ACH or fund transfer<br><br><b>Aggregated / Manual</b>: Both <br><b>Applicable containers</b>: bank, creditCard, investment, insurance, loan, reward,  otherAssets, otherLiabilities <br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><b> Note : </b> fullAccountNumber is deprecated and is replaced with fullAccountNumberList in include parameter and response.</ul> */
		fullAccountNumber?: string | null;
		fullAccountNumberList?: FullAccountNumberList;

		/** A nonprofit or state organization that works with lender, servicer, school, and the Department of Education to help successfully repay Federal Family Education Loan Program (FFELP) loans. If FFELP student loans default, the guarantor takes ownership of them.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: loan<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul> */
		guarantor?: string | null;

		/** Holder details of the account.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: bank<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li></ul> */
		holder?: Array<AccountHolder>;

		/** Type of home insurance, like -<ul><li>HOME_OWNER</li><li>RENTAL</li><li>RENTER</li><li>etc..</li></ul><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: insurance<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul><b>Applicable Values</b><br> */
		homeInsuranceType?: AccountHomeInsuranceType | null;
		homeValue?: Money;

		/**
		 * The primary key of the account resource and the unique identifier for the account.<br><br><b>Aggregated / Manual</b>: Both <br><b>Applicable containers</b>: All containers<br><b>Endpoints</b>:<ul><li>GET accounts </li><li>GET accounts/{accountId}</li><li>GET investmentOptions</li><li>GET accounts/historicalBalances</li><li>POST accounts</li><li>GET dataExtracts/userData</li></ul>
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		id?: string | null;

		/** Used to determine  whether an account to be considered in the networth calculation.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: bank,creditCard,loan,investment,insurance,realEstate,otherAssets,otherLiabilities<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul> */
		includeInNetWorth?: boolean | null;
		interestPaidLastYear?: Money;
		interestPaidYTD?: Money;

		/**
		 * <br><b>Bank:</b> The interest rate offered by a FI to its depositors on a bank account.<br><b>Loan:</b> Interest rate applied on the loan.<br><b>Additional Details:</b><br><b>Note:</b> The Interest Rate field is only applicable for the following account types: savings, checking, money market, and certificate of deposit.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: bank, loan<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>
		 * Type: double
		 */
		interestRate?: number | null;

		/** The type of the interest rate, for example, fixed or variable.<br><b>Applicable containers</b>: loan<br><b>Aggregated / Manual</b>: Aggregated<br><b>Endpoints</b>:<br><ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul><b>Applicable Values</b><br> */
		interestRateType?: AccountInterestRateType | null;

		/** The account to be considered as an asset or liability.<br><b>Applicable containers</b>: All Containers<br><b>Aggregated / Manual</b>: Both <br><b>Endpoints</b>:<br><ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul> */
		isAsset?: boolean | null;

		/** Indicates if an account is aggregated from a site or it is a manual account i.e. account information manually provided by the user.<br><b>Aggregated / Manual</b>: Both <br><b>Applicable containers</b>: All containers<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul> */
		isManual?: boolean | null;
		lastEmployeeContributionAmount?: Money;

		/** The date on which the last employee contribution was made to the 401k account.<br><b>Note:</b> The last employee contribution date field is derived from the transaction data and not aggregated from the FI site. The field is only applicable to the 401k account type.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: investment<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul> */
		lastEmployeeContributionDate?: string | null;
		lastPayment?: Money;
		lastPaymentAmount?: Money;

		/** The date on which the payment for the previous or current billing cycle is done.<br><b>Additional Details:</b> If the payment is already done for the current billing cycle, then the field indicates the payment date of the current billing cycle. If payment is yet to be done for the current billing cycle, then the field indicates the date on which the payment was made for any of the previous billing cycles. The last payment date at the account-level can differ from the last payment date at the statement-level, as the information in the aggregated card account data provides an up-to-date information to the consumer.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: creditCard, loan, insurance<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul> */
		lastPaymentDate?: string | null;

		/** The date time the account information was last retrieved from the provider site and updated in the Yodlee system.<br><br><b>Aggregated / Manual</b>: Both <br><b>Applicable containers</b>: All containers<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul> */
		lastUpdated?: string | null;

		/** The financial institution that provides the loan.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: loan<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul> */
		lender?: string | null;

		/** Type of life insurance.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: insurance<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul><b>Applicable Values</b><br> */
		lifeInsuranceType?: AccountLifeInsuranceType | null;

		/** The date by which the payoff amount should be paid.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: loan<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul> */
		loanPayByDate?: string | null;
		loanPayoffAmount?: Money;
		loanPayoffDetails?: LoanPayoffDetails;
		marginBalance?: Money;
		maturityAmount?: Money;

		/** The date when a certificate of deposit (CD/FD) matures or the final payment date of a loan at which point the principal amount (including pending interest) is due to be paid.<br><b>Additional Details:</b> The date when a certificate of deposit (CD) matures, i.e., the money in the CD can be withdrawn without paying an early withdrawal penalty.The final payment date of a loan, i.e., the principal amount (including pending interest) is due to be paid.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: bank, loan<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul> */
		maturityDate?: string | null;

		/** The additional description or notes given by the user.<br><br><b>Aggregated / Manual</b>: Both <br><b>Applicable containers</b>: All containers<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul> */
		memo?: string | null;
		minimumAmountDue?: Money;
		moneyMarketBalance?: Money;

		/** The eligible next level of the rewards program.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: reward<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul> */
		nextLevel?: string | null;

		/** The nickname of the account as provided by the consumer to identify an account. The account nickname can be used instead of the account name.<br><br><b>Aggregated / Manual</b>: Both <br><b>Applicable containers</b>: All containers<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul> */
		nickname?: string | null;

		/** Indicates the migration status of the account from screen-scraping provider to the Open Banking provider. <br><br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul> */
		oauthMigrationStatus?: AccountOauthMigrationStatus | null;
		originalLoanAmount?: Money;

		/** The date on which the loan is disbursed.<br><br><b>Aggregated / Manual</b>: Both <br><b>Applicable containers</b>: loan<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul> */
		originationDate?: string | null;
		overDraftLimit?: Money;
		paymentProfile?: PaymentProfile;

		/** The date on which the insurance policy coverage commences.<br><b>Applicable containers</b>: insurance<br><b>Aggregated / Manual</b>: Aggregated<br><b>Endpoints</b>:<br><ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul> */
		policyEffectiveDate?: string | null;

		/** The date the insurance policy began.<br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: insurance<br><b>Endpoints</b>:<br><ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul> */
		policyFromDate?: string | null;

		/** The status of the policy.<br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: insurance<br><b>Endpoints</b>:<br><ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul><b>Applicable Values</b><br> */
		policyStatus?: AccountPolicyStatus | null;

		/** The duration for which the policy is valid or in effect. For example, one year, five years, etc.<br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: insurance<br><b>Endpoints</b>:<br><ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul> */
		policyTerm?: string | null;

		/** The date to which the policy exists.<br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: insurance<br><b>Endpoints</b>:<br><ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul> */
		policyToDate?: string | null;
		premium?: Money;

		/** The number of years for which premium payments have to be made in a policy.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: insurance<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul> */
		premiumPaymentTerm?: string | null;

		/** Primary reward unit for this reward program. E.g. miles, points, etc.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: reward<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul> */
		primaryRewardUnit?: string | null;
		principalBalance?: Money;
		profile?: AccountProfile;

		/**
		 * The primary key of the provider account resource.<br><br><b>Aggregated / Manual</b>: Both <br><b>Applicable containers</b>: All containers<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		providerAccountId?: string | null;

		/** Identifier of the provider site. The primary key of provider resource. <br><br><b>Aggregated / Manual</b>: Both <br><b>Applicable containers</b>: All containers<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul> */
		providerId?: string | null;

		/** Service provider or institution name where the account originates. This belongs to the provider resource.<br><br><b>Aggregated / Manual</b>: Both <br><b>Applicable containers</b>: All containers<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul> */
		providerName?: string | null;
		recurringPayment?: Money;
		remainingBalance?: Money;

		/** The type of repayment plan that the borrower prefers to repay the loan. <br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: loan<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul><b>Applicable Values:</b><br> */
		repaymentPlanType?: AccountRepaymentPlanType | null;

		/** Information of different reward balances associated with the account.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: reward<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul> */
		rewardBalance?: Array<RewardBalance>;
		runningBalance?: Money;
		shortBalance?: Money;

		/** Indicates the status of the loan account. <br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: loan<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul><b>Applicable Values:</b><br> */
		sourceAccountStatus?: AccountSourceAccountStatus | null;

		/** A unique ID that the provider site has assigned to the account. The source ID is only available for the HELD accounts.<br><br><b>Applicable containers</b>: bank, creditCard, investment, insurance, loan,  reward<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul> */
		sourceId?: string | null;

		/** The tenure for which the CD account is valid  or in case of loan, the number of years/months over which the loan amount  has to be repaid. <br><b>Additional Details:</b><br>  Bank: The Term field is only applicable for the account type CD.Loan: The period for which the loan agreement is in force. The period, before or at the end of which, the loan should either be repaid or renegotiated for another term.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: bank, loan<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul> */
		term?: string | null;
		totalCashLimit?: Money;
		totalCreditLimit?: Money;
		totalCreditLine?: Money;
		totalUnvestedBalance?: Money;
		totalVestedBalance?: Money;

		/** <b>Applicable containers</b>: reward, bank, creditCard, investment, loan, insurance, realEstate,  otherLiabilities<br><b>Endpoints</b>:<ul><li>GET accounts </li><li>GET accounts/{accountId}</li><li>POST accounts</ul><li>GET dataExtracts/userData</li><b>Applicable Values</b><br> */
		userClassification?: AccountUserClassification | null;

		/** The valuation type indicates whether the home value is calculated either manually or by Yodlee Partners.<br><br><b>Aggregated / Manual</b>: Manual<br><b>Applicable containers</b>: realEstate<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul><b>Applicable Values</b><br> */
		valuationType?: AccountValuationType | null;
	}
	export interface AccountFormProperties {

		/** The type of service. E.g., Bank, Credit Card, Investment, Insurance, etc.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: All containers<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul><b>Applicable Values</b><br> */
		CONTAINER: FormControl<AccountCONTAINER | null | undefined>,

		/** The account name as it appears at the site.<br>(The POST accounts service response return this field as name)<br><b>Applicable containers</b>: All Containers<br><b>Aggregated / Manual</b>: Both <br><b>Endpoints</b>:<br><ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul> */
		accountName: FormControl<string | null | undefined>,

		/** The account number as it appears on the site. (The POST accounts service response return this field as number)<br><b>Additional Details</b>:<b> Bank/ Loan/ Insurance/ Investment</b>:<br> The account number for the bank account as it appears at the site.<br><b>Credit Card</b>: The account number of the card account as it appears at the site,<br>i.e., the card number.The account number can be full or partial based on how it is displayed in the account summary page of the site.In most cases, the site does not display the full account number in the account summary page and additional navigation is required to aggregate it.<br><b>Applicable containers</b>: All Containers<br><b>Aggregated / Manual</b>: Both <br><b>Endpoints</b>:<br><ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>POST accounts</li><li>GET dataExtracts/userData</li></ul> */
		accountNumber: FormControl<string | null | undefined>,

		/** The status of the account that is updated by the consumer through an application or an API. Valid Values: AccountStatus<br><b>Additional Details:</b><br><b>ACTIVE:</b> All the added manual and aggregated accounts status will be made "ACTIVE" by default. <br><b>TO_BE_CLOSED:</b> If the aggregated accounts are not found or closed in the data provider site, Yodlee system marks the status as TO_BE_CLOSED<br><b>INACTIVE:</b> Users can update the status as INACTIVE to stop updating and to stop considering the account in other services<br><b>CLOSED:</b> Users can update the status as CLOSED, if the account is closed with the provider. <br><br><b>Aggregated / Manual</b>: Both <br><b>Applicable containers</b>: All containers<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul><b>Applicable Values</b><br> */
		accountStatus: FormControl<AccountAccountStatus | null | undefined>,

		/** The type of account that is aggregated, i.e., savings, checking, credit card, charge, HELOC, etc. The account type is derived based on the attributes of the account. <br><b>Valid Values:</b><br><b>Aggregated Account Type</b><br><b>bank</b><ul><li>CHECKING</li><li>SAVINGS</li><li>CD</li><li>PPF</li><li>RECURRING_DEPOSIT</li><li>FSA</li><li>MONEY_MARKET</li><li>IRA</li><li>PREPAID</li></ul><b>creditCard</b><ul><li>OTHER</li><li>CREDIT</li><li>STORE</li><li>CHARGE</li><li>OTHER</li></ul><b>investment (SN 1.0)</b><ul><li>BROKERAGE_MARGIN</li><li>HSA</li><li>IRA</li><li>BROKERAGE_CASH</li><li>401K</li><li>403B</li><li>TRUST</li><li>ANNUITY</li><li>SIMPLE</li><li>CUSTODIAL</li><li>BROKERAGE_CASH_OPTION</li><li>BROKERAGE_MARGIN_OPTION</li><li>INDIVIDUAL</li><li>CORPORATE</li><li>JTTIC</li><li>JTWROS</li><li>COMMUNITY_PROPERTY</li><li>JOINT_BY_ENTIRETY</li><li>CONSERVATORSHIP</li><li>ROTH</li><li>ROTH_CONVERSION</li><li>ROLLOVER</li><li>EDUCATIONAL</li><li>529_PLAN</li><li>457_DEFERRED_COMPENSATION</li><li>401A</li><li>PSP</li><li>MPP</li><li>STOCK_BASKET</li><li>LIVING_TRUST</li><li>REVOCABLE_TRUST</li><li>IRREVOCABLE_TRUST</li><li>CHARITABLE_REMAINDER</li><li>CHARITABLE_LEAD</li><li>CHARITABLE_GIFT_ACCOUNT</li><li>SEP</li><li>UTMA</li><li>UGMA</li><li>ESOPP</li><li>ADMINISTRATOR</li><li>EXECUTOR</li><li>PARTNERSHIP</li><li>SOLE_PROPRIETORSHIP</li><li>CHURCH</li><li>INVESTMENT_CLUB</li><li>RESTRICTED_STOCK_AWARD</li><li>CMA</li><li>EMPLOYEE_STOCK_PURCHASE_PLAN</li><li>PERFORMANCE_PLAN</li><li>BROKERAGE_LINK_ACCOUNT</li><li>MONEY_MARKET</li><li>SUPER_ANNUATION</li><li>REGISTERED_RETIREMENT_SAVINGS_PLAN</li><li>SPOUSAL_RETIREMENT_SAVINGS_PLAN</li><li>DEFERRED_PROFIT_SHARING_PLAN</li><li>NON_REGISTERED_SAVINGS_PLAN</li><li>REGISTERED_EDUCATION_SAVINGS_PLAN</li><li>GROUP_RETIREMENT_SAVINGS_PLAN</li><li>LOCKED_IN_RETIREMENT_SAVINGS_PLAN</li><li>RESTRICTED_LOCKED_IN_SAVINGS_PLAN</li><li>LOCKED_IN_RETIREMENT_ACCOUNT</li><li>REGISTERED_PENSION_PLAN</li><li>TAX_FREE_SAVINGS_ACCOUNT</li><li>LIFE_INCOME_FUND</li><li>REGISTERED_RETIREMENT_INCOME_FUND</li><li>SPOUSAL_RETIREMENT_INCOME_FUND</li><li>LOCKED_IN_REGISTERED_INVESTMENT_FUND</li><li>PRESCRIBED_REGISTERED_RETIREMENT_INCOME_FUND</li><li>GUARANTEED_INVESTMENT_CERTIFICATES</li><li>REGISTERED_DISABILITY_SAVINGS_PLAN</li><li>OTHER</li></ul><b>investment (SN 2.0)</b><ul><li>BROKERAGE_CASH</li><li>BROKERAGE_MARGIN</li><li>INDIVIDUAL_RETIREMENT_ACCOUNT_IRA</li><li>EMPLOYEE_RETIREMENT_ACCOUNT_401K</li><li>EMPLOYEE_RETIREMENT_SAVINGS_PLAN_403B</li><li>TRUST</li><li>ANNUITY</li><li>SIMPLE_IRA</li><li>CUSTODIAL_ACCOUNT</li><li>BROKERAGE_CASH_OPTION</li><li>BROKERAGE_MARGIN_OPTION</li><li>INDIVIDUAL</li><li>CORPORATE_INVESTMENT_ACCOUNT</li><li>JOINT_TENANTS_TENANCY_IN_COMMON_JTIC</li><li>JOINT_TENANTS_WITH_RIGHTS_OF_SURVIVORSHIP_JTWROS</li><li>JOINT_TENANTS_COMMUNITY_PROPERTY</li><li>JOINT_TENANTS_TENANTS_BY_ENTIRETY</li><li>CONSERVATOR</li><li>ROTH_IRA</li><li>ROTH_CONVERSION</li><li>ROLLOVER_IRA</li><li>EDUCATIONAL</li><li>EDUCATIONAL_SAVINGS_PLAN_529</li><li>DEFERRED_COMPENSATION_PLAN_457</li><li>MONEY_PURCHASE_RETIREMENT_PLAN_401A</li><li>PROFIT_SHARING_PLAN</li><li>MONEY_PURCHASE_PLAN</li><li>STOCK_BASKET_ACCOUNT</li><li>LIVING_TRUST</li><li>REVOCABLE_TRUST</li><li>IRREVOCABLE_TRUST</li><li>CHARITABLE_REMAINDER_TRUST</li><li>CHARITABLE_LEAD_TRUST</li><li>CHARITABLE_GIFT_ACCOUNT</li><li>SEP_IRA</li><li>UNIFORM_TRANSFER_TO_MINORS_ACT_UTMA</li><li>UNIFORM_GIFT_TO_MINORS_ACT_UGMA</li><li>EMPLOYEE_STOCK_OWNERSHIP_PLAN_ESOP</li><li>ADMINISTRATOR</li><li>EXECUTOR</li><li>PARTNERSHIP</li><li>PROPRIETORSHIP</li><li>CHURCH_ACCOUNT</li><li>INVESTMENT_CLUB</li><li>RESTRICTED_STOCK_AWARD</li><li>CASH_MANAGEMENT_ACCOUNT</li><li>EMPLOYEE_STOCK_PURCHASE_PLAN_ESPP</li><li>PERFORMANCE_PLAN</li><li>BROKERAGE_LINK_ACCOUNT</li><li>MONEY_MARKET_ACCOUNT</li><li>SUPERANNUATION</li><li>REGISTERED_RETIREMENT_SAVINGS_PLAN_RRSP</li><li>SPOUSAL_RETIREMENT_SAVINGS_PLAN_SRSP</li><li>DEFERRED_PROFIT_SHARING_PLAN_DPSP</li><li>NON_REGISTERED_SAVINGS_PLAN_NRSP</li><li>REGISTERED_EDUCATION_SAVINGS_PLAN_RESP</li><li>GROUP_RETIREMENT_SAVINGS_PLAN_GRSP</li><li>LOCKED_IN_RETIREMENT_SAVINGS_PLAN_LRSP</li><li>RESTRICTED_LOCKED_IN_SAVINGS_PLAN_RLSP</li><li>LOCKED_IN_RETIREMENT_ACCOUNT_LIRA</li><li>REGISTERED_PENSION_PLAN_RPP</li><li>TAX_FREE_SAVINGS_ACCOUNT_TFSA</li><li>LIFE_INCOME_FUND_LIF</li><li>REGISTERED_RETIREMENT_INCOME_FUND_RIF</li><li>SPOUSAL_RETIREMENT_INCOME_FUND_SRIF</li><li>LOCKED_IN_REGISTERED_INVESTMENT_FUND_LRIF</li><li>PRESCRIBED_REGISTERED_RETIREMENT_INCOME_FUND_PRIF</li><li>GUARANTEED_INVESTMENT_CERTIFICATES_GIC</li><li>REGISTERED_DISABILITY_SAVINGS_PLAN_RDSP</li><li>DEFINED_CONTRIBUTION_PLAN</li><li>DEFINED_BENEFIT_PLAN</li><li>EMPLOYEE_STOCK_OPTION_PLAN</li><li>NONQUALIFIED_DEFERRED_COMPENSATION_PLAN_409A</li><li>KEOGH_PLAN</li><li>EMPLOYEE_RETIREMENT_ACCOUNT_ROTH_401K</li><li>DEFERRED_CONTINGENT_CAPITAL_PLAN_DCCP</li><li>EMPLOYEE_BENEFIT_PLAN</li><li>EMPLOYEE_SAVINGS_PLAN</li><li>HEALTH_SAVINGS_ACCOUNT_HSA</li><li>COVERDELL_EDUCATION_SAVINGS_ACCOUNT_ESA</li><li>TESTAMENTARY_TRUST</li><li>ESTATE</li><li>GRANTOR_RETAINED_ANNUITY_TRUST_GRAT</li><li>ADVISORY_ACCOUNT</li><li>NON_PROFIT_ORGANIZATION_501C</li><li>HEALTH_REIMBURSEMENT_ARRANGEMENT_HRA</li><li>INDIVIDUAL_SAVINGS_ACCOUNT_ISA</li><li>CASH_ISA</li><li>STOCKS_AND_SHARES_ISA</li><li>INNOVATIVE_FINANCE_ISA</li><li>JUNIOR_ISA</li><li>EMPLOYEES_PROVIDENT_FUND_ORGANIZATION_EPFO</li><li>PUBLIC_PROVIDENT_FUND_PPF</li><li>EMPLOYEES_PENSION_SCHEME_EPS</li><li>NATIONAL_PENSION_SYSTEM_NPS</li><li>INDEXED_ANNUITY</li><li>ANNUITIZED_ANNUITY</li><li>VARIABLE_ANNUITY</li><li>ROTH_403B</li><li>SPOUSAL_IRA</li><li>SPOUSAL_ROTH_IRA</li><li>SARSEP_IRA</li><li>SUBSTANTIALLY_EQUAL_PERIODIC_PAYMENTS_SEPP</li><li>OFFSHORE_TRUST</li><li>IRREVOCABLE_LIFE_INSURANCE_TRUST</li><li>INTERNATIONAL_TRUST</li><li>LIFE_INTEREST_TRUST</li><li>EMPLOYEE_BENEFIT_TRUST</li><li>PRECIOUS_METAL_ACCOUNT</li><li>INVESTMENT_LOAN_ACCOUNT</li><li>GRANTOR_RETAINED_INCOME_TRUST</li><li>PENSION_PLAN</li><li>OTHER</li></ul><b>loan</b><ul><li>MORTGAGE</li><li>INSTALLMENT_LOAN</li><li>PERSONAL_LOAN</li><li>HOME_EQUITY_LINE_OF_CREDIT</li><li>LINE_OF_CREDIT</li><li>AUTO_LOAN</li><li>STUDENT_LOAN</li><li>HOME_LOAN</li></ul><b>insurance</b><ul><li>AUTO_INSURANCE</li><li>HEALTH_INSURANCE</li><li>HOME_INSURANCE</li><li>LIFE_INSURANCE</li><li>ANNUITY</li><li>TRAVEL_INSURANCE</li><li>INSURANCE</li></ul><b>realEstate</b><ul> <li>REAL_ESTATE</li></ul><b>reward</b><ul><li>REWARD_POINTS</li></ul><b>Manual Account Type</b><br><b>bank</b><ul><li>CHECKING</li><li>SAVINGS</li><li>CD</li><li>PREPAID</li></ul><b>credit</b><ul>  <li>CREDIT</li></ul><b>loan</b><ul>  <li>PERSONAL_LOAN</li><li>HOME_LOAN</li></ul><b>insurance</b><ul><li>INSURANCE</li><li>ANNUITY</li></ul><b>investment</b><ul><li>BROKERAGE_CASH</li></ul><br><br><b>Aggregated / Manual</b>: Both <br><b>Applicable containers</b>: All containers<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul> */
		accountType: FormControl<string | null | undefined>,

		/** The source through which the account(s) are added in the system.<br><b>Valid Values</b>: SYSTEM, USER<br><b>Applicable containers</b>: All Containers<br><b>Aggregated / Manual</b>: Both <br><b>Endpoints</b>:<br><ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul><b>Applicable Values</b><br> */
		aggregationSource: FormControl<AccountAggregationSource | null | undefined>,

		/**
		 * Annual percentage yield (APY) is a normalized representation of an interest rate, based on a compounding period of one year. APY generally refers to the rate paid to a depositor by a financial institution on an account.<br><b>Applicable containers</b>: bank<br><b>Aggregated / Manual</b>: Aggregated<br><b>Endpoints</b>:<br><ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>
		 * Type: double
		 */
		annualPercentageYield: FormControl<number | null | undefined>,

		/**
		 * The annual percentage rate (APR) is the yearly rate of interest on the credit card account.<br><b>Additional Details:</b> The yearly percentage rate charged when a balance is held on a credit card. This rate of interest is applied every month on the outstanding credit card balance.<br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: creditCard<br><b>Endpoints</b>:<br><ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>
		 * Type: double
		 */
		apr: FormControl<number | null | undefined>,

		/**
		 * Annual percentage rate applied to cash withdrawals on the card.<br><br><b>Account Type</b>: Aggregated<br><b>Applicable containers</b>: creditCard<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>
		 * Type: double
		 */
		cashApr: FormControl<number | null | undefined>,

		/** The classification of the account such as personal, corporate, etc.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: bank, creditCard, investment, reward, loan, insurance<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul><b>Applicable Values</b><br> */
		classification: FormControl<AccountClassification | null | undefined>,

		/** Property or possession offered to support a loan that can be seized on a default.<br><b>Applicable containers</b>: loan<br><b>Aggregated / Manual</b>: Aggregated<br><b>Endpoints</b>:<br><ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul> */
		collateral: FormControl<string | null | undefined>,

		/** The date on which the account is created in the Yodlee system.<br><b>Additional Details:</b> It is the date when the user links or aggregates the account(s) that are held with the provider to the Yodlee system.<br><br><b>Aggregated / Manual</b>: Both <br><b>Applicable containers</b>: All containers<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul> */
		createdDate: FormControl<string | null | undefined>,

		/** Current level of the reward program the user is associated with. E.g. Silver, Jade etc.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: reward<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul> */
		currentLevel: FormControl<string | null | undefined>,

		/**
		 * Derived APR will be an estimated purchase APR based on consumers credit card transactions and credit card purchase.<br><b>Aggregated / Manual / Derived</b>: Derived<br><b>Applicable containers</b>: creditCard<br><b>Endpoints</b>:<br><ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>
		 * Type: double
		 */
		derivedApr: FormControl<number | null | undefined>,

		/** The name or identification of the account owner, as it appears at the FI site. <br><b>Note:</b> The account holder name can be full or partial based on how it is displayed in the account summary page of the FI site. In most cases, the FI site does not display the full account holder name in the account summary page.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: bank, creditCard, investment, insurance, loan,  reward<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul> */
		displayedName: FormControl<string | null | undefined>,

		/** The date on which the due amount has to be paid. <br><b>Additional Details:</b><br><b>Credit Card:</b> The monthly date by when the minimum payment is due to be paid on the credit card account. <br><b>Loan:</b> The date on or before which the due amount should be paid.<br><b>Note:</b> The due date at the account-level can differ from the due date field at the statement-level, as the information in the aggregated card account data provides an up-to-date information to the consumer.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: creditCard, loan, insurance<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul> */
		dueDate: FormControl<string | null | undefined>,

		/** Date on which the user is enrolled on the rewards program.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: reward<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul> */
		enrollmentDate: FormControl<string | null | undefined>,

		/** The date on which the home value was estimated.<br><br><b>Aggregated / Manual</b>: Manual<br><b>Applicable containers</b>: realEstate<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul> */
		estimatedDate: FormControl<string | null | undefined>,

		/** The date on which the insurance policy expires or matures.<br><b>Additional Details:</b> The due date at the account-level can differ from the due date field at the statement-level, as the information in the aggregated card account data provides an up-to-date information to the consumer.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: insurance<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul> */
		expirationDate: FormControl<string | null | undefined>,

		/** The frequency of the billing cycle of the account in case of card. The frequency in which premiums are paid in an insurance policy such as monthly, quarterly, and annually. The frequency in which due amounts are paid in a loan  account.<br><br><b>Aggregated / Manual</b>: Both <br><b>Applicable containers</b>:  creditCard, insurance, loan<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul><b>Applicable Values</b><br> */
		frequency: FormControl<AccountFrequency | null | undefined>,

		/** Full account number of the account that is included only when include = fullAccountNumber is provided in the request. For student loan account the account number that will be used for ACH or fund transfer<br><br><b>Aggregated / Manual</b>: Both <br><b>Applicable containers</b>: bank, creditCard, investment, insurance, loan, reward,  otherAssets, otherLiabilities <br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><b> Note : </b> fullAccountNumber is deprecated and is replaced with fullAccountNumberList in include parameter and response.</ul> */
		fullAccountNumber: FormControl<string | null | undefined>,

		/** A nonprofit or state organization that works with lender, servicer, school, and the Department of Education to help successfully repay Federal Family Education Loan Program (FFELP) loans. If FFELP student loans default, the guarantor takes ownership of them.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: loan<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul> */
		guarantor: FormControl<string | null | undefined>,

		/** Type of home insurance, like -<ul><li>HOME_OWNER</li><li>RENTAL</li><li>RENTER</li><li>etc..</li></ul><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: insurance<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul><b>Applicable Values</b><br> */
		homeInsuranceType: FormControl<AccountHomeInsuranceType | null | undefined>,

		/**
		 * The primary key of the account resource and the unique identifier for the account.<br><br><b>Aggregated / Manual</b>: Both <br><b>Applicable containers</b>: All containers<br><b>Endpoints</b>:<ul><li>GET accounts </li><li>GET accounts/{accountId}</li><li>GET investmentOptions</li><li>GET accounts/historicalBalances</li><li>POST accounts</li><li>GET dataExtracts/userData</li></ul>
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		id: FormControl<string | null | undefined>,

		/** Used to determine  whether an account to be considered in the networth calculation.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: bank,creditCard,loan,investment,insurance,realEstate,otherAssets,otherLiabilities<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul> */
		includeInNetWorth: FormControl<boolean | null | undefined>,

		/**
		 * <br><b>Bank:</b> The interest rate offered by a FI to its depositors on a bank account.<br><b>Loan:</b> Interest rate applied on the loan.<br><b>Additional Details:</b><br><b>Note:</b> The Interest Rate field is only applicable for the following account types: savings, checking, money market, and certificate of deposit.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: bank, loan<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>
		 * Type: double
		 */
		interestRate: FormControl<number | null | undefined>,

		/** The type of the interest rate, for example, fixed or variable.<br><b>Applicable containers</b>: loan<br><b>Aggregated / Manual</b>: Aggregated<br><b>Endpoints</b>:<br><ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul><b>Applicable Values</b><br> */
		interestRateType: FormControl<AccountInterestRateType | null | undefined>,

		/** The account to be considered as an asset or liability.<br><b>Applicable containers</b>: All Containers<br><b>Aggregated / Manual</b>: Both <br><b>Endpoints</b>:<br><ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul> */
		isAsset: FormControl<boolean | null | undefined>,

		/** Indicates if an account is aggregated from a site or it is a manual account i.e. account information manually provided by the user.<br><b>Aggregated / Manual</b>: Both <br><b>Applicable containers</b>: All containers<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul> */
		isManual: FormControl<boolean | null | undefined>,

		/** The date on which the last employee contribution was made to the 401k account.<br><b>Note:</b> The last employee contribution date field is derived from the transaction data and not aggregated from the FI site. The field is only applicable to the 401k account type.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: investment<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul> */
		lastEmployeeContributionDate: FormControl<string | null | undefined>,

		/** The date on which the payment for the previous or current billing cycle is done.<br><b>Additional Details:</b> If the payment is already done for the current billing cycle, then the field indicates the payment date of the current billing cycle. If payment is yet to be done for the current billing cycle, then the field indicates the date on which the payment was made for any of the previous billing cycles. The last payment date at the account-level can differ from the last payment date at the statement-level, as the information in the aggregated card account data provides an up-to-date information to the consumer.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: creditCard, loan, insurance<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul> */
		lastPaymentDate: FormControl<string | null | undefined>,

		/** The date time the account information was last retrieved from the provider site and updated in the Yodlee system.<br><br><b>Aggregated / Manual</b>: Both <br><b>Applicable containers</b>: All containers<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul> */
		lastUpdated: FormControl<string | null | undefined>,

		/** The financial institution that provides the loan.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: loan<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul> */
		lender: FormControl<string | null | undefined>,

		/** Type of life insurance.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: insurance<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul><b>Applicable Values</b><br> */
		lifeInsuranceType: FormControl<AccountLifeInsuranceType | null | undefined>,

		/** The date by which the payoff amount should be paid.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: loan<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul> */
		loanPayByDate: FormControl<string | null | undefined>,

		/** The date when a certificate of deposit (CD/FD) matures or the final payment date of a loan at which point the principal amount (including pending interest) is due to be paid.<br><b>Additional Details:</b> The date when a certificate of deposit (CD) matures, i.e., the money in the CD can be withdrawn without paying an early withdrawal penalty.The final payment date of a loan, i.e., the principal amount (including pending interest) is due to be paid.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: bank, loan<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul> */
		maturityDate: FormControl<string | null | undefined>,

		/** The additional description or notes given by the user.<br><br><b>Aggregated / Manual</b>: Both <br><b>Applicable containers</b>: All containers<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul> */
		memo: FormControl<string | null | undefined>,

		/** The eligible next level of the rewards program.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: reward<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul> */
		nextLevel: FormControl<string | null | undefined>,

		/** The nickname of the account as provided by the consumer to identify an account. The account nickname can be used instead of the account name.<br><br><b>Aggregated / Manual</b>: Both <br><b>Applicable containers</b>: All containers<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul> */
		nickname: FormControl<string | null | undefined>,

		/** Indicates the migration status of the account from screen-scraping provider to the Open Banking provider. <br><br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul> */
		oauthMigrationStatus: FormControl<AccountOauthMigrationStatus | null | undefined>,

		/** The date on which the loan is disbursed.<br><br><b>Aggregated / Manual</b>: Both <br><b>Applicable containers</b>: loan<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul> */
		originationDate: FormControl<string | null | undefined>,

		/** The date on which the insurance policy coverage commences.<br><b>Applicable containers</b>: insurance<br><b>Aggregated / Manual</b>: Aggregated<br><b>Endpoints</b>:<br><ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul> */
		policyEffectiveDate: FormControl<string | null | undefined>,

		/** The date the insurance policy began.<br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: insurance<br><b>Endpoints</b>:<br><ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul> */
		policyFromDate: FormControl<string | null | undefined>,

		/** The status of the policy.<br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: insurance<br><b>Endpoints</b>:<br><ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul><b>Applicable Values</b><br> */
		policyStatus: FormControl<AccountPolicyStatus | null | undefined>,

		/** The duration for which the policy is valid or in effect. For example, one year, five years, etc.<br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: insurance<br><b>Endpoints</b>:<br><ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul> */
		policyTerm: FormControl<string | null | undefined>,

		/** The date to which the policy exists.<br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: insurance<br><b>Endpoints</b>:<br><ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul> */
		policyToDate: FormControl<string | null | undefined>,

		/** The number of years for which premium payments have to be made in a policy.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: insurance<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul> */
		premiumPaymentTerm: FormControl<string | null | undefined>,

		/** Primary reward unit for this reward program. E.g. miles, points, etc.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: reward<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul> */
		primaryRewardUnit: FormControl<string | null | undefined>,

		/**
		 * The primary key of the provider account resource.<br><br><b>Aggregated / Manual</b>: Both <br><b>Applicable containers</b>: All containers<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		providerAccountId: FormControl<string | null | undefined>,

		/** Identifier of the provider site. The primary key of provider resource. <br><br><b>Aggregated / Manual</b>: Both <br><b>Applicable containers</b>: All containers<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul> */
		providerId: FormControl<string | null | undefined>,

		/** Service provider or institution name where the account originates. This belongs to the provider resource.<br><br><b>Aggregated / Manual</b>: Both <br><b>Applicable containers</b>: All containers<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul> */
		providerName: FormControl<string | null | undefined>,

		/** The type of repayment plan that the borrower prefers to repay the loan. <br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: loan<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul><b>Applicable Values:</b><br> */
		repaymentPlanType: FormControl<AccountRepaymentPlanType | null | undefined>,

		/** Indicates the status of the loan account. <br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: loan<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul><b>Applicable Values:</b><br> */
		sourceAccountStatus: FormControl<AccountSourceAccountStatus | null | undefined>,

		/** A unique ID that the provider site has assigned to the account. The source ID is only available for the HELD accounts.<br><br><b>Applicable containers</b>: bank, creditCard, investment, insurance, loan,  reward<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul> */
		sourceId: FormControl<string | null | undefined>,

		/** The tenure for which the CD account is valid  or in case of loan, the number of years/months over which the loan amount  has to be repaid. <br><b>Additional Details:</b><br>  Bank: The Term field is only applicable for the account type CD.Loan: The period for which the loan agreement is in force. The period, before or at the end of which, the loan should either be repaid or renegotiated for another term.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: bank, loan<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul> */
		term: FormControl<string | null | undefined>,

		/** <b>Applicable containers</b>: reward, bank, creditCard, investment, loan, insurance, realEstate,  otherLiabilities<br><b>Endpoints</b>:<ul><li>GET accounts </li><li>GET accounts/{accountId}</li><li>POST accounts</ul><li>GET dataExtracts/userData</li><b>Applicable Values</b><br> */
		userClassification: FormControl<AccountUserClassification | null | undefined>,

		/** The valuation type indicates whether the home value is calculated either manually or by Yodlee Partners.<br><br><b>Aggregated / Manual</b>: Manual<br><b>Applicable containers</b>: realEstate<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul><b>Applicable Values</b><br> */
		valuationType: FormControl<AccountValuationType | null | undefined>,
	}
	export function CreateAccountFormGroup() {
		return new FormGroup<AccountFormProperties>({
			CONTAINER: new FormControl<AccountCONTAINER | null | undefined>(undefined),
			accountName: new FormControl<string | null | undefined>(undefined),
			accountNumber: new FormControl<string | null | undefined>(undefined),
			accountStatus: new FormControl<AccountAccountStatus | null | undefined>(undefined),
			accountType: new FormControl<string | null | undefined>(undefined),
			aggregationSource: new FormControl<AccountAggregationSource | null | undefined>(undefined),
			annualPercentageYield: new FormControl<number | null | undefined>(undefined),
			apr: new FormControl<number | null | undefined>(undefined),
			cashApr: new FormControl<number | null | undefined>(undefined),
			classification: new FormControl<AccountClassification | null | undefined>(undefined),
			collateral: new FormControl<string | null | undefined>(undefined),
			createdDate: new FormControl<string | null | undefined>(undefined),
			currentLevel: new FormControl<string | null | undefined>(undefined),
			derivedApr: new FormControl<number | null | undefined>(undefined),
			displayedName: new FormControl<string | null | undefined>(undefined),
			dueDate: new FormControl<string | null | undefined>(undefined),
			enrollmentDate: new FormControl<string | null | undefined>(undefined),
			estimatedDate: new FormControl<string | null | undefined>(undefined),
			expirationDate: new FormControl<string | null | undefined>(undefined),
			frequency: new FormControl<AccountFrequency | null | undefined>(undefined),
			fullAccountNumber: new FormControl<string | null | undefined>(undefined),
			guarantor: new FormControl<string | null | undefined>(undefined),
			homeInsuranceType: new FormControl<AccountHomeInsuranceType | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			includeInNetWorth: new FormControl<boolean | null | undefined>(undefined),
			interestRate: new FormControl<number | null | undefined>(undefined),
			interestRateType: new FormControl<AccountInterestRateType | null | undefined>(undefined),
			isAsset: new FormControl<boolean | null | undefined>(undefined),
			isManual: new FormControl<boolean | null | undefined>(undefined),
			lastEmployeeContributionDate: new FormControl<string | null | undefined>(undefined),
			lastPaymentDate: new FormControl<string | null | undefined>(undefined),
			lastUpdated: new FormControl<string | null | undefined>(undefined),
			lender: new FormControl<string | null | undefined>(undefined),
			lifeInsuranceType: new FormControl<AccountLifeInsuranceType | null | undefined>(undefined),
			loanPayByDate: new FormControl<string | null | undefined>(undefined),
			maturityDate: new FormControl<string | null | undefined>(undefined),
			memo: new FormControl<string | null | undefined>(undefined),
			nextLevel: new FormControl<string | null | undefined>(undefined),
			nickname: new FormControl<string | null | undefined>(undefined),
			oauthMigrationStatus: new FormControl<AccountOauthMigrationStatus | null | undefined>(undefined),
			originationDate: new FormControl<string | null | undefined>(undefined),
			policyEffectiveDate: new FormControl<string | null | undefined>(undefined),
			policyFromDate: new FormControl<string | null | undefined>(undefined),
			policyStatus: new FormControl<AccountPolicyStatus | null | undefined>(undefined),
			policyTerm: new FormControl<string | null | undefined>(undefined),
			policyToDate: new FormControl<string | null | undefined>(undefined),
			premiumPaymentTerm: new FormControl<string | null | undefined>(undefined),
			primaryRewardUnit: new FormControl<string | null | undefined>(undefined),
			providerAccountId: new FormControl<string | null | undefined>(undefined),
			providerId: new FormControl<string | null | undefined>(undefined),
			providerName: new FormControl<string | null | undefined>(undefined),
			repaymentPlanType: new FormControl<AccountRepaymentPlanType | null | undefined>(undefined),
			sourceAccountStatus: new FormControl<AccountSourceAccountStatus | null | undefined>(undefined),
			sourceId: new FormControl<string | null | undefined>(undefined),
			term: new FormControl<string | null | undefined>(undefined),
			userClassification: new FormControl<AccountUserClassification | null | undefined>(undefined),
			valuationType: new FormControl<AccountValuationType | null | undefined>(undefined),
		});

	}

	export interface Money {

		/**
		 * Required
		 * Type: double
		 */
		amount: number;

		/** Required */
		currency: MoneyCurrency;
	}
	export interface MoneyFormProperties {

		/**
		 * Required
		 * Type: double
		 */
		amount: FormControl<number | null | undefined>,

		/** Required */
		currency: FormControl<MoneyCurrency | null | undefined>,
	}
	export function CreateMoneyFormGroup() {
		return new FormGroup<MoneyFormProperties>({
			amount: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			currency: new FormControl<MoneyCurrency | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum MoneyCurrency { AUD = 'AUD', BRL = 'BRL', CAD = 'CAD', EUR = 'EUR', GBP = 'GBP', HKD = 'HKD', IDR = 'IDR', INR = 'INR', JPY = 'JPY', NZD = 'NZD', SGD = 'SGD', USD = 'USD', ZAR = 'ZAR', CNY = 'CNY', VND = 'VND', MYR = 'MYR', CHF = 'CHF' }

	export enum AccountCONTAINER { bank = 'bank', creditCard = 'creditCard', investment = 'investment', insurance = 'insurance', loan = 'loan', reward = 'reward', realEstate = 'realEstate', otherAssets = 'otherAssets', otherLiabilities = 'otherLiabilities' }

	export enum AccountAccountStatus { ACTIVE = 'ACTIVE', INACTIVE = 'INACTIVE', TO_BE_CLOSED = 'TO_BE_CLOSED', CLOSED = 'CLOSED', DELETED = 'DELETED' }

	export interface AccountAddress {
		address1?: string | null;
		address2?: string | null;
		address3?: string | null;
		city?: string | null;
		country?: string | null;
		sourceType?: string | null;
		state?: string | null;
		street?: string | null;
		type?: AccountAddressType | null;
		zip?: string | null;
	}
	export interface AccountAddressFormProperties {
		address1: FormControl<string | null | undefined>,
		address2: FormControl<string | null | undefined>,
		address3: FormControl<string | null | undefined>,
		city: FormControl<string | null | undefined>,
		country: FormControl<string | null | undefined>,
		sourceType: FormControl<string | null | undefined>,
		state: FormControl<string | null | undefined>,
		street: FormControl<string | null | undefined>,
		type: FormControl<AccountAddressType | null | undefined>,
		zip: FormControl<string | null | undefined>,
	}
	export function CreateAccountAddressFormGroup() {
		return new FormGroup<AccountAddressFormProperties>({
			address1: new FormControl<string | null | undefined>(undefined),
			address2: new FormControl<string | null | undefined>(undefined),
			address3: new FormControl<string | null | undefined>(undefined),
			city: new FormControl<string | null | undefined>(undefined),
			country: new FormControl<string | null | undefined>(undefined),
			sourceType: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<string | null | undefined>(undefined),
			street: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<AccountAddressType | null | undefined>(undefined),
			zip: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AccountAddressType { HOME = 'HOME', BUSINESS = 'BUSINESS', POBOX = 'POBOX', RETAIL = 'RETAIL', OFFICE = 'OFFICE', SMALL_BUSINESS = 'SMALL_BUSINESS', COMMUNICATION = 'COMMUNICATION', PERMANENT = 'PERMANENT', STATEMENT_ADDRESS = 'STATEMENT_ADDRESS', PAYMENT = 'PAYMENT', PAYOFF = 'PAYOFF', UNKNOWN = 'UNKNOWN' }

	export enum AccountAggregationSource { SYSTEM = 'SYSTEM', USER = 'USER' }

	export interface AutoRefresh {

		/** Indicates the reason for the status.<br><br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li></ul><b>Applicable Values</b><br> */
		additionalStatus?: AutoRefreshAdditionalStatus | null;

		/** Date on which the auto refresh status is determined.<br><br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li></ul> */
		asOfDate?: string | null;

		/** Indicates whether auto refresh is enabled or disabled.<br><br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li></ul><b>Applicable Values</b><br> */
		status?: AutoRefreshStatus | null;
	}
	export interface AutoRefreshFormProperties {

		/** Indicates the reason for the status.<br><br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li></ul><b>Applicable Values</b><br> */
		additionalStatus: FormControl<AutoRefreshAdditionalStatus | null | undefined>,

		/** Date on which the auto refresh status is determined.<br><br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li></ul> */
		asOfDate: FormControl<string | null | undefined>,

		/** Indicates whether auto refresh is enabled or disabled.<br><br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li></ul><b>Applicable Values</b><br> */
		status: FormControl<AutoRefreshStatus | null | undefined>,
	}
	export function CreateAutoRefreshFormGroup() {
		return new FormGroup<AutoRefreshFormProperties>({
			additionalStatus: new FormControl<AutoRefreshAdditionalStatus | null | undefined>(undefined),
			asOfDate: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<AutoRefreshStatus | null | undefined>(undefined),
		});

	}

	export enum AutoRefreshAdditionalStatus { SCHEDULED = 'SCHEDULED', TEMP_ERROR = 'TEMP_ERROR', SITE_BLOCKING = 'SITE_BLOCKING', SITE_NOT_SUPPORTED = 'SITE_NOT_SUPPORTED', REAL_TIME_MFA_REQUIRED = 'REAL_TIME_MFA_REQUIRED', USER_ACTION_REQUIRED = 'USER_ACTION_REQUIRED', UNSUBSCRIBED = 'UNSUBSCRIBED', MANUAL_ACCOUNT = 'MANUAL_ACCOUNT' }

	export enum AutoRefreshStatus { ENABLED = 'ENABLED', DISABLED = 'DISABLED' }

	export interface BankTransferCode {

		/** The FI's branch identification number.Additional Details: The routing number of the bank account in the United States. For non-United States accounts, it is the IFSC code (India), BSB number (Australia), and sort code (United Kingdom). <br><b>Account Type</b>: Aggregated<br><b>Applicable containers</b>: bank, investment<br><b>Endpoints</b>:<br><ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>POST verification</li></ul> */
		id?: string | null;

		/** The bank transfer code type varies depending on the region of the account origination. <br><b>Account Type</b>: Aggregated<br><b>Applicable containers</b>: bank, investment<br><b>Endpoints</b>:<br><ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>POST verification</li></ul><b>Applicable Values</b><br> */
		type?: BankTransferCodeType | null;
	}
	export interface BankTransferCodeFormProperties {

		/** The FI's branch identification number.Additional Details: The routing number of the bank account in the United States. For non-United States accounts, it is the IFSC code (India), BSB number (Australia), and sort code (United Kingdom). <br><b>Account Type</b>: Aggregated<br><b>Applicable containers</b>: bank, investment<br><b>Endpoints</b>:<br><ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>POST verification</li></ul> */
		id: FormControl<string | null | undefined>,

		/** The bank transfer code type varies depending on the region of the account origination. <br><b>Account Type</b>: Aggregated<br><b>Applicable containers</b>: bank, investment<br><b>Endpoints</b>:<br><ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>POST verification</li></ul><b>Applicable Values</b><br> */
		type: FormControl<BankTransferCodeType | null | undefined>,
	}
	export function CreateBankTransferCodeFormGroup() {
		return new FormGroup<BankTransferCodeFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<BankTransferCodeType | null | undefined>(undefined),
		});

	}

	export enum BankTransferCodeType { BSB = 'BSB', IFSC = 'IFSC', ROUTING_NUMBER = 'ROUTING_NUMBER', SORT_CODE = 'SORT_CODE' }

	export enum AccountClassification { OTHER = 'OTHER', PERSONAL = 'PERSONAL', CORPORATE = 'CORPORATE', SMALL_BUSINESS = 'SMALL_BUSINESS', TRUST = 'TRUST', ADD_ON_CARD = 'ADD_ON_CARD', VIRTUAL_CARD = 'VIRTUAL_CARD' }

	export interface Coverage {

		/** The coverage amount-related details.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: insurance,investment<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li></ul> */
		amount?: Array<CoverageAmount>;

		/** The date on which the coverage for the account ends or expires.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: insurance,investment<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li></ul> */
		endDate?: string | null;

		/** The plan type for an insurance provided to an individual or an entity.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: insurance<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li></ul><b>Applicable Values:</b><br> */
		planType?: CoveragePlanType | null;

		/** The date on which the coverage for the account starts.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: insurance,investment<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li></ul> */
		startDate?: string | null;

		/** The type of coverage provided to an individual or an entity.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: insurance,investment<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li></ul><b>Applicable Values:</b><br> */
		type?: CoverageType | null;
	}
	export interface CoverageFormProperties {

		/** The date on which the coverage for the account ends or expires.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: insurance,investment<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li></ul> */
		endDate: FormControl<string | null | undefined>,

		/** The plan type for an insurance provided to an individual or an entity.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: insurance<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li></ul><b>Applicable Values:</b><br> */
		planType: FormControl<CoveragePlanType | null | undefined>,

		/** The date on which the coverage for the account starts.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: insurance,investment<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li></ul> */
		startDate: FormControl<string | null | undefined>,

		/** The type of coverage provided to an individual or an entity.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: insurance,investment<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li></ul><b>Applicable Values:</b><br> */
		type: FormControl<CoverageType | null | undefined>,
	}
	export function CreateCoverageFormGroup() {
		return new FormGroup<CoverageFormProperties>({
			endDate: new FormControl<string | null | undefined>(undefined),
			planType: new FormControl<CoveragePlanType | null | undefined>(undefined),
			startDate: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<CoverageType | null | undefined>(undefined),
		});

	}

	export interface CoverageAmount {
		cover?: Money;

		/** The type of coverage limit indicates if the coverage is in-network or out-of-network.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: insurance,investment<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li></ul><b>Applicable Values:</b><br> */
		limitType?: CoverageAmountLimitType | null;
		met?: Money;

		/** The type of coverage provided to an individual or an entity.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: insurance,investment<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li></ul><b>Applicable Values:</b><br> */
		type?: CoverageAmountType | null;

		/** The type of coverage unit indicates if the coverage is for an individual or a family.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: insurance,investment<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li></ul><b>Applicable Values:</b><br> */
		unitType?: CoverageAmountUnitType | null;
	}
	export interface CoverageAmountFormProperties {

		/** The type of coverage limit indicates if the coverage is in-network or out-of-network.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: insurance,investment<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li></ul><b>Applicable Values:</b><br> */
		limitType: FormControl<CoverageAmountLimitType | null | undefined>,

		/** The type of coverage provided to an individual or an entity.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: insurance,investment<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li></ul><b>Applicable Values:</b><br> */
		type: FormControl<CoverageAmountType | null | undefined>,

		/** The type of coverage unit indicates if the coverage is for an individual or a family.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: insurance,investment<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li></ul><b>Applicable Values:</b><br> */
		unitType: FormControl<CoverageAmountUnitType | null | undefined>,
	}
	export function CreateCoverageAmountFormGroup() {
		return new FormGroup<CoverageAmountFormProperties>({
			limitType: new FormControl<CoverageAmountLimitType | null | undefined>(undefined),
			type: new FormControl<CoverageAmountType | null | undefined>(undefined),
			unitType: new FormControl<CoverageAmountUnitType | null | undefined>(undefined),
		});

	}

	export enum CoverageAmountLimitType { IN_NETWORK = 'IN_NETWORK', OUT_NETWORK = 'OUT_NETWORK' }

	export enum CoverageAmountType { DEDUCTIBLE = 'DEDUCTIBLE', OUT_OF_POCKET = 'OUT_OF_POCKET', ANNUAL_BENEFIT = 'ANNUAL_BENEFIT', MAX_BENEFIT = 'MAX_BENEFIT', COVERAGE_AMOUNT = 'COVERAGE_AMOUNT', MONTHLY_BENEFIT = 'MONTHLY_BENEFIT', OTHER = 'OTHER' }

	export enum CoverageAmountUnitType { PER_FAMILY = 'PER_FAMILY', PER_MEMBER = 'PER_MEMBER' }

	export enum CoveragePlanType { PPO = 'PPO', HMO = 'HMO', UNKNOWN = 'UNKNOWN' }

	export enum CoverageType { VISION = 'VISION', DENTAL = 'DENTAL', MEDICAL = 'MEDICAL', HEALTH = 'HEALTH', DEATH_COVER = 'DEATH_COVER', TOTAL_PERMANENT_DISABILITY = 'TOTAL_PERMANENT_DISABILITY', ACCIDENTAL_DEATH_COVER = 'ACCIDENTAL_DEATH_COVER', INCOME_PROTECTION = 'INCOME_PROTECTION', DEATH_TOTAL_PERMANENT_DISABILITY = 'DEATH_TOTAL_PERMANENT_DISABILITY', OTHER = 'OTHER' }

	export interface AccountDataset {

		/** The status of last update attempted for the dataset. <br><br><b>Account Type</b>: Aggregated<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET providerAccounts</li><li>POST providerAccounts</li><li>PUT providerAccounts/{providerAccountId}</li><li>GET providerAccounts/{providerAccountId}</li></ul><b>Applicable Values</b><br> */
		additionalStatus?: AccountDatasetAdditionalStatus | null;

		/** Indicate when the last attempt was performed to update the dataset for the given provider account<br><br><b>Account Type</b>: Aggregated<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET providerAccounts</li><li>POST providerAccounts</li><li>PUT providerAccounts/{providerAccountId}</li><li>GET providerAccounts/{providerAccountId}</li></ul> */
		lastUpdateAttempt?: string | null;

		/** Indicate when the dataset is last updated successfully for the given provider account.<br><br><b>Account Type</b>: Aggregated<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET providerAccounts</li><li>POST providerAccounts</li><li>PUT providerAccounts/{providerAccountId}</li><li>GET providerAccounts/{providerAccountId}</li></ul> */
		lastUpdated?: string | null;

		/** The name of the dataset requested from the provider site<br><br><b>Account Type</b>: Manual<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET providerAccounts</li><li>POST providerAccounts</li><li>PUT providerAccounts/{providerAccountId}</li><li>GET providerAccounts/{providerAccountId}</li><li>GET providers/{providerId}</li><li>GET providers</li></ul><b>Applicable Values</b><br> */
		name?: AccountDatasetName | null;

		/** Indicates when the next attempt to update the dataset is scheduled.<br><br><b>Account Type</b>: Aggregated<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET providerAccounts</li><li>POST providerAccounts</li><li>PUT providerAccounts/{providerAccountId}</li><li>GET providerAccounts/{providerAccountId}</li></ul> */
		nextUpdateScheduled?: string | null;

		/** Indicate whether the dataset is eligible for update or not.<br><br><b>Account Type</b>: Aggregated<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET providerAccounts</li><li>POST providerAccounts</li><li>PUT providerAccounts/{providerAccountId}</li><li>GET providerAccounts/{providerAccountId}</li></ul><b>Applicable Values</b><br> */
		updateEligibility?: AccountDatasetUpdateEligibility | null;
	}
	export interface AccountDatasetFormProperties {

		/** The status of last update attempted for the dataset. <br><br><b>Account Type</b>: Aggregated<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET providerAccounts</li><li>POST providerAccounts</li><li>PUT providerAccounts/{providerAccountId}</li><li>GET providerAccounts/{providerAccountId}</li></ul><b>Applicable Values</b><br> */
		additionalStatus: FormControl<AccountDatasetAdditionalStatus | null | undefined>,

		/** Indicate when the last attempt was performed to update the dataset for the given provider account<br><br><b>Account Type</b>: Aggregated<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET providerAccounts</li><li>POST providerAccounts</li><li>PUT providerAccounts/{providerAccountId}</li><li>GET providerAccounts/{providerAccountId}</li></ul> */
		lastUpdateAttempt: FormControl<string | null | undefined>,

		/** Indicate when the dataset is last updated successfully for the given provider account.<br><br><b>Account Type</b>: Aggregated<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET providerAccounts</li><li>POST providerAccounts</li><li>PUT providerAccounts/{providerAccountId}</li><li>GET providerAccounts/{providerAccountId}</li></ul> */
		lastUpdated: FormControl<string | null | undefined>,

		/** The name of the dataset requested from the provider site<br><br><b>Account Type</b>: Manual<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET providerAccounts</li><li>POST providerAccounts</li><li>PUT providerAccounts/{providerAccountId}</li><li>GET providerAccounts/{providerAccountId}</li><li>GET providers/{providerId}</li><li>GET providers</li></ul><b>Applicable Values</b><br> */
		name: FormControl<AccountDatasetName | null | undefined>,

		/** Indicates when the next attempt to update the dataset is scheduled.<br><br><b>Account Type</b>: Aggregated<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET providerAccounts</li><li>POST providerAccounts</li><li>PUT providerAccounts/{providerAccountId}</li><li>GET providerAccounts/{providerAccountId}</li></ul> */
		nextUpdateScheduled: FormControl<string | null | undefined>,

		/** Indicate whether the dataset is eligible for update or not.<br><br><b>Account Type</b>: Aggregated<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET providerAccounts</li><li>POST providerAccounts</li><li>PUT providerAccounts/{providerAccountId}</li><li>GET providerAccounts/{providerAccountId}</li></ul><b>Applicable Values</b><br> */
		updateEligibility: FormControl<AccountDatasetUpdateEligibility | null | undefined>,
	}
	export function CreateAccountDatasetFormGroup() {
		return new FormGroup<AccountDatasetFormProperties>({
			additionalStatus: new FormControl<AccountDatasetAdditionalStatus | null | undefined>(undefined),
			lastUpdateAttempt: new FormControl<string | null | undefined>(undefined),
			lastUpdated: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<AccountDatasetName | null | undefined>(undefined),
			nextUpdateScheduled: new FormControl<string | null | undefined>(undefined),
			updateEligibility: new FormControl<AccountDatasetUpdateEligibility | null | undefined>(undefined),
		});

	}

	export enum AccountDatasetAdditionalStatus { LOGIN_IN_PROGRESS = 'LOGIN_IN_PROGRESS', DATA_RETRIEVAL_IN_PROGRESS = 'DATA_RETRIEVAL_IN_PROGRESS', ACCT_SUMMARY_RECEIVED = 'ACCT_SUMMARY_RECEIVED', AVAILABLE_DATA_RETRIEVED = 'AVAILABLE_DATA_RETRIEVED', PARTIAL_DATA_RETRIEVED = 'PARTIAL_DATA_RETRIEVED', DATA_RETRIEVAL_FAILED = 'DATA_RETRIEVAL_FAILED', DATA_NOT_AVAILABLE = 'DATA_NOT_AVAILABLE', ACCOUNT_LOCKED = 'ACCOUNT_LOCKED', ADDL_AUTHENTICATION_REQUIRED = 'ADDL_AUTHENTICATION_REQUIRED', BETA_SITE_DEV_IN_PROGRESS = 'BETA_SITE_DEV_IN_PROGRESS', CREDENTIALS_UPDATE_NEEDED = 'CREDENTIALS_UPDATE_NEEDED', INCORRECT_CREDENTIALS = 'INCORRECT_CREDENTIALS', PROPERTY_VALUE_NOT_AVAILABLE = 'PROPERTY_VALUE_NOT_AVAILABLE', INVALID_ADDL_INFO_PROVIDED = 'INVALID_ADDL_INFO_PROVIDED', REQUEST_TIME_OUT = 'REQUEST_TIME_OUT', SITE_BLOCKING_ERROR = 'SITE_BLOCKING_ERROR', UNEXPECTED_SITE_ERROR = 'UNEXPECTED_SITE_ERROR', SITE_NOT_SUPPORTED = 'SITE_NOT_SUPPORTED', SITE_UNAVAILABLE = 'SITE_UNAVAILABLE', TECH_ERROR = 'TECH_ERROR', USER_ACTION_NEEDED_AT_SITE = 'USER_ACTION_NEEDED_AT_SITE', SITE_SESSION_INVALIDATED = 'SITE_SESSION_INVALIDATED', NEW_AUTHENTICATION_REQUIRED = 'NEW_AUTHENTICATION_REQUIRED', DATASET_NOT_SUPPORTED = 'DATASET_NOT_SUPPORTED', ENROLLMENT_REQUIRED_FOR_DATASET = 'ENROLLMENT_REQUIRED_FOR_DATASET', CONSENT_REQUIRED = 'CONSENT_REQUIRED', CONSENT_EXPIRED = 'CONSENT_EXPIRED', CONSENT_REVOKED = 'CONSENT_REVOKED', INCORRECT_OAUTH_TOKEN = 'INCORRECT_OAUTH_TOKEN', MIGRATION_IN_PROGRESS = 'MIGRATION_IN_PROGRESS' }

	export enum AccountDatasetName { BASIC_AGG_DATA = 'BASIC_AGG_DATA', ADVANCE_AGG_DATA = 'ADVANCE_AGG_DATA', ACCT_PROFILE = 'ACCT_PROFILE', DOCUMENT = 'DOCUMENT' }

	export enum AccountDatasetUpdateEligibility { ALLOW_UPDATE = 'ALLOW_UPDATE', ALLOW_UPDATE_WITH_CREDENTIALS = 'ALLOW_UPDATE_WITH_CREDENTIALS', DISALLOW_UPDATE = 'DISALLOW_UPDATE' }

	export enum AccountFrequency { DAILY = 'DAILY', ONE_TIME = 'ONE_TIME', WEEKLY = 'WEEKLY', EVERY_2_WEEKS = 'EVERY_2_WEEKS', SEMI_MONTHLY = 'SEMI_MONTHLY', MONTHLY = 'MONTHLY', QUARTERLY = 'QUARTERLY', SEMI_ANNUALLY = 'SEMI_ANNUALLY', ANNUALLY = 'ANNUALLY', EVERY_2_MONTHS = 'EVERY_2_MONTHS', EBILL = 'EBILL', FIRST_DAY_MONTHLY = 'FIRST_DAY_MONTHLY', LAST_DAY_MONTHLY = 'LAST_DAY_MONTHLY', EVERY_4_WEEKS = 'EVERY_4_WEEKS', UNKNOWN = 'UNKNOWN', OTHER = 'OTHER' }

	export interface FullAccountNumberList {

		/** Payment Account Number of given account.<br><br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li></ul> */
		paymentAccountNumber?: string | null;

		/** Unmasked account number of given account.<br><br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li></ul> */
		unmaskedAccountNumber?: string | null;
	}
	export interface FullAccountNumberListFormProperties {

		/** Payment Account Number of given account.<br><br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li></ul> */
		paymentAccountNumber: FormControl<string | null | undefined>,

		/** Unmasked account number of given account.<br><br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li></ul> */
		unmaskedAccountNumber: FormControl<string | null | undefined>,
	}
	export function CreateFullAccountNumberListFormGroup() {
		return new FormGroup<FullAccountNumberListFormProperties>({
			paymentAccountNumber: new FormControl<string | null | undefined>(undefined),
			unmaskedAccountNumber: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AccountHolder {

		/** Identifiers of the account holder.<br><br><b>Aggregated / Manual</b>: Aggregated <br><b>Applicable containers</b>: bank<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li></ul> */
		gender?: string | null;

		/** Identifiers of the account holder.<br><br><b>Aggregated / Manual</b>: Aggregated <br><b>Applicable containers</b>: bank<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li></ul> */
		identifier?: Array<Identifier>;
		name?: Name;

		/** Indicates the ownership of the account.<br><br><b>Aggregated / Manual</b>: Aggregated <br><b>Applicable containers</b>: bank<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li></ul><b>Applicable Values</b><br> */
		ownership?: AccountHolderOwnership | null;
	}
	export interface AccountHolderFormProperties {

		/** Identifiers of the account holder.<br><br><b>Aggregated / Manual</b>: Aggregated <br><b>Applicable containers</b>: bank<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li></ul> */
		gender: FormControl<string | null | undefined>,

		/** Indicates the ownership of the account.<br><br><b>Aggregated / Manual</b>: Aggregated <br><b>Applicable containers</b>: bank<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li></ul><b>Applicable Values</b><br> */
		ownership: FormControl<AccountHolderOwnership | null | undefined>,
	}
	export function CreateAccountHolderFormGroup() {
		return new FormGroup<AccountHolderFormProperties>({
			gender: new FormControl<string | null | undefined>(undefined),
			ownership: new FormControl<AccountHolderOwnership | null | undefined>(undefined),
		});

	}

	export interface Identifier {

		/** Type of Identifier */
		type?: IdentifierType | null;

		/** Value of the identifier */
		value?: string | null;
	}
	export interface IdentifierFormProperties {

		/** Type of Identifier */
		type: FormControl<IdentifierType | null | undefined>,

		/** Value of the identifier */
		value: FormControl<string | null | undefined>,
	}
	export function CreateIdentifierFormGroup() {
		return new FormGroup<IdentifierFormProperties>({
			type: new FormControl<IdentifierType | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum IdentifierType { NIE = 'NIE', DNI = 'DNI', EIN = 'EIN', BN = 'BN', AADHAR = 'AADHAR', NIN = 'NIN', NRIC = 'NRIC' }

	export interface Name {
		first?: string | null;
		fullName?: string | null;
		last?: string | null;
		middle?: string | null;
	}
	export interface NameFormProperties {
		first: FormControl<string | null | undefined>,
		fullName: FormControl<string | null | undefined>,
		last: FormControl<string | null | undefined>,
		middle: FormControl<string | null | undefined>,
	}
	export function CreateNameFormGroup() {
		return new FormGroup<NameFormProperties>({
			first: new FormControl<string | null | undefined>(undefined),
			fullName: new FormControl<string | null | undefined>(undefined),
			last: new FormControl<string | null | undefined>(undefined),
			middle: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AccountHolderOwnership { PRIMARY = 'PRIMARY', SECONDARY = 'SECONDARY', CUSTODIAN = 'CUSTODIAN', OTHERS = 'OTHERS', POWER_OF_ATTORNEY = 'POWER_OF_ATTORNEY', TRUSTEE = 'TRUSTEE', JOINT_OWNER = 'JOINT_OWNER', BENEFICIARY = 'BENEFICIARY', AAS = 'AAS', BUSINESS = 'BUSINESS', DBA = 'DBA', TRUST = 'TRUST' }

	export enum AccountHomeInsuranceType { HOME_OWNER = 'HOME_OWNER', RENTAL = 'RENTAL', RENTER = 'RENTER', UNKNOWN = 'UNKNOWN', OTHER = 'OTHER' }

	export enum AccountInterestRateType { FIXED = 'FIXED', VARIABLE = 'VARIABLE', UNKNOWN = 'UNKNOWN', OTHER = 'OTHER' }

	export enum AccountLifeInsuranceType { OTHER = 'OTHER', TERM_LIFE_INSURANCE = 'TERM_LIFE_INSURANCE', UNIVERSAL_LIFE_INSURANCE = 'UNIVERSAL_LIFE_INSURANCE', WHOLE_LIFE_INSURANCE = 'WHOLE_LIFE_INSURANCE', VARIABLE_LIFE_INSURANCE = 'VARIABLE_LIFE_INSURANCE', ULIP = 'ULIP', ENDOWMENT = 'ENDOWMENT' }

	export interface LoanPayoffDetails {
		outstandingBalance?: Money;

		/** The date by which the payoff amount should be paid.<br><br><b>Account Type</b>: Aggregated<br><b>Applicable containers</b>: loan<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li></ul> */
		payByDate?: string | null;
		payoffAmount?: Money;
	}
	export interface LoanPayoffDetailsFormProperties {

		/** The date by which the payoff amount should be paid.<br><br><b>Account Type</b>: Aggregated<br><b>Applicable containers</b>: loan<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li></ul> */
		payByDate: FormControl<string | null | undefined>,
	}
	export function CreateLoanPayoffDetailsFormGroup() {
		return new FormGroup<LoanPayoffDetailsFormProperties>({
			payByDate: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AccountOauthMigrationStatus { IN_PROGRESS = 'IN_PROGRESS', TO_BE_MIGRATED = 'TO_BE_MIGRATED', COMPLETED = 'COMPLETED' }

	export interface PaymentProfile {

		/** The address of the lender to which the monthly payments or the loan payoff amount should be paid. <br><b>Additional Details:</b>The address field applies only to the student loan account type.<br><b>Account Type</b>: Aggregated<br><b>Applicable containers</b>: loan<br><b>Endpoints</b>:<br><ul><li>GET accounts</li><li>GET accounts/{accountId}</li></ul> */
		address?: Array<AccountAddress>;
		identifier?: PaymentIdentifier;
		paymentBankTransferCode?: PaymentBankTransferCode;
	}
	export interface PaymentProfileFormProperties {
	}
	export function CreatePaymentProfileFormGroup() {
		return new FormGroup<PaymentProfileFormProperties>({
		});

	}

	export interface PaymentIdentifier {

		/** Type of Identifier */
		type?: PaymentIdentifierType | null;

		/** Value of the identifier */
		value?: string | null;
	}
	export interface PaymentIdentifierFormProperties {

		/** Type of Identifier */
		type: FormControl<PaymentIdentifierType | null | undefined>,

		/** Value of the identifier */
		value: FormControl<string | null | undefined>,
	}
	export function CreatePaymentIdentifierFormGroup() {
		return new FormGroup<PaymentIdentifierFormProperties>({
			type: new FormControl<PaymentIdentifierType | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum PaymentIdentifierType { REFERENCE_NUMBER = 'REFERENCE_NUMBER', PLATFORM_CODE = 'PLATFORM_CODE' }

	export interface PaymentBankTransferCode {

		/** Value of the identifier */
		id?: string | null;

		/** Type of BankTransferCode */
		type?: PaymentBankTransferCodeType | null;
	}
	export interface PaymentBankTransferCodeFormProperties {

		/** Value of the identifier */
		id: FormControl<string | null | undefined>,

		/** Type of BankTransferCode */
		type: FormControl<PaymentBankTransferCodeType | null | undefined>,
	}
	export function CreatePaymentBankTransferCodeFormGroup() {
		return new FormGroup<PaymentBankTransferCodeFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<PaymentBankTransferCodeType | null | undefined>(undefined),
		});

	}

	export enum PaymentBankTransferCodeType { ROUTING_NUMBER = 'ROUTING_NUMBER', BSB = 'BSB', IFSC = 'IFSC', SORT_CODE = 'SORT_CODE' }

	export enum AccountPolicyStatus { ACTIVE = 'ACTIVE', INACTIVE = 'INACTIVE', OTHER = 'OTHER' }

	export interface AccountProfile {

		/** Address available in the profile page of the account.<br><br><b>Account Type</b>: Aggregated<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li></ul> */
		address?: Array<AccountAddress>;

		/** Email Id available in the profile page of the account.<br><br><b>Account Type</b>: Aggregated<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li></ul> */
		email?: Array<Email>;

		/** Identifiers available in the profile page of the account.<br><br><b>Account Type</b>: Aggregated<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li></ul> */
		identifier?: Array<Identifier>;

		/** Phone number available in the profile page of the account.<br><br><b>Account Type</b>: Aggregated<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li></ul> */
		phoneNumber?: Array<PhoneNumber>;
	}
	export interface AccountProfileFormProperties {
	}
	export function CreateAccountProfileFormGroup() {
		return new FormGroup<AccountProfileFormProperties>({
		});

	}

	export interface Email {
		type?: EmailType | null;
		value?: string | null;
	}
	export interface EmailFormProperties {
		type: FormControl<EmailType | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreateEmailFormGroup() {
		return new FormGroup<EmailFormProperties>({
			type: new FormControl<EmailType | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum EmailType { PRIMARY = 'PRIMARY', SECONDARY = 'SECONDARY', PERSONAL = 'PERSONAL', WORK = 'WORK', OTHERS = 'OTHERS' }

	export interface PhoneNumber {

		/** type of phone number */
		type?: PhoneNumberType | null;

		/** Phone Number */
		value?: string | null;
	}
	export interface PhoneNumberFormProperties {

		/** type of phone number */
		type: FormControl<PhoneNumberType | null | undefined>,

		/** Phone Number */
		value: FormControl<string | null | undefined>,
	}
	export function CreatePhoneNumberFormGroup() {
		return new FormGroup<PhoneNumberFormProperties>({
			type: new FormControl<PhoneNumberType | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum PhoneNumberType { HOME = 'HOME', WORK = 'WORK', LANDLINE = 'LANDLINE', MOBILE = 'MOBILE' }

	export enum AccountRepaymentPlanType { STANDARD = 'STANDARD', GRADUATED = 'GRADUATED', EXTENDED = 'EXTENDED', INCOME_BASED = 'INCOME_BASED', INCOME_CONTINGENT = 'INCOME_CONTINGENT', INCOME_SENSITIVE = 'INCOME_SENSITIVE', PAY_AS_YOU_EARN = 'PAY_AS_YOU_EARN', REVISED_PAY_AS_YOU_EARN = 'REVISED_PAY_AS_YOU_EARN' }

	export interface RewardBalance {

		/**
		 * The actual reward balance.<br><br><b>Account Type</b>: Aggregated<br><b>Applicable containers</b>: reward<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>
		 * Type: double
		 */
		balance?: number | null;

		/** The balance required to reach a reward level.<br><br><b>Account Type</b>: Aggregated<br><b>Applicable containers</b>: reward<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul> */
		balanceToLevel?: string | null;

		/** The balance required to qualify for a reward such as retaining membership, business reward, etc.<br><br><b>Account Type</b>: Aggregated<br><b>Applicable containers</b>: reward<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul> */
		balanceToReward?: string | null;

		/** The type of reward balance.<br><br><b>Account Type</b>: Aggregated<br><b>Applicable containers</b>: reward<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul><b>Applicable Values</b><br> */
		balanceType?: RewardBalanceBalanceType | null;

		/** The description for the reward balance as available at provider source.<br><br><b>Account Type</b>: Aggregated<br><b>Applicable containers</b>: reward<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul> */
		description?: string | null;

		/** The date on which the balance expires.<br><br><b>Account Type</b>: Aggregated<br><b>Applicable containers</b>: reward<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul> */
		expiryDate?: string | null;

		/** Unit of reward balance - miles, points, segments, dollars, credits.<br><br><b>Account Type</b>: Aggregated<br><b>Applicable containers</b>: reward<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul> */
		units?: string | null;
	}
	export interface RewardBalanceFormProperties {

		/**
		 * The actual reward balance.<br><br><b>Account Type</b>: Aggregated<br><b>Applicable containers</b>: reward<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>
		 * Type: double
		 */
		balance: FormControl<number | null | undefined>,

		/** The balance required to reach a reward level.<br><br><b>Account Type</b>: Aggregated<br><b>Applicable containers</b>: reward<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul> */
		balanceToLevel: FormControl<string | null | undefined>,

		/** The balance required to qualify for a reward such as retaining membership, business reward, etc.<br><br><b>Account Type</b>: Aggregated<br><b>Applicable containers</b>: reward<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul> */
		balanceToReward: FormControl<string | null | undefined>,

		/** The type of reward balance.<br><br><b>Account Type</b>: Aggregated<br><b>Applicable containers</b>: reward<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul><b>Applicable Values</b><br> */
		balanceType: FormControl<RewardBalanceBalanceType | null | undefined>,

		/** The description for the reward balance as available at provider source.<br><br><b>Account Type</b>: Aggregated<br><b>Applicable containers</b>: reward<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul> */
		description: FormControl<string | null | undefined>,

		/** The date on which the balance expires.<br><br><b>Account Type</b>: Aggregated<br><b>Applicable containers</b>: reward<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul> */
		expiryDate: FormControl<string | null | undefined>,

		/** Unit of reward balance - miles, points, segments, dollars, credits.<br><br><b>Account Type</b>: Aggregated<br><b>Applicable containers</b>: reward<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul> */
		units: FormControl<string | null | undefined>,
	}
	export function CreateRewardBalanceFormGroup() {
		return new FormGroup<RewardBalanceFormProperties>({
			balance: new FormControl<number | null | undefined>(undefined),
			balanceToLevel: new FormControl<string | null | undefined>(undefined),
			balanceToReward: new FormControl<string | null | undefined>(undefined),
			balanceType: new FormControl<RewardBalanceBalanceType | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			expiryDate: new FormControl<string | null | undefined>(undefined),
			units: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum RewardBalanceBalanceType { EXPIRING_BALANCE = 'EXPIRING_BALANCE', BALANCE_TO_LEVEL = 'BALANCE_TO_LEVEL', BALANCE_TO_REWARD = 'BALANCE_TO_REWARD', BALANCE = 'BALANCE', TOTAL_BALANCE = 'TOTAL_BALANCE' }

	export enum AccountSourceAccountStatus { IN_REPAYMENT = 'IN_REPAYMENT', DEFAULTED = 'DEFAULTED', IN_SCHOOL = 'IN_SCHOOL', IN_GRACE_PERIOD = 'IN_GRACE_PERIOD', DELINQUENCY = 'DELINQUENCY', DEFERMENT = 'DEFERMENT', FORBEARANCE = 'FORBEARANCE' }

	export enum AccountUserClassification { BUSINESS = 'BUSINESS', PERSONAL = 'PERSONAL' }

	export enum AccountValuationType { SYSTEM = 'SYSTEM', MANUAL = 'MANUAL' }

	export interface AccountHistoricalBalancesResponse {
		account?: Array<AccountHistory>;
	}
	export interface AccountHistoricalBalancesResponseFormProperties {
	}
	export function CreateAccountHistoricalBalancesResponseFormGroup() {
		return new FormGroup<AccountHistoricalBalancesResponseFormProperties>({
		});

	}

	export interface AccountHistory {
		historicalBalances?: Array<HistoricalBalance>;

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		id?: string | null;
	}
	export interface AccountHistoryFormProperties {

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		id: FormControl<string | null | undefined>,
	}
	export function CreateAccountHistoryFormGroup() {
		return new FormGroup<AccountHistoryFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface HistoricalBalance {

		/** Date as of when the balance is last updated due to the auto account updates or user triggered updates. This balance will be carry forward for the days where there is no balance available in the system. <br><br><b>Aggregated / Manual</b>: Both <br><b>Applicable containers</b>: bank, creditCard, investment, insurance, realEstate, loan<br><b>Endpoints</b>:<ul><li>GET accounts/historicalBalances</li></ul> */
		asOfDate?: string | null;
		balance?: Money;

		/** The source of balance information.<br><br><b>Aggregated / Manual</b>: Both <br><b>Applicable containers</b>: bank, creditCard, investment, insurance, realEstate, loan<br><b>Endpoints</b>:<ul><li>GET accounts/historicalBalances</li></ul><b>Applicable Values</b><br> */
		dataSourceType?: HistoricalBalanceDataSourceType | null;

		/** Date for which the account balance was provided.  This balance could be a carryforward, calculated or a scraped balance.<br><b>Additional Details</b>:<br><b>Scraped</b>: Balance shown in the provider site. This balance gets stored in Yodlee system during system/user account updates.<br><b>CarryForward</b>: Balance carried forward from the scraped balance to the days for which the balance was not available in the system. Balance may not be available for all the days in the system due to MFA information required, error in the site, credential changes, etc.<br><b>calculated</b>: Balances that gets calculated for the days that are prior to the account added date.  <br><br><b>Aggregated / Manual</b>: Both <br><b>Applicable containers</b>: bank, creditCard, investment, insurance, realEstate, loan<br><b>Endpoints</b>:<ul><li>GET accounts/historicalBalances</li><li>GET derived/networth</li></ul> */
		date?: string | null;

		/** Indicates whether the balance is an asset or liability.<br><br><b>Aggregated / Manual</b>: Both <br><b>Applicable containers</b>: bank, creditCard, investment, insurance, realEstate, loan<br><b>Endpoints</b>:<ul><li>GET accounts/historicalBalances</li></ul> */
		isAsset?: boolean | null;
	}
	export interface HistoricalBalanceFormProperties {

		/** Date as of when the balance is last updated due to the auto account updates or user triggered updates. This balance will be carry forward for the days where there is no balance available in the system. <br><br><b>Aggregated / Manual</b>: Both <br><b>Applicable containers</b>: bank, creditCard, investment, insurance, realEstate, loan<br><b>Endpoints</b>:<ul><li>GET accounts/historicalBalances</li></ul> */
		asOfDate: FormControl<string | null | undefined>,

		/** The source of balance information.<br><br><b>Aggregated / Manual</b>: Both <br><b>Applicable containers</b>: bank, creditCard, investment, insurance, realEstate, loan<br><b>Endpoints</b>:<ul><li>GET accounts/historicalBalances</li></ul><b>Applicable Values</b><br> */
		dataSourceType: FormControl<HistoricalBalanceDataSourceType | null | undefined>,

		/** Date for which the account balance was provided.  This balance could be a carryforward, calculated or a scraped balance.<br><b>Additional Details</b>:<br><b>Scraped</b>: Balance shown in the provider site. This balance gets stored in Yodlee system during system/user account updates.<br><b>CarryForward</b>: Balance carried forward from the scraped balance to the days for which the balance was not available in the system. Balance may not be available for all the days in the system due to MFA information required, error in the site, credential changes, etc.<br><b>calculated</b>: Balances that gets calculated for the days that are prior to the account added date.  <br><br><b>Aggregated / Manual</b>: Both <br><b>Applicable containers</b>: bank, creditCard, investment, insurance, realEstate, loan<br><b>Endpoints</b>:<ul><li>GET accounts/historicalBalances</li><li>GET derived/networth</li></ul> */
		date: FormControl<string | null | undefined>,

		/** Indicates whether the balance is an asset or liability.<br><br><b>Aggregated / Manual</b>: Both <br><b>Applicable containers</b>: bank, creditCard, investment, insurance, realEstate, loan<br><b>Endpoints</b>:<ul><li>GET accounts/historicalBalances</li></ul> */
		isAsset: FormControl<boolean | null | undefined>,
	}
	export function CreateHistoricalBalanceFormGroup() {
		return new FormGroup<HistoricalBalanceFormProperties>({
			asOfDate: new FormControl<string | null | undefined>(undefined),
			dataSourceType: new FormControl<HistoricalBalanceDataSourceType | null | undefined>(undefined),
			date: new FormControl<string | null | undefined>(undefined),
			isAsset: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum HistoricalBalanceDataSourceType { S = 'S', C = 'C', CF = 'CF' }

	export interface AccountResponse {
		account?: Array<Account>;
	}
	export interface AccountResponseFormProperties {
	}
	export function CreateAccountResponseFormGroup() {
		return new FormGroup<AccountResponseFormProperties>({
		});

	}

	export interface ApiKeyOutput {

		/** The date on which the apiKey was created for the customer.<br><br><b>Endpoints</b>:<ul><li>GET /auth/apiKey</li><li>POST /auth/apiKey</li></ul> */
		createdDate?: string | null;

		/**
		 * Time in seconds after which the JWT token created for users expires.<br><br><b>Endpoints</b>:<ul><li>GET /auth/apiKey</li><li>POST /auth/apiKey</li></ul>
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		expiresIn?: string | null;

		/** ApiKey or the issuer key used to generate the JWT token for authentication.<br><br><b>Endpoints</b>:<ul><li>GET /auth/apiKey</li><li>POST /auth/apiKey</li></ul> */
		key?: string | null;

		/**
		 * Public key uploaded by the customer while generating ApiKey.<br><br><b>Endpoints</b>:<ul><li>GET /auth/apiKey</li><li>POST /auth/apiKey</li></ul>
		 * Min length: 1
		 * Max length: 2147483647
		 */
		publicKey?: string | null;
	}
	export interface ApiKeyOutputFormProperties {

		/** The date on which the apiKey was created for the customer.<br><br><b>Endpoints</b>:<ul><li>GET /auth/apiKey</li><li>POST /auth/apiKey</li></ul> */
		createdDate: FormControl<string | null | undefined>,

		/**
		 * Time in seconds after which the JWT token created for users expires.<br><br><b>Endpoints</b>:<ul><li>GET /auth/apiKey</li><li>POST /auth/apiKey</li></ul>
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		expiresIn: FormControl<string | null | undefined>,

		/** ApiKey or the issuer key used to generate the JWT token for authentication.<br><br><b>Endpoints</b>:<ul><li>GET /auth/apiKey</li><li>POST /auth/apiKey</li></ul> */
		key: FormControl<string | null | undefined>,

		/**
		 * Public key uploaded by the customer while generating ApiKey.<br><br><b>Endpoints</b>:<ul><li>GET /auth/apiKey</li><li>POST /auth/apiKey</li></ul>
		 * Min length: 1
		 * Max length: 2147483647
		 */
		publicKey: FormControl<string | null | undefined>,
	}
	export function CreateApiKeyOutputFormGroup() {
		return new FormGroup<ApiKeyOutputFormProperties>({
			createdDate: new FormControl<string | null | undefined>(undefined),
			expiresIn: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			publicKey: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2147483647)]),
		});

	}

	export interface ApiKeyRequest {

		/**
		 * Public key uploaded by the customer while generating ApiKey.<br><br><b>Endpoints</b>:<ul><li>GET /auth/apiKey</li><li>POST /auth/apiKey</li></ul>
		 * Min length: 1
		 * Max length: 2147483647
		 */
		publicKey?: string | null;
	}
	export interface ApiKeyRequestFormProperties {

		/**
		 * Public key uploaded by the customer while generating ApiKey.<br><br><b>Endpoints</b>:<ul><li>GET /auth/apiKey</li><li>POST /auth/apiKey</li></ul>
		 * Min length: 1
		 * Max length: 2147483647
		 */
		publicKey: FormControl<string | null | undefined>,
	}
	export function CreateApiKeyRequestFormGroup() {
		return new FormGroup<ApiKeyRequestFormProperties>({
			publicKey: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2147483647)]),
		});

	}

	export interface ApiKeyResponse {

		/** ApiKey customer details.<br><br><b>Endpoints</b>:<ul><li>GET /auth/apiKey</li><li>POST /auth/apiKey</li></ul> */
		apiKey?: Array<ApiKeyOutput>;
	}
	export interface ApiKeyResponseFormProperties {
	}
	export function CreateApiKeyResponseFormGroup() {
		return new FormGroup<ApiKeyResponseFormProperties>({
		});

	}

	export interface AssetClassification {

		/**
		 * The allocation percentage of the holding.<br><br><b>Required Feature Enablement</b>: Asset classification feature<br><br><b>Applicable containers</b>: investment<br>
		 * Type: double
		 */
		allocation?: number | null;

		/** The type of classification to which the investment belongs (assetClass, country, sector, and style).<br><b>Required Feature Enablement</b>: Asset classification feature<br><br><b>Applicable containers</b>: investment<br> */
		classificationType?: string | null;

		/** The value for each classificationType.<br><b>Required Feature Enablement</b>: Asset classification feature<br><br><b>Applicable containers</b>: investment<br> */
		classificationValue?: string | null;
	}
	export interface AssetClassificationFormProperties {

		/**
		 * The allocation percentage of the holding.<br><br><b>Required Feature Enablement</b>: Asset classification feature<br><br><b>Applicable containers</b>: investment<br>
		 * Type: double
		 */
		allocation: FormControl<number | null | undefined>,

		/** The type of classification to which the investment belongs (assetClass, country, sector, and style).<br><b>Required Feature Enablement</b>: Asset classification feature<br><br><b>Applicable containers</b>: investment<br> */
		classificationType: FormControl<string | null | undefined>,

		/** The value for each classificationType.<br><b>Required Feature Enablement</b>: Asset classification feature<br><br><b>Applicable containers</b>: investment<br> */
		classificationValue: FormControl<string | null | undefined>,
	}
	export function CreateAssetClassificationFormGroup() {
		return new FormGroup<AssetClassificationFormProperties>({
			allocation: new FormControl<number | null | undefined>(undefined),
			classificationType: new FormControl<string | null | undefined>(undefined),
			classificationValue: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AssetClassificationList {

		/** The type of classification to which the investment belongs (assetClass, country, sector, and style).<br><b>Required Feature Enablement</b>: Asset classification feature<br><br><b>Applicable containers</b>: investment<br> */
		classificationType?: string | null;

		/** The value for each classificationType.<br><b>Required Feature Enablement</b>: Asset classification feature<br><br><b>Applicable containers</b>: investment<br> */
		classificationValue?: Array<string>;
	}
	export interface AssetClassificationListFormProperties {

		/** The type of classification to which the investment belongs (assetClass, country, sector, and style).<br><b>Required Feature Enablement</b>: Asset classification feature<br><br><b>Applicable containers</b>: investment<br> */
		classificationType: FormControl<string | null | undefined>,
	}
	export function CreateAssetClassificationListFormGroup() {
		return new FormGroup<AssetClassificationListFormProperties>({
			classificationType: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Attribute {

		/** Containers for which the attributes are supported.<br><br><b>Endpoints</b>:<ul><li>GET providers</li><li>GET providers/{providerId}</li></ul> */
		container?: Array<AccountCONTAINER>;
		containerAttributes?: ContainerAttributes;

		/** Applicable only to EBILLS and STATEMENTS attributes of DOCUMENT dataset.<br><br><b>Endpoints</b>:<ul><li>POST providerAccounts</li><li>PUT providerAccounts</li></ul> */
		fromDate?: string | null;

		/** Applicable only to TAX attribute of DOCUMENT dataset.<br><br><b>Endpoints</b>:<ul><li>POST providerAccounts</li><li>PUT providerAccounts</li></ul> */
		fromFinYear?: string | null;

		/** Attributes that are supported for a dataset.<br><br><b>Endpoints</b>:<ul><li>GET providers</li><li>GET providers/{providerId}</li></ul> */
		name?: AttributeName | null;

		/** Applicable only to EBILLS and STATEMENTS attributes of DOCUMENT dataset.<br><br><b>Endpoints</b>:<ul><li>POST providerAccounts</li><li>PUT providerAccounts</li></ul> */
		toDate?: string | null;

		/** Applicable only to TAX attribute of DOCUMENT dataset.<br><br><b>Endpoints</b>:<ul><li>POST providerAccounts</li><li>PUT providerAccounts</li></ul> */
		toFinYear?: string | null;
	}
	export interface AttributeFormProperties {

		/** Applicable only to EBILLS and STATEMENTS attributes of DOCUMENT dataset.<br><br><b>Endpoints</b>:<ul><li>POST providerAccounts</li><li>PUT providerAccounts</li></ul> */
		fromDate: FormControl<string | null | undefined>,

		/** Applicable only to TAX attribute of DOCUMENT dataset.<br><br><b>Endpoints</b>:<ul><li>POST providerAccounts</li><li>PUT providerAccounts</li></ul> */
		fromFinYear: FormControl<string | null | undefined>,

		/** Attributes that are supported for a dataset.<br><br><b>Endpoints</b>:<ul><li>GET providers</li><li>GET providers/{providerId}</li></ul> */
		name: FormControl<AttributeName | null | undefined>,

		/** Applicable only to EBILLS and STATEMENTS attributes of DOCUMENT dataset.<br><br><b>Endpoints</b>:<ul><li>POST providerAccounts</li><li>PUT providerAccounts</li></ul> */
		toDate: FormControl<string | null | undefined>,

		/** Applicable only to TAX attribute of DOCUMENT dataset.<br><br><b>Endpoints</b>:<ul><li>POST providerAccounts</li><li>PUT providerAccounts</li></ul> */
		toFinYear: FormControl<string | null | undefined>,
	}
	export function CreateAttributeFormGroup() {
		return new FormGroup<AttributeFormProperties>({
			fromDate: new FormControl<string | null | undefined>(undefined),
			fromFinYear: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<AttributeName | null | undefined>(undefined),
			toDate: new FormControl<string | null | undefined>(undefined),
			toFinYear: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ContainerAttributes {
		BANK?: TransactionDays;
		CREDITCARD?: TransactionDays;
		INSURANCE?: TransactionDays;
		INVESTMENT?: TransactionDays;
		LOAN?: TransactionDays;
	}
	export interface ContainerAttributesFormProperties {
	}
	export function CreateContainerAttributesFormGroup() {
		return new FormGroup<ContainerAttributesFormProperties>({
		});

	}

	export interface TransactionDays {
		fullAccountNumberFields?: Array<string>;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		numberOfTransactionDays?: number | null;
	}
	export interface TransactionDaysFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		numberOfTransactionDays: FormControl<number | null | undefined>,
	}
	export function CreateTransactionDaysFormGroup() {
		return new FormGroup<TransactionDaysFormProperties>({
			numberOfTransactionDays: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum AttributeName { BASIC_ACCOUNT_INFO = 'BASIC_ACCOUNT_INFO', TRANSACTIONS = 'TRANSACTIONS', STATEMENTS = 'STATEMENTS', HOLDINGS = 'HOLDINGS', ACCOUNT_DETAILS = 'ACCOUNT_DETAILS', TAX = 'TAX', EBILLS = 'EBILLS', FULL_ACCT_NUMBER = 'FULL_ACCT_NUMBER', BANK_TRANSFER_CODE = 'BANK_TRANSFER_CODE', HOLDER_NAME = 'HOLDER_NAME', HOLDER_DETAILS = 'HOLDER_DETAILS', PAYMENT_PROFILE = 'PAYMENT_PROFILE', PAYMENT_DETAILS = 'PAYMENT_DETAILS', INTEREST_DETAILS = 'INTEREST_DETAILS', COVERAGE = 'COVERAGE' }

	export interface Capability {
		container?: Array<AccountCONTAINER>;
		name?: string | null;
	}
	export interface CapabilityFormProperties {
		name: FormControl<string | null | undefined>,
	}
	export function CreateCapabilityFormGroup() {
		return new FormGroup<CapabilityFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ClientCredentialToken {

		/** Access Token to access YSL 1.1 services.<br><br><b>Endpoints</b>:<ul><li>POST /auth/token</li></ul> */
		accessToken?: string | null;

		/**
		 * Time in seconds after which the issued accessToken expires.<br><br><b>Endpoints</b>:<ul><li>POST /auth/token</li></ul>
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		expiresIn?: number | null;

		/** The date and time on which accessToken was created for the customer.<br><br><b>Endpoints</b>:<ul><li>POST /auth/token</li></ul> */
		issuedAt?: string | null;
	}
	export interface ClientCredentialTokenFormProperties {

		/** Access Token to access YSL 1.1 services.<br><br><b>Endpoints</b>:<ul><li>POST /auth/token</li></ul> */
		accessToken: FormControl<string | null | undefined>,

		/**
		 * Time in seconds after which the issued accessToken expires.<br><br><b>Endpoints</b>:<ul><li>POST /auth/token</li></ul>
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		expiresIn: FormControl<number | null | undefined>,

		/** The date and time on which accessToken was created for the customer.<br><br><b>Endpoints</b>:<ul><li>POST /auth/token</li></ul> */
		issuedAt: FormControl<string | null | undefined>,
	}
	export function CreateClientCredentialTokenFormGroup() {
		return new FormGroup<ClientCredentialTokenFormProperties>({
			accessToken: new FormControl<string | null | undefined>(undefined),
			expiresIn: new FormControl<number | null | undefined>(undefined),
			issuedAt: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ClientCredentialTokenResponse {
		token?: ClientCredentialToken;
	}
	export interface ClientCredentialTokenResponseFormProperties {
	}
	export function CreateClientCredentialTokenResponseFormGroup() {
		return new FormGroup<ClientCredentialTokenResponseFormProperties>({
		});

	}

	export interface Cobrand {

		/**
		 * Required
		 * Min length: 1
		 * Max length: 2147483647
		 */
		cobrandLogin: string;

		/**
		 * Required
		 * Min length: 1
		 * Max length: 2147483647
		 */
		cobrandPassword: string;

		/** The customer's locale that will be considered for the localization functionality.<br><br><b>Endpoints</b>:<ul><li>POST cobrand/login</li></ul> */
		locale?: string | null;
	}
	export interface CobrandFormProperties {

		/**
		 * Required
		 * Min length: 1
		 * Max length: 2147483647
		 */
		cobrandLogin: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 * Max length: 2147483647
		 */
		cobrandPassword: FormControl<string | null | undefined>,

		/** The customer's locale that will be considered for the localization functionality.<br><br><b>Endpoints</b>:<ul><li>POST cobrand/login</li></ul> */
		locale: FormControl<string | null | undefined>,
	}
	export function CreateCobrandFormGroup() {
		return new FormGroup<CobrandFormProperties>({
			cobrandLogin: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(2147483647)]),
			cobrandPassword: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(2147483647)]),
			locale: new FormControl<string | null | undefined>(undefined, [Validators.pattern('[a-z]{2}_[A-Z]{2}')]),
		});

	}

	export interface CobrandLoginRequest {

		/** Required */
		cobrand: Cobrand;
	}
	export interface CobrandLoginRequestFormProperties {
	}
	export function CreateCobrandLoginRequestFormGroup() {
		return new FormGroup<CobrandLoginRequestFormProperties>({
		});

	}

	export interface CobrandLoginResponse {

		/** The application identifier.<br><br><b>Endpoints</b>:<ul><li>POST cobrand/login</li></ul> */
		applicationId?: string | null;

		/**
		 * Unique identifier of the cobrand (customer) in the system.<br><br><b>Endpoints</b>:<ul><li>POST cobrand/login</li></ul>
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		cobrandId?: string | null;

		/** The customer's locale that will be considered for the localization functionality.<br><br><b>Endpoints</b>:<ul><li>POST cobrand/login</li></ul> */
		locale?: string | null;
		session?: CobrandSession;
	}
	export interface CobrandLoginResponseFormProperties {

		/** The application identifier.<br><br><b>Endpoints</b>:<ul><li>POST cobrand/login</li></ul> */
		applicationId: FormControl<string | null | undefined>,

		/**
		 * Unique identifier of the cobrand (customer) in the system.<br><br><b>Endpoints</b>:<ul><li>POST cobrand/login</li></ul>
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		cobrandId: FormControl<string | null | undefined>,

		/** The customer's locale that will be considered for the localization functionality.<br><br><b>Endpoints</b>:<ul><li>POST cobrand/login</li></ul> */
		locale: FormControl<string | null | undefined>,
	}
	export function CreateCobrandLoginResponseFormGroup() {
		return new FormGroup<CobrandLoginResponseFormProperties>({
			applicationId: new FormControl<string | null | undefined>(undefined),
			cobrandId: new FormControl<string | null | undefined>(undefined),
			locale: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CobrandSession {
		cobSession?: string | null;
	}
	export interface CobrandSessionFormProperties {
		cobSession: FormControl<string | null | undefined>,
	}
	export function CreateCobrandSessionFormGroup() {
		return new FormGroup<CobrandSessionFormProperties>({
			cobSession: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CobrandNotificationEvent {

		/**
		 * URL to which the notification should be posted.<br><br><b>Endpoints</b>:<ul><li>GET cobrand/config/notifications/events</li></ul>
		 * Min length: 1
		 * Max length: 2147483647
		 */
		callbackUrl?: string | null;

		/** Name of the event for which the customers must subscribe to receive notifications.<br><b>Valid Value:</b> Notification Events Name<br><br><b>Endpoints</b>:<ul><li>GET cobrand/config/notifications/events</li></ul><b>Applicable Values</b><br> */
		name?: CobrandNotificationEventName | null;
	}
	export interface CobrandNotificationEventFormProperties {

		/**
		 * URL to which the notification should be posted.<br><br><b>Endpoints</b>:<ul><li>GET cobrand/config/notifications/events</li></ul>
		 * Min length: 1
		 * Max length: 2147483647
		 */
		callbackUrl: FormControl<string | null | undefined>,

		/** Name of the event for which the customers must subscribe to receive notifications.<br><b>Valid Value:</b> Notification Events Name<br><br><b>Endpoints</b>:<ul><li>GET cobrand/config/notifications/events</li></ul><b>Applicable Values</b><br> */
		name: FormControl<CobrandNotificationEventName | null | undefined>,
	}
	export function CreateCobrandNotificationEventFormGroup() {
		return new FormGroup<CobrandNotificationEventFormProperties>({
			callbackUrl: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2147483647)]),
			name: new FormControl<CobrandNotificationEventName | null | undefined>(undefined),
		});

	}

	export enum CobrandNotificationEventName { REFRESH = 'REFRESH', DATA_UPDATES = 'DATA_UPDATES', AUTO_REFRESH_UPDATES = 'AUTO_REFRESH_UPDATES' }

	export interface CobrandNotificationResponse {
		event?: Array<CobrandNotificationEvent>;
	}
	export interface CobrandNotificationResponseFormProperties {
	}
	export function CreateCobrandNotificationResponseFormGroup() {
		return new FormGroup<CobrandNotificationResponseFormProperties>({
		});

	}

	export interface CobrandPublicKeyResponse {

		/** The key name used for encryption.<br><br><b>Endpoints</b>:<ul><li>GET cobrand/publicKey</li></ul> */
		keyAlias?: string | null;

		/** Public key that the customer should be using to encrypt the credentials and answers before sending to the add & update providerAccounts APIs.<br><br><b>Endpoints</b>:<ul><li>GET cobrand/publicKey</li></ul> */
		keyAsPemString?: string | null;
	}
	export interface CobrandPublicKeyResponseFormProperties {

		/** The key name used for encryption.<br><br><b>Endpoints</b>:<ul><li>GET cobrand/publicKey</li></ul> */
		keyAlias: FormControl<string | null | undefined>,

		/** Public key that the customer should be using to encrypt the credentials and answers before sending to the add & update providerAccounts APIs.<br><br><b>Endpoints</b>:<ul><li>GET cobrand/publicKey</li></ul> */
		keyAsPemString: FormControl<string | null | undefined>,
	}
	export function CreateCobrandPublicKeyResponseFormGroup() {
		return new FormGroup<CobrandPublicKeyResponseFormProperties>({
			keyAlias: new FormControl<string | null | undefined>(undefined),
			keyAsPemString: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ConfigsNotificationEvent {

		/**
		 * URL to which the notification should be posted.<br><br><b>Endpoints</b>:<ul><li>GET configs/notifications/events</li></ul>
		 * Min length: 1
		 * Max length: 2147483647
		 */
		callbackUrl?: string | null;

		/** Name of the event for which the customers must subscribe to receive notifications.<br><b>Valid Value:</b> Notification Events Name<br><br><b>Endpoints</b>:<ul><li>GET configs/notifications/events</li></ul><b>Applicable Values</b><br> */
		name?: CobrandNotificationEventName | null;
	}
	export interface ConfigsNotificationEventFormProperties {

		/**
		 * URL to which the notification should be posted.<br><br><b>Endpoints</b>:<ul><li>GET configs/notifications/events</li></ul>
		 * Min length: 1
		 * Max length: 2147483647
		 */
		callbackUrl: FormControl<string | null | undefined>,

		/** Name of the event for which the customers must subscribe to receive notifications.<br><b>Valid Value:</b> Notification Events Name<br><br><b>Endpoints</b>:<ul><li>GET configs/notifications/events</li></ul><b>Applicable Values</b><br> */
		name: FormControl<CobrandNotificationEventName | null | undefined>,
	}
	export function CreateConfigsNotificationEventFormGroup() {
		return new FormGroup<ConfigsNotificationEventFormProperties>({
			callbackUrl: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2147483647)]),
			name: new FormControl<CobrandNotificationEventName | null | undefined>(undefined),
		});

	}

	export interface ConfigsNotificationResponse {
		event?: Array<ConfigsNotificationEvent>;
	}
	export interface ConfigsNotificationResponseFormProperties {
	}
	export function CreateConfigsNotificationResponseFormGroup() {
		return new FormGroup<ConfigsNotificationResponseFormProperties>({
		});

	}

	export interface ConfigsPublicKey {

		/** The key name used for encryption.<br><br><b>Endpoints</b>:<ul><li>GET configs/publicKey</li></ul> */
		alias?: string | null;

		/** Public key that the customer should be using to encrypt the credentials and answers before sending to the add and update providerAccounts APIs.<br><br><b>Endpoints</b>:<ul><li>GET configs/publicKey</li></ul> */
		key?: string | null;
	}
	export interface ConfigsPublicKeyFormProperties {

		/** The key name used for encryption.<br><br><b>Endpoints</b>:<ul><li>GET configs/publicKey</li></ul> */
		alias: FormControl<string | null | undefined>,

		/** Public key that the customer should be using to encrypt the credentials and answers before sending to the add and update providerAccounts APIs.<br><br><b>Endpoints</b>:<ul><li>GET configs/publicKey</li></ul> */
		key: FormControl<string | null | undefined>,
	}
	export function CreateConfigsPublicKeyFormGroup() {
		return new FormGroup<ConfigsPublicKeyFormProperties>({
			alias: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ConfigsPublicKeyResponse {
		publicKey?: ConfigsPublicKey;
	}
	export interface ConfigsPublicKeyResponseFormProperties {
	}
	export function CreateConfigsPublicKeyResponseFormGroup() {
		return new FormGroup<ConfigsPublicKeyResponseFormProperties>({
		});

	}

	export interface Contact {

		/** Email Id of the merchant<br><br><b>Applicable containers</b>: bank,creditCard,investment,loan<br> */
		email?: string | null;

		/** Phone number of the merchant<br><br><b>Applicable containers</b>: bank,creditCard,investment,loan<br> */
		phone?: string | null;
	}
	export interface ContactFormProperties {

		/** Email Id of the merchant<br><br><b>Applicable containers</b>: bank,creditCard,investment,loan<br> */
		email: FormControl<string | null | undefined>,

		/** Phone number of the merchant<br><br><b>Applicable containers</b>: bank,creditCard,investment,loan<br> */
		phone: FormControl<string | null | undefined>,
	}
	export function CreateContactFormGroup() {
		return new FormGroup<ContactFormProperties>({
			email: new FormControl<string | null | undefined>(undefined),
			phone: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Coordinates {

		/**
		 * Latitude of the merchant<br><br><b>Applicable containers</b>: bank,creditCard,loan<br>
		 * Type: double
		 */
		latitude?: number | null;

		/**
		 * Longitude of the merchant<br><br><b>Applicable containers</b>: bank,creditCard,loan<br>
		 * Type: double
		 */
		longitude?: number | null;
	}
	export interface CoordinatesFormProperties {

		/**
		 * Latitude of the merchant<br><br><b>Applicable containers</b>: bank,creditCard,loan<br>
		 * Type: double
		 */
		latitude: FormControl<number | null | undefined>,

		/**
		 * Longitude of the merchant<br><br><b>Applicable containers</b>: bank,creditCard,loan<br>
		 * Type: double
		 */
		longitude: FormControl<number | null | undefined>,
	}
	export function CreateCoordinatesFormGroup() {
		return new FormGroup<CoordinatesFormProperties>({
			latitude: new FormControl<number | null | undefined>(undefined),
			longitude: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CreateAccountInfo {

		/**
		 * Required
		 * Min length: 1
		 * Max length: 100
		 */
		accountName: string;

		/**
		 * Min length: 0
		 * Max length: 100
		 */
		accountNumber?: string | null;

		/**
		 * Required
		 * Min length: 1
		 * Max length: 2147483647
		 */
		accountType: string;
		address?: AccountAddress;
		amountDue?: Money;
		balance?: Money;
		dueDate?: string | null;
		frequency?: AccountFrequency | null;
		homeValue?: Money;
		includeInNetWorth?: string | null;

		/**
		 * Min length: 0
		 * Max length: 250
		 */
		memo?: string | null;

		/**
		 * Min length: 0
		 * Max length: 50
		 */
		nickname?: string | null;
		valuationType?: AccountValuationType | null;
	}
	export interface CreateAccountInfoFormProperties {

		/**
		 * Required
		 * Min length: 1
		 * Max length: 100
		 */
		accountName: FormControl<string | null | undefined>,

		/**
		 * Min length: 0
		 * Max length: 100
		 */
		accountNumber: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 * Max length: 2147483647
		 */
		accountType: FormControl<string | null | undefined>,
		dueDate: FormControl<string | null | undefined>,
		frequency: FormControl<AccountFrequency | null | undefined>,
		includeInNetWorth: FormControl<string | null | undefined>,

		/**
		 * Min length: 0
		 * Max length: 250
		 */
		memo: FormControl<string | null | undefined>,

		/**
		 * Min length: 0
		 * Max length: 50
		 */
		nickname: FormControl<string | null | undefined>,
		valuationType: FormControl<AccountValuationType | null | undefined>,
	}
	export function CreateCreateAccountInfoFormGroup() {
		return new FormGroup<CreateAccountInfoFormProperties>({
			accountName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100)]),
			accountNumber: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(100), Validators.pattern('^[a-zA-Z0-9]+$')]),
			accountType: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(2147483647)]),
			dueDate: new FormControl<string | null | undefined>(undefined),
			frequency: new FormControl<AccountFrequency | null | undefined>(undefined),
			includeInNetWorth: new FormControl<string | null | undefined>(undefined),
			memo: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(250)]),
			nickname: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(50)]),
			valuationType: new FormControl<AccountValuationType | null | undefined>(undefined),
		});

	}

	export interface CreateAccountRequest {

		/** Required */
		account: CreateAccountInfo;
	}
	export interface CreateAccountRequestFormProperties {
	}
	export function CreateCreateAccountRequestFormGroup() {
		return new FormGroup<CreateAccountRequestFormProperties>({
		});

	}

	export interface CreateCobrandNotificationEvent {

		/**
		 * URL to which the notification should be posted.<br><br><b>Endpoints</b>:<ul><li>GET cobrand/config/notifications/events</li></ul>
		 * Min length: 1
		 * Max length: 2147483647
		 */
		callbackUrl?: string | null;
	}
	export interface CreateCobrandNotificationEventFormProperties {

		/**
		 * URL to which the notification should be posted.<br><br><b>Endpoints</b>:<ul><li>GET cobrand/config/notifications/events</li></ul>
		 * Min length: 1
		 * Max length: 2147483647
		 */
		callbackUrl: FormControl<string | null | undefined>,
	}
	export function CreateCreateCobrandNotificationEventFormGroup() {
		return new FormGroup<CreateCobrandNotificationEventFormProperties>({
			callbackUrl: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2147483647)]),
		});

	}

	export interface CreateCobrandNotificationEventRequest {

		/** Required */
		event: CreateCobrandNotificationEvent;
	}
	export interface CreateCobrandNotificationEventRequestFormProperties {
	}
	export function CreateCreateCobrandNotificationEventRequestFormGroup() {
		return new FormGroup<CreateCobrandNotificationEventRequestFormProperties>({
		});

	}

	export interface CreateConfigsNotificationEvent {

		/**
		 * URL to which the notification should be posted.<br><br><b>Endpoints</b>:<ul><li>GET configs/notifications/events</li></ul>
		 * Min length: 1
		 * Max length: 2147483647
		 */
		callbackUrl?: string | null;
	}
	export interface CreateConfigsNotificationEventFormProperties {

		/**
		 * URL to which the notification should be posted.<br><br><b>Endpoints</b>:<ul><li>GET configs/notifications/events</li></ul>
		 * Min length: 1
		 * Max length: 2147483647
		 */
		callbackUrl: FormControl<string | null | undefined>,
	}
	export function CreateCreateConfigsNotificationEventFormGroup() {
		return new FormGroup<CreateConfigsNotificationEventFormProperties>({
			callbackUrl: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2147483647)]),
		});

	}

	export interface CreateConfigsNotificationEventRequest {

		/** Required */
		event: CreateConfigsNotificationEvent;
	}
	export interface CreateConfigsNotificationEventRequestFormProperties {
	}
	export function CreateCreateConfigsNotificationEventRequestFormGroup() {
		return new FormGroup<CreateConfigsNotificationEventRequestFormProperties>({
		});

	}

	export interface CreatedAccountInfo {
		accountName?: string | null;
		accountNumber?: string | null;

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		id?: string | null;
	}
	export interface CreatedAccountInfoFormProperties {
		accountName: FormControl<string | null | undefined>,
		accountNumber: FormControl<string | null | undefined>,

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		id: FormControl<string | null | undefined>,
	}
	export function CreateCreatedAccountInfoFormGroup() {
		return new FormGroup<CreatedAccountInfoFormProperties>({
			accountName: new FormControl<string | null | undefined>(undefined),
			accountNumber: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreatedAccountResponse {
		account?: Array<CreatedAccountInfo>;
	}
	export interface CreatedAccountResponseFormProperties {
	}
	export function CreateCreatedAccountResponseFormGroup() {
		return new FormGroup<CreatedAccountResponseFormProperties>({
		});

	}

	export interface DataExtractsAccount {
		'401kLoan'?: Money;

		/** The type of service. E.g., Bank, Credit Card, Investment, Insurance, etc.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: All containers<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul><b>Applicable Values</b><br> */
		CONTAINER?: AccountCONTAINER | null;

		/** The account name as it appears at the site.<br>(The POST accounts service response return this field as name)<br><b>Applicable containers</b>: All Containers<br><b>Aggregated / Manual</b>: Both <br><b>Endpoints</b>:<br><ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul> */
		accountName?: string | null;

		/** The account number as it appears on the site. (The POST accounts service response return this field as number)<br><b>Additional Details</b>:<b> Bank/ Loan/ Insurance/ Investment</b>:<br> The account number for the bank account as it appears at the site.<br><b>Credit Card</b>: The account number of the card account as it appears at the site,<br>i.e., the card number.The account number can be full or partial based on how it is displayed in the account summary page of the site.In most cases, the site does not display the full account number in the account summary page and additional navigation is required to aggregate it.<br><b>Applicable containers</b>: All Containers<br><b>Aggregated / Manual</b>: Both <br><b>Endpoints</b>:<br><ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>POST accounts</li><li>GET dataExtracts/userData</li></ul> */
		accountNumber?: string | null;

		/** The status of the account that is updated by the consumer through an application or an API. Valid Values: AccountStatus<br><b>Additional Details:</b><br><b>ACTIVE:</b> All the added manual and aggregated accounts status will be made "ACTIVE" by default. <br><b>TO_BE_CLOSED:</b> If the aggregated accounts are not found or closed in the data provider site, Yodlee system marks the status as TO_BE_CLOSED<br><b>INACTIVE:</b> Users can update the status as INACTIVE to stop updating and to stop considering the account in other services<br><b>CLOSED:</b> Users can update the status as CLOSED, if the account is closed with the provider. <br><br><b>Aggregated / Manual</b>: Both <br><b>Applicable containers</b>: All containers<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul><b>Applicable Values</b><br> */
		accountStatus?: AccountAccountStatus | null;

		/** The type of account that is aggregated, i.e., savings, checking, credit card, charge, HELOC, etc. The account type is derived based on the attributes of the account. <br><b>Valid Values:</b><br><b>Aggregated Account Type</b><br><b>bank</b><ul><li>CHECKING</li><li>SAVINGS</li><li>CD</li><li>PPF</li><li>RECURRING_DEPOSIT</li><li>FSA</li><li>MONEY_MARKET</li><li>IRA</li><li>PREPAID</li></ul><b>creditCard</b><ul><li>OTHER</li><li>CREDIT</li><li>STORE</li><li>CHARGE</li><li>OTHER</li></ul><b>investment (SN 1.0)</b><ul><li>BROKERAGE_MARGIN</li><li>HSA</li><li>IRA</li><li>BROKERAGE_CASH</li><li>401K</li><li>403B</li><li>TRUST</li><li>ANNUITY</li><li>SIMPLE</li><li>CUSTODIAL</li><li>BROKERAGE_CASH_OPTION</li><li>BROKERAGE_MARGIN_OPTION</li><li>INDIVIDUAL</li><li>CORPORATE</li><li>JTTIC</li><li>JTWROS</li><li>COMMUNITY_PROPERTY</li><li>JOINT_BY_ENTIRETY</li><li>CONSERVATORSHIP</li><li>ROTH</li><li>ROTH_CONVERSION</li><li>ROLLOVER</li><li>EDUCATIONAL</li><li>529_PLAN</li><li>457_DEFERRED_COMPENSATION</li><li>401A</li><li>PSP</li><li>MPP</li><li>STOCK_BASKET</li><li>LIVING_TRUST</li><li>REVOCABLE_TRUST</li><li>IRREVOCABLE_TRUST</li><li>CHARITABLE_REMAINDER</li><li>CHARITABLE_LEAD</li><li>CHARITABLE_GIFT_ACCOUNT</li><li>SEP</li><li>UTMA</li><li>UGMA</li><li>ESOPP</li><li>ADMINISTRATOR</li><li>EXECUTOR</li><li>PARTNERSHIP</li><li>SOLE_PROPRIETORSHIP</li><li>CHURCH</li><li>INVESTMENT_CLUB</li><li>RESTRICTED_STOCK_AWARD</li><li>CMA</li><li>EMPLOYEE_STOCK_PURCHASE_PLAN</li><li>PERFORMANCE_PLAN</li><li>BROKERAGE_LINK_ACCOUNT</li><li>MONEY_MARKET</li><li>SUPER_ANNUATION</li><li>REGISTERED_RETIREMENT_SAVINGS_PLAN</li><li>SPOUSAL_RETIREMENT_SAVINGS_PLAN</li><li>DEFERRED_PROFIT_SHARING_PLAN</li><li>NON_REGISTERED_SAVINGS_PLAN</li><li>REGISTERED_EDUCATION_SAVINGS_PLAN</li><li>GROUP_RETIREMENT_SAVINGS_PLAN</li><li>LOCKED_IN_RETIREMENT_SAVINGS_PLAN</li><li>RESTRICTED_LOCKED_IN_SAVINGS_PLAN</li><li>LOCKED_IN_RETIREMENT_ACCOUNT</li><li>REGISTERED_PENSION_PLAN</li><li>TAX_FREE_SAVINGS_ACCOUNT</li><li>LIFE_INCOME_FUND</li><li>REGISTERED_RETIREMENT_INCOME_FUND</li><li>SPOUSAL_RETIREMENT_INCOME_FUND</li><li>LOCKED_IN_REGISTERED_INVESTMENT_FUND</li><li>PRESCRIBED_REGISTERED_RETIREMENT_INCOME_FUND</li><li>GUARANTEED_INVESTMENT_CERTIFICATES</li><li>REGISTERED_DISABILITY_SAVINGS_PLAN</li><li>OTHER</li></ul><b>investment (SN 2.0)</b><ul><li>BROKERAGE_CASH</li><li>BROKERAGE_MARGIN</li><li>INDIVIDUAL_RETIREMENT_ACCOUNT_IRA</li><li>EMPLOYEE_RETIREMENT_ACCOUNT_401K</li><li>EMPLOYEE_RETIREMENT_SAVINGS_PLAN_403B</li><li>TRUST</li><li>ANNUITY</li><li>SIMPLE_IRA</li><li>CUSTODIAL_ACCOUNT</li><li>BROKERAGE_CASH_OPTION</li><li>BROKERAGE_MARGIN_OPTION</li><li>INDIVIDUAL</li><li>CORPORATE_INVESTMENT_ACCOUNT</li><li>JOINT_TENANTS_TENANCY_IN_COMMON_JTIC</li><li>JOINT_TENANTS_WITH_RIGHTS_OF_SURVIVORSHIP_JTWROS</li><li>JOINT_TENANTS_COMMUNITY_PROPERTY</li><li>JOINT_TENANTS_TENANTS_BY_ENTIRETY</li><li>CONSERVATOR</li><li>ROTH_IRA</li><li>ROTH_CONVERSION</li><li>ROLLOVER_IRA</li><li>EDUCATIONAL</li><li>EDUCATIONAL_SAVINGS_PLAN_529</li><li>DEFERRED_COMPENSATION_PLAN_457</li><li>MONEY_PURCHASE_RETIREMENT_PLAN_401A</li><li>PROFIT_SHARING_PLAN</li><li>MONEY_PURCHASE_PLAN</li><li>STOCK_BASKET_ACCOUNT</li><li>LIVING_TRUST</li><li>REVOCABLE_TRUST</li><li>IRREVOCABLE_TRUST</li><li>CHARITABLE_REMAINDER_TRUST</li><li>CHARITABLE_LEAD_TRUST</li><li>CHARITABLE_GIFT_ACCOUNT</li><li>SEP_IRA</li><li>UNIFORM_TRANSFER_TO_MINORS_ACT_UTMA</li><li>UNIFORM_GIFT_TO_MINORS_ACT_UGMA</li><li>EMPLOYEE_STOCK_OWNERSHIP_PLAN_ESOP</li><li>ADMINISTRATOR</li><li>EXECUTOR</li><li>PARTNERSHIP</li><li>PROPRIETORSHIP</li><li>CHURCH_ACCOUNT</li><li>INVESTMENT_CLUB</li><li>RESTRICTED_STOCK_AWARD</li><li>CASH_MANAGEMENT_ACCOUNT</li><li>EMPLOYEE_STOCK_PURCHASE_PLAN_ESPP</li><li>PERFORMANCE_PLAN</li><li>BROKERAGE_LINK_ACCOUNT</li><li>MONEY_MARKET_ACCOUNT</li><li>SUPERANNUATION</li><li>REGISTERED_RETIREMENT_SAVINGS_PLAN_RRSP</li><li>SPOUSAL_RETIREMENT_SAVINGS_PLAN_SRSP</li><li>DEFERRED_PROFIT_SHARING_PLAN_DPSP</li><li>NON_REGISTERED_SAVINGS_PLAN_NRSP</li><li>REGISTERED_EDUCATION_SAVINGS_PLAN_RESP</li><li>GROUP_RETIREMENT_SAVINGS_PLAN_GRSP</li><li>LOCKED_IN_RETIREMENT_SAVINGS_PLAN_LRSP</li><li>RESTRICTED_LOCKED_IN_SAVINGS_PLAN_RLSP</li><li>LOCKED_IN_RETIREMENT_ACCOUNT_LIRA</li><li>REGISTERED_PENSION_PLAN_RPP</li><li>TAX_FREE_SAVINGS_ACCOUNT_TFSA</li><li>LIFE_INCOME_FUND_LIF</li><li>REGISTERED_RETIREMENT_INCOME_FUND_RIF</li><li>SPOUSAL_RETIREMENT_INCOME_FUND_SRIF</li><li>LOCKED_IN_REGISTERED_INVESTMENT_FUND_LRIF</li><li>PRESCRIBED_REGISTERED_RETIREMENT_INCOME_FUND_PRIF</li><li>GUARANTEED_INVESTMENT_CERTIFICATES_GIC</li><li>REGISTERED_DISABILITY_SAVINGS_PLAN_RDSP</li><li>DEFINED_CONTRIBUTION_PLAN</li><li>DEFINED_BENEFIT_PLAN</li><li>EMPLOYEE_STOCK_OPTION_PLAN</li><li>NONQUALIFIED_DEFERRED_COMPENSATION_PLAN_409A</li><li>KEOGH_PLAN</li><li>EMPLOYEE_RETIREMENT_ACCOUNT_ROTH_401K</li><li>DEFERRED_CONTINGENT_CAPITAL_PLAN_DCCP</li><li>EMPLOYEE_BENEFIT_PLAN</li><li>EMPLOYEE_SAVINGS_PLAN</li><li>HEALTH_SAVINGS_ACCOUNT_HSA</li><li>COVERDELL_EDUCATION_SAVINGS_ACCOUNT_ESA</li><li>TESTAMENTARY_TRUST</li><li>ESTATE</li><li>GRANTOR_RETAINED_ANNUITY_TRUST_GRAT</li><li>ADVISORY_ACCOUNT</li><li>NON_PROFIT_ORGANIZATION_501C</li><li>HEALTH_REIMBURSEMENT_ARRANGEMENT_HRA</li><li>INDIVIDUAL_SAVINGS_ACCOUNT_ISA</li><li>CASH_ISA</li><li>STOCKS_AND_SHARES_ISA</li><li>INNOVATIVE_FINANCE_ISA</li><li>JUNIOR_ISA</li><li>EMPLOYEES_PROVIDENT_FUND_ORGANIZATION_EPFO</li><li>PUBLIC_PROVIDENT_FUND_PPF</li><li>EMPLOYEES_PENSION_SCHEME_EPS</li><li>NATIONAL_PENSION_SYSTEM_NPS</li><li>INDEXED_ANNUITY</li><li>ANNUITIZED_ANNUITY</li><li>VARIABLE_ANNUITY</li><li>ROTH_403B</li><li>SPOUSAL_IRA</li><li>SPOUSAL_ROTH_IRA</li><li>SARSEP_IRA</li><li>SUBSTANTIALLY_EQUAL_PERIODIC_PAYMENTS_SEPP</li><li>OFFSHORE_TRUST</li><li>IRREVOCABLE_LIFE_INSURANCE_TRUST</li><li>INTERNATIONAL_TRUST</li><li>LIFE_INTEREST_TRUST</li><li>EMPLOYEE_BENEFIT_TRUST</li><li>PRECIOUS_METAL_ACCOUNT</li><li>INVESTMENT_LOAN_ACCOUNT</li><li>GRANTOR_RETAINED_INCOME_TRUST</li><li>PENSION_PLAN</li><li>OTHER</li></ul><b>loan</b><ul><li>MORTGAGE</li><li>INSTALLMENT_LOAN</li><li>PERSONAL_LOAN</li><li>HOME_EQUITY_LINE_OF_CREDIT</li><li>LINE_OF_CREDIT</li><li>AUTO_LOAN</li><li>STUDENT_LOAN</li><li>HOME_LOAN</li></ul><b>insurance</b><ul><li>AUTO_INSURANCE</li><li>HEALTH_INSURANCE</li><li>HOME_INSURANCE</li><li>LIFE_INSURANCE</li><li>ANNUITY</li><li>TRAVEL_INSURANCE</li><li>INSURANCE</li></ul><b>realEstate</b><ul> <li>REAL_ESTATE</li></ul><b>reward</b><ul><li>REWARD_POINTS</li></ul><b>Manual Account Type</b><br><b>bank</b><ul><li>CHECKING</li><li>SAVINGS</li><li>CD</li><li>PREPAID</li></ul><b>credit</b><ul>  <li>CREDIT</li></ul><b>loan</b><ul>  <li>PERSONAL_LOAN</li><li>HOME_LOAN</li></ul><b>insurance</b><ul><li>INSURANCE</li><li>ANNUITY</li></ul><b>investment</b><ul><li>BROKERAGE_CASH</li></ul><br><br><b>Aggregated / Manual</b>: Both <br><b>Applicable containers</b>: All containers<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul> */
		accountType?: string | null;
		address?: AccountAddress;

		/** The source through which the account(s) are added in the system.<br><b>Valid Values</b>: SYSTEM, USER<br><b>Applicable containers</b>: All Containers<br><b>Aggregated / Manual</b>: Both <br><b>Endpoints</b>:<br><ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul><b>Applicable Values</b><br> */
		aggregationSource?: AccountAggregationSource | null;
		amountDue?: Money;

		/**
		 * Annual percentage yield (APY) is a normalized representation of an interest rate, based on a compounding period of one year. APY generally refers to the rate paid to a depositor by a financial institution on an account.<br><b>Applicable containers</b>: bank<br><b>Aggregated / Manual</b>: Aggregated<br><b>Endpoints</b>:<br><ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>
		 * Type: double
		 */
		annualPercentageYield?: number | null;
		annuityBalance?: Money;

		/**
		 * The annual percentage rate (APR) is the yearly rate of interest on the credit card account.<br><b>Additional Details:</b> The yearly percentage rate charged when a balance is held on a credit card. This rate of interest is applied every month on the outstanding credit card balance.<br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: creditCard<br><b>Endpoints</b>:<br><ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>
		 * Type: double
		 */
		apr?: number | null;

		/** The providerAccountIds that share the account with the primary providerAccountId that was created when the user had added the account for the first time.<br><b>Additional Details</b>: This attribute is returned in the response only if the account deduplication feature is enabled and the same account is mapped to more than one provider account IDs indicating the account is owned by more than one user, for example, joint accounts.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: All Containers<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul> */
		associatedProviderAccountId?: Array<number>;
		availableBalance?: Money;
		availableCash?: Money;
		availableCredit?: Money;
		balance?: Money;

		/** Bank and branch identification information.<br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: bank, investment, loan<br><b>Endpoints</b>:<br><ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul> */
		bankTransferCode?: Array<BankTransferCode>;
		cash?: Money;

		/**
		 * Annual percentage rate applied to cash withdrawals on the card.<br><br><b>Account Type</b>: Aggregated<br><b>Applicable containers</b>: creditCard<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>
		 * Type: double
		 */
		cashApr?: number | null;
		cashValue?: Money;

		/** The classification of the account such as personal, corporate, etc.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: bank, creditCard, investment, reward, loan, insurance<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul><b>Applicable Values</b><br> */
		classification?: AccountClassification | null;

		/** Property or possession offered to support a loan that can be seized on a default.<br><b>Applicable containers</b>: loan<br><b>Aggregated / Manual</b>: Aggregated<br><b>Endpoints</b>:<br><ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul> */
		collateral?: string | null;

		/** The coverage-related details of the account.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: insurance,investment<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul> */
		coverage?: Array<Coverage>;

		/** The date on which the account is created in the Yodlee system.<br><b>Additional Details:</b> It is the date when the user links or aggregates the account(s) that are held with the provider to the Yodlee system.<br><br><b>Aggregated / Manual</b>: Both <br><b>Applicable containers</b>: All containers<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul> */
		createdDate?: string | null;
		currentBalance?: Money;

		/** Current level of the reward program the user is associated with. E.g. Silver, Jade etc.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: reward<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul> */
		currentLevel?: string | null;

		/** Logical grouping of dataset attributes into datasets such as Basic Aggregation Data, Account Profile and Documents.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: All containers<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul> */
		dataset?: Array<AccountDataset>;
		deathBenefit?: Money;

		/**
		 * Derived APR will be an estimated purchase APR based on consumers credit card transactions and credit card purchase.<br><b>Aggregated / Manual / Derived</b>: Derived<br><b>Applicable containers</b>: creditCard<br><b>Endpoints</b>:<br><ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>
		 * Type: double
		 */
		derivedApr?: number | null;

		/** The name or identification of the account owner, as it appears at the FI site. <br><b>Note:</b> The account holder name can be full or partial based on how it is displayed in the account summary page of the FI site. In most cases, the FI site does not display the full account holder name in the account summary page.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: bank, creditCard, investment, insurance, loan,  reward<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul> */
		displayedName?: string | null;

		/** The date on which the due amount has to be paid. <br><b>Additional Details:</b><br><b>Credit Card:</b> The monthly date by when the minimum payment is due to be paid on the credit card account. <br><b>Loan:</b> The date on or before which the due amount should be paid.<br><b>Note:</b> The due date at the account-level can differ from the due date field at the statement-level, as the information in the aggregated card account data provides an up-to-date information to the consumer.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: creditCard, loan, insurance<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul> */
		dueDate?: string | null;

		/** Date on which the user is enrolled on the rewards program.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: reward<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul> */
		enrollmentDate?: string | null;
		escrowBalance?: Money;

		/** The date on which the home value was estimated.<br><br><b>Aggregated / Manual</b>: Manual<br><b>Applicable containers</b>: realEstate<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul> */
		estimatedDate?: string | null;

		/** The date on which the insurance policy expires or matures.<br><b>Additional Details:</b> The due date at the account-level can differ from the due date field at the statement-level, as the information in the aggregated card account data provides an up-to-date information to the consumer.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: insurance<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul> */
		expirationDate?: string | null;
		faceAmount?: Money;

		/** The frequency of the billing cycle of the account in case of card. The frequency in which premiums are paid in an insurance policy such as monthly, quarterly, and annually. The frequency in which due amounts are paid in a loan  account.<br><br><b>Aggregated / Manual</b>: Both <br><b>Applicable containers</b>:  creditCard, insurance, loan<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul><b>Applicable Values</b><br> */
		frequency?: AccountFrequency | null;

		/** A nonprofit or state organization that works with lender, servicer, school, and the Department of Education to help successfully repay Federal Family Education Loan Program (FFELP) loans. If FFELP student loans default, the guarantor takes ownership of them.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: loan<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul> */
		guarantor?: string | null;

		/** Type of home insurance, like -<ul><li>HOME_OWNER</li><li>RENTAL</li><li>RENTER</li><li>etc..</li></ul><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: insurance<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul><b>Applicable Values</b><br> */
		homeInsuranceType?: AccountHomeInsuranceType | null;
		homeValue?: Money;

		/**
		 * The primary key of the account resource and the unique identifier for the account.<br><br><b>Aggregated / Manual</b>: Both <br><b>Applicable containers</b>: All containers<br><b>Endpoints</b>:<ul><li>GET accounts </li><li>GET accounts/{accountId}</li><li>GET investmentOptions</li><li>GET accounts/historicalBalances</li><li>POST accounts</li><li>GET dataExtracts/userData</li></ul>
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		id?: string | null;

		/** Used to determine  whether an account to be considered in the networth calculation.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: bank,creditCard,loan,investment,insurance,realEstate,otherAssets,otherLiabilities<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul> */
		includeInNetWorth?: boolean | null;
		interestPaidLastYear?: Money;
		interestPaidYTD?: Money;

		/**
		 * <br><b>Bank:</b> The interest rate offered by a FI to its depositors on a bank account.<br><b>Loan:</b> Interest rate applied on the loan.<br><b>Additional Details:</b><br><b>Note:</b> The Interest Rate field is only applicable for the following account types: savings, checking, money market, and certificate of deposit.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: bank, loan<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>
		 * Type: double
		 */
		interestRate?: number | null;

		/** The type of the interest rate, for example, fixed or variable.<br><b>Applicable containers</b>: loan<br><b>Aggregated / Manual</b>: Aggregated<br><b>Endpoints</b>:<br><ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul><b>Applicable Values</b><br> */
		interestRateType?: AccountInterestRateType | null;

		/** The account to be considered as an asset or liability.<br><b>Applicable containers</b>: All Containers<br><b>Aggregated / Manual</b>: Both <br><b>Endpoints</b>:<br><ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul> */
		isAsset?: boolean | null;

		/** Indicates if the account is marked as deleted.<b>Applicable containers</b>: All Containers<br><b>Aggregated / Manual</b>: Both <br><b>Endpoints</b>:<br><ul><li>GET dataExtracts/userData</li></ul> */
		isDeleted?: boolean | null;

		/** Indicates if an account is aggregated from a site or it is a manual account i.e. account information manually provided by the user.<br><b>Aggregated / Manual</b>: Both <br><b>Applicable containers</b>: All containers<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul> */
		isManual?: boolean | null;
		lastEmployeeContributionAmount?: Money;

		/** The date on which the last employee contribution was made to the 401k account.<br><b>Note:</b> The last employee contribution date field is derived from the transaction data and not aggregated from the FI site. The field is only applicable to the 401k account type.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: investment<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul> */
		lastEmployeeContributionDate?: string | null;
		lastPayment?: Money;
		lastPaymentAmount?: Money;

		/** The date on which the payment for the previous or current billing cycle is done.<br><b>Additional Details:</b> If the payment is already done for the current billing cycle, then the field indicates the payment date of the current billing cycle. If payment is yet to be done for the current billing cycle, then the field indicates the date on which the payment was made for any of the previous billing cycles. The last payment date at the account-level can differ from the last payment date at the statement-level, as the information in the aggregated card account data provides an up-to-date information to the consumer.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: creditCard, loan, insurance<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul> */
		lastPaymentDate?: string | null;

		/** The date time the account information was last retrieved from the provider site and updated in the Yodlee system.<br><br><b>Aggregated / Manual</b>: Both <br><b>Applicable containers</b>: All containers<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul> */
		lastUpdated?: string | null;

		/** The financial institution that provides the loan.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: loan<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul> */
		lender?: string | null;

		/** Type of life insurance.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: insurance<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul><b>Applicable Values</b><br> */
		lifeInsuranceType?: AccountLifeInsuranceType | null;

		/** The date by which the payoff amount should be paid.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: loan<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul> */
		loanPayByDate?: string | null;
		loanPayoffAmount?: Money;
		loanPayoffDetails?: LoanPayoffDetails;
		marginBalance?: Money;
		maturityAmount?: Money;

		/** The date when a certificate of deposit (CD/FD) matures or the final payment date of a loan at which point the principal amount (including pending interest) is due to be paid.<br><b>Additional Details:</b> The date when a certificate of deposit (CD) matures, i.e., the money in the CD can be withdrawn without paying an early withdrawal penalty.The final payment date of a loan, i.e., the principal amount (including pending interest) is due to be paid.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: bank, loan<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul> */
		maturityDate?: string | null;

		/** The additional description or notes given by the user.<br><br><b>Aggregated / Manual</b>: Both <br><b>Applicable containers</b>: All containers<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul> */
		memo?: string | null;
		minimumAmountDue?: Money;
		moneyMarketBalance?: Money;

		/** The eligible next level of the rewards program.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: reward<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul> */
		nextLevel?: string | null;

		/** The nickname of the account as provided by the consumer to identify an account. The account nickname can be used instead of the account name.<br><br><b>Aggregated / Manual</b>: Both <br><b>Applicable containers</b>: All containers<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul> */
		nickname?: string | null;

		/** Indicates the migration status of the account from screen-scraping provider to the Open Banking provider. <br><br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul> */
		oauthMigrationStatus?: AccountOauthMigrationStatus | null;
		originalLoanAmount?: Money;

		/** The date on which the loan is disbursed.<br><br><b>Aggregated / Manual</b>: Both <br><b>Applicable containers</b>: loan<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul> */
		originationDate?: string | null;
		overDraftLimit?: Money;

		/** The date on which the insurance policy coverage commences.<br><b>Applicable containers</b>: insurance<br><b>Aggregated / Manual</b>: Aggregated<br><b>Endpoints</b>:<br><ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul> */
		policyEffectiveDate?: string | null;

		/** The date the insurance policy began.<br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: insurance<br><b>Endpoints</b>:<br><ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul> */
		policyFromDate?: string | null;

		/** The status of the policy.<br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: insurance<br><b>Endpoints</b>:<br><ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul><b>Applicable Values</b><br> */
		policyStatus?: AccountPolicyStatus | null;

		/** The duration for which the policy is valid or in effect. For example, one year, five years, etc.<br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: insurance<br><b>Endpoints</b>:<br><ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul> */
		policyTerm?: string | null;

		/** The date to which the policy exists.<br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: insurance<br><b>Endpoints</b>:<br><ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul> */
		policyToDate?: string | null;
		premium?: Money;

		/** The number of years for which premium payments have to be made in a policy.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: insurance<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul> */
		premiumPaymentTerm?: string | null;

		/** Primary reward unit for this reward program. E.g. miles, points, etc.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: reward<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul> */
		primaryRewardUnit?: string | null;
		principalBalance?: Money;

		/**
		 * The primary key of the provider account resource.<br><br><b>Aggregated / Manual</b>: Both <br><b>Applicable containers</b>: All containers<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		providerAccountId?: string | null;

		/** Identifier of the provider site. The primary key of provider resource. <br><br><b>Aggregated / Manual</b>: Both <br><b>Applicable containers</b>: All containers<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul> */
		providerId?: string | null;

		/** Service provider or institution name where the account originates. This belongs to the provider resource.<br><br><b>Aggregated / Manual</b>: Both <br><b>Applicable containers</b>: All containers<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul> */
		providerName?: string | null;
		recurringPayment?: Money;
		remainingBalance?: Money;

		/** The type of repayment plan that the borrower prefers to repay the loan. <br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: loan<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul><b>Applicable Values:</b><br> */
		repaymentPlanType?: AccountRepaymentPlanType | null;

		/** Information of different reward balances associated with the account.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: reward<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul> */
		rewardBalance?: Array<RewardBalance>;
		runningBalance?: Money;
		shortBalance?: Money;

		/** Indicates the status of the loan account. <br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: loan<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul><b>Applicable Values:</b><br> */
		sourceAccountStatus?: AccountSourceAccountStatus | null;

		/** A unique ID that the provider site has assigned to the account. The source ID is only available for the HELD accounts.<br><br><b>Applicable containers</b>: bank, creditCard, investment, insurance, loan,  reward<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul> */
		sourceId?: string | null;

		/** The tenure for which the CD account is valid  or in case of loan, the number of years/months over which the loan amount  has to be repaid. <br><b>Additional Details:</b><br>  Bank: The Term field is only applicable for the account type CD.Loan: The period for which the loan agreement is in force. The period, before or at the end of which, the loan should either be repaid or renegotiated for another term.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: bank, loan<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul> */
		term?: string | null;
		totalCashLimit?: Money;
		totalCreditLimit?: Money;
		totalCreditLine?: Money;
		totalUnvestedBalance?: Money;
		totalVestedBalance?: Money;

		/** <b>Applicable containers</b>: reward, bank, creditCard, investment, loan, insurance, realEstate,  otherLiabilities<br><b>Endpoints</b>:<ul><li>GET accounts </li><li>GET accounts/{accountId}</li><li>POST accounts</ul><li>GET dataExtracts/userData</li><b>Applicable Values</b><br> */
		userClassification?: AccountUserClassification | null;

		/** The valuation type indicates whether the home value is calculated either manually or by Yodlee Partners.<br><br><b>Aggregated / Manual</b>: Manual<br><b>Applicable containers</b>: realEstate<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul><b>Applicable Values</b><br> */
		valuationType?: AccountValuationType | null;
	}
	export interface DataExtractsAccountFormProperties {

		/** The type of service. E.g., Bank, Credit Card, Investment, Insurance, etc.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: All containers<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul><b>Applicable Values</b><br> */
		CONTAINER: FormControl<AccountCONTAINER | null | undefined>,

		/** The account name as it appears at the site.<br>(The POST accounts service response return this field as name)<br><b>Applicable containers</b>: All Containers<br><b>Aggregated / Manual</b>: Both <br><b>Endpoints</b>:<br><ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul> */
		accountName: FormControl<string | null | undefined>,

		/** The account number as it appears on the site. (The POST accounts service response return this field as number)<br><b>Additional Details</b>:<b> Bank/ Loan/ Insurance/ Investment</b>:<br> The account number for the bank account as it appears at the site.<br><b>Credit Card</b>: The account number of the card account as it appears at the site,<br>i.e., the card number.The account number can be full or partial based on how it is displayed in the account summary page of the site.In most cases, the site does not display the full account number in the account summary page and additional navigation is required to aggregate it.<br><b>Applicable containers</b>: All Containers<br><b>Aggregated / Manual</b>: Both <br><b>Endpoints</b>:<br><ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>POST accounts</li><li>GET dataExtracts/userData</li></ul> */
		accountNumber: FormControl<string | null | undefined>,

		/** The status of the account that is updated by the consumer through an application or an API. Valid Values: AccountStatus<br><b>Additional Details:</b><br><b>ACTIVE:</b> All the added manual and aggregated accounts status will be made "ACTIVE" by default. <br><b>TO_BE_CLOSED:</b> If the aggregated accounts are not found or closed in the data provider site, Yodlee system marks the status as TO_BE_CLOSED<br><b>INACTIVE:</b> Users can update the status as INACTIVE to stop updating and to stop considering the account in other services<br><b>CLOSED:</b> Users can update the status as CLOSED, if the account is closed with the provider. <br><br><b>Aggregated / Manual</b>: Both <br><b>Applicable containers</b>: All containers<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul><b>Applicable Values</b><br> */
		accountStatus: FormControl<AccountAccountStatus | null | undefined>,

		/** The type of account that is aggregated, i.e., savings, checking, credit card, charge, HELOC, etc. The account type is derived based on the attributes of the account. <br><b>Valid Values:</b><br><b>Aggregated Account Type</b><br><b>bank</b><ul><li>CHECKING</li><li>SAVINGS</li><li>CD</li><li>PPF</li><li>RECURRING_DEPOSIT</li><li>FSA</li><li>MONEY_MARKET</li><li>IRA</li><li>PREPAID</li></ul><b>creditCard</b><ul><li>OTHER</li><li>CREDIT</li><li>STORE</li><li>CHARGE</li><li>OTHER</li></ul><b>investment (SN 1.0)</b><ul><li>BROKERAGE_MARGIN</li><li>HSA</li><li>IRA</li><li>BROKERAGE_CASH</li><li>401K</li><li>403B</li><li>TRUST</li><li>ANNUITY</li><li>SIMPLE</li><li>CUSTODIAL</li><li>BROKERAGE_CASH_OPTION</li><li>BROKERAGE_MARGIN_OPTION</li><li>INDIVIDUAL</li><li>CORPORATE</li><li>JTTIC</li><li>JTWROS</li><li>COMMUNITY_PROPERTY</li><li>JOINT_BY_ENTIRETY</li><li>CONSERVATORSHIP</li><li>ROTH</li><li>ROTH_CONVERSION</li><li>ROLLOVER</li><li>EDUCATIONAL</li><li>529_PLAN</li><li>457_DEFERRED_COMPENSATION</li><li>401A</li><li>PSP</li><li>MPP</li><li>STOCK_BASKET</li><li>LIVING_TRUST</li><li>REVOCABLE_TRUST</li><li>IRREVOCABLE_TRUST</li><li>CHARITABLE_REMAINDER</li><li>CHARITABLE_LEAD</li><li>CHARITABLE_GIFT_ACCOUNT</li><li>SEP</li><li>UTMA</li><li>UGMA</li><li>ESOPP</li><li>ADMINISTRATOR</li><li>EXECUTOR</li><li>PARTNERSHIP</li><li>SOLE_PROPRIETORSHIP</li><li>CHURCH</li><li>INVESTMENT_CLUB</li><li>RESTRICTED_STOCK_AWARD</li><li>CMA</li><li>EMPLOYEE_STOCK_PURCHASE_PLAN</li><li>PERFORMANCE_PLAN</li><li>BROKERAGE_LINK_ACCOUNT</li><li>MONEY_MARKET</li><li>SUPER_ANNUATION</li><li>REGISTERED_RETIREMENT_SAVINGS_PLAN</li><li>SPOUSAL_RETIREMENT_SAVINGS_PLAN</li><li>DEFERRED_PROFIT_SHARING_PLAN</li><li>NON_REGISTERED_SAVINGS_PLAN</li><li>REGISTERED_EDUCATION_SAVINGS_PLAN</li><li>GROUP_RETIREMENT_SAVINGS_PLAN</li><li>LOCKED_IN_RETIREMENT_SAVINGS_PLAN</li><li>RESTRICTED_LOCKED_IN_SAVINGS_PLAN</li><li>LOCKED_IN_RETIREMENT_ACCOUNT</li><li>REGISTERED_PENSION_PLAN</li><li>TAX_FREE_SAVINGS_ACCOUNT</li><li>LIFE_INCOME_FUND</li><li>REGISTERED_RETIREMENT_INCOME_FUND</li><li>SPOUSAL_RETIREMENT_INCOME_FUND</li><li>LOCKED_IN_REGISTERED_INVESTMENT_FUND</li><li>PRESCRIBED_REGISTERED_RETIREMENT_INCOME_FUND</li><li>GUARANTEED_INVESTMENT_CERTIFICATES</li><li>REGISTERED_DISABILITY_SAVINGS_PLAN</li><li>OTHER</li></ul><b>investment (SN 2.0)</b><ul><li>BROKERAGE_CASH</li><li>BROKERAGE_MARGIN</li><li>INDIVIDUAL_RETIREMENT_ACCOUNT_IRA</li><li>EMPLOYEE_RETIREMENT_ACCOUNT_401K</li><li>EMPLOYEE_RETIREMENT_SAVINGS_PLAN_403B</li><li>TRUST</li><li>ANNUITY</li><li>SIMPLE_IRA</li><li>CUSTODIAL_ACCOUNT</li><li>BROKERAGE_CASH_OPTION</li><li>BROKERAGE_MARGIN_OPTION</li><li>INDIVIDUAL</li><li>CORPORATE_INVESTMENT_ACCOUNT</li><li>JOINT_TENANTS_TENANCY_IN_COMMON_JTIC</li><li>JOINT_TENANTS_WITH_RIGHTS_OF_SURVIVORSHIP_JTWROS</li><li>JOINT_TENANTS_COMMUNITY_PROPERTY</li><li>JOINT_TENANTS_TENANTS_BY_ENTIRETY</li><li>CONSERVATOR</li><li>ROTH_IRA</li><li>ROTH_CONVERSION</li><li>ROLLOVER_IRA</li><li>EDUCATIONAL</li><li>EDUCATIONAL_SAVINGS_PLAN_529</li><li>DEFERRED_COMPENSATION_PLAN_457</li><li>MONEY_PURCHASE_RETIREMENT_PLAN_401A</li><li>PROFIT_SHARING_PLAN</li><li>MONEY_PURCHASE_PLAN</li><li>STOCK_BASKET_ACCOUNT</li><li>LIVING_TRUST</li><li>REVOCABLE_TRUST</li><li>IRREVOCABLE_TRUST</li><li>CHARITABLE_REMAINDER_TRUST</li><li>CHARITABLE_LEAD_TRUST</li><li>CHARITABLE_GIFT_ACCOUNT</li><li>SEP_IRA</li><li>UNIFORM_TRANSFER_TO_MINORS_ACT_UTMA</li><li>UNIFORM_GIFT_TO_MINORS_ACT_UGMA</li><li>EMPLOYEE_STOCK_OWNERSHIP_PLAN_ESOP</li><li>ADMINISTRATOR</li><li>EXECUTOR</li><li>PARTNERSHIP</li><li>PROPRIETORSHIP</li><li>CHURCH_ACCOUNT</li><li>INVESTMENT_CLUB</li><li>RESTRICTED_STOCK_AWARD</li><li>CASH_MANAGEMENT_ACCOUNT</li><li>EMPLOYEE_STOCK_PURCHASE_PLAN_ESPP</li><li>PERFORMANCE_PLAN</li><li>BROKERAGE_LINK_ACCOUNT</li><li>MONEY_MARKET_ACCOUNT</li><li>SUPERANNUATION</li><li>REGISTERED_RETIREMENT_SAVINGS_PLAN_RRSP</li><li>SPOUSAL_RETIREMENT_SAVINGS_PLAN_SRSP</li><li>DEFERRED_PROFIT_SHARING_PLAN_DPSP</li><li>NON_REGISTERED_SAVINGS_PLAN_NRSP</li><li>REGISTERED_EDUCATION_SAVINGS_PLAN_RESP</li><li>GROUP_RETIREMENT_SAVINGS_PLAN_GRSP</li><li>LOCKED_IN_RETIREMENT_SAVINGS_PLAN_LRSP</li><li>RESTRICTED_LOCKED_IN_SAVINGS_PLAN_RLSP</li><li>LOCKED_IN_RETIREMENT_ACCOUNT_LIRA</li><li>REGISTERED_PENSION_PLAN_RPP</li><li>TAX_FREE_SAVINGS_ACCOUNT_TFSA</li><li>LIFE_INCOME_FUND_LIF</li><li>REGISTERED_RETIREMENT_INCOME_FUND_RIF</li><li>SPOUSAL_RETIREMENT_INCOME_FUND_SRIF</li><li>LOCKED_IN_REGISTERED_INVESTMENT_FUND_LRIF</li><li>PRESCRIBED_REGISTERED_RETIREMENT_INCOME_FUND_PRIF</li><li>GUARANTEED_INVESTMENT_CERTIFICATES_GIC</li><li>REGISTERED_DISABILITY_SAVINGS_PLAN_RDSP</li><li>DEFINED_CONTRIBUTION_PLAN</li><li>DEFINED_BENEFIT_PLAN</li><li>EMPLOYEE_STOCK_OPTION_PLAN</li><li>NONQUALIFIED_DEFERRED_COMPENSATION_PLAN_409A</li><li>KEOGH_PLAN</li><li>EMPLOYEE_RETIREMENT_ACCOUNT_ROTH_401K</li><li>DEFERRED_CONTINGENT_CAPITAL_PLAN_DCCP</li><li>EMPLOYEE_BENEFIT_PLAN</li><li>EMPLOYEE_SAVINGS_PLAN</li><li>HEALTH_SAVINGS_ACCOUNT_HSA</li><li>COVERDELL_EDUCATION_SAVINGS_ACCOUNT_ESA</li><li>TESTAMENTARY_TRUST</li><li>ESTATE</li><li>GRANTOR_RETAINED_ANNUITY_TRUST_GRAT</li><li>ADVISORY_ACCOUNT</li><li>NON_PROFIT_ORGANIZATION_501C</li><li>HEALTH_REIMBURSEMENT_ARRANGEMENT_HRA</li><li>INDIVIDUAL_SAVINGS_ACCOUNT_ISA</li><li>CASH_ISA</li><li>STOCKS_AND_SHARES_ISA</li><li>INNOVATIVE_FINANCE_ISA</li><li>JUNIOR_ISA</li><li>EMPLOYEES_PROVIDENT_FUND_ORGANIZATION_EPFO</li><li>PUBLIC_PROVIDENT_FUND_PPF</li><li>EMPLOYEES_PENSION_SCHEME_EPS</li><li>NATIONAL_PENSION_SYSTEM_NPS</li><li>INDEXED_ANNUITY</li><li>ANNUITIZED_ANNUITY</li><li>VARIABLE_ANNUITY</li><li>ROTH_403B</li><li>SPOUSAL_IRA</li><li>SPOUSAL_ROTH_IRA</li><li>SARSEP_IRA</li><li>SUBSTANTIALLY_EQUAL_PERIODIC_PAYMENTS_SEPP</li><li>OFFSHORE_TRUST</li><li>IRREVOCABLE_LIFE_INSURANCE_TRUST</li><li>INTERNATIONAL_TRUST</li><li>LIFE_INTEREST_TRUST</li><li>EMPLOYEE_BENEFIT_TRUST</li><li>PRECIOUS_METAL_ACCOUNT</li><li>INVESTMENT_LOAN_ACCOUNT</li><li>GRANTOR_RETAINED_INCOME_TRUST</li><li>PENSION_PLAN</li><li>OTHER</li></ul><b>loan</b><ul><li>MORTGAGE</li><li>INSTALLMENT_LOAN</li><li>PERSONAL_LOAN</li><li>HOME_EQUITY_LINE_OF_CREDIT</li><li>LINE_OF_CREDIT</li><li>AUTO_LOAN</li><li>STUDENT_LOAN</li><li>HOME_LOAN</li></ul><b>insurance</b><ul><li>AUTO_INSURANCE</li><li>HEALTH_INSURANCE</li><li>HOME_INSURANCE</li><li>LIFE_INSURANCE</li><li>ANNUITY</li><li>TRAVEL_INSURANCE</li><li>INSURANCE</li></ul><b>realEstate</b><ul> <li>REAL_ESTATE</li></ul><b>reward</b><ul><li>REWARD_POINTS</li></ul><b>Manual Account Type</b><br><b>bank</b><ul><li>CHECKING</li><li>SAVINGS</li><li>CD</li><li>PREPAID</li></ul><b>credit</b><ul>  <li>CREDIT</li></ul><b>loan</b><ul>  <li>PERSONAL_LOAN</li><li>HOME_LOAN</li></ul><b>insurance</b><ul><li>INSURANCE</li><li>ANNUITY</li></ul><b>investment</b><ul><li>BROKERAGE_CASH</li></ul><br><br><b>Aggregated / Manual</b>: Both <br><b>Applicable containers</b>: All containers<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul> */
		accountType: FormControl<string | null | undefined>,

		/** The source through which the account(s) are added in the system.<br><b>Valid Values</b>: SYSTEM, USER<br><b>Applicable containers</b>: All Containers<br><b>Aggregated / Manual</b>: Both <br><b>Endpoints</b>:<br><ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul><b>Applicable Values</b><br> */
		aggregationSource: FormControl<AccountAggregationSource | null | undefined>,

		/**
		 * Annual percentage yield (APY) is a normalized representation of an interest rate, based on a compounding period of one year. APY generally refers to the rate paid to a depositor by a financial institution on an account.<br><b>Applicable containers</b>: bank<br><b>Aggregated / Manual</b>: Aggregated<br><b>Endpoints</b>:<br><ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>
		 * Type: double
		 */
		annualPercentageYield: FormControl<number | null | undefined>,

		/**
		 * The annual percentage rate (APR) is the yearly rate of interest on the credit card account.<br><b>Additional Details:</b> The yearly percentage rate charged when a balance is held on a credit card. This rate of interest is applied every month on the outstanding credit card balance.<br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: creditCard<br><b>Endpoints</b>:<br><ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>
		 * Type: double
		 */
		apr: FormControl<number | null | undefined>,

		/**
		 * Annual percentage rate applied to cash withdrawals on the card.<br><br><b>Account Type</b>: Aggregated<br><b>Applicable containers</b>: creditCard<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>
		 * Type: double
		 */
		cashApr: FormControl<number | null | undefined>,

		/** The classification of the account such as personal, corporate, etc.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: bank, creditCard, investment, reward, loan, insurance<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul><b>Applicable Values</b><br> */
		classification: FormControl<AccountClassification | null | undefined>,

		/** Property or possession offered to support a loan that can be seized on a default.<br><b>Applicable containers</b>: loan<br><b>Aggregated / Manual</b>: Aggregated<br><b>Endpoints</b>:<br><ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul> */
		collateral: FormControl<string | null | undefined>,

		/** The date on which the account is created in the Yodlee system.<br><b>Additional Details:</b> It is the date when the user links or aggregates the account(s) that are held with the provider to the Yodlee system.<br><br><b>Aggregated / Manual</b>: Both <br><b>Applicable containers</b>: All containers<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul> */
		createdDate: FormControl<string | null | undefined>,

		/** Current level of the reward program the user is associated with. E.g. Silver, Jade etc.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: reward<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul> */
		currentLevel: FormControl<string | null | undefined>,

		/**
		 * Derived APR will be an estimated purchase APR based on consumers credit card transactions and credit card purchase.<br><b>Aggregated / Manual / Derived</b>: Derived<br><b>Applicable containers</b>: creditCard<br><b>Endpoints</b>:<br><ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>
		 * Type: double
		 */
		derivedApr: FormControl<number | null | undefined>,

		/** The name or identification of the account owner, as it appears at the FI site. <br><b>Note:</b> The account holder name can be full or partial based on how it is displayed in the account summary page of the FI site. In most cases, the FI site does not display the full account holder name in the account summary page.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: bank, creditCard, investment, insurance, loan,  reward<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul> */
		displayedName: FormControl<string | null | undefined>,

		/** The date on which the due amount has to be paid. <br><b>Additional Details:</b><br><b>Credit Card:</b> The monthly date by when the minimum payment is due to be paid on the credit card account. <br><b>Loan:</b> The date on or before which the due amount should be paid.<br><b>Note:</b> The due date at the account-level can differ from the due date field at the statement-level, as the information in the aggregated card account data provides an up-to-date information to the consumer.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: creditCard, loan, insurance<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul> */
		dueDate: FormControl<string | null | undefined>,

		/** Date on which the user is enrolled on the rewards program.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: reward<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul> */
		enrollmentDate: FormControl<string | null | undefined>,

		/** The date on which the home value was estimated.<br><br><b>Aggregated / Manual</b>: Manual<br><b>Applicable containers</b>: realEstate<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul> */
		estimatedDate: FormControl<string | null | undefined>,

		/** The date on which the insurance policy expires or matures.<br><b>Additional Details:</b> The due date at the account-level can differ from the due date field at the statement-level, as the information in the aggregated card account data provides an up-to-date information to the consumer.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: insurance<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul> */
		expirationDate: FormControl<string | null | undefined>,

		/** The frequency of the billing cycle of the account in case of card. The frequency in which premiums are paid in an insurance policy such as monthly, quarterly, and annually. The frequency in which due amounts are paid in a loan  account.<br><br><b>Aggregated / Manual</b>: Both <br><b>Applicable containers</b>:  creditCard, insurance, loan<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul><b>Applicable Values</b><br> */
		frequency: FormControl<AccountFrequency | null | undefined>,

		/** A nonprofit or state organization that works with lender, servicer, school, and the Department of Education to help successfully repay Federal Family Education Loan Program (FFELP) loans. If FFELP student loans default, the guarantor takes ownership of them.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: loan<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul> */
		guarantor: FormControl<string | null | undefined>,

		/** Type of home insurance, like -<ul><li>HOME_OWNER</li><li>RENTAL</li><li>RENTER</li><li>etc..</li></ul><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: insurance<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul><b>Applicable Values</b><br> */
		homeInsuranceType: FormControl<AccountHomeInsuranceType | null | undefined>,

		/**
		 * The primary key of the account resource and the unique identifier for the account.<br><br><b>Aggregated / Manual</b>: Both <br><b>Applicable containers</b>: All containers<br><b>Endpoints</b>:<ul><li>GET accounts </li><li>GET accounts/{accountId}</li><li>GET investmentOptions</li><li>GET accounts/historicalBalances</li><li>POST accounts</li><li>GET dataExtracts/userData</li></ul>
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		id: FormControl<string | null | undefined>,

		/** Used to determine  whether an account to be considered in the networth calculation.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: bank,creditCard,loan,investment,insurance,realEstate,otherAssets,otherLiabilities<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul> */
		includeInNetWorth: FormControl<boolean | null | undefined>,

		/**
		 * <br><b>Bank:</b> The interest rate offered by a FI to its depositors on a bank account.<br><b>Loan:</b> Interest rate applied on the loan.<br><b>Additional Details:</b><br><b>Note:</b> The Interest Rate field is only applicable for the following account types: savings, checking, money market, and certificate of deposit.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: bank, loan<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>
		 * Type: double
		 */
		interestRate: FormControl<number | null | undefined>,

		/** The type of the interest rate, for example, fixed or variable.<br><b>Applicable containers</b>: loan<br><b>Aggregated / Manual</b>: Aggregated<br><b>Endpoints</b>:<br><ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul><b>Applicable Values</b><br> */
		interestRateType: FormControl<AccountInterestRateType | null | undefined>,

		/** The account to be considered as an asset or liability.<br><b>Applicable containers</b>: All Containers<br><b>Aggregated / Manual</b>: Both <br><b>Endpoints</b>:<br><ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul> */
		isAsset: FormControl<boolean | null | undefined>,

		/** Indicates if the account is marked as deleted.<b>Applicable containers</b>: All Containers<br><b>Aggregated / Manual</b>: Both <br><b>Endpoints</b>:<br><ul><li>GET dataExtracts/userData</li></ul> */
		isDeleted: FormControl<boolean | null | undefined>,

		/** Indicates if an account is aggregated from a site or it is a manual account i.e. account information manually provided by the user.<br><b>Aggregated / Manual</b>: Both <br><b>Applicable containers</b>: All containers<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul> */
		isManual: FormControl<boolean | null | undefined>,

		/** The date on which the last employee contribution was made to the 401k account.<br><b>Note:</b> The last employee contribution date field is derived from the transaction data and not aggregated from the FI site. The field is only applicable to the 401k account type.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: investment<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul> */
		lastEmployeeContributionDate: FormControl<string | null | undefined>,

		/** The date on which the payment for the previous or current billing cycle is done.<br><b>Additional Details:</b> If the payment is already done for the current billing cycle, then the field indicates the payment date of the current billing cycle. If payment is yet to be done for the current billing cycle, then the field indicates the date on which the payment was made for any of the previous billing cycles. The last payment date at the account-level can differ from the last payment date at the statement-level, as the information in the aggregated card account data provides an up-to-date information to the consumer.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: creditCard, loan, insurance<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul> */
		lastPaymentDate: FormControl<string | null | undefined>,

		/** The date time the account information was last retrieved from the provider site and updated in the Yodlee system.<br><br><b>Aggregated / Manual</b>: Both <br><b>Applicable containers</b>: All containers<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul> */
		lastUpdated: FormControl<string | null | undefined>,

		/** The financial institution that provides the loan.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: loan<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul> */
		lender: FormControl<string | null | undefined>,

		/** Type of life insurance.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: insurance<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul><b>Applicable Values</b><br> */
		lifeInsuranceType: FormControl<AccountLifeInsuranceType | null | undefined>,

		/** The date by which the payoff amount should be paid.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: loan<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul> */
		loanPayByDate: FormControl<string | null | undefined>,

		/** The date when a certificate of deposit (CD/FD) matures or the final payment date of a loan at which point the principal amount (including pending interest) is due to be paid.<br><b>Additional Details:</b> The date when a certificate of deposit (CD) matures, i.e., the money in the CD can be withdrawn without paying an early withdrawal penalty.The final payment date of a loan, i.e., the principal amount (including pending interest) is due to be paid.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: bank, loan<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul> */
		maturityDate: FormControl<string | null | undefined>,

		/** The additional description or notes given by the user.<br><br><b>Aggregated / Manual</b>: Both <br><b>Applicable containers</b>: All containers<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul> */
		memo: FormControl<string | null | undefined>,

		/** The eligible next level of the rewards program.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: reward<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul> */
		nextLevel: FormControl<string | null | undefined>,

		/** The nickname of the account as provided by the consumer to identify an account. The account nickname can be used instead of the account name.<br><br><b>Aggregated / Manual</b>: Both <br><b>Applicable containers</b>: All containers<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul> */
		nickname: FormControl<string | null | undefined>,

		/** Indicates the migration status of the account from screen-scraping provider to the Open Banking provider. <br><br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul> */
		oauthMigrationStatus: FormControl<AccountOauthMigrationStatus | null | undefined>,

		/** The date on which the loan is disbursed.<br><br><b>Aggregated / Manual</b>: Both <br><b>Applicable containers</b>: loan<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul> */
		originationDate: FormControl<string | null | undefined>,

		/** The date on which the insurance policy coverage commences.<br><b>Applicable containers</b>: insurance<br><b>Aggregated / Manual</b>: Aggregated<br><b>Endpoints</b>:<br><ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul> */
		policyEffectiveDate: FormControl<string | null | undefined>,

		/** The date the insurance policy began.<br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: insurance<br><b>Endpoints</b>:<br><ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul> */
		policyFromDate: FormControl<string | null | undefined>,

		/** The status of the policy.<br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: insurance<br><b>Endpoints</b>:<br><ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul><b>Applicable Values</b><br> */
		policyStatus: FormControl<AccountPolicyStatus | null | undefined>,

		/** The duration for which the policy is valid or in effect. For example, one year, five years, etc.<br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: insurance<br><b>Endpoints</b>:<br><ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul> */
		policyTerm: FormControl<string | null | undefined>,

		/** The date to which the policy exists.<br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: insurance<br><b>Endpoints</b>:<br><ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul> */
		policyToDate: FormControl<string | null | undefined>,

		/** The number of years for which premium payments have to be made in a policy.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: insurance<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul> */
		premiumPaymentTerm: FormControl<string | null | undefined>,

		/** Primary reward unit for this reward program. E.g. miles, points, etc.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: reward<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul> */
		primaryRewardUnit: FormControl<string | null | undefined>,

		/**
		 * The primary key of the provider account resource.<br><br><b>Aggregated / Manual</b>: Both <br><b>Applicable containers</b>: All containers<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		providerAccountId: FormControl<string | null | undefined>,

		/** Identifier of the provider site. The primary key of provider resource. <br><br><b>Aggregated / Manual</b>: Both <br><b>Applicable containers</b>: All containers<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul> */
		providerId: FormControl<string | null | undefined>,

		/** Service provider or institution name where the account originates. This belongs to the provider resource.<br><br><b>Aggregated / Manual</b>: Both <br><b>Applicable containers</b>: All containers<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul> */
		providerName: FormControl<string | null | undefined>,

		/** The type of repayment plan that the borrower prefers to repay the loan. <br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: loan<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul><b>Applicable Values:</b><br> */
		repaymentPlanType: FormControl<AccountRepaymentPlanType | null | undefined>,

		/** Indicates the status of the loan account. <br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: loan<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul><b>Applicable Values:</b><br> */
		sourceAccountStatus: FormControl<AccountSourceAccountStatus | null | undefined>,

		/** A unique ID that the provider site has assigned to the account. The source ID is only available for the HELD accounts.<br><br><b>Applicable containers</b>: bank, creditCard, investment, insurance, loan,  reward<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul> */
		sourceId: FormControl<string | null | undefined>,

		/** The tenure for which the CD account is valid  or in case of loan, the number of years/months over which the loan amount  has to be repaid. <br><b>Additional Details:</b><br>  Bank: The Term field is only applicable for the account type CD.Loan: The period for which the loan agreement is in force. The period, before or at the end of which, the loan should either be repaid or renegotiated for another term.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: bank, loan<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul> */
		term: FormControl<string | null | undefined>,

		/** <b>Applicable containers</b>: reward, bank, creditCard, investment, loan, insurance, realEstate,  otherLiabilities<br><b>Endpoints</b>:<ul><li>GET accounts </li><li>GET accounts/{accountId}</li><li>POST accounts</ul><li>GET dataExtracts/userData</li><b>Applicable Values</b><br> */
		userClassification: FormControl<AccountUserClassification | null | undefined>,

		/** The valuation type indicates whether the home value is calculated either manually or by Yodlee Partners.<br><br><b>Aggregated / Manual</b>: Manual<br><b>Applicable containers</b>: realEstate<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul><b>Applicable Values</b><br> */
		valuationType: FormControl<AccountValuationType | null | undefined>,
	}
	export function CreateDataExtractsAccountFormGroup() {
		return new FormGroup<DataExtractsAccountFormProperties>({
			CONTAINER: new FormControl<AccountCONTAINER | null | undefined>(undefined),
			accountName: new FormControl<string | null | undefined>(undefined),
			accountNumber: new FormControl<string | null | undefined>(undefined),
			accountStatus: new FormControl<AccountAccountStatus | null | undefined>(undefined),
			accountType: new FormControl<string | null | undefined>(undefined),
			aggregationSource: new FormControl<AccountAggregationSource | null | undefined>(undefined),
			annualPercentageYield: new FormControl<number | null | undefined>(undefined),
			apr: new FormControl<number | null | undefined>(undefined),
			cashApr: new FormControl<number | null | undefined>(undefined),
			classification: new FormControl<AccountClassification | null | undefined>(undefined),
			collateral: new FormControl<string | null | undefined>(undefined),
			createdDate: new FormControl<string | null | undefined>(undefined),
			currentLevel: new FormControl<string | null | undefined>(undefined),
			derivedApr: new FormControl<number | null | undefined>(undefined),
			displayedName: new FormControl<string | null | undefined>(undefined),
			dueDate: new FormControl<string | null | undefined>(undefined),
			enrollmentDate: new FormControl<string | null | undefined>(undefined),
			estimatedDate: new FormControl<string | null | undefined>(undefined),
			expirationDate: new FormControl<string | null | undefined>(undefined),
			frequency: new FormControl<AccountFrequency | null | undefined>(undefined),
			guarantor: new FormControl<string | null | undefined>(undefined),
			homeInsuranceType: new FormControl<AccountHomeInsuranceType | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			includeInNetWorth: new FormControl<boolean | null | undefined>(undefined),
			interestRate: new FormControl<number | null | undefined>(undefined),
			interestRateType: new FormControl<AccountInterestRateType | null | undefined>(undefined),
			isAsset: new FormControl<boolean | null | undefined>(undefined),
			isDeleted: new FormControl<boolean | null | undefined>(undefined),
			isManual: new FormControl<boolean | null | undefined>(undefined),
			lastEmployeeContributionDate: new FormControl<string | null | undefined>(undefined),
			lastPaymentDate: new FormControl<string | null | undefined>(undefined),
			lastUpdated: new FormControl<string | null | undefined>(undefined),
			lender: new FormControl<string | null | undefined>(undefined),
			lifeInsuranceType: new FormControl<AccountLifeInsuranceType | null | undefined>(undefined),
			loanPayByDate: new FormControl<string | null | undefined>(undefined),
			maturityDate: new FormControl<string | null | undefined>(undefined),
			memo: new FormControl<string | null | undefined>(undefined),
			nextLevel: new FormControl<string | null | undefined>(undefined),
			nickname: new FormControl<string | null | undefined>(undefined),
			oauthMigrationStatus: new FormControl<AccountOauthMigrationStatus | null | undefined>(undefined),
			originationDate: new FormControl<string | null | undefined>(undefined),
			policyEffectiveDate: new FormControl<string | null | undefined>(undefined),
			policyFromDate: new FormControl<string | null | undefined>(undefined),
			policyStatus: new FormControl<AccountPolicyStatus | null | undefined>(undefined),
			policyTerm: new FormControl<string | null | undefined>(undefined),
			policyToDate: new FormControl<string | null | undefined>(undefined),
			premiumPaymentTerm: new FormControl<string | null | undefined>(undefined),
			primaryRewardUnit: new FormControl<string | null | undefined>(undefined),
			providerAccountId: new FormControl<string | null | undefined>(undefined),
			providerId: new FormControl<string | null | undefined>(undefined),
			providerName: new FormControl<string | null | undefined>(undefined),
			repaymentPlanType: new FormControl<AccountRepaymentPlanType | null | undefined>(undefined),
			sourceAccountStatus: new FormControl<AccountSourceAccountStatus | null | undefined>(undefined),
			sourceId: new FormControl<string | null | undefined>(undefined),
			term: new FormControl<string | null | undefined>(undefined),
			userClassification: new FormControl<AccountUserClassification | null | undefined>(undefined),
			valuationType: new FormControl<AccountValuationType | null | undefined>(undefined),
		});

	}

	export interface DataExtractsEvent {
		data?: DataExtractsEventData;
		info?: string | null;
	}
	export interface DataExtractsEventFormProperties {
		info: FormControl<string | null | undefined>,
	}
	export function CreateDataExtractsEventFormGroup() {
		return new FormGroup<DataExtractsEventFormProperties>({
			info: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DataExtractsEventData {
		fromDate?: string | null;
		toDate?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		userCount?: number | null;
		userData?: Array<DataExtractsEventUserData>;
	}
	export interface DataExtractsEventDataFormProperties {
		fromDate: FormControl<string | null | undefined>,
		toDate: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		userCount: FormControl<number | null | undefined>,
	}
	export function CreateDataExtractsEventDataFormGroup() {
		return new FormGroup<DataExtractsEventDataFormProperties>({
			fromDate: new FormControl<string | null | undefined>(undefined),
			toDate: new FormControl<string | null | undefined>(undefined),
			userCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DataExtractsEventUserData {
		links?: Array<DataExtractsEventLinks>;
		user?: DataExtractsUser;
	}
	export interface DataExtractsEventUserDataFormProperties {
	}
	export function CreateDataExtractsEventUserDataFormGroup() {
		return new FormGroup<DataExtractsEventUserDataFormProperties>({
		});

	}

	export interface DataExtractsEventLinks {
		href?: string | null;
		methodType?: string | null;
		rel?: string | null;
	}
	export interface DataExtractsEventLinksFormProperties {
		href: FormControl<string | null | undefined>,
		methodType: FormControl<string | null | undefined>,
		rel: FormControl<string | null | undefined>,
	}
	export function CreateDataExtractsEventLinksFormGroup() {
		return new FormGroup<DataExtractsEventLinksFormProperties>({
			href: new FormControl<string | null | undefined>(undefined),
			methodType: new FormControl<string | null | undefined>(undefined),
			rel: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DataExtractsUser {
		loginName?: string | null;
	}
	export interface DataExtractsUserFormProperties {
		loginName: FormControl<string | null | undefined>,
	}
	export function CreateDataExtractsUserFormGroup() {
		return new FormGroup<DataExtractsUserFormProperties>({
			loginName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DataExtractsEventResponse {
		event?: DataExtractsEvent;
	}
	export interface DataExtractsEventResponseFormProperties {
	}
	export function CreateDataExtractsEventResponseFormGroup() {
		return new FormGroup<DataExtractsEventResponseFormProperties>({
		});

	}

	export interface DataExtractsHolding {

		/**
		 * Unique identifier of the account to which the security is linked.<br><br><b>Applicable containers</b>: investment, insurance<br>
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		accountId?: string | null;
		accruedIncome?: Money;
		accruedInterest?: Money;

		/**
		 * The quantity of tradeable units in a contract.<br><b>Note</b>: The contract quantity field is only applicable to commodity and currency.<br><br><b>Applicable containers</b>: investment<br>
		 * Type: double
		 */
		contractQuantity?: number | null;
		costBasis?: Money;

		/**
		 * The stated interest rate for a bond.<br><br><b>Applicable containers</b>: investment<br>
		 * Type: double
		 */
		couponRate?: number | null;

		/** The date on which the holding is created in the Yodlee system.<br><br><b>Applicable containers</b>: investment, insurance<br> */
		createdDate?: string | null;

		/** The CUSIP (Committee on Uniform Securities Identification Procedures) identifies most the financial instruments in the United States and Canada.<br><br><b>Applicable containers</b>: investment<br> */
		cusipNumber?: string | null;

		/** The description (name) for the holding (E.g., Cisco Systems)<br>For insurance container, the field is only applicable for insurance annuity and variable life insurance types. <br><br><b>Applicable containers</b>: investment, insurance<br> */
		description?: string | null;

		/** The enrichedDescription is the security description of the normalized holding<br><br><b>Applicable containers</b>: investment, insurance<br> */
		enrichedDescription?: string | null;

		/**
		 * The quantity of the employee stock options that are already exercised or bought by the employee.<br><b>Note</b>: Once the employee stock options is exercised, they are either converted to cash value or equity positions depending on the FI. The exercised quantity field is only applicable to employee stock options.<br><br><b>Applicable containers</b>: investment<br>
		 * Type: double
		 */
		exercisedQuantity?: number | null;

		/** The date on which an option, right or warrant expires.<br><b>Note</b>: The expiration date field is only applicable to options and employee stock options.<br><br><b>Applicable containers</b>: investment<br> */
		expirationDate?: string | null;

		/** The date on which equity awards like ESOP, RSU, etc., are issued or granted.<br><b>Note</b>: The grant date field is only applicable to employee stock options, restricted stock units/awards, performance units, etc.<br><br><b>Applicable containers</b>: investment<br> */
		grantDate?: string | null;

		/** Type of holding<br><br><b>Applicable containers</b>: investment, insurance<br> */
		holdingType?: DataExtractsHoldingHoldingType | null;

		/**
		 * Unique identifier for the security added in the system. This is the primary key of the holding resource.<br><br><b>Applicable containers</b>: investment, insurance<br>
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		id?: string | null;

		/**
		 * The interest rate on a CD.<br><b>Note</b>: The interest rate field is only applicable to CD.<br><br><b>Applicable containers</b>: investment<br>
		 * Type: double
		 */
		interestRate?: number | null;

		/** Indicates that the holding is a short trading.<br><br><b>Applicable containers</b>: investment<br> */
		isShort?: boolean | null;

		/** The ISIN (International Securities Identification Number) is used worldwide to identify specific securities. It is equivalent to CUSIP for international markets.<br><br><b>Note</b>: The ISIN field is only applicable to the trade related transactions<br><br><b>Applicable containers</b>: investment<br> */
		isin?: string | null;

		/** The date when the information was last updated in the system.<br><br><b>Applicable containers</b>: investment, insurance<br> */
		lastUpdated?: string | null;

		/** Indicates the security match status id of the investment option identified during security normalization.<br><br><b>Applicable containers</b>: investment<br> */
		matchStatus?: string | null;

		/** The stated maturity date of a bond or CD.<br><br><b>Applicable containers</b>: investment<br> */
		maturityDate?: string | null;

		/** The type of the option position (i.e., put or call).<br><b>Note</b>: The option type field is only applicable to options.<br><br><b>Applicable containers</b>: investment<br><b>Applicable Values</b><br> */
		optionType?: DataExtractsHoldingOptionType | null;
		price?: Money;

		/**
		 * Unique identifier for the user's association with the provider.<br><br><b>Applicable containers</b>: investment, insurance<br>
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		providerAccountId?: string | null;

		/**
		 * The quantity held for the holding.<br><b>Note</b>: Only for bonds the quantity field indicates the normalized quantity and not the quantity aggregated from the site. The quantity field is only applicable to restricted stock units/awards, performance units, currency, and commodity.<br>For insurance container, the field is only applicable for insurance annuity and variable life insurance types.<br><br><b>Applicable containers</b>: investment, insurance<br>
		 * Type: double
		 */
		quantity?: number | null;

		/** Indicates the security style of holding identified through the security service.<br><br><b>Applicable containers</b>: investment, insurance<br> */
		securityStyle?: string | null;

		/** Indicates the security type of holding identified through the security service.<br><br><b>Applicable containers</b>: investment, insurance<br> */
		securityType?: string | null;

		/** The SEDOL (Stock Exchange Daily Official List) is a set of security identifiers used in the United Kingdom and Ireland for clearing purposes.<br><b>Note</b>: The SEDOL field is only applicable to the trade related transactions<br><br><b>Applicable containers</b>: investment<br> */
		sedol?: string | null;
		spread?: Money;
		strikePrice?: Money;

		/** The symbol of the security.<br><br><b>Applicable containers</b>: investment<br> */
		symbol?: string | null;

		/** The fixed duration for which the bond or CD is issued.<br><b>Note</b>: The term field is only applicable to CD.<br><br><b>Applicable containers</b>: investment<br> */
		term?: string | null;

		/**
		 * Indicates the number of unvested quantity or units.<br><b>Note</b>: The unvested quantity field is only applicable to employee stock options, restricted stock units/awards, performance units, etc.<br><br><b>Applicable containers</b>: investment<br>
		 * Type: double
		 */
		unvestedQuantity?: number | null;
		unvestedValue?: Money;
		value?: Money;

		/**
		 * The quantity of units or shares that are already vested on a vest date.<br><b>Note</b>: The vested quantity field is only applicable to employee stock options, restricted stock units/awards, performance units, etc.<br><br><b>Applicable containers</b>: investment<br>
		 * Type: double
		 */
		vestedQuantity?: number | null;

		/**
		 * The number of vested shares that can be exercised by the employee. It is usually equal to the vested quantity.<br><b>Note</b>: The vested shares exercisable field is only applicable to employee stock options, restricted stock units/awards, performance units, etc.<br><br><b>Applicable containers</b>: investment<br>
		 * Type: double
		 */
		vestedSharesExercisable?: number | null;
		vestedValue?: Money;

		/** The date on which a RSU, RSA, or an employee stock options become vested.<br><b>Note</b>: The vesting date field is only applicable to employee stock options, restricted stock units/awards, performance units, etc.<br><br><b>Applicable containers</b>: investment<br> */
		vestingDate?: string | null;
	}
	export interface DataExtractsHoldingFormProperties {

		/**
		 * Unique identifier of the account to which the security is linked.<br><br><b>Applicable containers</b>: investment, insurance<br>
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		accountId: FormControl<string | null | undefined>,

		/**
		 * The quantity of tradeable units in a contract.<br><b>Note</b>: The contract quantity field is only applicable to commodity and currency.<br><br><b>Applicable containers</b>: investment<br>
		 * Type: double
		 */
		contractQuantity: FormControl<number | null | undefined>,

		/**
		 * The stated interest rate for a bond.<br><br><b>Applicable containers</b>: investment<br>
		 * Type: double
		 */
		couponRate: FormControl<number | null | undefined>,

		/** The date on which the holding is created in the Yodlee system.<br><br><b>Applicable containers</b>: investment, insurance<br> */
		createdDate: FormControl<string | null | undefined>,

		/** The CUSIP (Committee on Uniform Securities Identification Procedures) identifies most the financial instruments in the United States and Canada.<br><br><b>Applicable containers</b>: investment<br> */
		cusipNumber: FormControl<string | null | undefined>,

		/** The description (name) for the holding (E.g., Cisco Systems)<br>For insurance container, the field is only applicable for insurance annuity and variable life insurance types. <br><br><b>Applicable containers</b>: investment, insurance<br> */
		description: FormControl<string | null | undefined>,

		/** The enrichedDescription is the security description of the normalized holding<br><br><b>Applicable containers</b>: investment, insurance<br> */
		enrichedDescription: FormControl<string | null | undefined>,

		/**
		 * The quantity of the employee stock options that are already exercised or bought by the employee.<br><b>Note</b>: Once the employee stock options is exercised, they are either converted to cash value or equity positions depending on the FI. The exercised quantity field is only applicable to employee stock options.<br><br><b>Applicable containers</b>: investment<br>
		 * Type: double
		 */
		exercisedQuantity: FormControl<number | null | undefined>,

		/** The date on which an option, right or warrant expires.<br><b>Note</b>: The expiration date field is only applicable to options and employee stock options.<br><br><b>Applicable containers</b>: investment<br> */
		expirationDate: FormControl<string | null | undefined>,

		/** The date on which equity awards like ESOP, RSU, etc., are issued or granted.<br><b>Note</b>: The grant date field is only applicable to employee stock options, restricted stock units/awards, performance units, etc.<br><br><b>Applicable containers</b>: investment<br> */
		grantDate: FormControl<string | null | undefined>,

		/** Type of holding<br><br><b>Applicable containers</b>: investment, insurance<br> */
		holdingType: FormControl<DataExtractsHoldingHoldingType | null | undefined>,

		/**
		 * Unique identifier for the security added in the system. This is the primary key of the holding resource.<br><br><b>Applicable containers</b>: investment, insurance<br>
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * The interest rate on a CD.<br><b>Note</b>: The interest rate field is only applicable to CD.<br><br><b>Applicable containers</b>: investment<br>
		 * Type: double
		 */
		interestRate: FormControl<number | null | undefined>,

		/** Indicates that the holding is a short trading.<br><br><b>Applicable containers</b>: investment<br> */
		isShort: FormControl<boolean | null | undefined>,

		/** The ISIN (International Securities Identification Number) is used worldwide to identify specific securities. It is equivalent to CUSIP for international markets.<br><br><b>Note</b>: The ISIN field is only applicable to the trade related transactions<br><br><b>Applicable containers</b>: investment<br> */
		isin: FormControl<string | null | undefined>,

		/** The date when the information was last updated in the system.<br><br><b>Applicable containers</b>: investment, insurance<br> */
		lastUpdated: FormControl<string | null | undefined>,

		/** Indicates the security match status id of the investment option identified during security normalization.<br><br><b>Applicable containers</b>: investment<br> */
		matchStatus: FormControl<string | null | undefined>,

		/** The stated maturity date of a bond or CD.<br><br><b>Applicable containers</b>: investment<br> */
		maturityDate: FormControl<string | null | undefined>,

		/** The type of the option position (i.e., put or call).<br><b>Note</b>: The option type field is only applicable to options.<br><br><b>Applicable containers</b>: investment<br><b>Applicable Values</b><br> */
		optionType: FormControl<DataExtractsHoldingOptionType | null | undefined>,

		/**
		 * Unique identifier for the user's association with the provider.<br><br><b>Applicable containers</b>: investment, insurance<br>
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		providerAccountId: FormControl<string | null | undefined>,

		/**
		 * The quantity held for the holding.<br><b>Note</b>: Only for bonds the quantity field indicates the normalized quantity and not the quantity aggregated from the site. The quantity field is only applicable to restricted stock units/awards, performance units, currency, and commodity.<br>For insurance container, the field is only applicable for insurance annuity and variable life insurance types.<br><br><b>Applicable containers</b>: investment, insurance<br>
		 * Type: double
		 */
		quantity: FormControl<number | null | undefined>,

		/** Indicates the security style of holding identified through the security service.<br><br><b>Applicable containers</b>: investment, insurance<br> */
		securityStyle: FormControl<string | null | undefined>,

		/** Indicates the security type of holding identified through the security service.<br><br><b>Applicable containers</b>: investment, insurance<br> */
		securityType: FormControl<string | null | undefined>,

		/** The SEDOL (Stock Exchange Daily Official List) is a set of security identifiers used in the United Kingdom and Ireland for clearing purposes.<br><b>Note</b>: The SEDOL field is only applicable to the trade related transactions<br><br><b>Applicable containers</b>: investment<br> */
		sedol: FormControl<string | null | undefined>,

		/** The symbol of the security.<br><br><b>Applicable containers</b>: investment<br> */
		symbol: FormControl<string | null | undefined>,

		/** The fixed duration for which the bond or CD is issued.<br><b>Note</b>: The term field is only applicable to CD.<br><br><b>Applicable containers</b>: investment<br> */
		term: FormControl<string | null | undefined>,

		/**
		 * Indicates the number of unvested quantity or units.<br><b>Note</b>: The unvested quantity field is only applicable to employee stock options, restricted stock units/awards, performance units, etc.<br><br><b>Applicable containers</b>: investment<br>
		 * Type: double
		 */
		unvestedQuantity: FormControl<number | null | undefined>,

		/**
		 * The quantity of units or shares that are already vested on a vest date.<br><b>Note</b>: The vested quantity field is only applicable to employee stock options, restricted stock units/awards, performance units, etc.<br><br><b>Applicable containers</b>: investment<br>
		 * Type: double
		 */
		vestedQuantity: FormControl<number | null | undefined>,

		/**
		 * The number of vested shares that can be exercised by the employee. It is usually equal to the vested quantity.<br><b>Note</b>: The vested shares exercisable field is only applicable to employee stock options, restricted stock units/awards, performance units, etc.<br><br><b>Applicable containers</b>: investment<br>
		 * Type: double
		 */
		vestedSharesExercisable: FormControl<number | null | undefined>,

		/** The date on which a RSU, RSA, or an employee stock options become vested.<br><b>Note</b>: The vesting date field is only applicable to employee stock options, restricted stock units/awards, performance units, etc.<br><br><b>Applicable containers</b>: investment<br> */
		vestingDate: FormControl<string | null | undefined>,
	}
	export function CreateDataExtractsHoldingFormGroup() {
		return new FormGroup<DataExtractsHoldingFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
			contractQuantity: new FormControl<number | null | undefined>(undefined),
			couponRate: new FormControl<number | null | undefined>(undefined),
			createdDate: new FormControl<string | null | undefined>(undefined),
			cusipNumber: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			enrichedDescription: new FormControl<string | null | undefined>(undefined),
			exercisedQuantity: new FormControl<number | null | undefined>(undefined),
			expirationDate: new FormControl<string | null | undefined>(undefined),
			grantDate: new FormControl<string | null | undefined>(undefined),
			holdingType: new FormControl<DataExtractsHoldingHoldingType | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			interestRate: new FormControl<number | null | undefined>(undefined),
			isShort: new FormControl<boolean | null | undefined>(undefined),
			isin: new FormControl<string | null | undefined>(undefined),
			lastUpdated: new FormControl<string | null | undefined>(undefined),
			matchStatus: new FormControl<string | null | undefined>(undefined),
			maturityDate: new FormControl<string | null | undefined>(undefined),
			optionType: new FormControl<DataExtractsHoldingOptionType | null | undefined>(undefined),
			providerAccountId: new FormControl<string | null | undefined>(undefined),
			quantity: new FormControl<number | null | undefined>(undefined),
			securityStyle: new FormControl<string | null | undefined>(undefined),
			securityType: new FormControl<string | null | undefined>(undefined),
			sedol: new FormControl<string | null | undefined>(undefined),
			symbol: new FormControl<string | null | undefined>(undefined),
			term: new FormControl<string | null | undefined>(undefined),
			unvestedQuantity: new FormControl<number | null | undefined>(undefined),
			vestedQuantity: new FormControl<number | null | undefined>(undefined),
			vestedSharesExercisable: new FormControl<number | null | undefined>(undefined),
			vestingDate: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DataExtractsHoldingHoldingType { stock = 'stock', mutualFund = 'mutualFund', bond = 'bond', CD = 'CD', option = 'option', moneyMarketFund = 'moneyMarketFund', other = 'other', remic = 'remic', future = 'future', commodity = 'commodity', currency = 'currency', unitInvestmentTrust = 'unitInvestmentTrust', employeeStockOption = 'employeeStockOption', insuranceAnnuity = 'insuranceAnnuity', unknown = 'unknown', preferredStock = 'preferredStock', ETF = 'ETF', warrants = 'warrants', ETN = 'ETN' }

	export enum DataExtractsHoldingOptionType { put = 'put', call = 'call', unknown = 'unknown', other = 'other' }

	export interface DataExtractsProviderAccount {

		/** The source through which the providerAccount is added in the system.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts</li><li>POST providerAccounts</li><li>PUT providerAccounts/{providerAccountId}</li><li>GET providerAccounts/{providerAccountId}</li><li>GET dataExtracts/userData</li></ul><b>Applicable Values</b><br> */
		aggregationSource?: AccountAggregationSource | null;

		/** The date on when the provider account is created in the system.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts</li><li>POST providerAccounts</li><li>PUT providerAccounts/{providerAccountId}</li><li>GET providerAccounts/{providerAccountId}</li></ul> */
		createdDate?: string | null;

		/** Logical grouping of dataset attributes into datasets such as Basic Aggregation Data, Account Profile and Documents.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts</li><li>POST providerAccounts</li><li>PUT providerAccounts/{providerAccountId}</li><li>GET providerAccounts/{providerAccountId}</li><li>GET dataExtracts/userData</li></ul> */
		dataset?: Array<AccountDataset>;

		/**
		 * Unique identifier for the provider account resource. This is created during account addition.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts</li><li>POST providerAccounts</li><li>PUT providerAccounts/{providerAccountId}</li><li>GET providerAccounts/{providerAccountId}</li><li>GET dataExtracts/userData</li></ul>
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		id?: string | null;

		/** Indicates if the provider account is deleted from the system.<b>Applicable containers</b>: All Containers<br><b>Aggregated / Manual</b>: Both <br><b>Endpoints</b>:<br><ul><li>GET dataExtracts/userData</li></ul> */
		isDeleted?: boolean | null;

		/** Indicates whether account is a manual or aggregated provider account.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts</li><li>POST providerAccounts</li><li>PUT providerAccounts/{providerAccountId}</li><li>GET providerAccounts/{providerAccountId}</li><li>GET dataExtracts/userData</li></ul> */
		isManual?: boolean | null;

		/** Indicate when the providerAccount is last updated successfully.<br><br><b>Account Type</b>: Aggregated<br><b>Endpoints</b>:<ul><li>GET dataExtracts/userData</li></ul> */
		lastUpdated?: string | null;

		/** Indicates the migration status of the provider account from screen-scraping provider to the Open Banking provider. <br><br><b>Endpoints</b>:<ul><li>GET providerAccounts</li><li>GET providerAccounts/{providerAccountId}</li><li>PUT providerAccounts/{providerAccountId}</li><li>GET dataExtracts/userData</li></ul> */
		oauthMigrationStatus?: AccountOauthMigrationStatus | null;

		/**
		 * Unique identifier for the provider resource. This denotes the provider for which the provider account id is generated by the user.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts</li><li>POST providerAccounts</li><li>PUT providerAccounts/{providerAccountId}</li><li>GET providerAccounts/{providerAccountId}</li><li>GET dataExtracts/userData</li></ul>
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		providerId?: string | null;

		/** Unique id generated to indicate the request.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts</li><li>POST providerAccounts</li><li>PUT providerAccounts/{providerAccountId}</li><li>GET providerAccounts/{providerAccountId}</li></ul> */
		requestId?: string | null;

		/** The status of last update attempted for the account. <br><br><b>Endpoints</b>:<ul><li>GET providerAccounts</li><li>POST providerAccounts</li><li>PUT providerAccounts/{providerAccountId}</li><li>GET providerAccounts/{providerAccountId}</li><li>GET dataExtracts/userData</li></ul><b>Applicable Values</b><br> */
		status?: DataExtractsProviderAccountStatus | null;
	}
	export interface DataExtractsProviderAccountFormProperties {

		/** The source through which the providerAccount is added in the system.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts</li><li>POST providerAccounts</li><li>PUT providerAccounts/{providerAccountId}</li><li>GET providerAccounts/{providerAccountId}</li><li>GET dataExtracts/userData</li></ul><b>Applicable Values</b><br> */
		aggregationSource: FormControl<AccountAggregationSource | null | undefined>,

		/** The date on when the provider account is created in the system.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts</li><li>POST providerAccounts</li><li>PUT providerAccounts/{providerAccountId}</li><li>GET providerAccounts/{providerAccountId}</li></ul> */
		createdDate: FormControl<string | null | undefined>,

		/**
		 * Unique identifier for the provider account resource. This is created during account addition.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts</li><li>POST providerAccounts</li><li>PUT providerAccounts/{providerAccountId}</li><li>GET providerAccounts/{providerAccountId}</li><li>GET dataExtracts/userData</li></ul>
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		id: FormControl<string | null | undefined>,

		/** Indicates if the provider account is deleted from the system.<b>Applicable containers</b>: All Containers<br><b>Aggregated / Manual</b>: Both <br><b>Endpoints</b>:<br><ul><li>GET dataExtracts/userData</li></ul> */
		isDeleted: FormControl<boolean | null | undefined>,

		/** Indicates whether account is a manual or aggregated provider account.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts</li><li>POST providerAccounts</li><li>PUT providerAccounts/{providerAccountId}</li><li>GET providerAccounts/{providerAccountId}</li><li>GET dataExtracts/userData</li></ul> */
		isManual: FormControl<boolean | null | undefined>,

		/** Indicate when the providerAccount is last updated successfully.<br><br><b>Account Type</b>: Aggregated<br><b>Endpoints</b>:<ul><li>GET dataExtracts/userData</li></ul> */
		lastUpdated: FormControl<string | null | undefined>,

		/** Indicates the migration status of the provider account from screen-scraping provider to the Open Banking provider. <br><br><b>Endpoints</b>:<ul><li>GET providerAccounts</li><li>GET providerAccounts/{providerAccountId}</li><li>PUT providerAccounts/{providerAccountId}</li><li>GET dataExtracts/userData</li></ul> */
		oauthMigrationStatus: FormControl<AccountOauthMigrationStatus | null | undefined>,

		/**
		 * Unique identifier for the provider resource. This denotes the provider for which the provider account id is generated by the user.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts</li><li>POST providerAccounts</li><li>PUT providerAccounts/{providerAccountId}</li><li>GET providerAccounts/{providerAccountId}</li><li>GET dataExtracts/userData</li></ul>
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		providerId: FormControl<string | null | undefined>,

		/** Unique id generated to indicate the request.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts</li><li>POST providerAccounts</li><li>PUT providerAccounts/{providerAccountId}</li><li>GET providerAccounts/{providerAccountId}</li></ul> */
		requestId: FormControl<string | null | undefined>,

		/** The status of last update attempted for the account. <br><br><b>Endpoints</b>:<ul><li>GET providerAccounts</li><li>POST providerAccounts</li><li>PUT providerAccounts/{providerAccountId}</li><li>GET providerAccounts/{providerAccountId}</li><li>GET dataExtracts/userData</li></ul><b>Applicable Values</b><br> */
		status: FormControl<DataExtractsProviderAccountStatus | null | undefined>,
	}
	export function CreateDataExtractsProviderAccountFormGroup() {
		return new FormGroup<DataExtractsProviderAccountFormProperties>({
			aggregationSource: new FormControl<AccountAggregationSource | null | undefined>(undefined),
			createdDate: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			isDeleted: new FormControl<boolean | null | undefined>(undefined),
			isManual: new FormControl<boolean | null | undefined>(undefined),
			lastUpdated: new FormControl<string | null | undefined>(undefined),
			oauthMigrationStatus: new FormControl<AccountOauthMigrationStatus | null | undefined>(undefined),
			providerId: new FormControl<string | null | undefined>(undefined),
			requestId: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<DataExtractsProviderAccountStatus | null | undefined>(undefined),
		});

	}

	export enum DataExtractsProviderAccountStatus { LOGIN_IN_PROGRESS = 'LOGIN_IN_PROGRESS', USER_INPUT_REQUIRED = 'USER_INPUT_REQUIRED', IN_PROGRESS = 'IN_PROGRESS', PARTIAL_SUCCESS = 'PARTIAL_SUCCESS', SUCCESS = 'SUCCESS', FAILED = 'FAILED', MIGRATION_IN_PROGRESS = 'MIGRATION_IN_PROGRESS' }

	export interface DataExtractsTransaction {

		/** The account's container.<br><br><b>Applicable containers</b>: bank,creditCard,investment,insurance,loan<br><b>Applicable Values</b><br> */
		CONTAINER?: AccountCONTAINER | null;

		/**
		 * The account from which the transaction was made. This is basically the primary key of the account resource. <br><br><b>Applicable containers</b>: bank,creditCard,investment,insurance,loan<br>
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		accountId?: string | null;
		amount?: Money;

		/** Indicates if the transaction appears as a debit or a credit transaction in the account. <br><br><b>Applicable containers</b>: bank,creditCard,investment,insurance,loan<br><b>Applicable Values</b><br> */
		baseType?: DataExtractsTransactionBaseType | null;

		/** The name of the category assigned to the transaction. This is the category field of the transaction category resource. The supported values are provided by the GET transactions/categories.<br><br><b>Applicable containers</b>: bank,creditCard,investment,insurance,loan<br> */
		category?: string | null;

		/**
		 * The id of the category assigned to the transaction. This is the id field of the transaction category resource. The supported values are provided by the GET transactions/categories.<br><br><b>Applicable containers</b>: bank,creditCard,investment,insurance,loan<br>
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		categoryId?: string | null;

		/** Indicates the source of the category, i.e., categories derived by the system or assigned/provided by the consumer. This is the source field of the transaction category resource. The supported values are provided by the GET transactions/categories.<br><br><b>Applicable containers</b>: bank,creditCard,investment,insurance,loan<br><b>Applicable Values</b><br> */
		categorySource?: AccountAggregationSource | null;

		/** The categoryType of the category assigned to the transaction. This is the type field of the transaction category resource. The supported values are provided by the GET transactions/categories.<br><br><b>Applicable containers</b>: bank,creditCard,investment,insurance,loan<br> */
		categoryType?: DataExtractsTransactionCategoryType | null;

		/** The checkNumber of the transaction.<br><br><b>Applicable containers</b>: bank<br> */
		checkNumber?: string | null;
		commission?: Money;
		createdDate?: string | null;

		/** The CUSIP (Committee on Uniform Securities Identification Procedures) identifies the financial instruments in the United States and Canada.<br><b><br><b>Note</b></b>: The CUSIP number field applies only to trade related transactions.<br><br><b>Applicable containers</b>: investment<br> */
		cusipNumber?: string | null;

		/** The value provided will be either postDate or transactionDate. postDate takes higher priority than transactionDate, except for the investment container as only transactionDate is available. The availability of postDate or transactionDate depends on the provider site.<br><br><b>Applicable containers</b>: bank,creditCard,investment,insurance,loan<br> */
		date?: string | null;
		description?: Description;

		/**
		 * The id of the detail category that is assigned to the transaction. The supported values are provided by GET transactions/categories.<br><br><b>Applicable containers</b>: bank,creditCard<br>
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		detailCategoryId?: string | null;

		/**
		 * The high level category assigned to the transaction. The supported values are provided by the GET transactions/categories. <br><br><b>Applicable containers</b>: bank,creditCard,investment,insurance,loan<br>
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		highLevelCategoryId?: string | null;

		/** For transactions involving securities, this captures the securities description.<br><br><b>Applicable containers</b>: investment<br> */
		holdingDescription?: string | null;

		/**
		 * An unique identifier for the transaction. The combination of the id and account container are unique in the system. <br><br><b>Applicable containers</b>: bank,creditCard,investment,insurance,loan<br>
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		id?: string | null;
		interest?: Money;

		/** Indicates if the transaction is marked as deleted.<b>Applicable containers</b>: All Containers<br><b>Aggregated / Manual</b>: Both <br><b>Endpoints</b>:<br><ul><li>GET dataExtracts/userData</li></ul> */
		isDeleted?: boolean | null;

		/** Indicates if the transaction is aggregated from the FI site or the consumer has manually created the transaction using the application or an API. <br><br><b>Applicable containers</b>: bank,creditCard,investment,insurance,loan<br> */
		isManual?: boolean | null;

		/** International Securities Identification Number (ISIN) standard is used worldwide to identify specific securities.<br><br><b>Applicable containers</b>: investment<br> */
		isin?: string | null;
		lastUpdated?: string | null;

		/** Additional notes provided by the user for a particular  transaction through application or API services. <br><br><b>Applicable containers</b>: bank,creditCard,investment,insurance,loan<br> */
		memo?: string | null;
		merchant?: Merchant;

		/**
		 * The parentCategoryId of the category assigned to the transaction.<br><b>Note</b>: This field will be provided in the response if the transaction is assigned to a user-created category. <br><br><b>Applicable containers</b>: bank,creditCard,investment,insurance,loan<br>
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		parentCategoryId?: string | null;

		/** The date on which the transaction is posted to the account.<br><br><b>Applicable containers</b>: bank,creditCard,insurance,loan<br> */
		postDate?: string | null;
		price?: Money;
		principal?: Money;

		/**
		 * The quantity associated with the transaction.<br><b>Note</b>: The quantity field applies only to trade-related transactions.<br><br><b>Applicable containers</b>: investment<br>
		 * Type: double
		 */
		quantity?: number | null;
		runningBalance?: Money;

		/** SEDOL stands for Stock Exchange Daily Official List, a list of security identifiers used in the United Kingdom and Ireland for clearing purposes.<br><br><b>Applicable containers</b>: investment<br> */
		sedol?: string | null;

		/** It is the date on which the transaction is finalized, that is, the date the ownership of the security is transferred to the buyer. The settlement date is usually few days after the transaction date.<br><br><b>Applicable containers</b>: investment<br> */
		settleDate?: string | null;

		/** A unique ID that the provider site has assigned to the transaction. The source ID is only available for the pre-populated accounts.<br>Pre-populated accounts are the accounts that the FI customers shares with Yodlee, so that the user does not have to add or aggregate those accounts. */
		sourceId?: string | null;

		/** The source through which the transaction is added to the Yodlee system.<br><br><b>Applicable containers</b>: bank,creditCard,investment,insurance,loann<br><b>Applicable Values:</b><br> */
		sourceType?: DataExtractsTransactionSourceType | null;

		/** The status of the transaction: pending or posted.<br><b>Note</b>: Most FI sites only display posted transactions. If the FI site displays transaction status, same will be aggregated.  <br><br><b>Applicable containers</b>: bank,creditCard,investment,insurance,loan<br><b>Applicable Values</b><br> */
		status?: DataExtractsTransactionStatus | null;

		/** The transaction subtype field provides a detailed transaction type. For example, purchase is a transaction type and the transaction subtype field indicates if the purchase was made using a debit or credit card.<br><b>Note</b>: The transaction subtype field is available only in the United States, Canada, United Kingdom, and India.<br><br><b>Applicable containers</b>: bank,creditCard,investment,insurance,loan<br> */
		subType?: DataExtractsTransactionSubType | null;

		/** The symbol of the security being traded.<br><b>Note</b>: The settle date field applies only to trade-related transactions. <br><br><b>Applicable containers</b>: investment<br> */
		symbol?: string | null;

		/** The date the transaction happens in the account. <br><br><b>Applicable containers</b>: bank,creditCard,investment,insurance,loan<br> */
		transactionDate?: string | null;

		/** The nature of the transaction, i.e., deposit, refund, payment, etc.<br><b>Note</b>: The transaction type field is available only for the United States, Canada, United Kingdom, and India based provider sites. <br><br><b>Applicable containers</b>: bank,creditCard,investment<br> */
		type?: string | null;

		/** It is an identification number that is assigned to financial instruments such as stocks and bonds trading in Switzerland.<br><br><b>Applicable containers</b>: investment<br> */
		valoren?: string | null;
	}
	export interface DataExtractsTransactionFormProperties {

		/** The account's container.<br><br><b>Applicable containers</b>: bank,creditCard,investment,insurance,loan<br><b>Applicable Values</b><br> */
		CONTAINER: FormControl<AccountCONTAINER | null | undefined>,

		/**
		 * The account from which the transaction was made. This is basically the primary key of the account resource. <br><br><b>Applicable containers</b>: bank,creditCard,investment,insurance,loan<br>
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		accountId: FormControl<string | null | undefined>,

		/** Indicates if the transaction appears as a debit or a credit transaction in the account. <br><br><b>Applicable containers</b>: bank,creditCard,investment,insurance,loan<br><b>Applicable Values</b><br> */
		baseType: FormControl<DataExtractsTransactionBaseType | null | undefined>,

		/** The name of the category assigned to the transaction. This is the category field of the transaction category resource. The supported values are provided by the GET transactions/categories.<br><br><b>Applicable containers</b>: bank,creditCard,investment,insurance,loan<br> */
		category: FormControl<string | null | undefined>,

		/**
		 * The id of the category assigned to the transaction. This is the id field of the transaction category resource. The supported values are provided by the GET transactions/categories.<br><br><b>Applicable containers</b>: bank,creditCard,investment,insurance,loan<br>
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		categoryId: FormControl<string | null | undefined>,

		/** Indicates the source of the category, i.e., categories derived by the system or assigned/provided by the consumer. This is the source field of the transaction category resource. The supported values are provided by the GET transactions/categories.<br><br><b>Applicable containers</b>: bank,creditCard,investment,insurance,loan<br><b>Applicable Values</b><br> */
		categorySource: FormControl<AccountAggregationSource | null | undefined>,

		/** The categoryType of the category assigned to the transaction. This is the type field of the transaction category resource. The supported values are provided by the GET transactions/categories.<br><br><b>Applicable containers</b>: bank,creditCard,investment,insurance,loan<br> */
		categoryType: FormControl<DataExtractsTransactionCategoryType | null | undefined>,

		/** The checkNumber of the transaction.<br><br><b>Applicable containers</b>: bank<br> */
		checkNumber: FormControl<string | null | undefined>,
		createdDate: FormControl<string | null | undefined>,

		/** The CUSIP (Committee on Uniform Securities Identification Procedures) identifies the financial instruments in the United States and Canada.<br><b><br><b>Note</b></b>: The CUSIP number field applies only to trade related transactions.<br><br><b>Applicable containers</b>: investment<br> */
		cusipNumber: FormControl<string | null | undefined>,

		/** The value provided will be either postDate or transactionDate. postDate takes higher priority than transactionDate, except for the investment container as only transactionDate is available. The availability of postDate or transactionDate depends on the provider site.<br><br><b>Applicable containers</b>: bank,creditCard,investment,insurance,loan<br> */
		date: FormControl<string | null | undefined>,

		/**
		 * The id of the detail category that is assigned to the transaction. The supported values are provided by GET transactions/categories.<br><br><b>Applicable containers</b>: bank,creditCard<br>
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		detailCategoryId: FormControl<string | null | undefined>,

		/**
		 * The high level category assigned to the transaction. The supported values are provided by the GET transactions/categories. <br><br><b>Applicable containers</b>: bank,creditCard,investment,insurance,loan<br>
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		highLevelCategoryId: FormControl<string | null | undefined>,

		/** For transactions involving securities, this captures the securities description.<br><br><b>Applicable containers</b>: investment<br> */
		holdingDescription: FormControl<string | null | undefined>,

		/**
		 * An unique identifier for the transaction. The combination of the id and account container are unique in the system. <br><br><b>Applicable containers</b>: bank,creditCard,investment,insurance,loan<br>
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		id: FormControl<string | null | undefined>,

		/** Indicates if the transaction is marked as deleted.<b>Applicable containers</b>: All Containers<br><b>Aggregated / Manual</b>: Both <br><b>Endpoints</b>:<br><ul><li>GET dataExtracts/userData</li></ul> */
		isDeleted: FormControl<boolean | null | undefined>,

		/** Indicates if the transaction is aggregated from the FI site or the consumer has manually created the transaction using the application or an API. <br><br><b>Applicable containers</b>: bank,creditCard,investment,insurance,loan<br> */
		isManual: FormControl<boolean | null | undefined>,

		/** International Securities Identification Number (ISIN) standard is used worldwide to identify specific securities.<br><br><b>Applicable containers</b>: investment<br> */
		isin: FormControl<string | null | undefined>,
		lastUpdated: FormControl<string | null | undefined>,

		/** Additional notes provided by the user for a particular  transaction through application or API services. <br><br><b>Applicable containers</b>: bank,creditCard,investment,insurance,loan<br> */
		memo: FormControl<string | null | undefined>,

		/**
		 * The parentCategoryId of the category assigned to the transaction.<br><b>Note</b>: This field will be provided in the response if the transaction is assigned to a user-created category. <br><br><b>Applicable containers</b>: bank,creditCard,investment,insurance,loan<br>
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		parentCategoryId: FormControl<string | null | undefined>,

		/** The date on which the transaction is posted to the account.<br><br><b>Applicable containers</b>: bank,creditCard,insurance,loan<br> */
		postDate: FormControl<string | null | undefined>,

		/**
		 * The quantity associated with the transaction.<br><b>Note</b>: The quantity field applies only to trade-related transactions.<br><br><b>Applicable containers</b>: investment<br>
		 * Type: double
		 */
		quantity: FormControl<number | null | undefined>,

		/** SEDOL stands for Stock Exchange Daily Official List, a list of security identifiers used in the United Kingdom and Ireland for clearing purposes.<br><br><b>Applicable containers</b>: investment<br> */
		sedol: FormControl<string | null | undefined>,

		/** It is the date on which the transaction is finalized, that is, the date the ownership of the security is transferred to the buyer. The settlement date is usually few days after the transaction date.<br><br><b>Applicable containers</b>: investment<br> */
		settleDate: FormControl<string | null | undefined>,

		/** A unique ID that the provider site has assigned to the transaction. The source ID is only available for the pre-populated accounts.<br>Pre-populated accounts are the accounts that the FI customers shares with Yodlee, so that the user does not have to add or aggregate those accounts. */
		sourceId: FormControl<string | null | undefined>,

		/** The source through which the transaction is added to the Yodlee system.<br><br><b>Applicable containers</b>: bank,creditCard,investment,insurance,loann<br><b>Applicable Values:</b><br> */
		sourceType: FormControl<DataExtractsTransactionSourceType | null | undefined>,

		/** The status of the transaction: pending or posted.<br><b>Note</b>: Most FI sites only display posted transactions. If the FI site displays transaction status, same will be aggregated.  <br><br><b>Applicable containers</b>: bank,creditCard,investment,insurance,loan<br><b>Applicable Values</b><br> */
		status: FormControl<DataExtractsTransactionStatus | null | undefined>,

		/** The transaction subtype field provides a detailed transaction type. For example, purchase is a transaction type and the transaction subtype field indicates if the purchase was made using a debit or credit card.<br><b>Note</b>: The transaction subtype field is available only in the United States, Canada, United Kingdom, and India.<br><br><b>Applicable containers</b>: bank,creditCard,investment,insurance,loan<br> */
		subType: FormControl<DataExtractsTransactionSubType | null | undefined>,

		/** The symbol of the security being traded.<br><b>Note</b>: The settle date field applies only to trade-related transactions. <br><br><b>Applicable containers</b>: investment<br> */
		symbol: FormControl<string | null | undefined>,

		/** The date the transaction happens in the account. <br><br><b>Applicable containers</b>: bank,creditCard,investment,insurance,loan<br> */
		transactionDate: FormControl<string | null | undefined>,

		/** The nature of the transaction, i.e., deposit, refund, payment, etc.<br><b>Note</b>: The transaction type field is available only for the United States, Canada, United Kingdom, and India based provider sites. <br><br><b>Applicable containers</b>: bank,creditCard,investment<br> */
		type: FormControl<string | null | undefined>,

		/** It is an identification number that is assigned to financial instruments such as stocks and bonds trading in Switzerland.<br><br><b>Applicable containers</b>: investment<br> */
		valoren: FormControl<string | null | undefined>,
	}
	export function CreateDataExtractsTransactionFormGroup() {
		return new FormGroup<DataExtractsTransactionFormProperties>({
			CONTAINER: new FormControl<AccountCONTAINER | null | undefined>(undefined),
			accountId: new FormControl<string | null | undefined>(undefined),
			baseType: new FormControl<DataExtractsTransactionBaseType | null | undefined>(undefined),
			category: new FormControl<string | null | undefined>(undefined),
			categoryId: new FormControl<string | null | undefined>(undefined),
			categorySource: new FormControl<AccountAggregationSource | null | undefined>(undefined),
			categoryType: new FormControl<DataExtractsTransactionCategoryType | null | undefined>(undefined),
			checkNumber: new FormControl<string | null | undefined>(undefined),
			createdDate: new FormControl<string | null | undefined>(undefined),
			cusipNumber: new FormControl<string | null | undefined>(undefined),
			date: new FormControl<string | null | undefined>(undefined),
			detailCategoryId: new FormControl<string | null | undefined>(undefined),
			highLevelCategoryId: new FormControl<string | null | undefined>(undefined),
			holdingDescription: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			isDeleted: new FormControl<boolean | null | undefined>(undefined),
			isManual: new FormControl<boolean | null | undefined>(undefined),
			isin: new FormControl<string | null | undefined>(undefined),
			lastUpdated: new FormControl<string | null | undefined>(undefined),
			memo: new FormControl<string | null | undefined>(undefined),
			parentCategoryId: new FormControl<string | null | undefined>(undefined),
			postDate: new FormControl<string | null | undefined>(undefined),
			quantity: new FormControl<number | null | undefined>(undefined),
			sedol: new FormControl<string | null | undefined>(undefined),
			settleDate: new FormControl<string | null | undefined>(undefined),
			sourceId: new FormControl<string | null | undefined>(undefined),
			sourceType: new FormControl<DataExtractsTransactionSourceType | null | undefined>(undefined),
			status: new FormControl<DataExtractsTransactionStatus | null | undefined>(undefined),
			subType: new FormControl<DataExtractsTransactionSubType | null | undefined>(undefined),
			symbol: new FormControl<string | null | undefined>(undefined),
			transactionDate: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			valoren: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DataExtractsTransactionBaseType { CREDIT = 'CREDIT', DEBIT = 'DEBIT' }

	export enum DataExtractsTransactionCategoryType { TRANSFER = 'TRANSFER', DEFERRED_COMPENSATION = 'DEFERRED_COMPENSATION', UNCATEGORIZE = 'UNCATEGORIZE', INCOME = 'INCOME', EXPENSE = 'EXPENSE' }

	export interface Description {

		/** The description of the transaction as defined by the consumer. The consumer can define or provide more details of the transaction in this field.<br><br><b>Applicable containers</b>:  creditCard, insurance, loan<br> */
		consumer?: string | null;

		/** Original transaction description as it appears at the FI site.<br><br><b>Applicable containers</b>:  creditCard, insurance, loan<br> */
		original?: string | null;

		/** The description will provide the actual name of the security.<br><br><b>Applicable containers</b>: investment<br> */
		security?: string | null;

		/** The transaction description that appears at the FI site may not be self-explanatory, i.e., the source, purpose of the transaction may not be evident. Yodlee attempts to simplify and make the transaction meaningful to the consumer, and this simplified transaction description is provided in the simple description field.Note: The simple description field is available only in the United States, Canada, United Kingdom, and India.<br><br><b>Applicable containers</b>:  creditCard, insurance, loan<br> */
		simple?: string | null;
	}
	export interface DescriptionFormProperties {

		/** The description of the transaction as defined by the consumer. The consumer can define or provide more details of the transaction in this field.<br><br><b>Applicable containers</b>:  creditCard, insurance, loan<br> */
		consumer: FormControl<string | null | undefined>,

		/** Original transaction description as it appears at the FI site.<br><br><b>Applicable containers</b>:  creditCard, insurance, loan<br> */
		original: FormControl<string | null | undefined>,

		/** The description will provide the actual name of the security.<br><br><b>Applicable containers</b>: investment<br> */
		security: FormControl<string | null | undefined>,

		/** The transaction description that appears at the FI site may not be self-explanatory, i.e., the source, purpose of the transaction may not be evident. Yodlee attempts to simplify and make the transaction meaningful to the consumer, and this simplified transaction description is provided in the simple description field.Note: The simple description field is available only in the United States, Canada, United Kingdom, and India.<br><br><b>Applicable containers</b>:  creditCard, insurance, loan<br> */
		simple: FormControl<string | null | undefined>,
	}
	export function CreateDescriptionFormGroup() {
		return new FormGroup<DescriptionFormProperties>({
			consumer: new FormControl<string | null | undefined>(undefined),
			original: new FormControl<string | null | undefined>(undefined),
			security: new FormControl<string | null | undefined>(undefined),
			simple: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Merchant {
		address?: AccountAddress;

		/** The business categories of the merchant.<br><br><b>Applicable containers</b>: bank,creditCard<br><b>Applicable Values</b><br> */
		categoryLabel?: Array<string>;
		contact?: Contact;
		coordinates?: Coordinates;

		/** Identifier of the merchant.<br><br><b>Applicable containers</b>: bank,creditCard,investment,insurance,loan<br> */
		id?: string | null;

		/** The name of the merchant.<br><br><b>Applicable containers</b>: bank,creditCard,investment,insurance,loan<br> */
		name?: string | null;

		/** The source through which merchant information is retrieved.<br><br><b>Applicable containers</b>: bank,creditCard,investment,insurance,loan<br><b>Applicable Values</b><br> */
		source?: MerchantSource | null;

		/** The website of the merchant.<br><br><b>Applicable containers</b>: bank,creditCard,investment,loan<br> */
		website?: string | null;
	}
	export interface MerchantFormProperties {

		/** Identifier of the merchant.<br><br><b>Applicable containers</b>: bank,creditCard,investment,insurance,loan<br> */
		id: FormControl<string | null | undefined>,

		/** The name of the merchant.<br><br><b>Applicable containers</b>: bank,creditCard,investment,insurance,loan<br> */
		name: FormControl<string | null | undefined>,

		/** The source through which merchant information is retrieved.<br><br><b>Applicable containers</b>: bank,creditCard,investment,insurance,loan<br><b>Applicable Values</b><br> */
		source: FormControl<MerchantSource | null | undefined>,

		/** The website of the merchant.<br><br><b>Applicable containers</b>: bank,creditCard,investment,loan<br> */
		website: FormControl<string | null | undefined>,
	}
	export function CreateMerchantFormGroup() {
		return new FormGroup<MerchantFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			source: new FormControl<MerchantSource | null | undefined>(undefined),
			website: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum MerchantSource { YODLEE = 'YODLEE', FACTUAL = 'FACTUAL' }

	export enum DataExtractsTransactionSourceType { AGGREGATED = 'AGGREGATED', MANUAL = 'MANUAL' }

	export enum DataExtractsTransactionStatus { POSTED = 'POSTED', PENDING = 'PENDING', SCHEDULED = 'SCHEDULED', FAILED = 'FAILED', CLEARED = 'CLEARED' }

	export enum DataExtractsTransactionSubType { AUTH_HOLD = 'AUTH_HOLD', AUTH_REQUEST = 'AUTH_REQUEST', OVERDRAFT_CHARGE = 'OVERDRAFT_CHARGE', CREDIT_ADJUSTMENT = 'CREDIT_ADJUSTMENT', PIN_DEBIT = 'PIN_DEBIT', BANK_DIRECT_DEPOSIT = 'BANK_DIRECT_DEPOSIT', DIVIDEND_DEPOSIT = 'DIVIDEND_DEPOSIT', INTEREST_SAVINGS = 'INTEREST_SAVINGS', INTEREST_ADJUSTMENT = 'INTEREST_ADJUSTMENT', ONLINE_PURCHASE = 'ONLINE_PURCHASE', PURCHASED_WITH_CHECK = 'PURCHASED_WITH_CHECK', RECURRING_BILLING = 'RECURRING_BILLING', TAX_PAYMENT = 'TAX_PAYMENT', PAYMENT_BY_CHECK = 'PAYMENT_BY_CHECK', PAYMENT_PLAN = 'PAYMENT_PLAN', FEE_REFUND = 'FEE_REFUND', WIRE_TRANSFER_CHARGE = 'WIRE_TRANSFER_CHARGE', ACCOUNT_TO_ACCOUNT_TRANSFER = 'ACCOUNT_TO_ACCOUNT_TRANSFER', BANK_TO_BANK_TRANSACTION = 'BANK_TO_BANK_TRANSACTION', BANK_TO_NON_BANK_ACCOUNT_TRANSFER = 'BANK_TO_NON_BANK_ACCOUNT_TRANSFER', CASH_WITHDRAWAL_AT_FI = 'CASH_WITHDRAWAL_AT_FI', ATM_CASH_WITHDRAWAL = 'ATM_CASH_WITHDRAWAL', AUTH_PROCESSING = 'AUTH_PROCESSING', AUTH_RELEASE = 'AUTH_RELEASE', PRE_AUTH = 'PRE_AUTH', AUTH_COMPLETE = 'AUTH_COMPLETE', AUTH_VOID = 'AUTH_VOID', BALANCE_ENQUIRY = 'BALANCE_ENQUIRY', ACCOUNT_VERIFICATION = 'ACCOUNT_VERIFICATION', PRE_AUTH_COMPLETION = 'PRE_AUTH_COMPLETION', SERVICE_CHARGE = 'SERVICE_CHARGE', SERVICE_CHARGE_FEE_REFUND = 'SERVICE_CHARGE_FEE_REFUND', RETURNED_CHECK_CHARGE = 'RETURNED_CHECK_CHARGE', RETURNED_CHECK_REIMBURSEMENT = 'RETURNED_CHECK_REIMBURSEMENT', CASH_ADVANCE = 'CASH_ADVANCE', BILL_PAY_CHARGE = 'BILL_PAY_CHARGE', CHECK_IMAGE_SERVICE_CHARGE = 'CHECK_IMAGE_SERVICE_CHARGE', OVERDRAFT_PROTECTION_CHARGE = 'OVERDRAFT_PROTECTION_CHARGE', STOP_PAYMENT_CHARGE = 'STOP_PAYMENT_CHARGE', CHECKS_ORDERING_CHARGE = 'CHECKS_ORDERING_CHARGE', MONTHLY_MAINTENANCE_CHARGE = 'MONTHLY_MAINTENANCE_CHARGE', DEBIT_CARD_FEE = 'DEBIT_CARD_FEE', CONVENIENCE_FEE = 'CONVENIENCE_FEE', PERSONAL_LOAN_CREDIT = 'PERSONAL_LOAN_CREDIT', CREDIT_CARD_CREDIT = 'CREDIT_CARD_CREDIT', AUTO_LOAN = 'AUTO_LOAN', HOME_LOAN_MORTGAGE = 'HOME_LOAN_MORTGAGE', SHORT_TERM_CREDIT = 'SHORT_TERM_CREDIT', SIGNATURE_DEBIT = 'SIGNATURE_DEBIT', CONTACT_LESS_DEBIT = 'CONTACT_LESS_DEBIT', DEFERRED_DEPOSIT = 'DEFERRED_DEPOSIT', DEFERRED_BILL_PAY = 'DEFERRED_BILL_PAY', INSTALLMENT_PAYMENT = 'INSTALLMENT_PAYMENT', RECURRING_SUBSCRIPTION_PAYMENT = 'RECURRING_SUBSCRIPTION_PAYMENT', HOLD_CHECK_PAYMENT = 'HOLD_CHECK_PAYMENT', CAPITAL_GAINS_DISTIBUTION = 'CAPITAL_GAINS_DISTIBUTION', CG_LONG_TERM_DEPOSIT = 'CG_LONG_TERM_DEPOSIT', OPEN_SALE_DEPOSIT = 'OPEN_SALE_DEPOSIT', INTEREST__CHECK = 'INTEREST__CHECK', PURCHASE_VOID = 'PURCHASE_VOID', PURCHASE_WITH_CREDIT_CARD = 'PURCHASE_WITH_CREDIT_CARD', PURCHASE_WITH_DEBIT_CARD = 'PURCHASE_WITH_DEBIT_CARD', CHARGE_A_REPEAT_CUSTOMER = 'CHARGE_A_REPEAT_CUSTOMER', DOWN_PAYMENT_OR_ANNUITY_PAYMENT_OR_DIRECT_PAYMENT = 'DOWN_PAYMENT_OR_ANNUITY_PAYMENT_OR_DIRECT_PAYMENT', FEE_PAYMENT = 'FEE_PAYMENT', FINANCE_CHARGE_REFUND = 'FINANCE_CHARGE_REFUND', TRANSACTION_VOID = 'TRANSACTION_VOID', FEE_VOID = 'FEE_VOID', DEBIT_CARD_WITHDRAWAL_AT_STORE = 'DEBIT_CARD_WITHDRAWAL_AT_STORE', ELECTRONIC_PAYMENT = 'ELECTRONIC_PAYMENT', ACH_DEBIT = 'ACH_DEBIT', ATM_TELLER_DEPOSIT = 'ATM_TELLER_DEPOSIT', POS_DEBIT = 'POS_DEBIT', BANK_ADJUSTMENT = 'BANK_ADJUSTMENT', CHARGES_FEES = 'CHARGES_FEES', INTEREST = 'INTEREST', DEPOSITS_CREDITS = 'DEPOSITS_CREDITS', PAYMENT = 'PAYMENT', PURCHASE = 'PURCHASE', REFUND = 'REFUND', TRANSFER = 'TRANSFER', WITHDRAWAL = 'WITHDRAWAL', OTHER_DEPOSITS = 'OTHER_DEPOSITS', OTHER_WITHDRAWALS = 'OTHER_WITHDRAWALS', ADJUSTMENT = 'ADJUSTMENT', FINANCE_CHARGE = 'FINANCE_CHARGE', OTHER_CHARGES_FEES = 'OTHER_CHARGES_FEES', ANNUAL_FEE = 'ANNUAL_FEE', DEPOSIT = 'DEPOSIT', DIRECT_DEPOSIT_SALARY = 'DIRECT_DEPOSIT_SALARY', INVESTMENT_INCOME_CASH = 'INVESTMENT_INCOME_CASH', SSA = 'SSA', REWARDS = 'REWARDS', CHECK_DEPOSIT = 'CHECK_DEPOSIT', MOBILE_REMOTE_DEPOSIT = 'MOBILE_REMOTE_DEPOSIT', TELLER_DEPOSIT = 'TELLER_DEPOSIT', TAX_REFUND = 'TAX_REFUND', CREDIT_CARD_PAYMENT = 'CREDIT_CARD_PAYMENT', INSURANCE_PAYMENT = 'INSURANCE_PAYMENT', UTILITIES_PAYMENT = 'UTILITIES_PAYMENT', CHILD_SUPPORT = 'CHILD_SUPPORT', LOAN = 'LOAN', PERSONAL_LOAN = 'PERSONAL_LOAN', STUDENT_LOAN = 'STUDENT_LOAN', SALES_TAX = 'SALES_TAX', REIMBURSEMENT = 'REIMBURSEMENT', BALANCE_TRANSFER = 'BALANCE_TRANSFER', WIRE_TRANSFER = 'WIRE_TRANSFER', OVERDRAFT_PROTECTION = 'OVERDRAFT_PROTECTION', DEBIT = 'DEBIT', CREDIT = 'CREDIT', NSF_FEES = 'NSF_FEES' }

	export interface DataExtractsUserData {
		account?: Array<DataExtractsAccount>;
		holding?: Array<DataExtractsHolding>;
		providerAccount?: Array<DataExtractsProviderAccount>;

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		totalTransactionsCount?: string | null;
		transaction?: Array<DataExtractsTransaction>;
		user?: DataExtractsUser;
	}
	export interface DataExtractsUserDataFormProperties {

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		totalTransactionsCount: FormControl<string | null | undefined>,
	}
	export function CreateDataExtractsUserDataFormGroup() {
		return new FormGroup<DataExtractsUserDataFormProperties>({
			totalTransactionsCount: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DataExtractsUserDataResponse {
		userData?: Array<DataExtractsUserData>;
	}
	export interface DataExtractsUserDataResponseFormProperties {
	}
	export function CreateDataExtractsUserDataResponseFormGroup() {
		return new FormGroup<DataExtractsUserDataResponseFormProperties>({
		});

	}

	export interface DerivedCategorySummary {

		/**
		 * Id of the category. This information is provided by transactions/categories service.<br><br><b>Applicable containers</b>: creditCard, bank, investment<br>
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		categoryId?: string | null;

		/** The name of the category.<br><br><b>Applicable containers</b>: creditCard, bank, investment<br> */
		categoryName?: string | null;
		creditTotal?: Money;
		debitTotal?: Money;

		/** Credit and debit summary per date.<br><br><b>Applicable containers</b>: creditCard, bank, investment<br> */
		details?: Array<DerivedCategorySummaryDetails>;
		links?: DerivedTransactionsLinks;
	}
	export interface DerivedCategorySummaryFormProperties {

		/**
		 * Id of the category. This information is provided by transactions/categories service.<br><br><b>Applicable containers</b>: creditCard, bank, investment<br>
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		categoryId: FormControl<string | null | undefined>,

		/** The name of the category.<br><br><b>Applicable containers</b>: creditCard, bank, investment<br> */
		categoryName: FormControl<string | null | undefined>,
	}
	export function CreateDerivedCategorySummaryFormGroup() {
		return new FormGroup<DerivedCategorySummaryFormProperties>({
			categoryId: new FormControl<string | null | undefined>(undefined),
			categoryName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DerivedCategorySummaryDetails {
		creditTotal?: Money;

		/** Date on which the credit and debit transactions had occured.<br><br><b>Applicable containers</b>: creditCard, bank, investment<br> */
		date?: string | null;
		debitTotal?: Money;
	}
	export interface DerivedCategorySummaryDetailsFormProperties {

		/** Date on which the credit and debit transactions had occured.<br><br><b>Applicable containers</b>: creditCard, bank, investment<br> */
		date: FormControl<string | null | undefined>,
	}
	export function CreateDerivedCategorySummaryDetailsFormGroup() {
		return new FormGroup<DerivedCategorySummaryDetailsFormProperties>({
			date: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DerivedTransactionsLinks {

		/** Link of the transaction API service that corresponds to the value derivation.<br><br><b>Applicable containers</b>: creditCard, bank, investment<br> */
		transactions?: string | null;
	}
	export interface DerivedTransactionsLinksFormProperties {

		/** Link of the transaction API service that corresponds to the value derivation.<br><br><b>Applicable containers</b>: creditCard, bank, investment<br> */
		transactions: FormControl<string | null | undefined>,
	}
	export function CreateDerivedTransactionsLinksFormGroup() {
		return new FormGroup<DerivedTransactionsLinksFormProperties>({
			transactions: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DerivedHolding {

		/**
		 * Unique identifier of the account to which the security is linked.<br><br><b>Applicable containers</b>: investment, insurance<br>
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		accountId?: string | null;
		accruedIncome?: Money;
		accruedInterest?: Money;
		assetClassification?: AssetClassification;

		/**
		 * The quantity of tradeable units in a contract.<br><b>Note</b>: The contract quantity field is only applicable to commodity and currency.<br><br><b>Applicable containers</b>: investment<br>
		 * Type: double
		 */
		contractQuantity?: number | null;
		costBasis?: Money;

		/**
		 * The stated interest rate for a bond.<br><br><b>Applicable containers</b>: investment<br>
		 * Type: double
		 */
		couponRate?: number | null;

		/** The date on which the holding is created in the Yodlee system.<br><br><b>Applicable containers</b>: investment, insurance<br> */
		createdDate?: string | null;

		/** The CUSIP (Committee on Uniform Securities Identification Procedures) identifies most the financial instruments in the United States and Canada.<br><br><b>Applicable containers</b>: investment<br> */
		cusipNumber?: string | null;

		/** The description (name) for the holding (E.g., Cisco Systems)<br>For insurance container, the field is only applicable for insurance annuity and variable life insurance types. <br><br><b>Applicable containers</b>: investment, insurance<br> */
		description?: string | null;

		/** The enrichedDescription is the security description of the normalized holding<br><br><b>Applicable containers</b>: investment, insurance<br> */
		enrichedDescription?: string | null;

		/**
		 * The quantity of the employee stock options that are already exercised or bought by the employee.<br><b>Note</b>: Once the employee stock options is exercised, they are either converted to cash value or equity positions depending on the FI. The exercised quantity field is only applicable to employee stock options.<br><br><b>Applicable containers</b>: investment<br>
		 * Type: double
		 */
		exercisedQuantity?: number | null;

		/** The date on which an option, right or warrant expires.<br><b>Note</b>: The expiration date field is only applicable to options and employee stock options.<br><br><b>Applicable containers</b>: investment<br> */
		expirationDate?: string | null;

		/** The date on which equity awards like ESOP, RSU, etc., are issued or granted.<br><b>Note</b>: The grant date field is only applicable to employee stock options, restricted stock units/awards, performance units, etc.<br><br><b>Applicable containers</b>: investment<br> */
		grantDate?: string | null;

		/** Type of holding<br><br><b>Applicable containers</b>: investment, insurance<br> */
		holdingType?: DataExtractsHoldingHoldingType | null;

		/**
		 * Unique identifier for the security added in the system. This is the primary key of the holding resource.<br><br><b>Applicable containers</b>: investment, insurance<br>
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		id?: string | null;

		/**
		 * The interest rate on a CD.<br><b>Note</b>: The interest rate field is only applicable to CD.<br><br><b>Applicable containers</b>: investment<br>
		 * Type: double
		 */
		interestRate?: number | null;

		/** Indicates that the holding is a short trading.<br><br><b>Applicable containers</b>: investment<br> */
		isShort?: boolean | null;

		/** The ISIN (International Securities Identification Number) is used worldwide to identify specific securities. It is equivalent to CUSIP for international markets.<br><br><b>Note</b>: The ISIN field is only applicable to the trade related transactions<br><br><b>Applicable containers</b>: investment<br> */
		isin?: string | null;

		/** The date when the information was last updated in the system.<br><br><b>Applicable containers</b>: investment, insurance<br> */
		lastUpdated?: string | null;

		/** Indicates the security match status id of the investment option identified during security normalization.<br><br><b>Applicable containers</b>: investment<br> */
		matchStatus?: string | null;

		/** The stated maturity date of a bond or CD.<br><br><b>Applicable containers</b>: investment<br> */
		maturityDate?: string | null;

		/** The type of the option position (i.e., put or call).<br><b>Note</b>: The option type field is only applicable to options.<br><br><b>Applicable containers</b>: investment<br><b>Applicable Values</b><br> */
		optionType?: DataExtractsHoldingOptionType | null;
		price?: Money;

		/**
		 * Unique identifier for the user's association with the provider.<br><br><b>Applicable containers</b>: investment, insurance<br>
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		providerAccountId?: string | null;

		/**
		 * The quantity held for the holding.<br><b>Note</b>: Only for bonds the quantity field indicates the normalized quantity and not the quantity aggregated from the site. The quantity field is only applicable to restricted stock units/awards, performance units, currency, and commodity.<br>For insurance container, the field is only applicable for insurance annuity and variable life insurance types.<br><br><b>Applicable containers</b>: investment, insurance<br>
		 * Type: double
		 */
		quantity?: number | null;

		/** Indicates the security style of holding identified through the security service.<br><br><b>Applicable containers</b>: investment, insurance<br> */
		securityStyle?: string | null;

		/** Indicates the security type of holding identified through the security service.<br><br><b>Applicable containers</b>: investment, insurance<br> */
		securityType?: string | null;

		/** The SEDOL (Stock Exchange Daily Official List) is a set of security identifiers used in the United Kingdom and Ireland for clearing purposes.<br><b>Note</b>: The SEDOL field is only applicable to the trade related transactions<br><br><b>Applicable containers</b>: investment<br> */
		sedol?: string | null;
		spread?: Money;
		strikePrice?: Money;

		/** The symbol of the security.<br><br><b>Applicable containers</b>: investment<br> */
		symbol?: string | null;

		/** The fixed duration for which the bond or CD is issued.<br><b>Note</b>: The term field is only applicable to CD.<br><br><b>Applicable containers</b>: investment<br> */
		term?: string | null;

		/**
		 * Indicates the number of unvested quantity or units.<br><b>Note</b>: The unvested quantity field is only applicable to employee stock options, restricted stock units/awards, performance units, etc.<br><br><b>Applicable containers</b>: investment<br>
		 * Type: double
		 */
		unvestedQuantity?: number | null;
		unvestedValue?: Money;
		value?: Money;

		/**
		 * The quantity of units or shares that are already vested on a vest date.<br><b>Note</b>: The vested quantity field is only applicable to employee stock options, restricted stock units/awards, performance units, etc.<br><br><b>Applicable containers</b>: investment<br>
		 * Type: double
		 */
		vestedQuantity?: number | null;

		/**
		 * The number of vested shares that can be exercised by the employee. It is usually equal to the vested quantity.<br><b>Note</b>: The vested shares exercisable field is only applicable to employee stock options, restricted stock units/awards, performance units, etc.<br><br><b>Applicable containers</b>: investment<br>
		 * Type: double
		 */
		vestedSharesExercisable?: number | null;
		vestedValue?: Money;

		/** The date on which a RSU, RSA, or an employee stock options become vested.<br><b>Note</b>: The vesting date field is only applicable to employee stock options, restricted stock units/awards, performance units, etc.<br><br><b>Applicable containers</b>: investment<br> */
		vestingDate?: string | null;
	}
	export interface DerivedHoldingFormProperties {

		/**
		 * Unique identifier of the account to which the security is linked.<br><br><b>Applicable containers</b>: investment, insurance<br>
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		accountId: FormControl<string | null | undefined>,

		/**
		 * The quantity of tradeable units in a contract.<br><b>Note</b>: The contract quantity field is only applicable to commodity and currency.<br><br><b>Applicable containers</b>: investment<br>
		 * Type: double
		 */
		contractQuantity: FormControl<number | null | undefined>,

		/**
		 * The stated interest rate for a bond.<br><br><b>Applicable containers</b>: investment<br>
		 * Type: double
		 */
		couponRate: FormControl<number | null | undefined>,

		/** The date on which the holding is created in the Yodlee system.<br><br><b>Applicable containers</b>: investment, insurance<br> */
		createdDate: FormControl<string | null | undefined>,

		/** The CUSIP (Committee on Uniform Securities Identification Procedures) identifies most the financial instruments in the United States and Canada.<br><br><b>Applicable containers</b>: investment<br> */
		cusipNumber: FormControl<string | null | undefined>,

		/** The description (name) for the holding (E.g., Cisco Systems)<br>For insurance container, the field is only applicable for insurance annuity and variable life insurance types. <br><br><b>Applicable containers</b>: investment, insurance<br> */
		description: FormControl<string | null | undefined>,

		/** The enrichedDescription is the security description of the normalized holding<br><br><b>Applicable containers</b>: investment, insurance<br> */
		enrichedDescription: FormControl<string | null | undefined>,

		/**
		 * The quantity of the employee stock options that are already exercised or bought by the employee.<br><b>Note</b>: Once the employee stock options is exercised, they are either converted to cash value or equity positions depending on the FI. The exercised quantity field is only applicable to employee stock options.<br><br><b>Applicable containers</b>: investment<br>
		 * Type: double
		 */
		exercisedQuantity: FormControl<number | null | undefined>,

		/** The date on which an option, right or warrant expires.<br><b>Note</b>: The expiration date field is only applicable to options and employee stock options.<br><br><b>Applicable containers</b>: investment<br> */
		expirationDate: FormControl<string | null | undefined>,

		/** The date on which equity awards like ESOP, RSU, etc., are issued or granted.<br><b>Note</b>: The grant date field is only applicable to employee stock options, restricted stock units/awards, performance units, etc.<br><br><b>Applicable containers</b>: investment<br> */
		grantDate: FormControl<string | null | undefined>,

		/** Type of holding<br><br><b>Applicable containers</b>: investment, insurance<br> */
		holdingType: FormControl<DataExtractsHoldingHoldingType | null | undefined>,

		/**
		 * Unique identifier for the security added in the system. This is the primary key of the holding resource.<br><br><b>Applicable containers</b>: investment, insurance<br>
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * The interest rate on a CD.<br><b>Note</b>: The interest rate field is only applicable to CD.<br><br><b>Applicable containers</b>: investment<br>
		 * Type: double
		 */
		interestRate: FormControl<number | null | undefined>,

		/** Indicates that the holding is a short trading.<br><br><b>Applicable containers</b>: investment<br> */
		isShort: FormControl<boolean | null | undefined>,

		/** The ISIN (International Securities Identification Number) is used worldwide to identify specific securities. It is equivalent to CUSIP for international markets.<br><br><b>Note</b>: The ISIN field is only applicable to the trade related transactions<br><br><b>Applicable containers</b>: investment<br> */
		isin: FormControl<string | null | undefined>,

		/** The date when the information was last updated in the system.<br><br><b>Applicable containers</b>: investment, insurance<br> */
		lastUpdated: FormControl<string | null | undefined>,

		/** Indicates the security match status id of the investment option identified during security normalization.<br><br><b>Applicable containers</b>: investment<br> */
		matchStatus: FormControl<string | null | undefined>,

		/** The stated maturity date of a bond or CD.<br><br><b>Applicable containers</b>: investment<br> */
		maturityDate: FormControl<string | null | undefined>,

		/** The type of the option position (i.e., put or call).<br><b>Note</b>: The option type field is only applicable to options.<br><br><b>Applicable containers</b>: investment<br><b>Applicable Values</b><br> */
		optionType: FormControl<DataExtractsHoldingOptionType | null | undefined>,

		/**
		 * Unique identifier for the user's association with the provider.<br><br><b>Applicable containers</b>: investment, insurance<br>
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		providerAccountId: FormControl<string | null | undefined>,

		/**
		 * The quantity held for the holding.<br><b>Note</b>: Only for bonds the quantity field indicates the normalized quantity and not the quantity aggregated from the site. The quantity field is only applicable to restricted stock units/awards, performance units, currency, and commodity.<br>For insurance container, the field is only applicable for insurance annuity and variable life insurance types.<br><br><b>Applicable containers</b>: investment, insurance<br>
		 * Type: double
		 */
		quantity: FormControl<number | null | undefined>,

		/** Indicates the security style of holding identified through the security service.<br><br><b>Applicable containers</b>: investment, insurance<br> */
		securityStyle: FormControl<string | null | undefined>,

		/** Indicates the security type of holding identified through the security service.<br><br><b>Applicable containers</b>: investment, insurance<br> */
		securityType: FormControl<string | null | undefined>,

		/** The SEDOL (Stock Exchange Daily Official List) is a set of security identifiers used in the United Kingdom and Ireland for clearing purposes.<br><b>Note</b>: The SEDOL field is only applicable to the trade related transactions<br><br><b>Applicable containers</b>: investment<br> */
		sedol: FormControl<string | null | undefined>,

		/** The symbol of the security.<br><br><b>Applicable containers</b>: investment<br> */
		symbol: FormControl<string | null | undefined>,

		/** The fixed duration for which the bond or CD is issued.<br><b>Note</b>: The term field is only applicable to CD.<br><br><b>Applicable containers</b>: investment<br> */
		term: FormControl<string | null | undefined>,

		/**
		 * Indicates the number of unvested quantity or units.<br><b>Note</b>: The unvested quantity field is only applicable to employee stock options, restricted stock units/awards, performance units, etc.<br><br><b>Applicable containers</b>: investment<br>
		 * Type: double
		 */
		unvestedQuantity: FormControl<number | null | undefined>,

		/**
		 * The quantity of units or shares that are already vested on a vest date.<br><b>Note</b>: The vested quantity field is only applicable to employee stock options, restricted stock units/awards, performance units, etc.<br><br><b>Applicable containers</b>: investment<br>
		 * Type: double
		 */
		vestedQuantity: FormControl<number | null | undefined>,

		/**
		 * The number of vested shares that can be exercised by the employee. It is usually equal to the vested quantity.<br><b>Note</b>: The vested shares exercisable field is only applicable to employee stock options, restricted stock units/awards, performance units, etc.<br><br><b>Applicable containers</b>: investment<br>
		 * Type: double
		 */
		vestedSharesExercisable: FormControl<number | null | undefined>,

		/** The date on which a RSU, RSA, or an employee stock options become vested.<br><b>Note</b>: The vesting date field is only applicable to employee stock options, restricted stock units/awards, performance units, etc.<br><br><b>Applicable containers</b>: investment<br> */
		vestingDate: FormControl<string | null | undefined>,
	}
	export function CreateDerivedHoldingFormGroup() {
		return new FormGroup<DerivedHoldingFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
			contractQuantity: new FormControl<number | null | undefined>(undefined),
			couponRate: new FormControl<number | null | undefined>(undefined),
			createdDate: new FormControl<string | null | undefined>(undefined),
			cusipNumber: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			enrichedDescription: new FormControl<string | null | undefined>(undefined),
			exercisedQuantity: new FormControl<number | null | undefined>(undefined),
			expirationDate: new FormControl<string | null | undefined>(undefined),
			grantDate: new FormControl<string | null | undefined>(undefined),
			holdingType: new FormControl<DataExtractsHoldingHoldingType | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			interestRate: new FormControl<number | null | undefined>(undefined),
			isShort: new FormControl<boolean | null | undefined>(undefined),
			isin: new FormControl<string | null | undefined>(undefined),
			lastUpdated: new FormControl<string | null | undefined>(undefined),
			matchStatus: new FormControl<string | null | undefined>(undefined),
			maturityDate: new FormControl<string | null | undefined>(undefined),
			optionType: new FormControl<DataExtractsHoldingOptionType | null | undefined>(undefined),
			providerAccountId: new FormControl<string | null | undefined>(undefined),
			quantity: new FormControl<number | null | undefined>(undefined),
			securityStyle: new FormControl<string | null | undefined>(undefined),
			securityType: new FormControl<string | null | undefined>(undefined),
			sedol: new FormControl<string | null | undefined>(undefined),
			symbol: new FormControl<string | null | undefined>(undefined),
			term: new FormControl<string | null | undefined>(undefined),
			unvestedQuantity: new FormControl<number | null | undefined>(undefined),
			vestedQuantity: new FormControl<number | null | undefined>(undefined),
			vestedSharesExercisable: new FormControl<number | null | undefined>(undefined),
			vestingDate: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DerivedHoldingSummaryResponse {
		holdingSummary?: Array<DerivedHoldingsSummary>;
		link?: DerivedHoldingsLinks;
	}
	export interface DerivedHoldingSummaryResponseFormProperties {
	}
	export function CreateDerivedHoldingSummaryResponseFormGroup() {
		return new FormGroup<DerivedHoldingSummaryResponseFormProperties>({
		});

	}

	export interface DerivedHoldingsSummary {

		/** Accounts that contribute to the classification. <br><b>Required Feature Enablement</b>: Asset classification feature.<br><br><b>Applicable containers</b>: investment, insurance<br> */
		account?: Array<DerivedHoldingsAccount>;

		/** The classification type of the security. The supported asset classification type and the values are provided in the /holdings/assetClassificationList.<br><b>Required Feature Enablement</b>: Asset classification feature.<br><br><b>Applicable containers</b>: investment, insurance<br> */
		classificationType?: string | null;

		/** The classification value that corresponds to the classification type of the holding. The supported asset classification type and the values are provided in the /holdings/assetClassificationList.<br><b>Required Feature Enablement</b>: Asset classification feature.<br><br><b>Applicable containers</b>: investment, insurance<br> */
		classificationValue?: string | null;

		/** Securities that belong to the asset classification type and contributed to the summary value.<br><b>Required Feature Enablement</b>: Asset classification feature.<br><br><b>Applicable containers</b>: investment, insurance<br> */
		holding?: Array<DerivedHolding>;
		value?: Money;
	}
	export interface DerivedHoldingsSummaryFormProperties {

		/** The classification type of the security. The supported asset classification type and the values are provided in the /holdings/assetClassificationList.<br><b>Required Feature Enablement</b>: Asset classification feature.<br><br><b>Applicable containers</b>: investment, insurance<br> */
		classificationType: FormControl<string | null | undefined>,

		/** The classification value that corresponds to the classification type of the holding. The supported asset classification type and the values are provided in the /holdings/assetClassificationList.<br><b>Required Feature Enablement</b>: Asset classification feature.<br><br><b>Applicable containers</b>: investment, insurance<br> */
		classificationValue: FormControl<string | null | undefined>,
	}
	export function CreateDerivedHoldingsSummaryFormGroup() {
		return new FormGroup<DerivedHoldingsSummaryFormProperties>({
			classificationType: new FormControl<string | null | undefined>(undefined),
			classificationValue: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DerivedHoldingsAccount {

		/**
		 * The primary key of the account resource and the unique identifier for the account.<br>Required Feature Enablement: Asset classification feature.<br><br><b>Applicable containers</b>: investment, insurance<br>
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		id?: string | null;
		value?: Money;
	}
	export interface DerivedHoldingsAccountFormProperties {

		/**
		 * The primary key of the account resource and the unique identifier for the account.<br>Required Feature Enablement: Asset classification feature.<br><br><b>Applicable containers</b>: investment, insurance<br>
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		id: FormControl<string | null | undefined>,
	}
	export function CreateDerivedHoldingsAccountFormGroup() {
		return new FormGroup<DerivedHoldingsAccountFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DerivedHoldingsLinks {
		holdings?: string | null;
	}
	export interface DerivedHoldingsLinksFormProperties {
		holdings: FormControl<string | null | undefined>,
	}
	export function CreateDerivedHoldingsLinksFormGroup() {
		return new FormGroup<DerivedHoldingsLinksFormProperties>({
			holdings: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DerivedNetworth {
		asset?: Money;

		/** The date as of when the networth information is provided.<br><br><b>Applicable containers</b>: bank, creditcard, investment, insurance, realEstate, loan<br> */
		date?: string | null;

		/** Balances of the accounts over the period of time.<br><br><b>Applicable containers</b>: bank, creditcard, investment, insurance, realEstate, loan<br> */
		historicalBalances?: Array<DerivedNetworthHistoricalBalance>;
		liability?: Money;
		networth?: Money;
	}
	export interface DerivedNetworthFormProperties {

		/** The date as of when the networth information is provided.<br><br><b>Applicable containers</b>: bank, creditcard, investment, insurance, realEstate, loan<br> */
		date: FormControl<string | null | undefined>,
	}
	export function CreateDerivedNetworthFormGroup() {
		return new FormGroup<DerivedNetworthFormProperties>({
			date: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DerivedNetworthHistoricalBalance {

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		accountId?: string | null;

		/** Date as of when the balance is last  updated due to the auto account updates or user triggered updates. This balance will be carry forward for the days where there is no balance available in the system. <br><br><b>Account Type</b>: Aggregated and Manual<br><b>Applicable containers</b>: bank, creditCard, investment, insurance, realEstate, loan<br><b>Endpoints</b>:<ul><li>GET accounts/historicalBalances</li></ul> */
		asOfDate?: string | null;
		balance?: Money;

		/** The source of balance information.<br><br><b>Account Type</b>: Aggregated and Manual<br><b>Applicable containers</b>: bank, creditCard, investment, insurance, realEstate, loan<br><b>Endpoints</b>:<ul><li>GET accounts/historicalBalances</li></ul><b>Applicable Values</b><br> */
		dataSourceType?: HistoricalBalanceDataSourceType | null;

		/** Date for which the account balance was provided.  This balance could be a carryforward, calculated or a scraped balance. AdditIonal Details: scraped: Balance shown in the provider site. This balance gets stored in Yodlee system during system/user account updates. carryForward : Balance carried forward from the scraped balance to the days for which the balance was not available in the system. Balance may not be available for all the days in the system due to MFA information required, error in the site, credential changes, etc. calculated: Balances that gets calculated for the days that are prior to the account added date.<br><br><b>Account Type</b>: Aggregated and Manual<br><b>Applicable containers</b>: bank, creditCard, investment, insurance, realEstate, loan<br><b>Endpoints</b>:<ul><li>GET accounts/historicalBalances</li><li>GET derived/networth</li></ul> */
		date?: string | null;

		/** Indicates whether the balance is an asset or liability.<br><br><b>Account Type</b>: Aggregated and Manual<br><b>Applicable containers</b>: bank, creditCard, investment, insurance, realEstate, loan<br><b>Endpoints</b>:<ul><li>GET accounts/historicalBalances</li></ul> */
		isAsset?: boolean | null;
	}
	export interface DerivedNetworthHistoricalBalanceFormProperties {

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		accountId: FormControl<string | null | undefined>,

		/** Date as of when the balance is last  updated due to the auto account updates or user triggered updates. This balance will be carry forward for the days where there is no balance available in the system. <br><br><b>Account Type</b>: Aggregated and Manual<br><b>Applicable containers</b>: bank, creditCard, investment, insurance, realEstate, loan<br><b>Endpoints</b>:<ul><li>GET accounts/historicalBalances</li></ul> */
		asOfDate: FormControl<string | null | undefined>,

		/** The source of balance information.<br><br><b>Account Type</b>: Aggregated and Manual<br><b>Applicable containers</b>: bank, creditCard, investment, insurance, realEstate, loan<br><b>Endpoints</b>:<ul><li>GET accounts/historicalBalances</li></ul><b>Applicable Values</b><br> */
		dataSourceType: FormControl<HistoricalBalanceDataSourceType | null | undefined>,

		/** Date for which the account balance was provided.  This balance could be a carryforward, calculated or a scraped balance. AdditIonal Details: scraped: Balance shown in the provider site. This balance gets stored in Yodlee system during system/user account updates. carryForward : Balance carried forward from the scraped balance to the days for which the balance was not available in the system. Balance may not be available for all the days in the system due to MFA information required, error in the site, credential changes, etc. calculated: Balances that gets calculated for the days that are prior to the account added date.<br><br><b>Account Type</b>: Aggregated and Manual<br><b>Applicable containers</b>: bank, creditCard, investment, insurance, realEstate, loan<br><b>Endpoints</b>:<ul><li>GET accounts/historicalBalances</li><li>GET derived/networth</li></ul> */
		date: FormControl<string | null | undefined>,

		/** Indicates whether the balance is an asset or liability.<br><br><b>Account Type</b>: Aggregated and Manual<br><b>Applicable containers</b>: bank, creditCard, investment, insurance, realEstate, loan<br><b>Endpoints</b>:<ul><li>GET accounts/historicalBalances</li></ul> */
		isAsset: FormControl<boolean | null | undefined>,
	}
	export function CreateDerivedNetworthHistoricalBalanceFormGroup() {
		return new FormGroup<DerivedNetworthHistoricalBalanceFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
			asOfDate: new FormControl<string | null | undefined>(undefined),
			dataSourceType: new FormControl<HistoricalBalanceDataSourceType | null | undefined>(undefined),
			date: new FormControl<string | null | undefined>(undefined),
			isAsset: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface DerivedNetworthResponse {
		networth?: Array<DerivedNetworth>;
	}
	export interface DerivedNetworthResponseFormProperties {
	}
	export function CreateDerivedNetworthResponseFormGroup() {
		return new FormGroup<DerivedNetworthResponseFormProperties>({
		});

	}

	export interface DerivedTransactionSummaryResponse {
		links?: DerivedTransactionsLinks;
		transactionSummary?: Array<DerivedTransactionsSummary>;
	}
	export interface DerivedTransactionSummaryResponseFormProperties {
	}
	export function CreateDerivedTransactionSummaryResponseFormGroup() {
		return new FormGroup<DerivedTransactionSummaryResponseFormProperties>({
		});

	}

	export interface DerivedTransactionsSummary {

		/** Summary of transaction amouts at category level.<br><br><b>Applicable containers</b>: creditCard, bank, investment<br> */
		categorySummary?: Array<DerivedCategorySummary>;

		/** Type of categories provided by transactions/categories service.<br><br><b>Applicable containers</b>: creditCard, bank, investment<br><b>Applicable Values</b><br> */
		categoryType?: DataExtractsTransactionCategoryType | null;
		creditTotal?: Money;
		debitTotal?: Money;
		links?: DerivedTransactionsLinks;
	}
	export interface DerivedTransactionsSummaryFormProperties {

		/** Type of categories provided by transactions/categories service.<br><br><b>Applicable containers</b>: creditCard, bank, investment<br><b>Applicable Values</b><br> */
		categoryType: FormControl<DataExtractsTransactionCategoryType | null | undefined>,
	}
	export function CreateDerivedTransactionsSummaryFormGroup() {
		return new FormGroup<DerivedTransactionsSummaryFormProperties>({
			categoryType: new FormControl<DataExtractsTransactionCategoryType | null | undefined>(undefined),
		});

	}

	export interface DetailCategory {

		/**
		 * The unique identifier of the detail category.<br><br><b>Applicable containers</b>:  creditCard, investment, insurance, loan<br>
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		id?: string | null;

		/** The name of the detail category<br><br><b>Applicable containers</b>:  creditCard, investment, insurance, loan<br> */
		name?: string | null;
	}
	export interface DetailCategoryFormProperties {

		/**
		 * The unique identifier of the detail category.<br><br><b>Applicable containers</b>:  creditCard, investment, insurance, loan<br>
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		id: FormControl<string | null | undefined>,

		/** The name of the detail category<br><br><b>Applicable containers</b>:  creditCard, investment, insurance, loan<br> */
		name: FormControl<string | null | undefined>,
	}
	export function CreateDetailCategoryFormGroup() {
		return new FormGroup<DetailCategoryFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Document {

		/**
		 * The unique identifier for the account. The account ID to which the document is linked.<br><br><b>Applicable containers</b>: bank, investment, creditCard, loan, insurance<br>
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		accountID?: string | null;

		/** Indicates the type of the document.<br><br><b>Applicable containers</b>: bank, investment, creditCard, loan, insurance<br> */
		docType?: DocumentDocType | null;

		/** Indicates the type of the tax form.<br><br><b>Applicable containers</b>: bank, investment, creditCard, loan, insurance<br> */
		formType?: string | null;

		/** The document's primary key and unique identifier.<br><br><b>Applicable containers</b>: bank, investment, creditCard, loan, insurance<br> */
		id?: string | null;

		/** Indicates the date and time the document was last updated.<br><br><b>Applicable containers</b>: bank, investment, creditCard, loan, insurance<br> */
		lastUpdated?: string | null;

		/** Indicates the name of the document.<br><br><b>Applicable containers</b>: bank, investment, creditCard, loan, insurance<br> */
		name?: string | null;

		/** Indicates the source of the document download.<br><br><b>Applicable containers</b>: bank, investment, creditCard, loan, insurance<br> */
		source?: string | null;

		/** Indicates the status of the document download.<br><br><b>Applicable containers</b>: bank, investment, creditCard, loan, insurance<br> */
		status?: string | null;
	}
	export interface DocumentFormProperties {

		/**
		 * The unique identifier for the account. The account ID to which the document is linked.<br><br><b>Applicable containers</b>: bank, investment, creditCard, loan, insurance<br>
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		accountID: FormControl<string | null | undefined>,

		/** Indicates the type of the document.<br><br><b>Applicable containers</b>: bank, investment, creditCard, loan, insurance<br> */
		docType: FormControl<DocumentDocType | null | undefined>,

		/** Indicates the type of the tax form.<br><br><b>Applicable containers</b>: bank, investment, creditCard, loan, insurance<br> */
		formType: FormControl<string | null | undefined>,

		/** The document's primary key and unique identifier.<br><br><b>Applicable containers</b>: bank, investment, creditCard, loan, insurance<br> */
		id: FormControl<string | null | undefined>,

		/** Indicates the date and time the document was last updated.<br><br><b>Applicable containers</b>: bank, investment, creditCard, loan, insurance<br> */
		lastUpdated: FormControl<string | null | undefined>,

		/** Indicates the name of the document.<br><br><b>Applicable containers</b>: bank, investment, creditCard, loan, insurance<br> */
		name: FormControl<string | null | undefined>,

		/** Indicates the source of the document download.<br><br><b>Applicable containers</b>: bank, investment, creditCard, loan, insurance<br> */
		source: FormControl<string | null | undefined>,

		/** Indicates the status of the document download.<br><br><b>Applicable containers</b>: bank, investment, creditCard, loan, insurance<br> */
		status: FormControl<string | null | undefined>,
	}
	export function CreateDocumentFormGroup() {
		return new FormGroup<DocumentFormProperties>({
			accountID: new FormControl<string | null | undefined>(undefined),
			docType: new FormControl<DocumentDocType | null | undefined>(undefined),
			formType: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			lastUpdated: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			source: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DocumentDocType { STMT = 'STMT', TAX = 'TAX', EBILL = 'EBILL' }

	export interface DocumentDownload {

		/** Contents of the document in Base64 format.<br><br><b>Applicable containers</b>: bank, investment, creditCard, loan, insurance<br> */
		docContent?: string | null;

		/** The document's primary key and unique identifier.<br><br><b>Applicable containers</b>: bank, investment, creditCard, loan, insurance<br> */
		id?: string | null;
	}
	export interface DocumentDownloadFormProperties {

		/** Contents of the document in Base64 format.<br><br><b>Applicable containers</b>: bank, investment, creditCard, loan, insurance<br> */
		docContent: FormControl<string | null | undefined>,

		/** The document's primary key and unique identifier.<br><br><b>Applicable containers</b>: bank, investment, creditCard, loan, insurance<br> */
		id: FormControl<string | null | undefined>,
	}
	export function CreateDocumentDownloadFormGroup() {
		return new FormGroup<DocumentDownloadFormProperties>({
			docContent: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DocumentDownloadResponse {
		document?: Array<DocumentDownload>;
	}
	export interface DocumentDownloadResponseFormProperties {
	}
	export function CreateDocumentDownloadResponseFormGroup() {
		return new FormGroup<DocumentDownloadResponseFormProperties>({
		});

	}

	export interface DocumentResponse {
		document?: Array<Document>;
	}
	export interface DocumentResponseFormProperties {
	}
	export function CreateDocumentResponseFormGroup() {
		return new FormGroup<DocumentResponseFormProperties>({
		});

	}

	export interface EvaluateAccountAddress {
		address1?: string | null;
		address2?: string | null;
		address3?: string | null;
		city?: string | null;
		country?: string | null;
		sourceType?: string | null;
		state?: string | null;

		/** Required */
		street: string;
		type?: AccountAddressType | null;
		zip?: string | null;
	}
	export interface EvaluateAccountAddressFormProperties {
		address1: FormControl<string | null | undefined>,
		address2: FormControl<string | null | undefined>,
		address3: FormControl<string | null | undefined>,
		city: FormControl<string | null | undefined>,
		country: FormControl<string | null | undefined>,
		sourceType: FormControl<string | null | undefined>,
		state: FormControl<string | null | undefined>,

		/** Required */
		street: FormControl<string | null | undefined>,
		type: FormControl<AccountAddressType | null | undefined>,
		zip: FormControl<string | null | undefined>,
	}
	export function CreateEvaluateAccountAddressFormGroup() {
		return new FormGroup<EvaluateAccountAddressFormProperties>({
			address1: new FormControl<string | null | undefined>(undefined),
			address2: new FormControl<string | null | undefined>(undefined),
			address3: new FormControl<string | null | undefined>(undefined),
			city: new FormControl<string | null | undefined>(undefined),
			country: new FormControl<string | null | undefined>(undefined),
			sourceType: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<string | null | undefined>(undefined),
			street: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AccountAddressType | null | undefined>(undefined),
			zip: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface EvaluateAddressRequest {

		/** Required */
		address: EvaluateAccountAddress;
	}
	export interface EvaluateAddressRequestFormProperties {
	}
	export function CreateEvaluateAddressRequestFormGroup() {
		return new FormGroup<EvaluateAddressRequestFormProperties>({
		});

	}

	export interface EvaluateAddressResponse {
		address?: Array<AccountAddress>;
		isValidAddress?: boolean | null;
	}
	export interface EvaluateAddressResponseFormProperties {
		isValidAddress: FormControl<boolean | null | undefined>,
	}
	export function CreateEvaluateAddressResponseFormGroup() {
		return new FormGroup<EvaluateAddressResponseFormProperties>({
			isValidAddress: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface Field {

		/**
		 * Identifier for the field.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts/{providerAccountId}</li><li>GET providers/{providerId}</li></ul>
		 * Min length: 1
		 * Max length: 2147483647
		 */
		id?: string | null;

		/** Image displayed at the endsite.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts/{providerAccountId}</li></ul> */
		image?: string | null;

		/** Indicates if a field is an optional field or a mandatory field.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts/{providerAccountId}</li><li>GET providers/{providerId}</li></ul> */
		isOptional?: boolean | null;

		/** Indicates that the answer to the security question already exists in the Yodlee system.Persuading the user to provide the answer to the security question again during the edit-credential flow can be avoided.<br><br><br><b>Endpoints</b>:<ul><li>GET providerAccounts?include=questions</li><li>GET providerAccounts/{providerAccountId}? include=questions</li></ul> */
		isValueProvided?: boolean | null;

		/**
		 * The maximum length of the login form field.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts/{providerAccountId}</li><li>GET providers/{providerId}</li></ul>
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		maxLength?: string | null;

		/**
		 * The minimum length of the login form field.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts/{providerAccountId}</li><li>GET providers/{providerId}</li></ul>
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		minLength?: string | null;

		/** Name of the field.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts/{providerAccountId}</li><li>GET providers/{providerId}</li></ul> */
		name?: string | null;

		/** Provides the different values that are available for the user to choose. This field is applicable for drop-down or radio field types.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts/{providerAccountId}</li><li>GET providers/{providerId}</li></ul> */
		option?: Array<Option>;

		/** The prefix string that has to be displayed before the field value.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts/{providerAccountId}</li><li>GET providers/{providerId}</li></ul> */
		prefix?: string | null;

		/** The suffix string that has to be displayed next to the field value.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts/{providerAccountId}</li><li>GET providers/{providerId}</li></ul> */
		suffix?: string | null;

		/** This indicates the display type of the field. For example, text box, image, etc. <br><br><b>Endpoints</b>:<ul><li>GET providerAccounts/{providerAccountId}</li><li>GET providers/{providerId}</li></ul><b>Applicable Values</b><br> */
		type?: FieldType | null;

		/** Value expected from the user for the field. This will be blank and is expected to be filled and sent back when submitting the login or MFA information.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts/{providerAccountId}</li><li>GET providers/{providerId}</li></ul> */
		value?: string | null;

		/** Indicates whether the field is editable or not.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts/{providerAccountId}</li><li>GET providers/{providerId}</li></ul> */
		valueEditable?: string | null;
	}
	export interface FieldFormProperties {

		/**
		 * Identifier for the field.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts/{providerAccountId}</li><li>GET providers/{providerId}</li></ul>
		 * Min length: 1
		 * Max length: 2147483647
		 */
		id: FormControl<string | null | undefined>,

		/** Image displayed at the endsite.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts/{providerAccountId}</li></ul> */
		image: FormControl<string | null | undefined>,

		/** Indicates if a field is an optional field or a mandatory field.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts/{providerAccountId}</li><li>GET providers/{providerId}</li></ul> */
		isOptional: FormControl<boolean | null | undefined>,

		/** Indicates that the answer to the security question already exists in the Yodlee system.Persuading the user to provide the answer to the security question again during the edit-credential flow can be avoided.<br><br><br><b>Endpoints</b>:<ul><li>GET providerAccounts?include=questions</li><li>GET providerAccounts/{providerAccountId}? include=questions</li></ul> */
		isValueProvided: FormControl<boolean | null | undefined>,

		/**
		 * The maximum length of the login form field.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts/{providerAccountId}</li><li>GET providers/{providerId}</li></ul>
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		maxLength: FormControl<string | null | undefined>,

		/**
		 * The minimum length of the login form field.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts/{providerAccountId}</li><li>GET providers/{providerId}</li></ul>
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		minLength: FormControl<string | null | undefined>,

		/** Name of the field.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts/{providerAccountId}</li><li>GET providers/{providerId}</li></ul> */
		name: FormControl<string | null | undefined>,

		/** The prefix string that has to be displayed before the field value.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts/{providerAccountId}</li><li>GET providers/{providerId}</li></ul> */
		prefix: FormControl<string | null | undefined>,

		/** The suffix string that has to be displayed next to the field value.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts/{providerAccountId}</li><li>GET providers/{providerId}</li></ul> */
		suffix: FormControl<string | null | undefined>,

		/** This indicates the display type of the field. For example, text box, image, etc. <br><br><b>Endpoints</b>:<ul><li>GET providerAccounts/{providerAccountId}</li><li>GET providers/{providerId}</li></ul><b>Applicable Values</b><br> */
		type: FormControl<FieldType | null | undefined>,

		/** Value expected from the user for the field. This will be blank and is expected to be filled and sent back when submitting the login or MFA information.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts/{providerAccountId}</li><li>GET providers/{providerId}</li></ul> */
		value: FormControl<string | null | undefined>,

		/** Indicates whether the field is editable or not.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts/{providerAccountId}</li><li>GET providers/{providerId}</li></ul> */
		valueEditable: FormControl<string | null | undefined>,
	}
	export function CreateFieldFormGroup() {
		return new FormGroup<FieldFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2147483647)]),
			image: new FormControl<string | null | undefined>(undefined),
			isOptional: new FormControl<boolean | null | undefined>(undefined),
			isValueProvided: new FormControl<boolean | null | undefined>(undefined),
			maxLength: new FormControl<string | null | undefined>(undefined),
			minLength: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			prefix: new FormControl<string | null | undefined>(undefined),
			suffix: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<FieldType | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
			valueEditable: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Option {

		/** The text that is displayed to the user for that option in the provider site.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts/{providerAccountId}</li><li>GET providers/{providerId}</li></ul> */
		displayText?: string | null;

		/** The option that is selected by default in the provider site.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts/{providerAccountId}</li><li>GET providers/{providerId}</li></ul> */
		isSelected?: boolean | null;

		/** The value that is associated with the option.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts/{providerAccountId}</li><li>GET providers/{providerId}</li></ul> */
		optionValue?: string | null;
	}
	export interface OptionFormProperties {

		/** The text that is displayed to the user for that option in the provider site.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts/{providerAccountId}</li><li>GET providers/{providerId}</li></ul> */
		displayText: FormControl<string | null | undefined>,

		/** The option that is selected by default in the provider site.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts/{providerAccountId}</li><li>GET providers/{providerId}</li></ul> */
		isSelected: FormControl<boolean | null | undefined>,

		/** The value that is associated with the option.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts/{providerAccountId}</li><li>GET providers/{providerId}</li></ul> */
		optionValue: FormControl<string | null | undefined>,
	}
	export function CreateOptionFormGroup() {
		return new FormGroup<OptionFormProperties>({
			displayText: new FormControl<string | null | undefined>(undefined),
			isSelected: new FormControl<boolean | null | undefined>(undefined),
			optionValue: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum FieldType { text = 'text', password = 'password', option = 'option', checkbox = 'checkbox', radio = 'radio', image = 'image' }

	export interface FieldOperation {

		/** Field for which the clause is created.<br><br><b>Applicable containers</b>: bank, creditCard, investment, insurance, loan<br><b>Applicable Values</b>:<ul><li>amount</li><li>description</li></ul><b>Applicable Values</b><br> */
		field?: FieldOperationField | null;

		/** Operation for which the clause is created.<br><br><b>Applicable containers</b>: bank, creditCard, investment, insurance, loan<br><b>Applicable values (depends on the value of field)</b>:<ul><li>field is <b>description</b> -> operation can be<ol><li>stringEquals</li><li>stringContains</li></ol></li><li>field is <b>amount</b> -> operation can be<ol><li>numberEquals</li><li>numberLessThan</li><li>numberLessThanEquals</li><li>numberGreaterThan</li><li>numberGreaterThanEquals</li></ol></li></ul><b>Applicable Values</b><br> */
		operation?: FieldOperationOperation | null;

		/** The value would be the amount value in case of amount based rule clause or the string value in case of description based rule clause.<br><br><b>Applicable containers</b>: bank, creditCard, investment, insurance, loan<br><b>Applicable Values</b>:<ul><li>field is <b>description</b> -> value should be <b>min of 3 and max of 50 characters</b></li><li>field is <b>amount</b> -> value should be <b> min value of 0 and a max value of 99999999999.99</b></li></ul> */
		value?: string | null;
	}
	export interface FieldOperationFormProperties {

		/** Field for which the clause is created.<br><br><b>Applicable containers</b>: bank, creditCard, investment, insurance, loan<br><b>Applicable Values</b>:<ul><li>amount</li><li>description</li></ul><b>Applicable Values</b><br> */
		field: FormControl<FieldOperationField | null | undefined>,

		/** Operation for which the clause is created.<br><br><b>Applicable containers</b>: bank, creditCard, investment, insurance, loan<br><b>Applicable values (depends on the value of field)</b>:<ul><li>field is <b>description</b> -> operation can be<ol><li>stringEquals</li><li>stringContains</li></ol></li><li>field is <b>amount</b> -> operation can be<ol><li>numberEquals</li><li>numberLessThan</li><li>numberLessThanEquals</li><li>numberGreaterThan</li><li>numberGreaterThanEquals</li></ol></li></ul><b>Applicable Values</b><br> */
		operation: FormControl<FieldOperationOperation | null | undefined>,

		/** The value would be the amount value in case of amount based rule clause or the string value in case of description based rule clause.<br><br><b>Applicable containers</b>: bank, creditCard, investment, insurance, loan<br><b>Applicable Values</b>:<ul><li>field is <b>description</b> -> value should be <b>min of 3 and max of 50 characters</b></li><li>field is <b>amount</b> -> value should be <b> min value of 0 and a max value of 99999999999.99</b></li></ul> */
		value: FormControl<string | null | undefined>,
	}
	export function CreateFieldOperationFormGroup() {
		return new FormGroup<FieldOperationFormProperties>({
			field: new FormControl<FieldOperationField | null | undefined>(undefined),
			operation: new FormControl<FieldOperationOperation | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum FieldOperationField { amount = 'amount', description = 'description' }

	export enum FieldOperationOperation { numberEquals = 'numberEquals', numberLessThan = 'numberLessThan', numberLessThanEquals = 'numberLessThanEquals', numberGreaterThan = 'numberGreaterThan', numberGreaterThanEquals = 'numberGreaterThanEquals', stringEquals = 'stringEquals', stringContains = 'stringContains' }

	export interface Holding {

		/**
		 * Unique identifier of the account to which the security is linked.<br><br><b>Applicable containers</b>: investment, insurance<br>
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		accountId?: string | null;
		accruedIncome?: Money;
		accruedInterest?: Money;

		/** Asset classification applied to the holding. <br><br><b>Applicable containers</b>: investment<br> */
		assetClassification?: Array<AssetClassification>;

		/**
		 * The quantity of tradeable units in a contract.<br><b>Note</b>: The contract quantity field is only applicable to commodity and currency.<br><br><b>Applicable containers</b>: investment<br>
		 * Type: double
		 */
		contractQuantity?: number | null;
		costBasis?: Money;

		/**
		 * The stated interest rate for a bond.<br><br><b>Applicable containers</b>: investment<br>
		 * Type: double
		 */
		couponRate?: number | null;

		/** The date on which the holding is created in the Yodlee system.<br><br><b>Applicable containers</b>: investment, insurance<br> */
		createdDate?: string | null;

		/** The CUSIP (Committee on Uniform Securities Identification Procedures) identifies most the financial instruments in the United States and Canada.<br><br><b>Applicable containers</b>: investment<br> */
		cusipNumber?: string | null;

		/** The description (name) for the holding (E.g., Cisco Systems)<br>For insurance container, the field is only applicable for insurance annuity and variable life insurance types. <br><br><b>Applicable containers</b>: investment, insurance<br> */
		description?: string | null;

		/** The enrichedDescription is the security description of the normalized holding<br><br><b>Applicable containers</b>: investment, insurance<br> */
		enrichedDescription?: string | null;

		/**
		 * The quantity of the employee stock options that are already exercised or bought by the employee.<br><b>Note</b>: Once the employee stock options is exercised, they are either converted to cash value or equity positions depending on the FI. The exercised quantity field is only applicable to employee stock options.<br><br><b>Applicable containers</b>: investment<br>
		 * Type: double
		 */
		exercisedQuantity?: number | null;

		/** The date on which an option, right or warrant expires.<br><b>Note</b>: The expiration date field is only applicable to options and employee stock options.<br><br><b>Applicable containers</b>: investment<br> */
		expirationDate?: string | null;

		/** The date on which equity awards like ESOP, RSU, etc., are issued or granted.<br><b>Note</b>: The grant date field is only applicable to employee stock options, restricted stock units/awards, performance units, etc.<br><br><b>Applicable containers</b>: investment<br> */
		grantDate?: string | null;

		/** Type of holding<br><br><b>Applicable containers</b>: investment, insurance<br> */
		holdingType?: DataExtractsHoldingHoldingType | null;

		/**
		 * Unique identifier for the security added in the system. This is the primary key of the holding resource.<br><br><b>Applicable containers</b>: investment, insurance<br>
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		id?: string | null;

		/**
		 * The interest rate on a CD.<br><b>Note</b>: The interest rate field is only applicable to CD.<br><br><b>Applicable containers</b>: investment<br>
		 * Type: double
		 */
		interestRate?: number | null;

		/** Indicates that the holding is a short trading.<br><br><b>Applicable containers</b>: investment<br> */
		isShort?: boolean | null;

		/** The ISIN (International Securities Identification Number) is used worldwide to identify specific securities. It is equivalent to CUSIP for international markets.<br><br><b>Note</b>: The ISIN field is only applicable to the trade related transactions<br><br><b>Applicable containers</b>: investment<br> */
		isin?: string | null;

		/** The date when the information was last updated in the system.<br><br><b>Applicable containers</b>: investment, insurance<br> */
		lastUpdated?: string | null;

		/** Indicates the security match status id of the investment option identified during security normalization.<br><br><b>Applicable containers</b>: investment<br> */
		matchStatus?: string | null;

		/** The stated maturity date of a bond or CD.<br><br><b>Applicable containers</b>: investment<br> */
		maturityDate?: string | null;

		/** The type of the option position (i.e., put or call).<br><b>Note</b>: The option type field is only applicable to options.<br><br><b>Applicable containers</b>: investment<br><b>Applicable Values</b><br> */
		optionType?: DataExtractsHoldingOptionType | null;
		price?: Money;

		/**
		 * Unique identifier for the user's association with the provider.<br><br><b>Applicable containers</b>: investment, insurance<br>
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		providerAccountId?: string | null;

		/**
		 * The quantity held for the holding.<br><b>Note</b>: Only for bonds the quantity field indicates the normalized quantity and not the quantity aggregated from the site. The quantity field is only applicable to restricted stock units/awards, performance units, currency, and commodity.<br>For insurance container, the field is only applicable for insurance annuity and variable life insurance types.<br><br><b>Applicable containers</b>: investment, insurance<br>
		 * Type: double
		 */
		quantity?: number | null;

		/** Indicates the security style of holding identified through the security service.<br><br><b>Applicable containers</b>: investment, insurance<br> */
		securityStyle?: string | null;

		/** Indicates the security type of holding identified through the security service.<br><br><b>Applicable containers</b>: investment, insurance<br> */
		securityType?: string | null;

		/** The SEDOL (Stock Exchange Daily Official List) is a set of security identifiers used in the United Kingdom and Ireland for clearing purposes.<br><b>Note</b>: The SEDOL field is only applicable to the trade related transactions<br><br><b>Applicable containers</b>: investment<br> */
		sedol?: string | null;
		spread?: Money;
		strikePrice?: Money;

		/** The symbol of the security.<br><br><b>Applicable containers</b>: investment<br> */
		symbol?: string | null;

		/** The fixed duration for which the bond or CD is issued.<br><b>Note</b>: The term field is only applicable to CD.<br><br><b>Applicable containers</b>: investment<br> */
		term?: string | null;

		/**
		 * Indicates the number of unvested quantity or units.<br><b>Note</b>: The unvested quantity field is only applicable to employee stock options, restricted stock units/awards, performance units, etc.<br><br><b>Applicable containers</b>: investment<br>
		 * Type: double
		 */
		unvestedQuantity?: number | null;
		unvestedValue?: Money;
		value?: Money;

		/**
		 * The quantity of units or shares that are already vested on a vest date.<br><b>Note</b>: The vested quantity field is only applicable to employee stock options, restricted stock units/awards, performance units, etc.<br><br><b>Applicable containers</b>: investment<br>
		 * Type: double
		 */
		vestedQuantity?: number | null;

		/**
		 * The number of vested shares that can be exercised by the employee. It is usually equal to the vested quantity.<br><b>Note</b>: The vested shares exercisable field is only applicable to employee stock options, restricted stock units/awards, performance units, etc.<br><br><b>Applicable containers</b>: investment<br>
		 * Type: double
		 */
		vestedSharesExercisable?: number | null;
		vestedValue?: Money;

		/** The date on which a RSU, RSA, or an employee stock options become vested.<br><b>Note</b>: The vesting date field is only applicable to employee stock options, restricted stock units/awards, performance units, etc.<br><br><b>Applicable containers</b>: investment<br> */
		vestingDate?: string | null;
	}
	export interface HoldingFormProperties {

		/**
		 * Unique identifier of the account to which the security is linked.<br><br><b>Applicable containers</b>: investment, insurance<br>
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		accountId: FormControl<string | null | undefined>,

		/**
		 * The quantity of tradeable units in a contract.<br><b>Note</b>: The contract quantity field is only applicable to commodity and currency.<br><br><b>Applicable containers</b>: investment<br>
		 * Type: double
		 */
		contractQuantity: FormControl<number | null | undefined>,

		/**
		 * The stated interest rate for a bond.<br><br><b>Applicable containers</b>: investment<br>
		 * Type: double
		 */
		couponRate: FormControl<number | null | undefined>,

		/** The date on which the holding is created in the Yodlee system.<br><br><b>Applicable containers</b>: investment, insurance<br> */
		createdDate: FormControl<string | null | undefined>,

		/** The CUSIP (Committee on Uniform Securities Identification Procedures) identifies most the financial instruments in the United States and Canada.<br><br><b>Applicable containers</b>: investment<br> */
		cusipNumber: FormControl<string | null | undefined>,

		/** The description (name) for the holding (E.g., Cisco Systems)<br>For insurance container, the field is only applicable for insurance annuity and variable life insurance types. <br><br><b>Applicable containers</b>: investment, insurance<br> */
		description: FormControl<string | null | undefined>,

		/** The enrichedDescription is the security description of the normalized holding<br><br><b>Applicable containers</b>: investment, insurance<br> */
		enrichedDescription: FormControl<string | null | undefined>,

		/**
		 * The quantity of the employee stock options that are already exercised or bought by the employee.<br><b>Note</b>: Once the employee stock options is exercised, they are either converted to cash value or equity positions depending on the FI. The exercised quantity field is only applicable to employee stock options.<br><br><b>Applicable containers</b>: investment<br>
		 * Type: double
		 */
		exercisedQuantity: FormControl<number | null | undefined>,

		/** The date on which an option, right or warrant expires.<br><b>Note</b>: The expiration date field is only applicable to options and employee stock options.<br><br><b>Applicable containers</b>: investment<br> */
		expirationDate: FormControl<string | null | undefined>,

		/** The date on which equity awards like ESOP, RSU, etc., are issued or granted.<br><b>Note</b>: The grant date field is only applicable to employee stock options, restricted stock units/awards, performance units, etc.<br><br><b>Applicable containers</b>: investment<br> */
		grantDate: FormControl<string | null | undefined>,

		/** Type of holding<br><br><b>Applicable containers</b>: investment, insurance<br> */
		holdingType: FormControl<DataExtractsHoldingHoldingType | null | undefined>,

		/**
		 * Unique identifier for the security added in the system. This is the primary key of the holding resource.<br><br><b>Applicable containers</b>: investment, insurance<br>
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * The interest rate on a CD.<br><b>Note</b>: The interest rate field is only applicable to CD.<br><br><b>Applicable containers</b>: investment<br>
		 * Type: double
		 */
		interestRate: FormControl<number | null | undefined>,

		/** Indicates that the holding is a short trading.<br><br><b>Applicable containers</b>: investment<br> */
		isShort: FormControl<boolean | null | undefined>,

		/** The ISIN (International Securities Identification Number) is used worldwide to identify specific securities. It is equivalent to CUSIP for international markets.<br><br><b>Note</b>: The ISIN field is only applicable to the trade related transactions<br><br><b>Applicable containers</b>: investment<br> */
		isin: FormControl<string | null | undefined>,

		/** The date when the information was last updated in the system.<br><br><b>Applicable containers</b>: investment, insurance<br> */
		lastUpdated: FormControl<string | null | undefined>,

		/** Indicates the security match status id of the investment option identified during security normalization.<br><br><b>Applicable containers</b>: investment<br> */
		matchStatus: FormControl<string | null | undefined>,

		/** The stated maturity date of a bond or CD.<br><br><b>Applicable containers</b>: investment<br> */
		maturityDate: FormControl<string | null | undefined>,

		/** The type of the option position (i.e., put or call).<br><b>Note</b>: The option type field is only applicable to options.<br><br><b>Applicable containers</b>: investment<br><b>Applicable Values</b><br> */
		optionType: FormControl<DataExtractsHoldingOptionType | null | undefined>,

		/**
		 * Unique identifier for the user's association with the provider.<br><br><b>Applicable containers</b>: investment, insurance<br>
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		providerAccountId: FormControl<string | null | undefined>,

		/**
		 * The quantity held for the holding.<br><b>Note</b>: Only for bonds the quantity field indicates the normalized quantity and not the quantity aggregated from the site. The quantity field is only applicable to restricted stock units/awards, performance units, currency, and commodity.<br>For insurance container, the field is only applicable for insurance annuity and variable life insurance types.<br><br><b>Applicable containers</b>: investment, insurance<br>
		 * Type: double
		 */
		quantity: FormControl<number | null | undefined>,

		/** Indicates the security style of holding identified through the security service.<br><br><b>Applicable containers</b>: investment, insurance<br> */
		securityStyle: FormControl<string | null | undefined>,

		/** Indicates the security type of holding identified through the security service.<br><br><b>Applicable containers</b>: investment, insurance<br> */
		securityType: FormControl<string | null | undefined>,

		/** The SEDOL (Stock Exchange Daily Official List) is a set of security identifiers used in the United Kingdom and Ireland for clearing purposes.<br><b>Note</b>: The SEDOL field is only applicable to the trade related transactions<br><br><b>Applicable containers</b>: investment<br> */
		sedol: FormControl<string | null | undefined>,

		/** The symbol of the security.<br><br><b>Applicable containers</b>: investment<br> */
		symbol: FormControl<string | null | undefined>,

		/** The fixed duration for which the bond or CD is issued.<br><b>Note</b>: The term field is only applicable to CD.<br><br><b>Applicable containers</b>: investment<br> */
		term: FormControl<string | null | undefined>,

		/**
		 * Indicates the number of unvested quantity or units.<br><b>Note</b>: The unvested quantity field is only applicable to employee stock options, restricted stock units/awards, performance units, etc.<br><br><b>Applicable containers</b>: investment<br>
		 * Type: double
		 */
		unvestedQuantity: FormControl<number | null | undefined>,

		/**
		 * The quantity of units or shares that are already vested on a vest date.<br><b>Note</b>: The vested quantity field is only applicable to employee stock options, restricted stock units/awards, performance units, etc.<br><br><b>Applicable containers</b>: investment<br>
		 * Type: double
		 */
		vestedQuantity: FormControl<number | null | undefined>,

		/**
		 * The number of vested shares that can be exercised by the employee. It is usually equal to the vested quantity.<br><b>Note</b>: The vested shares exercisable field is only applicable to employee stock options, restricted stock units/awards, performance units, etc.<br><br><b>Applicable containers</b>: investment<br>
		 * Type: double
		 */
		vestedSharesExercisable: FormControl<number | null | undefined>,

		/** The date on which a RSU, RSA, or an employee stock options become vested.<br><b>Note</b>: The vesting date field is only applicable to employee stock options, restricted stock units/awards, performance units, etc.<br><br><b>Applicable containers</b>: investment<br> */
		vestingDate: FormControl<string | null | undefined>,
	}
	export function CreateHoldingFormGroup() {
		return new FormGroup<HoldingFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
			contractQuantity: new FormControl<number | null | undefined>(undefined),
			couponRate: new FormControl<number | null | undefined>(undefined),
			createdDate: new FormControl<string | null | undefined>(undefined),
			cusipNumber: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			enrichedDescription: new FormControl<string | null | undefined>(undefined),
			exercisedQuantity: new FormControl<number | null | undefined>(undefined),
			expirationDate: new FormControl<string | null | undefined>(undefined),
			grantDate: new FormControl<string | null | undefined>(undefined),
			holdingType: new FormControl<DataExtractsHoldingHoldingType | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			interestRate: new FormControl<number | null | undefined>(undefined),
			isShort: new FormControl<boolean | null | undefined>(undefined),
			isin: new FormControl<string | null | undefined>(undefined),
			lastUpdated: new FormControl<string | null | undefined>(undefined),
			matchStatus: new FormControl<string | null | undefined>(undefined),
			maturityDate: new FormControl<string | null | undefined>(undefined),
			optionType: new FormControl<DataExtractsHoldingOptionType | null | undefined>(undefined),
			providerAccountId: new FormControl<string | null | undefined>(undefined),
			quantity: new FormControl<number | null | undefined>(undefined),
			securityStyle: new FormControl<string | null | undefined>(undefined),
			securityType: new FormControl<string | null | undefined>(undefined),
			sedol: new FormControl<string | null | undefined>(undefined),
			symbol: new FormControl<string | null | undefined>(undefined),
			term: new FormControl<string | null | undefined>(undefined),
			unvestedQuantity: new FormControl<number | null | undefined>(undefined),
			vestedQuantity: new FormControl<number | null | undefined>(undefined),
			vestedSharesExercisable: new FormControl<number | null | undefined>(undefined),
			vestingDate: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface HoldingAssetClassificationListResponse {
		assetClassificationList?: Array<AssetClassificationList>;
	}
	export interface HoldingAssetClassificationListResponseFormProperties {
	}
	export function CreateHoldingAssetClassificationListResponseFormGroup() {
		return new FormGroup<HoldingAssetClassificationListResponseFormProperties>({
		});

	}

	export interface HoldingResponse {
		holding?: Array<Holding>;
	}
	export interface HoldingResponseFormProperties {
	}
	export function CreateHoldingResponseFormGroup() {
		return new FormGroup<HoldingResponseFormProperties>({
		});

	}

	export interface HoldingSecuritiesResponse {
		holding?: Array<SecurityHolding>;
	}
	export interface HoldingSecuritiesResponseFormProperties {
	}
	export function CreateHoldingSecuritiesResponseFormGroup() {
		return new FormGroup<HoldingSecuritiesResponseFormProperties>({
		});

	}

	export interface SecurityHolding {
		id?: string | null;
		security?: Security;
	}
	export interface SecurityHoldingFormProperties {
		id: FormControl<string | null | undefined>,
	}
	export function CreateSecurityHoldingFormGroup() {
		return new FormGroup<SecurityHoldingFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Security {

		/** The method in which interest is accrued or earned.<br><br><b>Applicable containers</b>: investment, insurance<br> */
		accrualMethod?: string | null;

		/**
		 * Agency factor of the security.<br><br><b>Applicable containers</b>: investment, insurance<br>
		 * Type: double
		 */
		agencyFactor?: number | null;

		/** Next call date of the security.<br><br><b>Applicable containers</b>: investment, insurance<br> */
		callDate?: string | null;

		/**
		 * Next call price of the security.<br><br><b>Applicable containers</b>: investment, insurance<br>
		 * Type: double
		 */
		callPrice?: number | null;

		/** cdsc fund flag of the security.<br><br><b>Applicable containers</b>: investment, insurance<br> */
		cdscFundFlag?: boolean | null;

		/** <b>true</b>:Closed for all investors , <b>false</b>: Open to all investors.<br><br><b>Applicable containers</b>: investment, insurance<br> */
		closedFlag?: boolean | null;

		/** A CUSIP is a nine-character alphanumeric code that identifies a North American financial security for the purposes of facilitating clearing and settlement of trades.<br><br><b>Applicable containers</b>: investment, insurance<br> */
		cusip?: string | null;

		/** The description (name) of the security. For example, Cisco Systems.<br><br><b>Applicable containers</b>: investment, insurance<br> */
		description?: string | null;

		/** Flag indicating federal taxable.<br><br><b>Applicable containers</b>: investment, insurance<br> */
		federalTaxable?: boolean | null;

		/** <b>1</b>- indicates Eligible,<b>0</b>- indicates firm is not eligible.<br><br><b>Applicable containers</b>: investment, insurance<br> */
		firmEligible?: string | null;

		/** First coupon date of security.<br><br><b>Applicable containers</b>: investment, insurance<br> */
		firstCouponDate?: string | null;

		/**
		 * Coupon Frequency.<br><br><b>Applicable containers</b>: investment, insurance<br>
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		frequency?: number | null;

		/** Mutual Fund Family Name.<br><br><b>Applicable containers</b>: investment, insurance<br> */
		fundFamily?: string | null;

		/** GICS Sector is a categorization the S&P assigns to all publically traded companies. <br><br><b>Applicable containers</b>: investment, insurance<br> */
		gicsSector?: string | null;

		/**
		 * The unique identifier of the security.<br><br><b>Applicable containers</b>: investment, insurance<br>
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		id?: string | null;

		/** ISO 4217 currency code indicating income currency of the security.<br><br><b>Applicable containers</b>: investment, insurance<br> */
		incomeCurrency?: string | null;

		/**
		 * The rate of interest paid annually, expressed as a percentage of the bond's par or face value.<br><br><b>Applicable containers</b>: investment, insurance<br>
		 * Type: double
		 */
		interestRate?: number | null;

		/** Indicates whether the security is a dummy security.<br><br><b>Applicable containers</b>: investment, insurance<br> */
		isDummySecurity?: boolean | null;

		/** Flag indicating a dummy security.<br><br><b>Applicable containers</b>: investment, insurance<br> */
		isEnvestnetDummySecurity?: boolean | null;

		/** Indicates whether the security is a simulated security.<br><br><b>Applicable containers</b>: investment, insurance<br> */
		isSyntheticSecurity?: boolean | null;

		/** The International Securities Identification Number (ISIN) is used worldwide to identify specific securities. It is equivalent to CUSIP for international markets.<br><br><b>Applicable containers</b>: investment, insurance<br> */
		isin?: string | null;

		/** Issue date of the security.<br><br><b>Applicable containers</b>: investment, insurance<br> */
		issueDate?: string | null;

		/**
		 * Price units corresponding to the security style. This is used to derive actual price of the security from market value.<br><br><b>Applicable containers</b>: investment, insurance<br>
		 * Type: double
		 */
		issueTypeMultiplier?: number | null;

		/** Last coupon date of security.<br><br><b>Applicable containers</b>: investment, insurance<br> */
		lastCouponDate?: string | null;

		/** The last updated date of the security.<br><br><b>Applicable containers</b>: investment, insurance<br> */
		lastModifiedDate?: string | null;

		/** Maturity date of the security.<br><br><b>Applicable containers</b>: investment, insurance<br> */
		maturityDate?: string | null;

		/**
		 * Minimum purchase of security.<br><br><b>Applicable containers</b>: investment, insurance<br>
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		minimumPurchase?: number | null;

		/** Unique identifier for Moody rating on Envestnet platform.<br><br><b>Applicable containers</b>: investment, insurance<br> */
		moodyRating?: string | null;

		/** Unique identifier for S&P rating on Envestnet platform.<br><br><b>Applicable containers</b>: investment, insurance<br> */
		sAndPRating?: string | null;

		/** Identifier of the sector to which the security belongs to.<br><br><b>Applicable containers</b>: investment, insurance<br> */
		sector?: string | null;

		/** The Stock Exchange Daily Official List (SEDOL) is a set of security identifiers used in the United Kingdom and Ireland for clearing purposes.<br><b>Note</b>: The SEDOL field is only applicable to the trade related transactions.<br><br><b>Applicable containers</b>: investment, insurance<br> */
		sedol?: string | null;

		/** Share class of the security.<br><br><b>Applicable containers</b>: investment, insurance<br> */
		shareClass?: string | null;

		/** The state in which the security is taxed.<br><br><b>Applicable containers</b>: investment, insurance<br> */
		stateTaxable?: boolean | null;

		/** Securities exchange provide the securities information at the corresponding exchanges. <br><br><b>Applicable containers</b>: investment, insurance<br> */
		stockExchangeDetails?: Array<StockExchangeDetail>;

		/** Classification of the style for the security.<br><br><b>Applicable containers</b>: investment, insurance<br> */
		style?: string | null;

		/** GICS sector ID to which the security belongs to.<br><br><b>Applicable containers</b>: investment, insurance<br> */
		subSector?: string | null;

		/** ISO 4217 currency code indicating trading currency of the security.<br><br><b>Applicable containers</b>: investment, insurance<br> */
		tradeCurrencyCode?: string | null;

		/** Indicates the type of security like stocks, mutual fund, etc. <br><br><b>Applicable containers</b>: investment, insurance<br> */
		type?: string | null;
	}
	export interface SecurityFormProperties {

		/** The method in which interest is accrued or earned.<br><br><b>Applicable containers</b>: investment, insurance<br> */
		accrualMethod: FormControl<string | null | undefined>,

		/**
		 * Agency factor of the security.<br><br><b>Applicable containers</b>: investment, insurance<br>
		 * Type: double
		 */
		agencyFactor: FormControl<number | null | undefined>,

		/** Next call date of the security.<br><br><b>Applicable containers</b>: investment, insurance<br> */
		callDate: FormControl<string | null | undefined>,

		/**
		 * Next call price of the security.<br><br><b>Applicable containers</b>: investment, insurance<br>
		 * Type: double
		 */
		callPrice: FormControl<number | null | undefined>,

		/** cdsc fund flag of the security.<br><br><b>Applicable containers</b>: investment, insurance<br> */
		cdscFundFlag: FormControl<boolean | null | undefined>,

		/** <b>true</b>:Closed for all investors , <b>false</b>: Open to all investors.<br><br><b>Applicable containers</b>: investment, insurance<br> */
		closedFlag: FormControl<boolean | null | undefined>,

		/** A CUSIP is a nine-character alphanumeric code that identifies a North American financial security for the purposes of facilitating clearing and settlement of trades.<br><br><b>Applicable containers</b>: investment, insurance<br> */
		cusip: FormControl<string | null | undefined>,

		/** The description (name) of the security. For example, Cisco Systems.<br><br><b>Applicable containers</b>: investment, insurance<br> */
		description: FormControl<string | null | undefined>,

		/** Flag indicating federal taxable.<br><br><b>Applicable containers</b>: investment, insurance<br> */
		federalTaxable: FormControl<boolean | null | undefined>,

		/** <b>1</b>- indicates Eligible,<b>0</b>- indicates firm is not eligible.<br><br><b>Applicable containers</b>: investment, insurance<br> */
		firmEligible: FormControl<string | null | undefined>,

		/** First coupon date of security.<br><br><b>Applicable containers</b>: investment, insurance<br> */
		firstCouponDate: FormControl<string | null | undefined>,

		/**
		 * Coupon Frequency.<br><br><b>Applicable containers</b>: investment, insurance<br>
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		frequency: FormControl<number | null | undefined>,

		/** Mutual Fund Family Name.<br><br><b>Applicable containers</b>: investment, insurance<br> */
		fundFamily: FormControl<string | null | undefined>,

		/** GICS Sector is a categorization the S&P assigns to all publically traded companies. <br><br><b>Applicable containers</b>: investment, insurance<br> */
		gicsSector: FormControl<string | null | undefined>,

		/**
		 * The unique identifier of the security.<br><br><b>Applicable containers</b>: investment, insurance<br>
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		id: FormControl<string | null | undefined>,

		/** ISO 4217 currency code indicating income currency of the security.<br><br><b>Applicable containers</b>: investment, insurance<br> */
		incomeCurrency: FormControl<string | null | undefined>,

		/**
		 * The rate of interest paid annually, expressed as a percentage of the bond's par or face value.<br><br><b>Applicable containers</b>: investment, insurance<br>
		 * Type: double
		 */
		interestRate: FormControl<number | null | undefined>,

		/** Indicates whether the security is a dummy security.<br><br><b>Applicable containers</b>: investment, insurance<br> */
		isDummySecurity: FormControl<boolean | null | undefined>,

		/** Flag indicating a dummy security.<br><br><b>Applicable containers</b>: investment, insurance<br> */
		isEnvestnetDummySecurity: FormControl<boolean | null | undefined>,

		/** Indicates whether the security is a simulated security.<br><br><b>Applicable containers</b>: investment, insurance<br> */
		isSyntheticSecurity: FormControl<boolean | null | undefined>,

		/** The International Securities Identification Number (ISIN) is used worldwide to identify specific securities. It is equivalent to CUSIP for international markets.<br><br><b>Applicable containers</b>: investment, insurance<br> */
		isin: FormControl<string | null | undefined>,

		/** Issue date of the security.<br><br><b>Applicable containers</b>: investment, insurance<br> */
		issueDate: FormControl<string | null | undefined>,

		/**
		 * Price units corresponding to the security style. This is used to derive actual price of the security from market value.<br><br><b>Applicable containers</b>: investment, insurance<br>
		 * Type: double
		 */
		issueTypeMultiplier: FormControl<number | null | undefined>,

		/** Last coupon date of security.<br><br><b>Applicable containers</b>: investment, insurance<br> */
		lastCouponDate: FormControl<string | null | undefined>,

		/** The last updated date of the security.<br><br><b>Applicable containers</b>: investment, insurance<br> */
		lastModifiedDate: FormControl<string | null | undefined>,

		/** Maturity date of the security.<br><br><b>Applicable containers</b>: investment, insurance<br> */
		maturityDate: FormControl<string | null | undefined>,

		/**
		 * Minimum purchase of security.<br><br><b>Applicable containers</b>: investment, insurance<br>
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		minimumPurchase: FormControl<number | null | undefined>,

		/** Unique identifier for Moody rating on Envestnet platform.<br><br><b>Applicable containers</b>: investment, insurance<br> */
		moodyRating: FormControl<string | null | undefined>,

		/** Unique identifier for S&P rating on Envestnet platform.<br><br><b>Applicable containers</b>: investment, insurance<br> */
		sAndPRating: FormControl<string | null | undefined>,

		/** Identifier of the sector to which the security belongs to.<br><br><b>Applicable containers</b>: investment, insurance<br> */
		sector: FormControl<string | null | undefined>,

		/** The Stock Exchange Daily Official List (SEDOL) is a set of security identifiers used in the United Kingdom and Ireland for clearing purposes.<br><b>Note</b>: The SEDOL field is only applicable to the trade related transactions.<br><br><b>Applicable containers</b>: investment, insurance<br> */
		sedol: FormControl<string | null | undefined>,

		/** Share class of the security.<br><br><b>Applicable containers</b>: investment, insurance<br> */
		shareClass: FormControl<string | null | undefined>,

		/** The state in which the security is taxed.<br><br><b>Applicable containers</b>: investment, insurance<br> */
		stateTaxable: FormControl<boolean | null | undefined>,

		/** Classification of the style for the security.<br><br><b>Applicable containers</b>: investment, insurance<br> */
		style: FormControl<string | null | undefined>,

		/** GICS sector ID to which the security belongs to.<br><br><b>Applicable containers</b>: investment, insurance<br> */
		subSector: FormControl<string | null | undefined>,

		/** ISO 4217 currency code indicating trading currency of the security.<br><br><b>Applicable containers</b>: investment, insurance<br> */
		tradeCurrencyCode: FormControl<string | null | undefined>,

		/** Indicates the type of security like stocks, mutual fund, etc. <br><br><b>Applicable containers</b>: investment, insurance<br> */
		type: FormControl<string | null | undefined>,
	}
	export function CreateSecurityFormGroup() {
		return new FormGroup<SecurityFormProperties>({
			accrualMethod: new FormControl<string | null | undefined>(undefined),
			agencyFactor: new FormControl<number | null | undefined>(undefined),
			callDate: new FormControl<string | null | undefined>(undefined),
			callPrice: new FormControl<number | null | undefined>(undefined),
			cdscFundFlag: new FormControl<boolean | null | undefined>(undefined),
			closedFlag: new FormControl<boolean | null | undefined>(undefined),
			cusip: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			federalTaxable: new FormControl<boolean | null | undefined>(undefined),
			firmEligible: new FormControl<string | null | undefined>(undefined),
			firstCouponDate: new FormControl<string | null | undefined>(undefined),
			frequency: new FormControl<number | null | undefined>(undefined),
			fundFamily: new FormControl<string | null | undefined>(undefined),
			gicsSector: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			incomeCurrency: new FormControl<string | null | undefined>(undefined),
			interestRate: new FormControl<number | null | undefined>(undefined),
			isDummySecurity: new FormControl<boolean | null | undefined>(undefined),
			isEnvestnetDummySecurity: new FormControl<boolean | null | undefined>(undefined),
			isSyntheticSecurity: new FormControl<boolean | null | undefined>(undefined),
			isin: new FormControl<string | null | undefined>(undefined),
			issueDate: new FormControl<string | null | undefined>(undefined),
			issueTypeMultiplier: new FormControl<number | null | undefined>(undefined),
			lastCouponDate: new FormControl<string | null | undefined>(undefined),
			lastModifiedDate: new FormControl<string | null | undefined>(undefined),
			maturityDate: new FormControl<string | null | undefined>(undefined),
			minimumPurchase: new FormControl<number | null | undefined>(undefined),
			moodyRating: new FormControl<string | null | undefined>(undefined),
			sAndPRating: new FormControl<string | null | undefined>(undefined),
			sector: new FormControl<string | null | undefined>(undefined),
			sedol: new FormControl<string | null | undefined>(undefined),
			shareClass: new FormControl<string | null | undefined>(undefined),
			stateTaxable: new FormControl<boolean | null | undefined>(undefined),
			style: new FormControl<string | null | undefined>(undefined),
			subSector: new FormControl<string | null | undefined>(undefined),
			tradeCurrencyCode: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StockExchangeDetail {

		/** Country codes are geocodes developed to represent countries and dependent areas.<br><br><b>Applicable containers</b>: investment, insurance<br> */
		countryCode?: string | null;

		/** ISO codes of currency.<br><br><b>Applicable containers</b>: investment, insurance<br> */
		currencyCode?: string | null;

		/** An Exchange code is a four-character code used to identify stock markets and other trading exchanges within global trading.<br><br><b>Applicable containers</b>: investment, insurance<br> */
		exchangeCode?: string | null;

		/** Ticker symbol representing particular securities listed on an exchange.<br><br><b>Applicable containers</b>: investment, insurance<br> */
		symbol?: string | null;
	}
	export interface StockExchangeDetailFormProperties {

		/** Country codes are geocodes developed to represent countries and dependent areas.<br><br><b>Applicable containers</b>: investment, insurance<br> */
		countryCode: FormControl<string | null | undefined>,

		/** ISO codes of currency.<br><br><b>Applicable containers</b>: investment, insurance<br> */
		currencyCode: FormControl<string | null | undefined>,

		/** An Exchange code is a four-character code used to identify stock markets and other trading exchanges within global trading.<br><br><b>Applicable containers</b>: investment, insurance<br> */
		exchangeCode: FormControl<string | null | undefined>,

		/** Ticker symbol representing particular securities listed on an exchange.<br><br><b>Applicable containers</b>: investment, insurance<br> */
		symbol: FormControl<string | null | undefined>,
	}
	export function CreateStockExchangeDetailFormGroup() {
		return new FormGroup<StockExchangeDetailFormProperties>({
			countryCode: new FormControl<string | null | undefined>(undefined),
			currencyCode: new FormControl<string | null | undefined>(undefined),
			exchangeCode: new FormControl<string | null | undefined>(undefined),
			symbol: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface HoldingTypeListResponse {
		holdingType?: Array<DataExtractsHoldingHoldingType>;
	}
	export interface HoldingTypeListResponseFormProperties {
	}
	export function CreateHoldingTypeListResponseFormGroup() {
		return new FormGroup<HoldingTypeListResponseFormProperties>({
		});

	}

	export interface LoginForm {

		/** The forget password URL of the provider site.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts/{providerAccountId}</li><li>GET providers/{providerId}</li></ul> */
		forgetPasswordURL?: string | null;

		/** The type of the forms for which the user information is required.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts/{providerAccountId}</li><li>GET providers/{providerId}</li></ul><b>Applicable Values</b><br> */
		formType?: LoginFormFormType | null;

		/** The help that can be displayed to the customer in the login form.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts/{providerAccountId}</li><li>GET providers/{providerId}</li></ul> */
		help?: string | null;

		/**
		 * The identifier of the login form.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts/{providerAccountId}</li><li>GET providers/{providerId}</li></ul>
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		id?: string | null;

		/** The help that can be displayed to the customer in the login form.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts/{providerAccountId}</li><li>GET providers/{providerId}</li></ul> */
		loginHelp?: string | null;

		/** The text displayed in the provider site while requesting the user's MFA information. This field is applicable for MFA form types only. <br><br><b>Endpoints</b>:<ul><li>GET providerAccounts/{providerAccountId}</li></ul> */
		mfaInfoText?: string | null;

		/** The title for the MFA information demanded from the user.This is the title displayed in the provider site.This field is applicable for MFA form types only. <br><br><b>Endpoints</b>:<ul><li>GET providerAccounts/{providerAccountId}</li></ul> */
		mfaInfoTitle?: string | null;

		/**
		 * The amount of time before which the user is expected to provide MFA information. This field is applicable for MFA form types only. This would be an useful information that could be displayed to the users. <br><br><b>Endpoints</b>:<ul><li>GET providerAccounts/{providerAccountId}</li><li>GET providers/{providerId}</li></ul>
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		mfaTimeout?: string | null;

		/** This indicates one row in the form. The row will have one label. But it may have single or multiple fields.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts/{providerAccountId}</li><li>GET providers/{providerId}</li></ul> */
		row?: Array<Row>;
	}
	export interface LoginFormFormProperties {

		/** The forget password URL of the provider site.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts/{providerAccountId}</li><li>GET providers/{providerId}</li></ul> */
		forgetPasswordURL: FormControl<string | null | undefined>,

		/** The type of the forms for which the user information is required.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts/{providerAccountId}</li><li>GET providers/{providerId}</li></ul><b>Applicable Values</b><br> */
		formType: FormControl<LoginFormFormType | null | undefined>,

		/** The help that can be displayed to the customer in the login form.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts/{providerAccountId}</li><li>GET providers/{providerId}</li></ul> */
		help: FormControl<string | null | undefined>,

		/**
		 * The identifier of the login form.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts/{providerAccountId}</li><li>GET providers/{providerId}</li></ul>
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		id: FormControl<string | null | undefined>,

		/** The help that can be displayed to the customer in the login form.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts/{providerAccountId}</li><li>GET providers/{providerId}</li></ul> */
		loginHelp: FormControl<string | null | undefined>,

		/** The text displayed in the provider site while requesting the user's MFA information. This field is applicable for MFA form types only. <br><br><b>Endpoints</b>:<ul><li>GET providerAccounts/{providerAccountId}</li></ul> */
		mfaInfoText: FormControl<string | null | undefined>,

		/** The title for the MFA information demanded from the user.This is the title displayed in the provider site.This field is applicable for MFA form types only. <br><br><b>Endpoints</b>:<ul><li>GET providerAccounts/{providerAccountId}</li></ul> */
		mfaInfoTitle: FormControl<string | null | undefined>,

		/**
		 * The amount of time before which the user is expected to provide MFA information. This field is applicable for MFA form types only. This would be an useful information that could be displayed to the users. <br><br><b>Endpoints</b>:<ul><li>GET providerAccounts/{providerAccountId}</li><li>GET providers/{providerId}</li></ul>
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		mfaTimeout: FormControl<string | null | undefined>,
	}
	export function CreateLoginFormFormGroup() {
		return new FormGroup<LoginFormFormProperties>({
			forgetPasswordURL: new FormControl<string | null | undefined>(undefined),
			formType: new FormControl<LoginFormFormType | null | undefined>(undefined),
			help: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			loginHelp: new FormControl<string | null | undefined>(undefined),
			mfaInfoText: new FormControl<string | null | undefined>(undefined),
			mfaInfoTitle: new FormControl<string | null | undefined>(undefined),
			mfaTimeout: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum LoginFormFormType { login = 'login', questionAndAnswer = 'questionAndAnswer', token = 'token', image = 'image' }

	export interface Row {

		/** Details of fields that belong to the row.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts/{providerAccountId}</li><li>GET providers/{providerId}</li></ul> */
		field?: Array<Field>;

		/** Fields that belong to a particular choice are collected together using this field.<br><b>Recommendations</b>: All the field row choices label to be grouped and displayed as options to the customer. On choosing a particular choice field, we recommend displaying the fields relevant to them. First field choice could be selected by default.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts/{providerAccountId}</li><li>GET providers/{providerId}</li></ul> */
		fieldRowChoice?: string | null;

		/** Form denotes the set of the fields that are related. <br><br><b>Endpoints</b>:<ul><li>GET providerAccounts/{providerAccountId}</li><li>GET providers/{providerId}</li></ul> */
		form?: string | null;

		/** Unique identifier of the row.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts/{providerAccountId}</li><li>GET providers/{providerId}</li></ul> */
		id?: string | null;

		/** The label text displayed for a row in the form.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts/{providerAccountId}</li><li>GET providers/{providerId}</li></ul> */
		label?: string | null;
	}
	export interface RowFormProperties {

		/** Fields that belong to a particular choice are collected together using this field.<br><b>Recommendations</b>: All the field row choices label to be grouped and displayed as options to the customer. On choosing a particular choice field, we recommend displaying the fields relevant to them. First field choice could be selected by default.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts/{providerAccountId}</li><li>GET providers/{providerId}</li></ul> */
		fieldRowChoice: FormControl<string | null | undefined>,

		/** Form denotes the set of the fields that are related. <br><br><b>Endpoints</b>:<ul><li>GET providerAccounts/{providerAccountId}</li><li>GET providers/{providerId}</li></ul> */
		form: FormControl<string | null | undefined>,

		/** Unique identifier of the row.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts/{providerAccountId}</li><li>GET providers/{providerId}</li></ul> */
		id: FormControl<string | null | undefined>,

		/** The label text displayed for a row in the form.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts/{providerAccountId}</li><li>GET providers/{providerId}</li></ul> */
		label: FormControl<string | null | undefined>,
	}
	export function CreateRowFormGroup() {
		return new FormGroup<RowFormProperties>({
			fieldRowChoice: new FormControl<string | null | undefined>(undefined),
			form: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			label: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Profile {

		/** Address available in the profile page of the account.<br><br><b>Account Type</b>: Aggregated<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li></ul> */
		address?: Array<AccountAddress>;

		/** Email Id available in the profile page of the account.<br><br><b>Account Type</b>: Aggregated<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li></ul> */
		email?: Array<Email>;

		/** Gender of the provider account holder.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Endpoints</b>:<ul><li>GET providerAccounts/profile</li></ul> */
		gender?: string | null;

		/** Identifiers available in the profile page of the account.<br><br><b>Account Type</b>: Aggregated<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li></ul> */
		identifier?: Array<Identifier>;
		name?: Name;

		/** Phone number available in the profile page of the account.<br><br><b>Account Type</b>: Aggregated<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li></ul> */
		phoneNumber?: Array<PhoneNumber>;
	}
	export interface ProfileFormProperties {

		/** Gender of the provider account holder.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Endpoints</b>:<ul><li>GET providerAccounts/profile</li></ul> */
		gender: FormControl<string | null | undefined>,
	}
	export function CreateProfileFormGroup() {
		return new FormGroup<ProfileFormProperties>({
			gender: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ProviderAccount {

		/** The source through which the providerAccount is added in the system.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts</li><li>POST providerAccounts</li><li>PUT providerAccounts/{providerAccountId}</li><li>GET providerAccounts/{providerAccountId}</li><li>GET dataExtracts/userData</li></ul><b>Applicable Values</b><br> */
		aggregationSource?: AccountAggregationSource | null;

		/**
		 * Consent Id generated through POST Consent.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts</li><li>POST providerAccounts</li><li>PUT providerAccounts/{providerAccountId}</li><li>GET providerAccounts/{providerAccountId}</li></ul>
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		consentId?: string | null;

		/** The date on when the provider account is created in the system.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts</li><li>POST providerAccounts</li><li>PUT providerAccounts/{providerAccountId}</li><li>GET providerAccounts/{providerAccountId}</li></ul> */
		createdDate?: string | null;

		/** Logical grouping of dataset attributes into datasets such as Basic Aggregation Data, Account Profile and Documents.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts</li><li>POST providerAccounts</li><li>PUT providerAccounts/{providerAccountId}</li><li>GET providerAccounts/{providerAccountId}</li><li>GET dataExtracts/userData</li></ul> */
		dataset?: Array<AccountDataset>;

		/**
		 * Unique identifier for the provider account resource. This is created during account addition.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts</li><li>POST providerAccounts</li><li>PUT providerAccounts/{providerAccountId}</li><li>GET providerAccounts/{providerAccountId}</li><li>GET dataExtracts/userData</li></ul>
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		id?: string | null;

		/** Indicates whether account is a manual or aggregated provider account.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts</li><li>POST providerAccounts</li><li>PUT providerAccounts/{providerAccountId}</li><li>GET providerAccounts/{providerAccountId}</li><li>GET dataExtracts/userData</li></ul> */
		isManual?: boolean | null;

		/** Indicate when the providerAccount is last updated successfully.<br><br><b>Account Type</b>: Aggregated<br><b>Endpoints</b>:<ul><li>GET dataExtracts/userData</li></ul> */
		lastUpdated?: string | null;

		/** Indicates the migration status of the provider account from screen-scraping provider to the Open Banking provider. <br><br><b>Endpoints</b>:<ul><li>GET providerAccounts</li><li>GET providerAccounts/{providerAccountId}</li><li>PUT providerAccounts/{providerAccountId}</li><li>GET dataExtracts/userData</li></ul> */
		oauthMigrationStatus?: AccountOauthMigrationStatus | null;
		preferences?: ProviderAccountPreferences;

		/**
		 * Unique identifier for the provider resource. This denotes the provider for which the provider account id is generated by the user.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts</li><li>POST providerAccounts</li><li>PUT providerAccounts/{providerAccountId}</li><li>GET providerAccounts/{providerAccountId}</li><li>GET dataExtracts/userData</li></ul>
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		providerId?: string | null;

		/** Unique id generated to indicate the request.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts</li><li>POST providerAccounts</li><li>PUT providerAccounts/{providerAccountId}</li><li>GET providerAccounts/{providerAccountId}</li></ul> */
		requestId?: string | null;

		/** The status of last update attempted for the account. <br><br><b>Endpoints</b>:<ul><li>GET providerAccounts</li><li>POST providerAccounts</li><li>PUT providerAccounts/{providerAccountId}</li><li>GET providerAccounts/{providerAccountId}</li><li>GET dataExtracts/userData</li></ul><b>Applicable Values</b><br> */
		status?: DataExtractsProviderAccountStatus | null;
	}
	export interface ProviderAccountFormProperties {

		/** The source through which the providerAccount is added in the system.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts</li><li>POST providerAccounts</li><li>PUT providerAccounts/{providerAccountId}</li><li>GET providerAccounts/{providerAccountId}</li><li>GET dataExtracts/userData</li></ul><b>Applicable Values</b><br> */
		aggregationSource: FormControl<AccountAggregationSource | null | undefined>,

		/**
		 * Consent Id generated through POST Consent.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts</li><li>POST providerAccounts</li><li>PUT providerAccounts/{providerAccountId}</li><li>GET providerAccounts/{providerAccountId}</li></ul>
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		consentId: FormControl<string | null | undefined>,

		/** The date on when the provider account is created in the system.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts</li><li>POST providerAccounts</li><li>PUT providerAccounts/{providerAccountId}</li><li>GET providerAccounts/{providerAccountId}</li></ul> */
		createdDate: FormControl<string | null | undefined>,

		/**
		 * Unique identifier for the provider account resource. This is created during account addition.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts</li><li>POST providerAccounts</li><li>PUT providerAccounts/{providerAccountId}</li><li>GET providerAccounts/{providerAccountId}</li><li>GET dataExtracts/userData</li></ul>
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		id: FormControl<string | null | undefined>,

		/** Indicates whether account is a manual or aggregated provider account.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts</li><li>POST providerAccounts</li><li>PUT providerAccounts/{providerAccountId}</li><li>GET providerAccounts/{providerAccountId}</li><li>GET dataExtracts/userData</li></ul> */
		isManual: FormControl<boolean | null | undefined>,

		/** Indicate when the providerAccount is last updated successfully.<br><br><b>Account Type</b>: Aggregated<br><b>Endpoints</b>:<ul><li>GET dataExtracts/userData</li></ul> */
		lastUpdated: FormControl<string | null | undefined>,

		/** Indicates the migration status of the provider account from screen-scraping provider to the Open Banking provider. <br><br><b>Endpoints</b>:<ul><li>GET providerAccounts</li><li>GET providerAccounts/{providerAccountId}</li><li>PUT providerAccounts/{providerAccountId}</li><li>GET dataExtracts/userData</li></ul> */
		oauthMigrationStatus: FormControl<AccountOauthMigrationStatus | null | undefined>,

		/**
		 * Unique identifier for the provider resource. This denotes the provider for which the provider account id is generated by the user.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts</li><li>POST providerAccounts</li><li>PUT providerAccounts/{providerAccountId}</li><li>GET providerAccounts/{providerAccountId}</li><li>GET dataExtracts/userData</li></ul>
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		providerId: FormControl<string | null | undefined>,

		/** Unique id generated to indicate the request.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts</li><li>POST providerAccounts</li><li>PUT providerAccounts/{providerAccountId}</li><li>GET providerAccounts/{providerAccountId}</li></ul> */
		requestId: FormControl<string | null | undefined>,

		/** The status of last update attempted for the account. <br><br><b>Endpoints</b>:<ul><li>GET providerAccounts</li><li>POST providerAccounts</li><li>PUT providerAccounts/{providerAccountId}</li><li>GET providerAccounts/{providerAccountId}</li><li>GET dataExtracts/userData</li></ul><b>Applicable Values</b><br> */
		status: FormControl<DataExtractsProviderAccountStatus | null | undefined>,
	}
	export function CreateProviderAccountFormGroup() {
		return new FormGroup<ProviderAccountFormProperties>({
			aggregationSource: new FormControl<AccountAggregationSource | null | undefined>(undefined),
			consentId: new FormControl<string | null | undefined>(undefined),
			createdDate: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			isManual: new FormControl<boolean | null | undefined>(undefined),
			lastUpdated: new FormControl<string | null | undefined>(undefined),
			oauthMigrationStatus: new FormControl<AccountOauthMigrationStatus | null | undefined>(undefined),
			providerId: new FormControl<string | null | undefined>(undefined),
			requestId: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<DataExtractsProviderAccountStatus | null | undefined>(undefined),
		});

	}

	export interface ProviderAccountPreferences {

		/** Indicates if auto-refreshes have to be triggered for the provider account.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts?include=preferences</li><li>GET providerAccounts/{providerAccountId}?include=preferences</li></ul> */
		isAutoRefreshEnabled?: boolean | null;

		/** Indicates if the updates to the provider account should be part of the data extracts event notification or the data extract data retrieval service.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts?include=preferences</li><li>GET providerAccounts/{providerAccountId}?include=preferences</li></ul> */
		isDataExtractsEnabled?: boolean | null;

		/**
		 * LinkedproviderAccountd is a providerAccountId linked by the user to the primary provider account. <br>LinkedProviderAccountId and the providerAccountId belongs to the same institution.<br><br><b>Endpoints</b>:<ul><li>POST Provider Account</li><li>PUT Provider Account</li><li>GET Provider Accounts</li></ul>
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		linkedProviderAccountId?: string | null;
	}
	export interface ProviderAccountPreferencesFormProperties {

		/** Indicates if auto-refreshes have to be triggered for the provider account.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts?include=preferences</li><li>GET providerAccounts/{providerAccountId}?include=preferences</li></ul> */
		isAutoRefreshEnabled: FormControl<boolean | null | undefined>,

		/** Indicates if the updates to the provider account should be part of the data extracts event notification or the data extract data retrieval service.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts?include=preferences</li><li>GET providerAccounts/{providerAccountId}?include=preferences</li></ul> */
		isDataExtractsEnabled: FormControl<boolean | null | undefined>,

		/**
		 * LinkedproviderAccountd is a providerAccountId linked by the user to the primary provider account. <br>LinkedProviderAccountId and the providerAccountId belongs to the same institution.<br><br><b>Endpoints</b>:<ul><li>POST Provider Account</li><li>PUT Provider Account</li><li>GET Provider Accounts</li></ul>
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		linkedProviderAccountId: FormControl<string | null | undefined>,
	}
	export function CreateProviderAccountPreferencesFormGroup() {
		return new FormGroup<ProviderAccountPreferencesFormProperties>({
			isAutoRefreshEnabled: new FormControl<boolean | null | undefined>(undefined),
			isDataExtractsEnabled: new FormControl<boolean | null | undefined>(undefined),
			linkedProviderAccountId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ProviderAccountDetail {

		/** The source through which the providerAccount is added in the system.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts</li><li>POST providerAccounts</li><li>PUT providerAccounts/{providerAccountId}</li><li>GET providerAccounts/{providerAccountId}</li><li>GET dataExtracts/userData</li></ul><b>Applicable Values</b><br> */
		aggregationSource?: AccountAggregationSource | null;

		/**
		 * Consent Id generated through POST Consent.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts</li><li>POST providerAccounts</li><li>PUT providerAccounts/{providerAccountId}</li><li>GET providerAccounts/{providerAccountId}</li></ul>
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		consentId: string;

		/** The date on when the provider account is created in the system.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts</li><li>POST providerAccounts</li><li>PUT providerAccounts/{providerAccountId}</li><li>GET providerAccounts/{providerAccountId}</li></ul> */
		createdDate?: string | null;

		/** Logical grouping of dataset attributes into datasets such as Basic Aggregation Data, Account Profile and Documents.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts</li><li>POST providerAccounts</li><li>PUT providerAccounts/{providerAccountId}</li><li>GET providerAccounts/{providerAccountId}</li><li>GET dataExtracts/userData</li></ul> */
		dataset?: Array<AccountDataset>;

		/**
		 * Unique identifier for the provider account resource. This is created during account addition.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts</li><li>POST providerAccounts</li><li>PUT providerAccounts/{providerAccountId}</li><li>GET providerAccounts/{providerAccountId}</li><li>GET dataExtracts/userData</li></ul>
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		id?: string | null;

		/** Indicates whether account is a manual or aggregated provider account.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts</li><li>POST providerAccounts</li><li>PUT providerAccounts/{providerAccountId}</li><li>GET providerAccounts/{providerAccountId}</li><li>GET dataExtracts/userData</li></ul> */
		isManual?: boolean | null;

		/** Indicate when the providerAccount is last updated successfully.<br><br><b>Account Type</b>: Aggregated<br><b>Endpoints</b>:<ul><li>GET dataExtracts/userData</li></ul> */
		lastUpdated?: string | null;

		/** This entity gets returned in the response for only MFA based provider accounts during the add/update account polling process. This indicates that the MFA information is expected from the user to complete the process. This represents the structure of MFA form that is displayed to the user in the provider site.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts</li><li>POST providerAccounts</li><li>PUT providerAccounts/{providerAccountId}</li><li>GET providerAccounts/{providerAccountId}</li></ul> */
		loginForm?: Array<LoginForm>;

		/** Indicates the migration status of the provider account from screen-scraping provider to the Open Banking provider. <br><br><b>Endpoints</b>:<ul><li>GET providerAccounts</li><li>GET providerAccounts/{providerAccountId}</li><li>PUT providerAccounts/{providerAccountId}</li><li>GET dataExtracts/userData</li></ul> */
		oauthMigrationStatus?: AccountOauthMigrationStatus | null;
		preferences?: ProviderAccountPreferences;

		/**
		 * Unique identifier for the provider resource. This denotes the provider for which the provider account id is generated by the user.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts</li><li>POST providerAccounts</li><li>PUT providerAccounts/{providerAccountId}</li><li>GET providerAccounts/{providerAccountId}</li><li>GET dataExtracts/userData</li></ul>
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		providerId?: string | null;

		/** Unique id generated to indicate the request.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts</li><li>POST providerAccounts</li><li>PUT providerAccounts/{providerAccountId}</li><li>GET providerAccounts/{providerAccountId}</li></ul> */
		requestId?: string | null;

		/** The status of last update attempted for the account. <br><br><b>Endpoints</b>:<ul><li>GET providerAccounts</li><li>POST providerAccounts</li><li>PUT providerAccounts/{providerAccountId}</li><li>GET providerAccounts/{providerAccountId}</li><li>GET dataExtracts/userData</li></ul><b>Applicable Values</b><br> */
		status?: DataExtractsProviderAccountStatus | null;
	}
	export interface ProviderAccountDetailFormProperties {

		/** The source through which the providerAccount is added in the system.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts</li><li>POST providerAccounts</li><li>PUT providerAccounts/{providerAccountId}</li><li>GET providerAccounts/{providerAccountId}</li><li>GET dataExtracts/userData</li></ul><b>Applicable Values</b><br> */
		aggregationSource: FormControl<AccountAggregationSource | null | undefined>,

		/**
		 * Consent Id generated through POST Consent.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts</li><li>POST providerAccounts</li><li>PUT providerAccounts/{providerAccountId}</li><li>GET providerAccounts/{providerAccountId}</li></ul>
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		consentId: FormControl<string | null | undefined>,

		/** The date on when the provider account is created in the system.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts</li><li>POST providerAccounts</li><li>PUT providerAccounts/{providerAccountId}</li><li>GET providerAccounts/{providerAccountId}</li></ul> */
		createdDate: FormControl<string | null | undefined>,

		/**
		 * Unique identifier for the provider account resource. This is created during account addition.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts</li><li>POST providerAccounts</li><li>PUT providerAccounts/{providerAccountId}</li><li>GET providerAccounts/{providerAccountId}</li><li>GET dataExtracts/userData</li></ul>
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		id: FormControl<string | null | undefined>,

		/** Indicates whether account is a manual or aggregated provider account.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts</li><li>POST providerAccounts</li><li>PUT providerAccounts/{providerAccountId}</li><li>GET providerAccounts/{providerAccountId}</li><li>GET dataExtracts/userData</li></ul> */
		isManual: FormControl<boolean | null | undefined>,

		/** Indicate when the providerAccount is last updated successfully.<br><br><b>Account Type</b>: Aggregated<br><b>Endpoints</b>:<ul><li>GET dataExtracts/userData</li></ul> */
		lastUpdated: FormControl<string | null | undefined>,

		/** Indicates the migration status of the provider account from screen-scraping provider to the Open Banking provider. <br><br><b>Endpoints</b>:<ul><li>GET providerAccounts</li><li>GET providerAccounts/{providerAccountId}</li><li>PUT providerAccounts/{providerAccountId}</li><li>GET dataExtracts/userData</li></ul> */
		oauthMigrationStatus: FormControl<AccountOauthMigrationStatus | null | undefined>,

		/**
		 * Unique identifier for the provider resource. This denotes the provider for which the provider account id is generated by the user.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts</li><li>POST providerAccounts</li><li>PUT providerAccounts/{providerAccountId}</li><li>GET providerAccounts/{providerAccountId}</li><li>GET dataExtracts/userData</li></ul>
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		providerId: FormControl<string | null | undefined>,

		/** Unique id generated to indicate the request.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts</li><li>POST providerAccounts</li><li>PUT providerAccounts/{providerAccountId}</li><li>GET providerAccounts/{providerAccountId}</li></ul> */
		requestId: FormControl<string | null | undefined>,

		/** The status of last update attempted for the account. <br><br><b>Endpoints</b>:<ul><li>GET providerAccounts</li><li>POST providerAccounts</li><li>PUT providerAccounts/{providerAccountId}</li><li>GET providerAccounts/{providerAccountId}</li><li>GET dataExtracts/userData</li></ul><b>Applicable Values</b><br> */
		status: FormControl<DataExtractsProviderAccountStatus | null | undefined>,
	}
	export function CreateProviderAccountDetailFormGroup() {
		return new FormGroup<ProviderAccountDetailFormProperties>({
			aggregationSource: new FormControl<AccountAggregationSource | null | undefined>(undefined),
			consentId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			createdDate: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			isManual: new FormControl<boolean | null | undefined>(undefined),
			lastUpdated: new FormControl<string | null | undefined>(undefined),
			oauthMigrationStatus: new FormControl<AccountOauthMigrationStatus | null | undefined>(undefined),
			providerId: new FormControl<string | null | undefined>(undefined),
			requestId: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<DataExtractsProviderAccountStatus | null | undefined>(undefined),
		});

	}

	export interface ProviderAccountDetailResponse {
		providerAccount?: Array<ProviderAccountDetail>;
	}
	export interface ProviderAccountDetailResponseFormProperties {
	}
	export function CreateProviderAccountDetailResponseFormGroup() {
		return new FormGroup<ProviderAccountDetailResponseFormProperties>({
		});

	}

	export interface ProviderAccountPreferencesRequest {
		preferences?: ProviderAccountPreferences;
	}
	export interface ProviderAccountPreferencesRequestFormProperties {
	}
	export function CreateProviderAccountPreferencesRequestFormGroup() {
		return new FormGroup<ProviderAccountPreferencesRequestFormProperties>({
		});

	}

	export interface ProviderAccountProfile {

		/**
		 * Unique identifier for profile<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts/profile</li></ul>
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		id?: string | null;

		/** PII related data like address, name, phoneNumber, identifier and email.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts/profile</li></ul> */
		profile?: Array<Profile>;
	}
	export interface ProviderAccountProfileFormProperties {

		/**
		 * Unique identifier for profile<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts/profile</li></ul>
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		id: FormControl<string | null | undefined>,
	}
	export function CreateProviderAccountProfileFormGroup() {
		return new FormGroup<ProviderAccountProfileFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ProviderAccountRequest {
		aggregationSource?: AccountAggregationSource | null;

		/**
		 * Consent Id generated for the request through POST Consent.<br><br><b>Endpoints</b>:<ul><li>POST Provider Account</li><li>PUT Provider Account</li></ul>
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		consentId?: string | null;
		dataset?: Array<ProvidersDataset>;
		datasetName?: Array<AccountDatasetName>;

		/** Required */
		field: Array<Field>;
		preferences?: ProviderAccountPreferences;
	}
	export interface ProviderAccountRequestFormProperties {
		aggregationSource: FormControl<AccountAggregationSource | null | undefined>,

		/**
		 * Consent Id generated for the request through POST Consent.<br><br><b>Endpoints</b>:<ul><li>POST Provider Account</li><li>PUT Provider Account</li></ul>
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		consentId: FormControl<string | null | undefined>,
	}
	export function CreateProviderAccountRequestFormGroup() {
		return new FormGroup<ProviderAccountRequestFormProperties>({
			aggregationSource: new FormControl<AccountAggregationSource | null | undefined>(undefined),
			consentId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ProvidersDataset {

		/** The name of the dataset attribute suported by the provider.<br><br><b>Endpoints</b>:<ul><li>GET providers/{providerId}</li><li>GET providers</li></ul> */
		attribute?: Array<Attribute>;

		/** The name of the dataset requested from the provider site<br><br><b>Account Type</b>: Manual<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET providerAccounts</li><li>POST providerAccounts</li><li>PUT providerAccounts/{providerAccountId}</li><li>GET providerAccounts/{providerAccountId}</li><li>GET providers/{providerId}</li><li>GET providers</li></ul><b>Applicable Values</b><br> */
		name?: AccountDatasetName | null;
	}
	export interface ProvidersDatasetFormProperties {

		/** The name of the dataset requested from the provider site<br><br><b>Account Type</b>: Manual<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET providerAccounts</li><li>POST providerAccounts</li><li>PUT providerAccounts/{providerAccountId}</li><li>GET providerAccounts/{providerAccountId}</li><li>GET providers/{providerId}</li><li>GET providers</li></ul><b>Applicable Values</b><br> */
		name: FormControl<AccountDatasetName | null | undefined>,
	}
	export function CreateProvidersDatasetFormGroup() {
		return new FormGroup<ProvidersDatasetFormProperties>({
			name: new FormControl<AccountDatasetName | null | undefined>(undefined),
		});

	}

	export interface ProviderAccountResponse {
		providerAccount?: Array<ProviderAccount>;
	}
	export interface ProviderAccountResponseFormProperties {
	}
	export function CreateProviderAccountResponseFormGroup() {
		return new FormGroup<ProviderAccountResponseFormProperties>({
		});

	}

	export interface ProviderAccountUserProfileResponse {
		providerAccount?: Array<ProviderAccountProfile>;
	}
	export interface ProviderAccountUserProfileResponseFormProperties {
	}
	export function CreateProviderAccountUserProfileResponseFormGroup() {
		return new FormGroup<ProviderAccountUserProfileResponseFormProperties>({
		});

	}

	export interface ProviderDetail {

		/** Indicates the priority for which the service is invoked.<br><br><b>Endpoints</b>:<ul><li>GET providers/{providerId}</li><li>GET providers</li></ul><b>Applicable Values</b><br> */
		PRIORITY?: ProviderDetailPRIORITY | null;

		/** AccountType supported by the provider, eg: Brokerage Cash, Current<br><br><b>Endpoints</b>:<ul><li>GET providers/{providerId}</li><li>GET providers</li></ul> */
		accountType?: Array<string>;

		/** The screen-scraping providers that are associated to the Open Banking provider ID.<br><br><b>Applicable containers</b>: All Containers<br><b>Endpoints</b>:<ul><li>GET providers</li><li>GET providers/{providerId}</li></ul> */
		associatedProviderIds?: Array<number>;

		/** AuthParameter appears in the response only in case of token-based aggregation sites.<br><br><b>Endpoints</b>:<ul><li>GET providers/{providerId}</li><li>GET providers</li></ul> */
		authParameter?: Array<string>;

		/** The authentication type enabled at the provider site. <br><br><b>Endpoints</b>:<ul><li>GET providers/{providerId}</li><li>GET providers</li></ul><b>Applicable Values</b><br> */
		authType?: ProviderDetailAuthType | null;

		/** The base URL of the provider's site.<br><br><b>Endpoints</b>:<ul><li>GET providers/{providerId}</li><li>GET providers</li></ul> */
		baseUrl?: string | null;

		/** Capability of the site<br><br><b>Endpoints</b>:<ul><li>GET providers/{providerId}</li><li>GET providers</li></ul><br><b>Note : </b> capability has been deprecated */
		capability?: Array<Capability>;

		/** Country to which the provider belongs.<br><br><b>Endpoints</b>:<ul><li>GET providers/{providerId}</li><li>GET providers</li></ul> */
		countryISOCode?: string | null;

		/** Logical grouping of dataset attributes into datasets such as Basic Aggregation Data, Account Profile and Documents<br><br><b>Endpoints</b>:<ul><li>GET providers/{providerId}</li><li>GET providers</li></ul> */
		dataset?: Array<ProvidersDataset>;

		/** Favicon link of the provider.<br><br><b>Endpoints</b>:<ul><li>GET providers/{providerId}</li><li>GET providers</li></ul> */
		favicon?: string | null;

		/** Text to guide user through linking an account that belongs to the site<br><br><b>Endpoints</b>:<ul><li>GET providers/{providerId}</li><li>GET providers</li></ul> */
		help?: string | null;

		/**
		 * Unique identifier for the provider site(e.g., financial institution sites, biller sites, lender sites, etc.).<br><br><b>Endpoints</b>:<ul><li>GET providers/{providerId}</li><li>GET providers</li></ul>
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		id?: string | null;

		/** Indicates that the site has been added by the user at least once.<br><br><b>Endpoints</b>:<ul><li>GET providers/{providerId}</li><li>GET providers</li></ul> */
		isAddedByUser?: string | null;

		/** Indicates if a provider site is auto-refreshed.<br><br><b>Endpoints</b>:<ul><li>GET providers/{providerId}</li><li>GET providers</li></ul> */
		isAutoRefreshEnabled?: boolean | null;

		/** Indicates if a provider site requires consent.<br><br><b>Endpoints</b>:<ul><li>GET providers/{providerId}</li><li>GET providers</li></ul> */
		isConsentRequired?: boolean | null;

		/** The language in which the provider details are provided. For example, a site supports two languages English and French. English being the primary language, the provider response will be provided in French depending on the user's locale. The language follows the two letter ISO code.<br><br><b>Endpoints</b>:<ul><li>GET providers/{providerId}</li><li>GET providers</li></ul> */
		languageISOCode?: string | null;

		/** Determines when the provider information was updated by Yodlee. If the customer caches the data, the cache is recommended to be refreshed based on this field.<br><br><b>Endpoints</b>:<ul><li>GET providers/{providerId}</li><li>GET providers</li></ul> */
		lastModified?: string | null;

		/** This entity represents the structure of the login or MFA form that is displayed to the user at the provider site. For performance reasons, this field is returned only when a single provider is requested in the request.<br><br><b>Endpoints</b>:<ul><li>GET providers/{providerId}</li></ul> */
		loginForm?: Array<LoginForm>;

		/** The login URL of the provider's site.<br><br><b>Endpoints</b>:<ul><li>GET providers/{providerId}</li><li>GET providers</li></ul> */
		loginUrl?: string | null;

		/** The logo link of the provider institution. The link will return the logo in the PNG format.<br><br><b>Endpoints</b>:<ul><li>GET providers/{providerId}</li><li>GET providers</li></ul> */
		logo?: string | null;

		/** The name of a provider site.<br><br><b>Endpoints</b>:<ul><li>GET providers/{providerId}</li><li>GET providers</li></ul> */
		name?: string | null;

		/** The primary language of the site.<br><br><b>Endpoints</b>:<ul><li>GET providers/{providerId}</li><li>GET providers</li></ul> */
		primaryLanguageISOCode?: string | null;

		/** Determines if the provider is supported for the cobrand (customer), is in the beta stage, etc. <br><br><b>Endpoints</b>:<ul><li>GET providers/{providerId}</li><li>GET providers</li></ul> */
		status?: ProviderDetailStatus | null;
	}
	export interface ProviderDetailFormProperties {

		/** Indicates the priority for which the service is invoked.<br><br><b>Endpoints</b>:<ul><li>GET providers/{providerId}</li><li>GET providers</li></ul><b>Applicable Values</b><br> */
		PRIORITY: FormControl<ProviderDetailPRIORITY | null | undefined>,

		/** The authentication type enabled at the provider site. <br><br><b>Endpoints</b>:<ul><li>GET providers/{providerId}</li><li>GET providers</li></ul><b>Applicable Values</b><br> */
		authType: FormControl<ProviderDetailAuthType | null | undefined>,

		/** The base URL of the provider's site.<br><br><b>Endpoints</b>:<ul><li>GET providers/{providerId}</li><li>GET providers</li></ul> */
		baseUrl: FormControl<string | null | undefined>,

		/** Country to which the provider belongs.<br><br><b>Endpoints</b>:<ul><li>GET providers/{providerId}</li><li>GET providers</li></ul> */
		countryISOCode: FormControl<string | null | undefined>,

		/** Favicon link of the provider.<br><br><b>Endpoints</b>:<ul><li>GET providers/{providerId}</li><li>GET providers</li></ul> */
		favicon: FormControl<string | null | undefined>,

		/** Text to guide user through linking an account that belongs to the site<br><br><b>Endpoints</b>:<ul><li>GET providers/{providerId}</li><li>GET providers</li></ul> */
		help: FormControl<string | null | undefined>,

		/**
		 * Unique identifier for the provider site(e.g., financial institution sites, biller sites, lender sites, etc.).<br><br><b>Endpoints</b>:<ul><li>GET providers/{providerId}</li><li>GET providers</li></ul>
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		id: FormControl<string | null | undefined>,

		/** Indicates that the site has been added by the user at least once.<br><br><b>Endpoints</b>:<ul><li>GET providers/{providerId}</li><li>GET providers</li></ul> */
		isAddedByUser: FormControl<string | null | undefined>,

		/** Indicates if a provider site is auto-refreshed.<br><br><b>Endpoints</b>:<ul><li>GET providers/{providerId}</li><li>GET providers</li></ul> */
		isAutoRefreshEnabled: FormControl<boolean | null | undefined>,

		/** Indicates if a provider site requires consent.<br><br><b>Endpoints</b>:<ul><li>GET providers/{providerId}</li><li>GET providers</li></ul> */
		isConsentRequired: FormControl<boolean | null | undefined>,

		/** The language in which the provider details are provided. For example, a site supports two languages English and French. English being the primary language, the provider response will be provided in French depending on the user's locale. The language follows the two letter ISO code.<br><br><b>Endpoints</b>:<ul><li>GET providers/{providerId}</li><li>GET providers</li></ul> */
		languageISOCode: FormControl<string | null | undefined>,

		/** Determines when the provider information was updated by Yodlee. If the customer caches the data, the cache is recommended to be refreshed based on this field.<br><br><b>Endpoints</b>:<ul><li>GET providers/{providerId}</li><li>GET providers</li></ul> */
		lastModified: FormControl<string | null | undefined>,

		/** The login URL of the provider's site.<br><br><b>Endpoints</b>:<ul><li>GET providers/{providerId}</li><li>GET providers</li></ul> */
		loginUrl: FormControl<string | null | undefined>,

		/** The logo link of the provider institution. The link will return the logo in the PNG format.<br><br><b>Endpoints</b>:<ul><li>GET providers/{providerId}</li><li>GET providers</li></ul> */
		logo: FormControl<string | null | undefined>,

		/** The name of a provider site.<br><br><b>Endpoints</b>:<ul><li>GET providers/{providerId}</li><li>GET providers</li></ul> */
		name: FormControl<string | null | undefined>,

		/** The primary language of the site.<br><br><b>Endpoints</b>:<ul><li>GET providers/{providerId}</li><li>GET providers</li></ul> */
		primaryLanguageISOCode: FormControl<string | null | undefined>,

		/** Determines if the provider is supported for the cobrand (customer), is in the beta stage, etc. <br><br><b>Endpoints</b>:<ul><li>GET providers/{providerId}</li><li>GET providers</li></ul> */
		status: FormControl<ProviderDetailStatus | null | undefined>,
	}
	export function CreateProviderDetailFormGroup() {
		return new FormGroup<ProviderDetailFormProperties>({
			PRIORITY: new FormControl<ProviderDetailPRIORITY | null | undefined>(undefined),
			authType: new FormControl<ProviderDetailAuthType | null | undefined>(undefined),
			baseUrl: new FormControl<string | null | undefined>(undefined),
			countryISOCode: new FormControl<string | null | undefined>(undefined),
			favicon: new FormControl<string | null | undefined>(undefined),
			help: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			isAddedByUser: new FormControl<string | null | undefined>(undefined),
			isAutoRefreshEnabled: new FormControl<boolean | null | undefined>(undefined),
			isConsentRequired: new FormControl<boolean | null | undefined>(undefined),
			languageISOCode: new FormControl<string | null | undefined>(undefined),
			lastModified: new FormControl<string | null | undefined>(undefined),
			loginUrl: new FormControl<string | null | undefined>(undefined),
			logo: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			primaryLanguageISOCode: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<ProviderDetailStatus | null | undefined>(undefined),
		});

	}

	export enum ProviderDetailPRIORITY { POPULAR = 'POPULAR', SUGGESTED = 'SUGGESTED', COBRAND = 'COBRAND', SEARCH = 'SEARCH', ALL = 'ALL' }

	export enum ProviderDetailAuthType { OAUTH = 'OAUTH', CREDENTIALS = 'CREDENTIALS', MFA_CREDENTIALS = 'MFA_CREDENTIALS' }

	export enum ProviderDetailStatus { Supported = 'Supported', Beta = 'Beta', Unsupported = 'Unsupported' }

	export interface ProviderDetailResponse {
		provider?: Array<ProviderDetail>;
	}
	export interface ProviderDetailResponseFormProperties {
	}
	export function CreateProviderDetailResponseFormGroup() {
		return new FormGroup<ProviderDetailResponseFormProperties>({
		});

	}

	export interface ProviderResponse {
		provider?: Array<Providers>;
	}
	export interface ProviderResponseFormProperties {
	}
	export function CreateProviderResponseFormGroup() {
		return new FormGroup<ProviderResponseFormProperties>({
		});

	}

	export interface Providers {

		/** Indicates the priority for which the service is invoked.<br><br><b>Endpoints</b>:<ul><li>GET providers/{providerId}</li><li>GET providers</li></ul><b>Applicable Values</b><br> */
		PRIORITY?: ProviderDetailPRIORITY | null;

		/** AccountType supported by the provider, eg: Brokerage Cash, Current<br><br><b>Endpoints</b>:<ul><li>GET providers/{providerId}</li><li>GET providers</li></ul> */
		accountType?: Array<string>;

		/** The screen-scraping providers that are associated to the Open Banking provider ID.<br><br><b>Applicable containers</b>: All Containers<br><b>Endpoints</b>:<ul><li>GET providers</li><li>GET providers/{providerId}</li></ul> */
		associatedProviderIds?: Array<number>;

		/** AuthParameter appears in the response only in case of token-based aggregation sites.<br><br><b>Endpoints</b>:<ul><li>GET providers/{providerId}</li><li>GET providers</li></ul> */
		authParameter?: Array<string>;

		/** The authentication type enabled at the provider site. <br><br><b>Endpoints</b>:<ul><li>GET providers/{providerId}</li><li>GET providers</li></ul><b>Applicable Values</b><br> */
		authType?: ProviderDetailAuthType | null;

		/** The base URL of the provider's site.<br><br><b>Endpoints</b>:<ul><li>GET providers/{providerId}</li><li>GET providers</li></ul> */
		baseUrl?: string | null;

		/** Capability of the site<br><br><b>Endpoints</b>:<ul><li>GET providers/{providerId}</li><li>GET providers</li></ul><br><b>Note : </b> capability has been deprecated */
		capability?: Array<Capability>;

		/** Country to which the provider belongs.<br><br><b>Endpoints</b>:<ul><li>GET providers/{providerId}</li><li>GET providers</li></ul> */
		countryISOCode?: string | null;

		/** Logical grouping of dataset attributes into datasets such as Basic Aggregation Data, Account Profile and Documents<br><br><b>Endpoints</b>:<ul><li>GET providers/{providerId}</li><li>GET providers</li></ul> */
		dataset?: Array<ProvidersDataset>;

		/** Favicon link of the provider.<br><br><b>Endpoints</b>:<ul><li>GET providers/{providerId}</li><li>GET providers</li></ul> */
		favicon?: string | null;

		/** The forget password URL of the provider site.<br><br><b>Endpoints</b>:<ul><li>GET providers</li></ul> */
		forgetPasswordUrl?: string | null;

		/** Text to guide user through linking an account that belongs to the site<br><br><b>Endpoints</b>:<ul><li>GET providers/{providerId}</li><li>GET providers</li></ul> */
		help?: string | null;

		/**
		 * Unique identifier for the provider site(e.g., financial institution sites, biller sites, lender sites, etc.).<br><br><b>Endpoints</b>:<ul><li>GET providers/{providerId}</li><li>GET providers</li></ul>
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		id?: string | null;

		/** Indicates that the site has been added by the user at least once.<br><br><b>Endpoints</b>:<ul><li>GET providers/{providerId}</li><li>GET providers</li></ul> */
		isAddedByUser?: string | null;

		/** Indicates if a provider site is auto-refreshed.<br><br><b>Endpoints</b>:<ul><li>GET providers/{providerId}</li><li>GET providers</li></ul> */
		isAutoRefreshEnabled?: boolean | null;

		/** Indicates if a provider site requires consent.<br><br><b>Endpoints</b>:<ul><li>GET providers/{providerId}</li><li>GET providers</li></ul> */
		isConsentRequired?: boolean | null;

		/** The language in which the provider details are provided. For example, a site supports two languages English and French. English being the primary language, the provider response will be provided in French depending on the user's locale. The language follows the two letter ISO code.<br><br><b>Endpoints</b>:<ul><li>GET providers/{providerId}</li><li>GET providers</li></ul> */
		languageISOCode?: string | null;

		/** Determines when the provider information was updated by Yodlee. If the customer caches the data, the cache is recommended to be refreshed based on this field.<br><br><b>Endpoints</b>:<ul><li>GET providers/{providerId}</li><li>GET providers</li></ul> */
		lastModified?: string | null;

		/** Help text to guide the user to choose the correct provider site.<br><br><b>Endpoints</b>:<ul><li>GET providers</li></ul> */
		loginHelp?: string | null;

		/** The login URL of the provider's site.<br><br><b>Endpoints</b>:<ul><li>GET providers/{providerId}</li><li>GET providers</li></ul> */
		loginUrl?: string | null;

		/** The logo link of the provider institution. The link will return the logo in the PNG format.<br><br><b>Endpoints</b>:<ul><li>GET providers/{providerId}</li><li>GET providers</li></ul> */
		logo?: string | null;

		/** The name of a provider site.<br><br><b>Endpoints</b>:<ul><li>GET providers/{providerId}</li><li>GET providers</li></ul> */
		name?: string | null;

		/** The primary language of the site.<br><br><b>Endpoints</b>:<ul><li>GET providers/{providerId}</li><li>GET providers</li></ul> */
		primaryLanguageISOCode?: string | null;

		/** Determines if the provider is supported for the cobrand (customer), is in the beta stage, etc. <br><br><b>Endpoints</b>:<ul><li>GET providers/{providerId}</li><li>GET providers</li></ul> */
		status?: ProviderDetailStatus | null;
	}
	export interface ProvidersFormProperties {

		/** Indicates the priority for which the service is invoked.<br><br><b>Endpoints</b>:<ul><li>GET providers/{providerId}</li><li>GET providers</li></ul><b>Applicable Values</b><br> */
		PRIORITY: FormControl<ProviderDetailPRIORITY | null | undefined>,

		/** The authentication type enabled at the provider site. <br><br><b>Endpoints</b>:<ul><li>GET providers/{providerId}</li><li>GET providers</li></ul><b>Applicable Values</b><br> */
		authType: FormControl<ProviderDetailAuthType | null | undefined>,

		/** The base URL of the provider's site.<br><br><b>Endpoints</b>:<ul><li>GET providers/{providerId}</li><li>GET providers</li></ul> */
		baseUrl: FormControl<string | null | undefined>,

		/** Country to which the provider belongs.<br><br><b>Endpoints</b>:<ul><li>GET providers/{providerId}</li><li>GET providers</li></ul> */
		countryISOCode: FormControl<string | null | undefined>,

		/** Favicon link of the provider.<br><br><b>Endpoints</b>:<ul><li>GET providers/{providerId}</li><li>GET providers</li></ul> */
		favicon: FormControl<string | null | undefined>,

		/** The forget password URL of the provider site.<br><br><b>Endpoints</b>:<ul><li>GET providers</li></ul> */
		forgetPasswordUrl: FormControl<string | null | undefined>,

		/** Text to guide user through linking an account that belongs to the site<br><br><b>Endpoints</b>:<ul><li>GET providers/{providerId}</li><li>GET providers</li></ul> */
		help: FormControl<string | null | undefined>,

		/**
		 * Unique identifier for the provider site(e.g., financial institution sites, biller sites, lender sites, etc.).<br><br><b>Endpoints</b>:<ul><li>GET providers/{providerId}</li><li>GET providers</li></ul>
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		id: FormControl<string | null | undefined>,

		/** Indicates that the site has been added by the user at least once.<br><br><b>Endpoints</b>:<ul><li>GET providers/{providerId}</li><li>GET providers</li></ul> */
		isAddedByUser: FormControl<string | null | undefined>,

		/** Indicates if a provider site is auto-refreshed.<br><br><b>Endpoints</b>:<ul><li>GET providers/{providerId}</li><li>GET providers</li></ul> */
		isAutoRefreshEnabled: FormControl<boolean | null | undefined>,

		/** Indicates if a provider site requires consent.<br><br><b>Endpoints</b>:<ul><li>GET providers/{providerId}</li><li>GET providers</li></ul> */
		isConsentRequired: FormControl<boolean | null | undefined>,

		/** The language in which the provider details are provided. For example, a site supports two languages English and French. English being the primary language, the provider response will be provided in French depending on the user's locale. The language follows the two letter ISO code.<br><br><b>Endpoints</b>:<ul><li>GET providers/{providerId}</li><li>GET providers</li></ul> */
		languageISOCode: FormControl<string | null | undefined>,

		/** Determines when the provider information was updated by Yodlee. If the customer caches the data, the cache is recommended to be refreshed based on this field.<br><br><b>Endpoints</b>:<ul><li>GET providers/{providerId}</li><li>GET providers</li></ul> */
		lastModified: FormControl<string | null | undefined>,

		/** Help text to guide the user to choose the correct provider site.<br><br><b>Endpoints</b>:<ul><li>GET providers</li></ul> */
		loginHelp: FormControl<string | null | undefined>,

		/** The login URL of the provider's site.<br><br><b>Endpoints</b>:<ul><li>GET providers/{providerId}</li><li>GET providers</li></ul> */
		loginUrl: FormControl<string | null | undefined>,

		/** The logo link of the provider institution. The link will return the logo in the PNG format.<br><br><b>Endpoints</b>:<ul><li>GET providers/{providerId}</li><li>GET providers</li></ul> */
		logo: FormControl<string | null | undefined>,

		/** The name of a provider site.<br><br><b>Endpoints</b>:<ul><li>GET providers/{providerId}</li><li>GET providers</li></ul> */
		name: FormControl<string | null | undefined>,

		/** The primary language of the site.<br><br><b>Endpoints</b>:<ul><li>GET providers/{providerId}</li><li>GET providers</li></ul> */
		primaryLanguageISOCode: FormControl<string | null | undefined>,

		/** Determines if the provider is supported for the cobrand (customer), is in the beta stage, etc. <br><br><b>Endpoints</b>:<ul><li>GET providers/{providerId}</li><li>GET providers</li></ul> */
		status: FormControl<ProviderDetailStatus | null | undefined>,
	}
	export function CreateProvidersFormGroup() {
		return new FormGroup<ProvidersFormProperties>({
			PRIORITY: new FormControl<ProviderDetailPRIORITY | null | undefined>(undefined),
			authType: new FormControl<ProviderDetailAuthType | null | undefined>(undefined),
			baseUrl: new FormControl<string | null | undefined>(undefined),
			countryISOCode: new FormControl<string | null | undefined>(undefined),
			favicon: new FormControl<string | null | undefined>(undefined),
			forgetPasswordUrl: new FormControl<string | null | undefined>(undefined),
			help: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			isAddedByUser: new FormControl<string | null | undefined>(undefined),
			isAutoRefreshEnabled: new FormControl<boolean | null | undefined>(undefined),
			isConsentRequired: new FormControl<boolean | null | undefined>(undefined),
			languageISOCode: new FormControl<string | null | undefined>(undefined),
			lastModified: new FormControl<string | null | undefined>(undefined),
			loginHelp: new FormControl<string | null | undefined>(undefined),
			loginUrl: new FormControl<string | null | undefined>(undefined),
			logo: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			primaryLanguageISOCode: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<ProviderDetailStatus | null | undefined>(undefined),
		});

	}

	export interface ProvidersCount {
		TOTAL?: TotalCount;
	}
	export interface ProvidersCountFormProperties {
	}
	export function CreateProvidersCountFormGroup() {
		return new FormGroup<ProvidersCountFormProperties>({
		});

	}

	export interface TotalCount {

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		count?: string | null;
	}
	export interface TotalCountFormProperties {

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		count: FormControl<string | null | undefined>,
	}
	export function CreateTotalCountFormGroup() {
		return new FormGroup<TotalCountFormProperties>({
			count: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ProvidersCountResponse {
		provider?: ProvidersCount;
	}
	export interface ProvidersCountResponseFormProperties {
	}
	export function CreateProvidersCountResponseFormGroup() {
		return new FormGroup<ProvidersCountResponseFormProperties>({
		});

	}

	export interface RuleClause {

		/** Field for which the clause is created.<br><br><br><b>Valid Values</b>:amount,description<b>Applicable containers</b>:  creditCard, investment, insurance, loan<br> */
		field?: FieldOperationField | null;

		/** The value would be the amount value in case of amount based rule clause or the string value in case of description based rule clause.<br><br><b>Applicable containers</b>:  creditCard, investment, insurance, loan<br> */
		fieldValue?: string | null;

		/** Operation for which the clause is created.<br><br><b>Applicable containers</b>:  creditCard, investment, insurance, loan<br> */
		operation?: FieldOperationOperation | null;

		/**
		 * Unique identifier generated for the rule clause.<br><br><b>Applicable containers</b>:  creditCard, investment, insurance, loan<br>
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		ruleClauseId?: string | null;

		/**
		 * Unique identifier generated for every rule the user creates.<br><br><b>Applicable containers</b>:  creditCard, investment, insurance, loan<br>
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		userDefinedRuleId?: string | null;
	}
	export interface RuleClauseFormProperties {

		/** Field for which the clause is created.<br><br><br><b>Valid Values</b>:amount,description<b>Applicable containers</b>:  creditCard, investment, insurance, loan<br> */
		field: FormControl<FieldOperationField | null | undefined>,

		/** The value would be the amount value in case of amount based rule clause or the string value in case of description based rule clause.<br><br><b>Applicable containers</b>:  creditCard, investment, insurance, loan<br> */
		fieldValue: FormControl<string | null | undefined>,

		/** Operation for which the clause is created.<br><br><b>Applicable containers</b>:  creditCard, investment, insurance, loan<br> */
		operation: FormControl<FieldOperationOperation | null | undefined>,

		/**
		 * Unique identifier generated for the rule clause.<br><br><b>Applicable containers</b>:  creditCard, investment, insurance, loan<br>
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		ruleClauseId: FormControl<string | null | undefined>,

		/**
		 * Unique identifier generated for every rule the user creates.<br><br><b>Applicable containers</b>:  creditCard, investment, insurance, loan<br>
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		userDefinedRuleId: FormControl<string | null | undefined>,
	}
	export function CreateRuleClauseFormGroup() {
		return new FormGroup<RuleClauseFormProperties>({
			field: new FormControl<FieldOperationField | null | undefined>(undefined),
			fieldValue: new FormControl<string | null | undefined>(undefined),
			operation: new FormControl<FieldOperationOperation | null | undefined>(undefined),
			ruleClauseId: new FormControl<string | null | undefined>(undefined),
			userDefinedRuleId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Statement {

		/**
		 * Account to which the statement belongs to.<br><br><b>Applicable containers</b>: creditCard,  loan, insurance<br>
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		accountId?: string | null;
		amountDue?: Money;

		/**
		 * The APR applied to the balance on the credit card account, as available in the statement.<br><b>Note:</b> In case of variable APR, the APR available on the statement might differ from the APR available at the account-level.<br><br><b>Applicable containers</b>: creditCard,  loan, insurance<br>
		 * Type: double
		 */
		apr?: number | null;

		/** The end date of the statement period.<br><br><b>Applicable containers</b>: creditCard,  loan, insurance<br> */
		billingPeriodEnd?: string | null;

		/** The start date of the statement period.<br><br><b>Applicable containers</b>: creditCard,  loan, insurance<br> */
		billingPeriodStart?: string | null;
		cashAdvance?: Money;

		/**
		 * The APR applicable to cash withdrawals on the credit card account.<br><br><b>Applicable containers</b>: creditCard,  loan, insurance<br>
		 * Type: double
		 */
		cashApr?: number | null;

		/** The date by when the minimum payment is due to be paid.<br><b>Note:</b> The due date that appears in the statement may differ from the due date at the account-level.<br><br><b>Applicable containers</b>: creditCard,  loan, insurance<br> */
		dueDate?: string | null;

		/**
		 * Unique identifier for the statement.<br><br><b>Applicable containers</b>: creditCard,  loan, insurance<br>
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		id?: string | null;
		interestAmount?: Money;

		/** The field is set to true if the statement is the latest generated statement.<br><br><b>Applicable containers</b>: creditCard,  loan, insurance<br> */
		isLatest?: boolean | null;
		lastPaymentAmount?: Money;

		/** The date on which the last payment was done during the billing cycle.<br><br><b>Applicable containers</b>: creditCard,  loan, insurance<br> */
		lastPaymentDate?: string | null;

		/** The date when the account was last updated by Yodlee.<br><br><b>Applicable containers</b>: creditCard,  loan, insurance<br> */
		lastUpdated?: string | null;
		loanBalance?: Money;
		minimumPayment?: Money;
		newCharges?: Money;
		principalAmount?: Money;

		/** The date on which the statement is generated.<br><br><b>Applicable containers</b>: creditCard,  loan, insurance<br> */
		statementDate?: string | null;
	}
	export interface StatementFormProperties {

		/**
		 * Account to which the statement belongs to.<br><br><b>Applicable containers</b>: creditCard,  loan, insurance<br>
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		accountId: FormControl<string | null | undefined>,

		/**
		 * The APR applied to the balance on the credit card account, as available in the statement.<br><b>Note:</b> In case of variable APR, the APR available on the statement might differ from the APR available at the account-level.<br><br><b>Applicable containers</b>: creditCard,  loan, insurance<br>
		 * Type: double
		 */
		apr: FormControl<number | null | undefined>,

		/** The end date of the statement period.<br><br><b>Applicable containers</b>: creditCard,  loan, insurance<br> */
		billingPeriodEnd: FormControl<string | null | undefined>,

		/** The start date of the statement period.<br><br><b>Applicable containers</b>: creditCard,  loan, insurance<br> */
		billingPeriodStart: FormControl<string | null | undefined>,

		/**
		 * The APR applicable to cash withdrawals on the credit card account.<br><br><b>Applicable containers</b>: creditCard,  loan, insurance<br>
		 * Type: double
		 */
		cashApr: FormControl<number | null | undefined>,

		/** The date by when the minimum payment is due to be paid.<br><b>Note:</b> The due date that appears in the statement may differ from the due date at the account-level.<br><br><b>Applicable containers</b>: creditCard,  loan, insurance<br> */
		dueDate: FormControl<string | null | undefined>,

		/**
		 * Unique identifier for the statement.<br><br><b>Applicable containers</b>: creditCard,  loan, insurance<br>
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		id: FormControl<string | null | undefined>,

		/** The field is set to true if the statement is the latest generated statement.<br><br><b>Applicable containers</b>: creditCard,  loan, insurance<br> */
		isLatest: FormControl<boolean | null | undefined>,

		/** The date on which the last payment was done during the billing cycle.<br><br><b>Applicable containers</b>: creditCard,  loan, insurance<br> */
		lastPaymentDate: FormControl<string | null | undefined>,

		/** The date when the account was last updated by Yodlee.<br><br><b>Applicable containers</b>: creditCard,  loan, insurance<br> */
		lastUpdated: FormControl<string | null | undefined>,

		/** The date on which the statement is generated.<br><br><b>Applicable containers</b>: creditCard,  loan, insurance<br> */
		statementDate: FormControl<string | null | undefined>,
	}
	export function CreateStatementFormGroup() {
		return new FormGroup<StatementFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
			apr: new FormControl<number | null | undefined>(undefined),
			billingPeriodEnd: new FormControl<string | null | undefined>(undefined),
			billingPeriodStart: new FormControl<string | null | undefined>(undefined),
			cashApr: new FormControl<number | null | undefined>(undefined),
			dueDate: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			isLatest: new FormControl<boolean | null | undefined>(undefined),
			lastPaymentDate: new FormControl<string | null | undefined>(undefined),
			lastUpdated: new FormControl<string | null | undefined>(undefined),
			statementDate: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StatementResponse {
		statement?: Array<Statement>;
	}
	export interface StatementResponseFormProperties {
	}
	export function CreateStatementResponseFormGroup() {
		return new FormGroup<StatementResponseFormProperties>({
		});

	}

	export interface Transaction {

		/** The account's container.<br><br><b>Applicable containers</b>: bank,creditCard,investment,insurance,loan<br><b>Applicable Values</b><br> */
		CONTAINER?: AccountCONTAINER | null;

		/**
		 * The account from which the transaction was made. This is basically the primary key of the account resource. <br><br><b>Applicable containers</b>: bank,creditCard,investment,insurance,loan<br>
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		accountId?: string | null;
		amount?: Money;

		/** Indicates if the transaction appears as a debit or a credit transaction in the account. <br><br><b>Applicable containers</b>: bank,creditCard,investment,insurance,loan<br><b>Applicable Values</b><br> */
		baseType?: DataExtractsTransactionBaseType | null;

		/** The name of the category assigned to the transaction. This is the category field of the transaction category resource. The supported values are provided by the GET transactions/categories.<br><br><b>Applicable containers</b>: bank,creditCard,investment,insurance,loan<br> */
		category?: string | null;

		/**
		 * The id of the category assigned to the transaction. This is the id field of the transaction category resource. The supported values are provided by the GET transactions/categories.<br><br><b>Applicable containers</b>: bank,creditCard,investment,insurance,loan<br>
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		categoryId?: string | null;

		/** Indicates the source of the category, i.e., categories derived by the system or assigned/provided by the consumer. This is the source field of the transaction category resource. The supported values are provided by the GET transactions/categories.<br><br><b>Applicable containers</b>: bank,creditCard,investment,insurance,loan<br><b>Applicable Values</b><br> */
		categorySource?: AccountAggregationSource | null;

		/** The categoryType of the category assigned to the transaction. This is the type field of the transaction category resource. The supported values are provided by the GET transactions/categories.<br><br><b>Applicable containers</b>: bank,creditCard,investment,insurance,loan<br> */
		categoryType?: DataExtractsTransactionCategoryType | null;

		/** The checkNumber of the transaction.<br><br><b>Applicable containers</b>: bank<br> */
		checkNumber?: string | null;
		commission?: Money;
		createdDate?: string | null;

		/** The CUSIP (Committee on Uniform Securities Identification Procedures) identifies the financial instruments in the United States and Canada.<br><b><br><b>Note</b></b>: The CUSIP number field applies only to trade related transactions.<br><br><b>Applicable containers</b>: investment<br> */
		cusipNumber?: string | null;

		/** The value provided will be either postDate or transactionDate. postDate takes higher priority than transactionDate, except for the investment container as only transactionDate is available. The availability of postDate or transactionDate depends on the provider site.<br><br><b>Applicable containers</b>: bank,creditCard,investment,insurance,loan<br> */
		date?: string | null;
		description?: Description;

		/**
		 * The id of the detail category that is assigned to the transaction. The supported values are provided by GET transactions/categories.<br><br><b>Applicable containers</b>: bank,creditCard<br>
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		detailCategoryId?: string | null;

		/**
		 * The high level category assigned to the transaction. The supported values are provided by the GET transactions/categories. <br><br><b>Applicable containers</b>: bank,creditCard,investment,insurance,loan<br>
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		highLevelCategoryId?: string | null;

		/** For transactions involving securities, this captures the securities description.<br><br><b>Applicable containers</b>: investment<br> */
		holdingDescription?: string | null;

		/**
		 * An unique identifier for the transaction. The combination of the id and account container are unique in the system. <br><br><b>Applicable containers</b>: bank,creditCard,investment,insurance,loan<br>
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		id?: string | null;
		interest?: Money;

		/** Indicates if the transaction is aggregated from the FI site or the consumer has manually created the transaction using the application or an API. <br><br><b>Applicable containers</b>: bank,creditCard,investment,insurance,loan<br> */
		isManual?: boolean | null;

		/** International Securities Identification Number (ISIN) standard is used worldwide to identify specific securities.<br><br><b>Applicable containers</b>: investment<br> */
		isin?: string | null;
		lastUpdated?: string | null;

		/** Additional notes provided by the user for a particular  transaction through application or API services. <br><br><b>Applicable containers</b>: bank,creditCard,investment,insurance,loan<br> */
		memo?: string | null;
		merchant?: Merchant;

		/**
		 * The parentCategoryId of the category assigned to the transaction.<br><b>Note</b>: This field will be provided in the response if the transaction is assigned to a user-created category. <br><br><b>Applicable containers</b>: bank,creditCard,investment,insurance,loan<br>
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		parentCategoryId?: string | null;

		/** The date on which the transaction is posted to the account.<br><br><b>Applicable containers</b>: bank,creditCard,insurance,loan<br> */
		postDate?: string | null;
		price?: Money;
		principal?: Money;

		/**
		 * The quantity associated with the transaction.<br><b>Note</b>: The quantity field applies only to trade-related transactions.<br><br><b>Applicable containers</b>: investment<br>
		 * Type: double
		 */
		quantity?: number | null;
		runningBalance?: Money;

		/** SEDOL stands for Stock Exchange Daily Official List, a list of security identifiers used in the United Kingdom and Ireland for clearing purposes.<br><br><b>Applicable containers</b>: investment<br> */
		sedol?: string | null;

		/** It is the date on which the transaction is finalized, that is, the date the ownership of the security is transferred to the buyer. The settlement date is usually few days after the transaction date.<br><br><b>Applicable containers</b>: investment<br> */
		settleDate?: string | null;

		/** A unique ID that the provider site has assigned to the transaction. The source ID is only available for the pre-populated accounts.<br>Pre-populated accounts are the accounts that the FI customers shares with Yodlee, so that the user does not have to add or aggregate those accounts. */
		sourceId?: string | null;

		/** The source through which the transaction is added to the Yodlee system.<br><br><b>Applicable containers</b>: bank,creditCard,investment,insurance,loann<br><b>Applicable Values:</b><br> */
		sourceType?: DataExtractsTransactionSourceType | null;

		/** The status of the transaction: pending or posted.<br><b>Note</b>: Most FI sites only display posted transactions. If the FI site displays transaction status, same will be aggregated.  <br><br><b>Applicable containers</b>: bank,creditCard,investment,insurance,loan<br><b>Applicable Values</b><br> */
		status?: DataExtractsTransactionStatus | null;

		/** The transaction subtype field provides a detailed transaction type. For example, purchase is a transaction type and the transaction subtype field indicates if the purchase was made using a debit or credit card.<br><b>Note</b>: The transaction subtype field is available only in the United States, Canada, United Kingdom, and India.<br><br><b>Applicable containers</b>: bank,creditCard,investment,insurance,loan<br> */
		subType?: DataExtractsTransactionSubType | null;

		/** The symbol of the security being traded.<br><b>Note</b>: The settle date field applies only to trade-related transactions. <br><br><b>Applicable containers</b>: investment<br> */
		symbol?: string | null;

		/** The date the transaction happens in the account. <br><br><b>Applicable containers</b>: bank,creditCard,investment,insurance,loan<br> */
		transactionDate?: string | null;

		/** The nature of the transaction, i.e., deposit, refund, payment, etc.<br><b>Note</b>: The transaction type field is available only for the United States, Canada, United Kingdom, and India based provider sites. <br><br><b>Applicable containers</b>: bank,creditCard,investment<br> */
		type?: string | null;

		/** It is an identification number that is assigned to financial instruments such as stocks and bonds trading in Switzerland.<br><br><b>Applicable containers</b>: investment<br> */
		valoren?: string | null;
	}
	export interface TransactionFormProperties {

		/** The account's container.<br><br><b>Applicable containers</b>: bank,creditCard,investment,insurance,loan<br><b>Applicable Values</b><br> */
		CONTAINER: FormControl<AccountCONTAINER | null | undefined>,

		/**
		 * The account from which the transaction was made. This is basically the primary key of the account resource. <br><br><b>Applicable containers</b>: bank,creditCard,investment,insurance,loan<br>
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		accountId: FormControl<string | null | undefined>,

		/** Indicates if the transaction appears as a debit or a credit transaction in the account. <br><br><b>Applicable containers</b>: bank,creditCard,investment,insurance,loan<br><b>Applicable Values</b><br> */
		baseType: FormControl<DataExtractsTransactionBaseType | null | undefined>,

		/** The name of the category assigned to the transaction. This is the category field of the transaction category resource. The supported values are provided by the GET transactions/categories.<br><br><b>Applicable containers</b>: bank,creditCard,investment,insurance,loan<br> */
		category: FormControl<string | null | undefined>,

		/**
		 * The id of the category assigned to the transaction. This is the id field of the transaction category resource. The supported values are provided by the GET transactions/categories.<br><br><b>Applicable containers</b>: bank,creditCard,investment,insurance,loan<br>
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		categoryId: FormControl<string | null | undefined>,

		/** Indicates the source of the category, i.e., categories derived by the system or assigned/provided by the consumer. This is the source field of the transaction category resource. The supported values are provided by the GET transactions/categories.<br><br><b>Applicable containers</b>: bank,creditCard,investment,insurance,loan<br><b>Applicable Values</b><br> */
		categorySource: FormControl<AccountAggregationSource | null | undefined>,

		/** The categoryType of the category assigned to the transaction. This is the type field of the transaction category resource. The supported values are provided by the GET transactions/categories.<br><br><b>Applicable containers</b>: bank,creditCard,investment,insurance,loan<br> */
		categoryType: FormControl<DataExtractsTransactionCategoryType | null | undefined>,

		/** The checkNumber of the transaction.<br><br><b>Applicable containers</b>: bank<br> */
		checkNumber: FormControl<string | null | undefined>,
		createdDate: FormControl<string | null | undefined>,

		/** The CUSIP (Committee on Uniform Securities Identification Procedures) identifies the financial instruments in the United States and Canada.<br><b><br><b>Note</b></b>: The CUSIP number field applies only to trade related transactions.<br><br><b>Applicable containers</b>: investment<br> */
		cusipNumber: FormControl<string | null | undefined>,

		/** The value provided will be either postDate or transactionDate. postDate takes higher priority than transactionDate, except for the investment container as only transactionDate is available. The availability of postDate or transactionDate depends on the provider site.<br><br><b>Applicable containers</b>: bank,creditCard,investment,insurance,loan<br> */
		date: FormControl<string | null | undefined>,

		/**
		 * The id of the detail category that is assigned to the transaction. The supported values are provided by GET transactions/categories.<br><br><b>Applicable containers</b>: bank,creditCard<br>
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		detailCategoryId: FormControl<string | null | undefined>,

		/**
		 * The high level category assigned to the transaction. The supported values are provided by the GET transactions/categories. <br><br><b>Applicable containers</b>: bank,creditCard,investment,insurance,loan<br>
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		highLevelCategoryId: FormControl<string | null | undefined>,

		/** For transactions involving securities, this captures the securities description.<br><br><b>Applicable containers</b>: investment<br> */
		holdingDescription: FormControl<string | null | undefined>,

		/**
		 * An unique identifier for the transaction. The combination of the id and account container are unique in the system. <br><br><b>Applicable containers</b>: bank,creditCard,investment,insurance,loan<br>
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		id: FormControl<string | null | undefined>,

		/** Indicates if the transaction is aggregated from the FI site or the consumer has manually created the transaction using the application or an API. <br><br><b>Applicable containers</b>: bank,creditCard,investment,insurance,loan<br> */
		isManual: FormControl<boolean | null | undefined>,

		/** International Securities Identification Number (ISIN) standard is used worldwide to identify specific securities.<br><br><b>Applicable containers</b>: investment<br> */
		isin: FormControl<string | null | undefined>,
		lastUpdated: FormControl<string | null | undefined>,

		/** Additional notes provided by the user for a particular  transaction through application or API services. <br><br><b>Applicable containers</b>: bank,creditCard,investment,insurance,loan<br> */
		memo: FormControl<string | null | undefined>,

		/**
		 * The parentCategoryId of the category assigned to the transaction.<br><b>Note</b>: This field will be provided in the response if the transaction is assigned to a user-created category. <br><br><b>Applicable containers</b>: bank,creditCard,investment,insurance,loan<br>
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		parentCategoryId: FormControl<string | null | undefined>,

		/** The date on which the transaction is posted to the account.<br><br><b>Applicable containers</b>: bank,creditCard,insurance,loan<br> */
		postDate: FormControl<string | null | undefined>,

		/**
		 * The quantity associated with the transaction.<br><b>Note</b>: The quantity field applies only to trade-related transactions.<br><br><b>Applicable containers</b>: investment<br>
		 * Type: double
		 */
		quantity: FormControl<number | null | undefined>,

		/** SEDOL stands for Stock Exchange Daily Official List, a list of security identifiers used in the United Kingdom and Ireland for clearing purposes.<br><br><b>Applicable containers</b>: investment<br> */
		sedol: FormControl<string | null | undefined>,

		/** It is the date on which the transaction is finalized, that is, the date the ownership of the security is transferred to the buyer. The settlement date is usually few days after the transaction date.<br><br><b>Applicable containers</b>: investment<br> */
		settleDate: FormControl<string | null | undefined>,

		/** A unique ID that the provider site has assigned to the transaction. The source ID is only available for the pre-populated accounts.<br>Pre-populated accounts are the accounts that the FI customers shares with Yodlee, so that the user does not have to add or aggregate those accounts. */
		sourceId: FormControl<string | null | undefined>,

		/** The source through which the transaction is added to the Yodlee system.<br><br><b>Applicable containers</b>: bank,creditCard,investment,insurance,loann<br><b>Applicable Values:</b><br> */
		sourceType: FormControl<DataExtractsTransactionSourceType | null | undefined>,

		/** The status of the transaction: pending or posted.<br><b>Note</b>: Most FI sites only display posted transactions. If the FI site displays transaction status, same will be aggregated.  <br><br><b>Applicable containers</b>: bank,creditCard,investment,insurance,loan<br><b>Applicable Values</b><br> */
		status: FormControl<DataExtractsTransactionStatus | null | undefined>,

		/** The transaction subtype field provides a detailed transaction type. For example, purchase is a transaction type and the transaction subtype field indicates if the purchase was made using a debit or credit card.<br><b>Note</b>: The transaction subtype field is available only in the United States, Canada, United Kingdom, and India.<br><br><b>Applicable containers</b>: bank,creditCard,investment,insurance,loan<br> */
		subType: FormControl<DataExtractsTransactionSubType | null | undefined>,

		/** The symbol of the security being traded.<br><b>Note</b>: The settle date field applies only to trade-related transactions. <br><br><b>Applicable containers</b>: investment<br> */
		symbol: FormControl<string | null | undefined>,

		/** The date the transaction happens in the account. <br><br><b>Applicable containers</b>: bank,creditCard,investment,insurance,loan<br> */
		transactionDate: FormControl<string | null | undefined>,

		/** The nature of the transaction, i.e., deposit, refund, payment, etc.<br><b>Note</b>: The transaction type field is available only for the United States, Canada, United Kingdom, and India based provider sites. <br><br><b>Applicable containers</b>: bank,creditCard,investment<br> */
		type: FormControl<string | null | undefined>,

		/** It is an identification number that is assigned to financial instruments such as stocks and bonds trading in Switzerland.<br><br><b>Applicable containers</b>: investment<br> */
		valoren: FormControl<string | null | undefined>,
	}
	export function CreateTransactionFormGroup() {
		return new FormGroup<TransactionFormProperties>({
			CONTAINER: new FormControl<AccountCONTAINER | null | undefined>(undefined),
			accountId: new FormControl<string | null | undefined>(undefined),
			baseType: new FormControl<DataExtractsTransactionBaseType | null | undefined>(undefined),
			category: new FormControl<string | null | undefined>(undefined),
			categoryId: new FormControl<string | null | undefined>(undefined),
			categorySource: new FormControl<AccountAggregationSource | null | undefined>(undefined),
			categoryType: new FormControl<DataExtractsTransactionCategoryType | null | undefined>(undefined),
			checkNumber: new FormControl<string | null | undefined>(undefined),
			createdDate: new FormControl<string | null | undefined>(undefined),
			cusipNumber: new FormControl<string | null | undefined>(undefined),
			date: new FormControl<string | null | undefined>(undefined),
			detailCategoryId: new FormControl<string | null | undefined>(undefined),
			highLevelCategoryId: new FormControl<string | null | undefined>(undefined),
			holdingDescription: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			isManual: new FormControl<boolean | null | undefined>(undefined),
			isin: new FormControl<string | null | undefined>(undefined),
			lastUpdated: new FormControl<string | null | undefined>(undefined),
			memo: new FormControl<string | null | undefined>(undefined),
			parentCategoryId: new FormControl<string | null | undefined>(undefined),
			postDate: new FormControl<string | null | undefined>(undefined),
			quantity: new FormControl<number | null | undefined>(undefined),
			sedol: new FormControl<string | null | undefined>(undefined),
			settleDate: new FormControl<string | null | undefined>(undefined),
			sourceId: new FormControl<string | null | undefined>(undefined),
			sourceType: new FormControl<DataExtractsTransactionSourceType | null | undefined>(undefined),
			status: new FormControl<DataExtractsTransactionStatus | null | undefined>(undefined),
			subType: new FormControl<DataExtractsTransactionSubType | null | undefined>(undefined),
			symbol: new FormControl<string | null | undefined>(undefined),
			transactionDate: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			valoren: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TransactionCategorizationRule {

		/**
		 * The level of the category for which the rule is created.<br><br><b>Applicable containers</b>:  creditCard, insurance, loan<br>
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		categoryLevelId?: number | null;

		/**
		 * Unique identifier of the user.<br><br><b>Applicable containers</b>:  creditCard, investment, insurance, loan<br>
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		memId?: string | null;

		/** Details of rules. <br><br><b>Applicable containers</b>:  creditCard, investment, insurance, loan<br> */
		ruleClauses?: Array<RuleClause>;

		/**
		 * The order in which the rules get executed on transactions.<br><br><b>Applicable containers</b>:  creditCard, investment, insurance, loan<br>
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		rulePriority?: number | null;

		/**
		 * Category id that is assigned to the transaction when the transaction matches the rule clause. This is the id field of the transaction category resource.<br><br><b>Applicable containers</b>:  creditCard, investment, insurance, loan<br>
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		transactionCategorisationId?: string | null;

		/**
		 * Unique identifier generated for every rule the user creates.<br><br><b>Applicable containers</b>:  creditCard, investment, insurance, loan<br>
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		userDefinedRuleId?: string | null;
	}
	export interface TransactionCategorizationRuleFormProperties {

		/**
		 * The level of the category for which the rule is created.<br><br><b>Applicable containers</b>:  creditCard, insurance, loan<br>
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		categoryLevelId: FormControl<number | null | undefined>,

		/**
		 * Unique identifier of the user.<br><br><b>Applicable containers</b>:  creditCard, investment, insurance, loan<br>
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		memId: FormControl<string | null | undefined>,

		/**
		 * The order in which the rules get executed on transactions.<br><br><b>Applicable containers</b>:  creditCard, investment, insurance, loan<br>
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		rulePriority: FormControl<number | null | undefined>,

		/**
		 * Category id that is assigned to the transaction when the transaction matches the rule clause. This is the id field of the transaction category resource.<br><br><b>Applicable containers</b>:  creditCard, investment, insurance, loan<br>
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		transactionCategorisationId: FormControl<string | null | undefined>,

		/**
		 * Unique identifier generated for every rule the user creates.<br><br><b>Applicable containers</b>:  creditCard, investment, insurance, loan<br>
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		userDefinedRuleId: FormControl<string | null | undefined>,
	}
	export function CreateTransactionCategorizationRuleFormGroup() {
		return new FormGroup<TransactionCategorizationRuleFormProperties>({
			categoryLevelId: new FormControl<number | null | undefined>(undefined),
			memId: new FormControl<string | null | undefined>(undefined),
			rulePriority: new FormControl<number | null | undefined>(undefined),
			transactionCategorisationId: new FormControl<string | null | undefined>(undefined),
			userDefinedRuleId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TransactionCategorizationRuleInfo {

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		categoryId: number;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		priority?: number | null;

		/** Required */
		ruleClause: Array<FieldOperation>;
		source?: AccountAggregationSource | null;
	}
	export interface TransactionCategorizationRuleInfoFormProperties {

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		categoryId: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		priority: FormControl<number | null | undefined>,
		source: FormControl<AccountAggregationSource | null | undefined>,
	}
	export function CreateTransactionCategorizationRuleInfoFormGroup() {
		return new FormGroup<TransactionCategorizationRuleInfoFormProperties>({
			categoryId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			priority: new FormControl<number | null | undefined>(undefined),
			source: new FormControl<AccountAggregationSource | null | undefined>(undefined),
		});

	}

	export interface TransactionCategorizationRuleRequest {

		/** Required */
		rule: TransactionCategorizationRuleInfo;
	}
	export interface TransactionCategorizationRuleRequestFormProperties {
	}
	export function CreateTransactionCategorizationRuleRequestFormGroup() {
		return new FormGroup<TransactionCategorizationRuleRequestFormProperties>({
		});

	}

	export interface TransactionCategorizationRuleResponse {
		txnRules?: Array<TransactionCategorizationRule>;
	}
	export interface TransactionCategorizationRuleResponseFormProperties {
	}
	export function CreateTransactionCategorizationRuleResponseFormGroup() {
		return new FormGroup<TransactionCategorizationRuleResponseFormProperties>({
		});

	}

	export interface TransactionCategory {

		/** The name of the category.<br><b>Note</b>: Transaction categorization is one of the core features offered by Yodlee and the categories are assigned to the transactions by the system. Transactions can be clubbed together by the category that is assigned to them.  <br><br><b>Applicable containers</b>:  creditCard, investment, insurance, loan<br> */
		category?: string | null;

		/** Category Classification.<br><br><b>Applicable containers</b>:  creditCard, investment, insurance, loan<br><b>Applicable Values</b><br> */
		classification?: TransactionCategoryClassification | null;

		/** A attribute which will always hold the first value(initial name) of Yodlee defined category attribute.<br><br><b>Applicable containers</b>: creditCard, investment, insurance, loan<br> */
		defaultCategoryName?: string | null;

		/** A attribute which will always hold the first value(initial name) of Yodlee defined highLevelCategoryName attribute.<br><br><b>Applicable containers</b>: creditCard, investment, insurance, loan<br> */
		defaultHighLevelCategoryName?: string | null;

		/** Entity that provides detail category attributes<br><br><b>Applicable containers</b>:  creditCard, investment, insurance, loan<br> */
		detailCategory?: Array<DetailCategory>;

		/**
		 * The unique identifier of the high level category.<br><br><b>Applicable containers</b>:  creditCard, investment, insurance, loan<br>
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		highLevelCategoryId?: string | null;

		/** The name of the high level category. A group of similar transaction categories are clubbed together to form a high-level category.<br><br><b>Applicable containers</b>:  creditCard, investment, insurance, loan<br> */
		highLevelCategoryName?: string | null;

		/**
		 * Unique identifier of the category.<br><br><b>Applicable containers</b>:  creditCard, investment, insurance, loan<br>
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		id?: string | null;

		/** Source used to identify whether the transaction category is user defined category or system created category.<br><br><b>Applicable containers</b>:  creditCard, investment, insurance, loan<br><b>Applicable Values</b><br> */
		source?: AccountAggregationSource | null;

		/** Transaction categories and high-level categories are further mapped to five transaction category types. Customers, based on their needs can either use the transaction categories, the high-level categories, or the transaction category types. <br><br><b>Applicable containers</b>:  creditCard, investment, insurance, loan<br><b>Applicable Values</b><br> */
		type?: DataExtractsTransactionCategoryType | null;
	}
	export interface TransactionCategoryFormProperties {

		/** The name of the category.<br><b>Note</b>: Transaction categorization is one of the core features offered by Yodlee and the categories are assigned to the transactions by the system. Transactions can be clubbed together by the category that is assigned to them.  <br><br><b>Applicable containers</b>:  creditCard, investment, insurance, loan<br> */
		category: FormControl<string | null | undefined>,

		/** Category Classification.<br><br><b>Applicable containers</b>:  creditCard, investment, insurance, loan<br><b>Applicable Values</b><br> */
		classification: FormControl<TransactionCategoryClassification | null | undefined>,

		/** A attribute which will always hold the first value(initial name) of Yodlee defined category attribute.<br><br><b>Applicable containers</b>: creditCard, investment, insurance, loan<br> */
		defaultCategoryName: FormControl<string | null | undefined>,

		/** A attribute which will always hold the first value(initial name) of Yodlee defined highLevelCategoryName attribute.<br><br><b>Applicable containers</b>: creditCard, investment, insurance, loan<br> */
		defaultHighLevelCategoryName: FormControl<string | null | undefined>,

		/**
		 * The unique identifier of the high level category.<br><br><b>Applicable containers</b>:  creditCard, investment, insurance, loan<br>
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		highLevelCategoryId: FormControl<string | null | undefined>,

		/** The name of the high level category. A group of similar transaction categories are clubbed together to form a high-level category.<br><br><b>Applicable containers</b>:  creditCard, investment, insurance, loan<br> */
		highLevelCategoryName: FormControl<string | null | undefined>,

		/**
		 * Unique identifier of the category.<br><br><b>Applicable containers</b>:  creditCard, investment, insurance, loan<br>
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		id: FormControl<string | null | undefined>,

		/** Source used to identify whether the transaction category is user defined category or system created category.<br><br><b>Applicable containers</b>:  creditCard, investment, insurance, loan<br><b>Applicable Values</b><br> */
		source: FormControl<AccountAggregationSource | null | undefined>,

		/** Transaction categories and high-level categories are further mapped to five transaction category types. Customers, based on their needs can either use the transaction categories, the high-level categories, or the transaction category types. <br><br><b>Applicable containers</b>:  creditCard, investment, insurance, loan<br><b>Applicable Values</b><br> */
		type: FormControl<DataExtractsTransactionCategoryType | null | undefined>,
	}
	export function CreateTransactionCategoryFormGroup() {
		return new FormGroup<TransactionCategoryFormProperties>({
			category: new FormControl<string | null | undefined>(undefined),
			classification: new FormControl<TransactionCategoryClassification | null | undefined>(undefined),
			defaultCategoryName: new FormControl<string | null | undefined>(undefined),
			defaultHighLevelCategoryName: new FormControl<string | null | undefined>(undefined),
			highLevelCategoryId: new FormControl<string | null | undefined>(undefined),
			highLevelCategoryName: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			source: new FormControl<AccountAggregationSource | null | undefined>(undefined),
			type: new FormControl<DataExtractsTransactionCategoryType | null | undefined>(undefined),
		});

	}

	export enum TransactionCategoryClassification { PERSONAL = 'PERSONAL', BUSINESS = 'BUSINESS' }

	export interface TransactionCategoryRequest {

		/**
		 * Min length: 1
		 * Max length: 50
		 */
		categoryName?: string | null;

		/**
		 * Required
		 * Minimum: 1
		 */
		parentCategoryId: number;
		source?: string | null;
	}
	export interface TransactionCategoryRequestFormProperties {

		/**
		 * Min length: 1
		 * Max length: 50
		 */
		categoryName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Minimum: 1
		 */
		parentCategoryId: FormControl<number | null | undefined>,
		source: FormControl<string | null | undefined>,
	}
	export function CreateTransactionCategoryRequestFormGroup() {
		return new FormGroup<TransactionCategoryRequestFormProperties>({
			categoryName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(50)]),
			parentCategoryId: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(1)]),
			source: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TransactionCategoryResponse {
		transactionCategory?: Array<TransactionCategory>;
	}
	export interface TransactionCategoryResponseFormProperties {
	}
	export function CreateTransactionCategoryResponseFormGroup() {
		return new FormGroup<TransactionCategoryResponseFormProperties>({
		});

	}

	export interface TransactionCount {
		TOTAL?: TransactionTotal;
	}
	export interface TransactionCountFormProperties {
	}
	export function CreateTransactionCountFormGroup() {
		return new FormGroup<TransactionCountFormProperties>({
		});

	}

	export interface TransactionTotal {

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		count?: string | null;
	}
	export interface TransactionTotalFormProperties {

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		count: FormControl<string | null | undefined>,
	}
	export function CreateTransactionTotalFormGroup() {
		return new FormGroup<TransactionTotalFormProperties>({
			count: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TransactionCountResponse {
		transaction?: TransactionCount;
	}
	export interface TransactionCountResponseFormProperties {
	}
	export function CreateTransactionCountResponseFormGroup() {
		return new FormGroup<TransactionCountResponseFormProperties>({
		});

	}

	export interface TransactionRequest {

		/** Required */
		transaction: UpdateTransaction;
	}
	export interface TransactionRequestFormProperties {
	}
	export function CreateTransactionRequestFormGroup() {
		return new FormGroup<TransactionRequestFormProperties>({
		});

	}

	export interface UpdateTransaction {

		/**
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		categoryId: string;

		/** Required */
		categorySource: AccountAggregationSource;

		/** Required */
		container: AccountCONTAINER;
		description?: Description;
		memo?: string | null;
	}
	export interface UpdateTransactionFormProperties {

		/**
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		categoryId: FormControl<string | null | undefined>,

		/** Required */
		categorySource: FormControl<AccountAggregationSource | null | undefined>,

		/** Required */
		container: FormControl<AccountCONTAINER | null | undefined>,
		memo: FormControl<string | null | undefined>,
	}
	export function CreateUpdateTransactionFormGroup() {
		return new FormGroup<UpdateTransactionFormProperties>({
			categoryId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			categorySource: new FormControl<AccountAggregationSource | null | undefined>(undefined, [Validators.required]),
			container: new FormControl<AccountCONTAINER | null | undefined>(undefined, [Validators.required]),
			memo: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TransactionResponse {
		transaction?: Array<Transaction>;
	}
	export interface TransactionResponseFormProperties {
	}
	export function CreateTransactionResponseFormGroup() {
		return new FormGroup<TransactionResponseFormProperties>({
		});

	}

	export interface UpdateAccountInfo {

		/**
		 * Min length: 1
		 * Max length: 100
		 */
		accountName?: string | null;

		/**
		 * Min length: 0
		 * Max length: 100
		 */
		accountNumber?: string | null;
		accountStatus?: AccountAccountStatus | null;
		address?: AccountAddress;
		amountDue?: Money;
		balance?: Money;
		container?: AccountCONTAINER | null;
		dueDate?: string | null;
		frequency?: AccountFrequency | null;
		homeValue?: Money;
		includeInNetWorth?: string | null;
		isEbillEnrolled?: string | null;

		/**
		 * Min length: 0
		 * Max length: 250
		 */
		memo?: string | null;

		/**
		 * Min length: 0
		 * Max length: 50
		 */
		nickname?: string | null;
	}
	export interface UpdateAccountInfoFormProperties {

		/**
		 * Min length: 1
		 * Max length: 100
		 */
		accountName: FormControl<string | null | undefined>,

		/**
		 * Min length: 0
		 * Max length: 100
		 */
		accountNumber: FormControl<string | null | undefined>,
		accountStatus: FormControl<AccountAccountStatus | null | undefined>,
		container: FormControl<AccountCONTAINER | null | undefined>,
		dueDate: FormControl<string | null | undefined>,
		frequency: FormControl<AccountFrequency | null | undefined>,
		includeInNetWorth: FormControl<string | null | undefined>,
		isEbillEnrolled: FormControl<string | null | undefined>,

		/**
		 * Min length: 0
		 * Max length: 250
		 */
		memo: FormControl<string | null | undefined>,

		/**
		 * Min length: 0
		 * Max length: 50
		 */
		nickname: FormControl<string | null | undefined>,
	}
	export function CreateUpdateAccountInfoFormGroup() {
		return new FormGroup<UpdateAccountInfoFormProperties>({
			accountName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(100)]),
			accountNumber: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(100), Validators.pattern('^[a-zA-Z0-9]+$')]),
			accountStatus: new FormControl<AccountAccountStatus | null | undefined>(undefined),
			container: new FormControl<AccountCONTAINER | null | undefined>(undefined),
			dueDate: new FormControl<string | null | undefined>(undefined),
			frequency: new FormControl<AccountFrequency | null | undefined>(undefined),
			includeInNetWorth: new FormControl<string | null | undefined>(undefined),
			isEbillEnrolled: new FormControl<string | null | undefined>(undefined),
			memo: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(250)]),
			nickname: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(50)]),
		});

	}

	export interface UpdateAccountRequest {

		/** Required */
		account: UpdateAccountInfo;
	}
	export interface UpdateAccountRequestFormProperties {
	}
	export function CreateUpdateAccountRequestFormGroup() {
		return new FormGroup<UpdateAccountRequestFormProperties>({
		});

	}

	export interface UpdateCategoryRequest {
		categoryName?: string | null;
		highLevelCategoryName?: string | null;

		/**
		 * Required
		 * Minimum: 1
		 */
		id: string;

		/** Required */
		source: AccountAggregationSource;
	}
	export interface UpdateCategoryRequestFormProperties {
		categoryName: FormControl<string | null | undefined>,
		highLevelCategoryName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Minimum: 1
		 */
		id: FormControl<string | null | undefined>,

		/** Required */
		source: FormControl<AccountAggregationSource | null | undefined>,
	}
	export function CreateUpdateCategoryRequestFormGroup() {
		return new FormGroup<UpdateCategoryRequestFormProperties>({
			categoryName: new FormControl<string | null | undefined>(undefined),
			highLevelCategoryName: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.min(1)]),
			source: new FormControl<AccountAggregationSource | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateCobrandNotificationEvent {

		/**
		 * URL to which the notification should be posted.<br><br><b>Endpoints</b>:<ul><li>GET cobrand/config/notifications/events</li></ul>
		 * Min length: 1
		 * Max length: 2147483647
		 */
		callbackUrl?: string | null;
	}
	export interface UpdateCobrandNotificationEventFormProperties {

		/**
		 * URL to which the notification should be posted.<br><br><b>Endpoints</b>:<ul><li>GET cobrand/config/notifications/events</li></ul>
		 * Min length: 1
		 * Max length: 2147483647
		 */
		callbackUrl: FormControl<string | null | undefined>,
	}
	export function CreateUpdateCobrandNotificationEventFormGroup() {
		return new FormGroup<UpdateCobrandNotificationEventFormProperties>({
			callbackUrl: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2147483647)]),
		});

	}

	export interface UpdateCobrandNotificationEventRequest {

		/** Required */
		event: UpdateCobrandNotificationEvent;
	}
	export interface UpdateCobrandNotificationEventRequestFormProperties {
	}
	export function CreateUpdateCobrandNotificationEventRequestFormGroup() {
		return new FormGroup<UpdateCobrandNotificationEventRequestFormProperties>({
		});

	}

	export interface UpdateConfigsNotificationEvent {

		/**
		 * URL to which the notification should be posted.<br><br><b>Endpoints</b>:<ul><li>GET configs/notifications/events</li></ul>
		 * Min length: 1
		 * Max length: 2147483647
		 */
		callbackUrl?: string | null;
	}
	export interface UpdateConfigsNotificationEventFormProperties {

		/**
		 * URL to which the notification should be posted.<br><br><b>Endpoints</b>:<ul><li>GET configs/notifications/events</li></ul>
		 * Min length: 1
		 * Max length: 2147483647
		 */
		callbackUrl: FormControl<string | null | undefined>,
	}
	export function CreateUpdateConfigsNotificationEventFormGroup() {
		return new FormGroup<UpdateConfigsNotificationEventFormProperties>({
			callbackUrl: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2147483647)]),
		});

	}

	export interface UpdateConfigsNotificationEventRequest {

		/** Required */
		event: UpdateConfigsNotificationEvent;
	}
	export interface UpdateConfigsNotificationEventRequestFormProperties {
	}
	export function CreateUpdateConfigsNotificationEventRequestFormGroup() {
		return new FormGroup<UpdateConfigsNotificationEventRequestFormProperties>({
		});

	}

	export interface UpdateUserRegistration {
		address?: UserAddress;
		email?: string | null;
		name?: Name;
		preferences?: UserRequestPreferences;
		segmentName?: string | null;
	}
	export interface UpdateUserRegistrationFormProperties {
		email: FormControl<string | null | undefined>,
		segmentName: FormControl<string | null | undefined>,
	}
	export function CreateUpdateUserRegistrationFormGroup() {
		return new FormGroup<UpdateUserRegistrationFormProperties>({
			email: new FormControl<string | null | undefined>(undefined),
			segmentName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UserAddress {
		address1?: string | null;
		address2?: string | null;
		address3?: string | null;
		city?: string | null;
		country?: string | null;
		state?: string | null;
		zip?: string | null;
	}
	export interface UserAddressFormProperties {
		address1: FormControl<string | null | undefined>,
		address2: FormControl<string | null | undefined>,
		address3: FormControl<string | null | undefined>,
		city: FormControl<string | null | undefined>,
		country: FormControl<string | null | undefined>,
		state: FormControl<string | null | undefined>,
		zip: FormControl<string | null | undefined>,
	}
	export function CreateUserAddressFormGroup() {
		return new FormGroup<UserAddressFormProperties>({
			address1: new FormControl<string | null | undefined>(undefined),
			address2: new FormControl<string | null | undefined>(undefined),
			address3: new FormControl<string | null | undefined>(undefined),
			city: new FormControl<string | null | undefined>(undefined),
			country: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<string | null | undefined>(undefined),
			zip: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UserRequestPreferences {

		/** The currency of the user. This currency will be respected while providing the response for derived API services.<br><b>Applicable Values</b><br> */
		currency?: MoneyCurrency | null;

		/**
		 * The dateformat of the user.This attribute is just a place holder and has no impact on any other API services.
		 * Min length: 1
		 * Max length: 2147483647
		 */
		dateFormat?: string | null;

		/** The locale of the user. This locale will be considered for localization features like providing the provider information in the supported locale or providing category names in the transaction related services.<br><b>Applicable Values</b><br> */
		locale?: UserRequestPreferencesLocale | null;

		/**
		 * The timezone of the user. This attribute is just a place holder and has no impact on any other API services.
		 * Min length: 1
		 * Max length: 2147483647
		 */
		timeZone?: string | null;
	}
	export interface UserRequestPreferencesFormProperties {

		/** The currency of the user. This currency will be respected while providing the response for derived API services.<br><b>Applicable Values</b><br> */
		currency: FormControl<MoneyCurrency | null | undefined>,

		/**
		 * The dateformat of the user.This attribute is just a place holder and has no impact on any other API services.
		 * Min length: 1
		 * Max length: 2147483647
		 */
		dateFormat: FormControl<string | null | undefined>,

		/** The locale of the user. This locale will be considered for localization features like providing the provider information in the supported locale or providing category names in the transaction related services.<br><b>Applicable Values</b><br> */
		locale: FormControl<UserRequestPreferencesLocale | null | undefined>,

		/**
		 * The timezone of the user. This attribute is just a place holder and has no impact on any other API services.
		 * Min length: 1
		 * Max length: 2147483647
		 */
		timeZone: FormControl<string | null | undefined>,
	}
	export function CreateUserRequestPreferencesFormGroup() {
		return new FormGroup<UserRequestPreferencesFormProperties>({
			currency: new FormControl<MoneyCurrency | null | undefined>(undefined),
			dateFormat: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2147483647)]),
			locale: new FormControl<UserRequestPreferencesLocale | null | undefined>(undefined),
			timeZone: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2147483647)]),
		});

	}

	export enum UserRequestPreferencesLocale { en_US = 'en_US', en_ES = 'en_ES', fr_CA = 'fr_CA', zh_CN = 'zh_CN' }

	export interface UpdateUserRequest {

		/** Required */
		user: UpdateUserRegistration;
	}
	export interface UpdateUserRequestFormProperties {
	}
	export function CreateUpdateUserRequestFormGroup() {
		return new FormGroup<UpdateUserRequestFormProperties>({
		});

	}

	export interface UpdateVerification {
		account?: VerificationAccount;

		/**
		 * Unique identifier for the account.<br><br><b>Endpoints</b>:<ul><li>POST verification</li><li>GET verification</li><li>PUT verification</li></ul>
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		accountId?: string | null;

		/**
		 * Unique identifier for the provider account.<br><br><b>Endpoints</b>:<ul><li>POST verification</li><li>GET verification</li><li>PUT verification</li></ul>
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		providerAccountId?: string | null;

		/** The reason the account verification failed.<br><br><b>Endpoints</b>:<ul><li>POST verification</li><li>GET verification</li><li>PUT verification</li></ul> */
		reason?: UpdateVerificationReason | null;

		/** Required */
		transaction: Array<VerificationTransaction>;

		/** The date of the account verification.<br><br><b>Endpoints</b>:<ul><li>POST verification</li><li>GET verification</li><li>PUT verification</li></ul> */
		verificationDate?: string | null;

		/**
		 * Unique identifier for the verification request.<br><br><b>Endpoints</b>:<ul><li>POST verification</li><li>GET verification</li><li>PUT verification</li></ul>
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		verificationId?: string | null;

		/** The status of the account verification.<br><br><b>Endpoints</b>:<ul><li>POST verification</li><li>GET verification</li><li>PUT verification</li></ul><br><b>Applicable Values</b> */
		verificationStatus?: UpdateVerificationVerificationStatus | null;

		/** The account verification type.<br><br><b>Endpoints</b>:<ul><li>POST verification</li><li>GET verification</li><li>PUT verification</li></ul><br><b>Applicable Values</b> */
		verificationType?: UpdateVerificationVerificationType | null;
	}
	export interface UpdateVerificationFormProperties {

		/**
		 * Unique identifier for the account.<br><br><b>Endpoints</b>:<ul><li>POST verification</li><li>GET verification</li><li>PUT verification</li></ul>
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		accountId: FormControl<string | null | undefined>,

		/**
		 * Unique identifier for the provider account.<br><br><b>Endpoints</b>:<ul><li>POST verification</li><li>GET verification</li><li>PUT verification</li></ul>
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		providerAccountId: FormControl<string | null | undefined>,

		/** The reason the account verification failed.<br><br><b>Endpoints</b>:<ul><li>POST verification</li><li>GET verification</li><li>PUT verification</li></ul> */
		reason: FormControl<UpdateVerificationReason | null | undefined>,

		/** The date of the account verification.<br><br><b>Endpoints</b>:<ul><li>POST verification</li><li>GET verification</li><li>PUT verification</li></ul> */
		verificationDate: FormControl<string | null | undefined>,

		/**
		 * Unique identifier for the verification request.<br><br><b>Endpoints</b>:<ul><li>POST verification</li><li>GET verification</li><li>PUT verification</li></ul>
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		verificationId: FormControl<string | null | undefined>,

		/** The status of the account verification.<br><br><b>Endpoints</b>:<ul><li>POST verification</li><li>GET verification</li><li>PUT verification</li></ul><br><b>Applicable Values</b> */
		verificationStatus: FormControl<UpdateVerificationVerificationStatus | null | undefined>,

		/** The account verification type.<br><br><b>Endpoints</b>:<ul><li>POST verification</li><li>GET verification</li><li>PUT verification</li></ul><br><b>Applicable Values</b> */
		verificationType: FormControl<UpdateVerificationVerificationType | null | undefined>,
	}
	export function CreateUpdateVerificationFormGroup() {
		return new FormGroup<UpdateVerificationFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
			providerAccountId: new FormControl<string | null | undefined>(undefined),
			reason: new FormControl<UpdateVerificationReason | null | undefined>(undefined),
			verificationDate: new FormControl<string | null | undefined>(undefined),
			verificationId: new FormControl<string | null | undefined>(undefined),
			verificationStatus: new FormControl<UpdateVerificationVerificationStatus | null | undefined>(undefined),
			verificationType: new FormControl<UpdateVerificationVerificationType | null | undefined>(undefined),
		});

	}

	export interface VerificationAccount {
		accountName?: string | null;

		/**
		 * Required
		 * Min length: 3
		 * Max length: 17
		 */
		accountNumber: string;

		/** Required */
		accountType: VerificationAccountAccountType;

		/** Required */
		bankTransferCode: VerificationBankTransferCode;
	}
	export interface VerificationAccountFormProperties {
		accountName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 3
		 * Max length: 17
		 */
		accountNumber: FormControl<string | null | undefined>,

		/** Required */
		accountType: FormControl<VerificationAccountAccountType | null | undefined>,
	}
	export function CreateVerificationAccountFormGroup() {
		return new FormGroup<VerificationAccountFormProperties>({
			accountName: new FormControl<string | null | undefined>(undefined),
			accountNumber: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(3), Validators.maxLength(17)]),
			accountType: new FormControl<VerificationAccountAccountType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum VerificationAccountAccountType { SAVINGS = 'SAVINGS', CHECKING = 'CHECKING' }

	export interface VerificationBankTransferCode {

		/** The FI's branch identification number.Additional Details: The routing number of the bank account in the United States. For non-United States accounts, it is the IFSC code (India), BSB number (Australia), and sort code (United Kingdom). <br><b>Account Type</b>: Aggregated<br><b>Applicable containers</b>: bank, investment<br><b>Endpoints</b>:<br><ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>POST verification</li></ul> */
		id?: string | null;

		/** The bank transfer code type varies depending on the region of the account origination. <br><b>Account Type</b>: Aggregated<br><b>Applicable containers</b>: bank, investment<br><b>Endpoints</b>:<br><ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>POST verification</li></ul><b>Applicable Values</b><br> */
		type?: BankTransferCodeType | null;
	}
	export interface VerificationBankTransferCodeFormProperties {

		/** The FI's branch identification number.Additional Details: The routing number of the bank account in the United States. For non-United States accounts, it is the IFSC code (India), BSB number (Australia), and sort code (United Kingdom). <br><b>Account Type</b>: Aggregated<br><b>Applicable containers</b>: bank, investment<br><b>Endpoints</b>:<br><ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>POST verification</li></ul> */
		id: FormControl<string | null | undefined>,

		/** The bank transfer code type varies depending on the region of the account origination. <br><b>Account Type</b>: Aggregated<br><b>Applicable containers</b>: bank, investment<br><b>Endpoints</b>:<br><ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>POST verification</li></ul><b>Applicable Values</b><br> */
		type: FormControl<BankTransferCodeType | null | undefined>,
	}
	export function CreateVerificationBankTransferCodeFormGroup() {
		return new FormGroup<VerificationBankTransferCodeFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<BankTransferCodeType | null | undefined>(undefined),
		});

	}

	export enum UpdateVerificationReason { DATA_NOT_AVAILABLE = 'DATA_NOT_AVAILABLE', ACCOUNT_HOLDER_MISMATCH = 'ACCOUNT_HOLDER_MISMATCH', FULL_ACCOUNT_NUMBER_AND_BANK_TRANSFER_CODE_NOT_AVAILABLE = 'FULL_ACCOUNT_NUMBER_AND_BANK_TRANSFER_CODE_NOT_AVAILABLE', FULL_ACCOUNT_NUMBER_NOT_AVAILABLE = 'FULL_ACCOUNT_NUMBER_NOT_AVAILABLE', BANK_TRANSFER_CODE_NOT_AVAILABLE = 'BANK_TRANSFER_CODE_NOT_AVAILABLE', EXPIRED = 'EXPIRED', DATA_MISMATCH = 'DATA_MISMATCH', INSTRUCTION_GENERATION_ERROR = 'INSTRUCTION_GENERATION_ERROR' }

	export interface VerificationTransaction {

		/** Required */
		amount: Money;

		/** Required */
		baseType: DataExtractsTransactionBaseType;
	}
	export interface VerificationTransactionFormProperties {

		/** Required */
		baseType: FormControl<DataExtractsTransactionBaseType | null | undefined>,
	}
	export function CreateVerificationTransactionFormGroup() {
		return new FormGroup<VerificationTransactionFormProperties>({
			baseType: new FormControl<DataExtractsTransactionBaseType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum UpdateVerificationVerificationStatus { INITIATED = 'INITIATED', DEPOSITED = 'DEPOSITED', SUCCESS = 'SUCCESS', FAILED = 'FAILED' }

	export enum UpdateVerificationVerificationType { MATCHING = 'MATCHING', CHALLENGE_DEPOSIT = 'CHALLENGE_DEPOSIT' }

	export interface UpdateVerificationRequest {
		verification?: UpdateVerification;
	}
	export interface UpdateVerificationRequestFormProperties {
	}
	export function CreateUpdateVerificationRequestFormGroup() {
		return new FormGroup<UpdateVerificationRequestFormProperties>({
		});

	}

	export interface UpdatedProviderAccount {

		/** The source through which the providerAccount is added in the system.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts</li><li>POST providerAccounts</li><li>PUT providerAccounts/{providerAccountId}</li><li>GET providerAccounts/{providerAccountId}</li><li>GET dataExtracts/userData</li></ul><b>Applicable Values</b><br> */
		aggregationSource?: AccountAggregationSource | null;

		/** The date on when the provider account is created in the system.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts</li><li>POST providerAccounts</li><li>PUT providerAccounts/{providerAccountId}</li><li>GET providerAccounts/{providerAccountId}</li><li>GET dataExtracts/userData</li></ul> */
		createdDate?: string | null;

		/** Logical grouping of dataset attributes into datasets such as Basic Aggregation Data, Account Profile and Documents.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts</li><li>POST providerAccounts</li><li>PUT providerAccounts/{providerAccountId}</li><li>GET providerAccounts/{providerAccountId}</li><li>GET dataExtracts/userData</li></ul> */
		dataset?: Array<AccountDataset>;

		/**
		 * Unique identifier for the provider account resource. This is created during account addition.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts</li><li>POST providerAccounts</li><li>PUT providerAccounts/{providerAccountId}</li><li>GET providerAccounts/{providerAccountId}</li><li>GET dataExtracts/userData</li></ul>
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		id?: string | null;

		/** Indicates whether account is a manual or aggregated provider account.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts</li><li>POST providerAccounts</li><li>PUT providerAccounts/{providerAccountId}</li><li>GET providerAccounts/{providerAccountId}</li><li>GET dataExtracts/userData</li></ul> */
		isManual?: boolean | null;

		/** Indicate when the providerAccount is last updated successfully.<br><br><b>Account Type</b>: Aggregated<br><b>Endpoints</b>:<ul><li>GET dataExtracts/userData</li></ul> */
		lastUpdated?: string | null;

		/** This entity gets returned in the response for only MFA based provider accounts during the add/update account polling process. This indicates that the MFA information is expected from the user to complete the process. This represents the structure of MFA form that is displayed to the user in the provider site.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts</li><li>POST providerAccounts</li><li>PUT providerAccounts/{providerAccountId}</li><li>GET providerAccounts/{providerAccountId}</li></ul> */
		loginForm?: Array<LoginForm>;

		/** Indicates the migration status of the provider account from screen-scraping provider to the Open Banking provider. <br><br><b>Endpoints</b>:<ul><li>GET providerAccounts</li><li>GET providerAccounts/{providerAccountId}</li><li>PUT providerAccounts/{providerAccountId}</li><li>GET dataExtracts/userData</li></ul> */
		oauthMigrationStatus?: AccountOauthMigrationStatus | null;

		/**
		 * Unique identifier for the provider resource. This denotes the provider for which the provider account id is generated by the user.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts</li><li>POST providerAccounts</li><li>PUT providerAccounts/{providerAccountId}</li><li>GET providerAccounts/{providerAccountId}</li><li>GET dataExtracts/userData</li></ul>
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		providerId?: string | null;

		/** Unique id generated to indicate the request.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts</li><li>POST providerAccounts</li><li>PUT providerAccounts/{providerAccountId}</li><li>GET providerAccounts/{providerAccountId}</li></ul> */
		requestId?: string | null;

		/** The status of last update attempted for the account. <br><br><b>Endpoints</b>:<ul><li>GET providerAccounts</li><li>POST providerAccounts</li><li>PUT providerAccounts/{providerAccountId}</li><li>GET providerAccounts/{providerAccountId}</li><li>GET dataExtracts/userData</li></ul><b>Applicable Values</b><br> */
		status?: DataExtractsProviderAccountStatus | null;
	}
	export interface UpdatedProviderAccountFormProperties {

		/** The source through which the providerAccount is added in the system.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts</li><li>POST providerAccounts</li><li>PUT providerAccounts/{providerAccountId}</li><li>GET providerAccounts/{providerAccountId}</li><li>GET dataExtracts/userData</li></ul><b>Applicable Values</b><br> */
		aggregationSource: FormControl<AccountAggregationSource | null | undefined>,

		/** The date on when the provider account is created in the system.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts</li><li>POST providerAccounts</li><li>PUT providerAccounts/{providerAccountId}</li><li>GET providerAccounts/{providerAccountId}</li><li>GET dataExtracts/userData</li></ul> */
		createdDate: FormControl<string | null | undefined>,

		/**
		 * Unique identifier for the provider account resource. This is created during account addition.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts</li><li>POST providerAccounts</li><li>PUT providerAccounts/{providerAccountId}</li><li>GET providerAccounts/{providerAccountId}</li><li>GET dataExtracts/userData</li></ul>
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		id: FormControl<string | null | undefined>,

		/** Indicates whether account is a manual or aggregated provider account.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts</li><li>POST providerAccounts</li><li>PUT providerAccounts/{providerAccountId}</li><li>GET providerAccounts/{providerAccountId}</li><li>GET dataExtracts/userData</li></ul> */
		isManual: FormControl<boolean | null | undefined>,

		/** Indicate when the providerAccount is last updated successfully.<br><br><b>Account Type</b>: Aggregated<br><b>Endpoints</b>:<ul><li>GET dataExtracts/userData</li></ul> */
		lastUpdated: FormControl<string | null | undefined>,

		/** Indicates the migration status of the provider account from screen-scraping provider to the Open Banking provider. <br><br><b>Endpoints</b>:<ul><li>GET providerAccounts</li><li>GET providerAccounts/{providerAccountId}</li><li>PUT providerAccounts/{providerAccountId}</li><li>GET dataExtracts/userData</li></ul> */
		oauthMigrationStatus: FormControl<AccountOauthMigrationStatus | null | undefined>,

		/**
		 * Unique identifier for the provider resource. This denotes the provider for which the provider account id is generated by the user.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts</li><li>POST providerAccounts</li><li>PUT providerAccounts/{providerAccountId}</li><li>GET providerAccounts/{providerAccountId}</li><li>GET dataExtracts/userData</li></ul>
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		providerId: FormControl<string | null | undefined>,

		/** Unique id generated to indicate the request.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts</li><li>POST providerAccounts</li><li>PUT providerAccounts/{providerAccountId}</li><li>GET providerAccounts/{providerAccountId}</li></ul> */
		requestId: FormControl<string | null | undefined>,

		/** The status of last update attempted for the account. <br><br><b>Endpoints</b>:<ul><li>GET providerAccounts</li><li>POST providerAccounts</li><li>PUT providerAccounts/{providerAccountId}</li><li>GET providerAccounts/{providerAccountId}</li><li>GET dataExtracts/userData</li></ul><b>Applicable Values</b><br> */
		status: FormControl<DataExtractsProviderAccountStatus | null | undefined>,
	}
	export function CreateUpdatedProviderAccountFormGroup() {
		return new FormGroup<UpdatedProviderAccountFormProperties>({
			aggregationSource: new FormControl<AccountAggregationSource | null | undefined>(undefined),
			createdDate: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			isManual: new FormControl<boolean | null | undefined>(undefined),
			lastUpdated: new FormControl<string | null | undefined>(undefined),
			oauthMigrationStatus: new FormControl<AccountOauthMigrationStatus | null | undefined>(undefined),
			providerId: new FormControl<string | null | undefined>(undefined),
			requestId: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<DataExtractsProviderAccountStatus | null | undefined>(undefined),
		});

	}

	export interface UpdatedProviderAccountResponse {
		providerAccount?: Array<UpdatedProviderAccount>;
	}
	export interface UpdatedProviderAccountResponseFormProperties {
	}
	export function CreateUpdatedProviderAccountResponseFormGroup() {
		return new FormGroup<UpdatedProviderAccountResponseFormProperties>({
		});

	}

	export interface User {

		/**
		 * The unique identifier of a consumer/user in Yodlee system for whom the API services would be accessed for.<br><br><b>Endpoints</b>:<ul><li>POST user/samlLogin</li><li>POST user/register</li><li>GET user</li></ul>
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		id?: string | null;

		/** The login name of the user used for authentication.<br><br><b>Endpoints</b>:<ul><li>POST user/register</li><li>GET user</li></ul> */
		loginName?: string | null;
		name?: Name;
		preferences?: UserResponsePreferences;
		roleType?: UserRoleType | null;
		session?: UserSession;
	}
	export interface UserFormProperties {

		/**
		 * The unique identifier of a consumer/user in Yodlee system for whom the API services would be accessed for.<br><br><b>Endpoints</b>:<ul><li>POST user/samlLogin</li><li>POST user/register</li><li>GET user</li></ul>
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		id: FormControl<string | null | undefined>,

		/** The login name of the user used for authentication.<br><br><b>Endpoints</b>:<ul><li>POST user/register</li><li>GET user</li></ul> */
		loginName: FormControl<string | null | undefined>,
		roleType: FormControl<UserRoleType | null | undefined>,
	}
	export function CreateUserFormGroup() {
		return new FormGroup<UserFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			loginName: new FormControl<string | null | undefined>(undefined),
			roleType: new FormControl<UserRoleType | null | undefined>(undefined),
		});

	}

	export interface UserResponsePreferences {

		/** The currency of the user. This currency will be respected while providing the response for derived API services.<br><b>Applicable Values</b><br> */
		currency?: MoneyCurrency | null;

		/**
		 * The dateformat of the user.This attribute is just a place holder and has no impact on any other API services.
		 * Min length: 1
		 * Max length: 2147483647
		 */
		dateFormat?: string | null;

		/** The locale of the user. This locale will be considered for localization features like providing the provider information in the supported locale or providing category names in the transaction related services.<br><b>Applicable Values</b><br> */
		locale?: UserRequestPreferencesLocale | null;

		/**
		 * The timezone of the user. This attribute is just a place holder and has no impact on any other API services.
		 * Min length: 1
		 * Max length: 2147483647
		 */
		timeZone?: string | null;
	}
	export interface UserResponsePreferencesFormProperties {

		/** The currency of the user. This currency will be respected while providing the response for derived API services.<br><b>Applicable Values</b><br> */
		currency: FormControl<MoneyCurrency | null | undefined>,

		/**
		 * The dateformat of the user.This attribute is just a place holder and has no impact on any other API services.
		 * Min length: 1
		 * Max length: 2147483647
		 */
		dateFormat: FormControl<string | null | undefined>,

		/** The locale of the user. This locale will be considered for localization features like providing the provider information in the supported locale or providing category names in the transaction related services.<br><b>Applicable Values</b><br> */
		locale: FormControl<UserRequestPreferencesLocale | null | undefined>,

		/**
		 * The timezone of the user. This attribute is just a place holder and has no impact on any other API services.
		 * Min length: 1
		 * Max length: 2147483647
		 */
		timeZone: FormControl<string | null | undefined>,
	}
	export function CreateUserResponsePreferencesFormGroup() {
		return new FormGroup<UserResponsePreferencesFormProperties>({
			currency: new FormControl<MoneyCurrency | null | undefined>(undefined),
			dateFormat: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2147483647)]),
			locale: new FormControl<UserRequestPreferencesLocale | null | undefined>(undefined),
			timeZone: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2147483647)]),
		});

	}

	export enum UserRoleType { INDIVIDUAL = 'INDIVIDUAL' }

	export interface UserSession {

		/** Session provided for a valid user to access API services upon successful authentication.<br><br><b>Endpoints</b>:<ul><li>POST user/samlLogin</li><li>POST user/register</li></ul> */
		userSession?: string | null;
	}
	export interface UserSessionFormProperties {

		/** Session provided for a valid user to access API services upon successful authentication.<br><br><b>Endpoints</b>:<ul><li>POST user/samlLogin</li><li>POST user/register</li></ul> */
		userSession: FormControl<string | null | undefined>,
	}
	export function CreateUserSessionFormGroup() {
		return new FormGroup<UserSessionFormProperties>({
			userSession: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UserAccessToken {
		accessTokens?: Array<AccessTokens>;
	}
	export interface UserAccessTokenFormProperties {
	}
	export function CreateUserAccessTokenFormGroup() {
		return new FormGroup<UserAccessTokenFormProperties>({
		});

	}

	export interface UserAccessTokensResponse {
		user?: UserAccessToken;
	}
	export interface UserAccessTokensResponseFormProperties {
	}
	export function CreateUserAccessTokensResponseFormGroup() {
		return new FormGroup<UserAccessTokensResponseFormProperties>({
		});

	}

	export interface UserDetail {
		address?: UserAddress;

		/** The email address of the user.<br><br><b>Endpoints</b>:<ul><li>GET user</li></ul> */
		email?: string | null;

		/**
		 * The unique identifier of a consumer/user in Yodlee system for whom the API services would be accessed for.<br><br><b>Endpoints</b>:<ul><li>POST user/samlLogin</li><li>POST user/register</li><li>GET user</li></ul>
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		id?: string | null;

		/** The login name of the user used for authentication.<br><br><b>Endpoints</b>:<ul><li>POST user/register</li><li>GET user</li></ul> */
		loginName?: string | null;
		name?: Name;
		preferences?: UserResponsePreferences;
		roleType?: UserRoleType | null;
		segmentName?: string | null;
	}
	export interface UserDetailFormProperties {

		/** The email address of the user.<br><br><b>Endpoints</b>:<ul><li>GET user</li></ul> */
		email: FormControl<string | null | undefined>,

		/**
		 * The unique identifier of a consumer/user in Yodlee system for whom the API services would be accessed for.<br><br><b>Endpoints</b>:<ul><li>POST user/samlLogin</li><li>POST user/register</li><li>GET user</li></ul>
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		id: FormControl<string | null | undefined>,

		/** The login name of the user used for authentication.<br><br><b>Endpoints</b>:<ul><li>POST user/register</li><li>GET user</li></ul> */
		loginName: FormControl<string | null | undefined>,
		roleType: FormControl<UserRoleType | null | undefined>,
		segmentName: FormControl<string | null | undefined>,
	}
	export function CreateUserDetailFormGroup() {
		return new FormGroup<UserDetailFormProperties>({
			email: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			loginName: new FormControl<string | null | undefined>(undefined),
			roleType: new FormControl<UserRoleType | null | undefined>(undefined),
			segmentName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UserDetailResponse {
		user?: UserDetail;
	}
	export interface UserDetailResponseFormProperties {
	}
	export function CreateUserDetailResponseFormGroup() {
		return new FormGroup<UserDetailResponseFormProperties>({
		});

	}

	export interface UserRegistration {
		address?: UserAddress;
		email?: string | null;

		/**
		 * Required
		 * Min length: 3
		 * Max length: 150
		 */
		loginName: string;
		name?: Name;
		preferences?: UserRequestPreferences;
		segmentName?: string | null;
	}
	export interface UserRegistrationFormProperties {
		email: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 3
		 * Max length: 150
		 */
		loginName: FormControl<string | null | undefined>,
		segmentName: FormControl<string | null | undefined>,
	}
	export function CreateUserRegistrationFormGroup() {
		return new FormGroup<UserRegistrationFormProperties>({
			email: new FormControl<string | null | undefined>(undefined),
			loginName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(3), Validators.maxLength(150)]),
			segmentName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UserRequest {

		/** Required */
		user: UserRegistration;
	}
	export interface UserRequestFormProperties {
	}
	export function CreateUserRequestFormGroup() {
		return new FormGroup<UserRequestFormProperties>({
		});

	}

	export interface UserResponse {
		user?: User;
	}
	export interface UserResponseFormProperties {
	}
	export function CreateUserResponseFormGroup() {
		return new FormGroup<UserResponseFormProperties>({
		});

	}

	export interface Verification {
		account?: VerificationAccount;

		/**
		 * Unique identifier for the account.<br><br><b>Endpoints</b>:<ul><li>POST verification</li><li>GET verification</li><li>PUT verification</li></ul>
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		accountId?: string | null;

		/**
		 * Unique identifier for the provider account.<br><br><b>Endpoints</b>:<ul><li>POST verification</li><li>GET verification</li><li>PUT verification</li></ul>
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		providerAccountId?: string | null;

		/** The reason the account verification failed.<br><br><b>Endpoints</b>:<ul><li>POST verification</li><li>GET verification</li><li>PUT verification</li></ul> */
		reason?: UpdateVerificationReason | null;

		/** The date of the account verification.<br><br><b>Endpoints</b>:<ul><li>POST verification</li><li>GET verification</li><li>PUT verification</li></ul> */
		verificationDate?: string | null;

		/**
		 * Unique identifier for the verification request.<br><br><b>Endpoints</b>:<ul><li>POST verification</li><li>GET verification</li><li>PUT verification</li></ul>
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		verificationId?: string | null;

		/** The status of the account verification.<br><br><b>Endpoints</b>:<ul><li>POST verification</li><li>GET verification</li><li>PUT verification</li></ul><br><b>Applicable Values</b> */
		verificationStatus?: UpdateVerificationVerificationStatus | null;

		/** The account verification type.<br><br><b>Endpoints</b>:<ul><li>POST verification</li><li>GET verification</li><li>PUT verification</li></ul><br><b>Applicable Values</b> */
		verificationType?: UpdateVerificationVerificationType | null;
	}
	export interface VerificationFormProperties {

		/**
		 * Unique identifier for the account.<br><br><b>Endpoints</b>:<ul><li>POST verification</li><li>GET verification</li><li>PUT verification</li></ul>
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		accountId: FormControl<string | null | undefined>,

		/**
		 * Unique identifier for the provider account.<br><br><b>Endpoints</b>:<ul><li>POST verification</li><li>GET verification</li><li>PUT verification</li></ul>
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		providerAccountId: FormControl<string | null | undefined>,

		/** The reason the account verification failed.<br><br><b>Endpoints</b>:<ul><li>POST verification</li><li>GET verification</li><li>PUT verification</li></ul> */
		reason: FormControl<UpdateVerificationReason | null | undefined>,

		/** The date of the account verification.<br><br><b>Endpoints</b>:<ul><li>POST verification</li><li>GET verification</li><li>PUT verification</li></ul> */
		verificationDate: FormControl<string | null | undefined>,

		/**
		 * Unique identifier for the verification request.<br><br><b>Endpoints</b>:<ul><li>POST verification</li><li>GET verification</li><li>PUT verification</li></ul>
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		verificationId: FormControl<string | null | undefined>,

		/** The status of the account verification.<br><br><b>Endpoints</b>:<ul><li>POST verification</li><li>GET verification</li><li>PUT verification</li></ul><br><b>Applicable Values</b> */
		verificationStatus: FormControl<UpdateVerificationVerificationStatus | null | undefined>,

		/** The account verification type.<br><br><b>Endpoints</b>:<ul><li>POST verification</li><li>GET verification</li><li>PUT verification</li></ul><br><b>Applicable Values</b> */
		verificationType: FormControl<UpdateVerificationVerificationType | null | undefined>,
	}
	export function CreateVerificationFormGroup() {
		return new FormGroup<VerificationFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
			providerAccountId: new FormControl<string | null | undefined>(undefined),
			reason: new FormControl<UpdateVerificationReason | null | undefined>(undefined),
			verificationDate: new FormControl<string | null | undefined>(undefined),
			verificationId: new FormControl<string | null | undefined>(undefined),
			verificationStatus: new FormControl<UpdateVerificationVerificationStatus | null | undefined>(undefined),
			verificationType: new FormControl<UpdateVerificationVerificationType | null | undefined>(undefined),
		});

	}

	export interface VerificationRequest {

		/** Required */
		verification: Verification;
	}
	export interface VerificationRequestFormProperties {
	}
	export function CreateVerificationRequestFormGroup() {
		return new FormGroup<VerificationRequestFormProperties>({
		});

	}

	export interface VerificationResponse {
		verification?: Array<Verification>;
	}
	export interface VerificationResponseFormProperties {
	}
	export function CreateVerificationResponseFormGroup() {
		return new FormGroup<VerificationResponseFormProperties>({
		});

	}

	export interface VerificationStatus {
		account?: VerificationAccount;

		/**
		 * Unique identifier for the account.<br><br><b>Endpoints</b>:<ul><li>POST verification</li><li>GET verification</li><li>PUT verification</li></ul>
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		accountId?: string | null;

		/**
		 * Unique identifier for the provider account.<br><br><b>Endpoints</b>:<ul><li>POST verification</li><li>GET verification</li><li>PUT verification</li></ul>
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		providerAccountId?: string | null;

		/** The reason the account verification failed.<br><br><b>Endpoints</b>:<ul><li>POST verification</li><li>GET verification</li><li>PUT verification</li></ul> */
		reason?: UpdateVerificationReason | null;

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		remainingAttempts?: string | null;

		/** The date of the account verification.<br><br><b>Endpoints</b>:<ul><li>POST verification</li><li>GET verification</li><li>PUT verification</li></ul> */
		verificationDate?: string | null;

		/**
		 * Unique identifier for the verification request.<br><br><b>Endpoints</b>:<ul><li>POST verification</li><li>GET verification</li><li>PUT verification</li></ul>
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		verificationId?: string | null;

		/** The status of the account verification.<br><br><b>Endpoints</b>:<ul><li>POST verification</li><li>GET verification</li><li>PUT verification</li></ul><br><b>Applicable Values</b> */
		verificationStatus?: UpdateVerificationVerificationStatus | null;

		/** The account verification type.<br><br><b>Endpoints</b>:<ul><li>POST verification</li><li>GET verification</li><li>PUT verification</li></ul><br><b>Applicable Values</b> */
		verificationType?: UpdateVerificationVerificationType | null;
	}
	export interface VerificationStatusFormProperties {

		/**
		 * Unique identifier for the account.<br><br><b>Endpoints</b>:<ul><li>POST verification</li><li>GET verification</li><li>PUT verification</li></ul>
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		accountId: FormControl<string | null | undefined>,

		/**
		 * Unique identifier for the provider account.<br><br><b>Endpoints</b>:<ul><li>POST verification</li><li>GET verification</li><li>PUT verification</li></ul>
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		providerAccountId: FormControl<string | null | undefined>,

		/** The reason the account verification failed.<br><br><b>Endpoints</b>:<ul><li>POST verification</li><li>GET verification</li><li>PUT verification</li></ul> */
		reason: FormControl<UpdateVerificationReason | null | undefined>,

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		remainingAttempts: FormControl<string | null | undefined>,

		/** The date of the account verification.<br><br><b>Endpoints</b>:<ul><li>POST verification</li><li>GET verification</li><li>PUT verification</li></ul> */
		verificationDate: FormControl<string | null | undefined>,

		/**
		 * Unique identifier for the verification request.<br><br><b>Endpoints</b>:<ul><li>POST verification</li><li>GET verification</li><li>PUT verification</li></ul>
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		verificationId: FormControl<string | null | undefined>,

		/** The status of the account verification.<br><br><b>Endpoints</b>:<ul><li>POST verification</li><li>GET verification</li><li>PUT verification</li></ul><br><b>Applicable Values</b> */
		verificationStatus: FormControl<UpdateVerificationVerificationStatus | null | undefined>,

		/** The account verification type.<br><br><b>Endpoints</b>:<ul><li>POST verification</li><li>GET verification</li><li>PUT verification</li></ul><br><b>Applicable Values</b> */
		verificationType: FormControl<UpdateVerificationVerificationType | null | undefined>,
	}
	export function CreateVerificationStatusFormGroup() {
		return new FormGroup<VerificationStatusFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
			providerAccountId: new FormControl<string | null | undefined>(undefined),
			reason: new FormControl<UpdateVerificationReason | null | undefined>(undefined),
			remainingAttempts: new FormControl<string | null | undefined>(undefined),
			verificationDate: new FormControl<string | null | undefined>(undefined),
			verificationId: new FormControl<string | null | undefined>(undefined),
			verificationStatus: new FormControl<UpdateVerificationVerificationStatus | null | undefined>(undefined),
			verificationType: new FormControl<UpdateVerificationVerificationType | null | undefined>(undefined),
		});

	}

	export interface VerificationStatusResponse {
		verification?: Array<VerificationStatus>;
	}
	export interface VerificationStatusResponseFormProperties {
	}
	export function CreateVerificationStatusResponseFormGroup() {
		return new FormGroup<VerificationStatusResponseFormProperties>({
		});

	}

	export interface VerifiedAccount {

		/** The account number as it appears on the site. (The POST accounts service response return this field as number)<br><b>Additional Details</b>:<b> Bank/ Loan/ Insurance/ Investment</b>:<br> The account number for the bank account as it appears at the site.<br><b>Credit Card</b>: The account number of the card account as it appears at the site,<br>i.e., the card number.The account number can be full or partial based on how it is displayed in the account summary page of the site.In most cases, the site does not display the full account number in the account summary page and additional navigation is required to aggregate it.<br><b>Applicable containers</b>: All Containers<br><b>Aggregated / Manual</b>: Both <br><b>Endpoints</b>:<br><ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>POST accounts</li></ul> */
		accountNumber?: string | null;

		/** The type of account that is aggregated, i.e., savings, checking, credit card, charge, HELOC, etc. The account type is derived based on the attributes of the account. <br><b>Valid Values:</b><br><b>Aggregated Account Type</b><br><b>bank</b><ul><li>CHECKING</li><li>SAVINGS</li><li>CD</li><li>PPF</li><li>RECURRING_DEPOSIT</li><li>FSA</li><li>MONEY_MARKET</li><li>IRA</li><li>PREPAID</li></ul><b>creditCard</b><ul><li>OTHER</li><li>CREDIT</li><li>STORE</li><li>CHARGE</li><li>OTHER</li></ul><b>investment (SN 1.0)</b><ul><li>BROKERAGE_MARGIN</li><li>HSA</li><li>IRA</li><li>BROKERAGE_CASH</li><li>401K</li><li>403B</li><li>TRUST</li><li>ANNUITY</li><li>SIMPLE</li><li>CUSTODIAL</li><li>BROKERAGE_CASH_OPTION</li><li>BROKERAGE_MARGIN_OPTION</li><li>INDIVIDUAL</li><li>CORPORATE</li><li>JTTIC</li><li>JTWROS</li><li>COMMUNITY_PROPERTY</li><li>JOINT_BY_ENTIRETY</li><li>CONSERVATORSHIP</li><li>ROTH</li><li>ROTH_CONVERSION</li><li>ROLLOVER</li><li>EDUCATIONAL</li><li>529_PLAN</li><li>457_DEFERRED_COMPENSATION</li><li>401A</li><li>PSP</li><li>MPP</li><li>STOCK_BASKET</li><li>LIVING_TRUST</li><li>REVOCABLE_TRUST</li><li>IRREVOCABLE_TRUST</li><li>CHARITABLE_REMAINDER</li><li>CHARITABLE_LEAD</li><li>CHARITABLE_GIFT_ACCOUNT</li><li>SEP</li><li>UTMA</li><li>UGMA</li><li>ESOPP</li><li>ADMINISTRATOR</li><li>EXECUTOR</li><li>PARTNERSHIP</li><li>SOLE_PROPRIETORSHIP</li><li>CHURCH</li><li>INVESTMENT_CLUB</li><li>RESTRICTED_STOCK_AWARD</li><li>CMA</li><li>EMPLOYEE_STOCK_PURCHASE_PLAN</li><li>PERFORMANCE_PLAN</li><li>BROKERAGE_LINK_ACCOUNT</li><li>MONEY_MARKET</li><li>SUPER_ANNUATION</li><li>REGISTERED_RETIREMENT_SAVINGS_PLAN</li><li>SPOUSAL_RETIREMENT_SAVINGS_PLAN</li><li>DEFERRED_PROFIT_SHARING_PLAN</li><li>NON_REGISTERED_SAVINGS_PLAN</li><li>REGISTERED_EDUCATION_SAVINGS_PLAN</li><li>GROUP_RETIREMENT_SAVINGS_PLAN</li><li>LOCKED_IN_RETIREMENT_SAVINGS_PLAN</li><li>RESTRICTED_LOCKED_IN_SAVINGS_PLAN</li><li>LOCKED_IN_RETIREMENT_ACCOUNT</li><li>REGISTERED_PENSION_PLAN</li><li>TAX_FREE_SAVINGS_ACCOUNT</li><li>LIFE_INCOME_FUND</li><li>REGISTERED_RETIREMENT_INCOME_FUND</li><li>SPOUSAL_RETIREMENT_INCOME_FUND</li><li>LOCKED_IN_REGISTERED_INVESTMENT_FUND</li><li>PRESCRIBED_REGISTERED_RETIREMENT_INCOME_FUND</li><li>GUARANTEED_INVESTMENT_CERTIFICATES</li><li>REGISTERED_DISABILITY_SAVINGS_PLAN</li><li>OTHER</li></ul><b>investment (SN 2.0)</b><ul><li>BROKERAGE_CASH</li><li>BROKERAGE_MARGIN</li><li>INDIVIDUAL_RETIREMENT_ACCOUNT_IRA</li><li>EMPLOYEE_RETIREMENT_ACCOUNT_401K</li><li>EMPLOYEE_RETIREMENT_SAVINGS_PLAN_403B</li><li>TRUST</li><li>ANNUITY</li><li>SIMPLE_IRA</li><li>CUSTODIAL_ACCOUNT</li><li>BROKERAGE_CASH_OPTION</li><li>BROKERAGE_MARGIN_OPTION</li><li>INDIVIDUAL</li><li>CORPORATE_INVESTMENT_ACCOUNT</li><li>JOINT_TENANTS_TENANCY_IN_COMMON_JTIC</li><li>JOINT_TENANTS_WITH_RIGHTS_OF_SURVIVORSHIP_JTWROS</li><li>JOINT_TENANTS_COMMUNITY_PROPERTY</li><li>JOINT_TENANTS_TENANTS_BY_ENTIRETY</li><li>CONSERVATOR</li><li>ROTH_IRA</li><li>ROTH_CONVERSION</li><li>ROLLOVER_IRA</li><li>EDUCATIONAL</li><li>EDUCATIONAL_SAVINGS_PLAN_529</li><li>DEFERRED_COMPENSATION_PLAN_457</li><li>MONEY_PURCHASE_RETIREMENT_PLAN_401A</li><li>PROFIT_SHARING_PLAN</li><li>MONEY_PURCHASE_PLAN</li><li>STOCK_BASKET_ACCOUNT</li><li>LIVING_TRUST</li><li>REVOCABLE_TRUST</li><li>IRREVOCABLE_TRUST</li><li>CHARITABLE_REMAINDER_TRUST</li><li>CHARITABLE_LEAD_TRUST</li><li>CHARITABLE_GIFT_ACCOUNT</li><li>SEP_IRA</li><li>UNIFORM_TRANSFER_TO_MINORS_ACT_UTMA</li><li>UNIFORM_GIFT_TO_MINORS_ACT_UGMA</li><li>EMPLOYEE_STOCK_OWNERSHIP_PLAN_ESOP</li><li>ADMINISTRATOR</li><li>EXECUTOR</li><li>PARTNERSHIP</li><li>PROPRIETORSHIP</li><li>CHURCH_ACCOUNT</li><li>INVESTMENT_CLUB</li><li>RESTRICTED_STOCK_AWARD</li><li>CASH_MANAGEMENT_ACCOUNT</li><li>EMPLOYEE_STOCK_PURCHASE_PLAN_ESPP</li><li>PERFORMANCE_PLAN</li><li>BROKERAGE_LINK_ACCOUNT</li><li>MONEY_MARKET_ACCOUNT</li><li>SUPERANNUATION</li><li>REGISTERED_RETIREMENT_SAVINGS_PLAN_RRSP</li><li>SPOUSAL_RETIREMENT_SAVINGS_PLAN_SRSP</li><li>DEFERRED_PROFIT_SHARING_PLAN_DPSP</li><li>NON_REGISTERED_SAVINGS_PLAN_NRSP</li><li>REGISTERED_EDUCATION_SAVINGS_PLAN_RESP</li><li>GROUP_RETIREMENT_SAVINGS_PLAN_GRSP</li><li>LOCKED_IN_RETIREMENT_SAVINGS_PLAN_LRSP</li><li>RESTRICTED_LOCKED_IN_SAVINGS_PLAN_RLSP</li><li>LOCKED_IN_RETIREMENT_ACCOUNT_LIRA</li><li>REGISTERED_PENSION_PLAN_RPP</li><li>TAX_FREE_SAVINGS_ACCOUNT_TFSA</li><li>LIFE_INCOME_FUND_LIF</li><li>REGISTERED_RETIREMENT_INCOME_FUND_RIF</li><li>SPOUSAL_RETIREMENT_INCOME_FUND_SRIF</li><li>LOCKED_IN_REGISTERED_INVESTMENT_FUND_LRIF</li><li>PRESCRIBED_REGISTERED_RETIREMENT_INCOME_FUND_PRIF</li><li>GUARANTEED_INVESTMENT_CERTIFICATES_GIC</li><li>REGISTERED_DISABILITY_SAVINGS_PLAN_RDSP</li><li>DEFINED_CONTRIBUTION_PLAN</li><li>DEFINED_BENEFIT_PLAN</li><li>EMPLOYEE_STOCK_OPTION_PLAN</li><li>NONQUALIFIED_DEFERRED_COMPENSATION_PLAN_409A</li><li>KEOGH_PLAN</li><li>EMPLOYEE_RETIREMENT_ACCOUNT_ROTH_401K</li><li>DEFERRED_CONTINGENT_CAPITAL_PLAN_DCCP</li><li>EMPLOYEE_BENEFIT_PLAN</li><li>EMPLOYEE_SAVINGS_PLAN</li><li>HEALTH_SAVINGS_ACCOUNT_HSA</li><li>COVERDELL_EDUCATION_SAVINGS_ACCOUNT_ESA</li><li>TESTAMENTARY_TRUST</li><li>ESTATE</li><li>GRANTOR_RETAINED_ANNUITY_TRUST_GRAT</li><li>ADVISORY_ACCOUNT</li><li>NON_PROFIT_ORGANIZATION_501C</li><li>HEALTH_REIMBURSEMENT_ARRANGEMENT_HRA</li><li>INDIVIDUAL_SAVINGS_ACCOUNT_ISA</li><li>CASH_ISA</li><li>STOCKS_AND_SHARES_ISA</li><li>INNOVATIVE_FINANCE_ISA</li><li>JUNIOR_ISA</li><li>EMPLOYEES_PROVIDENT_FUND_ORGANIZATION_EPFO</li><li>PUBLIC_PROVIDENT_FUND_PPF</li><li>EMPLOYEES_PENSION_SCHEME_EPS</li><li>NATIONAL_PENSION_SYSTEM_NPS</li><li>INDEXED_ANNUITY</li><li>ANNUITIZED_ANNUITY</li><li>VARIABLE_ANNUITY</li><li>ROTH_403B</li><li>SPOUSAL_IRA</li><li>SPOUSAL_ROTH_IRA</li><li>SARSEP_IRA</li><li>SUBSTANTIALLY_EQUAL_PERIODIC_PAYMENTS_SEPP</li><li>OFFSHORE_TRUST</li><li>IRREVOCABLE_LIFE_INSURANCE_TRUST</li><li>INTERNATIONAL_TRUST</li><li>LIFE_INTEREST_TRUST</li><li>EMPLOYEE_BENEFIT_TRUST</li><li>PRECIOUS_METAL_ACCOUNT</li><li>INVESTMENT_LOAN_ACCOUNT</li><li>GRANTOR_RETAINED_INCOME_TRUST</li><li>PENSION_PLAN</li><li>OTHER</li></ul><b>loan</b><ul><li>MORTGAGE</li><li>INSTALLMENT_LOAN</li><li>PERSONAL_LOAN</li><li>HOME_EQUITY_LINE_OF_CREDIT</li><li>LINE_OF_CREDIT</li><li>AUTO_LOAN</li><li>STUDENT_LOAN</li><li>HOME_LOAN</li></ul><b>insurance</b><ul><li>AUTO_INSURANCE</li><li>HEALTH_INSURANCE</li><li>HOME_INSURANCE</li><li>LIFE_INSURANCE</li><li>ANNUITY</li><li>TRAVEL_INSURANCE</li><li>INSURANCE</li></ul><b>realEstate</b><ul> <li>REAL_ESTATE</li></ul><b>reward</b><ul><li>REWARD_POINTS</li></ul><b>Manual Account Type</b><br><b>bank</b><ul><li>CHECKING</li><li>SAVINGS</li><li>CD</li><li>PREPAID</li></ul><b>credit</b><ul>  <li>CREDIT</li></ul><b>loan</b><ul>  <li>PERSONAL_LOAN</li><li>HOME_LOAN</li></ul><b>insurance</b><ul><li>INSURANCE</li><li>ANNUITY</li></ul><b>investment</b><ul><li>BROKERAGE_CASH</li></ul><br><br><b>Aggregated / Manual</b>: Both <br><b>Applicable containers</b>: All containers<br></ul> */
		accountType?: string | null;

		/** Bank and branch identification information.<br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: bank, investment, loan<br><b>Endpoints</b>:<br><ul></ul> */
		bankTransferCode?: Array<BankTransferCode>;
		fullAccountNumber?: string | null;
		holder?: Array<AccountHolder>;

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		id?: string | null;

		/**
		 * The primary key of the provider account resource.<br><br><b>Aggregated / Manual</b>: Both <br><b>Applicable containers</b>: All containers<br>
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		providerAccountId?: string | null;

		/** <b>Applicable containers</b>: reward, bank, creditCard, investment, loan, insurance, realEstate,  otherLiabilities<br> */
		providerName?: string | null;
	}
	export interface VerifiedAccountFormProperties {

		/** The account number as it appears on the site. (The POST accounts service response return this field as number)<br><b>Additional Details</b>:<b> Bank/ Loan/ Insurance/ Investment</b>:<br> The account number for the bank account as it appears at the site.<br><b>Credit Card</b>: The account number of the card account as it appears at the site,<br>i.e., the card number.The account number can be full or partial based on how it is displayed in the account summary page of the site.In most cases, the site does not display the full account number in the account summary page and additional navigation is required to aggregate it.<br><b>Applicable containers</b>: All Containers<br><b>Aggregated / Manual</b>: Both <br><b>Endpoints</b>:<br><ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>POST accounts</li></ul> */
		accountNumber: FormControl<string | null | undefined>,

		/** The type of account that is aggregated, i.e., savings, checking, credit card, charge, HELOC, etc. The account type is derived based on the attributes of the account. <br><b>Valid Values:</b><br><b>Aggregated Account Type</b><br><b>bank</b><ul><li>CHECKING</li><li>SAVINGS</li><li>CD</li><li>PPF</li><li>RECURRING_DEPOSIT</li><li>FSA</li><li>MONEY_MARKET</li><li>IRA</li><li>PREPAID</li></ul><b>creditCard</b><ul><li>OTHER</li><li>CREDIT</li><li>STORE</li><li>CHARGE</li><li>OTHER</li></ul><b>investment (SN 1.0)</b><ul><li>BROKERAGE_MARGIN</li><li>HSA</li><li>IRA</li><li>BROKERAGE_CASH</li><li>401K</li><li>403B</li><li>TRUST</li><li>ANNUITY</li><li>SIMPLE</li><li>CUSTODIAL</li><li>BROKERAGE_CASH_OPTION</li><li>BROKERAGE_MARGIN_OPTION</li><li>INDIVIDUAL</li><li>CORPORATE</li><li>JTTIC</li><li>JTWROS</li><li>COMMUNITY_PROPERTY</li><li>JOINT_BY_ENTIRETY</li><li>CONSERVATORSHIP</li><li>ROTH</li><li>ROTH_CONVERSION</li><li>ROLLOVER</li><li>EDUCATIONAL</li><li>529_PLAN</li><li>457_DEFERRED_COMPENSATION</li><li>401A</li><li>PSP</li><li>MPP</li><li>STOCK_BASKET</li><li>LIVING_TRUST</li><li>REVOCABLE_TRUST</li><li>IRREVOCABLE_TRUST</li><li>CHARITABLE_REMAINDER</li><li>CHARITABLE_LEAD</li><li>CHARITABLE_GIFT_ACCOUNT</li><li>SEP</li><li>UTMA</li><li>UGMA</li><li>ESOPP</li><li>ADMINISTRATOR</li><li>EXECUTOR</li><li>PARTNERSHIP</li><li>SOLE_PROPRIETORSHIP</li><li>CHURCH</li><li>INVESTMENT_CLUB</li><li>RESTRICTED_STOCK_AWARD</li><li>CMA</li><li>EMPLOYEE_STOCK_PURCHASE_PLAN</li><li>PERFORMANCE_PLAN</li><li>BROKERAGE_LINK_ACCOUNT</li><li>MONEY_MARKET</li><li>SUPER_ANNUATION</li><li>REGISTERED_RETIREMENT_SAVINGS_PLAN</li><li>SPOUSAL_RETIREMENT_SAVINGS_PLAN</li><li>DEFERRED_PROFIT_SHARING_PLAN</li><li>NON_REGISTERED_SAVINGS_PLAN</li><li>REGISTERED_EDUCATION_SAVINGS_PLAN</li><li>GROUP_RETIREMENT_SAVINGS_PLAN</li><li>LOCKED_IN_RETIREMENT_SAVINGS_PLAN</li><li>RESTRICTED_LOCKED_IN_SAVINGS_PLAN</li><li>LOCKED_IN_RETIREMENT_ACCOUNT</li><li>REGISTERED_PENSION_PLAN</li><li>TAX_FREE_SAVINGS_ACCOUNT</li><li>LIFE_INCOME_FUND</li><li>REGISTERED_RETIREMENT_INCOME_FUND</li><li>SPOUSAL_RETIREMENT_INCOME_FUND</li><li>LOCKED_IN_REGISTERED_INVESTMENT_FUND</li><li>PRESCRIBED_REGISTERED_RETIREMENT_INCOME_FUND</li><li>GUARANTEED_INVESTMENT_CERTIFICATES</li><li>REGISTERED_DISABILITY_SAVINGS_PLAN</li><li>OTHER</li></ul><b>investment (SN 2.0)</b><ul><li>BROKERAGE_CASH</li><li>BROKERAGE_MARGIN</li><li>INDIVIDUAL_RETIREMENT_ACCOUNT_IRA</li><li>EMPLOYEE_RETIREMENT_ACCOUNT_401K</li><li>EMPLOYEE_RETIREMENT_SAVINGS_PLAN_403B</li><li>TRUST</li><li>ANNUITY</li><li>SIMPLE_IRA</li><li>CUSTODIAL_ACCOUNT</li><li>BROKERAGE_CASH_OPTION</li><li>BROKERAGE_MARGIN_OPTION</li><li>INDIVIDUAL</li><li>CORPORATE_INVESTMENT_ACCOUNT</li><li>JOINT_TENANTS_TENANCY_IN_COMMON_JTIC</li><li>JOINT_TENANTS_WITH_RIGHTS_OF_SURVIVORSHIP_JTWROS</li><li>JOINT_TENANTS_COMMUNITY_PROPERTY</li><li>JOINT_TENANTS_TENANTS_BY_ENTIRETY</li><li>CONSERVATOR</li><li>ROTH_IRA</li><li>ROTH_CONVERSION</li><li>ROLLOVER_IRA</li><li>EDUCATIONAL</li><li>EDUCATIONAL_SAVINGS_PLAN_529</li><li>DEFERRED_COMPENSATION_PLAN_457</li><li>MONEY_PURCHASE_RETIREMENT_PLAN_401A</li><li>PROFIT_SHARING_PLAN</li><li>MONEY_PURCHASE_PLAN</li><li>STOCK_BASKET_ACCOUNT</li><li>LIVING_TRUST</li><li>REVOCABLE_TRUST</li><li>IRREVOCABLE_TRUST</li><li>CHARITABLE_REMAINDER_TRUST</li><li>CHARITABLE_LEAD_TRUST</li><li>CHARITABLE_GIFT_ACCOUNT</li><li>SEP_IRA</li><li>UNIFORM_TRANSFER_TO_MINORS_ACT_UTMA</li><li>UNIFORM_GIFT_TO_MINORS_ACT_UGMA</li><li>EMPLOYEE_STOCK_OWNERSHIP_PLAN_ESOP</li><li>ADMINISTRATOR</li><li>EXECUTOR</li><li>PARTNERSHIP</li><li>PROPRIETORSHIP</li><li>CHURCH_ACCOUNT</li><li>INVESTMENT_CLUB</li><li>RESTRICTED_STOCK_AWARD</li><li>CASH_MANAGEMENT_ACCOUNT</li><li>EMPLOYEE_STOCK_PURCHASE_PLAN_ESPP</li><li>PERFORMANCE_PLAN</li><li>BROKERAGE_LINK_ACCOUNT</li><li>MONEY_MARKET_ACCOUNT</li><li>SUPERANNUATION</li><li>REGISTERED_RETIREMENT_SAVINGS_PLAN_RRSP</li><li>SPOUSAL_RETIREMENT_SAVINGS_PLAN_SRSP</li><li>DEFERRED_PROFIT_SHARING_PLAN_DPSP</li><li>NON_REGISTERED_SAVINGS_PLAN_NRSP</li><li>REGISTERED_EDUCATION_SAVINGS_PLAN_RESP</li><li>GROUP_RETIREMENT_SAVINGS_PLAN_GRSP</li><li>LOCKED_IN_RETIREMENT_SAVINGS_PLAN_LRSP</li><li>RESTRICTED_LOCKED_IN_SAVINGS_PLAN_RLSP</li><li>LOCKED_IN_RETIREMENT_ACCOUNT_LIRA</li><li>REGISTERED_PENSION_PLAN_RPP</li><li>TAX_FREE_SAVINGS_ACCOUNT_TFSA</li><li>LIFE_INCOME_FUND_LIF</li><li>REGISTERED_RETIREMENT_INCOME_FUND_RIF</li><li>SPOUSAL_RETIREMENT_INCOME_FUND_SRIF</li><li>LOCKED_IN_REGISTERED_INVESTMENT_FUND_LRIF</li><li>PRESCRIBED_REGISTERED_RETIREMENT_INCOME_FUND_PRIF</li><li>GUARANTEED_INVESTMENT_CERTIFICATES_GIC</li><li>REGISTERED_DISABILITY_SAVINGS_PLAN_RDSP</li><li>DEFINED_CONTRIBUTION_PLAN</li><li>DEFINED_BENEFIT_PLAN</li><li>EMPLOYEE_STOCK_OPTION_PLAN</li><li>NONQUALIFIED_DEFERRED_COMPENSATION_PLAN_409A</li><li>KEOGH_PLAN</li><li>EMPLOYEE_RETIREMENT_ACCOUNT_ROTH_401K</li><li>DEFERRED_CONTINGENT_CAPITAL_PLAN_DCCP</li><li>EMPLOYEE_BENEFIT_PLAN</li><li>EMPLOYEE_SAVINGS_PLAN</li><li>HEALTH_SAVINGS_ACCOUNT_HSA</li><li>COVERDELL_EDUCATION_SAVINGS_ACCOUNT_ESA</li><li>TESTAMENTARY_TRUST</li><li>ESTATE</li><li>GRANTOR_RETAINED_ANNUITY_TRUST_GRAT</li><li>ADVISORY_ACCOUNT</li><li>NON_PROFIT_ORGANIZATION_501C</li><li>HEALTH_REIMBURSEMENT_ARRANGEMENT_HRA</li><li>INDIVIDUAL_SAVINGS_ACCOUNT_ISA</li><li>CASH_ISA</li><li>STOCKS_AND_SHARES_ISA</li><li>INNOVATIVE_FINANCE_ISA</li><li>JUNIOR_ISA</li><li>EMPLOYEES_PROVIDENT_FUND_ORGANIZATION_EPFO</li><li>PUBLIC_PROVIDENT_FUND_PPF</li><li>EMPLOYEES_PENSION_SCHEME_EPS</li><li>NATIONAL_PENSION_SYSTEM_NPS</li><li>INDEXED_ANNUITY</li><li>ANNUITIZED_ANNUITY</li><li>VARIABLE_ANNUITY</li><li>ROTH_403B</li><li>SPOUSAL_IRA</li><li>SPOUSAL_ROTH_IRA</li><li>SARSEP_IRA</li><li>SUBSTANTIALLY_EQUAL_PERIODIC_PAYMENTS_SEPP</li><li>OFFSHORE_TRUST</li><li>IRREVOCABLE_LIFE_INSURANCE_TRUST</li><li>INTERNATIONAL_TRUST</li><li>LIFE_INTEREST_TRUST</li><li>EMPLOYEE_BENEFIT_TRUST</li><li>PRECIOUS_METAL_ACCOUNT</li><li>INVESTMENT_LOAN_ACCOUNT</li><li>GRANTOR_RETAINED_INCOME_TRUST</li><li>PENSION_PLAN</li><li>OTHER</li></ul><b>loan</b><ul><li>MORTGAGE</li><li>INSTALLMENT_LOAN</li><li>PERSONAL_LOAN</li><li>HOME_EQUITY_LINE_OF_CREDIT</li><li>LINE_OF_CREDIT</li><li>AUTO_LOAN</li><li>STUDENT_LOAN</li><li>HOME_LOAN</li></ul><b>insurance</b><ul><li>AUTO_INSURANCE</li><li>HEALTH_INSURANCE</li><li>HOME_INSURANCE</li><li>LIFE_INSURANCE</li><li>ANNUITY</li><li>TRAVEL_INSURANCE</li><li>INSURANCE</li></ul><b>realEstate</b><ul> <li>REAL_ESTATE</li></ul><b>reward</b><ul><li>REWARD_POINTS</li></ul><b>Manual Account Type</b><br><b>bank</b><ul><li>CHECKING</li><li>SAVINGS</li><li>CD</li><li>PREPAID</li></ul><b>credit</b><ul>  <li>CREDIT</li></ul><b>loan</b><ul>  <li>PERSONAL_LOAN</li><li>HOME_LOAN</li></ul><b>insurance</b><ul><li>INSURANCE</li><li>ANNUITY</li></ul><b>investment</b><ul><li>BROKERAGE_CASH</li></ul><br><br><b>Aggregated / Manual</b>: Both <br><b>Applicable containers</b>: All containers<br></ul> */
		accountType: FormControl<string | null | undefined>,
		fullAccountNumber: FormControl<string | null | undefined>,

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		id: FormControl<string | null | undefined>,

		/**
		 * The primary key of the provider account resource.<br><br><b>Aggregated / Manual</b>: Both <br><b>Applicable containers</b>: All containers<br>
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		providerAccountId: FormControl<string | null | undefined>,

		/** <b>Applicable containers</b>: reward, bank, creditCard, investment, loan, insurance, realEstate,  otherLiabilities<br> */
		providerName: FormControl<string | null | undefined>,
	}
	export function CreateVerifiedAccountFormGroup() {
		return new FormGroup<VerifiedAccountFormProperties>({
			accountNumber: new FormControl<string | null | undefined>(undefined),
			accountType: new FormControl<string | null | undefined>(undefined),
			fullAccountNumber: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			providerAccountId: new FormControl<string | null | undefined>(undefined),
			providerName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface VerifyAccount {
		account?: Array<VerifiedAccount>;
		transactionCriteria?: Array<VerifyTransactionCriteria>;
	}
	export interface VerifyAccountFormProperties {
	}
	export function CreateVerifyAccountFormGroup() {
		return new FormGroup<VerifyAccountFormProperties>({
		});

	}

	export interface VerifyTransactionCriteria {

		/**
		 * Required
		 * Type: double
		 */
		amount: number;

		/** Indicates if the transaction appears as a debit or a credit transaction in the account. <br><br><b>Applicable containers</b>: bank,creditCard,investment,insurance,loan<br><b>Applicable Values</b><br> */
		baseType?: DataExtractsTransactionBaseType | null;

		/** Required */
		date: string;
		dateVariance?: string | null;
		keyword?: string | null;

		/** Indicates if the criteria is matched or not. <br><b>Applicable Values</b><br> */
		matched?: VerifyTransactionCriteriaMatched | null;
		verifiedTransaction?: Array<Transaction>;
	}
	export interface VerifyTransactionCriteriaFormProperties {

		/**
		 * Required
		 * Type: double
		 */
		amount: FormControl<number | null | undefined>,

		/** Indicates if the transaction appears as a debit or a credit transaction in the account. <br><br><b>Applicable containers</b>: bank,creditCard,investment,insurance,loan<br><b>Applicable Values</b><br> */
		baseType: FormControl<DataExtractsTransactionBaseType | null | undefined>,

		/** Required */
		date: FormControl<string | null | undefined>,
		dateVariance: FormControl<string | null | undefined>,
		keyword: FormControl<string | null | undefined>,

		/** Indicates if the criteria is matched or not. <br><b>Applicable Values</b><br> */
		matched: FormControl<VerifyTransactionCriteriaMatched | null | undefined>,
	}
	export function CreateVerifyTransactionCriteriaFormGroup() {
		return new FormGroup<VerifyTransactionCriteriaFormProperties>({
			amount: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			baseType: new FormControl<DataExtractsTransactionBaseType | null | undefined>(undefined),
			date: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			dateVariance: new FormControl<string | null | undefined>(undefined),
			keyword: new FormControl<string | null | undefined>(undefined),
			matched: new FormControl<VerifyTransactionCriteriaMatched | null | undefined>(undefined),
		});

	}

	export enum VerifyTransactionCriteriaMatched { COMPLETE = 'COMPLETE', NONE = 'NONE' }

	export interface VerifyAccountRequest {

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		accountId?: string | null;
		container?: AccountCONTAINER | null;

		/** Required */
		transactionCriteria: Array<VerifyTransactionCriteria>;
	}
	export interface VerifyAccountRequestFormProperties {

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		accountId: FormControl<string | null | undefined>,
		container: FormControl<AccountCONTAINER | null | undefined>,
	}
	export function CreateVerifyAccountRequestFormGroup() {
		return new FormGroup<VerifyAccountRequestFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
			container: new FormControl<AccountCONTAINER | null | undefined>(undefined),
		});

	}

	export interface VerifyAccountResponse {
		verifyAccount?: VerifyAccount;
	}
	export interface VerifyAccountResponseFormProperties {
	}
	export function CreateVerifyAccountResponseFormGroup() {
		return new FormGroup<VerifyAccountResponseFormProperties>({
		});

	}

	export interface YodleeError {
		errorCode?: string | null;
		errorMessage?: string | null;
		referenceCode?: string | null;
	}
	export interface YodleeErrorFormProperties {
		errorCode: FormControl<string | null | undefined>,
		errorMessage: FormControl<string | null | undefined>,
		referenceCode: FormControl<string | null | undefined>,
	}
	export function CreateYodleeErrorFormGroup() {
		return new FormGroup<YodleeErrorFormProperties>({
			errorCode: new FormControl<string | null | undefined>(undefined),
			errorMessage: new FormControl<string | null | undefined>(undefined),
			referenceCode: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Get Accounts
		 * The get accounts service provides information about accounts added by the user.<br>By default, this service returns information for active and to be closed accounts.<br>If requestId is provided, the accounts that are updated in the context of the requestId will be provided in the response.<br><br><b>Note:</b><br><li>fullAccountNumber is deprecated and is replaced with fullAccountNumberList in include parameter and response.</li><li>fullAccountNumberList, PII (Personal Identifiable Information) and holder details are not available by default, as it is a premium feature that needs security approval. This will not be available for testing in Sandbox environment.</li>
		 * Get accounts
		 * @param {string} accountId Comma separated accountIds.
		 * @param {string} container bank/creditCard/investment/insurance/loan/reward/realEstate/otherAssets/otherLiabilities
		 * @param {string} include profile, holder, fullAccountNumber, fullAccountNumberList, paymentProfile, autoRefresh<br><b>Note:</b>fullAccountNumber is deprecated and is replaced with fullAccountNumberList in include parameter and response.
		 * @param {string} providerAccountId Comma separated providerAccountIds.
		 * @param {string} requestId The unique identifier that returns contextual data
		 * @param {string} status ACTIVE,INACTIVE,TO_BE_CLOSED,CLOSED
		 * @return {void} OK
		 */
		GetAllAccounts(accountId: string | null | undefined, container: string | null | undefined, include: string | null | undefined, providerAccountId: string | null | undefined, requestId: string | null | undefined, status: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'accounts?accountId=' + (accountId == null ? '' : encodeURIComponent(accountId)) + '&container=' + (container == null ? '' : encodeURIComponent(container)) + '&include=' + (include == null ? '' : encodeURIComponent(include)) + '&providerAccountId=' + (providerAccountId == null ? '' : encodeURIComponent(providerAccountId)) + '&requestId=' + (requestId == null ? '' : encodeURIComponent(requestId)) + '&status=' + (status == null ? '' : encodeURIComponent(status)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Add Manual Account
		 * The add account service is used to add manual accounts.<br>The response of add account service includes the account name , account number and Yodlee generated account id.<br>All manual accounts added will be included as part of networth calculation by default.<br>Add manual account support is available for bank, card, investment, insurance and loan container only.<br><br><b>Note:</b> <li>A real estate account addition is only supported for SYSTEM and MANUAL valuation type.</li>
		 * Post accounts
		 * @param {CreateAccountRequest} requestBody accountParam
		 * @return {void} OK
		 */
		CreateManualAccount(requestBody: CreateAccountRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'accounts', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Evaluate Address
		 * Use this service to validate the address before adding the real estate account.<br>If the address is valid, the service will return the complete address information.<br>The response will contain multiple addresses if the user-provided input matches with multiple entries in the vendor database.<br>In the case of multiple matches, the user can select the appropriate address from the list and then invoke the add account service with the complete address.<br><br><b>Note:</b> <li>Yodlee recommends to use this service before adding the real estate account to avoid failures.</li>
		 * Post accounts/evaluateAddress
		 * @param {EvaluateAddressRequest} requestBody addressParam
		 * @return {void} OK
		 */
		EvaluateAddress(requestBody: EvaluateAddressRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'accounts/evaluateAddress', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Historical Balances
		 * The historical balances service is used to retrieve the historical balances for an account or a user.<br>Historical balances are daily (D), weekly (W), and monthly (M). <br>The interval input should be passed as D, W, and M to retrieve the desired historical balances. The default interval is daily (D). <br>When no account id is provided, historical balances of the accounts that are active, to be closed, and closed are provided in the response. <br>If the fromDate and toDate are not passed, the last 90 days of data will be provided. <br>The fromDate and toDate should be passed in the YYYY-MM-DD format. <br>The date field in the response denotes the date for which the balance is requested.<br>includeCF needs to be sent as true if the customer wants to return carried forward balances for a date when the data is not available. <br>asofDate field in the response denotes the date as of which the balance was updated for that account.<br>When there is no balance available for a requested date and if includeCF is sent as true, the previous date for which the balance is available is provided in the response. <br>When there is no previous balance available, no data will be sent.
		 * Get accounts/historicalBalances
		 * @param {string} accountId accountId
		 * @param {string} fromDate from date for balance retrieval (YYYY-MM-DD)
		 * @param {boolean} includeCF Consider carry forward logic for missing balances
		 * @param {string} interval D-daily, W-weekly or M-monthly
		 * @param {number} skip skip (Min 0)
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} toDate toDate for balance retrieval (YYYY-MM-DD)
		 * @param {number} top top (Max 500)
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {void} OK
		 */
		GetHistoricalBalances(accountId: string | null | undefined, fromDate: string | null | undefined, includeCF: boolean | null | undefined, interval: string | null | undefined, skip: number | null | undefined, toDate: string | null | undefined, top: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'accounts/historicalBalances?accountId=' + (accountId == null ? '' : encodeURIComponent(accountId)) + '&fromDate=' + (fromDate == null ? '' : encodeURIComponent(fromDate)) + '&includeCF=' + includeCF + '&interval=' + (interval == null ? '' : encodeURIComponent(interval)) + '&skip=' + skip + '&toDate=' + (toDate == null ? '' : encodeURIComponent(toDate)) + '&top=' + top, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete Account
		 * The delete account service allows an account to be deleted.<br>This service does not return a response. The HTTP response code is 204 (Success with no content).<br>
		 * Delete accounts/{accountId}
		 * @param {string} accountId accountId
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {void} 
		 */
		DeleteAccount(accountId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'accounts/' + accountId, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Account Details
		 * The get account details service provides detailed information of an account.<br><br><b>Note:</b><li>fullAccountNumber is deprecated and is replaced with fullAccountNumberList in include parameter and response.</li>
		 * Get accounts/{accountId}
		 * @param {string} accountId accountId
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @param {string} include profile, holder, fullAccountNumber, fullAccountNumberList, paymentProfile, autoRefresh<br><b>Note:</b>fullAccountNumber is deprecated and is replaced with fullAccountNumberList in include parameter and response.
		 * @return {void} OK
		 */
		GetAccount(accountId: string, include: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'accounts/' + accountId + '?include=' + (include == null ? '' : encodeURIComponent(include)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Update Account
		 * The update account service is used to update manual and aggregated accounts.<br>The HTTP response code is 204 (Success without content).<br>Update manual account support is available for bank, card, investment, insurance, loan, otherAssets, otherLiabilities and realEstate containers only.<br><br><b>Note:</b><li> A real estate account update is only supported for SYSTEM and MANUAL valuation type.</li><li> Attribute <b>isEbillEnrolled</b> is deprecated as it is applicable for bill accounts only.</li>
		 * Put accounts/{accountId}
		 * @param {string} accountId accountId
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @param {UpdateAccountRequest} requestBody accountRequest
		 * @return {void} 
		 */
		UpdateAccount(accountId: string, requestBody: UpdateAccountRequest): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'accounts/' + accountId, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get API Keys
		 * This endpoint provides the list of API keys that exist for a customer.<br>You can use one of the following authorization methods to access this API:<br><ol><li>cobsession</li><li>JWT token</li></ol><b>Notes:</b><li>This service is not available in developer sandbox environment and will be made available for testing in your dedicated environment.
		 * Get auth/apiKey
		 * @return {void} OK
		 */
		GetApiKeys(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'auth/apiKey', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Generate API Key
		 * This endpoint is used to generate an API key. The RSA public key you provide should be in 2048 bit PKCS#8 encoded format. <br>A public key is a mandatory input for generating the API key.<br/>The public key should be a unique key. The apiKeyId you get in the response is what you should use to generate the JWT token.<br> You can use one of the following authorization methods to access<br/>this API:<br><ol><li>cobsession</li><li>JWT token</li></ol> Alternatively, you can use base 64 encoded cobrandLogin and cobrandPassword in the Authorization header (Format: Authorization: Basic <encoded value of cobrandLogin: cobrandPassword>)<br><br><b>Note:</b><br><li>This service is not available in developer sandbox environment and will be made available for testing in your dedicated environment. The content type has to be passed as application/json for the body parameter.</li>
		 * Post auth/apiKey
		 * @param {ApiKeyRequest} requestBody apiKeyRequest
		 * @return {void} 
		 */
		GenerateApiKey(requestBody: ApiKeyRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'auth/apiKey', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete API Key
		 * This endpoint allows an existing API key to be deleted.<br>You can use one of the following authorization methods to access this API:<br><ol><li>cobsession</li><li>JWT token</li></ol> <b>Notes:</b> <li>This service is not available in developer sandbox environment and will be made availablefor testing in your dedicated environment.
		 * Delete auth/apiKey/{key}
		 * @param {string} key key
		 * @return {void} 
		 */
		DeleteApiKey(key: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'auth/apiKey/' + (key == null ? '' : encodeURIComponent(key)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete Token
		 * This endpoint revokes the token passed in the Authorization header. This service is applicable for JWT-based (and all API key-based) authentication and also client credential (clientId and secret) based authentication. This service does not return a response body. The HTTP response code is 204 (success with no content). <br>Tokens generally have limited lifetime of up to 30 minutes. You will call this service when you finish working with one user, and you want to delete the valid token rather than simply letting it expire.<br><br><b>Note:</b> <li>Revoking an access token (either type, admin or a user token) can take up to 2 minutes, as the tokens are stored on a distributed system.<br/>
		 * Delete auth/token
		 * @return {void} 
		 */
		DeleteToken(): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'auth/token', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Generate Access Token
		 * <b>Generate Access Token using client credential authentication.</b><br>This service returns access tokens required to access Yodlee 1.1 APIs. These tokens are the simplest and easiest of several alternatives for authenticating with Yodlee servers.<br>The most commonly used services obtain data specific to an end user (your customer). For these services, you need a <b>user access token</b>. These are simply tokens created with the user name parameter (<b>loginName</b>) set to the id of your end user.  <i><br><br><b>Note:</b> You determine this id and you must ensure it's unique among all your customers.</i> <br><br>Each token issued has an associated user. The token passed in the http headers explicitly names the user referenced in that API call.<br><br>Some of the APIs do administrative work, and don't reference an end user. <br/>One example of administrative work is key management. Another example is registering a new user explicitly, with <b>POST /user/register</b> call or subscribe to webhook, with <b>POST /config/notifications/events/{eventName}</b>. <br/>To invoke these, you need an <b>admin access token</b>. Create this by passing in your admin user login name in place of a regular user name.<br><br>This service also allows for simplified registration of new users. Any time you pass in a user name not already in use, the system will automatically implicitly create a new user for you. <br>This user will naturally have very few associated details. You can later provide additional user information by calling the <b>PUT user/register service</b>.<br><br><b>Notes:</b><li>The content type has to be passed as application/x-www-form-urlencoded.<li>Upgrading to client credential authentication requires infrastructure reconfiguration. <li>Customers wishing to switch from another authentication scheme to client credential authentication, please contact Yodlee Client Services.</li>
		 * Post auth/token
		 * @return {void} 
		 */
		GenerateAccessToken(): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'auth/token', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Subscribed Events
		 * <b>Refer GET /configs/notifications/events.</b><br>The get events service provides the list of events for which consumers subscribed <br>to receive notifications. <br>
		 * Get cobrand/config/notifications/events
		 * @param {CobrandNotificationEventName} eventName eventName
		 * @return {void} OK
		 */
		GetSubscribedEvents(eventName: CobrandNotificationEventName | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'cobrand/config/notifications/events?eventName=' + eventName, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete Subscription
		 * <b>Refer DELETE /configs/notifications/events/{eventName}.</b><br>The delete events service is used to unsubscribe from an events service.<br>
		 * Delete cobrand/config/notifications/events/{eventName}
		 * @param {CobrandNotificationEventName} eventName eventName
		 * @return {void} 
		 */
		DeleteSubscribedEvent(eventName: CobrandNotificationEventName): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'cobrand/config/notifications/events/' + eventName, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Subscribe Event
		 * <b>Refer POST /configs/notifications/events/{eventName}.</b><br>The subscribe events service is used to subscribe to an event for receiving notifications.<br>The callback URL, where the notification will be posted should be provided to this service.<br>If the callback URL is invalid or inaccessible, the subscription will be unsuccessful, and an error will be thrown.<br>Customers can subscribe to REFRESH,DATA_UPDATES and AUTO_REFRESH_UPDATES event.<br><br><b>Notes</b>:<br>This service is not available in developer sandbox/test environment and will be made available for testing in your dedicated environment, once the contract is signed.<br>The content type has to be passed as application/json for the body parameter.<br>
		 * Post cobrand/config/notifications/events/{eventName}
		 * @param {CobrandNotificationEventName} eventName eventName
		 * @param {CreateCobrandNotificationEventRequest} requestBody eventRequest
		 * @return {void} 
		 */
		CreateSubscriptionEvent(eventName: CobrandNotificationEventName, requestBody: CreateCobrandNotificationEventRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'cobrand/config/notifications/events/' + eventName, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Update Subscription
		 * <b>Refer PUT /configs/notifications/events/{eventName}.</b><br>The update events service is used to update the callback URL.<br>If the callback URL is invalid or inaccessible, the subscription will be unsuccessful, and an error will be thrown.<br><b>Note:</b> The content type has to be passed as application/json for the body parameter. <br>
		 * Put cobrand/config/notifications/events/{eventName}
		 * @param {CobrandNotificationEventName} eventName eventName
		 * @param {UpdateCobrandNotificationEventRequest} requestBody eventRequest
		 * @return {void} 
		 */
		UpdateSubscribedEvent(eventName: CobrandNotificationEventName, requestBody: UpdateCobrandNotificationEventRequest): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'cobrand/config/notifications/events/' + eventName, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Cobrand Login
		 * The cobrand login service authenticates a cobrand.<br>Cobrand session in the response includes the cobrand session token (cobSession) <br>which is used in subsequent API calls like registering or signing in the user. <br>The idle timeout for a cobrand session is 2 hours and the absolute timeout is 24 hours. This service can be <br>invoked to create a new cobrand session token. <br><b>Note:</b> This endpoint is deprecated for customers using the API Key-based authentication and is applicable only to customers who use the SAML-based authentication.<br>The content type has to be passed as application/json for the body parameter. <br>
		 * Post cobrand/login
		 * @param {CobrandLoginRequest} requestBody cobrandLoginRequest
		 * @return {void} OK
		 */
		CobrandLogin(requestBody: CobrandLoginRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'cobrand/login', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Cobrand Logout
		 * The cobrand logout service is used to log out the cobrand.<br>This service does not return a response. The HTTP response code is 204 (Success with no content).<br><b>Note:</b> This endpoint is deprecated for customers using the API Key-based authentication and is applicable only to customers who use the SAML-based authentication.<br>
		 * Post cobrand/logout
		 * @return {void} 
		 */
		CobrandLogout(): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'cobrand/logout', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Public Key
		 * <b>Refer GET /configs/publicKey.</b><br>The get public key service provides the customer the public key that should be used to encrypt the user credentials before sending it to Yodlee.<br>This endpoint is useful only for PKI enabled.<br>
		 * Get cobrand/publicKey
		 * @return {void} OK
		 */
		GetPublicKey(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'cobrand/publicKey', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Subscribed Notification Events
		 * The get events service provides the list of events for which consumers subscribed to receive notifications. <br>
		 * Get configs/notifications/events
		 * @param {CobrandNotificationEventName} eventName eventName
		 * @return {void} OK
		 */
		GetSubscribedNotificationEvents(eventName: CobrandNotificationEventName | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'configs/notifications/events?eventName=' + eventName, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete Notification Subscription
		 * The delete events service is used to unsubscribe from an events service.<br>
		 * Delete configs/notifications/events/{eventName}
		 * @param {CobrandNotificationEventName} eventName eventName
		 * @return {void} 
		 */
		DeleteSubscribedNotificationEvent(eventName: CobrandNotificationEventName): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'configs/notifications/events/' + eventName, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Subscribe For Notification Event
		 * The subscribe events service is used to subscribe to an event for receiving notifications.<br>The callback URL, where the notification will be posted should be provided to this service.<br>If the callback URL is invalid or inaccessible, the subscription will be unsuccessful, and an error will be thrown.<br>Customers can subscribe to REFRESH,DATA_UPDATES and AUTO_REFRESH_UPDATES event.<br><br><b>Notes:</b><li>This service is not available in developer sandbox/test environment and will be made available for testing in your dedicated environment, once the contract is signed.<li>The content type has to be passed as application/json for the body parameter.</li>
		 * Post configs/notifications/events/{eventName}
		 * @param {CobrandNotificationEventName} eventName eventName
		 * @param {CreateConfigsNotificationEventRequest} requestBody eventRequest
		 * @return {void} 
		 */
		CreateSubscriptionNotificationEvent(eventName: CobrandNotificationEventName, requestBody: CreateConfigsNotificationEventRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'configs/notifications/events/' + eventName, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Update Notification Subscription
		 * The update events service is used to update the callback URL.<br>If the callback URL is invalid or inaccessible, the subscription will be unsuccessful, and an error will be thrown.<br><br><b>Note:</b> <li>The content type has to be passed as application/json for the body parameter. <br>
		 * Put configs/notifications/events/{eventName}
		 * @param {CobrandNotificationEventName} eventName eventName
		 * @param {UpdateConfigsNotificationEventRequest} requestBody eventRequest
		 * @return {void} 
		 */
		UpdateSubscribedNotificationEvent(eventName: CobrandNotificationEventName, requestBody: UpdateConfigsNotificationEventRequest): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'configs/notifications/events/' + eventName, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Public Key
		 * The get public key service provides the public key that should be used to encrypt user credentials while invoking POST /providerAccounts and PUT /providerAccounts endpoints.<br>This service will only work if the PKI (public key infrastructure) feature is enabled for the customer.<br><br><b>Note:</b><li> The key in the response is a string in PEM format.</li><li>This endpoint is not available in the Sandbox environment and it is useful only if the PKI feature is enabled.</li>
		 * Get configs/publicKey
		 * @return {void} OK
		 */
		GetPublicEncryptionKey(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'configs/publicKey', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Events
		 * The get extracts events service is used to learn about occurrences of data extract related events. This service currently supports only the DATA_UPDATES event.<br>Passing the event name as DATA_UPDATES provides information about users for whom data has been modified in the system for the specified time range. To learn more, please refer to the <a href="https://developer.yodlee.com/docs/api/1.1/DataExtracts">dataExtracts</a> page.<br>You can retrieve data in increments of no more than 60 minutes over the period of the last 7 days from today's date.<br>This service is only invoked with either admin access token or a cobrand session.<br>
		 * Get dataExtracts/events
		 * @param {string} eventName Event Name
		 * @param {string} fromDate From DateTime (YYYY-MM-DDThh:mm:ssZ)
		 * @param {string} toDate To DateTime (YYYY-MM-DDThh:mm:ssZ)
		 * @return {void} OK
		 */
		GetDataExtractsEvents(eventName: string, fromDate: string, toDate: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'dataExtracts/events?eventName=' + (eventName == null ? '' : encodeURIComponent(eventName)) + '&fromDate=' + (fromDate == null ? '' : encodeURIComponent(fromDate)) + '&toDate=' + (toDate == null ? '' : encodeURIComponent(toDate)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get userData
		 * The get user data service is used to get a user's modified data for a particular period of time for accounts, transactions, holdings, and provider account information.<br>The time difference between fromDate and toDate fields cannot be more than 60 minutes.<br>By default, pagination is available for the transaction entity in this API. In the first response, the API will retrieve 500 transactions along with other data. The response header will provide a link to retrieve the next set of transactions.<br>In the response body of the first API response, totalTransactionsCount indicates the total number of transactions the API will retrieve for the user.<br>This service is only invoked with either admin access token or a cobrand session.<br/>Refer to <a href="https://developer.yodlee.com/docs/api/1.1/DataExtracts">dataExtracts</a> page for more information.<br><br><b>Note:</b><li>This service supports the localization feature and accepts locale as a header parameter.</li>
		 * Get dataExtracts/userData
		 * @param {string} fromDate From DateTime (YYYY-MM-DDThh:mm:ssZ)
		 * @param {string} loginName Login Name
		 * @param {string} toDate To DateTime (YYYY-MM-DDThh:mm:ssZ)
		 * @return {void} OK
		 */
		GetDataExtractsUserData(fromDate: string, loginName: string, toDate: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'dataExtracts/userData?fromDate=' + (fromDate == null ? '' : encodeURIComponent(fromDate)) + '&loginName=' + (loginName == null ? '' : encodeURIComponent(loginName)) + '&toDate=' + (toDate == null ? '' : encodeURIComponent(toDate)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Holding Summary
		 * The get holding summary service is used to get the summary of asset classifications for the user.<br>By default, accounts with status as ACTIVE and TO BE CLOSED will be considered.<br>If the include parameter value is passed as details then a summary with holdings and account information is returned.<br>
		 * Get derived/holdingSummary
		 * @param {string} accountIds Comma separated accountIds
		 * @param {string} classificationType e.g. Country, Sector, etc.
		 * @param {string} include details
		 * @return {void} OK
		 */
		GetHoldingSummary(accountIds: string | null | undefined, classificationType: string | null | undefined, include: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'derived/holdingSummary?accountIds=' + (accountIds == null ? '' : encodeURIComponent(accountIds)) + '&classificationType=' + (classificationType == null ? '' : encodeURIComponent(classificationType)) + '&include=' + (include == null ? '' : encodeURIComponent(include)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Networth Summary
		 * The get networth service is used to get the networth for the user.<br>If the include parameter value is passed as details then networth with historical balances is returned. <br>
		 * Get derived/networth
		 * @param {string} accountIds comma separated accountIds
		 * @param {string} container bank/creditCard/investment/insurance/loan/realEstate/otherAssets/otherLiabilities
		 * @param {string} fromDate from date for balance retrieval (YYYY-MM-DD)
		 * @param {string} include details
		 * @param {string} interval D-daily, W-weekly or M-monthly
		 * @param {number} skip skip (Min 0)
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} toDate toDate for balance retrieval (YYYY-MM-DD)
		 * @param {number} top top (Max 500)
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {void} OK
		 */
		GetNetworth(accountIds: string | null | undefined, container: string | null | undefined, fromDate: string | null | undefined, include: string | null | undefined, interval: string | null | undefined, skip: number | null | undefined, toDate: string | null | undefined, top: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'derived/networth?accountIds=' + (accountIds == null ? '' : encodeURIComponent(accountIds)) + '&container=' + (container == null ? '' : encodeURIComponent(container)) + '&fromDate=' + (fromDate == null ? '' : encodeURIComponent(fromDate)) + '&include=' + (include == null ? '' : encodeURIComponent(include)) + '&interval=' + (interval == null ? '' : encodeURIComponent(interval)) + '&skip=' + skip + '&toDate=' + (toDate == null ? '' : encodeURIComponent(toDate)) + '&top=' + top, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Transaction Summary
		 * The transaction summary service provides the summary values of transactions for the given date range by category type, high-level categories, or system-defined categories.<br><br>Yodlee has the transaction data stored for a day, month, year and week per category as per the availability of user's data. If the include parameter value is passed as details, then summary details will be returned depending on the interval passed-monthly is the default.<br><br><b>Notes:</b><ol> <li> Details can be requested for only one system-defined category<li>Passing categoryType is mandatory except when the groupBy value is CATEGORY_TYPE<li>Dates will not be respected for monthly, yearly, and weekly details<li>When monthly details are requested, only the fromDate and toDate month will be respected<li>When yearly details are requested, only the fromDate and toDate year will be respected<li>For weekly data points, details will be provided for every Sunday date available within the fromDate and toDate<li>This service supports the localization feature and accepts locale as a header parameter</li></ol>
		 * Get derived/transactionSummary
		 * @param {string} accountId comma separated account Ids
		 * @param {string} categoryId comma separated categoryIds
		 * @param {string} categoryType INCOME, EXPENSE, TRANSFER, UNCATEGORIZE or DEFERRED_COMPENSATION
		 * @param {string} fromDate YYYY-MM-DD format
		 * @param {string} groupBy CATEGORY_TYPE, HIGH_LEVEL_CATEGORY or CATEGORY
		 * @param {string} include details
		 * @param {boolean} includeUserCategory TRUE/FALSE
		 * @param {string} interval D-daily, W-weekly, M-mothly or Y-yearly
		 * @param {string} toDate YYYY-MM-DD format
		 * @return {void} OK
		 */
		GetTransactionSummary(accountId: string | null | undefined, categoryId: string | null | undefined, categoryType: string | null | undefined, fromDate: string | null | undefined, groupBy: string, include: string | null | undefined, includeUserCategory: boolean | null | undefined, interval: string | null | undefined, toDate: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'derived/transactionSummary?accountId=' + (accountId == null ? '' : encodeURIComponent(accountId)) + '&categoryId=' + (categoryId == null ? '' : encodeURIComponent(categoryId)) + '&categoryType=' + (categoryType == null ? '' : encodeURIComponent(categoryType)) + '&fromDate=' + (fromDate == null ? '' : encodeURIComponent(fromDate)) + '&groupBy=' + (groupBy == null ? '' : encodeURIComponent(groupBy)) + '&include=' + (include == null ? '' : encodeURIComponent(include)) + '&includeUserCategory=' + includeUserCategory + '&interval=' + (interval == null ? '' : encodeURIComponent(interval)) + '&toDate=' + (toDate == null ? '' : encodeURIComponent(toDate)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Documents
		 * The get documents service allows customers to search or retrieve metadata related to documents. <br>The API returns the document as per the input parameters passed. If no date range is provided then all downloaded documents will be retrieved. Details of deleted documents or documents associated to closed providerAccount will not be returned. <br>This API is a premium service which requires subscription in advance to use.  Please contact Yodlee Client Services for more information. <br>
		 * Get documents
		 * @param {string} Keyword The string used to search a document by its name.
		 * @param {string} accountId The unique identifier of an account. Retrieve documents for a given accountId.
		 * @param {string} docType Accepts only one of the following valid document types: STMT, TAX, and EBILL.
		 * @param {string} fromDate The date from which documents have to be retrieved.
		 * @param {string} toDate The date to which documents have to be retrieved.
		 * @return {void} OK
		 */
		GetDocuments(Keyword: string | null | undefined, accountId: string | null | undefined, docType: string | null | undefined, fromDate: string | null | undefined, toDate: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'documents?Keyword=' + (Keyword == null ? '' : encodeURIComponent(Keyword)) + '&accountId=' + (accountId == null ? '' : encodeURIComponent(accountId)) + '&docType=' + (docType == null ? '' : encodeURIComponent(docType)) + '&fromDate=' + (fromDate == null ? '' : encodeURIComponent(fromDate)) + '&toDate=' + (toDate == null ? '' : encodeURIComponent(toDate)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete Document
		 * The delete document service allows the consumer to delete a document. The deleted document will not be returned in the get documents API. The HTTP response code is 204 (success without content).<br>Documents can be deleted only if the document related dataset attributes are subscribed.<br>
		 * Delete documents/{documentId}
		 * @param {string} documentId documentId
		 * @return {void} 
		 */
		DeleteDocument(documentId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'documents/' + (documentId == null ? '' : encodeURIComponent(documentId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Download a Document
		 * The get document details service allows consumers to download a document. The document is provided in base64.<br>This API is a premium service which requires subscription in advance to use.  Please contact Yodlee Client Services for more information. <br>
		 * Get documents/{documentId}
		 * @param {string} documentId documentId
		 * @return {void} OK
		 */
		DownloadDocument(documentId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'documents/' + (documentId == null ? '' : encodeURIComponent(documentId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Holdings
		 * The get holdings service is used to get the list of holdings of a user.<br>Supported holding types can be employeeStockOption, moneyMarketFund, bond, etc. and is obtained using get holding type list service. <br>Asset classifications for the holdings need to be requested through the "include" parameter.<br>Asset classification information for holdings are not available by default, as it is a premium feature.<br>
		 * Get holdings
		 * @param {string} accountId Comma separated accountId
		 * @param {string} assetClassification_classificationType e.g. Country, Sector, etc.
		 * @param {string} classificationValue e.g. US
		 * @param {string} include assetClassification
		 * @param {string} providerAccountId providerAccountId
		 * @return {void} OK
		 */
		GetHoldings(accountId: string | null | undefined, assetClassification_classificationType: string | null | undefined, classificationValue: string | null | undefined, include: string | null | undefined, providerAccountId: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'holdings?accountId=' + (accountId == null ? '' : encodeURIComponent(accountId)) + '&assetClassification_classificationType=' + (assetClassification_classificationType == null ? '' : encodeURIComponent(assetClassification_classificationType)) + '&classificationValue=' + (classificationValue == null ? '' : encodeURIComponent(classificationValue)) + '&include=' + (include == null ? '' : encodeURIComponent(include)) + '&providerAccountId=' + (providerAccountId == null ? '' : encodeURIComponent(providerAccountId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Asset Classification List
		 * The get asset classifications list service is used to get the supported asset classifications. <br>The response includes different classification types like assetClass, country, sector, style, etc. and the values corresponding to each type.<br>
		 * Get holdings/assetClassificationList
		 * @return {void} OK
		 */
		GetAssetClassificationList(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'holdings/assetClassificationList', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Holding Type List
		 * The get holding types list service is used to get the supported holding types.<br>The response includes different holding types such as future, moneyMarketFund, stock, etc. and it returns the supported holding types <br>
		 * Get holdings/holdingTypeList
		 * @return {void} OK
		 */
		GetHoldingTypeList(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'holdings/holdingTypeList', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Security Details
		 * The get security details service is used to get all the security information for the holdings<br>
		 * Get holdings/securities
		 * @param {string} holdingId Comma separated holdingId
		 * @return {void} OK
		 */
		GetSecurities(holdingId: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'holdings/securities?holdingId=' + (holdingId == null ? '' : encodeURIComponent(holdingId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Provider Accounts
		 * The get provider accounts service is used to return all the provider accounts added by the user. <br>This includes the failed and successfully added provider accounts.<br>
		 * Get providerAccounts
		 * @param {string} include include
		 * @param {string} providerIds Comma separated providerIds.
		 * @return {void} OK
		 */
		GetAllProviderAccounts(include: string | null | undefined, providerIds: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'providerAccounts?include=' + (include == null ? '' : encodeURIComponent(include)) + '&providerIds=' + (providerIds == null ? '' : encodeURIComponent(providerIds)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Update Account
		 * The update account API is used to:<br> <ul><li>Retrieve the latest information for accounts that belong to one providerAccount from the provider site. You must allow at least 15 min between requests.<li>Retrieve the latest information of all the eligible accounts that belong to the user.<li>Data to be retrieved from the provider site can be overridden using datasetName or dataset. If you do pass datasetName, all the datasets that are implicitly configured for the dataset will be retrieved. This action is allowed for single provider account refresh flows only.<li>Check the status of the providerAccount before invoking this API. Do not call this API to trigger any action on a providerAccount when an action is already in progress for the providerAccount.<li>If the customer has subscribed to the REFRESH event notification and invoked this API, relevant notifications will be sent to the customer.<li>A dataset may depend on another dataset for retrieval, so the response will include the requested and dependent datasets.<li>Check all the dataset additional statuses returned in the response because the provider account status is drawn from the dataset additional statuses.<li>Updating preferences using this API will trigger refreshes.<li> The content type has to be passed as application/json for the body parameter.</ul><br>-----------------------------------------------------------------------------------------------------------------------------------------<br><br><b>Update All Eligible Accounts - Notes:</b><br><ul><li>This API will trigger a refresh for all the eligible provider accounts(both OB and credential-based accounts).<li>This API will not refresh closed, inactive, or UAR accounts, or accounts with refreshes in-progress or recently refreshed non-OB accounts.<li>No parameters should be passed to this API to trigger this action.<li>Do not call this API often. Our recommendation is to call this only at the time the user logs in to your app because it can hamper other API calls performance.<li>The response only contains information for accounts that were refreshed. If no accounts are eligible for refresh, no response is returned.</ul>
		 * Put providerAccounts
		 * @param {string} providerAccountIds comma separated providerAccountIds
		 * @param {ProviderAccountRequest} requestBody loginForm or field entity
		 * @return {void} OK
		 */
		EditCredentialsOrRefreshProviderAccount(providerAccountIds: string, requestBody: ProviderAccountRequest): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'providerAccounts?providerAccountIds=' + (providerAccountIds == null ? '' : encodeURIComponent(providerAccountIds)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get User Profile Details
		 * The get provider accounts profile service is used to return the user profile details that are associated to the provider account. <br>
		 * Get providerAccounts/profile
		 * @param {string} providerAccountId Comma separated providerAccountIds.
		 * @return {void} OK
		 */
		GetProviderAccountProfiles(providerAccountId: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'providerAccounts/profile?providerAccountId=' + (providerAccountId == null ? '' : encodeURIComponent(providerAccountId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete Provider Account
		 * The delete provider account service is used to delete a provider account from the Yodlee system. This service also deletes the accounts that are created in the Yodlee system for that provider account. <br>This service does not return a response. The HTTP response code is 204 (Success with no content).<br>
		 * Delete providerAccounts/{providerAccountId}
		 * @param {string} providerAccountId providerAccountId
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {void} OK
		 */
		DeleteProviderAccount(providerAccountId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'providerAccounts/' + providerAccountId, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Provider Account Details
		 * The get provider account details service is used to learn the status of adding accounts and updating accounts.<br>This service has to be called continuously to know the progress level of the triggered process. This service also provides the MFA information requested by the provider site.<br>When <i>include = credentials</i>, questions is passed as input, the service returns the credentials (non-password values) and questions stored in the Yodlee system for that provider account. <br><br><b>Note:</b> <li>The password and answer fields are not returned in the response.</li>
		 * Get providerAccounts/{providerAccountId}
		 * @param {string} include include credentials,questions
		 * @param {string} providerAccountId providerAccountId
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @param {string} requestId The unique identifier for the request that returns contextual data
		 * @return {void} OK
		 */
		GetProviderAccount(include: string | null | undefined, providerAccountId: string, requestId: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'providerAccounts/' + providerAccountId + '?include=' + (include == null ? '' : encodeURIComponent(include)) + '&requestId=' + (requestId == null ? '' : encodeURIComponent(requestId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Update Preferences
		 * This endpoint is used to update preferences like data extracts and auto refreshes without triggering refresh for the providerAccount.<br>Setting isDataExtractsEnabled to false will not trigger data extracts notification and dataExtracts/events will not reflect any data change that is happening for the providerAccount.<br>Modified data will not be provided in the dataExtracts/userData endpoint.<br>Setting isAutoRefreshEnabled to false will not trigger auto refreshes for the provider account.<br>
		 * Put providerAccounts/{providerAccountId}/preferences
		 * @param {string} providerAccountId providerAccountId
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @param {ProviderAccountPreferencesRequest} requestBody preferences
		 * @return {void} 
		 */
		UpdatePreferences(providerAccountId: string, requestBody: ProviderAccountPreferencesRequest): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'providerAccounts/' + providerAccountId + '/preferences', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Providers
		 * The get provider service is used to get all the providers that are enabled, search a provider service by name or routing number and get popular sites of a region. <br>Searching for a provider using a routing number is applicable only to the USA and Canada regions.<br>The valid values for priority are: <br>   1. cobrand: Returns providers enabled for the cobrand (Default priority)<br>   2. popular: Returns providers popular among users of the customer<br><br>Only the datasets, attributes, and containers that are enabled for the customer will be returned in the response.<br>Input for the dataset$filter should adhere to the following expression:<br><dataset.name>[<attribute.name>.container[<container> OR <container>] OR <attribute.name>.container[<container>]] <br>OR <dataset.name>[<attribute.name> OR <attribute.name>]<br><b>dataset$filter value examples:</b><br>ACCT_PROFILE[FULL_ACCT_NUMBER.container[bank OR investment OR creditCard]]<br>ACCT_PROFILE[FULL_ACCT_NUMBER.container[bank]]<br>BASIC_AGG_DATA[ACCOUNT_DETAILS.container[bank OR investment] OR HOLDINGS.container[bank]] OR ACCT_PROFILE[FULL_ACCT_NUMBER.container[bank]]<br>BASIC_AGG_DATA<br>BASIC_AGG_DATA OR ACCT_PROFILE<br>BASIC_AGG_DATA [ ACCOUNT_DETAILS OR HOLDINGS ]<br>BASIC_AGG_DATA [ ACCOUNT_DETAILS] OR DOCUMENT <br>BASIC_AGG_DATA [ BASIC_ACCOUNT_INFO OR ACCOUNT_DETAILS ] <br><br>The fullAcountNumberFields is specified to filter the providers that have paymentAccountNumber or unmaskedAccountNumber support in the FULL_ACCT_NUMBER dataset attribute.<br><b>Examples for usage of fullAccountNumberFields </b><br>dataset$filter=ACCT_PROFILE[ FULL_ACCT_NUMBER.container [ bank ]] &amp; fullAccountNumberFields=paymentAccountNumber<br>dataset$filter=ACCT_PROFILE[ FULL_ACCT_NUMBER.container [ bank ]] &amp; fullAccountNumberFields=unmaskedAccountNumber<br>dataset$filter=ACCT_PROFILE[ FULL_ACCT_NUMBER.container [ bank ]] &amp; fullAccountNumberFields=unmaskedAccountNumber,paymentAccountNumber<br><br>The skip and top parameters are used for pagination. In the skip and top parameters, pass the number of records to be skipped and retrieved, respectively.<br>The response header provides the links to retrieve the next and previous set of transactions.<br><br><b>Note:</b> <ol><li>In a product flow involving user interaction, Yodlee recommends invoking this service with filters.<li>Without filters, the service may perform slowly as it takes a few minutes to return data in the response.<li>The AuthParameter appears in the response only in case of token-based aggregation sites.<li>The pagination feature only applies when the priority parameter is set as cobrand. If no values are provided in the skip and top parameters, the API will only return the first 500 records.<li>This service supports the localization feature and accepts locale as a header parameter.<li>The capability has been deprecated in query parameter and response.</li></ol>
		 * Get providers
		 * @param {string} capability CHALLENGE_DEPOSIT_VERIFICATION - capability search is deprecated
		 * @param {string} datasetfilter Expression to filter the providers by dataset(s) or dataset attribute(s). The default value will be the dataset or dataset attributes configured as default for the customer.
		 * @param {string} fullAccountNumberFields Specify to filter the providers with values paymentAccountNumber,unmaskedAccountNumber.
		 * @param {string} institutionId Institution Id for Single site selection
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @param {string} name Name in minimum 1 character or routing number.
		 * @param {string} priority Search priority
		 * @param {string} providerId Max 5 Comma seperated Provider Ids
		 * @param {number} skip skip (Min 0) - This is not applicable along with 'name' parameter.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} top top (Max 500) - This is not applicable along with 'name' parameter.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {void} OK
		 */
		GetAllProviders(capability: string | null | undefined, datasetfilter: string | null | undefined, fullAccountNumberFields: string | null | undefined, institutionId: string | null | undefined, name: string | null | undefined, priority: string | null | undefined, providerId: string | null | undefined, skip: number | null | undefined, top: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'providers?capability=' + (capability == null ? '' : encodeURIComponent(capability)) + '&datasetfilter=' + (datasetfilter == null ? '' : encodeURIComponent(datasetfilter)) + '&fullAccountNumberFields=' + (fullAccountNumberFields == null ? '' : encodeURIComponent(fullAccountNumberFields)) + '&institutionId=' + institutionId + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&priority=' + (priority == null ? '' : encodeURIComponent(priority)) + '&providerId=' + (providerId == null ? '' : encodeURIComponent(providerId)) + '&skip=' + skip + '&top=' + top, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Providers Count
		 * The count service provides the total number of providers that get returned in the GET /providers depending on the input parameters passed.<br>If you are implementing pagination for providers, call this endpoint before calling GET /providers to know the number of providers that are returned for the input parameters passed.<br>The functionality of the input parameters remains the same as that of the GET /providers endpoint<br><br><b>Note:</b> <li>The capability has been deprecated in the query parameter.</li>
		 * Get providers/count
		 * @param {string} capability CHALLENGE_DEPOSIT_VERIFICATION - capability search is deprecated
		 * @param {string} datasetfilter Expression to filter the providers by dataset(s) or dataset attribute(s). The default value will be the dataset or dataset attributes configured as default for the customer.
		 * @param {string} fullAccountNumberFields Specify to filter the providers with values paymentAccountNumber,unmaskedAccountNumber.
		 * @param {string} name Name in minimum 1 character or routing number.
		 * @param {string} priority Search priority
		 * @return {void} OK
		 */
		GetProvidersCount(capability: string | null | undefined, datasetfilter: string | null | undefined, fullAccountNumberFields: string | null | undefined, name: string | null | undefined, priority: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'providers/count?capability=' + (capability == null ? '' : encodeURIComponent(capability)) + '&datasetfilter=' + (datasetfilter == null ? '' : encodeURIComponent(datasetfilter)) + '&fullAccountNumberFields=' + (fullAccountNumberFields == null ? '' : encodeURIComponent(fullAccountNumberFields)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&priority=' + (priority == null ? '' : encodeURIComponent(priority)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Provider Details
		 * The get provider detail service is used to get detailed information including the login form for a provider.<br>The response is a provider object that includes information such as name of the provider, <br>provider's base URL, a list of containers supported by the provider, the login form details of the provider, etc.<br>Only enabled datasets, attributes and containers gets returned in the response.<br><br><b>Note:</b><li>This service supports the localization feature and accepts locale as a header parameter.<li>The capability has been deprecated in the response.
		 * Get providers/{providerId}
		 * @param {string} providerId providerId
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {void} OK
		 */
		GetProvider(providerId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'providers/' + providerId, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Statements
		 * The statements service is used to get the list of statement related information. <br>By default, all the latest statements of active and to be closed accounts are retrieved for the user. <br>Certain sites do not have both a statement date and a due date. When a fromDate is passed as an input, all the statements that have the due date on or after the passed date are retrieved. <br>For sites that do not have the due date, statements that have the statement date on or after the passed date are retrieved. <br>The default value of "isLatest" is true. To retrieve historical statements isLatest needs to be set to false.<br>
		 * Get statements
		 * @param {string} accountId accountId
		 * @param {string} container creditCard/loan/insurance
		 * @param {string} fromDate from date for statement retrieval (YYYY-MM-DD)
		 * @param {string} isLatest isLatest (true/false)
		 * @param {string} status ACTIVE,TO_BE_CLOSED,CLOSED
		 * @return {void} OK
		 */
		GetStatements(accountId: string | null | undefined, container: string | null | undefined, fromDate: string | null | undefined, isLatest: string | null | undefined, status: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'statements?accountId=' + (accountId == null ? '' : encodeURIComponent(accountId)) + '&container=' + (container == null ? '' : encodeURIComponent(container)) + '&fromDate=' + (fromDate == null ? '' : encodeURIComponent(fromDate)) + '&isLatest=' + (isLatest == null ? '' : encodeURIComponent(isLatest)) + '&status=' + (status == null ? '' : encodeURIComponent(status)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Transactions
		 * The Transaction service is used to get a list of transactions for a user.<br>By default, this service returns the last 30 days of transactions from today's date.<br>The keyword parameter performs a contains search on the original, consumer, and simple description attributes, replace the special characters #, &, and + with percent-encoding values %23, %26, and %2B respectively. Eg: for -Debit# , pass the input as -Debit%23.<br>Values for categoryId parameter can be fetched from get transaction category list service.<br> The categoryId is used to filter transactions based on system-defined category as well as user-defined category.<br>User-defined categoryIds should be provided in the filter with the prefix ''U''. E.g. U10002<br>The skip and top parameters are used for pagination. In the skip and top parameters pass the number of records to be skipped and retrieved, respectively. The response header provides the links to retrieve the next and previous set of transactions.<br>Double quotes in the merchant name will be prefixed by backslashes (&#92;) in the response, e.g. Toys "R" Us. <br>sourceId is a unique ID that the provider site has assigned to the transaction. The source ID is only available for the pre-populated accounts. Pre-populated accounts are the accounts that the FI customers shares with Yodlee, so that the user does not have to add or aggregate those accounts.<br><br><b>Note</b><li> <a href="https://developer.yodlee.com/docs/api/1.1/Transaction_Data_Enrichment">TDE</a> is made available for bank and card accounts and for the US market only.The address field in the response is available only when the TDE key is turned on.<li>The pagination feature is available by default. If no values are passed in the skip and top parameters, the API will only return the first 500 transactions.<li>This service supports the localization feature and accepts locale as a header parameter.<br>
		 * Get transactions
		 * @param {string} accountId Comma separated accountIds
		 * @param {string} baseType DEBIT/CREDIT
		 * @param {string} categoryId Comma separated categoryIds
		 * @param {string} categoryType Transaction Category Type(UNCATEGORIZE, INCOME, TRANSFER, EXPENSE or DEFERRED_COMPENSATION)
		 * @param {string} container bank/creditCard/investment/insurance/loan
		 * @param {string} detailCategoryId Comma separated detailCategoryIds
		 * @param {string} fromDate Transaction from date(YYYY-MM-DD)
		 * @param {string} highLevelCategoryId Comma separated highLevelCategoryIds
		 * @param {string} keyword Transaction search text
		 * @param {number} skip skip (Min 0)
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} toDate Transaction end date (YYYY-MM-DD)
		 * @param {number} top top (Max 500)
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} type Transaction Type(SELL,SWEEP, etc.) for bank/creditCard/investment
		 * @return {void} OK
		 */
		GetTransactions(accountId: string | null | undefined, baseType: string | null | undefined, categoryId: string | null | undefined, categoryType: string | null | undefined, container: string | null | undefined, detailCategoryId: string | null | undefined, fromDate: string | null | undefined, highLevelCategoryId: string | null | undefined, keyword: string | null | undefined, skip: number | null | undefined, toDate: string | null | undefined, top: number | null | undefined, type: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'transactions?accountId=' + (accountId == null ? '' : encodeURIComponent(accountId)) + '&baseType=' + (baseType == null ? '' : encodeURIComponent(baseType)) + '&categoryId=' + (categoryId == null ? '' : encodeURIComponent(categoryId)) + '&categoryType=' + (categoryType == null ? '' : encodeURIComponent(categoryType)) + '&container=' + (container == null ? '' : encodeURIComponent(container)) + '&detailCategoryId=' + (detailCategoryId == null ? '' : encodeURIComponent(detailCategoryId)) + '&fromDate=' + (fromDate == null ? '' : encodeURIComponent(fromDate)) + '&highLevelCategoryId=' + (highLevelCategoryId == null ? '' : encodeURIComponent(highLevelCategoryId)) + '&keyword=' + (keyword == null ? '' : encodeURIComponent(keyword)) + '&skip=' + skip + '&toDate=' + (toDate == null ? '' : encodeURIComponent(toDate)) + '&top=' + top + '&type=' + (type == null ? '' : encodeURIComponent(type)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Transaction Category List
		 * The categories service returns the list of available transaction categories.<br>High level category is returned in the response only if it is opted by the customer.<br>When invoked by passing the cobrand session or admin access token, this service returns the supported transaction categories at the cobrand level. <br>When invoked by passing the cobrand session and the user session or user access token, this service returns the transaction categories <br>along with user-defined categories.<br>Double quotes in the user-defined category name will be prefixed by backslashes (&#92;) in the response, <br>e.g. Toys "R" Us.<br/>Source and id are the primary attributes of the category entity.<br><br><b>Note:</b><li>This service supports the localization feature and accepts locale as a header parameter.</li>
		 * Get transactions/categories
		 * @return {void} OK
		 */
		GetTransactionCategories(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'transactions/categories', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Create Category
		 * The create transaction categories service is used to create user-defined categories for a system-defined category.<br>The parentCategoryId is the system-defined category id.This can be retrieved using get transaction categories service.<br>The categoryName can accept minimum of 1, maximum of 50 alphanumeric or special characters.<br>The HTTP response code is 201 (Created successfully).<br>
		 * Post transactions/categories
		 * @param {TransactionCategoryRequest} requestBody User Transaction Category in JSON format
		 * @return {void} 
		 */
		CreateTransactionCategory(requestBody: TransactionCategoryRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'transactions/categories', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Update Category
		 * The update transaction categories service is used to update the transaction category name<br>for a high level category, a system-defined category and a user-defined category.<br>The renamed category can be set back to the original name by passing an empty string for categoryName.<br>The categoryName can accept minimum of 1, maximum of 50 alphanumeric or special characters.<br>The HTTP response code is 204 (Success without content).<br>
		 * Put transactions/categories
		 * @param {UpdateCategoryRequest} requestBody updateCategoryRequest
		 * @return {void} 
		 */
		UpdateTransactionCategory(requestBody: UpdateCategoryRequest): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'transactions/categories', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Transaction Categorization Rules
		 * The get transaction categorization rule service is used to get all the categorization rules.<br>
		 * Get transactions/categories/rules
		 * @return {void} OK
		 */
		GetTransactionCategorizationRulesDeprecated(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'transactions/categories/rules', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Create or Run Transaction Categorization Rule
		 * The Create or Run Transaction Categorization Rule endpoint is used to: <br>Create transaction categorization rules for both system and user-defined categories.<br>Run all the transaction categorization rules to categorize transactions by calling the endpoint with action=run as the query parameter. <br><br>The input body parameters to create transaction categorization rules follow:<br>     categoryId - This field is mandatory and numeric<br>     priority - This field is optional and numeric. Priority decides the order in which the rule gets applied on transactions.<br>     ruleClause - This field is mandatory and should contain at least one rule<br>     field - The value can be description or amount<br><br>       If the field value is description then,<br>         1. operation - value can be stringEquals or stringContains<br>         2. value - value should be min of 3 and max of 50 characters<br><br>       If the field value is amount then, <br>         1. operation - value can be numberEquals, numberLessThan, numberLessThanEquals, numberGreaterThan or numberGreaterThanEquals<br>         2. value - min value 0 and a max value of 99999999999.99 is allowed<br>The HTTP response code is 201 (Created Successfully).
		 * Post transactions/categories/rules
		 * @param {string} action To run rules, pass action=run. Only value run is supported
		 * @param {string} ruleParam rules(JSON format) to categorize the transactions
		 * @return {void} 
		 */
		CreateOrRunTransactionCategorizationRules(action: string | null | undefined, ruleParam: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'transactions/categories/rules?action=' + (action == null ? '' : encodeURIComponent(action)) + '&ruleParam=' + (ruleParam == null ? '' : encodeURIComponent(ruleParam)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete Transaction Categorization Rule
		 * The delete transaction categorization rule service is used to delete the given user-defined transaction categorization rule for both system-defined category as well as user-defined category.<br>This will delete all the corresponding rule clauses associated with the rule.<br>The HTTP response code is 204 (Success without content).<br>
		 * Delete transactions/categories/rules/{ruleId}
		 * @param {string} ruleId ruleId
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {void} 
		 */
		DeleteTransactionCategorizationRule(ruleId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'transactions/categories/rules/' + ruleId, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Run Transaction Categorization Rule
		 * The run transaction categorization rule service is used to run a rule on transactions, to categorize the transactions.<br>The HTTP response code is 204 (Success with no content).<br>
		 * Post transactions/categories/rules/{ruleId}
		 * @param {string} ruleId Unique id of the categorization rule
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {void} 
		 */
		RunTransactionCategorizationRule(action: RunTransactionCategorizationRuleAction, ruleId: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'transactions/categories/rules/' + ruleId + '?action=' + action, null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Update Transaction Categorization Rule
		 * The update transaction categorization rule service is used to update a categorization rule for both system-defined category as well as user-defined category.<br>ruleParam JSON input should be as explained in the create transaction categorization rule service.<br>The HTTP response code is 204 (Success without content).<br>
		 * Put transactions/categories/rules/{ruleId}
		 * @param {string} ruleId ruleId
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @param {TransactionCategorizationRuleRequest} requestBody transactionCategoriesRuleRequest
		 * @return {void} 
		 */
		UpdateTransactionCategorizationRule(ruleId: string, requestBody: TransactionCategorizationRuleRequest): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'transactions/categories/rules/' + ruleId, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Transaction Categorization Rules
		 * The get transaction categorization rule service is used to get all the categorization rules.<br>
		 * Get transactions/categories/txnRules
		 * @return {void} OK
		 */
		GetTransactionCategorizationRules(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'transactions/categories/txnRules', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete Category
		 * The delete transaction categories service is used to delete the given user-defined category.<br>The HTTP response code is 204 (Success without content).<br>
		 * Delete transactions/categories/{categoryId}
		 * @param {string} categoryId categoryId
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {void} 
		 */
		DeleteTransactionCategory(categoryId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'transactions/categories/' + categoryId, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Transactions Count
		 * The count service provides the total number of transactions for a specific user depending on the input parameters passed.<br>If you are implementing pagination for transactions, call this endpoint before calling GET /transactions to know the number of transactions that are returned for the input parameters passed.<br>The functionality of the input parameters remains the same as that of the GET /transactions endpoint.<br>
		 * Get transactions/count
		 * @param {string} accountId Comma separated accountIds	
		 * @param {string} baseType DEBIT/CREDIT
		 * @param {string} categoryId Comma separated categoryIds
		 * @param {string} categoryType Transaction Category Type(UNCATEGORIZE, INCOME, TRANSFER, EXPENSE or DEFERRED_COMPENSATION)
		 * @param {string} container bank/creditCard/investment/insurance/loan
		 * @param {string} detailCategoryId Comma separated detailCategoryIds
		 * @param {string} fromDate Transaction from date(YYYY-MM-DD)
		 * @param {string} highLevelCategoryId Comma separated highLevelCategoryIds
		 * @param {string} keyword Transaction search text	
		 * @param {string} toDate Transaction end date (YYYY-MM-DD)
		 * @param {string} type Transaction Type(SELL,SWEEP, etc.)
		 * @return {void} OK
		 */
		GetTransactionsCount(accountId: string | null | undefined, baseType: string | null | undefined, categoryId: string | null | undefined, categoryType: string | null | undefined, container: string | null | undefined, detailCategoryId: string | null | undefined, fromDate: string | null | undefined, highLevelCategoryId: string | null | undefined, keyword: string | null | undefined, toDate: string | null | undefined, type: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'transactions/count?accountId=' + (accountId == null ? '' : encodeURIComponent(accountId)) + '&baseType=' + (baseType == null ? '' : encodeURIComponent(baseType)) + '&categoryId=' + (categoryId == null ? '' : encodeURIComponent(categoryId)) + '&categoryType=' + (categoryType == null ? '' : encodeURIComponent(categoryType)) + '&container=' + (container == null ? '' : encodeURIComponent(container)) + '&detailCategoryId=' + (detailCategoryId == null ? '' : encodeURIComponent(detailCategoryId)) + '&fromDate=' + (fromDate == null ? '' : encodeURIComponent(fromDate)) + '&highLevelCategoryId=' + (highLevelCategoryId == null ? '' : encodeURIComponent(highLevelCategoryId)) + '&keyword=' + (keyword == null ? '' : encodeURIComponent(keyword)) + '&toDate=' + (toDate == null ? '' : encodeURIComponent(toDate)) + '&type=' + (type == null ? '' : encodeURIComponent(type)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Update Transaction
		 * The update transaction service is used to update the category,consumer description, memo for a transaction.<br>The HTTP response code is 204 (Success without content).<br>
		 * Put transactions/{transactionId}
		 * @param {string} transactionId transactionId
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @param {TransactionRequest} requestBody transactionRequest
		 * @return {void} 
		 */
		UpdateTransaction(transactionId: string, requestBody: TransactionRequest): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'transactions/' + transactionId, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get User Details
		 * The get user details service is used to get the user profile information and the application preferences set at the time of user registration.<br>
		 * Get user
		 * @return {void} OK
		 */
		GetUser(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'user', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Update User Details
		 * The update user details service is used to update user details like name, address, currency preference, etc.<br>Currency provided in the input will be respected in the <a href="https://developer.yodlee.com/api-reference#tag/Derived">derived</a> services and the amount fields in the response will be provided in the preferred currency.<br>The HTTP response code is 204 (Success without content). <br>
		 * Put user
		 * @param {UpdateUserRequest} requestBody userRequest
		 * @return {void} 
		 */
		UpdateUser(requestBody: UpdateUserRequest): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'user', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Access Tokens
		 * The Get Access Tokens service is used to retrieve the access tokens for the application id(s) provided.<br>URL in the response can be used to launch the application for which token is requested.<br><br><b>Note:</b> <li>This endpoint is deprecated for customers using the API Key-based authentication and is applicable only to customers who use the SAML-based authentication.<br>
		 * Get user/accessTokens
		 * @param {string} appIds appIds
		 * @return {void} OK
		 */
		GetAccessTokens(appIds: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'user/accessTokens?appIds=' + (appIds == null ? '' : encodeURIComponent(appIds)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * User Logout
		 * <b>Deprecated</b>: This endpoint is deprecated for API Key-based authentication. The user logout service allows the user to log out of the application.<br>The service does not return a response body. The HTTP response code is 204 (Success with no content).<br>
		 * Post user/logout
		 * @return {void} 
		 */
		UserLogout(): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'user/logout', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Register User
		 * The register user service is used to register a user in Yodlee.<br>The loginName cannot include spaces and must be between 3 and 150 characters.<br>locale passed must be one of the supported locales for the customer. <br>Currency provided in the input will be respected in the derived services and the amount fields in the response will be provided in the preferred currency.<br>userParam is accepted as a body parameter. <br><br><b>Note:</b> <li>The content type has to be passed as application/json for the body parameter.</li>
		 * Post user/register
		 * @param {UserRequest} requestBody userRequest
		 * @return {void} Login Successful
		 */
		RegisterUser(requestBody: UserRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'user/register', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Saml Login
		 * The SAML login service is used to authenticate system users with a SAML response.<br>A new user will be created with the input provided if that user isn't already in the system.<br>For existing users, the system will make updates based on changes or new information.<br>When authentication is successful, a user session token is returned.<br><br><b>Note:</b> <li>The content type has to be passed as application/x-www-form-urlencoded. <li>issuer, source and samlResponse should be passed as body parameters.</li>
		 * Post user/samlLogin
		 * @param {string} issuer issuer
		 * @param {string} samlResponse samlResponse
		 * @param {string} source source
		 * @return {void} OK
		 */
		SamlLogin(issuer: string, samlResponse: string, source: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'user/samlLogin?issuer=' + (issuer == null ? '' : encodeURIComponent(issuer)) + '&samlResponse=' + (samlResponse == null ? '' : encodeURIComponent(samlResponse)) + '&source=' + (source == null ? '' : encodeURIComponent(source)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete User
		 * The delete user service is used to delete or unregister a user from Yodlee. <br>Once deleted, the information related to the users cannot be retrieved. <br>The HTTP response code is 204 (Success without content)<br>
		 * Delete user/unregister
		 * @return {void} 
		 */
		Unregister(): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'user/unregister', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Verification Status
		 * The get verification status service is used to retrieve the verification status of all accounts for which the MS or CDV process has been initiated.<br>For the MS process, the account details object returns the aggregated information of the verified accounts. For the CDV process, the account details object returns the user provided account information.<br>
		 * Get verification
		 * @param {string} accountId Comma separated accountId
		 * @param {string} providerAccountId Comma separated providerAccountId
		 * @param {string} verificationType verificationType
		 * @return {void} OK
		 */
		GetVerificationStatus(accountId: string | null | undefined, providerAccountId: string | null | undefined, verificationType: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'verification?accountId=' + (accountId == null ? '' : encodeURIComponent(accountId)) + '&providerAccountId=' + (providerAccountId == null ? '' : encodeURIComponent(providerAccountId)) + '&verificationType=' + (verificationType == null ? '' : encodeURIComponent(verificationType)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Initiaite Matching Service and Challenge Deposit
		 * The post verification service is used to initiate the matching service (MS) and the challenge deposit account verification (CDV) process to verify account ownership.<br>The MS and CDV process can verify ownership of only bank accounts (i.e., checking and savings).<br>The MS verification can be initiated only for an already aggregated account or a providerAccount.<br>The prerequisite for the MS verification process is to request the ACCT_PROFILE dataset with the HOLDER_NAME attribute.<br>In the MS verification process, a string-match of the account holder name with the registered user name is performed instantaneously. You can contact the Yodlee CustomerCare to configure the full name or only the last name match.<br>Once the CDV process is initiated Yodlee will post the microtransaction (i.e., credit and debit) in the user's account. The CDV process takes 2 to 3 days to complete as it requires the user to provide the microtransaction details.<br>The CDV process is currently supported only in the United States.<br>The verificationId in the response can be used to track the verification request.<br><br><b>Notes:</b><li>This endpoint cannot be used to test the CDV functionality in the developer sandbox or test environment. You will need a money transmitter license to implement the CDV functionality and also require the Yodlee Professional Services team's assistance to set up a dedicated environment.
		 * Post verification
		 * @param {VerificationRequest} requestBody verification information
		 * @return {void} OK
		 */
		InitiateMatchingOrChallengeDepositeVerification(requestBody: VerificationRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'verification', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Verify Challenge Deposit
		 * The put verification service is used to complete the challenge deposit verification (CDV) process.<br>This service is used only by the customer of CDV flow.<br>In the CDV process, the user-provided microtransaction details (i.e., credit and debit) is matched against the microtransactions posted by Yodlee. For a successful verification of the account's ownership both the microtransaction details should match.<br>The CDV process is currently supported only in the United States.<br><br><b>Notes:</b><ul><li>This endpoint cannot be used to test the CDV functionality in the developer sandbox or test environment. You will need a money transmitter license to implement the CDV functionality and also require the Yodlee Professional Services team's assistance to set up a dedicated environment.</li></ul>
		 * Put verification
		 * @param {UpdateVerificationRequest} requestBody verification information
		 * @return {void} OK
		 */
		VerifyChallengeDeposit(requestBody: UpdateVerificationRequest): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'verification', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Verify Accounts Using Transactions
		 * The verify account service is used to verify the account's ownership by  matching the transaction details with the accounts aggregated for the user.<br><ul><li>If a match is identified, the service returns details of all the accounts along with the matched transaction's details.<li>If no transaction match is found, an empty response will be returned.<li>A maximum of 5 transactionCriteria can be passed in a request.<li>The baseType, date, and amount parameters should mandatorily be passed.<li>The optional dateVariance parameter cannot be more than 7 days. For example, +7, -4, or +/-2.<li>Pass the container or accountId parameters for better performance.<li>This service supports the localization feature and accepts locale as a header parameter.</li></ul>
		 * Post verifyAccount/{providerAccountId}
		 * @param {string} providerAccountId providerAccountId
		 * @param {VerifyAccountRequest} requestBody verificationParam
		 * @return {void} OK
		 */
		InitiateAccountVerification(providerAccountId: string, requestBody: VerifyAccountRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'verifyAccount/' + (providerAccountId == null ? '' : encodeURIComponent(providerAccountId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

	export enum RunTransactionCategorizationRuleAction { run = 'run' }

}

