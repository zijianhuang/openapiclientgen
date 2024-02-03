import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/**  Response of CreateBudget  */
	export interface CreateBudgetResponse {
	}

	/**  Response of CreateBudget  */
	export interface CreateBudgetResponseFormProperties {
	}
	export function CreateCreateBudgetResponseFormGroup() {
		return new FormGroup<CreateBudgetResponseFormProperties>({
		});

	}


	/**  Request of CreateBudget  */
	export interface CreateBudgetRequest {

		/** Required */
		AccountId: string;

		/** Required */
		Budget: Budget;
		NotificationsWithSubscribers?: Array<NotificationWithSubscribers>;
	}

	/**  Request of CreateBudget  */
	export interface CreateBudgetRequestFormProperties {

		/** Required */
		AccountId: FormControl<string | null | undefined>,
	}
	export function CreateCreateBudgetRequestFormGroup() {
		return new FormGroup<CreateBudgetRequestFormProperties>({
			AccountId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p>Represents the output of the <code>CreateBudget</code> operation. The content consists of the detailed metadata and data file information, and the current status of the <code>budget</code> object.</p> <p>This is the Amazon Resource Name (ARN) pattern for a budget: </p> <p> <code>arn:aws:budgets::AccountId:budget/budgetName</code> </p> */
	export interface Budget {

		/** Required */
		BudgetName: string;
		BudgetLimit?: Spend;
		PlannedBudgetLimits?: PlannedBudgetLimits;
		CostFilters?: CostFilters;
		CostTypes?: CostTypes;

		/** Required */
		TimeUnit: TimeUnit;
		TimePeriod?: TimePeriod;
		CalculatedSpend?: CalculatedSpend;

		/** Required */
		BudgetType: BudgetType;
		LastUpdatedTime?: Date;
		AutoAdjustData?: AutoAdjustData;
	}

	/** <p>Represents the output of the <code>CreateBudget</code> operation. The content consists of the detailed metadata and data file information, and the current status of the <code>budget</code> object.</p> <p>This is the Amazon Resource Name (ARN) pattern for a budget: </p> <p> <code>arn:aws:budgets::AccountId:budget/budgetName</code> </p> */
	export interface BudgetFormProperties {

		/** Required */
		BudgetName: FormControl<string | null | undefined>,

		/** Required */
		TimeUnit: FormControl<TimeUnit | null | undefined>,

		/** Required */
		BudgetType: FormControl<BudgetType | null | undefined>,
		LastUpdatedTime: FormControl<Date | null | undefined>,
	}
	export function CreateBudgetFormGroup() {
		return new FormGroup<BudgetFormProperties>({
			BudgetName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TimeUnit: new FormControl<TimeUnit | null | undefined>(undefined, [Validators.required]),
			BudgetType: new FormControl<BudgetType | null | undefined>(undefined, [Validators.required]),
			LastUpdatedTime: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** <p>The amount of cost or usage that's measured for a budget.</p> <p>For example, a <code>Spend</code> for <code>3 GB</code> of S3 usage has the following parameters:</p> <ul> <li> <p>An <code>Amount</code> of <code>3</code> </p> </li> <li> <p>A <code>unit</code> of <code>GB</code> </p> </li> </ul> */
	export interface Spend {

		/** Required */
		Amount: string;

		/** Required */
		Unit: string;
	}

	/** <p>The amount of cost or usage that's measured for a budget.</p> <p>For example, a <code>Spend</code> for <code>3 GB</code> of S3 usage has the following parameters:</p> <ul> <li> <p>An <code>Amount</code> of <code>3</code> </p> </li> <li> <p>A <code>unit</code> of <code>GB</code> </p> </li> </ul> */
	export interface SpendFormProperties {

		/** Required */
		Amount: FormControl<string | null | undefined>,

		/** Required */
		Unit: FormControl<string | null | undefined>,
	}
	export function CreateSpendFormGroup() {
		return new FormGroup<SpendFormProperties>({
			Amount: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Unit: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PlannedBudgetLimits {
	}
	export interface PlannedBudgetLimitsFormProperties {
	}
	export function CreatePlannedBudgetLimitsFormGroup() {
		return new FormGroup<PlannedBudgetLimitsFormProperties>({
		});

	}


	/**  A map that represents the cost filters that are applied to the budget. */
	export interface CostFilters {
	}

	/**  A map that represents the cost filters that are applied to the budget. */
	export interface CostFiltersFormProperties {
	}
	export function CreateCostFiltersFormGroup() {
		return new FormGroup<CostFiltersFormProperties>({
		});

	}


	/** <p>The types of cost that are included in a <code>COST</code> budget, such as tax and subscriptions.</p> <p> <code>USAGE</code>, <code>RI_UTILIZATION</code>, <code>RI_COVERAGE</code>, <code>SAVINGS_PLANS_UTILIZATION</code>, and <code>SAVINGS_PLANS_COVERAGE</code> budgets don't have <code>CostTypes</code>.</p> */
	export interface CostTypes {
		IncludeTax?: boolean | null;
		IncludeSubscription?: boolean | null;
		UseBlended?: boolean | null;
		IncludeRefund?: boolean | null;
		IncludeCredit?: boolean | null;
		IncludeUpfront?: boolean | null;
		IncludeRecurring?: boolean | null;
		IncludeOtherSubscription?: boolean | null;
		IncludeSupport?: boolean | null;
		IncludeDiscount?: boolean | null;
		UseAmortized?: boolean | null;
	}

	/** <p>The types of cost that are included in a <code>COST</code> budget, such as tax and subscriptions.</p> <p> <code>USAGE</code>, <code>RI_UTILIZATION</code>, <code>RI_COVERAGE</code>, <code>SAVINGS_PLANS_UTILIZATION</code>, and <code>SAVINGS_PLANS_COVERAGE</code> budgets don't have <code>CostTypes</code>.</p> */
	export interface CostTypesFormProperties {
		IncludeTax: FormControl<boolean | null | undefined>,
		IncludeSubscription: FormControl<boolean | null | undefined>,
		UseBlended: FormControl<boolean | null | undefined>,
		IncludeRefund: FormControl<boolean | null | undefined>,
		IncludeCredit: FormControl<boolean | null | undefined>,
		IncludeUpfront: FormControl<boolean | null | undefined>,
		IncludeRecurring: FormControl<boolean | null | undefined>,
		IncludeOtherSubscription: FormControl<boolean | null | undefined>,
		IncludeSupport: FormControl<boolean | null | undefined>,
		IncludeDiscount: FormControl<boolean | null | undefined>,
		UseAmortized: FormControl<boolean | null | undefined>,
	}
	export function CreateCostTypesFormGroup() {
		return new FormGroup<CostTypesFormProperties>({
			IncludeTax: new FormControl<boolean | null | undefined>(undefined),
			IncludeSubscription: new FormControl<boolean | null | undefined>(undefined),
			UseBlended: new FormControl<boolean | null | undefined>(undefined),
			IncludeRefund: new FormControl<boolean | null | undefined>(undefined),
			IncludeCredit: new FormControl<boolean | null | undefined>(undefined),
			IncludeUpfront: new FormControl<boolean | null | undefined>(undefined),
			IncludeRecurring: new FormControl<boolean | null | undefined>(undefined),
			IncludeOtherSubscription: new FormControl<boolean | null | undefined>(undefined),
			IncludeSupport: new FormControl<boolean | null | undefined>(undefined),
			IncludeDiscount: new FormControl<boolean | null | undefined>(undefined),
			UseAmortized: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/**  The time unit of the budget, such as MONTHLY or QUARTERLY. */
	export enum TimeUnit { DAILY = 'DAILY', MONTHLY = 'MONTHLY', QUARTERLY = 'QUARTERLY', ANNUALLY = 'ANNUALLY' }


	/** The period of time that's covered by a budget. The period has a start date and an end date. The start date must come before the end date. There are no restrictions on the end date.  */
	export interface TimePeriod {
		Start?: Date;
		End?: Date;
	}

	/** The period of time that's covered by a budget. The period has a start date and an end date. The start date must come before the end date. There are no restrictions on the end date.  */
	export interface TimePeriodFormProperties {
		Start: FormControl<Date | null | undefined>,
		End: FormControl<Date | null | undefined>,
	}
	export function CreateTimePeriodFormGroup() {
		return new FormGroup<TimePeriodFormProperties>({
			Start: new FormControl<Date | null | undefined>(undefined),
			End: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** <p>The spend objects that are associated with this budget. The <code>actualSpend</code> tracks how much you've used, cost, usage, RI units, or Savings Plans units and the <code>forecastedSpend</code> tracks how much that you're predicted to spend based on your historical usage profile.</p> <p>For example, if it's the 20th of the month and you have spent <code>50</code> dollars on Amazon EC2, your <code>actualSpend</code> is <code>50 USD</code>, and your <code>forecastedSpend</code> is <code>75 USD</code>.</p> */
	export interface CalculatedSpend {

		/** Required */
		ActualSpend: Spend;
		ForecastedSpend?: Spend;
	}

	/** <p>The spend objects that are associated with this budget. The <code>actualSpend</code> tracks how much you've used, cost, usage, RI units, or Savings Plans units and the <code>forecastedSpend</code> tracks how much that you're predicted to spend based on your historical usage profile.</p> <p>For example, if it's the 20th of the month and you have spent <code>50</code> dollars on Amazon EC2, your <code>actualSpend</code> is <code>50 USD</code>, and your <code>forecastedSpend</code> is <code>75 USD</code>.</p> */
	export interface CalculatedSpendFormProperties {
	}
	export function CreateCalculatedSpendFormGroup() {
		return new FormGroup<CalculatedSpendFormProperties>({
		});

	}


	/** <p> The type of a budget. It must be one of the following types: </p> <p> <code>COST</code>, <code>USAGE</code>, <code>RI_UTILIZATION</code>, <code>RI_COVERAGE</code>, <code>SAVINGS_PLANS_UTILIZATION</code>, or <code>SAVINGS_PLANS_COVERAGE</code>.</p> */
	export enum BudgetType { USAGE = 'USAGE', COST = 'COST', RI_UTILIZATION = 'RI_UTILIZATION', RI_COVERAGE = 'RI_COVERAGE', SAVINGS_PLANS_UTILIZATION = 'SAVINGS_PLANS_UTILIZATION', SAVINGS_PLANS_COVERAGE = 'SAVINGS_PLANS_COVERAGE' }


	/** The parameters that determine the budget amount for an auto-adjusting budget. */
	export interface AutoAdjustData {

		/** Required */
		AutoAdjustType: AutoAdjustType;
		HistoricalOptions?: HistoricalOptions;
		LastAutoAdjustTime?: Date;
	}

	/** The parameters that determine the budget amount for an auto-adjusting budget. */
	export interface AutoAdjustDataFormProperties {

		/** Required */
		AutoAdjustType: FormControl<AutoAdjustType | null | undefined>,
		LastAutoAdjustTime: FormControl<Date | null | undefined>,
	}
	export function CreateAutoAdjustDataFormGroup() {
		return new FormGroup<AutoAdjustDataFormProperties>({
			AutoAdjustType: new FormControl<AutoAdjustType | null | undefined>(undefined, [Validators.required]),
			LastAutoAdjustTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum AutoAdjustType { HISTORICAL = 'HISTORICAL', FORECAST = 'FORECAST' }


	/** The parameters that define or describe the historical data that your auto-adjusting budget is based on. */
	export interface HistoricalOptions {

		/** Required */
		BudgetAdjustmentPeriod: number;
		LookBackAvailablePeriods?: number | null;
	}

	/** The parameters that define or describe the historical data that your auto-adjusting budget is based on. */
	export interface HistoricalOptionsFormProperties {

		/** Required */
		BudgetAdjustmentPeriod: FormControl<number | null | undefined>,
		LookBackAvailablePeriods: FormControl<number | null | undefined>,
	}
	export function CreateHistoricalOptionsFormGroup() {
		return new FormGroup<HistoricalOptionsFormProperties>({
			BudgetAdjustmentPeriod: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			LookBackAvailablePeriods: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A notification with subscribers. A notification can have one SNS subscriber and up to 10 email subscribers, for a total of 11 subscribers. */
	export interface NotificationWithSubscribers {

		/** Required */
		Notification: Notification;

		/** Required */
		Subscribers: Array<Subscriber>;
	}

	/** A notification with subscribers. A notification can have one SNS subscriber and up to 10 email subscribers, for a total of 11 subscribers. */
	export interface NotificationWithSubscribersFormProperties {
	}
	export function CreateNotificationWithSubscribersFormGroup() {
		return new FormGroup<NotificationWithSubscribersFormProperties>({
		});

	}


	/** <p>A notification that's associated with a budget. A budget can have up to ten notifications. </p> <p>Each notification must have at least one subscriber. A notification can have one SNS subscriber and up to 10 email subscribers, for a total of 11 subscribers.</p> <p>For example, if you have a budget for 200 dollars and you want to be notified when you go over 160 dollars, create a notification with the following parameters:</p> <ul> <li> <p>A notificationType of <code>ACTUAL</code> </p> </li> <li> <p>A <code>thresholdType</code> of <code>PERCENTAGE</code> </p> </li> <li> <p>A <code>comparisonOperator</code> of <code>GREATER_THAN</code> </p> </li> <li> <p>A notification <code>threshold</code> of <code>80</code> </p> </li> </ul> */
	export interface Notification {

		/** Required */
		NotificationType: NotificationType;

		/** Required */
		ComparisonOperator: ComparisonOperator;

		/** Required */
		Threshold: number;
		ThresholdType?: ThresholdType;
		NotificationState?: NotificationState;
	}

	/** <p>A notification that's associated with a budget. A budget can have up to ten notifications. </p> <p>Each notification must have at least one subscriber. A notification can have one SNS subscriber and up to 10 email subscribers, for a total of 11 subscribers.</p> <p>For example, if you have a budget for 200 dollars and you want to be notified when you go over 160 dollars, create a notification with the following parameters:</p> <ul> <li> <p>A notificationType of <code>ACTUAL</code> </p> </li> <li> <p>A <code>thresholdType</code> of <code>PERCENTAGE</code> </p> </li> <li> <p>A <code>comparisonOperator</code> of <code>GREATER_THAN</code> </p> </li> <li> <p>A notification <code>threshold</code> of <code>80</code> </p> </li> </ul> */
	export interface NotificationFormProperties {

		/** Required */
		NotificationType: FormControl<NotificationType | null | undefined>,

		/** Required */
		ComparisonOperator: FormControl<ComparisonOperator | null | undefined>,

		/** Required */
		Threshold: FormControl<number | null | undefined>,
		ThresholdType: FormControl<ThresholdType | null | undefined>,
		NotificationState: FormControl<NotificationState | null | undefined>,
	}
	export function CreateNotificationFormGroup() {
		return new FormGroup<NotificationFormProperties>({
			NotificationType: new FormControl<NotificationType | null | undefined>(undefined, [Validators.required]),
			ComparisonOperator: new FormControl<ComparisonOperator | null | undefined>(undefined, [Validators.required]),
			Threshold: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			ThresholdType: new FormControl<ThresholdType | null | undefined>(undefined),
			NotificationState: new FormControl<NotificationState | null | undefined>(undefined),
		});

	}


	/**  The type of a notification. It must be ACTUAL or FORECASTED. */
	export enum NotificationType { ACTUAL = 'ACTUAL', FORECASTED = 'FORECASTED' }


	/** <p> The comparison operator of a notification. Currently, the service supports the following operators:</p> <p> <code>GREATER_THAN</code>, <code>LESS_THAN</code>, <code>EQUAL_TO</code> </p> */
	export enum ComparisonOperator { GREATER_THAN = 'GREATER_THAN', LESS_THAN = 'LESS_THAN', EQUAL_TO = 'EQUAL_TO' }


	/**  The type of threshold for a notification. */
	export enum ThresholdType { PERCENTAGE = 'PERCENTAGE', ABSOLUTE_VALUE = 'ABSOLUTE_VALUE' }

	export enum NotificationState { OK = 'OK', ALARM = 'ALARM' }


	/** <p>The subscriber to a budget notification. The subscriber consists of a subscription type and either an Amazon SNS topic or an email address.</p> <p>For example, an email subscriber has the following parameters:</p> <ul> <li> <p>A <code>subscriptionType</code> of <code>EMAIL</code> </p> </li> <li> <p>An <code>address</code> of <code>example@example.com</code> </p> </li> </ul> */
	export interface Subscriber {

		/** Required */
		SubscriptionType: SubscriptionType;

		/** Required */
		Address: string;
	}

	/** <p>The subscriber to a budget notification. The subscriber consists of a subscription type and either an Amazon SNS topic or an email address.</p> <p>For example, an email subscriber has the following parameters:</p> <ul> <li> <p>A <code>subscriptionType</code> of <code>EMAIL</code> </p> </li> <li> <p>An <code>address</code> of <code>example@example.com</code> </p> </li> </ul> */
	export interface SubscriberFormProperties {

		/** Required */
		SubscriptionType: FormControl<SubscriptionType | null | undefined>,

		/** Required */
		Address: FormControl<string | null | undefined>,
	}
	export function CreateSubscriberFormGroup() {
		return new FormGroup<SubscriberFormProperties>({
			SubscriptionType: new FormControl<SubscriptionType | null | undefined>(undefined, [Validators.required]),
			Address: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/**  The subscription type of the subscriber. It can be SMS or EMAIL. */
	export enum SubscriptionType { SNS = 'SNS', EMAIL = 'EMAIL' }

	export interface InvalidParameterException {
	}
	export interface InvalidParameterExceptionFormProperties {
	}
	export function CreateInvalidParameterExceptionFormGroup() {
		return new FormGroup<InvalidParameterExceptionFormProperties>({
		});

	}

	export interface InternalErrorException {
	}
	export interface InternalErrorExceptionFormProperties {
	}
	export function CreateInternalErrorExceptionFormGroup() {
		return new FormGroup<InternalErrorExceptionFormProperties>({
		});

	}

	export interface CreationLimitExceededException {
	}
	export interface CreationLimitExceededExceptionFormProperties {
	}
	export function CreateCreationLimitExceededExceptionFormGroup() {
		return new FormGroup<CreationLimitExceededExceptionFormProperties>({
		});

	}

	export interface DuplicateRecordException {
	}
	export interface DuplicateRecordExceptionFormProperties {
	}
	export function CreateDuplicateRecordExceptionFormGroup() {
		return new FormGroup<DuplicateRecordExceptionFormProperties>({
		});

	}

	export interface AccessDeniedException {
	}
	export interface AccessDeniedExceptionFormProperties {
	}
	export function CreateAccessDeniedExceptionFormGroup() {
		return new FormGroup<AccessDeniedExceptionFormProperties>({
		});

	}

	export interface ThrottlingException {
	}
	export interface ThrottlingExceptionFormProperties {
	}
	export function CreateThrottlingExceptionFormGroup() {
		return new FormGroup<ThrottlingExceptionFormProperties>({
		});

	}

	export interface CreateBudgetActionResponse {

		/**
		 * The account ID of the user. It's a 12-digit number.
		 * Required
		 * Max length: 12
		 * Min length: 12
		 */
		AccountId: string;

		/**
		 * A string that represents the budget name. The ":" and "\" characters, and the "/action/" substring, aren't allowed.
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		BudgetName: string;

		/** Required */
		ActionId: string;
	}
	export interface CreateBudgetActionResponseFormProperties {

		/**
		 * The account ID of the user. It's a 12-digit number.
		 * Required
		 * Max length: 12
		 * Min length: 12
		 */
		AccountId: FormControl<string | null | undefined>,

		/**
		 * A string that represents the budget name. The ":" and "\" characters, and the "/action/" substring, aren't allowed.
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		BudgetName: FormControl<string | null | undefined>,

		/** Required */
		ActionId: FormControl<string | null | undefined>,
	}
	export function CreateCreateBudgetActionResponseFormGroup() {
		return new FormGroup<CreateBudgetActionResponseFormProperties>({
			AccountId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(12), Validators.maxLength(12), Validators.pattern('\d{12}')]),
			BudgetName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^(?![^:\\]*/action/)[^:\\]+$')]),
			ActionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateBudgetActionRequest {

		/**
		 * The account ID of the user. It's a 12-digit number.
		 * Required
		 * Max length: 12
		 * Min length: 12
		 */
		AccountId: string;

		/**
		 * A string that represents the budget name. The ":" and "\" characters, and the "/action/" substring, aren't allowed.
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		BudgetName: string;

		/**
		 * The type of a notification. It must be ACTUAL or FORECASTED.
		 * Required
		 */
		NotificationType: NotificationType;

		/** Required */
		ActionType: ActionType;

		/**
		 * The trigger threshold of the action.
		 * Required
		 */
		ActionThreshold: ActionThreshold;

		/**
		 * Specifies all of the type-specific parameters.
		 * Required
		 */
		Definition: Definition;

		/** Required */
		ExecutionRoleArn: string;

		/** Required */
		ApprovalModel: ApprovalModel;

		/**
		 * A list of subscribers.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 11
		 */
		Subscribers: Array<Subscriber>;
	}
	export interface CreateBudgetActionRequestFormProperties {

		/**
		 * The account ID of the user. It's a 12-digit number.
		 * Required
		 * Max length: 12
		 * Min length: 12
		 */
		AccountId: FormControl<string | null | undefined>,

		/**
		 * A string that represents the budget name. The ":" and "\" characters, and the "/action/" substring, aren't allowed.
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		BudgetName: FormControl<string | null | undefined>,

		/**
		 * The type of a notification. It must be ACTUAL or FORECASTED.
		 * Required
		 */
		NotificationType: FormControl<NotificationType | null | undefined>,

		/** Required */
		ActionType: FormControl<ActionType | null | undefined>,

		/** Required */
		ExecutionRoleArn: FormControl<string | null | undefined>,

		/** Required */
		ApprovalModel: FormControl<ApprovalModel | null | undefined>,
	}
	export function CreateCreateBudgetActionRequestFormGroup() {
		return new FormGroup<CreateBudgetActionRequestFormProperties>({
			AccountId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(12), Validators.maxLength(12), Validators.pattern('\d{12}')]),
			BudgetName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^(?![^:\\]*/action/)[^:\\]+$')]),
			NotificationType: new FormControl<NotificationType | null | undefined>(undefined, [Validators.required]),
			ActionType: new FormControl<ActionType | null | undefined>(undefined, [Validators.required]),
			ExecutionRoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ApprovalModel: new FormControl<ApprovalModel | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ActionType { APPLY_IAM_POLICY = 'APPLY_IAM_POLICY', APPLY_SCP_POLICY = 'APPLY_SCP_POLICY', RUN_SSM_DOCUMENTS = 'RUN_SSM_DOCUMENTS' }


	/** The trigger threshold of the action.  */
	export interface ActionThreshold {

		/**
		 * The threshold of a notification.
		 * Required
		 * Minimum: 0
		 * Maximum: 15000000000000
		 */
		ActionThresholdValue: number;

		/**
		 * The type of threshold for a notification.
		 * Required
		 */
		ActionThresholdType: ThresholdType;
	}

	/** The trigger threshold of the action.  */
	export interface ActionThresholdFormProperties {

		/**
		 * The threshold of a notification.
		 * Required
		 * Minimum: 0
		 * Maximum: 15000000000000
		 */
		ActionThresholdValue: FormControl<number | null | undefined>,

		/**
		 * The type of threshold for a notification.
		 * Required
		 */
		ActionThresholdType: FormControl<ThresholdType | null | undefined>,
	}
	export function CreateActionThresholdFormGroup() {
		return new FormGroup<ActionThresholdFormProperties>({
			ActionThresholdValue: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0), Validators.max(15000000000000)]),
			ActionThresholdType: new FormControl<ThresholdType | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Specifies all of the type-specific parameters.  */
	export interface Definition {
		IamActionDefinition?: IamActionDefinition;
		ScpActionDefinition?: ScpActionDefinition;
		SsmActionDefinition?: SsmActionDefinition;
	}

	/** Specifies all of the type-specific parameters.  */
	export interface DefinitionFormProperties {
	}
	export function CreateDefinitionFormGroup() {
		return new FormGroup<DefinitionFormProperties>({
		});

	}


	/** The Identity and Access Management (IAM) action definition details.  */
	export interface IamActionDefinition {

		/** Required */
		PolicyArn: string;
		Roles?: Array<string>;
		Groups?: Array<string>;
		Users?: Array<string>;
	}

	/** The Identity and Access Management (IAM) action definition details.  */
	export interface IamActionDefinitionFormProperties {

		/** Required */
		PolicyArn: FormControl<string | null | undefined>,
	}
	export function CreateIamActionDefinitionFormGroup() {
		return new FormGroup<IamActionDefinitionFormProperties>({
			PolicyArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The service control policies (SCP) action definition details.  */
	export interface ScpActionDefinition {

		/** Required */
		PolicyId: string;

		/** Required */
		TargetIds: Array<string>;
	}

	/** The service control policies (SCP) action definition details.  */
	export interface ScpActionDefinitionFormProperties {

		/** Required */
		PolicyId: FormControl<string | null | undefined>,
	}
	export function CreateScpActionDefinitionFormGroup() {
		return new FormGroup<ScpActionDefinitionFormProperties>({
			PolicyId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The Amazon Web Services Systems Manager (SSM) action definition details.  */
	export interface SsmActionDefinition {

		/** Required */
		ActionSubType: ActionSubType;

		/** Required */
		Region: string;

		/** Required */
		InstanceIds: Array<string>;
	}

	/** The Amazon Web Services Systems Manager (SSM) action definition details.  */
	export interface SsmActionDefinitionFormProperties {

		/** Required */
		ActionSubType: FormControl<ActionSubType | null | undefined>,

		/** Required */
		Region: FormControl<string | null | undefined>,
	}
	export function CreateSsmActionDefinitionFormGroup() {
		return new FormGroup<SsmActionDefinitionFormProperties>({
			ActionSubType: new FormControl<ActionSubType | null | undefined>(undefined, [Validators.required]),
			Region: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ActionSubType { STOP_EC2_INSTANCES = 'STOP_EC2_INSTANCES', STOP_RDS_INSTANCES = 'STOP_RDS_INSTANCES' }

	export enum ApprovalModel { AUTOMATIC = 'AUTOMATIC', MANUAL = 'MANUAL' }

	export interface NotFoundException {
	}
	export interface NotFoundExceptionFormProperties {
	}
	export function CreateNotFoundExceptionFormGroup() {
		return new FormGroup<NotFoundExceptionFormProperties>({
		});

	}


	/**  Response of CreateNotification  */
	export interface CreateNotificationResponse {
	}

	/**  Response of CreateNotification  */
	export interface CreateNotificationResponseFormProperties {
	}
	export function CreateCreateNotificationResponseFormGroup() {
		return new FormGroup<CreateNotificationResponseFormProperties>({
		});

	}


	/**  Request of CreateNotification  */
	export interface CreateNotificationRequest {

		/** Required */
		AccountId: string;

		/** Required */
		BudgetName: string;

		/** Required */
		Notification: Notification;

		/** Required */
		Subscribers: Array<Subscriber>;
	}

	/**  Request of CreateNotification  */
	export interface CreateNotificationRequestFormProperties {

		/** Required */
		AccountId: FormControl<string | null | undefined>,

		/** Required */
		BudgetName: FormControl<string | null | undefined>,
	}
	export function CreateCreateNotificationRequestFormGroup() {
		return new FormGroup<CreateNotificationRequestFormProperties>({
			AccountId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			BudgetName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/**  Response of CreateSubscriber  */
	export interface CreateSubscriberResponse {
	}

	/**  Response of CreateSubscriber  */
	export interface CreateSubscriberResponseFormProperties {
	}
	export function CreateCreateSubscriberResponseFormGroup() {
		return new FormGroup<CreateSubscriberResponseFormProperties>({
		});

	}


	/**  Request of CreateSubscriber  */
	export interface CreateSubscriberRequest {

		/** Required */
		AccountId: string;

		/** Required */
		BudgetName: string;

		/** Required */
		Notification: Notification;

		/** Required */
		Subscriber: Subscriber;
	}

	/**  Request of CreateSubscriber  */
	export interface CreateSubscriberRequestFormProperties {

		/** Required */
		AccountId: FormControl<string | null | undefined>,

		/** Required */
		BudgetName: FormControl<string | null | undefined>,
	}
	export function CreateCreateSubscriberRequestFormGroup() {
		return new FormGroup<CreateSubscriberRequestFormProperties>({
			AccountId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			BudgetName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/**  Response of DeleteBudget  */
	export interface DeleteBudgetResponse {
	}

	/**  Response of DeleteBudget  */
	export interface DeleteBudgetResponseFormProperties {
	}
	export function CreateDeleteBudgetResponseFormGroup() {
		return new FormGroup<DeleteBudgetResponseFormProperties>({
		});

	}


	/**  Request of DeleteBudget  */
	export interface DeleteBudgetRequest {

		/** Required */
		AccountId: string;

		/** Required */
		BudgetName: string;
	}

	/**  Request of DeleteBudget  */
	export interface DeleteBudgetRequestFormProperties {

		/** Required */
		AccountId: FormControl<string | null | undefined>,

		/** Required */
		BudgetName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteBudgetRequestFormGroup() {
		return new FormGroup<DeleteBudgetRequestFormProperties>({
			AccountId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			BudgetName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteBudgetActionResponse {

		/**
		 * The account ID of the user. It's a 12-digit number.
		 * Required
		 * Max length: 12
		 * Min length: 12
		 */
		AccountId: string;

		/**
		 * A string that represents the budget name. The ":" and "\" characters, and the "/action/" substring, aren't allowed.
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		BudgetName: string;

		/**
		 * A budget action resource.
		 * Required
		 */
		Action: Action;
	}
	export interface DeleteBudgetActionResponseFormProperties {

		/**
		 * The account ID of the user. It's a 12-digit number.
		 * Required
		 * Max length: 12
		 * Min length: 12
		 */
		AccountId: FormControl<string | null | undefined>,

		/**
		 * A string that represents the budget name. The ":" and "\" characters, and the "/action/" substring, aren't allowed.
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		BudgetName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteBudgetActionResponseFormGroup() {
		return new FormGroup<DeleteBudgetActionResponseFormProperties>({
			AccountId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(12), Validators.maxLength(12), Validators.pattern('\d{12}')]),
			BudgetName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^(?![^:\\]*/action/)[^:\\]+$')]),
		});

	}


	/** A budget action resource.  */
	export interface Action {

		/** Required */
		ActionId: string;

		/**
		 * A string that represents the budget name. The ":" and "\" characters, and the "/action/" substring, aren't allowed.
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		BudgetName: string;

		/**
		 * The type of a notification. It must be ACTUAL or FORECASTED.
		 * Required
		 */
		NotificationType: NotificationType;

		/** Required */
		ActionType: ActionType;

		/** Required */
		ActionThreshold: ActionThreshold;

		/** Required */
		Definition: Definition;

		/** Required */
		ExecutionRoleArn: string;

		/** Required */
		ApprovalModel: ApprovalModel;

		/** Required */
		Status: ActionStatus;

		/**
		 * A list of subscribers.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 11
		 */
		Subscribers: Array<Subscriber>;
	}

	/** A budget action resource.  */
	export interface ActionFormProperties {

		/** Required */
		ActionId: FormControl<string | null | undefined>,

		/**
		 * A string that represents the budget name. The ":" and "\" characters, and the "/action/" substring, aren't allowed.
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		BudgetName: FormControl<string | null | undefined>,

		/**
		 * The type of a notification. It must be ACTUAL or FORECASTED.
		 * Required
		 */
		NotificationType: FormControl<NotificationType | null | undefined>,

		/** Required */
		ActionType: FormControl<ActionType | null | undefined>,

		/** Required */
		ExecutionRoleArn: FormControl<string | null | undefined>,

		/** Required */
		ApprovalModel: FormControl<ApprovalModel | null | undefined>,

		/** Required */
		Status: FormControl<ActionStatus | null | undefined>,
	}
	export function CreateActionFormGroup() {
		return new FormGroup<ActionFormProperties>({
			ActionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			BudgetName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^(?![^:\\]*/action/)[^:\\]+$')]),
			NotificationType: new FormControl<NotificationType | null | undefined>(undefined, [Validators.required]),
			ActionType: new FormControl<ActionType | null | undefined>(undefined, [Validators.required]),
			ExecutionRoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ApprovalModel: new FormControl<ApprovalModel | null | undefined>(undefined, [Validators.required]),
			Status: new FormControl<ActionStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ActionStatus { STANDBY = 'STANDBY', PENDING = 'PENDING', EXECUTION_IN_PROGRESS = 'EXECUTION_IN_PROGRESS', EXECUTION_SUCCESS = 'EXECUTION_SUCCESS', EXECUTION_FAILURE = 'EXECUTION_FAILURE', REVERSE_IN_PROGRESS = 'REVERSE_IN_PROGRESS', REVERSE_SUCCESS = 'REVERSE_SUCCESS', REVERSE_FAILURE = 'REVERSE_FAILURE', RESET_IN_PROGRESS = 'RESET_IN_PROGRESS', RESET_FAILURE = 'RESET_FAILURE' }

	export interface DeleteBudgetActionRequest {

		/**
		 * The account ID of the user. It's a 12-digit number.
		 * Required
		 * Max length: 12
		 * Min length: 12
		 */
		AccountId: string;

		/**
		 * A string that represents the budget name. The ":" and "\" characters, and the "/action/" substring, aren't allowed.
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		BudgetName: string;

		/** Required */
		ActionId: string;
	}
	export interface DeleteBudgetActionRequestFormProperties {

		/**
		 * The account ID of the user. It's a 12-digit number.
		 * Required
		 * Max length: 12
		 * Min length: 12
		 */
		AccountId: FormControl<string | null | undefined>,

		/**
		 * A string that represents the budget name. The ":" and "\" characters, and the "/action/" substring, aren't allowed.
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		BudgetName: FormControl<string | null | undefined>,

		/** Required */
		ActionId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteBudgetActionRequestFormGroup() {
		return new FormGroup<DeleteBudgetActionRequestFormProperties>({
			AccountId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(12), Validators.maxLength(12), Validators.pattern('\d{12}')]),
			BudgetName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^(?![^:\\]*/action/)[^:\\]+$')]),
			ActionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ResourceLockedException {
	}
	export interface ResourceLockedExceptionFormProperties {
	}
	export function CreateResourceLockedExceptionFormGroup() {
		return new FormGroup<ResourceLockedExceptionFormProperties>({
		});

	}


	/**  Response of DeleteNotification  */
	export interface DeleteNotificationResponse {
	}

	/**  Response of DeleteNotification  */
	export interface DeleteNotificationResponseFormProperties {
	}
	export function CreateDeleteNotificationResponseFormGroup() {
		return new FormGroup<DeleteNotificationResponseFormProperties>({
		});

	}


	/**  Request of DeleteNotification  */
	export interface DeleteNotificationRequest {

		/** Required */
		AccountId: string;

		/** Required */
		BudgetName: string;

		/** Required */
		Notification: Notification;
	}

	/**  Request of DeleteNotification  */
	export interface DeleteNotificationRequestFormProperties {

		/** Required */
		AccountId: FormControl<string | null | undefined>,

		/** Required */
		BudgetName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteNotificationRequestFormGroup() {
		return new FormGroup<DeleteNotificationRequestFormProperties>({
			AccountId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			BudgetName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/**  Response of DeleteSubscriber  */
	export interface DeleteSubscriberResponse {
	}

	/**  Response of DeleteSubscriber  */
	export interface DeleteSubscriberResponseFormProperties {
	}
	export function CreateDeleteSubscriberResponseFormGroup() {
		return new FormGroup<DeleteSubscriberResponseFormProperties>({
		});

	}


	/**  Request of DeleteSubscriber  */
	export interface DeleteSubscriberRequest {

		/** Required */
		AccountId: string;

		/** Required */
		BudgetName: string;

		/** Required */
		Notification: Notification;

		/** Required */
		Subscriber: Subscriber;
	}

	/**  Request of DeleteSubscriber  */
	export interface DeleteSubscriberRequestFormProperties {

		/** Required */
		AccountId: FormControl<string | null | undefined>,

		/** Required */
		BudgetName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteSubscriberRequestFormGroup() {
		return new FormGroup<DeleteSubscriberRequestFormProperties>({
			AccountId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			BudgetName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/**  Response of DescribeBudget  */
	export interface DescribeBudgetResponse {
		Budget?: Budget;
	}

	/**  Response of DescribeBudget  */
	export interface DescribeBudgetResponseFormProperties {
	}
	export function CreateDescribeBudgetResponseFormGroup() {
		return new FormGroup<DescribeBudgetResponseFormProperties>({
		});

	}


	/**  Request of DescribeBudget  */
	export interface DescribeBudgetRequest {

		/** Required */
		AccountId: string;

		/** Required */
		BudgetName: string;
	}

	/**  Request of DescribeBudget  */
	export interface DescribeBudgetRequestFormProperties {

		/** Required */
		AccountId: FormControl<string | null | undefined>,

		/** Required */
		BudgetName: FormControl<string | null | undefined>,
	}
	export function CreateDescribeBudgetRequestFormGroup() {
		return new FormGroup<DescribeBudgetRequestFormProperties>({
			AccountId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			BudgetName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeBudgetActionResponse {

		/**
		 * The account ID of the user. It's a 12-digit number.
		 * Required
		 * Max length: 12
		 * Min length: 12
		 */
		AccountId: string;

		/**
		 * A string that represents the budget name. The ":" and "\" characters, and the "/action/" substring, aren't allowed.
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		BudgetName: string;

		/** Required */
		Action: Action;
	}
	export interface DescribeBudgetActionResponseFormProperties {

		/**
		 * The account ID of the user. It's a 12-digit number.
		 * Required
		 * Max length: 12
		 * Min length: 12
		 */
		AccountId: FormControl<string | null | undefined>,

		/**
		 * A string that represents the budget name. The ":" and "\" characters, and the "/action/" substring, aren't allowed.
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		BudgetName: FormControl<string | null | undefined>,
	}
	export function CreateDescribeBudgetActionResponseFormGroup() {
		return new FormGroup<DescribeBudgetActionResponseFormProperties>({
			AccountId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(12), Validators.maxLength(12), Validators.pattern('\d{12}')]),
			BudgetName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^(?![^:\\]*/action/)[^:\\]+$')]),
		});

	}

	export interface DescribeBudgetActionRequest {

		/**
		 * The account ID of the user. It's a 12-digit number.
		 * Required
		 * Max length: 12
		 * Min length: 12
		 */
		AccountId: string;

		/**
		 * A string that represents the budget name. The ":" and "\" characters, and the "/action/" substring, aren't allowed.
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		BudgetName: string;

		/** Required */
		ActionId: string;
	}
	export interface DescribeBudgetActionRequestFormProperties {

		/**
		 * The account ID of the user. It's a 12-digit number.
		 * Required
		 * Max length: 12
		 * Min length: 12
		 */
		AccountId: FormControl<string | null | undefined>,

		/**
		 * A string that represents the budget name. The ":" and "\" characters, and the "/action/" substring, aren't allowed.
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		BudgetName: FormControl<string | null | undefined>,

		/** Required */
		ActionId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeBudgetActionRequestFormGroup() {
		return new FormGroup<DescribeBudgetActionRequestFormProperties>({
			AccountId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(12), Validators.maxLength(12), Validators.pattern('\d{12}')]),
			BudgetName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^(?![^:\\]*/action/)[^:\\]+$')]),
			ActionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeBudgetActionHistoriesResponse {

		/** Required */
		ActionHistories: Array<ActionHistory>;

		/**
		 * A generic string.
		 * Max length: 2147483647
		 * Min length: 0
		 */
		NextToken?: string | null;
	}
	export interface DescribeBudgetActionHistoriesResponseFormProperties {

		/**
		 * A generic string.
		 * Max length: 2147483647
		 * Min length: 0
		 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeBudgetActionHistoriesResponseFormGroup() {
		return new FormGroup<DescribeBudgetActionHistoriesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(2147483647), Validators.pattern('.*')]),
		});

	}


	/** The historical records for a budget action.  */
	export interface ActionHistory {

		/**
		 * A generic time stamp. In Java, it's transformed to a <code>Date</code> object.
		 * Required
		 */
		Timestamp: Date;

		/** Required */
		Status: ActionStatus;

		/** Required */
		EventType: EventType;

		/** Required */
		ActionHistoryDetails: ActionHistoryDetails;
	}

	/** The historical records for a budget action.  */
	export interface ActionHistoryFormProperties {

		/**
		 * A generic time stamp. In Java, it's transformed to a <code>Date</code> object.
		 * Required
		 */
		Timestamp: FormControl<Date | null | undefined>,

		/** Required */
		Status: FormControl<ActionStatus | null | undefined>,

		/** Required */
		EventType: FormControl<EventType | null | undefined>,
	}
	export function CreateActionHistoryFormGroup() {
		return new FormGroup<ActionHistoryFormProperties>({
			Timestamp: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			Status: new FormControl<ActionStatus | null | undefined>(undefined, [Validators.required]),
			EventType: new FormControl<EventType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum EventType { SYSTEM = 'SYSTEM', CREATE_ACTION = 'CREATE_ACTION', DELETE_ACTION = 'DELETE_ACTION', UPDATE_ACTION = 'UPDATE_ACTION', EXECUTE_ACTION = 'EXECUTE_ACTION' }


	/** The description of the details for the event.  */
	export interface ActionHistoryDetails {

		/**
		 * A generic string.
		 * Required
		 * Max length: 2147483647
		 * Min length: 0
		 */
		Message: string;

		/** Required */
		Action: Action;
	}

	/** The description of the details for the event.  */
	export interface ActionHistoryDetailsFormProperties {

		/**
		 * A generic string.
		 * Required
		 * Max length: 2147483647
		 * Min length: 0
		 */
		Message: FormControl<string | null | undefined>,
	}
	export function CreateActionHistoryDetailsFormGroup() {
		return new FormGroup<ActionHistoryDetailsFormProperties>({
			Message: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(2147483647), Validators.pattern('.*')]),
		});

	}

	export interface DescribeBudgetActionHistoriesRequest {

		/**
		 * The account ID of the user. It's a 12-digit number.
		 * Required
		 * Max length: 12
		 * Min length: 12
		 */
		AccountId: string;

		/**
		 * A string that represents the budget name. The ":" and "\" characters, and the "/action/" substring, aren't allowed.
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		BudgetName: string;

		/** Required */
		ActionId: string;

		/** The period of time that's covered by a budget. The period has a start date and an end date. The start date must come before the end date. There are no restrictions on the end date. */
		TimePeriod?: TimePeriod;

		/**
		 * An integer that represents how many entries a paginated response contains. The maximum is 100.
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults?: number | null;

		/**
		 * A generic string.
		 * Max length: 2147483647
		 * Min length: 0
		 */
		NextToken?: string | null;
	}
	export interface DescribeBudgetActionHistoriesRequestFormProperties {

		/**
		 * The account ID of the user. It's a 12-digit number.
		 * Required
		 * Max length: 12
		 * Min length: 12
		 */
		AccountId: FormControl<string | null | undefined>,

		/**
		 * A string that represents the budget name. The ":" and "\" characters, and the "/action/" substring, aren't allowed.
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		BudgetName: FormControl<string | null | undefined>,

		/** Required */
		ActionId: FormControl<string | null | undefined>,

		/**
		 * An integer that represents how many entries a paginated response contains. The maximum is 100.
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults: FormControl<number | null | undefined>,

		/**
		 * A generic string.
		 * Max length: 2147483647
		 * Min length: 0
		 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeBudgetActionHistoriesRequestFormGroup() {
		return new FormGroup<DescribeBudgetActionHistoriesRequestFormProperties>({
			AccountId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(12), Validators.maxLength(12), Validators.pattern('\d{12}')]),
			BudgetName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^(?![^:\\]*/action/)[^:\\]+$')]),
			ActionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(2147483647), Validators.pattern('.*')]),
		});

	}

	export interface InvalidNextTokenException {
	}
	export interface InvalidNextTokenExceptionFormProperties {
	}
	export function CreateInvalidNextTokenExceptionFormGroup() {
		return new FormGroup<InvalidNextTokenExceptionFormProperties>({
		});

	}

	export interface DescribeBudgetActionsForAccountResponse {

		/** Required */
		Actions: Array<Action>;

		/**
		 * A generic string.
		 * Max length: 2147483647
		 * Min length: 0
		 */
		NextToken?: string | null;
	}
	export interface DescribeBudgetActionsForAccountResponseFormProperties {

		/**
		 * A generic string.
		 * Max length: 2147483647
		 * Min length: 0
		 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeBudgetActionsForAccountResponseFormGroup() {
		return new FormGroup<DescribeBudgetActionsForAccountResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(2147483647), Validators.pattern('.*')]),
		});

	}

	export interface DescribeBudgetActionsForAccountRequest {

		/**
		 * The account ID of the user. It's a 12-digit number.
		 * Required
		 * Max length: 12
		 * Min length: 12
		 */
		AccountId: string;

		/**
		 * An integer that represents how many entries a paginated response contains. The maximum is 100.
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults?: number | null;

		/**
		 * A generic string.
		 * Max length: 2147483647
		 * Min length: 0
		 */
		NextToken?: string | null;
	}
	export interface DescribeBudgetActionsForAccountRequestFormProperties {

		/**
		 * The account ID of the user. It's a 12-digit number.
		 * Required
		 * Max length: 12
		 * Min length: 12
		 */
		AccountId: FormControl<string | null | undefined>,

		/**
		 * An integer that represents how many entries a paginated response contains. The maximum is 100.
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults: FormControl<number | null | undefined>,

		/**
		 * A generic string.
		 * Max length: 2147483647
		 * Min length: 0
		 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeBudgetActionsForAccountRequestFormGroup() {
		return new FormGroup<DescribeBudgetActionsForAccountRequestFormProperties>({
			AccountId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(12), Validators.maxLength(12), Validators.pattern('\d{12}')]),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(2147483647), Validators.pattern('.*')]),
		});

	}

	export interface DescribeBudgetActionsForBudgetResponse {

		/** Required */
		Actions: Array<Action>;

		/**
		 * A generic string.
		 * Max length: 2147483647
		 * Min length: 0
		 */
		NextToken?: string | null;
	}
	export interface DescribeBudgetActionsForBudgetResponseFormProperties {

		/**
		 * A generic string.
		 * Max length: 2147483647
		 * Min length: 0
		 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeBudgetActionsForBudgetResponseFormGroup() {
		return new FormGroup<DescribeBudgetActionsForBudgetResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(2147483647), Validators.pattern('.*')]),
		});

	}

	export interface DescribeBudgetActionsForBudgetRequest {

		/**
		 * The account ID of the user. It's a 12-digit number.
		 * Required
		 * Max length: 12
		 * Min length: 12
		 */
		AccountId: string;

		/**
		 * A string that represents the budget name. The ":" and "\" characters, and the "/action/" substring, aren't allowed.
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		BudgetName: string;

		/**
		 * An integer that represents how many entries a paginated response contains. The maximum is 100.
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults?: number | null;

		/**
		 * A generic string.
		 * Max length: 2147483647
		 * Min length: 0
		 */
		NextToken?: string | null;
	}
	export interface DescribeBudgetActionsForBudgetRequestFormProperties {

		/**
		 * The account ID of the user. It's a 12-digit number.
		 * Required
		 * Max length: 12
		 * Min length: 12
		 */
		AccountId: FormControl<string | null | undefined>,

		/**
		 * A string that represents the budget name. The ":" and "\" characters, and the "/action/" substring, aren't allowed.
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		BudgetName: FormControl<string | null | undefined>,

		/**
		 * An integer that represents how many entries a paginated response contains. The maximum is 100.
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults: FormControl<number | null | undefined>,

		/**
		 * A generic string.
		 * Max length: 2147483647
		 * Min length: 0
		 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeBudgetActionsForBudgetRequestFormGroup() {
		return new FormGroup<DescribeBudgetActionsForBudgetRequestFormProperties>({
			AccountId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(12), Validators.maxLength(12), Validators.pattern('\d{12}')]),
			BudgetName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^(?![^:\\]*/action/)[^:\\]+$')]),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(2147483647), Validators.pattern('.*')]),
		});

	}

	export interface DescribeBudgetNotificationsForAccountResponse {
		BudgetNotificationsForAccount?: Array<BudgetNotificationsForAccount>;

		/**
		 * A generic string.
		 * Max length: 2147483647
		 * Min length: 0
		 */
		NextToken?: string | null;
	}
	export interface DescribeBudgetNotificationsForAccountResponseFormProperties {

		/**
		 * A generic string.
		 * Max length: 2147483647
		 * Min length: 0
		 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeBudgetNotificationsForAccountResponseFormGroup() {
		return new FormGroup<DescribeBudgetNotificationsForAccountResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(2147483647), Validators.pattern('.*')]),
		});

	}


	/**  The budget name and associated notifications for an account.  */
	export interface BudgetNotificationsForAccount {

		/** A list of notifications. */
		Notifications?: Array<Notification>;

		/**
		 * A string that represents the budget name. The ":" and "\" characters, and the "/action/" substring, aren't allowed.
		 * Max length: 100
		 * Min length: 1
		 */
		BudgetName?: string | null;
	}

	/**  The budget name and associated notifications for an account.  */
	export interface BudgetNotificationsForAccountFormProperties {

		/**
		 * A string that represents the budget name. The ":" and "\" characters, and the "/action/" substring, aren't allowed.
		 * Max length: 100
		 * Min length: 1
		 */
		BudgetName: FormControl<string | null | undefined>,
	}
	export function CreateBudgetNotificationsForAccountFormGroup() {
		return new FormGroup<BudgetNotificationsForAccountFormProperties>({
			BudgetName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^(?![^:\\]*/action/)[^:\\]+$')]),
		});

	}

	export interface DescribeBudgetNotificationsForAccountRequest {

		/**
		 * The account ID of the user. It's a 12-digit number.
		 * Required
		 * Max length: 12
		 * Min length: 12
		 */
		AccountId: string;
		MaxResults?: number | null;

		/**
		 * A generic string.
		 * Max length: 2147483647
		 * Min length: 0
		 */
		NextToken?: string | null;
	}
	export interface DescribeBudgetNotificationsForAccountRequestFormProperties {

		/**
		 * The account ID of the user. It's a 12-digit number.
		 * Required
		 * Max length: 12
		 * Min length: 12
		 */
		AccountId: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,

		/**
		 * A generic string.
		 * Max length: 2147483647
		 * Min length: 0
		 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeBudgetNotificationsForAccountRequestFormGroup() {
		return new FormGroup<DescribeBudgetNotificationsForAccountRequestFormProperties>({
			AccountId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(12), Validators.maxLength(12), Validators.pattern('\d{12}')]),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(2147483647), Validators.pattern('.*')]),
		});

	}

	export interface ExpiredNextTokenException {
	}
	export interface ExpiredNextTokenExceptionFormProperties {
	}
	export function CreateExpiredNextTokenExceptionFormGroup() {
		return new FormGroup<ExpiredNextTokenExceptionFormProperties>({
		});

	}

	export interface DescribeBudgetPerformanceHistoryResponse {
		BudgetPerformanceHistory?: BudgetPerformanceHistory;

		/**
		 * A generic string.
		 * Max length: 2147483647
		 * Min length: 0
		 */
		NextToken?: string | null;
	}
	export interface DescribeBudgetPerformanceHistoryResponseFormProperties {

		/**
		 * A generic string.
		 * Max length: 2147483647
		 * Min length: 0
		 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeBudgetPerformanceHistoryResponseFormGroup() {
		return new FormGroup<DescribeBudgetPerformanceHistoryResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(2147483647), Validators.pattern('.*')]),
		});

	}


	/** A history of the state of a budget at the end of the budget's specified time period. */
	export interface BudgetPerformanceHistory {

		/**
		 * A string that represents the budget name. The ":" and "\" characters, and the "/action/" substring, aren't allowed.
		 * Max length: 100
		 * Min length: 1
		 */
		BudgetName?: string | null;

		/** <p> The type of a budget. It must be one of the following types: </p> <p> <code>COST</code>, <code>USAGE</code>, <code>RI_UTILIZATION</code>, <code>RI_COVERAGE</code>, <code>SAVINGS_PLANS_UTILIZATION</code>, or <code>SAVINGS_PLANS_COVERAGE</code>.</p> */
		BudgetType?: BudgetType | null;
		CostFilters?: CostFilters;
		CostTypes?: CostTypes;

		/** The time unit of the budget, such as MONTHLY or QUARTERLY. */
		TimeUnit?: TimeUnit | null;
		BudgetedAndActualAmountsList?: Array<BudgetedAndActualAmounts>;
	}

	/** A history of the state of a budget at the end of the budget's specified time period. */
	export interface BudgetPerformanceHistoryFormProperties {

		/**
		 * A string that represents the budget name. The ":" and "\" characters, and the "/action/" substring, aren't allowed.
		 * Max length: 100
		 * Min length: 1
		 */
		BudgetName: FormControl<string | null | undefined>,

		/** <p> The type of a budget. It must be one of the following types: </p> <p> <code>COST</code>, <code>USAGE</code>, <code>RI_UTILIZATION</code>, <code>RI_COVERAGE</code>, <code>SAVINGS_PLANS_UTILIZATION</code>, or <code>SAVINGS_PLANS_COVERAGE</code>.</p> */
		BudgetType: FormControl<BudgetType | null | undefined>,

		/** The time unit of the budget, such as MONTHLY or QUARTERLY. */
		TimeUnit: FormControl<TimeUnit | null | undefined>,
	}
	export function CreateBudgetPerformanceHistoryFormGroup() {
		return new FormGroup<BudgetPerformanceHistoryFormProperties>({
			BudgetName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^(?![^:\\]*/action/)[^:\\]+$')]),
			BudgetType: new FormControl<BudgetType | null | undefined>(undefined),
			TimeUnit: new FormControl<TimeUnit | null | undefined>(undefined),
		});

	}


	/** The amount of cost or usage that you created the budget for, compared to your actual costs or usage. */
	export interface BudgetedAndActualAmounts {
		BudgetedAmount?: Spend;
		ActualAmount?: Spend;
		TimePeriod?: TimePeriod;
	}

	/** The amount of cost or usage that you created the budget for, compared to your actual costs or usage. */
	export interface BudgetedAndActualAmountsFormProperties {
	}
	export function CreateBudgetedAndActualAmountsFormGroup() {
		return new FormGroup<BudgetedAndActualAmountsFormProperties>({
		});

	}

	export interface DescribeBudgetPerformanceHistoryRequest {

		/**
		 * The account ID of the user. It's a 12-digit number.
		 * Required
		 * Max length: 12
		 * Min length: 12
		 */
		AccountId: string;

		/**
		 * A string that represents the budget name. The ":" and "\" characters, and the "/action/" substring, aren't allowed.
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		BudgetName: string;
		TimePeriod?: TimePeriod;

		/**
		 * An integer that represents how many entries a paginated response contains. The maximum is 100.
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults?: number | null;

		/**
		 * A generic string.
		 * Max length: 2147483647
		 * Min length: 0
		 */
		NextToken?: string | null;
	}
	export interface DescribeBudgetPerformanceHistoryRequestFormProperties {

		/**
		 * The account ID of the user. It's a 12-digit number.
		 * Required
		 * Max length: 12
		 * Min length: 12
		 */
		AccountId: FormControl<string | null | undefined>,

		/**
		 * A string that represents the budget name. The ":" and "\" characters, and the "/action/" substring, aren't allowed.
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		BudgetName: FormControl<string | null | undefined>,

		/**
		 * An integer that represents how many entries a paginated response contains. The maximum is 100.
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults: FormControl<number | null | undefined>,

		/**
		 * A generic string.
		 * Max length: 2147483647
		 * Min length: 0
		 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeBudgetPerformanceHistoryRequestFormGroup() {
		return new FormGroup<DescribeBudgetPerformanceHistoryRequestFormProperties>({
			AccountId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(12), Validators.maxLength(12), Validators.pattern('\d{12}')]),
			BudgetName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^(?![^:\\]*/action/)[^:\\]+$')]),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(2147483647), Validators.pattern('.*')]),
		});

	}


	/**  Response of DescribeBudgets  */
	export interface DescribeBudgetsResponse {
		Budgets?: Array<Budget>;
		NextToken?: string;
	}

	/**  Response of DescribeBudgets  */
	export interface DescribeBudgetsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeBudgetsResponseFormGroup() {
		return new FormGroup<DescribeBudgetsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  Request of DescribeBudgets  */
	export interface DescribeBudgetsRequest {

		/** Required */
		AccountId: string;
		MaxResults?: number | null;
		NextToken?: string;
	}

	/**  Request of DescribeBudgets  */
	export interface DescribeBudgetsRequestFormProperties {

		/** Required */
		AccountId: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeBudgetsRequestFormGroup() {
		return new FormGroup<DescribeBudgetsRequestFormProperties>({
			AccountId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  Response of GetNotificationsForBudget  */
	export interface DescribeNotificationsForBudgetResponse {
		Notifications?: Array<Notification>;
		NextToken?: string;
	}

	/**  Response of GetNotificationsForBudget  */
	export interface DescribeNotificationsForBudgetResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeNotificationsForBudgetResponseFormGroup() {
		return new FormGroup<DescribeNotificationsForBudgetResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  Request of DescribeNotificationsForBudget  */
	export interface DescribeNotificationsForBudgetRequest {

		/** Required */
		AccountId: string;

		/** Required */
		BudgetName: string;
		MaxResults?: number | null;
		NextToken?: string;
	}

	/**  Request of DescribeNotificationsForBudget  */
	export interface DescribeNotificationsForBudgetRequestFormProperties {

		/** Required */
		AccountId: FormControl<string | null | undefined>,

		/** Required */
		BudgetName: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeNotificationsForBudgetRequestFormGroup() {
		return new FormGroup<DescribeNotificationsForBudgetRequestFormProperties>({
			AccountId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			BudgetName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  Response of DescribeSubscribersForNotification  */
	export interface DescribeSubscribersForNotificationResponse {
		Subscribers?: Array<Subscriber>;
		NextToken?: string;
	}

	/**  Response of DescribeSubscribersForNotification  */
	export interface DescribeSubscribersForNotificationResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeSubscribersForNotificationResponseFormGroup() {
		return new FormGroup<DescribeSubscribersForNotificationResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  Request of DescribeSubscribersForNotification  */
	export interface DescribeSubscribersForNotificationRequest {

		/** Required */
		AccountId: string;

		/** Required */
		BudgetName: string;

		/** Required */
		Notification: Notification;
		MaxResults?: number | null;
		NextToken?: string;
	}

	/**  Request of DescribeSubscribersForNotification  */
	export interface DescribeSubscribersForNotificationRequestFormProperties {

		/** Required */
		AccountId: FormControl<string | null | undefined>,

		/** Required */
		BudgetName: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeSubscribersForNotificationRequestFormGroup() {
		return new FormGroup<DescribeSubscribersForNotificationRequestFormProperties>({
			AccountId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			BudgetName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ExecuteBudgetActionResponse {

		/**
		 * The account ID of the user. It's a 12-digit number.
		 * Required
		 * Max length: 12
		 * Min length: 12
		 */
		AccountId: string;

		/**
		 * A string that represents the budget name. The ":" and "\" characters, and the "/action/" substring, aren't allowed.
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		BudgetName: string;

		/** Required */
		ActionId: string;

		/** Required */
		ExecutionType: ExecutionType;
	}
	export interface ExecuteBudgetActionResponseFormProperties {

		/**
		 * The account ID of the user. It's a 12-digit number.
		 * Required
		 * Max length: 12
		 * Min length: 12
		 */
		AccountId: FormControl<string | null | undefined>,

		/**
		 * A string that represents the budget name. The ":" and "\" characters, and the "/action/" substring, aren't allowed.
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		BudgetName: FormControl<string | null | undefined>,

		/** Required */
		ActionId: FormControl<string | null | undefined>,

		/** Required */
		ExecutionType: FormControl<ExecutionType | null | undefined>,
	}
	export function CreateExecuteBudgetActionResponseFormGroup() {
		return new FormGroup<ExecuteBudgetActionResponseFormProperties>({
			AccountId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(12), Validators.maxLength(12), Validators.pattern('\d{12}')]),
			BudgetName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^(?![^:\\]*/action/)[^:\\]+$')]),
			ActionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ExecutionType: new FormControl<ExecutionType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ExecutionType { APPROVE_BUDGET_ACTION = 'APPROVE_BUDGET_ACTION', RETRY_BUDGET_ACTION = 'RETRY_BUDGET_ACTION', REVERSE_BUDGET_ACTION = 'REVERSE_BUDGET_ACTION', RESET_BUDGET_ACTION = 'RESET_BUDGET_ACTION' }

	export interface ExecuteBudgetActionRequest {

		/**
		 * The account ID of the user. It's a 12-digit number.
		 * Required
		 * Max length: 12
		 * Min length: 12
		 */
		AccountId: string;

		/**
		 * A string that represents the budget name. The ":" and "\" characters, and the "/action/" substring, aren't allowed.
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		BudgetName: string;

		/** Required */
		ActionId: string;

		/** Required */
		ExecutionType: ExecutionType;
	}
	export interface ExecuteBudgetActionRequestFormProperties {

		/**
		 * The account ID of the user. It's a 12-digit number.
		 * Required
		 * Max length: 12
		 * Min length: 12
		 */
		AccountId: FormControl<string | null | undefined>,

		/**
		 * A string that represents the budget name. The ":" and "\" characters, and the "/action/" substring, aren't allowed.
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		BudgetName: FormControl<string | null | undefined>,

		/** Required */
		ActionId: FormControl<string | null | undefined>,

		/** Required */
		ExecutionType: FormControl<ExecutionType | null | undefined>,
	}
	export function CreateExecuteBudgetActionRequestFormGroup() {
		return new FormGroup<ExecuteBudgetActionRequestFormProperties>({
			AccountId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(12), Validators.maxLength(12), Validators.pattern('\d{12}')]),
			BudgetName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^(?![^:\\]*/action/)[^:\\]+$')]),
			ActionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ExecutionType: new FormControl<ExecutionType | null | undefined>(undefined, [Validators.required]),
		});

	}


	/**  Response of UpdateBudget  */
	export interface UpdateBudgetResponse {
	}

	/**  Response of UpdateBudget  */
	export interface UpdateBudgetResponseFormProperties {
	}
	export function CreateUpdateBudgetResponseFormGroup() {
		return new FormGroup<UpdateBudgetResponseFormProperties>({
		});

	}


	/**  Request of UpdateBudget  */
	export interface UpdateBudgetRequest {

		/** Required */
		AccountId: string;

		/** Required */
		NewBudget: Budget;
	}

	/**  Request of UpdateBudget  */
	export interface UpdateBudgetRequestFormProperties {

		/** Required */
		AccountId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateBudgetRequestFormGroup() {
		return new FormGroup<UpdateBudgetRequestFormProperties>({
			AccountId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateBudgetActionResponse {

		/**
		 * The account ID of the user. It's a 12-digit number.
		 * Required
		 * Max length: 12
		 * Min length: 12
		 */
		AccountId: string;

		/**
		 * A string that represents the budget name. The ":" and "\" characters, and the "/action/" substring, aren't allowed.
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		BudgetName: string;

		/** Required */
		OldAction: Action;

		/** Required */
		NewAction: Action;
	}
	export interface UpdateBudgetActionResponseFormProperties {

		/**
		 * The account ID of the user. It's a 12-digit number.
		 * Required
		 * Max length: 12
		 * Min length: 12
		 */
		AccountId: FormControl<string | null | undefined>,

		/**
		 * A string that represents the budget name. The ":" and "\" characters, and the "/action/" substring, aren't allowed.
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		BudgetName: FormControl<string | null | undefined>,
	}
	export function CreateUpdateBudgetActionResponseFormGroup() {
		return new FormGroup<UpdateBudgetActionResponseFormProperties>({
			AccountId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(12), Validators.maxLength(12), Validators.pattern('\d{12}')]),
			BudgetName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^(?![^:\\]*/action/)[^:\\]+$')]),
		});

	}

	export interface UpdateBudgetActionRequest {

		/**
		 * The account ID of the user. It's a 12-digit number.
		 * Required
		 * Max length: 12
		 * Min length: 12
		 */
		AccountId: string;

		/**
		 * A string that represents the budget name. The ":" and "\" characters, and the "/action/" substring, aren't allowed.
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		BudgetName: string;

		/** Required */
		ActionId: string;

		/** The type of a notification. It must be ACTUAL or FORECASTED. */
		NotificationType?: NotificationType | null;

		/** The trigger threshold of the action. */
		ActionThreshold?: ActionThreshold;

		/** Specifies all of the type-specific parameters. */
		Definition?: Definition;
		ExecutionRoleArn?: string;
		ApprovalModel?: ApprovalModel;

		/**
		 * A list of subscribers.
		 * Minimum items: 1
		 * Maximum items: 11
		 */
		Subscribers?: Array<Subscriber>;
	}
	export interface UpdateBudgetActionRequestFormProperties {

		/**
		 * The account ID of the user. It's a 12-digit number.
		 * Required
		 * Max length: 12
		 * Min length: 12
		 */
		AccountId: FormControl<string | null | undefined>,

		/**
		 * A string that represents the budget name. The ":" and "\" characters, and the "/action/" substring, aren't allowed.
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		BudgetName: FormControl<string | null | undefined>,

		/** Required */
		ActionId: FormControl<string | null | undefined>,

		/** The type of a notification. It must be ACTUAL or FORECASTED. */
		NotificationType: FormControl<NotificationType | null | undefined>,
		ExecutionRoleArn: FormControl<string | null | undefined>,
		ApprovalModel: FormControl<ApprovalModel | null | undefined>,
	}
	export function CreateUpdateBudgetActionRequestFormGroup() {
		return new FormGroup<UpdateBudgetActionRequestFormProperties>({
			AccountId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(12), Validators.maxLength(12), Validators.pattern('\d{12}')]),
			BudgetName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^(?![^:\\]*/action/)[^:\\]+$')]),
			ActionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NotificationType: new FormControl<NotificationType | null | undefined>(undefined),
			ExecutionRoleArn: new FormControl<string | null | undefined>(undefined),
			ApprovalModel: new FormControl<ApprovalModel | null | undefined>(undefined),
		});

	}


	/**  Response of UpdateNotification  */
	export interface UpdateNotificationResponse {
	}

	/**  Response of UpdateNotification  */
	export interface UpdateNotificationResponseFormProperties {
	}
	export function CreateUpdateNotificationResponseFormGroup() {
		return new FormGroup<UpdateNotificationResponseFormProperties>({
		});

	}


	/**  Request of UpdateNotification  */
	export interface UpdateNotificationRequest {

		/** Required */
		AccountId: string;

		/** Required */
		BudgetName: string;

		/** Required */
		OldNotification: Notification;

		/** Required */
		NewNotification: Notification;
	}

	/**  Request of UpdateNotification  */
	export interface UpdateNotificationRequestFormProperties {

		/** Required */
		AccountId: FormControl<string | null | undefined>,

		/** Required */
		BudgetName: FormControl<string | null | undefined>,
	}
	export function CreateUpdateNotificationRequestFormGroup() {
		return new FormGroup<UpdateNotificationRequestFormProperties>({
			AccountId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			BudgetName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/**  Response of UpdateSubscriber  */
	export interface UpdateSubscriberResponse {
	}

	/**  Response of UpdateSubscriber  */
	export interface UpdateSubscriberResponseFormProperties {
	}
	export function CreateUpdateSubscriberResponseFormGroup() {
		return new FormGroup<UpdateSubscriberResponseFormProperties>({
		});

	}


	/**  Request of UpdateSubscriber  */
	export interface UpdateSubscriberRequest {

		/** Required */
		AccountId: string;

		/** Required */
		BudgetName: string;

		/** Required */
		Notification: Notification;

		/** Required */
		OldSubscriber: Subscriber;

		/** Required */
		NewSubscriber: Subscriber;
	}

	/**  Request of UpdateSubscriber  */
	export interface UpdateSubscriberRequestFormProperties {

		/** Required */
		AccountId: FormControl<string | null | undefined>,

		/** Required */
		BudgetName: FormControl<string | null | undefined>,
	}
	export function CreateUpdateSubscriberRequestFormGroup() {
		return new FormGroup<UpdateSubscriberRequestFormProperties>({
			AccountId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			BudgetName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p>Creates a budget and, if included, notifications and subscribers. </p> <important> <p>Only one of <code>BudgetLimit</code> or <code>PlannedBudgetLimits</code> can be present in the syntax at one time. Use the syntax that matches your case. The Request Syntax section shows the <code>BudgetLimit</code> syntax. For <code>PlannedBudgetLimits</code>, see the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_budgets_CreateBudget.html#API_CreateBudget_Examples">Examples</a> section. </p> </important>
		 * Post #X-Amz-Target=AWSBudgetServiceGateway.CreateBudget
		 * @return {CreateBudgetResponse} Success
		 */
		CreateBudget(requestBody: CreateBudgetRequest): Observable<CreateBudgetResponse> {
			return this.http.post<CreateBudgetResponse>(this.baseUri + '#X-Amz-Target=AWSBudgetServiceGateway.CreateBudget', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a budget action.
		 * Post #X-Amz-Target=AWSBudgetServiceGateway.CreateBudgetAction
		 * @return {CreateBudgetActionResponse} Success
		 */
		CreateBudgetAction(requestBody: CreateBudgetActionRequest): Observable<CreateBudgetActionResponse> {
			return this.http.post<CreateBudgetActionResponse>(this.baseUri + '#X-Amz-Target=AWSBudgetServiceGateway.CreateBudgetAction', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a notification. You must create the budget before you create the associated notification.
		 * Post #X-Amz-Target=AWSBudgetServiceGateway.CreateNotification
		 * @return {CreateNotificationResponse} Success
		 */
		CreateNotification(requestBody: CreateNotificationRequest): Observable<CreateNotificationResponse> {
			return this.http.post<CreateNotificationResponse>(this.baseUri + '#X-Amz-Target=AWSBudgetServiceGateway.CreateNotification', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a subscriber. You must create the associated budget and notification before you create the subscriber.
		 * Post #X-Amz-Target=AWSBudgetServiceGateway.CreateSubscriber
		 * @return {CreateSubscriberResponse} Success
		 */
		CreateSubscriber(requestBody: CreateSubscriberRequest): Observable<CreateSubscriberResponse> {
			return this.http.post<CreateSubscriberResponse>(this.baseUri + '#X-Amz-Target=AWSBudgetServiceGateway.CreateSubscriber', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes a budget. You can delete your budget at any time.</p> <important> <p>Deleting a budget also deletes the notifications and subscribers that are associated with that budget.</p> </important>
		 * Post #X-Amz-Target=AWSBudgetServiceGateway.DeleteBudget
		 * @return {DeleteBudgetResponse} Success
		 */
		DeleteBudget(requestBody: DeleteBudgetRequest): Observable<DeleteBudgetResponse> {
			return this.http.post<DeleteBudgetResponse>(this.baseUri + '#X-Amz-Target=AWSBudgetServiceGateway.DeleteBudget', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a budget action.
		 * Post #X-Amz-Target=AWSBudgetServiceGateway.DeleteBudgetAction
		 * @return {DeleteBudgetActionResponse} Success
		 */
		DeleteBudgetAction(requestBody: DeleteBudgetActionRequest): Observable<DeleteBudgetActionResponse> {
			return this.http.post<DeleteBudgetActionResponse>(this.baseUri + '#X-Amz-Target=AWSBudgetServiceGateway.DeleteBudgetAction', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes a notification.</p> <important> <p>Deleting a notification also deletes the subscribers that are associated with the notification.</p> </important>
		 * Post #X-Amz-Target=AWSBudgetServiceGateway.DeleteNotification
		 * @return {DeleteNotificationResponse} Success
		 */
		DeleteNotification(requestBody: DeleteNotificationRequest): Observable<DeleteNotificationResponse> {
			return this.http.post<DeleteNotificationResponse>(this.baseUri + '#X-Amz-Target=AWSBudgetServiceGateway.DeleteNotification', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes a subscriber.</p> <important> <p>Deleting the last subscriber to a notification also deletes the notification.</p> </important>
		 * Post #X-Amz-Target=AWSBudgetServiceGateway.DeleteSubscriber
		 * @return {DeleteSubscriberResponse} Success
		 */
		DeleteSubscriber(requestBody: DeleteSubscriberRequest): Observable<DeleteSubscriberResponse> {
			return this.http.post<DeleteSubscriberResponse>(this.baseUri + '#X-Amz-Target=AWSBudgetServiceGateway.DeleteSubscriber', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Describes a budget.</p> <important> <p>The Request Syntax section shows the <code>BudgetLimit</code> syntax. For <code>PlannedBudgetLimits</code>, see the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_budgets_DescribeBudget.html#API_DescribeBudget_Examples">Examples</a> section. </p> </important>
		 * Post #X-Amz-Target=AWSBudgetServiceGateway.DescribeBudget
		 * @return {DescribeBudgetResponse} Success
		 */
		DescribeBudget(requestBody: DescribeBudgetRequest): Observable<DescribeBudgetResponse> {
			return this.http.post<DescribeBudgetResponse>(this.baseUri + '#X-Amz-Target=AWSBudgetServiceGateway.DescribeBudget', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describes a budget action detail.
		 * Post #X-Amz-Target=AWSBudgetServiceGateway.DescribeBudgetAction
		 * @return {DescribeBudgetActionResponse} Success
		 */
		DescribeBudgetAction(requestBody: DescribeBudgetActionRequest): Observable<DescribeBudgetActionResponse> {
			return this.http.post<DescribeBudgetActionResponse>(this.baseUri + '#X-Amz-Target=AWSBudgetServiceGateway.DescribeBudgetAction', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describes a budget action history detail.
		 * Post #X-Amz-Target=AWSBudgetServiceGateway.DescribeBudgetActionHistories
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeBudgetActionHistoriesResponse} Success
		 */
		DescribeBudgetActionHistories(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: DescribeBudgetActionHistoriesRequest): Observable<DescribeBudgetActionHistoriesResponse> {
			return this.http.post<DescribeBudgetActionHistoriesResponse>(this.baseUri + '#X-Amz-Target=AWSBudgetServiceGateway.DescribeBudgetActionHistories?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describes all of the budget actions for an account.
		 * Post #X-Amz-Target=AWSBudgetServiceGateway.DescribeBudgetActionsForAccount
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeBudgetActionsForAccountResponse} Success
		 */
		DescribeBudgetActionsForAccount(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: DescribeBudgetActionsForAccountRequest): Observable<DescribeBudgetActionsForAccountResponse> {
			return this.http.post<DescribeBudgetActionsForAccountResponse>(this.baseUri + '#X-Amz-Target=AWSBudgetServiceGateway.DescribeBudgetActionsForAccount?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describes all of the budget actions for a budget.
		 * Post #X-Amz-Target=AWSBudgetServiceGateway.DescribeBudgetActionsForBudget
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeBudgetActionsForBudgetResponse} Success
		 */
		DescribeBudgetActionsForBudget(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: DescribeBudgetActionsForBudgetRequest): Observable<DescribeBudgetActionsForBudgetResponse> {
			return this.http.post<DescribeBudgetActionsForBudgetResponse>(this.baseUri + '#X-Amz-Target=AWSBudgetServiceGateway.DescribeBudgetActionsForBudget?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the budget names and notifications that are associated with an account.
		 * Post #X-Amz-Target=AWSBudgetServiceGateway.DescribeBudgetNotificationsForAccount
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeBudgetNotificationsForAccountResponse} Success
		 */
		DescribeBudgetNotificationsForAccount(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: DescribeBudgetNotificationsForAccountRequest): Observable<DescribeBudgetNotificationsForAccountResponse> {
			return this.http.post<DescribeBudgetNotificationsForAccountResponse>(this.baseUri + '#X-Amz-Target=AWSBudgetServiceGateway.DescribeBudgetNotificationsForAccount?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describes the history for <code>DAILY</code>, <code>MONTHLY</code>, and <code>QUARTERLY</code> budgets. Budget history isn't available for <code>ANNUAL</code> budgets.
		 * Post #X-Amz-Target=AWSBudgetServiceGateway.DescribeBudgetPerformanceHistory
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeBudgetPerformanceHistoryResponse} Success
		 */
		DescribeBudgetPerformanceHistory(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: DescribeBudgetPerformanceHistoryRequest): Observable<DescribeBudgetPerformanceHistoryResponse> {
			return this.http.post<DescribeBudgetPerformanceHistoryResponse>(this.baseUri + '#X-Amz-Target=AWSBudgetServiceGateway.DescribeBudgetPerformanceHistory?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Lists the budgets that are associated with an account.</p> <important> <p>The Request Syntax section shows the <code>BudgetLimit</code> syntax. For <code>PlannedBudgetLimits</code>, see the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_budgets_DescribeBudgets.html#API_DescribeBudgets_Examples">Examples</a> section. </p> </important>
		 * Post #X-Amz-Target=AWSBudgetServiceGateway.DescribeBudgets
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeBudgetsResponse} Success
		 */
		DescribeBudgets(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: DescribeBudgetsRequest): Observable<DescribeBudgetsResponse> {
			return this.http.post<DescribeBudgetsResponse>(this.baseUri + '#X-Amz-Target=AWSBudgetServiceGateway.DescribeBudgets?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the notifications that are associated with a budget.
		 * Post #X-Amz-Target=AWSBudgetServiceGateway.DescribeNotificationsForBudget
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeNotificationsForBudgetResponse} Success
		 */
		DescribeNotificationsForBudget(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: DescribeNotificationsForBudgetRequest): Observable<DescribeNotificationsForBudgetResponse> {
			return this.http.post<DescribeNotificationsForBudgetResponse>(this.baseUri + '#X-Amz-Target=AWSBudgetServiceGateway.DescribeNotificationsForBudget?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the subscribers that are associated with a notification.
		 * Post #X-Amz-Target=AWSBudgetServiceGateway.DescribeSubscribersForNotification
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeSubscribersForNotificationResponse} Success
		 */
		DescribeSubscribersForNotification(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: DescribeSubscribersForNotificationRequest): Observable<DescribeSubscribersForNotificationResponse> {
			return this.http.post<DescribeSubscribersForNotificationResponse>(this.baseUri + '#X-Amz-Target=AWSBudgetServiceGateway.DescribeSubscribersForNotification?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Executes a budget action.
		 * Post #X-Amz-Target=AWSBudgetServiceGateway.ExecuteBudgetAction
		 * @return {ExecuteBudgetActionResponse} Success
		 */
		ExecuteBudgetAction(requestBody: ExecuteBudgetActionRequest): Observable<ExecuteBudgetActionResponse> {
			return this.http.post<ExecuteBudgetActionResponse>(this.baseUri + '#X-Amz-Target=AWSBudgetServiceGateway.ExecuteBudgetAction', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Updates a budget. You can change every part of a budget except for the <code>budgetName</code> and the <code>calculatedSpend</code>. When you modify a budget, the <code>calculatedSpend</code> drops to zero until Amazon Web Services has new usage data to use for forecasting.</p> <important> <p>Only one of <code>BudgetLimit</code> or <code>PlannedBudgetLimits</code> can be present in the syntax at one time. Use the syntax that matches your case. The Request Syntax section shows the <code>BudgetLimit</code> syntax. For <code>PlannedBudgetLimits</code>, see the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_budgets_UpdateBudget.html#API_UpdateBudget_Examples">Examples</a> section. </p> </important>
		 * Post #X-Amz-Target=AWSBudgetServiceGateway.UpdateBudget
		 * @return {UpdateBudgetResponse} Success
		 */
		UpdateBudget(requestBody: UpdateBudgetRequest): Observable<UpdateBudgetResponse> {
			return this.http.post<UpdateBudgetResponse>(this.baseUri + '#X-Amz-Target=AWSBudgetServiceGateway.UpdateBudget', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates a budget action.
		 * Post #X-Amz-Target=AWSBudgetServiceGateway.UpdateBudgetAction
		 * @return {UpdateBudgetActionResponse} Success
		 */
		UpdateBudgetAction(requestBody: UpdateBudgetActionRequest): Observable<UpdateBudgetActionResponse> {
			return this.http.post<UpdateBudgetActionResponse>(this.baseUri + '#X-Amz-Target=AWSBudgetServiceGateway.UpdateBudgetAction', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates a notification.
		 * Post #X-Amz-Target=AWSBudgetServiceGateway.UpdateNotification
		 * @return {UpdateNotificationResponse} Success
		 */
		UpdateNotification(requestBody: UpdateNotificationRequest): Observable<UpdateNotificationResponse> {
			return this.http.post<UpdateNotificationResponse>(this.baseUri + '#X-Amz-Target=AWSBudgetServiceGateway.UpdateNotification', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates a subscriber.
		 * Post #X-Amz-Target=AWSBudgetServiceGateway.UpdateSubscriber
		 * @return {UpdateSubscriberResponse} Success
		 */
		UpdateSubscriber(requestBody: UpdateSubscriberRequest): Observable<UpdateSubscriberResponse> {
			return this.http.post<UpdateSubscriberResponse>(this.baseUri + '#X-Amz-Target=AWSBudgetServiceGateway.UpdateSubscriber', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum CreateBudgetX_Amz_Target { 'AWSBudgetServiceGateway.CreateBudget' = 'AWSBudgetServiceGateway.CreateBudget' }

	export enum CreateBudgetActionX_Amz_Target { 'AWSBudgetServiceGateway.CreateBudgetAction' = 'AWSBudgetServiceGateway.CreateBudgetAction' }

	export enum CreateNotificationX_Amz_Target { 'AWSBudgetServiceGateway.CreateNotification' = 'AWSBudgetServiceGateway.CreateNotification' }

	export enum CreateSubscriberX_Amz_Target { 'AWSBudgetServiceGateway.CreateSubscriber' = 'AWSBudgetServiceGateway.CreateSubscriber' }

	export enum DeleteBudgetX_Amz_Target { 'AWSBudgetServiceGateway.DeleteBudget' = 'AWSBudgetServiceGateway.DeleteBudget' }

	export enum DeleteBudgetActionX_Amz_Target { 'AWSBudgetServiceGateway.DeleteBudgetAction' = 'AWSBudgetServiceGateway.DeleteBudgetAction' }

	export enum DeleteNotificationX_Amz_Target { 'AWSBudgetServiceGateway.DeleteNotification' = 'AWSBudgetServiceGateway.DeleteNotification' }

	export enum DeleteSubscriberX_Amz_Target { 'AWSBudgetServiceGateway.DeleteSubscriber' = 'AWSBudgetServiceGateway.DeleteSubscriber' }

	export enum DescribeBudgetX_Amz_Target { 'AWSBudgetServiceGateway.DescribeBudget' = 'AWSBudgetServiceGateway.DescribeBudget' }

	export enum DescribeBudgetActionX_Amz_Target { 'AWSBudgetServiceGateway.DescribeBudgetAction' = 'AWSBudgetServiceGateway.DescribeBudgetAction' }

	export enum DescribeBudgetActionHistoriesX_Amz_Target { 'AWSBudgetServiceGateway.DescribeBudgetActionHistories' = 'AWSBudgetServiceGateway.DescribeBudgetActionHistories' }

	export enum DescribeBudgetActionsForAccountX_Amz_Target { 'AWSBudgetServiceGateway.DescribeBudgetActionsForAccount' = 'AWSBudgetServiceGateway.DescribeBudgetActionsForAccount' }

	export enum DescribeBudgetActionsForBudgetX_Amz_Target { 'AWSBudgetServiceGateway.DescribeBudgetActionsForBudget' = 'AWSBudgetServiceGateway.DescribeBudgetActionsForBudget' }

	export enum DescribeBudgetNotificationsForAccountX_Amz_Target { 'AWSBudgetServiceGateway.DescribeBudgetNotificationsForAccount' = 'AWSBudgetServiceGateway.DescribeBudgetNotificationsForAccount' }

	export enum DescribeBudgetPerformanceHistoryX_Amz_Target { 'AWSBudgetServiceGateway.DescribeBudgetPerformanceHistory' = 'AWSBudgetServiceGateway.DescribeBudgetPerformanceHistory' }

	export enum DescribeBudgetsX_Amz_Target { 'AWSBudgetServiceGateway.DescribeBudgets' = 'AWSBudgetServiceGateway.DescribeBudgets' }

	export enum DescribeNotificationsForBudgetX_Amz_Target { 'AWSBudgetServiceGateway.DescribeNotificationsForBudget' = 'AWSBudgetServiceGateway.DescribeNotificationsForBudget' }

	export enum DescribeSubscribersForNotificationX_Amz_Target { 'AWSBudgetServiceGateway.DescribeSubscribersForNotification' = 'AWSBudgetServiceGateway.DescribeSubscribersForNotification' }

	export enum ExecuteBudgetActionX_Amz_Target { 'AWSBudgetServiceGateway.ExecuteBudgetAction' = 'AWSBudgetServiceGateway.ExecuteBudgetAction' }

	export enum UpdateBudgetX_Amz_Target { 'AWSBudgetServiceGateway.UpdateBudget' = 'AWSBudgetServiceGateway.UpdateBudget' }

	export enum UpdateBudgetActionX_Amz_Target { 'AWSBudgetServiceGateway.UpdateBudgetAction' = 'AWSBudgetServiceGateway.UpdateBudgetAction' }

	export enum UpdateNotificationX_Amz_Target { 'AWSBudgetServiceGateway.UpdateNotification' = 'AWSBudgetServiceGateway.UpdateNotification' }

	export enum UpdateSubscriberX_Amz_Target { 'AWSBudgetServiceGateway.UpdateSubscriber' = 'AWSBudgetServiceGateway.UpdateSubscriber' }

}

