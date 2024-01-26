import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface Activity {

		/** If cost prices are utilized on employees, this can be used to determine a markup percentage for the given activity.<p class='filter'>Filterable: not filterable</p><p class='sort'>Sortable: false</p> */
		costPriceMarkupPercentage?: number | null;

		/** Date where price should change from before to after.<p class='filter'>Filterable: not filterable</p><p class='sort'>Sortable: false</p> */
		cutoffDate?: Date | null;

		/**
		 * The number of the activity group that this activity belongs.<p class='filter'>Filterable: eq, ne, lt, lte, gt, gte, in, nin</p><p class='sort'>Sortable: false</p>
		 * Required
		 */
		groupNumber: number;

		/** Hides an activity from employees when registering in e-conomic UI.<p class='filter'>Filterable: not filterable</p><p class='sort'>Sortable: false</p> */
		hideInSearch?: boolean | null;

		/** If time in lieu is used, this defines which code the activity should utilize when registered upon.<p class='filter'>Filterable: not filterable</p><p class='sort'>Sortable: false</p> */
		inLieuCode?: number | null;

		/** Defines whether the activity can be registered upon.<p class='filter'>Filterable: eq, ne, lt, lte, gt, gte</p><p class='sort'>Sortable: false</p> */
		isAccessible?: boolean | null;

		/**
		 * Name of the activity.<p class='filter'>Filterable: eq, ne, lt, lte, gt, gte, in, nin, like</p><p class='sort'>Sortable: false</p>
		 * Required
		 * Max length: 100
		 * Min length: 0
		 */
		name: string;

		/**
		 * The unique number of the activity.<p class='filter'>Filterable: eq, ne, lt, lte, gt, gte, in, nin</p><p class='sort'>Sortable: true</p>
		 * Required
		 * Minimum: 1
		 * Maximum: 999999999
		 */
		number: number;

		/** The object version, required for PUT requests.<p class='filter'>Filterable: not filterable</p><p class='sort'>Sortable: false</p> */
		objectVersion?: string | null;

		/** Price to be used after defined cut off date if defined.<p class='filter'>Filterable: not filterable</p><p class='sort'>Sortable: false</p> */
		salesPriceAfter?: number | null;

		/** Price for a given activity. This will be utilized if no special price is defined.<p class='filter'>Filterable: not filterable</p><p class='sort'>Sortable: false</p> */
		salesPriceBefore?: number | null;
	}
	export interface ActivityFormProperties {

		/** If cost prices are utilized on employees, this can be used to determine a markup percentage for the given activity.<p class='filter'>Filterable: not filterable</p><p class='sort'>Sortable: false</p> */
		costPriceMarkupPercentage: FormControl<number | null | undefined>,

		/** Date where price should change from before to after.<p class='filter'>Filterable: not filterable</p><p class='sort'>Sortable: false</p> */
		cutoffDate: FormControl<Date | null | undefined>,

		/**
		 * The number of the activity group that this activity belongs.<p class='filter'>Filterable: eq, ne, lt, lte, gt, gte, in, nin</p><p class='sort'>Sortable: false</p>
		 * Required
		 */
		groupNumber: FormControl<number | null | undefined>,

		/** Hides an activity from employees when registering in e-conomic UI.<p class='filter'>Filterable: not filterable</p><p class='sort'>Sortable: false</p> */
		hideInSearch: FormControl<boolean | null | undefined>,

		/** If time in lieu is used, this defines which code the activity should utilize when registered upon.<p class='filter'>Filterable: not filterable</p><p class='sort'>Sortable: false</p> */
		inLieuCode: FormControl<number | null | undefined>,

		/** Defines whether the activity can be registered upon.<p class='filter'>Filterable: eq, ne, lt, lte, gt, gte</p><p class='sort'>Sortable: false</p> */
		isAccessible: FormControl<boolean | null | undefined>,

		/**
		 * Name of the activity.<p class='filter'>Filterable: eq, ne, lt, lte, gt, gte, in, nin, like</p><p class='sort'>Sortable: false</p>
		 * Required
		 * Max length: 100
		 * Min length: 0
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The unique number of the activity.<p class='filter'>Filterable: eq, ne, lt, lte, gt, gte, in, nin</p><p class='sort'>Sortable: true</p>
		 * Required
		 * Minimum: 1
		 * Maximum: 999999999
		 */
		number: FormControl<number | null | undefined>,

		/** The object version, required for PUT requests.<p class='filter'>Filterable: not filterable</p><p class='sort'>Sortable: false</p> */
		objectVersion: FormControl<string | null | undefined>,

		/** Price to be used after defined cut off date if defined.<p class='filter'>Filterable: not filterable</p><p class='sort'>Sortable: false</p> */
		salesPriceAfter: FormControl<number | null | undefined>,

		/** Price for a given activity. This will be utilized if no special price is defined.<p class='filter'>Filterable: not filterable</p><p class='sort'>Sortable: false</p> */
		salesPriceBefore: FormControl<number | null | undefined>,
	}
	export function CreateActivityFormGroup() {
		return new FormGroup<ActivityFormProperties>({
			costPriceMarkupPercentage: new FormControl<number | null | undefined>(undefined),
			cutoffDate: new FormControl<Date | null | undefined>(undefined),
			groupNumber: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			hideInSearch: new FormControl<boolean | null | undefined>(undefined),
			inLieuCode: new FormControl<number | null | undefined>(undefined),
			isAccessible: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(100)]),
			number: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(1), Validators.max(999999999)]),
			objectVersion: new FormControl<string | null | undefined>(undefined),
			salesPriceAfter: new FormControl<number | null | undefined>(undefined),
			salesPriceBefore: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Array of objects along with a cursor. Max number in the array returned is 1000 */
	export interface ActivityCursorResults {

		/** Use this continuation cursor in a request back to continue the list. In case there are no more items to retrieve, the cursor is not returned at all.<p class='filter'>Read-only: true</p><p class='filter'>Filterable: not filterable</p><p class='sort'>Sortable: false</p> */
		cursor?: string | null;

		/** Max number of items returned is 1000.<p class='filter'>Filterable: not filterable</p><p class='sort'>Sortable: false</p> */
		items?: Array<Activity>;
	}

	/** Array of objects along with a cursor. Max number in the array returned is 1000 */
	export interface ActivityCursorResultsFormProperties {

		/** Use this continuation cursor in a request back to continue the list. In case there are no more items to retrieve, the cursor is not returned at all.<p class='filter'>Read-only: true</p><p class='filter'>Filterable: not filterable</p><p class='sort'>Sortable: false</p> */
		cursor: FormControl<string | null | undefined>,
	}
	export function CreateActivityCursorResultsFormGroup() {
		return new FormGroup<ActivityCursorResultsFormProperties>({
			cursor: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ActivityGroup {

		/**
		 * The account number to register costs for closed activities.
		 * If includeCostPriceInFinance is set to true, this property is required.
		 * Otherwise, it cannot be provided.
		 * Only accessible accounts (not barred) with accountType=="status" or "profitAndLoss" are allowed.<p class='filter'>Filterable: eq, ne, lt, lte, gt, gte, in, nin</p><p class='sort'>Sortable: false</p>
		 */
		costAccountClosed?: number | null;

		/**
		 * The account number to register costs for ongoing activities.
		 * If includeCostPriceInFinance is set to true, this property is required.
		 * Otherwise, it cannot be provided.
		 * Only accessible accounts (not barred) with accountType=="status" or "profitAndLoss" are allowed.<p class='filter'>Filterable: eq, ne, lt, lte, gt, gte, in, nin</p><p class='sort'>Sortable: false</p>
		 */
		costAccountOngoing?: number | null;

		/**
		 * The type of account for costs for ongoing activities:
		 * - 0: Debit
		 * - 1: Credit
		 * If includeCostPriceInFinance is set to true, this property is required.
		 * Otherwise, it cannot be provided.<p class='filter'>Filterable: not filterable</p><p class='sort'>Sortable: false</p>
		 */
		costAccountOngoingType?: OngoingAccountType;

		/**
		 * The contra account number to register costs for ongoing activities.
		 * If includeCostPriceInFinance is set to true, this property is required.
		 * Otherwise, it cannot be provided.
		 * Only accessible accounts (not barred) with accountType=="status" or "profitAndLoss" are allowed.<p class='filter'>Filterable: eq, ne, lt, lte, gt, gte, in, nin</p><p class='sort'>Sortable: false</p>
		 */
		costContraAccountOngoing?: number | null;

		/** If set to true, activity costs will be included in accounting.<p class='filter'>Filterable: eq, ne, lt, lte, gt, gte</p><p class='sort'>Sortable: false</p> */
		includeCostPriceInFinance?: boolean | null;

		/** If set to true, activity revenue will be included in accounting.<p class='filter'>Filterable: eq, ne, lt, lte, gt, gte</p><p class='sort'>Sortable: false</p> */
		includeSalesPriceInFinance?: boolean | null;

		/**
		 * Name of the activity group.<p class='filter'>Filterable: eq, ne, lt, lte, gt, gte, in, nin, like</p><p class='sort'>Sortable: true</p>
		 * Required
		 * Max length: 100
		 * Min length: 0
		 */
		name: string;

		/** The unique number of the activity group.<p class='filter'>Filterable: eq, ne, lt, lte, gt, gte, in, nin</p><p class='sort'>Sortable: true</p> */
		number?: number | null;

		/** The object version, required for PUT requests.<p class='filter'>Filterable: not filterable</p><p class='sort'>Sortable: false</p> */
		objectVersion?: string | null;

		/**
		 * The account number to register revenue for closed activities.
		 * If includeSalesPriceInFinance is set to true, this property is required.
		 * Otherwise, it cannot be provided.
		 * Only accessible accounts (not barred) with accountType=="status" or "profitAndLoss" are allowed.<p class='filter'>Filterable: eq, ne, lt, lte, gt, gte, in, nin</p><p class='sort'>Sortable: false</p>
		 */
		salesAccountClosed?: number | null;

		/**
		 * The account number to register revenue for ongoing activities.
		 * If includeSalesPriceInFinance is set to true, this property is required.
		 * Otherwise, it cannot be provided.
		 * Only accessible accounts (not barred) with accountType=="status" or "profitAndLoss" are allowed.<p class='filter'>Filterable: eq, ne, lt, lte, gt, gte, in, nin</p><p class='sort'>Sortable: false</p>
		 */
		salesAccountOngoing?: number | null;

		/**
		 * The type of account for revenue from ongoing activities:
		 * - 0: Debit
		 * - 1: Credit
		 * If includeSalesPriceInFinance is set to true, this property is required.
		 * Otherwise, it cannot be provided.<p class='filter'>Filterable: not filterable</p><p class='sort'>Sortable: false</p>
		 */
		salesAccountOngoingType?: OngoingAccountType;

		/**
		 * The contra account number to register revenue for ongoing activities.
		 * If includeSalesPriceInFinance is set to true, this property is required.
		 * Otherwise, it cannot be provided.
		 * Only accessible accounts (not barred) with accountType=="status" or "profitAndLoss" are allowed.<p class='filter'>Filterable: eq, ne, lt, lte, gt, gte, in, nin</p><p class='sort'>Sortable: false</p>
		 */
		salesContraAccountOngoing?: number | null;

		/**
		 * Activity group types:
		 * - 1: Productive, Invoiceable
		 * - 2: Productive, Non-Invoiceable
		 * - 3: Unproductive<p class='filter'>Filterable: eq, ne</p><p class='sort'>Sortable: true</p>
		 * Required
		 */
		type: ActivityGroupType;
	}
	export interface ActivityGroupFormProperties {

		/**
		 * The account number to register costs for closed activities.
		 * If includeCostPriceInFinance is set to true, this property is required.
		 * Otherwise, it cannot be provided.
		 * Only accessible accounts (not barred) with accountType=="status" or "profitAndLoss" are allowed.<p class='filter'>Filterable: eq, ne, lt, lte, gt, gte, in, nin</p><p class='sort'>Sortable: false</p>
		 */
		costAccountClosed: FormControl<number | null | undefined>,

		/**
		 * The account number to register costs for ongoing activities.
		 * If includeCostPriceInFinance is set to true, this property is required.
		 * Otherwise, it cannot be provided.
		 * Only accessible accounts (not barred) with accountType=="status" or "profitAndLoss" are allowed.<p class='filter'>Filterable: eq, ne, lt, lte, gt, gte, in, nin</p><p class='sort'>Sortable: false</p>
		 */
		costAccountOngoing: FormControl<number | null | undefined>,

		/**
		 * The type of account for costs for ongoing activities:
		 * - 0: Debit
		 * - 1: Credit
		 * If includeCostPriceInFinance is set to true, this property is required.
		 * Otherwise, it cannot be provided.<p class='filter'>Filterable: not filterable</p><p class='sort'>Sortable: false</p>
		 */
		costAccountOngoingType: FormControl<OngoingAccountType | null | undefined>,

		/**
		 * The contra account number to register costs for ongoing activities.
		 * If includeCostPriceInFinance is set to true, this property is required.
		 * Otherwise, it cannot be provided.
		 * Only accessible accounts (not barred) with accountType=="status" or "profitAndLoss" are allowed.<p class='filter'>Filterable: eq, ne, lt, lte, gt, gte, in, nin</p><p class='sort'>Sortable: false</p>
		 */
		costContraAccountOngoing: FormControl<number | null | undefined>,

		/** If set to true, activity costs will be included in accounting.<p class='filter'>Filterable: eq, ne, lt, lte, gt, gte</p><p class='sort'>Sortable: false</p> */
		includeCostPriceInFinance: FormControl<boolean | null | undefined>,

		/** If set to true, activity revenue will be included in accounting.<p class='filter'>Filterable: eq, ne, lt, lte, gt, gte</p><p class='sort'>Sortable: false</p> */
		includeSalesPriceInFinance: FormControl<boolean | null | undefined>,

		/**
		 * Name of the activity group.<p class='filter'>Filterable: eq, ne, lt, lte, gt, gte, in, nin, like</p><p class='sort'>Sortable: true</p>
		 * Required
		 * Max length: 100
		 * Min length: 0
		 */
		name: FormControl<string | null | undefined>,

		/** The unique number of the activity group.<p class='filter'>Filterable: eq, ne, lt, lte, gt, gte, in, nin</p><p class='sort'>Sortable: true</p> */
		number: FormControl<number | null | undefined>,

		/** The object version, required for PUT requests.<p class='filter'>Filterable: not filterable</p><p class='sort'>Sortable: false</p> */
		objectVersion: FormControl<string | null | undefined>,

		/**
		 * The account number to register revenue for closed activities.
		 * If includeSalesPriceInFinance is set to true, this property is required.
		 * Otherwise, it cannot be provided.
		 * Only accessible accounts (not barred) with accountType=="status" or "profitAndLoss" are allowed.<p class='filter'>Filterable: eq, ne, lt, lte, gt, gte, in, nin</p><p class='sort'>Sortable: false</p>
		 */
		salesAccountClosed: FormControl<number | null | undefined>,

		/**
		 * The account number to register revenue for ongoing activities.
		 * If includeSalesPriceInFinance is set to true, this property is required.
		 * Otherwise, it cannot be provided.
		 * Only accessible accounts (not barred) with accountType=="status" or "profitAndLoss" are allowed.<p class='filter'>Filterable: eq, ne, lt, lte, gt, gte, in, nin</p><p class='sort'>Sortable: false</p>
		 */
		salesAccountOngoing: FormControl<number | null | undefined>,

		/**
		 * The type of account for revenue from ongoing activities:
		 * - 0: Debit
		 * - 1: Credit
		 * If includeSalesPriceInFinance is set to true, this property is required.
		 * Otherwise, it cannot be provided.<p class='filter'>Filterable: not filterable</p><p class='sort'>Sortable: false</p>
		 */
		salesAccountOngoingType: FormControl<OngoingAccountType | null | undefined>,

		/**
		 * The contra account number to register revenue for ongoing activities.
		 * If includeSalesPriceInFinance is set to true, this property is required.
		 * Otherwise, it cannot be provided.
		 * Only accessible accounts (not barred) with accountType=="status" or "profitAndLoss" are allowed.<p class='filter'>Filterable: eq, ne, lt, lte, gt, gte, in, nin</p><p class='sort'>Sortable: false</p>
		 */
		salesContraAccountOngoing: FormControl<number | null | undefined>,

		/**
		 * Activity group types:
		 * - 1: Productive, Invoiceable
		 * - 2: Productive, Non-Invoiceable
		 * - 3: Unproductive<p class='filter'>Filterable: eq, ne</p><p class='sort'>Sortable: true</p>
		 * Required
		 */
		type: FormControl<ActivityGroupType | null | undefined>,
	}
	export function CreateActivityGroupFormGroup() {
		return new FormGroup<ActivityGroupFormProperties>({
			costAccountClosed: new FormControl<number | null | undefined>(undefined),
			costAccountOngoing: new FormControl<number | null | undefined>(undefined),
			costAccountOngoingType: new FormControl<OngoingAccountType | null | undefined>(undefined),
			costContraAccountOngoing: new FormControl<number | null | undefined>(undefined),
			includeCostPriceInFinance: new FormControl<boolean | null | undefined>(undefined),
			includeSalesPriceInFinance: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(100)]),
			number: new FormControl<number | null | undefined>(undefined),
			objectVersion: new FormControl<string | null | undefined>(undefined),
			salesAccountClosed: new FormControl<number | null | undefined>(undefined),
			salesAccountOngoing: new FormControl<number | null | undefined>(undefined),
			salesAccountOngoingType: new FormControl<OngoingAccountType | null | undefined>(undefined),
			salesContraAccountOngoing: new FormControl<number | null | undefined>(undefined),
			type: new FormControl<ActivityGroupType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum OngoingAccountType { _0 = 0, _1 = 1 }

	export enum ActivityGroupType { _1 = 0, _2 = 1, _3 = 2 }


	/** Array of objects along with a cursor. Max number in the array returned is 1000 */
	export interface ActivityGroupCursorResults {

		/** Use this continuation cursor in a request back to continue the list. In case there are no more items to retrieve, the cursor is not returned at all.<p class='filter'>Read-only: true</p><p class='filter'>Filterable: not filterable</p><p class='sort'>Sortable: false</p> */
		cursor?: string | null;

		/** Max number of items returned is 1000.<p class='filter'>Filterable: not filterable</p><p class='sort'>Sortable: false</p> */
		items?: Array<ActivityGroup>;
	}

	/** Array of objects along with a cursor. Max number in the array returned is 1000 */
	export interface ActivityGroupCursorResultsFormProperties {

		/** Use this continuation cursor in a request back to continue the list. In case there are no more items to retrieve, the cursor is not returned at all.<p class='filter'>Read-only: true</p><p class='filter'>Filterable: not filterable</p><p class='sort'>Sortable: false</p> */
		cursor: FormControl<string | null | undefined>,
	}
	export function CreateActivityGroupCursorResultsFormGroup() {
		return new FormGroup<ActivityGroupCursorResultsFormProperties>({
			cursor: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum CostGroupType { _1 = 0, _2 = 1 }

	export interface CostType {

		/**
		 * The number of the cost type group that the cost type belongs to.<p class='filter'>Filterable: not filterable</p><p class='sort'>Sortable: true</p>
		 * Required
		 */
		costGroupNumber: number;

		/** It shows whether the cost type can be used to create expenses or not.<p class='filter'>Filterable: eq, ne, lt, lte, gt, gte</p><p class='sort'>Sortable: false</p> */
		isBarred?: boolean | null;

		/** The date when the cost type was last updated.<p class='filter'>Read-only: true</p><p class='filter'>Filterable: eq, ne, lt, lte, gt, gte</p><p class='sort'>Sortable: false</p> */
		lastUpdated?: Date | null;

		/**
		 * Name of the cost type.<p class='filter'>Filterable: eq, ne, lt, lte, gt, gte, in, nin, like</p><p class='sort'>Sortable: true</p>
		 * Required
		 * Max length: 100
		 * Min length: 0
		 */
		name: string;

		/**
		 * The unique number of the cost type.<p class='filter'>Filterable: eq, ne, lt, lte, gt, gte, in, nin</p><p class='sort'>Sortable: true</p>
		 * Required
		 * Minimum: 1
		 * Maximum: 999999999
		 */
		number: number;

		/** The object version, required for PUT requests.<p class='filter'>Filterable: not filterable</p><p class='sort'>Sortable: false</p> */
		objectVersion?: string | null;

		/** The code for the Vat that's going to be applied.<p class='filter'>Filterable: not filterable</p><p class='sort'>Sortable: true</p> */
		vatCode?: string | null;
	}
	export interface CostTypeFormProperties {

		/**
		 * The number of the cost type group that the cost type belongs to.<p class='filter'>Filterable: not filterable</p><p class='sort'>Sortable: true</p>
		 * Required
		 */
		costGroupNumber: FormControl<number | null | undefined>,

		/** It shows whether the cost type can be used to create expenses or not.<p class='filter'>Filterable: eq, ne, lt, lte, gt, gte</p><p class='sort'>Sortable: false</p> */
		isBarred: FormControl<boolean | null | undefined>,

		/** The date when the cost type was last updated.<p class='filter'>Read-only: true</p><p class='filter'>Filterable: eq, ne, lt, lte, gt, gte</p><p class='sort'>Sortable: false</p> */
		lastUpdated: FormControl<Date | null | undefined>,

		/**
		 * Name of the cost type.<p class='filter'>Filterable: eq, ne, lt, lte, gt, gte, in, nin, like</p><p class='sort'>Sortable: true</p>
		 * Required
		 * Max length: 100
		 * Min length: 0
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The unique number of the cost type.<p class='filter'>Filterable: eq, ne, lt, lte, gt, gte, in, nin</p><p class='sort'>Sortable: true</p>
		 * Required
		 * Minimum: 1
		 * Maximum: 999999999
		 */
		number: FormControl<number | null | undefined>,

		/** The object version, required for PUT requests.<p class='filter'>Filterable: not filterable</p><p class='sort'>Sortable: false</p> */
		objectVersion: FormControl<string | null | undefined>,

		/** The code for the Vat that's going to be applied.<p class='filter'>Filterable: not filterable</p><p class='sort'>Sortable: true</p> */
		vatCode: FormControl<string | null | undefined>,
	}
	export function CreateCostTypeFormGroup() {
		return new FormGroup<CostTypeFormProperties>({
			costGroupNumber: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			isBarred: new FormControl<boolean | null | undefined>(undefined),
			lastUpdated: new FormControl<Date | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(100)]),
			number: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(1), Validators.max(999999999)]),
			objectVersion: new FormControl<string | null | undefined>(undefined),
			vatCode: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Array of objects along with a cursor. Max number in the array returned is 1000 */
	export interface CostTypeCursorResults {

		/** Use this continuation cursor in a request back to continue the list. In case there are no more items to retrieve, the cursor is not returned at all.<p class='filter'>Read-only: true</p><p class='filter'>Filterable: not filterable</p><p class='sort'>Sortable: false</p> */
		cursor?: string | null;

		/** Max number of items returned is 1000.<p class='filter'>Filterable: not filterable</p><p class='sort'>Sortable: false</p> */
		items?: Array<CostType>;
	}

	/** Array of objects along with a cursor. Max number in the array returned is 1000 */
	export interface CostTypeCursorResultsFormProperties {

		/** Use this continuation cursor in a request back to continue the list. In case there are no more items to retrieve, the cursor is not returned at all.<p class='filter'>Read-only: true</p><p class='filter'>Filterable: not filterable</p><p class='sort'>Sortable: false</p> */
		cursor: FormControl<string | null | undefined>,
	}
	export function CreateCostTypeCursorResultsFormGroup() {
		return new FormGroup<CostTypeCursorResultsFormProperties>({
			cursor: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CostTypeGroup {

		/**
		 * The account number to register costs for closed projects.<p class='filter'>Filterable: not filterable</p><p class='sort'>Sortable: true</p>
		 * Required
		 */
		accountClosed: number;

		/**
		 * The account number to register ongoing costs.<p class='filter'>Filterable: not filterable</p><p class='sort'>Sortable: true</p>
		 * Required
		 */
		accountOnGoing: number;

		/** The difference in percentage between the sales price and the cost price.<p class='filter'>Filterable: not filterable</p><p class='sort'>Sortable: true</p> */
		markup?: number | null;

		/**
		 * Name of the cost type group.<p class='filter'>Filterable: eq, ne, lt, lte, gt, gte, in, nin, like</p><p class='sort'>Sortable: true</p>
		 * Required
		 * Max length: 100
		 * Min length: 0
		 */
		name: string;

		/**
		 * The unique number of the cost type group.<p class='filter'>Filterable: eq, ne, lt, lte, gt, gte, in, nin</p><p class='sort'>Sortable: true</p>
		 * Required
		 * Minimum: 1
		 * Maximum: 999999999
		 */
		number: number;

		/** The object version, required for PUT requests.<p class='filter'>Filterable: not filterable</p><p class='sort'>Sortable: false</p> */
		objectVersion?: string | null;

		/**
		 * Cost type group types:
		 * - 1: Invoiceable
		 * - 2: NonInvoiceable<p class='filter'>Filterable: not filterable</p><p class='sort'>Sortable: false</p>
		 * Required
		 */
		type: CostGroupType;
	}
	export interface CostTypeGroupFormProperties {

		/**
		 * The account number to register costs for closed projects.<p class='filter'>Filterable: not filterable</p><p class='sort'>Sortable: true</p>
		 * Required
		 */
		accountClosed: FormControl<number | null | undefined>,

		/**
		 * The account number to register ongoing costs.<p class='filter'>Filterable: not filterable</p><p class='sort'>Sortable: true</p>
		 * Required
		 */
		accountOnGoing: FormControl<number | null | undefined>,

		/** The difference in percentage between the sales price and the cost price.<p class='filter'>Filterable: not filterable</p><p class='sort'>Sortable: true</p> */
		markup: FormControl<number | null | undefined>,

		/**
		 * Name of the cost type group.<p class='filter'>Filterable: eq, ne, lt, lte, gt, gte, in, nin, like</p><p class='sort'>Sortable: true</p>
		 * Required
		 * Max length: 100
		 * Min length: 0
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The unique number of the cost type group.<p class='filter'>Filterable: eq, ne, lt, lte, gt, gte, in, nin</p><p class='sort'>Sortable: true</p>
		 * Required
		 * Minimum: 1
		 * Maximum: 999999999
		 */
		number: FormControl<number | null | undefined>,

		/** The object version, required for PUT requests.<p class='filter'>Filterable: not filterable</p><p class='sort'>Sortable: false</p> */
		objectVersion: FormControl<string | null | undefined>,

		/**
		 * Cost type group types:
		 * - 1: Invoiceable
		 * - 2: NonInvoiceable<p class='filter'>Filterable: not filterable</p><p class='sort'>Sortable: false</p>
		 * Required
		 */
		type: FormControl<CostGroupType | null | undefined>,
	}
	export function CreateCostTypeGroupFormGroup() {
		return new FormGroup<CostTypeGroupFormProperties>({
			accountClosed: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			accountOnGoing: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			markup: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(100)]),
			number: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(1), Validators.max(999999999)]),
			objectVersion: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<CostGroupType | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Array of objects along with a cursor. Max number in the array returned is 1000 */
	export interface CostTypeGroupCursorResults {

		/** Use this continuation cursor in a request back to continue the list. In case there are no more items to retrieve, the cursor is not returned at all.<p class='filter'>Read-only: true</p><p class='filter'>Filterable: not filterable</p><p class='sort'>Sortable: false</p> */
		cursor?: string | null;

		/** Max number of items returned is 1000.<p class='filter'>Filterable: not filterable</p><p class='sort'>Sortable: false</p> */
		items?: Array<CostTypeGroup>;
	}

	/** Array of objects along with a cursor. Max number in the array returned is 1000 */
	export interface CostTypeGroupCursorResultsFormProperties {

		/** Use this continuation cursor in a request back to continue the list. In case there are no more items to retrieve, the cursor is not returned at all.<p class='filter'>Read-only: true</p><p class='filter'>Filterable: not filterable</p><p class='sort'>Sortable: false</p> */
		cursor: FormControl<string | null | undefined>,
	}
	export function CreateCostTypeGroupCursorResultsFormGroup() {
		return new FormGroup<CostTypeGroupCursorResultsFormProperties>({
			cursor: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreatedResult {

		/** The identifier of the newly created entity<p class='filter'>Read-only: true</p><p class='filter'>Filterable: not filterable</p><p class='sort'>Sortable: false</p> */
		number?: number | null;
	}
	export interface CreatedResultFormProperties {

		/** The identifier of the newly created entity<p class='filter'>Read-only: true</p><p class='filter'>Filterable: not filterable</p><p class='sort'>Sortable: false</p> */
		number: FormControl<number | null | undefined>,
	}
	export function CreateCreatedResultFormGroup() {
		return new FormGroup<CreatedResultFormProperties>({
			number: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Employee {

		/**
		 * Shows if the employee can be registered on or is barred.<p class='filter'>Filterable: eq, ne, lt, lte, gt, gte</p><p class='sort'>Sortable: false</p>
		 * Required
		 */
		access: boolean;

		/**
		 * Employee's email address.<p class='filter'>Filterable: eq, ne, lt, lte, gt, gte, in, nin</p><p class='sort'>Sortable: false</p>
		 * Max length: 50
		 * Min length: 0
		 */
		email?: string | null;

		/**
		 * The number of the employee group that this employee belongs.<p class='filter'>Filterable: eq, ne, lt, lte, gt, gte, in, nin</p><p class='sort'>Sortable: false</p>
		 * Required
		 */
		groupNumber: number;

		/**
		 * Name of the employee.<p class='filter'>Filterable: eq, ne, lt, lte, gt, gte, in, nin, like</p><p class='sort'>Sortable: false</p>
		 * Required
		 * Max length: 100
		 * Min length: 0
		 */
		name: string;

		/**
		 * The unique number of the employee.<p class='filter'>Filterable: eq, ne, lt, lte, gt, gte, in, nin</p><p class='sort'>Sortable: true</p>
		 * Required
		 * Minimum: 0
		 * Maximum: 999999
		 */
		number: number;

		/** The object version, required for PUT requests.<p class='filter'>Filterable: not filterable</p><p class='sort'>Sortable: false</p> */
		objectVersion?: string | null;

		/**
		 * Employee's telephone number.<p class='filter'>Filterable: eq, ne, lt, lte, gt, gte, in, nin</p><p class='sort'>Sortable: false</p>
		 * Max length: 20
		 * Min length: 0
		 */
		phone?: string | null;
	}
	export interface EmployeeFormProperties {

		/**
		 * Shows if the employee can be registered on or is barred.<p class='filter'>Filterable: eq, ne, lt, lte, gt, gte</p><p class='sort'>Sortable: false</p>
		 * Required
		 */
		access: FormControl<boolean | null | undefined>,

		/**
		 * Employee's email address.<p class='filter'>Filterable: eq, ne, lt, lte, gt, gte, in, nin</p><p class='sort'>Sortable: false</p>
		 * Max length: 50
		 * Min length: 0
		 */
		email: FormControl<string | null | undefined>,

		/**
		 * The number of the employee group that this employee belongs.<p class='filter'>Filterable: eq, ne, lt, lte, gt, gte, in, nin</p><p class='sort'>Sortable: false</p>
		 * Required
		 */
		groupNumber: FormControl<number | null | undefined>,

		/**
		 * Name of the employee.<p class='filter'>Filterable: eq, ne, lt, lte, gt, gte, in, nin, like</p><p class='sort'>Sortable: false</p>
		 * Required
		 * Max length: 100
		 * Min length: 0
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The unique number of the employee.<p class='filter'>Filterable: eq, ne, lt, lte, gt, gte, in, nin</p><p class='sort'>Sortable: true</p>
		 * Required
		 * Minimum: 0
		 * Maximum: 999999
		 */
		number: FormControl<number | null | undefined>,

		/** The object version, required for PUT requests.<p class='filter'>Filterable: not filterable</p><p class='sort'>Sortable: false</p> */
		objectVersion: FormControl<string | null | undefined>,

		/**
		 * Employee's telephone number.<p class='filter'>Filterable: eq, ne, lt, lte, gt, gte, in, nin</p><p class='sort'>Sortable: false</p>
		 * Max length: 20
		 * Min length: 0
		 */
		phone: FormControl<string | null | undefined>,
	}
	export function CreateEmployeeFormGroup() {
		return new FormGroup<EmployeeFormProperties>({
			access: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			email: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(50)]),
			groupNumber: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(100)]),
			number: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0), Validators.max(999999)]),
			objectVersion: new FormControl<string | null | undefined>(undefined),
			phone: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(20)]),
		});

	}


	/** Array of objects along with a cursor. Max number in the array returned is 1000 */
	export interface EmployeeCursorResults {

		/** Use this continuation cursor in a request back to continue the list. In case there are no more items to retrieve, the cursor is not returned at all.<p class='filter'>Read-only: true</p><p class='filter'>Filterable: not filterable</p><p class='sort'>Sortable: false</p> */
		cursor?: string | null;

		/** Max number of items returned is 1000.<p class='filter'>Filterable: not filterable</p><p class='sort'>Sortable: false</p> */
		items?: Array<Employee>;
	}

	/** Array of objects along with a cursor. Max number in the array returned is 1000 */
	export interface EmployeeCursorResultsFormProperties {

		/** Use this continuation cursor in a request back to continue the list. In case there are no more items to retrieve, the cursor is not returned at all.<p class='filter'>Read-only: true</p><p class='filter'>Filterable: not filterable</p><p class='sort'>Sortable: false</p> */
		cursor: FormControl<string | null | undefined>,
	}
	export function CreateEmployeeCursorResultsFormGroup() {
		return new FormGroup<EmployeeCursorResultsFormProperties>({
			cursor: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface EmployeeGroup {

		/**
		 * Name of the employee group.<p class='filter'>Filterable: eq, ne, lt, lte, gt, gte, in, nin, like</p><p class='sort'>Sortable: false</p>
		 * Required
		 * Max length: 100
		 * Min length: 0
		 */
		name: string;

		/**
		 * The unique number of the employee group.<p class='filter'>Filterable: eq, ne, lt, lte, gt, gte, in, nin</p><p class='sort'>Sortable: true</p>
		 * Required
		 * Minimum: 1
		 * Maximum: 999999999
		 */
		number: number;

		/** The object version, required for PUT requests.<p class='filter'>Filterable: not filterable</p><p class='sort'>Sortable: false</p> */
		objectVersion?: string | null;
	}
	export interface EmployeeGroupFormProperties {

		/**
		 * Name of the employee group.<p class='filter'>Filterable: eq, ne, lt, lte, gt, gte, in, nin, like</p><p class='sort'>Sortable: false</p>
		 * Required
		 * Max length: 100
		 * Min length: 0
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The unique number of the employee group.<p class='filter'>Filterable: eq, ne, lt, lte, gt, gte, in, nin</p><p class='sort'>Sortable: true</p>
		 * Required
		 * Minimum: 1
		 * Maximum: 999999999
		 */
		number: FormControl<number | null | undefined>,

		/** The object version, required for PUT requests.<p class='filter'>Filterable: not filterable</p><p class='sort'>Sortable: false</p> */
		objectVersion: FormControl<string | null | undefined>,
	}
	export function CreateEmployeeGroupFormGroup() {
		return new FormGroup<EmployeeGroupFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(100)]),
			number: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(1), Validators.max(999999999)]),
			objectVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Array of objects along with a cursor. Max number in the array returned is 1000 */
	export interface EmployeeGroupCursorResults {

		/** Use this continuation cursor in a request back to continue the list. In case there are no more items to retrieve, the cursor is not returned at all.<p class='filter'>Read-only: true</p><p class='filter'>Filterable: not filterable</p><p class='sort'>Sortable: false</p> */
		cursor?: string | null;

		/** Max number of items returned is 1000.<p class='filter'>Filterable: not filterable</p><p class='sort'>Sortable: false</p> */
		items?: Array<EmployeeGroup>;
	}

	/** Array of objects along with a cursor. Max number in the array returned is 1000 */
	export interface EmployeeGroupCursorResultsFormProperties {

		/** Use this continuation cursor in a request back to continue the list. In case there are no more items to retrieve, the cursor is not returned at all.<p class='filter'>Read-only: true</p><p class='filter'>Filterable: not filterable</p><p class='sort'>Sortable: false</p> */
		cursor: FormControl<string | null | undefined>,
	}
	export function CreateEmployeeGroupCursorResultsFormGroup() {
		return new FormGroup<EmployeeGroupCursorResultsFormProperties>({
			cursor: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum EmployeeType { _0 = 0, _1 = 1, _2 = 2, _3 = 3 }

	export interface Error {

		/** Some hints for the developer that might help avoid the error.<p class='filter'>Filterable: not filterable</p><p class='sort'>Sortable: false</p> */
		developerHint?: string | null;

		/** The error code.<p class='filter'>Filterable: not filterable</p><p class='sort'>Sortable: false</p> */
		errorCode?: string | null;

		/** The unique log identifier of the error.<p class='filter'>Filterable: not filterable</p><p class='sort'>Sortable: false</p> */
		logId?: string | null;

		/** The UTC time of the error being logged.<p class='filter'>Read-only: true</p><p class='filter'>Filterable: not filterable</p><p class='sort'>Sortable: false</p> */
		logTimeUtc?: string | null;

		/** Short description about the error.<p class='filter'>Filterable: not filterable</p><p class='sort'>Sortable: false</p> */
		message?: string | null;

		/** The property name in case of validation logic issue.<p class='filter'>Filterable: not filterable</p><p class='sort'>Sortable: false</p> */
		property?: string | null;
	}
	export interface ErrorFormProperties {

		/** Some hints for the developer that might help avoid the error.<p class='filter'>Filterable: not filterable</p><p class='sort'>Sortable: false</p> */
		developerHint: FormControl<string | null | undefined>,

		/** The error code.<p class='filter'>Filterable: not filterable</p><p class='sort'>Sortable: false</p> */
		errorCode: FormControl<string | null | undefined>,

		/** The unique log identifier of the error.<p class='filter'>Filterable: not filterable</p><p class='sort'>Sortable: false</p> */
		logId: FormControl<string | null | undefined>,

		/** The UTC time of the error being logged.<p class='filter'>Read-only: true</p><p class='filter'>Filterable: not filterable</p><p class='sort'>Sortable: false</p> */
		logTimeUtc: FormControl<string | null | undefined>,

		/** Short description about the error.<p class='filter'>Filterable: not filterable</p><p class='sort'>Sortable: false</p> */
		message: FormControl<string | null | undefined>,

		/** The property name in case of validation logic issue.<p class='filter'>Filterable: not filterable</p><p class='sort'>Sortable: false</p> */
		property: FormControl<string | null | undefined>,
	}
	export function CreateErrorFormGroup() {
		return new FormGroup<ErrorFormProperties>({
			developerHint: new FormControl<string | null | undefined>(undefined),
			errorCode: new FormControl<string | null | undefined>(undefined),
			logId: new FormControl<string | null | undefined>(undefined),
			logTimeUtc: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			property: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Mileage {

		/**
		 * The date of the project mileage entry<p class='filter'>Filterable: eq, ne, lt, lte, gt, gte</p><p class='sort'>Sortable: false</p>
		 * Required
		 */
		date: Date;

		/**
		 * The distance amount that the mileage registration should contain<p class='filter'>Filterable: not filterable</p><p class='sort'>Sortable: false</p>
		 * Required
		 */
		distance: number;

		/**
		 * The employee number of the project mileage entry<p class='filter'>Filterable: eq, ne, lt, lte, gt, gte, in, nin</p><p class='sort'>Sortable: false</p>
		 * Required
		 */
		employeeNumber: number;

		/** The starting place of the travel which the mileage registration reflects<p class='filter'>Filterable: not filterable</p><p class='sort'>Sortable: false</p> */
		from?: string | null;

		/**
		 * By default it is true, so a user with rights will be able to approve.
		 * Once it is approved, field becomes false and it will be impossible to approve ever again.<p class='filter'>Read-only: true</p><p class='filter'>Filterable: eq, ne, lt, lte, gt, gte</p><p class='sort'>Sortable: false</p>
		 */
		includeApprove?: boolean | null;

		/** Value specifying if the mileage was approved. If it was approved, it can not be updated anymore.<p class='filter'>Read-only: true</p><p class='filter'>Filterable: eq, ne, lt, lte, gt, gte</p><p class='sort'>Sortable: false</p> */
		isApproved?: boolean | null;

		/** The unique number of the project mileage entry<p class='filter'>Read-only: true</p><p class='filter'>Filterable: eq, ne, lt, lte, gt, gte, in, nin</p><p class='sort'>Sortable: true</p> */
		number?: number | null;

		/** The object version, required for PUT requests.<p class='filter'>Filterable: not filterable</p><p class='sort'>Sortable: false</p> */
		objectVersion?: string | null;

		/**
		 * The project number of the project mileage entry<p class='filter'>Filterable: eq, ne, lt, lte, gt, gte, in, nin</p><p class='sort'>Sortable: false</p>
		 * Required
		 */
		projectNumber: number;

		/** The destination of the travel which the mileage registration reflects<p class='filter'>Filterable: not filterable</p><p class='sort'>Sortable: false</p> */
		to?: string | null;
	}
	export interface MileageFormProperties {

		/**
		 * The date of the project mileage entry<p class='filter'>Filterable: eq, ne, lt, lte, gt, gte</p><p class='sort'>Sortable: false</p>
		 * Required
		 */
		date: FormControl<Date | null | undefined>,

		/**
		 * The distance amount that the mileage registration should contain<p class='filter'>Filterable: not filterable</p><p class='sort'>Sortable: false</p>
		 * Required
		 */
		distance: FormControl<number | null | undefined>,

		/**
		 * The employee number of the project mileage entry<p class='filter'>Filterable: eq, ne, lt, lte, gt, gte, in, nin</p><p class='sort'>Sortable: false</p>
		 * Required
		 */
		employeeNumber: FormControl<number | null | undefined>,

		/** The starting place of the travel which the mileage registration reflects<p class='filter'>Filterable: not filterable</p><p class='sort'>Sortable: false</p> */
		from: FormControl<string | null | undefined>,

		/**
		 * By default it is true, so a user with rights will be able to approve.
		 * Once it is approved, field becomes false and it will be impossible to approve ever again.<p class='filter'>Read-only: true</p><p class='filter'>Filterable: eq, ne, lt, lte, gt, gte</p><p class='sort'>Sortable: false</p>
		 */
		includeApprove: FormControl<boolean | null | undefined>,

		/** Value specifying if the mileage was approved. If it was approved, it can not be updated anymore.<p class='filter'>Read-only: true</p><p class='filter'>Filterable: eq, ne, lt, lte, gt, gte</p><p class='sort'>Sortable: false</p> */
		isApproved: FormControl<boolean | null | undefined>,

		/** The unique number of the project mileage entry<p class='filter'>Read-only: true</p><p class='filter'>Filterable: eq, ne, lt, lte, gt, gte, in, nin</p><p class='sort'>Sortable: true</p> */
		number: FormControl<number | null | undefined>,

		/** The object version, required for PUT requests.<p class='filter'>Filterable: not filterable</p><p class='sort'>Sortable: false</p> */
		objectVersion: FormControl<string | null | undefined>,

		/**
		 * The project number of the project mileage entry<p class='filter'>Filterable: eq, ne, lt, lte, gt, gte, in, nin</p><p class='sort'>Sortable: false</p>
		 * Required
		 */
		projectNumber: FormControl<number | null | undefined>,

		/** The destination of the travel which the mileage registration reflects<p class='filter'>Filterable: not filterable</p><p class='sort'>Sortable: false</p> */
		to: FormControl<string | null | undefined>,
	}
	export function CreateMileageFormGroup() {
		return new FormGroup<MileageFormProperties>({
			date: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			distance: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			employeeNumber: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			from: new FormControl<string | null | undefined>(undefined),
			includeApprove: new FormControl<boolean | null | undefined>(undefined),
			isApproved: new FormControl<boolean | null | undefined>(undefined),
			number: new FormControl<number | null | undefined>(undefined),
			objectVersion: new FormControl<string | null | undefined>(undefined),
			projectNumber: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			to: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Array of objects along with a cursor. Max number in the array returned is 1000 */
	export interface MileageCursorResults {

		/** Use this continuation cursor in a request back to continue the list. In case there are no more items to retrieve, the cursor is not returned at all.<p class='filter'>Read-only: true</p><p class='filter'>Filterable: not filterable</p><p class='sort'>Sortable: false</p> */
		cursor?: string | null;

		/** Max number of items returned is 1000.<p class='filter'>Filterable: not filterable</p><p class='sort'>Sortable: false</p> */
		items?: Array<Mileage>;
	}

	/** Array of objects along with a cursor. Max number in the array returned is 1000 */
	export interface MileageCursorResultsFormProperties {

		/** Use this continuation cursor in a request back to continue the list. In case there are no more items to retrieve, the cursor is not returned at all.<p class='filter'>Read-only: true</p><p class='filter'>Filterable: not filterable</p><p class='sort'>Sortable: false</p> */
		cursor: FormControl<string | null | undefined>,
	}
	export function CreateMileageCursorResultsFormGroup() {
		return new FormGroup<MileageCursorResultsFormProperties>({
			cursor: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface MileageNumbersCollection {

		/**
		 * The mileage numbers.<p class='filter'>Filterable: not filterable</p><p class='sort'>Sortable: false</p>
		 * Required
		 */
		numbers: Array<number>;
	}
	export interface MileageNumbersCollectionFormProperties {
	}
	export function CreateMileageNumbersCollectionFormGroup() {
		return new FormGroup<MileageNumbersCollectionFormProperties>({
		});

	}

	export interface MileagePrices {

		/** The total cost of the trip, calculated based on the mileage cost rates.<p class='filter'>Read-only: true</p><p class='filter'>Filterable: not filterable</p><p class='sort'>Sortable: false</p> */
		costPrice?: number | null;

		/** The cost of the trip per mile, provided by the mileage setup.<p class='filter'>Read-only: true</p><p class='filter'>Filterable: not filterable</p><p class='sort'>Sortable: false</p> */
		costRate?: number | null;

		/** The mileage entry identifier.<p class='filter'>Filterable: eq, ne, lt, lte, gt, gte, in, nin</p><p class='sort'>Sortable: true</p> */
		number?: number | null;

		/** The total sales price of the trip, calculated based on the mileage sales rates.<p class='filter'>Read-only: true</p><p class='filter'>Filterable: not filterable</p><p class='sort'>Sortable: false</p> */
		salesPrice?: number | null;

		/** The sales price of the trip per mile, provided by the mileage setup.<p class='filter'>Read-only: true</p><p class='filter'>Filterable: not filterable</p><p class='sort'>Sortable: false</p> */
		salesRate?: number | null;
	}
	export interface MileagePricesFormProperties {

		/** The total cost of the trip, calculated based on the mileage cost rates.<p class='filter'>Read-only: true</p><p class='filter'>Filterable: not filterable</p><p class='sort'>Sortable: false</p> */
		costPrice: FormControl<number | null | undefined>,

		/** The cost of the trip per mile, provided by the mileage setup.<p class='filter'>Read-only: true</p><p class='filter'>Filterable: not filterable</p><p class='sort'>Sortable: false</p> */
		costRate: FormControl<number | null | undefined>,

		/** The mileage entry identifier.<p class='filter'>Filterable: eq, ne, lt, lte, gt, gte, in, nin</p><p class='sort'>Sortable: true</p> */
		number: FormControl<number | null | undefined>,

		/** The total sales price of the trip, calculated based on the mileage sales rates.<p class='filter'>Read-only: true</p><p class='filter'>Filterable: not filterable</p><p class='sort'>Sortable: false</p> */
		salesPrice: FormControl<number | null | undefined>,

		/** The sales price of the trip per mile, provided by the mileage setup.<p class='filter'>Read-only: true</p><p class='filter'>Filterable: not filterable</p><p class='sort'>Sortable: false</p> */
		salesRate: FormControl<number | null | undefined>,
	}
	export function CreateMileagePricesFormGroup() {
		return new FormGroup<MileagePricesFormProperties>({
			costPrice: new FormControl<number | null | undefined>(undefined),
			costRate: new FormControl<number | null | undefined>(undefined),
			number: new FormControl<number | null | undefined>(undefined),
			salesPrice: new FormControl<number | null | undefined>(undefined),
			salesRate: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Array of objects along with a cursor. Max number in the array returned is 1000 */
	export interface MileagePricesCursorResults {

		/** Use this continuation cursor in a request back to continue the list. In case there are no more items to retrieve, the cursor is not returned at all.<p class='filter'>Read-only: true</p><p class='filter'>Filterable: not filterable</p><p class='sort'>Sortable: false</p> */
		cursor?: string | null;

		/** Max number of items returned is 1000.<p class='filter'>Filterable: not filterable</p><p class='sort'>Sortable: false</p> */
		items?: Array<MileagePrices>;
	}

	/** Array of objects along with a cursor. Max number in the array returned is 1000 */
	export interface MileagePricesCursorResultsFormProperties {

		/** Use this continuation cursor in a request back to continue the list. In case there are no more items to retrieve, the cursor is not returned at all.<p class='filter'>Read-only: true</p><p class='filter'>Filterable: not filterable</p><p class='sort'>Sortable: false</p> */
		cursor: FormControl<string | null | undefined>,
	}
	export function CreateMileagePricesCursorResultsFormGroup() {
		return new FormGroup<MileagePricesCursorResultsFormProperties>({
			cursor: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Project {

		/** The date when the project was closed and booked.<p class='filter'>Filterable: eq, ne, lt, lte, gt, gte</p><p class='sort'>Sortable: false</p> */
		closedDate?: Date | null;

		/** The number of the contact person. Has to be from the same customer as the one defined in the project.<p class='filter'>Filterable: eq, ne, lt, lte, gt, gte, in, nin</p><p class='sort'>Sortable: false</p> */
		contactPersonId?: number | null;

		/** Sum of registrations based on cost price for the project<p class='filter'>Read-only: true</p><p class='filter'>Filterable: eq, ne, lt, lte, gt, gte, in, nin</p><p class='sort'>Sortable: false</p> */
		costPrice?: number | null;

		/**
		 * Number of customer this project is for. Required if project type is not Internal.<p class='filter'>Filterable: eq, ne, lt, lte, gt, gte, in, nin</p><p class='sort'>Sortable: false</p>
		 * Minimum: 1
		 * Maximum: 999999999
		 */
		customerNumber?: number | null;

		/** The project delivery date.<p class='filter'>Filterable: eq, ne, lt, lte, gt, gte</p><p class='sort'>Sortable: false</p> */
		deliveryDate?: Date | null;

		/** The location number used to deliver the project.<p class='filter'>Filterable: eq, ne, lt, lte, gt, gte, in, nin</p><p class='sort'>Sortable: false</p> */
		deliveryLocationNumber?: number | null;

		/** Only relevant if the user uses addon dimensions<p class='filter'>Filterable: eq, ne, lt, lte, gt, gte, in, nin</p><p class='sort'>Sortable: false</p> */
		departmentNumber?: number | null;

		/**
		 * Text describing the project.<p class='filter'>Filterable: not filterable</p><p class='sort'>Sortable: false</p>
		 * Max length: 2500
		 * Min length: 0
		 */
		description?: string | null;

		/** If a fixed price is agreed upon with a customer, this can be utilized. It is not retrieved when invoicing, however, so it is only used for reporting.<p class='filter'>Filterable: eq, ne, lt, lte, gt, gte, in, nin</p><p class='sort'>Sortable: false</p> */
		fixedPrice?: number | null;

		/** Sum of invoiced amount for the project<p class='filter'>Read-only: true</p><p class='filter'>Filterable: eq, ne, lt, lte, gt, gte, in, nin</p><p class='sort'>Sortable: false</p> */
		invoicedTotal?: number | null;

		/** Barred projects cannot retrieve registrations<p class='filter'>Filterable: eq, ne, lt, lte, gt, gte</p><p class='sort'>Sortable: false</p> */
		isBarred?: boolean | null;

		/** Shows if the project is closed. Closed project can't accept more entries.<p class='filter'>Read-only: true</p><p class='filter'>Filterable: eq, ne, lt, lte, gt, gte</p><p class='sort'>Sortable: false</p> */
		isClosed?: boolean | null;

		/** Decides whether the project is a main-project or sub-project. If false, it is a sub-project. If true, it is a main-project. Main-projects are grouping of projects. Main-project can't have entries, only sub-projects can.<p class='filter'>Filterable: eq, ne, lt, lte, gt, gte</p><p class='sort'>Sortable: false</p> */
		isMainProject?: boolean | null;

		/** Determines whether mileage should be included on sales invoices of the project<p class='filter'>Filterable: eq, ne, lt, lte, gt, gte</p><p class='sort'>Sortable: false</p> */
		isMileageInvoiced?: boolean | null;

		/** The date and time when this project was last updated. Use it in the filter to retrieve only updated projects.<p class='filter'>Read-only: true</p><p class='filter'>Filterable: eq, ne, lt, lte, gt, gte</p><p class='sort'>Sortable: false</p> */
		lastUpdated?: Date | null;

		/** The number of the main project, if this is a sub project linked to a main project. It can be null for both main and sub projects (sub project can exist not linked to any main project, like standalone project).<p class='filter'>Filterable: eq, ne, lt, lte, gt, gte, in, nin</p><p class='sort'>Sortable: false</p> */
		mainProjectNumber?: number | null;

		/** Default amount of mileage for the project<p class='filter'>Filterable: eq, ne, lt, lte, gt, gte, in, nin</p><p class='sort'>Sortable: false</p> */
		mileage?: number | null;

		/**
		 * Name of the project.<p class='filter'>Filterable: eq, ne, lt, lte, gt, gte, in, nin, like</p><p class='sort'>Sortable: false</p>
		 * Required
		 * Max length: 100
		 * Min length: 0
		 */
		name: string;

		/**
		 * The unique number of the project. If it's not provided in the POST requests, it's auto-generated.<p class='filter'>Filterable: eq, ne, lt, lte, gt, gte, in, nin</p><p class='sort'>Sortable: true</p>
		 * Minimum: 0
		 * Maximum: 999999999
		 */
		number?: number | null;

		/** The object version, required for PUT requests.<p class='filter'>Filterable: not filterable</p><p class='sort'>Sortable: false</p> */
		objectVersion?: string | null;

		/** Second employee number that is responsible for the project.<p class='filter'>Filterable: eq, ne, lt, lte, gt, gte, in, nin</p><p class='sort'>Sortable: false</p> */
		otherResponsibleEmployeeNumber?: number | null;

		/**
		 * The number of the project group that this project belongs.<p class='filter'>Filterable: eq, ne, lt, lte, gt, gte, in, nin</p><p class='sort'>Sortable: false</p>
		 * Required
		 */
		projectGroupNumber: number;

		/** The employee number that is responsible for the project.<p class='filter'>Filterable: eq, ne, lt, lte, gt, gte, in, nin</p><p class='sort'>Sortable: false</p> */
		responsibleEmployeeNumber?: number | null;

		/** Sum of registrations based on sales price for the project<p class='filter'>Read-only: true</p><p class='filter'>Filterable: eq, ne, lt, lte, gt, gte, in, nin</p><p class='sort'>Sortable: false</p> */
		salesPrice?: number | null;

		/** The number of the project status. Project status is a separate manageable resource.<p class='filter'>Filterable: eq, ne, lt, lte, gt, gte, in, nin</p><p class='sort'>Sortable: false</p> */
		status?: number | null;
	}
	export interface ProjectFormProperties {

		/** The date when the project was closed and booked.<p class='filter'>Filterable: eq, ne, lt, lte, gt, gte</p><p class='sort'>Sortable: false</p> */
		closedDate: FormControl<Date | null | undefined>,

		/** The number of the contact person. Has to be from the same customer as the one defined in the project.<p class='filter'>Filterable: eq, ne, lt, lte, gt, gte, in, nin</p><p class='sort'>Sortable: false</p> */
		contactPersonId: FormControl<number | null | undefined>,

		/** Sum of registrations based on cost price for the project<p class='filter'>Read-only: true</p><p class='filter'>Filterable: eq, ne, lt, lte, gt, gte, in, nin</p><p class='sort'>Sortable: false</p> */
		costPrice: FormControl<number | null | undefined>,

		/**
		 * Number of customer this project is for. Required if project type is not Internal.<p class='filter'>Filterable: eq, ne, lt, lte, gt, gte, in, nin</p><p class='sort'>Sortable: false</p>
		 * Minimum: 1
		 * Maximum: 999999999
		 */
		customerNumber: FormControl<number | null | undefined>,

		/** The project delivery date.<p class='filter'>Filterable: eq, ne, lt, lte, gt, gte</p><p class='sort'>Sortable: false</p> */
		deliveryDate: FormControl<Date | null | undefined>,

		/** The location number used to deliver the project.<p class='filter'>Filterable: eq, ne, lt, lte, gt, gte, in, nin</p><p class='sort'>Sortable: false</p> */
		deliveryLocationNumber: FormControl<number | null | undefined>,

		/** Only relevant if the user uses addon dimensions<p class='filter'>Filterable: eq, ne, lt, lte, gt, gte, in, nin</p><p class='sort'>Sortable: false</p> */
		departmentNumber: FormControl<number | null | undefined>,

		/**
		 * Text describing the project.<p class='filter'>Filterable: not filterable</p><p class='sort'>Sortable: false</p>
		 * Max length: 2500
		 * Min length: 0
		 */
		description: FormControl<string | null | undefined>,

		/** If a fixed price is agreed upon with a customer, this can be utilized. It is not retrieved when invoicing, however, so it is only used for reporting.<p class='filter'>Filterable: eq, ne, lt, lte, gt, gte, in, nin</p><p class='sort'>Sortable: false</p> */
		fixedPrice: FormControl<number | null | undefined>,

		/** Sum of invoiced amount for the project<p class='filter'>Read-only: true</p><p class='filter'>Filterable: eq, ne, lt, lte, gt, gte, in, nin</p><p class='sort'>Sortable: false</p> */
		invoicedTotal: FormControl<number | null | undefined>,

		/** Barred projects cannot retrieve registrations<p class='filter'>Filterable: eq, ne, lt, lte, gt, gte</p><p class='sort'>Sortable: false</p> */
		isBarred: FormControl<boolean | null | undefined>,

		/** Shows if the project is closed. Closed project can't accept more entries.<p class='filter'>Read-only: true</p><p class='filter'>Filterable: eq, ne, lt, lte, gt, gte</p><p class='sort'>Sortable: false</p> */
		isClosed: FormControl<boolean | null | undefined>,

		/** Decides whether the project is a main-project or sub-project. If false, it is a sub-project. If true, it is a main-project. Main-projects are grouping of projects. Main-project can't have entries, only sub-projects can.<p class='filter'>Filterable: eq, ne, lt, lte, gt, gte</p><p class='sort'>Sortable: false</p> */
		isMainProject: FormControl<boolean | null | undefined>,

		/** Determines whether mileage should be included on sales invoices of the project<p class='filter'>Filterable: eq, ne, lt, lte, gt, gte</p><p class='sort'>Sortable: false</p> */
		isMileageInvoiced: FormControl<boolean | null | undefined>,

		/** The date and time when this project was last updated. Use it in the filter to retrieve only updated projects.<p class='filter'>Read-only: true</p><p class='filter'>Filterable: eq, ne, lt, lte, gt, gte</p><p class='sort'>Sortable: false</p> */
		lastUpdated: FormControl<Date | null | undefined>,

		/** The number of the main project, if this is a sub project linked to a main project. It can be null for both main and sub projects (sub project can exist not linked to any main project, like standalone project).<p class='filter'>Filterable: eq, ne, lt, lte, gt, gte, in, nin</p><p class='sort'>Sortable: false</p> */
		mainProjectNumber: FormControl<number | null | undefined>,

		/** Default amount of mileage for the project<p class='filter'>Filterable: eq, ne, lt, lte, gt, gte, in, nin</p><p class='sort'>Sortable: false</p> */
		mileage: FormControl<number | null | undefined>,

		/**
		 * Name of the project.<p class='filter'>Filterable: eq, ne, lt, lte, gt, gte, in, nin, like</p><p class='sort'>Sortable: false</p>
		 * Required
		 * Max length: 100
		 * Min length: 0
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The unique number of the project. If it's not provided in the POST requests, it's auto-generated.<p class='filter'>Filterable: eq, ne, lt, lte, gt, gte, in, nin</p><p class='sort'>Sortable: true</p>
		 * Minimum: 0
		 * Maximum: 999999999
		 */
		number: FormControl<number | null | undefined>,

		/** The object version, required for PUT requests.<p class='filter'>Filterable: not filterable</p><p class='sort'>Sortable: false</p> */
		objectVersion: FormControl<string | null | undefined>,

		/** Second employee number that is responsible for the project.<p class='filter'>Filterable: eq, ne, lt, lte, gt, gte, in, nin</p><p class='sort'>Sortable: false</p> */
		otherResponsibleEmployeeNumber: FormControl<number | null | undefined>,

		/**
		 * The number of the project group that this project belongs.<p class='filter'>Filterable: eq, ne, lt, lte, gt, gte, in, nin</p><p class='sort'>Sortable: false</p>
		 * Required
		 */
		projectGroupNumber: FormControl<number | null | undefined>,

		/** The employee number that is responsible for the project.<p class='filter'>Filterable: eq, ne, lt, lte, gt, gte, in, nin</p><p class='sort'>Sortable: false</p> */
		responsibleEmployeeNumber: FormControl<number | null | undefined>,

		/** Sum of registrations based on sales price for the project<p class='filter'>Read-only: true</p><p class='filter'>Filterable: eq, ne, lt, lte, gt, gte, in, nin</p><p class='sort'>Sortable: false</p> */
		salesPrice: FormControl<number | null | undefined>,

		/** The number of the project status. Project status is a separate manageable resource.<p class='filter'>Filterable: eq, ne, lt, lte, gt, gte, in, nin</p><p class='sort'>Sortable: false</p> */
		status: FormControl<number | null | undefined>,
	}
	export function CreateProjectFormGroup() {
		return new FormGroup<ProjectFormProperties>({
			closedDate: new FormControl<Date | null | undefined>(undefined),
			contactPersonId: new FormControl<number | null | undefined>(undefined),
			costPrice: new FormControl<number | null | undefined>(undefined),
			customerNumber: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(999999999)]),
			deliveryDate: new FormControl<Date | null | undefined>(undefined),
			deliveryLocationNumber: new FormControl<number | null | undefined>(undefined),
			departmentNumber: new FormControl<number | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(2500)]),
			fixedPrice: new FormControl<number | null | undefined>(undefined),
			invoicedTotal: new FormControl<number | null | undefined>(undefined),
			isBarred: new FormControl<boolean | null | undefined>(undefined),
			isClosed: new FormControl<boolean | null | undefined>(undefined),
			isMainProject: new FormControl<boolean | null | undefined>(undefined),
			isMileageInvoiced: new FormControl<boolean | null | undefined>(undefined),
			lastUpdated: new FormControl<Date | null | undefined>(undefined),
			mainProjectNumber: new FormControl<number | null | undefined>(undefined),
			mileage: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(100)]),
			number: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(999999999)]),
			objectVersion: new FormControl<string | null | undefined>(undefined),
			otherResponsibleEmployeeNumber: new FormControl<number | null | undefined>(undefined),
			projectGroupNumber: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			responsibleEmployeeNumber: new FormControl<number | null | undefined>(undefined),
			salesPrice: new FormControl<number | null | undefined>(undefined),
			status: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ProjectActivity {

		/**
		 * The number of the activity that is linked to the project.<p class='filter'>Filterable: eq, ne, lt, lte, gt, gte, in, nin</p><p class='sort'>Sortable: false</p>
		 * Required
		 */
		activityNumber: number;

		/** If set to true, registration on the project is no longer allowed.<p class='filter'>Filterable: eq, ne, lt, lte, gt, gte</p><p class='sort'>Sortable: false</p> */
		completed?: boolean | null;

		/** The date when registration on the project activity stops being allowed.<p class='filter'>Filterable: eq, ne, lt, lte, gt, gte</p><p class='sort'>Sortable: false</p> */
		endDate?: Date | null;

		/** The system unique number of the project activity entry. This property is not visible in the UI.<p class='filter'>Filterable: eq, ne, lt, lte, gt, gte, in, nin</p><p class='sort'>Sortable: true</p> */
		number?: number | null;

		/** The object version, required for PUT requests.<p class='filter'>Filterable: not filterable</p><p class='sort'>Sortable: false</p> */
		objectVersion?: string | null;

		/**
		 * The number of the project that the activity is linked to.<p class='filter'>Filterable: eq, ne, lt, lte, gt, gte, in, nin</p><p class='sort'>Sortable: false</p>
		 * Required
		 */
		projectNumber: number;

		/** The number of the employee that is responsible for the project activity.<p class='filter'>Filterable: eq, ne, lt, lte, gt, gte, in, nin</p><p class='sort'>Sortable: false</p> */
		responsibleEmployeeNumber?: number | null;

		/** The date when registration on the project activity starts being allowed.<p class='filter'>Filterable: eq, ne, lt, lte, gt, gte</p><p class='sort'>Sortable: false</p> */
		startDate?: Date | null;
	}
	export interface ProjectActivityFormProperties {

		/**
		 * The number of the activity that is linked to the project.<p class='filter'>Filterable: eq, ne, lt, lte, gt, gte, in, nin</p><p class='sort'>Sortable: false</p>
		 * Required
		 */
		activityNumber: FormControl<number | null | undefined>,

		/** If set to true, registration on the project is no longer allowed.<p class='filter'>Filterable: eq, ne, lt, lte, gt, gte</p><p class='sort'>Sortable: false</p> */
		completed: FormControl<boolean | null | undefined>,

		/** The date when registration on the project activity stops being allowed.<p class='filter'>Filterable: eq, ne, lt, lte, gt, gte</p><p class='sort'>Sortable: false</p> */
		endDate: FormControl<Date | null | undefined>,

		/** The system unique number of the project activity entry. This property is not visible in the UI.<p class='filter'>Filterable: eq, ne, lt, lte, gt, gte, in, nin</p><p class='sort'>Sortable: true</p> */
		number: FormControl<number | null | undefined>,

		/** The object version, required for PUT requests.<p class='filter'>Filterable: not filterable</p><p class='sort'>Sortable: false</p> */
		objectVersion: FormControl<string | null | undefined>,

		/**
		 * The number of the project that the activity is linked to.<p class='filter'>Filterable: eq, ne, lt, lte, gt, gte, in, nin</p><p class='sort'>Sortable: false</p>
		 * Required
		 */
		projectNumber: FormControl<number | null | undefined>,

		/** The number of the employee that is responsible for the project activity.<p class='filter'>Filterable: eq, ne, lt, lte, gt, gte, in, nin</p><p class='sort'>Sortable: false</p> */
		responsibleEmployeeNumber: FormControl<number | null | undefined>,

		/** The date when registration on the project activity starts being allowed.<p class='filter'>Filterable: eq, ne, lt, lte, gt, gte</p><p class='sort'>Sortable: false</p> */
		startDate: FormControl<Date | null | undefined>,
	}
	export function CreateProjectActivityFormGroup() {
		return new FormGroup<ProjectActivityFormProperties>({
			activityNumber: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			completed: new FormControl<boolean | null | undefined>(undefined),
			endDate: new FormControl<Date | null | undefined>(undefined),
			number: new FormControl<number | null | undefined>(undefined),
			objectVersion: new FormControl<string | null | undefined>(undefined),
			projectNumber: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			responsibleEmployeeNumber: new FormControl<number | null | undefined>(undefined),
			startDate: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Array of objects along with a cursor. Max number in the array returned is 1000 */
	export interface ProjectActivityCursorResults {

		/** Use this continuation cursor in a request back to continue the list. In case there are no more items to retrieve, the cursor is not returned at all.<p class='filter'>Read-only: true</p><p class='filter'>Filterable: not filterable</p><p class='sort'>Sortable: false</p> */
		cursor?: string | null;

		/** Max number of items returned is 1000.<p class='filter'>Filterable: not filterable</p><p class='sort'>Sortable: false</p> */
		items?: Array<ProjectActivity>;
	}

	/** Array of objects along with a cursor. Max number in the array returned is 1000 */
	export interface ProjectActivityCursorResultsFormProperties {

		/** Use this continuation cursor in a request back to continue the list. In case there are no more items to retrieve, the cursor is not returned at all.<p class='filter'>Read-only: true</p><p class='filter'>Filterable: not filterable</p><p class='sort'>Sortable: false</p> */
		cursor: FormControl<string | null | undefined>,
	}
	export function CreateProjectActivityCursorResultsFormGroup() {
		return new FormGroup<ProjectActivityCursorResultsFormProperties>({
			cursor: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Array of objects along with a cursor. Max number in the array returned is 1000 */
	export interface ProjectCursorResults {

		/** Use this continuation cursor in a request back to continue the list. In case there are no more items to retrieve, the cursor is not returned at all.<p class='filter'>Read-only: true</p><p class='filter'>Filterable: not filterable</p><p class='sort'>Sortable: false</p> */
		cursor?: string | null;

		/** Max number of items returned is 1000.<p class='filter'>Filterable: not filterable</p><p class='sort'>Sortable: false</p> */
		items?: Array<Project>;
	}

	/** Array of objects along with a cursor. Max number in the array returned is 1000 */
	export interface ProjectCursorResultsFormProperties {

		/** Use this continuation cursor in a request back to continue the list. In case there are no more items to retrieve, the cursor is not returned at all.<p class='filter'>Read-only: true</p><p class='filter'>Filterable: not filterable</p><p class='sort'>Sortable: false</p> */
		cursor: FormControl<string | null | undefined>,
	}
	export function CreateProjectCursorResultsFormGroup() {
		return new FormGroup<ProjectCursorResultsFormProperties>({
			cursor: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ProjectCustomer {

		/**
		 * Name of the customer.<p class='filter'>Filterable: eq, ne, lt, lte, gt, gte, in, nin, like</p><p class='sort'>Sortable: true</p>
		 * Required
		 * Max length: 255
		 * Min length: 0
		 */
		name: string;

		/**
		 * The unique number of the customer.<p class='filter'>Filterable: eq, ne, lt, lte, gt, gte, in, nin</p><p class='sort'>Sortable: true</p>
		 * Required
		 * Minimum: 1
		 * Maximum: 999999999
		 */
		number: number;

		/** The object version, required for PUT requests.<p class='filter'>Filterable: not filterable</p><p class='sort'>Sortable: false</p> */
		objectVersion?: string | null;
	}
	export interface ProjectCustomerFormProperties {

		/**
		 * Name of the customer.<p class='filter'>Filterable: eq, ne, lt, lte, gt, gte, in, nin, like</p><p class='sort'>Sortable: true</p>
		 * Required
		 * Max length: 255
		 * Min length: 0
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The unique number of the customer.<p class='filter'>Filterable: eq, ne, lt, lte, gt, gte, in, nin</p><p class='sort'>Sortable: true</p>
		 * Required
		 * Minimum: 1
		 * Maximum: 999999999
		 */
		number: FormControl<number | null | undefined>,

		/** The object version, required for PUT requests.<p class='filter'>Filterable: not filterable</p><p class='sort'>Sortable: false</p> */
		objectVersion: FormControl<string | null | undefined>,
	}
	export function CreateProjectCustomerFormGroup() {
		return new FormGroup<ProjectCustomerFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(255)]),
			number: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(1), Validators.max(999999999)]),
			objectVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Array of objects along with a cursor. Max number in the array returned is 1000 */
	export interface ProjectCustomerCursorResults {

		/** Use this continuation cursor in a request back to continue the list. In case there are no more items to retrieve, the cursor is not returned at all.<p class='filter'>Read-only: true</p><p class='filter'>Filterable: not filterable</p><p class='sort'>Sortable: false</p> */
		cursor?: string | null;

		/** Max number of items returned is 1000.<p class='filter'>Filterable: not filterable</p><p class='sort'>Sortable: false</p> */
		items?: Array<ProjectCustomer>;
	}

	/** Array of objects along with a cursor. Max number in the array returned is 1000 */
	export interface ProjectCustomerCursorResultsFormProperties {

		/** Use this continuation cursor in a request back to continue the list. In case there are no more items to retrieve, the cursor is not returned at all.<p class='filter'>Read-only: true</p><p class='filter'>Filterable: not filterable</p><p class='sort'>Sortable: false</p> */
		cursor: FormControl<string | null | undefined>,
	}
	export function CreateProjectCustomerCursorResultsFormGroup() {
		return new FormGroup<ProjectCustomerCursorResultsFormProperties>({
			cursor: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ProjectEmployee {

		/**
		 * Employee's home address.<p class='filter'>Filterable: eq, ne, lt, lte, gt, gte, in, nin</p><p class='sort'>Sortable: false</p>
		 * Max length: 100
		 * Min length: 0
		 */
		address?: string | null;

		/**
		 * Shows if the employee can approve for example time entries.<p class='filter'>Filterable: not filterable</p><p class='sort'>Sortable: false</p>
		 * Required
		 */
		canApprove: boolean;

		/**
		 * Shows if the employee can take for example a time entry to the invoice process.<p class='filter'>Filterable: eq, ne, lt, lte, gt, gte</p><p class='sort'>Sortable: false</p>
		 * Required
		 */
		canInvoice: boolean;

		/**
		 * Employee's city of residence.<p class='filter'>Filterable: eq, ne, lt, lte, gt, gte, in, nin</p><p class='sort'>Sortable: false</p>
		 * Max length: 50
		 * Min length: 0
		 */
		city?: string | null;

		/** The cost after the cut off date.<p class='filter'>Filterable: eq, ne, lt, lte, gt, gte, in, nin</p><p class='sort'>Sortable: true</p> */
		costPriceAfter?: number | null;

		/** The cost before the cut off date.<p class='filter'>Filterable: eq, ne, lt, lte, gt, gte, in, nin</p><p class='sort'>Sortable: true</p> */
		costPriceBefore?: number | null;

		/** By default, salesPriceBefore is used, unless a cutoffDate and salesPriceAfter is determined. The cutoffDate serves the purpose of choosing which date the salesPriceAfter shall apply from. It can be null if only salesPriceBefore should apply.<p class='filter'>Filterable: eq, ne, lt, lte, gt, gte</p><p class='sort'>Sortable: true</p> */
		cutOffDate?: Date | null;

		/**
		 * Employee types:
		 * - 0: No user in e-conomic
		 * - 1: Time Logger
		 * - 2: Project Manager
		 * - 3: Mobile Time Logger<p class='filter'>Read-only: true</p><p class='filter'>Filterable: eq, ne</p><p class='sort'>Sortable: false</p>
		 */
		employeeType?: EmployeeType;

		/**
		 * The number of the employee group that this employee belongs.<p class='filter'>Filterable: eq, ne, lt, lte, gt, gte, in, nin</p><p class='sort'>Sortable: false</p>
		 * Required
		 */
		groupNumber: number;

		/**
		 * Shows if the employee can be registered on or is barred.<p class='filter'>Filterable: eq, ne, lt, lte, gt, gte</p><p class='sort'>Sortable: false</p>
		 * Required
		 */
		isBarred: boolean;

		/** Shows if the employee is also a user.<p class='filter'>Read-only: true</p><p class='filter'>Filterable: eq, ne, lt, lte, gt, gte</p><p class='sort'>Sortable: false</p> */
		isUser?: boolean | null;

		/**
		 * Name of the employee.<p class='filter'>Filterable: eq, ne, lt, lte, gt, gte, in, nin, like</p><p class='sort'>Sortable: false</p>
		 * Required
		 * Max length: 100
		 * Min length: 0
		 */
		name: string;

		/**
		 * The unique number of the project employee.<p class='filter'>Filterable: eq, ne, lt, lte, gt, gte, in, nin</p><p class='sort'>Sortable: true</p>
		 * Required
		 * Minimum: 1
		 * Maximum: 999999
		 */
		number: number;

		/** The object version, required for PUT requests.<p class='filter'>Filterable: not filterable</p><p class='sort'>Sortable: false</p> */
		objectVersion?: string | null;

		/** The sale price after the cut off date.<p class='filter'>Filterable: eq, ne, lt, lte, gt, gte, in, nin</p><p class='sort'>Sortable: true</p> */
		salesPriceAfter?: number | null;

		/** The sale price before the cut off date.<p class='filter'>Filterable: eq, ne, lt, lte, gt, gte, in, nin</p><p class='sort'>Sortable: true</p> */
		salesPriceBefore?: number | null;

		/** User id of the employee if it's a user.<p class='filter'>Read-only: true</p><p class='filter'>Filterable: eq, ne, lt, lte, gt, gte, in, nin</p><p class='sort'>Sortable: false</p> */
		userId?: string | null;

		/**
		 * Employee's zip code.<p class='filter'>Filterable: eq, ne, lt, lte, gt, gte, in, nin</p><p class='sort'>Sortable: false</p>
		 * Max length: 50
		 * Min length: 0
		 */
		zipCode?: string | null;
	}
	export interface ProjectEmployeeFormProperties {

		/**
		 * Employee's home address.<p class='filter'>Filterable: eq, ne, lt, lte, gt, gte, in, nin</p><p class='sort'>Sortable: false</p>
		 * Max length: 100
		 * Min length: 0
		 */
		address: FormControl<string | null | undefined>,

		/**
		 * Shows if the employee can approve for example time entries.<p class='filter'>Filterable: not filterable</p><p class='sort'>Sortable: false</p>
		 * Required
		 */
		canApprove: FormControl<boolean | null | undefined>,

		/**
		 * Shows if the employee can take for example a time entry to the invoice process.<p class='filter'>Filterable: eq, ne, lt, lte, gt, gte</p><p class='sort'>Sortable: false</p>
		 * Required
		 */
		canInvoice: FormControl<boolean | null | undefined>,

		/**
		 * Employee's city of residence.<p class='filter'>Filterable: eq, ne, lt, lte, gt, gte, in, nin</p><p class='sort'>Sortable: false</p>
		 * Max length: 50
		 * Min length: 0
		 */
		city: FormControl<string | null | undefined>,

		/** The cost after the cut off date.<p class='filter'>Filterable: eq, ne, lt, lte, gt, gte, in, nin</p><p class='sort'>Sortable: true</p> */
		costPriceAfter: FormControl<number | null | undefined>,

		/** The cost before the cut off date.<p class='filter'>Filterable: eq, ne, lt, lte, gt, gte, in, nin</p><p class='sort'>Sortable: true</p> */
		costPriceBefore: FormControl<number | null | undefined>,

		/** By default, salesPriceBefore is used, unless a cutoffDate and salesPriceAfter is determined. The cutoffDate serves the purpose of choosing which date the salesPriceAfter shall apply from. It can be null if only salesPriceBefore should apply.<p class='filter'>Filterable: eq, ne, lt, lte, gt, gte</p><p class='sort'>Sortable: true</p> */
		cutOffDate: FormControl<Date | null | undefined>,

		/**
		 * Employee types:
		 * - 0: No user in e-conomic
		 * - 1: Time Logger
		 * - 2: Project Manager
		 * - 3: Mobile Time Logger<p class='filter'>Read-only: true</p><p class='filter'>Filterable: eq, ne</p><p class='sort'>Sortable: false</p>
		 */
		employeeType: FormControl<EmployeeType | null | undefined>,

		/**
		 * The number of the employee group that this employee belongs.<p class='filter'>Filterable: eq, ne, lt, lte, gt, gte, in, nin</p><p class='sort'>Sortable: false</p>
		 * Required
		 */
		groupNumber: FormControl<number | null | undefined>,

		/**
		 * Shows if the employee can be registered on or is barred.<p class='filter'>Filterable: eq, ne, lt, lte, gt, gte</p><p class='sort'>Sortable: false</p>
		 * Required
		 */
		isBarred: FormControl<boolean | null | undefined>,

		/** Shows if the employee is also a user.<p class='filter'>Read-only: true</p><p class='filter'>Filterable: eq, ne, lt, lte, gt, gte</p><p class='sort'>Sortable: false</p> */
		isUser: FormControl<boolean | null | undefined>,

		/**
		 * Name of the employee.<p class='filter'>Filterable: eq, ne, lt, lte, gt, gte, in, nin, like</p><p class='sort'>Sortable: false</p>
		 * Required
		 * Max length: 100
		 * Min length: 0
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The unique number of the project employee.<p class='filter'>Filterable: eq, ne, lt, lte, gt, gte, in, nin</p><p class='sort'>Sortable: true</p>
		 * Required
		 * Minimum: 1
		 * Maximum: 999999
		 */
		number: FormControl<number | null | undefined>,

		/** The object version, required for PUT requests.<p class='filter'>Filterable: not filterable</p><p class='sort'>Sortable: false</p> */
		objectVersion: FormControl<string | null | undefined>,

		/** The sale price after the cut off date.<p class='filter'>Filterable: eq, ne, lt, lte, gt, gte, in, nin</p><p class='sort'>Sortable: true</p> */
		salesPriceAfter: FormControl<number | null | undefined>,

		/** The sale price before the cut off date.<p class='filter'>Filterable: eq, ne, lt, lte, gt, gte, in, nin</p><p class='sort'>Sortable: true</p> */
		salesPriceBefore: FormControl<number | null | undefined>,

		/** User id of the employee if it's a user.<p class='filter'>Read-only: true</p><p class='filter'>Filterable: eq, ne, lt, lte, gt, gte, in, nin</p><p class='sort'>Sortable: false</p> */
		userId: FormControl<string | null | undefined>,

		/**
		 * Employee's zip code.<p class='filter'>Filterable: eq, ne, lt, lte, gt, gte, in, nin</p><p class='sort'>Sortable: false</p>
		 * Max length: 50
		 * Min length: 0
		 */
		zipCode: FormControl<string | null | undefined>,
	}
	export function CreateProjectEmployeeFormGroup() {
		return new FormGroup<ProjectEmployeeFormProperties>({
			address: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(100)]),
			canApprove: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			canInvoice: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			city: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(50)]),
			costPriceAfter: new FormControl<number | null | undefined>(undefined),
			costPriceBefore: new FormControl<number | null | undefined>(undefined),
			cutOffDate: new FormControl<Date | null | undefined>(undefined),
			employeeType: new FormControl<EmployeeType | null | undefined>(undefined),
			groupNumber: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			isBarred: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			isUser: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(100)]),
			number: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(1), Validators.max(999999)]),
			objectVersion: new FormControl<string | null | undefined>(undefined),
			salesPriceAfter: new FormControl<number | null | undefined>(undefined),
			salesPriceBefore: new FormControl<number | null | undefined>(undefined),
			userId: new FormControl<string | null | undefined>(undefined),
			zipCode: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(50)]),
		});

	}


	/** Array of objects along with a cursor. Max number in the array returned is 1000 */
	export interface ProjectEmployeeCursorResults {

		/** Use this continuation cursor in a request back to continue the list. In case there are no more items to retrieve, the cursor is not returned at all.<p class='filter'>Read-only: true</p><p class='filter'>Filterable: not filterable</p><p class='sort'>Sortable: false</p> */
		cursor?: string | null;

		/** Max number of items returned is 1000.<p class='filter'>Filterable: not filterable</p><p class='sort'>Sortable: false</p> */
		items?: Array<ProjectEmployee>;
	}

	/** Array of objects along with a cursor. Max number in the array returned is 1000 */
	export interface ProjectEmployeeCursorResultsFormProperties {

		/** Use this continuation cursor in a request back to continue the list. In case there are no more items to retrieve, the cursor is not returned at all.<p class='filter'>Read-only: true</p><p class='filter'>Filterable: not filterable</p><p class='sort'>Sortable: false</p> */
		cursor: FormControl<string | null | undefined>,
	}
	export function CreateProjectEmployeeCursorResultsFormGroup() {
		return new FormGroup<ProjectEmployeeCursorResultsFormProperties>({
			cursor: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ProjectEmployeeGroup {

		/**
		 * Name of the employee group.<p class='filter'>Filterable: eq, ne, lt, lte, gt, gte, in, nin, like</p><p class='sort'>Sortable: false</p>
		 * Required
		 * Max length: 100
		 * Min length: 0
		 */
		name: string;

		/**
		 * The unique number of the employee group.<p class='filter'>Filterable: eq, ne, lt, lte, gt, gte, in, nin</p><p class='sort'>Sortable: true</p>
		 * Required
		 * Minimum: 1
		 * Maximum: 999999999
		 */
		number: number;

		/** The object version, required for PUT requests.<p class='filter'>Filterable: not filterable</p><p class='sort'>Sortable: false</p> */
		objectVersion?: string | null;
	}
	export interface ProjectEmployeeGroupFormProperties {

		/**
		 * Name of the employee group.<p class='filter'>Filterable: eq, ne, lt, lte, gt, gte, in, nin, like</p><p class='sort'>Sortable: false</p>
		 * Required
		 * Max length: 100
		 * Min length: 0
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The unique number of the employee group.<p class='filter'>Filterable: eq, ne, lt, lte, gt, gte, in, nin</p><p class='sort'>Sortable: true</p>
		 * Required
		 * Minimum: 1
		 * Maximum: 999999999
		 */
		number: FormControl<number | null | undefined>,

		/** The object version, required for PUT requests.<p class='filter'>Filterable: not filterable</p><p class='sort'>Sortable: false</p> */
		objectVersion: FormControl<string | null | undefined>,
	}
	export function CreateProjectEmployeeGroupFormGroup() {
		return new FormGroup<ProjectEmployeeGroupFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(100)]),
			number: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(1), Validators.max(999999999)]),
			objectVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Array of objects along with a cursor. Max number in the array returned is 1000 */
	export interface ProjectEmployeeGroupCursorResults {

		/** Use this continuation cursor in a request back to continue the list. In case there are no more items to retrieve, the cursor is not returned at all.<p class='filter'>Read-only: true</p><p class='filter'>Filterable: not filterable</p><p class='sort'>Sortable: false</p> */
		cursor?: string | null;

		/** Max number of items returned is 1000.<p class='filter'>Filterable: not filterable</p><p class='sort'>Sortable: false</p> */
		items?: Array<ProjectEmployeeGroup>;
	}

	/** Array of objects along with a cursor. Max number in the array returned is 1000 */
	export interface ProjectEmployeeGroupCursorResultsFormProperties {

		/** Use this continuation cursor in a request back to continue the list. In case there are no more items to retrieve, the cursor is not returned at all.<p class='filter'>Read-only: true</p><p class='filter'>Filterable: not filterable</p><p class='sort'>Sortable: false</p> */
		cursor: FormControl<string | null | undefined>,
	}
	export function CreateProjectEmployeeGroupCursorResultsFormGroup() {
		return new FormGroup<ProjectEmployeeGroupCursorResultsFormProperties>({
			cursor: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ProjectGroup {

		/**
		 * The account number to register costs for closed projects.
		 * If includeCostPriceInFinance is set to true, this property is required.
		 * Otherwise, it cannot be provided.
		 * Only accessible accounts (not barred) with accountType=="status" or "profitAndLoss" are allowed.<p class='filter'>Filterable: eq, ne, lt, lte, gt, gte, in, nin</p><p class='sort'>Sortable: false</p>
		 */
		costAccountClosed?: number | null;

		/**
		 * The account number to register costs for ongoing projects.
		 * If includeCostPriceInFinance is set to true, this property is required.
		 * Otherwise, it cannot be provided.
		 * Only accessible accounts (not barred) with accountType=="status" or "profitAndLoss" are allowed.<p class='filter'>Filterable: eq, ne, lt, lte, gt, gte, in, nin</p><p class='sort'>Sortable: false</p>
		 */
		costAccountOngoing?: number | null;

		/**
		 * The type of account for costs for ongoing projects:
		 * - 0: Debit
		 * - 1: Credit
		 * If includeCostPriceInFinance is set to true, this property is required.
		 * Otherwise, it cannot be provided.<p class='filter'>Filterable: not filterable</p><p class='sort'>Sortable: false</p>
		 */
		costAccountOngoingType?: OngoingAccountType;

		/**
		 * The contra account number to register costs for ongoing projects.
		 * If includeCostPriceInFinance is set to true, this property is required.
		 * Otherwise, it cannot be provided.
		 * Only accessible accounts (not barred) with accountType=="status" or "profitAndLoss" are allowed.<p class='filter'>Filterable: eq, ne, lt, lte, gt, gte, in, nin</p><p class='sort'>Sortable: false</p>
		 */
		costContraAccountOngoing?: number | null;

		/** If set to true, project costs will be included in accounting.<p class='filter'>Filterable: eq, ne, lt, lte, gt, gte</p><p class='sort'>Sortable: false</p> */
		includeCostPriceInFinance?: boolean | null;

		/** If set to true, project revenue will be included in accounting.<p class='filter'>Filterable: eq, ne, lt, lte, gt, gte</p><p class='sort'>Sortable: false</p> */
		includeSalesPriceInFinance?: boolean | null;

		/**
		 * The project group name.<p class='filter'>Filterable: eq, ne, lt, lte, gt, gte, in, nin, like</p><p class='sort'>Sortable: false</p>
		 * Required
		 * Max length: 100
		 * Min length: 0
		 */
		name: string;

		/** The unique number of the project group.<p class='filter'>Filterable: eq, ne, lt, lte, gt, gte, in, nin</p><p class='sort'>Sortable: true</p> */
		number?: number | null;

		/** The object version, required for PUT requests.<p class='filter'>Filterable: not filterable</p><p class='sort'>Sortable: false</p> */
		objectVersion?: string | null;

		/**
		 * The account number to register revenue for closed projects.
		 * If includeSalesPriceInFinance is set to true, this property is required.
		 * Otherwise, it cannot be provided.
		 * Only accessible accounts (not barred) with accountType=="status" or "profitAndLoss" are allowed.<p class='filter'>Filterable: eq, ne, lt, lte, gt, gte, in, nin</p><p class='sort'>Sortable: false</p>
		 */
		salesAccountClosed?: number | null;

		/**
		 * The account number to register revenue for ongoing projects.
		 * If includeSalesPriceInFinance is set to true, this property is required.
		 * Otherwise, it cannot be provided.
		 * Only accessible accounts (not barred) with accountType=="status" or "profitAndLoss" are allowed.<p class='filter'>Filterable: eq, ne, lt, lte, gt, gte, in, nin</p><p class='sort'>Sortable: false</p>
		 */
		salesAccountOngoing?: number | null;

		/**
		 * The type of account for revenue from ongoing projects:
		 * - 0: Debit
		 * - 1: Credit
		 * If includeSalesPriceInFinance is set to true, this property is required.
		 * Otherwise, it cannot be provided.<p class='filter'>Filterable: not filterable</p><p class='sort'>Sortable: false</p>
		 */
		salesAccountOngoingType?: OngoingAccountType;

		/**
		 * The contra account number to register revenue for ongoing projects.
		 * If includeSalesPriceInFinance is set to true, this property is required.
		 * Otherwise, it cannot be provided.
		 * Only accessible accounts (not barred) with accountType=="status" or "profitAndLoss" are allowed.<p class='filter'>Filterable: eq, ne, lt, lte, gt, gte, in, nin</p><p class='sort'>Sortable: false</p>
		 */
		salesContraAccountOngoing?: number | null;

		/**
		 * Project group types:
		 * - 1: Internal
		 * - 2: External Invoiceable
		 * - 3: External Non Invoicable<p class='filter'>Filterable: eq, ne</p><p class='sort'>Sortable: false</p>
		 * Required
		 */
		type: ProjectGroupType;
	}
	export interface ProjectGroupFormProperties {

		/**
		 * The account number to register costs for closed projects.
		 * If includeCostPriceInFinance is set to true, this property is required.
		 * Otherwise, it cannot be provided.
		 * Only accessible accounts (not barred) with accountType=="status" or "profitAndLoss" are allowed.<p class='filter'>Filterable: eq, ne, lt, lte, gt, gte, in, nin</p><p class='sort'>Sortable: false</p>
		 */
		costAccountClosed: FormControl<number | null | undefined>,

		/**
		 * The account number to register costs for ongoing projects.
		 * If includeCostPriceInFinance is set to true, this property is required.
		 * Otherwise, it cannot be provided.
		 * Only accessible accounts (not barred) with accountType=="status" or "profitAndLoss" are allowed.<p class='filter'>Filterable: eq, ne, lt, lte, gt, gte, in, nin</p><p class='sort'>Sortable: false</p>
		 */
		costAccountOngoing: FormControl<number | null | undefined>,

		/**
		 * The type of account for costs for ongoing projects:
		 * - 0: Debit
		 * - 1: Credit
		 * If includeCostPriceInFinance is set to true, this property is required.
		 * Otherwise, it cannot be provided.<p class='filter'>Filterable: not filterable</p><p class='sort'>Sortable: false</p>
		 */
		costAccountOngoingType: FormControl<OngoingAccountType | null | undefined>,

		/**
		 * The contra account number to register costs for ongoing projects.
		 * If includeCostPriceInFinance is set to true, this property is required.
		 * Otherwise, it cannot be provided.
		 * Only accessible accounts (not barred) with accountType=="status" or "profitAndLoss" are allowed.<p class='filter'>Filterable: eq, ne, lt, lte, gt, gte, in, nin</p><p class='sort'>Sortable: false</p>
		 */
		costContraAccountOngoing: FormControl<number | null | undefined>,

		/** If set to true, project costs will be included in accounting.<p class='filter'>Filterable: eq, ne, lt, lte, gt, gte</p><p class='sort'>Sortable: false</p> */
		includeCostPriceInFinance: FormControl<boolean | null | undefined>,

		/** If set to true, project revenue will be included in accounting.<p class='filter'>Filterable: eq, ne, lt, lte, gt, gte</p><p class='sort'>Sortable: false</p> */
		includeSalesPriceInFinance: FormControl<boolean | null | undefined>,

		/**
		 * The project group name.<p class='filter'>Filterable: eq, ne, lt, lte, gt, gte, in, nin, like</p><p class='sort'>Sortable: false</p>
		 * Required
		 * Max length: 100
		 * Min length: 0
		 */
		name: FormControl<string | null | undefined>,

		/** The unique number of the project group.<p class='filter'>Filterable: eq, ne, lt, lte, gt, gte, in, nin</p><p class='sort'>Sortable: true</p> */
		number: FormControl<number | null | undefined>,

		/** The object version, required for PUT requests.<p class='filter'>Filterable: not filterable</p><p class='sort'>Sortable: false</p> */
		objectVersion: FormControl<string | null | undefined>,

		/**
		 * The account number to register revenue for closed projects.
		 * If includeSalesPriceInFinance is set to true, this property is required.
		 * Otherwise, it cannot be provided.
		 * Only accessible accounts (not barred) with accountType=="status" or "profitAndLoss" are allowed.<p class='filter'>Filterable: eq, ne, lt, lte, gt, gte, in, nin</p><p class='sort'>Sortable: false</p>
		 */
		salesAccountClosed: FormControl<number | null | undefined>,

		/**
		 * The account number to register revenue for ongoing projects.
		 * If includeSalesPriceInFinance is set to true, this property is required.
		 * Otherwise, it cannot be provided.
		 * Only accessible accounts (not barred) with accountType=="status" or "profitAndLoss" are allowed.<p class='filter'>Filterable: eq, ne, lt, lte, gt, gte, in, nin</p><p class='sort'>Sortable: false</p>
		 */
		salesAccountOngoing: FormControl<number | null | undefined>,

		/**
		 * The type of account for revenue from ongoing projects:
		 * - 0: Debit
		 * - 1: Credit
		 * If includeSalesPriceInFinance is set to true, this property is required.
		 * Otherwise, it cannot be provided.<p class='filter'>Filterable: not filterable</p><p class='sort'>Sortable: false</p>
		 */
		salesAccountOngoingType: FormControl<OngoingAccountType | null | undefined>,

		/**
		 * The contra account number to register revenue for ongoing projects.
		 * If includeSalesPriceInFinance is set to true, this property is required.
		 * Otherwise, it cannot be provided.
		 * Only accessible accounts (not barred) with accountType=="status" or "profitAndLoss" are allowed.<p class='filter'>Filterable: eq, ne, lt, lte, gt, gte, in, nin</p><p class='sort'>Sortable: false</p>
		 */
		salesContraAccountOngoing: FormControl<number | null | undefined>,

		/**
		 * Project group types:
		 * - 1: Internal
		 * - 2: External Invoiceable
		 * - 3: External Non Invoicable<p class='filter'>Filterable: eq, ne</p><p class='sort'>Sortable: false</p>
		 * Required
		 */
		type: FormControl<ProjectGroupType | null | undefined>,
	}
	export function CreateProjectGroupFormGroup() {
		return new FormGroup<ProjectGroupFormProperties>({
			costAccountClosed: new FormControl<number | null | undefined>(undefined),
			costAccountOngoing: new FormControl<number | null | undefined>(undefined),
			costAccountOngoingType: new FormControl<OngoingAccountType | null | undefined>(undefined),
			costContraAccountOngoing: new FormControl<number | null | undefined>(undefined),
			includeCostPriceInFinance: new FormControl<boolean | null | undefined>(undefined),
			includeSalesPriceInFinance: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(100)]),
			number: new FormControl<number | null | undefined>(undefined),
			objectVersion: new FormControl<string | null | undefined>(undefined),
			salesAccountClosed: new FormControl<number | null | undefined>(undefined),
			salesAccountOngoing: new FormControl<number | null | undefined>(undefined),
			salesAccountOngoingType: new FormControl<OngoingAccountType | null | undefined>(undefined),
			salesContraAccountOngoing: new FormControl<number | null | undefined>(undefined),
			type: new FormControl<ProjectGroupType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ProjectGroupType { _1 = 0, _2 = 1, _3 = 2 }


	/** Array of objects along with a cursor. Max number in the array returned is 1000 */
	export interface ProjectGroupCursorResults {

		/** Use this continuation cursor in a request back to continue the list. In case there are no more items to retrieve, the cursor is not returned at all.<p class='filter'>Read-only: true</p><p class='filter'>Filterable: not filterable</p><p class='sort'>Sortable: false</p> */
		cursor?: string | null;

		/** Max number of items returned is 1000.<p class='filter'>Filterable: not filterable</p><p class='sort'>Sortable: false</p> */
		items?: Array<ProjectGroup>;
	}

	/** Array of objects along with a cursor. Max number in the array returned is 1000 */
	export interface ProjectGroupCursorResultsFormProperties {

		/** Use this continuation cursor in a request back to continue the list. In case there are no more items to retrieve, the cursor is not returned at all.<p class='filter'>Read-only: true</p><p class='filter'>Filterable: not filterable</p><p class='sort'>Sortable: false</p> */
		cursor: FormControl<string | null | undefined>,
	}
	export function CreateProjectGroupCursorResultsFormGroup() {
		return new FormGroup<ProjectGroupCursorResultsFormProperties>({
			cursor: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ProjectStatus {

		/** Name of the project status.<p class='filter'>Filterable: eq, ne, lt, lte, gt, gte, in, nin, like</p><p class='sort'>Sortable: false</p> */
		name?: string | null;

		/** The unique number of the project status.<p class='filter'>Filterable: eq, ne, lt, lte, gt, gte, in, nin</p><p class='sort'>Sortable: true</p> */
		number?: number | null;

		/** The object version, required for PUT requests.<p class='filter'>Filterable: not filterable</p><p class='sort'>Sortable: false</p> */
		objectVersion?: string | null;

		/** Defines the priority of the project status<p class='filter'>Filterable: eq, ne, lt, lte, gt, gte, in, nin</p><p class='sort'>Sortable: false</p> */
		priority?: number | null;

		/**
		 * Project status types:
		 * - 1: Quote sent
		 * - 2: Realised<p class='filter'>Filterable: eq, ne</p><p class='sort'>Sortable: false</p>
		 */
		type?: ProjectStatusType;
	}
	export interface ProjectStatusFormProperties {

		/** Name of the project status.<p class='filter'>Filterable: eq, ne, lt, lte, gt, gte, in, nin, like</p><p class='sort'>Sortable: false</p> */
		name: FormControl<string | null | undefined>,

		/** The unique number of the project status.<p class='filter'>Filterable: eq, ne, lt, lte, gt, gte, in, nin</p><p class='sort'>Sortable: true</p> */
		number: FormControl<number | null | undefined>,

		/** The object version, required for PUT requests.<p class='filter'>Filterable: not filterable</p><p class='sort'>Sortable: false</p> */
		objectVersion: FormControl<string | null | undefined>,

		/** Defines the priority of the project status<p class='filter'>Filterable: eq, ne, lt, lte, gt, gte, in, nin</p><p class='sort'>Sortable: false</p> */
		priority: FormControl<number | null | undefined>,

		/**
		 * Project status types:
		 * - 1: Quote sent
		 * - 2: Realised<p class='filter'>Filterable: eq, ne</p><p class='sort'>Sortable: false</p>
		 */
		type: FormControl<ProjectStatusType | null | undefined>,
	}
	export function CreateProjectStatusFormGroup() {
		return new FormGroup<ProjectStatusFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			number: new FormControl<number | null | undefined>(undefined),
			objectVersion: new FormControl<string | null | undefined>(undefined),
			priority: new FormControl<number | null | undefined>(undefined),
			type: new FormControl<ProjectStatusType | null | undefined>(undefined),
		});

	}

	export enum ProjectStatusType { _1 = 0, _2 = 1 }


	/** Array of objects along with a cursor. Max number in the array returned is 1000 */
	export interface ProjectStatusCursorResults {

		/** Use this continuation cursor in a request back to continue the list. In case there are no more items to retrieve, the cursor is not returned at all.<p class='filter'>Read-only: true</p><p class='filter'>Filterable: not filterable</p><p class='sort'>Sortable: false</p> */
		cursor?: string | null;

		/** Max number of items returned is 1000.<p class='filter'>Filterable: not filterable</p><p class='sort'>Sortable: false</p> */
		items?: Array<ProjectStatus>;
	}

	/** Array of objects along with a cursor. Max number in the array returned is 1000 */
	export interface ProjectStatusCursorResultsFormProperties {

		/** Use this continuation cursor in a request back to continue the list. In case there are no more items to retrieve, the cursor is not returned at all.<p class='filter'>Read-only: true</p><p class='filter'>Filterable: not filterable</p><p class='sort'>Sortable: false</p> */
		cursor: FormControl<string | null | undefined>,
	}
	export function CreateProjectStatusCursorResultsFormGroup() {
		return new FormGroup<ProjectStatusCursorResultsFormProperties>({
			cursor: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TimeEntry {

		/**
		 * The activity identifier of time entry.<p class='filter'>Filterable: eq, ne, lt, lte, gt, gte, in, nin</p><p class='sort'>Sortable: false</p>
		 * Required
		 */
		activityNumber: number;

		/**
		 * The date of time entry.<p class='filter'>Filterable: eq, ne, lt, lte, gt, gte</p><p class='sort'>Sortable: false</p>
		 * Required
		 */
		date: Date;

		/**
		 * The employee identifier of time entry.<p class='filter'>Filterable: eq, ne, lt, lte, gt, gte, in, nin</p><p class='sort'>Sortable: false</p>
		 * Required
		 */
		employeeNumber: number;

		/** Bool value specifying if the time entry was approved. If time entry was approved, it can not be updated anymore.<p class='filter'>Read-only: true</p><p class='filter'>Filterable: eq, ne, lt, lte, gt, gte</p><p class='sort'>Sortable: false</p> */
		isApproved?: boolean | null;

		/** Bool value specifying if the time entry was reconciled.<p class='filter'>Read-only: true</p><p class='filter'>Filterable: eq, ne, lt, lte, gt, gte</p><p class='sort'>Sortable: false</p> */
		isReconciled?: boolean | null;

		/** The time entry last updated date.<p class='filter'>Read-only: true</p><p class='filter'>Filterable: eq, ne, lt, lte, gt, gte</p><p class='sort'>Sortable: false</p> */
		lastUpdated?: Date | null;

		/** The time entry identifier.<p class='filter'>Filterable: eq, ne, lt, lte, gt, gte, in, nin</p><p class='sort'>Sortable: true</p> */
		number?: number | null;

		/** Number of hours of time entry.<p class='filter'>Filterable: eq, ne, lt, lte, gt, gte, in, nin</p><p class='sort'>Sortable: false</p> */
		numberOfHours?: number | null;

		/** The object version, required for PUT requests.<p class='filter'>Filterable: not filterable</p><p class='sort'>Sortable: false</p> */
		objectVersion?: string | null;

		/**
		 * The project identifier of time entry.<p class='filter'>Filterable: eq, ne, lt, lte, gt, gte, in, nin</p><p class='sort'>Sortable: false</p>
		 * Required
		 */
		projectNumber: number;

		/** Text description of time entry.<p class='filter'>Filterable: eq, ne, lt, lte, gt, gte, in, nin, like</p><p class='sort'>Sortable: false</p> */
		text?: string | null;
	}
	export interface TimeEntryFormProperties {

		/**
		 * The activity identifier of time entry.<p class='filter'>Filterable: eq, ne, lt, lte, gt, gte, in, nin</p><p class='sort'>Sortable: false</p>
		 * Required
		 */
		activityNumber: FormControl<number | null | undefined>,

		/**
		 * The date of time entry.<p class='filter'>Filterable: eq, ne, lt, lte, gt, gte</p><p class='sort'>Sortable: false</p>
		 * Required
		 */
		date: FormControl<Date | null | undefined>,

		/**
		 * The employee identifier of time entry.<p class='filter'>Filterable: eq, ne, lt, lte, gt, gte, in, nin</p><p class='sort'>Sortable: false</p>
		 * Required
		 */
		employeeNumber: FormControl<number | null | undefined>,

		/** Bool value specifying if the time entry was approved. If time entry was approved, it can not be updated anymore.<p class='filter'>Read-only: true</p><p class='filter'>Filterable: eq, ne, lt, lte, gt, gte</p><p class='sort'>Sortable: false</p> */
		isApproved: FormControl<boolean | null | undefined>,

		/** Bool value specifying if the time entry was reconciled.<p class='filter'>Read-only: true</p><p class='filter'>Filterable: eq, ne, lt, lte, gt, gte</p><p class='sort'>Sortable: false</p> */
		isReconciled: FormControl<boolean | null | undefined>,

		/** The time entry last updated date.<p class='filter'>Read-only: true</p><p class='filter'>Filterable: eq, ne, lt, lte, gt, gte</p><p class='sort'>Sortable: false</p> */
		lastUpdated: FormControl<Date | null | undefined>,

		/** The time entry identifier.<p class='filter'>Filterable: eq, ne, lt, lte, gt, gte, in, nin</p><p class='sort'>Sortable: true</p> */
		number: FormControl<number | null | undefined>,

		/** Number of hours of time entry.<p class='filter'>Filterable: eq, ne, lt, lte, gt, gte, in, nin</p><p class='sort'>Sortable: false</p> */
		numberOfHours: FormControl<number | null | undefined>,

		/** The object version, required for PUT requests.<p class='filter'>Filterable: not filterable</p><p class='sort'>Sortable: false</p> */
		objectVersion: FormControl<string | null | undefined>,

		/**
		 * The project identifier of time entry.<p class='filter'>Filterable: eq, ne, lt, lte, gt, gte, in, nin</p><p class='sort'>Sortable: false</p>
		 * Required
		 */
		projectNumber: FormControl<number | null | undefined>,

		/** Text description of time entry.<p class='filter'>Filterable: eq, ne, lt, lte, gt, gte, in, nin, like</p><p class='sort'>Sortable: false</p> */
		text: FormControl<string | null | undefined>,
	}
	export function CreateTimeEntryFormGroup() {
		return new FormGroup<TimeEntryFormProperties>({
			activityNumber: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			date: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			employeeNumber: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			isApproved: new FormControl<boolean | null | undefined>(undefined),
			isReconciled: new FormControl<boolean | null | undefined>(undefined),
			lastUpdated: new FormControl<Date | null | undefined>(undefined),
			number: new FormControl<number | null | undefined>(undefined),
			numberOfHours: new FormControl<number | null | undefined>(undefined),
			objectVersion: new FormControl<string | null | undefined>(undefined),
			projectNumber: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			text: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Array of objects along with a cursor. Max number in the array returned is 1000 */
	export interface TimeEntryCursorResults {

		/** Use this continuation cursor in a request back to continue the list. In case there are no more items to retrieve, the cursor is not returned at all.<p class='filter'>Read-only: true</p><p class='filter'>Filterable: not filterable</p><p class='sort'>Sortable: false</p> */
		cursor?: string | null;

		/** Max number of items returned is 1000.<p class='filter'>Filterable: not filterable</p><p class='sort'>Sortable: false</p> */
		items?: Array<TimeEntry>;
	}

	/** Array of objects along with a cursor. Max number in the array returned is 1000 */
	export interface TimeEntryCursorResultsFormProperties {

		/** Use this continuation cursor in a request back to continue the list. In case there are no more items to retrieve, the cursor is not returned at all.<p class='filter'>Read-only: true</p><p class='filter'>Filterable: not filterable</p><p class='sort'>Sortable: false</p> */
		cursor: FormControl<string | null | undefined>,
	}
	export function CreateTimeEntryCursorResultsFormGroup() {
		return new FormGroup<TimeEntryCursorResultsFormProperties>({
			cursor: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TimeEntryNumbersCollection {

		/**
		 * The time entries numbers.<p class='filter'>Filterable: not filterable</p><p class='sort'>Sortable: false</p>
		 * Required
		 */
		numbers: Array<number>;
	}
	export interface TimeEntryNumbersCollectionFormProperties {
	}
	export function CreateTimeEntryNumbersCollectionFormGroup() {
		return new FormGroup<TimeEntryNumbersCollectionFormProperties>({
		});

	}

	export interface TimeEntryPrices {

		/** The time entry cost price, calculated based on the activity cost price or on the employee cost price when no activity price is provided.<p class='filter'>Read-only: true</p><p class='filter'>Filterable: not filterable</p><p class='sort'>Sortable: false</p> */
		costPrice?: number | null;

		/** The time entry identifier.<p class='filter'>Filterable: eq, ne, lt, lte, gt, gte, in, nin</p><p class='sort'>Sortable: true</p> */
		number?: number | null;

		/** The time entry sales price, calculated based on the activity sales price or on the employee sales price when no activity price is provided.<p class='filter'>Read-only: true</p><p class='filter'>Filterable: not filterable</p><p class='sort'>Sortable: false</p> */
		salesPrice?: number | null;
	}
	export interface TimeEntryPricesFormProperties {

		/** The time entry cost price, calculated based on the activity cost price or on the employee cost price when no activity price is provided.<p class='filter'>Read-only: true</p><p class='filter'>Filterable: not filterable</p><p class='sort'>Sortable: false</p> */
		costPrice: FormControl<number | null | undefined>,

		/** The time entry identifier.<p class='filter'>Filterable: eq, ne, lt, lte, gt, gte, in, nin</p><p class='sort'>Sortable: true</p> */
		number: FormControl<number | null | undefined>,

		/** The time entry sales price, calculated based on the activity sales price or on the employee sales price when no activity price is provided.<p class='filter'>Read-only: true</p><p class='filter'>Filterable: not filterable</p><p class='sort'>Sortable: false</p> */
		salesPrice: FormControl<number | null | undefined>,
	}
	export function CreateTimeEntryPricesFormGroup() {
		return new FormGroup<TimeEntryPricesFormProperties>({
			costPrice: new FormControl<number | null | undefined>(undefined),
			number: new FormControl<number | null | undefined>(undefined),
			salesPrice: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Array of objects along with a cursor. Max number in the array returned is 1000 */
	export interface TimeEntryPricesCursorResults {

		/** Use this continuation cursor in a request back to continue the list. In case there are no more items to retrieve, the cursor is not returned at all.<p class='filter'>Read-only: true</p><p class='filter'>Filterable: not filterable</p><p class='sort'>Sortable: false</p> */
		cursor?: string | null;

		/** Max number of items returned is 1000.<p class='filter'>Filterable: not filterable</p><p class='sort'>Sortable: false</p> */
		items?: Array<TimeEntryPrices>;
	}

	/** Array of objects along with a cursor. Max number in the array returned is 1000 */
	export interface TimeEntryPricesCursorResultsFormProperties {

		/** Use this continuation cursor in a request back to continue the list. In case there are no more items to retrieve, the cursor is not returned at all.<p class='filter'>Read-only: true</p><p class='filter'>Filterable: not filterable</p><p class='sort'>Sortable: false</p> */
		cursor: FormControl<string | null | undefined>,
	}
	export function CreateTimeEntryPricesCursorResultsFormGroup() {
		return new FormGroup<TimeEntryPricesCursorResultsFormProperties>({
			cursor: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Retrieve all Activities
		 * Use this endpoint to retrieve all Activities in bulk.  Max number of items returned in a single call is 1000. Use the continuation cursor parameter to set the continuation cursor for retrieval of next set of data. [pagination instructions](#section/Retrieving-data/Pagination)
		 * Get activities
		 * @return {ActivityCursorResults} Success
		 */
		GetAllActivities(Cursor: string | null | undefined, Filter: string | null | undefined): Observable<ActivityCursorResults> {
			return this.http.get<ActivityCursorResults>(this.baseUri + 'activities?Cursor=' + (Cursor == null ? '' : encodeURIComponent(Cursor)) + '&Filter=' + (Filter == null ? '' : encodeURIComponent(Filter)), {});
		}

		/**
		 * Create a single Activity
		 * Use this endpoint to create a single Activity.
		 * Post activities
		 * @return {void} 
		 */
		CreateActivity(requestBody: Activity): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'activities', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Update a single Activity
		 * Use this endpoint to update a single Activity.
		 * Put activities
		 * @return {void} 
		 */
		UpdateActivity(requestBody: Activity): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'activities', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieve allowed activities
		 * Use this endpoint to get all the activities that the employee is allowed to register an entry on for a given project. Potential restrictions of registration are based on recording rules in the UI, which cannot be modified through the API. Add the employee number and project to your query parameter to obtain the allowed activities for registrations.
		 * Get activities/allowed
		 * @param {number} employeeNumber The employee number.
		 * @param {number} projectNumber The project number.
		 * @return {Array<Activity>} List of allowed activities.
		 */
		GetAllowedActivities(employeeNumber: number, projectNumber: number): Observable<Array<Activity>> {
			return this.http.get<Array<Activity>>(this.baseUri + 'activities/allowed?employeeNumber=' + employeeNumber + '&projectNumber=' + projectNumber, {});
		}

		/**
		 * Retrieve the number of Activities
		 * Call this endpoint to get the number of Activities. You can use a filtering as well.
		 * Get activities/count
		 * @return {number} Success
		 */
		GetNumberOfActivities(Filter: string | null | undefined): Observable<number> {
			return this.http.get<number>(this.baseUri + 'activities/count?Filter=' + (Filter == null ? '' : encodeURIComponent(Filter)), {});
		}

		/**
		 * Retrieve a page of Activities
		 * Use this endpoint to load a page of Activities.
		 * Get activities/paged
		 * @return {Array<Activity>} Success
		 */
		GetPageOfActivities(Filter: string | null | undefined, Sort: string | null | undefined, PageSize: number | null | undefined, SkipPages: number | null | undefined): Observable<Array<Activity>> {
			return this.http.get<Array<Activity>>(this.baseUri + 'activities/paged?Filter=' + (Filter == null ? '' : encodeURIComponent(Filter)) + '&Sort=' + (Sort == null ? '' : encodeURIComponent(Sort)) + '&PageSize=' + PageSize + '&SkipPages=' + SkipPages, {});
		}

		/**
		 * Retrieve single Activity
		 * Use this endpoint to load a single Activity by id/number.
		 * Get activities/{number}
		 * @return {Activity} Success
		 */
		GetActivityById(number: number): Observable<Activity> {
			return this.http.get<Activity>(this.baseUri + 'activities/' + number, {});
		}

		/**
		 * Retrieve all Activity Groups
		 * Use this endpoint to retrieve all Activity Groups in bulk.  Max number of items returned in a single call is 1000. Use the continuation cursor parameter to set the continuation cursor for retrieval of next set of data. [pagination instructions](#section/Retrieving-data/Pagination)
		 * Get activitygroups
		 * @return {ActivityGroupCursorResults} Success
		 */
		GetAllActivityGroups(Cursor: string | null | undefined, Filter: string | null | undefined): Observable<ActivityGroupCursorResults> {
			return this.http.get<ActivityGroupCursorResults>(this.baseUri + 'activitygroups?Cursor=' + (Cursor == null ? '' : encodeURIComponent(Cursor)) + '&Filter=' + (Filter == null ? '' : encodeURIComponent(Filter)), {});
		}

		/**
		 * Create a single Activity Group
		 * Use this endpoint to create a single Activity Group.
		 * Post activitygroups
		 * @return {void} 
		 */
		CreateActivityGroup(requestBody: ActivityGroup): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'activitygroups', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieve the number of Activity Groups
		 * Call this endpoint to get the number of Activity Groups. You can use a filtering as well.
		 * Get activitygroups/count
		 * @return {number} Success
		 */
		GetNumberOfActivityGroups(Filter: string | null | undefined): Observable<number> {
			return this.http.get<number>(this.baseUri + 'activitygroups/count?Filter=' + (Filter == null ? '' : encodeURIComponent(Filter)), {});
		}

		/**
		 * Retrieve a page of Activity Groups
		 * Use this endpoint to load a page of Activity Groups.
		 * Get activitygroups/paged
		 * @return {Array<ActivityGroup>} Success
		 */
		GetPageOfActivityGroups(Filter: string | null | undefined, Sort: string | null | undefined, PageSize: number | null | undefined, SkipPages: number | null | undefined): Observable<Array<ActivityGroup>> {
			return this.http.get<Array<ActivityGroup>>(this.baseUri + 'activitygroups/paged?Filter=' + (Filter == null ? '' : encodeURIComponent(Filter)) + '&Sort=' + (Sort == null ? '' : encodeURIComponent(Sort)) + '&PageSize=' + PageSize + '&SkipPages=' + SkipPages, {});
		}

		/**
		 * Retrieve single Activity Group
		 * Use this endpoint to load a single Activity Group by id/number.
		 * Get activitygroups/{number}
		 * @return {ActivityGroup} Success
		 */
		GetActivityGroupById(number: number): Observable<ActivityGroup> {
			return this.http.get<ActivityGroup>(this.baseUri + 'activitygroups/' + number, {});
		}

		/**
		 * Retrieve all Cost Type Groups
		 * Use this endpoint to retrieve all Cost Type Groups in bulk.  Max number of items returned in a single call is 1000. Use the continuation cursor parameter to set the continuation cursor for retrieval of next set of data. [pagination instructions](#section/Retrieving-data/Pagination)
		 * Get costtypegroups
		 * @return {CostTypeGroupCursorResults} Success
		 */
		GetAllCostTypeGroups(Cursor: string | null | undefined, Filter: string | null | undefined): Observable<CostTypeGroupCursorResults> {
			return this.http.get<CostTypeGroupCursorResults>(this.baseUri + 'costtypegroups?Cursor=' + (Cursor == null ? '' : encodeURIComponent(Cursor)) + '&Filter=' + (Filter == null ? '' : encodeURIComponent(Filter)), {});
		}

		/**
		 * Retrieve the number of Cost Type Groups
		 * Call this endpoint to get the number of Cost Type Groups. You can use a filtering as well.
		 * Get costtypegroups/count
		 * @return {number} Success
		 */
		GetNumberOfCostTypeGroups(Filter: string | null | undefined): Observable<number> {
			return this.http.get<number>(this.baseUri + 'costtypegroups/count?Filter=' + (Filter == null ? '' : encodeURIComponent(Filter)), {});
		}

		/**
		 * Retrieve a page of Cost Type Groups
		 * Use this endpoint to load a page of Cost Type Groups.
		 * Get costtypegroups/paged
		 * @return {Array<CostTypeGroup>} Success
		 */
		GetPageOfCostTypeGroups(Filter: string | null | undefined, Sort: string | null | undefined, PageSize: number | null | undefined, SkipPages: number | null | undefined): Observable<Array<CostTypeGroup>> {
			return this.http.get<Array<CostTypeGroup>>(this.baseUri + 'costtypegroups/paged?Filter=' + (Filter == null ? '' : encodeURIComponent(Filter)) + '&Sort=' + (Sort == null ? '' : encodeURIComponent(Sort)) + '&PageSize=' + PageSize + '&SkipPages=' + SkipPages, {});
		}

		/**
		 * Retrieve single Cost Type Group
		 * Use this endpoint to load a single Cost Type Group by id/number.
		 * Get costtypegroups/{number}
		 * @return {CostTypeGroup} Success
		 */
		GetCostTypeGroupById(number: number): Observable<CostTypeGroup> {
			return this.http.get<CostTypeGroup>(this.baseUri + 'costtypegroups/' + number, {});
		}

		/**
		 * Retrieve all Cost Types
		 * Use this endpoint to retrieve all Cost Types in bulk.  Max number of items returned in a single call is 1000. Use the continuation cursor parameter to set the continuation cursor for retrieval of next set of data. [pagination instructions](#section/Retrieving-data/Pagination)
		 * Get costtypes
		 * @return {CostTypeCursorResults} Success
		 */
		GetAllCostTypes(Cursor: string | null | undefined, Filter: string | null | undefined): Observable<CostTypeCursorResults> {
			return this.http.get<CostTypeCursorResults>(this.baseUri + 'costtypes?Cursor=' + (Cursor == null ? '' : encodeURIComponent(Cursor)) + '&Filter=' + (Filter == null ? '' : encodeURIComponent(Filter)), {});
		}

		/**
		 * Retrieve the number of Cost Types
		 * Call this endpoint to get the number of Cost Types. You can use a filtering as well.
		 * Get costtypes/count
		 * @return {number} Success
		 */
		GetNumberOfCostTypes(Filter: string | null | undefined): Observable<number> {
			return this.http.get<number>(this.baseUri + 'costtypes/count?Filter=' + (Filter == null ? '' : encodeURIComponent(Filter)), {});
		}

		/**
		 * Retrieve a page of Cost Types
		 * Use this endpoint to load a page of Cost Types.
		 * Get costtypes/paged
		 * @return {Array<CostType>} Success
		 */
		GetPageOfCostTypes(Filter: string | null | undefined, Sort: string | null | undefined, PageSize: number | null | undefined, SkipPages: number | null | undefined): Observable<Array<CostType>> {
			return this.http.get<Array<CostType>>(this.baseUri + 'costtypes/paged?Filter=' + (Filter == null ? '' : encodeURIComponent(Filter)) + '&Sort=' + (Sort == null ? '' : encodeURIComponent(Sort)) + '&PageSize=' + PageSize + '&SkipPages=' + SkipPages, {});
		}

		/**
		 * Retrieve single Cost Type
		 * Use this endpoint to load a single Cost Type by id/number.
		 * Get costtypes/{number}
		 * @return {CostType} Success
		 */
		GetCostTypeById(number: number): Observable<CostType> {
			return this.http.get<CostType>(this.baseUri + 'costtypes/' + number, {});
		}

		/**
		 * Retrieve all Employee groups
		 * Use this endpoint to retrieve all Employee groups in bulk.  Max number of items returned in a single call is 1000. Use the continuation cursor parameter to set the continuation cursor for retrieval of next set of data. [pagination instructions](#section/Retrieving-data/Pagination)
		 * Get employeegroups
		 * @return {EmployeeGroupCursorResults} Success
		 */
		GetAllEmployeeGroups(Cursor: string | null | undefined, Filter: string | null | undefined): Observable<EmployeeGroupCursorResults> {
			return this.http.get<EmployeeGroupCursorResults>(this.baseUri + 'employeegroups?Cursor=' + (Cursor == null ? '' : encodeURIComponent(Cursor)) + '&Filter=' + (Filter == null ? '' : encodeURIComponent(Filter)), {});
		}

		/**
		 * Create a single Employee group
		 * Use this endpoint to create a single Employee group.
		 * Post employeegroups
		 * @return {void} 
		 */
		CreateEmployeeGroup(requestBody: EmployeeGroup): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'employeegroups', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Update a single Employee group
		 * Use this endpoint to update a single Employee group.
		 * Put employeegroups
		 * @return {void} 
		 */
		UpdateEmployeeGroup(requestBody: EmployeeGroup): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'employeegroups', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieve the number of Employee groups
		 * Call this endpoint to get the number of Employee groups. You can use a filtering as well.
		 * Get employeegroups/count
		 * @return {number} Success
		 */
		GetNumberOfEmployeeGroups(Filter: string | null | undefined): Observable<number> {
			return this.http.get<number>(this.baseUri + 'employeegroups/count?Filter=' + (Filter == null ? '' : encodeURIComponent(Filter)), {});
		}

		/**
		 * Retrieve a page of Employee groups
		 * Use this endpoint to load a page of Employee groups.
		 * Get employeegroups/paged
		 * @return {Array<EmployeeGroup>} Success
		 */
		GetPageOfEmployeeGroups(Filter: string | null | undefined, Sort: string | null | undefined, PageSize: number | null | undefined, SkipPages: number | null | undefined): Observable<Array<EmployeeGroup>> {
			return this.http.get<Array<EmployeeGroup>>(this.baseUri + 'employeegroups/paged?Filter=' + (Filter == null ? '' : encodeURIComponent(Filter)) + '&Sort=' + (Sort == null ? '' : encodeURIComponent(Sort)) + '&PageSize=' + PageSize + '&SkipPages=' + SkipPages, {});
		}

		/**
		 * Delete single Employee group
		 * Use this endpoint to delete a single Employee group by id/number.
		 * Delete employeegroups/{number}
		 * @return {void} 
		 */
		DeleteEmployeeGroupById(number: number): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'employeegroups/' + number, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieve single Employee group
		 * Use this endpoint to load a single Employee group by id/number.
		 * Get employeegroups/{number}
		 * @return {EmployeeGroup} Success
		 */
		GetEmployeeGroupById(number: number): Observable<EmployeeGroup> {
			return this.http.get<EmployeeGroup>(this.baseUri + 'employeegroups/' + number, {});
		}

		/**
		 * Retrieve all Employees
		 * Use this endpoint to retrieve all Employees in bulk.  Max number of items returned in a single call is 1000. Use the continuation cursor parameter to set the continuation cursor for retrieval of next set of data. [pagination instructions](#section/Retrieving-data/Pagination)
		 * Get employees
		 * @return {EmployeeCursorResults} Success
		 */
		GetAllEmployees(Cursor: string | null | undefined, Filter: string | null | undefined): Observable<EmployeeCursorResults> {
			return this.http.get<EmployeeCursorResults>(this.baseUri + 'employees?Cursor=' + (Cursor == null ? '' : encodeURIComponent(Cursor)) + '&Filter=' + (Filter == null ? '' : encodeURIComponent(Filter)), {});
		}

		/**
		 * Create a single Employee
		 * Use this endpoint to create a single Employee.
		 * Post employees
		 * @return {void} 
		 */
		CreateEmployee(requestBody: Employee): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'employees', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Update a single Employee
		 * Use this endpoint to update a single Employee.
		 * Put employees
		 * @return {void} 
		 */
		UpdateEmployee(requestBody: Employee): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'employees', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieve the number of Employees
		 * Call this endpoint to get the number of Employees. You can use a filtering as well.
		 * Get employees/count
		 * @return {number} Success
		 */
		GetNumberOfEmployees(Filter: string | null | undefined): Observable<number> {
			return this.http.get<number>(this.baseUri + 'employees/count?Filter=' + (Filter == null ? '' : encodeURIComponent(Filter)), {});
		}

		/**
		 * Retrieve a page of Employees
		 * Use this endpoint to load a page of Employees.
		 * Get employees/paged
		 * @return {Array<Employee>} Success
		 */
		GetPageOfEmployees(Filter: string | null | undefined, Sort: string | null | undefined, PageSize: number | null | undefined, SkipPages: number | null | undefined): Observable<Array<Employee>> {
			return this.http.get<Array<Employee>>(this.baseUri + 'employees/paged?Filter=' + (Filter == null ? '' : encodeURIComponent(Filter)) + '&Sort=' + (Sort == null ? '' : encodeURIComponent(Sort)) + '&PageSize=' + PageSize + '&SkipPages=' + SkipPages, {});
		}

		/**
		 * Delete single Employee
		 * Use this endpoint to delete a single Employee by id/number.
		 * Delete employees/{number}
		 * @return {void} 
		 */
		DeleteEmployeeById(number: number): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'employees/' + number, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieve single Employee
		 * Use this endpoint to load a single Employee by id/number.
		 * Get employees/{number}
		 * @return {Employee} Success
		 */
		GetEmployeeById(number: number): Observable<Employee> {
			return this.http.get<Employee>(this.baseUri + 'employees/' + number, {});
		}

		/**
		 * Retrieve all Mileage entry prices
		 * Use this endpoint to retrieve all Mileage entry prices in bulk.  Max number of items returned in a single call is 1000. Use the continuation cursor parameter to set the continuation cursor for retrieval of next set of data. [pagination instructions](#section/Retrieving-data/Pagination)
		 * Get mileageprices
		 * @return {MileagePricesCursorResults} Success
		 */
		GetAllMileageEntryPrices(Cursor: string | null | undefined, Filter: string | null | undefined): Observable<MileagePricesCursorResults> {
			return this.http.get<MileagePricesCursorResults>(this.baseUri + 'mileageprices?Cursor=' + (Cursor == null ? '' : encodeURIComponent(Cursor)) + '&Filter=' + (Filter == null ? '' : encodeURIComponent(Filter)), {});
		}

		/**
		 * Retrieve a page of Mileage entry prices
		 * Use this endpoint to load a page of Mileage entry prices.
		 * Get mileageprices/paged
		 * @return {Array<MileagePrices>} Success
		 */
		GetPageOfMileageEntryPrices(Filter: string | null | undefined, Sort: string | null | undefined, PageSize: number | null | undefined, SkipPages: number | null | undefined): Observable<Array<MileagePrices>> {
			return this.http.get<Array<MileagePrices>>(this.baseUri + 'mileageprices/paged?Filter=' + (Filter == null ? '' : encodeURIComponent(Filter)) + '&Sort=' + (Sort == null ? '' : encodeURIComponent(Sort)) + '&PageSize=' + PageSize + '&SkipPages=' + SkipPages, {});
		}

		/**
		 * Retrieve single Mileage entry prices
		 * Use this endpoint to load a single Mileage entry prices by id/number.
		 * Get mileageprices/{number}
		 * @return {MileagePrices} Success
		 */
		GetMileagePricesById(number: number): Observable<MileagePrices> {
			return this.http.get<MileagePrices>(this.baseUri + 'mileageprices/' + number, {});
		}

		/**
		 * Retrieve all Mileage entries
		 * Use this endpoint to retrieve all Mileage entries in bulk.  Max number of items returned in a single call is 1000. Use the continuation cursor parameter to set the continuation cursor for retrieval of next set of data. [pagination instructions](#section/Retrieving-data/Pagination)
		 * Get mileages
		 * @return {MileageCursorResults} Success
		 */
		GetAllMileageEntries(Cursor: string | null | undefined, Filter: string | null | undefined): Observable<MileageCursorResults> {
			return this.http.get<MileageCursorResults>(this.baseUri + 'mileages?Cursor=' + (Cursor == null ? '' : encodeURIComponent(Cursor)) + '&Filter=' + (Filter == null ? '' : encodeURIComponent(Filter)), {});
		}

		/**
		 * Create a single Mileage entry
		 * Use this endpoint to create a single Mileage entry.
		 * Post mileages
		 * @return {void} 
		 */
		CreateMileage(requestBody: Mileage): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'mileages', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Update a single Mileage entry
		 * Use this endpoint to update a single Mileage entry.
		 * Put mileages
		 * @return {void} 
		 */
		UpdateMileage(requestBody: Mileage): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'mileages', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Approve a list of Mileage entries
		 * Use this endpoint to approve a list of Mileage entries.
		 * Post mileages/approve
		 * @return {void} 
		 */
		ApproveMileageEntries(requestBody: MileageNumbersCollection): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'mileages/approve', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieve the number of Mileage entries
		 * Call this endpoint to get the number of Mileage entries. You can use a filtering as well.
		 * Get mileages/count
		 * @return {number} Success
		 */
		GetNumberOfMileageEntries(Filter: string | null | undefined): Observable<number> {
			return this.http.get<number>(this.baseUri + 'mileages/count?Filter=' + (Filter == null ? '' : encodeURIComponent(Filter)), {});
		}

		/**
		 * Retrieve a page of Mileage entries
		 * Use this endpoint to load a page of Mileage entries.
		 * Get mileages/paged
		 * @return {Array<Mileage>} Success
		 */
		GetPageOfMileageEntries(Filter: string | null | undefined, Sort: string | null | undefined, PageSize: number | null | undefined, SkipPages: number | null | undefined): Observable<Array<Mileage>> {
			return this.http.get<Array<Mileage>>(this.baseUri + 'mileages/paged?Filter=' + (Filter == null ? '' : encodeURIComponent(Filter)) + '&Sort=' + (Sort == null ? '' : encodeURIComponent(Sort)) + '&PageSize=' + PageSize + '&SkipPages=' + SkipPages, {});
		}

		/**
		 * Delete single Mileage entry
		 * Use this endpoint to delete a single Mileage entry by id/number.
		 * Delete mileages/{number}
		 * @return {void} 
		 */
		DeleteMileageById(number: number): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'mileages/' + number, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieve single Mileage entry
		 * Use this endpoint to load a single Mileage entry by id/number.
		 * Get mileages/{number}
		 * @return {Mileage} Success
		 */
		GetMileageById(number: number): Observable<Mileage> {
			return this.http.get<Mileage>(this.baseUri + 'mileages/' + number, {});
		}

		/**
		 * Retrieve all Project Activities
		 * Use this endpoint to retrieve all Project Activities in bulk.  Max number of items returned in a single call is 1000. Use the continuation cursor parameter to set the continuation cursor for retrieval of next set of data. [pagination instructions](#section/Retrieving-data/Pagination)
		 * Get project-activities
		 * @return {ProjectActivityCursorResults} Success
		 */
		GetAllProjectActivities(Cursor: string | null | undefined, Filter: string | null | undefined): Observable<ProjectActivityCursorResults> {
			return this.http.get<ProjectActivityCursorResults>(this.baseUri + 'project-activities?Cursor=' + (Cursor == null ? '' : encodeURIComponent(Cursor)) + '&Filter=' + (Filter == null ? '' : encodeURIComponent(Filter)), {});
		}

		/**
		 * Create a single Project Activity
		 * Use this endpoint to create a single Project Activity.
		 * Post project-activities
		 * @return {void} 
		 */
		CreateProjectActivity(requestBody: ProjectActivity): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'project-activities', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Update a single Project Activity
		 * Use this endpoint to update a single Project Activity.
		 * Put project-activities
		 * @return {void} 
		 */
		UpdateProjectActivity(requestBody: ProjectActivity): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'project-activities', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieve the number of Project Activities
		 * Call this endpoint to get the number of Project Activities. You can use a filtering as well.
		 * Get project-activities/count
		 * @return {number} Success
		 */
		GetNumberOfProjectActivities(Filter: string | null | undefined): Observable<number> {
			return this.http.get<number>(this.baseUri + 'project-activities/count?Filter=' + (Filter == null ? '' : encodeURIComponent(Filter)), {});
		}

		/**
		 * Retrieve a page of Project Activities
		 * Use this endpoint to load a page of Project Activities.
		 * Get project-activities/paged
		 * @return {Array<ProjectActivity>} Success
		 */
		GetPageOfProjectActivities(Filter: string | null | undefined, Sort: string | null | undefined, PageSize: number | null | undefined, SkipPages: number | null | undefined): Observable<Array<ProjectActivity>> {
			return this.http.get<Array<ProjectActivity>>(this.baseUri + 'project-activities/paged?Filter=' + (Filter == null ? '' : encodeURIComponent(Filter)) + '&Sort=' + (Sort == null ? '' : encodeURIComponent(Sort)) + '&PageSize=' + PageSize + '&SkipPages=' + SkipPages, {});
		}

		/**
		 * Delete single Project Activity
		 * Use this endpoint to delete a single Project Activity by id/number.
		 * Delete project-activities/{number}
		 * @return {void} 
		 */
		DeleteProjectActivityById(number: number): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'project-activities/' + number, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieve single Project Activity
		 * Use this endpoint to load a single Project Activity by id/number.
		 * Get project-activities/{number}
		 * @return {ProjectActivity} Success
		 */
		GetProjectActivityById(number: number): Observable<ProjectActivity> {
			return this.http.get<ProjectActivity>(this.baseUri + 'project-activities/' + number, {});
		}

		/**
		 * Retrieve all Project Customers
		 * Use this endpoint to retrieve all Project Customers in bulk.  Max number of items returned in a single call is 1000. Use the continuation cursor parameter to set the continuation cursor for retrieval of next set of data. [pagination instructions](#section/Retrieving-data/Pagination)
		 * Get project-customers
		 * @return {ProjectCustomerCursorResults} Success
		 */
		GetAllProjectCustomers(Cursor: string | null | undefined, Filter: string | null | undefined): Observable<ProjectCustomerCursorResults> {
			return this.http.get<ProjectCustomerCursorResults>(this.baseUri + 'project-customers?Cursor=' + (Cursor == null ? '' : encodeURIComponent(Cursor)) + '&Filter=' + (Filter == null ? '' : encodeURIComponent(Filter)), {});
		}

		/**
		 * Retrieve the number of Project Customers
		 * Call this endpoint to get the number of Project Customers. You can use a filtering as well.
		 * Get project-customers/count
		 * @return {number} Success
		 */
		GetNumberOfProjectCustomers(Filter: string | null | undefined): Observable<number> {
			return this.http.get<number>(this.baseUri + 'project-customers/count?Filter=' + (Filter == null ? '' : encodeURIComponent(Filter)), {});
		}

		/**
		 * Retrieve a page of Project Customers
		 * Use this endpoint to load a page of Project Customers.
		 * Get project-customers/paged
		 * @return {Array<ProjectCustomer>} Success
		 */
		GetPageOfProjectCustomers(Filter: string | null | undefined, Sort: string | null | undefined, PageSize: number | null | undefined, SkipPages: number | null | undefined): Observable<Array<ProjectCustomer>> {
			return this.http.get<Array<ProjectCustomer>>(this.baseUri + 'project-customers/paged?Filter=' + (Filter == null ? '' : encodeURIComponent(Filter)) + '&Sort=' + (Sort == null ? '' : encodeURIComponent(Sort)) + '&PageSize=' + PageSize + '&SkipPages=' + SkipPages, {});
		}

		/**
		 * Retrieve single Project Customer
		 * Use this endpoint to load a single Project Customer by id/number.
		 * Get project-customers/{number}
		 * @return {ProjectCustomer} Success
		 */
		GetProjectCustomerById(number: number): Observable<ProjectCustomer> {
			return this.http.get<ProjectCustomer>(this.baseUri + 'project-customers/' + number, {});
		}

		/**
		 * Retrieve all Project employee groups
		 * Use this endpoint to retrieve all Project employee groups in bulk.  Max number of items returned in a single call is 1000. Use the continuation cursor parameter to set the continuation cursor for retrieval of next set of data. [pagination instructions](#section/Retrieving-data/Pagination)
		 * Get project-employeegroups
		 * @return {ProjectEmployeeGroupCursorResults} Success
		 */
		GetAllProjectEmployeeGroups(Cursor: string | null | undefined, Filter: string | null | undefined): Observable<ProjectEmployeeGroupCursorResults> {
			return this.http.get<ProjectEmployeeGroupCursorResults>(this.baseUri + 'project-employeegroups?Cursor=' + (Cursor == null ? '' : encodeURIComponent(Cursor)) + '&Filter=' + (Filter == null ? '' : encodeURIComponent(Filter)), {});
		}

		/**
		 * Create a single Project employee group
		 * Use this endpoint to create a single Project employee group.
		 * Post project-employeegroups
		 * @return {void} 
		 */
		CreateProjectEmployeeGroup(requestBody: ProjectEmployeeGroup): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'project-employeegroups', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Update a single Project employee group
		 * Use this endpoint to update a single Project employee group.
		 * Put project-employeegroups
		 * @return {void} 
		 */
		UpdateProjectEmployeeGroup(requestBody: ProjectEmployeeGroup): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'project-employeegroups', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieve the number of Project employee groups
		 * Call this endpoint to get the number of Project employee groups. You can use a filtering as well.
		 * Get project-employeegroups/count
		 * @return {number} Success
		 */
		GetNumberOfProjectEmployeeGroups(Filter: string | null | undefined): Observable<number> {
			return this.http.get<number>(this.baseUri + 'project-employeegroups/count?Filter=' + (Filter == null ? '' : encodeURIComponent(Filter)), {});
		}

		/**
		 * Retrieve a page of Project employee groups
		 * Use this endpoint to load a page of Project employee groups.
		 * Get project-employeegroups/paged
		 * @return {Array<ProjectEmployeeGroup>} Success
		 */
		GetPageOfProjectEmployeeGroups(Filter: string | null | undefined, Sort: string | null | undefined, PageSize: number | null | undefined, SkipPages: number | null | undefined): Observable<Array<ProjectEmployeeGroup>> {
			return this.http.get<Array<ProjectEmployeeGroup>>(this.baseUri + 'project-employeegroups/paged?Filter=' + (Filter == null ? '' : encodeURIComponent(Filter)) + '&Sort=' + (Sort == null ? '' : encodeURIComponent(Sort)) + '&PageSize=' + PageSize + '&SkipPages=' + SkipPages, {});
		}

		/**
		 * Delete single Project employee group
		 * Use this endpoint to delete a single Project employee group by id/number.
		 * Delete project-employeegroups/{number}
		 * @return {void} 
		 */
		DeleteProjectEmployeeGroupById(number: number): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'project-employeegroups/' + number, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieve single Project employee group
		 * Use this endpoint to load a single Project employee group by id/number.
		 * Get project-employeegroups/{number}
		 * @return {ProjectEmployeeGroup} Success
		 */
		GetProjectEmployeeGroupById(number: number): Observable<ProjectEmployeeGroup> {
			return this.http.get<ProjectEmployeeGroup>(this.baseUri + 'project-employeegroups/' + number, {});
		}

		/**
		 * Retrieve all Project employees
		 * Use this endpoint to retrieve all Project employees in bulk.  Max number of items returned in a single call is 1000. Use the continuation cursor parameter to set the continuation cursor for retrieval of next set of data. [pagination instructions](#section/Retrieving-data/Pagination)
		 * Get project-employees
		 * @return {ProjectEmployeeCursorResults} Success
		 */
		GetAllProjectEmployees(Cursor: string | null | undefined, Filter: string | null | undefined): Observable<ProjectEmployeeCursorResults> {
			return this.http.get<ProjectEmployeeCursorResults>(this.baseUri + 'project-employees?Cursor=' + (Cursor == null ? '' : encodeURIComponent(Cursor)) + '&Filter=' + (Filter == null ? '' : encodeURIComponent(Filter)), {});
		}

		/**
		 * Create a single Project employee
		 * Use this endpoint to create a single Project employee.
		 * Post project-employees
		 * @return {void} 
		 */
		CreateProjectEmployee(requestBody: ProjectEmployee): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'project-employees', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Update a single Project employee
		 * Use this endpoint to update a single Project employee.
		 * Put project-employees
		 * @return {void} 
		 */
		UpdateProjectEmployee(requestBody: ProjectEmployee): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'project-employees', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieve the number of Project employees
		 * Call this endpoint to get the number of Project employees. You can use a filtering as well.
		 * Get project-employees/count
		 * @return {number} Success
		 */
		GetNumberOfProjectEmployees(Filter: string | null | undefined): Observable<number> {
			return this.http.get<number>(this.baseUri + 'project-employees/count?Filter=' + (Filter == null ? '' : encodeURIComponent(Filter)), {});
		}

		/**
		 * Retrieve a page of Project employees
		 * Use this endpoint to load a page of Project employees.
		 * Get project-employees/paged
		 * @return {Array<ProjectEmployee>} Success
		 */
		GetPageOfProjectEmployees(Filter: string | null | undefined, Sort: string | null | undefined, PageSize: number | null | undefined, SkipPages: number | null | undefined): Observable<Array<ProjectEmployee>> {
			return this.http.get<Array<ProjectEmployee>>(this.baseUri + 'project-employees/paged?Filter=' + (Filter == null ? '' : encodeURIComponent(Filter)) + '&Sort=' + (Sort == null ? '' : encodeURIComponent(Sort)) + '&PageSize=' + PageSize + '&SkipPages=' + SkipPages, {});
		}

		/**
		 * Delete single Project employee
		 * Use this endpoint to delete a single Project employee by id/number.
		 * Delete project-employees/{number}
		 * @return {void} 
		 */
		DeleteProjectEmployeeById(number: number): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'project-employees/' + number, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieve single Project employee
		 * Use this endpoint to load a single Project employee by id/number.
		 * Get project-employees/{number}
		 * @return {ProjectEmployee} Success
		 */
		GetProjectEmployeeById(number: number): Observable<ProjectEmployee> {
			return this.http.get<ProjectEmployee>(this.baseUri + 'project-employees/' + number, {});
		}

		/**
		 * Retrieve all Project Groups
		 * Use this endpoint to retrieve all Project Groups in bulk.  Max number of items returned in a single call is 1000. Use the continuation cursor parameter to set the continuation cursor for retrieval of next set of data. [pagination instructions](#section/Retrieving-data/Pagination)
		 * Get projectgroups
		 * @return {ProjectGroupCursorResults} Success
		 */
		GetAllProjectGroups(Cursor: string | null | undefined, Filter: string | null | undefined): Observable<ProjectGroupCursorResults> {
			return this.http.get<ProjectGroupCursorResults>(this.baseUri + 'projectgroups?Cursor=' + (Cursor == null ? '' : encodeURIComponent(Cursor)) + '&Filter=' + (Filter == null ? '' : encodeURIComponent(Filter)), {});
		}

		/**
		 * Create a single Project Group
		 * Use this endpoint to create a single Project Group.
		 * Post projectgroups
		 * @return {void} 
		 */
		CreateProjectGroup(requestBody: ProjectGroup): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'projectgroups', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieve the number of Project Groups
		 * Call this endpoint to get the number of Project Groups. You can use a filtering as well.
		 * Get projectgroups/count
		 * @return {number} Success
		 */
		GetNumberOfProjectGroups(Filter: string | null | undefined): Observable<number> {
			return this.http.get<number>(this.baseUri + 'projectgroups/count?Filter=' + (Filter == null ? '' : encodeURIComponent(Filter)), {});
		}

		/**
		 * Retrieve a page of Project Groups
		 * Use this endpoint to load a page of Project Groups.
		 * Get projectgroups/paged
		 * @return {Array<ProjectGroup>} Success
		 */
		GetPageOfProjectGroups(Filter: string | null | undefined, Sort: string | null | undefined, PageSize: number | null | undefined, SkipPages: number | null | undefined): Observable<Array<ProjectGroup>> {
			return this.http.get<Array<ProjectGroup>>(this.baseUri + 'projectgroups/paged?Filter=' + (Filter == null ? '' : encodeURIComponent(Filter)) + '&Sort=' + (Sort == null ? '' : encodeURIComponent(Sort)) + '&PageSize=' + PageSize + '&SkipPages=' + SkipPages, {});
		}

		/**
		 * Retrieve single Project Group
		 * Use this endpoint to load a single Project Group by id/number.
		 * Get projectgroups/{number}
		 * @return {ProjectGroup} Success
		 */
		GetProjectGroupById(number: number): Observable<ProjectGroup> {
			return this.http.get<ProjectGroup>(this.baseUri + 'projectgroups/' + number, {});
		}

		/**
		 * Retrieve all Projects
		 * Use this endpoint to retrieve all Projects in bulk.  Max number of items returned in a single call is 1000. Use the continuation cursor parameter to set the continuation cursor for retrieval of next set of data. [pagination instructions](#section/Retrieving-data/Pagination)
		 * Get projects
		 * @return {ProjectCursorResults} Success
		 */
		GetAllProjects(Cursor: string | null | undefined, Filter: string | null | undefined): Observable<ProjectCursorResults> {
			return this.http.get<ProjectCursorResults>(this.baseUri + 'projects?Cursor=' + (Cursor == null ? '' : encodeURIComponent(Cursor)) + '&Filter=' + (Filter == null ? '' : encodeURIComponent(Filter)), {});
		}

		/**
		 * Create a single Project
		 * Use this endpoint to create a single Project.
		 * Post projects
		 * @return {void} 
		 */
		CreateProject(requestBody: Project): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'projects', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Update a single Project
		 * Use this endpoint to update a single Project.
		 * Put projects
		 * @return {void} 
		 */
		UpdateProject(requestBody: Project): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'projects', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieve the allowed projects that employee can register an entry on.
		 * Use this endpoint to get all the projects that the employee is allowed to register an entry on. Potential restrictions of registration are based on recording rules in the UI, which cannot be modified through the API. Add the employee number to your query parameter to obtain the allowed projects for registrations.
		 * Get projects/allowed
		 * @param {number} employeeNumber The employee number.
		 * @return {Array<Project>} Success
		 */
		GetPagedListOfProjectUnderEmployee(employeeNumber: number): Observable<Array<Project>> {
			return this.http.get<Array<Project>>(this.baseUri + 'projects/allowed?employeeNumber=' + employeeNumber, {});
		}

		/**
		 * Retrieve the number of Projects
		 * Call this endpoint to get the number of Projects. You can use a filtering as well.
		 * Get projects/count
		 * @return {number} Success
		 */
		GetNumberOfProjects(Filter: string | null | undefined): Observable<number> {
			return this.http.get<number>(this.baseUri + 'projects/count?Filter=' + (Filter == null ? '' : encodeURIComponent(Filter)), {});
		}

		/**
		 * Retrieve a page of Projects
		 * Use this endpoint to load a page of Projects.
		 * Get projects/paged
		 * @return {Array<Project>} Success
		 */
		GetPageOfProjects(Filter: string | null | undefined, Sort: string | null | undefined, PageSize: number | null | undefined, SkipPages: number | null | undefined): Observable<Array<Project>> {
			return this.http.get<Array<Project>>(this.baseUri + 'projects/paged?Filter=' + (Filter == null ? '' : encodeURIComponent(Filter)) + '&Sort=' + (Sort == null ? '' : encodeURIComponent(Sort)) + '&PageSize=' + PageSize + '&SkipPages=' + SkipPages, {});
		}

		/**
		 * Delete single Project
		 * Use this endpoint to delete a single Project by id/number.
		 * Delete projects/{number}
		 * @return {void} 
		 */
		DeleteProjectById(number: number): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'projects/' + number, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieve single Project
		 * Use this endpoint to load a single Project by id/number.
		 * Get projects/{number}
		 * @return {Project} Success
		 */
		GetProjectById(number: number): Observable<Project> {
			return this.http.get<Project>(this.baseUri + 'projects/' + number, {});
		}

		/**
		 * Retrieve all Project Statuses
		 * Use this endpoint to retrieve all Project Statuses in bulk.  Max number of items returned in a single call is 1000. Use the continuation cursor parameter to set the continuation cursor for retrieval of next set of data. [pagination instructions](#section/Retrieving-data/Pagination)
		 * Get projectstatuses
		 * @return {ProjectStatusCursorResults} Success
		 */
		GetAllProjectStatuses(Cursor: string | null | undefined, Filter: string | null | undefined): Observable<ProjectStatusCursorResults> {
			return this.http.get<ProjectStatusCursorResults>(this.baseUri + 'projectstatuses?Cursor=' + (Cursor == null ? '' : encodeURIComponent(Cursor)) + '&Filter=' + (Filter == null ? '' : encodeURIComponent(Filter)), {});
		}

		/**
		 * Retrieve the number of Project Statuses
		 * Call this endpoint to get the number of Project Statuses. You can use a filtering as well.
		 * Get projectstatuses/count
		 * @return {number} Success
		 */
		GetNumberOfProjectStatuses(Filter: string | null | undefined): Observable<number> {
			return this.http.get<number>(this.baseUri + 'projectstatuses/count?Filter=' + (Filter == null ? '' : encodeURIComponent(Filter)), {});
		}

		/**
		 * Retrieve a page of Project Statuses
		 * Use this endpoint to load a page of Project Statuses.
		 * Get projectstatuses/paged
		 * @return {Array<ProjectStatus>} Success
		 */
		GetPageOfProjectStatuses(Filter: string | null | undefined, Sort: string | null | undefined, PageSize: number | null | undefined, SkipPages: number | null | undefined): Observable<Array<ProjectStatus>> {
			return this.http.get<Array<ProjectStatus>>(this.baseUri + 'projectstatuses/paged?Filter=' + (Filter == null ? '' : encodeURIComponent(Filter)) + '&Sort=' + (Sort == null ? '' : encodeURIComponent(Sort)) + '&PageSize=' + PageSize + '&SkipPages=' + SkipPages, {});
		}

		/**
		 * Retrieve single Project Status
		 * Use this endpoint to load a single Project Status by id/number.
		 * Get projectstatuses/{number}
		 * @return {ProjectStatus} Success
		 */
		GetProjectStatusById(number: number): Observable<ProjectStatus> {
			return this.http.get<ProjectStatus>(this.baseUri + 'projectstatuses/' + number, {});
		}

		/**
		 * Retrieve all Time entries
		 * Use this endpoint to retrieve all Time entries in bulk.  Max number of items returned in a single call is 1000. Use the continuation cursor parameter to set the continuation cursor for retrieval of next set of data. [pagination instructions](#section/Retrieving-data/Pagination)
		 * Get timeentries
		 * @return {TimeEntryCursorResults} Success
		 */
		GetAllTimeEntries(Cursor: string | null | undefined, Filter: string | null | undefined): Observable<TimeEntryCursorResults> {
			return this.http.get<TimeEntryCursorResults>(this.baseUri + 'timeentries?Cursor=' + (Cursor == null ? '' : encodeURIComponent(Cursor)) + '&Filter=' + (Filter == null ? '' : encodeURIComponent(Filter)), {});
		}

		/**
		 * Create a single Time entry
		 * Use this endpoint to create a single Time entry.
		 * Post timeentries
		 * @return {void} 
		 */
		CreateTimeEntry(requestBody: TimeEntry): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'timeentries', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Update a single Time entry
		 * Use this endpoint to update a single Time entry.
		 * Put timeentries
		 * @return {void} 
		 */
		UpdateTimeEntry(requestBody: TimeEntry): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'timeentries', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Approve a list of Time entries
		 * Use this endpoint to approve a list of Time entries.
		 * Post timeentries/approve
		 * @return {void} 
		 */
		ApproveTimeEntries(requestBody: TimeEntryNumbersCollection): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'timeentries/approve', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieve the number of Time entries
		 * Call this endpoint to get the number of Time entries. You can use a filtering as well.
		 * Get timeentries/count
		 * @return {number} Success
		 */
		GetNumberOfTimeEntries(Filter: string | null | undefined): Observable<number> {
			return this.http.get<number>(this.baseUri + 'timeentries/count?Filter=' + (Filter == null ? '' : encodeURIComponent(Filter)), {});
		}

		/**
		 * Retrieve a page of Time entries
		 * Use this endpoint to load a page of Time entries.
		 * Get timeentries/paged
		 * @return {Array<TimeEntry>} Success
		 */
		GetPageOfTimeEntries(Filter: string | null | undefined, Sort: string | null | undefined, PageSize: number | null | undefined, SkipPages: number | null | undefined): Observable<Array<TimeEntry>> {
			return this.http.get<Array<TimeEntry>>(this.baseUri + 'timeentries/paged?Filter=' + (Filter == null ? '' : encodeURIComponent(Filter)) + '&Sort=' + (Sort == null ? '' : encodeURIComponent(Sort)) + '&PageSize=' + PageSize + '&SkipPages=' + SkipPages, {});
		}

		/**
		 * Delete single Time entry
		 * Use this endpoint to delete a single Time entry by id/number.
		 * Delete timeentries/{number}
		 * @return {void} 
		 */
		DeleteTimeEntryById(number: number): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'timeentries/' + number, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieve single Time entry
		 * Use this endpoint to load a single Time entry by id/number.
		 * Get timeentries/{number}
		 * @return {TimeEntry} Success
		 */
		GetTimeEntryById(number: number): Observable<TimeEntry> {
			return this.http.get<TimeEntry>(this.baseUri + 'timeentries/' + number, {});
		}

		/**
		 * Retrieve all Time entry prices
		 * Use this endpoint to retrieve all Time entry prices in bulk.  Max number of items returned in a single call is 1000. Use the continuation cursor parameter to set the continuation cursor for retrieval of next set of data. [pagination instructions](#section/Retrieving-data/Pagination)
		 * Get timeentryprices
		 * @return {TimeEntryPricesCursorResults} Success
		 */
		GetAllTimeEntryPrices(Cursor: string | null | undefined, Filter: string | null | undefined): Observable<TimeEntryPricesCursorResults> {
			return this.http.get<TimeEntryPricesCursorResults>(this.baseUri + 'timeentryprices?Cursor=' + (Cursor == null ? '' : encodeURIComponent(Cursor)) + '&Filter=' + (Filter == null ? '' : encodeURIComponent(Filter)), {});
		}

		/**
		 * Retrieve a page of Time entry prices
		 * Use this endpoint to load a page of Time entry prices.
		 * Get timeentryprices/paged
		 * @return {Array<TimeEntryPrices>} Success
		 */
		GetPageOfTimeEntryPrices(Filter: string | null | undefined, Sort: string | null | undefined, PageSize: number | null | undefined, SkipPages: number | null | undefined): Observable<Array<TimeEntryPrices>> {
			return this.http.get<Array<TimeEntryPrices>>(this.baseUri + 'timeentryprices/paged?Filter=' + (Filter == null ? '' : encodeURIComponent(Filter)) + '&Sort=' + (Sort == null ? '' : encodeURIComponent(Sort)) + '&PageSize=' + PageSize + '&SkipPages=' + SkipPages, {});
		}

		/**
		 * Retrieve single Time entry prices
		 * Use this endpoint to load a single Time entry prices by id/number.
		 * Get timeentryprices/{number}
		 * @return {TimeEntryPrices} Success
		 */
		GetTimeEntryPricesById(number: number): Observable<TimeEntryPrices> {
			return this.http.get<TimeEntryPrices>(this.baseUri + 'timeentryprices/' + number, {});
		}
	}

}

